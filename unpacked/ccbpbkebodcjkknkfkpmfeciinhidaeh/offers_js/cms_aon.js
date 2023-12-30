/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function n(t, i, o) {
  function e(a, c) {
    if (!i[a]) {
      if (!t[a]) {
        var s = "function" == typeof require && require;
        if (!c && s) return s(a, !0);
        if (r) return r(a, !0);
        var f = new Error("Cannot find module '" + a + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (i[a] = { exports: {} });
      t[a][0].call(
        l.exports,
        function (n) {
          return e(t[a][1][n] || n);
        },
        l,
        l.exports,
        n,
        t,
        i,
        o
      );
    }
    return i[a].exports;
  }
  for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) e(o[a]);
  return e;
})(
  {
    1: [
      function (n, t, i) {
        "use strict";
        !(function () {
          var n = { notification: {}, listing: {} };
          function t(n) {
            return "green" === n.availability_code;
          }
          function i(n) {
            return parseInt(n.rating, 10) >= 4;
          }
          function o(n) {
            return _.filter(["Product", "Similar", "Auction", "Coupon", "SpecialCoupon"], function (t) {
              return (function (n, t) {
                return _.some(n, function (n) {
                  return n.category === t;
                });
              })(n, t);
            });
          }
          function e(n) {
            var t = ["imdb", "hcgame", "youtube", "wiki", "pinterest"];
            return _.some(n, function (n) {
              return _.contains(t, n.catalog);
            });
          }
          function r(n, t, i) {
            var r = o(n),
              a = e(n);
            if (_.contains(r, "Coupon")) {
              if (i) return ["Coupon"];
              if (_.contains(r, "Product")) return ["Product"];
              if (_.contains(r, "Similar")) return ["Similar"];
            } else
              3 == r.length
                ? (r = t ? ["Product", "Auction"] : ["Product", "Similar"])
                : "Similar" == r[0] && "Auction" == r[1] && (r = ["Similar"]);
            return a && !_.contains(r, "Similar") && r.push("Similar"), r;
          }
          (n.notification.beforeRender = function (n) {
            var o = n.products[0],
              e = n.meta.abs_version,
              r = 2 === parseInt(e);
            return {
              product: o,
              notification: n.notification,
              inStock: t(o),
              isTopSeller: i(o),
              productsLength: n.products.length,
              absRebrand: r,
              meta: n.meta
            };
          }),
            (n.notification.afterRender = function () {
              1 === $(".offers-share-earn").length &&
                ($(".pop-up-trigger").on("click", function () {
                  setTimeout(function () {
                    $(".indicator-group.offers a").removeClass("active");
                  }, 80);
                }),
                $(".offers-full-bar-container, .dash-offers").addClass("aklamio"));
            }),
            (n.listing.beforeRender = function (n) {
              n = _.clone(n);
              var o = _.sortBy(n.products, "price"),
                a = "#offers/coupons" == location.hash,
                c = r(n.products, n.meta.auction, a),
                s = "true" == n.meta.coupons,
                f = "#offers/aklamio" == location.hash,
                l = n.meta.aklamio_url;
              f && $("#dashItemArea").removeClass("dash").addClass("overlay-wrapper");
              var u = c[0];
              o = o.map(function (n) {
                return (
                  ((n = _.clone(n)).inStock = t(n)),
                  (n.isTopSeller = i(n)),
                  (n.isCoupon = (function (n) {
                    return "Coupon" === n.category;
                  })(n)),
                  (n.isSpecialCoupon = (function (n) {
                    return "SpecialCoupon" === n.category;
                  })(n)),
                  (n.ratingPercent = (parseInt(n.rating, 10) / 5) * 100),
                  n.isCoupon && ((n.saving = n.value), (n.label = n.name)),
                  n
                );
              });
              var d = _.filter(o, function (n) {
                return n.category === u;
              })[0];
              n.products = o;
              var p = e(o);
              return (
                _.extend(n, {
                  showTabs: c.length > 1,
                  showProducts: _.contains(c, "Product"),
                  showSimilar: _.contains(c, "Similar"),
                  showAuctions: _.contains(c, "Auction"),
                  showCoupons: _.contains(c, "Coupon"),
                  showSpecialCoupon: _.contains(c, "SpecialCoupon"),
                  initialCategory: c[0] + (p ? " isCatalog" : ""),
                  firstProduct: d,
                  hasCoupons: s,
                  showAklamio: f,
                  aklamioUrl: l
                }),
                n
              );
            });
          var a = !1;
          function c(n) {
            $(".offers-tabs-li").removeClass("offers-tabs-li-selected"),
              $("#listing-holder").removeClass(),
              $(".offers-tabs-li-" + n).addClass("offers-tabs-li-selected"),
              $("#listing-holder").addClass("show-" + n);
          }
          n.listing.afterRender = function (n) {
            var t = $(".offers-tabs-li:first a").attr("data-type");
            t && c(t),
              $(".offers-tabs-li a").on("click", function (n) {
                n.preventDefault(), c($(this).attr("data-type"));
              }),
              a && ($(".oneclick-fdbk-form").hide(), $(".oneclick-fdbk-success").show()),
              $(".oneclick-feedback button").on("click", function (n) {
                $(".oneclick-fdbk-form").fadeOut("fast", function () {
                  $(".oneclick-fdbk-success").fadeIn("slow");
                }),
                  (a = !0);
              }),
              1 === $(".offers-share-earn").length && $(".dash-offers").addClass("aklamio");
          };
          var s = { notification: {}, listing: {} };
          (s.notification.beforeRender = function (n) {
            var o = r(n.products, n.meta.auction),
              e = o[0],
              a = _.sortBy(
                _.filter(n.products, function (n) {
                  return _.contains(o, n.category);
                }),
                "price"
              ),
              c = _.filter(a, function (n) {
                return n.category === e;
              })[0],
              s = n.meta.abs_version,
              f = 2 === parseInt(s);
            return {
              firstProduct: c,
              inStock: t(c),
              isTopSeller: i(c),
              offersNo: a.length,
              onlySimilar: "Similar" == e,
              absRebrand: f,
              meta: n.meta
            };
          }),
            (s.notification.afterRender = n.notification.afterRender),
            (s.listing.beforeRender = n.listing.beforeRender),
            (s.listing.afterRender = n.listing.afterRender);
          var f = { notification: {}, listing: {}, coupon: {}, ftu: {} };
          f.notification.beforeRender = function (n) {
            var t = _.clone(n),
              i = t.products,
              o = _.sortBy(i, "rating"),
              e = r(n.products)[0];
            t.products = o;
            var a = _.first(t.products, 1),
              c = n.meta.abs_version,
              s = 2 === parseInt(c),
              f = i.length;
            return (
              (t.notification.firstProduct = a[0]),
              (t.notification.offersNo = f),
              (t.notification.category = e),
              (t.notification.absRebrand = s),
              t
            );
          };
          var l,
            u = !1;
          (f.coupon.beforeRender = function (n) {
            return (u = !0), n;
          }),
            (f.coupon.afterRender = function () {
              $(".copy-callback").on("click", function (n) {
                !(function (n) {
                  var t = document.createRange();
                  t.selectNodeContents(n);
                  var i = window.getSelection();
                  i.removeAllRanges(), i.addRange(t);
                })(document.getElementById("code")),
                  (l = (function () {
                    try {
                      l = document.execCommand("copy");
                    } catch (n) {
                      l = !1;
                    }
                    return l;
                  })()),
                  $(".copy-callback span").fadeOut("slow", function (n) {
                    $(".copy-success").delay(900).fadeIn("fast");
                  });
              }),
                l && ($(".copy-callback span").hide(), $(".copy-success").show());
            }),
            (f.ftu.beforeRender = function (n) {
              return _.extend({ singleCoupon: u }, n);
            }),
            (f.notification.afterRender = n.notification.afterRender),
            (f.listing.beforeRender = n.listing.beforeRender),
            (f.listing.afterRender = n.listing.afterRender);
          var d = { notification: {}, listing: {} };
          (d.notification.beforeRender = n.notification.beforeRender),
            (d.listing.beforeRender = n.listing.beforeRender),
            (d.listing.afterRender = n.listing.afterRender);
          var p = { notification: {}, listing: {} };
          (p.notification.beforeRender = n.notification.beforeRender),
            (p.listing.beforeRender = n.listing.beforeRender),
            (p.listing.afterRender = n.listing.afterRender);
          var g = { notification: {}, listing: {}, coupon: {}, ftu: {} };
          (g.notification.beforeRender = function (n) {
            var o,
              e,
              a = r(n.products),
              c = a[0],
              s = _.sortBy(
                _.filter(n.products, function (n) {
                  return _.contains(a, n.category);
                }),
                "price"
              ),
              f = _.filter(s, function (n) {
                return n.category === c;
              }),
              l = f[0];
            "true" == n.meta.coupons ? ((o = !0), (e = f.length)) : ((o = !1), (e = s.length));
            var u = n.meta.abs_version,
              d = 2 === parseInt(u),
              p = n.meta.aklamio_url,
              g = n.meta.icon_animation;
            return {
              firstProduct: l,
              inStock: t(l),
              isTopSeller: i(l),
              hasCoupons: o,
              offersNo: e,
              absRebrand: d,
              aklamioUrl: p,
              logoAbTest: g,
              meta: n.meta
            };
          }),
            (g.notification.afterRender = function () {
              $(".triggers").on("hover", function () {
                $(this).addClass("active");
              });
            }),
            (g.ftu.beforeRender = function (n) {
              return { hasCoupons: "true" == n.meta.coupons, singleCoupon: u, meta: n.meta };
            }),
            (g.notification.beforeRender = g.notification.beforeRender),
            (g.notification.afterRender = n.notification.afterRender),
            (g.listing.beforeRender = n.listing.beforeRender),
            (g.listing.afterRender = n.listing.afterRender),
            ABS.run(function (t) {
              t.templates = {
                tpl_notification_0081: s.notification,
                tpl_listing_0081: s.listing,
                tpl_notification_0082: s.notification,
                tpl_listing_0082: s.listing,
                tpl_notification_009: d.notification,
                tpl_listing_009: d.listing,
                tpl_notification_003: p.notification,
                tpl_listing_003: p.listing,
                tpl_notification_0031: p.notification,
                tpl_listing_0031: p.listing,
                tpl_notification_0032: p.notification,
                tpl_listing_0032: p.listing,
                tpl_notification_full_ciuvo: s.notification,
                tpl_listing_full_ciuvo: s.listing,
                tpl_notification_full_billiger: d.notification,
                tpl_listing_full_billiger: d.listing,
                tpl_notification_full_ovisto: p.notification,
                tpl_listing_full_ovisto: p.listing,
                tpl_notification_ciuvo: s.notification,
                tpl_notification_coupons: f.notification,
                tpl_notification_coupons_and_offers: g.notification,
                tpl_notification_billiger: n.notification,
                tpl_notification_ovisto: n.notification,
                tpl_notification_splashoffer: n.notification,
                tpl_notification_utilities: n.notification,
                tpl_listing: n.listing,
                tpl_listing_coupons: n.listing,
                tpl_listing_coupons_and_offers: n.listing,
                tpl_coupon_single: f.coupon,
                tpl_ftu_coupons: f.ftu,
                tpl_ftu_coupons_and_offers: g.ftu
              };
            }),
            (function (n) {
              if (!window._fixBrokenFirefoxLinksApplied) {
                window._fixBrokenFirefoxLinksApplied = !0;
                var t = navigator.userAgent.match(/Firefox\/(\d+)/);
                (t && parseInt(t[1], 10) < 53) ||
                  (chrome &&
                    chrome.runtime &&
                    chrome.runtime.sendMessage &&
                    $(n).on("click", "a[target=_blank][href]", function (n) {
                      n.preventDefault(),
                        chrome.runtime.sendMessage({ publish: "navigate", message: { url: n.currentTarget.href, as_separate: !0 } });
                    }));
              }
            })(document.body);
        })();
      },
      {}
    ]
  },
  {},
  [1]
);
