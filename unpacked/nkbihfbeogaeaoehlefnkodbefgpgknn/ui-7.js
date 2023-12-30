LavaPack.loadBundle(
  [
    [
      5307,
      {
        "../../../helpers/constants/connected-sites": 5536,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/tooltip": 5502,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ConnectedSiteMenu = void 0);
                var r = f(e("react")),
                  n = f(e("prop-types")),
                  a = f(e("classnames")),
                  i = e("react-redux"),
                  l = e("../../../helpers/constants/connected-sites"),
                  s = e("../../../helpers/constants/design-system"),
                  u = e("../../component-library"),
                  c = e("../../../selectors"),
                  d = f(e("../../ui/tooltip")),
                  p = e("../../../hooks/useI18nContext");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = ({ className: e, globalMenuColor: t, status: o, text: n, onClick: f }) => {
                  const m = (0, p.useI18nContext)(),
                    g = (0, i.useSelector)(c.getSelectedIdentity),
                    h = o === l.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT || o === l.STATUS_CONNECTED_TO_SNAP;
                  return r.default.createElement(
                    u.Box,
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
                    r.default.createElement(
                      d.default,
                      {
                        title: o === l.STATUS_NOT_CONNECTED ? m("statusNotConnectedAccount") : `${null == g ? void 0 : g.name} ${n}`,
                        "data-testid": "multichain-connected-site-menu__tooltip",
                        position: "bottom"
                      },
                      r.default.createElement(
                        u.BadgeWrapper,
                        {
                          positionObj: h ? { bottom: 4, right: -1, zIndex: 1 } : { bottom: 2, right: -4, zIndex: 1 },
                          badge: r.default.createElement(u.Box, {
                            backgroundColor: t,
                            className: (0, a.default)("multichain-connected-site-menu__badge", { "not-connected": h }),
                            borderRadius: s.BorderRadius.full,
                            borderColor: h ? s.BorderColor.successDefault : s.BackgroundColor.backgroundDefault,
                            borderWidth: h ? 2 : 3
                          })
                        },
                        r.default.createElement(u.Icon, { name: u.IconName.Global, size: u.IconSize.Sm, color: s.IconColor.iconDefault })
                      )
                    )
                  );
                };
                (o.ConnectedSiteMenu = m),
                  (m.propTypes = {
                    className: n.default.string,
                    globalMenuColor: n.default.string.isRequired,
                    status: n.default.string.isRequired,
                    text: n.default.string,
                    onClick: n.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/connected-site-menu/connected-site-menu.js" }
    ],
    [
      5308,
      { "./connected-site-menu": 5307 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ConnectedSiteMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.ConnectedSiteMenu;
                    }
                  });
                var r = e("./connected-site-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/connected-site-menu/index.js" }
    ],
    [
      5309,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/history/history": 5526,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/accounts": 5557,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.CreateAccount = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = b(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("../../component-library"),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/utils/accounts"),
                  d = e("../../../selectors"),
                  p = e("../../../store/actions"),
                  f = e("../../../ducks/history/history"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../helpers/constants/design-system");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (b = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const v = ({ onActionComplete: e }) => {
                  const t = (0, u.useI18nContext)(),
                    o = (0, i.useDispatch)(),
                    r = (0, l.useHistory)(),
                    a = (0, n.useContext)(g.MetaMetricsContext),
                    b = (0, i.useSelector)(d.getMetaMaskAccountsOrdered),
                    v = (0, i.useSelector)(d.getMetaMaskIdentities),
                    y = (0, i.useSelector)(f.getMostRecentOverviewPage),
                    T = t("newAccountNumberName", [Object.keys(v).length + 1]),
                    [C, k] = (0, n.useState)(""),
                    M = C.trim(),
                    { isValidAccountName: S, errorMessage: A } = (0, c.getAccountNameErrorMessage)(b, { t: t }, M || T, T),
                    O = async (t) => {
                      t.preventDefault();
                      try {
                        await (async (e) => {
                          const t = await o((0, p.addNewAccount)());
                          e && o((0, p.setAccountLabel)(t, e));
                        })(M || T),
                          e(!0),
                          a({
                            category: m.MetaMetricsEventCategory.Accounts,
                            event: m.MetaMetricsEventName.AccountAdded,
                            properties: { account_type: m.MetaMetricsEventAccountType.Default, location: "Home" }
                          }),
                          r.push(y);
                      } catch (e) {
                        a({
                          category: m.MetaMetricsEventCategory.Accounts,
                          event: m.MetaMetricsEventName.AccountAddFailed,
                          properties: { account_type: m.MetaMetricsEventAccountType.Default, error: e.message }
                        });
                      }
                    };
                  return n.default.createElement(
                    s.Box,
                    { as: "form", onSubmit: O },
                    n.default.createElement(s.FormTextField, {
                      autoFocus: !0,
                      label: t("accountName"),
                      placeholder: T,
                      onChange: (e) => k(e.target.value),
                      helpText: A,
                      error: !S,
                      onKeyPress: (e) => {
                        "Enter" === e.key && O(e);
                      }
                    }),
                    n.default.createElement(
                      s.Box,
                      { display: h.Display.Flex, marginTop: 6, gap: 2 },
                      n.default.createElement(s.ButtonSecondary, { onClick: () => e(), block: !0 }, t("cancel")),
                      n.default.createElement(s.ButtonPrimary, { type: "submit", disabled: !S, block: !0 }, t("create"))
                    )
                  );
                };
                (o.CreateAccount = v), (v.propTypes = { onActionComplete: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/create-account/create-account.js" }
    ],
    [
      5310,
      { "./create-account": 5309 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "CreateAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.CreateAccount;
                    }
                  });
                var r = e("./create-account");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/create-account/index.js" }
    ],
    [
      5311,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.DetectedTokensBanner = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = f(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = p(e("prop-types")),
                  i = p(e("classnames")),
                  l = e("../../../hooks/useI18nContext"),
                  s = e("../../../selectors"),
                  u = e("../../../contexts/metametrics"),
                  c = e("../../../../shared/constants/metametrics"),
                  d = e("../../component-library");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (f = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                const g = ({ className: e, actionButtonOnClick: t, ...o }) => {
                  const a = (0, l.useI18nContext)(),
                    p = (0, r.useContext)(u.MetaMetricsContext),
                    f = (0, n.useSelector)(s.getDetectedTokensInCurrentNetwork),
                    g = f.map(({ address: e, symbol: t }) => `${t} - ${e}`),
                    h = (0, n.useSelector)(s.getCurrentChainId);
                  return r.default.createElement(
                    d.BannerAlert,
                    m(
                      {
                        className: (0, i.default)("multichain-detected-token-banner", e),
                        actionButtonLabel: a("importTokensCamelCase"),
                        actionButtonOnClick: () => {
                          t(),
                            p({
                              event: c.MetaMetricsEventName.TokenImportClicked,
                              category: c.MetaMetricsEventCategory.Wallet,
                              properties: { source_connection_method: c.MetaMetricsTokenEventSource.Detected, tokens: g, chain_id: h }
                            });
                        },
                        "data-testid": "detected-token-banner"
                      },
                      o
                    ),
                    1 === f.length ? a("numberOfNewTokensDetectedSingular") : a("numberOfNewTokensDetectedPlural", [f.length])
                  );
                };
                (o.DetectedTokensBanner = g),
                  (g.propTypes = { actionButtonOnClick: a.default.func.isRequired, className: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/detected-token-banner/detected-token-banner.js" }
    ],
    [
      5312,
      { "./detected-token-banner": 5311 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "DetectedTokensBanner", {
                    enumerable: !0,
                    get: function () {
                      return r.DetectedTokensBanner;
                    }
                  });
                var r = e("./detected-token-banner");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/detected-token-banner/index.js" }
    ],
    [
      5313,
      {
        "..": 5327,
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/menu": 5447,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.GlobalMenu = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = C(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("react-router-dom"),
                  l = e("react-redux"),
                  s = e("../../../helpers/constants/routes"),
                  u = e("../../../store/actions"),
                  c = e("../../../hooks/useI18nContext"),
                  d = e("../../component-library"),
                  p = e("../../ui/menu"),
                  f = e("../../../../app/scripts/lib/util"),
                  m = e("../../../../shared/constants/app"),
                  g = e("../../../../shared/lib/ui-utils"),
                  h = e("../../../contexts/metametrics"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = e("../../../selectors"),
                  y = e("../../../helpers/constants/design-system"),
                  T = e("..");
                function C(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (C = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const k = "Global Menu",
                  M = ({ closeMenu: e, anchorElement: t }) => {
                    const o = (0, c.useI18nContext)(),
                      r = (0, l.useDispatch)(),
                      a = (0, n.useContext)(h.MetaMetricsContext),
                      C = (0, i.useHistory)(),
                      M = (0, l.useSelector)(v.getSelectedAddress),
                      S = (0, l.useSelector)(v.getUnapprovedTransactions),
                      A = (0, l.useSelector)(v.getNotifySnaps),
                      O = Object.keys(S).length > 0,
                      E = (0, l.useSelector)(v.getUnreadNotificationsCount);
                    let P = o("support"),
                      _ = g.SUPPORT_LINK;
                    return n.default.createElement(
                      p.Menu,
                      { anchorElement: t, onHide: e },
                      n.default.createElement(T.AccountDetailsMenuItem, { metricsLocation: k, closeMenu: e, address: M }),
                      n.default.createElement(T.ViewExplorerMenuItem, { metricsLocation: k, closeMenu: e, address: M }),
                      n.default.createElement(d.Box, {
                        borderColor: y.BorderColor.borderMuted,
                        width: y.BlockSize.Full,
                        style: { height: "1px", borderBottomWidth: 0 }
                      }),
                      n.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Connect,
                          disabled: O,
                          onClick: () => {
                            C.push(s.CONNECTED_ROUTE),
                              a({
                                event: b.MetaMetricsEventName.NavConnectedSitesOpened,
                                category: b.MetaMetricsEventCategory.Navigation,
                                properties: { location: k }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-connected-sites"
                        },
                        o("connectedSites")
                      ),
                      (0, f.getEnvironmentType)() === m.ENVIRONMENT_TYPE_FULLSCREEN
                        ? null
                        : n.default.createElement(
                            p.MenuItem,
                            {
                              iconName: d.IconName.Expand,
                              onClick: () => {
                                global.platform.openExtensionInBrowser(),
                                  a({
                                    event: b.MetaMetricsEventName.AppWindowExpanded,
                                    category: b.MetaMetricsEventCategory.Navigation,
                                    properties: { location: k }
                                  }),
                                  e();
                              },
                              "data-testid": "global-menu-expand"
                            },
                            o("expandView")
                          ),
                      A.length
                        ? n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement(
                              p.MenuItem,
                              {
                                iconName: d.IconName.Notification,
                                onClick: () => {
                                  e(), C.push(s.NOTIFICATIONS_ROUTE);
                                }
                              },
                              o("notifications"),
                              E > 0 &&
                                n.default.createElement(
                                  d.Text,
                                  {
                                    as: "span",
                                    display: y.Display.InlineBlock,
                                    justifyContent: y.JustifyContent.center,
                                    alignItems: y.AlignItems.center,
                                    backgroundColor: y.BackgroundColor.primaryDefault,
                                    color: y.TextColor.primaryInverse,
                                    padding: [0, 1, 0, 1],
                                    variant: y.TextVariant.bodyXs,
                                    textAlign: y.TextAlign.Center,
                                    "data-testid": "global-menu-notification-count",
                                    style: { borderRadius: "16px", minWidth: "24px" },
                                    marginInlineStart: 2
                                  },
                                  E > 99 ? "99+" : E
                                )
                            )
                          )
                        : null,
                      n.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Snaps,
                          onClick: () => {
                            C.push(s.SNAPS_ROUTE), e();
                          }
                        },
                        o("snaps")
                      ),
                      n.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.MessageQuestion,
                          onClick: () => {
                            global.platform.openTab({ url: _ }),
                              a(
                                {
                                  category: b.MetaMetricsEventCategory.Home,
                                  event: b.MetaMetricsEventName.SupportLinkClicked,
                                  properties: { url: _, location: k }
                                },
                                { contextPropsIntoEventProperties: [b.MetaMetricsContextProp.PageTitle] }
                              ),
                              e();
                          },
                          "data-testid": "global-menu-support"
                        },
                        P
                      ),
                      n.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Setting,
                          disabled: O,
                          onClick: () => {
                            C.push(s.SETTINGS_ROUTE),
                              a({
                                category: b.MetaMetricsEventCategory.Navigation,
                                event: b.MetaMetricsEventName.NavSettingsOpened,
                                properties: { location: k }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-settings"
                        },
                        o("settings")
                      ),
                      n.default.createElement(
                        p.MenuItem,
                        {
                          iconName: d.IconName.Lock,
                          onClick: () => {
                            r((0, u.lockMetamask)()),
                              C.push(s.DEFAULT_ROUTE),
                              a({
                                category: b.MetaMetricsEventCategory.Navigation,
                                event: b.MetaMetricsEventName.AppLocked,
                                properties: { location: k }
                              }),
                              e();
                          },
                          "data-testid": "global-menu-lock"
                        },
                        o("lockMetaMask")
                      )
                    );
                  };
                (o.GlobalMenu = M),
                  (M.propTypes = { anchorElement: a.default.instanceOf(window.Element), closeMenu: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/global-menu/global-menu.js" }
    ],
    [
      5314,
      { "./global-menu": 5313 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "GlobalMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.GlobalMenu;
                    }
                  });
                var r = e("./global-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/global-menu/index.js" }
    ],
    [
      5315,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = d(e("prop-types")),
                  n = d(e("react")),
                  a = e("react-redux"),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext"),
                  u = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("../../../store/actions"));
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ importAccountFunc: e, isPrimaryDisabled: t, onActionComplete: o }) {
                  const r = (0, s.useI18nContext)(),
                    c = (0, a.useDispatch)();
                  return n.default.createElement(
                    i.Box,
                    { display: l.Display.Flex, gap: 4 },
                    n.default.createElement(
                      i.ButtonSecondary,
                      {
                        onClick: () => {
                          c(u.hideWarning()), o();
                        },
                        size: i.ButtonSecondarySize.Lg,
                        block: !0
                      },
                      r("cancel")
                    ),
                    n.default.createElement(
                      i.ButtonPrimary,
                      {
                        onClick: async () => {
                          try {
                            (await e()) && o(!0);
                          } catch (e) {}
                        },
                        disabled: t,
                        size: i.ButtonSecondarySize.Lg,
                        "data-testid": "import-account-confirm-button",
                        block: !0
                      },
                      r("import")
                    )
                  );
                }
                p.propTypes = {
                  importAccountFunc: r.default.func.isRequired,
                  isPrimaryDisabled: r.default.bool.isRequired,
                  onActionComplete: r.default.func.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/bottom-buttons.js" }
    ],
    [
      5316,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/dropdown": 5402,
        "./json": 5318,
        "./private-key": 5319,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ImportAccount = void 0);
                var r = v(e("react")),
                  n = h(e("prop-types")),
                  a = e("react-redux"),
                  i = e("../../../../shared/constants/metametrics"),
                  l = e("../../component-library"),
                  s = h(e("../../ui/dropdown")),
                  u = e("../../../contexts/metametrics"),
                  c = e("../../../helpers/constants/design-system"),
                  d = h(e("../../../helpers/constants/zendesk-url")),
                  p = e("../../../hooks/useI18nContext"),
                  f = v(e("../../../store/actions")),
                  m = h(e("./json")),
                  g = h(e("./private-key"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (b = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function v(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var o = b(t);
                  if (o && o.has(e)) return o.get(e);
                  var r = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                      var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                    }
                  return (r.default = e), o && o.set(e, r), r;
                }
                const y = ({ onActionComplete: e }) => {
                  const t = (0, p.useI18nContext)(),
                    o = (0, a.useDispatch)(),
                    n = (0, r.useContext)(u.MetaMetricsContext),
                    h = [t("privateKey"), t("jsonFile")],
                    [b, v] = (0, r.useState)(h[0]);
                  async function y(n, a) {
                    const i = (function (e) {
                      if ("json" === e)
                        return r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            l.Text,
                            { width: c.BlockSize.ThreeFourths, fontWeight: c.FontWeight.Bold },
                            t("importAccountJsonLoading1")
                          ),
                          r.default.createElement(
                            l.Text,
                            { width: c.BlockSize.ThreeFourths, fontWeight: c.FontWeight.Bold },
                            t("importAccountJsonLoading2")
                          )
                        );
                      return "";
                    })(n);
                    try {
                      const { selectedAddress: r } = await o(f.importNewAccount(n, a, i));
                      if (!r) return o(f.displayWarning(t("importAccountError"))), !1;
                      T(n, !0), o(f.hideWarning()), e(!0);
                    } catch (e) {
                      return (
                        T(n, e.message),
                        (s = e.message) && !s.startsWith("t(") ? o(f.displayWarning(s)) : o(f.displayWarning(t(s.slice(3, -2)))),
                        !1
                      );
                    }
                    var s;
                    return !0;
                  }
                  function T(e, t) {
                    const o =
                        "Private Key" === e ? i.MetaMetricsEventAccountImportType.PrivateKey : i.MetaMetricsEventAccountImportType.Json,
                      r = t ? i.MetaMetricsEventName.AccountAdded : i.MetaMetricsEventName.AccountAddFailed;
                    n({
                      category: i.MetaMetricsEventCategory.Accounts,
                      event: r,
                      properties: { account_type: i.MetaMetricsEventAccountType.Imported, account_import_type: o }
                    });
                  }
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      l.Text,
                      { variant: c.TextVariant.bodySm, marginTop: 2 },
                      t("importAccountMsg"),
                      " ",
                      r.default.createElement(
                        l.ButtonLink,
                        { size: c.Size.inherit, href: d.default.IMPORTED_ACCOUNTS, target: "_blank", rel: "noopener noreferrer" },
                        t("here")
                      )
                    ),
                    r.default.createElement(
                      l.Box,
                      { paddingTop: 4, paddingBottom: 8 },
                      r.default.createElement(
                        l.Label,
                        { width: c.BlockSize.Full, marginBottom: 4, justifyContent: c.JustifyContent.spaceBetween },
                        t("selectType"),
                        r.default.createElement(s.default, {
                          options: h.map((e) => ({ value: e })),
                          selectedOption: b,
                          onChange: (e) => {
                            o(f.hideWarning()), v(e);
                          }
                        })
                      ),
                      b === h[0]
                        ? r.default.createElement(g.default, { importAccountFunc: y, onActionComplete: e })
                        : r.default.createElement(m.default, { importAccountFunc: y, onActionComplete: e })
                    )
                  );
                };
                (o.ImportAccount = y), (y.propTypes = { onActionComplete: n.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/import-account.js" }
    ],
    [
      5317,
      { "./import-account": 5316 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ImportAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.ImportAccount;
                    }
                  });
                var r = e("./import-account");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/index.js" }
    ],
    [
      5318,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "./bottom-buttons": 5315,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-simple-file-input": 4470
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = g);
                var r = m(e("prop-types")),
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = f(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  i = m(e("react-simple-file-input")),
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  u = m(e("../../../helpers/constants/zendesk-url")),
                  c = e("../../../hooks/useI18nContext"),
                  d = e("../../../store/actions"),
                  p = m(e("./bottom-buttons"));
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (f = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g({ importAccountFunc: e, onActionComplete: t }) {
                  const o = (0, c.useI18nContext)(),
                    r = (0, a.useSelector)((e) => e.appState.warning),
                    [f, m] = (0, n.useState)(""),
                    [g, h] = (0, n.useState)(""),
                    b = "" === g;
                  function v() {
                    b ? (0, d.displayWarning)(o("needImportFile")) : e("json", [g, f]);
                  }
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(
                      l.Text,
                      { variant: s.TextVariant.bodyMd, textAlign: s.TextAlign.Center },
                      o("usedByClients"),
                      n.default.createElement(
                        l.ButtonLink,
                        { size: s.Size.inherit, href: u.default.IMPORTED_ACCOUNTS, target: "_blank", rel: "noopener noreferrer" },
                        o("fileImportFail")
                      )
                    ),
                    n.default.createElement(i.default, {
                      id: "file-input",
                      "data-testid": "file-input",
                      readAs: "text",
                      onLoad: (e) => h(e.target.result),
                      style: { padding: "20px 0px 12px 15%", fontSize: "16px", display: "flex", justifyContent: "center", width: "100%" }
                    }),
                    n.default.createElement(l.FormTextField, {
                      id: "json-password-box",
                      size: l.TEXT_FIELD_SIZES.LARGE,
                      autoFocus: !0,
                      type: l.TEXT_FIELD_TYPES.PASSWORD,
                      helpText: r,
                      error: !0,
                      placeholder: o("enterOptionalPassword"),
                      value: f,
                      onChange: (e) => {
                        m(e.target.value);
                      },
                      inputProps: {
                        onKeyPress: function (e) {
                          b || "Enter" !== e.key || (e.preventDefault(), v());
                        }
                      },
                      marginBottom: 4
                    }),
                    n.default.createElement(p.default, { importAccountFunc: v, isPrimaryDisabled: b, onActionComplete: t })
                  );
                }
                g.propTypes = { importAccountFunc: r.default.func.isRequired, onActionComplete: r.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/json.js" }
    ],
    [
      5319,
      {
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "./bottom-buttons": 5315,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = d);
                var r = c(e("prop-types")),
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  i = e("../../component-library"),
                  l = e("../../../hooks/useI18nContext"),
                  s = c(e("./bottom-buttons"));
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d({ importAccountFunc: e, onActionComplete: t }) {
                  const o = (0, l.useI18nContext)(),
                    [r, u] = (0, n.useState)(""),
                    c = (0, a.useSelector)((e) => e.appState.warning);
                  function d() {
                    e("privateKey", [r]);
                  }
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(i.FormTextField, {
                      id: "private-key-box",
                      size: i.TEXT_FIELD_SIZES.LARGE,
                      autoFocus: !0,
                      type: i.TEXT_FIELD_TYPES.PASSWORD,
                      helpText: c,
                      error: !0,
                      label: o("pastePrivateKey"),
                      value: r,
                      onChange: (e) => u(e.target.value),
                      inputProps: {
                        onKeyPress: function (e) {
                          "" !== r && "Enter" === e.key && (e.preventDefault(), d());
                        }
                      },
                      marginBottom: 4
                    }),
                    n.default.createElement(s.default, { importAccountFunc: d, isPrimaryDisabled: "" === r, onActionComplete: t })
                  );
                }
                d.propTypes = { importAccountFunc: r.default.func.isRequired, onActionComplete: r.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-account/private-key.js" }
    ],
    [
      532,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.version = void 0), (o.version = "wordlists/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/_version.js" }
    ],
    [
      5320,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/transaction": 4770,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../hooks/useNftsCollections": 5605,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../app/nfts-detection-notice-import-nfts/nfts-detection-notice-import-nfts": 5011,
        "../../component-library": 5242,
        "../../ui/tooltip": 5502,
        "@metamask/controller-utils": 1124,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ImportNftsModal = void 0);
                var r = e("@metamask/controller-utils"),
                  n = M(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = k(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("../../../../shared/constants/metametrics"),
                  u = e("../../../../shared/constants/transaction"),
                  c = e("../../../contexts/metametrics"),
                  d = e("../../../ducks/metamask/metamask"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../selectors"),
                  h = e("../../../store/actions"),
                  b = M(e("../../app/nfts-detection-notice-import-nfts/nfts-detection-notice-import-nfts")),
                  v = e("../../component-library"),
                  y = M(e("../../ui/tooltip")),
                  T = e("../../../hooks/useNftsCollections"),
                  C = e("../../../helpers/utils/util");
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (k = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function M(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const S = ({ onClose: e }) => {
                  const t = (0, m.useI18nContext)(),
                    o = (0, l.useHistory)(),
                    n = (0, i.useDispatch)(),
                    k = (0, i.useSelector)(g.getOpenSeaEnabled),
                    M = (0, i.useSelector)(g.getIsMainnet),
                    S = (0, i.useSelector)(d.getNftsDropdownState),
                    A = (0, i.useSelector)(g.getSelectedAddress),
                    O = (0, i.useSelector)(g.getCurrentChainId),
                    { tokenAddress: E, tokenId: P, ignoreErc20Token: _ } = (0, i.useSelector)((e) => e.appState.importNftsModal),
                    w = (0, T.useNftsCollections)(),
                    [B, L] = (0, a.useState)(E ?? ""),
                    [F, D] = (0, a.useState)(P ?? ""),
                    [x, N] = (0, a.useState)(!0),
                    [J, j] = (0, a.useState)(!1),
                    I = (0, a.useContext)(c.MetaMetricsContext),
                    [R, H] = (0, a.useState)(null),
                    [X, V] = (0, a.useState)(null);
                  return a.default.createElement(
                    v.Modal,
                    {
                      isOpen: !0,
                      onClose: () => {
                        e();
                      },
                      className: "import-nfts-modal"
                    },
                    a.default.createElement(v.ModalOverlay, null),
                    a.default.createElement(
                      v.ModalContent,
                      null,
                      a.default.createElement(
                        v.ModalHeader,
                        {
                          onClose: () => {
                            e();
                          }
                        },
                        t("importNFT")
                      ),
                      a.default.createElement(
                        v.Box,
                        null,
                        M && !k
                          ? a.default.createElement(v.Box, { marginTop: 6 }, a.default.createElement(b.default, { onActionButtonClick: e }))
                          : null,
                        J &&
                          a.default.createElement(
                            v.Box,
                            { marginTop: 6 },
                            a.default.createElement(
                              v.BannerAlert,
                              {
                                severity: p.Severity.Danger,
                                onClose: () => j(!1),
                                closeButtonProps: { "data-testid": "add-nft-error-close" }
                              },
                              t("nftAddFailedMessage")
                            )
                          ),
                        a.default.createElement(
                          v.Box,
                          { display: p.Display.Flex, flexDirection: p.FlexDirection.Column, gap: 6, marginTop: 6, marginBottom: 6 },
                          a.default.createElement(
                            v.Box,
                            null,
                            a.default.createElement(
                              v.Box,
                              { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween, alignItems: p.AlignItems.flexEnd },
                              a.default.createElement(
                                v.Box,
                                { display: p.Display.Flex, alignItems: p.AlignItems.center },
                                a.default.createElement(v.Label, { htmlFor: "address" }, t("address")),
                                a.default.createElement(
                                  y.default,
                                  { title: t("importNFTAddressToolTip"), position: "bottom" },
                                  a.default.createElement(v.Icon, {
                                    name: v.IconName.Info,
                                    size: v.IconSize.Sm,
                                    marginLeft: 1,
                                    color: p.IconColor.iconAlternative
                                  })
                                )
                              )
                            ),
                            a.default.createElement(v.FormTextField, {
                              autoFocus: !0,
                              dataTestId: "address",
                              id: "address",
                              placeholder: "0x...",
                              value: B,
                              onChange: (e) => {
                                var o;
                                (o = e.target.value),
                                  H(null),
                                  o && !(0, r.isValidHexAddress)(o) && H(t("invalidAddress")),
                                  N(!(0, r.isValidHexAddress)(o) || !F),
                                  L(o),
                                  j(!1);
                              },
                              helpText: R,
                              error: Boolean(R)
                            })
                          ),
                          a.default.createElement(
                            v.Box,
                            null,
                            a.default.createElement(
                              v.Box,
                              { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween, alignItems: p.AlignItems.flexEnd },
                              a.default.createElement(
                                v.Box,
                                { display: p.Display.Flex, alignItems: p.AlignItems.center },
                                a.default.createElement(v.Label, { htmlFor: "token-id" }, t("tokenId")),
                                a.default.createElement(
                                  y.default,
                                  { title: t("importNFTTokenIdToolTip"), position: "bottom" },
                                  a.default.createElement(v.Icon, {
                                    name: v.IconName.Info,
                                    size: v.IconSize.Sm,
                                    marginLeft: 1,
                                    color: p.IconColor.iconAlternative
                                  })
                                )
                              )
                            ),
                            a.default.createElement(v.FormTextField, {
                              dataTestId: "token-id",
                              id: "token-id",
                              placeholder: t("nftTokenIdPlaceholder"),
                              value: F,
                              onChange: (e) => {
                                ((e) => {
                                  V(null);
                                  const o = (0, C.checkTokenIdExists)(B, e, w.collections);
                                  o && V(t("nftAlreadyAdded")), N(!(0, r.isValidHexAddress)(B) || !e || isNaN(Number(e)) || o), D(e);
                                })(e.target.value),
                                  j(!1);
                              },
                              helpText: X,
                              error: X
                            })
                          )
                        )
                      ),
                      a.default.createElement(
                        v.Box,
                        {
                          display: p.Display.Flex,
                          flexDirection: p.FlexDirection.Row,
                          justifyContent: p.JustifyContent.spaceBetween,
                          gap: 4,
                          paddingTop: 4,
                          paddingBottom: 4
                        },
                        a.default.createElement(
                          v.ButtonSecondary,
                          { size: v.ButtonSecondarySize.Lg, onClick: () => e(), block: !0, className: "import-nfts-modal__cancel-button" },
                          t("cancel")
                        ),
                        a.default.createElement(
                          v.ButtonPrimary,
                          {
                            size: p.Size.LG,
                            onClick: () =>
                              (async () => {
                                try {
                                  var t;
                                  await n((0, h.addNftVerifyOwnership)(B, F));
                                  const e = {
                                    ...S,
                                    [A]: {
                                      ...(null == S ? void 0 : S[A]),
                                      [O]: { ...(null == S || null === (t = S[A]) || void 0 === t ? void 0 : t[O]), [B]: !0 }
                                    }
                                  };
                                  n((0, h.updateNftDropDownState)(e));
                                } catch (e) {
                                  const { message: t } = e;
                                  return n((0, h.setNewNftAddedMessage)(t)), void j(!0);
                                }
                                _ && B && (await n((0, h.ignoreTokens)({ tokensToIgnore: B, dontShowLoadingIndicator: !0 }))),
                                  n((0, h.setNewNftAddedMessage)("success"));
                                const r = await (0, h.getTokenStandardAndDetails)(B, null, F.toString());
                                I({
                                  event: s.MetaMetricsEventName.TokenAdded,
                                  category: "Wallet",
                                  sensitiveProperties: {
                                    token_contract_address: B,
                                    token_symbol: null == r ? void 0 : r.symbol,
                                    tokenId: F.toString(),
                                    asset_type: u.AssetType.NFT,
                                    token_standard: null == r ? void 0 : r.standard,
                                    source_connection_method: s.MetaMetricsTokenEventSource.Custom
                                  }
                                }),
                                  o.push(f.DEFAULT_ROUTE),
                                  e();
                              })(),
                            disabled: x,
                            block: !0,
                            "data-testid": "import-nfts-modal-import-button"
                          },
                          t("import")
                        )
                      )
                    )
                  );
                };
                (o.ImportNftsModal = S), (S.propTypes = { onClose: n.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-nfts-modal/import-nfts-modal.js" }
    ],
    [
      5321,
      { "./import-nfts-modal": 5320 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ImportNftsModal", {
                    enumerable: !0,
                    get: function () {
                      return r.ImportNftsModal;
                    }
                  });
                var r = e("./import-nfts-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-nfts-modal/index.js" }
    ],
    [
      5322,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        classnames: 2952,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ImportTokenLink = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = m(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  i = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../store/actions"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (m = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function g() {
                  return (
                    (g = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    g.apply(this, arguments)
                  );
                }
                o.ImportTokenLink = ({ className: e = "", ...t }) => {
                  const o = (0, n.useContext)(d.MetaMetricsContext),
                    r = (0, u.useI18nContext)(),
                    m = (0, a.useDispatch)(),
                    h = (0, a.useSelector)(f.getIsTokenDetectionSupported),
                    b = (0, a.useSelector)(f.getIsTokenDetectionInactiveOnMainnet),
                    v = h || b || Boolean(!1);
                  return n.default.createElement(
                    l.Box,
                    g({ className: (0, i.default)("multichain-import-token-link", e) }, t),
                    n.default.createElement(
                      l.Box,
                      { display: s.Display.Flex, alignItems: s.AlignItems.center },
                      n.default.createElement(
                        l.ButtonLink,
                        {
                          size: l.ButtonLinkSize.Md,
                          "data-testid": "import-token-button",
                          startIconName: l.IconName.Add,
                          onClick: () => {
                            m((0, c.showImportTokensModal)()),
                              o(
                                {
                                  event: p.MetaMetricsEventName.TokenImportButtonClicked,
                                  category: p.MetaMetricsEventCategory.Navigation,
                                  properties: { location: "Home" }
                                },
                                {}
                              );
                          }
                        },
                        v
                          ? r("importTokensCamelCase")
                          : r("importTokensCamelCase").charAt(0).toUpperCase() + r("importTokensCamelCase").slice(1)
                      )
                    ),
                    n.default.createElement(
                      l.Box,
                      { display: s.Display.Flex, alignItems: s.AlignItems.center, paddingTop: 2 },
                      n.default.createElement(
                        l.ButtonLink,
                        {
                          size: l.ButtonLinkSize.Md,
                          startIconName: l.IconName.Refresh,
                          "data-testid": "refresh-list-button",
                          onClick: () => m((0, c.detectNewTokens)())
                        },
                        r("refreshList")
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
      5323,
      { "./import-token-link": 5322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ImportTokenLink", {
                    enumerable: !0,
                    get: function () {
                      return r.ImportTokenLink;
                    }
                  });
                var r = e("./import-token-link");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-token-link/index.ts" }
    ],
    [
      5324,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../../ui/identicon": 5430,
        "../../ui/token-balance/token-balance": 5498,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ImportTokensModalConfirm = void 0);
                var r = p(e("react")),
                  n = e("react-redux"),
                  a = p(e("prop-types")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = p(e("../../ui/token-balance/token-balance")),
                  u = p(e("../../ui/identicon")),
                  c = e("../../../hooks/useI18nContext"),
                  d = e("../../../ducks/metamask/metamask");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ onBackClick: e, onImportClick: t }) => {
                  const o = (0, c.useI18nContext)(),
                    a = (0, n.useSelector)(d.getPendingTokens);
                  return r.default.createElement(
                    i.Box,
                    { paddingTop: 4, paddingBottom: 4 },
                    r.default.createElement(i.Text, { textAlign: l.TextAlign.Center }, o("likeToImportTokens")),
                    r.default.createElement(
                      i.Box,
                      { marginTop: 4, marginBottom: 4 },
                      r.default.createElement(
                        i.Box,
                        { display: l.Display.Flex },
                        r.default.createElement(
                          i.Text,
                          { variant: l.TextVariant.bodySm, className: "import-tokens-modal__token-name" },
                          o("token")
                        ),
                        r.default.createElement(
                          i.Text,
                          { variant: l.TextVariant.bodySm, className: "import-tokens-modal__token-balance" },
                          o("balance")
                        )
                      ),
                      r.default.createElement(
                        i.Box,
                        { display: l.Display.Flex, className: "import-tokens-modal__confirm-token-list" },
                        Object.entries(a).map(([e, t]) => {
                          const { name: o, symbol: n } = t;
                          return r.default.createElement(
                            i.Box,
                            { key: e, marginBottom: 4, display: l.Display.Flex, className: "import-tokens-modal__confirm-token-list-item" },
                            r.default.createElement(
                              i.Box,
                              {
                                display: l.Display.Flex,
                                alignItems: l.AlignItems.center,
                                className: "import-tokens-modal__confirm-token-list-item-wrapper"
                              },
                              r.default.createElement(u.default, { diameter: 36, address: e }),
                              r.default.createElement(
                                i.Box,
                                { marginInlineStart: 4, className: "import-tokens-modal__confirm-token-list-item-wrapper__text" },
                                r.default.createElement(i.Text, { ellipsis: !0 }, o),
                                r.default.createElement(i.Text, { variant: l.TextVariant.bodySm, color: l.TextColor.textAlternative }, n)
                              )
                            ),
                            r.default.createElement(
                              i.Box,
                              { className: "import-tokens-modal__token-balance", alignItems: l.AlignItems.flexStart },
                              r.default.createElement(s.default, { token: t })
                            )
                          );
                        })
                      ),
                      r.default.createElement(
                        i.Box,
                        { display: l.Display.Flex, gap: 2, marginTop: 4 },
                        r.default.createElement(i.ButtonSecondary, { size: l.Size.LG, onClick: e, block: !0 }, o("back")),
                        r.default.createElement(
                          i.ButtonPrimary,
                          { size: l.Size.LG, onClick: t, block: !0, "data-testid": "import-tokens-modal-import-button" },
                          o("import")
                        )
                      )
                    )
                  );
                };
                (o.ImportTokensModalConfirm = f),
                  (f.propTypes = { onBackClick: a.default.func.isRequired, onImportClick: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/import-tokens-modal-confirm.js" }
    ],
    [
      5325,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/tokens": 4769,
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../helpers/utils/token-util": 5575,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../app/import-token/token-list": 4932,
        "../../app/import-token/token-search": 4937,
        "../../component-library": 5242,
        "../../ui/tabs": 5485,
        "./import-tokens-modal-confirm": 5324,
        "@metamask/etherscan-link/dist/token-tracker-link": 1373,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ImportTokensModal = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = _(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("react-router-dom"),
                  i = P(e("prop-types")),
                  l = e("@metamask/etherscan-link/dist/token-tracker-link"),
                  s = e("../../ui/tabs"),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../selectors"),
                  d = e("../../../store/actions"),
                  p = e("../../component-library"),
                  f = P(e("../../app/import-token/token-search")),
                  m = P(e("../../app/import-token/token-list")),
                  g = e("../../../helpers/constants/design-system"),
                  h = e("../../../helpers/constants/routes"),
                  b = P(e("../../../helpers/constants/zendesk-url")),
                  v = e("../../../../shared/modules/hexstring-utils"),
                  y = e("../../../../app/scripts/lib/util"),
                  T = e("../../../../shared/constants/tokens"),
                  C = e("../../../../shared/constants/transaction"),
                  k = e("../../../helpers/utils/util"),
                  M = e("../../../helpers/utils/token-util"),
                  S = e("../../../contexts/metametrics"),
                  A = e("../../../ducks/metamask/metamask"),
                  O = e("../../../../shared/constants/metametrics"),
                  E = e("./import-tokens-modal-confirm");
                function P(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (_ = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const w = ({ onClose: e }) => {
                  const t = (0, u.useI18nContext)(),
                    o = (0, a.useHistory)(),
                    i = (0, n.useDispatch)(),
                    [P, _] = (0, r.useState)(""),
                    [w, B] = (0, r.useState)(null),
                    [L, F] = (0, r.useState)({}),
                    [D, x] = (0, r.useState)([]),
                    N = (0, n.useSelector)(c.getIsTokenDetectionSupported),
                    J = (0, n.useSelector)(c.getIsTokenDetectionInactiveOnMainnet),
                    j = N || J || Boolean(!1),
                    I = (0, n.useSelector)(c.getTokenList),
                    R = (0, n.useSelector)(({ metamask: e }) => e.useTokenDetection),
                    H = (0, n.useSelector)(c.getTokenDetectionSupportNetworkByChainId),
                    X = (0, n.useSelector)(c.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork),
                    V = (0, n.useSelector)(c.getIsDynamicTokenListAvailable),
                    G = (0, n.useSelector)(c.getSelectedAddress),
                    z = (0, n.useSelector)(c.getIsMainnet),
                    U = (0, n.useSelector)(c.getMetaMaskIdentities),
                    Z = (0, n.useSelector)((e) => e.metamask.tokens),
                    $ = (0, n.useSelector)(c.getRpcPrefsForCurrentProvider),
                    [W, K] = (0, r.useState)(""),
                    [Q, q] = (0, r.useState)(null),
                    [Y, ee] = (0, r.useState)(null),
                    [te, oe] = (0, r.useState)(!1),
                    [re, ne] = (0, r.useState)(!1),
                    [ae, ie] = (0, r.useState)(null),
                    [le, se] = (0, r.useState)(""),
                    [ue, ce] = (0, r.useState)(null),
                    [de, pe] = (0, r.useState)(0),
                    [fe, me] = (0, r.useState)(null),
                    [ge, he] = (0, r.useState)(C.TokenStandard.none),
                    [be, ve] = (0, r.useState)(!1),
                    ye = (0, n.useSelector)(c.getCurrentChainId),
                    Te = (0, l.getTokenTrackerLink)(W, ye, null, null, {
                      blockExplorerUrl: (null == $ ? void 0 : $.blockExplorerUrl) ?? null
                    }),
                    Ce = null != $ && $.blockExplorerUrl ? (0, k.getURLHostName)(Te) : t("etherscan"),
                    ke = (0, r.useRef)((0, M.tokenInfoGetter)()),
                    Me = (0, r.useContext)(S.MetaMetricsContext),
                    Se = (0, n.useSelector)(A.getPendingTokens),
                    Ae = (0, n.useSelector)(c.getSelectedNetworkClientId),
                    Oe = (0, r.useCallback)(async () => {
                      var e;
                      const t = Object.values(Se);
                      await i((0, d.addImportedTokens)(t, Ae));
                      const r = null == t || null === (e = t[0].address) || void 0 === e ? void 0 : e.toLowerCase();
                      t.forEach((e) => {
                        Me({
                          event: O.MetaMetricsEventName.TokenAdded,
                          category: O.MetaMetricsEventCategory.Wallet,
                          sensitiveProperties: {
                            token_symbol: e.symbol,
                            token_contract_address: e.address,
                            token_decimal_precision: e.decimals,
                            unlisted: e.unlisted,
                            source_connection_method: e.isCustom
                              ? O.MetaMetricsTokenEventSource.Custom
                              : O.MetaMetricsTokenEventSource.List,
                            token_standard: C.TokenStandard.ERC20,
                            asset_type: C.AssetType.token
                          }
                        });
                      }),
                        i((0, d.clearPendingTokens)()),
                        r && o.push(`${h.ASSET_ROUTE}/${r}`);
                    }, [i, o, Se, Me]);
                  (0, r.useEffect)(() => {
                    const e = Object.keys(Se);
                    if (0 === e.length) return;
                    let t = {},
                      o = {};
                    e.forEach((e) => {
                      const r = Se[e],
                        { isCustom: n } = r;
                      n ? (o = { ...r }) : (t = { ...L, [e]: { ...r } });
                    }),
                      F(t),
                      K(o.address),
                      se(o.symbol),
                      pe(o.decimals);
                  }, [Se]);
                  const Ee = (e) => {
                      const o = e.trim(),
                        r = o.length;
                      let n = null;
                      (r <= 0 || r >= 12) && (n = t("symbolBetweenZeroTwelve")), se(o), ce(n);
                    },
                    Pe = (e) => {
                      let o,
                        r = null;
                      e
                        ? ((o = Number(e.trim())), (r = e < 0 || e > 36 ? t("decimalsMustZerotoTen") : null))
                        : ((o = ""), (r = t("tokenDecimalFetchFailed"))),
                        pe(o),
                        me(r);
                    },
                    _e = () => w || Q || ue || fe || Y,
                    we = () => W || Object.keys(L).length > 0,
                    Be = async (o) => {
                      const n = o.trim();
                      K(n), q(null), ee(null), oe(!1), ne(!1), ie(null);
                      const a = (0, v.isValidHexAddress)(n, { allowNonPrefixed: !1 }),
                        l = (0, y.addHexPrefix)(n).toLowerCase(),
                        s = Object.keys(T.STATIC_MAINNET_TOKEN_LIST).some((e) => e.toLowerCase() === n.toLowerCase());
                      let u;
                      if (a)
                        try {
                          ({ standard: u } = await (0, d.getTokenStandardAndDetails)(l, G, null));
                        } catch (e) {}
                      const c = 0 === n.length || "0x0000000000000000000000000000000000000000" === n;
                      switch (!0) {
                        case !a && !c:
                          q(t("invalidAddress")), se(""), pe(0), ce(null), me(null);
                          break;
                        case u === C.TokenStandard.ERC1155 || u === C.TokenStandard.ERC721:
                          ee(
                            t("nftAddressError", [
                              r.default.createElement(
                                p.ButtonLink,
                                {
                                  className: "import-tokens-modal__nft-address-error-link",
                                  onClick: () => {
                                    i((0, d.showImportNftsModal)({ tokenAddress: n })), e();
                                  },
                                  color: g.TextColor.primaryDefault,
                                  key: "nftAddressError"
                                },
                                t("importNFTPage")
                              )
                            ])
                          );
                          break;
                        case s && !z:
                          ie(t("mainnetToken")), se(""), pe(0), ce(null), me(null);
                          break;
                        case Boolean(U[l]):
                          q(t("personalAddressDetected"));
                          break;
                        case (0, k.checkExistingAddresses)(n, Z):
                          q(t("tokenAlreadyAdded"));
                          break;
                        default:
                          c ||
                            ((async (e) => {
                              const { symbol: t = "", decimals: o } = await ke.current(e, I);
                              oe(Boolean(t)), ne(Boolean(o)), Ee(t || ""), Pe(o);
                            })(n),
                            u && he(u));
                      }
                    },
                    Le = "confirm" === P;
                  return r.default.createElement(
                    p.Modal,
                    {
                      isOpen: !0,
                      onClose: () => {
                        i((0, d.clearPendingTokens)()), e();
                      },
                      className: "import-tokens-modal"
                    },
                    r.default.createElement(p.ModalOverlay, null),
                    r.default.createElement(
                      p.ModalContent,
                      null,
                      r.default.createElement(
                        p.ModalHeader,
                        {
                          onBack: Le ? () => _("") : null,
                          onClose: () => {
                            i((0, d.clearPendingTokens)()), e();
                          }
                        },
                        t("importTokensCamelCase")
                      ),
                      r.default.createElement(
                        p.Box,
                        { marginTop: 6 },
                        Le
                          ? r.default.createElement(E.ImportTokensModalConfirm, {
                              onBackClick: () => {
                                i((0, d.clearPendingTokens)()), _("");
                              },
                              onImportClick: async () => {
                                await Oe(), e();
                              }
                            })
                          : r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                s.Tabs,
                                { t: t },
                                j
                                  ? r.default.createElement(
                                      s.Tab,
                                      { tabKey: "search", name: t("search") },
                                      r.default.createElement(
                                        p.Box,
                                        { paddingTop: 4, paddingBottom: 4 },
                                        R
                                          ? null
                                          : r.default.createElement(
                                              p.BannerAlert,
                                              { severity: g.Severity.Info, marginBottom: 4 },
                                              r.default.createElement(
                                                p.Text,
                                                null,
                                                t("enhancedTokenDetectionAlertMessage", [
                                                  H,
                                                  r.default.createElement(
                                                    p.ButtonLink,
                                                    {
                                                      key: "token-detection-announcement",
                                                      className: "import-tokens-modal__autodetect",
                                                      onClick: () => {
                                                        o.push(`${h.SECURITY_ROUTE}#auto-detect-tokens`), e();
                                                      }
                                                    },
                                                    t("enableFromSettings")
                                                  )
                                                ])
                                              )
                                            ),
                                        r.default.createElement(f.default, {
                                          onSearch: ({ results: e = [] }) => x(e),
                                          error: w,
                                          tokenList: I
                                        }),
                                        r.default.createElement(
                                          p.Box,
                                          { marginTop: 4, className: "import-tokens-modal__search-list" },
                                          r.default.createElement(m.default, {
                                            results: D,
                                            selectedTokens: L,
                                            onToggleToken: (e) =>
                                              ((e) => {
                                                const { address: t } = e,
                                                  o = { ...L };
                                                t in o ? delete o[t] : (o[t] = e), F(o), B(null);
                                              })(e)
                                          })
                                        )
                                      )
                                    )
                                  : null,
                                r.default.createElement(
                                  s.Tab,
                                  { tabKey: "customToken", name: t("customToken") },
                                  r.default.createElement(
                                    p.Box,
                                    { paddingTop: 4, paddingBottom: 4, className: "import-tokens-modal__custom-token-form" },
                                    X
                                      ? r.default.createElement(
                                          p.BannerAlert,
                                          { severity: g.Severity.Warning },
                                          t("customTokenWarningInTokenDetectionNetworkWithTDOFF", [
                                            r.default.createElement(
                                              p.ButtonLink,
                                              {
                                                key: "import-token-security-risk",
                                                rel: "noopener noreferrer",
                                                target: "_blank",
                                                href: b.default.TOKEN_SAFETY_PRACTICES
                                              },
                                              t("tokenScamSecurityRisk")
                                            ),
                                            r.default.createElement(
                                              p.ButtonLink,
                                              {
                                                type: "link",
                                                key: "import-token-token-detection-announcement",
                                                onClick: () => {
                                                  o.push(`${h.SECURITY_ROUTE}#auto-detect-tokens`), e();
                                                }
                                              },
                                              t("inYourSettings")
                                            )
                                          ])
                                        )
                                      : r.default.createElement(
                                          p.BannerAlert,
                                          { severity: V ? g.Severity.Warning : g.Severity.Info },
                                          t(
                                            V
                                              ? "customTokenWarningInTokenDetectionNetwork"
                                              : "customTokenWarningInNonTokenDetectionNetwork",
                                            [
                                              r.default.createElement(
                                                p.ButtonLink,
                                                {
                                                  key: "import-token-fake-token-warning",
                                                  rel: "noopener noreferrer",
                                                  target: "_blank",
                                                  href: b.default.TOKEN_SAFETY_PRACTICES
                                                },
                                                t("learnScamRisk")
                                              )
                                            ]
                                          )
                                        ),
                                    r.default.createElement(p.FormTextField, {
                                      label: t("tokenContractAddress"),
                                      value: W,
                                      onChange: (e) => Be(e.target.value),
                                      helpText: Q || ae || Y,
                                      error: Q || ae || Y,
                                      autoFocus: !0,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-address" }
                                    }),
                                    r.default.createElement(p.FormTextField, {
                                      label: r.default.createElement(
                                        r.default.Fragment,
                                        null,
                                        t("tokenSymbol"),
                                        te &&
                                          !be &&
                                          r.default.createElement(
                                            p.ButtonLink,
                                            {
                                              onClick: () => ve(!0),
                                              textAlign: g.TextAlign.End,
                                              paddingInlineEnd: 1,
                                              paddingInlineStart: 1,
                                              color: g.TextColor.primaryDefault
                                            },
                                            t("edit")
                                          )
                                      ),
                                      value: le,
                                      onChange: (e) => Ee(e.target.value),
                                      helpText: ue,
                                      error: ue,
                                      disabled: te && !be,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-symbol" }
                                    }),
                                    r.default.createElement(p.FormTextField, {
                                      label: t("decimal"),
                                      type: "number",
                                      value: de,
                                      onChange: (e) => Pe(e.target.value),
                                      helpText: fe,
                                      error: fe,
                                      disabled: re,
                                      min: 0,
                                      max: 36,
                                      marginTop: 6,
                                      inputProps: { "data-testid": "import-tokens-modal-custom-decimals" }
                                    }),
                                    "" === de &&
                                      r.default.createElement(
                                        p.BannerAlert,
                                        { severity: g.Severity.Warning },
                                        r.default.createElement(p.Text, { fontWeight: g.FontWeight.Bold }, t("tokenDecimalFetchFailed")),
                                        t("verifyThisTokenDecimalOn", [
                                          r.default.createElement(
                                            p.ButtonLink,
                                            {
                                              key: "import-token-verify-token-decimal",
                                              rel: "noopener noreferrer",
                                              target: "_blank",
                                              href: Te
                                            },
                                            Ce
                                          )
                                        ])
                                      )
                                  )
                                )
                              ),
                              r.default.createElement(
                                p.Box,
                                { paddingTop: 6, paddingBottom: 6 },
                                r.default.createElement(
                                  p.ButtonPrimary,
                                  {
                                    onClick: () =>
                                      (() => {
                                        if (_e()) return;
                                        if (!we()) return void B(t("mustSelectOne"));
                                        const e = Object.keys(I),
                                          o = W ? { address: W, symbol: le, decimals: de, standard: ge } : null;
                                        i((0, d.setPendingTokens)({ customToken: o, selectedTokens: L, tokenAddressList: e })),
                                          _("confirm");
                                      })(),
                                    size: g.Size.LG,
                                    disabled: Boolean(_e()) || !we(),
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
                (o.ImportTokensModal = w), (w.propTypes = { onClose: i.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/import-tokens-modal.js" }
    ],
    [
      5326,
      { "./import-tokens-modal": 5325 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ImportTokensModal", {
                    enumerable: !0,
                    get: function () {
                      return r.ImportTokensModal;
                    }
                  });
                var r = e("./import-tokens-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/import-tokens-modal/index.js" }
    ],
    [
      5327,
      {
        "./account-details": 5283,
        "./account-list-item": 5287,
        "./account-list-item-menu": 5285,
        "./account-list-menu": 5289,
        "./account-picker": 5291,
        "./activity-list-item": 5293,
        "./address-copy-button": 5295,
        "./app-footer": 5298,
        "./app-header": 5300,
        "./asset-list-conversion-button": 5302,
        "./avatar-group": 5304,
        "./balance-overview": 5306,
        "./connected-site-menu": 5308,
        "./create-account": 5310,
        "./detected-token-banner": 5312,
        "./global-menu": 5314,
        "./import-account": 5317,
        "./import-nfts-modal": 5321,
        "./import-token-link": 5323,
        "./import-tokens-modal": 5326,
        "./menu-items": 5329,
        "./network-list-item": 5331,
        "./network-list-menu": 5333,
        "./product-tour-popover": 5356,
        "./select-action-modal": 5362,
        "./select-action-modal-item": 5360,
        "./token-list-item": 5364
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "AccountDetails", {
                    enumerable: !0,
                    get: function () {
                      return T.AccountDetails;
                    }
                  }),
                  Object.defineProperty(o, "AccountDetailsMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return S.AccountDetailsMenuItem;
                    }
                  }),
                  Object.defineProperty(o, "AccountListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItem;
                    }
                  }),
                  Object.defineProperty(o, "AccountListItemMenu", {
                    enumerable: !0,
                    get: function () {
                      return n.AccountListItemMenu;
                    }
                  }),
                  Object.defineProperty(o, "AccountListMenu", {
                    enumerable: !0,
                    get: function () {
                      return a.AccountListMenu;
                    }
                  }),
                  Object.defineProperty(o, "AccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return i.AccountPicker;
                    }
                  }),
                  Object.defineProperty(o, "ActivityListItem", {
                    enumerable: !0,
                    get: function () {
                      return l.ActivityListItem;
                    }
                  }),
                  Object.defineProperty(o, "AddressCopyButton", {
                    enumerable: !0,
                    get: function () {
                      return g.AddressCopyButton;
                    }
                  }),
                  Object.defineProperty(o, "AppFooter", {
                    enumerable: !0,
                    get: function () {
                      return u.AppFooter;
                    }
                  }),
                  Object.defineProperty(o, "AppHeader", {
                    enumerable: !0,
                    get: function () {
                      return s.AppHeader;
                    }
                  }),
                  Object.defineProperty(o, "AssetListConversionButton", {
                    enumerable: !0,
                    get: function () {
                      return P.AssetListConversionButton;
                    }
                  }),
                  Object.defineProperty(o, "AvatarGroup", {
                    enumerable: !0,
                    get: function () {
                      return _.AvatarGroup;
                    }
                  }),
                  Object.defineProperty(o, "BalanceOverview", {
                    enumerable: !0,
                    get: function () {
                      return c.BalanceOverview;
                    }
                  }),
                  Object.defineProperty(o, "ConnectedSiteMenu", {
                    enumerable: !0,
                    get: function () {
                      return h.ConnectedSiteMenu;
                    }
                  }),
                  Object.defineProperty(o, "CreateAccount", {
                    enumerable: !0,
                    get: function () {
                      return C.CreateAccount;
                    }
                  }),
                  Object.defineProperty(o, "DetectedTokensBanner", {
                    enumerable: !0,
                    get: function () {
                      return d.DetectedTokensBanner;
                    }
                  }),
                  Object.defineProperty(o, "GlobalMenu", {
                    enumerable: !0,
                    get: function () {
                      return p.GlobalMenu;
                    }
                  }),
                  Object.defineProperty(o, "ImportAccount", {
                    enumerable: !0,
                    get: function () {
                      return k.ImportAccount;
                    }
                  }),
                  Object.defineProperty(o, "ImportNftsModal", {
                    enumerable: !0,
                    get: function () {
                      return M.ImportNftsModal;
                    }
                  }),
                  Object.defineProperty(o, "ImportTokenLink", {
                    enumerable: !0,
                    get: function () {
                      return f.ImportTokenLink;
                    }
                  }),
                  Object.defineProperty(o, "ImportTokensModal", {
                    enumerable: !0,
                    get: function () {
                      return A.ImportTokensModal;
                    }
                  }),
                  Object.defineProperty(o, "NetworkListItem", {
                    enumerable: !0,
                    get: function () {
                      return b.NetworkListItem;
                    }
                  }),
                  Object.defineProperty(o, "NetworkListMenu", {
                    enumerable: !0,
                    get: function () {
                      return v.NetworkListMenu;
                    }
                  }),
                  Object.defineProperty(o, "ProductTour", {
                    enumerable: !0,
                    get: function () {
                      return y.ProductTour;
                    }
                  }),
                  Object.defineProperty(o, "SelectActionModal", {
                    enumerable: !0,
                    get: function () {
                      return O.SelectActionModal;
                    }
                  }),
                  Object.defineProperty(o, "SelectActionModalItem", {
                    enumerable: !0,
                    get: function () {
                      return E.SelectActionModalItem;
                    }
                  }),
                  Object.defineProperty(o, "TokenListItem", {
                    enumerable: !0,
                    get: function () {
                      return m.TokenListItem;
                    }
                  }),
                  Object.defineProperty(o, "ViewExplorerMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return S.ViewExplorerMenuItem;
                    }
                  });
                var r = e("./account-list-item"),
                  n = e("./account-list-item-menu"),
                  a = e("./account-list-menu"),
                  i = e("./account-picker"),
                  l = e("./activity-list-item"),
                  s = e("./app-header"),
                  u = e("./app-footer"),
                  c = e("./balance-overview"),
                  d = e("./detected-token-banner"),
                  p = e("./global-menu"),
                  f = e("./import-token-link"),
                  m = e("./token-list-item"),
                  g = e("./address-copy-button"),
                  h = e("./connected-site-menu"),
                  b = e("./network-list-item"),
                  v = e("./network-list-menu"),
                  y = e("./product-tour-popover"),
                  T = e("./account-details"),
                  C = e("./create-account"),
                  k = e("./import-account"),
                  M = e("./import-nfts-modal"),
                  S = e("./menu-items"),
                  A = e("./import-tokens-modal"),
                  O = e("./select-action-modal"),
                  E = e("./select-action-modal-item"),
                  P = e("./asset-list-conversion-button"),
                  _ = e("./avatar-group");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/index.js" }
    ],
    [
      5328,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/menu": 5447,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.AccountDetailsMenuItem = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = f(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("react-redux"),
                  l = e("../../../store/actions"),
                  s = e("../../ui/menu"),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../component-library");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (f = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const m = ({ metricsLocation: e, closeMenu: t, address: o, textProps: r }) => {
                  const a = (0, u.useI18nContext)(),
                    f = (0, i.useDispatch)(),
                    m = (0, n.useContext)(c.MetaMetricsContext),
                    g = a("accountDetails");
                  return n.default.createElement(
                    s.MenuItem,
                    {
                      onClick: () => {
                        f((0, l.setAccountDetailsAddress)(o)),
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
                    r ? n.default.createElement(p.Text, r, g) : g
                  );
                };
                (o.AccountDetailsMenuItem = m),
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
      5329,
      { "./account-details-menu-item": 5328, "./view-explorer-menu-item": 5330 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "AccountDetailsMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountDetailsMenuItem;
                    }
                  }),
                  Object.defineProperty(o, "ViewExplorerMenuItem", {
                    enumerable: !0,
                    get: function () {
                      return n.ViewExplorerMenuItem;
                    }
                  });
                var r = e("./account-details-menu-item"),
                  n = e("./view-explorer-menu-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/menu-items/index.js" }
    ],
    [
      533,
      { "./wordlist": 542, "./wordlists": 543 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.wordlists = o.Wordlist = o.logger = void 0);
                var r = e("./wordlist");
                Object.defineProperty(o, "logger", {
                  enumerable: !0,
                  get: function () {
                    return r.logger;
                  }
                }),
                  Object.defineProperty(o, "Wordlist", {
                    enumerable: !0,
                    get: function () {
                      return r.Wordlist;
                    }
                  });
                var n = e("./wordlists");
                Object.defineProperty(o, "wordlists", {
                  enumerable: !0,
                  get: function () {
                    return n.wordlists;
                  }
                });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/index.js" }
    ],
    [
      5330,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/menu": 5447,
        "@metamask/controller-utils": 1124,
        "@metamask/etherscan-link": 1370,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ViewExplorerMenuItem = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = v(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("react-redux"),
                  l = e("react-router-dom"),
                  s = e("@metamask/controller-utils"),
                  u = e("@metamask/etherscan-link"),
                  c = e("../../ui/menu"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../component-library"),
                  g = e("../../../selectors"),
                  h = e("../../../helpers/utils/util"),
                  b = e("../../../helpers/constants/routes");
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (v = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const y = ({ metricsLocation: e, closeMenu: t, textProps: o, address: r }) => {
                  const a = (0, d.useI18nContext)(),
                    v = (0, n.useContext)(p.MetaMetricsContext),
                    y = (0, l.useHistory)(),
                    T = (0, i.useSelector)(g.getCurrentChainId),
                    C = (0, i.useSelector)(g.getRpcPrefsForCurrentProvider),
                    k = (0, u.getAccountLink)((0, s.toChecksumHexAddress)(r), T, C),
                    { blockExplorerUrl: M } = C,
                    S = (0, h.getURLHostName)(M),
                    A = (0, i.useSelector)(g.getBlockExplorerLinkText),
                    O = a("viewOnExplorer");
                  return n.default.createElement(
                    c.MenuItem,
                    {
                      onClick: () => {
                        "addBlockExplorer" === A.firstPart
                          ? y.push(`${b.NETWORKS_ROUTE}#blockExplorerUrl`)
                          : (v({
                              event: f.MetaMetricsEventName.ExternalLinkClicked,
                              category: f.MetaMetricsEventCategory.Navigation,
                              properties: {
                                link_type: f.MetaMetricsEventLinkType.AccountTracker,
                                location: e,
                                url_domain: (0, h.getURLHostName)(k)
                              }
                            }),
                            global.platform.openTab({ url: k }),
                            t()),
                          v({
                            event: f.MetaMetricsEventName.BlockExplorerLinkClicked,
                            category: f.MetaMetricsEventCategory.Accounts,
                            properties: { location: e, chain_id: T }
                          }),
                          null == t || t();
                      },
                      subtitle: S || null,
                      iconName: m.IconName.Export,
                      "data-testid": "account-list-menu-open-explorer"
                    },
                    o ? n.default.createElement(m.Text, o, O) : O
                  );
                };
                (o.ViewExplorerMenuItem = y),
                  (y.propTypes = {
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
      5331,
      { "./network-list-item": 5332 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "NetworkListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.NetworkListItem;
                    }
                  });
                var r = e("./network-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-item/index.js" }
    ],
    [
      5332,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/accounts": 5557,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../../ui/tooltip/tooltip": 5503,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.NetworkListItem = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = p(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = d(e("classnames")),
                  a = d(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/utils/accounts"),
                  c = d(e("../../ui/tooltip/tooltip"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (p = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const f = ({ name: e, iconSrc: t, selected: o = !1, focus: a = !0, onClick: d, onDeleteClick: p }) => {
                  const f = (0, s.useI18nContext)(),
                    m = (0, r.useRef)();
                  return (
                    (0, r.useEffect)(() => {
                      m.current && a && m.current.focus();
                    }, [m, a]),
                    r.default.createElement(
                      l.Box,
                      {
                        onClick: d,
                        padding: 4,
                        gap: 2,
                        backgroundColor: o ? i.Color.primaryMuted : i.Color.transparent,
                        className: (0, n.default)("multichain-network-list-item", { "multichain-network-list-item--selected": o }),
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        justifyContent: i.JustifyContent.spaceBetween,
                        width: i.BlockSize.Full
                      },
                      o &&
                        r.default.createElement(l.Box, {
                          className: "multichain-network-list-item__selected-indicator",
                          borderRadius: i.BorderRadius.pill,
                          backgroundColor: i.Color.primaryDefault
                        }),
                      r.default.createElement(l.AvatarNetwork, { backgroundColor: (0, u.getAvatarNetworkColor)(e), name: e, src: t }),
                      r.default.createElement(
                        l.Box,
                        { className: "multichain-network-list-item__network-name" },
                        r.default.createElement(
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
                            ? r.default.createElement(
                                c.default,
                                { title: e, position: "bottom", wrapperClassName: "multichain-network-list-item__tooltip" },
                                e
                              )
                            : e
                        )
                      ),
                      p
                        ? r.default.createElement(l.ButtonIcon, {
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
                (o.NetworkListItem = f),
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
      5333,
      { "./network-list-menu": 5334 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "NetworkListMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.NetworkListMenu;
                    }
                  });
                var r = e("./network-list-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-menu/index.js" }
    ],
    [
      5334,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/toggle-button": 5495,
        "../network-list-item": 5331,
        "fuse.js": 3582,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.NetworkListMenu = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = M(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = k(e("prop-types")),
                  a = e("react-redux"),
                  i = e("react-router-dom"),
                  l = k(e("fuse.js")),
                  s = e("../../../hooks/useI18nContext"),
                  u = e("../network-list-item"),
                  c = e("../../../store/actions"),
                  d = e("../../../../shared/constants/network"),
                  p = e("../../../selectors"),
                  f = k(e("../../ui/toggle-button")),
                  m = e("../../../helpers/constants/design-system"),
                  g = e("../../component-library"),
                  h = e("../../../helpers/constants/routes"),
                  b = e("../../../../app/scripts/lib/util"),
                  v = e("../../../../shared/constants/app"),
                  y = e("../../../contexts/metametrics"),
                  T = e("../../../../shared/constants/metametrics"),
                  C = e("../../../ducks/metamask/metamask");
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (M = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const S = ({ onClose: e }) => {
                  const t = (0, s.useI18nContext)(),
                    o = (0, a.useSelector)(p.getNonTestNetworks),
                    n = (0, a.useSelector)(p.getTestNetworks),
                    k = (0, a.useSelector)(p.getShowTestNetworks),
                    M = (0, a.useSelector)(p.getCurrentChainId),
                    S = (0, a.useDispatch)(),
                    A = (0, i.useHistory)(),
                    O = (0, r.useContext)(y.MetaMetricsContext),
                    E = (0, a.useSelector)(p.getCurrentNetwork),
                    P = d.TEST_CHAINS.includes(M),
                    _ = (0, b.getEnvironmentType)() === v.ENVIRONMENT_TYPE_FULLSCREEN,
                    w = (0, a.useSelector)(C.getCompletedOnboarding),
                    B = (0, a.useSelector)(C.isLineaMainnetNetworkReleased),
                    L = (0, a.useSelector)(C.getIsUnlocked),
                    F = o.length > 3;
                  (0, r.useEffect)(() => {
                    P && S((0, c.setShowTestNetworks)(P));
                  }, [S, P]);
                  const [D, x] = (0, r.useState)("");
                  let N = [...o];
                  const J = "" !== D;
                  if (J) {
                    const e = new l.default(N, {
                      threshold: 0.2,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      shouldSort: !0,
                      keys: ["nickname", "chainId", "ticker"]
                    });
                    e.setCollection(N);
                    const t = e.search(D);
                    N = N.filter((e) => t.includes(e));
                  }
                  const j = (e) =>
                    e.map((e) => {
                      var t;
                      if (!B && "linea-mainnet" === e.providerType) return null;
                      const o = E.id === e.id,
                        n = L && !o && e.removable;
                      return r.default.createElement(u.NetworkListItem, {
                        name: e.nickname,
                        iconSrc: null == e || null === (t = e.rpcPrefs) || void 0 === t ? void 0 : t.imageUrl,
                        key: e.id,
                        selected: o,
                        focus: o && !F,
                        onClick: () => {
                          S((0, c.toggleNetworkMenu)()),
                            e.providerType ? S((0, c.setProviderType)(e.providerType)) : S((0, c.setActiveNetwork)(e.id)),
                            O({
                              event: T.MetaMetricsEventName.NavNetworkSwitched,
                              category: T.MetaMetricsEventCategory.Network,
                              properties: { location: "Network Menu", chain_id: M, from_network: M, to_network: e.chainId }
                            });
                        },
                        onDeleteClick: n
                          ? () => {
                              S((0, c.toggleNetworkMenu)()),
                                S((0, c.showModal)({ name: "CONFIRM_DELETE_NETWORK", target: e.id, onConfirm: () => undefined }));
                            }
                          : null
                      });
                    });
                  return r.default.createElement(
                    g.Modal,
                    { isOpen: !0, onClose: e },
                    r.default.createElement(g.ModalOverlay, null),
                    r.default.createElement(
                      g.ModalContent,
                      {
                        className: "multichain-network-list-menu-content-wrapper",
                        modalDialogProps: {
                          className: "multichain-network-list-menu-content-wrapper__dialog",
                          display: m.Display.Flex,
                          flexDirection: m.FlexDirection.Column,
                          padding: 0
                        }
                      },
                      r.default.createElement(
                        g.ModalHeader,
                        { paddingTop: 4, paddingRight: 4, paddingBottom: 6, onClose: e },
                        t("networkMenuHeading")
                      ),
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        F
                          ? r.default.createElement(
                              g.Box,
                              { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                              r.default.createElement(g.TextFieldSearch, {
                                size: m.Size.SM,
                                width: m.BlockSize.Full,
                                placeholder: t("search"),
                                value: D,
                                onChange: (e) => x(e.target.value),
                                clearButtonOnClick: () => x(""),
                                clearButtonProps: { size: m.Size.SM },
                                inputProps: { autoFocus: !0 }
                              })
                            )
                          : null,
                        r.default.createElement(
                          g.Box,
                          { className: "multichain-network-list-menu" },
                          0 === N.length && J
                            ? r.default.createElement(
                                g.Text,
                                {
                                  paddingLeft: 4,
                                  paddingRight: 4,
                                  color: m.TextColor.textMuted,
                                  "data-testid": "multichain-network-menu-popover-no-results"
                                },
                                t("noNetworksFound")
                              )
                            : j(N)
                        ),
                        r.default.createElement(
                          g.Box,
                          { padding: 4, display: m.Display.Flex, justifyContent: m.JustifyContent.spaceBetween },
                          r.default.createElement(g.Text, null, t("showTestnetNetworks")),
                          r.default.createElement(f.default, {
                            value: k,
                            disabled: P || !L,
                            onToggle: (e) => {
                              const t = !e;
                              S((0, c.setShowTestNetworks)(t)),
                                t &&
                                  O({ event: T.MetaMetricsEventName.TestNetworksDisplayed, category: T.MetaMetricsEventCategory.Network });
                            }
                          })
                        ),
                        k || P ? r.default.createElement(g.Box, { className: "multichain-network-list-menu" }, j(n)) : null,
                        r.default.createElement(
                          g.Box,
                          { padding: 4 },
                          r.default.createElement(
                            g.ButtonSecondary,
                            {
                              size: g.ButtonSecondarySize.Lg,
                              disabled: !L,
                              block: !0,
                              onClick: () => {
                                _
                                  ? w
                                    ? A.push(h.ADD_POPULAR_CUSTOM_NETWORK)
                                    : S((0, c.showModal)({ name: "ONBOARDING_ADD_NETWORK" }))
                                  : global.platform.openExtensionInBrowser(h.ADD_POPULAR_CUSTOM_NETWORK),
                                  S((0, c.toggleNetworkMenu)()),
                                  O({ event: T.MetaMetricsEventName.AddNetworkButtonClick, category: T.MetaMetricsEventCategory.Network });
                              }
                            },
                            t("addNetwork")
                          )
                        )
                      )
                    )
                  );
                };
                (o.NetworkListMenu = S), (S.propTypes = { onClose: n.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/network-list-menu/network-list-menu.js" }
    ],
    [
      5335,
      { "./nft-item": 5336 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "NftItem", {
                    enumerable: !0,
                    get: function () {
                      return r.NftItem;
                    }
                  });
                var r = e("./nft-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/nft-item/index.js" }
    ],
    [
      5336,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../selectors": 5958,
        "../../app/nft-default-image/nft-default-image": 5007,
        "../../component-library": 5242,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.NftItem = void 0);
                var r = d(e("react")),
                  n = d(e("prop-types")),
                  a = d(e("classnames")),
                  i = e("react-redux"),
                  l = d(e("../../app/nft-default-image/nft-default-image")),
                  s = e("../../component-library"),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../../selectors");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  alt: e,
                  name: t,
                  src: o,
                  networkName: n,
                  networkSrc: d,
                  tokenId: p,
                  onClick: f,
                  clickable: m,
                  isIpfsURL: g
                }) => {
                  const h = (0, i.useSelector)(c.getTestNetworkBackgroundColor),
                    b = (0, i.useSelector)(c.getIpfsGateway),
                    v = (0, i.useSelector)(c.getOpenSeaEnabled),
                    y =
                      (b && g && o) || (v && o && !g)
                        ? r.default.createElement(s.Box, {
                            className: "nft-item__item nft-item__item-image",
                            "data-testid": "nft-image",
                            as: "img",
                            src: o,
                            alt: e,
                            display: u.Display.Block,
                            justifyContent: u.JustifyContent.center
                          })
                        : r.default.createElement(l.default, {
                            className: "nft-item__default-image",
                            "data-testid": "nft-default-image",
                            name: t,
                            tokenId: p,
                            clickable: m && g
                          });
                  return r.default.createElement(
                    s.Box,
                    { className: "nft-item__container", "data-testid": "nft-item", as: "button", onClick: f },
                    r.default.createElement(
                      s.BadgeWrapper,
                      {
                        className: (0, a.default)("nft-item__badge-wrapper", { "nft-item__badge-wrapper__clickable": m }),
                        anchorElementShape: s.BadgeWrapperAnchorElementShape.circular,
                        positionObj: { top: -4, right: -4 },
                        display: u.Display.Block,
                        badge: r.default.createElement(s.AvatarNetwork, {
                          className: "nft-item__network-badge",
                          backgroundColor: h,
                          "data-testid": "nft-network-badge",
                          size: s.AvatarNetworkSize.Sm,
                          name: n,
                          src: d,
                          borderWidth: 2,
                          borderColor: u.BackgroundColor.backgroundDefault
                        })
                      },
                      y
                    )
                  );
                };
                (o.NftItem = p),
                  (p.propTypes = {
                    src: n.default.string,
                    alt: n.default.string.isRequired,
                    name: n.default.string.isRequired,
                    networkName: n.default.string.isRequired,
                    networkSrc: n.default.string.isRequired,
                    tokenId: n.default.string.isRequired,
                    onClick: n.default.func,
                    clickable: n.default.bool,
                    isIpfsURL: n.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/nft-item/nft-item.js" }
    ],
    [
      5337,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Connections = void 0);
                var r,
                  n = (r = e("react")) && r.__esModule ? r : { default: r };
                o.Connections = () => n.default.createElement("div", null);
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/connections/connections.js" }
    ],
    [
      5338,
      { "./connections": 5337 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Connections", {
                    enumerable: !0,
                    get: function () {
                      return r.Connections;
                    }
                  });
                var r = e("./connections");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/connections/index.js" }
    ],
    [
      5339,
      { "./connections": 5338 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Connections", {
                    enumerable: !0,
                    get: function () {
                      return r.Connections;
                    }
                  });
                var r = e("./connections");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/index.js" }
    ],
    [
      534,
      { "./wordlist": 542 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langCz = void 0);
                var a = e("./wordlist"),
                  i = null;
                function l(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbdikaceAbecedaAdresaAgreseAkceAktovkaAlejAlkoholAmputaceAnanasAndulkaAnekdotaAnketaAntikaAnulovatArchaAroganceAsfaltAsistentAspiraceAstmaAstronomAtlasAtletikaAtolAutobusAzylBabkaBachorBacilBaculkaBadatelBagetaBagrBahnoBakterieBaladaBaletkaBalkonBalonekBalvanBalzaBambusBankomatBarbarBaretBarmanBarokoBarvaBaterkaBatohBavlnaBazalkaBazilikaBazukaBednaBeranBesedaBestieBetonBezinkaBezmocBeztakBicyklBidloBiftekBikinyBilanceBiografBiologBitvaBizonBlahobytBlatouchBlechaBleduleBleskBlikatBliznaBlokovatBlouditBludBobekBobrBodlinaBodnoutBohatostBojkotBojovatBokorysBolestBorecBoroviceBotaBoubelBouchatBoudaBouleBouratBoxerBradavkaBramboraBrankaBratrBreptaBriketaBrkoBrlohBronzBroskevBrunetkaBrusinkaBrzdaBrzyBublinaBubnovatBuchtaBuditelBudkaBudovaBufetBujarostBukviceBuldokBulvaBundaBunkrBurzaButikBuvolBuzolaBydletBylinaBytovkaBzukotCapartCarevnaCedrCeduleCejchCejnCelaCelerCelkemCelniceCeninaCennostCenovkaCentrumCenzorCestopisCetkaChalupaChapadloCharitaChataChechtatChemieChichotChirurgChladChlebaChlubitChmelChmuraChobotChocholChodbaCholeraChomoutChopitChorobaChovChrapotChrlitChrtChrupChtivostChudinaChutnatChvatChvilkaChvostChybaChystatChytitCibuleCigaretaCihelnaCihlaCinkotCirkusCisternaCitaceCitrusCizinecCizostClonaCokolivCouvatCtitelCtnostCudnostCuketaCukrCupotCvaknoutCvalCvikCvrkotCyklistaDalekoDarebaDatelDatumDceraDebataDechovkaDecibelDeficitDeflaceDeklDekretDemokratDepreseDerbyDeskaDetektivDikobrazDiktovatDiodaDiplomDiskDisplejDivadloDivochDlahaDlouhoDluhopisDnesDobroDobytekDocentDochutitDodnesDohledDohodaDohraDojemDojniceDokladDokolaDoktorDokumentDolarDolevaDolinaDomaDominantDomluvitDomovDonutitDopadDopisDoplnitDoposudDoprovodDopustitDorazitDorostDortDosahDoslovDostatekDosudDosytaDotazDotekDotknoutDoufatDoutnatDovozceDozaduDoznatDozorceDrahotaDrakDramatikDravecDrazeDrdolDrobnostDrogerieDrozdDrsnostDrtitDrzostDubenDuchovnoDudekDuhaDuhovkaDusitDusnoDutostDvojiceDvorecDynamitEkologEkonomieElektronElipsaEmailEmiseEmoceEmpatieEpizodaEpochaEpopejEposEsejEsenceEskortaEskymoEtiketaEuforieEvoluceExekuceExkurzeExpediceExplozeExportExtraktFackaFajfkaFakultaFanatikFantazieFarmacieFavoritFazoleFederaceFejetonFenkaFialkaFigurantFilozofFiltrFinanceFintaFixaceFjordFlanelFlirtFlotilaFondFosforFotbalFotkaFotonFrakceFreskaFrontaFukarFunkceFyzikaGalejeGarantGenetikaGeologGilotinaGlazuraGlejtGolemGolfistaGotikaGrafGramofonGranuleGrepGrilGrogGroteskaGumaHadiceHadrHalaHalenkaHanbaHanopisHarfaHarpunaHavranHebkostHejkalHejnoHejtmanHektarHelmaHematomHerecHernaHesloHezkyHistorikHladovkaHlasivkyHlavaHledatHlenHlodavecHlohHloupostHltatHlubinaHluchotaHmatHmotaHmyzHnisHnojivoHnoutHoblinaHobojHochHodinyHodlatHodnotaHodovatHojnostHokejHolinkaHolkaHolubHomoleHonitbaHonoraceHoralHordaHorizontHorkoHorlivecHormonHorninaHoroskopHorstvoHospodaHostinaHotovostHoubaHoufHoupatHouskaHovorHradbaHraniceHravostHrazdaHrbolekHrdinaHrdloHrdostHrnekHrobkaHromadaHrotHroudaHrozenHrstkaHrubostHryzatHubenostHubnoutHudbaHukotHumrHusitaHustotaHvozdHybnostHydrantHygienaHymnaHysterikIdylkaIhnedIkonaIluzeImunitaInfekceInflaceInkasoInovaceInspekceInternetInvalidaInvestorInzerceIronieJablkoJachtaJahodaJakmileJakostJalovecJantarJarmarkJaroJasanJasnoJatkaJavorJazykJedinecJedleJednatelJehlanJekotJelenJelitoJemnostJenomJepiceJeseterJevitJezdecJezeroJinakJindyJinochJiskraJistotaJitrniceJizvaJmenovatJogurtJurtaKabaretKabelKabinetKachnaKadetKadidloKahanKajakKajutaKakaoKaktusKalamitaKalhotyKalibrKalnostKameraKamkolivKamnaKanibalKanoeKantorKapalinaKapelaKapitolaKapkaKapleKapotaKaprKapustaKapybaraKaramelKarotkaKartonKasaKatalogKatedraKauceKauzaKavalecKazajkaKazetaKazivostKdekolivKdesiKedlubenKempKeramikaKinoKlacekKladivoKlamKlapotKlasikaKlaunKlecKlenbaKlepatKlesnoutKlidKlimaKlisnaKloboukKlokanKlopaKloubKlubovnaKlusatKluzkostKmenKmitatKmotrKnihaKnotKoaliceKoberecKobkaKoblihaKobylaKocourKohoutKojenecKokosKoktejlKolapsKoledaKolizeKoloKomandoKometaKomikKomnataKomoraKompasKomunitaKonatKonceptKondiceKonecKonfeseKongresKoninaKonkursKontaktKonzervaKopanecKopieKopnoutKoprovkaKorbelKorektorKormidloKoroptevKorpusKorunaKorytoKorzetKosatecKostkaKotelKotletaKotoulKoukatKoupelnaKousekKouzloKovbojKozaKozorohKrabiceKrachKrajinaKralovatKrasopisKravataKreditKrejcarKresbaKrevetaKriketKritikKrizeKrkavecKrmelecKrmivoKrocanKrokKronikaKropitKroupaKrovkaKrtekKruhadloKrupiceKrutostKrvinkaKrychleKryptaKrystalKrytKudlankaKufrKujnostKuklaKulajdaKulichKulkaKulometKulturaKunaKupodivuKurtKurzorKutilKvalitaKvasinkaKvestorKynologKyselinaKytaraKyticeKytkaKytovecKyvadloLabradorLachtanLadnostLaikLakomecLamelaLampaLanovkaLasiceLasoLasturaLatinkaLavinaLebkaLeckdyLedenLedniceLedovkaLedvinaLegendaLegieLegraceLehceLehkostLehnoutLektvarLenochodLentilkaLepenkaLepidloLetadloLetecLetmoLetokruhLevhartLevitaceLevobokLibraLichotkaLidojedLidskostLihovinaLijavecLilekLimetkaLinieLinkaLinoleumListopadLitinaLitovatLobistaLodivodLogikaLogopedLokalitaLoketLomcovatLopataLopuchLordLososLotrLoudalLouhLoukaLouskatLovecLstivostLucernaLuciferLumpLuskLustraceLviceLyraLyrikaLysinaMadamMadloMagistrMahagonMajetekMajitelMajoritaMakakMakoviceMakrelaMalbaMalinaMalovatMalviceMaminkaMandleMankoMarnostMasakrMaskotMasopustMaticeMatrikaMaturitaMazanecMazivoMazlitMazurkaMdlobaMechanikMeditaceMedovinaMelasaMelounMentolkaMetlaMetodaMetrMezeraMigraceMihnoutMihuleMikinaMikrofonMilenecMilimetrMilostMimikaMincovnaMinibarMinometMinulostMiskaMistrMixovatMladostMlhaMlhovinaMlokMlsatMluvitMnichMnohemMobilMocnostModelkaModlitbaMohylaMokroMolekulaMomentkaMonarchaMonoklMonstrumMontovatMonzunMosazMoskytMostMotivaceMotorkaMotykaMouchaMoudrostMozaikaMozekMozolMramorMravenecMrkevMrtvolaMrzetMrzutostMstitelMudrcMuflonMulatMumieMuniceMusetMutaceMuzeumMuzikantMyslivecMzdaNabouratNachytatNadaceNadbytekNadhozNadobroNadpisNahlasNahnatNahodileNahraditNaivitaNajednouNajistoNajmoutNaklonitNakonecNakrmitNalevoNamazatNamluvitNanometrNaokoNaopakNaostroNapadatNapevnoNaplnitNapnoutNaposledNaprostoNaroditNarubyNarychloNasaditNasekatNaslepoNastatNatolikNavenekNavrchNavzdoryNazvatNebeNechatNeckyNedalekoNedbatNeduhNegaceNehetNehodaNejenNejprveNeklidNelibostNemilostNemocNeochotaNeonkaNepokojNerostNervNesmyslNesouladNetvorNeuronNevinaNezvykleNicotaNijakNikamNikdyNiklNikterakNitroNoclehNohaviceNominaceNoraNorekNositelNosnostNouzeNovinyNovotaNozdraNudaNudleNugetNutitNutnostNutrieNymfaObalObarvitObavaObdivObecObehnatObejmoutObezitaObhajobaObilniceObjasnitObjektObklopitOblastOblekOblibaOblohaObludaObnosObohatitObojekOboutObrazecObrnaObrubaObrysObsahObsluhaObstaratObuvObvazObvinitObvodObvykleObyvatelObzorOcasOcelOcenitOchladitOchotaOchranaOcitnoutOdbojOdbytOdchodOdcizitOdebratOdeslatOdevzdatOdezvaOdhadceOdhoditOdjetOdjinudOdkazOdkoupitOdlivOdlukaOdmlkaOdolnostOdpadOdpisOdploutOdporOdpustitOdpykatOdrazkaOdsouditOdstupOdsunOdtokOdtudOdvahaOdvetaOdvolatOdvracetOdznakOfinaOfsajdOhlasOhniskoOhradaOhrozitOhryzekOkapOkeniceOklikaOknoOkouzlitOkovyOkrasaOkresOkrsekOkruhOkupantOkurkaOkusitOlejninaOlizovatOmakOmeletaOmezitOmladinaOmlouvatOmluvaOmylOnehdyOpakovatOpasekOperaceOpiceOpilostOpisovatOporaOpoziceOpravduOprotiOrbitalOrchestrOrgieOrliceOrlojOrtelOsadaOschnoutOsikaOsivoOslavaOslepitOslnitOslovitOsnovaOsobaOsolitOspalecOstenOstrahaOstudaOstychOsvojitOteplitOtiskOtopOtrhatOtrlostOtrokOtrubyOtvorOvanoutOvarOvesOvlivnitOvoceOxidOzdobaPachatelPacientPadouchPahorekPaktPalandaPalecPalivoPalubaPamfletPamlsekPanenkaPanikaPannaPanovatPanstvoPantoflePaprikaParketaParodiePartaParukaParybaPasekaPasivitaPastelkaPatentPatronaPavoukPaznehtPazourekPeckaPedagogPejsekPekloPelotonPenaltaPendrekPenzePeriskopPeroPestrostPetardaPeticePetrolejPevninaPexesoPianistaPihaPijavicePiklePiknikPilinaPilnostPilulkaPinzetaPipetaPisatelPistolePitevnaPivnicePivovarPlacentaPlakatPlamenPlanetaPlastikaPlatitPlavidloPlazPlechPlemenoPlentaPlesPletivoPlevelPlivatPlnitPlnoPlochaPlodinaPlombaPloutPlukPlynPobavitPobytPochodPocitPoctivecPodatPodcenitPodepsatPodhledPodivitPodkladPodmanitPodnikPodobaPodporaPodrazPodstataPodvodPodzimPoeziePohankaPohnutkaPohovorPohromaPohybPointaPojistkaPojmoutPokazitPoklesPokojPokrokPokutaPokynPolednePolibekPolknoutPolohaPolynomPomaluPominoutPomlkaPomocPomstaPomysletPonechatPonorkaPonurostPopadatPopelPopisekPoplachPoprositPopsatPopudPoradcePorcePorodPoruchaPoryvPosaditPosedPosilaPoskokPoslanecPosouditPospoluPostavaPosudekPosypPotahPotkanPotleskPotomekPotravaPotupaPotvoraPoukazPoutoPouzdroPovahaPovidlaPovlakPovozPovrchPovstatPovykPovzdechPozdravPozemekPoznatekPozorPozvatPracovatPrahoryPraktikaPralesPraotecPraporekPrasePravdaPrincipPrknoProbuditProcentoProdejProfeseProhraProjektProlomitPromilePronikatPropadProrokProsbaProtonProutekProvazPrskavkaPrstenPrudkostPrutPrvekPrvohoryPsanecPsovodPstruhPtactvoPubertaPuchPudlPukavecPuklinaPukrlePultPumpaPuncPupenPusaPusinkaPustinaPutovatPutykaPyramidaPyskPytelRacekRachotRadiaceRadniceRadonRaftRagbyRaketaRakovinaRamenoRampouchRandeRarachRaritaRasovnaRastrRatolestRazanceRazidloReagovatReakceReceptRedaktorReferentReflexRejnokReklamaRekordRekrutRektorReputaceRevizeRevmaRevolverRezervaRiskovatRizikoRobotikaRodokmenRohovkaRokleRokokoRomanetoRopovodRopuchaRorejsRosolRostlinaRotmistrRotopedRotundaRoubenkaRouchoRoupRouraRovinaRovniceRozborRozchodRozdatRozeznatRozhodceRozinkaRozjezdRozkazRozlohaRozmarRozpadRozruchRozsahRoztokRozumRozvodRubrikaRuchadloRukaviceRukopisRybaRybolovRychlostRydloRypadloRytinaRyzostSadistaSahatSakoSamecSamizdatSamotaSanitkaSardinkaSasankaSatelitSazbaSazeniceSborSchovatSebrankaSeceseSedadloSedimentSedloSehnatSejmoutSekeraSektaSekundaSekvojeSemenoSenoServisSesaditSeshoraSeskokSeslatSestraSesuvSesypatSetbaSetinaSetkatSetnoutSetrvatSeverSeznamShodaShrnoutSifonSilniceSirkaSirotekSirupSituaceSkafandrSkaliskoSkanzenSkautSkeptikSkicaSkladbaSkleniceSkloSkluzSkobaSkokanSkoroSkriptaSkrzSkupinaSkvostSkvrnaSlabikaSladidloSlaninaSlastSlavnostSledovatSlepecSlevaSlezinaSlibSlinaSlizniceSlonSloupekSlovoSluchSluhaSlunceSlupkaSlzaSmaragdSmetanaSmilstvoSmlouvaSmogSmradSmrkSmrtkaSmutekSmyslSnadSnahaSnobSobotaSochaSodovkaSokolSopkaSotvaSoubojSoucitSoudceSouhlasSouladSoumrakSoupravaSousedSoutokSouvisetSpalovnaSpasitelSpisSplavSpodekSpojenecSpoluSponzorSpornostSpoustaSprchaSpustitSrandaSrazSrdceSrnaSrnecSrovnatSrpenSrstSrubStaniceStarostaStatikaStavbaStehnoStezkaStodolaStolekStopaStornoStoupatStrachStresStrhnoutStromStrunaStudnaStupniceStvolStykSubjektSubtropySucharSudostSuknoSundatSunoutSurikataSurovinaSvahSvalstvoSvetrSvatbaSvazekSvisleSvitekSvobodaSvodidloSvorkaSvrabSykavkaSykotSynekSynovecSypatSypkostSyrovostSyselSytostTabletkaTabuleTahounTajemnoTajfunTajgaTajitTajnostTaktikaTamhleTamponTancovatTanecTankerTapetaTaveninaTazatelTechnikaTehdyTekutinaTelefonTemnotaTendenceTenistaTenorTeplotaTepnaTeprveTerapieTermoskaTextilTichoTiskopisTitulekTkadlecTkaninaTlapkaTleskatTlukotTlupaTmelToaletaTopinkaTopolTorzoTouhaToulecTradiceTraktorTrampTrasaTraverzaTrefitTrestTrezorTrhavinaTrhlinaTrochuTrojiceTroskaTroubaTrpceTrpitelTrpkostTrubecTruchlitTruhliceTrusTrvatTudyTuhnoutTuhostTundraTuristaTurnajTuzemskoTvarohTvorbaTvrdostTvrzTygrTykevUbohostUbozeUbratUbrousekUbrusUbytovnaUchoUctivostUdivitUhraditUjednatUjistitUjmoutUkazatelUklidnitUklonitUkotvitUkrojitUliceUlitaUlovitUmyvadloUnavitUniformaUniknoutUpadnoutUplatnitUplynoutUpoutatUpravitUranUrazitUsednoutUsilovatUsmrtitUsnadnitUsnoutUsouditUstlatUstrnoutUtahovatUtkatUtlumitUtonoutUtopenecUtrousitUvalitUvolnitUvozovkaUzdravitUzelUzeninaUzlinaUznatVagonValchaValounVanaVandalVanilkaVaranVarhanyVarovatVcelkuVchodVdovaVedroVegetaceVejceVelbloudVeletrhVelitelVelmocVelrybaVenkovVerandaVerzeVeselkaVeskrzeVesniceVespoduVestaVeterinaVeverkaVibraceVichrVideohraVidinaVidleVilaViniceVisetVitalitaVizeVizitkaVjezdVkladVkusVlajkaVlakVlasecVlevoVlhkostVlivVlnovkaVloupatVnucovatVnukVodaVodivostVodoznakVodstvoVojenskyVojnaVojskoVolantVolbaVolitVolnoVoskovkaVozidloVozovnaVpravoVrabecVracetVrahVrataVrbaVrcholekVrhatVrstvaVrtuleVsaditVstoupitVstupVtipVybavitVybratVychovatVydatVydraVyfotitVyhledatVyhnoutVyhoditVyhraditVyhubitVyjasnitVyjetVyjmoutVyklopitVykonatVylekatVymazatVymezitVymizetVymysletVynechatVynikatVynutitVypadatVyplatitVypravitVypustitVyrazitVyrovnatVyrvatVyslovitVysokoVystavitVysunoutVysypatVytasitVytesatVytratitVyvinoutVyvolatVyvrhelVyzdobitVyznatVzaduVzbuditVzchopitVzdorVzduchVzdychatVzestupVzhledemVzkazVzlykatVznikVzorekVzpouraVztahVztekXylofonZabratZabydletZachovatZadarmoZadusitZafoukatZahltitZahoditZahradaZahynoutZajatecZajetZajistitZaklepatZakoupitZalepitZamezitZamotatZamysletZanechatZanikatZaplatitZapojitZapsatZarazitZastavitZasunoutZatajitZatemnitZatknoutZaujmoutZavalitZaveletZavinitZavolatZavrtatZazvonitZbavitZbrusuZbudovatZbytekZdalekaZdarmaZdatnostZdivoZdobitZdrojZdvihZdymadloZeleninaZemanZeminaZeptatZezaduZezdolaZhatitZhltnoutZhlubokaZhotovitZhrubaZimaZimniceZjemnitZklamatZkoumatZkratkaZkumavkaZlatoZlehkaZlobaZlomZlostZlozvykZmapovatZmarZmatekZmijeZmizetZmocnitZmodratZmrzlinaZmutovatZnakZnalostZnamenatZnovuZobrazitZotavitZoubekZoufaleZploditZpomalitZpravaZprostitZprudkaZprvuZradaZranitZrcadloZrnitostZrnoZrovnaZrychlitZrzavostZtichaZtratitZubovinaZubrZvednoutZvenkuZveselaZvonZvratZvukovodZvyk"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a" !== a.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for en (English) FAILED"));
                }
                var s = new ((function (e) {
                  function t() {
                    return e.call(this, "cz") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return l(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return l(this), i.indexOf(e);
                    }),
                    t
                  );
                })(a.Wordlist))();
                (o.langCz = s), a.Wordlist.register(s);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-cz.js" }
    ],
    [
      5340,
      {
        "../../../../../../helpers/constants/design-system": 5537,
        "../../../../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Content = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../../../component-library"),
                  l = e("../../../../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const c = ({ children: e, className: t = "", ...o }) =>
                  r.default.createElement(
                    i.Box,
                    u(
                      {
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Column,
                        width: l.BlockSize.Full,
                        padding: 4,
                        height: l.BlockSize.Full,
                        className: (0, a.default)("multichain-page-content", t)
                      },
                      o
                    ),
                    e
                  );
                (o.Content = c),
                  (c.propTypes = {
                    children: n.default.oneOfType([n.default.arrayOf(n.default.node), n.default.node, n.default.string]).isRequired,
                    className: n.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/content/content.js" }
    ],
    [
      5341,
      { "./content": 5340 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Content", {
                    enumerable: !0,
                    get: function () {
                      return r.Content;
                    }
                  });
                var r = e("./content");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/content/index.js" }
    ],
    [
      5342,
      {
        "../../../../../../helpers/constants/design-system": 5537,
        "../../../../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Footer = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../../../component-library"),
                  l = e("../../../../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const c = ({ children: e, className: t = "", ...o }) =>
                  r.default.createElement(
                    i.Box,
                    u(
                      {
                        padding: 4,
                        display: l.Display.Flex,
                        width: l.BlockSize.Full,
                        gap: 4,
                        className: (0, a.default)("multichain-page-footer", t)
                      },
                      o
                    ),
                    e
                  );
                (o.Footer = c),
                  (c.propTypes = {
                    children: n.default.oneOfType([n.default.arrayOf(n.default.node), n.default.node, n.default.string]).isRequired,
                    className: n.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/footer/footer.js" }
    ],
    [
      5343,
      { "./footer": 5342 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Footer", {
                    enumerable: !0,
                    get: function () {
                      return r.Footer;
                    }
                  });
                var r = e("./footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/footer/index.js" }
    ],
    [
      5344,
      {
        "../../../../../../helpers/constants/design-system": 5537,
        "../../../../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Header = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../../../component-library"),
                  l = e("../../../../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const c = ({ children: e, endAccessory: t = null, startAccessory: o = null, className: n = "", ...s }) =>
                  r.default.createElement(
                    i.HeaderBase,
                    u(
                      {
                        padding: 4,
                        width: l.BlockSize.Full,
                        className: (0, a.default)("multichain-page-header", n),
                        startAccessory: o,
                        endAccessory: t
                      },
                      s
                    ),
                    r.default.createElement(
                      i.Text,
                      {
                        display: l.Display.Block,
                        variant: l.TextVariant.bodyMdBold,
                        textAlign: l.TextAlign.Center,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8,
                        ellipsis: !0
                      },
                      e
                    )
                  );
                (o.Header = c),
                  (c.propTypes = {
                    className: n.default.string,
                    children: n.default.oneOfType([n.default.arrayOf(n.default.node), n.default.node, n.default.string]).isRequired,
                    endAccessory: n.default.element,
                    startAccessory: n.default.element
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/header/header.js" }
    ],
    [
      5345,
      { "./header": 5344 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Header", {
                    enumerable: !0,
                    get: function () {
                      return r.Header;
                    }
                  });
                var r = e("./header");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/components/header/index.js" }
    ],
    [
      5346,
      { "./components/content": 5341, "./components/footer": 5343, "./components/header": 5345, "./page": 5347 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Content", {
                    enumerable: !0,
                    get: function () {
                      return a.Content;
                    }
                  }),
                  Object.defineProperty(o, "Footer", {
                    enumerable: !0,
                    get: function () {
                      return i.Footer;
                    }
                  }),
                  Object.defineProperty(o, "Header", {
                    enumerable: !0,
                    get: function () {
                      return n.Header;
                    }
                  }),
                  Object.defineProperty(o, "Page", {
                    enumerable: !0,
                    get: function () {
                      return r.Page;
                    }
                  });
                var r = e("./page"),
                  n = e("./components/header"),
                  a = e("./components/content"),
                  i = e("./components/footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/index.js" }
    ],
    [
      5347,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Page = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const c = ({ header: e = null, footer: t = null, children: o, className: n = "", ...s }) =>
                  r.default.createElement(
                    i.Box,
                    u(
                      {
                        display: l.Display.Flex,
                        width: l.BlockSize.Full,
                        flexDirection: l.FlexDirection.Column,
                        style: { height: "100%" },
                        className: (0, a.default)("multichain-page", n)
                      },
                      s
                    ),
                    e,
                    o,
                    t
                  );
                (o.Page = c),
                  (c.propTypes = {
                    header: n.default.element,
                    footer: n.default.element,
                    className: n.default.string,
                    children: n.default.node
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/page/page.js" }
    ],
    [
      5348,
      {
        ".": 5349,
        "../../..": 5327,
        "../../../../../contexts/i18n": 5514,
        "../../../../../helpers/constants/design-system": 5537,
        "../../../../../selectors": 5958,
        "../../../../component-library": 5242,
        "../../../account-picker": 5291,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPageAccountPicker = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = p(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("../../../../../selectors"),
                  i = e("../../../../component-library"),
                  l = e("../../../account-picker"),
                  s = e("../../../../../helpers/constants/design-system"),
                  u = e("../../../../../contexts/i18n"),
                  c = e("../../.."),
                  d = e(".");
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (p = function (e) {
                    return e ? o : t;
                  })(e);
                }
                o.SendPageAccountPicker = () => {
                  const e = (0, r.useContext)(u.I18nContext),
                    t = (0, n.useSelector)(a.getSelectedIdentity),
                    [o, p] = (0, r.useState)(!1);
                  return r.default.createElement(
                    d.SendPageRow,
                    null,
                    r.default.createElement(i.Label, { paddingBottom: 2 }, e("from")),
                    r.default.createElement(l.AccountPicker, {
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
                    o
                      ? r.default.createElement(c.AccountListMenu, {
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
      5349,
      { "./account-picker": 5348, "./network-picker": 5350, "./recipient-input": 5351, "./send-page-row": 5352, "./your-accounts": 5353 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "SendPageAccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return n.SendPageAccountPicker;
                    }
                  }),
                  Object.defineProperty(o, "SendPageNetworkPicker", {
                    enumerable: !0,
                    get: function () {
                      return a.SendPageNetworkPicker;
                    }
                  }),
                  Object.defineProperty(o, "SendPageRecipientInput", {
                    enumerable: !0,
                    get: function () {
                      return l.SendPageRecipientInput;
                    }
                  }),
                  Object.defineProperty(o, "SendPageRow", {
                    enumerable: !0,
                    get: function () {
                      return r.SendPageRow;
                    }
                  }),
                  Object.defineProperty(o, "SendPageYourAccount", {
                    enumerable: !0,
                    get: function () {
                      return i.SendPageYourAccount;
                    }
                  });
                var r = e("./send-page-row"),
                  n = e("./account-picker"),
                  a = e("./network-picker"),
                  i = e("./your-accounts"),
                  l = e("./recipient-input");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/index.ts" }
    ],
    [
      535,
      { "./wordlist": 542 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langEn = void 0);
                var a = e("./wordlist"),
                  i = null;
                function l(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== a.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for en (English) FAILED"));
                }
                var s = new ((function (e) {
                  function t() {
                    return e.call(this, "en") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return l(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return l(this), i.indexOf(e);
                    }),
                    t
                  );
                })(a.Wordlist))();
                (o.langEn = s), a.Wordlist.register(s);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-en.js" }
    ],
    [
      5350,
      {
        ".": 5349,
        "../../../../../selectors": 5958,
        "../../../../../store/actions": 5965,
        "../../../../component-library": 5242,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPageNetworkPicker = void 0);
                var r,
                  n = (r = e("react")) && r.__esModule ? r : { default: r },
                  a = e("react-redux"),
                  i = e("../../../../../selectors"),
                  l = e("../../../../../store/actions"),
                  s = e("../../../../component-library"),
                  u = e(".");
                o.SendPageNetworkPicker = () => {
                  var e;
                  const t = (0, a.useSelector)(i.getCurrentNetwork),
                    o = (0, a.useDispatch)();
                  return n.default.createElement(
                    u.SendPageRow,
                    null,
                    n.default.createElement(s.PickerNetwork, {
                      label: null == t ? void 0 : t.nickname,
                      src: null == t || null === (e = t.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                      onClick: () => o((0, l.toggleNetworkMenu)()),
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
      5351,
      {
        ".": 5349,
        "../../../../../../shared/constants/metametrics": 4758,
        "../../../../../contexts/i18n": 5514,
        "../../../../../contexts/metametrics": 5515,
        "../../../../../ducks/send": 5531,
        "../../../../../pages/send/send-content/add-recipient/domain-input": 5780,
        "../../../../../store/actions": 5965,
        "../../../../component-library": 5242,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPageRecipientInput = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = m(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  i = e("../../../../component-library"),
                  l = (r = e("../../../../../pages/send/send-content/add-recipient/domain-input")) && r.__esModule ? r : { default: r },
                  s = e("../../../../../contexts/i18n"),
                  u = e("../../../../../ducks/send"),
                  c = e("../../../../../store/actions"),
                  d = e("../../../../../contexts/metametrics"),
                  p = e("../../../../../../shared/constants/metametrics"),
                  f = e(".");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (m = function (e) {
                    return e ? o : t;
                  })(e);
                }
                o.SendPageRecipientInput = () => {
                  const e = (0, n.useContext)(s.I18nContext),
                    t = (0, a.useDispatch)(),
                    o = (0, n.useContext)(d.MetaMetricsContext),
                    r = (0, a.useSelector)(u.getRecipient),
                    m = (0, a.useSelector)(u.getRecipientUserInput),
                    g = (0, a.useSelector)(u.getIsUsingMyAccountForRecipientSearch);
                  return n.default.createElement(
                    f.SendPageRow,
                    null,
                    n.default.createElement(i.Label, { paddingBottom: 2 }, e("to")),
                    n.default.createElement(l.default, {
                      userInput: m,
                      onChange: (e) => t((0, u.updateRecipientUserInput)(e)),
                      onValidAddressTyped: async (e) => {
                        t((0, u.addHistoryEntry)(`sendFlow - Valid address typed ${e}`)),
                          await t((0, u.updateRecipientUserInput)(e)),
                          t((0, u.updateRecipient)({ address: e, nickname: "" }));
                      },
                      internalSearch: g,
                      selectedAddress: r.address,
                      selectedName: r.nickname,
                      onPaste: (e) => {
                        t((0, u.addHistoryEntry)(`sendFlow - User pasted ${e} into address field`));
                      },
                      onReset: () => t((0, u.resetRecipientInput)()),
                      scanQrCode: () => {
                        o({
                          event: "Used QR scanner",
                          category: p.MetaMetricsEventCategory.Transactions,
                          properties: { action: "Edit Screen", legacy_event: !0 }
                        }),
                          t((0, c.showQrScanner)());
                      }
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/recipient-input.js" }
    ],
    [
      5352,
      { "../../../../../helpers/constants/design-system": 5537, "../../../../component-library": 5242, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPageRow = void 0);
                var r,
                  n = (r = e("react")) && r.__esModule ? r : { default: r },
                  a = e("../../../../component-library"),
                  i = e("../../../../../helpers/constants/design-system");
                o.SendPageRow = ({ children: e }) =>
                  n.default.createElement(a.Box, { display: i.Display.Flex, paddingBottom: 6, flexDirection: i.FlexDirection.Column }, e);
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/components/send-page-row.tsx" }
    ],
    [
      5353,
      {
        ".": 5349,
        "../../..": 5327,
        "../../../../../contexts/i18n": 5514,
        "../../../../../ducks/send": 5531,
        "../../../../../selectors": 5958,
        "../../../../component-library": 5242,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPageYourAccount = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("../../../../component-library"),
                  i = e("../../../../../selectors"),
                  l = e("../../.."),
                  s = e("../../../../../contexts/i18n"),
                  u = e("../../../../../ducks/send"),
                  c = e(".");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (d = function (e) {
                    return e ? o : t;
                  })(e);
                }
                o.SendPageYourAccount = () => {
                  const e = (0, r.useContext)(s.I18nContext),
                    t = (0, n.useDispatch)(),
                    o = (0, n.useSelector)(i.getMetaMaskAccountsOrdered);
                  return r.default.createElement(
                    c.SendPageRow,
                    null,
                    r.default.createElement(a.Label, { paddingBottom: 2 }, e("yourAccounts")),
                    o.map((e) =>
                      r.default.createElement(l.AccountListItem, {
                        identity: e,
                        key: e.address,
                        onClick: () => {
                          t(
                            (0, u.addHistoryEntry)(
                              `sendFlow - User clicked recipient from my accounts. address: ${e.address}, nickname ${e.name}`
                            )
                          ),
                            t((0, u.updateRecipient)({ address: e.address, nickname: e.name })),
                            t((0, u.updateRecipientUserInput)(e.address));
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
      5354,
      { "./send": 5355 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "SendPage", {
                    enumerable: !0,
                    get: function () {
                      return r.SendPage;
                    }
                  });
                var r = e("./send");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/index.js" }
    ],
    [
      5355,
      {
        "../../../../../shared/constants/transaction": 4770,
        "../../../../contexts/i18n": 5514,
        "../../../../ducks/history/history": 5526,
        "../../../../ducks/send": 5531,
        "../../../../helpers/constants/routes": 5542,
        "../../../../store/actions": 5965,
        "../../../component-library": 5242,
        "../page": 5346,
        "./components": 5349,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SendPage = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = g(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("react-router-dom"),
                  i = e("../../../../contexts/i18n"),
                  l = e("../../../component-library"),
                  s = e("../page"),
                  u = e("../../../../ducks/send"),
                  c = e("../../../../../shared/constants/transaction"),
                  d = e("../../../../store/actions"),
                  p = e("../../../../helpers/constants/routes"),
                  f = e("../../../../ducks/history/history"),
                  m = e("./components");
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (g = function (e) {
                    return e ? o : t;
                  })(e);
                }
                o.SendPage = () => {
                  const e = (0, r.useContext)(i.I18nContext),
                    t = (0, n.useDispatch)(),
                    o = (0, r.useRef)(!1),
                    g = (0, n.useSelector)(u.getDraftTransactionExists),
                    h = (0, n.useSelector)(u.getDraftTransactionID),
                    b = (0, n.useSelector)(f.getMostRecentOverviewPage),
                    v = (0, n.useSelector)(u.getSendStage),
                    y = (0, a.useHistory)(),
                    T = (0, a.useLocation)(),
                    C = (0, r.useCallback)(() => {
                      t((0, u.resetSendState)());
                    }, [t]);
                  (0, r.useEffect)(() => {
                    !1 === g && !1 === o.current && ((o.current = !0), t((0, u.startNewDraftTransaction)({ type: c.AssetType.native })));
                  }, [g, t]),
                    (0, r.useEffect)(() => {
                      window.addEventListener("beforeunload", C);
                    }, [C]),
                    (0, r.useEffect)(() => {
                      if ("?scan=true" === T.search) {
                        t((0, d.showQrScanner)());
                        const [e] = window.location.href.split("?");
                        window.history.pushState({}, null, `${e}`), (window.location.hash = "#send");
                      }
                    }, [T, t]),
                    (0, r.useEffect)(
                      () => () => {
                        t((0, u.resetSendState)()), window.removeEventListener("beforeunload", C);
                      },
                      [t, C]
                    );
                  const k = (0, r.useCallback)(() => {
                    h && t((0, d.cancelTx)({ id: h })), t((0, u.resetSendState)());
                    const e = v === u.SEND_STAGES.EDIT ? p.DEFAULT_ROUTE : b;
                    y.push(e);
                  });
                  return r.default.createElement(
                    s.Page,
                    { className: "multichain-send-page" },
                    r.default.createElement(
                      s.Header,
                      {
                        startAccessory: r.default.createElement(l.ButtonIcon, {
                          size: l.ButtonIconSize.Sm,
                          ariaLabel: e("back"),
                          iconName: l.IconName.ArrowLeft,
                          onClick: k
                        })
                      },
                      e("sendAToken")
                    ),
                    r.default.createElement(
                      s.Content,
                      null,
                      r.default.createElement(m.SendPageNetworkPicker, null),
                      r.default.createElement(m.SendPageAccountPicker, null),
                      r.default.createElement(m.SendPageRecipientInput, null),
                      r.default.createElement(m.SendPageYourAccount, null)
                    ),
                    r.default.createElement(
                      s.Footer,
                      null,
                      r.default.createElement(l.ButtonSecondary, { onClick: k, size: l.ButtonSecondarySize.Lg, block: !0 }, e("cancel")),
                      r.default.createElement(l.ButtonPrimary, { size: l.ButtonPrimarySize.Lg, block: !0, disabled: !0 }, e("confirm"))
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/pages/send/send.js" }
    ],
    [
      5356,
      { "./product-tour-popover": 5357 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ProductTour", {
                    enumerable: !0,
                    get: function () {
                      return r.ProductTour;
                    }
                  });
                var r = e("./product-tour-popover");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/product-tour-popover/index.js" }
    ],
    [
      5357,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../../ui/menu": 5447,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ProductTour = void 0);
                var r = c(e("react")),
                  n = c(e("classnames")),
                  a = c(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../component-library"),
                  s = e("../../../hooks/useI18nContext"),
                  u = e("../../ui/menu");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                const p = ({
                  className: e,
                  prevIcon: t,
                  title: o,
                  description: a,
                  currentStep: c,
                  totalSteps: p,
                  positionObj: f = "5%",
                  closeMenu: m,
                  anchorElement: g,
                  onClick: h,
                  prevClick: b,
                  productTourDirection: v,
                  ...y
                }) => {
                  const T = (0, s.useI18nContext)();
                  return r.default.createElement(
                    u.Menu,
                    d(
                      {
                        className: (0, n.default)("multichain-product-tour-menu", { "multichain-product-tour-menu--rtl": "rtl" === v }, e),
                        anchorElement: g,
                        onHide: m,
                        "data-testid": "multichain-product-tour-menu-popover"
                      },
                      y
                    ),
                    r.default.createElement(
                      l.Box,
                      {
                        className: "multichain-product-tour-menu__container",
                        backgroundColor: i.BackgroundColor.infoDefault,
                        borderRadius: i.BorderRadius.LG,
                        padding: 4
                      },
                      r.default.createElement(l.Box, {
                        borderWidth: 1,
                        className: "multichain-product-tour-menu__arrow",
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        style: { right: f }
                      }),
                      r.default.createElement(
                        l.Box,
                        { display: i.Display.Flex, alignItems: i.AlignItems.center, className: "multichain-product-tour-menu__header" },
                        t
                          ? r.default.createElement(l.ButtonIcon, {
                              iconName: l.IconName.ArrowLeft,
                              size: i.Size.SM,
                              color: i.IconColor.infoInverse,
                              onClick: b,
                              className: "multichain-product-tour-menu__previous-icon",
                              "data-testid": "multichain-product-tour-menu-popover-prevIcon"
                            })
                          : null,
                        r.default.createElement(
                          l.Text,
                          {
                            textAlign: i.TextAlign.Center,
                            variant: i.TextVariant.headingSm,
                            width: i.BlockSize.Full,
                            color: i.TextColor.infoInverse
                          },
                          o
                        )
                      ),
                      r.default.createElement(
                        l.Text,
                        { paddingBottom: 2, paddingTop: 2, color: i.TextColor.infoInverse, variant: i.TextVariant.bodyMd },
                        a
                      ),
                      r.default.createElement(
                        l.Box,
                        { display: i.Display.Flex, alignItems: i.AlignItems.center, justifyContent: i.JustifyContent.spaceBetween },
                        r.default.createElement(
                          l.Text,
                          { paddingBottom: 2, paddingTop: 2, color: i.TextColor.infoInverse, variant: i.TextVariant.bodyMd },
                          c,
                          "/",
                          p
                        ),
                        r.default.createElement(
                          l.ButtonBase,
                          {
                            backgroundColor: i.BackgroundColor.primaryInverse,
                            color: i.TextColor.primaryDefault,
                            className: "multichain-product-tour-menu__button",
                            onClick: h
                          },
                          T("recoveryPhraseReminderConfirm")
                        )
                      )
                    )
                  );
                };
                (o.ProductTour = p),
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
      5358,
      { "./receive-modal": 5359 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "ReceiveModal", {
                    enumerable: !0,
                    get: function () {
                      return r.ReceiveModal;
                    }
                  });
                var r = e("./receive-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/receive-modal/index.js" }
    ],
    [
      5359,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/qr-code": 5469,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ReceiveModal = void 0);
                var r = d(e("react")),
                  n = e("react-redux"),
                  a = d(e("prop-types")),
                  i = e("../../component-library"),
                  l = d(e("../../ui/qr-code")),
                  s = e("../../../hooks/useI18nContext"),
                  u = e("../../../selectors"),
                  c = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ address: e, onClose: t }) => {
                  const o = (0, s.useI18nContext)(),
                    a = (0, n.useSelector)(u.getUseBlockie),
                    d = (0, n.useSelector)(u.getMetaMaskAccountsOrdered),
                    { name: p } = d.find((t) => t.address === e);
                  return r.default.createElement(
                    i.Modal,
                    { isOpen: !0, onClose: t },
                    r.default.createElement(i.ModalOverlay, null),
                    r.default.createElement(
                      i.ModalContent,
                      null,
                      r.default.createElement(i.ModalHeader, { marginBottom: 4, onClose: t }, o("receive")),
                      r.default.createElement(
                        i.Box,
                        { display: c.Display.Flex, width: c.BlockSize.Full, justifyContent: c.JustifyContent.center },
                        r.default.createElement(i.AvatarAccount, {
                          variant: a ? i.AvatarAccountVariant.Blockies : i.AvatarAccountVariant.Jazzicon,
                          address: e,
                          size: i.AvatarAccountSize.Lg
                        })
                      ),
                      r.default.createElement(
                        i.Text,
                        { marginTop: 4, variant: c.TextVariant.bodyLgMedium, textAlign: c.TextAlign.Center },
                        p
                      ),
                      r.default.createElement(
                        i.Box,
                        { display: c.Display.Flex, alignItems: c.AlignItems.center, flexDirection: c.FlexDirection.Column },
                        r.default.createElement(l.default, { Qr: { data: e } })
                      )
                    )
                  );
                };
                (o.ReceiveModal = p), (p.propTypes = { address: a.default.string.isRequired, onClose: a.default.func.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/receive-modal/receive-modal.js" }
    ],
    [
      536,
      { "./wordlist": 542, "@ethersproject/strings": 521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langEs = void 0);
                var a = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  l = {},
                  s = null;
                function u(e) {
                  return (
                    i.logger.checkNormalize(),
                    (0, a.toUtf8String)(
                      Array.prototype.filter.call((0, a.toUtf8Bytes)(e.normalize("NFD").toLowerCase()), function (e) {
                        return (e >= 65 && e <= 90) || (e >= 97 && e <= 123);
                      })
                    )
                  );
                }
                function c(e) {
                  if (
                    null == s &&
                    ((s =
                      "A/bacoAbdomenAbejaAbiertoAbogadoAbonoAbortoAbrazoAbrirAbueloAbusoAcabarAcademiaAccesoAccio/nAceiteAcelgaAcentoAceptarA/cidoAclararAcne/AcogerAcosoActivoActoActrizActuarAcudirAcuerdoAcusarAdictoAdmitirAdoptarAdornoAduanaAdultoAe/reoAfectarAficio/nAfinarAfirmarA/gilAgitarAgoni/aAgostoAgotarAgregarAgrioAguaAgudoA/guilaAgujaAhogoAhorroAireAislarAjedrezAjenoAjusteAlacra/nAlambreAlarmaAlbaA/lbumAlcaldeAldeaAlegreAlejarAlertaAletaAlfilerAlgaAlgodo/nAliadoAlientoAlivioAlmaAlmejaAlmi/barAltarAltezaAltivoAltoAlturaAlumnoAlzarAmableAmanteAmapolaAmargoAmasarA/mbarA/mbitoAmenoAmigoAmistadAmorAmparoAmplioAnchoAncianoAnclaAndarAnde/nAnemiaA/nguloAnilloA/nimoAni/sAnotarAntenaAntiguoAntojoAnualAnularAnuncioA~adirA~ejoA~oApagarAparatoApetitoApioAplicarApodoAporteApoyoAprenderAprobarApuestaApuroAradoAra~aArarA/rbitroA/rbolArbustoArchivoArcoArderArdillaArduoA/reaA/ridoAriesArmoni/aArne/sAromaArpaArpo/nArregloArrozArrugaArteArtistaAsaAsadoAsaltoAscensoAsegurarAseoAsesorAsientoAsiloAsistirAsnoAsombroA/speroAstillaAstroAstutoAsumirAsuntoAtajoAtaqueAtarAtentoAteoA/ticoAtletaA/tomoAtraerAtrozAtu/nAudazAudioAugeAulaAumentoAusenteAutorAvalAvanceAvaroAveAvellanaAvenaAvestruzAvio/nAvisoAyerAyudaAyunoAzafra/nAzarAzoteAzu/carAzufreAzulBabaBaborBacheBahi/aBaileBajarBalanzaBalco/nBaldeBambu/BancoBandaBa~oBarbaBarcoBarnizBarroBa/sculaBasto/nBasuraBatallaBateri/aBatirBatutaBau/lBazarBebe/BebidaBelloBesarBesoBestiaBichoBienBingoBlancoBloqueBlusaBoaBobinaBoboBocaBocinaBodaBodegaBoinaBolaBoleroBolsaBombaBondadBonitoBonoBonsa/iBordeBorrarBosqueBoteBoti/nBo/vedaBozalBravoBrazoBrechaBreveBrilloBrincoBrisaBrocaBromaBronceBroteBrujaBruscoBrutoBuceoBucleBuenoBueyBufandaBufo/nBu/hoBuitreBultoBurbujaBurlaBurroBuscarButacaBuzo/nCaballoCabezaCabinaCabraCacaoCada/verCadenaCaerCafe/Cai/daCaima/nCajaCajo/nCalCalamarCalcioCaldoCalidadCalleCalmaCalorCalvoCamaCambioCamelloCaminoCampoCa/ncerCandilCanelaCanguroCanicaCantoCa~aCa~o/nCaobaCaosCapazCapita/nCapoteCaptarCapuchaCaraCarbo/nCa/rcelCaretaCargaCari~oCarneCarpetaCarroCartaCasaCascoCaseroCaspaCastorCatorceCatreCaudalCausaCazoCebollaCederCedroCeldaCe/lebreCelosoCe/lulaCementoCenizaCentroCercaCerdoCerezaCeroCerrarCertezaCe/spedCetroChacalChalecoChampu/ChanclaChapaCharlaChicoChisteChivoChoqueChozaChuletaChuparCiclo/nCiegoCieloCienCiertoCifraCigarroCimaCincoCineCintaCipre/sCircoCiruelaCisneCitaCiudadClamorClanClaroClaseClaveClienteClimaCli/nicaCobreCoccio/nCochinoCocinaCocoCo/digoCodoCofreCogerCoheteCoji/nCojoColaColchaColegioColgarColinaCollarColmoColumnaCombateComerComidaCo/modoCompraCondeConejoCongaConocerConsejoContarCopaCopiaCorazo/nCorbataCorchoCordo/nCoronaCorrerCoserCosmosCostaCra/neoCra/terCrearCrecerCrei/doCremaCri/aCrimenCriptaCrisisCromoCro/nicaCroquetaCrudoCruzCuadroCuartoCuatroCuboCubrirCucharaCuelloCuentoCuerdaCuestaCuevaCuidarCulebraCulpaCultoCumbreCumplirCunaCunetaCuotaCupo/nCu/pulaCurarCuriosoCursoCurvaCutisDamaDanzaDarDardoDa/tilDeberDe/bilDe/cadaDecirDedoDefensaDefinirDejarDelfi/nDelgadoDelitoDemoraDensoDentalDeporteDerechoDerrotaDesayunoDeseoDesfileDesnudoDestinoDesvi/oDetalleDetenerDeudaDi/aDiabloDiademaDiamanteDianaDiarioDibujoDictarDienteDietaDiezDifi/cilDignoDilemaDiluirDineroDirectoDirigirDiscoDise~oDisfrazDivaDivinoDobleDoceDolorDomingoDonDonarDoradoDormirDorsoDosDosisDrago/nDrogaDuchaDudaDueloDue~oDulceDu/oDuqueDurarDurezaDuroE/banoEbrioEcharEcoEcuadorEdadEdicio/nEdificioEditorEducarEfectoEficazEjeEjemploElefanteElegirElementoElevarElipseE/liteElixirElogioEludirEmbudoEmitirEmocio/nEmpateEmpe~oEmpleoEmpresaEnanoEncargoEnchufeEnci/aEnemigoEneroEnfadoEnfermoEnga~oEnigmaEnlaceEnormeEnredoEnsayoEnse~arEnteroEntrarEnvaseEnvi/oE/pocaEquipoErizoEscalaEscenaEscolarEscribirEscudoEsenciaEsferaEsfuerzoEspadaEspejoEspi/aEsposaEspumaEsqui/EstarEsteEstiloEstufaEtapaEternoE/ticaEtniaEvadirEvaluarEventoEvitarExactoExamenExcesoExcusaExentoExigirExilioExistirE/xitoExpertoExplicarExponerExtremoFa/bricaFa/bulaFachadaFa/cilFactorFaenaFajaFaldaFalloFalsoFaltarFamaFamiliaFamosoFarao/nFarmaciaFarolFarsaFaseFatigaFaunaFavorFaxFebreroFechaFelizFeoFeriaFerozFe/rtilFervorFesti/nFiableFianzaFiarFibraFiccio/nFichaFideoFiebreFielFieraFiestaFiguraFijarFijoFilaFileteFilialFiltroFinFincaFingirFinitoFirmaFlacoFlautaFlechaFlorFlotaFluirFlujoFlu/orFobiaFocaFogataFogo/nFolioFolletoFondoFormaForroFortunaForzarFosaFotoFracasoFra/gilFranjaFraseFraudeFrei/rFrenoFresaFri/oFritoFrutaFuegoFuenteFuerzaFugaFumarFuncio/nFundaFurgo/nFuriaFusilFu/tbolFuturoGacelaGafasGaitaGajoGalaGaleri/aGalloGambaGanarGanchoGangaGansoGarajeGarzaGasolinaGastarGatoGavila/nGemeloGemirGenGe/neroGenioGenteGeranioGerenteGermenGestoGiganteGimnasioGirarGiroGlaciarGloboGloriaGolGolfoGolosoGolpeGomaGordoGorilaGorraGotaGoteoGozarGradaGra/ficoGranoGrasaGratisGraveGrietaGrilloGripeGrisGritoGrosorGru/aGruesoGrumoGrupoGuanteGuapoGuardiaGuerraGui/aGui~oGuionGuisoGuitarraGusanoGustarHaberHa/bilHablarHacerHachaHadaHallarHamacaHarinaHazHaza~aHebillaHebraHechoHeladoHelioHembraHerirHermanoHe/roeHervirHieloHierroHi/gadoHigieneHijoHimnoHistoriaHocicoHogarHogueraHojaHombreHongoHonorHonraHoraHormigaHornoHostilHoyoHuecoHuelgaHuertaHuesoHuevoHuidaHuirHumanoHu/medoHumildeHumoHundirHuraca/nHurtoIconoIdealIdiomaI/doloIglesiaIglu/IgualIlegalIlusio/nImagenIma/nImitarImparImperioImponerImpulsoIncapazI/ndiceInerteInfielInformeIngenioInicioInmensoInmuneInnatoInsectoInstanteIntere/sI/ntimoIntuirInu/tilInviernoIraIrisIroni/aIslaIsloteJabali/Jabo/nJamo/nJarabeJardi/nJarraJaulaJazmi/nJefeJeringaJineteJornadaJorobaJovenJoyaJuergaJuevesJuezJugadorJugoJugueteJuicioJuncoJunglaJunioJuntarJu/piterJurarJustoJuvenilJuzgarKiloKoalaLabioLacioLacraLadoLadro/nLagartoLa/grimaLagunaLaicoLamerLa/minaLa/mparaLanaLanchaLangostaLanzaLa/pizLargoLarvaLa/stimaLataLa/texLatirLaurelLavarLazoLealLeccio/nLecheLectorLeerLegio/nLegumbreLejanoLenguaLentoLe~aLeo/nLeopardoLesio/nLetalLetraLeveLeyendaLibertadLibroLicorLi/derLidiarLienzoLigaLigeroLimaLi/miteLimo/nLimpioLinceLindoLi/neaLingoteLinoLinternaLi/quidoLisoListaLiteraLitioLitroLlagaLlamaLlantoLlaveLlegarLlenarLlevarLlorarLloverLluviaLoboLocio/nLocoLocuraLo/gicaLogroLombrizLomoLonjaLoteLuchaLucirLugarLujoLunaLunesLupaLustroLutoLuzMacetaMachoMaderaMadreMaduroMaestroMafiaMagiaMagoMai/zMaldadMaletaMallaMaloMama/MamboMamutMancoMandoManejarMangaManiqui/ManjarManoMansoMantaMa~anaMapaMa/quinaMarMarcoMareaMarfilMargenMaridoMa/rmolMarro/nMartesMarzoMasaMa/scaraMasivoMatarMateriaMatizMatrizMa/ximoMayorMazorcaMechaMedallaMedioMe/dulaMejillaMejorMelenaMelo/nMemoriaMenorMensajeMenteMenu/MercadoMerengueMe/ritoMesMeso/nMetaMeterMe/todoMetroMezclaMiedoMielMiembroMigaMilMilagroMilitarMillo/nMimoMinaMineroMi/nimoMinutoMiopeMirarMisaMiseriaMisilMismoMitadMitoMochilaMocio/nModaModeloMohoMojarMoldeMolerMolinoMomentoMomiaMonarcaMonedaMonjaMontoMo~oMoradaMorderMorenoMorirMorroMorsaMortalMoscaMostrarMotivoMoverMo/vilMozoMuchoMudarMuebleMuelaMuerteMuestraMugreMujerMulaMuletaMultaMundoMu~ecaMuralMuroMu/sculoMuseoMusgoMu/sicaMusloNa/carNacio/nNadarNaipeNaranjaNarizNarrarNasalNatalNativoNaturalNa/useaNavalNaveNavidadNecioNe/ctarNegarNegocioNegroNeo/nNervioNetoNeutroNevarNeveraNichoNidoNieblaNietoNi~ezNi~oNi/tidoNivelNoblezaNocheNo/minaNoriaNormaNorteNotaNoticiaNovatoNovelaNovioNubeNucaNu/cleoNudilloNudoNueraNueveNuezNuloNu/meroNutriaOasisObesoObispoObjetoObraObreroObservarObtenerObvioOcaOcasoOce/anoOchentaOchoOcioOcreOctavoOctubreOcultoOcuparOcurrirOdiarOdioOdiseaOesteOfensaOfertaOficioOfrecerOgroOi/doOi/rOjoOlaOleadaOlfatoOlivoOllaOlmoOlorOlvidoOmbligoOndaOnzaOpacoOpcio/nO/peraOpinarOponerOptarO/pticaOpuestoOracio/nOradorOralO/rbitaOrcaOrdenOrejaO/rganoOrgi/aOrgulloOrienteOrigenOrillaOroOrquestaOrugaOsadi/aOscuroOseznoOsoOstraOto~oOtroOvejaO/vuloO/xidoOxi/genoOyenteOzonoPactoPadrePaellaPa/ginaPagoPai/sPa/jaroPalabraPalcoPaletaPa/lidoPalmaPalomaPalparPanPanalPa/nicoPanteraPa~ueloPapa/PapelPapillaPaquetePararParcelaParedParirParoPa/rpadoParquePa/rrafoPartePasarPaseoPasio/nPasoPastaPataPatioPatriaPausaPautaPavoPayasoPeato/nPecadoPeceraPechoPedalPedirPegarPeinePelarPelda~oPeleaPeligroPellejoPeloPelucaPenaPensarPe~o/nPeo/nPeorPepinoPeque~oPeraPerchaPerderPerezaPerfilPericoPerlaPermisoPerroPersonaPesaPescaPe/simoPesta~aPe/taloPetro/leoPezPezu~aPicarPicho/nPiePiedraPiernaPiezaPijamaPilarPilotoPimientaPinoPintorPinzaPi~aPiojoPipaPirataPisarPiscinaPisoPistaPito/nPizcaPlacaPlanPlataPlayaPlazaPleitoPlenoPlomoPlumaPluralPobrePocoPoderPodioPoemaPoesi/aPoetaPolenPolici/aPolloPolvoPomadaPomeloPomoPompaPonerPorcio/nPortalPosadaPoseerPosiblePostePotenciaPotroPozoPradoPrecozPreguntaPremioPrensaPresoPrevioPrimoPri/ncipePrisio/nPrivarProaProbarProcesoProductoProezaProfesorProgramaProlePromesaProntoPropioPro/ximoPruebaPu/blicoPucheroPudorPuebloPuertaPuestoPulgaPulirPulmo/nPulpoPulsoPumaPuntoPu~alPu~oPupaPupilaPure/QuedarQuejaQuemarQuererQuesoQuietoQui/micaQuinceQuitarRa/banoRabiaRaboRacio/nRadicalRai/zRamaRampaRanchoRangoRapazRa/pidoRaptoRasgoRaspaRatoRayoRazaRazo/nReaccio/nRealidadReba~oReboteRecaerRecetaRechazoRecogerRecreoRectoRecursoRedRedondoReducirReflejoReformaRefra/nRefugioRegaloRegirReglaRegresoRehe/nReinoRei/rRejaRelatoRelevoRelieveRellenoRelojRemarRemedioRemoRencorRendirRentaRepartoRepetirReposoReptilResRescateResinaRespetoRestoResumenRetiroRetornoRetratoReunirReve/sRevistaReyRezarRicoRiegoRiendaRiesgoRifaRi/gidoRigorRinco/nRi~o/nRi/oRiquezaRisaRitmoRitoRizoRobleRoceRociarRodarRodeoRodillaRoerRojizoRojoRomeroRomperRonRoncoRondaRopaRoperoRosaRoscaRostroRotarRubi/RuborRudoRuedaRugirRuidoRuinaRuletaRuloRumboRumorRupturaRutaRutinaSa/badoSaberSabioSableSacarSagazSagradoSalaSaldoSaleroSalirSalmo/nSalo/nSalsaSaltoSaludSalvarSambaSancio/nSandi/aSanearSangreSanidadSanoSantoSapoSaqueSardinaSarte/nSastreSata/nSaunaSaxofo/nSeccio/nSecoSecretoSectaSedSeguirSeisSelloSelvaSemanaSemillaSendaSensorSe~alSe~orSepararSepiaSequi/aSerSerieSermo/nServirSesentaSesio/nSetaSetentaSeveroSexoSextoSidraSiestaSieteSigloSignoSi/labaSilbarSilencioSillaSi/mboloSimioSirenaSistemaSitioSituarSobreSocioSodioSolSolapaSoldadoSoledadSo/lidoSoltarSolucio/nSombraSondeoSonidoSonoroSonrisaSopaSoplarSoporteSordoSorpresaSorteoSoste/nSo/tanoSuaveSubirSucesoSudorSuegraSueloSue~oSuerteSufrirSujetoSulta/nSumarSuperarSuplirSuponerSupremoSurSurcoSure~oSurgirSustoSutilTabacoTabiqueTablaTabu/TacoTactoTajoTalarTalcoTalentoTallaTalo/nTama~oTamborTangoTanqueTapaTapeteTapiaTapo/nTaquillaTardeTareaTarifaTarjetaTarotTarroTartaTatuajeTauroTazaTazo/nTeatroTechoTeclaTe/cnicaTejadoTejerTejidoTelaTele/fonoTemaTemorTemploTenazTenderTenerTenisTensoTeori/aTerapiaTercoTe/rminoTernuraTerrorTesisTesoroTestigoTeteraTextoTezTibioTiburo/nTiempoTiendaTierraTiesoTigreTijeraTildeTimbreTi/midoTimoTintaTi/oTi/picoTipoTiraTiro/nTita/nTi/tereTi/tuloTizaToallaTobilloTocarTocinoTodoTogaToldoTomarTonoTontoToparTopeToqueTo/raxToreroTormentaTorneoToroTorpedoTorreTorsoTortugaTosToscoToserTo/xicoTrabajoTractorTraerTra/ficoTragoTrajeTramoTranceTratoTraumaTrazarTre/bolTreguaTreintaTrenTreparTresTribuTrigoTripaTristeTriunfoTrofeoTrompaTroncoTropaTroteTrozoTrucoTruenoTrufaTuberi/aTuboTuertoTumbaTumorTu/nelTu/nicaTurbinaTurismoTurnoTutorUbicarU/lceraUmbralUnidadUnirUniversoUnoUntarU~aUrbanoUrbeUrgenteUrnaUsarUsuarioU/tilUtopi/aUvaVacaVaci/oVacunaVagarVagoVainaVajillaValeVa/lidoValleValorVa/lvulaVampiroVaraVariarVaro/nVasoVecinoVectorVehi/culoVeinteVejezVelaVeleroVelozVenaVencerVendaVenenoVengarVenirVentaVenusVerVeranoVerboVerdeVeredaVerjaVersoVerterVi/aViajeVibrarVicioVi/ctimaVidaVi/deoVidrioViejoViernesVigorVilVillaVinagreVinoVi~edoVioli/nViralVirgoVirtudVisorVi/speraVistaVitaminaViudoVivazViveroVivirVivoVolca/nVolumenVolverVorazVotarVotoVozVueloVulgarYacerYateYeguaYemaYernoYesoYodoYogaYogurZafiroZanjaZapatoZarzaZonaZorroZumoZurdo"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")
                        .map(function (e) {
                          return (
                            (t = e),
                            (o = []),
                            Array.prototype.forEach.call((0, a.toUtf8Bytes)(t), function (e) {
                              47 === e ? (o.push(204), o.push(129)) : 126 === e ? (o.push(110), o.push(204), o.push(131)) : o.push(e);
                            }),
                            (0, a.toUtf8String)(o)
                          );
                          var t, o;
                        })).forEach(function (e, t) {
                      l[u(e)] = t;
                    }),
                    "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300" !== i.Wordlist.check(e))
                  )
                    throw ((s = null), new Error("BIP39 Wordlist for es (Spanish) FAILED"));
                }
                var d = new ((function (e) {
                  function t() {
                    return e.call(this, "es") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return c(this), s[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return c(this), l[u(e)];
                    }),
                    t
                  );
                })(i.Wordlist))();
                (o.langEs = d), i.Wordlist.register(d);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-es.js" }
    ],
    [
      5360,
      { "./select-action-modal-item": 5361 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "SelectActionModalItem", {
                    enumerable: !0,
                    get: function () {
                      return r.SelectActionModalItem;
                    }
                  });
                var r = e("./select-action-modal-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal-item/index.js" }
    ],
    [
      5361,
      { "../../../helpers/constants/design-system": 5537, "../../component-library": 5242, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SelectActionModalItem = void 0);
                var r = l(e("react")),
                  n = l(e("prop-types")),
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
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const u = ({ actionIcon: e, onClick: t, showIcon: o, primaryText: n, secondaryText: l, disabled: u, ...c }) =>
                  u
                    ? null
                    : r.default.createElement(
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
                          c
                        ),
                        r.default.createElement(
                          i.Box,
                          null,
                          r.default.createElement(i.AvatarIcon, {
                            iconName: e,
                            color: a.IconColor.primaryInverse,
                            backgroundColor: a.BackgroundColor.primaryDefault,
                            size: i.AvatarIconSize.Md,
                            className: "select-action-modal-item__avatar"
                          })
                        ),
                        r.default.createElement(
                          i.Box,
                          { display: a.Display.Flex, flexDirection: a.FlexDirection.Column },
                          r.default.createElement(
                            i.Box,
                            { display: a.Display.Flex, flexDirection: a.FlexDirection.Row, gap: 2, alignItems: a.AlignItems.center },
                            r.default.createElement(i.Text, { variant: a.TextVariant.bodyLgMedium, textAlign: a.TextAlign.Left }, n),
                            o &&
                              r.default.createElement(i.Icon, {
                                name: i.IconName.Export,
                                size: i.IconSize.Xs,
                                color: a.IconColor.iconAlternative
                              })
                          ),
                          r.default.createElement(i.Text, { variant: a.TextVariant.bodyMd, textAlign: a.TextAlign.Left }, l)
                        )
                      );
                (o.SelectActionModalItem = u),
                  (u.propTypes = {
                    showIcon: n.default.bool,
                    onClick: n.default.func.isRequired,
                    actionIcon: n.default.string.isRequired,
                    primaryText: n.default.string.isRequired,
                    secondaryText: n.default.string.isRequired,
                    disabled: n.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal-item/select-action-modal-item.js" }
    ],
    [
      5362,
      { "./select-action-modal": 5363 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "SelectActionModal", {
                    enumerable: !0,
                    get: function () {
                      return r.SelectActionModal;
                    }
                  });
                var r = e("./select-action-modal");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal/index.js" }
    ],
    [
      5363,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../../shared/constants/transaction": 4770,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/send": 5531,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/hardware": 5564,
        "../../../helpers/utils/portfolio": 5573,
        "../../../hooks/experiences/useRamps": 5581,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../select-action-modal-item": 5360,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.SelectActionModal = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = k(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = C(e("prop-types")),
                  a = e("react-redux"),
                  i = e("react-router-dom"),
                  l = e("../../component-library"),
                  s = e("../select-action-modal-item"),
                  u = C(e("../../../hooks/experiences/useRamps")),
                  c = e("../../../helpers/utils/portfolio"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../helpers/constants/routes"),
                  g = e("../../../ducks/send"),
                  h = e("../../../contexts/i18n"),
                  b = e("../../../../shared/constants/transaction"),
                  v = e("../../../ducks/swaps/swaps"),
                  y = e("../../../helpers/utils/hardware"),
                  T = e("../../../../shared/constants/network");
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (k = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const M = ({ onClose: e }) => {
                  const t = (0, a.useDispatch)(),
                    o = (0, r.useContext)(h.I18nContext),
                    n = (0, r.useContext)(d.MetaMetricsContext),
                    C = (0, i.useHistory)(),
                    k = (0, a.useSelector)(f.getCurrentChainId),
                    M = (0, a.useSelector)(f.getIsSwapsChain),
                    S = (0, i.useLocation)(),
                    { openBuyCryptoInPdapp: A } = (0, u.default)(),
                    O = (0, a.useSelector)(f.getSwapsDefaultToken),
                    E = (0, a.useSelector)(f.getCurrentKeyring),
                    P = (0, y.isHardwareKeyring)(null == E ? void 0 : E.type),
                    _ = (0, a.useSelector)(f.getIsBridgeChain),
                    w = (0, a.useSelector)(f.getMetaMetricsId),
                    B = (0, a.useSelector)(f.getIsBuyableChain);
                  return r.default.createElement(
                    l.Modal,
                    { isOpen: !0, onClose: e, className: "select-action-modal", "data-testid": "select-action-modal" },
                    r.default.createElement(l.ModalOverlay, null),
                    r.default.createElement(
                      l.ModalContent,
                      { modalDialogProps: { paddingLeft: 0, paddingRight: 0 } },
                      r.default.createElement(l.ModalHeader, { onClose: e, paddingRight: 4 }, o("selectAnAction")),
                      r.default.createElement(
                        l.Box,
                        { className: "select-action-modal__container", marginTop: 6 },
                        r.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.PlusMinus,
                          showIcon: !0,
                          primaryText: o("buyAndSell"),
                          secondaryText: o("buyAndSellDescription"),
                          disabled: !B,
                          tooltipTitle: o("buyAndSellDisabled"),
                          onClick: () => {
                            A(),
                              n({
                                event: p.MetaMetricsEventName.NavBuyButtonClicked,
                                category: p.MetaMetricsEventCategory.Navigation,
                                properties: { location: "Home", text: "Buy", chain_id: k, token_symbol: O }
                              }),
                              e();
                          }
                        }),
                        r.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.SwapHorizontal,
                          primaryText: o("swap"),
                          secondaryText: o("swapDescription"),
                          disabled: !M,
                          tooltipTitle: o("swapDisabled"),
                          onClick: () => {
                            M &&
                              (n({
                                event: p.MetaMetricsEventName.NavSwapButtonClicked,
                                category: p.MetaMetricsEventCategory.Swaps,
                                properties: {
                                  token_symbol: T.CURRENCY_SYMBOLS.ETH,
                                  location: p.MetaMetricsSwapsEventSource.MainView,
                                  text: "Swap",
                                  chain_id: k
                                }
                              }),
                              t((0, v.setSwapsFromToken)(O)),
                              P ? global.platform.openExtensionInBrowser(m.BUILD_QUOTE_ROUTE) : C.push(m.BUILD_QUOTE_ROUTE)),
                              e();
                          },
                          "data-testid": "select-action-modal-item-swap"
                        }),
                        r.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.Arrow2UpRight,
                          primaryText: o("send"),
                          secondaryText: o("sendDescription"),
                          onClick: async () => {
                            n({
                              event: p.MetaMetricsEventName.NavSendButtonClicked,
                              category: p.MetaMetricsEventCategory.Navigation,
                              properties: { token_symbol: T.CURRENCY_SYMBOLS.ETH, location: "Home", text: "Send", chain_id: k }
                            }),
                              await t((0, g.startNewDraftTransaction)({ type: b.AssetType.native })),
                              C.push(m.SEND_ROUTE),
                              e();
                          },
                          "data-testid": "select-action-modal-item-send"
                        }),
                        r.default.createElement(s.SelectActionModalItem, {
                          actionIcon: l.IconName.Arrow2UpRight,
                          showIcon: !0,
                          primaryText: o("bridge"),
                          secondaryText: o("bridgeDescription"),
                          disabled: !_,
                          tooltipTitle: o("bridgeDisabled"),
                          onClick: () => {
                            if (_) {
                              const e = (0, c.getPortfolioUrl)("bridge", "ext_bridge_button", w);
                              global.platform.openTab({ url: `${e}${S.pathname.includes("asset") ? "&token=native" : ""}` }),
                                n({
                                  category: p.MetaMetricsEventCategory.Navigation,
                                  event: p.MetaMetricsEventName.BridgeLinkClicked,
                                  properties: { location: "Home", text: "Bridge", chain_id: k, token_symbol: T.CURRENCY_SYMBOLS.ETH }
                                });
                            }
                            e();
                          }
                        })
                      )
                    )
                  );
                };
                (o.SelectActionModal = M), (M.propTypes = { onClose: n.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/select-action-modal/select-action-modal.js" }
    ],
    [
      5364,
      { "./token-list-item": 5365 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "TokenListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.TokenListItem;
                    }
                  });
                var r = e("./token-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/token-list-item/index.js" }
    ],
    [
      5365,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/tooltip": 5502,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.TokenListItem = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = h(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = g(e("prop-types")),
                  a = e("react-redux"),
                  i = g(e("classnames")),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library"),
                  u = e("../../../selectors"),
                  c = g(e("../../ui/tooltip")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../../shared/constants/network");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (h = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const b = ({ className: e, onClick: t, tokenSymbol: o, tokenImage: n, primary: g, secondary: h, title: b }) => {
                  var v;
                  const y = (0, d.useI18nContext)(),
                    T = (0, a.useSelector)(u.getNativeCurrencyImage),
                    C = (0, r.useContext)(p.MetaMetricsContext),
                    k = (0, a.useSelector)(u.getCurrentChainId),
                    M = b === m.CURRENCY_SYMBOLS.ETH ? y("networkNameEthereum") : b,
                    S = (0, a.useSelector)(u.getCurrentNetwork),
                    A = (0, a.useSelector)(u.getTestNetworkBackgroundColor);
                  return r.default.createElement(
                    s.Box,
                    {
                      className: (0, i.default)("multichain-token-list-item", e),
                      display: l.Display.Flex,
                      flexDirection: l.FlexDirection.Column,
                      gap: 4,
                      "data-testid": "multichain-token-list-item"
                    },
                    r.default.createElement(
                      s.Box,
                      {
                        className: "multichain-token-list-item__container-cell",
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Row,
                        padding: 4,
                        as: "a",
                        "data-testid": "multichain-token-list-button",
                        href: "#",
                        onClick: (e) => {
                          e.preventDefault(),
                            t(),
                            C({
                              category: f.MetaMetricsEventCategory.Tokens,
                              event: f.MetaMetricsEventName.TokenDetailsOpened,
                              properties: { location: "Home", chain_id: k, token_symbol: o }
                            });
                        }
                      },
                      r.default.createElement(
                        s.BadgeWrapper,
                        {
                          badge: r.default.createElement(s.AvatarNetwork, {
                            size: s.AvatarNetworkSize.Xs,
                            name: null == S ? void 0 : S.nickname,
                            src: null == S || null === (v = S.rpcPrefs) || void 0 === v ? void 0 : v.imageUrl,
                            backgroundColor: A,
                            borderColor: T ? l.BorderColor.borderMuted : l.BorderColor.borderDefault
                          }),
                          marginRight: 3
                        },
                        r.default.createElement(s.AvatarToken, {
                          name: o,
                          src: n,
                          showHalo: !0,
                          borderColor: n ? l.BorderColor.transparent : l.BorderColor.borderDefault
                        })
                      ),
                      r.default.createElement(
                        s.Box,
                        {
                          className: "multichain-token-list-item__container-cell--text-container",
                          display: l.Display.Flex,
                          flexDirection: l.FlexDirection.Column,
                          width: l.BlockSize.Full,
                          style: { flexGrow: 1, overflow: "hidden" }
                        },
                        r.default.createElement(
                          s.Box,
                          { display: l.Display.Flex, justifyContent: l.JustifyContent.spaceBetween, gap: 1 },
                          r.default.createElement(
                            s.Box,
                            { width: l.BlockSize.OneThird },
                            (null == b ? void 0 : b.length) > 12
                              ? r.default.createElement(
                                  c.default,
                                  {
                                    position: "bottom",
                                    interactive: !0,
                                    html: b,
                                    tooltipInnerClassName: "multichain-token-list-item__tooltip"
                                  },
                                  r.default.createElement(
                                    s.Text,
                                    { fontWeight: l.FontWeight.Medium, variant: l.TextVariant.bodyMd, ellipsis: !0 },
                                    M
                                  )
                                )
                              : r.default.createElement(
                                  s.Text,
                                  { fontWeight: l.FontWeight.Medium, variant: l.TextVariant.bodyMd, ellipsis: !0 },
                                  M
                                )
                          ),
                          r.default.createElement(
                            s.Text,
                            {
                              fontWeight: l.FontWeight.Medium,
                              variant: l.TextVariant.bodyMd,
                              width: l.BlockSize.TwoThirds,
                              textAlign: l.TextAlign.End,
                              "data-testid": "multichain-token-list-item-secondary-value"
                            },
                            h
                          )
                        ),
                        r.default.createElement(
                          s.Text,
                          { color: l.TextColor.textAlternative, "data-testid": "multichain-token-list-item-value" },
                          g,
                          " ",
                          o,
                          " "
                        )
                      )
                    )
                  );
                };
                (o.TokenListItem = b),
                  (b.propTypes = {
                    className: n.default.string,
                    onClick: n.default.func,
                    tokenSymbol: n.default.string,
                    title: n.default.string,
                    tokenImage: n.default.string,
                    primary: n.default.string,
                    secondary: n.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/token-list-item/token-list-item.js" }
    ],
    [
      5366,
      {
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../app/user-preferenced-currency-display": 5167,
        "../../component-library": 5242,
        "../check-box": 5383,
        "../identicon": 5430,
        "../tooltip": 5502,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = b(e("react")),
                  n = g(e("prop-types")),
                  a = g(e("classnames")),
                  i = e("lodash"),
                  l = e("../../../hooks/useI18nContext"),
                  s = b(e("../check-box")),
                  u = g(e("../identicon")),
                  c = g(e("../../app/user-preferenced-currency-display")),
                  d = e("../../../helpers/constants/common"),
                  p = g(e("../tooltip")),
                  f = e("../../component-library"),
                  m = e("../../../helpers/constants/design-system");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (h = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function b(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var o = h(t);
                  if (o && o.has(e)) return o.get(e);
                  var r = { __proto__: null },
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                      var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                      i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                    }
                  return (r.default = e), o && o.set(e, r), r;
                }
                const v = ({
                  selectNewAccountViaModal: e,
                  accounts: t,
                  addressLastConnectedMap: o,
                  selectedAccounts: n,
                  nativeCurrency: i,
                  allAreSelected: g,
                  deselectAll: h,
                  selectAll: b,
                  handleAccountClick: v
                }) => {
                  const y = (0, l.useI18nContext)(),
                    T = (0, r.useRef)(null);
                  (0, r.useLayoutEffect)(() => {
                    var e;
                    null === (e = T.current) || void 0 === e || e.scrollIntoView({ behavior: "smooth" });
                  }, [n]);
                  const C = () => {
                      let o;
                      return (
                        (o = g() ? s.CHECKED : 0 === n.size ? s.UNCHECKED : s.INDETERMINATE),
                        r.default.createElement(
                          "div",
                          {
                            className: (0, a.default)({
                              "choose-account-list__header--one-item": 1 === t.length,
                              "choose-account-list__header--multiple-items": t.length > 1
                            })
                          },
                          t.length > 1
                            ? r.default.createElement(
                                "div",
                                { className: "choose-account-list__select-all" },
                                r.default.createElement(s.default, {
                                  className: "choose-account-list__header-check-box",
                                  checked: o,
                                  onClick: () => (g() ? h() : b())
                                }),
                                r.default.createElement("div", { className: "choose-account-list__text-grey" }, y("selectAll")),
                                r.default.createElement(
                                  p.default,
                                  {
                                    position: "bottom",
                                    html: r.default.createElement("div", { style: { width: 200, padding: 4 } }, y("selectingAllWillAllow"))
                                  },
                                  r.default.createElement(f.Icon, {
                                    name: f.IconName.Info,
                                    color: m.IconColor.iconMuted,
                                    className: "info-circle",
                                    marginInlineStart: 2
                                  })
                                )
                              )
                            : null,
                          r.default.createElement(
                            "div",
                            { className: "choose-account-list__text-blue", onClick: () => e(v) },
                            y("newAccount")
                          )
                        )
                      );
                    },
                    k = () =>
                      r.default.createElement(
                        "div",
                        { className: "choose-account-list__wrapper" },
                        r.default.createElement(
                          "div",
                          { className: "choose-account-list__list" },
                          t.map((e, t) => {
                            const { address: a, addressLabel: l, balance: g } = e,
                              h = n.has(a);
                            return r.default.createElement(
                              "div",
                              {
                                key: `choose-account-list-${t}`,
                                onClick: () => v(a),
                                className: "choose-account-list__account",
                                ref: h ? T : null
                              },
                              r.default.createElement(
                                "div",
                                { className: "choose-account-list__account-info-wrapper" },
                                r.default.createElement(s.default, { className: "choose-account-list__list-check-box", checked: h }),
                                r.default.createElement(u.default, { diameter: 34, address: a }),
                                r.default.createElement(
                                  "div",
                                  { className: "choose-account-list__account__info" },
                                  r.default.createElement("div", { className: "choose-account-list__account__label" }, l),
                                  r.default.createElement(c.default, {
                                    className: "choose-account-list__account__balance",
                                    type: d.PRIMARY,
                                    value: g,
                                    style: { color: "var(--color-text-alternative)" },
                                    suffix: i
                                  })
                                )
                              ),
                              o[a]
                                ? r.default.createElement(
                                    p.default,
                                    { title: `${y("lastConnected")} ${o[a]}` },
                                    r.default.createElement(f.Icon, {
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
                  return r.default.createElement(
                    "div",
                    { className: "choose-account-list" },
                    r.default.createElement(C, null),
                    r.default.createElement(k, null)
                  );
                };
                v.propTypes = {
                  accounts: n.default.arrayOf(
                    n.default.shape({
                      address: n.default.string,
                      addressLabel: n.default.string,
                      lastConnectedDate: n.default.string,
                      balance: n.default.string
                    })
                  ).isRequired,
                  selectNewAccountViaModal: n.default.func.isRequired,
                  addressLastConnectedMap: n.default.object,
                  nativeCurrency: n.default.string.isRequired,
                  selectedAccounts: n.default.object.isRequired,
                  allAreSelected: n.default.func.isRequired,
                  deselectAll: n.default.func.isRequired,
                  selectAll: n.default.func.isRequired,
                  handleAccountClick: n.default.func.isRequired
                };
                o.default = (0, r.memo)(v, (e, t) => (0, i.isEqual)(e.selectedAccounts, t.selectedAccounts));
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/account-list/account-list.js" }
    ],
    [
      5367,
      { "./account-list": 5366 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./account-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/account-list/index.js" }
    ],
    [
      5368,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../icon/info-icon.component": 5422,
        "../tooltip": 5502,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = d(e("react")),
                  n = e("react-redux"),
                  a = d(e("prop-types")),
                  i = d(e("../tooltip")),
                  l = e("../../../selectors"),
                  s = d(e("../icon/info-icon.component")),
                  u = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ address: e }) {
                  const t = (0, n.useSelector)(l.getSelectedAccount),
                    o = (0, u.useI18nContext)();
                  return t.address === e
                    ? null
                    : r.default.createElement(
                        i.default,
                        {
                          position: "bottom",
                          html: r.default.createElement("p", null, o("notCurrentAccount")),
                          wrapperClassName: "account-mismatch-warning__tooltip-wrapper",
                          containerClassName: "account-mismatch-warning__tooltip-container"
                        },
                        r.default.createElement(
                          "div",
                          {
                            className: "account-mismatch-warning__tooltip-container-icon",
                            "data-testid": "account-mismatch-warning-tooltip"
                          },
                          r.default.createElement(s.default, { severity: c.Severity.Warning })
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
      5369,
      { "../info-tooltip": 5431, "../info-tooltip/info-tooltip-icon": 5432, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p), (o.typeHash = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../info-tooltip")),
                  l = s(e("../info-tooltip/info-tooltip-icon"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const c = "actionable-message--with-right-button",
                  d = (o.typeHash = {
                    warning: "actionable-message--warning",
                    danger: "actionable-message--danger",
                    success: "actionable-message--success",
                    default: ""
                  });
                function p({
                  message: e = "",
                  primaryAction: t = null,
                  primaryActionV2: o = null,
                  secondaryAction: n = null,
                  className: s = "",
                  infoTooltipText: u = "",
                  withRightButton: p = !1,
                  type: f = "default",
                  useIcon: m = !1,
                  icon: g,
                  iconFillColor: h = "",
                  roundedButtons: b,
                  dataTestId: v,
                  autoHideTime: y = 0,
                  onAutoHide: T
                }) {
                  const [C, k] = (0, r.useState)(!0);
                  (0, r.useEffect)(
                    function () {
                      if (0 === y) return undefined;
                      const e = setTimeout(() => {
                        null == T || T(), k(!1);
                      }, y);
                      return function () {
                        clearTimeout(e);
                      };
                    },
                    [y, T]
                  );
                  const M = (0, a.default)("actionable-message", d[f], p ? c : null, s, { "actionable-message--with-icon": m }),
                    S = (t && !n) || (n && !t);
                  return C
                    ? r.default.createElement(
                        "div",
                        { className: M, "data-testid": v },
                        m ? g || r.default.createElement(l.default, { fillColor: h }) : null,
                        u &&
                          r.default.createElement(i.default, {
                            position: "left",
                            contentText: u,
                            wrapperClassName: "actionable-message__info-tooltip-wrapper"
                          }),
                        r.default.createElement("div", { className: "actionable-message__message" }, e),
                        o && r.default.createElement("button", { className: "actionable-message__action-v2", onClick: o.onClick }, o.label),
                        (t || n) &&
                          r.default.createElement(
                            "div",
                            { className: (0, a.default)("actionable-message__actions", { "actionable-message__actions--single": S }) },
                            t &&
                              r.default.createElement(
                                "button",
                                {
                                  className: (0, a.default)(
                                    "actionable-message__action",
                                    "actionable-message__action--primary",
                                    `actionable-message__action-${f}`,
                                    { "actionable-message__action--rounded": b }
                                  ),
                                  onClick: t.onClick
                                },
                                t.label
                              ),
                            n &&
                              r.default.createElement(
                                "button",
                                {
                                  className: (0, a.default)(
                                    "actionable-message__action",
                                    "actionable-message__action--secondary",
                                    `actionable-message__action-${f}`,
                                    { "actionable-message__action--rounded": b }
                                  ),
                                  onClick: n.onClick
                                },
                                n.label
                              )
                          )
                      )
                    : null;
                }
                p.propTypes = {
                  message: n.default.node.isRequired,
                  primaryAction: n.default.shape({ label: n.default.string, onClick: n.default.func }),
                  primaryActionV2: n.default.shape({ label: n.default.string, onClick: n.default.func }),
                  secondaryAction: n.default.shape({ label: n.default.string, onClick: n.default.func }),
                  className: n.default.string,
                  type: n.default.oneOf(Object.keys(d)),
                  withRightButton: n.default.bool,
                  infoTooltipText: n.default.string,
                  useIcon: n.default.bool,
                  icon: n.default.node,
                  iconFillColor: n.default.string,
                  roundedButtons: n.default.bool,
                  dataTestId: n.default.string,
                  autoHideTime: n.default.number,
                  onAutoHide: n.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/actionable-message/actionable-message.js" }
    ],
    [
      537,
      { "./wordlist": 542, "@ethersproject/strings": 521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langFr = void 0);
                var a = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  l = null,
                  s = {};
                function u(e) {
                  return (
                    i.logger.checkNormalize(),
                    (0, a.toUtf8String)(
                      Array.prototype.filter.call((0, a.toUtf8Bytes)(e.normalize("NFD").toLowerCase()), function (e) {
                        return (e >= 65 && e <= 90) || (e >= 97 && e <= 123);
                      })
                    )
                  );
                }
                function c(e) {
                  if (
                    null == l &&
                    ((l =
                      "AbaisserAbandonAbdiquerAbeilleAbolirAborderAboutirAboyerAbrasifAbreuverAbriterAbrogerAbruptAbsenceAbsoluAbsurdeAbusifAbyssalAcade/mieAcajouAcarienAccablerAccepterAcclamerAccoladeAccrocheAccuserAcerbeAchatAcheterAcidulerAcierAcompteAcque/rirAcronymeActeurActifActuelAdepteAde/quatAdhe/sifAdjectifAdjugerAdmettreAdmirerAdopterAdorerAdoucirAdresseAdroitAdulteAdverbeAe/rerAe/ronefAffaireAffecterAfficheAffreuxAffublerAgacerAgencerAgileAgiterAgraferAgre/ableAgrumeAiderAiguilleAilierAimableAisanceAjouterAjusterAlarmerAlchimieAlerteAlge-breAlgueAlie/nerAlimentAlle/gerAlliageAllouerAllumerAlourdirAlpagaAltesseAlve/oleAmateurAmbiguAmbreAme/nagerAmertumeAmidonAmiralAmorcerAmourAmovibleAmphibieAmpleurAmusantAnalyseAnaphoreAnarchieAnatomieAncienAne/antirAngleAngoisseAnguleuxAnimalAnnexerAnnonceAnnuelAnodinAnomalieAnonymeAnormalAntenneAntidoteAnxieuxApaiserApe/ritifAplanirApologieAppareilAppelerApporterAppuyerAquariumAqueducArbitreArbusteArdeurArdoiseArgentArlequinArmatureArmementArmoireArmureArpenterArracherArriverArroserArsenicArte/rielArticleAspectAsphalteAspirerAssautAsservirAssietteAssocierAssurerAsticotAstreAstuceAtelierAtomeAtriumAtroceAttaqueAttentifAttirerAttraperAubaineAubergeAudaceAudibleAugurerAuroreAutomneAutrucheAvalerAvancerAvariceAvenirAverseAveugleAviateurAvideAvionAviserAvoineAvouerAvrilAxialAxiomeBadgeBafouerBagageBaguetteBaignadeBalancerBalconBaleineBalisageBambinBancaireBandageBanlieueBannie-reBanquierBarbierBarilBaronBarqueBarrageBassinBastionBatailleBateauBatterieBaudrierBavarderBeletteBe/lierBeloteBe/ne/ficeBerceauBergerBerlineBermudaBesaceBesogneBe/tailBeurreBiberonBicycleBiduleBijouBilanBilingueBillardBinaireBiologieBiopsieBiotypeBiscuitBisonBistouriBitumeBizarreBlafardBlagueBlanchirBlessantBlinderBlondBloquerBlousonBobardBobineBoireBoiserBolideBonbonBondirBonheurBonifierBonusBordureBorneBotteBoucleBoueuxBougieBoulonBouquinBourseBoussoleBoutiqueBoxeurBrancheBrasierBraveBrebisBre-cheBreuvageBricolerBrigadeBrillantBriocheBriqueBrochureBroderBronzerBrousseBroyeurBrumeBrusqueBrutalBruyantBuffleBuissonBulletinBureauBurinBustierButinerButoirBuvableBuvetteCabanonCabineCachetteCadeauCadreCafe/ineCaillouCaissonCalculerCalepinCalibreCalmerCalomnieCalvaireCamaradeCame/raCamionCampagneCanalCanetonCanonCantineCanularCapableCaporalCapriceCapsuleCapterCapucheCarabineCarboneCaresserCaribouCarnageCarotteCarreauCartonCascadeCasierCasqueCassureCauserCautionCavalierCaverneCaviarCe/dilleCeintureCe/lesteCelluleCendrierCensurerCentralCercleCe/re/bralCeriseCernerCerveauCesserChagrinChaiseChaleurChambreChanceChapitreCharbonChasseurChatonChaussonChavirerChemiseChenilleChe/quierChercherChevalChienChiffreChignonChime-reChiotChlorureChocolatChoisirChoseChouetteChromeChuteCigareCigogneCimenterCine/maCintrerCirculerCirerCirqueCiterneCitoyenCitronCivilClaironClameurClaquerClasseClavierClientClignerClimatClivageClocheClonageCloporteCobaltCobraCocasseCocotierCoderCodifierCoffreCognerCohe/sionCoifferCoincerCole-reColibriCollineColmaterColonelCombatCome/dieCommandeCompactConcertConduireConfierCongelerConnoterConsonneContactConvexeCopainCopieCorailCorbeauCordageCornicheCorpusCorrectCorte-geCosmiqueCostumeCotonCoudeCoupureCourageCouteauCouvrirCoyoteCrabeCrainteCravateCrayonCre/atureCre/diterCre/meuxCreuserCrevetteCriblerCrierCristalCrite-reCroireCroquerCrotaleCrucialCruelCrypterCubiqueCueillirCuille-reCuisineCuivreCulminerCultiverCumulerCupideCuratifCurseurCyanureCycleCylindreCyniqueDaignerDamierDangerDanseurDauphinDe/battreDe/biterDe/borderDe/briderDe/butantDe/calerDe/cembreDe/chirerDe/ciderDe/clarerDe/corerDe/crireDe/cuplerDe/daleDe/ductifDe/esseDe/fensifDe/filerDe/frayerDe/gagerDe/givrerDe/glutirDe/graferDe/jeunerDe/liceDe/logerDemanderDemeurerDe/molirDe/nicherDe/nouerDentelleDe/nuderDe/partDe/penserDe/phaserDe/placerDe/poserDe/rangerDe/roberDe/sastreDescenteDe/sertDe/signerDe/sobe/irDessinerDestrierDe/tacherDe/testerDe/tourerDe/tresseDevancerDevenirDevinerDevoirDiableDialogueDiamantDicterDiffe/rerDige/rerDigitalDigneDiluerDimancheDiminuerDioxydeDirectifDirigerDiscuterDisposerDissiperDistanceDivertirDiviserDocileDocteurDogmeDoigtDomaineDomicileDompterDonateurDonjonDonnerDopamineDortoirDorureDosageDoseurDossierDotationDouanierDoubleDouceurDouterDoyenDragonDraperDresserDribblerDroitureDuperieDuplexeDurableDurcirDynastieE/blouirE/carterE/charpeE/chelleE/clairerE/clipseE/cloreE/cluseE/coleE/conomieE/corceE/couterE/craserE/cre/merE/crivainE/crouE/cumeE/cureuilE/difierE/duquerEffacerEffectifEffigieEffortEffrayerEffusionE/galiserE/garerE/jecterE/laborerE/largirE/lectronE/le/gantE/le/phantE/le-veE/ligibleE/litismeE/logeE/luciderE/luderEmballerEmbellirEmbryonE/meraudeE/missionEmmenerE/motionE/mouvoirEmpereurEmployerEmporterEmpriseE/mulsionEncadrerEnche-reEnclaveEncocheEndiguerEndosserEndroitEnduireE/nergieEnfanceEnfermerEnfouirEngagerEnginEngloberE/nigmeEnjamberEnjeuEnleverEnnemiEnnuyeuxEnrichirEnrobageEnseigneEntasserEntendreEntierEntourerEntraverE/nume/rerEnvahirEnviableEnvoyerEnzymeE/olienE/paissirE/pargneE/patantE/pauleE/picerieE/pide/mieE/pierE/pilogueE/pineE/pisodeE/pitapheE/poqueE/preuveE/prouverE/puisantE/querreE/quipeE/rigerE/rosionErreurE/ruptionEscalierEspadonEspe-ceEspie-gleEspoirEspritEsquiverEssayerEssenceEssieuEssorerEstimeEstomacEstradeE/tage-reE/talerE/tancheE/tatiqueE/teindreE/tendoirE/ternelE/thanolE/thiqueEthnieE/tirerE/tofferE/toileE/tonnantE/tourdirE/trangeE/troitE/tudeEuphorieE/valuerE/vasionE/ventailE/videnceE/viterE/volutifE/voquerExactExage/rerExaucerExcellerExcitantExclusifExcuseExe/cuterExempleExercerExhalerExhorterExigenceExilerExisterExotiqueExpe/dierExplorerExposerExprimerExquisExtensifExtraireExulterFableFabuleuxFacetteFacileFactureFaiblirFalaiseFameuxFamilleFarceurFarfeluFarineFaroucheFascinerFatalFatigueFauconFautifFaveurFavoriFe/brileFe/conderFe/de/rerFe/linFemmeFe/murFendoirFe/odalFermerFe/roceFerveurFestivalFeuilleFeutreFe/vrierFiascoFicelerFictifFide-leFigureFilatureFiletageFilie-reFilleulFilmerFilouFiltrerFinancerFinirFioleFirmeFissureFixerFlairerFlammeFlasqueFlatteurFle/auFle-cheFleurFlexionFloconFloreFluctuerFluideFluvialFolieFonderieFongibleFontaineForcerForgeronFormulerFortuneFossileFoudreFouge-reFouillerFoulureFourmiFragileFraiseFranchirFrapperFrayeurFre/gateFreinerFrelonFre/mirFre/ne/sieFre-reFriableFrictionFrissonFrivoleFroidFromageFrontalFrotterFruitFugitifFuiteFureurFurieuxFurtifFusionFuturGagnerGalaxieGalerieGambaderGarantirGardienGarnirGarrigueGazelleGazonGe/antGe/latineGe/luleGendarmeGe/ne/ralGe/nieGenouGentilGe/ologieGe/ome-treGe/raniumGermeGestuelGeyserGibierGiclerGirafeGivreGlaceGlaiveGlisserGlobeGloireGlorieuxGolfeurGommeGonflerGorgeGorilleGoudronGouffreGoulotGoupilleGourmandGoutteGraduelGraffitiGraineGrandGrappinGratuitGravirGrenatGriffureGrillerGrimperGrognerGronderGrotteGroupeGrugerGrutierGruye-reGue/pardGuerrierGuideGuimauveGuitareGustatifGymnasteGyrostatHabitudeHachoirHalteHameauHangarHannetonHaricotHarmonieHarponHasardHe/liumHe/matomeHerbeHe/rissonHermineHe/ronHe/siterHeureuxHibernerHibouHilarantHistoireHiverHomardHommageHomoge-neHonneurHonorerHonteuxHordeHorizonHorlogeHormoneHorribleHouleuxHousseHublotHuileuxHumainHumbleHumideHumourHurlerHydromelHygie-neHymneHypnoseIdylleIgnorerIguaneIlliciteIllusionImageImbiberImiterImmenseImmobileImmuableImpactImpe/rialImplorerImposerImprimerImputerIncarnerIncendieIncidentInclinerIncoloreIndexerIndiceInductifIne/ditIneptieInexactInfiniInfligerInformerInfusionInge/rerInhalerInhiberInjecterInjureInnocentInoculerInonderInscrireInsecteInsigneInsoliteInspirerInstinctInsulterIntactIntenseIntimeIntrigueIntuitifInutileInvasionInventerInviterInvoquerIroniqueIrradierIrre/elIrriterIsolerIvoireIvresseJaguarJaillirJambeJanvierJardinJaugerJauneJavelotJetableJetonJeudiJeunesseJoindreJoncherJonglerJoueurJouissifJournalJovialJoyauJoyeuxJubilerJugementJuniorJuponJuristeJusticeJuteuxJuve/nileKayakKimonoKiosqueLabelLabialLabourerLace/rerLactoseLaguneLaineLaisserLaitierLambeauLamelleLampeLanceurLangageLanterneLapinLargeurLarmeLaurierLavaboLavoirLectureLe/galLe/gerLe/gumeLessiveLettreLevierLexiqueLe/zardLiasseLibe/rerLibreLicenceLicorneLie-geLie-vreLigatureLigoterLigueLimerLimiteLimonadeLimpideLine/aireLingotLionceauLiquideLisie-reListerLithiumLitigeLittoralLivreurLogiqueLointainLoisirLombricLoterieLouerLourdLoutreLouveLoyalLubieLucideLucratifLueurLugubreLuisantLumie-reLunaireLundiLuronLutterLuxueuxMachineMagasinMagentaMagiqueMaigreMaillonMaintienMairieMaisonMajorerMalaxerMale/ficeMalheurMaliceMalletteMammouthMandaterManiableManquantManteauManuelMarathonMarbreMarchandMardiMaritimeMarqueurMarronMartelerMascotteMassifMate/rielMatie-reMatraqueMaudireMaussadeMauveMaximalMe/chantMe/connuMe/dailleMe/decinMe/diterMe/duseMeilleurMe/langeMe/lodieMembreMe/moireMenacerMenerMenhirMensongeMentorMercrediMe/riteMerleMessagerMesureMe/talMe/te/oreMe/thodeMe/tierMeubleMiaulerMicrobeMietteMignonMigrerMilieuMillionMimiqueMinceMine/ralMinimalMinorerMinuteMiracleMiroiterMissileMixteMobileModerneMoelleuxMondialMoniteurMonnaieMonotoneMonstreMontagneMonumentMoqueurMorceauMorsureMortierMoteurMotifMoucheMoufleMoulinMoussonMoutonMouvantMultipleMunitionMurailleMure-neMurmureMuscleMuse/umMusicienMutationMuterMutuelMyriadeMyrtilleMyste-reMythiqueNageurNappeNarquoisNarrerNatationNationNatureNaufrageNautiqueNavireNe/buleuxNectarNe/fasteNe/gationNe/gligerNe/gocierNeigeNerveuxNettoyerNeuroneNeutronNeveuNicheNickelNitrateNiveauNobleNocifNocturneNoirceurNoisetteNomadeNombreuxNommerNormatifNotableNotifierNotoireNourrirNouveauNovateurNovembreNoviceNuageNuancerNuireNuisibleNume/roNuptialNuqueNutritifObe/irObjectifObligerObscurObserverObstacleObtenirObturerOccasionOccuperOce/anOctobreOctroyerOctuplerOculaireOdeurOdorantOffenserOfficierOffrirOgiveOiseauOisillonOlfactifOlivierOmbrageOmettreOnctueuxOndulerOne/reuxOniriqueOpaleOpaqueOpe/rerOpinionOpportunOpprimerOpterOptiqueOrageuxOrangeOrbiteOrdonnerOreilleOrganeOrgueilOrificeOrnementOrqueOrtieOscillerOsmoseOssatureOtarieOuraganOursonOutilOutragerOuvrageOvationOxydeOxyge-neOzonePaisiblePalacePalmare-sPalourdePalperPanachePandaPangolinPaniquerPanneauPanoramaPantalonPapayePapierPapoterPapyrusParadoxeParcelleParesseParfumerParlerParoleParrainParsemerPartagerParureParvenirPassionPaste-quePaternelPatiencePatronPavillonPavoiserPayerPaysagePeignePeintrePelagePe/licanPellePelousePeluchePendulePe/ne/trerPe/niblePensifPe/nuriePe/pitePe/plumPerdrixPerforerPe/riodePermuterPerplexePersilPertePeserPe/talePetitPe/trirPeuplePharaonPhobiePhoquePhotonPhrasePhysiquePianoPicturalPie-cePierrePieuvrePilotePinceauPipettePiquerPiroguePiscinePistonPivoterPixelPizzaPlacardPlafondPlaisirPlanerPlaquePlastronPlateauPleurerPlexusPliagePlombPlongerPluiePlumagePochettePoe/siePoe-tePointePoirierPoissonPoivrePolairePolicierPollenPolygonePommadePompierPonctuelPonde/rerPoneyPortiquePositionPosse/derPosturePotagerPoteauPotionPoucePoulainPoumonPourprePoussinPouvoirPrairiePratiquePre/cieuxPre/direPre/fixePre/ludePre/nomPre/sencePre/textePre/voirPrimitifPrincePrisonPriverProble-meProce/derProdigeProfondProgre-sProieProjeterProloguePromenerPropreProspe-reProte/gerProuesseProverbePrudencePruneauPsychosePublicPuceronPuiserPulpePulsarPunaisePunitifPupitrePurifierPuzzlePyramideQuasarQuerelleQuestionQuie/tudeQuitterQuotientRacineRaconterRadieuxRagondinRaideurRaisinRalentirRallongeRamasserRapideRasageRatisserRavagerRavinRayonnerRe/actifRe/agirRe/aliserRe/animerRecevoirRe/citerRe/clamerRe/colterRecruterReculerRecyclerRe/digerRedouterRefaireRe/flexeRe/formerRefrainRefugeRe/galienRe/gionRe/glageRe/gulierRe/ite/rerRejeterRejouerRelatifReleverReliefRemarqueReme-deRemiseRemonterRemplirRemuerRenardRenfortReniflerRenoncerRentrerRenvoiReplierReporterRepriseReptileRequinRe/serveRe/sineuxRe/soudreRespectResterRe/sultatRe/tablirRetenirRe/ticuleRetomberRetracerRe/unionRe/ussirRevancheRevivreRe/volteRe/vulsifRichesseRideauRieurRigideRigolerRincerRiposterRisibleRisqueRituelRivalRivie-reRocheuxRomanceRompreRonceRondinRoseauRosierRotatifRotorRotuleRougeRouilleRouleauRoutineRoyaumeRubanRubisRucheRuelleRugueuxRuinerRuisseauRuserRustiqueRythmeSablerSaboterSabreSacocheSafariSagesseSaisirSaladeSaliveSalonSaluerSamediSanctionSanglierSarcasmeSardineSaturerSaugrenuSaumonSauterSauvageSavantSavonnerScalpelScandaleSce/le/ratSce/narioSceptreSche/maScienceScinderScoreScrutinSculpterSe/anceSe/cableSe/cherSecouerSe/cre/terSe/datifSe/duireSeigneurSe/jourSe/lectifSemaineSemblerSemenceSe/minalSe/nateurSensibleSentenceSe/parerSe/quenceSereinSergentSe/rieuxSerrureSe/rumServiceSe/sameSe/virSevrageSextupleSide/ralSie-cleSie/gerSifflerSigleSignalSilenceSiliciumSimpleSince-reSinistreSiphonSiropSismiqueSituerSkierSocialSocleSodiumSoigneuxSoldatSoleilSolitudeSolubleSombreSommeilSomnolerSondeSongeurSonnetteSonoreSorcierSortirSosieSottiseSoucieuxSoudureSouffleSouleverSoupapeSourceSoutirerSouvenirSpacieuxSpatialSpe/cialSphe-reSpiralStableStationSternumStimulusStipulerStrictStudieuxStupeurStylisteSublimeSubstratSubtilSubvenirSucce-sSucreSuffixeSugge/rerSuiveurSulfateSuperbeSupplierSurfaceSuricateSurmenerSurpriseSursautSurvieSuspectSyllabeSymboleSyme/trieSynapseSyntaxeSyste-meTabacTablierTactileTaillerTalentTalismanTalonnerTambourTamiserTangibleTapisTaquinerTarderTarifTartineTasseTatamiTatouageTaupeTaureauTaxerTe/moinTemporelTenailleTendreTeneurTenirTensionTerminerTerneTerribleTe/tineTexteThe-meThe/orieThe/rapieThoraxTibiaTie-deTimideTirelireTiroirTissuTitaneTitreTituberTobogganTole/rantTomateToniqueTonneauToponymeTorcheTordreTornadeTorpilleTorrentTorseTortueTotemToucherTournageTousserToxineTractionTraficTragiqueTrahirTrainTrancherTravailTre-fleTremperTre/sorTreuilTriageTribunalTricoterTrilogieTriompheTriplerTriturerTrivialTromboneTroncTropicalTroupeauTuileTulipeTumulteTunnelTurbineTuteurTutoyerTuyauTympanTyphonTypiqueTyranUbuesqueUltimeUltrasonUnanimeUnifierUnionUniqueUnitaireUniversUraniumUrbainUrticantUsageUsineUsuelUsureUtileUtopieVacarmeVaccinVagabondVagueVaillantVaincreVaisseauValableValiseVallonValveVampireVanilleVapeurVarierVaseuxVassalVasteVecteurVedetteVe/ge/talVe/hiculeVeinardVe/loceVendrediVe/ne/rerVengerVenimeuxVentouseVerdureVe/rinVernirVerrouVerserVertuVestonVe/te/ranVe/tusteVexantVexerViaducViandeVictoireVidangeVide/oVignetteVigueurVilainVillageVinaigreViolonVipe-reVirementVirtuoseVirusVisageViseurVisionVisqueuxVisuelVitalVitesseViticoleVitrineVivaceVivipareVocationVoguerVoileVoisinVoitureVolailleVolcanVoltigerVolumeVoraceVortexVoterVouloirVoyageVoyelleWagonXe/nonYachtZe-breZe/nithZesteZoologie"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")
                        .map(function (e) {
                          return (
                            (t = e),
                            (o = []),
                            Array.prototype.forEach.call((0, a.toUtf8Bytes)(t), function (e) {
                              47 === e ? (o.push(204), o.push(129)) : 45 === e ? (o.push(204), o.push(128)) : o.push(e);
                            }),
                            (0, a.toUtf8String)(o)
                          );
                          var t, o;
                        })).forEach(function (e, t) {
                      s[u(e)] = t;
                    }),
                    "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045" !== i.Wordlist.check(e))
                  )
                    throw ((l = null), new Error("BIP39 Wordlist for fr (French) FAILED"));
                }
                var d = new ((function (e) {
                  function t() {
                    return e.call(this, "fr") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return c(this), l[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return c(this), s[u(e)];
                    }),
                    t
                  );
                })(i.Wordlist))();
                (o.langFr = d), i.Wordlist.register(d);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-fr.js" }
    ],
    [
      5370,
      { "./actionable-message": 5369 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./actionable-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/actionable-message/index.js" }
    ],
    [
      5371,
      { "../../../../shared/constants/time": 4768, "../../../hooks/usePrevious": 5608, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = u(e("classnames")),
                  n = u(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  i = e("../../../hooks/usePrevious"),
                  l = e("../../../../shared/constants/time");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  const [t, o] = (0, a.useState)(!1),
                    [n, s] = (0, a.useState)(""),
                    u = (0, i.usePrevious)(e.visible);
                  return (
                    (0, a.useEffect)(() => {
                      !u && e.visible
                        ? (e.msg, s("visible"), o(!0))
                        : u &&
                          !e.visible &&
                          (s("hidden"),
                          setTimeout((e) => {
                            o(!1);
                          }, 500 * l.MILLISECOND));
                    }, [u, e.msg, e.visible]),
                    t
                      ? a.default.createElement(
                          "div",
                          { className: (0, r.default)("global-alert", n) },
                          a.default.createElement("a", { className: "msg" }, e.msg)
                        )
                      : null
                  );
                }
                c.propTypes = { visible: n.default.bool.isRequired, msg: n.default.string };
                o.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/alert/index.js" }
    ],
    [
      5372,
      { "../../../helpers/constants/design-system": 5537, classnames: 2952, lodash: 4071, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  (o.default =
                    o.ValidTextColors =
                    o.ValidIconColors =
                    o.ValidBorderColors =
                    o.ValidBackgroundColor =
                    o.MultipleTextColors =
                    o.MultipleSizesAndAuto =
                    o.MultipleSizes =
                    o.MultipleJustifyContents =
                    o.MultipleBorderColors =
                    o.MultipleBlockSizes =
                    o.MultipleBackgroundColor =
                    o.MultipleAlignItems =
                      void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("lodash"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const c = "box",
                  d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                  p = n.default.oneOf(d),
                  f = n.default.oneOf(Object.values(l.BlockSize)),
                  m = n.default.oneOf([...d, "auto"]),
                  g = (o.ValidBackgroundColor = n.default.oneOf(Object.values(l.BackgroundColor))),
                  h = (o.ValidBorderColors = n.default.oneOf(Object.values(l.BorderColor))),
                  b = (o.ValidTextColors = n.default.oneOf(Object.values(l.TextColor))),
                  v = (o.ValidIconColors = n.default.oneOf(Object.values(l.IconColor))),
                  y = n.default.oneOf(Object.values(l.AlignItems)),
                  T = n.default.oneOf(Object.values(l.JustifyContent)),
                  C = n.default.arrayOf(p),
                  k = (o.MultipleSizes = n.default.oneOfType([p, C])),
                  M = n.default.arrayOf(f),
                  S = (o.MultipleBlockSizes = n.default.oneOfType([f, M])),
                  A = n.default.arrayOf(m),
                  O = (o.MultipleSizesAndAuto = n.default.oneOfType([m, A])),
                  E = n.default.arrayOf(h),
                  P = (o.MultipleBorderColors = n.default.oneOfType([h, E])),
                  _ = n.default.arrayOf(g),
                  w = (o.MultipleBackgroundColor = n.default.oneOfType([g, _])),
                  B = n.default.arrayOf(b),
                  L = n.default.arrayOf(v),
                  F = (o.MultipleTextColors = n.default.oneOfType([b, B, v, L])),
                  D = n.default.arrayOf(y),
                  x = (o.MultipleAlignItems = n.default.oneOfType([y, D])),
                  N = n.default.arrayOf(T),
                  J = (o.MultipleJustifyContents = n.default.oneOfType([T, N]));
                function j(e, t) {
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
                function I(e, t) {
                  return "string" == typeof e && "string" == typeof t;
                }
                const R = (0, i.memoize)(
                    (e, t, o) => {
                      if (!t) return null;
                      const r = {},
                        n = Array.isArray(t) && 1 === t.length ? t[0] : undefined,
                        a = ((!Array.isArray(t) && "string" == typeof t) || "number" == typeof t ? t : undefined) || n;
                      if (a || 0 === a) r[`${c}--${e}-${a}`] = o(e, a);
                      else
                        switch (t.length) {
                          case 4:
                            (r[`${c}--${e}-${t[0]}`] = t[0] && o(e, t[0])),
                              (r[`${c}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && o(e, t[1])),
                              (r[`${c}--${l.BREAKPOINTS[2]}:${e}-${t[2]}`] = t[2] && o(e, t[2])),
                              (r[`${c}--${l.BREAKPOINTS[3]}:${e}-${t[3]}`] = t[3] && o(e, t[3]));
                            break;
                          case 3:
                            (r[`${c}--${e}-${t[0]}`] = t[0] && o(e, t[0])),
                              (r[`${c}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && o(e, t[1])),
                              (r[`${c}--${l.BREAKPOINTS[2]}:${e}-${t[2]}`] = t[2] && o(e, t[2]));
                            break;
                          case 2:
                            (r[`${c}--${e}-${t[0]}`] = t[0] && o(e, t[0])),
                              (r[`${c}--${l.BREAKPOINTS[1]}:${e}-${t[1]}`] = t[1] && o(e, t[1]));
                            break;
                          default:
                            console.log(`Invalid array prop length: ${t.length}`);
                        }
                      return r;
                    },
                    (e, t) => `${e}${t}`
                  ),
                  H = r.default.forwardRef(function (
                    {
                      padding: e,
                      paddingTop: t,
                      paddingRight: o,
                      paddingBottom: n,
                      paddingLeft: i,
                      paddingInline: s,
                      paddingInlineStart: d,
                      paddingInlineEnd: p,
                      margin: f,
                      marginTop: m,
                      marginRight: g,
                      marginBottom: h,
                      marginLeft: b,
                      marginInline: v,
                      marginInlineStart: y,
                      marginInlineEnd: T,
                      borderColor: C,
                      borderWidth: k,
                      borderRadius: M,
                      borderStyle: S,
                      alignItems: A,
                      justifyContent: O,
                      textAlign: E,
                      flexDirection: P = l.FlexDirection.Row,
                      flexWrap: _,
                      gap: w,
                      display: B,
                      width: L,
                      height: F,
                      children: D,
                      className: x,
                      backgroundColor: N,
                      color: J,
                      ariaLabel: H,
                      as: X = "div",
                      ...V
                    },
                    G
                  ) {
                    const z = (0, a.default)(
                      c,
                      x,
                      f && R("margin", f, j),
                      m && R("margin-top", m, j),
                      g && R("margin-right", g, j),
                      h && R("margin-bottom", h, j),
                      b && R("margin-left", b, j),
                      v && R("margin-inline", v, j),
                      y && R("margin-inline-start", y, j),
                      T && R("margin-inline-end", T, j),
                      e && R("padding", e, j),
                      t && R("padding-top", t, j),
                      o && R("padding-right", o, j),
                      n && R("padding-bottom", n, j),
                      i && R("padding-left", i, j),
                      s && R("padding-inline", s, j),
                      d && R("padding-inline-start", d, j),
                      p && R("padding-inline-end", p, j),
                      B && R("display", B, I),
                      w && R("gap", w, j),
                      P && R("flex-direction", P, I),
                      _ && R("flex-wrap", _, I),
                      O && R("justify-content", O, I),
                      A && R("align-items", A, I),
                      E && R("text-align", E, I),
                      L && R("width", L, I),
                      F && R("height", F, I),
                      J && R("color", J, I),
                      N && R("background-color", N, I),
                      M && R("rounded", M, I),
                      S && R("border-style", S, I),
                      C && R("border-color", C, I),
                      k && R("border-width", k, j),
                      {
                        "box--border-style-solid": !S && (Boolean(k) || Boolean(C)),
                        "box--border-width-1": !k && Boolean(C),
                        "box--display-flex": !B && (Boolean(O) || Boolean(A))
                      }
                    );
                    if ("function" == typeof D) return D(z);
                    const U = X,
                      Z = {};
                    return (
                      "function" == typeof U.type ? (Z.ariaLabel = H) : (Z["aria-label"] = H),
                      V["aria-label"] && (Z["aria-label"] = V["aria-label"]),
                      r.default.createElement(U, u({ className: z, ref: G }, V, Z), D)
                    );
                  });
                H.propTypes = {
                  children: n.default.oneOfType([n.default.node, n.default.func]),
                  flexDirection: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.FlexDirection)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.FlexDirection)))
                  ]),
                  flexWrap: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.FlexWrap)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.FlexWrap)))
                  ]),
                  gap: k,
                  margin: O,
                  marginTop: O,
                  marginBottom: O,
                  marginRight: O,
                  marginLeft: O,
                  marginInline: O,
                  marginInlineStart: O,
                  marginInlineEnd: O,
                  padding: k,
                  paddingTop: k,
                  paddingBottom: k,
                  paddingRight: k,
                  paddingLeft: k,
                  paddingInline: k,
                  paddingInlineStart: k,
                  paddingInlineEnd: k,
                  borderColor: P,
                  borderWidth: n.default.oneOfType([n.default.number, n.default.arrayOf(n.default.number)]),
                  borderRadius: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.BorderRadius)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.BorderRadius)))
                  ]),
                  borderStyle: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.BorderStyle)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.BorderStyle)))
                  ]),
                  alignItems: x,
                  justifyContent: J,
                  textAlign: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.TextAlign)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.TextAlign)))
                  ]),
                  display: n.default.oneOfType([
                    n.default.oneOf(Object.values(l.Display)),
                    n.default.arrayOf(n.default.oneOf(Object.values(l.Display)))
                  ]),
                  width: S,
                  height: S,
                  backgroundColor: w,
                  className: n.default.string,
                  style: n.default.object,
                  as: n.default.string,
                  color: F,
                  ariaLabel: n.default.string,
                  "aria-label": n.default.string
                };
                o.default = H;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/box/box.js" }
    ],
    [
      5373,
      { "./box": 5372 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "MultipleSizes", {
                    enumerable: !0,
                    get: function () {
                      return r.MultipleSizes;
                    }
                  }),
                  Object.defineProperty(o, "MultipleSizesAndAuto", {
                    enumerable: !0,
                    get: function () {
                      return r.MultipleSizesAndAuto;
                    }
                  }),
                  Object.defineProperty(o, "ValidBackgroundColor", {
                    enumerable: !0,
                    get: function () {
                      return r.ValidBackgroundColor;
                    }
                  }),
                  Object.defineProperty(o, "ValidBorderColors", {
                    enumerable: !0,
                    get: function () {
                      return r.ValidBorderColors;
                    }
                  }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var o = n(t);
                  if (o && o.has(e)) return o.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
                    }
                  return (r.default = e), o && o.set(e, r), r;
                })(e("./box"));
                function n(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (n = function (e) {
                    return e ? o : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/box/index.js" }
    ],
    [
      5374,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function s(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class u extends r.PureComponent {
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
                    const { children: e, disabled: t, variant: o } = this.props;
                    return r.default.Children.map(
                      e,
                      (e, n) =>
                        e &&
                        r.default.createElement(
                          "button",
                          {
                            role: "radiogroup" === o ? "radio" : undefined,
                            "aria-checked": n === this.state.activeButtonIndex,
                            className: (0, a.default)("button-group__button", e.props.className, {
                              "radio-button": "radiogroup" === o,
                              "button-group__button--active": n === this.state.activeButtonIndex,
                              "radio-button--active": "radiogroup" === o && n === this.state.activeButtonIndex
                            }),
                            "data-testid": `button-group__button${n}`,
                            onClick: () => {
                              var t, o;
                              this.handleButtonClick(n), null === (t = (o = e.props).onClick) || void 0 === t || t.call(o);
                            },
                            disabled: t || e.props.disabled,
                            key: n
                          },
                          e.props.children
                        )
                    );
                  }
                  render() {
                    const { className: e, style: t, variant: o } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        className: (0, a.default)(e, { "radio-button-group": "radiogroup" === o }),
                        role: "radiogroup" === o ? "radiogroup" : undefined,
                        style: t
                      },
                      this.renderButtons()
                    );
                  }
                }
                (o.default = u),
                  s(u, "propTypes", {
                    defaultActiveButtonIndex: n.default.number,
                    noButtonActiveByDefault: n.default.bool,
                    disabled: n.default.bool,
                    children: n.default.array,
                    className: n.default.string,
                    style: n.default.object,
                    newActiveButtonIndex: n.default.number,
                    variant: n.default.oneOf(["radiogroup", "default"])
                  }),
                  s(u, "defaultProps", { className: "button-group", defaultActiveButtonIndex: 0, variant: "default" });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button-group/button-group.component.js" }
    ],
    [
      5375,
      { "./button-group.component": 5374 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./button-group.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button-group/index.js" }
    ],
    [
      5376,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = i(e("react")),
                  n = i(e("prop-types")),
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
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                const s = "btn-default",
                  u = {
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
                  c = ({ type: e, submit: t = !1, large: o, children: n, icon: i, className: c, rounded: d = !0, ...p }) => {
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
                      r.default.createElement(
                        m,
                        l({ className: (0, a.default)("button", f && "btn--rounded", u[e] || s, o && "btn--large", c) }, p),
                        i ? r.default.createElement("span", { className: "button__icon" }, i) : null,
                        n
                      )
                    );
                  };
                c.propTypes = {
                  type: n.default.string,
                  submit: n.default.bool,
                  large: n.default.bool,
                  className: n.default.string,
                  children: n.default.node,
                  icon: n.default.node,
                  rounded: n.default.bool
                };
                o.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button/button.component.js" }
    ],
    [
      5377,
      { "./button.component": 5376 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./button.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/button/index.js" }
    ],
    [
      5378,
      {
        "../../../../shared/constants/time": 4768,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../icon/info-icon-inverted.component": 5421,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = c(e("../icon/info-icon-inverted.component")),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../../shared/constants/time"),
                  u = e("../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (d = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function p({ severity: e, children: t, dismiss: o, isFirst: n, isLast: c, isMultiple: d }) {
                  const [p, f] = (0, r.useState)(!1),
                    m = (0, a.default)("callout", `callout--${e}`, {
                      "callout--dismissed": !0 === p,
                      "callout--multiple": !0 === d,
                      "callout--dismissible": Boolean(o),
                      "callout--first": !0 === n || !0 !== d,
                      "callout--last": !0 === c || !0 !== d
                    });
                  return (
                    (0, r.useEffect)(() => {
                      p &&
                        setTimeout(() => {
                          o();
                        }, 500 * s.MILLISECOND);
                    }, [p, o]),
                    r.default.createElement(
                      "div",
                      { className: m },
                      r.default.createElement(i.default, { severity: e }),
                      r.default.createElement(u.Text, { color: l.TextColor.textDefault, className: "callout__content" }, t),
                      o &&
                        r.default.createElement(u.ButtonIcon, {
                          iconName: u.IconName.Close,
                          size: u.IconSize.Sm,
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
                  severity: n.default.oneOf(Object.values(l.Severity)).isRequired,
                  children: n.default.node.isRequired,
                  dismiss: n.default.func,
                  isFirst: n.default.bool,
                  isLast: n.default.bool,
                  isMultiple: n.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/callout/callout.js" }
    ],
    [
      5379,
      { "./callout": 5378 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./callout")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/callout/index.js" }
    ],
    [
      538,
      { "./wordlist": 542 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langIt = void 0);
                var a = e("./wordlist"),
                  i = null;
                function l(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbacoAbbaglioAbbinatoAbeteAbissoAbolireAbrasivoAbrogatoAccadereAccennoAccusatoAcetoneAchilleAcidoAcquaAcreAcrilicoAcrobataAcutoAdagioAddebitoAddomeAdeguatoAderireAdipeAdottareAdulareAffabileAffettoAffissoAffrantoAforismaAfosoAfricanoAgaveAgenteAgevoleAggancioAgireAgitareAgonismoAgricoloAgrumetoAguzzoAlabardaAlatoAlbatroAlberatoAlboAlbumeAlceAlcolicoAlettoneAlfaAlgebraAlianteAlibiAlimentoAllagatoAllegroAllievoAllodolaAllusivoAlmenoAlogenoAlpacaAlpestreAltalenaAlternoAlticcioAltroveAlunnoAlveoloAlzareAmalgamaAmanitaAmarenaAmbitoAmbratoAmebaAmericaAmetistaAmicoAmmassoAmmendaAmmirareAmmonitoAmoreAmpioAmpliareAmuletoAnacardoAnagrafeAnalistaAnarchiaAnatraAncaAncellaAncoraAndareAndreaAnelloAngeloAngolareAngustoAnimaAnnegareAnnidatoAnnoAnnuncioAnonimoAnticipoAnziApaticoAperturaApodeApparireAppetitoAppoggioApprodoAppuntoAprileArabicaArachideAragostaAraldicaArancioAraturaArazzoArbitroArchivioArditoArenileArgentoArgineArgutoAriaArmoniaArneseArredatoArringaArrostoArsenicoArsoArteficeArzilloAsciuttoAscoltoAsepsiAsetticoAsfaltoAsinoAsolaAspiratoAsproAssaggioAsseAssolutoAssurdoAstaAstenutoAsticeAstrattoAtavicoAteismoAtomicoAtonoAttesaAttivareAttornoAttritoAttualeAusilioAustriaAutistaAutonomoAutunnoAvanzatoAvereAvvenireAvvisoAvvolgereAzioneAzotoAzzimoAzzurroBabeleBaccanoBacinoBacoBadessaBadilataBagnatoBaitaBalconeBaldoBalenaBallataBalzanoBambinoBandireBaraondaBarbaroBarcaBaritonoBarlumeBaroccoBasilicoBassoBatostaBattutoBauleBavaBavosaBeccoBeffaBelgioBelvaBendaBenevoleBenignoBenzinaBereBerlinaBetaBibitaBiciBidoneBifidoBigaBilanciaBimboBinocoloBiologoBipedeBipolareBirbanteBirraBiscottoBisestoBisnonnoBisonteBisturiBizzarroBlandoBlattaBollitoBonificoBordoBoscoBotanicoBottinoBozzoloBraccioBradipoBramaBrancaBravuraBretellaBrevettoBrezzaBrigliaBrillanteBrindareBroccoloBrodoBronzinaBrulloBrunoBubboneBucaBudinoBuffoneBuioBulboBuonoBurloneBurrascaBussolaBustaCadettoCaducoCalamaroCalcoloCalesseCalibroCalmoCaloriaCambusaCamerataCamiciaCamminoCamolaCampaleCanapaCandelaCaneCaninoCanottoCantinaCapaceCapelloCapitoloCapogiroCapperoCapraCapsulaCarapaceCarcassaCardoCarismaCarovanaCarrettoCartolinaCasaccioCascataCasermaCasoCassoneCastelloCasualeCatastaCatenaCatrameCautoCavilloCedibileCedrataCefaloCelebreCellulareCenaCenoneCentesimoCeramicaCercareCertoCerumeCervelloCesoiaCespoCetoChelaChiaroChiccaChiedereChimeraChinaChirurgoChitarraCiaoCiclismoCifrareCignoCilindroCiottoloCircaCirrosiCitricoCittadinoCiuffoCivettaCivileClassicoClinicaCloroCoccoCodardoCodiceCoerenteCognomeCollareColmatoColoreColposoColtivatoColzaComaCometaCommandoComodoComputerComuneConcisoCondurreConfermaCongelareConiugeConnessoConoscereConsumoContinuoConvegnoCopertoCopioneCoppiaCopricapoCorazzaCordataCoricatoCorniceCorollaCorpoCorredoCorsiaCorteseCosmicoCostanteCotturaCovatoCratereCravattaCreatoCredereCremosoCrescitaCretaCricetoCrinaleCrisiCriticoCroceCronacaCrostataCrucialeCruscaCucireCuculoCuginoCullatoCupolaCuratoreCursoreCurvoCuscinoCustodeDadoDainoDalmataDamerinoDanielaDannosoDanzareDatatoDavantiDavveroDebuttoDecennioDecisoDeclinoDecolloDecretoDedicatoDefinitoDeformeDegnoDelegareDelfinoDelirioDeltaDemenzaDenotatoDentroDepositoDerapataDerivareDerogaDescrittoDesertoDesiderioDesumereDetersivoDevotoDiametroDicembreDiedroDifesoDiffusoDigerireDigitaleDiluvioDinamicoDinnanziDipintoDiplomaDipoloDiradareDireDirottoDirupoDisagioDiscretoDisfareDisgeloDispostoDistanzaDisumanoDitoDivanoDiveltoDividereDivoratoDobloneDocenteDoganaleDogmaDolceDomatoDomenicaDominareDondoloDonoDormireDoteDottoreDovutoDozzinaDragoDruidoDubbioDubitareDucaleDunaDuomoDupliceDuraturoEbanoEccessoEccoEclissiEconomiaEderaEdicolaEdileEditoriaEducareEgemoniaEgliEgoismoEgregioElaboratoElargireEleganteElencatoElettoElevareElficoElicaElmoElsaElusoEmanatoEmblemaEmessoEmiroEmotivoEmozioneEmpiricoEmuloEndemicoEnduroEnergiaEnfasiEnotecaEntrareEnzimaEpatiteEpilogoEpisodioEpocaleEppureEquatoreErarioErbaErbosoEredeEremitaErigereErmeticoEroeErosivoErranteEsagonoEsameEsanimeEsaudireEscaEsempioEsercitoEsibitoEsigenteEsistereEsitoEsofagoEsortatoEsosoEspansoEspressoEssenzaEssoEstesoEstimareEstoniaEstrosoEsultareEtilicoEtnicoEtruscoEttoEuclideoEuropaEvasoEvidenzaEvitatoEvolutoEvvivaFabbricaFaccendaFachiroFalcoFamigliaFanaleFanfaraFangoFantasmaFareFarfallaFarinosoFarmacoFasciaFastosoFasulloFaticareFatoFavolosoFebbreFecolaFedeFegatoFelpaFeltroFemminaFendereFenomenoFermentoFerroFertileFessuraFestivoFettaFeudoFiabaFiduciaFifaFiguratoFiloFinanzaFinestraFinireFioreFiscaleFisicoFiumeFlaconeFlamencoFleboFlemmaFloridoFluenteFluoroFobicoFocacciaFocosoFoderatoFoglioFolataFolcloreFolgoreFondenteFoneticoFoniaFontanaForbitoForchettaForestaFormicaFornaioForoFortezzaForzareFosfatoFossoFracassoFranaFrassinoFratelloFreccettaFrenataFrescoFrigoFrollinoFrondeFrugaleFruttaFucilataFucsiaFuggenteFulmineFulvoFumanteFumettoFumosoFuneFunzioneFuocoFurboFurgoneFuroreFusoFutileGabbianoGaffeGalateoGallinaGaloppoGamberoGammaGaranziaGarboGarofanoGarzoneGasdottoGasolioGastricoGattoGaudioGazeboGazzellaGecoGelatinaGelsoGemelloGemmatoGeneGenitoreGennaioGenotipoGergoGhepardoGhiaccioGhisaGialloGildaGineproGiocareGioielloGiornoGioveGiratoGironeGittataGiudizioGiuratoGiustoGlobuloGlutineGnomoGobbaGolfGomitoGommoneGonfioGonnaGovernoGracileGradoGraficoGrammoGrandeGrattareGravosoGraziaGrecaGreggeGrifoneGrigioGrinzaGrottaGruppoGuadagnoGuaioGuantoGuardareGufoGuidareIbernatoIconaIdenticoIdillioIdoloIdraIdricoIdrogenoIgieneIgnaroIgnoratoIlareIllesoIllogicoIlludereImballoImbevutoImboccoImbutoImmaneImmersoImmolatoImpaccoImpetoImpiegoImportoImprontaInalareInarcareInattivoIncantoIncendioInchinoIncisivoInclusoIncontroIncrocioIncuboIndagineIndiaIndoleIneditoInfattiInfilareInflittoIngaggioIngegnoIngleseIngordoIngrossoInnescoInodoreInoltrareInondatoInsanoInsettoInsiemeInsonniaInsulinaIntasatoInteroIntonacoIntuitoInumidireInvalidoInveceInvitoIperboleIpnoticoIpotesiIppicaIrideIrlandaIronicoIrrigatoIrrorareIsolatoIsotopoIstericoIstitutoIstriceItaliaIterareLabbroLabirintoLaccaLaceratoLacrimaLacunaLaddoveLagoLampoLancettaLanternaLardosoLargaLaringeLastraLatenzaLatinoLattugaLavagnaLavoroLegaleLeggeroLemboLentezzaLenzaLeoneLepreLesivoLessatoLestoLetteraleLevaLevigatoLiberoLidoLievitoLillaLimaturaLimitareLimpidoLineareLinguaLiquidoLiraLiricaLiscaLiteLitigioLivreaLocandaLodeLogicaLombareLondraLongevoLoquaceLorenzoLotoLotteriaLuceLucidatoLumacaLuminosoLungoLupoLuppoloLusingaLussoLuttoMacabroMacchinaMaceroMacinatoMadamaMagicoMagliaMagneteMagroMaiolicaMalafedeMalgradoMalintesoMalsanoMaltoMalumoreManaManciaMandorlaMangiareManifestoMannaroManovraMansardaMantideManubrioMappaMaratonaMarcireMarettaMarmoMarsupioMascheraMassaiaMastinoMaterassoMatricolaMattoneMaturoMazurcaMeandroMeccanicoMecenateMedesimoMeditareMegaMelassaMelisMelodiaMeningeMenoMensolaMercurioMerendaMerloMeschinoMeseMessereMestoloMetalloMetodoMettereMiagolareMicaMicelioMicheleMicroboMidolloMieleMiglioreMilanoMiliteMimosaMineraleMiniMinoreMirinoMirtilloMiscelaMissivaMistoMisurareMitezzaMitigareMitraMittenteMnemonicoModelloModificaModuloMoganoMogioMoleMolossoMonasteroMoncoMondinaMonetarioMonileMonotonoMonsoneMontatoMonvisoMoraMordereMorsicatoMostroMotivatoMotosegaMottoMovenzaMovimentoMozzoMuccaMucosaMuffaMughettoMugnaioMulattoMulinelloMultiploMummiaMuntoMuovereMuraleMusaMuscoloMusicaMutevoleMutoNababboNaftaNanometroNarcisoNariceNarratoNascereNastrareNaturaleNauticaNaviglioNebulosaNecrosiNegativoNegozioNemmenoNeofitaNerettoNervoNessunoNettunoNeutraleNeveNevroticoNicchiaNinfaNitidoNobileNocivoNodoNomeNominaNordicoNormaleNorvegeseNostranoNotareNotiziaNotturnoNovellaNucleoNullaNumeroNuovoNutrireNuvolaNuzialeOasiObbedireObbligoObeliscoOblioOboloObsoletoOccasioneOcchioOccidenteOccorrereOccultareOcraOculatoOdiernoOdorareOffertaOffrireOffuscatoOggettoOggiOgnunoOlandeseOlfattoOliatoOlivaOlogrammaOltreOmaggioOmbelicoOmbraOmegaOmissioneOndosoOnereOniceOnnivoroOnorevoleOntaOperatoOpinioneOppostoOracoloOrafoOrdineOrecchinoOreficeOrfanoOrganicoOrigineOrizzonteOrmaOrmeggioOrnativoOrologioOrrendoOrribileOrtensiaOrticaOrzataOrzoOsareOscurareOsmosiOspedaleOspiteOssaOssidareOstacoloOsteOtiteOtreOttagonoOttimoOttobreOvaleOvestOvinoOviparoOvocitoOvunqueOvviareOzioPacchettoPacePacificoPadellaPadronePaesePagaPaginaPalazzinaPalesarePallidoPaloPaludePandoroPannelloPaoloPaonazzoPapricaParabolaParcellaParerePargoloPariParlatoParolaPartireParvenzaParzialePassivoPasticcaPataccaPatologiaPattumePavonePeccatoPedalarePedonalePeggioPelosoPenarePendicePenisolaPennutoPenombraPensarePentolaPepePepitaPerbenePercorsoPerdonatoPerforarePergamenaPeriodoPermessoPernoPerplessoPersuasoPertugioPervasoPesatorePesistaPesoPestiferoPetaloPettinePetulantePezzoPiacerePiantaPiattinoPiccinoPicozzaPiegaPietraPifferoPigiamaPigolioPigroPilaPiliferoPillolaPilotaPimpantePinetaPinnaPinoloPioggiaPiomboPiramidePireticoPiritePirolisiPitonePizzicoPlaceboPlanarePlasmaPlatanoPlenarioPochezzaPoderosoPodismoPoesiaPoggiarePolentaPoligonoPollicePolmonitePolpettaPolsoPoltronaPolverePomicePomodoroPontePopolosoPorfidoPorosoPorporaPorrePortataPosaPositivoPossessoPostulatoPotassioPoterePranzoPrassiPraticaPreclusoPredicaPrefissoPregiatoPrelievoPremerePrenotarePreparatoPresenzaPretestoPrevalsoPrimaPrincipePrivatoProblemaProcuraProdurreProfumoProgettoProlungaPromessaPronomePropostaProrogaProtesoProvaPrudentePrugnaPruritoPsichePubblicoPudicaPugilatoPugnoPulcePulitoPulsantePuntarePupazzoPupillaPuroQuadroQualcosaQuasiQuerelaQuotaRaccoltoRaddoppioRadicaleRadunatoRafficaRagazzoRagioneRagnoRamarroRamingoRamoRandagioRantolareRapatoRapinaRappresoRasaturaRaschiatoRasenteRassegnaRastrelloRataRavvedutoRealeRecepireRecintoReclutaReconditoRecuperoRedditoRedimereRegalatoRegistroRegolaRegressoRelazioneRemareRemotoRennaReplicaReprimereReputareResaResidenteResponsoRestauroReteRetinaRetoricaRettificaRevocatoRiassuntoRibadireRibelleRibrezzoRicaricaRiccoRicevereRiciclatoRicordoRicredutoRidicoloRidurreRifasareRiflessoRiformaRifugioRigareRigettatoRighelloRilassatoRilevatoRimanereRimbalzoRimedioRimorchioRinascitaRincaroRinforzoRinnovoRinomatoRinsavitoRintoccoRinunciaRinvenireRiparatoRipetutoRipienoRiportareRipresaRipulireRisataRischioRiservaRisibileRisoRispettoRistoroRisultatoRisvoltoRitardoRitegnoRitmicoRitrovoRiunioneRivaRiversoRivincitaRivoltoRizomaRobaRoboticoRobustoRocciaRocoRodaggioRodereRoditoreRogitoRollioRomanticoRompereRonzioRosolareRospoRotanteRotondoRotulaRovescioRubizzoRubricaRugaRullinoRumineRumorosoRuoloRupeRussareRusticoSabatoSabbiareSabotatoSagomaSalassoSaldaturaSalgemmaSalivareSalmoneSaloneSaltareSalutoSalvoSapereSapidoSaporitoSaracenoSarcasmoSartoSassosoSatelliteSatiraSatolloSaturnoSavanaSavioSaziatoSbadiglioSbalzoSbancatoSbarraSbattereSbavareSbendareSbirciareSbloccatoSbocciatoSbrinareSbruffoneSbuffareScabrosoScadenzaScalaScambiareScandaloScapolaScarsoScatenareScavatoSceltoScenicoScettroSchedaSchienaSciarpaScienzaScindereScippoSciroppoScivoloSclerareScodellaScolpitoScompartoSconfortoScoprireScortaScossoneScozzeseScribaScrollareScrutinioScuderiaScultoreScuolaScuroScusareSdebitareSdoganareSeccaturaSecondoSedanoSeggiolaSegnalatoSegregatoSeguitoSelciatoSelettivoSellaSelvaggioSemaforoSembrareSemeSeminatoSempreSensoSentireSepoltoSequenzaSerataSerbatoSerenoSerioSerpenteSerraglioServireSestinaSetolaSettimanaSfaceloSfaldareSfamatoSfarzosoSfaticatoSferaSfidaSfilatoSfingeSfocatoSfoderareSfogoSfoltireSforzatoSfrattoSfruttatoSfuggitoSfumareSfusoSgabelloSgarbatoSgonfiareSgorbioSgrassatoSguardoSibiloSiccomeSierraSiglaSignoreSilenzioSillabaSimboloSimpaticoSimulatoSinfoniaSingoloSinistroSinoSintesiSinusoideSiparioSismaSistoleSituatoSlittaSlogaturaSlovenoSmarritoSmemoratoSmentitoSmeraldoSmilzoSmontareSmottatoSmussatoSnellireSnervatoSnodoSobbalzoSobrioSoccorsoSocialeSodaleSoffittoSognoSoldatoSolenneSolidoSollazzoSoloSolubileSolventeSomaticoSommaSondaSonettoSonniferoSopireSoppesoSopraSorgereSorpassoSorrisoSorsoSorteggioSorvolatoSospiroSostaSottileSpadaSpallaSpargereSpatolaSpaventoSpazzolaSpecieSpedireSpegnereSpelaturaSperanzaSpessoreSpettraleSpezzatoSpiaSpigolosoSpillatoSpinosoSpiraleSplendidoSportivoSposoSprangaSprecareSpronatoSpruzzoSpuntinoSquilloSradicareSrotolatoStabileStaccoStaffaStagnareStampatoStantioStarnutoStaseraStatutoSteloSteppaSterzoStilettoStimaStirpeStivaleStizzosoStonatoStoricoStrappoStregatoStriduloStrozzareStruttoStuccareStufoStupendoSubentroSuccosoSudoreSuggeritoSugoSultanoSuonareSuperboSupportoSurgelatoSurrogatoSussurroSuturaSvagareSvedeseSveglioSvelareSvenutoSveziaSviluppoSvistaSvizzeraSvoltaSvuotareTabaccoTabulatoTacciareTaciturnoTaleTalismanoTamponeTanninoTaraTardivoTargatoTariffaTarpareTartarugaTastoTatticoTavernaTavolataTazzaTecaTecnicoTelefonoTemerarioTempoTemutoTendoneTeneroTensioneTentacoloTeoremaTermeTerrazzoTerzettoTesiTesseratoTestatoTetroTettoiaTifareTigellaTimbroTintoTipicoTipografoTiraggioTiroTitanioTitoloTitubanteTizioTizzoneToccareTollerareToltoTombolaTomoTonfoTonsillaTopazioTopologiaToppaTorbaTornareTorroneTortoraToscanoTossireTostaturaTotanoTraboccoTracheaTrafilaTragediaTralcioTramontoTransitoTrapanoTrarreTraslocoTrattatoTraveTrecciaTremolioTrespoloTributoTrichecoTrifoglioTrilloTrinceaTrioTristezzaTrituratoTrivellaTrombaTronoTroppoTrottolaTrovareTruccatoTubaturaTuffatoTulipanoTumultoTunisiaTurbareTurchinoTutaTutelaUbicatoUccelloUccisoreUdireUditivoUffaUfficioUgualeUlisseUltimatoUmanoUmileUmorismoUncinettoUngereUnghereseUnicornoUnificatoUnisonoUnitarioUnteUovoUpupaUraganoUrgenzaUrloUsanzaUsatoUscitoUsignoloUsuraioUtensileUtilizzoUtopiaVacanteVaccinatoVagabondoVagliatoValangaValgoValicoVallettaValorosoValutareValvolaVampataVangareVanitosoVanoVantaggioVanveraVaporeVaranoVarcatoVarianteVascaVedettaVedovaVedutoVegetaleVeicoloVelcroVelinaVellutoVeloceVenatoVendemmiaVentoVeraceVerbaleVergognaVerificaVeroVerrucaVerticaleVescicaVessilloVestaleVeteranoVetrinaVetustoViandanteVibranteVicendaVichingoVicinanzaVidimareVigiliaVignetoVigoreVileVillanoViminiVincitoreViolaViperaVirgolaVirologoVirulentoViscosoVisioneVispoVissutoVisuraVitaVitelloVittimaVivandaVividoViziareVoceVogaVolatileVolereVolpeVoragineVulcanoZampognaZannaZappatoZatteraZavorraZefiroZelanteZeloZenzeroZerbinoZibettoZincoZirconeZittoZollaZoticoZuccheroZufoloZuluZuppa"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620" !== a.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for it (Italian) FAILED"));
                }
                var s = new ((function (e) {
                  function t() {
                    return e.call(this, "it") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return l(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return l(this), i.indexOf(e);
                    }),
                    t
                  );
                })(a.Wordlist))();
                (o.langIt = s), a.Wordlist.register(s);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-it.js" }
    ],
    [
      5380,
      { "../../../helpers/constants/design-system": 5537, "../box": 5373, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = l(e("react")),
                  n = l(e("prop-types")),
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
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const u = ({ border: e = !0, backgroundColor: t = i.BackgroundColor.backgroundDefault, children: o, ...n }) =>
                  r.default.createElement(
                    a.default,
                    s(
                      {
                        borderColor: e ? i.BorderColor.borderMuted : null,
                        borderRadius: e ? i.BorderRadius.MD : null,
                        borderStyle: e ? i.BorderStyle.solid : null,
                        backgroundColor: t,
                        padding: 4
                      },
                      n
                    ),
                    o
                  );
                u.propTypes = {
                  border: n.default.bool,
                  backgroundColor: n.default.oneOf(Object.values(i.BackgroundColor)),
                  ...a.default.propTypes
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/card/card.js" }
    ],
    [
      5381,
      { "./card": 5380 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./card")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/card/index.js" }
    ],
    [
      5382,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = o.UNCHECKED = o.INDETERMINATE = o.CHECKED = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const s = { CHECKED: "CHECKED", INDETERMINATE: "INDETERMINATE", UNCHECKED: "UNCHECKED" },
                  { CHECKED: u, INDETERMINATE: c, UNCHECKED: d } = s;
                (o.UNCHECKED = d), (o.INDETERMINATE = c), (o.CHECKED = u);
                const p = ({ className: e, disabled: t, id: o, onClick: n, checked: i, title: l, dataTestId: u }) => {
                  "boolean" == typeof i && (i = i ? s.CHECKED : s.UNCHECKED);
                  const c = (0, r.useRef)(null);
                  return (
                    (0, r.useLayoutEffect)(() => {
                      c.current.indeterminate = i === s.INDETERMINATE;
                    }, [i]),
                    r.default.createElement("input", {
                      checked: i === s.CHECKED,
                      className: (0, a.default)("check-box", e, {
                        "far fa-square": i === s.UNCHECKED,
                        "fa fa-check-square check-box__checked": i === s.CHECKED,
                        "fa fa-minus-square check-box__indeterminate": i === s.INDETERMINATE
                      }),
                      disabled: t,
                      id: o,
                      onClick: n
                        ? (e) => {
                            e.preventDefault(), n();
                          }
                        : null,
                      readOnly: !0,
                      ref: c,
                      title: l,
                      "data-testid": u,
                      type: "checkbox"
                    })
                  );
                };
                (p.propTypes = {
                  className: n.default.string,
                  disabled: n.default.bool,
                  id: n.default.string,
                  onClick: n.default.func,
                  checked: n.default.oneOf([...Object.keys(s), !0, !1]).isRequired,
                  title: n.default.string,
                  dataTestId: n.default.string
                }),
                  (p.defaultProps = { className: undefined, disabled: !1, id: undefined });
                o.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/check-box/check-box.component.js" }
    ],
    [
      5383,
      { "./check-box.component": 5382 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "CHECKED", {
                    enumerable: !0,
                    get: function () {
                      return r.CHECKED;
                    }
                  }),
                  Object.defineProperty(o, "INDETERMINATE", {
                    enumerable: !0,
                    get: function () {
                      return r.INDETERMINATE;
                    }
                  }),
                  Object.defineProperty(o, "UNCHECKED", {
                    enumerable: !0,
                    get: function () {
                      return r.UNCHECKED;
                    }
                  }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var o = n(t);
                  if (o && o.has(e)) return o.get(e);
                  var r = { __proto__: null },
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
                    }
                  return (r.default = e), o && o.set(e, r), r;
                })(e("./check-box.component"));
                function n(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (n = function (e) {
                    return e ? o : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/check-box/index.js" }
    ],
    [
      5384,
      { ".": 5386, "../../../helpers/constants/design-system": 5537, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.ChipWithInput = u);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = s(e("."));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ dataTestId: e, className: t, borderColor: o = i.BorderColor.borderDefault, inputValue: n, setInputValue: s }) {
                  return r.default.createElement(
                    l.default,
                    { className: (0, a.default)(t, "chip--with-input"), borderColor: o },
                    s &&
                      r.default.createElement("input", {
                        "data-testid": e,
                        type: "text",
                        className: "chip__input",
                        onChange: (e) => {
                          s(e.target.value);
                        },
                        value: n
                      })
                  );
                }
                u.propTypes = {
                  dataTestId: n.default.string,
                  borderColor: n.default.oneOf(Object.values(i.BorderColor)),
                  className: n.default.string,
                  inputValue: n.default.string,
                  setInputValue: n.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/chip-with-input.js" }
    ],
    [
      5385,
      {
        "../../../helpers/constants/design-system": 5537,
        "../typography": 5506,
        "../url-icon": 5511,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = c(e("react")),
                  n = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("lodash"),
                  l = c(e("../typography")),
                  s = c(e("../url-icon")),
                  u = e("../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  dataTestId: e,
                  className: t,
                  children: o,
                  borderColor: n = u.BorderColor.borderDefault,
                  backgroundColor: i,
                  label: c,
                  labelProps: p = {},
                  leftIcon: f,
                  leftIconUrl: m = "",
                  rightIcon: g,
                  onClick: h,
                  maxContent: b = !0,
                  displayInlineBlock: v = !1
                }) {
                  const y = "function" == typeof h;
                  return r.default.createElement(
                    "div",
                    {
                      "data-testid": e,
                      onClick: h,
                      onKeyPress: (e) => {
                        "Enter" === e.key && h && h(e);
                      },
                      className: (0, a.default)(t, "chip", {
                        "chip--with-left-icon": Boolean(f),
                        "chip--with-right-icon": Boolean(g),
                        [`chip--border-color-${n}`]: !0,
                        [`chip--background-color-${i}`]: !0,
                        "chip--max-content": b,
                        "chip--display-inline-block": v
                      }),
                      role: y ? "button" : undefined,
                      tabIndex: y ? 0 : undefined
                    },
                    f && !m ? r.default.createElement("div", { className: "chip__left-icon" }, f) : null,
                    m ? r.default.createElement(s.default, { className: "chip__left-url-icon", url: m }) : null,
                    o ??
                      r.default.createElement(
                        l.default,
                        d({ className: "chip__label", variant: u.TypographyVariant.H6, as: "span", color: u.TextColor.textAlternative }, p),
                        c
                      ),
                    g ? r.default.createElement("div", { className: "chip__right-icon" }, g) : null
                  );
                }
                p.propTypes = {
                  dataTestId: n.default.string,
                  borderColor: n.default.oneOf(Object.values(u.BorderColor)),
                  backgroundColor: n.default.oneOf(Object.values(u.BackgroundColor)),
                  label: n.default.string,
                  labelProps: n.default.shape({ ...(0, i.omit)(u.TypographyVariant.propTypes, ["children", "className"]) }),
                  children: n.default.node,
                  leftIcon: n.default.node,
                  rightIcon: n.default.node,
                  className: n.default.string,
                  onClick: n.default.func,
                  maxContent: n.default.bool,
                  leftIconUrl: n.default.string,
                  displayInlineBlock: n.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/chip.js" }
    ],
    [
      5386,
      { "./chip": 5385 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./chip")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/chip/index.js" }
    ],
    [
      5387,
      { "../../../helpers/constants/design-system": 5537, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = s);
                var r = l(e("react")),
                  n = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ size: e = i.Size.SM, type: t = "outlined", color: o = i.Color.iconMuted, borderColor: a, iconClassName: l }) {
                  const s = (0, n.default)("color-indicator", {
                    "color-indicator--filled": "filled" === t || Boolean(l),
                    "color-indicator--partial-filled": "partial-filled" === t,
                    [`color-indicator--border-color-${a}`]: Boolean(a),
                    [`color-indicator--color-${o}`]: !0,
                    [`color-indicator--size-${e}`]: !0
                  });
                  return r.default.createElement(
                    "div",
                    { className: s, "data-testid": `color-icon-${o}` },
                    l
                      ? r.default.createElement("i", { className: (0, n.default)("color-indicator__icon", l) })
                      : r.default.createElement("span", { className: "color-indicator__inner-circle" })
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
      5388,
      { "./color-indicator": 5387 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./color-indicator")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/color-indicator/index.js" }
    ],
    [
      5389,
      { "../../../hooks/useI18nContext": 5602, "../tooltip": 5502, "prop-types": 4219, react: 4475, "unicode-confusables": 4658 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = s(e("prop-types")),
                  a = e("unicode-confusables"),
                  i = s(e("../tooltip")),
                  l = e("../../../hooks/useI18nContext");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const c = ({ input: e }) => {
                  const t = (0, l.useI18nContext)();
                  return (0, r.useMemo)(() => (0, a.confusables)(e), [e]).map(({ point: e, similarTo: o }, n) => {
                    const a = "" === o;
                    return o === undefined
                      ? e
                      : r.default.createElement(
                          i.default,
                          {
                            key: n.toString(),
                            tag: "span",
                            position: "top",
                            title: a ? t("confusableZeroWidthUnicode") : t("confusableUnicode", [e, o])
                          },
                          r.default.createElement("span", { className: "confusable__point" }, a ? "?" : e)
                        );
                  });
                };
                c.propTypes = { input: n.default.string.isRequired };
                o.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/confusable/confusable.component.js" }
    ],
    [
      539,
      { "./wordlist": 542, "@ethersproject/bytes": 448, "@ethersproject/strings": 521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langJa = void 0);
                var a = e("@ethersproject/bytes"),
                  i = e("@ethersproject/strings"),
                  l = e("./wordlist"),
                  s = [
                    "AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR",
                    "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR",
                    "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm",
                    "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC",
                    "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD",
                    "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD",
                    "IJBEJqXZJ"
                  ],
                  u = null;
                function c(e) {
                  return (0, a.hexlify)((0, i.toUtf8Bytes)(e));
                }
                function d(e) {
                  if (null === u) {
                    u = [];
                    var t = {};
                    (t[(0, i.toUtf8String)([227, 130, 154])] = !1),
                      (t[(0, i.toUtf8String)([227, 130, 153])] = !1),
                      (t[(0, i.toUtf8String)([227, 130, 133])] = (0, i.toUtf8String)([227, 130, 134])),
                      (t[(0, i.toUtf8String)([227, 129, 163])] = (0, i.toUtf8String)([227, 129, 164])),
                      (t[(0, i.toUtf8String)([227, 130, 131])] = (0, i.toUtf8String)([227, 130, 132])),
                      (t[(0, i.toUtf8String)([227, 130, 135])] = (0, i.toUtf8String)([227, 130, 136]));
                    for (var o = 3; o <= 9; o++)
                      for (var r = s[o - 3], n = 0; n < r.length; n += o) {
                        for (var a = [], d = 0; d < o; d++) {
                          var p = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt".indexOf(
                            r[n + d]
                          );
                          a.push(227), a.push(64 & p ? 130 : 129), a.push(128 + (63 & p));
                        }
                        u.push((0, i.toUtf8String)(a));
                      }
                    if (
                      (u.sort(function (e, t) {
                        return (e = m(e)) < (t = m(t)) ? -1 : e > t ? 1 : 0;
                      }),
                      "0xe3818de38284e3818f" === c(u[442]) && "0xe3818de38283e3818f" === c(u[443]))
                    ) {
                      var f = u[442];
                      (u[442] = u[443]), (u[443] = f);
                    }
                    if ("0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600" !== l.Wordlist.check(e))
                      throw ((u = null), new Error("BIP39 Wordlist for ja (Japanese) FAILED"));
                  }
                  function m(e) {
                    for (var o = "", r = 0; r < e.length; r++) {
                      var n = e[r],
                        a = t[n];
                      !1 !== a && (a && (n = a), (o += n));
                    }
                    return o;
                  }
                }
                var p = new ((function (e) {
                  function t() {
                    return e.call(this, "ja") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return d(this), u[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return d(this), u.indexOf(e);
                    }),
                    (t.prototype.split = function (e) {
                      return l.logger.checkNormalize(), e.split(/(?:\u3000| )+/g);
                    }),
                    (t.prototype.join = function (e) {
                      return e.join("　");
                    }),
                    t
                  );
                })(l.Wordlist))();
                (o.langJa = p), l.Wordlist.register(p);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-ja.js" }
    ],
    [
      5390,
      { "./confusable.component": 5389 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./confusable.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/confusable/index.js" }
    ],
    [
      5391,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../box/box": 5372,
        "../identicon": 5430,
        "../tooltip/tooltip": 5503,
        "../typography/typography": 5507,
        "@metamask/etherscan-link": 1370,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = g);
                var r = m(e("react")),
                  n = m(e("prop-types")),
                  a = e("@metamask/etherscan-link"),
                  i = m(e("../box/box")),
                  l = m(e("../tooltip/tooltip")),
                  s = e("../../../hooks/useI18nContext"),
                  u = m(e("../identicon")),
                  c = m(e("../typography/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../hooks/useCopyToClipboard"),
                  f = e("../../component-library");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g({ address: e, tokenName: t, chainId: o, rpcPrefs: n }) {
                  const m = (0, s.useI18nContext)(),
                    [g, h] = (0, p.useCopyToClipboard)();
                  return r.default.createElement(
                    i.default,
                    {
                      className: "contract-token-values",
                      display: d.DISPLAY.FLEX,
                      alignItems: d.AlignItems.center,
                      justifyContent: d.JustifyContent.center,
                      gap: 2
                    },
                    r.default.createElement(u.default, { address: e, diameter: 24 }),
                    r.default.createElement(
                      c.default,
                      {
                        variant: d.TypographyVariant.H2,
                        fontWeight: d.FONT_WEIGHT.BOLD,
                        color: d.TextColor.textAlternative,
                        marginTop: 0,
                        marginBottom: 0
                      },
                      t
                    ),
                    r.default.createElement(
                      l.default,
                      { position: "top", title: m(g ? "copiedExclamation" : "copyToClipboard") },
                      r.default.createElement(f.ButtonIcon, {
                        iconName: g ? f.IconName.CopySuccess : f.IconName.Copy,
                        color: d.Color.iconMuted,
                        onClick: () => h(e),
                        ariaLabel: m(g ? "copiedExclamation" : "copyToClipboard")
                      })
                    ),
                    r.default.createElement(
                      l.default,
                      { position: "top", title: m("openInBlockExplorer") },
                      r.default.createElement(f.ButtonIcon, {
                        display: d.DISPLAY.FLEX,
                        iconName: f.IconName.Export,
                        color: d.Color.iconMuted,
                        onClick: () => {
                          const t = (0, a.getAccountLink)(
                            e,
                            o,
                            { blockExplorerUrl: (null == n ? void 0 : n.blockExplorerUrl) ?? null },
                            null
                          );
                          global.platform.openTab({ url: t });
                        },
                        ariaLabel: m("openInBlockExplorer")
                      })
                    )
                  );
                }
                g.propTypes = {
                  address: n.default.string,
                  tokenName: n.default.string,
                  chainId: n.default.string,
                  rpcPrefs: n.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/contract-token-values/contract-token-values.js" }
    ],
    [
      5392,
      {
        "../../../../shared/constants/common": 4751,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useCurrencyDisplay": 5596,
        "../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = c(e("react")),
                  n = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../../hooks/useCurrencyDisplay"),
                  l = e("../../../../shared/constants/common"),
                  s = e("../../component-library"),
                  u = e("../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  value: e,
                  displayValue: t,
                  "data-testid": o,
                  style: n,
                  className: l,
                  prefix: c,
                  prefixComponent: p,
                  hideLabel: f,
                  hideTitle: m,
                  numberOfDecimals: g,
                  denomination: h,
                  currency: b,
                  suffix: v,
                  prefixComponentWrapperProps: y = {},
                  textProps: T = {},
                  suffixProps: C = {},
                  ...k
                }) {
                  const [M, S] = (0, i.useCurrencyDisplay)(e, {
                    displayValue: t,
                    prefix: c,
                    numberOfDecimals: g,
                    hideLabel: f,
                    denomination: h,
                    currency: b,
                    suffix: v
                  });
                  return r.default.createElement(
                    s.Box,
                    d(
                      {
                        className: (0, a.default)("currency-display-component", l),
                        "data-testid": o,
                        style: n,
                        title: (!m && M) || null,
                        display: u.Display.Flex,
                        alignItems: u.AlignItems.center,
                        flexWrap: u.FlexWrap.Wrap
                      },
                      k
                    ),
                    p
                      ? r.default.createElement(
                          s.Box,
                          d({ className: "currency-display-component__prefix", marginInlineEnd: 1, variant: u.TextVariant.inherit }, y),
                          p
                        )
                      : null,
                    r.default.createElement(
                      s.Text,
                      d({ as: "span", className: "currency-display-component__text", ellipsis: !0, variant: u.TextVariant.inherit }, T),
                      S.prefix,
                      S.value
                    ),
                    S.suffix
                      ? r.default.createElement(
                          s.Text,
                          d(
                            {
                              as: "span",
                              className: "currency-display-component__suffix",
                              marginInlineStart: 1,
                              variant: u.TextVariant.inherit
                            },
                            C
                          ),
                          S.suffix
                        )
                      : null
                  );
                }
                p.propTypes = {
                  className: n.default.string,
                  currency: n.default.string,
                  "data-testid": n.default.string,
                  denomination: n.default.oneOf([l.EtherDenomination.GWEI, l.EtherDenomination.ETH]),
                  displayValue: n.default.string,
                  hideLabel: n.default.bool,
                  hideTitle: n.default.bool,
                  numberOfDecimals: n.default.oneOfType([n.default.string, n.default.number]),
                  prefix: n.default.string,
                  prefixComponent: n.default.node,
                  style: n.default.object,
                  suffix: n.default.oneOfType([n.default.string, n.default.bool]),
                  value: n.default.string,
                  prefixComponentWrapperProps: n.default.object,
                  textProps: n.default.object,
                  suffixProps: n.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/currency-display/currency-display.component.js" }
    ],
    [
      5393,
      { "./currency-display.component": 5392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./currency-display.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/currency-display/index.js" }
    ],
    [
      5394,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../tooltip": 5502,
        "../typography": 5506,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = f);
                var r = c(e("react")),
                  n = c(e("prop-types")),
                  a = e("lodash"),
                  i = c(e("../typography")),
                  l = e("../../../helpers/constants/design-system"),
                  s = c(e("../tooltip")),
                  u = e("../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
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
                  definitionTypography: o = {},
                  tooltips: n = {},
                  gapSize: a = l.Size.SM
                }) {
                  return r.default.createElement(
                    "dl",
                    { className: "definition-list" },
                    Object.entries(e).map(([e, c]) =>
                      r.default.createElement(
                        r.default.Fragment,
                        { key: `definition-for-${e}` },
                        r.default.createElement(
                          i.default,
                          d({ variant: l.TypographyVariant.H6, fontWeight: l.FONT_WEIGHT.BOLD }, t, {
                            boxProps: { marginTop: 0, marginBottom: 1 },
                            className: "definition-list__term",
                            as: "dt"
                          }),
                          e,
                          n[e] &&
                            r.default.createElement(
                              s.default,
                              { title: n[e], position: "top", containerClassName: "definition-list__tooltip-wrapper" },
                              r.default.createElement(u.Icon, {
                                name: u.IconName.Info,
                                size: u.IconSize.Sm,
                                marginLeft: 1,
                                color: l.IconColor.iconDefault
                              })
                            )
                        ),
                        r.default.createElement(
                          i.default,
                          d({ variant: l.TypographyVariant.H6, color: l.TextColor.textAlternative }, o, {
                            boxProps: { marginTop: 0, marginBottom: p[a] },
                            className: "definition-list__definition",
                            overflowWrap: l.OVERFLOW_WRAP.BREAK_WORD,
                            as: "dd"
                          }),
                          c
                        )
                      )
                    )
                  );
                }
                f.propTypes = {
                  gapSize: n.default.oneOf(Object.values(l.Size)),
                  dictionary: n.default.objectOf(n.default.oneOfType([n.default.string, n.default.number])),
                  tooltips: n.default.objectOf(n.default.string),
                  termTypography: n.default.shape({ ...(0, a.omit)(l.TypographyVariant.propTypes, ["tag", "className", "boxProps"]) }),
                  definitionTypography: n.default.shape({ ...(0, a.omit)(l.TypographyVariant.propTypes, ["tag", "className", "boxProps"]) })
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/definition-list/definition-list.js" }
    ],
    [
      5395,
      { "./definition-list": 5394 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./definition-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/definition-list/index.js" }
    ],
    [
      5396,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  (o.default = function () {
                    const e = (0, n.useSelector)(l.getCurrentChainId),
                      [t, o] = (0, r.useState)(!1),
                      c = (0, n.useSelector)(s.getCompletedOnboarding),
                      d = (0, a.useI18nContext)();
                    return (
                      (0, r.useEffect)(() => {
                        o(!(!c || ("0x3" !== e && "0x2a" !== e && "0x4" !== e)));
                      }, [e, c]),
                      t &&
                        r.default.createElement(u.BannerAlert, {
                          severity: i.Severity.Warning,
                          className: "deprecated-test-networks",
                          description: d("deprecatedTestNetworksMsg"),
                          onClose: () => o(!1),
                          margin: 2,
                          actionButtonLabel: d("deprecatedTestNetworksLink"),
                          actionButtonProps: {
                            className: "deprecated-test-networks__content__inline-link",
                            href: "https://blog.ethereum.org/2022/06/21/testnet-deprecation/",
                            variant: u.BUTTON_VARIANT.LINK,
                            externalLink: !0
                          }
                        })
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("../../../hooks/useI18nContext"),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../selectors"),
                  s = e("../../../ducks/metamask/metamask"),
                  u = e("../../component-library");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/deprecated-test-networks/deprecated-test-networks.js" }
    ],
    [
      5397,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = l);
                var r = i(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  const { children: t, type: o, className: n, onClick: i } = e;
                  return r.default.createElement(
                    "div",
                    {
                      className: (0, a.default)("dialog", n, {
                        "dialog--message": "message" === o,
                        "dialog--error": "error" === o,
                        "dialog--warning": "warning" === o
                      }),
                      "data-testid": "dialog-message",
                      onClick: i
                    },
                    t
                  );
                }
                l.propTypes = {
                  className: n.default.string,
                  children: n.default.node,
                  type: n.default.oneOf(["message", "error", "warning"]),
                  onClick: n.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dialog/index.js" }
    ],
    [
      5398,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.DisclosureVariant = void 0);
                o.DisclosureVariant = (function (e) {
                  return (e.Default = "default"), (e.Arrow = "arrow"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/disclosure.constants.ts" }
    ],
    [
      5399,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "./disclosure.constants": 5398,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("./disclosure.constants");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const d = ({ children: e, title: t, size: o, variant: n }) => {
                  const u = (0, r.useRef)(null),
                    [c, d] = (0, r.useState)(!1);
                  return (
                    (0, r.useEffect)(() => {
                      c && u && u.current && u.current.scrollIntoView({ behavior: "smooth" });
                    }, [c]),
                    r.default.createElement(
                      "div",
                      { className: "disclosure", onClick: () => d((e) => !e) },
                      t
                        ? r.default.createElement(
                            "details",
                            null,
                            ((e, t, o) => {
                              if (e === s.DisclosureVariant.Arrow) {
                                const e = "small" === o ? l.TextVariant.bodySm : l.TextVariant.bodyMd;
                                return r.default.createElement(
                                  "summary",
                                  { className: "disclosure__summary is-arrow" },
                                  r.default.createElement(i.Text, { color: l.Color.primaryDefault, variant: e }, t),
                                  r.default.createElement(i.Icon, {
                                    className: "disclosure__summary--icon",
                                    color: l.Color.primaryDefault,
                                    name: i.IconName.ArrowUp,
                                    size: i.IconSize.Sm,
                                    marginInlineStart: 2
                                  })
                                );
                              }
                              return r.default.createElement(
                                "summary",
                                { className: "disclosure__summary" },
                                r.default.createElement(i.Icon, {
                                  className: "disclosure__summary--icon",
                                  name: i.IconName.Add,
                                  size: i.IconSize.Sm,
                                  marginInlineEnd: 2
                                }),
                                t
                              );
                            })(n, t),
                            r.default.createElement("div", { className: (0, a.default)("disclosure__content", o) }, e),
                            r.default.createElement("div", { ref: u, className: "disclosure__footer" })
                          )
                        : e
                    )
                  );
                };
                (d.propTypes = {
                  children: n.default.node.isRequired,
                  size: n.default.string,
                  title: n.default.string,
                  variant: n.default.string
                }),
                  (d.defaultProps = { size: "normal", title: null, variant: s.DisclosureVariant.Default });
                o.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/disclosure.js" }
    ],
    [
      540,
      { "./wordlist": 542, "@ethersproject/strings": 521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langKo = void 0);
                var a = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  l = [
                    "OYAa",
                    "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8",
                    "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6",
                    "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv",
                    "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo",
                    "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg",
                    "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb",
                    "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"
                  ];
                var s = null;
                function u(e) {
                  if (
                    null == s &&
                    ((s = []),
                    l.forEach(function (e, t) {
                      t += 4;
                      for (var o = 0; o < e.length; o += t) {
                        for (var r = "", n = 0; n < t; n++)
                          r +=
                            ((i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*".indexOf(e[o + n])) >= 40
                              ? (i = i + 168 - 40)
                              : i >= 19 && (i = i + 97 - 19),
                            (0, a.toUtf8String)([225, 132 + (i >> 6), 128 + (63 & i)]));
                        s.push(r);
                      }
                      var i;
                    }),
                    s.sort(),
                    "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a" !== i.Wordlist.check(e))
                  )
                    throw ((s = null), new Error("BIP39 Wordlist for ko (Korean) FAILED"));
                }
                var c = new ((function (e) {
                  function t() {
                    return e.call(this, "ko") || this;
                  }
                  return (
                    n(t, e),
                    (t.prototype.getWord = function (e) {
                      return u(this), s[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return u(this), s.indexOf(e);
                    }),
                    t
                  );
                })(i.Wordlist))();
                (o.langKo = c), i.Wordlist.register(c);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-ko.js" }
    ],
    [
      5400,
      { "./disclosure": 5399 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./disclosure")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/disclosure/index.js" }
    ],
    [
      5401,
      { "../../component-library": 5242, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = l(e("prop-types")),
                  a = l(e("classnames")),
                  i = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const u = ({
                  className: e,
                  disabled: t = !1,
                  onChange: o,
                  options: n,
                  selectedOption: l = "",
                  style: s,
                  title: u,
                  "data-testid": c
                }) => {
                  const d = (0, r.useCallback)(
                    (e) => {
                      e.preventDefault(), e.stopPropagation(), o(e.target.value);
                    },
                    [o]
                  );
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)("dropdown", e) },
                    r.default.createElement(
                      "select",
                      { className: "dropdown__select", "data-testid": c, disabled: t, title: u, onChange: d, style: s, value: l },
                      n.map((e) => r.default.createElement("option", { key: e.value, value: e.value }, e.name || e.value))
                    ),
                    r.default.createElement(i.Icon, {
                      name: i.IconName.ArrowDown,
                      size: i.IconSize.Sm,
                      className: "dropdown__icon-caret-down"
                    })
                  );
                };
                u.propTypes = {
                  className: n.default.string,
                  disabled: n.default.bool,
                  title: n.default.string,
                  onChange: n.default.func.isRequired,
                  options: n.default.arrayOf(n.default.exact({ name: n.default.string, value: n.default.string.isRequired })).isRequired,
                  selectedOption: n.default.string,
                  style: n.default.object,
                  "data-testid": n.default.string
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dropdown/dropdown.js" }
    ],
    [
      5402,
      { "./dropdown": 5401 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./dropdown")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/dropdown/index.js" }
    ],
    [
      5403,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/accounts": 5557,
        "../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = u(e("classnames")),
                  a = u(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../helpers/utils/accounts"),
                  s = e("../../component-library");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function d(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class p extends r.Component {
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
                    return r.default.createElement(
                      s.Box,
                      { className: (0, n.default)("editable-label", this.props.className), display: i.Display.Flex, gap: 3 },
                      r.default.createElement(s.FormTextField, {
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
                      r.default.createElement(s.ButtonIcon, { iconName: s.IconName.Check, onClick: () => this.handleSubmit(e) })
                    );
                  }
                  renderReadonly() {
                    return r.default.createElement(
                      s.Box,
                      { display: i.Display.Flex, alignItems: i.AlignItems.center, gap: 3 },
                      r.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodyLgMedium, style: { wordBreak: "break-word" } },
                        this.state.value
                      ),
                      r.default.createElement(s.ButtonIcon, {
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
                (o.default = p),
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
      5404,
      { "../../../helpers/constants/design-system": 5537, "../../component-library": 5242, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = l(e("react")),
                  n = l(e("prop-types")),
                  a = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const s = (e, t) => {
                  const { errorMessage: o, errorKey: n } = e,
                    l = n ? t.t(n) : o;
                  return r.default.createElement(
                    "div",
                    { className: "error-message" },
                    r.default.createElement(a.Icon, {
                      className: "error-message__icon",
                      name: a.IconName.Warning,
                      size: a.IconSize.Sm,
                      color: i.IconColor.errorDefault,
                      marginRight: 2
                    }),
                    r.default.createElement("div", { className: "error-message__text" }, l)
                  );
                };
                (s.propTypes = { errorMessage: n.default.string, errorKey: n.default.string }), (s.contextTypes = { t: n.default.func });
                o.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/error-message/error-message.component.js" }
    ],
    [
      5405,
      { "./error-message.component": 5404 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./error-message.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/error-message/index.js" }
    ],
    [
      5406,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = u(e("react")),
                  n = u(e("prop-types")),
                  a = e("../../../hooks/useI18nContext"),
                  i = e("../../../hooks/useCopyToClipboard"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ text: e = "", onClickCopy: t = null }) {
                  const o = (0, a.useI18nContext)(),
                    [n, u] = (0, i.useCopyToClipboard)(6e4);
                  return r.default.createElement(
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
                    r.default.createElement(
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
                    r.default.createElement(
                      s.ButtonSecondary,
                      {
                        className: "export-text-container__button",
                        block: !0,
                        onClick: () => {
                          t && t(), u(e);
                        }
                      },
                      o(n ? "copiedExclamation" : "copyToClipboard")
                    )
                  );
                }
                c.propTypes = { text: n.default.string, onClickCopy: n.default.func };
                o.default = r.default.memo(c);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/export-text-container/export-text-container.component.js" }
    ],
    [
      5407,
      { "./export-text-container.component": 5406 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./export-text-container.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/export-text-container/index.js" }
    ],
    [
      5408,
      {
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  (o.default = function ({
                    maxDropdownHeight: e,
                    noOptionsText: t,
                    onChange: o,
                    onOptionClick: r,
                    options: u,
                    placeholder: c,
                    value: p
                  }) {
                    const [f, m] = (0, n.useState)(!1),
                      g = (0, n.useRef)(),
                      [h, b] = (0, n.useState)(0),
                      v = (0, n.useRef)(null),
                      y = (0, n.useContext)(l.I18nContext);
                    (0, n.useEffect)(() => {
                      var e;
                      b(null === (e = g.current) || void 0 === e ? void 0 : e.offsetWidth);
                    });
                    const T = (0, n.useCallback)(
                        (e) => {
                          var t;
                          "form-combo-field__option" !==
                            (null == e || null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.className) && m(!1);
                        },
                        [m]
                      ),
                      C = (0, n.useCallback)(
                        (e) => {
                          null == o || o(e.target.value);
                        },
                        [o]
                      ),
                      k = (0, n.useCallback)(
                        (e) => {
                          var t;
                          m(!1),
                            e && (C({ target: { value: e.primaryLabel } }), null == r || r(e)),
                            null === (t = v.current) || void 0 === t || t.focus();
                        },
                        [m, C]
                      ),
                      M = (0, n.useCallback)(() => {
                        var e;
                        C({ target: { value: "" } }), null === (e = v.current) || void 0 === e || e.focus();
                      }, [C]);
                    return n.default.createElement(
                      "div",
                      { className: "form-combo-field", ref: g },
                      n.default.createElement(
                        "div",
                        {
                          onClick: () => {
                            m(!0);
                          }
                        },
                        n.default.createElement(i.FormTextField, {
                          autoFocus: !0,
                          inputRef: v,
                          placeholder: c,
                          onBlur: T,
                          onKeyUp: (e) => {
                            "Enter" === e.key && T();
                          },
                          value: p,
                          onChange: C,
                          className: (0, a.default)({ "form-combo-field__value": !0, "form-combo-field__value-dropdown-visible": f }),
                          endAccessory: n.default.createElement(i.ButtonIcon, {
                            display: s.Display.Flex,
                            iconName: i.IconName.Close,
                            size: i.ButtonIconSize.Sm,
                            onClick: () => M(),
                            color: s.IconColor.iconMuted,
                            ariaLabel: y("clear")
                          })
                        })
                      ),
                      f && n.default.createElement(d, { maxDropdownHeight: e, noOptionsText: t, onOptionClick: k, options: u, width: h })
                    );
                  });
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../component-library"),
                  l = e("../../../contexts/i18n"),
                  s = e("../../../helpers/constants/design-system");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function c({ option: e, onClick: t }) {
                  const o = (0, n.useCallback)(
                      (o) => {
                        o.preventDefault(), o.stopPropagation(), o.nativeEvent.stopImmediatePropagation(), t(e);
                      },
                      [t, e]
                    ),
                    { primaryLabel: r, secondaryLabel: a } = e;
                  return n.default.createElement(
                    "div",
                    { tabIndex: 0, className: "form-combo-field__option", onClick: o },
                    n.default.createElement("span", { className: "form-combo-field__option-primary" }, r),
                    a ? n.default.createElement("span", { className: "form-combo-field__option-secondary" }, a) : null
                  );
                }
                function d({ maxDropdownHeight: e, noOptionsText: t, onOptionClick: o, options: r, width: i }) {
                  const s = (0, n.useContext)(l.I18nContext),
                    u = (0, n.useRef)(),
                    d = e ?? 179,
                    [p, f] = (0, n.useState)(0);
                  return (
                    (0, n.useEffect)(() => {
                      var e;
                      f((null === (e = u.current) || void 0 === e ? void 0 : e.scrollHeight) ?? 0);
                    }),
                    n.default.createElement(
                      "div",
                      {
                        ref: u,
                        style: { width: i, maxHeight: d },
                        className: (0, a.default)({ "form-combo-field__dropdown": !0, "form-combo-field__dropdown__scroll": p > d })
                      },
                      0 === r.length &&
                        n.default.createElement(c, { option: { primaryLabel: t ?? s("comboNoOptions") }, onClick: () => o(undefined) }),
                      r.map((e, t) =>
                        n.default.createElement(c, {
                          key: t,
                          option: e,
                          onClick: () => {
                            o(e);
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
      5409,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../info-tooltip/info-tooltip": 5433,
        "../numeric-input/numeric-input.component": 5457,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = c(e("react")),
                  n = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = c(e("../numeric-input/numeric-input.component")),
                  s = c(e("../info-tooltip/info-tooltip")),
                  u = e("../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p({
                  dataTestId: e,
                  titleText: t = "",
                  TitleTextCustomComponent: o,
                  titleUnit: n = "",
                  TitleUnitCustomComponent: c,
                  tooltipText: p = "",
                  TooltipCustomComponent: f,
                  titleDetail: m = "",
                  titleDetailWrapperProps: g,
                  titleHeadingWrapperProps: h,
                  error: b,
                  onChange: v = undefined,
                  value: y = 0,
                  numeric: T,
                  detailText: C = "",
                  autoFocus: k = !1,
                  password: M = !1,
                  allowDecimals: S = !1,
                  disabled: A = !1,
                  placeholder: O,
                  warning: E,
                  passwordStrength: P,
                  passwordStrengthText: _,
                  id: w,
                  inputProps: B,
                  wrappingLabelProps: L,
                  inputRef: F
                }) {
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)("form-field", { "form-field__row--error": b }) },
                    r.default.createElement(
                      u.Box,
                      d({ as: "label" }, L),
                      r.default.createElement(
                        "div",
                        { className: "form-field__heading" },
                        r.default.createElement(
                          u.Box,
                          d({ className: "form-field__heading-title", display: i.Display.Flex, alignItems: i.AlignItems.baseline }, h),
                          o ||
                            (t &&
                              r.default.createElement(
                                u.Text,
                                { as: "h6", variant: i.TextVariant.bodySmBold, display: i.Display.InlineBlock },
                                t
                              )),
                          c ||
                            (n &&
                              r.default.createElement(
                                u.Text,
                                {
                                  as: "h6",
                                  variant: i.TextVariant.bodySm,
                                  color: i.TextColor.textAlternative,
                                  display: i.Display.InlineBlock
                                },
                                n
                              )),
                          f || (p && r.default.createElement(s.default, { position: "top", contentText: p }))
                        ),
                        m &&
                          r.default.createElement(
                            u.Box,
                            d({ className: "form-field__heading-detail", textAlign: i.TextAlign.End, marginRight: 2 }, g),
                            m
                          )
                      ),
                      T
                        ? r.default.createElement(l.default, {
                            error: b,
                            onChange: v,
                            value: y,
                            detailText: C,
                            autoFocus: k,
                            allowDecimals: S,
                            disabled: A,
                            dataTestId: e,
                            placeholder: O,
                            id: w,
                            inputRef: F
                          })
                        : r.default.createElement(
                            "input",
                            d(
                              {
                                className: (0, a.default)("form-field__input", {
                                  "form-field__input--error": b,
                                  "form-field__input--warning": E
                                }),
                                onChange: (e) => v(e.target.value),
                                value: y,
                                type: M ? "password" : "text",
                                autoFocus: k,
                                disabled: A,
                                "data-testid": e,
                                placeholder: O,
                                id: w,
                                ref: F
                              },
                              B
                            )
                          ),
                      b &&
                        r.default.createElement(
                          u.Text,
                          { color: i.TextColor.errorDefault, variant: i.TextVariant.bodySm, as: "h6", className: "form-field__error" },
                          b
                        ),
                      E &&
                        r.default.createElement(
                          u.Text,
                          { color: i.TextColor.textAlternative, variant: i.TextVariant.bodySm, as: "h6", className: "form-field__warning" },
                          E
                        ),
                      P &&
                        r.default.createElement(
                          u.Text,
                          {
                            color: i.TextColor.textDefault,
                            variant: i.TextVariant.bodySm,
                            as: "h6",
                            className: "form-field__password-strength"
                          },
                          P
                        ),
                      _ &&
                        r.default.createElement(
                          u.Text,
                          {
                            color: i.TextColor.textAlternative,
                            variant: i.TextVariant.bodyXs,
                            as: "h6",
                            className: "form-field__password-strength-text"
                          },
                          _
                        )
                    )
                  );
                }
                p.propTypes = {
                  dataTestId: n.default.string,
                  titleText: n.default.oneOfType([n.default.string, n.default.node]),
                  TitleTextCustomComponent: n.default.node,
                  titleUnit: n.default.string,
                  TitleUnitCustomComponent: n.default.node,
                  tooltipText: n.default.oneOfType([n.default.string, n.default.node]),
                  TooltipCustomComponent: n.default.node,
                  titleDetail: n.default.oneOfType([n.default.string, n.default.node]),
                  titleDetailWrapperProps: n.default.shape({ ...u.Box.propTypes }),
                  titleHeadingWrapperProps: n.default.shape({ ...u.Box.propTypes }),
                  error: n.default.string,
                  warning: n.default.string,
                  onChange: n.default.func,
                  value: n.default.oneOfType([n.default.number, n.default.string]),
                  detailText: n.default.string,
                  autoFocus: n.default.bool,
                  numeric: n.default.bool,
                  password: n.default.bool,
                  allowDecimals: n.default.bool,
                  disabled: n.default.bool,
                  placeholder: n.default.string,
                  passwordStrength: n.default.oneOfType([n.default.string, n.default.node]),
                  passwordStrengthText: n.default.string,
                  id: n.default.string,
                  inputProps: n.default.object,
                  wrappingLabelProps: n.default.object,
                  inputRef: n.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/form-field/form-field.js" }
    ],
    [
      541,
      { "./wordlist": 542, "@ethersproject/strings": 521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                var r,
                  n =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function o() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
                    });
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.langZhTw = o.langZhCn = void 0);
                var a = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  l =
                    "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH",
                  s = { zh_cn: null, zh_tw: null },
                  u = {
                    zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1",
                    zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d"
                  },
                  c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                function d(e) {
                  if (null === s[e.locale]) {
                    s[e.locale] = [];
                    for (var t = 0, o = 0; o < 2048; o++) {
                      var r = "~!@#$%^&*_-=[]{}|;:,.()<>?".indexOf(l[3 * o]),
                        n = [228 + (r >> 2), 128 + c.indexOf(l[3 * o + 1]), 128 + c.indexOf(l[3 * o + 2])];
                      if ("zh_tw" === e.locale)
                        for (var d = r % 4; d < 3; d++)
                          n[d] =
                            c.indexOf(
                              "FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL"[
                                t++
                              ]
                            ) + (0 == d ? 228 : 128);
                      s[e.locale].push((0, a.toUtf8String)(n));
                    }
                    if (i.Wordlist.check(e) !== u[e.locale])
                      throw ((s[e.locale] = null), new Error("BIP39 Wordlist for " + e.locale + " (Chinese) FAILED"));
                  }
                }
                var p = (function (e) {
                    function t(t) {
                      return e.call(this, "zh_" + t) || this;
                    }
                    return (
                      n(t, e),
                      (t.prototype.getWord = function (e) {
                        return d(this), s[this.locale][e];
                      }),
                      (t.prototype.getWordIndex = function (e) {
                        return d(this), s[this.locale].indexOf(e);
                      }),
                      (t.prototype.split = function (e) {
                        return (e = e.replace(/(?:\u3000| )+/g, "")).split("");
                      }),
                      t
                    );
                  })(i.Wordlist),
                  f = new p("cn");
                (o.langZhCn = f), i.Wordlist.register(f), i.Wordlist.register(f, "zh");
                var m = new p("tw");
                (o.langZhTw = m), i.Wordlist.register(m);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-zh.js" }
    ],
    [
      5410,
      { "./form-field": 5409 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./form-field")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/form-field/index.js" }
    ],
    [
      5411,
      { "../../../../shared/modules/conversion.utils": 4784, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../../shared/modules/conversion.utils");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                class s extends n.PureComponent {
                  render() {
                    const { className: e, value: t } = this.props,
                      o = (0, i.hexToDecimal)(t);
                    return n.default.createElement("div", { className: e }, o);
                  }
                }
                (o.default = s),
                  (function (e, t, o) {
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o);
                  })(s, "propTypes", { className: a.default.string, value: a.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/hex-to-decimal/hex-to-decimal.component.js" }
    ],
    [
      5412,
      { "./hex-to-decimal.component": 5411 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./hex-to-decimal.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/hex-to-decimal/index.js" }
    ],
    [
      5413,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = l);
                var r = i(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l({ children: e, size: t, className: o }) {
                  const n = { height: `${t}px`, width: `${t}px` };
                  return r.default.createElement("div", { className: (0, a.default)("icon-border", o), style: n }, e);
                }
                l.propTypes = { className: n.default.string, children: n.default.node.isRequired, size: n.default.number.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-border/icon-border.js" }
    ],
    [
      5414,
      { "./icon-border": 5413 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./icon-border")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-border/index.js" }
    ],
    [
      5415,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../tooltip/tooltip": 5503,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = d);
                var r = u(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = u(e("../tooltip/tooltip"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (e) => e;
                function d({ onClick: e, Icon: t, disabled: o, label: n, tooltipRender: u, className: d, ...p }) {
                  const f = u ?? c;
                  return r.default.createElement(
                    "button",
                    {
                      className: (0, a.default)("icon-button", d, { "icon-button--disabled": o }),
                      "data-testid": p["data-testid"] ?? undefined,
                      onClick: e,
                      disabled: o
                    },
                    f(
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement("div", { className: "icon-button__circle" }, t),
                        n.length > 10
                          ? r.default.createElement(
                              s.default,
                              { title: n, position: "bottom" },
                              r.default.createElement(
                                i.Text,
                                { className: "icon-button__label-large", ellipsis: !0, variant: l.TextVariant.bodySm },
                                n
                              )
                            )
                          : r.default.createElement(
                              i.Text,
                              { className: "icon-button__label", ellipsis: !0, variant: l.TextVariant.bodySm },
                              n
                            )
                      )
                    )
                  );
                }
                d.propTypes = {
                  onClick: n.default.func.isRequired,
                  Icon: n.default.object.isRequired,
                  disabled: n.default.bool,
                  label: n.default.string.isRequired,
                  tooltipRender: n.default.func,
                  className: n.default.string,
                  "data-testid": n.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-button/icon-button.js" }
    ],
    [
      5416,
      { "./icon-button": 5415 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./icon-button")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-button/index.js" }
    ],
    [
      5417,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const u = ({ name: e = "", icon: t = null, size: o, className: n, fallbackClassName: i, wrapperClassName: l, ...u }) => {
                  const [c, d] = (0, r.useState)(!1),
                    p = o ? { height: `${o}px`, width: `${o}px` } : {};
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)(l) },
                    !c && t
                      ? r.default.createElement(
                          "img",
                          s(
                            {
                              onError: () => {
                                d(!0);
                              },
                              src: t,
                              style: p,
                              className: n,
                              alt: e || "icon"
                            },
                            u
                          )
                        )
                      : r.default.createElement(
                          "span",
                          { className: (0, a.default)("icon-with-fallback__fallback", i) },
                          (null == e ? void 0 : e.charAt(0).toUpperCase()) || ""
                        )
                  );
                };
                u.propTypes = {
                  icon: n.default.string,
                  name: n.default.string,
                  size: n.default.number,
                  className: n.default.string,
                  wrapperClassName: n.default.string,
                  fallbackClassName: n.default.string
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-with-fallback/icon-with-fallback.component.js" }
    ],
    [
      5418,
      { "./icon-with-fallback.component": 5417 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./icon-with-fallback.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon-with-fallback/index.js" }
    ],
    [
      5419,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: o, className: n }) =>
                  r.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: n,
                      "aria-label": o,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 640 512"
                    },
                    r.default.createElement("path", {
                      d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
                    })
                  );
                i.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/icon-eye-slash.js" }
    ],
    [
      542,
      { "./_version": 532, "@ethersproject/hash": 461, "@ethersproject/logger": 477, "@ethersproject/properties": 483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.Wordlist = o.logger = void 0);
                var r = e("@ethersproject/hash"),
                  n = e("@ethersproject/properties"),
                  a = e("@ethersproject/logger"),
                  i = e("./_version");
                o.logger = new a.Logger(i.version);
                var l = (function () {
                  function e(t) {
                    var r = this.constructor;
                    o.logger.checkAbstract(r, e), (0, n.defineReadOnly)(this, "locale", t);
                  }
                  return (
                    (e.prototype.split = function (e) {
                      return e.toLowerCase().split(/ +/g);
                    }),
                    (e.prototype.join = function (e) {
                      return e.join(" ");
                    }),
                    (e.check = function (e) {
                      for (var t = [], o = 0; o < 2048; o++) {
                        var n = e.getWord(o);
                        if (o !== e.getWordIndex(n)) return "0x";
                        t.push(n);
                      }
                      return (0, r.id)(t.join("\n") + "\n");
                    }),
                    (e.register = function (e, t) {
                      t || (t = e.locale);
                    }),
                    e
                  );
                })();
                o.Wordlist = l;
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/wordlist.js" }
    ],
    [
      5420,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: o, className: n }) =>
                  r.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: n,
                      "aria-label": o,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 576 512"
                    },
                    r.default.createElement("path", {
                      d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                    })
                  );
                i.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/icon-eye.js" }
    ],
    [
      5421,
      { "../../../helpers/constants/design-system": 5537, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = s);
                var r = l(e("react")),
                  n = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ severity: e }) {
                  const t = (0, n.default)("info-icon", {
                    "info-icon--success": e === i.SEVERITIES.SUCCESS,
                    "info-icon--warning": e === i.SEVERITIES.WARNING,
                    "info-icon--danger": e === i.SEVERITIES.DANGER,
                    "info-icon--info": e === i.SEVERITIES.INFO
                  });
                  return r.default.createElement(
                    "svg",
                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
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
      5422,
      { "../../../helpers/constants/design-system": 5537, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = s);
                var r = l(e("react")),
                  n = l(e("classnames")),
                  a = l(e("prop-types")),
                  i = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ severity: e }) {
                  const t = (0, n.default)("info-icon", {
                    "info-icon--success": e === i.SEVERITIES.SUCCESS,
                    "info-icon--warning": e === i.SEVERITIES.WARNING,
                    "info-icon--danger": e === i.SEVERITIES.DANGER,
                    "info-icon--info": e === i.SEVERITIES.INFO
                  });
                  return r.default.createElement(
                    "svg",
                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
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
      5423,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = i(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ className: e, size: t }) =>
                  r.default.createElement(
                    "svg",
                    {
                      className: (0, a.default)("preloader__icon", e),
                      width: t,
                      height: t,
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    r.default.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",
                      fill: "#C1DAEC"
                    }),
                    r.default.createElement(
                      "mask",
                      { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "16", height: "16" },
                      r.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",
                        fill: "#037DD6"
                      })
                    ),
                    r.default.createElement(
                      "g",
                      { mask: "url(#mask0)" },
                      r.default.createElement("path", { d: "M6.85718 17.9999V11.4285V8.28564H-4.85711V17.9999H6.85718Z", fill: "#037DD6" })
                    )
                  );
                (l.defaultProps = { className: undefined }),
                  (l.propTypes = { className: n.default.string, size: n.default.number.isRequired });
                o.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/preloader/preloader-icon.component.js" }
    ],
    [
      5424,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ size: e = 24, color: t = "currentColor", ariaLabel: o, className: n }) =>
                  r.default.createElement(
                    "svg",
                    {
                      width: e,
                      height: e,
                      fill: t,
                      className: n,
                      "aria-label": o,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512"
                    },
                    r.default.createElement("path", {
                      d: "m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"
                    })
                  );
                i.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/search-icon.js" }
    ],
    [
      5425,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = i);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ reverseColors: e }) {
                  const t = e ? "var(--color-primary-default)" : "var(--color-primary-inverse)",
                    o = e ? "var(--color-primary-inverse)" : "var(--color-primary-default)";
                  return r.default.createElement(
                    "svg",
                    { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
                      d: "M13.2148 9.05384C13.432 8.40203 14.8878 7.92403 14.8878 7.20703C14.8878 6.49003 13.432 6.01204 13.2148 5.36022C12.9975 4.68668 13.8883 3.44823 13.4755 2.88332C13.0627 2.31842 11.607 2.77469 11.0421 2.3836C10.4771 1.97078 10.4771 0.449879 9.80361 0.232608C9.15179 0.0153358 8.26098 1.25378 7.54398 1.25378C6.82698 1.25378 5.91444 0.0153358 5.28435 0.232608C4.61081 0.449879 4.61081 1.99251 4.04591 2.3836C3.481 2.79641 2.02528 2.31842 1.61246 2.88332C1.19965 3.44823 2.09046 4.68668 1.87319 5.36022C1.65592 6.01204 0.200195 6.49003 0.200195 7.20703C0.200195 7.92403 1.65592 8.40203 1.87319 9.05384C2.09046 9.72738 1.19965 10.9658 1.61246 11.5307C2.02528 12.0956 3.481 11.6394 4.04591 12.0305C4.61081 12.4433 4.61081 13.9642 5.28435 14.1815C5.93617 14.3987 6.82698 13.1603 7.54398 13.1603C8.26098 13.1603 9.17352 14.3987 9.80361 14.1815C10.4771 13.9642 10.4771 12.4216 11.0421 12.0305C11.607 11.6176 13.0627 12.0956 13.4755 11.5307C13.8883 10.9658 12.9975 9.70566 13.2148 9.05384Z",
                      fill: t
                    }),
                    r.default.createElement("path", {
                      d: "M6.42285 10.084L4.13965 7.81445C4.07585 7.75065 4.04395 7.66862 4.04395 7.56836C4.04395 7.4681 4.07585 7.38607 4.13965 7.32227L4.64551 6.83008C4.70931 6.75716 4.78678 6.7207 4.87793 6.7207C4.97819 6.7207 5.06478 6.75716 5.1377 6.83008L6.66895 8.36133L9.9502 5.08008C10.0231 5.00716 10.1051 4.9707 10.1963 4.9707C10.2965 4.9707 10.3786 5.00716 10.4424 5.08008L10.9482 5.57227C11.012 5.63607 11.0439 5.7181 11.0439 5.81836C11.0439 5.91862 11.012 6.00065 10.9482 6.06445L6.91504 10.084C6.85124 10.1569 6.76921 10.1934 6.66895 10.1934C6.56868 10.1934 6.48665 10.1569 6.42285 10.084Z",
                      fill: o
                    })
                  );
                }
                i.propTypes = { reverseColors: n.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/icon/sun-check-icon.component.js" }
    ],
    [
      5426,
      { "@download/blockies": 299, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("@download/blockies");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const s = ({ address: e, diameter: t, alt: o = "", borderRadius: r }) => {
                  const [a, l] = (0, n.useState)(null),
                    s = (0, n.useRef)(null);
                  return (
                    (0, n.useEffect)(() => {
                      const t = s.current;
                      (0, i.renderIcon)({ seed: e.toLowerCase() }, t);
                      const o = t.toDataURL();
                      o !== a && l(o);
                    }, [a, e]),
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement("canvas", { ref: s, style: { display: "none" } }),
                      n.default.createElement("img", { src: a, height: t, width: t, style: { borderRadius: r }, alt: o })
                    )
                  );
                };
                s.propTypes = {
                  address: a.default.string.isRequired,
                  diameter: a.default.number.isRequired,
                  alt: a.default.string,
                  borderRadius: a.default.string
                };
                o.default = s;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js" }
    ],
    [
      5427,
      { "./blockieIdenticon.component": 5426 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./blockieIdenticon.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/blockieIdenticon/index.js" }
    ],
    [
      5428,
      {
        "../../../helpers/utils/util": 5578,
        "../jazzicon": 5434,
        "./blockieIdenticon": 5427,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = c(e("prop-types")),
                  a = c(e("classnames")),
                  i = e("lodash"),
                  l = c(e("../jazzicon")),
                  s = e("../../../helpers/utils/util"),
                  u = c(e("./blockieIdenticon"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (d = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function p(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                const f = (e) => ({ height: e, width: e, borderRadius: e / 2 });
                class m extends r.Component {
                  constructor(...e) {
                    super(...e), p(this, "state", { imageLoadingError: !1 });
                  }
                  renderImage() {
                    const { className: e, diameter: t, alt: o, imageBorder: n, ipfsGateway: i } = this.props;
                    let { image: l } = this.props;
                    return (
                      Array.isArray(l) && l.length && (l = l[0]),
                      "string" == typeof l && l.toLowerCase().startsWith("ipfs://") && (l = (0, s.getAssetImageURL)(l, i)),
                      r.default.createElement("img", {
                        className: (0, a.default)("identicon", e, { "identicon__image-border": n }),
                        src: l,
                        style: f(t),
                        alt: o,
                        onError: () => {
                          this.setState({ imageLoadingError: !0 });
                        }
                      })
                    );
                  }
                  renderJazzicon() {
                    const { address: e, className: t, diameter: o, alt: n, tokenList: i } = this.props;
                    return r.default.createElement(l.default, {
                      address: e,
                      diameter: o,
                      className: (0, a.default)("identicon", t),
                      style: f(o),
                      alt: n,
                      tokenList: i
                    });
                  }
                  renderBlockie() {
                    const { address: e, className: t, diameter: o, alt: n } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: (0, a.default)("identicon", t), style: f(o) },
                      r.default.createElement(u.default, { address: e, diameter: o, alt: n })
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
                    const { address: e, image: t, addBorder: o, diameter: n, tokenList: i } = this.props,
                      { imageLoadingError: l } = this.state,
                      s = n + 8;
                    return l
                      ? this.renderBlockieOrJazzIcon()
                      : t
                      ? this.renderImage()
                      : e
                      ? null !== (u = i[e.toLowerCase()]) && void 0 !== u && u.iconUrl
                        ? this.renderJazzicon()
                        : r.default.createElement(
                            "div",
                            { className: (0, a.default)({ "identicon__address-wrapper": o }), style: o ? f(s) : null },
                            this.renderBlockieOrJazzIcon()
                          )
                      : r.default.createElement("div", { style: f(n), className: "identicon__image-border" });
                    var u;
                  }
                }
                (o.default = m),
                  p(m, "propTypes", {
                    addBorder: n.default.bool,
                    address: n.default.string,
                    className: n.default.string,
                    diameter: n.default.number,
                    image: n.default.oneOfType([n.default.string, n.default.array]),
                    useBlockie: n.default.bool,
                    alt: n.default.string,
                    imageBorder: n.default.bool,
                    tokenList: n.default.object,
                    ipfsGateway: n.default.string
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
      5429,
      { "../../../selectors": 5958, "./identicon.component": 5428, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = e("react-redux"),
                  a = e("../../../selectors"),
                  i = (r = e("./identicon.component")) && r.__esModule ? r : { default: r };
                o.default = (0, n.connect)((e) => {
                  const {
                    metamask: { useBlockie: t, ipfsGateway: o }
                  } = e;
                  return { useBlockie: t, tokenList: (0, a.getTokenList)(e), ipfsGateway: o };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/identicon.container.js" }
    ],
    [
      543,
      {
        "./lang-cz": 534,
        "./lang-en": 535,
        "./lang-es": 536,
        "./lang-fr": 537,
        "./lang-it": 538,
        "./lang-ja": 539,
        "./lang-ko": 540,
        "./lang-zh": 541
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.wordlists = void 0);
                var r = e("./lang-cz"),
                  n = e("./lang-en"),
                  a = e("./lang-es"),
                  i = e("./lang-fr"),
                  l = e("./lang-ja"),
                  s = e("./lang-ko"),
                  u = e("./lang-it"),
                  c = e("./lang-zh");
                o.wordlists = {
                  cz: r.langCz,
                  en: n.langEn,
                  es: a.langEs,
                  fr: i.langFr,
                  it: u.langIt,
                  ja: l.langJa,
                  ko: s.langKo,
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
      5430,
      { "./identicon.container": 5429 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./identicon.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/identicon/index.js" }
    ],
    [
      5431,
      { "./info-tooltip": 5433 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./info-tooltip")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/index.js" }
    ],
    [
      5432,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = i);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ fillColor: e = "var(--color-icon-default)" }) {
                  return r.default.createElement(
                    "svg",
                    { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
                      d: "M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z",
                      fill: e
                    })
                  );
                }
                i.propTypes = { fillColor: n.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/info-tooltip-icon.js" }
    ],
    [
      5433,
      { "../tooltip": 5502, "./info-tooltip-icon": 5432, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = c);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../tooltip")),
                  l = s(e("./info-tooltip-icon"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = {
                  top: "info-tooltip__top-tooltip-arrow",
                  bottom: "info-tooltip__bottom-tooltip-arrow",
                  left: "info-tooltip__left-tooltip-arrow",
                  right: "info-tooltip__right-tooltip-arrow"
                };
                function c({
                  contentText: e = "",
                  position: t = "",
                  containerClassName: o,
                  wrapperClassName: n,
                  iconFillColor: s = "var(--color-icon-alternative)"
                }) {
                  return r.default.createElement(
                    "div",
                    { className: "info-tooltip", "data-testid": "info-tooltip" },
                    r.default.createElement(
                      i.default,
                      {
                        interactive: !0,
                        position: t,
                        containerClassName: (0, a.default)("info-tooltip__tooltip-container", o),
                        wrapperClassName: n,
                        tooltipInnerClassName: "info-tooltip__tooltip-content",
                        tooltipArrowClassName: u[t],
                        html: e,
                        theme: "tippy-tooltip-info"
                      },
                      r.default.createElement(l.default, { fillColor: s })
                    )
                  );
                }
                c.propTypes = {
                  contentText: n.default.node,
                  position: n.default.oneOf(["top", "left", "bottom", "right"]),
                  containerClassName: n.default.string,
                  wrapperClassName: n.default.string,
                  iconFillColor: n.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/info-tooltip/info-tooltip.js" }
    ],
    [
      5434,
      { "./jazzicon.component": 5435 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./jazzicon.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/jazzicon/index.js" }
    ],
    [
      5435,
      { "../../../helpers/utils/icon-factory": 5566, "@metamask/jazzicon": 1409, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = i(e("prop-types")),
                  a = i(e("@metamask/jazzicon"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const s = (0, i(e("../../../helpers/utils/icon-factory")).default)(a.default);
                function u({ address: e, className: t, diameter: o = 46, style: n, tokenList: a = {} }) {
                  const i = (0, r.useRef)();
                  return (
                    (0, r.useEffect)(() => {
                      const t = i.current,
                        r = s.iconForAddress(e, o, a[null == e ? void 0 : e.toLowerCase()]);
                      return (
                        null == t || t.appendChild(r),
                        () => {
                          for (; t.firstChild; ) t.firstChild.remove();
                        }
                      );
                    }, [e, o, a]),
                    r.default.createElement("div", { ref: i, className: t, style: n })
                  );
                }
                u.propTypes = {
                  address: n.default.string.isRequired,
                  className: n.default.string,
                  diameter: n.default.number,
                  style: n.default.object,
                  tokenList: n.default.object
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/jazzicon/jazzicon.component.js" }
    ],
    [
      5436,
      {
        "../../../ducks/app/app": 5521,
        "../../../helpers/utils/gas": 5563,
        "../../../hooks/useShouldAnimateGasEstimations": 5614,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = e("react-redux"),
                  n = c(e("classnames")),
                  a = c(e("prop-types")),
                  i = c(e("react")),
                  l = e("../../../helpers/utils/gas"),
                  s = e("../../../ducks/app/app"),
                  u = e("../../../hooks/useShouldAnimateGasEstimations");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = "loading-heartbeat--active";
                function p({ estimateUsed: e, backgroundColor: t = "var(--color-background-default)" }) {
                  (0, u.useShouldAnimateGasEstimations)();
                  const o = (0, r.useSelector)(s.getGasLoadingAnimationIsShowing);
                  return e && !(0, l.isMetamaskSuggestedGasEstimate)(e)
                    ? null
                    : i.default.createElement("div", {
                        className: (0, n.default)("loading-heartbeat", { [d]: o }),
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
      5437,
      { "./loading-indicator": 5438 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./loading-indicator")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-indicator/index.js" }
    ],
    [
      5438,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = i);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ alt: e, title: t, isLoading: o, children: n = null }) {
                  return o
                    ? r.default.createElement(
                        "span",
                        { className: "loading-indicator" },
                        r.default.createElement("img", {
                          className: "loading-indicator__spinner",
                          alt: e,
                          title: t,
                          src: "images/loading.svg"
                        })
                      )
                    : n;
                }
                i.propTypes = {
                  isLoading: n.default.bool.isRequired,
                  alt: n.default.string.isRequired,
                  title: n.default.string.isRequired,
                  children: n.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-indicator/loading-indicator.js" }
    ],
    [
      5439,
      { "./loading-screen.component": 5440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./loading-screen.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-screen/index.js" }
    ],
    [
      5440,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../spinner": 5483,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("../spinner")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const c = ({ header: e, loadingMessage: t, showLoadingSpinner: o = !0 }) =>
                  r.default.createElement(
                    i.Box,
                    { className: "loading-overlay" },
                    e,
                    r.default.createElement(
                      i.Box,
                      { className: "loading-overlay__container", marginBottom: 3 },
                      o &&
                        r.default.createElement(a.default, { color: "var(--color-warning-default)", className: "loading-overlay__spinner" })
                    ),
                    r.default.createElement(
                      i.Box,
                      {
                        display: l.Display.Flex,
                        flexDirection: l.FlexDirection.Row,
                        justifyContent: l.JustifyContent.center,
                        alignItems: l.AlignItems.center
                      },
                      t ? ((0, r.isValidElement)(t) ? t : r.default.createElement("span", { style: { textAlign: "center" } }, t)) : null
                    )
                  );
                c.propTypes = {
                  header: n.default.element,
                  loadingMessage: n.default.oneOfType([n.default.string, n.default.element]),
                  showLoadingSpinner: n.default.bool
                };
                o.default = r.default.memo(c);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/loading-screen/loading-screen.component.js" }
    ],
    [
      5441,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: o, ariaLabel: n }) =>
                  r.default.createElement(
                    "svg",
                    { width: e, fill: t, className: o, "aria-label": n, viewBox: "0 0 2546 491", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M2460 15V30H2488H2516V140V250H2531H2546V125V0H2503H2460V15ZM1861 116.038C1796.99 123.881 1741.39 163.865 1712.97 222.5C1680.8 288.855 1690.83 365.835 1739.17 423.5C1778.97 470.987 1839.99 496.383 1898.79 489.935C1937.49 485.692 1976.26 467.949 2005.03 441.315L2010.98 435.803L1997.36 421.444L1983.74 407.085L1974.62 415.109C1953.06 434.078 1931.7 444.965 1904.88 450.669C1893.48 453.093 1867.95 453.103 1855.82 450.689C1837.26 446.995 1819.5 439.522 1802.54 428.264C1790.63 420.354 1773.3 403.429 1764.69 391.295C1752.74 374.459 1743.39 352.909 1738.81 331.648C1735.63 316.902 1735.66 289.005 1738.87 274C1751.85 213.28 1797.55 166.907 1855.82 155.311C1867.95 152.897 1893.48 152.907 1904.88 155.331C1931.7 161.035 1953.06 171.922 1974.62 190.891L1983.74 198.915L1997.38 184.534L2011.02 170.153L2003.26 163.053C1977.39 139.393 1945.42 123.844 1909.5 117.465C1898.75 115.555 1871.49 114.753 1861 116.038ZM0 303V485H120H240V465.5V446H140.5H41V283.5V121H20.5H0V303ZM407.496 297.75C364.676 394.963 328.599 476.871 327.325 479.769L325.009 485.038L347.632 484.769L370.256 484.5L386.106 448.5C394.823 428.7 403.087 410.135 404.469 407.245L406.983 401.99L508.152 402.245L609.321 402.5L627.41 443.719L645.5 484.938L668.135 484.969L690.769 485L655.85 405.75C636.645 362.163 600.584 280.269 575.716 223.763L530.5 121.027L507.925 121.013L485.35 121L407.496 297.75ZM749 140.5V160H810H871V322.5V485H891.5H912V322.5V160H973H1034V140.5V121H891.5H749V140.5ZM1133 140.5V160H1194H1255V322.5V485H1275.5H1296V322.5V160H1357H1418V140.5V121H1275.5H1133V140.5ZM1534 303V485H1554.5H1575V303V121H1554.5H1534V303ZM2120 303V485H2250.5H2381V465.5V446H2271.5H2162V382.5V319H2260.5H2359V299.5V280H2260.5H2162V220V160H2271.5H2381V140.5V121H2250.5H2120V303ZM550.073 267.125C572.858 318.894 591.65 361.644 591.833 362.125C592.022 362.621 555.677 363 507.976 363C428.21 363 423.821 362.908 424.447 361.25C426.983 354.537 507.62 173.036 508.073 173.02C508.388 173.009 527.288 215.356 550.073 267.125Z"
                    })
                  );
                i.propTypes = {
                  width: n.default.string,
                  color: n.default.string,
                  className: n.default.string,
                  ariaLabel: n.default.string
                };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-lattice.js" }
    ],
    [
      5442,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: o, ariaLabel: n }) =>
                  r.default.createElement(
                    "svg",
                    {
                      width: e,
                      fill: t,
                      className: o,
                      "aria-label": n,
                      viewBox: "0 0 2000.58 669.35",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    r.default.createElement("path", {
                      d: "m1711.35 627.2v42.14h289.22v-190.05h-42.14v147.91zm0-627.2v42.14h247.08v147.92h42.14v-190.06zm-149.15 326v-97.92h66.11c32.23 0 43.8 10.74 43.8 40.08v17.35c0 30.16-11.16 40.49-43.8 40.49zm104.94 17.35c30.16-7.85 51.23-35.95 51.23-69.41 0-21.07-8.26-40.08-23.96-55.37-19.83-19.01-46.28-28.51-80.57-28.51h-92.96v289.22h41.32v-115.27h61.98c31.81 0 44.62 13.22 44.62 46.28v69h42.14v-62.39c0-45.45-10.74-62.8-43.8-67.76zm-347.88 9.5h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-138.42 15.29v19.83c0 41.73-15.29 55.37-53.71 55.37h-9.09c-38.43 0-57.02-12.4-57.02-69.83v-77.68c0-57.84 19.42-69.83 57.84-69.83h8.26c37.6 0 49.58 14.05 49.99 52.89h45.45c-4.13-57.02-42.14-92.96-99.16-92.96-27.68 0-50.82 8.68-68.17 25.2-26.03 24.38-40.49 65.7-40.49 123.54 0 55.78 12.4 97.1 38.01 122.71 17.35 16.94 41.32 26.03 64.87 26.03 24.79 0 47.52-9.92 59.08-31.4h5.78v27.27h38.01v-149.15h-111.97v38.01zm-364.41-140.07h45.04c42.56 0 65.7 10.74 65.7 68.59v76.02c0 57.84-23.14 68.59-65.7 68.59h-45.04zm48.75 251.22c78.92 0 108.25-59.91 108.25-144.61 0-85.94-31.4-144.61-109.08-144.61h-89.25v289.22zm-289.63-126.44h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-243.77-162.79h-42.14v289.22h190.06v-38.01h-147.92zm-331.78 289.23v190.06h289.22v-42.15h-247.08v-147.91zm0-479.29v190.06h42.14v-147.92h247.08v-42.14z"
                    })
                  );
                i.propTypes = {
                  width: n.default.string,
                  color: n.default.string,
                  className: n.default.string,
                  ariaLabel: n.default.string
                };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-ledger.js" }
    ],
    [
      5443,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: o, ariaLabel: n }) =>
                  r.default.createElement(
                    "svg",
                    { width: e, fill: t, className: o, "aria-label": n, viewBox: "0 0 107 24", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
                      d: "M1.3333 8H6.6667C7.403 8 8 7.403 8 6.6667V1.3333C8 0.597002 7.403 0 6.6667 0H1.3333C0.597 0 0 0.597002 0 1.3333V6.6667C0 7.403 0.597 8 1.3333 8ZM2.6667 2.6667H5.3333V5.3333H2.6667V2.6667ZM0.6667 13.3333H2C2.3682 13.3333 2.6667 13.0349 2.6667 12.6667V11.3333C2.6667 10.9651 2.3682 10.6667 2 10.6667H0.6667C0.2985 10.6667 0 10.9651 0 11.3333V12.6667C0 13.0349 0.2985 13.3333 0.6667 13.3333ZM6.6667 16H1.3333C0.597 16 0 16.597 0 17.3333V22.6667C0 23.403 0.597 24 1.3333 24H6.6667C7.403 24 8 23.403 8 22.6667V17.3333C8 16.597 7.403 16 6.6667 16ZM5.3333 21.3333H2.6667V18.6667H5.3333V21.3333ZM19.3333 24H23.3333C23.7015 24 24 23.7015 24 23.3333V19.3333C24 18.9651 23.7015 18.6667 23.3333 18.6667H22C21.6318 18.6667 21.3333 18.9651 21.3333 19.3333V21.3333H18.6667V23.3333C18.6667 23.7015 18.9651 24 19.3333 24ZM22.6667 0H17.3333C16.597 0 16 0.597002 16 1.3333V6.6667C16 7.403 16.597 8 17.3333 8H22.6667C23.403 8 24 7.403 24 6.6667V1.3333C24 0.597002 23.403 0 22.6667 0ZM21.3333 5.3333H18.6667V2.6667H21.3333V5.3333ZM6 10.6667C5.6318 10.6667 5.3333 10.9651 5.3333 11.3333V12.6667C5.3333 13.0349 5.6318 13.3333 6 13.3333H10.6667V10.6667H6ZM10.6667 15.3333C10.6667 15.7015 10.9651 16 11.3333 16H13.3333V18C13.3333 18.3682 13.6318 18.6667 14 18.6667H16V13.3333H10.6667V15.3333ZM10.6667 22V23.3333C10.6667 23.7015 10.9651 24 11.3333 24H15.3333C15.7015 24 16 23.7015 16 23.3333V21.3333H11.3333C10.9651 21.3333 10.6667 21.6318 10.6667 22ZM23.3333 10.6667H16.6667C16.2985 10.6667 16 10.9651 16 11.3333V13.3333H18.6667V15.3333C18.6667 15.7015 18.9651 16 19.3333 16H20.6667C21.0349 16 21.3333 15.7015 21.3333 15.3333V13.3333H23.3333C23.7015 13.3333 24 13.0349 24 12.6667V11.3333C24 10.9651 23.7015 10.6667 23.3333 10.6667ZM18.6667 21.3333V18.6667H16V21.3333H18.6667ZM11.3333 5.3333H12.6667C13.0349 5.3333 13.3333 5.0349 13.3333 4.6667V0.666698C13.3333 0.298498 13.0349 0 12.6667 0H11.3333C10.9651 0 10.6667 0.298498 10.6667 0.666698V4.6667C10.6667 5.0349 10.9651 5.3333 11.3333 5.3333ZM13.3333 10V8.6667C13.3333 8.2985 13.0349 8 12.6667 8H11.3333C10.9651 8 10.6667 8.2985 10.6667 8.6667V10.6667H12.6667C13.0349 10.6667 13.3333 10.3682 13.3333 10Z"
                    }),
                    r.default.createElement("path", {
                      d: "M38.592 18.192C37.7707 18.192 37.0027 18.0427 36.288 17.744C35.584 17.4347 34.9653 17.0187 34.432 16.496C33.8987 15.9627 33.4773 15.3387 33.168 14.624C32.8693 13.9093 32.72 13.1413 32.72 12.32C32.72 11.4987 32.8693 10.7307 33.168 10.016C33.4773 9.3013 33.8987 8.6827 34.432 8.16C34.9653 7.6267 35.584 7.2107 36.288 6.912C37.0027 6.6027 37.7707 6.448 38.592 6.448C39.4133 6.448 40.1813 6.6027 40.896 6.912C41.6107 7.2107 42.2293 7.6267 42.752 8.16C43.2853 8.6827 43.7013 9.3013 44 10.016C44.3093 10.7307 44.464 11.4987 44.464 12.32C44.464 13.0347 44.3467 13.7067 44.112 14.336C43.888 14.9653 43.5733 15.536 43.168 16.048L45.28 18H43.248L42.16 17.008C41.6693 17.3813 41.12 17.6747 40.512 17.888C39.904 18.0907 39.264 18.192 38.592 18.192ZM38.592 16.784C39.5413 16.784 40.3787 16.528 41.104 16.016L39.296 14.336L40.208 13.312L42.08 15.056C42.3573 14.6827 42.576 14.2667 42.736 13.808C42.896 13.3387 42.976 12.8427 42.976 12.32C42.976 11.7013 42.864 11.12 42.64 10.576C42.416 10.032 42.1067 9.5573 41.712 9.152C41.328 8.7467 40.864 8.432 40.32 8.208C39.7867 7.9733 39.2107 7.856 38.592 7.856C37.9733 7.856 37.3973 7.9733 36.864 8.208C36.3307 8.432 35.8667 8.7467 35.472 9.152C35.088 9.5573 34.784 10.032 34.56 10.576C34.336 11.12 34.224 11.7013 34.224 12.32C34.224 12.9493 34.336 13.536 34.56 14.08C34.784 14.6133 35.088 15.0827 35.472 15.488C35.8667 15.8933 36.3307 16.2133 36.864 16.448C37.3973 16.672 37.9733 16.784 38.592 16.784ZM46.9259 6.64H50.7979C51.3205 6.64 51.7899 6.7147 52.2059 6.864C52.6325 7.0133 52.9899 7.2267 53.2779 7.504C53.5765 7.7813 53.8005 8.112 53.9499 8.496C54.1099 8.88 54.1899 9.3067 54.1899 9.776C54.1899 10.608 53.9392 11.2907 53.4379 11.824C52.9472 12.3573 52.2592 12.688 51.3739 12.816L55.7579 18H53.8859L49.5179 12.832H48.4139V18H46.9259V6.64ZM50.6219 11.504C51.2725 11.504 51.7792 11.36 52.1419 11.072C52.5152 10.784 52.7019 10.352 52.7019 9.776C52.7019 9.2 52.5152 8.7627 52.1419 8.464C51.7792 8.1653 51.2725 8.016 50.6219 8.016H48.4139V11.504H50.6219ZM55.8681 12.832H59.948V14.208H55.8681V12.832ZM66.488 18.16C65.88 18.16 65.325 18.0267 64.824 17.76C64.323 17.4827 63.939 17.152 63.672 16.768V18H62.296V6H63.672V11.232C63.939 10.848 64.323 10.5227 64.824 10.256C65.325 9.9787 65.88 9.84 66.488 9.84C67.043 9.84 67.56 9.952 68.04 10.176C68.52 10.3893 68.936 10.688 69.288 11.072C69.64 11.4453 69.912 11.8827 70.104 12.384C70.307 12.8853 70.408 13.424 70.408 14C70.408 14.576 70.307 15.1147 70.104 15.616C69.912 16.1173 69.64 16.56 69.288 16.944C68.936 17.3173 68.52 17.616 68.04 17.84C67.56 18.0533 67.043 18.16 66.488 18.16ZM66.28 16.896C66.685 16.896 67.053 16.8213 67.384 16.672C67.715 16.5227 67.997 16.32 68.232 16.064C68.477 15.7973 68.664 15.488 68.792 15.136C68.931 14.784 69 14.4053 69 14C69 13.5947 68.931 13.216 68.792 12.864C68.664 12.512 68.477 12.208 68.232 11.952C67.997 11.6853 67.715 11.4773 67.384 11.328C67.053 11.1787 66.685 11.104 66.28 11.104C65.875 11.104 65.507 11.1787 65.176 11.328C64.845 11.4773 64.557 11.6853 64.312 11.952C64.077 12.208 63.891 12.512 63.752 12.864C63.624 13.216 63.56 13.5947 63.56 14C63.56 14.4053 63.624 14.784 63.752 15.136C63.891 15.488 64.077 15.7973 64.312 16.064C64.557 16.32 64.845 16.5227 65.176 16.672C65.507 16.8213 65.875 16.896 66.28 16.896ZM75.67 18.16C75.105 18.16 74.582 18.0533 74.102 17.84C73.633 17.616 73.222 17.3173 72.87 16.944C72.518 16.56 72.241 16.1173 72.038 15.616C71.846 15.1147 71.75 14.576 71.75 14C71.75 13.424 71.846 12.8853 72.038 12.384C72.241 11.8827 72.518 11.4453 72.87 11.072C73.222 10.688 73.633 10.3893 74.102 10.176C74.582 9.952 75.105 9.84 75.67 9.84C76.278 9.84 76.833 9.9787 77.334 10.256C77.835 10.5227 78.219 10.848 78.486 11.232V10H79.862V18H78.486V16.768C78.219 17.152 77.835 17.4827 77.334 17.76C76.833 18.0267 76.278 18.16 75.67 18.16ZM75.878 16.896C76.283 16.896 76.651 16.8213 76.982 16.672C77.313 16.5227 77.595 16.32 77.83 16.064C78.075 15.7973 78.262 15.488 78.39 15.136C78.529 14.784 78.598 14.4053 78.598 14C78.598 13.5947 78.529 13.216 78.39 12.864C78.262 12.512 78.075 12.208 77.83 11.952C77.595 11.6853 77.313 11.4773 76.982 11.328C76.651 11.1787 76.283 11.104 75.878 11.104C75.473 11.104 75.099 11.1787 74.758 11.328C74.427 11.4773 74.139 11.6853 73.894 11.952C73.659 12.208 73.473 12.512 73.334 12.864C73.206 13.216 73.142 13.5947 73.142 14C73.142 14.4053 73.206 14.784 73.334 15.136C73.473 15.488 73.659 15.7973 73.894 16.064C74.139 16.32 74.427 16.5227 74.758 16.672C75.099 16.8213 75.473 16.896 75.878 16.896ZM85.028 18.16C84.602 18.16 84.196 18.1067 83.812 18C83.428 17.8933 83.092 17.7387 82.804 17.536C82.516 17.3227 82.282 17.0613 82.1 16.752C81.919 16.4427 81.812 16.0853 81.78 15.68H83.188C83.231 15.9253 83.311 16.1333 83.428 16.304C83.556 16.464 83.706 16.5973 83.876 16.704C84.047 16.8107 84.228 16.8853 84.42 16.928C84.623 16.9707 84.831 16.992 85.044 16.992C85.482 16.992 85.844 16.9067 86.132 16.736C86.431 16.5547 86.58 16.288 86.58 15.936C86.58 15.616 86.479 15.3547 86.276 15.152C86.074 14.9493 85.732 14.784 85.252 14.656L84.1 14.352C83.407 14.1707 82.89 13.8773 82.548 13.472C82.207 13.0667 82.036 12.576 82.036 12C82.036 11.6693 82.106 11.3707 82.244 11.104C82.383 10.8373 82.575 10.6133 82.82 10.432C83.066 10.24 83.354 10.096 83.684 10C84.026 9.8933 84.399 9.84 84.804 9.84C85.231 9.84 85.615 9.8987 85.956 10.016C86.298 10.1333 86.591 10.2987 86.836 10.512C87.092 10.7147 87.295 10.9547 87.444 11.232C87.594 11.5093 87.684 11.808 87.716 12.128H86.34C86.234 11.776 86.042 11.4987 85.764 11.296C85.498 11.0933 85.178 10.992 84.804 10.992C84.42 10.992 84.095 11.0827 83.828 11.264C83.562 11.4347 83.428 11.6747 83.428 11.984C83.428 12.2827 83.524 12.5227 83.716 12.704C83.908 12.8747 84.218 13.0187 84.644 13.136L85.924 13.472C86.596 13.6427 87.103 13.9307 87.444 14.336C87.796 14.7307 87.972 15.232 87.972 15.84C87.972 16.2347 87.898 16.5813 87.748 16.88C87.599 17.168 87.391 17.408 87.124 17.6C86.858 17.792 86.543 17.9307 86.18 18.016C85.828 18.112 85.444 18.16 85.028 18.16ZM93.329 18.16C92.742 18.16 92.204 18.0587 91.713 17.856C91.222 17.6427 90.796 17.3493 90.433 16.976C90.081 16.6027 89.804 16.1653 89.601 15.664C89.398 15.152 89.297 14.5973 89.297 14C89.297 13.4133 89.388 12.8693 89.569 12.368C89.761 11.856 90.033 11.4133 90.385 11.04C90.737 10.6667 91.164 10.3733 91.665 10.16C92.166 9.9467 92.732 9.84 93.361 9.84C93.99 9.84 94.55 9.9627 95.041 10.208C95.542 10.4427 95.958 10.768 96.289 11.184C96.63 11.5893 96.876 12.0693 97.025 12.624C97.185 13.168 97.244 13.7493 97.201 14.368H90.689C90.7 14.7307 90.774 15.0667 90.913 15.376C91.062 15.6853 91.254 15.9573 91.489 16.192C91.724 16.416 92.001 16.592 92.321 16.72C92.641 16.848 92.982 16.912 93.345 16.912C93.846 16.912 94.294 16.8107 94.689 16.608C95.094 16.3947 95.42 16.048 95.665 15.568H97.073C96.977 15.92 96.822 16.256 96.609 16.576C96.396 16.8853 96.129 17.1573 95.809 17.392C95.5 17.6267 95.137 17.8133 94.721 17.952C94.305 18.0907 93.841 18.16 93.329 18.16ZM93.313 11.056C93.025 11.056 92.742 11.0987 92.465 11.184C92.188 11.2693 91.932 11.4027 91.697 11.584C91.473 11.7653 91.276 11.9947 91.105 12.272C90.934 12.5493 90.817 12.8853 90.753 13.28H95.745C95.617 12.5333 95.329 11.9787 94.881 11.616C94.433 11.2427 93.91 11.056 93.313 11.056ZM102.483 18.16C101.917 18.16 101.395 18.0533 100.915 17.84C100.445 17.616 100.035 17.3173 99.683 16.944C99.331 16.56 99.053 16.1173 98.851 15.616C98.659 15.1147 98.563 14.576 98.563 14C98.563 13.424 98.659 12.8853 98.851 12.384C99.053 11.8827 99.331 11.4453 99.683 11.072C100.035 10.688 100.445 10.3893 100.915 10.176C101.395 9.952 101.917 9.84 102.483 9.84C103.091 9.84 103.645 9.9787 104.147 10.256C104.648 10.5227 105.032 10.848 105.299 11.232V6H106.675V18H105.299V16.768C105.032 17.152 104.648 17.4827 104.147 17.76C103.645 18.0267 103.091 18.16 102.483 18.16ZM102.691 16.896C103.096 16.896 103.464 16.8213 103.795 16.672C104.125 16.5227 104.408 16.32 104.643 16.064C104.888 15.7973 105.075 15.488 105.203 15.136C105.341 14.784 105.411 14.4053 105.411 14C105.411 13.5947 105.341 13.216 105.203 12.864C105.075 12.512 104.888 12.208 104.643 11.952C104.408 11.6853 104.125 11.4773 103.795 11.328C103.464 11.1787 103.096 11.104 102.691 11.104C102.285 11.104 101.912 11.1787 101.571 11.328C101.24 11.4773 100.952 11.6853 100.707 11.952C100.472 12.208 100.285 12.512 100.147 12.864C100.019 13.216 99.955 13.5947 99.955 14C99.955 14.4053 100.019 14.784 100.147 15.136C100.285 15.488 100.472 15.7973 100.707 16.064C100.952 16.32 101.24 16.5227 101.571 16.672C101.912 16.8213 102.285 16.896 102.691 16.896Z"
                    })
                  );
                i.propTypes = {
                  width: n.default.string,
                  color: n.default.string,
                  className: n.default.string,
                  ariaLabel: n.default.string
                };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-qr-based.js" }
    ],
    [
      5444,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ width: e = "100%", color: t = "var(--color-text-default)", className: o, ariaLabel: n }) =>
                  r.default.createElement(
                    "svg",
                    { width: e, fill: t, className: o, "aria-label": n, viewBox: "0 0 2568 723", xmlns: "http://www.w3.org/2000/svg" },
                    r.default.createElement("path", {
                      d: "M249 0C149.9 0 69.7 80.2 69.7 179.3V246.5C34.9 252.8 0 261.2 0 272.1V622.8C0 622.8 0 632.5 10.9 637.1C50.4 653.1 205.8 708.1 241.5 720.7C246.1 722.4 247.4 722.4 248.6 722.4C250.3 722.4 251.1 722.4 255.7 720.7C291.4 708.1 447.2 653.1 486.7 637.1C496.8 632.9 497.2 623.2 497.2 623.2V272.1C497.2 261.2 462.8 252.4 427.9 246.5V179.3C428.4 80.2 347.7 0 249 0ZM249 85.7C307.4 85.7 342.7 121 342.7 179.4V237.8C277.2 233.2 221.3 233.2 155.4 237.8V179.4C155.4 120.9 190.7 85.7 249 85.7V85.7ZM248.6 323.8C330.1 323.8 398.5 330.1 398.5 341.4V560.2C398.5 563.6 398.1 564 395.1 565.2C392.2 566.5 256.1 615.6 256.1 615.6C256.1 615.6 250.6 617.3 249 617.3C247.3 617.3 241.9 615.2 241.9 615.2C241.9 615.2 105.8 566.1 102.9 564.8C100 563.5 99.5 563.1 99.5 559.8V341C98.7 329.7 167.1 323.8 248.6 323.8V323.8ZM728.466 563.183V323.577H640.919V237.655H913.881V323.577H827.195V563.183H728.466ZM1135.04 563.183L1090.12 460.823H1054.38V563.183H955.647V237.655H1129.4C1205.67 237.655 1246.58 288.215 1246.58 349.191C1246.58 405.389 1214.08 435.113 1187.99 447.92L1246.96 563.088H1135.04V563.183ZM1146.7 349.191C1146.7 331.51 1131.03 323.864 1114.59 323.864H1054.38V375.283H1114.59C1131.03 374.901 1146.7 367.255 1146.7 349.191ZM1298.38 563.183V237.655H1545.25V323.577H1396.73V355.69H1541.62V441.612H1396.73V477.357H1545.25V563.183H1298.38ZM1596.57 563.566V485.29L1720.63 323.96H1596.57V238.037H1850.61V315.549L1726.17 477.739H1854.24V563.661L1596.57 563.566ZM1878.33 400.993C1878.33 301.021 1955.84 232.398 2056.58 232.398C2156.93 232.398 2234.82 300.639 2234.82 400.993C2234.82 500.964 2157.31 569.205 2056.58 569.205C1955.84 569.205 1878.33 500.965 1878.33 400.993V400.993ZM2134.47 400.993C2134.47 355.595 2103.6 319.467 2056.19 319.467C2008.79 319.467 1977.92 355.595 1977.92 400.993C1977.92 446.391 2008.79 482.518 2056.19 482.518C2103.98 482.518 2134.47 446.391 2134.47 400.993H2134.47ZM2455.51 563.566L2410.59 461.205H2374.84V563.565H2276.11V238.038H2449.87C2526.14 238.038 2567.04 288.598 2567.04 349.574C2567.04 405.772 2534.55 435.496 2508.46 448.304L2567.43 563.471H2455.51V563.566ZM2467.55 349.191C2467.55 331.51 2451.87 323.864 2435.44 323.864H2375.22V375.283H2435.44C2451.97 374.901 2467.55 367.255 2467.55 349.191Z"
                    })
                  );
                i.propTypes = {
                  width: n.default.string,
                  color: n.default.string,
                  className: n.default.string,
                  ariaLabel: n.default.string
                };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/logo/logo-trezor.js" }
    ],
    [
      5445,
      { "./mascot.component": 5446 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./mascot.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/mascot/index.js" }
    ],
    [
      5446,
      { "../../../helpers/utils/build-types": 5558, "@metamask/logo": 1551, lodash: 4071, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = u(e("prop-types")),
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = u(e("@metamask/logo")),
                  i = e("lodash"),
                  l = e("../../../helpers/utils/build-types");
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class d extends n.Component {
                  constructor(e) {
                    super(e);
                    const { width: t, height: o, followMouse: r } = e;
                    (this.logo = (0, a.default)({
                      followMouse: r,
                      pxNotRatio: !0,
                      width: t,
                      height: o,
                      meshJson: (0, l.getBuildSpecificAsset)("foxMeshJson")
                    })),
                      (this.mascotContainer = (0, n.createRef)()),
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
                      (this.directionTargetMap = (({ top: e, left: t, height: o, width: r }) => {
                        const n = t + r / 2,
                          a = e + o / 2;
                        return {
                          up: { x: n, y: e - o },
                          down: { x: n, y: e + 2 * o },
                          left: { x: t - r, y: a },
                          right: { x: t + 2 * r, y: a },
                          middle: { x: n, y: a }
                        };
                      })(this.mascotContainer.current.getBoundingClientRect()));
                    const { lookAtTarget: e, lookAtDirection: t } = this.props;
                    null != e && e.x && null != e && e.y
                      ? this.logo.lookAtAndRender(e)
                      : t && this.logo.lookAtAndRender(this.directionTargetMap[t]);
                  }
                  componentDidUpdate(e) {
                    const { lookAtTarget: t = {}, lookAtDirection: o = null, followMouse: r } = e,
                      { lookAtTarget: n = {}, followMouse: a, lookAtDirection: i } = this.props;
                    i && o !== i
                      ? this.logo.lookAtAndRender(this.directionTargetMap[i])
                      : ((null == n ? void 0 : n.x) === (null == t ? void 0 : t.x) &&
                          (null == n ? void 0 : n.y) === (null == t ? void 0 : t.y)) ||
                        this.logo.lookAtAndRender(n),
                      r !== a && (this.unfollowMouse(), a && this.refollowMouse());
                  }
                  componentWillUnmount() {
                    (this.animations = this.props.animationEventEmitter),
                      this.animations.removeAllListeners(),
                      this.logo.container.remove(),
                      this.logo.stopAnimation();
                  }
                  render() {
                    return (
                      this.handleAnimationEvents(), n.default.createElement("div", { ref: this.mascotContainer, style: { zIndex: 0 } })
                    );
                  }
                }
                (o.default = d),
                  c(d, "propTypes", {
                    animationEventEmitter: r.default.object.isRequired,
                    width: r.default.string,
                    height: r.default.string,
                    followMouse: r.default.bool,
                    lookAtTarget: r.default.object,
                    lookAtDirection: r.default.oneOf(["up", "down", "left", "right", "middle"])
                  }),
                  c(d, "defaultProps", { width: "200", height: "200", followMouse: !0, lookAtTarget: {}, lookAtDirection: null });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/mascot/mascot.component.js" }
    ],
    [
      5447,
      { "./menu": 5449, "./menu-item": 5448 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Menu", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(o, "MenuItem", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r = a(e("./menu")),
                  n = a(e("./menu-item"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/index.js" }
    ],
    [
      5448,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = r.default.forwardRef(
                  ({ children: e, className: t, "data-testid": o, iconName: n, onClick: s, subtitle: u, disabled: c = !1 }, d) =>
                    r.default.createElement(
                      "button",
                      { className: (0, a.default)("menu-item", t), "data-testid": o, onClick: s, ref: d, disabled: c },
                      n ? r.default.createElement(i.Icon, { name: n, size: i.IconSize.Sm, marginRight: 2 }) : null,
                      r.default.createElement(
                        "div",
                        null,
                        r.default.createElement("div", null, e),
                        u ? r.default.createElement(i.Text, { variant: l.TextVariant.bodyXs }, u) : null
                      )
                    )
                );
                (u.propTypes = {
                  children: n.default.node.isRequired,
                  className: n.default.string,
                  "data-testid": n.default.string,
                  iconName: n.default.string,
                  onClick: n.default.func,
                  subtitle: n.default.node,
                  disabled: n.default.bool
                }),
                  (u.displayName = "MenuItem");
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/menu-item.js" }
    ],
    [
      5449,
      { classnames: 2952, "prop-types": 4219, react: 4475, "react-dom": 4317, "react-popper": 4423 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = u(e("prop-types")),
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = e("react-dom"),
                  i = e("react-popper"),
                  l = u(e("classnames"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const d = ({ anchorElement: e, children: t, className: o, "data-testid": r, onHide: s, popperOptions: u }) => {
                  const [d, p] = (0, n.useState)(null),
                    f = (0, n.useRef)(document.getElementById("popover-content")),
                    { attributes: m, styles: g } = (0, i.usePopper)(e, d, u);
                  return (0, a.createPortal)(
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement("div", { className: "menu__background", "data-testid": r, onClick: s }),
                      n.default.createElement(
                        "div",
                        c({ className: (0, l.default)("menu__container", o), "data-testid": o, ref: p, style: g.popper }, m.popper),
                        t
                      )
                    ),
                    f.current
                  );
                };
                (d.propTypes = {
                  anchorElement: r.default.instanceOf(window.Element),
                  children: r.default.node.isRequired,
                  className: r.default.string,
                  onHide: r.default.func.isRequired,
                  popperOptions: r.default.object,
                  dataTestId: r.default.string
                }),
                  (d.defaultProps = { anchorElement: undefined, className: undefined, popperOptions: undefined });
                o.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/menu/menu.js" }
    ],
    [
      5450,
      { "../../../../shared/constants/preferences": 4761, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = d);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../../../shared/constants/preferences");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const s = 162,
                  u = 30,
                  c = "var(--color-text-default)";
                function d({ theme: e, className: t }) {
                  const [o, r] = (0, n.useState)(() => (e === undefined ? document.documentElement.getAttribute("data-theme") : e));
                  (0, n.useEffect)(() => {
                    e !== undefined && r(e);
                  }, [e]);
                  return n.default.createElement(
                    "svg",
                    { height: u, viewBox: "0 0 1311 242", width: s, xmlns: "http://www.w3.org/2000/svg", className: t },
                    n.default.createElement(
                      "g",
                      { fill: "none" },
                      n.default.createElement(
                        "g",
                        { fill: c, transform: "translate(361 61)" },
                        n.default.createElement("path", {
                          d: "m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z"
                        }),
                        n.default.createElement("path", {
                          d: "m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
                        }),
                        n.default.createElement("path", {
                          d: "m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"
                        }),
                        n.default.createElement("path", {
                          d: "m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z"
                        }),
                        n.default.createElement("path", {
                          d: "m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
                        }),
                        n.default.createElement("path", {
                          d: "m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"
                        }),
                        n.default.createElement("path", {
                          d: "m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z"
                        }),
                        n.default.createElement("path", {
                          d: "m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z"
                        })
                      ),
                      n.default.createElement(
                        "g",
                        { strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(1 1)" },
                        n.default.createElement("path", { d: "m246.1.2-101.1 75 18.8-44.2z", fill: "#e17726", stroke: "#e17726" }),
                        n.default.createElement(
                          "g",
                          { fill: "#e27625", stroke: "#e27625", transform: "translate(2)" },
                          n.default.createElement("path", { d: "m10.9.2 100.2 75.7-17.9-44.9z" }),
                          n.default.createElement("path", { d: "m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z" }),
                          n.default.createElement("path", { d: "m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z" }),
                          n.default.createElement("path", { d: "m71 104.5-16 24.2 57 2.6-1.9-61.5z" }),
                          n.default.createElement("path", { d: "m184 104.5-39.7-35.4-1.3 62.2 57-2.6z" }),
                          n.default.createElement("path", { d: "m74.1 215.3 34.5-16.7-29.7-23.2z" }),
                          n.default.createElement("path", { d: "m146.4 198.6 34.4 16.7-4.7-39.9z" })
                        ),
                        n.default.createElement(
                          "g",
                          { fill: "#d5bfb2", stroke: "#d5bfb2", transform: "translate(76 198)" },
                          n.default.createElement("path", { d: "m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z" }),
                          n.default.createElement("path", { d: "m.1 17.3 32 15.2-.2-9.5 2.7-22.4z" })
                        ),
                        n.default.createElement("path", { d: "m108.7 160.6-28.6-8.4 20.2-9.3z", fill: "#233447", stroke: "#233447" }),
                        n.default.createElement("path", { d: "m150.3 160.6 8.4-17.7 20.3 9.3z", fill: "#233447", stroke: "#233447" }),
                        n.default.createElement(
                          "g",
                          { fill: "#cc6228", stroke: "#cc6228", transform: "translate(49 128)" },
                          n.default.createElement("path", { d: "m27.1 87.3 5-41.2-31.8.9z" }),
                          n.default.createElement("path", { d: "m128.9 46.1 4.9 41.2 26.9-40.3z" }),
                          n.default.createElement("path", { d: "m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z" }),
                          n.default.createElement("path", { d: "m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z" })
                        ),
                        n.default.createElement(
                          "g",
                          { fill: "#e27525", stroke: "#e27525", transform: "translate(57 128)" },
                          n.default.createElement("path", { d: "m0 .7 23.9 46.7-.8-23.2z" }),
                          n.default.createElement("path", { d: "m122 24.2-.9 23.2 23.9-46.7z" }),
                          n.default.createElement("path", { d: "m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z" }),
                          n.default.createElement("path", { d: "m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z" })
                        ),
                        n.default.createElement("path", {
                          d: "m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z",
                          fill: "#f5841f",
                          stroke: "#f5841f"
                        }),
                        n.default.createElement("path", {
                          d: "m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z",
                          fill: "#f5841f",
                          stroke: "#f5841f"
                        }),
                        n.default.createElement("path", {
                          d: "m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z",
                          fill: "#c0ac9d",
                          stroke: "#c0ac9d"
                        }),
                        n.default.createElement("path", {
                          d: "m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z",
                          fill: "#161616",
                          stroke: "#161616"
                        }),
                        n.default.createElement(
                          "g",
                          { fill: "#763e1a", stroke: "#763e1a" },
                          n.default.createElement("path", {
                            d: "m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z"
                          }),
                          n.default.createElement("path", {
                            d: "m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z"
                          })
                        ),
                        n.default.createElement(
                          "g",
                          { fill: "#f5841f", stroke: "#f5841f" },
                          n.default.createElement("path", { d: "m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z" }),
                          n.default.createElement("path", { d: "m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z" }),
                          n.default.createElement("path", {
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
      5451,
      { "./metafox-logo.component": 5452 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./metafox-logo.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/metafox-logo/index.js" }
    ],
    [
      5452,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "./horizontal-logo": 5450,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = u(e("./horizontal-logo"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                function p(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class f extends r.PureComponent {
                  render() {
                    const { onClick: e, unsetIconHeight: t, isOnboarding: o } = this.props,
                      n = t ? {} : { height: 42, width: 42 };
                    n.src = "./images/logo/metamask-fox.svg";
                    return r.default.createElement(
                      i.Box,
                      {
                        as: "button",
                        onClick: e,
                        className: (0, a.default)({
                          "app-header__logo-container": !o,
                          "onboarding-app-header__logo-container": o,
                          "app-header__logo-container--clickable": Boolean(e)
                        }),
                        backgroundColor: l.BackgroundColor.transparent,
                        "data-testid": "app-header-logo"
                      },
                      r.default.createElement(s.default, {
                        className: (0, a.default)({
                          "app-header__metafox-logo--horizontal": !o,
                          "onboarding-app-header__metafox-logo--horizontal": o
                        })
                      }),
                      r.default.createElement(
                        "img",
                        d({}, n, {
                          src: "./images/logo/metamask-fox.svg",
                          className: (0, a.default)({
                            "app-header__metafox-logo--icon": !o,
                            "onboarding-app-header__metafox-logo--icon": o
                          }),
                          alt: ""
                        })
                      )
                    );
                  }
                }
                (o.default = f),
                  p(f, "propTypes", { onClick: n.default.func, unsetIconHeight: n.default.bool, isOnboarding: n.default.bool }),
                  p(f, "defaultProps", { onClick: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/metafox-logo/metafox-logo.component.js" }
    ],
    [
      5453,
      {
        "../../../../shared/constants/tokens": 4769,
        "../../../../shared/lib/fetch-with-cache": 4772,
        "../../../contexts/i18n": 5514,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../button": 5377,
        "../popover": 5465,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  (o.default = function () {
                    var e;
                    const t = (0, r.useContext)(s.I18nContext),
                      o = (0, a.useHistory)(),
                      [b, v] = (0, r.useState)(!1),
                      [y, T] = (0, r.useState)(!0),
                      [C, k] = (0, r.useState)(!0),
                      M = (0, n.useSelector)(p.getUseTokenDetection),
                      S = (0, n.useSelector)(u.getProviderConfig),
                      A = (0, n.useSelector)(p.getCurrentNetwork),
                      O = () => {
                        T(!1), (0, f.setFirstTimeUsedNetwork)(S.chainId);
                      },
                      E = (0, r.useCallback)(async () => {
                        try {
                          const e = await (0, l.default)({
                              url: `${i.TOKEN_API_METASWAP_CODEFI_URL}${S.chainId}`,
                              functionName: "getIsTokenDetectionSupported"
                            }),
                            t = !(null != e && e.error);
                          v(t), k(!1);
                        } catch {
                          v(!1), k(!1);
                        }
                      }, [S.chainId]);
                    return (
                      (0, r.useEffect)(() => {
                        E();
                      }, []),
                      !C &&
                        y &&
                        r.default.createElement(
                          h.default,
                          {
                            onClose: O,
                            className: "new-network-info__wrapper",
                            footer: r.default.createElement(g.default, { type: "primary", onClick: O }, t("recoveryPhraseReminderConfirm"))
                          },
                          r.default.createElement(
                            m.Box,
                            { "data-testid": "new-network-info__wrapper", display: c.Display.Flex, flexDirection: c.FlexDirection.Column },
                            r.default.createElement(
                              m.Text,
                              {
                                variant: c.TextVariant.headingSm,
                                as: "h4",
                                color: c.Color.textDefault,
                                fontWeight: c.FontWeight.Bold,
                                align: c.TextAlign.Center
                              },
                              t("switchedTo")
                            ),
                            r.default.createElement(m.PickerNetwork, {
                              label: null == A ? void 0 : A.nickname,
                              src: null == A || null === (e = A.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                              marginLeft: "auto",
                              marginRight: "auto",
                              marginTop: 4,
                              marginBottom: 4,
                              iconProps: { display: "none" },
                              as: "div"
                            }),
                            r.default.createElement(
                              m.Text,
                              {
                                variant: c.TextVariant.bodySmBold,
                                as: "h6",
                                color: c.Color.textDefault,
                                align: c.TextAlign.Center,
                                margin: [8, 0, 0, 0]
                              },
                              t("thingsToKeep")
                            ),
                            r.default.createElement(
                              m.Box,
                              { marginRight: 4, marginLeft: 5, marginTop: 6 },
                              S.ticker &&
                                r.default.createElement(
                                  m.Box,
                                  {
                                    display: c.Display.Flex,
                                    alignItems: c.AlignItems.center,
                                    marginBottom: 2,
                                    paddingBottom: 2,
                                    className: "new-network-info__bullet-paragraph",
                                    "data-testid": "new-network-info__bullet-paragraph"
                                  },
                                  r.default.createElement(m.Box, { marginRight: 4, color: c.Color.textDefault }, "•"),
                                  r.default.createElement(
                                    m.Text,
                                    {
                                      variant: c.TextVariant.bodySm,
                                      as: "h6",
                                      color: c.Color.textDefault,
                                      display: c.Display.InlineBlock,
                                      key: "nativeTokenInfo"
                                    },
                                    t("nativeToken", [
                                      r.default.createElement(
                                        m.Text,
                                        { variant: c.TextVariant.bodySmBold, as: "h6", display: c.Display.InlineBlock, key: "ticker" },
                                        S.ticker
                                      )
                                    ])
                                  )
                                ),
                              r.default.createElement(
                                m.Box,
                                {
                                  display: c.Display.Flex,
                                  alignItems: c.AlignItems.center,
                                  marginBottom: 2,
                                  paddingBottom: 2,
                                  className: M && b ? null : "new-network-info__bullet-paragraph"
                                },
                                r.default.createElement(m.Box, { marginRight: 4, color: c.Color.textDefault }, "•"),
                                r.default.createElement(
                                  m.Text,
                                  {
                                    variant: c.TextVariant.bodySm,
                                    as: "h6",
                                    color: c.Color.textDefault,
                                    display: c.Display.InlineBlock,
                                    className: "new-network-info__bullet-paragraph__text"
                                  },
                                  t("attemptSendingAssets"),
                                  " ",
                                  r.default.createElement(
                                    "a",
                                    {
                                      href: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995",
                                      target: "_blank",
                                      rel: "noreferrer"
                                    },
                                    r.default.createElement(
                                      m.Text,
                                      {
                                        variant: c.TextVariant.bodySm,
                                        as: "h6",
                                        color: c.Color.infoDefault,
                                        display: c.Display.InlineBlock
                                      },
                                      t("learnMoreUpperCase")
                                    )
                                  )
                                )
                              ),
                              M && b
                                ? null
                                : r.default.createElement(
                                    m.Box,
                                    {
                                      display: c.Display.Flex,
                                      alignItems: c.AlignItems.center,
                                      marginBottom: 2,
                                      paddingBottom: 2,
                                      "data-testid": "new-network-info__add-token-manually"
                                    },
                                    r.default.createElement(m.Box, { marginRight: 4, color: c.Color.textDefault }, "•"),
                                    r.default.createElement(
                                      m.Box,
                                      null,
                                      r.default.createElement(
                                        m.Text,
                                        {
                                          variant: c.TextVariant.bodySm,
                                          as: "h6",
                                          color: c.Color.textDefault,
                                          className: "new-network-info__token-show-up"
                                        },
                                        t("tokenShowUp"),
                                        " ",
                                        r.default.createElement(
                                          g.default,
                                          {
                                            type: "link",
                                            onClick: () => {
                                              o.push(d.IMPORT_TOKEN_ROUTE), T(!1), (0, f.setFirstTimeUsedNetwork)(S.chainId);
                                            },
                                            className: "new-network-info__button"
                                          },
                                          r.default.createElement(
                                            m.Text,
                                            {
                                              variant: c.TextVariant.bodySm,
                                              as: "h6",
                                              color: c.Color.infoDefault,
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
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = v(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = e("react-router-dom"),
                  i = e("../../../../shared/constants/tokens"),
                  l = b(e("../../../../shared/lib/fetch-with-cache")),
                  s = e("../../../contexts/i18n"),
                  u = e("../../../ducks/metamask/metamask"),
                  c = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../selectors"),
                  f = e("../../../store/actions"),
                  m = e("../../component-library"),
                  g = b(e("../button")),
                  h = b(e("../popover"));
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (v = function (e) {
                    return e ? o : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/new-network-info/new-network-info.js" }
    ],
    [
      5454,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useNftsCollections": 5605,
        "../../../selectors": 5958,
        "../box": 5373,
        "../identicon": 5430,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = d(e("react")),
                  n = d(e("prop-types")),
                  a = e("react-redux"),
                  i = d(e("../box")),
                  l = e("../../../helpers/constants/design-system"),
                  s = d(e("../identicon")),
                  u = e("../../../selectors"),
                  c = e("../../../hooks/useNftsCollections");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ assetName: e, tokenAddress: t }) {
                  var o;
                  const { collections: n } = (0, c.useNftsCollections)(),
                    d = null === (o = (0, a.useSelector)(u.getTokenList)[t.toLowerCase()]) || void 0 === o ? void 0 : o.iconUrl;
                  return r.default.createElement(
                    i.default,
                    null,
                    (() => {
                      var t;
                      const o = Object.values(n).find(({ collectionName: t }) => t === e);
                      return (null != o && o.collectionImage) || d
                        ? r.default.createElement(s.default, { diameter: 24, image: (null == o ? void 0 : o.collectionImage) || d })
                        : r.default.createElement(
                            i.default,
                            { color: l.Color.overlayInverse, textAlign: l.TextAlign.Center, className: "collection-image-alt" },
                            (null == e || null === (t = e[0]) || void 0 === t ? void 0 : t.toUpperCase()) ?? null
                          );
                    })()
                  );
                }
                p.propTypes = { assetName: n.default.string, tokenAddress: n.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nft-collection-image/nft-collection-image.js" }
    ],
    [
      5455,
      { "./nickname-popover.component": 5456 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./nickname-popover.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nickname-popover/index.js" }
    ],
    [
      5456,
      {
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../button": 5377,
        "../identicon": 5430,
        "../popover": 5465,
        "../tooltip": 5502,
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
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = v(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = e("react-redux"),
                  a = b(e("prop-types")),
                  i = e("react-router-dom"),
                  l = e("../../../contexts/i18n"),
                  s = b(e("../tooltip")),
                  u = b(e("../popover")),
                  c = b(e("../button")),
                  d = b(e("../identicon")),
                  p = e("../../../helpers/utils/util"),
                  f = e("../../../hooks/useCopyToClipboard"),
                  m = e("../../../selectors"),
                  g = e("../../../helpers/constants/routes"),
                  h = e("../../component-library");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (v = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const y = ({ address: e, nickname: t, onClose: o = null, onAdd: a = null, explorerLink: b }) => {
                  var v;
                  const y = (0, r.useContext)(l.I18nContext),
                    T = (0, i.useHistory)(),
                    C = (0, r.useCallback)(() => {
                      a();
                    }, [a]),
                    [k, M] = (0, f.useCopyToClipboard)(),
                    S = (0, n.useSelector)(m.getTokenList),
                    A = (0, n.useSelector)(m.getBlockExplorerLinkText);
                  return r.default.createElement(
                    "div",
                    { className: "nickname-popover" },
                    r.default.createElement(
                      u.default,
                      { onClose: o, className: "nickname-popover__popover-wrap" },
                      r.default.createElement(d.default, {
                        address: e,
                        diameter: 36,
                        className: "nickname-popover__identicon",
                        image: null === (v = S[e.toLowerCase()]) || void 0 === v ? void 0 : v.iconUrl
                      }),
                      r.default.createElement("div", { className: "nickname-popover__address" }, t || (0, p.shortenAddress)(e)),
                      r.default.createElement(
                        "div",
                        { className: "nickname-popover__public-address" },
                        r.default.createElement("div", { className: "nickname-popover__public-address__constant" }, e),
                        r.default.createElement(
                          s.default,
                          { position: "bottom", title: y(k ? "copiedExclamation" : "copyToClipboard") },
                          r.default.createElement(h.ButtonIcon, {
                            iconName: k ? h.IconName.CopySuccess : h.IconName.Copy,
                            size: h.IconSize.Sm,
                            onClick: () => M(e)
                          })
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "nickname-popover__view-on-block-explorer" },
                        r.default.createElement(
                          c.default,
                          {
                            type: "link",
                            className: "nickname-popover__etherscan-link",
                            onClick:
                              "addBlockExplorer" === A.firstPart
                                ? () => {
                                    T.push(`${g.NETWORKS_ROUTE}#blockExplorerUrl`);
                                  }
                                : () => {
                                    global.platform.openTab({ url: b });
                                  },
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "addBlockExplorer" === A.firstPart ? y("addBlockExplorer") : y("etherscanView")
                          },
                          "addBlockExplorer" === A.firstPart ? y("addBlockExplorer") : y("viewOnBlockExplorer")
                        )
                      ),
                      r.default.createElement(
                        c.default,
                        { type: "primary", className: "nickname-popover__footer-button", onClick: C },
                        y(t ? "editANickname" : "addANickname")
                      )
                    )
                  );
                };
                y.propTypes = {
                  address: a.default.string,
                  nickname: a.default.string,
                  onClose: a.default.func,
                  onAdd: a.default.func,
                  explorerLink: a.default.string
                };
                o.default = y;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/nickname-popover/nickname-popover.component.js" }
    ],
    [
      5457,
      {
        "../../../../shared/constants/tokens": 4769,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = c);
                var r = u(e("react")),
                  n = u(e("classnames")),
                  a = u(e("prop-types")),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../../shared/constants/tokens"),
                  s = e("../../component-library");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({
                  detailText: e = "",
                  value: t = 0,
                  onChange: o,
                  error: a = "",
                  autoFocus: u = !1,
                  allowDecimals: c = !0,
                  disabled: d = !1,
                  dataTestId: p,
                  placeholder: f,
                  id: m,
                  name: g,
                  inputRef: h
                }) {
                  return r.default.createElement(
                    "div",
                    { className: (0, n.default)("numeric-input", { "numeric-input--error": a }) },
                    r.default.createElement("input", {
                      type: "number",
                      value: t,
                      onKeyDown: (e) => {
                        c || "." !== e.key || e.preventDefault();
                      },
                      onChange: (e) => {
                        var t;
                        const r = e.target.value,
                          n = l.DECIMAL_REGEX.exec(r);
                        (null == n || null === (t = n[1]) || void 0 === t ? void 0 : t.length) >= 15 ||
                          null == o ||
                          o(parseFloat(r || 0, 10));
                      },
                      min: "0",
                      autoFocus: u,
                      disabled: d,
                      "data-testid": p,
                      placeholder: f,
                      id: m,
                      name: g,
                      ref: h
                    }),
                    e &&
                      r.default.createElement(s.Text, { color: i.TextColor.textAlternative, variant: i.TextVariant.bodySm, as: "span" }, e)
                  );
                }
                c.propTypes = {
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
      5458,
      { "./page-container-footer": 5460, "./page-container-header": 5462, "./page-container.component": 5464 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "PageContainerFooter", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  }),
                  Object.defineProperty(o, "PageContainerHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r = i(e("./page-container-header")),
                  n = i(e("./page-container-footer")),
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
      5459,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = i(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(r, a, l) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (i = function (e) {
                    return e ? o : t;
                  })(e);
                }
                class l extends n.Component {
                  render() {
                    return n.default.createElement("div", { className: "page-container__content" }, this.props.children);
                  }
                }
                (o.default = l),
                  (function (e, t, o) {
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o);
                  })(l, "propTypes", { children: a.default.node.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-content.component.js" }
    ],
    [
      5460,
      { "./page-container-footer.component": 5461 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./page-container-footer.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-footer/index.js" }
    ],
    [
      5461,
      { "../../button": 5377, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = l(e("prop-types")),
                  a = l(e("classnames")),
                  i = l(e("../../button"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function u(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class c extends r.Component {
                  render() {
                    const {
                      children: e,
                      onCancel: t,
                      cancelText: o,
                      onSubmit: n,
                      submitText: l,
                      disabled: s,
                      submitButtonType: u,
                      hideCancel: c,
                      cancelButtonType: d,
                      buttonSizeLarge: p = !1,
                      footerClassName: f,
                      footerButtonClassName: m
                    } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: (0, a.default)("page-container__footer", f) },
                      r.default.createElement(
                        "footer",
                        null,
                        !c &&
                          r.default.createElement(
                            i.default,
                            {
                              type: d || "secondary",
                              large: p,
                              className: (0, a.default)("page-container__footer-button", "page-container__footer-button__cancel", m),
                              onClick: (e) => t(e),
                              "data-testid": "page-container-footer-cancel"
                            },
                            o || this.context.t("cancel")
                          ),
                        r.default.createElement(
                          i.default,
                          {
                            type: u || "primary",
                            large: p,
                            className: (0, a.default)("page-container__footer-button", m),
                            disabled: s,
                            onClick: (e) => n(e),
                            "data-testid": "page-container-footer-next"
                          },
                          l || this.context.t("next")
                        )
                      ),
                      e && r.default.createElement("div", { className: "page-container__footer-secondary" }, e)
                    );
                  }
                }
                (o.default = c),
                  u(c, "propTypes", {
                    children: n.default.node,
                    onCancel: n.default.func,
                    cancelText: n.default.string,
                    cancelButtonType: n.default.string,
                    onSubmit: n.default.func,
                    submitText: n.default.string,
                    disabled: n.default.bool,
                    submitButtonType: n.default.string,
                    hideCancel: n.default.bool,
                    buttonSizeLarge: n.default.bool,
                    footerClassName: n.default.string,
                    footerButtonClassName: n.default.string
                  }),
                  u(c, "contextTypes", { t: n.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-footer/page-container-footer.component.js" }
    ],
    [
      5462,
      { "./page-container-header.component": 5463 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./page-container-header.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-header/index.js" }
    ],
    [
      5463,
      { "../../button": 5377, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n,
                  a,
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  l = c(e("prop-types")),
                  s = c(e("classnames")),
                  u = c(e("../../button"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (d = function (e) {
                    return e ? o : t;
                  })(e);
                }
                class p extends i.Component {
                  renderTabs() {
                    const { tabs: e } = this.props;
                    return e ? i.default.createElement("ul", { className: "page-container__tabs" }, e) : null;
                  }
                  renderCloseAction() {
                    const { hideClose: e, onClose: t, headerCloseText: o } = this.props;
                    return e
                      ? null
                      : o
                      ? t &&
                        i.default.createElement(
                          u.default,
                          { type: "link", className: "page-container__header-close-text", onClick: () => t() },
                          o
                        )
                      : t &&
                        i.default.createElement("button", {
                          className: "page-container__header-close",
                          onClick: () => t(),
                          "aria-label": "close"
                        });
                  }
                  renderHeaderRow() {
                    const { showBackButton: e, onBackButtonClick: t, backButtonStyles: o, backButtonString: r } = this.props;
                    return (
                      e &&
                      i.default.createElement(
                        "div",
                        { className: "page-container__header-row" },
                        i.default.createElement("span", { className: "page-container__back-button", onClick: t, style: o }, r || "Back")
                      )
                    );
                  }
                  render() {
                    const { title: e, subtitle: t, tabs: o, className: r, hideClose: n } = this.props;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, s.default)("page-container__header", r, { "page-container__header--no-padding-bottom": Boolean(o) }),
                        "data-testid": "page-container__header"
                      },
                      this.renderHeaderRow(),
                      e &&
                        i.default.createElement(
                          "div",
                          { className: (0, s.default)("page-container__title", { "page-container__title--no-margin-right": n }) },
                          e
                        ),
                      t ? i.default.createElement("div", { className: "page-container__subtitle" }, t) : null,
                      this.renderCloseAction(),
                      this.renderTabs()
                    );
                  }
                }
                (o.default = p),
                  (r = p),
                  (n = "propTypes"),
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
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var o = e[Symbol.toPrimitive];
                      if (o !== undefined) {
                        var r = o.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(n)) in r
                    ? Object.defineProperty(r, n, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                    : (r[n] = a);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container-header/page-container-header.component.js" }
    ],
    [
      5464,
      { "./page-container-footer": 5460, "./page-container-header": 5462, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = s(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = l(e("prop-types")),
                  a = l(e("./page-container-header")),
                  i = l(e("./page-container-footer"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (s = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function u(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class c extends r.PureComponent {
                  constructor(...e) {
                    super(...e), u(this, "state", { activeTabIndex: this.props.defaultActiveTabIndex || 0 });
                  }
                  handleTabClick(e) {
                    this.setState({ activeTabIndex: e });
                  }
                  renderTabs() {
                    const { tabsComponent: e } = this.props;
                    if (!e) return null;
                    const t = r.default.Children.count(e.props.children);
                    return r.default.Children.map(
                      e.props.children,
                      (e, o) =>
                        e &&
                        r.default.cloneElement(e, {
                          onClick: (e) => this.handleTabClick(e),
                          tabIndex: o,
                          isActive: t > 1 && o === this.state.activeTabIndex,
                          key: o,
                          className: "page-container__tab"
                        })
                    );
                  }
                  renderActiveTabContent() {
                    const { tabsComponent: e } = this.props;
                    let { children: t } = e.props;
                    t = t.filter(Boolean);
                    const { activeTabIndex: o } = this.state;
                    return (t[o] || t[0]).props.children;
                  }
                  renderContent() {
                    const { contentComponent: e, tabsComponent: t } = this.props;
                    return e || (t ? this.renderActiveTabContent() : null);
                  }
                  render() {
                    const {
                      title: e,
                      subtitle: t,
                      onClose: o,
                      showBackButton: n,
                      onBackButtonClick: l,
                      backButtonStyles: s,
                      backButtonString: u,
                      onCancel: c,
                      cancelText: d,
                      onSubmit: p,
                      submitText: f,
                      disabled: m,
                      headerCloseText: g,
                      hideCancel: h
                    } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "page-container" },
                      r.default.createElement(a.default, {
                        title: e,
                        subtitle: t,
                        onClose: o,
                        showBackButton: n,
                        onBackButtonClick: l,
                        backButtonStyles: s,
                        backButtonString: u,
                        tabs: this.renderTabs(),
                        headerCloseText: g
                      }),
                      r.default.createElement(
                        "div",
                        { className: "page-container__bottom" },
                        r.default.createElement("div", { className: "page-container__content" }, this.renderContent()),
                        r.default.createElement(i.default, {
                          onCancel: c,
                          cancelText: d,
                          hideCancel: h,
                          onSubmit: p,
                          submitText: f,
                          disabled: m
                        })
                      )
                    );
                  }
                }
                (o.default = c),
                  u(c, "contextTypes", { t: n.default.func }),
                  u(c, "propTypes", {
                    backButtonString: n.default.string,
                    backButtonStyles: n.default.object,
                    headerCloseText: n.default.string,
                    onBackButtonClick: n.default.func,
                    onClose: n.default.func,
                    showBackButton: n.default.bool,
                    subtitle: n.default.string,
                    title: n.default.string.isRequired,
                    defaultActiveTabIndex: n.default.number,
                    tabsComponent: n.default.node,
                    contentComponent: n.default.node,
                    cancelText: n.default.string,
                    disabled: n.default.bool,
                    hideCancel: n.default.bool,
                    onCancel: n.default.func,
                    onSubmit: n.default.func,
                    submitText: n.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/page-container/page-container.component.js" }
    ],
    [
      5465,
      { "./popover.component": 5466 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./popover.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/popover/index.js" }
    ],
    [
      5466,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../box": 5373,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-dom": 4317
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = p(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = d(e("react-dom")),
                  a = d(e("prop-types")),
                  i = d(e("classnames")),
                  l = e("../../../hooks/useI18nContext"),
                  s = d(e("../box")),
                  u = e("../../../helpers/constants/design-system"),
                  c = e("../../component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (p = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function f(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                const g = {
                    padding: [6, 4, 4],
                    display: "flex",
                    flexDirection: u.FLEX_DIRECTION.COLUMN,
                    backgroundColor: u.BackgroundColor.backgroundDefault,
                    borderRadius: "xl"
                  },
                  h = {
                    display: "flex",
                    flexDirection: u.FLEX_DIRECTION.COLUMN,
                    justifyContent: u.JustifyContent.flexStart,
                    alignItems: u.AlignItems.stretch,
                    borderRadius: "xl"
                  },
                  b = { display: "flex", justifyContent: u.JustifyContent.spaceBetween, padding: [4, 6, 6] },
                  v = ({
                    title: e,
                    subtitle: t = "",
                    children: o,
                    footer: n,
                    footerClassName: a,
                    onBack: d,
                    onClose: p,
                    onScroll: f,
                    className: v,
                    contentClassName: y,
                    showArrow: T,
                    CustomBackground: C,
                    popoverRef: k,
                    showScrollDown: M,
                    onScrollDownButtonClick: S,
                    centerTitle: A,
                    headerProps: O = g,
                    contentProps: E = h,
                    footerProps: P = b
                  }) => {
                    const _ = (0, l.useI18nContext)(),
                      w = e || d || t || p,
                      B = () =>
                        r.default.createElement(
                          s.default,
                          m({}, g, O, { className: "popover-header" }),
                          r.default.createElement(
                            s.default,
                            {
                              display: u.DISPLAY.FLEX,
                              alignItems: u.AlignItems.center,
                              justifyContent: A ? null : u.JustifyContent.spaceBetween,
                              className: (0, i.default)("popover-header__title", { "popover-header__title--center": A }),
                              marginBottom: 2
                            },
                            d
                              ? r.default.createElement(c.ButtonIcon, {
                                  iconName: c.IconName.ArrowLeft,
                                  ariaLabel: _("back"),
                                  onClick: d,
                                  color: u.Color.iconDefault,
                                  size: u.Size.SM
                                })
                              : null,
                            r.default.createElement(
                              c.Text,
                              {
                                textAlign: A ? u.TextAlign.Center : u.TextAlign.Start,
                                ellipsis: !0,
                                variant: u.TextVariant.headingSm,
                                as: "h2",
                                width: u.BLOCK_SIZES.FULL
                              },
                              e
                            ),
                            p
                              ? r.default.createElement(c.ButtonIcon, {
                                  iconName: c.IconName.Close,
                                  ariaLabel: _("close"),
                                  "data-testid": "popover-close",
                                  onClick: p,
                                  size: u.Size.SM
                                })
                              : null
                          ),
                          t ? r.default.createElement(c.Text, { variant: u.TextVariant.bodySm }, t) : null
                        );
                    return r.default.createElement(
                      "div",
                      { className: "popover-container" },
                      C
                        ? r.default.createElement(C, { onClose: p })
                        : r.default.createElement("div", { className: "popover-bg", onClick: p }),
                      r.default.createElement(
                        "section",
                        { className: (0, i.default)("popover-wrap", v), ref: k },
                        T ? r.default.createElement("div", { className: "popover-arrow" }) : null,
                        w && r.default.createElement(B, null),
                        o
                          ? r.default.createElement(s.default, m({ className: (0, i.default)("popover-content", y), onScroll: f }, h, E), o)
                          : null,
                        M
                          ? r.default.createElement(
                              s.default,
                              {
                                display: u.DISPLAY.FLEX,
                                alignItems: u.AlignItems.center,
                                justifyContent: u.JustifyContent.center,
                                borderColor: u.BorderColor.borderDefault,
                                backgroundColor: u.BackgroundColor.backgroundDefault,
                                color: u.Color.iconDefault,
                                onClick: S,
                                className: "popover-scroll-button",
                                style: { bottom: n ? "140px" : "12px" },
                                "data-testid": "popover-scroll-button"
                              },
                              r.default.createElement(c.Icon, {
                                name: c.IconName.ArrowDown,
                                color: u.IconColor.primaryDefault,
                                size: c.IconSize.Md,
                                "aria-label": _("scrollDown")
                              })
                            )
                          : null,
                        n ? r.default.createElement(s.default, m({ className: (0, i.default)("popover-footer", a) }, b, P), n) : null
                      )
                    );
                  };
                v.propTypes = {
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
                class y extends r.PureComponent {
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
                    const e = r.default.createElement(v, this.props);
                    return this.rootNode ? n.default.createPortal(e, this.instanceNode) : e;
                  }
                }
                (o.default = y), f(y, "propTypes", v.propTypes);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/popover/popover.component.js" }
    ],
    [
      5467,
      { "./pulse-loader": 5468 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./pulse-loader")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/pulse-loader/index.js" }
    ],
    [
      5468,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  (o.default = function () {
                    return n.default.createElement(
                      "div",
                      { className: "pulse-loader", "data-testid": "pulse-loader" },
                      n.default.createElement("div", { className: "pulse-loader__loading-dot-one" }),
                      n.default.createElement("div", { className: "pulse-loader__loading-dot-two" }),
                      n.default.createElement("div", { className: "pulse-loader__loading-dot-three" })
                    );
                  });
                var r,
                  n = (r = e("react")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/pulse-loader/pulse-loader.js" }
    ],
    [
      5469,
      { "./qr-code": 5470 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./qr-code")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/qr-code/index.js" }
    ],
    [
      5470,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../contexts/metametrics": 5515,
        "../../multichain/address-copy-button": 5295,
        "../box/box": 5372,
        "ethereumjs-util": 3272,
        "prop-types": 4219,
        "qrcode-generator": 4304,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = m(e("prop-types")),
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = f(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = m(e("qrcode-generator")),
                  i = e("react-redux"),
                  l = e("ethereumjs-util"),
                  s = e("../../../../shared/modules/hexstring-utils"),
                  u = e("../../multichain/address-copy-button"),
                  c = m(e("../box/box")),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (f = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                o.default = (0, i.connect)(function (e) {
                  const { buyView: t, warning: o } = e.appState;
                  return { buyView: t, warning: o };
                })(g);
                function g({ Qr: e, warning: t }) {
                  const o = (0, n.useContext)(d.MetaMetricsContext),
                    { message: r, data: i } = e,
                    f = `${(0, l.isHexPrefixed)(i) ? "ethereum:" : ""}${(0, s.toChecksumHexAddress)(i)}`,
                    m = (0, a.default)(4, "M");
                  m.addData(f), m.make();
                  const g = r ? n.default.createElement("div", { className: "qr-code__header" }, r) : null;
                  return n.default.createElement(
                    "div",
                    { className: "qr-code" },
                    Array.isArray(r)
                      ? n.default.createElement(
                          "div",
                          { className: "qr-code__message-container" },
                          r.map((e, t) => n.default.createElement("div", { className: "qr_code__message", key: t }, e))
                        )
                      : g,
                    t ? n.default.createElement("span", { className: "qr-code__error" }, t) : null,
                    n.default.createElement("div", {
                      className: "qr-code__wrapper",
                      dangerouslySetInnerHTML: { __html: m.createTableTag(5, 24) }
                    }),
                    n.default.createElement(
                      c.default,
                      { marginBottom: 6 },
                      n.default.createElement(u.AddressCopyButton, {
                        wrap: !0,
                        address: i,
                        onClick: () => {
                          o({
                            category: p.MetaMetricsEventCategory.Accounts,
                            event: p.MetaMetricsEventName.PublicAddressCopied,
                            properties: { location: "Account Details Modal" }
                          });
                        }
                      })
                    )
                  );
                }
                g.propTypes = {
                  warning: r.default.node,
                  Qr: r.default.shape({
                    message: r.default.oneOfType([r.default.arrayOf(r.default.node), r.default.node]),
                    data: r.default.string.isRequired
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/qr-code/qr-code.js" }
    ],
    [
      5471,
      {
        "../../../../shared/modules/Numeric": 4780,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../tooltip": 5502,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = p);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = d(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = c(e("prop-types")),
                  a = e("../../../contexts/i18n"),
                  i = c(e("../tooltip")),
                  l = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  u = e("../../../../shared/modules/Numeric");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (d = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function p({ tokenName: e, currentTokenBalance: t, tokenValue: o, onEdit: n }) {
                  const c = (0, r.useContext)(a.I18nContext),
                    d = new u.Numeric(Number(o), 10).greaterThan(Number(t), 10);
                  return r.default.createElement(
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
                    r.default.createElement(
                      l.Box,
                      {
                        flexDirection: s.FlexDirection.Row,
                        display: s.Display.Flex,
                        alignItems: s.AlignItems.center,
                        className: "review-spending-cap__heading"
                      },
                      r.default.createElement(
                        l.Box,
                        { flexDirection: s.FlexDirection.Row, className: "review-spending-cap__heading-title" },
                        r.default.createElement(
                          l.Text,
                          { variant: s.TextVariant.bodySmBold, as: "h6", display: s.Display.InlineBlock },
                          c("dappRequestedSpendingCap")
                        ),
                        r.default.createElement(
                          l.Box,
                          { marginLeft: 2, display: s.Display.InlineBlock },
                          r.default.createElement(
                            i.default,
                            {
                              interactive: !0,
                              position: "top",
                              html: r.default.createElement(
                                l.Text,
                                {
                                  variant: s.TextVariant.bodySmBold,
                                  as: "h6",
                                  color: s.TextColor.textAlternative,
                                  className: "review-spending-cap__heading-title__tooltip"
                                },
                                d &&
                                  c("warningTooltipText", [
                                    r.default.createElement(
                                      l.Text,
                                      { key: "tooltip-text", variant: s.TextVariant.bodySmBold, as: "h6", color: s.TextColor.errorDefault },
                                      r.default.createElement(l.Icon, { name: l.IconName.Warning, style: { verticalAlign: "middle" } }),
                                      c("beCareful")
                                    )
                                  ]),
                                0 === Number(o) && c("revokeSpendingCapTooltipText")
                              )
                            },
                            d &&
                              r.default.createElement(l.Icon, {
                                className: "review-spending-cap__heading-title__tooltip__warning-icon",
                                name: l.IconName.Danger,
                                color: s.IconColor.errorDefault,
                                size: l.IconSize.Sm,
                                style: { verticalAlign: "middle" }
                              }),
                            0 === Number(o) &&
                              r.default.createElement(l.Icon, {
                                className: "review-spending-cap__heading-title__tooltip__question-icon",
                                name: l.IconName.Question,
                                color: s.IconColor.iconDefault
                              })
                          )
                        )
                      ),
                      r.default.createElement(
                        l.Box,
                        { className: "review-spending-cap__heading-detail", textAlign: s.TextAlign.End },
                        r.default.createElement(
                          l.ButtonLink,
                          {
                            size: s.Size.auto,
                            onClick: (e) => {
                              e.preventDefault(), n();
                            }
                          },
                          c("edit")
                        )
                      )
                    ),
                    r.default.createElement(
                      l.Box,
                      { className: "review-spending-cap__value" },
                      r.default.createElement(
                        l.Text,
                        {
                          color: d ? s.TextColor.errorDefault : s.TextColor.textDefault,
                          variant: s.TextVariant.bodySmBold,
                          as: "h6",
                          marginBottom: 3
                        },
                        o,
                        " ",
                        e
                      )
                    )
                  );
                }
                p.propTypes = {
                  tokenName: n.default.string,
                  currentTokenBalance: n.default.string,
                  tokenValue: n.default.string,
                  onEdit: n.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/review-spending-cap/review-spending-cap.js" }
    ],
    [
      5472,
      { "./sender-to-recipient.component": 5473 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./sender-to-recipient.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/index.js" }
    ],
    [
      5473,
      {
        "../../../../shared/constants/copy": 4752,
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../app/modals/nickname-popovers": 4985,
        "../../component-library": 5242,
        "../account-mismatch-warning/account-mismatch-warning.component": 5368,
        "../identicon": 5430,
        "../tooltip": 5502,
        "./sender-to-recipient.constants": 5474,
        classnames: 2952,
        "copy-to-clipboard": 3004,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.RecipientWithAddress = C), (o.default = M);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = v(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = b(e("prop-types")),
                  a = b(e("classnames")),
                  i = b(e("copy-to-clipboard")),
                  l = b(e("../tooltip")),
                  s = b(e("../identicon")),
                  u = e("../../../helpers/utils/util"),
                  c = b(e("../account-mismatch-warning/account-mismatch-warning.component")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../../shared/modules/hexstring-utils"),
                  f = e("../../../../shared/constants/copy"),
                  m = b(e("../../app/modals/nickname-popovers")),
                  g = e("../../component-library"),
                  h = e("./sender-to-recipient.constants");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (v = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const y = {
                  [h.DEFAULT_VARIANT]: "sender-to-recipient--default",
                  [h.CARDS_VARIANT]: "sender-to-recipient--cards",
                  [h.FLAT_VARIANT]: "sender-to-recipient--flat"
                };
                function T({
                  addressOnly: e,
                  checksummedSenderAddress: t,
                  senderName: o,
                  onSenderClick: n,
                  senderAddress: m,
                  warnUserOnAccountMismatch: g
                }) {
                  const h = (0, d.useI18nContext)(),
                    [b, v] = (0, r.useState)(!1);
                  let y = r.default.createElement("p", null, h("copiedExclamation"));
                  return (
                    b ||
                      (y = e
                        ? r.default.createElement("p", null, h("copyAddress"))
                        : r.default.createElement(
                            "p",
                            null,
                            (0, u.shortenAddress)(t),
                            r.default.createElement("br", null),
                            h("copyAddress")
                          )),
                    r.default.createElement(
                      "div",
                      {
                        className: (0, a.default)("sender-to-recipient__party sender-to-recipient__party--sender"),
                        onClick: () => {
                          v(!0), (0, i.default)(t, f.COPY_OPTIONS), n && n();
                        }
                      },
                      r.default.createElement(
                        "div",
                        { className: "sender-to-recipient__sender-icon" },
                        r.default.createElement(s.default, { address: (0, p.toChecksumHexAddress)(m), diameter: 24 })
                      ),
                      r.default.createElement(
                        l.default,
                        {
                          position: "bottom",
                          html: y,
                          wrapperClassName: "sender-to-recipient__tooltip-wrapper",
                          containerClassName: "sender-to-recipient__tooltip-container",
                          onHidden: () => v(!1)
                        },
                        r.default.createElement(
                          "div",
                          { className: "sender-to-recipient__name" },
                          e ? r.default.createElement("span", null, `${o || (0, u.shortenAddress)(t)}`) : o
                        )
                      ),
                      g && r.default.createElement(c.default, { address: m })
                    )
                  );
                }
                function C({
                  checksummedRecipientAddress: e,
                  onRecipientClick: t,
                  addressOnly: o,
                  recipientNickname: n,
                  recipientEns: a,
                  recipientName: c,
                  recipientMetadataName: p,
                  recipientIsOwnedAccount: g
                }) {
                  const h = (0, d.useI18nContext)(),
                    [b, v] = (0, r.useState)(!1),
                    [y, T] = (0, r.useState)(!1);
                  let C = r.default.createElement("p", null, h("copiedExclamation"));
                  return (
                    y ||
                      (C = o
                        ? r.default.createElement("p", null, h("copyAddress"))
                        : r.default.createElement(
                            "p",
                            null,
                            (0, u.shortenAddress)(e),
                            r.default.createElement("br", null),
                            h("copyAddress")
                          )),
                    r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        {
                          className:
                            "sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address",
                          onClick: () => {
                            g ? (T(!0), (0, i.default)(e, f.COPY_OPTIONS)) : (v(!0), t && t());
                          }
                        },
                        r.default.createElement(
                          "div",
                          { className: "sender-to-recipient__sender-icon" },
                          r.default.createElement(s.default, { address: e, diameter: 24 })
                        ),
                        r.default.createElement(
                          l.default,
                          {
                            position: "bottom",
                            disabled: !c,
                            html: C,
                            wrapperClassName: "sender-to-recipient__tooltip-wrapper",
                            containerClassName: "sender-to-recipient__tooltip-container",
                            onHidden: () => T(!1)
                          },
                          r.default.createElement(
                            "div",
                            { className: "sender-to-recipient__name", "data-testid": "sender-to-recipient__name" },
                            o
                              ? c || n || p || a || (0, u.shortenAddress)(e)
                              : c || n || p || a || (0, u.shortenAddress)(e) || h("newContract")
                          )
                        )
                      ),
                      b ? r.default.createElement(m.default, { onClose: () => v(!1), address: e }) : null
                    )
                  );
                }
                function k({ variant: e }) {
                  return e === h.DEFAULT_VARIANT
                    ? r.default.createElement(
                        "div",
                        { className: "sender-to-recipient__arrow-container" },
                        r.default.createElement(
                          "div",
                          { className: "sender-to-recipient__arrow-circle" },
                          r.default.createElement("i", { className: "fa fa-arrow-right sender-to-recipient__arrow-circle__icon" })
                        )
                      )
                    : r.default.createElement(
                        "div",
                        { className: "sender-to-recipient__arrow-container" },
                        r.default.createElement(g.Icon, { name: g.IconName.ArrowRight })
                      );
                }
                function M({
                  senderAddress: e,
                  addressOnly: t,
                  senderName: o,
                  recipientNickname: n,
                  recipientName: i,
                  recipientMetadataName: l,
                  recipientEns: s,
                  onRecipientClick: u,
                  onSenderClick: c,
                  recipientAddress: f,
                  variant: m,
                  warnUserOnAccountMismatch: g,
                  recipientIsOwnedAccount: h
                }) {
                  const b = (0, d.useI18nContext)(),
                    v = (0, p.toChecksumHexAddress)(e),
                    M = (0, p.toChecksumHexAddress)(f);
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)("sender-to-recipient", y[m]), "data-testid": "sender-to-recipient" },
                    r.default.createElement(T, {
                      checksummedSenderAddress: v,
                      addressOnly: t,
                      senderName: o,
                      onSenderClick: c,
                      senderAddress: e,
                      warnUserOnAccountMismatch: g
                    }),
                    r.default.createElement(k, { variant: m }),
                    f
                      ? r.default.createElement(C, {
                          checksummedRecipientAddress: M,
                          onRecipientClick: u,
                          addressOnly: t,
                          recipientNickname: n,
                          recipientEns: s,
                          recipientName: i,
                          recipientMetadataName: l,
                          recipientIsOwnedAccount: h
                        })
                      : r.default.createElement(
                          "div",
                          { className: "sender-to-recipient__party sender-to-recipient__party--recipient" },
                          r.default.createElement("i", { className: "fa fa-file-text-o" }),
                          r.default.createElement("div", { className: "sender-to-recipient__name" }, b("newContract"))
                        )
                  );
                }
                (T.propTypes = {
                  senderName: n.default.string,
                  checksummedSenderAddress: n.default.string,
                  addressOnly: n.default.bool,
                  senderAddress: n.default.string,
                  onSenderClick: n.default.func,
                  warnUserOnAccountMismatch: n.default.bool
                }),
                  (C.propTypes = {
                    checksummedRecipientAddress: n.default.string,
                    recipientName: n.default.string,
                    recipientMetadataName: n.default.string,
                    recipientEns: n.default.string,
                    recipientNickname: n.default.string,
                    addressOnly: n.default.bool,
                    onRecipientClick: n.default.func,
                    recipientIsOwnedAccount: n.default.bool
                  }),
                  (k.propTypes = { variant: n.default.oneOf([h.DEFAULT_VARIANT, h.CARDS_VARIANT, h.FLAT_VARIANT]) }),
                  (M.defaultProps = { variant: h.DEFAULT_VARIANT, warnUserOnAccountMismatch: !0 }),
                  (M.propTypes = {
                    senderName: n.default.string,
                    senderAddress: n.default.string,
                    recipientName: n.default.string,
                    recipientMetadataName: n.default.string,
                    recipientEns: n.default.string,
                    recipientAddress: n.default.string,
                    recipientNickname: n.default.string,
                    variant: n.default.oneOf([h.DEFAULT_VARIANT, h.CARDS_VARIANT, h.FLAT_VARIANT]),
                    addressOnly: n.default.bool,
                    onRecipientClick: n.default.func,
                    onSenderClick: n.default.func,
                    warnUserOnAccountMismatch: n.default.bool,
                    recipientIsOwnedAccount: n.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/sender-to-recipient.component.js" }
    ],
    [
      5474,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.FLAT_VARIANT = o.DEFAULT_VARIANT = o.CARDS_VARIANT = void 0);
                (o.DEFAULT_VARIANT = "DEFAULT_VARIANT"), (o.CARDS_VARIANT = "CARDS_VARIANT"), (o.FLAT_VARIANT = "FLAT_VARIANT");
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/sender-to-recipient/sender-to-recipient.constants.js" }
    ],
    [
      5475,
      { "./show-hide-toggle": 5476 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./show-hide-toggle")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/show-hide-toggle/index.js" }
    ],
    [
      5476,
      { "../icon/icon-eye": 5420, "../icon/icon-eye-slash": 5419, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../icon/icon-eye")),
                  l = s(e("../icon/icon-eye-slash"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({
                  id: e,
                  shown: t,
                  onChange: o,
                  ariaLabelHidden: n,
                  ariaLabelShown: s,
                  className: u,
                  "data-testid": c,
                  disabled: d,
                  title: p
                }) =>
                  r.default.createElement(
                    "div",
                    { className: (0, a.default)("show-hide-toggle", u) },
                    r.default.createElement("input", {
                      className: "show-hide-toggle__input",
                      id: e,
                      type: "checkbox",
                      checked: t,
                      onChange: o,
                      "data-testid": c,
                      disabled: d
                    }),
                    r.default.createElement(
                      "label",
                      { htmlFor: e, className: "show-hide-toggle__label", title: p },
                      t
                        ? r.default.createElement(i.default, { ariaLabel: s, className: "show-hide-toggle__icon" })
                        : r.default.createElement(l.default, { ariaLabel: n, className: "show-hide-toggle__icon" })
                    )
                  );
                u.propTypes = {
                  id: n.default.string.isRequired,
                  shown: n.default.bool.isRequired,
                  onChange: n.default.func.isRequired,
                  ariaLabelHidden: n.default.string.isRequired,
                  ariaLabelShown: n.default.string.isRequired,
                  className: n.default.string,
                  "data-testid": n.default.string,
                  disabled: n.default.bool,
                  title: n.default.string
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/show-hide-toggle/show-hide-toggle.js" }
    ],
    [
      5477,
      { "./simulation-error-message": 5478 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./simulation-error-message")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/simulation-error-message/index.js" }
    ],
    [
      5478,
      {
        "../../../../.storybook/i18n": 1,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = c);
                var r,
                  n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  i = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  s = e("../../../../.storybook/i18n");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function c({ userAcknowledgedGasMissing: e = !1, setUserAcknowledgedGasMissing: t }) {
                  const o = (0, n.useContext)(s.I18nContext);
                  return !0 === e
                    ? n.default.createElement(i.BannerAlert, { severity: l.SEVERITIES.DANGER }, o("simulationErrorMessageV2"))
                    : n.default.createElement(
                        i.BannerAlert,
                        { severity: l.SEVERITIES.DANGER, actionButtonLabel: o("proceedWithTransaction"), actionButtonOnClick: t },
                        o("simulationErrorMessageV2")
                      );
                }
                c.propTypes = { userAcknowledgedGasMissing: a.default.bool, setUserAcknowledgedGasMissing: a.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/simulation-error-message/simulation-error-message.js" }
    ],
    [
      5479,
      { "./site-icon": 5480 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./site-icon")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-icon/index.js" }
    ],
    [
      5480,
      { "../icon-border": 5414, "../icon-with-fallback": 5418, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = s);
                var r = l(e("react")),
                  n = l(e("prop-types")),
                  a = l(e("../icon-border")),
                  i = l(e("../icon-with-fallback"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ icon: e = null, name: t = "", size: o, className: n }) {
                  const l = Math.floor(0.75 * o);
                  return r.default.createElement(
                    a.default,
                    { size: o, className: n },
                    r.default.createElement(i.default, { icon: e, name: t, size: l })
                  );
                }
                s.propTypes = {
                  className: n.default.string,
                  icon: n.default.string,
                  name: n.default.string,
                  size: n.default.number.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-icon/site-icon.js" }
    ],
    [
      5481,
      { "./site-origin": 5482 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./site-origin")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-origin/index.js" }
    ],
    [
      5482,
      {
        "../../../helpers/constants/design-system": 5537,
        "../chip": 5386,
        "../icon-with-fallback": 5418,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = c);
                var r = u(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = u(e("../chip")),
                  l = u(e("../icon-with-fallback")),
                  s = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ siteOrigin: e, iconSrc: t, iconName: o, chip: n, className: u, title: c, leftIcon: d, rightIcon: p }) {
                  return r.default.createElement(
                    "div",
                    { className: (0, a.default)("site-origin", u), title: c },
                    n
                      ? r.default.createElement(i.default, {
                          borderColor: s.BorderColor.borderMuted,
                          label: e,
                          maxContent: !1,
                          leftIcon: d || r.default.createElement(l.default, { icon: t, name: o, size: 24 }),
                          rightIcon: p
                        })
                      : r.default.createElement("bdi", { dir: "ltr" }, e)
                  );
                }
                c.propTypes = {
                  siteOrigin: n.default.string.isRequired,
                  iconName: n.default.string,
                  iconSrc: n.default.string,
                  className: n.default.string,
                  title: n.default.string,
                  chip: n.default.bool,
                  leftIcon: n.default.node,
                  rightIcon: n.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/site-origin/site-origin.js" }
    ],
    [
      5483,
      { "./spinner.component": 5484 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./spinner.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/spinner/index.js" }
    ],
    [
      5484,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = a(e("react")),
                  n = a(e("prop-types"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ className: e = "", color: t = "var(--color-text-default)" }) =>
                  r.default.createElement(
                    "div",
                    { className: `spinner ${e}` },
                    r.default.createElement(
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
                      r.default.createElement(
                        "g",
                        { transform: "rotate(0 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.9166666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(30 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.8333333333333334s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(60 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.75s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(90 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.6666666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(120 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.5833333333333334s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(150 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.5s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(180 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.4166666666666667s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(210 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.3333333333333333s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(240 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.25s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(270 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.16666666666666666s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(300 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
                            attributeName: "opacity",
                            values: "1;0",
                            dur: "1s",
                            begin: "-0.08333333333333333s",
                            repeatCount: "indefinite"
                          })
                        )
                      ),
                      r.default.createElement(
                        "g",
                        { transform: "rotate(330 50 50)" },
                        r.default.createElement(
                          "rect",
                          { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                          r.default.createElement("animate", {
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
                i.propTypes = { className: n.default.string, color: n.default.string };
                o.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/spinner/spinner.component.js" }
    ],
    [
      5485,
      { "./tab": 5488, "./tabs.component": 5490 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "Tab", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  }),
                  Object.defineProperty(o, "Tabs", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = a(e("./tabs.component")),
                  n = a(e("./tab"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/index.js" }
    ],
    [
      5486,
      {
        "../../../../../helpers/constants/design-system": 5537,
        "../../../../component-library": 5242,
        "../../../dropdown": 5402,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.DropdownTab = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = c(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../../../../helpers/constants/design-system"),
                  l = e("../../../../component-library"),
                  s = u(e("../../../dropdown"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (c = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const d = ({
                  activeClassName: e,
                  className: t,
                  "data-testid": o,
                  isActive: n,
                  onClick: u,
                  onChange: c,
                  tabIndex: d,
                  options: p,
                  selectedOption: f
                }) => {
                  var m;
                  const [g, h] = (0, r.useState)(!1),
                    b = (0, r.useRef)(null),
                    v = (0, r.useCallback)(
                      (e) => {
                        c(e);
                      },
                      [c]
                    ),
                    y = null === (m = p.find((e) => e.value === f)) || void 0 === m ? void 0 : m.name;
                  return (
                    (0, r.useEffect)(() => {
                      function e(e) {
                        b.current && !b.current.contains(e.target) && g && h(!1);
                      }
                      return (
                        document.addEventListener("mousedown", e),
                        () => {
                          document.removeEventListener("mousedown", e);
                        }
                      );
                    }, [b, g]),
                    r.default.createElement(
                      l.Box,
                      {
                        as: "li",
                        className: (0, a.default)("tab", t, "transaction-insight-dropdown-wrapper", { "tab--active": n, [e]: e && n }),
                        "data-testid": o,
                        onClick: (e) => {
                          e.preventDefault(), u(d);
                        },
                        dataTestId: o,
                        flexDirection: i.FlexDirection.Row,
                        flexWrap: i.FlexWrap.NoWrap,
                        height: i.BlockSize.Full,
                        style: { cursor: "pointer", position: "relative", overflow: "visible" },
                        title: y
                      },
                      r.default.createElement(s.default, {
                        className: "transaction-insight-dropdown",
                        onChange: (e) => v(e),
                        options: p,
                        selectedOption: f,
                        title: "Transaction Insights",
                        style: { pointerEvents: n ? "auto" : "none" }
                      })
                    )
                  );
                };
                (o.DropdownTab = d),
                  (d.propTypes = {
                    activeClassName: n.default.string,
                    className: n.default.string,
                    "data-testid": n.default.string,
                    isActive: n.default.bool,
                    options: n.default.arrayOf(n.default.exact({ name: n.default.string, value: n.default.string.isRequired })).isRequired,
                    selectedOption: n.default.string,
                    onChange: n.default.func,
                    onClick: n.default.func,
                    tabIndex: n.default.number
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
      5487,
      { "./dropdown-tab": 5486 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = e("./dropdown-tab");
                o.default = r.DropdownTab;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/snaps/dropdown-tab/index.js" }
    ],
    [
      5488,
      { "./tab.component": 5489 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./tab.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tab/index.js" }
    ],
    [
      5489,
      { "../../../../helpers/constants/design-system": 5537, "../../box": 5373, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = s(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = e("../../../../helpers/constants/design-system"),
                  l = s(e("../../box"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = (e) => {
                  const {
                    activeClassName: t,
                    className: o,
                    "data-testid": n,
                    isActive: s,
                    name: u,
                    onClick: c,
                    tabIndex: d,
                    tabKey: p
                  } = e;
                  return r.default.createElement(
                    l.default,
                    {
                      as: "li",
                      className: (0, a.default)("tab", o, { "tab--active": s, [t]: t && s }),
                      "data-testid": n,
                      onClick: (e) => {
                        e.preventDefault(), c(d);
                      },
                      key: p
                    },
                    r.default.createElement(
                      l.default,
                      { as: "button", padding: 2, textAlign: i.TextAlign.Center, display: i.DISPLAY.BLOCK, width: i.BLOCK_SIZES.FULL },
                      u
                    )
                  );
                };
                (u.propTypes = {
                  activeClassName: n.default.string,
                  className: n.default.string,
                  "data-testid": n.default.string,
                  isActive: n.default.bool,
                  name: n.default.string.isRequired,
                  tabKey: n.default.string.isRequired,
                  onClick: n.default.func,
                  tabIndex: n.default.number
                }),
                  (u.defaultProps = { activeClassName: undefined, className: undefined, onClick: undefined });
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tab/tab.component.js" }
    ],
    [
      5490,
      { "../../../helpers/constants/design-system": 5537, "../box": 5373, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = u(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = s(e("prop-types")),
                  a = s(e("classnames")),
                  i = s(e("../box")),
                  l = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (u = function (e) {
                    return e ? o : t;
                  })(e);
                }
                const c = ({ defaultActiveTabKey: e, onTabClick: t, children: o, tabsClassName: n, subHeader: s }) => {
                  const u = () => r.default.Children.toArray(o).filter(Boolean),
                    [c, d] = (0, r.useState)(() => {
                      return Math.max(((t = e), u().findIndex((e) => (null == e ? void 0 : e.props.tabKey) === t)), 0);
                      var t;
                    });
                  return r.default.createElement(
                    i.default,
                    { className: "tabs" },
                    r.default.createElement(
                      i.default,
                      {
                        as: "ul",
                        display: l.DISPLAY.FLEX,
                        justifyContent: l.JustifyContent.flexStart,
                        backgroundColor: l.BackgroundColor.backgroundDefault,
                        className: (0, a.default)("tabs__list", n),
                        gap: 1
                      },
                      (() => {
                        const e = r.default.Children.count(u());
                        return r.default.Children.map(u(), (o, n) => {
                          const a = null == o ? void 0 : o.props.tabKey;
                          return (
                            o &&
                            r.default.cloneElement(o, {
                              onClick: (e) =>
                                ((e, o) => {
                                  e !== c && (d(e), null == t || t(o));
                                })(e, a),
                              tabIndex: n,
                              isActive: e > 1 && n === c
                            })
                          );
                        });
                      })()
                    ),
                    s,
                    r.default.createElement(
                      i.default,
                      { className: "tabs__content" },
                      (() => {
                        const e = u();
                        if ((Array.isArray(e) && !e[c]) || (!Array.isArray(e) && 0 !== c))
                          throw new Error(`Tab at index '${c}' does not exist`);
                        return e[c] ? e[c].props.children : e.props.children;
                      })()
                    )
                  );
                };
                o.default = c;
                c.propTypes = {
                  defaultActiveTabKey: n.default.string,
                  onTabClick: n.default.func,
                  children: n.default.node.isRequired,
                  tabsClassName: n.default.string,
                  subHeader: n.default.node
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tabs/tabs.component.js" }
    ],
    [
      5491,
      { "./text-field.component": 5492 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./text-field.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/text-field/index.js" }
    ],
    [
      5492,
      { "@material-ui/core/TextField": 832, "@material-ui/core/styles": 905, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = l(e("react")),
                  n = l(e("prop-types")),
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
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const u = { transform: "none", transition: "none", position: "initial", color: "var(--color-text-default)" },
                  c = {
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
                    largeInputLabel: { ...u, fontSize: "1rem" },
                    inputLabel: { ...u, fontSize: ".75rem" },
                    inputMultiline: { lineHeight: "initial !important" }
                  },
                  d = {
                    material: ({
                      dir: e,
                      classes: { materialLabel: t, materialFocused: o, materialError: r, materialUnderline: n },
                      startAdornment: a,
                      endAdornment: i,
                      min: l,
                      max: s,
                      autoComplete: u
                    }) => ({
                      InputLabelProps: { classes: { root: t, focused: o, error: r } },
                      InputProps: {
                        startAdornment: a,
                        endAdornment: i,
                        classes: { underline: n },
                        inputProps: { dir: e, min: l, max: s, autoComplete: u }
                      }
                    }),
                    bordered: ({
                      dir: e,
                      classes: {
                        formLabel: t,
                        formLabelFocused: o,
                        materialError: r,
                        largeInputLabel: n,
                        inputLabel: a,
                        inputRoot: i,
                        input: l,
                        inputFocused: s
                      },
                      largeLabel: u,
                      startAdornment: c,
                      endAdornment: d,
                      min: p,
                      max: f,
                      autoComplete: m
                    }) => ({
                      InputLabelProps: { shrink: !0, className: u ? n : a, classes: { root: t, focused: o, error: r } },
                      InputProps: {
                        startAdornment: c,
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
                        materialWhitePaddedFocused: o,
                        materialWhitePaddedInput: r,
                        materialWhitePaddedUnderline: n
                      },
                      startAdornment: a,
                      endAdornment: i,
                      min: l,
                      max: s,
                      autoComplete: u
                    }) => ({
                      InputProps: {
                        startAdornment: a,
                        endAdornment: i,
                        classes: { root: t, focused: o, input: r, underline: n },
                        inputProps: { dir: e, min: l, max: s, autoComplete: u }
                      }
                    })
                  },
                  p = ({
                    "data-testid": e,
                    error: t,
                    classes: o,
                    theme: n,
                    startAdornment: a,
                    endAdornment: l,
                    largeLabel: u,
                    dir: c,
                    min: p,
                    max: f,
                    autoComplete: m,
                    onPaste: g,
                    ...h
                  }) => {
                    const b = d[n]({
                      classes: o,
                      startAdornment: a,
                      endAdornment: l,
                      largeLabel: u,
                      dir: c,
                      min: p,
                      max: f,
                      autoComplete: m
                    });
                    return (
                      (g || e) &&
                        (b.InputProps || (b.InputProps = {}),
                        b.InputProps.inputProps || (b.InputProps.inputProps = {}),
                        (b.InputProps.inputProps.onPaste = g),
                        (b.InputProps.inputProps["data-testid"] = e)),
                      r.default.createElement(i.default, s({ error: Boolean(t), helperText: t }, b, h))
                    );
                  };
                (p.defaultProps = { error: null, dir: "auto", theme: "bordered" }),
                  (p.propTypes = {
                    "data-testid": n.default.string,
                    error: n.default.oneOfType([n.default.string, n.default.element]),
                    classes: n.default.object,
                    dir: n.default.string,
                    theme: n.default.oneOf(["bordered", "material", "material-white-padded"]),
                    startAdornment: n.default.element,
                    endAdornment: n.default.element,
                    largeLabel: n.default.bool,
                    min: n.default.number,
                    max: n.default.number,
                    autoComplete: n.default.string,
                    onPaste: n.default.func
                  });
                o.default = (0, a.withStyles)(c)(p);
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/text-field/text-field.component.js" }
    ],
    [
      5493,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.RESIZE = void 0);
                o.RESIZE = {
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
      5494,
      {
        "../../../helpers/constants/design-system": 5537,
        "../box": 5373,
        "./textarea.constants": 5493,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = u(e("react")),
                  n = u(e("prop-types")),
                  a = u(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  l = u(e("../box")),
                  s = e("./textarea.constants");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const d = ({
                  className: e,
                  value: t,
                  onChange: o,
                  resize: n = s.RESIZE.BOTH,
                  scrollable: u = !1,
                  height: d,
                  boxProps: p,
                  ...f
                }) => {
                  const m = (0, a.default)("textarea", e, `textarea--resize-${n}`, {
                    "textarea--scrollable": u,
                    "textarea--not-scrollable": !u
                  });
                  return r.default.createElement(
                    l.default,
                    c(
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
                      r.default.createElement(
                        "textarea",
                        c({ required: !0, style: { height: d }, className: (0, a.default)(e, m), value: t, onChange: o }, f)
                      )
                  );
                };
                d.propTypes = {
                  height: n.default.oneOfType([n.default.string, n.default.number]),
                  className: n.default.string,
                  value: n.default.string,
                  onChange: n.default.func,
                  resize: n.default.oneOf(Object.values(s.RESIZE)),
                  scrollable: n.default.bool,
                  boxProps: n.default.shape({ ...l.default.propTypes })
                };
                o.default = d;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/textarea/textarea.js" }
    ],
    [
      5495,
      { "./toggle-button.component": 5496 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("./toggle-button.component")) && r.__esModule ? r : { default: r };
                o.default = n.default;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/toggle-button/index.js" }
    ],
    [
      5496,
      { classnames: 2952, "prop-types": 4219, react: 4475, "react-toggle-button": 4472 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = l(e("react")),
                  n = l(e("prop-types")),
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
                  u = { ...s, border: "2px solid var(--color-border-default)" },
                  c = {
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
                    const { value: t, onToggle: o, offLabel: n, onLabel: l, disabled: p, className: f, dataTestId: m } = e,
                      g = t ? "on" : "off";
                    return r.default.createElement(
                      "label",
                      {
                        tabIndex: "0",
                        onKeyDown: (e) => {
                          "Enter" === e.key && o(t);
                        },
                        className: (0, i.default)("toggle-button", `toggle-button--${g}`, { "toggle-button--disabled": p }, f)
                      },
                      r.default.createElement(a.default, {
                        value: t,
                        onToggle: p ? undefined : o,
                        activeLabel: "",
                        inactiveLabel: "",
                        trackStyle: t ? s : u,
                        thumbStyle: c,
                        thumbAnimateRange: [3, 18],
                        colors: d,
                        passThroughInputProps: { "data-testId": m }
                      }),
                      r.default.createElement(
                        "div",
                        { className: "toggle-button__status" },
                        r.default.createElement("span", { className: "toggle-button__label-off" }, n),
                        r.default.createElement("span", { className: "toggle-button__label-on" }, l)
                      )
                    );
                  };
                p.propTypes = {
                  value: n.default.bool,
                  onToggle: n.default.func,
                  offLabel: n.default.string,
                  onLabel: n.default.string,
                  disabled: n.default.bool,
                  className: n.default.string,
                  dataTestId: n.default.string
                };
                o.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/toggle-button/toggle-button.component.js" }
    ],
    [
      5497,
      { "./token-balance": 5498 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./token-balance")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-balance/index.js" }
    ],
    [
      5498,
      { "../../../hooks/useTokenTracker": 5622, "../currency-display": 5393, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = s);
                var r = l(e("react")),
                  n = l(e("prop-types")),
                  a = l(e("../currency-display")),
                  i = e("../../../hooks/useTokenTracker");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s({ className: e, token: t }) {
                  const { tokensWithBalances: o } = (0, i.useTokenTracker)({ tokens: [t] }),
                    { string: n, symbol: l } = o[0] || {};
                  return r.default.createElement(a.default, { className: e, displayValue: n || "", suffix: l || "" });
                }
                (s.propTypes = {
                  className: n.default.string,
                  token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string })
                    .isRequired
                }),
                  (s.defaultProps = { className: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-balance/token-balance.js" }
    ],
    [
      5499,
      { "./token-input.container": 5501 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./token-input.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/index.js" }
    ],
    [
      5500,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/common": 4751,
        "../../../../shared/modules/Numeric": 4780,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/string-utils": 4797,
        "../currency-display": 5393,
        "../unit-input": 5508,
        "bignumber.js": 2804,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = m(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  n = f(e("prop-types")),
                  a = f(e("bignumber.js")),
                  i = f(e("../unit-input")),
                  l = f(e("../currency-display")),
                  s = e("../../../../shared/modules/conversion.utils"),
                  u = e("../../../../app/scripts/lib/util"),
                  c = e("../../../../shared/modules/string-utils"),
                  d = e("../../../../shared/modules/Numeric"),
                  p = e("../../../../shared/constants/common");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (m = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function g() {
                  return (
                    (g = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                          }
                          return e;
                        }),
                    g.apply(this, arguments)
                  );
                }
                function h(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class b extends r.PureComponent {
                  constructor(e) {
                    super(e),
                      h(this, "handleChange", (e, t = !1) => {
                        const { token: { decimals: o } = {}, onChange: r } = this.props;
                        let n = e;
                        o && e && t && (n = new a.default(e, 10).toFixed(o));
                        const i = new d.Numeric(n || 0, 10)
                          .times(Math.pow(10, Number(o || 0)), 10)
                          .toBase(16)
                          .toString();
                        this.setState({ hexValue: i, decimalValue: e }), r(i);
                      }),
                      h(this, "handleBlur", (e) => {
                        this.handleChange(e, !0);
                      });
                    const { value: t } = e,
                      o = t ? this.getValue(e) : 0;
                    this.state = { decimalValue: o, hexValue: t };
                  }
                  componentDidUpdate(e) {
                    const { value: t } = e,
                      { value: o } = this.props,
                      { hexValue: r } = this.state;
                    if (t !== o && o !== r) {
                      const e = this.getValue(this.props);
                      this.setState({ hexValue: o, decimalValue: e });
                    }
                  }
                  getValue(e) {
                    const { value: t, token: { decimals: o, symbol: r } = {} } = e,
                      n = Math.pow(10, Number(o || 0)),
                      a = new d.Numeric((0, u.addHexPrefix)(t), 16)
                        .toBase(10)
                        .applyConversionRate(r ? n : 1, !0)
                        .toString();
                    return Number(a) ? a : "";
                  }
                  renderConversionComponent() {
                    const {
                        tokenExchangeRates: e,
                        showFiat: t,
                        currentCurrency: o,
                        hideConversion: n,
                        token: a,
                        tokens: i,
                        nativeCurrency: u
                      } = this.props,
                      { decimalValue: d } = this.state,
                      f = i.find(({ address: e }) => (0, c.isEqualCaseInsensitive)(e, a.address)),
                      m = (null == e ? void 0 : e[null == f ? void 0 : f.address]) ?? 0;
                    let g, h;
                    if (n)
                      return r.default.createElement(
                        "div",
                        { className: "currency-input__conversion-component" },
                        this.context.t("noConversionRateAvailable")
                      );
                    t ? ((g = o), (h = 2)) : ((g = u), (h = 6));
                    const b = d * m || 0,
                      v = (0, s.getWeiHexFromDecimalValue)({
                        value: b,
                        fromCurrency: p.EtherDenomination.ETH,
                        fromDenomination: p.EtherDenomination.ETH
                      });
                    return m
                      ? r.default.createElement(l.default, {
                          className: "currency-input__conversion-component",
                          currency: g,
                          value: v,
                          numberOfDecimals: h
                        })
                      : r.default.createElement(
                          "div",
                          { className: "currency-input__conversion-component" },
                          this.context.t("noConversionRateAvailable")
                        );
                  }
                  render() {
                    const { token: e, ...t } = this.props,
                      { decimalValue: o } = this.state;
                    return r.default.createElement(
                      i.default,
                      g({}, t, { suffix: e.symbol, onChange: this.handleChange, onBlur: this.handleBlur, value: o }),
                      this.renderConversionComponent()
                    );
                  }
                }
                (o.default = b),
                  h(b, "contextTypes", { t: n.default.func }),
                  h(b, "propTypes", {
                    dataTestId: n.default.string,
                    currentCurrency: n.default.string,
                    onChange: n.default.func,
                    value: n.default.string,
                    showFiat: n.default.bool,
                    hideConversion: n.default.bool,
                    token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string })
                      .isRequired,
                    tokenExchangeRates: n.default.object,
                    nativeCurrency: n.default.string,
                    tokens: n.default.array.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/token-input.component.js" }
    ],
    [
      5501,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../selectors": 5958,
        "./token-input.component": 5500,
        "prop-types": 4219,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r = e("react-redux"),
                  n = s(e("prop-types")),
                  a = e("../../../selectors"),
                  i = e("../../../ducks/metamask/metamask"),
                  l = s(e("./token-input.component"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = (0, r.connect)((e) => {
                  const {
                    metamask: { currentCurrency: t, tokens: o }
                  } = e;
                  return {
                    currentCurrency: t,
                    tokenExchangeRates: (0, a.getTokenExchangeRates)(e),
                    hideConversion: !(0, a.getShouldShowFiat)(e),
                    nativeCurrency: (0, i.getNativeCurrency)(e),
                    tokens: o
                  };
                })(l.default);
                u.propTypes = {
                  token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string })
                    .isRequired
                };
                o.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/token-input/token-input.container.js" }
    ],
    [
      5502,
      { "./tooltip": 5503 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./tooltip")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tooltip/index.js" }
    ],
    [
      5503,
      { "prop-types": 4219, react: 4475, "react-tippy": 4471 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                var r,
                  n = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var o = l(t);
                    if (o && o.has(e)) return o.get(e);
                    var r = { __proto__: null },
                      n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                      }
                    return (r.default = e), o && o.set(e, r), r;
                  })(e("react")),
                  i = e("react-tippy");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    o = new WeakMap();
                  return (l = function (e) {
                    return e ? o : t;
                  })(e);
                }
                function s(e, t, o) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (o !== undefined) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = o),
                    e
                  );
                }
                class u extends a.PureComponent {
                  render() {
                    const {
                      arrow: e,
                      children: t,
                      containerClassName: o,
                      disabled: r,
                      position: n,
                      html: l,
                      interactive: s,
                      size: u,
                      title: c,
                      trigger: d,
                      onHidden: p,
                      offset: f,
                      open: m,
                      wrapperClassName: g,
                      style: h,
                      theme: b,
                      tabIndex: v,
                      tag: y
                    } = this.props;
                    return c || l
                      ? a.default.createElement(
                          y,
                          { className: g },
                          a.default.createElement(
                            i.Tooltip,
                            {
                              arrow: e,
                              className: o,
                              disabled: r,
                              hideOnClick: !1,
                              html: l,
                              interactive: s,
                              onHidden: p,
                              position: n,
                              size: u,
                              offset: f,
                              style: h,
                              title: r ? "" : c,
                              trigger: d,
                              open: m,
                              theme: `tippy-tooltip--mm-custom ${b}`,
                              tabIndex: v || 0,
                              tag: y
                            },
                            t
                          )
                        )
                      : a.default.createElement("div", { className: g }, t);
                  }
                }
                (o.default = u),
                  s(u, "defaultProps", {
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
                  s(u, "propTypes", {
                    arrow: n.default.bool,
                    children: n.default.node,
                    containerClassName: n.default.string,
                    disabled: n.default.bool,
                    html: n.default.node,
                    interactive: n.default.bool,
                    offset: n.default.number,
                    onHidden: n.default.func,
                    open: n.default.bool,
                    position: n.default.oneOf(["top", "right", "bottom", "left"]),
                    size: n.default.oneOf(["small", "regular", "big"]),
                    title: n.default.string,
                    trigger: n.default.any,
                    wrapperClassName: n.default.string,
                    style: n.default.object,
                    theme: n.default.string,
                    tabIndex: n.default.number,
                    tag: n.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/tooltip/tooltip.js" }
    ],
    [
      5504,
      { "./truncated-definition-list": 5505 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, o) {
                Object.defineProperty(o, "__esModule", { value: !0 }),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var r,
                  n = (r = e("./truncated-definition-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/truncated-definition-list/index.js" }
    ]
  ],
  [],
  {}
);