var SharedFolderAccessDialog = function (e) {
  ContainerSelectionDialog.call(this, e),
    (this.member = null),
    (this.selectedAids = null),
    (this.noLocalRestrictedVaultItems = []),
    (this.leftHeader = null),
    (this.leftHeaderText = null),
    (this.rightHeader = null),
    (this.rightHeaderText = null);
};
(SharedFolderAccessDialog.prototype = Object.create(ContainerSelectionDialog.prototype)),
  (SharedFolderAccessDialog.prototype.constructor = SharedFolderAccessDialog),
  (function () {
    (SharedFolderAccessDialog.prototype.initialize = function (e) {
      var t;
      ContainerSelectionDialog.prototype.initialize.apply(this, arguments),
        (this.leftHeader = e.find(".identityLeft .header")),
        (this.leftHeaderText = this.leftHeader.text()),
        (this.leftPlaceHolder = e.find(".availableSearch")),
        (this.leftPlaceHolderText = this.leftPlaceHolder.attr("placeholder")),
        (this.rightHeader = e.find(".identityRight .header")),
        (this.rightHeaderText = this.rightHeader.text()),
        (this.rightPlaceHolder = e.find(".selectedSearch")),
        (this.rightPlaceHolderText = this.rightPlaceHolder.attr("placeholder")),
        (this.otherMembersElement = $("#sharedFolderAccessOtherUsers")),
        (t = this).inputFields.hidebydefault.onChange(function (e) {
          e
            ? (t.leftHeader.text(t.rightHeaderText),
              t.leftPlaceHolder.attr("placeholder", t.rightPlaceHolderText),
              t.rightHeader.text(t.leftHeaderText),
              t.rightPlaceHolder.attr("placeholder", t.leftPlaceHolderText))
            : (t.leftHeader.text(t.leftHeaderText),
              t.leftPlaceHolder.attr("placeholder", t.leftPlaceHolderText),
              t.rightHeader.text(t.rightHeaderText),
              t.rightPlaceHolder.attr("placeholder", t.rightPlaceHolderText));
        }),
        t.inputFields.applyToOthers.onChange(function (e) {
          e ? t.otherMembersElement.show() : t.otherMembersElement.hide();
        });
    }),
      (SharedFolderAccessDialog.prototype.setup = function () {
        ContainerSelectionDialog.prototype.setup.apply(this, arguments);
        for (
          var e = [], t = dialogs.sharedFolder.getDialog().containers.existingMembers.getItemChildren(), r = 0, a = t.length;
          r < a;
          ++r
        ) {
          var i = t[r];
          i !== this.member && e.push(new SharedFolderAccessCheckbox(i));
        }
        0 < e.length &&
          ((this.containers.otherMembers = new Container(e, {
            allowDrag: !1,
            searchInput: "sharedFolderAccessOtherUsersSearch",
            publishSelect: !1
          })),
          this.containers.otherMembers.initialize(document.getElementById("sharedFolderAccessOtherUsersContainer")));
      });
    var d = function (e) {
      for (var t = {}, r = 0, a = e.length; r < a; ++r) t[e[r]] = !0;
      return t;
    };
    function a(t, r) {
      var e = { shareid: r.getShareID() };
      r instanceof SharedFolderUser ? (e.uid = r.getID()) : (e.cgid = r.getID()),
        LPRequest.makeDataRequest(LPProxy.getSharedFolderRestrictions, {
          params: e,
          success: t.createDynamicHandler(function (e) {
            t.open(r, e);
          })
        });
    }
    function i(e) {
      var t = e.member._sharedGroup;
      dialogs.confirmation.open({
        title: Strings.translateString("An error occurred. Please try again later."),
        text: Strings.translateString("Folder must be downloaded in order to edit a member's access. Would you like to download now?"),
        handler: function () {
          t._sharedFolderItem.startDownloading(), Dialog.prototype.closeAllDialogs();
        }
      });
    }
    function o(e, t, r) {
      (e.member = r), (e.selectedAids = d(t.aids));
      var o = LPProxy.getItemsByShareID(e.member._sharedGroup.getID()),
        a;
      function i() {
        dialogs.alert.open({
          title: Strings.translateString("Edit Access"),
          text: Strings.translateString("Please add items to this folder before editing a member's access.")
        });
      }
      function l(e) {
        var t = [];
        e.availableAids = {};
        for (var r = 0, a = o.length; r < a; ++r) {
          var i = o[r].getID();
          t.push(i), void 0 === e.selectedAids[i] && (e.availableAids[i] = !0);
        }
        return t;
      }
      function s(e, t, r) {
        e.noLocalRestrictedVaultItems = [];
        for (var a = 0, i; a < r.restrictedItems.length; a++) {
          -1 === t.indexOf(r.restrictedItems[a].id) &&
            ((i = n(e, r.restrictedItems[a])), e.noLocalRestrictedVaultItems.push(i.newDisplayObject()));
        }
      }
      function n(e, t) {
        var r,
          a = new (t.sn ? Note : Account)(t, e.member._sharedGroup);
        return (
          (a._data.aid = t.id),
          (a._data.name = LPProxy.decryptMobile(a._data.name, !1, a.getKey())),
          (a._data.group = e.member._sharedGroup.getName() + "\\" + LPProxy.decryptMobile(t.group, !1, a.getKey())),
          a
        );
      }
      0 === o.length ? i() : s(e, l(e), t);
    }
    SharedFolderAccessDialog.prototype.open = function (e, t) {
      var r = this;
      void 0 === t
        ? a(r, e)
        : e._sharedGroup.isDownloaded()
        ? (o(r, t, e),
          ContainerSelectionDialog.prototype.open.apply(this, [
            { title: Strings.translateString("Edit Access: %s", e.toString()), defaultData: { hidebydefault: "1" === t.hidebydefault } }
          ]))
        : i(r);
    };
    var e = function (e, t) {
        var e = { filter: e },
          e = LPProxy.getSites(e).concat(LPProxy.getNotes(e)).concat(t);
        return LPProxy.assignItemsToGroups(e, !1);
      },
      l =
        ((SharedFolderAccessDialog.prototype.getAvailableItems = function () {
          return e(this.availableAids, []);
        }),
        (SharedFolderAccessDialog.prototype.getSelectedItems = function () {
          return e(this.selectedAids, this.noLocalRestrictedVaultItems);
        }),
        function (e) {
          for (var t = [], r = 0, a = e.length; r < a; ++r) t.push(e[r].getID());
          return t.join(",");
        });
    (SharedFolderAccessDialog.prototype.getData = function (e) {
      var t = [],
        r = [],
        a = ContainerSelectionDialog.prototype.getData.apply(this, arguments);
      if (
        ((a.aids = ""),
        this.containers.selected && (a.aids = l(this.containers.selected.getItemModelChildren())),
        (a.additionaluids = ""),
        (a.additionalgroupids = ""),
        a.applyToOthers && this.containers.otherMembers)
      )
        for (var i = this.containers.otherMembers.getSelectedModelItems(), o = 0; o < i.length; o++)
          (i[o] instanceof SharedFolderUserGroup ? r : t).push(i[o].getID());
      return 0 < t.length && (a.additionaluids = t.join(",")), 0 < r.length && (a.additionalgroupids = r.join(",")), a;
    }),
      (SharedFolderAccessDialog.prototype.handleSubmit = function (e) {
        LPRequest.makeRequest(LPProxy.updateSharedFolderRestrictions, {
          params: $.extend(e, { uid: this.member.getID(!0), shareid: this.member._sharedGroup.getID() })
        });
      });
  })();
