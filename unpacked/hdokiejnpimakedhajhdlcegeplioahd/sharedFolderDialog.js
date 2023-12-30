var SharedFolderDialog = function (e) {
  var t = { additionalHeaderClasses: ["icon"], closeButtonEnabled: !0, maximizeButtonEnabled: !0, buttonAlign: this.RIGHT_ALIGN };
  Dialog.call(this, e, t), (this.existingUsers = null), (this.folder = null);
};
(SharedFolderDialog.prototype = Object.create(Dialog.prototype)),
  (SharedFolderDialog.prototype.constructor = SharedFolderDialog),
  (function (r) {
    (SharedFolderDialog.prototype.initialize = function (e) {
      var n, t, r;
      Dialog.prototype.initialize.apply(this, arguments),
        (n = this),
        (t = document.getElementById("sharedFolderDialogUserTypeahead")),
        LPProxy.isEnterpriseUser()
          ? ((r = new BloodhoundDropdown(
              t,
              {
                identify: function (e) {
                  return "group" === e.type ? e.cgid : e.uid;
                },
                remote: { url: LPProxy.getBaseURL() + "typeahead_remote.php?grp=1&q=%QUERY&checkemails=1", wildcard: "%QUERY" }
              },
              {
                optionLabel: function (e) {
                  var t = e.name;
                  return (
                    "companyuser" === e.type
                      ? "" === t
                        ? (t = e.email)
                        : "" !== e.email && (t += " (" + e.email + ")")
                      : (t += " (" + Strings.Vault.USER_GROUP + ")"),
                    t
                  );
                },
                ignore: function (e, t) {
                  return n.existingUsers[e] || void 0 === t.type;
                }
              }
            )).onChange(function (e, t) {
              e = $.extend({}, e);
              var r = SharedFolderUser,
                r =
                  ("group" === e.type && ((e.uid = e.cgid), delete e.cgid, (r = SharedFolderUserGroup)),
                  (e.username = e.email),
                  delete e.email,
                  new r(e, n.folder));
              (r._pending = !0), n.addNewUser(r), (n.existingUsers[t] = !0);
            }),
            (n.inputFields.friends = r))
          : (n.inputFields.friends = r = new TypeaheadDropdown(t)),
        LPProxy.isFamilyUser() ? $("#sharedFolderDialogDisclaimer").show() : $("#sharedFolderDialogDisclaimer").hide(),
        (r.autocomplete = function (e) {
          var t = e.target.value;
          if (null === this.hint && t) {
            for (var r = n.parseFriendsInput(t), i = 0, s = r.length; i < s; ++i) n.addNewUser(r[i]);
            e.preventDefault();
          }
          TypeaheadDropdown.prototype.autocomplete.apply(this, arguments);
        }),
        Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).subscribe(function (e) {
          delete n.existingUsers[e.getID()], n.showHideInviteInput();
        }),
        $("#sharedFolderDialogInviteButton").bind("click", function () {
          n.submit();
        });
    }),
      (SharedFolderDialog.prototype.parseFriendsInput = function (e) {
        for (var t = [], r = e.split(","), i = 0, s = r.length; i < s; ++i) {
          var n = r[i].trim(),
            a,
            o,
            o,
            a;
          -1 < n.indexOf("@")
            ? (o = n.match(Constants.EmailAddressRegularExpression)) &&
              1 === o.length &&
              ((o = o[0]), (a = new SharedFolderUser({ username: o }, this.folder)))
            : n && (a = new SharedFolderUserGroup({ name: n }, this.folder)),
            a && ((a._pending = !0), a.setEditable(!0), t.push(a));
        }
        return t;
      }),
      (SharedFolderDialog.prototype.validate = function (e) {
        var t = Dialog.prototype.validate.apply(this, arguments);
        return (
          e.friends &&
            0 === this.parseFriendsInput(e.friends).length &&
            (this.addError("friends", Strings.translateString("You must enter a valid email or group name.")), (t = !1)),
          t
        );
      }),
      (SharedFolderDialog.prototype.defaultFields = function (e) {
        (e.defaultData = $.extend({ readonly: !0, hidePasswords: !0 }, e.defaultData)), Dialog.prototype.defaultFields.call(this, e);
      }),
      (SharedFolderDialog.prototype.addNewUser = function (e) {
        this.containers.newMembers ||
          ((this.containers.newMembers = new Container([], { additionalItemClasses: "dialogItem" })),
          this.containers.newMembers.initialize(document.getElementById("sharedFolderDialogNewUsersContainer"))),
          this.containers.newMembers.addChild(e),
          this.inputFields.friends.clear(),
          this.inputFields.friends.focus();
      }),
      (SharedFolderDialog.prototype.setup = function (e, t) {
        Dialog.prototype.setup.apply(this, arguments),
          this.containers.existingMembers &&
            (this.containers.existingMembers.initialize(r.getElementById("folderMembers")), this.showHideInviteInput());
      }),
      (SharedFolderDialog.prototype.showHideInviteInput = function () {
        LPProxy.isEnterpriseUser() ||
          (5 < this.containers.existingMembers.getItemChildren().length
            ? ($("#sharedFolderMaxMembers").show(), $("#sharedFolderDialogInvites").hide())
            : ($("#sharedFolderMaxMembers").hide(), $("#sharedFolderDialogInvites").show()));
      }),
      (SharedFolderDialog.prototype.open = function (s) {
        var n;
        (this.folder = s),
          (n = this),
          LPRequest.makeDataRequest(LPProxy.getSharedFolderMembers, {
            params: { shareid: s.getID() },
            success: function (e) {
              for (var t = [], r = 0, i = e.users.length; r < i; ++r) t.push(new SharedFolderUser(e.users[r], s));
              for (var r = 0, i = e.groups.length; r < i; ++r) t.push(new SharedFolderUserGroup(e.groups[r], s));
              (n.containers.existingMembers = new Container(t)), (n.existingUsers = {});
              for (var r = 0, i = t.length; r < i; ++r) n.existingUsers[t[r].getID()] = !0;
              Dialog.prototype.open.call(n, { title: Strings.translateString("Manage recipients") + ": " + n.folder.getShareGroupName() });
            },
            error: function () {
              Topics.get(Topics.DIALOG_LOADED).publish();
            }
          });
      }),
      (SharedFolderDialog.prototype.getInvitedMembers = function () {
        var e, e;
        return (e = (e = this.containers.newMembers ? this.containers.newMembers.getItems() : []).concat(
          this.parseFriendsInput(this.inputFields.friends.getValue())
        ));
      }),
      (SharedFolderDialog.prototype.getData = function () {
        var t = document.getElementById("sharedFolderDialogHide"),
          r = document.getElementById("sharedFolderDialogReadOnly"),
          i = document.getElementById("sharedFolderDialogAdmin"),
          e = Dialog.prototype.getData.apply(this, arguments),
          s = ((e.newMembers = {}), (e.updatedPermissions = []), this.getInvitedMembers());
        if (0 < s.length)
          for (var n = 0, a = s.length; n < a; ++n) {
            var o = s[n];
            e.newMembers[o.getUsername()] = { uid: o.getID(), type: o.getType() };
          }
        else
          for (var d = this.containers.existingMembers.getItemChildren(), n = 0, a = d.length; n < a; ++n) {
            var l = d[n];
            l.isModified() &&
              e.updatedPermissions.push({
                uid: l.getID(!0),
                give: l.getCheckboxValue("give"),
                readonly: l.getCheckboxValue("readonly"),
                canadminister: LPProxy.isEnterpriseUser() ? l.getCheckboxValue("can_administer") : "0"
              });
          }
        return (
          i.addEventListener("click", function (e) {
            "checkbox" === e.target.type && i.checked && ((t.checked = !1), (r.checked = !1));
          }),
          e
        );
      }),
      (SharedFolderDialog.prototype.handleSubmit = function (a) {
        var e = $.extend(a, { sharedFolder: this.folder._data, shareInfo: this.folder._shareInfo });
        LPTools.hasProperties(a.newMembers)
          ? LPRequest.makeRequest(LPProxy.addSharedFolderMembers, {
              params: e,
              success: this.createDynamicHandler(function (e) {
                for (var t = [], r = this.getInvitedMembers(), i = 0, s = r.length; i < s; ++i) {
                  var n = r[i];
                  e[n.getUsername()] &&
                    ((n._pending = !1),
                    (n._data.readonly = a.readonly ? "1" : "0"),
                    (n._data.give = a.hidePasswords ? "0" : "1"),
                    (n._data.can_administer = a.can_administer ? "1" : "0"),
                    n.rebuild(),
                    t.push(n)),
                    n._parent && n._parent.removeChild(n);
                }
                this.containers.existingMembers.addChild(t), this.showHideInviteInput(), this.inputFields.friends.clear();
              })
            })
          : 0 < a.updatedPermissions.length
          ? LPRequest.makeRequest(LPProxy.updateSharedFolderMemberPermissions, {
              params: e,
              success: this.createHandler(function () {
                for (var e = this.containers.existingMembers.getItemChildren(), t = {}, r = 0, i = e.length; r < i; ++r) {
                  var s = e[r];
                  t[s.getID(!0)] = s;
                }
                for (var r = 0, i = a.updatedPermissions.length; r < i; ++r) {
                  var n = a.updatedPermissions[r];
                  t[n.uid].updatePermissions(n);
                }
              })
            })
          : this.close(!0);
      });
  })(document);
