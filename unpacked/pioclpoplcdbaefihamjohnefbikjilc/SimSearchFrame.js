/*! For license information please see SimSearchFrame.js.LICENSE.txt */
(function () {
  var __webpack_modules__ = {
      18472: function (e, t, s) {
        s(24527).Thrift,
          (e.exports.nI5 = "^[A-Za-z]+/[A-Za-z0-9._+-]+$"),
          (e.exports.emj = "image/gif"),
          (e.exports.aP_ = "image/jpeg"),
          (e.exports.PDC = "image/png"),
          (e.exports.uOi = "application/pdf"),
          (e.exports.xGc = "application/octet-stream");
      },
      21924: function (e, t, s) {
        "use strict";
        var i = s(40210),
          n = s(55559),
          a = n(i("String.prototype.indexOf"));
        e.exports = function (e, t) {
          var s = i(e, !!t);
          return "function" == typeof s && a(e, ".prototype.") > -1 ? n(s) : s;
        };
      },
      55559: function (e, t, s) {
        "use strict";
        var i = s(58612),
          n = s(40210),
          a = n("%Function.prototype.apply%"),
          o = n("%Function.prototype.call%"),
          r = n("%Reflect.apply%", !0) || i.call(o, a),
          p = n("%Object.getOwnPropertyDescriptor%", !0),
          u = n("%Object.defineProperty%", !0),
          y = n("%Math.max%");
        if (u)
          try {
            u({}, "a", { value: 1 });
          } catch (e) {
            u = null;
          }
        e.exports = function (e) {
          var t = r(i, o, arguments);
          return p && u && p(t, "length").configurable && u(t, "length", { value: 1 + y(0, e.length - (arguments.length - 1)) }), t;
        };
        var c = function () {
          return r(i, a, arguments);
        };
        u ? u(e.exports, "apply", { value: c }) : (e.exports.apply = c);
      },
      50026: function (e, t, s) {
        e.exports = {
          Admin: s(47411),
          AuthenticationErrors: s(59754),
          AuthenticationService: s(64247),
          AuthenticationTypes: s(53109),
          BusinessService: s(2487),
          CommerceInternal: s(81343),
          CommunicationEngine: s(1380),
          CommunicationEngineClient: s(72319),
          CommunicationEngineClientV2: s(34898),
          CommunicationEngineTypes: s(22024),
          CommunicationEngineTypesV2: s(32602),
          ExperimentsService: s(15448),
          Errors: s(52965),
          Limits: s(48412),
          MembershipService: s(60136),
          MessageStore: s(27909),
          NoteStore: s(35137),
          SpaceService: s(88606),
          TeamSearch: s(41511),
          Types: s(77915),
          UserStore: s(60570),
          Utility: s(2401)
        };
      },
      47411: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(81343),
          a = s(52965);
        s(77915),
          s(2401),
          (e.exports.BetaFeatureStatusInternal = { OPEN: 0, ACTIVE_FOR_ALL_USERS: 50, CLOSED: 100 }),
          (e.exports.BetaFeatureUserTypeInternal = { PERSONAL: 1, BUSINESS: 2 }),
          (e.exports.CreateBusinessDiscountDealRequest = i.Struct.define("CreateBusinessDiscountDealRequest", {
            1: { alias: "creatorId", type: i.Type.I32 },
            2: { alias: "businessId", type: i.Type.I32 },
            3: { alias: "unitPrice", type: i.Type.I32 },
            4: { alias: "startDate", type: i.Type.I64 },
            5: { alias: "endDate", type: i.Type.I64 },
            6: { alias: "seatCount", type: i.Type.I32 }
          })),
          (e.exports.UpdateBusinessDiscountDealRequest = i.Struct.define("UpdateBusinessDiscountDealRequest", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "unitPrice", type: i.Type.I32 },
            3: { alias: "currencyCode", type: i.Type.STRING },
            4: { alias: "startDate", type: i.Type.I64 },
            5: { alias: "endDate", type: i.Type.I64 },
            6: { alias: "seatCount", type: i.Type.I32 }
          })),
          (e.exports.BusinessDiscountDeal = i.Struct.define("BusinessDiscountDeal", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "creatorId", type: i.Type.I32 },
            3: { alias: "created", type: i.Type.I64 },
            4: { alias: "businessId", type: i.Type.I32 },
            5: { alias: "unitPrice", type: i.Type.I32 },
            6: { alias: "currencyCode", type: i.Type.STRING },
            7: { alias: "startDate", type: i.Type.I64 },
            8: { alias: "endDate", type: i.Type.I64 },
            9: { alias: "seatCount", type: i.Type.I32 }
          })),
          (e.exports.CreateBusinessDiscountOfferRequest = i.Struct.define("CreateBusinessDiscountOfferRequest", {
            1: { alias: "creatorId", type: i.Type.I32 },
            2: { alias: "unitPrice", type: i.Type.I32 },
            3: { alias: "currencyCode", type: i.Type.STRING },
            4: { alias: "email", type: i.Type.STRING },
            5: { alias: "businessName", type: i.Type.STRING },
            6: { alias: "seatCount", type: i.Type.I32 },
            7: { alias: "expiry", type: i.Type.I64 }
          })),
          (e.exports.UpdateBusinessDiscountOfferRequest = i.Struct.define("UpdateBusinessDiscountOfferRequest", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "unitPrice", type: i.Type.I32 },
            3: { alias: "currencyCode", type: i.Type.STRING },
            4: { alias: "email", type: i.Type.STRING },
            5: { alias: "businessName", type: i.Type.STRING },
            6: { alias: "seatCount", type: i.Type.I32 },
            7: { alias: "expiry", type: i.Type.I64 }
          })),
          (e.exports.BusinessDiscountOffer = i.Struct.define("BusinessDiscountOffer", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "creatorId", type: i.Type.I32 },
            3: { alias: "created", type: i.Type.I64 },
            4: { alias: "unitPrice", type: i.Type.I32 },
            5: { alias: "currencyCode", type: i.Type.STRING },
            6: { alias: "email", type: i.Type.STRING },
            7: { alias: "businessName", type: i.Type.STRING },
            8: { alias: "seatCount", type: i.Type.I32 },
            9: { alias: "expiry", type: i.Type.I64 },
            10: { alias: "dealId", type: i.Type.I32 }
          })),
          (e.exports.BackToSchoolEmailLookUpResult = i.Struct.define("BackToSchoolEmailLookUpResult", {
            1: { alias: "available", type: i.Type.BOOL },
            2: { alias: "whitelisted", type: i.Type.BOOL },
            3: { alias: "userId", type: i.Type.I32 },
            4: { alias: "created", type: i.Type.I64 }
          })),
          (e.exports.CreateIncentiveRequest = i.Struct.define("CreateIncentiveRequest", {
            1: { alias: "incentiveToCreate", type: i.Type.STRUCT, def: n.Incentive }
          })),
          (e.exports.UpdateIncentiveRequest = i.Struct.define("UpdateIncentiveRequest", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "enabled", type: i.Type.BOOL },
            3: { alias: "startDate", type: i.Type.I64 },
            4: { alias: "unsetStartDate", type: i.Type.BOOL },
            5: { alias: "endDate", type: i.Type.I64 },
            6: { alias: "unsetEndDate", type: i.Type.BOOL },
            7: { alias: "validationType", type: i.Type.I32 },
            8: { alias: "unsetValidationType", type: i.Type.BOOL }
          })),
          (e.exports.BetaFeatureInternal = i.Struct.define("BetaFeatureInternal", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "featureKey", type: i.Type.STRING },
            3: { alias: "name", type: i.Type.STRING },
            4: { alias: "featureDescription", type: i.Type.STRING },
            5: { alias: "help", type: i.Type.STRING },
            6: { alias: "requireWaitlist", type: i.Type.BOOL },
            7: { alias: "teamSizeMin", type: i.Type.I32 },
            8: { alias: "teamSizeMax", type: i.Type.I32 },
            9: { alias: "startDate", type: i.Type.I64 },
            10: { alias: "endDate", type: i.Type.I64 },
            11: { alias: "countryCodes", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            12: { alias: "whitelistedBusinessIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            13: { alias: "blacklistedBusinessIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            14: { alias: "status", type: i.Type.I32 },
            15: { alias: "businessOnly", type: i.Type.BOOL },
            16: { alias: "notificationsEnabled", type: i.Type.BOOL },
            17: { alias: "premiumOnly", type: i.Type.BOOL },
            18: { alias: "userType", type: i.Type.I32 }
          })),
          (e.exports.BetaFeatureEnrollmentInternal = i.Struct.define("BetaFeatureEnrollmentInternal", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "featureGuid", type: i.Type.STRING },
            3: { alias: "featureKey", type: i.Type.STRING },
            4: { alias: "userId", type: i.Type.I32 },
            5: { alias: "businessId", type: i.Type.I32 },
            6: { alias: "submitterUserId", type: i.Type.I32 },
            7: { alias: "status", type: i.Type.I32 },
            8: { alias: "statusDate", type: i.Type.I64 },
            9: { alias: "enrollerName", type: i.Type.STRING },
            10: { alias: "disabledDate", type: i.Type.I64 },
            11: { alias: "notificationsEnabled", type: i.Type.BOOL }
          })),
          (e.exports.EnrollAndEnableIntoBetaFeatureResult = i.Struct.define("EnrollAndEnableIntoBetaFeatureResult", {
            1: { alias: "succeededIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            2: { alias: "failedIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) }
          })),
          (e.exports.ListEnrollmentsForBetaFeatureResult = i.Struct.define("ListEnrollmentsForBetaFeatureResult", {
            1: { alias: "enrollments", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeatureEnrollmentInternal) },
            2: { alias: "firstResult", type: i.Type.I32 },
            3: { alias: "maxResults", type: i.Type.I32 },
            4: { alias: "totalResults", type: i.Type.I32 }
          })),
          (e.exports.BlacklistedDomain = i.Struct.define("BlacklistedDomain", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "domain", type: i.Type.STRING },
            3: { alias: "isActive", type: i.Type.BOOL },
            4: { alias: "comment", type: i.Type.STRING }
          })),
          (e.exports.AddBlacklistedDomainsResult = i.Struct.define("AddBlacklistedDomainsResult", {
            1: { alias: "succeededDomains", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            2: { alias: "failedDomains", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.ListBlacklistedDomainsResult = i.Struct.define("ListBlacklistedDomainsResult", {
            1: { alias: "domains", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BlacklistedDomain) },
            2: { alias: "firstResult", type: i.Type.I32 },
            3: { alias: "maxResults", type: i.Type.I32 },
            4: { alias: "totalResults", type: i.Type.I32 }
          })),
          (e.exports.BlacklistedDomains = i.Struct.define("BlacklistedDomains", {
            1: { alias: "domains", type: i.Type.SET, def: i.Set.define(i.Type.STRING) }
          }));
        var o = (e.exports.AdminService = {});
        function r(e) {
          (this.output = e), (this.seqid = 0);
        }
        function p(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), o))
            e[n] && this.processor.addMethod(o[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (o.createBusinessDiscountDeal = i.Method.define({
          alias: "createBusinessDiscountDeal",
          args: i.Struct.define("createBusinessDiscountDealArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "request", type: i.Type.STRUCT, def: e.exports.CreateBusinessDiscountDealRequest, index: 1 }
          }),
          result: i.Struct.define("createBusinessDiscountDealResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountDeal },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
            3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
          })
        })),
          (o.getBusinessDiscountDeal = i.Method.define({
            alias: "getBusinessDiscountDeal",
            args: i.Struct.define("getBusinessDiscountDealArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "dealId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("getBusinessDiscountDealResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountDeal },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.updateBusinessDiscountDeal = i.Method.define({
            alias: "updateBusinessDiscountDeal",
            args: i.Struct.define("updateBusinessDiscountDealArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.UpdateBusinessDiscountDealRequest, index: 1 }
            }),
            result: i.Struct.define("updateBusinessDiscountDealResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountDeal },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.cancelBusinessDiscountDeal = i.Method.define({
            alias: "cancelBusinessDiscountDeal",
            args: i.Struct.define("cancelBusinessDiscountDealArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "dealId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("cancelBusinessDiscountDealResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.endBusinessDiscountDeal = i.Method.define({
            alias: "endBusinessDiscountDeal",
            args: i.Struct.define("endBusinessDiscountDealArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "dealId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("endBusinessDiscountDealResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountDeal },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.listAllBusinessDiscountDeals = i.Method.define({
            alias: "listAllBusinessDiscountDeals",
            args: i.Struct.define("listAllBusinessDiscountDealsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listAllBusinessDiscountDealsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BusinessDiscountDeal) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listDiscountDealsForBusiness = i.Method.define({
            alias: "listDiscountDealsForBusiness",
            args: i.Struct.define("listDiscountDealsForBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("listDiscountDealsForBusinessResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BusinessDiscountDeal) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.createBusinessDiscountOffer = i.Method.define({
            alias: "createBusinessDiscountOffer",
            args: i.Struct.define("createBusinessDiscountOfferArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.CreateBusinessDiscountOfferRequest, index: 1 }
            }),
            result: i.Struct.define("createBusinessDiscountOfferResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountOffer },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.updateBusinessDiscountOffer = i.Method.define({
            alias: "updateBusinessDiscountOffer",
            args: i.Struct.define("updateBusinessDiscountOfferArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.UpdateBusinessDiscountOfferRequest, index: 1 }
            }),
            result: i.Struct.define("updateBusinessDiscountOfferResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessDiscountOffer },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.cancelBusinessDiscountOffer = i.Method.define({
            alias: "cancelBusinessDiscountOffer",
            args: i.Struct.define("cancelBusinessDiscountOfferArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "offerId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("cancelBusinessDiscountOfferResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listAllBusinessDiscountOffers = i.Method.define({
            alias: "listAllBusinessDiscountOffers",
            args: i.Struct.define("listAllBusinessDiscountOffersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listAllBusinessDiscountOffersResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BusinessDiscountOffer) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.setupECCBusiness = i.Method.define({
            alias: "setupECCBusiness",
            args: i.Struct.define("setupECCBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("setupECCBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.lookUpBackToSchoolEmail = i.Method.define({
            alias: "lookUpBackToSchoolEmail",
            args: i.Struct.define("lookUpBackToSchoolEmailArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "email", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("lookUpBackToSchoolEmailResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BackToSchoolEmailLookUpResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.createIncentive = i.Method.define({
            alias: "createIncentive",
            args: i.Struct.define("createIncentiveArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "createIncentiveRequest", type: i.Type.STRUCT, def: e.exports.CreateIncentiveRequest, index: 1 }
            }),
            result: i.Struct.define("createIncentiveResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Incentive },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.updateIncentive = i.Method.define({
            alias: "updateIncentive",
            args: i.Struct.define("updateIncentiveArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "updateIncentiveRequest", type: i.Type.STRUCT, def: e.exports.UpdateIncentiveRequest, index: 1 }
            }),
            result: i.Struct.define("updateIncentiveResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Incentive },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.deactivateBusinessUser = i.Method.define({
            alias: "deactivateBusinessUser",
            args: i.Struct.define("deactivateBusinessUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("deactivateBusinessUserResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.deactivateBusinessUserEvenLastAdmin = i.Method.define({
            alias: "deactivateBusinessUserEvenLastAdmin",
            args: i.Struct.define("deactivateBusinessUserEvenLastAdminArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("deactivateBusinessUserEvenLastAdminResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.reactivateBusinessUser = i.Method.define({
            alias: "reactivateBusinessUser",
            args: i.Struct.define("reactivateBusinessUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("reactivateBusinessUserResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listBetaFeatures = i.Method.define({
            alias: "listBetaFeatures",
            args: i.Struct.define("listBetaFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeatureInternal) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.updateBetaFeature = i.Method.define({
            alias: "updateBetaFeature",
            args: i.Struct.define("updateBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "feature", type: i.Type.STRUCT, def: e.exports.BetaFeatureInternal, index: 1 }
            }),
            result: i.Struct.define("updateBetaFeatureResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listEnrollmentsForBetaFeature = i.Method.define({
            alias: "listEnrollmentsForBetaFeature",
            args: i.Struct.define("listEnrollmentsForBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "firstResult", type: i.Type.I32, index: 2 },
              4: { alias: "maxResults", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("listEnrollmentsForBetaFeatureResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ListEnrollmentsForBetaFeatureResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listEnrollmentsForBetaFeatureAndStatus = i.Method.define({
            alias: "listEnrollmentsForBetaFeatureAndStatus",
            args: i.Struct.define("listEnrollmentsForBetaFeatureAndStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "status", type: i.Type.I32, index: 2 },
              4: { alias: "firstResult", type: i.Type.I32, index: 3 },
              5: { alias: "maxResults", type: i.Type.I32, index: 4 }
            }),
            result: i.Struct.define("listEnrollmentsForBetaFeatureAndStatusResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ListEnrollmentsForBetaFeatureResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.approveBetaFeatureEnrollment = i.Method.define({
            alias: "approveBetaFeatureEnrollment",
            args: i.Struct.define("approveBetaFeatureEnrollmentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "enrollmentGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("approveBetaFeatureEnrollmentResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.enrollAndEnableBusinessesIntoBetaFeature = i.Method.define({
            alias: "enrollAndEnableBusinessesIntoBetaFeature",
            args: i.Struct.define("enrollAndEnableBusinessesIntoBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 },
              3: { alias: "businessIds", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 2 }
            }),
            result: i.Struct.define("enrollAndEnableBusinessesIntoBetaFeatureResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.EnrollAndEnableIntoBetaFeatureResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.enrollAndEnableUsersIntoBetaFeature = i.Method.define({
            alias: "enrollAndEnableUsersIntoBetaFeature",
            args: i.Struct.define("enrollAndEnableUsersIntoBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 },
              3: { alias: "userIds", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 2 }
            }),
            result: i.Struct.define("enrollAndEnableUsersIntoBetaFeatureResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.EnrollAndEnableIntoBetaFeatureResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.listBlacklistedDomains = i.Method.define({
            alias: "listBlacklistedDomains",
            args: i.Struct.define("listBlacklistedDomainsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "firstResult", type: i.Type.I32, index: 1 },
              3: { alias: "maxResults", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("listBlacklistedDomainsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ListBlacklistedDomainsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.addOrUpdateBlacklistedDomain = i.Method.define({
            alias: "addOrUpdateBlacklistedDomain",
            args: i.Struct.define("addOrUpdateBlacklistedDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRUCT, def: e.exports.BlacklistedDomain, index: 1 }
            }),
            result: i.Struct.define("addOrUpdateBlacklistedDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.deleteBlacklistedDomain = i.Method.define({
            alias: "deleteBlacklistedDomain",
            args: i.Struct.define("deleteBlacklistedDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domainGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("deleteBlacklistedDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.addBlacklistedDomains = i.Method.define({
            alias: "addBlacklistedDomains",
            args: i.Struct.define("addBlacklistedDomainsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              3: { alias: "domains", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("addBlacklistedDomainsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AddBlacklistedDomainsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.prototype.createBusinessDiscountDeal = function (e, t, s) {
            var i = o.createBusinessDiscountDeal,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.getBusinessDiscountDeal = function (e, t, s) {
            var i = o.getBusinessDiscountDeal,
              n = new i.args();
            (n.authenticationToken = e), (n.dealId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.updateBusinessDiscountDeal = function (e, t, s) {
            var i = o.updateBusinessDiscountDeal,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.cancelBusinessDiscountDeal = function (e, t, s) {
            var i = o.cancelBusinessDiscountDeal,
              n = new i.args();
            (n.authenticationToken = e), (n.dealId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.endBusinessDiscountDeal = function (e, t, s) {
            var i = o.endBusinessDiscountDeal,
              n = new i.args();
            (n.authenticationToken = e), (n.dealId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.listAllBusinessDiscountDeals = function (e, t) {
            var s = o.listAllBusinessDiscountDeals,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.listDiscountDealsForBusiness = function (e, t, s) {
            var i = o.listDiscountDealsForBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.businessId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.createBusinessDiscountOffer = function (e, t, s) {
            var i = o.createBusinessDiscountOffer,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.updateBusinessDiscountOffer = function (e, t, s) {
            var i = o.updateBusinessDiscountOffer,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.cancelBusinessDiscountOffer = function (e, t, s) {
            var i = o.cancelBusinessDiscountOffer,
              n = new i.args();
            (n.authenticationToken = e), (n.offerId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.listAllBusinessDiscountOffers = function (e, t) {
            var s = o.listAllBusinessDiscountOffers,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.setupECCBusiness = function (e, t, s) {
            var i = o.setupECCBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.businessId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.lookUpBackToSchoolEmail = function (e, t, s) {
            var i = o.lookUpBackToSchoolEmail,
              n = new i.args();
            (n.authenticationToken = e), (n.email = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.createIncentive = function (e, t, s) {
            var i = o.createIncentive,
              n = new i.args();
            (n.authenticationToken = e), (n.createIncentiveRequest = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.updateIncentive = function (e, t, s) {
            var i = o.updateIncentive,
              n = new i.args();
            (n.authenticationToken = e), (n.updateIncentiveRequest = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.deactivateBusinessUser = function (e, t, s) {
            var i = o.deactivateBusinessUser,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.deactivateBusinessUserEvenLastAdmin = function (e, t, s) {
            var i = o.deactivateBusinessUserEvenLastAdmin,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.reactivateBusinessUser = function (e, t, s) {
            var i = o.reactivateBusinessUser,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.listBetaFeatures = function (e, t) {
            var s = o.listBetaFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.updateBetaFeature = function (e, t, s) {
            var i = o.updateBetaFeature,
              n = new i.args();
            (n.authenticationToken = e), (n.feature = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.listEnrollmentsForBetaFeature = function (e, t, s, i, n) {
            var a = o.listEnrollmentsForBetaFeature,
              r = new a.args();
            (r.authenticationToken = e),
              (r.featureGuid = t),
              (r.firstResult = s),
              (r.maxResults = i),
              a.sendRequest(this.output, this.seqid++, r, n);
          }),
          (r.prototype.listEnrollmentsForBetaFeatureAndStatus = function (e, t, s, i, n, a) {
            var r = o.listEnrollmentsForBetaFeatureAndStatus,
              p = new r.args();
            (p.authenticationToken = e),
              (p.featureGuid = t),
              (p.status = s),
              (p.firstResult = i),
              (p.maxResults = n),
              r.sendRequest(this.output, this.seqid++, p, a);
          }),
          (r.prototype.approveBetaFeatureEnrollment = function (e, t, s) {
            var i = o.approveBetaFeatureEnrollment,
              n = new i.args();
            (n.authenticationToken = e), (n.enrollmentGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.enrollAndEnableBusinessesIntoBetaFeature = function (e, t, s, i) {
            var n = o.enrollAndEnableBusinessesIntoBetaFeature,
              a = new n.args();
            (a.authenticationToken = e), (a.featureKey = t), (a.businessIds = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.enrollAndEnableUsersIntoBetaFeature = function (e, t, s, i) {
            var n = o.enrollAndEnableUsersIntoBetaFeature,
              a = new n.args();
            (a.authenticationToken = e), (a.featureKey = t), (a.userIds = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.listBlacklistedDomains = function (e, t, s, i) {
            var n = o.listBlacklistedDomains,
              a = new n.args();
            (a.authenticationToken = e), (a.firstResult = t), (a.maxResults = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.addOrUpdateBlacklistedDomain = function (e, t, s) {
            var i = o.addOrUpdateBlacklistedDomain,
              n = new i.args();
            (n.authenticationToken = e), (n.domain = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.deleteBlacklistedDomain = function (e, t, s) {
            var i = o.deleteBlacklistedDomain,
              n = new i.args();
            (n.authenticationToken = e), (n.domainGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.addBlacklistedDomains = function (e, t, s) {
            var i = o.addBlacklistedDomains,
              n = new i.args();
            (n.authenticationToken = e), (n.domains = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.AdminService.Client = r),
          (p.prototype.start = function () {
            this.stransport.listen();
          }),
          (p.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.AdminService.Server = p);
      },
      59754: function (e, t, s) {
        var i = s(24527).Thrift;
        (e.exports.AuthenticationErrorCode = {
          UNKNOWN: 1,
          BAD_OPENID_FORMAT: 2,
          INTERNAL_ERROR: 3,
          DATA_REQUIRED: 4,
          OPENID_EXPIRED: 5,
          UNSUPPORTED_OPERATION: 6,
          INVALID_ARGUMENT: 7,
          INVALID_AUTH: 8,
          OPENID_ALREADY_TAKEN: 9,
          USER_NOT_REGISTERED: 10,
          USER_NOT_ASSOCIATED: 11,
          USER_ALREADY_ASSOCIATED: 12,
          EMAIL_ASSOCIATED_DIFFERENT_UID: 13
        }),
          (e.exports.UserNotFoundException = i.Exception.define("UserNotFoundException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "message", type: i.Type.STRING }
          })),
          (e.exports.SystemException = i.Exception.define("SystemException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "message", type: i.Type.STRING }
          })),
          (e.exports.BadOpenIDException = i.Exception.define("BadOpenIDException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "message", type: i.Type.STRING }
          })),
          (e.exports.UserException = i.Exception.define("UserException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "message", type: i.Type.STRING }
          }));
      },
      64247: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(59754),
          a = s(53109),
          o = s(52965),
          r = s(60570);
        (e.exports.AuthenticationCredentialType = {
          USERNAME_PASSWORD: 0,
          OPEN_ID: 1,
          SSO_LOGIN_TOKEN: 2,
          EXCHANGE_TOKEN: 3,
          NAP_USERNAME_PASSWORD: 4,
          NAP_OAUTH: 5,
          NAP_SAML: 6,
          NAP_JWT: 7,
          NAP_REFRESH: 8
        }),
          (e.exports.AuthenticationCredential = i.Struct.define("AuthenticationCredential", {
            1: { alias: "type", type: i.Type.I32 },
            2: { alias: "usernameOrEmail", type: i.Type.STRING },
            3: { alias: "password", type: i.Type.STRING },
            4: { alias: "openIdCredential", type: i.Type.STRUCT, def: a.OpenIdCredential },
            5: { alias: "ssoLoginToken", type: i.Type.STRING },
            6: { alias: "exchangeToken", type: i.Type.STRING },
            7: { alias: "uid", type: i.Type.STRING },
            8: { alias: "provider", type: i.Type.STRING },
            9: { alias: "authenticationToken", type: i.Type.STRING },
            10: { alias: "fullName", type: i.Type.STRING }
          })),
          (e.exports.InternalAuthenticationParams = i.Struct.define("InternalAuthenticationParams", {
            1: { alias: "credential", type: i.Type.STRUCT, def: e.exports.AuthenticationCredential },
            2: { alias: "consumerKey", type: i.Type.STRING },
            3: { alias: "consumerSecret", type: i.Type.STRING },
            4: { alias: "authLongSession", type: i.Type.BOOL },
            5: { alias: "deviceId", type: i.Type.STRING },
            6: { alias: "deviceDescription", type: i.Type.STRING },
            7: { alias: "twoFactorSupported", type: i.Type.BOOL },
            8: { alias: "skipSecondFactor", type: i.Type.BOOL },
            9: { alias: "businessOnlySupported", type: i.Type.BOOL }
          }));
        var p = (e.exports.AuthenticationService = {});
        function u(e) {
          (this.output = e), (this.seqid = 0);
        }
        function y(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[n] && this.processor.addMethod(p[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (p.authenticate = i.Method.define({
          alias: "authenticate",
          args: i.Struct.define("authenticateArgs", {
            1: { alias: "params", type: i.Type.STRUCT, def: e.exports.InternalAuthenticationParams, index: 0 }
          }),
          result: i.Struct.define("authenticateResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: r.AuthenticationResult },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: o.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: o.EDAMSystemException }
          })
        })),
          (p.authenticateOpenID = i.Method.define({
            alias: "authenticateOpenID",
            args: i.Struct.define("authenticateOpenIDArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: a.OpenIdCredential, index: 0 }
            }),
            result: i.Struct.define("authenticateOpenIDResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AuthenticationRequestResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException },
              3: { alias: "formatException", type: i.Type.EXCEPTION, def: n.BadOpenIDException }
            })
          })),
          (p.validateUserForOAuth = i.Method.define({
            alias: "validateUserForOAuth",
            args: i.Struct.define("validateUserForOAuthArgs", {
              1: { alias: "uid", type: i.Type.STRING, index: 0 },
              2: { alias: "email", type: i.Type.STRING, index: 1 },
              3: { alias: "provider", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("validateUserForOAuthResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AuthenticationRequestResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException }
            })
          })),
          (p.registerUser = i.Method.define({
            alias: "registerUser",
            args: i.Struct.define("registerUserArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: a.PlainCredential, index: 0 }
            }),
            result: i.Struct.define("registerUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.RegistrationRequestResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException }
            })
          })),
          (p.validateForRegistration = i.Method.define({
            alias: "validateForRegistration",
            args: i.Struct.define("validateForRegistrationArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: a.OpenIdCredential, index: 0 }
            }),
            result: i.Struct.define("validateForRegistrationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.RegistrationRequestResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: n.BadOpenIDException }
            })
          })),
          (p.associateOpenIDWithUser = i.Method.define({
            alias: "associateOpenIDWithUser",
            args: i.Struct.define("associateOpenIDWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: a.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("associateOpenIDWithUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: n.BadOpenIDException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserException }
            })
          })),
          (p.dissociateOpenIDFromUser = i.Method.define({
            alias: "dissociateOpenIDFromUser",
            args: i.Struct.define("dissociateOpenIDFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: a.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("dissociateOpenIDFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: n.BadOpenIDException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserException }
            })
          })),
          (p.updatePassword = i.Method.define({
            alias: "updatePassword",
            args: i.Struct.define("updatePasswordArgs", {
              1: { alias: "userId", type: i.Type.I32, index: 0 },
              2: { alias: "oldPassword", type: i.Type.STRING, index: 1 },
              3: { alias: "newPassword", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updatePasswordResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException }
            })
          })),
          (p.dissociateAllOpenIDsFromUser = i.Method.define({
            alias: "dissociateAllOpenIDsFromUser",
            args: i.Struct.define("dissociateAllOpenIDsFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("dissociateAllOpenIDsFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserException }
            })
          })),
          (p.monolithAuthTokenFromNAPToken = i.Method.define({
            alias: "monolithAuthTokenFromNAPToken",
            args: i.Struct.define("monolithAuthTokenFromNAPTokenArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: e.exports.AuthenticationCredential, index: 0 }
            }),
            result: i.Struct.define("monolithAuthTokenFromNAPTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.SystemException }
            })
          })),
          (u.prototype.authenticate = function (e, t) {
            var s = p.authenticate,
              i = new s.args();
            (i.params = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.authenticateOpenID = function (e, t) {
            var s = p.authenticateOpenID,
              i = new s.args();
            (i.credential = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.validateUserForOAuth = function (e, t, s, i) {
            var n = p.validateUserForOAuth,
              a = new n.args();
            (a.uid = e), (a.email = t), (a.provider = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.registerUser = function (e, t) {
            var s = p.registerUser,
              i = new s.args();
            (i.credential = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.validateForRegistration = function (e, t) {
            var s = p.validateForRegistration,
              i = new s.args();
            (i.credential = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.associateOpenIDWithUser = function (e, t, s) {
            var i = p.associateOpenIDWithUser,
              n = new i.args();
            (n.authenticationToken = e), (n.credential = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.dissociateOpenIDFromUser = function (e, t, s) {
            var i = p.dissociateOpenIDFromUser,
              n = new i.args();
            (n.authenticationToken = e), (n.credential = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updatePassword = function (e, t, s, i) {
            var n = p.updatePassword,
              a = new n.args();
            (a.userId = e), (a.oldPassword = t), (a.newPassword = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.dissociateAllOpenIDsFromUser = function (e, t) {
            var s = p.dissociateAllOpenIDsFromUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.monolithAuthTokenFromNAPToken = function (e, t) {
            var s = p.monolithAuthTokenFromNAPToken,
              i = new s.args();
            (i.credential = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.AuthenticationService.Client = u),
          (y.prototype.start = function () {
            this.stransport.listen();
          }),
          (y.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.AuthenticationService.Server = y);
      },
      53109: function (e, t, s) {
        var i = s(24527).Thrift;
        (e.exports.Result = { SUCCESS: 1, UNKNOWN_OPENID: 2, USER_EXISTS: 3, OPENID_CONFLICT: 4 }),
          (e.exports.ServiceProvider = { GOOGLE: 0, FACEBOOK: 1, APPLE: 2 }),
          (e.exports.ENClientType = { LOCAL_WEB: 1, LOCAL_CLIPPER: 2, REMOTE: 3, LEGACY: 4, UNKNOWN: 5 }),
          (e.exports.OpenIdCredential = i.Struct.define("OpenIdCredential", {
            1: { alias: "tokenPayload", type: i.Type.STRING },
            2: { alias: "serviceProvider", type: i.Type.I32 }
          })),
          (e.exports.PlainCredential = i.Struct.define("PlainCredential", {
            1: { alias: "userId", type: i.Type.I32 },
            2: { alias: "password", type: i.Type.STRING }
          })),
          (e.exports.AuthenticationRequestResult = i.Struct.define("AuthenticationRequestResult", {
            1: { alias: "userId", type: i.Type.I32 },
            2: { alias: "userEmail", type: i.Type.STRING },
            3: { alias: "result", type: i.Type.I32 }
          })),
          (e.exports.RegistrationRequestResult = i.Struct.define("RegistrationRequestResult", {
            1: { alias: "refreshToken", type: i.Type.STRING },
            2: { alias: "userEmail", type: i.Type.STRING },
            3: { alias: "result", type: i.Type.I32 },
            4: { alias: "name", type: i.Type.STRING }
          })),
          (e.exports.TwoFactorEnforcementData = i.Struct.define("TwoFactorEnforcementData", {
            1: { alias: "userId", type: i.Type.I32 },
            2: { alias: "usernameOrEmail", type: i.Type.STRING },
            3: { alias: "timezone", type: i.Type.STRING },
            4: { alias: "deviceId", type: i.Type.STRING },
            5: { alias: "verificationToken", type: i.Type.STRING },
            6: { alias: "tokenExpiration", type: i.Type.I64 },
            7: { alias: "longSessionToken", type: i.Type.STRING },
            8: { alias: "ipAddress", type: i.Type.STRING },
            9: { alias: "client", type: i.Type.STRING },
            10: { alias: "locale", type: i.Type.STRING },
            11: { alias: "attemptTime", type: i.Type.I64 },
            12: { alias: "attemptsCount", type: i.Type.I32 },
            13: { alias: "clientType", type: i.Type.I32 }
          }));
      },
      2487: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965),
          a = s(77915),
          o = s(35137),
          r = s(88606);
        (e.exports.NoteShareAdminShareType = {
          SHARED_WITH_BUSINESS: 0,
          SHARED_BY_PUBLIC_LINK: 1,
          SHARED_WITH_INTERNAL_INDIVIDUAL: 2,
          SHARED_WITH_EXTERNAL_INDIVIDUAL: 3
        }),
          (e.exports.RecommendationReasonType = {
            NOTE_CREATOR: 0,
            NOTE_EDITOR: 1,
            NOTEBOOK_CONTRIBUTOR: 2,
            NOTEBOOK_MEMBER: 3,
            POPULAR: 4,
            NOTEBOOK_RECENT_CONTRIBUTOR: 5,
            RELATED_CONTENT: 6,
            USER_HISTORY: 7,
            NOTEBOOK_ACTIVE_CONTRIBUTOR: 8
          }),
          (e.exports.NoteRecommendationEventType = { NOTE_CREATED: 0, NOTE_UPDATED: 1 }),
          (e.exports.EducationCardType = {
            CREATE_BUSINESS_NOTEBOOK: 0,
            CREATE_BUSINESS_NOTE: 1,
            START_WORKCHAT: 2,
            INSTALL_WEBCLIPPER: 3,
            LEARN_CONTEXT: 4,
            PUBLISH_BUSINESS_NOTEBOOK: 5
          }),
          (e.exports.BusinessAutoApproveDomain = i.Struct.define("BusinessAutoApproveDomain", {
            1: { alias: "emailDomain", type: i.Type.STRING },
            2: { alias: "confirmed", type: i.Type.BOOL }
          })),
          (e.exports.NoteShareAdminFilter = i.Struct.define("NoteShareAdminFilter", {
            1: { alias: "shareType", type: i.Type.I32 },
            2: { alias: "query", type: i.Type.STRING },
            3: { alias: "minPrivilegeLevel", type: i.Type.I32 },
            4: { alias: "startAt", type: i.Type.I32 }
          })),
          (e.exports.NoteShareAdminResult = i.Struct.define("NoteShareAdminResult", {
            1: { alias: "endsAt", type: i.Type.I32 },
            2: { alias: "hasMoreNoteShares", type: i.Type.BOOL },
            3: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Note) },
            4: { alias: "notebooks", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, a.Notebook) },
            5: { alias: "users", type: i.Type.MAP, def: i.Map.define(i.Type.I32, i.Type.STRUCT, a.User) },
            6: { alias: "identities", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, a.Identity) },
            7: { alias: "shareRelationships", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, o.NoteShareRelationships) },
            8: { alias: "workspaces", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, r.Workspace) }
          })),
          (e.exports.RecommendationReason = i.Struct.define("RecommendationReason", {
            1: { alias: "reasonType", type: i.Type.I32 },
            2: { alias: "guid", type: i.Type.STRING }
          })),
          (e.exports.NoteRecommendationEvent = i.Struct.define("NoteRecommendationEvent", {
            1: { alias: "eventType", type: i.Type.I32 },
            2: { alias: "timestamp", type: i.Type.I64 },
            3: { alias: "userIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            4: { alias: "unlistedUserIdCount", type: i.Type.I32 }
          })),
          (e.exports.RecommendedNote = i.Struct.define("RecommendedNote", {
            1: { alias: "noteMetadata", type: i.Type.STRUCT, def: o.NoteMetadata },
            2: { alias: "activeUserIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            3: { alias: "snippetText", type: i.Type.STRING },
            4: { alias: "reason", type: i.Type.STRUCT, def: e.exports.RecommendationReason },
            5: { alias: "event", type: i.Type.STRUCT, def: e.exports.NoteRecommendationEvent },
            6: { alias: "canShare", type: i.Type.BOOL },
            7: { alias: "largestResourceFileName", type: i.Type.STRING },
            8: { alias: "largestResourceGuid", type: i.Type.STRING }
          })),
          (e.exports.RecommendedNotebook = i.Struct.define("RecommendedNotebook", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "activeUserIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            3: { alias: "reason", type: i.Type.STRUCT, def: e.exports.RecommendationReason }
          })),
          (e.exports.EducationCard = i.Struct.define("EducationCard", {
            1: { alias: "educationCardType", type: i.Type.I32 },
            2: { alias: "promotionId", type: i.Type.STRING },
            3: { alias: "objectId", type: i.Type.STRING }
          })),
          (e.exports.BusinessSummary = i.Struct.define("BusinessSummary", {
            1: { alias: "recommendedNotes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNote) },
            2: { alias: "recommendedNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNotebook) },
            3: { alias: "trendingNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNotebook) },
            4: { alias: "recommendedArticles", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.RelatedContent) },
            5: { alias: "educationCards", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.EducationCard) },
            6: { alias: "summaryPeriodStart", type: i.Type.I64 },
            7: { alias: "summaryPeriodEnd", type: i.Type.I64 },
            8: { alias: "updated", type: i.Type.I64 },
            9: { alias: "debugInfo", type: i.Type.STRING }
          })),
          (e.exports.BusinessSummaryResultSpec = i.Struct.define("BusinessSummaryResultSpec", {
            1: { alias: "includeDebugInfo", type: i.Type.BOOL }
          })),
          (e.exports.BusinessSummaryNotificationResult = i.Struct.define("BusinessSummaryNotificationResult", {
            1: { alias: "topActiveUserIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            2: { alias: "totalActiveUsers", type: i.Type.I32 }
          })),
          (e.exports.SecurityDetails = i.Struct.define("SecurityDetails", { 1: { alias: "twoFactorEnabled", type: i.Type.BOOL } })),
          (e.exports.UserProfileWithSecurityDetails = i.Struct.define("UserProfileWithSecurityDetails", {
            1: { alias: "userProfile", type: i.Type.STRUCT, def: a.UserProfile },
            2: { alias: "securityDetails", type: i.Type.STRUCT, def: e.exports.SecurityDetails },
            3: { alias: "status", type: i.Type.I32 },
            4: { alias: "serviceLevel", type: i.Type.I32 },
            5: { alias: "facadeUser", type: i.Type.BOOL },
            6: { alias: "serviceLevelV2", type: i.Type.I32 }
          })),
          (e.exports.ClientAccessEntriesPage = i.Struct.define("ClientAccessEntriesPage", {
            1: { alias: "entries", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.ClientAccessEntry) },
            2: { alias: "hasMore", type: i.Type.BOOL }
          })),
          (e.exports.ServiceAccessEntriesPage = i.Struct.define("ServiceAccessEntriesPage", {
            1: { alias: "entries", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.ServiceAccessEntry) },
            2: { alias: "hasMore", type: i.Type.BOOL }
          })),
          (e.exports.BusinessAppTokenMetadata = i.Struct.define("BusinessAppTokenMetadata", {
            1: { alias: "created", type: i.Type.I64 },
            2: { alias: "expires", type: i.Type.I64 }
          })),
          (e.exports.CreateBusinessAppTokenResponse = i.Struct.define("CreateBusinessAppTokenResponse", {
            1: { alias: "token", type: i.Type.STRING },
            2: { alias: "metadata", type: i.Type.STRUCT, def: e.exports.BusinessAppTokenMetadata }
          }));
        var p = (e.exports.BusinessService = {});
        function u(e) {
          (this.output = e), (this.seqid = 0);
        }
        function y(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[n] && this.processor.addMethod(p[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (p.findNoteShares = i.Method.define({
          alias: "findNoteShares",
          args: i.Struct.define("findNoteSharesArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteShareAdminFilter, index: 1 }
          }),
          result: i.Struct.define("findNoteSharesResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteShareAdminResult },
            1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
            2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
          })
        })),
          (p.getBusinessSummary = i.Method.define({
            alias: "getBusinessSummary",
            args: i.Struct.define("getBusinessSummaryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.BusinessSummaryResultSpec, index: 1 }
            }),
            result: i.Struct.define("getBusinessSummaryResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessSummary },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (p.getBusinessSummaryNotificationDetails = i.Method.define({
            alias: "getBusinessSummaryNotificationDetails",
            args: i.Struct.define("getBusinessSummaryNotificationDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getBusinessSummaryNotificationDetailsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessSummaryNotificationResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (p.listBusinessInvitations = i.Method.define({
            alias: "listBusinessInvitations",
            args: i.Struct.define("listBusinessInvitationsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBusinessInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.approveInvitations = i.Method.define({
            alias: "approveInvitations",
            args: i.Struct.define("approveInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emails", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("approveInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.removeInvitations = i.Method.define({
            alias: "removeInvitations",
            args: i.Struct.define("removeInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emails", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("removeInvitationsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.listBusinessUserProfilesWithSecurityDetails = i.Method.define({
            alias: "listBusinessUserProfilesWithSecurityDetails",
            args: i.Struct.define("listBusinessUserProfilesWithSecurityDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listBusinessUserProfilesWithSecurityDetailsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserProfileWithSecurityDetails) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.listBusinessUsersProfileInfoWithSecurityDetails = i.Method.define({
            alias: "listBusinessUsersProfileInfoWithSecurityDetails",
            args: i.Struct.define("listBusinessUsersProfileInfoWithSecurityDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userProfileInfoRequest", type: i.Type.STRUCT, def: a.UserProfileInfoRequest, index: 1 }
            }),
            result: i.Struct.define("listBusinessUsersProfileInfoWithSecurityDetailsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserProfileWithSecurityDetails) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.setBusinessUserRole = i.Method.define({
            alias: "setBusinessUserRole",
            args: i.Struct.define("setBusinessUserRoleArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 },
              3: { alias: "role", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("setBusinessUserRoleResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.setBusinessEmailForUser = i.Method.define({
            alias: "setBusinessEmailForUser",
            args: i.Struct.define("setBusinessEmailForUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 },
              3: { alias: "email", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("setBusinessEmailForUserResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (p.getClientAccessHistoryForUser = i.Method.define({
            alias: "getClientAccessHistoryForUser",
            args: i.Struct.define("getClientAccessHistoryForUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "startDateInMillis", type: i.Type.I64, index: 1 },
              3: { alias: "endDateInMillis", type: i.Type.I64, index: 2 },
              4: { alias: "pageSize", type: i.Type.I32, index: 3 },
              5: { alias: "before", type: i.Type.STRUCT, def: a.ClientAccessEntry, index: 4 }
            }),
            result: i.Struct.define("getClientAccessHistoryForUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ClientAccessEntriesPage },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.getServiceAccessHistoryForUser = i.Method.define({
            alias: "getServiceAccessHistoryForUser",
            args: i.Struct.define("getServiceAccessHistoryForUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "startDateInMillis", type: i.Type.I64, index: 1 },
              3: { alias: "endDateInMillis", type: i.Type.I64, index: 2 },
              4: { alias: "pageSize", type: i.Type.I32, index: 3 },
              5: { alias: "before", type: i.Type.STRUCT, def: a.ServiceAccessEntry, index: 4 }
            }),
            result: i.Struct.define("getServiceAccessHistoryForUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ServiceAccessEntriesPage },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.isAvailableForAutoApproval = i.Method.define({
            alias: "isAvailableForAutoApproval",
            args: i.Struct.define("isAvailableForAutoApprovalArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emailDomain", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("isAvailableForAutoApprovalResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (p.listAutoApproveDomains = i.Method.define({
            alias: "listAutoApproveDomains",
            args: i.Struct.define("listAutoApproveDomainsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listAutoApproveDomainsResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRUCT, e.exports.BusinessAutoApproveDomain) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.listJoinableAutoApproveDomains = i.Method.define({
            alias: "listJoinableAutoApproveDomains",
            args: i.Struct.define("listJoinableAutoApproveDomainsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listJoinableAutoApproveDomainsResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.removeAutoApproveDomain = i.Method.define({
            alias: "removeAutoApproveDomain",
            args: i.Struct.define("removeAutoApproveDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("removeAutoApproveDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.reserveAutoApproveDomain = i.Method.define({
            alias: "reserveAutoApproveDomain",
            args: i.Struct.define("reserveAutoApproveDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "confirmationEmail", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("reserveAutoApproveDomainResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessAutoApproveDomain },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.resendAutoApproveDomainConfirmationEmail = i.Method.define({
            alias: "resendAutoApproveDomainConfirmationEmail",
            args: i.Struct.define("resendAutoApproveDomainConfirmationEmailArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("resendAutoApproveDomainConfirmationEmailResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.getDisplayNamesForExternalUsers = i.Method.define({
            alias: "getDisplayNamesForExternalUsers",
            args: i.Struct.define("getDisplayNamesForExternalUsersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userIds", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 }
            }),
            result: i.Struct.define("getDisplayNamesForExternalUsersResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.I32, i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.revokeAccess = i.Method.define({
            alias: "revokeAccess",
            args: i.Struct.define("revokeAccessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("revokeAccessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (p.revokeAccessForBobMigration = i.Method.define({
            alias: "revokeAccessForBobMigration",
            args: i.Struct.define("revokeAccessForBobMigrationArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "legacyUserId", type: i.Type.I32, index: 1 },
              3: { alias: "withFacade", type: i.Type.BOOL, index: 2 },
              4: { alias: "bobUserId", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("revokeAccessForBobMigrationResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (p.deactivateBusinessUser = i.Method.define({
            alias: "deactivateBusinessUser",
            args: i.Struct.define("deactivateBusinessUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("deactivateBusinessUserResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (p.reactivateBusinessUserAndChargeBusiness = i.Method.define({
            alias: "reactivateBusinessUserAndChargeBusiness",
            args: i.Struct.define("reactivateBusinessUserAndChargeBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("reactivateBusinessUserAndChargeBusinessResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (p.createAccessToken = i.Method.define({
            alias: "createAccessToken",
            args: i.Struct.define("createAccessTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("createAccessTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CreateBusinessAppTokenResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.revokeAccessToken = i.Method.define({
            alias: "revokeAccessToken",
            args: i.Struct.define("revokeAccessTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("revokeAccessTokenResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.getAccessTokenMetadata = i.Method.define({
            alias: "getAccessTokenMetadata",
            args: i.Struct.define("getAccessTokenMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getAccessTokenMetadataResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessAppTokenMetadata },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (u.prototype.findNoteShares = function (e, t, s) {
            var i = p.findNoteShares,
              n = new i.args();
            (n.authenticationToken = e), (n.filter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getBusinessSummary = function (e, t, s) {
            var i = p.getBusinessSummary,
              n = new i.args();
            (n.authenticationToken = e), (n.resultSpec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getBusinessSummaryNotificationDetails = function (e, t) {
            var s = p.getBusinessSummaryNotificationDetails,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listBusinessInvitations = function (e, t) {
            var s = p.listBusinessInvitations,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.approveInvitations = function (e, t, s) {
            var i = p.approveInvitations,
              n = new i.args();
            (n.authenticationToken = e), (n.emails = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.removeInvitations = function (e, t, s) {
            var i = p.removeInvitations,
              n = new i.args();
            (n.authenticationToken = e), (n.emails = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.listBusinessUserProfilesWithSecurityDetails = function (e, t) {
            var s = p.listBusinessUserProfilesWithSecurityDetails,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listBusinessUsersProfileInfoWithSecurityDetails = function (e, t, s) {
            var i = p.listBusinessUsersProfileInfoWithSecurityDetails,
              n = new i.args();
            (n.authenticationToken = e), (n.userProfileInfoRequest = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.setBusinessUserRole = function (e, t, s, i) {
            var n = p.setBusinessUserRole,
              a = new n.args();
            (a.authenticationToken = e), (a.userId = t), (a.role = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setBusinessEmailForUser = function (e, t, s, i) {
            var n = p.setBusinessEmailForUser,
              a = new n.args();
            (a.authenticationToken = e), (a.userId = t), (a.email = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getClientAccessHistoryForUser = function (e, t, s, i, n, a) {
            var o = p.getClientAccessHistoryForUser,
              r = new o.args();
            (r.authenticationToken = e),
              (r.startDateInMillis = t),
              (r.endDateInMillis = s),
              (r.pageSize = i),
              (r.before = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (u.prototype.getServiceAccessHistoryForUser = function (e, t, s, i, n, a) {
            var o = p.getServiceAccessHistoryForUser,
              r = new o.args();
            (r.authenticationToken = e),
              (r.startDateInMillis = t),
              (r.endDateInMillis = s),
              (r.pageSize = i),
              (r.before = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (u.prototype.isAvailableForAutoApproval = function (e, t, s) {
            var i = p.isAvailableForAutoApproval,
              n = new i.args();
            (n.authenticationToken = e), (n.emailDomain = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.listAutoApproveDomains = function (e, t) {
            var s = p.listAutoApproveDomains,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listJoinableAutoApproveDomains = function (e, t) {
            var s = p.listJoinableAutoApproveDomains,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.removeAutoApproveDomain = function (e, t, s) {
            var i = p.removeAutoApproveDomain,
              n = new i.args();
            (n.authenticationToken = e), (n.domain = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.reserveAutoApproveDomain = function (e, t, s) {
            var i = p.reserveAutoApproveDomain,
              n = new i.args();
            (n.authenticationToken = e), (n.confirmationEmail = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.resendAutoApproveDomainConfirmationEmail = function (e, t, s) {
            var i = p.resendAutoApproveDomainConfirmationEmail,
              n = new i.args();
            (n.authenticationToken = e), (n.domain = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getDisplayNamesForExternalUsers = function (e, t, s) {
            var i = p.getDisplayNamesForExternalUsers,
              n = new i.args();
            (n.authenticationToken = e), (n.userIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.revokeAccess = function (e, t, s) {
            var i = p.revokeAccess,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.revokeAccessForBobMigration = function (e, t, s, i, n) {
            var a = p.revokeAccessForBobMigration,
              o = new a.args();
            (o.authenticationToken = e),
              (o.legacyUserId = t),
              (o.withFacade = s),
              (o.bobUserId = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.deactivateBusinessUser = function (e, t, s) {
            var i = p.deactivateBusinessUser,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.reactivateBusinessUserAndChargeBusiness = function (e, t, s) {
            var i = p.reactivateBusinessUserAndChargeBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.userId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createAccessToken = function (e, t, s) {
            var i = p.createAccessToken,
              n = new i.args();
            (n.authenticationToken = e), (n.tokenType = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.revokeAccessToken = function (e, t, s) {
            var i = p.revokeAccessToken,
              n = new i.args();
            (n.authenticationToken = e), (n.tokenType = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getAccessTokenMetadata = function (e, t, s) {
            var i = p.getAccessTokenMetadata,
              n = new i.args();
            (n.authenticationToken = e), (n.tokenType = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.BusinessService.Client = u),
          (y.prototype.start = function () {
            this.stransport.listen();
          }),
          (y.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.BusinessService.Server = y);
      },
      81343: function (e, t, s) {
        var i = s(24527).Thrift;
        s(77915),
          (e.exports.IncentiveRedemptionStatus = { ACTIVE: 1, IN_PROGRESS: 2, REDEEMED: 3, EXPIRED: 4 }),
          (e.exports.IncentiveType = { BONUS: 1, SAVINGS: 2, TRIAL: 3 }),
          (e.exports.IncentiveValidationType = { SIGNATURE: 1, SILVERPOP: 2 }),
          (e.exports.IncentiveTimeUnit = { DAYS: 1, WEEKS: 2, MONTHS: 3, YEARS: 4 }),
          (e.exports.IncentiveAttributeType = {
            ELIGIBLE_SKU: 1,
            COUNTRY_RESTRICTION: 2,
            CURRENCY_RESTRICTION: 3,
            COMMERCE_SERVICE_RESTRICTION: 4,
            EMAIL_RESTRICTION: 5,
            LANGUAGE_RESTRICTION: 6,
            SKU_RESTRICTION: 7,
            SERVICE_LEVEL_RESTRICTION: 8
          }),
          (e.exports.IncentiveEligibility = i.Struct.define("IncentiveEligibility", {
            1: { alias: "requiredOffer", type: i.Type.STRING },
            2: { alias: "requiredOrigin", type: i.Type.STRING },
            3: { alias: "validationType", type: i.Type.I32 },
            4: { alias: "validationSecret", type: i.Type.STRING },
            5: { alias: "redemptionsAllowed", type: i.Type.BYTE },
            6: { alias: "redemptionsAllowedUnit", type: i.Type.I32 },
            7: { alias: "createdBefore", type: i.Type.I64 },
            8: { alias: "requiredCountries", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            9: { alias: "requiredCurrencies", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            10: { alias: "requiredCommerceServices", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            11: { alias: "requiredEmailSuffixes", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            12: { alias: "requiredLanguages", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            13: { alias: "requiredSkus", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            14: { alias: "requiredServiceLevels", type: i.Type.SET, def: i.Set.define(i.Type.I32) }
          })),
          (e.exports.Incentive = i.Struct.define("Incentive", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "internalName", type: i.Type.STRING },
            3: { alias: "promoCode", type: i.Type.STRING },
            4: { alias: "enabled", type: i.Type.BOOL },
            5: { alias: "startDate", type: i.Type.I64 },
            6: { alias: "endDate", type: i.Type.I64 },
            7: { alias: "incentiveType", type: i.Type.I32 },
            8: { alias: "percentSaved", type: i.Type.I32 },
            9: { alias: "incentiveTimeLength", type: i.Type.BYTE },
            10: { alias: "incentiveTimeUnit", type: i.Type.I32 },
            11: { alias: "eligibleSkuCodes", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            12: { alias: "eligibilityFilters", type: i.Type.STRUCT, def: e.exports.IncentiveEligibility }
          })),
          (e.exports.IncentiveAssociation = i.Struct.define("IncentiveAssociation", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "incentiveId", type: i.Type.I32 },
            3: { alias: "userId", type: i.Type.I32 },
            4: { alias: "created", type: i.Type.I64 },
            5: { alias: "userSignature", type: i.Type.STRING },
            6: { alias: "overrideEligibility", type: i.Type.BOOL },
            7: { alias: "redemptionStatus", type: i.Type.I32 },
            8: { alias: "redemptionStatusUpdated", type: i.Type.I64 },
            9: { alias: "redemptionOrderNumber", type: i.Type.STRING }
          }));
      },
      1380: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965),
          a = s(22024),
          o = s(32602),
          r = (e.exports.CommunicationEngine = {});
        function p(e) {
          (this.output = e), (this.seqid = 0);
        }
        function u(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), r))
            e[n] && this.processor.addMethod(r[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (r.getMessages = i.Method.define({
          alias: "getMessages",
          args: i.Struct.define("getMessagesArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "request", type: i.Type.STRUCT, def: a.MessageRequest, index: 1 }
          }),
          result: i.Struct.define("getMessagesResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: a.MessageResponse },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
          })
        })),
          (r.syncMessages = i.Method.define({
            alias: "syncMessages",
            args: i.Struct.define("syncMessagesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: o.MessageRequest, index: 1 }
            }),
            result: i.Struct.define("syncMessagesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.MessageResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.prototype.getMessages = function (e, t, s) {
            var i = r.getMessages,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.syncMessages = function (e, t, s) {
            var i = r.syncMessages,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.CommunicationEngine.Client = p),
          (u.prototype.start = function () {
            this.stransport.listen();
          }),
          (u.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.CommunicationEngine.Server = u);
      },
      72319: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(22024),
          a = (e.exports.SharedAPI = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), a))
            e[n] && this.processor.addMethod(a[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (a.processServerResponse = i.Method.define({
          oneway: !0,
          alias: "processServerResponse",
          args: i.Struct.define("processServerResponseArgs", {
            1: { alias: "response", type: i.Type.STRUCT, def: n.MessageResponse, index: 0 }
          }),
          result: i.Struct.define("processServerResponseResult")
        })),
          (a.initialize = i.Method.define({
            oneway: !0,
            alias: "initialize",
            args: i.Struct.define("initializeArgs", {
              1: { alias: "supportedPlacements", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 0 },
              2: { alias: "supportedTriggers", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 },
              3: { alias: "savedState", type: i.Type.BINARY, index: 2 }
            }),
            result: i.Struct.define("initializeResult")
          })),
          (a.trigger = i.Method.define({
            oneway: !0,
            alias: "trigger",
            args: i.Struct.define("triggerArgs", { 1: { alias: "trigger", type: i.Type.STRUCT, def: n.Trigger, index: 0 } }),
            result: i.Struct.define("triggerResult")
          })),
          (a.requestPlacement = i.Method.define({
            oneway: !0,
            alias: "requestPlacement",
            args: i.Struct.define("requestPlacementArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("requestPlacementResult")
          })),
          (a.placementIsVisible = i.Method.define({
            oneway: !0,
            alias: "placementIsVisible",
            args: i.Struct.define("placementIsVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementIsVisibleResult")
          })),
          (a.userAction = i.Method.define({
            oneway: !0,
            alias: "userAction",
            args: i.Struct.define("userActionArgs", {
              1: { alias: "placement", type: i.Type.I32, index: 0 },
              2: { alias: "blob", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("userActionResult")
          })),
          (a.syncComplete = i.Method.define({
            oneway: !0,
            alias: "syncComplete",
            args: i.Struct.define("syncCompleteArgs", { 1: { alias: "communicationEngineUpdateId", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("syncCompleteResult")
          })),
          (a.placementWasDismissed = i.Method.define({
            oneway: !0,
            alias: "placementWasDismissed",
            args: i.Struct.define("placementWasDismissedArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWasDismissedResult")
          })),
          (a.placementWillNotBeVisible = i.Method.define({
            oneway: !0,
            alias: "placementWillNotBeVisible",
            args: i.Struct.define("placementWillNotBeVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWillNotBeVisibleResult")
          })),
          (o.prototype.processServerResponse = function (e, t) {
            var s = a.processServerResponse,
              i = new s.args();
            (i.response = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.initialize = function (e, t, s, i) {
            var n = a.initialize,
              o = new n.args();
            (o.supportedPlacements = e), (o.supportedTriggers = t), (o.savedState = s), n.sendRequest(this.output, this.seqid++, o, i);
          }),
          (o.prototype.trigger = function (e, t) {
            var s = a.trigger,
              i = new s.args();
            (i.trigger = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.requestPlacement = function (e, t) {
            var s = a.requestPlacement,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementIsVisible = function (e, t) {
            var s = a.placementIsVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.userAction = function (e, t, s) {
            var i = a.userAction,
              n = new i.args();
            (n.placement = e), (n.blob = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.syncComplete = function (e, t) {
            var s = a.syncComplete,
              i = new s.args();
            (i.communicationEngineUpdateId = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWasDismissed = function (e, t) {
            var s = a.placementWasDismissed,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWillNotBeVisible = function (e, t) {
            var s = a.placementWillNotBeVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.SharedAPI.Client = o),
          (r.prototype.start = function () {
            this.stransport.listen();
          }),
          (r.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.SharedAPI.Server = r);
        var p = (e.exports.MainApp = {});
        function u(e) {
          (this.output = e), (this.seqid = 0);
        }
        function y(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[n] && this.processor.addMethod(p[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (p.getMessages = i.Method.define({
          oneway: !0,
          alias: "getMessages",
          args: i.Struct.define("getMessagesArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: n.MessageRequest, index: 0 } }),
          result: i.Struct.define("getMessagesResult")
        })),
          (p.show = i.Method.define({
            oneway: !0,
            alias: "show",
            args: i.Struct.define("showArgs", {
              1: { alias: "placement", type: i.Type.I32, index: 0 },
              2: { alias: "content", type: i.Type.STRING, index: 1 },
              3: { alias: "priority", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("showResult")
          })),
          (p.sendEvents = i.Method.define({
            oneway: !0,
            alias: "sendEvents",
            args: i.Struct.define("sendEventsArgs", {
              1: { alias: "events", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Event), index: 0 }
            }),
            result: i.Struct.define("sendEventsResult")
          })),
          (p.log = i.Method.define({
            oneway: !0,
            alias: "log",
            args: i.Struct.define("logArgs", { 1: { alias: "message", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("logResult")
          })),
          (p.dismissMessage = i.Method.define({
            oneway: !0,
            alias: "dismissMessage",
            args: i.Struct.define("dismissMessageArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("dismissMessageResult")
          })),
          (p.saveState = i.Method.define({
            oneway: !0,
            alias: "saveState",
            args: i.Struct.define("saveStateArgs", { 1: { alias: "state", type: i.Type.BINARY, index: 0 } }),
            result: i.Struct.define("saveStateResult")
          })),
          (p.placementsAvailable = i.Method.define({
            oneway: !0,
            alias: "placementsAvailable",
            args: i.Struct.define("placementsAvailableArgs", {
              1: { alias: "placements", type: i.Type.SET, def: i.Set.define(i.Type.I32), index: 0 }
            }),
            result: i.Struct.define("placementsAvailableResult")
          })),
          (u.prototype.getMessages = function (e, t) {
            var s = p.getMessages,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.show = function (e, t, s, i) {
            var n = p.show,
              a = new n.args();
            (a.placement = e), (a.content = t), (a.priority = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.sendEvents = function (e, t) {
            var s = p.sendEvents,
              i = new s.args();
            (i.events = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.log = function (e, t) {
            var s = p.log,
              i = new s.args();
            (i.message = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.dismissMessage = function (e, t) {
            var s = p.dismissMessage,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.saveState = function (e, t) {
            var s = p.saveState,
              i = new s.args();
            (i.state = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.placementsAvailable = function (e, t) {
            var s = p.placementsAvailable,
              i = new s.args();
            (i.placements = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.MainApp.Client = u),
          (y.prototype.start = function () {
            this.stransport.listen();
          }),
          (y.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.MainApp.Server = y);
      },
      34898: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(32602),
          a = (e.exports.SharedAPIV2 = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), a))
            e[n] && this.processor.addMethod(a[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (a.processServerResponse = i.Method.define({
          oneway: !0,
          alias: "processServerResponse",
          args: i.Struct.define("processServerResponseArgs", {
            1: { alias: "response", type: i.Type.STRUCT, def: n.MessageResponse, index: 0 }
          }),
          result: i.Struct.define("processServerResponseResult")
        })),
          (a.initialize = i.Method.define({
            oneway: !0,
            alias: "initialize",
            args: i.Struct.define("initializeArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: n.InitializeRequest, index: 0 } }),
            result: i.Struct.define("initializeResult")
          })),
          (a.requestPlacement = i.Method.define({
            oneway: !0,
            alias: "requestPlacement",
            args: i.Struct.define("requestPlacementArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("requestPlacementResult")
          })),
          (a.placementIsVisible = i.Method.define({
            oneway: !0,
            alias: "placementIsVisible",
            args: i.Struct.define("placementIsVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementIsVisibleResult")
          })),
          (a.userAction = i.Method.define({
            oneway: !0,
            alias: "userAction",
            args: i.Struct.define("userActionArgs", {
              1: { alias: "placement", type: i.Type.I32, index: 0 },
              2: { alias: "blob", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("userActionResult")
          })),
          (a.placementWasDismissed = i.Method.define({
            oneway: !0,
            alias: "placementWasDismissed",
            args: i.Struct.define("placementWasDismissedArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWasDismissedResult")
          })),
          (a.placementWillNotBeVisible = i.Method.define({
            oneway: !0,
            alias: "placementWillNotBeVisible",
            args: i.Struct.define("placementWillNotBeVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWillNotBeVisibleResult")
          })),
          (a.htmlFetched = i.Method.define({
            oneway: !0,
            alias: "htmlFetched",
            args: i.Struct.define("htmlFetchedArgs", {
              1: { alias: "uri", type: i.Type.STRING, index: 0 },
              2: { alias: "html", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("htmlFetchedResult")
          })),
          (o.prototype.processServerResponse = function (e, t) {
            var s = a.processServerResponse,
              i = new s.args();
            (i.response = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.initialize = function (e, t) {
            var s = a.initialize,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.requestPlacement = function (e, t) {
            var s = a.requestPlacement,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementIsVisible = function (e, t) {
            var s = a.placementIsVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.userAction = function (e, t, s) {
            var i = a.userAction,
              n = new i.args();
            (n.placement = e), (n.blob = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.placementWasDismissed = function (e, t) {
            var s = a.placementWasDismissed,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWillNotBeVisible = function (e, t) {
            var s = a.placementWillNotBeVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.htmlFetched = function (e, t, s) {
            var i = a.htmlFetched,
              n = new i.args();
            (n.uri = e), (n.html = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.SharedAPIV2.Client = o),
          (r.prototype.start = function () {
            this.stransport.listen();
          }),
          (r.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.SharedAPIV2.Server = r);
        var p = (e.exports.MainAppV2 = {});
        function u(e) {
          (this.output = e), (this.seqid = 0);
        }
        function y(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[n] && this.processor.addMethod(p[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (p.syncMessages = i.Method.define({
          oneway: !0,
          alias: "syncMessages",
          args: i.Struct.define("syncMessagesArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: n.MessageRequest, index: 0 } }),
          result: i.Struct.define("syncMessagesResult")
        })),
          (p.show = i.Method.define({
            oneway: !0,
            alias: "show",
            args: i.Struct.define("showArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: n.ShowRequest, index: 0 } }),
            result: i.Struct.define("showResult")
          })),
          (p.sendAnalyticsEvent = i.Method.define({
            oneway: !0,
            alias: "sendAnalyticsEvent",
            args: i.Struct.define("sendAnalyticsEventArgs", {
              1: { alias: "event", type: i.Type.STRUCT, def: n.AnalyticsEvent, index: 0 }
            }),
            result: i.Struct.define("sendAnalyticsEventResult")
          })),
          (p.log = i.Method.define({
            oneway: !0,
            alias: "log",
            args: i.Struct.define("logArgs", { 1: { alias: "message", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("logResult")
          })),
          (p.dismissMessage = i.Method.define({
            oneway: !0,
            alias: "dismissMessage",
            args: i.Struct.define("dismissMessageArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("dismissMessageResult")
          })),
          (p.saveState = i.Method.define({
            oneway: !0,
            alias: "saveState",
            args: i.Struct.define("saveStateArgs", { 1: { alias: "state", type: i.Type.BINARY, index: 0 } }),
            result: i.Struct.define("saveStateResult")
          })),
          (p.placementsAvailable = i.Method.define({
            oneway: !0,
            alias: "placementsAvailable",
            args: i.Struct.define("placementsAvailableArgs", {
              1: { alias: "placements", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 0 }
            }),
            result: i.Struct.define("placementsAvailableResult")
          })),
          (p.fetchHtml = i.Method.define({
            oneway: !0,
            alias: "fetchHtml",
            args: i.Struct.define("fetchHtmlArgs", { 1: { alias: "uri", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("fetchHtmlResult")
          })),
          (u.prototype.syncMessages = function (e, t) {
            var s = p.syncMessages,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.show = function (e, t) {
            var s = p.show,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.sendAnalyticsEvent = function (e, t) {
            var s = p.sendAnalyticsEvent,
              i = new s.args();
            (i.event = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.log = function (e, t) {
            var s = p.log,
              i = new s.args();
            (i.message = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.dismissMessage = function (e, t) {
            var s = p.dismissMessage,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.saveState = function (e, t) {
            var s = p.saveState,
              i = new s.args();
            (i.state = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.placementsAvailable = function (e, t) {
            var s = p.placementsAvailable,
              i = new s.args();
            (i.placements = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.fetchHtml = function (e, t) {
            var s = p.fetchHtml,
              i = new s.args();
            (i.uri = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.MainAppV2.Client = u),
          (y.prototype.start = function () {
            this.stransport.listen();
          }),
          (y.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.MainAppV2.Server = y);
      },
      22024: function (e, t, s) {
        var i = s(24527).Thrift;
        (e.exports.Priority = { IMMEDIATE: 0, SUITABLE: 1 }),
          (e.exports.Placement = { FULLSCREEN: 0, BANNER: 1, CARD: 2 }),
          (e.exports.TriggerType = { PASTE: 0, UNDO: 1, PICTURE: 2 }),
          (e.exports.Events = i.Struct.define("Events", {
            1: { alias: "show", type: i.Type.STRING },
            2: { alias: "dismiss", type: i.Type.STRING }
          })),
          (e.exports.Event = i.Struct.define("Event", {
            1: { alias: "name", type: i.Type.STRING },
            2: { alias: "time", type: i.Type.I64 },
            3: { alias: "messageKey", type: i.Type.STRING }
          })),
          (e.exports.MessageContent = i.Struct.define("MessageContent", {
            1: { alias: "html", type: i.Type.STRING },
            2: { alias: "version", type: i.Type.I64 }
          })),
          (e.exports.Trigger = i.Struct.define("Trigger", {
            1: { alias: "kind", type: i.Type.I32 },
            2: { alias: "criteria", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) }
          })),
          (e.exports.InAppMessage = i.Struct.define("InAppMessage", {
            1: { alias: "key", type: i.Type.STRING },
            2: { alias: "priority", type: i.Type.I32 },
            3: { alias: "events", type: i.Type.STRUCT, def: e.exports.Events },
            4: { alias: "content", type: i.Type.STRUCT, def: e.exports.MessageContent },
            5: { alias: "placement", type: i.Type.I32 },
            6: { alias: "trigger", type: i.Type.STRUCT, def: e.exports.Trigger }
          })),
          (e.exports.InAppMessageIdentifier = i.Struct.define("InAppMessageIdentifier", {
            1: { alias: "key", type: i.Type.STRING },
            2: { alias: "version", type: i.Type.I64 }
          })),
          (e.exports.MessageResponse = i.Struct.define("MessageResponse", {
            1: { alias: "messages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.InAppMessage) }
          })),
          (e.exports.MessageRequest = i.Struct.define("MessageRequest", {
            1: { alias: "knownMessages", type: i.Type.SET, def: i.Set.define(i.Type.STRUCT, e.exports.InAppMessageIdentifier) },
            2: { alias: "supportedTriggers", type: i.Type.SET, def: i.Set.define(i.Type.I32) },
            3: { alias: "supportedPlacements", type: i.Type.SET, def: i.Set.define(i.Type.I32) },
            4: { alias: "events", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Event) },
            5: { alias: "locale", type: i.Type.STRING },
            6: { alias: "clientVersion", type: i.Type.STRING }
          }));
      },
      32602: function (e, t, s) {
        var i = s(24527).Thrift;
        (e.exports.CommEnginePlacement = { FULLSCREEN: 0, BANNER: 1, CARD: 2 }),
          (e.exports.CommEnginePriority = { IMMEDIATE: 0, SUITABLE: 1 }),
          (e.exports.CommEngineEventType = { SHOW: 0, DISMISS: 1, TRACK: 2, ERROREVENT: 3 }),
          (e.exports.CommEngineClientType = { MAC: 0, WINDOWS: 1, IOS: 2, ANDROID: 3, WEB: 4, CLIPPER: 5, ION: 6, BORON: 7 }),
          (e.exports.Event = i.Struct.define("Event", {
            1: { alias: "type", type: i.Type.I32 },
            2: { alias: "timeOccurred", type: i.Type.I64 },
            3: { alias: "messageKey", type: i.Type.STRING },
            4: { alias: "label", type: i.Type.STRING }
          })),
          (e.exports.MessageContent = i.Struct.define("MessageContent", {
            1: { alias: "templateUri", type: i.Type.STRING },
            2: { alias: "contentVariablesJson", type: i.Type.STRING }
          })),
          (e.exports.InAppMessage = i.Struct.define("InAppMessage", {
            1: { alias: "key", type: i.Type.STRING },
            2: { alias: "priority", type: i.Type.I32 },
            3: { alias: "content", type: i.Type.STRUCT, def: e.exports.MessageContent },
            4: { alias: "placement", type: i.Type.I32 },
            5: { alias: "offline", type: i.Type.BOOL },
            6: { alias: "expires", type: i.Type.I64 }
          })),
          (e.exports.InAppMessageIdentifier = i.Struct.define("InAppMessageIdentifier", { 1: { alias: "key", type: i.Type.STRING } })),
          (e.exports.Config = i.Struct.define("Config", { 1: { alias: "cooldownPeriodMillis", type: i.Type.I64 } })),
          (e.exports.AnalyticsEvent = i.Struct.define("AnalyticsEvent", {
            1: { alias: "category", type: i.Type.STRING },
            2: { alias: "action", type: i.Type.STRING },
            3: { alias: "label", type: i.Type.STRING }
          })),
          (e.exports.MessageResponse = i.Struct.define("MessageResponse", {
            1: { alias: "messages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.InAppMessage) },
            2: { alias: "messageRequestGuid", type: i.Type.STRING },
            3: { alias: "config", type: i.Type.STRUCT, def: e.exports.Config }
          })),
          (e.exports.MessageRequest = i.Struct.define("MessageRequest", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "knownMessages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.InAppMessageIdentifier) },
            3: { alias: "supportedPlacements", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            4: { alias: "events", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Event) },
            5: { alias: "locale", type: i.Type.STRING },
            6: { alias: "commEngineJsVersion", type: i.Type.I32 },
            7: { alias: "nativeClientVersion", type: i.Type.I32 },
            8: { alias: "clientType", type: i.Type.I32 },
            9: { alias: "uiLanguage", type: i.Type.STRING }
          })),
          (e.exports.DebugParams = i.Struct.define("DebugParams", {
            1: { alias: "apiLogging", type: i.Type.BOOL },
            2: { alias: "dataLogging", type: i.Type.BOOL },
            3: { alias: "stateLogging", type: i.Type.BOOL },
            4: { alias: "syncLogging", type: i.Type.BOOL },
            5: { alias: "frequentSyncs", type: i.Type.BOOL },
            6: { alias: "cooldownPeriodMillis", type: i.Type.I64 },
            7: { alias: "alwaysProcessServerResponse", type: i.Type.BOOL }
          })),
          (e.exports.InitializeRequest = i.Struct.define("InitializeRequest", {
            1: { alias: "clientType", type: i.Type.I32 },
            2: { alias: "supportedPlacements", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            3: { alias: "savedState", type: i.Type.BINARY },
            4: { alias: "locale", type: i.Type.STRING },
            5: { alias: "nativeClientVersion", type: i.Type.I32 },
            6: { alias: "debugParams", type: i.Type.STRUCT, def: e.exports.DebugParams },
            7: { alias: "uiLanguage", type: i.Type.STRING }
          })),
          (e.exports.ShowRequest = i.Struct.define("ShowRequest", {
            1: { alias: "placement", type: i.Type.I32 },
            2: { alias: "html", type: i.Type.STRING },
            3: { alias: "priority", type: i.Type.I32 }
          }));
      },
      52965: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(77915);
        (e.exports.EDAMErrorCode = {
          UNKNOWN: 1,
          BAD_DATA_FORMAT: 2,
          PERMISSION_DENIED: 3,
          INTERNAL_ERROR: 4,
          DATA_REQUIRED: 5,
          LIMIT_REACHED: 6,
          QUOTA_REACHED: 7,
          INVALID_AUTH: 8,
          AUTH_EXPIRED: 9,
          DATA_CONFLICT: 10,
          ENML_VALIDATION: 11,
          SHARD_UNAVAILABLE: 12,
          LEN_TOO_SHORT: 13,
          LEN_TOO_LONG: 14,
          TOO_FEW: 15,
          TOO_MANY: 16,
          UNSUPPORTED_OPERATION: 17,
          TAKEN_DOWN: 18,
          RATE_LIMIT_REACHED: 19,
          BUSINESS_SECURITY_LOGIN_REQUIRED: 20,
          DEVICE_LIMIT_REACHED: 21,
          OPENID_ALREADY_TAKEN: 22,
          INVALID_OPENID_TOKEN: 23,
          USER_NOT_ASSOCIATED: 24,
          USER_NOT_REGISTERED: 25,
          USER_ALREADY_ASSOCIATED: 26,
          ACCOUNT_CLEAR: 27,
          SSO_AUTHENTICATION_REQUIRED: 28,
          ENCMS_USER_NOT_INDIVIDUAL: 29,
          ENCMS_USER_STATUS_NOT_ACTIVE: 30,
          ENCMS_USER_NOT_PAID: 31,
          EMAIL_ASSOCIATED_DIFFERENT_UID: 32,
          NAP_UNSUPPORTED_ACCOUNT: 33,
          NEW_PASSWORD_SAME_AS_CURRENT_PASSWORD: 34,
          TWO_FACTOR_AUTHENTICATION_ENFORCED: 35,
          CONTENT_FILTRATION_PERMISSION_DENIED: 36
        }),
          (e.exports.EDAMInvalidContactReason = { BAD_ADDRESS: 0, DUPLICATE_CONTACT: 1, NO_CONNECTION: 2 }),
          (e.exports.EDAMUserException = i.Exception.define("EDAMUserException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "parameter", type: i.Type.STRING }
          })),
          (e.exports.EDAMSystemException = i.Exception.define("EDAMSystemException", {
            1: { alias: "errorCode", type: i.Type.I32 },
            2: { alias: "message", type: i.Type.STRING },
            3: { alias: "rateLimitDuration", type: i.Type.I32 }
          })),
          (e.exports.EDAMNotFoundException = i.Exception.define("EDAMNotFoundException", {
            1: { alias: "identifier", type: i.Type.STRING },
            2: { alias: "key", type: i.Type.STRING }
          })),
          (e.exports.EDAMInvalidContactsException = i.Exception.define("EDAMInvalidContactsException", {
            1: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact) },
            2: { alias: "parameter", type: i.Type.STRING },
            3: { alias: "reasons", type: i.Type.LIST, def: i.List.define(i.Type.I32) }
          }));
      },
      15448: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965);
        (e.exports.TClientType = {
          MAC: 0,
          WINDOWS: 1,
          IOS: 2,
          ANDROID: 3,
          WEB: 4,
          CLIPPER: 5,
          ION: 6,
          COMM_ENGINE: 7,
          NEUTRON: 8,
          BORON: 9
        }),
          (e.exports.TExperimentArmId = i.Struct.define("TExperimentArmId", {
            1: { alias: "experimentName", type: i.Type.STRING },
            2: { alias: "experimentArmName", type: i.Type.STRING }
          })),
          (e.exports.TGetPropsRequest = i.Struct.define("TGetPropsRequest", {
            1: { alias: "clientType", type: i.Type.I32 },
            2: { alias: "overridingArmIds", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.TExperimentArmId) },
            3: { alias: "userInfo", type: i.Type.STRING }
          })),
          (e.exports.TGetPropsResponse = i.Struct.define("TGetPropsResponse", { 1: { alias: "protoResponse", type: i.Type.BINARY } })),
          (e.exports.TGetPropsJsonResponse = i.Struct.define("TGetPropsJsonResponse", {
            1: { alias: "jsonResponse", type: i.Type.STRING }
          })),
          (e.exports.TGetServiceStateRequest = i.Struct.define("TGetServiceStateRequest", {
            1: { alias: "clientType", type: i.Type.I32 }
          })),
          (e.exports.TGetServiceStateResponse = i.Struct.define("TGetServiceStateResponse", {
            1: { alias: "protoResponse", type: i.Type.BINARY }
          })),
          (e.exports.TGetServiceStateJsonResponse = i.Struct.define("TGetServiceStateJsonResponse", {
            1: { alias: "jsonResponse", type: i.Type.STRING }
          }));
        var a = (e.exports.ExperimentsService = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), a))
            e[n] && this.processor.addMethod(a[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (a.getProps = i.Method.define({
          alias: "getProps",
          args: i.Struct.define("getPropsArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetPropsRequest, index: 1 }
          }),
          result: i.Struct.define("getPropsResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetPropsResponse },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
          })
        })),
          (a.getServiceState = i.Method.define({
            alias: "getServiceState",
            args: i.Struct.define("getServiceStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetServiceStateRequest, index: 1 }
            }),
            result: i.Struct.define("getServiceStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetServiceStateResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (a.getProps2 = i.Method.define({
            alias: "getProps2",
            args: i.Struct.define("getProps2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetPropsRequest, index: 1 }
            }),
            result: i.Struct.define("getProps2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetPropsJsonResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (a.getServiceState2 = i.Method.define({
            alias: "getServiceState2",
            args: i.Struct.define("getServiceState2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetServiceStateRequest, index: 1 }
            }),
            result: i.Struct.define("getServiceState2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetServiceStateJsonResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.prototype.getProps = function (e, t, s) {
            var i = a.getProps,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.getServiceState = function (e, t, s) {
            var i = a.getServiceState,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.getProps2 = function (e, t, s) {
            var i = a.getProps2,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.getServiceState2 = function (e, t, s) {
            var i = a.getServiceState2,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.ExperimentsService.Client = o),
          (r.prototype.start = function () {
            this.stransport.listen();
          }),
          (r.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.ExperimentsService.Server = r);
      },
      48412: function (e, t, s) {
        s(24527).Thrift,
          (e.exports.EDAM_ATTRIBUTE_LEN_MIN = 1),
          (e.exports.EDAM_ATTRIBUTE_LEN_MAX = 4096),
          (e.exports.EDAM_ATTRIBUTE_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{1,4096}$"),
          (e.exports.EDAM_ATTRIBUTE_LIST_MAX = 100),
          (e.exports.EDAM_ATTRIBUTE_MAP_MAX = 100),
          (e.exports.EDAM_GUID_LEN_MIN = 36),
          (e.exports.EDAM_GUID_LEN_MAX = 36),
          (e.exports.EDAM_GUID_REGEX = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
          (e.exports.EDAM_EMAIL_LEN_MIN = 6),
          (e.exports.EDAM_EMAIL_LEN_MAX = 255),
          (e.exports.EDAM_EMAIL_LOCAL_REGEX = "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$"),
          (e.exports.EDAM_EMAIL_DOMAIN_REGEX = "^[A-Za-z0-9-]*[A-Za-z0-9](\\.[A-Za-z0-9-]*[A-Za-z0-9])*\\.([A-Za-z]{2,})$"),
          (e.exports.EDAM_EMAIL_REGEX =
            "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]*[A-Za-z0-9](\\.[A-Za-z0-9-]*[A-Za-z0-9])*\\.([A-Za-z]{2,})$"),
          (e.exports.EDAM_VAT_REGEX =
            "^(AT)?U[0-9]{8}$|^(BE)?0?[0-9]{9}$|^(BG)?[0-9]{9,10}$|^(CY)?[0-9]{8}L$|^(CZ)?[0-9]{8,10}$|^(DE)?[0-9]{9}$|^(DK)?[0-9]{8}$|^(EE)?[0-9]{9}$|^(EL|GR)?[0-9]{9}$|^(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]$|^(FI)?[0-9]{8}$|^(FR)?[0-9A-Z]{2}[0-9]{9}$|^(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})$|^(HU)?[0-9]{8}$|^(IE)?[0-9]{7}[A-Z]{1,2}$|^(IT)?[0-9]{11}$|^(LT)?([0-9]{9}|[0-9]{12})$|^(LU)?[0-9]{8}$|^(LV)?[0-9]{11}$|^(MT)?[0-9]{8}$|^(NL)?[0-9]{9}B[0-9]{2}$|^(PL)?[0-9]{10}$|^(PT)?[0-9]{9}$|^(RO)?[0-9]{2,10}$|^(SE)?[0-9]{12}$|^(SI)?[0-9]{8}$|^(SK)?[0-9]{10}$|^[0-9]{9}MVA$|^[0-9]{6}$|^CHE[0-9]{9}(TVA|MWST|IVA)$"),
          (e.exports.EDAM_TIMEZONE_LEN_MIN = 1),
          (e.exports.EDAM_TIMEZONE_LEN_MAX = 32),
          (e.exports.EDAM_TIMEZONE_REGEX = "^([A-Za-z_-]+(/[A-Za-z_-]+)*)|(GMT(-|\\+)[0-9]{1,2}(:[0-9]{2})?)$"),
          (e.exports.EDAM_MIME_LEN_MIN = 3),
          (e.exports.EDAM_MIME_LEN_MAX = 255),
          (e.exports.EDAM_MIME_REGEX = "^[A-Za-z]+/[A-Za-z0-9._+-]+$"),
          (e.exports.EDAM_MIME_TYPE_GIF = "image/gif"),
          (e.exports.EDAM_MIME_TYPE_JPEG = "image/jpeg"),
          (e.exports.EDAM_MIME_TYPE_PNG = "image/png"),
          (e.exports.EDAM_MIME_TYPE_TIFF = "image/tiff"),
          (e.exports.EDAM_MIME_TYPE_BMP = "image/bmp"),
          (e.exports.EDAM_MIME_TYPE_WAV = "audio/wav"),
          (e.exports.EDAM_MIME_TYPE_MP3 = "audio/mpeg"),
          (e.exports.EDAM_MIME_TYPE_AMR = "audio/amr"),
          (e.exports.EDAM_MIME_TYPE_AAC = "audio/aac"),
          (e.exports.EDAM_MIME_TYPE_M4A = "audio/mp4"),
          (e.exports.EDAM_MIME_TYPE_MP4_VIDEO = "video/mp4"),
          (e.exports.EDAM_MIME_TYPE_INK = "application/vnd.evernote.ink"),
          (e.exports.EDAM_MIME_TYPE_PDF = "application/pdf"),
          (e.exports.EDAM_MIME_TYPE_DEFAULT = "application/octet-stream"),
          (e.exports.EDAM_MIME_TYPES = [
            "image/gif",
            "image/jpeg",
            "image/png",
            "audio/wav",
            "audio/mpeg",
            "audio/amr",
            "application/vnd.evernote.ink",
            "application/pdf",
            "video/mp4",
            "audio/aac",
            "audio/mp4"
          ]),
          (e.exports.EDAM_INDEXABLE_RESOURCE_MIME_TYPES = [
            "application/msword",
            "application/mspowerpoint",
            "application/excel",
            "application/vnd.ms-word",
            "application/vnd.ms-powerpoint",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.apple.pages",
            "application/vnd.apple.numbers",
            "application/vnd.apple.keynote",
            "application/x-iwork-pages-sffpages",
            "application/x-iwork-numbers-sffnumbers",
            "application/x-iwork-keynote-sffkey",
            "application/vnd.ms-word.document.macroenabled.12",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            "application/vnd.ms-word.template.macroenabled.12",
            "application/vnd.ms-excel.sheet.macroenabled.12",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            "application/vnd.ms-excel.template.macroenabled.12",
            "application/vnd.ms-excel.addin.macroenabled.12",
            "application/vnd.openxmlformats-officedocument.presentationml.template",
            "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "application/vnd.ms-powerpoint.addin.macroenabled.12",
            "application/vnd.ms-powerpoint.presentation.macroenabled.12",
            "application/vnd.ms-powerpoint.template.macroenabled.12",
            "application/vnd.ms-powerpoint.slideshow.macroenabled.12"
          ]),
          (e.exports.EDAM_INDEXABLE_PLAINTEXT_MIME_TYPES = [
            "application/x-sh",
            "application/x-bsh",
            "application/sql",
            "application/x-sql"
          ]),
          (e.exports.EDAM_COMMERCE_SERVICE_EVERNOTE = "Evernote"),
          (e.exports.EDAM_COMMERCE_SERVICE_GOOGLE = "Google"),
          (e.exports.EDAM_COMMERCE_SERVICE_PAYPAL = "Paypal"),
          (e.exports.EDAM_COMMERCE_SERVICE_PAYPALRT = "PaypalRT"),
          (e.exports.EDAM_COMMERCE_SERVICE_GIFT = "Gift"),
          (e.exports.EDAM_COMMERCE_SERVICE_TRIALPAY = "TrialPay"),
          (e.exports.EDAM_COMMERCE_SERVICE_TRIAL = "Trial"),
          (e.exports.EDAM_COMMERCE_SERVICE_GROUP = "Group"),
          (e.exports.EDAM_COMMERCE_SERVICE_BUNDLE = "Bundle"),
          (e.exports.EDAM_COMMERCE_SERVICE_POINTS = "Points"),
          (e.exports.EDAM_COMMERCE_SERVICE_CYBERSOURCE = "CYBERSRC"),
          (e.exports.EDAM_COMMERCE_SERVICE_ANDROID = "ANDROID"),
          (e.exports.EDAM_COMMERCE_SERVICE_AMAZON = "AMAZON"),
          (e.exports.EDAM_COMMERCE_SERVICE_IPHONE = "ITUNES"),
          (e.exports.EDAM_COMMERCE_SERVICE_IPHONE_SKITCH = "ITUNES_S"),
          (e.exports.EDAM_COMMERCE_SERVICE_MAC = "ITUNES_X"),
          (e.exports.EDAM_COMMERCE_SERVICE_BLACKBERRY = "BB_WORLD"),
          (e.exports.EDAM_COMMERCE_SERVICE_BUSINESS = "BUSINESS"),
          (e.exports.EDAM_COMMERCE_SERVICE_VAULT_CC_ADYEN = "Biz-CC"),
          (e.exports.EDAM_COMMERCE_SERVICE_VAULT_CC_CYBERSOURCE = "BIZ_CYB"),
          (e.exports.EDAM_COMMERCE_SERVICE_VAULT_INVOICE = "Biz-INV"),
          (e.exports.EDAM_COMMERCE_SERVICE_VAULT_TRANSFER = "TRANSFER"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_ALIPAY = "ALIPAY"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_ALIPAY_AUTO_DEBIT = "AlipayAD"),
          (e.exports.EDAM_COMMERCE_SERVICE_ALIPAY_DIRECT = "ALIPAY_D"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_BOKU = "ADY_BOKU"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_CREDITCARD = "ADYEN_CC"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_IDEAL = "IDEAL"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_GIROPAY = "GIROPAY"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_SOFORT = "SOFORT"),
          (e.exports.EDAM_COMMERCE_SERVICE_ADYEN_PAYPAL = "ADYEN_PP"),
          (e.exports.EDAM_COMMERCE_SERVICE_CASH_ON_DELIVERY = "COD"),
          (e.exports.EDAM_COMMERCE_SERVICE_REPLACEMENT = "REPL"),
          (e.exports.EDAM_COMMERCE_SERVICE_RESELLER = "RESELLER"),
          (e.exports.EDAM_COMMERCE_DEFAULT_CURRENCY_COUNTRY_CODE = "USD"),
          (e.exports.EDAM_SEARCH_QUERY_LEN_MIN = 0),
          (e.exports.EDAM_SEARCH_QUERY_LEN_MAX = 1024),
          (e.exports.EDAM_SEARCH_QUERY_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{0,1024}$"),
          (e.exports.EDAM_HASH_LEN = 16),
          (e.exports.EDAM_USER_USERNAME_LEN_MIN = 1),
          (e.exports.EDAM_USER_USERNAME_LEN_MAX = 64),
          (e.exports.EDAM_USER_USERNAME_REGEX = "^[a-z0-9]([a-z0-9_-]{0,62}[a-z0-9])?$"),
          (e.exports.EDAM_USER_NAME_LEN_MIN = 1),
          (e.exports.EDAM_USER_NAME_LEN_MAX = 255),
          (e.exports.EDAM_USER_NAME_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{1,255}$"),
          (e.exports.EDAM_TAG_NAME_LEN_MIN = 1),
          (e.exports.EDAM_TAG_NAME_LEN_MAX = 100),
          (e.exports.EDAM_TAG_NAME_REGEX = "^[^,\\p{Cc}\\p{Z}]([^,\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^,\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_NOTE_TITLE_LEN_MIN = 1),
          (e.exports.EDAM_NOTE_TITLE_LEN_MAX = 255),
          (e.exports.EDAM_NOTE_TITLE_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,253}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_NOTE_CONTENT_LEN_MIN = 0),
          (e.exports.EDAM_NOTE_CONTENT_LEN_MAX = 5242880),
          (e.exports.EDAM_APPLICATIONDATA_NAME_LEN_MIN = 3),
          (e.exports.EDAM_APPLICATIONDATA_NAME_LEN_MAX = 32),
          (e.exports.EDAM_APPLICATIONDATA_VALUE_LEN_MIN = 0),
          (e.exports.EDAM_APPLICATIONDATA_VALUE_LEN_MAX = 4092),
          (e.exports.EDAM_APPLICATIONDATA_ENTRY_LEN_MAX = 4095),
          (e.exports.EDAM_APPLICATIONDATA_NAME_REGEX = "^[A-Za-z0-9_.-]{3,32}$"),
          (e.exports.EDAM_APPLICATIONDATA_VALUE_REGEX = "^[\\p{Space}[^\\p{Cc}]]{0,4092}$"),
          (e.exports.EDAM_NOTEBOOK_NAME_LEN_MIN = 1),
          (e.exports.EDAM_NOTEBOOK_NAME_LEN_MAX = 100),
          (e.exports.EDAM_NOTEBOOK_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_NOTEBOOK_STACK_LEN_MIN = 1),
          (e.exports.EDAM_NOTEBOOK_STACK_LEN_MAX = 100),
          (e.exports.EDAM_NOTEBOOK_STACK_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_WORKSPACE_NAME_LEN_MIN = 1),
          (e.exports.EDAM_WORKSPACE_NAME_LEN_MAX = 100),
          (e.exports.EDAM_WORKSPACE_DESCRIPTION_LEN_MAX = 300),
          (e.exports.EDAM_WORKSPACE_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_PUBLISHING_URI_LEN_MIN = 1),
          (e.exports.EDAM_PUBLISHING_URI_LEN_MAX = 255),
          (e.exports.EDAM_PUBLISHING_URI_REGEX = "^[a-zA-Z0-9.~_+-]{1,255}$"),
          (e.exports.EDAM_PUBLISHING_URI_PROHIBITED = [".", ".."]),
          (e.exports.EDAM_PUBLISHING_DESCRIPTION_LEN_MIN = 1),
          (e.exports.EDAM_PUBLISHING_DESCRIPTION_LEN_MAX = 200),
          (e.exports.EDAM_PUBLISHING_DESCRIPTION_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,198}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_SAVED_SEARCH_NAME_LEN_MIN = 1),
          (e.exports.EDAM_SAVED_SEARCH_NAME_LEN_MAX = 100),
          (e.exports.EDAM_SAVED_SEARCH_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_USER_PASSWORD_LEN_MIN = 6),
          (e.exports.EDAM_USER_PASSWORD_LEN_MAX = 64),
          (e.exports.EDAM_USER_PASSWORD_REGEX = "^[A-Za-z0-9!#$%&'()*+,./:;<=>?@^_`{|}~\\[\\]\\\\-]{6,64}$"),
          (e.exports.EDAM_BUSINESS_URI_LEN_MAX = 32),
          (e.exports.EDAM_BUSINESS_MARKETING_CODE_REGEX_PATTERN = "[A-Za-z0-9-]{1,128}"),
          (e.exports.EDAM_NOTE_TAGS_MAX = 100),
          (e.exports.EDAM_NOTE_RESOURCES_MAX = 1e3),
          (e.exports.EDAM_USER_TAGS_MAX = 1e5),
          (e.exports.EDAM_BUSINESS_TAGS_MAX = 1e5),
          (e.exports.EDAM_USER_SAVED_SEARCHES_MAX = 100),
          (e.exports.EDAM_USER_NOTES_MAX = 1e5),
          (e.exports.EDAM_BUSINESS_NOTES_MAX = 5e5),
          (e.exports.EDAM_USER_NOTEBOOKS_MAX = 250),
          (e.exports.EDAM_PREMIUM_USER_NOTEBOOKS_MAX = 1e3),
          (e.exports.EDAM_USER_WORKSPACES_MAX = 0),
          (e.exports.EDAM_BUSINESS_NOTEBOOKS_MAX = 1e4),
          (e.exports.EDAM_BUSINESS_WORKSPACES_MAX = 1e4),
          (e.exports.EDAM_USER_RECENT_MAILED_ADDRESSES_MAX = 10),
          (e.exports.EDAM_USER_MAIL_LIMIT_DAILY_FREE = 50),
          (e.exports.EDAM_USER_MAIL_LIMIT_DAILY_PREMIUM = 200),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_FREE = 62914560),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_PREMIUM = 10737418240),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_PROFESSIONAL = 21474836480),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS_FIRST_MONTH = 53687091200),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS_NEXT_MONTH = 21474836480),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_PLUS = 1073741824),
          (e.exports.EDAM_USER_UPLOAD_SURVEY_THRESHOLD = 5368709120),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS = 10737418240),
          (e.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS_PER_USER = 2147483647),
          (e.exports.EDAM_NOTE_SIZE_MAX_FREE = 26214400),
          (e.exports.EDAM_NOTE_SIZE_MAX_PREMIUM = 209715200),
          (e.exports.EDAM_RESOURCE_SIZE_MAX_FREE = 26214400),
          (e.exports.EDAM_RESOURCE_SIZE_MAX_PREMIUM = 209715200),
          (e.exports.EDAM_USER_LINKED_NOTEBOOK_MAX = 100),
          (e.exports.EDAM_USER_LINKED_NOTEBOOK_MAX_PREMIUM = 500),
          (e.exports.EDAM_USER_LINKED_NOTEBOOK_MAX_BUSINESS = 2e3),
          (e.exports.EDAM_NOTEBOOK_BUSINESS_SHARED_NOTEBOOK_MAX = 5e3),
          (e.exports.EDAM_NOTEBOOK_PERSONAL_SHARED_NOTEBOOK_MAX = 500),
          (e.exports.EDAM_NOTE_BUSINESS_SHARED_NOTE_MAX = 1e3),
          (e.exports.EDAM_NOTE_PERSONAL_SHARED_NOTE_MAX = 100),
          (e.exports.EDAM_NOTE_CONTENT_CLASS_LEN_MIN = 3),
          (e.exports.EDAM_NOTE_CONTENT_CLASS_LEN_MAX = 32),
          (e.exports.EDAM_NOTE_CONTENT_CLASS_REGEX = "^[A-Za-z0-9_.-]{3,32}$"),
          (e.exports.EDAM_HELLO_APP_CONTENT_CLASS_PREFIX = "evernote.hello."),
          (e.exports.EDAM_FOOD_APP_CONTENT_CLASS_PREFIX = "evernote.food."),
          (e.exports.EDAM_CONTENT_CLASS_HELLO_ENCOUNTER = "evernote.hello.encounter"),
          (e.exports.EDAM_CONTENT_CLASS_HELLO_PROFILE = "evernote.hello.profile"),
          (e.exports.EDAM_CONTENT_CLASS_FOOD_MEAL = "evernote.food.meal"),
          (e.exports.EDAM_CONTENT_CLASS_SKITCH_PREFIX = "evernote.skitch"),
          (e.exports.EDAM_CONTENT_CLASS_SKITCH = "evernote.skitch"),
          (e.exports.EDAM_CONTENT_CLASS_SKITCH_PDF = "evernote.skitch.pdf"),
          (e.exports.EDAM_CONTENT_CLASS_PENULTIMATE_PREFIX = "evernote.penultimate."),
          (e.exports.EDAM_CONTENT_CLASS_PENULTIMATE_NOTEBOOK = "evernote.penultimate.notebook"),
          (e.exports.EDAM_SOURCE_APPLICATION_POSTIT = "postit"),
          (e.exports.EDAM_SOURCE_APPLICATION_MOLESKINE = "moleskine"),
          (e.exports.EDAM_SOURCE_APPLICATION_EN_SCANSNAP = "scanner.scansnap.evernote"),
          (e.exports.EDAM_SOURCE_APPLICATION_EWC = "clipncite.web"),
          (e.exports.EDAM_SOURCE_APPLICATION_ANDROID_SHARE_EXTENSION = "android.clipper.evernote"),
          (e.exports.EDAM_SOURCE_APPLICATION_IOS_SHARE_EXTENSION = "ios.clipper.evernote"),
          (e.exports.EDAM_SOURCE_APPLICATION_WEB_CLIPPER = "webclipper.evernote"),
          (e.exports.EDAM_SOURCE_OUTLOOK_CLIPPER = "app.ms.outlook"),
          (e.exports.EDAM_NOTE_TITLE_QUALITY_UNTITLED = 0),
          (e.exports.EDAM_NOTE_TITLE_QUALITY_LOW = 1),
          (e.exports.EDAM_NOTE_TITLE_QUALITY_MEDIUM = 2),
          (e.exports.EDAM_NOTE_TITLE_QUALITY_HIGH = 3),
          (e.exports.EDAM_RELATED_PLAINTEXT_LEN_MIN = 1),
          (e.exports.EDAM_RELATED_PLAINTEXT_LEN_MAX = 131072),
          (e.exports.EDAM_RELATED_MAX_NOTES = 25),
          (e.exports.EDAM_RELATED_MAX_NOTEBOOKS = 1),
          (e.exports.EDAM_RELATED_MAX_TAGS = 25),
          (e.exports.EDAM_RELATED_MAX_EXPERTS = 10),
          (e.exports.EDAM_RELATED_MAX_RELATED_CONTENT = 10),
          (e.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN = 0),
          (e.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX = 200),
          (e.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,198}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_BUSINESS_PHONE_NUMBER_LEN_MAX = 20),
          (e.exports.EDAM_PREFERENCE_NAME_LEN_MIN = 3),
          (e.exports.EDAM_PREFERENCE_NAME_LEN_MAX = 32),
          (e.exports.EDAM_PREFERENCE_VALUE_LEN_MIN = 1),
          (e.exports.EDAM_PREFERENCE_VALUE_LEN_MAX = 1024),
          (e.exports.EDAM_MAX_PREFERENCES = 100),
          (e.exports.EDAM_MAX_VALUES_PER_PREFERENCE = 256),
          (e.exports.EDAM_PREFERENCE_ONLY_ONE_VALUE_LEN_MAX = 16384),
          (e.exports.EDAM_PREFERENCE_NAME_REGEX = "^[A-Za-z0-9_.-]{3,32}$"),
          (e.exports.EDAM_PREFERENCE_VALUE_REGEX = "^[^\\p{Cc}]{1,1024}$"),
          (e.exports.EDAM_PREFERENCE_ONLY_ONE_VALUE_REGEX = "^[^\\p{Cc}]{1,16384}$"),
          (e.exports.EDAM_PREFERENCE_SHORTCUTS = "evernote.shortcuts"),
          (e.exports.EDAM_PREFERENCE_BUSINESS_DEFAULT_NOTEBOOK = "evernote.business.notebook"),
          (e.exports.EDAM_PREFERENCE_BUSINESS_QUICKNOTE = "evernote.business.quicknote"),
          (e.exports.EDAM_PREFERENCE_SHORTCUTS_MAX_VALUES = 250),
          (e.exports.EDAM_DEVICE_ID_LEN_MAX = 32),
          (e.exports.EDAM_DEVICE_ID_REGEX = "^[^\\p{Cc}]{1,32}$"),
          (e.exports.EDAM_DEVICE_DESCRIPTION_LEN_MAX = 64),
          (e.exports.EDAM_DEVICE_DESCRIPTION_REGEX = "^[^\\p{Cc}]{1,64}$"),
          (e.exports.EDAM_SEARCH_SUGGESTIONS_MAX = 10),
          (e.exports.EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MAX = 1024),
          (e.exports.EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MIN = 2),
          (e.exports.EDAM_FIND_CONTACT_DEFAULT_MAX_RESULTS = 100),
          (e.exports.EDAM_FIND_CONTACT_MAX_RESULTS = 256),
          (e.exports.EDAM_NOTE_LOCK_VIEWERS_NOTES_MAX = 150),
          (e.exports.EDAM_GET_ORDERS_MAX_RESULTS = 2e3),
          (e.exports.EDAM_MESSAGE_BODY_LEN_MAX = 2048),
          (e.exports.EDAM_MESSAGE_BODY_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,2046}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_MESSAGE_RECIPIENTS_MAX = 50),
          (e.exports.EDAM_MESSAGE_ATTACHMENTS_MAX = 100),
          (e.exports.EDAM_MESSAGE_ATTACHMENT_TITLE_LEN_MAX = 255),
          (e.exports.EDAM_MESSAGE_ATTACHMENT_TITLE_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,253}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_MESSAGE_ATTACHMENT_SNIPPET_LEN_MAX = 2048),
          (e.exports.EDAM_MESSAGE_ATTACHMENT_SNIPPET_REGEX = "^[^\\p{Cc}\\p{Z}]([\\n[^\\p{Cc}\\p{Zl}\\p{Zp}]]{0,2046}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.EDAM_USER_PROFILE_PHOTO_MAX_BYTES = 716800),
          (e.exports.EDAM_PROMOTION_ID_LEN_MAX = 32),
          (e.exports.EDAM_PROMOTION_ID_REGEX = "^[A-Za-z0-9_.-]{1,32}$"),
          (e.exports.EDAM_APP_RATING_MIN = 1),
          (e.exports.EDAM_APP_RATING_MAX = 5),
          (e.exports.EDAM_SNIPPETS_NOTES_MAX = 24),
          (e.exports.EDAM_CONNECTED_IDENTITY_REQUEST_MAX = 100),
          (e.exports.EDAM_OPEN_ID_ACCESS_TOKEN_MAX = 1e3),
          (e.exports.EDAM_PREFERENCE_WORKCHATACTIVE = "evernote.workchatactive"),
          (e.exports.EDAM_PREFERENCE_WORKCHATACTIVE_TIMESPAN = 31556952e3);
      },
      60136: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(77915);
        (e.exports.RecipientType = { USER: 1, BUSINESS: 2 }),
          (e.exports.EntityPrivilegeLevel = { READ: 1, EDIT: 2 }),
          (e.exports.PrivilegeSharing = { MANAGE: 1 }),
          (e.exports.PrivilegeValues = i.Struct.define("PrivilegeValues", {
            1: { alias: "level", type: i.Type.I32 },
            2: { alias: "sharing", type: i.Type.I32 }
          })),
          (e.exports.InvitationCommon = i.Struct.define("InvitationCommon", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "entityOwnerId", type: i.Type.I32 },
            3: { alias: "sharerUserId", type: i.Type.I32 },
            4: { alias: "serviceCreated", type: i.Type.I64 },
            5: { alias: "serviceUpdated", type: i.Type.I64 },
            6: { alias: "serviceAssigned", type: i.Type.I64 },
            7: { alias: "membershipGuid", type: i.Type.STRING }
          })),
          (e.exports.InternalInvitation = i.Struct.define("InternalInvitation", {
            1: { alias: "common", type: i.Type.STRUCT, def: e.exports.InvitationCommon },
            2: { alias: "entityType", type: i.Type.I32 },
            3: { alias: "entityId", type: i.Type.I64 },
            4: { alias: "privilegeValues", type: i.Type.STRUCT, def: e.exports.PrivilegeValues },
            5: { alias: "identity", type: i.Type.STRUCT, def: n.Identity },
            6: { alias: "entityGuid", type: i.Type.STRING }
          })),
          (e.exports.MembershipCommon = i.Struct.define("MembershipCommon", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "recipientType", type: i.Type.I32 },
            3: { alias: "recipientId", type: i.Type.I64 },
            4: { alias: "sharerUserId", type: i.Type.I32 },
            7: { alias: "entityOwnerId", type: i.Type.I32 },
            9: { alias: "serviceCreated", type: i.Type.I64 },
            10: { alias: "serviceUpdated", type: i.Type.I64 }
          })),
          (e.exports.InternalMembership = i.Struct.define("InternalMembership", {
            1: { alias: "common", type: i.Type.STRUCT, def: e.exports.MembershipCommon },
            2: { alias: "entityType", type: i.Type.I32 },
            3: { alias: "entityId", type: i.Type.I64 },
            4: { alias: "privilegeValues", type: i.Type.STRUCT, def: e.exports.PrivilegeValues },
            5: { alias: "entityGuid", type: i.Type.STRING }
          })),
          (e.exports.CreateOrGetInternalInvitationResponse = i.Struct.define("CreateOrGetInternalInvitationResponse", {
            1: { alias: "invitation", type: i.Type.STRUCT, def: e.exports.InternalInvitation },
            2: { alias: "created", type: i.Type.BOOL }
          }));
      },
      27909: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965),
          a = s(77915);
        (e.exports.MessageAttachmentType = { NOTE: 1, NOTEBOOK: 2 }),
          (e.exports.PaginationDirection = { OLDER: 1, NEWER: 2 }),
          (e.exports.MessageThreadChangeType = { PARTICIPANT_ADDED: 1, PARTICIPANT_REMOVED: 2, MESSAGE_THREAD_RENAMED: 3 }),
          (e.exports.EDAM_MESSAGE_NEWEST_MESSAGE_ID = -1),
          (e.exports.EDAM_MESSAGE_THREAD_CHANGE_SOMEBODY_USER_ID = 2147483647),
          (e.exports.FIND_MESSAGE_FIELD_ID = "id"),
          (e.exports.FIND_MESSAGE_FIELD_SENDER_ID = "senderId"),
          (e.exports.FIND_MESSAGE_FIELD_THREAD_ID = "threadId"),
          (e.exports.FIND_MESSAGE_FIELD_SENT_AT = "sentAt"),
          (e.exports.FIND_MESSAGE_FIELD_BODY = "body"),
          (e.exports.FIND_MESSAGE_FIELD_RESHARE_MESSAGE = "reshareMessage"),
          (e.exports.FIND_MESSAGE_FIELD_DESTINATION_IDENTITY_IDS = "destinationIdentityIds"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_GUID = "attachmentGuid"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_SHARD = "attachmentShardId"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_TYPE = "attachmentType"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_TITLE = "attachmentTitle"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_SNIPPET = "attachmentSnippet"),
          (e.exports.FIND_MESSAGE_FIELD_ATTACHMENT_USER_ID = "attachmentUserId"),
          (e.exports.EDAM_MESSAGE_THREAD_NAME_LEN_MIN = 1),
          (e.exports.EDAM_MESSAGE_THREAD_NAME_LEN_MAX = 64),
          (e.exports.EDAM_MESSAGE_THREAD_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,62}[^\\p{Cc}\\p{Z}])?$"),
          (e.exports.FIND_MESSAGE_FIELDS = [
            "id",
            "senderId",
            "threadId",
            "sentAt",
            "body",
            "attachmentGuid",
            "attachmentShardId",
            "attachmentType",
            "attachmentTitle",
            "attachmentSnippet"
          ]),
          (e.exports.MessageAttachment = i.Struct.define("MessageAttachment", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "shardId", type: i.Type.STRING },
            3: { alias: "type", type: i.Type.I32 },
            4: { alias: "title", type: i.Type.STRING },
            5: { alias: "snippet", type: i.Type.STRING },
            6: { alias: "noteStoreUrl", type: i.Type.STRING },
            7: { alias: "userId", type: i.Type.I32 },
            8: { alias: "webApiUrlPrefix", type: i.Type.STRING }
          })),
          (e.exports.MessageThreadChange = i.Struct.define("MessageThreadChange", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "changeType", type: i.Type.I32 },
            3: { alias: "messageThreadId", type: i.Type.I64 },
            4: { alias: "changedByUserId", type: i.Type.I32 },
            5: { alias: "changedAt", type: i.Type.I64 },
            6: { alias: "eventId", type: i.Type.I64 },
            7: { alias: "stringValue", type: i.Type.STRING },
            8: { alias: "identityValue", type: i.Type.STRUCT, def: a.Identity }
          })),
          (e.exports.Message = i.Struct.define("Message", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "senderId", type: i.Type.I32 },
            3: { alias: "messageThreadId", type: i.Type.I64 },
            4: { alias: "sentAt", type: i.Type.I64 },
            5: { alias: "body", type: i.Type.STRING },
            6: { alias: "attachments", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MessageAttachment) },
            7: { alias: "eventId", type: i.Type.I64 },
            8: { alias: "reshareMessage", type: i.Type.BOOL },
            9: { alias: "destinationIdentityIds", type: i.Type.SET, def: i.Set.define(i.Type.I64) }
          })),
          (e.exports.MessageThread = i.Struct.define("MessageThread", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "participantIds", type: i.Type.LIST, def: i.List.define(i.Type.I64) },
            3: { alias: "snippet", type: i.Type.STRING },
            4: { alias: "threadMaxMessageId", type: i.Type.I64 },
            5: { alias: "lastMessageSentAt", type: i.Type.I64 },
            6: { alias: "name", type: i.Type.STRING },
            8: { alias: "groupThread", type: i.Type.BOOL },
            9: { alias: "threadMaxUserMessageId", type: i.Type.I64 }
          })),
          (e.exports.UserThread = i.Struct.define("UserThread", {
            1: { alias: "messageThread", type: i.Type.STRUCT, def: e.exports.MessageThread },
            2: { alias: "lastReadMessageId", type: i.Type.I64 },
            3: { alias: "maxDeletedMessageId", type: i.Type.I64 },
            4: { alias: "eventId", type: i.Type.I64 }
          })),
          (e.exports.Destination = i.Struct.define("Destination", {
            1: { alias: "messageThreadId", type: i.Type.I64 },
            2: { alias: "recipients", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact) }
          })),
          (e.exports.UserMessagingInfo = i.Struct.define("UserMessagingInfo", {
            1: { alias: "threads", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserThread) },
            2: { alias: "identities", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Identity) }
          })),
          (e.exports.UserThreadInfo = i.Struct.define("UserThreadInfo", {
            1: { alias: "messages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Message) },
            2: { alias: "hasMore", type: i.Type.BOOL },
            3: { alias: "threadChanges", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MessageThreadChange) }
          })),
          (e.exports.MessageFilter = i.Struct.define("MessageFilter", {
            1: { alias: "startMessageId", type: i.Type.I64 },
            2: { alias: "direction", type: i.Type.I32 }
          })),
          (e.exports.MessageSyncFilter = i.Struct.define("MessageSyncFilter", { 1: { alias: "afterEventId", type: i.Type.I64 } })),
          (e.exports.MessageSyncChunk = i.Struct.define("MessageSyncChunk", {
            1: { alias: "chunkMaxEventId", type: i.Type.I64 },
            2: { alias: "userMaxEventId", type: i.Type.I64 },
            3: { alias: "threads", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserThread) },
            4: { alias: "messages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Message) },
            5: { alias: "identities", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Identity) },
            6: { alias: "threadChanges", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MessageThreadChange) }
          })),
          (e.exports.FindMessagesFilter = i.Struct.define("FindMessagesFilter", {
            1: { alias: "query", type: i.Type.STRING },
            2: { alias: "sortField", type: i.Type.STRING },
            3: { alias: "reverse", type: i.Type.BOOL },
            4: { alias: "includeBlocked", type: i.Type.BOOL }
          })),
          (e.exports.FindMessagesResultSpec = i.Struct.define("FindMessagesResultSpec", {
            1: { alias: "includeBody", type: i.Type.BOOL },
            2: { alias: "includeAttachments", type: i.Type.BOOL },
            3: { alias: "includeDestinationIdentityIds", type: i.Type.BOOL }
          })),
          (e.exports.FindMessagesPagination = i.Struct.define("FindMessagesPagination", {
            1: { alias: "afterMessageId", type: i.Type.I64 },
            2: { alias: "afterOffset", type: i.Type.I32 }
          })),
          (e.exports.FindMessagesResult = i.Struct.define("FindMessagesResult", {
            1: { alias: "messages", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Message) },
            2: { alias: "totalMatched", type: i.Type.I32 },
            3: { alias: "nextPagination", type: i.Type.STRUCT, def: e.exports.FindMessagesPagination }
          })),
          (e.exports.CreateMessageThreadSpec = i.Struct.define("CreateMessageThreadSpec", {
            1: { alias: "message", type: i.Type.STRUCT, def: e.exports.Message },
            2: { alias: "participants", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact) },
            3: { alias: "messageThreadName", type: i.Type.STRING },
            4: { alias: "groupThread", type: i.Type.BOOL },
            5: { alias: "readStatus", type: i.Type.BOOL }
          })),
          (e.exports.CreateMessageThreadResult = i.Struct.define("CreateMessageThreadResult", {
            1: { alias: "messageId", type: i.Type.I64 },
            2: { alias: "messageThreadId", type: i.Type.I64 },
            3: { alias: "participantIds", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          })),
          (e.exports.UpdateParticipantsSpec = i.Struct.define("UpdateParticipantsSpec", {
            1: { alias: "threadId", type: i.Type.I64 },
            2: { alias: "participantsToAdd", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact) },
            3: { alias: "participantsToRemove", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          })),
          (e.exports.UpdateParticipantsResult = i.Struct.define("UpdateParticipantsResult", {
            1: { alias: "participantIdsToContact", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, a.Contact) }
          })),
          (e.exports.ReinviteContactResult = i.Struct.define("ReinviteContactResult", {
            1: { alias: "participantIds", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          })),
          (e.exports.DateFilter = i.Struct.define("DateFilter", { 1: { alias: "sinceTimestamp", type: i.Type.I64 } }));
        var o = (e.exports.MessageStore = {});
        function r(e) {
          (this.output = e), (this.seqid = 0);
        }
        function p(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), o))
            e[n] && this.processor.addMethod(o[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (o.sendMessage = i.Method.define({
          alias: "sendMessage",
          args: i.Struct.define("sendMessageArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "message", type: i.Type.STRUCT, def: e.exports.Message, index: 1 },
            3: { alias: "destination", type: i.Type.STRUCT, def: e.exports.Destination, index: 2 }
          }),
          result: i.Struct.define("sendMessageResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Message },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
            3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
          })
        })),
          (o.sendMessageToThread = i.Method.define({
            alias: "sendMessageToThread",
            args: i.Struct.define("sendMessageToThreadArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "message", type: i.Type.STRUCT, def: e.exports.Message, index: 1 }
            }),
            result: i.Struct.define("sendMessageToThreadResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Message },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.sendMessageToThreadWithoutEmails = i.Method.define({
            alias: "sendMessageToThreadWithoutEmails",
            args: i.Struct.define("sendMessageToThreadWithoutEmailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "message", type: i.Type.STRUCT, def: e.exports.Message, index: 1 }
            }),
            result: i.Struct.define("sendMessageToThreadWithoutEmailsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Message },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.createMessageThread = i.Method.define({
            alias: "createMessageThread",
            args: i.Struct.define("createMessageThreadArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spec", type: i.Type.STRUCT, def: e.exports.CreateMessageThreadSpec, index: 1 }
            }),
            result: i.Struct.define("createMessageThreadResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CreateMessageThreadResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.createMessageThreadWithoutEmails = i.Method.define({
            alias: "createMessageThreadWithoutEmails",
            args: i.Struct.define("createMessageThreadWithoutEmailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spec", type: i.Type.STRUCT, def: e.exports.CreateMessageThreadSpec, index: 1 }
            }),
            result: i.Struct.define("createMessageThreadWithoutEmailsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CreateMessageThreadResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.updateParticipants = i.Method.define({
            alias: "updateParticipants",
            args: i.Struct.define("updateParticipantsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spec", type: i.Type.STRUCT, def: e.exports.UpdateParticipantsSpec, index: 1 }
            }),
            result: i.Struct.define("updateParticipantsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UpdateParticipantsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.reinviteContact = i.Method.define({
            alias: "reinviteContact",
            args: i.Struct.define("reinviteContactArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "contact", type: i.Type.STRUCT, def: a.Contact, index: 2 }
            }),
            result: i.Struct.define("reinviteContactResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ReinviteContactResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.renameMessageThread = i.Method.define({
            alias: "renameMessageThread",
            args: i.Struct.define("renameMessageThreadArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "threadName", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("renameMessageThreadResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.updateReadStatus = i.Method.define({
            alias: "updateReadStatus",
            args: i.Struct.define("updateReadStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "messageId", type: i.Type.I64, index: 2 }
            }),
            result: i.Struct.define("updateReadStatusResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.updateDeleteStatus = i.Method.define({
            alias: "updateDeleteStatus",
            args: i.Struct.define("updateDeleteStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "messageId", type: i.Type.I64, index: 2 }
            }),
            result: i.Struct.define("updateDeleteStatusResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.getMessages = i.Method.define({
            alias: "getMessages",
            args: i.Struct.define("getMessagesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "filter", type: i.Type.STRUCT, def: e.exports.MessageFilter, index: 2 }
            }),
            result: i.Struct.define("getMessagesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UserThreadInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.getThreads = i.Method.define({
            alias: "getThreads",
            args: i.Struct.define("getThreadsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getThreadsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UserMessagingInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.getThreadIdWithUser = i.Method.define({
            alias: "getThreadIdWithUser",
            args: i.Struct.define("getThreadIdWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "user", type: i.Type.STRUCT, def: a.User, index: 1 }
            }),
            result: i.Struct.define("getThreadIdWithUserResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.getMessageSyncChunk = i.Method.define({
            alias: "getMessageSyncChunk",
            args: i.Struct.define("getMessageSyncChunkArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.MessageSyncFilter, index: 1 }
            }),
            result: i.Struct.define("getMessageSyncChunkResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MessageSyncChunk },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.updateBlockStatus = i.Method.define({
            alias: "updateBlockStatus",
            args: i.Struct.define("updateBlockStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 },
              3: { alias: "blockStatus", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("updateBlockStatusResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.findMessages = i.Method.define({
            alias: "findMessages",
            args: i.Struct.define("findMessagesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.FindMessagesFilter, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.FindMessagesResultSpec, index: 2 },
              4: { alias: "maxMessages", type: i.Type.I32, index: 3 },
              5: { alias: "pagination", type: i.Type.STRUCT, def: e.exports.FindMessagesPagination, index: 4 }
            }),
            result: i.Struct.define("findMessagesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.FindMessagesResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.validateRecipients = i.Method.define({
            alias: "validateRecipients",
            args: i.Struct.define("validateRecipientsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact), index: 1 }
            }),
            result: i.Struct.define("validateRecipientsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.validateContacts = i.Method.define({
            alias: "validateContacts",
            args: i.Struct.define("validateContactsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact), index: 1 }
            }),
            result: i.Struct.define("validateContactsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: n.EDAMInvalidContactsException }
            })
          })),
          (o.getAttachmentMessagesReceived = i.Method.define({
            alias: "getAttachmentMessagesReceived",
            args: i.Struct.define("getAttachmentMessagesReceivedArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getAttachmentMessagesReceivedResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Message) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.hasNonEmptyMessages = i.Method.define({
            alias: "hasNonEmptyMessages",
            args: i.Struct.define("hasNonEmptyMessagesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "dateFilter", type: i.Type.STRUCT, def: e.exports.DateFilter, index: 1 }
            }),
            result: i.Struct.define("hasNonEmptyMessagesResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.prototype.sendMessage = function (e, t, s, i) {
            var n = o.sendMessage,
              a = new n.args();
            (a.authenticationToken = e), (a.message = t), (a.destination = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.sendMessageToThread = function (e, t, s) {
            var i = o.sendMessageToThread,
              n = new i.args();
            (n.authenticationToken = e), (n.message = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.sendMessageToThreadWithoutEmails = function (e, t, s) {
            var i = o.sendMessageToThreadWithoutEmails,
              n = new i.args();
            (n.authenticationToken = e), (n.message = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.createMessageThread = function (e, t, s) {
            var i = o.createMessageThread,
              n = new i.args();
            (n.authenticationToken = e), (n.spec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.createMessageThreadWithoutEmails = function (e, t, s) {
            var i = o.createMessageThreadWithoutEmails,
              n = new i.args();
            (n.authenticationToken = e), (n.spec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.updateParticipants = function (e, t, s) {
            var i = o.updateParticipants,
              n = new i.args();
            (n.authenticationToken = e), (n.spec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.reinviteContact = function (e, t, s, i) {
            var n = o.reinviteContact,
              a = new n.args();
            (a.authenticationToken = e), (a.threadId = t), (a.contact = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.renameMessageThread = function (e, t, s, i) {
            var n = o.renameMessageThread,
              a = new n.args();
            (a.authenticationToken = e), (a.threadId = t), (a.threadName = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.updateReadStatus = function (e, t, s, i) {
            var n = o.updateReadStatus,
              a = new n.args();
            (a.authenticationToken = e), (a.threadId = t), (a.messageId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.updateDeleteStatus = function (e, t, s, i) {
            var n = o.updateDeleteStatus,
              a = new n.args();
            (a.authenticationToken = e), (a.threadId = t), (a.messageId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.getMessages = function (e, t, s, i) {
            var n = o.getMessages,
              a = new n.args();
            (a.authenticationToken = e), (a.threadId = t), (a.filter = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.getThreads = function (e, t) {
            var s = o.getThreads,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.getThreadIdWithUser = function (e, t, s) {
            var i = o.getThreadIdWithUser,
              n = new i.args();
            (n.authenticationToken = e), (n.user = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.getMessageSyncChunk = function (e, t, s) {
            var i = o.getMessageSyncChunk,
              n = new i.args();
            (n.authenticationToken = e), (n.filter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.updateBlockStatus = function (e, t, s, i) {
            var n = o.updateBlockStatus,
              a = new n.args();
            (a.authenticationToken = e), (a.userId = t), (a.blockStatus = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (r.prototype.findMessages = function (e, t, s, i, n, a) {
            var r = o.findMessages,
              p = new r.args();
            (p.authenticationToken = e),
              (p.filter = t),
              (p.resultSpec = s),
              (p.maxMessages = i),
              (p.pagination = n),
              r.sendRequest(this.output, this.seqid++, p, a);
          }),
          (r.prototype.validateRecipients = function (e, t, s) {
            var i = o.validateRecipients,
              n = new i.args();
            (n.authenticationToken = e), (n.contacts = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.validateContacts = function (e, t, s) {
            var i = o.validateContacts,
              n = new i.args();
            (n.authenticationToken = e), (n.contacts = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (r.prototype.getAttachmentMessagesReceived = function (e, t) {
            var s = o.getAttachmentMessagesReceived,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.hasNonEmptyMessages = function (e, t, s) {
            var i = o.hasNonEmptyMessages,
              n = new i.args();
            (n.authenticationToken = e), (n.dateFilter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.MessageStore.Client = r),
          (p.prototype.start = function () {
            this.stransport.listen();
          }),
          (p.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.MessageStore.Server = p);
      },
      35137: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(60570),
          a = s(88606),
          o = s(77915),
          r = s(52965);
        s(48412),
          (e.exports.UserSetting = { RECEIVE_REMINDER_EMAIL: 1, TIMEZONE: 2 }),
          (e.exports.ShareRelationshipPrivilegeLevel = {
            READ_NOTEBOOK: 0,
            READ_NOTEBOOK_PLUS_ACTIVITY: 10,
            MODIFY_NOTEBOOK_PLUS_ACTIVITY: 20,
            FULL_ACCESS: 30
          }),
          (e.exports.SearchScope = { PERSONAL: 0, BUSINESS: 1 }),
          (e.exports.NoteAccessType = { PERSONAL: 0, SHARED: 1, PUBLIC: 2, BUSINESS: 3, SHARED_NOTE: 4 }),
          (e.exports.WorkspaceUserInterfaceLayoutStyle = { LIST: 0, BOARD: 1 }),
          (e.exports.ClientSyncRateConfig = i.Struct.define("ClientSyncRateConfig", {
            1: { alias: "syncStateIntervalMillis", type: i.Type.I64 },
            2: { alias: "updateNoteWhenIdleForMillis", type: i.Type.I64 },
            3: { alias: "updateNoteDuringEditIntervalMillis", type: i.Type.I64 }
          })),
          (e.exports.SyncState = i.Struct.define("SyncState", {
            1: { alias: "currentTime", type: i.Type.I64 },
            2: { alias: "fullSyncBefore", type: i.Type.I64 },
            3: { alias: "updateCount", type: i.Type.I32 },
            4: { alias: "uploaded", type: i.Type.I64 },
            5: { alias: "userLastUpdated", type: i.Type.I64 },
            6: { alias: "userMaxMessageEventId", type: i.Type.I64 },
            7: { alias: "businessSummaryUpdated", type: i.Type.I64 },
            8: { alias: "communicationEngineUpdateId", type: i.Type.I32 },
            9: { alias: "currentDevicesUsed", type: i.Type.I32 },
            10: { alias: "showChoiceScreen", type: i.Type.BOOL },
            11: { alias: "clientSyncRateConfig", type: i.Type.STRUCT, def: e.exports.ClientSyncRateConfig },
            12: { alias: "businessUsersUpdateCount", type: i.Type.I64 }
          })),
          (e.exports.Preferences = i.Struct.define("Preferences", {
            1: { alias: "updateSequenceNum", type: i.Type.I32 },
            2: { alias: "preferences", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.LIST, i.List.define(i.Type.STRING)) }
          })),
          (e.exports.SyncChunk = i.Struct.define("SyncChunk", {
            1: { alias: "currentTime", type: i.Type.I64 },
            2: { alias: "chunkHighUSN", type: i.Type.I32 },
            3: { alias: "updateCount", type: i.Type.I32 },
            4: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Note) },
            5: { alias: "notebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) },
            19: { alias: "workspaces", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.WorkspaceResponse) },
            6: { alias: "tags", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Tag) },
            7: { alias: "searches", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.SavedSearch) },
            8: { alias: "resources", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Resource) },
            9: { alias: "expungedNotes", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            10: { alias: "expungedNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            20: { alias: "expungedWorkspaces", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            11: { alias: "expungedTags", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            12: { alias: "expungedSearches", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            13: { alias: "linkedNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.LinkedNotebook) },
            14: { alias: "expungedLinkedNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            15: { alias: "preferences", type: i.Type.STRUCT, def: e.exports.Preferences },
            16: { alias: "notesNoLongerSharedWithMe", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            17: { alias: "linkedAccounts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.LinkedAccount) },
            18: { alias: "expungedLinkedAccounts", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            21: { alias: "prevChunkHighUSN", type: i.Type.I32 }
          })),
          (e.exports.SyncChunkFilter = i.Struct.define("SyncChunkFilter", {
            1: { alias: "includeNotes", type: i.Type.BOOL },
            2: { alias: "includeNoteResources", type: i.Type.BOOL },
            3: { alias: "includeNoteAttributes", type: i.Type.BOOL },
            4: { alias: "includeNotebooks", type: i.Type.BOOL },
            5: { alias: "includeTags", type: i.Type.BOOL },
            6: { alias: "includeSearches", type: i.Type.BOOL },
            7: { alias: "includeResources", type: i.Type.BOOL },
            8: { alias: "includeLinkedNotebooks", type: i.Type.BOOL },
            9: { alias: "includeExpunged", type: i.Type.BOOL },
            10: { alias: "includeNoteApplicationDataFullMap", type: i.Type.BOOL },
            12: { alias: "includeResourceApplicationDataFullMap", type: i.Type.BOOL },
            13: { alias: "includeNoteResourceApplicationDataFullMap", type: i.Type.BOOL },
            14: { alias: "includePreferences", type: i.Type.BOOL },
            17: { alias: "includeSharedNotes", type: i.Type.BOOL },
            18: { alias: "includeNotesSharedWithMe", type: i.Type.BOOL },
            20: { alias: "includeLinkedAccounts", type: i.Type.BOOL },
            16: { alias: "omitSharedNotebooks", type: i.Type.BOOL },
            11: { alias: "requireNoteContentClass", type: i.Type.STRING },
            15: { alias: "notebookGuids", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            19: { alias: "inAccountUserId", type: i.Type.I32 },
            22: { alias: "includeWorkspaces", type: i.Type.BOOL },
            21: { alias: "includeWorkspacesContent", type: i.Type.BOOL },
            24: { alias: "includeWorkspacesWithoutMembership", type: i.Type.BOOL },
            23: { alias: "workspaceGuids", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            25: { alias: "reverseOrder", type: i.Type.BOOL }
          })),
          (e.exports.ResultFilter = i.Struct.define("ResultFilter", {
            1: { alias: "type", type: i.Type.STRING },
            2: { alias: "value", type: i.Type.STRING },
            3: { alias: "displayValue", type: i.Type.STRING }
          })),
          (e.exports.ContainerInfo = i.Struct.define("ContainerInfo", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "type", type: i.Type.I32 }
          })),
          (e.exports.NoteFilter = i.Struct.define("NoteFilter", {
            1: { alias: "order", type: i.Type.I32 },
            2: { alias: "ascending", type: i.Type.BOOL },
            3: { alias: "words", type: i.Type.STRING },
            4: { alias: "notebookGuid", type: i.Type.STRING },
            5: { alias: "tagGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "timeZone", type: i.Type.STRING },
            7: { alias: "inactive", type: i.Type.BOOL },
            8: { alias: "emphasized", type: i.Type.STRING },
            9: { alias: "includeAllReadableNotebooks", type: i.Type.BOOL },
            15: { alias: "includeAllReadableWorkspaces", type: i.Type.BOOL },
            10: { alias: "context", type: i.Type.STRING },
            11: { alias: "rawWords", type: i.Type.STRING },
            12: { alias: "searchContextBytes", type: i.Type.BINARY },
            13: { alias: "selectedFilters", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ResultFilter) },
            14: { alias: "scope", type: i.Type.STRUCT, def: e.exports.ContainerInfo }
          })),
          (e.exports.FilteredSearchRequest = i.Struct.define("FilteredSearchRequest", {
            1: { alias: "searchContextBytes", type: i.Type.BINARY },
            2: { alias: "processedQuery", type: i.Type.STRING },
            3: { alias: "rawQuery", type: i.Type.STRING },
            4: { alias: "notebookGuid", type: i.Type.STRING },
            5: { alias: "tagGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "timeZone", type: i.Type.STRING },
            7: { alias: "inactive", type: i.Type.BOOL },
            8: { alias: "includeAllReadableNotebooks", type: i.Type.BOOL },
            9: { alias: "offset", type: i.Type.I32 },
            10: { alias: "maxResults", type: i.Type.I32 },
            11: { alias: "selectedFilters", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ResultFilter) },
            12: { alias: "order", type: i.Type.I32 },
            13: { alias: "ascending", type: i.Type.BOOL }
          })),
          (e.exports.NoteList = i.Struct.define("NoteList", {
            1: { alias: "startIndex", type: i.Type.I32 },
            2: { alias: "totalNotes", type: i.Type.I32 },
            3: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Note) },
            4: { alias: "stoppedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            5: { alias: "searchedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "updateCount", type: i.Type.I32 },
            7: { alias: "searchContextBytes", type: i.Type.BINARY },
            8: { alias: "debugInfo", type: i.Type.STRING }
          })),
          (e.exports.NoteMetadata = i.Struct.define("NoteMetadata", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "title", type: i.Type.STRING },
            5: { alias: "contentLength", type: i.Type.I32 },
            6: { alias: "created", type: i.Type.I64 },
            7: { alias: "updated", type: i.Type.I64 },
            8: { alias: "deleted", type: i.Type.I64 },
            10: { alias: "updateSequenceNum", type: i.Type.I32 },
            11: { alias: "notebookGuid", type: i.Type.STRING },
            12: { alias: "tagGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            14: { alias: "attributes", type: i.Type.STRUCT, def: o.NoteAttributes },
            20: { alias: "largestResourceMime", type: i.Type.STRING },
            21: { alias: "largestResourceSize", type: i.Type.I32 },
            22: { alias: "score", type: i.Type.DOUBLE }
          })),
          (e.exports.NotesMetadataList = i.Struct.define("NotesMetadataList", {
            1: { alias: "startIndex", type: i.Type.I32 },
            2: { alias: "totalNotes", type: i.Type.I32 },
            3: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteMetadata) },
            4: { alias: "stoppedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            5: { alias: "searchedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "updateCount", type: i.Type.I32 },
            7: { alias: "searchContextBytes", type: i.Type.BINARY },
            8: { alias: "suggestedFilters", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ResultFilter) },
            9: { alias: "debugInfo", type: i.Type.STRING }
          })),
          (e.exports.FilteredSearchResult = i.Struct.define("FilteredSearchResult", {
            1: { alias: "searchContextBytes", type: i.Type.BINARY },
            2: { alias: "startIndex", type: i.Type.I32 },
            3: { alias: "totalNotes", type: i.Type.I32 },
            4: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteMetadata) },
            5: { alias: "stoppedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "searchedWords", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            7: { alias: "suggestedFilters", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ResultFilter) },
            8: { alias: "updateCount", type: i.Type.I32 }
          })),
          (e.exports.NotesMetadataResultSpec = i.Struct.define("NotesMetadataResultSpec", {
            2: { alias: "includeTitle", type: i.Type.BOOL },
            5: { alias: "includeContentLength", type: i.Type.BOOL },
            6: { alias: "includeCreated", type: i.Type.BOOL },
            7: { alias: "includeUpdated", type: i.Type.BOOL },
            8: { alias: "includeDeleted", type: i.Type.BOOL },
            10: { alias: "includeUpdateSequenceNum", type: i.Type.BOOL },
            11: { alias: "includeNotebookGuid", type: i.Type.BOOL },
            12: { alias: "includeTagGuids", type: i.Type.BOOL },
            14: { alias: "includeAttributes", type: i.Type.BOOL },
            20: { alias: "includeLargestResourceMime", type: i.Type.BOOL },
            21: { alias: "includeLargestResourceSize", type: i.Type.BOOL }
          })),
          (e.exports.NoteCollectionCounts = i.Struct.define("NoteCollectionCounts", {
            1: { alias: "notebookCounts", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I32) },
            2: { alias: "tagCounts", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I32) },
            3: { alias: "trashCount", type: i.Type.I32 }
          })),
          (e.exports.NoteResultSpec = i.Struct.define("NoteResultSpec", {
            1: { alias: "includeContent", type: i.Type.BOOL },
            2: { alias: "includeResourcesData", type: i.Type.BOOL },
            3: { alias: "includeResourcesRecognition", type: i.Type.BOOL },
            4: { alias: "includeResourcesAlternateData", type: i.Type.BOOL },
            5: { alias: "includeSharedNotes", type: i.Type.BOOL },
            6: { alias: "includeNoteAppDataValues", type: i.Type.BOOL },
            7: { alias: "includeResourceAppDataValues", type: i.Type.BOOL },
            8: { alias: "includeAccountLimits", type: i.Type.BOOL },
            9: { alias: "pushToNewSync", type: i.Type.BOOL },
            10: { alias: "includeBlobGuid", type: i.Type.BOOL },
            11: { alias: "includeWorkspaceGuid", type: i.Type.BOOL }
          })),
          (e.exports.AdImpressions = i.Struct.define("AdImpressions", {
            1: { alias: "adId", type: i.Type.I32 },
            2: { alias: "impressionCount", type: i.Type.I32 },
            3: { alias: "impressionTime", type: i.Type.I32 }
          })),
          (e.exports.AdParameters = i.Struct.define("AdParameters", {
            2: { alias: "clientLanguage", type: i.Type.STRING },
            4: { alias: "impressions", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.AdImpressions) },
            5: { alias: "supportHtml", type: i.Type.BOOL },
            6: { alias: "clientProperties", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) }
          })),
          (e.exports.NoteEmailParameters = i.Struct.define("NoteEmailParameters", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "note", type: i.Type.STRUCT, def: o.Note },
            3: { alias: "toAddresses", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            4: { alias: "ccAddresses", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            5: { alias: "subject", type: i.Type.STRING },
            6: { alias: "message", type: i.Type.STRING }
          })),
          (e.exports.NoteVersionId = i.Struct.define("NoteVersionId", {
            1: { alias: "updateSequenceNum", type: i.Type.I32 },
            2: { alias: "updated", type: i.Type.I64 },
            3: { alias: "saved", type: i.Type.I64 },
            4: { alias: "title", type: i.Type.STRING },
            5: { alias: "lastEditorId", type: i.Type.I32 }
          })),
          (e.exports.ClientUsageMetrics = i.Struct.define("ClientUsageMetrics", {
            1: { alias: "sessions", type: i.Type.I32 },
            2: { alias: "subjectConsumerKey", type: i.Type.STRING },
            3: { alias: "subjectConsumerSecret", type: i.Type.STRING }
          })),
          (e.exports.RelatedQuery = i.Struct.define("RelatedQuery", {
            1: { alias: "noteGuid", type: i.Type.STRING },
            2: { alias: "plainText", type: i.Type.STRING },
            3: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter },
            4: { alias: "referenceUri", type: i.Type.STRING },
            5: { alias: "context", type: i.Type.STRING },
            6: { alias: "cacheKey", type: i.Type.STRING }
          })),
          (e.exports.RelatedResult = i.Struct.define("RelatedResult", {
            1: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Note) },
            2: { alias: "notebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) },
            3: { alias: "tags", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Tag) },
            4: { alias: "containingNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.NotebookDescriptor) },
            5: { alias: "debugInfo", type: i.Type.STRING },
            6: { alias: "experts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.UserProfile) },
            7: { alias: "relatedContent", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.RelatedContent) },
            8: { alias: "cacheKey", type: i.Type.STRING },
            9: { alias: "cacheExpires", type: i.Type.I32 }
          })),
          (e.exports.RelatedResultSpec = i.Struct.define("RelatedResultSpec", {
            1: { alias: "maxNotes", type: i.Type.I32 },
            2: { alias: "maxNotebooks", type: i.Type.I32 },
            3: { alias: "maxTags", type: i.Type.I32 },
            4: { alias: "writableNotebooksOnly", type: i.Type.BOOL },
            5: { alias: "includeContainingNotebooks", type: i.Type.BOOL },
            6: { alias: "includeDebugInfo", type: i.Type.BOOL },
            7: { alias: "maxExperts", type: i.Type.I32 },
            8: { alias: "maxRelatedContent", type: i.Type.I32 },
            9: { alias: "relatedContentTypes", type: i.Type.SET, def: i.Set.define(i.Type.I32) }
          })),
          (e.exports.SearchSuggestionQuery = i.Struct.define("SearchSuggestionQuery", {
            1: { alias: "prefix", type: i.Type.STRING },
            2: { alias: "contextFilter", type: i.Type.STRUCT, def: e.exports.NoteFilter }
          })),
          (e.exports.CustomAttribute = i.Struct.define("CustomAttribute", {
            1: { alias: "name", type: i.Type.STRING },
            2: { alias: "value", type: i.Type.STRING }
          })),
          (e.exports.SearchSuggestionQueryV2 = i.Struct.define("SearchSuggestionQueryV2", {
            1: { alias: "query", type: i.Type.STRING },
            2: { alias: "maxResults", type: i.Type.I32 },
            3: { alias: "contextFilter", type: i.Type.STRUCT, def: e.exports.NoteFilter },
            4: { alias: "customAttributes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.CustomAttribute) }
          })),
          (e.exports.SearchSuggestionResultSpec = i.Struct.define("SearchSuggestionResultSpec", {
            1: { alias: "maxTypeAheadSuggestions", type: i.Type.I32 }
          })),
          (e.exports.SearchSuggestion = i.Struct.define("SearchSuggestion", { 1: { alias: "suggestionText", type: i.Type.STRING } })),
          (e.exports.SuggestionObject = i.Struct.define("SuggestionObject", {
            1: { alias: "type", type: i.Type.STRING },
            2: { alias: "value", type: i.Type.STRING },
            3: { alias: "displayValue", type: i.Type.STRING },
            4: { alias: "score", type: i.Type.DOUBLE },
            5: { alias: "objectGuid", type: i.Type.STRING }
          })),
          (e.exports.SearchSuggestionResult = i.Struct.define("SearchSuggestionResult", {
            1: { alias: "typeAheadSuggestions", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SearchSuggestion) }
          })),
          (e.exports.SearchSuggestionResultV2 = i.Struct.define("SearchSuggestionResultV2", {
            1: { alias: "suggestions", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SuggestionObject) },
            2: { alias: "customAttributes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.CustomAttribute) }
          })),
          (e.exports.TimeZone = i.Struct.define("TimeZone", {
            1: { alias: "id", type: i.Type.STRING },
            2: { alias: "displayName", type: i.Type.STRING },
            3: { alias: "rawUTCOffsetMillis", type: i.Type.I32 },
            4: { alias: "dstSavingsAdjustmentMillis", type: i.Type.I32 },
            5: { alias: "nextEnterDaylightSavings", type: i.Type.I64 },
            6: { alias: "nextLeaveDaylightSavings", type: i.Type.I64 }
          })),
          (e.exports.TimeZoneSpec = i.Struct.define("TimeZoneSpec", {
            1: { alias: "id", type: i.Type.STRING },
            2: { alias: "rawUTCOffsetMillis", type: i.Type.I32 },
            3: { alias: "dstSavingsAdjustmentMillis", type: i.Type.I32 },
            4: { alias: "nextEnterDaylightSavings", type: i.Type.I64 },
            5: { alias: "nextLeaveDaylightSavings", type: i.Type.I64 }
          })),
          (e.exports.ContactsQuery = i.Struct.define("ContactsQuery", {
            1: { alias: "maxEntries", type: i.Type.I32 },
            2: { alias: "prefix", type: i.Type.STRING }
          })),
          (e.exports.BusinessQuery = i.Struct.define("BusinessQuery", {
            1: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter },
            2: { alias: "numExperts", type: i.Type.I32 },
            3: { alias: "includeNotebooks", type: i.Type.BOOL },
            4: { alias: "includeNotesCounts", type: i.Type.BOOL }
          })),
          (e.exports.BusinessQueryResult = i.Struct.define("BusinessQueryResult", {
            1: { alias: "totalNotebooks", type: i.Type.I32 },
            2: { alias: "totalNotesByNotebook", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I32) },
            3: { alias: "experts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.UserProfile) },
            4: { alias: "matchingNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) }
          })),
          (e.exports.NoteLockStatus = i.Struct.define("NoteLockStatus", {
            1: { alias: "noteUpdateSequenceNumber", type: i.Type.I32 },
            2: { alias: "lockHolderUserId", type: i.Type.I32 },
            3: { alias: "lockRenewBy", type: i.Type.I64 },
            4: { alias: "viewingUserIds", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            5: { alias: "viewIdleExpiration", type: i.Type.I32 },
            6: { alias: "unknownUsers", type: i.Type.MAP, def: i.Map.define(i.Type.I32, i.Type.STRUCT, o.Contact) },
            7: { alias: "currentTime", type: i.Type.I64 },
            8: { alias: "lockHolderDeviceId", type: i.Type.STRING },
            9: { alias: "lockStartTime", type: i.Type.I64 }
          })),
          (e.exports.UpdateNoteIfUsnMatchesResult = i.Struct.define("UpdateNoteIfUsnMatchesResult", {
            1: { alias: "note", type: i.Type.STRUCT, def: o.Note },
            2: { alias: "updated", type: i.Type.BOOL }
          })),
          (e.exports.ShareRelationshipRestrictions = i.Struct.define("ShareRelationshipRestrictions", {
            1: { alias: "noSetReadOnly", type: i.Type.BOOL },
            2: { alias: "noSetReadPlusActivity", type: i.Type.BOOL },
            3: { alias: "noSetModify", type: i.Type.BOOL },
            4: { alias: "noSetFullAccess", type: i.Type.BOOL }
          })),
          (e.exports.InvitationShareRelationship = i.Struct.define("InvitationShareRelationship", {
            1: { alias: "displayName", type: i.Type.STRING },
            2: { alias: "recipientUserIdentity", type: i.Type.STRUCT, def: o.UserIdentity },
            3: { alias: "privilege", type: i.Type.I32 },
            5: { alias: "sharerUserId", type: i.Type.I32 }
          })),
          (e.exports.MemberShareRelationship = i.Struct.define("MemberShareRelationship", {
            1: { alias: "displayName", type: i.Type.STRING },
            2: { alias: "recipientUserId", type: i.Type.I32 },
            3: { alias: "bestPrivilege", type: i.Type.I32 },
            4: { alias: "individualPrivilege", type: i.Type.I32 },
            5: { alias: "restrictions", type: i.Type.STRUCT, def: e.exports.ShareRelationshipRestrictions },
            6: { alias: "sharerUserId", type: i.Type.I32 }
          })),
          (e.exports.ShareRelationships = i.Struct.define("ShareRelationships", {
            1: { alias: "invitations", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.InvitationShareRelationship) },
            2: { alias: "memberships", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MemberShareRelationship) },
            3: { alias: "invitationRestrictions", type: i.Type.STRUCT, def: e.exports.ShareRelationshipRestrictions }
          })),
          (e.exports.ManageNotebookSharesParameters = i.Struct.define("ManageNotebookSharesParameters", {
            1: { alias: "notebookGuid", type: i.Type.STRING },
            2: { alias: "inviteMessage", type: i.Type.STRING },
            3: { alias: "membershipsToUpdate", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MemberShareRelationship) },
            4: {
              alias: "invitationsToCreateOrUpdate",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.InvitationShareRelationship)
            },
            5: { alias: "unshares", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.UserIdentity) }
          })),
          (e.exports.ManageNotebookSharesError = i.Struct.define("ManageNotebookSharesError", {
            1: { alias: "userIdentity", type: i.Type.STRUCT, def: o.UserIdentity },
            2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
            3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
          })),
          (e.exports.ManageNotebookSharesResult = i.Struct.define("ManageNotebookSharesResult", {
            1: { alias: "errors", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ManageNotebookSharesError) },
            2: { alias: "unshareErrors", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ManageNotebookSharesError) }
          })),
          (e.exports.SharedNoteTemplate = i.Struct.define("SharedNoteTemplate", {
            1: { alias: "noteGuid", type: i.Type.STRING },
            4: { alias: "recipientThreadId", type: i.Type.I64 },
            2: { alias: "recipientContacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Contact) },
            3: { alias: "privilege", type: i.Type.I32 }
          })),
          (e.exports.NotebookShareTemplate = i.Struct.define("NotebookShareTemplate", {
            1: { alias: "notebookGuid", type: i.Type.STRING },
            4: { alias: "recipientThreadId", type: i.Type.I64 },
            2: { alias: "recipientContacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Contact) },
            3: { alias: "privilege", type: i.Type.I32 }
          })),
          (e.exports.CreateOrUpdateNotebookSharesResult = i.Struct.define("CreateOrUpdateNotebookSharesResult", {
            1: { alias: "updateSequenceNum", type: i.Type.I32 },
            2: { alias: "matchingShares", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.SharedNotebook) }
          })),
          (e.exports.NoteShareRelationshipRestrictions = i.Struct.define("NoteShareRelationshipRestrictions", {
            1: { alias: "noSetReadNote", type: i.Type.BOOL },
            2: { alias: "noSetModifyNote", type: i.Type.BOOL },
            3: { alias: "noSetFullAccess", type: i.Type.BOOL }
          })),
          (e.exports.NoteMemberShareRelationship = i.Struct.define("NoteMemberShareRelationship", {
            1: { alias: "displayName", type: i.Type.STRING },
            2: { alias: "recipientUserId", type: i.Type.I32 },
            3: { alias: "privilege", type: i.Type.I32 },
            4: { alias: "restrictions", type: i.Type.STRUCT, def: e.exports.NoteShareRelationshipRestrictions },
            5: { alias: "sharerUserId", type: i.Type.I32 },
            6: { alias: "contactType", type: i.Type.I32 }
          })),
          (e.exports.NoteInvitationShareRelationship = i.Struct.define("NoteInvitationShareRelationship", {
            1: { alias: "displayName", type: i.Type.STRING },
            2: { alias: "recipientIdentityId", type: i.Type.I64 },
            3: { alias: "privilege", type: i.Type.I32 },
            5: { alias: "sharerUserId", type: i.Type.I32 },
            6: { alias: "contactType", type: i.Type.I32 }
          })),
          (e.exports.NoteShareRelationships = i.Struct.define("NoteShareRelationships", {
            1: { alias: "invitations", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteInvitationShareRelationship) },
            2: { alias: "memberships", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteMemberShareRelationship) },
            3: { alias: "invitationRestrictions", type: i.Type.STRUCT, def: e.exports.NoteShareRelationshipRestrictions }
          })),
          (e.exports.ManageNoteSharesParameters = i.Struct.define("ManageNoteSharesParameters", {
            1: { alias: "noteGuid", type: i.Type.STRING },
            2: {
              alias: "membershipsToUpdate",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.NoteMemberShareRelationship)
            },
            3: {
              alias: "invitationsToUpdate",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.NoteInvitationShareRelationship)
            },
            4: { alias: "membershipsToUnshare", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            5: { alias: "invitationsToUnshare", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          })),
          (e.exports.ManageNoteSharesError = i.Struct.define("ManageNoteSharesError", {
            1: { alias: "identityID", type: i.Type.I64 },
            2: { alias: "userID", type: i.Type.I32 },
            3: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
            4: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
          })),
          (e.exports.ManageNoteSharesResult = i.Struct.define("ManageNoteSharesResult", {
            1: { alias: "errors", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.ManageNoteSharesError) }
          })),
          (e.exports.SearchRecord = i.Struct.define("SearchRecord", {
            1: { alias: "userQuery", type: i.Type.STRING },
            2: { alias: "noteFilter", type: i.Type.STRUCT, def: e.exports.NoteFilter },
            3: { alias: "searchScope", type: i.Type.I32 },
            4: { alias: "searchTime", type: i.Type.I64 },
            5: { alias: "selectedNoteGUID", type: i.Type.STRING },
            6: { alias: "selectTime", type: i.Type.I64 },
            7: { alias: "noteRank", type: i.Type.I32 },
            8: { alias: "noteCount", type: i.Type.I32 }
          })),
          (e.exports.SearchSelectInfo = i.Struct.define("SearchSelectInfo", {
            1: { alias: "searchContextBytes", type: i.Type.BINARY },
            2: { alias: "selectedNoteGUID", type: i.Type.STRING },
            3: { alias: "selectTime", type: i.Type.I64 },
            4: { alias: "noteRank", type: i.Type.I32 },
            5: { alias: "autoSelected", type: i.Type.BOOL },
            6: { alias: "userQuery", type: i.Type.STRING }
          })),
          (e.exports.SearchExitInfo = i.Struct.define("SearchExitInfo", {
            1: { alias: "searchContextBytes", type: i.Type.BINARY },
            2: { alias: "exitTime", type: i.Type.I64 }
          })),
          (e.exports.LogRequestProperty = i.Struct.define("LogRequestProperty", {
            1: { alias: "name", type: i.Type.STRING },
            2: { alias: "value", type: i.Type.STRING }
          })),
          (e.exports.LogRequestEvent = i.Struct.define("LogRequestEvent", {
            1: { alias: "eventType", type: i.Type.STRING },
            2: { alias: "properties", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.LogRequestProperty) },
            3: { alias: "sensitiveProperties", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.LogRequestProperty) }
          })),
          (e.exports.LogRequest = i.Struct.define("LogRequest", {
            1: { alias: "searchRecord", type: i.Type.STRUCT, def: e.exports.SearchRecord },
            2: { alias: "selectInfo", type: i.Type.STRUCT, def: e.exports.SearchSelectInfo },
            3: { alias: "exitInfo", type: i.Type.STRUCT, def: e.exports.SearchExitInfo },
            4: { alias: "logRequestEvent", type: i.Type.STRUCT, def: e.exports.LogRequestEvent }
          })),
          (e.exports.LogResponse = i.Struct.define("LogResponse")),
          (e.exports.NoteAuthenticationResult = i.Struct.define("NoteAuthenticationResult", {
            1: { alias: "authenticationToken", type: i.Type.STRING },
            2: { alias: "sharedNotebookGlobalId", type: i.Type.STRING },
            3: { alias: "noteAccessType", type: i.Type.I32 }
          })),
          (e.exports.NotebookResultSpec = i.Struct.define("NotebookResultSpec", {
            1: { alias: "includeSharedNotebooks", type: i.Type.BOOL },
            2: { alias: "includeNotebookRestrictions", type: i.Type.BOOL },
            3: { alias: "includeNotebookRecipientSettings", type: i.Type.BOOL }
          })),
          (e.exports.GetWorkspaceUserInterfacePropertiesRequest = i.Struct.define("GetWorkspaceUserInterfacePropertiesRequest", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "updateVersion", type: i.Type.I32 }
          })),
          (e.exports.GetWorkspaceUserInterfacePropertiesResponse = i.Struct.define("GetWorkspaceUserInterfacePropertiesResponse", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "updateVersion", type: i.Type.I32 },
            3: { alias: "layoutStyle", type: i.Type.I32 },
            4: { alias: "notebookDisplayOrder", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            5: { alias: "notebookColor", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I32) },
            6: { alias: "noteDisplayOrder", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.LIST, i.List.define(i.Type.STRING)) }
          }));
        var p = (e.exports.NoteStore = {});
        function u(e) {
          (this.output = e), (this.seqid = 0);
        }
        function y(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[n] && this.processor.addMethod(p[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (p.getSyncState = i.Method.define({
          alias: "getSyncState",
          args: i.Struct.define("getSyncStateArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
          result: i.Struct.define("getSyncStateResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncState },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
          })
        })),
          (p.getSyncStateWithMetrics = i.Method.define({
            alias: "getSyncStateWithMetrics",
            args: i.Struct.define("getSyncStateWithMetricsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "clientMetrics", type: i.Type.STRUCT, def: e.exports.ClientUsageMetrics, index: 1 }
            }),
            result: i.Struct.define("getSyncStateWithMetricsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncState },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getSyncChunk = i.Method.define({
            alias: "getSyncChunk",
            args: i.Struct.define("getSyncChunkArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "afterUSN", type: i.Type.I32, index: 1 },
              3: { alias: "maxEntries", type: i.Type.I32, index: 2 },
              4: { alias: "fullSyncOnly", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("getSyncChunkResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncChunk },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getFilteredSyncChunk = i.Method.define({
            alias: "getFilteredSyncChunk",
            args: i.Struct.define("getFilteredSyncChunkArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "afterUSN", type: i.Type.I32, index: 1 },
              3: { alias: "maxEntries", type: i.Type.I32, index: 2 },
              4: { alias: "filter", type: i.Type.STRUCT, def: e.exports.SyncChunkFilter, index: 3 }
            }),
            result: i.Struct.define("getFilteredSyncChunkResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncChunk },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getLinkedNotebookSyncState = i.Method.define({
            alias: "getLinkedNotebookSyncState",
            args: i.Struct.define("getLinkedNotebookSyncStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedNotebook", type: i.Type.STRUCT, def: o.LinkedNotebook, index: 1 }
            }),
            result: i.Struct.define("getLinkedNotebookSyncStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncState },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getLinkedNotebookSyncChunk = i.Method.define({
            alias: "getLinkedNotebookSyncChunk",
            args: i.Struct.define("getLinkedNotebookSyncChunkArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedNotebook", type: i.Type.STRUCT, def: o.LinkedNotebook, index: 1 },
              3: { alias: "afterUSN", type: i.Type.I32, index: 2 },
              4: { alias: "maxEntries", type: i.Type.I32, index: 3 },
              5: { alias: "fullSyncOnly", type: i.Type.BOOL, index: 4 }
            }),
            result: i.Struct.define("getLinkedNotebookSyncChunkResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncChunk },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listNotebooks = i.Method.define({
            alias: "listNotebooks",
            args: i.Struct.define("listNotebooksArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.listPublishedBusinessNotebooks = i.Method.define({
            alias: "listPublishedBusinessNotebooks",
            args: i.Struct.define("listPublishedBusinessNotebooksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listPublishedBusinessNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.listAccessibleBusinessNotebooks = i.Method.define({
            alias: "listAccessibleBusinessNotebooks",
            args: i.Struct.define("listAccessibleBusinessNotebooksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.NotebookResultSpec, index: 1 }
            }),
            result: i.Struct.define("listAccessibleBusinessNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Notebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.countNotebooks = i.Method.define({
            alias: "countNotebooks",
            args: i.Struct.define("countNotebooksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "excludeBackingNotebooks", type: i.Type.BOOL, index: 1 },
              3: { alias: "excludeDefaultNotebooks", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("countNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getNotebook = i.Method.define({
            alias: "getNotebook",
            args: i.Struct.define("getNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getDefaultNotebook = i.Method.define({
            alias: "getDefaultNotebook",
            args: i.Struct.define("getDefaultNotebookArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getDefaultNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getUserNotebook = i.Method.define({
            alias: "getUserNotebook",
            args: i.Struct.define("getUserNotebookArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.createNotebook = i.Method.define({
            alias: "createNotebook",
            args: i.Struct.define("createNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebook", type: i.Type.STRUCT, def: o.Notebook, index: 1 }
            }),
            result: i.Struct.define("createNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateNotebook = i.Method.define({
            alias: "updateNotebook",
            args: i.Struct.define("updateNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebook", type: i.Type.STRUCT, def: o.Notebook, index: 1 }
            }),
            result: i.Struct.define("updateNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateNotebookWithResultSpec = i.Method.define({
            alias: "updateNotebookWithResultSpec",
            args: i.Struct.define("updateNotebookWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebook", type: i.Type.STRUCT, def: o.Notebook, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.NotebookResultSpec, index: 2 }
            }),
            result: i.Struct.define("updateNotebookWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeNotebook = i.Method.define({
            alias: "expungeNotebook",
            args: i.Struct.define("expungeNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listTags = i.Method.define({
            alias: "listTags",
            args: i.Struct.define("listTagsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listTagsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Tag) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.listTagsByNotebook = i.Method.define({
            alias: "listTagsByNotebook",
            args: i.Struct.define("listTagsByNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("listTagsByNotebookResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Tag) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getTag = i.Method.define({
            alias: "getTag",
            args: i.Struct.define("getTagArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getTagResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Tag },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.createTag = i.Method.define({
            alias: "createTag",
            args: i.Struct.define("createTagArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tag", type: i.Type.STRUCT, def: o.Tag, index: 1 }
            }),
            result: i.Struct.define("createTagResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Tag },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateTag = i.Method.define({
            alias: "updateTag",
            args: i.Struct.define("updateTagArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tag", type: i.Type.STRUCT, def: o.Tag, index: 1 }
            }),
            result: i.Struct.define("updateTagResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.untagAll = i.Method.define({
            alias: "untagAll",
            args: i.Struct.define("untagAllArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("untagAllResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeTag = i.Method.define({
            alias: "expungeTag",
            args: i.Struct.define("expungeTagArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeTagResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listSearches = i.Method.define({
            alias: "listSearches",
            args: i.Struct.define("listSearchesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listSearchesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.SavedSearch) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getSearch = i.Method.define({
            alias: "getSearch",
            args: i.Struct.define("getSearchArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getSearchResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SavedSearch },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.createSearch = i.Method.define({
            alias: "createSearch",
            args: i.Struct.define("createSearchArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "search", type: i.Type.STRUCT, def: o.SavedSearch, index: 1 }
            }),
            result: i.Struct.define("createSearchResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SavedSearch },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.updateSearch = i.Method.define({
            alias: "updateSearch",
            args: i.Struct.define("updateSearchArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "search", type: i.Type.STRUCT, def: o.SavedSearch, index: 1 }
            }),
            result: i.Struct.define("updateSearchResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeSearch = i.Method.define({
            alias: "expungeSearch",
            args: i.Struct.define("expungeSearchArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeSearchResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findNotes = i.Method.define({
            alias: "findNotes",
            args: i.Struct.define("findNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("findNotesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteList },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findNoteOffset = i.Method.define({
            alias: "findNoteOffset",
            args: i.Struct.define("findNoteOffsetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter, index: 1 },
              3: { alias: "guid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("findNoteOffsetResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findNotesMetadata = i.Method.define({
            alias: "findNotesMetadata",
            args: i.Struct.define("findNotesMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 },
              5: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.NotesMetadataResultSpec, index: 4 }
            }),
            result: i.Struct.define("findNotesMetadataResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NotesMetadataList },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.filteredSearch = i.Method.define({
            alias: "filteredSearch",
            args: i.Struct.define("filteredSearchArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.FilteredSearchRequest, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.NotesMetadataResultSpec, index: 2 }
            }),
            result: i.Struct.define("filteredSearchResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.FilteredSearchResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteSnippets = i.Method.define({
            alias: "getNoteSnippets",
            args: i.Struct.define("getNoteSnippetsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 },
              3: { alias: "maxSnippetLength", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("getNoteSnippetsResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getNoteSnippetsV2 = i.Method.define({
            alias: "getNoteSnippetsV2",
            args: i.Struct.define("getNoteSnippetsV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 },
              3: { alias: "maxSnippetLength", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("getNoteSnippetsV2Result", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.findNoteCounts = i.Method.define({
            alias: "findNoteCounts",
            args: i.Struct.define("findNoteCountsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: e.exports.NoteFilter, index: 1 },
              3: { alias: "withTrash", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("findNoteCountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteCollectionCounts },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteWithResultSpec = i.Method.define({
            alias: "getNoteWithResultSpec",
            args: i.Struct.define("getNoteWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.NoteResultSpec, index: 2 }
            }),
            result: i.Struct.define("getNoteWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNote = i.Method.define({
            alias: "getNote",
            args: i.Struct.define("getNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "withContent", type: i.Type.BOOL, index: 2 },
              4: { alias: "withResourcesData", type: i.Type.BOOL, index: 3 },
              5: { alias: "withResourcesRecognition", type: i.Type.BOOL, index: 4 },
              6: { alias: "withResourcesAlternateData", type: i.Type.BOOL, index: 5 }
            }),
            result: i.Struct.define("getNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getPreferences = i.Method.define({
            alias: "getPreferences",
            args: i.Struct.define("getPreferencesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "preferenceNames", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getPreferencesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Preferences },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.updatePreferences = i.Method.define({
            alias: "updatePreferences",
            args: i.Struct.define("updatePreferencesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: {
                alias: "preferencesToUpdate",
                type: i.Type.MAP,
                def: i.Map.define(i.Type.STRING, i.Type.LIST, i.List.define(i.Type.STRING)),
                index: 1
              }
            }),
            result: i.Struct.define("updatePreferencesResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getNoteApplicationData = i.Method.define({
            alias: "getNoteApplicationData",
            args: i.Struct.define("getNoteApplicationDataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNoteApplicationDataResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.LazyMap },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteApplicationDataEntry = i.Method.define({
            alias: "getNoteApplicationDataEntry",
            args: i.Struct.define("getNoteApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("getNoteApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setNoteApplicationDataEntry = i.Method.define({
            alias: "setNoteApplicationDataEntry",
            args: i.Struct.define("setNoteApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 },
              4: { alias: "value", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("setNoteApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.unsetNoteApplicationDataEntry = i.Method.define({
            alias: "unsetNoteApplicationDataEntry",
            args: i.Struct.define("unsetNoteApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("unsetNoteApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteContent = i.Method.define({
            alias: "getNoteContent",
            args: i.Struct.define("getNoteContentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNoteContentResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteSearchText = i.Method.define({
            alias: "getNoteSearchText",
            args: i.Struct.define("getNoteSearchTextArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "noteOnly", type: i.Type.BOOL, index: 2 },
              4: { alias: "tokenizeForIndexing", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("getNoteSearchTextResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceSearchText = i.Method.define({
            alias: "getResourceSearchText",
            args: i.Struct.define("getResourceSearchTextArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceSearchTextResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteTagNames = i.Method.define({
            alias: "getNoteTagNames",
            args: i.Struct.define("getNoteTagNamesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNoteTagNamesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.createNote = i.Method.define({
            alias: "createNote",
            args: i.Struct.define("createNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: o.Note, index: 1 }
            }),
            result: i.Struct.define("createNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateNote = i.Method.define({
            alias: "updateNote",
            args: i.Struct.define("updateNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: o.Note, index: 1 }
            }),
            result: i.Struct.define("updateNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setContentClass = i.Method.define({
            alias: "setContentClass",
            args: i.Struct.define("setContentClassArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "contentClass", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("setContentClassResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.deleteNote = i.Method.define({
            alias: "deleteNote",
            args: i.Struct.define("deleteNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("deleteNoteResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeNote = i.Method.define({
            alias: "expungeNote",
            args: i.Struct.define("expungeNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeNoteResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeNotes = i.Method.define({
            alias: "expungeNotes",
            args: i.Struct.define("expungeNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("expungeNotesResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.expungeInactiveNotes = i.Method.define({
            alias: "expungeInactiveNotes",
            args: i.Struct.define("expungeInactiveNotesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("expungeInactiveNotesResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.copyNote = i.Method.define({
            alias: "copyNote",
            args: i.Struct.define("copyNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "toNotebookGuid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("copyNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.importPublicNote = i.Method.define({
            alias: "importPublicNote",
            args: i.Struct.define("importPublicNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "shardId", type: i.Type.STRING, index: 1 },
              3: { alias: "noteGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "noteKey", type: i.Type.STRING, index: 3 },
              5: { alias: "toNotebookGuid", type: i.Type.STRING, index: 4 }
            }),
            result: i.Struct.define("importPublicNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listNoteVersions = i.Method.define({
            alias: "listNoteVersions",
            args: i.Struct.define("listNoteVersionsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("listNoteVersionsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteVersionId) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteVersion = i.Method.define({
            alias: "getNoteVersion",
            args: i.Struct.define("getNoteVersionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "updateSequenceNum", type: i.Type.I32, index: 2 },
              4: { alias: "withResourcesData", type: i.Type.BOOL, index: 3 },
              5: { alias: "withResourcesRecognition", type: i.Type.BOOL, index: 4 },
              6: { alias: "withResourcesAlternateData", type: i.Type.BOOL, index: 5 }
            }),
            result: i.Struct.define("getNoteVersionResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResource = i.Method.define({
            alias: "getResource",
            args: i.Struct.define("getResourceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "withData", type: i.Type.BOOL, index: 2 },
              4: { alias: "withRecognition", type: i.Type.BOOL, index: 3 },
              5: { alias: "withAttributes", type: i.Type.BOOL, index: 4 },
              6: { alias: "withAlternateData", type: i.Type.BOOL, index: 5 }
            }),
            result: i.Struct.define("getResourceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Resource },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceApplicationData = i.Method.define({
            alias: "getResourceApplicationData",
            args: i.Struct.define("getResourceApplicationDataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceApplicationDataResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.LazyMap },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceApplicationDataEntry = i.Method.define({
            alias: "getResourceApplicationDataEntry",
            args: i.Struct.define("getResourceApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("getResourceApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setResourceApplicationDataEntry = i.Method.define({
            alias: "setResourceApplicationDataEntry",
            args: i.Struct.define("setResourceApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 },
              4: { alias: "value", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("setResourceApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.unsetResourceApplicationDataEntry = i.Method.define({
            alias: "unsetResourceApplicationDataEntry",
            args: i.Struct.define("unsetResourceApplicationDataEntryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 },
              3: { alias: "key", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("unsetResourceApplicationDataEntryResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateResource = i.Method.define({
            alias: "updateResource",
            args: i.Struct.define("updateResourceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resource", type: i.Type.STRUCT, def: o.Resource, index: 1 }
            }),
            result: i.Struct.define("updateResourceResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceData = i.Method.define({
            alias: "getResourceData",
            args: i.Struct.define("getResourceDataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceDataResult", {
              0: { alias: "returnValue", type: i.Type.BINARY },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceByHash = i.Method.define({
            alias: "getResourceByHash",
            args: i.Struct.define("getResourceByHashArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "contentHash", type: i.Type.BINARY, index: 2 },
              4: { alias: "withData", type: i.Type.BOOL, index: 3 },
              5: { alias: "withRecognition", type: i.Type.BOOL, index: 4 },
              6: { alias: "withAlternateData", type: i.Type.BOOL, index: 5 }
            }),
            result: i.Struct.define("getResourceByHashResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Resource },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceRecognition = i.Method.define({
            alias: "getResourceRecognition",
            args: i.Struct.define("getResourceRecognitionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceRecognitionResult", {
              0: { alias: "returnValue", type: i.Type.BINARY },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceAlternateData = i.Method.define({
            alias: "getResourceAlternateData",
            args: i.Struct.define("getResourceAlternateDataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceAlternateDataResult", {
              0: { alias: "returnValue", type: i.Type.BINARY },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getResourceAttributes = i.Method.define({
            alias: "getResourceAttributes",
            args: i.Struct.define("getResourceAttributesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getResourceAttributesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.ResourceAttributes },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getAds = i.Method.define({
            alias: "getAds",
            args: i.Struct.define("getAdsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "adParameters", type: i.Type.STRUCT, def: e.exports.AdParameters, index: 1 }
            }),
            result: i.Struct.define("getAdsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Ad) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getRandomAd = i.Method.define({
            alias: "getRandomAd",
            args: i.Struct.define("getRandomAdArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "adParameters", type: i.Type.STRUCT, def: e.exports.AdParameters, index: 1 }
            }),
            result: i.Struct.define("getRandomAdResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Ad },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getPublicNotebook = i.Method.define({
            alias: "getPublicNotebook",
            args: i.Struct.define("getPublicNotebookArgs", {
              1: { alias: "userId", type: i.Type.I32, index: 0 },
              2: { alias: "publicUri", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getPublicNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.createSharedNotebook = i.Method.define({
            alias: "createSharedNotebook",
            args: i.Struct.define("createSharedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sharedNotebook", type: i.Type.STRUCT, def: o.SharedNotebook, index: 1 }
            }),
            result: i.Struct.define("createSharedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SharedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.shareNotebook = i.Method.define({
            alias: "shareNotebook",
            args: i.Struct.define("shareNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sharedNotebook", type: i.Type.STRUCT, def: o.SharedNotebook, index: 1 },
              3: { alias: "message", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("shareNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SharedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.createOrUpdateNotebookShares = i.Method.define({
            alias: "createOrUpdateNotebookShares",
            args: i.Struct.define("createOrUpdateNotebookSharesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "shareTemplate", type: i.Type.STRUCT, def: e.exports.NotebookShareTemplate, index: 1 }
            }),
            result: i.Struct.define("createOrUpdateNotebookSharesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CreateOrUpdateNotebookSharesResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              4: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: r.EDAMInvalidContactsException }
            })
          })),
          (p.updateSharedNotebook = i.Method.define({
            alias: "updateSharedNotebook",
            args: i.Struct.define("updateSharedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sharedNotebook", type: i.Type.STRUCT, def: o.SharedNotebook, index: 1 }
            }),
            result: i.Struct.define("updateSharedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.setSharedNotebookRecipientSettings = i.Method.define({
            alias: "setSharedNotebookRecipientSettings",
            args: i.Struct.define("setSharedNotebookRecipientSettingsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sharedNotebookId", type: i.Type.I64, index: 1 },
              3: { alias: "recipientSettings", type: i.Type.STRUCT, def: o.SharedNotebookRecipientSettings, index: 2 }
            }),
            result: i.Struct.define("setSharedNotebookRecipientSettingsResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.setNotebookRecipientSettings = i.Method.define({
            alias: "setNotebookRecipientSettings",
            args: i.Struct.define("setNotebookRecipientSettingsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "recipientSettings", type: i.Type.STRUCT, def: o.NotebookRecipientSettings, index: 2 }
            }),
            result: i.Struct.define("setNotebookRecipientSettingsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.Notebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.sendMessageToSharedNotebookMembers = i.Method.define({
            alias: "sendMessageToSharedNotebookMembers",
            args: i.Struct.define("sendMessageToSharedNotebookMembersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "messageText", type: i.Type.STRING, index: 2 },
              4: { alias: "recipients", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 3 }
            }),
            result: i.Struct.define("sendMessageToSharedNotebookMembersResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.listSharedNotebooks = i.Method.define({
            alias: "listSharedNotebooks",
            args: i.Struct.define("listSharedNotebooksArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listSharedNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.SharedNotebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.expungeSharedNotebooks = i.Method.define({
            alias: "expungeSharedNotebooks",
            args: i.Struct.define("expungeSharedNotebooksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sharedNotebookIds", type: i.Type.LIST, def: i.List.define(i.Type.I64), index: 1 }
            }),
            result: i.Struct.define("expungeSharedNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.createLinkedNotebook = i.Method.define({
            alias: "createLinkedNotebook",
            args: i.Struct.define("createLinkedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedNotebook", type: i.Type.STRUCT, def: o.LinkedNotebook, index: 1 }
            }),
            result: i.Struct.define("createLinkedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.LinkedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getOrCreateLinkedNotebook = i.Method.define({
            alias: "getOrCreateLinkedNotebook",
            args: i.Struct.define("getOrCreateLinkedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedNotebook", type: i.Type.STRUCT, def: o.LinkedNotebook, index: 1 }
            }),
            result: i.Struct.define("getOrCreateLinkedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.LinkedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.updateLinkedNotebook = i.Method.define({
            alias: "updateLinkedNotebook",
            args: i.Struct.define("updateLinkedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedNotebook", type: i.Type.STRUCT, def: o.LinkedNotebook, index: 1 }
            }),
            result: i.Struct.define("updateLinkedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.listLinkedNotebooks = i.Method.define({
            alias: "listLinkedNotebooks",
            args: i.Struct.define("listLinkedNotebooksArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listLinkedNotebooksResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.LinkedNotebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.expungeLinkedNotebook = i.Method.define({
            alias: "expungeLinkedNotebook",
            args: i.Struct.define("expungeLinkedNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeLinkedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.authenticateToSharedNotebook = i.Method.define({
            alias: "authenticateToSharedNotebook",
            args: i.Struct.define("authenticateToSharedNotebookArgs", {
              1: { alias: "shareKeyOrGlobalId", type: i.Type.STRING, index: 0 },
              2: { alias: "authenticationToken", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("authenticateToSharedNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getSharedNotebookByAuth = i.Method.define({
            alias: "getSharedNotebookByAuth",
            args: i.Struct.define("getSharedNotebookByAuthArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getSharedNotebookByAuthResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SharedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.emailNote = i.Method.define({
            alias: "emailNote",
            args: i.Struct.define("emailNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.NoteEmailParameters, index: 1 }
            }),
            result: i.Struct.define("emailNoteResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.emailNoteV2 = i.Method.define({
            alias: "emailNoteV2",
            args: i.Struct.define("emailNoteV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.NoteEmailParameters, index: 1 },
              3: { alias: "untitledTask", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("emailNoteV2Result", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.shareNote = i.Method.define({
            alias: "shareNote",
            args: i.Struct.define("shareNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("shareNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getSharedNoteKey = i.Method.define({
            alias: "getSharedNoteKey",
            args: i.Struct.define("getSharedNoteKeyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getSharedNoteKeyResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.stopSharingNote = i.Method.define({
            alias: "stopSharingNote",
            args: i.Struct.define("stopSharingNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("stopSharingNoteResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.stopSharingNoteWithRecipients = i.Method.define({
            alias: "stopSharingNoteWithRecipients",
            args: i.Struct.define("stopSharingNoteWithRecipientsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "guid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("stopSharingNoteWithRecipientsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.authenticateToSharedNote = i.Method.define({
            alias: "authenticateToSharedNote",
            args: i.Struct.define("authenticateToSharedNoteArgs", {
              1: { alias: "guid", type: i.Type.STRING, index: 0 },
              2: { alias: "noteKey", type: i.Type.STRING, index: 1 },
              3: { alias: "authenticationToken", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("authenticateToSharedNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.createOrUpdateSharedNotes = i.Method.define({
            alias: "createOrUpdateSharedNotes",
            args: i.Struct.define("createOrUpdateSharedNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "shareTemplate", type: i.Type.STRUCT, def: e.exports.SharedNoteTemplate, index: 1 }
            }),
            result: i.Struct.define("createOrUpdateSharedNotesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.SharedNote) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              4: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: r.EDAMInvalidContactsException }
            })
          })),
          (p.findRelated = i.Method.define({
            alias: "findRelated",
            args: i.Struct.define("findRelatedArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "query", type: i.Type.STRUCT, def: e.exports.RelatedQuery, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.RelatedResultSpec, index: 2 }
            }),
            result: i.Struct.define("findRelatedResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RelatedResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findSearchSuggestions = i.Method.define({
            alias: "findSearchSuggestions",
            args: i.Struct.define("findSearchSuggestionsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "query", type: i.Type.STRUCT, def: e.exports.SearchSuggestionQuery, index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: e.exports.SearchSuggestionResultSpec, index: 2 }
            }),
            result: i.Struct.define("findSearchSuggestionsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchSuggestionResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findSearchSuggestionsV2 = i.Method.define({
            alias: "findSearchSuggestionsV2",
            args: i.Struct.define("findSearchSuggestionsV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.SearchSuggestionQueryV2, index: 1 }
            }),
            result: i.Struct.define("findSearchSuggestionsV2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchSuggestionResultV2 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.updateUserSetting = i.Method.define({
            alias: "updateUserSetting",
            args: i.Struct.define("updateUserSettingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "setting", type: i.Type.I32, index: 1 },
              3: { alias: "value", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updateUserSettingResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.findTimeZones = i.Method.define({
            alias: "findTimeZones",
            args: i.Struct.define("findTimeZonesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "timeZoneSpec", type: i.Type.STRUCT, def: e.exports.TimeZoneSpec, index: 1 },
              3: { alias: "maxTimeZones", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("findTimeZonesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.TimeZone) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.findContacts = i.Method.define({
            alias: "findContacts",
            args: i.Struct.define("findContactsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "query", type: i.Type.STRUCT, def: e.exports.ContactsQuery, index: 1 }
            }),
            result: i.Struct.define("findContactsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.Contact) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.findInBusiness = i.Method.define({
            alias: "findInBusiness",
            args: i.Struct.define("findInBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "query", type: i.Type.STRUCT, def: e.exports.BusinessQuery, index: 1 }
            }),
            result: i.Struct.define("findInBusinessResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessQueryResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.shareNoteWithBusiness = i.Method.define({
            alias: "shareNoteWithBusiness",
            args: i.Struct.define("shareNoteWithBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("shareNoteWithBusinessResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.stopSharingNoteWithBusiness = i.Method.define({
            alias: "stopSharingNoteWithBusiness",
            args: i.Struct.define("stopSharingNoteWithBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("stopSharingNoteWithBusinessResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.requestAccessToNotebook = i.Method.define({
            alias: "requestAccessToNotebook",
            args: i.Struct.define("requestAccessToNotebookArgs", {
              1: { alias: "authToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "privilegeLevel", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("requestAccessToNotebookResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNoteLockStatus = i.Method.define({
            alias: "getNoteLockStatus",
            args: i.Struct.define("getNoteLockStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNoteLockStatusResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteLockStatus },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.acquireNoteLock = i.Method.define({
            alias: "acquireNoteLock",
            args: i.Struct.define("acquireNoteLockArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("acquireNoteLockResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteLockStatus },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.acquireNoteLockWithDeviceId = i.Method.define({
            alias: "acquireNoteLockWithDeviceId",
            args: i.Struct.define("acquireNoteLockWithDeviceIdArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "deviceId", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("acquireNoteLockWithDeviceIdResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteLockStatus },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.releaseNoteLock = i.Method.define({
            alias: "releaseNoteLock",
            args: i.Struct.define("releaseNoteLockArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("releaseNoteLockResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteLockStatus },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.releaseNoteLockWithDeviceId = i.Method.define({
            alias: "releaseNoteLockWithDeviceId",
            args: i.Struct.define("releaseNoteLockWithDeviceIdArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "deviceId", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("releaseNoteLockWithDeviceIdResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteLockStatus },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getViewersForNotes = i.Method.define({
            alias: "getViewersForNotes",
            args: i.Struct.define("getViewersForNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getViewersForNotesResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, e.exports.NoteLockStatus) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.updateNoteIfUsnMatches = i.Method.define({
            alias: "updateNoteIfUsnMatches",
            args: i.Struct.define("updateNoteIfUsnMatchesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: o.Note, index: 1 }
            }),
            result: i.Struct.define("updateNoteIfUsnMatchesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UpdateNoteIfUsnMatchesResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.manageNotebookShares = i.Method.define({
            alias: "manageNotebookShares",
            args: i.Struct.define("manageNotebookSharesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.ManageNotebookSharesParameters, index: 1 }
            }),
            result: i.Struct.define("manageNotebookSharesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ManageNotebookSharesResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getNotebookShares = i.Method.define({
            alias: "getNotebookShares",
            args: i.Struct.define("getNotebookSharesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNotebookSharesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ShareRelationships },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getNoteShares = i.Method.define({
            alias: "getNoteShares",
            args: i.Struct.define("getNoteSharesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNoteSharesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteShareRelationships },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.manageNoteShares = i.Method.define({
            alias: "manageNoteShares",
            args: i.Struct.define("manageNoteSharesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.ManageNoteSharesParameters, index: 1 }
            }),
            result: i.Struct.define("manageNoteSharesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ManageNoteSharesResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.joinPublishedBusinessNotebook = i.Method.define({
            alias: "joinPublishedBusinessNotebook",
            args: i.Struct.define("joinPublishedBusinessNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("joinPublishedBusinessNotebookResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: o.SharedNotebook },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.unpublishNotebook = i.Method.define({
            alias: "unpublishNotebook",
            args: i.Struct.define("unpublishNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "convertGroupSharesToIndividual", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("unpublishNotebookResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getNotebookSharesEmailAddresses = i.Method.define({
            alias: "getNotebookSharesEmailAddresses",
            args: i.Struct.define("getNotebookSharesEmailAddressesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "identities", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, o.UserIdentity), index: 2 },
              4: { alias: "skipUnknownUserIdentities", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("getNotebookSharesEmailAddressesResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.renameNotebook = i.Method.define({
            alias: "renameNotebook",
            args: i.Struct.define("renameNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "name", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("renameNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.sendLogRequest = i.Method.define({
            alias: "sendLogRequest",
            args: i.Struct.define("sendLogRequestArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "logRequest", type: i.Type.STRUCT, def: e.exports.LogRequest, index: 1 }
            }),
            result: i.Struct.define("sendLogRequestResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.LogResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException }
            })
          })),
          (p.getLinkedAccountSyncState = i.Method.define({
            alias: "getLinkedAccountSyncState",
            args: i.Struct.define("getLinkedAccountSyncStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "linkedAccount", type: i.Type.STRUCT, def: o.LinkedAccount, index: 1 }
            }),
            result: i.Struct.define("getLinkedAccountSyncStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SyncState },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.authenticateToNote = i.Method.define({
            alias: "authenticateToNote",
            args: i.Struct.define("authenticateToNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("authenticateToNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NoteAuthenticationResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.createWorkspace = i.Method.define({
            alias: "createWorkspace",
            args: i.Struct.define("createWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: a.Workspace, index: 1 },
              3: { alias: "spec", type: i.Type.STRUCT, def: a.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("createWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException }
            })
          })),
          (p.getWorkspace = i.Method.define({
            alias: "getWorkspace",
            args: i.Struct.define("getWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: a.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("getWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listWorkspaces = i.Method.define({
            alias: "listWorkspaces",
            args: i.Struct.define("listWorkspacesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceResponseSpec", type: i.Type.STRUCT, def: a.WorkspaceResponseSpec, index: 1 },
              3: { alias: "filter", type: i.Type.STRUCT, def: a.WorkspaceFilter, index: 2 }
            }),
            result: i.Struct.define("listWorkspacesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.WorkspaceResponse) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException }
            })
          })),
          (p.updateWorkspace = i.Method.define({
            alias: "updateWorkspace",
            args: i.Struct.define("updateWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: a.Workspace, index: 1 }
            }),
            result: i.Struct.define("updateWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.manageWorkspaceSharing = i.Method.define({
            alias: "manageWorkspaceSharing",
            args: i.Struct.define("manageWorkspaceSharingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: a.ManageWorkspaceSharingRequest, index: 1 }
            }),
            result: i.Struct.define("manageWorkspaceSharingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.ManageWorkspaceSharingResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.joinWorkspace = i.Method.define({
            alias: "joinWorkspace",
            args: i.Struct.define("joinWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("joinWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.leaveWorkspace = i.Method.define({
            alias: "leaveWorkspace",
            args: i.Struct.define("leaveWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("leaveWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.getWorkspaceUserInterfaceProperties = i.Method.define({
            alias: "getWorkspaceUserInterfaceProperties",
            args: i.Struct.define("getWorkspaceUserInterfacePropertiesArgs", {
              1: { alias: "authentiationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.GetWorkspaceUserInterfacePropertiesRequest, index: 1 }
            }),
            result: i.Struct.define("getWorkspaceUserInterfacePropertiesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.GetWorkspaceUserInterfacePropertiesResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setWorkspaceUserInterfaceLayoutStyle = i.Method.define({
            alias: "setWorkspaceUserInterfaceLayoutStyle",
            args: i.Struct.define("setWorkspaceUserInterfaceLayoutStyleArgs", {
              1: { alias: "authentiationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "layoutStyle", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("setWorkspaceUserInterfaceLayoutStyleResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setNotebookUserInterfaceDisplayOrder = i.Method.define({
            alias: "setNotebookUserInterfaceDisplayOrder",
            args: i.Struct.define("setNotebookUserInterfaceDisplayOrderArgs", {
              1: { alias: "authentiationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "notebookDisplayOrder", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 2 }
            }),
            result: i.Struct.define("setNotebookUserInterfaceDisplayOrderResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setNotebookUserInterfaceColors = i.Method.define({
            alias: "setNotebookUserInterfaceColors",
            args: i.Struct.define("setNotebookUserInterfaceColorsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "updatedColors", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I32), index: 2 }
            }),
            result: i.Struct.define("setNotebookUserInterfaceColorsResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.setNoteUserInterfaceDisplayOrder = i.Method.define({
            alias: "setNoteUserInterfaceDisplayOrder",
            args: i.Struct.define("setNoteUserInterfaceDisplayOrderArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: {
                alias: "noteDisplayOrder",
                type: i.Type.MAP,
                def: i.Map.define(i.Type.STRING, i.Type.LIST, i.List.define(i.Type.STRING)),
                index: 2
              }
            }),
            result: i.Struct.define("setNoteUserInterfaceDisplayOrderResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.validateAndCreateShare = i.Method.define({
            alias: "validateAndCreateShare",
            args: i.Struct.define("validateAndCreateShareArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 },
              3: { alias: "noteGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "noteKey", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("validateAndCreateShareResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AuthenticationResult },
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              4: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: r.EDAMInvalidContactsException }
            })
          })),
          (u.prototype.getSyncState = function (e, t) {
            var s = p.getSyncState,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.getSyncStateWithMetrics = function (e, t, s) {
            var i = p.getSyncStateWithMetrics,
              n = new i.args();
            (n.authenticationToken = e), (n.clientMetrics = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getSyncChunk = function (e, t, s, i, n) {
            var a = p.getSyncChunk,
              o = new a.args();
            (o.authenticationToken = e),
              (o.afterUSN = t),
              (o.maxEntries = s),
              (o.fullSyncOnly = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.getFilteredSyncChunk = function (e, t, s, i, n) {
            var a = p.getFilteredSyncChunk,
              o = new a.args();
            (o.authenticationToken = e),
              (o.afterUSN = t),
              (o.maxEntries = s),
              (o.filter = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.getLinkedNotebookSyncState = function (e, t, s) {
            var i = p.getLinkedNotebookSyncState,
              n = new i.args();
            (n.authenticationToken = e), (n.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getLinkedNotebookSyncChunk = function (e, t, s, i, n, a) {
            var o = p.getLinkedNotebookSyncChunk,
              r = new o.args();
            (r.authenticationToken = e),
              (r.linkedNotebook = t),
              (r.afterUSN = s),
              (r.maxEntries = i),
              (r.fullSyncOnly = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (u.prototype.listNotebooks = function (e, t) {
            var s = p.listNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listPublishedBusinessNotebooks = function (e, t) {
            var s = p.listPublishedBusinessNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listAccessibleBusinessNotebooks = function (e, t, s) {
            var i = p.listAccessibleBusinessNotebooks,
              n = new i.args();
            (n.authenticationToken = e), (n.resultSpec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.countNotebooks = function (e, t, s, i) {
            var n = p.countNotebooks,
              a = new n.args();
            (a.authenticationToken = e),
              (a.excludeBackingNotebooks = t),
              (a.excludeDefaultNotebooks = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNotebook = function (e, t, s) {
            var i = p.getNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getDefaultNotebook = function (e, t) {
            var s = p.getDefaultNotebook,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.getUserNotebook = function (e, t) {
            var s = p.getUserNotebook,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.createNotebook = function (e, t, s) {
            var i = p.createNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.notebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateNotebook = function (e, t, s) {
            var i = p.updateNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.notebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateNotebookWithResultSpec = function (e, t, s, i) {
            var n = p.updateNotebookWithResultSpec,
              a = new n.args();
            (a.authenticationToken = e), (a.notebook = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.expungeNotebook = function (e, t, s) {
            var i = p.expungeNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.listTags = function (e, t) {
            var s = p.listTags,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listTagsByNotebook = function (e, t, s) {
            var i = p.listTagsByNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getTag = function (e, t, s) {
            var i = p.getTag,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createTag = function (e, t, s) {
            var i = p.createTag,
              n = new i.args();
            (n.authenticationToken = e), (n.tag = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateTag = function (e, t, s) {
            var i = p.updateTag,
              n = new i.args();
            (n.authenticationToken = e), (n.tag = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.untagAll = function (e, t, s) {
            var i = p.untagAll,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.expungeTag = function (e, t, s) {
            var i = p.expungeTag,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.listSearches = function (e, t) {
            var s = p.listSearches,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.getSearch = function (e, t, s) {
            var i = p.getSearch,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createSearch = function (e, t, s) {
            var i = p.createSearch,
              n = new i.args();
            (n.authenticationToken = e), (n.search = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateSearch = function (e, t, s) {
            var i = p.updateSearch,
              n = new i.args();
            (n.authenticationToken = e), (n.search = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.expungeSearch = function (e, t, s) {
            var i = p.expungeSearch,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.findNotes = function (e, t, s, i, n) {
            var a = p.findNotes,
              o = new a.args();
            (o.authenticationToken = e), (o.filter = t), (o.offset = s), (o.maxNotes = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.findNoteOffset = function (e, t, s, i) {
            var n = p.findNoteOffset,
              a = new n.args();
            (a.authenticationToken = e), (a.filter = t), (a.guid = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findNotesMetadata = function (e, t, s, i, n, a) {
            var o = p.findNotesMetadata,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (u.prototype.filteredSearch = function (e, t, s, i) {
            var n = p.filteredSearch,
              a = new n.args();
            (a.authenticationToken = e), (a.request = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNoteSnippets = function (e, t, s, i) {
            var n = p.getNoteSnippets,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuids = t), (a.maxSnippetLength = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNoteSnippetsV2 = function (e, t, s, i) {
            var n = p.getNoteSnippetsV2,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuids = t), (a.maxSnippetLength = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findNoteCounts = function (e, t, s, i) {
            var n = p.findNoteCounts,
              a = new n.args();
            (a.authenticationToken = e), (a.filter = t), (a.withTrash = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNoteWithResultSpec = function (e, t, s, i) {
            var n = p.getNoteWithResultSpec,
              a = new n.args();
            (a.authenticationToken = e), (a.guid = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNote = function (e, t, s, i, n, a, o) {
            var r = p.getNote,
              u = new r.args();
            (u.authenticationToken = e),
              (u.guid = t),
              (u.withContent = s),
              (u.withResourcesData = i),
              (u.withResourcesRecognition = n),
              (u.withResourcesAlternateData = a),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getPreferences = function (e, t, s) {
            var i = p.getPreferences,
              n = new i.args();
            (n.authenticationToken = e), (n.preferenceNames = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updatePreferences = function (e, t, s) {
            var i = p.updatePreferences,
              n = new i.args();
            (n.authenticationToken = e), (n.preferencesToUpdate = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteApplicationData = function (e, t, s) {
            var i = p.getNoteApplicationData,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteApplicationDataEntry = function (e, t, s, i) {
            var n = p.getNoteApplicationDataEntry,
              a = new n.args();
            (a.authenticationToken = e), (a.guid = t), (a.key = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setNoteApplicationDataEntry = function (e, t, s, i, n) {
            var a = p.setNoteApplicationDataEntry,
              o = new a.args();
            (o.authenticationToken = e), (o.guid = t), (o.key = s), (o.value = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.unsetNoteApplicationDataEntry = function (e, t, s, i) {
            var n = p.unsetNoteApplicationDataEntry,
              a = new n.args();
            (a.authenticationToken = e), (a.guid = t), (a.key = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNoteContent = function (e, t, s) {
            var i = p.getNoteContent,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteSearchText = function (e, t, s, i, n) {
            var a = p.getNoteSearchText,
              o = new a.args();
            (o.authenticationToken = e),
              (o.guid = t),
              (o.noteOnly = s),
              (o.tokenizeForIndexing = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.getResourceSearchText = function (e, t, s) {
            var i = p.getResourceSearchText,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteTagNames = function (e, t, s) {
            var i = p.getNoteTagNames,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createNote = function (e, t, s) {
            var i = p.createNote,
              n = new i.args();
            (n.authenticationToken = e), (n.note = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateNote = function (e, t, s) {
            var i = p.updateNote,
              n = new i.args();
            (n.authenticationToken = e), (n.note = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.setContentClass = function (e, t, s, i) {
            var n = p.setContentClass,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuid = t), (a.contentClass = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.deleteNote = function (e, t, s) {
            var i = p.deleteNote,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.expungeNote = function (e, t, s) {
            var i = p.expungeNote,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.expungeNotes = function (e, t, s) {
            var i = p.expungeNotes,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuids = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.expungeInactiveNotes = function (e, t) {
            var s = p.expungeInactiveNotes,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.copyNote = function (e, t, s, i) {
            var n = p.copyNote,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuid = t), (a.toNotebookGuid = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.importPublicNote = function (e, t, s, i, n, a) {
            var o = p.importPublicNote,
              r = new o.args();
            (r.authenticationToken = e),
              (r.shardId = t),
              (r.noteGuid = s),
              (r.noteKey = i),
              (r.toNotebookGuid = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (u.prototype.listNoteVersions = function (e, t, s) {
            var i = p.listNoteVersions,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteVersion = function (e, t, s, i, n, a, o) {
            var r = p.getNoteVersion,
              u = new r.args();
            (u.authenticationToken = e),
              (u.noteGuid = t),
              (u.updateSequenceNum = s),
              (u.withResourcesData = i),
              (u.withResourcesRecognition = n),
              (u.withResourcesAlternateData = a),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResource = function (e, t, s, i, n, a, o) {
            var r = p.getResource,
              u = new r.args();
            (u.authenticationToken = e),
              (u.guid = t),
              (u.withData = s),
              (u.withRecognition = i),
              (u.withAttributes = n),
              (u.withAlternateData = a),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResourceApplicationData = function (e, t, s) {
            var i = p.getResourceApplicationData,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getResourceApplicationDataEntry = function (e, t, s, i) {
            var n = p.getResourceApplicationDataEntry,
              a = new n.args();
            (a.authenticationToken = e), (a.guid = t), (a.key = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setResourceApplicationDataEntry = function (e, t, s, i, n) {
            var a = p.setResourceApplicationDataEntry,
              o = new a.args();
            (o.authenticationToken = e), (o.guid = t), (o.key = s), (o.value = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.unsetResourceApplicationDataEntry = function (e, t, s, i) {
            var n = p.unsetResourceApplicationDataEntry,
              a = new n.args();
            (a.authenticationToken = e), (a.guid = t), (a.key = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.updateResource = function (e, t, s) {
            var i = p.updateResource,
              n = new i.args();
            (n.authenticationToken = e), (n.resource = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getResourceData = function (e, t, s) {
            var i = p.getResourceData,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getResourceByHash = function (e, t, s, i, n, a, o) {
            var r = p.getResourceByHash,
              u = new r.args();
            (u.authenticationToken = e),
              (u.noteGuid = t),
              (u.contentHash = s),
              (u.withData = i),
              (u.withRecognition = n),
              (u.withAlternateData = a),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResourceRecognition = function (e, t, s) {
            var i = p.getResourceRecognition,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getResourceAlternateData = function (e, t, s) {
            var i = p.getResourceAlternateData,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getResourceAttributes = function (e, t, s) {
            var i = p.getResourceAttributes,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getAds = function (e, t, s) {
            var i = p.getAds,
              n = new i.args();
            (n.authenticationToken = e), (n.adParameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getRandomAd = function (e, t, s) {
            var i = p.getRandomAd,
              n = new i.args();
            (n.authenticationToken = e), (n.adParameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getPublicNotebook = function (e, t, s) {
            var i = p.getPublicNotebook,
              n = new i.args();
            (n.userId = e), (n.publicUri = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createSharedNotebook = function (e, t, s) {
            var i = p.createSharedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.sharedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.shareNotebook = function (e, t, s, i) {
            var n = p.shareNotebook,
              a = new n.args();
            (a.authenticationToken = e), (a.sharedNotebook = t), (a.message = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.createOrUpdateNotebookShares = function (e, t, s) {
            var i = p.createOrUpdateNotebookShares,
              n = new i.args();
            (n.authenticationToken = e), (n.shareTemplate = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateSharedNotebook = function (e, t, s) {
            var i = p.updateSharedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.sharedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.setSharedNotebookRecipientSettings = function (e, t, s, i) {
            var n = p.setSharedNotebookRecipientSettings,
              a = new n.args();
            (a.authenticationToken = e),
              (a.sharedNotebookId = t),
              (a.recipientSettings = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setNotebookRecipientSettings = function (e, t, s, i) {
            var n = p.setNotebookRecipientSettings,
              a = new n.args();
            (a.authenticationToken = e), (a.notebookGuid = t), (a.recipientSettings = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.sendMessageToSharedNotebookMembers = function (e, t, s, i, n) {
            var a = p.sendMessageToSharedNotebookMembers,
              o = new a.args();
            (o.authenticationToken = e),
              (o.notebookGuid = t),
              (o.messageText = s),
              (o.recipients = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.listSharedNotebooks = function (e, t) {
            var s = p.listSharedNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.expungeSharedNotebooks = function (e, t, s) {
            var i = p.expungeSharedNotebooks,
              n = new i.args();
            (n.authenticationToken = e), (n.sharedNotebookIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createLinkedNotebook = function (e, t, s) {
            var i = p.createLinkedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getOrCreateLinkedNotebook = function (e, t, s) {
            var i = p.getOrCreateLinkedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateLinkedNotebook = function (e, t, s) {
            var i = p.updateLinkedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.listLinkedNotebooks = function (e, t) {
            var s = p.listLinkedNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.expungeLinkedNotebook = function (e, t, s) {
            var i = p.expungeLinkedNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.authenticateToSharedNotebook = function (e, t, s) {
            var i = p.authenticateToSharedNotebook,
              n = new i.args();
            (n.shareKeyOrGlobalId = e), (n.authenticationToken = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getSharedNotebookByAuth = function (e, t) {
            var s = p.getSharedNotebookByAuth,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.emailNote = function (e, t, s) {
            var i = p.emailNote,
              n = new i.args();
            (n.authenticationToken = e), (n.parameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.emailNoteV2 = function (e, t, s, i) {
            var n = p.emailNoteV2,
              a = new n.args();
            (a.authenticationToken = e), (a.parameters = t), (a.untitledTask = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.shareNote = function (e, t, s) {
            var i = p.shareNote,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getSharedNoteKey = function (e, t, s) {
            var i = p.getSharedNoteKey,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.stopSharingNote = function (e, t, s) {
            var i = p.stopSharingNote,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.stopSharingNoteWithRecipients = function (e, t, s) {
            var i = p.stopSharingNoteWithRecipients,
              n = new i.args();
            (n.authenticationToken = e), (n.guid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.authenticateToSharedNote = function (e, t, s, i) {
            var n = p.authenticateToSharedNote,
              a = new n.args();
            (a.guid = e), (a.noteKey = t), (a.authenticationToken = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.createOrUpdateSharedNotes = function (e, t, s) {
            var i = p.createOrUpdateSharedNotes,
              n = new i.args();
            (n.authenticationToken = e), (n.shareTemplate = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.findRelated = function (e, t, s, i) {
            var n = p.findRelated,
              a = new n.args();
            (a.authenticationToken = e), (a.query = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findSearchSuggestions = function (e, t, s, i) {
            var n = p.findSearchSuggestions,
              a = new n.args();
            (a.authenticationToken = e), (a.query = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findSearchSuggestionsV2 = function (e, t, s) {
            var i = p.findSearchSuggestionsV2,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateUserSetting = function (e, t, s, i) {
            var n = p.updateUserSetting,
              a = new n.args();
            (a.authenticationToken = e), (a.setting = t), (a.value = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findTimeZones = function (e, t, s, i) {
            var n = p.findTimeZones,
              a = new n.args();
            (a.authenticationToken = e), (a.timeZoneSpec = t), (a.maxTimeZones = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.findContacts = function (e, t, s) {
            var i = p.findContacts,
              n = new i.args();
            (n.authenticationToken = e), (n.query = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.findInBusiness = function (e, t, s) {
            var i = p.findInBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.query = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.shareNoteWithBusiness = function (e, t, s) {
            var i = p.shareNoteWithBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.stopSharingNoteWithBusiness = function (e, t, s) {
            var i = p.stopSharingNoteWithBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.requestAccessToNotebook = function (e, t, s, i) {
            var n = p.requestAccessToNotebook,
              a = new n.args();
            (a.authToken = e), (a.notebookGuid = t), (a.privilegeLevel = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNoteLockStatus = function (e, t, s) {
            var i = p.getNoteLockStatus,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.acquireNoteLock = function (e, t, s) {
            var i = p.acquireNoteLock,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.acquireNoteLockWithDeviceId = function (e, t, s, i) {
            var n = p.acquireNoteLockWithDeviceId,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuid = t), (a.deviceId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.releaseNoteLock = function (e, t, s) {
            var i = p.releaseNoteLock,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.releaseNoteLockWithDeviceId = function (e, t, s, i) {
            var n = p.releaseNoteLockWithDeviceId,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuid = t), (a.deviceId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getViewersForNotes = function (e, t, s) {
            var i = p.getViewersForNotes,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuids = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.updateNoteIfUsnMatches = function (e, t, s) {
            var i = p.updateNoteIfUsnMatches,
              n = new i.args();
            (n.authenticationToken = e), (n.note = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.manageNotebookShares = function (e, t, s) {
            var i = p.manageNotebookShares,
              n = new i.args();
            (n.authenticationToken = e), (n.parameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNotebookShares = function (e, t, s) {
            var i = p.getNotebookShares,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getNoteShares = function (e, t, s) {
            var i = p.getNoteShares,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.manageNoteShares = function (e, t, s) {
            var i = p.manageNoteShares,
              n = new i.args();
            (n.authenticationToken = e), (n.parameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.joinPublishedBusinessNotebook = function (e, t, s) {
            var i = p.joinPublishedBusinessNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.unpublishNotebook = function (e, t, s, i) {
            var n = p.unpublishNotebook,
              a = new n.args();
            (a.authenticationToken = e),
              (a.notebookGuid = t),
              (a.convertGroupSharesToIndividual = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getNotebookSharesEmailAddresses = function (e, t, s, i, n) {
            var a = p.getNotebookSharesEmailAddresses,
              o = new a.args();
            (o.authenticationToken = e),
              (o.notebookGuid = t),
              (o.identities = s),
              (o.skipUnknownUserIdentities = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (u.prototype.renameNotebook = function (e, t, s, i) {
            var n = p.renameNotebook,
              a = new n.args();
            (a.authenticationToken = e), (a.notebookGuid = t), (a.name = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.sendLogRequest = function (e, t, s) {
            var i = p.sendLogRequest,
              n = new i.args();
            (n.authenticationToken = e), (n.logRequest = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getLinkedAccountSyncState = function (e, t, s) {
            var i = p.getLinkedAccountSyncState,
              n = new i.args();
            (n.authenticationToken = e), (n.linkedAccount = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.authenticateToNote = function (e, t, s) {
            var i = p.authenticateToNote,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.createWorkspace = function (e, t, s, i) {
            var n = p.createWorkspace,
              a = new n.args();
            (a.authenticationToken = e), (a.workspace = t), (a.spec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.getWorkspace = function (e, t, s, i) {
            var n = p.getWorkspace,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), (a.responseSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.listWorkspaces = function (e, t, s, i) {
            var n = p.listWorkspaces,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceResponseSpec = t), (a.filter = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.updateWorkspace = function (e, t, s) {
            var i = p.updateWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspace = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.manageWorkspaceSharing = function (e, t, s) {
            var i = p.manageWorkspaceSharing,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.joinWorkspace = function (e, t, s) {
            var i = p.joinWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.leaveWorkspace = function (e, t, s) {
            var i = p.leaveWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.getWorkspaceUserInterfaceProperties = function (e, t, s) {
            var i = p.getWorkspaceUserInterfaceProperties,
              n = new i.args();
            (n.authentiationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (u.prototype.setWorkspaceUserInterfaceLayoutStyle = function (e, t, s, i) {
            var n = p.setWorkspaceUserInterfaceLayoutStyle,
              a = new n.args();
            (a.authentiationToken = e), (a.workspaceGuid = t), (a.layoutStyle = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setNotebookUserInterfaceDisplayOrder = function (e, t, s, i) {
            var n = p.setNotebookUserInterfaceDisplayOrder,
              a = new n.args();
            (a.authentiationToken = e), (a.workspaceGuid = t), (a.notebookDisplayOrder = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setNotebookUserInterfaceColors = function (e, t, s, i) {
            var n = p.setNotebookUserInterfaceColors,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), (a.updatedColors = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.setNoteUserInterfaceDisplayOrder = function (e, t, s, i) {
            var n = p.setNoteUserInterfaceDisplayOrder,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), (a.noteDisplayOrder = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (u.prototype.validateAndCreateShare = function (e, t, s, i, n) {
            var a = p.validateAndCreateShare,
              o = new a.args();
            (o.authenticationToken = e), (o.userId = t), (o.noteGuid = s), (o.noteKey = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (e.exports.NoteStore.Client = u),
          (y.prototype.start = function () {
            this.stransport.listen();
          }),
          (y.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.NoteStore.Server = y);
      },
      88606: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965),
          a = s(77915),
          o = s(60136);
        (e.exports.WorkspaceType = { INVITE_ONLY: 1, DISCOVERABLE: 2, OPEN: 3 }),
          (e.exports.WorkspacePrivilegeLevel = { READ: 1, EDIT: 2, EDIT_AND_MANAGE: 3 }),
          (e.exports.WorkspaceSortField = { NAME: 1, CREATED: 2, MAX_UPDATED: 3, MEMBER_COUNT: 4 }),
          (e.exports.WORKSPACE_FILTER_MAX_INCLUDED_WORKSPACE_GUIDS = 256),
          (e.exports.WorkspaceRestrictions = i.Struct.define("WorkspaceRestrictions", {
            1: { alias: "noUpdateName", type: i.Type.BOOL },
            3: { alias: "noCreateNotebooks", type: i.Type.BOOL },
            6: { alias: "noManageShares", type: i.Type.BOOL },
            7: { alias: "noCanMoveNotebook", type: i.Type.BOOL },
            8: { alias: "noUpdateType", type: i.Type.BOOL },
            9: { alias: "noUpdateDescription", type: i.Type.BOOL }
          })),
          (e.exports.Workspace = i.Struct.define("Workspace", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "contactId", type: i.Type.I32 },
            3: { alias: "name", type: i.Type.STRING },
            5: { alias: "backingNotebookGuid", type: i.Type.STRING },
            6: { alias: "serviceCreated", type: i.Type.I64 },
            7: { alias: "serviceUpdated", type: i.Type.I64 },
            8: { alias: "userId", type: i.Type.I32 },
            9: { alias: "updateSequenceNum", type: i.Type.I32 },
            10: { alias: "sharingUpdateCounter", type: i.Type.I32 },
            11: { alias: "descriptionText", type: i.Type.STRING },
            12: { alias: "workspaceType", type: i.Type.I32 },
            13: { alias: "defaultPrivilegeLevel", type: i.Type.I32 },
            14: { alias: "sample", type: i.Type.BOOL },
            15: { alias: "seed", type: i.Type.STRING },
            16: { alias: "backingNotebookSeed", type: i.Type.STRING }
          })),
          (e.exports.WorkspaceInvitation = i.Struct.define("WorkspaceInvitation", {
            1: { alias: "common", type: i.Type.STRUCT, def: o.InvitationCommon },
            2: { alias: "workspaceGuid", type: i.Type.STRING },
            3: { alias: "privilege", type: i.Type.I32 },
            4: { alias: "contact", type: i.Type.STRUCT, def: a.Contact }
          })),
          (e.exports.WorkspaceMembership = i.Struct.define("WorkspaceMembership", {
            1: { alias: "common", type: i.Type.STRUCT, def: o.MembershipCommon },
            2: { alias: "workspaceGuid", type: i.Type.STRING },
            3: { alias: "privilege", type: i.Type.I32 }
          })),
          (e.exports.ManageWorkspaceSharingRequest = i.Struct.define("ManageWorkspaceSharingRequest", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "membershipsToUpdate", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.WorkspaceMembership) },
            3: {
              alias: "invitationsToCreateOrUpdate",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.WorkspaceInvitation)
            },
            4: { alias: "membershipsToRemove", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.ErrorResponse = i.Struct.define("ErrorResponse", {
            1: { alias: "noErrors", type: i.Type.BOOL },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
            3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            4: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
          })),
          (e.exports.ManageWorkspaceMembershipResponse = i.Struct.define("ManageWorkspaceMembershipResponse", {
            1: { alias: "membership", type: i.Type.STRUCT, def: e.exports.WorkspaceMembership },
            2: { alias: "errorResponse", type: i.Type.STRUCT, def: e.exports.ErrorResponse }
          })),
          (e.exports.ManageWorkspaceInvitationResponse = i.Struct.define("ManageWorkspaceInvitationResponse", {
            1: { alias: "invitation", type: i.Type.STRUCT, def: e.exports.WorkspaceInvitation },
            2: { alias: "membership", type: i.Type.STRUCT, def: e.exports.WorkspaceMembership },
            3: { alias: "identity", type: i.Type.STRUCT, def: a.Identity },
            4: { alias: "errorResponse", type: i.Type.STRUCT, def: e.exports.ErrorResponse }
          })),
          (e.exports.ManageWorkspaceRemoveResponse = i.Struct.define("ManageWorkspaceRemoveResponse", {
            1: { alias: "guid", type: i.Type.STRING },
            3: { alias: "membership", type: i.Type.STRUCT, def: e.exports.WorkspaceMembership },
            2: { alias: "errorResponse", type: i.Type.STRUCT, def: e.exports.ErrorResponse }
          })),
          (e.exports.ManageWorkspaceSharingResponse = i.Struct.define("ManageWorkspaceSharingResponse", {
            1: { alias: "containsNoErrors", type: i.Type.BOOL },
            2: {
              alias: "membershipsToUpdateResponse",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.ManageWorkspaceMembershipResponse)
            },
            3: {
              alias: "invitationsToCreateOrUpdateResponse",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.ManageWorkspaceInvitationResponse)
            },
            4: {
              alias: "membershipsToRemoveResponse",
              type: i.Type.LIST,
              def: i.List.define(i.Type.STRUCT, e.exports.ManageWorkspaceRemoveResponse)
            }
          })),
          (e.exports.WorkspaceResponseSpec = i.Struct.define("WorkspaceResponseSpec", {
            1: { alias: "includeInvitations", type: i.Type.BOOL },
            2: { alias: "includeIdentityByInvitationsGuid", type: i.Type.BOOL },
            3: { alias: "includeMemberships", type: i.Type.BOOL },
            4: { alias: "includeWorkspaceRestrictions", type: i.Type.BOOL },
            6: { alias: "includeNotebookGuids", type: i.Type.BOOL },
            7: { alias: "includeAccessInfo", type: i.Type.BOOL },
            8: { alias: "includeNotebookRestrictions", type: i.Type.BOOL },
            9: { alias: "includeDiscoverableWorkspaces", type: i.Type.BOOL },
            10: { alias: "includeAggregations", type: i.Type.BOOL },
            11: { alias: "includeOpenWorkspaces", type: i.Type.BOOL }
          })),
          (e.exports.WorkspaceSorting = i.Struct.define("WorkspaceSorting", {
            1: { alias: "sortField", type: i.Type.I32 },
            2: { alias: "descending", type: i.Type.BOOL }
          })),
          (e.exports.WorkspaceFilter = i.Struct.define("WorkspaceFilter", {
            1: { alias: "includeTypes", type: i.Type.SET, def: i.Set.define(i.Type.I32) },
            2: { alias: "includeWorkspacesWithoutMembership", type: i.Type.BOOL },
            3: { alias: "sorting", type: i.Type.STRUCT, def: e.exports.WorkspaceSorting },
            4: { alias: "limit", type: i.Type.I32 },
            5: { alias: "includedWorkspaceGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.WorkspaceAggregations = i.Struct.define("WorkspaceAggregations", {
            1: { alias: "notebooksCount", type: i.Type.I32 },
            2: { alias: "notesCount", type: i.Type.I32 },
            3: { alias: "maxServiceUpdated", type: i.Type.I64 }
          })),
          (e.exports.AccessInfo = i.Struct.define("AccessInfo", {
            1: { alias: "viewed", type: i.Type.BOOL },
            2: { alias: "viewedTimestamp", type: i.Type.I64 },
            3: { alias: "accessRequestedTimestamp", type: i.Type.I64 }
          })),
          (e.exports.WorkspaceResponse = i.Struct.define("WorkspaceResponse", {
            1: { alias: "workspace", type: i.Type.STRUCT, def: e.exports.Workspace },
            2: { alias: "invitations", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.WorkspaceInvitation) },
            3: { alias: "identityByInvitationsGuid", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, a.Identity) },
            4: { alias: "memberships", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.WorkspaceMembership) },
            6: { alias: "workspaceRestrictions", type: i.Type.STRUCT, def: e.exports.WorkspaceRestrictions },
            7: { alias: "notebookGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            8: { alias: "accessInfo", type: i.Type.STRUCT, def: e.exports.AccessInfo },
            9: { alias: "notebookRestrictions", type: i.Type.STRUCT, def: a.NotebookRestrictions },
            10: { alias: "aggregations", type: i.Type.STRUCT, def: e.exports.WorkspaceAggregations },
            11: { alias: "member", type: i.Type.BOOL }
          })),
          (e.exports.CopyWorkspaceSpec = i.Struct.define("CopyWorkspaceSpec", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "includeNotes", type: i.Type.BOOL }
          }));
      },
      41511: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965);
        s(77915),
          (e.exports.ETNoteSortOrder = { CREATED: 1, UPDATED: 2, RELEVANCE: 3, UPDATE_SEQUENCE_NUMBER: 4, TITLE: 5 }),
          (e.exports.SearchScope = i.Struct.define("SearchScope", {
            1: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            2: { alias: "notebookGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.ETNoteFilter = i.Struct.define("ETNoteFilter", {
            1: { alias: "teamGuid", type: i.Type.STRING },
            2: { alias: "userGuid", type: i.Type.STRING },
            3: { alias: "queryText", type: i.Type.STRING },
            4: { alias: "order", type: i.Type.I32 },
            5: { alias: "filters", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "scope", type: i.Type.STRUCT, def: e.exports.SearchScope },
            7: { alias: "sessionGuid", type: i.Type.STRING },
            8: { alias: "notebookGuid", type: i.Type.STRING },
            9: { alias: "includeAllReadableNotebooks", type: i.Type.BOOL }
          })),
          (e.exports.NoteAttribute = i.Struct.define("NoteAttribute", {
            1: { alias: "attrName", type: i.Type.STRING },
            2: { alias: "attrValue", type: i.Type.STRING }
          })),
          (e.exports.NoteResult = i.Struct.define("NoteResult", {
            1: { alias: "noteGuid", type: i.Type.STRING },
            2: { alias: "score", type: i.Type.DOUBLE },
            3: { alias: "attributes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteAttribute) }
          })),
          (e.exports.SearchResult = i.Struct.define("SearchResult", {
            1: { alias: "totalNotes", type: i.Type.I32 },
            2: { alias: "noteResults", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteResult) },
            3: { alias: "sessionGuid", type: i.Type.STRING }
          })),
          (e.exports.SearchResultSpec = i.Struct.define("SearchResultSpec", {
            1: { alias: "splitting", type: i.Type.BOOL },
            2: { alias: "outputDetailsLevel", type: i.Type.I32 }
          })),
          (e.exports.ETQuery = i.Struct.define("ETQuery", {
            1: { alias: "noteFilter", type: i.Type.STRUCT, def: e.exports.ETNoteFilter },
            2: { alias: "offset", type: i.Type.I32 },
            3: { alias: "maxNotes", type: i.Type.I32 },
            4: { alias: "searchResultSpec", type: i.Type.STRUCT, def: e.exports.SearchResultSpec },
            5: { alias: "finalQuery", type: i.Type.BOOL }
          })),
          (e.exports.SearchSuggestion = i.Struct.define("SearchSuggestion", {
            1: { alias: "status", type: i.Type.I32 },
            2: { alias: "history", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            3: { alias: "suggestions", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            4: { alias: "categories", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            5: { alias: "userGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "notebookGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            7: { alias: "tagGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            8: { alias: "sessionGuid", type: i.Type.STRING }
          }));
        var a = (e.exports.TeamSearch = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), a))
            e[n] && this.processor.addMethod(a[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (a.queryNotes = i.Method.define({
          alias: "queryNotes",
          args: i.Struct.define("queryNotesArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "query", type: i.Type.STRUCT, def: e.exports.ETQuery, index: 1 }
          }),
          result: i.Struct.define("queryNotesResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchResult },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
            3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
          })
        })),
          (a.querySuggestion = i.Method.define({
            alias: "querySuggestion",
            args: i.Struct.define("querySuggestionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteFilter", type: i.Type.STRUCT, def: e.exports.ETNoteFilter, index: 1 }
            }),
            result: i.Struct.define("querySuggestionResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchSuggestion },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.prototype.queryNotes = function (e, t, s) {
            var i = a.queryNotes,
              n = new i.args();
            (n.authenticationToken = e), (n.query = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (o.prototype.querySuggestion = function (e, t, s) {
            var i = a.querySuggestion,
              n = new i.args();
            (n.authenticationToken = e), (n.noteFilter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.TeamSearch.Client = o),
          (r.prototype.start = function () {
            this.stransport.listen();
          }),
          (r.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.TeamSearch.Server = r);
      },
      77915: function (e, t, s) {
        var i = s(24527).Thrift;
        s(48412),
          (e.exports.PrivilegeLevel = { NORMAL: 1, PREMIUM: 3, VIP: 5, MANAGER: 7, SUPPORT: 8, ADMIN: 9 }),
          (e.exports.ServiceLevel = { BASIC: 1, PLUS: 2, PREMIUM: 3, BUSINESS: 4, FREE: 10, PERSONAL: 20, PROFESSIONAL: 30, TEAMS: 40 }),
          (e.exports.SubscriptionPeriod = { MONTHLY: 1, YEARLY: 12 }),
          (e.exports.QueryFormat = { USER: 1, SEXP: 2 }),
          (e.exports.NoteSortOrder = { CREATED: 1, UPDATED: 2, RELEVANCE: 3, UPDATE_SEQUENCE_NUMBER: 4, TITLE: 5 }),
          (e.exports.PremiumOrderStatus = { NONE: 0, PENDING: 1, ACTIVE: 2, FAILED: 3, CANCELLATION_PENDING: 4, CANCELED: 5 }),
          (e.exports.SharedNotebookPrivilegeLevel = {
            READ_NOTEBOOK: 0,
            MODIFY_NOTEBOOK_PLUS_ACTIVITY: 1,
            READ_NOTEBOOK_PLUS_ACTIVITY: 2,
            GROUP: 3,
            FULL_ACCESS: 4,
            BUSINESS_FULL_ACCESS: 5
          }),
          (e.exports.SharedNotePrivilegeLevel = { READ_NOTE: 0, MODIFY_NOTE: 1, FULL_ACCESS: 2 }),
          (e.exports.SponsoredGroupRole = { GROUP_MEMBER: 1, GROUP_ADMIN: 2, GROUP_OWNER: 3 }),
          (e.exports.BusinessUserRole = { ADMIN: 1, NORMAL: 2 }),
          (e.exports.BusinessUserStatus = { ACTIVE: 1, DEACTIVATED: 2 }),
          (e.exports.SharedNotebookInstanceRestrictions = { ASSIGNED: 1, NO_SHARED_NOTEBOOKS: 2 }),
          (e.exports.ReminderEmailConfig = { DO_NOT_SEND: 1, SEND_DAILY_EMAIL: 2 }),
          (e.exports.BusinessInvitationStatus = { APPROVED: 0, REQUESTED: 1, REDEEMED: 2 }),
          (e.exports.ContactType = { EVERNOTE: 1, SMS: 2, FACEBOOK: 3, EMAIL: 4, TWITTER: 5, LINKEDIN: 6, PUBLIC: 7 }),
          (e.exports.EntityType = { NOTE: 1, NOTEBOOK: 2, WORKSPACE: 3 }),
          (e.exports.AssociationsDataSource = { NOTESTORE: 1, ASSOCIATION_SERVICE: 2 }),
          (e.exports.SharingDataSource = { NOTESTORE: 1, AUTHORIZATION_SERVICE: 2 }),
          (e.exports.FeatureVersion = { GNOME_AWARE: 1, PRE_SPACY: 2, SPACY: 3, CONDUIT_THRIFT: 4, TASKS: 5 }),
          (e.exports.IdentityState = {
            ACTIVE: 1,
            ACTIVE_OPTOUT: 2,
            EXPIRED: 3,
            EXPIRED_OPTOUT: 4,
            CONTACT_DISASSOCIATED: 5,
            CONTACT_TRANSFER: 6
          }),
          (e.exports.RecipientStatus = { NOT_IN_MY_LIST: 1, IN_MY_LIST: 2, IN_MY_LIST_AND_DEFAULT_NOTEBOOK: 3 }),
          (e.exports.CanMoveToContainerStatus = { CAN_BE_MOVED: 1, INSUFFICIENT_ENTITY_PRIVILEGE: 2, INSUFFICIENT_CONTAINER_PRIVILEGE: 3 }),
          (e.exports.RelatedContentType = { NEWS_ARTICLE: 1, PROFILE_PERSON: 2, PROFILE_ORGANIZATION: 3, REFERENCE_MATERIAL: 4 }),
          (e.exports.RelatedContentAccess = {
            NOT_ACCESSIBLE: 0,
            DIRECT_LINK_ACCESS_OK: 1,
            DIRECT_LINK_LOGIN_REQUIRED: 2,
            DIRECT_LINK_EMBEDDED_VIEW: 3
          }),
          (e.exports.UserIdentityType = { EVERNOTE_USERID: 1, EMAIL: 2, IDENTITYID: 3 }),
          (e.exports.CLASSIFICATION_RECIPE_USER_NON_RECIPE = "000"),
          (e.exports.CLASSIFICATION_RECIPE_USER_RECIPE = "001"),
          (e.exports.CLASSIFICATION_RECIPE_SERVICE_RECIPE = "002"),
          (e.exports.EDAM_NOTE_SOURCE_WEB_CLIP = "web.clip"),
          (e.exports.EDAM_NOTE_SOURCE_WEB_CLIP_SIMPLIFIED = "Clearly"),
          (e.exports.EDAM_NOTE_SOURCE_MAIL_CLIP = "mail.clip"),
          (e.exports.EDAM_NOTE_SOURCE_MAIL_SMTP_GATEWAY = "mail.smtp"),
          (e.exports.EDAM_NOTE_ENML_FORMAT = 1),
          (e.exports.EDAM_NOTE_YJS_FORMAT = 2),
          (e.exports.Data = i.Struct.define("Data", {
            1: { alias: "bodyHash", type: i.Type.BINARY },
            2: { alias: "size", type: i.Type.I32 },
            3: { alias: "body", type: i.Type.BINARY }
          })),
          (e.exports.UserAttributes = i.Struct.define("UserAttributes", {
            1: { alias: "defaultLocationName", type: i.Type.STRING },
            2: { alias: "defaultLatitude", type: i.Type.DOUBLE },
            3: { alias: "defaultLongitude", type: i.Type.DOUBLE },
            4: { alias: "preactivation", type: i.Type.BOOL },
            5: { alias: "viewedPromotions", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            6: { alias: "incomingEmailAddress", type: i.Type.STRING },
            7: { alias: "recentMailedAddresses", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            9: { alias: "comments", type: i.Type.STRING },
            11: { alias: "dateAgreedToTermsOfService", type: i.Type.I64 },
            12: { alias: "maxReferrals", type: i.Type.I32 },
            13: { alias: "referralCount", type: i.Type.I32 },
            14: { alias: "refererCode", type: i.Type.STRING },
            15: { alias: "sentEmailDate", type: i.Type.I64 },
            16: { alias: "sentEmailCount", type: i.Type.I32 },
            17: { alias: "dailyEmailLimit", type: i.Type.I32 },
            18: { alias: "emailOptOutDate", type: i.Type.I64 },
            19: { alias: "partnerEmailOptInDate", type: i.Type.I64 },
            20: { alias: "preferredLanguage", type: i.Type.STRING },
            21: { alias: "preferredCountry", type: i.Type.STRING },
            22: { alias: "clipFullPage", type: i.Type.BOOL },
            23: { alias: "twitterUserName", type: i.Type.STRING },
            24: { alias: "twitterId", type: i.Type.STRING },
            25: { alias: "groupName", type: i.Type.STRING },
            26: { alias: "recognitionLanguage", type: i.Type.STRING },
            28: { alias: "referralProof", type: i.Type.STRING },
            29: { alias: "educationalDiscount", type: i.Type.BOOL },
            30: { alias: "businessAddress", type: i.Type.STRING },
            31: { alias: "hideSponsorBilling", type: i.Type.BOOL },
            32: { alias: "taxExempt", type: i.Type.BOOL },
            33: { alias: "useEmailAutoFiling", type: i.Type.BOOL },
            34: { alias: "reminderEmailConfig", type: i.Type.I32 },
            35: { alias: "emailAddressLastConfirmed", type: i.Type.I64 },
            36: { alias: "passwordUpdated", type: i.Type.I64 },
            37: { alias: "salesforcePushEnabled", type: i.Type.BOOL },
            38: { alias: "shouldLogClientEvent", type: i.Type.BOOL },
            39: { alias: "optOutMachineLearning", type: i.Type.BOOL },
            40: { alias: "associationsDataSource", type: i.Type.I32 },
            41: { alias: "sharingDataSource", type: i.Type.I32 }
          })),
          (e.exports.BusinessUserAttributes = i.Struct.define("BusinessUserAttributes", {
            1: { alias: "title", type: i.Type.STRING },
            2: { alias: "location", type: i.Type.STRING },
            3: { alias: "department", type: i.Type.STRING },
            4: { alias: "mobilePhone", type: i.Type.STRING },
            5: { alias: "linkedInProfileUrl", type: i.Type.STRING },
            6: { alias: "workPhone", type: i.Type.STRING },
            7: { alias: "companyStartDate", type: i.Type.I64 }
          })),
          (e.exports.BusinessUserFilter = i.Struct.define("BusinessUserFilter", {
            1: { alias: "roles", type: i.Type.LIST, def: i.List.define(i.Type.I32) },
            2: { alias: "createdBefore", type: i.Type.I64 },
            3: { alias: "statuses", type: i.Type.LIST, def: i.List.define(i.Type.I32) }
          })),
          (e.exports.UserProfileInfoRequest = i.Struct.define("UserProfileInfoRequest", {
            1: { alias: "includeUserProfilePhotoLastUpdated", type: i.Type.BOOL }
          })),
          (e.exports.BackupPaymentInfo = i.Struct.define("BackupPaymentInfo", {
            1: { alias: "premiumCommerceService", type: i.Type.STRING },
            2: { alias: "premiumServiceSKU", type: i.Type.STRING },
            3: { alias: "currency", type: i.Type.STRING },
            4: { alias: "unitPrice", type: i.Type.I32 },
            5: { alias: "paymentMethodId", type: i.Type.I32 },
            6: { alias: "orderNumber", type: i.Type.STRING }
          })),
          (e.exports.Accounting = i.Struct.define("Accounting", {
            1: { alias: "uploadLimit", type: i.Type.I64 },
            2: { alias: "uploadLimitEnd", type: i.Type.I64 },
            3: { alias: "uploadLimitNextMonth", type: i.Type.I64 },
            4: { alias: "premiumServiceStatus", type: i.Type.I32 },
            5: { alias: "premiumOrderNumber", type: i.Type.STRING },
            6: { alias: "premiumCommerceService", type: i.Type.STRING },
            7: { alias: "premiumServiceStart", type: i.Type.I64 },
            8: { alias: "premiumServiceSKU", type: i.Type.STRING },
            9: { alias: "lastSuccessfulCharge", type: i.Type.I64 },
            10: { alias: "lastFailedCharge", type: i.Type.I64 },
            11: { alias: "lastFailedChargeReason", type: i.Type.STRING },
            12: { alias: "nextPaymentDue", type: i.Type.I64 },
            13: { alias: "premiumLockUntil", type: i.Type.I64 },
            14: { alias: "updated", type: i.Type.I64 },
            16: { alias: "premiumSubscriptionNumber", type: i.Type.STRING },
            17: { alias: "lastRequestedCharge", type: i.Type.I64 },
            18: { alias: "currency", type: i.Type.STRING },
            19: { alias: "unitPrice", type: i.Type.I32 },
            20: { alias: "businessId", type: i.Type.I32 },
            21: { alias: "businessName", type: i.Type.STRING },
            22: { alias: "businessRole", type: i.Type.I32 },
            23: { alias: "unitDiscount", type: i.Type.I32 },
            24: { alias: "nextChargeDate", type: i.Type.I64 },
            25: { alias: "availablePoints", type: i.Type.I32 },
            26: { alias: "backupPaymentInfo", type: i.Type.STRUCT, def: e.exports.BackupPaymentInfo }
          })),
          (e.exports.BusinessUserInfo = i.Struct.define("BusinessUserInfo", {
            1: { alias: "businessId", type: i.Type.I32 },
            2: { alias: "businessName", type: i.Type.STRING },
            3: { alias: "role", type: i.Type.I32 },
            4: { alias: "email", type: i.Type.STRING },
            5: { alias: "updated", type: i.Type.I64 },
            6: { alias: "vaultUserId", type: i.Type.I32 }
          })),
          (e.exports.AccountLimits = i.Struct.define("AccountLimits", {
            1: { alias: "userMailLimitDaily", type: i.Type.I32 },
            2: { alias: "noteSizeMax", type: i.Type.I64 },
            3: { alias: "resourceSizeMax", type: i.Type.I64 },
            4: { alias: "userLinkedNotebookMax", type: i.Type.I32 },
            5: { alias: "uploadLimit", type: i.Type.I64 },
            6: { alias: "userNoteCountMax", type: i.Type.I32 },
            7: { alias: "userNotebookCountMax", type: i.Type.I32 },
            8: { alias: "userTagCountMax", type: i.Type.I32 },
            9: { alias: "noteTagCountMax", type: i.Type.I32 },
            10: { alias: "userSavedSearchesMax", type: i.Type.I32 },
            11: { alias: "noteResourceCountMax", type: i.Type.I32 },
            12: { alias: "userDeviceLimit", type: i.Type.I32 },
            13: { alias: "userAdvertisedDeviceLimit", type: i.Type.I32 },
            14: { alias: "userWorkspaceCountMax", type: i.Type.I32 },
            15: { alias: "taskAssignmentLimitDaily", type: i.Type.I32 }
          })),
          (e.exports.PricingModel = i.Struct.define("PricingModel", {
            1: { alias: "gnomeActive", type: i.Type.BOOL },
            2: { alias: "gnomeWarmingPeriod", type: i.Type.BOOL },
            3: { alias: "pricingModelStart", type: i.Type.I64 }
          })),
          (e.exports.PremiumInfo = i.Struct.define("PremiumInfo", {
            1: { alias: "currentTime", type: i.Type.I64 },
            2: { alias: "premium", type: i.Type.BOOL },
            3: { alias: "premiumRecurring", type: i.Type.BOOL },
            4: { alias: "premiumExpirationDate", type: i.Type.I64 },
            5: { alias: "premiumExtendable", type: i.Type.BOOL },
            6: { alias: "premiumPending", type: i.Type.BOOL },
            7: { alias: "premiumCancellationPending", type: i.Type.BOOL },
            8: { alias: "canPurchaseUploadAllowance", type: i.Type.BOOL },
            9: { alias: "sponsoredGroupName", type: i.Type.STRING },
            10: { alias: "sponsoredGroupRole", type: i.Type.I32 },
            11: { alias: "premiumUpgradable", type: i.Type.BOOL }
          })),
          (e.exports.SubscriptionInfo = i.Struct.define("SubscriptionInfo", {
            1: { alias: "currentTime", type: i.Type.I64 },
            2: { alias: "currentlySubscribed", type: i.Type.BOOL },
            3: { alias: "subscriptionRecurring", type: i.Type.BOOL },
            4: { alias: "subscriptionExpirationDate", type: i.Type.I64 },
            5: { alias: "subscriptionPending", type: i.Type.BOOL },
            6: { alias: "subscriptionCancellationPending", type: i.Type.BOOL },
            7: { alias: "serviceLevelsEligibleForPurchase", type: i.Type.SET, def: i.Set.define(i.Type.I32) },
            8: { alias: "currentSku", type: i.Type.STRING },
            9: { alias: "validUntil", type: i.Type.I64 },
            10: { alias: "itunesReceiptRequested", type: i.Type.BOOL }
          })),
          (e.exports.User = i.Struct.define("User", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "username", type: i.Type.STRING },
            3: { alias: "email", type: i.Type.STRING },
            4: { alias: "name", type: i.Type.STRING },
            6: { alias: "timezone", type: i.Type.STRING },
            7: { alias: "privilege", type: i.Type.I32 },
            21: { alias: "serviceLevel", type: i.Type.I32 },
            9: { alias: "created", type: i.Type.I64 },
            10: { alias: "updated", type: i.Type.I64 },
            11: { alias: "deleted", type: i.Type.I64 },
            13: { alias: "active", type: i.Type.BOOL },
            14: { alias: "shardId", type: i.Type.STRING },
            15: { alias: "attributes", type: i.Type.STRUCT, def: e.exports.UserAttributes },
            16: { alias: "accounting", type: i.Type.STRUCT, def: e.exports.Accounting },
            17: { alias: "premiumInfo", type: i.Type.STRUCT, def: e.exports.PremiumInfo },
            18: { alias: "businessUserInfo", type: i.Type.STRUCT, def: e.exports.BusinessUserInfo },
            19: { alias: "photoUrl", type: i.Type.STRING },
            20: { alias: "photoLastUpdated", type: i.Type.I64 },
            22: { alias: "accountLimits", type: i.Type.STRUCT, def: e.exports.AccountLimits },
            23: { alias: "subscriptionInfo", type: i.Type.STRUCT, def: e.exports.SubscriptionInfo },
            24: { alias: "pricingModel", type: i.Type.STRUCT, def: e.exports.PricingModel },
            25: { alias: "retrievedInFacadeContext", type: i.Type.BOOL },
            26: { alias: "serviceLevelV2", type: i.Type.I32 }
          })),
          (e.exports.Contact = i.Struct.define("Contact", {
            1: { alias: "name", type: i.Type.STRING },
            2: { alias: "id", type: i.Type.STRING },
            3: { alias: "type", type: i.Type.I32 },
            4: { alias: "photoUrl", type: i.Type.STRING },
            5: { alias: "photoLastUpdated", type: i.Type.I64 },
            6: { alias: "messagingPermit", type: i.Type.BINARY },
            7: { alias: "messagingPermitExpires", type: i.Type.I64 }
          })),
          (e.exports.Identity = i.Struct.define("Identity", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "contact", type: i.Type.STRUCT, def: e.exports.Contact },
            3: { alias: "userId", type: i.Type.I32 },
            4: { alias: "deactivated", type: i.Type.BOOL },
            5: { alias: "sameBusiness", type: i.Type.BOOL },
            6: { alias: "blocked", type: i.Type.BOOL },
            7: { alias: "userConnected", type: i.Type.BOOL },
            8: { alias: "eventId", type: i.Type.I64 }
          })),
          (e.exports.IdentityForAdmin = i.Struct.define("IdentityForAdmin", {
            1: { alias: "identity", type: i.Type.STRUCT, def: e.exports.Identity },
            2: { alias: "state", type: i.Type.I32 },
            3: { alias: "stateChanged", type: i.Type.I64 }
          })),
          (e.exports.Tag = i.Struct.define("Tag", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "name", type: i.Type.STRING },
            3: { alias: "parentGuid", type: i.Type.STRING },
            4: { alias: "updateSequenceNum", type: i.Type.I32 },
            5: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.LazyMap = i.Struct.define("LazyMap", {
            1: { alias: "keysOnly", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            2: { alias: "fullMap", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) }
          })),
          (e.exports.ResourceAttributes = i.Struct.define("ResourceAttributes", {
            1: { alias: "sourceURL", type: i.Type.STRING },
            2: { alias: "timestamp", type: i.Type.I64 },
            3: { alias: "latitude", type: i.Type.DOUBLE },
            4: { alias: "longitude", type: i.Type.DOUBLE },
            5: { alias: "altitude", type: i.Type.DOUBLE },
            6: { alias: "cameraMake", type: i.Type.STRING },
            7: { alias: "cameraModel", type: i.Type.STRING },
            8: { alias: "clientWillIndex", type: i.Type.BOOL },
            9: { alias: "recoType", type: i.Type.STRING },
            10: { alias: "fileName", type: i.Type.STRING },
            11: { alias: "attachment", type: i.Type.BOOL },
            12: { alias: "applicationData", type: i.Type.STRUCT, def: e.exports.LazyMap }
          })),
          (e.exports.Resource = i.Struct.define("Resource", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "noteGuid", type: i.Type.STRING },
            3: { alias: "data", type: i.Type.STRUCT, def: e.exports.Data },
            4: { alias: "mime", type: i.Type.STRING },
            5: { alias: "width", type: i.Type.I16 },
            6: { alias: "height", type: i.Type.I16 },
            7: { alias: "duration", type: i.Type.I16 },
            8: { alias: "active", type: i.Type.BOOL },
            9: { alias: "recognition", type: i.Type.STRUCT, def: e.exports.Data },
            11: { alias: "attributes", type: i.Type.STRUCT, def: e.exports.ResourceAttributes },
            12: { alias: "updateSequenceNum", type: i.Type.I32 },
            13: { alias: "alternateData", type: i.Type.STRUCT, def: e.exports.Data },
            14: { alias: "publicShared", type: i.Type.BOOL },
            15: { alias: "inPublicNotebook", type: i.Type.BOOL },
            16: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.NoteAttributes = i.Struct.define("NoteAttributes", {
            1: { alias: "subjectDate", type: i.Type.I64 },
            10: { alias: "latitude", type: i.Type.DOUBLE },
            11: { alias: "longitude", type: i.Type.DOUBLE },
            12: { alias: "altitude", type: i.Type.DOUBLE },
            13: { alias: "author", type: i.Type.STRING },
            14: { alias: "source", type: i.Type.STRING },
            15: { alias: "sourceURL", type: i.Type.STRING },
            16: { alias: "sourceApplication", type: i.Type.STRING },
            17: { alias: "shareDate", type: i.Type.I64 },
            18: { alias: "reminderOrder", type: i.Type.I64 },
            19: { alias: "reminderDoneTime", type: i.Type.I64 },
            20: { alias: "reminderTime", type: i.Type.I64 },
            21: { alias: "placeName", type: i.Type.STRING },
            22: { alias: "contentClass", type: i.Type.STRING },
            23: { alias: "applicationData", type: i.Type.STRUCT, def: e.exports.LazyMap },
            24: { alias: "lastEditedBy", type: i.Type.STRING },
            26: { alias: "classifications", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
            27: { alias: "creatorId", type: i.Type.I32 },
            28: { alias: "lastEditorId", type: i.Type.I32 },
            29: { alias: "sharedWithBusiness", type: i.Type.BOOL },
            30: { alias: "conflictSourceNoteGuid", type: i.Type.STRING },
            31: { alias: "noteTitleQuality", type: i.Type.I32 },
            32: { alias: "contentFormat", type: i.Type.I32 },
            33: { alias: "shareKey", type: i.Type.STRING }
          })),
          (e.exports.SharedNote = i.Struct.define("SharedNote", {
            1: { alias: "sharerUserID", type: i.Type.I32 },
            2: { alias: "recipientIdentity", type: i.Type.STRUCT, def: e.exports.Identity },
            3: { alias: "privilege", type: i.Type.I32 },
            4: { alias: "serviceCreated", type: i.Type.I64 },
            5: { alias: "serviceUpdated", type: i.Type.I64 },
            6: { alias: "serviceAssigned", type: i.Type.I64 }
          })),
          (e.exports.NoteRestrictions = i.Struct.define("NoteRestrictions", {
            1: { alias: "noUpdateTitle", type: i.Type.BOOL },
            2: { alias: "noUpdateContent", type: i.Type.BOOL },
            3: { alias: "noEmail", type: i.Type.BOOL },
            4: { alias: "noShare", type: i.Type.BOOL },
            5: { alias: "noSharePublicly", type: i.Type.BOOL }
          })),
          (e.exports.NoteLimits = i.Struct.define("NoteLimits", {
            1: { alias: "noteResourceCountMax", type: i.Type.I32 },
            2: { alias: "uploadLimit", type: i.Type.I64 },
            3: { alias: "resourceSizeMax", type: i.Type.I64 },
            4: { alias: "noteSizeMax", type: i.Type.I64 },
            5: { alias: "uploaded", type: i.Type.I64 }
          })),
          (e.exports.Task = i.Struct.define("Task", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "noteGuid", type: i.Type.STRING },
            3: { alias: "taskGroupGuid", type: i.Type.STRING },
            4: { alias: "sortWeight", type: i.Type.STRING },
            5: { alias: "label", type: i.Type.STRING }
          })),
          (e.exports.Note = i.Struct.define("Note", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "title", type: i.Type.STRING },
            3: { alias: "content", type: i.Type.STRING },
            4: { alias: "contentHash", type: i.Type.BINARY },
            5: { alias: "contentLength", type: i.Type.I32 },
            6: { alias: "created", type: i.Type.I64 },
            7: { alias: "updated", type: i.Type.I64 },
            8: { alias: "deleted", type: i.Type.I64 },
            9: { alias: "active", type: i.Type.BOOL },
            10: { alias: "updateSequenceNum", type: i.Type.I32 },
            11: { alias: "notebookGuid", type: i.Type.STRING },
            12: { alias: "tagGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            13: { alias: "resources", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Resource) },
            14: { alias: "attributes", type: i.Type.STRUCT, def: e.exports.NoteAttributes },
            15: { alias: "tagNames", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            16: { alias: "sharedNotes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SharedNote) },
            17: { alias: "restrictions", type: i.Type.STRUCT, def: e.exports.NoteRestrictions },
            18: { alias: "limits", type: i.Type.STRUCT, def: e.exports.NoteLimits },
            19: { alias: "seed", type: i.Type.STRING },
            20: { alias: "blobGuid", type: i.Type.STRING },
            21: { alias: "workspaceGuid", type: i.Type.STRING },
            22: { alias: "yjsContent", type: i.Type.STRING },
            23: { alias: "tasks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Task) }
          })),
          (e.exports.Publishing = i.Struct.define("Publishing", {
            1: { alias: "uri", type: i.Type.STRING },
            2: { alias: "order", type: i.Type.I32 },
            3: { alias: "ascending", type: i.Type.BOOL },
            4: { alias: "publicDescription", type: i.Type.STRING }
          })),
          (e.exports.BusinessNotebook = i.Struct.define("BusinessNotebook", {
            1: { alias: "notebookDescription", type: i.Type.STRING },
            2: { alias: "privilege", type: i.Type.I32 },
            3: { alias: "recommended", type: i.Type.BOOL }
          })),
          (e.exports.SavedSearchScope = i.Struct.define("SavedSearchScope", {
            1: { alias: "includeAccount", type: i.Type.BOOL },
            2: { alias: "includePersonalLinkedNotebooks", type: i.Type.BOOL },
            3: { alias: "includeBusinessLinkedNotebooks", type: i.Type.BOOL }
          })),
          (e.exports.SavedSearch = i.Struct.define("SavedSearch", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "name", type: i.Type.STRING },
            3: { alias: "query", type: i.Type.STRING },
            4: { alias: "format", type: i.Type.I32 },
            5: { alias: "updateSequenceNum", type: i.Type.I32 },
            6: { alias: "scope", type: i.Type.STRUCT, def: e.exports.SavedSearchScope },
            7: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.Ad = i.Struct.define("Ad", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "width", type: i.Type.I16 },
            3: { alias: "height", type: i.Type.I16 },
            4: { alias: "advertiserName", type: i.Type.STRING },
            5: { alias: "imageUrl", type: i.Type.STRING },
            6: { alias: "destinationUrl", type: i.Type.STRING },
            7: { alias: "displaySeconds", type: i.Type.I16 },
            8: { alias: "score", type: i.Type.DOUBLE },
            9: { alias: "image", type: i.Type.BINARY },
            10: { alias: "imageMime", type: i.Type.STRING },
            11: { alias: "html", type: i.Type.STRING },
            12: { alias: "displayFrequency", type: i.Type.DOUBLE },
            13: { alias: "openInTrunk", type: i.Type.BOOL }
          })),
          (e.exports.SharedNotebookRecipientSettings = i.Struct.define("SharedNotebookRecipientSettings", {
            1: { alias: "reminderNotifyEmail", type: i.Type.BOOL },
            2: { alias: "reminderNotifyInApp", type: i.Type.BOOL }
          })),
          (e.exports.NotebookRecipientSettings = i.Struct.define("NotebookRecipientSettings", {
            1: { alias: "reminderNotifyEmail", type: i.Type.BOOL },
            2: { alias: "reminderNotifyInApp", type: i.Type.BOOL },
            3: { alias: "inMyList", type: i.Type.BOOL },
            4: { alias: "stack", type: i.Type.STRING },
            5: { alias: "recipientStatus", type: i.Type.I32 }
          })),
          (e.exports.SharedNotebook = i.Struct.define("SharedNotebook", {
            1: { alias: "id", type: i.Type.I64 },
            2: { alias: "userId", type: i.Type.I32 },
            3: { alias: "notebookGuid", type: i.Type.STRING },
            4: { alias: "email", type: i.Type.STRING },
            18: { alias: "recipientIdentityId", type: i.Type.I64 },
            5: { alias: "notebookModifiable", type: i.Type.BOOL },
            7: { alias: "serviceCreated", type: i.Type.I64 },
            10: { alias: "serviceUpdated", type: i.Type.I64 },
            8: { alias: "globalId", type: i.Type.STRING },
            9: { alias: "username", type: i.Type.STRING },
            11: { alias: "privilege", type: i.Type.I32 },
            13: { alias: "recipientSettings", type: i.Type.STRUCT, def: e.exports.SharedNotebookRecipientSettings },
            14: { alias: "sharerUserId", type: i.Type.I32 },
            15: { alias: "recipientUsername", type: i.Type.STRING },
            17: { alias: "recipientUserId", type: i.Type.I32 },
            16: { alias: "serviceAssigned", type: i.Type.I64 }
          })),
          (e.exports.CanMoveToContainerRestrictions = i.Struct.define("CanMoveToContainerRestrictions", {
            1: { alias: "canMoveToContainer", type: i.Type.I32 }
          })),
          (e.exports.NotebookRestrictions = i.Struct.define("NotebookRestrictions", {
            1: { alias: "noReadNotes", type: i.Type.BOOL },
            2: { alias: "noCreateNotes", type: i.Type.BOOL },
            3: { alias: "noUpdateNotes", type: i.Type.BOOL },
            4: { alias: "noExpungeNotes", type: i.Type.BOOL },
            5: { alias: "noShareNotes", type: i.Type.BOOL },
            6: { alias: "noEmailNotes", type: i.Type.BOOL },
            7: { alias: "noSendMessageToRecipients", type: i.Type.BOOL },
            8: { alias: "noUpdateNotebook", type: i.Type.BOOL },
            9: { alias: "noExpungeNotebook", type: i.Type.BOOL },
            10: { alias: "noSetDefaultNotebook", type: i.Type.BOOL },
            11: { alias: "noSetNotebookStack", type: i.Type.BOOL },
            12: { alias: "noPublishToPublic", type: i.Type.BOOL },
            13: { alias: "noPublishToBusinessLibrary", type: i.Type.BOOL },
            14: { alias: "noCreateTags", type: i.Type.BOOL },
            15: { alias: "noUpdateTags", type: i.Type.BOOL },
            16: { alias: "noExpungeTags", type: i.Type.BOOL },
            17: { alias: "noSetParentTag", type: i.Type.BOOL },
            18: { alias: "noCreateSharedNotebooks", type: i.Type.BOOL },
            19: { alias: "updateWhichSharedNotebookRestrictions", type: i.Type.I32 },
            20: { alias: "expungeWhichSharedNotebookRestrictions", type: i.Type.I32 },
            21: { alias: "noShareNotesWithBusiness", type: i.Type.BOOL },
            22: { alias: "noRenameNotebook", type: i.Type.BOOL },
            23: { alias: "noSetInMyList", type: i.Type.BOOL },
            24: { alias: "noChangeContact", type: i.Type.BOOL },
            26: { alias: "canMoveToContainerRestrictions", type: i.Type.STRUCT, def: e.exports.CanMoveToContainerRestrictions },
            27: { alias: "noSetReminderNotifyEmail", type: i.Type.BOOL },
            28: { alias: "noSetReminderNotifyInApp", type: i.Type.BOOL },
            29: { alias: "noSetRecipientSettingsStack", type: i.Type.BOOL },
            30: { alias: "noCanMoveNote", type: i.Type.BOOL }
          })),
          (e.exports.Notebook = i.Struct.define("Notebook", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "name", type: i.Type.STRING },
            5: { alias: "updateSequenceNum", type: i.Type.I32 },
            6: { alias: "defaultNotebook", type: i.Type.BOOL },
            7: { alias: "serviceCreated", type: i.Type.I64 },
            8: { alias: "serviceUpdated", type: i.Type.I64 },
            10: { alias: "publishing", type: i.Type.STRUCT, def: e.exports.Publishing },
            11: { alias: "published", type: i.Type.BOOL },
            12: { alias: "stack", type: i.Type.STRING },
            13: { alias: "sharedNotebookIds", type: i.Type.LIST, def: i.List.define(i.Type.I64) },
            14: { alias: "sharedNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SharedNotebook) },
            15: { alias: "businessNotebook", type: i.Type.STRUCT, def: e.exports.BusinessNotebook },
            16: { alias: "contact", type: i.Type.STRUCT, def: e.exports.User },
            17: { alias: "restrictions", type: i.Type.STRUCT, def: e.exports.NotebookRestrictions },
            18: { alias: "recipientSettings", type: i.Type.STRUCT, def: e.exports.NotebookRecipientSettings },
            19: { alias: "workspaceGuid", type: i.Type.STRING },
            20: { alias: "inWorkspace", type: i.Type.BOOL },
            21: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.LinkedNotebook = i.Struct.define("LinkedNotebook", {
            2: { alias: "shareName", type: i.Type.STRING },
            3: { alias: "username", type: i.Type.STRING },
            4: { alias: "shardId", type: i.Type.STRING },
            5: { alias: "sharedNotebookGlobalId", type: i.Type.STRING },
            6: { alias: "uri", type: i.Type.STRING },
            7: { alias: "guid", type: i.Type.STRING },
            8: { alias: "updateSequenceNum", type: i.Type.I32 },
            9: { alias: "noteStoreUrl", type: i.Type.STRING },
            10: { alias: "webApiUrlPrefix", type: i.Type.STRING },
            11: { alias: "stack", type: i.Type.STRING },
            12: { alias: "businessId", type: i.Type.I32 },
            13: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.NotebookDescriptor = i.Struct.define("NotebookDescriptor", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "notebookDisplayName", type: i.Type.STRING },
            3: { alias: "contactName", type: i.Type.STRING },
            4: { alias: "hasSharedNotebook", type: i.Type.BOOL },
            5: { alias: "joinedUserCount", type: i.Type.I32 }
          })),
          (e.exports.UserProfile = i.Struct.define("UserProfile", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "name", type: i.Type.STRING },
            3: { alias: "email", type: i.Type.STRING },
            4: { alias: "username", type: i.Type.STRING },
            5: { alias: "attributes", type: i.Type.STRUCT, def: e.exports.BusinessUserAttributes },
            6: { alias: "joined", type: i.Type.I64 },
            7: { alias: "photoLastUpdated", type: i.Type.I64 },
            8: { alias: "photoUrl", type: i.Type.STRING },
            9: { alias: "role", type: i.Type.I32 },
            10: { alias: "status", type: i.Type.I32 }
          })),
          (e.exports.RelatedContentImage = i.Struct.define("RelatedContentImage", {
            1: { alias: "url", type: i.Type.STRING },
            2: { alias: "width", type: i.Type.I32 },
            3: { alias: "height", type: i.Type.I32 },
            4: { alias: "pixelRatio", type: i.Type.DOUBLE },
            5: { alias: "fileSize", type: i.Type.I32 }
          })),
          (e.exports.RelatedContent = i.Struct.define("RelatedContent", {
            1: { alias: "contentId", type: i.Type.STRING },
            2: { alias: "title", type: i.Type.STRING },
            3: { alias: "url", type: i.Type.STRING },
            4: { alias: "sourceId", type: i.Type.STRING },
            5: { alias: "sourceUrl", type: i.Type.STRING },
            6: { alias: "sourceFaviconUrl", type: i.Type.STRING },
            7: { alias: "sourceName", type: i.Type.STRING },
            8: { alias: "date", type: i.Type.I64 },
            9: { alias: "teaser", type: i.Type.STRING },
            10: { alias: "thumbnails", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RelatedContentImage) },
            11: { alias: "contentType", type: i.Type.I32 },
            12: { alias: "accessType", type: i.Type.I32 },
            13: { alias: "visibleUrl", type: i.Type.STRING },
            14: { alias: "clipUrl", type: i.Type.STRING },
            15: { alias: "contact", type: i.Type.STRUCT, def: e.exports.Contact },
            16: { alias: "authors", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.BusinessInvitation = i.Struct.define("BusinessInvitation", {
            1: { alias: "businessId", type: i.Type.I32 },
            2: { alias: "email", type: i.Type.STRING },
            3: { alias: "role", type: i.Type.I32 },
            4: { alias: "status", type: i.Type.I32 },
            5: { alias: "requesterId", type: i.Type.I32 },
            6: { alias: "fromWorkChat", type: i.Type.BOOL },
            7: { alias: "created", type: i.Type.I64 },
            8: { alias: "mostRecentReminder", type: i.Type.I64 }
          })),
          (e.exports.UserIdentity = i.Struct.define("UserIdentity", {
            1: { alias: "type", type: i.Type.I32 },
            2: { alias: "stringIdentifier", type: i.Type.STRING },
            3: { alias: "longIdentifier", type: i.Type.I64 },
            4: { alias: "knownUserId", type: i.Type.I32 }
          })),
          (e.exports.ClientAccessEntry = i.Struct.define("ClientAccessEntry", {
            1: { alias: "accessTime", type: i.Type.I64 },
            2: { alias: "appName", type: i.Type.STRING },
            3: { alias: "deviceName", type: i.Type.STRING },
            4: { alias: "ipAddress", type: i.Type.STRING },
            5: { alias: "location", type: i.Type.STRING },
            6: { alias: "browserType", type: i.Type.I32 },
            7: { alias: "apiKeyId", type: i.Type.I32 },
            8: { alias: "longSessionCreated", type: i.Type.I64 },
            9: { alias: "userId", type: i.Type.I32 },
            10: { alias: "authenticatedClientUserId", type: i.Type.I32 },
            11: { alias: "businessAdmin", type: i.Type.BOOL }
          })),
          (e.exports.ServiceAccessEntry = i.Struct.define("ServiceAccessEntry", {
            1: { alias: "accessTime", type: i.Type.I64 },
            2: { alias: "serviceName", type: i.Type.STRING },
            3: { alias: "userId", type: i.Type.I32 },
            4: { alias: "authenticatedClientUserId", type: i.Type.I32 },
            5: { alias: "apiKeyId", type: i.Type.I32 },
            6: { alias: "businessAdmin", type: i.Type.BOOL }
          })),
          (e.exports.NoncancelableSubscription = i.Struct.define("NoncancelableSubscription", {
            1: { alias: "subscriptionId", type: i.Type.I32 },
            2: { alias: "user", type: i.Type.STRUCT, def: e.exports.User },
            3: { alias: "premiumServiceStatus", type: i.Type.I32 },
            4: { alias: "premiumCommerceService", type: i.Type.STRING },
            5: { alias: "itunesReceiptData", type: i.Type.STRING },
            6: { alias: "amazonUserId", type: i.Type.STRING },
            7: { alias: "amazonPurchaseToken", type: i.Type.STRING },
            8: { alias: "premiumServiceSku", type: i.Type.STRING },
            9: { alias: "nextPaymentDue", type: i.Type.I64 },
            10: { alias: "premiumLockUntil", type: i.Type.I64 },
            11: { alias: "currency", type: i.Type.STRING },
            12: { alias: "unitPrice", type: i.Type.I32 },
            13: { alias: "itunesOriginalTransactionId", type: i.Type.STRING }
          })),
          (e.exports.LinkedAccount = i.Struct.define("LinkedAccount", {
            1: { alias: "inAccountUserId", type: i.Type.I32 },
            2: { alias: "shardId", type: i.Type.STRING },
            3: { alias: "guid", type: i.Type.STRING },
            4: { alias: "updateSequenceNum", type: i.Type.I32 },
            5: { alias: "noteStoreUrl", type: i.Type.STRING },
            6: { alias: "webApiUrlPrefix", type: i.Type.STRING }
          })),
          (e.exports.UserRestrictions = i.Struct.define("UserRestrictions", {
            1: { alias: "noteAndNotebookSharesAllowance", type: i.Type.I32 }
          })),
          (e.exports.UserDataSources = i.Struct.define("UserDataSources", {
            1: { alias: "associationsSource", type: i.Type.I32 },
            2: { alias: "sharingSource", type: i.Type.I32 }
          })),
          (e.exports.SdmsDevice = i.Struct.define("SdmsDevice", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "userId", type: i.Type.I32 },
            3: { alias: "deviceDescription", type: i.Type.STRING },
            4: { alias: "deviceIdentifier", type: i.Type.STRING },
            5: { alias: "createdAt", type: i.Type.I32 },
            6: { alias: "updatedAt", type: i.Type.I32 }
          })),
          (e.exports.SdmsSession = i.Struct.define("SdmsSession", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "clientId", type: i.Type.STRING },
            3: { alias: "consumerKey", type: i.Type.STRING },
            4: { alias: "refreshToken", type: i.Type.STRING },
            5: { alias: "applicationName", type: i.Type.STRING },
            6: { alias: "applicationMetadata", type: i.Type.STRING },
            7: { alias: "keyId", type: i.Type.STRING },
            8: { alias: "keyRingId", type: i.Type.STRING },
            9: { alias: "isRevoked", type: i.Type.BOOL },
            10: { alias: "createdAt", type: i.Type.I32 },
            11: { alias: "updatedAt", type: i.Type.I32 },
            12: { alias: "revokedAt", type: i.Type.I32 },
            13: { alias: "device", type: i.Type.STRUCT, def: e.exports.SdmsDevice }
          }));
      },
      60570: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(77915),
          a = s(52965),
          o = s(53109);
        (e.exports.LoginStatus = {
          UNKNOWN: 0,
          INVALID_FORMAT: 1,
          NOT_FOUND: 2,
          INVITE_PENDING: 3,
          PASSWORD_RESET: 4,
          PASSWORD: 5,
          SSO: 6
        }),
          (e.exports.NapMigrationState = {
            UNKNOWN: 0,
            LEGACY: 1,
            MIGRATE_ON_LOGIN: 2,
            MIGRATED: 3,
            MIGRATION_FAILED: 4,
            MIGRATED_NAP_ONLY: 5
          }),
          (e.exports.BusinessUserType = { UNKNOWN: 0, PERSONAL_ONLY: 1, LEGACY: 2, BUSINESS_ONLY: 3 }),
          (e.exports.EDAM_VERSION_MAJOR = 1),
          (e.exports.EDAM_VERSION_MINOR = 28),
          (e.exports.PublicUserInfo = i.Struct.define("PublicUserInfo", {
            1: { alias: "userId", type: i.Type.I32 },
            2: { alias: "shardId", type: i.Type.STRING },
            3: { alias: "privilege", type: i.Type.I32 },
            7: { alias: "serviceLevel", type: i.Type.I32 },
            4: { alias: "username", type: i.Type.STRING },
            5: { alias: "noteStoreUrl", type: i.Type.STRING },
            6: { alias: "webApiUrlPrefix", type: i.Type.STRING },
            8: { alias: "serviceLevelV2", type: i.Type.I32 }
          })),
          (e.exports.UserUrls = i.Struct.define("UserUrls", {
            1: { alias: "noteStoreUrl", type: i.Type.STRING },
            2: { alias: "webApiUrlPrefix", type: i.Type.STRING },
            3: { alias: "userStoreUrl", type: i.Type.STRING },
            4: { alias: "utilityUrl", type: i.Type.STRING },
            5: { alias: "messageStoreUrl", type: i.Type.STRING },
            6: { alias: "userWebSocketUrl", type: i.Type.STRING },
            7: { alias: "communicationEngineUrl", type: i.Type.STRING },
            8: { alias: "workspaceDashboardUrl", type: i.Type.STRING },
            9: { alias: "workspaceDirectoryUrl", type: i.Type.STRING }
          })),
          (e.exports.AuthenticationResult = i.Struct.define("AuthenticationResult", {
            1: { alias: "currentTime", type: i.Type.I64 },
            2: { alias: "authenticationToken", type: i.Type.STRING },
            3: { alias: "expiration", type: i.Type.I64 },
            4: { alias: "user", type: i.Type.STRUCT, def: n.User },
            5: { alias: "publicUserInfo", type: i.Type.STRUCT, def: e.exports.PublicUserInfo },
            6: { alias: "noteStoreUrl", type: i.Type.STRING },
            7: { alias: "webApiUrlPrefix", type: i.Type.STRING },
            8: { alias: "secondFactorRequired", type: i.Type.BOOL },
            9: { alias: "secondFactorDeliveryHint", type: i.Type.STRING },
            10: { alias: "urls", type: i.Type.STRUCT, def: e.exports.UserUrls }
          })),
          (e.exports.LocalizedString = i.Struct.define("LocalizedString", {
            1: { alias: "zh", type: i.Type.STRING },
            2: { alias: "en", type: i.Type.STRING }
          })),
          (e.exports.BootstrapSettings = i.Struct.define("BootstrapSettings", {
            1: { alias: "serviceHost", type: i.Type.STRING },
            2: { alias: "marketingUrl", type: i.Type.STRING },
            3: { alias: "supportUrl", type: i.Type.STRING },
            4: { alias: "accountEmailDomain", type: i.Type.STRING },
            14: { alias: "cardscanUrl", type: i.Type.STRING },
            15: { alias: "announcementsUrl", type: i.Type.STRING },
            5: { alias: "enableFacebookSharing", type: i.Type.BOOL },
            6: { alias: "enableGiftSubscriptions", type: i.Type.BOOL },
            7: { alias: "enableSupportTickets", type: i.Type.BOOL },
            8: { alias: "enableSharedNotebooks", type: i.Type.BOOL },
            9: { alias: "enableSingleNoteSharing", type: i.Type.BOOL },
            10: { alias: "enableSponsoredAccounts", type: i.Type.BOOL },
            11: { alias: "enableTwitterSharing", type: i.Type.BOOL },
            12: { alias: "enableLinkedInSharing", type: i.Type.BOOL },
            13: { alias: "enablePublicNotebooks", type: i.Type.BOOL },
            16: { alias: "enableGoogle", type: i.Type.BOOL },
            17: { alias: "isShowYXRegister", type: i.Type.BOOL },
            18: { alias: "isShowYXLogin", type: i.Type.BOOL },
            19: { alias: "isShowENRegister", type: i.Type.BOOL },
            20: { alias: "YXRegisterViewMsg", type: i.Type.STRUCT, def: e.exports.LocalizedString },
            21: { alias: "YXLoginViewMsg", type: i.Type.STRUCT, def: e.exports.LocalizedString },
            22: { alias: "isShowENLogin", type: i.Type.BOOL },
            23: { alias: "ENLoginViewMsg", type: i.Type.STRUCT, def: e.exports.LocalizedString },
            24: { alias: "YXLoginENEntranceMsg", type: i.Type.STRUCT, def: e.exports.LocalizedString },
            25: { alias: "webUiUrl", type: i.Type.STRING }
          })),
          (e.exports.BootstrapProfile = i.Struct.define("BootstrapProfile", {
            1: { alias: "name", type: i.Type.STRING },
            2: { alias: "settings", type: i.Type.STRUCT, def: e.exports.BootstrapSettings }
          })),
          (e.exports.BootstrapInfo = i.Struct.define("BootstrapInfo", {
            1: { alias: "profiles", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BootstrapProfile) }
          })),
          (e.exports.PushNotificationCredentials = i.Struct.define("PushNotificationCredentials", {
            1: { alias: "iosDeviceToken", type: i.Type.BINARY },
            2: { alias: "gcmRegistrationId", type: i.Type.STRING }
          })),
          (e.exports.RegisterForSyncPushNotificationsResult = i.Struct.define("RegisterForSyncPushNotificationsResult", {
            1: { alias: "sharedSecret", type: i.Type.BINARY }
          })),
          (e.exports.MultiRegisterForSyncPushNotificationsResult = i.Struct.define("MultiRegisterForSyncPushNotificationsResult", {
            1: { alias: "userId", type: i.Type.STRING },
            2: { alias: "sharedSecret", type: i.Type.BINARY }
          })),
          (e.exports.AuthenticationParameters = i.Struct.define("AuthenticationParameters", {
            1: { alias: "usernameOrEmail", type: i.Type.STRING },
            2: { alias: "password", type: i.Type.STRING },
            3: { alias: "ssoLoginToken", type: i.Type.STRING },
            4: { alias: "consumerKey", type: i.Type.STRING },
            5: { alias: "consumerSecret", type: i.Type.STRING },
            6: { alias: "deviceIdentifier", type: i.Type.STRING },
            7: { alias: "deviceDescription", type: i.Type.STRING },
            8: { alias: "supportsTwoFactor", type: i.Type.BOOL },
            9: { alias: "supportsBusinessOnlyAccounts", type: i.Type.BOOL },
            10: { alias: "openIdCredential", type: i.Type.STRUCT, def: o.OpenIdCredential },
            11: { alias: "exchangeToken", type: i.Type.STRING }
          })),
          (e.exports.BusinessInviteInfo = i.Struct.define("BusinessInviteInfo", { 1: { alias: "businessId", type: i.Type.I32 } })),
          (e.exports.GetLoginInfoRequest = i.Struct.define("GetLoginInfoRequest", {
            1: { alias: "usernameOrEmail", type: i.Type.STRING },
            2: { alias: "openIdCredential", type: i.Type.STRUCT, def: o.OpenIdCredential }
          })),
          (e.exports.LoginInfo = i.Struct.define("LoginInfo", {
            1: { alias: "loginStatus", type: i.Type.I32 },
            2: { alias: "pendingInvites", type: i.Type.SET, def: i.Set.define(i.Type.STRUCT, e.exports.BusinessInviteInfo) },
            3: { alias: "businessUserType", type: i.Type.I32 },
            4: { alias: "facadeEnabled", type: i.Type.BOOL },
            5: { alias: "napMigrationState", type: i.Type.I32 },
            6: { alias: "signedUsernameOrEmail", type: i.Type.STRING }
          })),
          (e.exports.GetNAPAccessJWTRequest = i.Struct.define("GetNAPAccessJWTRequest", {
            1: { alias: "includeBusinessFields", type: i.Type.BOOL }
          }));
        var r = (e.exports.UserStore = {});
        function p(e) {
          (this.output = e), (this.seqid = 0);
        }
        function u(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), r))
            e[n] && this.processor.addMethod(r[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (r.checkVersion = i.Method.define({
          alias: "checkVersion",
          args: i.Struct.define("checkVersionArgs", {
            1: { alias: "clientName", type: i.Type.STRING, index: 0 },
            2: { alias: "edamVersionMajor", type: i.Type.I16, index: 1 },
            3: { alias: "edamVersionMinor", type: i.Type.I16, index: 2 }
          }),
          result: i.Struct.define("checkVersionResult", { 0: { alias: "returnValue", type: i.Type.BOOL } })
        })),
          (r.getBootstrapInfo = i.Method.define({
            alias: "getBootstrapInfo",
            args: i.Struct.define("getBootstrapInfoArgs", { 1: { alias: "locale", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getBootstrapInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BootstrapInfo }
            })
          })),
          (r.getYXBootstrapInfo = i.Method.define({
            alias: "getYXBootstrapInfo",
            args: i.Struct.define("getYXBootstrapInfoArgs", { 1: { alias: "locale", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getYXBootstrapInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BootstrapInfo }
            })
          })),
          (r.authenticate = i.Method.define({
            alias: "authenticate",
            args: i.Struct.define("authenticateArgs", {
              1: { alias: "username", type: i.Type.STRING, index: 0 },
              2: { alias: "password", type: i.Type.STRING, index: 1 },
              3: { alias: "consumerKey", type: i.Type.STRING, index: 2 },
              4: { alias: "consumerSecret", type: i.Type.STRING, index: 3 },
              5: { alias: "supportsTwoFactor", type: i.Type.BOOL, index: 4 }
            }),
            result: i.Struct.define("authenticateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.authenticateOpenID = i.Method.define({
            alias: "authenticateOpenID",
            args: i.Struct.define("authenticateOpenIDArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: o.OpenIdCredential, index: 0 },
              2: { alias: "consumerKey", type: i.Type.STRING, index: 1 },
              3: { alias: "consumerSecret", type: i.Type.STRING, index: 2 },
              4: { alias: "deviceIdentifier", type: i.Type.STRING, index: 3 },
              5: { alias: "deviceDescription", type: i.Type.STRING, index: 4 },
              6: { alias: "authLongSession", type: i.Type.BOOL, index: 5 },
              7: { alias: "supportsTwoFactor", type: i.Type.BOOL, index: 6 }
            }),
            result: i.Struct.define("authenticateOpenIDResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.authenticateLongSession = i.Method.define({
            alias: "authenticateLongSession",
            args: i.Struct.define("authenticateLongSessionArgs", {
              1: { alias: "username", type: i.Type.STRING, index: 0 },
              2: { alias: "password", type: i.Type.STRING, index: 1 },
              3: { alias: "consumerKey", type: i.Type.STRING, index: 2 },
              4: { alias: "consumerSecret", type: i.Type.STRING, index: 3 },
              5: { alias: "deviceIdentifier", type: i.Type.STRING, index: 4 },
              6: { alias: "deviceDescription", type: i.Type.STRING, index: 5 },
              7: { alias: "supportsTwoFactor", type: i.Type.BOOL, index: 6 }
            }),
            result: i.Struct.define("authenticateLongSessionResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.authenticateLongSessionV2 = i.Method.define({
            alias: "authenticateLongSessionV2",
            args: i.Struct.define("authenticateLongSessionV2Args", {
              1: { alias: "authParams", type: i.Type.STRUCT, def: e.exports.AuthenticationParameters, index: 0 }
            }),
            result: i.Struct.define("authenticateLongSessionV2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.completeTwoFactorAuthentication = i.Method.define({
            alias: "completeTwoFactorAuthentication",
            args: i.Struct.define("completeTwoFactorAuthenticationArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oneTimeCode", type: i.Type.STRING, index: 1 },
              3: { alias: "deviceIdentifier", type: i.Type.STRING, index: 2 },
              4: { alias: "deviceDescription", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("completeTwoFactorAuthenticationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.revokeLongSession = i.Method.define({
            alias: "revokeLongSession",
            args: i.Struct.define("revokeLongSessionArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("revokeLongSessionResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.authenticateToBusiness = i.Method.define({
            alias: "authenticateToBusiness",
            args: i.Struct.define("authenticateToBusinessArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("authenticateToBusinessResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.refreshAuthentication = i.Method.define({
            alias: "refreshAuthentication",
            args: i.Struct.define("refreshAuthenticationArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("refreshAuthenticationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.refreshAuthenticationForPing = i.Method.define({
            alias: "refreshAuthenticationForPing",
            args: i.Struct.define("refreshAuthenticationForPingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("refreshAuthenticationForPingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getUser = i.Method.define({
            alias: "getUser",
            args: i.Struct.define("getUserArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.User },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getPublicUserInfo = i.Method.define({
            alias: "getPublicUserInfo",
            args: i.Struct.define("getPublicUserInfoArgs", { 1: { alias: "username", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getPublicUserInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.PublicUserInfo },
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (r.getPremiumInfo = i.Method.define({
            alias: "getPremiumInfo",
            args: i.Struct.define("getPremiumInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getPremiumInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.PremiumInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getSubscriptionInfo = i.Method.define({
            alias: "getSubscriptionInfo",
            args: i.Struct.define("getSubscriptionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getSubscriptionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.SubscriptionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getNoteStoreUrl = i.Method.define({
            alias: "getNoteStoreUrl",
            args: i.Struct.define("getNoteStoreUrlArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getNoteStoreUrlResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getUserUrls = i.Method.define({
            alias: "getUserUrls",
            args: i.Struct.define("getUserUrlsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserUrlsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UserUrls },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.inviteToBusiness = i.Method.define({
            alias: "inviteToBusiness",
            args: i.Struct.define("inviteToBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emailAddress", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("inviteToBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.removeFromBusiness = i.Method.define({
            alias: "removeFromBusiness",
            args: i.Struct.define("removeFromBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emailAddress", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("removeFromBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.updateBusinessUserIdentifier = i.Method.define({
            alias: "updateBusinessUserIdentifier",
            args: i.Struct.define("updateBusinessUserIdentifierArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oldEmailAddress", type: i.Type.STRING, index: 1 },
              3: { alias: "newEmailAddress", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updateBusinessUserIdentifierResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.listBusinessUsers = i.Method.define({
            alias: "listBusinessUsers",
            args: i.Struct.define("listBusinessUsersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessUserFilter", type: i.Type.STRUCT, def: n.BusinessUserFilter, index: 1 }
            }),
            result: i.Struct.define("listBusinessUsersResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.UserProfile) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.listBusinessUsersProfileInfo = i.Method.define({
            alias: "listBusinessUsersProfileInfo",
            args: i.Struct.define("listBusinessUsersProfileInfoArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessUserFilter", type: i.Type.STRUCT, def: n.BusinessUserFilter, index: 1 },
              3: { alias: "userProfileInfoRequest", type: i.Type.STRUCT, def: n.UserProfileInfoRequest, index: 2 }
            }),
            result: i.Struct.define("listBusinessUsersProfileInfoResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.UserProfile) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.listBusinessInvitations = i.Method.define({
            alias: "listBusinessInvitations",
            args: i.Struct.define("listBusinessInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "includeRequestedInvitations", type: i.Type.BOOL, index: 1 }
            }),
            result: i.Struct.define("listBusinessInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.registerForSyncPushNotifications = i.Method.define({
            alias: "registerForSyncPushNotifications",
            args: i.Struct.define("registerForSyncPushNotificationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credentials", type: i.Type.STRUCT, def: e.exports.PushNotificationCredentials, index: 1 }
            }),
            result: i.Struct.define("registerForSyncPushNotificationsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RegisterForSyncPushNotificationsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.multiRegisterForSyncPushNotifications = i.Method.define({
            alias: "multiRegisterForSyncPushNotifications",
            args: i.Struct.define("multiRegisterForSyncPushNotificationsArgs", {
              1: { alias: "authenticationTokens", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 0 },
              2: { alias: "credentials", type: i.Type.STRUCT, def: e.exports.PushNotificationCredentials, index: 1 }
            }),
            result: i.Struct.define("multiRegisterForSyncPushNotificationsResult", {
              0: {
                alias: "returnValue",
                type: i.Type.LIST,
                def: i.List.define(i.Type.STRUCT, e.exports.MultiRegisterForSyncPushNotificationsResult)
              },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.unregisterForSyncPushNotifications = i.Method.define({
            alias: "unregisterForSyncPushNotifications",
            args: i.Struct.define("unregisterForSyncPushNotificationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("unregisterForSyncPushNotificationsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.createSessionAuthenticationToken = i.Method.define({
            alias: "createSessionAuthenticationToken",
            args: i.Struct.define("createSessionAuthenticationTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("createSessionAuthenticationTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (r.getAccountLimits = i.Method.define({
            alias: "getAccountLimits",
            args: i.Struct.define("getAccountLimitsArgs", { 1: { alias: "serviceLevel", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("getAccountLimitsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AccountLimits },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (r.getConnectedIdentities = i.Method.define({
            alias: "getConnectedIdentities",
            args: i.Struct.define("getConnectedIdentitiesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "identityIds", type: i.Type.LIST, def: i.List.define(i.Type.I64), index: 1 }
            }),
            result: i.Struct.define("getConnectedIdentitiesResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, n.Identity) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getLoginInfo = i.Method.define({
            alias: "getLoginInfo",
            args: i.Struct.define("getLoginInfoArgs", {
              1: { alias: "getLoginInfoRequest", type: i.Type.STRUCT, def: e.exports.GetLoginInfoRequest, index: 0 }
            }),
            result: i.Struct.define("getLoginInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.LoginInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getNAPAccessToken = i.Method.define({
            alias: "getNAPAccessToken",
            args: i.Struct.define("getNAPAccessTokenArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getNAPAccessTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.getNAPAccessJWT = i.Method.define({
            alias: "getNAPAccessJWT",
            args: i.Struct.define("getNAPAccessJWTArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.GetNAPAccessJWTRequest, index: 1 }
            }),
            result: i.Struct.define("getNAPAccessJWTResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.prototype.checkVersion = function (e, t, s, i) {
            var n = r.checkVersion,
              a = new n.args();
            (a.clientName = e), (a.edamVersionMajor = t), (a.edamVersionMinor = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (p.prototype.getBootstrapInfo = function (e, t) {
            var s = r.getBootstrapInfo,
              i = new s.args();
            (i.locale = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getYXBootstrapInfo = function (e, t) {
            var s = r.getYXBootstrapInfo,
              i = new s.args();
            (i.locale = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.authenticate = function (e, t, s, i, n, a) {
            var o = r.authenticate,
              p = new o.args();
            (p.username = e),
              (p.password = t),
              (p.consumerKey = s),
              (p.consumerSecret = i),
              (p.supportsTwoFactor = n),
              o.sendRequest(this.output, this.seqid++, p, a);
          }),
          (p.prototype.authenticateOpenID = function (e, t, s, i, n, a, o, p) {
            var u = r.authenticateOpenID,
              y = new u.args();
            (y.credential = e),
              (y.consumerKey = t),
              (y.consumerSecret = s),
              (y.deviceIdentifier = i),
              (y.deviceDescription = n),
              (y.authLongSession = a),
              (y.supportsTwoFactor = o),
              u.sendRequest(this.output, this.seqid++, y, p);
          }),
          (p.prototype.authenticateLongSession = function (e, t, s, i, n, a, o, p) {
            var u = r.authenticateLongSession,
              y = new u.args();
            (y.username = e),
              (y.password = t),
              (y.consumerKey = s),
              (y.consumerSecret = i),
              (y.deviceIdentifier = n),
              (y.deviceDescription = a),
              (y.supportsTwoFactor = o),
              u.sendRequest(this.output, this.seqid++, y, p);
          }),
          (p.prototype.authenticateLongSessionV2 = function (e, t) {
            var s = r.authenticateLongSessionV2,
              i = new s.args();
            (i.authParams = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.completeTwoFactorAuthentication = function (e, t, s, i, n) {
            var a = r.completeTwoFactorAuthentication,
              o = new a.args();
            (o.authenticationToken = e),
              (o.oneTimeCode = t),
              (o.deviceIdentifier = s),
              (o.deviceDescription = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (p.prototype.revokeLongSession = function (e, t) {
            var s = r.revokeLongSession,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.authenticateToBusiness = function (e, t) {
            var s = r.authenticateToBusiness,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.refreshAuthentication = function (e, t) {
            var s = r.refreshAuthentication,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.refreshAuthenticationForPing = function (e, t) {
            var s = r.refreshAuthenticationForPing,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getUser = function (e, t) {
            var s = r.getUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getPublicUserInfo = function (e, t) {
            var s = r.getPublicUserInfo,
              i = new s.args();
            (i.username = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getPremiumInfo = function (e, t) {
            var s = r.getPremiumInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getSubscriptionInfo = function (e, t) {
            var s = r.getSubscriptionInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getNoteStoreUrl = function (e, t) {
            var s = r.getNoteStoreUrl,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getUserUrls = function (e, t) {
            var s = r.getUserUrls,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.inviteToBusiness = function (e, t, s) {
            var i = r.inviteToBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.emailAddress = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.removeFromBusiness = function (e, t, s) {
            var i = r.removeFromBusiness,
              n = new i.args();
            (n.authenticationToken = e), (n.emailAddress = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.updateBusinessUserIdentifier = function (e, t, s, i) {
            var n = r.updateBusinessUserIdentifier,
              a = new n.args();
            (a.authenticationToken = e), (a.oldEmailAddress = t), (a.newEmailAddress = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (p.prototype.listBusinessUsers = function (e, t, s) {
            var i = r.listBusinessUsers,
              n = new i.args();
            (n.authenticationToken = e), (n.businessUserFilter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.listBusinessUsersProfileInfo = function (e, t, s, i) {
            var n = r.listBusinessUsersProfileInfo,
              a = new n.args();
            (a.authenticationToken = e),
              (a.businessUserFilter = t),
              (a.userProfileInfoRequest = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (p.prototype.listBusinessInvitations = function (e, t, s) {
            var i = r.listBusinessInvitations,
              n = new i.args();
            (n.authenticationToken = e), (n.includeRequestedInvitations = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.registerForSyncPushNotifications = function (e, t, s) {
            var i = r.registerForSyncPushNotifications,
              n = new i.args();
            (n.authenticationToken = e), (n.credentials = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.multiRegisterForSyncPushNotifications = function (e, t, s) {
            var i = r.multiRegisterForSyncPushNotifications,
              n = new i.args();
            (n.authenticationTokens = e), (n.credentials = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.unregisterForSyncPushNotifications = function (e, t) {
            var s = r.unregisterForSyncPushNotifications,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.createSessionAuthenticationToken = function (e, t) {
            var s = r.createSessionAuthenticationToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getAccountLimits = function (e, t) {
            var s = r.getAccountLimits,
              i = new s.args();
            (i.serviceLevel = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getConnectedIdentities = function (e, t, s) {
            var i = r.getConnectedIdentities,
              n = new i.args();
            (n.authenticationToken = e), (n.identityIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (p.prototype.getLoginInfo = function (e, t) {
            var s = r.getLoginInfo,
              i = new s.args();
            (i.getLoginInfoRequest = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getNAPAccessToken = function (e, t) {
            var s = r.getNAPAccessToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.getNAPAccessJWT = function (e, t, s) {
            var i = r.getNAPAccessJWT,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (e.exports.UserStore.Client = p),
          (u.prototype.start = function () {
            this.stransport.listen();
          }),
          (u.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.UserStore.Server = u);
      },
      2401: function (e, t, s) {
        var i = s(24527).Thrift,
          n = s(52965),
          a = s(77915),
          o = s(27909),
          r = s(35137),
          p = s(53109),
          u = s(88606),
          y = s(60570);
        (e.exports.MarketingEmailType = { DESKTOP_UPSELL: 1, CLIPPER_UPSELL: 2, MOBILE_UPSELL: 3, VIEW_NOTE_ON_DESKTOP: 4 }),
          (e.exports.TsdType = { REGULAR_TSD: 1, TARGETED_UPSELL: 2 }),
          (e.exports.TsdTiming = { SUITABLE: 1, BEFORE_FLE: 2, AFTER_FLE: 3, IMMEDIATELY: 4, NOTE_CLOSE: 5 }),
          (e.exports.TsdVariation = {
            DIALOG_VAR1: 1,
            FULLSCREEN1BUTTON_DISMISS: 2,
            FULLSCREEN1BUTTON_NODISMISS: 3,
            FULLSCREEN1BUTTON_TIERPATH: 4,
            FULLSCREEN1BUTTON_VAR2: 5,
            FULLSCREEN3BUTTONS_DEFAULT: 6,
            FULLSCREEN3BUTTONS_DISMISS: 7,
            FULLSCREEN3BUTTONS_NODISMISS: 8,
            FULLSCREEN3BUTTONS_BEFOREFLE: 14,
            MODAL_DEFAULT: 9,
            NOTIFICATION_ASPIRATIONAL: 10,
            NOTIFICATION_STORAGE: 11,
            SHEET_ASPIRATIONAL: 12,
            SHEET_STORAGE: 13,
            BANNER_LEARNMORE: 16,
            BANNER_UPGRADE: 17,
            FULLSCREEN_SINGLESDAY: 18,
            FULLSCREEN_DISCOUNT: 19,
            FULLSCREEN_NEWYEAR: 20,
            TEST_UNSUPPORTED: 15
          }),
          (e.exports.IncentiveType = {
            GNOME_FIFTY_PERCENT_OFF: 1,
            GNOME_TWENTY_FIVE_PERCENT_OFF: 2,
            GNOME_FORTY_PERCENT_OFF: 3,
            GNOME_TEN_PERCENT_OFF: 4,
            GNOME_ONE_MONTH_TRIAL: 5,
            GNOME_THREE_MONTHS_FREE: 6,
            GNOME_SIX_MONTHS_FREE: 7
          }),
          (e.exports.AuthenticationTokenStatus = { VALID: 0, EXPIRED: 1, REVOKED: 2, INVALID: 3 }),
          (e.exports.RelatedContentSourceType = { NEWS: 1, PROFILE: 2, REFERENCE: 3 }),
          (e.exports.NsvcTokenType = {
            MOBILE_DEFAULT: 0,
            MOBILE_NEUTRON_IOS: 1,
            MOBILE_NEUTRON_ANDROID: 2,
            IN_APP_ION: 3,
            IN_APP_BORON_MAC: 4,
            IN_APP_BORON_WIN: 5,
            IN_APP_BORON_LINUX: 6,
            PUSH_ION: 7,
            PUSH_BORON_MAC: 8,
            PUSH_BORON_WIN: 9,
            PUSH_BORON_LINUX: 10
          }),
          (e.exports.SurveyEntityType = { NOTE: 1, NOTEBOOK: 2 }),
          (e.exports.SurveyStatus = { OPEN: 0, FINALIZED: 1, CLOSED: 100 }),
          (e.exports.SurveyItemStatus = { OPEN: 0, FINALIZED: 1 }),
          (e.exports.FeatureKey = {
            WORKSPACES: 0,
            AUDITING: 1,
            RTE: 2,
            BOARDVIEW: 3,
            TASKS: 4,
            PESO: 5,
            SEARCH_V4: 6,
            REMINDERS: 7,
            ION_INK_SKETCH: 8,
            HOME: 9,
            WORKCHAT: 10,
            BOB_SEPARATION: 11,
            TASKS_2020: 12,
            CALENDAR_INTEGRATION_MVP: 13,
            RECURRING_TASKS: 14
          }),
          (e.exports.BetaFeatureEnrollmentStatus = { WAITLISTED: 0, ENROLLED: 1, ENABLED: 2, DISABLED: 3 }),
          (e.exports.PinnedEntityType = { NOTE: 0, NOTEBOOK: 1, EXTERNAL: 2 }),
          (e.exports.MmsvcClientType = { UNKNOWN: 0, ION: 1, NEUTRON_IOS: 2, NEUTRON_ANDROID: 3, BORON_MAC: 4, BORON_WIN: 5 }),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_GOOGLE_CONNECT = 1),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_GOOGLE_GLASS = 2),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_FACEBOOK = 3),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_LINKEDIN = 4),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_WSJ = 5),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_NIKKEI = 6),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_SALESFORCE = 7),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_MICROSOFT = 8),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_APPLE = 9),
          (e.exports.OAUTH_CREDENTIAL_SERVICE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]),
          (e.exports.OAUTH_CREDENTIAL_SCOPE_GOOGLE_CONTACTS = "/m8/feeds"),
          (e.exports.OAUTH_CREDENTIAL_FULL_SCOPE_GOOGLE_CONTACTS = "https://www.google.com/m8/feeds"),
          (e.exports.OAUTH_CREDENTIAL_SCOPE_GOOGLE_DRIVE = "/auth/drive"),
          (e.exports.OAUTH_CREDENTIAL_FULL_SCOPE_GOOGLE_DRIVE = "https://www.googleapis.com/auth/drive"),
          (e.exports.OAUTH_CREDENTIAL_SCOPE_GOOGLE_CALENDAR = "/auth/calendar"),
          (e.exports.OAUTH_CREDENTIAL_FULL_SCOPE_GOOGLE_CALENDAR = "https://www.googleapis.com/auth/calendar"),
          (e.exports.OPENID_SCOPE_GOOGLE_OPENID = "openid"),
          (e.exports.OPENID_SCOPE_GOOGLE_EMAIL = "email"),
          (e.exports.OPENID_SCOPE_GOOGLE_PROFILE = "profile"),
          (e.exports.OAUTH_CREDENTIAL_GOOGLE_SCOPES = [
            "/m8/feeds",
            "https://www.google.com/m8/feeds",
            "/auth/drive",
            "https://www.googleapis.com/auth/drive",
            "/auth/calendar",
            "https://www.googleapis.com/auth/calendar"
          ]),
          (e.exports.OPENID_SCOPES_GOOGLE = ["openid", "email", "profile"]),
          (e.exports.EDAM_OAUTH_SCOPE_LEN_MAX = 4096),
          (e.exports.EDAM_OAUTH_SCOPE_LEN_MIN = 0),
          (e.exports.EDAM_OAUTH_VERSION_1 = 1),
          (e.exports.EDAM_OAUTH_VERSION_2 = 2),
          (e.exports.EDAM_OAUTH_VERSIONS = [1, 2]),
          (e.exports.MAX_SERVICE_UPDATED_FROM_NOTES_REQUEST_SIZE_LIMIT = 32),
          (e.exports.EDAM_CLIENT_TYPE_ION = "ion"),
          (e.exports.EDAM_CLIENT_TYPE_BORON = "boron"),
          (e.exports.EDAM_CLIENT_TYPE_DASHBOARDS = "dashboards"),
          (e.exports.EDAM_CLIENT_TYPES = ["ion", "boron", "dashboards"]),
          (e.exports.SPACE_FLE_VIEW_SPACE_PROMPT = "onboarding_ViewSpace_Prompt"),
          (e.exports.SPACE_FLE_VIEW_SPACE_INTRO = "onboarding_ViewSpace_Intro"),
          (e.exports.SPACE_FLE_VIEW_DIRECTORY_INTRO = "onboarding_SpaceDirectory_Intro"),
          (e.exports.SPACE_FLE_KEYS = ["onboarding_ViewSpace_Prompt", "onboarding_ViewSpace_Intro", "onboarding_SpaceDirectory_Intro"]),
          (e.exports.SupportTicket = i.Struct.define("SupportTicket", {
            1: { alias: "applicationVersion", type: i.Type.STRING },
            2: { alias: "contactEmail", type: i.Type.STRING },
            3: { alias: "osInfo", type: i.Type.STRING },
            4: { alias: "deviceInfo", type: i.Type.STRING },
            5: { alias: "carrierInfo", type: i.Type.STRING },
            6: { alias: "connectionInfo", type: i.Type.STRING },
            7: { alias: "logFile", type: i.Type.STRUCT, def: a.Data },
            8: { alias: "subject", type: i.Type.STRING },
            9: { alias: "issueDescription", type: i.Type.STRING },
            10: { alias: "tags", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.AppFeedback = i.Struct.define("AppFeedback", {
            1: { alias: "rating", type: i.Type.BYTE },
            2: { alias: "feedback", type: i.Type.STRUCT, def: e.exports.SupportTicket },
            3: { alias: "requestFollowup", type: i.Type.BOOL },
            4: { alias: "ratingPerformance", type: i.Type.BYTE },
            5: { alias: "ratingFeatures", type: i.Type.BYTE },
            6: { alias: "ratingStability", type: i.Type.BYTE },
            7: { alias: "ratingEaseOfUse", type: i.Type.BYTE },
            8: { alias: "ratingTranslation", type: i.Type.BYTE }
          })),
          (e.exports.MarketingEmailParameters = i.Struct.define("MarketingEmailParameters", {
            1: { alias: "marketingEmailType", type: i.Type.I32 }
          })),
          (e.exports.CrossPromotionInfo = i.Struct.define("CrossPromotionInfo", {
            1: { alias: "usesEvernoteWindows", type: i.Type.BOOL },
            2: { alias: "usesEvernoteMac", type: i.Type.BOOL },
            3: { alias: "usesEvernoteIOS", type: i.Type.BOOL },
            4: { alias: "usesEvernoteAndroid", type: i.Type.BOOL },
            5: { alias: "usesWebClipper", type: i.Type.BOOL },
            6: { alias: "usesClearly", type: i.Type.BOOL },
            7: { alias: "usesFoodIOS", type: i.Type.BOOL },
            8: { alias: "usesFoodAndroid", type: i.Type.BOOL },
            9: { alias: "usesPenultimateIOS", type: i.Type.BOOL },
            10: { alias: "usesSkitchWindows", type: i.Type.BOOL },
            11: { alias: "usesSkitchMac", type: i.Type.BOOL },
            12: { alias: "usesSkitchIOS", type: i.Type.BOOL },
            13: { alias: "usesSkitchAndroid", type: i.Type.BOOL },
            14: { alias: "usesEvernoteSalesforce", type: i.Type.BOOL }
          })),
          (e.exports.FriendReferral = i.Struct.define("FriendReferral", {
            1: { alias: "created", type: i.Type.I64 },
            2: { alias: "email", type: i.Type.STRING },
            3: { alias: "referredUserId", type: i.Type.I32 },
            4: { alias: "pointsEarned", type: i.Type.I32 }
          })),
          (e.exports.OAuthCredential = i.Struct.define("OAuthCredential", {
            1: { alias: "serviceId", type: i.Type.I16 },
            2: { alias: "oAuthVersion", type: i.Type.I16 },
            3: { alias: "accessToken", type: i.Type.STRING },
            4: { alias: "scope", type: i.Type.STRING },
            5: { alias: "created", type: i.Type.I64 },
            6: { alias: "updated", type: i.Type.I64 },
            7: { alias: "expires", type: i.Type.I64 },
            8: { alias: "refreshAfter", type: i.Type.I64 },
            9: { alias: "instanceUrl", type: i.Type.STRING },
            10: { alias: "email", type: i.Type.STRING },
            11: { alias: "id", type: i.Type.STRING },
            12: { alias: "name", type: i.Type.STRING }
          })),
          (e.exports.NAPAuthenticationTokens = i.Struct.define("NAPAuthenticationTokens", {
            1: { alias: "refreshToken", type: i.Type.STRING },
            2: { alias: "accessToken", type: i.Type.STRING }
          })),
          (e.exports.RelatedContentSourcePreference = i.Struct.define("RelatedContentSourcePreference", {
            1: { alias: "sourceId", type: i.Type.STRING },
            2: { alias: "activated", type: i.Type.BOOL },
            3: { alias: "sourceName", type: i.Type.STRING },
            4: { alias: "sourceUrl", type: i.Type.STRING },
            5: { alias: "faviconUrl", type: i.Type.STRING },
            6: { alias: "sourceDescription", type: i.Type.STRING },
            7: { alias: "sourceType", type: i.Type.I32 }
          })),
          (e.exports.RelatedContentProfile = i.Struct.define("RelatedContentProfile", {
            1: { alias: "id", type: i.Type.STRING },
            2: { alias: "sourceId", type: i.Type.STRING },
            3: { alias: "userId", type: i.Type.I32 },
            4: { alias: "type", type: i.Type.I32 },
            5: { alias: "fullName", type: i.Type.STRING },
            6: { alias: "callingName", type: i.Type.STRING },
            7: { alias: "photoUrl", type: i.Type.STRING },
            8: { alias: "shortDescription", type: i.Type.STRING },
            9: { alias: "longDescription", type: i.Type.STRING },
            10: { alias: "contactUrls", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            11: { alias: "organizations", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) }
          })),
          (e.exports.RelatedContentProfilePage = i.Struct.define("RelatedContentProfilePage", {
            1: { alias: "relatedContentProfile", type: i.Type.STRUCT, def: e.exports.RelatedContentProfile },
            2: { alias: "userProfile", type: i.Type.STRUCT, def: a.UserProfile }
          })),
          (e.exports.PromotionStatus = i.Struct.define("PromotionStatus", {
            1: { alias: "promotionId", type: i.Type.STRING },
            2: { alias: "optedOut", type: i.Type.BOOL },
            3: { alias: "shownCount", type: i.Type.I32 },
            4: { alias: "timeLastShown", type: i.Type.I64 }
          })),
          (e.exports.RealTimeAuthentication = i.Struct.define("RealTimeAuthentication", {
            1: { alias: "authenticationToken", type: i.Type.STRING }
          })),
          (e.exports.RealTimePing = i.Struct.define("RealTimePing")),
          (e.exports.RealTimeRequest = i.Struct.define("RealTimeRequest", {
            1: { alias: "realTimeAuthentication", type: i.Type.STRUCT, def: e.exports.RealTimeAuthentication },
            2: { alias: "realTimePing", type: i.Type.STRUCT, def: e.exports.RealTimePing }
          })),
          (e.exports.RealTimeAuthenticationResult = i.Struct.define("RealTimeAuthenticationResult", {
            1: { alias: "pingFrequency", type: i.Type.I16 },
            2: { alias: "userMaxMessageEventId", type: i.Type.I64 }
          })),
          (e.exports.RealTimeNotePermissionsResult = i.Struct.define("RealTimeNotePermissionsResult", {
            1: { alias: "userId", type: i.Type.I32 },
            2: { alias: "byOwnerToken", type: i.Type.STRUCT, def: a.NoteRestrictions },
            3: { alias: "byBusinessToken", type: i.Type.STRUCT, def: a.NoteRestrictions }
          })),
          (e.exports.MessageNotification = i.Struct.define("MessageNotification", {
            1: { alias: "syncChunk", type: i.Type.STRUCT, def: o.MessageSyncChunk },
            2: { alias: "previousEventId", type: i.Type.I64 }
          })),
          (e.exports.RealTimeNotification = i.Struct.define("RealTimeNotification", {
            1: { alias: "authenticationResult", type: i.Type.STRUCT, def: e.exports.RealTimeAuthenticationResult },
            2: { alias: "messageNotification", type: i.Type.STRUCT, def: e.exports.MessageNotification },
            3: { alias: "realTimePing", type: i.Type.STRUCT, def: e.exports.RealTimePing }
          })),
          (e.exports.MessagingInvitation = i.Struct.define("MessagingInvitation", {
            1: { alias: "id", type: i.Type.STRING },
            2: { alias: "senderUserId", type: i.Type.I32 },
            3: { alias: "senderFullName", type: i.Type.STRING },
            4: { alias: "senderPhoto", type: i.Type.BINARY },
            5: { alias: "invitedIdentityId", type: i.Type.I64 },
            6: { alias: "invitedContactId", type: i.Type.STRING },
            7: { alias: "invitedContactType", type: i.Type.I32 },
            8: { alias: "msgCount", type: i.Type.I32 },
            9: { alias: "firstMsgSentAt", type: i.Type.I64 },
            10: { alias: "created", type: i.Type.I64 },
            11: { alias: "threadId", type: i.Type.I64 }
          })),
          (e.exports.TeamStarterPackRequest = i.Struct.define("TeamStarterPackRequest", {
            1: { alias: "commerceService", type: i.Type.STRING },
            2: { alias: "appStoreLocale", type: i.Type.STRING }
          })),
          (e.exports.TeamStarterPackResult = i.Struct.define("TeamStarterPackResult", {
            1: { alias: "canPurchaseTeamStarterPack", type: i.Type.BOOL },
            2: { alias: "sku", type: i.Type.STRING },
            3: { alias: "seats", type: i.Type.I32 },
            4: { alias: "months", type: i.Type.I32 }
          })),
          (e.exports.TierSelectionDisplayEligibilityRequest = i.Struct.define("TierSelectionDisplayEligibilityRequest", {
            1: { alias: "numSessionsLast7Days", type: i.Type.I32 },
            2: { alias: "numSessionsLast30Days", type: i.Type.I32 },
            3: { alias: "numDaysActiveLast7Days", type: i.Type.I32 },
            4: { alias: "numDaysActiveLast30Days", type: i.Type.I32 },
            5: { alias: "teamStarterPackRequest", type: i.Type.STRUCT, def: e.exports.TeamStarterPackRequest }
          })),
          (e.exports.TierSelectionDisplayEligibilityResult = i.Struct.define("TierSelectionDisplayEligibilityResult", {
            1: { alias: "shouldShowTsd", type: i.Type.BOOL },
            2: { alias: "timeToLive", type: i.Type.I64 },
            3: { alias: "tsdType", type: i.Type.I32 },
            4: { alias: "tsdTiming", type: i.Type.SET, def: i.Set.define(i.Type.I32) },
            5: { alias: "tsdVariation", type: i.Type.I32 },
            6: { alias: "subscriptionInfo", type: i.Type.STRUCT, def: a.SubscriptionInfo },
            7: { alias: "teamStarterPackResult", type: i.Type.STRUCT, def: e.exports.TeamStarterPackResult }
          })),
          (e.exports.MoveNotebookBetweenAccountsParams = i.Struct.define("MoveNotebookBetweenAccountsParams", {
            1: { alias: "sourceNotebookGuid", type: i.Type.STRING }
          })),
          (e.exports.MoveNotebooksBetweenAccountsParams = i.Struct.define("MoveNotebooksBetweenAccountsParams", {
            1: { alias: "sourceNotebookGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            2: { alias: "preserveSourceNotes", type: i.Type.BOOL }
          })),
          (e.exports.MoveNotebooksBetweenAccountsError = i.Struct.define("MoveNotebooksBetweenAccountsError", {
            1: { alias: "notebookGuid", type: i.Type.STRING },
            2: { alias: "errorCode", type: i.Type.I32 },
            3: { alias: "parameter", type: i.Type.STRING }
          })),
          (e.exports.MoveNotebooksBetweenAccountsResult = i.Struct.define("MoveNotebooksBetweenAccountsResult", {
            1: { alias: "createdNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Notebook) },
            2: { alias: "failures", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MoveNotebooksBetweenAccountsError) }
          })),
          (e.exports.MoveNoteBetweenAccountsParams = i.Struct.define("MoveNoteBetweenAccountsParams", {
            1: { alias: "sourceNoteGuid", type: i.Type.STRING },
            2: { alias: "targetNotebookGuid", type: i.Type.STRING }
          })),
          (e.exports.MoveNoteBetweenAccountsResult = i.Struct.define("MoveNoteBetweenAccountsResult", {
            1: { alias: "sourceNote", type: i.Type.STRUCT, def: a.Note },
            2: { alias: "createdNote", type: i.Type.STRUCT, def: a.Note }
          })),
          (e.exports.IncentiveEligibilityResult = i.Struct.define("IncentiveEligibilityResult", {
            1: { alias: "eligibleForIncentive", type: i.Type.BOOL },
            2: { alias: "timeToLive", type: i.Type.I64 },
            3: { alias: "incentiveType", type: i.Type.I32 },
            4: { alias: "promoCode", type: i.Type.STRING },
            5: { alias: "promoSig", type: i.Type.STRING }
          })),
          (e.exports.ConfigValuesRequest = i.Struct.define("ConfigValuesRequest", {
            1: { alias: "keys", type: i.Type.SET, def: i.Set.define(i.Type.STRING) }
          })),
          (e.exports.NsvcThirdPartyAuthorizationTokenResult = i.Struct.define("NsvcThirdPartyAuthorizationTokenResult", {
            1: { alias: "token", type: i.Type.STRING },
            2: { alias: "expiresAt", type: i.Type.I64 }
          })),
          (e.exports.SurveyItemRating = i.Struct.define("SurveyItemRating", {
            1: { alias: "surveyItemId", type: i.Type.I32 },
            2: { alias: "userId", type: i.Type.I32 },
            3: { alias: "created", type: i.Type.I64 },
            4: { alias: "updated", type: i.Type.I64 },
            5: { alias: "rating", type: i.Type.I32 },
            6: { alias: "comment", type: i.Type.STRING }
          })),
          (e.exports.SurveyItemComment = i.Struct.define("SurveyItemComment", {
            1: { alias: "surveyItemId", type: i.Type.I32 },
            2: { alias: "userId", type: i.Type.I32 },
            3: { alias: "created", type: i.Type.I64 },
            4: { alias: "updated", type: i.Type.I64 },
            5: { alias: "comment", type: i.Type.STRING }
          })),
          (e.exports.Survey = i.Struct.define("Survey", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "entityType", type: i.Type.I32 },
            3: { alias: "entityGuid", type: i.Type.STRING },
            4: { alias: "name", type: i.Type.STRING },
            5: { alias: "descriptionNoteGuid", type: i.Type.STRING },
            6: { alias: "isAnonymous", type: i.Type.BOOL },
            7: { alias: "useNoteForDescription", type: i.Type.BOOL },
            8: { alias: "openDate", type: i.Type.I64 },
            9: { alias: "closeDate", type: i.Type.I64 },
            10: { alias: "status", type: i.Type.I32 },
            11: { alias: "created", type: i.Type.I64 },
            12: { alias: "updated", type: i.Type.I64 },
            13: { alias: "userId", type: i.Type.I32 }
          })),
          (e.exports.SurveyItem = i.Struct.define("SurveyItem", {
            1: { alias: "id", type: i.Type.I32 },
            2: { alias: "surveyId", type: i.Type.I32 },
            3: { alias: "entityType", type: i.Type.I32 },
            4: { alias: "entityGuid", type: i.Type.STRING },
            5: { alias: "status", type: i.Type.I32 },
            6: { alias: "sentimentScore", type: i.Type.DOUBLE },
            7: { alias: "category", type: i.Type.STRING },
            8: { alias: "ratings", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SurveyItemRating) },
            9: { alias: "created", type: i.Type.I64 },
            10: { alias: "updated", type: i.Type.I64 },
            11: { alias: "comments", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.SurveyItemComment) }
          })),
          (e.exports.FeatureAvailability = i.Struct.define("FeatureAvailability", {
            1: { alias: "featureKey", type: i.Type.I32 },
            2: { alias: "isAvailable", type: i.Type.BOOL }
          })),
          (e.exports.BetaFeature = i.Struct.define("BetaFeature", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "featureKey", type: i.Type.STRING },
            3: { alias: "name", type: i.Type.STRING },
            4: { alias: "featureDescription", type: i.Type.STRING },
            5: { alias: "help", type: i.Type.STRING },
            6: { alias: "requireWaitlist", type: i.Type.BOOL },
            7: { alias: "notificationsEnabled", type: i.Type.BOOL }
          })),
          (e.exports.BetaFeatureEnrollment = i.Struct.define("BetaFeatureEnrollment", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "featureGuid", type: i.Type.STRING },
            3: { alias: "featureKey", type: i.Type.STRING },
            4: { alias: "userId", type: i.Type.I32 },
            5: { alias: "businessId", type: i.Type.I32 },
            6: { alias: "status", type: i.Type.I32 },
            7: { alias: "enrollerName", type: i.Type.STRING },
            8: { alias: "disabledDate", type: i.Type.I64 }
          })),
          (e.exports.BetaFeatureEnrollmentMapping = i.Struct.define("BetaFeatureEnrollmentMapping", {
            1: { alias: "enrollments", type: i.Type.SET, def: i.Set.define(i.Type.I32) }
          })),
          (e.exports.ResourcesUpdateRequest = i.Struct.define("ResourcesUpdateRequest", {
            1: { alias: "deactivateResourcesWithBodyHashes", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
            2: { alias: "activateResourcesWithBodyHashes", type: i.Type.SET, def: i.Set.define(i.Type.STRING) }
          })),
          (e.exports.ResourcesCreateRequest = i.Struct.define("ResourcesCreateRequest", {
            1: { alias: "activateResourcesWithBodyHashes", type: i.Type.SET, def: i.Set.define(i.Type.STRING) }
          })),
          (e.exports.NoteCardMetadata = i.Struct.define("NoteCardMetadata", {
            1: { alias: "noteGuid", type: i.Type.STRING },
            2: { alias: "noteTitle", type: i.Type.STRING },
            3: { alias: "lastEdited", type: i.Type.I64 },
            4: { alias: "lastEditorName", type: i.Type.STRING },
            5: { alias: "snippet", type: i.Type.STRING },
            6: { alias: "lastEditorPhotoUrl", type: i.Type.STRING },
            7: { alias: "noteThumbnailUrl", type: i.Type.STRING },
            8: { alias: "notebookGuid", type: i.Type.STRING }
          })),
          (e.exports.RecommendedNoteCardMetadata = i.Struct.define("RecommendedNoteCardMetadata", {
            1: { alias: "noteCard", type: i.Type.STRUCT, def: e.exports.NoteCardMetadata },
            2: { alias: "jsonReason", type: i.Type.STRING },
            3: { alias: "connectedBy", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteCardMetadata) },
            4: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace },
            5: { alias: "isAccessible", type: i.Type.BOOL }
          })),
          (e.exports.RecommendationRequest = i.Struct.define("RecommendationRequest", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "profile", type: i.Type.STRING },
            3: { alias: "engine", type: i.Type.STRING }
          })),
          (e.exports.RecommendedNoteCardMetadataRequest = i.Struct.define("RecommendedNoteCardMetadataRequest", {
            1: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) }
          })),
          (e.exports.PinnedContent = i.Struct.define("PinnedContent", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "entityType", type: i.Type.I32 },
            3: { alias: "entityGuid", type: i.Type.STRING },
            4: { alias: "entityUri", type: i.Type.STRING },
            5: { alias: "entityTitle", type: i.Type.STRING },
            6: { alias: "entityParentGuid", type: i.Type.STRING },
            7: { alias: "serviceCreated", type: i.Type.I64 },
            8: { alias: "serviceUpdated", type: i.Type.I64 },
            9: { alias: "guid", type: i.Type.STRING },
            10: { alias: "sortIndex", type: i.Type.I32 },
            11: { alias: "seed", type: i.Type.STRING }
          })),
          (e.exports.ChangePositionRequest = i.Struct.define("ChangePositionRequest", {
            1: { alias: "guid", type: i.Type.STRING },
            2: { alias: "referencePosition", type: i.Type.STRING }
          })),
          (e.exports.NotebookSummary = i.Struct.define("NotebookSummary", {
            1: { alias: "notebookGuid", type: i.Type.STRING },
            2: { alias: "notebookName", type: i.Type.STRING },
            3: { alias: "noteCount", type: i.Type.I32 }
          })),
          (e.exports.RegisterDeviceSessionRequest = i.Struct.define("RegisterDeviceSessionRequest", {
            1: { alias: "authenticationToken", type: i.Type.STRING },
            2: { alias: "deviceDescription", type: i.Type.STRING },
            3: { alias: "deviceIdentifier", type: i.Type.STRING },
            4: { alias: "clientId", type: i.Type.STRING },
            5: { alias: "refreshToken", type: i.Type.STRING },
            6: { alias: "consumerKey", type: i.Type.STRING }
          })),
          (e.exports.HasActiveSessionRequest = i.Struct.define("HasActiveSessionRequest", {
            1: { alias: "authenticationToken", type: i.Type.STRING },
            2: { alias: "deviceIdentifier", type: i.Type.STRING },
            3: { alias: "clientId", type: i.Type.STRING },
            4: { alias: "consumerKey", type: i.Type.STRING }
          })),
          (e.exports.MmsvcRequest = i.Struct.define("MmsvcRequest", { 1: { alias: "clientType", type: i.Type.I32 } })),
          (e.exports.MmsvcCreateSyncRequest = i.Struct.define("MmsvcCreateSyncRequest", { 1: { alias: "userId", type: i.Type.STRING } })),
          (e.exports.MmsvcResponse = i.Struct.define("MmsvcResponse", { 1: { alias: "jsonResponse", type: i.Type.STRING } })),
          (e.exports.RevokeSessionRequest = i.Struct.define("RevokeSessionRequest", {
            1: { alias: "authenticationToken", type: i.Type.STRING },
            2: { alias: "deviceIdentifier", type: i.Type.STRING },
            3: { alias: "clientId", type: i.Type.STRING },
            4: { alias: "consumerKey", type: i.Type.STRING }
          })),
          (e.exports.AuthenticatedUserCustomClaims = i.Struct.define("AuthenticatedUserCustomClaims", {
            1: { alias: "claimsMap", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
            2: { alias: "monolithUserActiveIdentities", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          }));
        var c = (e.exports.Utility = {});
        function d(e) {
          (this.output = e), (this.seqid = 0);
        }
        function l(e, t, s) {
          var n;
          for (n in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), c))
            e[n] && this.processor.addMethod(c[n], e[n].bind(e));
          this.stransport.process = function (e, t, i) {
            var n = new s(e),
              a = new s(t);
            this.processor.process(n, a, i);
          }.bind(this);
        }
        (c.sendMarketingEmail = i.Method.define({
          alias: "sendMarketingEmail",
          args: i.Struct.define("sendMarketingEmailArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MarketingEmailParameters, index: 1 }
          }),
          result: i.Struct.define("sendMarketingEmailResult", {
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
          })
        })),
          (c.fileSupportTicket = i.Method.define({
            alias: "fileSupportTicket",
            args: i.Struct.define("fileSupportTicketArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "ticket", type: i.Type.STRUCT, def: e.exports.SupportTicket, index: 1 }
            }),
            result: i.Struct.define("fileSupportTicketResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.fileSupportTicketReturnId = i.Method.define({
            alias: "fileSupportTicketReturnId",
            args: i.Struct.define("fileSupportTicketReturnIdArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "ticket", type: i.Type.STRUCT, def: e.exports.SupportTicket, index: 1 }
            }),
            result: i.Struct.define("fileSupportTicketReturnIdResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.sendAppFeedback = i.Method.define({
            alias: "sendAppFeedback",
            args: i.Struct.define("sendAppFeedbackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "appFeedback", type: i.Type.STRUCT, def: e.exports.AppFeedback, index: 1 }
            }),
            result: i.Struct.define("sendAppFeedbackResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.sendAppFeedbackForDevice = i.Method.define({
            alias: "sendAppFeedbackForDevice",
            args: i.Struct.define("sendAppFeedbackForDeviceArgs", {
              1: { alias: "deviceIdentifier", type: i.Type.STRING, index: 0 },
              2: { alias: "apiConsumerKey", type: i.Type.STRING, index: 1 },
              3: { alias: "apiConsumerSecret", type: i.Type.STRING, index: 2 },
              4: { alias: "appFeedback", type: i.Type.STRUCT, def: e.exports.AppFeedback, index: 3 }
            }),
            result: i.Struct.define("sendAppFeedbackForDeviceResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getCrossPromotionInfo = i.Method.define({
            alias: "getCrossPromotionInfo",
            args: i.Struct.define("getCrossPromotionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getCrossPromotionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CrossPromotionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.sendVerificationEmail = i.Method.define({
            alias: "sendVerificationEmail",
            args: i.Struct.define("sendVerificationEmailArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("sendVerificationEmailResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.confirmEmailAddress = i.Method.define({
            alias: "confirmEmailAddress",
            args: i.Struct.define("confirmEmailAddressArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("confirmEmailAddressResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getOAuthCredential = i.Method.define({
            alias: "getOAuthCredential",
            args: i.Struct.define("getOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("getOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getOAuthCredentialByEmailAndScope = i.Method.define({
            alias: "getOAuthCredentialByEmailAndScope",
            args: i.Struct.define("getOAuthCredentialByEmailAndScopeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 },
              3: { alias: "email", type: i.Type.STRING, index: 2 },
              4: { alias: "scope", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("getOAuthCredentialByEmailAndScopeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.hasOAuthCredential = i.Method.define({
            alias: "hasOAuthCredential",
            args: i.Struct.define("hasOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("hasOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getScopedGoogleOAuthCredential = i.Method.define({
            alias: "getScopedGoogleOAuthCredential",
            args: i.Struct.define("getScopedGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getScopedGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getAllScopedGoogleOAuthCredential = i.Method.define({
            alias: "getAllScopedGoogleOAuthCredential",
            args: i.Struct.define("getAllScopedGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getAllScopedGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.OAuthCredential) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.hasGoogleOAuthCredential = i.Method.define({
            alias: "hasGoogleOAuthCredential",
            args: i.Struct.define("hasGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("hasGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.setOAuthCredential = i.Method.define({
            alias: "setOAuthCredential",
            args: i.Struct.define("setOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oAuthCredential", type: i.Type.STRUCT, def: e.exports.OAuthCredential, index: 1 }
            }),
            result: i.Struct.define("setOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.deleteOAuthCredential = i.Method.define({
            alias: "deleteOAuthCredential",
            args: i.Struct.define("deleteOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("deleteOAuthCredentialResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.deleteOAuthCredentialByEmailAndScope = i.Method.define({
            alias: "deleteOAuthCredentialByEmailAndScope",
            args: i.Struct.define("deleteOAuthCredentialByEmailAndScopeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 },
              3: { alias: "email", type: i.Type.STRING, index: 2 },
              4: { alias: "scope", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("deleteOAuthCredentialByEmailAndScopeResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.canNewOauthAccountBeAdded = i.Method.define({
            alias: "canNewOauthAccountBeAdded",
            args: i.Struct.define("canNewOauthAccountBeAddedArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("canNewOauthAccountBeAddedResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.validateAuthenticationTokenStatus = i.Method.define({
            alias: "validateAuthenticationTokenStatus",
            args: i.Struct.define("validateAuthenticationTokenStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokens", type: i.Type.STRUCT, def: e.exports.NAPAuthenticationTokens, index: 1 }
            }),
            result: i.Struct.define("validateAuthenticationTokenStatusResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getUserCardScanningEndDate = i.Method.define({
            alias: "getUserCardScanningEndDate",
            args: i.Struct.define("getUserCardScanningEndDateArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserCardScanningEndDateResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getPromotionStatus = i.Method.define({
            alias: "getPromotionStatus",
            args: i.Struct.define("getPromotionStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getPromotionStatusResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PromotionStatus) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.promotionsShown = i.Method.define({
            alias: "promotionsShown",
            args: i.Struct.define("promotionsShownArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("promotionsShownResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PromotionStatus) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.promotionOptedOut = i.Method.define({
            alias: "promotionOptedOut",
            args: i.Struct.define("promotionOptedOutArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("promotionOptedOutResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getRelatedContentSourcePreferences = i.Method.define({
            alias: "getRelatedContentSourcePreferences",
            args: i.Struct.define("getRelatedContentSourcePreferencesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getRelatedContentSourcePreferencesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RelatedContentSourcePreference) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.setRelatedContentSourceActivated = i.Method.define({
            alias: "setRelatedContentSourceActivated",
            args: i.Struct.define("setRelatedContentSourceActivatedArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 },
              3: { alias: "activated", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("setRelatedContentSourceActivatedResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.clearRelatedContentProfiles = i.Method.define({
            alias: "clearRelatedContentProfiles",
            args: i.Struct.define("clearRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("clearRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.addRelatedContentProfiles = i.Method.define({
            alias: "addRelatedContentProfiles",
            args: i.Struct.define("addRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "profiles", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RelatedContentProfile), index: 1 }
            }),
            result: i.Struct.define("addRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.updateRelatedContentProfiles = i.Method.define({
            alias: "updateRelatedContentProfiles",
            args: i.Struct.define("updateRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("updateRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getRelatedContentProfilePage = i.Method.define({
            alias: "getRelatedContentProfilePage",
            args: i.Struct.define("getRelatedContentProfilePageArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "profileId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getRelatedContentProfilePageResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RelatedContentProfilePage },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.importNotesFromEnex = i.Method.define({
            alias: "importNotesFromEnex",
            args: i.Struct.define("importNotesFromEnexArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "enexUrl", type: i.Type.STRING, index: 1 },
              3: { alias: "notebookGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "importNoteTags", type: i.Type.BOOL, index: 3 },
              5: { alias: "importNoteCreated", type: i.Type.BOOL, index: 4 },
              6: { alias: "importNoteUpdated", type: i.Type.BOOL, index: 5 }
            }),
            result: i.Struct.define("importNotesFromEnexResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.setUserProfilePhoto = i.Method.define({
            alias: "setUserProfilePhoto",
            args: i.Struct.define("setUserProfilePhotoArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "photo", type: i.Type.BINARY, index: 1 }
            }),
            result: i.Struct.define("setUserProfilePhotoResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.removeUserProfilePhoto = i.Method.define({
            alias: "removeUserProfilePhoto",
            args: i.Struct.define("removeUserProfilePhotoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("removeUserProfilePhotoResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.setUserFullName = i.Method.define({
            alias: "setUserFullName",
            args: i.Struct.define("setUserFullNameArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "name", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("setUserFullNameResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getMessageInvitation = i.Method.define({
            alias: "getMessageInvitation",
            args: i.Struct.define("getMessageInvitationArgs", { 1: { alias: "messageInvitationId", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getMessageInvitationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MessagingInvitation },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.claimMessageInvitation = i.Method.define({
            alias: "claimMessageInvitation",
            args: i.Struct.define("claimMessageInvitationArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "messageInvitationId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("claimMessageInvitationResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.canPurchaseTeamStarterPack = i.Method.define({
            alias: "canPurchaseTeamStarterPack",
            args: i.Struct.define("canPurchaseTeamStarterPackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TeamStarterPackRequest, index: 1 }
            }),
            result: i.Struct.define("canPurchaseTeamStarterPackResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TeamStarterPackResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getTsdEligibility = i.Method.define({
            alias: "getTsdEligibility",
            args: i.Struct.define("getTsdEligibilityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TierSelectionDisplayEligibilityRequest, index: 1 }
            }),
            result: i.Struct.define("getTsdEligibilityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TierSelectionDisplayEligibilityResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.updatePassword = i.Method.define({
            alias: "updatePassword",
            args: i.Struct.define("updatePasswordArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oldPassword", type: i.Type.STRING, index: 1 },
              3: { alias: "newPassword", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updatePasswordResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getIncentiveEligibility = i.Method.define({
            alias: "getIncentiveEligibility",
            args: i.Struct.define("getIncentiveEligibilityArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getIncentiveEligibilityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.IncentiveEligibilityResult },
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.invalidateGoogleOauthCredential = i.Method.define({
            alias: "invalidateGoogleOauthCredential",
            args: i.Struct.define("invalidateGoogleOauthCredentialArgs", { 1: { alias: "authToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("invalidateGoogleOauthCredentialResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.invalidateGoogleOauthCredentialByEmailAndScope = i.Method.define({
            alias: "invalidateGoogleOauthCredentialByEmailAndScope",
            args: i.Struct.define("invalidateGoogleOauthCredentialByEmailAndScopeArgs", {
              1: { alias: "authToken", type: i.Type.STRING, index: 0 },
              2: { alias: "email", type: i.Type.STRING, index: 1 },
              3: { alias: "scope", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("invalidateGoogleOauthCredentialByEmailAndScopeResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.associateOpenIDWithUser = i.Method.define({
            alias: "associateOpenIDWithUser",
            args: i.Struct.define("associateOpenIDWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: p.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("associateOpenIDWithUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.dissociateOpenIDFromUser = i.Method.define({
            alias: "dissociateOpenIDFromUser",
            args: i.Struct.define("dissociateOpenIDFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: p.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("dissociateOpenIDFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.dissociateAllOpenIDsFromUser = i.Method.define({
            alias: "dissociateAllOpenIDsFromUser",
            args: i.Struct.define("dissociateAllOpenIDsFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("dissociateAllOpenIDsFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.moveNotebookBetweenAccounts = i.Method.define({
            alias: "moveNotebookBetweenAccounts",
            args: i.Struct.define("moveNotebookBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNotebookBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNotebookBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Notebook },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.moveNotebooksBetweenAccounts = i.Method.define({
            alias: "moveNotebooksBetweenAccounts",
            args: i.Struct.define("moveNotebooksBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNotebooksBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNotebooksBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MoveNotebooksBetweenAccountsResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.moveNoteBetweenAccounts = i.Method.define({
            alias: "moveNoteBetweenAccounts",
            args: i.Struct.define("moveNoteBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNoteBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNoteBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MoveNoteBetweenAccountsResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.findNotesMetadataForIon = i.Method.define({
            alias: "findNotesMetadataForIon",
            args: i.Struct.define("findNotesMetadataForIonArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: r.NoteFilter, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 },
              5: { alias: "resultSpec", type: i.Type.STRUCT, def: r.NotesMetadataResultSpec, index: 4 }
            }),
            result: i.Struct.define("findNotesMetadataForIonResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: r.NotesMetadataList },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.findNotesCardMetadata = i.Method.define({
            alias: "findNotesCardMetadata",
            args: i.Struct.define("findNotesCardMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "filter", type: i.Type.STRUCT, def: r.NoteFilter, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 },
              5: { alias: "resultSpec", type: i.Type.STRUCT, def: r.NotesMetadataResultSpec, index: 4 }
            }),
            result: i.Struct.define("findNotesCardMetadataResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getNotesCardMetadata = i.Method.define({
            alias: "getNotesCardMetadata",
            args: i.Struct.define("getNotesCardMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: r.NoteResultSpec, index: 2 }
            }),
            result: i.Struct.define("getNotesCardMetadataResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.createWorkspaceWithResultSpec = i.Method.define({
            alias: "createWorkspaceWithResultSpec",
            args: i.Struct.define("createWorkspaceWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 },
              3: { alias: "spec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("createWorkspaceWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.createWorkspace = i.Method.define({
            alias: "createWorkspace",
            args: i.Struct.define("createWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 }
            }),
            result: i.Struct.define("createWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.copyWorkspace = i.Method.define({
            alias: "copyWorkspace",
            args: i.Struct.define("copyWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spec", type: i.Type.STRUCT, def: u.CopyWorkspaceSpec, index: 1 }
            }),
            result: i.Struct.define("copyWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.listSyncingNotebookGuidsInBusinessAccount = i.Method.define({
            alias: "listSyncingNotebookGuidsInBusinessAccount",
            args: i.Struct.define("listSyncingNotebookGuidsInBusinessAccountArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listSyncingNotebookGuidsInBusinessAccountResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.getWorkspace = i.Method.define({
            alias: "getWorkspace",
            args: i.Struct.define("getWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("getWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getWorkspaceIfUserHasPrivilege = i.Method.define({
            alias: "getWorkspaceIfUserHasPrivilege",
            args: i.Struct.define("getWorkspaceIfUserHasPrivilegeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 },
              4: { alias: "privilegeLevel", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("getWorkspaceIfUserHasPrivilegeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listWorkspaces = i.Method.define({
            alias: "listWorkspaces",
            args: i.Struct.define("listWorkspacesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listWorkspacesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, u.Workspace) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.listWorkspacesWithResultSpec = i.Method.define({
            alias: "listWorkspacesWithResultSpec",
            args: i.Struct.define("listWorkspacesWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceResponseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 1 },
              3: { alias: "filter", type: i.Type.STRUCT, def: u.WorkspaceFilter, index: 2 }
            }),
            result: i.Struct.define("listWorkspacesWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, u.WorkspaceResponse) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (c.updateWorkspace = i.Method.define({
            alias: "updateWorkspace",
            args: i.Struct.define("updateWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 }
            }),
            result: i.Struct.define("updateWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.moveNotebookToAccount = i.Method.define({
            alias: "moveNotebookToAccount",
            args: i.Struct.define("moveNotebookToAccountArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("moveNotebookToAccountResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.manageWorkspaceSharing = i.Method.define({
            alias: "manageWorkspaceSharing",
            args: i.Struct.define("manageWorkspaceSharingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: u.ManageWorkspaceSharingRequest, index: 1 }
            }),
            result: i.Struct.define("manageWorkspaceSharingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.ManageWorkspaceSharingResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.joinWorkspace = i.Method.define({
            alias: "joinWorkspace",
            args: i.Struct.define("joinWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("joinWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.leaveWorkspace = i.Method.define({
            alias: "leaveWorkspace",
            args: i.Struct.define("leaveWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("leaveWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.sendSharedNotebookViewedEvent = i.Method.define({
            alias: "sendSharedNotebookViewedEvent",
            args: i.Struct.define("sendSharedNotebookViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendSharedNotebookViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.sendSharedNoteViewedEvent = i.Method.define({
            alias: "sendSharedNoteViewedEvent",
            args: i.Struct.define("sendSharedNoteViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendSharedNoteViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.sendWorkspaceViewedEvent = i.Method.define({
            alias: "sendWorkspaceViewedEvent",
            args: i.Struct.define("sendWorkspaceViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendWorkspaceViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.sendWorkspaceViewedEventV2 = i.Method.define({
            alias: "sendWorkspaceViewedEventV2",
            args: i.Struct.define("sendWorkspaceViewedEventV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendWorkspaceViewedEventV2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.AccessInfo },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.expungeWorkspace = i.Method.define({
            alias: "expungeWorkspace",
            args: i.Struct.define("expungeWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.createSurveyNote = i.Method.define({
            alias: "createSurveyNote",
            args: i.Struct.define("createSurveyNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: a.Note, index: 1 },
              3: { alias: "surveyId", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("createSurveyNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.createSurvey = i.Method.define({
            alias: "createSurvey",
            args: i.Struct.define("createSurveyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "survey", type: i.Type.STRUCT, def: e.exports.Survey, index: 1 }
            }),
            result: i.Struct.define("createSurveyResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.finalizeSurvey = i.Method.define({
            alias: "finalizeSurvey",
            args: i.Struct.define("finalizeSurveyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("finalizeSurveyResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.cloneSurvey = i.Method.define({
            alias: "cloneSurvey",
            args: i.Struct.define("cloneSurveyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 },
              3: { alias: "surveyName", type: i.Type.STRING, index: 2 },
              4: { alias: "copyRatings", type: i.Type.BOOL, index: 3 },
              5: { alias: "copyComments", type: i.Type.BOOL, index: 4 }
            }),
            result: i.Struct.define("cloneSurveyResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getLastOpenSurveyForEntity = i.Method.define({
            alias: "getLastOpenSurveyForEntity",
            args: i.Struct.define("getLastOpenSurveyForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("getLastOpenSurveyForEntityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listSurveysForEntity = i.Method.define({
            alias: "listSurveysForEntity",
            args: i.Struct.define("listSurveysForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("listSurveysForEntityResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Survey) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getSurveyItemForEntity = i.Method.define({
            alias: "getSurveyItemForEntity",
            args: i.Struct.define("getSurveyItemForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "surveyId", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("getSurveyItemForEntityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItem },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.finalizeEntityForRating = i.Method.define({
            alias: "finalizeEntityForRating",
            args: i.Struct.define("finalizeEntityForRatingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 },
              3: { alias: "entityType", type: i.Type.I32, index: 2 },
              4: { alias: "entityGuid", type: i.Type.STRING, index: 3 },
              5: { alias: "category", type: i.Type.STRING, index: 4 }
            }),
            result: i.Struct.define("finalizeEntityForRatingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItem },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.updateAndFinalizeSurveyNote = i.Method.define({
            alias: "updateAndFinalizeSurveyNote",
            args: i.Struct.define("updateAndFinalizeSurveyNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: a.Note, index: 1 },
              3: { alias: "surveyId", type: i.Type.I32, index: 2 },
              4: { alias: "category", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("updateAndFinalizeSurveyNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItem },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.removeSurveyItem = i.Method.define({
            alias: "removeSurveyItem",
            args: i.Struct.define("removeSurveyItemArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 },
              3: { alias: "surveyItemId", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("removeSurveyItemResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.saveSurveyItemRating = i.Method.define({
            alias: "saveSurveyItemRating",
            args: i.Struct.define("saveSurveyItemRatingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "rating", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("saveSurveyItemRatingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemRating },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.saveSurveyItemComment = i.Method.define({
            alias: "saveSurveyItemComment",
            args: i.Struct.define("saveSurveyItemCommentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "comment", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("saveSurveyItemCommentResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemRating },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.addSurveyItemComment = i.Method.define({
            alias: "addSurveyItemComment",
            args: i.Struct.define("addSurveyItemCommentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "comment", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("addSurveyItemCommentResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemComment },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getConfigValuesAsJSON = i.Method.define({
            alias: "getConfigValuesAsJSON",
            args: i.Struct.define("getConfigValuesAsJSONArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.ConfigValuesRequest, index: 1 }
            }),
            result: i.Struct.define("getConfigValuesAsJSONResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.addAllUsersFromBusinessToSpace = i.Method.define({
            alias: "addAllUsersFromBusinessToSpace",
            args: i.Struct.define("addAllUsersFromBusinessToSpaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("addAllUsersFromBusinessToSpaceResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listNotebooksForIonOnly = i.Method.define({
            alias: "listNotebooksForIonOnly",
            args: i.Struct.define("listNotebooksForIonOnlyArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listNotebooksForIonOnlyResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Notebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getMaxServiceUpdatedFromNotes = i.Method.define({
            alias: "getMaxServiceUpdatedFromNotes",
            args: i.Struct.define("getMaxServiceUpdatedFromNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuids", type: i.Type.SET, def: i.Set.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getMaxServiceUpdatedFromNotesResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I64) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.addResource = i.Method.define({
            alias: "addResource",
            args: i.Struct.define("addResourceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resource", type: i.Type.STRUCT, def: a.Resource, index: 1 }
            }),
            result: i.Struct.define("addResourceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Resource },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.addResourceToNote = i.Method.define({
            alias: "addResourceToNote",
            args: i.Struct.define("addResourceToNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resource", type: i.Type.STRUCT, def: a.Resource, index: 1 }
            }),
            result: i.Struct.define("addResourceToNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Note },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.updateNoteIfUsnMatches = i.Method.define({
            alias: "updateNoteIfUsnMatches",
            args: i.Struct.define("updateNoteIfUsnMatchesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: a.Note, index: 1 },
              3: { alias: "resourcesUpdateRequest", type: i.Type.STRUCT, def: e.exports.ResourcesUpdateRequest, index: 2 }
            }),
            result: i.Struct.define("updateNoteIfUsnMatchesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: r.UpdateNoteIfUsnMatchesResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.createNote = i.Method.define({
            alias: "createNote",
            args: i.Struct.define("createNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: a.Note, index: 1 },
              3: { alias: "resourcesCreateRequest", type: i.Type.STRUCT, def: e.exports.ResourcesCreateRequest, index: 2 }
            }),
            result: i.Struct.define("createNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Note },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.createNoteWithTasks = i.Method.define({
            alias: "createNoteWithTasks",
            args: i.Struct.define("createNoteWithTasksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: a.Note, index: 1 },
              3: { alias: "tasks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Task), index: 2 }
            }),
            result: i.Struct.define("createNoteWithTasksResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listBetaFeatures = i.Method.define({
            alias: "listBetaFeatures",
            args: i.Struct.define("listBetaFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeature) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.listBetaFeatureEnrollments = i.Method.define({
            alias: "listBetaFeatureEnrollments",
            args: i.Struct.define("listBetaFeatureEnrollmentsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeatureEnrollmentsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeatureEnrollment) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.enrollInBetaFeature = i.Method.define({
            alias: "enrollInBetaFeature",
            args: i.Struct.define("enrollInBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("enrollInBetaFeatureResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.enableBetaFeature = i.Method.define({
            alias: "enableBetaFeature",
            args: i.Struct.define("enableBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 },
              3: { alias: "enrollmentGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "enabled", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("enableBetaFeatureResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listEnabledFeatures = i.Method.define({
            alias: "listEnabledFeatures",
            args: i.Struct.define("listEnabledFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listEnabledFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.checkEnabledFeatures = i.Method.define({
            alias: "checkEnabledFeatures",
            args: i.Struct.define("checkEnabledFeaturesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKeysToCheck", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 }
            }),
            result: i.Struct.define("checkEnabledFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.FeatureAvailability) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.checkUserFeatures = i.Method.define({
            alias: "checkUserFeatures",
            args: i.Struct.define("checkUserFeaturesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKeysToCheck", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 }
            }),
            result: i.Struct.define("checkUserFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.FeatureAvailability) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getNotePermissionsForRTE = i.Method.define({
            alias: "getNotePermissionsForRTE",
            args: i.Struct.define("getNotePermissionsForRTEArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNotePermissionsForRTEResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RealTimeNotePermissionsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.pinContentToWidget = i.Method.define({
            alias: "pinContentToWidget",
            args: i.Struct.define("pinContentToWidgetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "entityType", type: i.Type.I32, index: 2 },
              4: { alias: "entityGuidOrUri", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("pinContentToWidgetResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.PinnedContent },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.unpinContentFromWidget = i.Method.define({
            alias: "unpinContentFromWidget",
            args: i.Struct.define("unpinContentFromWidgetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "entityType", type: i.Type.I32, index: 2 },
              4: { alias: "entityGuidOrUri", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("unpinContentFromWidgetResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.listPinnedContent = i.Method.define({
            alias: "listPinnedContent",
            args: i.Struct.define("listPinnedContentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("listPinnedContentResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getWorkspaceNotebookSummary = i.Method.define({
            alias: "getWorkspaceNotebookSummary",
            args: i.Struct.define("getWorkspaceNotebookSummaryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getWorkspaceNotebookSummaryResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NotebookSummary) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.updateContentOfPinnedWidget = i.Method.define({
            alias: "updateContentOfPinnedWidget",
            args: i.Struct.define("updateContentOfPinnedWidgetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: {
                alias: "toBePinnedContentList",
                type: i.Type.LIST,
                def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent),
                index: 2
              },
              4: {
                alias: "toBeUnpinnedContentList",
                type: i.Type.LIST,
                def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent),
                index: 3
              }
            }),
            result: i.Struct.define("updateContentOfPinnedWidgetResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.changePinnedContentPosition = i.Method.define({
            alias: "changePinnedContentPosition",
            args: i.Struct.define("changePinnedContentPositionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "request", type: i.Type.STRUCT, def: e.exports.ChangePositionRequest, index: 2 }
            }),
            result: i.Struct.define("changePinnedContentPositionResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.requestAccessToWorkspace = i.Method.define({
            alias: "requestAccessToWorkspace",
            args: i.Struct.define("requestAccessToWorkspaceArgs", {
              1: { alias: "authToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("requestAccessToWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.listRecommendedNotes = i.Method.define({
            alias: "listRecommendedNotes",
            args: i.Struct.define("listRecommendedNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.RecommendationRequest, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("listRecommendedNotesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getRecommendedNoteCardMetadata = i.Method.define({
            alias: "getRecommendedNoteCardMetadata",
            args: i.Struct.define("getRecommendedNoteCardMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.RecommendedNoteCardMetadataRequest, index: 1 }
            }),
            result: i.Struct.define("getRecommendedNoteCardMetadataResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.submitRatingForRecommendedNote = i.Method.define({
            alias: "submitRatingForRecommendedNote",
            args: i.Struct.define("submitRatingForRecommendedNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "rating", type: i.Type.I32, index: 2 },
              4: { alias: "engine", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("submitRatingForRecommendedNoteResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getFirebaseAuthCredential = i.Method.define({
            alias: "getFirebaseAuthCredential",
            args: i.Struct.define("getFirebaseAuthCredentialArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getFirebaseAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getUserRestrictions = i.Method.define({
            alias: "getUserRestrictions",
            args: i.Struct.define("getUserRestrictionsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserRestrictionsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.UserRestrictions },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getNsvcThirdPartyAuthorizationToken = i.Method.define({
            alias: "getNsvcThirdPartyAuthorizationToken",
            args: i.Struct.define("getNsvcThirdPartyAuthorizationTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getNsvcThirdPartyAuthorizationTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NsvcThirdPartyAuthorizationTokenResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getNsvcThirdPartyAuthorizationTokenByType = i.Method.define({
            alias: "getNsvcThirdPartyAuthorizationTokenByType",
            args: i.Struct.define("getNsvcThirdPartyAuthorizationTokenByTypeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("getNsvcThirdPartyAuthorizationTokenByTypeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NsvcThirdPartyAuthorizationTokenResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.registerSession = i.Method.define({
            alias: "registerSession",
            args: i.Struct.define("registerSessionArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.RegisterDeviceSessionRequest, index: 0 }
            }),
            result: i.Struct.define("registerSessionResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.hasActiveSessions = i.Method.define({
            alias: "hasActiveSessions",
            args: i.Struct.define("hasActiveSessionsArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.HasActiveSessionRequest, index: 0 }
            }),
            result: i.Struct.define("hasActiveSessionsResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.sendOneTimeCode = i.Method.define({
            alias: "sendOneTimeCode",
            args: i.Struct.define("sendOneTimeCodeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sendToBackupPhone", type: i.Type.BOOL, index: 1 },
              3: { alias: "messageTemplate", type: i.Type.STRING, index: 2 },
              4: { alias: "useVoice", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("sendOneTimeCodeResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getMasked2FAMobileNumbers = i.Method.define({
            alias: "getMasked2FAMobileNumbers",
            args: i.Struct.define("getMasked2FAMobileNumbersArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getMasked2FAMobileNumbersResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.mmsvcGetPaywallState = i.Method.define({
            alias: "mmsvcGetPaywallState",
            args: i.Struct.define("mmsvcGetPaywallStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.MmsvcRequest, index: 1 }
            }),
            result: i.Struct.define("mmsvcGetPaywallStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MmsvcResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.mmsvcCreateDeviceSync = i.Method.define({
            alias: "mmsvcCreateDeviceSync",
            args: i.Struct.define("mmsvcCreateDeviceSyncArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("mmsvcCreateDeviceSyncResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MmsvcResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.revokeSession = i.Method.define({
            alias: "revokeSession",
            args: i.Struct.define("revokeSessionArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.RevokeSessionRequest, index: 0 }
            }),
            result: i.Struct.define("revokeSessionResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.authenticateToBusiness = i.Method.define({
            alias: "authenticateToBusiness",
            args: i.Struct.define("authenticateToBusinessArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("authenticateToBusinessResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: y.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.createSessionAuthenticationToken = i.Method.define({
            alias: "createSessionAuthenticationToken",
            args: i.Struct.define("createSessionAuthenticationTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("createSessionAuthenticationTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.getUser = i.Method.define({
            alias: "getUser",
            args: i.Struct.define("getUserArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.User },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getUserUrls = i.Method.define({
            alias: "getUserUrls",
            args: i.Struct.define("getUserUrlsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserUrlsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: y.UserUrls },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getSubscriptionInfo = i.Method.define({
            alias: "getSubscriptionInfo",
            args: i.Struct.define("getSubscriptionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getSubscriptionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.SubscriptionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.revokeLongSession = i.Method.define({
            alias: "revokeLongSession",
            args: i.Struct.define("revokeLongSessionArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("revokeLongSessionResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.listBusinessUsers = i.Method.define({
            alias: "listBusinessUsers",
            args: i.Struct.define("listBusinessUsersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessUserFilter", type: i.Type.STRUCT, def: a.BusinessUserFilter, index: 1 }
            }),
            result: i.Struct.define("listBusinessUsersResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.UserProfile) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getConnectedIdentities = i.Method.define({
            alias: "getConnectedIdentities",
            args: i.Struct.define("getConnectedIdentitiesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "identityIds", type: i.Type.LIST, def: i.List.define(i.Type.I64), index: 1 }
            }),
            result: i.Struct.define("getConnectedIdentitiesResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, a.Identity) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getIdentitiesByNsyncMemberships = i.Method.define({
            alias: "getIdentitiesByNsyncMemberships",
            args: i.Struct.define("getIdentitiesByNsyncMembershipsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "nsyncMembershipIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getIdentitiesByNsyncMembershipsResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, a.Identity) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "edamNoteFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getNAPAccessJWT = i.Method.define({
            alias: "getNAPAccessJWT",
            args: i.Struct.define("getNAPAccessJWTArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: y.GetNAPAccessJWTRequest, index: 1 }
            }),
            result: i.Struct.define("getNAPAccessJWTResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.unpublishNotebook = i.Method.define({
            alias: "unpublishNotebook",
            args: i.Struct.define("unpublishNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "convertGroupSharesToIndividual", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("unpublishNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.moveNotebookToAccountV2 = i.Method.define({
            alias: "moveNotebookToAccountV2",
            args: i.Struct.define("moveNotebookToAccountV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("moveNotebookToAccountV2Result", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.updateNotebook = i.Method.define({
            alias: "updateNotebook",
            args: i.Struct.define("updateNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebook", type: i.Type.STRUCT, def: a.Notebook, index: 1 }
            }),
            result: i.Struct.define("updateNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (c.updateNotebookStack = i.Method.define({
            alias: "updateNotebookStack",
            args: i.Struct.define("updateNotebookStackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "stack", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updateNotebookStackResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (c.getUserCustomClaims = i.Method.define({
            alias: "getUserCustomClaims",
            args: i.Struct.define("getUserCustomClaimsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserCustomClaimsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticatedUserCustomClaims },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (d.prototype.sendMarketingEmail = function (e, t, s) {
            var i = c.sendMarketingEmail,
              n = new i.args();
            (n.authenticationToken = e), (n.parameters = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.fileSupportTicket = function (e, t, s) {
            var i = c.fileSupportTicket,
              n = new i.args();
            (n.authenticationToken = e), (n.ticket = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.fileSupportTicketReturnId = function (e, t, s) {
            var i = c.fileSupportTicketReturnId,
              n = new i.args();
            (n.authenticationToken = e), (n.ticket = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendAppFeedback = function (e, t, s) {
            var i = c.sendAppFeedback,
              n = new i.args();
            (n.authenticationToken = e), (n.appFeedback = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendAppFeedbackForDevice = function (e, t, s, i, n) {
            var a = c.sendAppFeedbackForDevice,
              o = new a.args();
            (o.deviceIdentifier = e),
              (o.apiConsumerKey = t),
              (o.apiConsumerSecret = s),
              (o.appFeedback = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.getCrossPromotionInfo = function (e, t) {
            var s = c.getCrossPromotionInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.sendVerificationEmail = function (e, t) {
            var s = c.sendVerificationEmail,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.confirmEmailAddress = function (e, t) {
            var s = c.confirmEmailAddress,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getOAuthCredential = function (e, t, s) {
            var i = c.getOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.serviceId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getOAuthCredentialByEmailAndScope = function (e, t, s, i, n) {
            var a = c.getOAuthCredentialByEmailAndScope,
              o = new a.args();
            (o.authenticationToken = e), (o.serviceId = t), (o.email = s), (o.scope = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.hasOAuthCredential = function (e, t, s) {
            var i = c.hasOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.serviceId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getScopedGoogleOAuthCredential = function (e, t, s) {
            var i = c.getScopedGoogleOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getAllScopedGoogleOAuthCredential = function (e, t, s) {
            var i = c.getAllScopedGoogleOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.hasGoogleOAuthCredential = function (e, t, s) {
            var i = c.hasGoogleOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.setOAuthCredential = function (e, t, s) {
            var i = c.setOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.oAuthCredential = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.deleteOAuthCredential = function (e, t, s) {
            var i = c.deleteOAuthCredential,
              n = new i.args();
            (n.authenticationToken = e), (n.serviceId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.deleteOAuthCredentialByEmailAndScope = function (e, t, s, i, n) {
            var a = c.deleteOAuthCredentialByEmailAndScope,
              o = new a.args();
            (o.authenticationToken = e), (o.serviceId = t), (o.email = s), (o.scope = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.canNewOauthAccountBeAdded = function (e, t) {
            var s = c.canNewOauthAccountBeAdded,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.validateAuthenticationTokenStatus = function (e, t, s) {
            var i = c.validateAuthenticationTokenStatus,
              n = new i.args();
            (n.authenticationToken = e), (n.tokens = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getUserCardScanningEndDate = function (e, t) {
            var s = c.getUserCardScanningEndDate,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getPromotionStatus = function (e, t, s) {
            var i = c.getPromotionStatus,
              n = new i.args();
            (n.authenticationToken = e), (n.promotionIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.promotionsShown = function (e, t, s) {
            var i = c.promotionsShown,
              n = new i.args();
            (n.authenticationToken = e), (n.promotionIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.promotionOptedOut = function (e, t, s) {
            var i = c.promotionOptedOut,
              n = new i.args();
            (n.authenticationToken = e), (n.promotionId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getRelatedContentSourcePreferences = function (e, t) {
            var s = c.getRelatedContentSourcePreferences,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.setRelatedContentSourceActivated = function (e, t, s, i) {
            var n = c.setRelatedContentSourceActivated,
              a = new n.args();
            (a.authenticationToken = e), (a.sourceId = t), (a.activated = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.clearRelatedContentProfiles = function (e, t, s) {
            var i = c.clearRelatedContentProfiles,
              n = new i.args();
            (n.authenticationToken = e), (n.sourceId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.addRelatedContentProfiles = function (e, t, s) {
            var i = c.addRelatedContentProfiles,
              n = new i.args();
            (n.authenticationToken = e), (n.profiles = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updateRelatedContentProfiles = function (e, t, s) {
            var i = c.updateRelatedContentProfiles,
              n = new i.args();
            (n.authenticationToken = e), (n.sourceId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getRelatedContentProfilePage = function (e, t, s) {
            var i = c.getRelatedContentProfilePage,
              n = new i.args();
            (n.authenticationToken = e), (n.profileId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.importNotesFromEnex = function (e, t, s, i, n, a, o) {
            var r = c.importNotesFromEnex,
              p = new r.args();
            (p.authenticationToken = e),
              (p.enexUrl = t),
              (p.notebookGuid = s),
              (p.importNoteTags = i),
              (p.importNoteCreated = n),
              (p.importNoteUpdated = a),
              r.sendRequest(this.output, this.seqid++, p, o);
          }),
          (d.prototype.setUserProfilePhoto = function (e, t, s) {
            var i = c.setUserProfilePhoto,
              n = new i.args();
            (n.authenticationToken = e), (n.photo = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.removeUserProfilePhoto = function (e, t) {
            var s = c.removeUserProfilePhoto,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.setUserFullName = function (e, t, s) {
            var i = c.setUserFullName,
              n = new i.args();
            (n.authenticationToken = e), (n.name = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getMessageInvitation = function (e, t) {
            var s = c.getMessageInvitation,
              i = new s.args();
            (i.messageInvitationId = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.claimMessageInvitation = function (e, t, s) {
            var i = c.claimMessageInvitation,
              n = new i.args();
            (n.authenticationToken = e), (n.messageInvitationId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.canPurchaseTeamStarterPack = function (e, t, s) {
            var i = c.canPurchaseTeamStarterPack,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getTsdEligibility = function (e, t, s) {
            var i = c.getTsdEligibility,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updatePassword = function (e, t, s, i) {
            var n = c.updatePassword,
              a = new n.args();
            (a.authenticationToken = e), (a.oldPassword = t), (a.newPassword = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.getIncentiveEligibility = function (e, t) {
            var s = c.getIncentiveEligibility,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.invalidateGoogleOauthCredential = function (e, t) {
            var s = c.invalidateGoogleOauthCredential,
              i = new s.args();
            (i.authToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.invalidateGoogleOauthCredentialByEmailAndScope = function (e, t, s, i) {
            var n = c.invalidateGoogleOauthCredentialByEmailAndScope,
              a = new n.args();
            (a.authToken = e), (a.email = t), (a.scope = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.associateOpenIDWithUser = function (e, t, s) {
            var i = c.associateOpenIDWithUser,
              n = new i.args();
            (n.authenticationToken = e), (n.credential = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.dissociateOpenIDFromUser = function (e, t, s) {
            var i = c.dissociateOpenIDFromUser,
              n = new i.args();
            (n.authenticationToken = e), (n.credential = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.dissociateAllOpenIDsFromUser = function (e, t) {
            var s = c.dissociateAllOpenIDsFromUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.moveNotebookBetweenAccounts = function (e, t, s, i) {
            var n = c.moveNotebookBetweenAccounts,
              a = new n.args();
            (a.sourceAuthenticationToken = e),
              (a.targetAuthenticationToken = t),
              (a.parameters = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.moveNotebooksBetweenAccounts = function (e, t, s, i) {
            var n = c.moveNotebooksBetweenAccounts,
              a = new n.args();
            (a.sourceAuthenticationToken = e),
              (a.targetAuthenticationToken = t),
              (a.parameters = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.moveNoteBetweenAccounts = function (e, t, s, i) {
            var n = c.moveNoteBetweenAccounts,
              a = new n.args();
            (a.sourceAuthenticationToken = e),
              (a.targetAuthenticationToken = t),
              (a.parameters = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.findNotesMetadataForIon = function (e, t, s, i, n, a) {
            var o = c.findNotesMetadataForIon,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (d.prototype.findNotesCardMetadata = function (e, t, s, i, n, a) {
            var o = c.findNotesCardMetadata,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (d.prototype.getNotesCardMetadata = function (e, t, s, i) {
            var n = c.getNotesCardMetadata,
              a = new n.args();
            (a.authenticationToken = e), (a.noteGuids = t), (a.resultSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.createWorkspaceWithResultSpec = function (e, t, s, i) {
            var n = c.createWorkspaceWithResultSpec,
              a = new n.args();
            (a.authenticationToken = e), (a.workspace = t), (a.spec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.createWorkspace = function (e, t, s) {
            var i = c.createWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspace = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.copyWorkspace = function (e, t, s) {
            var i = c.copyWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.spec = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.listSyncingNotebookGuidsInBusinessAccount = function (e, t) {
            var s = c.listSyncingNotebookGuidsInBusinessAccount,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getWorkspace = function (e, t, s, i) {
            var n = c.getWorkspace,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), (a.responseSpec = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.getWorkspaceIfUserHasPrivilege = function (e, t, s, i, n) {
            var a = c.getWorkspaceIfUserHasPrivilege,
              o = new a.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.responseSpec = s),
              (o.privilegeLevel = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.listWorkspaces = function (e, t) {
            var s = c.listWorkspaces,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.listWorkspacesWithResultSpec = function (e, t, s, i) {
            var n = c.listWorkspacesWithResultSpec,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceResponseSpec = t), (a.filter = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.updateWorkspace = function (e, t, s) {
            var i = c.updateWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspace = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.moveNotebookToAccount = function (e, t, s) {
            var i = c.moveNotebookToAccount,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.manageWorkspaceSharing = function (e, t, s) {
            var i = c.manageWorkspaceSharing,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.joinWorkspace = function (e, t, s) {
            var i = c.joinWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.leaveWorkspace = function (e, t, s) {
            var i = c.leaveWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendSharedNotebookViewedEvent = function (e, t, s) {
            var i = c.sendSharedNotebookViewedEvent,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendSharedNoteViewedEvent = function (e, t, s) {
            var i = c.sendSharedNoteViewedEvent,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendWorkspaceViewedEvent = function (e, t, s) {
            var i = c.sendWorkspaceViewedEvent,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.sendWorkspaceViewedEventV2 = function (e, t, s) {
            var i = c.sendWorkspaceViewedEventV2,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.expungeWorkspace = function (e, t, s) {
            var i = c.expungeWorkspace,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.createSurveyNote = function (e, t, s, i) {
            var n = c.createSurveyNote,
              a = new n.args();
            (a.authenticationToken = e), (a.note = t), (a.surveyId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.createSurvey = function (e, t, s) {
            var i = c.createSurvey,
              n = new i.args();
            (n.authenticationToken = e), (n.survey = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.finalizeSurvey = function (e, t, s) {
            var i = c.finalizeSurvey,
              n = new i.args();
            (n.authenticationToken = e), (n.surveyId = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.cloneSurvey = function (e, t, s, i, n, a) {
            var o = c.cloneSurvey,
              r = new o.args();
            (r.authenticationToken = e),
              (r.surveyId = t),
              (r.surveyName = s),
              (r.copyRatings = i),
              (r.copyComments = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (d.prototype.getLastOpenSurveyForEntity = function (e, t, s, i) {
            var n = c.getLastOpenSurveyForEntity,
              a = new n.args();
            (a.authenticationToken = e), (a.entityType = t), (a.entityGuid = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.listSurveysForEntity = function (e, t, s, i) {
            var n = c.listSurveysForEntity,
              a = new n.args();
            (a.authenticationToken = e), (a.entityType = t), (a.entityGuid = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.getSurveyItemForEntity = function (e, t, s, i, n) {
            var a = c.getSurveyItemForEntity,
              o = new a.args();
            (o.authenticationToken = e),
              (o.entityType = t),
              (o.entityGuid = s),
              (o.surveyId = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.finalizeEntityForRating = function (e, t, s, i, n, a) {
            var o = c.finalizeEntityForRating,
              r = new o.args();
            (r.authenticationToken = e),
              (r.surveyId = t),
              (r.entityType = s),
              (r.entityGuid = i),
              (r.category = n),
              o.sendRequest(this.output, this.seqid++, r, a);
          }),
          (d.prototype.updateAndFinalizeSurveyNote = function (e, t, s, i, n) {
            var a = c.updateAndFinalizeSurveyNote,
              o = new a.args();
            (o.authenticationToken = e), (o.note = t), (o.surveyId = s), (o.category = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.removeSurveyItem = function (e, t, s, i) {
            var n = c.removeSurveyItem,
              a = new n.args();
            (a.authenticationToken = e), (a.surveyId = t), (a.surveyItemId = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.saveSurveyItemRating = function (e, t, s, i) {
            var n = c.saveSurveyItemRating,
              a = new n.args();
            (a.authenticationToken = e), (a.surveyItemId = t), (a.rating = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.saveSurveyItemComment = function (e, t, s, i) {
            var n = c.saveSurveyItemComment,
              a = new n.args();
            (a.authenticationToken = e), (a.surveyItemId = t), (a.comment = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.addSurveyItemComment = function (e, t, s, i) {
            var n = c.addSurveyItemComment,
              a = new n.args();
            (a.authenticationToken = e), (a.surveyItemId = t), (a.comment = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.getConfigValuesAsJSON = function (e, t, s) {
            var i = c.getConfigValuesAsJSON,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.addAllUsersFromBusinessToSpace = function (e, t, s) {
            var i = c.addAllUsersFromBusinessToSpace,
              n = new i.args();
            (n.authenticationToken = e), (n.spaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.listNotebooksForIonOnly = function (e, t) {
            var s = c.listNotebooksForIonOnly,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getMaxServiceUpdatedFromNotes = function (e, t, s) {
            var i = c.getMaxServiceUpdatedFromNotes,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuids = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.addResource = function (e, t, s) {
            var i = c.addResource,
              n = new i.args();
            (n.authenticationToken = e), (n.resource = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.addResourceToNote = function (e, t, s) {
            var i = c.addResourceToNote,
              n = new i.args();
            (n.authenticationToken = e), (n.resource = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updateNoteIfUsnMatches = function (e, t, s, i) {
            var n = c.updateNoteIfUsnMatches,
              a = new n.args();
            (a.authenticationToken = e), (a.note = t), (a.resourcesUpdateRequest = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.createNote = function (e, t, s, i) {
            var n = c.createNote,
              a = new n.args();
            (a.authenticationToken = e), (a.note = t), (a.resourcesCreateRequest = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.createNoteWithTasks = function (e, t, s, i) {
            var n = c.createNoteWithTasks,
              a = new n.args();
            (a.authenticationToken = e), (a.note = t), (a.tasks = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.listBetaFeatures = function (e, t) {
            var s = c.listBetaFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.listBetaFeatureEnrollments = function (e, t) {
            var s = c.listBetaFeatureEnrollments,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.enrollInBetaFeature = function (e, t, s) {
            var i = c.enrollInBetaFeature,
              n = new i.args();
            (n.authenticationToken = e), (n.featureKey = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.enableBetaFeature = function (e, t, s, i, n) {
            var a = c.enableBetaFeature,
              o = new a.args();
            (o.authenticationToken = e),
              (o.featureKey = t),
              (o.enrollmentGuid = s),
              (o.enabled = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.listEnabledFeatures = function (e, t) {
            var s = c.listEnabledFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.checkEnabledFeatures = function (e, t, s) {
            var i = c.checkEnabledFeatures,
              n = new i.args();
            (n.authenticationToken = e), (n.featureKeysToCheck = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.checkUserFeatures = function (e, t, s) {
            var i = c.checkUserFeatures,
              n = new i.args();
            (n.authenticationToken = e), (n.featureKeysToCheck = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getNotePermissionsForRTE = function (e, t, s) {
            var i = c.getNotePermissionsForRTE,
              n = new i.args();
            (n.authenticationToken = e), (n.noteGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.pinContentToWidget = function (e, t, s, i, n) {
            var a = c.pinContentToWidget,
              o = new a.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.entityType = s),
              (o.entityGuidOrUri = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.unpinContentFromWidget = function (e, t, s, i, n) {
            var a = c.unpinContentFromWidget,
              o = new a.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.entityType = s),
              (o.entityGuidOrUri = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.listPinnedContent = function (e, t, s) {
            var i = c.listPinnedContent,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getWorkspaceNotebookSummary = function (e, t, s) {
            var i = c.getWorkspaceNotebookSummary,
              n = new i.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updateContentOfPinnedWidget = function (e, t, s, i, n) {
            var a = c.updateContentOfPinnedWidget,
              o = new a.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.toBePinnedContentList = s),
              (o.toBeUnpinnedContentList = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.changePinnedContentPosition = function (e, t, s, i) {
            var n = c.changePinnedContentPosition,
              a = new n.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), (a.request = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.requestAccessToWorkspace = function (e, t, s) {
            var i = c.requestAccessToWorkspace,
              n = new i.args();
            (n.authToken = e), (n.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.listRecommendedNotes = function (e, t, s, i, n) {
            var a = c.listRecommendedNotes,
              o = new a.args();
            (o.authenticationToken = e), (o.request = t), (o.offset = s), (o.maxNotes = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.getRecommendedNoteCardMetadata = function (e, t, s) {
            var i = c.getRecommendedNoteCardMetadata,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.submitRatingForRecommendedNote = function (e, t, s, i, n) {
            var a = c.submitRatingForRecommendedNote,
              o = new a.args();
            (o.authenticationToken = e), (o.noteGuid = t), (o.rating = s), (o.engine = i), a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.getFirebaseAuthCredential = function (e, t) {
            var s = c.getFirebaseAuthCredential,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getUserRestrictions = function (e, t) {
            var s = c.getUserRestrictions,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getNsvcThirdPartyAuthorizationToken = function (e, t) {
            var s = c.getNsvcThirdPartyAuthorizationToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getNsvcThirdPartyAuthorizationTokenByType = function (e, t, s) {
            var i = c.getNsvcThirdPartyAuthorizationTokenByType,
              n = new i.args();
            (n.authenticationToken = e), (n.tokenType = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.registerSession = function (e, t) {
            var s = c.registerSession,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.hasActiveSessions = function (e, t) {
            var s = c.hasActiveSessions,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.sendOneTimeCode = function (e, t, s, i, n) {
            var a = c.sendOneTimeCode,
              o = new a.args();
            (o.authenticationToken = e),
              (o.sendToBackupPhone = t),
              (o.messageTemplate = s),
              (o.useVoice = i),
              a.sendRequest(this.output, this.seqid++, o, n);
          }),
          (d.prototype.getMasked2FAMobileNumbers = function (e, t) {
            var s = c.getMasked2FAMobileNumbers,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.mmsvcGetPaywallState = function (e, t, s) {
            var i = c.mmsvcGetPaywallState,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.mmsvcCreateDeviceSync = function (e, t) {
            var s = c.mmsvcCreateDeviceSync,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.revokeSession = function (e, t) {
            var s = c.revokeSession,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.authenticateToBusiness = function (e, t) {
            var s = c.authenticateToBusiness,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.createSessionAuthenticationToken = function (e, t) {
            var s = c.createSessionAuthenticationToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getUser = function (e, t) {
            var s = c.getUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getUserUrls = function (e, t) {
            var s = c.getUserUrls,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.getSubscriptionInfo = function (e, t) {
            var s = c.getSubscriptionInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.revokeLongSession = function (e, t) {
            var s = c.revokeLongSession,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (d.prototype.listBusinessUsers = function (e, t, s) {
            var i = c.listBusinessUsers,
              n = new i.args();
            (n.authenticationToken = e), (n.businessUserFilter = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getConnectedIdentities = function (e, t, s) {
            var i = c.getConnectedIdentities,
              n = new i.args();
            (n.authenticationToken = e), (n.identityIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getIdentitiesByNsyncMemberships = function (e, t, s) {
            var i = c.getIdentitiesByNsyncMemberships,
              n = new i.args();
            (n.authenticationToken = e), (n.nsyncMembershipIds = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.getNAPAccessJWT = function (e, t, s) {
            var i = c.getNAPAccessJWT,
              n = new i.args();
            (n.authenticationToken = e), (n.request = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.unpublishNotebook = function (e, t, s, i) {
            var n = c.unpublishNotebook,
              a = new n.args();
            (a.authenticationToken = e),
              (a.notebookGuid = t),
              (a.convertGroupSharesToIndividual = s),
              n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.moveNotebookToAccountV2 = function (e, t, s) {
            var i = c.moveNotebookToAccountV2,
              n = new i.args();
            (n.authenticationToken = e), (n.notebookGuid = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updateNotebook = function (e, t, s) {
            var i = c.updateNotebook,
              n = new i.args();
            (n.authenticationToken = e), (n.notebook = t), i.sendRequest(this.output, this.seqid++, n, s);
          }),
          (d.prototype.updateNotebookStack = function (e, t, s, i) {
            var n = c.updateNotebookStack,
              a = new n.args();
            (a.authenticationToken = e), (a.notebookGuid = t), (a.stack = s), n.sendRequest(this.output, this.seqid++, a, i);
          }),
          (d.prototype.getUserCustomClaims = function (e, t) {
            var s = c.getUserCustomClaims,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.Utility.Client = d),
          (l.prototype.start = function () {
            this.stransport.listen();
          }),
          (l.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.Utility.Server = l);
      },
      24527: function (e, t, s) {
        e.exports = {
          Thrift: s(21293),
          ArrayBufferSerializerTransport: s(38722),
          BinaryNativeTransport: s(40594),
          BinaryFetchHttpTransport: s(66895),
          Exceptions: s(2523),
          JSONNativeTransport: s(5122),
          MemBuffer: s(10579),
          NodeBinaryHttpTransport: s(38935),
          NodeMemBuffer: s(39807),
          TBinaryXmlHttpTransport: s(63950),
          TXmlHttpTransport: s(30640),
          BinaryParser: s(95733),
          BinaryProtocol: s(29292),
          JSONProtocol: s(2188),
          NodeBinaryProtocol: s(8633)
        };
      },
      95733: function (e) {
        var t = {
          fromByte: function (e) {
            "use strict";
            var t = new ArrayBuffer(1);
            return new DataView(t).setInt8(0, e), t;
          },
          fromShort: function (e) {
            "use strict";
            e = parseInt(e);
            var t = new ArrayBuffer(2);
            return new DataView(t).setInt16(0, e), t;
          },
          fromInt: function (e) {
            "use strict";
            e = parseInt(e);
            var t = new ArrayBuffer(4);
            return new DataView(t).setInt32(0, e), t;
          },
          fromLong: function (e) {
            "use strict";
            if (((e = parseInt(e)), Math.abs(e) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + e);
            var t = (Array(64).join("0") + Math.abs(e).toString(2)).slice(-64);
            e < 0 && (t = this.twosCompliment(t));
            for (var s = new ArrayBuffer(8), i = new DataView(s), n = 0; n < 8; n++) {
              var a = parseInt(t.substr(8 * n, 8), 2);
              i.setUint8(n, a);
            }
            return s;
          },
          twosCompliment: function (e) {
            "use strict";
            var t = e.lastIndexOf("1");
            return e.substring(0, t).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + e.substring(t);
          },
          fromDouble: function (e) {
            "use strict";
            var t = new ArrayBuffer(8);
            return new DataView(t).setFloat64(0, e), t;
          },
          fromString: function (e) {
            "use strict";
            var t,
              s = unescape(encodeURIComponent(e)),
              i = s.length,
              n = new Uint8Array(i);
            for (t = 0; t < i; t++) n[t] = s.charCodeAt(t);
            return n.buffer;
          },
          toByte: function (e) {
            "use strict";
            return e.getUint8(0);
          },
          toBytes: function (e) {
            "use strict";
            var t,
              s = e.byteLength,
              i = new Uint8Array(s);
            for (t = 0; t < s; t++) i[t] = e.getUint8(t);
            return i;
          },
          toShort: function (e) {
            "use strict";
            return e.getInt16(0);
          },
          toInt: function (e) {
            "use strict";
            return e.getInt32(0);
          },
          toLong: function (e) {
            "use strict";
            for (var t = 1, s = "", i = 0; i < 8; i++) s += (Array(8).join("0") + e.getUint8(i).toString(2)).slice(-8);
            "1" === s[0] && ((t = -1), (s = this.twosCompliment(s)));
            var n = s.indexOf("1");
            if (-1 !== n && n < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(s, 2) * t;
          },
          toDouble: function (e) {
            "use strict";
            return e.getFloat64(0);
          },
          toString: function (e) {
            "use strict";
            var t,
              s,
              i = "",
              n = e.byteLength;
            for (t = 0; t < n; t++) 1 == (s = e.getUint8(t).toString(16)).length && (s = "0" + s), (i += "%" + s);
            return decodeURIComponent(i);
          }
        };
        e.exports = t;
      },
      29292: function (e, t, s) {
        var i = s(21293),
          n = s(95733),
          a = i.Type,
          o = -2147418112;
        function r(e, t, s) {
          "use strict";
          (this.transport = this.trans = e), (this.strictRead = void 0 !== t && t), (this.strictWrite = void 0 === s || s);
        }
        (r.prototype.flush = function (e) {
          "use strict";
          var t;
          return (
            e &&
              (t = function (t, s) {
                var i;
                return s && (i = new r(s)), e(t, i);
              }),
            this.trans.flush(t)
          );
        }),
          (r.prototype.writeMessageBegin = function (e, t, s) {
            "use strict";
            this.strictWrite
              ? (this.writeI32(o | t), this.writeString(e), this.writeI32(s))
              : (this.writeString(e), this.writeByte(t), this.writeI32(s));
          }),
          (r.prototype.writeMessageEnd = function () {}),
          (r.prototype.writeStructBegin = function (e) {}),
          (r.prototype.writeStructEnd = function () {}),
          (r.prototype.writeFieldBegin = function (e, t, s) {
            "use strict";
            this.writeByte(t), this.writeI16(s);
          }),
          (r.prototype.writeFieldEnd = function () {}),
          (r.prototype.writeFieldStop = function () {
            "use strict";
            this.writeByte(a.STOP);
          }),
          (r.prototype.writeMapBegin = function (e, t, s) {
            "use strict";
            this.writeByte(e), this.writeByte(t), this.writeI32(s);
          }),
          (r.prototype.writeMapEnd = function () {}),
          (r.prototype.writeListBegin = function (e, t) {
            "use strict";
            this.writeByte(e), this.writeI32(t);
          }),
          (r.prototype.writeListEnd = function () {}),
          (r.prototype.writeSetBegin = function (e, t) {
            "use strict";
            this.writeByte(e), this.writeI32(t);
          }),
          (r.prototype.writeSetEnd = function () {}),
          (r.prototype.writeBool = function (e) {
            "use strict";
            e ? this.writeByte(1) : this.writeByte(0);
          }),
          (r.prototype.writeByte = function (e) {
            "use strict";
            this.trans.write(n.fromByte(e));
          }),
          (r.prototype.writeBinary = function (e) {
            "use strict";
            if (("string" == typeof e && (e = n.fromString(e)), null == e.byteLength)) throw Error("Cannot read length of binary data");
            this.writeI32(e.byteLength), this.trans.write(e);
          }),
          (r.prototype.writeI16 = function (e) {
            "use strict";
            this.trans.write(n.fromShort(e));
          }),
          (r.prototype.writeI32 = function (e) {
            "use strict";
            this.trans.write(n.fromInt(e));
          }),
          (r.prototype.writeI64 = function (e) {
            "use strict";
            this.trans.write(n.fromLong(e));
          }),
          (r.prototype.writeDouble = function (e) {
            "use strict";
            this.trans.write(n.fromDouble(e));
          }),
          (r.prototype.writeString = function (e) {
            "use strict";
            var t = n.fromString(e);
            this.writeI32(t.byteLength), this.trans.write(t);
          }),
          (r.prototype.writeType = function (e, t) {
            "use strict";
            switch (e) {
              case a.BOOL:
                return this.writeBool(t);
              case a.BYTE:
                return this.writeByte(t);
              case a.I16:
                return this.writeI16(t);
              case a.I32:
                return this.writeI32(t);
              case a.I64:
                return this.writeI64(t);
              case a.DOUBLE:
                return this.writeDouble(t);
              case a.STRING:
                return this.writeString(t);
              case a.BINARY:
                return this.writeBinary(t);
              default:
                throw Error("Invalid type: " + e);
            }
          }),
          (r.prototype.readMessageBegin = function () {
            "use strict";
            var e = this.readI32(),
              t = { mtype: null, fname: null, seqid: null };
            if (e < 0) {
              var s = -65536 & e;
              if (s != o) throw (console.log("BAD: " + s), Error("Bad version in readMessageBegin: " + e));
              (t.mtype = 255 & e), (t.fname = this.readString()), (t.seqid = this.readI32());
            } else {
              if (this.strictRead) throw Error("No protocol version header");
              (t.fname = this.trans.read(e)), (t.mtype = this.readByte()), (t.seqid = this.readI32());
            }
            return t;
          }),
          (r.prototype.readMessageEnd = function () {}),
          (r.prototype.readStructBegin = function () {
            "use strict";
            return { fname: "" };
          }),
          (r.prototype.readStructEnd = function () {}),
          (r.prototype.readFieldBegin = function () {
            "use strict";
            var e = this.readByte(),
              t = { fname: null, ftype: e, fid: 0 };
            return e != a.STOP && (t.fid = this.readI16()), t;
          }),
          (r.prototype.readFieldEnd = function () {}),
          (r.prototype.readMapBegin = function () {
            "use strict";
            var e = { ktype: null, vtype: null, size: null };
            return (e.ktype = this.readByte()), (e.vtype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (r.prototype.readMapEnd = function () {}),
          (r.prototype.readListBegin = function () {
            "use strict";
            var e = { etype: null, size: null };
            return (e.etype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (r.prototype.readListEnd = function () {}),
          (r.prototype.readSetBegin = function () {
            "use strict";
            var e = { etype: null, size: null };
            return (e.etype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (r.prototype.readSetEnd = function () {}),
          (r.prototype.readBool = function () {
            "use strict";
            return 1 == this.readByte();
          }),
          (r.prototype.readByte = function () {
            "use strict";
            var e = this.trans.read(1);
            return n.toByte(e);
          }),
          (r.prototype.readI16 = function () {
            "use strict";
            var e = this.trans.read(2);
            return n.toShort(e);
          }),
          (r.prototype.readI32 = function () {
            "use strict";
            var e = this.trans.read(4);
            return n.toInt(e);
          }),
          (r.prototype.readI64 = function () {
            "use strict";
            var e = this.trans.read(8);
            return n.toLong(e);
          }),
          (r.prototype.readDouble = function () {
            "use strict";
            var e = this.trans.read(8);
            return n.toDouble(e);
          }),
          (r.prototype.readBinary = function () {
            "use strict";
            var e = this.readI32(),
              t = this.trans.read(e);
            return n.toBytes(t);
          }),
          (r.prototype.readString = function () {
            "use strict";
            var e = this.readI32(),
              t = this.trans.read(e);
            return n.toString(t);
          }),
          (r.prototype.readType = function (e) {
            "use strict";
            switch (e) {
              case a.BOOL:
                return this.readBool();
              case a.BYTE:
                return this.readByte();
              case a.I16:
                return this.readI16();
              case a.I32:
                return this.readI32();
              case a.I64:
                return this.readI64();
              case a.DOUBLE:
                return this.readDouble();
              case a.STRING:
                return this.readString();
              case a.BINARY:
                return this.readBinary();
              default:
                throw new Error("Invalid type: " + e);
            }
          }),
          (r.prototype.getTransport = function () {
            "use strict";
            return this.trans;
          }),
          (r.prototype.skipStruct = function () {
            "use strict";
            this.readStructBegin(), this.skipFields(), this.readStructEnd();
          }),
          (r.prototype.skipFields = function () {
            "use strict";
            var e = this.readFieldBegin();
            e.ftype !== a.STOP && (this.skip(e.ftype), this.readFieldEnd(), this.skipFields());
          }),
          (r.prototype.skipMap = function () {
            "use strict";
            var e = 0,
              t = this.readMapBegin();
            for (e = 0; e < t.size; e++) this.skip(t.ktype), this.skip(t.vtype);
            this.readMapEnd();
          }),
          (r.prototype.skipSet = function () {
            "use strict";
            var e = 0,
              t = this.readSetBegin();
            for (e = 0; e < t.size; e++) this.skip(t.etype);
            this.readSetEnd();
          }),
          (r.prototype.skipList = function () {
            "use strict";
            var e = 0,
              t = this.readListBegin();
            for (e = 0; e < t.size; e++) this.skip(t.etype);
            this.readListEnd();
          }),
          (r.prototype.skip = function (e) {
            "use strict";
            switch (e) {
              case a.STOP:
                return;
              case a.BOOL:
                return this.readBool();
              case a.BYTE:
                return this.readByte();
              case a.I16:
                return this.readI16();
              case a.I32:
                return this.readI32();
              case a.I64:
                return this.readI64();
              case a.DOUBLE:
                return this.readDouble();
              case a.STRING:
                return this.readString();
              case a.STRUCT:
                return this.skipStruct();
              case a.MAP:
                return this.skipMap();
              case a.SET:
                return this.skipSet();
              case a.LIST:
                return this.skipList();
              case a.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + e);
            }
          }),
          (e.exports = r);
      },
      2188: function (e, t, s) {
        var i = s(21293).Type,
          n = function (e) {
            "use strict";
            this.transport = e;
          };
        ((n.Type = {})[i.BOOL] = '"tf"'),
          (n.Type[i.BYTE] = '"i8"'),
          (n.Type[i.I16] = '"i16"'),
          (n.Type[i.I32] = '"i32"'),
          (n.Type[i.I64] = '"i64"'),
          (n.Type[i.DOUBLE] = '"dbl"'),
          (n.Type[i.STRUCT] = '"rec"'),
          (n.Type[i.STRING] = '"str"'),
          (n.Type[i.MAP] = '"map"'),
          (n.Type[i.LIST] = '"lst"'),
          (n.Type[i.SET] = '"set"'),
          ((n.RType = {}).tf = i.BOOL),
          (n.RType.i8 = i.BYTE),
          (n.RType.i16 = i.I16),
          (n.RType.i32 = i.I32),
          (n.RType.i64 = i.I64),
          (n.RType.dbl = i.DOUBLE),
          (n.RType.rec = i.STRUCT),
          (n.RType.str = i.STRING),
          (n.RType.map = i.MAP),
          (n.RType.lst = i.LIST),
          (n.RType.set = i.SET),
          (n.Version = 1),
          (n.prototype = {
            getTransport: function () {
              "use strict";
              return this.transport;
            },
            writeType: function (e, t) {
              "use strict";
              switch (e) {
                case i.BOOL:
                  return this.writeBool(t);
                case i.BYTE:
                  return this.writeByte(t);
                case i.I16:
                  return this.writeI16(t);
                case i.I32:
                  return this.writeI32(t);
                case i.I64:
                  return this.writeI64(t);
                case i.DOUBLE:
                  return this.writeDouble(t);
                case i.STRING:
                  return this.writeString(t);
                case i.BINARY:
                  return this.writeBinary(t);
                default:
                  throw Error("Invalid type: " + e);
              }
            },
            writeMessageBegin: function (e, t, s) {
              "use strict";
              (this.tstack = []), (this.tpos = []), this.tstack.push([n.Version, '"' + e + '"', t, s]);
            },
            writeMessageEnd: function () {
              "use strict";
              var e = this.tstack.pop();
              (this.wobj = this.tstack.pop()),
                this.wobj.push(e),
                (this.wbuf = "[" + this.wobj.join(",") + "]"),
                this.transport.write(this.wbuf);
            },
            writeStructBegin: function (e) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({});
            },
            writeStructEnd: function () {
              "use strict";
              var e = this.tpos.pop(),
                t = this.tstack[e],
                s = "{",
                i = !0;
              for (var n in t) i ? (i = !1) : (s += ","), (s += n + ":" + t[n]);
              (s += "}"), (this.tstack[e] = s);
            },
            writeFieldBegin: function (e, t, s) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({ fieldId: '"' + s + '"', fieldType: n.Type[t] });
            },
            writeFieldEnd: function () {
              "use strict";
              var e = this.tstack.pop(),
                t = this.tstack.pop();
              (this.tstack[this.tstack.length - 1][t.fieldId] = "{" + t.fieldType + ":" + e + "}"), this.tpos.pop();
            },
            writeFieldStop: function () {},
            writeMapBegin: function (e, t, s) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([n.Type[e], n.Type[t], 0]);
            },
            writeMapEnd: function () {
              "use strict";
              var e = this.tpos.pop();
              if (e != this.tstack.length) {
                (this.tstack.length - e - 1) % 2 != 0 && this.tstack.push("");
                var t = (this.tstack.length - e - 1) / 2;
                this.tstack[e][this.tstack[e].length - 1] = t;
                for (var s = "}", i = !0; this.tstack.length > e + 1; ) {
                  var n = this.tstack.pop(),
                    a = this.tstack.pop();
                  i ? (i = !1) : (s = "," + s), isNaN(a) || (a = '"' + a + '"'), (s = a + ":" + n + s);
                }
                (s = "{" + s), this.tstack[e].push(s), (this.tstack[e] = "[" + this.tstack[e].join(",") + "]");
              }
            },
            writeListBegin: function (e, t) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([n.Type[e], t]);
            },
            writeListEnd: function () {
              "use strict";
              for (var e = this.tpos.pop(); this.tstack.length > e + 1; ) {
                var t = this.tstack[e + 1];
                this.tstack.splice(e + 1, 1), this.tstack[e].push(t);
              }
              this.tstack[e] = "[" + this.tstack[e].join(",") + "]";
            },
            writeSetBegin: function (e, t) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([n.Type[e], t]);
            },
            writeSetEnd: function () {
              "use strict";
              for (var e = this.tpos.pop(); this.tstack.length > e + 1; ) {
                var t = this.tstack[e + 1];
                this.tstack.splice(e + 1, 1), this.tstack[e].push(t);
              }
              this.tstack[e] = "[" + this.tstack[e].join(",") + "]";
            },
            writeBool: function (e) {
              "use strict";
              this.tstack.push(e ? 1 : 0);
            },
            writeByte: function (e) {
              "use strict";
              this.tstack.push(e);
            },
            writeI16: function (e) {
              "use strict";
              this.tstack.push(e);
            },
            writeI32: function (e) {
              "use strict";
              this.tstack.push(e);
            },
            writeI64: function (e) {
              "use strict";
              this.tstack.push(e);
            },
            writeDouble: function (e) {
              "use strict";
              this.tstack.push(e);
            },
            writeString: function (e) {
              "use strict";
              if (null === e) this.tstack.push(null);
              else {
                for (var t = "", s = 0; s < e.length; s++) {
                  var i = e.charAt(s);
                  t +=
                    '"' === i
                      ? '\\"'
                      : "\\" === i
                      ? "\\\\"
                      : "\b" === i
                      ? "\\b"
                      : "\f" === i
                      ? "\\f"
                      : "\n" === i
                      ? "\\n"
                      : "\r" === i
                      ? "\\r"
                      : "\t" === i
                      ? "\\t"
                      : i;
                }
                this.tstack.push('"' + t + '"');
              }
            },
            writeBinary: function (e) {
              "use strict";
              this.writeString(e);
            },
            readType: function (e) {
              "use strict";
              var t;
              switch (e) {
                case i.BOOL:
                  t = this.readBool();
                  break;
                case i.BYTE:
                  t = this.readByte();
                  break;
                case i.I16:
                  t = this.readI16();
                  break;
                case i.I32:
                  t = this.readI32();
                  break;
                case i.I64:
                  t = this.readI64();
                  break;
                case i.DOUBLE:
                  t = this.readDouble();
                  break;
                case i.STRING:
                  t = this.readString();
                  break;
                case i.BINARY:
                  t = this.readBinary();
                  break;
                default:
                  throw new Error("Invalid type: " + e);
              }
              if ("object" == typeof t) return t.value;
            },
            readMessageBegin: function (e, t, s) {
              "use strict";
              if (((this.rstack = []), (this.rpos = []), (this.robj = this.transport.readAll()), "string" == typeof this.robj))
                if ("undefined" != typeof jQuery) this.robj = jQuery.parseJSON(this.robj);
                else {
                  if (!JSON) throw new Error("Could not find a JSON-parsing library");
                  this.robj = JSON.parse(this.robj);
                }
              var i = {},
                a = this.robj.shift();
              if (a != n.Version) throw Error("Wrong thrift protocol version: " + a);
              return (
                (i.fname = this.robj.shift()),
                (i.mtype = this.robj.shift()),
                (i.rseqid = this.robj.shift()),
                this.rstack.push(this.robj.shift()),
                i
              );
            },
            readMessageEnd: function () {},
            readStructBegin: function (e) {
              "use strict";
              return (
                this.rstack[this.rstack.length - 1] instanceof Array && this.rstack.push(this.rstack[this.rstack.length - 1].shift()),
                { fname: "" }
              );
            },
            readStructEnd: function () {
              "use strict";
              this.rstack[this.rstack.length - 2] instanceof Array && this.rstack.pop();
            },
            readFieldBegin: function () {
              "use strict";
              var e = {},
                t = -1,
                s = i.STOP;
              for (var a in this.rstack[this.rstack.length - 1])
                if (null !== a) {
                  (t = parseInt(a, 10)), this.rpos.push(this.rstack.length);
                  var o = this.rstack[this.rstack.length - 1][t];
                  delete this.rstack[this.rstack.length - 1][t], this.rstack.push(o);
                  break;
                }
              if (-1 != t)
                for (var r in this.rstack[this.rstack.length - 1])
                  null !== n.RType[r] && ((s = n.RType[r]), (this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][r]));
              return (e.fname = ""), (e.ftype = s), (e.fid = t), e;
            },
            readFieldEnd: function () {
              "use strict";
              for (var e = this.rpos.pop(); this.rstack.length > e; ) this.rstack.pop();
            },
            readMapBegin: function (e, t, s) {
              "use strict";
              var i = this.rstack.pop(),
                a = {};
              return (
                (a.ktype = n.RType[i.shift()]),
                (a.vtype = n.RType[i.shift()]),
                (a.size = i.shift()),
                this.rpos.push(this.rstack.length),
                this.rstack.push(i.shift()),
                a
              );
            },
            readMapEnd: function () {
              "use strict";
              this.readFieldEnd();
            },
            readListBegin: function (e, t) {
              "use strict";
              var s = this.rstack[this.rstack.length - 1],
                i = {};
              return (i.etype = n.RType[s.shift()]), (i.size = s.shift()), this.rpos.push(this.rstack.length), this.rstack.push(s), i;
            },
            readListEnd: function () {
              "use strict";
              this.readFieldEnd();
            },
            readSetBegin: function (e, t) {
              "use strict";
              return this.readListBegin(e, t);
            },
            readSetEnd: function () {
              "use strict";
              return this.readListEnd();
            },
            readBool: function () {
              "use strict";
              var e = this.readI32();
              return null !== e && "1" == e.value ? (e.value = !0) : (e.value = !1), e;
            },
            readByte: function () {
              "use strict";
              return this.readI32();
            },
            readI16: function () {
              "use strict";
              return this.readI32();
            },
            readI32: function (e) {
              "use strict";
              void 0 === e && (e = this.rstack[this.rstack.length - 1]);
              var t = {};
              if (e instanceof Array) 0 === e.length ? (t.value = void 0) : (t.value = e.shift());
              else if (e instanceof Object) {
                for (var s in e)
                  if (null !== s) {
                    this.rstack.push(e[s]), delete e[s], (t.value = s);
                    break;
                  }
              } else (t.value = e), this.rstack.pop();
              return t;
            },
            readI64: function () {
              "use strict";
              return this.readI32();
            },
            readDouble: function () {
              "use strict";
              return this.readI32();
            },
            readString: function () {
              "use strict";
              return this.readI32();
            },
            readBinary: function () {
              "use strict";
              return this.readString();
            },
            skip: function (e) {
              "use strict";
              throw Error("skip not supported yet");
            },
            flush: function (e) {
              "use strict";
              var t;
              return (
                e &&
                  (t = function (t, s) {
                    var i;
                    return s && (i = new n(s)), e(t, i);
                  }),
                this.transport.flush(t)
              );
            }
          }),
          (e.exports = n);
      },
      8633: function (e, t, s) {
        var i = s(21293).Type,
          n = {},
          a = -2147418112;
        function o(e, t, s) {
          "use strict";
          (this.transport = this.trans = e), (this.strictRead = void 0 !== t && t), (this.strictWrite = void 0 === s || s);
        }
        (o.prototype.flush = function (e) {
          "use strict";
          var t;
          return (
            e &&
              (t = function (t, s) {
                var i;
                return s && (i = new o(s)), e(t, i);
              }),
            this.trans.flush(t)
          );
        }),
          (o.prototype.writeMessageBegin = function (e, t, s) {
            "use strict";
            this.strictWrite
              ? (this.writeI32(a | t), this.writeString(e), this.writeI32(s))
              : (this.writeString(e), this.writeByte(t), this.writeI32(s));
          }),
          (o.prototype.writeMessageEnd = function () {}),
          (o.prototype.writeStructBegin = function (e) {}),
          (o.prototype.writeStructEnd = function () {}),
          (o.prototype.writeFieldBegin = function (e, t, s) {
            "use strict";
            this.writeByte(t), this.writeI16(s);
          }),
          (o.prototype.writeFieldEnd = function () {}),
          (o.prototype.writeFieldStop = function () {
            "use strict";
            this.writeByte(i.STOP);
          }),
          (o.prototype.writeMapBegin = function (e, t, s) {
            "use strict";
            this.writeByte(e), this.writeByte(t), this.writeI32(s);
          }),
          (o.prototype.writeMapEnd = function () {}),
          (o.prototype.writeListBegin = function (e, t) {
            "use strict";
            this.writeByte(e), this.writeI32(t);
          }),
          (o.prototype.writeListEnd = function () {}),
          (o.prototype.writeSetBegin = function (e, t) {
            "use strict";
            this.writeByte(e), this.writeI32(t);
          }),
          (o.prototype.writeSetEnd = function () {}),
          (o.prototype.writeBool = function (e) {
            "use strict";
            e ? this.writeByte(1) : this.writeByte(0);
          }),
          (o.prototype.writeByte = function (e) {
            "use strict";
            this.trans.write(n.fromByte(e));
          }),
          (o.prototype.writeBinary = function (e) {
            "use strict";
            if (("string" == typeof e && (e = n.fromString(e)), null == e.length)) throw Error("Cannot read length of binary data");
            this.writeI32(e.length), this.trans.write(e);
          }),
          (o.prototype.writeI16 = function (e) {
            "use strict";
            this.trans.write(n.fromShort(e));
          }),
          (o.prototype.writeI32 = function (e) {
            "use strict";
            this.trans.write(n.fromInt(e));
          }),
          (o.prototype.writeI64 = function (e) {
            "use strict";
            var t = n.fromLong(e);
            this.trans.write(t);
          }),
          (o.prototype.writeDouble = function (e) {
            "use strict";
            this.trans.write(n.fromDouble(e));
          }),
          (o.prototype.writeString = function (e) {
            "use strict";
            var t = n.fromString(e);
            this.writeI32(t.length), this.trans.write(t);
          }),
          (o.prototype.writeType = function (e, t) {
            "use strict";
            switch (e) {
              case i.BOOL:
                return this.writeBool(t);
              case i.BYTE:
                return this.writeByte(t);
              case i.I16:
                return this.writeI16(t);
              case i.I32:
                return this.writeI32(t);
              case i.I64:
                return this.writeI64(t);
              case i.DOUBLE:
                return this.writeDouble(t);
              case i.STRING:
                return this.writeString(t);
              case i.BINARY:
                return this.writeBinary(t);
              default:
                throw Error("Invalid type: " + e);
            }
          }),
          (o.prototype.readMessageBegin = function () {
            "use strict";
            var e = this.readI32(),
              t = { mtype: null, fname: null, seqid: null };
            if (e < 0) {
              var s = -65536 & e;
              if (s != a) throw (console.log("BAD: " + s), Error("Bad version in readMessageBegin: " + e));
              (t.mtype = 255 & e), (t.fname = this.readString()), (t.seqid = this.readI32());
            } else {
              if (this.strictRead) throw Error("No protocol version header");
              (t.fname = this.trans.read(e)), (t.mtype = this.readByte()), (t.seqid = this.readI32());
            }
            return t;
          }),
          (o.prototype.readMessageEnd = function () {}),
          (o.prototype.readStructBegin = function () {
            "use strict";
            return { fname: "" };
          }),
          (o.prototype.readStructEnd = function () {}),
          (o.prototype.readFieldBegin = function () {
            "use strict";
            var e = this.readByte(),
              t = { fname: null, ftype: e, fid: 0 };
            return e != i.STOP && (t.fid = this.readI16()), t;
          }),
          (o.prototype.readFieldEnd = function () {}),
          (o.prototype.readMapBegin = function () {
            "use strict";
            var e = { ktype: null, vtype: null, size: null };
            return (e.ktype = this.readByte()), (e.vtype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (o.prototype.readMapEnd = function () {}),
          (o.prototype.readListBegin = function () {
            "use strict";
            var e = { etype: null, size: null };
            return (e.etype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (o.prototype.readListEnd = function () {}),
          (o.prototype.readSetBegin = function () {
            "use strict";
            var e = { etype: null, size: null };
            return (e.etype = this.readByte()), (e.size = this.readI32()), e;
          }),
          (o.prototype.readSetEnd = function () {}),
          (o.prototype.readBool = function () {
            "use strict";
            return 1 == this.readByte();
          }),
          (o.prototype.readByte = function () {
            "use strict";
            return this.trans.read(1).readUInt8(0);
          }),
          (o.prototype.readI16 = function () {
            "use strict";
            return this.trans.read(2).readInt16BE(0);
          }),
          (o.prototype.readI32 = function () {
            "use strict";
            return this.trans.read(4).readInt32BE(0);
          }),
          (o.prototype.readI64 = function () {
            "use strict";
            var e = this.trans.read(8);
            return n.toLong(e);
          }),
          (o.prototype.readDouble = function () {
            "use strict";
            return this.trans.read(8).readDoubleBE(0);
          }),
          (o.prototype.readBinary = function () {
            "use strict";
            var e = this.readI32();
            return this.trans.read(e);
          }),
          (o.prototype.readString = function () {
            "use strict";
            var e = this.readI32();
            return this.trans.read(e).toString();
          }),
          (o.prototype.readType = function (e) {
            "use strict";
            switch (e) {
              case i.BOOL:
                return this.readBool();
              case i.BYTE:
                return this.readByte();
              case i.I16:
                return this.readI16();
              case i.I32:
                return this.readI32();
              case i.I64:
                return this.readI64();
              case i.DOUBLE:
                return this.readDouble();
              case i.STRING:
                return this.readString();
              case i.BINARY:
                return this.readBinary();
              default:
                throw new Error("Invalid type: " + e);
            }
          }),
          (o.prototype.getTransport = function () {
            "use strict";
            return this.trans;
          }),
          (o.prototype.skipStruct = function () {
            "use strict";
            this.readStructBegin(), this.skipFields(), this.readStructEnd();
          }),
          (o.prototype.skipFields = function () {
            "use strict";
            var e = this.readFieldBegin();
            e.ftype !== i.STOP && (this.skip(e.ftype), this.readFieldEnd(), this.skipFields());
          }),
          (o.prototype.skipMap = function () {
            "use strict";
            var e = 0,
              t = this.readMapBegin();
            for (e = 0; e < t.size; e++) this.skip(t.ktype), this.skip(t.vtype);
            this.readMapEnd();
          }),
          (o.prototype.skipSet = function () {
            "use strict";
            var e = 0,
              t = this.readSetBegin();
            for (e = 0; e < t.size; e++) this.skip(t.etype);
            this.readSetEnd();
          }),
          (o.prototype.skipList = function () {
            "use strict";
            var e = 0,
              t = this.readListBegin();
            for (e = 0; e < t.size; e++) this.skip(t.etype);
            this.readListEnd();
          }),
          (o.prototype.skip = function (e) {
            "use strict";
            switch (e) {
              case i.STOP:
                return;
              case i.BOOL:
                return this.readBool();
              case i.BYTE:
                return this.readByte();
              case i.I16:
                return this.readI16();
              case i.I32:
                return this.readI32();
              case i.I64:
                return this.readI64();
              case i.DOUBLE:
                return this.readDouble();
              case i.STRING:
                return this.readString();
              case i.STRUCT:
                return this.skipStruct();
              case i.MAP:
                return this.skipMap();
              case i.SET:
                return this.skipSet();
              case i.LIST:
                return this.skipList();
              case i.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + e);
            }
          }),
          (n.fromByte = function (e) {
            "use strict";
            var t = new Buffer(1);
            return t.writeInt8(e, 0), t;
          }),
          (n.fromShort = function (e) {
            "use strict";
            e = parseInt(e);
            var t = new Buffer(2);
            return t.writeInt16BE(e, 0), t;
          }),
          (n.fromInt = function (e) {
            "use strict";
            e = parseInt(e);
            var t = new Buffer(4);
            return t.writeInt32BE(e, 0), t;
          }),
          (n.fromLong = function (e) {
            "use strict";
            if (((e = parseInt(e)), Math.abs(e) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + e);
            var t = (Array(64).join("0") + Math.abs(e).toString(2)).slice(-64);
            e < 0 && (t = this.twosCompliment(t));
            for (var s = new Buffer(8), i = 0; i < 8; i++) {
              var n = parseInt(t.substr(8 * i, 8), 2);
              s.writeUInt8(n, i);
            }
            return s;
          }),
          (n.twosCompliment = function (e) {
            "use strict";
            var t = e.lastIndexOf("1");
            return e.substring(0, t).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + e.substring(t);
          }),
          (n.fromDouble = function (e) {
            "use strict";
            var t = new Buffer(8);
            return t.writeDoubleBE(e, 0), t;
          }),
          (n.fromString = function (e) {
            "use strict";
            var t = Buffer.byteLength(e),
              s = new Buffer(t);
            return s.write(e), s;
          }),
          (n.toLong = function (e) {
            "use strict";
            for (var t = 1, s = "", i = 0; i < 8; i++) s += (Array(8).join("0") + e.readUInt8(i).toString(2)).slice(-8);
            "1" === s[0] && ((t = -1), (s = this.twosCompliment(s)));
            var n = s.indexOf("1");
            if (-1 !== n && n < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(s, 2) * t;
          }),
          (e.exports = o);
      },
      21293: function (e) {
        var t = {
          Version: "0.9.0",
          Type: {
            STOP: 0,
            VOID: 1,
            BOOL: 2,
            BYTE: 3,
            I08: 3,
            DOUBLE: 4,
            I16: 6,
            I32: 8,
            I64: 10,
            STRING: 11,
            UTF7: 11,
            STRUCT: 12,
            EXCEPTION: 12,
            MAP: 13,
            SET: 14,
            LIST: 15,
            UTF8: 16,
            UTF16: 17,
            BINARY: 18
          },
          MessageType: { CALL: 1, REPLY: 2, EXCEPTION: 3 },
          objectLength: function (e) {
            "use strict";
            var t = 0;
            for (var s in e) e.hasOwnProperty(s) && t++;
            return t;
          },
          inherits: function (e, t) {
            "use strict";
            function s() {}
            (s.prototype = t.prototype), (e.prototype = new s());
          },
          equals: function (e, s) {
            "use strict";
            return e == s || (e == t.Type.BINARY && s == t.Type.STRING) || (e == t.Type.STRING && s == t.Type.BINARY);
          },
          serializedType: function (e) {
            "use strict";
            return e == t.Type.BINARY ? t.Type.STRING : e;
          },
          defaults: function (e) {
            "use strict";
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                if (t) for (var s in t) void 0 === e[s] && (e[s] = t[s]);
              }),
              e
            );
          },
          extend: function (e) {
            "use strict";
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                if (t) for (var s in t) e[s] = t[s];
              }),
              e
            );
          },
          Method: function (e) {
            "use strict";
            (this.alias = e.alias), (this.args = e.args), (this.result = e.result);
          }
        };
        (t.Method.define = function (e) {
          "use strict";
          return new t.Method(e);
        }),
          (t.Method.noop = function () {}),
          (t.Method.sendException = function (e, s, i, n) {
            "use strict";
            var a;
            n ||
              (i instanceof t.TApplicationException
                ? (n = t.TApplicationException)
                : i instanceof t.TException
                ? (n = t.TException)
                : ((n = t.TApplicationException),
                  (a = {}),
                  i && (i.message && (a.message = i.message + ""), null != i.code && Number.isFinite(a.code) && (a.code = i.code)),
                  (i = new t.TApplicationException(a)))),
              e.writeMessageBegin("", t.MessageType.EXCEPTION, s),
              n.write(e, i),
              e.writeMessageEnd(),
              e.flush();
          }),
          (t.Method.prototype.sendRequest = function (e, s, i, n) {
            "use strict";
            e.writeMessageBegin(this.alias, t.MessageType.CALL, s),
              this.args.write(e, i),
              e.writeMessageEnd(),
              e.flush(
                function (e, t) {
                  e ? n(e) : this.processResponse(t, n);
                }.bind(this)
              );
          }),
          (t.Method.prototype.sendResponse = function (e, s, i) {
            "use strict";
            e.writeMessageBegin(this.alias, t.MessageType.REPLY, s), this.result.write(e, i), e.writeMessageEnd(), e.flush();
          }),
          (t.Method.prototype.processResponse = function (e, s) {
            "use strict";
            var i, n, a, o;
            if (((s = s || t.Method.noop), (i = e.readMessageBegin()).mtype == t.MessageType.EXCEPTION))
              return (a = t.TApplicationException.read(e)), e.readMessageEnd(), void s(a);
            if (i.mtype == t.MessageType.REPLY)
              if (this.alias == i.fname) {
                for (o in ((n = this.result.read(e)), e.readMessageEnd(), this.result.fields))
                  if (0 != o && n[this.result.fields[o].alias]) return void s((a = n[this.result.fields[o].alias]));
                s(null, n.returnValue);
              } else s((a = Error("Unrecognized method name. Expected [" + this.alias + "] Received [" + i.fname + "]")));
            else s((a = Error("Client expects REPLY but received unsupported message type: " + i.mtype)));
          }),
          (t.List = {}),
          (t.List.define = function (e, s, i) {
            "use strict";
            var n = function () {
              return [];
            };
            return (
              "string" != typeof e && ((i = s), (s = e), (e = "anonymous")),
              (n.alias = e),
              (n.type = s),
              (n.def = i),
              (n.read = t.List.read.bind(null, n)),
              (n.write = t.List.write.bind(null, n)),
              n
            );
          }),
          (t.List.read = function (e, s) {
            "use strict";
            var i = new e(),
              n = s.readListBegin();
            return t.List.readEntries(e, i, s, n.size), s.readListEnd(), i;
          }),
          (t.List.readEntries = function (e, t, s, i) {
            "use strict";
            var n;
            for (n = 0; n < i; n++) null != e.def ? t.push(e.def.read(s)) : t.push(s.readType(e.type));
          }),
          (t.List.write = function (e, t, s) {
            "use strict";
            var i,
              n,
              a = s.length;
            for (t.writeListBegin(e.type, a), n = 0; n < a; n++) (i = s[n]), e.def ? e.def.write(t, i) : t.writeType(e.type, i);
            t.writeListEnd();
          }),
          (t.Set = {}),
          (t.Set.define = function (e, s, i) {
            "use strict";
            var n = function () {
              return [];
            };
            return (
              "string" != typeof e && ((i = s), (s = e), (e = "anonymous")),
              (n.alias = e),
              (n.type = s),
              (n.def = i),
              (n.read = t.Set.read.bind(null, n)),
              (n.write = t.Set.write.bind(null, n)),
              n
            );
          }),
          (t.Set.read = function (e, s) {
            "use strict";
            var i = new e(),
              n = s.readSetBegin();
            return t.Set.readEntries(e, i, s, n.size), s.readSetEnd(), i;
          }),
          (t.Set.readEntries = function (e, t, s, i) {
            "use strict";
            var n;
            for (n = 0; n < i; n++) null != e.def ? t.push(e.def.read(s)) : t.push(s.readType(e.type));
          }),
          (t.Set.write = function (e, t, s) {
            "use strict";
            var i,
              n,
              a = s.length;
            for (t.writeSetBegin(e.type, a), n = 0; n < a; n++) (i = s[n]), e.def ? e.def.write(t, i) : t.writeType(e.type, i);
            t.writeSetEnd();
          }),
          (t.Map = {}),
          (t.Map.define = function (e, s, i, n) {
            "use strict";
            var a = function () {
              return {};
            };
            return (
              "string" != typeof e && ((n = i), (i = s), (s = e), (e = "anonymous")),
              (a.alias = e),
              (a.ktype = s),
              (a.vtype = i),
              (a.vdef = n),
              (a.read = t.Map.read.bind(null, a)),
              (a.write = t.Map.write.bind(null, a)),
              a
            );
          }),
          (t.Map.read = function (e, s) {
            "use strict";
            var i = new e(),
              n = s.readMapBegin();
            return t.Map.readEntries(e, i, s, n.size), s.readMapEnd(), i;
          }),
          (t.Map.readEntries = function (e, t, s, i) {
            "use strict";
            var n, a;
            for (n = 0; n < i; n++) (a = s.readType(e.ktype)), null != e.vdef ? (t[a] = e.vdef.read(s)) : (t[a] = s.readType(e.vtype));
          }),
          (t.Map.write = function (e, t, s) {
            "use strict";
            var i,
              n,
              a,
              o = Object.keys(s),
              r = o.length;
            for (t.writeMapBegin(e.ktype, e.vtype, r), a = 0; a < r; a++)
              (i = o[a]), t.writeType(e.ktype, i), (n = s[i]), e.vdef ? e.vdef.write(t, n) : t.writeType(e.vtype, n);
            t.writeMapEnd();
          }),
          (t.Struct = {}),
          (t.Struct.define = function (e, s) {
            "use strict";
            var i,
              n,
              a = {};
            for (i in (s = s || {})) (n = s[i]), (a[n.alias] = n.defaultValue || null);
            var o = function (e) {
              return (e = "object" == typeof e ? e : {}), t.defaults({}, e, a);
            };
            return (
              (o.alias = e),
              (o.fields = s),
              (o.defaultValues = a),
              (o.read = t.Struct.read.bind(null, o)),
              (o.write = t.Struct.write.bind(null, o)),
              (o.values = t.Struct.values.bind(null, o)),
              (o.setByDef = t.Struct.setByDef.bind(null, o)),
              o
            );
          }),
          (t.Struct.setByDef = function (e, t, s) {
            "use strict";
            var i,
              n,
              a = e.fields,
              o = !1;
            for (i in a)
              if ((n = a[i]).def && s instanceof n.def) {
                (t[n.alias] = s), (o = !0);
                break;
              }
            return o;
          }),
          (t.Struct.values = function (e, t) {
            "use strict";
            var s,
              i,
              n,
              a = e.fields,
              o = Object.keys(e.fields),
              r = new Array(o.length);
            for (n = 0; n < o.length; n++) null != (i = a[(s = o[n])].index) ? (r[i] = t[a[s].alias]) : (r[n] = t[a[s].alias]);
            return r;
          }),
          (t.Struct.read = function (e, s) {
            "use strict";
            var i = new e();
            return s.readStructBegin(), t.Struct.readFields(e, s, i), s.readStructEnd(), i;
          }),
          (t.Struct.readFields = function (e, s, i) {
            "use strict";
            for (var n, a; ; ) {
              if ((n = s.readFieldBegin()).ftype == t.Type.STOP) return;
              (a = e.fields[n.fid]) && t.equals(n.ftype, a.type)
                ? a.def
                  ? (i[a.alias] = a.def.read(s))
                  : (i[a.alias] = s.readType(a.type))
                : s.skip(n.ftype),
                s.readFieldEnd();
            }
          }),
          (t.Struct.write = function (e, s, i) {
            "use strict";
            var n, a, o;
            for (n in (s.writeStructBegin(e.alias), e.fields))
              null != (o = i[(a = e.fields[n]).alias]) &&
                (s.writeFieldBegin(a.alias, t.serializedType(a.type), n),
                a.def ? new a.def.write(s, o) : s.writeType(a.type, o),
                s.writeFieldEnd());
            s.writeFieldStop(), s.writeStructEnd();
          }),
          (t.Exception = {}),
          (t.Exception.define = function (e, s) {
            "use strict";
            var i,
              n,
              a = {};
            for (i in (s = s || {})) (n = s[i]), (a[n.alias] = n.defaultValue || null);
            var o = function (e) {
              var s = {};
              "object" == typeof e && (s = e),
                t.defaults(this, s, a),
                "string" == typeof e ? (this.message = e) : e instanceof Error && (this.message = e.message);
            };
            return (
              (o.alias = e),
              (o.fields = s),
              (o.defaultValues = a),
              (o.read = t.Struct.read.bind(null, o)),
              (o.write = t.Struct.write.bind(null, o)),
              o
            );
          }),
          (t.TException = t.Exception.define("TException", { 1: { alias: "message", type: t.Type.STRING } })),
          (t.TApplicationExceptionType = {
            UNKNOWN: 0,
            UNKNOWN_METHOD: 1,
            INVALID_MESSAGE_TYPE: 2,
            WRONG_METHOD_NAME: 3,
            BAD_SEQUENCE_ID: 4,
            MISSING_RESULT: 5,
            INTERNAL_ERROR: 6,
            PROTOCOL_ERROR: 7
          }),
          (t.TApplicationException = t.Exception.define("TApplicationException", {
            1: { alias: "message", type: t.Type.STRING },
            2: { alias: "code", type: t.Type.I32, defaultValue: t.TApplicationExceptionType.INTERNAL_ERROR }
          })),
          (t.Processor = function () {
            "use strict";
            this.methods = {};
          }),
          (t.Processor.prototype.addMethod = function (e, t) {
            "use strict";
            this.methods[e.alias] = { def: e, fn: t };
          }),
          (t.Processor.prototype.process = function (e, s) {
            "use strict";
            var i, n, a, o, r;
            try {
              if ((o = e.readMessageBegin()).mtype != t.MessageType.CALL)
                throw new t.TException("Server expects CALL but received unsupported message type: " + o.mtype);
              if (null == (i = this.methods[o.fname])) throw new t.TException("Unrecognized method name: " + o.fname);
              (r = (n = i.def).args.read(e)),
                (a = new n.result()),
                i.fn.apply(
                  null,
                  n.args.values(r).concat([
                    function (e) {
                      (a.returnValue = e), n.sendResponse(s, o.seqid, a);
                    },
                    function (e) {
                      var i = o ? o.seqid : -1;
                      a && n.result.setByDef(a, e) ? n.sendResponse(s, o.seqid, a) : t.Method.sendException(s, i, e);
                    }
                  ])
                );
            } catch (e) {
              console.log(e);
              var p = o ? o.seqid : -1;
              a && n.result.setByDef(a, e) ? n.sendResponse(s, o.seqid, a) : t.Method.sendException(s, p, e);
            }
          }),
          (e.exports = t);
      },
      38722: function (e, t, s) {
        s(21293);
        var i,
          n = function () {
            (this.buffer = []), (this.readOffset = 0);
          };
        ((i = n.prototype).reset = function () {
          (this.buffer = []), (this.readOffset = 0);
        }),
          (i.getBytes = function () {
            var e = this.buffer.reduce(function (e, t) {
                return e + t.byteLength;
              }, 0),
              t = new Uint8Array(new ArrayBuffer(e)),
              s = 0;
            return (
              this.buffer.forEach(function (e) {
                var i;
                (i = e.buffer ? (e instanceof Uint8Array ? e : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) : new Uint8Array(e)),
                  t.set(i, s),
                  (s += e.byteLength);
              }),
              t
            );
          }),
          (i.open = function () {}),
          (i.close = function () {}),
          (i.read = function (e) {
            var t = new DataView(this.getBytes().buffer, this.readOffset, e);
            return (this.readOffset += e), t;
          }),
          (i.write = function (e) {
            this.buffer.push(e);
          }),
          (i.flush = function (e) {}),
          (i.send = function (e, t, s, i) {}),
          (e.exports = n);
      },
      66895: function (e, t, s) {
        var i = s(2523),
          n = s(10579);
        function a(e, t) {
          "use strict";
          (this.input = new n()), (this.url = e), (this.opts = t || {});
        }
        (a.prototype.open = function () {}),
          (a.prototype.close = function () {}),
          (a.prototype.read = function (e) {
            throw Error("BinaryFetchHttpTransport object does not support reads");
          }),
          (a.prototype.write = function (e) {
            this.input.write(e);
          }),
          (a.prototype.clear = function () {
            this.input.clear();
          }),
          (a.prototype.flush = function (e) {
            const t = "application/x-thrift";
            var s = { "Content-Type": t, Accept: t };
            if (this.opts.headers) for (var a in this.opts.headers) s[a] = this.opts.headers[a];
            this.input.flush();
            const o = new Blob([this.input.buffer], { type: t });
            fetch(this.url, { method: "post", headers: s, body: o, credentials: this.opts.noCredentials ? "omit" : "include" })
              .then(async (t) => {
                if (e)
                  if (200 === t.status)
                    t.arrayBuffer()
                      .then((t) => {
                        e(null, new n(t));
                      })
                      .catch((t) => {
                        e(
                          new i.TransportException(
                            "Fetch response handling error",
                            new i.NetworkException(`Fetch response to arrayBuffer error ${JSON.stringify(t)} `, this.url)
                          )
                        );
                      });
                  else {
                    const s = {};
                    for (let e of t.headers.entries()) Array.isArray(e) && e.length && 2 === e.length && (s[e[0]] = e[1]);
                    e(
                      new i.TransportException("Non 200 http response", new i.HTTPException("Non 200 http response", this.url, t.status, s))
                    );
                  }
              })
              .catch((t) => {
                e && e(new i.TransportException("Fetch error", new i.NetworkException(`Fetch error ${JSON.stringify(t)} `, this.url)));
              }),
              this.clear();
          }),
          (e.exports = a);
      },
      40594: function (e, t, s) {
        var i = s(10579),
          n = function (e) {
            "use strict";
            (this.notify = e), (this.received = new i()), (this.input = new i());
          };
        !(function (e) {
          "use strict";
          (e.reset = function () {
            this.received.clear(), this.input.clear();
          }),
            (e.open = function () {}),
            (e.close = function () {}),
            (e.read = function (e) {
              return this.received.read(e);
            }),
            (e.readAll = function () {
              return this.received.buffer;
            }),
            (e.write = function (e) {
              this.input.write(e);
            }),
            (e.flush = function (e) {
              this.input.flush();
              for (var t = this.input.buffer, s = t.length, i = [], n = 0; n < s; n++) i.push(String.fromCharCode(t[n]));
              this.notify(window.btoa(i.join(""))), this.reset();
            }),
            (e.send = function (e, t, s, i) {}),
            (e.receive = function (e) {
              for (var t = window.atob(e), s = t.length, n = new Uint8Array(s), a = 0; a < s; a++) n[a] = t.charCodeAt(a);
              this.received = new i(n.buffer);
            });
        })(n.prototype),
          (e.exports = n);
      },
      2523: function (e) {
        function t(e, t) {
          (this.message = e), (this.cause = t);
        }
        function s(e, t, s, i) {
          (this.message = e), (this.url = t), (this.statusCode = s), (this.headers = i);
        }
        function i(e, t) {
          (this.message = e), (this.url = t);
        }
        (t.prototype = Object.create(Error.prototype)),
          (t.prototype.name = "TransportException"),
          (s.prototype = Object.create(Error.prototype)),
          (s.prototype.name = "HTTPException"),
          (i.prototype = Object.create(Error.prototype)),
          (i.prototype.name = "NetworkException"),
          (e.exports = { TransportException: t, HTTPException: s, NetworkException: i });
      },
      5122: function (e) {
        var t = function (e) {
          "use strict";
          (this.notify = e), (this.received = ""), (this.pos = 0);
        };
        !(function (e) {
          "use strict";
          (e.reset = function () {
            (this.received = ""), (this.pos = 0);
          }),
            (e.open = function () {}),
            (e.close = function () {}),
            (e.read = function (e) {
              var t = this.received.substring(this.pos, this.pos + e);
              return (this.pos += e), t;
            }),
            (e.readAll = function () {
              return this.received;
            }),
            (e.write = function (e) {
              this.notify(JSON.stringify(e));
            }),
            (e.flush = function (e) {}),
            (e.send = function (e, t, s, i) {}),
            (e.receive = function (e) {
              (this.received = e), (this.pos = 0);
            });
        })(t.prototype),
          (e.exports = t);
      },
      10579: function (e) {
        function t(e) {
          "use strict";
          (this.queue = []), (this.buffer = e), (this.offset = 0);
        }
        (t.prototype.read = function (e) {
          "use strict";
          var t = new DataView(this.buffer, this.offset, e);
          return (this.offset += e), t;
        }),
          (t.prototype.write = function (e) {
            "use strict";
            var t;
            (t = e.buffer ? (e instanceof Uint8Array ? e : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)) : new Uint8Array(e)),
              this.queue.push(t);
          }),
          (t.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (t.prototype.flush = function () {
            "use strict";
            var e,
              t = 0,
              s = 0;
            this.buffer && (t = this.buffer.byteLength),
              (t = this.queue.reduce(function (e, t) {
                return e + t.byteLength;
              }, t)),
              (e = new Uint8Array(new ArrayBuffer(t))),
              this.buffer && e.set(this.buffer),
              this.queue.forEach(function (t) {
                e.set(t, s), (s += t.byteLength);
              }),
              (this.queue = []),
              (this.buffer = e);
          }),
          (e.exports = t);
      },
      38935: function (e, t, s) {
        var i = s(39807),
          n = s(2523),
          a = s(72693),
          o = s(49069),
          r = s(8575);
        function p(e, t, s, n, a) {
          "use strict";
          var o = r.parse(e);
          (this.hostname = o.hostname),
            (this.port = o.port),
            (this.path = o.path),
            (this.url = o.href),
            (this.quiet = !!t),
            (this.insecure = !!s),
            (this.additionalHeaders = n),
            (this.agent = a),
            (this.input = new i());
        }
        (p.prototype.open = function () {}),
          (p.prototype.close = function () {}),
          (p.prototype.read = function (e) {
            "use strict";
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (p.prototype.write = function (e) {
            "use strict";
            this.input.write(e);
          }),
          (p.prototype.clear = function () {
            "use strict";
            this.input.clear();
          }),
          (p.prototype.flush = function (e) {
            "use strict";
            var t = this,
              s = Object.assign({ "Content-Type": "application/x-thrift", Accept: "application/x-thrift" }, this.additionalHeaders),
              r = { hostname: this.hostname, port: this.port, path: this.path, method: "POST", headers: s };
            this.agent && (r.agent = this.agent);
            var p = this.url,
              u = (this.insecure ? a : o).request(r, function (s) {
                var a = [];
                if (200 !== s.statusCode) {
                  var o = "Error in Thrift response. status:" + s.statusCode + "headers: " + JSON.stringify(s.headers);
                  if ((t.log(o), e)) return void e(new n.TransportException(o, new n.HTTPException("", p, s.statusCode, s.headers)));
                }
                s.on("data", function (e) {
                  a.push(e);
                }),
                  s.on("end", function () {
                    var t = Buffer.concat(a);
                    e && e(null, new i(t));
                  });
              });
            u.on("error", function (s) {
              t.log("Error making Thrift HTTP request: " + s),
                e &&
                  e(
                    new n.TransportException(s.message ? s.message : "Thrift request failed", new n.NetworkException(JSON.stringify(s), p))
                  );
            }),
              this.input.flush(),
              u.write(this.input.buffer),
              u.end(),
              this.clear();
          }),
          (p.prototype.log = function (e) {
            "use strict";
            this.quiet || console.log(e);
          }),
          (e.exports = p);
      },
      39807: function (e) {
        function t(e) {
          "use strict";
          (this.queue = []), (this.offset = 0), (this.buffer = e);
        }
        (t.prototype.read = function (e) {
          "use strict";
          if (this.offset + e > this.buffer.length) throw Error("MemBuffer overrun");
          var t = this.buffer.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }),
          (t.prototype.write = function (e) {
            "use strict";
            if (Buffer.isBuffer(e)) this.queue.push(e);
            else {
              if (!(e.buffer && e.buffer instanceof ArrayBuffer))
                throw Error("Unsupported type sent to MemBuffer.write. Accepts Buffer and ArrayBuffer.");
              this.queue.push(Buffer.from(e.buffer));
            }
          }),
          (t.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (t.prototype.flush = function () {
            "use strict";
            this.buffer && this.queue.unshift(this.buffer), (this.buffer = Buffer.concat(this.queue)), (this.queue = []);
          }),
          (e.exports = t);
      },
      45099: function (e) {
        function t(e) {
          "use strict";
          (this.queue = []), (this.buffer = e), (this.offset = 0);
        }
        (t.prototype.read = function (e) {
          "use strict";
          this.flush();
          var t = this.buffer.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }),
          (t.prototype.readAll = function () {
            "use strict";
            this.flush();
            var e = this.buffer.length - this.offset;
            return this.read(e);
          }),
          (t.prototype.write = function (e) {
            "use strict";
            this.queue.push(e);
          }),
          (t.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (t.prototype.flush = function () {
            "use strict";
            var e = this.buffer ? this.buffer : "";
            (e += this.queue.join("")), (this.queue = []), (this.buffer = e);
          }),
          (e.exports = t);
      },
      63950: function (e, t, s) {
        var i = s(2523),
          n = s(10579);
        function a(e, t) {
          (this.input = new n()), (this.url = e), (this.opts = t || {});
        }
        (a.prototype.open = function () {}),
          (a.prototype.close = function () {}),
          (a.prototype.read = function (e) {
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (a.prototype.write = function (e) {
            this.input.write(e);
          }),
          (a.prototype.clear = function () {
            this.input.clear();
          }),
          (a.prototype.flush = function (e) {
            var t;
            (t = new XMLHttpRequest()).open("POST", this.url, !0),
              (t.withCredentials = !this.opts.noCredentials),
              t.setRequestHeader("Content-Type", "application/x-thrift"),
              t.setRequestHeader("Accept", "application/x-thrift"),
              (t.responseType = "arraybuffer");
            var s = this.opts.headers || {};
            for (var a in s) {
              var o = s[a];
              t.setRequestHeader(a, o);
            }
            var r = this.url;
            (t.onload = function (s) {
              if (e)
                if (200 === t.status) e(null, new n(t.response));
                else {
                  const s = t
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/),
                    n = {};
                  s.forEach(function (e) {
                    var t = e.split(": "),
                      s = t.shift(),
                      i = t.join(": ");
                    n[s] = i;
                  }),
                    e(new i.TransportException("Non 200 http response", new i.HTTPException("Non 200 http response", r, t.status, n)));
                }
            }),
              (t.onerror = function (t) {
                e && e(new i.TransportException("XHR error event", new i.NetworkException("XHR error event", r)));
              }),
              (t.ontimeout = function (t) {
                e && e(new i.TransportException("XHR error event. Timeout.", new i.NetworkException("XHR error event. Timeout.", r)));
              }),
              this.input.flush(),
              t.send(this.input.buffer.buffer),
              this.clear();
          }),
          (e.exports = a);
      },
      30640: function (e, t, s) {
        var i = s(45099);
        function n(e, t) {
          (this.input = new i()), (this.url = e), (this.opts = t || {});
        }
        (n.prototype.open = function () {}),
          (n.prototype.close = function () {}),
          (n.prototype.read = function (e) {
            throw Error("TextHttpTransport object does not support reads");
          }),
          (n.prototype.write = function (e) {
            this.input.write(e);
          }),
          (n.prototype.clear = function () {
            this.input.clear();
          }),
          (n.prototype.flush = function (e) {
            var t;
            (t = (function () {
              try {
                return new XMLHttpRequest();
              } catch (e) {}
              try {
                return new ActiveXObject("Msxml2.XMLHTTP");
              } catch (e) {}
              try {
                return new ActiveXObject("Microsoft.XMLHTTP");
              } catch (e) {}
              throw Error("Your browser doesn't support the XmlHttpRequest object.");
            })()).overrideMimeType && t.overrideMimeType("application/json"),
              t.open("POST", this.url, !0),
              (t.withCredentials = !this.opts.noCredentials),
              t.setRequestHeader("Content-Type", "application/json"),
              t.setRequestHeader("Accept", "application/json"),
              (t.responseType = "application/json"),
              Object.prototype.hasOwnProperty.call(t, "onload") && Object.prototype.hasOwnProperty.call(t, "onerror")
                ? ((t.onload = function (s) {
                    e && e(null, new i(t.response));
                  }),
                  (t.onerror = function (t) {
                    e && e(t);
                  }))
                : (t.onreadystatechange = function () {
                    4 === t.readyState &&
                      e &&
                      (200 === t.status ? e(null, new i(t.responseText)) : e(new Error("unexpected status: " + t.status)));
                  }),
              this.input.flush(),
              t.send(this.input.buffer),
              this.clear();
          }),
          (e.exports = n);
      },
      17648: function (e) {
        "use strict";
        var t = Array.prototype.slice,
          s = Object.prototype.toString;
        e.exports = function (e) {
          var i = this;
          if ("function" != typeof i || "[object Function]" !== s.call(i))
            throw new TypeError("Function.prototype.bind called on incompatible " + i);
          for (var n, a = t.call(arguments, 1), o = Math.max(0, i.length - a.length), r = [], p = 0; p < o; p++) r.push("$" + p);
          if (
            ((n = Function(
              "binder",
              "return function (" + r.join(",") + "){ return binder.apply(this,arguments); }"
            )(function () {
              if (this instanceof n) {
                var s = i.apply(this, a.concat(t.call(arguments)));
                return Object(s) === s ? s : this;
              }
              return i.apply(e, a.concat(t.call(arguments)));
            })),
            i.prototype)
          ) {
            var u = function () {};
            (u.prototype = i.prototype), (n.prototype = new u()), (u.prototype = null);
          }
          return n;
        };
      },
      58612: function (e, t, s) {
        "use strict";
        var i = s(17648);
        e.exports = Function.prototype.bind || i;
      },
      40210: function (e, t, s) {
        "use strict";
        var i,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          r = function (e) {
            try {
              return a('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
          },
          p = Object.getOwnPropertyDescriptor;
        if (p)
          try {
            p({}, "");
          } catch (e) {
            p = null;
          }
        var u = function () {
            throw new o();
          },
          y = p
            ? (function () {
                try {
                  return u;
                } catch (e) {
                  try {
                    return p(arguments, "callee").get;
                  } catch (e) {
                    return u;
                  }
                }
              })()
            : u,
          c = s(41405)(),
          d = s(28185)(),
          l =
            Object.getPrototypeOf ||
            (d
              ? function (e) {
                  return e.__proto__;
                }
              : null),
          T = {},
          E = "undefined" != typeof Uint8Array && l ? l(Uint8Array) : i,
          f = {
            "%AggregateError%": "undefined" == typeof AggregateError ? i : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? i : ArrayBuffer,
            "%ArrayIteratorPrototype%": c && l ? l([][Symbol.iterator]()) : i,
            "%AsyncFromSyncIteratorPrototype%": i,
            "%AsyncFunction%": T,
            "%AsyncGenerator%": T,
            "%AsyncGeneratorFunction%": T,
            "%AsyncIteratorPrototype%": T,
            "%Atomics%": "undefined" == typeof Atomics ? i : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? i : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? i : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? i : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? i : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? i : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? i : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? i : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": T,
            "%Int8Array%": "undefined" == typeof Int8Array ? i : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? i : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? i : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": c && l ? l(l([][Symbol.iterator]())) : i,
            "%JSON%": "object" == typeof JSON ? JSON : i,
            "%Map%": "undefined" == typeof Map ? i : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && c && l ? l(new Map()[Symbol.iterator]()) : i,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? i : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? i : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? i : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? i : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && c && l ? l(new Set()[Symbol.iterator]()) : i,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": c && l ? l(""[Symbol.iterator]()) : i,
            "%Symbol%": c ? Symbol : i,
            "%SyntaxError%": n,
            "%ThrowTypeError%": y,
            "%TypedArray%": E,
            "%TypeError%": o,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? i : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? i : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? i : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? i : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? i : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? i : WeakSet
          };
        if (l)
          try {
            null.error;
          } catch (e) {
            var S = l(l(e));
            f["%Error.prototype%"] = S;
          }
        var h = function e(t) {
            var s;
            if ("%AsyncFunction%" === t) s = r("async function () {}");
            else if ("%GeneratorFunction%" === t) s = r("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) s = r("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
              var i = e("%AsyncGeneratorFunction%");
              i && (s = i.prototype);
            } else if ("%AsyncIteratorPrototype%" === t) {
              var n = e("%AsyncGenerator%");
              n && l && (s = l(n.prototype));
            }
            return (f[t] = s), s;
          },
          I = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
          },
          N = s(58612),
          g = s(17642),
          R = N.call(Function.call, Array.prototype.concat),
          x = N.call(Function.apply, Array.prototype.splice),
          m = N.call(Function.call, String.prototype.replace),
          A = N.call(Function.call, String.prototype.slice),
          C = N.call(Function.call, RegExp.prototype.exec),
          O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          M = /\\(\\)?/g,
          v = function (e, t) {
            var s,
              i = e;
            if ((g(I, i) && (i = "%" + (s = I[i])[0] + "%"), g(f, i))) {
              var a = f[i];
              if ((a === T && (a = h(i)), void 0 === a && !t))
                throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
              return { alias: s, name: i, value: a };
            }
            throw new n("intrinsic " + e + " does not exist!");
          };
        e.exports = function (e, t) {
          if ("string" != typeof e || 0 === e.length) throw new o("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof t) throw new o('"allowMissing" argument must be a boolean');
          if (null === C(/^%?[^%]*%?$/, e))
            throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var s = (function (e) {
              var t = A(e, 0, 1),
                s = A(e, -1);
              if ("%" === t && "%" !== s) throw new n("invalid intrinsic syntax, expected closing `%`");
              if ("%" === s && "%" !== t) throw new n("invalid intrinsic syntax, expected opening `%`");
              var i = [];
              return (
                m(e, O, function (e, t, s, n) {
                  i[i.length] = s ? m(n, M, "$1") : t || e;
                }),
                i
              );
            })(e),
            i = s.length > 0 ? s[0] : "",
            a = v("%" + i + "%", t),
            r = a.name,
            u = a.value,
            y = !1,
            c = a.alias;
          c && ((i = c[0]), x(s, R([0, 1], c)));
          for (var d = 1, l = !0; d < s.length; d += 1) {
            var T = s[d],
              E = A(T, 0, 1),
              S = A(T, -1);
            if (('"' === E || "'" === E || "`" === E || '"' === S || "'" === S || "`" === S) && E !== S)
              throw new n("property names with quotes must have matching quotes");
            if ((("constructor" !== T && l) || (y = !0), g(f, (r = "%" + (i += "." + T) + "%")))) u = f[r];
            else if (null != u) {
              if (!(T in u)) {
                if (!t) throw new o("base intrinsic for " + e + " exists, but the property is not available.");
                return;
              }
              if (p && d + 1 >= s.length) {
                var h = p(u, T);
                u = (l = !!h) && "get" in h && !("originalValue" in h.get) ? h.get : u[T];
              } else (l = g(u, T)), (u = u[T]);
              l && !y && (f[r] = u);
            }
          }
          return u;
        };
      },
      28185: function (e) {
        "use strict";
        var t = { foo: {} },
          s = Object;
        e.exports = function () {
          return { __proto__: t }.foo === t.foo && !({ __proto__: null } instanceof s);
        };
      },
      41405: function (e, t, s) {
        "use strict";
        var i = "undefined" != typeof Symbol && Symbol,
          n = s(55419);
        e.exports = function () {
          return (
            "function" == typeof i && "function" == typeof Symbol && "symbol" == typeof i("foo") && "symbol" == typeof Symbol("bar") && n()
          );
        };
      },
      55419: function (e) {
        "use strict";
        e.exports = function () {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var e = {},
            t = Symbol("test"),
            s = Object(t);
          if ("string" == typeof t) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(s)) return !1;
          for (t in ((e[t] = 42), e)) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
          var i = Object.getOwnPropertySymbols(e);
          if (1 !== i.length || i[0] !== t) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== n.value || !0 !== n.enumerable) return !1;
          }
          return !0;
        };
      },
      17642: function (e, t, s) {
        "use strict";
        var i = s(58612);
        e.exports = i.call(Function.call, Object.prototype.hasOwnProperty);
      },
      88495: function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function () {
          "use strict";
          var ERROR = "input is invalid type",
            WINDOW = "object" == typeof window,
            root = WINDOW ? window : {};
          root.JS_MD5_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && "object" == typeof self,
            NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
          NODE_JS ? (root = __webpack_require__.g) : WEB_WORKER && (root = self);
          var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports,
            AMD = __webpack_require__.amdO,
            ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [128, 32768, 8388608, -2147483648],
            SHIFT = [0, 8, 16, 24],
            OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
            BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
            blocks = [],
            buffer8;
          if (ARRAY_BUFFER) {
            var buffer = new ArrayBuffer(68);
            (buffer8 = new Uint8Array(buffer)), (blocks = new Uint32Array(buffer));
          }
          (!root.JS_MD5_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
            !ARRAY_BUFFER ||
              (!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (e) {
                return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
              });
          var createOutputMethod = function (e) {
              return function (t) {
                return new Md5(!0).update(t)[e]();
              };
            },
            createMethod = function () {
              var e = createOutputMethod("hex");
              NODE_JS && (e = nodeWrap(e)),
                (e.create = function () {
                  return new Md5();
                }),
                (e.update = function (t) {
                  return e.create().update(t);
                });
              for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                var s = OUTPUT_TYPES[t];
                e[s] = createOutputMethod(s);
              }
              return e;
            },
            nodeWrap = function (method) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                nodeMethod = function (e) {
                  if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
                  if (null == e) throw ERROR;
                  return (
                    e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                    Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer
                      ? crypto.createHash("md5").update(new Buffer(e)).digest("hex")
                      : method(e)
                  );
                };
              return nodeMethod;
            };
          function Md5(e) {
            if (e)
              (blocks[0] =
                blocks[16] =
                blocks[1] =
                blocks[2] =
                blocks[3] =
                blocks[4] =
                blocks[5] =
                blocks[6] =
                blocks[7] =
                blocks[8] =
                blocks[9] =
                blocks[10] =
                blocks[11] =
                blocks[12] =
                blocks[13] =
                blocks[14] =
                blocks[15] =
                  0),
                (this.blocks = blocks),
                (this.buffer8 = buffer8);
            else if (ARRAY_BUFFER) {
              var t = new ArrayBuffer(68);
              (this.buffer8 = new Uint8Array(t)), (this.blocks = new Uint32Array(t));
            } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            (this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0), (this.finalized = this.hashed = !1), (this.first = !0);
          }
          (Md5.prototype.update = function (e) {
            if (!this.finalized) {
              var t,
                s = typeof e;
              if ("string" !== s) {
                if ("object" !== s) throw ERROR;
                if (null === e) throw ERROR;
                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || (ARRAY_BUFFER && ArrayBuffer.isView(e)))) throw ERROR;
                t = !0;
              }
              for (var i, n, a = 0, o = e.length, r = this.blocks, p = this.buffer8; a < o; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (r[0] = r[16]),
                    (r[16] =
                      r[1] =
                      r[2] =
                      r[3] =
                      r[4] =
                      r[5] =
                      r[6] =
                      r[7] =
                      r[8] =
                      r[9] =
                      r[10] =
                      r[11] =
                      r[12] =
                      r[13] =
                      r[14] =
                      r[15] =
                        0)),
                  t)
                )
                  if (ARRAY_BUFFER) for (n = this.start; a < o && n < 64; ++a) p[n++] = e[a];
                  else for (n = this.start; a < o && n < 64; ++a) r[n >> 2] |= e[a] << SHIFT[3 & n++];
                else if (ARRAY_BUFFER)
                  for (n = this.start; a < o && n < 64; ++a)
                    (i = e.charCodeAt(a)) < 128
                      ? (p[n++] = i)
                      : i < 2048
                      ? ((p[n++] = 192 | (i >> 6)), (p[n++] = 128 | (63 & i)))
                      : i < 55296 || i >= 57344
                      ? ((p[n++] = 224 | (i >> 12)), (p[n++] = 128 | ((i >> 6) & 63)), (p[n++] = 128 | (63 & i)))
                      : ((i = 65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(++a)))),
                        (p[n++] = 240 | (i >> 18)),
                        (p[n++] = 128 | ((i >> 12) & 63)),
                        (p[n++] = 128 | ((i >> 6) & 63)),
                        (p[n++] = 128 | (63 & i)));
                else
                  for (n = this.start; a < o && n < 64; ++a)
                    (i = e.charCodeAt(a)) < 128
                      ? (r[n >> 2] |= i << SHIFT[3 & n++])
                      : i < 2048
                      ? ((r[n >> 2] |= (192 | (i >> 6)) << SHIFT[3 & n++]), (r[n >> 2] |= (128 | (63 & i)) << SHIFT[3 & n++]))
                      : i < 55296 || i >= 57344
                      ? ((r[n >> 2] |= (224 | (i >> 12)) << SHIFT[3 & n++]),
                        (r[n >> 2] |= (128 | ((i >> 6) & 63)) << SHIFT[3 & n++]),
                        (r[n >> 2] |= (128 | (63 & i)) << SHIFT[3 & n++]))
                      : ((i = 65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(++a)))),
                        (r[n >> 2] |= (240 | (i >> 18)) << SHIFT[3 & n++]),
                        (r[n >> 2] |= (128 | ((i >> 12) & 63)) << SHIFT[3 & n++]),
                        (r[n >> 2] |= (128 | ((i >> 6) & 63)) << SHIFT[3 & n++]),
                        (r[n >> 2] |= (128 | (63 & i)) << SHIFT[3 & n++]));
                (this.lastByteIndex = n),
                  (this.bytes += n - this.start),
                  n >= 64 ? ((this.start = n - 64), this.hash(), (this.hashed = !0)) : (this.start = n);
              }
              return this;
            }
          }),
            (Md5.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                  t = this.lastByteIndex;
                (e[t >> 2] |= EXTRA[3 & t]),
                  t >= 56 &&
                    (this.hashed || this.hash(),
                    (e[0] = e[16]),
                    (e[16] =
                      e[1] =
                      e[2] =
                      e[3] =
                      e[4] =
                      e[5] =
                      e[6] =
                      e[7] =
                      e[8] =
                      e[9] =
                      e[10] =
                      e[11] =
                      e[12] =
                      e[13] =
                      e[14] =
                      e[15] =
                        0)),
                  (e[14] = this.bytes << 3),
                  this.hash();
              }
            }),
            (Md5.prototype.hash = function () {
              var e,
                t,
                s,
                i,
                n,
                a,
                o = this.blocks;
              this.first
                ? (t =
                    ((((t =
                      ((e = ((((e = o[0] - 680876937) << 7) | (e >>> 25)) - 271733879) << 0) ^
                        ((s =
                          ((((s =
                            (-271733879 ^
                              ((i = ((((i = (-1732584194 ^ (2004318071 & e)) + o[1] - 117830708) << 12) | (i >>> 20)) + e) << 0) &
                                (-271733879 ^ e))) +
                            o[2] -
                            1126478375) <<
                            17) |
                            (s >>> 15)) +
                            i) <<
                          0) &
                          (i ^ e))) +
                      o[3] -
                      1316259209) <<
                      22) |
                      (t >>> 10)) +
                      s) <<
                    0)
                : ((e = this.h0),
                  (t = this.h1),
                  (s = this.h2),
                  (t =
                    ((((t +=
                      ((e = ((((e += ((i = this.h3) ^ (t & (s ^ i))) + o[0] - 680876936) << 7) | (e >>> 25)) + t) << 0) ^
                        ((s =
                          ((((s +=
                            (t ^ ((i = ((((i += (s ^ (e & (t ^ s))) + o[1] - 389564586) << 12) | (i >>> 20)) + e) << 0) & (e ^ t))) +
                            o[2] +
                            606105819) <<
                            17) |
                            (s >>> 15)) +
                            i) <<
                          0) &
                          (i ^ e))) +
                      o[3] -
                      1044525330) <<
                      22) |
                      (t >>> 10)) +
                      s) <<
                    0)),
                (t =
                  ((((t +=
                    ((e = ((((e += (i ^ (t & (s ^ i))) + o[4] - 176418897) << 7) | (e >>> 25)) + t) << 0) ^
                      ((s =
                        ((((s +=
                          (t ^ ((i = ((((i += (s ^ (e & (t ^ s))) + o[5] + 1200080426) << 12) | (i >>> 20)) + e) << 0) & (e ^ t))) +
                          o[6] -
                          1473231341) <<
                          17) |
                          (s >>> 15)) +
                          i) <<
                        0) &
                        (i ^ e))) +
                    o[7] -
                    45705983) <<
                    22) |
                    (t >>> 10)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((e = ((((e += (i ^ (t & (s ^ i))) + o[8] + 1770035416) << 7) | (e >>> 25)) + t) << 0) ^
                      ((s =
                        ((((s +=
                          (t ^ ((i = ((((i += (s ^ (e & (t ^ s))) + o[9] - 1958414417) << 12) | (i >>> 20)) + e) << 0) & (e ^ t))) +
                          o[10] -
                          42063) <<
                          17) |
                          (s >>> 15)) +
                          i) <<
                        0) &
                        (i ^ e))) +
                    o[11] -
                    1990404162) <<
                    22) |
                    (t >>> 10)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((e = ((((e += (i ^ (t & (s ^ i))) + o[12] + 1804603682) << 7) | (e >>> 25)) + t) << 0) ^
                      ((s =
                        ((((s +=
                          (t ^ ((i = ((((i += (s ^ (e & (t ^ s))) + o[13] - 40341101) << 12) | (i >>> 20)) + e) << 0) & (e ^ t))) +
                          o[14] -
                          1502002290) <<
                          17) |
                          (s >>> 15)) +
                          i) <<
                        0) &
                        (i ^ e))) +
                    o[15] +
                    1236535329) <<
                    22) |
                    (t >>> 10)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ (s & ((e = ((((e += (s ^ (i & (t ^ s))) + o[1] - 165796510) << 5) | (e >>> 27)) + t) << 0) ^ t))) +
                        o[6] -
                        1069501632) <<
                        9) |
                        (i >>> 23)) +
                        e) <<
                      0) ^
                      (e & ((s = ((((s += (e ^ (t & (i ^ e))) + o[11] + 643717713) << 14) | (s >>> 18)) + i) << 0) ^ i))) +
                    o[0] -
                    373897302) <<
                    20) |
                    (t >>> 12)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ (s & ((e = ((((e += (s ^ (i & (t ^ s))) + o[5] - 701558691) << 5) | (e >>> 27)) + t) << 0) ^ t))) +
                        o[10] +
                        38016083) <<
                        9) |
                        (i >>> 23)) +
                        e) <<
                      0) ^
                      (e & ((s = ((((s += (e ^ (t & (i ^ e))) + o[15] - 660478335) << 14) | (s >>> 18)) + i) << 0) ^ i))) +
                    o[4] -
                    405537848) <<
                    20) |
                    (t >>> 12)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ (s & ((e = ((((e += (s ^ (i & (t ^ s))) + o[9] + 568446438) << 5) | (e >>> 27)) + t) << 0) ^ t))) +
                        o[14] -
                        1019803690) <<
                        9) |
                        (i >>> 23)) +
                        e) <<
                      0) ^
                      (e & ((s = ((((s += (e ^ (t & (i ^ e))) + o[3] - 187363961) << 14) | (s >>> 18)) + i) << 0) ^ i))) +
                    o[8] +
                    1163531501) <<
                    20) |
                    (t >>> 12)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ (s & ((e = ((((e += (s ^ (i & (t ^ s))) + o[13] - 1444681467) << 5) | (e >>> 27)) + t) << 0) ^ t))) +
                        o[2] -
                        51403784) <<
                        9) |
                        (i >>> 23)) +
                        e) <<
                      0) ^
                      (e & ((s = ((((s += (e ^ (t & (i ^ e))) + o[7] + 1735328473) << 14) | (s >>> 18)) + i) << 0) ^ i))) +
                    o[12] -
                    1926607734) <<
                    20) |
                    (t >>> 12)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((a =
                      (i =
                        ((((i +=
                          ((n = t ^ s) ^ (e = ((((e += (n ^ i) + o[5] - 378558) << 4) | (e >>> 28)) + t) << 0)) + o[8] - 2022574463) <<
                          11) |
                          (i >>> 21)) +
                          e) <<
                        0) ^ e) ^
                      (s = ((((s += (a ^ t) + o[11] + 1839030562) << 16) | (s >>> 16)) + i) << 0)) +
                    o[14] -
                    35309556) <<
                    23) |
                    (t >>> 9)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((a =
                      (i =
                        ((((i +=
                          ((n = t ^ s) ^ (e = ((((e += (n ^ i) + o[1] - 1530992060) << 4) | (e >>> 28)) + t) << 0)) + o[4] + 1272893353) <<
                          11) |
                          (i >>> 21)) +
                          e) <<
                        0) ^ e) ^
                      (s = ((((s += (a ^ t) + o[7] - 155497632) << 16) | (s >>> 16)) + i) << 0)) +
                    o[10] -
                    1094730640) <<
                    23) |
                    (t >>> 9)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((a =
                      (i =
                        ((((i +=
                          ((n = t ^ s) ^ (e = ((((e += (n ^ i) + o[13] + 681279174) << 4) | (e >>> 28)) + t) << 0)) + o[0] - 358537222) <<
                          11) |
                          (i >>> 21)) +
                          e) <<
                        0) ^ e) ^
                      (s = ((((s += (a ^ t) + o[3] - 722521979) << 16) | (s >>> 16)) + i) << 0)) +
                    o[6] +
                    76029189) <<
                    23) |
                    (t >>> 9)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((a =
                      (i =
                        ((((i +=
                          ((n = t ^ s) ^ (e = ((((e += (n ^ i) + o[9] - 640364487) << 4) | (e >>> 28)) + t) << 0)) + o[12] - 421815835) <<
                          11) |
                          (i >>> 21)) +
                          e) <<
                        0) ^ e) ^
                      (s = ((((s += (a ^ t) + o[15] + 530742520) << 16) | (s >>> 16)) + i) << 0)) +
                    o[2] -
                    995338651) <<
                    23) |
                    (t >>> 9)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ ((e = ((((e += (s ^ (t | ~i)) + o[0] - 198630844) << 6) | (e >>> 26)) + t) << 0) | ~s)) + o[7] + 1126891415) <<
                        10) |
                        (i >>> 22)) +
                        e) <<
                      0) ^
                      ((s = ((((s += (e ^ (i | ~t)) + o[14] - 1416354905) << 15) | (s >>> 17)) + i) << 0) | ~e)) +
                    o[5] -
                    57434055) <<
                    21) |
                    (t >>> 11)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ ((e = ((((e += (s ^ (t | ~i)) + o[12] + 1700485571) << 6) | (e >>> 26)) + t) << 0) | ~s)) +
                        o[3] -
                        1894986606) <<
                        10) |
                        (i >>> 22)) +
                        e) <<
                      0) ^
                      ((s = ((((s += (e ^ (i | ~t)) + o[10] - 1051523) << 15) | (s >>> 17)) + i) << 0) | ~e)) +
                    o[1] -
                    2054922799) <<
                    21) |
                    (t >>> 11)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ ((e = ((((e += (s ^ (t | ~i)) + o[8] + 1873313359) << 6) | (e >>> 26)) + t) << 0) | ~s)) + o[15] - 30611744) <<
                        10) |
                        (i >>> 22)) +
                        e) <<
                      0) ^
                      ((s = ((((s += (e ^ (i | ~t)) + o[6] - 1560198380) << 15) | (s >>> 17)) + i) << 0) | ~e)) +
                    o[13] +
                    1309151649) <<
                    21) |
                    (t >>> 11)) +
                    s) <<
                  0),
                (t =
                  ((((t +=
                    ((i =
                      ((((i +=
                        (t ^ ((e = ((((e += (s ^ (t | ~i)) + o[4] - 145523070) << 6) | (e >>> 26)) + t) << 0) | ~s)) +
                        o[11] -
                        1120210379) <<
                        10) |
                        (i >>> 22)) +
                        e) <<
                      0) ^
                      ((s = ((((s += (e ^ (i | ~t)) + o[2] + 718787259) << 15) | (s >>> 17)) + i) << 0) | ~e)) +
                    o[9] -
                    343485551) <<
                    21) |
                    (t >>> 11)) +
                    s) <<
                  0),
                this.first
                  ? ((this.h0 = (e + 1732584193) << 0),
                    (this.h1 = (t - 271733879) << 0),
                    (this.h2 = (s - 1732584194) << 0),
                    (this.h3 = (i + 271733878) << 0),
                    (this.first = !1))
                  : ((this.h0 = (this.h0 + e) << 0),
                    (this.h1 = (this.h1 + t) << 0),
                    (this.h2 = (this.h2 + s) << 0),
                    (this.h3 = (this.h3 + i) << 0));
            }),
            (Md5.prototype.hex = function () {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                s = this.h2,
                i = this.h3;
              return (
                HEX_CHARS[(e >> 4) & 15] +
                HEX_CHARS[15 & e] +
                HEX_CHARS[(e >> 12) & 15] +
                HEX_CHARS[(e >> 8) & 15] +
                HEX_CHARS[(e >> 20) & 15] +
                HEX_CHARS[(e >> 16) & 15] +
                HEX_CHARS[(e >> 28) & 15] +
                HEX_CHARS[(e >> 24) & 15] +
                HEX_CHARS[(t >> 4) & 15] +
                HEX_CHARS[15 & t] +
                HEX_CHARS[(t >> 12) & 15] +
                HEX_CHARS[(t >> 8) & 15] +
                HEX_CHARS[(t >> 20) & 15] +
                HEX_CHARS[(t >> 16) & 15] +
                HEX_CHARS[(t >> 28) & 15] +
                HEX_CHARS[(t >> 24) & 15] +
                HEX_CHARS[(s >> 4) & 15] +
                HEX_CHARS[15 & s] +
                HEX_CHARS[(s >> 12) & 15] +
                HEX_CHARS[(s >> 8) & 15] +
                HEX_CHARS[(s >> 20) & 15] +
                HEX_CHARS[(s >> 16) & 15] +
                HEX_CHARS[(s >> 28) & 15] +
                HEX_CHARS[(s >> 24) & 15] +
                HEX_CHARS[(i >> 4) & 15] +
                HEX_CHARS[15 & i] +
                HEX_CHARS[(i >> 12) & 15] +
                HEX_CHARS[(i >> 8) & 15] +
                HEX_CHARS[(i >> 20) & 15] +
                HEX_CHARS[(i >> 16) & 15] +
                HEX_CHARS[(i >> 28) & 15] +
                HEX_CHARS[(i >> 24) & 15]
              );
            }),
            (Md5.prototype.toString = Md5.prototype.hex),
            (Md5.prototype.digest = function () {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                s = this.h2,
                i = this.h3;
              return [
                255 & e,
                (e >> 8) & 255,
                (e >> 16) & 255,
                (e >> 24) & 255,
                255 & t,
                (t >> 8) & 255,
                (t >> 16) & 255,
                (t >> 24) & 255,
                255 & s,
                (s >> 8) & 255,
                (s >> 16) & 255,
                (s >> 24) & 255,
                255 & i,
                (i >> 8) & 255,
                (i >> 16) & 255,
                (i >> 24) & 255
              ];
            }),
            (Md5.prototype.array = Md5.prototype.digest),
            (Md5.prototype.arrayBuffer = function () {
              this.finalize();
              var e = new ArrayBuffer(16),
                t = new Uint32Array(e);
              return (t[0] = this.h0), (t[1] = this.h1), (t[2] = this.h2), (t[3] = this.h3), e;
            }),
            (Md5.prototype.buffer = Md5.prototype.arrayBuffer),
            (Md5.prototype.base64 = function () {
              for (var e, t, s, i = "", n = this.array(), a = 0; a < 15; )
                (e = n[a++]),
                  (t = n[a++]),
                  (s = n[a++]),
                  (i +=
                    BASE64_ENCODE_CHAR[e >>> 2] +
                    BASE64_ENCODE_CHAR[63 & ((e << 4) | (t >>> 4))] +
                    BASE64_ENCODE_CHAR[63 & ((t << 2) | (s >>> 6))] +
                    BASE64_ENCODE_CHAR[63 & s]);
              return (e = n[a]), i + (BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[(e << 4) & 63] + "==");
            });
          var exports = createMethod();
          COMMON_JS
            ? (module.exports = exports)
            : ((root.md5 = exports),
              AMD &&
                ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return exports;
                }.call(exports, __webpack_require__, exports, module)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        })();
      },
      70631: function (e, t, s) {
        var i = "function" == typeof Map && Map.prototype,
          n = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
          a = i && n && "function" == typeof n.get ? n.get : null,
          o = i && Map.prototype.forEach,
          r = "function" == typeof Set && Set.prototype,
          p = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
          u = r && p && "function" == typeof p.get ? p.get : null,
          y = r && Set.prototype.forEach,
          c = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
          d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
          l = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
          T = Boolean.prototype.valueOf,
          E = Object.prototype.toString,
          f = Function.prototype.toString,
          S = String.prototype.match,
          h = String.prototype.slice,
          I = String.prototype.replace,
          N = String.prototype.toUpperCase,
          g = String.prototype.toLowerCase,
          R = RegExp.prototype.test,
          x = Array.prototype.concat,
          m = Array.prototype.join,
          A = Array.prototype.slice,
          C = Math.floor,
          O = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          M = Object.getOwnPropertySymbols,
          v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
          k = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
          D = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
          P = Object.prototype.propertyIsEnumerable,
          U =
            ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (e) {
                  return e.__proto__;
                }
              : null);
        function b(e, t) {
          if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || R.call(/e/, t)) return t;
          var s = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof e) {
            var i = e < 0 ? -C(-e) : C(e);
            if (i !== e) {
              var n = String(i),
                a = h.call(t, n.length + 1);
              return I.call(n, s, "$&_") + "." + I.call(I.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
            }
          }
          return I.call(t, s, "$&_");
        }
        var _ = s(24654),
          L = _.custom,
          w = X(L) ? L : null;
        function G(e, t, s) {
          var i = "double" === (s.quoteStyle || t) ? '"' : "'";
          return i + e + i;
        }
        function B(e) {
          return I.call(String(e), /"/g, "&quot;");
        }
        function F(e) {
          return !("[object Array]" !== j(e) || (D && "object" == typeof e && D in e));
        }
        function q(e) {
          return !("[object RegExp]" !== j(e) || (D && "object" == typeof e && D in e));
        }
        function X(e) {
          if (k) return e && "object" == typeof e && e instanceof Symbol;
          if ("symbol" == typeof e) return !0;
          if (!e || "object" != typeof e || !v) return !1;
          try {
            return v.call(e), !0;
          } catch (e) {}
          return !1;
        }
        e.exports = function e(t, s, i, n) {
          var r = s || {};
          if (W(r, "quoteStyle") && "single" !== r.quoteStyle && "double" !== r.quoteStyle)
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          if (
            W(r, "maxStringLength") &&
            ("number" == typeof r.maxStringLength ? r.maxStringLength < 0 && r.maxStringLength !== 1 / 0 : null !== r.maxStringLength)
          )
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
          var p = !W(r, "customInspect") || r.customInspect;
          if ("boolean" != typeof p && "symbol" !== p)
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
          if (W(r, "indent") && null !== r.indent && "\t" !== r.indent && !(parseInt(r.indent, 10) === r.indent && r.indent > 0))
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
          if (W(r, "numericSeparator") && "boolean" != typeof r.numericSeparator)
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
          var E = r.numericSeparator;
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ("boolean" == typeof t) return t ? "true" : "false";
          if ("string" == typeof t) return z(t, r);
          if ("number" == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
            var N = String(t);
            return E ? b(t, N) : N;
          }
          if ("bigint" == typeof t) {
            var R = String(t) + "n";
            return E ? b(t, R) : R;
          }
          var C = void 0 === r.depth ? 5 : r.depth;
          if ((void 0 === i && (i = 0), i >= C && C > 0 && "object" == typeof t)) return F(t) ? "[Array]" : "[Object]";
          var M,
            L = (function (e, t) {
              var s;
              if ("\t" === e.indent) s = "\t";
              else {
                if (!("number" == typeof e.indent && e.indent > 0)) return null;
                s = m.call(Array(e.indent + 1), " ");
              }
              return { base: s, prev: m.call(Array(t + 1), s) };
            })(r, i);
          if (void 0 === n) n = [];
          else if (H(n, t) >= 0) return "[Circular]";
          function V(t, s, a) {
            if ((s && (n = A.call(n)).push(s), a)) {
              var o = { depth: r.depth };
              return W(r, "quoteStyle") && (o.quoteStyle = r.quoteStyle), e(t, o, i + 1, n);
            }
            return e(t, r, i + 1, n);
          }
          if ("function" == typeof t && !q(t)) {
            var Y = (function (e) {
                if (e.name) return e.name;
                var t = S.call(f.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
              })(t),
              ee = Q(t, V);
            return "[Function" + (Y ? ": " + Y : " (anonymous)") + "]" + (ee.length > 0 ? " { " + m.call(ee, ", ") + " }" : "");
          }
          if (X(t)) {
            var te = k ? I.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : v.call(t);
            return "object" != typeof t || k ? te : K(te);
          }
          if (
            (M = t) &&
            "object" == typeof M &&
            (("undefined" != typeof HTMLElement && M instanceof HTMLElement) ||
              ("string" == typeof M.nodeName && "function" == typeof M.getAttribute))
          ) {
            for (var se = "<" + g.call(String(t.nodeName)), ie = t.attributes || [], ne = 0; ne < ie.length; ne++)
              se += " " + ie[ne].name + "=" + G(B(ie[ne].value), "double", r);
            return (se += ">"), t.childNodes && t.childNodes.length && (se += "..."), se + "</" + g.call(String(t.nodeName)) + ">";
          }
          if (F(t)) {
            if (0 === t.length) return "[]";
            var ae = Q(t, V);
            return L &&
              !(function (e) {
                for (var t = 0; t < e.length; t++) if (H(e[t], "\n") >= 0) return !1;
                return !0;
              })(ae)
              ? "[" + J(ae, L) + "]"
              : "[ " + m.call(ae, ", ") + " ]";
          }
          if (
            (function (e) {
              return !("[object Error]" !== j(e) || (D && "object" == typeof e && D in e));
            })(t)
          ) {
            var oe = Q(t, V);
            return "cause" in Error.prototype || !("cause" in t) || P.call(t, "cause")
              ? 0 === oe.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + m.call(oe, ", ") + " }"
              : "{ [" + String(t) + "] " + m.call(x.call("[cause]: " + V(t.cause), oe), ", ") + " }";
          }
          if ("object" == typeof t && p) {
            if (w && "function" == typeof t[w] && _) return _(t, { depth: C - i });
            if ("symbol" !== p && "function" == typeof t.inspect) return t.inspect();
          }
          if (
            (function (e) {
              if (!a || !e || "object" != typeof e) return !1;
              try {
                a.call(e);
                try {
                  u.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Map;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var re = [];
            return (
              o &&
                o.call(t, function (e, s) {
                  re.push(V(s, t, !0) + " => " + V(e, t));
                }),
              Z("Map", a.call(t), re, L)
            );
          }
          if (
            (function (e) {
              if (!u || !e || "object" != typeof e) return !1;
              try {
                u.call(e);
                try {
                  a.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Set;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var pe = [];
            return (
              y &&
                y.call(t, function (e) {
                  pe.push(V(e, t));
                }),
              Z("Set", u.call(t), pe, L)
            );
          }
          if (
            (function (e) {
              if (!c || !e || "object" != typeof e) return !1;
              try {
                c.call(e, c);
                try {
                  d.call(e, d);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakMap;
              } catch (e) {}
              return !1;
            })(t)
          )
            return $("WeakMap");
          if (
            (function (e) {
              if (!d || !e || "object" != typeof e) return !1;
              try {
                d.call(e, d);
                try {
                  c.call(e, c);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakSet;
              } catch (e) {}
              return !1;
            })(t)
          )
            return $("WeakSet");
          if (
            (function (e) {
              if (!l || !e || "object" != typeof e) return !1;
              try {
                return l.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return $("WeakRef");
          if (
            (function (e) {
              return !("[object Number]" !== j(e) || (D && "object" == typeof e && D in e));
            })(t)
          )
            return K(V(Number(t)));
          if (
            (function (e) {
              if (!e || "object" != typeof e || !O) return !1;
              try {
                return O.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return K(V(O.call(t)));
          if (
            (function (e) {
              return !("[object Boolean]" !== j(e) || (D && "object" == typeof e && D in e));
            })(t)
          )
            return K(T.call(t));
          if (
            (function (e) {
              return !("[object String]" !== j(e) || (D && "object" == typeof e && D in e));
            })(t)
          )
            return K(V(String(t)));
          if (
            !(function (e) {
              return !("[object Date]" !== j(e) || (D && "object" == typeof e && D in e));
            })(t) &&
            !q(t)
          ) {
            var ue = Q(t, V),
              ye = U ? U(t) === Object.prototype : t instanceof Object || t.constructor === Object,
              ce = t instanceof Object ? "" : "null prototype",
              de = !ye && D && Object(t) === t && D in t ? h.call(j(t), 8, -1) : ce ? "Object" : "",
              le =
                (ye || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") +
                (de || ce ? "[" + m.call(x.call([], de || [], ce || []), ": ") + "] " : "");
            return 0 === ue.length ? le + "{}" : L ? le + "{" + J(ue, L) + "}" : le + "{ " + m.call(ue, ", ") + " }";
          }
          return String(t);
        };
        var V =
          Object.prototype.hasOwnProperty ||
          function (e) {
            return e in this;
          };
        function W(e, t) {
          return V.call(e, t);
        }
        function j(e) {
          return E.call(e);
        }
        function H(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var s = 0, i = e.length; s < i; s++) if (e[s] === t) return s;
          return -1;
        }
        function z(e, t) {
          if (e.length > t.maxStringLength) {
            var s = e.length - t.maxStringLength,
              i = "... " + s + " more character" + (s > 1 ? "s" : "");
            return z(h.call(e, 0, t.maxStringLength), t) + i;
          }
          return G(I.call(I.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y), "single", t);
        }
        function Y(e) {
          var t = e.charCodeAt(0),
            s = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
          return s ? "\\" + s : "\\x" + (t < 16 ? "0" : "") + N.call(t.toString(16));
        }
        function K(e) {
          return "Object(" + e + ")";
        }
        function $(e) {
          return e + " { ? }";
        }
        function Z(e, t, s, i) {
          return e + " (" + t + ") {" + (i ? J(s, i) : m.call(s, ", ")) + "}";
        }
        function J(e, t) {
          if (0 === e.length) return "";
          var s = "\n" + t.prev + t.base;
          return s + m.call(e, "," + s) + "\n" + t.prev;
        }
        function Q(e, t) {
          var s = F(e),
            i = [];
          if (s) {
            i.length = e.length;
            for (var n = 0; n < e.length; n++) i[n] = W(e, n) ? t(e[n], e) : "";
          }
          var a,
            o = "function" == typeof M ? M(e) : [];
          if (k) {
            a = {};
            for (var r = 0; r < o.length; r++) a["$" + o[r]] = o[r];
          }
          for (var p in e)
            W(e, p) &&
              ((s && String(Number(p)) === p && p < e.length) ||
                (k && a["$" + p] instanceof Symbol) ||
                (R.call(/[^\w$]/, p) ? i.push(t(p, e) + ": " + t(e[p], e)) : i.push(p + ": " + t(e[p], e))));
          if ("function" == typeof M) for (var u = 0; u < o.length; u++) P.call(e, o[u]) && i.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
          return i;
        }
      },
      55798: function (e) {
        "use strict";
        var t = String.prototype.replace,
          s = /%20/g,
          i = "RFC3986";
        e.exports = {
          default: i,
          formatters: {
            RFC1738: function (e) {
              return t.call(e, s, "+");
            },
            RFC3986: function (e) {
              return String(e);
            }
          },
          RFC1738: "RFC1738",
          RFC3986: i
        };
      },
      80129: function (e, t, s) {
        "use strict";
        var i = s(58261),
          n = s(55235),
          a = s(55798);
        e.exports = { formats: a, parse: n, stringify: i };
      },
      55235: function (e, t, s) {
        "use strict";
        var i = s(12769),
          n = Object.prototype.hasOwnProperty,
          a = Array.isArray,
          o = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: i.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
          },
          r = function (e) {
            return e.replace(/&#(\d+);/g, function (e, t) {
              return String.fromCharCode(parseInt(t, 10));
            });
          },
          p = function (e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
          },
          u = function (e, t, s, i) {
            if (e) {
              var a = s.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                o = /(\[[^[\]]*])/g,
                r = s.depth > 0 && /(\[[^[\]]*])/.exec(a),
                u = r ? a.slice(0, r.index) : a,
                y = [];
              if (u) {
                if (!s.plainObjects && n.call(Object.prototype, u) && !s.allowPrototypes) return;
                y.push(u);
              }
              for (var c = 0; s.depth > 0 && null !== (r = o.exec(a)) && c < s.depth; ) {
                if (((c += 1), !s.plainObjects && n.call(Object.prototype, r[1].slice(1, -1)) && !s.allowPrototypes)) return;
                y.push(r[1]);
              }
              return (
                r && y.push("[" + a.slice(r.index) + "]"),
                (function (e, t, s, i) {
                  for (var n = i ? t : p(t, s), a = e.length - 1; a >= 0; --a) {
                    var o,
                      r = e[a];
                    if ("[]" === r && s.parseArrays) o = [].concat(n);
                    else {
                      o = s.plainObjects ? Object.create(null) : {};
                      var u = "[" === r.charAt(0) && "]" === r.charAt(r.length - 1) ? r.slice(1, -1) : r,
                        y = parseInt(u, 10);
                      s.parseArrays || "" !== u
                        ? !isNaN(y) && r !== u && String(y) === u && y >= 0 && s.parseArrays && y <= s.arrayLimit
                          ? ((o = [])[y] = n)
                          : "__proto__" !== u && (o[u] = n)
                        : (o = { 0: n });
                    }
                    n = o;
                  }
                  return n;
                })(y, t, s, i)
              );
            }
          };
        e.exports = function (e, t) {
          var s = (function (e) {
            if (!e) return o;
            if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
              throw new TypeError("Decoder has to be a function.");
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
              throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t = void 0 === e.charset ? o.charset : e.charset;
            return {
              allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
              allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
              allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
              arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
              charset: t,
              charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
              comma: "boolean" == typeof e.comma ? e.comma : o.comma,
              decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
              delimiter: "string" == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
              depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
              ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
              interpretNumericEntities:
                "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
              parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
              parseArrays: !1 !== e.parseArrays,
              plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
              strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
            };
          })(t);
          if ("" === e || null == e) return s.plainObjects ? Object.create(null) : {};
          for (
            var y =
                "string" == typeof e
                  ? (function (e, t) {
                      var s,
                        u = { __proto__: null },
                        y = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                        c = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        d = y.split(t.delimiter, c),
                        l = -1,
                        T = t.charset;
                      if (t.charsetSentinel)
                        for (s = 0; s < d.length; ++s)
                          0 === d[s].indexOf("utf8=") &&
                            ("utf8=%E2%9C%93" === d[s] ? (T = "utf-8") : "utf8=%26%2310003%3B" === d[s] && (T = "iso-8859-1"),
                            (l = s),
                            (s = d.length));
                      for (s = 0; s < d.length; ++s)
                        if (s !== l) {
                          var E,
                            f,
                            S = d[s],
                            h = S.indexOf("]="),
                            I = -1 === h ? S.indexOf("=") : h + 1;
                          -1 === I
                            ? ((E = t.decoder(S, o.decoder, T, "key")), (f = t.strictNullHandling ? null : ""))
                            : ((E = t.decoder(S.slice(0, I), o.decoder, T, "key")),
                              (f = i.maybeMap(p(S.slice(I + 1), t), function (e) {
                                return t.decoder(e, o.decoder, T, "value");
                              }))),
                            f && t.interpretNumericEntities && "iso-8859-1" === T && (f = r(f)),
                            S.indexOf("[]=") > -1 && (f = a(f) ? [f] : f),
                            n.call(u, E) ? (u[E] = i.combine(u[E], f)) : (u[E] = f);
                        }
                      return u;
                    })(e, s)
                  : e,
              c = s.plainObjects ? Object.create(null) : {},
              d = Object.keys(y),
              l = 0;
            l < d.length;
            ++l
          ) {
            var T = d[l],
              E = u(T, y[T], s, "string" == typeof e);
            c = i.merge(c, E, s);
          }
          return !0 === s.allowSparse ? c : i.compact(c);
        };
      },
      58261: function (e, t, s) {
        "use strict";
        var i = s(37478),
          n = s(12769),
          a = s(55798),
          o = Object.prototype.hasOwnProperty,
          r = {
            brackets: function (e) {
              return e + "[]";
            },
            comma: "comma",
            indices: function (e, t) {
              return e + "[" + t + "]";
            },
            repeat: function (e) {
              return e;
            }
          },
          p = Array.isArray,
          u = Array.prototype.push,
          y = function (e, t) {
            u.apply(e, p(t) ? t : [t]);
          },
          c = Date.prototype.toISOString,
          d = a.default,
          l = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: n.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: a.formatters[d],
            indices: !1,
            serializeDate: function (e) {
              return c.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1
          },
          T = {},
          E = function e(t, s, a, o, r, u, c, d, E, f, S, h, I, N, g, R) {
            for (var x, m = t, A = R, C = 0, O = !1; void 0 !== (A = A.get(T)) && !O; ) {
              var M = A.get(t);
              if (((C += 1), void 0 !== M)) {
                if (M === C) throw new RangeError("Cyclic object value");
                O = !0;
              }
              void 0 === A.get(T) && (C = 0);
            }
            if (
              ("function" == typeof d
                ? (m = d(s, m))
                : m instanceof Date
                ? (m = S(m))
                : "comma" === a &&
                  p(m) &&
                  (m = n.maybeMap(m, function (e) {
                    return e instanceof Date ? S(e) : e;
                  })),
              null === m)
            ) {
              if (r) return c && !N ? c(s, l.encoder, g, "key", h) : s;
              m = "";
            }
            if (
              "string" == typeof (x = m) ||
              "number" == typeof x ||
              "boolean" == typeof x ||
              "symbol" == typeof x ||
              "bigint" == typeof x ||
              n.isBuffer(m)
            )
              return c ? [I(N ? s : c(s, l.encoder, g, "key", h)) + "=" + I(c(m, l.encoder, g, "value", h))] : [I(s) + "=" + I(String(m))];
            var v,
              k = [];
            if (void 0 === m) return k;
            if ("comma" === a && p(m)) N && c && (m = n.maybeMap(m, c)), (v = [{ value: m.length > 0 ? m.join(",") || null : void 0 }]);
            else if (p(d)) v = d;
            else {
              var D = Object.keys(m);
              v = E ? D.sort(E) : D;
            }
            for (var P = o && p(m) && 1 === m.length ? s + "[]" : s, U = 0; U < v.length; ++U) {
              var b = v[U],
                _ = "object" == typeof b && void 0 !== b.value ? b.value : m[b];
              if (!u || null !== _) {
                var L = p(m) ? ("function" == typeof a ? a(P, b) : P) : P + (f ? "." + b : "[" + b + "]");
                R.set(t, C);
                var w = i();
                w.set(T, R), y(k, e(_, L, a, o, r, u, "comma" === a && N && p(m) ? null : c, d, E, f, S, h, I, N, g, w));
              }
            }
            return k;
          };
        e.exports = function (e, t) {
          var s,
            n = e,
            u = (function (e) {
              if (!e) return l;
              if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
                throw new TypeError("Encoder has to be a function.");
              var t = e.charset || l.charset;
              if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var s = a.default;
              if (void 0 !== e.format) {
                if (!o.call(a.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                s = e.format;
              }
              var i = a.formatters[s],
                n = l.filter;
              return (
                ("function" == typeof e.filter || p(e.filter)) && (n = e.filter),
                {
                  addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : l.addQueryPrefix,
                  allowDots: void 0 === e.allowDots ? l.allowDots : !!e.allowDots,
                  charset: t,
                  charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : l.charsetSentinel,
                  delimiter: void 0 === e.delimiter ? l.delimiter : e.delimiter,
                  encode: "boolean" == typeof e.encode ? e.encode : l.encode,
                  encoder: "function" == typeof e.encoder ? e.encoder : l.encoder,
                  encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : l.encodeValuesOnly,
                  filter: n,
                  format: s,
                  formatter: i,
                  serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : l.serializeDate,
                  skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : l.skipNulls,
                  sort: "function" == typeof e.sort ? e.sort : null,
                  strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : l.strictNullHandling
                }
              );
            })(t);
          "function" == typeof u.filter ? (n = (0, u.filter)("", n)) : p(u.filter) && (s = u.filter);
          var c,
            d = [];
          if ("object" != typeof n || null === n) return "";
          c = t && t.arrayFormat in r ? t.arrayFormat : t && "indices" in t ? (t.indices ? "indices" : "repeat") : "indices";
          var T = r[c];
          if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip)
            throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
          var f = "comma" === T && t && t.commaRoundTrip;
          s || (s = Object.keys(n)), u.sort && s.sort(u.sort);
          for (var S = i(), h = 0; h < s.length; ++h) {
            var I = s[h];
            (u.skipNulls && null === n[I]) ||
              y(
                d,
                E(
                  n[I],
                  I,
                  T,
                  f,
                  u.strictNullHandling,
                  u.skipNulls,
                  u.encode ? u.encoder : null,
                  u.filter,
                  u.sort,
                  u.allowDots,
                  u.serializeDate,
                  u.format,
                  u.formatter,
                  u.encodeValuesOnly,
                  u.charset,
                  S
                )
              );
          }
          var N = d.join(u.delimiter),
            g = !0 === u.addQueryPrefix ? "?" : "";
          return (
            u.charsetSentinel && ("iso-8859-1" === u.charset ? (g += "utf8=%26%2310003%3B&") : (g += "utf8=%E2%9C%93&")),
            N.length > 0 ? g + N : ""
          );
        };
      },
      12769: function (e, t, s) {
        "use strict";
        var i = s(55798),
          n = Object.prototype.hasOwnProperty,
          a = Array.isArray,
          o = (function () {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e;
          })(),
          r = function (e, t) {
            for (var s = t && t.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) void 0 !== e[i] && (s[i] = e[i]);
            return s;
          };
        e.exports = {
          arrayToObject: r,
          assign: function (e, t) {
            return Object.keys(t).reduce(function (e, s) {
              return (e[s] = t[s]), e;
            }, e);
          },
          combine: function (e, t) {
            return [].concat(e, t);
          },
          compact: function (e) {
            for (var t = [{ obj: { o: e }, prop: "o" }], s = [], i = 0; i < t.length; ++i)
              for (var n = t[i], o = n.obj[n.prop], r = Object.keys(o), p = 0; p < r.length; ++p) {
                var u = r[p],
                  y = o[u];
                "object" == typeof y && null !== y && -1 === s.indexOf(y) && (t.push({ obj: o, prop: u }), s.push(y));
              }
            return (
              (function (e) {
                for (; e.length > 1; ) {
                  var t = e.pop(),
                    s = t.obj[t.prop];
                  if (a(s)) {
                    for (var i = [], n = 0; n < s.length; ++n) void 0 !== s[n] && i.push(s[n]);
                    t.obj[t.prop] = i;
                  }
                }
              })(t),
              e
            );
          },
          decode: function (e, t, s) {
            var i = e.replace(/\+/g, " ");
            if ("iso-8859-1" === s) return i.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(i);
            } catch (e) {
              return i;
            }
          },
          encode: function (e, t, s, n, a) {
            if (0 === e.length) return e;
            var r = e;
            if (
              ("symbol" == typeof e ? (r = Symbol.prototype.toString.call(e)) : "string" != typeof e && (r = String(e)), "iso-8859-1" === s)
            )
              return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
              });
            for (var p = "", u = 0; u < r.length; ++u) {
              var y = r.charCodeAt(u);
              45 === y ||
              46 === y ||
              95 === y ||
              126 === y ||
              (y >= 48 && y <= 57) ||
              (y >= 65 && y <= 90) ||
              (y >= 97 && y <= 122) ||
              (a === i.RFC1738 && (40 === y || 41 === y))
                ? (p += r.charAt(u))
                : y < 128
                ? (p += o[y])
                : y < 2048
                ? (p += o[192 | (y >> 6)] + o[128 | (63 & y)])
                : y < 55296 || y >= 57344
                ? (p += o[224 | (y >> 12)] + o[128 | ((y >> 6) & 63)] + o[128 | (63 & y)])
                : ((u += 1),
                  (y = 65536 + (((1023 & y) << 10) | (1023 & r.charCodeAt(u)))),
                  (p += o[240 | (y >> 18)] + o[128 | ((y >> 12) & 63)] + o[128 | ((y >> 6) & 63)] + o[128 | (63 & y)]));
            }
            return p;
          },
          isBuffer: function (e) {
            return !(!e || "object" != typeof e || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)));
          },
          isRegExp: function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
          },
          maybeMap: function (e, t) {
            if (a(e)) {
              for (var s = [], i = 0; i < e.length; i += 1) s.push(t(e[i]));
              return s;
            }
            return t(e);
          },
          merge: function e(t, s, i) {
            if (!s) return t;
            if ("object" != typeof s) {
              if (a(t)) t.push(s);
              else {
                if (!t || "object" != typeof t) return [t, s];
                ((i && (i.plainObjects || i.allowPrototypes)) || !n.call(Object.prototype, s)) && (t[s] = !0);
              }
              return t;
            }
            if (!t || "object" != typeof t) return [t].concat(s);
            var o = t;
            return (
              a(t) && !a(s) && (o = r(t, i)),
              a(t) && a(s)
                ? (s.forEach(function (s, a) {
                    if (n.call(t, a)) {
                      var o = t[a];
                      o && "object" == typeof o && s && "object" == typeof s ? (t[a] = e(o, s, i)) : t.push(s);
                    } else t[a] = s;
                  }),
                  t)
                : Object.keys(s).reduce(function (t, a) {
                    var o = s[a];
                    return n.call(t, a) ? (t[a] = e(t[a], o, i)) : (t[a] = o), t;
                  }, o)
            );
          }
        };
      },
      37478: function (e, t, s) {
        "use strict";
        var i = s(40210),
          n = s(21924),
          a = s(70631),
          o = i("%TypeError%"),
          r = i("%WeakMap%", !0),
          p = i("%Map%", !0),
          u = n("WeakMap.prototype.get", !0),
          y = n("WeakMap.prototype.set", !0),
          c = n("WeakMap.prototype.has", !0),
          d = n("Map.prototype.get", !0),
          l = n("Map.prototype.set", !0),
          T = n("Map.prototype.has", !0),
          E = function (e, t) {
            for (var s, i = e; null !== (s = i.next); i = s) if (s.key === t) return (i.next = s.next), (s.next = e.next), (e.next = s), s;
          };
        e.exports = function () {
          var e,
            t,
            s,
            i = {
              assert: function (e) {
                if (!i.has(e)) throw new o("Side channel does not contain " + a(e));
              },
              get: function (i) {
                if (r && i && ("object" == typeof i || "function" == typeof i)) {
                  if (e) return u(e, i);
                } else if (p) {
                  if (t) return d(t, i);
                } else if (s)
                  return (function (e, t) {
                    var s = E(e, t);
                    return s && s.value;
                  })(s, i);
              },
              has: function (i) {
                if (r && i && ("object" == typeof i || "function" == typeof i)) {
                  if (e) return c(e, i);
                } else if (p) {
                  if (t) return T(t, i);
                } else if (s)
                  return (function (e, t) {
                    return !!E(e, t);
                  })(s, i);
                return !1;
              },
              set: function (i, n) {
                r && i && ("object" == typeof i || "function" == typeof i)
                  ? (e || (e = new r()), y(e, i, n))
                  : p
                  ? (t || (t = new p()), l(t, i, n))
                  : (s || (s = { key: {}, next: null }),
                    (function (e, t, s) {
                      var i = E(e, t);
                      i ? (i.value = s) : (e.next = { key: t, next: e.next, value: s });
                    })(s, i, n));
              }
            };
          return i;
        };
      },
      81469: function () {
        !(function () {
          var e = {
              30: function (e) {
                !(function () {
                  if (!crypto.subtle) {
                    const e = Promise.resolve("");
                    crypto.subtle = {
                      generateKey: function () {
                        return e;
                      },
                      importKey: function () {
                        return e;
                      },
                      exportKey: function () {
                        return e;
                      },
                      encrypt: function () {
                        return e;
                      },
                      decrypt: function () {
                        return e;
                      }
                    };
                  }
                  crypto.subtle;
                })(),
                  (e.exports = {
                    createSalt: function () {
                      return crypto.getRandomValues(new Uint8Array(16));
                    },
                    createKey: function () {
                      return crypto.subtle.generateKey({ name: "AES-CBC", length: 256 }, !0, ["encrypt", "decrypt"]);
                    },
                    importKey: function (e) {
                      return crypto.subtle.importKey("jwk", { kty: "oct", k: e, alg: "A256CBC", ext: !0 }, { name: "AES-CBC" }, !0, [
                        "encrypt",
                        "decrypt"
                      ]);
                    },
                    exportKey: function (e) {
                      return crypto.subtle.exportKey("jwk", e).then(function (e) {
                        return e.k;
                      });
                    },
                    encrypt: function (e, t, s) {
                      return crypto.subtle.encrypt({ name: "AES-CBC", iv: t }, s, e);
                    },
                    decrypt: function (e, t, s) {
                      return crypto.subtle.decrypt({ name: "AES-CBC", iv: t }, s, e);
                    }
                  });
              },
              31: function (e) {
                function t(e) {
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      t.push(String.fromCharCode(e));
                    }),
                    t.join("")
                  );
                }
                function s(e) {
                  return t(new Uint8Array(e));
                }
                function i(e) {
                  return new Uint8Array(
                    [].map.call(e, function (t) {
                      var s = t.charCodeAt(0);
                      if (s > 255) throw e + ": cannot convert non-ASCII character";
                      return s;
                    })
                  );
                }
                function n(e) {
                  return i(e).buffer;
                }
                e.exports = {
                  uint8array2str: t,
                  arrayBuffer2str: s,
                  str2uint8array: i,
                  str2arrayBuffer: n,
                  uint8array2base64: function (e) {
                    return btoa(t(e));
                  },
                  arrayBuffer2base64: function (e) {
                    return btoa(s(e));
                  },
                  base642uint8array: function (e) {
                    return i(atob(e));
                  },
                  base642arrayBuffer: function (e) {
                    return n(atob(e));
                  }
                };
              },
              29: function (e, t, s) {
                var i = s(30),
                  n = s(31);
                e.exports = class {
                  constructor(e) {
                    this.readyPromise = e
                      ? i.importKey(e).then(
                          function (e) {
                            return (this.key = e);
                          }.bind(this)
                        )
                      : i.createKey().then(
                          function (e) {
                            return (this.key = e);
                          }.bind(this)
                        );
                  }
                  ready() {
                    return !!this.key;
                  }
                  getKey() {
                    return i.exportKey(this.key);
                  }
                  encrypt(e) {
                    var t = i.createSalt();
                    return i.encrypt(n.str2arrayBuffer(encodeURI(e)), t, this.key).then(function (e) {
                      return { data: n.arrayBuffer2base64(e), salt: n.uint8array2base64(t) };
                    });
                  }
                  decrypt(e) {
                    return i.decrypt(n.base642arrayBuffer(e.data), n.base642uint8array(e.salt), this.key).then(function (e) {
                      return decodeURI(n.arrayBuffer2str(e));
                    });
                  }
                };
              },
              32: function (e, t, s) {
                var i = s(23),
                  n = {};
                function a(e, t, s) {
                  var n = t.messageId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
                  function a(e) {
                    "response" === e.name &&
                      e.message.messageId === n &&
                      (s(e.message.payload), safari.self.removeEventListener("message", a));
                  }
                  s && ((a.messageId = n), safari.self.addEventListener("message", a)),
                    (t.tabId = e),
                    (t.messageId = n),
                    (t.frameId = i.frameId),
                    (t.url = window.location.href),
                    safari.extension.dispatchMessage("request", { tabId: e, payload: t });
                }
                (n.dispatchRequest = function (e, t) {
                  i.tabId.then((s) => {
                    a(s, e, t);
                  });
                }),
                  i.tabId.then((e) => {
                    n.dispatchRequest = function (t, s) {
                      a(e, t, s);
                    };
                  }),
                  (e.exports = n);
              },
              25: function (e, t, s) {
                var i = s(26),
                  n = {
                    getURL: function (e) {
                      return i.getURL(e);
                    }
                  };
                e.exports = n;
              },
              33: function (e) {
                var t = {
                  getUILanguage: function () {
                    return navigator.language;
                  },
                  getMessage: function (e) {
                    return e;
                  },
                  detectLanguage: function (e, t) {
                    t({ isReliable: !0, languages: [{ language: "en", percentage: 100 }] });
                  }
                };
                e.exports = t;
              },
              24: function (e, t, s) {
                e.exports = { extension: s(25), i18n: s(33), runtime: s(26), tabs: s(34) };
              },
              26: function (e, t, s) {
                "use strict";
                var i = s(27),
                  n = s(23),
                  a = s(28),
                  o = s(32),
                  r = {},
                  p = new i();
                p.setMaxListeners(1024),
                  (r.sendMessage = function (e, t) {
                    o.dispatchRequest({ eventName: "sendMessage", message: e }, t);
                  }),
                  (r.onMessage = {
                    addListener: function (e) {
                      p.addListener("message", e);
                    },
                    removeListener: function (e) {
                      p.removeListener("message", e);
                    }
                  }),
                  safari.self.addEventListener("message", function (e) {
                    if ("request" === e.name && n.isForThisFrame(e.message.frameId))
                      return (
                        p.emit("message", e.message.payload, { id: "topee" }, function (t) {
                          o.dispatchRequest({ eventName: "messageResponse", messageId: e.message.messageId, message: t });
                        }),
                        void (void 0 === e.message.frameId && a.broadcast(e.message))
                      );
                    "request" === e.name && a.hasChild(e.message.frameId) && a.forward(e.message.frameId, e.message);
                  }),
                  (r.sayAlive = function () {
                    n.sayAlive();
                  }),
                  (r.getURL = function (e) {
                    if (!safari.extension.baseURI) throw new Error("safari.extension.baseURI didn't return usable value");
                    return safari.extension.baseURI + e;
                  }),
                  (r.getPlatformInfo = function (e) {
                    e({ os: "mac", arch: "x86-64", nacl_arch: "x86-64" });
                  }),
                  (e.exports = r);
              },
              34: function (e, t, s) {
                "use strict";
                const i = s(32);
                var n = {
                  query: function (e, t) {
                    i.dispatchRequest({ eventName: "tabs.query", queryInfo: e }, t);
                  },
                  remove: function () {
                    safari.extension.dispatchMessage("removeTab", { payload: { eventName: "removeTab", url: document.location.href } });
                  },
                  waitForReload: function () {
                    safari.extension.dispatchMessage("waitForReload", {
                      payload: { eventName: "waitForReload", url: document.location.href }
                    });
                  },
                  activate: function () {
                    safari.extension.dispatchMessage("returnToClipperTab", {
                      payload: { eventName: "returnToClipperTab", url: document.location.href }
                    });
                  }
                };
                e.exports = n;
              },
              28: function (e, t, s) {
                "use strict";
                var i = new (s(29))(),
                  n = {
                    _frames: {},
                    add: function (e, t) {
                      this.garbageCollect(), (this._frames[e] = t);
                    },
                    get: function (e) {
                      return this.garbageCollect(), this._frames[e];
                    },
                    getAll: function () {
                      return this.garbageCollect(), Object.values(this._frames);
                    },
                    garbageCollect: function () {
                      for (var e in this._frames) this._frames[e].closed && delete this._frames[e];
                    }
                  };
                e.exports = {
                  install: function () {
                    window.addEventListener("message", function (e) {
                      safari.extension.baseURI.toLowerCase().startsWith(e.origin.toLowerCase()) &&
                        (e.data &&
                          "topee_get_iframe_key" === e.data.type &&
                          (n.add(e.data.frameId, e.source),
                          i.readyPromise
                            .then(() => i.getKey())
                            .then(function (t) {
                              e.source && e.source.postMessage({ type: "topee_iframe_key", value: t }, e.origin);
                            })),
                        e.data &&
                          "topee_iframe_request" === e.data.type &&
                          i.decrypt(e.data.value).then(function (t) {
                            var s = JSON.parse(t),
                              n = e.data.messageId;
                            void 0 !== n &&
                              safari.self.addEventListener("message", function t(s) {
                                "response" === s.name &&
                                  s.message.messageId === n &&
                                  (i.encrypt(JSON.stringify(s.message)).then(function (t) {
                                    e.source && e.source.postMessage({ type: "topee_iframe_response", value: t }, e.origin);
                                  }),
                                  safari.self.removeEventListener("message", t));
                              }),
                              safari.extension.dispatchMessage(s.name, s.value);
                          }));
                    });
                  },
                  hasChild: function (e) {
                    return !!e && !!n.get(e);
                  },
                  forward: function (e, t) {
                    var s = n.get(e);
                    s
                      ? i.readyPromise
                          .then(() => i.encrypt(JSON.stringify(t)))
                          .then((e) => s.postMessage({ type: "topee_iframe_request", value: e }, "*"))
                      : window.topee_log && console.log("frame", e, "not found");
                  },
                  broadcast: function (e) {
                    var t = n.getAll();
                    0 != t.length &&
                      i.readyPromise
                        .then(() => i.encrypt(JSON.stringify(e)))
                        .then((e) => t.forEach((t) => t.postMessage({ type: "topee_iframe_request", value: e }, "*")));
                  }
                };
              },
              23: function (e) {
                "use strict";
                var t,
                  s = {
                    Event: { GET_TAB_ID: "topee.tabInfo.getTabId", TAB_ID: "topee.tabInfo.tabId" },
                    init: function () {
                      if (
                        (window === window.top &&
                          (window.addEventListener("message", function (e) {
                            e.data &&
                              e.data.type === s.Event.GET_TAB_ID &&
                              s.tabId.then(
                                (t) => e.source && e.source.postMessage({ type: s.Event.TAB_ID, detail: t, debug: o }, e.origin)
                              );
                          }),
                          safari.self.addEventListener("message", function (e) {
                            "tabUpdate" === e.name && e.message && e.message.url && (window.location = e.message.url);
                          })),
                        isNaN(n))
                      )
                        if (window !== window.top) {
                          if (window !== window.top) {
                            if ({ "accounts.spotify.com": !0 }[location.hostname]) return;
                            var e;
                            return (
                              window.addEventListener("message", function (i) {
                                i.data &&
                                  i.data.type === s.Event.TAB_ID &&
                                  "number" == typeof i.data.detail &&
                                  ((n = i.data.detail), u(i.data.debug), p(i.data.debug), t(i.data.detail), clearInterval(e));
                              }),
                              (e = setInterval(function () {
                                window.top.postMessage({ type: s.Event.GET_TAB_ID }, "*");
                              }, 200)),
                              void window.top.postMessage({ type: s.Event.GET_TAB_ID }, "*")
                            );
                          }
                        } else
                          safari.self.addEventListener("message", function (e) {
                            "forceTabId" === e.name &&
                              e.message &&
                              "number" == typeof e.message.tabId &&
                              ((n = e.message.tabId),
                              i.setItem("topee_tabId", n),
                              u(e.message.debug),
                              p(e.message.debug),
                              t(e.message.tabId));
                          });
                      else t(n);
                    },
                    sayHello: function () {
                      var e = isNaN(n) ? null : n;
                      if (null === e) {
                        if (a) return;
                        a = !0;
                      }
                      window.isTabRegistered ||
                        (s.tabId.then(
                          (t) =>
                            window.topee_log &&
                            console.debug(
                              `topee.hello(tabId: ${e}, referrer: "${document.referrer}", historyLength: ${history.length}) @ ${window.location.href} -> ${t}`
                            )
                        ),
                        safari.extension.dispatchMessage("hello", {
                          tabId: e,
                          referrer: document.referrer,
                          historyLength: history.length,
                          userAgent: navigator.userAgent,
                          payload: Object.assign({ eventName: "hello", tabId: e, url: document.location.href }, r())
                        }),
                        (window.isTabRegistered = !0));
                    },
                    sayAlive: function () {
                      isNaN(n) ||
                        safari.extension.dispatchMessage("alive", {
                          tabId: n,
                          payload: Object.assign({ eventName: "alive", tabId: n, url: document.location.href }, r())
                        });
                    },
                    sayBye: function (e) {
                      var t = isNaN(n) ? null : n;
                      window.isTabRegistered &&
                        (window.topee_log && console.debug(`topee.bye(tabId: ${t}, url: ${window.location.href})`),
                        safari.extension.dispatchMessage("bye", {
                          tabId: t,
                          referrer: document.referrer,
                          historyLength: history.length,
                          payload: { tabId: t, eventName: "bye", reason: e ? e.type : "unknown", url: window.location.href }
                        }),
                        (window.isTabRegistered = !1));
                    },
                    isForThisFrame: function (e) {
                      return null == e || e === s.frameId;
                    }
                  },
                  i = {
                    cache: {},
                    getItem: function (e) {
                      return navigator.cookieEnabled ? sessionStorage.getItem(e) : i.cache[e];
                    },
                    setItem: function (e, t) {
                      return navigator.cookieEnabled ? sessionStorage.setItem(e, t) : ((i.cache[e] = t), null);
                    }
                  };
                (s.tabId = new Promise(function (e) {
                  t = e;
                })),
                  window === window.top ? (s.frameId = 0) : (s.frameId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                var n = window.opener ? NaN : parseInt(i.getItem("topee_tabId")),
                  a = !1,
                  o = (function () {
                    var e = i.getItem("topee_debug");
                    if (!e) return {};
                    try {
                      var t = JSON.parse(e);
                      return null === t || "object" != typeof t ? {} : t;
                    } catch (e) {
                      return {};
                    }
                  })();
                function r() {
                  return {
                    frameId: s.frameId,
                    isVisible: !document.hidden,
                    hasFocus: document.hasFocus(),
                    status: "complete" === document.readyState ? "complete" : "loading",
                    url: window.location.href
                  };
                }
                function p(e) {
                  "object" == typeof e && null !== e && i.setItem("topee_debug", JSON.stringify(e));
                }
                function u(e) {
                  if (arguments.length > 0) {
                    if ("object" != typeof e || null === e) return;
                    o = e;
                  }
                  o.log ? (window.topee_log = o.log) : delete window.topee_log;
                }
                u(), (window.isTabRegistered = !1), (e.exports = s);
              },
              27: function (e) {
                "use strict";
                var t,
                  s = "object" == typeof Reflect ? Reflect : null,
                  i =
                    s && "function" == typeof s.apply
                      ? s.apply
                      : function (e, t, s) {
                          return Function.prototype.apply.call(e, t, s);
                        };
                t =
                  s && "function" == typeof s.ownKeys
                    ? s.ownKeys
                    : Object.getOwnPropertySymbols
                    ? function (e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                      }
                    : function (e) {
                        return Object.getOwnPropertyNames(e);
                      };
                var n =
                  Number.isNaN ||
                  function (e) {
                    return e != e;
                  };
                function a() {
                  a.init.call(this);
                }
                (e.exports = a),
                  (e.exports.once = function (e, t) {
                    return new Promise(function (s, i) {
                      function n(s) {
                        e.removeListener(t, a), i(s);
                      }
                      function a() {
                        "function" == typeof e.removeListener && e.removeListener("error", n), s([].slice.call(arguments));
                      }
                      E(e, t, a, { once: !0 }),
                        "error" !== t &&
                          (function (e, t, s) {
                            "function" == typeof e.on && E(e, "error", t, { once: !0 });
                          })(e, n);
                    });
                  }),
                  (a.EventEmitter = a),
                  (a.prototype._events = void 0),
                  (a.prototype._eventsCount = 0),
                  (a.prototype._maxListeners = void 0);
                var o = 10;
                function r(e) {
                  if ("function" != typeof e)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                }
                function p(e) {
                  return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
                }
                function u(e, t, s, i) {
                  var n, a, o, u;
                  if (
                    (r(s),
                    void 0 === (a = e._events)
                      ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
                      : (void 0 !== a.newListener && (e.emit("newListener", t, s.listener ? s.listener : s), (a = e._events)), (o = a[t])),
                    void 0 === o)
                  )
                    (o = a[t] = s), ++e._eventsCount;
                  else if (
                    ("function" == typeof o ? (o = a[t] = i ? [s, o] : [o, s]) : i ? o.unshift(s) : o.push(s),
                    (n = p(e)) > 0 && o.length > n && !o.warned)
                  ) {
                    o.warned = !0;
                    var y = new Error(
                      "Possible EventEmitter memory leak detected. " +
                        o.length +
                        " " +
                        String(t) +
                        " listeners added. Use emitter.setMaxListeners() to increase limit"
                    );
                    (y.name = "MaxListenersExceededWarning"),
                      (y.emitter = e),
                      (y.type = t),
                      (y.count = o.length),
                      (u = y),
                      console && console.warn && console.warn(u);
                  }
                  return e;
                }
                function y() {
                  if (!this.fired)
                    return (
                      this.target.removeListener(this.type, this.wrapFn),
                      (this.fired = !0),
                      0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    );
                }
                function c(e, t, s) {
                  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: s },
                    n = y.bind(i);
                  return (n.listener = s), (i.wrapFn = n), n;
                }
                function d(e, t, s) {
                  var i = e._events;
                  if (void 0 === i) return [];
                  var n = i[t];
                  return void 0 === n
                    ? []
                    : "function" == typeof n
                    ? s
                      ? [n.listener || n]
                      : [n]
                    : s
                    ? (function (e) {
                        for (var t = new Array(e.length), s = 0; s < t.length; ++s) t[s] = e[s].listener || e[s];
                        return t;
                      })(n)
                    : T(n, n.length);
                }
                function l(e) {
                  var t = this._events;
                  if (void 0 !== t) {
                    var s = t[e];
                    if ("function" == typeof s) return 1;
                    if (void 0 !== s) return s.length;
                  }
                  return 0;
                }
                function T(e, t) {
                  for (var s = new Array(t), i = 0; i < t; ++i) s[i] = e[i];
                  return s;
                }
                function E(e, t, s, i) {
                  if ("function" == typeof e.on) i.once ? e.once(t, s) : e.on(t, s);
                  else {
                    if ("function" != typeof e.addEventListener)
                      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                    e.addEventListener(t, function n(a) {
                      i.once && e.removeEventListener(t, n), s(a);
                    });
                  }
                }
                Object.defineProperty(a, "defaultMaxListeners", {
                  enumerable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (e) {
                    if ("number" != typeof e || e < 0 || n(e))
                      throw new RangeError(
                        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."
                      );
                    o = e;
                  }
                }),
                  (a.init = function () {
                    (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
                      ((this._events = Object.create(null)), (this._eventsCount = 0)),
                      (this._maxListeners = this._maxListeners || void 0);
                  }),
                  (a.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || n(e))
                      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return (this._maxListeners = e), this;
                  }),
                  (a.prototype.getMaxListeners = function () {
                    return p(this);
                  }),
                  (a.prototype.emit = function (e) {
                    for (var t = [], s = 1; s < arguments.length; s++) t.push(arguments[s]);
                    var n = "error" === e,
                      a = this._events;
                    if (void 0 !== a) n = n && void 0 === a.error;
                    else if (!n) return !1;
                    if (n) {
                      var o;
                      if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                      var r = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                      throw ((r.context = o), r);
                    }
                    var p = a[e];
                    if (void 0 === p) return !1;
                    if ("function" == typeof p) i(p, this, t);
                    else {
                      var u = p.length,
                        y = T(p, u);
                      for (s = 0; s < u; ++s) i(y[s], this, t);
                    }
                    return !0;
                  }),
                  (a.prototype.addListener = function (e, t) {
                    return u(this, e, t, !1);
                  }),
                  (a.prototype.on = a.prototype.addListener),
                  (a.prototype.prependListener = function (e, t) {
                    return u(this, e, t, !0);
                  }),
                  (a.prototype.once = function (e, t) {
                    return r(t), this.on(e, c(this, e, t)), this;
                  }),
                  (a.prototype.prependOnceListener = function (e, t) {
                    return r(t), this.prependListener(e, c(this, e, t)), this;
                  }),
                  (a.prototype.removeListener = function (e, t) {
                    var s, i, n, a, o;
                    if ((r(t), void 0 === (i = this._events))) return this;
                    if (void 0 === (s = i[e])) return this;
                    if (s === t || s.listener === t)
                      0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : (delete i[e], i.removeListener && this.emit("removeListener", e, s.listener || t));
                    else if ("function" != typeof s) {
                      for (n = -1, a = s.length - 1; a >= 0; a--)
                        if (s[a] === t || s[a].listener === t) {
                          (o = s[a].listener), (n = a);
                          break;
                        }
                      if (n < 0) return this;
                      0 === n
                        ? s.shift()
                        : (function (e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop();
                          })(s, n),
                        1 === s.length && (i[e] = s[0]),
                        void 0 !== i.removeListener && this.emit("removeListener", e, o || t);
                    }
                    return this;
                  }),
                  (a.prototype.off = a.prototype.removeListener),
                  (a.prototype.removeAllListeners = function (e) {
                    var t, s, i;
                    if (void 0 === (s = this._events)) return this;
                    if (void 0 === s.removeListener)
                      return (
                        0 === arguments.length
                          ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                          : void 0 !== s[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete s[e]),
                        this
                      );
                    if (0 === arguments.length) {
                      var n,
                        a = Object.keys(s);
                      for (i = 0; i < a.length; ++i) "removeListener" !== (n = a[i]) && this.removeAllListeners(n);
                      return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                    }
                    if ("function" == typeof (t = s[e])) this.removeListener(e, t);
                    else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                    return this;
                  }),
                  (a.prototype.listeners = function (e) {
                    return d(this, e, !0);
                  }),
                  (a.prototype.rawListeners = function (e) {
                    return d(this, e, !1);
                  }),
                  (a.listenerCount = function (e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : l.call(e, t);
                  }),
                  (a.prototype.listenerCount = l),
                  (a.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? t(this._events) : [];
                  });
              }
            },
            t = {};
          function s(i) {
            var n = t[i];
            if (void 0 !== n) return n.exports;
            var a = (t[i] = { exports: {} });
            return e[i](a, a.exports, s), a.exports;
          }
          !(function () {
            "use strict";
            var e = s(29),
              t = null,
              i = [],
              n = {},
              a = [];
            if (void 0 !== window.ApplePayError || void 0 !== window.WebKitNamespace) {
              "undefined" == typeof safari && (window.safari = {}),
                void 0 === safari.extension && (safari.extension = {}),
                void 0 === safari.self && (safari.self = {}),
                void 0 === safari.extension.dispatchMessage &&
                  (safari.extension.dispatchMessage = t
                    ? r
                    : function (e, t) {
                        i.push([e, t]);
                      }),
                void 0 === safari.self.addEventListener &&
                  ((safari.self.addEventListener = function (e, s) {
                    function i(e) {
                      e.data && "topee_iframe_response" === e.data.type
                        ? t.decrypt(e.data.value).then(function (e) {
                            var t = JSON.parse(e);
                            t.messageId === s.messageId &&
                              (window.removeEventListener("message", s),
                              s({ name: t.eventName, message: { messageId: t.messageId, payload: t.payload } }));
                          })
                        : e.data &&
                          "topee_iframe_request" === e.data.type &&
                          t.decrypt(e.data.value).then(function (e) {
                            var t = JSON.parse(e);
                            s({ name: t.eventName, message: { messageId: t.messageId, payload: t.payload } });
                          });
                    }
                    "message" === e
                      ? (s &&
                          s.messageId &&
                          ((n[s.messageId] = !0),
                          setTimeout(function () {
                            delete n[s.messageId];
                          }, 1e3)),
                        a.push({ type: e, safariCallback: s, decryptingCallback: i }),
                        window.addEventListener("message", i))
                      : console.error("Unexpected message listener:", e);
                  }),
                  (safari.self.removeEventListener = function (e, t) {
                    var s = a.findIndex(function (s) {
                      return s.type === e && s.safariCallback === t;
                    });
                    -1 != s
                      ? (window.removeEventListener("message", a[s].decryptingCallback), a.splice(s, 1))
                      : window.topee_log && console.log("listener for", e, "not found");
                  })),
                window.addEventListener("message", function (s) {
                  if ("topee_iframe_key" === s.data.type && s.data.value) {
                    if (t) return void console.error("cannot overwrite encryption key");
                    (t = new e(s.data.value)).readyPromise
                      .then(function () {
                        try {
                          safari.extension.dispatchMessage = r;
                        } catch (e) {
                          console.warn("Cannot override dispatchMessage");
                        }
                        for (; i.length > 0; ) r.apply(window, i.shift());
                      })
                      .catch(function (e) {
                        console.error(e), (t = null);
                      });
                  }
                });
              var o = s(23);
              o.init(),
                window.parent.postMessage({ type: "topee_get_iframe_key", frameId: o.frameId }, "*"),
                (window.chrome = s(24)),
                window === window.top &&
                  (o.sayHello(),
                  window.addEventListener("pageshow", function () {
                    o.sayHello();
                  }));
            }
            function r(e, s) {
              var i = null;
              s && s.payload && ((void 0 !== (i = s.payload.messageId) && n[i]) || (i = null), delete n[i]),
                t.encrypt(JSON.stringify({ name: e, value: s })).then(function (e) {
                  var t = { type: "topee_iframe_request", value: e };
                  null !== i && (t.messageId = i), window.topee_log && console.log("sending", t), window.parent.postMessage(t, "*");
                });
            }
          })();
        })();
      },
      52511: function (e, t, s) {
        var i;
        (e = s.nmd(e)),
          (function (n) {
            t && t.nodeType, e && e.nodeType;
            var a = "object" == typeof s.g && s.g;
            a.global !== a && a.window !== a && a.self;
            var o,
              r = 2147483647,
              p = 36,
              u = 26,
              y = 38,
              c = 700,
              d = /^xn--/,
              l = /[^\x20-\x7E]/,
              T = /[\x2E\u3002\uFF0E\uFF61]/g,
              E = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
              f = p - 1,
              S = Math.floor,
              h = String.fromCharCode;
            function I(e) {
              throw new RangeError(E[e]);
            }
            function N(e, t) {
              for (var s = e.length, i = []; s--; ) i[s] = t(e[s]);
              return i;
            }
            function g(e, t) {
              var s = e.split("@"),
                i = "";
              return s.length > 1 && ((i = s[0] + "@"), (e = s[1])), i + N((e = e.replace(T, ".")).split("."), t).join(".");
            }
            function R(e) {
              for (var t, s, i = [], n = 0, a = e.length; n < a; )
                (t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < a
                  ? 56320 == (64512 & (s = e.charCodeAt(n++)))
                    ? i.push(((1023 & t) << 10) + (1023 & s) + 65536)
                    : (i.push(t), n--)
                  : i.push(t);
              return i;
            }
            function x(e) {
              return N(e, function (e) {
                var t = "";
                return e > 65535 && ((t += h((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), t + h(e);
              }).join("");
            }
            function m(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function A(e, t, s) {
              var i = 0;
              for (e = s ? S(e / c) : e >> 1, e += S(e / t); e > (f * u) >> 1; i += p) e = S(e / f);
              return S(i + ((f + 1) * e) / (e + y));
            }
            function C(e) {
              var t,
                s,
                i,
                n,
                a,
                o,
                y,
                c,
                d,
                l,
                T,
                E = [],
                f = e.length,
                h = 0,
                N = 128,
                g = 72;
              for ((s = e.lastIndexOf("-")) < 0 && (s = 0), i = 0; i < s; ++i)
                e.charCodeAt(i) >= 128 && I("not-basic"), E.push(e.charCodeAt(i));
              for (n = s > 0 ? s + 1 : 0; n < f; ) {
                for (
                  a = h, o = 1, y = p;
                  n >= f && I("invalid-input"),
                    ((c = (T = e.charCodeAt(n++)) - 48 < 10 ? T - 22 : T - 65 < 26 ? T - 65 : T - 97 < 26 ? T - 97 : p) >= p ||
                      c > S((r - h) / o)) &&
                      I("overflow"),
                    (h += c * o),
                    !(c < (d = y <= g ? 1 : y >= g + u ? u : y - g));
                  y += p
                )
                  o > S(r / (l = p - d)) && I("overflow"), (o *= l);
                (g = A(h - a, (t = E.length + 1), 0 == a)),
                  S(h / t) > r - N && I("overflow"),
                  (N += S(h / t)),
                  (h %= t),
                  E.splice(h++, 0, N);
              }
              return x(E);
            }
            function O(e) {
              var t,
                s,
                i,
                n,
                a,
                o,
                y,
                c,
                d,
                l,
                T,
                E,
                f,
                N,
                g,
                x = [];
              for (E = (e = R(e)).length, t = 128, s = 0, a = 72, o = 0; o < E; ++o) (T = e[o]) < 128 && x.push(h(T));
              for (i = n = x.length, n && x.push("-"); i < E; ) {
                for (y = r, o = 0; o < E; ++o) (T = e[o]) >= t && T < y && (y = T);
                for (y - t > S((r - s) / (f = i + 1)) && I("overflow"), s += (y - t) * f, t = y, o = 0; o < E; ++o)
                  if (((T = e[o]) < t && ++s > r && I("overflow"), T == t)) {
                    for (c = s, d = p; !(c < (l = d <= a ? 1 : d >= a + u ? u : d - a)); d += p)
                      (g = c - l), (N = p - l), x.push(h(m(l + (g % N), 0))), (c = S(g / N));
                    x.push(h(m(c, 0))), (a = A(s, f, i == n)), (s = 0), ++i;
                  }
                ++s, ++t;
              }
              return x.join("");
            }
            (o = {
              version: "1.4.1",
              ucs2: { decode: R, encode: x },
              decode: C,
              encode: O,
              toASCII: function (e) {
                return g(e, function (e) {
                  return l.test(e) ? "xn--" + O(e) : e;
                });
              },
              toUnicode: function (e) {
                return g(e, function (e) {
                  return d.test(e) ? C(e.slice(4).toLowerCase()) : e;
                });
              }
            }),
              void 0 ===
                (i = function () {
                  return o;
                }.call(t, s, t, e)) || (e.exports = i);
          })();
      },
      8575: function (e, t, s) {
        "use strict";
        var i = s(52511);
        function n() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        var a = /^([a-z0-9.+-]+:)/i,
          o = /:[0-9]*$/,
          r = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
          p = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          u = ["'"].concat(p),
          y = ["%", "/", "?", ";", "#"].concat(u),
          c = ["/", "?", "#"],
          d = /^[+a-z0-9A-Z_-]{0,63}$/,
          l = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          T = { javascript: !0, "javascript:": !0 },
          E = { javascript: !0, "javascript:": !0 },
          f = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          S = s(80129);
        function h(e, t, s) {
          if (e && "object" == typeof e && e instanceof n) return e;
          var i = new n();
          return i.parse(e, t, s), i;
        }
        (n.prototype.parse = function (e, t, s) {
          if ("string" != typeof e) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
          var n = e.indexOf("?"),
            o = -1 !== n && n < e.indexOf("#") ? "?" : "#",
            p = e.split(o);
          p[0] = p[0].replace(/\\/g, "/");
          var h = (e = p.join(o));
          if (((h = h.trim()), !s && 1 === e.split("#").length)) {
            var I = r.exec(h);
            if (I)
              return (
                (this.path = h),
                (this.href = h),
                (this.pathname = I[1]),
                I[2]
                  ? ((this.search = I[2]), (this.query = t ? S.parse(this.search.substr(1)) : this.search.substr(1)))
                  : t && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var N = a.exec(h);
          if (N) {
            var g = (N = N[0]).toLowerCase();
            (this.protocol = g), (h = h.substr(N.length));
          }
          if (s || N || h.match(/^\/\/[^@/]+@[^@/]+/)) {
            var R = "//" === h.substr(0, 2);
            !R || (N && E[N]) || ((h = h.substr(2)), (this.slashes = !0));
          }
          if (!E[N] && (R || (N && !f[N]))) {
            for (var x, m, A = -1, C = 0; C < c.length; C++) -1 !== (O = h.indexOf(c[C])) && (-1 === A || O < A) && (A = O);
            for (
              -1 !== (m = -1 === A ? h.lastIndexOf("@") : h.lastIndexOf("@", A)) &&
                ((x = h.slice(0, m)), (h = h.slice(m + 1)), (this.auth = decodeURIComponent(x))),
                A = -1,
                C = 0;
              C < y.length;
              C++
            ) {
              var O;
              -1 !== (O = h.indexOf(y[C])) && (-1 === A || O < A) && (A = O);
            }
            -1 === A && (A = h.length),
              (this.host = h.slice(0, A)),
              (h = h.slice(A)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!M)
              for (var v = this.hostname.split(/\./), k = ((C = 0), v.length); C < k; C++) {
                var D = v[C];
                if (D && !D.match(d)) {
                  for (var P = "", U = 0, b = D.length; U < b; U++) D.charCodeAt(U) > 127 ? (P += "x") : (P += D[U]);
                  if (!P.match(d)) {
                    var _ = v.slice(0, C),
                      L = v.slice(C + 1),
                      w = D.match(l);
                    w && (_.push(w[1]), L.unshift(w[2])), L.length && (h = "/" + L.join(".") + h), (this.hostname = _.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
              M || (this.hostname = i.toASCII(this.hostname));
            var G = this.port ? ":" + this.port : "",
              B = this.hostname || "";
            (this.host = B + G),
              (this.href += this.host),
              M && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== h[0] && (h = "/" + h));
          }
          if (!T[g])
            for (C = 0, k = u.length; C < k; C++) {
              var F = u[C];
              if (-1 !== h.indexOf(F)) {
                var q = encodeURIComponent(F);
                q === F && (q = escape(F)), (h = h.split(F).join(q));
              }
            }
          var X = h.indexOf("#");
          -1 !== X && ((this.hash = h.substr(X)), (h = h.slice(0, X)));
          var V = h.indexOf("?");
          if (
            (-1 !== V
              ? ((this.search = h.substr(V)), (this.query = h.substr(V + 1)), t && (this.query = S.parse(this.query)), (h = h.slice(0, V)))
              : t && ((this.search = ""), (this.query = {})),
            h && (this.pathname = h),
            f[g] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            G = this.pathname || "";
            var W = this.search || "";
            this.path = G + W;
          }
          return (this.href = this.format()), this;
        }),
          (n.prototype.format = function () {
            var e = this.auth || "";
            e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
            var t = this.protocol || "",
              s = this.pathname || "",
              i = this.hash || "",
              n = !1,
              a = "";
            this.host
              ? (n = e + this.host)
              : this.hostname &&
                ((n = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
                this.port && (n += ":" + this.port)),
              this.query && "object" == typeof this.query && Object.keys(this.query).length && (a = S.stringify(this.query));
            var o = this.search || (a && "?" + a) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || f[t]) && !1 !== n)
                ? ((n = "//" + (n || "")), s && "/" !== s.charAt(0) && (s = "/" + s))
                : n || (n = ""),
              i && "#" !== i.charAt(0) && (i = "#" + i),
              o && "?" !== o.charAt(0) && (o = "?" + o),
              t +
                n +
                (s = s.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (o = o.replace("#", "%23")) +
                i
            );
          }),
          (n.prototype.resolve = function (e) {
            return this.resolveObject(h(e, !1, !0)).format();
          }),
          (n.prototype.resolveObject = function (e) {
            if ("string" == typeof e) {
              var t = new n();
              t.parse(e, !1, !0), (e = t);
            }
            for (var s = new n(), i = Object.keys(this), a = 0; a < i.length; a++) {
              var o = i[a];
              s[o] = this[o];
            }
            if (((s.hash = e.hash), "" === e.href)) return (s.href = s.format()), s;
            if (e.slashes && !e.protocol) {
              for (var r = Object.keys(e), p = 0; p < r.length; p++) {
                var u = r[p];
                "protocol" !== u && (s[u] = e[u]);
              }
              return f[s.protocol] && s.hostname && !s.pathname && ((s.pathname = "/"), (s.path = s.pathname)), (s.href = s.format()), s;
            }
            if (e.protocol && e.protocol !== s.protocol) {
              if (!f[e.protocol]) {
                for (var y = Object.keys(e), c = 0; c < y.length; c++) {
                  var d = y[c];
                  s[d] = e[d];
                }
                return (s.href = s.format()), s;
              }
              if (((s.protocol = e.protocol), e.host || E[e.protocol])) s.pathname = e.pathname;
              else {
                for (var l = (e.pathname || "").split("/"); l.length && !(e.host = l.shift()); );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== l[0] && l.unshift(""),
                  l.length < 2 && l.unshift(""),
                  (s.pathname = l.join("/"));
              }
              if (
                ((s.search = e.search),
                (s.query = e.query),
                (s.host = e.host || ""),
                (s.auth = e.auth),
                (s.hostname = e.hostname || e.host),
                (s.port = e.port),
                s.pathname || s.search)
              ) {
                var T = s.pathname || "",
                  S = s.search || "";
                s.path = T + S;
              }
              return (s.slashes = s.slashes || e.slashes), (s.href = s.format()), s;
            }
            var h = s.pathname && "/" === s.pathname.charAt(0),
              I = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              N = I || h || (s.host && e.pathname),
              g = N,
              R = (s.pathname && s.pathname.split("/")) || [],
              x = ((l = (e.pathname && e.pathname.split("/")) || []), s.protocol && !f[s.protocol]);
            if (
              (x &&
                ((s.hostname = ""),
                (s.port = null),
                s.host && ("" === R[0] ? (R[0] = s.host) : R.unshift(s.host)),
                (s.host = ""),
                e.protocol &&
                  ((e.hostname = null), (e.port = null), e.host && ("" === l[0] ? (l[0] = e.host) : l.unshift(e.host)), (e.host = null)),
                (N = N && ("" === l[0] || "" === R[0]))),
              I)
            )
              (s.host = e.host || "" === e.host ? e.host : s.host),
                (s.hostname = e.hostname || "" === e.hostname ? e.hostname : s.hostname),
                (s.search = e.search),
                (s.query = e.query),
                (R = l);
            else if (l.length) R || (R = []), R.pop(), (R = R.concat(l)), (s.search = e.search), (s.query = e.query);
            else if (null != e.search)
              return (
                x &&
                  ((s.host = R.shift()),
                  (s.hostname = s.host),
                  (M = !!(s.host && s.host.indexOf("@") > 0) && s.host.split("@")) &&
                    ((s.auth = M.shift()), (s.hostname = M.shift()), (s.host = s.hostname))),
                (s.search = e.search),
                (s.query = e.query),
                (null === s.pathname && null === s.search) || (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")),
                (s.href = s.format()),
                s
              );
            if (!R.length) return (s.pathname = null), s.search ? (s.path = "/" + s.search) : (s.path = null), (s.href = s.format()), s;
            for (
              var m = R.slice(-1)[0],
                A = ((s.host || e.host || R.length > 1) && ("." === m || ".." === m)) || "" === m,
                C = 0,
                O = R.length;
              O >= 0;
              O--
            )
              "." === (m = R[O]) ? R.splice(O, 1) : ".." === m ? (R.splice(O, 1), C++) : C && (R.splice(O, 1), C--);
            if (!N && !g) for (; C--; C) R.unshift("..");
            !N || "" === R[0] || (R[0] && "/" === R[0].charAt(0)) || R.unshift(""), A && "/" !== R.join("/").substr(-1) && R.push("");
            var M,
              v = "" === R[0] || (R[0] && "/" === R[0].charAt(0));
            return (
              x &&
                ((s.hostname = v ? "" : R.length ? R.shift() : ""),
                (s.host = s.hostname),
                (M = !!(s.host && s.host.indexOf("@") > 0) && s.host.split("@")) &&
                  ((s.auth = M.shift()), (s.hostname = M.shift()), (s.host = s.hostname))),
              (N = N || (s.host && R.length)) && !v && R.unshift(""),
              R.length > 0 ? (s.pathname = R.join("/")) : ((s.pathname = null), (s.path = null)),
              (null === s.pathname && null === s.search) || (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")),
              (s.auth = e.auth || s.auth),
              (s.slashes = s.slashes || e.slashes),
              (s.href = s.format()),
              s
            );
          }),
          (n.prototype.parseHost = function () {
            var e = this.host,
              t = o.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
          }),
          (t.parse = h),
          (t.resolve = function (e, t) {
            return h(e, !1, !0).resolve(t);
          }),
          (t.resolveObject = function (e, t) {
            return e ? h(e, !1, !0).resolveObject(t) : t;
          }),
          (t.format = function (e) {
            return "string" == typeof e && (e = h(e)), e instanceof n ? e.format() : n.prototype.format.call(e);
          }),
          (t.Url = n);
      },
      72693: function () {},
      49069: function () {},
      24654: function () {}
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var s = (__webpack_module_cache__[e] = { id: e, loaded: !1, exports: {} });
    return __webpack_modules__[e].call(s.exports, s, s.exports, __webpack_require__), (s.loaded = !0), s.exports;
  }
  (__webpack_require__.amdO = {}),
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return __webpack_require__.d(t, { a: t }), t;
    }),
    (__webpack_require__.d = function (e, t) {
      for (var s in t)
        __webpack_require__.o(t, s) && !__webpack_require__.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (__webpack_require__.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    });
  var __webpack_exports__ = {};
  !(function () {
    "use strict";
    function e(t) {
      return (
        (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }),
        e(t)
      );
    }
    function t(t, s, i) {
      return (
        (s = (function (t) {
          var s = (function (t, s) {
            if ("object" !== e(t) || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var n = i.call(t, "string");
              if ("object" !== e(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === e(s) ? s : String(s);
        })(s)) in t
          ? Object.defineProperty(t, s, { value: i, enumerable: !0, configurable: !0, writable: !0 })
          : (t[s] = i),
        t
      );
    }
    __webpack_require__(81469);
    const s = (e) => "[object Object]" === Object.prototype.toString.call(e);
    function i(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    class n {
      constructor(e) {
        var t;
        (this._knownTypes = e instanceof Object ? ((t = e), Object.keys(t).map((e) => t[e])) : e), (this._listeners = {});
      }
      addEventListener(e, t) {
        if (Array.isArray(e))
          return void e.forEach((e) => {
            this.addEventListener(e, t);
          });
        if ("string" != typeof e) throw new Error("Event type must be a string or an array");
        const s = this._getListeners(e);
        if (-1 !== s.indexOf(t)) throw new Error("Listener is already registered.");
        s.push(t);
      }
      removeEventListener(e, t) {
        if (Array.isArray(e))
          return void e.forEach((e) => {
            this.removeEventListener(e, t);
          });
        if ("string" != typeof e) throw new Error("Event type must be a string or an array");
        const s = this._getListeners(e),
          i = s.indexOf(t);
        if (-1 === i) throw new Error("Unregistered listener cannot been removed.");
        s.splice(i, 1), s.length || delete this._listeners[e];
      }
      dispatchEvent(e) {
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (s.type && s.type !== e) throw new Error('Event payload must not contain member "type".');
        const n = (function (e) {
          for (var s = 1; s < arguments.length; s++) {
            var n = null != arguments[s] ? arguments[s] : {};
            s % 2
              ? i(Object(n), !0).forEach(function (s) {
                  t(e, s, n[s]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({ type: e }, s);
        (this._listeners[e] || []).forEach((e) => {
          e(n);
        });
      }
      get hasListeners() {
        return Object.keys(this._listeners).length > 0;
      }
      hasListener(e, t) {
        return "string" != typeof e ? e.every((e) => -1 !== this._getListeners(e).indexOf(t)) : -1 !== this._getListeners(e).indexOf(t);
      }
      _getListeners(e) {
        if (this._knownTypes && -1 === this._knownTypes.indexOf(e)) throw new Error(`Unknown event type: '${e}'`);
        let t = this._listeners[e];
        return t || ((t = []), (this._listeners[e] = t)), t;
      }
    }
    var a = { isFirefox: !1, isSafari: !1, isEdge: "undefined" != typeof EDGE && EDGE, isChrome: !0 };
    function o(e) {
      var t = "";
      return (
        e.forEach(function (e) {
          t += "".concat(e.date, " ").concat(e.lvl, ": ").concat(e.val, " \n");
        }),
        t
      );
    }
    var r = (function () {
        function e() {
          (this.loggers = []), (this.level = 2), (this.logEnabled = !1);
        }
        return (
          (e.prototype.addLogger = function (e) {
            if (!e.log || "function" != typeof e.log) throw new Error("Logger must have log() method");
            this.loggers.push(e);
          }),
          (e.prototype.getLogs = function () {
            for (var e = 0; e < this.loggers.length; e++) {
              var t = this.loggers[e];
              if (t.getLogs && "function" == typeof t.getLogs) return t.getLogs();
            }
            return "";
          }),
          (e.prototype.getSystemInfo = function () {
            for (var e = 0; e < this.loggers.length; e++) {
              var t = this.loggers[e];
              if (t.getSystemInfo && "function" == typeof t.getSystemInfo) return t.getSystemInfo();
            }
            return "";
          }),
          (e.prototype.subscribeToUnhandledErrors = function (e) {
            var t = this;
            self.onerror = function (s, i, n) {
              t.error("Unhandled error at ".concat(i, ":").concat(n), s), "function" == typeof e && e(s);
            };
          }),
          (e.prototype.logSystemInfo = function () {
            var e = this;
            this.getSystemInfo().then(function (t) {
              return e.log(t);
            });
          }),
          (e.prototype.getFormattedLogsWithInfo = function (e) {
            var t = this;
            return (
              void 0 === e && (e = []),
              this.getSystemInfo().then(function (s) {
                return "".concat(s, "\n").concat(e.join("\n"), "\n\n") + o(t.getLogs());
              })
            );
          }),
          (e.prototype.getFormattedLogs = function () {
            var e = this;
            return this.getSystemInfo().then(function (t) {
              return "".concat(t, " \n\n") + o(e.getLogs());
            });
          }),
          (e.prototype.clearLogs = function () {
            this.loggers.forEach(function (e) {
              e.clearLogs && "function" == typeof e.clearLogs && e.clearLogs();
            });
          }),
          (e.prototype.setLogLevel = function (e) {
            "number" == typeof e && e >= 0 ? (this.level = e) : this.warn("Unable to set log level, expected positive number, was", e);
          }),
          (e.prototype.setLogPermission = function (e) {
            this.logEnabled = e;
          }),
          (e.prototype._isLogAvailable = function () {
            return !a.isFirefox || this.logEnabled;
          }),
          (e.prototype.invokeLoggers = function (e, t) {
            this._isLogAvailable() &&
              this.loggers.forEach(function (s) {
                return s.log(e, t);
              });
          }),
          (e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.invokeLoggers(0, e);
          }),
          (e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.level >= 1 && this.invokeLoggers(1, e);
          }),
          (e.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.level >= 2 && this.invokeLoggers(2, e);
          }),
          (e.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.level >= 3 && this.invokeLoggers(3, e);
          }),
          e
        );
      })(),
      p = new r();
    (function () {
      function e() {}
      (e.prototype.log = function (e, t) {
        var s, i, n, a;
        if (self.console.debug.apply)
          switch (e) {
            case 3:
              (s = self.console).debug.apply(s, t);
              break;
            case 1:
              (i = self.console).warn.apply(i, t);
              break;
            case 0:
              (n = self.console).error.apply(n, t);
              break;
            default:
              (a = self.console).log.apply(a, t);
          }
        else this._logWithoutApply(e, t);
      }),
        (e.prototype._logWithoutApply = function (e, t) {
          t.forEach(function (t) {
            switch (e) {
              case 3:
                self.console.debug(t);
                break;
              case 1:
                self.console.warn(t);
                break;
              case 0:
                self.console.error(t);
                break;
              default:
                self.console.log(t);
            }
          });
        });
    })(),
      __webpack_require__(18472);
    var u,
      y = function () {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var n in (t = arguments[s])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          y.apply(this, arguments)
        );
      },
      c = function (e, t, s, i) {
        return new (s || (s = Promise))(function (n, a) {
          function o(e) {
            try {
              p(i.next(e));
            } catch (e) {
              a(e);
            }
          }
          function r(e) {
            try {
              p(i.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function p(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(o, r);
          }
          p((i = i.apply(e, t || [])).next());
        });
      },
      d = function (e, t) {
        var s,
          i,
          n,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
        return (
          (a = { next: r(0), throw: r(1), return: r(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function r(r) {
          return function (p) {
            return (function (r) {
              if (s) throw new TypeError("Generator is already executing.");
              for (; a && ((a = 0), r[0] && (o = 0)), o; )
                try {
                  if (
                    ((s = 1),
                    i &&
                      (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) &&
                      !(n = n.call(i, r[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (r = [2 & r[0], n.value]), r[0])) {
                    case 0:
                    case 1:
                      n = r;
                      break;
                    case 4:
                      return o.label++, { value: r[1], done: !1 };
                    case 5:
                      o.label++, (i = r[1]), (r = [0]);
                      continue;
                    case 7:
                      (r = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (!((n = (n = o.trys).length > 0 && n[n.length - 1]) || (6 !== r[0] && 2 !== r[0]))) {
                        o = 0;
                        continue;
                      }
                      if (3 === r[0] && (!n || (r[1] > n[0] && r[1] < n[3]))) {
                        o.label = r[1];
                        break;
                      }
                      if (6 === r[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = r);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(r);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  r = t.call(e, o);
                } catch (e) {
                  (r = [6, e]), (i = 0);
                } finally {
                  s = n = 0;
                }
              if (5 & r[0]) throw r[1];
              return { value: r[0] ? r[1] : void 0, done: !0 };
            })([r, p]);
          };
        }
      };
    !(function (e) {
      (e.REQUEST = "EN_request"), (e.RESPONSE = "EN_response"), (e.ERROR = "__error__");
    })(u || (u = {})),
      (function () {
        function e(e, t) {
          (this.channelName = e || ""),
            (this.requestHandlers = t),
            (this.uniqueMessageID = 0),
            (this.pendingMessages = new Map()),
            (this.handleMessage = this.handleMessage.bind(this));
        }
        (e.prototype.start = function () {
          window.addEventListener("message", this.handleMessage);
        }),
          (e.prototype.stop = function () {
            window.removeEventListener("message", this.handleMessage);
          }),
          (e.prototype.sendMessageToFrame = function (e, t, s) {
            return this.sendMessage(e.contentWindow, t, s);
          }),
          (e.prototype.sendMessageToParent = function (e, t) {
            return this.sendMessage(window.parent, e, t);
          }),
          (e.prototype.sendMessage = function (e, t, s) {
            var i = this;
            return new Promise(function (n, a) {
              var o = "".concat(i.channelName, "-").concat(++i.uniqueMessageID),
                r = { type: u.REQUEST, messageID: o, name: t, data: s };
              i.pendingMessages.set(o, { name: t, resolve: n, reject: a }), e.postMessage(r, "*");
            });
          }),
          (e.prototype.handleMessage = function (e) {
            return c(this, void 0, void 0, function () {
              return d(this, function (t) {
                if (!e.data) return [2];
                switch (e.data.type) {
                  case u.REQUEST:
                    return [2, this.handleRequest(e.data, e.source)];
                  case u.RESPONSE:
                    return [2, this.handleResponse(e.data)];
                  default:
                    return [2];
                }
                return [2];
              });
            });
          }),
          (e.prototype.handleRequest = function (e, t) {
            return c(this, void 0, void 0, function () {
              var s, i, n;
              return d(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (s = e.name), (i = this.requestHandlers[s]) ? [4, this.executeRequest(e, i)] : [2];
                  case 1:
                    return (n = a.sent()), t.postMessage(n, "*"), [2];
                }
              });
            });
          }),
          (e.prototype.executeRequest = function (e, t) {
            return c(this, void 0, void 0, function () {
              var s, i, n, a, o;
              return d(this, function (r) {
                switch (r.label) {
                  case 0:
                    (s = e.messageID), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 3, , 4]), [4, t(e.data || {})];
                  case 2:
                    return (i = r.sent()), [2, { type: u.RESPONSE, messageID: s, name: name, data: i }];
                  case 3:
                    return (
                      (n = r.sent()),
                      console.error(n),
                      (a = n),
                      [2, ((o = {}), (o[u.ERROR] = y(y({}, a), { stack: a.stack, message: a.message })), o)]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.handleResponse = function (e) {
            return c(this, void 0, void 0, function () {
              var t, s, i, n;
              return d(this, function (a) {
                return (
                  (t = e.messageID),
                  (s = this.pendingMessages.get(t))
                    ? ((i = s.resolve),
                      (n = s.reject),
                      e.data && e.data[u.ERROR] && n(e.data[u.ERROR]),
                      i(e.data),
                      this.pendingMessages.delete(t),
                      [2])
                    : [2]
                );
              });
            });
          });
      })();
    var l = [
      ".com",
      ".ad",
      ".ae",
      ".com.af",
      ".com.ag",
      ".com.ai",
      ".am",
      ".co.ao",
      ".com.ar",
      ".as",
      ".at",
      ".com.au",
      ".az",
      ".ba",
      ".com.bd",
      ".be",
      ".bf",
      ".bg",
      ".com.bh",
      ".bi",
      ".bj",
      ".com.bn",
      ".com.bo",
      ".com.br",
      ".bs",
      ".co.bw",
      ".by",
      ".com.bz",
      ".ca",
      ".cd",
      ".cf",
      ".cg",
      ".ch",
      ".ci",
      ".co.ck",
      ".cl",
      ".cm",
      ".cn",
      ".com.co",
      ".co.cr",
      ".com.cu",
      ".cv",
      ".com.cy",
      ".cz",
      ".de",
      ".dj",
      ".dk",
      ".dm",
      ".com.do",
      ".dz",
      ".com.ec",
      ".ee",
      ".com.eg",
      ".es",
      ".com.et",
      ".fi",
      ".com.fj",
      ".fm",
      ".fr",
      ".ga",
      ".ge",
      ".gg",
      ".com.gh",
      ".com.gi",
      ".gl",
      ".gm",
      ".gp",
      ".gr",
      ".com.gt",
      ".gy",
      ".com.hk",
      ".hn",
      ".hr",
      ".ht",
      ".hu",
      ".co.id",
      ".ie",
      ".co.il",
      ".im",
      ".co.in",
      ".iq",
      ".is",
      ".it",
      ".je",
      ".com.jm",
      ".jo",
      ".co.jp",
      ".co.ke",
      ".com.kh",
      ".ki",
      ".kg",
      ".co.kr",
      ".com.kw",
      ".kz",
      ".la",
      ".com.lb",
      ".li",
      ".lk",
      ".co.ls",
      ".lt",
      ".lu",
      ".lv",
      ".com.ly",
      ".co.ma",
      ".md",
      ".me",
      ".mg",
      ".mk",
      ".ml",
      ".mn",
      ".ms",
      ".com.mt",
      ".mu",
      ".mv",
      ".mw",
      ".com.mx",
      ".com.my",
      ".co.mz",
      ".com.na",
      ".com.nf",
      ".com.ng",
      ".com.ni",
      ".ne",
      ".nl",
      ".no",
      ".com.np",
      ".nr",
      ".nu",
      ".co.nz",
      ".com.om",
      ".com.pa",
      ".com.pe",
      ".com.ph",
      ".com.pk",
      ".pl",
      ".pn",
      ".com.pr",
      ".ps",
      ".pt",
      ".com.py",
      ".com.qa",
      ".ro",
      ".ru",
      ".rw",
      ".com.sa",
      ".com.sb",
      ".sc",
      ".se",
      ".com.sg",
      ".sh",
      ".si",
      ".sk",
      ".com.sl",
      ".sn",
      ".so",
      ".sm",
      ".st",
      ".com.sv",
      ".td",
      ".tg",
      ".co.th",
      ".com.tj",
      ".tk",
      ".tl",
      ".tm",
      ".tn",
      ".to",
      ".com.tr",
      ".tt",
      ".com.tw",
      ".co.tz",
      ".com.ua",
      ".co.ug",
      ".co.uk",
      ".com.uy",
      ".co.uz",
      ".com.vc",
      ".co.ve",
      ".vg",
      ".co.vi",
      ".com.vn",
      ".vu",
      ".ws",
      ".rs",
      ".co.za",
      ".co.zm",
      ".co.zw",
      ".cat"
    ];
    function T(e) {
      return function (t) {
        var s = e.exec(t);
        return s ? s[1] : t;
      };
    }
    var E = {
        Baidu: {
          regex: /^https?:\/\/([^./]+\.)?baidu\.(com|cn)/i,
          content: "#container",
          searchBox: "input[name=wd]",
          allowedElements: "h3.t a[data-click], .f font[size='-1']",
          bannedSubelements: "span.g, .m, .c",
          titleTrim: T(/(.+)_\u767E\u5EA6\u641C\u7D22/)
        },
        Bing: {
          regex: /^https?:\/\/([^./]+\.)?bing\.com\/search/i,
          content: "#results_container, #b_results",
          searchBox: "input[name=q]",
          allowedElements: "div.sb_tlst a, div.sa_mc p, .b_algo h2 a, .b_algo .b_caption p"
        },
        Daum: {
          regex: /^https?:\/\/search\.daum\.net\/search/i,
          content: "#mArticle .inner_article",
          searchBox: "input[name=q]",
          allowedElements: ".coll_cont ul .wrap_tit a, .coll_cont ul .f_eb.desc",
          titleTrim: T(/(.+)\s\u2013/)
        },
        Google: {
          regex: (function () {
            for (var e = [], t = 0; t < l.length; t++) e[t] = l[t].replace(/\./g, "\\.");
            return new RegExp("^https?://www\\.google(".concat(e.join("|"), ")"), "i");
          })(),
          content: "#rso",
          searchBox: "input[name=q][type=hidden]",
          searchBoxAlt: "input[name=q]",
          allowedElements: "a.l, span.st",
          bannedSubelements: "span.f"
        },
        Naver: {
          regex: /^https?:\/\/search\.naver\.com\/search\.naver/i,
          content: "#content",
          searchBox: "input[name=query]",
          allowedElements: ".type01 dt a, .type01 dd:not(.txt_inline):not(.txt_block):not(.review):not([style*='display:none'])",
          titleTrim: T(/(.+)\s\u003A/)
        },
        Yahoo: {
          regex: /^https?:\/\/([^./]+\.)*yahoo\.com\/s(earch|\?)/i,
          content: "#web",
          searchBox: "input[name=p]",
          allowedElements: ".title, .aAbs",
          bannedSubelements: ".fc-2nd, .TumblrV2, .Img, .Video, .sys_news_auto"
        },
        YahooJP: {
          regex: /^https?:\/\/([^./]+\.)*yahoo\.co\.jp\/s(earch|\?)/i,
          content: "#WS2m",
          searchBox: "input[name=p]",
          allowedElements: "#WS2m .hd h3 a, #WS2m .bd p",
          bannedSubelements: "#WS2m .bd p.dlink",
          titleTrim: T(/\u300C(.+)\u300D/)
        },
        Yandex: {
          regex: /^https?:\/\/([^./]+\.)?yandex\.(com|ru)\/search/,
          content: ".serp-list",
          searchBox: "input[name=text]",
          allowedElements: ".serp-item__title-link, .serp-item__text",
          bannedSubelements: ".serp-item__date",
          titleTrim: T(/(.+)\s+\u2014/)
        }
      },
      f = {
        searchEngines: E,
        specialCandidates: {
          "nytimes.com": ["#story"],
          "youtube.com": ["#main"],
          "github.com": ['div[role="main"]'],
          "twitter.com": [".permalink-tweet-container"],
          "mba.mk.co.kr": ["#content > tbody > tr > td:nth-child(1)"],
          "evernote.com/why-evernote": ["body"],
          "evernote.com": ["#container"],
          "stage.evernote.com": ["#container"],
          "instagram.com": ["body > span > section > main > section > div > div > div"],
          "renovatio.zaytuna.edu": ["body"],
          "en.wikipedia.org": [".mw-mmv-wrapper", ".mw-content-container", "#content"],
          "mail.google.com": ['div[role="main"]'],
          "criterion.com": ["article.editorial.ed_base"],
          "yummly.com": ["div.Page"]
        },
        specialCases: {
          "tagesspiegel.de": ["div.ts-article-area"],
          "penny-arcade.com": ["#comic img"],
          "io9.gizmodo.com": ["div.main__content"],
          "aspicyperspective.com": ["div.entry-content"],
          "reddit.com": ["#siteTable"],
          "thewirecutter.com": ["div#content"],
          "katespade.com": ["div#pdpMain"],
          "threadless.com": ["section.product_section"],
          "yelp.com": ["div#bizBox"],
          "flickr.com": ["div#photo"],
          "instagr.am": ["div.stage > div.stage-inner"],
          "stackoverflow.com": ["#mainbar"],
          "makeprojects.com": ["div#guideMain"],
          "cookpad.com": ["div#main #recipe"],
          "imgur.com": ["div.image"],
          "smittenkitchen.com": ["div.entry"],
          "allrecipes.com": ["div#content-wrapper"],
          "qwantz.com": ["img.comic"],
          "questionablecontent.net": ["img#strip"],
          "cad-comic.com": ["div#content"],
          "twitter.com": [".permalink", "div.content-main", 'div[role="main"]'],
          "blog.evernote.com": [".post"],
          "outlook.office.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "outlook.live.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "outlook-sdf.live.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "inbox.google.com": [
            "[aria-expanded=true][aria-multiselectable=false],[aria-expanded=true][aria-multiselectable=true] .scroll-list-item-open"
          ],
          "nytimes.com": ["#story"],
          "linkedin.com": ['div[role="main"]'],
          "github.com": ['div[role="main"]'],
          "feastmagazine.com": [".main-content"],
          "instagram.com": ["body > span > section > main > div > div > article > div > div"],
          "en.wikipedia.org": [".mw-mmv-wrapper", ".mw-content-container", "#content"],
          "zmescience.com": ["#main"],
          "espn.com": [".main-content > article > div"],
          "yummly.com": ["div.Page"]
        },
        topSites: { youtube: "YouTube", linked_in: "LinkedIn", amazon: "Amazon" },
        googleCountryDomains: l
      },
      S = /^http[s]?:\/\/www[.]youtube[.]com\/watch[?][\S]*v=([a-z0-9_-]{5,20})/i,
      h = /[?&]v=([^&#]*)/,
      I = /^(http[s]?|ftp):\/\/.*\.pdf$/i,
      N = /^ftp:\/\/.*/i,
      g = /(http[s]?:)?\/\/.+/;
    function R(e) {
      void 0 === e && (e = window);
      var t = e.location.host;
      return /^www\./.test(t) && (t = t.substr(4)), t;
    }
    function x(e) {
      return void 0 === e && (e = window), e.location.pathname;
    }
    function m(e) {
      var t;
      void 0 === e && (e = window);
      var s = (function (e) {
        for (var t = -1, s = 0, i = 0; i < e.length; i++) {
          var n = e[i].width * e[i].height;
          n > s && ((t = i), (s = n));
        }
        return t >= 0 ? e[t] : null;
      })(e.document.querySelectorAll("img"));
      return null !== (t = null == s ? void 0 : s.getAttribute("src")) && void 0 !== t ? t : null;
    }
    function A() {
      for (var e = Object.keys(f.searchEngines), t = 0; t < e.length; t++)
        if (f.searchEngines[e[t]].regex.test(document.location.href)) return e[t];
      return null;
    }
    function C() {
      var e = /^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(
        document.location.href
      );
      return e ? e[1] : null;
    }
    function O() {
      var e = document.location.href;
      return /^https:\/\/mail\.google\.com\/mail\//.test(e);
    }
    function M() {
      var e, t;
      if (document.querySelector("embed[type='application/pdf']"))
        return "about:blank" !==
          (null === (e = document.querySelector("embed[type='application/pdf']")) || void 0 === e ? void 0 : e.getAttribute("src"))
          ? null === (t = document.querySelector("embed[type='application/pdf']")) || void 0 === t
            ? void 0
            : t.getAttribute("src")
          : document.location.href;
      if ("pdf.js" === document.domain) return document.location.href;
      if (/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href)) {
        for (var s = 0; s < document.scripts.length; s++)
          if (/gviewApp\.setFileData/.test(document.scripts[s].innerText)) {
            if (/mimeType.+application\/pdf/.test(document.scripts[s].innerText)) {
              var i = /^https?:\/\/docs\.google\.com\/viewer\?url=(.+?)(?:$|&)/.exec(document.location.href);
              if (i) return decodeURIComponent(i[1]);
            }
            break;
          }
      } else if (C()) return C();
      return null;
    }
    function v() {
      var e = document.title,
        t = A(),
        s = (function () {
          var e = document.querySelector("ytd-watch-flexy:not([hidden]) h1.title.ytd-video-primary-info-renderer");
          if (!e) return null;
          var t = e.textContent;
          return "".concat(null == t ? void 0 : t.trim(), " - YouTube");
        })();
      if ((s && (e = s), t))
        if (f.searchEngines[t].titleTrim) e = f.searchEngines[t].titleTrim(e);
        else {
          var i = e.split(" - ");
          e = e.replace(" - ".concat(i[i.length - 1]), "");
        }
      return M() && (e = a.isFirefox ? "PDF - ".concat(document.title) : "PDF - ".concat(document.domain)), e.trim();
    }
    function k(e) {
      var t,
        s,
        i = null != e ? e : window.location.href,
        n = function () {
          var e = h.exec(i);
          return e && e[1] ? e[1] : null;
        };
      if (S.test(i) && n()) return "https://img.youtube.com/vi/".concat(n(), "/hqdefault.jpg");
      var a = document.querySelector("[itemtype$='VideoObject'] [itemprop='thumbnailUrl'][href]");
      return a && null !== (s = null === (t = a.getAttribute("href")) || void 0 === t ? void 0 : t.trim()) && void 0 !== s ? s : null;
    }
    var D,
      P = {
        isFtpPage: function () {
          return N.test(document.location.href);
        },
        isPdfPage: function (e) {
          return void 0 === e && (e = document.location.href), !(a.isEdge || !document || !document.body) && I.test(e);
        },
        getThumbnail: function () {
          var e,
            t,
            s,
            i,
            n,
            a = "",
            o = k();
          if (o) a = o;
          else {
            var r = document.querySelector("meta[property='twitter:image'][content]");
            r
              ? (a = null !== (e = r.getAttribute("content")) && void 0 !== e ? e : "")
              : (r = document.querySelector("[itemtype$='ImageObject'] [itemprop='url'][src]"))
              ? (a = null !== (t = r.getAttribute("content")) && void 0 !== t ? t : "")
              : (r = document.querySelector("meta[property='og:image'][content]")) &&
                g.test(null !== (s = r.getAttribute("content")) && void 0 !== s ? s : "") &&
                (a = null !== (i = r.getAttribute("content")) && void 0 !== i ? i : "");
          }
          return (
            a.startsWith("://") && (a = "".concat(document.location.protocol, "//").concat(a.replace("://", ""))),
            a || (a = null !== (n = m(window)) && void 0 !== n ? n : ""),
            a
          );
        },
        getVideoThumbnail: k,
        getText: function e(t, s, i, n, a, o) {
          var r = s;
          if (t.nodeType === Node.TEXT_NODE) {
            var p;
            return (
              (p = o
                ? (function (e) {
                    var t = new RegExp(
                      ""
                        .concat(["-", "_", "–", "—", "·"].join("|"), "|")
                        .concat(
                          ["\\(", "\\)", "\\[", "\\]", "\\{", "\\}", "《", "》", "（", "）", "【", "】", "「", "」", "»"].join("|"),
                          "|"
                        )
                        .concat(["\\.", "!", ":", ";", '"', "'", ",", "\\?", "。", "、", "！", "，", "：", "…", "“", "”"].join("|"), "|")
                        .concat(
                          ["@", "#", "\\$", "%", "\\^", "&", "\\*", "\\+", "=", "`", "~", "/", "\\\\", "\\|", ">", "<", "●"].join("|")
                        ),
                      "g"
                    );
                    return e.replace(t, " ");
                  })(t.textContent.trim()).replace(/\s+/g, " ")
                : t.textContent.trim().replace(/\s+/g, " ")),
              " " === p || "" === p ? r : "".concat(r, " ").concat(p)
            );
          }
          if (t.nodeType === Node.ELEMENT_NODE && -1 === ["script", "noscript", "style"].indexOf(t.nodeName.toLowerCase())) {
            if (/^evernote.+Tools$/.test(t.id)) return r;
            for (var u = 0; u < t.childNodes.length; u++) if ((r = e(t.childNodes[u], r, i, 0, 0, o)).length > i) return r;
          }
          return r.trim();
        },
        getPageAttribures: function () {
          return { title: v(), url: document.location.href };
        },
        getTitle: v,
        getPdfUrl: M,
        isGmailThread: function () {
          if (O()) {
            var e = document.querySelectorAll("span > div > span > [src='images/cleardot.gif']"),
              t = document.querySelectorAll("div.bodycontainer > div.maincontent");
            return !(!e.length && !t.length);
          }
          return !1;
        },
        isGmail: O,
        isImageUrl: function (e) {
          return /\.(gif|jpe?g|tiff|png)$/i.test(e);
        },
        isSearchEngine: A,
        getFavIconUrl: function (e) {
          void 0 === e && (e = document);
          var t = e.querySelector("link[rel~='icon']");
          return t ? t.getAttribute("href") : "".concat(document.location.origin, "/favicon.ico");
        },
        getThumbNail: function (e) {
          return void 0 === e && (e = window), m(e);
        },
        getArticleTags: function (e) {
          void 0 === e && (e = window);
          var t = Array.from(e.document.getElementsByTagName("article"));
          return t.length ? t : null;
        },
        getBiggestImage: m,
        getSpecialCandidate: function (e) {
          void 0 === e && (e = window);
          var t = R(e),
            s = x(e),
            i = f.specialCandidates[t] || f.specialCandidates[t + s];
          if (i) {
            var n = e.document || document,
              a = i.find(function (e) {
                return Boolean(n.querySelector(e));
              });
            if (a) return n.querySelector(a);
          }
          return null;
        },
        getPathName: x,
        getSpecialCaseArticle: function (e) {
          void 0 === e && (e = window);
          var t = R(e);
          if (f.specialCases[t]) {
            var s = e.document || document,
              i = f.specialCases[t].join(","),
              n = s.querySelector(i);
            if (n) return n;
          }
          return null;
        },
        getPageHost: R
      },
      U = (function () {
        function e(e) {
          var t = e.outputFormat,
            s = void 0 === t ? "image/jpg" : t,
            i = e._window;
          (this.outputFormat = s), (this._window = i || window);
        }
        return (
          (e.prototype.convert = function (e) {
            var t = this;
            return new Promise(function (s, i) {
              var n = new Image();
              (n.crossOrigin = "Anonymous"),
                (n.onload = function () {
                  var e = t._window.document.createElement("CANVAS"),
                    a = e.getContext("2d");
                  (e.height = n.naturalHeight), (e.width = n.naturalWidth), t._isNotEmptyImage(n) && a.drawImage(n, 0, 0);
                  try {
                    var o = e.toDataURL(t.outputFormat);
                    s(o);
                  } catch (e) {
                    i(e);
                  }
                }),
                (n.onerror = function (e) {
                  i(e);
                }),
                (n.src = e),
                (n.complete || void 0 === n.complete) &&
                  ((n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="), (n.src = e));
            });
          }),
          (e.prototype.convertSync = function (e, t) {
            var s = /^(https?:\/\/.[^\/]+)\/?/.exec(t);
            if (!s || s[1] === this._window.document.location.origin) {
              if (!e.naturalHeight && !e.naturalWidth) return t;
              var i = this._window.document.createElement("CANVAS"),
                n = i.getContext("2d");
              return (
                (i.height = e.naturalHeight || 1), (i.width = e.naturalWidth || 1), n.drawImage(e, 0, 0), i.toDataURL(this.outputFormat)
              );
            }
            return t;
          }),
          (e.prototype._isNotEmptyImage = function (e) {
            var t = e.naturalHeight,
              s = e.naturalWidth;
            return 0 !== t && 0 !== s;
          }),
          e
        );
      })();
    !(function () {
      function e(e) {
        var t = e._window;
        (this._window = t), (this.converter = new U({ _window: t }));
      }
      (e.prototype.isImageSafeSize = function (e) {
        return (e.naturalWidth || 0) + (e.naturalHeight || 0) < 1800;
      }),
        (e.prototype.imageToBase64 = function (e) {
          if (!e || "img" !== e.tagName.toLowerCase()) return "";
          var t = (e.src || "").trim();
          if (
            (t.startsWith("//") && (t = this._window.location.protocol + t),
            t.startsWith("data:") || t.startsWith("file://") || !/^https?:\/\//i.test(t))
          )
            return t;
          if (!/\.gif($|\?)/i.test(t) && (e.naturalWidth || e.naturalHeight) && this.isImageSafeSize(e))
            try {
              return this.converter.convertSync(e, t);
            } catch (e) {
              p.warn("Image download error", e);
            }
          return t;
        }),
        (e.prototype.svgToBase64 = function (e) {
          return new U({ _window: this._window }).convert(e);
        });
    })();
    var b = new Uint8Array(16);
    function _() {
      if (
        !D &&
        !(D =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return D(b);
    }
    for (
      var L = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        w = function (e) {
          return "string" == typeof e && L.test(e);
        },
        G = [],
        B = 0;
      B < 256;
      ++B
    )
      G.push((B + 256).toString(16).substr(1));
    var F = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        s = (
          G[e[t + 0]] +
          G[e[t + 1]] +
          G[e[t + 2]] +
          G[e[t + 3]] +
          "-" +
          G[e[t + 4]] +
          G[e[t + 5]] +
          "-" +
          G[e[t + 6]] +
          G[e[t + 7]] +
          "-" +
          G[e[t + 8]] +
          G[e[t + 9]] +
          "-" +
          G[e[t + 10]] +
          G[e[t + 11]] +
          G[e[t + 12]] +
          G[e[t + 13]] +
          G[e[t + 14]] +
          G[e[t + 15]]
        ).toLowerCase();
      if (!w(s)) throw TypeError("Stringified UUID is invalid");
      return s;
    };
    function q(e, t, s) {
      function i(e, i, n, a) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              e = unescape(encodeURIComponent(e));
              for (var t = [], s = 0; s < e.length; ++s) t.push(e.charCodeAt(s));
              return t;
            })(e)),
          "string" == typeof i &&
            (i = (function (e) {
              if (!w(e)) throw TypeError("Invalid UUID");
              var t,
                s = new Uint8Array(16);
              return (
                (s[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
                (s[1] = (t >>> 16) & 255),
                (s[2] = (t >>> 8) & 255),
                (s[3] = 255 & t),
                (s[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
                (s[5] = 255 & t),
                (s[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
                (s[7] = 255 & t),
                (s[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
                (s[9] = 255 & t),
                (s[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
                (s[11] = (t / 4294967296) & 255),
                (s[12] = (t >>> 24) & 255),
                (s[13] = (t >>> 16) & 255),
                (s[14] = (t >>> 8) & 255),
                (s[15] = 255 & t),
                s
              );
            })(i)),
          16 !== i.length)
        )
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var o = new Uint8Array(16 + e.length);
        if ((o.set(i), o.set(e, i.length), ((o = s(o))[6] = (15 & o[6]) | t), (o[8] = (63 & o[8]) | 128), n)) {
          a = a || 0;
          for (var r = 0; r < 16; ++r) n[a + r] = o[r];
          return n;
        }
        return F(o);
      }
      try {
        i.name = e;
      } catch (e) {}
      return (i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"), i;
    }
    function X(e) {
      return 14 + (((e + 64) >>> 9) << 4) + 1;
    }
    function V(e, t) {
      var s = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (s >> 16)) << 16) | (65535 & s);
    }
    function W(e, t, s, i, n, a) {
      return V(((o = V(V(t, e), V(i, a))) << (r = n)) | (o >>> (32 - r)), s);
      var o, r;
    }
    function j(e, t, s, i, n, a, o) {
      return W((t & s) | (~t & i), e, t, n, a, o);
    }
    function H(e, t, s, i, n, a, o) {
      return W((t & i) | (s & ~i), e, t, n, a, o);
    }
    function z(e, t, s, i, n, a, o) {
      return W(t ^ s ^ i, e, t, n, a, o);
    }
    function Y(e, t, s, i, n, a, o) {
      return W(s ^ (t | ~i), e, t, n, a, o);
    }
    q("v3", 48, function (e) {
      if ("string" == typeof e) {
        var t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (var s = 0; s < t.length; ++s) e[s] = t.charCodeAt(s);
      }
      return (function (e) {
        for (var t = [], s = 32 * e.length, i = "0123456789abcdef", n = 0; n < s; n += 8) {
          var a = (e[n >> 5] >>> n % 32) & 255,
            o = parseInt(i.charAt((a >>> 4) & 15) + i.charAt(15 & a), 16);
          t.push(o);
        }
        return t;
      })(
        (function (e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[X(t) - 1] = t);
          for (var s = 1732584193, i = -271733879, n = -1732584194, a = 271733878, o = 0; o < e.length; o += 16) {
            var r = s,
              p = i,
              u = n,
              y = a;
            (s = j(s, i, n, a, e[o], 7, -680876936)),
              (a = j(a, s, i, n, e[o + 1], 12, -389564586)),
              (n = j(n, a, s, i, e[o + 2], 17, 606105819)),
              (i = j(i, n, a, s, e[o + 3], 22, -1044525330)),
              (s = j(s, i, n, a, e[o + 4], 7, -176418897)),
              (a = j(a, s, i, n, e[o + 5], 12, 1200080426)),
              (n = j(n, a, s, i, e[o + 6], 17, -1473231341)),
              (i = j(i, n, a, s, e[o + 7], 22, -45705983)),
              (s = j(s, i, n, a, e[o + 8], 7, 1770035416)),
              (a = j(a, s, i, n, e[o + 9], 12, -1958414417)),
              (n = j(n, a, s, i, e[o + 10], 17, -42063)),
              (i = j(i, n, a, s, e[o + 11], 22, -1990404162)),
              (s = j(s, i, n, a, e[o + 12], 7, 1804603682)),
              (a = j(a, s, i, n, e[o + 13], 12, -40341101)),
              (n = j(n, a, s, i, e[o + 14], 17, -1502002290)),
              (s = H(s, (i = j(i, n, a, s, e[o + 15], 22, 1236535329)), n, a, e[o + 1], 5, -165796510)),
              (a = H(a, s, i, n, e[o + 6], 9, -1069501632)),
              (n = H(n, a, s, i, e[o + 11], 14, 643717713)),
              (i = H(i, n, a, s, e[o], 20, -373897302)),
              (s = H(s, i, n, a, e[o + 5], 5, -701558691)),
              (a = H(a, s, i, n, e[o + 10], 9, 38016083)),
              (n = H(n, a, s, i, e[o + 15], 14, -660478335)),
              (i = H(i, n, a, s, e[o + 4], 20, -405537848)),
              (s = H(s, i, n, a, e[o + 9], 5, 568446438)),
              (a = H(a, s, i, n, e[o + 14], 9, -1019803690)),
              (n = H(n, a, s, i, e[o + 3], 14, -187363961)),
              (i = H(i, n, a, s, e[o + 8], 20, 1163531501)),
              (s = H(s, i, n, a, e[o + 13], 5, -1444681467)),
              (a = H(a, s, i, n, e[o + 2], 9, -51403784)),
              (n = H(n, a, s, i, e[o + 7], 14, 1735328473)),
              (s = z(s, (i = H(i, n, a, s, e[o + 12], 20, -1926607734)), n, a, e[o + 5], 4, -378558)),
              (a = z(a, s, i, n, e[o + 8], 11, -2022574463)),
              (n = z(n, a, s, i, e[o + 11], 16, 1839030562)),
              (i = z(i, n, a, s, e[o + 14], 23, -35309556)),
              (s = z(s, i, n, a, e[o + 1], 4, -1530992060)),
              (a = z(a, s, i, n, e[o + 4], 11, 1272893353)),
              (n = z(n, a, s, i, e[o + 7], 16, -155497632)),
              (i = z(i, n, a, s, e[o + 10], 23, -1094730640)),
              (s = z(s, i, n, a, e[o + 13], 4, 681279174)),
              (a = z(a, s, i, n, e[o], 11, -358537222)),
              (n = z(n, a, s, i, e[o + 3], 16, -722521979)),
              (i = z(i, n, a, s, e[o + 6], 23, 76029189)),
              (s = z(s, i, n, a, e[o + 9], 4, -640364487)),
              (a = z(a, s, i, n, e[o + 12], 11, -421815835)),
              (n = z(n, a, s, i, e[o + 15], 16, 530742520)),
              (s = Y(s, (i = z(i, n, a, s, e[o + 2], 23, -995338651)), n, a, e[o], 6, -198630844)),
              (a = Y(a, s, i, n, e[o + 7], 10, 1126891415)),
              (n = Y(n, a, s, i, e[o + 14], 15, -1416354905)),
              (i = Y(i, n, a, s, e[o + 5], 21, -57434055)),
              (s = Y(s, i, n, a, e[o + 12], 6, 1700485571)),
              (a = Y(a, s, i, n, e[o + 3], 10, -1894986606)),
              (n = Y(n, a, s, i, e[o + 10], 15, -1051523)),
              (i = Y(i, n, a, s, e[o + 1], 21, -2054922799)),
              (s = Y(s, i, n, a, e[o + 8], 6, 1873313359)),
              (a = Y(a, s, i, n, e[o + 15], 10, -30611744)),
              (n = Y(n, a, s, i, e[o + 6], 15, -1560198380)),
              (i = Y(i, n, a, s, e[o + 13], 21, 1309151649)),
              (s = Y(s, i, n, a, e[o + 4], 6, -145523070)),
              (a = Y(a, s, i, n, e[o + 11], 10, -1120210379)),
              (n = Y(n, a, s, i, e[o + 2], 15, 718787259)),
              (i = Y(i, n, a, s, e[o + 9], 21, -343485551)),
              (s = V(s, r)),
              (i = V(i, p)),
              (n = V(n, u)),
              (a = V(a, y));
          }
          return [s, i, n, a];
        })(
          (function (e) {
            if (0 === e.length) return [];
            for (var t = 8 * e.length, s = new Uint32Array(X(t)), i = 0; i < t; i += 8) s[i >> 5] |= (255 & e[i / 8]) << i % 32;
            return s;
          })(e),
          8 * e.length
        )
      );
    });
    var K = function (e, t, s) {
      var i = (e = e || {}).random || (e.rng || _)();
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
        s = s || 0;
        for (var n = 0; n < 16; ++n) t[s + n] = i[n];
        return t;
      }
      return F(i);
    };
    function $(e, t, s, i) {
      switch (e) {
        case 0:
          return (t & s) ^ (~t & i);
        case 1:
        case 3:
          return t ^ s ^ i;
        case 2:
          return (t & s) ^ (t & i) ^ (s & i);
      }
    }
    function Z(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    q("v5", 80, function (e) {
      var t = [1518500249, 1859775393, 2400959708, 3395469782],
        s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof e) {
        var i = unescape(encodeURIComponent(e));
        e = [];
        for (var n = 0; n < i.length; ++n) e.push(i.charCodeAt(n));
      } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
      e.push(128);
      for (var a = e.length / 4 + 2, o = Math.ceil(a / 16), r = new Array(o), p = 0; p < o; ++p) {
        for (var u = new Uint32Array(16), y = 0; y < 16; ++y)
          u[y] = (e[64 * p + 4 * y] << 24) | (e[64 * p + 4 * y + 1] << 16) | (e[64 * p + 4 * y + 2] << 8) | e[64 * p + 4 * y + 3];
        r[p] = u;
      }
      (r[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
        (r[o - 1][14] = Math.floor(r[o - 1][14])),
        (r[o - 1][15] = (8 * (e.length - 1)) & 4294967295);
      for (var c = 0; c < o; ++c) {
        for (var d = new Uint32Array(80), l = 0; l < 16; ++l) d[l] = r[c][l];
        for (var T = 16; T < 80; ++T) d[T] = Z(d[T - 3] ^ d[T - 8] ^ d[T - 14] ^ d[T - 16], 1);
        for (var E = s[0], f = s[1], S = s[2], h = s[3], I = s[4], N = 0; N < 80; ++N) {
          var g = Math.floor(N / 20),
            R = (Z(E, 5) + $(g, f, S, h) + I + t[g] + d[N]) >>> 0;
          (I = h), (h = S), (S = Z(f, 30) >>> 0), (f = E), (E = R);
        }
        (s[0] = (s[0] + E) >>> 0),
          (s[1] = (s[1] + f) >>> 0),
          (s[2] = (s[2] + S) >>> 0),
          (s[3] = (s[3] + h) >>> 0),
          (s[4] = (s[4] + I) >>> 0);
      }
      return [
        (s[0] >> 24) & 255,
        (s[0] >> 16) & 255,
        (s[0] >> 8) & 255,
        255 & s[0],
        (s[1] >> 24) & 255,
        (s[1] >> 16) & 255,
        (s[1] >> 8) & 255,
        255 & s[1],
        (s[2] >> 24) & 255,
        (s[2] >> 16) & 255,
        (s[2] >> 8) & 255,
        255 & s[2],
        (s[3] >> 24) & 255,
        (s[3] >> 16) & 255,
        (s[3] >> 8) & 255,
        255 & s[3],
        (s[4] >> 24) & 255,
        (s[4] >> 16) & 255,
        (s[4] >> 8) & 255,
        255 & s[4]
      ];
    });
    var J = (function () {
      function e() {
        if (e.instance) return e.instance;
        this.initialize(), (e.instance = this);
      }
      return (
        (e.getInstance = function () {
          return e.instance;
        }),
        (e.prototype.initialize = function () {
          (this.clipId = K()),
            (this.clipType = null),
            (this.origin = null),
            (this.domTotalNodesCount = 0),
            (this.domDoneNodesCount = 0),
            (this.noteSize = 0),
            (this.noteContentSize = 0),
            (this.serializationElapsedTime = 0),
            (this.resourceResolverTime = 0),
            (this.resourceCount = 0),
            (this.clipSuccessTime = 0),
            (this.stage = null),
            (this.errorType = null),
            (this.clipStatus = null),
            (this.localTime = new Date().toLocaleString()),
            (this.isBookmark = !1),
            (this.bookmarkReason = null),
            (this.paywallConfidenceLevel = 0);
        }),
        (e.prototype.setClipType = function (e) {
          this.clipType = e;
        }),
        (e.prototype.getClipType = function () {
          return this.clipType;
        }),
        (e.prototype.setOrigin = function (e) {
          this.origin = e;
        }),
        (e.prototype.getOrigin = function () {
          return this.origin;
        }),
        (e.prototype.setDomTotalNodesCount = function (e) {
          this.domTotalNodesCount = e;
        }),
        (e.prototype.getDomTotalNodesCount = function () {
          return this.domTotalNodesCount;
        }),
        (e.prototype.setDomDoneNodesCount = function (e) {
          this.domDoneNodesCount = e;
        }),
        (e.prototype.getDomDoneNodesCount = function () {
          return this.domDoneNodesCount;
        }),
        (e.prototype.setNoteSize = function (e) {
          this.noteSize = e;
        }),
        (e.prototype.getNoteSize = function () {
          return this.noteSize;
        }),
        (e.prototype.setNoteContentSize = function (e) {
          this.noteContentSize = e;
        }),
        (e.prototype.getNoteContentSize = function () {
          return this.noteContentSize;
        }),
        (e.prototype.setSerializationElapsedTime = function (e) {
          this.serializationElapsedTime = e;
        }),
        (e.prototype.getSerializationElapsedTime = function () {
          return this.serializationElapsedTime;
        }),
        (e.prototype.setResourceResolverTime = function (e) {
          this.resourceResolverTime = e;
        }),
        (e.prototype.getResourceResolverTime = function () {
          return this.resourceResolverTime;
        }),
        (e.prototype.incrementResourceCount = function () {
          this.setResourceCount(this.resourceCount + 1);
        }),
        (e.prototype.setResourceCount = function (e) {
          this.resourceCount = e;
        }),
        (e.prototype.getResourceCount = function () {
          return this.resourceCount;
        }),
        (e.prototype.setClipSuccessTime = function (e) {
          this.clipSuccessTime = e;
        }),
        (e.prototype.getClipSuccessTime = function () {
          return this.clipSuccessTime;
        }),
        (e.prototype.setClipStage = function (e) {
          this.clipStage = e;
        }),
        (e.prototype.getClipStage = function () {
          return this.clipStage;
        }),
        (e.prototype.setErrorType = function (e) {
          this.errorType = e;
        }),
        (e.prototype.getErrorType = function () {
          return this.errorType;
        }),
        (e.prototype.setClipStatus = function (e) {
          this.clipStatus = e;
        }),
        (e.prototype.getClipStatus = function () {
          return this.clipStatus;
        }),
        (e.prototype.setLocalTime = function (e) {
          this.localTime = e;
        }),
        (e.prototype.getLocalTime = function () {
          return this.localTime;
        }),
        (e.prototype.setIsBookmark = function (e) {
          this.isBookmark = e;
        }),
        (e.prototype.getIsBookmark = function () {
          return this.isBookmark;
        }),
        (e.prototype.setBookmarkReason = function (e) {
          this.bookmarkReason = e;
        }),
        (e.prototype.getBookmarkReason = function () {
          return this.bookmarkReason;
        }),
        (e.prototype.setPaywallConfidenceLevel = function (e) {
          this.paywallConfidenceLevel = e;
        }),
        (e.prototype.getPaywallConfidenceLevel = function () {
          return this.paywallConfidenceLevel;
        }),
        (e.prototype.setClipperCoreVersion = function (e) {
          this.clipperCoreVersion = e;
        }),
        (e.prototype.getClipperCoreVersion = function () {
          return this.clipperCoreVersion;
        }),
        (e.instance = new e()),
        e
      );
    })().getInstance();
    (function () {
      function e() {}
      (e.getEvent = function () {
        return "success" === J.clipStatus
          ? J
          : {
              clipId: (e = J).clipId,
              clipperCoreVersion: e.clipperCoreVersion,
              clipType: e.clipType,
              origin: e.origin,
              stage: e.stage,
              errorType: e.errorType,
              clipStatus: e.clipStatus,
              localTime: e.localTime,
              isBookmark: e.isBookmark,
              bookmarkReason: e.bookmarkReason,
              paywallConfidenceLevel: e.paywallConfidenceLevel
            };
        var e;
      }),
        (e.getBlankEvent = function () {
          return J.initialize(), J;
        }),
        (e.reinitializeEvent = function () {
          J.initialize();
        });
    })(),
      (function () {
        function e() {
          (this.startTime = null), (this.endTime = null);
        }
        (e.prototype.startTimer = function () {
          this.startTime = new Date();
        }),
          (e.prototype.stopTimer = function () {
            this.endTime = new Date();
          }),
          (e.prototype.getDuration = function () {
            return this.endTime && this.startTime ? this.endTime.getTime() - this.startTime.getTime() : 0;
          });
      })();
    const Q = self.chrome || chrome;
    self.topee;
    var ee,
      te,
      se,
      ie,
      ne = Q;
    class ae {
      getAcceptLanguages() {
        return new Promise((e, t) => {
          ne.i18n.getAcceptLanguages((s) => {
            const i = ne.runtime.lastError;
            return i ? t(i) : e(s);
          });
        });
      }
      getMessage(e, t) {
        return ne.i18n.getMessage(e, t);
      }
      getUILanguage() {
        return ne.i18n.getUILanguage();
      }
    }
    function oe(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function re(e) {
      for (var s = 1; s < arguments.length; s++) {
        var i = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? oe(Object(i), !0).forEach(function (s) {
              t(e, s, i[s]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : oe(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
      }
      return e;
    }
    !(function (e) {
      (e.FORWARD_FETCH_REQUEST = "EN_forwardFetchRequest"),
        (e.REPORT_PROGRESS = "EN_progress"),
        (e.SERIALIZE_ALL = "EN_SerializeAll"),
        (e.SERIALIZE_TO = "EN_SerializeTo"),
        (e.SERIALIZE = "EN_serialize");
    })(ee || (ee = {})),
      (function (e) {
        (e.ARTICLE = "article"),
          (e.FULL_PAGE = "fullPage"),
          (e.SIMPLIFIED = "simplified"),
          (e.PDF = "pdf"),
          (e.EMAIL = "email"),
          (e.SELECTION = "selection"),
          (e.BOOKMARK = "bookmark"),
          (e.SCREENSHOT = "screenshot"),
          (e.TOP_SITE = "topsite");
      })(te || (te = {})),
      (function (e) {
        e.SERIALIZE_ERROR = "SRLZ";
      })(se || (se = {})),
      (function (e) {
        (e.SERIALIZE_FAILED = "SERIALIZE_FAILED"),
          (e.NOTE_SIZE_EXCEEDED = "SR_NOTE_SIZE_EXCEEDED"),
          (e.SERIALIZE_TIMEOUT = "SERIALIZE_TIMEOUT");
      })(ie || (ie = {}));
    const pe = "clipperError",
      ue = re(
        re({}, te),
        {},
        {
          MULTI_SELECT: "multiSelect",
          DEFAULT_CLIP_TYPES: te.ARTICLE,
          CONTEXT_IMAGE: "contextMenuImage",
          CONTEXT_SCREENSHOT: "contextMenuScreenshot",
          LOGIN: "login"
        }
      ),
      ye = Boolean(!1),
      ce = (Object.freeze({ alert: "alert" }), ue.FULL_PAGE, ue.BOOKMARK, ue.CONTEXT_SCREENSHOT, "hasAnyLoggedInAccount");
    class de {
      setTitle(e) {
        const { title: t, tabId: s } = e;
        return ye ? (ne.browserAction.setTitle({ title: t, tabId: s }), Promise.resolve()) : ne.action.setTitle({ title: t, tabId: s });
      }
      get onClicked() {
        const e = ye ? ne.browserAction : ne.action;
        return { addListener: (t) => e.onClicked.addListener(t), removeListener: (t) => e.onClicked.removeListener(t) };
      }
      disable(e) {
        return ne.action.disable(e);
      }
      enable(e) {
        return ne.action.enable(e);
      }
      setIcon(e) {
        return new Promise((t, s) => {
          ne.action.setIcon({ path: e }, () => {
            const e = ne.runtime.lastError;
            return e ? s(e) : t();
          });
        });
      }
    }
    class le {
      getURL(e) {
        return ne.runtime.getURL(e);
      }
      getManifest() {
        return ne.runtime.getManifest();
      }
      get onMessage() {
        return { addListener: (e) => ne.runtime.onMessage.addListener(e) };
      }
      sendMessage(e) {
        return ne.runtime.sendMessage(void 0, e);
      }
      get isGetManifestApiAvailable() {
        return Boolean(ne && ne.runtime && ((e = ne.runtime.getManifest), Boolean(e && "function" == typeof e)));
        var e;
      }
      reload() {
        if (!ne.runtime.reload) {
          if (!chrome || !chrome.runtime || "function" != typeof chrome.runtime.restart)
            throw new Error("WebClipper cannot be reloaded since you're using kiosk mode");
          chrome.runtime.restart();
        }
        ne.runtime.reload();
      }
    }
    class Te {
      captureVisibleTab(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return ne.tabs.captureVisibleTab
          ? new Promise((s, i) => {
              ne.tabs.captureVisibleTab(e, t, (e) => {
                const t = ne.runtime.lastError;
                return t ? i(t) : s(e);
              });
            })
          : Promise.reject(new TypeError("Method `captureVisibleTab` not defined."));
      }
      getZoom(e) {
        return new Promise((t, s) => {
          ne.tabs.getZoom(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      query(e) {
        return new Promise((t, s) => {
          ne.tabs.query(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      sendMessage(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return new Promise((i, n) => {
          ne.tabs.sendMessage(e, t, s, (e) => {
            const t = ne.runtime.lastError;
            return t ? n(t) : i(e);
          });
        });
      }
      get onUpdated() {
        return { addListener: (e) => ne.tabs.onUpdated.addListener(e), removeListener: (e) => ne.tabs.onUpdated.removeListener(e) };
      }
      get onActivated() {
        return { addListener: (e) => ne.tabs.onActivated.addListener(e), removeListener: (e) => ne.tabs.onActivated.removeListener(e) };
      }
      get onRemoved() {
        return { addListener: (e) => ne.tabs.onRemoved.addListener(e), removeListener: (e) => ne.tabs.onRemoved.removeListener(e) };
      }
      get TAB_ID_NONE() {
        return ne.tabs.TAB_ID_NONE;
      }
      remove(e) {
        return new Promise((t, s) => {
          ne.tabs.remove(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      create(e) {
        return new Promise((t, s) => {
          ne.tabs.create(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      update(e, t) {
        return new Promise((s, i) => {
          ne.tabs.update(e, t, (e) => {
            const t = ne.runtime.lastError;
            return t ? i(t) : s(e);
          });
        });
      }
      highlight(e) {
        return new Promise((t, s) => {
          ne.tabs.highlight(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      get(e) {
        return new Promise((t, s) => {
          ne.tabs.get(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
    }
    class Ee {
      update(e, t) {
        return new Promise((s, i) => {
          try {
            const i = "boolean" == typeof t.focused ? t.focused : void 0;
            ne.windows.update(e, { focused: i }, () => s());
          } catch (e) {
            i(e);
          }
        });
      }
      create(e, t) {
        ne.windows.create(e, t);
      }
      get onRemoved() {
        return { addListener: (e) => ne.windows.onRemoved.addListener(e), removeListener: (e) => ne.windows.onRemoved.removeListener(e) };
      }
      remove(e) {
        return new Promise((t, s) => {
          try {
            ne.windows.remove(e, t);
          } catch (e) {
            s(e);
          }
        });
      }
    }
    class fe {
      create() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return ne.contextMenus.create(e, t);
      }
      update(e, t) {
        return new Promise((s, i) => {
          ne.contextMenus.update(e, t, () => {
            const e = chrome.runtime.lastError;
            return e ? i(e) : s();
          });
        });
      }
      remove(e) {
        return new Promise((t, s) => {
          ne.contextMenus.remove(e, () => {
            const e = ne.runtime.lastError;
            return e ? s(e) : t();
          });
        });
      }
      removeAll() {
        return new Promise((e, t) => {
          ne.contextMenus.removeAll(() => {
            const s = ne.runtime.lastError;
            return s ? t(s) : e();
          });
        });
      }
      get onClicked() {
        return {
          addListener: (e) => {
            ne.contextMenus.onClicked.addListener(e);
          },
          removeListener: (e) => {
            ne.contextMenus.onClicked.removeListener(e);
          }
        };
      }
    }
    const { isPdfPage: Se } = P,
      he = /^(http[s]?|ftp):\/\/.+/,
      Ie = (e) => !(!e || "string" != typeof e) && he.test(e);
    class Ne {
      constructor() {
        (this.contains = this.contains.bind(this)),
          (this.request = this.request.bind(this)),
          (this.requestPermissionPerSite = this.requestPermissionPerSite.bind(this));
      }
      contains(e) {
        return new Promise((t, s) => {
          ne.permissions.contains(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      request(e) {
        return new Promise((t, s) => {
          ne.permissions.request(e, (e) => {
            const i = ne.runtime.lastError;
            return i ? s(i) : t(e);
          });
        });
      }
      async requestPermissionPerSite(e, t) {
        let s = t.url;
        Ie(s) || (Ie(e.frameUrl) && (s = e.frameUrl));
        const i = { permissions: ["cookies"], origins: [s, "*://*.evernote.com/*"] };
        if (this.contains(i)) return { info: e, tab: t };
        if (this.request(i)) return { info: e, tab: t };
        const n = s.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, (e) => {
          try {
            const t = new URL(e);
            return t.origin ? t.origin : "Domain URL";
          } catch (e) {
            return "Domain URL";
          }
        });
        throw new Error(`User has not granted necessary permissions for origin: ${n}`);
      }
    }
    class ge {
      executeScript(e) {
        ne.scripting.executeScript(e);
      }
    }
    var Re = new (class {
        constructor() {
          (this.browserAction = new de()),
            (this.i18n = new ae()),
            (this.runtime = new le()),
            (this.tabs = new Te()),
            (this.windows = new Ee()),
            (this.cookies = new (class {
              get(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return new Promise(async (s) => {
                  const i = t ? { name: e, url: t } : { name: e };
                  let n = null;
                  if (t)
                    try {
                      n = await this.getSingleCookie(i);
                    } catch (e) {
                      p.warn(e.message || "Error trying to get single cookie");
                    }
                  n || (n = await this.find(i)), s(n);
                });
              }
              getSingleCookie(e) {
                return new Promise((t, s) => {
                  ne.cookies.get(e, (e) => {
                    const i = ne.runtime.lastError;
                    return i ? s(i) : t(e);
                  });
                });
              }
              find(e) {
                if (!e || !e.name) return Promise.resolve(null);
                let t;
                return (
                  (t = new Promise((t, s) => {
                    ne.cookies.getAll(e, (e) => {
                      const i = ne.runtime.lastError;
                      return i ? s(i) : t(e);
                    });
                  })),
                  t
                    .then((t) => {
                      let s = null;
                      return t && (s = t.find((t) => t.name === e.name)), s || null;
                    })
                    .catch((e) => (p.warn(e.message || "Error trying to get cookies"), Promise.resolve(null)))
                );
              }
              set(e, t, s, i, n, a) {
                const o = { name: e, expirationDate: s, path: i, domain: n, secure: Boolean(a), value: t };
                let r;
                return (
                  (r = new Promise((e, t) => {
                    ne.cookies.set(o, (s) => {
                      const i = ne.runtime.lastError;
                      return i ? t(i) : e(s);
                    });
                  })),
                  r.catch((t) => {
                    const s = (t && t.message) || `Cookie '${e}' could not be set`;
                    return p.warn(s), Promise.reject(t);
                  })
                );
              }
              async delete(e, t) {
                const s = `Cookie '${e}' could not be deleted`,
                  i = await this.get(e, t);
                if (!i) return p.warn(s), null;
                const n = this._removeStartingDot(t || this._buildUrl(i.domain, i.path, i.secure)),
                  a = { name: e, url: n };
                let o;
                return (
                  (o = new Promise((e, t) => {
                    ne.cookies.remove(a, (s) => {
                      const i = ne.runtime.lastError;
                      return i ? t(i) : e(s);
                    });
                  })),
                  o.catch((t) => {
                    const s = (t && t.message) || `Cookie '${e}' could not be set`;
                    return p.warn(s), Promise.resolve(t);
                  })
                );
              }
              _buildUrl(e, t, s) {
                return `${s ? "https" : "http"}://${this._removeStartingDot(e)}${this._removeStartingDot(t || "")}`;
              }
              _removeStartingDot(e) {
                return e.replace(/^\.*/, "");
              }
            })()),
            (this.contextMenus = new fe()),
            (this.notifications = new (class {
              create(e, t) {
                return ne.notifications
                  ? new Promise((s, i) => {
                      ne.notifications.create(e, t, (e) => {
                        const t = ne.runtime.lastError;
                        return t ? i(t) : s(e);
                      });
                    })
                  : Promise.reject(new Error("Need to ask permission"));
              }
              clear(e) {
                return ne.notifications
                  ? new Promise((t, s) => {
                      ne.notifications.clear(e, (e) => {
                        const i = ne.runtime.lastError;
                        return i ? s(i) : t(e);
                      });
                    })
                  : Promise.reject(new Error("Need to ask permission"));
              }
              getAll() {
                return ne.notifications
                  ? new Promise((e, t) => {
                      ne.notifications.getAll((s) => {
                        const i = ne.runtime.lastError;
                        return i ? t(i) : e(s);
                      });
                    })
                  : Promise.reject(new Error("Need to ask permission"));
              }
            })()),
            (this.permissions = new Ne()),
            (this.menus = this.contextMenus),
            (this.storage = new (class {
              set(e, t) {
                return new Promise((i, n) => {
                  if (ye)
                    try {
                      const s = JSON.stringify(t);
                      localStorage.setItem(e, s), i();
                    } catch (e) {
                      n(e);
                    }
                  else {
                    const a = ((e) => (Array.isArray(e) || s(e) ? JSON.stringify(e) : e))(t),
                      o = () => {
                        const e = ne.runtime.lastError;
                        return e ? n(e) : i();
                      };
                    ne.storage.local.set({ [e]: a }, o);
                  }
                });
              }
              get(e) {
                return new Promise((t, i) => {
                  if (ye) {
                    let s;
                    try {
                      s = localStorage.getItem(e);
                    } catch (e) {
                      return void i(e);
                    }
                    if (s && "string" == typeof s)
                      try {
                        const e = JSON.parse(s);
                        return void t(e);
                      } catch (e) {}
                    t(s);
                  } else
                    new Promise((t, s) => {
                      ne.storage.local.get(e, (e) => {
                        const i = ne.runtime.lastError;
                        return i ? s(i) : t(e);
                      });
                    })
                      .then((i) => {
                        const n = i[e];
                        t(
                          ((e) => {
                            if (e && "string" == typeof e)
                              try {
                                const t = JSON.parse(e);
                                if (t && (Array.isArray(t) || s(t))) return t;
                              } catch (e) {}
                            return e;
                          })(n)
                        );
                      })
                      .catch((e) => i(e));
                });
              }
              setAnyLoggedInAccount(e) {
                return ye ? Promise.resolve() : this.set(ce, Boolean(e));
              }
              hasAnyLoggedInAccount() {
                return ye ? Promise.resolve() : this.get(ce);
              }
            })()),
            (this.scripting = new ge());
        }
        get hasRuntimeApiAvailable() {
          return Boolean(ne && ne.runtime);
        }
        get hasCookiesApiAvailable() {
          return Boolean(ne && ne.cookies);
        }
        get hasNotificationsApiAvailable() {
          return Boolean(ne && ne.notifications);
        }
        get hasRuntimeGetUrlAvailable() {
          return Boolean(ne && ne.runtime && ne.runtime.getURL && "function" == typeof ne.runtime.getURL);
        }
      })(),
      xe = __webpack_require__(50026);
    function me(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    const Ae = "EDAM",
      Ce = "UNK",
      Oe = "NET";
    class Me extends Error {
      constructor(e) {
        let { code: t, message: s, instance: i, type: n, stack: a, opts: o, errorCode: r } = e;
        super(s),
          (this.channelId = pe),
          (this.type = n || Ce),
          (this.code = t || "UNK"),
          a && (this.stack = a),
          (this.opts = o || {}),
          r && (this.errorCode = r),
          (this.instance = i || "Error");
      }
      toJSON() {
        return {
          channelId: this.channelId,
          type: this.type,
          code: this.code,
          stack: this.stack,
          opts: this.opts,
          instance: this.instance,
          message: this.message
        };
      }
      get shortData() {
        return `${this.type}/${this.code}`;
      }
      static fromAny() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("object" != typeof e)
          return new Me(
            (function (e) {
              for (var s = 1; s < arguments.length; s++) {
                var i = null != arguments[s] ? arguments[s] : {};
                s % 2
                  ? me(Object(i), !0).forEach(function (s) {
                      t(e, s, i[s]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                  : me(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                    });
              }
              return e;
            })({ message: JSON.stringify(e) }, s)
          );
        if (e instanceof Me) return e;
        if (e.channelId === pe) return new Me(e);
        if (
          Object.keys(xe.Errors)
            .filter((e) => "function" == typeof xe.Errors[e])
            .find((t) => e instanceof xe.Errors[t])
        )
          return Me.fromEDAM(e);
        if (e instanceof Error || (e.message && e.stack)) return Me.fromGeneric(e, s);
        const i = e.type || s.type,
          n = e.errorCode || e.code || s.code;
        return new Me({ code: n, type: i, message: e.message || (i && n ? "" : JSON.stringify(e)) });
      }
      static fromGeneric(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return ("undefined" != typeof ProgressEvent && e instanceof ProgressEvent) || (e.cause && "NetworkException" === e.cause.name)
          ? new Me({ code: t.code || "OFFLINE", type: Oe, message: e.message, stack: e.stack })
          : new Me({ code: e.errorCode || e.code || t.code, type: t.type, message: e.message, stack: e.stack });
      }
      static fromEDAM(e) {
        let t = ((s = xe.Errors.EDAMErrorCode), (i = e.errorCode), Object.keys(s).find((e) => s[e] === i));
        var s, i;
        return (
          e instanceof xe.Errors.EDAMNotFoundException && (t = "NOT_FOUND"),
          new Me({
            code: t,
            message: e.parameter || e.identifier || e.message,
            instance: e.constructor.name || "UnknownEDAMException",
            type: Ae,
            opts: { rate: e.rateLimitDuration },
            errorCode: e.errorCode
          })
        );
      }
    }
    function ve(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ke(e) {
      for (var s = 1; s < arguments.length; s++) {
        var i = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? ve(Object(i), !0).forEach(function (s) {
              t(e, s, i[s]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : ve(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
      }
      return e;
    }
    const De = 36e5,
      Pe = "dispatchRequest",
      Ue = "dispatchResponse",
      be = "dispatchBroadcast",
      _e = "from-env",
      Le = "to-env",
      we = "t-name",
      Ge = "messageID",
      Be = "name",
      Fe = "payload",
      qe = "error",
      Xe = {
        EXTENSION: "extension",
        CONTENT: "content",
        CONTENT_FRAME: "content_script_frame",
        POPOVER: "popover",
        IFRAME: "iframe",
        BACKGROUND_OPTIONS: "background_options"
      };
    let Ve = null;
    class We {
      static setupSharedInstance(e) {
        if (Ve) throw new Error("Shared channel instance is already configured");
        Ve = new We(e);
      }
      static get sharedInstance() {
        return Ve;
      }
      static overrideSharedInstance(e) {
        if ("production".startsWith("production")) throw new Error("Unable to override Channel.sharedInstance for production");
        Ve = e;
      }
      static get Environment() {
        return Xe;
      }
      get environment() {
        return this._environment;
      }
      constructor(e) {
        if (!Object.keys(Xe).some((t) => Xe[t] === e)) throw new Error(`Unexpected environment "${e}"`);
        (this._environment = e),
          (this._guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(/x/g, () => ((16 * Math.random()) | 0).toString(16))
            .replace(/y/g, () => (8 + ((4 * Math.random()) | 0)).toString(16))),
          (this._uniqueMessageID = 1),
          (this._pendingMessages = {}),
          (this._listener = null),
          (this._frames = {}),
          (this._registeredHandlers = {}),
          (this._eventDispatcher = new n()),
          (this._messageTimeoutID = null),
          this._registerListener();
      }
      registerHandlers(e) {
        Object.keys(e).forEach((t) => {
          if ({}.hasOwnProperty.call(this._registeredHandlers, t)) throw new Error(`Handler "${t}" is already registered`);
          this._registeredHandlers[t] = e[t];
        });
      }
      unregisterHandlers(e) {
        Object.keys(e).forEach((e) => {
          if (!{}.hasOwnProperty.call(this._registeredHandlers, e)) throw new Error(`Handler "${e}" is not registered`);
          delete this._registeredHandlers[e];
        });
      }
      sendToExtension(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._throwIfNotSupportedPath(
          [Xe.CONTENT, Xe.CONTENT_FRAME, Xe.POPOVER, Xe.IFRAME, Xe.EXTENSION, Xe.BACKGROUND_OPTIONS],
          Xe.EXTENSION
        );
        const { promise: s, message: i } = this._createMessagePromise(Xe.EXTENSION, e, t);
        if (!this._sendMessageToExtension(i)) {
          if (!Re.hasRuntimeApiAvailable) return Promise.reject();
          this._handleResponsePromise(i[Ge], null, "Message could not be sent"),
            this.environment === Xe.IFRAME && self.postMessage("BG_DEAD", "*");
        }
        return s;
      }
      sendToActiveTab(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._throwIfNotSupportedPath([Xe.EXTENSION], Xe.CONTENT);
        const { promise: s, message: i } = this._createMessagePromise(Xe.CONTENT, e, t);
        return this.getActiveTab().then((e) => {
          if (!e) throw new Error("Could not find active tab");
          return this._sendMessageToTab(e, i) || this._handleResponsePromise(i[Ge], null, "Message could not be sent"), s;
        });
      }
      sendToTab(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this._throwIfNotSupportedPath([Xe.EXTENSION], Xe.CONTENT);
        const { promise: i, message: n } = this._createMessagePromise(Xe.CONTENT, t, s);
        return this._sendMessageToTab(e, n) || this._handleResponsePromise(n[Ge], null, "Message could not be sent"), i;
      }
      sendToUIframe(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._throwIfNotSupportedPath([Xe.EXTENSION], Xe.IFRAME);
        const { promise: n, message: a } = this._createMessagePromise(Xe.IFRAME, t, s);
        return this._sendMessageToTab(e, a, i) || this._handleResponsePromise(a[Ge], null, "Message could not be sent"), n;
      }
      sendToContentFrame(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._throwIfNotSupportedPath([Xe.EXTENSION], Xe.CONTENT_FRAME);
        const { promise: n, message: a } = this._createMessagePromise(Xe.CONTENT_FRAME, t, s);
        return this._sendMessageToTab(e, a, i) || this._handleResponsePromise(a[Ge], null, "Message could not be sent"), n;
      }
      sendToCustomEnvironment(e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const { promise: n, message: a } = this._createMessagePromise(s, t, i);
        return this._sendMessageToTab(e, a) || this._handleResponsePromise(a[Ge], null, "Message could not be sent"), n;
      }
      sendToPopover(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._throwIfNotSupportedPath([Xe.EXTENSION], Xe.POPOVER);
        const { promise: s, message: i } = this._createMessagePromise(Xe.POPOVER, e, t);
        return this._sendMessageToPopover(i) || this._handleResponsePromise(i[Ge], null, "Message could not be sent"), s;
      }
      getActiveTab() {
        return Re.tabs.query({ active: !0, currentWindow: !0 }).then((e) => {
          const t = e[0];
          return ye || (t && t.active) ? t : Re.tabs.query({}).then((e) => e.find((e) => e.active));
        });
      }
      addEventListener(e, t) {
        this._eventDispatcher.addEventListener(e, t);
      }
      removeEventListener(e, t) {
        this._eventDispatcher.removeEventListener(e, t);
      }
      broadcastEvent(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (-1 === [Xe.EXTENSION].indexOf(this._environment)) throw new Error(`Broadcast cannot be sent from ${this._environment}`);
        this._broadcastEvent(this._createBroadcastMessage(e, t));
      }
      broadcastEventInTab(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (-1 === [Xe.EXTENSION].indexOf(this._environment)) throw new Error(`Broadcast cannot be sent from ${this._environment}`);
        this._sendMessageToTab(e, this._createBroadcastMessage(t, s));
      }
      createCtxMessageId() {
        return `${this._guid}/${this._uniqueMessageID++}`;
      }
      registerFrame(e, t) {
        this._frames[t] = e;
      }
      getFrameIdBySource(e) {
        return this._frames[e] || -1;
      }
      sendMessage() {
        if (ye) return Re.runtime.sendMessage(...arguments);
        let e = 0;
        const t = function () {
          for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
          return new Promise((s, n) => {
            Re.runtime
              .sendMessage(...i)
              .then(s)
              .catch((a) => {
                ++e,
                  e <= 3
                    ? setTimeout(() => {
                        t(...i)
                          .then(s)
                          .catch(n);
                      }, 1e3 * e)
                    : n(a);
              });
          });
        };
        return t(...arguments);
      }
      sendMessageTabs() {
        if (ye) return Re.tabs.sendMessage(...arguments);
        let e = 0;
        const t = function () {
          for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
          return new Promise((s, n) => {
            Re.tabs
              .sendMessage(...i)
              .then(s)
              .catch((a) => {
                ++e,
                  e <= 3
                    ? setTimeout(() => {
                        t(...i)
                          .then(s)
                          .catch(n);
                      }, 1e3 * e)
                    : n(a);
              });
          });
        };
        return t(...arguments);
      }
      _handleServiceWorkerError(e) {
        const t = e;
        return t && ((t.type = t.type || "SW_INACTIVE"), (t.code = t.code || "SW_UNREACHABLE")), t;
      }
      _sendMessageToExtension(e) {
        try {
          let t;
          return (
            !!Re.hasRuntimeApiAvailable &&
            ((t = this.sendMessage(e)),
            !ye &&
              t &&
              t.catch((t) => {
                let s = t;
                const i = e[Ge];
                if (i) {
                  s = this._handleServiceWorkerError(s);
                  const t = e[qe];
                  this._handleResponsePromise(i, null, t || s);
                }
              }),
            !0)
          );
        } catch (t) {
          return p.error(`Channel: Could not send the message "${e[Be]}", error:`, t), !1;
        }
      }
      _sendMessageToPopover(e) {
        try {
          return Re.runtime.sendMessage(e), !0;
        } catch (t) {
          return p.error(`Channel: Could not send the message "${e[Be]}", error:`, t), !1;
        }
      }
      _sendMessageToFrame(e, t, s) {
        try {
          const i = s,
            n = i[qe];
          let a;
          return (
            n && n instanceof Me && (i[qe] = n.toJSON()),
            (a = null !== t || void 0 !== t ? this.sendMessageTabs(e.id, i, { frameId: t }) : this.sendMessageTabs(e.id, i)),
            !ye &&
              a &&
              a.catch((e) => {
                let t = e;
                const i = s[Ge];
                if (i) {
                  t = this._handleServiceWorkerError(t);
                  const e = s[qe];
                  this._handleResponsePromise(i, null, e || t);
                }
              }),
            !0
          );
        } catch (e) {
          return p.error(`Channel: Could not send the message "${s[Be]}", error:`, e), !1;
        }
      }
      _sendMessageToTab(e, t, s) {
        return this._sendMessageToFrame(e, s, t);
      }
      _extensionLoopAllTabs(e) {
        Re.tabs.query({}).then((t) => {
          t.forEach(e);
        });
      }
      _isUserTab(e) {
        return e && e.id >= 0;
      }
      _broadcastEvent(e) {
        this._extensionLoopAllTabs((t) => {
          this._isUserTab(t) && this._sendMessageToTab(t, e);
        });
      }
      _throwIfNotSupportedPath(e, t) {
        if (-1 === e.indexOf(this._environment)) throw new Error(`Message cannot be sent from ${this._environment} to ${t}`);
      }
      _createMessagePromise(e, t, s) {
        const i = this._uniqueMessageID++,
          n = this._createRequestMessage(e, i, t, s);
        return {
          promise: new Promise((e, n) => {
            (this._pendingMessages[i] = { message: t, command: s ? s.command : null, date: new Date(), resolve: e, reject: n }),
              this._updateTimeOutCheck();
          }),
          message: n
        };
      }
      _removeTimedOutMessages() {
        const e = new Date();
        Object.keys(this._pendingMessages).forEach((t) => {
          const { message: s, date: i, reject: n } = this._pendingMessages[t];
          e - i > De &&
            (p.warn(`Removing timed out message: '${s}', ID: ${t}`), delete this._pendingMessages[t], n(new Error("Message did timeout")));
        }),
          this._updateTimeOutCheck();
      }
      _updateTimeOutCheck() {
        const e = new Date();
        this._messageTimeoutID && (self.clearTimeout(this._messageTimeoutID), (this._messageTimeoutID = null));
        const t = Object.keys(this._pendingMessages);
        if (!t.length) return;
        const s = t.reduce((e, t) => {
          const { date: s } = this._pendingMessages[t];
          return s < e ? s : e;
        }, e);
        this._messageTimeoutID = self.setTimeout(
          () => {
            this._removeTimedOutMessages();
          },
          De - (e - s)
        );
      }
      _createRequestMessage(e, t, s, i) {
        const n = { [_e]: this._environment, [Le]: e, [we]: Pe, [Ge]: `${this._guid}/${t}`, [Be]: s };
        return void 0 !== i && (n[Fe] = i), n;
      }
      _createResponseMessage(e, t, s, i, n) {
        const a = { [_e]: this._environment, [Le]: e, [we]: Ue, [Ge]: t, [Be]: s };
        return void 0 !== i && (a[Fe] = i), void 0 !== n && (a[qe] = n instanceof Me ? n.toJSON() : n), a;
      }
      _createBroadcastMessage(e, t) {
        const s = { [_e]: this._environment, [we]: be, [Be]: e };
        return void 0 !== t && (s[Fe] = t), s;
      }
      _registerListener() {
        (this._listener = (e, t, s) => {
          s({}), this._handleMessage(t.tab, t.frameId, e);
        }),
          Re.runtime.onMessage.addListener(this._listener);
      }
      _handleMessage(e, t, s) {
        switch (s[we]) {
          case Pe:
            this._handleDispatchRequest(e, t, s);
            break;
          case Ue:
            this._handleDispatchResponse(s);
            break;
          case be:
            this._handleDispatchBroadcast(s);
            break;
          default:
            throw new Error(`Unknown transport command: '${s[we]}'`);
        }
      }
      _handleDispatchResponse(e) {
        if (e[Le] !== this._environment) return;
        const t = e[Ge];
        if (!t) throw new Error(`Dispatched request has no ID: ${e}`);
        this._handleResponsePromise(t, e[Fe], e[qe]);
      }
      _handleResponsePromise(e, t, s) {
        const [i, n] = e.split("/");
        if (i !== this._guid) return;
        const a = this._pendingMessages[n];
        if (a) {
          if ((delete this._pendingMessages[n], this._updateTimeOutCheck(), s)) {
            const e = Me.fromAny(s);
            return p.error("Channel: Error in handleResponse", e.shortData, a.name || a.message, a.command), void a.reject(e);
          }
          a.resolve(t);
        } else p.warn(`Can't find request for message ID: ${n}. Timeout?`);
      }
      _handleDispatchRequest(e, t, s) {
        if (s[Le] !== this._environment) return;
        const i = s[_e],
          n = (n, a) => {
            const o = this._createResponseMessage(i, s[Ge], s[Be], n, a);
            switch (i) {
              case Xe.BACKGROUND_OPTIONS:
              case Xe.EXTENSION:
                this._sendMessageToExtension(o);
                break;
              case Xe.CONTENT:
                this._sendMessageToTab(e, o, t);
                break;
              case Xe.POPOVER:
                this._sendMessageToPopover(o);
                break;
              case Xe.IFRAME:
              case Xe.CONTENT_FRAME:
                this._sendMessageToFrame(e, t, o);
                break;
              default:
                throw new Error(`Unexpected response environment: ${i}`);
            }
          },
          a = this._registeredHandlers[s[Be]];
        if (!a) {
          const e = `Handler is not yet registered for message: ${s[Be]}`;
          return p.error("Channel:", e), void n(void 0, e);
        }
        let o = s[Fe];
        "object" != typeof o || Array.isArray(o) || (o = ke(ke({}, o), {}, { isFrame: 0 !== t, frameId: t })),
          Promise.resolve(a(o, e, t))
            .then((e) => {
              n(e);
            })
            .catch((e) => {
              const t = e || new Me();
              p.error(
                `Channel: Message '${s[Be]}${s[Fe] && s[Fe].command ? `.${s[Fe].command}` : ""}' failed with error:`,
                t.shortData || t
              ),
                n(void 0, t);
            });
      }
      _handleDispatchBroadcast(e) {
        this._eventDispatcher.dispatchEvent(e[Be], e[Fe] || {});
      }
    }
    const je = "hideSimsearch",
      He = "forwardToContent";
    var ze = __webpack_require__(88495),
      Ye = __webpack_require__.n(ze);
    function Ke(e, t) {
      let s,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (!t) throw new Error("JSLocalized comment must always be provided");
      const n = Ye()(e);
      var a;
      return (
        (s = (a = Re) && a.i18n ? a.i18n.getMessage(n) || e : (p.warn(`Tried to localize string ${e}, but no api was available`), e)),
        s.replace(/{(\w+)}/g, (e, t) => i[t] || "")
      );
    }
    navigator.language.replace("-", "_");
    function $e(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ze(e) {
      for (var s = 1; s < arguments.length; s++) {
        var i = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? $e(Object(i), !0).forEach(function (s) {
              t(e, s, i[s]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : $e(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
      }
      return e;
    }
    const Je = function (e, t, s) {
      void 0 === e && (e = "div");
      var i = document.createElement(e);
      return (
        s &&
          "object" == typeof s &&
          (Object.keys(s).forEach(function (e) {
            i[e] = s[e];
          }),
          s.style &&
            Object.keys(s.style).forEach(function (e) {
              i.style[e] = s.style[e];
            })),
        t &&
          ("string" == typeof t
            ? (i.className = t)
            : t.forEach(function (e) {
                return e && i.classList.add(e);
              })),
        i
      );
    };
    We.setupSharedInstance(We.Environment.IFRAME);
    const Qe = () => {
        document.getElementById("closeOptions").classList.toggle("hidden");
      },
      et = () => {
        We.sharedInstance.sendToExtension(He, { command: je });
      },
      tt = () => {
        We.sharedInstance.sendToExtension("options", { command: "setValue", args: ["simSearchEnabled", !1] }),
          We.sharedInstance.sendToExtension(He, { command: je });
      },
      st = () => {},
      it = (e) => {
        let { header: t, data: s, id: i } = e;
        const n = document.getElementById("simSearchNotes"),
          a = Je("div", "noteSection", { id: i });
        a.appendChild(Je("div", "noteSectionTitle", { innerText: t }));
        const o = Je("div", "noteSectionNotes");
        a.appendChild(o),
          s.forEach((e) =>
            o.appendChild(
              ((e) => {
                const t = Je("a", "noteLink", { target: "_blank", href: e.noteHref });
                t.appendChild(Je("h1", null, { innerText: e.title }));
                const s = new Date(e.updated);
                return (
                  s instanceof Date &&
                    !Number.isNaN(s.getTime()) &&
                    t.appendChild(
                      Je("p", "date", {
                        innerText: s.toLocaleString(Re.i18n.getUILanguage(), { year: "numeric", month: "long", day: "numeric" })
                      })
                    ),
                  e.snippet && t.appendChild(Je("p", "snippettext", { innerText: e.snippet })),
                  t
                );
              })(e)
            )
          ),
          n.appendChild(a);
      };
    We.sharedInstance.sendToExtension(He, { command: "getSimSearchResults" }).then((e) => {
      let [t, s] = e;
      document.querySelector("body").addEventListener("click", (e) =>
        (function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
          return e.isTrusted
            ? t(e)
            : ((e) => {
                e.preventDefault(), e.stopImmediatePropagation();
              })(e);
        })(e)
      ),
        ((e, t) => {
          let { hostUrl: s, authenticatedAccounts: i } = t;
          document.getElementById("closeButton").addEventListener("click", Qe),
            document.getElementById("dismiss").addEventListener("click", et),
            document.getElementById("dismissForever").addEventListener("click", tt),
            document.getElementById("keepSimsearchOn").addEventListener("click", st),
            document.getElementById("disableSimsearch").addEventListener("click", tt);
          const n = document.querySelector("a.branding");
          (n.href = `${s}/Home.action`),
            n.classList.add("international"),
            (document.getElementById("dismiss").innerText = Ke(
              "Dismiss",
              "Text for the option in the simsearch drop down menu to let user temporarily close the simsearch box, but not disable in the options"
            )),
            (document.getElementById("dismissForever").innerText = Ke(
              "Dismiss forever",
              "Text for the option in the simsearch drop down menu to let user temporarily close the simsearch box, but not disable in the options"
            )),
            e
              ? ((e) => {
                  const t = e.personal.length && e.business.length ? 3 : 6;
                  e.personal &&
                    e.personal.length &&
                    it({
                      header: Ke("Similar results in personal notes", "Section title for search results over personal notes"),
                      id: "personal",
                      data: e.personal.slice(0, t)
                    }),
                    e.business &&
                      e.business.length &&
                      it({
                        header: Ke("Similar results in teams notes", "Section title for search results over business notes"),
                        id: "business",
                        data: e.business.slice(0, t)
                      });
                })(e)
              : ((e, t) => {
                  const s = document.getElementById("simSearchNotes"),
                    i = Je("div", "grayText", { id: "noNotes" });
                  if (e) {
                    const e = Ke(
                      "No Related Results in your notes",
                      "Message injected into search-engine page indicating there were no related notes found in personal account"
                    );
                    i.innerText = e;
                  } else {
                    const e = {
                        id: "loginUrl",
                        className: "",
                        innerText: Ke(
                          "Sign in to Web Clipper to see Related Results",
                          "Message injected into search-engine page indicating that the user must login prior to seeing results."
                        )
                      },
                      s = { target: "_blank", href: `${t}/ClipperLogin.action` },
                      n = Je("a", null, Ze(Ze({}, e), s));
                    i.appendChild(n);
                  }
                  s.appendChild(i);
                })(!!i.length, s);
        })(t, s);
    });
  })();
})();
