(LPServer.sharing = LPServer.sharing || {}),
  (LPServer.sharing.folder = (function () {
    {
      var c = "share.php",
        s = "companyuser",
        o = "Shared-",
        l = 5e3,
        n = function (e, r) {
          r.success(e, { sharedFolder: r.params.sharedFolder, shareInfo: r.params.shareInfo });
        },
        p = function (e, r, a) {
          if (0 < r.length) {
            e.adminuidcnt = r.length;
            for (var s = 0, n = r.length; s < n; ++s) {
              var t = r[s],
                d = new LPServer.ext.RSAKey();
              LPServer.ext.parsePublicKey(d, t.key),
                (e["adminsharekey" + s] = d.encrypt(LPServer.ext.bin2hex(a))),
                (e["adminuid" + s] = t.uid);
            }
          }
        },
        t =
          ((d = function (e) {
            var r = [];
            if (e.groupname) for (var a = e.groupname.split(","), s = 0, n = a.length; s < n; ++s) r.push(a[s]);
            return r;
          }),
          (r = {
            nouser: function (e, r) {
              r.error && r.error(""), LPServer.callback(r, "invite", { emails: e.unknownusers.split(",") });
            },
            default: (e = function (e, r) {
              if (e.success) {
                for (var a = [], s = 0; void 0 !== e["pubkey" + s]; )
                  a.push({ username: e["username" + s], uid: e["uid" + s], cgid: e["cgid" + s], pubkey: e["pubkey" + s] }), ++s;
                var n = d(e);
                0 < n.length && LPServer.callback(r, "emptyGroups", n), r.success(a);
              } else r.error();
            }),
            emptygroup: e,
            noshareerr: function (e, r) {
              r.error(LPServer.ext.translate("Sorry, company policy prohibits use of this feature."));
            }
          }),
          function (e) {
            LPServer.jsonRequest({
              url: c,
              data: {
                getpubkey: 1,
                uid: "string" == typeof e.params.userInfo ? e.params.userInfo : JSON.stringify(e.params.userInfo),
                jsonr: 1
              },
              callbacks: r,
              userSupplied: e
            });
          }),
        d,
        e,
        r,
        e = function (e) {
          LPServer.jsonRequest({ url: "getSharedFolderMembers.php", data: { shareid: e.params.shareid }, userSupplied: e });
        },
        a =
          ((m = function (e, r) {
            var a = new LPServer.ext.RSAKey();
            return LPServer.ext.parsePublicKey(a, r), a.encrypt(LPServer.ext.bin2hex(e));
          }),
          (f = function (e, r) {
            for (var a in r) {
              var s = r[a];
              if ("group" === s.type && e.cgid === s.uid) return a;
            }
            return null;
          }),
          (i = function (e, r) {
            for (
              var a = {
                  id: r.params.shareInfo.id,
                  update: 1,
                  add: 1,
                  sharename: r.params.shareInfo.sharename,
                  name: r.params.shareInfo.name,
                  readonly: r.params.readonly ? 1 : 0,
                  give: r.params.hidePasswords ? 0 : 1,
                  notify: r.params.notify ? 1 : 0,
                  canadminister: r.params.can_administer ? 1 : 0,
                  xmlr: 1
                },
                s = r.params.newMembers || {},
                n = 0,
                t = 0,
                d = [],
                i = {},
                u = 0;
              u < e.length;
              u++
            ) {
              var o = e[u],
                l = o.username;
              (s[l] && void 0 !== s[l]) || (s[l] = {}),
                (o.readOnly = "object" == typeof s && s[l].readOnly ? 1 : a.readonly),
                (o.canAdminister = "object" == typeof s && s[l].canAdminister ? 1 : a.canadminister),
                (o.give = "object" != typeof s || s[l].hidePasswords || void 0 === s[l].hidePasswords ? a.give : 1),
                o.pubkey
                  ? ((a["sharekey" + n] = m(r.params.shareInfo.key, o.pubkey)),
                    (a["username" + n] = l),
                    (a["cgid" + n] = o.cgid),
                    (a["readonly" + n] = o.readOnly),
                    (a["canadminister" + n] = o.canAdminister),
                    (a["give" + n] = o.give),
                    ++n)
                  : ((a["msfusername" + t] = l),
                    (a["msfcgid" + t] = o.cgid),
                    (a["msfreadonly" + t] = o.readOnly),
                    (a["msfcanadminister" + t] = o.canAdminister),
                    (a["msfgive" + t] = o.give),
                    d.push(l),
                    ++t),
                (i[f(o, s) || l] = !0);
            }
            var p = n + t;
            0 < p
              ? LPServer.xmlRequest({
                  url: c,
                  data: a,
                  callbacks: {
                    useradded: function (e, r) {
                      p <= 6 && 0 < d.length && LPServer.callback(r, "noSharingKeyUsers", d),
                        r.success(LPServer.ext.translate("%d users/groups were invited.", Object.keys(i).length), i);
                    }
                  },
                  userSupplied: r
                })
              : r.error();
          }),
          function (r) {
            t(
              LPServer.extend({}, r, {
                params: { userInfo: r.params.newMembers },
                success: function (e) {
                  i(e, r);
                }
              })
            );
          }),
        m,
        f,
        i,
        u =
          ((h = {
            ok: function (e, r) {
              var a = LPServer.getAttr(e, "id");
              (r.params.sharedFolder.aid = a),
                (r.params.shareInfo.id = a),
                (r.params.shareInfo.shareid = a),
                (r.params.shareInfo.uid = LPServer.getAttr(e, "uid")),
                n(LPServer.ext.translate("Shared Folder %s created.", r.params.sharedFolder.group), r);
            },
            exceededlimit: function (e, r) {
              r.error(
                LPServer.ext.translate(
                  "Sorry, as a premium user, you are limited to one Shared Folder. Please consider using LastPass Enterprise if you would like more."
                )
              );
            },
            premiumrequired: function (e, r) {
              r.error(LPServer.ext.translate("Sorry, LastPass Premium is required to create a Shared Family Folder"));
            },
            alreadyexists: function (e, r) {
              r.error(LPServer.ext.translate("That folder already exists."));
            }
          }),
          (S = function (e, r) {
            for (var a, s = 0, n, t, d, i, u, i; s < e.length; s++) e[s].username === r.params.username && (a = e[s].pubkey);
            a
              ? ((n = r.params.sharedFolder),
                (t = r.params.shareInfo = r.params.shareInfo || {}),
                (d = {
                  id: 0,
                  update: 1,
                  newusername: r.params.username + "-" + n.group,
                  name: 0 === n.group.indexOf(o) ? n.group.substring(o.length) : n.group,
                  xmlr: 1
                }),
                (i = LPServer.ext.makeRandomPassword()),
                (u = t.key = LPServer.ext.makeKey(d.newusername, i, l)),
                (d.newhash = LPServer.ext.makeHash(u, i, l)),
                (i = new LPServer.ext.RSAKey()),
                LPServer.ext.parsePublicKey(i, a),
                (d.sharekey = t.sharekey = i.encrypt(LPServer.ext.bin2hex(u))),
                (d.sharename = t.sharename = LPServer.ext.encryptCBC(n.group, u)),
                p(d, r.params.superusers, u),
                LPServer.xmlRequest({ url: c, data: d, callbacks: h, userSupplied: r }))
              : (LPServer.callback(r, "sharingkeyrequired"), r.error && r.error(""));
          }),
          (v = function (e, r) {
            var a = {};
            (a[r.params.username] = { uid: r.params.uid, type: s }),
              (r.params.superusers = e),
              t(
                LPServer.extend({}, r, {
                  params: { userInfo: a },
                  success: function (e) {
                    S(e, r);
                  }
                })
              );
          }),
          function (e) {
            LPServer.jsonRequest({ url: "getSuperUserInfo.php", success: v, userSupplied: e });
          }),
        h,
        S,
        v,
        P =
          ((g = {
            ok: function (e, r) {
              n(LPServer.ext.translate("Shared Folder %s was renamed.", r.params.shareInfo.name), r);
            }
          }),
          function (e) {
            (e.params.shareInfo.name = e.params.sharedFolder.group.substring(o.length)),
              (e.params.shareInfo.sharename = LPServer.ext.encryptCBC(e.params.sharedFolder.group, e.params.shareInfo.key)),
              LPServer.xmlRequest({
                url: c,
                data: {
                  update: 1,
                  rename: 1,
                  id: e.params.shareInfo.id,
                  name: e.params.shareInfo.name,
                  sharename: e.params.shareInfo.sharename,
                  xmlr: 1
                },
                callbacks: g,
                userSupplied: e
              });
          }),
        g,
        L =
          ((y = function (e, r) {
            (r.params.shareInfo.deleted = "1"), n(LPServer.ext.translate("Shared Folder deleted."), r);
          }),
          function (e) {
            LPServer.xmlRequest({
              url: c,
              data: { id: e.params.shareInfo.id, delete: 1, xmlr: 1 },
              callbacks: { deleted: y },
              userSupplied: e
            });
          }),
        y,
        E,
        x,
        D,
        _;
      x = function (e, r) {
        r.success(LPServer.ext.translate("Member removed."));
      };
    }
    b = function (e, r) {
      r.success(LPServer.ext.translate("Permissions saved."));
    };
    var C,
      b,
      k = function (e, r, a) {
        var s = { id: r.params.shareInfo.id, xmlr: 1 };
        (s[e] = 1), LPServer.xmlRequest({ url: c, data: s, callbacks: a, userSupplied: r });
      },
      U,
      I,
      N,
      R,
      B,
      w,
      H,
      F,
      J,
      q,
      T,
      j,
      G,
      A,
      X,
      M,
      Y,
      K,
      O;
    return (
      (I = function (e, r) {
        (r.params.shareInfo.download = "1"), n(LPServer.ext.translate("Shared Folder will now be downloaded."), r);
      }),
      (R = function (e, r) {
        (r.params.shareInfo.download = "0"), n(LPServer.ext.translate("Shared Folder will no longer be downloaded."), r);
      }),
      (w = {
        undeleted: function (e, r) {
          (r.params.shareInfo.deleted = "0"), n(LPServer.ext.translate("Shared Folder restored."), r);
        }
      }),
      (F = {
        purged: function (e, r) {
          r.success(LPServer.ext.translate("Shared Folder purged."));
        }
      }),
      (q = function (e, r) {
        r.success(e.folders);
      }),
      (j = {
        success: function (e, r) {
          (r.params.shareInfo.accepted = "1"), n(LPServer.ext.translate("Shared Folder accepted."), r);
        }
      }),
      (A = {
        success: function (e, r) {
          r.success(LPServer.ext.translate("Shared Folder rejected."));
        }
      }),
      (M = {
        success: function (e, r) {
          r.success(LPServer.ext.translate("Shared Folder member reinvited."));
        }
      }),
      (K = {
        success: function (e, r) {
          (r.params.shareInfo.cid = LPServer.getAttr(e, "cid")),
            (r.params.shareInfo.outside_enterprise = LPServer.getAttr(e, "outside_enterprise")),
            n(LPServer.ext.translate("Personal Shared Folder moved into Enterprise. You can now adminster the folder."), r);
        }
      }),
      (O = function (e, r) {
        var a = { id: r.params.shareInfo.id, moveintoenterprise: 1, xmlr: 1 };
        p(a, e, r.params.shareInfo.key), LPServer.xmlRequest({ url: c, data: a, callbacks: K, userSupplied: r });
      }),
      {
        SHARED_FOLDER_NAME_PREFIX: o,
        getFolders: function (e) {
          LPServer.jsonRequest({ url: "getSharedFolderInfo.php", success: q, userSupplied: e });
        },
        getPublicKeys: t,
        create: u,
        rename: P,
        remove: L,
        accept: function (e) {
          LPServer.jsonRequest({
            url: c,
            data: { folder: e.params.shareInfo.id, acceptfolder: 1, jsonr: 1 },
            callbacks: j,
            userSupplied: e
          });
        },
        reject: function (e) {
          LPServer.jsonRequest({ url: c, data: { id: e.params.shareInfo.id, rejectfolder: 1, jsonr: 1 }, callbacks: A, userSupplied: e });
        },
        addMembers: a,
        getMembers: e,
        removeMember: function (e) {
          var r = { id: e.params.shareid, xmlr: 1 };
          e.params.msfuser ? ((r.msfdelete = 1), (r.msfuser = e.params.uid)) : ((r.update = 1), (r.delete = 1), (r.uid = e.params.uid)),
            LPServer.xmlRequest({ url: c, data: r, callbacks: { ok: x }, userSupplied: e });
        },
        reinviteMember: function (e) {
          var r = { reinvite: 1, invitee: e.params.uid, folder: e.params.shareid, jsonr: 1 };
          "1" === e.params.ent && (r.ent = "on"), LPServer.jsonRequest({ url: c, data: r, callbacks: M, userSupplied: e });
        },
        updateMemberPermissions: function (e) {
          LPServer.xmlRequest({
            url: "editSharedFolderUsers.php",
            data: { cmd: "edit", xml: 1, shareid: e.params.shareInfo.id, request: JSON.stringify(e.params.updatedPermissions) },
            callbacks: { ok: b },
            userSupplied: e
          });
        },
        getRestrictions: function (e) {
          LPServer.jsonRequest({ url: "getSharedFolderRestrictions.php", data: e.params, userSupplied: e });
        },
        updateRestrictions: function (e) {
          LPServer.textRequest({
            url: c,
            data: {
              id: e.params.shareid,
              edit: 1,
              limit: 1,
              aids: e.params.aids,
              numaids: 0 < e.params.aids.length ? e.params.aids.split(",").length : 0,
              additionaluids: e.params.additionaluids,
              additionalgroupids: e.params.additionalgroupids,
              hidebydefault: e.params.hidebydefault ? 1 : 0,
              uid: e.params.uid,
              xmlr: 1
            },
            success: function () {
              e.success(LPServer.ext.translate("Access restrictions updated."));
            },
            userSupplied: e
          });
        },
        startDownloading: function (e) {
          k("startdownloading", e, { ok: I });
        },
        stopDownloading: function (e) {
          k("stopdownloading", e, { ok: R });
        },
        restoreDeleted: function (e) {
          LPServer.xmlRequest({ url: c, data: { id: e.params.shareInfo.id, undelete: 1, xmlr: 1 }, callbacks: w, userSupplied: e });
        },
        purgeDeleted: function (e) {
          LPServer.xmlRequest({ url: c, data: { id: e.params.shareInfo.id, purge: 1, xmlr: 1 }, callbacks: F, userSupplied: e });
        },
        convertToEnterprise: function (e) {
          LPServer.jsonRequest({ url: "getSuperUserInfo.php", success: O, userSupplied: e });
        }
      }
    );
  })());
