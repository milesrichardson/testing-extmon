"undefined" != typeof LPPlatform &&
  LPPlatform.addEventListener(document, "keydown", function (e) {
    try {
      var t;
      switch (e.keyCode || e.which) {
        case 13:
          "checkbox" !== e.target.type ? Topics.get(Topics.ENTER).publish(e) : (e.target.checked = !e.target.checked);
          break;
        case 27:
          Topics.get(Topics.ESCAPE).publish({ openDialogCount: Dialog.prototype.getDialogCount() });
          break;
        case 32:
          $(e.target).hasClass("space-clickable") && (e.target.click(), e.preventDefault());
          break;
        case 37:
          Topics.get(Topics.LEFT_ARROW).publish(e);
          break;
        case 38:
          Topics.get(Topics.UP_ARROW).publish(e);
          break;
        case 39:
          Topics.get(Topics.RIGHT_ARROW).publish(e);
          break;
        case 40:
          Topics.get(Topics.DOWN_ARROW).publish(e);
      }
    } catch (e) {
      LPPlatform.logException(e);
    }
  }),
  (function (D) {
    var t = [],
      o,
      a,
      i =
        ((D.setDragItems = function (e) {
          t = e;
        }),
        (D.getDragItems = function () {
          return t;
        }),
        (D.buildItemButton = function (e) {
          e = "object" == typeof e ? e : { action: e };
          var t = Constants.ACTION_BUTTONS[e.action];
          return D.createElement("button", {
            class: "itemButton " + t.css,
            vaultaction: e.action,
            title: e.title || Strings.Vault[t.title],
            allowmultiple: !1,
            tabindex: 17
          });
        }),
        (D.setupMiddleEllipsis = function (e) {
          var t = e.find(".textOverflowContainer"),
            n = Math.ceil(t.get(0).children[0].getBoundingClientRect().width),
            e = n + Math.ceil(e.find(".textTail").get(0).getBoundingClientRect().width),
            n = e - n;
          t.css("max-width", e), t.css("padding-right", n), t.css("margin-right", -n);
        }),
        (D.requireBinary = function (e) {
          bg.have_binary()
            ? e()
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
        }),
        (D.isType = function (e, t) {
          return Object.prototype.toString.call(e) === "[object " + t + "]";
        }),
        (D.processURLParams = function (e) {
          for (var t = {}, n, o = (0 === e.indexOf("?") ? e.substr(1) : e).split("&"), i = 0; i < o.length; ++i) {
            var r = o[i].split("=");
            2 === r.length && (t[r[0]] = r[1]);
          }
          return t;
        }),
        (D.getURLParams = function () {
          return D.processURLParams(document.location.search);
        }),
        (D.setContent = function (e, t) {
          if ((e.empty(), t))
            if ("string" == typeof t) {
              for (var n = t.indexOf("<br/>"); -1 < n; )
                e.append(document.createTextNode(t.substring(0, n))),
                  e.append(document.createElement("br")),
                  (n = (t = t.substring(n + 5)).indexOf("<br/>"));
              e.append(document.createTextNode(t));
            } else if (D.isType(t, "Array"))
              for (var o = 0, i = t.length; o < i; ++o) {
                var r = t[o];
                "string" == typeof r && (r = D.createElement("p", "dialogText", r)), e.append(r);
              }
            else e.append(t);
        }),
        (D.hideContextMenu = function (e) {
          null !== e && (e.removeClass("bottomAligned"), e.hide(), D.removeKeyBoardNavigation());
        }),
        (D.displayContextMenu = function (e, t) {
          var t = $(t);
          return (
            e.clientY > window.innerHeight / 2
              ? (t.addClass("bottomAligned"), t.css("bottom", window.innerHeight - e.clientY), t.css("top", ""))
              : (t.css("top", e.clientY), t.css("bottom", "")),
            t.css("left", e.clientX),
            t.show(),
            t
          );
        }),
        (D.getProperties = function (e) {
          var t = [],
            n;
          for (n in e) t.push(n);
          return t;
        }),
        (D.openAlerts =
          ((o = function (e, t, n) {
            return function () {
              "function" == typeof e && e(), D.openAlerts(t, n);
            };
          }),
          function (e, t) {
            var n;
            0 < e.length
              ? ((n = e.shift()),
                $.extend(n, { handler: o(n.handler, e, t), closeHandler: o(n.closeHandler, e, t) }),
                dialogs[n.type].open(n))
              : t && t();
          })),
        (D.buildDialogItemContainer = function (e) {
          for (
            var t = D.createElement("div", "dialogItemContainer noSelect"),
              n = {
                display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                allowDrag: !1,
                additionalItemClasses: "dialogItem noItemButtons"
              },
              o = 0,
              i = e.length;
            o < i;
            ++o
          ) {
            var r = e[o].newDisplayObject();
            t.appendChild(r.build(n));
          }
          return t;
        }),
        (D.buildEmptyPlaceholder = function (e, t, n) {
          var n,
            n =
              "ul" === n.tagName.toLocaleLowerCase()
                ? D.createElement("li", "emptyPlaceholder " + t, e)
                : D.createElement("div", "emptyPlaceholder " + t, e);
          return n;
        }),
        (D.get_gmt_timestamp = function () {
          var e,
            t = new Date().getTime(),
            n;
          return parseInt(t / 1e3);
        }),
        (D.ContextMenuItem = function (c, O) {
          (this.getAction = function () {
            return c;
          }),
            (this.build = function (e, t, n) {
              var o = void 0 !== O && void 0 !== O.divider && O.divider,
                i = void 0 !== O && void 0 !== O.submenu && O.submenu,
                o = o ? "divider" : null,
                o = (i && (o += " subMenuOption"), D.createElement("li", { class: o, vaultaction: c, tabindex: "-1" })),
                i,
                r,
                a,
                s,
                T,
                E,
                l;
              void 0 === O || void 0 === O.text
                ? (o.textContent = Strings.Vault[Constants.CONTEXT_MENU_ITEMS[c]])
                : (o.textContent = O.text),
                e.appendChild(o),
                i
                  ? (o.appendChild(D.createElement("div")),
                    (i = D.createElement("ul", "subMenu")),
                    o.appendChild(i),
                    (r = $(o)),
                    (a = $(i)),
                    (s = null),
                    (T = !1),
                    (E = function () {
                      T && (a.hide("fast"), D.addKeyBoardNavigation(e.children), Topics.get(Topics.LEFT_ARROW).unsubscribe(E));
                    }),
                    (l = function (e) {
                      (T = !0), n(e), Topics.get(Topics.LEFT_ARROW).subscribe(E);
                    }),
                    r.bind("click", l),
                    r.bind("mouseenter", function (e) {
                      s = setTimeout(function () {
                        l(e);
                      }, 200);
                    }),
                    r.bind("mouseleave", function () {
                      s && clearTimeout(s), E();
                    }))
                  : LPPlatform.addEventListener(o, "click", t);
            });
        }),
        (D.parseUserSpecificMenu = function (e, t) {
          for (var n = e.firstElementChild; n; ) {
            var o = n.getAttribute("user");
            if (null !== o) {
              for (var i = o.split("|"), r = !0, a = 0, s = i.length; a < s; ++a)
                if (t === i[a]) {
                  r = !1;
                  break;
                }
              r ? $(n).hide() : n.removeAttribute("style");
            }
            D.parseUserSpecificMenu(n, t), (n = n.nextElementSibling);
          }
        }),
        (D.buildSentShareItems = function (e, t) {
          var n = [];
          if (t)
            for (var o = 0, i = t.length; o < i; ++o) {
              var r = t[o];
              "1" === r.state
                ? n.push(new AcceptedSentSharedItem(e, r))
                : "2" === r.state
                ? n.push(new DeclinedSentSharedItem(e, r))
                : n.push(new PendingSentSharedItem(e, r));
            }
          return n;
        }),
        (D.openShareDialog = function (t, e) {
          var n, o;
          t && 1 === t.length && void 0 === e
            ? (LPRequest.makeDataRequest(LPProxy.getSentShareData, {
                params: { id: t[0].getID() },
                requestSuccessOptions: { closeDialog: !1 },
                success: function (e) {
                  D.openShareDialog(t, e);
                },
                error: function () {
                  Topics.get(Topics.DIALOG_LOADED).publish();
                }
              }),
              Topics.get(Topics.DIALOG_LOADING).publish())
            : e && !dialogs.share.loadedJS()
            ? dialogs.share.loadJS(function () {
                D.openShareDialog(t, e);
              })
            : ((n = e ? D.buildSentShareItems(t[0], e.sent[t[0].getID()]) : null), (o = e ? e.friends : null), dialogs.share.open(t, n, o));
        }),
        (D.objectsToArray = function () {
          for (var e = [], t = 0, n = arguments.length; t < n; ++t) {
            var o = arguments[t],
              i;
            for (i in o) e.push(o[i]);
          }
          return e;
        }),
        (D.createEventHandler = function (t) {
          return function (e) {
            t.handleEvent(e);
          };
        }),
        (D.getAttribute = function (e, t, n) {
          for (var o = t.getAttribute(n); null === o && t !== e && null !== (t = t.parentElement); ) o = t.getAttribute(n);
          return o;
        }),
        (D.removeDOMChildren = function (e) {
          if (e) for (var t = e.childNodes.length; t--; ) e.removeChild(e.lastChild);
        }),
        (D.removeDOMChildrenFrom = function (e, t) {
          if (e)
            for (; t; ) {
              var n = t;
              (t = t.nextElementSibling), e.removeChild(n);
            }
        }),
        (D.createElement =
          ((a = function (e, t, n) {
            n instanceof Array ? e.setAttribute(t, n.join(" ")) : e.setAttribute(t, n);
          }),
          function (e, t, n) {
            var o = document.createElement(e);
            if (
              (("string" == typeof t || t instanceof Array) && (t = { class: t }),
              "object" == typeof (t = "input" !== e && "textarea" !== e ? t : $.extend(t, { spellcheck: !1 })))
            )
              for (var i in t) {
                var r = t[i];
                null !=
                  (r =
                    "src" === i && "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA() && !r.match(/^data:/)
                      ? LPPlatform.getResourcePath(r)
                      : r) && a(o, i, r);
              }
            return void 0 !== n && (o.textContent = n), o;
          })),
        (D.addClass = function (e, t) {
          var n;
          null !== e &&
            (t instanceof Array && (t = t.join(" ")), (n = e.getAttribute("class")), e.setAttribute("class", (t = n ? n + " " + t : t)));
        }),
        (D.getOption = function (e, t, n) {
          var n = n;
          return (n = e && void 0 !== e[t] ? e[t] : n);
        }),
        !(function () {
          var r = null,
            a = -1,
            s = "hover",
            T = "navindex",
            o = "[" + T + "]",
            E = null,
            l = null,
            c = null,
            O = null,
            _ = null,
            N = null,
            i = [],
            u = null,
            C = function (e) {
              return r && -1 < e && e < r.length ? r[e] : null;
            },
            n = function (e, t) {
              var n;
              a !== e && (d(a), N) && (n = N[a]) && "function" == typeof n.navigateFrom && N[a].navigateFrom(),
                (currentTarget = C((a = e))) &&
                  (currentTarget.addClass(s), currentTarget.focus(), t) &&
                  _ &&
                  _.focusHandler &&
                  _.focusHandler(currentTarget);
            },
            d = function (e) {
              var e = C(e);
              e && (e.removeClass(s), e.blur());
            },
            t = function (e) {
              var e = e.closest(o),
                t = parseInt(e.attr(T)),
                n = r[t];
              return n && n.get(0) === e.get(0) ? t : -1;
            },
            A = function (e) {
              (O = !0), $(document.body).unbind("mousemove", A);
            },
            p =
              ((D.disableMouse = function (e) {
                O && ((O = !1), $(document.body).bind("mousemove", A));
              }),
              function (e) {
                var e;
                O && ((e = $(e.target)), n(t(e)));
              }),
            I = function (e) {
              var e;
              O && ((e = $(e.target)), d(t(e)));
            },
            S = function (e) {
              var t = e.offsetParent();
              t.scrollTop(Math.max(t.scrollTop() + t.height(), t.scrollTop() + e.position().top + e.outerHeight()) - t.height());
            },
            f = function (e) {
              var t = e.offsetParent();
              t.scrollTop(Math.min(t.scrollTop(), t.scrollTop() + e.position().top));
            },
            g = function (e) {
              var t = null;
              a === r.length - 1 ? f(r[(t = 0)]) : S(r[(t = a + 1)]), n(t, !0), D.disableMouse(), e.preventDefault(), e.stopPropagation();
            },
            h = function (e) {
              var t = null;
              (a < 1 ? ((t = r.length - 1), S) : R((t = a - 1)) ? S : f)(r[t]),
                n(t, !0),
                D.disableMouse(),
                e.preventDefault(),
                e.stopPropagation();
            },
            R = function (e) {
              var e, t, n, o;
              return !!isFinite(e) && !!(e = r[e]) && !!(t = e.offsetParent()) && t.height() < e.offset().top;
            },
            P = function (e) {
              var t;
              e && ((t = new Event(E, { bubbles: !0 })), e.get(0).dispatchEvent(t));
            },
            m = function (e, t, n) {
              if (e) {
                var e = e[t];
                if (e && "function" == typeof e[(n = "arrow" + n.substr(0, 1).toUpperCase() + n.substr(1).toLowerCase() + "Override")])
                  return e[n]();
              }
              return !0;
            },
            e = function (e) {
              var t;
              if ((t = m(N, a, e))) for (var n = i.length - 1; 0 <= n && t; --n) var o = i[n], t = m(o.options.displayItems, o.navIndex, e);
              return t;
            },
            v = e.bind(this, "left"),
            M = e.bind(this, "right"),
            b = function () {
              if (N) {
                var e = N[a];
                if (e && "function" == typeof e.keyboardEnterOverride) return e.keyboardEnterOverride();
              }
              return !0;
            },
            L = function () {
              var e, t;
              return M() && c && (e = C(a)) && (l && (t = e.find(l)).length && (e = t), P(e), D.disableMouse()), !c;
            },
            U = function () {
              return v();
            },
            y = function () {
              return b() && P(C(a)), !1;
            };
          (D.setNavIndex = function (e) {
            n(e);
            var e = C();
            e && e.get(0).scrollIntoView();
          }),
            (D.getNavIndex = function () {
              return a;
            }),
            (D.addKeyBoardNavigation = function (e, t) {
              if (0 < e.length) {
                (u = { elements: e, options: t }),
                  (r = []),
                  (a = -1),
                  null === O && (O = !0),
                  (E = D.getOption(t, "mouseEvent", "click")),
                  (l = D.getOption(t, "rightArrowSelector", null)),
                  (c = D.getOption(t, "useRightArrow", !0)),
                  (N = D.getOption(t, "displayItems", null)),
                  (_ = t);
                for (var n = 0, o = e.length; n < o; ++n) {
                  var i = $(e[n]);
                  i.attr(T, n),
                    i.unbind("mouseenter", p),
                    i.bind("mouseenter", p),
                    i.unbind("mouseleave", I),
                    i.bind("mouseleave", I),
                    i.hasClass(s) && (a = n),
                    r.push(i);
                }
                Topics.get(Topics.DOWN_ARROW).subscribe(g),
                  Topics.get(Topics.UP_ARROW).subscribe(h),
                  Topics.get(Topics.ENTER).subscribeFirst(y),
                  Topics.get(Topics.RIGHT_ARROW).subscribeFirst(L),
                  Topics.get(Topics.LEFT_ARROW).subscribeFirst(U),
                  D.getOption(t, "selectFirst", !1) && D.setNavIndex(0);
              } else D.removeKeyBoardNavigation();
            }),
            (D.removeKeyBoardNavigation = function () {
              if (r) for (var e = 0, t = r.length; e < t; ++e) r[e].unbind("mouseenter", p), r[e].unbind("mouseleave", I);
              Topics.get(Topics.DOWN_ARROW).unsubscribe(g),
                Topics.get(Topics.UP_ARROW).unsubscribe(h),
                Topics.get(Topics.RIGHT_ARROW).unsubscribe(L),
                Topics.get(Topics.LEFT_ARROW).unsubscribe(U),
                Topics.get(Topics.ENTER).unsubscribe(y);
            }),
            (D.pushKeyBoardNavigation = function (e, t) {
              u && u.elements !== e && ((u.navIndex = a), i.push(u)), D.removeKeyBoardNavigation(), D.addKeyBoardNavigation(e, t);
            }),
            (D.popKeyBoardNavigation = function () {
              var e = i.pop();
              e && (D.removeKeyBoardNavigation(), D.addKeyBoardNavigation(e.elements, $.extend({}, e.options, { selectFirst: !1 })));
            });
        })(),
        (D.addZebraStriping = function (e) {
          for (var t = $(e).find("tr"), n = 0, o = t.length; n < o; ++n) n % 2 != 0 ? $(t[n]).addClass("odd") : $(t[n]).removeClass("odd");
        }),
        function (e) {
          var e = e.target.previousElementSibling;
          e.checked = !e.checked;
        });
    (D.buildCheckbox = function (e, t) {
      var n = t ? t.checkboxAttributes : void 0,
        n = $.extend(n, { class: "checkbox", type: "checkbox" }),
        n = D.createElement("input", n),
        e = D.createElement("label", e, D.getOption(t, "text", void 0)),
        t = (D.getOption(t, "addClickHandler", !0) && LPPlatform.addEventListener(e, "click", i), D.createElement("div"));
      return t.appendChild(n), t.appendChild(e), t;
    }),
      (D.buildRadioButton = function (e, t, n) {
        var e = D.createElement("input", { class: "radio", type: "radio", name: e }),
          t = D.createElement("label", t, n),
          n = (LPPlatform.addEventListener(t, "click", i), D.createElement("div"));
        return n.appendChild(e), n.appendChild(t), n;
      }),
      (D.hasProperties = function (e) {
        if (e) for (var t in e) if (e.hasOwnProperty(t)) return !0;
        return !1;
      }),
      (D.createSelectElement = function (e, t) {
        var t = D.createElement("select", t);
        return $(t).addClass("dialogInput selectDropdown"), D.setSelectOptions(t, e), t;
      }),
      (D.setSelectOptions = function (e, t) {
        D.removeDOMChildren(e);
        for (var n = 0, o = t.length; n < o; ++n) {
          var i = t[n],
            r = "object" == typeof i ? i.value : i,
            i = "object" == typeof i && i.label ? i.label : r;
          e.appendChild(D.createElement("option", { value: r }, i));
        }
      });
  })((LPTools = {})),
  (function (e) {
    (e.ACTION_BUTTONS = {}),
      (e.ACTION_BUTTONS[e.ACTION_EDIT] = { title: "EDIT", css: e.ACTION_EDIT }),
      (e.ACTION_BUTTONS[e.ACTION_SHARE] = { title: "SHARE", css: e.ACTION_SHARE }),
      (e.ACTION_BUTTONS[e.ACTION_DELETE] = { title: "DELETE", css: e.ACTION_DELETE }),
      (e.ACTION_BUTTONS[e.ACTION_ACCEPT] = { title: "ACCEPT", css: e.ACTION_ACCEPT }),
      (e.ACTION_BUTTONS[e.ACTION_REJECT] = { title: "REJECT", css: e.ACTION_REJECT }),
      (e.ACTION_BUTTONS[e.ACTION_LAUNCH] = { title: "LAUNCH", css: null }),
      (e.ACTION_BUTTONS[e.ACTION_ENABLE] = { title: "ENABLE", css: null }),
      (e.ACTION_BUTTONS[e.ACTION_ACCESS] = { title: "REQUEST_ACCESS", css: null }),
      (e.ACTION_BUTTONS[e.ACTION_REVOKE] = { title: "REVOKE", css: e.ACTION_REJECT }),
      (e.ACTION_BUTTONS[e.ACTION_EMAIL] = { title: "RESEND", css: e.ACTION_EMAIL }),
      (e.ACTION_BUTTONS[e.ACTION_CANCEL] = { title: "CANCEL_INVITE", css: e.ACTION_REJECT }),
      (e.ACTION_BUTTONS[e.ACTION_REMOVE] = { title: "REMOVE", css: e.ACTION_REJECT }),
      (e.ACTION_BUTTONS[e.ACTION_PURGE] = { title: "PURGE", css: e.ACTION_DELETE }),
      (e.ACTION_BUTTONS[e.ACTION_PURGE_SHARED_FOLDER] = { title: "PURGE", css: e.ACTION_DELETE }),
      (e.ACTION_BUTTONS[e.ACTION_RESTORE] = { title: "RESTORE", css: e.ACTION_RESTORE }),
      (e.ACTION_BUTTONS[e.ACTION_RESTORE_SHARED_FOLDER] = { title: "RESTORE", css: e.ACTION_RESTORE }),
      (e.ACTION_BUTTONS[e.ACTION_MANAGE] = { title: "MANAGE", css: e.ACTION_EDIT }),
      (e.ACTION_BUTTONS[e.ACTION_MANAGE_RECIPIENTS] = { title: "MANAGE_RECIPIENTS", css: e.ACTION_EDIT }),
      (e.ACTION_BUTTONS[e.ACTION_MANAGE_ITEMS] = { title: "MANAGE_ITEMS", css: e.ACTION_EDIT }),
      (e.ACTION_BUTTONS[e.ACTION_UNLINK] = { title: "UNLINK", css: e.ACTION_DELETE }),
      (e.CONTEXT_MENU_ITEMS = {}),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_EDIT] = "EDIT"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_SHARE] = "SHARE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_DELETE] = "DELETE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_GO_TO_URL] = "GO_TO_URL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_TOTP] = "COPY_TOTP"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_USERNAME] = "COPY_USERNAME"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_PASSWORD] = "COPY_PASSWORD"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_URL] = "COPY_URL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_MOVE_TO_FOLDER_MENU] = "MOVE_TO_FOLDER"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU] = "MOVE_TO_SUB_FOLDER"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_ACCEPT] = "ACCEPT"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_REJECT] = "REJECT"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_ENABLE] = "ENABLE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_RENAME] = "RENAME_FOLDER"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_CONVERT] = "CONVERT_FOLDER_TO_LEGACY"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_CREATE_SUB_FOLDER] = "CREATE_SUB_FOLDER"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN_ALL] = "OPEN_ALL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_NOTE] = "COPY_NOTE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_COPY_KEY] = "COPY_KEY"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_FILL] = "FILL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_OPEN] = "OPEN"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_SAVE] = "SAVE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_DOWNLOAD] = "DOWNLOAD"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_REVOKE] = "REVOKE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_EMAIL] = "RESEND"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_CANCEL] = "CANCEL_INVITE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_REMOVE] = "REMOVE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_PURGE] = "PURGE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_PURGE_SHARED_FOLDER] = "PURGE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_RESTORE] = "RESTORE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_RESTORE_SHARED_FOLDER] = "RESTORE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_UNLINK] = "UNLINK_PERSONAL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_STOP_DOWNLOADING] = "STOP_DOWNLOADING"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_START_DOWNLOADING] = "START_DOWNLOADING"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_FILL_SITE] = "AUTO_FILL"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_CLONE] = "CLONE"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_MANAGE] = "MANAGE_FOLDER"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_MANAGE_RECIPIENTS] = "MANAGE_RECIPIENTS"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_MANAGE_ITEMS] = "MANAGE_ITEMS"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_ACCESS] = "REQUEST_ACCESS"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_DASHBOARD] = "OPEN_DASHBOARD"),
      (e.CONTEXT_MENU_ITEMS[e.ACTION_UPGRADE] = "UPGRADE_PREMIUM"),
      (e.HISTORY_TYPES = { PASSWORD: 0, USERNAME: 1, NOTE: 2 });
  })(
    (Constants = {
      ACTION_OPEN_MOVE_TO_SUB_FOLDER_MENU: "openMoveToSubFolderMenu",
      ACTION_OPEN_MOVE_TO_FOLDER_MENU: "openMoveToFolderMenu",
      ACTION_MOVE_TO_FOLDER: "moveToFolder",
      ACTION_SAVE: "save",
      ACTION_DELETE: "delete",
      ACTION_SHARE: "share",
      ACTION_COPY_TOTP: "copyTotp",
      ACTION_COPY_USERNAME: "copyUsername",
      ACTION_COPY_PASSWORD: "copyPassword",
      ACTION_COPY_ADDRESS_1: "copyAddress1",
      ACTION_COPY_ADDRESS_2: "copyAddress2",
      ACTION_COPY_CITY_SLASH_TOWN: "copyCitySlashTown",
      ACTION_COPY_ZIP_SLASH_POSTAL_CODE: "copyZipSlashPostalCode",
      ACTION_COPY_EMAIL_ADDRESS: "copyEmailAddress",
      ACTION_COPY_PHONE_NUMBER: "copyPhoneNumber",
      ACTION_COPY_BANK_NAME: "copyBankName",
      ACTION_COPY_ACCOUNT_NUMBER: "copyAccountNumber",
      ACTION_COPY_ROUTING_NUMBER: "copyRoutingNumber",
      ACTION_COPY_NAME_ON_CARD: "copyNameOnCard",
      ACTION_COPY_SECURITY_CODE: "copySecurityCode",
      ACTION_COPY_GROUP_ID: "copyGroupId",
      ACTION_COPY_MEMBER_ID: "copyMemberId",
      ACTION_COPY_POLICY_NUMBER: "copyPolicyNumber",
      ACTION_COPY_MEMBERSHIP_NUMBER: "copyMembershipNumber",
      ACTION_COPY_NUMBER: "copyNumber",
      ACTION_COPY_LICENSE_KEY: "copyLicenseKey",
      ACTION_COPY_ORDER_NUMBER: "copyOrderNumber",
      ACTION_COPY_SSH_PASSPHRASE: "copySshPassphrase",
      ACTION_COPY_SSH_PUBLIC_KEY: "copySshPublicKey",
      ACTION_COPY_HOSTNAME: "copyHostname",
      ACTION_COPY_NOTE_USERNAME: "copyUsername",
      ACTION_COPY_NOTE_PASSWORD: "copyPassword",
      ACTION_COPY_URL: "copyURL",
      ACTION_EDIT: "edit",
      ACTION_LAUNCH: "launch",
      ACTION_GO_TO_URL: "goToURL",
      ACTION_TOGGLE_OPEN: "toggleOpen",
      ACTION_RENAME: "rename",
      ACTION_CONVERT: "convert",
      ACTION_ACCEPT: "acceptShare",
      ACTION_REJECT: "rejectShare",
      ACTION_ENABLE: "enable",
      ACTION_TOGGLE_SELECT: "toggleSelect",
      ACTION_CREATE_SUB_FOLDER: "createSubFolder",
      ACTION_OPEN_ALL: "openAll",
      ACTION_OPEN_MORE_OPTIONS: "openMoreOptions",
      ACTION_OPEN_IN_CONTEXT_OPTIONS: "openInContextOptions",
      ACTION_COPY_NOTE: "copyNote",
      ACTION_FILL: "fillForm",
      ACTION_OPEN: "open",
      ACTION_REVOKE: "revoke",
      ACTION_EMAIL: "email",
      ACTION_CANCEL: "cancel",
      ACTION_REMOVE: "remove",
      ACTION_PURGE: "purge",
      ACTION_PURGE_SHARED_FOLDER: "purgeSharedFolder",
      ACTION_RESTORE: "restore",
      ACTION_RESTORE_SHARED_FOLDER: "restoreSharedFolder",
      ACTION_UNLINK: "unlink",
      ACTION_STOP_DOWNLOADING: "stopDownloading",
      ACTION_START_DOWNLOADING: "startDownloading",
      ACTION_FILL_SITE: "fillSite",
      ACTION_CLONE: "clone",
      ACTION_ADD: "add",
      ACTION_MANAGE: "manage",
      ACTION_MANAGE_RECIPIENTS: "manageRecipients",
      ACTION_MANAGE_ITEMS: "manageItems",
      ACTION_ACCESS: "access",
      ACTION_COPY_KEY: "copyKey",
      ACTION_DASHBOARD: "dashboard",
      ACTION_UPGRADE: "upgrade",
      ACTION_DO_NOTHING: "doNothing",
      ACTION_DOWNLOAD: "download",
      USER_FREE: "Free User",
      USER_PREMIUM: "Premium User",
      USER_PREMIUM_TRIAL: "Premium Trial User",
      USER_ENTERPRISE: "Enterprise User",
      USER_ENTERPRISE_ADMIN: "Enterprise Admin",
      USER_ENTERPRISE_ROLE: "Enterprise Role User",
      USER_TEAMS: "Teams User",
      USER_TEAMS_ADMIN: "Teams Admin",
      USER_FAMILY: "Family User",
      USER_FAMILY_ADMIN: "Family Admin",
      UNAFFILIATED_COMPANY_ID: "0",
      EmailAddressRegularExpression:
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g
    })
  ),
  (function (E) {
    var o, n, i, r, e, a, l, c, O, s;
    E.fn.extend({
      LP_show: function () {
        return this.removeClass("displaynone"), this;
      },
      LP_hide: function () {
        return this.addClass("displaynone"), this;
      },
      LP_removeAttr: function (e) {
        for (var t = 0, n = this.length; t < n; ++t) this.get(t).removeAttribute(e);
      },
      LP_addSearchHandlers: function (e, t) {
        var n = E(LPTools.createElement("div", "searchInputContainer")),
          o =
            (n.attr("role", "search"),
            n.attr("aria-label", Strings.translateString("Search")),
            this.before(n),
            n.append(this),
            "searchCloseButton space-clickable"),
          e = (e && (o += " " + e), E(LPTools.createElement("div", { class: o, title: Strings.translateString("Clear Search") }))),
          i =
            (n.append(e),
            function (e) {
              0 < e.length ? n.addClass("populated") : n.removeClass("populated");
            }),
          r,
          a = function (e) {
            clearTimeout(r),
              (r = setTimeout(function () {
                try {
                  t(e);
                } catch (e) {
                  LPPlatform.logException(e);
                }
                n.removeClass("loading");
              }, 150));
          },
          s;
        return (
          (s = this),
          e.bind("click", function (e) {
            s.val(""), e.stopPropagation(), e.preventDefault();
          }),
          this.LP_input("search", function (e) {
            n.addClass("loading"), i(e), a(e);
          }),
          this
        );
      },
      LP_createToggle:
        ((s = function (e) {
          var t;
          "INPUT" === e.nodeName &&
            "checkbox" === e.getAttribute("type") &&
            "LABEL" === e.nextElementSibling.nodeName &&
            ((t = LPTools.createElement("div", "toggleButton")).appendChild(LPTools.createElement("div")),
            e.nextElementSibling.appendChild(t));
        }),
        function () {
          for (var e = 0, t = this.length; e < t; ++e) s(this.get(e));
          return this;
        }),
      LP_addPasswordEye:
        ((a = function (e, t, n) {
          (e.passwordShown = !0),
            e.attr("type", "text"),
            t.attr("title", Strings.Vault.HIDE_PASSWORD),
            t.addClass("selected"),
            n && t.text(Strings.Vault.HIDE);
        }),
        (l = function (e, t, n) {
          (e.passwordShown = !1),
            e.attr("type", "password"),
            t.attr("title", Strings.Vault.SHOW_PASSWORD),
            t.removeClass("selected"),
            n && t.text(Strings.Vault.SHOW);
        }),
        (c = function (e, t, n) {
          switch (e.attr("type")) {
            case "password":
              a(e, t, n);
              break;
            case "text":
              l(e, t, n);
          }
          n && O(e, t);
        }),
        (O = function (e, t) {
          e.css("padding-right", t.outerWidth());
        }),
        function (e) {
          this.addClass("password");
          var t = E(LPTools.createElement("div", "relative")),
            n =
              (this.before(t),
              t.append(this),
              t.css({ margin: this.css("margin") }),
              this.css("margin", "0"),
              E(LPTools.createElement("button", { class: "showPassword", title: Strings.Vault.SHOW_PASSWORD }))),
            o,
            i,
            r,
            a,
            s;
          function T() {
            0 === o.val().length ? n.addClass("displaynone") : n.removeClass("displaynone");
          }
          return (
            t.append(n),
            (o = this),
            (i = LPTools.getOption(e, "checkPermissionHandler", null)),
            (r = LPTools.getOption(e, "copyVaultItemPasswordHandler", null)),
            (a = LPTools.getOption(e, "textual", !1))
              ? (n.addClass("textual"),
                n.text(Strings.Vault.SHOW),
                o.one("focus", function () {
                  O(o, n);
                }))
              : n.addClass("iconButton"),
            n.bind("click", function () {
              "password" === o.attr("type") && i
                ? i(function () {
                    c(o, n, a);
                  })
                : c(o, n, a);
            }),
            o.bind("copy", r),
            (o.hidePassword = function () {
              l(o, n, a);
            }),
            LPTools.getOption(e, "includeGenerateButton", !1) &&
              (o.LP_input("passwordGenerate", function (e) {
                e ? t.removeClass("empty") : (o.hidePassword(), t.addClass("empty"));
              }),
              (r = E(LPTools.createElement("button", { class: "generatePassword iconButton", title: Strings.Vault.GENERATE_PASSWORD }))),
              t.append(r),
              r.bind("click", function () {
                var e;
                (bg.get("LPContentScriptFeatures").better_generate_password_enabled
                  ? dialogs.betterGeneratePassword
                  : dialogs.generatePassword
                ).open({ fillGenerated: !1, saveOptions: { source: "vault" } });
              })),
            LPTools.getOption(e, "showOnlyIfPopulated", !1) && (T(), o.bind("keyup", T)),
            this.val(this.val()),
            this
          );
        }),
      LP_addTotpEye:
        ((o = null),
        (n = function (e, t) {
          var n = o.value;
          "" == n
            ? alert("No totp secret set.")
            : ((e[0].value = new jsOTP.totp().getOtp(n)),
              (e.passwordShown = !0),
              e.attr("type", "text"),
              t.attr("title", Strings.Vault.HIDE_TOTP),
              t.addClass("selected"));
        }),
        (i = function (e, t) {
          (e.passwordShown = !1), e.attr("type", "password"), t.attr("title", Strings.Vault.SHOW_TOTP), t.removeClass("selected");
        }),
        (r = function (e, t) {
          switch (e.attr("type")) {
            case "password":
              n(e, t);
              break;
            case "text":
              i(e, t);
          }
        }),
        (e = function (e, t) {
          e.css("padding-right", t.outerWidth());
        }),
        function (e) {
          (o = e), this.addClass("password");
          var e = E(LPTools.createElement("div", "relative")),
            t =
              (this.before(e),
              e.append(this),
              e.css({ margin: this.css("margin") }),
              this.css("margin", "0"),
              E(LPTools.createElement("button", { class: "showTotp", title: Strings.Vault.SHOW_TOTP }))),
            n;
          return (
            e.append(t),
            (n = this),
            t.addClass("iconButton"),
            t.bind("click", function () {
              r(n, t);
            }),
            (n.hidePassword = function () {
              i(n, t);
            }),
            this.val(this.val()),
            this
          );
        }),
      LP_reflow: function () {
        for (var e = 0; e < this.length; ++e) this.get(e).offsetHeight;
        return this;
      },
      LP_scrollParent: function () {
        var e;
        if (1 === this.length)
          for (var t = this.get(0).parentElement; t; ) {
            var n = E(t);
            if ("auto" === n.css("overflow") && n.css("max-height")) {
              e = t;
              break;
            }
            t = t.parentElement;
          }
        return E(e);
      },
      LP_input: function (e, t) {
        var n = this,
          o =
            ((e = e ? "." + e : ""),
            n.unbind("keypress" + e),
            n.unbind("keyup" + e),
            n.unbind("input" + e),
            function (e) {
              var e = e.which;
              31 < e && t(n.val() + String.fromCharCode(e));
            }),
          i =
            (n.bind("keypress" + e, o),
            function (e) {
              switch (e.keyCode || e.which) {
                case 8:
                case 46:
                  t(n.val());
              }
            }),
          r =
            (n.bind("keyup" + e, i),
            function () {
              n.unbind("keypress" + e, o), n.unbind("keyup" + e, i), n.unbind("input" + e, r);
            }),
          a;
        n.bind("input" + e, r),
          n.bind("input" + e, function () {
            t(n.val());
          }),
          (n.val =
            ((a = this.val),
            function () {
              return 1 === arguments.length && t(arguments[0]), a.apply(n, arguments);
            }));
      }
    });
  })(jQuery),
  ((NotifyException = function (e) {
    Topics.get(Topics.ERROR).publish(e), (this.message = e), (this.stack = new Error().stack);
  }).prototype = Object.create(Error.prototype)),
  (NotifyException.prototype.name = "InvalidArgumentException"),
  (NotifyException.prototype.constructor = NotifyException),
  ((AttachmentKeyException = function () {
    NotifyException.call(this, Strings.translateString("Could not decrypt attachment key."));
  }).prototype = Object.create(NotifyException.prototype)),
  (AttachmentKeyException.prototype.name = "AttachmentKeyException"),
  (AttachmentKeyException.prototype.constructor = AttachmentKeyException);
