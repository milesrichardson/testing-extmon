location.origin.match(/^moz-extension:\/\//) &&
  browser.webRequest.onBeforeSendHeaders.addListener(
    function (e) {
      return {
        requestHeaders: e.requestHeaders.filter(function (e) {
          return !("origin" === e.name.toLowerCase() && e.value.match(/^moz-extension:\/\//));
        })
      };
    },
    { urls: ["https://*.okta.com/oauth2*", "https://*.okta-emea.com/oauth2*", "https://*.okta.com/.well-known/openid-*"] },
    ["blocking", "requestHeaders"]
  );
var FederatedLogin = (function () {
  var e;
  return new (function () {
    var c = this,
      p = {},
      f = !1,
      n =
        (FederatedLoginService.call(c),
        (c._ajax = function (e) {
          "undefined" != typeof base_url && 0 !== e.url.indexOf("http") && (e.url = base_url + e.url), LPServer.ajax(e);
        }),
        (c.login = function (o, a) {
          (o = fix_username(o)),
            c.getPassword(
              o,
              function (e, r, t, n) {
                setFragmentId(t, n), LP_do_login(o, e, a, void 0, void 0, void 0, void 0, void 0, void 0, r);
              },
              lpshowError
            );
        }),
        function (e, r) {
          try {
            var t = e.Response.Assertion.AttributeStatement.Attribute.find(function (e) {
              return e._Name === r;
            }).AttributeValue;
            if ("string" == typeof t) return t;
            if ("string" == typeof t["#text"]) return t["#text"];
          } catch (e) {}
          return "";
        }),
      m = function (e, r) {
        var r, t, r, t;
        e.keypair &&
          ((r = reduxApp.parseXml(atob(r), !0)),
          (t = n(r, "LastPassKeyPart")),
          (r = n(r, "LastPassKeyPartSignature")),
          (t = c._decryptK1WithPrivateKey(atob(t), e.keypair.privateKey)),
          (e.valid = !!t && o(t, r)),
          (e.submitted = !0),
          e.valid || c._handleError(e.error, new Error(gs("K1 not valid!"))));
      },
      t = function (e) {
        var r = forge.md.sha256.create();
        return r.update(e), btoa(r.digest().bytes());
      },
      o = function (e, r) {
        return t(e) === r;
      },
      a = function (e) {
        var r = {},
          t;
        return (
          e.split("&").forEach(function (e) {
            var e = e.split("=");
            2 === e.length && (r[e[0]] = decodeURIComponent(e[1]));
          }),
          r
        );
      },
      g = function (e) {
        try {
          if (e && e.formData && e.formData.SAMLResponse && 1 === e.formData.SAMLResponse.length) return e.formData.SAMLResponse[0];
          if (e && e.raw) {
            var r = e.raw.reduce(function (e, r) {
              return e + String.fromCharCode.apply(null, new Uint8Array(r.bytes));
            }, "");
            if (0 < r.length) {
              var t = a(r);
              if (t.SAMLResponse) return t.SAMLResponse;
            }
          }
        } catch (e) {
          console.log(e);
        }
        return null;
      };
    (c.getPasswordSaml = function (d, l, u) {
      (d = fix_username(d)),
        LPPlatform.getCurrentTabDetails(function (s) {
          c._initiate(d, function (o, a) {
            var i = { valid: !1, idp: o, keypair: a, submitted: !1, error: u };
            LPPlatform.openTab({
              extension: !0,
              url: o.IdentityProviderURL + "/auth/saml2/" + o.IdentityProviderGUID,
              loadHandler: function (n) {
                (p[n.tabDetails.tabID] = i).cleanup = LPPlatform.onBeforeNavigate(function (e, r) {
                  var t = /\/auth\/saml2\/success\/(.*)$/.exec(e);
                  if (t && 2 === t.length)
                    return (
                      i.valid || !a
                        ? c._getAuthInfo(
                            d,
                            t[1],
                            function (r) {
                              c._assemblePassword(
                                d,
                                a,
                                r,
                                function (e) {
                                  l(e, r.authSessionId);
                                },
                                u
                              );
                            },
                            u
                          )
                        : c._handleError(u, new Error(gs("K1 not valid!"))),
                      (i.submitted = !0),
                      LPPlatform.closeTab(n.tabDetails),
                      LPPlatform.activateTab(s),
                      !1
                    );
                  if (a && !i.valid && 0 === e.indexOf(o.IdentityProviderURL)) {
                    var t = g(r);
                    if (t) return m(i, t), i.valid;
                  }
                }, n.tabDetails);
              },
              closeHandler: function () {
                i.submitted || c._handleError(u, new Error(gs("Federated login tab closed!")));
              }
            });
          });
        });
    }),
      (c.parseJwt = function (e) {
        var r, t;
        return new Oidc.UserManager()._joseUtil.parseJwt(e).payload;
      }),
      (c.getPassword = function (d, l, u) {
        (d = fix_username(d)),
          c.clearCache(),
          LPPlatform.getCurrentTabDetails(function (e) {
            c._initiate(d, function (e, r) {
              var o = { valid: !1, idp: e, keypair: r, submitted: !1, error: u },
                a,
                i,
                s;
              o.idp.type <= 2
                ? c.getPasswordSaml(d, l, u)
                : (3 != o.idp.type && u(),
                  (Oidc.Log.logger = console),
                  (Oidc.Log.level = Oidc.Log.INFO),
                  (a = {
                    authority: o.idp.OpenIDConnectAuthority,
                    client_id: o.idp.OpenIDConnectClientId,
                    redirect_uri: "https://accounts.lastpass.com/federated/oidcredirect.html",
                    response_type: o.idp.PkceEnabled ? "code" : "id_token token",
                    response_mode: o.idp.PkceEnabled && o.idp.Provider !== c.OIDC_PROVIDERS.PingOne ? "fragment" : null,
                    scope: c.getScopes(o.idp.Provider, !1),
                    signingKeys: o.idp.OpenIDConnectKeys,
                    extraQueryParams: {}
                  }),
                  o.idp.IsEmailHintDisabled || (a.extraQueryParams.login_hint = d),
                  o.idp.Provider === c.OIDC_PROVIDERS.OneLogin && (a.extraQueryParams.resource = "https://lastpass.com"),
                  (i = c.getOIDCProviderName(o.idp.Provider)),
                  (s = new Oidc.OidcClient(a)).createSigninRequest().then(function (e) {
                    var r;
                    f
                      ? (f = !1)
                      : ((f = !0),
                        (r = o.idp.PkceEnabled && e.url.indexOf("&nonce=") < 0 ? "&nonce=" + rand_str(16) : ""),
                        LPPlatform.openTab({
                          extension: !0,
                          url: e.url + r,
                          closeHandler: function () {
                            (f = !1), o.submitted || c._handleError(u, new Error(gs("Federated login tab closed!")));
                          },
                          loadHandler: function () {},
                          onBeforeRequestCallback: function (e, r, n) {
                            function t(e) {
                              return [
                                sprintf(gs("%s reported a problem during login."), i),
                                sprintf(gs("Contact your %s administrator for assistance."), i),
                                sprintf(gs("Here’s the message from %s:"), i),
                                e
                              ].join("<br/><br/>");
                            }
                            /https:\/\/accounts\.lastpass\.com\/federated\/oidcredirect\.html.*/.test(e) &&
                              s
                                .processSigninResponse(e)
                                .then(function (e) {
                                  var r, t, r, t, r, r, e;
                                  return (
                                    (o.submitted = !0),
                                    LPPlatform.closeTab({ tabID: n }),
                                    (f = !1),
                                    e.error
                                      ? (console.log(e.error), c._handleError(u, new Error(getErrorMessage(e.error))), !1)
                                      : e.profile
                                      ? ((r = e.profile.email ? e.profile.email.toLowerCase() : void 0),
                                        (t = e.profile.preferred_username ? e.profile.preferred_username.toLowerCase() : void 0),
                                        r != d.toLowerCase() && t != d.toLowerCase()
                                          ? ((r = [
                                              sprintf(gs("Use the same account to log in to both %s and LastPass."), i),
                                              "<br/><br/>",
                                              sprintf(gs("Current %s account:"), i) + " " + (r || t || gs("unknown")),
                                              "<br/>",
                                              gs("Attempted LastPass account:") + " " + d
                                            ].join("")),
                                            c._handleError(u, new Error(r)),
                                            !1)
                                          : ((r = t = null),
                                            (o.idp.Provider != c.OIDC_PROVIDERS.Okta &&
                                              o.idp.Provider != c.OIDC_PROVIDERS.OktaWithoutAuthorizationServer) ||
                                              (o.idp.Provider == c.OIDC_PROVIDERS.Okta
                                                ? (r = c.parseJwt(e.access_token)) && (t = r.LastPassK1)
                                                : o.idp.Provider == c.OIDC_PROVIDERS.OktaWithoutAuthorizationServer &&
                                                  (t = e.profile.LastPassK1),
                                              t && 33 == t.length) ||
                                              c._handleError(u, new Error(gs("LastPassK1 is missing or has invalid length."))),
                                            (o.idp.Provider !== c.OIDC_PROVIDERS.PingOne && o.idp.Provider !== c.OIDC_PROVIDERS.OneLogin) ||
                                              (t = (r = c.parseJwt(e.access_token)) ? r.LastPassK1 : t) ||
                                              c._handleError(u, new Error(gs("LastPassK1 is missing or has invalid length."))),
                                            (r = c.GRAPH_API_HOST.Com),
                                            o.idp.Provider === c.OIDC_PROVIDERS.Azure &&
                                              0 < a.authority.indexOf("microsoftonline.us") &&
                                              (r = c.GRAPH_API_HOST.Us),
                                            (e = {
                                              idToken: e.id_token,
                                              accessToken: e.access_token,
                                              companyId: o.idp.CompanyId,
                                              alpUrl: alp_url,
                                              provider: o.idp.Provider,
                                              k1: t,
                                              graphApiHost: r
                                            }),
                                            c._assemblePasswordForOIDC(e, l, u),
                                            !0))
                                      : (c._handleError(u, new Error(gs("No profile information."))), !1)
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e);
                                  var e = decodeURIComponent(e.error_description.replace(/\+/g, "%20"));
                                  c._handleError(u, new Error(t(e)));
                                });
                          }
                        }));
                  }));
            });
          });
      }),
      (c.validateK1Encryption = function (e, r, t) {
        var n = !0,
          t = p[t.tabID];
        t && t.keypair && (m(t, e), (n = t.valid)), r && r(n);
      }),
      LPPlatform.onTabClosed(function (e) {
        p[e] && (p[e].cleanup(), delete p[e]);
      });
  })();
})();
!(function () {
  var e = "undefined" != typeof browser ? browser.runtime : "undefined" != typeof chrome ? chrome.runtime : void 0;
  e &&
    e.onMessage.addListener(function (e, r, t) {
      e.validateK1 && FederatedLogin.validateK1Encryption(e.validateK1, t, { tabID: r.tab.id });
    });
})();
