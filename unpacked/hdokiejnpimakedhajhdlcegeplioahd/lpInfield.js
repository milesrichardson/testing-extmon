"use strict";
function sendRequest(e) {
  if (null != e)
    if ((e.cmd && "popupfillinputget" != e.cmd && "popupfilliconnumber" != e.cmd && L("IF -> BG : cmd=" + e.cmd), g_ischrome))
      try {
        chrome_runtime_sendMessage(e, function () {});
      } catch (e) {}
    else g_iscasper ? "function" == typeof t_sendmsg && t_sendmsg(e) : bg.LPPlatform.postLegacyMessage({ name: "message", message: e });
}
var g_reference_url = "",
  InfieldIcons = {
    globe: "images/Globe.png",
    profile: "images/Profile.png",
    other: "images/Other.png",
    mastercard: "images/Mastercard.png",
    visa: "images/Visa.png",
    amex: "images/Amex.png",
    discover: "images/Discover.png"
  },
  InfieldCommands = (function () {
    function t(e) {
      csTop.LPInfieldFrame.close(e);
    }
    function e(e) {
      bg.InfieldCommands.editSite(e, !0);
    }
    function n(e) {
      bg.InfieldCommands.fillUserData(e, !0), t("action");
    }
    function i(e) {
      bg.InfieldCommands.copyUrl(e, !0);
    }
    function r(e) {
      bg.InfieldCommands.copyUserName(e, !0);
    }
    function o(e) {
      bg.InfieldCommands.copyPassword(e, !0, "formv2");
    }
    function a(e, n) {
      bg.InfieldCommands.setGeneratePasswordPrefs({ prefstr: e, genpwstr: n });
    }
    function s(e) {
      bg.InfieldCommands.editFormFill(e, !0, "formv2"), t("action");
    }
    function c(e) {
      bg.InfieldCommands.fillForm(e, !0, "formv2"), t("action");
    }
    function l(e, n) {
      bg.LPPlatform.copyToClipboard(e), g("copypass", { action: n, source: "formv2" });
    }
    function d(e) {
      bg.InfieldCommands.getGeneratePasswordPrefs(e);
    }
    function p(e, n) {
      bg.InfieldCommands.fillGeneratedPassword(e, n, !0), t("action");
    }
    function u(e, n, t) {
      bg.InfieldCommands.searchVault(e, n, t);
    }
    function f(e) {
      bg.InfieldCommands.getPopupFillData(e);
    }
    function g(e, n) {
      bg.sendLpImprove(e, n);
    }
    return {
      closePopup: t,
      copyToClipboard: l,
      editSite: e,
      fillUsernamePass: n,
      copyUrl: i,
      copyUserName: r,
      copyPassword: o,
      editFormFill: s,
      fillForm: c,
      getGeneratePrefs: d,
      writeAllPrefs: a,
      fillGeneratedPassword: p,
      searchVault: u,
      getInitialData: f,
      sendLpImprove: g
    };
  })(),
  InfieldView =
    (!(function (o) {
      var e = function (e, n, t) {
        var i = this;
        (i._onResizeCallback = t),
          e &&
            (e instanceof jQuery ? (i._triggerElement = e) : (i._triggerElement = o("#" + e)),
            n
              ? (i._triggerElement.click(function (e) {
                  i.show(), i._setPosition(e);
                }),
                i._triggerElement.keypress(function (e) {
                  i.show(), o(i._menuElement[0]).children().children()[0].focus(), i._setPosition(e);
                }))
              : (i._triggerElement.children().click(function (e) {
                  i.show();
                }),
                i._triggerElement.children().keypress(function (e) {
                  i.show(), o(i._menuElement[0]).children().children()[0].focus();
                })));
      };
      (e.prototype._setPosition = function (e) {
        var e = o(e.currentTarget).offset();
        (e.top += 20), (e.left += 20), this._menuElement.offset(e);
      }),
        (e.prototype.show = function () {
          o(".dropdown").hide(), o(".menuTriggered").removeClass("menuTriggered");
          var e = this,
            n;
          e._triggerElement.closest(".tile").addClass("menuTriggered"),
            e._triggerElement.addClass("menuTriggered"),
            this._menuElement &&
              this._menuElement.show(0, function () {
                e._onResizeCallback && e._onResizeCallback(e._menuElement.height(), 90);
              });
        }),
        (e.prototype.hide = function (e) {
          var n = this,
            t;
          n._triggerElement.closest(".tile").removeClass("menuTriggered"),
            n._triggerElement.removeClass("menuTriggered"),
            n._triggerElement.blur(),
            this._menuElement && (this._menuElement.hide(e), n._onResizeCallback());
        }),
        (e.prototype.resetTimer = function (e) {
          var n = this;
          n._menuElement &&
            (n._menuTimer = setTimeout(function () {
              n.hide();
            }, e || 1e3));
        }),
        (e.prototype.createMenu = function (e, n, t) {
          var i = this;
          return (
            (i._menuElement = o("<div></div>")
              .attr("id", e + "Menu")
              .addClass("dropdown")
              .addClass(n)
              .hide()
              .hover(
                function () {
                  var e = i._triggerElement.closest(".tile");
                  clearTimeout(i._menuTimer);
                },
                function () {
                  i.resetTimer(300);
                }
              )
              .append(i._createMenuItems(t))),
            i._menuElement
          );
        }),
        (e.prototype._createMenuItems = function (e) {
          for (var n = this, t = ((n._menuItems = e), o("<ul></ul>").addClass("menuList")), i = 0; i < n._menuItems.length; i++) {
            var r = o("<li></li>")
              .attr("data-viewId", n._menuItems[i].id)
              .attr("tabindex", "1")
              .click(function (e) {
                n.hide(), n.select(e.currentTarget.getAttribute("data-viewId"), !0);
              })
              .focus(function () {
                clearTimeout(n._menuTimer);
              })
              .keypress(function (e) {
                n.hide(), n.select(e.currentTarget.getAttribute("data-viewId"), !0);
              })
              .append(o("<p></p>").text(n._menuItems[i].text));
            t.append(r);
          }
          return t;
        }),
        (e.prototype._findMenu = function (n) {
          var e = o.grep(this._menuItems, function (e) {
            return e.id === n;
          });
          return e && 0 < e.length ? e[0] : null;
        }),
        (e.prototype.select = function (e, n) {
          var e = this._findMenu(e);
          e && this._triggerElement && this._triggerElement.find("p").text(e.selectedText), !0 === n && e && e.action && e.action();
        }),
        (window.InfieldMenu = e);
    })(jQuery),
    (function (t) {
      var n = [];
      function e(e) {
        Array.isArray(e) && 0 < e.length && ((n = e), r());
      }
      function i(e) {
        -1 != n.indexOf(e) && (r(), t("#" + e).show());
      }
      function r() {
        t.each(n, function (e, n) {
          t("#" + n).hide();
        });
      }
      return { init: e, show: i };
    })(jQuery)),
  InfieldGeneratePassword = (function (r) {
    function e(n, e, t) {
      r("#moreOptions, #hideOptions").click(function () {
        s(), t && t();
      }),
        r("#length").on("input", function () {
          InfieldSearch.debounce(a(), 500);
        }),
        r(".pwgen").change(o),
        r("#generateBtn").click(o),
        r("#pronounceable").click(function () {
          r("#pronounceable").prop("checked")
            ? (r("#digits").prop("checked", !1),
              r("#digits").prop("disabled", !0),
              r("#special").prop("checked", !1),
              r("#special").prop("disabled", !0),
              r("#ambig").prop("checked", !1),
              r("#upper").prop("checked", !0),
              r("#lower").prop("checked", !0))
            : (r("#digits").prop("checked", !0),
              r("#digits").prop("disabled", !1),
              r("#special").prop("checked", !0),
              r("#special").prop("disabled", !1));
        }),
        r("#ambig").click(function () {
          r("#ambig").prop("checked") &&
            (r("#pronounceable").prop("checked", !1), r("#digits").prop("disabled", !1), r("#special").prop("disabled", !1));
        }),
        r("#password")
          .on("copy", function () {
            bg.LPTabState.setCopiedGeneratedPassword(this.value);
          })
          .LP_addGeneratePasswordMeter(),
        bg.InfieldCommands.canCopy(function (e) {
          e
            ? r("#btnCopy").click(function () {
                var e = r("#password").val();
                n.copyToClipboard(e, "generatepassword"),
                  r("#btnCopy").hide(),
                  r("#copied").show(),
                  setTimeout(function () {
                    r("#copied").hide(), r("#btnCopy").show();
                  }, 1e3),
                  bg.LPTabState.setCopiedGeneratedPassword(e);
              })
            : r("#btnCopy").hide();
        });
      var i = function () {
        var e = r("#password").val();
        n.fillGeneratedPassword(e, {
          pronounceable: r("#pronounceable").prop("checked"),
          length: r("#password").val().length,
          expand: r("#moreOptions").is(":hidden"),
          uppercase: r("#upper").prop("checked"),
          lowercase: r("#lower").prop("checked"),
          numeric: r("#digits").prop("checked"),
          special: r("#special").prop("checked"),
          avoidAmbiguous: r("#ambig").prop("checked"),
          source: "formv2",
          variation: "old",
          generatedPasswordCount: r("#generatedPasswordCount").val()
        }),
          n.writeAllPrefs(
            JSON.stringify({
              generate_pronounceable: r("#pronounceable").prop("checked") ? 1 : 0,
              generate_length: r("#length").val(),
              generate_upper: r("#upper").prop("checked") ? 1 : 0,
              generate_lower: r("#lower").prop("checked") ? 1 : 0,
              generate_digits: r("#digits").prop("checked") ? 1 : 0,
              generate_special: r("#special").prop("checked") ? 1 : 0,
              generate_ambig: r("#ambig").prop("checked") ? 1 : 0,
              generate_mindigits: 2,
              generate_reqevery: 0
            })
          ),
          bg.GenPassHistory.add(e);
      };
      r("#fillPasswordBtn").click(i),
        r("#generateAndFillBtn").click(i),
        r("#generateAndFillBtn").keypress(i),
        r("#advancedView").hide(),
        r("#generateBtnContainer").hide();
    }
    function o() {
      r("#generatedPasswordCount").val(function () {
        return parseInt(r("#generatedPasswordCount").val()) + 1;
      });
      var e = lpCreatePass(
        r("#length").val(),
        r("#upper").prop("checked"),
        r("#lower").prop("checked"),
        r("#digits").prop("checked"),
        r("#special").prop("checked"),
        2,
        r("#ambig").prop("checked"),
        !0,
        r("#pronounceable").prop("checked")
      );
      r("#password").val(e).change(), bg.GenPassHistory.add(e);
    }
    function n() {
      var t = bg.get("g_prefoverrides").sitepwlen;
      t &&
        ((t = JSON.parse(t)),
        bg.get_selected_tab_data_no_extension(null, function (e) {
          var e = bg.lp_gettld_url(e.url),
            e,
            n;
          t[e] && ((e = t[e]), (n = Math.max(r("#length").val(), e)), r("#length").attr({ min: e }), r("#length").val(n), a());
        }));
    }
    function t(e) {
      n();
      var e = JSON.parse(e.prefstr);
      r("#length").val(parseInt(e.generate_length)),
        a(),
        r("#upper").prop("checked", !!parseInt(e.generate_upper)),
        r("#lower").prop("checked", !!parseInt(e.generate_lower)),
        r("#digits").prop("checked", !!parseInt(e.generate_digits)),
        r("#special").prop("checked", !!parseInt(e.generate_special)),
        r("#ambig").prop("checked", !!parseInt(e.generate_ambig)),
        r("#advancedView").hide(),
        r("#generateAndFillView").show(),
        parseInt(e.generate_pronounceable) ? r("#pronounceable").click() : r("#pronounceable").prop("pronounceable", !1),
        r("#password")
          .val(
            lpCreatePass(
              r("#length").val(),
              r("#upper").prop("checked"),
              r("#lower").prop("checked"),
              r("#digits").prop("checked"),
              r("#special").prop("checked"),
              2,
              r("#ambig").prop("checked"),
              !0,
              r("#pronounceable").prop("checked")
            )
          )
          .change();
    }
    function a() {
      r("#generatedPasswordLength").text(r("#length").val());
      var e = r("#length"),
        n = e.val(),
        t = e.attr("min"),
        i,
        n = ((n - t) / (e.attr("max") - t)) * 100;
      r("#sliderFill").width(n + "%");
    }
    function s() {
      r("#advancedView").toggle(), r("#generateAndFillView").toggle(), r("#generateBtnContainer").toggle(), r("#moreOptions").toggle();
    }
    function i() {
      r("#moreOptions").show(), r("#generateBtnContainer").hide();
    }
    function c() {
      r("#moreOptions").hide(), r("#generateBtnContainer").hide();
    }
    return { init: e, setup: t, show: i, hide: c };
  })(jQuery),
  InfieldTiles = (function (c, l, d, p) {
    var u;
    function e(e, i, n, r, t, o) {
      u = t;
      var a = [],
        s;
      return (
        c("#menuContainer").empty(),
        c("#" + e)
          .empty()
          .append(c('<p class="italic"></p>').text(o)),
        n &&
          ((s = c.map(n, function (e, n) {
            return e;
          })).sort(function (e, n) {
            return e;
          }),
          c.each(s, function (e, n) {
            var t = !1,
              e =
                (e + 1 === s.length && (t = !0),
                m(i, {
                  id: "sites" === i ? n.aid : n.ffid,
                  name: "sites" === i ? n.name : n.decprofilename,
                  description: "sites" === i ? n.unencryptedUsername : 1 == n.profiletype ? n.formattedCCNum : null,
                  icons: f(r, i, n),
                  moreText: "sites" === i ? p.translateString("More") : p.translateString("Edit"),
                  moreHandler:
                    "sites" === i
                      ? null
                      : function () {
                          l.editFormFill(n.ffid);
                        },
                  clickHandler:
                    "sites" === i
                      ? function () {
                          csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_FILLED), l.fillUsernamePass(n.aid);
                        }
                      : function () {
                          l.fillForm(n.ffid);
                        },
                  lastTile: t
                }));
            e && a.push(e);
          }),
          0 < a.length) &&
          c("#" + e)
            .empty()
            .append(a),
        a.length
      );
    }
    function f(e, n, t) {
      var i = "",
        r = "",
        o;
      if ("formfills" === n)
        if (0 == t.profiletype) i = InfieldIcons.profile;
        else
          switch (t.ccType) {
            case "VISA":
              i = InfieldIcons.visa;
              break;
            case "AMEX":
              i = InfieldIcons.amex;
              break;
            case "MC":
              i = InfieldIcons.mastercard;
              break;
            case "DISC":
              i = InfieldIcons.discover;
              break;
            default:
              i = InfieldIcons.other;
          }
      else (r = "icon-site"), (i = e && t.aid && e[t.aid] ? e[t.aid] : InfieldIcons.globe);
      return {
        normalEl: c("<img/>")
          .attr("src", i)
          .addClass("icon-default " + r)
      };
    }
    function g(e) {
      return c("<div></div>").addClass("col-2 no-left-gutter no-right-gutter").append(c("<div></div>").addClass("icon").append(e));
    }
    function m(e, n) {
      if (!n) return null;
      var t = null,
        i = c("<div></div>").addClass("col-8 text full-height"),
        r = c("<button></button>")
          .attr("id", n.id + "btn")
          .attr("tabindex", "1")
          .text(n.moreText);
      switch (e) {
        case "formfills":
          i.append(c("<span></span>").text(n.name)),
            n.description &&
              i.removeClass("full-height").append(c("<br/>")).append(c("<span></span>").addClass("small").text(n.description));
          break;
        case "sites":
          i.append(c("<span></span>").addClass("small").text(n.name)),
            n.description && i.removeClass("full-height").append(c("<br/>")).append(c("<span></span>").text(n.description));
          var t = new d(r, !0, u),
            o = [
              {
                id: "editSite",
                text: p.translateString("Edit"),
                action: function () {
                  l.editSite(n.id);
                }
              }
            ];
          bg.InfieldCommands.canCopy(function (e) {
            e &&
              (o.push({
                id: "copyPassword",
                text: p.translateString("Copy password"),
                action: function () {
                  l.copyPassword(n.id);
                }
              }),
              o.push({
                id: "copyUsername",
                text: p.translateString("Copy username"),
                action: function () {
                  l.copyUserName(n.id);
                }
              }),
              o.push({
                id: "copyURL",
                text: p.translateString("Copy URL"),
                action: function () {
                  l.copyUrl(n.id);
                }
              })),
              c("#menuContainer").append(t.createMenu(n.id + "btn", "tileDropdown", o));
          });
      }
      n.moreHandler && r.click(n.moreHandler);
      var e = c("<div></div>").addClass("col-2 no-right-gutter no-left-gutter pull-right more").append(r),
        a = g([n.icons.normalEl]),
        s =
          (a.click(n.clickHandler),
          i.click(n.clickHandler),
          c("<div></div>")
            .addClass("tile col-12")
            .attr("id", n.id)
            .attr("tabindex", "1")
            .append(c("<div></div>").addClass("row").append(a, i, e))
            .hover(
              function () {},
              function () {
                s.removeClass("triggered");
              }
            ));
      return (
        n.lastTile && s.addClass("lastTile"),
        r
          .focus(function () {
            s.addClass("triggered");
          })
          .blur(function () {
            s.removeClass("triggered");
          })
          .click(function () {
            s.addClass("menuTriggered"), s.removeClass("triggered");
          }),
        s
      );
    }
    return { setup: e };
  })(jQuery, InfieldCommands, InfieldMenu, Strings),
  InfieldSearch = (function (t) {
    var i, r, o, a, s, c;
    function e(n) {
      var e;
      (i = t("#searchContainer")),
        (r = t("#currentTab")),
        (o = t("#searchBtnContainer")),
        (a = t("#inlineSearch")),
        (s = t("#searchCloseBtn")),
        (c = t("#searchBtn")),
        u(),
        t("#searchBtn")
          .click(function () {
            d();
          })
          .keypress(function () {
            d();
          }),
        t("#searchCloseBtn")
          .click(function () {
            p(), n("");
          })
          .keypress(function () {
            p(), n("");
          }),
        n &&
          ((e = l(function (e) {
            n(t(e.currentTarget).val());
          }, 500)),
          a.keyup(e));
    }
    function l(t, i) {
      var r;
      return function () {
        var e = this,
          n = arguments;
        clearTimeout(r),
          (r = setTimeout(function () {
            (r = null), t.apply(e, n);
          }, i));
      };
    }
    function d() {
      r.fadeOut(),
        i.show(),
        i.animate({ width: "360px" }, 250, function () {
          s.show(), a.fadeIn().focus();
        }),
        c.addClass("searchBtnActive");
    }
    function p() {
      a.val(""),
        a.hide(),
        s.fadeOut(),
        i.show(),
        i.animate({ width: "16px" }, 250, function () {
          o.fadeOut(), r.fadeIn();
        }),
        c.removeClass("searchBtnActive");
    }
    function u() {
      a.hide(), s.hide(), i.show().css({ width: "16px" }), o.hide(), r.show(), c.removeClass("searchBtnActive");
    }
    function n() {
      i.show();
    }
    function f() {
      a.hide(), o.hide(), s.hide(), i.hide();
    }
    function g(e) {
      (e && !0 === e ? n : f)();
    }
    return { init: e, debounce: l, showIcon: n, hideIcon: f, display: g };
  })(jQuery),
  lpInfield = (function (r, o, n, a, s, c, l, e, t) {
    var d,
      p,
      i,
      u = t.translateString("No sites found for this web address. You can log in to this website to save your credentials"),
      f = t.translateString("No sites found matching your search."),
      g = t.translateString("No Form Fills saved. You can add one in your Vault."),
      m = t.translateString("No Form Fills found matching your search.");
    function h() {
      var e = Date.now();
      document.addEventListener("DOMContentLoaded", function () {
        y(function () {
          var e;
          t.translate(document.body),
            w(),
            I(),
            a.init(["sitesView", "formFillView", "generatePassView"]),
            v(),
            c.init(C),
            l.init(o, d, _),
            new MutationObserver(function () {
              _();
            }).observe(r(".infield-dialog")[0], { subtree: !0, childList: !0 }),
            o.getInitialData(P),
            r("#currentTabText").focus();
        });
      });
    }
    function w() {
      (i = new e({ $parentEl: r(".infield-dialog") })), b({ position: 360 });
    }
    function b(e) {
      i && e && e.position && r.isNumeric(e.position) && 10 < e.position && e.position < 370 && i.show("top", e.position);
    }
    function v() {
      var e = (d = new n("currentTab", null, _)).createMenu("navigation", null, [
        {
          id: "sitesView",
          text: t.translateString("Log in"),
          selectedText: t.translateString("Log in as"),
          action: function () {
            (p.type = "sites"), P(p);
          }
        },
        {
          id: "formFillView",
          text: t.translateString("Fill form"),
          selectedText: t.translateString("Fill form with"),
          action: function () {
            (p.type = "formfills"), P(p);
          }
        },
        {
          id: "generatePassView",
          text: t.translateString("Generate a password"),
          selectedText: t.translateString("Generate a password"),
          action: function () {
            (p.type = "generate"), P(p);
          }
        }
      ]);
      r("#navigationPlaceholder").append(e);
    }
    function I() {
      r("#btnClose").click(function () {
        o.closePopup("close");
      }),
        r("#btnClose").keypress(function () {
          o.closePopup("close");
        });
    }
    function y(i) {
      document.body.style.setProperty("display", "none", "important");
      var e = document.createElement("iframe");
      e.setAttribute("class", "backgroundFrame"),
        (e.src = "backgroundFrame.html?lplanguage=" + encodeURIComponent(g_language)),
        (e.style.display = "none"),
        e.addEventListener("load", function () {
          e.contentWindow.LPPlatform.getBackgroundInterface({
            mainRequestFramework: !1,
            interfaceDefinition: Interfaces.InfieldPopupInterface,
            getData: !0,
            context: "infieldPopup",
            callback: function (e) {
              window.bg = e;
            }
          }),
            e.contentWindow.Topics.get(e.contentWindow.Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function (e, n) {
              var t = parseInt(e.topFrameID);
              (window.csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, {
                direct: !1,
                context: "infieldPopup",
                requestFunction: function (e) {
                  n.sendRequest({ type: "contentScriptRequest", data: e, frameID: t });
                }
              })),
                window.csTop.LPFrame.initializeRequestFramework(LPTools.getURLParams().dialogID, function (e) {
                  e && (document.body.style.removeProperty("display"), i) && i();
                });
            });
        }),
        document.body.appendChild(e);
    }
    function C(e) {
      o.searchVault(e, p.type, k);
    }
    function k(e) {
      var n = p.type;
      if (e) {
        var t = JSON.parse(e);
        if (t)
          switch (n) {
            case "sites":
              s.setup("sitesView", n, t.sites, t.bigicons, _, f);
              break;
            case "formfills":
              s.setup("formFillView", n, t.formfills, null, _, m);
          }
      }
    }
    function _(e, n) {
      var t = r(".infield-dialog").outerHeight() + 20,
        i = r(".infield-dialog").outerWidth() + 10;
      e && r.isNumeric(e) && (t += e), n && r.isNumeric(n) && (i += n), csTop.LPInfieldFrame.resizeFrame(t, i);
    }
    function P(e) {
      if (e) {
        var n = 0,
          t,
          i,
          i;
        if ((p = e).type)
          switch (e.type) {
            case "sites":
              e.fillData.sites &&
                ((t = JSON.parse(e.fillData.sites)),
                (i = e.fillData.bigIcons ? JSON.parse(e.fillData.bigIcons) : null),
                (i = s.setup("sitesView", e.type, t, i, _, u)),
                d.select("sitesView"),
                a.show("sitesView"),
                c.display(2 < i),
                l.hide(),
                (n = Object.keys(t).length));
              break;
            case "formfills":
              var t = e.fillData.formFills ? JSON.parse(e.fillData.formFills) : {},
                i = s.setup("formFillView", e.type, t, null, _, g);
              d.select("formFillView"), a.show("formFillView"), c.display(2 < i), l.hide(), (n = Object.keys(t).length);
              break;
            case "generate":
              o.getGeneratePrefs(l.setup), d.select("generatePassView"), a.show("generatePassView"), c.display(!1), l.show();
          }
        csTop.LPInfieldFrame.positionFrame(function (e) {
          csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_OPENED, e);
        }),
          csTop.LPInfieldFrame.show(),
          r(".infield-dialog").show();
      } else o.closePopup("close");
    }
    return { init: h, setArrowPosition: b };
  })(jQuery, InfieldCommands, InfieldMenu, InfieldView, InfieldTiles, InfieldSearch, InfieldGeneratePassword, lpArrow, Strings);
lpInfield && lpInfield.init();
