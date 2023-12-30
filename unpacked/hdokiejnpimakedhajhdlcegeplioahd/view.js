((VaultItemBaseDisplay = function (t) {
  (this._model = t),
    (this._parent = null),
    (this._contextMenuHandler = this.createContextMenuHandler()),
    (this._eventHandler = LPTools.createEventHandler(this)),
    (this._selected = !1),
    (this._element = null),
    (this._$_element = null),
    (this._textElements = []),
    (this._destructed = !1),
    (this._shown = !0),
    (this._isLocked = !1),
    (this.secondaryActionText = "");
}).prototype.getRecordType = function () {
  if (this._model && "function" == typeof this._model.getRecordType) return this._model.getRecordType();
}),
  ((VaultItemDisplay = function (t) {
    VaultItemBaseDisplay.call(this, t), (this._dragStartSelected = !1);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  (VaultItemDisplay.prototype.constructor = VaultItemDisplay),
  ((AccountBaseDisplay = function (t) {
    VaultItemDisplay.call(this, t);
  }).prototype = Object.create(VaultItemDisplay.prototype)),
  (AccountBaseDisplay.prototype.constructor = AccountBaseDisplay),
  ((AccountDisplay = function (t) {
    AccountBaseDisplay.call(this, t);
  }).prototype = Object.create(AccountBaseDisplay.prototype)),
  (AccountDisplay.prototype.constructor = AccountDisplay),
  ((AuroraAccountDisplay = function (t) {
    AccountDisplay.call(this, t), (this.searchTrackingTimeout = null);
  }).prototype = Object.create(AccountDisplay.prototype)),
  (AuroraAccountDisplay.prototype.constructor = AuroraAccountDisplay),
  ((CloudAppDisplay = function (t) {
    AccountDisplay.call(this, t);
  }).prototype = Object.create(AccountDisplay.prototype)),
  (CloudAppDisplay.prototype.constructor = CloudAppDisplay),
  ((ApplicationDisplay = function (t) {
    VaultItemDisplay.call(this, t);
  }).prototype = Object.create(VaultItemDisplay.prototype)),
  (ApplicationDisplay.prototype.constructor = ApplicationDisplay),
  ((NoteDisplay = function (t) {
    AccountBaseDisplay.call(this, t);
  }).prototype = Object.create(AccountBaseDisplay.prototype)),
  (NoteDisplay.prototype.constructor = NoteDisplay),
  ((AttachmentDisplay = function (t) {
    VaultItemBaseDisplay.call(this, t);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  (AttachmentDisplay.prototype.constructor = AttachmentDisplay),
  ((FormFillDisplay = function (t) {
    VaultItemDisplay.call(this, t);
  }).prototype = Object.create(VaultItemDisplay.prototype)),
  (FormFillDisplay.prototype.constructor = FormFillDisplay),
  ((IdentityDisplay = function (t) {
    VaultItemBaseDisplay.call(this, t);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  (IdentityDisplay.prototype.constructor = IdentityDisplay),
  ((AllIdentityDisplay = function (t) {
    IdentityDisplay.call(this, t);
  }).prototype = Object.create(IdentityDisplay.prototype)),
  (AllIdentityDisplay.prototype.constructor = AllIdentityDisplay),
  ((GroupDisplay = function (t, e) {
    if ((VaultItemBaseDisplay.call(this, t), (this._itemCount = 0), (this._items = []), (this._subGroups = []), e))
      for (var o = 0, s = e.length; o < s; ++o) {
        var n = e[o];
        n instanceof GroupDisplay ? (this._subGroups.push(n), (this._itemCount += n._itemCount)) : (this._items.push(n), ++this._itemCount),
          n.setParent(this);
      }
    this._model &&
      (this._contextMenuElement = LPTools.createElement("li", { vaultAction: Constants.ACTION_MOVE_TO_FOLDER }, this._model.getName())),
      (this._dragTarget = !0),
      (this._openTimeouts = []),
      (this._itemContents = null),
      (this._subFolderContents = null),
      (this._filter = null),
      (this._filteredItems = null),
      (this._filteredSubGroups = null),
      (this._expanded = !0);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  (GroupDisplay.prototype.constructor = GroupDisplay),
  ((SharedGroupDisplay = function (t, e) {
    GroupDisplay.call(this, t, e);
  }).prototype = Object.create(GroupDisplay.prototype)),
  (SharedGroupDisplay.prototype.constructor = SharedGroupDisplay),
  ((LinkedGroupDisplay = function (t, e) {
    SharedGroupDisplay.call(this, t, e);
  }).prototype = Object.create(SharedGroupDisplay.prototype)),
  (LinkedGroupDisplay.prototype.constructor = LinkedGroupDisplay),
  ((EmergencyAccessGroupDisplay = function (t, e) {
    LinkedGroupDisplay.call(this, t, e);
  }).prototype = Object.create(LinkedGroupDisplay.prototype)),
  (EmergencyAccessGroupDisplay.prototype.constructor = EmergencyAccessGroupDisplay),
  ((AuroraGroupDisplay = function (t, e) {
    GroupDisplay.call(this, t, e), (this._dragTarget = !1);
  }).prototype = Object.create(GroupDisplay.prototype)),
  (AuroraGroupDisplay.prototype.constructor = AuroraGroupDisplay),
  ((Container = function (t, e) {
    var o, t, s;
    if (
      (GroupDisplay.call(this, null, t),
      (this._selectedItems = []),
      (this._lastToggleSelectTarget = null),
      (this._buildOptions = e || {}),
      (this._buildOptions.sortFunction = this._buildOptions.sortFunction || this.sortByNameAsc),
      this.parseExcludeActions(),
      (this._lastSearchTerm = null),
      (this._folderView = !0),
      (this._sortedItems = null),
      (this._sortedFilteredItems = null),
      (this._subscriptions = []),
      (o = this).subscribe(Topics.COLLAPSE_ALL, function () {
        o.collapseAll(), o._buildOptions.folderStateChange && o._buildOptions.folderStateChange(o);
      }),
      o.subscribe(Topics.EXPAND_ALL, function () {
        o.expandAll(), o._buildOptions.folderStateChange && o._buildOptions.folderStateChange(o);
      }),
      o.subscribe(Topics.DISPLAY_COMPACT, function () {
        o.displayCompact();
      }),
      o.subscribe(Topics.DISPLAY_LARGE, function () {
        o.displayLarge();
      }),
      o.subscribe(Topics.CLEAR_DATA, function () {
        o.destruct();
      }),
      this.separateFavorites())
    ) {
      (this.favoritesGroup = new FavoritesGroup()),
        (this.favoriteSeparatorSwithedOn = !1),
        this.favoritesGroup.setParent(this),
        (this.favoritesGroup._buildOptions = {
          excludeActions: [Constants.ACTION_OPEN_MOVE_TO_FOLDER_MENU, Constants.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU],
          allowDrag: !1
        }),
        this.favoritesGroup.parseExcludeActions();
      for (var n = this.getItemModelChildren(), i = 0, r = n.length; i < r; ++i) {
        var a = n[i];
        a.isFavorite() && this.addFavorite(a);
      }
    }
    (t = LPTools.getOption(e, "searchInput", null)),
      (s = this),
      t &&
        ((s.searchInput = $("#" + t)),
        s.searchInput.LP_addSearchHandlers("inputDialog", function (t) {
          s.applySearch(t);
        }),
        s._buildOptions.keyboardNavigation) &&
        s.searchInput.bind("keydown.containerSearchNav", function (t) {
          var e, o;
          40 === (t.keyCode || t.which) &&
            0 < (o = s.getAllChildrenOrdered()).length &&
            (o[0].focus(), t.preventDefault(), t.stopPropagation());
        });
  }).prototype = Object.create(GroupDisplay.prototype)),
  ((Container.prototype.constructor = Container).prototype.separateFavorites = function () {
    return LPTools.getOption(this._buildOptions, "separateFavorites", !1);
  }),
  (Container.prototype.subscribe = function (t, e) {
    var t = Topics.get(t);
    this._subscriptions.push({ topic: t, callback: e }), t.subscribe(e);
  }),
  (Container.prototype.addFavorite = function (t) {
    if (this.favoritesGroup) {
      for (var e = this.favoritesGroup.getItemModelChildren(), o = 0, s = e.length; o < s; ++o) if (e[o] === t) return;
      this.favoritesGroup.addChild(t.newDisplayObject());
    }
  }),
  (Container.prototype.checkFavoriteWithNoFolder = function (t) {
    var e, o;
    bg.get("g_nofolder_feature_enabled") &&
      this.favoritesGroup &&
      (!this.favoriteSeparatorSwithedOn &&
        t &&
        ((this.favoriteSeparatorSwithedOn = !0), $(".folderContainer.nofolder")) &&
        $(".folderContainer.nofolder").addClass("withFavourites"),
      !this.favoriteSeparatorSwithedOn ||
        t ||
        this.favoritesGroup.getItemModelChildren().length ||
        ((this.favoriteSeparatorSwithedOn = !1),
        $(".folderContainer.nofolder") && $(".folderContainer.nofolder").removeClass("withFavourites")));
  }),
  ((GridListContainer = function (t, e) {
    var o;
    Container.call(this, t, e),
      (o = this).subscribe(Topics.DISPLAY_GRID, function () {
        o.displayAsGrid();
      }),
      o.subscribe(Topics.DISPLAY_LIST, function () {
        o.displayAsList();
      });
  }).prototype = Object.create(Container.prototype)),
  (GridListContainer.prototype.constructor = GridListContainer),
  ((IdentityContainer = function (t, e) {
    Container.call(this, t, e);
  }).prototype = Object.create(Container.prototype)),
  (IdentityContainer.prototype.constructor = IdentityContainer),
  (function () {
    var o = function (t, e, o) {
      return t instanceof AllIdentityDisplay ? -1 : e instanceof AllIdentityDisplay ? 1 : o(t, e);
    };
    (IdentityContainer.prototype.sortByNameAsc = function (t, e) {
      return o(t, e, VaultItemBaseDisplay.prototype.sortByNameAsc);
    }),
      (IdentityContainer.prototype.sortByNameDesc = function (t, e) {
        return o(t, e, VaultItemBaseDisplay.prototype.sortByNameDesc);
      });
  })(),
  ((LinkedSharedGroupDisplay = function (t, e) {
    LinkedGroupDisplay.call(this, t, e);
  }).prototype = Object.create(LinkedGroupDisplay.prototype)),
  ((LinkedSharedGroupDisplay.prototype.constructor = LinkedSharedGroupDisplay).prototype.getSharedFolderLabel = function () {
    var t = SharedGroupDisplay.prototype.getSharedFolderLabel.call(this);
    return Strings.Vault.LINKED_PERSONAL_ACCOUNT + " " + String.fromCharCode(8226) + " " + t;
  }),
  (LinkedSharedGroupDisplay.prototype.getContextMenuItems = function () {
    return [
      new LPTools.ContextMenuItem(Constants.ACTION_CREATE_SUB_FOLDER),
      new LPTools.ContextMenuItem(Constants.ACTION_OPEN_ALL, { divider: !0 })
    ];
  }),
  ((DummyGroupDisplay = function (t, e) {
    GroupDisplay.call(this, t, e);
  }).prototype = Object.create(GroupDisplay.prototype)),
  ((DummyGroupDisplay.prototype.constructor = DummyGroupDisplay).prototype.removeChild = function () {
    if ((GroupDisplay.prototype.removeChild.apply(this, arguments), this.isEmpty(!0))) {
      for (var t = this; t._parent && t._parent instanceof DummyGroupDisplay && t._parent.isEmpty(); ) t = t._parent;
      t.destruct();
    }
  }),
  ((DefaultGroupDisplay = function (t, e) {
    GroupDisplay.call(this, t, e);
  }).prototype = Object.create(GroupDisplay.prototype)),
  ((DefaultGroupDisplay.prototype.constructor = DefaultGroupDisplay).prototype.getContextMenuItems = function () {
    return [new LPTools.ContextMenuItem(Constants.ACTION_OPEN_ALL)];
  }),
  (DefaultGroupDisplay.prototype.addChild = function () {
    var t = this.isEmpty();
    GroupDisplay.prototype.addChild.apply(this, arguments), t && this.show();
  }),
  (DefaultGroupDisplay.prototype.removeChild = function () {
    GroupDisplay.prototype.removeChild.apply(this, arguments), this.isEmpty() && this.hide();
  }),
  ((FavoritesGroup = function (t) {
    DefaultGroupDisplay.call(this, new DummyGroup(Strings.translateString("Favorites")), t);
  }).prototype = Object.create(DefaultGroupDisplay.prototype)),
  ((FavoritesGroup.prototype.constructor = FavoritesGroup).prototype.removeChild = function () {
    DefaultGroupDisplay.prototype.removeChild.apply(this, arguments);
    var t = this.getContainer();
    t && t.checkFavoriteWithNoFolder(!1);
  }),
  ((ChangePasswordSite = function (t) {
    VaultItemBaseDisplay.call(this, t);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  ((ChangePasswordSite.prototype.constructor = ChangePasswordSite).prototype.build = function (t) {
    var e = LPTools.buildCheckbox(
      { vaultaction: Constants.ACTION_TOGGLE_SELECT },
      { text: this.getDisplayName() + ": " + this._model.getUsername(), addClickHandler: !1 }
    );
    return e.setAttribute("class", "checkboxContainer"), e;
  }),
  ((SharedFolderAccessCheckbox = function (t) {
    VaultItemBaseDisplay.call(this, t);
  }).prototype = Object.create(VaultItemBaseDisplay.prototype)),
  ((SharedFolderAccessCheckbox.prototype.constructor = SharedFolderAccessCheckbox).prototype.build = function (t) {
    var e = LPTools.buildCheckbox({ vaultaction: Constants.ACTION_TOGGLE_SELECT }, { text: this.getDisplayName(), addClickHandler: !1 });
    return e.setAttribute("class", "checkboxContainer"), e;
  }),
  (function (c, h, y, p) {
    var V = function (t, e) {
        return y.getAttribute(t._element, e, "allowMultiple");
      },
      i = function (t) {
        for (var e = [], o = {}, s = 0, n = t.length; s < n; ++s) {
          var i = t[s]._model,
            r = i.getID();
          if (void 0 === o[r]) e.push(i), (o[r] = i);
          else {
            for (var a = !0, l = 0, p = e.length; l < p; ++l)
              if (i === e[l]) {
                a = !1;
                break;
              }
            a && e.push(i);
          }
        }
        return e;
      },
      s,
      n,
      e,
      u,
      l,
      r,
      o,
      a,
      t,
      d,
      A,
      m,
      _,
      g,
      C,
      f,
      I,
      D,
      T,
      E,
      v,
      S,
      O,
      N,
      b,
      G,
      F,
      w,
      M,
      k,
      R,
      Y,
      L,
      B,
      P,
      U,
      x;
    (VaultItemBaseDisplay.prototype.DISPLAY_GRID = "tile"),
      (VaultItemBaseDisplay.prototype.DISPLAY_LIST = "list"),
      (VaultItemBaseDisplay.prototype.DISPLAY_OPTIONS = { COMPACT: !1 }),
      (VaultItemBaseDisplay.prototype.COMPACT_CLASS = "compact"),
      (s = getOsType() ? getOsType() : "Unknown OS"),
      (n = getBrowserType() ? getBrowserType() : "Unknown Browser"),
      Topics.get(Topics.DISPLAY_COMPACT).subscribe(function () {
        VaultItemBaseDisplay.prototype.DISPLAY_OPTIONS.COMPACT = !0;
      }),
      Topics.get(Topics.DISPLAY_LARGE).subscribe(function () {
        VaultItemBaseDisplay.prototype.DISPLAY_OPTIONS.COMPACT = !1;
      }),
      (VaultItemBaseDisplay.prototype.lockForUpdate = function () {
        this._isLocked ||
          (this._$_element &&
            (this.deselect(),
            this._$_element.addClass("locked"),
            this._$_element.attr("draggable", "false"),
            this._lockedOverlay || (this._lockedOverlay = y.createElement("div", "itemLocked")),
            this._element.appendChild(this._lockedOverlay)),
          (this._isLocked = !0));
      }),
      (VaultItemBaseDisplay.prototype.unlock = function () {
        this._isLocked &&
          (this._$_element &&
            (this._$_element.removeClass("locked"),
            this._$_element.attr("draggable", this.isDraggable().toString()),
            this._element.removeChild(this._lockedOverlay)),
          (this._isLocked = !1));
      }),
      (VaultItemBaseDisplay.prototype.isDeleted = function () {
        return !1;
      }),
      (VaultItemBaseDisplay.prototype.getElement = function () {
        return this._$_element;
      }),
      (VaultItemBaseDisplay.prototype.getContextMenuItems = function (t) {
        return [];
      }),
      (VaultItemBaseDisplay.prototype.createContextMenuHandler = function (e) {
        return (
          (o = this),
          e ? ((e.action = "sitepassword"), (e.source = "vault")) : (e = { action: "sitepassword", source: "vault" }),
          function (t) {
            Topics.get(Topics.CONTEXT_CLOSE).publish(), o.handleEvent(t, e);
          }
        );
        var o;
      }),
      (VaultItemBaseDisplay.prototype.handleContextMenu = function (t) {
        var e = this.createContextMenu();
        Topics.get(Topics.CONTEXT_MENU).publish(t, e);
      }),
      (VaultItemBaseDisplay.prototype.createContextMenu = function () {
        for (
          var t = this.getItemsForAction(),
            e = this._selected && 1 < this.getSelectedItems().length,
            o = this.isDeleted() || this._model.isDeleted() ? this.getDeletedContextMenuItems(e) : this.getContextMenuItems(e),
            e = h.getElementById("contextMenu"),
            s = e.children[0],
            n = (c(s).empty(), {}),
            i = 0,
            r = o.length;
          i < r;
          ++i
        ) {
          var a = o[i],
            l = a.getAction();
          if (!0 !== n[l])
            for (var p = 0, u = t.length; p < u; ++p)
              if (t[p].isExcludedAction(l)) {
                n[l] = !0;
                break;
              }
          !0 !== n[l] && a.build(s, this._contextMenuHandler, this._eventHandler);
        }
        return y.addKeyBoardNavigation(s.children), e;
      }),
      (VaultItemBaseDisplay.prototype.getDeletedContextMenuItems = function (t) {
        var e = [];
        return e.push(new y.ContextMenuItem(Constants.ACTION_RESTORE)), e.push(new y.ContextMenuItem(Constants.ACTION_PURGE)), e;
      }),
      (VaultItemBaseDisplay.prototype.isExcludedAction = function (t, e) {
        e = e || this.getBuildOptions();
        var o,
          e = y.getOption(e, "excludeActions", {})[t];
        return (e = void 0 === e ? !1 : e);
      }),
      (VaultItemBaseDisplay.prototype.getDeletedItemButtonActions = function () {
        return [Constants.ACTION_RESTORE, Constants.ACTION_PURGE];
      }),
      (VaultItemBaseDisplay.prototype.getItemButtonActions = function () {
        return [];
      }),
      (VaultItemBaseDisplay.prototype.handleEvent = function (t, e) {
        try {
          switch (t.type) {
            default:
              var o;
              this._isLocked ||
                ((o = this.getVaultAction(t.target)) &&
                  (this.handleClickEvent(
                    o,
                    c.extend(
                      {
                        source: "vault",
                        shiftKey: t.shiftKey,
                        allowMultiple: V(this, t.target) || !0,
                        target: t.target,
                        isTrusted: t.isTrusted || (t.originalEvent && t.originalEvent.isTrusted)
                      },
                      e
                    )
                  ),
                  "launch" === o
                    ? bg.sendLpImprove("vault_item_click", { action_type: "Launch", os_type: s, browser_type: n })
                    : "edit" === o
                    ? bg.sendLpImprove("vault_item_click", {
                        action_type: "Edit",
                        item_type: this._model._noteType || "Password",
                        os_type: s,
                        browser_type: n
                      })
                    : "delete" === o
                    ? bg.sendLpImprove("vault_item_click", {
                        action_type: "Delete",
                        item_type: this._model._noteType || "Password",
                        os_type: s,
                        browser_type: n
                      })
                    : "share" === o &&
                      bg.sendLpImprove("vault_item_click", {
                        action_type: "Share",
                        item_type: this._model._noteType || "Password",
                        os_type: s,
                        browser_type: n
                      }))),
                t.preventDefault(),
                t.stopPropagation();
              break;
            case "contextmenu":
              this._isLocked || this.handleContextMenu(t), this._element.blur(), t.preventDefault(), t.stopPropagation();
              break;
            case "dragenter":
              this.handleDragEnter(t);
              break;
            case "dragleave":
              this.handleDragLeave(t);
              break;
            case "dragover":
              this.handleDragOver(t);
              break;
            case "drop":
              this.handleDrop(t);
              break;
            case "dragstart":
              this.handleDragStart(t);
              break;
            case "dragend":
              this.handleDragEnd(t);
              break;
            case "keydown":
              this.handleKeyDown(t);
              break;
            case "focusin":
              this.handleFocusIn(t);
              break;
            case "focusout":
              this.handleFocusOut(t);
          }
        } catch (t) {
          LPPlatform.logException(t);
        }
      }),
      (VaultItemBaseDisplay.prototype.getVaultAction = function (t) {
        return y.getAttribute(this._element, t, "vaultaction");
      }),
      (VaultItemBaseDisplay.prototype.isOverride = function () {
        return !1;
      }),
      (VaultItemBaseDisplay.prototype.handleClickEvent = function (t, e) {
        if (this.isOverride(t) && "function" == typeof this[t]) this[t]();
        else {
          var o = bg.get("g_nofolder_feature_enabled");
          switch (t) {
            case Constants.ACTION_TOGGLE_SELECT:
              this.handleToggleSelectedEvent(e.shiftKey);
              break;
            case Constants.ACTION_OPEN_MORE_OPTIONS:
              this.openMoreOptions();
              break;
            case Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS:
              this.openInContextOptions();
              break;
            case Constants.ACTION_OPEN_MOVE_TO_FOLDER_MENU:
              this.openMoveToFolderMenu(e.target, o ? this.getAllOtherGroupsWithSubItems(!0) : this.getOtherGroups(!0));
              break;
            case Constants.ACTION_EDIT:
              e.dialogActions = this.getDialogActions();
            default:
              (e.itemsForAction = this.getModelItemsForAction(t, e)), this._model.handleClickEvent(t, e);
          }
        }
      }),
      (VaultItemBaseDisplay.prototype.getDialogActions = function () {
        for (var t = [], e = this.getItemButtonActions(), o = 0, s = e.length; o < s; ++o) this.isExcludedAction(e[o]) || t.push(e[o]);
        return t;
      }),
      (VaultItemBaseDisplay.prototype.handleEnter = function (t) {
        var t;
        t.target === this._element && (t = this.getLaunchElementAction()) && this.handleClickEvent(t, {});
      }),
      (VaultItemBaseDisplay.prototype.handleFocusIn = function () {
        (this._focused = !0), this._$_element.addClass("focus");
      }),
      (e = null),
      Topics.get(Topics.DIALOG_OPEN).subscribe(function () {
        clearTimeout(e);
      }),
      (VaultItemBaseDisplay.prototype.handleFocusOut = function () {
        var t;
        (this._focused = !1),
          (t = this),
          (e = setTimeout(function () {
            !t._focused && t._$_element && t._$_element.removeClass("focus");
          }, 50));
      }),
      (VaultItemBaseDisplay.prototype.focus = function () {
        this._element.focus();
      }),
      (VaultItemBaseDisplay.prototype.handleKeyDown = function (t, e) {
        var o;
        switch (t.keyCode || t.which) {
          case 13:
            this.handleEnter(t);
            break;
          case 37:
            this.navigateBackward();
            break;
          case 38:
            this.navigateUp();
            break;
          case 39:
            this.navigateForward();
            break;
          case 40:
            this.navigateDown();
        }
      }),
      (VaultItemBaseDisplay.prototype.navigateForward = function () {
        this.navigate(1);
      }),
      (VaultItemBaseDisplay.prototype.navigateBackward = function () {
        this.navigate(-1);
      }),
      (VaultItemBaseDisplay.prototype.navigateUp = function () {
        this.navigateVerticalTile(-1);
      }),
      (VaultItemBaseDisplay.prototype.navigate = function (t) {
        var e = this.getContainer();
        if (e)
          for (var o = e.getAllChildrenOrdered(), s = 0, n = o.length, i; s < n; ++s) {
            o[s] === this && ((i = s + t) < 0 ? (i = 0) : n - 1 < i && (i = n - 1), o[i].focus());
          }
      }),
      (VaultItemBaseDisplay.prototype.navigateVerticalTile =
        ((u = function (t, e, o, s) {
          var t = t._$_element.offset();
          return (0 < e && t.top > s) || (e < 0 && t.top < s) || (0 < e && t.left > o.left) || (e < 0 && t.left < o.left);
        }),
        function (t) {
          var e = this.getContainer();
          if (e) {
            for (var o = -1, s = e.getAllChildrenOrdered(), n = s.length, i = 0; i < n; ++i)
              if (s[i] === this) {
                o = i;
                break;
              }
            for (var r = this._$_element.offset(), a = r.top; -1 < o + t && o + t < n; ) {
              var l = s[(o += t)]._$_element.offset();
              if ((0 < t && l.top > a) || (t < 0 && l.top < a)) {
                a = l.top;
                break;
              }
            }
            if (!(s[o] instanceof GroupDisplay)) for (; -1 < o + t && o + t < n && !u(s[o + t], t, r, a); ) o += t;
            s[o].focus();
          }
        })),
      (VaultItemBaseDisplay.prototype.navigateDown = function () {
        this.navigateVerticalTile(1);
      }),
      (VaultItemBaseDisplay.prototype.getModelItemsForAction = function (t, e) {
        return i(this.getItemsForAction(e));
      }),
      (VaultItemBaseDisplay.prototype.deselect = function (t) {
        var e;
        this._selected &&
          ((this._selected = !1), this._$_element.removeClass("selected"), (e = this.getContainer())) &&
          e.removeSelectedItem(this, t);
      }),
      (VaultItemBaseDisplay.prototype.select = function (t) {
        var e;
        !this._selected &&
          this._shown &&
          ((this._selected = !0), this._$_element.addClass("selected"), (e = this.getContainer())) &&
          e.addSelectedItems(this, t);
      }),
      (VaultItemBaseDisplay.prototype.handleToggleSelectedEvent = function (t) {
        this._selected ? this.deselect(t) : this.select(t);
        var t = this.getContainer();
        t && (t._lastToggleSelectTarget = this);
      }),
      (VaultItemBaseDisplay.prototype.getItemsForAction = function (t) {
        var e = [this];
        return (e = !this._selected || (t && !t.allowMultiple) ? e : this.getSelectedItems());
      }),
      (l = function (t) {
        var e;
        return (t instanceof DefaultGroupDisplay || t instanceof DummyGroupDisplay) && t._model._data.group === Strings.Consts.NONE_GROUP;
      }),
      (r = function (t, e) {
        var o = { defultFolderFound: !1, returnValue: null };
        return (
          bg.get("g_nofolder_feature_enabled") &&
            (l(t) ? ((o.defultFolderFound = !0), (o.returnValue = -1)) : l(e) && ((o.defultFolderFound = !0), (o.returnValue = 1))),
          o
        );
      }),
      (o = function (t) {
        return t instanceof AuroraGroupDisplay || t instanceof AuroraAccountDisplay;
      }),
      (a = function (t, e) {
        return (o(t) ? 1 : 0) - (o(e) ? 1 : 0);
      }),
      (VaultItemBaseDisplay.prototype.getMoveOrganizeLPMenu = function () {
        return bg.get("g_nofolder_feature_enabled")
          ? new y.ContextMenuItem(Constants.ACTION_OPEN_MOVE_TO_FOLDER_MENU, { divider: !0, submenu: !0, text: bg.gs("Organize") })
          : new y.ContextMenuItem(Constants.ACTION_OPEN_MOVE_TO_FOLDER_MENU, { divider: !0, submenu: !0 });
      }),
      (VaultItemBaseDisplay.prototype.sortByNameAsc = function (t, e) {
        var o = r(t, e),
          s;
        return o && o.defultFolderFound
          ? o.returnValue
          : (s = a(t, e)) || VaultItemBase.prototype.sortByTextFunction(t, e, "getDisplayName", !0);
      }),
      (VaultItemBaseDisplay.prototype.sortByNameDesc = function (t, e) {
        var o = r(t, e),
          s;
        return o && o.defultFolderFound
          ? o.returnValue
          : (s = a(t, e)) || VaultItemBase.prototype.sortByTextFunction(t, e, "getDisplayName", !1);
      }),
      (VaultItemBaseDisplay.prototype.sortByFolderName = function (n) {
        return function (t, e) {
          var o = t._model._shareInfo ? parseInt(t._model._shareInfo.associative) : 0,
            s = e._model._shareInfo ? parseInt(e._model._shareInfo.associative) : 0;
          return t.getDisplayName.apply(t) == Strings.Vault.DEFAULT_ACCEPT_FOLDER
            ? -1
            : e.getDisplayName.apply(e) == Strings.Vault.DEFAULT_ACCEPT_FOLDER
            ? 1
            : (t instanceof SharedGroupDisplay == e instanceof SharedGroupDisplay && o == s) ||
              (t instanceof SharedGroupDisplay != e instanceof SharedGroupDisplay && o != s)
            ? n
              ? VaultItemBaseDisplay.prototype.sortByNameAsc(t, e)
              : VaultItemBaseDisplay.prototype.sortByNameDesc(t, e)
            : t instanceof SharedGroupDisplay && !o
            ? -1
            : 1;
        };
      }),
      (VaultItemBaseDisplay.prototype.sortByMostRecent = function (t, e) {
        var o = a(t, e);
        return o || VaultItemBase.prototype.sortByFunction(t, e, "getLastTouchValue", !1);
      }),
      (VaultItemBaseDisplay.prototype.getLastTouchValue = function () {
        return this._model.getLastTouch();
      }),
      (VaultItemBaseDisplay.prototype.sortOmarMatchingItems = function (t, e) {
        return t.getRecordType() === e.getRecordType() || ("Account" !== t.getRecordType() && "Account" !== e.getRecordType())
          ? VaultItemBase.prototype.sortByNameAsc(t._model, e._model)
          : "Account" === t.getRecordType()
          ? -1
          : 1;
      }),
      (VaultItemBaseDisplay.prototype.getSearchResultItems = function (t, e) {
        return 0 < t.length && !this.matches(t, e) ? null : this;
      }),
      (VaultItemBaseDisplay.prototype.applySearch = function (t, e) {
        var e = this.matches(t, e);
        return 0 < t.length && !e ? (null !== e && this.hide(), null) : (this.show(), this.expandParents(!1), 1);
      }),
      (VaultItemBaseDisplay.prototype.expandParents = function () {
        for (var t = this._parent; t; ) t.expand(), (t = t._parent);
      }),
      (VaultItemBaseDisplay.prototype.matches = function (t, e, o) {
        if (0 === t.length) return !(this._cachedSearchTokens = void 0);
        this._cachedSearchTokens || (this._cachedSearchTokens = this._model.getSearchTokens(e));
        var s = this._cachedSearchTokens;
        if (s) {
          for (var n = 0; n < t.length; ++n) {
            for (var i = t[n].toLowerCase(), r = !1, a = 0, l = s.length; a < l; ++a) {
              var p = s[a].toLowerCase();
              if (-1 < p.indexOf(i)) {
                (r = !0), o && (o.matchedSearchToken = p), y.getOption(e, "removeMatchingTerms", !1) && (t.splice(n, 1), --n);
                break;
              }
            }
            if (!r) return !1;
          }
          return !0;
        }
        return null;
      }),
      (VaultItemBaseDisplay.prototype.addViewToModel = function () {
        this._model && this._model.addView(this);
      }),
      (VaultItemBaseDisplay.prototype.removeViewFromModel = function () {
        this._model && this._model.removeView(this);
      }),
      (VaultItemBaseDisplay.prototype.createTextElement = function (t, e, o) {
        var t = y.createElement(t, o),
          o = h.createTextNode(e.apply(this));
        return t.appendChild(o), this._textElements.push({ element: o, data: e }), t;
      }),
      (VaultItemBaseDisplay.prototype.setElement = function (t) {
        t ? ((this._element = t), (this._$_element = c(t))) : ((this._element = null), (this._$_element = null));
      }),
      (VaultItemBaseDisplay.prototype.getScrollTop = function () {
        var t = this._element.offsetTop,
          e = this.getContainer(),
          o = this._parent !== e ? this._parent.getLevel() + 1 : 0;
        return 0 < o && e && e.usesStickyFolders() && (t -= this._parent._$_element.find(".folderContainer").outerHeight(!0) * o), t;
      }),
      (VaultItemBaseDisplay.prototype.updateTextElements = function () {
        if (this._textElements)
          for (var t = 0, e = this._textElements.length; t < e; ++t) {
            var o = this._textElements[t];
            o.element.textContent = o.data.apply(this);
          }
        this.postUpdateTextElements();
      }),
      (VaultItemBaseDisplay.prototype.updateView = function (t, e) {
        this.updateTextElements(), this.setAccesibilityAttributes();
        var o = this.getContainer(),
          s,
          n;
        this._parent instanceof FavoritesGroup
          ? this._model.isFavorite() || (this._parent.removeChild(this), o && o.checkFavoriteWithNoFolder(!1))
          : o &&
            ((this._parent ? this._parent._model : null) !== t &&
              o.displayItemsInSpecifiedGroup() &&
              ((n = o), t && (n = (n = o.getGroupDisplay(t)) || o.addDummyGroups(t)), this._parent.removeChild(this), n.addChild(this, e)),
            this._model.isFavorite()) &&
            (o.addFavorite(this._model), o.checkFavoriteWithNoFolder(!0));
      }),
      (VaultItemBaseDisplay.prototype.reattachElement = function () {
        this._parent && this._parent._itemContents && this._parent._itemContents.appendChild(this._element);
      }),
      (VaultItemBaseDisplay.prototype.addClass = function (t) {
        y.addClass(this._element, t);
      }),
      (VaultItemBaseDisplay.prototype.setParent = function (t) {
        this._parent = t;
      }),
      (VaultItemBaseDisplay.prototype.show = function () {
        null !== this._element &&
          (this._$_element.LP_show(), null === this._element.parentElement && this.reattachElement(), (this._shown = !0));
      }),
      (VaultItemBaseDisplay.prototype.hide = function () {
        null !== this._$_element && (this._$_element.LP_hide(), this.deselect(), (this._shown = !1));
      }),
      (t = function (t, e) {
        var o;
        null !== t && (((o = t.getAttribute("class").split(" "))[0] = e), t.setAttribute("class", o.join(" ")));
      }),
      (VaultItemBaseDisplay.prototype.displayAsList = function () {
        t(this._element, VaultItemBaseDisplay.prototype.DISPLAY_LIST);
      }),
      (VaultItemBaseDisplay.prototype.displayAsGrid = function () {
        t(this._element, VaultItemBaseDisplay.prototype.DISPLAY_GRID);
      }),
      (VaultItemBaseDisplay.prototype.setupListeners = function (t, e) {
        t.bind("click", this._eventHandler),
          t.bind("contextmenu", this._eventHandler),
          e.keyboardNavigation &&
            (t.bind("keydown", this._eventHandler), t.bind("focusin", this._eventHandler), t.bind("focusout", this._eventHandler));
      }),
      (VaultItemBaseDisplay.prototype.shouldDragAndDrop = function (t) {
        var e = y.getOption(t, "allowDrag", !0),
          o;
        return y.getOption(t, "forceDrag", !1) || (e && this.isDraggable());
      }),
      (VaultItemBaseDisplay.prototype.build = function (t) {
        for (
          var e = t.display || this.getItemClass(),
            o =
              (this.DISPLAY_OPTIONS.COMPACT && (e += " " + this.COMPACT_CLASS),
              this instanceof SharedFolderItem ? " newSharedFolderItem" : ""),
            e = { class: e + o, vaultaction: this.getTopLevelItemAction(), draggable: this.shouldDragAndDrop(t).toString() },
            e = (t.keyboardNavigation && (e.tabindex = "17"), y.createElement("div", e)),
            s =
              (t.additionalItemClasses && y.addClass(e, t.additionalItemClasses),
              t.minimized && y.addClass(e, "minimized"),
              y.addClass(e, "space-clickable"),
              y.createElement("div", { class: "itemWrapper" })),
            n = (e.appendChild(s), y.createElement("div", "listCheckboxContainer")),
            n = (s.appendChild(n), this.buildItemIconElement(t)),
            n = (n ? s.appendChild(n) : y.addClass(e, "noIcon"), y.createElement("div", "itemInfo")),
            i = (s.appendChild(n), y.createElement("div", "itemInfoTable")),
            r = (n.appendChild(i), this.buildItemInfoTextElements(t)),
            a = 0,
            l = r.length;
          a < l;
          ++a
        ) {
          var p = r[a];
          0 === a ? 1 < l && y.addClass(p, "first") : y.addClass(p, "showLarge"), i.appendChild(p);
        }
        i.appendChild(y.createElement("div", { class: "list-view_pw-alert-info-icon" + o, "data-alert-id": this._model._data.aid }));
        for (var u = this.buildItemButtons(t), a = 0, l = u.length, s, n, c, h, o; a < l; ++a) {
          var d = y.createElement("div", "itemButtonCell");
          d.appendChild(u[a]), i.appendChild(d);
        }
        return (
          this instanceof SharedFolderItem &&
            this._model.canAdminister() &&
            ((s = y.createElement("div", "manageButtonContainer")),
            i.appendChild(s),
            ((n = y.createElement("button", "manageItemsButton")).textContent = Strings.translateString("Manage items")),
            (c = this),
            (n.onclick = function (t) {
              t.stopPropagation(),
                "undefined" != typeof reduxApp &&
                  "function" == typeof reduxApp.openSharingDrawer &&
                  (reduxApp.openSharingDrawer(c._model._data.sharefolderid),
                  bg.sendLpImprove("Manage Items Clicked", { source: "Manage Shared Folders" }));
            }),
            s.appendChild(n),
            ((h = y.createElement("button", "manageRecipientsButton")).textContent = Strings.translateString("Manage recipients")),
            (h.onclick = function (t) {
              t.stopPropagation(), h.closest(".list").querySelector(".list.newSharedFolderItem .itemButton.edit").click();
            }),
            s.appendChild(h),
            ((o = y.createElement("button", "deleteSharedFolderButton")).onclick = function (t) {
              t.stopPropagation(),
                "undefined" != typeof reduxApp &&
                  "function" == typeof reduxApp.openSharingDrawer &&
                  reduxApp.openDeleteSharedFolderModal(c._model._data.sharefolderid);
            }),
            s.appendChild(o)),
          e
        );
      }),
      (VaultItemBaseDisplay.prototype.setAccesibilityAttributes = function () {
        this._element && this._element.setAttribute("aria-label", this._model.toString());
      }),
      (VaultItemBaseDisplay.prototype.buildItemHoverInfo = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.buildItemButtons = function (t) {
        for (
          var e = [], o = this._model.isDeleted() ? this.getDeletedItemButtonActions() : this.getItemButtonActions(), s = 0;
          s < o.length;
          ++s
        ) {
          var n = o[s];
          this.isExcludedAction(n, t) || e.push(y.buildItemButton(n));
        }
        return e;
      }),
      (VaultItemBaseDisplay.prototype.rebuild = function () {
        var t, e;
        return !(
          !this._element ||
          !this._element.parentElement ||
          ((t = this.getBuildOptions()),
          (e = this.build(t)),
          this._element.parentElement.insertBefore(e, this._element),
          this._$_element.remove(),
          this.postBuild(e, t),
          0)
        );
      }),
      (VaultItemBaseDisplay.prototype.preBuild = function (t) {
        var t = y.getOption(t, "override", null),
          t;
        "function" == typeof t && ((t = t.apply(this)), c.extend(this, t));
      }),
      (VaultItemBaseDisplay.prototype.postBuild = function (t, e, o) {
        (e = e || {}),
          this.setElement(t),
          this.setupListeners(this._$_element, e),
          this.addViewToModel(),
          this.setAccesibilityAttributes(o);
      }),
      (VaultItemBaseDisplay.prototype.buildItemIconElement = function () {
        var t = y.createElement("div", "itemIcon"),
          e = bg.get("LPContentScriptFeatures").omaria,
          o,
          e = this.getIconElement({ isOmarSet: e }),
          e =
            (this.setRandomBgColor(e),
            t.appendChild(e),
            e.setAttribute("aria-hidden", "true"),
            e.setAttribute("role", "presentation"),
            y.createElement("div", "itemIconOverlay")),
          s = (t.appendChild(e), this._model.isDeleted() ? null : this.getLaunchElementAction()),
          s,
          s;
        return (
          null === s ||
            this.isExcludedAction(s) ||
            ((s = y.createElement(
              "button",
              { class: "launchButton", tabindex: 17, vaultaction: s },
              this.getLaunchElementTitle() || Strings.Vault[Constants.ACTION_BUTTONS[s].title]
            )),
            e.appendChild(s)),
          this.isMultiSelectable() &&
            ((s = y.createElement("button", { class: "itemCheckbox", tabindex: 17, "aria-label": "Select" })), e.appendChild(s)),
          t
        );
      }),
      (VaultItemBaseDisplay.prototype.buildItemInfoTextElement =
        ((d = function (t) {
          var e = null;
          if (0 < t.length) for (var e = y.createElement("div"), o = 0, s = t.length; o < s; ++o) e.appendChild(t[o]);
          return e;
        }),
        function (t) {
          for (var e = y.createElement("div", "itemInfoText"), o = 0, s = t.length; o < s; ++o) {
            var n = t[o];
            (n = n instanceof Array ? d(n) : n) && e.appendChild(n);
          }
          return e;
        })),
      (VaultItemBaseDisplay.prototype.getTopLevelItemAction = function () {
        return Constants.ACTION_TOGGLE_SELECT;
      }),
      (VaultItemBaseDisplay.prototype.getLaunchElementAction = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.getLaunchElementTitle = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.getDisplayName = function () {
        return this._model.getName();
      }),
      (VaultItemBaseDisplay.prototype.createSecondaryNameTextElement = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.getSecondaryActionText = function () {
        return this.secondaryActionText;
      }),
      (VaultItemBaseDisplay.prototype.setSecondaryActionText = function (t) {
        (this.secondaryActionText = t), this.updateTextElements(), this._$_element.addClass("second-action");
      }),
      (VaultItemBaseDisplay.prototype.hideSecondaryActionText = function (t) {
        this._$_element.removeClass("second-action");
      }),
      (VaultItemBaseDisplay.prototype.createSecondaryActionText = function () {
        return this.createTextElement("p", this.getSecondaryActionText, "actionText");
      }),
      (VaultItemBaseDisplay.prototype.showHelpText = function (t) {
        return (t = t || this.getBuildOptions()) && t.showHelpText;
      }),
      (VaultItemBaseDisplay.prototype.postUpdateTextElements = function () {
        this._$_element &&
          this.showHelpText() &&
          (this._secondaryElement && this._secondaryElement.textContent
            ? this._$_element.removeClass("noInfoText")
            : this._$_element.addClass("noInfoText"));
      }),
      (VaultItemBaseDisplay.prototype.wrapSecondaryElement = function (t, e) {
        var e, o;
        return this.showHelpText(e)
          ? ((e = c(y.createElement("div", "actionTextWrapper"))),
            (o = c(y.createElement("div", "actionTextWrapperInner"))),
            e.append(o),
            o.append(t || y.createElement("p", "actionTextPlaceholder", "")),
            o.append(this.createSecondaryActionText()),
            e.get(0))
          : t;
      }),
      (VaultItemBaseDisplay.prototype.buildItemInfoTextElements = function (t) {
        this._secondaryElement = this.createSecondaryNameTextElement();
        var e = y.createElement("div", { class: "vault-item-displayname" }),
          o = this.createTextElement("p", this.getDisplayName, "name"),
          s = y.createElement("div", { class: "tile-view_pw-alert-info-icon", "data-alert-id": this._model._data.aid });
        return (
          e.appendChild(s), e.appendChild(o), [this.buildItemInfoTextElement([e, this.wrapSecondaryElement(this._secondaryElement, t)])]
        );
      }),
      (VaultItemBaseDisplay.prototype.getItemClass = function () {
        return VaultItemBaseDisplay.prototype.DISPLAY_LIST;
      }),
      (VaultItemBaseDisplay.prototype.isDraggable = function () {
        return !1;
      }),
      (VaultItemBaseDisplay.prototype.getIconElement = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.setRandomBgColor = function () {
        return null;
      }),
      (VaultItemBaseDisplay.prototype.isMultiSelectable = function () {
        return !0;
      }),
      (VaultItemBaseDisplay.prototype.destruct = function () {
        if (!this._destructed) {
          for (var t in (this._parent && (this.deselect(), this._parent.removeChild(this), this._$_element) && this._$_element.remove(),
          this.removeViewFromModel(),
          this))
            this.hasOwnProperty(t) && delete this[t];
          this._destructed = !0;
        }
      }),
      (VaultItemBaseDisplay.prototype.showAllChildren = function () {
        return this.show(), 1;
      }),
      (VaultItemBaseDisplay.prototype.applyFilter = function (t) {
        return void 0 === t.func || t.func(this) ? (this.show(), 1) : (this.hide(), 0);
      }),
      (VaultItemBaseDisplay.prototype.collapseAll = function () {}),
      (VaultItemBaseDisplay.prototype.expandAll = function () {}),
      (VaultItemBaseDisplay.prototype.displayCompact = function () {
        this._$_element && this._$_element.addClass(this.COMPACT_CLASS);
      }),
      (VaultItemBaseDisplay.prototype.displayLarge = function () {
        this._$_element && this._$_element.removeClass(this.COMPACT_CLASS);
      }),
      (VaultItemBaseDisplay.prototype.openMoreOptions = function () {}),
      (VaultItemBaseDisplay.prototype.addFavorite = function () {}),
      (VaultItemBaseDisplay.prototype.getContainer = function () {
        for (var t = this; t._parent; ) t = t._parent;
        return t instanceof Container ? t : null;
      }),
      (VaultItemBaseDisplay.prototype.getBuildOptions = function () {
        for (var t = [], e = this; e; ) e._buildOptions && t.unshift(e._buildOptions), (e = e._parent);
        return t.unshift({}), c.extend.apply(window, t);
      }),
      (VaultItemBaseDisplay.prototype.getSelectedItems = function () {
        var t = [],
          e = this.getContainer();
        return (t = e ? e.getSelectedItems() : t);
      }),
      (VaultItemBaseDisplay.prototype.usesStickyFolders = function () {
        var t = !1,
          e = this.getContainer();
        return (t = e ? e.usesStickyFolders() : t);
      }),
      (VaultItemBaseDisplay.prototype.openMoveToFolderMenu = function (t, e) {
        var o = c(t).closest(".subMenuOption").find(".subMenu");
        if (0 === o.children().length) {
          e.sort(VaultItemBaseDisplay.prototype.sortByNameAsc);
          for (var s = 0, n = e.length; s < n; ++s) {
            var i = e[s],
              r;
            i instanceof AuroraGroupDisplay ||
              (bg.get("g_nofolder_feature_enabled") && l(i) && (i._contextMenuElement.textContent = bg.gs(Strings.Vault.NO_FOLDER)),
              (r = c(i._contextMenuElement)).unbind("click"),
              r.bind("click", this.createContextMenuHandler({ group: i._model, scrollIntoView: !1 })),
              o.append(r));
          }
        }
        o.show("fast"), y.addKeyBoardNavigation(o.children()), y.setNavIndex(0);
      }),
      (VaultItemBaseDisplay.prototype.getOtherGroups = function (t) {
        var e = [],
          o = this.getContainer(),
          s = this._parent === o ? this : this._parent;
        if (o)
          for (var n = o.getAllSubGroups(t), i = s.getAllSubGroups(t), r = 0, a = n.length; r < a; ++r)
            n[r] !== s && (0 < i.length && i[0] === n[r] ? (r += i.length - 1) : e.push(n[r]));
        return e;
      }),
      (VaultItemBaseDisplay.prototype.getAllOtherGroupsWithSubItems = function (t) {
        var e = [],
          o = this.getContainer(),
          s = this._parent === o ? this : this._parent;
        if (o) for (var n = o.getAllSubGroups(t), i = 0, r = n.length; i < r; ++i) n[i] !== s && e.push(n[i]);
        if (bg.get("g_nofolder_feature_enabled")) {
          for (var a = !1, i = 0, o; i < e.length; i++)
            if (l(e[i])) {
              a = !0;
              break;
            }
          a ||
            this._parent._model._data.group == Strings.Consts.NONE_GROUP ||
            ((o = p.getGroupByName(Strings.Consts.NONE_GROUP))
              ? o instanceof DummyGroup && (o = o._views[0])
              : (o = new DummyGroupDisplay(new DummyGroup(Strings.Consts.NONE_GROUP, null), null)),
            e.push(o));
        }
        return e;
      }),
      (GroupDisplay.prototype.getAllOtherGroupsWithSubItems = function (t) {
        var e = this.getOtherGroups(t);
        if (bg.get("g_nofolder_feature_enabled"))
          for (var o = 0; o < e.length; o++)
            if (l(e[o])) {
              e.splice(o, 1);
              break;
            }
        return e;
      }),
      (A = VaultItemBaseDisplay.prototype.DISPLAY_GRID),
      Topics.get(Topics.DISPLAY_GRID).subscribe(function () {
        A = VaultItemBaseDisplay.prototype.DISPLAY_GRID;
      }),
      Topics.get(Topics.DISPLAY_LIST).subscribe(function () {
        A = VaultItemBaseDisplay.prototype.DISPLAY_LIST;
      }),
      null === (m = h.getElementById("dragElement")) && ((m = y.createElement("div", { id: "dragElement" })), h.body.appendChild(m)),
      (VaultItemDisplay.prototype.navigateDown = function () {
        this.getItemClass() === this.DISPLAY_LIST
          ? this.navigateForward()
          : VaultItemBaseDisplay.prototype.navigateDown.apply(this, arguments);
      }),
      (VaultItemDisplay.prototype.navigateUp = function () {
        this.getItemClass() === this.DISPLAY_LIST
          ? this.navigateBackward()
          : VaultItemBaseDisplay.prototype.navigateUp.apply(this, arguments);
      }),
      (VaultItemDisplay.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU
          ? this.openMoveToFolderMenu(e.target, this.getAllSubGroups(!0))
          : VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
      }),
      (VaultItemDisplay.prototype.getItemClass = function () {
        return A;
      }),
      (VaultItemDisplay.prototype.getAllSubGroups = function () {
        return this._parent.getAllSubGroups();
      }),
      (VaultItemDisplay.prototype.setupListeners = function (t, e) {
        VaultItemBaseDisplay.prototype.setupListeners.apply(this, arguments),
          this.shouldDragAndDrop(e) &&
            ((t = t.get(0)),
            LPPlatform.addEventListener(t, "dragstart", this._eventHandler),
            LPPlatform.addEventListener(t, "dragend", this._eventHandler),
            e) &&
            "function" == typeof e.dragstart &&
            LPPlatform.addEventListener(t, "dragstart", e.dragstart);
      }),
      (VaultItemDisplay.prototype.destruct = function () {
        var t;
        this._destructed ||
          (this._element &&
            (LPPlatform.removeEventListener(this._element, "dragstart", this._eventHandler),
            LPPlatform.removeEventListener(this._element, "dragend", this._eventHandler),
            (t = this.getContainer())) &&
            "function" == typeof t._buildOptions.dragstart &&
            LPPlatform.removeEventListener(this._element, "dragend", t._buildOptions.dragstart),
          VaultItemBaseDisplay.prototype.destruct.apply(this, arguments));
      }),
      (VaultItemDisplay.prototype.isDraggable = function () {
        return !0;
      }),
      (VaultItemDisplay.prototype.getScrollTop = function () {
        var t = VaultItemBaseDisplay.prototype.getScrollTop.apply(this, arguments);
        return (t -= parseInt(this._$_element.css("margin-top")));
      }),
      (VaultItemDisplay.prototype.handleDragStart = function (t) {
        for (
          var e = "function" == typeof t.dataTransfer.setDragImage,
            o = (y.removeDOMChildren(m), this.getItemsForAction()),
            s = (y.setDragItems(o), []),
            n = {},
            i = 0,
            r = o.length,
            a = 0;
          i < r;
          ++i
        ) {
          var l = o[i];
          if ((l._parent.setDragTarget(!1), e)) {
            if (a < 5) {
              var p = l._model,
                u = p.getID(),
                c = !0;
              if (void 0 === n[u]) s.push(p), (n[u] = p);
              else
                for (var h = 0, d = s.length; h < d; ++h)
                  if (p === s[h]) {
                    c = !1;
                    break;
                  }
              c && (m.appendChild(l.buildDragElement(a === r - 1)), ++a);
            } else 5 === a && m.appendChild(y.createElement("div", "dragItem last", "... +" + (r - i) + " more"));
            l._$_element.addClass("dragStarted");
          }
        }
        e && (t.dataTransfer.setDragImage(m, -20, 0), t.dataTransfer.setData("text/plain", ""));
        var t = this.getContainer();
        t && t.handleDragStart();
      }),
      (VaultItemDisplay.prototype.handleDragEnd = function (t) {
        for (var e = y.getDragItems(), o = 0, s = e.length; o < s; ++o) {
          var n = e[o];
          n._parent && n._parent.setDragTarget(!0), n._$_element.removeClass("dragStarted");
        }
        var i = this.getContainer();
        i && i.handleDragEnd();
      }),
      (VaultItemDisplay.prototype.buildDragElement = function (t) {
        var t = y.createElement("div", { class: "dragItem" + (t ? " last" : "") }),
          e = y.createElement("div", "dragIconContainer itemIcon"),
          o = this.getIconElement(),
          o =
            (o.setAttribute("class", o.getAttribute("class") + " dragIcon"),
            e.appendChild(o),
            t.appendChild(e),
            y.createElement("div", "dragName", this._model.getName()));
        return t.appendChild(o), t;
      }),
      (AccountBaseDisplay.prototype.convertTimeToString =
        ((_ = function (t, e, o) {
          return (t = Math.floor(t)), Strings.translateString(1 === t ? e : o, t);
        }),
        function (t) {
          var t;
          return void 0 === t || t < 31536e3
            ? Strings.Vault.NEVER
            : (t = y.get_gmt_timestamp() - t) < 0
            ? Strings.Vault.JUST_NOW
            : t < 60
            ? _(t, Strings.Vault.SECOND, Strings.Vault.SECONDS)
            : t < 3600
            ? _(t / 60, Strings.Vault.MINUTE, Strings.Vault.MINUTES)
            : t < 86400
            ? _(t / 60 / 60, Strings.Vault.HOUR, Strings.Vault.HOURS)
            : t < 604800
            ? _(t / 60 / 60 / 24, Strings.Vault.DAY, Strings.Vault.DAYS)
            : t < 2678400
            ? _(t / 60 / 60 / 24 / 7, Strings.Vault.WEEK, Strings.Vault.WEEKS)
            : t < 31536e3
            ? _(t / 60 / 60 / 24 / 31, Strings.Vault.MONTH, Strings.Vault.MONTHS)
            : _(t / 60 / 60 / 24 / 365, Strings.Vault.YEAR, Strings.Vault.YEARS);
        })),
      (AccountBaseDisplay.prototype.getLastTouchString = function () {
        return this.convertTimeToString(this._model.getLastTouch());
      }),
      (AccountBaseDisplay.prototype.buildItemInfoTextElements = function () {
        var t = VaultItemDisplay.prototype.buildItemInfoTextElements.apply(this, arguments);
        return (
          t.push(
            this.buildItemInfoTextElement([
              y.createElement("p", "small infoLabel", Strings.Vault.LAST_USED),
              this.createTextElement("p", this.getLastTouchString, "small")
            ])
          ),
          t
        );
      }),
      (AccountBaseDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          (void 0 !== this._model._data.aid && "string" == typeof this._model._data.aid && "sso_" === this._model._data.aid.substr(0, 4)) ||
            (t || e.push(new y.ContextMenuItem(Constants.ACTION_EDIT)),
            e.push(new y.ContextMenuItem(Constants.ACTION_DELETE)),
            e.push(new y.ContextMenuItem(Constants.ACTION_SHARE)),
            t || e.push(new y.ContextMenuItem(Constants.ACTION_CLONE)),
            e.push(this.getMoveOrganizeLPMenu()),
            this._parent.hasSubGroup() &&
              !bg.get("g_nofolder_feature_enabled") &&
              e.push(new y.ContextMenuItem(Constants.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU, { divider: !0, submenu: !0 }))),
          e
        );
      }),
      (AccountBaseDisplay.prototype.getItemButtonActions = function () {
        var t;
        return void 0 !== this._model._data.aid && "string" == typeof this._model._data.aid && "sso_" === this._model._data.aid.substr(0, 4)
          ? []
          : ((t = [Constants.ACTION_EDIT]),
            this._model.isSharingEnabled() && t.push(Constants.ACTION_SHARE),
            t.push(Constants.ACTION_DELETE),
            t);
      }),
      (AccountBaseDisplay.prototype.isExcludedAction = function (t, e) {
        switch (t) {
          case Constants.ACTION_COPY_USERNAME:
          case Constants.ACTION_COPY_PASSWORD:
          case Constants.ACTION_COPY_NOTE:
          case Constants.ACTION_COPY_URL:
            return !LPPlatform.allowClipboardCopy(t === Constants.ACTION_COPY_PASSWORD && this._model.passwordProtected());
          case Constants.ACTION_SHARE:
            return !this._model.isSharingEnabled() || !LPFeatures.allowIndividualSharing();
          case Constants.ACTION_COPY_TOTP:
            return !p.isEnterpriseUser() || !LPFeatures.allowTwoFactorCode() || !LPPlatform.allowClipboardCopy();
          default:
            return VaultItemDisplay.prototype.isExcludedAction.apply(this, arguments);
        }
      }),
      (AccountDisplay.prototype.buildItemIconElement = function () {
        var t = AccountBaseDisplay.prototype.buildItemIconElement.apply(this, arguments);
        return this.bigImg || t.setAttribute("class", t.getAttribute("class") + " smallIcon"), t;
      }),
      (AccountDisplay.prototype.getDisplayName = function () {
        if (this._model.hasGeneratedPassword()) {
          var t = Strings.Vault.GENERATED_PREFIX + " ",
            e = this._model.getName();
          if (0 === e.indexOf(t)) return e.substring(t.length);
        }
        return AccountBaseDisplay.prototype.getDisplayName.apply(this, arguments);
      }),
      (AccountDisplay.prototype.getUsernameValue = function () {
        return this._model.getUsername();
      }),
      (AccountDisplay.prototype.createSecondaryNameTextElement = function () {
        var t;
        return this.getUsernameValue()
          ? this.createTextElement("p", this.getUsernameValue, "small infoLabel")
          : this._model.hasGeneratedPassword()
          ? ((t = y.createElement("p", "small infoLabel", Strings.Vault.GENERATED)).insertBefore(
              y.createElement("i", "badge warn small"),
              t.firstChild
            ),
            t)
          : void 0;
      }),
      (AccountDisplay.prototype.getIconElement = function (t) {
        var e = p.getImage(this, t),
          o = t && t.isOmarSet,
          s = "smallIcon",
          t,
          n;
        if ((this.bigImg && (s = "bigIcon"), t && t.useSquareIcon && (s = "squareIcon"), null == e)) {
          if (o)
            return (
              (t = y.createElement("div", "noteFormFillIcon noIconPassword")).appendChild(
                y.createElement("i", { class: ["bigIcon", "fa fa-lock"] })
              ),
              t
            );
          e =
            "data:image/gif;base64,R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=";
        } else 0 === e.indexOf("lps lp") && ((s += " " + e), (e = "../images/clear_icon.gif"));
        return y.createElement("img", { class: s, src: e });
      }),
      (AccountDisplay.prototype.getLaunchElementAction = function () {
        return Constants.ACTION_LAUNCH;
      }),
      (AccountDisplay.prototype.getContextMenuItems = function (t) {
        var e = AccountBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          t ||
            (e.push(new y.ContextMenuItem(Constants.ACTION_COPY_USERNAME, { divider: !0 })),
            e.push(new y.ContextMenuItem(Constants.ACTION_COPY_PASSWORD)),
            e.push(new y.ContextMenuItem(Constants.ACTION_COPY_TOTP)),
            e.push(new y.ContextMenuItem(Constants.ACTION_COPY_URL)),
            e.push(new y.ContextMenuItem(Constants.ACTION_GO_TO_URL, { divider: !0 }))),
          e
        );
      }),
      (AccountDisplay.prototype.isExcludedAction = function (t, e) {
        switch (t) {
          case Constants.ACTION_LAUNCH:
          case Constants.ACTION_GO_TO_URL:
            return !this._model.isURLLaunchable() || AccountBaseDisplay.prototype.isExcludedAction.apply(this, arguments);
          default:
            return AccountBaseDisplay.prototype.isExcludedAction.apply(this, arguments);
        }
      }),
      (AccountDisplay.prototype.setRandomBgColor =
        ((g = [
          "8A88C3",
          "5049B8",
          "393484",
          "1D1961",
          "08035F",
          "6AB1C1",
          "3E9EB5",
          "2B7182",
          "1A5A6E",
          "0A4C66",
          "75AEF1",
          "4E8FF1",
          "5680B4",
          "3260A4",
          "214171"
        ]),
        (C = null),
        function (t) {
          var e = Math.floor(Math.random() * g.length),
            o = "#" + g[e];
          o == C && (o = "#" + g[(e + Math.floor(Math.random() * g.length)) % g.length]), c(t).css({ background: o }), (C = o);
        })),
      (AuroraAccountDisplay.prototype.buildItemInfoTextElements = function () {
        return VaultItemDisplay.prototype.buildItemInfoTextElements.apply(this, arguments);
      }),
      (AuroraAccountDisplay.prototype.createSecondaryNameTextElement = function () {
        var t = this._model._data.description,
          e;
        return this.createTextElement(
          "p",
          function () {
            return t;
          },
          { class: "small infoLabel", title: t }
        );
      }),
      (AuroraAccountDisplay.prototype.buildItemIconElement = function () {
        return VaultItemBaseDisplay.prototype.buildItemIconElement.apply(this, arguments);
      }),
      (AuroraAccountDisplay.prototype.getIconElement = function (t) {
        return y.createElement("img", { class: "smallIcon", src: this._model._data.imageUrl });
      }),
      (AuroraAccountDisplay.prototype.getItemButtonActions = function () {
        var t = [];
        return t.push({ action: Constants.ACTION_DELETE, title: "Do not show again" }), t;
      }),
      (AuroraAccountDisplay.prototype.getContextMenuItems = function (t) {
        var e = [];
        return (
          t || e.push(new y.ContextMenuItem(Constants.ACTION_GO_TO_URL, { text: "Try " + this.getDisplayName() })),
          e.push(new y.ContextMenuItem(Constants.ACTION_DELETE, { divider: !0, text: "Do not show again" })),
          e
        );
      }),
      (AuroraAccountDisplay.prototype.matches = function (t, e) {
        return (
          T(this),
          0 === t.length ||
            (!!e.searchResults && (0 < t.length && 0 < e.searchResults.length ? f(this, t, e.searchResults) : I(this, t, e)))
        );
      }),
      (AuroraAccountDisplay.prototype.getTopLevelItemAction = function () {
        return null;
      }),
      (AuroraAccountDisplay.prototype.getLaunchElementAction = function () {
        return Constants.ACTION_GO_TO_URL;
      }),
      (AuroraAccountDisplay.prototype.getLaunchElementTitle = function () {
        return "Try " + this.getDisplayName();
      }),
      (AuroraAccountDisplay.prototype.isDraggable = function () {
        return !1;
      }),
      (AuroraAccountDisplay.prototype.setRandomBgColor = function () {}),
      (AuroraAccountDisplay.prototype.isMultiSelectable = function () {
        return !1;
      }),
      (f = function (t, e, o) {
        for (var s = 0, n = o.length; s < n; s++) {
          var i = o[s];
          if (!(i instanceof AuroraGroupDisplay || i instanceof AuroraAccountDisplay))
            for (var r = t._model._data.searchResultKeywords, a = 0, l = r.length; a < l; a++) {
              var p = i.getDisplayName();
              if (p && -1 !== p.toLowerCase().indexOf(r[a]))
                return E(t, { searchToken: r[a], matchSource: "search_result", searchTextLength: D(e) }), !0;
            }
        }
        return !1;
      }),
      (I = function (t, e, o) {
        var s = D(e),
          n,
          e;
        return (
          !(s < 4) &&
          ((n = {}),
          (e = VaultItemBaseDisplay.prototype.matches.call(t, e, o, n)) &&
            E(t, { searchToken: n.matchedSearchToken, matchSource: "search_text", searchTextLength: s }),
          e)
        );
      }),
      (D = function (t) {
        for (var e = 0, o = 0, s = t.length; o < s; o++) e += t[o].length;
        return e;
      }),
      (T = function (t) {
        (t._model.currentSearch = { searchToken: null, matchSource: null, searchTextLength: null }),
          t.searchTrackingTimeout && (clearTimeout(t.searchTrackingTimeout), (t.searchTrackingTimeout = null));
      }),
      (E = function (t, e) {
        (t._model.currentSearch = e),
          (t.searchTrackingTimeout = setTimeout(function () {
            bg.sendLpImprove("promotion_vault_search_hit", c.extend({ product: t._model._data.auroraId }, e)),
              (t.searchTrackingTimeout = null);
          }, 2e3));
      }),
      (CloudAppDisplay.prototype.getContextMenuItems = function (t) {
        return (
          (contextItems = []),
          t ||
            (contextItems.push(new y.ContextMenuItem(Constants.ACTION_COPY_URL)),
            contextItems.push(new y.ContextMenuItem(Constants.ACTION_GO_TO_URL, { divider: !0 }))),
          contextItems
        );
      }),
      (CloudAppDisplay.prototype.isDraggable = function () {
        return !1;
      }),
      (CloudAppDisplay.prototype.isMultiSelectable = function () {
        return !1;
      }),
      (CloudAppDisplay.prototype.getItemButtonActions = function () {
        return [];
      }),
      (ApplicationDisplay.prototype.getIconElement = AccountDisplay.prototype.getIconElement),
      (ApplicationDisplay.prototype.getLaunchElementAction = function () {
        return LPFeatures.allowLaunchApplication() ? Constants.ACTION_LAUNCH : null;
      }),
      (ApplicationDisplay.prototype.getItemButtonActions = function () {
        return [Constants.ACTION_EDIT, Constants.ACTION_DELETE];
      }),
      (ApplicationDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          t ||
            (e.push(new y.ContextMenuItem(Constants.ACTION_COPY_USERNAME)),
            e.push(new y.ContextMenuItem(Constants.ACTION_COPY_PASSWORD)),
            e.push(new y.ContextMenuItem(Constants.ACTION_COPY_TOTP))),
          t
            ? e.push(new y.ContextMenuItem(Constants.ACTION_DELETE, { divider: !0 }))
            : (e.push(new y.ContextMenuItem(Constants.ACTION_EDIT, { divider: !0 })),
              e.push(new y.ContextMenuItem(Constants.ACTION_DELETE)),
              e.push(new y.ContextMenuItem(Constants.ACTION_CLONE))),
          e
        );
      }),
      (ApplicationDisplay.prototype.setRandomBgColor = function () {
        return null;
      }),
      (ApplicationDisplay.prototype.isDraggable = function () {
        return !1;
      }),
      (GroupDisplay.prototype.showHelpText = function () {
        return !1;
      }),
      (GroupDisplay.prototype.handleEnter = function () {
        this.toggleOpen();
      }),
      (GroupDisplay.prototype.focus = function () {
        this._element.children[0].children[0].focus();
      }),
      (GroupDisplay.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_OPEN_ALL:
            p.openAll(this.getItemModelChildren());
            break;
          case Constants.ACTION_TOGGLE_OPEN:
            this.toggleOpen(e);
            break;
          case Constants.ACTION_EXPAND_ALL:
            this.expandAll();
            break;
          case Constants.ACTION_COLLAPSE_ALL:
            this.collapseAll();
            break;
          default:
            VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (GroupDisplay.prototype.getModelItemsForAction = function (t) {
        switch (t) {
          case Constants.ACTION_PURGE:
          case Constants.ACTION_RESTORE:
            return this.getItemModelChildren();
          case Constants.ACTION_SHARE:
            return this.getItemModelChildren(!0).concat(this.getAllSubGroupModels(!0));
          case Constants.ACTION_DELETE:
            return this.getItemModelChildren(!0).concat(this.getAllSubGroupModels(!0)).concat(this._model);
          case Constants.ACTION_MOVE_TO_FOLDER:
            return this.getItemModelChildren(!0).concat(this.getAllSubGroupModels(!0));
          default:
            VaultItemBaseDisplay.prototype.getModelItemsForAction.apply(this, arguments);
        }
      }),
      (GroupDisplay.prototype.isDeleted = function () {
        return !0 === this._deleted;
      }),
      (GroupDisplay.prototype.setDeleted = function () {
        this._deleted = !0;
      }),
      (GroupDisplay.prototype.updateTextElements = function () {
        VaultItemBaseDisplay.prototype.updateTextElements.apply(this, arguments),
          this._parent && this._parent.updateTextElements.apply(this._parent, arguments);
      }),
      (GroupDisplay.prototype.updateView = function () {
        var t = this.getLevel(),
          e;
        VaultItemDisplay.prototype.updateView.apply(this, arguments), this.getLevel() !== t && this.rebuild();
      }),
      (GroupDisplay.prototype.isExcludedAction = function (t, e) {
        return t !== Constants.ACTION_SHARE
          ? VaultItemBaseDisplay.prototype.isExcludedAction.apply(this, arguments)
          : !LPFeatures.allowSharedFolders();
      }),
      (GroupDisplay.prototype.parseExcludeActions = function () {
        var t = y.getOption(this._buildOptions, "excludeActions", null);
        if (t) {
          for (var e = {}, o = 0, s = t.length; o < s; ++o) e[t[o]] = !0;
          this._buildOptions.excludeActions = e;
        }
      }),
      (GroupDisplay.prototype.isEmpty = function (t) {
        return 0 === this.getChildren(t).length;
      }),
      (GroupDisplay.prototype.applyToChildren = function (t, e) {
        for (var o = this.getChildren(e), s = 0, n = o.length; s < n; ++s) {
          var i = o[s];
          this.applyToChild(t, i);
        }
      }),
      (GroupDisplay.prototype.applyToChild = function (t, e) {
        switch (typeof t) {
          case "string":
            e[t].apply(e);
            break;
          case "function":
            t.call(this, e);
        }
      }),
      (GroupDisplay.prototype.select = function () {
        this.applyToChildren("select");
      }),
      (GroupDisplay.prototype.destruct = function () {
        this._destructed ||
          (this.applyToChildren(function (t) {
            t.setParent(null), t.destruct();
          }, !0),
          this._$_stickyFolder && this._$_stickyFolder.remove(),
          VaultItemBaseDisplay.prototype.destruct.apply(this));
      }),
      (GroupDisplay.prototype.getLabel = function () {
        return this._model.getGroupName() + " (" + this._itemCount + ")";
      }),
      (GroupDisplay.prototype.getNoFolderLabel = function () {
        return "";
      }),
      (GroupDisplay.prototype.getItemCount = function () {
        return this._itemCount;
      }),
      (GroupDisplay.prototype.displayAsList = function () {
        this._element && this.applyToChildren("displayAsList", !0);
      }),
      (GroupDisplay.prototype.displayAsGrid = function () {
        this._element && this.applyToChildren("displayAsGrid", !0);
      }),
      (GroupDisplay.prototype.buildItem = function (t, e, o, s) {
        t.preBuild(e);
        var n = t.build(e, s);
        o && o.appendChild(n), t.postBuild(n, e, s);
      }),
      (GroupDisplay.prototype.buildItems = function (t, e, o, s) {
        (o = o || this.getBuildOptions()),
          s && "function" == typeof o.secondarySortFunction
            ? t.sort(o.secondarySortFunction)
            : "function" == typeof o.sortFunction && t.sort(o.sortFunction);
        for (var n = 0, i = t.length; n < i; ++n) this.buildItem(t[n], o, e, n);
        0 < t.length && t[t.length - 1].addClass("last");
      }),
      (GroupDisplay.prototype.sortItems = function (t, e, o, s) {
        if ((t.sort(o), e)) {
          (void 0 !== s && !s) || y.removeDOMChildren(e);
          for (var n = 0, i = t.length; n < i; ++n) {
            var r = t[n];
            r._$_element.removeClass("last"), e.appendChild(r._element);
          }
          0 < t.length && t[t.length - 1].addClass("last");
        }
        return t;
      }),
      (GroupDisplay.prototype.buildFolderElement = function (t) {
        var e = this.getLevel(),
          o = "folderContainer",
          e = (0 < e && (o += " tab" + e), y.createElement("div", o)),
          o = { class: "folderLabel space-clickable", vaultaction: Constants.ACTION_TOGGLE_OPEN },
          t = (t.keyboardNavigation && (o.tabindex = "17"), this.createTextElement("div", this.getLabel, o)),
          s;
        return (
          bg.get("g_nofolder_feature_enabled") &&
            -1 < this.getLabel.apply(this).indexOf(Strings.Consts.NONE_GROUP) &&
            ((t = this.createTextElement("div", this.getNoFolderLabel, { class: "fakefolderLabel" })),
            this._parent instanceof Container && this._parent.favoriteSeparatorSwithedOn
              ? e.setAttribute("class", "folderContainer nofolder withFavourites")
              : e.setAttribute("class", "folderContainer nofolder")),
          e.appendChild(t),
          e
        );
      }),
      (GroupDisplay.prototype.build = function (t, e) {
        t = t || {};
        var o = "folder",
          o = (this.DISPLAY_OPTIONS.COMPACT && (o += " " + this.COMPACT_CLASS), y.createElement("div", o)),
          s =
            (o.appendChild(this.buildFolderElement(t)),
            void 0 !== t.additionalGroupClasses && y.addClass(o, t.additionalGroupClasses),
            y.createElement("div", "contents"));
        return (
          o.appendChild(s),
          s.setAttribute("id", "folderContent" + (e + 1)),
          s.setAttribute("aria-labelledby", "folderTitle" + (e + 1)),
          s.setAttribute("role", "region"),
          (this._itemContents = y.createElement("div", "itemContents")),
          (this._subFolderContents = y.createElement("div", "subFolderContents")),
          s.appendChild(this._itemContents),
          s.appendChild(this._subFolderContents),
          this.buildItems(this.getSubGroups(), this._subFolderContents, t),
          this.buildItems(this.getItems(), this._itemContents, t),
          this.usesStickyFolders() && this.buildStickyFolder(t),
          o
        );
      }),
      (GroupDisplay.prototype.setElement = function (t) {
        VaultItemBaseDisplay.prototype.setElement.apply(this, arguments), (this.folderLabel = N(this._$_element).get(0));
      }),
      (GroupDisplay.prototype.setAccesibilityAttributes = function (t) {
        this.folderLabel &&
          (this.folderLabel.setAttribute("id", "folderTitle" + (t + 1)),
          this.folderLabel.setAttribute("role", "button"),
          this.folderLabel.setAttribute("aria-expanded", "true"),
          this.folderLabel.setAttribute("aria-label", this._model.toString()),
          this.folderLabel.setAttribute("aria-controls", "folderContent" + (t + 1)));
      }),
      (GroupDisplay.prototype.preBuild = function () {
        VaultItemBaseDisplay.prototype.preBuild.apply(this, arguments), (this._itemCount = this.getItemChildren().length);
      }),
      (GroupDisplay.prototype.postBuild = function () {
        VaultItemBaseDisplay.prototype.postBuild.apply(this, arguments),
          (this._contents = this._$_element.find(".contents").first()),
          this._expanded || (this.addCollapsedClasses(), this._contents.hide());
      }),
      (GroupDisplay.prototype.buildStickyFolder = function (t) {
        (this._stickyFolder = this.buildFolderElement(c.extend({}, t, { keyboardNavigation: !1 }))),
          (this._$_stickyFolder = c(this._stickyFolder)),
          this._$_stickyFolder.addClass("stickyFolder"),
          this._$_stickyFolder.css("z-index", -this.getLevel()),
          this.setupListeners(this._$_stickyFolder, t);
      }),
      (GroupDisplay.prototype.getLabelHeight = function () {
        return (v = void 0 === v ? this._$_element.find(".folderContainer").outerHeight() : v);
      }),
      (GroupDisplay.prototype.getOffsetTop = function () {
        return void 0 === S && (S = Math.min(0, parseInt(this._$_element.css("margin-top")))), this._element.offsetTop - S;
      }),
      (GroupDisplay.prototype.getOffsetBottom = function () {
        return (
          void 0 === O && (O = Math.max(0, parseInt(this._$_element.css("margin-bottom")))),
          this._element.offsetTop + this._element.clientHeight + O
        );
      }),
      (N = function (t) {
        var e = null,
          e,
          t = (e = t.hasClass("folderContainer") ? t : t.children(".folderContainer")).children(".folderLabel");
        return (t = !bg.get("g_nofolder_feature_enabled") || (t && t.length) ? t : e.children(".fakefolderLabel"));
      }),
      (GroupDisplay.prototype.setupListeners = function (t, e) {
        var o = N(t);
        o &&
          (o.bind("click", this._eventHandler), o.bind("contextmenu", this._eventHandler), e.keyboardNavigation) &&
          o.bind("keydown", this._eventHandler),
          (void 0 !== e.allowDrop && !e.allowDrop) ||
            (t.bind("dragover", this._eventHandler),
            t.bind("drop", this._eventHandler),
            t.bind("dragenter", this._eventHandler),
            t.bind("dragleave", this._eventHandler));
      }),
      (GroupDisplay.prototype.displayCompact = function () {
        VaultItemBaseDisplay.prototype.displayCompact.apply(this, arguments), this._element && this.applyToChildren("displayCompact", !0);
      }),
      (GroupDisplay.prototype.displayLarge = function () {
        VaultItemBaseDisplay.prototype.displayLarge.apply(this, arguments), this._element && this.applyToChildren("displayLarge", !0);
      }),
      (GroupDisplay.prototype.toggleOpen = function () {
        this._expanded ? this.collapse() : this.expand();
        var t = this.getContainer();
        t._buildOptions.folderStateChange && t._buildOptions.folderStateChange(t);
      }),
      (GroupDisplay.prototype.removeCollapsedClasses = function () {
        this._$_element.removeClass("closed"),
          this.folderLabel && this.folderLabel.setAttribute("aria-expanded", "true"),
          this._$_stickyFolder && this._$_stickyFolder.removeClass("closed");
      }),
      (GroupDisplay.prototype.addCollapsedClasses = function () {
        this._contents.css("height", ""),
          this._$_element.addClass("closed"),
          this.folderLabel && this.folderLabel.setAttribute("aria-expanded", "false"),
          this._$_stickyFolder && this._$_stickyFolder.addClass("closed");
      }),
      (GroupDisplay.prototype.expand = function () {
        this._expanded || (this._element && (this.removeCollapsedClasses(), this._contents.slideDown(200)), (this._expanded = !0));
      }),
      (GroupDisplay.prototype.expandAll = function () {
        this.expand(), this.applyToChildren("expandAll");
      }),
      (GroupDisplay.prototype.collapse = function () {
        if (this._expanded) {
          var t, e, e;
          if (bg.get("g_nofolder_feature_enabled"))
            if ((this._model && this._model._data && this._model._data.group) === Strings.Consts.NONE_GROUP) return;
          this._element &&
            ((e = this.getContainer()) &&
              this.usesStickyFolders() &&
              ((e = e.scrollParent), this.getOffsetTop() < e.scrollTop()) &&
              e.scrollTop(this._element.offsetTop - this._stickyFolder.offsetTop),
            this._contents.slideUp(200),
            this.addCollapsedClasses()),
            (this._expanded = !1);
        }
      }),
      (GroupDisplay.prototype.collapseAll = function () {
        this.collapse(), this.applyToChildren("collapseAll");
      }),
      (GroupDisplay.prototype.isExpanded = function () {
        return this._expanded;
      }),
      (GroupDisplay.prototype.hasSubGroup = function () {
        return 0 < this.getSubGroups().length;
      }),
      (GroupDisplay.prototype.getAllSubGroups = function (t) {
        for (var e = this.getSubGroups(t), o = 0, s = e.length; o < s; ++o) e = e.concat(e[o].getAllSubGroups(t));
        return e;
      }),
      (GroupDisplay.prototype.getAllSubGroupModels = function (t) {
        return i(this.getAllSubGroups(t));
      }),
      (GroupDisplay.prototype.getAllSubGroupsOrdered = function (t) {
        for (var e = [], o = this.getSubGroups(t), s = 0, n = o.length; s < n; ++s) {
          var i = o[s];
          i._shown && (e.push(i), (e = e.concat(i.getAllSubGroupsOrdered(t))));
        }
        return e;
      }),
      (GroupDisplay.prototype.reattachElement = function () {
        this.parent && this._parent._subFolderContents && this._parent._subFolderContents.appendChild(this._element);
      }),
      (GroupDisplay.prototype.getSearchOptions = function () {
        return { searchNotes: p.getPreference("searchNotes", !0) };
      }),
      (GroupDisplay.prototype.parseSearchTerms = function (t) {
        for (var e = t.trim().split(" "), o = [], s = 0, n = e.length; s < n; ++s) 0 < e[s].length && o.push(e[s]);
        return o;
      }),
      (GroupDisplay.prototype.applySearch = function (t, e) {
        if ((t instanceof Array || (t = this.parseSearchTerms(t)), this.shouldSkipSearch(t, e))) return null;
        if (
          0 < (t = t.slice()).length &&
          VaultItemBaseDisplay.prototype.applySearch.call(this, t, c.extend({}, e, { removeMatchingTerms: !0 }))
        )
          return this.showAllChildren(e.ignoreFilterOnSearch), this.expand(!1), this._itemCount;
        for (var o = !1, s = this.getChildren(e.ignoreFilterOnSearch), n = (this._itemCount = 0), i = s.length; n < i; ++n) {
          var r = s[n].applySearch(t, e);
          null !== r && ((this._itemCount += r), (o = !0));
        }
        return (
          0 < t.length && !o ? this.hide() : (this.show(), this.updateTextElements()),
          0 === t.length && this.applyFilter(this._filter, { shouldRecurse: !1, forceFilter: !0 }),
          o ? this._itemCount : null
        );
      }),
      (GroupDisplay.prototype.shouldSkipSearch = function (t, e) {
        return e.moreSpecific && !this._shown;
      }),
      (GroupDisplay.prototype.getSearchResultItems = function (t, e) {
        if (0 < t.length && this.matches(t, e)) return this.getItemChildren();
        for (var o = this.getChildren(e.ignoreFilterOnSearch), s = [], n = 0, i = o.length; n < i; ++n) {
          var r = o[n].getSearchResultItems(t, e);
          null !== r && (s = s.concat(r));
        }
        return s;
      }),
      (GroupDisplay.prototype.handleDragEnter = function (t) {
        var e;
        this._dragTarget &&
          (this._$_element.toggleClass("dragTarget"), t.preventDefault(), this._$_element.hasClass("closed")) &&
          (e = this)._openTimeouts.push(
            setTimeout(function () {
              e.expand();
            }, 500)
          ),
          t.stopPropagation();
      }),
      (GroupDisplay.prototype.setDragTarget = function (t) {
        this._dragTarget = t;
      }),
      (GroupDisplay.prototype.handleDragLeave = function (t) {
        var e;
        this._dragTarget &&
          (this._$_element.toggleClass("dragTarget"), t.preventDefault(), void 0 !== (e = this._openTimeouts.pop())) &&
          clearTimeout(e),
          t.stopPropagation();
      }),
      (GroupDisplay.prototype.handleDragOver = function (t) {
        this._dragTarget && t.preventDefault(), t.stopPropagation();
      }),
      (GroupDisplay.prototype.handleDrop = function (t) {
        if (this._dragTarget) {
          this._$_element.removeClass("dragTarget");
          for (var e = y.getDragItems(), o = 0, s = e.length, n; o < s; ++o) {
            e[o]._parent.setDragTarget(!0);
          }
          this.moveToFolder(i(e)), t.preventDefault(), t.stopPropagation();
        }
      }),
      (GroupDisplay.prototype.moveToFolder = function (t) {
        0 < t.length && t[0].moveToFolder(this._model, t);
      }),
      (b = function (t, e) {
        for (var o = 0, s = e.length; o < s; ++o) if (t === e[o]) return e.splice(o, 1), !0;
      }),
      (GroupDisplay.prototype.removeChild = function (t) {
        var e = this._filter && !1 === this._filter.showEmptyGroups && !this.isEmpty(),
          t,
          o;
        b(t, this._items)
          ? (this.updateItemCount(-1), (this._filteredItems = null))
          : (b(t, this._subGroups), this.updateItemCount(-t._itemCount), (this._filteredSubGroups = null)),
          t.setParent(null),
          t._element && t._element.parentElement && t._element.parentElement.removeChild(t._element),
          Topics.get(Topics.REAPPLY_SEARCH).publish(this, this.getSearchOptions()),
          e &&
            this.isEmpty() &&
            (t = this.getContainer()) &&
            t.checkForStateChange(
              ((o = this),
              function () {
                o.applyFilterToParents();
              })
            ),
          this.updateTextElements();
      }),
      (GroupDisplay.prototype.getLevel = function () {
        for (var t = 0, e = this._parent; e._parent; ) ++t, (e = e._parent);
        return t;
      }),
      (GroupDisplay.prototype.updateItemCount = function (t) {
        (this._itemCount += t), this._parent && this._parent.updateItemCount(t);
      }),
      (GroupDisplay.prototype.addChild = function (t, e) {
        t instanceof Array || (t = [t]);
        for (var o = this.getContainer(), s = this.getBuildOptions(), n = [], i = [], r = 0, a = t.length, l, p; r < a; ++r) {
          var u = t[r];
          u._parent !== this &&
            (u._parent && u._parent.removeChild(u),
            (u instanceof GroupDisplay
              ? (this.updateItemCount(u._itemCount), this._subGroups.push(u), (this._filteredSubGroups = null), n)
              : (this.updateItemCount(1), this._items.push(u), (this._filteredItems = null), i)
            ).push(u),
            u.setParent(this),
            null !== this._element && null === u._element) &&
            this.buildItem(u, s);
        }
        s &&
          (0 < i.length && this.sortItems(this.getItems(!0), this._itemContents, s.sortFunction), 0 < n.length) &&
          ((l = s.secondarySortFunction || s.sortFunction),
          this.sortItems(this.getSubGroups(!0), this._subFolderContents, l, this._subFolderContents !== this._itemContents)),
          this._filter && o
            ? o.checkForStateChange(
                ((p = this),
                function () {
                  p.applyFilterToParents();
                })
              )
            : this._shown || this.show(),
          this.updateTextElements(),
          y.getOption(e, "scrollIntoView", !0) &&
            o &&
            o.scrollParent &&
            (1 === i.length
              ? o.scrollParent.scrollTop(t[0].getScrollTop())
              : 1 < i.length && o.scrollParent.scrollTop(this.getScrollTop()));
      }),
      (GroupDisplay.prototype.applyFilterToParents = function () {
        for (var t = this; t; ) t.applyFilter(t._filter, { shouldRecurse: !1, forceFilter: !0 }), (t = t._parent);
      }),
      (GroupDisplay.prototype.sortChildren = function (t, e) {
        e = e || t;
        var o = this.getSubGroups(!0);
        this.sortItems(o, this._subFolderContents, e),
          this.sortItems(this.getItems(!0), this._itemContents, t, this._subFolderContents !== this._itemContents),
          this.getSubGroups().sort(e),
          this.getItems().sort(t);
        for (var s = 0, n = o.length; s < n; ++s) o[s].sortChildren(t);
      }),
      (GroupDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          e.push(new y.ContextMenuItem(Constants.ACTION_RENAME)),
          this._model.isSharingEnabled() && e.push(new y.ContextMenuItem(Constants.ACTION_SHARE)),
          this._model.isReadOnly() || e.push(new y.ContextMenuItem(Constants.ACTION_DELETE, { text: Strings.Vault.DELETE_FOLDER })),
          e.push(this.getMoveOrganizeLPMenu()),
          e.push(new y.ContextMenuItem(Constants.ACTION_CREATE_SUB_FOLDER)),
          e.push(new y.ContextMenuItem(Constants.ACTION_OPEN_ALL, { divider: !0 })),
          e
        );
      }),
      (GroupDisplay.prototype.getChildren = function (t) {
        return this.getItems(t).concat(this.getSubGroups(t));
      }),
      (GroupDisplay.prototype.getAllChildrenOrdered =
        ((G = function (t) {
          for (var e = this.getItems(t), o = [], s = 0, n = e.length; s < n; ++s) e[s]._shown && o.push(e[s]);
          return o;
        }),
        (F = function (t) {
          for (var e = this.getSubGroups(t), o = [], s = 0, n = e.length; s < n; ++s) {
            var i = e[s];
            i._shown && (o.push(i), i._expanded) && (o = o.concat(i.getAllChildrenOrdered()));
          }
          return o;
        }),
        function (t, e) {
          var o;
          return G.call(this, t).concat(F.call(this, t));
        })),
      (GroupDisplay.prototype.getChildrenIncludingFavorites = GroupDisplay.prototype.getChildren),
      (GroupDisplay.prototype.applyFilter = function (t, e) {
        var o = y.getOption(e, "forceFilter", !1);
        if (t && (null === this._filter || this._filter !== t || o)) {
          var s = y.getOption(e, "shouldRecurse", !0),
            n = y.getOption(e, "recursed", !1),
            i = this instanceof Container || void 0 === t.func || t.func(this);
          if (s || !n) {
            (e = e || {}).recursed = !0;
            for (var r = this.getChildren(!0), a = 0, l = 0, p = r.length; l < p; ++l) a += r[l].applyFilter(t, e);
            (this._itemCount = a), this.updateTextElements();
          }
          (this._filter === t && !o) ||
            ((this._filter = t),
            (this._filteredItems = null),
            (this._filteredItems = this.getItems()),
            (this._filteredSubGroups = null),
            (this._filteredSubGroups = this.getSubGroups())),
            (0 !== this._itemCount || (t.showEmptyGroups && !this.shouldBeHiddenWhenEmpty())) && i ? this.show() : this.hide();
        }
        return this._itemCount;
      }),
      (w = function (t) {
        this._itemCount += t.showAllChildren();
      }),
      (GroupDisplay.prototype.showAllChildren = function (t) {
        return (this._itemCount = 0), this.applyToChildren(w, t), this.updateTextElements(), this._itemCount;
      }),
      (GroupDisplay.prototype.getItemModelChildren = function (t) {
        return i(this.getItemChildren(t));
      }),
      (GroupDisplay.prototype.getItemChildren = function (t) {
        for (var e = this.getItems(t), o = this.getSubGroups(t), s = 0, n = o.length; s < n; ++s) e = e.concat(o[s].getItemChildren(t));
        return e;
      }),
      (GroupDisplay.prototype.getItems = function (t) {
        if (null === this._filter || t) return this._items;
        if (null === this._filteredItems) {
          this._filteredItems = [];
          for (var e = 0, o = this._items.length; e < o; ++e) {
            var s = this._items[e];
            (void 0 !== this._filter.func && !this._filter.func(s)) || this._filteredItems.push(s);
          }
        }
        return this._filteredItems;
      }),
      (GroupDisplay.prototype.getSubGroupModels = function (t) {
        return i(this.getSubGroups(t));
      }),
      (GroupDisplay.prototype.getSubGroups = function (t) {
        if (null === this._filter || t) return this._subGroups;
        if (null === this._filteredSubGroups) {
          this._filteredSubGroups = [];
          for (var e = 0, o = this._subGroups.length; e < o; ++e) {
            var s = this._subGroups[e];
            (void 0 === this._filter.func || this._filter.func(s)) &&
              (0 < s._itemCount || this._filter.showEmptyGroups) &&
              this._filteredSubGroups.push(s);
          }
        }
        return this._filteredSubGroups;
      }),
      (GroupDisplay.prototype.show = function () {
        VaultItemBaseDisplay.prototype.show.apply(this, arguments), this._parent && this._parent.show();
      }),
      (GroupDisplay.prototype.processItems = function (t, e) {
        if (t instanceof Array) for (var o = 0, s = t.length; o < s; ++o) e.call(this, t[o]);
        else e.call(this, t);
      }),
      (GroupDisplay.prototype.shouldBeHiddenWhenEmpty = function () {
        return !1;
      }),
      (AuroraGroupDisplay.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_TOGGLE_OPEN && bg.sendLpImprove("promotion_vault_folder_toggled", { expand: this._expanded ? "0" : "1" }),
          GroupDisplay.prototype.handleClickEvent.apply(this, arguments);
      }),
      (AuroraGroupDisplay.prototype.shouldSkipSearch = function (t, e) {
        return !1;
      }),
      (AuroraGroupDisplay.prototype.matches = function (t, e) {
        return !1;
      }),
      (AuroraGroupDisplay.prototype.getContextMenuItems = function (t) {
        var e = [];
        return e.push(new y.ContextMenuItem(Constants.ACTION_DELETE, { text: "Do not show again" })), e;
      }),
      (AuroraGroupDisplay.prototype.shouldBeHiddenWhenEmpty = function () {
        return !0;
      }),
      (Container.prototype.initialize = function (t, e) {
        var o, s, n;
        null === this._element &&
          (this.setElement(t),
          (this.scrollParent = e),
          this.favoritesGroup &&
            ((this._favoriteElement = y.createElement("div")),
            t.appendChild(this._favoriteElement),
            this.buildItems([this.favoritesGroup], this._favoriteElement, this.favoritesGroup.getBuildOptions()),
            this.favoritesGroup.isEmpty() ? this.favoritesGroup.hide() : this.checkFavoriteWithNoFolder(!0)),
          y.getOption(this._buildOptions, "separateItems", !1)
            ? ((this._itemContents = y.createElement("div", "itemContentPadding itemContents")),
              (this._subFolderContents = y.createElement("div", "folderWrapper")),
              t.appendChild(this._itemContents),
              t.appendChild(this._subFolderContents))
            : ((this._itemContents = t), (this._subFolderContents = t)),
          this.buildItems(this.getSubGroups(), this._subFolderContents, this._buildOptions, !0),
          this.buildItems(this.getItems(), this._itemContents, this._buildOptions),
          this._folderView || this.sortItemsNoFolder(this._buildOptions.sortFunction),
          this.usesStickyFolders()) &&
          ((this.updatedStickyFolderContainer = !1),
          (this.stickyFoldersContainer = y.createElement("div", "stickyFoldersContainer folder")),
          (this.$stickyFoldersContainer = c(this.stickyFoldersContainer)),
          this._buildOptions.stickyFolderParent.insertBefore(
            this.stickyFoldersContainer,
            this._buildOptions.stickyFolderParent.firstElementChild
          ),
          (s = 0),
          (n = !1),
          ((o = this).scrollHandler = function (e) {
            o._$_element.is(":visible") &&
              o._folderView &&
              ("function" == typeof requestAnimationFrame
                ? n ||
                  (requestAnimationFrame(function (t) {
                    0 < t && o.updateStickyFolders(e.target.scrollTop), (n = !1);
                  }),
                  (n = !0))
                : o.updateStickyFolders(e.target.scrollTop));
          }),
          o.scrollParent.scroll(o.scrollHandler));
      }),
      (Container.prototype.displayItemsInSpecifiedGroup = function () {
        return !0;
      }),
      (Container.prototype.getScrollTop = function () {
        return 0;
      }),
      (Container.prototype.usesStickyFolders = function () {
        return y.getOption(this._buildOptions, "stickyFolders", !1);
      }),
      (Container.prototype.updateStickyFolders = function (t) {
        if (null !== this._$_element) {
          this.updatedStickyFolderContainer ||
            (this.$stickyFoldersContainer.css("right", this.scrollParent.width() - this._$_element.width()),
            (this.updatedStickyFolderContainer = !0));
          for (
            var e = [], o = (y.removeDOMChildren(this.stickyFoldersContainer), this.getAllSubGroupsOrdered()), s = 0, n = o.length;
            s < n;
            ++s
          ) {
            var i = o[s],
              r = !1,
              a = i.getOffsetTop() - t;
            if (a < 0 && i.getOffsetBottom() > t) r = !0;
            else if (0 <= a) {
              var l = e.length * i.getLabelHeight();
              if (!(a < l)) break;
              var p = i.getLevel(),
                u = e[p];
              if (u) {
                if (!(0 < p && l - a > (e.length - p) * i.getLabelHeight())) {
                  u.css("margin-top", Math.min(0, a - l));
                  break;
                }
                e = e.slice(0, p);
              }
              r = !0;
            }
            r && (i._$_stickyFolder.css("margin-top", ""), (e[i.getLevel()] = i._$_stickyFolder));
          }
          this.$stickyFoldersContainer.append(e);
        }
      }),
      (Container.prototype.updateView = function () {}),
      (Container.prototype.matches = function (t, e) {
        return null;
      }),
      (Container.prototype.getChildrenIncludingFavorites = function (t) {
        var e = GroupDisplay.prototype.getChildrenIncludingFavorites.apply(this, arguments);
        return this.favoritesGroup && e.unshift(this.favoritesGroup), e;
      }),
      (Container.prototype.getAllSubGroupsIncludingFavorites = function (t) {
        var t = this.getAllSubGroups(t);
        return (t = this.favoritesGroup ? t.concat(this.favoritesGroup) : t);
      }),
      (GroupDisplay.prototype.getSortedItems = function (t) {
        if (null === this._filter || t) return this._sortedItems;
        if (null === this._sortedFilteredItems) {
          this._sortedFilteredItems = [];
          for (var e = 0, o = this._sortedItems.length; e < o; ++e) {
            var s = this._sortedItems[e];
            (void 0 !== this._filter.func && !this._filter.func(s)) || this._sortedFilteredItems.push(s);
          }
        }
        return this._sortedFilteredItems;
      }),
      (Container.prototype.applyFilter = function (t, e) {
        y.getOption(e, "checkForStateChange", !0)
          ? this.checkForStateChange(GroupDisplay.prototype.applyFilter, arguments)
          : GroupDisplay.prototype.applyFilter.apply(this, arguments),
          (this._buildOptions.multiSelect = y.getOption(t, "multiSelect", !0)),
          this.favoritesGroup && this.favoritesGroup.applyFilter(t, e);
      }),
      (Container.prototype.applyToChildren = function (t, e) {
        GroupDisplay.prototype.applyToChildren.apply(this, arguments), this.favoritesGroup && this.applyToChild(t, this.favoritesGroup);
      }),
      (Container.prototype.getSearchResultItems = function (t, e) {
        var e = GroupDisplay.prototype.getSearchResultItems.call(this, this.parseSearchTerms(t), c.extend(e, this.getSearchOptions(t)));
        return e.sort(VaultItemBaseDisplay.prototype.sortByNameAsc), e;
      }),
      (Container.prototype.getSearchOptions = function (t) {
        var e = GroupDisplay.prototype.getSearchOptions.apply(this, arguments),
          o = ((e.ignoreFilterOnSearch = this._buildOptions.ignoreFilterOnSearch), !1);
        return (
          this._lastSearchTerm &&
            t &&
            t.length > this._lastSearchTerm.length &&
            (o = t.split(" ").length === this._lastSearchTerm.split(" ").length),
          (e.moreSpecific = o),
          e
        );
      }),
      (Container.prototype.shouldSearch = function (t) {
        return null === this._lastSearchTerm ? 0 < t.length : this._lastSearchTerm !== t;
      }),
      (Container.prototype.applySearch = function (t, e) {
        var t, o;
        if (((t = t.trim()), (e = e || {}).forceSearch || this.shouldSearch(t)))
          return (
            (e = c.extend(e, this.getSearchOptions(t))),
            (this._lastSearchTerm = t),
            (t = this.parseSearchTerms(t)),
            this._$_element.hide(),
            (o = GroupDisplay.prototype.applySearch.call(this, t, e)),
            M(this, t, e),
            this._element.removeAttribute("style"),
            this.favoritesGroup && this.favoritesGroup.applySearch(t, e),
            o
          );
      }),
      (M = function (t, e, o) {
        if (0 !== e.length) {
          for (var s = t.getSubGroups(!0), n = [], i = 0; i < s.length; i++) s[i] instanceof AuroraGroupDisplay && n.push(s[i]);
          if (n.length) {
            o = c.extend(o, { searchResults: t.getAllChildrenOrdered() });
            for (var i = 0; i < n.length; i++) n[i].applySearch(e, o);
          }
        }
      }),
      (Container.prototype.hide = function () {
        y.removeDOMChildren(this.stickyFoldersContainer);
      }),
      (Container.prototype.show = function () {}),
      (Container.prototype.checkForStateChange = function (t, e) {
        var o;
        "function" == typeof this._buildOptions.stateChangeCallback
          ? ((o = this.isEmpty()), t.apply(this, e), o !== this.isEmpty() && this._buildOptions.stateChangeCallback(!o, this))
          : t.apply(this, e);
      }),
      (Container.prototype.getGroupDisplay = function (t) {
        for (var e = this.getAllSubGroups(), o = 0, s = e.length; o < s; ++o) if (e[o]._model === t) return e[o];
        return null;
      }),
      (k = function (t) {
        for (var e = [], o = 0, s = t.length; o < s; ++o) e.push(t[o].newDisplayObject());
        return e;
      }),
      (Container.prototype.addDummyGroups = function (t, e) {
        for (var o = p.addDummyGroups(t), s, n = (o.push(t), o[0].getGroupParentName()); !s && n; ) {
          var i = p.getGroupByName(n),
            s;
          (s = this.getGroupDisplay(i)) || o.unshift(i), (n = i.getGroupParentName());
        }
        s = s || this;
        for (var r = k(o), a = 0, l = r.length - 1; a < l; ++a) r[a].addChild(r[a + 1]);
        return GroupDisplay.prototype.addChild.call(s, r[0], e), r[r.length - 1];
      }),
      (Container.prototype.removeChild = function () {
        this.checkForStateChange(GroupDisplay.prototype.removeChild, arguments);
      }),
      (Container.prototype.addChild =
        ((R = function (t) {
          t._model.isFavorite() && this.addFavorite(t._model);
        }),
        (Y = function (t, e, o) {
          var s, s;
          e
            ? (s = (s = this.getGroupDisplay(e)) || this.addDummyGroups(e, o)).addChild(t, o)
            : GroupDisplay.prototype.addChild.call(this, t, o),
            this.processItems(t, R);
        }),
        function () {
          this.checkForStateChange(Y, arguments);
        })),
      (Container.prototype.getSelectedItems = function () {
        return this._selectedItems.slice();
      }),
      (Container.prototype.getSelectedModelItems = function () {
        for (var t = [], e = 0, o = this._selectedItems.length; e < o; ++e) t.push(this._selectedItems[e]._model);
        return t;
      }),
      (Container.prototype.removeSelectedItem = function (t, e) {
        e &&
          this._lastToggleSelectTarget &&
          this._lastToggleSelectTarget !== t &&
          (this.shiftSelect(t, this._lastToggleSelectTarget, "deselect"), this._lastToggleSelectTarget.deselect());
        for (var o = 0, s = this._selectedItems.length; o < s; ++o)
          if (t === this._selectedItems[o]) {
            this._selectedItems.splice(o, 1);
            break;
          }
        var e = this._selectedItems.length;
        y.getOption(this._buildOptions, "publishSelect", !0)
          ? (0 === e && Topics.get(Topics.ITEMS_DESELECTED).publish(), Topics.get(Topics.SELECT_COUNT_CHANGE).publish(e))
          : this.callSelectCallback(e);
      }),
      (Container.prototype.callSelectCallback = function (t) {
        var e = y.getOption(this._buildOptions, "selectCallback", null);
        "function" == typeof e && e(t);
      }),
      (L = function (t, e, o) {
        if (0 < t.length)
          for (var s = t.pop(), n, i = s._parent.getChildrenIncludingFavorites(), r = 0, a = i.length; r < a; ++r) {
            var l = i[r];
            l === s ? (L(t, e, o), (e = !e)) : e && l[o].apply(l);
          }
      }),
      (Container.prototype.shiftSelectSimple = function (t, e, o) {
        for (var s = null, n = this.getSortedItems(), i = 0, r = n.length; i < r; ++i) {
          var a = n[i];
          if (a === t || a === e) {
            if (null !== s) return;
            s = !0;
          } else s && a[o].apply(a);
        }
      }),
      (Container.prototype.shiftSelect = function (t, e, o) {
        if (e)
          if (this._folderView) {
            for (var s = [t], n = [e]; t._parent !== e._parent; )
              null !== t._parent && ((t = t._parent), s.push(t)), null !== e._parent && ((e = e._parent), n.push(e));
            for (; 0 < s.length && 0 < n.length && s[s.length - 1] === n[n.length - 1]; ) s.pop(), n.pop();
            for (var i = s.pop(), r = n.pop(), a, l = !1, p = i._parent.getChildrenIncludingFavorites(), u = 0, c = p.length; u < c; ++u) {
              var h = p[u];
              h === i || h === r ? (L(h === i ? s : n, l, o), (l = !l)) : l && h[o].apply(h);
            }
          } else this.shiftSelectSimple(t, e, o);
      }),
      (Container.prototype.addSelectedItems = function (t, e) {
        var o = 0 === this._selectedItems.length,
          s = y.getOption(this._buildOptions, "multiSelect", !0);
        e &&
          s &&
          this._lastToggleSelectTarget &&
          this._lastToggleSelectTarget !== t &&
          (this.shiftSelect(t, this._lastToggleSelectTarget, "select"), this._lastToggleSelectTarget.select()),
          this._selectedItems.push(t),
          !s && this._lastToggleSelectTarget && this._lastToggleSelectTarget !== t && this._lastToggleSelectTarget.deselect(),
          y.getOption(this._buildOptions, "publishSelect", !0)
            ? (o && Topics.get(Topics.ITEMS_SELECTED).publish(), Topics.get(Topics.SELECT_COUNT_CHANGE).publish(this._selectedItems.length))
            : this.callSelectCallback(this._selectedItems.length);
      }),
      (Container.prototype.pushSelectTarget = function (t) {
        this._selectedStack.push(t);
      }),
      (Container.prototype.clearSelected = function () {
        if (0 < this._selectedItems.length) {
          y.getOption(this._buildOptions, "publishSelect", !0)
            ? (Topics.get(Topics.ITEMS_DESELECTED).publish(), Topics.get(Topics.SELECT_COUNT_CHANGE).publish(0))
            : this.callSelectCallback(0);
          for (var t = this._selectedItems.slice(), e = 0, o = t.length; e < o; ++e) t[e].deselect();
        }
        (this._selectedItems = []), (this._lastToggleSelectTarget = null);
      }),
      (Container.prototype.createSelectionContextMenu = function () {
        var t = this.getSelectedItems();
        return 0 < t.length ? t[0].createContextMenu() : null;
      }),
      (Container.prototype.destruct = function () {
        if (!this._destructed) {
          this.scrollHandler && this.scrollParent.unbind("scroll", this.scrollHandler),
            this.searchInput && this.searchInput.unbind("keydown.containerSearchNav"),
            this.clearSelected();
          for (var t = 0, e = this._subscriptions.length; t < e; ++t) {
            var o = this._subscriptions[t];
            o.topic.unsubscribe(o.callback);
          }
          this._$_element && this._$_element.empty(),
            this.$stickyFoldersContainer && this.$stickyFoldersContainer.remove(),
            GroupDisplay.prototype.destruct.apply(this);
        }
      }),
      (Container.prototype.collapse = function () {}),
      (Container.prototype.open = function () {}),
      (Container.prototype.setFolderView = function (t) {
        (this._folderView = t),
          this._$_element &&
            (t
              ? this._$_element.removeClass("itemView")
              : (this._$_element.addClass("itemView"), y.removeDOMChildren(this.stickyFoldersContainer)));
      }),
      (Container.prototype.sortByFolder = function (t) {
        var e = t ? this.sortByNameAsc : this.sortByNameDesc;
        (this._buildOptions.secondarySortFunction = this.sortByFolderName(t)),
          (e !== this._buildOptions.sortFunction || (y.getOption(this._filter, "hasFolderView", !0) && !this._folderView)) &&
            ((this._buildOptions.sortFunction = e),
            this.setFolderView(!0),
            this.sortChildren(e, this.sortByFolderName(t)),
            (this._sortedItems = null)),
          this.favoritesGroup && this.favoritesGroup.show();
      }),
      (Container.prototype.sortByName = function (t) {
        var t = t ? this.sortByNameAsc : this.sortByNameDesc;
        (t !== this._buildOptions.sortFunction || (y.getOption(this._filter, "hasFolderView", !0) && this._folderView)) &&
          this.sortItemsNoFolder(t);
      }),
      (Container.prototype.sortItemsByMostRecent = function () {
        (this._buildOptions.sortFunction !== this.sortByMostRecent ||
          (y.getOption(this._filter, "hasFolderView", !0) && this._folderView)) &&
          this.sortItemsNoFolder(this.sortByMostRecent);
      }),
      (Container.prototype.sortItemsNoFolder = function (t) {
        (this._buildOptions.sortFunction = t),
          this.setFolderView(!1),
          y.removeDOMChildren(this._subFolderContents),
          this._element && (this._sortedItems = this.sortItems(this.getItemChildren(!0), this._itemContents, t)),
          this.favoritesGroup && this.favoritesGroup.hide();
      }),
      (Container.prototype.handleDragStart = function () {
        this.$stickyFoldersContainer && this.$stickyFoldersContainer.hide();
      }),
      (Container.prototype.handleDragEnd = function () {
        this.$stickyFoldersContainer && this.$stickyFoldersContainer.show();
      }),
      (Container.prototype.getAllChildrenOrdered = function () {
        var t;
        return this._folderView
          ? ((t = []),
            (t =
              this.favoritesGroup &&
              !this.favoritesGroup.isEmpty() &&
              this.favoritesGroup._shown &&
              (t.push(this.favoritesGroup), this.favoritesGroup._expanded)
                ? t.concat(this.favoritesGroup.getAllChildrenOrdered())
                : t).concat(GroupDisplay.prototype.getAllChildrenOrdered.apply(this, arguments)))
          : this.getSortedItems();
      }),
      (Container.prototype.getAllSubGroupsOrdered = function () {
        var t = GroupDisplay.prototype.getAllSubGroupsOrdered.apply(this, arguments);
        return this.favoritesGroup && this.favoritesGroup._shown && !this.favoritesGroup.isEmpty() && t.unshift(this.favoritesGroup), t;
      }),
      (SharedGroupDisplay.prototype.getSharedFolderLabel = function () {
        var t = [];
        return (
          this._model.isReadOnly() && t.push(Strings.Vault.READ_ONLY),
          t.push(Strings.Vault.SHARED_FOLDER),
          t.join(" " + String.fromCharCode(8226) + " ")
        );
      }),
      (SharedGroupDisplay.prototype.buildFolderElement = function (t) {
        var e = GroupDisplay.prototype.buildFolderElement.apply(this, arguments);
        return e.appendChild(this.createTextElement("div", this.getSharedFolderLabel, "sharedFolderLabel")), e;
      }),
      (SharedGroupDisplay.prototype.getContextMenuItems = function (t) {
        var e = GroupDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          e.unshift(new y.ContextMenuItem(Constants.ACTION_STOP_DOWNLOADING)),
          this._model.isReadOnly() || e.unshift(new y.ContextMenuItem(Constants.ACTION_MANAGE)),
          e
        );
      }),
      (SharedGroupDisplay.prototype.isExcludedAction = function (t, e) {
        switch (t) {
          case Constants.ACTION_CREATE_SUB_FOLDER:
            return this._model.isReadOnly();
          case Constants.ACTION_OPEN_MOVE_TO_FOLDER_MENU:
            return !0;
          default:
            return GroupDisplay.prototype.isExcludedAction.apply(this, arguments);
        }
      }),
      (SharedGroupDisplay.prototype.updateView = function () {
        if (this._model.isDeleted() || !this._model.isDownloaded()) this.destruct();
        else {
          GroupDisplay.prototype.updateView.apply(this, arguments);
          for (var t = this.getItemModelChildren(!0).concat(this.getAllSubGroupModels(!0)), e = 0, o = t.length; e < o; ++e) {
            var s = t[e],
              n = s._data.group,
              i = n.indexOf("\\");
            s._data.group = this._model.getName() + (-1 < i ? n.substring(i) : "");
          }
        }
      }),
      (LinkedGroupDisplay.prototype.getContextMenuItems = function (t) {
        var e = [];
        return (
          e.push(new y.ContextMenuItem(Constants.ACTION_UNLINK)),
          e.push(new y.ContextMenuItem(Constants.ACTION_CREATE_SUB_FOLDER)),
          e.push(new y.ContextMenuItem(Constants.ACTION_OPEN_ALL, { divider: !0 })),
          e
        );
      }),
      (LinkedGroupDisplay.prototype.getSharedFolderLabel = function () {
        return Strings.Vault.LINKED_PERSONAL_ACCOUNT;
      }),
      (EmergencyAccessGroupDisplay.prototype.getSharedFolderLabel = function () {
        return Strings.Vault.EMERGENCY_ACCESS;
      }),
      (FavoritesGroup.prototype.show = function () {
        this.isEmpty() || DefaultGroupDisplay.prototype.show.apply(this, arguments);
      }),
      (FavoritesGroup.prototype.moveToFolder = function (o) {
        var s = this.getContainer(),
          n;
        s &&
          0 < o.length &&
          (n = o[0]).passwordProtect(
            function () {
              LPRequest.makeUpdateRequest(p.addToFavorites, {
                parameters: [o],
                success: function () {
                  for (var t = 0, e = o.length; t < e; ++t) s.addFavorite(o[t]);
                  n.publishAddToFavoritesSuccess(o.length);
                }
              });
            },
            { itemsForAction: o }
          );
      }),
      (B = function (t, e) {
        (this.path = t), (this.css = e);
      }),
      (NoteDisplay.prototype.NOTE_TYPES = {}),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.ADDRESS] = new B("", "noteAddress")),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.AMEX] = new B("images/vault_4.0/secureNoteIcons/Amex.png", "noteAmex")),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.BANK] = new B(
        "images/vault_4.0/secureNoteIcons/Bank_Account.png",
        "noteBank"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.CREDIT] = new B(
        "images/vault_4.0/secureNoteIcons/Generic_Credit_Card.png",
        "noteCredit"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.DATABASE] = new B(
        "images/vault_4.0/secureNoteIcons/Database.png",
        "noteDatabase"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.DRIVERS_LICENSE] = new B(
        "images/vault_4.0/secureNoteIcons/Drivers_License.png",
        "noteDriversLicense"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.EMAIL] = new B(
        "images/vault_4.0/secureNoteIcons/Email.png",
        "noteEmail"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.GENERIC] = new B(
        "images/vault_4.0/secureNoteIcons/Generic_Note.png",
        "noteGeneric"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.HEALTH_INSURANCE] = new B(
        "images/vault_4.0/secureNoteIcons/Health_Insurance.png",
        "noteHealthInsurance"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.IM] = new B(
        "images/vault_4.0/secureNoteIcons/Instant_Messenger.png",
        "noteIM"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.INSURANCE] = new B(
        "images/vault_4.0/secureNoteIcons/Insurance.png",
        "noteInsurance"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.MASTERCARD] = new B(
        "images/vault_4.0/secureNoteIcons/Mastercard.png",
        "noteMastercard"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.MEMBERSHIP] = new B(
        "images/vault_4.0/secureNoteIcons/Membership.png",
        "noteMembership"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.PASSPORT] = new B(
        "images/vault_4.0/secureNoteIcons/Passport.png",
        "notePassport"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.SERVER] = new B(
        "images/vault_4.0/secureNoteIcons/Server.png",
        "noteServer"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.SSN] = new B(
        "images/vault_4.0/secureNoteIcons/Social_Security.png",
        "noteSSN"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.SOFTWARE_LICENSE] = new B(
        "images/vault_4.0/secureNoteIcons/Software_License.png",
        "noteSoftwareLicense"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.SSH_KEY] = new B(
        "images/vault_4.0/secureNoteIcons/SSH_Key.png",
        "noteSSHKey"
      )),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.VISA] = new B("images/vault_4.0/secureNoteIcons/Visa.png", "noteVisa")),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.WIFI] = new B("images/vault_4.0/secureNoteIcons/WiFi.png", "noteWiFi")),
      (NoteDisplay.prototype.NOTE_TYPES[Note.prototype.NOTE_TYPES.CUSTOM] = new B(
        "images/vault_4.0/secureNoteIcons/Secure_Note.png",
        "noteCustom"
      )),
      (NoteDisplay.prototype.getLaunchElementAction = function () {
        return Constants.ACTION_EDIT;
      }),
      (NoteDisplay.prototype.build = function (t) {
        var e = VaultItemDisplay.prototype.build.apply(this, arguments);
        return y.addClass(e, "note"), e;
      }),
      (NoteDisplay.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU:
            this.openMoveToFolderMenu(e.target, this.getAllSubGroups(!0));
            break;
          case Constants.ACTION_EDIT:
            var o = this.getModelItemsForAction(t, e)[0],
              o = o.getURLArguments(o._data, o._views[0]._parent._model, e);
            c.ajax({
              method: "post",
              data: o,
              url: (bg.get("base_url") || "/") + "log_secure_note_open.php",
              success: function () {},
              error: function () {}
            }),
              VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
            break;
          default:
            VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (P = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12"
      }),
      (U = function (t) {
        if (t && "string" == typeof t) {
          var t = t.split(","),
            e;
          if (2 === t.length && P[t[0]] && 4 === t[1].length)
            return new Date(P[t[0]] + "/01/" + t[1]).toLocaleString(bg.LPPlatform.getUILanguage(), { month: "numeric", year: "2-digit" });
        }
        return null;
      }),
      (NoteDisplay.prototype.getPaymentCardSecondaryText = function () {
        var t = this._model.getKeyValuePairs(),
          e = U(t["Expiration Date"]),
          o = "";
        return (
          t.Number && (o += Strings.translateString("Ending in %s", t.Number.slice(-4))),
          e && (o += (t.Number ? " • " : "") + Strings.translateString("Expires %s", e)),
          o
        );
      }),
      (NoteDisplay.prototype.getBankAccountSecondaryText = function () {
        var t = this._model.getKeyValuePairs(),
          t = t["Account Number"] || t["IBAN Number"];
        return t ? Strings.translateString("Ending in %s", t.slice(-4)) : "";
      }),
      (NoteDisplay.prototype.getSSNSecondaryText = function () {
        var t,
          e = this._model.getKeyValuePairs().Number;
        return e ? Strings.translateString("Ending in %s", e.slice(-4)) : "";
      }),
      (NoteDisplay.prototype.getAddressSecondaryText = function () {
        var t, e;
        return this._model.getKeyValuePairs()["Address 1"] || "";
      }),
      (NoteDisplay.prototype.getCustomItemSecondaryText = function () {
        var e;
        try {
          e = JSON.parse(this._model._data.template).title;
        } catch (t) {
          e = "";
        }
        return e;
      }),
      (NoteDisplay.prototype.getSecondaryNameTextFunction = function () {
        switch (this._model.getNoteType()) {
          case Note.prototype.NOTE_TYPES.CREDIT:
            return this.getPaymentCardSecondaryText;
          case Note.prototype.NOTE_TYPES.BANK:
            return this.getBankAccountSecondaryText;
          case Note.prototype.NOTE_TYPES.SSN:
            return this.getSSNSecondaryText;
          case Note.prototype.NOTE_TYPES.ADDRESS:
            return this.getAddressSecondaryText;
          default:
            if (this._model.isCustom()) return this.getCustomItemSecondaryText;
        }
      }),
      (NoteDisplay.prototype.createSecondaryNameTextElement = function () {
        if (LPFeatures.allowOmarIA() && !this._model.passwordProtected()) {
          var t = this.getSecondaryNameTextFunction();
          if (t) return this.createTextElement("p", t, "small infoLabel");
        }
        return VaultItemDisplay.prototype.createSecondaryNameTextElement.apply(this, arguments);
      }),
      (NoteDisplay.prototype.getIconElement = function () {
        var t = this._model.isCustom() ? this.NOTE_TYPES[Note.prototype.NOTE_TYPES.CUSTOM] : this.NOTE_TYPES[this._model.getNoteType()],
          e = y.createElement("div", "noteFormFillIcon " + t.css),
          o;
        return (
          LPFeatures.allowOmarIA() || this._model.getNoteType() === Note.prototype.NOTE_TYPES.ADDRESS
            ? ((o = bg
                .get("RecordTypeConfig")
                .types.filter(function (t) {
                  return t.recordType === this.getRecordType();
                }, this)
                .map(function (t) {
                  return bg.get("RecordTypeConfig").icons[t.id];
                })[0]),
              e.appendChild(y.createElement("i", { class: ["bigIcon", o] })))
            : e.appendChild(y.createElement("img", { src: t.path, class: "bigIcon" })),
          e
        );
      }),
      (NoteDisplay.prototype.getContextMenuItems = function (t) {
        var e = AccountBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          this._model.getSharedGroup() &&
            (e = e.filter(function (t) {
              return t.getAction() != Constants.ACTION_SHARE;
            })),
          t ||
            (e.push(new y.ContextMenuItem(Constants.ACTION_COPY_NOTE, { divider: !0 })),
            this._model.hasPassword() && e.push(new y.ContextMenuItem(Constants.ACTION_COPY_NOTE_PASSWORD)),
            this._model.hasUsername() && e.push(new y.ContextMenuItem(Constants.ACTION_COPY_NOTE_USERNAME)),
            this._model.hasPrivateKey() && e.push(new y.ContextMenuItem(Constants.ACTION_COPY_KEY))),
          e
        );
      }),
      (NoteDisplay.prototype.isExcludedAction = function (t, e) {
        switch (t) {
          case Constants.ACTION_COPY_ADDRESS_1:
            return !this._model.hasNoteField("Address 1");
          case Constants.ACTION_COPY_ADDRESS_2:
            return !this._model.hasNoteField("Address 2");
          case Constants.ACTION_COPY_CITY_SLASH_TOWN:
            return !this._model.hasNoteField("City / Town");
          case Constants.ACTION_COPY_ZIP_SLASH_POSTAL_CODE:
            return !this._model.hasNoteField("Zip / Postal Code");
          case Constants.ACTION_COPY_EMAIL_ADDRESS:
            return !this._model.hasNoteField("Email Address");
          case Constants.ACTION_COPY_PHONE_NUMBER:
            return !this._model.hasNoteField("Phone");
          case Constants.ACTION_COPY_BANK_NAME:
            return !this._model.hasNoteField("Bank Name");
          case Constants.ACTION_COPY_ACCOUNT_NUMBER:
            return !this._model.hasNoteField("Account Number");
          case Constants.ACTION_COPY_ROUTING_NUMBER:
            return !this._model.hasNoteField("Routing Number");
          case Constants.ACTION_COPY_NAME_ON_CARD:
            return !this._model.hasNoteField("Name on Card");
          case Constants.ACTION_COPY_SECURITY_CODE:
            return !this._model.hasNoteField("Security Code");
          case Constants.ACTION_COPY_HOSTNAME:
            return !this._model.hasNoteField("Hostname");
          case Constants.ACTION_COPY_GROUP_ID:
            return !this._model.hasNoteField("Group ID");
          case Constants.ACTION_COPY_MEMBER_ID:
            return !this._model.hasNoteField("Member ID");
          case Constants.ACTION_COPY_POLICY_NUMBER:
            return !this._model.hasNoteField("Policy Number");
          case Constants.ACTION_COPY_MEMBERSHIP_NUMBER:
            return !this._model.hasNoteField("Membership Number");
          case Constants.ACTION_COPY_NUMBER:
            return !this._model.hasNoteField("Number");
          case Constants.ACTION_COPY_LICENSE_KEY:
            return !this._model.hasNoteField("License Key");
          case Constants.ACTION_COPY_ORDER_NUMBER:
            return !this._model.hasNoteField("Order Number");
          case Constants.ACTION_COPY_SSH_PASSPHRASE:
            return !this._model.hasNoteField("Passphrase");
          case Constants.ACTION_COPY_SSH_PUBLIC_KEY:
            return !this._model.hasNoteField("Public Key");
          case Constants.ACTION_COPY_HOSTNAME:
            return !this._model.hasNoteField("Hostname");
          case Constants.ACTION_COPY_NOTE_USERNAME:
            return !this._model.hasNoteField("Username");
          case Constants.ACTION_COPY_NOTE_PASSWORD:
            return !this._model.hasNoteField("Password");
          default:
            return VaultItemBaseDisplay.prototype.isExcludedAction.apply(this, arguments);
        }
      }),
      (AttachmentDisplay.prototype.getContextMenuItems = function () {
        var t = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          t.push(new y.ContextMenuItem(Constants.ACTION_DOWNLOAD)),
          t.push(new y.ContextMenuItem(Constants.ACTION_DELETE, { divider: !0 })),
          t
        );
      }),
      (x = function (t) {
        return t.lastIndexOf(".");
      }),
      (AttachmentDisplay.prototype.getAttachmentNameFirst = function () {
        var t = this.getDisplayName(),
          e = x(t);
        return 0 < e ? t.substring(0, e) : t;
      }),
      (AttachmentDisplay.prototype.getAttachmentNameSecond = function () {
        var t = this.getDisplayName(),
          e = x(t);
        return 0 < e ? t.substring(e) : t;
      }),
      (AttachmentDisplay.prototype.build = function (t) {
        var e = y.createElement("div", {
            class: "attachment",
            vaultaction: Constants.ACTION_DOWNLOAD,
            title: Strings.Vault.DOWNLOAD + " " + this.getDisplayName()
          }),
          o = y.createElement("div", "textOverflowContainer");
        return (
          o.appendChild(this.createTextElement("span", this.getAttachmentNameFirst, "attachmentName")),
          e.appendChild(o),
          e.appendChild(this.createTextElement("span", this.getAttachmentNameSecond, "attachmentName textTail")),
          e.appendChild(
            y.createElement("div", { vaultaction: Constants.ACTION_DELETE, title: Strings.Vault.DELETE, class: "deleteAttachment" })
          ),
          e
        );
      }),
      (AttachmentDisplay.prototype.postBuild = function (t, e) {
        VaultItemBaseDisplay.prototype.postBuild.apply(this, arguments);
        var o = this._$_element;
        setTimeout(function () {
          y.setupMiddleEllipsis(o);
        }, 0);
      }),
      (FormFillDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return t || e.push(new y.ContextMenuItem(Constants.ACTION_EDIT)), e.push(new y.ContextMenuItem(Constants.ACTION_DELETE)), e;
      }),
      (FormFillDisplay.prototype.getIconElement = function () {
        var t = p.decryptMobile(this._model._data.ccnum, !0, this._model.getKey()),
          e = LPCC.getCCIcon(t),
          t = LPCC.getCCClass(t),
          t = y.createElement("div", t + " noteFormFillIcon"),
          o = y.createElement("div");
        return (
          this.includeCreditInfo() &&
            (o.appendChild(this.createTextElement("p", this.getCardNumberDisplay, { class: "ccNum" })),
            o.appendChild(this.createTextElement("p", this.getCardExpirationDisplay, { class: "ccExp" }))),
          o.appendChild(y.createElement("img", { src: "images/vault_4.0/" + e, class: "bigIcon" })),
          t.appendChild(o),
          t
        );
      }),
      (FormFillDisplay.prototype.includeCreditInfo = function () {
        return this._model.isCreditCard() && !this._model.passwordProtected();
      }),
      (FormFillDisplay.prototype.getCardExpirationDisplay = function () {
        var t = p.decryptMobile(this._model._data.ccexp, !0, this._model.getKey());
        return t && 2 === (t = t.split("-")).length ? t[1] + "/" + t[0].slice(-2) : "--/--";
      }),
      (FormFillDisplay.prototype.getCardNumberDisplay = function () {
        return LPCC.getFormattedNumber(p.decryptMobile(this._model._data.ccnum, !0, this._model.getKey()));
      }),
      (FormFillDisplay.prototype.getCardNameDisplay = function () {
        return p.decryptMobile(this._model._data.ccname, !0, this._model.getKey());
      }),
      (FormFillDisplay.prototype.build = function (t) {
        var e = VaultItemDisplay.prototype.build.apply(this, arguments);
        return y.addClass(e, "formFill"), this.includeCreditInfo() && y.addClass(e, "ccInfo"), e;
      }),
      (FormFillDisplay.prototype.createSecondaryNameTextElement = function () {
        return this.includeCreditInfo()
          ? this.createTextElement("p", this.getCardNameDisplay, "small infoLabel")
          : VaultItemDisplay.prototype.createSecondaryNameTextElement.apply(this, arguments);
      }),
      (FormFillDisplay.prototype.getLaunchElementAction = function () {
        return Constants.ACTION_EDIT;
      }),
      (FormFillDisplay.prototype.isDraggable = function () {
        return !1;
      }),
      (FormFillDisplay.prototype.getItemButtonActions = function () {
        return [Constants.ACTION_EDIT, Constants.ACTION_DELETE];
      }),
      (IdentityDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return (
          this._model._enabled || e.push(new y.ContextMenuItem(Constants.ACTION_ENABLE)),
          e.push(new y.ContextMenuItem(Constants.ACTION_EDIT)),
          e.push(new y.ContextMenuItem(Constants.ACTION_DELETE)),
          e
        );
      }),
      (IdentityDisplay.prototype.build = function () {
        var t = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
        return y.addClass(t, "identity"), t;
      }),
      (IdentityDisplay.prototype.getIconElement = function () {
        return y.createElement("img", { src: "images/vault_4.0/Identity_Avatar.png", class: "bigIcon" });
      }),
      (IdentityDisplay.prototype.getLaunchElementAction = function () {
        return Constants.ACTION_ENABLE;
      }),
      (IdentityDisplay.prototype.getItemButtonActions = function () {
        return [Constants.ACTION_EDIT, Constants.ACTION_DELETE];
      }),
      (IdentityDisplay.prototype.updateEnabledClass = function () {
        this._model._enabled ? this._$_element.addClass("enabled") : this._$_element.removeClass("enabled");
      }),
      (IdentityDisplay.prototype.postBuild = function () {
        VaultItemBaseDisplay.prototype.postBuild.apply(this, arguments), this.updateEnabledClass();
      }),
      (IdentityDisplay.prototype.updateView = function () {
        VaultItemBaseDisplay.prototype.updateView.apply(this, arguments), this.updateEnabledClass();
      }),
      (AllIdentityDisplay.prototype.getContextMenuItems = function (t) {
        var e = VaultItemBaseDisplay.prototype.getContextMenuItems.apply(this, arguments);
        return this._model._enabled || e.push(new y.ContextMenuItem(Constants.ACTION_ENABLE)), e;
      }),
      (AllIdentityDisplay.prototype.build = function () {
        var t = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
        return y.addClass(t, "allIdentity"), t;
      }),
      (AllIdentityDisplay.prototype.getItemButtonActions = function () {
        return [];
      }),
      (AllIdentityDisplay.prototype.handleToggleSelectedEvent = function () {});
  })($, document, LPTools, LPProxy);
