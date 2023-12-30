/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function t(e, i, s) {
  function o(r, n) {
    if (!i[r]) {
      if (!e[r]) {
        var f = "function" == typeof require && require;
        if (!n && f) return f(r, !0);
        if (a) return a(r, !0);
        var d = new Error("Cannot find module '" + r + "'");
        throw ((d.code = "MODULE_NOT_FOUND"), d);
      }
      var l = (i[r] = { exports: {} });
      e[r][0].call(
        l.exports,
        function (t) {
          return o(e[r][1][t] || t);
        },
        l,
        l.exports,
        t,
        e,
        i,
        s
      );
    }
    return i[r].exports;
  }
  for (var a = "function" == typeof require && require, r = 0; r < s.length; r++) o(s[r]);
  return o;
})(
  {
    1: [
      function (t, e, i) {
        "use strict";
        ABS.run(function (t) {
          t.templates = {
            tpl_notification_001: {
              beforeRender: function (t) {
                return t;
              },
              afterRender: function (t) {}
            },
            tpl_listing_001: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              },
              onShow: function (t) {
                !(function (t) {
                  var e,
                    i,
                    s,
                    o,
                    a,
                    r,
                    n,
                    f = [].slice,
                    d = $(t);
                  i =
                    (e = d.find(".offer").slice(1).css("top", "initial")).length > 2 && e.eq(0).position().top === e.eq(2).position().top
                      ? 3
                      : 2;
                  40,
                    (n = function () {
                      var t, i, o, a, r;
                      return (
                        (i = arguments[0]),
                        (a = 2 <= arguments.length ? f.call(arguments, 1) : []),
                        (t = $(e[i])),
                        (o = Math.min.apply(
                          Math,
                          (function () {
                            var i, o, n;
                            for (n = [], i = 0, o = a.length; i < o; i++) (r = a[i]), n.push(s(t, $(e[r])));
                            return n;
                          })()
                        )),
                        t.css("top", "-" + o + "px")
                      );
                    }),
                    (s = function (t, e) {
                      return t.offset().top - e.outerHeight() - e.offset().top - 40;
                    }),
                    (a = e.length % i),
                    (o = i);
                  for (; o < e.length - a; ) n(o, o - i), o++;
                  if (e.length > i && ((r = e.length - 1), 1 === a && n(r, r - 2), 2 === a)) n(r, r - 2, r - 3), n(r - 1, r - 3, r - 4);
                })(t);
              }
            },
            tpl_listing_002: {
              beforeRender: function (t) {
                return t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_notification_002: {
              beforeRender: function (t) {
                return (productsLength = t.products.length), t;
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength);
              }
            },
            tpl_best_002: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_003: {
              beforeRender: function (t) {
                return t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_notification_003: {
              beforeRender: function (t) {
                return (productsLength = t.products.length), t;
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength);
              }
            },
            tpl_best_003: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_004: {
              beforeRender: function (t) {
                return (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      $(this).hasClass("voucher") && void 0 !== hasOffers && $(this).hide();
                  }),
                  (hasOffers && void 0 !== hasOffers) || !hasCoupons || $(t).find('.offers-item:not(".voucher")').hide(),
                  $(".offers-tabs > li a").on("click", function (t) {
                    $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                      $(this).parent().addClass("offers-tabs-li-selected"),
                      t.preventDefault();
                  }),
                  $('a[href="#offers-all"]').on("click", function (e) {
                    $(t).find(".offers-item").show(), $(t).find(".voucher").show();
                  }),
                  $('a[href="#offers-coupons"]').on("click", function (e) {
                    $(t).find(".offers-item").hide(), $(t).find(".voucher").show();
                  }),
                  $('a[href="#offers-offers"]').on("click", function (e) {
                    $(t).find(".offers-item").show(), $(t).find(".voucher").hide();
                  });
              }
            },
            tpl_notification_004: {
              beforeRender: function (t) {
                return (
                  (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons),
                  t
                );
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength),
                  "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show());
              }
            },
            tpl_best_004: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_005: {
              beforeRender: function (t) {
                return t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_notification_005: {
              beforeRender: function (t) {
                return (productsLength = t.products.length), t;
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength);
              }
            },
            tpl_best_005: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_006: {
              beforeRender: function (t) {
                return (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      $(this).hasClass("voucher") && void 0 !== hasOffers && $(this).hide();
                  }),
                  (hasOffers && void 0 !== hasOffers) || !hasCoupons || $(t).find('.offers-item:not(".voucher")').hide(),
                  $(".offers-tabs > li a").on("click", function (t) {
                    $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                      $(this).parent().addClass("offers-tabs-li-selected"),
                      t.preventDefault();
                  }),
                  $('a[href="#offers-all"]').on("click", function (e) {
                    $(t).find(".offers-item").show(), $(t).find(".voucher").show();
                  }),
                  $('a[href="#offers-coupons"]').on("click", function (e) {
                    $(t).find(".offers-item").hide(), $(t).find(".voucher").show();
                  }),
                  $('a[href="#offers-offers"]').on("click", function (e) {
                    $(t).find(".offers-item").show(), $(t).find(".voucher").hide();
                  });
              }
            },
            tpl_notification_006: {
              beforeRender: function (t) {
                return (
                  (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons),
                  t
                );
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength),
                  "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show());
              }
            },
            tpl_best_006: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_007: {
              beforeRender: function (t) {
                return (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), t;
              },
              afterRender: function (t) {
                function e(t) {
                  var e = t.attr("data-type");
                  $("#listing-holder").removeClass(), $("#listing-holder").addClass("show-" + e);
                }
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      $(this).hasClass("voucher") && void 0 !== hasOffers && $(this).hide();
                  }),
                  (hasOffers && void 0 !== hasOffers) || !hasCoupons || $(t).find('.offers-item:not(".voucher")').hide();
                var i = $("#listing-holder").find(".Similar").length,
                  s = $("#listing-holder").find(".Mutation").length,
                  o = $("#listing-holder").find(".Product").length;
                i > 0 && $(".offers-tabs-li-Similar").addClass("show-tab"),
                  s > 0 && $(".offers-tabs-li-Mutation").addClass("show-tab"),
                  o > 0 && $(".offers-tabs-li-Product").addClass("show-tab"),
                  $(".offers-tabs").find(".show-tab:first").addClass("offers-tabs-li-selected"),
                  e($(".offers-tabs").find(".show-tab:first a")),
                  $(".offers-tabs > li a").on("click", function (t) {
                    $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                      $(this).parent().addClass("offers-tabs-li-selected"),
                      t.preventDefault(),
                      e($(this));
                  });
              }
            },
            tpl_notification_007: {
              beforeRender: function (t) {
                return (
                  (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons),
                  (catalog = t.products[0].catalog),
                  t
                );
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength),
                  "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show());
              }
            },
            tpl_best_007: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_008: {
              beforeRender: function (t) {
                (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), (catalog = t.products[0].catalog);
                var e = _.clone(t),
                  i =
                    (_.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    _.sortBy(e.products, "price")),
                  s = _.first(
                    _.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    1
                  ),
                  o = _.filter(e.products, function (t) {
                    return "Voucher" !== t.category;
                  });
                return (
                  s.length > 0 ? (hasCoupons = !0) : (hasCoupons = !1),
                  o.length > 0 ? (hasOffers = !0) : (hasOffers = !1),
                  console.log(i),
                  (e.products = i),
                  e
                );
              },
              afterRender: function (t) {
                function e(t) {
                  var e = t.attr("data-type");
                  $("#listing-holder").removeClass(), $("#listing-holder").addClass("show-" + e);
                }
                if (
                  ((function (t) {
                    $(t)
                      .find(".rating-bar")
                      .each(function (t, e) {
                        var i,
                          s = $(e);
                        (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                      });
                  })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      hasCoupons && ($(".dash-offers").addClass("has-coupons"), hasOffers || $(".dash-offers").addClass("only-coupons")),
                      $(".toggle-button").click(function () {
                        var t, e;
                        (t = $(this)),
                          (e = t.attr("data-type")),
                          $("#list-wrapper").removeClass(),
                          $("#list-wrapper").addClass("show-" + e);
                      });
                  }),
                  "imdb" == catalog || "hcgame" == catalog || "youtube" == catalog || "pinterest" == catalog || "googleshop" == catalog)
                )
                  $("#listing-holder").addClass("show-Similar isCatalog");
                else {
                  var i = $("#listing-holder").find(".Similar").length,
                    s = $("#listing-holder").find(".Product").length;
                  i > 0 && $(".offers-tabs-li-Similar").addClass("show-tab"),
                    s > 0 && $(".offers-tabs-li-Product").addClass("show-tab"),
                    (0 != i && 0 != s) || $(".offers-tabs-holder").hide(),
                    $(".offers-tabs").find(".show-tab:first").addClass("offers-tabs-li-selected"),
                    e($(".offers-tabs").find(".show-tab:first a")),
                    $(".offers-tabs > li a").on("click", function (t) {
                      $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                        $(this).parent().addClass("offers-tabs-li-selected"),
                        t.preventDefault(),
                        e($(this));
                    });
                }
              }
            },
            tpl_notification_008: {
              beforeRender: function (t) {
                (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons);
                var e = _.clone(t),
                  i = e.products,
                  s = _.sortBy(i, "price");
                e.products = s;
                var o = _.first(
                    _.filter(e.products, function (t) {
                      return "Product" === t.category;
                    }),
                    1
                  ),
                  a = _.first(
                    _.filter(e.products, function (t) {
                      return "Similar" === t.category;
                    }),
                    1
                  ),
                  r = _.first(
                    _.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    1
                  );
                return (
                  r.length > 0 ? (hasCoupons = !0) : (hasCoupons = !1),
                  _.isEmpty(o) && ((o = a), _.isEmpty(o) && (o = r)),
                  (voucherNo = _.filter(i, function (t) {
                    return "Voucher" === t.category;
                  }).length),
                  (offersNo = _.filter(i, function (t) {
                    return "Voucher" !== t.category;
                  }).length),
                  offersNo.length > 0 ? (hasOffers = !0) : (hasOffers = !1),
                  (itemsNo = i.length),
                  (e.notification.firstProduct = o[0]),
                  (e.notification.voucherNo = voucherNo),
                  (e.notification.offersNo = offersNo),
                  e
                );
              },
              afterRender: function (t) {
                "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show()),
                  hasCoupons &&
                    ($(".notification-coupons").addClass("has-coupons"),
                    $(".dash-offers").addClass("has-coupons"),
                    itemsNo == voucherNo && $(".has-coupons").addClass("only-coupons"));
              }
            },
            tpl_best_008: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_0081: {
              beforeRender: function (t) {
                (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), (catalog = t.products[0].catalog);
                var e = _.clone(t),
                  i =
                    (_.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    _.sortBy(e.products, "price")),
                  s = _.first(
                    _.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    1
                  ),
                  o = _.filter(e.products, function (t) {
                    return "Voucher" !== t.category;
                  });
                return (
                  s.length > 0 ? (hasCoupons = !0) : (hasCoupons = !1),
                  o.length > 0 ? (hasOffers = !0) : (hasOffers = !1),
                  console.log(i),
                  (e.products = i),
                  e
                );
              },
              afterRender: function (t) {
                function e(t) {
                  var e = t.attr("data-type");
                  $("#listing-holder").removeClass(), $("#listing-holder").addClass("show-" + e);
                }
                if (
                  ((function (t) {
                    $(t)
                      .find(".rating-bar")
                      .each(function (t, e) {
                        var i,
                          s = $(e);
                        (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                      });
                  })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      hasCoupons && ($(".dash-offers").addClass("has-coupons"), hasOffers || $(".dash-offers").addClass("only-coupons")),
                      $(".toggle-button").click(function () {
                        var t, e;
                        (t = $(this)),
                          (e = t.attr("data-type")),
                          $("#list-wrapper").removeClass(),
                          $("#list-wrapper").addClass("show-" + e);
                      });
                  }),
                  "imdb" == catalog || "hcgame" == catalog || "youtube" == catalog || "pinterest" == catalog || "googleshop" == catalog)
                )
                  $("#listing-holder").addClass("show-Similar isCatalog");
                else {
                  var i = $("#listing-holder").find(".Similar").length,
                    s = $("#listing-holder").find(".Product").length;
                  i > 0 && $(".offers-tabs-li-Similar").addClass("show-tab"),
                    s > 0 && $(".offers-tabs-li-Product").addClass("show-tab"),
                    (0 != i && 0 != s) || $(".offers-tabs-holder").hide(),
                    $(".offers-tabs").find(".show-tab:first").addClass("offers-tabs-li-selected"),
                    e($(".offers-tabs").find(".show-tab:first a")),
                    $(".offers-tabs > li a").on("click", function (t) {
                      $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                        $(this).parent().addClass("offers-tabs-li-selected"),
                        t.preventDefault(),
                        e($(this));
                    });
                }
              }
            },
            tpl_notification_0081: {
              beforeRender: function (t) {
                (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons);
                var e = _.clone(t),
                  i = e.products,
                  s = _.sortBy(i, "price");
                e.products = s;
                var o = _.first(
                    _.filter(e.products, function (t) {
                      return "Product" === t.category;
                    }),
                    1
                  ),
                  a = _.first(
                    _.filter(e.products, function (t) {
                      return "Similar" === t.category;
                    }),
                    1
                  ),
                  r = _.first(
                    _.filter(e.products, function (t) {
                      return "Voucher" === t.category;
                    }),
                    1
                  );
                return (
                  r.length > 0 ? (hasCoupons = !0) : (hasCoupons = !1),
                  _.isEmpty(o) && ((o = a), _.isEmpty(o) && (o = r)),
                  (voucherNo = _.filter(i, function (t) {
                    return "Voucher" === t.category;
                  }).length),
                  (offersNo = _.filter(i, function (t) {
                    return "Voucher" !== t.category;
                  }).length),
                  offersNo.length > 0 ? (hasOffers = !0) : (hasOffers = !1),
                  (itemsNo = i.length),
                  (e.notification.firstProduct = o[0]),
                  (e.notification.voucherNo = voucherNo),
                  (e.notification.offersNo = offersNo),
                  e
                );
              },
              afterRender: function (t) {
                "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show()),
                  hasCoupons &&
                    ($(".notification-coupons").addClass("has-coupons"),
                    $(".dash-offers").addClass("has-coupons"),
                    itemsNo == voucherNo && $(".has-coupons").addClass("only-coupons"));
              }
            },
            tpl_best_0081: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            },
            tpl_listing_009: {
              beforeRender: function (t) {
                return (hasOffers = t.products[0].hasOffers), (hasCoupons = t.products[0].hasCoupons), (catalog = t.products[0].catalog), t;
              },
              afterRender: function (t) {
                function e(t) {
                  var e = t.attr("data-type");
                  $("#listing-holder").removeClass(), $("#listing-holder").addClass("show-" + e);
                }
                if (
                  ((function (t) {
                    $(t)
                      .find(".rating-bar")
                      .each(function (t, e) {
                        var i,
                          s = $(e);
                        (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                      });
                  })(t),
                  (offersItems = $(t).find(".offers-item")),
                  offersItems.each(function (t) {
                    (item_availability = $(this).find(".availability_code").text()),
                      (item_rating = parseInt($(this).find(".item-rating").data("rating"))),
                      (item_isCoupon = $(this).find(".templateref").text()),
                      "green" == item_availability && $(this).find(".tag-stock").show(),
                      item_rating >= 4 &&
                        "green" != item_availability &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").show()),
                      "voucher" === item_isCoupon &&
                        ($(this).find(".tag-stock").hide(), $(this).find(".tag-topseller").hide(), $(this).find(".tag-coupon").show()),
                      $(this).hasClass("voucher") && void 0 !== hasOffers && $(this).hide();
                  }),
                  (hasOffers && void 0 !== hasOffers) || !hasCoupons || $(t).find('.offers-item:not(".voucher")').hide(),
                  "imdb" == catalog || "hcgame" == catalog || "youtube" == catalog || "pinterest" == catalog || "googleshop" == catalog)
                )
                  $(".offers-tabs-holder").hide(), $("#listing-holder").addClass("show-Similar isCatalog");
                else {
                  var i = $("#listing-holder").find(".Similar").length,
                    s = $("#listing-holder").find(".Mutation").length,
                    o = $("#listing-holder").find(".Product").length;
                  i > 0 && $(".offers-tabs-li-Mutation").addClass("show-tab"),
                    s > 0 && $(".offers-tabs-li-Similar").addClass("show-tab"),
                    o > 0 && $(".offers-tabs-li-Product").addClass("show-tab"),
                    $(".offers-tabs").find(".show-tab:first").addClass("offers-tabs-li-selected"),
                    e($(".offers-tabs").find(".show-tab:first a")),
                    $(".offers-tabs > li a").on("click", function (t) {
                      $(".offers-tabs li").removeClass("offers-tabs-li-selected"),
                        $(this).parent().addClass("offers-tabs-li-selected"),
                        t.preventDefault(),
                        e($(this));
                    }),
                    $(".has-coupons .offers-more").click(function () {
                      $(".has-coupons .offers-more").removeClass("active-list"), $(this).addClass("active-list");
                    });
                }
              }
            },
            tpl_notification_009: {
              beforeRender: function (t) {
                return (
                  (shopRating = parseInt(t.products[0].rating)),
                  (productAvailability = t.products[0].availability_code),
                  (productsLength = t.products.length),
                  (hasOffers = t.products[0].hasOffers),
                  (hasCoupons = t.products[0].hasCoupons),
                  t
                );
              },
              afterRender: function (t) {
                $(t).find(".products-length").text(productsLength),
                  "green" == productAvailability && ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").show()),
                  shopRating >= 4 &&
                    "green" != productAvailability &&
                    ($(t).find(".label-stock-seller").show(), $(t).find(".tag-stock").hide(), $(t).find(".tag-topseller").show()),
                  hasCoupons && ($(".coupons-trigger").addClass("show-coupons"), $(".with-coupons").addClass("has-coupons"));
              }
            },
            tpl_best_009: {
              beforeRender: function (t) {
                return (best = t.products[0]), best && (best.best = !0), t;
              },
              afterRender: function (t) {
                !(function (t) {
                  $(t)
                    .find(".rating-bar")
                    .each(function (t, e) {
                      var i,
                        s = $(e);
                      (i = (parseFloat(s.data("rating")) / 5) * 100), s.find(".offer-affiliate-rating-slider").css("width", i + "%");
                    });
                })(t);
              }
            }
          };
        });
      },
      {}
    ]
  },
  {},
  [1]
);
