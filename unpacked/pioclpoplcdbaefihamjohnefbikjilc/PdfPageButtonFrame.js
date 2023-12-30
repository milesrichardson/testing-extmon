/*! For license information please see PdfPageButtonFrame.js.LICENSE.txt */
(() => {
  var e = {
      46463: (e, t, s) => {
        s(24527).Thrift,
          (e.exports.nI5 = "^[A-Za-z]+/[A-Za-z0-9._+-]+$"),
          (e.exports.emj = "image/gif"),
          (e.exports.aP_ = "image/jpeg"),
          (e.exports.PDC = "image/png"),
          (e.exports.uOi = "application/pdf"),
          (e.exports.xGc = "application/octet-stream");
      },
      50026: (e, t, s) => {
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
      47411: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(81343),
          n = s(52965);
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
            1: { alias: "incentiveToCreate", type: i.Type.STRUCT, def: a.Incentive }
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
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), o))
            e[a] && this.processor.addMethod(o[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
            1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
            3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (o.listAllBusinessDiscountDeals = i.Method.define({
            alias: "listAllBusinessDiscountDeals",
            args: i.Struct.define("listAllBusinessDiscountDealsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listAllBusinessDiscountDealsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BusinessDiscountDeal) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.listAllBusinessDiscountOffers = i.Method.define({
            alias: "listAllBusinessDiscountOffers",
            args: i.Struct.define("listAllBusinessDiscountOffersArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listAllBusinessDiscountOffersResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BusinessDiscountOffer) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.setupECCBusiness = i.Method.define({
            alias: "setupECCBusiness",
            args: i.Struct.define("setupECCBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("setupECCBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.createIncentive = i.Method.define({
            alias: "createIncentive",
            args: i.Struct.define("createIncentiveArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "createIncentiveRequest", type: i.Type.STRUCT, def: e.exports.CreateIncentiveRequest, index: 1 }
            }),
            result: i.Struct.define("createIncentiveResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Incentive },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.updateIncentive = i.Method.define({
            alias: "updateIncentive",
            args: i.Struct.define("updateIncentiveArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "updateIncentiveRequest", type: i.Type.STRUCT, def: e.exports.UpdateIncentiveRequest, index: 1 }
            }),
            result: i.Struct.define("updateIncentiveResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.Incentive },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.deactivateBusinessUser = i.Method.define({
            alias: "deactivateBusinessUser",
            args: i.Struct.define("deactivateBusinessUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("deactivateBusinessUserResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.deactivateBusinessUserEvenLastAdmin = i.Method.define({
            alias: "deactivateBusinessUserEvenLastAdmin",
            args: i.Struct.define("deactivateBusinessUserEvenLastAdminArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("deactivateBusinessUserEvenLastAdminResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.reactivateBusinessUser = i.Method.define({
            alias: "reactivateBusinessUser",
            args: i.Struct.define("reactivateBusinessUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("reactivateBusinessUserResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.listBetaFeatures = i.Method.define({
            alias: "listBetaFeatures",
            args: i.Struct.define("listBetaFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeatureInternal) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.updateBetaFeature = i.Method.define({
            alias: "updateBetaFeature",
            args: i.Struct.define("updateBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "feature", type: i.Type.STRUCT, def: e.exports.BetaFeatureInternal, index: 1 }
            }),
            result: i.Struct.define("updateBetaFeatureResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.approveBetaFeatureEnrollment = i.Method.define({
            alias: "approveBetaFeatureEnrollment",
            args: i.Struct.define("approveBetaFeatureEnrollmentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "enrollmentGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("approveBetaFeatureEnrollmentResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.addOrUpdateBlacklistedDomain = i.Method.define({
            alias: "addOrUpdateBlacklistedDomain",
            args: i.Struct.define("addOrUpdateBlacklistedDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRUCT, def: e.exports.BlacklistedDomain, index: 1 }
            }),
            result: i.Struct.define("addOrUpdateBlacklistedDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (o.deleteBlacklistedDomain = i.Method.define({
            alias: "deleteBlacklistedDomain",
            args: i.Struct.define("deleteBlacklistedDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domainGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("deleteBlacklistedDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.prototype.createBusinessDiscountDeal = function (e, t, s) {
            var i = o.createBusinessDiscountDeal,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.getBusinessDiscountDeal = function (e, t, s) {
            var i = o.getBusinessDiscountDeal,
              a = new i.args();
            (a.authenticationToken = e), (a.dealId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.updateBusinessDiscountDeal = function (e, t, s) {
            var i = o.updateBusinessDiscountDeal,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.cancelBusinessDiscountDeal = function (e, t, s) {
            var i = o.cancelBusinessDiscountDeal,
              a = new i.args();
            (a.authenticationToken = e), (a.dealId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.endBusinessDiscountDeal = function (e, t, s) {
            var i = o.endBusinessDiscountDeal,
              a = new i.args();
            (a.authenticationToken = e), (a.dealId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.listAllBusinessDiscountDeals = function (e, t) {
            var s = o.listAllBusinessDiscountDeals,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.listDiscountDealsForBusiness = function (e, t, s) {
            var i = o.listDiscountDealsForBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.businessId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.createBusinessDiscountOffer = function (e, t, s) {
            var i = o.createBusinessDiscountOffer,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.updateBusinessDiscountOffer = function (e, t, s) {
            var i = o.updateBusinessDiscountOffer,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.cancelBusinessDiscountOffer = function (e, t, s) {
            var i = o.cancelBusinessDiscountOffer,
              a = new i.args();
            (a.authenticationToken = e), (a.offerId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.listAllBusinessDiscountOffers = function (e, t) {
            var s = o.listAllBusinessDiscountOffers,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.setupECCBusiness = function (e, t, s) {
            var i = o.setupECCBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.businessId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.lookUpBackToSchoolEmail = function (e, t, s) {
            var i = o.lookUpBackToSchoolEmail,
              a = new i.args();
            (a.authenticationToken = e), (a.email = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.createIncentive = function (e, t, s) {
            var i = o.createIncentive,
              a = new i.args();
            (a.authenticationToken = e), (a.createIncentiveRequest = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.updateIncentive = function (e, t, s) {
            var i = o.updateIncentive,
              a = new i.args();
            (a.authenticationToken = e), (a.updateIncentiveRequest = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.deactivateBusinessUser = function (e, t, s) {
            var i = o.deactivateBusinessUser,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.deactivateBusinessUserEvenLastAdmin = function (e, t, s) {
            var i = o.deactivateBusinessUserEvenLastAdmin,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.reactivateBusinessUser = function (e, t, s) {
            var i = o.reactivateBusinessUser,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.listBetaFeatures = function (e, t) {
            var s = o.listBetaFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.updateBetaFeature = function (e, t, s) {
            var i = o.updateBetaFeature,
              a = new i.args();
            (a.authenticationToken = e), (a.feature = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.listEnrollmentsForBetaFeature = function (e, t, s, i, a) {
            var n = o.listEnrollmentsForBetaFeature,
              r = new n.args();
            (r.authenticationToken = e),
              (r.featureGuid = t),
              (r.firstResult = s),
              (r.maxResults = i),
              n.sendRequest(this.output, this.seqid++, r, a);
          }),
          (r.prototype.listEnrollmentsForBetaFeatureAndStatus = function (e, t, s, i, a, n) {
            var r = o.listEnrollmentsForBetaFeatureAndStatus,
              p = new r.args();
            (p.authenticationToken = e),
              (p.featureGuid = t),
              (p.status = s),
              (p.firstResult = i),
              (p.maxResults = a),
              r.sendRequest(this.output, this.seqid++, p, n);
          }),
          (r.prototype.approveBetaFeatureEnrollment = function (e, t, s) {
            var i = o.approveBetaFeatureEnrollment,
              a = new i.args();
            (a.authenticationToken = e), (a.enrollmentGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.enrollAndEnableBusinessesIntoBetaFeature = function (e, t, s, i) {
            var a = o.enrollAndEnableBusinessesIntoBetaFeature,
              n = new a.args();
            (n.authenticationToken = e), (n.featureKey = t), (n.businessIds = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.enrollAndEnableUsersIntoBetaFeature = function (e, t, s, i) {
            var a = o.enrollAndEnableUsersIntoBetaFeature,
              n = new a.args();
            (n.authenticationToken = e), (n.featureKey = t), (n.userIds = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.listBlacklistedDomains = function (e, t, s, i) {
            var a = o.listBlacklistedDomains,
              n = new a.args();
            (n.authenticationToken = e), (n.firstResult = t), (n.maxResults = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.addOrUpdateBlacklistedDomain = function (e, t, s) {
            var i = o.addOrUpdateBlacklistedDomain,
              a = new i.args();
            (a.authenticationToken = e), (a.domain = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.deleteBlacklistedDomain = function (e, t, s) {
            var i = o.deleteBlacklistedDomain,
              a = new i.args();
            (a.authenticationToken = e), (a.domainGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.addBlacklistedDomains = function (e, t, s) {
            var i = o.addBlacklistedDomains,
              a = new i.args();
            (a.authenticationToken = e), (a.domains = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      59754: (e, t, s) => {
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
      64247: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(59754),
          n = s(53109),
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
            4: { alias: "openIdCredential", type: i.Type.STRUCT, def: n.OpenIdCredential },
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
        function d(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[a] && this.processor.addMethod(p[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
              1: { alias: "credential", type: i.Type.STRUCT, def: n.OpenIdCredential, index: 0 }
            }),
            result: i.Struct.define("authenticateOpenIDResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AuthenticationRequestResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException },
              3: { alias: "formatException", type: i.Type.EXCEPTION, def: a.BadOpenIDException }
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
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.AuthenticationRequestResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException }
            })
          })),
          (p.registerUser = i.Method.define({
            alias: "registerUser",
            args: i.Struct.define("registerUserArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: n.PlainCredential, index: 0 }
            }),
            result: i.Struct.define("registerUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.RegistrationRequestResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException }
            })
          })),
          (p.validateForRegistration = i.Method.define({
            alias: "validateForRegistration",
            args: i.Struct.define("validateForRegistrationArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: n.OpenIdCredential, index: 0 }
            }),
            result: i.Struct.define("validateForRegistrationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.RegistrationRequestResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: a.BadOpenIDException }
            })
          })),
          (p.associateOpenIDWithUser = i.Method.define({
            alias: "associateOpenIDWithUser",
            args: i.Struct.define("associateOpenIDWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: n.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("associateOpenIDWithUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: a.BadOpenIDException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserException }
            })
          })),
          (p.dissociateOpenIDFromUser = i.Method.define({
            alias: "dissociateOpenIDFromUser",
            args: i.Struct.define("dissociateOpenIDFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: n.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("dissociateOpenIDFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException },
              2: { alias: "formatException", type: i.Type.EXCEPTION, def: a.BadOpenIDException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException }
            })
          })),
          (p.dissociateAllOpenIDsFromUser = i.Method.define({
            alias: "dissociateAllOpenIDsFromUser",
            args: i.Struct.define("dissociateAllOpenIDsFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("dissociateAllOpenIDsFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserException }
            })
          })),
          (p.monolithAuthTokenFromNAPToken = i.Method.define({
            alias: "monolithAuthTokenFromNAPToken",
            args: i.Struct.define("monolithAuthTokenFromNAPTokenArgs", {
              1: { alias: "credential", type: i.Type.STRUCT, def: e.exports.AuthenticationCredential, index: 0 }
            }),
            result: i.Struct.define("monolithAuthTokenFromNAPTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.UserNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.SystemException }
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
            var a = p.validateUserForOAuth,
              n = new a.args();
            (n.uid = e), (n.email = t), (n.provider = s), a.sendRequest(this.output, this.seqid++, n, i);
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
              a = new i.args();
            (a.authenticationToken = e), (a.credential = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.dissociateOpenIDFromUser = function (e, t, s) {
            var i = p.dissociateOpenIDFromUser,
              a = new i.args();
            (a.authenticationToken = e), (a.credential = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updatePassword = function (e, t, s, i) {
            var a = p.updatePassword,
              n = new a.args();
            (n.userId = e), (n.oldPassword = t), (n.newPassword = s), a.sendRequest(this.output, this.seqid++, n, i);
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
          (d.prototype.start = function () {
            this.stransport.listen();
          }),
          (d.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.AuthenticationService.Server = d);
      },
      53109: (e, t, s) => {
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
      2487: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965),
          n = s(77915),
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
            3: { alias: "notes", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Note) },
            4: { alias: "notebooks", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, n.Notebook) },
            5: { alias: "users", type: i.Type.MAP, def: i.Map.define(i.Type.I32, i.Type.STRUCT, n.User) },
            6: { alias: "identities", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, n.Identity) },
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
            4: { alias: "recommendedArticles", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.RelatedContent) },
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
            1: { alias: "userProfile", type: i.Type.STRUCT, def: n.UserProfile },
            2: { alias: "securityDetails", type: i.Type.STRUCT, def: e.exports.SecurityDetails },
            3: { alias: "status", type: i.Type.I32 },
            4: { alias: "serviceLevel", type: i.Type.I32 },
            5: { alias: "facadeUser", type: i.Type.BOOL },
            6: { alias: "serviceLevelV2", type: i.Type.I32 }
          })),
          (e.exports.ClientAccessEntriesPage = i.Struct.define("ClientAccessEntriesPage", {
            1: { alias: "entries", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.ClientAccessEntry) },
            2: { alias: "hasMore", type: i.Type.BOOL }
          })),
          (e.exports.ServiceAccessEntriesPage = i.Struct.define("ServiceAccessEntriesPage", {
            1: { alias: "entries", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.ServiceAccessEntry) },
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
        function d(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[a] && this.processor.addMethod(p[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
            1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
            2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
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
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (p.getBusinessSummaryNotificationDetails = i.Method.define({
            alias: "getBusinessSummaryNotificationDetails",
            args: i.Struct.define("getBusinessSummaryNotificationDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getBusinessSummaryNotificationDetailsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.BusinessSummaryNotificationResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (p.listBusinessInvitations = i.Method.define({
            alias: "listBusinessInvitations",
            args: i.Struct.define("listBusinessInvitationsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBusinessInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.approveInvitations = i.Method.define({
            alias: "approveInvitations",
            args: i.Struct.define("approveInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emails", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("approveInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.removeInvitations = i.Method.define({
            alias: "removeInvitations",
            args: i.Struct.define("removeInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emails", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("removeInvitationsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.listBusinessUserProfilesWithSecurityDetails = i.Method.define({
            alias: "listBusinessUserProfilesWithSecurityDetails",
            args: i.Struct.define("listBusinessUserProfilesWithSecurityDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listBusinessUserProfilesWithSecurityDetailsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserProfileWithSecurityDetails) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.listBusinessUsersProfileInfoWithSecurityDetails = i.Method.define({
            alias: "listBusinessUsersProfileInfoWithSecurityDetails",
            args: i.Struct.define("listBusinessUsersProfileInfoWithSecurityDetailsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userProfileInfoRequest", type: i.Type.STRUCT, def: n.UserProfileInfoRequest, index: 1 }
            }),
            result: i.Struct.define("listBusinessUsersProfileInfoWithSecurityDetailsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserProfileWithSecurityDetails) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (p.getClientAccessHistoryForUser = i.Method.define({
            alias: "getClientAccessHistoryForUser",
            args: i.Struct.define("getClientAccessHistoryForUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "startDateInMillis", type: i.Type.I64, index: 1 },
              3: { alias: "endDateInMillis", type: i.Type.I64, index: 2 },
              4: { alias: "pageSize", type: i.Type.I32, index: 3 },
              5: { alias: "before", type: i.Type.STRUCT, def: n.ClientAccessEntry, index: 4 }
            }),
            result: i.Struct.define("getClientAccessHistoryForUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ClientAccessEntriesPage },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.getServiceAccessHistoryForUser = i.Method.define({
            alias: "getServiceAccessHistoryForUser",
            args: i.Struct.define("getServiceAccessHistoryForUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "startDateInMillis", type: i.Type.I64, index: 1 },
              3: { alias: "endDateInMillis", type: i.Type.I64, index: 2 },
              4: { alias: "pageSize", type: i.Type.I32, index: 3 },
              5: { alias: "before", type: i.Type.STRUCT, def: n.ServiceAccessEntry, index: 4 }
            }),
            result: i.Struct.define("getServiceAccessHistoryForUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ServiceAccessEntriesPage },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (p.listAutoApproveDomains = i.Method.define({
            alias: "listAutoApproveDomains",
            args: i.Struct.define("listAutoApproveDomainsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listAutoApproveDomainsResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRUCT, e.exports.BusinessAutoApproveDomain) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.listJoinableAutoApproveDomains = i.Method.define({
            alias: "listJoinableAutoApproveDomains",
            args: i.Struct.define("listJoinableAutoApproveDomainsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listJoinableAutoApproveDomainsResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.removeAutoApproveDomain = i.Method.define({
            alias: "removeAutoApproveDomain",
            args: i.Struct.define("removeAutoApproveDomainArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("removeAutoApproveDomainResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.resendAutoApproveDomainConfirmationEmail = i.Method.define({
            alias: "resendAutoApproveDomainConfirmationEmail",
            args: i.Struct.define("resendAutoApproveDomainConfirmationEmailArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "domain", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("resendAutoApproveDomainConfirmationEmailResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.revokeAccess = i.Method.define({
            alias: "revokeAccess",
            args: i.Struct.define("revokeAccessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "userId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("revokeAccessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.revokeAccessToken = i.Method.define({
            alias: "revokeAccessToken",
            args: i.Struct.define("revokeAccessTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("revokeAccessTokenResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (u.prototype.findNoteShares = function (e, t, s) {
            var i = p.findNoteShares,
              a = new i.args();
            (a.authenticationToken = e), (a.filter = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getBusinessSummary = function (e, t, s) {
            var i = p.getBusinessSummary,
              a = new i.args();
            (a.authenticationToken = e), (a.resultSpec = t), i.sendRequest(this.output, this.seqid++, a, s);
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
              a = new i.args();
            (a.authenticationToken = e), (a.emails = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.removeInvitations = function (e, t, s) {
            var i = p.removeInvitations,
              a = new i.args();
            (a.authenticationToken = e), (a.emails = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.listBusinessUserProfilesWithSecurityDetails = function (e, t) {
            var s = p.listBusinessUserProfilesWithSecurityDetails,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listBusinessUsersProfileInfoWithSecurityDetails = function (e, t, s) {
            var i = p.listBusinessUsersProfileInfoWithSecurityDetails,
              a = new i.args();
            (a.authenticationToken = e), (a.userProfileInfoRequest = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.setBusinessUserRole = function (e, t, s, i) {
            var a = p.setBusinessUserRole,
              n = new a.args();
            (n.authenticationToken = e), (n.userId = t), (n.role = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setBusinessEmailForUser = function (e, t, s, i) {
            var a = p.setBusinessEmailForUser,
              n = new a.args();
            (n.authenticationToken = e), (n.userId = t), (n.email = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getClientAccessHistoryForUser = function (e, t, s, i, a, n) {
            var o = p.getClientAccessHistoryForUser,
              r = new o.args();
            (r.authenticationToken = e),
              (r.startDateInMillis = t),
              (r.endDateInMillis = s),
              (r.pageSize = i),
              (r.before = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (u.prototype.getServiceAccessHistoryForUser = function (e, t, s, i, a, n) {
            var o = p.getServiceAccessHistoryForUser,
              r = new o.args();
            (r.authenticationToken = e),
              (r.startDateInMillis = t),
              (r.endDateInMillis = s),
              (r.pageSize = i),
              (r.before = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (u.prototype.isAvailableForAutoApproval = function (e, t, s) {
            var i = p.isAvailableForAutoApproval,
              a = new i.args();
            (a.authenticationToken = e), (a.emailDomain = t), i.sendRequest(this.output, this.seqid++, a, s);
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
              a = new i.args();
            (a.authenticationToken = e), (a.domain = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.reserveAutoApproveDomain = function (e, t, s) {
            var i = p.reserveAutoApproveDomain,
              a = new i.args();
            (a.authenticationToken = e), (a.confirmationEmail = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.resendAutoApproveDomainConfirmationEmail = function (e, t, s) {
            var i = p.resendAutoApproveDomainConfirmationEmail,
              a = new i.args();
            (a.authenticationToken = e), (a.domain = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getDisplayNamesForExternalUsers = function (e, t, s) {
            var i = p.getDisplayNamesForExternalUsers,
              a = new i.args();
            (a.authenticationToken = e), (a.userIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.revokeAccess = function (e, t, s) {
            var i = p.revokeAccess,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.revokeAccessForBobMigration = function (e, t, s, i, a) {
            var n = p.revokeAccessForBobMigration,
              o = new n.args();
            (o.authenticationToken = e),
              (o.legacyUserId = t),
              (o.withFacade = s),
              (o.bobUserId = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.deactivateBusinessUser = function (e, t, s) {
            var i = p.deactivateBusinessUser,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.reactivateBusinessUserAndChargeBusiness = function (e, t, s) {
            var i = p.reactivateBusinessUserAndChargeBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.userId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createAccessToken = function (e, t, s) {
            var i = p.createAccessToken,
              a = new i.args();
            (a.authenticationToken = e), (a.tokenType = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.revokeAccessToken = function (e, t, s) {
            var i = p.revokeAccessToken,
              a = new i.args();
            (a.authenticationToken = e), (a.tokenType = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getAccessTokenMetadata = function (e, t, s) {
            var i = p.getAccessTokenMetadata,
              a = new i.args();
            (a.authenticationToken = e), (a.tokenType = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (e.exports.BusinessService.Client = u),
          (d.prototype.start = function () {
            this.stransport.listen();
          }),
          (d.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.BusinessService.Server = d);
      },
      81343: (e, t, s) => {
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
      1380: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965),
          n = s(22024),
          o = s(32602),
          r = (e.exports.CommunicationEngine = {});
        function p(e) {
          (this.output = e), (this.seqid = 0);
        }
        function u(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), r))
            e[a] && this.processor.addMethod(r[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (r.getMessages = i.Method.define({
          alias: "getMessages",
          args: i.Struct.define("getMessagesArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "request", type: i.Type.STRUCT, def: n.MessageRequest, index: 1 }
          }),
          result: i.Struct.define("getMessagesResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: n.MessageResponse },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (p.prototype.getMessages = function (e, t, s) {
            var i = r.getMessages,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.syncMessages = function (e, t, s) {
            var i = r.syncMessages,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      72319: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(22024),
          n = (e.exports.SharedAPI = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), n))
            e[a] && this.processor.addMethod(n[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (n.processServerResponse = i.Method.define({
          oneway: !0,
          alias: "processServerResponse",
          args: i.Struct.define("processServerResponseArgs", {
            1: { alias: "response", type: i.Type.STRUCT, def: a.MessageResponse, index: 0 }
          }),
          result: i.Struct.define("processServerResponseResult")
        })),
          (n.initialize = i.Method.define({
            oneway: !0,
            alias: "initialize",
            args: i.Struct.define("initializeArgs", {
              1: { alias: "supportedPlacements", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 0 },
              2: { alias: "supportedTriggers", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 },
              3: { alias: "savedState", type: i.Type.BINARY, index: 2 }
            }),
            result: i.Struct.define("initializeResult")
          })),
          (n.trigger = i.Method.define({
            oneway: !0,
            alias: "trigger",
            args: i.Struct.define("triggerArgs", { 1: { alias: "trigger", type: i.Type.STRUCT, def: a.Trigger, index: 0 } }),
            result: i.Struct.define("triggerResult")
          })),
          (n.requestPlacement = i.Method.define({
            oneway: !0,
            alias: "requestPlacement",
            args: i.Struct.define("requestPlacementArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("requestPlacementResult")
          })),
          (n.placementIsVisible = i.Method.define({
            oneway: !0,
            alias: "placementIsVisible",
            args: i.Struct.define("placementIsVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementIsVisibleResult")
          })),
          (n.userAction = i.Method.define({
            oneway: !0,
            alias: "userAction",
            args: i.Struct.define("userActionArgs", {
              1: { alias: "placement", type: i.Type.I32, index: 0 },
              2: { alias: "blob", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("userActionResult")
          })),
          (n.syncComplete = i.Method.define({
            oneway: !0,
            alias: "syncComplete",
            args: i.Struct.define("syncCompleteArgs", { 1: { alias: "communicationEngineUpdateId", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("syncCompleteResult")
          })),
          (n.placementWasDismissed = i.Method.define({
            oneway: !0,
            alias: "placementWasDismissed",
            args: i.Struct.define("placementWasDismissedArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWasDismissedResult")
          })),
          (n.placementWillNotBeVisible = i.Method.define({
            oneway: !0,
            alias: "placementWillNotBeVisible",
            args: i.Struct.define("placementWillNotBeVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWillNotBeVisibleResult")
          })),
          (o.prototype.processServerResponse = function (e, t) {
            var s = n.processServerResponse,
              i = new s.args();
            (i.response = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.initialize = function (e, t, s, i) {
            var a = n.initialize,
              o = new a.args();
            (o.supportedPlacements = e), (o.supportedTriggers = t), (o.savedState = s), a.sendRequest(this.output, this.seqid++, o, i);
          }),
          (o.prototype.trigger = function (e, t) {
            var s = n.trigger,
              i = new s.args();
            (i.trigger = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.requestPlacement = function (e, t) {
            var s = n.requestPlacement,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementIsVisible = function (e, t) {
            var s = n.placementIsVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.userAction = function (e, t, s) {
            var i = n.userAction,
              a = new i.args();
            (a.placement = e), (a.blob = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.syncComplete = function (e, t) {
            var s = n.syncComplete,
              i = new s.args();
            (i.communicationEngineUpdateId = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWasDismissed = function (e, t) {
            var s = n.placementWasDismissed,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWillNotBeVisible = function (e, t) {
            var s = n.placementWillNotBeVisible,
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
        function d(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[a] && this.processor.addMethod(p[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (p.getMessages = i.Method.define({
          oneway: !0,
          alias: "getMessages",
          args: i.Struct.define("getMessagesArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: a.MessageRequest, index: 0 } }),
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
              1: { alias: "events", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Event), index: 0 }
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
            var a = p.show,
              n = new a.args();
            (n.placement = e), (n.content = t), (n.priority = s), a.sendRequest(this.output, this.seqid++, n, i);
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
          (d.prototype.start = function () {
            this.stransport.listen();
          }),
          (d.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.MainApp.Server = d);
      },
      34898: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(32602),
          n = (e.exports.SharedAPIV2 = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), n))
            e[a] && this.processor.addMethod(n[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (n.processServerResponse = i.Method.define({
          oneway: !0,
          alias: "processServerResponse",
          args: i.Struct.define("processServerResponseArgs", {
            1: { alias: "response", type: i.Type.STRUCT, def: a.MessageResponse, index: 0 }
          }),
          result: i.Struct.define("processServerResponseResult")
        })),
          (n.initialize = i.Method.define({
            oneway: !0,
            alias: "initialize",
            args: i.Struct.define("initializeArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: a.InitializeRequest, index: 0 } }),
            result: i.Struct.define("initializeResult")
          })),
          (n.requestPlacement = i.Method.define({
            oneway: !0,
            alias: "requestPlacement",
            args: i.Struct.define("requestPlacementArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("requestPlacementResult")
          })),
          (n.placementIsVisible = i.Method.define({
            oneway: !0,
            alias: "placementIsVisible",
            args: i.Struct.define("placementIsVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementIsVisibleResult")
          })),
          (n.userAction = i.Method.define({
            oneway: !0,
            alias: "userAction",
            args: i.Struct.define("userActionArgs", {
              1: { alias: "placement", type: i.Type.I32, index: 0 },
              2: { alias: "blob", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("userActionResult")
          })),
          (n.placementWasDismissed = i.Method.define({
            oneway: !0,
            alias: "placementWasDismissed",
            args: i.Struct.define("placementWasDismissedArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWasDismissedResult")
          })),
          (n.placementWillNotBeVisible = i.Method.define({
            oneway: !0,
            alias: "placementWillNotBeVisible",
            args: i.Struct.define("placementWillNotBeVisibleArgs", { 1: { alias: "placement", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("placementWillNotBeVisibleResult")
          })),
          (n.htmlFetched = i.Method.define({
            oneway: !0,
            alias: "htmlFetched",
            args: i.Struct.define("htmlFetchedArgs", {
              1: { alias: "uri", type: i.Type.STRING, index: 0 },
              2: { alias: "html", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("htmlFetchedResult")
          })),
          (o.prototype.processServerResponse = function (e, t) {
            var s = n.processServerResponse,
              i = new s.args();
            (i.response = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.initialize = function (e, t) {
            var s = n.initialize,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.requestPlacement = function (e, t) {
            var s = n.requestPlacement,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementIsVisible = function (e, t) {
            var s = n.placementIsVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.userAction = function (e, t, s) {
            var i = n.userAction,
              a = new i.args();
            (a.placement = e), (a.blob = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.placementWasDismissed = function (e, t) {
            var s = n.placementWasDismissed,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.placementWillNotBeVisible = function (e, t) {
            var s = n.placementWillNotBeVisible,
              i = new s.args();
            (i.placement = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (o.prototype.htmlFetched = function (e, t, s) {
            var i = n.htmlFetched,
              a = new i.args();
            (a.uri = e), (a.html = t), i.sendRequest(this.output, this.seqid++, a, s);
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
        function d(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[a] && this.processor.addMethod(p[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (p.syncMessages = i.Method.define({
          oneway: !0,
          alias: "syncMessages",
          args: i.Struct.define("syncMessagesArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: a.MessageRequest, index: 0 } }),
          result: i.Struct.define("syncMessagesResult")
        })),
          (p.show = i.Method.define({
            oneway: !0,
            alias: "show",
            args: i.Struct.define("showArgs", { 1: { alias: "request", type: i.Type.STRUCT, def: a.ShowRequest, index: 0 } }),
            result: i.Struct.define("showResult")
          })),
          (p.sendAnalyticsEvent = i.Method.define({
            oneway: !0,
            alias: "sendAnalyticsEvent",
            args: i.Struct.define("sendAnalyticsEventArgs", {
              1: { alias: "event", type: i.Type.STRUCT, def: a.AnalyticsEvent, index: 0 }
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
          (d.prototype.start = function () {
            this.stransport.listen();
          }),
          (d.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.MainAppV2.Server = d);
      },
      22024: (e, t, s) => {
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
      32602: (e, t, s) => {
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
      52965: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(77915);
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
            1: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.Contact) },
            2: { alias: "parameter", type: i.Type.STRING },
            3: { alias: "reasons", type: i.Type.LIST, def: i.List.define(i.Type.I32) }
          }));
      },
      15448: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965);
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
        var n = (e.exports.ExperimentsService = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), n))
            e[a] && this.processor.addMethod(n[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (n.getProps = i.Method.define({
          alias: "getProps",
          args: i.Struct.define("getPropsArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetPropsRequest, index: 1 }
          }),
          result: i.Struct.define("getPropsResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetPropsResponse },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
          })
        })),
          (n.getServiceState = i.Method.define({
            alias: "getServiceState",
            args: i.Struct.define("getServiceStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetServiceStateRequest, index: 1 }
            }),
            result: i.Struct.define("getServiceStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetServiceStateResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (n.getProps2 = i.Method.define({
            alias: "getProps2",
            args: i.Struct.define("getProps2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetPropsRequest, index: 1 }
            }),
            result: i.Struct.define("getProps2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetPropsJsonResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (n.getServiceState2 = i.Method.define({
            alias: "getServiceState2",
            args: i.Struct.define("getServiceState2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TGetServiceStateRequest, index: 1 }
            }),
            result: i.Struct.define("getServiceState2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TGetServiceStateJsonResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.prototype.getProps = function (e, t, s) {
            var i = n.getProps,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.getServiceState = function (e, t, s) {
            var i = n.getServiceState,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.getProps2 = function (e, t, s) {
            var i = n.getProps2,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.getServiceState2 = function (e, t, s) {
            var i = n.getServiceState2,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      48412: (e, t, s) => {
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
      60136: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(77915);
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
            5: { alias: "identity", type: i.Type.STRUCT, def: a.Identity },
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
      27909: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965),
          n = s(77915);
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
            8: { alias: "identityValue", type: i.Type.STRUCT, def: n.Identity }
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
            2: { alias: "recipients", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact) }
          })),
          (e.exports.UserMessagingInfo = i.Struct.define("UserMessagingInfo", {
            1: { alias: "threads", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.UserThread) },
            2: { alias: "identities", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Identity) }
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
            5: { alias: "identities", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Identity) },
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
            2: { alias: "participants", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact) },
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
            2: { alias: "participantsToAdd", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact) },
            3: { alias: "participantsToRemove", type: i.Type.LIST, def: i.List.define(i.Type.I64) }
          })),
          (e.exports.UpdateParticipantsResult = i.Struct.define("UpdateParticipantsResult", {
            1: { alias: "participantIdsToContact", type: i.Type.MAP, def: i.Map.define(i.Type.I64, i.Type.STRUCT, n.Contact) }
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
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), o))
            e[a] && this.processor.addMethod(o[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
            3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
            })
          })),
          (o.reinviteContact = i.Method.define({
            alias: "reinviteContact",
            args: i.Struct.define("reinviteContactArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "threadId", type: i.Type.I64, index: 1 },
              3: { alias: "contact", type: i.Type.STRUCT, def: n.Contact, index: 2 }
            }),
            result: i.Struct.define("reinviteContactResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.ReinviteContactResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.getThreads = i.Method.define({
            alias: "getThreads",
            args: i.Struct.define("getThreadsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getThreadsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UserMessagingInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.getThreadIdWithUser = i.Method.define({
            alias: "getThreadIdWithUser",
            args: i.Struct.define("getThreadIdWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "user", type: i.Type.STRUCT, def: n.User, index: 1 }
            }),
            result: i.Struct.define("getThreadIdWithUserResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (o.validateRecipients = i.Method.define({
            alias: "validateRecipients",
            args: i.Struct.define("validateRecipientsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact), index: 1 }
            }),
            result: i.Struct.define("validateRecipientsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
            })
          })),
          (o.validateContacts = i.Method.define({
            alias: "validateContacts",
            args: i.Struct.define("validateContactsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "contacts", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Contact), index: 1 }
            }),
            result: i.Struct.define("validateContactsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "invalidContactsException", type: i.Type.EXCEPTION, def: a.EDAMInvalidContactsException }
            })
          })),
          (o.getAttachmentMessagesReceived = i.Method.define({
            alias: "getAttachmentMessagesReceived",
            args: i.Struct.define("getAttachmentMessagesReceivedArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getAttachmentMessagesReceivedResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Message) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (r.prototype.sendMessage = function (e, t, s, i) {
            var a = o.sendMessage,
              n = new a.args();
            (n.authenticationToken = e), (n.message = t), (n.destination = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.sendMessageToThread = function (e, t, s) {
            var i = o.sendMessageToThread,
              a = new i.args();
            (a.authenticationToken = e), (a.message = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.sendMessageToThreadWithoutEmails = function (e, t, s) {
            var i = o.sendMessageToThreadWithoutEmails,
              a = new i.args();
            (a.authenticationToken = e), (a.message = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.createMessageThread = function (e, t, s) {
            var i = o.createMessageThread,
              a = new i.args();
            (a.authenticationToken = e), (a.spec = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.createMessageThreadWithoutEmails = function (e, t, s) {
            var i = o.createMessageThreadWithoutEmails,
              a = new i.args();
            (a.authenticationToken = e), (a.spec = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.updateParticipants = function (e, t, s) {
            var i = o.updateParticipants,
              a = new i.args();
            (a.authenticationToken = e), (a.spec = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.reinviteContact = function (e, t, s, i) {
            var a = o.reinviteContact,
              n = new a.args();
            (n.authenticationToken = e), (n.threadId = t), (n.contact = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.renameMessageThread = function (e, t, s, i) {
            var a = o.renameMessageThread,
              n = new a.args();
            (n.authenticationToken = e), (n.threadId = t), (n.threadName = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.updateReadStatus = function (e, t, s, i) {
            var a = o.updateReadStatus,
              n = new a.args();
            (n.authenticationToken = e), (n.threadId = t), (n.messageId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.updateDeleteStatus = function (e, t, s, i) {
            var a = o.updateDeleteStatus,
              n = new a.args();
            (n.authenticationToken = e), (n.threadId = t), (n.messageId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.getMessages = function (e, t, s, i) {
            var a = o.getMessages,
              n = new a.args();
            (n.authenticationToken = e), (n.threadId = t), (n.filter = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.getThreads = function (e, t) {
            var s = o.getThreads,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.getThreadIdWithUser = function (e, t, s) {
            var i = o.getThreadIdWithUser,
              a = new i.args();
            (a.authenticationToken = e), (a.user = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.getMessageSyncChunk = function (e, t, s) {
            var i = o.getMessageSyncChunk,
              a = new i.args();
            (a.authenticationToken = e), (a.filter = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.updateBlockStatus = function (e, t, s, i) {
            var a = o.updateBlockStatus,
              n = new a.args();
            (n.authenticationToken = e), (n.userId = t), (n.blockStatus = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (r.prototype.findMessages = function (e, t, s, i, a, n) {
            var r = o.findMessages,
              p = new r.args();
            (p.authenticationToken = e),
              (p.filter = t),
              (p.resultSpec = s),
              (p.maxMessages = i),
              (p.pagination = a),
              r.sendRequest(this.output, this.seqid++, p, n);
          }),
          (r.prototype.validateRecipients = function (e, t, s) {
            var i = o.validateRecipients,
              a = new i.args();
            (a.authenticationToken = e), (a.contacts = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.validateContacts = function (e, t, s) {
            var i = o.validateContacts,
              a = new i.args();
            (a.authenticationToken = e), (a.contacts = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (r.prototype.getAttachmentMessagesReceived = function (e, t) {
            var s = o.getAttachmentMessagesReceived,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (r.prototype.hasNonEmptyMessages = function (e, t, s) {
            var i = o.hasNonEmptyMessages,
              a = new i.args();
            (a.authenticationToken = e), (a.dateFilter = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      35137: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(60570),
          n = s(88606),
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
            19: { alias: "workspaces", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.WorkspaceResponse) },
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
        function d(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), p))
            e[a] && this.processor.addMethod(p[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AuthenticationResult },
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
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AuthenticationResult },
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
              2: { alias: "workspace", type: i.Type.STRUCT, def: n.Workspace, index: 1 },
              3: { alias: "spec", type: i.Type.STRUCT, def: n.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("createWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException }
            })
          })),
          (p.getWorkspace = i.Method.define({
            alias: "getWorkspace",
            args: i.Struct.define("getWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: n.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("getWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.listWorkspaces = i.Method.define({
            alias: "listWorkspaces",
            args: i.Struct.define("listWorkspacesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceResponseSpec", type: i.Type.STRUCT, def: n.WorkspaceResponseSpec, index: 1 },
              3: { alias: "filter", type: i.Type.STRUCT, def: n.WorkspaceFilter, index: 2 }
            }),
            result: i.Struct.define("listWorkspacesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.WorkspaceResponse) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException }
            })
          })),
          (p.updateWorkspace = i.Method.define({
            alias: "updateWorkspace",
            args: i.Struct.define("updateWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: n.Workspace, index: 1 }
            }),
            result: i.Struct.define("updateWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: r.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: r.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: r.EDAMNotFoundException }
            })
          })),
          (p.manageWorkspaceSharing = i.Method.define({
            alias: "manageWorkspaceSharing",
            args: i.Struct.define("manageWorkspaceSharingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: n.ManageWorkspaceSharingRequest, index: 1 }
            }),
            result: i.Struct.define("manageWorkspaceSharingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.ManageWorkspaceSharingResponse },
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
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AuthenticationResult },
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
              a = new i.args();
            (a.authenticationToken = e), (a.clientMetrics = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getSyncChunk = function (e, t, s, i, a) {
            var n = p.getSyncChunk,
              o = new n.args();
            (o.authenticationToken = e),
              (o.afterUSN = t),
              (o.maxEntries = s),
              (o.fullSyncOnly = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.getFilteredSyncChunk = function (e, t, s, i, a) {
            var n = p.getFilteredSyncChunk,
              o = new n.args();
            (o.authenticationToken = e),
              (o.afterUSN = t),
              (o.maxEntries = s),
              (o.filter = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.getLinkedNotebookSyncState = function (e, t, s) {
            var i = p.getLinkedNotebookSyncState,
              a = new i.args();
            (a.authenticationToken = e), (a.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getLinkedNotebookSyncChunk = function (e, t, s, i, a, n) {
            var o = p.getLinkedNotebookSyncChunk,
              r = new o.args();
            (r.authenticationToken = e),
              (r.linkedNotebook = t),
              (r.afterUSN = s),
              (r.maxEntries = i),
              (r.fullSyncOnly = a),
              o.sendRequest(this.output, this.seqid++, r, n);
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
              a = new i.args();
            (a.authenticationToken = e), (a.resultSpec = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.countNotebooks = function (e, t, s, i) {
            var a = p.countNotebooks,
              n = new a.args();
            (n.authenticationToken = e),
              (n.excludeBackingNotebooks = t),
              (n.excludeDefaultNotebooks = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNotebook = function (e, t, s) {
            var i = p.getNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
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
              a = new i.args();
            (a.authenticationToken = e), (a.notebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateNotebook = function (e, t, s) {
            var i = p.updateNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.notebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateNotebookWithResultSpec = function (e, t, s, i) {
            var a = p.updateNotebookWithResultSpec,
              n = new a.args();
            (n.authenticationToken = e), (n.notebook = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.expungeNotebook = function (e, t, s) {
            var i = p.expungeNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.listTags = function (e, t) {
            var s = p.listTags,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.listTagsByNotebook = function (e, t, s) {
            var i = p.listTagsByNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getTag = function (e, t, s) {
            var i = p.getTag,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createTag = function (e, t, s) {
            var i = p.createTag,
              a = new i.args();
            (a.authenticationToken = e), (a.tag = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateTag = function (e, t, s) {
            var i = p.updateTag,
              a = new i.args();
            (a.authenticationToken = e), (a.tag = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.untagAll = function (e, t, s) {
            var i = p.untagAll,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.expungeTag = function (e, t, s) {
            var i = p.expungeTag,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.listSearches = function (e, t) {
            var s = p.listSearches,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.getSearch = function (e, t, s) {
            var i = p.getSearch,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createSearch = function (e, t, s) {
            var i = p.createSearch,
              a = new i.args();
            (a.authenticationToken = e), (a.search = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateSearch = function (e, t, s) {
            var i = p.updateSearch,
              a = new i.args();
            (a.authenticationToken = e), (a.search = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.expungeSearch = function (e, t, s) {
            var i = p.expungeSearch,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.findNotes = function (e, t, s, i, a) {
            var n = p.findNotes,
              o = new n.args();
            (o.authenticationToken = e), (o.filter = t), (o.offset = s), (o.maxNotes = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.findNoteOffset = function (e, t, s, i) {
            var a = p.findNoteOffset,
              n = new a.args();
            (n.authenticationToken = e), (n.filter = t), (n.guid = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findNotesMetadata = function (e, t, s, i, a, n) {
            var o = p.findNotesMetadata,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (u.prototype.filteredSearch = function (e, t, s, i) {
            var a = p.filteredSearch,
              n = new a.args();
            (n.authenticationToken = e), (n.request = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNoteSnippets = function (e, t, s, i) {
            var a = p.getNoteSnippets,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuids = t), (n.maxSnippetLength = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNoteSnippetsV2 = function (e, t, s, i) {
            var a = p.getNoteSnippetsV2,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuids = t), (n.maxSnippetLength = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findNoteCounts = function (e, t, s, i) {
            var a = p.findNoteCounts,
              n = new a.args();
            (n.authenticationToken = e), (n.filter = t), (n.withTrash = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNoteWithResultSpec = function (e, t, s, i) {
            var a = p.getNoteWithResultSpec,
              n = new a.args();
            (n.authenticationToken = e), (n.guid = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNote = function (e, t, s, i, a, n, o) {
            var r = p.getNote,
              u = new r.args();
            (u.authenticationToken = e),
              (u.guid = t),
              (u.withContent = s),
              (u.withResourcesData = i),
              (u.withResourcesRecognition = a),
              (u.withResourcesAlternateData = n),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getPreferences = function (e, t, s) {
            var i = p.getPreferences,
              a = new i.args();
            (a.authenticationToken = e), (a.preferenceNames = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updatePreferences = function (e, t, s) {
            var i = p.updatePreferences,
              a = new i.args();
            (a.authenticationToken = e), (a.preferencesToUpdate = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteApplicationData = function (e, t, s) {
            var i = p.getNoteApplicationData,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteApplicationDataEntry = function (e, t, s, i) {
            var a = p.getNoteApplicationDataEntry,
              n = new a.args();
            (n.authenticationToken = e), (n.guid = t), (n.key = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setNoteApplicationDataEntry = function (e, t, s, i, a) {
            var n = p.setNoteApplicationDataEntry,
              o = new n.args();
            (o.authenticationToken = e), (o.guid = t), (o.key = s), (o.value = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.unsetNoteApplicationDataEntry = function (e, t, s, i) {
            var a = p.unsetNoteApplicationDataEntry,
              n = new a.args();
            (n.authenticationToken = e), (n.guid = t), (n.key = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNoteContent = function (e, t, s) {
            var i = p.getNoteContent,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteSearchText = function (e, t, s, i, a) {
            var n = p.getNoteSearchText,
              o = new n.args();
            (o.authenticationToken = e),
              (o.guid = t),
              (o.noteOnly = s),
              (o.tokenizeForIndexing = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.getResourceSearchText = function (e, t, s) {
            var i = p.getResourceSearchText,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteTagNames = function (e, t, s) {
            var i = p.getNoteTagNames,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createNote = function (e, t, s) {
            var i = p.createNote,
              a = new i.args();
            (a.authenticationToken = e), (a.note = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateNote = function (e, t, s) {
            var i = p.updateNote,
              a = new i.args();
            (a.authenticationToken = e), (a.note = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.setContentClass = function (e, t, s, i) {
            var a = p.setContentClass,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuid = t), (n.contentClass = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.deleteNote = function (e, t, s) {
            var i = p.deleteNote,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.expungeNote = function (e, t, s) {
            var i = p.expungeNote,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.expungeNotes = function (e, t, s) {
            var i = p.expungeNotes,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuids = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.expungeInactiveNotes = function (e, t) {
            var s = p.expungeInactiveNotes,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.copyNote = function (e, t, s, i) {
            var a = p.copyNote,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuid = t), (n.toNotebookGuid = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.importPublicNote = function (e, t, s, i, a, n) {
            var o = p.importPublicNote,
              r = new o.args();
            (r.authenticationToken = e),
              (r.shardId = t),
              (r.noteGuid = s),
              (r.noteKey = i),
              (r.toNotebookGuid = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (u.prototype.listNoteVersions = function (e, t, s) {
            var i = p.listNoteVersions,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteVersion = function (e, t, s, i, a, n, o) {
            var r = p.getNoteVersion,
              u = new r.args();
            (u.authenticationToken = e),
              (u.noteGuid = t),
              (u.updateSequenceNum = s),
              (u.withResourcesData = i),
              (u.withResourcesRecognition = a),
              (u.withResourcesAlternateData = n),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResource = function (e, t, s, i, a, n, o) {
            var r = p.getResource,
              u = new r.args();
            (u.authenticationToken = e),
              (u.guid = t),
              (u.withData = s),
              (u.withRecognition = i),
              (u.withAttributes = a),
              (u.withAlternateData = n),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResourceApplicationData = function (e, t, s) {
            var i = p.getResourceApplicationData,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getResourceApplicationDataEntry = function (e, t, s, i) {
            var a = p.getResourceApplicationDataEntry,
              n = new a.args();
            (n.authenticationToken = e), (n.guid = t), (n.key = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setResourceApplicationDataEntry = function (e, t, s, i, a) {
            var n = p.setResourceApplicationDataEntry,
              o = new n.args();
            (o.authenticationToken = e), (o.guid = t), (o.key = s), (o.value = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.unsetResourceApplicationDataEntry = function (e, t, s, i) {
            var a = p.unsetResourceApplicationDataEntry,
              n = new a.args();
            (n.authenticationToken = e), (n.guid = t), (n.key = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.updateResource = function (e, t, s) {
            var i = p.updateResource,
              a = new i.args();
            (a.authenticationToken = e), (a.resource = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getResourceData = function (e, t, s) {
            var i = p.getResourceData,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getResourceByHash = function (e, t, s, i, a, n, o) {
            var r = p.getResourceByHash,
              u = new r.args();
            (u.authenticationToken = e),
              (u.noteGuid = t),
              (u.contentHash = s),
              (u.withData = i),
              (u.withRecognition = a),
              (u.withAlternateData = n),
              r.sendRequest(this.output, this.seqid++, u, o);
          }),
          (u.prototype.getResourceRecognition = function (e, t, s) {
            var i = p.getResourceRecognition,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getResourceAlternateData = function (e, t, s) {
            var i = p.getResourceAlternateData,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getResourceAttributes = function (e, t, s) {
            var i = p.getResourceAttributes,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getAds = function (e, t, s) {
            var i = p.getAds,
              a = new i.args();
            (a.authenticationToken = e), (a.adParameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getRandomAd = function (e, t, s) {
            var i = p.getRandomAd,
              a = new i.args();
            (a.authenticationToken = e), (a.adParameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getPublicNotebook = function (e, t, s) {
            var i = p.getPublicNotebook,
              a = new i.args();
            (a.userId = e), (a.publicUri = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createSharedNotebook = function (e, t, s) {
            var i = p.createSharedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.sharedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.shareNotebook = function (e, t, s, i) {
            var a = p.shareNotebook,
              n = new a.args();
            (n.authenticationToken = e), (n.sharedNotebook = t), (n.message = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.createOrUpdateNotebookShares = function (e, t, s) {
            var i = p.createOrUpdateNotebookShares,
              a = new i.args();
            (a.authenticationToken = e), (a.shareTemplate = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateSharedNotebook = function (e, t, s) {
            var i = p.updateSharedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.sharedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.setSharedNotebookRecipientSettings = function (e, t, s, i) {
            var a = p.setSharedNotebookRecipientSettings,
              n = new a.args();
            (n.authenticationToken = e),
              (n.sharedNotebookId = t),
              (n.recipientSettings = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setNotebookRecipientSettings = function (e, t, s, i) {
            var a = p.setNotebookRecipientSettings,
              n = new a.args();
            (n.authenticationToken = e), (n.notebookGuid = t), (n.recipientSettings = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.sendMessageToSharedNotebookMembers = function (e, t, s, i, a) {
            var n = p.sendMessageToSharedNotebookMembers,
              o = new n.args();
            (o.authenticationToken = e),
              (o.notebookGuid = t),
              (o.messageText = s),
              (o.recipients = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.listSharedNotebooks = function (e, t) {
            var s = p.listSharedNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.expungeSharedNotebooks = function (e, t, s) {
            var i = p.expungeSharedNotebooks,
              a = new i.args();
            (a.authenticationToken = e), (a.sharedNotebookIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createLinkedNotebook = function (e, t, s) {
            var i = p.createLinkedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getOrCreateLinkedNotebook = function (e, t, s) {
            var i = p.getOrCreateLinkedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateLinkedNotebook = function (e, t, s) {
            var i = p.updateLinkedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.linkedNotebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.listLinkedNotebooks = function (e, t) {
            var s = p.listLinkedNotebooks,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.expungeLinkedNotebook = function (e, t, s) {
            var i = p.expungeLinkedNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.authenticateToSharedNotebook = function (e, t, s) {
            var i = p.authenticateToSharedNotebook,
              a = new i.args();
            (a.shareKeyOrGlobalId = e), (a.authenticationToken = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getSharedNotebookByAuth = function (e, t) {
            var s = p.getSharedNotebookByAuth,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (u.prototype.emailNote = function (e, t, s) {
            var i = p.emailNote,
              a = new i.args();
            (a.authenticationToken = e), (a.parameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.emailNoteV2 = function (e, t, s, i) {
            var a = p.emailNoteV2,
              n = new a.args();
            (n.authenticationToken = e), (n.parameters = t), (n.untitledTask = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.shareNote = function (e, t, s) {
            var i = p.shareNote,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getSharedNoteKey = function (e, t, s) {
            var i = p.getSharedNoteKey,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.stopSharingNote = function (e, t, s) {
            var i = p.stopSharingNote,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.stopSharingNoteWithRecipients = function (e, t, s) {
            var i = p.stopSharingNoteWithRecipients,
              a = new i.args();
            (a.authenticationToken = e), (a.guid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.authenticateToSharedNote = function (e, t, s, i) {
            var a = p.authenticateToSharedNote,
              n = new a.args();
            (n.guid = e), (n.noteKey = t), (n.authenticationToken = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.createOrUpdateSharedNotes = function (e, t, s) {
            var i = p.createOrUpdateSharedNotes,
              a = new i.args();
            (a.authenticationToken = e), (a.shareTemplate = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.findRelated = function (e, t, s, i) {
            var a = p.findRelated,
              n = new a.args();
            (n.authenticationToken = e), (n.query = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findSearchSuggestions = function (e, t, s, i) {
            var a = p.findSearchSuggestions,
              n = new a.args();
            (n.authenticationToken = e), (n.query = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findSearchSuggestionsV2 = function (e, t, s) {
            var i = p.findSearchSuggestionsV2,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateUserSetting = function (e, t, s, i) {
            var a = p.updateUserSetting,
              n = new a.args();
            (n.authenticationToken = e), (n.setting = t), (n.value = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findTimeZones = function (e, t, s, i) {
            var a = p.findTimeZones,
              n = new a.args();
            (n.authenticationToken = e), (n.timeZoneSpec = t), (n.maxTimeZones = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.findContacts = function (e, t, s) {
            var i = p.findContacts,
              a = new i.args();
            (a.authenticationToken = e), (a.query = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.findInBusiness = function (e, t, s) {
            var i = p.findInBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.query = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.shareNoteWithBusiness = function (e, t, s) {
            var i = p.shareNoteWithBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.stopSharingNoteWithBusiness = function (e, t, s) {
            var i = p.stopSharingNoteWithBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.requestAccessToNotebook = function (e, t, s, i) {
            var a = p.requestAccessToNotebook,
              n = new a.args();
            (n.authToken = e), (n.notebookGuid = t), (n.privilegeLevel = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNoteLockStatus = function (e, t, s) {
            var i = p.getNoteLockStatus,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.acquireNoteLock = function (e, t, s) {
            var i = p.acquireNoteLock,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.acquireNoteLockWithDeviceId = function (e, t, s, i) {
            var a = p.acquireNoteLockWithDeviceId,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuid = t), (n.deviceId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.releaseNoteLock = function (e, t, s) {
            var i = p.releaseNoteLock,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.releaseNoteLockWithDeviceId = function (e, t, s, i) {
            var a = p.releaseNoteLockWithDeviceId,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuid = t), (n.deviceId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getViewersForNotes = function (e, t, s) {
            var i = p.getViewersForNotes,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuids = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.updateNoteIfUsnMatches = function (e, t, s) {
            var i = p.updateNoteIfUsnMatches,
              a = new i.args();
            (a.authenticationToken = e), (a.note = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.manageNotebookShares = function (e, t, s) {
            var i = p.manageNotebookShares,
              a = new i.args();
            (a.authenticationToken = e), (a.parameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNotebookShares = function (e, t, s) {
            var i = p.getNotebookShares,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getNoteShares = function (e, t, s) {
            var i = p.getNoteShares,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.manageNoteShares = function (e, t, s) {
            var i = p.manageNoteShares,
              a = new i.args();
            (a.authenticationToken = e), (a.parameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.joinPublishedBusinessNotebook = function (e, t, s) {
            var i = p.joinPublishedBusinessNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.unpublishNotebook = function (e, t, s, i) {
            var a = p.unpublishNotebook,
              n = new a.args();
            (n.authenticationToken = e),
              (n.notebookGuid = t),
              (n.convertGroupSharesToIndividual = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getNotebookSharesEmailAddresses = function (e, t, s, i, a) {
            var n = p.getNotebookSharesEmailAddresses,
              o = new n.args();
            (o.authenticationToken = e),
              (o.notebookGuid = t),
              (o.identities = s),
              (o.skipUnknownUserIdentities = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (u.prototype.renameNotebook = function (e, t, s, i) {
            var a = p.renameNotebook,
              n = new a.args();
            (n.authenticationToken = e), (n.notebookGuid = t), (n.name = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.sendLogRequest = function (e, t, s) {
            var i = p.sendLogRequest,
              a = new i.args();
            (a.authenticationToken = e), (a.logRequest = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getLinkedAccountSyncState = function (e, t, s) {
            var i = p.getLinkedAccountSyncState,
              a = new i.args();
            (a.authenticationToken = e), (a.linkedAccount = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.authenticateToNote = function (e, t, s) {
            var i = p.authenticateToNote,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.createWorkspace = function (e, t, s, i) {
            var a = p.createWorkspace,
              n = new a.args();
            (n.authenticationToken = e), (n.workspace = t), (n.spec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.getWorkspace = function (e, t, s, i) {
            var a = p.getWorkspace,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), (n.responseSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.listWorkspaces = function (e, t, s, i) {
            var a = p.listWorkspaces,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceResponseSpec = t), (n.filter = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.updateWorkspace = function (e, t, s) {
            var i = p.updateWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspace = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.manageWorkspaceSharing = function (e, t, s) {
            var i = p.manageWorkspaceSharing,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.joinWorkspace = function (e, t, s) {
            var i = p.joinWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.leaveWorkspace = function (e, t, s) {
            var i = p.leaveWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.getWorkspaceUserInterfaceProperties = function (e, t, s) {
            var i = p.getWorkspaceUserInterfaceProperties,
              a = new i.args();
            (a.authentiationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (u.prototype.setWorkspaceUserInterfaceLayoutStyle = function (e, t, s, i) {
            var a = p.setWorkspaceUserInterfaceLayoutStyle,
              n = new a.args();
            (n.authentiationToken = e), (n.workspaceGuid = t), (n.layoutStyle = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setNotebookUserInterfaceDisplayOrder = function (e, t, s, i) {
            var a = p.setNotebookUserInterfaceDisplayOrder,
              n = new a.args();
            (n.authentiationToken = e), (n.workspaceGuid = t), (n.notebookDisplayOrder = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setNotebookUserInterfaceColors = function (e, t, s, i) {
            var a = p.setNotebookUserInterfaceColors,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), (n.updatedColors = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.setNoteUserInterfaceDisplayOrder = function (e, t, s, i) {
            var a = p.setNoteUserInterfaceDisplayOrder,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), (n.noteDisplayOrder = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (u.prototype.validateAndCreateShare = function (e, t, s, i, a) {
            var n = p.validateAndCreateShare,
              o = new n.args();
            (o.authenticationToken = e), (o.userId = t), (o.noteGuid = s), (o.noteKey = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (e.exports.NoteStore.Client = u),
          (d.prototype.start = function () {
            this.stransport.listen();
          }),
          (d.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.NoteStore.Server = d);
      },
      88606: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965),
          n = s(77915),
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
            4: { alias: "contact", type: i.Type.STRUCT, def: n.Contact }
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
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
            3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            4: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
          })),
          (e.exports.ManageWorkspaceMembershipResponse = i.Struct.define("ManageWorkspaceMembershipResponse", {
            1: { alias: "membership", type: i.Type.STRUCT, def: e.exports.WorkspaceMembership },
            2: { alias: "errorResponse", type: i.Type.STRUCT, def: e.exports.ErrorResponse }
          })),
          (e.exports.ManageWorkspaceInvitationResponse = i.Struct.define("ManageWorkspaceInvitationResponse", {
            1: { alias: "invitation", type: i.Type.STRUCT, def: e.exports.WorkspaceInvitation },
            2: { alias: "membership", type: i.Type.STRUCT, def: e.exports.WorkspaceMembership },
            3: { alias: "identity", type: i.Type.STRUCT, def: n.Identity },
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
            3: { alias: "identityByInvitationsGuid", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, n.Identity) },
            4: { alias: "memberships", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.WorkspaceMembership) },
            6: { alias: "workspaceRestrictions", type: i.Type.STRUCT, def: e.exports.WorkspaceRestrictions },
            7: { alias: "notebookGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
            8: { alias: "accessInfo", type: i.Type.STRUCT, def: e.exports.AccessInfo },
            9: { alias: "notebookRestrictions", type: i.Type.STRUCT, def: n.NotebookRestrictions },
            10: { alias: "aggregations", type: i.Type.STRUCT, def: e.exports.WorkspaceAggregations },
            11: { alias: "member", type: i.Type.BOOL }
          })),
          (e.exports.CopyWorkspaceSpec = i.Struct.define("CopyWorkspaceSpec", {
            1: { alias: "workspaceGuid", type: i.Type.STRING },
            2: { alias: "includeNotes", type: i.Type.BOOL }
          }));
      },
      41511: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965);
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
        var n = (e.exports.TeamSearch = {});
        function o(e) {
          (this.output = e), (this.seqid = 0);
        }
        function r(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), n))
            e[a] && this.processor.addMethod(n[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (n.queryNotes = i.Method.define({
          alias: "queryNotes",
          args: i.Struct.define("queryNotesArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "query", type: i.Type.STRUCT, def: e.exports.ETQuery, index: 1 }
          }),
          result: i.Struct.define("queryNotesResult", {
            0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchResult },
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
            3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
          })
        })),
          (n.querySuggestion = i.Method.define({
            alias: "querySuggestion",
            args: i.Struct.define("querySuggestionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteFilter", type: i.Type.STRUCT, def: e.exports.ETNoteFilter, index: 1 }
            }),
            result: i.Struct.define("querySuggestionResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SearchSuggestion },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (o.prototype.queryNotes = function (e, t, s) {
            var i = n.queryNotes,
              a = new i.args();
            (a.authenticationToken = e), (a.query = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (o.prototype.querySuggestion = function (e, t, s) {
            var i = n.querySuggestion,
              a = new i.args();
            (a.authenticationToken = e), (a.noteFilter = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      77915: (e, t, s) => {
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
      60570: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(77915),
          n = s(52965),
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
            4: { alias: "user", type: i.Type.STRUCT, def: a.User },
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
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), r))
            e[a] && this.processor.addMethod(r[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.authenticateLongSessionV2 = i.Method.define({
            alias: "authenticateLongSessionV2",
            args: i.Struct.define("authenticateLongSessionV2Args", {
              1: { alias: "authParams", type: i.Type.STRUCT, def: e.exports.AuthenticationParameters, index: 0 }
            }),
            result: i.Struct.define("authenticateLongSessionV2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.revokeLongSession = i.Method.define({
            alias: "revokeLongSession",
            args: i.Struct.define("revokeLongSessionArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("revokeLongSessionResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.authenticateToBusiness = i.Method.define({
            alias: "authenticateToBusiness",
            args: i.Struct.define("authenticateToBusinessArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("authenticateToBusinessResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.refreshAuthentication = i.Method.define({
            alias: "refreshAuthentication",
            args: i.Struct.define("refreshAuthenticationArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("refreshAuthenticationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.refreshAuthenticationForPing = i.Method.define({
            alias: "refreshAuthenticationForPing",
            args: i.Struct.define("refreshAuthenticationForPingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("refreshAuthenticationForPingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getUser = i.Method.define({
            alias: "getUser",
            args: i.Struct.define("getUserArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.User },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getPublicUserInfo = i.Method.define({
            alias: "getPublicUserInfo",
            args: i.Struct.define("getPublicUserInfoArgs", { 1: { alias: "username", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getPublicUserInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.PublicUserInfo },
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (r.getPremiumInfo = i.Method.define({
            alias: "getPremiumInfo",
            args: i.Struct.define("getPremiumInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getPremiumInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.PremiumInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getSubscriptionInfo = i.Method.define({
            alias: "getSubscriptionInfo",
            args: i.Struct.define("getSubscriptionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getSubscriptionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.SubscriptionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getNoteStoreUrl = i.Method.define({
            alias: "getNoteStoreUrl",
            args: i.Struct.define("getNoteStoreUrlArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getNoteStoreUrlResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getUserUrls = i.Method.define({
            alias: "getUserUrls",
            args: i.Struct.define("getUserUrlsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserUrlsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.UserUrls },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.inviteToBusiness = i.Method.define({
            alias: "inviteToBusiness",
            args: i.Struct.define("inviteToBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emailAddress", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("inviteToBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.removeFromBusiness = i.Method.define({
            alias: "removeFromBusiness",
            args: i.Struct.define("removeFromBusinessArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "emailAddress", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("removeFromBusinessResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (r.listBusinessUsers = i.Method.define({
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
          (r.listBusinessUsersProfileInfo = i.Method.define({
            alias: "listBusinessUsersProfileInfo",
            args: i.Struct.define("listBusinessUsersProfileInfoArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "businessUserFilter", type: i.Type.STRUCT, def: a.BusinessUserFilter, index: 1 },
              3: { alias: "userProfileInfoRequest", type: i.Type.STRUCT, def: a.UserProfileInfoRequest, index: 2 }
            }),
            result: i.Struct.define("listBusinessUsersProfileInfoResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.UserProfile) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.listBusinessInvitations = i.Method.define({
            alias: "listBusinessInvitations",
            args: i.Struct.define("listBusinessInvitationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "includeRequestedInvitations", type: i.Type.BOOL, index: 1 }
            }),
            result: i.Struct.define("listBusinessInvitationsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, a.BusinessInvitation) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (r.unregisterForSyncPushNotifications = i.Method.define({
            alias: "unregisterForSyncPushNotifications",
            args: i.Struct.define("unregisterForSyncPushNotificationsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("unregisterForSyncPushNotificationsResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: n.EDAMNotFoundException }
            })
          })),
          (r.createSessionAuthenticationToken = i.Method.define({
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
          (r.getAccountLimits = i.Method.define({
            alias: "getAccountLimits",
            args: i.Struct.define("getAccountLimitsArgs", { 1: { alias: "serviceLevel", type: i.Type.I32, index: 0 } }),
            result: i.Struct.define("getAccountLimitsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: a.AccountLimits },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException }
            })
          })),
          (r.getConnectedIdentities = i.Method.define({
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
          (r.getLoginInfo = i.Method.define({
            alias: "getLoginInfo",
            args: i.Struct.define("getLoginInfoArgs", {
              1: { alias: "getLoginInfoRequest", type: i.Type.STRUCT, def: e.exports.GetLoginInfoRequest, index: 0 }
            }),
            result: i.Struct.define("getLoginInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.LoginInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (r.getNAPAccessToken = i.Method.define({
            alias: "getNAPAccessToken",
            args: i.Struct.define("getNAPAccessTokenArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getNAPAccessTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: n.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: n.EDAMSystemException }
            })
          })),
          (p.prototype.checkVersion = function (e, t, s, i) {
            var a = r.checkVersion,
              n = new a.args();
            (n.clientName = e), (n.edamVersionMajor = t), (n.edamVersionMinor = s), a.sendRequest(this.output, this.seqid++, n, i);
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
          (p.prototype.authenticate = function (e, t, s, i, a, n) {
            var o = r.authenticate,
              p = new o.args();
            (p.username = e),
              (p.password = t),
              (p.consumerKey = s),
              (p.consumerSecret = i),
              (p.supportsTwoFactor = a),
              o.sendRequest(this.output, this.seqid++, p, n);
          }),
          (p.prototype.authenticateOpenID = function (e, t, s, i, a, n, o, p) {
            var u = r.authenticateOpenID,
              d = new u.args();
            (d.credential = e),
              (d.consumerKey = t),
              (d.consumerSecret = s),
              (d.deviceIdentifier = i),
              (d.deviceDescription = a),
              (d.authLongSession = n),
              (d.supportsTwoFactor = o),
              u.sendRequest(this.output, this.seqid++, d, p);
          }),
          (p.prototype.authenticateLongSession = function (e, t, s, i, a, n, o, p) {
            var u = r.authenticateLongSession,
              d = new u.args();
            (d.username = e),
              (d.password = t),
              (d.consumerKey = s),
              (d.consumerSecret = i),
              (d.deviceIdentifier = a),
              (d.deviceDescription = n),
              (d.supportsTwoFactor = o),
              u.sendRequest(this.output, this.seqid++, d, p);
          }),
          (p.prototype.authenticateLongSessionV2 = function (e, t) {
            var s = r.authenticateLongSessionV2,
              i = new s.args();
            (i.authParams = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (p.prototype.completeTwoFactorAuthentication = function (e, t, s, i, a) {
            var n = r.completeTwoFactorAuthentication,
              o = new n.args();
            (o.authenticationToken = e),
              (o.oneTimeCode = t),
              (o.deviceIdentifier = s),
              (o.deviceDescription = i),
              n.sendRequest(this.output, this.seqid++, o, a);
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
              a = new i.args();
            (a.authenticationToken = e), (a.emailAddress = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.removeFromBusiness = function (e, t, s) {
            var i = r.removeFromBusiness,
              a = new i.args();
            (a.authenticationToken = e), (a.emailAddress = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.updateBusinessUserIdentifier = function (e, t, s, i) {
            var a = r.updateBusinessUserIdentifier,
              n = new a.args();
            (n.authenticationToken = e), (n.oldEmailAddress = t), (n.newEmailAddress = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (p.prototype.listBusinessUsers = function (e, t, s) {
            var i = r.listBusinessUsers,
              a = new i.args();
            (a.authenticationToken = e), (a.businessUserFilter = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.listBusinessUsersProfileInfo = function (e, t, s, i) {
            var a = r.listBusinessUsersProfileInfo,
              n = new a.args();
            (n.authenticationToken = e),
              (n.businessUserFilter = t),
              (n.userProfileInfoRequest = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (p.prototype.listBusinessInvitations = function (e, t, s) {
            var i = r.listBusinessInvitations,
              a = new i.args();
            (a.authenticationToken = e), (a.includeRequestedInvitations = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.registerForSyncPushNotifications = function (e, t, s) {
            var i = r.registerForSyncPushNotifications,
              a = new i.args();
            (a.authenticationToken = e), (a.credentials = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (p.prototype.multiRegisterForSyncPushNotifications = function (e, t, s) {
            var i = r.multiRegisterForSyncPushNotifications,
              a = new i.args();
            (a.authenticationTokens = e), (a.credentials = t), i.sendRequest(this.output, this.seqid++, a, s);
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
              a = new i.args();
            (a.authenticationToken = e), (a.identityIds = t), i.sendRequest(this.output, this.seqid++, a, s);
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
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
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
      2401: (e, t, s) => {
        var i = s(24527).Thrift,
          a = s(52965),
          n = s(77915),
          o = s(27909),
          r = s(35137),
          p = s(53109),
          u = s(88606),
          d = s(60570);
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
            7: { alias: "logFile", type: i.Type.STRUCT, def: n.Data },
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
            2: { alias: "userProfile", type: i.Type.STRUCT, def: n.UserProfile }
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
            2: { alias: "byOwnerToken", type: i.Type.STRUCT, def: n.NoteRestrictions },
            3: { alias: "byBusinessToken", type: i.Type.STRUCT, def: n.NoteRestrictions }
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
            6: { alias: "subscriptionInfo", type: i.Type.STRUCT, def: n.SubscriptionInfo },
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
            1: { alias: "createdNotebooks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Notebook) },
            2: { alias: "failures", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.MoveNotebooksBetweenAccountsError) }
          })),
          (e.exports.MoveNoteBetweenAccountsParams = i.Struct.define("MoveNoteBetweenAccountsParams", {
            1: { alias: "sourceNoteGuid", type: i.Type.STRING },
            2: { alias: "targetNotebookGuid", type: i.Type.STRING }
          })),
          (e.exports.MoveNoteBetweenAccountsResult = i.Struct.define("MoveNoteBetweenAccountsResult", {
            1: { alias: "sourceNote", type: i.Type.STRUCT, def: n.Note },
            2: { alias: "createdNote", type: i.Type.STRUCT, def: n.Note }
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
        var y = (e.exports.Utility = {});
        function c(e) {
          (this.output = e), (this.seqid = 0);
        }
        function l(e, t, s) {
          var a;
          for (a in ((this.service = e), (this.stransport = t), (this.processor = new i.Processor()), y))
            e[a] && this.processor.addMethod(y[a], e[a].bind(e));
          this.stransport.process = function (e, t, i) {
            var a = new s(e),
              n = new s(t);
            this.processor.process(a, n, i);
          }.bind(this);
        }
        (y.sendMarketingEmail = i.Method.define({
          alias: "sendMarketingEmail",
          args: i.Struct.define("sendMarketingEmailArgs", {
            1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
            2: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MarketingEmailParameters, index: 1 }
          }),
          result: i.Struct.define("sendMarketingEmailResult", {
            1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
            2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
          })
        })),
          (y.fileSupportTicket = i.Method.define({
            alias: "fileSupportTicket",
            args: i.Struct.define("fileSupportTicketArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "ticket", type: i.Type.STRUCT, def: e.exports.SupportTicket, index: 1 }
            }),
            result: i.Struct.define("fileSupportTicketResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.fileSupportTicketReturnId = i.Method.define({
            alias: "fileSupportTicketReturnId",
            args: i.Struct.define("fileSupportTicketReturnIdArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "ticket", type: i.Type.STRUCT, def: e.exports.SupportTicket, index: 1 }
            }),
            result: i.Struct.define("fileSupportTicketReturnIdResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.sendAppFeedback = i.Method.define({
            alias: "sendAppFeedback",
            args: i.Struct.define("sendAppFeedbackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "appFeedback", type: i.Type.STRUCT, def: e.exports.AppFeedback, index: 1 }
            }),
            result: i.Struct.define("sendAppFeedbackResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.sendAppFeedbackForDevice = i.Method.define({
            alias: "sendAppFeedbackForDevice",
            args: i.Struct.define("sendAppFeedbackForDeviceArgs", {
              1: { alias: "deviceIdentifier", type: i.Type.STRING, index: 0 },
              2: { alias: "apiConsumerKey", type: i.Type.STRING, index: 1 },
              3: { alias: "apiConsumerSecret", type: i.Type.STRING, index: 2 },
              4: { alias: "appFeedback", type: i.Type.STRUCT, def: e.exports.AppFeedback, index: 3 }
            }),
            result: i.Struct.define("sendAppFeedbackForDeviceResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getCrossPromotionInfo = i.Method.define({
            alias: "getCrossPromotionInfo",
            args: i.Struct.define("getCrossPromotionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getCrossPromotionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.CrossPromotionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.sendVerificationEmail = i.Method.define({
            alias: "sendVerificationEmail",
            args: i.Struct.define("sendVerificationEmailArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("sendVerificationEmailResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.confirmEmailAddress = i.Method.define({
            alias: "confirmEmailAddress",
            args: i.Struct.define("confirmEmailAddressArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("confirmEmailAddressResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getOAuthCredential = i.Method.define({
            alias: "getOAuthCredential",
            args: i.Struct.define("getOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("getOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getOAuthCredentialByEmailAndScope = i.Method.define({
            alias: "getOAuthCredentialByEmailAndScope",
            args: i.Struct.define("getOAuthCredentialByEmailAndScopeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 },
              3: { alias: "email", type: i.Type.STRING, index: 2 },
              4: { alias: "scope", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("getOAuthCredentialByEmailAndScopeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.hasOAuthCredential = i.Method.define({
            alias: "hasOAuthCredential",
            args: i.Struct.define("hasOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("hasOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getScopedGoogleOAuthCredential = i.Method.define({
            alias: "getScopedGoogleOAuthCredential",
            args: i.Struct.define("getScopedGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getScopedGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getAllScopedGoogleOAuthCredential = i.Method.define({
            alias: "getAllScopedGoogleOAuthCredential",
            args: i.Struct.define("getAllScopedGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getAllScopedGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.OAuthCredential) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.hasGoogleOAuthCredential = i.Method.define({
            alias: "hasGoogleOAuthCredential",
            args: i.Struct.define("hasGoogleOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "googleOAuthScope", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("hasGoogleOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.setOAuthCredential = i.Method.define({
            alias: "setOAuthCredential",
            args: i.Struct.define("setOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oAuthCredential", type: i.Type.STRUCT, def: e.exports.OAuthCredential, index: 1 }
            }),
            result: i.Struct.define("setOAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.OAuthCredential },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.deleteOAuthCredential = i.Method.define({
            alias: "deleteOAuthCredential",
            args: i.Struct.define("deleteOAuthCredentialArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 }
            }),
            result: i.Struct.define("deleteOAuthCredentialResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.deleteOAuthCredentialByEmailAndScope = i.Method.define({
            alias: "deleteOAuthCredentialByEmailAndScope",
            args: i.Struct.define("deleteOAuthCredentialByEmailAndScopeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "serviceId", type: i.Type.I16, index: 1 },
              3: { alias: "email", type: i.Type.STRING, index: 2 },
              4: { alias: "scope", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("deleteOAuthCredentialByEmailAndScopeResult", {
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.canNewOauthAccountBeAdded = i.Method.define({
            alias: "canNewOauthAccountBeAdded",
            args: i.Struct.define("canNewOauthAccountBeAddedArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("canNewOauthAccountBeAddedResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.validateAuthenticationTokenStatus = i.Method.define({
            alias: "validateAuthenticationTokenStatus",
            args: i.Struct.define("validateAuthenticationTokenStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokens", type: i.Type.STRUCT, def: e.exports.NAPAuthenticationTokens, index: 1 }
            }),
            result: i.Struct.define("validateAuthenticationTokenStatusResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getUserCardScanningEndDate = i.Method.define({
            alias: "getUserCardScanningEndDate",
            args: i.Struct.define("getUserCardScanningEndDateArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserCardScanningEndDateResult", {
              0: { alias: "returnValue", type: i.Type.I64 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getPromotionStatus = i.Method.define({
            alias: "getPromotionStatus",
            args: i.Struct.define("getPromotionStatusArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getPromotionStatusResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PromotionStatus) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.promotionsShown = i.Method.define({
            alias: "promotionsShown",
            args: i.Struct.define("promotionsShownArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("promotionsShownResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PromotionStatus) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.promotionOptedOut = i.Method.define({
            alias: "promotionOptedOut",
            args: i.Struct.define("promotionOptedOutArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "promotionId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("promotionOptedOutResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getRelatedContentSourcePreferences = i.Method.define({
            alias: "getRelatedContentSourcePreferences",
            args: i.Struct.define("getRelatedContentSourcePreferencesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getRelatedContentSourcePreferencesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RelatedContentSourcePreference) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.setRelatedContentSourceActivated = i.Method.define({
            alias: "setRelatedContentSourceActivated",
            args: i.Struct.define("setRelatedContentSourceActivatedArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 },
              3: { alias: "activated", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("setRelatedContentSourceActivatedResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.clearRelatedContentProfiles = i.Method.define({
            alias: "clearRelatedContentProfiles",
            args: i.Struct.define("clearRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("clearRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.addRelatedContentProfiles = i.Method.define({
            alias: "addRelatedContentProfiles",
            args: i.Struct.define("addRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "profiles", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RelatedContentProfile), index: 1 }
            }),
            result: i.Struct.define("addRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.updateRelatedContentProfiles = i.Method.define({
            alias: "updateRelatedContentProfiles",
            args: i.Struct.define("updateRelatedContentProfilesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sourceId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("updateRelatedContentProfilesResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getRelatedContentProfilePage = i.Method.define({
            alias: "getRelatedContentProfilePage",
            args: i.Struct.define("getRelatedContentProfilePageArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "profileId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getRelatedContentProfilePageResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RelatedContentProfilePage },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.importNotesFromEnex = i.Method.define({
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
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.setUserProfilePhoto = i.Method.define({
            alias: "setUserProfilePhoto",
            args: i.Struct.define("setUserProfilePhotoArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "photo", type: i.Type.BINARY, index: 1 }
            }),
            result: i.Struct.define("setUserProfilePhotoResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.removeUserProfilePhoto = i.Method.define({
            alias: "removeUserProfilePhoto",
            args: i.Struct.define("removeUserProfilePhotoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("removeUserProfilePhotoResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.setUserFullName = i.Method.define({
            alias: "setUserFullName",
            args: i.Struct.define("setUserFullNameArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "name", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("setUserFullNameResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getMessageInvitation = i.Method.define({
            alias: "getMessageInvitation",
            args: i.Struct.define("getMessageInvitationArgs", { 1: { alias: "messageInvitationId", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getMessageInvitationResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MessagingInvitation },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.claimMessageInvitation = i.Method.define({
            alias: "claimMessageInvitation",
            args: i.Struct.define("claimMessageInvitationArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "messageInvitationId", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("claimMessageInvitationResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.canPurchaseTeamStarterPack = i.Method.define({
            alias: "canPurchaseTeamStarterPack",
            args: i.Struct.define("canPurchaseTeamStarterPackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TeamStarterPackRequest, index: 1 }
            }),
            result: i.Struct.define("canPurchaseTeamStarterPackResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TeamStarterPackResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getTsdEligibility = i.Method.define({
            alias: "getTsdEligibility",
            args: i.Struct.define("getTsdEligibilityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.TierSelectionDisplayEligibilityRequest, index: 1 }
            }),
            result: i.Struct.define("getTsdEligibilityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.TierSelectionDisplayEligibilityResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.updatePassword = i.Method.define({
            alias: "updatePassword",
            args: i.Struct.define("updatePasswordArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "oldPassword", type: i.Type.STRING, index: 1 },
              3: { alias: "newPassword", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updatePasswordResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getIncentiveEligibility = i.Method.define({
            alias: "getIncentiveEligibility",
            args: i.Struct.define("getIncentiveEligibilityArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getIncentiveEligibilityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.IncentiveEligibilityResult },
              1: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.invalidateGoogleOauthCredential = i.Method.define({
            alias: "invalidateGoogleOauthCredential",
            args: i.Struct.define("invalidateGoogleOauthCredentialArgs", { 1: { alias: "authToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("invalidateGoogleOauthCredentialResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.invalidateGoogleOauthCredentialByEmailAndScope = i.Method.define({
            alias: "invalidateGoogleOauthCredentialByEmailAndScope",
            args: i.Struct.define("invalidateGoogleOauthCredentialByEmailAndScopeArgs", {
              1: { alias: "authToken", type: i.Type.STRING, index: 0 },
              2: { alias: "email", type: i.Type.STRING, index: 1 },
              3: { alias: "scope", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("invalidateGoogleOauthCredentialByEmailAndScopeResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.associateOpenIDWithUser = i.Method.define({
            alias: "associateOpenIDWithUser",
            args: i.Struct.define("associateOpenIDWithUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: p.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("associateOpenIDWithUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.dissociateOpenIDFromUser = i.Method.define({
            alias: "dissociateOpenIDFromUser",
            args: i.Struct.define("dissociateOpenIDFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "credential", type: i.Type.STRUCT, def: p.OpenIdCredential, index: 1 }
            }),
            result: i.Struct.define("dissociateOpenIDFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.dissociateAllOpenIDsFromUser = i.Method.define({
            alias: "dissociateAllOpenIDsFromUser",
            args: i.Struct.define("dissociateAllOpenIDsFromUserArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("dissociateAllOpenIDsFromUserResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.moveNotebookBetweenAccounts = i.Method.define({
            alias: "moveNotebookBetweenAccounts",
            args: i.Struct.define("moveNotebookBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNotebookBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNotebookBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Notebook },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.moveNotebooksBetweenAccounts = i.Method.define({
            alias: "moveNotebooksBetweenAccounts",
            args: i.Struct.define("moveNotebooksBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNotebooksBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNotebooksBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MoveNotebooksBetweenAccountsResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.moveNoteBetweenAccounts = i.Method.define({
            alias: "moveNoteBetweenAccounts",
            args: i.Struct.define("moveNoteBetweenAccountsArgs", {
              1: { alias: "sourceAuthenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "targetAuthenticationToken", type: i.Type.STRING, index: 1 },
              3: { alias: "parameters", type: i.Type.STRUCT, def: e.exports.MoveNoteBetweenAccountsParams, index: 2 }
            }),
            result: i.Struct.define("moveNoteBetweenAccountsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MoveNoteBetweenAccountsResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.findNotesMetadataForIon = i.Method.define({
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.findNotesCardMetadata = i.Method.define({
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getNotesCardMetadata = i.Method.define({
            alias: "getNotesCardMetadata",
            args: i.Struct.define("getNotesCardMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuids", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 },
              3: { alias: "resultSpec", type: i.Type.STRUCT, def: r.NoteResultSpec, index: 2 }
            }),
            result: i.Struct.define("getNotesCardMetadataResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.createWorkspaceWithResultSpec = i.Method.define({
            alias: "createWorkspaceWithResultSpec",
            args: i.Struct.define("createWorkspaceWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 },
              3: { alias: "spec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("createWorkspaceWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.createWorkspace = i.Method.define({
            alias: "createWorkspace",
            args: i.Struct.define("createWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 }
            }),
            result: i.Struct.define("createWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.copyWorkspace = i.Method.define({
            alias: "copyWorkspace",
            args: i.Struct.define("copyWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spec", type: i.Type.STRUCT, def: u.CopyWorkspaceSpec, index: 1 }
            }),
            result: i.Struct.define("copyWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.listSyncingNotebookGuidsInBusinessAccount = i.Method.define({
            alias: "listSyncingNotebookGuidsInBusinessAccount",
            args: i.Struct.define("listSyncingNotebookGuidsInBusinessAccountArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("listSyncingNotebookGuidsInBusinessAccountResult", {
              0: { alias: "returnValue", type: i.Type.SET, def: i.Set.define(i.Type.STRING) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.getWorkspace = i.Method.define({
            alias: "getWorkspace",
            args: i.Struct.define("getWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 }
            }),
            result: i.Struct.define("getWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getWorkspaceIfUserHasPrivilege = i.Method.define({
            alias: "getWorkspaceIfUserHasPrivilege",
            args: i.Struct.define("getWorkspaceIfUserHasPrivilegeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "responseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 2 },
              4: { alias: "privilegeLevel", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("getWorkspaceIfUserHasPrivilegeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.WorkspaceResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listWorkspaces = i.Method.define({
            alias: "listWorkspaces",
            args: i.Struct.define("listWorkspacesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listWorkspacesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, u.Workspace) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.listWorkspacesWithResultSpec = i.Method.define({
            alias: "listWorkspacesWithResultSpec",
            args: i.Struct.define("listWorkspacesWithResultSpecArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceResponseSpec", type: i.Type.STRUCT, def: u.WorkspaceResponseSpec, index: 1 },
              3: { alias: "filter", type: i.Type.STRUCT, def: u.WorkspaceFilter, index: 2 }
            }),
            result: i.Struct.define("listWorkspacesWithResultSpecResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, u.WorkspaceResponse) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException }
            })
          })),
          (y.updateWorkspace = i.Method.define({
            alias: "updateWorkspace",
            args: i.Struct.define("updateWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspace", type: i.Type.STRUCT, def: u.Workspace, index: 1 }
            }),
            result: i.Struct.define("updateWorkspaceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.Workspace },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.moveNotebookToAccount = i.Method.define({
            alias: "moveNotebookToAccount",
            args: i.Struct.define("moveNotebookToAccountArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("moveNotebookToAccountResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.manageWorkspaceSharing = i.Method.define({
            alias: "manageWorkspaceSharing",
            args: i.Struct.define("manageWorkspaceSharingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: u.ManageWorkspaceSharingRequest, index: 1 }
            }),
            result: i.Struct.define("manageWorkspaceSharingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.ManageWorkspaceSharingResponse },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.joinWorkspace = i.Method.define({
            alias: "joinWorkspace",
            args: i.Struct.define("joinWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("joinWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.leaveWorkspace = i.Method.define({
            alias: "leaveWorkspace",
            args: i.Struct.define("leaveWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("leaveWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.sendSharedNotebookViewedEvent = i.Method.define({
            alias: "sendSharedNotebookViewedEvent",
            args: i.Struct.define("sendSharedNotebookViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendSharedNotebookViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.sendSharedNoteViewedEvent = i.Method.define({
            alias: "sendSharedNoteViewedEvent",
            args: i.Struct.define("sendSharedNoteViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendSharedNoteViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.sendWorkspaceViewedEvent = i.Method.define({
            alias: "sendWorkspaceViewedEvent",
            args: i.Struct.define("sendWorkspaceViewedEventArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendWorkspaceViewedEventResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.sendWorkspaceViewedEventV2 = i.Method.define({
            alias: "sendWorkspaceViewedEventV2",
            args: i.Struct.define("sendWorkspaceViewedEventV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("sendWorkspaceViewedEventV2Result", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: u.AccessInfo },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.expungeWorkspace = i.Method.define({
            alias: "expungeWorkspace",
            args: i.Struct.define("expungeWorkspaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("expungeWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.createSurveyNote = i.Method.define({
            alias: "createSurveyNote",
            args: i.Struct.define("createSurveyNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: n.Note, index: 1 },
              3: { alias: "surveyId", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("createSurveyNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.createSurvey = i.Method.define({
            alias: "createSurvey",
            args: i.Struct.define("createSurveyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "survey", type: i.Type.STRUCT, def: e.exports.Survey, index: 1 }
            }),
            result: i.Struct.define("createSurveyResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.finalizeSurvey = i.Method.define({
            alias: "finalizeSurvey",
            args: i.Struct.define("finalizeSurveyArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("finalizeSurveyResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.cloneSurvey = i.Method.define({
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
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getLastOpenSurveyForEntity = i.Method.define({
            alias: "getLastOpenSurveyForEntity",
            args: i.Struct.define("getLastOpenSurveyForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("getLastOpenSurveyForEntityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.Survey },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listSurveysForEntity = i.Method.define({
            alias: "listSurveysForEntity",
            args: i.Struct.define("listSurveysForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("listSurveysForEntityResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.Survey) },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getSurveyItemForEntity = i.Method.define({
            alias: "getSurveyItemForEntity",
            args: i.Struct.define("getSurveyItemForEntityArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "entityType", type: i.Type.I32, index: 1 },
              3: { alias: "entityGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "surveyId", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("getSurveyItemForEntityResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItem },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.finalizeEntityForRating = i.Method.define({
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
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.updateAndFinalizeSurveyNote = i.Method.define({
            alias: "updateAndFinalizeSurveyNote",
            args: i.Struct.define("updateAndFinalizeSurveyNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: n.Note, index: 1 },
              3: { alias: "surveyId", type: i.Type.I32, index: 2 },
              4: { alias: "category", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("updateAndFinalizeSurveyNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItem },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.removeSurveyItem = i.Method.define({
            alias: "removeSurveyItem",
            args: i.Struct.define("removeSurveyItemArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyId", type: i.Type.I32, index: 1 },
              3: { alias: "surveyItemId", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("removeSurveyItemResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.saveSurveyItemRating = i.Method.define({
            alias: "saveSurveyItemRating",
            args: i.Struct.define("saveSurveyItemRatingArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "rating", type: i.Type.I32, index: 2 }
            }),
            result: i.Struct.define("saveSurveyItemRatingResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemRating },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.saveSurveyItemComment = i.Method.define({
            alias: "saveSurveyItemComment",
            args: i.Struct.define("saveSurveyItemCommentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "comment", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("saveSurveyItemCommentResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemRating },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.addSurveyItemComment = i.Method.define({
            alias: "addSurveyItemComment",
            args: i.Struct.define("addSurveyItemCommentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "surveyItemId", type: i.Type.I32, index: 1 },
              3: { alias: "comment", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("addSurveyItemCommentResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.SurveyItemComment },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.getConfigValuesAsJSON = i.Method.define({
            alias: "getConfigValuesAsJSON",
            args: i.Struct.define("getConfigValuesAsJSONArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.ConfigValuesRequest, index: 1 }
            }),
            result: i.Struct.define("getConfigValuesAsJSONResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.addAllUsersFromBusinessToSpace = i.Method.define({
            alias: "addAllUsersFromBusinessToSpace",
            args: i.Struct.define("addAllUsersFromBusinessToSpaceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "spaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("addAllUsersFromBusinessToSpaceResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listNotebooksForIonOnly = i.Method.define({
            alias: "listNotebooksForIonOnly",
            args: i.Struct.define("listNotebooksForIonOnlyArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listNotebooksForIonOnlyResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Notebook) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getMaxServiceUpdatedFromNotes = i.Method.define({
            alias: "getMaxServiceUpdatedFromNotes",
            args: i.Struct.define("getMaxServiceUpdatedFromNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuids", type: i.Type.SET, def: i.Set.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getMaxServiceUpdatedFromNotesResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.I64) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.addResource = i.Method.define({
            alias: "addResource",
            args: i.Struct.define("addResourceArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resource", type: i.Type.STRUCT, def: n.Resource, index: 1 }
            }),
            result: i.Struct.define("addResourceResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Resource },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.addResourceToNote = i.Method.define({
            alias: "addResourceToNote",
            args: i.Struct.define("addResourceToNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "resource", type: i.Type.STRUCT, def: n.Resource, index: 1 }
            }),
            result: i.Struct.define("addResourceToNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Note },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.updateNoteIfUsnMatches = i.Method.define({
            alias: "updateNoteIfUsnMatches",
            args: i.Struct.define("updateNoteIfUsnMatchesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: n.Note, index: 1 },
              3: { alias: "resourcesUpdateRequest", type: i.Type.STRUCT, def: e.exports.ResourcesUpdateRequest, index: 2 }
            }),
            result: i.Struct.define("updateNoteIfUsnMatchesResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: r.UpdateNoteIfUsnMatchesResult },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.createNote = i.Method.define({
            alias: "createNote",
            args: i.Struct.define("createNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: n.Note, index: 1 },
              3: { alias: "resourcesCreateRequest", type: i.Type.STRUCT, def: e.exports.ResourcesCreateRequest, index: 2 }
            }),
            result: i.Struct.define("createNoteResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Note },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.createNoteWithTasks = i.Method.define({
            alias: "createNoteWithTasks",
            args: i.Struct.define("createNoteWithTasksArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "note", type: i.Type.STRUCT, def: n.Note, index: 1 },
              3: { alias: "tasks", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, n.Task), index: 2 }
            }),
            result: i.Struct.define("createNoteWithTasksResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.Note },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listBetaFeatures = i.Method.define({
            alias: "listBetaFeatures",
            args: i.Struct.define("listBetaFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeature) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.listBetaFeatureEnrollments = i.Method.define({
            alias: "listBetaFeatureEnrollments",
            args: i.Struct.define("listBetaFeatureEnrollmentsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listBetaFeatureEnrollmentsResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.BetaFeatureEnrollment) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.enrollInBetaFeature = i.Method.define({
            alias: "enrollInBetaFeature",
            args: i.Struct.define("enrollInBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("enrollInBetaFeatureResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.enableBetaFeature = i.Method.define({
            alias: "enableBetaFeature",
            args: i.Struct.define("enableBetaFeatureArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKey", type: i.Type.STRING, index: 1 },
              3: { alias: "enrollmentGuid", type: i.Type.STRING, index: 2 },
              4: { alias: "enabled", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("enableBetaFeatureResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listEnabledFeatures = i.Method.define({
            alias: "listEnabledFeatures",
            args: i.Struct.define("listEnabledFeaturesArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("listEnabledFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.checkEnabledFeatures = i.Method.define({
            alias: "checkEnabledFeatures",
            args: i.Struct.define("checkEnabledFeaturesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKeysToCheck", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 }
            }),
            result: i.Struct.define("checkEnabledFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.FeatureAvailability) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.checkUserFeatures = i.Method.define({
            alias: "checkUserFeatures",
            args: i.Struct.define("checkUserFeaturesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "featureKeysToCheck", type: i.Type.LIST, def: i.List.define(i.Type.I32), index: 1 }
            }),
            result: i.Struct.define("checkUserFeaturesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.FeatureAvailability) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getNotePermissionsForRTE = i.Method.define({
            alias: "getNotePermissionsForRTE",
            args: i.Struct.define("getNotePermissionsForRTEArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getNotePermissionsForRTEResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.RealTimeNotePermissionsResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.pinContentToWidget = i.Method.define({
            alias: "pinContentToWidget",
            args: i.Struct.define("pinContentToWidgetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "entityType", type: i.Type.I32, index: 2 },
              4: { alias: "entityGuidOrUri", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("pinContentToWidgetResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.PinnedContent },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.unpinContentFromWidget = i.Method.define({
            alias: "unpinContentFromWidget",
            args: i.Struct.define("unpinContentFromWidgetArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "entityType", type: i.Type.I32, index: 2 },
              4: { alias: "entityGuidOrUri", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("unpinContentFromWidgetResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.listPinnedContent = i.Method.define({
            alias: "listPinnedContent",
            args: i.Struct.define("listPinnedContentArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("listPinnedContentResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getWorkspaceNotebookSummary = i.Method.define({
            alias: "getWorkspaceNotebookSummary",
            args: i.Struct.define("getWorkspaceNotebookSummaryArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("getWorkspaceNotebookSummaryResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.NotebookSummary) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.updateContentOfPinnedWidget = i.Method.define({
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
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.changePinnedContentPosition = i.Method.define({
            alias: "changePinnedContentPosition",
            args: i.Struct.define("changePinnedContentPositionArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "request", type: i.Type.STRUCT, def: e.exports.ChangePositionRequest, index: 2 }
            }),
            result: i.Struct.define("changePinnedContentPositionResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.PinnedContent) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.requestAccessToWorkspace = i.Method.define({
            alias: "requestAccessToWorkspace",
            args: i.Struct.define("requestAccessToWorkspaceArgs", {
              1: { alias: "authToken", type: i.Type.STRING, index: 0 },
              2: { alias: "workspaceGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("requestAccessToWorkspaceResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.listRecommendedNotes = i.Method.define({
            alias: "listRecommendedNotes",
            args: i.Struct.define("listRecommendedNotesArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.RecommendationRequest, index: 1 },
              3: { alias: "offset", type: i.Type.I32, index: 2 },
              4: { alias: "maxNotes", type: i.Type.I32, index: 3 }
            }),
            result: i.Struct.define("listRecommendedNotesResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getRecommendedNoteCardMetadata = i.Method.define({
            alias: "getRecommendedNoteCardMetadata",
            args: i.Struct.define("getRecommendedNoteCardMetadataArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.RecommendedNoteCardMetadataRequest, index: 1 }
            }),
            result: i.Struct.define("getRecommendedNoteCardMetadataResult", {
              0: { alias: "returnValue", type: i.Type.LIST, def: i.List.define(i.Type.STRUCT, e.exports.RecommendedNoteCardMetadata) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.submitRatingForRecommendedNote = i.Method.define({
            alias: "submitRatingForRecommendedNote",
            args: i.Struct.define("submitRatingForRecommendedNoteArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "noteGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "rating", type: i.Type.I32, index: 2 },
              4: { alias: "engine", type: i.Type.STRING, index: 3 }
            }),
            result: i.Struct.define("submitRatingForRecommendedNoteResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getFirebaseAuthCredential = i.Method.define({
            alias: "getFirebaseAuthCredential",
            args: i.Struct.define("getFirebaseAuthCredentialArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getFirebaseAuthCredentialResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getUserRestrictions = i.Method.define({
            alias: "getUserRestrictions",
            args: i.Struct.define("getUserRestrictionsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserRestrictionsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.UserRestrictions },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getNsvcThirdPartyAuthorizationToken = i.Method.define({
            alias: "getNsvcThirdPartyAuthorizationToken",
            args: i.Struct.define("getNsvcThirdPartyAuthorizationTokenArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 }
            }),
            result: i.Struct.define("getNsvcThirdPartyAuthorizationTokenResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NsvcThirdPartyAuthorizationTokenResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getNsvcThirdPartyAuthorizationTokenByType = i.Method.define({
            alias: "getNsvcThirdPartyAuthorizationTokenByType",
            args: i.Struct.define("getNsvcThirdPartyAuthorizationTokenByTypeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "tokenType", type: i.Type.I32, index: 1 }
            }),
            result: i.Struct.define("getNsvcThirdPartyAuthorizationTokenByTypeResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.NsvcThirdPartyAuthorizationTokenResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.registerSession = i.Method.define({
            alias: "registerSession",
            args: i.Struct.define("registerSessionArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.RegisterDeviceSessionRequest, index: 0 }
            }),
            result: i.Struct.define("registerSessionResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.hasActiveSessions = i.Method.define({
            alias: "hasActiveSessions",
            args: i.Struct.define("hasActiveSessionsArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.HasActiveSessionRequest, index: 0 }
            }),
            result: i.Struct.define("hasActiveSessionsResult", {
              0: { alias: "returnValue", type: i.Type.BOOL },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.sendOneTimeCode = i.Method.define({
            alias: "sendOneTimeCode",
            args: i.Struct.define("sendOneTimeCodeArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "sendToBackupPhone", type: i.Type.BOOL, index: 1 },
              3: { alias: "messageTemplate", type: i.Type.STRING, index: 2 },
              4: { alias: "useVoice", type: i.Type.BOOL, index: 3 }
            }),
            result: i.Struct.define("sendOneTimeCodeResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getMasked2FAMobileNumbers = i.Method.define({
            alias: "getMasked2FAMobileNumbers",
            args: i.Struct.define("getMasked2FAMobileNumbersArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getMasked2FAMobileNumbersResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRING) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.mmsvcGetPaywallState = i.Method.define({
            alias: "mmsvcGetPaywallState",
            args: i.Struct.define("mmsvcGetPaywallStateArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: e.exports.MmsvcRequest, index: 1 }
            }),
            result: i.Struct.define("mmsvcGetPaywallStateResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MmsvcResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.mmsvcCreateDeviceSync = i.Method.define({
            alias: "mmsvcCreateDeviceSync",
            args: i.Struct.define("mmsvcCreateDeviceSyncArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("mmsvcCreateDeviceSyncResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.MmsvcResponse },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.revokeSession = i.Method.define({
            alias: "revokeSession",
            args: i.Struct.define("revokeSessionArgs", {
              1: { alias: "request", type: i.Type.STRUCT, def: e.exports.RevokeSessionRequest, index: 0 }
            }),
            result: i.Struct.define("revokeSessionResult", {
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.authenticateToBusiness = i.Method.define({
            alias: "authenticateToBusiness",
            args: i.Struct.define("authenticateToBusinessArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("authenticateToBusinessResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: d.AuthenticationResult },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.createSessionAuthenticationToken = i.Method.define({
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
          (y.getUser = i.Method.define({
            alias: "getUser",
            args: i.Struct.define("getUserArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.User },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getUserUrls = i.Method.define({
            alias: "getUserUrls",
            args: i.Struct.define("getUserUrlsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserUrlsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: d.UserUrls },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getSubscriptionInfo = i.Method.define({
            alias: "getSubscriptionInfo",
            args: i.Struct.define("getSubscriptionInfoArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getSubscriptionInfoResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: n.SubscriptionInfo },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.revokeLongSession = i.Method.define({
            alias: "revokeLongSession",
            args: i.Struct.define("revokeLongSessionArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("revokeLongSessionResult", {
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.listBusinessUsers = i.Method.define({
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
          (y.getConnectedIdentities = i.Method.define({
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
          (y.getIdentitiesByNsyncMemberships = i.Method.define({
            alias: "getIdentitiesByNsyncMemberships",
            args: i.Struct.define("getIdentitiesByNsyncMembershipsArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "nsyncMembershipIds", type: i.Type.LIST, def: i.List.define(i.Type.STRING), index: 1 }
            }),
            result: i.Struct.define("getIdentitiesByNsyncMembershipsResult", {
              0: { alias: "returnValue", type: i.Type.MAP, def: i.Map.define(i.Type.STRING, i.Type.STRUCT, n.Identity) },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "edamNoteFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getNAPAccessJWT = i.Method.define({
            alias: "getNAPAccessJWT",
            args: i.Struct.define("getNAPAccessJWTArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "request", type: i.Type.STRUCT, def: d.GetNAPAccessJWTRequest, index: 1 }
            }),
            result: i.Struct.define("getNAPAccessJWTResult", {
              0: { alias: "returnValue", type: i.Type.STRING },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.unpublishNotebook = i.Method.define({
            alias: "unpublishNotebook",
            args: i.Struct.define("unpublishNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "convertGroupSharesToIndividual", type: i.Type.BOOL, index: 2 }
            }),
            result: i.Struct.define("unpublishNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.moveNotebookToAccountV2 = i.Method.define({
            alias: "moveNotebookToAccountV2",
            args: i.Struct.define("moveNotebookToAccountV2Args", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 }
            }),
            result: i.Struct.define("moveNotebookToAccountV2Result", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              2: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.updateNotebook = i.Method.define({
            alias: "updateNotebook",
            args: i.Struct.define("updateNotebookArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebook", type: i.Type.STRUCT, def: n.Notebook, index: 1 }
            }),
            result: i.Struct.define("updateNotebookResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (y.updateNotebookStack = i.Method.define({
            alias: "updateNotebookStack",
            args: i.Struct.define("updateNotebookStackArgs", {
              1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 },
              2: { alias: "notebookGuid", type: i.Type.STRING, index: 1 },
              3: { alias: "stack", type: i.Type.STRING, index: 2 }
            }),
            result: i.Struct.define("updateNotebookStackResult", {
              0: { alias: "returnValue", type: i.Type.I32 },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException },
              3: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException }
            })
          })),
          (y.getUserCustomClaims = i.Method.define({
            alias: "getUserCustomClaims",
            args: i.Struct.define("getUserCustomClaimsArgs", { 1: { alias: "authenticationToken", type: i.Type.STRING, index: 0 } }),
            result: i.Struct.define("getUserCustomClaimsResult", {
              0: { alias: "returnValue", type: i.Type.STRUCT, def: e.exports.AuthenticatedUserCustomClaims },
              1: { alias: "userException", type: i.Type.EXCEPTION, def: a.EDAMUserException },
              2: { alias: "systemException", type: i.Type.EXCEPTION, def: a.EDAMSystemException },
              3: { alias: "notFoundException", type: i.Type.EXCEPTION, def: a.EDAMNotFoundException }
            })
          })),
          (c.prototype.sendMarketingEmail = function (e, t, s) {
            var i = y.sendMarketingEmail,
              a = new i.args();
            (a.authenticationToken = e), (a.parameters = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.fileSupportTicket = function (e, t, s) {
            var i = y.fileSupportTicket,
              a = new i.args();
            (a.authenticationToken = e), (a.ticket = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.fileSupportTicketReturnId = function (e, t, s) {
            var i = y.fileSupportTicketReturnId,
              a = new i.args();
            (a.authenticationToken = e), (a.ticket = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendAppFeedback = function (e, t, s) {
            var i = y.sendAppFeedback,
              a = new i.args();
            (a.authenticationToken = e), (a.appFeedback = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendAppFeedbackForDevice = function (e, t, s, i, a) {
            var n = y.sendAppFeedbackForDevice,
              o = new n.args();
            (o.deviceIdentifier = e),
              (o.apiConsumerKey = t),
              (o.apiConsumerSecret = s),
              (o.appFeedback = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.getCrossPromotionInfo = function (e, t) {
            var s = y.getCrossPromotionInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.sendVerificationEmail = function (e, t) {
            var s = y.sendVerificationEmail,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.confirmEmailAddress = function (e, t) {
            var s = y.confirmEmailAddress,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getOAuthCredential = function (e, t, s) {
            var i = y.getOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.serviceId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getOAuthCredentialByEmailAndScope = function (e, t, s, i, a) {
            var n = y.getOAuthCredentialByEmailAndScope,
              o = new n.args();
            (o.authenticationToken = e), (o.serviceId = t), (o.email = s), (o.scope = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.hasOAuthCredential = function (e, t, s) {
            var i = y.hasOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.serviceId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getScopedGoogleOAuthCredential = function (e, t, s) {
            var i = y.getScopedGoogleOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getAllScopedGoogleOAuthCredential = function (e, t, s) {
            var i = y.getAllScopedGoogleOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.hasGoogleOAuthCredential = function (e, t, s) {
            var i = y.hasGoogleOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.googleOAuthScope = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.setOAuthCredential = function (e, t, s) {
            var i = y.setOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.oAuthCredential = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.deleteOAuthCredential = function (e, t, s) {
            var i = y.deleteOAuthCredential,
              a = new i.args();
            (a.authenticationToken = e), (a.serviceId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.deleteOAuthCredentialByEmailAndScope = function (e, t, s, i, a) {
            var n = y.deleteOAuthCredentialByEmailAndScope,
              o = new n.args();
            (o.authenticationToken = e), (o.serviceId = t), (o.email = s), (o.scope = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.canNewOauthAccountBeAdded = function (e, t) {
            var s = y.canNewOauthAccountBeAdded,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.validateAuthenticationTokenStatus = function (e, t, s) {
            var i = y.validateAuthenticationTokenStatus,
              a = new i.args();
            (a.authenticationToken = e), (a.tokens = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getUserCardScanningEndDate = function (e, t) {
            var s = y.getUserCardScanningEndDate,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getPromotionStatus = function (e, t, s) {
            var i = y.getPromotionStatus,
              a = new i.args();
            (a.authenticationToken = e), (a.promotionIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.promotionsShown = function (e, t, s) {
            var i = y.promotionsShown,
              a = new i.args();
            (a.authenticationToken = e), (a.promotionIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.promotionOptedOut = function (e, t, s) {
            var i = y.promotionOptedOut,
              a = new i.args();
            (a.authenticationToken = e), (a.promotionId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getRelatedContentSourcePreferences = function (e, t) {
            var s = y.getRelatedContentSourcePreferences,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.setRelatedContentSourceActivated = function (e, t, s, i) {
            var a = y.setRelatedContentSourceActivated,
              n = new a.args();
            (n.authenticationToken = e), (n.sourceId = t), (n.activated = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.clearRelatedContentProfiles = function (e, t, s) {
            var i = y.clearRelatedContentProfiles,
              a = new i.args();
            (a.authenticationToken = e), (a.sourceId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.addRelatedContentProfiles = function (e, t, s) {
            var i = y.addRelatedContentProfiles,
              a = new i.args();
            (a.authenticationToken = e), (a.profiles = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updateRelatedContentProfiles = function (e, t, s) {
            var i = y.updateRelatedContentProfiles,
              a = new i.args();
            (a.authenticationToken = e), (a.sourceId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getRelatedContentProfilePage = function (e, t, s) {
            var i = y.getRelatedContentProfilePage,
              a = new i.args();
            (a.authenticationToken = e), (a.profileId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.importNotesFromEnex = function (e, t, s, i, a, n, o) {
            var r = y.importNotesFromEnex,
              p = new r.args();
            (p.authenticationToken = e),
              (p.enexUrl = t),
              (p.notebookGuid = s),
              (p.importNoteTags = i),
              (p.importNoteCreated = a),
              (p.importNoteUpdated = n),
              r.sendRequest(this.output, this.seqid++, p, o);
          }),
          (c.prototype.setUserProfilePhoto = function (e, t, s) {
            var i = y.setUserProfilePhoto,
              a = new i.args();
            (a.authenticationToken = e), (a.photo = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.removeUserProfilePhoto = function (e, t) {
            var s = y.removeUserProfilePhoto,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.setUserFullName = function (e, t, s) {
            var i = y.setUserFullName,
              a = new i.args();
            (a.authenticationToken = e), (a.name = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getMessageInvitation = function (e, t) {
            var s = y.getMessageInvitation,
              i = new s.args();
            (i.messageInvitationId = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.claimMessageInvitation = function (e, t, s) {
            var i = y.claimMessageInvitation,
              a = new i.args();
            (a.authenticationToken = e), (a.messageInvitationId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.canPurchaseTeamStarterPack = function (e, t, s) {
            var i = y.canPurchaseTeamStarterPack,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getTsdEligibility = function (e, t, s) {
            var i = y.getTsdEligibility,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updatePassword = function (e, t, s, i) {
            var a = y.updatePassword,
              n = new a.args();
            (n.authenticationToken = e), (n.oldPassword = t), (n.newPassword = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.getIncentiveEligibility = function (e, t) {
            var s = y.getIncentiveEligibility,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.invalidateGoogleOauthCredential = function (e, t) {
            var s = y.invalidateGoogleOauthCredential,
              i = new s.args();
            (i.authToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.invalidateGoogleOauthCredentialByEmailAndScope = function (e, t, s, i) {
            var a = y.invalidateGoogleOauthCredentialByEmailAndScope,
              n = new a.args();
            (n.authToken = e), (n.email = t), (n.scope = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.associateOpenIDWithUser = function (e, t, s) {
            var i = y.associateOpenIDWithUser,
              a = new i.args();
            (a.authenticationToken = e), (a.credential = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.dissociateOpenIDFromUser = function (e, t, s) {
            var i = y.dissociateOpenIDFromUser,
              a = new i.args();
            (a.authenticationToken = e), (a.credential = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.dissociateAllOpenIDsFromUser = function (e, t) {
            var s = y.dissociateAllOpenIDsFromUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.moveNotebookBetweenAccounts = function (e, t, s, i) {
            var a = y.moveNotebookBetweenAccounts,
              n = new a.args();
            (n.sourceAuthenticationToken = e),
              (n.targetAuthenticationToken = t),
              (n.parameters = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.moveNotebooksBetweenAccounts = function (e, t, s, i) {
            var a = y.moveNotebooksBetweenAccounts,
              n = new a.args();
            (n.sourceAuthenticationToken = e),
              (n.targetAuthenticationToken = t),
              (n.parameters = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.moveNoteBetweenAccounts = function (e, t, s, i) {
            var a = y.moveNoteBetweenAccounts,
              n = new a.args();
            (n.sourceAuthenticationToken = e),
              (n.targetAuthenticationToken = t),
              (n.parameters = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.findNotesMetadataForIon = function (e, t, s, i, a, n) {
            var o = y.findNotesMetadataForIon,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (c.prototype.findNotesCardMetadata = function (e, t, s, i, a, n) {
            var o = y.findNotesCardMetadata,
              r = new o.args();
            (r.authenticationToken = e),
              (r.filter = t),
              (r.offset = s),
              (r.maxNotes = i),
              (r.resultSpec = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (c.prototype.getNotesCardMetadata = function (e, t, s, i) {
            var a = y.getNotesCardMetadata,
              n = new a.args();
            (n.authenticationToken = e), (n.noteGuids = t), (n.resultSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.createWorkspaceWithResultSpec = function (e, t, s, i) {
            var a = y.createWorkspaceWithResultSpec,
              n = new a.args();
            (n.authenticationToken = e), (n.workspace = t), (n.spec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.createWorkspace = function (e, t, s) {
            var i = y.createWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspace = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.copyWorkspace = function (e, t, s) {
            var i = y.copyWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.spec = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.listSyncingNotebookGuidsInBusinessAccount = function (e, t) {
            var s = y.listSyncingNotebookGuidsInBusinessAccount,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getWorkspace = function (e, t, s, i) {
            var a = y.getWorkspace,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), (n.responseSpec = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.getWorkspaceIfUserHasPrivilege = function (e, t, s, i, a) {
            var n = y.getWorkspaceIfUserHasPrivilege,
              o = new n.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.responseSpec = s),
              (o.privilegeLevel = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.listWorkspaces = function (e, t) {
            var s = y.listWorkspaces,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.listWorkspacesWithResultSpec = function (e, t, s, i) {
            var a = y.listWorkspacesWithResultSpec,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceResponseSpec = t), (n.filter = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.updateWorkspace = function (e, t, s) {
            var i = y.updateWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspace = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.moveNotebookToAccount = function (e, t, s) {
            var i = y.moveNotebookToAccount,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.manageWorkspaceSharing = function (e, t, s) {
            var i = y.manageWorkspaceSharing,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.joinWorkspace = function (e, t, s) {
            var i = y.joinWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.leaveWorkspace = function (e, t, s) {
            var i = y.leaveWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendSharedNotebookViewedEvent = function (e, t, s) {
            var i = y.sendSharedNotebookViewedEvent,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendSharedNoteViewedEvent = function (e, t, s) {
            var i = y.sendSharedNoteViewedEvent,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendWorkspaceViewedEvent = function (e, t, s) {
            var i = y.sendWorkspaceViewedEvent,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.sendWorkspaceViewedEventV2 = function (e, t, s) {
            var i = y.sendWorkspaceViewedEventV2,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.expungeWorkspace = function (e, t, s) {
            var i = y.expungeWorkspace,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.createSurveyNote = function (e, t, s, i) {
            var a = y.createSurveyNote,
              n = new a.args();
            (n.authenticationToken = e), (n.note = t), (n.surveyId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.createSurvey = function (e, t, s) {
            var i = y.createSurvey,
              a = new i.args();
            (a.authenticationToken = e), (a.survey = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.finalizeSurvey = function (e, t, s) {
            var i = y.finalizeSurvey,
              a = new i.args();
            (a.authenticationToken = e), (a.surveyId = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.cloneSurvey = function (e, t, s, i, a, n) {
            var o = y.cloneSurvey,
              r = new o.args();
            (r.authenticationToken = e),
              (r.surveyId = t),
              (r.surveyName = s),
              (r.copyRatings = i),
              (r.copyComments = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (c.prototype.getLastOpenSurveyForEntity = function (e, t, s, i) {
            var a = y.getLastOpenSurveyForEntity,
              n = new a.args();
            (n.authenticationToken = e), (n.entityType = t), (n.entityGuid = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.listSurveysForEntity = function (e, t, s, i) {
            var a = y.listSurveysForEntity,
              n = new a.args();
            (n.authenticationToken = e), (n.entityType = t), (n.entityGuid = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.getSurveyItemForEntity = function (e, t, s, i, a) {
            var n = y.getSurveyItemForEntity,
              o = new n.args();
            (o.authenticationToken = e),
              (o.entityType = t),
              (o.entityGuid = s),
              (o.surveyId = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.finalizeEntityForRating = function (e, t, s, i, a, n) {
            var o = y.finalizeEntityForRating,
              r = new o.args();
            (r.authenticationToken = e),
              (r.surveyId = t),
              (r.entityType = s),
              (r.entityGuid = i),
              (r.category = a),
              o.sendRequest(this.output, this.seqid++, r, n);
          }),
          (c.prototype.updateAndFinalizeSurveyNote = function (e, t, s, i, a) {
            var n = y.updateAndFinalizeSurveyNote,
              o = new n.args();
            (o.authenticationToken = e), (o.note = t), (o.surveyId = s), (o.category = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.removeSurveyItem = function (e, t, s, i) {
            var a = y.removeSurveyItem,
              n = new a.args();
            (n.authenticationToken = e), (n.surveyId = t), (n.surveyItemId = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.saveSurveyItemRating = function (e, t, s, i) {
            var a = y.saveSurveyItemRating,
              n = new a.args();
            (n.authenticationToken = e), (n.surveyItemId = t), (n.rating = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.saveSurveyItemComment = function (e, t, s, i) {
            var a = y.saveSurveyItemComment,
              n = new a.args();
            (n.authenticationToken = e), (n.surveyItemId = t), (n.comment = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.addSurveyItemComment = function (e, t, s, i) {
            var a = y.addSurveyItemComment,
              n = new a.args();
            (n.authenticationToken = e), (n.surveyItemId = t), (n.comment = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.getConfigValuesAsJSON = function (e, t, s) {
            var i = y.getConfigValuesAsJSON,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.addAllUsersFromBusinessToSpace = function (e, t, s) {
            var i = y.addAllUsersFromBusinessToSpace,
              a = new i.args();
            (a.authenticationToken = e), (a.spaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.listNotebooksForIonOnly = function (e, t) {
            var s = y.listNotebooksForIonOnly,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getMaxServiceUpdatedFromNotes = function (e, t, s) {
            var i = y.getMaxServiceUpdatedFromNotes,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuids = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.addResource = function (e, t, s) {
            var i = y.addResource,
              a = new i.args();
            (a.authenticationToken = e), (a.resource = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.addResourceToNote = function (e, t, s) {
            var i = y.addResourceToNote,
              a = new i.args();
            (a.authenticationToken = e), (a.resource = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updateNoteIfUsnMatches = function (e, t, s, i) {
            var a = y.updateNoteIfUsnMatches,
              n = new a.args();
            (n.authenticationToken = e), (n.note = t), (n.resourcesUpdateRequest = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.createNote = function (e, t, s, i) {
            var a = y.createNote,
              n = new a.args();
            (n.authenticationToken = e), (n.note = t), (n.resourcesCreateRequest = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.createNoteWithTasks = function (e, t, s, i) {
            var a = y.createNoteWithTasks,
              n = new a.args();
            (n.authenticationToken = e), (n.note = t), (n.tasks = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.listBetaFeatures = function (e, t) {
            var s = y.listBetaFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.listBetaFeatureEnrollments = function (e, t) {
            var s = y.listBetaFeatureEnrollments,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.enrollInBetaFeature = function (e, t, s) {
            var i = y.enrollInBetaFeature,
              a = new i.args();
            (a.authenticationToken = e), (a.featureKey = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.enableBetaFeature = function (e, t, s, i, a) {
            var n = y.enableBetaFeature,
              o = new n.args();
            (o.authenticationToken = e),
              (o.featureKey = t),
              (o.enrollmentGuid = s),
              (o.enabled = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.listEnabledFeatures = function (e, t) {
            var s = y.listEnabledFeatures,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.checkEnabledFeatures = function (e, t, s) {
            var i = y.checkEnabledFeatures,
              a = new i.args();
            (a.authenticationToken = e), (a.featureKeysToCheck = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.checkUserFeatures = function (e, t, s) {
            var i = y.checkUserFeatures,
              a = new i.args();
            (a.authenticationToken = e), (a.featureKeysToCheck = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getNotePermissionsForRTE = function (e, t, s) {
            var i = y.getNotePermissionsForRTE,
              a = new i.args();
            (a.authenticationToken = e), (a.noteGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.pinContentToWidget = function (e, t, s, i, a) {
            var n = y.pinContentToWidget,
              o = new n.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.entityType = s),
              (o.entityGuidOrUri = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.unpinContentFromWidget = function (e, t, s, i, a) {
            var n = y.unpinContentFromWidget,
              o = new n.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.entityType = s),
              (o.entityGuidOrUri = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.listPinnedContent = function (e, t, s) {
            var i = y.listPinnedContent,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getWorkspaceNotebookSummary = function (e, t, s) {
            var i = y.getWorkspaceNotebookSummary,
              a = new i.args();
            (a.authenticationToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updateContentOfPinnedWidget = function (e, t, s, i, a) {
            var n = y.updateContentOfPinnedWidget,
              o = new n.args();
            (o.authenticationToken = e),
              (o.workspaceGuid = t),
              (o.toBePinnedContentList = s),
              (o.toBeUnpinnedContentList = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.changePinnedContentPosition = function (e, t, s, i) {
            var a = y.changePinnedContentPosition,
              n = new a.args();
            (n.authenticationToken = e), (n.workspaceGuid = t), (n.request = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.requestAccessToWorkspace = function (e, t, s) {
            var i = y.requestAccessToWorkspace,
              a = new i.args();
            (a.authToken = e), (a.workspaceGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.listRecommendedNotes = function (e, t, s, i, a) {
            var n = y.listRecommendedNotes,
              o = new n.args();
            (o.authenticationToken = e), (o.request = t), (o.offset = s), (o.maxNotes = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.getRecommendedNoteCardMetadata = function (e, t, s) {
            var i = y.getRecommendedNoteCardMetadata,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.submitRatingForRecommendedNote = function (e, t, s, i, a) {
            var n = y.submitRatingForRecommendedNote,
              o = new n.args();
            (o.authenticationToken = e), (o.noteGuid = t), (o.rating = s), (o.engine = i), n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.getFirebaseAuthCredential = function (e, t) {
            var s = y.getFirebaseAuthCredential,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getUserRestrictions = function (e, t) {
            var s = y.getUserRestrictions,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getNsvcThirdPartyAuthorizationToken = function (e, t) {
            var s = y.getNsvcThirdPartyAuthorizationToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getNsvcThirdPartyAuthorizationTokenByType = function (e, t, s) {
            var i = y.getNsvcThirdPartyAuthorizationTokenByType,
              a = new i.args();
            (a.authenticationToken = e), (a.tokenType = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.registerSession = function (e, t) {
            var s = y.registerSession,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.hasActiveSessions = function (e, t) {
            var s = y.hasActiveSessions,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.sendOneTimeCode = function (e, t, s, i, a) {
            var n = y.sendOneTimeCode,
              o = new n.args();
            (o.authenticationToken = e),
              (o.sendToBackupPhone = t),
              (o.messageTemplate = s),
              (o.useVoice = i),
              n.sendRequest(this.output, this.seqid++, o, a);
          }),
          (c.prototype.getMasked2FAMobileNumbers = function (e, t) {
            var s = y.getMasked2FAMobileNumbers,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.mmsvcGetPaywallState = function (e, t, s) {
            var i = y.mmsvcGetPaywallState,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.mmsvcCreateDeviceSync = function (e, t) {
            var s = y.mmsvcCreateDeviceSync,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.revokeSession = function (e, t) {
            var s = y.revokeSession,
              i = new s.args();
            (i.request = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.authenticateToBusiness = function (e, t) {
            var s = y.authenticateToBusiness,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.createSessionAuthenticationToken = function (e, t) {
            var s = y.createSessionAuthenticationToken,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getUser = function (e, t) {
            var s = y.getUser,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getUserUrls = function (e, t) {
            var s = y.getUserUrls,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.getSubscriptionInfo = function (e, t) {
            var s = y.getSubscriptionInfo,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.revokeLongSession = function (e, t) {
            var s = y.revokeLongSession,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (c.prototype.listBusinessUsers = function (e, t, s) {
            var i = y.listBusinessUsers,
              a = new i.args();
            (a.authenticationToken = e), (a.businessUserFilter = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getConnectedIdentities = function (e, t, s) {
            var i = y.getConnectedIdentities,
              a = new i.args();
            (a.authenticationToken = e), (a.identityIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getIdentitiesByNsyncMemberships = function (e, t, s) {
            var i = y.getIdentitiesByNsyncMemberships,
              a = new i.args();
            (a.authenticationToken = e), (a.nsyncMembershipIds = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.getNAPAccessJWT = function (e, t, s) {
            var i = y.getNAPAccessJWT,
              a = new i.args();
            (a.authenticationToken = e), (a.request = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.unpublishNotebook = function (e, t, s, i) {
            var a = y.unpublishNotebook,
              n = new a.args();
            (n.authenticationToken = e),
              (n.notebookGuid = t),
              (n.convertGroupSharesToIndividual = s),
              a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.moveNotebookToAccountV2 = function (e, t, s) {
            var i = y.moveNotebookToAccountV2,
              a = new i.args();
            (a.authenticationToken = e), (a.notebookGuid = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updateNotebook = function (e, t, s) {
            var i = y.updateNotebook,
              a = new i.args();
            (a.authenticationToken = e), (a.notebook = t), i.sendRequest(this.output, this.seqid++, a, s);
          }),
          (c.prototype.updateNotebookStack = function (e, t, s, i) {
            var a = y.updateNotebookStack,
              n = new a.args();
            (n.authenticationToken = e), (n.notebookGuid = t), (n.stack = s), a.sendRequest(this.output, this.seqid++, n, i);
          }),
          (c.prototype.getUserCustomClaims = function (e, t) {
            var s = y.getUserCustomClaims,
              i = new s.args();
            (i.authenticationToken = e), s.sendRequest(this.output, this.seqid++, i, t);
          }),
          (e.exports.Utility.Client = c),
          (l.prototype.start = function () {
            this.stransport.listen();
          }),
          (l.prototype.stop = function () {
            this.stransport.close();
          }),
          (e.exports.Utility.Server = l);
      },
      24527: (e, t, s) => {
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
      95733: (e) => {
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
            for (var s = new ArrayBuffer(8), i = new DataView(s), a = 0; a < 8; a++) {
              var n = parseInt(t.substr(8 * a, 8), 2);
              i.setUint8(a, n);
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
              a = new Uint8Array(i);
            for (t = 0; t < i; t++) a[t] = s.charCodeAt(t);
            return a.buffer;
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
            var a = s.indexOf("1");
            if (-1 !== a && a < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
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
              a = e.byteLength;
            for (t = 0; t < a; t++) 1 == (s = e.getUint8(t).toString(16)).length && (s = "0" + s), (i += "%" + s);
            return decodeURIComponent(i);
          }
        };
        e.exports = t;
      },
      29292: (e, t, s) => {
        var i = s(21293),
          a = s(95733),
          n = i.Type,
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
            this.writeByte(n.STOP);
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
            this.trans.write(a.fromByte(e));
          }),
          (r.prototype.writeBinary = function (e) {
            "use strict";
            if (("string" == typeof e && (e = a.fromString(e)), null == e.byteLength)) throw Error("Cannot read length of binary data");
            this.writeI32(e.byteLength), this.trans.write(e);
          }),
          (r.prototype.writeI16 = function (e) {
            "use strict";
            this.trans.write(a.fromShort(e));
          }),
          (r.prototype.writeI32 = function (e) {
            "use strict";
            this.trans.write(a.fromInt(e));
          }),
          (r.prototype.writeI64 = function (e) {
            "use strict";
            this.trans.write(a.fromLong(e));
          }),
          (r.prototype.writeDouble = function (e) {
            "use strict";
            this.trans.write(a.fromDouble(e));
          }),
          (r.prototype.writeString = function (e) {
            "use strict";
            var t = a.fromString(e);
            this.writeI32(t.byteLength), this.trans.write(t);
          }),
          (r.prototype.writeType = function (e, t) {
            "use strict";
            switch (e) {
              case n.BOOL:
                return this.writeBool(t);
              case n.BYTE:
                return this.writeByte(t);
              case n.I16:
                return this.writeI16(t);
              case n.I32:
                return this.writeI32(t);
              case n.I64:
                return this.writeI64(t);
              case n.DOUBLE:
                return this.writeDouble(t);
              case n.STRING:
                return this.writeString(t);
              case n.BINARY:
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
            return e != n.STOP && (t.fid = this.readI16()), t;
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
            return a.toByte(e);
          }),
          (r.prototype.readI16 = function () {
            "use strict";
            var e = this.trans.read(2);
            return a.toShort(e);
          }),
          (r.prototype.readI32 = function () {
            "use strict";
            var e = this.trans.read(4);
            return a.toInt(e);
          }),
          (r.prototype.readI64 = function () {
            "use strict";
            var e = this.trans.read(8);
            return a.toLong(e);
          }),
          (r.prototype.readDouble = function () {
            "use strict";
            var e = this.trans.read(8);
            return a.toDouble(e);
          }),
          (r.prototype.readBinary = function () {
            "use strict";
            var e = this.readI32(),
              t = this.trans.read(e);
            return a.toBytes(t);
          }),
          (r.prototype.readString = function () {
            "use strict";
            var e = this.readI32(),
              t = this.trans.read(e);
            return a.toString(t);
          }),
          (r.prototype.readType = function (e) {
            "use strict";
            switch (e) {
              case n.BOOL:
                return this.readBool();
              case n.BYTE:
                return this.readByte();
              case n.I16:
                return this.readI16();
              case n.I32:
                return this.readI32();
              case n.I64:
                return this.readI64();
              case n.DOUBLE:
                return this.readDouble();
              case n.STRING:
                return this.readString();
              case n.BINARY:
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
            e.ftype !== n.STOP && (this.skip(e.ftype), this.readFieldEnd(), this.skipFields());
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
              case n.STOP:
                return;
              case n.BOOL:
                return this.readBool();
              case n.BYTE:
                return this.readByte();
              case n.I16:
                return this.readI16();
              case n.I32:
                return this.readI32();
              case n.I64:
                return this.readI64();
              case n.DOUBLE:
                return this.readDouble();
              case n.STRING:
                return this.readString();
              case n.STRUCT:
                return this.skipStruct();
              case n.MAP:
                return this.skipMap();
              case n.SET:
                return this.skipSet();
              case n.LIST:
                return this.skipList();
              case n.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + e);
            }
          }),
          (e.exports = r);
      },
      2188: (e, t, s) => {
        var i = s(21293).Type,
          a = function (e) {
            "use strict";
            this.transport = e;
          };
        ((a.Type = {})[i.BOOL] = '"tf"'),
          (a.Type[i.BYTE] = '"i8"'),
          (a.Type[i.I16] = '"i16"'),
          (a.Type[i.I32] = '"i32"'),
          (a.Type[i.I64] = '"i64"'),
          (a.Type[i.DOUBLE] = '"dbl"'),
          (a.Type[i.STRUCT] = '"rec"'),
          (a.Type[i.STRING] = '"str"'),
          (a.Type[i.MAP] = '"map"'),
          (a.Type[i.LIST] = '"lst"'),
          (a.Type[i.SET] = '"set"'),
          ((a.RType = {}).tf = i.BOOL),
          (a.RType.i8 = i.BYTE),
          (a.RType.i16 = i.I16),
          (a.RType.i32 = i.I32),
          (a.RType.i64 = i.I64),
          (a.RType.dbl = i.DOUBLE),
          (a.RType.rec = i.STRUCT),
          (a.RType.str = i.STRING),
          (a.RType.map = i.MAP),
          (a.RType.lst = i.LIST),
          (a.RType.set = i.SET),
          (a.Version = 1),
          (a.prototype = {
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
              (this.tstack = []), (this.tpos = []), this.tstack.push([a.Version, '"' + e + '"', t, s]);
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
              for (var a in t) i ? (i = !1) : (s += ","), (s += a + ":" + t[a]);
              (s += "}"), (this.tstack[e] = s);
            },
            writeFieldBegin: function (e, t, s) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({ fieldId: '"' + s + '"', fieldType: a.Type[t] });
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
              this.tpos.push(this.tstack.length), this.tstack.push([a.Type[e], a.Type[t], 0]);
            },
            writeMapEnd: function () {
              "use strict";
              var e = this.tpos.pop();
              if (e != this.tstack.length) {
                (this.tstack.length - e - 1) % 2 != 0 && this.tstack.push("");
                var t = (this.tstack.length - e - 1) / 2;
                this.tstack[e][this.tstack[e].length - 1] = t;
                for (var s = "}", i = !0; this.tstack.length > e + 1; ) {
                  var a = this.tstack.pop(),
                    n = this.tstack.pop();
                  i ? (i = !1) : (s = "," + s), isNaN(n) || (n = '"' + n + '"'), (s = n + ":" + a + s);
                }
                (s = "{" + s), this.tstack[e].push(s), (this.tstack[e] = "[" + this.tstack[e].join(",") + "]");
              }
            },
            writeListBegin: function (e, t) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([a.Type[e], t]);
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
              this.tpos.push(this.tstack.length), this.tstack.push([a.Type[e], t]);
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
                n = this.robj.shift();
              if (n != a.Version) throw Error("Wrong thrift protocol version: " + n);
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
              for (var n in this.rstack[this.rstack.length - 1])
                if (null !== n) {
                  (t = parseInt(n, 10)), this.rpos.push(this.rstack.length);
                  var o = this.rstack[this.rstack.length - 1][t];
                  delete this.rstack[this.rstack.length - 1][t], this.rstack.push(o);
                  break;
                }
              if (-1 != t)
                for (var r in this.rstack[this.rstack.length - 1])
                  null !== a.RType[r] && ((s = a.RType[r]), (this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][r]));
              return (e.fname = ""), (e.ftype = s), (e.fid = t), e;
            },
            readFieldEnd: function () {
              "use strict";
              for (var e = this.rpos.pop(); this.rstack.length > e; ) this.rstack.pop();
            },
            readMapBegin: function (e, t, s) {
              "use strict";
              var i = this.rstack.pop(),
                n = {};
              return (
                (n.ktype = a.RType[i.shift()]),
                (n.vtype = a.RType[i.shift()]),
                (n.size = i.shift()),
                this.rpos.push(this.rstack.length),
                this.rstack.push(i.shift()),
                n
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
              return (i.etype = a.RType[s.shift()]), (i.size = s.shift()), this.rpos.push(this.rstack.length), this.rstack.push(s), i;
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
                    return s && (i = new a(s)), e(t, i);
                  }),
                this.transport.flush(t)
              );
            }
          }),
          (e.exports = a);
      },
      8633: (e, t, s) => {
        var i = s(21293).Type,
          a = {},
          n = -2147418112;
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
              ? (this.writeI32(n | t), this.writeString(e), this.writeI32(s))
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
            this.trans.write(a.fromByte(e));
          }),
          (o.prototype.writeBinary = function (e) {
            "use strict";
            if (("string" == typeof e && (e = a.fromString(e)), null == e.length)) throw Error("Cannot read length of binary data");
            this.writeI32(e.length), this.trans.write(e);
          }),
          (o.prototype.writeI16 = function (e) {
            "use strict";
            this.trans.write(a.fromShort(e));
          }),
          (o.prototype.writeI32 = function (e) {
            "use strict";
            this.trans.write(a.fromInt(e));
          }),
          (o.prototype.writeI64 = function (e) {
            "use strict";
            var t = a.fromLong(e);
            this.trans.write(t);
          }),
          (o.prototype.writeDouble = function (e) {
            "use strict";
            this.trans.write(a.fromDouble(e));
          }),
          (o.prototype.writeString = function (e) {
            "use strict";
            var t = a.fromString(e);
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
              if (s != n) throw (console.log("BAD: " + s), Error("Bad version in readMessageBegin: " + e));
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
            return a.toLong(e);
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
          (a.fromByte = function (e) {
            "use strict";
            var t = new Buffer(1);
            return t.writeInt8(e, 0), t;
          }),
          (a.fromShort = function (e) {
            "use strict";
            e = parseInt(e);
            var t = new Buffer(2);
            return t.writeInt16BE(e, 0), t;
          }),
          (a.fromInt = function (e) {
            "use strict";
            e = parseInt(e);
            var t = new Buffer(4);
            return t.writeInt32BE(e, 0), t;
          }),
          (a.fromLong = function (e) {
            "use strict";
            if (((e = parseInt(e)), Math.abs(e) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + e);
            var t = (Array(64).join("0") + Math.abs(e).toString(2)).slice(-64);
            e < 0 && (t = this.twosCompliment(t));
            for (var s = new Buffer(8), i = 0; i < 8; i++) {
              var a = parseInt(t.substr(8 * i, 8), 2);
              s.writeUInt8(a, i);
            }
            return s;
          }),
          (a.twosCompliment = function (e) {
            "use strict";
            var t = e.lastIndexOf("1");
            return e.substring(0, t).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + e.substring(t);
          }),
          (a.fromDouble = function (e) {
            "use strict";
            var t = new Buffer(8);
            return t.writeDoubleBE(e, 0), t;
          }),
          (a.fromString = function (e) {
            "use strict";
            var t = Buffer.byteLength(e),
              s = new Buffer(t);
            return s.write(e), s;
          }),
          (a.toLong = function (e) {
            "use strict";
            for (var t = 1, s = "", i = 0; i < 8; i++) s += (Array(8).join("0") + e.readUInt8(i).toString(2)).slice(-8);
            "1" === s[0] && ((t = -1), (s = this.twosCompliment(s)));
            var a = s.indexOf("1");
            if (-1 !== a && a < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(s, 2) * t;
          }),
          (e.exports = o);
      },
      21293: (e) => {
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
          (t.Method.sendException = function (e, s, i, a) {
            "use strict";
            var n;
            a ||
              (i instanceof t.TApplicationException
                ? (a = t.TApplicationException)
                : i instanceof t.TException
                ? (a = t.TException)
                : ((a = t.TApplicationException),
                  (n = {}),
                  i && (i.message && (n.message = i.message + ""), null != i.code && Number.isFinite(n.code) && (n.code = i.code)),
                  (i = new t.TApplicationException(n)))),
              e.writeMessageBegin("", t.MessageType.EXCEPTION, s),
              a.write(e, i),
              e.writeMessageEnd(),
              e.flush();
          }),
          (t.Method.prototype.sendRequest = function (e, s, i, a) {
            "use strict";
            e.writeMessageBegin(this.alias, t.MessageType.CALL, s),
              this.args.write(e, i),
              e.writeMessageEnd(),
              e.flush(
                function (e, t) {
                  e ? a(e) : this.processResponse(t, a);
                }.bind(this)
              );
          }),
          (t.Method.prototype.sendResponse = function (e, s, i) {
            "use strict";
            e.writeMessageBegin(this.alias, t.MessageType.REPLY, s), this.result.write(e, i), e.writeMessageEnd(), e.flush();
          }),
          (t.Method.prototype.processResponse = function (e, s) {
            "use strict";
            var i, a, n, o;
            if (((s = s || t.Method.noop), (i = e.readMessageBegin()).mtype == t.MessageType.EXCEPTION))
              return (n = t.TApplicationException.read(e)), e.readMessageEnd(), void s(n);
            if (i.mtype == t.MessageType.REPLY)
              if (this.alias == i.fname) {
                for (o in ((a = this.result.read(e)), e.readMessageEnd(), this.result.fields))
                  if (0 != o && a[this.result.fields[o].alias]) return void s((n = a[this.result.fields[o].alias]));
                s(null, a.returnValue);
              } else s((n = Error("Unrecognized method name. Expected [" + this.alias + "] Received [" + i.fname + "]")));
            else s((n = Error("Client expects REPLY but received unsupported message type: " + i.mtype)));
          }),
          (t.List = {}),
          (t.List.define = function (e, s, i) {
            "use strict";
            var a = function () {
              return [];
            };
            return (
              "string" != typeof e && ((i = s), (s = e), (e = "anonymous")),
              (a.alias = e),
              (a.type = s),
              (a.def = i),
              (a.read = t.List.read.bind(null, a)),
              (a.write = t.List.write.bind(null, a)),
              a
            );
          }),
          (t.List.read = function (e, s) {
            "use strict";
            var i = new e(),
              a = s.readListBegin();
            return t.List.readEntries(e, i, s, a.size), s.readListEnd(), i;
          }),
          (t.List.readEntries = function (e, t, s, i) {
            "use strict";
            var a;
            for (a = 0; a < i; a++) null != e.def ? t.push(e.def.read(s)) : t.push(s.readType(e.type));
          }),
          (t.List.write = function (e, t, s) {
            "use strict";
            var i,
              a,
              n = s.length;
            for (t.writeListBegin(e.type, n), a = 0; a < n; a++) (i = s[a]), e.def ? e.def.write(t, i) : t.writeType(e.type, i);
            t.writeListEnd();
          }),
          (t.Set = {}),
          (t.Set.define = function (e, s, i) {
            "use strict";
            var a = function () {
              return [];
            };
            return (
              "string" != typeof e && ((i = s), (s = e), (e = "anonymous")),
              (a.alias = e),
              (a.type = s),
              (a.def = i),
              (a.read = t.Set.read.bind(null, a)),
              (a.write = t.Set.write.bind(null, a)),
              a
            );
          }),
          (t.Set.read = function (e, s) {
            "use strict";
            var i = new e(),
              a = s.readSetBegin();
            return t.Set.readEntries(e, i, s, a.size), s.readSetEnd(), i;
          }),
          (t.Set.readEntries = function (e, t, s, i) {
            "use strict";
            var a;
            for (a = 0; a < i; a++) null != e.def ? t.push(e.def.read(s)) : t.push(s.readType(e.type));
          }),
          (t.Set.write = function (e, t, s) {
            "use strict";
            var i,
              a,
              n = s.length;
            for (t.writeSetBegin(e.type, n), a = 0; a < n; a++) (i = s[a]), e.def ? e.def.write(t, i) : t.writeType(e.type, i);
            t.writeSetEnd();
          }),
          (t.Map = {}),
          (t.Map.define = function (e, s, i, a) {
            "use strict";
            var n = function () {
              return {};
            };
            return (
              "string" != typeof e && ((a = i), (i = s), (s = e), (e = "anonymous")),
              (n.alias = e),
              (n.ktype = s),
              (n.vtype = i),
              (n.vdef = a),
              (n.read = t.Map.read.bind(null, n)),
              (n.write = t.Map.write.bind(null, n)),
              n
            );
          }),
          (t.Map.read = function (e, s) {
            "use strict";
            var i = new e(),
              a = s.readMapBegin();
            return t.Map.readEntries(e, i, s, a.size), s.readMapEnd(), i;
          }),
          (t.Map.readEntries = function (e, t, s, i) {
            "use strict";
            var a, n;
            for (a = 0; a < i; a++) (n = s.readType(e.ktype)), null != e.vdef ? (t[n] = e.vdef.read(s)) : (t[n] = s.readType(e.vtype));
          }),
          (t.Map.write = function (e, t, s) {
            "use strict";
            var i,
              a,
              n,
              o = Object.keys(s),
              r = o.length;
            for (t.writeMapBegin(e.ktype, e.vtype, r), n = 0; n < r; n++)
              (i = o[n]), t.writeType(e.ktype, i), (a = s[i]), e.vdef ? e.vdef.write(t, a) : t.writeType(e.vtype, a);
            t.writeMapEnd();
          }),
          (t.Struct = {}),
          (t.Struct.define = function (e, s) {
            "use strict";
            var i,
              a,
              n = {};
            for (i in (s = s || {})) (a = s[i]), (n[a.alias] = a.defaultValue || null);
            var o = function (e) {
              return (e = "object" == typeof e ? e : {}), t.defaults({}, e, n);
            };
            return (
              (o.alias = e),
              (o.fields = s),
              (o.defaultValues = n),
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
              a,
              n = e.fields,
              o = !1;
            for (i in n)
              if ((a = n[i]).def && s instanceof a.def) {
                (t[a.alias] = s), (o = !0);
                break;
              }
            return o;
          }),
          (t.Struct.values = function (e, t) {
            "use strict";
            var s,
              i,
              a,
              n = e.fields,
              o = Object.keys(e.fields),
              r = new Array(o.length);
            for (a = 0; a < o.length; a++) null != (i = n[(s = o[a])].index) ? (r[i] = t[n[s].alias]) : (r[a] = t[n[s].alias]);
            return r;
          }),
          (t.Struct.read = function (e, s) {
            "use strict";
            var i = new e();
            return s.readStructBegin(), t.Struct.readFields(e, s, i), s.readStructEnd(), i;
          }),
          (t.Struct.readFields = function (e, s, i) {
            "use strict";
            for (var a, n; ; ) {
              if ((a = s.readFieldBegin()).ftype == t.Type.STOP) return;
              (n = e.fields[a.fid]) && t.equals(a.ftype, n.type)
                ? n.def
                  ? (i[n.alias] = n.def.read(s))
                  : (i[n.alias] = s.readType(n.type))
                : s.skip(a.ftype),
                s.readFieldEnd();
            }
          }),
          (t.Struct.write = function (e, s, i) {
            "use strict";
            var a, n, o;
            for (a in (s.writeStructBegin(e.alias), e.fields))
              null != (o = i[(n = e.fields[a]).alias]) &&
                (s.writeFieldBegin(n.alias, t.serializedType(n.type), a),
                n.def ? new n.def.write(s, o) : s.writeType(n.type, o),
                s.writeFieldEnd());
            s.writeFieldStop(), s.writeStructEnd();
          }),
          (t.Exception = {}),
          (t.Exception.define = function (e, s) {
            "use strict";
            var i,
              a,
              n = {};
            for (i in (s = s || {})) (a = s[i]), (n[a.alias] = a.defaultValue || null);
            var o = function (e) {
              var s = {};
              "object" == typeof e && (s = e),
                t.defaults(this, s, n),
                "string" == typeof e ? (this.message = e) : e instanceof Error && (this.message = e.message);
            };
            return (
              (o.alias = e),
              (o.fields = s),
              (o.defaultValues = n),
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
            var i, a, n, o, r;
            try {
              if ((o = e.readMessageBegin()).mtype != t.MessageType.CALL)
                throw new t.TException("Server expects CALL but received unsupported message type: " + o.mtype);
              if (null == (i = this.methods[o.fname])) throw new t.TException("Unrecognized method name: " + o.fname);
              (r = (a = i.def).args.read(e)),
                (n = new a.result()),
                i.fn.apply(
                  null,
                  a.args.values(r).concat([
                    function (e) {
                      (n.returnValue = e), a.sendResponse(s, o.seqid, n);
                    },
                    function (e) {
                      var i = o ? o.seqid : -1;
                      n && a.result.setByDef(n, e) ? a.sendResponse(s, o.seqid, n) : t.Method.sendException(s, i, e);
                    }
                  ])
                );
            } catch (e) {
              console.log(e);
              var p = o ? o.seqid : -1;
              n && a.result.setByDef(n, e) ? a.sendResponse(s, o.seqid, n) : t.Method.sendException(s, p, e);
            }
          }),
          (e.exports = t);
      },
      38722: (e, t, s) => {
        s(21293);
        var i,
          a = function () {
            (this.buffer = []), (this.readOffset = 0);
          };
        ((i = a.prototype).reset = function () {
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
          (e.exports = a);
      },
      66895: (e, t, s) => {
        var i = s(2523),
          a = s(10579);
        function n(e, t) {
          "use strict";
          (this.input = new a()), (this.url = e), (this.opts = t || {});
        }
        (n.prototype.open = function () {}),
          (n.prototype.close = function () {}),
          (n.prototype.read = function (e) {
            throw Error("BinaryFetchHttpTransport object does not support reads");
          }),
          (n.prototype.write = function (e) {
            this.input.write(e);
          }),
          (n.prototype.clear = function () {
            this.input.clear();
          }),
          (n.prototype.flush = function (e) {
            const t = "application/x-thrift";
            var s = { "Content-Type": t, Accept: t };
            if (this.opts.headers) for (var n in this.opts.headers) s[n] = this.opts.headers[n];
            this.input.flush();
            const o = new Blob([this.input.buffer], { type: t });
            fetch(this.url, { method: "post", headers: s, body: o, credentials: this.opts.noCredentials ? "omit" : "include" })
              .then(async (t) => {
                if (e)
                  if (200 === t.status)
                    t.arrayBuffer()
                      .then((t) => {
                        e(null, new a(t));
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
          (e.exports = n);
      },
      40594: (e, t, s) => {
        var i = s(10579),
          a = function (e) {
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
              for (var t = this.input.buffer, s = t.length, i = [], a = 0; a < s; a++) i.push(String.fromCharCode(t[a]));
              this.notify(window.btoa(i.join(""))), this.reset();
            }),
            (e.send = function (e, t, s, i) {}),
            (e.receive = function (e) {
              for (var t = window.atob(e), s = t.length, a = new Uint8Array(s), n = 0; n < s; n++) a[n] = t.charCodeAt(n);
              this.received = new i(a.buffer);
            });
        })(a.prototype),
          (e.exports = a);
      },
      2523: (e) => {
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
      5122: (e) => {
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
      10579: (e) => {
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
      38935: (e, t, s) => {
        var i = s(39807),
          a = s(2523),
          n = s(72693),
          o = s(49069),
          r = s(8575);
        function p(e, t, s, a, n) {
          "use strict";
          var o = r.parse(e);
          (this.hostname = o.hostname),
            (this.port = o.port),
            (this.path = o.path),
            (this.url = o.href),
            (this.quiet = !!t),
            (this.insecure = !!s),
            (this.additionalHeaders = a),
            (this.agent = n),
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
              u = (this.insecure ? n : o).request(r, function (s) {
                var n = [];
                if (200 !== s.statusCode) {
                  var o = "Error in Thrift response. status:" + s.statusCode + "headers: " + JSON.stringify(s.headers);
                  if ((t.log(o), e)) return void e(new a.TransportException(o, new a.HTTPException("", p, s.statusCode, s.headers)));
                }
                s.on("data", function (e) {
                  n.push(e);
                }),
                  s.on("end", function () {
                    var t = Buffer.concat(n);
                    e && e(null, new i(t));
                  });
              });
            u.on("error", function (s) {
              t.log("Error making Thrift HTTP request: " + s),
                e &&
                  e(
                    new a.TransportException(s.message ? s.message : "Thrift request failed", new a.NetworkException(JSON.stringify(s), p))
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
      39807: (e) => {
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
      45099: (e) => {
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
      63950: (e, t, s) => {
        var i = s(2523),
          a = s(10579);
        function n(e, t) {
          (this.input = new a()), (this.url = e), (this.opts = t || {});
        }
        (n.prototype.open = function () {}),
          (n.prototype.close = function () {}),
          (n.prototype.read = function (e) {
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (n.prototype.write = function (e) {
            this.input.write(e);
          }),
          (n.prototype.clear = function () {
            this.input.clear();
          }),
          (n.prototype.flush = function (e) {
            var t;
            (t = new XMLHttpRequest()).open("POST", this.url, !0),
              (t.withCredentials = !this.opts.noCredentials),
              t.setRequestHeader("Content-Type", "application/x-thrift"),
              t.setRequestHeader("Accept", "application/x-thrift"),
              (t.responseType = "arraybuffer");
            var s = this.opts.headers || {};
            for (var n in s) {
              var o = s[n];
              t.setRequestHeader(n, o);
            }
            var r = this.url;
            (t.onload = function (s) {
              if (e)
                if (200 === t.status) e(null, new a(t.response));
                else {
                  const s = t
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/),
                    a = {};
                  s.forEach(function (e) {
                    var t = e.split(": "),
                      s = t.shift(),
                      i = t.join(": ");
                    a[s] = i;
                  }),
                    e(new i.TransportException("Non 200 http response", new i.HTTPException("Non 200 http response", r, t.status, a)));
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
          (e.exports = n);
      },
      30640: (e, t, s) => {
        var i = s(45099);
        function a(e, t) {
          (this.input = new i()), (this.url = e), (this.opts = t || {});
        }
        (a.prototype.open = function () {}),
          (a.prototype.close = function () {}),
          (a.prototype.read = function (e) {
            throw Error("TextHttpTransport object does not support reads");
          }),
          (a.prototype.write = function (e) {
            this.input.write(e);
          }),
          (a.prototype.clear = function () {
            this.input.clear();
          }),
          (a.prototype.flush = function (e) {
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
          (e.exports = a);
      },
      62587: (e) => {
        "use strict";
        function t(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.exports = function (e, s, i, a) {
          (s = s || "&"), (i = i || "=");
          var n = {};
          if ("string" != typeof e || 0 === e.length) return n;
          var o = /\+/g;
          e = e.split(s);
          var r = 1e3;
          a && "number" == typeof a.maxKeys && (r = a.maxKeys);
          var p = e.length;
          r > 0 && p > r && (p = r);
          for (var u = 0; u < p; ++u) {
            var d,
              y,
              c,
              l,
              T = e[u].replace(o, "%20"),
              E = T.indexOf(i);
            E >= 0 ? ((d = T.substr(0, E)), (y = T.substr(E + 1))) : ((d = T), (y = "")),
              (c = decodeURIComponent(d)),
              (l = decodeURIComponent(y)),
              t(n, c) ? (Array.isArray(n[c]) ? n[c].push(l) : (n[c] = [n[c], l])) : (n[c] = l);
          }
          return n;
        };
      },
      12361: (e) => {
        "use strict";
        var t = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        e.exports = function (e, s, i, a) {
          return (
            (s = s || "&"),
            (i = i || "="),
            null === e && (e = void 0),
            "object" == typeof e
              ? Object.keys(e)
                  .map(function (a) {
                    var n = encodeURIComponent(t(a)) + i;
                    return Array.isArray(e[a])
                      ? e[a]
                          .map(function (e) {
                            return n + encodeURIComponent(t(e));
                          })
                          .join(s)
                      : n + encodeURIComponent(t(e[a]));
                  })
                  .join(s)
              : a
              ? encodeURIComponent(t(a)) + i + encodeURIComponent(t(e))
              : ""
          );
        };
      },
      17673: (e, t, s) => {
        "use strict";
        (t.decode = t.parse = s(62587)), (t.encode = t.stringify = s(12361));
      },
      91632: () => {
        !(function (e) {
          var t = {};
          function s(i) {
            if (t[i]) return t[i].exports;
            var a = (t[i] = { i, l: !1, exports: {} });
            return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
          }
          (s.m = e),
            (s.c = t),
            (s.d = function (e, t, i) {
              s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (s.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (s.t = function (e, t) {
              if ((1 & t && (e = s(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var i = Object.create(null);
              if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                  s.d(
                    i,
                    a,
                    function (t) {
                      return e[t];
                    }.bind(null, a)
                  );
              return i;
            }),
            (s.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return s.d(t, "a", t), t;
            }),
            (s.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (s.p = ""),
            s((s.s = 64));
        })({
          37: function (e, t, s) {
            "use strict";
            var i,
              a = {
                Event: { GET_TAB_ID: "topee.tabInfo.getTabId", TAB_ID: "topee.tabInfo.tabId" },
                init: function () {
                  var e;
                  if (
                    (window === window.top &&
                      (window.addEventListener("message", function (e) {
                        e.data &&
                          e.data.type === a.Event.GET_TAB_ID &&
                          a.tabId.then((t) => e.source && e.source.postMessage({ type: a.Event.TAB_ID, detail: t, debug: r }, e.origin));
                      }),
                      safari.self.addEventListener("message", function (e) {
                        "tabUpdate" === e.name && e.message && e.message.url && (window.location = e.message.url);
                      })),
                    isNaN(n))
                  )
                    if (window !== window.top) {
                      if (window !== window.top)
                        return (
                          window.addEventListener("message", function (t) {
                            t.data &&
                              t.data.type === a.Event.TAB_ID &&
                              "number" == typeof t.data.detail &&
                              ((n = t.data.detail), d(t.data.debug), u(t.data.debug), i(t.data.detail), clearInterval(e));
                          }),
                          (e = setInterval(function () {
                            window.top.postMessage({ type: a.Event.GET_TAB_ID }, "*");
                          }, 200)),
                          void window.top.postMessage({ type: a.Event.GET_TAB_ID }, "*")
                        );
                    } else
                      safari.self.addEventListener("message", function (e) {
                        "forceTabId" === e.name &&
                          e.message &&
                          "number" == typeof e.message.tabId &&
                          ((n = e.message.tabId),
                          sessionStorage.setItem("topee_tabId", n),
                          d(e.message.debug),
                          u(e.message.debug),
                          i(e.message.tabId));
                      });
                  else i(n);
                },
                sayHello: function () {
                  var e = isNaN(n) ? null : n;
                  if (null === e) {
                    if (o) return;
                    o = !0;
                  }
                  window.isTabRegistered ||
                    (a.tabId.then(
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
                      payload: Object.assign({ eventName: "hello", tabId: e, url: document.location.href }, p())
                    }),
                    (window.isTabRegistered = !0));
                },
                sayAlive: function () {
                  safari.extension.dispatchMessage("alive", {
                    tabId: n,
                    payload: Object.assign({ eventName: "alive", tabId: n, url: document.location.href }, p())
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
                  return null == e || e === a.frameId;
                }
              };
            (a.tabId = new Promise(function (e) {
              i = e;
            })),
              window === window.top ? (a.frameId = 0) : (a.frameId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
            var n = window.opener ? NaN : parseInt(sessionStorage.getItem("topee_tabId")),
              o = !1,
              r = (function () {
                var e = sessionStorage.getItem("topee_debug");
                if (!e) return {};
                try {
                  var t = JSON.parse(e);
                  return null === t || "object" != typeof t ? {} : t;
                } catch (e) {
                  return {};
                }
              })();
            function p() {
              return {
                frameId: a.frameId,
                isVisible: !document.hidden,
                hasFocus: document.hasFocus(),
                status: "complete" === document.readyState ? "complete" : "loading",
                url: window.location.href
              };
            }
            function u(e) {
              "object" == typeof e && null !== e && sessionStorage.setItem("topee_debug", JSON.stringify(e));
            }
            function d(e) {
              if (arguments.length > 0) {
                if ("object" != typeof e || null === e) return;
                r = e;
              }
              r.log ? (window.topee_log = r.log) : delete window.topee_log;
            }
            d(), (window.isTabRegistered = !1), (e.exports = a);
          },
          38: function (e, t, s) {
            e.exports = { extension: s(39), i18n: s(47), runtime: s(40), tabs: s(48) };
          },
          39: function (e, t, s) {
            var i = s(40),
              a = {
                getURL: function (e) {
                  return i.getURL(e);
                }
              };
            e.exports = a;
          },
          40: function (e, t, s) {
            "use strict";
            var i = s(41),
              a = s(37),
              n = s(42),
              o = s(46),
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
                if ("request" === e.name && a.isForThisFrame(e.message.frameId))
                  return (
                    p.emit("message", e.message.payload, { id: "topee" }, function (t) {
                      o.dispatchRequest({ eventName: "messageResponse", messageId: e.message.messageId, message: t });
                    }),
                    void (void 0 === e.message.frameId && n.broadcast(e.message))
                  );
                "request" === e.name && n.hasChild(e.message.frameId) && n.forward(e.message.frameId, e.message);
              }),
              (r.sayAlive = function () {
                a.sayAlive();
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
          41: function (e, t, s) {
            "use strict";
            var i,
              a = "object" == typeof Reflect ? Reflect : null,
              n =
                a && "function" == typeof a.apply
                  ? a.apply
                  : function (e, t, s) {
                      return Function.prototype.apply.call(e, t, s);
                    };
            i =
              a && "function" == typeof a.ownKeys
                ? a.ownKeys
                : Object.getOwnPropertySymbols
                ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                  }
                : function (e) {
                    return Object.getOwnPropertyNames(e);
                  };
            var o =
              Number.isNaN ||
              function (e) {
                return e != e;
              };
            function r() {
              r.init.call(this);
            }
            (e.exports = r),
              (r.EventEmitter = r),
              (r.prototype._events = void 0),
              (r.prototype._eventsCount = 0),
              (r.prototype._maxListeners = void 0);
            var p = 10;
            function u(e) {
              return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners;
            }
            function d(e, t, s, i) {
              var a, n, o, r;
              if ("function" != typeof s)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof s);
              if (
                (void 0 === (n = e._events)
                  ? ((n = e._events = Object.create(null)), (e._eventsCount = 0))
                  : (void 0 !== n.newListener && (e.emit("newListener", t, s.listener ? s.listener : s), (n = e._events)), (o = n[t])),
                void 0 === o)
              )
                (o = n[t] = s), ++e._eventsCount;
              else if (
                ("function" == typeof o ? (o = n[t] = i ? [s, o] : [o, s]) : i ? o.unshift(s) : o.push(s),
                (a = u(e)) > 0 && o.length > a && !o.warned)
              ) {
                o.warned = !0;
                var p = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    o.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit"
                );
                (p.name = "MaxListenersExceededWarning"),
                  (p.emitter = e),
                  (p.type = t),
                  (p.count = o.length),
                  (r = p),
                  console && console.warn && console.warn(r);
              }
              return e;
            }
            function y() {
              for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
              this.fired || (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), n(this.listener, this.target, e));
            }
            function c(e, t, s) {
              var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: s },
                a = y.bind(i);
              return (a.listener = s), (i.wrapFn = a), a;
            }
            function l(e, t, s) {
              var i = e._events;
              if (void 0 === i) return [];
              var a = i[t];
              return void 0 === a
                ? []
                : "function" == typeof a
                ? s
                  ? [a.listener || a]
                  : [a]
                : s
                ? (function (e) {
                    for (var t = new Array(e.length), s = 0; s < t.length; ++s) t[s] = e[s].listener || e[s];
                    return t;
                  })(a)
                : E(a, a.length);
            }
            function T(e) {
              var t = this._events;
              if (void 0 !== t) {
                var s = t[e];
                if ("function" == typeof s) return 1;
                if (void 0 !== s) return s.length;
              }
              return 0;
            }
            function E(e, t) {
              for (var s = new Array(t), i = 0; i < t; ++i) s[i] = e[i];
              return s;
            }
            Object.defineProperty(r, "defaultMaxListeners", {
              enumerable: !0,
              get: function () {
                return p;
              },
              set: function (e) {
                if ("number" != typeof e || e < 0 || o(e))
                  throw new RangeError(
                    'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."
                  );
                p = e;
              }
            }),
              (r.init = function () {
                (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
                  ((this._events = Object.create(null)), (this._eventsCount = 0)),
                  (this._maxListeners = this._maxListeners || void 0);
              }),
              (r.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || o(e))
                  throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return (this._maxListeners = e), this;
              }),
              (r.prototype.getMaxListeners = function () {
                return u(this);
              }),
              (r.prototype.emit = function (e) {
                for (var t = [], s = 1; s < arguments.length; s++) t.push(arguments[s]);
                var i = "error" === e,
                  a = this._events;
                if (void 0 !== a) i = i && void 0 === a.error;
                else if (!i) return !1;
                if (i) {
                  var o;
                  if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                  var r = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                  throw ((r.context = o), r);
                }
                var p = a[e];
                if (void 0 === p) return !1;
                if ("function" == typeof p) n(p, this, t);
                else {
                  var u = p.length,
                    d = E(p, u);
                  for (s = 0; s < u; ++s) n(d[s], this, t);
                }
                return !0;
              }),
              (r.prototype.addListener = function (e, t) {
                return d(this, e, t, !1);
              }),
              (r.prototype.on = r.prototype.addListener),
              (r.prototype.prependListener = function (e, t) {
                return d(this, e, t, !0);
              }),
              (r.prototype.once = function (e, t) {
                if ("function" != typeof t)
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                return this.on(e, c(this, e, t)), this;
              }),
              (r.prototype.prependOnceListener = function (e, t) {
                if ("function" != typeof t)
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                return this.prependListener(e, c(this, e, t)), this;
              }),
              (r.prototype.removeListener = function (e, t) {
                var s, i, a, n, o;
                if ("function" != typeof t)
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                if (void 0 === (i = this._events)) return this;
                if (void 0 === (s = i[e])) return this;
                if (s === t || s.listener === t)
                  0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : (delete i[e], i.removeListener && this.emit("removeListener", e, s.listener || t));
                else if ("function" != typeof s) {
                  for (a = -1, n = s.length - 1; n >= 0; n--)
                    if (s[n] === t || s[n].listener === t) {
                      (o = s[n].listener), (a = n);
                      break;
                    }
                  if (a < 0) return this;
                  0 === a
                    ? s.shift()
                    : (function (e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop();
                      })(s, a),
                    1 === s.length && (i[e] = s[0]),
                    void 0 !== i.removeListener && this.emit("removeListener", e, o || t);
                }
                return this;
              }),
              (r.prototype.off = r.prototype.removeListener),
              (r.prototype.removeAllListeners = function (e) {
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
                  var a,
                    n = Object.keys(s);
                  for (i = 0; i < n.length; ++i) "removeListener" !== (a = n[i]) && this.removeAllListeners(a);
                  return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                }
                if ("function" == typeof (t = s[e])) this.removeListener(e, t);
                else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                return this;
              }),
              (r.prototype.listeners = function (e) {
                return l(this, e, !0);
              }),
              (r.prototype.rawListeners = function (e) {
                return l(this, e, !1);
              }),
              (r.listenerCount = function (e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : T.call(e, t);
              }),
              (r.prototype.listenerCount = T),
              (r.prototype.eventNames = function () {
                return this._eventsCount > 0 ? i(this._events) : [];
              });
          },
          42: function (e, t, s) {
            "use strict";
            var i = new (s(43))(),
              a = {
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
                      (a.add(e.data.frameId, e.source),
                      i.readyPromise
                        .then(() => i.getKey())
                        .then(function (t) {
                          e.source && e.source.postMessage({ type: "topee_iframe_key", value: t }, e.origin);
                        })),
                    e.data &&
                      "topee_iframe_request" === e.data.type &&
                      i.decrypt(e.data.value).then(function (t) {
                        var s = JSON.parse(t),
                          a = e.data.messageId;
                        void 0 !== a &&
                          safari.self.addEventListener("message", function t(s) {
                            "response" === s.name &&
                              s.message.messageId === a &&
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
                return !!e && !!a.get(e);
              },
              forward: function (e, t) {
                var s = a.get(e);
                s
                  ? i.readyPromise
                      .then(() => i.encrypt(JSON.stringify(t)))
                      .then((e) => s.postMessage({ type: "topee_iframe_request", value: e }, "*"))
                  : window.topee_log && console.log("frame", e, "not found");
              },
              broadcast: function (e) {
                var t = a.getAll();
                0 != t.length &&
                  i.readyPromise
                    .then(() => i.encrypt(JSON.stringify(e)))
                    .then((e) => t.forEach((t) => t.postMessage({ type: "topee_iframe_request", value: e }, "*")));
              }
            };
          },
          43: function (e, t, s) {
            var i = s(44),
              a = s(45);
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
                return i.encrypt(a.str2arrayBuffer(encodeURI(e)), t, this.key).then(function (e) {
                  return { data: a.arrayBuffer2base64(e), salt: a.uint8array2base64(t) };
                });
              }
              decrypt(e) {
                return i.decrypt(a.base642arrayBuffer(e.data), a.base642uint8array(e.salt), this.key).then(function (e) {
                  return decodeURI(a.arrayBuffer2str(e));
                });
              }
            };
          },
          44: function (e, t) {
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
          45: function (e, t) {
            function s(e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  t.push(String.fromCharCode(e));
                }),
                t.join("")
              );
            }
            function i(e) {
              return s(new Uint8Array(e));
            }
            function a(e) {
              return new Uint8Array(
                [].map.call(e, function (t) {
                  var s = t.charCodeAt(0);
                  if (s > 255) throw e + ": cannot convert non-ASCII character";
                  return s;
                })
              );
            }
            function n(e) {
              return a(e).buffer;
            }
            e.exports = {
              uint8array2str: s,
              arrayBuffer2str: i,
              str2uint8array: a,
              str2arrayBuffer: n,
              uint8array2base64: function (e) {
                return btoa(s(e));
              },
              arrayBuffer2base64: function (e) {
                return btoa(i(e));
              },
              base642uint8array: function (e) {
                return a(atob(e));
              },
              base642arrayBuffer: function (e) {
                return n(atob(e));
              }
            };
          },
          46: function (e, t, s) {
            var i = s(37),
              a = {};
            function n(e, t, s) {
              var a = t.messageId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
              function n(e) {
                "response" === e.name && e.message.messageId === a && (s(e.message.payload), safari.self.removeEventListener("message", n));
              }
              s && ((n.messageId = a), safari.self.addEventListener("message", n)),
                (t.tabId = e),
                (t.messageId = a),
                (t.frameId = i.frameId),
                (t.url = window.location.href),
                safari.extension.dispatchMessage("request", { tabId: e, payload: t });
            }
            (a.dispatchRequest = function (e, t) {
              i.tabId.then((s) => {
                n(s, e, t);
              });
            }),
              i.tabId.then((e) => {
                a.dispatchRequest = function (t, s) {
                  n(e, t, s);
                };
              }),
              (e.exports = a);
          },
          47: function (e, t) {
            var s = {
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
            e.exports = s;
          },
          48: function (e, t, s) {
            "use strict";
            const i = s(46);
            var a = {
              query: function (e, t) {
                i.dispatchRequest({ eventName: "tabs.query", queryInfo: e }, t);
              },
              remove: function () {
                safari.extension.dispatchMessage("removeTab", { payload: { eventName: "removeTab", url: document.location.href } });
              },
              waitForReload: function () {
                safari.extension.dispatchMessage("waitForReload", { payload: { eventName: "waitForReload", url: document.location.href } });
              },
              activate: function () {
                safari.extension.dispatchMessage("returnToClipperTab", {
                  payload: { eventName: "returnToClipperTab", url: document.location.href }
                });
              }
            };
            e.exports = a;
          },
          64: function (e, t, s) {
            !(function () {
              "use strict";
              var e = s(43),
                t = null,
                i = [],
                a = {},
                n = [];
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
                            ((a[s.messageId] = !0),
                            setTimeout(function () {
                              delete a[s.messageId];
                            }, 1e3)),
                          n.push({ type: e, safariCallback: s, decryptingCallback: i }),
                          window.addEventListener("message", i))
                        : console.error("Unexpected message listener:", e);
                    }),
                    (safari.self.removeEventListener = function (e, t) {
                      var s = n.findIndex(function (s) {
                        return s.type === e && s.safariCallback === t;
                      });
                      -1 != s
                        ? (window.removeEventListener("message", n[s].decryptingCallback), n.splice(s, 1))
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
                var o = s(37);
                o.init(),
                  window.parent.postMessage({ type: "topee_get_iframe_key", frameId: o.frameId }, "*"),
                  (window.chrome = s(38)),
                  window === window.top &&
                    (o.sayHello(),
                    window.addEventListener("pageshow", function () {
                      o.sayHello();
                    }));
              }
              function r(e, s) {
                var i = null;
                s && s.payload && ((void 0 !== (i = s.payload.messageId) && a[i]) || (i = null), delete a[i]),
                  t.encrypt(JSON.stringify({ name: e, value: s })).then(function (e) {
                    var t = { type: "topee_iframe_request", value: e };
                    null !== i && (t.messageId = i), window.topee_log && console.log("sending", t), window.parent.postMessage(t, "*");
                  });
              }
            })();
          }
        });
      },
      52511: function (e, t, s) {
        var i;
        (e = s.nmd(e)),
          (function (a) {
            t && t.nodeType, e && e.nodeType;
            var n = "object" == typeof s.g && s.g;
            n.global !== n && n.window !== n && n.self;
            var o,
              r = 2147483647,
              p = 36,
              u = 26,
              d = 38,
              y = 700,
              c = /^xn--/,
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
              throw RangeError(E[e]);
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
              for (var t, s, i = [], a = 0, n = e.length; a < n; )
                (t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < n
                  ? 56320 == (64512 & (s = e.charCodeAt(a++)))
                    ? i.push(((1023 & t) << 10) + (1023 & s) + 65536)
                    : (i.push(t), a--)
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
              for (e = s ? S(e / y) : e >> 1, e += S(e / t); e > (f * u) >> 1; i += p) e = S(e / f);
              return S(i + ((f + 1) * e) / (e + d));
            }
            function C(e) {
              var t,
                s,
                i,
                a,
                n,
                o,
                d,
                y,
                c,
                l,
                T,
                E = [],
                f = e.length,
                h = 0,
                N = 128,
                g = 72;
              for ((s = e.lastIndexOf("-")) < 0 && (s = 0), i = 0; i < s; ++i)
                e.charCodeAt(i) >= 128 && I("not-basic"), E.push(e.charCodeAt(i));
              for (a = s > 0 ? s + 1 : 0; a < f; ) {
                for (
                  n = h, o = 1, d = p;
                  a >= f && I("invalid-input"),
                    ((y = (T = e.charCodeAt(a++)) - 48 < 10 ? T - 22 : T - 65 < 26 ? T - 65 : T - 97 < 26 ? T - 97 : p) >= p ||
                      y > S((r - h) / o)) &&
                      I("overflow"),
                    (h += y * o),
                    !(y < (c = d <= g ? 1 : d >= g + u ? u : d - g));
                  d += p
                )
                  o > S(r / (l = p - c)) && I("overflow"), (o *= l);
                (g = A(h - n, (t = E.length + 1), 0 == n)),
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
                a,
                n,
                o,
                d,
                y,
                c,
                l,
                T,
                E,
                f,
                N,
                g,
                x = [];
              for (E = (e = R(e)).length, t = 128, s = 0, n = 72, o = 0; o < E; ++o) (T = e[o]) < 128 && x.push(h(T));
              for (i = a = x.length, a && x.push("-"); i < E; ) {
                for (d = r, o = 0; o < E; ++o) (T = e[o]) >= t && T < d && (d = T);
                for (d - t > S((r - s) / (f = i + 1)) && I("overflow"), s += (d - t) * f, t = d, o = 0; o < E; ++o)
                  if (((T = e[o]) < t && ++s > r && I("overflow"), T == t)) {
                    for (y = s, c = p; !(y < (l = c <= n ? 1 : c >= n + u ? u : c - n)); c += p)
                      (g = y - l), (N = p - l), x.push(h(m(l + (g % N), 0))), (y = S(g / N));
                    x.push(h(m(y, 0))), (n = A(s, f, i == a)), (s = 0), ++i;
                  }
                ++s, ++t;
              }
              return x.join("");
            }
            (o = {
              version: "1.3.2",
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
                  return c.test(e) ? C(e.slice(4).toLowerCase()) : e;
                });
              }
            }),
              void 0 ===
                (i = function () {
                  return o;
                }.call(t, s, t, e)) || (e.exports = i);
          })();
      },
      8575: (e, t, s) => {
        "use strict";
        var i = s(52511),
          a = s(62502);
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
        (t.parse = I),
          (t.resolve = function (e, t) {
            return I(e, !1, !0).resolve(t);
          }),
          (t.resolveObject = function (e, t) {
            return e ? I(e, !1, !0).resolveObject(t) : t;
          }),
          (t.format = function (e) {
            return a.isString(e) && (e = I(e)), e instanceof n ? e.format() : n.prototype.format.call(e);
          }),
          (t.Url = n);
        var o = /^([a-z0-9.+-]+:)/i,
          r = /:[0-9]*$/,
          p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          d = ["'"].concat(u),
          y = ["%", "/", "?", ";", "#"].concat(d),
          c = ["/", "?", "#"],
          l = /^[+a-z0-9A-Z_-]{0,63}$/,
          T = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          E = { javascript: !0, "javascript:": !0 },
          f = { javascript: !0, "javascript:": !0 },
          S = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          h = s(17673);
        function I(e, t, s) {
          if (e && a.isObject(e) && e instanceof n) return e;
          var i = new n();
          return i.parse(e, t, s), i;
        }
        (n.prototype.parse = function (e, t, s) {
          if (!a.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
          var n = e.indexOf("?"),
            r = -1 !== n && n < e.indexOf("#") ? "?" : "#",
            u = e.split(r);
          u[0] = u[0].replace(/\\/g, "/");
          var I = (e = u.join(r));
          if (((I = I.trim()), !s && 1 === e.split("#").length)) {
            var N = p.exec(I);
            if (N)
              return (
                (this.path = I),
                (this.href = I),
                (this.pathname = N[1]),
                N[2]
                  ? ((this.search = N[2]), (this.query = t ? h.parse(this.search.substr(1)) : this.search.substr(1)))
                  : t && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var g = o.exec(I);
          if (g) {
            var R = (g = g[0]).toLowerCase();
            (this.protocol = R), (I = I.substr(g.length));
          }
          if (s || g || I.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var x = "//" === I.substr(0, 2);
            !x || (g && f[g]) || ((I = I.substr(2)), (this.slashes = !0));
          }
          if (!f[g] && (x || (g && !S[g]))) {
            for (var m, A, C = -1, O = 0; O < c.length; O++) -1 !== (M = I.indexOf(c[O])) && (-1 === C || M < C) && (C = M);
            for (
              -1 !== (A = -1 === C ? I.lastIndexOf("@") : I.lastIndexOf("@", C)) &&
                ((m = I.slice(0, A)), (I = I.slice(A + 1)), (this.auth = decodeURIComponent(m))),
                C = -1,
                O = 0;
              O < y.length;
              O++
            ) {
              var M;
              -1 !== (M = I.indexOf(y[O])) && (-1 === C || M < C) && (C = M);
            }
            -1 === C && (C = I.length),
              (this.host = I.slice(0, C)),
              (I = I.slice(C)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var v = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!v)
              for (var k = this.hostname.split(/\./), D = ((O = 0), k.length); O < D; O++) {
                var P = k[O];
                if (P && !P.match(l)) {
                  for (var U = "", L = 0, b = P.length; L < b; L++) P.charCodeAt(L) > 127 ? (U += "x") : (U += P[L]);
                  if (!U.match(l)) {
                    var _ = k.slice(0, O),
                      w = k.slice(O + 1),
                      G = P.match(T);
                    G && (_.push(G[1]), w.unshift(G[2])), w.length && (I = "/" + w.join(".") + I), (this.hostname = _.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
              v || (this.hostname = i.toASCII(this.hostname));
            var B = this.port ? ":" + this.port : "",
              F = this.hostname || "";
            (this.host = F + B),
              (this.href += this.host),
              v && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== I[0] && (I = "/" + I));
          }
          if (!E[R])
            for (O = 0, D = d.length; O < D; O++) {
              var q = d[O];
              if (-1 !== I.indexOf(q)) {
                var X = encodeURIComponent(q);
                X === q && (X = escape(q)), (I = I.split(q).join(X));
              }
            }
          var V = I.indexOf("#");
          -1 !== V && ((this.hash = I.substr(V)), (I = I.slice(0, V)));
          var W = I.indexOf("?");
          if (
            (-1 !== W
              ? ((this.search = I.substr(W)), (this.query = I.substr(W + 1)), t && (this.query = h.parse(this.query)), (I = I.slice(0, W)))
              : t && ((this.search = ""), (this.query = {})),
            I && (this.pathname = I),
            S[R] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            B = this.pathname || "";
            var j = this.search || "";
            this.path = B + j;
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
              o = "";
            this.host
              ? (n = e + this.host)
              : this.hostname &&
                ((n = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
                this.port && (n += ":" + this.port)),
              this.query && a.isObject(this.query) && Object.keys(this.query).length && (o = h.stringify(this.query));
            var r = this.search || (o && "?" + o) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || S[t]) && !1 !== n)
                ? ((n = "//" + (n || "")), s && "/" !== s.charAt(0) && (s = "/" + s))
                : n || (n = ""),
              i && "#" !== i.charAt(0) && (i = "#" + i),
              r && "?" !== r.charAt(0) && (r = "?" + r),
              t +
                n +
                (s = s.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (r = r.replace("#", "%23")) +
                i
            );
          }),
          (n.prototype.resolve = function (e) {
            return this.resolveObject(I(e, !1, !0)).format();
          }),
          (n.prototype.resolveObject = function (e) {
            if (a.isString(e)) {
              var t = new n();
              t.parse(e, !1, !0), (e = t);
            }
            for (var s = new n(), i = Object.keys(this), o = 0; o < i.length; o++) {
              var r = i[o];
              s[r] = this[r];
            }
            if (((s.hash = e.hash), "" === e.href)) return (s.href = s.format()), s;
            if (e.slashes && !e.protocol) {
              for (var p = Object.keys(e), u = 0; u < p.length; u++) {
                var d = p[u];
                "protocol" !== d && (s[d] = e[d]);
              }
              return S[s.protocol] && s.hostname && !s.pathname && (s.path = s.pathname = "/"), (s.href = s.format()), s;
            }
            if (e.protocol && e.protocol !== s.protocol) {
              if (!S[e.protocol]) {
                for (var y = Object.keys(e), c = 0; c < y.length; c++) {
                  var l = y[c];
                  s[l] = e[l];
                }
                return (s.href = s.format()), s;
              }
              if (((s.protocol = e.protocol), e.host || f[e.protocol])) s.pathname = e.pathname;
              else {
                for (var T = (e.pathname || "").split("/"); T.length && !(e.host = T.shift()); );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== T[0] && T.unshift(""),
                  T.length < 2 && T.unshift(""),
                  (s.pathname = T.join("/"));
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
                var E = s.pathname || "",
                  h = s.search || "";
                s.path = E + h;
              }
              return (s.slashes = s.slashes || e.slashes), (s.href = s.format()), s;
            }
            var I = s.pathname && "/" === s.pathname.charAt(0),
              N = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              g = N || I || (s.host && e.pathname),
              R = g,
              x = (s.pathname && s.pathname.split("/")) || [],
              m = ((T = (e.pathname && e.pathname.split("/")) || []), s.protocol && !S[s.protocol]);
            if (
              (m &&
                ((s.hostname = ""),
                (s.port = null),
                s.host && ("" === x[0] ? (x[0] = s.host) : x.unshift(s.host)),
                (s.host = ""),
                e.protocol &&
                  ((e.hostname = null), (e.port = null), e.host && ("" === T[0] ? (T[0] = e.host) : T.unshift(e.host)), (e.host = null)),
                (g = g && ("" === T[0] || "" === x[0]))),
              N)
            )
              (s.host = e.host || "" === e.host ? e.host : s.host),
                (s.hostname = e.hostname || "" === e.hostname ? e.hostname : s.hostname),
                (s.search = e.search),
                (s.query = e.query),
                (x = T);
            else if (T.length) x || (x = []), x.pop(), (x = x.concat(T)), (s.search = e.search), (s.query = e.query);
            else if (!a.isNullOrUndefined(e.search))
              return (
                m &&
                  ((s.hostname = s.host = x.shift()),
                  (v = !!(s.host && s.host.indexOf("@") > 0) && s.host.split("@")) &&
                    ((s.auth = v.shift()), (s.host = s.hostname = v.shift()))),
                (s.search = e.search),
                (s.query = e.query),
                (a.isNull(s.pathname) && a.isNull(s.search)) || (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")),
                (s.href = s.format()),
                s
              );
            if (!x.length) return (s.pathname = null), s.search ? (s.path = "/" + s.search) : (s.path = null), (s.href = s.format()), s;
            for (
              var A = x.slice(-1)[0],
                C = ((s.host || e.host || x.length > 1) && ("." === A || ".." === A)) || "" === A,
                O = 0,
                M = x.length;
              M >= 0;
              M--
            )
              "." === (A = x[M]) ? x.splice(M, 1) : ".." === A ? (x.splice(M, 1), O++) : O && (x.splice(M, 1), O--);
            if (!g && !R) for (; O--; O) x.unshift("..");
            !g || "" === x[0] || (x[0] && "/" === x[0].charAt(0)) || x.unshift(""), C && "/" !== x.join("/").substr(-1) && x.push("");
            var v,
              k = "" === x[0] || (x[0] && "/" === x[0].charAt(0));
            return (
              m &&
                ((s.hostname = s.host = k ? "" : x.length ? x.shift() : ""),
                (v = !!(s.host && s.host.indexOf("@") > 0) && s.host.split("@")) &&
                  ((s.auth = v.shift()), (s.host = s.hostname = v.shift()))),
              (g = g || (s.host && x.length)) && !k && x.unshift(""),
              x.length ? (s.pathname = x.join("/")) : ((s.pathname = null), (s.path = null)),
              (a.isNull(s.pathname) && a.isNull(s.search)) || (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")),
              (s.auth = e.auth || s.auth),
              (s.slashes = s.slashes || e.slashes),
              (s.href = s.format()),
              s
            );
          }),
          (n.prototype.parseHost = function () {
            var e = this.host,
              t = r.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
          });
      },
      62502: (e) => {
        "use strict";
        e.exports = {
          isString: function (e) {
            return "string" == typeof e;
          },
          isObject: function (e) {
            return "object" == typeof e && null !== e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNullOrUndefined: function (e) {
            return null == e;
          }
        };
      },
      72693: () => {},
      49069: () => {}
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var n = (t[i] = { id: i, loaded: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (s.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
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
                var a = i.call(t, "string");
                if ("object" !== e(a)) return a;
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
      s(91632);
      class a {
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
          const a = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var a = null != arguments[s] ? arguments[s] : {};
              s % 2
                ? i(Object(a), !0).forEach(function (s) {
                    t(e, s, a[s]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : i(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                  });
            }
            return e;
          })({ type: e }, s);
          (this._listeners[e] || []).forEach((e) => {
            e(a);
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
      var n = { isFirefox: !1, isSafari: !1, isEdge: !1, isChrome: !0 };
      function o(e) {
        var t = "";
        return (
          e.forEach(function (e) {
            t += e.date + " " + e.lvl + ": " + e.val + " \n";
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
              self.onerror = function (s, i, a) {
                t.error("Unhandled error at " + i + ":" + a, s), "function" == typeof e && e(s);
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
                  return s + "\n" + e.join("\n") + "\n\n" + o(t.getLogs());
                })
              );
            }),
            (e.prototype.getFormattedLogs = function () {
              var e = this;
              return this.getSystemInfo().then(function (t) {
                return t + " \n\n" + o(e.getLogs());
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
              return !n.isFirefox || this.logEnabled;
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
        p = new r(),
        u =
          ((function () {
            function e() {}
            (e.prototype.log = function (e, t) {
              var s, i, a, n;
              if (self.console.debug.apply)
                switch (e) {
                  case 3:
                    (s = self.console).debug.apply(s, t);
                    break;
                  case 1:
                    (i = self.console).warn.apply(i, t);
                    break;
                  case 0:
                    (a = self.console).error.apply(a, t);
                    break;
                  default:
                    (n = self.console).log.apply(n, t);
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
          "evernoteStyle"),
        d = /url\((['"]?)(\S*?)\1\)/g,
        y =
          (s(46463),
          function (e, t, s, i) {
            return new (s || (s = Promise))(function (a, n) {
              function o(e) {
                try {
                  p(i.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function r(e) {
                try {
                  p(i.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function p(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof s
                      ? t
                      : new s(function (e) {
                          e(t);
                        })).then(o, r);
              }
              p((i = i.apply(e, t || [])).next());
            });
          });
      function c(e, t) {
        return t.top >= e.top && t.left >= e.left && t.right <= e.right && t.bottom <= e.bottom;
      }
      function l(e, t) {
        var s = t || e.getBoundingClientRect(),
          i = window.pageXOffset,
          a = window.pageYOffset;
        if (e !== document.body)
          for (var n = e.parentNode; n !== document.body; ) (i += n.scrollLeft), (a += n.scrollTop), (n = n.parentNode);
        return { bottom: s.bottom + a, height: s.height, left: s.left + i, right: s.right + i, top: s.top + a, width: s.width };
      }
      var T = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;", "\\": "" };
      function E(e) {
        return (
          void 0 === e && (e = ""),
          e.replace(/(&(?!amp;|lt;|gt;|quot;|apos;)|<|>|"|'|\\)/g, function (e) {
            return T.hasOwnProperty(e) ? T[e] : e;
          })
        );
      }
      var f = function (e) {
          return e.replace(/\\/g, "");
        },
        S = function (e) {
          return e.replace(/\\'|'/g, function (e) {
            return "'" === e ? "\\'" : e;
          });
        },
        h = function (e) {
          return e.replace(/[\r\n%#()<>[\\\]^`{|}]/g, encodeURIComponent);
        },
        I = function (e) {
          return [f, S].reduce(function (e, t) {
            return t(e);
          }, e);
        },
        N = function (e) {
          return e.startsWith("data:");
        },
        g = function (e) {
          return e.replace(/^["']*|["']*$/g, "");
        };
      function R(e, t) {
        var s = e.getBoundingClientRect(),
          i = t.getBoundingClientRect();
        return (
          (s.bottom === i.bottom &&
            s.height === i.height &&
            s.left === i.left &&
            s.right === i.right &&
            s.top === i.top &&
            s.width === i.width) ||
          (e.textContent === t.textContent && e.getElementsByTagName("img").length === t.getElementsByTagName("img").length)
        );
      }
      function x(e) {
        return e === window.document;
      }
      function m(e, t) {
        if (!e || x(e)) return !1;
        if ("" === e.textContent.trim() && 0 === e.getElementsByTagName("img").length) return !1;
        var s = e.getBoundingClientRect();
        if (!s.width || !s.height) return !1;
        var i = getComputedStyle(e);
        return (
          "hidden" !== i.visibility &&
          "none" !== i.display &&
          (!e.parentNode || !t.parentNode || (e.parentNode !== t && t.parentNode !== e) || !R(e, t))
        );
      }
      function A(e) {
        for (var t = 0; t < e.children.length; t++) {
          if (R(e.children[t], e)) return A(e.children[t]);
          if (m(e.children[t], e)) return e.children[t];
        }
        return e;
      }
      var C,
        O = function (e) {
          var t = e;
          return "string" != typeof t || (/&amp;/.test(t) && (t = t.replace(/&amp;/g, "&"))), t;
        },
        M = function (e) {
          return "string" != typeof e ? "" : e.toString().toLowerCase();
        },
        v = function (e) {
          var t = e.dataset[u];
          return (t ? t.split(";") : []).filter(Boolean).reduce(function (e, t) {
            if (t) {
              var s = t.split(":");
              if (2 === s.length) {
                var i = s[0],
                  a = s[1];
                e[i] = a;
              }
            }
            return e;
          }, {});
        },
        k = {
          getAllTextNodesOfElement: function (e, t) {
            var s;
            void 0 === t && (t = window);
            for (var i = [], a = t.document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null); (s = a.nextNode()); ) i.push(s);
            return i;
          },
          getClosestToParentContainer: function (e, t) {
            if (e === t) return e;
            if (!t.contains(e)) return e;
            for (var s = e; s.parentNode !== t; ) s = s.parentNode;
            return s;
          },
          insertCSS: function (e, t) {
            var s;
            if ((void 0 === t && (t = window), t.document.querySelector("head"))) {
              var i = t.document.createElement("link");
              (i.type = "text/css"),
                (i.rel = "stylesheet"),
                (i.href = e),
                null === (s = t.document.querySelector("head")) || void 0 === s || s.appendChild(i);
            }
          },
          DOMLoaded: function (e, t) {
            return (
              void 0 === e && (e = window),
              void 0 === t && (t = document),
              y(this, void 0, void 0, function () {
                return (function (e, t) {
                  var s,
                    i,
                    a,
                    n,
                    o = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: []
                    };
                  return (
                    (n = { next: r(0), throw: r(1), return: r(2) }),
                    "function" == typeof Symbol &&
                      (n[Symbol.iterator] = function () {
                        return this;
                      }),
                    n
                  );
                  function r(n) {
                    return function (r) {
                      return (function (n) {
                        if (s) throw new TypeError("Generator is already executing.");
                        for (; o; )
                          try {
                            if (
                              ((s = 1),
                              i &&
                                (a = 2 & n[0] ? i.return : n[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
                                !(a = a.call(i, n[1])).done)
                            )
                              return a;
                            switch (((i = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                              case 0:
                              case 1:
                                a = n;
                                break;
                              case 4:
                                return o.label++, { value: n[1], done: !1 };
                              case 5:
                                o.label++, (i = n[1]), (n = [0]);
                                continue;
                              case 7:
                                (n = o.ops.pop()), o.trys.pop();
                                continue;
                              default:
                                if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || (6 !== n[0] && 2 !== n[0]))) {
                                  o = 0;
                                  continue;
                                }
                                if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                                  o.label = n[1];
                                  break;
                                }
                                if (6 === n[0] && o.label < a[1]) {
                                  (o.label = a[1]), (a = n);
                                  break;
                                }
                                if (a && o.label < a[2]) {
                                  (o.label = a[2]), o.ops.push(n);
                                  break;
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue;
                            }
                            n = t.call(e, o);
                          } catch (e) {
                            (n = [6, e]), (i = 0);
                          } finally {
                            s = a = 0;
                          }
                        if (5 & n[0]) throw n[1];
                        return { value: n[0] ? n[1] : void 0, done: !0 };
                      })([n, r]);
                    };
                  }
                })(this, function (s) {
                  return [
                    2,
                    new Promise(function (s) {
                      "complete" === t.readyState || "interactive" === t.readyState
                        ? s()
                        : e.addEventListener("DOMContentLoaded", function () {
                            return s();
                          });
                    })
                  ];
                });
              })
            );
          },
          getCommonAncestor: function (e) {
            for (var t = e ? e[0] : null; t; ) {
              for (var s = !0, i = 0; i < e.length; i++)
                if (!t.contains(e[i])) {
                  (t = t.parentNode), (s = !1);
                  break;
                }
              if (s) break;
            }
            return t;
          },
          getPreviousSibling: function (e) {
            for (var t = e, s = e.previousElementSibling; s; ) {
              if (m(s, t)) {
                t = s;
                break;
              }
              s = s.previousElementSibling;
            }
            return x(t) ? e : t;
          },
          getNextSibling: function (e) {
            for (var t = e, s = e.nextElementSibling; s; ) {
              if (m(s, t)) {
                t = s;
                break;
              }
              s = s.nextElementSibling;
            }
            return x(t) ? e : t;
          },
          moveUp: function (e) {
            for (var t = e, s = t.parentNode; s; ) {
              if (m(s, t)) {
                (s.enNudgeDescendToNode = t), (t = s);
                break;
              }
              (s = s.parentNode), (t = t.parentNode);
            }
            return x(t) ? e : t;
          },
          moveDown: function (e) {
            var t = e;
            if (t.enNudgeDescendToNode) {
              var s = t.enNudgeDescendToNode;
              return delete t.enNudgeDescendToNode, s;
            }
            return A(t);
          },
          descendTreeUntilUniqueElement: A,
          isSuitableCandidate: m,
          isDocumentElement: x,
          isSameElement: R,
          ce: function (e, t, s) {
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
          },
          createElement: function (e, t) {
            void 0 === e && (e = []);
            var s = document.createElement("div");
            return (
              e
                .filter(function (e) {
                  return e;
                })
                .forEach(function (e) {
                  s.classList.add(e);
                }),
              t && (s.id = t),
              s
            );
          },
          reconstituteUrl: function (e, t) {
            var s, i;
            try {
              s = decodeURIComponent(t);
            } catch (e) {
              s = t;
            }
            s = I(g(s));
            var a = e.split("/");
            a.splice(-1, 1);
            var n = a.join("/") + "/",
              o = s.trim();
            return (
              (i =
                o.match(/^http/i) || N(o)
                  ? o
                  : o.match(/^\/\//)
                  ? "https:" + o
                  : o.match(/^\//)
                  ? n.replace(/^(.*?:\/\/[^\/]+).*$/, "$1") + o
                  : n.replace(/^(.*\/)/, "$1") + o),
              N(i) && (i = "" + h(i)),
              E(i)
            );
          },
          removeEmbracedQuotes: g,
          isDataURI: N,
          sanitizeURL: I,
          encodeOnlySpecialChars: h,
          overrideSimpleQuote: S,
          removeBackSlash: f,
          escapeXML: E,
          unescapeXML: function (e) {
            return (
              void 0 === e && (e = ""),
              e
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&apos;/g, "'")
            );
          },
          escapeHTML: function (e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          },
          elementRectInside: function (e, t, s) {
            return e && s && c(s, l(e, t));
          },
          getAbsoluteBoundingRect: l,
          rectContainsRect: c,
          encodeURLPathname: function (e) {
            if ("undefined" == typeof URL) return e;
            try {
              var t = new URL(e),
                s = t.origin,
                i = t.search,
                a = t.pathname,
                n = function (e) {
                  return e.replace(/(\/{1,2}|:|,)/g, encodeURIComponent);
                },
                o = O(n(a.replace(/^\//, ""))),
                r = O(n(i));
              return [[s, o].join("/"), r].join("");
            } catch (t) {
              p.warn("Bad URL:", e);
            }
          },
          toLowerCase: M,
          isTagNameOf: function (e, t) {
            return !!e && M(e.tagName) === M(t);
          },
          isBlobURL: function (e) {
            return e.startsWith("blob:");
          },
          sanitizeBackgroundImageUrl: function (e) {
            try {
              return E(decodeURI(e));
            } catch (t) {
              return p.warn("Value", e, "could not be decoded"), E(e);
            }
          },
          hasEvernoteStyles: function (e) {
            return Boolean(e && e.dataset && e.dataset[u]);
          },
          removeEvernoteStyleData: function (e) {
            delete e.dataset[u];
          },
          addEvernoteStyles: function (e, t) {
            if ((void 0 === t && (t = {}), e)) {
              var s = v(e);
              for (var i in t) {
                var a = t[i];
                s[i] = a;
              }
              var n = [];
              for (var i in s)
                (a = t[i]),
                  n.push(
                    i.replace(/[A-Z]/g, function (e) {
                      return "-" + M(e);
                    }) +
                      ":" +
                      a
                  );
              var o = n.join(";");
              o.length && (o += ";"), (e.dataset[u] = o);
            }
          },
          getEvernoteStyleDataFromNode: v,
          getBackgroundUrlsFromText: function (e) {
            for (var t, s = []; (t = d.exec(e)); ) {
              var i = t.slice(1),
                a = g(i.join(""));
              a && s.push(a);
            }
            return s;
          },
          getInclusiveSubstr: function (e, t, s) {
            return e.slice(t, s + 1);
          },
          sanitizeSourceURL: function (e) {
            var t = e;
            if (t)
              try {
                t = encodeURI(decodeURI(e));
              } catch (e) {
                p.warn("URL could not be decoded because of", e);
              }
            return t;
          }
        },
        D = function () {
          return (
            (D =
              Object.assign ||
              function (e) {
                for (var t, s = 1, i = arguments.length; s < i; s++)
                  for (var a in (t = arguments[s])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            D.apply(this, arguments)
          );
        },
        P = function (e, t, s, i) {
          return new (s || (s = Promise))(function (a, n) {
            function o(e) {
              try {
                p(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function r(e) {
              try {
                p(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function p(e) {
              var t;
              e.done
                ? a(e.value)
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
        U = function (e, t) {
          var s,
            i,
            a,
            n,
            o = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: []
            };
          return (
            (n = { next: r(0), throw: r(1), return: r(2) }),
            "function" == typeof Symbol &&
              (n[Symbol.iterator] = function () {
                return this;
              }),
            n
          );
          function r(n) {
            return function (r) {
              return (function (n) {
                if (s) throw new TypeError("Generator is already executing.");
                for (; o; )
                  try {
                    if (
                      ((s = 1),
                      i &&
                        (a = 2 & n[0] ? i.return : n[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
                        !(a = a.call(i, n[1])).done)
                    )
                      return a;
                    switch (((i = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                      case 0:
                      case 1:
                        a = n;
                        break;
                      case 4:
                        return o.label++, { value: n[1], done: !1 };
                      case 5:
                        o.label++, (i = n[1]), (n = [0]);
                        continue;
                      case 7:
                        (n = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || (6 !== n[0] && 2 !== n[0]))) {
                          o = 0;
                          continue;
                        }
                        if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                          o.label = n[1];
                          break;
                        }
                        if (6 === n[0] && o.label < a[1]) {
                          (o.label = a[1]), (a = n);
                          break;
                        }
                        if (a && o.label < a[2]) {
                          (o.label = a[2]), o.ops.push(n);
                          break;
                        }
                        a[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    n = t.call(e, o);
                  } catch (e) {
                    (n = [6, e]), (i = 0);
                  } finally {
                    s = a = 0;
                  }
                if (5 & n[0]) throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              })([n, r]);
            };
          }
        };
      !(function (e) {
        (e.REQUEST = "EN_request"), (e.RESPONSE = "EN_response"), (e.ERROR = "__error__");
      })(C || (C = {})),
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
              return new Promise(function (a, n) {
                var o = i.channelName + "-" + ++i.uniqueMessageID,
                  r = { type: C.REQUEST, messageID: o, name: t, data: s };
                i.pendingMessages.set(o, { name: t, resolve: a, reject: n }), e.postMessage(r, "*");
              });
            }),
            (e.prototype.handleMessage = function (e) {
              return P(this, void 0, void 0, function () {
                return U(this, function (t) {
                  if (!e.data) return [2];
                  switch (e.data.type) {
                    case C.REQUEST:
                      return [2, this.handleRequest(e.data, e.source)];
                    case C.RESPONSE:
                      return [2, this.handleResponse(e.data)];
                    default:
                      return [2];
                  }
                  return [2];
                });
              });
            }),
            (e.prototype.handleRequest = function (e, t) {
              return P(this, void 0, void 0, function () {
                var s, i, a;
                return U(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (s = e.name), (i = this.requestHandlers[s]) ? [4, this.executeRequest(e, i)] : [2];
                    case 1:
                      return (a = n.sent()), t.postMessage(a, "*"), [2];
                  }
                });
              });
            }),
            (e.prototype.executeRequest = function (e, t) {
              return P(this, void 0, void 0, function () {
                var s, i, a, n, o;
                return U(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (s = e.messageID), (r.label = 1);
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, t(e.data || {})];
                    case 2:
                      return (i = r.sent()), [2, { type: C.RESPONSE, messageID: s, name, data: i }];
                    case 3:
                      return (
                        (a = r.sent()),
                        console.error(a),
                        (n = a),
                        [2, ((o = {}), (o[C.ERROR] = D(D({}, n), { stack: n.stack, message: n.message })), o)]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.handleResponse = function (e) {
              return P(this, void 0, void 0, function () {
                var t, s, i, a;
                return U(this, function (n) {
                  return (
                    (t = e.messageID),
                    (s = this.pendingMessages.get(t))
                      ? ((i = s.resolve),
                        (a = s.reject),
                        e.data && e.data[C.ERROR] && a(e.data[C.ERROR]),
                        i(e.data),
                        this.pendingMessages.delete(t),
                        [2])
                      : [2]
                  );
                });
              });
            });
        })();
      var L = [
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
      function b(e) {
        return function (t) {
          var s = e.exec(t);
          return s ? s[1] : t;
        };
      }
      var _ = {
          Baidu: {
            regex: /^https?:\/\/([^./]+\.)?baidu\.(com|cn)/i,
            content: "#container",
            searchBox: "input[name=wd]",
            allowedElements: "h3.t a[data-click], .f font[size='-1']",
            bannedSubelements: "span.g, .m, .c",
            titleTrim: b(/(.+)_\u767E\u5EA6\u641C\u7D22/)
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
            titleTrim: b(/(.+)\s\u2013/)
          },
          Google: {
            regex: (function () {
              for (var e = [], t = 0; t < L.length; t++) e[t] = L[t].replace(/\./g, "\\.");
              return new RegExp("^https?://www\\.google(" + e.join("|") + ")", "i");
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
            titleTrim: b(/(.+)\s\u003A/)
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
            titleTrim: b(/\u300C(.+)\u300D/)
          },
          Yandex: {
            regex: /^https?:\/\/([^./]+\.)?yandex\.(com|ru)\/search/,
            content: ".serp-list",
            searchBox: "input[name=text]",
            allowedElements: ".serp-item__title-link, .serp-item__text",
            bannedSubelements: ".serp-item__date",
            titleTrim: b(/(.+)\s+\u2014/)
          }
        },
        w = {
          searchEngines: _,
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
          googleCountryDomains: L
        },
        G = /^http[s]?:\/\/www[.]youtube[.]com\/watch[?][\S]*v=([a-z0-9_-]{5,20})/i,
        B = /[?&]v=([^&#]*)/,
        F = /^(http[s]?|ftp):\/\/.*\.pdf$/i,
        q = /^ftp:\/\/.*/i,
        X = /(http[s]?:)?\/\/.+/;
      function V(e) {
        void 0 === e && (e = window);
        var t = e.location.host;
        return /^www\./.test(t) && (t = t.substr(4)), t;
      }
      function W(e) {
        return void 0 === e && (e = window), e.location.pathname;
      }
      function j(e) {
        var t;
        void 0 === e && (e = window);
        var s = (function (e) {
          for (var t = -1, s = 0, i = 0; i < e.length; i++) {
            var a = e[i].width * e[i].height;
            a > s && ((t = i), (s = a));
          }
          return t >= 0 ? e[t] : null;
        })(e.document.querySelectorAll("img"));
        return null !== (t = null == s ? void 0 : s.getAttribute("src")) && void 0 !== t ? t : null;
      }
      function H() {
        for (var e = Object.keys(w.searchEngines), t = 0; t < e.length; t++)
          if (w.searchEngines[e[t]].regex.test(document.location.href)) return e[t];
        return null;
      }
      function Y() {
        var e = /^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(
          document.location.href
        );
        return e ? e[1] : null;
      }
      function K() {
        var e = document.location.href;
        return /^https:\/\/mail\.google\.com\/mail\//.test(e);
      }
      function z() {
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
        } else if (Y()) return Y();
        return null;
      }
      function Z() {
        var e = document.title,
          t = H(),
          s = (function () {
            var e = document.querySelector("ytd-watch-flexy:not([hidden]) h1.title.ytd-video-primary-info-renderer");
            if (!e) return null;
            var t = e.textContent;
            return (null == t ? void 0 : t.trim()) + " - YouTube";
          })();
        if ((s && (e = s), t))
          if (w.searchEngines[t].titleTrim) e = w.searchEngines[t].titleTrim(e);
          else {
            var i = e.split(" - ");
            e = e.replace(" - " + i[i.length - 1], "");
          }
        return z() && (e = n.isFirefox ? "PDF - " + document.title : "PDF - " + document.domain), e.trim();
      }
      function $(e) {
        var t,
          s,
          i = null != e ? e : window.location.href,
          a = function () {
            var e = B.exec(i);
            return e && e[1] ? e[1] : null;
          };
        if (G.test(i) && a()) return "https://img.youtube.com/vi/" + a() + "/hqdefault.jpg";
        var n = document.querySelector("[itemtype$='VideoObject'] [itemprop='thumbnailUrl'][href]");
        return n && null !== (s = null === (t = n.getAttribute("href")) || void 0 === t ? void 0 : t.trim()) && void 0 !== s ? s : null;
      }
      var J,
        Q = {
          isFtpPage: function () {
            return q.test(document.location.href);
          },
          isPdfPage: function (e) {
            return void 0 === e && (e = document.location.href), !(n.isEdge || !document || !document.body) && F.test(e);
          },
          getThumbnail: function () {
            var e,
              t,
              s,
              i,
              a,
              n = "",
              o = $();
            if (o) n = o;
            else {
              var r = document.querySelector("meta[property='twitter:image'][content]");
              r
                ? (n = null !== (e = r.getAttribute("content")) && void 0 !== e ? e : "")
                : (r = document.querySelector("[itemtype$='ImageObject'] [itemprop='url'][src]"))
                ? (n = null !== (t = r.getAttribute("content")) && void 0 !== t ? t : "")
                : (r = document.querySelector("meta[property='og:image'][content]")) &&
                  X.test(null !== (s = r.getAttribute("content")) && void 0 !== s ? s : "") &&
                  (n = null !== (i = r.getAttribute("content")) && void 0 !== i ? i : "");
            }
            return (
              n.startsWith("://") && (n = document.location.protocol + "//" + n.replace("://", "")),
              n || (n = null !== (a = j(window)) && void 0 !== a ? a : ""),
              n
            );
          },
          getVideoThumbnail: $,
          getText: function e(t, s, i, a, n, o) {
            var r = s;
            if (t.nodeType === Node.TEXT_NODE) {
              var p;
              return (
                (p = o
                  ? (function (e) {
                      var t = new RegExp(
                        ["-", "_", "–", "—", "·"].join("|") +
                          "|" +
                          ["\\(", "\\)", "\\[", "\\]", "\\{", "\\}", "《", "》", "（", "）", "【", "】", "「", "」", "»"].join("|") +
                          "|" +
                          ["\\.", "!", ":", ";", '"', "'", ",", "\\?", "。", "、", "！", "，", "：", "…", "“", "”"].join("|") +
                          "|" +
                          ["@", "#", "\\$", "%", "\\^", "&", "\\*", "\\+", "=", "`", "~", "/", "\\\\", "\\|", ">", "<", "●"].join("|"),
                        "g"
                      );
                      return e.replace(t, " ");
                    })(t.textContent.trim()).replace(/\s+/g, " ")
                  : t.textContent.trim().replace(/\s+/g, " ")),
                " " === p || "" === p ? r : r + " " + p
              );
            }
            if (t.nodeType === Node.ELEMENT_NODE && -1 === ["script", "noscript", "style"].indexOf(t.nodeName.toLowerCase())) {
              if (/^evernote.+Tools$/.test(t.id)) return r;
              for (var u = 0; u < t.childNodes.length; u++) if ((r = e(t.childNodes[u], r, i, 0, 0, o)).length > i) return r;
            }
            return r.trim();
          },
          getPageAttribures: function () {
            return { title: Z(), url: document.location.href };
          },
          getTitle: Z,
          getPdfUrl: z,
          isGmailThread: function () {
            if (K()) {
              var e = document.querySelectorAll("span > div > span > [src='images/cleardot.gif']"),
                t = document.querySelectorAll("div.bodycontainer > div.maincontent");
              return !(!e.length && !t.length);
            }
            return !1;
          },
          isGmail: K,
          isImageUrl: function (e) {
            return /\.(gif|jpe?g|tiff|png)$/i.test(e);
          },
          isSearchEngine: H,
          getFavIconUrl: function (e) {
            void 0 === e && (e = document);
            var t = e.querySelector("link[rel~='icon']");
            return t ? t.getAttribute("href") : document.location.origin + "/favicon.ico";
          },
          getThumbNail: function (e) {
            return void 0 === e && (e = window), j(e);
          },
          getArticleTags: function (e) {
            void 0 === e && (e = window);
            var t = Array.from(e.document.getElementsByTagName("article"));
            return t.length ? t : null;
          },
          getBiggestImage: j,
          getSpecialCandidate: function (e) {
            void 0 === e && (e = window);
            var t = V(e),
              s = W(e),
              i = w.specialCandidates[t] || w.specialCandidates[t + s];
            if (i) {
              var a = e.document || document,
                n = i.find(function (e) {
                  return Boolean(a.querySelector(e));
                });
              if (n) return a.querySelector(n);
            }
            return null;
          },
          getPathName: W,
          getSpecialCaseArticle: function (e) {
            void 0 === e && (e = window);
            var t = V(e);
            if (w.specialCases[t]) {
              var s = e.document || document,
                i = w.specialCases[t].join(","),
                a = s.querySelector(i);
              if (a) return a;
            }
            return null;
          },
          getPageHost: V
        },
        ee = (function () {
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
                var a = new Image();
                (a.crossOrigin = "Anonymous"),
                  (a.onload = function () {
                    var e = t._window.document.createElement("CANVAS"),
                      n = e.getContext("2d");
                    (e.height = a.naturalHeight), (e.width = a.naturalWidth), t._isNotEmptyImage(a) && n.drawImage(a, 0, 0);
                    try {
                      var o = e.toDataURL(t.outputFormat);
                      s(o);
                    } catch (e) {
                      i(e);
                    }
                  }),
                  (a.onerror = function (e) {
                    i(e);
                  }),
                  (a.src = e),
                  (a.complete || void 0 === a.complete) &&
                    ((a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="), (a.src = e));
              });
            }),
            (e.prototype.convertSync = function (e, t) {
              var s = /^(https?:\/\/.[^\/]+)\/?/.exec(t);
              if (!s || s[1] === this._window.document.location.origin) {
                if (!e.naturalHeight && !e.naturalWidth) return t;
                var i = this._window.document.createElement("CANVAS"),
                  a = i.getContext("2d");
                return (
                  (i.height = e.naturalHeight || 1), (i.width = e.naturalWidth || 1), a.drawImage(e, 0, 0), i.toDataURL(this.outputFormat)
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
          (this._window = t), (this.converter = new ee({ _window: t }));
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
            return new ee({ _window: this._window }).convert(e);
          });
      })();
      var te = new Uint8Array(16);
      function se() {
        if (
          !J &&
          !(J =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return J(te);
      }
      const ie = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        ae = function (e) {
          return "string" == typeof e && ie.test(e);
        };
      for (var ne = [], oe = 0; oe < 256; ++oe) ne.push((oe + 256).toString(16).substr(1));
      const re = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s = (
            ne[e[t + 0]] +
            ne[e[t + 1]] +
            ne[e[t + 2]] +
            ne[e[t + 3]] +
            "-" +
            ne[e[t + 4]] +
            ne[e[t + 5]] +
            "-" +
            ne[e[t + 6]] +
            ne[e[t + 7]] +
            "-" +
            ne[e[t + 8]] +
            ne[e[t + 9]] +
            "-" +
            ne[e[t + 10]] +
            ne[e[t + 11]] +
            ne[e[t + 12]] +
            ne[e[t + 13]] +
            ne[e[t + 14]] +
            ne[e[t + 15]]
          ).toLowerCase();
        if (!ae(s)) throw TypeError("Stringified UUID is invalid");
        return s;
      };
      function pe(e, t, s) {
        function i(e, i, a, n) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], s = 0; s < e.length; ++s) t.push(e.charCodeAt(s));
                return t;
              })(e)),
            "string" == typeof i &&
              (i = (function (e) {
                if (!ae(e)) throw TypeError("Invalid UUID");
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
          if ((o.set(i), o.set(e, i.length), ((o = s(o))[6] = (15 & o[6]) | t), (o[8] = (63 & o[8]) | 128), a)) {
            n = n || 0;
            for (var r = 0; r < 16; ++r) a[n + r] = o[r];
            return a;
          }
          return re(o);
        }
        try {
          i.name = e;
        } catch (e) {}
        return (i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"), i;
      }
      function ue(e) {
        return 14 + (((e + 64) >>> 9) << 4) + 1;
      }
      function de(e, t) {
        var s = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (s >> 16)) << 16) | (65535 & s);
      }
      function ye(e, t, s, i, a, n) {
        return de(((o = de(de(t, e), de(i, n))) << (r = a)) | (o >>> (32 - r)), s);
        var o, r;
      }
      function ce(e, t, s, i, a, n, o) {
        return ye((t & s) | (~t & i), e, t, a, n, o);
      }
      function le(e, t, s, i, a, n, o) {
        return ye((t & i) | (s & ~i), e, t, a, n, o);
      }
      function Te(e, t, s, i, a, n, o) {
        return ye(t ^ s ^ i, e, t, a, n, o);
      }
      function Ee(e, t, s, i, a, n, o) {
        return ye(s ^ (t | ~i), e, t, a, n, o);
      }
      pe("v3", 48, function (e) {
        if ("string" == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (var s = 0; s < t.length; ++s) e[s] = t.charCodeAt(s);
        }
        return (function (e) {
          for (var t = [], s = 32 * e.length, i = "0123456789abcdef", a = 0; a < s; a += 8) {
            var n = (e[a >> 5] >>> a % 32) & 255,
              o = parseInt(i.charAt((n >>> 4) & 15) + i.charAt(15 & n), 16);
            t.push(o);
          }
          return t;
        })(
          (function (e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[ue(t) - 1] = t);
            for (var s = 1732584193, i = -271733879, a = -1732584194, n = 271733878, o = 0; o < e.length; o += 16) {
              var r = s,
                p = i,
                u = a,
                d = n;
              (s = ce(s, i, a, n, e[o], 7, -680876936)),
                (n = ce(n, s, i, a, e[o + 1], 12, -389564586)),
                (a = ce(a, n, s, i, e[o + 2], 17, 606105819)),
                (i = ce(i, a, n, s, e[o + 3], 22, -1044525330)),
                (s = ce(s, i, a, n, e[o + 4], 7, -176418897)),
                (n = ce(n, s, i, a, e[o + 5], 12, 1200080426)),
                (a = ce(a, n, s, i, e[o + 6], 17, -1473231341)),
                (i = ce(i, a, n, s, e[o + 7], 22, -45705983)),
                (s = ce(s, i, a, n, e[o + 8], 7, 1770035416)),
                (n = ce(n, s, i, a, e[o + 9], 12, -1958414417)),
                (a = ce(a, n, s, i, e[o + 10], 17, -42063)),
                (i = ce(i, a, n, s, e[o + 11], 22, -1990404162)),
                (s = ce(s, i, a, n, e[o + 12], 7, 1804603682)),
                (n = ce(n, s, i, a, e[o + 13], 12, -40341101)),
                (a = ce(a, n, s, i, e[o + 14], 17, -1502002290)),
                (s = le(s, (i = ce(i, a, n, s, e[o + 15], 22, 1236535329)), a, n, e[o + 1], 5, -165796510)),
                (n = le(n, s, i, a, e[o + 6], 9, -1069501632)),
                (a = le(a, n, s, i, e[o + 11], 14, 643717713)),
                (i = le(i, a, n, s, e[o], 20, -373897302)),
                (s = le(s, i, a, n, e[o + 5], 5, -701558691)),
                (n = le(n, s, i, a, e[o + 10], 9, 38016083)),
                (a = le(a, n, s, i, e[o + 15], 14, -660478335)),
                (i = le(i, a, n, s, e[o + 4], 20, -405537848)),
                (s = le(s, i, a, n, e[o + 9], 5, 568446438)),
                (n = le(n, s, i, a, e[o + 14], 9, -1019803690)),
                (a = le(a, n, s, i, e[o + 3], 14, -187363961)),
                (i = le(i, a, n, s, e[o + 8], 20, 1163531501)),
                (s = le(s, i, a, n, e[o + 13], 5, -1444681467)),
                (n = le(n, s, i, a, e[o + 2], 9, -51403784)),
                (a = le(a, n, s, i, e[o + 7], 14, 1735328473)),
                (s = Te(s, (i = le(i, a, n, s, e[o + 12], 20, -1926607734)), a, n, e[o + 5], 4, -378558)),
                (n = Te(n, s, i, a, e[o + 8], 11, -2022574463)),
                (a = Te(a, n, s, i, e[o + 11], 16, 1839030562)),
                (i = Te(i, a, n, s, e[o + 14], 23, -35309556)),
                (s = Te(s, i, a, n, e[o + 1], 4, -1530992060)),
                (n = Te(n, s, i, a, e[o + 4], 11, 1272893353)),
                (a = Te(a, n, s, i, e[o + 7], 16, -155497632)),
                (i = Te(i, a, n, s, e[o + 10], 23, -1094730640)),
                (s = Te(s, i, a, n, e[o + 13], 4, 681279174)),
                (n = Te(n, s, i, a, e[o], 11, -358537222)),
                (a = Te(a, n, s, i, e[o + 3], 16, -722521979)),
                (i = Te(i, a, n, s, e[o + 6], 23, 76029189)),
                (s = Te(s, i, a, n, e[o + 9], 4, -640364487)),
                (n = Te(n, s, i, a, e[o + 12], 11, -421815835)),
                (a = Te(a, n, s, i, e[o + 15], 16, 530742520)),
                (s = Ee(s, (i = Te(i, a, n, s, e[o + 2], 23, -995338651)), a, n, e[o], 6, -198630844)),
                (n = Ee(n, s, i, a, e[o + 7], 10, 1126891415)),
                (a = Ee(a, n, s, i, e[o + 14], 15, -1416354905)),
                (i = Ee(i, a, n, s, e[o + 5], 21, -57434055)),
                (s = Ee(s, i, a, n, e[o + 12], 6, 1700485571)),
                (n = Ee(n, s, i, a, e[o + 3], 10, -1894986606)),
                (a = Ee(a, n, s, i, e[o + 10], 15, -1051523)),
                (i = Ee(i, a, n, s, e[o + 1], 21, -2054922799)),
                (s = Ee(s, i, a, n, e[o + 8], 6, 1873313359)),
                (n = Ee(n, s, i, a, e[o + 15], 10, -30611744)),
                (a = Ee(a, n, s, i, e[o + 6], 15, -1560198380)),
                (i = Ee(i, a, n, s, e[o + 13], 21, 1309151649)),
                (s = Ee(s, i, a, n, e[o + 4], 6, -145523070)),
                (n = Ee(n, s, i, a, e[o + 11], 10, -1120210379)),
                (a = Ee(a, n, s, i, e[o + 2], 15, 718787259)),
                (i = Ee(i, a, n, s, e[o + 9], 21, -343485551)),
                (s = de(s, r)),
                (i = de(i, p)),
                (a = de(a, u)),
                (n = de(n, d));
            }
            return [s, i, a, n];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (var t = 8 * e.length, s = new Uint32Array(ue(t)), i = 0; i < t; i += 8) s[i >> 5] |= (255 & e[i / 8]) << i % 32;
              return s;
            })(e),
            8 * e.length
          )
        );
      });
      const fe = function (e, t, s) {
        var i = (e = e || {}).random || (e.rng || se)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
          s = s || 0;
          for (var a = 0; a < 16; ++a) t[s + a] = i[a];
          return t;
        }
        return re(i);
      };
      function Se(e, t, s, i) {
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
      function he(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      pe("v5", 80, function (e) {
        var t = [1518500249, 1859775393, 2400959708, 3395469782],
          s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof e) {
          var i = unescape(encodeURIComponent(e));
          e = [];
          for (var a = 0; a < i.length; ++a) e.push(i.charCodeAt(a));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        for (var n = e.length / 4 + 2, o = Math.ceil(n / 16), r = new Array(o), p = 0; p < o; ++p) {
          for (var u = new Uint32Array(16), d = 0; d < 16; ++d)
            u[d] = (e[64 * p + 4 * d] << 24) | (e[64 * p + 4 * d + 1] << 16) | (e[64 * p + 4 * d + 2] << 8) | e[64 * p + 4 * d + 3];
          r[p] = u;
        }
        (r[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
          (r[o - 1][14] = Math.floor(r[o - 1][14])),
          (r[o - 1][15] = (8 * (e.length - 1)) & 4294967295);
        for (var y = 0; y < o; ++y) {
          for (var c = new Uint32Array(80), l = 0; l < 16; ++l) c[l] = r[y][l];
          for (var T = 16; T < 80; ++T) c[T] = he(c[T - 3] ^ c[T - 8] ^ c[T - 14] ^ c[T - 16], 1);
          for (var E = s[0], f = s[1], S = s[2], h = s[3], I = s[4], N = 0; N < 80; ++N) {
            var g = Math.floor(N / 20),
              R = (he(E, 5) + Se(g, f, S, h) + I + t[g] + c[N]) >>> 0;
            (I = h), (h = S), (S = he(f, 30) >>> 0), (f = E), (E = R);
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
      var Ie = (function () {
        function e() {
          if (e.instance) return e.instance;
          this.initialize(), (e.instance = this);
        }
        return (
          (e.getInstance = function () {
            return e.instance;
          }),
          (e.prototype.initialize = function () {
            (this.clipId = fe()),
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
          return "success" === Ie.clipStatus
            ? Ie
            : {
                clipId: (e = Ie).clipId,
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
            return Ie.initialize(), Ie;
          }),
          (e.reinitializeEvent = function () {
            Ie.initialize();
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
      const Ne = self.chrome || self.browser || chrome || browser,
        ge = (self.topee, Ne);
      class Re {
        getAcceptLanguages() {
          return new Promise((e) => {
            ge.i18n.getAcceptLanguages(e);
          });
        }
        getMessage() {
          return ge.i18n.getMessage(...arguments);
        }
        getUILanguage() {
          return ge.i18n.getUILanguage();
        }
      }
      var xe, me, Ae, Ce;
      function Oe(e, t) {
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
      function Me(e) {
        for (var s = 1; s < arguments.length; s++) {
          var i = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? Oe(Object(i), !0).forEach(function (s) {
                t(e, s, i[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Oe(Object(i)).forEach(function (t) {
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
      })(xe || (xe = {})),
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
        })(me || (me = {})),
        (function (e) {
          e.SERIALIZE_ERROR = "SRLZ";
        })(Ae || (Ae = {})),
        (function (e) {
          (e.SERIALIZE_FAILED = "SERIALIZE_FAILED"),
            (e.NOTE_SIZE_EXCEEDED = "SR_NOTE_SIZE_EXCEEDED"),
            (e.SERIALIZE_TIMEOUT = "SERIALIZE_TIMEOUT");
        })(Ce || (Ce = {}));
      const ve = "clipperError",
        ke = Me(
          Me({}, me),
          {},
          {
            MULTI_SELECT: "multiSelect",
            DEFAULT_CLIP_TYPES: me.ARTICLE,
            CONTEXT_IMAGE: "contextMenuImage",
            CONTEXT_SCREENSHOT: "contextMenuScreenshot",
            LOGIN: "login"
          }
        ),
        De = Boolean(!1),
        Pe = (Object.freeze({ alert: "alert" }), ke.FULL_PAGE, ke.BOOKMARK, ke.CONTEXT_SCREENSHOT, "hasAnyLoggedInAccount");
      class Ue {
        constructor() {
          this.action = De ? ge.browserAction : ge.action;
        }
        setTitle(e) {
          this.action.setTitle(e);
        }
        get onClicked() {
          return {
            addListener: (e) => this.action.onClicked.addListener(e),
            removeListener: (e) => this.action.onClicked.removeListener(e)
          };
        }
        disable(e) {
          return new Promise((t) => {
            this.action.disable(e, t);
          });
        }
        enable(e) {
          return new Promise((t) => {
            this.action.enable(e, t);
          });
        }
        setIcon(e) {
          let t = e;
          this.action.setIcon({ path: t });
        }
      }
      class Le {
        getURL(e) {
          return ge.runtime.getURL(e);
        }
        getManifest() {
          return ge.runtime.getManifest();
        }
        get onMessage() {
          return { addListener: (e) => ge.runtime.onMessage.addListener(e) };
        }
        sendMessage(e) {
          return ge.runtime.sendMessage(e);
        }
        get isGetManifestApiAvailable() {
          return Boolean(ge && ge.runtime && ((e = ge.runtime.getManifest), Boolean(e && "function" == typeof e)));
          var e;
        }
        reload() {
          if (De) "undefined" != typeof document && document.location.reload();
          else {
            if (void 0 === ge.runtime.reload) throw new Error("WebClipper cannot be reloaded since you're using kiosk mode");
            ge.runtime.reload();
          }
        }
      }
      const be = (e) => e && e.then && "function" == typeof e.then;
      class _e {
        captureVisibleTab(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise((s, i) => {
            if (!ge.tabs.captureVisibleTab) return void i(new TypeError("Method `captureVisibleTab` not defined."));
            const a = ge.tabs.captureVisibleTab(e, t, s);
            be(a) && a.then(s).catch(i);
          });
        }
        getZoom(e) {
          return new Promise((t, s) => {
            const i = ge.tabs.getZoom(e, t);
            be(i) && i.then(t).catch(s);
          });
        }
        query(e) {
          return new Promise((t, s) => {
            const i = ge.tabs.query(e, t);
            be(i) && i.then(t).catch(s);
          });
        }
        sendMessage(e, t) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          return new Promise((i, a) => {
            const n = ge.tabs.sendMessage(e, t, s, i);
            be(n) && n.then(i).catch(a);
          });
        }
        get onUpdated() {
          return { addListener: (e) => ge.tabs.onUpdated.addListener(e), removeListener: (e) => ge.tabs.onUpdated.removeListener(e) };
        }
        get onActivated() {
          return { addListener: (e) => ge.tabs.onActivated.addListener(e), removeListener: (e) => ge.tabs.onActivated.removeListener(e) };
        }
        get onRemoved() {
          return { addListener: (e) => ge.tabs.onRemoved.addListener(e), removeListener: (e) => ge.tabs.onRemoved.removeListener(e) };
        }
        get TAB_ID_NONE() {
          return ge.tabs.TAB_ID_NONE;
        }
        remove(e) {
          ge.tabs.remove(e);
        }
        create(e, t) {
          ge.tabs.create(e, t);
        }
        update(e, t) {
          ge.tabs.update(e, t);
        }
        highlight(e) {
          return new Promise((t, s) => {
            const i = ge.tabs.highlight(e, t);
            be(i) && i.then(t).catch(s);
          });
        }
        get(e) {
          return new Promise((t, s) => {
            const i = ge.tabs.get(e, t);
            be(i) && i.then(t).catch(s);
          });
        }
      }
      class we {
        update(e, t) {
          ge.windows.update(e, t);
        }
        create(e, t) {
          ge.windows.create(e, t);
        }
        get onRemoved() {
          return { addListener: (e) => ge.windows.onRemoved.addListener(e), removeListener: (e) => ge.windows.onRemoved.removeListener(e) };
        }
        remove(e) {
          ge.windows.remove(e);
        }
      }
      class Ge {
        constructor() {
          (this._contextMenus = ge.contextMenus || ge.menus),
            (this.onClicked = {
              addListener: (e) => {
                this._contextMenus.onClicked.addListener(e);
              },
              removeListener: (e) => {
                this._contextMenus.onClicked.removeListener(e);
              }
            });
        }
        create() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return this._contextMenus.create(e, t);
        }
        update(e, t) {
          return new Promise((s) => {
            this._contextMenus.update(e, t, s);
          });
        }
        remove(e) {
          return new Promise((t) => {
            this._contextMenus.remove(e), t();
          });
        }
        removeAll() {
          return new Promise((e) => {
            this._contextMenus.removeAll(e);
          });
        }
      }
      const { isPdfPage: Be } = Q,
        Fe = /^(http[s]?|ftp):\/\/.+/,
        qe = (e) => !(!e || "string" != typeof e) && Fe.test(e),
        Xe = (e) => e && e.then && "function" == typeof e.then;
      class Ve {
        constructor() {
          (this.contains = this.contains.bind(this)),
            (this.request = this.request.bind(this)),
            (this.requestPermissionPerSite = this.requestPermissionPerSite.bind(this));
        }
        contains(e) {
          return new Promise((t, s) => {
            const i = ge.permissions.contains(e, t);
            Xe(i) && i.then(t).catch(s);
          });
        }
        request(e) {
          return new Promise((t, s) => {
            const i = ge.permissions.request(e, t);
            Xe(i) && i.then(t).catch(s);
          });
        }
        async requestPermissionPerSite(e, t) {
          return new Promise((s, i) => {
            let a = t.url;
            qe(a) || (qe(e.frameUrl) && (a = e.frameUrl));
            const n = { permissions: ["cookies"], origins: [a, "*://*.evernote.com/*"] };
            return ge.permissions.contains(n, (o) =>
              o
                ? s({ info: e, tab: t })
                : ge.permissions.request(n, (n) => {
                    if (n) return s({ info: e, tab: t });
                    const o = a.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, (e) => {
                      try {
                        const t = new URL(e);
                        return t.origin ? t.origin : "Domain URL";
                      } catch (e) {
                        return "Domain URL";
                      }
                    });
                    return i(new Error(`User has not granted necessary permissions for origin: ${o}`));
                  })
            );
          });
        }
      }
      class We {
        executeScript(e) {
          ge.scripting.executeScript(e);
        }
      }
      const je = new (class {
        constructor() {
          (this.browserAction = new Ue()),
            (this.i18n = new Re()),
            (this.runtime = new Le()),
            (this.tabs = new _e()),
            (this.windows = new we()),
            (this.cookies = new (class {
              constructor() {
                this._handleCookieResponse = this._handleCookieResponse.bind(this);
              }
              get(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return new Promise(async (s) => {
                  const i = t ? { name: e, url: t } : { name: e };
                  let a = null;
                  t && (a = await this.getSingleCookie(i)), a || (a = await this.find(i)), s(a);
                });
              }
              getSingleCookie(e) {
                return new Promise((t) => {
                  ge.cookies.get(e, (e) => {
                    if (ge.runtime.lastError) {
                      const { message: e } = ge.runtime.lastError;
                      return p.warn(e || "Error trying to get single cookie"), void t(null);
                    }
                    t(e);
                  });
                });
              }
              find(e) {
                return new Promise((t) => {
                  ge.cookies.getAll(e, (s) => {
                    const i = s.find((t) => t.name === e.name);
                    t(i || null);
                  });
                });
              }
              set(e, t, s, i, a, n) {
                return new Promise((o) =>
                  ge.cookies.set(
                    { name: e, expirationDate: s, path: i, domain: a, secure: Boolean(n), value: t },
                    this._handleCookieResponse(o, `Cookie '${e}' could not be set`)
                  )
                );
              }
              delete(e, t) {
                return new Promise(async (s) => {
                  const i = `Cookie '${e}' could not be deleted`,
                    a = await this.get(e, t);
                  if (!a) return p.warn(i), void s(null);
                  const n = this._removeStartingDot(t || this._buildUrl(a.domain, a.path, a.secure));
                  ge.cookies.remove({ name: e, url: n }, this._handleCookieResponse(s, i));
                });
              }
              _buildUrl(e, t, s) {
                return `${s ? "https" : "http"}://${this._removeStartingDot(e)}${this._removeStartingDot(t || "")}`;
              }
              _removeStartingDot(e) {
                return e.replace(/^\.*/, "");
              }
              _handleCookieResponse(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return (s) => {
                  if (null === s) {
                    let s = t;
                    return (
                      ge.runtime.lastError && ge.runtime.lastError.message && (s = ge.runtime.lastError.message), p.warn(s), void e(null)
                    );
                  }
                  e(s);
                };
              }
            })()),
            (this.contextMenus = new Ge()),
            (this.notifications = new (class {
              create(e, t) {
                return new Promise((s) => {
                  ge.notifications.create(e, t, s);
                });
              }
              clear(e) {
                return new Promise((t) => {
                  ge.notifications.clear(e, t);
                });
              }
              getAll() {
                return new Promise((e) => {
                  ge.notifications.getAll(e);
                });
              }
            })()),
            (this.permissions = new Ve()),
            (this.menus = this.contextMenus),
            (this.storage = new (class {
              set(e, t) {
                return new Promise((s) => {
                  if (De) localStorage.setItem(e, t), s();
                  else {
                    const i = ((e) => {
                      return Array.isArray(e) || ((t = e), "[object Object]" === Object.prototype.toString.call(t)) ? JSON.stringify(e) : e;
                      var t;
                    })(t);
                    ge.storage.local.set({ [e]: i }, s);
                  }
                });
              }
              get(e) {
                return new Promise((t) => {
                  if (De) {
                    const s = localStorage.getItem(e);
                    t(s);
                  } else
                    ge.storage.local.get(e, (s) => {
                      t(s[e]);
                    });
                });
              }
              setAnyLoggedInAccount(e) {
                return De ? Promise.resolve() : this.set(Pe, Boolean(e));
              }
              hasAnyLoggedInAccount() {
                return De ? Promise.resolve() : this.get(Pe);
              }
            })()),
            (this.scripting = new We());
        }
        get hasRuntimeApiAvailable() {
          return Boolean(ge && ge.runtime);
        }
        get hasCookiesApiAvailable() {
          return Boolean(ge && ge.cookies);
        }
        get hasNotificationsApiAvailable() {
          return Boolean(ge && ge.notifications);
        }
        get hasRuntimeGetUrlAvailable() {
          return Boolean(ge && ge.runtime && ge.runtime.getURL && "function" == typeof ge.runtime.getURL);
        }
      })();
      var He = s(50026);
      function Ye(e, t) {
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
      const Ke = "EDAM",
        ze = "UNK",
        Ze = "NET";
      class $e extends Error {
        constructor(e) {
          let { code: t, message: s, instance: i, type: a, stack: n, opts: o, errorCode: r } = e;
          super(s),
            (this.channelId = ve),
            (this.type = a || ze),
            (this.code = t || "UNK"),
            n && (this.stack = n),
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
            return new $e(
              (function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var i = null != arguments[s] ? arguments[s] : {};
                  s % 2
                    ? Ye(Object(i), !0).forEach(function (s) {
                        t(e, s, i[s]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                    : Ye(Object(i)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                      });
                }
                return e;
              })({ message: JSON.stringify(e) }, s)
            );
          if (e instanceof $e) return e;
          if (e.channelId === ve) return new $e(e);
          if (
            Object.keys(He.Errors)
              .filter((e) => "function" == typeof He.Errors[e])
              .find((t) => e instanceof He.Errors[t])
          )
            return $e.fromEDAM(e);
          if (e instanceof Error || (e.message && e.stack)) return $e.fromGeneric(e, s);
          const i = e.type || s.type,
            a = e.errorCode || e.code || s.code;
          return new $e({ code: a, type: i, message: e.message || (i && a ? "" : JSON.stringify(e)) });
        }
        static fromGeneric(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return ("undefined" != typeof ProgressEvent && e instanceof ProgressEvent) || (e.cause && "NetworkException" === e.cause.name)
            ? new $e({ code: t.code || "OFFLINE", type: Ze, message: e.message, stack: e.stack })
            : new $e({ code: e.errorCode || e.code || t.code, type: t.type, message: e.message, stack: e.stack });
        }
        static fromEDAM(e) {
          let t = ((s = He.Errors.EDAMErrorCode), (i = e.errorCode), Object.keys(s).find((e) => s[e] === i));
          var s, i;
          return (
            e instanceof He.Errors.EDAMNotFoundException && (t = "NOT_FOUND"),
            new $e({
              code: t,
              message: e.parameter || e.identifier || e.message,
              instance: e.constructor.name || "UnknownEDAMException",
              type: Ke,
              opts: { rate: e.rateLimitDuration },
              errorCode: e.errorCode
            })
          );
        }
      }
      function Je(e, t) {
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
      function Qe(e) {
        for (var s = 1; s < arguments.length; s++) {
          var i = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? Je(Object(i), !0).forEach(function (s) {
                t(e, s, i[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Je(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      const et = 36e5,
        tt = "dispatchRequest",
        st = "dispatchResponse",
        it = "dispatchBroadcast",
        at = "from-env",
        nt = "to-env",
        ot = "t-name",
        rt = "messageID",
        pt = "name",
        ut = "payload",
        dt = "error",
        yt = {
          EXTENSION: "extension",
          CONTENT: "content",
          CONTENT_FRAME: "content_script_frame",
          POPOVER: "popover",
          IFRAME: "iframe",
          BACKGROUND_OPTIONS: "background_options"
        };
      let ct = null;
      class lt {
        static setupSharedInstance(e) {
          if (ct) throw new Error("Shared channel instance is already configured");
          ct = new lt(e);
        }
        static get sharedInstance() {
          return ct;
        }
        static overrideSharedInstance(e) {
          if ("production".startsWith("production")) throw new Error("Unable to override Channel.sharedInstance for production");
          ct = e;
        }
        static get Environment() {
          return yt;
        }
        get environment() {
          return this._environment;
        }
        constructor(e) {
          if (!Object.keys(yt).some((t) => yt[t] === e)) throw new Error(`Unexpected environment "${e}"`);
          (this._environment = e),
            (this._guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
              .replace(/x/g, () => ((16 * Math.random()) | 0).toString(16))
              .replace(/y/g, () => (8 + ((4 * Math.random()) | 0)).toString(16))),
            (this._uniqueMessageID = 1),
            (this._pendingMessages = {}),
            (this._listener = null),
            (this._frames = {}),
            (this._registeredHandlers = {}),
            (this._eventDispatcher = new a()),
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
            [yt.CONTENT, yt.CONTENT_FRAME, yt.POPOVER, yt.IFRAME, yt.EXTENSION, yt.BACKGROUND_OPTIONS],
            yt.EXTENSION
          );
          const { promise: s, message: i } = this._createMessagePromise(yt.EXTENSION, e, t);
          if (!this._sendMessageToExtension(i)) {
            if (!je.hasRuntimeApiAvailable) return Promise.reject();
            this._handleResponsePromise(i[rt], null, "Message could not be sent"),
              this.environment === yt.IFRAME && self.postMessage("BG_DEAD", "*");
          }
          return s;
        }
        sendToActiveTab(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this._throwIfNotSupportedPath([yt.EXTENSION], yt.CONTENT);
          const { promise: s, message: i } = this._createMessagePromise(yt.CONTENT, e, t);
          return this.getActiveTab().then((e) => {
            if (!e) throw new Error("Could not find active tab");
            return this._sendMessageToTab(e, i) || this._handleResponsePromise(i[rt], null, "Message could not be sent"), s;
          });
        }
        sendToTab(e, t) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this._throwIfNotSupportedPath([yt.EXTENSION], yt.CONTENT);
          const { promise: i, message: a } = this._createMessagePromise(yt.CONTENT, t, s);
          return this._sendMessageToTab(e, a) || this._handleResponsePromise(a[rt], null, "Message could not be sent"), i;
        }
        sendToUIframe(e, t) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this._throwIfNotSupportedPath([yt.EXTENSION], yt.IFRAME);
          const { promise: a, message: n } = this._createMessagePromise(yt.IFRAME, t, s);
          return this._sendMessageToTab(e, n, i) || this._handleResponsePromise(n[rt], null, "Message could not be sent"), a;
        }
        sendToContentFrame(e, t) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this._throwIfNotSupportedPath([yt.EXTENSION], yt.CONTENT_FRAME);
          const { promise: a, message: n } = this._createMessagePromise(yt.CONTENT_FRAME, t, s);
          return this._sendMessageToTab(e, n, i) || this._handleResponsePromise(n[rt], null, "Message could not be sent"), a;
        }
        sendToCustomEnvironment(e, t, s) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          const { promise: a, message: n } = this._createMessagePromise(s, t, i);
          return this._sendMessageToTab(e, n) || this._handleResponsePromise(n[rt], null, "Message could not be sent"), a;
        }
        sendToPopover(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this._throwIfNotSupportedPath([yt.EXTENSION], yt.POPOVER);
          const { promise: s, message: i } = this._createMessagePromise(yt.POPOVER, e, t);
          return this._sendMessageToPopover(i) || this._handleResponsePromise(i[rt], null, "Message could not be sent"), s;
        }
        getActiveTab() {
          return je.tabs.query({ active: !0, currentWindow: !0 }).then((e) => {
            const t = e[0];
            return De || (t && t.active) ? t : je.tabs.query({}).then((e) => e.find((e) => e.active));
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
          if (-1 === [yt.EXTENSION].indexOf(this._environment)) throw new Error(`Broadcast cannot be sent from ${this._environment}`);
          this._broadcastEvent(this._createBroadcastMessage(e, t));
        }
        broadcastEventInTab(e, t) {
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          if (-1 === [yt.EXTENSION].indexOf(this._environment)) throw new Error(`Broadcast cannot be sent from ${this._environment}`);
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
          if (De) return je.runtime.sendMessage(...arguments);
          let e = 0;
          const t = function () {
            for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
            return new Promise((s, a) => {
              je.runtime
                .sendMessage(...i)
                .then(s)
                .catch((n) => {
                  ++e,
                    e <= 3
                      ? setTimeout(() => {
                          t(...i)
                            .then(s)
                            .catch(a);
                        }, 1e3 * e)
                      : a(n);
                });
            });
          };
          return t(...arguments);
        }
        sendMessageTabs() {
          if (De) return je.tabs.sendMessage(...arguments);
          let e = 0;
          const t = function () {
            for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
            return new Promise((s, a) => {
              je.tabs
                .sendMessage(...i)
                .then(s)
                .catch((n) => {
                  ++e,
                    e <= 3
                      ? setTimeout(() => {
                          t(...i)
                            .then(s)
                            .catch(a);
                        }, 1e3 * e)
                      : a(n);
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
              !!je.hasRuntimeApiAvailable &&
              ((t = this.sendMessage(e)),
              !De &&
                t &&
                t.catch((t) => {
                  let s = t;
                  const i = e[rt];
                  if (i) {
                    s = this._handleServiceWorkerError(s);
                    const t = e[dt];
                    this._handleResponsePromise(i, null, t || s);
                  }
                }),
              !0)
            );
          } catch (t) {
            return p.error(`Channel: Could not send the message "${e[pt]}", error:`, t), !1;
          }
        }
        _sendMessageToPopover(e) {
          try {
            return je.runtime.sendMessage(e), !0;
          } catch (t) {
            return p.error(`Channel: Could not send the message "${e[pt]}", error:`, t), !1;
          }
        }
        _sendMessageToFrame(e, t, s) {
          try {
            const i = s,
              a = i[dt];
            let n;
            return (
              a && a instanceof $e && (i[dt] = a.toJSON()),
              (n = null !== t || void 0 !== t ? this.sendMessageTabs(e.id, i, { frameId: t }) : this.sendMessageTabs(e.id, i)),
              !De &&
                n &&
                n.catch((e) => {
                  let t = e;
                  const i = s[rt];
                  if (i) {
                    t = this._handleServiceWorkerError(t);
                    const e = s[dt];
                    this._handleResponsePromise(i, null, e || t);
                  }
                }),
              !0
            );
          } catch (e) {
            return p.error(`Channel: Could not send the message "${s[pt]}", error:`, e), !1;
          }
        }
        _sendMessageToTab(e, t, s) {
          return this._sendMessageToFrame(e, s, t);
        }
        _extensionLoopAllTabs(e) {
          je.tabs.query({}).then((t) => {
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
            a = this._createRequestMessage(e, i, t, s);
          return {
            promise: new Promise((e, a) => {
              (this._pendingMessages[i] = { message: t, command: s ? s.command : null, date: new Date(), resolve: e, reject: a }),
                this._updateTimeOutCheck();
            }),
            message: a
          };
        }
        _removeTimedOutMessages() {
          const e = new Date();
          Object.keys(this._pendingMessages).forEach((t) => {
            const { message: s, date: i, reject: a } = this._pendingMessages[t];
            e - i > et &&
              (p.warn(`Removing timed out message: '${s}', ID: ${t}`),
              delete this._pendingMessages[t],
              a(new Error("Message did timeout")));
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
            et - (e - s)
          );
        }
        _createRequestMessage(e, t, s, i) {
          const a = { [at]: this._environment, [nt]: e, [ot]: tt, [rt]: `${this._guid}/${t}`, [pt]: s };
          return void 0 !== i && (a[ut] = i), a;
        }
        _createResponseMessage(e, t, s, i, a) {
          const n = { [at]: this._environment, [nt]: e, [ot]: st, [rt]: t, [pt]: s };
          return void 0 !== i && (n[ut] = i), void 0 !== a && (n[dt] = a instanceof $e ? a.toJSON() : a), n;
        }
        _createBroadcastMessage(e, t) {
          const s = { [at]: this._environment, [ot]: it, [pt]: e };
          return void 0 !== t && (s[ut] = t), s;
        }
        _registerListener() {
          (this._listener = (e, t, s) => {
            s({}), this._handleMessage(t.tab, t.frameId, e);
          }),
            je.runtime.onMessage.addListener(this._listener);
        }
        _handleMessage(e, t, s) {
          switch (s[ot]) {
            case tt:
              this._handleDispatchRequest(e, t, s);
              break;
            case st:
              this._handleDispatchResponse(s);
              break;
            case it:
              this._handleDispatchBroadcast(s);
              break;
            default:
              throw new Error(`Unknown transport command: '${s[ot]}'`);
          }
        }
        _handleDispatchResponse(e) {
          if (e[nt] !== this._environment) return;
          const t = e[rt];
          if (!t) throw new Error(`Dispatched request has no ID: ${e}`);
          this._handleResponsePromise(t, e[ut], e[dt]);
        }
        _handleResponsePromise(e, t, s) {
          const [i, a] = e.split("/");
          if (i !== this._guid) return;
          const n = this._pendingMessages[a];
          if (n) {
            if ((delete this._pendingMessages[a], this._updateTimeOutCheck(), s)) {
              const e = $e.fromAny(s);
              return p.error("Channel: Error in handleResponse", e.shortData, n.name || n.message, n.command), void n.reject(e);
            }
            n.resolve(t);
          } else p.warn(`Can't find request for message ID: ${a}. Timeout?`);
        }
        _handleDispatchRequest(e, t, s) {
          if (s[nt] !== this._environment) return;
          const i = s[at],
            a = (a, n) => {
              const o = this._createResponseMessage(i, s[rt], s[pt], a, n);
              switch (i) {
                case yt.BACKGROUND_OPTIONS:
                case yt.EXTENSION:
                  this._sendMessageToExtension(o);
                  break;
                case yt.CONTENT:
                  this._sendMessageToTab(e, o, t);
                  break;
                case yt.POPOVER:
                  this._sendMessageToPopover(o);
                  break;
                case yt.IFRAME:
                case yt.CONTENT_FRAME:
                  this._sendMessageToFrame(e, t, o);
                  break;
                default:
                  throw new Error(`Unexpected response environment: ${i}`);
              }
            },
            n = this._registeredHandlers[s[pt]];
          if (!n) {
            const e = `Handler is not yet registered for message: ${s[pt]}`;
            return p.error("Channel:", e), void a(void 0, e);
          }
          let o = s[ut];
          "object" != typeof o || Array.isArray(o) || (o = Qe(Qe({}, o), {}, { isFrame: 0 !== t, frameId: t })),
            Promise.resolve(n(o, e, t))
              .then((e) => {
                a(e);
              })
              .catch((e) => {
                const t = e || new $e();
                p.error(
                  `Channel: Message '${s[pt]}${s[ut] && s[ut].command ? `.${s[ut].command}` : ""}' failed with error:`,
                  t.shortData || t
                ),
                  a(void 0, t);
              });
        }
        _handleDispatchBroadcast(e) {
          this._eventDispatcher.dispatchEvent(e[pt], e[ut] || {});
        }
      }
      lt.setupSharedInstance(lt.Environment.IFRAME);
      const Tt = () => {
        const e = window.location.search.split("?location=")[1];
        lt.sharedInstance.sendToExtension("openUI", { url: e });
      };
      k.DOMLoaded().then(() => {
        document.getElementById("openClipper").onclick = Tt;
      });
    })();
})();
