/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function t(i, n, o) {
  function e(a, l) {
    if (!n[a]) {
      if (!i[a]) {
        var c = "function" == typeof require && require;
        if (!l && c) return c(a, !0);
        if (r) return r(a, !0);
        var s = new Error("Cannot find module '" + a + "'");
        throw ((s.code = "MODULE_NOT_FOUND"), s);
      }
      var f = (n[a] = { exports: {} });
      i[a][0].call(
        f.exports,
        function (t) {
          return e(i[a][1][t] || t);
        },
        f,
        f.exports,
        t,
        i,
        n,
        o
      );
    }
    return n[a].exports;
  }
  for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) e(o[a]);
  return e;
})(
  {
    1: [
      function (t, i, n) {
        "use strict";
        !(function () {
          function t(t) {
            return t.availability_code;
          }
          function i(t, i) {
            return _.some(t, function (t) {
              return t.category === i;
            });
          }
          function n(t, i) {
            for (var n = 0, o = t.length; n < o; n++) if (-1 == $.inArray(t[n], i)) return !1;
            return !0;
          }
          function o(t) {
            var i = ["imdb", "hcgame", "youtube", "wiki", "pinterest"];
            return _.some(t, function (t) {
              return _.contains(i, t.catalog);
            });
          }
          function e(t, n, e, r, a) {
            var l = (function (t) {
                return _.filter(["Product", "Similar", "Coupon", "SpecialCoupon", "Hotel", "Similarhotel", "CityHotel"], function (n) {
                  return i(t, n);
                });
              })(t),
              c = o(t);
            if (_.contains(l, "Coupon")) {
              if (n) return ["Coupon"];
              if (_.contains(l, "Product")) return ["Product"];
              if (_.contains(l, "Similar")) return ["Similar"];
            } else if ("Product" == l[0] && "Similar" == l[1]) l = e ? ["Similar"] : ["Product", "Similar"];
            else if (_.contains(l, "Hotel")) {
              if (a) return ["Similarhotel"];
              if (r) return ["Hotel"];
            }
            return c && !_.contains(l, "Similar") && l.push("Similar"), l;
          }
          var r = { notification: {}, listing: {} };
          (r.notification.beforeRender = function (n) {
            var r = n.products,
              a = (e(n.products)[0], n.products[0]),
              l = n.meta.abs_version,
              c = 2 === parseInt(l),
              s = o(r),
              f = i(r, "Similarhotel"),
              u = i(r, "Hotel"),
              p = i(r, "CityHotel");
            if (f || u || p);
            else;
            var d,
              g,
              m,
              h = (parseInt(a.stars, 10) / 5) * 100,
              b = _.filter(r, function (t) {
                return "Hotel" === t.category;
              }),
              R = _.filter(r, function (t) {
                return "Similarhotel" === t.category;
              });
            if (f && u) {
              var v = !0;
              (d = R.length), (g = b.length), (a = n.products[3]);
            } else v = !1;
            return (
              b && (m = a.query_fprice > a.fprice),
              {
                product: r,
                offersNo: r.length,
                firstProduct: a,
                notification: n.notification,
                stockCheck: t(r),
                productsLength: n.products.length,
                absRebrand: c,
                isCatalog: s,
                hasSimilarHotel: f,
                hasHotel: u,
                hasCityHotel: p,
                isCombinedHotels: v,
                offersNoSimilarHotels: d,
                offersNoHotels: g,
                ratingPercent: h,
                hideElements: m,
                meta: n.meta
              }
            );
          }),
            (r.listing.beforeRender = function (n) {
              n = _.clone(n);
              var r,
                a = _.sortBy(n.products, "price"),
                l = "#offers/coupons" == location.hash,
                c = "#offers/similar" == location.hash,
                s = "#offers/hotel" == location.hash,
                f = "#offers/similarhotel" == location.hash,
                u = "true" == n.meta.coupons,
                p = i(a, "Similar"),
                d = i(a, "Similarhotel"),
                g = i(a, "Hotel"),
                m = i(a, "CityHotel"),
                h = e(n.products, l, c, s, f),
                b = h[0];
              (r = !(!g || !d)),
                (a = a.map(function (i) {
                  return (
                    ((i = _.clone(i)).stockCheck = t(i)),
                    (i.isCoupon = (function (t) {
                      return "Coupon" === t.category;
                    })(i)),
                    (i.isSpecialCoupon = (function (t) {
                      return "SpecialCoupon" === t.category;
                    })(i)),
                    (i.isSimilar = (function (t) {
                      return "Similar" === t.category;
                    })(i)),
                    (i.isHotelItem = !!(d || g || m)),
                    (i.ratingPercent = (parseInt(i.rating, 10) / 5) * 100),
                    i.isHotelItem && (i.ratingPercent = (parseInt(i.stars, 10) / 5) * 100),
                    i.isCoupon &&
                      ((i.saving = i.value),
                      (i.label = i.name),
                      (i.couponSpecialValue = (function (t) {
                        return "special" === t.value.toLowerCase();
                      })(i))),
                    i
                  );
                }));
              var R = _.filter(a, function (t) {
                  return t.category === b;
                })[0],
                v = !c;
              n.products = a;
              var y = o(a);
              if (y) a = _.sortBy(a, "sortorder");
              return (
                _.extend(n, {
                  showTabs: h.length > 1,
                  showProducts: _.contains(h, "Product"),
                  showSimilar: _.contains(h, "Similar"),
                  showCoupons: _.contains(h, "Coupon"),
                  showSpecialCoupon: _.contains(h, "SpecialCoupon"),
                  showHotel: _.contains(h, "Hotel"),
                  showSimilarHotel: _.contains(h, "Similarhotel"),
                  showCityHotel: _.contains(h, "CityHotel"),
                  initialCategory: h[0] + (y ? " isCatalog" : ""),
                  onlySimilar: v,
                  firstProduct: R,
                  hasCoupons: u,
                  isCatalog: y,
                  isCombinedHotels: r,
                  hasSimilar: p
                }),
                n
              );
            });
          var a = { notification: {}, listing: {} },
            l = !1;
          (a.notification.beforeRender = function (t) {
            var i = e(t.products, t.meta.auction),
              o = i[0],
              r = _.sortBy(
                _.filter(t.products, function (t) {
                  return _.contains(i, t.category);
                }),
                "price"
              ),
              a = _.filter(r, function (t) {
                return t.category === o;
              })[0],
              c = _.filter(r, function (t) {
                return t.category === o;
              }),
              s = t.meta.abs_version,
              f = 2 === parseInt(s);
            return (
              (l = n(["Product", "Similar"], i)),
              { firstProduct: a, offersNo: c.length, onlySimilar: "Similar" == o, absRebrand: f, showSimilarBtn: l, meta: t.meta }
            );
          }),
            (a.notification.afterRender = r.notification.afterRender),
            (a.listing.beforeRender = r.listing.beforeRender),
            (a.listing.afterRender = r.listing.afterRender);
          var c = { notification: {}, listing: {}, coupon: {}, ftu: {} };
          c.notification.beforeRender = function (t) {
            var i = (t = _.clone(t)).products,
              n = (_.sortBy(i, "rating"), e(t.product)[0]),
              o = _.first(i),
              r = t.meta.abs_version,
              a = 2 === parseInt(r);
            return { firstProduct: o, offersNo: i.length, category: n, absRebrand: a, meta: t.meta };
          };
          var s,
            f = !1;
          (c.coupon.beforeRender = function (t) {
            return (f = !0), t;
          }),
            (c.coupon.afterRender = function () {
              $(".copy-callback").on("click", function (t) {
                !(function (t) {
                  var i = document.createRange();
                  i.selectNodeContents(t);
                  var n = window.getSelection();
                  n.removeAllRanges(), n.addRange(i);
                })(document.getElementById("code")),
                  (s = (function () {
                    try {
                      s = document.execCommand("copy");
                    } catch (t) {
                      s = !1;
                    }
                    return s;
                  })()),
                  $(".copy-callback span").fadeOut("slow", function (t) {
                    $(".copy-success").delay(900).fadeIn("fast");
                  });
              }),
                s && ($(".copy-callback span").hide(), $(".copy-success").show());
            }),
            (c.ftu.beforeRender = function (t) {
              return _.extend({ singleCoupon: f }, t);
            }),
            (c.notification.afterRender = r.notification.afterRender),
            (c.listing.beforeRender = r.listing.beforeRender),
            (c.listing.afterRender = r.listing.afterRender);
          var u = { notification: {}, listing: {} };
          (u.notification.beforeRender = r.notification.beforeRender),
            (u.listing.beforeRender = r.listing.beforeRender),
            (u.listing.afterRender = r.listing.afterRender);
          var p = { notification: {}, listing: {} };
          (p.notification.beforeRender = r.notification.beforeRender),
            (p.listing.beforeRender = r.listing.beforeRender),
            (p.listing.afterRender = r.listing.afterRender);
          var d = { notification: {}, listing: {}, coupon: {}, ftu: {} };
          (d.notification.beforeRender = function (t) {
            var i,
              o,
              r = e(t.products),
              a = r[0],
              c = _.sortBy(
                _.filter(t.products, function (t) {
                  return _.contains(r, t.category);
                }),
                "price"
              ),
              s = _.filter(c, function (t) {
                return t.category === a;
              }),
              f = s[0];
            (l = n(["Product", "Similar"], r)),
              "true" == t.meta.coupons ? ((i = !0), (o = s.length)) : l ? (o = s.length) : ((i = !1), (o = c.length));
            var u = t.meta.abs_version;
            return {
              firstProduct: f,
              hasCoupons: i,
              offersNo: o,
              absRebrand: 2 === parseInt(u),
              logoAnimation: t.meta.icon_animation,
              showSimilarBtn: l,
              onlySimilar: "Similar" == a,
              meta: t.meta
            };
          }),
            (d.notification.afterRender = function () {
              $(".triggers").on("hover", function () {
                $(this).addClass("active");
              });
            }),
            (d.notification.beforeRender = d.notification.beforeRender),
            (d.notification.afterRender = r.notification.afterRender),
            (d.listing.beforeRender = r.listing.beforeRender),
            (d.listing.afterRender = r.listing.afterRender),
            ABS.run(function (t) {
              t.templates = {
                tpl_notification_0081: a.notification,
                tpl_listing_0081: a.listing,
                tpl_notification_0082: a.notification,
                tpl_listing_0082: a.listing,
                tpl_notification_009: u.notification,
                tpl_listing_009: u.listing,
                tpl_notification_003: p.notification,
                tpl_listing_003: p.listing,
                tpl_notification_0031: p.notification,
                tpl_listing_0031: p.listing,
                tpl_notification_0032: p.notification,
                tpl_listing_0032: p.listing,
                tpl_notification_full_ciuvo: a.notification,
                tpl_listing_full_ciuvo: a.listing,
                tpl_notification_full_billiger: u.notification,
                tpl_listing_full_billiger: u.listing,
                tpl_notification_full_ovisto: p.notification,
                tpl_listing_full_ovisto: p.listing,
                tpl_notification_ciuvo: a.notification,
                tpl_notification_coupons: c.notification,
                tpl_notification_coupons_and_offers: d.notification,
                tpl_notification_billiger: r.notification,
                tpl_notification_ovisto: r.notification,
                tpl_notification_splashoffer: r.notification,
                tpl_notification_utilities: r.notification,
                tpl_notification_hotels: r.notification,
                tpl_listing: r.listing,
                tpl_listing_coupons: r.listing,
                tpl_listing_coupons_and_offers: r.listing,
                tpl_listing_hotels: r.listing,
                tpl_coupon_single: c.coupon,
                tpl_ftu_coupons: c.ftu,
                tpl_ftu_coupons_and_offers: d.ftu
              };
            }),
            (function (t) {
              if (!window._fixBrokenFirefoxLinksApplied) {
                window._fixBrokenFirefoxLinksApplied = !0;
                var i = navigator.userAgent.match(/Firefox\/(\d+)/);
                !i ||
                  parseInt(i[1], 10) < 53 ||
                  (chrome &&
                    chrome.runtime &&
                    chrome.runtime.sendMessage &&
                    $(t).on("click", "a[target=_blank][href]", function (t) {
                      t.preventDefault(),
                        chrome.runtime.sendMessage({ publish: "navigate", message: { url: t.currentTarget.href, as_separate: !0 } });
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
