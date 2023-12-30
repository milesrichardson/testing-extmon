BackgroundServer = (function (e) {
  LPServer.initialize(e, {
    ajax: function (e) {
      e.data && (e.data.method = get_method()), LPPlatform.ajax(e);
    }
  });
  var s = function (e) {
      return function () {
        e.apply(this, arguments), increment_local_accts_version(), rewritelocalfile();
      };
    },
    r = function (e, s, r) {
      s instanceof Array ? s.push(e) : (s[e[r]] = e);
    },
    n = s(r),
    t = function (e, s, r) {
      if (s instanceof Array) {
        for (var i = 0, n = s.length; i < n; ++i)
          if (e[r] === s[i][r]) {
            s[i] = e;
            break;
          }
      } else s[e[r]] = e;
    },
    i = s(t),
    a = function (e, s, r) {
      if (e instanceof Array) {
        for (var i = 0, n = e.length; i < n; ++i)
          if (r === e[i][s]) {
            e.splice(i, 1);
            break;
          }
      } else delete e[s];
    },
    c = s(a),
    o = function (e, s, r) {
      if (!(e instanceof Array)) return e[s];
      for (var i = 0, n = e.length; i < n; ++i) if (r === e[i][s]) return e[i];
    };
  return {
    emergencyAccess: {
      updateRecipient: function (s) {
        var r = s.success;
        (s.success = function (e) {
          i(s.params.recipient, g_emer_sharees, "username"), r(s.params.recipient);
        }),
          LPServer.emergencyAccess.updateRecipient(s);
      },
      addRecipient: function (s) {
        var r = s.success;
        (s.success = function (e) {
          n(s.params.recipient, g_emer_sharees, "username"), r(s.params.recipient);
        }),
          LPServer.emergencyAccess.addRecipient(s);
      },
      removeRecipient: function (e) {
        (e.success = LPServer.extendCallback(e.success, function () {
          c(g_emer_sharees, "username", e.params.id);
        })),
          LPServer.emergencyAccess.removeRecipient(e);
      },
      getRecipientInfo: function (e) {
        LPServer.emergencyAccess.getRecipientInfo(e);
      },
      getSharerInfo: function (e) {
        LPServer.emergencyAccess.getSharerInfo(e);
      },
      acceptOffer: function (s) {
        var r = s.success;
        (s.success = function () {
          var e = s.params.sharer;
          (e.accepted = "1"), i(e, g_emer_sharers, "username"), r(e);
        }),
          LPServer.emergencyAccess.acceptOffer(s);
      },
      declineOffer: function (e) {
        (e.success = LPServer.extendCallback(e.success, function () {
          c(g_emer_sharers, "username", e.params.email);
        })),
          LPServer.emergencyAccess.declineOffer(e);
      },
      requestAccess: function (e) {
        e.callbacks = e.callbacks || {};
        var i = e.callbacks.successLinked,
          n =
            ((e.callbacks.successLinked = function (e, s) {
              var r = s.params.sharer;
              (r.confirmed = "1"), (r.allowed_access = "1"), (r.linked = "1"), (r.override_date = new Date()), refreshsites(), i && i(r, s);
            }),
            e.callbacks.successGranted);
        (e.callbacks.successGranted = function (e, s) {
          var r = s.params.sharer;
          (r.confirmed = "1"),
            (r.override_date = new Date()),
            r.override_date.setTime(r.override_date.getTime() + 60 * r.hours_to_override * 60 * 1e3),
            n && n(r, s);
        }),
          LPServer.emergencyAccess.requestAccess(e);
      },
      denyAccess: function (s) {
        (s.success = LPServer.extendCallback(s.success, function () {
          var e = o(g_emer_sharees, "username", s.params.email);
          (e.confirmed = "0"), (e.allowed_access = "0");
        })),
          LPServer.emergencyAccess.denyAccess(s);
      },
      unlinkAccount: function (r) {
        (r.success = LPServer.extendCallback(
          r.success,
          s(function () {
            if (r.params.folderID) delete g_sites[r.params.folderID];
            else
              for (var e in g_sites) {
                var s = g_sites[e];
                if ("http://group" === s.url && s.group === r.params.email) {
                  delete g_sites[e];
                  break;
                }
              }
          })
        )),
          LPServer.emergencyAccess.unlinkAccount(r);
      },
      updateShareeKey: function (e, s) {
        if (!e) throw new Error("No sharee ID was provided!");
        var r;
        LPServer.emergencyAccess.updateShareeKey([{ userId: e, encryptedVaultKey: s, keyUpdated: "" }]);
      }
    },
    identities: {
      add: function (r) {
        var i = r.success;
        (r.success = function (e) {
          var s = r.params.identity;
          (s.iid = LPServer.getAttr(e, "iid", "")), n(s, g_identities, "iid"), i(s);
        }),
          LPServer.identities.add(r);
      },
      remove: function (e) {
        (e.success = LPServer.extendCallback(e.success, function () {
          c(g_identities, "iid", e.params.id);
        })),
          LPServer.identities.remove(e);
      },
      update: function (s) {
        var r = s.success;
        (s.success = function () {
          var e = s.params.identity;
          i(e, g_identities, "iid"), r(e);
        }),
          LPServer.identities.update(s);
      }
    },
    vault: {
      history: {
        revertPasswordChange: function () {
          LPServer.vault.history.revertPasswordChange.apply(this, arguments);
        },
        getPasswordHistory: function () {
          LPServer.vault.history.getPasswordHistory.apply(this, arguments);
        },
        getUsernameHistory: function () {
          LPServer.vault.history.getUsernameHistory.apply(this, arguments);
        },
        getNoteHistory: function () {
          LPServer.vault.history.getNoteHistory.apply(this, arguments);
        }
      }
    },
    sharing: {
      individual: {
        shareItems: function (e) {
          LPServer.sharing.individual.shareItems(e);
        },
        unshareItem: function (e) {
          LPServer.sharing.individual.unshareItem(e);
        },
        acceptShare: function (e) {
          (e.success = LPServer.extendCallback(e.success, function () {
            refreshsites();
          })),
            LPServer.sharing.individual.acceptShare(e);
        },
        rejectShare: function (e) {
          (e.success = LPServer.extendCallback(e.success, function () {
            c(g_pendings, "id", e.params.id);
          })),
            LPServer.sharing.individual.rejectShare(e);
        },
        inviteFriends: function (e) {
          LPServer.sharing.individual.inviteFriends(e);
        },
        getSentShareData: function (e) {
          LPServer.sharing.individual.getSentShareData(e);
        },
        getReceivedShareData: function (e) {
          LPServer.sharing.individual.getReceivedShareData(e);
        }
      },
      folder: {
        getFolders: function (e) {
          LPServer.sharing.folder.getFolders(e);
        },
        getPublicKeys: function (e) {
          LPServer.sharing.folder.getPublicKeys(e);
        },
        create: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              (s.shareInfo.sharekeyaes = lpmenc(AES.bin2hex(s.shareInfo.key), !0, g_local_key)),
                (s.sharedFolder.sharefolderid = s.sharedFolder.aid),
                r(s.shareInfo, g_shares, "id"),
                r(s.sharedFolder, g_sites, "aid");
            })
          )),
            (e.params.username = g_username),
            LPServer.sharing.folder.create(e);
        },
        rename: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              t(s.shareInfo, g_shares, "id"), t(s.sharedFolder, g_sites, "aid");
            })
          )),
            LPServer.sharing.folder.rename(e);
        },
        remove: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              for (var r in (t(s.shareInfo, g_shares, "id"), g_sites)) {
                var i;
                g_sites[r].sharefolderid === s.shareInfo.id && delete g_sites[r];
              }
            })
          )),
            LPServer.sharing.folder.remove(e);
        },
        accept: function (e) {
          (e.success = LPServer.extendCallback(e.success, function () {
            a(g_pending_shares, "id", e.params.shareInfo.id), refreshsites();
          })),
            LPServer.sharing.folder.accept(e);
        },
        reject: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function () {
              a(g_pending_shares, "id", e.params.shareInfo.id);
            })
          )),
            LPServer.sharing.folder.reject(e);
        },
        addMembers: function (e) {
          LPServer.sharing.folder.addMembers(e);
        },
        getMembers: function (e) {
          LPServer.sharing.folder.getMembers(e);
        },
        removeMember: function (e) {
          LPServer.sharing.folder.removeMember(e);
        },
        reinviteMember: function (e) {
          LPServer.sharing.folder.reinviteMember(e);
        },
        updateMemberPermissions: function (e) {
          LPServer.sharing.folder.updateMemberPermissions(e);
        },
        getRestrictions: function (e) {
          LPServer.sharing.folder.getRestrictions(e);
        },
        updateRestrictions: function (e) {
          LPServer.sharing.folder.updateRestrictions(e);
        },
        startDownloading: function (e) {
          (e.success = LPServer.extendCallback(e.success, function (e, s) {
            refreshsites();
          })),
            LPServer.sharing.folder.startDownloading(e);
        },
        stopDownloading: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              for (var r in (t(s.shareInfo, g_shares, "id"), g_sites)) {
                var i;
                g_sites[r].sharefolderid === s.shareInfo.id && delete g_sites[r];
              }
            })
          )),
            LPServer.sharing.folder.stopDownloading(e);
        },
        restoreDeleted: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              t(s.shareInfo, g_shares, "id"), refreshsites();
            })
          )),
            LPServer.sharing.folder.restoreDeleted(e);
        },
        purgeDeleted: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function () {
              a(g_shares, "id", e.params.shareid), a(g_sites, "aid", e.params.shareid);
            })
          )),
            LPServer.sharing.folder.purgeDeleted(e);
        },
        convertToEnterprise: function (e) {
          (e.success = LPServer.extendCallback(
            e.success,
            s(function (e, s) {
              t(s.shareInfo, g_shares, "id"), t(s.sharedFolder, g_sites, "aid");
            })
          )),
            LPServer.sharing.folder.convertToEnterprise(e);
        }
      }
    },
    sitesAndNotes: {
      saveCustomNoteTemplate: function (e) {
        (e.success = LPServer.extendCallback(
          e.success,
          s(function (e, s) {
            r(s, g_note_templates, "id");
          })
        )),
          LPServer.sitesAndNotes.saveCustomNoteTemplate(e);
      },
      deleteCustomNoteTemplate: function (r) {
        (r.success = LPServer.extendCallback(
          r.success,
          s(function (e, s) {
            a(g_note_templates, "id", r.params.id);
          })
        )),
          LPServer.sitesAndNotes.deleteCustomNoteTemplate(r);
      }
    },
    transact: {
      sendReminder: function (e) {
        LPServer.transact.sendReminder(e);
      },
      sendMobileDownload: function (e) {
        LPServer.jsonRequest({
          url: "lmiapi/transact/mobile-download",
          method: "POST",
          data: e.params,
          success: e.success,
          error: e.error
        });
      }
    },
    families: {
      getMembers: function (e) {
        LPServer.jsonRequest({ url: "typeahead_remote.php", method: "GET", success: e.success, error: e.error });
      },
      existingUserTrial: function (e) {
        LPServer.lmiapi.jsonRequest({
          url: "lmiapi/families/trial/existing-user",
          method: "POST",
          data: e.params,
          userSupplied: { error: e.error },
          success: function () {
            refreshsites();
          }
        });
      },
      getInvitations: function (e) {
        LPServer.lmiapi.jsonRequest({ url: "lmiapi/families/invitations", type: "GET", success: e.success, userSupplied: e });
      }
    },
    licensing: {
      getCompanyLicensing: function (e) {
        LPServer.lmiapi.jsonRequest({
          type: "GET",
          url: "teams-api/my-company/showlicensing",
          success: e,
          callbacks: { TrialExpired: e, Expired: e }
        });
      },
      isCompanyExpired: function (e) {
        LPServer.lmiapi.jsonRequest({ type: "GET", url: "lmiapi/my-company/is-expired", success: e });
      },
      setCompanyExpired: function (e) {
        g_is_company_subscription_expired = e;
      }
    },
    invitation: {
      acceptInvitation: function (e) {
        LPServer.lmiapi.jsonRequest({
          url: "lmiapi/invitations/" + e.params.invitationId + "/accept",
          type: "POST",
          success: function () {
            refreshsites();
          },
          userSupplied: e
        });
      },
      dismissInvitation: function (e) {
        LPServer.lmiapi.jsonRequest({
          url: "lmiapi/invitations/" + e.params.invitationId + "/dismiss",
          type: "POST",
          success: e.success,
          userSupplied: e
        });
      }
    },
    aurora: {
      oneClickSignupUrls: null,
      getOneClickSignupUrls: function (s) {
        var e = this.oneClickSignupUrls;
        e
          ? setTimeout(function () {
              s.success(e);
            }, 0)
          : LPServer.lmiapi.jsonRequest({
              url: "lmiapi/environment-config",
              type: "GET",
              success: function (e) {
                var e = e && e.oneClickSignupUrls;
                (BackgroundServer.aurora.oneClickSignupUrls = e), s.success(e);
              }
            });
      }
    }
  };
})(this);
