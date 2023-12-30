/**
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 *
 * @license
 *
 */
!(function () {
  return function n(t, e, r) {
    function i(a, s) {
      if (!e[a]) {
        if (!t[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var u = (e[a] = { exports: {} });
        t[a][0].call(
          u.exports,
          function (n) {
            return i(t[a][1][n] || n);
          },
          u,
          u.exports,
          n,
          t,
          e,
          r
        );
      }
      return e[a].exports;
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i;
  };
})()(
  {
    1: [
      function (n, t, e) {
        "use strict";
        n("core-js/modules/es.object.define-property.js"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        // Copyright (c) 2021 NortonLifeLock Inc. All rights reserved.
        var r = {
          DEFAULT_APPID_NODE: "/32",
          get DEFAULT_APPID_IDSC_NODE() {
            return "".concat(this.DEFAULT_APPID_NODE, "/IDSC");
          },
          get DEFAULT_LOGIN_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/1");
          },
          get DEFAULT_IDENTITY_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/2");
          },
          get DEFAULT_ADDRESS_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/3");
          },
          get DEFAULT_CREDIT_CARD_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/4");
          },
          get DEFAULT_NOTE_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/6");
          },
          get DEFAULT_BANK_ACCOUNT_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/13");
          },
          get DEFAULT_ASSOCIATED_URL_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/16");
          },
          get DEFAULT_LOGIN_HISTORY_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/17");
          },
          get DEFAULT_AUTHENTICATOR_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/18");
          },
          get DEFAULT_FILE_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/19");
          },
          get DEFAULT_DELETED_UNKNOWN_BREACH_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/20");
          },
          get DEFAULT_PASSWORD_BREACHES_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/21");
          },
          get DEFAULT_LOGIN_IGNORED_BREACHES_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/22");
          },
          get DEFAULT_TAG_NODE() {
            return "".concat(this.DEFAULT_APPID_IDSC_NODE, "/15");
          },
          DEFAULT_IDSC_PATH_CRC: "/SPS/User",
          SERIALIZE_DATA_TYPE: { BINARY: 0, BOOL: 1, UINT32: 2, STRING: 3, LONG: 4 },
          BANK_ACCOUNTS: {
            OWNERNAME: "100",
            ROUTINGNUMBER: "101",
            ACCOUNTNUMBER: "102",
            ACCOUNTNAME: "2000",
            SECURE: "2001",
            BANKNAME: "2002"
          },
          IDENTITY: {
            FIRSTNAME: "100",
            MIDDLENAME: "101",
            LASTNAME: "102",
            LASTNAME2: "103",
            FIRSTNAME_ALPHABET: "104",
            LASTNAME_ALPHABET: "105",
            FIRSTNAME_ROMAN: "106",
            LASTNAME_ROMAN: "107",
            DOB_DAY: "108",
            DOB_MONTH: "109",
            DOB_YEAR: "110",
            EMAIL: "111",
            PHONE_WORK: "112",
            PHONE_HOME: "113",
            PHONE_MOBILE: "114",
            SALUTATION: "118",
            PHONE_EXTENSION: "120",
            CARDNAME: "2000",
            SECURE: "2001",
            GENDER: "2002",
            CREDITCARD_GUID: "4000",
            ADDRESS_GUID: "4001",
            COUNTRY_REGION: "4002"
          },
          CREDIT_CARDS: {
            CARD_TYPE: "100",
            CARD_NUMBER: "101",
            NAME_ON_CARD: "102",
            CVC: "103",
            EXPIRATION_MONTH: "104",
            EXPIRATION_YEAR: "105",
            START_DAY: "106",
            START_MONTH: "107",
            START_YEAR: "108",
            ISSUE_NUMBER: "109",
            SECURE: "2000",
            CARD_NAME: "2001",
            COUNTRY_REGION: "4000",
            IDENTITY_CARD: "4001",
            CARD_COMMENTS: "110",
            BANK_NAME: "5029",
            CARD_PIN: "5030",
            CREATED_AT: "5005",
            LAST_USED_AT: "5006"
          }
        };
        (r.CREDIT_CARDS.DEFAULT_SORT_KEY = r.CREDIT_CARDS.CARD_NAME),
          (r.ASSOCIATED_URL = {
            ASSOCIATED_LOGIN_ID: "5016",
            ASSOCIATED_DOMAIN: "5018",
            LOGIN_URL: "5019",
            CREATED_AT: "5005",
            VISIBLE: "5020",
            LAST_USED_AT: "5006"
          }),
          (r.LOGIN_HISTORY = { ASSOCIATED_LOGIN_ID: "5016", EMAIL: "5001", USERNAME: "100", PASSWORD: "101", CREATED_AT: "5005" }),
          (r.AUTHENTICATOR = { SERVICE: "5021", USERNAME: "100", KEY: "5022", CREATED_AT: "5005", LAST_USED_AT: "5006" }),
          (r.FILE = {
            NAME: "5023",
            TYPE: "5024",
            ASSOCIATED_ENTITY_ID: "5016",
            ENTITY_TYPE: "5025",
            CREATED_AT: "5005",
            LAST_USED_AT: "5006"
          }),
          (r.DELETED_UNKNOWN_BREACH = { BREACH_KEY: "5026", CREATED_AT: "5005", LAST_USED_AT: "5006" }),
          (r.PASSWORD_BREACHES = {
            PASSWORD: "101",
            TYPE: "5024",
            DOMAIN: "5000",
            BREACH_ID: "5027",
            DATE: "5028",
            CREATED_AT: "5005",
            LAST_USED_AT: "5006"
          }),
          (r.LOGIN_IGNORED_BREACHES = {
            ASSOCIATED_LOGIN_ID: "5016",
            BREACH_ID: "5027",
            BREACH_IGNORE_TYPE: "5017",
            CREATED_AT: "5005",
            LAST_USED_AT: "5006"
          }),
          (r.DEFAULT_NODE_ID = "0"),
          (r.DEFAULT_LASTUPDATE = "1"),
          (r.DEFAULT_FAVORITE = "3"),
          (r.DEFAULT_DERIVED_AES_KEY_SIZE = 32),
          (r.STARTING_CHECKSUM = 1130461520),
          (r.DEFAULT_CHALLENGE_SALT_SIZE = 256),
          (r.DEFAULT_AES_INIT_VECTOR_SIZE = 16),
          (r.DEFAULT_SHA_DIGEST = 32),
          (r.DEFAULT_HMAC_SIZE = 23),
          (r.DEFAULT_SHA1_DIGEST = 20),
          (r.DEFAULT_HMAC_SHA_ALGORITHM = "sha256"),
          (r.APPID_11 = "/11"),
          (r.APPID_32 = "/32"),
          (r.DEFAULT_SHA1 = "sha1"),
          (r.DEFAULT_OBFUSCATION_KEY_SIZE = 128),
          (r.ITEM_INTERNAL_CONTEXT = "internal"),
          (r.GET_DERIVED_KEY = "985fe59f-a8ba-459d-a01b-c9c1889338cc"),
          (r.LOCAL_VERIFY_VAULT_PASSWORD_ITERATION_COUNT = 5e3),
          (r.DEFAULT_CHALLENGE_ITERATION_COUNT = 2e4),
          (r.DEFAULT_VAULT_PBDK_SALT = "{E2DDC45B-1125-498d-9D8A-A16EF91E6BA2}"),
          (r.DEFAULT_CRC_SIZE = 4),
          (r.DEFAULT_PROFILE_ID = "0"),
          (r.DEFAULT_LOGIN_ID = "1"),
          (r.DEFAULT_VAULT_VERSION = "Version"),
          (r.DEFAULT_CHALLENGE_IV = "challengeIV"),
          (r.DEFAULT_PASSWORD_HINT = "{8CFB92F1-A13C-41b6-95D3-8C08390160C9}"),
          (r.DEFAULT_CRYPTO_ALGORITHM = "{791EB356-C2C2-4668-8A71-7F2F01F3CF6D}"),
          (r.DEFAULT_PBKDF2_MD = "sha256"),
          (r.PBKDF2 = "pbkdf2"),
          (r.DEFAULT_CHALLENGE_SALT = "challengeSalt"),
          (r.GET_DERIVED_KEY_RESPONSE = "2d4e43f1-40a2-4387-8806-03ccaf277fc4"),
          (r.DEFAULT_VAULT_ENCRYPTION_KEY = "{204DC88E-7D86-4565-AE26-889634D5DC34}"),
          (r.DEFAULT_VAULT_OBFUSCATION_KEY = "{D835F5EF-C3E4-4e46-90D2-32BF15B925F0}"),
          (r.DEFAULT_USERNAME = "100"),
          (r.DEFAULT_PASSWORD = "101"),
          (r.DEFAULT_LOGIN_NOTES = "102"),
          (r.DEFAULT_LOGIN_URL = "2000"),
          (r.DEFAULT_DOMAIN = "5000"),
          (r.DEFAULT_LEGACY_EMAIL = "5001"),
          (r.DEFAULT_FORM_HOST = "5002"),
          (r.DEFAULT_PAGE_HOST = "5003"),
          (r.DEFAULT_PROTOCOL = "5004"),
          (r.DEFAULT_CREATED_AT = "5005"),
          (r.DEFAULT_LAST_USED_AT = "5006"),
          (r.DEFAULT_PWD_AUTO_GENERATED = "5007"),
          (r.DEFAULT_IS_DEMO_ACCOUNT = "5008"),
          (r.DEFAULT_IGNORE_AUC = "5009"),
          (r.DEFAULT_IGNORE_HIBP_BREACHED_PWD = "5010"),
          (r.DEFAULT_IGNORE_INSECURE_PROTOCOL = "5011"),
          (r.DEFAULT_IGNORE_PWD_STRENGTH = "5012"),
          (r.DEFAULT_IGNORE_REUSED = "5013"),
          (r.DEFAULT_ASSOCIATED_AUTH_ID = "5014"),
          (r.DEFAULT_PASSWORD_TIMESTAMP = "5015"),
          (r.DEFAULT_SECURE = "2001"),
          (r.DEFAULT_FAV_ICON_URL = "2002"),
          (r.DEFAULT_SITE_NAME = "2003"),
          (r.DEFAULT_SIGN_ON_DESTINATION = "2004"),
          (r.DEFAULT_CRED_0 = "3000"),
          (r.DEFAULT_CRED_1 = "3001"),
          (r.DEFAULT_CRED_2 = "3002"),
          (r.DEFAULT_FOLDER = "4000"),
          (r.DEFAULT_AUTO_FILL = "4001"),
          (r.DEFAULT_AUTO_SUBMIT = "4002"),
          (r.DEFAULT_PROMINENT_COLOR = "4003"),
          (r.DEFAULT_TAG_NAME = "2000"),
          (r.DEFAULT_TAG_ID = "2"),
          (r.DEFAULT_TAG_ITEM = "2"),
          (r.ITEM_INTERNAL_CONTEXT = "internal"),
          (r.NOTE = {
            TITLE: "100",
            INFORMATION: "101",
            SECURE: "2000",
            TITLE_PROPERTY_NAME: "title",
            INFORMATION_PROPERTY_NAME: "information",
            COLOR: "5031",
            CREATED_AT: "5005",
            LAST_USED_AT: "5006"
          }),
          (r.TAG_NODE = { LOGIN: "1", IDENTITY: "2", ADDRESS: "3", CREDIT_CARD: "4", BANK_ACCOUNT: "13", NOTE: "6" }),
          (r.TAG = {
            LOGIN: "login",
            IDENTITY: "identity",
            ADDRESS: "address",
            CREDIT_CARD: "creditCard",
            BANK_ACCOUNT: "bankAccount",
            NOTE: "note"
          }),
          (r.LOGIN_TYPE_SPOC = "SPOC"),
          (r.LOGIN_TYPE_LOCAL = "LOCAL"),
          (r.NORTON_IDENTITY_SAFE = "Norton Identity Safe"),
          (r.DEFAULT_AES_INIT_VECTORY_SIZE = 16),
          (r.DEFAULT_VAULT_SCHEMA_ITERATION_COUNT = 1e5),
          (r.CURRENT_VAULT_SDK_VERSION = 327680),
          (r.ADDRESS = {
            ADDR_CITY: "100",
            ADDR_POSTAL: "101",
            ADDR_STATE: "102",
            ADDR_STREET: "103",
            ADDR_STREET2: "104",
            ADDR_STREET3: "105",
            APTSTREETHOUSENUM: "106",
            ADDR_CITY_ALPHABET: "107",
            ADDR_STREET_ALPHABET: "108",
            ADDR_STREET2_ALPHABET: "109",
            ADDRESSNAME: "2000",
            SECURE: "2001",
            COUNTRY_REGION: "4000"
          }),
          (r.EVENTS = { VAULT_SYNC: "AF7B63E0-F40E-4B5A-B59B-2B2B5CC371DB" }),
          (r.vaultManager = {
            state: {
              LOAD_FROM_CLOUD: 1,
              LOADED: 2,
              INTERNAL_ERROR: 3,
              NETWORK_ERROR: 4,
              HANDLING_CHALLENGE: 5,
              CLIENT_UNAUTHORIZED: 6,
              READING_NODES: 7,
              DECRYPTING_NODES: 8,
              VAULT_SYNCED: 9,
              GETTING_LOCAL_CHANGES: 10,
              ENCRYPTING_NODES: 11,
              UPLOADING_TO_CLOUD: 12,
              MERGE_NODES: 13,
              NOT_LOGGED_IN: 14,
              VAULT_LOCKED: 15,
              VAULT_FOUND: 16,
              VAULT_NOT_FOUND: 17,
              SSO_UNAUTHORIZED: 18,
              VAULT_CREATED: 19,
              O2_RATE_LIMITED_ERROR: 20,
              VAULT_DELETED: 21,
              VAULT_PASSWORD_CHANGED: 22
            },
            stateInfo: {
              UNAUTHORIZED: "User is unauthorized",
              NETWORK_ERROR: "Server returned an error",
              READING_NODES: "Reading your vault",
              DECRYPTING_NODES: "Decrypting your vault",
              VAULT_SYNCED: "Successfully synced your vault",
              VAULT_SYNCED_DECRYPTED: "Successfully synced and decrypted your vault",
              LOAD_FROM_CLOUD: "Downloading your vault",
              VAULT_CREATED: "Vault created successfully",
              VAULT_DELETED: "Vault deleted successfully",
              VAULT_CLOSED: "Vault closed successfully",
              VAULT_PASSWORD_CHANGED: "Vault password changed successfully",
              VAULT_CLOSE_FAILED: "Unable to close the vault",
              HANDLE_CHALLENGE_FAILED: "Unable to handle challenge",
              VAULT_NOT_FOUND: "Vault does not exist for this user",
              VAULT_FOUND: "Vault exists for this user",
              LOADED: "Successfully downloaded your vault",
              GENERATE_DECRYPT_KEY_ERROR: "Unable to generate decryption key",
              DECRYPT_VAULT_KEY_ERROR: "Unable to decrypt the vault key. Very likely that vault has been corrupted",
              DECRYPT_OBFUSCATION_KEY_ERROR: "Unable to decrypt the obfuscation key. Very likely that vault has been corrupted",
              SSO_UNAUTHORIZED: "Unable to setup an sso connection",
              O2_RATE_LIMITED_ERROR: "Too many failure attempts to answer the challenge",
              VAULT_LOCKED_CANNOT_SYNC: "Vault is locked and cannot be synced"
            }
          }),
          (r.performanceReporter = {
            COMPONENT: { VAULTSDK: "VaultSDK" },
            TYPE: { FORCE_SYNC_VAULT: "forceSyncVault", OPEN_VAULT: "openVault" }
          }),
          (r.HTTP_PROTOCOL = "http"),
          (r.HTTPS_PROTOCOL = "https");
        var i = r;
        e.default = i;
      },
      { "core-js/modules/es.object.define-property.js": 70 }
    ],
    2: [
      function (n, t, e) {
        (function (t) {
          (function () {
            "use strict";
            var e,
              r = (e = n("./VTConstants")) && e.__esModule ? e : { default: e };
            // Copyright (c) 2021 NortonLifeLock Inc. All rights reserved.
            (self.window = self),
              importScripts(t),
              window.addEventListener("message", function (n) {
                if (n && n.data && n.data.hasOwnProperty("id")) {
                  if (n.data.id === r.default.GET_DERIVED_KEY) {
                    var t = {};
                    (t.id = r.default.GET_DERIVED_KEY_RESPONSE),
                      (t.derivedKey = forge.pkcs5.pbkdf2(
                        n.data.byteArray,
                        n.data.salt,
                        n.data.iterationCount,
                        n.data.keyLength,
                        n.data.md
                      )),
                      window.postMessage(t);
                  }
                } else window.postMessage(null);
              });
          }).call(this);
        }).call(this, "/nlok/forge.min.js");
      },
      { "./VTConstants": 1 }
    ],
    3: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/try-to-string"),
          o = TypeError;
        t.exports = function (n) {
          if (r(n)) return n;
          throw o(i(n) + " is not a function");
        };
      },
      { "../internals/is-callable": 34, "../internals/try-to-string": 64 }
    ],
    4: [
      function (n, t, e) {
        var r = n("../internals/is-object"),
          i = String,
          o = TypeError;
        t.exports = function (n) {
          if (r(n)) return n;
          throw o(i(n) + " is not an object");
        };
      },
      { "../internals/is-object": 37 }
    ],
    5: [
      function (n, t, e) {
        var r = n("../internals/to-indexed-object"),
          i = n("../internals/to-absolute-index"),
          o = n("../internals/length-of-array-like"),
          a = function (n) {
            return function (t, e, a) {
              var s,
                l = r(t),
                c = o(l),
                u = i(a, c);
              if (n && e != e) {
                for (; c > u; ) if ((s = l[u++]) != s) return !0;
              } else for (; c > u; u++) if ((n || u in l) && l[u] === e) return n || u || 0;
              return !n && -1;
            };
          };
        t.exports = { includes: a(!0), indexOf: a(!1) };
      },
      { "../internals/length-of-array-like": 40, "../internals/to-absolute-index": 57, "../internals/to-indexed-object": 58 }
    ],
    6: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this-raw"),
          i = r({}.toString),
          o = r("".slice);
        t.exports = function (n) {
          return o(i(n), 8, -1);
        };
      },
      { "../internals/function-uncurry-this-raw": 23 }
    ],
    7: [
      function (n, t, e) {
        var r = n("../internals/has-own-property"),
          i = n("../internals/own-keys"),
          o = n("../internals/object-get-own-property-descriptor"),
          a = n("../internals/object-define-property");
        t.exports = function (n, t, e) {
          for (var s = i(t), l = a.f, c = o.f, u = 0; u < s.length; u++) {
            var E = s[u];
            r(n, E) || (e && r(e, E)) || l(n, E, c(t, E));
          }
        };
      },
      {
        "../internals/has-own-property": 28,
        "../internals/object-define-property": 43,
        "../internals/object-get-own-property-descriptor": 44,
        "../internals/own-keys": 51
      }
    ],
    8: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/object-define-property"),
          o = n("../internals/create-property-descriptor");
        t.exports = r
          ? function (n, t, e) {
              return i.f(n, t, o(1, e));
            }
          : function (n, t, e) {
              return (n[t] = e), n;
            };
      },
      { "../internals/create-property-descriptor": 9, "../internals/descriptors": 12, "../internals/object-define-property": 43 }
    ],
    9: [
      function (n, t, e) {
        t.exports = function (n, t) {
          return { enumerable: !(1 & n), configurable: !(2 & n), writable: !(4 & n), value: t };
        };
      },
      {}
    ],
    10: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/object-define-property"),
          o = n("../internals/make-built-in"),
          a = n("../internals/define-global-property");
        t.exports = function (n, t, e, s) {
          s || (s = {});
          var l = s.enumerable,
            c = void 0 !== s.name ? s.name : t;
          if ((r(e) && o(e, c, s), s.global)) l ? (n[t] = e) : a(t, e);
          else {
            try {
              s.unsafe ? n[t] && (l = !0) : delete n[t];
            } catch (n) {}
            l ? (n[t] = e) : i.f(n, t, { value: e, enumerable: !1, configurable: !s.nonConfigurable, writable: !s.nonWritable });
          }
          return n;
        };
      },
      {
        "../internals/define-global-property": 11,
        "../internals/is-callable": 34,
        "../internals/make-built-in": 41,
        "../internals/object-define-property": 43
      }
    ],
    11: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = Object.defineProperty;
        t.exports = function (n, t) {
          try {
            i(r, n, { value: t, configurable: !0, writable: !0 });
          } catch (e) {
            r[n] = t;
          }
          return t;
        };
      },
      { "../internals/global": 27 }
    ],
    12: [
      function (n, t, e) {
        var r = n("../internals/fails");
        t.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              }
            })[1]
          );
        });
      },
      { "../internals/fails": 19 }
    ],
    13: [
      function (n, t, e) {
        var r = "object" == typeof document && document.all,
          i = void 0 === r && void 0 !== r;
        t.exports = { all: r, IS_HTMLDDA: i };
      },
      {}
    ],
    14: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-object"),
          o = r.document,
          a = i(o) && i(o.createElement);
        t.exports = function (n) {
          return a ? o.createElement(n) : {};
        };
      },
      { "../internals/global": 27, "../internals/is-object": 37 }
    ],
    15: [
      function (n, t, e) {
        var r = n("../internals/get-built-in");
        t.exports = r("navigator", "userAgent") || "";
      },
      { "../internals/get-built-in": 25 }
    ],
    16: [
      function (n, t, e) {
        var r,
          i,
          o = n("../internals/global"),
          a = n("../internals/engine-user-agent"),
          s = o.process,
          l = o.Deno,
          c = (s && s.versions) || (l && l.version),
          u = c && c.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]),
          (t.exports = i);
      },
      { "../internals/engine-user-agent": 15, "../internals/global": 27 }
    ],
    17: [
      function (n, t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      },
      {}
    ],
    18: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/object-get-own-property-descriptor").f,
          o = n("../internals/create-non-enumerable-property"),
          a = n("../internals/define-built-in"),
          s = n("../internals/define-global-property"),
          l = n("../internals/copy-constructor-properties"),
          c = n("../internals/is-forced");
        t.exports = function (n, t) {
          var e,
            u,
            E,
            _,
            A,
            T = n.target,
            f = n.global,
            D = n.stat;
          if ((e = f ? r : D ? r[T] || s(T, {}) : (r[T] || {}).prototype))
            for (u in t) {
              if (
                ((_ = t[u]),
                (E = n.dontCallGetSet ? (A = i(e, u)) && A.value : e[u]),
                !c(f ? u : T + (D ? "." : "#") + u, n.forced) && void 0 !== E)
              ) {
                if (typeof _ == typeof E) continue;
                l(_, E);
              }
              (n.sham || (E && E.sham)) && o(_, "sham", !0), a(e, u, _, n);
            }
        };
      },
      {
        "../internals/copy-constructor-properties": 7,
        "../internals/create-non-enumerable-property": 8,
        "../internals/define-built-in": 10,
        "../internals/define-global-property": 11,
        "../internals/global": 27,
        "../internals/is-forced": 35,
        "../internals/object-get-own-property-descriptor": 44
      }
    ],
    19: [
      function (n, t, e) {
        t.exports = function (n) {
          try {
            return !!n();
          } catch (n) {
            return !0;
          }
        };
      },
      {}
    ],
    20: [
      function (n, t, e) {
        var r = n("../internals/fails");
        t.exports = !r(function () {
          var n = function () {}.bind();
          return "function" != typeof n || n.hasOwnProperty("prototype");
        });
      },
      { "../internals/fails": 19 }
    ],
    21: [
      function (n, t, e) {
        var r = n("../internals/function-bind-native"),
          i = Function.prototype.call;
        t.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      { "../internals/function-bind-native": 20 }
    ],
    22: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/has-own-property"),
          o = Function.prototype,
          a = r && Object.getOwnPropertyDescriptor,
          s = i(o, "name"),
          l = s && "something" === function () {}.name,
          c = s && (!r || (r && a(o, "name").configurable));
        t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
      },
      { "../internals/descriptors": 12, "../internals/has-own-property": 28 }
    ],
    23: [
      function (n, t, e) {
        var r = n("../internals/function-bind-native"),
          i = Function.prototype,
          o = i.call,
          a = r && i.bind.bind(o, o);
        t.exports = function (n) {
          return r
            ? a(n)
            : function () {
                return o.apply(n, arguments);
              };
        };
      },
      { "../internals/function-bind-native": 20 }
    ],
    24: [
      function (n, t, e) {
        var r = n("../internals/classof-raw"),
          i = n("../internals/function-uncurry-this-raw");
        t.exports = function (n) {
          if ("Function" === r(n)) return i(n);
        };
      },
      { "../internals/classof-raw": 6, "../internals/function-uncurry-this-raw": 23 }
    ],
    25: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-callable");
        t.exports = function (n, t) {
          return arguments.length < 2 ? ((e = r[n]), i(e) ? e : void 0) : r[n] && r[n][t];
          var e;
        };
      },
      { "../internals/global": 27, "../internals/is-callable": 34 }
    ],
    26: [
      function (n, t, e) {
        var r = n("../internals/a-callable"),
          i = n("../internals/is-null-or-undefined");
        t.exports = function (n, t) {
          var e = n[t];
          return i(e) ? void 0 : r(e);
        };
      },
      { "../internals/a-callable": 3, "../internals/is-null-or-undefined": 36 }
    ],
    27: [
      function (n, t, e) {
        (function (n) {
          (function () {
            var e = function (n) {
              return n && n.Math == Math && n;
            };
            t.exports =
              e("object" == typeof globalThis && globalThis) ||
              e("object" == typeof window && window) ||
              e("object" == typeof self && self) ||
              e("object" == typeof n && n) ||
              (function () {
                return this;
              })() ||
              Function("return this")();
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    28: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/to-object"),
          o = r({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (n, t) {
            return o(i(n), t);
          };
      },
      { "../internals/function-uncurry-this": 24, "../internals/to-object": 61 }
    ],
    29: [
      function (n, t, e) {
        t.exports = {};
      },
      {}
    ],
    30: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/fails"),
          o = n("../internals/document-create-element");
        t.exports =
          !r &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "../internals/descriptors": 12, "../internals/document-create-element": 14, "../internals/fails": 19 }
    ],
    31: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/fails"),
          o = n("../internals/classof-raw"),
          a = Object,
          s = r("".split);
        t.exports = i(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (n) {
              return "String" == o(n) ? s(n, "") : a(n);
            }
          : a;
      },
      { "../internals/classof-raw": 6, "../internals/fails": 19, "../internals/function-uncurry-this": 24 }
    ],
    32: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/is-callable"),
          o = n("../internals/shared-store"),
          a = r(Function.toString);
        i(o.inspectSource) ||
          (o.inspectSource = function (n) {
            return a(n);
          }),
          (t.exports = o.inspectSource);
      },
      { "../internals/function-uncurry-this": 24, "../internals/is-callable": 34, "../internals/shared-store": 54 }
    ],
    33: [
      function (n, t, e) {
        var r,
          i,
          o,
          a = n("../internals/weak-map-basic-detection"),
          s = n("../internals/global"),
          l = n("../internals/is-object"),
          c = n("../internals/create-non-enumerable-property"),
          u = n("../internals/has-own-property"),
          E = n("../internals/shared-store"),
          _ = n("../internals/shared-key"),
          A = n("../internals/hidden-keys"),
          T = s.TypeError,
          f = s.WeakMap;
        if (a || E.state) {
          var D = E.state || (E.state = new f());
          (D.get = D.get),
            (D.has = D.has),
            (D.set = D.set),
            (r = function (n, t) {
              if (D.has(n)) throw T("Object already initialized");
              return (t.facade = n), D.set(n, t), t;
            }),
            (i = function (n) {
              return D.get(n) || {};
            }),
            (o = function (n) {
              return D.has(n);
            });
        } else {
          var p = _("state");
          (A[p] = !0),
            (r = function (n, t) {
              if (u(n, p)) throw T("Object already initialized");
              return (t.facade = n), c(n, p, t), t;
            }),
            (i = function (n) {
              return u(n, p) ? n[p] : {};
            }),
            (o = function (n) {
              return u(n, p);
            });
        }
        t.exports = {
          set: r,
          get: i,
          has: o,
          enforce: function (n) {
            return o(n) ? i(n) : r(n, {});
          },
          getterFor: function (n) {
            return function (t) {
              var e;
              if (!l(t) || (e = i(t)).type !== n) throw T("Incompatible receiver, " + n + " required");
              return e;
            };
          }
        };
      },
      {
        "../internals/create-non-enumerable-property": 8,
        "../internals/global": 27,
        "../internals/has-own-property": 28,
        "../internals/hidden-keys": 29,
        "../internals/is-object": 37,
        "../internals/shared-key": 53,
        "../internals/shared-store": 54,
        "../internals/weak-map-basic-detection": 68
      }
    ],
    34: [
      function (n, t, e) {
        var r = n("../internals/document-all"),
          i = r.all;
        t.exports = r.IS_HTMLDDA
          ? function (n) {
              return "function" == typeof n || n === i;
            }
          : function (n) {
              return "function" == typeof n;
            };
      },
      { "../internals/document-all": 13 }
    ],
    35: [
      function (n, t, e) {
        var r = n("../internals/fails"),
          i = n("../internals/is-callable"),
          o = /#|\.prototype\./,
          a = function (n, t) {
            var e = l[s(n)];
            return e == u || (e != c && (i(t) ? r(t) : !!t));
          },
          s = (a.normalize = function (n) {
            return String(n).replace(o, ".").toLowerCase();
          }),
          l = (a.data = {}),
          c = (a.NATIVE = "N"),
          u = (a.POLYFILL = "P");
        t.exports = a;
      },
      { "../internals/fails": 19, "../internals/is-callable": 34 }
    ],
    36: [
      function (n, t, e) {
        t.exports = function (n) {
          return null === n || void 0 === n;
        };
      },
      {}
    ],
    37: [
      function (n, t, e) {
        var r = n("../internals/is-callable"),
          i = n("../internals/document-all"),
          o = i.all;
        t.exports = i.IS_HTMLDDA
          ? function (n) {
              return "object" == typeof n ? null !== n : r(n) || n === o;
            }
          : function (n) {
              return "object" == typeof n ? null !== n : r(n);
            };
      },
      { "../internals/document-all": 13, "../internals/is-callable": 34 }
    ],
    38: [
      function (n, t, e) {
        t.exports = !1;
      },
      {}
    ],
    39: [
      function (n, t, e) {
        var r = n("../internals/get-built-in"),
          i = n("../internals/is-callable"),
          o = n("../internals/object-is-prototype-of"),
          a = n("../internals/use-symbol-as-uid"),
          s = Object;
        t.exports = a
          ? function (n) {
              return "symbol" == typeof n;
            }
          : function (n) {
              var t = r("Symbol");
              return i(t) && o(t.prototype, s(n));
            };
      },
      {
        "../internals/get-built-in": 25,
        "../internals/is-callable": 34,
        "../internals/object-is-prototype-of": 47,
        "../internals/use-symbol-as-uid": 66
      }
    ],
    40: [
      function (n, t, e) {
        var r = n("../internals/to-length");
        t.exports = function (n) {
          return r(n.length);
        };
      },
      { "../internals/to-length": 60 }
    ],
    41: [
      function (n, t, e) {
        var r = n("../internals/fails"),
          i = n("../internals/is-callable"),
          o = n("../internals/has-own-property"),
          a = n("../internals/descriptors"),
          s = n("../internals/function-name").CONFIGURABLE,
          l = n("../internals/inspect-source"),
          c = n("../internals/internal-state"),
          u = c.enforce,
          E = c.get,
          _ = Object.defineProperty,
          A =
            a &&
            !r(function () {
              return 8 !== _(function () {}, "length", { value: 8 }).length;
            }),
          T = String(String).split("String"),
          f = (t.exports = function (n, t, e) {
            "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              e && e.getter && (t = "get " + t),
              e && e.setter && (t = "set " + t),
              (!o(n, "name") || (s && n.name !== t)) && (a ? _(n, "name", { value: t, configurable: !0 }) : (n.name = t)),
              A && e && o(e, "arity") && n.length !== e.arity && _(n, "length", { value: e.arity });
            try {
              e && o(e, "constructor") && e.constructor ? a && _(n, "prototype", { writable: !1 }) : n.prototype && (n.prototype = void 0);
            } catch (n) {}
            var r = u(n);
            return o(r, "source") || (r.source = T.join("string" == typeof t ? t : "")), n;
          });
        Function.prototype.toString = f(function () {
          return (i(this) && E(this).source) || l(this);
        }, "toString");
      },
      {
        "../internals/descriptors": 12,
        "../internals/fails": 19,
        "../internals/function-name": 22,
        "../internals/has-own-property": 28,
        "../internals/inspect-source": 32,
        "../internals/internal-state": 33,
        "../internals/is-callable": 34
      }
    ],
    42: [
      function (n, t, e) {
        var r = Math.ceil,
          i = Math.floor;
        t.exports =
          Math.trunc ||
          function (n) {
            var t = +n;
            return (t > 0 ? i : r)(t);
          };
      },
      {}
    ],
    43: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/ie8-dom-define"),
          o = n("../internals/v8-prototype-define-bug"),
          a = n("../internals/an-object"),
          s = n("../internals/to-property-key"),
          l = TypeError,
          c = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor;
        e.f = r
          ? o
            ? function (n, t, e) {
                if (
                  (a(n), (t = s(t)), a(e), "function" == typeof n && "prototype" === t && "value" in e && "writable" in e && !e.writable)
                ) {
                  var r = u(n, t);
                  r &&
                    r.writable &&
                    ((n[t] = e.value),
                    (e = {
                      configurable: "configurable" in e ? e.configurable : r.configurable,
                      enumerable: "enumerable" in e ? e.enumerable : r.enumerable,
                      writable: !1
                    }));
                }
                return c(n, t, e);
              }
            : c
          : function (n, t, e) {
              if ((a(n), (t = s(t)), a(e), i))
                try {
                  return c(n, t, e);
                } catch (n) {}
              if ("get" in e || "set" in e) throw l("Accessors not supported");
              return "value" in e && (n[t] = e.value), n;
            };
      },
      {
        "../internals/an-object": 4,
        "../internals/descriptors": 12,
        "../internals/ie8-dom-define": 30,
        "../internals/to-property-key": 63,
        "../internals/v8-prototype-define-bug": 67
      }
    ],
    44: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/function-call"),
          o = n("../internals/object-property-is-enumerable"),
          a = n("../internals/create-property-descriptor"),
          s = n("../internals/to-indexed-object"),
          l = n("../internals/to-property-key"),
          c = n("../internals/has-own-property"),
          u = n("../internals/ie8-dom-define"),
          E = Object.getOwnPropertyDescriptor;
        e.f = r
          ? E
          : function (n, t) {
              if (((n = s(n)), (t = l(t)), u))
                try {
                  return E(n, t);
                } catch (n) {}
              if (c(n, t)) return a(!i(o.f, n, t), n[t]);
            };
      },
      {
        "../internals/create-property-descriptor": 9,
        "../internals/descriptors": 12,
        "../internals/function-call": 21,
        "../internals/has-own-property": 28,
        "../internals/ie8-dom-define": 30,
        "../internals/object-property-is-enumerable": 49,
        "../internals/to-indexed-object": 58,
        "../internals/to-property-key": 63
      }
    ],
    45: [
      function (n, t, e) {
        var r = n("../internals/object-keys-internal"),
          i = n("../internals/enum-bug-keys").concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (n) {
            return r(n, i);
          };
      },
      { "../internals/enum-bug-keys": 17, "../internals/object-keys-internal": 48 }
    ],
    46: [
      function (n, t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      {}
    ],
    47: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this");
        t.exports = r({}.isPrototypeOf);
      },
      { "../internals/function-uncurry-this": 24 }
    ],
    48: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = n("../internals/has-own-property"),
          o = n("../internals/to-indexed-object"),
          a = n("../internals/array-includes").indexOf,
          s = n("../internals/hidden-keys"),
          l = r([].push);
        t.exports = function (n, t) {
          var e,
            r = o(n),
            c = 0,
            u = [];
          for (e in r) !i(s, e) && i(r, e) && l(u, e);
          for (; t.length > c; ) i(r, (e = t[c++])) && (~a(u, e) || l(u, e));
          return u;
        };
      },
      {
        "../internals/array-includes": 5,
        "../internals/function-uncurry-this": 24,
        "../internals/has-own-property": 28,
        "../internals/hidden-keys": 29,
        "../internals/to-indexed-object": 58
      }
    ],
    49: [
      function (n, t, e) {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          o = i && !r.call({ 1: 2 }, 1);
        e.f = o
          ? function (n) {
              var t = i(this, n);
              return !!t && t.enumerable;
            }
          : r;
      },
      {}
    ],
    50: [
      function (n, t, e) {
        var r = n("../internals/function-call"),
          i = n("../internals/is-callable"),
          o = n("../internals/is-object"),
          a = TypeError;
        t.exports = function (n, t) {
          var e, s;
          if ("string" === t && i((e = n.toString)) && !o((s = r(e, n)))) return s;
          if (i((e = n.valueOf)) && !o((s = r(e, n)))) return s;
          if ("string" !== t && i((e = n.toString)) && !o((s = r(e, n)))) return s;
          throw a("Can't convert object to primitive value");
        };
      },
      { "../internals/function-call": 21, "../internals/is-callable": 34, "../internals/is-object": 37 }
    ],
    51: [
      function (n, t, e) {
        var r = n("../internals/get-built-in"),
          i = n("../internals/function-uncurry-this"),
          o = n("../internals/object-get-own-property-names"),
          a = n("../internals/object-get-own-property-symbols"),
          s = n("../internals/an-object"),
          l = i([].concat);
        t.exports =
          r("Reflect", "ownKeys") ||
          function (n) {
            var t = o.f(s(n)),
              e = a.f;
            return e ? l(t, e(n)) : t;
          };
      },
      {
        "../internals/an-object": 4,
        "../internals/function-uncurry-this": 24,
        "../internals/get-built-in": 25,
        "../internals/object-get-own-property-names": 45,
        "../internals/object-get-own-property-symbols": 46
      }
    ],
    52: [
      function (n, t, e) {
        var r = n("../internals/is-null-or-undefined"),
          i = TypeError;
        t.exports = function (n) {
          if (r(n)) throw i("Can't call method on " + n);
          return n;
        };
      },
      { "../internals/is-null-or-undefined": 36 }
    ],
    53: [
      function (n, t, e) {
        var r = n("../internals/shared"),
          i = n("../internals/uid"),
          o = r("keys");
        t.exports = function (n) {
          return o[n] || (o[n] = i(n));
        };
      },
      { "../internals/shared": 55, "../internals/uid": 65 }
    ],
    54: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/define-global-property"),
          o = r["__core-js_shared__"] || i("__core-js_shared__", {});
        t.exports = o;
      },
      { "../internals/define-global-property": 11, "../internals/global": 27 }
    ],
    55: [
      function (n, t, e) {
        var r = n("../internals/is-pure"),
          i = n("../internals/shared-store");
        (t.exports = function (n, t) {
          return i[n] || (i[n] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.25.5",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      },
      { "../internals/is-pure": 38, "../internals/shared-store": 54 }
    ],
    56: [
      function (n, t, e) {
        var r = n("../internals/engine-v8-version"),
          i = n("../internals/fails");
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var n = Symbol();
            return !String(n) || !(Object(n) instanceof Symbol) || (!Symbol.sham && r && r < 41);
          });
      },
      { "../internals/engine-v8-version": 16, "../internals/fails": 19 }
    ],
    57: [
      function (n, t, e) {
        var r = n("../internals/to-integer-or-infinity"),
          i = Math.max,
          o = Math.min;
        t.exports = function (n, t) {
          var e = r(n);
          return e < 0 ? i(e + t, 0) : o(e, t);
        };
      },
      { "../internals/to-integer-or-infinity": 59 }
    ],
    58: [
      function (n, t, e) {
        var r = n("../internals/indexed-object"),
          i = n("../internals/require-object-coercible");
        t.exports = function (n) {
          return r(i(n));
        };
      },
      { "../internals/indexed-object": 31, "../internals/require-object-coercible": 52 }
    ],
    59: [
      function (n, t, e) {
        var r = n("../internals/math-trunc");
        t.exports = function (n) {
          var t = +n;
          return t != t || 0 === t ? 0 : r(t);
        };
      },
      { "../internals/math-trunc": 42 }
    ],
    60: [
      function (n, t, e) {
        var r = n("../internals/to-integer-or-infinity"),
          i = Math.min;
        t.exports = function (n) {
          return n > 0 ? i(r(n), 9007199254740991) : 0;
        };
      },
      { "../internals/to-integer-or-infinity": 59 }
    ],
    61: [
      function (n, t, e) {
        var r = n("../internals/require-object-coercible"),
          i = Object;
        t.exports = function (n) {
          return i(r(n));
        };
      },
      { "../internals/require-object-coercible": 52 }
    ],
    62: [
      function (n, t, e) {
        var r = n("../internals/function-call"),
          i = n("../internals/is-object"),
          o = n("../internals/is-symbol"),
          a = n("../internals/get-method"),
          s = n("../internals/ordinary-to-primitive"),
          l = n("../internals/well-known-symbol"),
          c = TypeError,
          u = l("toPrimitive");
        t.exports = function (n, t) {
          if (!i(n) || o(n)) return n;
          var e,
            l = a(n, u);
          if (l) {
            if ((void 0 === t && (t = "default"), (e = r(l, n, t)), !i(e) || o(e))) return e;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), s(n, t);
        };
      },
      {
        "../internals/function-call": 21,
        "../internals/get-method": 26,
        "../internals/is-object": 37,
        "../internals/is-symbol": 39,
        "../internals/ordinary-to-primitive": 50,
        "../internals/well-known-symbol": 69
      }
    ],
    63: [
      function (n, t, e) {
        var r = n("../internals/to-primitive"),
          i = n("../internals/is-symbol");
        t.exports = function (n) {
          var t = r(n, "string");
          return i(t) ? t : t + "";
        };
      },
      { "../internals/is-symbol": 39, "../internals/to-primitive": 62 }
    ],
    64: [
      function (n, t, e) {
        var r = String;
        t.exports = function (n) {
          try {
            return r(n);
          } catch (n) {
            return "Object";
          }
        };
      },
      {}
    ],
    65: [
      function (n, t, e) {
        var r = n("../internals/function-uncurry-this"),
          i = 0,
          o = Math.random(),
          a = r((1).toString);
        t.exports = function (n) {
          return "Symbol(" + (void 0 === n ? "" : n) + ")_" + a(++i + o, 36);
        };
      },
      { "../internals/function-uncurry-this": 24 }
    ],
    66: [
      function (n, t, e) {
        var r = n("../internals/symbol-constructor-detection");
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      { "../internals/symbol-constructor-detection": 56 }
    ],
    67: [
      function (n, t, e) {
        var r = n("../internals/descriptors"),
          i = n("../internals/fails");
        t.exports =
          r &&
          i(function () {
            return 42 != Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
          });
      },
      { "../internals/descriptors": 12, "../internals/fails": 19 }
    ],
    68: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/is-callable"),
          o = r.WeakMap;
        t.exports = i(o) && /native code/.test(String(o));
      },
      { "../internals/global": 27, "../internals/is-callable": 34 }
    ],
    69: [
      function (n, t, e) {
        var r = n("../internals/global"),
          i = n("../internals/shared"),
          o = n("../internals/has-own-property"),
          a = n("../internals/uid"),
          s = n("../internals/symbol-constructor-detection"),
          l = n("../internals/use-symbol-as-uid"),
          c = i("wks"),
          u = r.Symbol,
          E = u && u.for,
          _ = l ? u : (u && u.withoutSetter) || a;
        t.exports = function (n) {
          if (!o(c, n) || (!s && "string" != typeof c[n])) {
            var t = "Symbol." + n;
            s && o(u, n) ? (c[n] = u[n]) : (c[n] = l && E ? E(t) : _(t));
          }
          return c[n];
        };
      },
      {
        "../internals/global": 27,
        "../internals/has-own-property": 28,
        "../internals/shared": 55,
        "../internals/symbol-constructor-detection": 56,
        "../internals/uid": 65,
        "../internals/use-symbol-as-uid": 66
      }
    ],
    70: [
      function (n, t, e) {
        var r = n("../internals/export"),
          i = n("../internals/descriptors"),
          o = n("../internals/object-define-property").f;
        r({ target: "Object", stat: !0, forced: Object.defineProperty !== o, sham: !i }, { defineProperty: o });
      },
      { "../internals/descriptors": 12, "../internals/export": 18, "../internals/object-define-property": 43 }
    ]
  },
  {},
  [2]
);
null;
