var FederatedLoginService = (function () {
  var e;
  return function () {
    var u = this,
      n =
        ((u.isFederated = function (e, r, o) {
          n(
            e,
            function (e) {
              r(0 < e.type, e.type);
            },
            o
          );
        }),
        (u._handleError = function (e, r) {
          e && e(r ? r.toString() : ""),
            r &&
              setTimeout(function () {
                throw r;
              }, 0);
        }),
        (u._getAuthInfo = function (e, r, o, t) {
          n(
            e,
            function (e) {
              u._ajax({
                type: "GET",
                dataType: "json",
                url: e.IdentityProviderURL + "/auth/saml2/getauthinfo/" + r,
                success: o,
                error: c(t)
              });
            },
            t
          );
        }),
        (u._initiate = function (e, o, t) {
          n(
            e,
            function (r) {
              switch (r.type) {
                case 3:
                  o(r);
                  break;
                case 2:
                  a(
                    e,
                    r,
                    function (e) {
                      o(r, e);
                    },
                    t
                  );
                  break;
                case 1:
                  o(r);
                  break;
                default:
                  u._handleError(t, new Error("User is not provisioned for federated login"));
              }
            },
            t
          );
        }),
        (u._decryptK1WithPrivateKey = function (e, r) {
          return r.decrypt(e, "RSA-OAEP", { md: forge.md.sha384.create() });
        }),
        (u._assemblePassword = function (e, r, o, t, n) {
          var a = atob(o.k1),
            i = atob(o.k2),
            s = (r && (a = u._decryptK1WithPrivateKey(a, r.privateKey)), d(a, i));
          u._ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: "lmiapi/login/getLocalKeyPart",
            data: { username: e, keyHash: l(s), authSessionId: o.authSessionId },
            success: function (e) {
              e && e.localKey ? t(l(d(s, atob(e.localKey)))) : u._handleError(n, new Error("Could not retrieve local key"));
            },
            error: c(n)
          });
        }),
        (u.OIDC_PROVIDERS = { Azure: 0, Okta: 1, OktaWithoutAuthorizationServer: 2, Google: 3, PingOne: 4, OneLogin: 5 }),
        (u.GRAPH_API_HOST = { Com: "graph.microsoft.com", Us: "graph.microsoft.us" }),
        (u.processMicrosoftGraphApiResponse = function (e) {
          var r,
            r = "string" == typeof e ? JSON.parse(e) : e;
          if (r.extensions)
            for (var o = 0; o < r.extensions.length; o++) if ("com.lastpass.keys" === r.extensions[o].id) return r.extensions[o].LastPassK1;
        }),
        (u._getKeysForAzure = function (r, o, t, n) {
          var e = u.GRAPH_API_HOST.Com;
          null != r.graphApiHost && (e = r.graphApiHost),
            u._ajax({
              type: "GET",
              url: "https://" + e + "/v1.0/me?$select=id,displayName,mail&$expand=extensions",
              beforeSend: function (e) {
                e.setRequestHeader("Authorization", "Bearer " + r.accessToken);
              },
              success: function (e) {
                var e = u.processMicrosoftGraphApiResponse(e);
                e ? o(e, r, t, n) : u._handleError(n, new Error("Could not retrieve K1 from Azure"));
              },
              error: c(n)
            });
        }),
        (u._getGlobalKeysForIdp = function (e, r, o, t) {
          var n = e.k1;
          n ? r(btoa(n), e, o, t) : u._handleError(t, new Error("Could not retrieve K1 from " + u.getOIDCProviderName(e.provider)));
        }),
        (u._getKeysForPingOne = function (e, r, o, t) {
          var n = e.k1;
          n ? r(n, e, o, t) : u._handleError(t, new Error("Could not retrieve K1 from PingOne"));
        }),
        (u._getKeysForGoogle = function (r, o, t, n) {
          var a = googleApiHelpers(u._ajax, r.accessToken);
          a.getGoogleDriveFile("k1.lp", "appDataFolder", function (e) {
            e &&
              e.id &&
              a.getGoogleDriveFileContent(e.id, function (e) {
                e && o(e, r, t, n);
              });
          });
        }),
        (u._getK2FromAlp = function (r, e, o, t) {
          u._ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: e.alpUrl + "/federatedlogin/api/v1/getkey",
            data: JSON.stringify({ company_id: e.companyId, id_token: e.idToken }),
            success: function (e) {
              e && e.k2
                ? o(l(d(atob(r), atob(e.k2))), void 0, e.fragment_id, l(atob(r)), atob(r))
                : u._handleError(t, new Error("Could not retrieve K2 from ALP"));
            },
            error: c(t)
          });
        }),
        (u._assemblePasswordForOIDC = function (e, r, o) {
          var t = function () {
            o(gs("Unknown OpenIDConnect provider") + " " + provider);
          };
          e.provider === u.OIDC_PROVIDERS.Azure
            ? (t = u._getKeysForAzure)
            : e.provider === u.OIDC_PROVIDERS.Google
            ? (t = u._getKeysForGoogle)
            : e.provider === u.OIDC_PROVIDERS.PingOne
            ? (t = u._getKeysForPingOne)
            : (e.provider !== u.OIDC_PROVIDERS.Okta &&
                e.provider !== u.OIDC_PROVIDERS.OktaWithoutAuthorizationServer &&
                e.provider !== u.OIDC_PROVIDERS.OneLogin) ||
              (t = u._getGlobalKeysForIdp),
            t(e, u._getK2FromAlp, r, o);
        }),
        (u.getScopes = function (e, r) {
          switch (e) {
            case u.OIDC_PROVIDERS.Azure:
              return r ? "openid email profile user.readwrite" : "openid email profile";
            case u.OIDC_PROVIDERS.OktaWithoutAuthorizationServer:
              return "openid email profile groups";
            case u.OIDC_PROVIDERS.PingOne:
              return r ? "openid email profile p1:update:user" : "openid email profile lastpass";
            case u.OIDC_PROVIDERS.Google:
              return "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.install https://www.googleapis.com/auth/drive.file";
            default:
              u.OIDC_PROVIDERS.Okta;
              return "openid email profile";
          }
        }),
        (u.getOIDCProviderName = function (e) {
          switch (e) {
            case 0:
              return "Azure AD";
            case 1:
            case 2:
              return "Okta";
            case 3:
              return "Google";
            case 4:
              return "PingOne";
            case 5:
              return "OneLogin";
            default:
              return "";
          }
        }),
        (u._keypairSaved = function () {}),
        (u._cache = {}),
        (u.clearCache = function () {
          u._cache = {};
        }),
        "undefined" != typeof g_oldFederatedEmail && (g_oldFederatedEmail = ""),
        "undefined" != typeof g_newFederatedEmail && (g_newFederatedEmail = ""),
        function (r, o, t) {
          u._cache[r]
            ? o(u._cache[r])
            : u._ajax({
                type: "GET",
                dataType: "json",
                url: "lmiapi/login/type",
                data: { username: r },
                success: function (e) {
                  e
                    ? (e.OldEmail && "" !== e.OldEmail
                        ? "undefined" != typeof g_oldFederatedEmail && ((g_oldFederatedEmail = e.OldEmail), (g_newFederatedEmail = r))
                        : (u._cache[r] = e),
                      o(e))
                    : u._handleError(t, new Error("Could not retrieve login data: " + e));
                },
                error: c(t)
              });
        }),
      c = function (t) {
        return function (e, r, o) {
          u._handleError(t, new Error(o));
        };
      },
      e = function (o) {
        forge.rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (e, r) {
          o(e, r);
        });
      },
      a = function (o, t, n, a) {
        e(function (e, r) {
          e
            ? a(e)
            : u._ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: "lmiapi/federated/key",
                data: { email: o, publickey: i(r).publicKey },
                success: function () {
                  u._keypairSaved(r, t), n(r);
                },
                error: c(a)
              });
        });
      },
      l = function (e) {
        var r = forge.md.sha256.create();
        return r.update(e), btoa(r.digest().bytes());
      },
      d = function (e, r) {
        var o = (e.length < r.length ? e : r).length;
        return forge.util.xorBytes(e, r, o);
      },
      r = function (e) {
        return btoa(forge.asn1.toDer(e).getBytes());
      },
      o = function (e) {
        return forge.asn1.fromDer(atob(e));
      },
      i = function (e) {
        return e && { privateKey: r(forge.pki.privateKeyToAsn1(e.privateKey)), publicKey: r(forge.pki.publicKeyToAsn1(e.publicKey)) };
      };
  };
})();
