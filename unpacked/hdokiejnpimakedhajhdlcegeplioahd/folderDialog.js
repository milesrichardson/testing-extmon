var FolderDialog = function (e) {
    DialogWithGroupInput.call(this, e, { additionalHeaderClasses: ["icon"], dynamicHeight: !0 });
  },
  CreateSharedFolderDialog =
    ((FolderDialog.prototype = Object.create(DialogWithGroupInput.prototype)),
    ((FolderDialog.prototype.constructor = FolderDialog).prototype.open = function (e) {
      ((e = e || {}).title = Strings.translateString("Add Folder")),
        e.vaultItem && (e.title = Strings.translateString("Rename folder")),
        DialogWithGroupInput.prototype.open.call(this, e);
    }),
    (FolderDialog.prototype.initialize = function () {
      var t;
      DialogWithGroupInput.prototype.initialize.apply(this, arguments),
        this.inputFields.groupParent.onChange(function (e) {
          document.getElementById("folderDialogCreateSubFolder").checked = "" !== e;
        }),
        (t = this),
        LPPlatform.addEventListener(document.getElementById("folderDialogCreateSubFolder"), "change", function (e) {
          e.target.checked || t.inputFields.groupParent.clear();
        });
    }),
    (FolderDialog.prototype.setup = function (e, t) {
      var r = document.getElementById("folderDialogCreateSubFolder");
      (r.checked = !1),
        t.vaultItem instanceof SharedGroup
          ? (r.setAttributeNode(document.createAttribute("disabled")), this.inputFields.groupParent.disable())
          : (r.removeAttribute("disabled"), this.inputFields.groupParent.enable()),
        DialogWithGroupInput.prototype.setup.apply(this, arguments);
    }),
    (FolderDialog.prototype.setGroupDropdownValues = function (e) {
      e.unshift(""), LPTools.setSelectOptions(this.inputFields.groupParent.getNativeElement(), e);
    }),
    (FolderDialog.prototype.validate = function (e) {
      var t = DialogWithGroupInput.prototype.validate.apply(this, arguments),
        r = e.groupName;
      if ((e.groupParent && (r = e.groupParent + "\\" + r), "" === e.groupName))
        this.addError("groupName", Strings.translateString("Folder Name is required.")), (t = !1);
      else if (-1 < e.groupName.indexOf(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX))
        this.addError(
          "groupName",
          Strings.translateString(
            "Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name."
          )
        ),
          (t = !1);
      else {
        for (var o = LPProxy.getGroups(), a = 0, i = o.length; a < i; ++a)
          if (o[a].getName() === r) {
            this.addError("groupName", Strings.translateString("That folder already exists.")), (t = !1);
            break;
          }
        -1 < e.groupName.indexOf("\\") &&
          (this.addError("groupName", Strings.translateString("Folder name cannot contain backslashes.")), (t = !1));
      }
      return t;
    }),
    (FolderDialog.prototype.allowNoneGroup = function (e) {
      return !1;
    }),
    (FolderDialog.prototype.getGroupField = function (e) {
      return "groupParent";
    }),
    (FolderDialog.prototype.add = function (e) {
      var t;
      new Group().addFromDialog(e, e.groupParent ? this.getGroup(e, !1) : null);
    }),
    function (e) {
      Dialog.call(this, e, { additionalHeaderClasses: ["icon"], dynamicHeight: !0, nextButtonText: Strings.translateString("Create") });
    });
(CreateSharedFolderDialog.prototype = Object.create(Dialog.prototype)),
  ((CreateSharedFolderDialog.prototype.constructor = CreateSharedFolderDialog).prototype.open = function (e) {
    ((e = e || {}).title = e.group
      ? Strings.translateString("Convert to Shared Folder")
      : Strings.translateString("Create New Shared Folder")),
      e.group && (e.defaultData = { groupName: e.group.getName().replace("\\", "-") }),
      Dialog.prototype.open.call(this, e);
  }),
  (CreateSharedFolderDialog.prototype.validate = function (e) {
    var t = Dialog.prototype.validate.apply(this, arguments);
    if ("" === e.groupName) this.addError("groupName", Strings.translateString("Folder Name is required.")), (t = !1);
    else {
      for (
        var r = SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX + e.groupName, o = LPProxy.getGroups(), a = 0, i = o.length, n;
        a < i;
        ++a
      ) {
        if (o[a].getName() === r) {
          this.addError("groupName", Strings.translateString("That folder already exists.")), (t = !1);
          break;
        }
      }
      -1 < e.groupName.indexOf("\\") &&
        (this.addError("groupName", Strings.translateString("Folder name cannot contain backslashes.")), (t = !1));
    }
    return t;
  }),
  (CreateSharedFolderDialog.prototype.getItemButtonActions = function () {
    return null;
  }),
  (CreateSharedFolderDialog.prototype.setup = function (e, t) {
    t.group
      ? ($("#createSharedFolderConvert").show(), $("#createSharedFolderNew").hide())
      : ($("#createSharedFolderConvert").hide(), $("#createSharedFolderNew").show()),
      Dialog.prototype.setup.apply(this, arguments);
  }),
  (CreateSharedFolderDialog.prototype.handleSubmit = function (e) {
    var t;
    new SharedGroup({ group: e.groupName }).add(this.data.group, this.data.children);
  });
