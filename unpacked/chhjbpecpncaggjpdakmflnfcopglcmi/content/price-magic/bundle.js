/*! For license information please see bundle.js.LICENSE.txt */
"use strict";
var source;
(self.webpackChunksource = self.webpackChunksource || []).push([
  [643],
  {
    1860: (t, e, r) => {
      r.r(e);
      var i = r(1271),
        s = r.n(i),
        a = r(4615),
        o = r(5526),
        n = r(8051),
        c = r(636),
        l = r(6402),
        d = r(8812),
        u = r(4730),
        p = r(909),
        h = r(9442),
        m = r(3564),
        g = r.n(m);
      var f = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return t.visible
          ? e("mini-toast", {
              attrs: {
                product: t.product,
                title: t.toastTitle,
                subtitle: t.toastSubtitle,
                productImage: t.productImage,
                badgeType: t.showBadge && t.type
              },
              on: { clickSettings: t.clickSettings, close: t.clickClose, clickCTA: t.clickCTA, rendered: t.onRendered }
            })
          : t._e();
      };
      f._withStripped = !0;
      var v = r(1953),
        y = r.n(v),
        _ = r(3650),
        b = r(1218),
        C = r(507),
        k = r(1939),
        w = function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e(
            "transition",
            { attrs: { appear: "", name: "rr-slide-fade" } },
            [
              e("r-form", { staticClass: "rr-mini-toast", attrs: { flat: "", width: "436px" } }, [
                e("div", { staticClass: "rr-flex rr-pa-8" }, [
                  e(
                    "div",
                    {
                      staticClass: "rr-flex rr-items-center rr-justify-center rr-mini-toast-icon rr-text-action",
                      staticStyle: { height: "32px", width: "32px" }
                    },
                    [e("rakuten-icon", { attrs: { size: "16px" } })],
                    1
                  ),
                  e("div", { staticClass: "rr-flex-grow" }),
                  e(
                    "div",
                    { staticClass: "rr-flex rr-items-center" },
                    [
                      e(
                        "r-icon-button",
                        {
                          staticClass: "rr-text-secondary rr-mr-8",
                          attrs: { size: "32px", flat: "", rounded: !1 },
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.$emit("clickSettings");
                            }
                          }
                        },
                        [e("settings-icon", { attrs: { size: "16px" } })],
                        1
                      ),
                      e(
                        "r-icon-button",
                        {
                          staticClass: "rr-text-secondary",
                          attrs: { size: "32px", flat: "", rounded: !1 },
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.$emit("close");
                            }
                          }
                        },
                        [e("exit-icon", { attrs: { size: "16px" } })],
                        1
                      )
                    ],
                    1
                  )
                ]),
                e("div", { staticClass: "rr-flex rr-px-20 rr-pb-16" }, [
                  e(
                    "div",
                    { staticClass: "rr-flex rr-flex-col rr-items-center rr-mr-16" },
                    [
                      e(
                        "div",
                        {
                          staticClass: "rr-rounded-ui rr-flex rr-justify-center rr-items-center rr-mb-4",
                          staticStyle: { height: "90px", width: "90px", background: "#F4F3FE" }
                        },
                        [
                          t.productImage && !t.imageLoadError
                            ? e("img", {
                                staticClass: "rr-rounded-ui",
                                staticStyle: { "object-fit": "cover", height: "90px", width: "90px" },
                                attrs: { alt: t.product.merchant.storeName, title: t.product.title, src: t.productImage },
                                on: { load: t.onLoadImage, error: t.onErrorImage }
                              })
                            : e("shopping-filled-icon", { attrs: { size: "60px", color: "#CFC0FF" } })
                        ],
                        1
                      ),
                      e("div", { staticClass: "rr-whitespace-nowrap rr-mb-4" }, [
                        e("span", { staticClass: "rr-text-primary rr-t-descriptor-xs rr-mr-2" }, [
                          t._v(" " + t._s(t.formatMoney(t.product.salePrice)) + " ")
                        ]),
                        t.product.priceSavings && t.product.oldPrice
                          ? e("span", { staticClass: "rr-text-tertiary rr-t-descriptor-xs rr-line-through rr-fw-book" }, [
                              t._v(" " + t._s(t.formatMoney(t.product.oldPrice)) + " ")
                            ])
                          : t._e()
                      ]),
                      e("r-cashback", {
                        staticClass: "rr-mr-4 rr-flex rr-whitespace-nowrap",
                        attrs: {
                          icon: "",
                          small: "",
                          reward: t.product.merchant.reward,
                          previousReward: t.showPreviousReward ? t.product.previousReward : null
                        }
                      })
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "rr-flex rr-flex-col rr-w-full" },
                    [
                      t.isSaleBadge
                        ? e("r-tag-floating", { staticClass: "badge rr-mb-4 badge--light" }, [t._v(" Sale ")])
                        : t.isCBBadge
                        ? e("r-tag-floating", { staticClass: "badge rr-mb-4 badge--white" }, [t._v(" Extra cash back ")])
                        : t._e(),
                      e("div", { staticClass: "rr-flex rr-flex-col" }, [
                        e("h1", { staticClass: "rr-t-descriptor-m rr-mb-6 rr-mt-0" }, [t._v(" " + t._s(t.title) + " ")]),
                        e("span", { staticClass: "rr-t-subheader-s rr-text-secondary" }, [t._v(" " + t._s(t.subtitle) + " ")])
                      ]),
                      e("div", { staticClass: "rr-flex-grow" }),
                      e(
                        "div",
                        { staticClass: "rr-flex" },
                        [
                          e("div", { staticClass: "rr-flex-grow" }),
                          e(
                            "r-button",
                            {
                              staticStyle: { "margin-bottom": "-10px", "padding-right": "0" },
                              attrs: { variant: "tertiary" },
                              on: {
                                click: function (e) {
                                  return t.$emit("clickCTA");
                                }
                              }
                            },
                            [t._v(" Shop Now ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          );
        };
      w._withStripped = !0;
      var S = r(9649),
        x = r(4927),
        $ = r(1183),
        B = r(7325),
        P = r(2737),
        M = r(7659),
        I = r(7040),
        T = r(6846),
        A = r(3669),
        E = r(7027),
        N = function () {
          var t = this,
            e = t._self._c;
          return e("svg-icon", t._b({ attrs: { viewBox: "0 0 16 16" } }, "svg-icon", t.$props, !1), [
            e("path", {
              attrs: {
                "fill-rule": "evenodd",
                d: "M12.9 15H3.1c-.77 0-1.4-.63-1.4-1.4l1.05-7.7c0-.19.07-.36.21-.49.13-.13.31-.21.49-.21H4.5v-.7C4.5 2.57 6.07 1 8 1s3.5 1.57 3.5 3.5v.7h1.05c.19 0 .36.07.49.21.13.13.21.31.21.49l1.05 7.7c0 .77-.63 1.4-1.4 1.4ZM8 2.4a2.1 2.1 0 0 0-2.1 2.1v.7h4.2v-.7A2.1 2.1 0 0 0 8 2.4ZM4.71 7.14c-.05-.29.2-.54.5-.54s.53.24.6.53c.03.11.06.22.11.33.11.27.28.52.49.73A2.234 2.234 0 0 0 8 8.85a2.234 2.234 0 0 0 1.59-.66 2.234 2.234 0 0 0 .6-1.06c.07-.29.31-.53.6-.53s.54.24.5.54c-.04.25-.11.5-.21.74-.17.4-.41.77-.72 1.08-.31.31-.68.56-1.08.72-.4.17-.84.25-1.28.25-.44 0-.87-.09-1.28-.25-.4-.17-.77-.41-1.08-.72-.31-.31-.56-.68-.72-1.08-.1-.24-.17-.49-.21-.74Z",
                "clip-rule": "evenodd"
              }
            })
          ]);
        };
      N._withStripped = !0;
      const Z = {
        components: { SvgIcon: r(1694).Z },
        props: {
          color: { type: String, default: "currentColor" },
          size: { type: [Number, String], default: 16 },
          rotate: { type: Number, default: 0 }
        }
      };
      var L = r(2264);
      const D = (0, L.Z)(Z, N, [], !1, null, null, null).exports,
        R = y().extend({
          components: {
            RForm: $.Z,
            ExitIcon: P.Z,
            SettingsIcon: B.Z,
            RakutenIcon: M.Z,
            RCashback: I.Z,
            RButton: T.Z,
            RIconButton: A.Z,
            RTagFloating: E.Z,
            ShoppingFilledIcon: D
          },
          props: {
            product: { type: Object, required: !0 },
            title: { type: String, required: !0 },
            subtitle: { type: String, required: !0 },
            productImage: { type: String, default: "" },
            badgeType: { type: String, default: "" }
          },
          data: () => ({ badgeColor: null, imageLoadError: !1 }),
          computed: {
            rakutenLogo: () => (0, S.$)("img/rakuten/icon-rakuten-white.svg"),
            showPreviousReward() {
              return "SALE" !== this.badgeType && !this.product.merchant.reward.range;
            },
            squareLogo() {
              return this.product.merchant.images.squareLogo;
            },
            isSaleBadge() {
              return ["SALE", "COMBO_SALE_HIGHER"].includes(this.badgeType);
            },
            isCBBadge() {
              return ["CB_INCREASE", "COMBO_CB_HIGHER"].includes(this.badgeType);
            }
          },
          methods: {
            formatCashBack: (t) => (0, x.l)(t),
            formatMoney: (t) => (0, b.l)(t),
            onLoadImage() {
              this.$emit("rendered", { displayed_image: "product" });
            },
            onErrorImage() {
              (this.imageLoadError = !0), this.$emit("rendered", { displayed_image: "icon" });
            }
          }
        });
      const O = (0, L.Z)(R, w, [], !1, null, null, null).exports,
        q = "Extra cashback",
        F = "Sale",
        V = "Empty",
        z = y().extend({
          components: { MiniToast: O },
          props: {
            product: { type: Object, required: !0 },
            showingCounters: { type: Object, required: !0 },
            caValueBadges: { type: Boolean, required: !1, default: !1 }
          },
          data: () => ({
            visible: !1,
            showCounter: 0,
            module_type: "Cart Abandonment Notification",
            entity_name: "Mini Toast",
            domain: (0, _.g)(location.host),
            productImage: null,
            showBadge: !1,
            badgeType: ""
          }),
          computed: {
            priceSavings() {
              return (0, b.l)(this.product.priceSavings);
            },
            cashbackSavings() {
              const t = this.product.merchant.reward.range ? this.product.cashBackAmountTiered : this.product.cashBackAmount;
              return (this.product.merchant.reward.range ? "up to " : "") + (0, b.l)(t);
            },
            toastTitle() {
              return this.titles[this.type][this.showCounter];
            },
            toastSubtitle() {
              return this.subtitles[this.type][this.showCounter];
            },
            titles() {
              return this.showBadge
                ? {
                    CB_INCREASE: [
                      `Now earn ${this.cashbackSavings}`,
                      `${this.cashbackSavings} Cash Back is waiting`,
                      `Don't miss out on ${this.cashbackSavings}`
                    ],
                    SALE: [
                      `It's on sale for ${this.priceSavings} less`,
                      `Save ${this.priceSavings} while it lasts!`,
                      `Final reminder! Save ${this.priceSavings}`
                    ],
                    COMBO_CB_HIGHER: [
                      `Now earn ${this.cashbackSavings}`,
                      `${this.cashbackSavings} Cash Back is waiting`,
                      `Don't miss out on ${this.cashbackSavings}`
                    ],
                    COMBO_SALE_HIGHER: [
                      `It's on sale for ${this.priceSavings} less`,
                      `Save ${this.priceSavings} while it lasts!`,
                      `Final reminder! Save ${this.priceSavings}`
                    ]
                  }
                : {
                    COMBINATION_SAVINGS: [
                      "Now on sale + extra Cash Back!",
                      "Deal alert! Sale + extra Cash Back",
                      "Don't miss the sale + extra Cash Back!"
                    ],
                    SALE: ["Now on sale!", "It's on sale!", `Now ${this.priceSavings} off + ${this.cashbackSavings} Cash Back`],
                    CB_INCREASE: ["Extra Cash Back!", "We found extra Cash Back", "Cha-ching! Extra Cash Back"]
                  };
            },
            subtitles() {
              const t = this.product.merchant.storeName;
              return this.showBadge
                ? {
                    CB_INCREASE: [
                      `Check out at ${t} today.`,
                      `There's still time to score extra Cash Back at ${t}!`,
                      `Extra Cash Back is still on at ${t}...for now!`
                    ],
                    SALE: [
                      `Plus, earn ${this.cashbackSavings} Cash Back at ${t}. Check out today!`,
                      `Also earn ${this.cashbackSavings} Cash Back at ${t} when you order now.`,
                      `Check out to stack the sale with ${this.cashbackSavings} Cash Back at ${t}.`
                    ],
                    COMBO_CB_HIGHER: [
                      `Plus, get it for ${this.priceSavings} less at ${t} today!`,
                      `Also save ${this.priceSavings} at ${t} while it lasts!`,
                      `Extra Cash Back is still on at ${t}...for now! Plus, save ${this.priceSavings}!`
                    ],
                    COMBO_SALE_HIGHER: [
                      `Plus, earn ${this.cashbackSavings} Cash Back at ${t}. Check out today!`,
                      `Also earn ${this.cashbackSavings} Cash Back at ${t} when you order now.`,
                      `Check out to stack the sale with ${this.cashbackSavings} Cash Back at ${t}.`
                    ]
                  }
                : {
                    COMBINATION_SAVINGS: [
                      `Get it for ${this.priceSavings} less + earn ${this.cashbackSavings} Cash Back at ${t} today!`,
                      `This is big: Head to ${t} to save ${this.priceSavings} + get ${this.cashbackSavings} Cash Back.`,
                      `Now save ${this.priceSavings} and get ${this.cashbackSavings} Cash Back. Check out now at ${t}.`
                    ],
                    SALE: [
                      `Get it for ${this.priceSavings} less + earn ${this.cashbackSavings} Cash Back at ${t}.`,
                      `Now save ${this.priceSavings} and get ${this.cashbackSavings} Cash Back at ${t}.`,
                      `Had your eye on this? Well it just went on sale at ${t}.`
                    ],
                    CB_INCREASE: [
                      `Earn ${this.cashbackSavings} at ${t} when you check out now.`,
                      `Waiting for a deal? Check out now at ${t} to get ${this.cashbackSavings}.`,
                      `It's on at ${t}. Check out now and earn ${this.cashbackSavings} Cash Back.`
                    ]
                  };
            },
            copy_versions() {
              return `${this.type}_${this.showCounter + 1}`;
            }
          },
          async mounted() {
            if ((this.checkBadgeAndType(this.product), !this.type)) return;
            await this.getProductImage();
            (await (0, c.By)({ styles: ["content/price-magic"] })).appendChild(this.$el),
              (this.showCounter = this.showingCounters?.[this.type] || 0),
              (0, n.Z)("updateShowingInfo", { type: this.type }),
              (0, n.Z)("discardProduct", { productId: this.product?.id }),
              (this.visible = !0);
          },
          methods: {
            checkBadgeAndType(t) {
              (this.badgeType = V), (this.type = "");
              const e = t.listPrice - t.salePrice,
                r = !this.product.merchant.reward.range && (0, d.wz)(t.merchant?.reward, t.previousReward) > 0,
                i =
                  ((t) => {
                    let { listPrice: e, salePrice: r } = t;
                    return Math.round(((e - r) / e) * 100);
                  })(t) >= 15;
              e > 0 && r
                ? ((this.badgeType = e > t.cashBackAmount ? F : q),
                  (this.type = e > t.cashBackAmount ? "COMBO_SALE_HIGHER" : "COMBO_CB_HIGHER"))
                : r
                ? ((this.badgeType = q), (this.type = "CB_INCREASE"))
                : i && ((this.badgeType = F), (this.type = "SALE")),
                this.badgeType !== V && this.caValueBadges
                  ? (this.showBadge = !0)
                  : this.product.oldPrice && r
                  ? (this.type = "COMBINATION_SAVINGS")
                  : this.product.oldPrice
                  ? (this.type = "SALE")
                  : r && (this.type = "CB_INCREASE");
            },
            async getProductImage() {
              if (this.product.imageUrl)
                try {
                  this.productImage = await (0, C.b)(this.product.imageUrl);
                } catch {}
            },
            clickSettings() {
              this.track("Click Module", { cta_type: "setting" }), (0, n.Z)("openOptionsPage");
            },
            clickClose() {
              this.track("Click Module", { cta_type: "dismiss" }), (this.visible = !1);
            },
            clickCTA() {
              this.track("Click Module", { cta_type: "Shop Now" }),
                this.product.merchant.affiliatizerEnabled
                  ? (0, n.Z)("activate", {
                      storeId: this.product.merchant.storeId,
                      tabId: a.Z.browser.NEWTAB,
                      store_url: this.product.productUrl,
                      sessionAttributes: {
                        source: `${this.module_type} ${this.entity_name}`,
                        event_attributes: {
                          copy_versions: this.copy_versions,
                          previous_ca_tracking_ticket: this.product.previous_ca_tracking_ticket
                        }
                      }
                    })
                  : (0, k.Z)(this.product.productUrl);
            },
            track(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              h.Z.track(t, {
                module_type: this.module_type,
                entity_name: this.entity_name,
                domain: this.domain,
                copy_versions: this.copy_versions,
                ...e
              });
            },
            onRendered(t) {
              this.track("View Module", { product_list: [this.product], ...(this.caValueBadges && { badge_type: this.badgeType }), ...t });
            }
          }
        });
      const j = (0, L.Z)(z, f, [], !1, null, null, null).exports;
      var H = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return e(
          "div",
          [
            t.showPriceMagicNotification
              ? e("price-magic-notification", {
                  attrs: { product: t.product, settings: t.settings, message: t.message, badgeType: t.badgeType },
                  on: { onClick: t.onClick, track: t.track }
                })
              : t._e(),
            t.showPriceMagicButton
              ? e("price-magic-button", {
                  attrs: {
                    showTooltipButton: t.showTooltipButton,
                    product: t.product,
                    settings: t.settings,
                    config: t.config,
                    message: t.message,
                    badgeType: t.badgeType
                  },
                  on: { track: t.track, onClick: t.onClick }
                })
              : t._e(),
            t.isSearchMode
              ? e("price-magic-serp", {
                  attrs: { product: t.product, container: t.container, config: t.config },
                  on: { onClick: t.onClick, track: t.track }
                })
              : t._e()
          ],
          1
        );
      };
      H._withStripped = !0;
      var G = r(6439),
        U = function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e("transition", { attrs: { name: "rr-slide-fade" } }, [
            e(
              "div",
              [
                t.educationPopperVisible
                  ? e("education-popover", {
                      attrs: { anchor: t.$refs.anchor.$el, storeId: t.product.merchant.storeId, storeName: t.product.merchant.storeName }
                    })
                  : t._e(),
                t.visible
                  ? e("price-magic-form", {
                      ref: "anchor",
                      attrs: {
                        product: t.product,
                        persistentExpand: t.persistentExpand,
                        merchantLogo: t.merchantLogo,
                        productImage: t.productImage,
                        message: t.message,
                        badgeType: t.badgeType
                      },
                      on: {
                        onClick: function (e) {
                          return t.$emit("onClick", { ...e, entity_name: t.entity_name });
                        },
                        track: t.track,
                        onShow: t.onShow,
                        clickClose: t.clickClose
                      }
                    })
                  : t._e()
              ],
              1
            )
          ]);
        };
      U._withStripped = !0;
      var W = r(4473),
        Y = function () {
          var t = this,
            e = t._self._c;
          return e(
            "r-form",
            {
              staticClass: "rr-product",
              class: { "rr-product--hover": t.hoverState, "rr-product--minimized": t.minimized },
              attrs: {
                "data-tid": "price-magic",
                headerLogo: "none",
                position: t.position,
                width: t.minimized ? "" : t.showLargeDetails ? 360 : 304,
                flat: t.minimized,
                label: t.label,
                closeLabel: `Dismiss ${t.label}`
              },
              on: { close: t.clickClose },
              nativeOn: {
                mouseenter: function (e) {
                  !t.persistentExpand && t.onMouseenter;
                },
                mouseleave: function (e) {
                  !t.persistentExpand && t.onMouseleave;
                },
                focusin: function (e) {
                  !t.persistentExpand && t.onMouseenter;
                },
                focusout: function (e) {
                  !t.persistentExpand && t.onMouseleave;
                }
              }
            },
            [
              e(
                "transition",
                { attrs: { name: "rr-fade-fast", mode: "out-in" } },
                [
                  t.minimized
                    ? e(
                        "div",
                        { key: "minimized", staticClass: "rr-product__mini", on: { mousedown: t.miniMouseDown, mouseup: t.miniMouseUp } },
                        [e("div", { staticClass: "rr-product__mini__logo" }), e("div", { staticClass: "rr-product__mini__arrows" })]
                      )
                    : t.showLargeDetails
                    ? e("price-magic-badge-details", {
                        key: "default",
                        attrs: { product: t.product, merchantLogo: t.merchantLogo, productImage: t.productImage, badgeType: t.badgeType },
                        on: {
                          onClick: function (e) {
                            return t.$emit("onClick", e);
                          }
                        }
                      })
                    : e("price-magic-details", {
                        key: "default",
                        attrs: {
                          hoverState: t.hoverState,
                          message: t.message,
                          product: t.product,
                          merchantLogo: t.merchantLogo,
                          productImage: t.productImage,
                          persistentExpand: t.persistentExpand,
                          tooltipMode: !1
                        },
                        on: {
                          onClick: function (e) {
                            return t.$emit("onClick", e);
                          }
                        }
                      })
                ],
                1
              ),
              t._t("default")
            ],
            2
          );
        };
      Y._withStripped = !0;
      var K = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "rr-product__content-wrapper rr-text-primary" },
          [
            t.limitedTimeOffer ? e("r-tag-floating", { attrs: { icon: "", position: "top" } }, [t._v(" LIMITED TIME OFFER ")]) : t._e(),
            e(
              "div",
              { staticClass: "rr-product__content rr-items-center" },
              [
                e("div", {
                  staticClass: "rr-product__merchant-logo rr-mb-16",
                  style: { "background-image": `url(${t.merchantLogo})` },
                  attrs: { rel: t.tooltipMode ? null : "click" },
                  on: {
                    click: function (e) {
                      return t.$emit("onClick", { productData: t.product, source: "store logo" });
                    }
                  }
                }),
                e("div", {
                  directives: [
                    { name: "show", rawName: "v-show", value: t.hoverState && !t.tooltipMode, expression: "hoverState && !tooltipMode" }
                  ],
                  staticClass: "rr-product__product-logo rr-mb-32",
                  style: { "background-image": `url(${t.productImage})` },
                  attrs: { title: t.product.title, "aria-label": t.product.title, rel: "click" },
                  on: {
                    click: function (e) {
                      return t.$emit("onClick", { productData: t.product, source: "product image" });
                    }
                  }
                }),
                e("div", { staticClass: "rr-t-h2" }, [t._v(" Save " + t._s(t.formatMoney(t.product.savingsAmount)) + " ")]),
                e(
                  "div",
                  {
                    directives: [{ name: "show", rawName: "v-show", value: t.hoverState, expression: "hoverState" }],
                    staticClass: "rr-w-full rr-mt-16 rr-product__details rr-t-descriptor-xs rr-mb-8"
                  },
                  [
                    e("div", { staticClass: "rr-flex rr-justify-between" }, [
                      e("div", [t._v("Price:")]),
                      e("div", [t._v(t._s(t.formatMoney(t.product.salePrice)))])
                    ]),
                    t.product.eligibleForCashBack
                      ? t.product.cashBackAmount
                        ? e("div", { staticClass: "rr-flex rr-justify-between rr-text-cashback" }, [
                            e("div", [
                              t.product.merchant.rewardsExpired || t.isFixedCashback ? t._e() : e("span", [t._v(t._s(t.rewardAmount))]),
                              e("span", [t._v(" Cash Back:")])
                            ]),
                            e("div", [t._v("- " + t._s(t.formatMoney(t.product.cashBackAmount)))])
                          ])
                        : t._e()
                      : e("div", { staticClass: "rr-flex rr-justify-between rr-text-cashback" }, [
                          e("div", [t._v("Cash Back:")]),
                          e("div", [t._v("item excluded")])
                        ]),
                    t.verishopShipping
                      ? e("div", { staticClass: "rr-flex rr-justify-between rr-text-action" }, [
                          e("div", [t._v("2 Day Shipping:")]),
                          e("div", [t._v("Free")])
                        ])
                      : t._e(),
                    t.message ? e("div", { domProps: { innerHTML: t._s(t.sanitizedMessage) } }) : t._e(),
                    !t.tooltipMode || t.showCalculation ? e("r-divider", { staticClass: "rr-my-8" }) : t._e(),
                    t.showCalculation
                      ? e("div", { staticClass: "rr-flex rr-justify-between rr-t-descriptor-xs" }, [
                          e("div", [t._v(t._s(t.product.cashBackAmount > 0 ? "Price after Cash Back:" : "Your price:"))]),
                          e("div", [t._v(t._s(t.formatMoney(t.product.finalPrice)))])
                        ])
                      : t._e()
                  ],
                  1
                ),
                e(
                  "r-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.tooltipMode && (t.isCTAVisibleWhenMinimized || t.hoverState),
                        expression: "!tooltipMode && (isCTAVisibleWhenMinimized || hoverState)"
                      }
                    ],
                    staticClass: "rr-mt-16",
                    attrs: { block: "" },
                    on: {
                      click: function (e) {
                        return t.$emit("onClick", { productData: t.product, source: "CTA" });
                      }
                    }
                  },
                  [e("rakuten-icon", { staticClass: "rr-mr-8", attrs: { size: "18px" } }), e("span", [t._v(t._s(t.ctaText))])],
                  1
                ),
                t.isCTAVisibleWhenMinimized || t.hoverState
                  ? t._e()
                  : e("div", { staticClass: "rr-text-center rr-t-descriptor-xs" }, [
                      t._v(" with "),
                      e("span", { staticClass: "rr-text-action" }, [t._v("Rakuten")]),
                      t._v(" at " + t._s(t.product.merchant.domainName) + " "),
                      e("div", { staticStyle: { top: "16px", position: "relative" } }, [e("chevron-down-icon")], 1)
                    ]),
                t.verishopShipping
                  ? e(
                      "div",
                      {
                        directives: [{ name: "show", rawName: "v-show", value: !t.hoverState, expression: "!hoverState" }],
                        staticClass: "rr-text-action rr-t-button-s rr-mt-16"
                      },
                      [t._v(" Free 2-Day Shipping/Returns ")]
                    )
                  : t._e()
              ],
              1
            )
          ],
          1
        );
      };
      K._withStripped = !0;
      var J = r(9525),
        Q = r(1145),
        X = r(8316);
      const tt = {
        components: { RButton: T.Z, RTagFloating: E.Z, RDivider: Q.Z, ChevronDownIcon: X.Z, RakutenIcon: M.Z },
        props: {
          product: { type: Object, required: !0 },
          message: { type: String, default: "" },
          merchantLogo: { type: String, default: "" },
          productImage: { type: String, default: "" },
          persistentExpand: { type: Boolean, default: !1 },
          hoverState: { type: Boolean, default: !1 },
          tooltipMode: { type: Boolean, default: !1 }
        },
        computed: {
          shippingInfo() {
            return this.product.merchant.policyDetails
              ? this.product.merchant.policyDetails.find(
                  (t) =>
                    1 === t.policyTypeId &&
                    "all_orders" === t.policyEligibility &&
                    (!t.policyEligibilityMinimum ||
                      (t.policyEligibilityMinimum && this.product.salePrice >= parseInt(t.policyEligibilityMinimum, 10) / 100))
                )
              : null;
          },
          shippingDaysText() {
            return this.shippingInfo.policyDurationDays ? `${this.shippingInfo.policyDurationDays} Day ` : "";
          },
          showCalculation() {
            return this.product.shippingInfo || this.product.cashBackAmount || !this.product.eligibleForCashBack;
          },
          verishopShipping() {
            return 18397 === this.product.merchant.storeId;
          },
          limitedTimeOffer() {
            return this.product.merchant.shoppingTrip.sessionReward;
          },
          sanitizedMessage() {
            return (0, J.Z)(this.message);
          },
          isCTAVisibleWhenMinimized() {
            return ![11222, 18916].includes(this.product.merchant.storeId);
          },
          isFixedCashback() {
            return "Fixed" === this.product.merchant.reward.display;
          },
          ctaText() {
            const t = `Get this at ${this.product.merchant.storeName}`,
              e = `Get this for ${(0, b.l)(this.product.finalPrice)}`;
            return this.persistentExpand && t.length <= 21 ? t : e;
          },
          rewardAmount() {
            return (0, x.l)(this.product.merchant.reward);
          }
        },
        methods: { formatMoney: (t) => (0, b.l)(t) }
      };
      const et = (0, L.Z)(tt, K, [], !1, null, null, null).exports;
      var rt = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return e(
          "div",
          {
            staticClass: "rr-flex rr-flex-col rr-items-center",
            attrs: { "aria-label": "Rakuten Price Magic Recommendation", tabindex: "-1" }
          },
          [
            e("div", {
              staticClass: "rr-bg-center rr-cursor-pointer rr-mb-20",
              style: { "background-image": `url(${t.merchantLogo})`, height: "40px", width: "100%" },
              attrs: { title: t.product.merchant.storeName },
              on: {
                click: function (e) {
                  return t.$emit("onClick", { productData: t.product, source: "store logo" });
                }
              }
            }),
            e("div", { staticClass: "rr-t-h2 rr-text-center rr-mb-32" }, [
              t._v(" " + t._s(t.contentMessage(t.product)) + " at " + t._s(t.product.merchant.storeName) + "! ")
            ]),
            e("product-tile", {
              key: t.index,
              attrs: { product: t.product, showTitle: !1, showStoreLink: !1, badgeType: t.badgeType },
              on: {
                click: function (e) {
                  return t.$emit("onClick", { productData: t.product, source: "product image" });
                }
              }
            }),
            e(
              "r-button",
              {
                staticClass: "rr-mt-12",
                attrs: { block: "" },
                on: {
                  click: function (e) {
                    return t.$emit("onClick", { productData: t.product, source: "CTA" });
                  }
                }
              },
              [e("rakuten-icon", { staticClass: "rr-mr-8", attrs: { size: "18px" } }), e("span", [t._v("Shop Now")])],
              1
            ),
            e("span", { staticClass: "rr-mt-20 rr-t-body" }, [t._v("Taxes and fees may apply.")])
          ],
          1
        );
      };
      rt._withStripped = !0;
      var it = r(8068);
      const st = y().extend({
        components: { ProductTile: it.Z, RButton: T.Z, RakutenIcon: M.Z },
        props: {
          product: { type: Object, required: !0 },
          merchantLogo: { type: String, default: "" },
          badgeType: { type: String, required: !1, default: "" }
        },
        methods: {
          discount: (t) => t.originalPrice - t.salePrice,
          discountDisplay(t) {
            return `${(0, b.l)(this.discount(t))}`;
          },
          contentMessage(t) {
            const e = `Save ${this.discountDisplay(t)} now`,
              r = `${(0, b.l)(t.cashBackAmount)} Cash Back`,
              i = t.merchant.offers_cb && t.eligibleForCashBack;
            if (this.discount(t) <= 0) {
              if (t.merchant.reward.range) return `${(0, x.l)(t.merchant.reward)} Cash Back`;
              if (i) return `We found ${r}`;
            }
            if (i) {
              if (t.merchant.reward.range) return `${e} + ${(0, x.l)(t.merchant.reward).toLowerCase()} Cash Back`;
              if (t.savingsAmount) return `${e} + ${r}`;
            }
            return e;
          }
        }
      });
      const at = (0, L.Z)(st, rt, [], !1, null, null, null).exports,
        ot = {
          components: { RForm: $.Z, PriceMagicDetails: et, PriceMagicBadgeDetails: at },
          props: {
            product: { type: Object, required: !0 },
            message: { type: String, default: "" },
            merchantLogo: { type: String, default: "" },
            productImage: { type: String, default: "" },
            persistentExpand: { type: Boolean, default: !0 },
            badgeType: { type: String, required: !1, default: "" }
          },
          data: () => ({
            label: "Rakuten Price Magic Recommendation",
            hover: !1,
            hoverDelay: 1e3,
            minimizeTimeout: null,
            minimized: !1,
            top: 104,
            right: -26
          }),
          computed: {
            hoverState() {
              return this.hover || this.persistentExpand;
            },
            position() {
              return this.minimized ? { top: `${this.top}px`, right: `${this.right}px` } : { top: "17px", right: "36px" };
            },
            showLargeDetails: () => EBATES.settings.featureFlags.pmValueBadges
          },
          mounted() {
            this.$emit("track", "View Module", {
              entity_name: this.entity_name,
              ...(this.badgeType && { copy_version: this.getCopyVersion(this.product), badge_type: this.badgeType })
            }),
              this.persistentExpand && this.$emit("onShow");
          },
          methods: {
            getCopyVersion(t) {
              if (
                ((t) => {
                  let { originalPrice: e, salePrice: r } = t;
                  return e - r;
                })(t) > 0 &&
                t.merchant.offers_cb
              ) {
                if (t.merchant.reward.range) return "Price difference and tiered CB";
                if (t.savingsAmount) return "Price difference and cashback";
              }
              return t.merchant.reward.range
                ? "Tiered CB only (out of scope)"
                : t.merchant.offers_cb
                ? "Cashback only"
                : "Price difference only";
            },
            miniMouseDown(t) {
              t.preventDefault(),
                (this.dragging = !0),
                (this.moved = !1),
                (this.startedPageY = t.pageY),
                (this.startedContentTop = this.$el.offsetTop),
                this.$el.classList.add("rr-product--dragging");
            },
            miniMouseUp(t) {
              0 === t.button && ((this.dragging = !1), this.moved || this.expand());
            },
            documentMouseUp() {
              this.dragging && this.$el && (this.$el.classList.remove("rr-product--dragging"), (this.dragging = !1));
            },
            documentMouseMove(t) {
              if (this.dragging) {
                t.preventDefault();
                const e = t.pageY - this.startedPageY;
                (this.top = this.startedContentTop + e), sessionStorage.setItem("rr-pm-position-top", `${this.top}px`), (this.moved = !0);
              }
            },
            expand() {
              (this.minimized = !1),
                (this.hover = !1),
                this.$emit("track", "Click Module", { entity_name: this.entity_name, cta_type: "expand" }),
                document.removeEventListener("mouseup", this.documentMouseUp),
                document.removeEventListener("mousemove", this.documentMouseMove);
            },
            async clickClose() {
              this.$emit("track", "Click Module", { entity_name: this.entity_name, cta_type: "minimize" }), this.close();
            },
            close() {
              this.$emit("clickClose"), (this.minimized = !0), (this.right = -26);
              const t = sessionStorage.getItem("rr-pm-position-top");
              t && (this.top = parseInt(t, 10)),
                document.addEventListener("mouseup", this.documentMouseUp),
                document.addEventListener("mousemove", this.documentMouseMove);
            },
            onMouseenter() {
              (this.hover = !0), (this.right = 0), clearTimeout(this.minimizeTimeout), this.$emit("onShow");
            },
            onMouseleave() {
              (this.right = -26), (this.minimizeTimeout = setTimeout(() => (this.hover = !1), this.hoverDelay));
            }
          }
        };
      const nt = (0, L.Z)(ot, Y, [], !1, null, null, null).exports;
      var ct = function () {
        var t = this,
          e = t._self._c;
        return e(
          "r-popover",
          {
            staticClass: "rr-text-center rr-bg-dark",
            attrs: { backgroundColor: "#292A6B", anchor: t.anchor, options: t.options },
            on: { show: t.onShow }
          },
          [
            t.closable
              ? e("r-close-button", {
                  attrs: { color: "#fff" },
                  on: {
                    click: function (e) {
                      return t.$emit("close", e);
                    }
                  }
                })
              : t._e(),
            e("div", { staticClass: "rr-t-descriptor-l rr-mb-16 rr-text-inverse" }, [
              e("span", { attrs: { "aria-hidden": "true" } }, [t._v("\u2728")]),
              t._v(" Meet Price Magic "),
              e("span", { attrs: { "aria-hidden": "true" } }, [t._v("\u2728")])
            ]),
            e("div", { staticClass: "rr-t-descriptor-s rr-text-inverse" }, [
              t._v(" It alerts you if we find a better price and Cash Back. Try it now! ")
            ])
          ],
          1
        );
      };
      ct._withStripped = !0;
      var lt = r(2803),
        dt = r(2977),
        ut = r(2228);
      const pt = {
        components: { RPopover: lt.Z, RCloseButton: dt.Z },
        mixins: [ut.Z],
        props: {
          anchor: { type: Object, default: null },
          closable: { type: Boolean, default: !1 },
          options: { type: Object, default: () => ({ strategy: "fixed" }) },
          storeId: { type: Number, default: null },
          storeName: { type: String, default: "" },
          type: { type: String, default: "PriceMagic" },
          entityName: { type: String, default: "Price Magic" }
        },
        data: () => ({ moduleType: "tooltip" }),
        methods: {
          close() {
            this.$destroy(), this.$el.parentNode.removeChild(this.$el);
          }
        }
      };
      const ht = (0, L.Z)(pt, ct, [], !1, null, null, null).exports,
        mt = y().extend({
          components: { PriceMagicForm: nt, EducationPopover: ht },
          mixins: [W.Z],
          props: {
            product: { type: Object, required: !0 },
            settings: { type: Object, required: !0, default: () => ({}) },
            message: { type: String, default: "" },
            badgeType: { type: String, required: !1, default: "" }
          },
          data: () => ({
            visible: !1,
            persistentExpand: !1,
            merchantLogo: "",
            productImage: "",
            educationPopperVisible: !1,
            entity_name: "Price Magic Notification"
          }),
          async created() {
            (this.persistentExpand = this.settings.featureFlags.pmOpenByDefault),
              (this.merchantLogo = await (0, C.b)(this.product.merchant.images.largeLogo.url)),
              (this.productImage = await (0, C.b)(this.product.imageUrlEbates));
          },
          async mounted() {
            const t = document.documentElement;
            s()(".rr-product", (0, c.Ay)(t) || document).remove();
            (await (0, c.By)({ parentNode: t, styles: ["content/price-magic"] })).appendChild(this.$el),
              await this.$nextTick(),
              (this.visible = !0),
              this.renderIntro(),
              (0, c.PI)();
          },
          methods: {
            track(t, e) {
              (e.entity_name = this.entity_name), this.$emit("track", t, e);
            },
            clickClose() {
              this.educationPopperVisible = !1;
            },
            onShow() {
              this.educationPopperVisible = !1;
            },
            renderIntro() {
              this.settings.progressiveEducation?.PriceMagic &&
                setTimeout(() => {
                  this.educationPopperVisible = !0;
                }, 1e3);
            }
          }
        });
      const gt = (0, L.Z)(mt, U, [], !1, null, null, null).exports;
      var ft = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return e(
          "div",
          { class: t.config.button.class },
          [
            t.educationPopperVisible ? e("price-magic-button-popover", { attrs: { anchor: t.$refs.anchor.$el } }) : t._e(),
            t.popoverVisible
              ? e(
                  "r-popover",
                  {
                    attrs: { trigger: "mouse", anchor: t.$refs.anchor.$el, options: { strategy: "fixed", placement: "right" } },
                    on: { show: t.onDetailsShow }
                  },
                  [
                    e("price-magic-details", {
                      staticClass: "rr-product",
                      attrs: {
                        hoverState: !0,
                        persistentExpand: !1,
                        tooltipMode: !0,
                        message: t.message,
                        product: t.product,
                        merchant: t.merchant,
                        merchantLogo: t.merchantLogo,
                        productImage: t.productImage
                      }
                    })
                  ],
                  1
                )
              : t._e(),
            e(
              "price-magic-button-injection",
              {
                ref: "anchor",
                on: {
                  click: function (e) {
                    return t.$emit("onClick", { productData: t.product, source: "CTA", entity_name: t.entity_name });
                  }
                }
              },
              [t._v(" " + t._s(t.ctaText) + " ")]
            )
          ],
          1
        );
      };
      ft._withStripped = !0;
      var vt = r(8257),
        yt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "r-popover",
            {
              staticClass: "rr-t-descriptor-xs",
              attrs: { disableCloseButton: !1, anchor: t.anchor, options: t.options, width: "330", padding: "medium" },
              on: { show: t.onShow }
            },
            [
              e("div", [t._v(" Rakuten\u2019s Price Magic: ")]),
              e("div", { staticClass: "rr-fw-book" }, [
                t._v(" We compare offers from various stores for you. Click to see saving potential! ")
              ])
            ]
          );
        };
      yt._withStripped = !0;
      const _t = {
        components: { RPopover: lt.Z },
        mixins: [ut.Z],
        props: { anchor: { type: Object, default: null } },
        data: () => ({
          type: "PriceMagicButton",
          entityName: "Price Magic On-page Button",
          moduleType: "tooltip",
          options: { placement: "top-start", modifiers: [{ name: "flip", enabled: !1 }] }
        })
      };
      const bt = (0, L.Z)(_t, yt, [], !1, null, null, null).exports;
      var Ct = function () {
        var t = this,
          e = t._self._c;
        return e(
          "r-button",
          {
            ref: "anchor",
            attrs: { size: "small" },
            on: {
              click: function (e) {
                return t.$emit("click");
              }
            }
          },
          [e("rakuten-icon", { staticClass: "rr-mr-8", attrs: { size: "18px" } }), t._t("default")],
          2
        );
      };
      Ct._withStripped = !0;
      const kt = { components: { RButton: T.Z, RakutenIcon: M.Z } };
      const wt = (0, L.Z)(kt, Ct, [], !1, null, null, null).exports,
        St = y().extend({
          components: { PriceMagicButtonInjection: wt, PriceMagicButtonPopover: bt, PriceMagicDetails: et, RPopover: lt.Z },
          mixins: [W.Z],
          props: {
            product: { type: Object, required: !0 },
            config: { type: Object, required: !0 },
            settings: { type: Object, required: !0, default: () => ({}) },
            message: { type: String, default: "" },
            showTooltipButton: { type: Boolean, default: !1 },
            badgeType: { type: String, default: "" }
          },
          data: () => ({ entity_name: "Price Magic On-page Button", educationPopperVisible: !1, popoverVisible: !1, detailsShowed: !1 }),
          computed: {
            ctaText() {
              if (this.badgeType) {
                const t = this.product.merchant.reward;
                if (this.product.eligibleForCashBack && this.product.merchant.offers_cb && t.range && t.amount) {
                  const e = (0, vt._)(t, this.product.salePrice),
                    r = this.product.originalPrice - this.product.salePrice + e;
                  return `Save up to ${(0, b.l)(r)}`;
                }
                return `Save ${(0, b.l)(this.product.savingsAmount)}`;
              }
              return `Get this for ${(0, b.l)(this.product.finalPrice)}`;
            },
            container() {
              return this.config.button.container;
            },
            merchantLogo() {
              return this.product.merchant.images.largeLogo.url;
            },
            productImage() {
              return this.product.imageUrlEbates;
            }
          },
          async mounted() {
            (0, l.Z)({ name: "content/price-magic" }),
              (0, c.O8)({ el: this.$el, config: this.container, parent: this.container.parent }),
              this.$emit("track", "View Module", { entity_name: this.entity_name }),
              this.showTooltipButton &&
                (this.renderIntro(),
                this.$nextTick().then(() => {
                  this.popoverVisible = !0;
                }));
          },
          methods: {
            renderIntro() {
              this.settings.progressiveEducation?.PriceMagicButton &&
                setTimeout(() => {
                  this.educationPopperVisible = !0;
                }, 1e3);
            },
            onDetailsShow() {
              this.detailsShowed ||
                (this.$emit("track", "View Module", { entity_name: "Price Magic Hover Display" }), (this.detailsShowed = !0));
            }
          }
        });
      const xt = (0, L.Z)(St, ft, [], !1, null, null, null).exports;
      var $t = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return t.visible
          ? e(
              "div",
              { ref: "anchor", staticClass: "rr-price-magic-serp" },
              [
                t.educationPopperVisible
                  ? e("education-popover", {
                      attrs: {
                        type: "PriceMagicSearch",
                        entityName: "Search result micro-activation button",
                        anchor: t.$refs.anchor.$el,
                        storeId: t.product.merchant.storeId,
                        storeName: t.product.merchant.storeName,
                        closable: !0,
                        options: t.educationPopperOptions
                      },
                      on: { close: t.clickClose }
                    })
                  : t._e(),
                t.popoverVisible
                  ? e(
                      "r-popover",
                      {
                        attrs: {
                          width: "390px",
                          trigger: "mouse",
                          anchor: t.$refs.anchor.$el,
                          options: { strategy: "fixed", placement: "bottom-start" }
                        },
                        on: { show: t.onDetailsShow }
                      },
                      [
                        e("price-magic-serp-details", {
                          attrs: { product: t.product },
                          on: {
                            closeNotification: t.closeNotification,
                            onClick: function (e) {
                              return t.$emit("onClick", { ...e, entity_name: "Search result micro-activation popup" });
                            }
                          }
                        })
                      ],
                      1
                    )
                  : t._e(),
                e(
                  "button-hollow",
                  {
                    class: t.config.insert.class || "rr-mt-4",
                    nativeOn: {
                      mouseover: function (e) {
                        return t.onHoverButton.apply(null, arguments);
                      }
                    }
                  },
                  [t._v(" " + t._s(t.ctaText) + " ")]
                )
              ],
              1
            )
          : t._e();
      };
      $t._withStripped = !0;
      var Bt = r(2459),
        Pt = function () {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e(
            "div",
            {
              staticClass: "rr-flex rr-flex-col rr-items-center rr-pm-serp-details",
              attrs: { "aria-label": "Rakuten Price Magic Recommendation", tabindex: "-1" }
            },
            [
              e("r-close-button", {
                on: {
                  click: function (e) {
                    return t.$emit("closeNotification");
                  }
                }
              }),
              e("div", {
                staticClass: "rr-pm-serp-details__merchant-logo rr-mb-16",
                style: { "background-image": `url(${t.merchantLogo})` },
                attrs: { title: t.product.merchant.storeName },
                on: {
                  click: function (e) {
                    return t.$emit("onClick", { productData: t.product, source: "store logo" });
                  }
                }
              }),
              e("r-badge", { staticClass: "rr-t-tag-small rr-text-inverse rr-bg-primary" }, [t._v(" " + t._s(t.badgeText) + " ")]),
              e("div", { staticClass: "rr-t-h2 rr-text-center rr-my-24" }, [
                t._v(" " + t._s(t.contentMessage) + " at " + t._s(t.product.merchant.storeName) + "! ")
              ]),
              e(
                "r-button",
                {
                  attrs: { block: "" },
                  on: {
                    click: function (e) {
                      return t.$emit("onClick", { productData: t.product, source: "CTA" });
                    }
                  }
                },
                [e("rakuten-icon", { staticClass: "rr-mr-8", attrs: { size: "18px" } }), e("span", [t._v("Shop Now")])],
                1
              ),
              e("span", { staticClass: "rr-mt-20 rr-t-body" }, [t._v("Taxes and fees may apply.")])
            ],
            1
          );
        };
      Pt._withStripped = !0;
      var Mt = function () {
        var t = this._self._c;
        return t("div", { staticClass: "r-tag-inline-badge" }, [t("r-tag-inline-base", [this._t("default")], 2)], 1);
      };
      Mt._withStripped = !0;
      const It = { components: { RTagInlineBase: r(369).Z } };
      const Tt = (0, L.Z)(It, Mt, [], !1, null, null, null).exports,
        At = y().extend({
          components: { RBadge: Tt, RCloseButton: dt.Z, RButton: T.Z, RakutenIcon: M.Z },
          props: { product: { type: Object, required: !0 } },
          data: () => ({ merchantLogo: "" }),
          computed: {
            priceDisplay() {
              return (0, b.l)(this.product.finalPrice);
            },
            discount() {
              return this.product.originalPrice - this.product.salePrice;
            },
            discountDisplay() {
              return (0, b.l)(this.discount);
            },
            badgeText() {
              if (this.product.merchant.offers_cb && !this.product.merchant.reward.range) {
                const t = this.product.eligibleForCashBack ? ` + ${(0, x.l)(this.product.merchant.reward).toLowerCase()} CASH BACK` : "";
                return `${(0, b.l)(this.product.salePrice)}${t}`;
              }
              return this.priceDisplay;
            },
            contentMessage() {
              if (this.product.merchant.offers_cb && this.product.merchant.reward.range && this.discount > 0) {
                const t = this.product.eligibleForCashBack ? ` + ${(0, x.l)(this.product.merchant.reward).toLowerCase()} Cash Back` : "";
                return `Save ${this.discountDisplay} now${t}`;
              }
              if (this.product.savingsAmount && this.product.merchant.offers_cb && this.discount > 0) {
                const t = this.product.eligibleForCashBack ? ` + ${(0, b.l)(this.product.cashBackAmount)} Cash Back` : "";
                return `Save ${this.discountDisplay} now${t}`;
              }
              return this.product.merchant.reward.range
                ? `${(0, x.l)(this.product.merchant.reward)} Cash Back`
                : this.product.merchant.offers_cb
                ? `We found ${(0, b.l)(this.product.cashBackAmount)} Cash Back`
                : `Save ${this.discountDisplay} now`;
            }
          },
          async created() {
            this.merchantLogo = await (0, C.b)(this.product.merchant.images.largeLogo.url);
          }
        });
      const Et = (0, L.Z)(At, Pt, [], !1, null, null, null).exports,
        Nt = y().extend({
          components: { EducationPopover: ht, ButtonHollow: Bt.Z, PriceMagicSerpDetails: Et, RPopover: lt.Z },
          mixins: [W.Z],
          props: {
            product: { type: Object, default: null, required: !0 },
            config: { type: Object, default: null, required: !0 },
            container: { type: Object, required: !0 }
          },
          data: () => ({
            visible: !1,
            educationPopperVisible: !1,
            entity_name: "Search result micro-activation button",
            detailsShowed: !1,
            popoverVisible: !1,
            educationPopperOptions: {
              strategy: "fixed",
              placement: "right",
              modifiers: [{ name: "offset", options: { offset: [50, 10] } }]
            }
          }),
          computed: {
            ctaText() {
              const t = this.product.savingsAmount;
              return t ? `Save ${(0, b.l)(t)}` : "Deal found!";
            }
          },
          async mounted() {
            (0, c.O8)({ el: this.$el, config: this.config.insert, parent: this.container }) &&
              ((this.visible = !0),
              this.renderIntro(),
              this.$emit("track", "View Module", { entity_name: this.entity_name, copy_version: "Saving amount" }),
              this.$nextTick().then(() => {
                this.popoverVisible = !0;
              }));
          },
          methods: {
            onDetailsShow() {
              this.detailsShowed ||
                (this.$emit("track", "View Module", { entity_name: "Search result micro-activation popup" }), (this.detailsShowed = !0));
            },
            onHoverButton() {
              this.clickClose();
            },
            formatMoney: (t) => (0, b.l)(t),
            renderIntro() {
              this.product.rrFirstElement &&
                setTimeout(() => {
                  this.educationPopperVisible = !0;
                }, 1e3);
            },
            clickClose() {
              this.educationPopperVisible = !1;
            },
            closeNotification() {
              this.$emit("track", "Click Module", { cta_type: "close" }),
                (this.popoverVisible = !1),
                setTimeout(() => {
                  this.popoverVisible = !0;
                }, 100);
            }
          }
        });
      const Zt = (0, L.Z)(Nt, $t, [], !1, null, null, null).exports,
        Lt = y().extend({
          components: { PriceMagicNotification: gt, PriceMagicButton: xt, PriceMagicSerp: Zt },
          props: {
            product: { type: Object, required: !0 },
            requestId: { type: String, required: !0 },
            config: { type: Object, required: !0, default: () => ({}) },
            settings: { type: Object, required: !0, default: () => ({}) },
            isSearchMode: { type: Boolean, required: !1, default: !1 },
            container: { type: Object, required: !1, default: () => ({}) }
          },
          data: () => ({
            module_type: "Price Magic",
            showPriceMagicNotification: !1,
            showPriceMagicButton: !1,
            showTooltipButton: !1,
            badgeType: ""
          }),
          computed: {
            message() {
              return (
                this.settings.featureFlags.pmCustomMessages &&
                this.settings.priceMagic.messages.find((t) => {
                  let { storeId: e } = t;
                  return e === this.product.merchant.storeId;
                })?.message
              );
            }
          },
          async created() {
            if (
              ((this.showPriceMagicNotification = !this.isSearchMode),
              this.settings.featureFlags.pmButton && this.config.button && !this.isSearchMode)
            ) {
              const t = this.config.button.container;
              let e = !1;
              try {
                e = t && Object.values(t).every((t) => s()(t).length);
              } catch (t) {}
              e && (this.showPriceMagicButton = !0);
            }
            (this.showTooltipButton = !this.showPriceMagicNotification),
              (this.badgeType = this.settings.featureFlags.pmValueBadges ? this.getBadgeType(this.product) : "");
          },
          methods: {
            getBadgeType(t) {
              const e = "Extra cashback",
                r = "Sale",
                i = t.listPrice - t.salePrice,
                s = t.eligibleForCashBack && t.merchant.reward.previous && !t.merchant.reward.range && t.savingsAmount > 0,
                a =
                  ((t) => {
                    let { listPrice: e, salePrice: r } = t;
                    return Math.round(((e - r) / e) * 100);
                  })(t) >= 15;
              return i > 0 && s ? (i > t.cashBackAmount ? r : e) : s ? e : a ? r : "";
            },
            listingAttributes: (t) => ({
              listingId: t.listingId,
              asin: t.asin,
              upcs: t.upcs,
              category_name: t.categoryName,
              category_id: t.categoryId
            }),
            async onClick(t) {
              let { productData: e, source: r, entity_name: i, eeid: s = "37604" } = t;
              const { merchant: o, ...c } = e,
                l = this.settings.priceMagic.affiliatizedLinks.find((t) => c.productUrl.indexOf(t) >= 0),
                d = this.isSearchMode ? `${this.module_type} ${i}` : this.module_type;
              if ("exclusions" === r) (0, k.Z)(`https://www.rakuten.com/${o.siteUrl}`);
              else {
                if (!this.settings.user_id)
                  return void (0, n.Z)("login", {
                    merchant: o,
                    type: this.module_type,
                    preceding_screen_name: d,
                    tabId: a.Z.browser.NEWTAB
                  });
                const t = {
                  channel: p.BF,
                  storeId: o.storeId,
                  eeid: s,
                  sessionAttributes: {
                    product: c,
                    instantStartCAA: "A" === u.Z.get("BTN140"),
                    source: d,
                    event_attributes: { ...this.listingAttributes(e), referring_domain: (0, _.g)(location.href) }
                  },
                  xfasParams: { itemId: c.listingId, itemPrice: c.salePrice, itemGenre: c.categoryId, prev_page_type: "Button Price Magic" }
                };
                if ((!o.affiliatizerEnabled && !l) || (!o.offers_cb && "Coupons" !== o.reward.display)) {
                  h.Z.track("Visit Page", { preceding_screen_name: d, url: c.productUrl, requestId: this.requestId });
                  const e = await (0, k.Z)(c.productUrl);
                  (0, n.Z)("activate", { ...t, tabId: e.id, store_url: document.location.href, forceBackgroundActivation: !0 });
                } else
                  (0, n.Z)("activate", { ...t, tabId: a.Z.browser.NEWTAB, store_url: c.productUrl, product_url: l ? c.productUrl : null });
              }
            },
            track(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "View Module" === t && (e = { ...e, ...this.listingAttributes(this.product), ...(0, G.L)(this.product.merchant.reward) }),
                h.Z.track(t, {
                  module_type: this.module_type,
                  store_name: this.product.merchant.storeName,
                  store_id: this.product.merchant.storeId,
                  domain: location.host,
                  rec_store_id: this.product.storeId,
                  algorithmMatched: this.product.algorithmMatched,
                  current_product_price: this.product.originalPrice.toFixed(2),
                  savings_amount: this.product.savingsAmount.toFixed(2),
                  rec_product_price: this.product.salePrice.toFixed(2),
                  requestId: this.requestId,
                  ...e
                });
            }
          }
        }),
        Dt = Lt;
      const Rt = (0, L.Z)(Dt, H, [], !1, null, null, null).exports;
      var Ot = function () {
        var t = this,
          e = t._self._c;
        t._self._setupProxy;
        return e(
          "transition",
          { attrs: { name: "rr-slide-fade" } },
          [
            t.visible
              ? e("gift-card-form", {
                  attrs: { cashbackAmount: t.cashbackAmount, merchantLogo: t.merchantLogo },
                  on: { clickClose: t.clickClose, clickCTA: t.clickCTA }
                })
              : t._e()
          ],
          1
        );
      };
      Ot._withStripped = !0;
      var qt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "r-form",
          {
            staticClass: "rr-gift-card rr-text-center",
            attrs: { "data-tid": "gift-card" },
            on: {
              close: function (e) {
                return t.$emit("clickClose");
              }
            }
          },
          [
            e("div", { staticClass: "rr-t-h2 rr-mt-32 rr-mb-24" }, [
              t._v(" Want "),
              e("span", { staticClass: "rr-text-cashback" }, [t._v(t._s(t._f("formatCashBack")(t.cashbackAmount)) + " Cash Back")]),
              e("br"),
              t._v("with your gift card? ")
            ]),
            t.merchantLogo
              ? e("div", { staticClass: "rr-gift-card__merchant-logo", style: { "background-image": `url(${t.merchantLogo})` } })
              : t._e(),
            e(
              "r-button",
              {
                attrs: { block: "" },
                on: {
                  click: function (e) {
                    return t.$emit("clickCTA");
                  }
                }
              },
              [t._v(" Get It From Rakuten ")]
            )
          ],
          1
        );
      };
      qt._withStripped = !0;
      const Ft = {
        components: { RForm: $.Z, RButton: T.Z },
        props: { merchantLogo: { type: String, default: "" }, cashbackAmount: { type: Object, required: !0 } }
      };
      const Vt = (0, L.Z)(Ft, qt, [], !1, null, null, null).exports,
        zt = y().extend({
          components: { GiftCardForm: Vt },
          props: {
            merchant: { type: Object, required: !0 },
            giftCardMerchant: { type: Object, required: !0 },
            cartTotal: { type: Number, default: 0 }
          },
          data: () => ({ visible: !1, module_type: "Gift Cards", entity_name: "Gift Card Notification", merchantLogo: "" }),
          computed: {
            cashbackAmount() {
              return this.giftCardMerchant.reward;
            }
          },
          async mounted() {
            if (((await (0, c.By)({ top: !0, styles: ["content/price-magic"] })).appendChild(this.$el), this.giftCardMerchant.facePlate))
              this.merchantLogo = await (0, C.b)(this.giftCardMerchant.facePlate.url);
            else {
              const t = await a.Z.extension.fireEvent("getStoresByName", { data: { name: this.giftCardMerchant.name } }),
                e = t ? t[0] : null;
              e && e.images && (this.merchantLogo = await (0, C.b)(e.images.largeLogo.url));
            }
            (this.visible = !0), this.track("View Module", (0, G.L)(this.cashbackAmount)), (0, c.PI)();
          },
          methods: {
            clickCTA() {
              let t = `${this.giftCardMerchant.productURL}&sourceId=6991157`;
              this.cartTotal && (t += `&amount=${this.cartTotal}`),
                a.Z.browser.navigate(t),
                h.Z.track("Visit Page", { preceding_screen_name: "Gift Card Notification", url: t }),
                (this.visible = !1);
            },
            clickClose() {
              (this.visible = !1), this.track("Click Module", { cta_type: "close" });
            },
            track(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              h.Z.track(t, {
                module_type: this.module_type,
                entity_name: this.entity_name,
                ...(this.merchant && { store_name: this.giftCardMerchant.name, domain: this.merchant.domainName }),
                ...e
              });
            }
          }
        });
      const jt = (0, L.Z)(zt, Ot, [], !1, null, null, null).exports;
      let Ht, Gt, Ut, Wt, Yt;
      function Kt(t) {
        (Ut = t.merchant),
          (Wt = t.config),
          (Yt = t.abandonedReminderActive),
          (Ht = self.EBATES.settings),
          (Gt = Ht.priceMagic),
          !0 !== Yt || Wt
            ? Wt &&
              (async function (t) {
                try {
                  await (function (t) {
                    return new Promise((e) => {
                      const r = new o.Hx({ config: t });
                      r.on("product-found", async (t) => {
                        let { product: r, config: i } = t;
                        (0, n.Z)("saveVisitedProduct", { domain: location.host, url: location.href, ts: Date.now(), product: r });
                        try {
                          await (async function (t) {
                            let { product: e, merchant: r } = t;
                            if (
                              Ht.featureFlags.pmGiftCards &&
                              1 === r?.storeId &&
                              (e.brandName || e.title) &&
                              (e.title.search(/gift card|e-?mail delivery/i) >= 0 || e.breadcrumb?.search(/gift card/i) >= 0)
                            ) {
                              const t = (t) =>
                                  t
                                    .trim()
                                    .toLowerCase()
                                    .replace(/['/]| and | & /g, ""),
                                i = e.brandName && t(e.brandName),
                                s = e.title && t(e.title),
                                a = await (0, n.Z)("getGiftCardStore", { product: { brandName: i, title: s } });
                              if (a)
                                return (
                                  setTimeout(() => {
                                    new jt({ propsData: { merchant: r, giftCardMerchant: a, cartPrice: e.salePrice } }).$mount();
                                  }, Gt.giftCardDisplayDelay || 0),
                                  Promise.resolve("Gift Card Found")
                                );
                            }
                            return Promise.reject();
                          })({ product: r, merchant: Ut });
                        } catch (t) {
                          try {
                            const t = new Qt({ config: i });
                            await t.runPriceMagic(r);
                          } catch (t) {
                            i.abandonedReminderActive && Jt();
                          }
                        }
                        e(null);
                      }),
                        r.on("product-not-found", () => {
                          s()(".ebates-hover.ebates-hover-product", (0, c.Ay)() || document).remove(), Yt && Jt(), e(null);
                        }),
                        r.observe(document);
                    });
                  })(t),
                    "searchMultipleProducts" in t &&
                      (async function (t) {
                        const e = (function (t) {
                          let { storeName: e, domainName: r, enabled: i, searchMultipleProducts: s } = t;
                          return { storeName: e, domainName: r, enabled: i, ...s };
                        })(t);
                        if (
                          ((function (t) {
                            const e = t.track;
                            if (!e) return;
                            const r = (0, d.lz)(document.URL),
                              [, i] = r.match(e.search_term) || [];
                            if (i?.length) {
                              const s = g().unformat((0, o.MT)(e.attributes.total)),
                                a = (0, o.MT)(e.attributes.departments);
                              h.Z.track("View Search", {
                                entity_name: t.storeName,
                                domain: t.domainName,
                                search_term: decodeURIComponent(i.replace(/\+/g, " ")),
                                url: r,
                                store_id: 1,
                                total: s,
                                departments: a
                              });
                            }
                          })(e),
                          !Ht.featureFlags.pmMultipleProducts || !e.searchProducts)
                        )
                          return;
                        const r = new o.Hx({ config: e });
                        r.on("products-found", async (t) => {
                          let { products: e, config: r } = t;
                          const i = new Xt({ config: r }),
                            s = (await i.runMultiplePriceMagic(e)).filter((t) => {
                              let { pmProduct: e } = t;
                              return e;
                            });
                          if (0 === s.length) return;
                          const a = i.responseData.requestId;
                          let o = !0;
                          const n = "PriceMagicSearch";
                          await (0, l.Z)({ name: "content/price-magic" });
                          for (const { pmProduct: t, container: e } of s)
                            (t.rrFirstElement = o && Ht.progressiveEducation && Ht.progressiveEducation[n]),
                              (o = !1),
                              new Rt({
                                propsData: { product: t, container: e, config: r, settings: Ht, requestId: a, isSearchMode: !0 }
                              }).$mount();
                        }),
                          r.observe(document);
                      })(t);
                } catch {}
              })(Wt)
            : Jt();
      }
      async function Jt() {
        const { product: t, showingCounters: e } = await (0, n.Z)("getReminderProduct", { domain: location.host });
        t && new j({ propsData: { product: t, showingCounters: e, caValueBadges: Ht.featureFlags.caValueBadges } }).$mount();
      }
      class Qt {
        constructor(t) {
          let { config: e } = t;
          this.config = e;
        }
        sanitizeAttriubtes = (t) => {
          const e = /^https?:\/\//i;
          return (
            Object.keys(t).forEach((r) => {
              "string" != typeof t[r] || t[r].match(e) || (t[r] = t[r].trim());
            }),
            t
          );
        };
        requestProduct = async (t) => {
          if (t.salePrice && t.title) {
            const e = Gt.requestThreshold ?? 0;
            if (t.salePrice < e) throw new Error("salePrice below requestThreshold");
            const r = !this.config.enabled && "A" === (await u.Z.activate(this.config.test)),
              i = this.config.enabled || (!this.config.enabled && r);
            if (
              ((this.query = t),
              (this.responseData = await (0, n.Z)("getSimilarProducts", {
                requestAllowed: i,
                canonical_url: te(),
                domainName: this.config.domainName,
                query: { ...t, storeId: this.config.storeId, storeName: this.config.storeName }
              })),
              this.responseData)
            )
              return this.responseData.product;
            throw new Error("No offers for the product");
          }
          if (Ht.featureFlags.pmLogProductParserError) {
            const e = Object.keys(this.config.searchProducts).filter((e) => !t[e]);
            e.length &&
              (0, n.Z)("datadogTrack", {
                type: "warn",
                name: "ProductParserError",
                data: { url: (0, d.lz)(location.href), errorDetails: e.join(", ") }
              });
          }
          throw new Error("No product on the page");
        };
        async viewFactory(t) {
          let { product: e, config: r } = t;
          if (r.enabled || 18397 === e.merchant.storeId || "A" === (await u.Z.activate(r.test)))
            return (
              (e.originalUrl = location.href),
              (e.originalStoreName = r.storeName),
              new Rt({ propsData: { product: e, requestId: this.responseData.requestId, config: this.config, settings: Ht } }).$mount(),
              !1
            );
          throw new Error("Not participating merchant");
        }
        async runPriceMagic(t) {
          t = this.sanitizeAttriubtes(t);
          const e = await this.requestProduct(t);
          e && (await this.viewFactory({ product: e, config: this.config }));
        }
      }
      class Xt extends Qt {
        constructor(t) {
          let { config: e } = t;
          super({ config: e });
        }
        async runMultiplePriceMagic(t) {
          t.forEach((t) => (t.product = this.sanitizeAttriubtes(t.product)));
          const e = Gt.requestThreshold ?? 0,
            r = t.filter((t) => {
              let { product: r } = t;
              return r.asin && r.salePrice >= e;
            }),
            i = await this.requestMultipleProducts(
              r.map((t) => {
                let { product: e } = t;
                return e;
              })
            );
          for (let t = 0; t < i.length; t++) r[t].pmProduct = i[t].pmProduct;
          return t;
        }
        requestMultipleProducts = async (t) => {
          const e = !this.config.enabled && "A" === (await u.Z.activate(this.config.test));
          if (!(this.config.enabled || (!this.config.enabled && e))) return [];
          const r = { canonical_url: te(), domainName: this.config.domainName, storeName: this.config.storeName, products: t };
          return (this.responseData = await (0, n.Z)("getSimilarMultipleProducts", r)), this.responseData?.products || [];
        };
      }
      function te() {
        return document.querySelector("link[rel=canonical]")?.getAttribute("href") ?? "";
      }
      a.Z.extension.attachEvent("execute", async function (t) {
        let { data: e = {} } = t;
        const { method: r, merchant: i, config: s, abandonedReminderActive: a } = e;
        r === p.UW.PRICE_MAGIC && Kt({ merchant: i, config: s, abandonedReminderActive: a });
      });
    },
    7325: (t, e, r) => {
      r.d(e, { Z: () => a });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e("svg-icon", t._b({ attrs: { viewBox: "0 0 16 16" } }, "svg-icon", t.$props, !1), [
          e("path", {
            attrs: {
              d: "M8 10.7c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7Zm0-3.9c-.7 0-1.2.5-1.2 1.2S7.3 9.2 8 9.2 9.2 8.7 9.2 8 8.7 6.8 8 6.8Z"
            }
          }),
          e("path", {
            attrs: {
              d: "M8.9 15.9H7.1c-.5 0-1-.4-1.1-.9l-.2-1.4c-.1 0-.2-.1-.3-.1l-1.1.9c-.4.3-1 .3-1.4-.1L1.8 13c-.4-.4-.4-1-.1-1.4l.9-1.1c0-.1-.1-.2-.1-.3l-1.4-.3c-.6-.1-1-.5-1-1V7.1c0-.5.4-1 .9-1.1l1.4-.2c0-.1.1-.2.1-.3l-.7-1.1c-.4-.4-.3-1 0-1.4L3 1.8c.4-.4 1-.4 1.4-.1l1.1.9c.1 0 .2-.1.3-.1L6 1.1c.1-.5.5-.9 1.1-.9h1.7c.5 0 1 .4 1.1.9l.2 1.4c.1 0 .2.1.3.1l1.1-.9c.4-.3 1-.3 1.4.1L14.2 3c.4.4.4 1 .1 1.4l-.9 1.1c0 .1.1.2.1.3l1.4.2c.5.1.9.5.9 1.1v1.7c0 .5-.4 1-.9 1.1l-1.4.2c0 .1-.1.2-.1.3l.9 1.1c.3.4.3 1-.1 1.4L13 14.2c-.4.4-1 .4-1.4.1l-1.1-.9c-.1 0-.2.1-.3.1l-.2 1.4c-.2.6-.6 1-1.1 1Zm-1.4-1.5h.9l.2-1.5c0-.3.2-.5.5-.6.3-.1.6-.2.9-.4.3-.1.6-.1.8.1l1.2.9.7-.7-.8-1.2c-.2-.2-.2-.6-.1-.8.2-.3.3-.6.4-.9.1-.3.3-.5.6-.5l1.5-.2V7.5l-1.5-.2c-.3 0-.5-.2-.6-.5-.1-.3-.2-.6-.4-.9-.1-.3-.1-.6.1-.8l.9-1.2-.7-.7-1.1.9c-.2.2-.6.2-.8.1-.4-.2-.7-.3-1-.4-.3-.1-.5-.3-.5-.6l-.2-1.6h-1l-.2 1.6c0 .3-.3.5-.5.6-.3.1-.6.2-.9.4-.3.1-.6.1-.9-.1l-1.2-.9-.6.6.9 1.2c.2.2.2.6.1.8-.2.4-.3.7-.4 1-.1.3-.3.5-.6.5l-1.6.2v.9l1.5.2c.3 0 .5.2.6.5.2.4.3.7.5 1 .1.3.1.6-.1.8l-.9 1.2.7.7 1.1-.9c.2-.2.6-.2.8-.1.3.2.6.3.9.4.3.1.5.3.5.6l.3 1.6Z"
            }
          })
        ]);
      };
      i._withStripped = !0;
      const s = {
        components: { SvgIcon: r(1694).Z },
        props: {
          color: { type: String, default: "currentColor" },
          size: { type: [Number, String], default: 16 },
          rotate: { type: Number, default: 0 }
        }
      };
      const a = (0, r(2264).Z)(s, i, [], !1, null, null, null).exports;
    }
  },
  (t) => {
    t.O(0, [998], () => {
      return (e = 1860), t((t.s = e));
      var e;
    });
    var e = t.O();
    source = e;
  }
]);
