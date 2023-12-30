LavaPack.loadBundle(
  [
    [
      5088,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useI18nContext": 5602,
        "../../../component-library": 5242,
        "../../../ui/button": 5377,
        "../../../ui/check-box/check-box.component": 5382,
        "../../../ui/popover": 5465,
        classnames: 2952,
        immer: 3834,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = y);
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
                  o = e("immer"),
                  i = f(e("classnames")),
                  s = e("../../../../hooks/useI18nContext"),
                  l = f(e("../../../ui/check-box/check-box.component")),
                  c = e("../../../../helpers/constants/design-system"),
                  u = f(e("../../../ui/popover")),
                  d = f(e("../../../ui/button")),
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
                const h = (0, o.produce)((e, t) => {
                  if ("check" !== t.type) throw new Error("You must provide a type when dispatching an action for checkboxState");
                  e[t.checkboxId] = !e[t.checkboxId] || !e[t.checkboxId];
                });
                function y({ onCancel: e, onSubmit: t, warnings: n, snapName: a }) {
                  const o = (0, s.useI18nContext)(),
                    [f, m] = (0, r.useReducer)(h, {}),
                    y = n.every((e) => f[e.id]),
                    g = (0, r.useCallback)((e) => {
                      m({ type: "check", checkboxId: e });
                    }, []),
                    b = () =>
                      r.default.createElement(
                        "div",
                        { className: "snap-install-warning__footer" },
                        r.default.createElement(
                          d.default,
                          { className: "snap-install-warning__footer-button", type: "primary", disabled: !y, onClick: t },
                          o("confirm")
                        )
                      );
                  return r.default.createElement(
                    u.default,
                    {
                      className: "snap-install-warning",
                      footer: r.default.createElement(b, null),
                      headerProps: { padding: [6, 6, 0] },
                      contentProps: { paddingLeft: [6, 4], paddingRight: [6, 4], paddingTop: 0, paddingBottom: [6, 4] },
                      footerProps: { padding: [4, 6] },
                      onClose: e
                    },
                    r.default.createElement(
                      p.Box,
                      { display: c.Display.Flex, justifyContent: c.JustifyContent.center, marginBottom: 6 },
                      r.default.createElement(p.AvatarIcon, {
                        iconName: p.IconName.Danger,
                        backgroundColor: c.BackgroundColor.warningMuted,
                        color: c.IconColor.warningDefault,
                        size: p.AvatarIconSize.Xl
                      })
                    ),
                    r.default.createElement(
                      p.Text,
                      { paddingBottom: 6, textAlign: c.TextAlign.Center, variant: c.TextVariant.headingMd, as: "h2" },
                      o("snapInstallWarningHeading")
                    ),
                    r.default.createElement(
                      p.Text,
                      { paddingBottom: 6, textAlign: c.TextAlign.Center },
                      n.length > 1
                        ? o("snapInstallWarningCheckPlural", [
                            r.default.createElement(
                              p.Text,
                              { key: "snapNameInWarningDescription", fontWeight: c.FontWeight.Medium, as: "span" },
                              a
                            )
                          ])
                        : o("snapInstallWarningCheck", [
                            r.default.createElement(
                              p.Text,
                              { key: "snapNameInWarningDescription", fontWeight: c.FontWeight.Medium, as: "span" },
                              a
                            )
                          ])
                    ),
                    n.map((e, t) =>
                      r.default.createElement(
                        "div",
                        { className: (0, i.default)("checkbox-label", { "checkbox-label--first": 0 === t }), key: e.id },
                        r.default.createElement(l.default, { checked: f[e.id] ?? !1, id: e.id, onClick: () => g(e.id) }),
                        r.default.createElement(
                          "label",
                          { htmlFor: e.id },
                          r.default.createElement(p.Text, { variant: c.TextVariant.bodyMd }, e.message)
                        )
                      )
                    )
                  );
                }
                y.propTypes = {
                  onCancel: a.default.func,
                  onSubmit: a.default.func,
                  warnings: a.default.arrayOf({ message: a.default.node, id: a.default.string }),
                  snapName: a.default.string.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-install-warning/snap-install-warning.js" }
    ],
    [
      5089,
      { "./snap-legacy-authorship-header": 5090 },
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
      5090,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        "../../../../selectors": 5958,
        "../../../component-library": 5242,
        "../snap-avatar": 5082,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/utils/util"),
                  c = e("../../../component-library"),
                  u = e("../../../../selectors"),
                  d = p(e("../snap-avatar"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({ snapId: e, className: t, marginLeft: n, marginRight: a }) => {
                  const p = e && (0, l.removeSnapIdPrefix)(e),
                    f = (0, i.useSelector)((t) => (0, u.getTargetSubjectMetadata)(t, e)),
                    m = e && (0, l.getSnapName)(e, f);
                  return r.default.createElement(
                    c.Box,
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
                    r.default.createElement(c.Box, null, r.default.createElement(d.default, { snapId: e })),
                    r.default.createElement(
                      c.Box,
                      {
                        marginLeft: 4,
                        marginRight: 4,
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        style: { overflow: "hidden" }
                      },
                      r.default.createElement(c.Text, { ellipsis: !0, fontWeight: s.FontWeight.Medium }, m),
                      r.default.createElement(
                        c.Text,
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
      5091,
      { "./snap-list-item": 5092 },
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
      5092,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../component-library": 5242,
        "../snap-avatar": 5082,
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
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../component-library"),
                  s = l(e("../snap-avatar"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({ name: e, packageName: t, onClick: n, snapId: a }) =>
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
                    )
                  );
                c.propTypes = {
                  name: a.default.string,
                  packageName: a.default.string,
                  onClick: a.default.func,
                  snapId: a.default.string.isRequired
                };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-list-item/snap-list-item.js" }
    ],
    [
      5093,
      { "./snap-permissions-list": 5094 },
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
      5094,
      {
        "../../../../helpers/utils/permission": 5572,
        "../../../../hooks/useI18nContext": 5602,
        "../../../ui/box": 5373,
        "../../permission-cell": 5017,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../helpers/utils/permission"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = c(e("../../permission-cell")),
                  l = c(e("../../../ui/box"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ snapId: e, permissions: t, targetSubjectMetadata: n, showOptions: a }) {
                  const c = (0, i.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    { paddingTop: 2, paddingBottom: 2, className: "snap-permissions-list" },
                    (0, o.getWeightedPermissions)(c, t, n).map((t, n) => {
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
                u.propTypes = {
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
      5095,
      { "./snap-privacy-warning": 5096 },
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
      5096,
      {
        "../../../../../shared/constants/terms": 4767,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../hooks/useScrollRequired": 5612,
        "../../../component-library": 5242,
        "../../../ui/popover": 5465,
        "prop-types": 4219,
        react: 4475
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
                  c = e("../../../../hooks/useScrollRequired"),
                  u = e("../../../../../shared/constants/terms");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ onAccepted: e, onCanceled: t }) {
                  const n = (0, o.useI18nContext)(),
                    { isScrollable: a, isScrolledToBottom: d, scrollToBottom: p, ref: f, onScroll: m } = (0, c.useScrollRequired)();
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
                                  href: u.TERMS_OF_USE_LINK,
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
      5097,
      { "./snap-remove-warning": 5098 },
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
      5098,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useI18nContext": 5602,
        "../../../component-library": 5242,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ isOpen: e, onCancel: t, onSubmit: n, snapName: a }) {
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
                c.propTypes = { onCancel: a.default.func, onSubmit: a.default.func, snapName: a.default.string, isOpen: a.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-remove-warning/snap-remove-warning.js" }
    ],
    [
      5099,
      { "./snap-ui-image": 5100 },
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
      5100,
      { react: 4475 },
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
      5101,
      { "./snap-ui-markdown": 5102 },
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
      5102,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../component-library": 5242,
        "prop-types": 4219,
        react: 4475,
        "react-markdown": 4417
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SnapUIMarkdown = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("react-markdown")),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = (e) =>
                    r.default.createElement(
                      s.Text,
                      c({}, e, {
                        variant: i.TextVariant.bodyMd,
                        className: "snap-ui-markdown__text",
                        overflowWrap: i.OverflowWrap.BreakWord
                      })
                    ),
                  d = ({ children: e, markdown: t }) =>
                    !1 === t
                      ? r.default.createElement(u, null, e)
                      : r.default.createElement(o.default, { allowedElements: ["p", "strong", "em"], components: { p: u } }, e);
                (n.SnapUIMarkdown = d), (d.propTypes = { children: a.default.string, markdown: a.default.bool });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-markdown/snap-ui-markdown.js" }
    ],
    [
      5103,
      { "./snap-ui-renderer": 5104 },
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
    ],
    [
      5104,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/constants/snaps": 5545,
        "../../../../helpers/utils/util": 5578,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../selectors": 5958,
        "../../../component-library": 5242,
        "../../../ui/box": 5373,
        "../../metamask-template-renderer/metamask-template-renderer": 4947,
        "../copyable": 5073,
        "../snap-delineator": 5085,
        "@metamask/snaps-ui": 1999,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.mapToTemplate = n.UI_MAPPING = n.SnapUIRenderer = void 0);
                var r = g(e("react")),
                  a = g(e("prop-types")),
                  o = e("@metamask/snaps-ui"),
                  i = e("react-redux"),
                  s = g(e("../../metamask-template-renderer/metamask-template-renderer")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = e("../snap-delineator"),
                  u = e("../../../../hooks/useI18nContext"),
                  d = g(e("../../../ui/box")),
                  p = e("../../../../helpers/utils/util"),
                  f = e("../../../../selectors"),
                  m = e("../../../component-library"),
                  h = e("../copyable"),
                  y = e("../../../../helpers/constants/snaps");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const b = (n.UI_MAPPING = {
                    panel: (e, t) => ({
                      element: "Box",
                      children: e.children.map((e) => v(e, t)),
                      props: { display: l.DISPLAY.FLEX, flexDirection: l.FLEX_DIRECTION.COLUMN, className: "snap-ui-renderer__panel" }
                    }),
                    heading: (e) => ({
                      element: "Typography",
                      children: e.value,
                      props: { variant: l.TypographyVariant.H4, fontWeight: l.FontWeight.Bold, overflowWrap: l.OverflowWrap.BreakWord }
                    }),
                    text: (e) => ({ element: "SnapUIMarkdown", children: e.value, props: { markdown: e.markdown } }),
                    spinner: () => ({ element: "Spinner", props: { className: "snap-ui-renderer__spinner" } }),
                    divider: () => ({
                      element: "Box",
                      props: {
                        className: "snap-ui-renderer__divider",
                        backgroundColor: l.BorderColor.borderDefault,
                        marginTop: 2,
                        marginBottom: 2
                      }
                    }),
                    copyable: (e) => ({ element: "Copyable", props: { text: e.value } }),
                    image: (e) => ({ element: "SnapUIImage", props: { value: e.value } })
                  }),
                  v = (e, t) => {
                    const { type: n } = e;
                    t.value += 1;
                    const r = `snap_ui_element_${n}__${t.value}`;
                    return { ...b[n](e, t), key: r };
                  };
                n.mapToTemplate = v;
                const T = ({ snapId: e, delineatorType: t = y.DelineatorType.Content, data: n }) => {
                  const a = (0, u.useI18nContext)(),
                    g = (0, i.useSelector)((t) => (0, f.getTargetSubjectMetadata)(t, e)),
                    b = (0, p.getSnapName)(e, g);
                  if (!(0, o.isComponent)(n))
                    return r.default.createElement(
                      c.SnapDelineator,
                      { snapName: b, type: y.DelineatorType.Error },
                      r.default.createElement(
                        m.Text,
                        { variant: l.TextVariant.bodySm, marginBottom: 4 },
                        a("snapsUIError", [r.default.createElement("b", { key: "0" }, b)])
                      ),
                      r.default.createElement(h.Copyable, { text: a("snapsInvalidUIError") })
                    );
                  const T = v(n, { value: 0 });
                  return r.default.createElement(
                    c.SnapDelineator,
                    { snapName: b, type: t },
                    r.default.createElement(
                      d.default,
                      { className: "snap-ui-renderer__content" },
                      r.default.createElement(s.default, { sections: T })
                    )
                  );
                };
                (n.SnapUIRenderer = T),
                  (T.propTypes = { snapId: a.default.string, delineatorType: a.default.string, data: a.default.object });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-renderer/snap-ui-renderer.js" }
    ],
    [
      5105,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../component-library": 5242,
        "../../../ui/box": 5373,
        "../../../ui/icon/preloader/preloader-icon.component": 5423,
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
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = c(e("../../../ui/box")),
                  s = e("../../../component-library"),
                  l = c(e("../../../ui/icon/preloader/preloader-icon.component"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ version: e, url: t }) =>
                  r.default.createElement(
                    s.Button,
                    { variant: s.BUTTON_VARIANT.LINK, href: t, target: "_blank", className: "snap-version" },
                    r.default.createElement(
                      i.default,
                      {
                        className: "snap-version__wrapper",
                        flexDirection: o.FLEX_DIRECTION.ROW,
                        alignItems: o.AlignItems.center,
                        backgroundColor: o.BackgroundColor.backgroundAlternative,
                        borderRadius: o.BorderRadius.pill,
                        paddingTop: 1,
                        paddingBottom: 1,
                        paddingLeft: 2,
                        paddingRight: 2
                      },
                      e
                        ? r.default.createElement(s.Text, { color: o.Color.textAlternative, variant: o.TextVariant.bodyMd }, e)
                        : r.default.createElement(l.default, { size: 18 }),
                      r.default.createElement(s.Icon, {
                        name: s.IconName.Export,
                        color: o.Color.textAlternative,
                        size: s.IconSize.Sm,
                        marginLeft: 1
                      })
                    )
                  );
                u.propTypes = { version: a.default.string, url: a.default.string };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-version/snap-version.js" }
    ],
    [
      5106,
      { "./update-snap-permission-list": 5107 },
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
                  a = (r = e("./update-snap-permission-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/update-snap-permission-list/index.js" }
    ],
    [
      5107,
      {
        "../../../../helpers/utils/permission": 5572,
        "../../../../hooks/useI18nContext": 5602,
        "../../../component-library": 5242,
        "../../permission-cell": 5017,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../helpers/utils/permission"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = c(e("../../permission-cell")),
                  l = e("../../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ approvedPermissions: e, revokedPermissions: t, newPermissions: n, targetSubjectMetadata: a }) {
                  const c = (0, i.useI18nContext)();
                  return r.default.createElement(
                    l.Box,
                    { paddingTop: 1 },
                    (0, o.getWeightedPermissions)(c, n, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`
                      });
                    }),
                    (0, o.getWeightedPermissions)(c, t, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`,
                        revoked: !0
                      });
                    }),
                    (0, o.getWeightedPermissions)(c, e, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`
                      });
                    })
                  );
                }
                u.propTypes = {
                  approvedPermissions: a.default.object.isRequired,
                  revokedPermissions: a.default.object.isRequired,
                  newPermissions: a.default.object.isRequired,
                  targetSubjectMetadata: a.default.object.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/update-snap-permission-list/update-snap-permission-list.js" }
    ],
    [
      5108,
      { "./srp-input": 5110 },
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
                  a = (r = e("./srp-input")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/index.js" }
    ],
    [
      5109,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.parseSecretRecoveryPhrase = void 0);
                n.parseSecretRecoveryPhrase = (e) => {
                  var t;
                  return (null === (t = (e || "").trim().toLowerCase().match(/\w+/gu)) || void 0 === t ? void 0 : t.join(" ")) || "";
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/parse-secret-recovery-phrase.js" }
    ],
    [
      5110,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../../ui/dropdown": 5402,
        "../../ui/show-hide-toggle": 5475,
        "../../ui/text-field": 5491,
        "./parse-secret-recovery-phrase": 5109,
        "@ethersproject/hdnode": 466,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = b);
                var r = e("@ethersproject/hdnode"),
                  a = (function (e, t) {
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
                  o = m(e("prop-types")),
                  i = e("../../../hooks/useI18nContext"),
                  s = m(e("../../ui/text-field")),
                  l = e("../../../helpers/utils/util"),
                  c = e("../../component-library"),
                  u = m(e("../../ui/dropdown")),
                  d = m(e("../../ui/show-hide-toggle")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("./parse-secret-recovery-phrase");
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
                const y = 12,
                  g = (e) => e !== e.toLowerCase();
                function b({ onChange: e, srpText: t }) {
                  const [n, o] = (0, a.useState)(""),
                    [m, h] = (0, a.useState)(!1),
                    [b, v] = (0, a.useState)(new Array(y).fill("")),
                    [T, E] = (0, a.useState)(new Array(y).fill(!1)),
                    [w, O] = (0, a.useState)(y),
                    _ = (0, i.useI18nContext)(),
                    x = (0, a.useCallback)(
                      (t) => {
                        let n = "";
                        const a = t.join(" ").trim();
                        t.some((e) => "" !== e) &&
                          (t.some((e) => "" === e)
                            ? (n = _("seedPhraseReq"))
                            : g(a)
                            ? (n = _("invalidSeedPhraseCaseSensitive"))
                            : (0, r.isValidMnemonic)(a) || (n = _("invalidSeedPhrase"))),
                          v(t),
                          o(n),
                          e(n ? "" : a);
                      },
                      [v, o, _, e]
                    ),
                    k = (0, a.useCallback)((e) => {
                      E((t) => {
                        const n = t.slice();
                        return n[e] ? (n[e] = !1) : (n.fill(!1), (n[e] = !0)), n;
                      });
                    }, []),
                    S = (0, a.useCallback)(
                      (e, t) => {
                        m && h(!1);
                        const n = b.slice();
                        (n[e] = t.trim()), x(n);
                      },
                      [b, x, m]
                    ),
                    C = (0, a.useCallback)(
                      (e) => {
                        let t = (0, f.parseSecretRecoveryPhrase)(e).split(" ");
                        if (t.length > 24) return void h(!0);
                        m && h(!1);
                        let n = w;
                        t.length !== w && ((n = t.length < 12 ? 12 : t.length % 3 == 0 ? t.length : t.length + (3 - (t.length % 3))), O(n)),
                          t.length < n && (t = t.concat(new Array(n - t.length).fill(""))),
                          E(new Array(n).fill(!1)),
                          x(t),
                          (0, l.clearClipboard)();
                      },
                      [w, x, m, h]
                    ),
                    A = [];
                  for (let e = 12; e <= 24; e += 3) A.push({ name: _("srpInputNumberOfWords", [`${e}`]), value: `${e}` });
                  return a.default.createElement(
                    "div",
                    { className: "import-srp__container" },
                    a.default.createElement(
                      "label",
                      { className: "import-srp__srp-label" },
                      a.default.createElement(c.Text, { align: p.TextAlign.Left, variant: p.TextVariant.headingSm, as: "h4" }, t)
                    ),
                    a.default.createElement(c.BannerAlert, {
                      className: "import-srp__paste-tip",
                      severity: p.Severity.Info,
                      description: _("srpPasteTip"),
                      descriptionProps: { className: "import-srp__banner-alert-text" }
                    }),
                    a.default.createElement(u.default, {
                      className: "import-srp__number-of-words-dropdown",
                      onChange: (e) => {
                        const t = parseInt(e, 10);
                        if (Number.isNaN(t)) throw new Error("Unable to parse option as integer");
                        let n = b.slice(0, t);
                        n.length < t && (n = n.concat(new Array(t - n.length).fill(""))), O(t), E(new Array(t).fill(!1)), x(n);
                      },
                      options: A,
                      selectedOption: `${w}`
                    }),
                    a.default.createElement(
                      "div",
                      { className: "import-srp__srp" },
                      [...Array(w).keys()].map((e) => {
                        const t = `import-srp__srp-word-${e}`;
                        return a.default.createElement(
                          "div",
                          { key: e, className: "import-srp__srp-word" },
                          a.default.createElement(
                            "label",
                            { htmlFor: t, className: "import-srp__srp-word-label" },
                            a.default.createElement(c.Text, null, `${e + 1}.`)
                          ),
                          a.default.createElement(s.default, {
                            id: t,
                            "data-testid": t,
                            type: T[e] ? "text" : "password",
                            onChange: (t) => {
                              t.preventDefault(), S(e, t.target.value);
                            },
                            value: b[e],
                            autoComplete: "off",
                            onPaste: (e) => {
                              const t = e.clipboardData.getData("text");
                              t.trim().match(/\s/u) && (e.preventDefault(), C(t));
                            }
                          }),
                          a.default.createElement(d.default, {
                            id: `${t}-checkbox`,
                            ariaLabelHidden: _("srpWordHidden"),
                            ariaLabelShown: _("srpWordShown"),
                            shown: T[e],
                            "data-testid": `${t}-checkbox`,
                            onChange: () => k(e),
                            title: _("srpToggleShow")
                          })
                        );
                      })
                    ),
                    n
                      ? a.default.createElement(c.BannerAlert, {
                          className: "import-srp__srp-error",
                          severity: p.Severity.Danger,
                          description: n,
                          descriptionProps: { className: "import-srp__banner-alert-text" }
                        })
                      : null,
                    m
                      ? a.default.createElement(c.BannerAlert, {
                          className: "import-srp__srp-too-many-words-error",
                          severity: p.Severity.Danger,
                          actionButtonLabel: _("dismiss"),
                          actionButtonOnClick: () => h(!1),
                          description: _("srpPasteFailedTooManyWords"),
                          descriptionProps: { className: "import-srp__banner-alert-text" }
                        })
                      : null
                  );
                }
                b.propTypes = { onChange: o.default.func.isRequired, srpText: o.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/srp-input.js" }
    ],
    [
      5111,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useI18nContext": 5602,
        "../../../component-library": 5242,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ icon: e, image: t, content: n, moreContent: r, buttons: l }) {
                    const c = (0, i.useI18nContext)();
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      e &&
                        a.default.createElement(
                          s.Box,
                          {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Row,
                            alignItems: o.AlignItems.center,
                            justifyContent: o.JustifyContent.center
                          },
                          e
                        ),
                      t &&
                        a.default.createElement(
                          s.Box,
                          { display: o.Display.Flex, margin: "auto", textAlign: o.TextAlign.Center },
                          a.default.createElement("img", {
                            src: t,
                            alt: c("srpSecurityQuizImgAlt"),
                            width: "300",
                            style: { maxWidth: "100%" }
                          })
                        ),
                      a.default.createElement(
                        s.Text,
                        { variant: o.TextVariant.bodyLgMedium, textAlign: o.TextAlign.Center, color: null == e ? void 0 : e.props.color },
                        n
                      ),
                      r && a.default.createElement(s.Text, { variant: o.TextVariant.bodyMd, textAlign: o.TextAlign.Center }, r),
                      l.map((e, t) =>
                        a.default.createElement(
                          s.Button,
                          {
                            key: t,
                            size: e.size,
                            onClick: e.onClick,
                            variant: e.variant,
                            width: o.BlockSize.Full,
                            "data-testid": e["data-testid"]
                          },
                          e.label
                        )
                      )
                    );
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = e("../../../component-library");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/QuizContent/QuizContent.tsx" }
    ],
    [
      5112,
      { "./QuizContent": 5111 },
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
                  a = (r = e("./QuizContent")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/QuizContent/index.ts" }
    ],
    [
      5113,
      {
        "../../../../../shared/constants/metametrics": 4758,
        "../../../../contexts/metametrics": 5515,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/constants/routes": 5542,
        "../../../../helpers/constants/zendesk-url": 5547,
        "../../../../hooks/useI18nContext": 5602,
        "../../../component-library": 5242,
        "../QuizContent": 5112,
        "../types": 5115,
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
                  (n.default = function (e) {
                    const [t, n] = (0, r.useState)(f.QuizStage.introduction),
                      c = (0, r.useContext)(i.MetaMetricsContext),
                      m = (0, a.useHistory)(),
                      h = (0, u.useI18nContext)();
                    let v = "";
                    const T = {};
                    (T[f.QuizStage.introduction] = () => (
                      (v = h("srpSecurityQuizTitle")),
                      r.default.createElement(p.default, {
                        image: "images/reveal-srp.png",
                        content: h("srpSecurityQuizIntroduction"),
                        buttons: [
                          {
                            label: h("srpSecurityQuizGetStarted"),
                            onClick: () => n(f.QuizStage.questionOne),
                            variant: d.ButtonVariant.Primary,
                            size: d.ButtonSize.Lg,
                            "data-testid": "srp-quiz-get-started"
                          },
                          {
                            label: h("learnMoreUpperCase"),
                            onClick: b,
                            variant: d.ButtonVariant.Link,
                            "data-testid": "srp-quiz-learn-more"
                          }
                        ]
                      })
                    )),
                      (T[f.QuizStage.questionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          content: h("srpSecurityQuizQuestionOneQuestion"),
                          buttons: [
                            {
                              label: h("srpSecurityQuizQuestionOneWrongAnswer"),
                              onClick: () => n(f.QuizStage.wrongAnswerQuestionOne),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-wrong-answer"
                            },
                            {
                              label: h("srpSecurityQuizQuestionOneRightAnswer"),
                              onClick: () => n(f.QuizStage.rightAnswerQuestionOne),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-right-answer"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.rightAnswerQuestionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: g,
                          content: h("srpSecurityQuizQuestionOneRightAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionOneRightAnswerDescription"),
                          buttons: [
                            {
                              label: h("continue"),
                              onClick: () => n(f.QuizStage.questionTwo),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-continue"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.wrongAnswerQuestionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: y,
                          content: h("srpSecurityQuizQuestionOneWrongAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionOneWrongAnswerDescription"),
                          buttons: [
                            {
                              label: h("tryAgain"),
                              onClick: () => n(f.QuizStage.questionOne),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-try-again"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.questionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          content: h("srpSecurityQuizQuestionTwoQuestion"),
                          buttons: [
                            {
                              label: h("srpSecurityQuizQuestionTwoRightAnswer"),
                              onClick: () => n(f.QuizStage.rightAnswerQuestionTwo),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-right-answer"
                            },
                            {
                              label: h("srpSecurityQuizQuestionTwoWrongAnswer"),
                              onClick: () => n(f.QuizStage.wrongAnswerQuestionTwo),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-wrong-answer"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.rightAnswerQuestionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: g,
                          content: h("srpSecurityQuizQuestionTwoRightAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionTwoRightAnswerDescription"),
                          buttons: [
                            {
                              label: h("continue"),
                              onClick: () => m.push(l.REVEAL_SEED_ROUTE),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-continue"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.wrongAnswerQuestionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: y,
                          content: h("srpSecurityQuizQuestionTwoWrongAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionTwoWrongAnswerDescription"),
                          buttons: [
                            {
                              label: h("tryAgain"),
                              onClick: () => n(f.QuizStage.questionTwo),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-try-again"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      ));
                    const E = (0, r.useCallback)((e) => {
                      c(
                        {
                          category: o.MetaMetricsEventCategory.Keys,
                          event: o.MetaMetricsEventName.KeyExportSelected,
                          properties: { key_type: o.MetaMetricsEventKeyType.Srp, location: e }
                        },
                        {}
                      );
                    }, []);
                    (0, r.useEffect)(() => {
                      E(`stage_${t}`);
                    }, [t]);
                    const w = T[t]();
                    return r.default.createElement(
                      d.Modal,
                      { isOpen: e.isOpen, onClose: e.onClose },
                      r.default.createElement(d.ModalOverlay, null),
                      r.default.createElement(
                        d.ModalContent,
                        { modalDialogProps: { display: s.Display.Flex, flexDirection: s.FlexDirection.Column, gap: 4 } },
                        r.default.createElement(d.ModalHeader, { onClose: e.onClose, "data-testid": "srp-quiz-header" }, v),
                        r.default.createElement("span", { "data-testid": `srp_stage_${t}` }),
                        w
                      )
                    );
                  });
                var r = (function (e, t) {
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
                  a = e("react-router-dom"),
                  o = e("../../../../../shared/constants/metametrics"),
                  i = e("../../../../contexts/metametrics"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/constants/routes"),
                  c = m(e("../../../../helpers/constants/zendesk-url")),
                  u = e("../../../../hooks/useI18nContext"),
                  d = e("../../../component-library"),
                  p = m(e("../QuizContent")),
                  f = e("../types");
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
                const y = r.default.createElement(d.Icon, {
                    size: d.IconSize.Xl,
                    name: d.IconName.Warning,
                    color: s.IconColor.errorDefault,
                    textAlign: s.TextAlign.Center,
                    width: s.BlockSize.OneTwelfth
                  }),
                  g = r.default.createElement(d.Icon, {
                    size: d.IconSize.Xl,
                    name: d.IconName.Confirmation,
                    color: s.IconColor.successDefault,
                    textAlign: s.TextAlign.Center,
                    width: s.BlockSize.OneTwelfth
                  }),
                  b = () => {
                    global.platform.openTab({ url: c.default.PASSWORD_AND_SRP_ARTICLE });
                  };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/SRPQuiz/SRPQuiz.tsx" }
    ],
    [
      5114,
      { "./SRPQuiz": 5113 },
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
                  a = (r = e("./SRPQuiz")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/SRPQuiz/index.ts" }
    ],
    [
      5115,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.QuizStage = void 0);
                n.QuizStage = (function (e) {
                  return (
                    (e.introduction = "introduction"),
                    (e.questionOne = "question_one"),
                    (e.wrongAnswerQuestionOne = "wrong_answer_question_one"),
                    (e.rightAnswerQuestionOne = "right_answer_question_one"),
                    (e.questionTwo = "question_two"),
                    (e.wrongAnswerQuestionTwo = "wrong_answer_question_two"),
                    (e.rightAnswerQuestionTwo = "right_answer_question_two"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/types.ts" }
    ],
    [
      5116,
      { "./step-progress-bar": 5117 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ThreeStepProgressBar", {
                    enumerable: !0,
                    get: function () {
                      return r.ThreeStepProgressBar;
                    }
                  }),
                  Object.defineProperty(n, "TwoStepProgressBar", {
                    enumerable: !0,
                    get: function () {
                      return r.TwoStepProgressBar;
                    }
                  }),
                  Object.defineProperty(n, "threeStepStages", {
                    enumerable: !0,
                    get: function () {
                      return r.threeStepStages;
                    }
                  }),
                  Object.defineProperty(n, "twoStepStages", {
                    enumerable: !0,
                    get: function () {
                      return r.twoStepStages;
                    }
                  });
                var r = e("./step-progress-bar");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/step-progress-bar/index.js" }
    ],
    [
      5117,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../ui/box": 5373,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.ThreeStepProgressBar = p),
                  (n.TwoStepProgressBar = f),
                  (n.twoStepStages = n.threeStepStages = void 0);
                var r = u(e("react")),
                  a = u(e("classnames")),
                  o = u(e("prop-types")),
                  i = e("lodash"),
                  s = e("../../../hooks/useI18nContext"),
                  l = u(e("../../ui/box")),
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                (n.threeStepStages = {
                  PASSWORD_CREATE: 1,
                  RECOVERY_PHRASE_VIDEO: 2,
                  RECOVERY_PHRASE_REVIEW: 3,
                  RECOVERY_PHRASE_CONFIRM: 4,
                  ONBOARDING_COMPLETE: 5
                }),
                  (n.twoStepStages = { RECOVERY_PHRASE_CONFIRM: 1, PASSWORD_CREATE: 2 });
                function p({ stage: e, ...t }) {
                  const n = (0, s.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    t,
                    r.default.createElement(
                      "ul",
                      { className: "progressbar" },
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 1, complete: e > 1 }) },
                        (0, i.capitalize)(n("createPassword"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 2, complete: e > 3 }) },
                        (0, i.capitalize)(n("secureWallet"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 4, complete: e > 5 }) },
                        (0, i.capitalize)(n("confirmRecoveryPhrase"))
                      )
                    )
                  );
                }
                function f({ stage: e, ...t }) {
                  const n = (0, s.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    d({ width: c.BLOCK_SIZES.FULL }, t),
                    r.default.createElement(
                      "ul",
                      { className: "progressbar two-steps" },
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 1, complete: e > 1 }) },
                        (0, i.capitalize)(n("confirmRecoveryPhrase"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)("two-steps", { active: e >= 2, complete: e > 2 }) },
                        (0, i.capitalize)(n("createPassword"))
                      )
                    )
                  );
                }
                (p.propTypes = { stage: o.default.number, ...l.default.propTypes }),
                  (f.propTypes = { stage: o.default.number, ...l.default.propTypes });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/step-progress-bar/step-progress-bar.js" }
    ],
    [
      5118,
      { "./tab-bar": 5119 },
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
                  a = (r = e("./tab-bar")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/tab-bar/index.js" }
    ],
    [
      5119,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (e) => {
                  const { tabs: t = [], onSelect: n, isActive: a } = e;
                  return r.default.createElement(
                    "div",
                    { className: "tab-bar" },
                    t.map(({ key: e, content: t, icon: l }) =>
                      r.default.createElement(
                        i.Box,
                        {
                          as: "button",
                          key: e,
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingLeft: 4,
                          paddingRight: 4,
                          className: (0, o.default)("tab-bar__tab pointer", { "tab-bar__tab--active": a(e, t) }),
                          onClick: () => n(e)
                        },
                        a(e, t) &&
                          r.default.createElement(i.Box, {
                            className: "tab-bar__tab__selected-indicator",
                            borderRadius: s.BorderRadius.pill,
                            backgroundColor: s.Color.primaryDefault,
                            display: [s.Display.None, s.Display.Block]
                          }),
                        r.default.createElement(
                          "div",
                          { className: "tab-bar__tab__content" },
                          r.default.createElement("div", { className: "tab-bar__tab__content__icon" }, l),
                          r.default.createElement("div", { className: "tab-bar__tab__content__title" }, t)
                        ),
                        r.default.createElement(i.Icon, {
                          name: i.IconName.ArrowRight,
                          size: i.IconSize.Sm,
                          className: "tab-bar__tab__caret"
                        })
                      )
                    )
                  );
                };
                c.propTypes = { isActive: a.default.func.isRequired, tabs: a.default.array, onSelect: a.default.func };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/tab-bar/tab-bar.js" }
    ],
    [
      5120,
      { "./terms-of-use-popup": 5121 },
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
                  a = (r = e("./terms-of-use-popup")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/terms-of-use-popup/index.js" }
    ],
    [
      5121,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../component-library": 5242,
        "../../ui/box": 5373,
        "../../ui/check-box/check-box.component": 5382,
        "../../ui/popover": 5465,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = y);
                var r = (function (e, t) {
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
                  a = m(e("prop-types")),
                  o = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  s = m(e("../../ui/popover")),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../component-library"),
                  u = m(e("../../ui/box")),
                  d = m(e("../../ui/check-box/check-box.component")),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../contexts/metametrics");
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
                function y({ onAccept: e }) {
                  const t = (0, r.useContext)(i.I18nContext),
                    n = (0, r.useContext)(f.MetaMetricsContext),
                    [a, m] = (0, r.useState)(!1),
                    [h, y] = (0, r.useState)(!0),
                    g = (0, r.useRef)(),
                    b = r.default.createRef(),
                    v = (0, o.debounce)((e) => {
                      y(e.scrollHeight - e.scrollTop !== e.clientHeight);
                    }, 100);
                  return (
                    (0, r.useEffect)(() => {
                      n({
                        category: p.MetaMetricsEventCategory.Onboarding,
                        event: p.MetaMetricsEventName.TermsOfUseShown,
                        properties: { location: "Terms Of Use Popover" }
                      });
                    }, []),
                    r.default.createElement(
                      s.default,
                      {
                        className: "terms-of-use__popover",
                        popoverRef: g,
                        onScroll: (e) => {
                          v(e.target);
                        },
                        showScrollDown: h,
                        title: t("termsOfUseTitle"),
                        onScrollDownButtonClick: (e) => {
                          e.stopPropagation(), b.current.scrollIntoView({ behavior: "smooth" });
                        },
                        footerProps: { justifyContent: l.AlignItems.center, flexDirection: l.FLEX_DIRECTION.COLUMN },
                        footer: r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            c.Button,
                            {
                              variant: c.BUTTON_VARIANT.PRIMARY,
                              className: "terms-of-use__button",
                              onClick: e,
                              disabled: !a,
                              "data-testid": "terms-of-use-accept-button"
                            },
                            t("accept")
                          ),
                          r.default.createElement(
                            c.Text,
                            { as: "p", marginTop: 4, className: "terms-of-use__footer-text", color: l.TextColor.textAlternative },
                            t("termsOfUseFooterText")
                          )
                        )
                      },
                      r.default.createElement(
                        u.default,
                        { className: "terms-of-use" },
                        r.default.createElement(
                          u.default,
                          { className: "terms-of-use__content", marginBottom: 4, marginLeft: 4, marginRight: 4 },
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "IMPORTANT NOTICE: THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS AS DETAILED IN SECTION 11. PLEASE READ THE AGREEMENT CAREFULLY."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "ConsenSys Software Inc. (“ConsenSys,” “we,” “us,” or “our”) is the leading blockchain software development company. With a focus on utilizing decentralized technologies, such as Ethereum, our software is powering a revolution in commerce and finance and helping to optimize business processes. ConsenSys hosts a top level domain website, www.consensys.net, that serves information regarding ConsenSys and our Offerings, as defined below, as well as sub-domains for our products or services (the top level domain with the sub-domains collectively referred to as the “Site”), which include text, images, audio, code and other materials or third party information. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "These Terms of Use (the “Terms,” “Terms of Use” or “Agreement”) contain the terms and conditions that govern your access to and use of the Site and Offerings provided by us and is an agreement between us and you or the entity you represent (“you” or “your”). Please read these Terms of Use carefully before using the Site or Offerings. By using the Site, clicking a button or checkbox to accept or agree to these Terms where that option is made available, clicking a button to use or access any of the Offerings, completing an Order, or,  if earlier, using or otherwise accessing the Offerings (the date on which any of the events listed above occur being the “Effective Date”), you (1) accept and agree to these Terms and any additional terms, rules and conditions of participation issued by ConsenSys from time to time and (2) consent to the collection, use, disclosure and other handling of information as described in our",
                            " ",
                            r.default.createElement(
                              c.ButtonLink,
                              {
                                href: "https://consensys.net/privacy-policy/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: l.Color.primaryDefault,
                                variant: l.TextVariant.bodySm
                              },
                              "Privacy Policy."
                            ),
                            " ",
                            "If you do not agree to the Terms or perform any and all obligations you accept under the Terms, then you may not access or use the Offerings. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "You represent to us that you are lawfully able to enter into contracts. If you are entering into this Agreement for an entity, such as the company you work for, you represent to us that you have legal authority to bind that entity. Please see Section 13 for definitions of certain capitalized terms used in this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "In addition, you represent to us that you and your financial institutions, or any party that owns or controls you or your financial institutions, are (1) not subject to sanctions or otherwise designated on any list of prohibited or restricted parties, including but not limited to the lists maintained by the United Nations Security Council, the U.S. Government (i.e., the Specially Designated Nationals List and Foreign Sanctions Evaders List of the U.S. Department of Treasury and the Entity List of the U.S. Department of Commerce), the European Union or its Member States, or other applicable government authority and (2) not located in any country subject to a comprehensive sanctions program implemented by the United States."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "1. The Offerings."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.1 Generally. You may access and use the Offerings in accordance with this Agreement. You agree to comply with the terms of this Agreement and all laws, rules and regulations applicable to your use of the Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.2 Offerings and Access. ConsenSys offers a number of products and services, each an “Offering”, under the ConsenSys brand or brands owned by us. These include Codefi, Quorum, Infura, MetaMask and others. Offerings are generally accessed through the Site or through a third party provider of which we approved, such as the Google Play or Apple App Store, unless otherwise agreed in writing. Some Offerings may require you to create an account, enter a valid form of payment, and select a paid plan (a “Paid Plan”), or initiate an Order. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.3 Third-Party Content. In certain Offerings, Third-Party Content may be used by you at your election. Third-Party Content is governed by this Agreement and, if applicable, separate terms and conditions accompanying such Third-Party Content, which terms and conditions may include separate fees and charges."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.4 Third-Party Offerings. When you use our Offerings, you may also be using the products or services of one or more third parties. Your use of these third party offerings may be subject to the separate policies, terms of use, and fees of these third parties."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "2. Changes."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "2.1 To the Offerings. We may change or discontinue any or all of the Offerings or change or remove functionality of any or all of the Offerings from time to time. We will use commercially reasonable efforts to communicate to you any material change or discontinuation of an Offering through the Site or public communication channels.  If you are on a Paid Plan, we will use commercially reasonable efforts to communicate to you  any material changes to or discontinuation of the Offering at least 30 days in advance of such change, and we will use commercially reasonable efforts to continue supporting the previous version of the Offering for up to three months after the change or discontinuation, except if doing so (a) would pose an information security or intellectual property issue, (b) is economically or technically burdensome, or (c) would create undue risk of us violating the law."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "2.2 To this Agreement. We reserve the right, at our sole discretion, to modify or replace any part of this Agreement or any Policies at any time. It is your responsibility to check this Agreement periodically for changes, but we will also use commercially reasonable efforts to communicate any material changes to this Agreement through the Site or other public channels. Your continued use of or access to the Offerings following the posting of any changes to this Agreement constitutes acceptance of those changes."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "3. Your Responsibilities."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.1 Your Accounts.  For those Offerings that require an account, and except to the extent caused by our breach of this Agreement, (a) you are responsible for all activities that occur under your account, regardless of whether the activities are authorized by you or undertaken by you, your employees or a third party (including your contractors, agents or other End Users), and (b) we and our affiliates are not responsible for unauthorized access to your account, including any access that occurred as a result of fraud, phishing, or other criminal activity perpetrated by third parties.  "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.2 Your Use. You are responsible for all activities that occur through your use of those Offerings that do not require an account, except to the extent caused by our breach of this Agreement, regardless of whether the activities are authorized by you or undertaken by you, your employees or a third party (including your contractors, agents or other End Users).  We and our affiliates are not responsible for unauthorized access that may occur during your use of the Offerings, including any access that occurred as a result of fraud, phishing, or other criminal activity perpetrated by third parties.  You will ensure that your use of the Offerings does not violate any applicable law.  "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.3 Your Security and Backup. You are solely responsible for properly configuring and using the Offerings and otherwise taking appropriate action to secure, protect and backup your accounts and/or Your Content in a manner that will provide appropriate security and protection, which might include use of encryption.  This includes your obligation under this Agreement to record and securely maintain any passwords or backup security phrases (i.e. “seed” phrases) that relate to your use of the Offerings. You acknowledge that you will not share with us nor any other third party any password or backup/seed phrase that relates to your use of the Offerings, and that we will not be held responsible if you do share any such phrase or password."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.4 Log-In Credentials and API Authentication. To the extent we provide you with log-in credentials and API authentication generated by the Offerings, such log-in credentials and API authentication are for your use only and you will not sell, transfer or sublicense them to any other entity or person, except that you may disclose your password or private key to your agents and subcontractors performing work on your behalf."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.5 Applicability to MetaMask Offerings. For the avoidance of doubt, the terms of this Section 3 are applicable to all Offerings, including MetaMask and any accounts you create through MetaMask with Third Party Offerings, such as decentralized applications, or blockchain-based accounts themselves."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "4. Fees and Payment."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.1 Publicly Available Offerings. Some Offerings may be offered to the public and licensed on a royalty free basis, including Offerings that require a Paid Plan for software licensing fees above a certain threshold of use. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.2 Offering Fees.  If your use of an Offering does not require an Order or Paid Plan but software licensing fees are charged contemporaneously with your use of the Offering, those fees will be charged as described on the Site or in the user interface of the Offering.  Such fees may be calculated by combining a fee charged by us and a fee charged by a Third Party Offering that provides certain functionality related to the Offering.  For those Offerings which entail an Order or Paid Plan, we calculate and bill fees and charges according to your Order or Paid Plan. For such Offerings, on the first day of each billing period, you will pay us the applicable fees (the “Base Fees”) and any applicable taxes based on the Offerings in the Paid Plan. In addition, we may, for particular Orders, issue an invoice to you for all charges above the applicable threshold for your Paid Plan which constitute overage fees for the previous billing period. If you make any other changes to the Offerings during a billing period (e.g. upgrading or downgrading your Paid Plan), we will apply any additional charges or credits to the next billing period. We may bill you more frequently for fees accrued at our discretion upon notice to you.  You will pay all fees in U.S. dollars unless the particular Offering specifies a different form of payment or otherwise agreed to in writing. All amounts payable by you under this Agreement will be paid to us without setoff or counterclaim, and without any deduction or withholding. Fees and charges for any new Offering or new feature of an Offering will be effective when we use commercially reasonable efforts to communicate updated fees and charges through our Site or other public channels or, if you are on a Paid Plan, upon commercially reasonable efforts to notify you, unless we expressly state otherwise in a notice. We may increase or add new fees and charges for any existing Offerings you are using by using commercially reasonable efforts to notify users of the Offerings through our Site or other public channels or, if you are on a Paid Plan, by giving you at least 30 days’ prior notice.  Unless otherwise specified in an Order, if you are on a Paid Plan, all amounts due under this Agreement are payable within thirty (30) days following receipt of your invoice.  We may elect to charge you interest at the rate of 1.5% per month (or the highest rate permitted by law, if less) on all late payments."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.3 Taxes. Each party will be responsible, as required under applicable law, for identifying and paying all taxes and other governmental fees and charges (and any penalties, interest, and other additions thereto) that are imposed on that party upon or with respect to the transactions and payments under this Agreement. All fees payable by you are exclusive taxes unless otherwise noted. We reserve the right to withhold taxes where required."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "5. Temporary Suspension; Limiting API Requests."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.1 Generally. We may suspend your right to access or use any portion or all of the Offerings immediately if we determine:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) your use of the Offerings (i) poses a security risk to the Offerings or any third party, (ii) could adversely impact our systems, the Offerings or the systems of any other user, (iii) could subject us, our affiliates, or any third party to liability, or (iv) could be unlawful;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) you are, or any End User is, in breach of this Agreement;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(c) you are in breach of your payment obligations under Section 4 and such breach continues for 30 days or longer; or"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(d) for entities, you have ceased to operate in the ordinary course, made an assignment for the benefit of creditors or similar disposition of your assets, or become the subject of any bankruptcy, reorganization, liquidation, dissolution or similar proceeding."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.2 Effect of Suspension. If we suspend your right to access or use any portion or all of the Offerings:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) you remain responsible for all fees and charges you incur during the period of suspension; and"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) you will not be entitled to any fee credits for any period of suspension."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.3 Limiting API Requests. If applicable to a particular Offering, we retain sole discretion to limit your usage of the Offerings (including without limitation by limiting the number of API requests you may submit (“API Requests”)) at any time if your usage of the Offerings exceeds the usage threshold specified in your Paid Plan.   "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "6. Term; Termination."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "6.1 Term. For Offerings subject to a Paid Plan, the term of this Agreement will commence on the Effective Date and will remain in effect until terminated under this Section 6. Any notice of termination of this Agreement by either party to the other must include a Termination Date that complies with the notice periods in Section 6.2.  For Offerings that are not subject to a Paid Plan, the term of this Agreement will commence on the Effective Date and will remain in effect until you stop accessing or using the Offerings. "
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "6.2 Termination."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) Termination for Convenience. If you are not on a Paid Plan, you may terminate this Agreement for any reason by ceasing use of the Offering. If you are on a Paid Plan, each party may terminate this Agreement for any reason by giving the other party at least 30 days’ written notice, subject to the provisions in Section 6.2(b)."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "(b) Termination for Cause."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(i) By Either Party. Either party may terminate this Agreement for cause if the other party is in material breach of this Agreement and the material breach remains uncured for a period of 30 days from receipt of notice by the other party. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(ii) By Us. We may also terminate this Agreement immediately (A) for cause if we have the right to suspend under Section 5, (B) if our relationship with a third-party partner who provides software or other technology we use to provide the Offerings expires, terminates or requires us to change the way we provide the software or other technology as part of the Offerings, or (C) in order to avoid undue risk of violating the law."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "6.3 Effect of Termination. Upon the Termination Date:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(i) all your rights under this Agreement immediately terminate; and"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(ii) each party remains responsible for all fees and charges it has incurred through the Termination Date and are responsible for any fees and charges it incurs during the post-termination period;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(iii) the terms and conditions of this Agreement shall survive the expiration or termination of this Agreement to the full extent necessary for their enforcement and for the protection of the party in whose favor they operate.  For instance, despite this Agreement between you and us terminating, any dispute raised after you stop accessing or using the Offerings will be subject to the applicable provisions of this Agreement if that dispute relates to your prior access or use."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "For any use of the Offerings after the Termination Date, the terms of this Agreement will again apply and, if your use is under a Paid Plan, you will pay the applicable fees at the rates under Section 4."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "7. Proprietary Rights."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.1 Your Content. Depending on the Offering, you may share Content with us. Except as provided in this Section 7, we obtain no rights under this Agreement from you (or your licensors) to Your Content. You consent to our use of Your Content to provide the Offerings to you."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.2 Offerings License. We or our licensors own all right, title, and interest in and to the Offerings, and all related technology and intellectual property rights. Subject to the terms of this Agreement, we grant you a limited, revocable, non-exclusive, non-sublicensable, non-transferable license to do the following: (a) access and use the Offerings solely in accordance with this Agreement; and (b) copy and use Our Content solely in connection with your permitted use of the Offerings. Except as provided in this Section 7.2, you obtain no rights under this Agreement from us, our affiliates or our licensors to the Offerings, including any related intellectual property rights. Some of Our Content and Third-Party Content may be provided to you under a separate license, such as the Apache License, Version 2.0, or other open source license. In the event of a conflict between this Agreement and any separate license, the separate license will prevail with respect to Our Content or Third-Party Content that is the subject of such separate license."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.3 License Restrictions. Neither you nor any End User will use the Offerings in any manner or for any purpose other than as expressly permitted by this Agreement. Except for as authorized, neither you nor any End User will, or will attempt to (a) modify, distribute, alter, tamper with, repair, or otherwise create derivative works of any Content included in the Offerings (except to the extent Content included in the Offerings is provided to you under a separate license that expressly permits the creation of derivative works), (b) reverse engineer, disassemble, or decompile the Offerings or apply any other process or procedure to derive the source code of any software included in the Offerings (except to the extent applicable law doesn’t allow this restriction), (c) access or use the Offerings in a way intended to avoid incurring fees or exceeding usage limits or quotas, (d) use scraping techniques to mine or otherwise scrape data except as permitted by a Plan, or (e) resell or sublicense the Offerings unless otherwise agreed in writing. You will not use Our Marks unless you obtain our prior written consent. You will not misrepresent or embellish the relationship between us and you (including by expressing or implying that we support, sponsor, endorse, or contribute to you or your business endeavors). You will not imply any relationship or affiliation between us and you except as expressly permitted by this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.4 Suggestions. If you provide any Suggestions to us or our affiliates, we and our affiliates will be entitled to use the Suggestions without restriction. You hereby irrevocably assign to us all right, title, and interest in and to the Suggestions and agree to provide us any assistance we require to document, perfect, and maintain our rights in the Suggestions."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.5 U.S. Government Users. If you are a U.S. Government End User, we are licensing the Offerings to you as a “Commercial Item” as that term is defined in the U.S. Code of Federal Regulations (see 48 C.F.R. § 2.101), and the rights we grant you to the Offerings are the same as the rights we grant to all others under these Terms of Use."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "8. Indemnification."),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "8.1 General. "),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) You will defend, indemnify, and hold harmless us, our affiliates and licensors, and each of their respective employees, officers, directors, and representatives from and against any Losses arising out of or relating to any claim concerning: (a) breach of this Agreement or violation of applicable law by you; and (b) a dispute between you and any of your customers or users. You will reimburse us for reasonable attorneys’ fees and expenses, associated with claims described in (a) and (b) above."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) We will defend, indemnify, and hold harmless you and your employees, officers, directors, and representatives from and against any Losses arising out of or relating to any claim concerning our material and intentional breach of this Agreement.  We will reimburse you for reasonable attorneys’ fees and expenses associated with the claims described in this paragraph."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "8.2 Intellectual Property."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) Subject to the limitations in this Section 8, you will defend ConsenSys, its affiliates, and their respective employees, officers, and directors against any third-party claim alleging that any of Your Content infringes or misappropriates that third party’s intellectual property rights, and will pay the amount of any adverse final judgment or settlement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) Subject to the limitations in this Section 8 and the limitations in Section 10, we will defend you and your employees, officers, and directors against any third-party claim alleging that the Offerings infringe or misappropriate that third party’s intellectual property rights, and will pay the amount of any adverse final judgment or settlement.  However, we will not be required to spend more than $200,000 pursuant to this Section 8, including without limitation attorneys’ fees, court costs, settlements, judgments, and reimbursement costs."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(c) Neither party will have obligations or liability under this Section 8.2 arising from infringement by you combining the Offerings with any other product, service, software, data, content or method. In addition, we will have no obligations or liability arising from your use of the Offerings after we have notified you to discontinue such use. The remedies provided in this Section 8.2 are the sole and exclusive remedies for any third-party claims of infringement or misappropriation of intellectual property rights by the Offerings or by Your Content."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "8.3 Process. In no event will a party agree to any settlement of any claim that involves any commitment, other than the payment of money, without the written consent of the other party."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "9. Disclaimers; Risk."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "9.1 DISCLAIMER. THE OFFERINGS ARE PROVIDED “AS IS.” EXCEPT TO THE EXTENT PROHIBITED BY LAW, OR TO THE EXTENT ANY STATUTORY RIGHTS APPLY THAT CANNOT BE EXCLUDED, LIMITED OR WAIVED, WE AND OUR AFFILIATES AND LICENSORS (A) MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE REGARDING THE OFFERINGS OR THE THIRD-PARTY CONTENT, AND (B) DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED OR EXPRESS WARRANTIES (I) OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR QUIET ENJOYMENT, (II) ARISING OUT OF ANY COURSE OF DEALING OR USAGE OF TRADE, (III) THAT THE OFFERINGS OR THIRD-PARTY CONTENT WILL BE UNINTERRUPTED, ERROR FREE OR FREE OF HARMFUL COMPONENTS, AND (IV) THAT ANY CONTENT WILL BE SECURE OR NOT OTHERWISE LOST OR ALTERED."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "9.2 RISKS. OUR OFFERINGS RELY ON EMERGING TECHNOLOGIES, SUCH AS ETHEREUM. SOME OFFERINGS ARE SUBJECT TO INCREASED RISK THROUGH YOUR POTENTIAL MISUSE OF THINGS SUCH AS PUBLIC/PRIVATE KEY CRYPTOGRAPHY, OR FAILING TO PROPERLY UPDATE OR RUN SOFTWARE TO ACCOMMODATE PROTOCOL UPGRADES, LIKE THE TRANSITION TO PROOF OF STAKE CONSENSUS. BY USING THE OFFERINGS YOU EXPLICITLY ACKNOWLEDGE AND ACCEPT THESE HEIGHTENED RISKS.  YOU REPRESENT THAT YOU ARE FINANCIALLY AND TECHNICALLY SOPHISTICATED ENOUGH TO UNDERSTAND THE INHERENT RISKS ASSOCIATED WITH USING CRYPTOGRAPHIC AND BLOCKCHAIN-BASED SYSTEMS AND UPGRADING YOUR SOFTWARE AND PROCESSES TO ACCOMMODATE PROTOCOL UPGRADES, AND THAT YOU HAVE A WORKING KNOWLEDGE OF THE USAGE AND INTRICACIES OF DIGITAL ASSETS SUCH AS ETHER (ETH) AND OTHER DIGITAL TOKENS, SUCH AS THOSE FOLLOWING THE ERC-20 TOKEN STANDARD.  IN PARTICULAR, YOU UNDERSTAND THAT WE DO NOT OPERATE THE ETHEREUM PROTOCOL OR ANY OTHER BLOCKCHAIN PROTOCOL, COMMUNICATE OR EXECUTE PROTOCOL UPGRADES, OR APPROVE OR PROCESS BLOCKCHAIN TRANSACTIONS ON BEHALF OF YOU.  YOU FURTHER UNDERSTAND THAT BLOCKCHAIN PROTOCOLS PRESENT THEIR OWN RISKS OF USE, THAT SUPPORTING OR PARTICIPATING IN THE PROTOCOL MAY RESULT IN LOSSES IF YOUR PARTICIPATION VIOLATES CERTAIN PROTOCOL RULES, THAT  BLOCKCHAIN-BASED TRANSACTIONS ARE IRREVERSIBLE, THAT YOUR PRIVATE KEY AND BACKUP SEED PHRASE MUST BE KEPT SECRET AT ALL TIMES, THAT CONSENSYS WILL NOT STORE A BACKUP OF, NOR WILL BE ABLE TO DISCOVER OR RECOVER, YOUR PRIVATE KEY OR BACKUP SEED PHRASE, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY APPROVALS OR PERMISSIONS YOU PROVIDE BY CRYPTOGRAPHICALLY SIGNING BLOCKCHAIN MESSAGES OR TRANSACTIONS."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "YOU FURTHER UNDERSTAND AND ACCEPT THAT DIGITAL TOKENS PRESENT MARKET VOLATILITY RISK, TECHNICAL SOFTWARE RISKS, REGULATORY RISKS, AND CYBERSECURITY RISKS.  YOU UNDERSTAND THAT THE COST AND SPEED OF A BLOCKCHAIN-BASED SYSTEM IS VARIABLE, THAT COST MAY INCREASE DRAMATICALLY AT ANY TIME, AND THAT COST AND SPEED IS NOT WITHIN THE CAPABILITY OF CONSENSYS TO CONTROL.  YOU UNDERSTAND THAT PROTOCOL UPGRADES MAY INADVERTENTLY CONTAIN BUGS OR SECURITY VULNERABILITIES THAT MAY RESULT IN LOSS OF FUNCTIONALITY AND ULTIMATELY FUNDS."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "YOU UNDERSTAND AND ACCEPT THAT CONSENSYS DOES NOT CONTROL ANY BLOCKCHAIN PROTOCOL, NOR DOES CONSENSYS CONTROL ANY SMART CONTRACT THAT IS NOT OTHERWISE OFFERED BY CONSENSYS AS PART OF THE OFFERINGS.  YOU UNDERSTAND AND ACCEPT THAT CONSENSYS DOES NOT CONTROL AND IS NOT RESPONSIBLE FOR THE TRANSITION OF ANY BLOCKCHAIN PROTOCOL FROM PROOF OF WORK TO PROOF OF STAKE CONSENSUS.  YOU AGREE THAT YOU ALONE, AND NOT CONSENSYS, IS RESPONSIBLE FOR ANY TRANSACTIONS THAT YOU ENGAGE IN WITH REGARD TO SUPPORTING ANY BLOCKCHAIN PROTOCOL WHETHER THROUGH TRANSACTION VALIDATION OR OTHERWISE, OR ANY TRANSACTIONS THAT YOU ENGAGE IN WITHANY THIRD-PARTY-DEVELOPED SMART CONTRACT OR TOKEN, INCLUDING TOKENS THAT WERE CREATED BY A THIRD PARTY FOR THE PURPOSE OF FRAUDULENTLY MISREPRESENTING AFFILIATION WITH ANY BLOCKCHAIN PROJECT.  YOU AGREE THAT CONSENSYS IS NOT RESPONSIBLE FOR THE REGULATORY STATUS OR TREATMENT OF ANY DIGITAL ASSETS THAT YOU MAY ACCESS OR TRANSACT WITH USING CONSENSYS OFFERINGS.  YOU EXPRESSLY ASSUME FULL RESPONSIBILITY FOR ALL OF THE RISKS OF ACCESSING AND USING THE OFFERINGS TO INTERACT WITH BLOCKCHAIN PROTOCOLS. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "10. Limitations of Liability."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "10.1 Limitation of Liability. WITH THE EXCEPTION OF CLAIMS RELATING TO A BREACH OF OUR PROPRIETARY RIGHTS AS GOVERNED BY SECTION 7 AND INTELLECTUAL PROPERTY CLAIMS AS GOVERNED BY SECTION 8, IN NO EVENT SHALL THE AGGREGATE LIABILITY OF EACH PARTY TOGETHER WITH ALL OF ITS AFFILIATES ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY YOU HEREUNDER FOR THE OFFERINGS GIVING RISE TO THE LIABILITY IN THE TWELVE MONTHS PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE, OR, IF NO FEES HAVE BEEN PAID, $25,000. THE FOREGOING LIMITATION WILL APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, BUT WILL NOT LIMIT YOUR PAYMENT OBLIGATIONS UNDER SECTION 4. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "10.2 Exclusion of Consequential and Related Damages. IN NO EVENT WILL EITHER PARTY OR ITS AFFILIATES HAVE ANY LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT FOR ANY LOST PROFITS, REVENUES, GOODWILL, OR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER, BUSINESS INTERRUPTION OR PUNITIVE DAMAGES, WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF A PARTY OR ITS AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR IF A PARTY’S OR ITS AFFILIATES’ REMEDY OTHERWISE FAILS OF ITS ESSENTIAL PURPOSE. THE FOREGOING DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY LAW."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "11. Binding Arbitration and Class Action Waiver."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1 Binding Arbitration. Any dispute, claim or controversy (“Claim”) relating in any way to this Agreement, the Site, or your use of the Offerings will be resolved by binding arbitration as provided in this Section 11, rather than in court, except that you may assert claims in small claims court if your claims qualify."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.1 If you are located in the United States: This agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the laws of the State of New York. The Federal Arbitration Act and federal arbitration law apply to this Agreement. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages), and must follow the terms of this Agreement as a court would. The arbitration will be conducted in accordance with the expedited procedures set forth in the JAMS Comprehensive Arbitration Rules and Procedures (the “Rules”) as those Rules exist on the effective date of this Agreement, including Rules 16.1 and 16.2 of those Rules. The arbitrator’s decision shall be final, binding, and non-appealable. Judgment upon the award may be entered and enforced in any court having jurisdiction. Neither party shall sue the other party other than as provided herein or for enforcement of this clause or of the arbitrator’s award; any such suit may be brought only in a Federal District Court or a New York state court located in New York County, New York. The arbitrator, and not any federal, state, or local court, shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, unconscionability, arbitrability, enforceability, or formation of this Agreement including any claim that all or any part of the Agreement is void or voidable.  If for any reason a claim proceeds in court rather than in arbitration we and you waive any right to a jury trial. Notwithstanding the foregoing we and you both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.2 If you are located in the United Kingdom: This agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of England and Wales. Any dispute, claim or controversy relating in any way to this Agreement, the Offerings, your use of the Offerings, or to any products or services licensed or distributed by us will be resolved by binding arbitration as provided in this clause. Prior to commencing any formal arbitration proceedings, parties shall first seek settlement of any claim by mediation in accordance with the LCIA Mediation Rules, which Rules are deemed to be incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of the commencement of the mediation, or such further period as the parties shall agree in writing, the dispute shall be referred to and finally resolved by arbitration under the LCIA Rules, which are deemed to be incorporated by reference into this clause. The language to be used in the mediation and in the arbitration shall be English. The seat or legal place of arbitration shall be London."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.3 If you are located in any territory that is not specifically enumerated in Sections 11.1.1 or 11.1.2, you may elect for either of Section 11.1.1 or 11.1.2 to apply to you, otherwise this Agreement and any Claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of Ireland. Any Claim relating in any way to this Agreement, the Offerings, your use of the Offerings, or to any products or services licensed or distributed by us will be resolved by binding arbitration as provided in this clause. Prior to commencing any formal arbitration proceedings, parties shall first seek settlement of any claim by mediation in accordance with the LCIA Mediation Rules, which Rules are deemed to be incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of the commencement of the mediation, or such further period as the parties shall agree in writing, the Claim shall be referred to and finally resolved by arbitration under the LCIA Rules, which are deemed to be incorporated by reference into this clause. The language to be used in the mediation and in the arbitration shall be English. The seat or legal place of arbitration shall be Dublin, Ireland."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.2 Class Action Waiver. YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. YOU AND WE EXPRESSLY WAIVE ANY RIGHT TO FILE A CLASS ACTION OR SEEK RELIEF ON A CLASS BASIS. Unless both you and we agree, no arbitrator or judge may consolidate more than one person’s claims or otherwise preside over any form of a representative or class proceeding. The arbitrator may award injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. If a court decides that applicable law precludes enforcement of any of this paragraph’s limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court. If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.3 30-Day Right to Opt Out. You have the right to opt-out and not be bound by the arbitration and class action waiver provisions set forth above by sending written notice of your decision to opt-out to the email address notices@consensys.net with subject line LEGAL OPT OUT. The notice must be sent within 30 days of your first use of the Offerings, otherwise you shall be bound to arbitrate disputes and will be deemed to have agreed to waive any right to pursue a class action in accordance with the terms of those paragraphs. If you opt-out of these provisions, we will also not be bound by them."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "12. Miscellaneous."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.1 Assignment. You will not assign or otherwise transfer this Agreement or any of your rights and obligations under this Agreement, without our prior written consent. Any assignment or transfer in violation of this Section 12.1 will be void. We may assign this Agreement without your consent (a) in connection with a merger, acquisition or sale of all or substantially all of our assets, or (b) to any Affiliate or as part of a corporate reorganization; and effective upon such assignment, the assignee is deemed substituted for us as a party to this Agreement and we are fully released from all of our obligations and duties to perform under this Agreement. Subject to the foregoing, this Agreement will be binding upon, and inure to the benefit of the parties and their respective permitted successors and assigns."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.2 DAOs. As a blockchain native company, we may interact with and provide certain Offerings to DAOs. Due to the unique nature of DAOs, to the extent the DAO votes in favor of and/or accepts such Offerings from ConsenSys, the DAO has acknowledged and agreed to these Terms in their entirety."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.2 Entire Agreement and Modifications. This Agreement incorporates the Policies by reference and is the entire agreement between you and us regarding the subject matter of this Agreement. If the terms of this document are inconsistent with the terms contained in any Policy, the terms contained in this document will control. Any modification to the terms of this Agreement may only be made in writing."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.3 Force Majeure. Neither party nor their respective affiliates will be liable for any delay or failure to perform any obligation under this Agreement where the delay or failure results from any cause beyond such party’s reasonable control, including but not limited to acts of God, utilities or other telecommunications failures, cyber attacks, earthquake, storms or other elements of nature, pandemics, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.4 Export and Sanctions Compliance. In connection with this Agreement, you will comply with all applicable import, re-import, sanctions, anti-boycott, export, and re-export control laws and regulations, including all such laws and regulations that may apply. For clarity, you are solely responsible for compliance related to the manner in which you choose to use the Offerings. You may not use any Offering if you are the subject of U.S. sanctions or of sanctions consistent with U.S. law imposed by the governments of the country where you are using the Offering. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.5 Independent Contractors; Non-Exclusive Rights. We and you are independent contractors, and this Agreement will not be construed to create a partnership, joint venture, agency, or employment relationship. Neither party, nor any of their respective affiliates, is an agent of the other for any purpose or has the authority to bind the other. Both parties reserve the right (a) to develop or have developed for it products, services, concepts, systems, or techniques that are similar to or compete with the products, services, concepts, systems, or techniques developed or contemplated by the other party, and (b) to assist third party developers or systems integrators who may offer products or services which compete with the other party’s products or services."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.6 Eligibility. If you are under the age of majority in your jurisdiction of residence, you may use the Site or Offerings only with the consent of or under the supervision of your parent or legal guardian."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "NOTICE TO PARENTS AND GUARDIANS: By granting your minor permission to access the Site or Offerings, you agree to these Terms of Use on behalf of your minor. You are responsible for exercising supervision over your minor’s online activities. If you do not agree to these Terms of Use, do not let your minor use the Site or Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.7 Language. All communications and notices made or given pursuant to this Agreement must be in the English language. If we provide a translation of the English language version of this Agreement, the English language version of the Agreement will control if there is any conflict."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "12.8 Notice."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) To You. We may provide any notice to you under this Agreement using commercially reasonable means, including: (i) posting a notice on the Site; (ii) sending a message to the email address then associated with your account; or (iii) using public communication channels . Notices we provide by posting on the Site or using public communication channels will be effective upon posting, and notices we provide by email will be effective when we send the email. It is your responsibility to keep your email address current to the extent you have an account. You will be deemed to have received any email sent to the email address then associated with your account when we send the email, whether or not you actually receive the email."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) To Us. To give us notice under this Agreement, you must contact us by email at notices@consensys.net. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.9 No Third-Party Beneficiaries. Except as otherwise set forth herein, this Agreement does not create any third-party beneficiary rights in any individual or entity that is not a party to this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.10 No Waivers. The failure by us to enforce any provision of this Agreement will not constitute a present or future waiver of such provision nor limit our right to enforce such provision at a later time. All waivers by us must be in writing to be effective."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.11 Severability. If any portion of this Agreement is held to be invalid or unenforceable, the remaining portions of this Agreement will remain in full force and effect. Any invalid or unenforceable portions will be interpreted to effect and intent of the original portion. If such construction is not possible, the invalid or unenforceable portion will be severed from this Agreement but the rest of the Agreement will remain in full force and effect."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.12 Notice and Procedure for Making Claims of Copyright Infringement. If you are a copyright owner or agent of the owner, and you believe that your copyright or the copyright of a person on whose behalf you are authorized to act has been infringed, please provide us a written notice at the address below with the following information:"
                          ),
                          r.default.createElement(
                            u.default,
                            { as: "ol", marginLeft: 4, className: "terms-of-use__terms-list" },
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a description of the copyrighted work or other intellectual property that you claim has been infringed;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a description of where the material that you claim is infringing is located with respect to the Offerings;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "your address, telephone number, and email address;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf."
                            )
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "You can reach us at:"),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "Email: notices@consensys.net"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "Subject Line: Copyright Notification Mail"
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "Attention: Copyright ℅"),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "ConsenSys Software Inc. "),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "49 Bogart Street Suite 22 Brooklyn, NY 11206"
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "13. Definitions."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Acceptable Use Policy” means the policy set forth below, as it may be updated by us from time to time. You agree not to, and not to allow third parties to, use the Offerings:"
                          ),
                          r.default.createElement(
                            u.default,
                            { as: "ol", marginLeft: 4, className: "terms-of-use__terms-list" },
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to violate, or encourage the violation of, the legal rights of others (for example, this may include allowing End Users to infringe or misappropriate the intellectual property rights of others in violation of the Digital Millennium Copyright Act);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to engage in, promote or encourage any illegal or infringing content;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "for any unlawful, invasive, infringing, defamatory or fraudulent purpose (for example, this may include phishing, creating a pyramid scheme or mirroring a website);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to intentionally distribute viruses, worms, Trojan horses, corrupted files, hoaxes, or other items of a destructive or deceptive nature;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to interfere with the use of the Offerings, or the equipment used to provide the Offerings, by customers, authorized resellers, or other authorized users;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to disable, interfere with or circumvent any aspect of the Offerings (for example, any thresholds or limits);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to generate, distribute, publish or facilitate unsolicited mass email, promotions, advertising or other solicitation; or"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to use the Offerings, or any interfaces provided with the Offerings, to access any other product or service in a manner that violates the terms of service of such other product or service."
                            )
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“API” means an application program interface."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“API Requests” has the meaning set forth in Section 5.3."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Applicable Threshold” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Base Fees” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Content” means any data, text, audio, video or images, software (including machine images), and any documentation."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“DAO” means Decentralized Autonomous Organization."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“End User” means any individual or entity that directly or indirectly through another user: (a) accesses or uses Your Content; or (b) otherwise accesses or uses the Offerings under your account. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Fees” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Losses” means any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees).’"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Our Content” means any software (including machine images), data, text, audio, video, images, or documentation that we offer in connection with the Offerings. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Our Marks” means any trademarks, service marks, service or trade names, logos, and other designations of ConsenSys Software Inc. and their affiliates or licensors that we may make available to you in connection with this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Order” means an order for Offerings executed through an order form directly with ConsenSys, or through a cloud vendor, such as Amazon Web Services, Microsoft Azure, or Google Cloud."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Offerings” means each of the products and services, including but not limited to Codefi, Infura, MetaMask, Quorum and any other features, tools, materials, or services offered from time to time, by us or our affiliates. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Policies” means the Acceptable Use Policy, Privacy Policy, any supplemental policies or addendums applicable to any Service as provided to you, and any other policy or terms referenced in or incorporated into this Agreement, each as may be updated by us from time to time."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Privacy Policy” means the privacy policy located at",
                            " ",
                            r.default.createElement(
                              c.ButtonLink,
                              {
                                href: "https://consensys.net/privacy-policy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: l.Color.primaryDefault,
                                variant: l.TextVariant.bodySm
                              },
                              "https://consensys.net/privacy-policy"
                            ),
                            " ",
                            "(and any successor or related locations designated by us), as it may be updated by us from time to time."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Service Offerings” means the Services (including associated APIs), Our Content, Our Marks, and any other product or service provided by us under this Agreement. Service Offerings do not include Third-Party Content or Third-Party Services."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Suggestions” means all suggested improvements to the Service Offerings that you provide to us.."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Term” means the term of this Agreement described in Section 6.1."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Termination Date” means the effective date of termination provided in accordance with Section 6, in a notice from one party to the other."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Third-Party Content” means Content made available to you by any third party on the Site or in conjunction with the Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Your Content” means content that you or any End User transfers to us, storage or hosting by the Offerings in connection with account and any computational results that you or any End User derive from the foregoing through their use of the Offerings, excluding however any information submitted to a blockchain protocol for processing. "
                          ),
                          r.default.createElement(
                            u.default,
                            {
                              flexDirection: l.FLEX_DIRECTION.ROW,
                              alignItems: l.AlignItems.flexStart,
                              marginLeft: 3,
                              marginRight: 3,
                              gap: 2
                            },
                            r.default.createElement(d.default, {
                              id: "terms-of-use__checkbox",
                              className: "terms-of-use__checkbox",
                              dataTestId: "terms-of-use-checkbox",
                              checked: a,
                              onClick: () => {
                                m(!a);
                              }
                            }),
                            r.default.createElement(
                              c.Label,
                              { htmlFor: "terms-of-use__checkbox" },
                              r.default.createElement(
                                c.Text,
                                { variant: l.TextVariant.bodyMdBold, as: "span", ref: b },
                                t("termsOfUseAgreeText")
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
                y.propTypes = { onAccept: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/terms-of-use-popup/terms-of-use-popup.js" }
    ],
    [
      5122,
      { "./token-cell": 5123 },
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
                  a = (r = e("./token-cell")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-cell/index.js" }
    ],
    [
      5123,
      {
        "../../../../shared/modules/string-utils": 4797,
        "../../../hooks/useTokenFiatAmount": 5621,
        "../../../selectors": 5958,
        "../../multichain": 5327,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r = u(e("prop-types")),
                  a = u(e("react")),
                  o = e("react-redux"),
                  i = e("../../../selectors"),
                  s = e("../../../hooks/useTokenFiatAmount"),
                  l = e("../../multichain"),
                  c = e("../../../../shared/modules/string-utils");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d({ address: e, image: t, symbol: n, string: r, onClick: u }) {
                  const d = (0, o.useSelector)(i.getTokenList),
                    p = Object.values(d).find((t) => t.symbol === n && (0, c.isEqualCaseInsensitive)(t.address, e)),
                    f = (null == p ? void 0 : p.name) || n,
                    m = (null == p ? void 0 : p.iconUrl) || t,
                    h = (0, s.useTokenFiatAmount)(e, r, n);
                  return a.default.createElement(l.TokenListItem, {
                    onClick: () => u(e),
                    tokenSymbol: n,
                    tokenImage: m,
                    primary: `${r || 0}`,
                    secondary: h,
                    title: f
                  });
                }
                d.propTypes = {
                  address: r.default.string,
                  symbol: r.default.string,
                  string: r.default.string,
                  onClick: r.default.func.isRequired,
                  image: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-cell/token-cell.js" }
    ],
    [
      5124,
      { "./token-list-display": 5125 },
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
                  a = (r = e("./token-list-display")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list-display/index.js" }
    ],
    [
      5125,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../hooks/useI18nContext": 5602,
        "../../../hooks/useTokenTracker": 5622,
        "../../../selectors": 5958,
        "../../ui/identicon": 5430,
        "../../ui/token-balance": 5497,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = f(e("react")),
                  a = f(e("prop-types")),
                  o = e("react-redux"),
                  i = e("lodash"),
                  s = e("../../../selectors"),
                  l = e("../../../hooks/useTokenTracker"),
                  c = f(e("../../ui/identicon")),
                  u = f(e("../../ui/token-balance")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../ducks/metamask/metamask");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m({ clickHandler: e }) {
                  const t = (0, d.useI18nContext)(),
                    n = (0, o.useSelector)(s.getShouldHideZeroBalanceTokens),
                    a = (0, o.useSelector)(p.getTokens, i.isEqual),
                    { loading: f, tokensWithBalances: m } = (0, l.useTokenTracker)({
                      tokens: a,
                      includeFailedTokens: !0,
                      hideZeroBalanceTokens: n
                    });
                  if (f) return r.default.createElement("div", { className: "loading-span" }, t("loadingTokens"));
                  const h = m.filter((e) => !e.isERC721);
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    h.map((n) => {
                      const { address: a, symbol: o, image: i } = n;
                      return r.default.createElement(
                        "div",
                        { key: a, className: "token-list-item", onClick: () => e(n) },
                        r.default.createElement(c.default, { address: a, diameter: 36, image: i }),
                        r.default.createElement(
                          "div",
                          { className: "token-list-item__data" },
                          r.default.createElement("div", { className: "token-list-item__symbol" }, o),
                          r.default.createElement(
                            "div",
                            { className: "token-list-item__balance" },
                            r.default.createElement("span", { className: "token-list-item__balance__label" }, `${t("balance")}:`),
                            r.default.createElement(u.default, { token: n })
                          )
                        )
                      );
                    })
                  );
                }
                m.propTypes = { clickHandler: a.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list-display/token-list-display.js" }
    ],
    [
      5126,
      { "./token-list": 5127 },
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
                  a = (r = e("./token-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list/index.js" }
    ],
    [
      5127,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../token-cell": 5122,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("../token-cell")),
                  i = e("../../../hooks/useI18nContext"),
                  s = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                function d({ onTokenClick: e, tokens: t, loading: n = !1 }) {
                  const a = (0, i.useI18nContext)();
                  return n
                    ? r.default.createElement(
                        s.Box,
                        {
                          display: l.Display.Flex,
                          alignItems: l.AlignItems.center,
                          justifyContent: l.JustifyContent.center,
                          padding: 7,
                          "data-testid": "token-list-loading-message"
                        },
                        a("loadingTokens")
                      )
                    : r.default.createElement(
                        "div",
                        null,
                        t.map((t, n) => r.default.createElement(o.default, u({ key: n }, t, { onClick: e })))
                      );
                }
                d.propTypes = { onTokenClick: a.default.func.isRequired, tokens: a.default.array.isRequired, loading: a.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list/token-list.js" }
    ],
    [
      5128,
      { "./transaction-activity-log.container": 5133 },
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
                  a = (r = e("./transaction-activity-log.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/index.js" }
    ],
    [
      5129,
      { "./transaction-activity-log-icon.component": 5130 },
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
                  a = (r = e("./transaction-activity-log-icon.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log-icon/index.js" }
    ],
    [
      5130,
      {
        "../../../../helpers/constants/design-system": 5537,
        "../../../component-library": 5242,
        "../transaction-activity-log.constants": 5132,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.ACTIVITY_ICONS = void 0);
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
                  a = c(e("prop-types")),
                  o = c(e("classnames")),
                  i = e("../transaction-activity-log.constants"),
                  s = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system");
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
                const p = (n.ACTIVITY_ICONS = {
                  [i.TRANSACTION_CREATED_EVENT]: s.IconName.Add,
                  [i.TRANSACTION_SUBMITTED_EVENT]: s.IconName.ArrowUp,
                  [i.TRANSACTION_RESUBMITTED_EVENT]: s.IconName.ProgrammingArrows,
                  [i.TRANSACTION_CONFIRMED_EVENT]: s.IconName.Check,
                  [i.TRANSACTION_DROPPED_EVENT]: s.IconName.Close,
                  [i.TRANSACTION_ERRORED_EVENT]: s.IconName.Danger,
                  [i.TRANSACTION_CANCEL_ATTEMPTED_EVENT]: s.IconName.Close,
                  [i.TRANSACTION_CANCEL_SUCCESS_EVENT]: s.IconName.Close
                });
                class f extends r.PureComponent {
                  render() {
                    const { className: e, eventKey: t } = this.props,
                      n = p[t];
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("transaction-activity-log-icon", e) },
                      n ? r.default.createElement(s.Icon, { name: n, color: l.Color.iconDefault, size: s.IconSize.Sm }) : null
                    );
                  }
                }
                (n.default = f),
                  d(f, "contextTypes", { t: a.default.func }),
                  d(f, "propTypes", { className: a.default.string, eventKey: a.default.oneOf(Object.keys(p)) });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.component.js"
      }
    ],
    [
      5131,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../helpers/utils/util": 5578,
        "./transaction-activity-log-icon": 5129,
        "./transaction-activity-log.constants": 5132,
        "@metamask/etherscan-link": 1370,
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
                  o = p(e("classnames")),
                  i = e("@metamask/etherscan-link"),
                  s = e("../../../helpers/utils/util"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/modules/conversion.utils"),
                  u = p(e("./transaction-activity-log-icon")),
                  d = e("./transaction-activity-log.constants");
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
                class h extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "handleActivityClick", (e) => {
                        const { rpcPrefs: t } = this.props,
                          n = (0, i.getBlockExplorerLink)(e, t);
                        this.context.trackEvent({
                          category: l.MetaMetricsEventCategory.Transactions,
                          event: "Clicked Block Explorer Link",
                          properties: {
                            link_type: "Transaction Block Explorer",
                            action: "Activity Details",
                            block_explorer_domain: (0, s.getURLHostName)(n)
                          }
                        }),
                          global.platform.openTab({ url: n });
                      });
                  }
                  renderInlineRetry(e) {
                    const { t: t } = this.context,
                      { inlineRetryIndex: n, primaryTransaction: a = {}, onRetry: o, isEarliestNonce: i } = this.props,
                      { status: s } = a;
                    return i && s !== d.CONFIRMED_STATUS && e === n
                      ? r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__action-link", onClick: o },
                          t("speedUpTransaction")
                        )
                      : null;
                  }
                  renderInlineCancel(e) {
                    const { t: t } = this.context,
                      { inlineCancelIndex: n, primaryTransaction: a = {}, onCancel: o, isEarliestNonce: i } = this.props,
                      { status: s } = a;
                    return i && s !== d.CONFIRMED_STATUS && e === n
                      ? r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__action-link", onClick: o },
                          t("speedUpCancellation")
                        )
                      : null;
                  }
                  renderActivity(e, t) {
                    const { conversionRate: n, nativeCurrency: a } = this.props,
                      { eventKey: o, value: i, timestamp: l } = e,
                      d = `${(0, c.getValueFromWeiHex)({
                        value: i,
                        fromCurrency: "ETH",
                        toCurrency: "ETH",
                        conversionRate: n,
                        numberOfDecimals: 6
                      })} ${a}`,
                      p = (0, s.formatDate)(l, "T 'on' M/d/y"),
                      f = this.context.t(o, [d, p]);
                    return r.default.createElement(
                      "div",
                      { key: t, className: "transaction-activity-log__activity" },
                      r.default.createElement(u.default, { className: "transaction-activity-log__activity-icon", eventKey: o }),
                      r.default.createElement(
                        "div",
                        { className: "transaction-activity-log__entry-container" },
                        r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__activity-text", title: f, onClick: () => this.handleActivityClick(e) },
                          f
                        ),
                        this.renderInlineRetry(t),
                        this.renderInlineCancel(t)
                      )
                    );
                  }
                  render() {
                    const { t: e } = this.context,
                      { className: t, activities: n } = this.props;
                    return 0 === n.length
                      ? null
                      : r.default.createElement(
                          "div",
                          { className: (0, o.default)("transaction-activity-log", t) },
                          r.default.createElement("div", { className: "transaction-activity-log__title" }, e("activityLog")),
                          r.default.createElement(
                            "div",
                            { className: "transaction-activity-log__activities-container" },
                            n.map((e, t) => this.renderActivity(e, t))
                          )
                        );
                  }
                }
                (n.default = h),
                  m(h, "contextTypes", { t: a.default.func, trackEvent: a.default.func }),
                  m(h, "propTypes", {
                    activities: a.default.array,
                    className: a.default.string,
                    conversionRate: a.default.number,
                    inlineRetryIndex: a.default.number,
                    inlineCancelIndex: a.default.number,
                    nativeCurrency: a.default.string,
                    onCancel: a.default.func,
                    onRetry: a.default.func,
                    primaryTransaction: a.default.object,
                    isEarliestNonce: a.default.bool,
                    rpcPrefs: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.component.js" }
    ],
    [
      5132,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.TRANSACTION_UPDATED_EVENT =
                    n.TRANSACTION_SUBMITTED_EVENT =
                    n.TRANSACTION_RESUBMITTED_EVENT =
                    n.TRANSACTION_ERRORED_EVENT =
                    n.TRANSACTION_DROPPED_EVENT =
                    n.TRANSACTION_CREATED_EVENT =
                    n.TRANSACTION_CONFIRMED_EVENT =
                    n.TRANSACTION_CANCEL_SUCCESS_EVENT =
                    n.TRANSACTION_CANCEL_ATTEMPTED_EVENT =
                    n.SUBMITTED_STATUS =
                    n.DROPPED_STATUS =
                    n.CONFIRMED_STATUS =
                      void 0);
                (n.TRANSACTION_CREATED_EVENT = "transactionCreated"),
                  (n.TRANSACTION_SUBMITTED_EVENT = "transactionSubmitted"),
                  (n.TRANSACTION_RESUBMITTED_EVENT = "transactionResubmitted"),
                  (n.TRANSACTION_CONFIRMED_EVENT = "transactionConfirmed"),
                  (n.TRANSACTION_DROPPED_EVENT = "transactionDropped"),
                  (n.TRANSACTION_UPDATED_EVENT = "transactionUpdated"),
                  (n.TRANSACTION_ERRORED_EVENT = "transactionErrored"),
                  (n.TRANSACTION_CANCEL_ATTEMPTED_EVENT = "transactionCancelAttempted"),
                  (n.TRANSACTION_CANCEL_SUCCESS_EVENT = "transactionCancelSuccess"),
                  (n.SUBMITTED_STATUS = "submitted"),
                  (n.CONFIRMED_STATUS = "confirmed"),
                  (n.DROPPED_STATUS = "dropped");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.constants.js" }
    ],
    [
      5133,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../selectors": 5958,
        "./transaction-activity-log.component": 5131,
        "./transaction-activity-log.constants": 5132,
        "./transaction-activity-log.util": 5134,
        lodash: 4071,
        "react-redux": 4440
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
                  o = e("lodash"),
                  i = e("../../../selectors"),
                  s = e("../../../ducks/metamask/metamask"),
                  l = (r = e("./transaction-activity-log.component")) && r.__esModule ? r : { default: r },
                  c = e("./transaction-activity-log.util"),
                  u = e("./transaction-activity-log.constants");
                const d =
                  (e) =>
                  ({ eventKey: t }) =>
                    t === e;
                n.default = (0, a.connect)(
                  (e) => ({
                    conversionRate: (0, i.conversionRateSelector)(e),
                    nativeCurrency: (0, s.getNativeCurrency)(e),
                    rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e)
                  }),
                  null,
                  (e, t, n) => {
                    const { transactionGroup: { transactions: r = [], primaryTransaction: a } = {}, ...i } = n,
                      s = (0, c.combineTransactionHistories)(r);
                    return {
                      ...e,
                      ...t,
                      ...i,
                      activities: s,
                      inlineRetryIndex: (0, o.findLastIndex)(s, d(u.TRANSACTION_RESUBMITTED_EVENT)),
                      inlineCancelIndex: (0, o.findLastIndex)(s, d(u.TRANSACTION_CANCEL_ATTEMPTED_EVENT)),
                      primaryTransaction: a
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.container.js" }
    ],
    [
      5134,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../helpers/utils/confirm-tx.util": 5560,
        "./transaction-activity-log.constants": 5132
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.combineTransactionHistories = function (e = []) {
                    if (!e.length) return [];
                    const t = [];
                    e.forEach((e, n) => {
                      const r = h(e, 0 === n);
                      t.push(...r);
                    });
                    return (function (e) {
                      const t = [],
                        n = Boolean(
                          e.find(({ eventKey: e }) => e === i.TRANSACTION_CONFIRMED_EVENT || e === i.TRANSACTION_CANCEL_SUCCESS_EVENT)
                        );
                      let r = !1;
                      return (
                        e.forEach((e) => {
                          e.eventKey === i.TRANSACTION_DROPPED_EVENT ? n || r || (t.push(e), (r = !0)) : t.push(e);
                        }),
                        t
                      );
                    })(t.sort((e, t) => e.timestamp - t.timestamp));
                  }),
                  (n.getActivities = h);
                var r = e("../../../../shared/constants/transaction"),
                  a = e("../../../../shared/modules/conversion.utils"),
                  o = e("../../../helpers/utils/confirm-tx.util"),
                  i = e("./transaction-activity-log.constants");
                const s = "/status",
                  l = "/txParams/gasPrice",
                  c = "/txParams/gas",
                  u = "/estimatedBaseFee",
                  d = "/blockTimestamp",
                  p = "replace",
                  f = { [s]: !0, [l]: !0, [c]: !0, [d]: !0 },
                  m = {
                    [i.SUBMITTED_STATUS]: i.TRANSACTION_SUBMITTED_EVENT,
                    [i.CONFIRMED_STATUS]: i.TRANSACTION_CONFIRMED_EVENT,
                    [i.DROPPED_STATUS]: i.TRANSACTION_DROPPED_EVENT
                  };
                function h(e, t = !1) {
                  const {
                      id: n,
                      chainId: h,
                      hash: y,
                      history: g = [],
                      txParams: { gas: b, gasPrice: v, maxPriorityFeePerGas: T },
                      txReceipt: { status: E } = {},
                      type: w,
                      estimatedBaseFee: O
                    } = e,
                    _ = O && T && (0, a.sumHexes)(O, T);
                  let x = "0x0",
                    k = "0x0";
                  const S = g.reduce((e, g, T) => {
                    if (0 === T && !Array.isArray(g) && g.txParams) {
                      const {
                          time: r,
                          estimatedBaseFee: o,
                          txParams: { value: s, gas: l = "0x0", gasPrice: c, maxPriorityFeePerGas: u } = {}
                        } = g,
                        d = o && u && (0, a.sumHexes)(o, u);
                      if (((x = l), (k = d || c || v || "0x0"), t))
                        return e.concat({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_CREATED_EVENT, timestamp: r, value: s });
                    } else if (Array.isArray(g)) {
                      const t = [];
                      return (
                        g.forEach((a) => {
                          const { op: T, path: E, value: O, timestamp: S } = a,
                            C = S || (g[0] && g[0].timestamp);
                          if ((E in f && T === p) || (E === u && "add" === T))
                            switch (E) {
                              case s: {
                                const e =
                                  "0x0" === x && "0x0" === k
                                    ? (0, o.getHexGasTotal)({ gasLimit: b, gasPrice: _ || v })
                                    : (0, o.getHexGasTotal)({ gasLimit: x, gasPrice: k });
                                if (O in m) {
                                  let a = m[O];
                                  O === i.SUBMITTED_STATUS
                                    ? w === r.TransactionType.retry
                                      ? (a = i.TRANSACTION_RESUBMITTED_EVENT)
                                      : w === r.TransactionType.cancel && (a = i.TRANSACTION_CANCEL_ATTEMPTED_EVENT)
                                    : O === i.CONFIRMED_STATUS &&
                                      w === r.TransactionType.cancel &&
                                      (a = i.TRANSACTION_CANCEL_SUCCESS_EVENT),
                                    t.push({ id: n, hash: y, eventKey: a, timestamp: C, chainId: h, value: e });
                                }
                                break;
                              }
                              case l:
                              case c:
                              case u: {
                                const e = t[t.length - 1] || {},
                                  { lastEventKey: n } = e;
                                if (E === c) x = O;
                                else if (E === l) k = O;
                                else if (E === u) {
                                  var A;
                                  (k = _ || (null == g || null === (A = g.txParams) || void 0 === A ? void 0 : A.gasPrice)),
                                    (e.value = (0, o.getHexGasTotal)({ gasLimit: b, gasPrice: k }));
                                }
                                (n !== i.TRANSACTION_SUBMITTED_EVENT && n !== i.TRANSACTION_RESUBMITTED_EVENT) ||
                                  (e.value = (0, o.getHexGasTotal)({ gasLimit: x, gasPrice: k }));
                                break;
                              }
                              case d: {
                                const t = e.find((e) => e.eventKey === i.TRANSACTION_CONFIRMED_EVENT);
                                t !== undefined && (t.timestamp = new Date(1e3 * parseInt(a.value, 16)).getTime());
                                break;
                              }
                              default:
                                t.push({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_UPDATED_EVENT, timestamp: C });
                            }
                        }),
                        e.concat(t)
                      );
                    }
                    return e;
                  }, []);
                  return "0x0" === E ? S.concat({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_ERRORED_EVENT }) : S;
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.util.js" }
    ],
    [
      5135,
      { "./transaction-alerts": 5136 },
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
                  a = (r = e("./transaction-alerts")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-alerts/index.js" }
    ],
    [
      5136,
      {
        "../../../../shared/constants/gas": 4753,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/lib/metamask-controller-utils": 4773,
        "../../../../shared/modules/security-provider.utils": 4795,
        "../../../../shared/modules/transaction.utils": 4799,
        "../../../contexts/gasFee": 5513,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/simulation-error-message": 5477,
        "../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 5043,
        "../security-provider-banner-message/security-provider-banner-message": 5046,
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
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = _(t);
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
                  a = O(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../../shared/constants/gas"),
                  s = e("../../../selectors"),
                  l = e("../../../contexts/gasFee"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../component-library"),
                  d = O(e("../../ui/simulation-error-message")),
                  p = e("../../../helpers/constants/design-system"),
                  f = O(e("../../../helpers/constants/zendesk-url")),
                  m = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/modules/security-provider.utils"),
                  y = O(e("../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  g = O(e("../security-provider-banner-message/security-provider-banner-message")),
                  b = e("../../../ducks/metamask/metamask"),
                  v = e("../../../../shared/constants/transaction"),
                  T = e("../../../../shared/modules/transaction.utils"),
                  E = e("../../../../shared/lib/metamask-controller-utils"),
                  w = e("../../../../shared/constants/metametrics");
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (_ = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const x = ({ userAcknowledgedGasMissing: e, setUserAcknowledgedGasMissing: t, tokenSymbol: n, txData: a }) => {
                  const { estimateUsed: O, hasSimulationError: _, supportsEIP1559: x, isNetworkBusy: k } = (0, l.useGasFeeContext)(),
                    S = (0, o.useSelector)(s.submittedPendingTransactionsSelector),
                    C = (0, c.useI18nContext)(),
                    A = (0, o.useSelector)(b.getNativeCurrency),
                    N = a.txParams.data,
                    I = n || A;
                  let P;
                  if (
                    (a.type === v.TransactionType.simpleSend && (P = a.txParams.value), a.type === v.TransactionType.tokenMethodTransfer)
                  ) {
                    const e = (0, T.parseStandardTokenTransactionData)(N);
                    P = (0, E.getTokenValueParam)(e);
                  }
                  const M =
                      (a.type === v.TransactionType.simpleSend || a.type === v.TransactionType.tokenMethodTransfer) &&
                      ("0x0" === P || "0" === P),
                    j = (0, r.useContext)(m.MetaMetricsContext),
                    B = (0, r.useCallback)(() => {
                      j({
                        category: w.MetaMetricsEventCategory.Transactions,
                        event: w.MetaMetricsEventName.ExternalLinkClicked,
                        properties: {
                          action: "Confirm Screen",
                          origin: null == a ? void 0 : a.origin,
                          external_link_clicked: "security_alert_support_link"
                        }
                      });
                    }, []);
                  return r.default.createElement(
                    "div",
                    { className: "transaction-alerts" },
                    r.default.createElement(y.default, {
                      onClickSupportLink: B,
                      securityAlertResponse: null == a ? void 0 : a.securityAlertResponse
                    }),
                    (0, h.isSuspiciousResponse)(null == a ? void 0 : a.securityProviderResponse) &&
                      r.default.createElement(g.default, { securityProviderResponse: a.securityProviderResponse }),
                    x && _ && r.default.createElement(d.default, { userAcknowledgedGasMissing: e, setUserAcknowledgedGasMissing: t }),
                    x &&
                      (null == S ? void 0 : S.length) > 0 &&
                      r.default.createElement(
                        u.BannerAlert,
                        { severity: p.SEVERITIES.WARNING },
                        r.default.createElement(
                          u.Text,
                          { as: "p" },
                          r.default.createElement(
                            "strong",
                            null,
                            1 === (null == S ? void 0 : S.length)
                              ? C("pendingTransactionSingle", [null == S ? void 0 : S.length])
                              : C("pendingTransactionMultiple", [null == S ? void 0 : S.length])
                          ),
                          " ",
                          C("pendingTransactionInfo"),
                          C("learnCancelSpeeedup", [
                            r.default.createElement(
                              u.ButtonLink,
                              { key: "cancelSpeedUpInfo", href: f.default.SPEEDUP_CANCEL, rel: "noopener noreferrer", target: "_blank" },
                              C("cancelSpeedUp")
                            )
                          ])
                        )
                      ),
                    O === i.PriorityLevels.low &&
                      r.default.createElement(
                        u.BannerAlert,
                        { "data-testid": "low-gas-fee-alert", severity: p.SEVERITIES.WARNING },
                        C("lowPriorityMessage")
                      ),
                    x && k ? r.default.createElement(u.BannerAlert, { severity: p.SEVERITIES.WARNING }, C("networkIsBusy")) : null,
                    M && r.default.createElement(u.BannerAlert, { severity: p.SEVERITIES.WARNING }, C("sendingZeroAmount", [I]))
                  );
                };
                x.propTypes = {
                  userAcknowledgedGasMissing: a.default.bool,
                  setUserAcknowledgedGasMissing: a.default.func,
                  tokenSymbol: a.default.string,
                  txData: a.default.object
                };
                n.default = x;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-alerts/transaction-alerts.js" }
    ],
    [
      5137,
      { "./transaction-breakdown.container": 5141 },
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
                  a = (r = e("./transaction-breakdown.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/index.js" }
    ],
    [
      5138,
      { "./transaction-breakdown-row.component": 5139 },
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
                  a = (r = e("./transaction-breakdown-row.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown-row/index.js" }
    ],
    [
      5139,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
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
                  s = c(e("prop-types")),
                  l = c(e("classnames"));
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
                class d extends i.PureComponent {
                  render() {
                    const { title: e, children: t, className: n, divider: r = !1 } = this.props;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, l.default)("transaction-breakdown-row", r ? "transaction-breakdown-row--with-bottom-border" : "", n),
                        "data-testid": "transaction-breakdown-row"
                      },
                      i.default.createElement(
                        "div",
                        { className: "transaction-breakdown-row__title", "data-testid": "transaction-breakdown-row-title" },
                        e
                      ),
                      i.default.createElement(
                        "div",
                        { className: "transaction-breakdown-row__value", "data-testid": "transaction-breakdown-row-value" },
                        t
                      )
                    );
                  }
                }
                (n.default = d),
                  (r = d),
                  (a = "propTypes"),
                  (o = { title: s.default.string, children: s.default.node, className: s.default.string, divider: s.default.bool }),
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
      {
        package: "$root$",
        file: "ui/components/app/transaction-breakdown/transaction-breakdown-row/transaction-breakdown-row.component.js"
      }
    ],
    [
      5140,
      {
        "../../../../shared/constants/common": 4751,
        "../../../helpers/constants/common": 5535,
        "../../ui/currency-display": 5393,
        "../../ui/hex-to-decimal": 5412,
        "../user-preferenced-currency-display": 5167,
        "./transaction-breakdown-row": 5138,
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
                  o = p(e("classnames")),
                  i = p(e("../../ui/currency-display")),
                  s = p(e("../user-preferenced-currency-display")),
                  l = p(e("../../ui/hex-to-decimal")),
                  c = e("../../../helpers/constants/common"),
                  u = e("../../../../shared/constants/common"),
                  d = p(e("./transaction-breakdown-row"));
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
                class h extends r.PureComponent {
                  render() {
                    const { t: e } = this.context,
                      {
                        gas: t,
                        gasPrice: n,
                        maxFeePerGas: a,
                        primaryCurrency: p,
                        className: f,
                        nonce: m,
                        nativeCurrency: h,
                        showFiat: y,
                        totalInHex: g,
                        gasUsed: b,
                        isTokenApprove: v,
                        baseFee: T,
                        priorityFee: E,
                        hexGasTotal: w,
                        isEIP1559Transaction: O,
                        isMultiLayerFeeNetwork: _,
                        l1HexGasTotal: x
                      } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("transaction-breakdown", f) },
                      r.default.createElement("div", { className: "transaction-breakdown__title" }, e("transaction")),
                      r.default.createElement(
                        d.default,
                        { divider: !0, title: e("nonce") },
                        void 0 === m ? null : r.default.createElement(l.default, { className: "transaction-breakdown__value", value: m })
                      ),
                      r.default.createElement(
                        d.default,
                        { title: e(v ? "spendingCap" : "amount") },
                        r.default.createElement(
                          "span",
                          {
                            className: "transaction-breakdown__value transaction-breakdown__value--amount",
                            "data-testid": "transaction-breakdown-value-amount"
                          },
                          p
                        )
                      ),
                      r.default.createElement(
                        d.default,
                        {
                          title: _ ? e("transactionHistoryL2GasLimitLabel") : `${e("gasLimit")} (${e("units")})`,
                          className: "transaction-breakdown__row-title"
                        },
                        void 0 === t ? "?" : r.default.createElement(l.default, { className: "transaction-breakdown__value", value: t })
                      ),
                      "string" == typeof b &&
                        r.default.createElement(
                          d.default,
                          { title: `${e("gasUsed")} (${e("units")})`, className: "transaction-breakdown__row-title" },
                          r.default.createElement(l.default, { className: "transaction-breakdown__value", value: b })
                        ),
                      O && void 0 !== T
                        ? r.default.createElement(
                            d.default,
                            { title: e("transactionHistoryBaseFee") },
                            r.default.createElement(i.default, {
                              className: "transaction-breakdown__value",
                              "data-testid": "transaction-breakdown__base-fee",
                              currency: h,
                              denomination: u.EtherDenomination.GWEI,
                              value: T,
                              numberOfDecimals: 10,
                              hideLabel: !0
                            })
                          )
                        : null,
                      O && void 0 !== E
                        ? r.default.createElement(
                            d.default,
                            { title: e("transactionHistoryPriorityFee") },
                            r.default.createElement(i.default, {
                              className: "transaction-breakdown__value",
                              "data-testid": "transaction-breakdown__priority-fee",
                              currency: h,
                              denomination: u.EtherDenomination.GWEI,
                              value: E,
                              numberOfDecimals: 10,
                              hideLabel: !0
                            })
                          )
                        : null,
                      !O &&
                        r.default.createElement(
                          d.default,
                          { title: e(_ ? "transactionHistoryL2GasPriceLabel" : "advancedGasPriceTitle") },
                          void 0 === n
                            ? "?"
                            : r.default.createElement(i.default, {
                                className: "transaction-breakdown__value",
                                "data-testid": "transaction-breakdown__gas-price",
                                currency: h,
                                denomination: u.EtherDenomination.GWEI,
                                value: n,
                                numberOfDecimals: 9,
                                hideLabel: !0
                              })
                        ),
                      O &&
                        r.default.createElement(
                          d.default,
                          { title: e("transactionHistoryTotalGasFee") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            "data-testid": "transaction-breakdown__effective-gas-price",
                            currency: h,
                            denomination: u.EtherDenomination.ETH,
                            numberOfDecimals: 6,
                            value: w,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: w })
                        ),
                      O &&
                        r.default.createElement(
                          d.default,
                          { divider: !0, title: e("transactionHistoryMaxFeePerGas") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            currency: h,
                            denomination: u.EtherDenomination.ETH,
                            numberOfDecimals: 9,
                            value: a,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: a })
                        ),
                      _ &&
                        r.default.createElement(
                          d.default,
                          { title: e("transactionHistoryL1GasLabel") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            "data-testid": "transaction-breakdown__l1-gas-total",
                            numberOfDecimals: 18,
                            value: x,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: x })
                        ),
                      r.default.createElement(
                        d.default,
                        { title: e("total") },
                        r.default.createElement(s.default, {
                          className: "transaction-breakdown__value transaction-breakdown__value--eth-total",
                          type: c.PRIMARY,
                          value: g,
                          numberOfDecimals: _ ? 18 : null
                        }),
                        y && r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: g })
                      )
                    );
                  }
                }
                (n.default = h),
                  m(h, "contextTypes", { t: a.default.func }),
                  m(h, "propTypes", {
                    className: a.default.string,
                    nativeCurrency: a.default.string,
                    showFiat: a.default.bool,
                    nonce: a.default.string,
                    primaryCurrency: a.default.string,
                    isTokenApprove: a.default.bool,
                    gas: a.default.oneOfType([a.default.string, a.default.number]),
                    gasPrice: a.default.oneOfType([a.default.string, a.default.number]),
                    maxFeePerGas: a.default.oneOfType([a.default.string, a.default.number]),
                    gasUsed: a.default.oneOfType([a.default.string, a.default.number]),
                    totalInHex: a.default.oneOfType([a.default.string, a.default.number]),
                    baseFee: a.default.oneOfType([a.default.string, a.default.number]),
                    priorityFee: a.default.oneOfType([a.default.string, a.default.number]),
                    hexGasTotal: a.default.string,
                    isEIP1559Transaction: a.default.bool,
                    isMultiLayerFeeNetwork: a.default.bool,
                    l1HexGasTotal: a.default.string
                  }),
                  m(h, "defaultProps", { showFiat: !0 });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown.component.js" }
    ],
    [
      5141,
      {
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/transaction.utils": 4799,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/utils/confirm-tx.util": 5560,
        "../../../selectors": 5958,
        "./transaction-breakdown.component": 5140,
        "react-redux": 4440
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
                  o = e("../../../selectors"),
                  i = e("../../../ducks/metamask/metamask"),
                  s = e("../../../helpers/utils/confirm-tx.util"),
                  l = e("../../../../shared/modules/transaction.utils"),
                  c = e("../../../../shared/modules/conversion.utils"),
                  u = (r = e("./transaction-breakdown.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)((e, t) => {
                  const { transaction: n, isTokenApprove: r } = t,
                    {
                      txParams: { gas: a, gasPrice: u, maxFeePerGas: d, value: p } = {},
                      txReceipt: { gasUsed: f, effectiveGasPrice: m, l1Fee: h } = {},
                      baseFeePerGas: y
                    } = n,
                    g = "string" == typeof f ? f : a,
                    b = m && y && (0, c.subtractHexes)(m, y),
                    v = u || m,
                    T = (g && v && (0, s.getHexGasTotal)({ gasLimit: g, gasPrice: v })) || "0x0";
                  let E = (0, c.sumHexes)(T, p);
                  const w = (0, o.getIsMultiLayerFeeNetwork)(e) && h !== undefined;
                  return (
                    w && (E = (0, c.sumHexes)(E, h)),
                    {
                      nativeCurrency: (0, i.getNativeCurrency)(e),
                      showFiat: (0, o.getShouldShowFiat)(e),
                      totalInHex: E,
                      gas: a,
                      gasPrice: u,
                      maxFeePerGas: d,
                      gasUsed: f,
                      isTokenApprove: r,
                      hexGasTotal: T,
                      priorityFee: b,
                      baseFee: y,
                      isEIP1559Transaction: (0, l.isEIP1559Transaction)(n),
                      isMultiLayerFeeNetwork: w,
                      l1HexGasTotal: h
                    }
                  );
                })(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown.container.js" }
    ],
    [
      5142,
      {
        "../../../../../../../shared/constants/copy": 4752,
        "../../../../../../helpers/utils/util": 5578,
        "../../../../../../hooks/useI18nContext": 5602,
        "../../../../../../selectors": 5958,
        "../../../../../ui/identicon": 5430,
        "../../../../modals/nickname-popovers": 4985,
        "copy-to-clipboard": 3004,
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
                  a = e("react-redux"),
                  o = f(e("prop-types")),
                  i = f(e("copy-to-clipboard")),
                  s = e("../../../../../../helpers/utils/util"),
                  l = f(e("../../../../../ui/identicon")),
                  c = e("../../../../../../hooks/useI18nContext"),
                  u = e("../../../../../../selectors"),
                  d = f(e("../../../../modals/nickname-popovers")),
                  p = e("../../../../../../../shared/constants/copy");
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
                const h = ({ checksummedRecipientAddress: e, onRecipientClick: t, addressOnly: n, recipientEns: o, recipientName: f }) => {
                  const m = (0, c.useI18nContext)(),
                    [h, y] = (0, r.useState)(!1),
                    g = (0, a.useSelector)(u.getMemoizedAddressBook).find((t) => t.address.toLowerCase() === e.toLowerCase()),
                    b = null == g ? void 0 : g.name,
                    v = (0, a.useSelector)((t) => (0, u.getMemoizedMetadataContractName)(t, e)),
                    T = n ? f || b || v || o || (0, s.shortenAddress)(e) : f || b || v || o || m("newContract");
                  return r.default.createElement(
                    "div",
                    {
                      className: "tx-insight tx-insight-component tx-insight-component-address",
                      onClick: () => {
                        (0, i.default)(e, p.COPY_OPTIONS), t && t();
                      }
                    },
                    r.default.createElement(
                      "div",
                      { className: "tx-insight-component-address__sender-icon" },
                      r.default.createElement(l.default, { address: e, diameter: 18 })
                    ),
                    r.default.createElement("div", { className: "tx-insight-component-address__name", onClick: () => y(!0) }, T),
                    h ? r.default.createElement(d.default, { onClose: () => y(!1), address: e }) : null
                  );
                };
                h.propTypes = {
                  checksummedRecipientAddress: o.default.string,
                  recipientName: o.default.string,
                  recipientEns: o.default.string,
                  addressOnly: o.default.bool,
                  onRecipientClick: o.default.func
                };
                n.default = h;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/decoding/address/address.component.js" }
    ],
    [
      5143,
      { "./address.component": 5142 },
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
                  a = (r = e("./address.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/decoding/address/index.js" }
    ],
    [
      5144,
      {
        "../../../../../../contexts/i18n": 5514,
        "../../../../../../helpers/constants/design-system": 5537,
        "../../../../../../selectors": 5958,
        "../../../../../component-library": 5242,
        "@metamask/etherscan-link": 1370,
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
                var r,
                  a = (function (e, t) {
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
                  o = e("react-redux"),
                  i = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  s = e("@metamask/etherscan-link"),
                  l = e("../../../../../../selectors"),
                  c = e("../../../../../../contexts/i18n"),
                  u = e("../../../../../component-library"),
                  d = e("../../../../../../helpers/constants/design-system");
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = ({ fetchVia: e, address: t }) => {
                  const n = (0, a.useContext)(c.I18nContext),
                    r = (0, o.useSelector)(l.getCurrentChainId),
                    i = (0, o.useSelector)(l.getRpcPrefsForCurrentProvider),
                    p = (0, s.getAccountLink)(t, r, i);
                  return a.default.createElement(
                    u.Box,
                    { className: "accreditation", marginTop: 2, alignItems: d.AlignItems.center, display: d.Display.Flex },
                    a.default.createElement(u.Icon, { name: u.IconName.Info, marginRight: 2 }),
                    a.default.createElement(
                      u.Box,
                      { display: d.Display.Flex, flexDirection: d.FlexDirection.Column, flexWrap: d.FlexWrap.Wrap },
                      a.default.createElement(
                        u.Text,
                        { variant: d.TextVariant.bodySm },
                        n("transactionDecodingAccreditationVerified", [
                          a.default.createElement(
                            u.Button,
                            {
                              variant: u.BUTTON_VARIANT.LINK,
                              href: p,
                              externalLink: !0,
                              key: "accreditation-link-button",
                              size: u.BUTTON_SIZES.INHERIT
                            },
                            e
                          )
                        ])
                      ),
                      a.default.createElement(u.Text, { variant: d.TextVariant.bodySm }, n("transactionDecodingAccreditationDecoded"))
                    )
                  );
                };
                f.propTypes = { fetchVia: i.default.string.isRequired, address: i.default.string.isRequired };
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/accreditation/accreditation.component.js" }
    ],
    [
      5145,
      { "./accreditation.component": 5144 },
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
                  a = (r = e("./accreditation.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/accreditation/index.js" }
    ],
    [
      5146,
      {
        "../../../../../../contexts/i18n": 5514,
        "../../../../../../helpers/constants/design-system": 5537,
        "../../../../../../hooks/useCopyToClipboard": 5595,
        "../../../../../component-library": 5242,
        "../../../../../ui/tooltip/tooltip": 5503,
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
                  a = u(e("prop-types")),
                  o = u(e("../../../../../ui/tooltip/tooltip")),
                  i = e("../../../../../../contexts/i18n"),
                  s = e("../../../../../../hooks/useCopyToClipboard"),
                  l = e("../../../../../component-library"),
                  c = e("../../../../../../helpers/constants/design-system");
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
                const p = ({ data: e }) => {
                  const t = (0, r.useContext)(i.I18nContext),
                    [n, a] = (0, s.useCopyToClipboard)();
                  return r.default.createElement(
                    "div",
                    { className: "copy-raw-data" },
                    r.default.createElement(
                      o.default,
                      { position: "right", title: n ? t("copiedExclamation") : "" },
                      r.default.createElement(
                        "button",
                        {
                          onClick: () => {
                            a(e);
                          },
                          className: "copy-raw-data__button"
                        },
                        r.default.createElement(
                          "div",
                          { className: "copy-raw-data__icon" },
                          r.default.createElement(l.Icon, {
                            name: n ? l.IconName.CopySuccess : l.IconName.Copy,
                            color: c.IconColor.iconDefault
                          })
                        ),
                        r.default.createElement("div", { className: "copy-raw-data__label" }, t("copyRawTransactionData"))
                      )
                    )
                  );
                };
                p.propTypes = { data: a.default.string.isRequired };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/copy-raw-data/copy-raw-data.component.js" }
    ],
    [
      5147,
      { "./copy-raw-data.component": 5146 },
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
                  a = (r = e("./copy-raw-data.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/copy-raw-data/index.js" }
    ],
    [
      5148,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.FETCH_SUPPORTED_NETWORKS_URI = n.FETCH_PROJECT_INFO_URI = void 0);
                const r = "https://tx-insights.metaswap.codefi.network";
                (n.FETCH_PROJECT_INFO_URI = `${r}/fetch-project`), (n.FETCH_SUPPORTED_NETWORKS_URI = `${r}/networks`);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/constants.js" }
    ],
    [
      5149,
      { "./transaction-decoding.component": 5150 },
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
                  a = (r = e("./transaction-decoding.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/index.js" }
    ],
    [
      5150,
      {
        "../../../../shared/lib/fetch-with-cache": 4772,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../contexts/i18n": 5514,
        "../../../selectors": 5958,
        "../../ui/error-message": 5405,
        "../../ui/spinner": 5483,
        "./components/decoding/address": 5143,
        "./components/ui/accreditation": 5145,
        "./components/ui/copy-raw-data": 5147,
        "./constants": 5148,
        "./transaction-decoding.util": 5151,
        "@truffle/codec": 2453,
        "@truffle/decoder": 2501,
        "browser-util-inspect": 2865,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = _);
                var r = O(e("react")),
                  a = E(e("prop-types")),
                  o = E(e("browser-util-inspect")),
                  i = e("@truffle/decoder"),
                  s = e("react-redux"),
                  l = O(e("@truffle/codec")),
                  c = E(e("../../ui/spinner")),
                  u = E(e("../../ui/error-message")),
                  d = E(e("../../../../shared/lib/fetch-with-cache")),
                  p = e("../../../selectors"),
                  f = e("../../../contexts/i18n"),
                  m = e("../../../../shared/modules/hexstring-utils"),
                  h = e("../../../../shared/modules/conversion.utils"),
                  y = e("./transaction-decoding.util"),
                  g = e("./constants"),
                  b = E(e("./components/decoding/address")),
                  v = E(e("./components/ui/copy-raw-data")),
                  T = E(e("./components/ui/accreditation"));
                function E(e) {
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
                function O(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = w(t);
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
                function _({ to: e = "", inputData: t = "" }) {
                  const n = (0, r.useContext)(f.I18nContext),
                    [a, E] = (0, r.useState)([]),
                    [w, O] = (0, r.useState)(""),
                    [_, x] = (0, r.useState)(""),
                    { address: k } = (0, s.useSelector)(p.getSelectedAccount),
                    S = (0, h.hexToDecimal)((0, s.useSelector)(p.getCurrentChainId)),
                    [C, A] = (0, r.useState)(!1),
                    [N, I] = (0, r.useState)(!1),
                    [P, M] = (0, r.useState)("");
                  (0, r.useEffect)(() => {
                    (async () => {
                      A(!0);
                      try {
                        if (
                          !(
                            await (0, d.default)({
                              url: g.FETCH_SUPPORTED_NETWORKS_URI,
                              fetchOptions: { method: "GET" },
                              functionName: "fetchSupportedNetworks"
                            })
                          ).some((e) => e.active && Number(e.chainId) === Number(S))
                        )
                          throw new Error(n("transactionDecodingUnsupportedNetworkError", [S]));
                        const r = `${g.FETCH_PROJECT_INFO_URI}?${new URLSearchParams({ to: e, "network-id": S })}`,
                          a = await (0, d.default)({ url: r, fetchOptions: { method: "GET" }, functionName: "fetchProject" }),
                          { info: o, fetchedVia: s, address: l } = a;
                        l && O(l), s && x(s);
                        const c = await (0, i.forAddress)(e, { provider: global.ethereumProvider, projectInfo: o }),
                          u = await c.decodeTransaction({ from: k, to: e, input: t, blockNumber: null }),
                          p = (0, y.transformTxDecoding)(null == u ? void 0 : u.arguments);
                        E(p), A(!1);
                      } catch (e) {
                        A(!1),
                          I(!0),
                          null != e && e.message.match("400") ? M(n("txInsightsNotSupported")) : M(null == e ? void 0 : e.message);
                      }
                    })();
                  }, [n, k, e, S, t]);
                  const j = ({ name: e, kind: t, typeClass: a, value: i }) => {
                      if ("error" === t)
                        return r.default.createElement(
                          "span",
                          { className: "sol-item solidity-error" },
                          r.default.createElement("span", null, n("malformedData"))
                        );
                      switch (a) {
                        case "int":
                          return r.default.createElement("span", { className: "sol-item solidity-int" }, [i.asBN || i.asString].toString());
                        case "uint":
                          return r.default.createElement(
                            "span",
                            { className: "sol-item solidity-uint" },
                            [i.asBN || i.asString].toString()
                          );
                        case "bool":
                          return r.default.createElement("span", { className: "sol-item" }, String(i.asBoolean));
                        case "bytes":
                          return r.default.createElement("span", { className: "sol-item solidity-bytes" }, i.asHex);
                        case "string":
                          return r.default.createElement("span", { className: "sol-item solidity-string" }, i.asString);
                        case "array":
                          return r.default.createElement(
                            "details",
                            null,
                            r.default.createElement("summary", { className: "typography--color-black" }, e, ": "),
                            r.default.createElement(
                              "ol",
                              null,
                              i.map((e, t) => {
                                var n, a;
                                return r.default.createElement(
                                  "li",
                                  { key: `${null === (n = e.type) || void 0 === n ? void 0 : n.typeClass}-${t}` },
                                  j({
                                    typeClass: null === (a = e.type) || void 0 === a ? void 0 : a.typeClass,
                                    value: e.value,
                                    kind: e.kind
                                  })
                                );
                              })
                            )
                          );
                        case "address": {
                          const e = null == i ? void 0 : i.asAddress;
                          return r.default.createElement(b.default, {
                            addressOnly: !0,
                            checksummedRecipientAddress: (0, m.toChecksumHexAddress)(e)
                          });
                        }
                        default:
                          return r.default.createElement(
                            "pre",
                            { className: "sol-item solidity-raw" },
                            (0, o.default)(new l.Format.Utils.Inspect.ResultInspector(i))
                          );
                      }
                    },
                    B = ({ name: e, kind: t, typeClass: n, type: a, value: o, children: i }, s) =>
                      i
                        ? r.default.createElement(
                            "li",
                            { key: `${n}-${s}` },
                            r.default.createElement(
                              "details",
                              { open: 0 === s ? "open" : "" },
                              r.default.createElement("summary", null, e, ": "),
                              r.default.createElement("ol", null, i.map(B))
                            )
                          )
                        : r.default.createElement(
                            "li",
                            { className: "solidity-value", key: `solidity-value-${s}` },
                            r.default.createElement(
                              "div",
                              { className: "solidity-named-item solidity-item" },
                              "array" === n || Array.isArray(o)
                                ? null
                                : r.default.createElement("span", { className: "param-name typography--color-black" }, e, ": "),
                              r.default.createElement(
                                "span",
                                { className: "sol-item solidity-uint" },
                                j({ name: e, typeClass: n, type: a, value: o, kind: t })
                              )
                            )
                          );
                  return r.default.createElement(
                    "div",
                    { className: "tx-insight" },
                    C
                      ? r.default.createElement(
                          "div",
                          { className: "tx-insight-loading" },
                          r.default.createElement(c.default, { color: "var(--color-warning-default)" })
                        )
                      : N
                      ? r.default.createElement(
                          "div",
                          { className: "tx-insight-error" },
                          r.default.createElement(u.default, { errorMessage: P })
                        )
                      : r.default.createElement(
                          "div",
                          { className: "tx-insight-content" },
                          r.default.createElement(
                            "div",
                            { className: "tx-insight-content__tree-component" },
                            r.default.createElement("ol", null, a.map(B))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "tx-insight-content__copy-raw-tx" },
                            r.default.createElement(v.default, { data: t })
                          ),
                          _ && w
                            ? r.default.createElement(
                                "div",
                                { className: "tx-insight-content__accreditation" },
                                r.default.createElement(T.default, { address: w, fetchVia: _ })
                              )
                            : null
                        )
                  );
                }
                _.propTypes = { to: a.default.string, inputData: a.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/transaction-decoding.component.js" }
    ],
    [
      5151,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.transformTxDecoding = void 0);
                const r = (e) =>
                  e.map((e) => {
                    const t = e.name,
                      n = e.value,
                      a = n.kind,
                      o = n.type.typeClass,
                      i = { name: t, kind: a, typeClass: o, type: n.type };
                    return "struct" === o ? { ...i, children: r(n.value) } : { ...i, value: n.value ? n.value : n };
                  });
                n.transformTxDecoding = r;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/transaction-decoding.util.js" }
    ],
    [
      5152,
      { "./transaction-detail-item.component": 5153 },
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
                  a = (r = e("./transaction-detail-item.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail-item/index.js" }
    ],
    [
      5153,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({
                  "data-testid": e,
                  detailTitle: t = "",
                  detailText: n,
                  detailTitleColor: a = i.Color.textDefault,
                  detailTotal: l = "",
                  subTitle: c = "",
                  subText: u = "",
                  boldHeadings: d = !0,
                  flexWidthValues: p = !1
                }) {
                  return r.default.createElement(
                    "div",
                    { className: "transaction-detail-item", "data-testid": e },
                    r.default.createElement(
                      "div",
                      { className: "transaction-detail-item__row" },
                      r.default.createElement(
                        s.Text,
                        {
                          as: "h6",
                          color: a,
                          fontWeight: d ? i.FontWeight.Bold : i.FontWeight.Normal,
                          display: i.Display.Flex,
                          flexWrap: i.FlexWrap.NoWrap,
                          alignItems: i.AlignItems.center
                        },
                        t
                      ),
                      r.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("transaction-detail-item__detail-values", {
                            "transaction-detail-item__detail-values--flex-width": p
                          })
                        },
                        n && r.default.createElement(s.Text, { as: "h6", color: i.Color.textAlternative }, n),
                        r.default.createElement(
                          s.Text,
                          {
                            as: "h6",
                            color: i.Color.textDefault,
                            fontWeight: d ? i.FontWeight.Bold : i.FontWeight.Normal,
                            marginLeft: 1,
                            textAlign: i.TextAlign.Right
                          },
                          l
                        )
                      )
                    ),
                    r.default.createElement(
                      "div",
                      { className: "transaction-detail-item__row" },
                      r.default.isValidElement(c)
                        ? r.default.createElement("div", null, c)
                        : r.default.createElement(s.Text, { as: "h6", variant: i.TextVariant.bodySm, color: i.Color.textAlternative }, c),
                      r.default.createElement(
                        s.Text,
                        {
                          as: "h6",
                          variant: i.TextVariant.bodySm,
                          color: i.Color.textAlternative,
                          textAlign: i.TextAlign.End,
                          className: "transaction-detail-item__row-subText"
                        },
                        u
                      )
                    )
                  );
                }
                c.propTypes = {
                  "data-testid": a.default.string,
                  detailTitle: a.default.oneOfType([a.default.string, a.default.node]),
                  detailTitleColor: a.default.string,
                  detailText: a.default.oneOfType([a.default.string, a.default.node]),
                  detailTotal: a.default.oneOfType([a.default.string, a.default.node]),
                  subTitle: a.default.oneOfType([a.default.string, a.default.node]),
                  subText: a.default.oneOfType([a.default.string, a.default.node]),
                  boldHeadings: a.default.bool,
                  flexWidthValues: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail-item/transaction-detail-item.component.js" }
    ],
    [
      5154,
      { "./transaction-detail.component": 5155 },
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
                  a = (r = e("./transaction-detail.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail/index.js" }
    ],
    [
      5155,
      {
        "../../../contexts/gasFee": 5513,
        "../../../hooks/useI18nContext": 5602,
        "../../ui/box": 5373,
        "../edit-gas-fee-button": 4908,
        "../transaction-detail-item/transaction-detail-item.component": 5153,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = e("../../../contexts/gasFee"),
                  i = e("../../../hooks/useI18nContext"),
                  s = u(e("../../ui/box")),
                  l = u(e("../edit-gas-fee-button")),
                  c = u(e("../transaction-detail-item/transaction-detail-item.component"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d({ rows: e = [], onEdit: t, userAcknowledgedGasMissing: n = !1, disableEditGasFeeButton: a = !1 }) {
                  const c = (0, i.useI18nContext)(),
                    { supportsEIP1559: u } = (0, o.useGasFeeContext)();
                  return r.default.createElement(
                    "div",
                    { className: "transaction-detail" },
                    u &&
                      !a &&
                      r.default.createElement(
                        s.default,
                        { display: "flex", justifyContent: "flex-end", paddingTop: 5 },
                        r.default.createElement(l.default, { userAcknowledgedGasMissing: n })
                      ),
                    !u &&
                      t &&
                      r.default.createElement(
                        "div",
                        { className: "transaction-detail-edit" },
                        r.default.createElement("button", { onClick: t }, c("edit"))
                      ),
                    r.default.createElement("div", { className: "transaction-detail-rows" }, e)
                  );
                }
                d.propTypes = {
                  rows: a.default.arrayOf(c.default).isRequired,
                  onEdit: a.default.func,
                  userAcknowledgedGasMissing: a.default.bool,
                  disableEditGasFeeButton: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail/transaction-detail.component.js" }
    ],
    [
      5156,
      { "./transaction-icon": 5157 },
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
                  a = (r = e("./transaction-icon")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-icon/index.js" }
    ],
    [
      5157,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../helpers/constants/design-system": 5537,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = u(e("react")),
                  a = e("react-redux"),
                  o = u(e("prop-types")),
                  i = e("../../../../shared/constants/transaction"),
                  s = e("../../../store/actions"),
                  l = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = {
                    [i.TransactionGroupCategory.approval]: l.IconName.Check,
                    [i.TransactionGroupCategory.interaction]: l.IconName.ProgrammingArrows,
                    [i.TransactionGroupCategory.receive]: l.IconName.Received,
                    [i.TransactionGroupCategory.send]: l.IconName.Arrow2UpRight,
                    [i.TransactionGroupCategory.signatureRequest]: l.IconName.SecurityTick,
                    [i.TransactionGroupCategory.swap]: l.IconName.SwapHorizontal
                  },
                  p = {
                    [i.TransactionGroupStatus.pending]: c.IconColor.primaryDefault,
                    [i.TransactionGroupStatus.cancelled]: c.IconColor.errorDefault,
                    [i.TransactionStatus.approved]: c.IconColor.primaryDefault,
                    [i.TransactionStatus.dropped]: c.IconColor.errorDefault,
                    [i.TransactionStatus.failed]: c.IconColor.errorDefault,
                    [i.TransactionStatus.rejected]: c.IconColor.errorDefault,
                    [i.TransactionStatus.submitted]: c.IconColor.primaryDefault,
                    [i.TransactionStatus.unapproved]: c.IconColor.primaryDefault
                  },
                  f = {
                    [i.TransactionGroupStatus.pending]: c.BackgroundColor.primaryMuted,
                    [i.TransactionGroupStatus.cancelled]: c.BackgroundColor.errorMuted,
                    [i.TransactionStatus.approved]: c.BackgroundColor.primaryMuted,
                    [i.TransactionStatus.dropped]: c.BackgroundColor.errorMuted,
                    [i.TransactionStatus.failed]: c.BackgroundColor.errorMuted,
                    [i.TransactionStatus.rejected]: c.BackgroundColor.errorMuted,
                    [i.TransactionStatus.submitted]: c.BackgroundColor.primaryMuted,
                    [i.TransactionStatus.unapproved]: c.BackgroundColor.primaryMuted
                  };
                function m({ status: e, category: t }) {
                  const n = (0, a.useDispatch)(),
                    o = p[e] || c.IconColor.primaryDefault,
                    i = f[e] || c.BackgroundColor.primaryMuted,
                    u = d[t];
                  return u
                    ? r.default.createElement(l.AvatarIcon, { backgroundColor: i, iconName: u, size: l.AvatarIconSize.Md, color: o })
                    : (n((0, s.captureSingleException)(`The category prop passed to TransactionIcon is not supported. The prop is: ${t}`)),
                      r.default.createElement(l.AvatarIcon, {
                        backgroundColor: c.BackgroundColor.backgroundAlternative,
                        size: l.AvatarIconSize.Md
                      }));
                }
                m.propTypes = {
                  status: o.default.oneOf([
                    i.TransactionGroupStatus.cancelled,
                    i.TransactionGroupStatus.pending,
                    i.TransactionStatus.approved,
                    i.TransactionStatus.confirmed,
                    i.TransactionStatus.dropped,
                    i.TransactionStatus.failed,
                    i.TransactionStatus.rejected,
                    i.TransactionStatus.submitted,
                    i.TransactionStatus.unapproved
                  ]).isRequired,
                  category: o.default.oneOf([
                    i.TransactionGroupCategory.approval,
                    i.TransactionGroupCategory.interaction,
                    i.TransactionGroupCategory.receive,
                    i.TransactionGroupCategory.send,
                    i.TransactionGroupCategory.signatureRequest,
                    i.TransactionGroupCategory.swap
                  ]).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-icon/transaction-icon.js" }
    ],
    [
      5158,
      { "./transaction-list-item-details.container": 5160 },
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
                  a = (r = e("./transaction-list-item-details.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/index.js" }
    ],
    [
      5159,
      {
        "../../../../shared/constants/copy": 4752,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/time": 4768,
        "../../../../shared/constants/transaction": 4770,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../component-library": 5242,
        "../../ui/button": 5377,
        "../../ui/disclosure": 5400,
        "../../ui/popover": 5465,
        "../../ui/sender-to-recipient": 5472,
        "../../ui/sender-to-recipient/sender-to-recipient.constants": 5474,
        "../../ui/tooltip": 5502,
        "../cancel-button": 4839,
        "../confirm-data/transaction-insights-deprecation-alert": 4846,
        "../transaction-activity-log": 5128,
        "../transaction-breakdown": 5137,
        "../transaction-decoding": 5149,
        "@metamask/etherscan-link": 1370,
        "copy-to-clipboard": 3004,
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
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = k(t);
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
                  a = x(e("prop-types")),
                  o = x(e("copy-to-clipboard")),
                  i = e("@metamask/etherscan-link"),
                  s = x(e("../../ui/sender-to-recipient")),
                  l = e("../../ui/sender-to-recipient/sender-to-recipient.constants"),
                  c = x(e("../../ui/disclosure")),
                  u = x(e("../transaction-activity-log")),
                  d = x(e("../transaction-breakdown")),
                  p = x(e("../../ui/button")),
                  f = x(e("../../ui/tooltip")),
                  m = x(e("../cancel-button")),
                  h = x(e("../../ui/popover")),
                  y = e("../../component-library"),
                  g = e("../../../../shared/constants/time"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = e("../../../../shared/constants/transaction"),
                  T = e("../../../helpers/utils/util"),
                  E = x(e("../transaction-decoding")),
                  w = e("../../../helpers/constants/routes"),
                  O = x(e("../confirm-data/transaction-insights-deprecation-alert")),
                  _ = e("../../../../shared/constants/copy");
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (k = function (e) {
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
                class C extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      S(this, "state", { justCopied: !1 }),
                      S(this, "handleBlockExplorerClick", () => {
                        const {
                            transactionGroup: { primaryTransaction: e },
                            rpcPrefs: t,
                            isCustomNetwork: n,
                            history: r,
                            onClose: a
                          } = this.props,
                          o = (0, i.getBlockExplorerLink)(e, t);
                        !t.blockExplorerUrl && n
                          ? (a(), r.push(`${w.NETWORKS_ROUTE}#blockExplorerUrl`))
                          : (this.context.trackEvent({
                              category: b.MetaMetricsEventCategory.Transactions,
                              event: "Clicked Block Explorer Link",
                              properties: {
                                link_type: "Transaction Block Explorer",
                                action: "Transaction Details",
                                block_explorer_domain: (0, T.getURLHostName)(o)
                              }
                            }),
                            global.platform.openTab({ url: o }));
                      }),
                      S(this, "handleCancel", (e) => {
                        const { onCancel: t, onClose: n } = this.props;
                        t(e), n();
                      }),
                      S(this, "handleRetry", (e) => {
                        const { onClose: t, onRetry: n } = this.props;
                        n(e), t();
                      }),
                      S(this, "handleCopyTxId", () => {
                        const { transactionGroup: e } = this.props,
                          { primaryTransaction: t } = e,
                          { hash: n } = t;
                        this.context.trackEvent({
                          category: b.MetaMetricsEventCategory.Navigation,
                          event: "Copied Transaction ID",
                          properties: { action: "Activity Log", legacy_event: !0 }
                        }),
                          this.setState({ justCopied: !0 }, () => {
                            (0, o.default)(n, _.COPY_OPTIONS), setTimeout(() => this.setState({ justCopied: !1 }), g.SECOND);
                          });
                      });
                  }
                  componentDidMount() {
                    const { recipientAddress: e, tryReverseResolveAddress: t } = this.props;
                    e && t(e);
                  }
                  render() {
                    var e, t, n;
                    const { t: a } = this.context,
                      { justCopied: o } = this.state,
                      {
                        transactionGroup: i,
                        primaryCurrency: g,
                        showSpeedUp: T,
                        showRetry: w,
                        recipientEns: _,
                        recipientAddress: x,
                        recipientName: k,
                        recipientMetadataName: S,
                        senderAddress: C,
                        isEarliestNonce: A,
                        senderNickname: N,
                        title: I,
                        onClose: P,
                        recipientNickname: M,
                        showCancel: j,
                        transactionStatus: B,
                        blockExplorerLinkText: R
                      } = this.props,
                      {
                        primaryTransaction: D,
                        initialTransaction: { type: L }
                      } = i,
                      { hash: F } = D;
                    return r.default.createElement(
                      h.default,
                      { title: I, onClose: P },
                      r.default.createElement(
                        "div",
                        { className: "transaction-list-item-details" },
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__operations" },
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__header-buttons" },
                            T &&
                              r.default.createElement(
                                p.default,
                                {
                                  type: "primary",
                                  onClick: this.handleRetry,
                                  className: "transaction-list-item-details__header-button-rounded-button",
                                  "data-testid": "speedup-button"
                                },
                                a("speedUp")
                              ),
                            j &&
                              r.default.createElement(m.default, {
                                transaction: D,
                                cancelTransaction: this.handleCancel,
                                detailsModal: !0
                              }),
                            w &&
                              r.default.createElement(
                                f.default,
                                { title: a("retryTransaction") },
                                r.default.createElement(
                                  p.default,
                                  {
                                    type: "raised",
                                    onClick: this.handleRetry,
                                    className: "transaction-list-item-details__header-button",
                                    "data-testid": "rety-button"
                                  },
                                  r.default.createElement("i", { className: "fa fa-sync" })
                                )
                              )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__header" },
                          r.default.createElement(
                            "div",
                            {
                              className: "transaction-list-item-details__tx-status",
                              "data-testid": "transaction-list-item-details-tx-status"
                            },
                            r.default.createElement("div", null, a("status")),
                            r.default.createElement("div", null, r.default.createElement(B, null))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__tx-hash" },
                            r.default.createElement(
                              "div",
                              null,
                              r.default.createElement(
                                p.default,
                                { type: "link", onClick: this.handleBlockExplorerClick, disabled: !F },
                                "addBlockExplorer" === R.firstPart ? a("addBlockExplorer") : a("viewOnBlockExplorer")
                              )
                            ),
                            r.default.createElement(
                              "div",
                              null,
                              r.default.createElement(
                                f.default,
                                {
                                  wrapperClassName: "transaction-list-item-details__header-button",
                                  containerClassName: "transaction-list-item-details__header-button-tooltip-container",
                                  title: o ? a("copiedExclamation") : null
                                },
                                r.default.createElement(
                                  p.default,
                                  { type: "link", onClick: this.handleCopyTxId, disabled: !F },
                                  a("copyTransactionId")
                                )
                              )
                            )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__body" },
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__sender-to-recipient-header" },
                            r.default.createElement("div", null, a("from")),
                            r.default.createElement("div", null, a("to"))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__sender-to-recipient-container" },
                            r.default.createElement(s.default, {
                              warnUserOnAccountMismatch: !1,
                              variant: l.DEFAULT_VARIANT,
                              addressOnly: !0,
                              recipientEns: _,
                              recipientAddress: x,
                              recipientNickname: M,
                              recipientName: k,
                              recipientMetadataName: S,
                              senderName: N,
                              senderAddress: C,
                              onRecipientClick: () => {
                                this.context.trackEvent({
                                  category: b.MetaMetricsEventCategory.Navigation,
                                  event: 'Copied "To" Address',
                                  properties: { action: "Activity Log", legacy_event: !0 }
                                });
                              },
                              onSenderClick: () => {
                                this.context.trackEvent({
                                  category: b.MetaMetricsEventCategory.Navigation,
                                  event: 'Copied "From" Address',
                                  properties: { action: "Activity Log", legacy_event: !0 }
                                });
                              }
                            })
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__cards-container" },
                            r.default.createElement(d.default, {
                              nonce: i.initialTransaction.txParams.nonce,
                              isTokenApprove:
                                L === v.TransactionType.tokenMethodApprove || L === v.TransactionType.tokenMethodSetApprovalForAll,
                              transaction: D,
                              primaryCurrency: g,
                              className: "transaction-list-item-details__transaction-breakdown"
                            }),
                            i.initialTransaction.type !== v.TransactionType.incoming &&
                              r.default.createElement(
                                c.default,
                                { title: a("activityLog"), size: "small" },
                                r.default.createElement(u.default, {
                                  transactionGroup: i,
                                  className: "transaction-list-item-details__transaction-activity-log",
                                  onCancel: this.handleCancel,
                                  onRetry: this.handleRetry,
                                  isEarliestNonce: A
                                })
                              ),
                            null !== (e = i.initialTransaction) && void 0 !== e && null !== (e = e.txParams) && void 0 !== e && e.data
                              ? r.default.createElement(
                                  c.default,
                                  { title: "Transaction data", size: "small" },
                                  r.default.createElement(y.Box, { marginBottom: 2 }, r.default.createElement(O.default, null)),
                                  r.default.createElement(E.default, {
                                    title: a("transactionData"),
                                    to: null === (t = i.initialTransaction.txParams) || void 0 === t ? void 0 : t.to,
                                    inputData: null === (n = i.initialTransaction.txParams) || void 0 === n ? void 0 : n.data
                                  })
                                )
                              : null
                          )
                        )
                      )
                    );
                  }
                }
                (n.default = C),
                  S(C, "contextTypes", { t: a.default.func, trackEvent: a.default.func }),
                  S(C, "defaultProps", { recipientEns: null }),
                  S(C, "propTypes", {
                    onCancel: a.default.func,
                    onRetry: a.default.func,
                    showCancel: a.default.bool,
                    showSpeedUp: a.default.bool,
                    showRetry: a.default.bool,
                    isEarliestNonce: a.default.bool,
                    primaryCurrency: a.default.string,
                    transactionGroup: a.default.object,
                    title: a.default.string.isRequired,
                    onClose: a.default.func.isRequired,
                    recipientEns: a.default.string,
                    recipientAddress: a.default.string,
                    recipientName: a.default.string,
                    recipientMetadataName: a.default.string,
                    rpcPrefs: a.default.object,
                    senderAddress: a.default.string.isRequired,
                    tryReverseResolveAddress: a.default.func.isRequired,
                    senderNickname: a.default.string.isRequired,
                    recipientNickname: a.default.string,
                    transactionStatus: a.default.func,
                    isCustomNetwork: a.default.bool,
                    history: a.default.object,
                    blockExplorerLinkText: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/transaction-list-item-details.component.js" }
    ],
    [
      516,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.version = void 0), (n.version = "solidity/5.7.0");
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/solidity",
        file: "node_modules/@ethersproject/solidity/lib/_version.js"
      }
    ],
    [
      5160,
      {
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./transaction-list-item-details.component": 5159,
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
                var r,
                  a = e("react-redux"),
                  o = e("redux"),
                  i = e("react-router-dom"),
                  s = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = e("../../../../shared/modules/hexstring-utils"),
                  u = (r = e("./transaction-list-item-details.component")) && r.__esModule ? r : { default: r };
                n.default = (0, o.compose)(
                  i.withRouter,
                  (0, a.connect)(
                    (e, t) => {
                      const { recipientAddress: n, senderAddress: r } = t;
                      let a;
                      if (n) {
                        const t = (0, c.toChecksumHexAddress)(n);
                        a = (0, l.getEnsResolutionByAddress)(e, t);
                      }
                      const o = (0, l.getAddressBook)(e),
                        i = (0, l.getMetaMaskIdentities)(e),
                        s = (0, l.getAccountName)(i, n),
                        u = (0, l.getMetadataContractName)(e, n),
                        d = (e) => {
                          const t = o.find((t) => e.toLowerCase() === t.address.toLowerCase());
                          return (t && t.name) || "";
                        },
                        p = (0, l.getRpcPrefsForCurrentProvider)(e),
                        f = (0, l.getIsCustomNetwork)(e);
                      return {
                        rpcPrefs: p,
                        recipientEns: a,
                        senderNickname: d(r),
                        recipientNickname: n ? d(n) : null,
                        isCustomNetwork: f,
                        blockExplorerLinkText: (0, l.getBlockExplorerLinkText)(e),
                        recipientName: s,
                        recipientMetadataName: u
                      };
                    },
                    (e) => ({ tryReverseResolveAddress: (t) => e((0, s.tryReverseResolveAddress)(t)) })
                  )
                )(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/transaction-list-item-details.container.js" }
    ],
    [
      5161,
      { "./transaction-list-item.component": 5163 },
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
                  a = (r = e("./transaction-list-item.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/index.js" }
    ],
    [
      5162,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../hooks/useTransactionDisplayData": 5624,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../multichain": 5327,
        "../cancel-button": 4839,
        "../transaction-icon": 5156,
        "../transaction-list-item-details": 5158,
        "../transaction-status-label/transaction-status-label": 5166,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
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
                  a = v(e("prop-types")),
                  o = e("react-redux"),
                  i = v(e("../transaction-status-label/transaction-status-label")),
                  s = v(e("../transaction-icon")),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../hooks/useTransactionDisplayData"),
                  u = e("../../../helpers/utils/util"),
                  d = e("../../../../shared/constants/transaction"),
                  p = v(e("../cancel-button")),
                  f = e("../../../ducks/swaps/swaps"),
                  m = v(e("../transaction-list-item-details")),
                  h = e("../../multichain"),
                  y = e("../../component-library"),
                  g = e("../../../helpers/constants/design-system"),
                  b = e("../../../selectors");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E({ smartTransaction: e, transactionGroup: t, isEarliestNonce: n = !1 }) {
                  var a;
                  const v = (0, o.useDispatch)(),
                    T = (0, l.useI18nContext)(),
                    [E, w] = (0, r.useState)(!1),
                    [O, _] = (0, r.useState)(!1),
                    { primaryCurrency: x, recipientAddress: k, isPending: S, senderAddress: C } = (0, c.useTransactionDisplayData)(t),
                    A = (0, o.useSelector)(b.getCurrentNetwork),
                    { sourceTokenSymbol: N, destinationTokenSymbol: I, time: P, status: M } = e,
                    j = d.TransactionGroupCategory.swap,
                    B = T("swapTokenToToken", [N, I]),
                    R = (0, u.formatDateWithYearContext)(P, "MMM d, y", "MMM d");
                  let D;
                  M === d.SmartTransactionStatus.pending
                    ? (D = d.TransactionGroupStatus.pending)
                    : null != M && M.startsWith(d.SmartTransactionStatus.cancelled) && (D = d.TransactionGroupStatus.cancelled);
                  const L = e.cancellable && !E,
                    F = (0, r.useCallback)(() => {
                      _((e) => !e);
                    }, []);
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      h.ActivityListItem,
                      {
                        className: "transaction-list-item transaction-list-item--unconfirmed",
                        title: B,
                        onClick: F,
                        icon: r.default.createElement(
                          y.BadgeWrapper,
                          {
                            anchorElementShape: y.BadgeWrapperAnchorElementShape.circular,
                            positionObj: { top: -4, right: -4 },
                            display: g.Display.Block,
                            badge: r.default.createElement(y.AvatarNetwork, {
                              className: "activity-tx__network-badge",
                              "data-testid": "activity-tx-network-badge",
                              size: y.AvatarNetworkSize.Xs,
                              name: null == A ? void 0 : A.nickname,
                              src: null == A || null === (a = A.rpcPrefs) || void 0 === a ? void 0 : a.imageUrl,
                              borderWidth: 1,
                              borderColor: g.BackgroundColor.backgroundDefault
                            })
                          },
                          r.default.createElement(s.default, { category: j, status: D })
                        ),
                        subtitle: r.default.createElement(i.default, { isPending: !0, isEarliestNonce: n, date: R, status: D })
                      },
                      D === d.TransactionGroupStatus.pending &&
                        L &&
                        r.default.createElement(
                          y.Box,
                          { paddingTop: 4, className: "transaction-list-item__pending-actions" },
                          r.default.createElement(p.default, {
                            transaction: e.uuid,
                            cancelTransaction: (t) => {
                              null == t || t.preventDefault(), v((0, f.cancelSwapsSmartTransaction)(e.uuid)), w(!0);
                            }
                          })
                        )
                    ),
                    O &&
                      r.default.createElement(m.default, {
                        title: B,
                        onClose: F,
                        senderAddress: C,
                        recipientAddress: k,
                        primaryCurrency: x,
                        isEarliestNonce: n,
                        transactionGroup: t,
                        transactionStatus: () =>
                          r.default.createElement(i.default, { isPending: S, isEarliestNonce: n, date: R, status: D, statusOnly: !0 })
                      })
                  );
                }
                E.propTypes = {
                  smartTransaction: a.default.object.isRequired,
                  isEarliestNonce: a.default.bool,
                  transactionGroup: a.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/smart-transaction-list-item.component.js" }
    ],
    [
      5163,
      {
        "../../../../shared/constants/gas": 4753,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/transaction": 4770,
        "../../../contexts/gasFee": 5513,
        "../../../contexts/metametrics": 5515,
        "../../../contexts/transaction-modal": 5516,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/transactions.util": 5576,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../hooks/useShouldShowSpeedUp": 5615,
        "../../../hooks/useTransactionDisplayData": 5624,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../multichain": 5327,
        "../../ui/button": 5377,
        "../advanced-gas-fee-popover": 4823,
        "../cancel-button": 4839,
        "../cancel-speedup-popover": 4841,
        "../edit-gas-fee-popover": 4915,
        "../edit-gas-popover": 4922,
        "../transaction-icon": 5156,
        "../transaction-list-item-details": 5158,
        "../transaction-status-label/transaction-status-label": 5166,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = j(t);
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
                  a = M(e("prop-types")),
                  o = M(e("classnames")),
                  i = e("react-router-dom"),
                  s = e("react-redux"),
                  l = e("../../../hooks/useTransactionDisplayData"),
                  c = e("../../../hooks/useI18nContext"),
                  u = M(e("../transaction-list-item-details")),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../hooks/useShouldShowSpeedUp"),
                  f = M(e("../transaction-status-label/transaction-status-label")),
                  m = M(e("../transaction-icon")),
                  h = e("../../../helpers/constants/design-system"),
                  y = e("../../component-library"),
                  g = e("../../../../shared/constants/metametrics"),
                  b = e("../../../../shared/constants/transaction"),
                  v = e("../../../../shared/constants/gas"),
                  T = e("../../../contexts/gasFee"),
                  E = e("../../../contexts/transaction-modal"),
                  w = e("../../../selectors"),
                  O = e("../../../helpers/utils/transactions.util"),
                  _ = e("../../../helpers/utils/util"),
                  x = M(e("../../ui/button")),
                  k = M(e("../advanced-gas-fee-popover")),
                  S = M(e("../cancel-button")),
                  C = M(e("../cancel-speedup-popover")),
                  A = M(e("../edit-gas-fee-popover")),
                  N = M(e("../edit-gas-popover")),
                  I = e("../../../contexts/metametrics"),
                  P = e("../../multichain");
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
                function B() {
                  return (
                    (B = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    B.apply(this, arguments)
                  );
                }
                function R({ transactionGroup: e, setEditGasMode: t, isEarliestNonce: n = !1 }) {
                  var a;
                  const O = (0, c.useI18nContext)(),
                    k = (0, i.useHistory)(),
                    { hasCancelled: C } = e,
                    [A, M] = (0, r.useState)(!1),
                    [j, B] = (0, r.useState)(!1),
                    [R, D] = (0, r.useState)(!1),
                    { supportsEIP1559: L } = (0, T.useGasFeeContext)(),
                    { openModal: F } = (0, E.useTransactionModalContext)(),
                    $ = (0, s.useSelector)(w.getTestNetworkBackgroundColor),
                    {
                      initialTransaction: { id: z },
                      primaryTransaction: { error: U, status: V }
                    } = e,
                    W = (0, r.useContext)(I.MetaMetricsContext),
                    H = (0, r.useCallback)(
                      async (e) => {
                        e.stopPropagation(),
                          W({
                            event: 'Clicked "Speed Up"',
                            category: g.MetaMetricsEventCategory.Navigation,
                            properties: { action: "Activity Log", legacy_event: !0 }
                          }),
                          L ? (t(v.EditGasModes.speedUp), F("cancelSpeedUpTransaction")) : D(!0);
                      },
                      [F, t, W, L]
                    ),
                    G = (0, r.useCallback)(
                      (e) => {
                        e.stopPropagation(),
                          W({
                            event: 'Clicked "Cancel"',
                            category: g.MetaMetricsEventCategory.Navigation,
                            properties: { action: "Activity Log", legacy_event: !0 }
                          }),
                          L ? (t(v.EditGasModes.cancel), F("cancelSpeedUpTransaction")) : B(!0);
                      },
                      [W, F, t, L]
                    ),
                    Y = (0, p.useShouldShowSpeedUp)(e, n),
                    {
                      title: q,
                      category: K,
                      primaryCurrency: Q,
                      recipientAddress: X,
                      secondaryCurrency: J,
                      displayedStatusKey: Z,
                      isPending: ee,
                      senderAddress: te
                    } = (0, l.useTransactionDisplayData)(e),
                    ne = (0, _.formatDateWithYearContext)(e.primaryTransaction.time, "MMM d, y", "MMM d"),
                    re = K === b.TransactionGroupCategory.signatureRequest,
                    ae = K === b.TransactionGroupCategory.approval,
                    oe = V === b.TransactionStatus.unapproved,
                    ie = K === b.TransactionGroupCategory.swap,
                    se = (0, o.default)("transaction-list-item", {
                      "transaction-list-item--unconfirmed":
                        ee || [b.TransactionStatus.failed, b.TransactionStatus.dropped, b.TransactionStatus.rejected].includes(Z)
                    }),
                    le = (0, r.useCallback)(() => {
                      oe
                        ? k.push(`${d.CONFIRM_TRANSACTION_ROUTE}/${z}`)
                        : M(
                            (e) => (
                              W({
                                event: e ? g.MetaMetricsEventName.ActivityDetailsClosed : g.MetaMetricsEventName.ActivityDetailsOpened,
                                category: g.MetaMetricsEventCategory.Navigation,
                                properties: { activity_type: K }
                              }),
                              !e
                            )
                          );
                    }, [oe, k, z, W, K]),
                    ce = (0, r.useMemo)(
                      () =>
                        Y && ee && !oe
                          ? r.default.createElement(
                              x.default,
                              { type: "primary", onClick: C ? G : H, style: C ? { width: "auto" } : null },
                              O(C ? "speedUpCancellation" : "speedUp")
                            )
                          : null,
                      [Y, oe, O, ee, C, H, G]
                    ),
                    ue = (0, s.useSelector)(w.getCurrentNetwork);
                  let de = !C && ee && !oe;
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      P.ActivityListItem,
                      {
                        "data-testid": "activity-list-item",
                        onClick: le,
                        className: se,
                        title: q,
                        icon: r.default.createElement(
                          y.BadgeWrapper,
                          {
                            anchorElementShape: y.BadgeWrapperAnchorElementShape.circular,
                            positionObj: { top: -4, right: -4 },
                            display: h.Display.Block,
                            badge: r.default.createElement(y.AvatarNetwork, {
                              className: "activity-tx__network-badge",
                              "data-testid": "activity-tx-network-badge",
                              size: y.AvatarNetworkSize.Xs,
                              name: null == ue ? void 0 : ue.nickname,
                              src: null == ue || null === (a = ue.rpcPrefs) || void 0 === a ? void 0 : a.imageUrl,
                              borderWidth: 1,
                              borderColor: h.BackgroundColor.backgroundDefault,
                              backgroundColor: $
                            })
                          },
                          r.default.createElement(m.default, { category: K, status: Z })
                        ),
                        subtitle: r.default.createElement(f.default, {
                          statusOnly: !0,
                          isPending: ee,
                          isEarliestNonce: n,
                          error: U,
                          date: ne,
                          status: Z
                        }),
                        rightContent:
                          !re &&
                          !ae &&
                          r.default.createElement(
                            r.default.Fragment,
                            null,
                            r.default.createElement(
                              y.Text,
                              {
                                variant: h.TextVariant.bodyLgMedium,
                                fontWeight: h.FontWeight.Medium,
                                color: h.Color.textDefault,
                                title: Q,
                                textAlign: h.TextAlign.Right,
                                "data-testid": "transaction-list-item-primary-currency",
                                className: "activity-list-item__primary-currency",
                                ellipsis: !0
                              },
                              Q
                            ),
                            r.default.createElement(
                              y.Text,
                              {
                                variant: h.TextVariant.bodyMd,
                                color: h.Color.textAlternative,
                                textAlign: h.TextAlign.Right,
                                "data-testid": "transaction-list-item-secondary-currency"
                              },
                              J
                            )
                          )
                      },
                      r.default.createElement(
                        y.Box,
                        { paddingTop: 4, className: "transaction-list-item__pending-actions" },
                        de && r.default.createElement(S.default, { transaction: e.primaryTransaction, cancelTransaction: G }),
                        ce
                      )
                    ),
                    A &&
                      r.default.createElement(u.default, {
                        title: q,
                        onClose: le,
                        transactionGroup: e,
                        primaryCurrency: Q,
                        senderAddress: te,
                        recipientAddress: X,
                        onRetry: H,
                        showRetry: V === b.TransactionStatus.failed && !ie,
                        showSpeedUp: Y,
                        isEarliestNonce: n,
                        onCancel: G,
                        showCancel: ee && !C,
                        transactionStatus: () =>
                          r.default.createElement(f.default, {
                            isPending: ee,
                            isEarliestNonce: n,
                            error: U,
                            date: ne,
                            status: Z,
                            statusOnly: !0
                          })
                      }),
                    !L &&
                      R &&
                      r.default.createElement(N.default, {
                        onClose: () => D(!1),
                        mode: v.EditGasModes.speedUp,
                        transaction: e.primaryTransaction
                      }),
                    !L &&
                      j &&
                      r.default.createElement(N.default, {
                        onClose: () => B(!1),
                        mode: v.EditGasModes.cancel,
                        transaction: e.primaryTransaction
                      })
                  );
                }
                R.propTypes = {
                  transactionGroup: a.default.object.isRequired,
                  isEarliestNonce: a.default.bool,
                  setEditGasMode: a.default.func
                };
                const D = (e) => {
                  const { transactionGroup: t } = e,
                    [n, a] = (0, r.useState)(),
                    o = t.primaryTransaction,
                    i =
                      (0, s.useSelector)(w.checkNetworkAndAccountSupports1559) &&
                      !(0, O.isLegacyTransaction)(null == o ? void 0 : o.txParams);
                  return r.default.createElement(
                    T.GasFeeContextProvider,
                    { transaction: t.primaryTransaction, editGasMode: n },
                    r.default.createElement(
                      E.TransactionModalContextProvider,
                      null,
                      r.default.createElement(R, B({}, e, { setEditGasMode: a })),
                      i &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(C.default, null),
                          r.default.createElement(A.default, null),
                          r.default.createElement(k.default, null)
                        )
                    )
                  );
                };
                D.propTypes = { transactionGroup: a.default.object.isRequired };
                n.default = D;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/transaction-list-item.component.js" }
    ],
    [
      5164,
      { "./transaction-list.component": 5165 },
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
                  a = (r = e("./transaction-list.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list/index.js" }
    ],
    [
      5165,
      {
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/modules/string-utils": 4797,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/transactions": 5546,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../selectors/transactions": 5962,
        "../../component-library": 5242,
        "../../ui/button": 5377,
        "../transaction-list-item": 5161,
        "../transaction-list-item/smart-transaction-list-item.component": 5162,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = x);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
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
                  a = v(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../selectors/transactions"),
                  s = e("../../../selectors"),
                  l = e("../../../hooks/useI18nContext"),
                  c = v(e("../transaction-list-item")),
                  u = v(e("../transaction-list-item/smart-transaction-list-item.component")),
                  d = v(e("../../ui/button")),
                  p = e("../../../helpers/constants/transactions"),
                  f = e("../../../../shared/constants/swaps"),
                  m = e("../../../../shared/constants/transaction"),
                  h = e("../../../../shared/modules/string-utils"),
                  y = e("../../component-library"),
                  g = e("../../../helpers/constants/design-system"),
                  b = e("../../../helpers/utils/util");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const E = 10,
                  w = ({ initialTransaction: { type: e, destinationTokenSymbol: t, sourceTokenSymbol: n } }) =>
                    !p.TOKEN_CATEGORY_HASH[e] && (e !== m.TransactionType.swap || "ETH" === t || "ETH" === n),
                  O = (e, t, n, r) =>
                    t
                      ? e.filter(w)
                      : n
                      ? e.filter(
                          (
                            (e, t) =>
                            ({ initialTransaction: { txParams: n } }) =>
                              (0, h.isEqualCaseInsensitive)(null == n ? void 0 : n.to, e) ||
                              ((null == n ? void 0 : n.to) === f.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP[t] && n.data.match(e.slice(2)))
                          )(n, r)
                        )
                      : e,
                  _ = (e) => {
                    const t = [];
                    return (
                      e.forEach((e) => {
                        const n = (0, b.formatDateWithYearContext)(e.primaryTransaction.time, "MMM d, y", "MMM d"),
                          r = t.find((e) => e.date === n);
                        r
                          ? r.transactionGroups.push(e)
                          : t.push({ date: n, dateMillis: e.primaryTransaction.time, transactionGroups: [e] }),
                          t.sort((e, t) => t.dateMillis - e.dateMillis);
                      }),
                      t
                    );
                  };
                function x({ hideTokenTransactions: e, tokenAddress: t }) {
                  const [n, a] = (0, r.useState)(E),
                    p = (0, l.useI18nContext)(),
                    f = (0, o.useSelector)(i.nonceSortedPendingTransactionsSelector),
                    h = (0, o.useSelector)(i.nonceSortedCompletedTransactionsSelector),
                    b = (0, o.useSelector)(s.getCurrentChainId),
                    v = (0, o.useSelector)(s.getSelectedAddress),
                    T = (e, t) =>
                      0 === e
                        ? r.default.createElement(
                            y.Text,
                            {
                              paddingTop: 4,
                              paddingInline: 4,
                              variant: g.TextVariant.bodyMd,
                              color: g.TextColor.textDefault,
                              key: t.dateMillis
                            },
                            t.date
                          )
                        : null,
                    w = (0, r.useMemo)(() => _(O(f, e, t, b)), [e, t, f, b]),
                    x = (0, r.useMemo)(() => _(O(h, e, t, b)), [e, t, h, b]),
                    k = (0, r.useCallback)(() => a((e) => e + E), []);
                  return r.default.createElement(
                    y.Box,
                    { className: "transaction-list", paddingTop: 4 },
                    r.default.createElement(
                      y.Box,
                      { className: "transaction-list__transactions" },
                      w.length > 0 &&
                        r.default.createElement(
                          y.Box,
                          { className: "transaction-list__pending-transactions" },
                          w.map((e) =>
                            e.transactionGroups.map((t, n) =>
                              t.initialTransaction.transactionType === m.TransactionType.smart
                                ? r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(n, e),
                                    r.default.createElement(u.default, {
                                      isEarliestNonce: 0 === n,
                                      smartTransaction: t.initialTransaction,
                                      transactionGroup: t,
                                      key: `${t.nonce}:${n}`
                                    })
                                  )
                                : r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(n, e),
                                    r.default.createElement(c.default, {
                                      isEarliestNonce: 0 === n,
                                      transactionGroup: t,
                                      key: `${t.nonce}:${n}`
                                    })
                                  )
                            )
                          )
                        ),
                      r.default.createElement(
                        y.Box,
                        { className: "transaction-list__completed-transactions" },
                        x.length > 0
                          ? x
                              .map(
                                (e) => (
                                  (e.transactionGroups = e.transactionGroups.map(
                                    (e) => (
                                      (e.transactions = e.transactions.filter(
                                        (e) =>
                                          !((e) =>
                                            e.type === m.TransactionType.incoming && e.txParams.to.toLowerCase() !== v.toLowerCase())(e)
                                      )),
                                      e
                                    )
                                  )),
                                  e
                                )
                              )
                              .map((e) => ((e.transactionGroups = e.transactionGroups.filter((e) => e.transactions.length > 0)), e))
                              .filter((e) => e.transactionGroups.length > 0)
                              .slice(0, n)
                              .map((e) =>
                                e.transactionGroups.map((t, a) => {
                                  var o;
                                  return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(a, e),
                                    (null === (o = t.initialTransaction) || void 0 === o ? void 0 : o.transactionType) ===
                                      m.TransactionType.smart
                                      ? r.default.createElement(u.default, {
                                          transactionGroup: t,
                                          smartTransaction: t.initialTransaction,
                                          key: `${t.nonce}:${a}`
                                        })
                                      : r.default.createElement(c.default, { transactionGroup: t, key: `${t.nonce}:${n + a - 10}` })
                                  );
                                })
                              )
                          : r.default.createElement(
                              y.Box,
                              { className: "transaction-list__empty" },
                              r.default.createElement(y.Box, { className: "transaction-list__empty-text" }, p("noTransactions"))
                            ),
                        x.length > n &&
                          r.default.createElement(
                            d.default,
                            { className: "transaction-list__view-more", type: "secondary", onClick: k },
                            p("viewMore")
                          )
                      )
                    )
                  );
                }
                (x.propTypes = { hideTokenTransactions: a.default.bool, tokenAddress: a.default.string }),
                  (x.defaultProps = { hideTokenTransactions: !1, tokenAddress: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list/transaction-list.component.js" }
    ],
    [
      5166,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../hooks/useI18nContext": 5602,
        "../../ui/tooltip": 5502,
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
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("classnames")),
                  i = c(e("../../ui/tooltip")),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../../shared/constants/transaction");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = "queued",
                  d = {
                    [l.TransactionStatus.submitted]: l.TransactionGroupStatus.pending,
                    [l.TransactionStatus.approved]: l.TransactionGroupStatus.pending,
                    [l.TransactionStatus.signed]: l.TransactionGroupStatus.pending
                  },
                  p = {
                    [l.TransactionStatus.unapproved]: "transaction-status-label--unapproved",
                    [l.TransactionStatus.rejected]: "transaction-status-label--rejected",
                    [l.TransactionStatus.failed]: "transaction-status-label--failed",
                    [l.TransactionStatus.dropped]: "transaction-status-label--dropped",
                    [l.TransactionGroupStatus.cancelled]: "transaction-status-label--cancelled",
                    [u]: "transaction-status-label--queued",
                    [l.TransactionGroupStatus.pending]: "transaction-status-label--pending"
                  };
                function f({ status: e, date: t, error: n, isEarliestNonce: a, className: c, statusOnly: f }) {
                  var m;
                  const h = (0, s.useI18nContext)();
                  let y = (null == n || null === (m = n.rpc) || void 0 === m ? void 0 : m.message) || (null == n ? void 0 : n.message),
                    g = e;
                  d[e] && (g = a ? l.TransactionGroupStatus.pending : u);
                  let b = g && h(g);
                  return (
                    g !== l.TransactionStatus.confirmed || f || (b = t),
                    r.default.createElement(
                      i.default,
                      {
                        position: "top",
                        title: y,
                        wrapperClassName: (0, o.default)("transaction-status-label", `transaction-status-label--${g}`, c, p[g])
                      },
                      b
                    )
                  );
                }
                f.propTypes = {
                  status: a.default.string,
                  className: a.default.string,
                  date: a.default.string,
                  error: a.default.object,
                  isEarliestNonce: a.default.bool,
                  statusOnly: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-status-label/transaction-status-label.js" }
    ],
    [
      5167,
      { "./user-preferenced-currency-display.component": 5168 },
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
                  a = (r = e("./user-preferenced-currency-display.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-display/index.js" }
    ],
    [
      5168,
      {
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/common": 5535,
        "../../../hooks/useUserPreferencedCurrency": 5629,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/currency-display": 5393,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
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
                  o = e("react-redux"),
                  i = e("../../../helpers/constants/common"),
                  s = p(e("../../ui/currency-display")),
                  l = e("../../../hooks/useUserPreferencedCurrency"),
                  c = e("../../component-library"),
                  u = e("../../../selectors"),
                  d = e("../../../ducks/metamask/metamask");
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
                function h({
                  "data-testid": e,
                  ethNumberOfDecimals: t,
                  fiatNumberOfDecimals: n,
                  numberOfDecimals: a,
                  showEthLogo: i,
                  type: p,
                  showFiat: f,
                  showCurrencySuffix: h,
                  ...y
                }) {
                  var g;
                  const b = (0, o.useSelector)(u.getCurrentNetwork),
                    v = (0, o.useSelector)(d.getNativeCurrency),
                    { currency: T, numberOfDecimals: E } = (0, l.useUserPreferencedCurrency)(p, {
                      ethNumberOfDecimals: t,
                      fiatNumberOfDecimals: n,
                      numberOfDecimals: a,
                      showFiatOverride: f
                    }),
                    w = (0, r.useMemo)(() => {
                      var e;
                      return (
                        i &&
                        T === v &&
                        r.default.createElement(c.AvatarNetwork, {
                          size: c.AvatarNetworkSize.Xs,
                          name: null == b ? void 0 : b.nickname,
                          src: null == b || null === (e = b.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl
                        })
                      );
                    }, [
                      T,
                      i,
                      v,
                      null == b ? void 0 : b.nickname,
                      null == b || null === (g = b.rpcPrefs) || void 0 === g ? void 0 : g.imageUrl
                    ]);
                  return r.default.createElement(
                    s.default,
                    m({}, y, { currency: T, "data-testid": e, numberOfDecimals: E, prefixComponent: w, suffix: h && !i && T })
                  );
                }
                h.propTypes = {
                  className: a.default.string,
                  "data-testid": a.default.string,
                  prefix: a.default.string,
                  value: a.default.string,
                  numberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  hideLabel: a.default.bool,
                  hideTitle: a.default.bool,
                  style: a.default.object,
                  showEthLogo: a.default.bool,
                  ethLogoHeight: a.default.number,
                  type: a.default.oneOf([i.PRIMARY, i.SECONDARY]),
                  ethNumberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  fiatNumberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  showFiat: a.default.bool,
                  showCurrencySuffix: a.default.bool,
                  ...s.default.propTypes
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-display/user-preferenced-currency-display.component.js" }
    ],
    [
      5169,
      { "./user-preferenced-currency-input.container": 5171 },
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
                  a = (r = e("./user-preferenced-currency-input.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/index.js" }
    ],
    [
      517,
      {
        "./_version": 516,
        "@ethersproject/bignumber": 446,
        "@ethersproject/bytes": 448,
        "@ethersproject/keccak256": 474,
        "@ethersproject/logger": 477,
        "@ethersproject/sha2": 511,
        "@ethersproject/strings": 521
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.sha256 = n.keccak256 = n.pack = void 0);
                var r = e("@ethersproject/bignumber"),
                  a = e("@ethersproject/bytes"),
                  o = e("@ethersproject/keccak256"),
                  i = e("@ethersproject/sha2"),
                  s = e("@ethersproject/strings"),
                  l = new RegExp("^bytes([0-9]+)$"),
                  c = new RegExp("^(u?int)([0-9]*)$"),
                  u = new RegExp("^(.*)\\[([0-9]*)\\]$"),
                  d = "0000000000000000000000000000000000000000000000000000000000000000",
                  p = e("@ethersproject/logger"),
                  f = e("./_version"),
                  m = new p.Logger(f.version);
                function h(e, t, n) {
                  switch (e) {
                    case "address":
                      return n ? (0, a.zeroPad)(t, 32) : (0, a.arrayify)(t);
                    case "string":
                      return (0, s.toUtf8Bytes)(t);
                    case "bytes":
                      return (0, a.arrayify)(t);
                    case "bool":
                      return (t = t ? "0x01" : "0x00"), n ? (0, a.zeroPad)(t, 32) : (0, a.arrayify)(t);
                  }
                  var o = e.match(c);
                  if (o) {
                    var i = parseInt(o[2] || "256");
                    return (
                      ((o[2] && String(i) !== o[2]) || i % 8 != 0 || 0 === i || i > 256) &&
                        m.throwArgumentError("invalid number type", "type", e),
                      n && (i = 256),
                      (t = r.BigNumber.from(t).toTwos(i)),
                      (0, a.zeroPad)(t, i / 8)
                    );
                  }
                  if ((o = e.match(l))) {
                    i = parseInt(o[1]);
                    return (
                      (String(i) !== o[1] || 0 === i || i > 32) && m.throwArgumentError("invalid bytes type", "type", e),
                      (0, a.arrayify)(t).byteLength !== i && m.throwArgumentError("invalid value for " + e, "value", t),
                      n ? (0, a.arrayify)((t + d).substring(0, 66)) : t
                    );
                  }
                  if ((o = e.match(u)) && Array.isArray(t)) {
                    var p = o[1];
                    parseInt(o[2] || String(t.length)) != t.length && m.throwArgumentError("invalid array length for " + e, "value", t);
                    var f = [];
                    return (
                      t.forEach(function (e) {
                        f.push(h(p, e, !0));
                      }),
                      (0, a.concat)(f)
                    );
                  }
                  return m.throwArgumentError("invalid type", "type", e);
                }
                function y(e, t) {
                  e.length != t.length && m.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
                  var n = [];
                  return (
                    e.forEach(function (e, r) {
                      n.push(h(e, t[r]));
                    }),
                    (0, a.hexlify)((0, a.concat)(n))
                  );
                }
                (n.pack = y),
                  (n.keccak256 = function (e, t) {
                    return (0, o.keccak256)(y(e, t));
                  }),
                  (n.sha256 = function (e, t) {
                    return (0, i.sha256)(y(e, t));
                  });
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/solidity",
        file: "node_modules/@ethersproject/solidity/lib/index.js"
      }
    ],
    [
      5170,
      { "../currency-input": 4893, "prop-types": 4219, react: 4475 },
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
                  s = c(e("prop-types")),
                  l = c(e("../currency-input"));
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                class p extends i.PureComponent {
                  render() {
                    const { useNativeCurrencyAsPrimaryCurrency: e, sendInputCurrencySwitched: t, ...n } = this.props;
                    return i.default.createElement(l.default, d({}, n, { featureSecondary: Boolean((e && t) || (!e && !t)) }));
                  }
                }
                (n.default = p),
                  (r = p),
                  (a = "propTypes"),
                  (o = { useNativeCurrencyAsPrimaryCurrency: s.default.bool, sendInputCurrencySwitched: s.default.bool }),
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
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/user-preferenced-currency-input.component.js" }
    ],
    [
      5171,
      {
        "../../../ducks/app/app": 5521,
        "../../../selectors": 5958,
        "./user-preferenced-currency-input.component": 5170,
        "react-redux": 4440
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
                  o = e("../../../ducks/app/app"),
                  i = e("../../../selectors"),
                  s = (r = e("./user-preferenced-currency-input.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)(
                  (e) => {
                    const { useNativeCurrencyAsPrimaryCurrency: t } = (0, i.getPreferences)(e);
                    return { useNativeCurrencyAsPrimaryCurrency: t, sendInputCurrencySwitched: e.appState.sendInputCurrencySwitched };
                  },
                  (e) => ({ onPreferenceToggle: () => e((0, o.toggleCurrencySwitch)()) })
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/user-preferenced-currency-input.container.js" }
    ],
    [
      5172,
      { "./user-preferenced-token-input.container": 5174 },
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
                  a = (r = e("./user-preferenced-token-input.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/index.js" }
    ],
    [
      5173,
      { "../../ui/token-input": 5499, "prop-types": 4219, react: 4475 },
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
                  s = c(e("prop-types")),
                  l = c(e("../../ui/token-input"));
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                class p extends i.PureComponent {
                  render() {
                    const { useNativeCurrencyAsPrimaryCurrency: e, ...t } = this.props;
                    return i.default.createElement(l.default, d({}, t, { showFiat: !e }));
                  }
                }
                (n.default = p),
                  (r = p),
                  (a = "propTypes"),
                  (o = {
                    token: s.default.shape({ address: s.default.string.isRequired, decimals: s.default.number, symbol: s.default.string })
                      .isRequired,
                    useNativeCurrencyAsPrimaryCurrency: s.default.bool
                  }),
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
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/user-preferenced-token-input.component.js" }
    ],
    [
      5174,
      { "../../../selectors": 5958, "./user-preferenced-token-input.component": 5173, "prop-types": 4219, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = s(e("prop-types")),
                  o = e("../../../selectors"),
                  i = s(e("./user-preferenced-token-input.component"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = (0, r.connect)((e) => {
                  const { useNativeCurrencyAsPrimaryCurrency: t } = (0, o.getPreferences)(e);
                  return { useNativeCurrencyAsPrimaryCurrency: t };
                })(i.default);
                l.propTypes = {
                  token: a.default.shape({ address: a.default.string.isRequired, decimals: a.default.number, symbol: a.default.string })
                    .isRequired
                };
                n.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/user-preferenced-token-input.container.js" }
    ],
    [
      5175,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/transaction": 4770,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/send": 5531,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/hardware": 5564,
        "../../../helpers/utils/portfolio": 5573,
        "../../../hooks/experiences/useRamps": 5581,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "../../ui/icon-button": 5416,
        "../../ui/spinner": 5483,
        "../../ui/tooltip": 5502,
        "../user-preferenced-currency-display": 5167,
        "./wallet-overview": 5178,
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
                  a = S(e("prop-types")),
                  o = e("react-redux"),
                  i = S(e("classnames")),
                  s = e("react-router-dom"),
                  l = e("../../../contexts/i18n"),
                  c = e("../../../helpers/constants/routes"),
                  u = S(e("../../ui/tooltip")),
                  d = S(e("../user-preferenced-currency-display")),
                  p = e("../../../helpers/constants/common"),
                  f = e("../../../selectors"),
                  m = e("../../../ducks/swaps/swaps"),
                  h = e("../../../helpers/utils/hardware"),
                  y = S(e("../../ui/icon-button")),
                  g = e("../../../contexts/metametrics"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = S(e("../../ui/spinner")),
                  T = e("../../../ducks/send"),
                  E = e("../../../../shared/constants/transaction"),
                  w = e("../../component-library"),
                  O = e("../../../helpers/constants/design-system"),
                  _ = S(e("../../../hooks/experiences/useRamps")),
                  x = e("../../../helpers/utils/portfolio"),
                  k = S(e("./wallet-overview"));
                function S(e) {
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
                const A = ({ className: e, showAddress: t }) => {
                  const n = (0, o.useDispatch)(),
                    a = (0, r.useContext)(l.I18nContext),
                    S = (0, r.useContext)(g.MetaMetricsContext),
                    C = (0, s.useHistory)(),
                    A = (0, s.useLocation)(),
                    N = (0, o.useSelector)(f.getIsBridgeChain),
                    I = (0, o.useSelector)(f.getIsBuyableChain),
                    P = (0, o.useSelector)(f.getMetaMetricsId),
                    M = (0, o.useSelector)(f.getCurrentKeyring),
                    j = (0, h.isHardwareKeyring)(null == M ? void 0 : M.type),
                    B = (0, o.useSelector)(f.getSwapsDefaultToken),
                    R = (0, o.useSelector)(f.isBalanceCached),
                    D = (0, o.useSelector)(f.getShouldShowFiat),
                    L = (0, o.useSelector)(f.getSelectedAccountCachedBalance),
                    F = (0, o.useSelector)(f.getIsSwapsChain),
                    $ = (0, o.useSelector)(f.getCurrentChainId),
                    { openBuyCryptoInPdapp: z } = (0, _.default)();
                  return r.default.createElement(k.default, {
                    showAddress: t,
                    balance: r.default.createElement(
                      u.default,
                      { position: "top", title: a("balanceOutdated"), disabled: !R },
                      r.default.createElement(
                        "div",
                        { className: "eth-overview__balance" },
                        r.default.createElement(
                          "div",
                          { className: "eth-overview__primary-container" },
                          L
                            ? r.default.createElement(d.default, {
                                style: { display: "contents" },
                                className: (0, i.default)("eth-overview__primary-balance", { "eth-overview__cached-balance": R }),
                                "data-testid": "eth-overview__primary-currency",
                                value: L,
                                type: p.PRIMARY,
                                ethNumberOfDecimals: 4,
                                hideTitle: !0
                              })
                            : r.default.createElement(v.default, {
                                color: "var(--color-secondary-default)",
                                className: "loading-overlay__spinner"
                              }),
                          R ? r.default.createElement("span", { className: "eth-overview__cached-star" }, "*") : null
                        ),
                        D &&
                          L &&
                          r.default.createElement(d.default, {
                            className: (0, i.default)({
                              "eth-overview__cached-secondary-balance": R,
                              "eth-overview__secondary-balance": !R
                            }),
                            "data-testid": "eth-overview__secondary-currency",
                            value: L,
                            type: p.SECONDARY,
                            ethNumberOfDecimals: 4,
                            hideTitle: !0
                          })
                      )
                    ),
                    buttons: r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.PlusMinus, color: O.IconColor.primaryInverse }),
                        disabled: !I,
                        "data-testid": "eth-overview-buy",
                        label: a("buyAndSell"),
                        onClick: () => {
                          z(),
                            S({
                              event: b.MetaMetricsEventName.NavBuyButtonClicked,
                              category: b.MetaMetricsEventCategory.Navigation,
                              properties: { location: "Home", text: "Buy", chain_id: $, token_symbol: B }
                            });
                        }
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        "data-testid": "eth-overview-send",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Arrow2UpRight, color: O.IconColor.primaryInverse }),
                        label: a("send"),
                        onClick: () => {
                          S({
                            event: b.MetaMetricsEventName.NavSendButtonClicked,
                            category: b.MetaMetricsEventCategory.Navigation,
                            properties: { token_symbol: "ETH", location: "Home", text: "Send", chain_id: $ }
                          }),
                            n((0, T.startNewDraftTransaction)({ type: E.AssetType.native })).then(() => {
                              C.push(c.SEND_ROUTE);
                            });
                        }
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        disabled: !F,
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.SwapHorizontal, color: O.IconColor.primaryInverse }),
                        onClick: () => {
                          F &&
                            (S({
                              event: b.MetaMetricsEventName.NavSwapButtonClicked,
                              category: b.MetaMetricsEventCategory.Swaps,
                              properties: {
                                token_symbol: "ETH",
                                location: b.MetaMetricsSwapsEventSource.MainView,
                                text: "Swap",
                                chain_id: $
                              }
                            }),
                            n((0, m.setSwapsFromToken)(B)),
                            j ? global.platform.openExtensionInBrowser(c.BUILD_QUOTE_ROUTE) : C.push(c.BUILD_QUOTE_ROUTE));
                        },
                        label: a("swap"),
                        "data-testid": "token-overview-button-swap",
                        tooltipRender: F
                          ? null
                          : (e) => r.default.createElement(u.default, { title: a("currentlyUnavailable"), position: "bottom" }, e)
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        disabled: !N,
                        "data-testid": "eth-overview-bridge",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Bridge, color: O.IconColor.primaryInverse }),
                        label: a("bridge"),
                        onClick: () => {
                          if (N) {
                            const e = (0, x.getPortfolioUrl)("bridge", "ext_bridge_button", P);
                            global.platform.openTab({ url: `${e}${A.pathname.includes("asset") ? "&token=native" : ""}` }),
                              S({
                                category: b.MetaMetricsEventCategory.Navigation,
                                event: b.MetaMetricsEventName.BridgeLinkClicked,
                                properties: { location: "Home", text: "Bridge", chain_id: $, token_symbol: "ETH" }
                              });
                          }
                        },
                        tooltipRender: N
                          ? null
                          : (e) => r.default.createElement(u.default, { title: a("currentlyUnavailable"), position: "bottom" }, e)
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        "data-testid": "eth-overview-portfolio",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Diagram, color: O.IconColor.primaryInverse }),
                        label: a("portfolio"),
                        onClick: () => {
                          const e = (0, x.getPortfolioUrl)("", "ext_portfolio_button", P);
                          global.platform.openTab({ url: e }),
                            S({
                              category: b.MetaMetricsEventCategory.Navigation,
                              event: b.MetaMetricsEventName.PortfolioLinkClicked,
                              properties: { location: "Home", text: "Portfolio", chain_id: $, token_symbol: "ETH" }
                            });
                        }
                      })
                    ),
                    className: e
                  });
                };
                A.propTypes = { className: a.default.string, showAddress: a.default.bool };
                n.default = A;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/eth-overview.js" }
    ],
    [
      5176,
      { "./eth-overview": 5175, "./token-overview": 5177 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "EthOverview", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(n, "TokenOverview", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r = o(e("./eth-overview")),
                  a = o(e("./token-overview"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/index.js" }
    ],
    [
      5177,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/transaction": 4770,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/send": 5531,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/error-keys": 5538,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/hardware": 5564,
        "../../../helpers/utils/portfolio": 5573,
        "../../../hooks/experiences/useRamps": 5581,
        "../../../hooks/useTokenFiatAmount": 5621,
        "../../../hooks/useTokenTracker": 5622,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/currency-display": 5393,
        "../../ui/icon-button": 5416,
        "./wallet-overview": 5178,
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
                  a = S(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = S(e("../../ui/currency-display")),
                  l = e("../../../contexts/i18n"),
                  c = e("../../../helpers/constants/routes"),
                  u = e("../../../hooks/useTokenTracker"),
                  d = e("../../../hooks/useTokenFiatAmount"),
                  p = e("../../../ducks/send"),
                  f = e("../../../helpers/utils/hardware"),
                  m = e("../../../ducks/swaps/swaps"),
                  h = S(e("../../../hooks/experiences/useRamps")),
                  y = e("../../../helpers/utils/portfolio"),
                  g = e("../../../selectors"),
                  b = S(e("../../ui/icon-button")),
                  v = e("../../../helpers/constants/error-keys"),
                  T = e("../../../store/actions"),
                  E = e("../../../contexts/metametrics"),
                  w = e("../../../../shared/constants/metametrics"),
                  O = e("../../../../shared/constants/transaction"),
                  _ = e("../../component-library"),
                  x = e("../../../helpers/constants/design-system"),
                  k = S(e("./wallet-overview"));
                function S(e) {
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
                const A = ({ className: e, token: t }) => {
                  var n, a;
                  const S = (0, o.useDispatch)(),
                    C = (0, r.useContext)(l.I18nContext),
                    A = (0, r.useContext)(E.MetaMetricsContext),
                    N = (0, i.useHistory)(),
                    { tokensWithBalances: I } = (0, u.useTokenTracker)({ tokens: [t] }),
                    P = (0, o.useSelector)(g.getCurrentKeyring),
                    M = (0, f.isHardwareKeyring)(P.type),
                    j = null === (n = I[0]) || void 0 === n ? void 0 : n.balance,
                    B = null === (a = I[0]) || void 0 === a ? void 0 : a.string,
                    R = (0, d.useTokenFiatAmount)(t.address, B, t.symbol),
                    D = (0, o.useSelector)(g.getCurrentChainId),
                    L = (0, o.useSelector)(g.getIsSwapsChain),
                    F = (0, o.useSelector)(g.getIsBridgeChain),
                    $ = (0, o.useSelector)(g.getIsBuyableChain),
                    z = (0, o.useSelector)(g.getMetaMetricsId),
                    { openBuyCryptoInPdapp: U } = (0, h.default)();
                  return (
                    (0, r.useEffect)(() => {
                      t.isERC721 && S((0, T.showModal)({ name: "CONVERT_TOKEN_TO_NFT", tokenAddress: t.address }));
                    }, [t.isERC721, t.address, S]),
                    r.default.createElement(k.default, {
                      showAddress: !1,
                      balance: r.default.createElement(
                        "div",
                        { className: "token-overview__balance" },
                        r.default.createElement(
                          "div",
                          { className: "token-overview__primary-container" },
                          r.default.createElement(s.default, {
                            style: { display: "contents" },
                            className: "token-overview__primary-balance",
                            displayValue: B,
                            suffix: t.symbol
                          })
                        ),
                        R
                          ? r.default.createElement(s.default, {
                              className: "token-overview__secondary-balance",
                              displayValue: R,
                              hideLabel: !0
                            })
                          : null
                      ),
                      buttons: r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(b.default, {
                          className: "token-overview__button",
                          Icon: r.default.createElement(_.Icon, { name: _.IconName.PlusMinus, color: x.IconColor.primaryInverse }),
                          label: C("buyAndSell"),
                          "data-testid": "token-overview-buy",
                          onClick: () => {
                            U(),
                              A({
                                event: w.MetaMetricsEventName.NavBuyButtonClicked,
                                category: w.MetaMetricsEventCategory.Navigation,
                                properties: { location: "Token Overview", text: "Buy", chain_id: D, token_symbol: t.symbol }
                              });
                          },
                          disabled: t.isERC721 || !$
                        }),
                        r.default.createElement(b.default, {
                          className: "token-overview__button",
                          onClick: async () => {
                            A({
                              event: w.MetaMetricsEventName.NavSendButtonClicked,
                              category: w.MetaMetricsEventCategory.Navigation,
                              properties: {
                                token_symbol: t.symbol,
                                location: w.MetaMetricsSwapsEventSource.TokenView,
                                text: "Send",
                                chain_id: D
                              }
                            });
                            try {
                              await S((0, p.startNewDraftTransaction)({ type: O.AssetType.token, details: t })), N.push(c.SEND_ROUTE);
                            } catch (e) {
                              if (!e.message.includes(v.INVALID_ASSET_TYPE)) throw e;
                            }
                          },
                          Icon: r.default.createElement(_.Icon, { name: _.IconName.Arrow2UpRight, color: x.IconColor.primaryInverse }),
                          label: C("send"),
                          "data-testid": "eth-overview-send",
                          disabled: t.isERC721
                        }),
                        L &&
                          r.default.createElement(b.default, {
                            className: "token-overview__button",
                            Icon: r.default.createElement(_.Icon, { name: _.IconName.SwapHorizontal, color: x.IconColor.primaryInverse }),
                            onClick: () => {
                              A({
                                event: w.MetaMetricsEventName.NavSwapButtonClicked,
                                category: w.MetaMetricsEventCategory.Swaps,
                                properties: {
                                  token_symbol: t.symbol,
                                  location: w.MetaMetricsSwapsEventSource.TokenView,
                                  text: "Swap",
                                  chain_id: D
                                }
                              }),
                                S(
                                  (0, m.setSwapsFromToken)({
                                    ...t,
                                    address: t.address.toLowerCase(),
                                    iconUrl: t.image,
                                    balance: j,
                                    string: B
                                  })
                                ),
                                M ? global.platform.openExtensionInBrowser(c.BUILD_QUOTE_ROUTE) : N.push(c.BUILD_QUOTE_ROUTE);
                            },
                            label: C("swap"),
                            tooltipRender: null
                          }),
                        F &&
                          r.default.createElement(b.default, {
                            className: "token-overview__button",
                            "data-testid": "token-overview-bridge",
                            Icon: r.default.createElement(_.Icon, { name: _.IconName.Bridge, color: x.IconColor.primaryInverse }),
                            label: C("bridge"),
                            onClick: () => {
                              const e = (0, y.getPortfolioUrl)("bridge", "ext_bridge_button", z);
                              global.platform.openTab({ url: `${e}&token=${t.address}` }),
                                A({
                                  category: w.MetaMetricsEventCategory.Navigation,
                                  event: w.MetaMetricsEventName.BridgeLinkClicked,
                                  properties: { location: "Token Overview", text: "Bridge", url: e, chain_id: D, token_symbol: t.symbol }
                                });
                            },
                            tooltipRender: null
                          })
                      ),
                      className: e
                    })
                  );
                };
                (A.propTypes = {
                  className: a.default.string,
                  token: a.default.shape({
                    address: a.default.string.isRequired,
                    decimals: a.default.number,
                    symbol: a.default.string,
                    image: a.default.string,
                    isERC721: a.default.bool
                  }).isRequired
                }),
                  (A.defaultProps = { className: undefined });
                n.default = A;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/token-overview.js" }
    ],
    [
      5178,
      {
        "../../../../shared/modules/hexstring-utils": 4788,
        "../../../selectors": 5958,
        "../../multichain": 5327,
        "../../ui/box/box": 5372,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../shared/modules/hexstring-utils"),
                  l = e("../../../selectors"),
                  c = e("../../multichain"),
                  u = d(e("../../ui/box/box"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ balance: e, buttons: t, className: n, showAddress: a = !1 }) => {
                  const d = (0, i.useSelector)(l.getSelectedIdentity),
                    p = (0, s.toChecksumHexAddress)(null == d ? void 0 : d.address);
                  return r.default.createElement(
                    "div",
                    { className: (0, o.default)("wallet-overview", n) },
                    r.default.createElement(
                      "div",
                      { className: "wallet-overview__balance" },
                      a
                        ? r.default.createElement(
                            u.default,
                            { marginTop: 2 },
                            r.default.createElement(c.AddressCopyButton, { address: p, shorten: !0 })
                          )
                        : null,
                      e
                    ),
                    r.default.createElement("div", { className: "wallet-overview__buttons" }, t)
                  );
                };
                p.propTypes = {
                  balance: a.default.element.isRequired,
                  buttons: a.default.element.isRequired,
                  className: a.default.string,
                  showAddress: a.default.bool
                };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/wallet-overview.js" }
    ],
    [
      5179,
      { "./whats-new-popup": 5180 },
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
                  a = (r = e("./whats-new-popup")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/whats-new-popup/index.js" }
    ],
    [
      5180,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/notifications": 4801,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/locale/locale": 5528,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../hooks/useEqualityCheck": 5599,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/popover": 5465,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = C);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = O(t);
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
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  i = w(e("prop-types")),
                  s = w(e("classnames")),
                  l = e("lodash"),
                  c = e("../../../ducks/locale/locale"),
                  u = e("../../../contexts/i18n"),
                  d = e("../../../hooks/useEqualityCheck"),
                  p = w(e("../../ui/popover")),
                  f = e("../../component-library"),
                  m = e("../../../store/actions"),
                  h = e("../../../../shared/notifications"),
                  y = e("../../../selectors"),
                  g = e("../../../helpers/constants/routes"),
                  b = e("../../../helpers/constants/design-system"),
                  v = w(e("../../../helpers/constants/zendesk-url")),
                  T = e("../../../contexts/metametrics"),
                  E = e("../../../../shared/constants/metametrics");
                function w(e) {
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
                function _(e, t) {
                  return {
                    2: () => {
                      global.platform.openTab({ url: "https://survey.alchemer.com/s3/6173069/MetaMask-Extension-NPS-January-2021" });
                    },
                    3: () => {
                      global.platform.openTab({ url: "https://community.metamask.io/t/about-the-security-category/72" });
                    },
                    4: () => {
                      (0, m.updateViewedNotifications)({ 4: !0 }), t.push(g.BUILD_QUOTE_ROUTE);
                    },
                    5: () => {
                      (0, m.updateViewedNotifications)({ 5: !0 }), global.platform.openTab({ url: v.default.SECRET_RECOVERY_PHRASE });
                    },
                    8: () => {
                      (0, m.updateViewedNotifications)({ 8: !0 }), t.push(g.ADVANCED_ROUTE);
                    },
                    10: () => {
                      (0, m.updateViewedNotifications)({ 10: !0 }), t.push(`${g.SECURITY_ROUTE}#token-description`);
                    },
                    12: () => {
                      (0, m.updateViewedNotifications)({ 12: !0 }), t.push(g.EXPERIMENTAL_ROUTE);
                    },
                    14: () => {
                      (0, m.updateViewedNotifications)({ 14: !0 }), t.push(`${g.ADVANCED_ROUTE}#backup-userdata`);
                    },
                    16: () => {
                      (0, m.updateViewedNotifications)({ 16: !0 });
                    },
                    17: () => {
                      (0, m.updateViewedNotifications)({ 17: !0 });
                    },
                    18: () => {
                      (0, m.updateViewedNotifications)({ 18: !0 }), t.push(`${g.EXPERIMENTAL_ROUTE}#security-alerts`);
                    },
                    19: () => {
                      (0, m.updateViewedNotifications)({ 19: !0 }), t.push(`${g.EXPERIMENTAL_ROUTE}#autodetect-nfts`);
                    },
                    20: () => {
                      (0, m.updateViewedNotifications)({ 20: !0 }), global.platform.openTab({ url: v.default.LEDGER_FIREFOX_U2F_GUIDE });
                    },
                    21: () => {
                      (0, m.updateViewedNotifications)({ 21: !0 }), t.push(g.PREPARE_SWAP_ROUTE);
                    },
                    22: () => {
                      (0, m.updateViewedNotifications)({ 22: !0 });
                    },
                    23: () => {
                      (0, m.updateViewedNotifications)({ 23: !0 }), t.push(`${g.EXPERIMENTAL_ROUTE}#security-alerts`);
                    },
                    24: () => {
                      (0, m.updateViewedNotifications)({ 24: !0 });
                    },
                    [h.NOTIFICATION_DROP_LEDGER_FIREFOX]: () => {
                      (0, m.updateViewedNotifications)({ [h.NOTIFICATION_DROP_LEDGER_FIREFOX]: !0 });
                    },
                    [h.NOTIFICATION_OPEN_BETA_SNAPS]: () => {
                      (0, m.updateViewedNotifications)({ [h.NOTIFICATION_OPEN_BETA_SNAPS]: !0 }),
                        global.platform.openTab({ url: "https://metamask.io/snaps/" });
                    },
                    [h.NOTIFICATION_BUY_SELL_BUTTON]: () => {
                      (0, m.updateViewedNotifications)({ [h.NOTIFICATION_BUY_SELL_BUTTON]: !0 }),
                        global.platform.openTab({ url: "https://portfolio.metamask.io/sell/build-quote" });
                    }
                  }[e];
                }
                const x = (e) =>
                    Array.isArray(e)
                      ? r.default.createElement(
                          r.default.Fragment,
                          null,
                          e.map((t, n) => {
                            const a = n === e.length - 1;
                            return r.default.createElement(
                              f.Text,
                              {
                                "data-testid": `whats-new-description-item-${n}`,
                                key: `item-${n}`,
                                variant: b.TextVariant.bodyMd,
                                marginBottom: a ? 0 : 4
                              },
                              t
                            );
                          })
                        )
                      : r.default.createElement(f.Text, { variant: b.TextVariant.bodyMd }, e),
                  k = ({ notification: e, idRefMap: t, history: n, isLast: a, trackEvent: o }) => {
                    const { id: i, date: l, title: c, description: u, image: d, actionText: p } = e,
                      m = _(i, n),
                      h =
                        d &&
                        r.default.createElement("img", {
                          className: "whats-new-popup__notification-image",
                          src: d.src,
                          height: d.height,
                          width: d.width
                        }),
                      y = null == d ? void 0 : d.placeImageBelowDescription;
                    return r.default.createElement(
                      "div",
                      {
                        className: (0, s.default)("whats-new-popup__notification whats-new-popup__first-notification", {
                          "whats-new-popup__last-notification": a
                        }),
                        key: `whats-new-popop-notification-${i}`
                      },
                      r.default.createElement(f.Text, { variant: b.TextVariant.bodyLgMedium, marginBottom: 2 }, c),
                      !y && h,
                      r.default.createElement(
                        "div",
                        { className: "whats-new-popup__description-and-date" },
                        r.default.createElement("div", { className: "whats-new-popup__notification-description" }, x(u)),
                        r.default.createElement("div", { className: "whats-new-popup__notification-date" }, l)
                      ),
                      y && h,
                      p &&
                        r.default.createElement(
                          f.ButtonPrimary,
                          {
                            className: "whats-new-popup__button",
                            onClick: () => {
                              m(), o({ category: E.MetaMetricsEventCategory.Home, event: E.MetaMetricsEventName.WhatsNewClicked });
                            },
                            block: !0
                          },
                          p
                        ),
                      r.default.createElement("div", { className: "whats-new-popup__intersection-observable", ref: t[i] })
                    );
                  },
                  S = ({ notification: e, idRefMap: t, history: n, isLast: a }) => {
                    const { id: o, date: i, title: l, description: c, actionText: u } = e,
                      d = _(o, n);
                    return r.default.createElement(
                      "div",
                      {
                        className: (0, s.default)("whats-new-popup__notification", { "whats-new-popup__last-notification": a }),
                        key: `whats-new-popop-notification-${o}`
                      },
                      r.default.createElement("div", { className: "whats-new-popup__notification-title" }, l),
                      r.default.createElement(
                        "div",
                        { className: "whats-new-popup__description-and-date" },
                        r.default.createElement("div", { className: "whats-new-popup__notification-description" }, x(c)),
                        r.default.createElement("div", { className: "whats-new-popup__notification-date" }, i)
                      ),
                      u && r.default.createElement("div", { className: "whats-new-popup__link", onClick: d }, `${u} >`),
                      r.default.createElement("div", { className: "whats-new-popup__intersection-observable", ref: t[o] })
                    );
                  };
                function C({ onClose: e }) {
                  const t = (0, r.useContext)(u.I18nContext),
                    n = (0, a.useHistory)(),
                    i = (0, o.useSelector)(y.getSortedAnnouncementsToShow),
                    s = (0, o.useSelector)(c.getCurrentLocale),
                    [f, g] = (0, r.useState)({}),
                    [b, v] = (0, r.useState)(!0),
                    w = (0, r.useRef)(),
                    O = (0, d.useEqualityCheck)(i),
                    _ = (0, r.useMemo)(() => O.reduce((e, t) => ({ ...e, [t.id]: r.default.createRef() }), {}), [O]),
                    x = (0, r.useContext)(T.MetaMetricsContext),
                    C = (0, l.debounce)((e) => {
                      v(e.scrollHeight - e.scrollTop !== e.clientHeight);
                    }, 100);
                  (0, r.useEffect)(() => {
                    const e = new window.IntersectionObserver(
                      (e, t) => {
                        e.forEach((e) => {
                          if (e.isIntersecting) {
                            const [n, r] = Object.entries(_).find(([t, n]) => n.current.isSameNode(e.target));
                            g((e) => ({ ...e, [n]: !0 })), t.unobserve(r.current);
                          }
                        });
                      },
                      { root: w.current, threshold: 1 }
                    );
                    return (
                      Object.values(_).forEach((t) => {
                        e.observe(t.current);
                      }),
                      () => {
                        e.disconnect();
                      }
                    );
                  }, [_, g]);
                  const A = {
                    0: k,
                    1: k,
                    18: k,
                    19: k,
                    21: k,
                    22: k,
                    23: k,
                    24: k,
                    [h.NOTIFICATION_DROP_LEDGER_FIREFOX]: k,
                    [h.NOTIFICATION_OPEN_BETA_SNAPS]: k,
                    [h.NOTIFICATION_BUY_SELL_BUTTON]: k
                  };
                  return r.default.createElement(
                    p.default,
                    {
                      title: t("whatsNew"),
                      headerProps: { padding: [4, 4, 4] },
                      className: "whats-new-popup__popover",
                      onClose: () => {
                        (0, m.updateViewedNotifications)(f),
                          x({
                            category: E.MetaMetricsEventCategory.Home,
                            event: E.MetaMetricsEventName.WhatsNewViewed,
                            properties: { number_viewed: Object.keys(f).pop(), completed_all: !0 }
                          }),
                          e();
                      },
                      popoverRef: w,
                      showScrollDown: b && i.length > 1,
                      onScrollDownButtonClick: (e) => {
                        e.stopPropagation(), _[i[i.length - 1].id].current.scrollIntoView({ behavior: "smooth" });
                      },
                      onScroll: (e) => {
                        C(e.target);
                      }
                    },
                    r.default.createElement(
                      "div",
                      { className: "whats-new-popup__notifications" },
                      i.map(({ id: e }, r) => {
                        const a = (0, h.getTranslatedUINotifications)(t, s)[e],
                          o = r === i.length - 1;
                        return (A[e] || S)({ notification: a, idRefMap: _, history: n, isLast: o, trackEvent: x });
                      })
                    )
                  );
                }
                C.propTypes = { onClose: i.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/whats-new-popup/whats-new-popup.js" }
    ],
    [
      5181,
      {
        "../../ui/identicon/blockieIdenticon/blockieIdenticon.component": 5426,
        "../../ui/jazzicon/jazzicon.component": 5435,
        "../avatar-base": 5186,
        "./avatar-account.types": 5182,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarAccount = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = c(e("../../ui/jazzicon/jazzicon.component")),
                  i = c(e("../../ui/identicon/blockieIdenticon/blockieIdenticon.component")),
                  s = e("../avatar-base"),
                  l = e("./avatar-account.types");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarAccount = r.default.forwardRef(
                  (
                    { size: e = l.AvatarAccountSize.Md, address: t, className: n = "", variant: c = l.AvatarAccountVariant.Jazzicon, ...d },
                    p
                  ) =>
                    r.default.createElement(
                      s.AvatarBase,
                      u({ ref: p, size: e, className: (0, a.default)("mm-avatar-account", n) }, d),
                      c === l.AvatarAccountVariant.Jazzicon
                        ? r.default.createElement(o.default, {
                            className: (0, a.default)("mm-avatar-account__jazzicon"),
                            address: t,
                            diameter: l.AvatarAccountDiameter[e]
                          })
                        : r.default.createElement(i.default, { address: t, diameter: l.AvatarAccountDiameter[e], borderRadius: "50%" })
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/avatar-account.tsx" }
    ],
    [
      5182,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.AvatarAccountVariant = n.AvatarAccountSize = n.AvatarAccountDiameter = void 0);
                n.AvatarAccountVariant = (function (e) {
                  return (e.Jazzicon = "jazzicon"), (e.Blockies = "blockies"), e;
                })({});
                let r = (n.AvatarAccountSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({}));
                n.AvatarAccountDiameter = { [r.Xs]: 16, [r.Sm]: 24, [r.Md]: 32, [r.Lg]: 40, [r.Xl]: 48 };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/avatar-account.types.ts" }
    ],
    [
      5183,
      { "./avatar-account": 5181, "./avatar-account.types": 5182 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccount;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountDiameter", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountDiameter;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountVariant", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountVariant;
                    }
                  });
                var r = e("./avatar-account"),
                  a = e("./avatar-account.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/index.ts" }
    ],
    [
      5184,
      { "../../../helpers/constants/design-system": 5537, "../text": 5276, "./avatar-base.types": 5185, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../text"),
                  s = e("./avatar-base.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.AvatarBase = r.default.forwardRef(
                  (
                    {
                      size: e = s.AvatarBaseSize.Md,
                      children: t,
                      backgroundColor: n = o.BackgroundColor.backgroundAlternative,
                      borderColor: l = o.BorderColor.borderDefault,
                      color: u = o.TextColor.textDefault,
                      className: d = "",
                      ...p
                    },
                    f
                  ) => {
                    let m;
                    return (
                      (m =
                        e === s.AvatarBaseSize.Lg || e === s.AvatarBaseSize.Xl
                          ? o.TextVariant.bodyLgMedium
                          : e === s.AvatarBaseSize.Sm || e === s.AvatarBaseSize.Md
                          ? o.TextVariant.bodySm
                          : o.TextVariant.bodyXs),
                      r.default.createElement(
                        i.Text,
                        c(
                          {
                            className: (0, a.default)("mm-avatar-base", `mm-avatar-base--size-${e}`, d),
                            ref: f,
                            as: "div",
                            display: o.Display.Flex,
                            justifyContent: o.JustifyContent.center,
                            alignItems: o.AlignItems.center,
                            borderRadius: o.BorderRadius.full,
                            variant: m,
                            textTransform: o.TextTransform.Uppercase,
                            backgroundColor: n,
                            borderColor: l,
                            color: u
                          },
                          p
                        ),
                        t
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/avatar-base.tsx" }
    ],
    [
      5185,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarBaseSize = void 0);
                n.AvatarBaseSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/avatar-base.types.ts" }
    ],
    [
      5186,
      { "./avatar-base": 5184, "./avatar-base.types": 5185 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarBase", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarBase;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarBaseSize;
                    }
                  });
                var r = e("./avatar-base"),
                  a = e("./avatar-base.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/index.ts" }
    ],
    [
      5187,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../avatar-base": 5186,
        "../icon": 5241,
        "./avatar-favicon.types": 5188,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarFavicon = void 0);
                var r = u(e("react")),
                  a = u(e("classnames")),
                  o = e("../avatar-base"),
                  i = e("../icon"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("./avatar-favicon.types");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                n.AvatarFavicon = r.default.forwardRef(
                  (
                    {
                      size: e = c.AvatarFaviconSize.Md,
                      src: t,
                      name: n = "avatar-favicon",
                      className: u = "",
                      fallbackIconProps: p,
                      borderColor: f = s.BorderColor.transparent,
                      ...m
                    },
                    h
                  ) => {
                    const y = (0, l.useI18nContext)();
                    return r.default.createElement(
                      o.AvatarBase,
                      d(
                        {
                          ref: h,
                          size: e,
                          display: s.Display.Flex,
                          alignItems: s.AlignItems.center,
                          justifyContent: s.JustifyContent.center,
                          className: (0, a.default)("mm-avatar-favicon", u),
                          borderColor: f
                        },
                        m
                      ),
                      t
                        ? r.default.createElement("img", { className: "mm-avatar-favicon__image", src: t, alt: y("logo", [n]) })
                        : r.default.createElement(
                            i.Icon,
                            d({ name: i.IconName.Global, color: s.IconColor.iconDefault, size: i.IconSize.Md }, p)
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/avatar-favicon.tsx" }
    ],
    [
      5188,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarFaviconSize = void 0);
                n.AvatarFaviconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/avatar-favicon.types.ts" }
    ],
    [
      5189,
      { "./avatar-favicon": 5187, "./avatar-favicon.types": 5188 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarFavicon", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarFavicon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFaviconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFaviconSize;
                    }
                  });
                var r = e("./avatar-favicon"),
                  a = e("./avatar-favicon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/index.ts" }
    ],
    [
      5190,
      {
        "../../../helpers/constants/design-system": 5537,
        "../avatar-base": 5186,
        "../icon": 5241,
        "./avatar-icon.types": 5191,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarIcon = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../icon"),
                  s = e("../avatar-base"),
                  l = e("./avatar-icon.types");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarIcon = r.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarIconSize.Md,
                      color: t = o.TextColor.primaryDefault,
                      backgroundColor: n = o.BackgroundColor.primaryMuted,
                      className: c = "",
                      iconProps: d,
                      iconName: p,
                      ...f
                    },
                    m
                  ) => {
                    const h = l.avatarIconSizeToIconSize[e];
                    return r.default.createElement(
                      s.AvatarBase,
                      u(
                        {
                          ref: m,
                          size: e,
                          display: o.Display.Flex,
                          alignItems: o.AlignItems.center,
                          justifyContent: o.JustifyContent.center,
                          color: t,
                          backgroundColor: n,
                          borderColor: o.BorderColor.transparent,
                          className: (0, a.default)("mm-avatar-icon", c)
                        },
                        f
                      ),
                      r.default.createElement(i.Icon, u({ color: o.IconColor.inherit, name: p, size: h }, d))
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/avatar-icon.tsx" }
    ],
    [
      5191,
      { "../icon": 5241 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.avatarIconSizeToIconSize = n.AvatarIconSize = void 0);
                var r = e("../icon");
                let a = (n.AvatarIconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({}));
                n.avatarIconSizeToIconSize = {
                  [a.Xs]: r.IconSize.Xs,
                  [a.Sm]: r.IconSize.Sm,
                  [a.Md]: r.IconSize.Md,
                  [a.Lg]: r.IconSize.Lg,
                  [a.Xl]: r.IconSize.Xl
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/avatar-icon.types.ts" }
    ],
    [
      5192,
      { "./avatar-icon": 5190, "./avatar-icon.types": 5191 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarIcon", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarIcon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarIconSize;
                    }
                  });
                var r = e("./avatar-icon"),
                  a = e("./avatar-icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/index.ts" }
    ],
    [
      5193,
      {
        "../../../helpers/constants/design-system": 5537,
        "../avatar-base": 5186,
        "./avatar-network.types": 5194,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarNetwork = void 0);
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../avatar-base"),
                  l = e("./avatar-network.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarNetwork = a.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarNetworkSize.Md,
                      name: t,
                      src: n,
                      showHalo: r,
                      color: c = i.TextColor.textDefault,
                      backgroundColor: d = i.BackgroundColor.backgroundAlternative,
                      borderColor: p = i.BorderColor.transparent,
                      className: f = "",
                      ...m
                    },
                    h
                  ) => {
                    const [y, g] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      g(!n);
                    }, [n]);
                    const b = (null == t ? void 0 : t[0]) ?? "?";
                    return a.default.createElement(
                      s.AvatarBase,
                      u(
                        {
                          ref: h,
                          size: e,
                          display: i.Display.Flex,
                          alignItems: i.AlignItems.center,
                          justifyContent: i.JustifyContent.center,
                          className: (0, o.default)("mm-avatar-network", r ? "mm-avatar-network--with-halo" : "", f),
                          backgroundColor: d,
                          borderColor: p,
                          color: c
                        },
                        m
                      ),
                      y
                        ? b
                        : a.default.createElement(
                            a.default.Fragment,
                            null,
                            r &&
                              a.default.createElement("img", {
                                src: n,
                                className: r ? "mm-avatar-network__network-image--blurred" : "",
                                "aria-hidden": "true"
                              }),
                            a.default.createElement("img", {
                              className: r ? "mm-avatar-network__network-image--size-reduced" : "mm-avatar-network__network-image",
                              onError: () => {
                                g(!0);
                              },
                              src: n,
                              alt: `${t} logo` || "network logo"
                            })
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/avatar-network.tsx" }
    ],
    [
      5194,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarNetworkSize = void 0);
                n.AvatarNetworkSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/avatar-network.types.ts" }
    ],
    [
      5195,
      { "./avatar-network": 5193, "./avatar-network.types": 5194 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarNetwork", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarNetwork;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetworkSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarNetworkSize;
                    }
                  });
                var r = e("./avatar-network"),
                  a = e("./avatar-network.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/index.ts" }
    ],
    [
      5196,
      {
        "../../../helpers/constants/design-system": 5537,
        "../avatar-base": 5186,
        "./avatar-token.types": 5197,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarToken = void 0);
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../avatar-base"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("./avatar-token.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarToken = a.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarTokenSize.Md,
                      name: t,
                      src: n,
                      showHalo: r,
                      color: c = s.TextColor.textDefault,
                      backgroundColor: d = s.BackgroundColor.backgroundAlternative,
                      borderColor: p = s.BorderColor.transparent,
                      className: f = "",
                      ...m
                    },
                    h
                  ) => {
                    const [y, g] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      g(!n);
                    }, [n]);
                    const b = (null == t ? void 0 : t[0]) ?? "?";
                    return a.default.createElement(
                      i.AvatarBase,
                      u(
                        {
                          ref: h,
                          size: e,
                          display: s.Display.Flex,
                          alignItems: s.AlignItems.center,
                          justifyContent: s.JustifyContent.center,
                          className: (0, o.default)("mm-avatar-token", r ? "mm-avatar-token--with-halo" : "", f),
                          backgroundColor: d,
                          borderColor: p,
                          color: c
                        },
                        m
                      ),
                      y
                        ? b
                        : a.default.createElement(
                            a.default.Fragment,
                            null,
                            r &&
                              a.default.createElement("img", {
                                src: n,
                                className: r ? "mm-avatar-token__token-image--blurred" : "",
                                "aria-hidden": "true"
                              }),
                            a.default.createElement("img", {
                              className: r ? "mm-avatar-token__token-image--size-reduced" : "mm-avatar-token__token-image",
                              onError: () => {
                                g(!0);
                              },
                              src: n,
                              alt: `${t} logo` || "token logo"
                            })
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/avatar-token.tsx" }
    ],
    [
      5197,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarTokenSize = void 0);
                n.AvatarTokenSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/avatar-token.types.ts" }
    ],
    [
      5198,
      { "./avatar-token": 5196, "./avatar-token.types": 5197 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarToken", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarToken;
                    }
                  }),
                  Object.defineProperty(n, "AvatarTokenSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarTokenSize;
                    }
                  });
                var r = e("./avatar-token"),
                  a = e("./avatar-token.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/index.ts" }
    ],
    [
      5199,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./badge-wrapper.types": 5200, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BadgeWrapper = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("./badge-wrapper.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BadgeWrapper = r.default.forwardRef(
                  (
                    {
                      children: e,
                      badge: t,
                      badgeContainerProps: n,
                      position: l = s.BadgeWrapperPosition.topRight,
                      positionObj: u,
                      anchorElementShape: d = s.BadgeWrapperAnchorElementShape.circular,
                      className: p = "",
                      ...f
                    },
                    m
                  ) =>
                    r.default.createElement(
                      i.Box,
                      c({ className: (0, a.default)("mm-badge-wrapper", p), ref: m, display: o.Display.InlineBlock }, f),
                      e,
                      r.default.createElement(
                        i.Box,
                        c(
                          {
                            className: (0, a.default)("mm-badge-wrapper__badge-container", {
                              [`mm-badge-wrapper__badge-container--${d}-${l}`]: !u
                            }),
                            style: { ...u }
                          },
                          n
                        ),
                        t
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/badge-wrapper.tsx" }
    ],
    [
      5200,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BadgeWrapperPosition = n.BadgeWrapperAnchorElementShape = void 0);
                (n.BadgeWrapperPosition = (function (e) {
                  return (
                    (e.topRight = "top-right"),
                    (e.bottomRight = "bottom-right"),
                    (e.topLeft = "top-left"),
                    (e.bottomLeft = "bottom-left"),
                    e
                  );
                })({})),
                  (n.BadgeWrapperAnchorElementShape = (function (e) {
                    return (e.rectangular = "rectangular"), (e.circular = "circular"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/badge-wrapper.types.ts" }
    ],
    [
      5201,
      { "./badge-wrapper": 5199, "./badge-wrapper.types": 5200 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BadgeWrapper", {
                    enumerable: !0,
                    get: function () {
                      return r.BadgeWrapper;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperAnchorElementShape", {
                    enumerable: !0,
                    get: function () {
                      return a.BadgeWrapperAnchorElementShape;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperPosition", {
                    enumerable: !0,
                    get: function () {
                      return a.BadgeWrapperPosition;
                    }
                  });
                var r = e("./badge-wrapper"),
                  a = e("./badge-wrapper.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/index.ts" }
    ],
    [
      5202,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./banner-alert.types": 5203, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerAlert = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./banner-alert.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerAlert = r.default.forwardRef(
                  ({ children: e, className: t = "", severity: n = s.BannerAlertSeverity.Info, ...l }, u) =>
                    r.default.createElement(
                      o.BannerBase,
                      c(
                        {
                          ref: u,
                          startAccessory: r.default.createElement(
                            o.Icon,
                            c(
                              { size: o.IconSize.Lg },
                              (() => {
                                switch (n) {
                                  case s.BannerAlertSeverity.Danger:
                                    return { name: o.IconName.Danger, color: i.IconColor.errorDefault };
                                  case s.BannerAlertSeverity.Warning:
                                    return { name: o.IconName.Danger, color: i.IconColor.warningDefault };
                                  case s.BannerAlertSeverity.Success:
                                    return { name: o.IconName.Confirmation, color: i.IconColor.successDefault };
                                  default:
                                    return { name: o.IconName.Info, color: i.IconColor.primaryDefault };
                                }
                              })()
                            )
                          ),
                          backgroundColor: (() => {
                            switch (n) {
                              case s.BannerAlertSeverity.Danger:
                                return i.BackgroundColor.errorMuted;
                              case s.BannerAlertSeverity.Warning:
                                return i.BackgroundColor.warningMuted;
                              case s.BannerAlertSeverity.Success:
                                return i.BackgroundColor.successMuted;
                              default:
                                return i.BackgroundColor.primaryMuted;
                            }
                          })(),
                          paddingLeft: 2,
                          className: (0, a.default)(
                            "mm-banner-alert",
                            { [`mm-banner-alert--severity-${n}`]: Object.values(s.BannerAlertSeverity).includes(n) },
                            t
                          )
                        },
                        l
                      ),
                      e
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/banner-alert.tsx" }
    ],
    [
      5203,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerAlertSeverity = void 0);
                n.BannerAlertSeverity = (function (e) {
                  return (e.Danger = "danger"), (e.Info = "info"), (e.Success = "success"), (e.Warning = "warning"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/banner-alert.types.ts" }
    ],
    [
      5204,
      { "./banner-alert": 5202, "./banner-alert.types": 5203 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerAlert", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerAlert;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlertSeverity", {
                    enumerable: !0,
                    get: function () {
                      return a.BannerAlertSeverity;
                    }
                  });
                var r = e("./banner-alert"),
                  a = e("./banner-alert.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/index.ts" }
    ],
    [
      5205,
      {
        "..": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../hooks/useI18nContext"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("..");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerBase = r.default.forwardRef(
                  (
                    {
                      className: e = "",
                      title: t,
                      titleProps: n,
                      description: l,
                      descriptionProps: u,
                      children: d,
                      childrenWrapperProps: p,
                      actionButtonLabel: f,
                      actionButtonOnClick: m,
                      actionButtonProps: h,
                      startAccessory: y,
                      onClose: g,
                      closeButtonProps: b,
                      ...v
                    },
                    T
                  ) => {
                    const E = (0, o.useI18nContext)();
                    return r.default.createElement(
                      s.Box,
                      c(
                        {
                          className: (0, a.default)("mm-banner-base", e),
                          ref: T,
                          display: i.Display.Flex,
                          gap: 2,
                          backgroundColor: i.BackgroundColor.backgroundDefault,
                          borderRadius: i.BorderRadius.SM,
                          padding: 3
                        },
                        v
                      ),
                      y && r.default.createElement(r.default.Fragment, null, y),
                      r.default.createElement(
                        s.Box,
                        { minWidth: i.BlockSize.Zero },
                        t && r.default.createElement(s.Text, c({ variant: i.TextVariant.bodyLgMedium }, n), t),
                        l && r.default.createElement(s.Text, u, l),
                        d && "object" == typeof d ? d : r.default.createElement(s.Text, p, d),
                        f && r.default.createElement(s.ButtonLink, c({ size: s.ButtonLinkSize.Auto, onClick: m }, h), f)
                      ),
                      g &&
                        r.default.createElement(
                          s.ButtonIcon,
                          c(
                            {
                              className: "mm-banner-base__close-button",
                              marginLeft: "auto",
                              iconName: s.IconName.Close,
                              size: s.ButtonIconSize.Sm,
                              ariaLabel: E("close"),
                              onClick: g
                            },
                            b
                          )
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-base/banner-base.tsx" }
    ],
    [
      5206,
      { "./banner-base": 5205 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerBase", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerBase;
                    }
                  });
                var r = e("./banner-base");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-base/index.ts" }
    ],
    [
      5207,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./banner-tip.types": 5208, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerTip = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("./banner-tip.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerTip = r.default.forwardRef(
                  (
                    {
                      children: e,
                      className: t = "",
                      logoType: n = s.BannerTipLogoType.Greeting,
                      logoWrapperProps: l,
                      logoProps: u,
                      startAccessory: d,
                      ...p
                    },
                    f
                  ) =>
                    r.default.createElement(
                      i.BannerBase,
                      c(
                        {
                          ref: f,
                          startAccessory:
                            d ||
                            r.default.createElement(
                              i.Box,
                              c({ display: o.Display.Flex, alignItems: o.AlignItems.center }, l),
                              r.default.createElement(
                                i.Box,
                                c({ as: "img", src: `images/fox-${n}.png`, alt: n }, u, {
                                  className: (0, a.default)("mm-banner-tip--logo", (null == u ? void 0 : u.className) ?? "")
                                })
                              )
                            ),
                          borderColor: o.BorderColor.borderDefault,
                          className: (0, a.default)("mm-banner-tip", t)
                        },
                        p
                      ),
                      e
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/banner-tip.tsx" }
    ],
    [
      5208,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerTipLogoType = void 0);
                n.BannerTipLogoType = (function (e) {
                  return (e.Greeting = "greeting"), (e.Chat = "chat"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/banner-tip.types.ts" }
    ],
    [
      5209,
      { "./banner-tip": 5207, "./banner-tip.types": 5208 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerTip", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerTip;
                    }
                  }),
                  Object.defineProperty(n, "BannerTipLogoType", {
                    enumerable: !0,
                    get: function () {
                      return a.BannerTipLogoType;
                    }
                  });
                var r = e("./banner-tip"),
                  a = e("./banner-tip.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/index.ts" }
    ],
    [
      5210,
      { "../../../helpers/constants/design-system": 5537, classnames: 2952, lodash: 4071, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Box = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("lodash"),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                const c = "mm-box";
                function u(e, t) {
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
                function d(e, t) {
                  return "string" == typeof e && "string" == typeof t;
                }
                const p = (0, o.memoize)(
                  (e, t, n) => {
                    if (!t && "number" != typeof t) return {};
                    const r = {},
                      a = Array.isArray(t) && 1 === t.length ? t[0] : undefined,
                      o = (!Array.isArray(t) && "string" == typeof t) || "number" == typeof t ? t : undefined;
                    let s;
                    if (((o || 0 === o) && (s = o), (a || 0 === a) && (s = a), s || 0 === s)) r[`${c}--${e}-${s}`] = n(e, s);
                    else if (Array.isArray(t))
                      switch (t.length) {
                        case 4:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])),
                            (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1])),
                            (r[`${c}--${i.BREAKPOINTS[2]}:${e}-${t[2]}`] = n(e, t[2])),
                            (r[`${c}--${i.BREAKPOINTS[3]}:${e}-${t[3]}`] = n(e, t[3]));
                          break;
                        case 3:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])),
                            (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1])),
                            (r[`${c}--${i.BREAKPOINTS[2]}:${e}-${t[2]}`] = n(e, t[2]));
                          break;
                        case 2:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])), (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1]));
                          break;
                        default:
                          console.log(`Invalid array prop length: ${t.length}`);
                      }
                    return r;
                  },
                  (e, t) => `${e}${t}`
                );
                n.Box = r.default.forwardRef(
                  (
                    {
                      as: e,
                      padding: t,
                      paddingTop: n,
                      paddingRight: o,
                      paddingBottom: i,
                      paddingLeft: s,
                      paddingInline: f,
                      paddingInlineStart: m,
                      paddingInlineEnd: h,
                      margin: y,
                      marginTop: g,
                      marginRight: b,
                      marginBottom: v,
                      marginLeft: T,
                      marginInline: E,
                      marginInlineStart: w,
                      marginInlineEnd: O,
                      borderColor: _,
                      borderWidth: x,
                      borderRadius: k,
                      borderStyle: S,
                      alignItems: C,
                      justifyContent: A,
                      textAlign: N,
                      flexDirection: I,
                      flexWrap: P,
                      gap: M,
                      display: j,
                      width: B,
                      minWidth: R,
                      height: D,
                      children: L,
                      className: F = "",
                      backgroundColor: $,
                      color: z,
                      ...U
                    },
                    V
                  ) => {
                    const W = e || "div",
                      H = (0, a.default)(
                        c,
                        F,
                        p("margin", y, u),
                        p("margin-top", g, u),
                        p("margin-right", b, u),
                        p("margin-bottom", v, u),
                        p("margin-left", T, u),
                        p("margin-inline", E, u),
                        p("margin-inline-start", w, u),
                        p("margin-inline-end", O, u),
                        p("padding", t, u),
                        p("padding-top", n, u),
                        p("padding-right", o, u),
                        p("padding-bottom", i, u),
                        p("padding-left", s, u),
                        p("padding-inline", f, u),
                        p("padding-inline-start", m, u),
                        p("padding-inline-end", h, u),
                        p("display", j, d),
                        p("gap", M, u),
                        p("flex-direction", I, d),
                        p("flex-wrap", P, d),
                        p("justify-content", A, d),
                        p("align-items", C, d),
                        p("text-align", N, d),
                        p("width", B, d),
                        p("min-width", R, d),
                        p("height", D, d),
                        p("color", z, d),
                        p("background-color", $, d),
                        p("rounded", k, d),
                        p("border-style", S, d),
                        p("border-color", _, d),
                        p("border-width", x, u),
                        { "box--border-style-solid": !S && (Boolean(x) || Boolean(_)), "box--border-width-1": !x && Boolean(_) }
                      );
                    return r.default.createElement(W, l({ className: H, ref: V }, U), L);
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/box/box.tsx" }
    ],
    [
      5211,
      { "./box": 5210 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Box", {
                    enumerable: !0,
                    get: function () {
                      return r.Box;
                    }
                  });
                var r = e("./box");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/box/index.ts" }
    ],
    [
      5212,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./button-base.types": 5213, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-base.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonBase = r.default.forwardRef(
                  (
                    {
                      as: e,
                      block: t,
                      children: n,
                      className: l = "",
                      href: u,
                      ellipsis: d = !1,
                      externalLink: p,
                      size: f = s.ButtonBaseSize.Md,
                      startIconName: m,
                      startIconProps: h,
                      endIconName: y,
                      endIconProps: g,
                      loading: b,
                      disabled: v,
                      iconLoadingProps: T,
                      textProps: E,
                      color: w = i.TextColor.textDefault,
                      iconColor: O = i.IconColor.iconDefault,
                      ..._
                    },
                    x
                  ) => {
                    const k = u ? "a" : e || "button",
                      S = u && "a" === k ? { href: u, ..._ } : _;
                    return r.default.createElement(
                      o.Text,
                      c(
                        {
                          as: k,
                          backgroundColor: i.BackgroundColor.backgroundAlternative,
                          variant: i.TextVariant.bodyMdMedium,
                          color: b ? i.TextColor.transparent : w,
                          ref: x
                        },
                        "button" === k ? { disabled: v } : {},
                        u && p ? { target: "_blank", rel: "noopener noreferrer" } : {},
                        {
                          padding: 0,
                          paddingLeft: 4,
                          paddingRight: 4,
                          ellipsis: d,
                          className: (0, a.default)(
                            "mm-button-base",
                            {
                              [`mm-button-base--size-${f}`]: Object.values(s.ButtonBaseSize).includes(f),
                              "mm-button-base--loading": b || !1,
                              "mm-button-base--disabled": v || !1,
                              "mm-button-base--block": t || !1,
                              "mm-button-base--ellipsis": d
                            },
                            l
                          ),
                          display: i.Display.InlineFlex,
                          justifyContent: i.JustifyContent.center,
                          alignItems: i.AlignItems.center,
                          borderRadius: i.BorderRadius.pill
                        },
                        S
                      ),
                      m &&
                        r.default.createElement(
                          o.Icon,
                          c({ name: m, size: o.IconSize.Sm, marginInlineEnd: 1 }, h, {
                            color: b ? i.IconColor.transparent : null == h ? void 0 : h.color
                          })
                        ),
                      "string" != typeof n || d || b
                        ? r.default.createElement(
                            o.Text,
                            c({ as: "span", ellipsis: d, variant: i.TextVariant.inherit, color: b ? i.TextColor.transparent : w }, E),
                            n
                          )
                        : n,
                      y &&
                        r.default.createElement(
                          o.Icon,
                          c({ name: y, size: o.IconSize.Sm, marginInlineStart: 1 }, g, {
                            color: b ? i.IconColor.transparent : null == g ? void 0 : g.color
                          })
                        ),
                      b &&
                        r.default.createElement(
                          o.Icon,
                          c({ className: "mm-button-base__icon-loading", name: o.IconName.Loading, color: O, size: o.IconSize.Md }, T)
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/button-base.tsx" }
    ],
    [
      5213,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonBaseSize = void 0);
                n.ButtonBaseSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/button-base.types.ts" }
    ],
    [
      5214,
      { "./button-base": 5212, "./button-base.types": 5213 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonBase", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonBase;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonBaseSize;
                    }
                  });
                var r = e("./button-base"),
                  a = e("./button-base.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/index.ts" }
    ],
    [
      5215,
      {
        "..": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../icon": 5241,
        "./button-icon.types": 5216,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonIcon = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("../icon"),
                  l = e("./button-icon.types");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = {
                  [l.ButtonIconSize.Sm]: s.IconSize.Sm,
                  [l.ButtonIconSize.Md]: s.IconSize.Md,
                  [l.ButtonIconSize.Lg]: s.IconSize.Lg
                };
                n.ButtonIcon = r.default.forwardRef(
                  (
                    {
                      ariaLabel: e,
                      as: t,
                      className: n = "",
                      color: s = o.IconColor.iconDefault,
                      href: c,
                      size: p = l.ButtonIconSize.Lg,
                      iconName: f,
                      disabled: m,
                      iconProps: h,
                      ...y
                    },
                    g
                  ) => {
                    const b = c ? "a" : t || "button",
                      v = m && "button" === b;
                    return r.default.createElement(
                      i.Box,
                      u(
                        {
                          "aria-label": e,
                          as: b,
                          className: (0, a.default)(
                            "mm-button-icon",
                            `mm-button-icon--size-${String(p)}`,
                            { "mm-button-icon--disabled": Boolean(m) },
                            n
                          ),
                          color: s
                        },
                        v ? { disabled: !0 } : {},
                        {
                          display: o.Display.InlineFlex,
                          justifyContent: o.JustifyContent.center,
                          alignItems: o.AlignItems.center,
                          borderRadius: o.BorderRadius.LG,
                          backgroundColor: o.BackgroundColor.transparent
                        },
                        c ? { href: c } : {},
                        { ref: g },
                        y
                      ),
                      r.default.createElement(i.Icon, u({ name: f, size: d[p] }, h))
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/button-icon.tsx" }
    ],
    [
      5216,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonIconSize = void 0);
                n.ButtonIconSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/button-icon.types.ts" }
    ],
    [
      5217,
      { "./button-icon": 5215, "./button-icon.types": 5216 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonIcon", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonIcon;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonIconSize;
                    }
                  });
                var r = e("./button-icon"),
                  a = e("./button-icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/index.ts" }
    ],
    [
      5218,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./button-link.types": 5219, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonLink = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-link.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonLink = r.default.forwardRef(
                  (
                    {
                      className: e = "",
                      color: t,
                      danger: n = !1,
                      disabled: l = !1,
                      loading: u = !1,
                      size: d = s.ButtonLinkSize.Auto,
                      ...p
                    },
                    f
                  ) =>
                    r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          className: (0, a.default)(e, "mm-button-link", {
                            "mm-button-link--type-danger": n,
                            "mm-button-link--disabled": l,
                            "mm-button-link--loading": u,
                            "mm-button-link--size-inherit": d === s.ButtonLinkSize.Inherit,
                            "mm-button-link--size-auto": d === s.ButtonLinkSize.Auto
                          }),
                          paddingLeft: 0,
                          paddingRight: 0,
                          size: d === s.ButtonLinkSize.Inherit ? null : d,
                          backgroundColor: i.BackgroundColor.transparent,
                          color: t || (n ? i.Color.errorDefault : i.Color.primaryDefault),
                          borderRadius: null,
                          startIconProps: { size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Sm },
                          endIconProps: { size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Sm },
                          iconLoadingProps: {
                            size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Md,
                            color: t || (n ? i.Color.errorDefault : i.Color.primaryDefault)
                          },
                          ref: f,
                          disabled: l,
                          loading: u
                        },
                        p
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/button-link.tsx" }
    ],
    [
      5219,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonLinkSize = void 0);
                n.ButtonLinkSize = (function (e) {
                  return (e.Auto = "auto"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Inherit = "inherit"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/button-link.types.ts" }
    ],
    [
      5220,
      { "./button-link": 5218, "./button-link.types": 5219 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonLink", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonLink;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLinkSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonLinkSize;
                    }
                  });
                var r = e("./button-link"),
                  a = e("./button-link.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/index.ts" }
    ],
    [
      5221,
      {
        "../../../helpers/constants/design-system": 5537,
        "../button-base": 5214,
        "./button-primary.types": 5222,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonPrimary = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../button-base"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-primary.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonPrimary = r.default.forwardRef(
                  ({ className: e = "", danger: t = !1, disabled: n = !1, size: l = s.ButtonPrimarySize.Md, ...u }, d) =>
                    r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          backgroundColor: t ? i.BackgroundColor.errorDefault : i.BackgroundColor.primaryDefault,
                          color: t ? i.TextColor.errorInverse : i.TextColor.primaryInverse,
                          className: (0, a.default)(e, "mm-button-primary", {
                            "mm-button-primary--type-danger": t,
                            "mm-button-primary--disabled": n
                          }),
                          iconLoadingProps: { color: t ? i.IconColor.errorInverse : i.IconColor.primaryInverse },
                          size: l,
                          ref: d,
                          disabled: n
                        },
                        u
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/button-primary.tsx" }
    ],
    [
      5222,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonPrimarySize = void 0);
                n.ButtonPrimarySize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/button-primary.types.ts" }
    ],
    [
      5223,
      { "./button-primary": 5221, "./button-primary.types": 5222 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonPrimary", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonPrimary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimarySize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonPrimarySize;
                    }
                  });
                var r = e("./button-primary"),
                  a = e("./button-primary.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/index.ts" }
    ],
    [
      5224,
      {
        "../../../helpers/constants/design-system": 5537,
        "../button-base": 5214,
        "./button-secondary.types": 5225,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonSecondary = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../button-base"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-secondary.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonSecondary = r.default.forwardRef(
                  ({ className: e = "", danger: t = !1, disabled: n = !1, size: l = s.ButtonSecondarySize.Md, ...u }, d) => {
                    const p = t ? i.Color.errorDefault : i.Color.primaryDefault;
                    return r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          backgroundColor: i.Color.transparent,
                          borderColor: p,
                          color: p,
                          className: (0, a.default)(e, "mm-button-secondary", {
                            "mm-button-secondary--type-danger": t,
                            "mm-button-secondary--disabled": n
                          }),
                          size: l,
                          ref: d,
                          disabled: n
                        },
                        u
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/button-secondary.tsx" }
    ],
    [
      5225,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonSecondarySize = void 0);
                n.ButtonSecondarySize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/button-secondary.types.ts" }
    ],
    [
      5226,
      { "./button-secondary": 5224, "./button-secondary.types": 5225 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonSecondary", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonSecondary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondarySize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonSecondarySize;
                    }
                  });
                var r = e("./button-secondary"),
                  a = e("./button-secondary.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/index.ts" }
    ],
    [
      5227,
      { "../button-link": 5220, "../button-primary": 5223, "../button-secondary": 5226, "./button.types": 5228, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Button = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../button-primary"),
                  i = e("../button-secondary"),
                  s = e("../button-link"),
                  l = e("./button.types");
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Button = a.default.forwardRef(({ variant: e, ...t }, n) => {
                  switch (e) {
                    case l.ButtonVariant.Primary:
                      return a.default.createElement(o.ButtonPrimary, c({ ref: n }, t));
                    case l.ButtonVariant.Secondary:
                      return a.default.createElement(i.ButtonSecondary, c({ ref: n }, t));
                    case l.ButtonVariant.Link:
                      return a.default.createElement(s.ButtonLink, c({ ref: n }, t));
                    default:
                      return a.default.createElement(o.ButtonPrimary, c({ ref: n }, t));
                  }
                });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/button.tsx" }
    ],
    [
      5228,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonVariant = n.ButtonSize = void 0);
                (n.ButtonSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Inherit = "inherit"), (e.Auto = "auto"), e;
                })({})),
                  (n.ButtonVariant = (function (e) {
                    return (e.Primary = "primary"), (e.Secondary = "secondary"), (e.Link = "link"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/button.types.ts" }
    ],
    [
      5229,
      { "../../../helpers/constants/design-system": 5537, "./button": 5227, "./button.types": 5228 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.BUTTON_VARIANT = n.BUTTON_SIZES = void 0),
                  Object.defineProperty(n, "Button", {
                    enumerable: !0,
                    get: function () {
                      return a.Button;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSize", {
                    enumerable: !0,
                    get: function () {
                      return o.ButtonSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonVariant", {
                    enumerable: !0,
                    get: function () {
                      return o.ButtonVariant;
                    }
                  });
                var r = e("../../../helpers/constants/design-system"),
                  a = e("./button"),
                  o = e("./button.types");
                (n.BUTTON_SIZES = { SM: r.Size.SM, MD: r.Size.MD, LG: r.Size.LG, INHERIT: r.Size.inherit, AUTO: r.Size.auto }),
                  (n.BUTTON_VARIANT = { PRIMARY: "primary", SECONDARY: "secondary", LINK: "link" });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/index.ts" }
    ],
    [
      5230,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Checkbox = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.Checkbox = r.default.forwardRef(
                  (
                    {
                      id: e,
                      isChecked: t,
                      isIndeterminate: n,
                      isDisabled: s,
                      isReadOnly: c,
                      isRequired: u,
                      onChange: d,
                      className: p = "",
                      iconProps: f,
                      inputProps: m,
                      inputRef: h,
                      title: y,
                      name: g,
                      label: b,
                      ...v
                    },
                    T
                  ) => {
                    const E = y || "string" != typeof b ? y || e : b;
                    return r.default.createElement(
                      i.Text,
                      l(
                        {
                          className: (0, a.default)("mm-checkbox", p, { "mm-checkbox--disabled": Boolean(s) }),
                          as: "label",
                          display: o.Display.InlineFlex,
                          alignItems: o.AlignItems.center,
                          ref: T,
                          htmlFor: e
                        },
                        v
                      ),
                      r.default.createElement(
                        "span",
                        { className: "mm-checkbox__input-wrapper" },
                        r.default.createElement(
                          i.Box,
                          l(
                            {
                              as: "input",
                              type: "checkbox",
                              title: E,
                              name: g,
                              id: e,
                              checked: t,
                              disabled: s,
                              readOnly: c,
                              required: u,
                              "data-indeterminate": n,
                              onChange: (e) => {
                                c ? e.preventDefault() : null == d || d(e);
                              },
                              onKeyDown: (e) => {
                                "Enter" === e.key && (null == d || d(e));
                              },
                              margin: 0,
                              marginRight: b ? 2 : 0,
                              backgroundColor: t || n ? o.BackgroundColor.primaryDefault : o.BackgroundColor.transparent,
                              borderColor: t || n ? o.BorderColor.primaryDefault : o.BorderColor.borderDefault,
                              borderRadius: o.BorderRadius.SM,
                              borderWidth: 2,
                              display: o.Display.Flex,
                              ref: h
                            },
                            m,
                            {
                              className: (0, a.default)("mm-checkbox__input", (null == m ? void 0 : m.className) ?? "", {
                                "mm-checkbox__input--checked": Boolean(t),
                                "mm-checkbox__input--indeterminate": Boolean(n),
                                "mm-checkbox__input--readonly": Boolean(c)
                              })
                            }
                          )
                        ),
                        (t || n) &&
                          r.default.createElement(
                            i.Icon,
                            l(
                              {
                                color: o.IconColor.primaryInverse,
                                name: t ? i.IconName.CheckBold : i.IconName.MinusBold,
                                className: (0, a.default)("mm-checkbox__icon", (null == f ? void 0 : f.className) ?? "")
                              },
                              f
                            )
                          )
                      ),
                      b ? r.default.createElement("span", null, b) : null
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/checkbox/checkbox.tsx" }
    ],
    [
      5231,
      { "./checkbox": 5230 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Checkbox", {
                    enumerable: !0,
                    get: function () {
                      return r.Checkbox;
                    }
                  });
                var r = e("./checkbox");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/checkbox/index.ts" }
    ],
    [
      5232,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../ui/box/box": 5372,
        "../help-text": 5238,
        "../label": 5246,
        "../text-field": 5273,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.FormTextField = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = d(e("../../ui/box/box")),
                  l = e("../text-field"),
                  c = e("../help-text"),
                  u = e("../label");
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
                const f = ({
                  autoComplete: e,
                  autoFocus: t,
                  className: n,
                  defaultValue: a,
                  disabled: d,
                  error: f,
                  helpText: m,
                  helpTextProps: h,
                  id: y,
                  inputProps: g,
                  inputRef: b,
                  label: v,
                  labelProps: T,
                  startAccessory: E,
                  maxLength: w,
                  name: O,
                  onBlur: _,
                  onChange: x,
                  onFocus: k,
                  placeholder: S,
                  readOnly: C,
                  required: A,
                  endAccessory: N,
                  size: I = i.Size.MD,
                  textFieldProps: P,
                  truncate: M,
                  type: j = "text",
                  value: B,
                  ...R
                }) =>
                  r.default.createElement(
                    s.default,
                    p(
                      {
                        className: (0, o.default)("mm-form-text-field", { "mm-form-text-field--disabled": d }, n),
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      R
                    ),
                    v &&
                      r.default.createElement(
                        u.Label,
                        p({ htmlFor: y }, T, { className: (0, o.default)("mm-form-text-field__label", null == T ? void 0 : T.className) }),
                        v
                      ),
                    r.default.createElement(
                      l.TextField,
                      p(
                        {
                          className: (0, o.default)("mm-form-text-field__text-field", null == P ? void 0 : P.className),
                          id: y,
                          autoComplete: e,
                          autoFocus: t,
                          defaultValue: a,
                          disabled: d,
                          error: f,
                          id: y,
                          inputProps: g,
                          inputRef: b,
                          startAccessory: E,
                          maxLength: w,
                          name: O,
                          onBlur: _,
                          onChange: x,
                          onFocus: k,
                          placeholder: S,
                          readOnly: C,
                          required: A,
                          endAccessory: N,
                          size: I,
                          truncate: M,
                          type: j,
                          value: B
                        },
                        P
                      )
                    ),
                    m &&
                      r.default.createElement(
                        c.HelpText,
                        p({ severity: f && c.HelpTextSeverity.Danger, marginTop: 1 }, h, {
                          className: (0, o.default)("mm-form-text-field__help-text", null == h ? void 0 : h.className)
                        }),
                        m
                      )
                  );
                (n.FormTextField = f),
                  (f.propTypes = {
                    className: a.default.string,
                    id: (e, t, n) =>
                      e.label && !e[t]
                        ? new Error(
                            `If a label prop exists you must provide an ${t} prop for the label's htmlFor attribute for accessibility. Warning coming from ${n} ui/components/component-library/form-text-field/form-text-field.js`
                          )
                        : null,
                    label: a.default.string,
                    labelProps: a.default.object,
                    helpText: a.default.string,
                    helpTextProps: a.default.object,
                    textFieldProps: a.default.object,
                    ...l.TextField.propTypes
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/form-text-field/form-text-field.js" }
    ],
    [
      5233,
      { "./form-text-field": 5232 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "FormTextField", {
                    enumerable: !0,
                    get: function () {
                      return r.FormTextField;
                    }
                  });
                var r = e("./form-text-field");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/form-text-field/index.js" }
    ],
    [
      5234,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HeaderBase = void 0);
                var r,
                  a = (function (e, t) {
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("..");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.HeaderBase = a.default.forwardRef(
                  (
                    {
                      startAccessory: e,
                      endAccessory: t,
                      className: n = "",
                      children: r,
                      childrenWrapperProps: l,
                      startAccessoryWrapperProps: u,
                      endAccessoryWrapperProps: d,
                      ...p
                    },
                    f
                  ) => {
                    const m = (0, a.useRef)(null),
                      h = (0, a.useRef)(null),
                      [y, g] = (0, a.useState)();
                    (0, a.useEffect)(() => {
                      function e() {
                        if (m.current && h.current) {
                          const e = Math.max(m.current.scrollWidth, h.current.scrollWidth);
                          g(e);
                        } else
                          m.current && !h.current ? g(m.current.scrollWidth) : !m.current && h.current ? g(h.current.scrollWidth) : g(0);
                      }
                      return (
                        e(),
                        window.addEventListener("resize", e),
                        () => {
                          window.removeEventListener("resize", e);
                        }
                      );
                    }, [m, h, r]);
                    const b = (0, a.useMemo)(
                      () =>
                        e && !t && y
                          ? { marginRight: `${y}px`, width: `calc(100% - ${2 * y}px)` }
                          : !e && t && y
                          ? { marginLeft: `${y}px`, width: `calc(100% - ${2 * y}px)` }
                          : e && t && y
                          ? { width: `calc(100% - ${2 * y}px)` }
                          : {},
                      [y, e, t]
                    );
                    return a.default.createElement(
                      s.Box,
                      c(
                        {
                          className: (0, o.default)("mm-header-base", n),
                          ref: f,
                          display: i.Display.Flex,
                          justifyContent: i.JustifyContent.spaceBetween
                        },
                        p
                      ),
                      e && a.default.createElement(s.Box, c({ ref: m, style: r ? { minWidth: `${y}px` } : undefined }, u), e),
                      r && a.default.createElement(s.Box, c({ style: b }, l), r),
                      t &&
                        a.default.createElement(
                          s.Box,
                          c(
                            {
                              display: i.Display.Flex,
                              justifyContent: i.JustifyContent.flexEnd,
                              ref: h,
                              style: r ? { minWidth: `${y}px` } : undefined
                            },
                            d
                          ),
                          t
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/header-base/header-base.tsx" }
    ],
    [
      5235,
      { "./header-base": 5234 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "HeaderBase", {
                    enumerable: !0,
                    get: function () {
                      return r.HeaderBase;
                    }
                  });
                var r = e("./header-base");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/header-base/index.ts" }
    ],
    [
      5236,
      { ".": 5238, "../../../helpers/constants/design-system": 5537, "../text": 5276, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HelpText = void 0);
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../text"),
                  l = e(".");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.HelpText = (0, a.forwardRef)(({ severity: e, color: t = i.TextColor.textDefault, className: n, children: r, ...c }, d) =>
                  a.default.createElement(
                    s.Text,
                    u(
                      {
                        className: (0, o.default)("mm-help-text", n ?? ""),
                        ref: d,
                        as: r && "object" == typeof r ? "div" : "p",
                        variant: i.TextVariant.bodyXs,
                        color: e
                          ? (() => {
                              switch (e) {
                                case l.HelpTextSeverity.Danger:
                                  return i.TextColor.errorDefault;
                                case l.HelpTextSeverity.Warning:
                                  return i.TextColor.warningDefault;
                                case l.HelpTextSeverity.Success:
                                  return i.TextColor.successDefault;
                                case l.HelpTextSeverity.Info:
                                  return i.TextColor.infoDefault;
                                default:
                                  return i.TextColor.textDefault;
                              }
                            })()
                          : t
                      },
                      c
                    ),
                    r
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/help-text.tsx" }
    ],
    [
      5237,
      { "../../../helpers/constants/design-system": 5537 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HelpTextSeverity = void 0);
                var r = e("../../../helpers/constants/design-system");
                n.HelpTextSeverity = (function (e) {
                  return (
                    (e[(e.Danger = r.Severity.Danger)] = "Danger"),
                    (e[(e.Warning = r.Severity.Warning)] = "Warning"),
                    (e[(e.Success = r.Severity.Success)] = "Success"),
                    (e[(e.Info = r.Severity.Info)] = "Info"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/help-text.types.ts" }
    ],
    [
      5238,
      { "./help-text": 5236, "./help-text.types": 5237 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "HelpText", {
                    enumerable: !0,
                    get: function () {
                      return r.HelpText;
                    }
                  }),
                  Object.defineProperty(n, "HelpTextSeverity", {
                    enumerable: !0,
                    get: function () {
                      return a.HelpTextSeverity;
                    }
                  });
                var r = e("./help-text"),
                  a = e("./help-text.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/index.ts" }
    ],
    [
      5239,
      { "../../../helpers/constants/design-system": 5537, "../box": 5211, "./icon.types": 5240, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Icon = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../box"),
                  s = e("./icon.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Icon = r.default.forwardRef(
                  ({ name: e, size: t = s.IconSize.Md, color: n = o.IconColor.inherit, className: l = "", style: u, ...d }, p) =>
                    r.default.createElement(
                      i.Box,
                      c(
                        {
                          className: (0, a.default)(l, "mm-icon", `mm-icon--size-${t}`),
                          ref: p,
                          as: "span",
                          display: o.Display.InlineBlock,
                          color: n,
                          style: {
                            maskImage: `url('./images/icons/${String(e)}.svg')`,
                            WebkitMaskImage: `url('./images/icons/${String(e)}.svg')`,
                            ...u
                          }
                        },
                        d
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/icon.tsx" }
    ],
    [
      5240,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.IconSize = n.IconName = void 0);
                (n.IconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), (e.Inherit = "inherit"), e;
                })({})),
                  (n.IconName = (function (e) {
                    return (
                      (e.AddSquare = "add-square"),
                      (e.Add = "add"),
                      (e.Arrow2Down = "arrow-2-down"),
                      (e.Arrow2Left = "arrow-2-left"),
                      (e.Arrow2Right = "arrow-2-right"),
                      (e.Arrow2Up = "arrow-2-up"),
                      (e.Arrow2UpRight = "arrow-2-up-right"),
                      (e.ArrowDoubleLeft = "arrow-double-left"),
                      (e.ArrowDoubleRight = "arrow-double-right"),
                      (e.ArrowDown = "arrow-down"),
                      (e.ArrowLeft = "arrow-left"),
                      (e.ArrowRight = "arrow-right"),
                      (e.ArrowUp = "arrow-up"),
                      (e.BankToken = "bank-token"),
                      (e.Bank = "bank"),
                      (e.Book = "book"),
                      (e.Bookmark = "bookmark"),
                      (e.Bridge = "bridge"),
                      (e.Calculator = "calculator"),
                      (e.CardPos = "card-pos"),
                      (e.CardToken = "card-token"),
                      (e.Card = "card"),
                      (e.Category = "category"),
                      (e.Chart = "chart"),
                      (e.CheckBold = "check-bold"),
                      (e.Check = "check"),
                      (e.Clock = "clock"),
                      (e.Close = "close"),
                      (e.CodeCircle = "code-circle"),
                      (e.Coin = "coin"),
                      (e.Confirmation = "confirmation"),
                      (e.Connect = "connect"),
                      (e.CopySuccess = "copy-success"),
                      (e.Copy = "copy"),
                      (e.Danger = "danger"),
                      (e.Dark = "dark"),
                      (e.Data = "data"),
                      (e.Diagram = "diagram"),
                      (e.DocumentCode = "document-code"),
                      (e.Edit = "edit"),
                      (e.Eraser = "eraser"),
                      (e.Ethereum = "ethereum"),
                      (e.Expand = "expand"),
                      (e.Explore = "explore"),
                      (e.Export = "export"),
                      (e.EyeSlash = "eye-slash"),
                      (e.Eye = "eye"),
                      (e.Filter = "filter"),
                      (e.Flag = "flag"),
                      (e.FlashSlash = "flash-slash"),
                      (e.Flash = "flash"),
                      (e.FullCircle = "full-circle"),
                      (e.Gas = "gas"),
                      (e.GlobalSearch = "global-search"),
                      (e.Global = "global"),
                      (e.Graph = "graph"),
                      (e.Hardware = "hardware"),
                      (e.Heart = "heart"),
                      (e.Hierarchy = "hierarchy"),
                      (e.Home = "home"),
                      (e.Import = "import"),
                      (e.Info = "info"),
                      (e.Key = "key"),
                      (e.Light = "light"),
                      (e.Link = "link"),
                      (e.Loading = "loading"),
                      (e.LockCircle = "lock-circle"),
                      (e.LockSlash = "lock-slash"),
                      (e.Lock = "lock"),
                      (e.Login = "login"),
                      (e.Logout = "logout"),
                      (e.Menu = "menu"),
                      (e.MessageQuestion = "message-question"),
                      (e.Messages = "messages"),
                      (e.MinusBold = "minus-bold"),
                      (e.MinusSquare = "minus-square"),
                      (e.Minus = "minus"),
                      (e.Mobile = "mobile"),
                      (e.Money = "money"),
                      (e.Monitor = "monitor"),
                      (e.MoreHorizontal = "more-horizontal"),
                      (e.MoreVertical = "more-vertical"),
                      (e.NotificationCircle = "notification-circle"),
                      (e.Notification = "notification"),
                      (e.PasswordCheck = "password-check"),
                      (e.People = "people"),
                      (e.ProgrammingArrows = "programming-arrows"),
                      (e.Custody = "custody"),
                      (e.Question = "question"),
                      (e.Received = "received"),
                      (e.Refresh = "refresh"),
                      (e.Save = "save"),
                      (e.ScanBarcode = "scan-barcode"),
                      (e.ScanFocus = "scan-focus"),
                      (e.Scan = "scan"),
                      (e.Scroll = "scroll"),
                      (e.Search = "search"),
                      (e.SecurityCard = "security-card"),
                      (e.SecurityCross = "security-cross"),
                      (e.SecurityKey = "security-key"),
                      (e.SecuritySearch = "security-search"),
                      (e.SecuritySlash = "security-slash"),
                      (e.SecurityTick = "security-tick"),
                      (e.SecurityTime = "security-time"),
                      (e.SecurityUser = "security-user"),
                      (e.Security = "security"),
                      (e.Send1 = "send-1"),
                      (e.Send2 = "send-2"),
                      (e.Setting = "setting"),
                      (e.Slash = "slash"),
                      (e.SnapsMobile = "snaps-mobile"),
                      (e.SnapsPlus = "snaps-plus"),
                      (e.Snaps = "snaps"),
                      (e.Speedometer = "speedometer"),
                      (e.Star = "star"),
                      (e.Stake = "stake"),
                      (e.Student = "student"),
                      (e.SwapHorizontal = "swap-horizontal"),
                      (e.SwapVertical = "swap-vertical"),
                      (e.Tag = "tag"),
                      (e.Tilde = "tilde"),
                      (e.Timer = "timer"),
                      (e.Trash = "trash"),
                      (e.TrendDown = "trend-down"),
                      (e.TrendUp = "trend-up"),
                      (e.UserCircleAdd = "user-circle-add"),
                      (e.UserCircle = "user-circle"),
                      (e.User = "user"),
                      (e.WalletCard = "wallet-card"),
                      (e.WalletMoney = "wallet-money"),
                      (e.Wallet = "wallet"),
                      (e.Warning = "warning"),
                      (e.Twitter = "twitter"),
                      (e.QrCode = "qr-code"),
                      (e.UserCheck = "user-check"),
                      (e.Ban = "ban"),
                      (e.Bold = "bold"),
                      (e.CircleX = "circle-x"),
                      (e.Download = "download"),
                      (e.File = "file"),
                      (e.Flask = "flask"),
                      (e.Plug = "plug"),
                      (e.Share = "share"),
                      (e.Square = "square"),
                      (e.Tint = "tint"),
                      (e.Upload = "upload"),
                      (e.Usb = "usb"),
                      (e.Wifi = "wifi"),
                      (e.PlusMinus = "plus-minus"),
                      e
                    );
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/icon.types.ts" }
    ],
    [
      5241,
      { "./icon": 5239, "./icon.types": 5240 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Icon", {
                    enumerable: !0,
                    get: function () {
                      return r.Icon;
                    }
                  }),
                  Object.defineProperty(n, "IconName", {
                    enumerable: !0,
                    get: function () {
                      return a.IconName;
                    }
                  }),
                  Object.defineProperty(n, "IconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.IconSize;
                    }
                  });
                var r = e("./icon"),
                  a = e("./icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/index.ts" }
    ],
    [
      5242,
      {
        "./avatar-account": 5183,
        "./avatar-base": 5186,
        "./avatar-favicon": 5189,
        "./avatar-icon": 5192,
        "./avatar-network": 5195,
        "./avatar-token": 5198,
        "./badge-wrapper": 5201,
        "./banner-alert": 5204,
        "./banner-base": 5206,
        "./banner-tip": 5209,
        "./box": 5211,
        "./button": 5229,
        "./button-base": 5214,
        "./button-icon": 5217,
        "./button-link": 5220,
        "./button-primary": 5223,
        "./button-secondary": 5226,
        "./checkbox": 5231,
        "./form-text-field": 5233,
        "./header-base": 5235,
        "./help-text": 5238,
        "./icon": 5241,
        "./input": 5243,
        "./label": 5246,
        "./modal": 5257,
        "./modal-content": 5248,
        "./modal-focus": 5251,
        "./modal-header": 5253,
        "./modal-overlay": 5255,
        "./picker-network": 5260,
        "./popover": 5264,
        "./popover-header": 5262,
        "./tag": 5269,
        "./tag-url": 5267,
        "./text": 5276,
        "./text-field": 5273,
        "./text-field-search": 5271
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccount;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountDiameter", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountDiameter;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountSize", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountVariant", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountVariant;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBase", {
                    enumerable: !0,
                    get: function () {
                      return l.AvatarBase;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return l.AvatarBaseSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFavicon", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFavicon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFaviconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFaviconSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIcon", {
                    enumerable: !0,
                    get: function () {
                      return o.AvatarIcon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIconSize", {
                    enumerable: !0,
                    get: function () {
                      return o.AvatarIconSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetwork", {
                    enumerable: !0,
                    get: function () {
                      return i.AvatarNetwork;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetworkSize", {
                    enumerable: !0,
                    get: function () {
                      return i.AvatarNetworkSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarToken", {
                    enumerable: !0,
                    get: function () {
                      return s.AvatarToken;
                    }
                  }),
                  Object.defineProperty(n, "AvatarTokenSize", {
                    enumerable: !0,
                    get: function () {
                      return s.AvatarTokenSize;
                    }
                  }),
                  Object.defineProperty(n, "BUTTON_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return d.BUTTON_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "BUTTON_VARIANT", {
                    enumerable: !0,
                    get: function () {
                      return d.BUTTON_VARIANT;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapper", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapper;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperAnchorElementShape", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapperAnchorElementShape;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperPosition", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapperPosition;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlert", {
                    enumerable: !0,
                    get: function () {
                      return B.BannerAlert;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlertSeverity", {
                    enumerable: !0,
                    get: function () {
                      return B.BannerAlertSeverity;
                    }
                  }),
                  Object.defineProperty(n, "BannerBase", {
                    enumerable: !0,
                    get: function () {
                      return j.BannerBase;
                    }
                  }),
                  Object.defineProperty(n, "BannerTip", {
                    enumerable: !0,
                    get: function () {
                      return R.BannerTip;
                    }
                  }),
                  Object.defineProperty(n, "BannerTipLogoType", {
                    enumerable: !0,
                    get: function () {
                      return R.BannerTipLogoType;
                    }
                  }),
                  Object.defineProperty(n, "Box", {
                    enumerable: !0,
                    get: function () {
                      return u.Box;
                    }
                  }),
                  Object.defineProperty(n, "Button", {
                    enumerable: !0,
                    get: function () {
                      return d.Button;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBase", {
                    enumerable: !0,
                    get: function () {
                      return p.ButtonBase;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return p.ButtonBaseSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIcon", {
                    enumerable: !0,
                    get: function () {
                      return f.ButtonIcon;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIconSize", {
                    enumerable: !0,
                    get: function () {
                      return f.ButtonIconSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLink", {
                    enumerable: !0,
                    get: function () {
                      return m.ButtonLink;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLinkSize", {
                    enumerable: !0,
                    get: function () {
                      return m.ButtonLinkSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimary", {
                    enumerable: !0,
                    get: function () {
                      return h.ButtonPrimary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimarySize", {
                    enumerable: !0,
                    get: function () {
                      return h.ButtonPrimarySize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondary", {
                    enumerable: !0,
                    get: function () {
                      return y.ButtonSecondary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondarySize", {
                    enumerable: !0,
                    get: function () {
                      return y.ButtonSecondarySize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSize", {
                    enumerable: !0,
                    get: function () {
                      return d.ButtonSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonVariant", {
                    enumerable: !0,
                    get: function () {
                      return d.ButtonVariant;
                    }
                  }),
                  Object.defineProperty(n, "Checkbox", {
                    enumerable: !0,
                    get: function () {
                      return g.Checkbox;
                    }
                  }),
                  Object.defineProperty(n, "FormTextField", {
                    enumerable: !0,
                    get: function () {
                      return b.FormTextField;
                    }
                  }),
                  Object.defineProperty(n, "HeaderBase", {
                    enumerable: !0,
                    get: function () {
                      return v.HeaderBase;
                    }
                  }),
                  Object.defineProperty(n, "HelpText", {
                    enumerable: !0,
                    get: function () {
                      return T.HelpText;
                    }
                  }),
                  Object.defineProperty(n, "HelpTextSeverity", {
                    enumerable: !0,
                    get: function () {
                      return T.HelpTextSeverity;
                    }
                  }),
                  Object.defineProperty(n, "Icon", {
                    enumerable: !0,
                    get: function () {
                      return E.Icon;
                    }
                  }),
                  Object.defineProperty(n, "IconName", {
                    enumerable: !0,
                    get: function () {
                      return E.IconName;
                    }
                  }),
                  Object.defineProperty(n, "IconSize", {
                    enumerable: !0,
                    get: function () {
                      return E.IconSize;
                    }
                  }),
                  Object.defineProperty(n, "Input", {
                    enumerable: !0,
                    get: function () {
                      return S.Input;
                    }
                  }),
                  Object.defineProperty(n, "InputType", {
                    enumerable: !0,
                    get: function () {
                      return S.InputType;
                    }
                  }),
                  Object.defineProperty(n, "InvisibleCharacter", {
                    enumerable: !0,
                    get: function () {
                      return k.InvisibleCharacter;
                    }
                  }),
                  Object.defineProperty(n, "Label", {
                    enumerable: !0,
                    get: function () {
                      return w.Label;
                    }
                  }),
                  Object.defineProperty(n, "Modal", {
                    enumerable: !0,
                    get: function () {
                      return M.Modal;
                    }
                  }),
                  Object.defineProperty(n, "ModalContent", {
                    enumerable: !0,
                    get: function () {
                      return N.ModalContent;
                    }
                  }),
                  Object.defineProperty(n, "ModalContentSize", {
                    enumerable: !0,
                    get: function () {
                      return N.ModalContentSize;
                    }
                  }),
                  Object.defineProperty(n, "ModalFocus", {
                    enumerable: !0,
                    get: function () {
                      return P.ModalFocus;
                    }
                  }),
                  Object.defineProperty(n, "ModalHeader", {
                    enumerable: !0,
                    get: function () {
                      return F.ModalHeader;
                    }
                  }),
                  Object.defineProperty(n, "ModalOverlay", {
                    enumerable: !0,
                    get: function () {
                      return I.ModalOverlay;
                    }
                  }),
                  Object.defineProperty(n, "PickerNetwork", {
                    enumerable: !0,
                    get: function () {
                      return O.PickerNetwork;
                    }
                  }),
                  Object.defineProperty(n, "Popover", {
                    enumerable: !0,
                    get: function () {
                      return L.Popover;
                    }
                  }),
                  Object.defineProperty(n, "PopoverHeader", {
                    enumerable: !0,
                    get: function () {
                      return D.PopoverHeader;
                    }
                  }),
                  Object.defineProperty(n, "PopoverPosition", {
                    enumerable: !0,
                    get: function () {
                      return L.PopoverPosition;
                    }
                  }),
                  Object.defineProperty(n, "PopoverRole", {
                    enumerable: !0,
                    get: function () {
                      return L.PopoverRole;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return C.TEXT_FIELD_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_TYPES", {
                    enumerable: !0,
                    get: function () {
                      return C.TEXT_FIELD_TYPES;
                    }
                  }),
                  Object.defineProperty(n, "Tag", {
                    enumerable: !0,
                    get: function () {
                      return _.Tag;
                    }
                  }),
                  Object.defineProperty(n, "TagUrl", {
                    enumerable: !0,
                    get: function () {
                      return x.TagUrl;
                    }
                  }),
                  Object.defineProperty(n, "Text", {
                    enumerable: !0,
                    get: function () {
                      return k.Text;
                    }
                  }),
                  Object.defineProperty(n, "TextDirection", {
                    enumerable: !0,
                    get: function () {
                      return k.TextDirection;
                    }
                  }),
                  Object.defineProperty(n, "TextField", {
                    enumerable: !0,
                    get: function () {
                      return C.TextField;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldSearch", {
                    enumerable: !0,
                    get: function () {
                      return A.TextFieldSearch;
                    }
                  }),
                  Object.defineProperty(n, "ValidTag", {
                    enumerable: !0,
                    get: function () {
                      return k.ValidTag;
                    }
                  }),
                  Object.defineProperty(n, "useModalContext", {
                    enumerable: !0,
                    get: function () {
                      return M.useModalContext;
                    }
                  });
                var r = e("./avatar-account"),
                  a = e("./avatar-favicon"),
                  o = e("./avatar-icon"),
                  i = e("./avatar-network"),
                  s = e("./avatar-token"),
                  l = e("./avatar-base"),
                  c = e("./badge-wrapper"),
                  u = e("./box"),
                  d = e("./button"),
                  p = e("./button-base"),
                  f = e("./button-icon"),
                  m = e("./button-link"),
                  h = e("./button-primary"),
                  y = e("./button-secondary"),
                  g = e("./checkbox"),
                  b = e("./form-text-field"),
                  v = e("./header-base"),
                  T = e("./help-text"),
                  E = e("./icon"),
                  w = e("./label"),
                  O = e("./picker-network"),
                  _ = e("./tag"),
                  x = e("./tag-url"),
                  k = e("./text"),
                  S = e("./input"),
                  C = e("./text-field"),
                  A = e("./text-field-search"),
                  N = e("./modal-content"),
                  I = e("./modal-overlay"),
                  P = e("./modal-focus"),
                  M = e("./modal"),
                  j = e("./banner-base"),
                  B = e("./banner-alert"),
                  R = e("./banner-tip"),
                  D = e("./popover-header"),
                  L = e("./popover"),
                  F = e("./modal-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/index.js" }
    ],
    [
      5243,
      { "./input": 5244, "./input.types": 5245 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Input", {
                    enumerable: !0,
                    get: function () {
                      return r.Input;
                    }
                  }),
                  Object.defineProperty(n, "InputType", {
                    enumerable: !0,
                    get: function () {
                      return a.InputType;
                    }
                  });
                var r = e("./input"),
                  a = e("./input.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/index.ts" }
    ],
    [
      5244,
      { "../../../helpers/constants/design-system": 5537, "../text": 5276, "./input.types": 5245, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Input = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../text"),
                  s = e("./input.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Input = r.default.forwardRef(
                  (
                    {
                      autoComplete: e,
                      autoFocus: t,
                      className: n = "",
                      defaultValue: l,
                      disabled: u,
                      error: d,
                      id: p,
                      maxLength: f,
                      name: m,
                      onBlur: h,
                      onChange: y,
                      onFocus: g,
                      placeholder: b,
                      readOnly: v,
                      required: T,
                      type: E = s.InputType.Text,
                      value: w,
                      textVariant: O = o.TextVariant.bodyMd,
                      disableStateStyles: _,
                      ...x
                    },
                    k
                  ) =>
                    r.default.createElement(
                      i.Text,
                      c(
                        {
                          className: (0, a.default)(
                            "mm-input",
                            { "mm-input--disable-state-styles": Boolean(_), "mm-input--disabled": Boolean(u) && Boolean(_) },
                            n
                          )
                        },
                        d && { "aria-invalid": d },
                        {
                          as: "input",
                          autoComplete: e ? "on" : "off",
                          autoFocus: t,
                          backgroundColor: o.BackgroundColor.transparent,
                          borderStyle: o.BorderStyle.none,
                          defaultValue: l,
                          disabled: u,
                          id: p,
                          margin: 0,
                          maxLength: f,
                          name: m,
                          onBlur: h,
                          onChange: y,
                          onFocus: g,
                          padding: 0,
                          placeholder: b,
                          readOnly: v,
                          ref: k,
                          required: T,
                          value: w,
                          variant: O,
                          type: E
                        },
                        x
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/input.tsx" }
    ],
    [
      5245,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.InputType = void 0);
                n.InputType = (function (e) {
                  return (e.Text = "text"), (e.Number = "number"), (e.Password = "password"), (e.Search = "search"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/input.types.ts" }
    ],
    [
      5246,
      { "./label": 5247 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Label", {
                    enumerable: !0,
                    get: function () {
                      return r.Label;
                    }
                  });
                var r = e("./label");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/label/index.ts" }
    ],
    [
      5247,
      { "../../../helpers/constants/design-system": 5537, "../text": 5276, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Label = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../text"),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.Label = r.default.forwardRef(({ htmlFor: e, className: t, children: n, ...s }, c) =>
                  r.default.createElement(
                    o.Text,
                    l(
                      {
                        className: (0, a.default)("mm-label", { "mm-label--html-for": Boolean(e) }, t ?? ""),
                        as: "label",
                        htmlFor: e,
                        variant: i.TextVariant.bodyMd,
                        fontWeight: i.FontWeight.Medium,
                        display: i.Display.InlineFlex,
                        alignItems: i.AlignItems.center,
                        ref: c
                      },
                      s
                    ),
                    n
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/label/label.tsx" }
    ],
    [
      5248,
      { "./modal-content": 5249, "./modal-content.types": 5250 },
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
                      return r.ModalContent;
                    }
                  }),
                  Object.defineProperty(n, "ModalContentSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ModalContentSize;
                    }
                  });
                var r = e("./modal-content"),
                  a = e("./modal-content.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/index.ts" }
    ],
    [
      5249,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, "./modal-content.types": 5250, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalContent = void 0);
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e(".."),
                  l = e("./modal-content.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.ModalContent = a.default.forwardRef(
                  ({ className: e = "", children: t, size: n = l.ModalContentSize.Sm, modalDialogProps: r, ...c }, d) => {
                    const {
                        onClose: p,
                        isClosedOnEscapeKey: f,
                        isClosedOnOutsideClick: m,
                        initialFocusRef: h,
                        finalFocusRef: y,
                        restoreFocus: g,
                        autoFocus: b
                      } = (0, s.useModalContext)(),
                      v = (0, a.useRef)(null),
                      T = (e) => {
                        f && "Escape" === e.key && p();
                      },
                      E = (e) => {
                        (m && e.target.closest(".mm-popover")) || (m && null != v && v.current && !v.current.contains(e.target) && p());
                      };
                    return (
                      (0, a.useEffect)(
                        () => (
                          document.addEventListener("keydown", T),
                          document.addEventListener("mousedown", E),
                          () => {
                            document.removeEventListener("keydown", T), document.removeEventListener("mousedown", E);
                          }
                        ),
                        []
                      ),
                      a.default.createElement(
                        s.ModalFocus,
                        { initialFocusRef: h, finalFocusRef: y, restoreFocus: g, autoFocus: b },
                        a.default.createElement(
                          s.Box,
                          u(
                            {
                              className: (0, o.default)("mm-modal-content", e),
                              ref: d,
                              display: i.Display.Flex,
                              width: i.BlockSize.Screen,
                              height: i.BlockSize.Screen,
                              justifyContent: i.JustifyContent.center,
                              alignItems: i.AlignItems.flexStart,
                              paddingRight: 4,
                              paddingLeft: 4,
                              paddingTop: [4, 8, 12],
                              paddingBottom: [4, 8, 12]
                            },
                            c
                          ),
                          a.default.createElement(
                            s.Box,
                            u(
                              {
                                as: "section",
                                role: "dialog",
                                "aria-modal": "true",
                                backgroundColor: i.BackgroundColor.backgroundDefault,
                                borderRadius: i.BorderRadius.LG,
                                width: i.BlockSize.Full,
                                padding: 4,
                                ref: v
                              },
                              r,
                              {
                                className: (0, o.default)(
                                  "mm-modal-content__dialog",
                                  `mm-modal-content__dialog--size-${n}`,
                                  null == r ? void 0 : r.className
                                )
                              }
                            ),
                            t
                          )
                        )
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/modal-content.tsx" }
    ],
    [
      525,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.version = void 0), (n.version = "units/5.7.0");
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/units",
        file: "node_modules/@ethersproject/units/lib/_version.js"
      }
    ],
    [
      5250,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalContentSize = void 0);
                n.ModalContentSize = (function (e) {
                  return (e.Sm = "sm"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/modal-content.types.ts" }
    ],
    [
      5251,
      { "./modal-focus": 5252 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalFocus", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalFocus;
                    }
                  });
                var r = e("./modal-focus");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-focus/index.ts" }
    ],
    [
      5252,
      { react: 4475, "react-focus-lock": 4329 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalFocus = void 0);
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
                  o = (r = e("react-focus-lock")) && r.__esModule ? r : { default: r };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const l = o.default.default ?? o.default,
                  c = ({ initialFocusRef: e, finalFocusRef: t, restoreFocus: n, children: r, autoFocus: o, ...i }) => {
                    const c = (0, a.useCallback)(() => {
                        null != e && e.current && e.current.focus();
                      }, [e]),
                      u = (0, a.useCallback)(() => {
                        var e;
                        null == t || null === (e = t.current) || void 0 === e || e.focus();
                      }, [t]),
                      d = n && !t;
                    return a.default.createElement(l, s({ autoFocus: o, onActivation: c, onDeactivation: u, returnFocus: d }, i), r);
                  };
                (n.ModalFocus = c), (c.displayName = "ModalFocus");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-focus/modal-focus.tsx" }
    ],
    [
      5253,
      { "./modal-header": 5254 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalHeader;
                    }
                  });
                var r = e("./modal-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-header/index.ts" }
    ],
    [
      5254,
      {
        "..": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalHeader = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ModalHeader = ({
                  children: e,
                  className: t = "",
                  startAccessory: n,
                  endAccessory: l,
                  onClose: u,
                  closeButtonProps: d,
                  onBack: p,
                  backButtonProps: f,
                  ...m
                }) => {
                  const h = (0, s.useI18nContext)();
                  return r.default.createElement(
                    o.HeaderBase,
                    c(
                      {
                        className: (0, a.default)("mm-modal-header", t),
                        startAccessory:
                          n ||
                          (p &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c({ iconName: o.IconName.ArrowLeft, ariaLabel: h("back"), size: o.ButtonIconSize.Sm, onClick: p }, f)
                            )),
                        endAccessory:
                          l ||
                          (u &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c({ iconName: o.IconName.Close, ariaLabel: h("close"), size: o.ButtonIconSize.Sm, onClick: u }, d)
                            ))
                      },
                      m
                    ),
                    "string" == typeof e
                      ? r.default.createElement(
                          o.Text,
                          { as: "header", variant: i.TextVariant.headingSm, textAlign: i.TextAlign.Center },
                          e
                        )
                      : e
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-header/modal-header.tsx" }
    ],
    [
      5255,
      { "./modal-overlay": 5256 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalOverlay", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalOverlay;
                    }
                  });
                var r = e("./modal-overlay");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-overlay/index.ts" }
    ],
    [
      5256,
      { "../../../helpers/constants/design-system": 5537, "../box": 5211, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.ModalOverlay = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../box");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                const c = (n.ModalOverlay = r.default.forwardRef(({ onClick: e, className: t = "", ...n }, s) =>
                  r.default.createElement(
                    i.Box,
                    l(
                      {
                        className: (0, a.default)("mm-modal-overlay", t),
                        ref: s,
                        backgroundColor: o.BackgroundColor.overlayDefault,
                        width: o.BlockSize.Full,
                        height: o.BlockSize.Full,
                        onClick: e,
                        "aria-hidden": "true"
                      },
                      n
                    )
                  )
                ));
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-overlay/modal-overlay.tsx" }
    ],
    [
      5257,
      { "./modal": 5259, "./modal.context": 5258 },
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
                      return r.Modal;
                    }
                  }),
                  Object.defineProperty(n, "useModalContext", {
                    enumerable: !0,
                    get: function () {
                      return a.useModalContext;
                    }
                  });
                var r = e("./modal"),
                  a = e("./modal.context");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/index.ts" }
    ],
    [
      5258,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.useModalContext = n.ModalContext = void 0);
                var r = e("react");
                const a = (n.ModalContext = (0, r.createContext)(undefined));
                n.useModalContext = () => {
                  const e = (0, r.useContext)(a);
                  if (!e)
                    throw new Error(
                      'useModalContext must be used within a ModalProvider, Seems you forgot to wrap the components in "<Modal />"'
                    );
                  return e;
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/modal.context.ts" }
    ],
    [
      5259,
      { "./modal.context": 5258, classnames: 2952, react: 4475, "react-dom": 4317 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.Modal = void 0);
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
                  a = s(e("react-dom")),
                  o = s(e("classnames")),
                  i = e("./modal.context");
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
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = (n.Modal = (0, r.forwardRef)(
                  (
                    {
                      className: e = "",
                      isOpen: t,
                      onClose: n,
                      children: s,
                      isClosedOnOutsideClick: l = !0,
                      isClosedOnEscapeKey: u = !0,
                      autoFocus: d = !0,
                      initialFocusRef: p,
                      finalFocusRef: f,
                      restoreFocus: m,
                      ...h
                    },
                    y
                  ) => {
                    const g = {
                      isOpen: t,
                      onClose: n,
                      isClosedOnOutsideClick: l,
                      isClosedOnEscapeKey: u,
                      autoFocus: d,
                      initialFocusRef: p,
                      finalFocusRef: f,
                      restoreFocus: m
                    };
                    return t
                      ? a.default.createPortal(
                          r.default.createElement(
                            i.ModalContext.Provider,
                            { value: g },
                            r.default.createElement("div", c({ className: (0, o.default)("mm-modal", e), ref: y }, h), s)
                          ),
                          document.body
                        )
                      : null;
                  }
                ));
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/modal.tsx" }
    ],
    [
      526,
      { "./_version": 525, "@ethersproject/bignumber": 446, "@ethersproject/logger": 477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.parseEther = n.formatEther = n.parseUnits = n.formatUnits = n.commify = void 0);
                var r = e("@ethersproject/bignumber"),
                  a = e("@ethersproject/logger"),
                  o = e("./_version"),
                  i = new a.Logger(o.version),
                  s = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
                function l(e, t) {
                  if ("string" == typeof t) {
                    var n = s.indexOf(t);
                    -1 !== n && (t = 3 * n);
                  }
                  return (0, r.formatFixed)(e, null != t ? t : 18);
                }
                function c(e, t) {
                  if (("string" != typeof e && i.throwArgumentError("value must be a string", "value", e), "string" == typeof t)) {
                    var n = s.indexOf(t);
                    -1 !== n && (t = 3 * n);
                  }
                  return (0, r.parseFixed)(e, null != t ? t : 18);
                }
                (n.commify = function (e) {
                  var t = String(e).split(".");
                  (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || (t[1] && !t[1].match(/^[0-9]*$/)) || "." === e || "-." === e) &&
                    i.throwArgumentError("invalid value", "value", e);
                  var n = t[0],
                    r = "";
                  for ("-" === n.substring(0, 1) && ((r = "-"), (n = n.substring(1))); "0" === n.substring(0, 1); ) n = n.substring(1);
                  "" === n && (n = "0");
                  var a = "";
                  for (2 === t.length && (a = "." + (t[1] || "0")); a.length > 2 && "0" === a[a.length - 1]; )
                    a = a.substring(0, a.length - 1);
                  for (var o = []; n.length; ) {
                    if (n.length <= 3) {
                      o.unshift(n);
                      break;
                    }
                    var s = n.length - 3;
                    o.unshift(n.substring(s)), (n = n.substring(0, s));
                  }
                  return r + o.join(",") + a;
                }),
                  (n.formatUnits = l),
                  (n.parseUnits = c),
                  (n.formatEther = function (e) {
                    return l(e, 18);
                  }),
                  (n.parseEther = function (e) {
                    return c(e, 18);
                  });
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/units",
        file: "node_modules/@ethersproject/units/lib/index.js"
      }
    ],
    [
      5260,
      { "./picker-network": 5261 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PickerNetwork", {
                    enumerable: !0,
                    get: function () {
                      return r.PickerNetwork;
                    }
                  });
                var r = e("./picker-network");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/picker-network/index.ts" }
    ],
    [
      5261,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PickerNetwork = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.PickerNetwork = r.default.forwardRef(
                  ({ className: e = "", avatarNetworkProps: t, iconProps: n, label: s, labelProps: c, src: u, ...d }, p) =>
                    r.default.createElement(
                      i.Box,
                      l(
                        {
                          className: (0, a.default)("mm-picker-network", e),
                          ref: p,
                          as: "button",
                          backgroundColor: o.BackgroundColor.backgroundAlternative,
                          alignItems: o.AlignItems.center,
                          paddingLeft: 2,
                          paddingRight: 4,
                          gap: 2,
                          borderRadius: o.BorderRadius.pill,
                          display: o.Display.Flex
                        },
                        d
                      ),
                      r.default.createElement(
                        i.AvatarNetwork,
                        l({ className: "mm-picker-network__avatar-network", src: u, name: s, size: i.AvatarNetworkSize.Xs }, t)
                      ),
                      r.default.createElement(i.Text, l({ as: "span", ellipsis: !0, variant: o.TextVariant.bodySm }, c), s),
                      r.default.createElement(
                        i.Icon,
                        l(
                          {
                            className: "mm-picker-network__arrow-down-icon",
                            name: i.IconName.ArrowDown,
                            color: o.IconColor.iconDefault,
                            size: i.IconSize.Xs,
                            marginLeft: "auto"
                          },
                          n
                        )
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/picker-network/picker-network.tsx" }
    ],
    [
      5262,
      { "./popover-header": 5263 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PopoverHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.PopoverHeader;
                    }
                  });
                var r = e("./popover-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover-header/index.ts" }
    ],
    [
      5263,
      {
        "..": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        classnames: 2952,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PopoverHeader = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.PopoverHeader = ({
                  children: e,
                  className: t = "",
                  startAccessory: n,
                  endAccessory: l,
                  onClose: u,
                  closeButtonProps: d,
                  onBack: p,
                  backButtonProps: f,
                  ...m
                }) => {
                  const h = (0, s.useI18nContext)();
                  return r.default.createElement(
                    o.HeaderBase,
                    c(
                      {
                        className: (0, a.default)("mm-popover-header", t),
                        startAccessory:
                          n ||
                          (p &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c(
                                {
                                  iconName: o.IconName.ArrowLeft,
                                  color: i.IconColor.inherit,
                                  ariaLabel: h("back"),
                                  size: o.ButtonIconSize.Sm,
                                  onClick: p
                                },
                                f
                              )
                            )),
                        endAccessory:
                          l ||
                          (u &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c(
                                {
                                  iconName: o.IconName.Close,
                                  color: i.IconColor.inherit,
                                  ariaLabel: h("close"),
                                  size: o.ButtonIconSize.Sm,
                                  onClick: u
                                },
                                d
                              )
                            ))
                      },
                      m
                    ),
                    "string" == typeof e
                      ? r.default.createElement(
                          o.Text,
                          { variant: i.TextVariant.headingSm, textAlign: i.TextAlign.Center, color: i.TextColor.inherit },
                          e
                        )
                      : e
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover-header/popover-header.tsx" }
    ],
    [
      5264,
      { "./popover": 5265, "./popover.types": 5266 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Popover", {
                    enumerable: !0,
                    get: function () {
                      return r.Popover;
                    }
                  }),
                  Object.defineProperty(n, "PopoverPosition", {
                    enumerable: !0,
                    get: function () {
                      return a.PopoverPosition;
                    }
                  }),
                  Object.defineProperty(n, "PopoverRole", {
                    enumerable: !0,
                    get: function () {
                      return a.PopoverRole;
                    }
                  });
                var r = e("./popover"),
                  a = e("./popover.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/index.ts" }
    ],
    [
      5265,
      {
        "..": 5242,
        "../../../helpers/constants/design-system": 5537,
        "./popover.types": 5266,
        classnames: 2952,
        react: 4475,
        "react-dom": 4317,
        "react-popper": 4423
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Popover = void 0);
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
                  o = e("react-dom"),
                  i = e("react-popper"),
                  s = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  l = e("../../../helpers/constants/design-system"),
                  c = e(".."),
                  u = e("./popover.types");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
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
                n.Popover = a.default.forwardRef(
                  (
                    {
                      children: e,
                      className: t = "",
                      position: n = u.PopoverPosition.Auto,
                      role: r = u.PopoverRole.Tooltip,
                      hasArrow: d = !1,
                      matchWidth: f,
                      preventOverflow: m = !1,
                      offset: h = [0, 8],
                      flip: y = !1,
                      referenceHidden: g = !0,
                      referenceElement: b,
                      isOpen: v,
                      title: T,
                      isPortal: E = !1,
                      arrowProps: w,
                      onPressEscKey: O,
                      ..._
                    },
                    x
                  ) => {
                    const [k, S] = (0, a.useState)(null),
                      [C, A] = (0, a.useState)(null),
                      { styles: N, attributes: I } = (0, i.usePopper)(b, k, {
                        placement: n,
                        modifiers: [
                          { name: "preventOverflow", enabled: n === u.PopoverPosition.Auto || m },
                          { name: "flip", enabled: n === u.PopoverPosition.Auto || y },
                          { name: "arrow", enabled: d, options: { element: C } },
                          { name: "offset", options: { offset: h } }
                        ]
                      }),
                      P = { width: f ? (null == b ? void 0 : b.clientWidth) : "auto" },
                      M = (e) => {
                        "Escape" === e.key && O && O();
                      };
                    (0, a.useEffect)(
                      () => (
                        document.addEventListener("keydown", M),
                        () => {
                          document.removeEventListener("keydown", M);
                        }
                      ),
                      [O]
                    );
                    const j = a.default.createElement(
                      c.Box,
                      p(
                        {
                          borderColor: l.BorderColor.borderMuted,
                          borderRadius: l.BorderRadius.LG,
                          backgroundColor: l.BackgroundColor.backgroundDefault,
                          padding: 4,
                          role: r,
                          className: (0, s.default)(
                            "mm-popover",
                            { "mm-popover--open": Boolean(v), "mm-popover--reference-hidden": Boolean(g) },
                            t
                          ),
                          ref: x || S
                        },
                        I.popper,
                        _,
                        { style: { ...N.popper, ...P, ..._.style } }
                      ),
                      e,
                      d &&
                        a.default.createElement(
                          c.Box,
                          p(
                            {
                              borderColor: l.BorderColor.borderMuted,
                              className: (0, s.default)("mm-popover__arrow"),
                              ref: A,
                              display: l.Display.Flex,
                              justifyContent: l.JustifyContent.center,
                              alignItems: l.AlignItems.center,
                              style: N.arrow
                            },
                            I.arrow,
                            w
                          )
                        )
                    );
                    return a.default.createElement(a.default.Fragment, null, E ? v && (0, o.createPortal)(j, document.body) : v && j);
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/popover.tsx" }
    ],
    [
      5266,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PopoverRole = n.PopoverPosition = void 0);
                (n.PopoverPosition = (function (e) {
                  return (
                    (e.Auto = "auto"),
                    (e.Top = "top"),
                    (e.TopStart = "top-start"),
                    (e.TopEnd = "top-end"),
                    (e.Right = "right"),
                    (e.RightStart = "right-start"),
                    (e.RightEnd = "right-end"),
                    (e.Bottom = "bottom"),
                    (e.BottomStart = "bottom-start"),
                    (e.BottomEnd = "bottom-end"),
                    (e.Left = "left"),
                    (e.LeftStart = "left-start"),
                    (e.LeftEnd = "left-end"),
                    e
                  );
                })({})),
                  (n.PopoverRole = (function (e) {
                    return (e.Tooltip = "tooltip"), (e.Dialog = "dialog"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/popover.types.ts" }
    ],
    [
      5267,
      { "./tag-url": 5268 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TagUrl", {
                    enumerable: !0,
                    get: function () {
                      return r.TagUrl;
                    }
                  });
                var r = e("./tag-url");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag-url/index.ts" }
    ],
    [
      5268,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TagUrl = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.TagUrl = r.default.forwardRef(
                  (
                    {
                      label: e,
                      labelProps: t,
                      actionButtonLabel: n,
                      actionButtonProps: s,
                      src: c,
                      showLockIcon: u,
                      avatarFaviconProps: d,
                      lockIconProps: p,
                      className: f = "",
                      ...m
                    },
                    h
                  ) =>
                    r.default.createElement(
                      i.Box,
                      l(
                        {
                          className: (0, a.default)("mm-tag-url", f),
                          ref: h,
                          backgroundColor: o.BackgroundColor.backgroundDefault,
                          borderColor: o.BorderColor.borderDefault,
                          borderWidth: 1,
                          alignItems: o.AlignItems.center,
                          paddingLeft: 2,
                          paddingRight: 4,
                          gap: 2,
                          borderRadius: o.BorderRadius.pill,
                          display: o.Display.Flex
                        },
                        m
                      ),
                      r.default.createElement(i.AvatarFavicon, l({ src: c, name: e }, d)),
                      u &&
                        r.default.createElement(
                          i.Icon,
                          l(
                            {
                              className: "mm-tag-url__lock-icon",
                              name: i.IconName.Lock,
                              color: o.IconColor.iconAlternative,
                              size: i.IconSize.Sm,
                              "aria-label": "https://",
                              role: "img"
                            },
                            p
                          )
                        ),
                      r.default.createElement(i.Text, l({ variant: o.TextVariant.bodyMd, ellipsis: !0 }, t), e),
                      n &&
                        r.default.createElement(
                          i.ButtonLink,
                          l({ as: "a", size: i.ButtonLinkSize.Sm, paddingLeft: 0, paddingRight: 0, marginLeft: 2, marginRight: 2 }, s),
                          n
                        )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag-url/tag-url.tsx" }
    ],
    [
      5269,
      { "./tag": 5270 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Tag", {
                    enumerable: !0,
                    get: function () {
                      return r.Tag;
                    }
                  });
                var r = e("./tag");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag/index.ts" }
    ],
    [
      527,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.version = void 0), (n.version = "wallet/5.7.0");
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/wallet",
        file: "node_modules/@ethersproject/wallet/lib/_version.js"
      }
    ],
    [
      5270,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Tag = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.Tag = r.default.forwardRef(({ label: e, className: t = "", labelProps: n, ...s }, c) =>
                  r.default.createElement(
                    o.Box,
                    l(
                      {
                        ref: c,
                        className: (0, a.default)("mm-tag", t),
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        borderColor: i.BorderColor.borderDefault,
                        borderWidth: 1,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        paddingLeft: 1,
                        paddingRight: 1,
                        borderRadius: i.BorderRadius.pill,
                        display: i.Display.InlineBlock
                      },
                      s
                    ),
                    r.default.createElement(o.Text, l({ variant: i.TextVariant.bodySm }, n), e)
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag/tag.tsx" }
    ],
    [
      5271,
      { "./text-field-search": 5272 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TextFieldSearch", {
                    enumerable: !0,
                    get: function () {
                      return r.TextFieldSearch;
                    }
                  });
                var r = e("./text-field-search");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field-search/index.js" }
    ],
    [
      5272,
      { "..": 5242, "../../../hooks/useI18nContext": 5602, "../text-field": 5273, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextFieldSearch = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("classnames")),
                  i = e(".."),
                  s = e("../text-field"),
                  l = e("../../../hooks/useI18nContext");
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
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = ({
                  className: e,
                  showClearButton: t = !0,
                  clearButtonOnClick: n,
                  clearButtonProps: a,
                  endAccessory: c,
                  inputProps: d,
                  value: p,
                  onChange: f,
                  ...m
                }) => {
                  const h = (0, l.useI18nContext)();
                  return r.default.createElement(
                    s.TextField,
                    u(
                      {
                        className: (0, o.default)("mm-text-field-search", e),
                        value: p,
                        onChange: f,
                        type: s.TEXT_FIELD_TYPES.SEARCH,
                        endAccessory:
                          p && t
                            ? r.default.createElement(
                                r.default.Fragment,
                                null,
                                r.default.createElement(
                                  i.ButtonIcon,
                                  u(
                                    {
                                      className: "mm-text-field__button-clear",
                                      ariaLabel: h("clear"),
                                      iconName: i.IconName.Close,
                                      size: i.ButtonIconSize.Sm,
                                      onClick: n
                                    },
                                    a
                                  )
                                ),
                                c
                              )
                            : c,
                        startAccessory: r.default.createElement(i.Icon, { name: i.IconName.Search, size: i.IconSize.Sm }),
                        inputProps: { marginRight: t ? 6 : 0, ...d }
                      },
                      m
                    )
                  );
                };
                (n.TextFieldSearch = d),
                  (d.propTypes = {
                    value: s.TextField.propTypes.value,
                    onChange: s.TextField.propTypes.onChange,
                    showClearButton: a.default.bool,
                    clearButtonOnClick: (e, t, n) => {
                      var r;
                      return !e.showClearButton || (e[t] && null !== (r = e.clearButtonProps) && void 0 !== r && r.onClick)
                        ? null
                        : new Error(
                            `${t} is required unless showClearButton is false. Warning coming from ${n} ui/components/component-library/text-field-search/text-field-search.js`
                          );
                    },
                    clearButtonProps: a.default.object,
                    className: a.default.string,
                    endAccessory: a.default.node,
                    inputProps: a.default.object,
                    ...s.TextField.propTypes
                  }),
                  (d.displayName = "TextFieldSearch");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field-search/text-field-search.js" }
    ],
    [
      5273,
      { "./text-field": 5275, "./text-field.constants": 5274 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TEXT_FIELD_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return a.TEXT_FIELD_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_TYPES", {
                    enumerable: !0,
                    get: function () {
                      return a.TEXT_FIELD_TYPES;
                    }
                  }),
                  Object.defineProperty(n, "TextField", {
                    enumerable: !0,
                    get: function () {
                      return r.TextField;
                    }
                  });
                var r = e("./text-field"),
                  a = e("./text-field.constants");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/index.js" }
    ],
    [
      5274,
      { "../../../helpers/constants/design-system": 5537 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TEXT_FIELD_TYPES = n.TEXT_FIELD_SIZES = void 0);
                var r = e("../../../helpers/constants/design-system");
                (n.TEXT_FIELD_SIZES = { SM: r.Size.SM, MD: r.Size.MD, LG: r.Size.LG }),
                  (n.TEXT_FIELD_TYPES = { TEXT: "text", NUMBER: "number", PASSWORD: "password", SEARCH: "search" });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/text-field.constants.js" }
    ],
    [
      5275,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../ui/box": 5373,
        "../input": 5243,
        "./text-field.constants": 5274,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextField = void 0);
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
                  a = u(e("prop-types")),
                  o = u(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = u(e("../../ui/box")),
                  l = e("../input"),
                  c = e("./text-field.constants");
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
                const f = ({
                  autoComplete: e,
                  autoFocus: t,
                  className: n,
                  defaultValue: a,
                  disabled: c,
                  error: u,
                  id: d,
                  inputProps: f,
                  inputRef: m,
                  startAccessory: h,
                  endAccessory: y,
                  maxLength: g,
                  name: b,
                  onBlur: v,
                  onChange: T,
                  onClick: E,
                  onFocus: w,
                  placeholder: O,
                  readOnly: _,
                  required: x,
                  size: k = i.Size.MD,
                  testId: S,
                  type: C = "text",
                  truncate: A = !0,
                  value: N,
                  InputComponent: I = l.Input,
                  ...P
                }) => {
                  const M = (0, r.useRef)(null),
                    [j, B] = (0, r.useState)(!1);
                  (0, r.useEffect)(() => {
                    c && B(!1);
                  }, [c]);
                  return r.default.createElement(
                    s.default,
                    p(
                      {
                        className: (0, o.default)(
                          "mm-text-field",
                          `mm-text-field--size-${k}`,
                          {
                            "mm-text-field--focused": j && !c,
                            "mm-text-field--error": u,
                            "mm-text-field--disabled": c,
                            "mm-text-field--truncate": A
                          },
                          n
                        ),
                        display: i.DISPLAY.INLINE_FLEX,
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        alignItems: i.AlignItems.center,
                        borderWidth: 1,
                        borderRadius: i.BorderRadius.SM,
                        paddingLeft: h ? 4 : 0,
                        paddingRight: y ? 4 : 0,
                        onClick: (e) => {
                          const { current: t } = M;
                          t && (t.focus(), B(!0)), E && !c && E(e);
                        }
                      },
                      P
                    ),
                    h,
                    r.default.createElement(
                      I,
                      p(
                        {},
                        u && { "aria-invalid": u },
                        {
                          autoComplete: e,
                          autoFocus: t,
                          backgroundColor: i.BackgroundColor.transparent,
                          "data-testid": S,
                          defaultValue: a,
                          disabled: c,
                          focused: j.toString(),
                          id: d,
                          margin: 0,
                          maxLength: g,
                          name: b,
                          onBlur: (e) => {
                            B(!1), v && v(e);
                          },
                          onChange: T,
                          onFocus: (e) => {
                            B(!0), w && w(e);
                          },
                          padding: 0,
                          paddingLeft: h ? 2 : 4,
                          paddingRight: y ? 2 : 4,
                          placeholder: O,
                          readOnly: _,
                          ref: (e) => {
                            (M.current = e), m && m.current !== undefined ? (m.current = e) : "function" == typeof m && m(e);
                          },
                          required: x,
                          value: N,
                          type: C,
                          disableStateStyles: !0
                        },
                        f,
                        { className: (0, o.default)("mm-text-field__input", null == f ? void 0 : f.className) }
                      )
                    ),
                    y
                  );
                };
                (n.TextField = f),
                  (f.propTypes = {
                    autoComplete: a.default.bool,
                    autoFocus: a.default.bool,
                    className: a.default.string,
                    defaultValue: a.default.oneOfType([a.default.string, a.default.number]),
                    disabled: a.default.bool,
                    error: a.default.bool,
                    id: a.default.string,
                    InputComponent: a.default.elementType,
                    inputProps: a.default.object,
                    startAccessory: a.default.node,
                    endAccessory: a.default.node,
                    inputRef: a.default.oneOfType([a.default.func, a.default.object]),
                    maxLength: a.default.number,
                    name: a.default.string,
                    onBlur: a.default.func,
                    onChange: a.default.func,
                    onClick: a.default.func,
                    onFocus: a.default.func,
                    placeholder: a.default.string,
                    readOnly: a.default.bool,
                    required: a.default.bool,
                    size: a.default.oneOf(Object.values(c.TEXT_FIELD_SIZES)),
                    type: a.default.oneOf(Object.values(c.TEXT_FIELD_TYPES)),
                    truncate: a.default.bool,
                    value: a.default.oneOfType([a.default.string, a.default.number]),
                    testId: a.default.string,
                    ...s.default.propTypes
                  }),
                  (f.displayName = "TextField");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/text-field.js" }
    ],
    [
      5276,
      { "./text": 5277, "./text.types": 5278 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "InvisibleCharacter", {
                    enumerable: !0,
                    get: function () {
                      return a.InvisibleCharacter;
                    }
                  }),
                  Object.defineProperty(n, "Text", {
                    enumerable: !0,
                    get: function () {
                      return r.Text;
                    }
                  }),
                  Object.defineProperty(n, "TextDirection", {
                    enumerable: !0,
                    get: function () {
                      return a.TextDirection;
                    }
                  }),
                  Object.defineProperty(n, "ValidTag", {
                    enumerable: !0,
                    get: function () {
                      return a.ValidTag;
                    }
                  });
                var r = e("./text"),
                  a = e("./text.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/index.ts" }
    ],
    [
      5277,
      { "..": 5242, "../../../helpers/constants/design-system": 5537, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Text = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
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
                n.Text = r.default.forwardRef(
                  (
                    {
                      variant: e = o.TextVariant.bodyMd,
                      fontWeight: t,
                      fontStyle: n,
                      textTransform: s,
                      textAlign: c,
                      textDirection: u,
                      overflowWrap: d,
                      ellipsis: p,
                      className: f = "",
                      children: m,
                      ...h
                    },
                    y
                  ) => {
                    const g = ((e) => {
                        switch (e) {
                          case o.TextVariant.displayMd:
                            return "h1";
                          case o.TextVariant.headingLg:
                            return "h2";
                          case o.TextVariant.headingMd:
                            return "h3";
                          case o.TextVariant.headingSm:
                            return "h4";
                          case o.TextVariant.inherit:
                            return "span";
                          default:
                            return "p";
                        }
                      })(e),
                      b = (0, a.default)("mm-text", f, `mm-text--${e}`, {
                        [`mm-text--font-weight-${t}`]: Boolean(t),
                        [`mm-text--font-style-${n}`]: Boolean(n),
                        "mm-text--ellipsis": Boolean(p),
                        [`mm-text--text-transform-${s}`]: Boolean(s),
                        [`mm-text--text-align-${c}`]: Boolean(c),
                        [`mm-text--overflow-wrap-${d}`]: Boolean(d)
                      });
                    return r.default.createElement(
                      i.Box,
                      l({ className: (0, a.default)(b), as: g, dir: u, ref: y, color: o.TextColor.textDefault }, h),
                      m
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/text.tsx" }
    ],
    [
      5278,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ValidTag = n.TextDirection = n.InvisibleCharacter = void 0);
                n.TextDirection = (function (e) {
                  return (e.LeftToRight = "ltr"), (e.RightToLeft = "rtl"), (e.Auto = "auto"), e;
                })({});
                n.InvisibleCharacter = "​";
                n.ValidTag = (function (e) {
                  return (
                    (e.Dd = "dd"),
                    (e.Div = "div"),
                    (e.Dt = "dt"),
                    (e.Em = "em"),
                    (e.H1 = "h1"),
                    (e.H2 = "h2"),
                    (e.H3 = "h3"),
                    (e.H4 = "h4"),
                    (e.H5 = "h5"),
                    (e.H6 = "h6"),
                    (e.Li = "li"),
                    (e.P = "p"),
                    (e.Span = "span"),
                    (e.Strong = "strong"),
                    (e.Ul = "ul"),
                    (e.Label = "label"),
                    (e.Input = "input"),
                    (e.Header = "header"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/text.types.ts" }
    ],
    [
      5279,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsAuthenticate = void 0);
                var r,
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  o = (function (e, t) {
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
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../store/actions"),
                  u = e("../../component-library");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const p = ({ address: e, onCancel: t, setPrivateKey: n, setShowHoldToReveal: r }) => {
                  const a = (0, l.useI18nContext)(),
                    d = (0, i.useDispatch)(),
                    [p, f] = (0, o.useState)(""),
                    m = (0, i.useSelector)((e) => e.appState.warning),
                    h = (0, o.useCallback)(() => {
                      d((0, c.exportAccount)(p, e, n, r))
                        .then((e) => (d((0, c.hideWarning)()), e))
                        .catch(() => {});
                    }, [d, p, e, n, r]),
                    y = (0, o.useCallback)(
                      (e) => {
                        "Enter" === e.key && h();
                      },
                      [h]
                    );
                  return o.default.createElement(
                    o.default.Fragment,
                    null,
                    o.default.createElement(u.FormTextField, {
                      marginTop: 6,
                      id: "account-details-authenticate",
                      label: a("enterYourPassword"),
                      placeholder: a("password"),
                      error: Boolean(m),
                      helpText: m,
                      onChange: (e) => f(e.target.value),
                      value: p,
                      variant: s.TextVariant.bodySm,
                      type: "password",
                      inputProps: { onKeyPress: y },
                      labelProps: { fontWeight: s.FontWeight.Medium },
                      autoFocus: !0
                    }),
                    o.default.createElement(u.BannerAlert, {
                      marginTop: 6,
                      severity: s.Severity.Danger,
                      description: a("privateKeyWarning")
                    }),
                    o.default.createElement(
                      u.Box,
                      { display: s.Display.Flex, marginTop: 6, gap: 2 },
                      o.default.createElement(u.ButtonSecondary, { onClick: t, block: !0 }, a("cancel")),
                      o.default.createElement(u.ButtonPrimary, { onClick: h, disabled: "" === p, block: !0 }, a("confirm"))
                    )
                  );
                };
                (n.AccountDetailsAuthenticate = p),
                  (p.propTypes = {
                    address: a.default.string.isRequired,
                    onCancel: a.default.func.isRequired,
                    setPrivateKey: a.default.func.isRequired,
                    setShowHoldToReveal: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-authenticate.js" }
    ],
    [
      528,
      {
        "./_version": 527,
        "@ethersproject/abstract-provider": 435,
        "@ethersproject/abstract-signer": 437,
        "@ethersproject/address": 439,
        "@ethersproject/bytes": 448,
        "@ethersproject/hash": 461,
        "@ethersproject/hdnode": 466,
        "@ethersproject/json-wallets": 469,
        "@ethersproject/keccak256": 474,
        "@ethersproject/logger": 477,
        "@ethersproject/properties": 483,
        "@ethersproject/random": 505,
        "@ethersproject/signing-key": 515,
        "@ethersproject/transactions": 524
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var r,
                  a =
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
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                          }),
                        r(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function n() {
                        this.constructor = e;
                      }
                      r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                    }),
                  o =
                    (this && this.__awaiter) ||
                    function (e, t, n, r) {
                      return new (n || (n = Promise))(function (a, o) {
                        function i(e) {
                          try {
                            l(r.next(e));
                          } catch (e) {
                            o(e);
                          }
                        }
                        function s(e) {
                          try {
                            l(r.throw(e));
                          } catch (e) {
                            o(e);
                          }
                        }
                        function l(e) {
                          var t;
                          e.done
                            ? a(e.value)
                            : ((t = e.value),
                              t instanceof n
                                ? t
                                : new n(function (e) {
                                    e(t);
                                  })).then(i, s);
                        }
                        l((r = r.apply(e, t || [])).next());
                      });
                    },
                  i =
                    (this && this.__generator) ||
                    function (e, t) {
                      var n,
                        r,
                        a,
                        o,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & a[0]) throw a[1];
                            return a[1];
                          },
                          trys: [],
                          ops: []
                        };
                      return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function s(o) {
                        return function (s) {
                          return (function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) &&
                                    !(a = a.call(r, o[1])).done)
                                )
                                  return a;
                                switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                                  case 0:
                                  case 1:
                                    a = o;
                                    break;
                                  case 4:
                                    return i.label++, { value: o[1], done: !1 };
                                  case 5:
                                    i.label++, (r = o[1]), (o = [0]);
                                    continue;
                                  case 7:
                                    (o = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (!((a = i.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                                      i = 0;
                                      continue;
                                    }
                                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                                      i.label = o[1];
                                      break;
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                      (i.label = a[1]), (a = o);
                                      break;
                                    }
                                    if (a && i.label < a[2]) {
                                      (i.label = a[2]), i.ops.push(o);
                                      break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                o = t.call(e, i);
                              } catch (e) {
                                (o = [6, e]), (r = 0);
                              } finally {
                                n = a = 0;
                              }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                          })([o, s]);
                        };
                      }
                    };
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.verifyTypedData = n.verifyMessage = n.Wallet = void 0);
                var s = e("@ethersproject/address"),
                  l = e("@ethersproject/abstract-provider"),
                  c = e("@ethersproject/abstract-signer"),
                  u = e("@ethersproject/bytes"),
                  d = e("@ethersproject/hash"),
                  p = e("@ethersproject/hdnode"),
                  f = e("@ethersproject/keccak256"),
                  m = e("@ethersproject/properties"),
                  h = e("@ethersproject/random"),
                  y = e("@ethersproject/signing-key"),
                  g = e("@ethersproject/json-wallets"),
                  b = e("@ethersproject/transactions"),
                  v = e("@ethersproject/logger"),
                  T = e("./_version"),
                  E = new v.Logger(T.version);
                var w = (function (e) {
                  function t(t, n) {
                    var r,
                      a = e.call(this) || this;
                    if (null != (r = t) && (0, u.isHexString)(r.privateKey, 32) && null != r.address) {
                      var o = new y.SigningKey(t.privateKey);
                      if (
                        ((0, m.defineReadOnly)(a, "_signingKey", function () {
                          return o;
                        }),
                        (0, m.defineReadOnly)(a, "address", (0, b.computeAddress)(a.publicKey)),
                        a.address !== (0, s.getAddress)(t.address) &&
                          E.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"),
                        (function (e) {
                          var t = e.mnemonic;
                          return t && t.phrase;
                        })(t))
                      ) {
                        var i = t.mnemonic;
                        (0, m.defineReadOnly)(a, "_mnemonic", function () {
                          return { phrase: i.phrase, path: i.path || p.defaultPath, locale: i.locale || "en" };
                        });
                        var c = a.mnemonic,
                          d = p.HDNode.fromMnemonic(c.phrase, null, c.locale).derivePath(c.path);
                        (0, b.computeAddress)(d.privateKey) !== a.address &&
                          E.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
                      } else
                        (0, m.defineReadOnly)(a, "_mnemonic", function () {
                          return null;
                        });
                    } else {
                      if (y.SigningKey.isSigningKey(t))
                        "secp256k1" !== t.curve && E.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"),
                          (0, m.defineReadOnly)(a, "_signingKey", function () {
                            return t;
                          });
                      else {
                        "string" == typeof t && t.match(/^[0-9a-f]*$/i) && 64 === t.length && (t = "0x" + t);
                        var f = new y.SigningKey(t);
                        (0, m.defineReadOnly)(a, "_signingKey", function () {
                          return f;
                        });
                      }
                      (0, m.defineReadOnly)(a, "_mnemonic", function () {
                        return null;
                      }),
                        (0, m.defineReadOnly)(a, "address", (0, b.computeAddress)(a.publicKey));
                    }
                    return (
                      n && !l.Provider.isProvider(n) && E.throwArgumentError("invalid provider", "provider", n),
                      (0, m.defineReadOnly)(a, "provider", n || null),
                      a
                    );
                  }
                  return (
                    a(t, e),
                    Object.defineProperty(t.prototype, "mnemonic", {
                      get: function () {
                        return this._mnemonic();
                      },
                      enumerable: !1,
                      configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "privateKey", {
                      get: function () {
                        return this._signingKey().privateKey;
                      },
                      enumerable: !1,
                      configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "publicKey", {
                      get: function () {
                        return this._signingKey().publicKey;
                      },
                      enumerable: !1,
                      configurable: !0
                    }),
                    (t.prototype.getAddress = function () {
                      return Promise.resolve(this.address);
                    }),
                    (t.prototype.connect = function (e) {
                      return new t(this, e);
                    }),
                    (t.prototype.signTransaction = function (e) {
                      var t = this;
                      return (0, m.resolveProperties)(e).then(function (n) {
                        null != n.from &&
                          ((0, s.getAddress)(n.from) !== t.address &&
                            E.throwArgumentError("transaction from address mismatch", "transaction.from", e.from),
                          delete n.from);
                        var r = t._signingKey().signDigest((0, f.keccak256)((0, b.serialize)(n)));
                        return (0, b.serialize)(n, r);
                      });
                    }),
                    (t.prototype.signMessage = function (e) {
                      return o(this, void 0, void 0, function () {
                        return i(this, function (t) {
                          return [2, (0, u.joinSignature)(this._signingKey().signDigest((0, d.hashMessage)(e)))];
                        });
                      });
                    }),
                    (t.prototype._signTypedData = function (e, t, n) {
                      return o(this, void 0, void 0, function () {
                        var r,
                          a = this;
                        return i(this, function (o) {
                          switch (o.label) {
                            case 0:
                              return [
                                4,
                                d._TypedDataEncoder.resolveNames(e, t, n, function (e) {
                                  return (
                                    null == a.provider &&
                                      E.throwError("cannot resolve ENS names without a provider", v.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "resolveName",
                                        value: e
                                      }),
                                    a.provider.resolveName(e)
                                  );
                                })
                              ];
                            case 1:
                              return (
                                (r = o.sent()),
                                [2, (0, u.joinSignature)(this._signingKey().signDigest(d._TypedDataEncoder.hash(r.domain, t, r.value)))]
                              );
                          }
                        });
                      });
                    }),
                    (t.prototype.encrypt = function (e, t, n) {
                      if (("function" != typeof t || n || ((n = t), (t = {})), n && "function" != typeof n))
                        throw new Error("invalid callback");
                      return t || (t = {}), (0, g.encryptKeystore)(this, e, t, n);
                    }),
                    (t.createRandom = function (e) {
                      var n = (0, h.randomBytes)(16);
                      e || (e = {}),
                        e.extraEntropy &&
                          (n = (0, u.arrayify)((0, u.hexDataSlice)((0, f.keccak256)((0, u.concat)([n, e.extraEntropy])), 0, 16)));
                      var r = (0, p.entropyToMnemonic)(n, e.locale);
                      return t.fromMnemonic(r, e.path, e.locale);
                    }),
                    (t.fromEncryptedJson = function (e, n, r) {
                      return (0, g.decryptJsonWallet)(e, n, r).then(function (e) {
                        return new t(e);
                      });
                    }),
                    (t.fromEncryptedJsonSync = function (e, n) {
                      return new t((0, g.decryptJsonWalletSync)(e, n));
                    }),
                    (t.fromMnemonic = function (e, n, r) {
                      return n || (n = p.defaultPath), new t(p.HDNode.fromMnemonic(e, null, r).derivePath(n));
                    }),
                    t
                  );
                })(c.Signer);
                (n.Wallet = w),
                  (n.verifyMessage = function (e, t) {
                    return (0, b.recoverAddress)((0, d.hashMessage)(e), t);
                  }),
                  (n.verifyTypedData = function (e, t, n, r) {
                    return (0, b.recoverAddress)(d._TypedDataEncoder.hash(e, t, n), r);
                  });
              };
            };
      },
      {
        package: "@truffle/decoder>@truffle/encoder>@ensdomains/ensjs>ethers>@ethersproject/wallet",
        file: "node_modules/@ethersproject/wallet/lib/index.js"
      }
    ],
    [
      5280,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
        "../../ui/editable-label/editable-label": 5403,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsDisplay = void 0);
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
                  a = y(e("prop-types")),
                  o = e("react-redux"),
                  i = y(e("../../ui/qr-code")),
                  s = y(e("../../ui/editable-label/editable-label")),
                  l = e("../../../store/actions"),
                  c = e("../../../selectors"),
                  u = e("../../../helpers/utils/util"),
                  d = e("../../component-library"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../../shared/constants/metametrics"),
                  h = e("../../../hooks/useI18nContext");
                function y(e) {
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
                const b = ({ accounts: e, accountName: t, address: n, onExportClick: a }) => {
                  const y = (0, o.useDispatch)(),
                    g = (0, r.useContext)(f.MetaMetricsContext),
                    b = (0, h.useI18nContext)(),
                    v = (0, o.useSelector)(c.getMetaMaskKeyrings).find((e) => e.accounts.includes(n)),
                    T = (0, u.isAbleToExportAccount)(null == v ? void 0 : v.type),
                    E = (0, o.useSelector)(c.getCurrentChainId),
                    w = (0, o.useSelector)(c.getHardwareWalletType);
                  return r.default.createElement(
                    d.Box,
                    { display: p.Display.Flex, alignItems: p.AlignItems.center, flexDirection: p.FlexDirection.Column },
                    r.default.createElement(s.default, {
                      defaultValue: t,
                      onSubmit: (e) => {
                        y((0, l.setAccountLabel)(n, e)),
                          g({
                            category: m.MetaMetricsEventCategory.Accounts,
                            event: m.MetaMetricsEventName.AccountRenamed,
                            properties: { location: "Account Details Modal", chain_id: E, account_hardware_type: w }
                          });
                      },
                      accounts: e
                    }),
                    r.default.createElement(i.default, { Qr: { data: n } }),
                    T
                      ? r.default.createElement(
                          d.ButtonSecondary,
                          {
                            block: !0,
                            size: d.ButtonSecondarySize.Lg,
                            variant: p.TextVariant.bodyMd,
                            onClick: () => {
                              g({
                                category: m.MetaMetricsEventCategory.Accounts,
                                event: m.MetaMetricsEventName.KeyExportSelected,
                                properties: { key_type: m.MetaMetricsEventKeyType.Pkey, location: "Account Details Modal" }
                              }),
                                a();
                            }
                          },
                          b("showPrivateKey")
                        )
                      : null
                  );
                };
                (n.AccountDetailsDisplay = b),
                  (b.propTypes = {
                    accounts: a.default.array.isRequired,
                    accountName: a.default.string.isRequired,
                    address: a.default.string.isRequired,
                    onExportClick: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-display.js" }
    ],
    [
      5281,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsKey = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../hooks/useCopyToClipboard");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ accountName: e, onClose: t, privateKey: n }) => {
                  const a = (0, s.useI18nContext)(),
                    [c, u] = (0, l.useCopyToClipboard)();
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      o.Text,
                      { marginTop: 6, variant: i.TextVariant.bodySm, style: { wordBreak: "break-word" } },
                      a("privateKeyCopyWarning", [e])
                    ),
                    r.default.createElement(
                      o.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Row,
                        alignItems: i.AlignItems.center,
                        borderRadius: i.BorderRadius.SM,
                        borderWidth: 1,
                        borderColor: i.BorderColor.default,
                        padding: 4,
                        gap: 4
                      },
                      r.default.createElement(
                        o.Text,
                        { "data-testid": "account-details-key", variant: i.TextVariant.bodySm, style: { wordBreak: "break-word" } },
                        n
                      ),
                      r.default.createElement(o.ButtonIcon, { onClick: () => u(n), iconName: c ? o.IconName.CopySuccess : o.IconName.Copy })
                    ),
                    r.default.createElement(
                      o.BannerAlert,
                      { severity: i.Severity.Danger, marginTop: 4 },
                      r.default.createElement(o.Text, { variant: i.TextVariant.bodySm }, a("privateKeyWarning"))
                    ),
                    r.default.createElement(o.ButtonPrimary, { marginTop: 6, onClick: t, block: !0 }, a("done"))
                  );
                };
                (n.AccountDetailsKey = u),
                  (u.propTypes = {
                    accountName: a.default.string.isRequired,
                    onClose: a.default.func.isRequired,
                    privateKey: a.default.string.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-key.js" }
    ],
    [
      5282,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../app/modals/hold-to-reveal-modal/hold-to-reveal-modal": 4977,
        "../../component-library": 5242,
        "../address-copy-button": 5295,
        "./account-details-authenticate": 5279,
        "./account-details-display": 5280,
        "./account-details-key": 5281,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetails = void 0);
                var r = v(e("prop-types")),
                  a = (function (e, t) {
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
                  o = e("react-redux"),
                  i = e("../../../../shared/constants/metametrics"),
                  s = e("../../../contexts/metametrics"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../selectors"),
                  d = e("../../../store/actions"),
                  p = v(e("../../app/modals/hold-to-reveal-modal/hold-to-reveal-modal")),
                  f = e("../../component-library"),
                  m = e("../address-copy-button"),
                  h = e("./account-details-authenticate"),
                  y = e("./account-details-display"),
                  g = e("./account-details-key");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const T = ({ address: e }) => {
                  const t = (0, o.useDispatch)(),
                    n = (0, c.useI18nContext)(),
                    r = (0, a.useContext)(s.MetaMetricsContext),
                    b = (0, o.useSelector)(u.getUseBlockie),
                    v = (0, o.useSelector)(u.getMetaMaskAccountsOrdered),
                    { name: T } = v.find((t) => t.address === e),
                    [E, w] = (0, a.useState)(!1),
                    [O, _] = (0, a.useState)(!1),
                    [x, k] = (0, a.useState)(""),
                    S = (0, a.useCallback)(() => {
                      t((0, d.setAccountDetailsAddress)("")), t((0, d.clearAccountDetails)()), t((0, d.hideWarning)());
                    }, [t]),
                    C = a.default.createElement(f.AvatarAccount, {
                      variant: b ? f.AvatarAccountVariant.Blockies : f.AvatarAccountVariant.Jazzicon,
                      address: e,
                      size: f.AvatarAccountSize.Lg,
                      style: { margin: "0 auto" }
                    });
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(
                      f.Modal,
                      { isOpen: !E, onClose: S },
                      a.default.createElement(f.ModalOverlay, null),
                      a.default.createElement(
                        f.ModalContent,
                        null,
                        a.default.createElement(
                          f.ModalHeader,
                          {
                            onClose: S,
                            onBack:
                              O &&
                              (() => {
                                t((0, d.hideWarning)()), _(!1);
                              })
                          },
                          O ? n("showPrivateKey") : C
                        ),
                        O
                          ? a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                f.Box,
                                { display: l.Display.Flex, alignItems: l.AlignItems.center, flexDirection: l.FlexDirection.Column },
                                C,
                                a.default.createElement(
                                  f.Text,
                                  {
                                    marginTop: 2,
                                    marginBottom: 2,
                                    variant: l.TextVariant.bodyLgMedium,
                                    style: { wordBreak: "break-word" }
                                  },
                                  T
                                ),
                                a.default.createElement(m.AddressCopyButton, { address: e, shorten: !0 })
                              ),
                              x
                                ? a.default.createElement(g.AccountDetailsKey, { accountName: T, onClose: S, privateKey: x })
                                : a.default.createElement(h.AccountDetailsAuthenticate, {
                                    address: e,
                                    onCancel: S,
                                    setPrivateKey: k,
                                    setShowHoldToReveal: w
                                  })
                            )
                          : a.default.createElement(y.AccountDetailsDisplay, {
                              accounts: v,
                              accountName: T,
                              address: e,
                              onExportClick: () => _(!0)
                            })
                      )
                    ),
                    a.default.createElement(p.default, {
                      isOpen: E,
                      onClose: () => {
                        r({
                          category: i.MetaMetricsEventCategory.Keys,
                          event: i.MetaMetricsEventName.KeyExportCanceled,
                          properties: { key_type: i.MetaMetricsEventKeyType.Pkey }
                        }),
                          k(""),
                          w(!1);
                      },
                      onLongPressed: () => {
                        w(!1);
                      },
                      holdToRevealType: "PrivateKey"
                    })
                  );
                };
                (n.AccountDetails = T), (T.propTypes = { address: r.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details.js" }
    ],
    [
      5283,
      { "./account-details": 5282 },
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
                      return r.AccountDetails;
                    }
                  });
                var r = e("./account-details");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/index.js" }
    ],
    [
      5284,
      {
        "..": 5327,
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/metrics": 5568,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListItemMenu = void 0);
                var r,
                  a = (function (e, t) {
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
                  o = e("react-redux"),
                  i = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  s = e("../../../contexts/metametrics"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../selectors"),
                  u = e("../../../ducks/metamask/metamask"),
                  d = e("../../ui/menu"),
                  p = e("../../component-library"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../store/actions"),
                  h = e("../../../helpers/constants/design-system"),
                  y = e("../../../helpers/utils/metrics"),
                  g = e("..");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = "Account Options",
                  T = ({ anchorElement: e, onClose: t, closeMenu: n, isRemovable: r, identity: i, isOpen: b }) => {
                    const T = (0, l.useI18nContext)(),
                      E = (0, a.useContext)(s.MetaMetricsContext),
                      w = (0, o.useDispatch)(),
                      O = (0, o.useSelector)(c.getCurrentChainId),
                      _ = (0, o.useSelector)(c.getHardwareWalletType),
                      x = (0, o.useSelector)((e) => (0, u.findKeyringForAddress)(e, i.address)),
                      k = (0, y.formatAccountType)((0, c.getAccountTypeForKeyring)(x)),
                      S = (0, a.useRef)(null),
                      C = (0, a.useRef)(null),
                      A = (0, a.useRef)(null),
                      N = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                      N.current ? (S.current = N.current) : A.current ? (S.current = A.current) : (S.current = C.current);
                    }, [N.current, A.current, C.current]);
                    const I = (0, a.useCallback)(
                        (e) => {
                          "Tab" === e.key && e.target === S.current && t();
                        },
                        [t]
                      ),
                      P = (0, a.useRef)(null),
                      M = (0, a.useCallback)(
                        (e) => {
                          null != P && P.current && !P.current.contains(e.target) && t();
                        },
                        [t]
                      );
                    return (
                      (0, a.useEffect)(
                        () => (
                          document.addEventListener("mousedown", M),
                          () => {
                            document.removeEventListener("mousedown", M);
                          }
                        ),
                        [M]
                      ),
                      a.default.createElement(
                        p.Popover,
                        {
                          className: "multichain-account-list-item-menu__popover",
                          referenceElement: e,
                          role: p.PopoverRole.Dialog,
                          position: p.PopoverPosition.Bottom,
                          offset: [0, 0],
                          padding: 0,
                          isOpen: b,
                          isPortal: !0,
                          preventOverflow: !0
                        },
                        a.default.createElement(
                          p.ModalFocus,
                          { restoreFocus: !0, initialFocusRef: e },
                          a.default.createElement(
                            "div",
                            { onKeyDown: I, ref: P },
                            a.default.createElement(g.AccountDetailsMenuItem, {
                              metricsLocation: v,
                              closeMenu: n,
                              address: i.address,
                              textProps: { variant: h.TextVariant.bodySm }
                            }),
                            a.default.createElement(g.ViewExplorerMenuItem, {
                              metricsLocation: v,
                              closeMenu: n,
                              textProps: { variant: h.TextVariant.bodySm },
                              address: i.address
                            }),
                            r
                              ? a.default.createElement(
                                  d.MenuItem,
                                  {
                                    ref: A,
                                    "data-testid": "account-list-menu-remove",
                                    onClick: () => {
                                      w((0, m.showModal)({ name: "CONFIRM_REMOVE_ACCOUNT", identity: i })),
                                        E({
                                          event: f.MetaMetricsEventName.AccountRemoved,
                                          category: f.MetaMetricsEventCategory.Accounts,
                                          properties: { account_hardware_type: _, chain_id: O, account_type: k }
                                        }),
                                        t(),
                                        null == n || n();
                                    },
                                    iconName: p.IconName.Trash
                                  },
                                  a.default.createElement(p.Text, { variant: h.TextVariant.bodySm }, T("removeAccount"))
                                )
                              : null
                          )
                        )
                      )
                    );
                  };
                (n.AccountListItemMenu = T),
                  (T.propTypes = {
                    anchorElement: i.default.instanceOf(window.Element),
                    onClose: i.default.func.isRequired,
                    isOpen: i.default.bool.isRequired,
                    closeMenu: i.default.func,
                    isRemovable: i.default.bool.isRequired,
                    identity: i.default.shape({
                      name: i.default.string.isRequired,
                      address: i.default.string.isRequired,
                      balance: i.default.string.isRequired
                    }).isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item-menu/account-list-item-menu.js" }
    ],
    [
      5285,
      { "./account-list-item-menu": 5284 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListItemMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItemMenu;
                    }
                  });
                var r = e("./account-list-item-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item-menu/index.js" }
    ],
    [
      5286,
      {
        "..": 5327,
        "../../../../shared/constants/hardware-wallets": 4754,
        "../../../../shared/constants/keyring": 4755,
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useAccountTotalFiatBalance": 5591,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../app/user-preferenced-currency-display/user-preferenced-currency-display.component": 5168,
        "../../component-library": 5242,
        "../../ui/tooltip/tooltip": 5503,
        "@metamask/controller-utils": 1124,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListItem = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = _(t);
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
                  a = O(e("prop-types")),
                  o = O(e("classnames")),
                  i = e("react-redux"),
                  s = e("@metamask/controller-utils"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/utils/util"),
                  u = e(".."),
                  d = e("../../component-library"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../../shared/constants/hardware-wallets"),
                  m = e("../../../../shared/constants/keyring"),
                  h = O(e("../../app/user-preferenced-currency-display/user-preferenced-currency-display.component")),
                  y = e("../../../helpers/constants/common"),
                  g = e("../../../ducks/metamask/metamask"),
                  b = O(e("../../ui/tooltip/tooltip")),
                  v = e("../../../../shared/constants/metametrics"),
                  T = e("../../../contexts/metametrics"),
                  E = e("../../../selectors"),
                  w = e("../../../hooks/useAccountTotalFiatBalance");
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (_ = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const x = ({
                  identity: e,
                  selected: t = !1,
                  onClick: n,
                  closeMenu: a,
                  connectedAvatar: O,
                  connectedAvatarName: _,
                  showOptions: x = !1
                }) => {
                  const k = (0, l.useI18nContext)(),
                    [S, C] = (0, r.useState)(!1),
                    [A, N] = (0, r.useState)(),
                    I = (0, i.useSelector)(E.getUseBlockie),
                    { totalWeiBalance: P, orderedTokenList: M } = (0, w.useAccountTotalFiatBalance)(e.address),
                    j = e.balance,
                    B = (0, r.useRef)(null);
                  (0, r.useEffect)(() => {
                    var e, n;
                    t && (null === (e = B.current) || void 0 === e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e));
                  }, [B, t]);
                  const R = (0, i.useSelector)((t) => (0, g.findKeyringForAddress)(t, e.address)),
                    D = (function (e = {}, t) {
                      const { type: n } = e;
                      switch (n) {
                        case m.KeyringType.qr:
                          return f.HardwareKeyringNames.qr;
                        case m.KeyringType.imported:
                          return t("imported");
                        case m.KeyringType.trezor:
                          return f.HardwareKeyringNames.trezor;
                        case m.KeyringType.ledger:
                          return f.HardwareKeyringNames.ledger;
                        case m.KeyringType.lattice:
                          return f.HardwareKeyringNames.lattice;
                        case m.KeyringType.snap:
                          return `${t("snaps")} (${t("beta")})`;
                        default:
                          return null;
                      }
                    })(R, k),
                    L = (0, r.useContext)(T.MetaMetricsContext);
                  (0, i.useSelector)(E.getNativeCurrencyImage), (0, i.useSelector)(g.getNativeCurrency);
                  return r.default.createElement(
                    d.Box,
                    {
                      display: p.Display.Flex,
                      padding: 4,
                      backgroundColor: t ? p.Color.primaryMuted : p.Color.transparent,
                      className: (0, o.default)("multichain-account-list-item", {
                        "multichain-account-list-item--selected": t,
                        "multichain-account-list-item--connected": Boolean(O)
                      }),
                      ref: B,
                      onClick: () => {
                        S || n();
                      }
                    },
                    t &&
                      r.default.createElement(d.Box, {
                        className: "multichain-account-list-item__selected-indicator",
                        borderRadius: p.BorderRadius.pill,
                        backgroundColor: p.Color.primaryDefault
                      }),
                    r.default.createElement(d.AvatarAccount, {
                      borderColor: p.BorderColor.transparent,
                      size: p.Size.SM,
                      address: e.address,
                      variant: I ? d.AvatarAccountVariant.Blockies : d.AvatarAccountVariant.Jazzicon,
                      marginInlineEnd: 2
                    }),
                    r.default.createElement(
                      d.Box,
                      {
                        display: p.Display.Flex,
                        flexDirection: p.FlexDirection.Column,
                        className: "multichain-account-list-item__content"
                      },
                      r.default.createElement(
                        d.Box,
                        { display: p.Display.Flex, flexDirection: p.FlexDirection.Column },
                        r.default.createElement(
                          d.Box,
                          { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween },
                          r.default.createElement(
                            d.Box,
                            { className: "multichain-account-list-item__account-name", marginInlineEnd: 2 },
                            r.default.createElement(
                              d.Text,
                              {
                                as: "button",
                                onClick: (e) => {
                                  e.stopPropagation(), n();
                                },
                                variant: p.TextVariant.bodyMdMedium,
                                className: "multichain-account-list-item__account-name__button",
                                padding: 0,
                                backgroundColor: p.BackgroundColor.transparent,
                                width: p.BlockSize.Full,
                                textAlign: p.TextAlign.Left,
                                ellipsis: !0
                              },
                              e.name.length > 17
                                ? r.default.createElement(
                                    b.default,
                                    { title: e.name, position: "bottom", wrapperClassName: "multichain-account-list-item__tooltip" },
                                    e.name
                                  )
                                : e.name
                            )
                          ),
                          r.default.createElement(
                            d.Text,
                            {
                              as: "div",
                              className: "multichain-account-list-item__asset",
                              display: p.Display.Flex,
                              flexDirection: p.FlexDirection.Row,
                              alignItems: p.AlignItems.center,
                              justifyContent: p.JustifyContent.flexEnd,
                              ellipsis: !0,
                              textAlign: p.TextAlign.End
                            },
                            r.default.createElement(h.default, { ethNumberOfDecimals: 3, value: j, type: y.PRIMARY })
                          )
                        )
                      ),
                      r.default.createElement(
                        d.Box,
                        { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween },
                        r.default.createElement(
                          d.Box,
                          { display: p.Display.Flex, alignItems: p.AlignItems.center },
                          O
                            ? r.default.createElement(d.AvatarFavicon, {
                                size: p.Size.XS,
                                src: O,
                                name: _,
                                className: "multichain-account-list-item__avatar"
                              })
                            : null,
                          r.default.createElement(
                            d.Text,
                            { variant: p.TextVariant.bodySm, color: p.Color.textAlternative },
                            (0, c.shortenAddress)((0, s.toChecksumHexAddress)(e.address))
                          )
                        ),
                        r.default.createElement(
                          d.Text,
                          { variant: p.TextVariant.bodySm, color: p.Color.textAlternative, textAlign: p.TextAlign.End, as: "div" },
                          r.default.createElement(h.default, { ethNumberOfDecimals: 3, value: j, type: y.SECONDARY })
                        )
                      ),
                      D
                        ? r.default.createElement(d.Tag, {
                            label: D,
                            labelProps: { variant: p.TextVariant.bodyXs, color: p.Color.textAlternative }
                          })
                        : null
                    ),
                    x
                      ? r.default.createElement(d.ButtonIcon, {
                          ariaLabel: `${e.name} ${k("options")}`,
                          iconName: d.IconName.MoreVertical,
                          size: d.IconSize.Sm,
                          ref: (e) => {
                            N(e);
                          },
                          onClick: (e) => {
                            e.stopPropagation(),
                              S ||
                                L({
                                  event: v.MetaMetricsEventName.AccountDetailMenuOpened,
                                  category: v.MetaMetricsEventCategory.Navigation,
                                  properties: { location: "Account Options" }
                                }),
                              C(!S);
                          },
                          "data-testid": "account-list-item-menu-button"
                        })
                      : null,
                    x
                      ? r.default.createElement(u.AccountListItemMenu, {
                          anchorElement: A,
                          identity: e,
                          onClose: () => C(!1),
                          isOpen: S,
                          isRemovable: (null == R ? void 0 : R.type) !== m.KeyringType.hdKeyTree,
                          closeMenu: a
                        })
                      : null
                  );
                };
                (n.AccountListItem = x),
                  (x.propTypes = {
                    identity: a.default.shape({
                      name: a.default.string.isRequired,
                      address: a.default.string.isRequired,
                      balance: a.default.string.isRequired
                    }).isRequired,
                    selected: a.default.bool,
                    onClick: a.default.func.isRequired,
                    closeMenu: a.default.func,
                    connectedAvatar: a.default.string,
                    connectedAvatarName: a.default.string,
                    showOptions: a.default.bool
                  }),
                  (x.displayName = "AccountListItem");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item/account-list-item.js" }
    ],
    [
      5287,
      { "./account-list-item": 5286 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItem;
                    }
                  });
                var r = e("./account-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item/index.js" }
    ],
    [
      5288,
      {
        "..": 5327,
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/metametrics": 4758,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../component-library": 5242,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListMenu = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
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
                  a = v(e("prop-types")),
                  o = e("react-router-dom"),
                  i = v(e("fuse.js")),
                  s = e("react-redux"),
                  l = e("../../component-library"),
                  c = e(".."),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../store/actions"),
                  h = e("../../../../shared/constants/metametrics"),
                  y = e("../../../helpers/constants/routes"),
                  g = e("../../../../app/scripts/lib/util"),
                  b = e("../../../../shared/constants/app");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E() {
                  return (
                    (E = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    E.apply(this, arguments)
                  );
                }
                const w = "",
                  O = "menu",
                  _ = "add",
                  x = "import",
                  k = ({ onClose: e, showAccountCreation: t = !0, accountListItemProps: n = {} }) => {
                    const a = (0, d.useI18nContext)(),
                      v = (0, r.useContext)(p.MetaMetricsContext),
                      T = (0, s.useSelector)(f.getMetaMaskAccountsOrdered),
                      k = (0, s.useSelector)(f.getSelectedAccount),
                      S = (0, s.useSelector)(f.getConnectedSubjectsForAllAddresses),
                      C = (0, s.useSelector)(f.getOriginOfCurrentTab),
                      A = (0, o.useHistory)(),
                      N = (0, s.useDispatch)(),
                      I = (0, s.useSelector)(f.getIsAddSnapAccountEnabled),
                      [P, M] = (0, r.useState)(""),
                      [j, B] = (0, r.useState)(w);
                    let R = T;
                    if (P) {
                      const e = new i.default(T, {
                        threshold: 0.2,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: ["name", "address"]
                      });
                      e.setCollection(T), (R = e.search(P));
                    }
                    let D = a("selectAnAccount");
                    j === _ || j === O ? (D = a("addAccount")) : j === x && (D = a("importAccount"));
                    let L = null;
                    return (
                      j !== w && (L = j === O ? () => B(w) : () => B(O)),
                      r.default.createElement(
                        l.Modal,
                        { isOpen: !0, onClose: e },
                        r.default.createElement(l.ModalOverlay, null),
                        r.default.createElement(
                          l.ModalContent,
                          {
                            className: "multichain-account-menu-popover",
                            modalDialogProps: {
                              className: "multichain-account-menu-popover__dialog",
                              padding: 0,
                              display: u.Display.Flex,
                              flexDirection: u.FlexDirection.Column
                            }
                          },
                          r.default.createElement(l.ModalHeader, { padding: 4, onClose: e, onBack: L }, D),
                          j === _
                            ? r.default.createElement(
                                l.Box,
                                { paddingLeft: 4, paddingRight: 4, paddingBottom: 4 },
                                r.default.createElement(c.CreateAccount, {
                                  onActionComplete: (t) => {
                                    t ? e() : B(w);
                                  }
                                })
                              )
                            : null,
                          j === x
                            ? r.default.createElement(
                                l.Box,
                                { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                                r.default.createElement(c.ImportAccount, {
                                  onActionComplete: (t) => {
                                    t ? e() : B(w);
                                  }
                                })
                              )
                            : null,
                          j === O
                            ? r.default.createElement(
                                l.Box,
                                { padding: 4 },
                                r.default.createElement(
                                  l.Box,
                                  null,
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Add,
                                      onClick: () => {
                                        v({
                                          category: h.MetaMetricsEventCategory.Navigation,
                                          event: h.MetaMetricsEventName.AccountAddSelected,
                                          properties: { account_type: h.MetaMetricsEventAccountType.Default, location: "Main Menu" }
                                        }),
                                          B(_);
                                      },
                                      "data-testid": "multichain-account-menu-popover-add-account"
                                    },
                                    a("addNewAccount")
                                  )
                                ),
                                r.default.createElement(
                                  l.Box,
                                  { marginTop: 4 },
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Import,
                                      onClick: () => {
                                        v({
                                          category: h.MetaMetricsEventCategory.Navigation,
                                          event: h.MetaMetricsEventName.AccountAddSelected,
                                          properties: { account_type: h.MetaMetricsEventAccountType.Imported, location: "Main Menu" }
                                        }),
                                          B(x);
                                      }
                                    },
                                    a("importAccount")
                                  )
                                ),
                                r.default.createElement(
                                  l.Box,
                                  { marginTop: 4 },
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Hardware,
                                      onClick: () => {
                                        e(),
                                          v({
                                            category: h.MetaMetricsEventCategory.Navigation,
                                            event: h.MetaMetricsEventName.AccountAddSelected,
                                            properties: { account_type: h.MetaMetricsEventAccountType.Hardware, location: "Main Menu" }
                                          }),
                                          (0, g.getEnvironmentType)() === b.ENVIRONMENT_TYPE_POPUP
                                            ? global.platform.openExtensionInBrowser(y.CONNECT_HARDWARE_ROUTE)
                                            : A.push(y.CONNECT_HARDWARE_ROUTE);
                                      }
                                    },
                                    a("addHardwareWallet")
                                  )
                                ),
                                I
                                  ? r.default.createElement(
                                      l.Box,
                                      { marginTop: 4 },
                                      r.default.createElement(
                                        l.ButtonLink,
                                        {
                                          size: u.Size.SM,
                                          startIconName: l.IconName.Snaps,
                                          onClick: () => {
                                            e(),
                                              (0, g.getEnvironmentType)() === b.ENVIRONMENT_TYPE_POPUP
                                                ? global.platform.openExtensionInBrowser(y.ADD_SNAP_ACCOUNT_ROUTE, null, !0)
                                                : A.push(y.ADD_SNAP_ACCOUNT_ROUTE);
                                          }
                                        },
                                        a("settingAddSnapAccount")
                                      )
                                    )
                                  : null
                              )
                            : null,
                          j === w
                            ? r.default.createElement(
                                r.default.Fragment,
                                null,
                                T.length > 1
                                  ? r.default.createElement(
                                      l.Box,
                                      { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                                      r.default.createElement(l.TextFieldSearch, {
                                        size: u.Size.SM,
                                        width: u.BlockSize.Full,
                                        placeholder: a("searchAccounts"),
                                        value: P,
                                        onChange: (e) => M(e.target.value),
                                        clearButtonOnClick: () => M(""),
                                        clearButtonProps: { size: u.Size.SM },
                                        inputProps: { autoFocus: !0 }
                                      })
                                    )
                                  : null,
                                r.default.createElement(
                                  l.Box,
                                  { className: "multichain-account-menu-popover__list" },
                                  0 === R.length && "" !== P
                                    ? r.default.createElement(
                                        l.Text,
                                        {
                                          paddingLeft: 4,
                                          paddingRight: 4,
                                          color: u.TextColor.textMuted,
                                          "data-testid": "multichain-account-menu-popover-no-results"
                                        },
                                        a("noAccountsFound")
                                      )
                                    : null,
                                  R.map((t) => {
                                    var a;
                                    const o = null === (a = S[t.address]) || void 0 === a ? void 0 : a.find(({ origin: e }) => e === C);
                                    return r.default.createElement(
                                      c.AccountListItem,
                                      E(
                                        {
                                          onClick: () => {
                                            e(),
                                              v({
                                                category: h.MetaMetricsEventCategory.Navigation,
                                                event: h.MetaMetricsEventName.NavAccountSwitched,
                                                properties: { location: "Main Menu" }
                                              }),
                                              N((0, m.setSelectedAccount)(t.address));
                                          },
                                          identity: t,
                                          key: t.address,
                                          selected: k.address === t.address,
                                          closeMenu: e,
                                          connectedAvatar: null == o ? void 0 : o.iconUrl,
                                          connectedAvatarName: null == o ? void 0 : o.name,
                                          showOptions: !0
                                        },
                                        n
                                      )
                                    );
                                  })
                                ),
                                t
                                  ? r.default.createElement(
                                      l.Box,
                                      {
                                        paddingTop: 2,
                                        paddingBottom: 4,
                                        paddingLeft: 4,
                                        paddingRight: 4,
                                        alignItems: u.AlignItems.center,
                                        display: u.Display.Flex
                                      },
                                      r.default.createElement(
                                        l.ButtonSecondary,
                                        {
                                          startIconName: l.IconName.Add,
                                          variant: l.ButtonVariant.Secondary,
                                          size: l.ButtonSecondarySize.Lg,
                                          block: !0,
                                          onClick: () => B(O),
                                          "data-testid": "multichain-account-menu-popover-action-button"
                                        },
                                        a("addImportAccount")
                                      )
                                    )
                                  : null
                              )
                            : null
                        )
                      )
                    );
                  };
                (n.AccountListMenu = k),
                  (k.propTypes = {
                    onClose: a.default.func.isRequired,
                    showAccountCreation: a.default.bool,
                    accountListItemProps: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-menu/account-list-menu.js" }
    ],
    [
      5289,
      { "./account-list-menu": 5288 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListMenu;
                    }
                  });
                var r = e("./account-list-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-menu/index.js" }
    ],
    [
      5290,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "@metamask/controller-utils": 1124,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountPicker = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("react-redux"),
                  s = e("@metamask/controller-utils"),
                  l = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../selectors"),
                  d = e("../../../helpers/utils/util");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
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
                const m = ({
                  address: e,
                  name: t,
                  onClick: n,
                  disabled: a = !1,
                  showAddress: p = !1,
                  addressProps: m = {},
                  labelProps: h = {},
                  textProps: y = {},
                  className: g = "",
                  ...b
                }) => {
                  const v = (0, i.useSelector)(u.getUseBlockie),
                    T = (0, d.shortenAddress)((0, s.toChecksumHexAddress)(e));
                  return r.default.createElement(
                    l.ButtonBase,
                    f(
                      {
                        className: (0, o.default)("multichain-account-picker", g),
                        "data-testid": "account-menu-icon",
                        onClick: n,
                        backgroundColor: c.BackgroundColor.transparent,
                        borderRadius: c.BorderRadius.LG,
                        ellipsis: !0,
                        textProps: { display: c.Display.Flex, alignItems: c.AlignItems.center, gap: 1, ...y },
                        size: p ? l.ButtonBaseSize.Lg : l.ButtonBaseSize.Md,
                        disabled: a,
                        endIconName: l.IconName.ArrowDown,
                        endIconProps: { color: c.IconColor.iconDefault, size: c.Size.SM }
                      },
                      b
                    ),
                    r.default.createElement(l.AvatarAccount, {
                      variant: v ? l.AvatarAccountVariant.Blockies : l.AvatarAccountVariant.Jazzicon,
                      address: e,
                      size: c.Size.SM,
                      borderColor: c.BackgroundColor.backgroundDefault
                    }),
                    r.default.createElement(
                      l.Text,
                      f({ as: "span", ellipsis: !0 }, h, {
                        className: (0, o.default)("multichain-account-picker__label", h.className ?? "")
                      }),
                      t,
                      p
                        ? r.default.createElement(
                            l.Text,
                            f({ color: c.TextColor.textAlternative, variant: c.TextVariant.bodySm, ellipsis: !0 }, m),
                            T
                          )
                        : null
                    )
                  );
                };
                (n.AccountPicker = m),
                  (m.propTypes = {
                    name: a.default.string.isRequired,
                    address: a.default.string.isRequired,
                    onClick: a.default.func.isRequired,
                    disabled: a.default.bool,
                    showAddress: a.default.bool,
                    block: a.default.bool,
                    addressProps: a.default.object,
                    labelProps: a.default.object,
                    textProps: a.default.object,
                    className: a.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-picker/account-picker.js" }
    ],
    [
      5291,
      { "./account-picker": 5290 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountPicker;
                    }
                  });
                var r = e("./account-picker");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-picker/index.js" }
    ],
    [
      5292,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ActivityListItem = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({
                  topContent: e,
                  icon: t,
                  title: n,
                  subtitle: a,
                  midContent: l,
                  children: c,
                  rightContent: u,
                  onClick: d,
                  className: p,
                  "data-testid": f
                }) => {
                  const m = (0, o.default)("activity-list-item", p, { "activity-list-item--single-content-row": !(a || c) });
                  return r.default.createElement(
                    s.Box,
                    {
                      tabIndex: 0,
                      backgroundColor: i.BackgroundColor.backgroundDefault,
                      className: m,
                      onClick: d,
                      onKeyPress: (e) => {
                        "Enter" === e.key && d();
                      },
                      "data-testid": f,
                      padding: 4,
                      display: i.Display.Flex,
                      width: i.BlockSize.Full,
                      flexWrap: i.FlexWrap.Wrap,
                      gap: 4
                    },
                    e &&
                      r.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodyMd, color: i.TextColor.textDefault, display: i.Display.Flex, width: i.BlockSize.Full },
                        e
                      ),
                    r.default.createElement(
                      s.Box,
                      { display: i.Display.Flex, width: i.BlockSize.Full, flexDirection: i.FlexDirection.Row, gap: 4 },
                      t && r.default.createElement(s.Box, { display: i.Display.InlineFlex }, t),
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.InlineFlex, width: i.BlockSize.Full, className: "activity-list-item__content-container" },
                        r.default.createElement(
                          s.Box,
                          {
                            display: i.Display.InlineFlex,
                            width: [i.BlockSize.OneThird, i.BlockSize.SevenTwelfths],
                            flexDirection: i.FlexDirection.Column,
                            className: "activity-list-item__detail-container"
                          },
                          r.default.createElement(
                            s.Text,
                            {
                              ellipsis: !0,
                              textAlign: i.TextAlign.Left,
                              variant: i.TextVariant.bodyLgMedium,
                              fontWeight: i.FontWeight.Medium,
                              "data-testid": "activity-list-item-action"
                            },
                            n
                          ),
                          a &&
                            r.default.createElement(
                              s.Text,
                              {
                                as: "div",
                                ellipsis: !0,
                                textAlign: i.TextAlign.Left,
                                variant: i.TextVariant.bodyMd,
                                fontWeight: i.FontWeight.Normal
                              },
                              a
                            ),
                          c && r.default.createElement(s.Box, { className: "activity-list-item__children" }, c)
                        ),
                        l &&
                          r.default.createElement(
                            s.Box,
                            { display: i.Display.InlineFlex, className: "activity-list-item__mid-content" },
                            l
                          ),
                        u &&
                          r.default.createElement(
                            s.Box,
                            {
                              display: i.Display.InlineFlex,
                              width: i.BlockSize.Full,
                              height: i.BlockSize.Min,
                              flexDirection: i.FlexDirection.Column,
                              alignItems: i.AlignItems.flexEnd,
                              className: "activity-list-item__right-content"
                            },
                            u
                          )
                      )
                    )
                  );
                };
                (n.ActivityListItem = c),
                  (c.propTypes = {
                    topContent: a.default.node,
                    icon: a.default.node,
                    title: a.default.oneOfType([a.default.string, a.default.node]),
                    subtitle: a.default.node,
                    midContent: a.default.node,
                    children: a.default.node,
                    rightContent: a.default.node,
                    onClick: a.default.func,
                    className: a.default.string,
                    "data-testid": a.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/activity-list-item/activity-list-item.js" }
    ],
    [
      5293,
      { "./activity-list-item": 5292 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ActivityListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.ActivityListItem;
                    }
                  });
                var r = e("./activity-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/activity-list-item/index.js" }
    ],
    [
      5294,
      {
        "../../../../shared/constants/time": 4768,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../hooks/useI18nContext": 5602,
        "../../component-library": 5242,
        "../../ui/tooltip/tooltip": 5503,
        "@metamask/controller-utils": 1124,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AddressCopyButton = void 0);
                var r = m(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("classnames")),
                  i = e("@metamask/controller-utils"),
                  s = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useCopyToClipboard"),
                  u = e("../../../helpers/utils/util"),
                  d = m(e("../../ui/tooltip/tooltip")),
                  p = e("../../../hooks/useI18nContext"),
                  f = e("../../../../shared/constants/time");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const h = ({ address: e, shorten: t = !1, wrap: n = !1, onClick: a }) => {
                  const m = (0, i.toChecksumHexAddress)(e),
                    h = t ? (0, u.shortenAddress)(m) : m,
                    [y, g] = (0, c.useCopyToClipboard)(f.MINUTE),
                    b = (0, p.useI18nContext)();
                  return r.default.createElement(
                    d.default,
                    { position: "bottom", title: y ? b("copiedExclamation") : null },
                    r.default.createElement(
                      s.ButtonBase,
                      {
                        backgroundColor: l.BackgroundColor.primaryMuted,
                        onClick: () => {
                          g(m), null == a || a();
                        },
                        paddingRight: 4,
                        paddingLeft: 4,
                        size: l.Size.SM,
                        variant: l.TextVariant.bodySm,
                        color: l.TextColor.primaryDefault,
                        endIconName: y ? s.IconName.CopySuccess : s.IconName.Copy,
                        className: (0, o.default)("multichain-address-copy-button", { "multichain-address-copy-button__address--wrap": n }),
                        borderRadius: l.BorderRadius.pill,
                        alignItems: l.AlignItems.center,
                        "data-testid": "address-copy-button-text"
                      },
                      h
                    )
                  );
                };
                (n.AddressCopyButton = h),
                  (h.propTypes = {
                    address: a.default.string.isRequired,
                    shorten: a.default.bool,
                    wrap: a.default.bool,
                    onClick: a.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-copy-button/address-copy-button.js" }
    ],
    [
      5295,
      { "./address-copy-button": 5294 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AddressCopyButton", {
                    enumerable: !0,
                    get: function () {
                      return r.AddressCopyButton;
                    }
                  });
                var r = e("./address-copy-button");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-copy-button/index.js" }
    ],
    [
      5296,
      { "../../../store/actionConstants": 5964 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.hideSelectActionModal = function () {
                    return { type: r.SELECT_ACTION_MODAL_CLOSE };
                  }),
                  (n.showSelectActionModal = function () {
                    return { type: r.SELECT_ACTION_MODAL_OPEN };
                  });
                var r = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = a(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                })(e("../../../store/actionConstants"));
                function a(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (a = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/app-footer-actions.tsx" }
    ],
    [
      5297,
      {
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../component-library": 5242,
        "./app-footer-actions": 5296,
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
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AppFooter = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/routes"),
                  l = e("../../component-library"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../selectors"),
                  p = e("./app-footer-actions");
                n.AppFooter = () => {
                  var e, t;
                  const n = (0, c.useI18nContext)(),
                    r = (0, o.useLocation)(),
                    f = (0, i.useDispatch)(),
                    m = (0, o.useHistory)(),
                    h = r.pathname === s.DEFAULT_ROUTE,
                    y = r.pathname === s.CONNECTIONS,
                    g = (0, i.useSelector)((e) => e.metamask.isUnlocked),
                    b = (0, i.useSelector)(d.getSelectedAddress),
                    v = (0, i.useSelector)(d.getOriginOfCurrentTab),
                    T =
                      null === (e = (0, i.useSelector)(d.getConnectedSubjectsForAllAddresses)[b]) || void 0 === e
                        ? void 0
                        : e.find(({ origin: e }) => e === v),
                    E = null == T ? void 0 : T.iconUrl,
                    w = null == T ? void 0 : T.name,
                    O = (0, i.useSelector)(d.getTestNetworkBackgroundColor),
                    _ = (0, i.useSelector)(d.getCurrentNetwork);
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    g
                      ? a.default.createElement(
                          a.default.Fragment,
                          null,
                          a.default.createElement(
                            l.Box,
                            {
                              className: "app-footer",
                              "data-test-id": "app-footer",
                              width: u.BlockSize.Full,
                              backgroundColor: u.BackgroundColor.backgroundAlternative,
                              display: u.Display.Flex,
                              flexDirection: u.FlexDirection.Row,
                              alignItems: u.AlignItems.center
                            },
                            a.default.createElement(
                              l.Box,
                              {
                                className: "app-footer__contents",
                                width: u.BlockSize.Full,
                                display: u.Display.Flex,
                                alignItems: u.AlignItems.center,
                                justifyContent: u.JustifyContent.spaceBetween,
                                backgroundColor: u.BackgroundColor.backgroundDefault,
                                flexDirection: u.FlexDirection.Row,
                                padding: 2,
                                paddingLeft: 4,
                                paddingRight: 4,
                                gap: 2
                              },
                              a.default.createElement(
                                l.Box,
                                {
                                  as: "a",
                                  href: "#",
                                  onClick: (e) => {
                                    e.preventDefault(), m.push(s.DEFAULT_ROUTE);
                                  },
                                  className: "app-footer__button",
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  tabIndex: 0
                                },
                                a.default.createElement(l.Icon, {
                                  "data-testid": "app-footer-wallet-button",
                                  color: h ? u.IconColor.primaryDefault : u.IconColor.iconAlternative,
                                  name: l.IconName.Wallet,
                                  size: l.IconSize.Lg
                                }),
                                a.default.createElement(
                                  l.Text,
                                  { color: h ? u.TextColor.primaryDefault : u.TextColor.textAlternative, variant: u.TextVariant.bodyMd },
                                  n("wallet")
                                )
                              ),
                              a.default.createElement(
                                l.Box,
                                {
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  justifyContent: u.JustifyContent.center,
                                  backgroundColor: u.BackgroundColor.backgroundDefault,
                                  tabIndex: 0
                                },
                                a.default.createElement(l.ButtonIcon, {
                                  className: "app-footer__actions-button",
                                  "data-testid": "app-footer-actions-button",
                                  iconName: l.IconName.SwapVertical,
                                  color: u.IconColor.primaryInverse,
                                  backgroundColor: u.BackgroundColor.primaryDefault,
                                  borderRadius: u.BorderRadius.full,
                                  size: l.ButtonIconSize.Lg,
                                  onClick: () => f((0, p.showSelectActionModal)())
                                })
                              ),
                              a.default.createElement(
                                l.Box,
                                {
                                  as: "a",
                                  href: "#",
                                  onClick: (e) => {
                                    e.preventDefault(), m.push(s.CONNECTIONS);
                                  },
                                  className: "app-footer__button",
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  tabIndex: 0
                                },
                                T
                                  ? a.default.createElement(
                                      l.Box,
                                      { alignItems: u.AlignItems.center },
                                      a.default.createElement(
                                        l.BadgeWrapper,
                                        {
                                          display: u.Display.Flex,
                                          className: "app-footer__connected-badge",
                                          badge: a.default.createElement(l.AvatarNetwork, {
                                            backgroundColor: O,
                                            size: l.AvatarNetworkSize.Xs,
                                            name: _.nickname,
                                            src: null === (t = _.rpcPrefs) || void 0 === t ? void 0 : t.imageUrl,
                                            borderWidth: 2,
                                            borderColor: u.BorderColor.borderDefault
                                          })
                                        },
                                        a.default.createElement(l.AvatarFavicon, { size: u.Size.SM, src: E, name: w })
                                      )
                                    )
                                  : a.default.createElement(l.Icon, {
                                      color: y ? u.IconColor.primaryDefault : u.IconColor.iconAlternative,
                                      name: l.IconName.Global,
                                      size: l.IconSize.Lg
                                    }),
                                a.default.createElement(
                                  l.Text,
                                  { color: y ? u.TextColor.primaryDefault : u.TextColor.textAlternative, variant: u.TextVariant.bodyMd },
                                  n("connections")
                                )
                              )
                            )
                          )
                        )
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/app-footer.js" }
    ],
    [
      5298,
      { "./app-footer": 5297 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AppFooter", {
                    enumerable: !0,
                    get: function () {
                      return r.AppFooter;
                    }
                  });
                var r = e("./app-footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/index.js" }
    ],
    [
      5299,
      {
        "..": 5327,
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/time": 4768,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/send": 5531,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../../app/connected-status-indicator": 4886,
        "../../component-library": 5242,
        "../../ui/metafox-logo": 5451,
        "../../ui/tooltip": 5502,
        "@metamask/controller-utils": 1124,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460,
        "webextension-polyfill": 4733
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AppHeader = void 0);
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
                  a = C(e("classnames")),
                  o = C(e("prop-types")),
                  i = C(e("webextension-polyfill")),
                  s = e("react-redux"),
                  l = e("react-router-dom"),
                  c = e("@metamask/controller-utils"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../component-library"),
                  h = e("../../../selectors"),
                  y = e(".."),
                  g = e("../../../store/actions"),
                  b = C(e("../../ui/metafox-logo")),
                  v = e("../../../../app/scripts/lib/util"),
                  T = e("../../../../shared/constants/app"),
                  E = C(e("../../app/connected-status-indicator")),
                  w = e("../../../hooks/useI18nContext"),
                  O = e("../../../ducks/metamask/metamask"),
                  _ = e("../../../ducks/send"),
                  x = C(e("../../ui/tooltip")),
                  k = e("../../../hooks/useCopyToClipboard"),
                  S = e("../../../../shared/constants/time");
                function C(e) {
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
                const N = ({ location: e }) => {
                  var t, n, o, C;
                  const A = (0, r.useContext)(u.MetaMetricsContext),
                    [N, I] = (0, r.useState)(!1),
                    [P, M] = (0, r.useState)(1),
                    j = (0, r.useRef)(!1),
                    B = (0, s.useSelector)(h.getOriginOfCurrentTab),
                    R = (0, l.useHistory)(),
                    D = e.pathname === p.DEFAULT_ROUTE,
                    L = (0, s.useSelector)(O.getIsUnlocked),
                    F = (0, w.useI18nContext)(),
                    $ = (0, s.useSelector)(h.getCurrentChainId),
                    z = (0, s.useSelector)(h.getSelectedIdentity),
                    U = (0, s.useDispatch)(),
                    V = (0, s.useSelector)(O.getCompletedOnboarding),
                    W = (0, s.useSelector)(h.getOnboardedInThisUISession),
                    H = (0, s.useSelector)(h.getShowProductTour),
                    G = (0, s.useSelector)(h.getCurrentNetwork),
                    Y = (0, s.useSelector)(h.getTestNetworkBackgroundColor),
                    q = (0, s.useSelector)(h.getSelectedAddress),
                    [K, Q] = ((0, c.toChecksumHexAddress)(q), (0, k.useCopyToClipboard)(S.MINUTE)),
                    X = (0, v.getEnvironmentType)() === T.ENVIRONMENT_TYPE_POPUP,
                    J = (0, v.getEnvironmentType)() === T.ENVIRONMENT_TYPE_POPUP && B && B !== i.default.runtime.id,
                    Z = V && !W && H,
                    ee = null === (t = document.querySelector("[dir]")) || void 0 === t ? void 0 : t.getAttribute("dir"),
                    te = (0, s.useSelector)(_.getSendStage),
                    ne = [_.SEND_STAGES.EDIT, _.SEND_STAGES.DRAFT, _.SEND_STAGES.ADD_RECIPIENT].includes(te),
                    re = Boolean((0, l.matchPath)(e.pathname, { path: p.CONFIRM_TRANSACTION_ROUTE, exact: !1 })),
                    ae = Boolean((0, l.matchPath)(e.pathname, { path: p.SWAPS_ROUTE, exact: !1 })),
                    oe = Boolean((0, l.matchPath)(e.pathname, { path: p.BUILD_QUOTE_ROUTE, exact: !1 })),
                    ie = (0, s.useSelector)(h.getUnapprovedTransactions),
                    se = Object.keys(ie).length > 0,
                    le = re || (ae && !oe),
                    ce = ae || ne || re || se,
                    ue = (0, r.useCallback)(() => {
                      U((0, g.toggleNetworkMenu)()),
                        A({
                          event: d.MetaMetricsEventName.NavNetworkMenuOpened,
                          category: d.MetaMetricsEventCategory.Navigation,
                          properties: { location: "App header", chain_id: $ }
                        });
                    }, [$, U, A]),
                    de = !X && ce ? 4 : 0;
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    L && !X
                      ? r.default.createElement(
                          m.Box,
                          {
                            display: [f.Display.None, f.Display.Flex],
                            alignItems: f.AlignItems.center,
                            margin: 2,
                            className: "multichain-app-header-logo",
                            "data-testid": "app-header-logo",
                            justifyContent: f.JustifyContent.center
                          },
                          r.default.createElement(b.default, { unsetIconHeight: !0, onClick: async () => R.push(p.DEFAULT_ROUTE) })
                        )
                      : null,
                    r.default.createElement(
                      m.Box,
                      {
                        display: f.Display.Flex,
                        className: (0, a.default)("multichain-app-header", { "multichain-app-header-shadow": !L || X }),
                        marginBottom: de,
                        alignItems: f.AlignItems.center,
                        width: f.BlockSize.Full,
                        backgroundColor: !L || X ? f.BackgroundColor.backgroundDefault : f.BackgroundColor.backgroundAlternative
                      },
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        L
                          ? r.default.createElement(
                              m.Box,
                              {
                                className: (0, a.default)("multichain-app-header__contents", { "multichain-app-header-shadow": L && !X }),
                                alignItems: f.AlignItems.center,
                                width: f.BlockSize.Full,
                                backgroundColor: f.BackgroundColor.backgroundDefault,
                                padding: 2,
                                paddingLeft: 4,
                                paddingRight: 4,
                                gap: 2
                              },
                              X
                                ? r.default.createElement(
                                    m.Box,
                                    { className: "multichain-app-header__contents__container" },
                                    r.default.createElement(
                                      x.default,
                                      { title: null == G ? void 0 : G.nickname, position: "right" },
                                      r.default.createElement(m.PickerNetwork, {
                                        avatarNetworkProps: { backgroundColor: Y },
                                        className: "multichain-app-header__contents--avatar-network",
                                        ref: j,
                                        as: "button",
                                        src: null == G || null === (n = G.rpcPrefs) || void 0 === n ? void 0 : n.imageUrl,
                                        label: null == G ? void 0 : G.nickname,
                                        "aria-label": F("networkMenu"),
                                        labelProps: { display: f.Display.None },
                                        onClick: (e) => {
                                          e.stopPropagation(), e.preventDefault(), ue();
                                        },
                                        display: [f.Display.Flex, f.Display.None],
                                        disabled: ce
                                      })
                                    )
                                  )
                                : r.default.createElement(
                                    "div",
                                    null,
                                    r.default.createElement(m.PickerNetwork, {
                                      avatarNetworkProps: { backgroundColor: Y },
                                      margin: 2,
                                      label: null == G ? void 0 : G.nickname,
                                      src: null == G || null === (o = G.rpcPrefs) || void 0 === o ? void 0 : o.imageUrl,
                                      onClick: (e) => {
                                        e.stopPropagation(), e.preventDefault(), ue();
                                      },
                                      display: [f.Display.None, f.Display.Flex],
                                      className: "multichain-app-header__contents__network-picker",
                                      disabled: ce,
                                      "data-testid": "network-display"
                                    })
                                  ),
                              Z && X && D && 1 === P
                                ? r.default.createElement(y.ProductTour, {
                                    className: "multichain-app-header__product-tour",
                                    anchorElement: j.current,
                                    title: F("switcherTitle"),
                                    description: F("switcherTourDescription"),
                                    currentStep: "1",
                                    totalSteps: "3",
                                    onClick: () => M(P + 1),
                                    positionObj: "rtl" === ee ? "0%" : "88%",
                                    productTourDirection: ee
                                  })
                                : null,
                              z
                                ? r.default.createElement(y.AccountPicker, {
                                    address: z.address,
                                    name: z.name,
                                    onClick: () => {
                                      U((0, g.toggleAccountMenu)()),
                                        A({
                                          event: d.MetaMetricsEventName.NavAccountMenuOpened,
                                          category: d.MetaMetricsEventCategory.Navigation,
                                          properties: { location: "Home" }
                                        });
                                    },
                                    disabled: le,
                                    showAddress: Boolean(""),
                                    labelProps: { fontWeight: f.FontWeight.Bold }
                                  })
                                : null,
                              r.default.createElement(
                                m.Box,
                                { display: f.Display.Flex, alignItems: f.AlignItems.center, justifyContent: f.JustifyContent.flexEnd },
                                r.default.createElement(
                                  m.Box,
                                  { display: f.Display.Flex, gap: 4 },
                                  J &&
                                    r.default.createElement(
                                      m.Box,
                                      { ref: j },
                                      r.default.createElement(E.default, {
                                        onClick: () => {
                                          R.push(p.CONNECTED_ACCOUNTS_ROUTE),
                                            A({
                                              event: d.MetaMetricsEventName.NavConnectedSitesOpened,
                                              category: d.MetaMetricsEventCategory.Navigation
                                            });
                                        }
                                      })
                                    ),
                                  " ",
                                  X && 2 === P
                                    ? r.default.createElement(y.ProductTour, {
                                        className: "multichain-app-header__product-tour",
                                        anchorElement: j.current,
                                        closeMenu: () => I(!1),
                                        prevIcon: !0,
                                        title: F("permissionsTitle"),
                                        description: F("permissionsTourDescription"),
                                        currentStep: "2",
                                        totalSteps: "3",
                                        prevClick: () => M(P - 1),
                                        onClick: () => M(P + 1),
                                        positionObj: "rtl" === ee ? "76%" : "12%",
                                        productTourDirection: ee
                                      })
                                    : null,
                                  r.default.createElement(
                                    m.Box,
                                    { ref: j, display: f.Display.Flex, justifyContent: f.JustifyContent.flexEnd, width: f.BlockSize.Full },
                                    r.default.createElement(m.ButtonIcon, {
                                      iconName: m.IconName.MoreVertical,
                                      "data-testid": "account-options-menu-button",
                                      ariaLabel: F("accountOptions"),
                                      onClick: () => {
                                        A({
                                          event: d.MetaMetricsEventName.NavMainMenuOpened,
                                          category: d.MetaMetricsEventCategory.Navigation,
                                          properties: { location: "Home" }
                                        }),
                                          I(!0);
                                      },
                                      size: m.ButtonIconSize.Sm
                                    })
                                  )
                                ),
                                N ? r.default.createElement(y.GlobalMenu, { anchorElement: j.current, closeMenu: () => I(!1) }) : null,
                                Z && X && 3 === P
                                  ? r.default.createElement(y.ProductTour, {
                                      className: "multichain-app-header__product-tour",
                                      anchorElement: j.current,
                                      closeMenu: () => I(!1),
                                      prevIcon: !0,
                                      title: F("globalTitle"),
                                      description: F("globalTourDescription"),
                                      currentStep: "3",
                                      totalSteps: "3",
                                      prevClick: () => M(P - 1),
                                      onClick: () => {
                                        (0, g.hideProductTour)();
                                      },
                                      positionObj: "rtl" === ee ? "88%" : "0%",
                                      productTourDirection: ee
                                    })
                                  : null
                              )
                            )
                          : r.default.createElement(
                              m.Box,
                              {
                                display: f.Display.Flex,
                                className: (0, a.default)("multichain-app-header__lock-contents", {
                                  "multichain-app-header-shadow": L && !X
                                }),
                                alignItems: f.AlignItems.center,
                                width: f.BlockSize.Full,
                                justifyContent: f.JustifyContent.spaceBetween,
                                backgroundColor: f.BackgroundColor.backgroundDefault,
                                padding: 2,
                                gap: 2
                              },
                              r.default.createElement(
                                "div",
                                null,
                                r.default.createElement(m.PickerNetwork, {
                                  avatarNetworkProps: { backgroundColor: Y },
                                  label: null == G ? void 0 : G.nickname,
                                  src: null == G || null === (C = G.rpcPrefs) || void 0 === C ? void 0 : C.imageUrl,
                                  onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), ue();
                                  },
                                  className: "multichain-app-header__contents__network-picker",
                                  "data-testid": "network-display"
                                })
                              ),
                              r.default.createElement(b.default, {
                                unsetIconHeight: !0,
                                onClick: async () => {
                                  R.push(p.DEFAULT_ROUTE);
                                }
                              })
                            )
                      )
                    )
                  );
                };
                (n.AppHeader = N), (N.propTypes = { location: o.default.object });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-header/app-header.js" }
    ],
    [
      5300,
      { "./app-header": 5299 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AppHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.AppHeader;
                    }
                  });
                var r = e("./app-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-header/index.js" }
    ],
    [
      5301,
      {
        "../../../helpers/constants/design-system": 5537,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.AssetListConversionButton = n.ASSET_LIST_CONVERSION_BUTTON_VARIANT_TYPES = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (n.ASSET_LIST_CONVERSION_BUTTON_VARIANT_TYPES = { BUY: "buy", RECEIVE: "receive", NFT: "nft" }),
                  u = {
                    [c.BUY]: {
                      color: "var(--color-info-default)",
                      backgroundImage: "url(/images/token-list-buy-background.png)",
                      text: "buy",
                      icon: o.IconName.Add
                    },
                    [c.RECEIVE]: {
                      color: "var(--color-flask-default)",
                      backgroundImage: "url(/images/token-list-receive-background.png)",
                      text: "receive",
                      icon: o.IconName.Arrow2Down
                    },
                    [c.NFT]: {
                      color: "var(--color-error-alternative)",
                      backgroundImage: "url(/images/token-list-nfts-background.png)",
                      text: "nftLearnMore",
                      icon: o.IconName.Book
                    }
                  },
                  d = ({ onClick: e, variant: t }) => {
                    const n = (0, s.useI18nContext)(),
                      { color: a, backgroundImage: l, text: c, icon: d } = u[t];
                    return r.default.createElement(
                      o.Box,
                      {
                        as: "button",
                        onClick: e,
                        className: "asset-list-conversion-button",
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        borderRadius: i.BorderRadius.LG,
                        style: { backgroundImage: l, backgroundColor: a }
                      },
                      r.default.createElement(
                        o.Box,
                        { display: i.Display.Flex, className: "asset-list-conversion-button__contents" },
                        r.default.createElement(
                          o.Box,
                          {
                            display: i.Display.Flex,
                            className: "asset-list-conversion-button__contents__button-wrapper",
                            borderRadius: i.BorderRadius.full
                          },
                          r.default.createElement(
                            o.Box,
                            { paddingTop: 1, paddingInlineStart: 1 },
                            r.default.createElement(o.Icon, { name: d, size: o.IconSize.Sm, style: { color: a } })
                          )
                        ),
                        r.default.createElement(
                          o.Text,
                          { className: "asset-list-conversion-button__contents__text", paddingInlineStart: 2 },
                          n(c)
                        )
                      )
                    );
                  };
                (n.AssetListConversionButton = d),
                  (d.propTypes = { onClick: a.default.func.isRequired, variant: a.default.oneOf(Object.values(c)) });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-list-conversion-button/asset-list-conversion-button.js" }
    ],
    [
      5302,
      { "./asset-list-conversion-button": 5301 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AssetListConversionButton", {
                    enumerable: !0,
                    get: function () {
                      return r.AssetListConversionButton;
                    }
                  });
                var r = e("./asset-list-conversion-button");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-list-conversion-button/index.js" }
    ],
    [
      5303,
      { "../../../helpers/constants/design-system": 5537, "../../component-library": 5242, classnames: 2952, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarGroup = void 0);
                var r,
                  a = (function (e, t) {
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
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.AvatarGroup = ({
                  className: e = "",
                  limit: t = 4,
                  members: n = [],
                  size: r = i.AvatarTokenSize.Xs,
                  borderColor: l = s.BorderColor.borderDefault
                }) => {
                  const c = n.length,
                    u = n.slice(0, t).reverse(),
                    d = c > t;
                  let p = "";
                  p = i.AvatarTokenSize.Xs ? "-8px" : i.AvatarTokenSize.Sm ? "-12px" : "-16px";
                  const f = `+${(c - t).toLocaleString()}`;
                  return a.createElement(
                    i.Box,
                    {
                      alignItems: s.AlignItems.center,
                      display: s.Display.Flex,
                      className: (0, o.default)("multichain-avatar-group", e),
                      "data-testid": "avatar-group",
                      gap: 1
                    },
                    a.createElement(
                      i.Box,
                      { display: s.Display.Flex },
                      u.map((e, t) =>
                        a.createElement(
                          i.Box,
                          { borderRadius: s.BorderRadius.full, key: e.symbol, style: 0 === t ? { marginLeft: "0" } : { marginLeft: p } },
                          a.createElement(i.AvatarToken, { src: e.iconUrl, name: e.symbol, size: r, borderColor: l })
                        )
                      )
                    ),
                    d
                      ? a.createElement(
                          i.Box,
                          null,
                          a.createElement(i.Text, { variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative }, f)
                        )
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/avatar-group/avatar-group.tsx" }
    ],
    [
      5304,
      { "./avatar-group": 5303 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarGroup", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarGroup;
                    }
                  });
                var r = e("./avatar-group");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/avatar-group/index.ts" }
    ],
    [
      5305,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/portfolio": 5573,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../app/user-preferenced-currency-display": 5167,
        "../../component-library": 5242,
        "../../ui/spinner": 5483,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BalanceOverview = void 0);
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
                  o = b(e("classnames")),
                  i = b(e("prop-types")),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../contexts/metametrics"),
                  c = e("../../../../shared/constants/metametrics"),
                  u = e("../../component-library"),
                  d = e("../../../helpers/utils/portfolio"),
                  p = e("../../../selectors"),
                  f = b(e("../../ui/spinner")),
                  m = e("../../../helpers/constants/design-system"),
                  h = e("../../../../shared/constants/network"),
                  y = b(e("../../app/user-preferenced-currency-display")),
                  g = e("../../../helpers/constants/common");
                function b(e) {
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
                const T = ({ balance: e, loading: t }) => {
                  const n = (0, r.useContext)(l.MetaMetricsContext),
                    i = (0, s.useI18nContext)(),
                    b = (0, a.useSelector)(p.getMetaMetricsId),
                    v = (0, a.useSelector)(p.getCurrentChainId),
                    T = (0, a.useSelector)(p.isBalanceCached);
                  return r.default.createElement(
                    u.Box,
                    {
                      className: "token-balance-overview",
                      display: m.Display.Flex,
                      justifyContent: m.JustifyContent.spaceBetween,
                      alignItems: m.AlignItems.center,
                      padding: 4
                    },
                    r.default.createElement(
                      u.Box,
                      { className: "token-balance-overview__balance" },
                      e
                        ? r.default.createElement(
                            u.Text,
                            {
                              variant: m.TextVariant.headingLg,
                              color: m.TextColor.textDefault,
                              className: (0, o.default)({ "token-balance-overview__secondary-balance": !T })
                            },
                            t
                              ? ""
                              : r.default.createElement(y.default, {
                                  ethNumberOfDecimals: 4,
                                  value: e,
                                  type: g.PRIMARY,
                                  "data-testid": "token-balance-overview-currency-display"
                                })
                          )
                        : r.default.createElement(f.default, {
                            color: "var(--color-secondary-default)",
                            className: "loading-overlay__spinner"
                          }),
                      T ? r.default.createElement("span", { className: "token-balance-overview__cached-star" }, "*") : null
                    ),
                    r.default.createElement(
                      u.ButtonSecondary,
                      {
                        className: "token-balance-portfolio",
                        "data-testid": "token-balance-portfolio",
                        endIconName: u.IconName.Export,
                        onClick: () => {
                          const e = (0, d.getPortfolioUrl)("", "ext_portfolio_button", b);
                          global.platform.openTab({ url: e }),
                            n({
                              category: c.MetaMetricsEventCategory.Navigation,
                              event: c.MetaMetricsEventName.PortfolioLinkClicked,
                              properties: { location: "Home", text: "Portfolio", chain_id: v, token_symbol: h.CURRENCY_SYMBOLS.ETH }
                            });
                        }
                      },
                      i("portfolio")
                    )
                  );
                };
                (n.BalanceOverview = T), (T.propTypes = { balance: i.default.string.isRequired, loading: i.default.bool.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/balance-overview/balance-overview.js" }
    ],
    [
      5306,
      { "./balance-overview": 5305 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BalanceOverview", {
                    enumerable: !0,
                    get: function () {
                      return r.BalanceOverview;
                    }
                  });
                var r = e("./balance-overview");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/balance-overview/index.js" }
    ]
  ],
  [],
  {}
);
