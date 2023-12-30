(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [26],
  {
    143: function (e, i, n) {
      "use strict";
      !function (a) {
        n.d(i, "a", function () {
          return o;
        });
        var e = n(3),
          t = n.n(e),
          e = n(1),
          s = n.n(e),
          e = n(2);
        class o extends e.Component {
          constructor() {
            var a;
            super(),
              ((a = this).state = {
                svgs: []
              }),
              t()(
                s.a.mark(function e() {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([n.e(32).then(n.t.bind(null, 170, 7)), n.e(31).then(n.t.bind(null, 169, 7))])
                              .then((e) => {
                                if (e) {
                                  const t = e.map((e) => e.default);
                                  a.setState({
                                    svgs: t
                                  });
                                }
                              })
                              .catch((e) => {})
                          );

                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
          }
          render() {
            const e = this.state.svgs,
              t = void 0 === e ? [] : e;
            return a.createElement("div", {
              style: {
                position: "absolute",
                top: "-9999px",
                left: "-9999px"
              },
              dangerouslySetInnerHTML: {
                __html: t.join("")
              }
            });
          }
        }
      }.call(this, n(2));
    },
    420: function (e, m, v) {
      "use strict";
      v.r(m),
        function (a) {
          var e = v(7),
            t = v.n(e),
            e = v(2),
            s = v(142),
            o = v(9),
            i = v(12),
            n = v(143),
            c = v(716),
            p = v(4),
            r = v(469),
            l = v(32);
          const u = Object(o.defineMessages)({
            showMe: {
              id: "web-discoverability.popup.activate",
              defaultMessage: "Show me!"
            },
            dismiss: {
              id: "web-discoverability.popup.dismiss",
              defaultMessage: "No Thanks"
            }
          });
          class d extends e.Component {
            constructor() {
              super(),
                t()(this, "showMe", () => {
                  this.setState({
                    show: !1
                  }),
                    Object(p.V)(!0),
                    Object(p.Q)("Web Discoverability Popup: enabled"),
                    Object(p.R)("MathDiscoverabilityPopupEnabled", "Feature", "Math Discoverability"),
                    Object(l.a)()
                      ? window.postMessage(
                          {
                            action: "EQUATIO_TOGGLE_TOOLBAR"
                          },
                          window.location.origin
                        )
                      : Object(p.B)();
                }),
                t()(this, "dismissWelcome", () => {
                  Object(p.V)(!1),
                    Object(p.Q)("Web Discoverability Popup: dismissed"),
                    Object(p.R)("MathDiscoverabilityPopupDismissed", "Feature", "Math Discoverability"),
                    this.setState({
                      show: !1
                    });
                }),
                (this.state = {
                  show: !0
                }),
                chrome.runtime.onMessage.addListener((e) => {
                  e &&
                    !0 === e.dismissDiscoverWelcome &&
                    this.setState({
                      show: !1
                    });
                });
            }
            render() {
              const e = this.state.show,
                t = this.props.intl;
              return e
                ? a.createElement(
                    s.a.div,
                    {
                      id: "equatio-discover-shadow"
                    },
                    a.createElement(c.a, null),
                    a.createElement(n.a, null),
                    a.createElement(
                      "div",
                      {
                        className: "equatio-apps-discovery-popup"
                      },
                      a.createElement(
                        "div",
                        {
                          className: "equatio-apps-discovery-popup__bubble"
                        },
                        a.createElement(
                          "svg",
                          {
                            className: "equatio-apps-discovery-popup-background",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 260.871 263"
                          },
                          a.createElement("path", {
                            fill: "#fafafa",
                            d: "M60.641 263.002l-4.685-2.928A119 119 0 0 1 18.098 96.096L78.144.002h171.727a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                          }),
                          a.createElement("path", {
                            fill: "#f2f2f2",
                            d: "M146.839 263.002l-36.114-20.85A119 119 0 0 1 67.171 79.594L113.121.002h136.75a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                          })
                        ),
                        a.createElement(
                          "div",
                          {
                            className: "equatio-apps-discovery-popup-title"
                          },
                          a.createElement(
                            "svg",
                            {
                              viewBox: "4 0 98.197 22.312",
                              className: "equatio-apps-discovery-popup-title__logo"
                            },
                            a.createElement("use", {
                              xlinkHref: "#equatio-svg-logo"
                            })
                          ),
                          a.createElement(
                            "svg",
                            {
                              viewBox: "0 0 38 38",
                              className: "equatio-apps-discovery-popup-title__warning"
                            },
                            a.createElement("use", {
                              xlinkHref: "#equatio-svg-discover-header-warning"
                            })
                          )
                        ),
                        a.createElement(
                          "p",
                          {
                            className: "equatio-apps-discovery-popup__text"
                          },
                          t.formatMessage(r.b.containMath),
                          " ",
                          t.formatMessage(r.b.containMathInfo1),
                          " ",
                          "Equatio",
                          " ",
                          t.formatMessage(r.b.containMathInfo2)
                        ),
                        a.createElement(
                          "div",
                          {
                            className: "equatio-apps-discovery-popup__button-wrapper"
                          },
                          a.createElement(
                            "button",
                            {
                              className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--cancel",
                              onClick: this.dismissWelcome
                            },
                            t.formatMessage(u.dismiss)
                          ),
                          a.createElement(
                            "button",
                            {
                              className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                              onClick: this.showMe
                            },
                            t.formatMessage(u.showMe)
                          )
                        )
                      )
                    )
                  )
                : null;
            }
          }
          m.default = Object(i.c)(d);
        }.call(this, v(2));
    },
    469: function (e, n, c) {
      "use strict";
      !function (o) {
        c.d(n, "b", function () {
          return i;
        });
        var e = c(2),
          t = c(9),
          a = c(12);
        const i = Object(t.defineMessages)({
          close: {
            id: "apps-discovery.overlay.close",
            defaultMessage: "Close"
          },
          containMath: {
            id: "apps-discovery.notification.contain",
            defaultMessage: "This document contains Math."
          },
          containMathInfo1: {
            id: "apps-discovery.notification.info1",
            defaultMessage: "Click on the"
          },
          containMathInfo2: {
            id: "apps-discovery.notification.info2",
            defaultMessage: "icon in the toolbar above and start making Math digital."
          },
          notNow: {
            id: "apps-discovery.notification.notnow",
            defaultMessage: "Not right now"
          },
          dontShow: {
            id: "apps-discovery.notification.dontshow",
            defaultMessage: "Don't show me this message again."
          }
        });
        class s extends e.Component {
          render() {
            const e = this.props,
              t = e.onDismiss,
              a = e.onDontShowClick,
              s = e.intl;
            return o.createElement(
              "div",
              {
                className: "equatio-apps-discovery-popup"
              },
              o.createElement(
                "div",
                {
                  className: "equatio-apps-discovery-popup__bubble"
                },
                o.createElement(
                  "svg",
                  {
                    className: "equatio-apps-discovery-popup-background",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 260.871 263"
                  },
                  o.createElement("path", {
                    fill: "#fafafa",
                    d: "M60.641 263.002l-4.685-2.928A119 119 0 0 1 18.098 96.096L78.144.002h171.727a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                  }),
                  o.createElement("path", {
                    fill: "#f2f2f2",
                    d: "M146.839 263.002l-36.114-20.85A119 119 0 0 1 67.171 79.594L113.121.002h136.75a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                  })
                ),
                o.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup-title"
                  },
                  o.createElement(
                    "svg",
                    {
                      viewBox: "4 0 98.197 22.312",
                      className: "equatio-apps-discovery-popup-title__logo"
                    },
                    o.createElement("use", {
                      xlinkHref: "#equatio-svg-logo"
                    })
                  ),
                  o.createElement(
                    "svg",
                    {
                      viewBox: "0 0 38 38",
                      className: "equatio-apps-discovery-popup-title__warning"
                    },
                    o.createElement("use", {
                      xlinkHref: "#equatio-svg-discover-header-warning"
                    })
                  )
                ),
                o.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__text"
                  },
                  s.formatMessage(i.containMath),
                  o.createElement("br", null),
                  s.formatMessage(i.containMathInfo1),
                  o.createElement(
                    "div",
                    {
                      className: "equatio-apps-discovery-popup-browser-action__icon"
                    },
                    o.createElement(
                      "svg",
                      {
                        viewBox: "0 0 37.4 37.4"
                      },
                      o.createElement("use", {
                        xlinkHref: "#equatio-svg-logo-icon"
                      })
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "equatio-apps-discovery-popup-browser-action__badge"
                      },
                      o.createElement("div", null, "\u03a3")
                    )
                  ),
                  s.formatMessage(i.containMathInfo2)
                ),
                o.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__button-wrapper"
                  },
                  o.createElement(
                    "button",
                    {
                      className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                      onClick: () => t()
                    },
                    s.formatMessage(i.notNow)
                  )
                ),
                o.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__instruction-wrapper"
                  },
                  o.createElement(
                    "a",
                    {
                      href: "#",
                      role: "button",
                      className: "equatio-link-button equatio-link-button--small",
                      onClick: () => a()
                    },
                    s.formatMessage(i.dontShow)
                  )
                )
              )
            );
          }
        }
        n.a = Object(a.c)(s);
      }.call(this, c(2));
    },
    716: function (e, s, o) {
      "use strict";
      !function (a) {
        var e = o(148),
          t = o.n(e);
        s.a = () =>
          a.createElement(
            "div",
            null,
            [t.a].map((e, t) =>
              a.createElement(
                "style",
                {
                  key: t.toString(),
                  type: "text/css"
                },
                e
              )
            )
          );
      }.call(this, o(2));
    }
  }
]);
