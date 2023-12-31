(LPProxy = {}),
  (function () {
    var u = null,
      g =
        (Topics.get(Topics.CLEAR_DATA).subscribe(function () {
          (D = null), LPProxy.clearModel();
        }),
        (LPProxy.getBaseURL = function () {
          return bg.get("base_url");
        }),
        (LPProxy.logEvent = function (e) {
          bg.lpevent(e);
        }),
        (LPProxy.encryptAES = function (e, r) {
          return bg.enc(e, r);
        }),
        (LPProxy.decryptAES = function (e, r) {
          return bg.dec(e, r);
        }),
        function (n) {
          return function (e, r, t) {
            n(t);
          };
        }),
      l = function (t, n) {
        return function (e) {
          try {
            var r;
            "exceededlimit" === e
              ? t(
                  Strings.translateString(
                    "Sorry, as a premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more."
                  )
                )
              : ((r = $(jQuery.parseXML(e))), O(r, t, n));
          } catch (e) {
            LPPlatform.logException(e), t(Strings.Vault.UNEXPECTED_ERROR);
          }
        };
      },
      P = function (e, r, t) {
        var e = e[r];
        return "function" == typeof e && (e(t), !0);
      },
      O = function (e, r, t) {
        var n = e.find("result"),
          o = e.find("ok"),
          a = e.find("error"),
          i = e.find("failed");
        if (n.length) {
          var s = n.attr("rc"),
            c = n.attr("msg"),
            u = n.attr("success"),
            g = n.attr("ok"),
            l = n.text().trim();
          if (void 0 !== s) {
            var d = t[s];
            if ("function" == typeof d) return void d(n);
            switch (s) {
              case "notoken":
                return void r(Strings.translateString("No token was provided. Request could not be completed"));
              case "cantsharewithself":
                return void r(Strings.translateString("Cannot share an item with yourself."));
              case "alreadyexists":
                return void r(Strings.translateString("That folder already exists."));
            }
          } else if (void 0 !== c) {
            if (P(t, c, n)) return;
          } else if (void 0 !== u) {
            if (P(t, u, n)) return;
          } else if (void 0 !== g) {
            if (P(t, "ok")) return;
          } else if ("ok" === l) {
            if (P(t, "ok")) return;
            if (P(t, e.find("status").text())) return;
          } else if ("bad" === l) return void r(e.find("message").text());
        } else if (o.length) {
          if (P(t, "ok", o)) return;
        } else if (a.length) {
          var d = a.attr("message");
          if (d) return void r(d);
        } else if (i.length && P(t, i.attr("reason"), i)) return;
        r(Strings.Vault.UNEXPECTED_ERROR);
      },
      N = function (n, o) {
        return function (e) {
          try {
            if (((e = jQuery.parseJSON(e)), "object" == typeof o)) {
              var r = o[e.error] || o[e.res] || o[e.reason] || o[e.status];
              if ("function" == typeof r) return void r(e);
              o = o.default;
            }
            if (e.error)
              switch (e.error) {
                case "session_expired":
                  return void n(Strings.translateString("ErrorSessionMsg"));
                case "not_allowed":
                  return void n(
                    Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again")
                  );
                default:
                  var t = e.errortxt || Strings.Vault.UNEXPECTED_ERROR;
                  return void n(t);
              }
            e.res && "success" !== e.res ? n(Strings.Vault.UNEXPECTED_ERROR) : o(e);
          } catch (e) {
            LPPlatform.logException(e), n(Strings.Vault.UNEXPECTED_ERROR);
          }
        };
      },
      e = function (e) {
        return function () {
          bg.have_binary()
            ? e.apply(this, arguments)
            : LPPlatform.supportsBinary()
            ? dialogs.confirmation.open({
                title: Strings.translateString("Install Binary Component"),
                text: Strings.translateString(
                  "This feature requires the binary version of this browser extension. Would you like to install it now?"
                ),
                handler: function () {
                  LPPlatform.installBinary();
                }
              })
            : dialogs.alert.open({
                title: Strings.translateString("Not Supported"),
                text: Strings.translateString(
                  "This feature requires an external binary component, which is currently not supported on this platform."
                )
              });
        };
      },
      i =
        ((LPProxy.logout = function () {
          bg.lpevent("v_off"), bg.loggedOut(!1, "homelocal2");
        }),
        (LPProxy.copyTotp = function (e) {
          bg.lpevent("v_ct"), bg.sendLpImprove("totp_code_copied"), LPPlatform.copyToClipboard(e.getTotp());
        }),
        (LPProxy.copyUsername = function (e) {
          bg.lpevent("v_cu"), LPPlatform.copyToClipboard(e.getUsername());
        }),
        (LPProxy.copyPassword = function (e, r) {
          bg.lpevent("v_cp"),
            LPPlatform.copyToClipboard(e.getPassword()),
            bg.sendLpImprove(
              "sitelogin",
              {
                copy: 1,
                shareType: e.getShareType(),
                autologin: e._data && e._data.autologin ? 1 : 0,
                source: r && r.source ? r.source : null,
                approach: r && r.approach ? r.approach : null
              },
              !0
            ),
            r && r.source && bg.sendLpImprove("copypass", { source: r.source, action: "sitepassword" }),
            bg.loglogin(e.getID(), null, null, "password_copy");
        }),
        (LPProxy.copyGeneratedPassword = function (e, r, t) {
          LPProxy.copyToClipboard(e),
            Topics.get(Topics.SUCCESS).publish(Strings.translateString("Password Copied")),
            bg && bg.sendLpImprove && bg.sendLpImprove("genpassword", { action: "copypassword", source: r, generatedPasswordCount: t }, !0);
        }),
        (LPProxy.copyURL = function (e) {
          bg.lpevent("v_curl"), LPPlatform.copyToClipboard(e.getURL());
        }),
        (LPProxy.goToURL = function (e) {
          bg.lpevent("v_g2"), bg.openURL(e.getURL());
        }),
        (LPProxy.copyToClipboard = function (e) {
          LPPlatform.copyToClipboard(e);
        }),
        function (e) {
          for (var r = [], t = 0, n = e.length; t < n; ++t) "0" !== e[t].getID() && r.push(e[t].getID(!0));
          return r.join(",");
        }),
      B =
        ((LPProxy.deleteItem = function (e, r, t) {
          bg.lpevent("v_d"), bg.deleteAid(i(e), null, !0, !0, r, t);
        }),
        (LPProxy.deleteFormFill = function (e, r, t, n) {
          var r = r && r.source ? r.source : "vault";
          bg.lpevent("v_dff"), bg.deleteformfill(e._data.ffid, !0, !1, null, t, n, r);
        }),
        (LPProxy.deleteFolder = function (e, r) {
          bg.lpevent("v_dg"), bg.deleteAid(i(e), null, !0, !0, r);
        }),
        function (n) {
          n._data &&
            n._data.url &&
            bg.BackgroundServer.aurora.getOneClickSignupUrls({
              success: function (e) {
                for (var r = Object.getOwnPropertyNames(e), t = 0; t < r.length; t++)
                  if (n._data.url === e[r[t]].login) {
                    bg.sendLpImprove("promotion_vault_launch", { product: r[t] });
                    break;
                  }
              }
            });
        }),
      r,
      e =
        ((LPProxy.launchSite = function (e, r) {
          bg.lpevent("v_ls"),
            bg.launch(e.getID(), !0),
            bg.sendLpImprove(
              "sitelogin",
              {
                copy: 0,
                shareType: e.getShareType(),
                source: r && r.source ? r.source : null,
                autologin: e._data && e._data.autologin ? 1 : 0,
                action: "launch"
              },
              !0
            ),
            B(e),
            bg.loglogin(e.getID());
        }),
        (LPProxy.launchApplication = e(function (e) {
          bg.launchApp(e.getID());
        })),
        (LPProxy.moveToFolder = function (e, r, t, n) {
          if (
            bg.Policies.getAccountSelectionBasedOnEmail() &&
            (r instanceof LinkedGroup || (r instanceof Group && r._sharedGroup instanceof LinkedGroup))
          )
            for (var o = 0, a; o < e.length; o++) {
              if (e[o]._data.unencryptedUsername === bg.get("g_username")) return n("policy"), !1;
            }
          bg.moveSelectedToGroup(r._data.group, i(e), { skipConfirm: !0 }, t, n);
        }),
        (LPProxy.moveIntoSharedFolder =
          ((r = function (e) {
            var r = null;
            return e && ((r = $.extend({}, e)).sharekey = r.key), r;
          }),
          function (e) {
            bg.moveIntoSharedFolder(
              r(e.params.toShareInfo),
              r(e.params.fromShareInfo),
              e.params.itemsToMove,
              e.params.parentMap,
              !1,
              !1,
              !0,
              { successCallback: e.success, errorCallback: e.error }
            );
          })),
        (LPProxy.addGroup = function (e, r, t) {
          bg.addEmptyGroup(e._data.group, r, t);
        }),
        (LPProxy.renameGroup = function (e, r, t, n) {
          bg.renameGroup(e._data.group, r.group, { skipConfirm: !0 }, t, n);
        }),
        function (r) {
          return function () {
            var e = arguments;
            LPProxy.getToken(
              function () {
                r.apply(window, e);
              },
              arguments[arguments.length - 1]
            );
          };
        }),
      s =
        ((t = function (e) {
          e
            ? dialogs.alert.open({
                title: Strings.translateString("Generating Sharing Keys"),
                text: Strings.translateString(
                  "LastPass is currently generating unique sharing keys required for this action. Please try again later."
                )
              })
            : dialogs.sharingKey.open({ showTimeWarning: !1 });
        }),
        function () {
          LPPlatform.generateSharingKeys(t);
        }),
      t,
      M = function (a) {
        return function () {
          for (var e = [], r = 0, t = arguments.length; r < t; ++r) e.push(arguments[r]);
          var n = e[e.length - 1],
            o = new SharedFolderUser({ uid: bg.get("g_uid"), username: bg.get("g_username") });
          LPProxy.getPublicKeys(
            [o],
            function () {
              o.pubkey ? (e.push(o), a.apply(window, e)) : (s(), n());
            },
            n
          );
        };
      },
      n = function (e) {
        dialogs.inviteFriends.open(e);
      },
      o,
      G =
        ((LPProxy.shareItems =
          ((o = {
            invite: n,
            problems: function (e) {
              var r = LPTools.createElement("table", "settings dialogMargin"),
                t = LPTools.createElement("tr", "settingsHeader");
              t.appendChild(LPTools.createElement("th", null, Strings.translateString("Email Address"))),
                t.appendChild(LPTools.createElement("th", null, Strings.translateString("Reason"))),
                r.appendChild(t);
              for (var n = 0, o = e.length; n < o; ++n) {
                var a = e[n],
                  i = LPTools.createElement("tr", "settingsRow" + (n % 2 != 0 ? " odd" : ""));
                i.appendChild(LPTools.createElement("td", null, a.email)),
                  i.appendChild(LPTools.createElement("td", null, a.reason)),
                  r.appendChild(i);
              }
              dialogs.alert.open({
                title: Strings.translateString("Failed To Share With Some Users"),
                text: [Strings.translateString("We failed to share with the following users:"), r]
              });
            }
          }),
          function (e) {
            bg.BackgroundServer.sharing.individual.shareItems(
              $.extend(!0, e, {
                params: { logname: bg.get("g_prefoverrides").logname },
                callbacks: $.extend({}, o, {
                  emailnotverified: function () {
                    e.error(""), dialogs.verifyEmail.open({ email: bg.get("g_username") });
                  }
                }),
                success: G(e.success, function () {
                  Topics.get(Topics.ITEM_SHARED).publish();
                })
              })
            );
          })),
        function (e, r) {
          return e
            ? function () {
                r.apply(window, arguments), e.apply(window, arguments);
              }
            : r;
        }),
      m =
        ((LPProxy.resendShareInvitation = function (e) {
          bg.BackgroundServer.sharing.individual.shareItems(e);
        }),
        (LPProxy.unshareItem = function () {
          bg.BackgroundServer.sharing.individual.unshareItem.apply(bg, arguments);
        }),
        (LPProxy.acceptShare = function () {
          bg.BackgroundServer.sharing.individual.acceptShare.apply(bg, arguments);
        }),
        (LPProxy.rejectShare = function () {
          bg.BackgroundServer.sharing.individual.rejectShare.apply(bg, arguments);
        }),
        (LPProxy.renameSharedGroup = function (e) {
          bg.BackgroundServer.sharing.folder.rename(e);
        }),
        (LPProxy.parsePrivateKey = function (e) {
          bg.parse_private_key(e, bg.get("rsaprivatekeyhex"));
        }),
        (LPProxy.parsePublicKey = function (e, r) {
          bg.parse_public_key(e, r);
        }),
        (LPProxy.encrypt = function (e, r) {
          return bg.enc(e, r);
        }),
        (LPProxy.decrypt = function (e, r) {
          try {
            return bg.dec(e, r);
          } catch (e) {
            return "";
          }
        }),
        (LPProxy.getLocalKey = function () {
          return bg.get("g_local_key");
        }),
        (LPProxy.encryptWithKey = function (e, r) {
          return bg.lpenc(e, r);
        }),
        (LPProxy.encryptWithBTOA = function (e) {
          return bg.crypto_btoa(e);
        }),
        (LPProxy.encryptMobile = function (e, r, t) {
          return null !== bg ? bg.lpmenc(e, r, t) : e;
        }),
        (LPProxy.decryptMobile = function (e, r, t) {
          return null !== bg ? bg.lpmdec(e, r, t) : e;
        }),
        (d = function (e, r, t, n, o, a) {
          var i, i;
          e._data.save_all && e.isNew() && e instanceof Account
            ? ((i = e.getURLArguments(r, t, n)), bg.saveAllSite(i, e._data, o, a))
            : ((i = e.getURLArguments(r, t, n)), bg.saveSite(i, r, o, a));
        }),
        function (o, a, i, s, c, u) {
          if (a.attacharraychanges && a.attacharraychanges.add && 0 < a.attacharraychanges.add.length) {
            var e = bg.AES.hex2bin(bg.lpdec(a.attachkey, i.getKey()));
            if (!e) throw new AttachmentKeyException();
            bg.fastEncryptAttachments(e, a.attacharraychanges.add, function (e) {
              for (var r in a.attacharraychanges.add)
                if (a.attacharraychanges.add.hasOwnProperty(r) && a.attacharraychanges.add[r])
                  for (var t = 0, n = e.length; t < n; ++t)
                    a.attacharraychanges.add[r].id == e[t].id && (a.attacharraychanges.add[r].bytes = e[t].data);
              d(o, a, i, s, c, u);
            });
          } else d(o, a, i, s, c, u);
        }),
      d,
      h = function (r, e, t, n, o, a) {
        var e;
        return !(
          r.isNew() ||
          !r.checkForSharedGroupChange(t) ||
          (LPProxy.moveIntoSharedFolder({
            params: {
              fromShareInfo: r.getShareInfo(),
              toShareInfo: t.getShareInfo(),
              itemsToMove: [e],
              parentMap: (((e = {})[r.getID()] = t.getName()), e)
            },
            success: function (e) {
              o(e[r.getID()]);
            },
            error: a
          }),
          0)
        );
      },
      j =
        ((LPProxy.setOtpOnWeb = function (e, r) {
          LPPlatform.ajax({
            type: "POST",
            url: LPProxy.getBaseURL() + "otp.php",
            data: r.postData,
            dataType: "text",
            success: function () {
              localStorage.setItem(e, bg.AES.bin2hex(r.OTP)), bg.sendLpImprove("acc_rec_enabled", { dataSource: "Web" });
            }
          });
        }),
        (LPProxy.saveSite = function (r, t, n, o, a, i) {
          if (!h(r, t, n, o, a, i))
            if (LPTools.getOption(o, "saveFromSubmit", !1)) bg.saveSiteFromSubmit(r.getURLArguments(t, n, o), t, a, i);
            else {
              var e = a,
                s,
                c,
                u;
              if (!r._data.save_all && LPTools.getOption(o, "saveFields", !1))
                if (t.fields.length > r._data.fields.length) {
                  function g() {
                    var e = u.pop();
                    LPProxy.addField(
                      r,
                      e,
                      function () {
                        r.addField(e), 0 < u.length ? g() : LPProxy.saveSite(r, t, n, o, a, i);
                      },
                      i
                    );
                  }
                  if (!bg.updateFieldsFromSubmit) return (u = t.fields.slice(r._data.fields.length)), void g();
                  (s = { data: r.getFieldFormData(t.fields), ref: bg.AES.url2hex(t.url), updatefields: 1, aid: t.aid }),
                    (c = r.getShareInfo()) && (s.sharedfolderid = c.id),
                    (e = function () {
                      bg.updateFieldsFromSubmit($.param(s), t, a, i);
                    });
                } else {
                  for (
                    var l = { aid: r.getID(), urid: 0, auto: 1, update: 1 }, d = $.param(l), s = {}, P = 0, c;
                    P < t.fields.length;
                    ++P
                  ) {
                    var f = t.fields[P],
                      p,
                      y;
                    ("checkbox" == f.type && !f.checked) ||
                      ((p = r.getFieldPostData(f)),
                      (y = "_" + f.name),
                      f.otherfield && void 0 !== f.formname && (y = "_" + f.formname + "_" + y),
                      (s[y] = p.value));
                  }
                  (c = r.getShareInfo()) && (s.sharedfolderid = c.id),
                    (s = $.param(s)),
                    (e = function () {
                      bg.saveFields(
                        d,
                        s,
                        { aid: r.getID() },
                        function () {
                          a(t);
                        },
                        i
                      );
                    });
                }
              m(r, t, n, o, e, i);
            }
        }),
        (LPProxy.addSite = function (e, r, t, n, o) {
          LPTools.getOption(t, "saveFromSubmit", !1)
            ? bg.saveSiteFromSubmit(e.getURLArguments(e._data, r, t), e._data, n, o)
            : m(e, e._data, r, t, n, o);
        }),
        (LPProxy.saveNote = function (e, r, t, n, o, a) {
          h(e, r, t, n, o, a) || m(e, r, t, n, o, a);
        }),
        (LPProxy.addNote = function (e, r, t, n, o) {
          m(e, e._data, r, t, n, o);
        }),
        (LPProxy.saveApplication = function (e, r, t, n, o, a) {
          m(e, r, t, n, o, a);
        }),
        (LPProxy.addApplication = function (e, r, t, n, o) {
          m(e, e._data, r, t, n, o);
        }),
        (LPProxy.addFormFill = function (e, r, t, n) {
          var r = e.getPostData(e._data, null, r);
          (r.cmd = e._data.cmd = "add"), bg.addeditformfill(r, e._data, t, n);
        }),
        (LPProxy.saveFormFill = function (e, r, t, n, o) {
          var e = e.getPostData(r, null, t);
          (e.cmd = r.cmd = "edit"), bg.addeditformfill(e, r, n, o);
        }),
        (LPProxy.getShareInfo = function (t) {
          var n = null;
          return (
            $.each(bg.get("g_shares"), function (e, r) {
              if (r.id === t) return (n = r), !1;
            }),
            n
          );
        }),
        function (e) {
          for (var r in e) {
            var r = e[r],
              t = r._model.getGroupParentName(),
              t;
            t && void 0 !== (t = e[t]) && null === r._parent && (t._subGroups.push(r), r.setParent(t));
          }
        }),
      K = function () {
        var e = {},
          r;
        for (r in E) e[r] = E[r].newDisplayObject();
        return e;
      },
      a,
      f =
        ((LPProxy.getImage = function (e, r) {
          var t = !0,
            n = e._model.getURL(),
            r =
              (void 0 !== e._model._data.aid &&
                "string" == typeof e._model._data.aid &&
                "sso_" === e._model._data.aid.substr(0, 4) &&
                void 0 !== e._model._data.acs &&
                (n = e._model._data.acs),
              r && r.useSquareIcon ? bg.getbigicon(n, "sq") : bg.getbigicon(n));
          return null === r && ((t = !1), (r = bg.geticonurlfromrecord(e._model._data, !0))), (e.bigImg = t), r;
        }),
        (LPProxy.hasReceivedShares =
          ((a = function (e) {
            for (var r in e) if (e[r].isReceivedShare()) return !0;
            return !1;
          }),
          function () {
            return 0 < bg.get("g_pendings").length || a(c) || a(y);
          })),
        (LPProxy.getPendingRecievedShares = function () {
          var e = [];
          if (LPTools.hasProperties(S))
            if (bg.get("rsaprivatekeyhex")) {
              var r = 0,
                t;
              for (t in S)
                try {
                  e.push(S[t].newDisplayObject());
                } catch (e) {
                  ++r;
                }
              0 < r && Topics.get(Topics.ERROR).publish(Strings.translateString("%d Pending Shares could not be decrypted.", r));
            } else Topics.get(Topics.ERROR).publish(Strings.translateString("No private key. Cannot decrypt Pending Shares."));
          return e;
        }),
        (LPProxy.getPendingRecievedShare = function (e) {
          return S[e];
        }),
        (LPProxy.getEmergencyAccessRecipientModels = function () {
          var e = [],
            r;
          for (r in T) e.push(T[r]);
          return e;
        }),
        (LPProxy.getEmergencyAccessRecipientModel = function (e) {
          return T[e];
        }),
        (LPProxy.assignItemsToGroups = function (e, r) {
          var t = K();
          r = void 0 === r || r;
          for (var n = 0, o = e.length; n < o; ++n) {
            var a = e[n],
              i = a._model._data.group || Strings.Consts.NONE_GROUP,
              s = t[i];
            if (void 0 === s) {
              for (var c = LPProxy.addDummyGroups(a._model, !1), u = 0, g = c.length; u < g; ++u) {
                var l = c[u];
                t[l.getName()] = l.newDisplayObject();
              }
              s = t[i];
            }
            s._items.push(a), a.setParent(s);
          }
          j(t);
          var d = [],
            P;
          for (P in t) {
            var f = t[P];
            f._destructed || (r || 0 !== f.getItemChildren().length ? null === f._parent && d.push(f) : f.destruct());
          }
          return d;
        }),
        function (e, o) {
          var a = null,
            i = (null !== e && ((a = bg.get("g_identity")), void 0 !== e) && (a = e.getID()), null);
          return (
            null !== a &&
              $.each(bg.get("g_identities"), function (e, r) {
                if (r.iid === a) {
                  i = {};
                  for (var t = r[o].split(","), n = 0; n < t.length; ++n) i[t[n]] = !0;
                  return !1;
                }
              }),
            i
          );
        }),
      p = function (e, r, t) {
        return !r || (r[e] && !t) || (void 0 === r[e] && t);
      },
      c =
        ((LPProxy.getAllModelItems = function () {
          return LPTools.objectsToArray(c, y, L);
        }),
        (LPProxy.getAllModelTypes = function () {
          var r = [];
          return (
            this.getAllModelItems().forEach(function (e) {
              var e = e.getRecordType();
              -1 === r.indexOf(e) && r.push(e);
            }),
            r
          );
        }),
        (LPProxy.getAllSharedGroupModelsByID = function () {
          return $.extend({}, b);
        }),
        (LPProxy.getAllItems = function (e) {
          var r = LPProxy.getSites(e).concat(LPProxy.getNotes(e)).concat(LPProxy.getApplications(e)),
            t = !0,
            r = (e && e.identity instanceof Identity && (t = e.identity instanceof AllIdentity), LPProxy.assignItemsToGroups(r, t));
          return LPFeatures.allowOmarIA() ? r : r.concat(LPProxy.getFormFills(e));
        }),
        (LPProxy.getApplicationModel = function (e) {
          return v[e];
        }),
        (LPProxy.getApplications = function (e) {
          return F(v, "appaids", e);
        }),
        {}),
      y = {},
      L = {},
      v = {},
      b = {},
      x = {},
      S = {},
      _ = {},
      T = {},
      E = {},
      A = !1,
      k = function (e) {
        return e instanceof Account
          ? c
          : e instanceof Note
          ? y
          : e instanceof FormFill
          ? L
          : e instanceof Application
          ? v
          : e instanceof SharedGroup
          ? b
          : e instanceof Group
          ? x
          : "undefined" != typeof PendingReceivedSharedItem && e instanceof PendingReceivedSharedItem
          ? S
          : "undefined" != typeof EmergencyAccessRecipient && e instanceof EmergencyAccessRecipient
          ? T
          : "undefined" != typeof EmergencyAccessSharer && e instanceof EmergencyAccessSharer
          ? _
          : void 0;
      },
      I,
      V =
        ((LPProxy.removeItem = function (e) {
          var r = k(e);
          r && delete r[e.getID()], e instanceof Group && delete E[e.getName()];
        }),
        (LPProxy.addItem = function (e) {
          var r = k(e);
          r && (r[e.getID()] = e), e instanceof Group && (E[e.getName()] = e);
        }),
        (LPProxy.getExistingGroupParent = function (e) {
          for (; 0 < e.length; ) {
            if (void 0 !== E[e]) return E[e];
            e = e.substring(0, e.lastIndexOf("\\"));
          }
          return null;
        }),
        (LPProxy.addDummyGroups =
          ((I = function (e, r, t, n) {
            var e = new e(r, n);
            return (void 0 !== t && !t) || (E[e.getName()] = e), e;
          }),
          function (e, r) {
            var t = e.getSharedGroup(),
              n = e._data.group,
              o = [];
            if ((e instanceof DummyGroup && (E[e.getName()] = e), n)) {
              var a = -1;
              do {
                var a = n.indexOf("\\", a + 1),
                  i = n.substring(0, -1 === a ? n.length : a),
                  s;
              } while ((void 0 === E[i] && o.push(I(DummyGroup, i, r, t)), -1 < a));
            } else void 0 === E[Strings.Consts.NONE_GROUP] && o.push(I(DefaultGroup, Strings.Consts.NONE_GROUP, r));
            return o;
          })),
        (LPProxy.clearModel = function () {
          (c = {}), (y = {}), (L = {}), (v = {}), (x = {}), (b = {}), (E = {}), (S = {}), (_ = {}), (A = !(T = {}));
        }),
        function (e) {
          var r = bg.get_personal_linked(),
            t = bg.get_personal_linked_needs_verification(),
            n =
              ((r
                ? Topics.get(Topics.ACCOUNT_LINKED)
                : t
                ? Topics.get(Topics.ACCOUNT_LINKED_NEEDS_VERIFICATION)
                : Topics.get(Topics.ACCOUNT_UNLINKED)
              ).publish(),
              {}),
            o = LPPlatform.getBackgroundData(bg.get("g_sites")),
            a;
          for (a in o) {
            var i = o[a],
              s,
              c;
            "http://group" === i.url &&
              i.sharefolderid === a &&
              ((s = LPProxy.getShareInfo(a)),
              (c = b[a]),
              a === r
                ? ((c = c ? c.refresh(i, s) : new LinkedGroup(i, s)), (u = c))
                : (c = s.linkedshare
                    ? c
                      ? c.refresh(i, s)
                      : new LinkedSharedGroup(i, s)
                    : e[i.group]
                    ? c
                      ? c.refresh(i, s)
                      : new EmergencyAccessGroup(i, s)
                    : e[i.group.substring(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX.length)]
                    ? ((i.group = i.group.substring(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX.length)),
                      c ? c.refresh(i, s) : new EmergencyAccessGroup(i, s))
                    : c
                    ? c.refresh(i, s)
                    : new SharedGroup(i, s)),
              (b[a] = c),
              (n[a] = !0));
          }
          R(b, n), w(b);
        }),
      q = function () {
        var e = {},
          r = {},
          t = LPPlatform.getBackgroundData(bg.get("g_sites")),
          n;
        for (n in t) {
          var o = t[n],
            a = b[o.sharefolderid],
            i,
            i,
            i;
          "http://group" === o.url
            ? (void 0 === a || (!(a instanceof LinkedSharedGroup) && -1 < o.group.indexOf("\\"))) &&
              ((i = (i = x[n]) ? i.refresh(o, a) : new Group(o, a)), (x[n] = i), (r[n] = !0))
            : ((i = c[n]), (c[n] = i ? i.refresh(o, a) : new Account(o, a)), (e[n] = !0));
        }
        R(c, e), R(x, r), w(x), C(x), C(c);
      },
      R = function (e, r) {
        for (var t in e) {
          var t;
          void 0 === r[t] && ((t = e[t]).deleteUpdates(!1), (t.removed = !0));
        }
      },
      w = function (e) {
        for (var r in e) {
          var r = e[r];
          E[r.getName()] = r;
        }
      },
      C = function (e) {
        for (var r in e) LPProxy.addDummyGroups(e[r]);
      },
      H = function () {
        var e = {},
          r = LPPlatform.getBackgroundData(bg.get("g_securenotes")),
          t = LPPlatform.getBackgroundData(bg.get("lp_attaches")),
          n;
        for (n in r) {
          var o = r[n],
            a = [];
          if ("1" === o.attachpresent && t)
            for (var i = 0, s = t.length; i < s; ++i) {
              var c = t[i];
              c.parent === o.aid && a.push(new Attachment(c));
            }
          var u = b[o.sharefolderid],
            g = y[n];
          (y[n] = g ? g.refresh(o, u, a) : new Note(o, u, a)), (e[n] = !0);
        }
        R(y, e), C(y);
      },
      W = function () {
        var e = {},
          r = LPPlatform.getBackgroundData(bg.get("g_applications")),
          t;
        for (t in r) {
          var n = r[t],
            o = v[t],
            a = b[n.sharefolderid];
          (v[t] = o ? o.refresh(n, a) : new Application(n, a)), (e[t] = !0);
        }
        R(v, e), C(v);
      },
      X = function () {
        var e = {},
          r = LPPlatform.getBackgroundData(bg.get("g_formfills"));
        if (r) {
          for (var t = 0, n = r.length; t < n; ++t) {
            var o = r[t],
              a = o.ffid,
              i = L[a],
              s = b[o.sharefolderid];
            (L[a] = i ? i.refresh(o, s) : new FormFill(o, s)), (e[a] = !0);
          }
          R(L, e);
        }
      },
      Y = function () {
        var e = {},
          r = LPPlatform.getBackgroundData(bg.get("g_pendings"));
        if ("undefined" != typeof PendingReceivedSharedItem)
          for (var t = 0, n = r.length; t < n; ++t) {
            var o = r[t],
              a = o.id,
              i = S[a];
            (S[a] = i ? i.refresh(o) : new PendingReceivedSharedItem(o)), (e[a] = !0);
          }
        R(S, e);
      },
      z = function () {
        var e = {},
          r = LPPlatform.getBackgroundData(bg.get("g_emer_sharees"));
        if (r && "undefined" != typeof EmergencyAccessRecipient)
          for (var t = 0, n = r.length; t < n; ++t) {
            var o = r[t],
              a = o.username,
              i = T[a];
            (T[a] = i ? i.refresh(o) : new EmergencyAccessRecipient(o)), (e[a] = !0);
          }
        R(T, e);
      },
      Q = function () {
        var e = {},
          r = {},
          t = LPPlatform.getBackgroundData(bg.get("g_emer_sharers"));
        if (t && "undefined" != typeof EmergencyAccessSharer)
          for (var n = 0, o = t.length; n < o; ++n) {
            var a = t[n],
              i = a.username,
              s = _[i];
            (_[i] = s = s ? s.refresh(a) : new EmergencyAccessSharer(a)), (e[i] = !0), s.allowedAccess() && (r[s.getName()] = !0);
          }
        return R(_, e), r;
      },
      J = function () {
        A = LPPlatform.getBackgroundData(bg.get("RecordTypeConfig"));
      },
      F =
        ((LPProxy.initializeModel = function () {
          E = {};
          var e = Q();
          z(), V(e), q(), H(), W(), X(), Y(), J(), bg.refreshGroupNames();
        }),
        (LPProxy.getModel = function (e, r) {
          switch (r) {
            case "Account":
              return LPProxy.getSiteModel(e);
            case "Note":
              return LPProxy.getNoteModel(e);
            case "FormFill":
              return LPProxy.getFormFillModel(e);
            case "Application":
              return LPProxy.getApplicationModel(e);
          }
        }),
        (LPProxy.getGroups = function () {
          return LPTools.objectsToArray(E);
        }),
        (LPProxy.getGroupByName = function (e) {
          return E[e];
        }),
        function (e, r, t) {
          var n = LPTools.getOption(t, "identity", void 0),
            o = LPTools.getOption(t, "filter", f(n, r)),
            a = LPTools.getOption(t, "invertIdentity", !1) || LPTools.getOption(t, "invertFilter", !1),
            i = [],
            s;
          if (o && !a)
            for (var s in o) {
              p(s, o, a) && (s = e[s]) && i.push(s.newDisplayObject());
            }
          else for (var c in e) p(c, o, a) && i.push(e[c].newDisplayObject());
          return i;
        }),
      D =
        ((LPProxy.getSiteModel = function (e) {
          return c[e];
        }),
        (LPProxy.getSiteModels = function (e) {
          var r, r, r;
          return e
            ? ((r = LPPlatform.getBackgroundData(bg.get("g_sites"))),
              (r = (r = bg.reorderOnURL(r, e))
                .filter(function (e) {
                  return "group" !== e.tld;
                })
                .map(function (e) {
                  return c[e.aid];
                })),
              LPTools.objectsToArray(r))
            : LPTools.objectsToArray(c);
        }),
        (LPProxy.getSite = function (e) {
          var e = c[e];
          return e ? e.newDisplayObject() : null;
        }),
        (LPProxy.getSites = function (e) {
          return F(c, "aids", e);
        }),
        (LPProxy.getSiteUsernames = function () {
          var e = {},
            r;
          for (r in c) e[c[r].getUsername()] = !0;
          var t = [],
            n;
          for (n in e) n && t.push(n);
          return t;
        }),
        (LPProxy.getNoteModel = function (e) {
          return y[e];
        }),
        (LPProxy.getNote = function (e) {
          var e = y[e];
          return e ? e.newDisplayObject() : null;
        }),
        (LPProxy.getNotes = function (e) {
          return F(y, "aids", e);
        }),
        (LPProxy.getRecordConfig = function () {
          return A || J(), A;
        }),
        (LPProxy.getConfigViewObject = function (e) {
          for (var r = this.getRecordConfig(), t = 0; t < r.views.length; t++) if (e === r.views[t].id) return r.views[t];
          throw new TypeError("View Not Found");
        }),
        (LPProxy.getConfigTypeObject = function (e) {
          for (var r = this.getRecordConfig(), t = 0; t < r.types.length; t++) if (e === r.types[t].id) return r.types[t];
          throw new TypeError("Type id not found: [ " + e + " ]");
        }),
        (LPProxy.getConfigTypeObjectByNoteType = function (e) {
          if (e) {
            var r = this.getRecordConfig();
            this.getCustomTemplateIdFromNoteType(e) && (e = "Custom");
            for (var t = 0; t < r.types.length; t++) if (e === r.types[t].recordType) return r.types[t];
          }
          throw new TypeError("Note type not found: [ " + e + " ]");
        }),
        (LPProxy.getCustomTemplateIdFromNoteType = function (e) {
          if (e) {
            var e = e.match(/^Custom_(\d+)$/);
            if (e && 2 == e.length) return e[1];
          }
          return null;
        }),
        (LPProxy.getItemsByShareID = function (e) {
          for (var r = [], t = LPProxy.getAllModelItems(), n = 0, o = t.length; n < o; ++n) {
            var a = t[n];
            a.getShareID() === e && r.push(a);
          }
          return r;
        }),
        (LPProxy.getFormFillModel = function (e) {
          return L[e];
        }),
        (LPProxy.getFormFillModels = function () {
          return LPTools.objectsToArray(L);
        }),
        (LPProxy.getModelCount = function () {
          return LPTools.objectsToArray(c).length + LPTools.objectsToArray(L).length + LPTools.objectsToArray(y).length;
        }),
        (LPProxy.getFormFill = function (e) {
          var e = L[e];
          return e ? e.newDisplayObject() : null;
        }),
        (LPProxy.getFormFills = function (e) {
          var r = [],
            t = LPTools.getOption(e, "identity", void 0),
            n = LPTools.getOption(e, "filter", f(t, "ffids")),
            o = LPTools.getOption(e, "invertIdentity", !1),
            a;
          for (a in L) {
            var i = L[a];
            p(a, n, o) && r.push(new FormFillDisplay(i));
          }
          return r;
        }),
        (LPProxy.getIdentities = function () {
          var t = [new AllIdentity()];
          return (
            $.each(bg.get("g_identities"), function (e, r) {
              var r = new Identity(r);
              t.push(r);
            }),
            t
          );
        }),
        (LPProxy.enableCurrentIdentity = function (e) {
          for (var r, t = 0, n = e.length; t < n; ++t) {
            var o = e[t];
            if (o.getID() === bg.get("g_identity")) return void o.enable({ reprompt: !1 });
            o instanceof AllIdentity && (r = o);
          }
          r.enable({ reprompt: !1 });
        }),
        (LPProxy.enableIdentity = function (e) {
          bg.lpevent("v_cid"), bg.switch_identity(e._data.iid, !0);
        }),
        (LPProxy.getAccountClass = function () {
          var e,
            r = "1" == bg.get("g_iscompanyadmin"),
            t = !!bg.get("g_enterpriseuserrole"),
            n = "1" == bg.get("g_enterpriseuser"),
            o = bg.get("g_premium_exp") > LPTools.get_gmt_timestamp(),
            a = "1" == bg.get("g_is_premium_trial"),
            i = +bg.get("g_enterprisemodel");
          if (r)
            switch (i) {
              case 2:
                return Constants.USER_FAMILY_ADMIN;
              case 1:
                return Constants.USER_TEAMS_ADMIN;
              default:
                return Constants.USER_ENTERPRISE_ADMIN;
            }
          else {
            if (t && 0 == i) return Constants.USER_ENTERPRISE_ROLE;
            if (n)
              switch (i) {
                case 2:
                  return Constants.USER_FAMILY;
                case 1:
                  return Constants.USER_TEAMS;
                default:
                  return Constants.USER_ENTERPRISE;
              }
            else {
              if (o) return Constants.USER_PREMIUM;
              if (a) return Constants.USER_PREMIUM_TRIAL;
            }
          }
          return Constants.USER_FREE;
        }),
        (LPProxy.getRoleName = function () {
          return bg.get("g_enterpriseuserrole");
        }),
        (LPProxy.getUser = function () {
          return new User(bg.get("g_username"), LPProxy.getAccountClass(), this.getIdentities(), LPProxy.getRoleName());
        }),
        (LPProxy.isFreeUser = function () {
          return LPProxy.getAccountClass() === Constants.USER_FREE;
        }),
        (LPProxy.isExpiredUser = function () {
          var e, r;
          if ("object" == typeof reduxApp && "function" == typeof reduxApp.getState)
            return -1 !== reduxApp.getState().user.type.indexOf("Expired");
        }),
        (LPProxy.isPremiumUser = function () {
          return LPProxy.getAccountClass() === Constants.USER_PREMIUM;
        }),
        (LPProxy.isPremiumTrialUser = function () {
          return LPProxy.getAccountClass() === Constants.USER_PREMIUM_TRIAL;
        }),
        (LPProxy.isLegacyPremium = function () {
          return "1" == bg.get("g_is_legacy_premium");
        }),
        (LPProxy.isPremiumAsAPerk = function () {
          return "1" == bg.get("g_is_premium_as_a_perk");
        }),
        (LPProxy.isFamiliesTrialStarted = function () {
          return "1" == bg.get("g_is_families_trial_started");
        }),
        (LPProxy.predatesFamilies = function () {
          return "1" == bg.get("g_predates_families");
        }),
        (LPProxy.seenVaultPostFamilies = function () {
          return "1" == bg.get("g_seen_vault_post_families");
        }),
        (LPProxy.isEligibleForLegacySharedFolders = function () {
          return LPProxy.isLegacyPremium() && LPProxy.isFamilyUser();
        }),
        (LPProxy.isMFAOnly = function () {
          return "1" == bg.get("g_enterpriseoffering");
        }),
        (LPProxy.isIdentity = function () {
          return "3" == bg.get("g_enterpriseoffering");
        }),
        (LPProxy.isAdmin = function () {
          var e = LPProxy.getAccountClass();
          return e === Constants.USER_ENTERPRISE_ADMIN || e === Constants.USER_TEAMS_ADMIN || e === Constants.USER_FAMILY_ADMIN;
        }),
        (LPProxy.getFamilyMemberType = function () {
          return bg.get("g_is_company_owner") ? "owner" : LPProxy.getAccountClass() === Constants.USER_FAMILY_ADMIN ? "admin" : "member";
        }),
        (LPProxy.isFamilyOwner = function () {
          return bg.get("g_is_company_owner");
        }),
        (LPProxy.isEnterpriseUser = function () {
          var e;
          return (
            !LPProxy.isMFAOnly() &&
            ((e = LPProxy.getAccountClass()) === Constants.USER_ENTERPRISE ||
              e === Constants.USER_ENTERPRISE_ADMIN ||
              e === Constants.USER_ENTERPRISE_ROLE ||
              e === Constants.USER_TEAMS ||
              e === Constants.USER_TEAMS_ADMIN)
          );
        }),
        (LPProxy.isFamilyUser = function () {
          var e = LPProxy.getAccountClass();
          return e === Constants.USER_FAMILY || e === Constants.USER_FAMILY_ADMIN;
        }),
        (LPProxy.isExpiredFamilyUser = function () {
          return LPProxy.isFamilyUser() && LPProxy.isExpiredCompanyUser();
        }),
        (LPProxy.isExpiredCompanyUser = function () {
          return bg.get("g_is_company_subscription_expired");
        }),
        (LPProxy.setCompanyExpiration = function () {
          (LPProxy.isFamilyUser() || LPProxy.isEnterpriseUser()) &&
            null === bg.get("g_is_company_subscription_expired") &&
            bg.BackgroundServer.licensing.isCompanyExpired(function (e) {
              bg.BackgroundServer.licensing.setCompanyExpired(e);
            });
        }),
        (LPProxy.getCreditMonitoringData = function (e, r) {
          var t = LPProxy.getBaseURL() + "getCreditMonitoringData.php";
          LPPlatform.ajax({ url: t, dataType: "text", success: N(r, e), error: g(r) });
        }),
        (LPProxy.getReceivedShareData = function (e) {
          bg.BackgroundServer.sharing.individual.getReceivedShareData(e);
        }),
        (LPProxy.getSharedFolderData = function (e) {
          bg.BackgroundServer.sharing.folder.getFolders(e);
        }),
        (LPProxy.getSentShareData = function (e) {
          bg.BackgroundServer.sharing.individual.getSentShareData(e);
        }),
        null),
      U,
      Z,
      ee,
      re,
      te,
      ne,
      oe,
      ae,
      ie,
      se,
      ce =
        ((LPProxy.getToken = function (r, e) {
          if (void 0 === r) return D;
          null !== D
            ? r(D)
            : LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "getCSRFToken.php",
                data: { token: D },
                success: function (e) {
                  r((D = e));
                },
                error: g(e)
              });
        }),
        (LPProxy.convertLegacySharedFolder = e(function (e, r, t) {
          LPPlatform.ajax({
            type: "POST",
            url: LPProxy.getBaseURL() + "share.php",
            data: { movetolegacypremium: 1, id: e.params.shareId, token: D },
            dataType: "text",
            success: l(e.error, { folderconverted: e.success }),
            error: g(e.error)
          });
        })),
        (LPProxy.deleteIdentity = function (e) {
          bg.BackgroundServer.identities.remove(e);
        }),
        (LPProxy.addIdentity = function (e) {
          bg.BackgroundServer.identities.add(e);
        }),
        (LPProxy.saveIdentity = function (e) {
          bg.BackgroundServer.identities.update(e);
        }),
        (LPProxy.import = function (e) {
          bg.lpevent("v_i"), bg.openimport(e);
        }),
        (LPProxy.export = function () {
          bg.lpevent("v_e"), bg.openexport();
        }),
        (LPProxy.openAllFavorites = function (e) {
          bg.lpevent("v_of"), bg.openfavorites(!1, e);
        }),
        (LPProxy.openBookmarklets = function () {
          bg.lpevent("v_bk"), LPProxy.callAcctsIFrameCommand("bookmarklets");
        }),
        (LPProxy.openHistory = function () {
          bg.lpevent("v_his"), LPProxy.callAcctsIFrameCommand("history");
        }),
        (LPProxy.reprompt =
          ((U = function (e, r, t) {
            var n = new Date().getTime(),
              o = bg.Preferences.get("reprompttime"),
              a = bg.Preferences.get("lastreprompttime");
            a < n && n - a <= 1e3 * o ? e() : Topics.get(Topics.REPROMPT).publish(e, t);
          }),
          (Z = function (e) {
            if (e) {
              for (var r = 0, t = (e = e instanceof Array ? e : [e]).length; r < t; ++r) if (bg.get("g_prompts")[e[r]]) return !0;
              return !1;
            }
            return !0;
          }),
          function (e, r) {
            if (Z(LPTools.getOption(r, "types", null))) {
              if ("function" == typeof bg.singlefactor_reprompt)
                return (
                  bg.singlefactor_reprompt(function () {
                    U(e, r);
                  }, e),
                  !0
                );
              U(e, r);
            } else e();
            return !1;
          })),
        (LPProxy.callAcctsIFrameCommand = function (e, r, t) {
          bg.unlock_plug2web(),
            Topics.get(Topics.DIALOG_LOADING).publish(),
            (t = $.extend({}, t, { rand: 1e3 * Math.random(), command: e, version: LPProxy.getVersion(), newvault: 1 })),
            r && (t.commandid = r),
            bg.get_method_async(function (e) {
              (t.method = e),
                LPPlatform.openAcctsIframe(t, function () {
                  Topics.get(Topics.DIALOG_LOADED).publish();
                });
            });
        }),
        (LPProxy.getDeletedItems =
          ((ee = function (e, r) {
            for (var t = 0, n = e.length; t < n; ++t) {
              var o = e[t];
              (o.url = bg.AES.hex2url(o.url)), "http://group" !== o.url && r.push(new Account(o).newDisplayObject());
            }
          }),
          (re = function (e, r) {
            for (var t = 0, n = e.length; t < n; ++t) r.push(new Note(e[t]).newDisplayObject());
          }),
          (te = function (e, r) {
            for (
              var t = [],
                n = [],
                e =
                  ((e = atob(e)),
                  bg.parsemobile(
                    e,
                    e.length,
                    -1,
                    0,
                    null,
                    t,
                    n,
                    null,
                    null,
                    null,
                    null,
                    null,
                    !0,
                    !1,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    [],
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ),
                  []),
                o = (ee(t, e), re(n, e), LPProxy.assignItemsToGroups(e, !1)),
                a = 0,
                i = o.length;
              a < i;
              ++a
            )
              o[a].setDeleted();
            r(o);
          }),
          function (r, e) {
            var t = LPProxy.getBaseURL() + "getaccts.php",
              n = { mobile: 1, b64: 1, shap: 1 };
            (n.u = bg.get("g_username_hash")),
              (n.only_deleted = 1),
              LPPlatform.ajax({
                type: "POST",
                url: t,
                data: n,
                dataType: "text",
                success: function (e) {
                  te(e, r);
                },
                error: g(e)
              });
          })),
        (LPProxy.getSharedFolderMembers = function (e) {
          bg.BackgroundServer.sharing.folder.getMembers(e);
        }),
        (LPProxy.restoreDeletedItems = e(function (e, r, t, n) {
          var e = { src: "website", fromwebsite: 1, ajax: 1, extjs: 1, undelete: 1, aid: i(e), token: D };
          r && (e.sharedfolderid = r),
            LPPlatform.ajax({
              type: "POST",
              url: LPProxy.getBaseURL() + "show_website.php",
              data: e,
              dataType: "text",
              success: l(n, { accountundeleted: t, reload: t }),
              error: g(n)
            });
        })),
        (LPProxy.purgeDeletedItems = e(function (e, r, t, n) {
          var e = { src: "website", fromwebsite: 1, ajax: 1, extjs: 1, purgeext: 1, aid: i(e), token: D };
          r && (e.sharedfolderid = r),
            LPPlatform.ajax({
              type: "POST",
              url: LPProxy.getBaseURL() + "show_website.php",
              data: e,
              dataType: "text",
              success: l(n, { accountpurged: t }),
              error: g(n)
            });
        })),
        (LPProxy.removeSharedFolderMember = function (e) {
          bg.BackgroundServer.sharing.folder.removeMember(e);
        }),
        (LPProxy.getPublicKeys =
          ((ne = {
            emptyGroups: function (e) {
              dialogs.alert.open({
                title: Strings.translateString("An error occurred. Please try again later."),
                text: [
                  Strings.translateString("The following user groups are empty and cannot be added."),
                  Strings.translateString("Please try again once users have been added."),
                  LPTools.buildDialogItemContainer(e)
                ]
              });
            }
          }),
          function (e) {
            bg.BackgroundServer.sharing.folder.getPublicKeys($.extend(!0, e, { callbacks: ne }));
          })),
        (LPProxy.addSharedFolderMembers =
          ((oe = {
            invite: n,
            noSharingKeyUsers: function (e) {
              for (var r = LPTools.createElement("ul", "bulletList"), t = 0, n = e.length; t < n; ++t) {
                var o = e[t],
                  o = o instanceof SharedFolderUser ? o.getName() : o;
                r.appendChild(LPTools.createElement("li", null, o));
              }
              dialogs.alert.open({
                title: Strings.translateString("No Sharing Support"),
                text: [
                  Strings.translateString("The following users do not currently have sharing keys."),
                  Strings.translateString(
                    "They can generate sharing keys by logging into LastPass via the LastPass Internet Explorer, Firefox, or Google Chrome browser extensions, or by logging into the website and clicking on the Generate Sharing Keys link."
                  ),
                  Strings.translateString("Once they do that this Shared Folder will become accessible to them."),
                  r
                ]
              });
            },
            emptyGroups: function (e) {
              for (var r = [], t = 0, n = e.length; t < n; ++t) {
                var o = new SharedFolderUserGroup({ name: e[t] });
                (o._pending = !0), r.push(o);
              }
              dialogs.alert.open({
                title: Strings.translateString("An error occurred. Please try again later."),
                text: [
                  Strings.translateString("The following user groups are empty and cannot be added."),
                  Strings.translateString("Please try again once users have been added."),
                  LPTools.buildDialogItemContainer(r)
                ]
              });
            }
          }),
          function (e) {
            bg.BackgroundServer.sharing.folder.addMembers($.extend(!0, e, { callbacks: oe }));
          })),
        (LPProxy.createSharedFolder =
          ((ae = { sharingkeyrequired: s }),
          function (e) {
            bg.BackgroundServer.sharing.folder.create($.extend(!0, e, { callbacks: ae }));
          })),
        (LPProxy.deleteSharedFolder = function (e) {
          bg.BackgroundServer.sharing.folder.remove(e);
        }),
        (LPProxy.createCreditMonitoringProfile = e(function (e, r, t) {
          var n = { cmd: "enroll", xml: 1, ffid: e.getID(), token: D };
          $.extend(
            n,
            e.getFormData({
              firstname: !0,
              lastname: !0,
              birthday: !0,
              ssn: !0,
              address1: !0,
              address2: !0,
              address3: !0,
              city: !0,
              state: !0,
              country: !0,
              zip: !0,
              phone: !0
            })
          ),
            LPPlatform.ajax({
              type: "POST",
              url: LPProxy.getBaseURL() + "creditmon.php",
              data: n,
              dataType: "text",
              success: l(t, {
                1: function () {
                  Topics.get(Topics.SUCCESS).publish(Strings.translateString("Enrolled in credit monitoring.")),
                    Topics.get(Topics.ENROLLED_CREDIT_MONITORING).publish(),
                    r();
                },
                "": function (e) {
                  t(e.attr("reason2"));
                }
              }),
              error: g(t)
            });
        })),
        (LPProxy.sendVerificationEmail = e(function (e, r, t) {
          LPPlatform.ajax({
            type: "POST",
            url: LPProxy.getBaseURL() + "settings.php",
            data: { testemail: 1, email: e, extra: "verifysharing", token: D },
            success: r,
            error: g(t)
          });
        })),
        (LPProxy.revertPasswordChange = function () {
          bg.BackgroundServer.vault.history.revertPasswordChange.apply(this, arguments);
        }),
        (LPProxy.getPasswordHistory = function () {
          bg.BackgroundServer.vault.history.getPasswordHistory.apply(this, arguments);
        }),
        (LPProxy.getUsernameHistory = function () {
          bg.BackgroundServer.vault.history.getUsernameHistory.apply(this, arguments);
        }),
        (LPProxy.getNoteHistory = function () {
          bg.BackgroundServer.vault.history.getNoteHistory.apply(this, arguments);
        }),
        (LPProxy.getSecurityChallengeScore = function (e) {
          bg.get_securityChallengeScore(e);
        }),
        (LPProxy.getSharedFolderRestrictions = function (e) {
          bg.BackgroundServer.sharing.folder.getRestrictions(e);
        }),
        (LPProxy.updateSharedFolderRestrictions = function (e) {
          bg.BackgroundServer.sharing.folder.updateRestrictions(e);
        }),
        (LPProxy.unlinkAccount = e(function (e) {
          LPProxy.removeLinkedAccountInIe(),
            LPPlatform.ajax({
              type: "POST",
              url: LPProxy.getBaseURL() + "share.php",
              data: { unlink: 1, uid: e.params.id, token: D },
              dataType: "text",
              success: l(e.error, { ok: e.success }),
              error: g(e.error)
            });
        })),
        (LPProxy.linkAccount =
          ((ie = M(function (e, r, t, n, o, a, i, s) {
            var c = new bg.RSAKey(),
              s = (LPProxy.parsePublicKey(c, s.pubkey), c.encrypt(bg.AES.bin2hex(r))),
              c = { id: 0, update: 1, link: 1, xml: 1 };
            (c.token = e.attr("token")),
              (c.newusername = o.linkedEmail),
              (c.newhash = t),
              (c.sharekey = s),
              (c.sharename = LPProxy.encryptWithKey(o.linkedEmail, r)),
              (c.name = o.linkedEmail),
              (c.uid = e.attr("uid")),
              (c.linkvalid = 1),
              LPPlatform.ajax({
                type: "POST",
                url: LPProxy.getBaseURL() + "share.php",
                data: c,
                dataType: "text",
                success: l(i, { ok: a }),
                error: g(i)
              });
          })),
          (se = function (r, t, n, o, a, i) {
            var e = { verifylink: 1, outofbandsupported: 1, outofbandrequest: 0, outofbandretry: 0, xml: 1 },
              s =
                ((e.username = o.linkedEmail),
                (e.hash = t),
                (e.iterations = n),
                function (e) {
                  ie(e, r, t, n, o, a, i);
                });
            LPPlatform.ajax({
              type: "POST",
              url: LPProxy.getBaseURL() + "login.php",
              data: e,
              dataType: "text",
              success: l(i, { ok: s }),
              error: g(i)
            });
          }),
          function (n, o, a) {
            bg.make_lp_key_hash(n.linkedEmail, n.linkedPassword, function (e, r, t) {
              se(e, r, t, n, o, a);
            });
          })),
        (LPProxy.refreshSites = function () {
          return bg.refreshsites();
        }),
        (LPProxy.removeLinkedAccountInIe = function () {
          "function" == typeof bg.removeLinkedAccount && bg.removeLinkedAccount();
        }),
        (LPProxy.getLinkedAccount = function () {
          return u;
        }),
        (LPProxy.updateSharedFolderMemberPermissions = function (e) {
          bg.BackgroundServer.sharing.folder.updateMemberPermissions(e);
        }),
        (LPProxy.startDownloadingFolder = function (e) {
          bg.BackgroundServer.sharing.folder.startDownloading(e);
        }),
        (LPProxy.stopDownloadingFolder = function (e) {
          bg.BackgroundServer.sharing.folder.stopDownloading(e);
        }),
        function (e, r, t, n, o) {
          var t = r.getFieldPostData(t, !0),
            e = ((t.aid = r.getID()), (t.auto = 1), (t[e] = 1), $.param(t)),
            t = r.getShareInfo(),
            a = "";
          t && (a = $.param({ sharedfolderid: t.id })), bg.saveFields(e, a, { aid: r.getID() }, n, o);
        }),
      ue =
        ((LPProxy.addField = function (e, r, t, n) {
          ce("add", e, r, t, n);
        }),
        (LPProxy.deleteField = function (e, r, t, n) {
          ce("delete", e, r, t, n);
        }),
        (LPProxy.autoChangePassword = function (e) {
          bg.sendLpImprove("auto_change_password_click"), bg.editAid(e, null, null, "1");
        }),
        (LPProxy.getPreference = function (e, r) {
          return bg.Preferences.get(e, r);
        }),
        (LPProxy.setPreferences = function (e, r) {
          bg.Preferences.set(e, r);
        }),
        (LPProxy.fillSite = function (e) {
          bg.LPPlatform.fill(e.getID());
        }),
        (LPProxy.fillProfile = function (e, r) {
          bg.lpevent("m_ff"), bg.fillform(e.getID(), null, null, null, null, null, r);
        }),
        (LPProxy.openAll = function (e) {
          for (var r = [], t = 0, n = e.length; t < n; ++t) {
            var o = e[t];
            o instanceof Account && r.push(o._data);
          }
          bg.openAllSites(r);
        }),
        (LPProxy.getDomain = function (e) {
          return bg.lp_gettld_url(e);
        }),
        (LPProxy.addToFavorites = e(function (e, r, t) {
          var e = i(e);
          LPPlatform.ajax({
            type: "POST",
            url: LPProxy.getBaseURL() + "groups.php",
            data: { aids: e, newfavaids: e, token: D, xml: 1 },
            dataType: "text",
            success: l(t, { ok: r }),
            error: g(t)
          });
        })),
        (LPProxy.restoreDeletedSharedFolder = function (e) {
          bg.BackgroundServer.sharing.folder.restoreDeleted(e);
        }),
        (LPProxy.purgeDeletedSharedFolder = function (e) {
          bg.BackgroundServer.sharing.folder.purgeDeleted(e);
        }),
        function (e) {
          for (var r = [], t = 0, n = e.length; t < n; ++t) r.push(e[t].getID());
          return r;
        }),
      ge,
      le,
      de,
      Pe,
      fe,
      pe;
    (LPProxy.changePasswords = function (e) {
      bg.changePassword(e.params.password, ue(e.params.items), !1, e.success, e.error);
    }),
      (LPProxy.inviteFriends =
        ((ge = {
          problems: function (e) {
            dialogs.alert.open({ title: Strings.Vault.ERROR, text: e });
          }
        }),
        function (e) {
          bg.BackgroundServer.sharing.individual.inviteFriends($.extend(!0, e, { callbacks: ge }));
        })),
      (LPProxy.updateEmergencyAccessRecipient =
        ((le = {
          enterprise: function (e, r) {
            r.error(Strings.translateString("Sorry, LastPass Enterprise users can not act as emergency contacts."));
          }
        }),
        function (e) {
          (e.callbacks = le), bg.BackgroundServer.emergencyAccess.updateRecipient(e);
        })),
      (LPProxy.addEmergencyAccessRecipient =
        ((de = {
          invite: n,
          nosharingkeys: function (e, r) {
            r.error(Strings.translateString("User is missing sharing keys, please ask them to login to become an emergency contact."));
          }
        }),
        function (e) {
          (e.callbacks = de), bg.BackgroundServer.emergencyAccess.addRecipient(e);
        })),
      (LPProxy.revokeEmergencyAccessOffer = function (e) {
        bg.BackgroundServer.emergencyAccess.removeRecipient(e);
      }),
      (LPProxy.getEmergencyAccessRecipientInfo =
        ((Pe = function (e) {
          for (var r = [], t = 0, n = e.length; t < n; ++t) {
            var o = e[t],
              a;
            o.username &&
              ((a = T[o.username]) ? a.refresh(o) : ((a = new EmergencyAccessRecipient(o)), LPProxy.addItem(a)),
              r.push(a.newDisplayObject()));
          }
          return r;
        }),
        function (r, e) {
          bg.BackgroundServer.emergencyAccess.getRecipientInfo({
            params: { email: bg.get("g_username") },
            success: function (e) {
              r(Pe(e));
            },
            error: e
          });
        })),
      (LPProxy.getEmergencyAccessSharerInfo =
        ((fe = function (e) {
          for (var r = [], t = 0, n = e.length; t < n; ++t) {
            var o = e[t],
              a;
            o.username &&
              ((a = _[o.username]) ? a.refresh(o) : ((a = new EmergencyAccessSharer(o)), LPProxy.addItem(a)), r.push(a.newDisplayObject()));
          }
          return r;
        }),
        e(function (r, e) {
          bg.BackgroundServer.emergencyAccess.getSharerInfo({
            success: function (e) {
              r(fe(e));
            },
            error: e
          });
        }))),
      (LPProxy.acceptEmergencyAccessOffer = function (e) {
        bg.BackgroundServer.emergencyAccess.acceptOffer(e);
      }),
      (LPProxy.declineEmergencyAccessOffer = function (e) {
        bg.BackgroundServer.emergencyAccess.declineOffer(e);
      }),
      (LPProxy.requestEmergencyAccess =
        ((pe = {
          linked: function (e, r) {
            r.error(Strings.translateString("This account is already linked"));
          },
          denied: function (e, r) {
            r.error(Strings.translateString("You do not have permission to link this account"));
          },
          successLinked: function (e, r) {
            Topics.get(Topics.SUCCESS).publish(Strings.translateString("Access granted")), r.success(e);
          },
          successGranted: function (e, r) {
            Topics.get(Topics.SUCCESS).publish(
              Strings.translateString("Access will be granted on %s", new EmergencyAccessSharer(e).getAccessDateAsString())
            ),
              r.success(e);
          }
        }),
        function (e) {
          (e.callbacks = pe), bg.BackgroundServer.emergencyAccess.requestAccess(e);
        })),
      (LPProxy.unlinkEmergencyAccessAccount = function (e) {
        bg.BackgroundServer.emergencyAccess.unlinkAccount(e);
      }),
      (LPProxy.denyEmergencyAccess = function (e) {
        bg.BackgroundServer.emergencyAccess.denyAccess(e);
      }),
      (LPProxy.getVersion = function () {
        return bg.lpversion || bg.get("lpversion");
      }),
      (LPProxy.generateSharingKeys = function (r) {
        bg.generateSharingKeysFromVault(function (e) {
          e
            ? Topics.get(Topics.ERROR).publish(Strings.translateString(e))
            : Topics.get(Topics.SUCCESS).publish(Strings.translateString("Sharing keys generated.")),
            r();
        });
      }),
      (LPProxy.uploadSharingKeysWeb = function (e, r, t, n) {
        bg.uploadSharingKeysWeb(e, r, t, n);
      }),
      (LPProxy.deleteCreditMonitoringAlert = e(function (e, r, t) {
        LPPlatform.ajax({
          type: "POST",
          url: LPProxy.getBaseURL() + "creditmon.php",
          dataType: "text",
          data: { src: "website", cmd: "deletealert", id: e, token: D, _dc: new Date().getTime() },
          success: l(t, { ok: r }),
          error: g(t)
        });
      })),
      (LPProxy.getSiteMeta = function (e, r, t) {
        bg.LPServer.jsonRequest({ type: "GET", url: "typeahead_addsite.php", data: { q: e }, success: r, error: t });
      }),
      (LPProxy.getFamilyMembers = function (e) {
        bg.BackgroundServer.families.getMembers(e);
      }),
      (LPProxy.getCustomNoteTemplates = function () {
        return bg.get("g_note_templates");
      }),
      (LPProxy.getCustomNoteTemplate = function (r) {
        return LPProxy.getCustomNoteTemplates().find(function (e) {
          return e.id == r;
        });
      }),
      (LPProxy.familiesExistingUserTrial = function (e) {
        bg.BackgroundServer.families.existingUserTrial(e);
      }),
      (LPProxy.saveCustomNoteTemplate = function (e) {
        bg.BackgroundServer.sitesAndNotes.saveCustomNoteTemplate(e);
      }),
      (LPProxy.deleteCustomNoteTemplate = function (e) {
        bg.BackgroundServer.sitesAndNotes.deleteCustomNoteTemplate(e);
      }),
      (LPProxy.getFamiliesInvitations = function (e) {
        bg.BackgroundServer.families.getInvitations(e);
      }),
      (LPProxy.dismissInvitation = function (e) {
        bg.BackgroundServer.invitation.dismissInvitation(e);
      }),
      (LPProxy.acceptInvitation = function (e) {
        bg.BackgroundServer.invitation.acceptInvitation(e);
      }),
      (LPProxy.sendMobileDownload = function (e) {
        bg.BackgroundServer.transact.sendMobileDownload(e);
      });
  })();
