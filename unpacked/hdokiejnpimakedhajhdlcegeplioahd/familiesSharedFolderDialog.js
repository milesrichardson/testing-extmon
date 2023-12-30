var FamiliesSharedFolderDialog = function (e) {
    Dialog.call(this, e, {
      closeButtonEnabled: !0,
      maximizeButtonEnabled: !1,
      buttonAlign: this.RIGHT_ALIGN,
      nextButtonText: Strings.translateString("Add"),
      backButtonText: Strings.translateString("Families"),
      backButtonOverrideFunc: FamiliesSharedFolderDialog.prototype.openFamilyAdminConsole,
      title: Strings.translateString("Add shared folder"),
      dynamicHeight: !1,
      overlayDialog: !0
    });
  },
  fullAccess = "fullAccess",
  readOnlyAccess = "readOnlyAccess",
  noAccess = "noAccess",
  selectedAttributeValue = "selected";
(FamiliesSharedFolderDialog.prototype = Object.create(Dialog.prototype)),
  ((FamiliesSharedFolderDialog.prototype.constructor = FamiliesSharedFolderDialog).prototype.buildFamiliesSharedFolderList = function (
    e,
    r
  ) {
    var a = $("#familyBody"),
      t = (a.empty(), bg.get("g_username") || "");
    e = e.sort(function (e, r) {
      return e.name < r.name ? -1 : e.name > r.name ? 1 : 0;
    });
    for (var o = 0; o < e.length; o++) {
      var s = document.createElement("tr"),
        i = document.createElement("td"),
        i =
          ((i.textContent = e[o].name),
          i.setAttribute("data-automation-id", "familyMemberName"),
          e[o].email === t && (i.textContent += " " + Strings.translateString("(you)")),
          s.appendChild(i),
          document.createElement("td")),
        l = document.createElement("select"),
        d =
          ((l.className = "dialogInput selectDropdown"),
          l.setAttribute("data-automation-id", "permissionDropdown"),
          (l.id = e[o].uid),
          document.createElement("option")),
        n = ((d.value = fullAccess), (d.text = Strings.translateString("Administrator")), document.createElement("option")),
        m = ((n.value = readOnlyAccess), (n.text = Strings.translateString("Read only access")), document.createElement("option"));
      (m.value = noAccess),
        (m.text = Strings.translateString("No access")),
        r && e[o].email === t
          ? (d.setAttribute(selectedAttributeValue, selectedAttributeValue), (l.disabled = !0))
          : (e[o].permission == fullAccess ? d : e[o].permission == readOnlyAccess ? n : m).setAttribute(
              selectedAttributeValue,
              selectedAttributeValue
            ),
        l.appendChild(d),
        l.appendChild(n),
        l.appendChild(m),
        i.appendChild(l),
        s.appendChild(i),
        a.append(s);
    }
  }),
  (FamiliesSharedFolderDialog.prototype.open = function (s) {
    function r(o) {
      LPRequest.makeDataRequest(LPProxy.getSharedFolderMembers, {
        params: { shareid: s.shareId },
        success: function (e) {
          for (var r = e.users, a = 0; a < o.length; a++) {
            (o[a].permission = noAccess), (o[a].isNew = !0);
            for (var t = 0; t < r.length; t++)
              o[a].uid === r[t].uid &&
                (0 == r[t].readonly ? (o[a].permission = fullAccess) : (o[a].permission = readOnlyAccess), (o[a].isNew = !1));
          }
          (s.familyMembers = o), Dialog.prototype.open.call(i, s);
        }
      });
    }
    var i;
    ((s = s || {}).isNewFolder = void 0 === s.folder),
      (s.folderName = s.isNewFolder ? "" : s.folder._shareInfo.name),
      (s.shareId = s.isNewFolder ? "" : s.folder._data.sharefolderid),
      $("#groupName").val(s.folderName || ""),
      this.setTitle(s.isNewFolder ? Strings.translateString("Add shared folder") : Strings.translateString("Manage recipients")),
      this.setNextButtonText(s.isNewFolder ? Strings.translateString("Add") : Strings.translateString("Save")),
      (i = this),
      LPRequest.makeDataRequest(LPProxy.getFamilyMembers, {
        params: {},
        success: function (e) {
          s.isNewFolder ? ((s.familyMembers = e), Dialog.prototype.open.call(i, s)) : r(e);
        }
      });
  }),
  (FamiliesSharedFolderDialog.prototype.setup = function (e, r) {
    Dialog.prototype.setup.apply(this, arguments),
      (r.familyMembers = r.familyMembers || []),
      FamiliesSharedFolderDialog.prototype.buildFamiliesSharedFolderList(r.familyMembers, r.isNewFolder);
  }),
  (FamiliesSharedFolderDialog.prototype.postSetup = function (e) {
    Dialog.prototype.postSetup.apply(this, arguments),
      LPProxy.isAdmin() || this.backButton.hide(),
      $("#groupName").val(e.folderName),
      $("#loadedGroupName").val(e.folderName);
  }),
  (FamiliesSharedFolderDialog.prototype.validate = function (e) {
    var r = Dialog.prototype.validate.apply(this, arguments);
    if ("" === e.groupName) this.addError("groupName", "Folder Name is required."), (r = !1);
    else if (-1 < e.groupName.indexOf(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX))
      this.addError(
        "groupName",
        Strings.translateString(
          "Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name."
        )
      ),
        (r = !1);
    else {
      for (var a = LPProxy.getGroups(), t = 0, o = a.length; t < o; ++t)
        if (
          a[t].getName() === SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.groupName &&
          a[t].getName() != SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.loadedGroupName
        ) {
          this.addError("groupName", Strings.translateString("That folder already exists.")), (r = !1);
          break;
        }
      -1 < e.groupName.indexOf("\\") &&
        (this.addError("groupName", Strings.translateString("Folder name cannot contain backslashes.")), (r = !1));
    }
    return r;
  }),
  (FamiliesSharedFolderDialog.prototype.handleSubmit = function (e, r) {
    var a = {},
      t = [];
    r.folder && Array.isArray(r.folder._views) && 2 === r.folder._views.length && (delete r.folder._views[1], delete r.folder._views[0]);
    for (var o = 0, s, i, l, d, d, d, d; o < r.familyMembers.length; o++) {
      var n = r.familyMembers[o].uid,
        m = $("#" + n)
          .find(":selected")
          .val();
      m != noAccess
        ? (a[r.familyMembers[o].email] = {
            uid: n,
            type: r.familyMembers[o].type,
            readOnly: m === readOnlyAccess ? 1 : 0,
            canAdminister: m === fullAccess ? 1 : 0,
            hidePasswords: 0,
            isNew: r.familyMembers[o].isNew,
            hasPermissionChanged: r.familyMembers[o].permission != m
          })
        : r.familyMembers[o].permission != noAccess && m === noAccess && t.push({ uid: r.familyMembers[o].uid, shareId: r.shareId });
    }
    r.isNewFolder
      ? (s = new SharedGroup({ group: e.groupName })).add(r.group, r.children, function (e) {
          var e = $.extend(e, {
            sharedFolder: e.sharedFolder,
            shareInfo: s.shareInfo,
            newMembers: a,
            notify: $("#notifyFamilyMembers").is(":checked") ? 1 : 0
          });
          FamiliesSharedFolderDialog.prototype.addSharedFolderUsers(e, r);
        })
      : ((i = {}),
        (l = []),
        Object.keys(a).forEach(function (e) {
          var r = a[e];
          r.isNew
            ? (i[e] = r)
            : !r.isNew &&
              r.hasPermissionChanged &&
              l.push({ uid: r.uid, readonly: r.readOnly, canadminister: r.canAdminister, give: r.hidePasswords ? 0 : 1 });
        }),
        0 < Object.keys(i).length &&
          ((d = $.extend(r, {
            sharedFolder: r.folder._data,
            shareInfo: r.folder._shareInfo,
            newMembers: i,
            notify: $("#notifyFamilyMembers").is(":checked") ? 1 : 0
          })),
          FamiliesSharedFolderDialog.prototype.addSharedFolderUsers(d, r)),
        0 < l.length &&
          ((d = { shareInfo: { id: r.shareId }, updatedPermissions: l }), FamiliesSharedFolderDialog.prototype.updateSharedFolderUsers(d)),
        0 < t.length && FamiliesSharedFolderDialog.prototype.removeSharedFolderUsers((d = { removedMembers: t })),
        r.folderName != e.groupName &&
          ((r.folder._data.group = SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.groupName),
          (d = { sharedFolder: r.folder._data, shareInfo: r.folder._shareInfo }),
          FamiliesSharedFolderDialog.prototype.renameSharedFolder(d)),
        0 == Object.keys(i).length && 0 == l.length && 0 == t.length && r.folderName === e.groupName && this.close(!0));
  }),
  (FamiliesSharedFolderDialog.prototype.addSharedFolderUsers = function (e, r) {
    (r = r || {}),
      (e = e || {}),
      LPRequest.makeRequest(LPProxy.addSharedFolderMembers, { params: e, requestSuccessOptions: { closeDialog: !0 } });
  }),
  (FamiliesSharedFolderDialog.prototype.updateSharedFolderUsers = function (e) {
    (e = e || {}),
      LPRequest.makeRequest(LPProxy.updateSharedFolderMemberPermissions, { params: e, requestSuccessOptions: { closeDialog: !0 } });
  }),
  (FamiliesSharedFolderDialog.prototype.removeSharedFolderUsers = function (e) {
    (e = e || {}).removedMembers.forEach(function (e) {
      LPRequest.makeUpdateRequest(LPProxy.removeSharedFolderMember, {
        params: { uid: e.uid, shareid: e.shareId },
        requestSuccessOptions: { closeDialog: !0 },
        success: function (e) {
          Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).publish(e);
        }
      });
    });
  }),
  (FamiliesSharedFolderDialog.prototype.renameSharedFolder = function (e) {
    (e = e || {}),
      LPRequest.makeUpdateRequest(LPProxy.renameSharedGroup, {
        params: e,
        requestSuccessOptions: { closeDialog: !0 },
        success: function (e) {
          $("#loadedGroupName").val(e.shareInfo.name), Topics.get(Topics.REFRESH_DATA).publish();
        },
        error: function () {
          Topics.get(Topics.REFRESH_DATA).publish();
        }
      });
  }),
  (FamiliesSharedFolderDialog.prototype.openFamilyAdminConsole = function () {
    (isNewFolder = (this.data && this.data.isNewFolder) || !1),
      bg.lpevent("v_ofc"),
      isNewFolder
        ? bg.sendLpImprove("Families Console Viewed", { source: "Add shared folder" })
        : bg.sendLpImprove("Families Console Viewed", { source: "Manage Recipients" }),
      this.close(!0),
      LPVault.openFamiliesInVault();
  });
