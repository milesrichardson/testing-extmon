"use strict";
var reduxStore;
function sendRequest(e) {
  if (null != e)
    if ((e.cmd && "popupfillinputget" != e.cmd && "popupfilliconnumber" != e.cmd && L("IF -> BG : cmd=" + e.cmd), g_ischrome))
      try {
        chrome_runtime_sendMessage(e, function () {});
      } catch (e) {}
    else g_iscasper ? "function" == typeof t_sendmsg && t_sendmsg(e) : bg.LPPlatform.postLegacyMessage({ name: "message", message: e });
}
var g_reference_url = "",
  InfieldMenuTimer = (function () {
    var e;
    function t() {
      e = setTimeout(function () {
        $(".menuTriggered").removeClass("menuTriggered"), $(".dropdown").hide();
      }, 300);
    }
    function n() {
      null != e && clearTimeout(e);
    }
    return { startTimer: t, clearTimer: n };
  })(),
  InfieldIcons = {
    pw: "fa-lock",
    sn: "fa-sticky-note",
    address: "fa-address-book",
    ccDefault: "fa-credit-card-alt",
    ccAmex: "fa-cc-amex",
    ccMastercard: "fa-cc-mastercard",
    ccDiscover: "fa-cc-discover",
    ccVisa: "fa-cc-visa",
    ccDiners: "fa-cc-diners-club",
    ccJcb: "fa-cc-jcb",
    ba: "fa-bank",
    dl: "fa-car",
    pp: "fa-globe",
    ssn: "fa-balance-scale",
    insurance: "fa-umbrella",
    member: "fa-barcode",
    wifi: "fa-wifi",
    db: "fa-database",
    server: "fa-server",
    ssh: "fa-user-secret",
    software: "fa-laptop",
    custom: "fa-puzzle-piece"
  },
  advancedOptionsViewed = !1,
  debounceWait = 500,
  InfieldCommands = (function () {
    function i(e) {
      csTop.LPInfieldFrame.close(e);
    }
    function e(e) {
      bg.InfieldCommands.editSite(e, !0);
    }
    function t(e) {
      var t;
      bg.get("LPContentScriptFeatures").web_client_fill
        ? ((t = reduxStore.getState()), reduxStore.dispatch(reduxInfield.fillActions.manualFill(t.page, e, "Infield V2", t.sectionId)))
        : sendRequest({ cmd: "infieldfillpw", aid: e, from_iframe: !0, no_manualfill_on_saveall: !0, fromiframe: 1, source: "formv2" }),
        i("action");
    }
    function n() {
      return bg.get("g_password_strength_hardening_enabled");
    }
    function o(e) {
      bg.InfieldCommands.copyUrl(e, !0), i("action");
    }
    function r(e) {
      bg.InfieldCommands.copyUserName(e, !0), i("action");
    }
    function a(e) {
      bg.InfieldCommands.copyPassword(e, !0, "formv2"), i("action");
    }
    function s(e) {
      bg.InfieldCommands.copyTotp(e, !0), i("action");
    }
    function c(e, t, n) {
      bg.InfieldCommands.copyProp(e, t, !0, n), i("action");
    }
    function d(e, t) {
      bg.InfieldCommands.setGeneratePasswordPrefs({ prefstr: e, genpwstr: t });
    }
    function l(e) {
      bg.InfieldCommands.editFormFill(e, !0, "formv2"), i("action");
    }
    function p(e) {
      var t;
      bg.get("LPContentScriptFeatures").web_client_fill
        ? ((t = reduxStore.getState()), reduxStore.dispatch(reduxInfield.fillActions.manualFill(t.page, e, "Infield V2", t.sectionId)))
        : bg.InfieldCommands.fillForm(e, !0, "formv2"),
        i("action");
    }
    function u(e, t) {
      bg.LPPlatform.copyToClipboard(e), w("copypass", { action: t, source: "formv2" });
    }
    function f(e) {
      bg.InfieldCommands.getGeneratePasswordPrefs(e);
    }
    function g(e, t) {
      var n;
      bg.get("LPContentScriptFeatures").web_client_fill
        ? ((n = reduxStore.getState()),
          reduxStore.dispatch(reduxInfield.fillActions.fillGeneratedPassword(n.page, e, "Infield V2", n.pageLanguage, n.sectionId)))
        : bg.InfieldCommands.fillGeneratedPassword(e, t, !0),
        i("action");
    }
    function m(e, t, n) {
      bg.InfieldCommands.searchVaultAll(e, t, n);
    }
    function h(e) {
      bg.InfieldCommands.getPopupFillData(e);
    }
    function w(e, t) {
      bg.sendLpImprove(e, t);
    }
    return {
      closePopup: i,
      copyToClipboard: u,
      editSite: e,
      fillUsernamePass: t,
      copyUrl: o,
      copyUserName: r,
      copyPassword: a,
      copyProp: c,
      copyTotp: s,
      editFormFill: l,
      fillForm: p,
      getGeneratePrefs: f,
      writeAllPrefs: d,
      fillGeneratedPassword: g,
      searchVault: m,
      getInitialData: h,
      sendLPImprove: w,
      getPasswordHardeningFeatureSwitch: n
    };
  })(),
  InfieldView =
    (!(function (r) {
      var e = function (e, t, n) {
        var i = this;
        (i._onResizeCallback = n),
          e &&
            (e instanceof jQuery ? (i._triggerElement = e) : (i._triggerElement = r("#" + e)),
            t
              ? (i._triggerElement.click(function (e) {
                  i.show(), i._setPosition(e);
                }),
                i._triggerElement.keypress(function (e) {
                  i.show(), r(i._menuElement[0]).children().children()[0].focus(), i._setPosition(e);
                }))
              : (i._triggerElement.children().click(function (e) {
                  i.show();
                }),
                i._triggerElement.children().keypress(function (e) {
                  i.show(), r(i._menuElement[0]).children().children()[0].focus();
                })));
      };
      (e.prototype._setPosition = function (e) {
        var e = r(e.currentTarget).offset();
        (e.top += 20), (e.left += 20), this._menuElement.offset(e);
      }),
        (e.prototype.show = function () {
          r(".dropdown").hide(), r(".menuTriggered").removeClass("menuTriggered");
          var e = this,
            t;
          e._triggerElement.closest(".tile").addClass("menuTriggered"),
            e._triggerElement.addClass("menuTriggered"),
            this._menuElement &&
              this._menuElement.show(0, function () {
                e._onResizeCallback && e._onResizeCallback(e._menuElement.height(), 90);
              });
        }),
        (e.prototype.hide = function (e) {
          var t = this,
            n;
          t._triggerElement.closest(".tile").removeClass("menuTriggered"),
            t._triggerElement.removeClass("menuTriggered"),
            t._triggerElement.blur(),
            this._menuElement && (this._menuElement.hide(e), t._onResizeCallback(), t._triggerElement.trigger("reset"));
        }),
        (e.prototype.createMenu = function (e, t, n) {
          var i = this;
          return (
            (i._menuElement = r("<div></div>")
              .attr("id", e + "Menu")
              .addClass("dropdown")
              .addClass(t)
              .hide()
              .hover(
                function () {
                  var e = i._triggerElement.closest(".tile");
                  InfieldMenuTimer.clearTimer();
                },
                function () {
                  InfieldMenuTimer.startTimer();
                }
              )
              .append(i._createMenuItems(n))),
            i._menuElement
          );
        }),
        (e.prototype._createMenuItems = function (e) {
          for (var t = this, n = ((t._menuItems = e), r("<ul></ul>").addClass("menuList")), i = 0; i < t._menuItems.length; i++) {
            var o = r("<li></li>")
              .attr("data-viewId", t._menuItems[i].id)
              .attr("tabindex", "1")
              .click(function (e) {
                t._triggerElement.trigger("reset", ["action"]), t.hide(), t.select(e.currentTarget.getAttribute("data-viewId"), !0);
              })
              .keypress(function (e) {
                t._triggerElement.trigger("reset", ["action"]), t.hide(), t.select(e.currentTarget.getAttribute("data-viewId"), !0);
              })
              .append(r("<p></p>").text(t._menuItems[i].text));
            n.append(o);
          }
          return n;
        }),
        (e.prototype._findMenu = function (t) {
          var e = r.grep(this._menuItems, function (e) {
            return e.id === t;
          });
          return e && 0 < e.length ? e[0] : null;
        }),
        (e.prototype.select = function (e, t) {
          var e = this._findMenu(e);
          e && this._triggerElement && this._triggerElement.find("p").text(e.selectedText), !0 === t && e && e.action && e.action();
        }),
        (window.InfieldMenu = e);
    })(jQuery),
    (function (t) {
      var n = [];
      function e(e) {
        Array.isArray(e) && 0 < e.length && ((n = e), o());
      }
      function i(e) {
        -1 != n.indexOf(e) && ("generatePassView" !== e && "paywallView" !== e ? (o(), t(".views")) : (o(), t("#" + e))).show();
      }
      function o() {
        t(".views").hide(), t("#generatePassView").hide(), t("#paywallView").hide();
      }
      return { init: e, show: i };
    })(jQuery)),
  InfieldGeneratePassword = (function (r) {
    function e(t, e) {
      r("#moreOptions").click(function () {
        d(), e && e();
      }),
        r(".iconMoreInfo").hover(
          function () {
            r(this).children().fadeIn(200);
          },
          function () {
            r(this).children().fadeOut(100);
          }
        ),
        r("#showHistory").click(function () {
          u(), e && e();
        }),
        r("#lengthInput").on("input", function () {
          InfieldSearch.debounce(o(r("#lengthInput").val()), debounceWait);
        }),
        r("#length").on("input", function () {
          InfieldSearch.debounce(o(r("#length").val()), debounceWait);
        }),
        g_isedge &&
          r("#length").on("mouseup", function () {
            i();
          }),
        r(".pwgen").change(i),
        r("#generateBtn").click(i),
        r("#pronounceable").click(function () {
          r("#pronounceable").prop("checked")
            ? (r("#digits").prop("checked", !1),
              r("#digits").prop("disabled", !0),
              r("#special").prop("checked", !1),
              r("#special").prop("disabled", !0),
              r("#ambig").prop("checked", !1),
              r("#all").prop("checked", !1),
              r("#upper").prop("checked", !0),
              r("#lower").prop("checked", !0))
            : (r("#digits").prop("checked", !0),
              r("#digits").prop("disabled", !1),
              r("#special").prop("checked", !0),
              r("#special").prop("disabled", !1));
        }),
        r("#ambig").click(function () {
          r("#ambig").prop("checked") &&
            (r("#pronounceable").prop("checked", !1),
            r("#all").prop("checked", !1),
            r("#digits").prop("disabled", !1),
            r("#special").prop("disabled", !1));
        }),
        r("#all").click(function () {
          r("#all").prop("checked") &&
            (r("#pronounceable").prop("checked", !1),
            r("#ambig").prop("checked", !1),
            r("#digits").prop("checked", !0),
            r("#special").prop("checked", !0),
            r("#upper").prop("checked", !0),
            r("#lower").prop("checked", !0),
            r("#digits").prop("disabled", !1),
            r("#special").prop("disabled", !1));
        }),
        r("#password")
          .on("copy", function () {
            bg.LPTabState.setCopiedGeneratedPassword(this.value);
          })
          .LP_addGeneratePasswordMeter(!0, bg.get("g_password_strength_hardening_enabled")),
        r("#btnCopy").click(function () {
          var e = r("#password").val();
          t.copyToClipboard(e, "generatepassword"),
            f(),
            bg.LPTabState.setCopiedGeneratedPassword(e),
            r(this)
              .children()
              .fadeIn(1, function () {
                r(this).fadeOut(1200);
              });
        }),
        r("#clearHistory").bind("click", function () {
          g();
        });
      var n = function () {
        var e = r("#password").val();
        t.fillGeneratedPassword(e, {
          pronounceable: r("#pronounceable").prop("checked"),
          length: r("#password").val().length,
          expand: advancedOptionsViewed,
          uppercase: r("#upper").prop("checked"),
          lowercase: r("#lower").prop("checked"),
          numeric: r("#digits").prop("checked"),
          special: r("#special").prop("checked"),
          avoidAmbiguous: r("#ambig").prop("checked"),
          passwordType: c(),
          source: "formv2",
          variation: "new",
          generatedPasswordCount: r("#generatedPasswordCount").val()
        }),
          t.writeAllPrefs(
            JSON.stringify({
              generate_allcombos: r("#all").prop("checked") ? 1 : 0,
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
      r("#fillPasswordBtn").click(n),
        r("#generateAndFillBtn").click(n),
        r("#generateAndFillBtn").keypress(n),
        h(),
        r("#password").on("change paste keyup", function (e) {
          h();
        }),
        r("#advancedView").hide(),
        r("#generateBtnContainer").hide(),
        r("#history").hide(),
        r("#clearHistory").hide();
    }
    function i() {
      m(),
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
        r("#all").prop("checked"),
        r("#pronounceable").prop("checked")
      );
      r("#password").val(e).change();
    }
    function t() {
      var n = bg.get("g_prefoverrides").sitepwlen;
      n &&
        ((n = JSON.parse(n)),
        bg.get_selected_tab_data_no_extension(null, function (e) {
          var e = bg.lp_gettld_url(e.url),
            e,
            t;
          n[e] && ((e = n[e]), (t = Math.max(r("#length").val(), e)), r("#length").attr({ min: e }), o(t));
        }));
    }
    function n(e) {
      t();
      var e = JSON.parse(e.prefstr);
      r("#length").val(parseInt(e.generate_length)),
        r("#upper").prop("checked", !!parseInt(e.generate_upper)),
        r("#lower").prop("checked", !!parseInt(e.generate_lower)),
        r("#digits").prop("checked", !!parseInt(e.generate_digits)),
        r("#special").prop("checked", !!parseInt(e.generate_special)),
        r("#ambig").prop("checked", !!parseInt(e.generate_ambig)),
        r("#all").prop("checked", !!parseInt(e.generate_allcombos)),
        r("#advancedView").hide(),
        r("#generateAndFillView").show(),
        parseInt(e.generate_pronounceable) ? a() : r("#pronounceable").prop("pronounceable", !1),
        r("#ambig").prop("checked") || r("#pronounceable").prop("checked") || s(),
        parseInt(parseInt(e.generate_length)) ? o(parseInt(e.generate_length)) : o(10),
        bg.GenPassHistory.getWithReadableDate(f.bind(this)),
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
              r("#all").prop("checked"),
              r("#pronounceable").prop("checked")
            )
          )
          .change();
    }
    function o(e) {
      99 < e && (e = 99), r("#length").val(e);
      var t = r("#length"),
        n = t.val(),
        i = t.attr("min"),
        o,
        n = ((n - i) / (t.attr("max") - i)) * 100;
      r("#sliderFill").width(n + "%"), r("#lengthInput").val(e);
    }
    function a() {
      r("#pronounceable").prop("checked") || r("#pronounceable").prop("checked", !0),
        r("#digits").prop("checked", !1),
        r("#digits").prop("disabled", !0),
        r("#special").prop("checked", !1),
        r("#special").prop("disabled", !0),
        r("#upper").prop("checked", !0),
        r("#lower").prop("checked", !0);
    }
    function s() {
      r("#all").prop("checked") || r("#all").prop("checked", !0),
        r("#digits").prop("disabled", !1),
        r("#special").prop("disabled", !1),
        r("#upper").prop("checked", !0),
        r("#lower").prop("checked", !0);
    }
    function c() {
      return r("#ambig").prop("checked") ? "ambig" : r("#pronounceable").prop("checked") ? "pronounceable" : "all";
    }
    function d() {
      (advancedOptionsViewed = !0),
        r("#advancedView").toggle(),
        r("#generateBtnContainer").toggle(),
        r("#moreOptions").html(
          r("#moreOptions").text() == Strings.translateString("Show Options")
            ? Strings.translateString("Hide Options")
            : Strings.translateString("Show Options")
        );
    }
    function l() {
      r("#moreOptions").show(),
        r("#fillPasswordBtn").show(),
        r("#generateBtnContainer").hide(),
        setTimeout(function () {
          r("#fillPasswordBtn").focus();
        }, 100);
    }
    function p() {
      r("#moreOptions").hide(), r("#fillPasswordBtn").hide(), r("#generateBtnContainer").hide();
    }
    function u() {
      "Show History" == r("#showHistory").text()
        ? (r("#showHistory").html("Hide History"),
          r("#advanced-features").hide(),
          r("#history").show(),
          r("#clearHistory").show(),
          InfieldCommands.sendLPImprove("historyviewed", { source: "formv2" }))
        : (r("#showHistory").html("Show History"), r("#advanced-features").show(), r("#history").hide(), r("#clearHistory").hide());
    }
    function f(e) {
      var t = r("#historyTable"),
        n = r("#historyBody"),
        i = r("#historyEmptyState");
      e && 0 !== e.length
        ? (n.empty(),
          e.forEach(function (e) {
            var t = LPTools.createElement("tr");
            t.appendChild(LPTools.createElement("td", "", e.password)),
              t.appendChild(LPTools.createElement("td", "", Strings.translateString(e.date))),
              n.append(t);
          }),
          t.show(),
          i.hide())
        : (t.hide(), i.show());
    }
    function g() {
      bg.GenPassHistory.clear(),
        r("#historyBody").empty(),
        r("#historyTable").hide(),
        r("#historyEmptyState").show(),
        InfieldCommands.sendLPImprove("historycleared", { source: "formv2" });
    }
    function m() {
      var e = r("#password").val();
      e && 0 < e.length && (bg.GenPassHistory.add(e), bg.GenPassHistory.getWithReadableDate(f.bind(this)));
    }
    function h() {
      0 < r("#password").val().length ? r("#fillPasswordBtn").removeAttr("disabled") : r("#fillPasswordBtn").attr("disabled", "disabled");
    }
    return { init: e, setup: n, show: l, hide: p };
  })(jQuery),
  InfieldTiles = (function (b, v, I, C) {
    var k = "hovered",
      P = C.translateString("Copy..."),
      _ = C.translateString("Edit"),
      S = C.translateString("Fill"),
      T = "<div></div>",
      x;
    function e(e, i, t, o, n, r) {
      x = n;
      var a = [],
        s,
        c;
      return (
        b("#" + e)
          .empty()
          .append(b('<p class="italic"></p>').text(r)),
        t &&
          ((s = []),
          (c = b.map(t, function (e, t) {
            return (
              e && e.language && 1 < e.language.length && -1 === s.indexOf(e.language.substr(0, 2)) && s.push(e.language.substr(0, 2)), e
            );
          })),
          bg.get("LPContentScriptFeatures").web_client_fill ||
            c.sort(function (e, t) {
              var n, i;
              return void 0 === e.name
                ? (void 0 === (n = e.noteType) && (n = "undefined"),
                  void 0 === (i = e.decprofilename) && (i = "undefined"),
                  L("BAD_NAME FOUND - ABORT TILE SORT - userId:" + (e.aid || e.ffid) + " noteType:" + n + " decprofname:" + i),
                  0)
                : e.name.localeCompare(t.name);
            }),
          b.each(c, function (e, t) {
            var n = !1,
              e =
                (e + 1 === c.length && (n = !0),
                l(i, {
                  id: t.aid || t.ffid,
                  name: "sites" === i ? t.name : t.decprofilename,
                  description: "sites" === i ? t.unencryptedUsername || t.useusername : null !== t.description ? t.description : null,
                  icons: d(o, i, t),
                  noteType: t.notetype,
                  moreText: "sites" === i ? C.translateString("More") : _,
                  language: 1 < s.length ? t.language.substr(0, 2) : null,
                  moreHandler:
                    "sites" === i
                      ? null
                      : function () {
                          v.editFormFill(t.aid || t.ffid);
                        },
                  clickHandler:
                    "sites" === i
                      ? function () {
                          csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_FILLED), v.fillUsernamePass(t.aid);
                        }
                      : function () {
                          v.fillForm(t.aid || t.ffid);
                        },
                  lastTile: n
                }));
            e && a.push(e);
          }),
          0 < a.length
            ? b("#" + e)
                .empty()
                .append(a)
            : "sites" == i &&
              b("#" + e)
                .empty()
                .append(b('<p class="italic"></p>').text(r))),
        a.length
      );
    }
    function d(e, t, n) {
      var i = "",
        o = "",
        r;
      if ("formfills" === t)
        if (0 == n.profiletype) i = InfieldIcons.profile;
        else
          switch (n.notetype) {
            case "Credit Card":
              i = a(n.ccType);
              break;
            case "Bank Account":
              i = InfieldIcons.ba;
              break;
            case "Social Security":
              i = InfieldIcons.ssn;
              break;
            case "Address":
              i = InfieldIcons.address;
              break;
            default:
              i = n.notetype.includes("Custom_") ? InfieldIcons.custom : InfieldIcons.pw;
          }
      else (o = "icon-site"), (i = e && n.aid && e[n.aid] ? e[n.aid] : InfieldIcons.pw);
      return {
        normalEl: (r =
          (0 != n.profiletype && "formfills" === t) || i == InfieldIcons.pw
            ? b("<span/>")
                .addClass("omarImgIcon fa fa-fw fa-2x " + i)
                .attr("aria-hidden", "true")
            : b("<img/>")
                .attr("src", i)
                .addClass("icon-default omarImgIcon " + o))
      };
    }
    function a(e) {
      if (!e || !e.length) return InfieldIcons.ccDefault;
      switch (e) {
        case "AMEX":
          return InfieldIcons.ccAmex;
        case "MC":
          return InfieldIcons.ccMastercard;
        case "DISC":
          return InfieldIcons.ccDiscover;
        case "VISA":
          return InfieldIcons.ccVisa;
        case "DINERS":
          return InfieldIcons.ccDiners;
        case "JCB":
          return InfieldIcons.ccJcb;
        default:
          return InfieldIcons.ccDefault;
      }
    }
    function F(e) {
      return b(T).addClass("col-2 cardIcon no-left-gutter no-right-gutter").append(b(T).addClass("icon").append(e));
    }
    function l(t, n) {
      if (!n) return null;
      var i = null,
        o = null,
        r = null,
        a = b(T).addClass("col-10 cardBody").attr("tabindex", "1"),
        s = b(T).addClass("cardInside"),
        e = b(T).addClass("fa-lg fa-stack"),
        c = b("<i></i>").addClass("fa fa-clone").attr("aria-hidden", "true"),
        d = b(T).addClass("fa fa-caret-down fa-stack-1x fontAwesomeIcon").attr("aria-hidden", "true"),
        l = b(T).addClass("fa fa-circle fa-stack-1x circle"),
        p = (l.append(d), e.append(c), e.append(l), b("<i></i>").addClass("fa fa-pencil fa-lg").attr("aria-hidden", "true")),
        u = b(T)
          .attr("id", n.id + "copyBtn")
          .attr("tabindex", "1")
          .addClass("copyAction")
          .append(e),
        d = b(T)
          .attr("id", n.id + "editBtn")
          .attr("tabindex", "1")
          .addClass("editAction")
          .append(p),
        r = b(T).addClass("cardMainAction").text(S),
        f =
          (a.hover(
            function () {
              r.addClass(k), s.addClass(k);
            },
            function () {
              r.removeClass(k), s.removeClass(k);
            }
          ),
          a.keypress(function (e) {
            (32 !== e.keyCode && 32 !== e.which) || a.click();
          }),
          s.append(
            b(T)
              .addClass("cardPrimary")
              .text(n.name + (n.language ? " (" + n.language + ")" : ""))
          ),
          s.append(
            b(T)
              .addClass("cardSecondary")
              .text(n.description || String.fromCharCode(160))
          ),
          a.append(r),
          a.append(s),
          b(T).addClass("cardActions no-right-gutter no-left-gutter").append(u, d)),
        i = new I(u, !0, x),
        g =
          (f.hover(
            function () {
              InfieldMenuTimer.clearTimer();
            },
            function () {
              InfieldMenuTimer.startTimer();
            }
          ),
          []),
        m =
          (bg.InfieldCommands.canCopy(function (e) {
            e
              ? "sites" === t
                ? (g.push({
                    id: "copyPassword",
                    text: C.translateString("Copy password"),
                    action: function () {
                      v.copyPassword(n.id);
                    }
                  }),
                  g.push({
                    id: "copyUsername",
                    text: C.translateString("Copy username"),
                    action: function () {
                      v.copyUserName(n.id);
                    }
                  }),
                  g.push({
                    id: "copyURL",
                    text: C.translateString("Copy URL"),
                    action: function () {
                      v.copyUrl(n.id);
                    }
                  }),
                  ("1" !== bg.get("g_iscompanyadmin") && "1" !== bg.get("g_enterpriseuser")) ||
                    g.push({
                      id: "copyTotp",
                      text: C.translateString("Copy TOTP"),
                      action: function () {
                        v.copyTotp(n.id);
                      }
                    }))
                : "Credit Card" === n.noteType
                ? (g.push({
                    id: "copyCardNum",
                    text: C.translateString("Copy card number"),
                    action: function () {
                      v.copyProp(n.id, "Number");
                    }
                  }),
                  g.push({
                    id: "copySecurityCode",
                    text: C.translateString("Copy security code"),
                    action: function () {
                      v.copyProp(n.id, "Security Code");
                    }
                  }))
                : "Bank Account" === n.noteType
                ? (g.push({
                    id: "copyAccountNum",
                    text: C.translateString("Copy account number"),
                    action: function () {
                      v.copyProp(n.id, "Account Number");
                    }
                  }),
                  g.push({
                    id: "copyRoutingNum",
                    text: C.translateString("Copy routing number"),
                    action: function () {
                      v.copyProp(n.id, "Routing Number");
                    }
                  }))
                : "Social Security" === n.noteType
                ? g.push({
                    id: "copySSN",
                    text: C.translateString("Copy SSN"),
                    action: function () {
                      v.copyProp(n.id, "Number");
                    }
                  })
                : "Address" === n.noteType &&
                  (g.push({
                    id: "copyFirstName",
                    text: C.translateString("Copy first name"),
                    action: function () {
                      v.copyProp(n.id, "First Name");
                    }
                  }),
                  g.push({
                    id: "copyLastName",
                    text: C.translateString("Copy last name"),
                    action: function () {
                      v.copyProp(n.id, "Last Name");
                    }
                  }),
                  g.push({
                    id: "copyAddressFirst",
                    text: C.translateString("Copy address 1"),
                    action: function () {
                      v.copyProp(n.id, "Address 1");
                    }
                  }),
                  g.push({
                    id: "copyCity",
                    text: C.translateString("Copy city/town"),
                    action: function () {
                      v.copyProp(n.id, "City / Town");
                    }
                  }),
                  g.push({
                    id: "copyZip",
                    text: C.translateString("Copy zip/postal code"),
                    action: function () {
                      v.copyProp(n.id, "Zip / Postal Code");
                    }
                  }),
                  g.push({
                    id: "copyEmail",
                    text: C.translateString("Copy email address"),
                    action: function () {
                      v.copyProp(n.id, "Email Address");
                    }
                  }),
                  g.push({
                    id: "copyPhone",
                    text: C.translateString("Copy phone number"),
                    action: function () {
                      v.copyProp(n.id, "Phone", "num");
                    }
                  }))
              : b("#btnCopy").hide(),
              g.length
                ? ((o = i.createMenu("copy", "tileDropdown", g))
                    .hover(
                      function () {
                        InfieldMenuTimer.clearTimer();
                      },
                      function () {
                        InfieldMenuTimer.startTimer();
                      }
                    )
                    .focusin(function () {
                      InfieldMenuTimer.clearTimer();
                    })
                    .focusout(function () {
                      InfieldMenuTimer.startTimer();
                    }),
                  b("#menuContainer").append(o),
                  u.click(function (e) {
                    e.stopPropagation(), i.show();
                  }),
                  u.bind("reset", function (e, t) {
                    y.removeClass("triggered"),
                      (!t && a.hasClass(k)) || (c.removeClass(k), l.removeClass(k)),
                      r && (r.text(S), s.hasClass(k) || r.removeClass(k));
                  }),
                  u.hover(
                    function () {
                      (o && o.is(":visible")) || (c.addClass(k), l.addClass(k), r && (r.text(P), r.addClass(k)));
                    },
                    function () {
                      (o && o.is(":visible")) ||
                        u.hasClass("menuTriggered") ||
                        (c.removeClass(k), l.removeClass(k), r && (r.text(S), a.hasClass(k) || r.removeClass(k)));
                    }
                  ))
                : u.hide();
          }),
          function (e) {
            e.stopPropagation(), "sites" === t ? v.editSite(n.id) : "formfills" === t && v.editFormFill(n.id);
          });
      d.click(m).keypress(function (e) {
        (32 !== e.keyCode && 32 !== e.which) || m(e);
      }),
        d.hover(
          function (e) {
            (o && o.is(":visible")) || (p.addClass(k), r && (r.text(_), r.addClass(k)));
          },
          function () {
            (o && o.is(":visible")) || (p.removeClass(k), r && (r.text(S), r.removeClass(k)));
          }
        );
      var h,
        e =
          (new MutationObserver(function (e) {
            e.forEach(function (e) {
              var t;
              "class" != e.attributeName ||
                e.target.classList.contains("menuTriggered") ||
                (e.target.children[0].firstChild.classList.contains("hovered") && (c.removeClass(k), l.removeClass(k)));
            });
          }).observe(u[0], { attributes: !0, childList: !0 }),
          function () {
            f.addClass(k), a.addClass(k);
          }),
        d = function () {
          u.hasClass("menuTriggered") ||
            (y.removeClass("triggered"), f.removeClass(k), a.removeClass(k), s.removeClass(k), r && r.removeClass(k));
        },
        w = F([n.icons.normalEl]),
        y = b(T)
          .addClass("cardContainer col-12")
          .attr("id", n.id)
          .append(b(T).addClass("omarCard").append(w, a, f))
          .hover(e, d)
          .focus(e)
          .blur(d);
      return (
        y.click(n.clickHandler),
        n.lastTile && y.addClass("lastTile"),
        b(".copyAction", ".editAction")
          .focus(function () {
            y.addClass("triggered");
          })
          .blur(function () {
            y.removeClass("triggered");
          })
          .click(function () {
            y.addClass("menuTriggered"), y.removeClass("triggered");
          }),
        y
      );
    }
    return b("#menuContainer").empty(), { setup: e };
  })(jQuery, InfieldCommands, InfieldMenu, Strings),
  InfieldSearch = (function (n) {
    var i,
      o,
      r,
      a,
      s,
      e = 250;
    function t(t) {
      var e;
      (o = n("#searchContainer")),
        (r = n("#inlineSearch")),
        (a = n("#searchCloseBtn")),
        (s = n("#searchBtn")),
        (i = n("#headerMain")),
        p(),
        n("#searchBtn")
          .click(function () {
            n(this).hasClass("search") && d();
          })
          .keypress(function () {
            n(this).hasClass("search") && d();
          }),
        n("#searchCloseBtn")
          .click(function () {
            l(), t("");
          })
          .keypress(function () {
            l(), t("");
          }),
        t &&
          ((e = c(function (e) {
            t(n(e.currentTarget).val());
          }, debounceWait)),
          r.keyup(e)),
        n("#inlineSearch").focus(function () {
          n(".searchBar").addClass("hoverOver").fadeIn(100);
        }),
        n("#inlineSearch").focusout(function () {
          n(".searchBar").removeClass("hoverOver");
        });
    }
    function c(n, i) {
      var o;
      return function () {
        var e = this,
          t = arguments;
        clearTimeout(o),
          (o = setTimeout(function () {
            (o = null), n.apply(e, t);
          }, i));
      };
    }
    function d() {
      o.show(),
        i.hide(),
        o.animate({}, e, function () {
          a.show(), r.fadeIn().focus();
        }),
        s.addClass("searchBtnActive");
    }
    function l() {
      o.hide(),
        i.show(),
        o.animate({}, e, function () {
          a.hide(), r.fadeOut();
        }),
        r.val(""),
        s.removeClass("searchBtnActive");
    }
    function p() {
      o.hide(), s.removeClass("searchBtnActive");
    }
    function u() {
      o.show();
    }
    function f() {
      r.hide(), a.hide(), o.hide();
    }
    function g(e) {
      (e && !0 === e ? u : f)();
    }
    return { init: t, debounce: c, showIcon: u, hideIcon: f, display: g };
  })(jQuery),
  lpInfield = (function (o, r, e, a, s, c, d, t, n) {
    var l,
      p,
      u = n.translateString("No passwords found for this site."),
      f = n.translateString("No passwords found for this site."),
      g = n.translateString("Nothing in your vault to fill on this site."),
      m = n.translateString("Nothing in your vault to fill on this site."),
      h = 10,
      w = 360;
    function y() {
      var e = Date.now();
      document.addEventListener("DOMContentLoaded", function () {
        C(function () {
          var e;
          n.translate(document.body),
            g_language && o("html").attr("lang", g_language),
            b(),
            I(),
            a.init(["sitesView", "formFillView", "generatePassView", "paywallView"]),
            c.init(_),
            d.init(r, T),
            new MutationObserver(function () {
              T();
            }).observe(o(".infield-dialog")[0], { subtree: !0, childList: !0 }),
            bg.get("g_is_restricted") ? L() : r.getInitialData(B);
        });
      });
    }
    function b() {
      (p = new t({ $parentEl: o(".infield-dialog") })), v({ position: w });
    }
    function v(e) {
      p && (e && e.position && o.isNumeric(e.position) && e.position > h && e.position < w ? p.show("top", e.position) : p.show(!1, !1));
    }
    function I() {
      o("#btnClose").click(function () {
        r.closePopup("close");
      }),
        o("#btnClose").keypress(function () {
          r.closePopup("close");
        }),
        o(".infield-dialog").keydown(function (e) {
          var t;
          27 === e.keyCode || 27 === e.which
            ? r.closePopup("close")
            : (9 !== e.keyCode && 9 !== e.which) ||
              (k() && !e.shiftKey
                ? (o("#searchBtn, #searchBtn2").focus(), e.preventDefault())
                : P() &&
                  e.shiftKey &&
                  ((t = o(".lastTile").length ? "#fillPasswordBtn, .lastTile .cardBody" : "#fillPasswordBtn, #searchCloseBtn"),
                  o(t).focus(),
                  e.preventDefault()));
        });
    }
    function C(i) {
      var t = null,
        e = (document.body.style.setProperty("display", "none", "important"), document.createElement("iframe"));
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
              (window.bg = e), t && t();
            }
          }),
            e.contentWindow.Topics.get(e.contentWindow.Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function (e, n) {
              (t = function () {
                var t;
                bg.get("LPContentScriptFeatures").web_client_fill
                  ? reduxInfield.createStore(function (n) {
                      (window.csTop = {
                        Topics: { publish: function () {} },
                        LPInfieldFrame: {
                          resizeFrame: function (e, t) {
                            n.dispatch(reduxInfield.fillActions.resizeLegacyInfieldContainer(t, e));
                          },
                          positionFrame: function () {},
                          show: function () {},
                          close: function () {
                            n.dispatch(reduxInfield.fillActions.closeLegacyInfield());
                          }
                        }
                      }),
                        (reduxStore = n),
                        document.body.style.removeProperty("display"),
                        i();
                    })
                  : ((t = parseInt(e.topFrameID)),
                    (window.csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, {
                      direct: !1,
                      context: "infieldPopup",
                      requestFunction: function (e) {
                        n.sendRequest({ type: "contentScriptRequest", data: e, frameID: t });
                      }
                    })),
                    window.csTop.LPFrame.initializeRequestFramework(LPTools.getURLParams().dialogID, function (e) {
                      e && (document.body.style.removeProperty("display"), i) && i();
                    }));
              }),
                "undefined" != typeof bg && t();
            });
        }),
        document.body.appendChild(e);
    }
    function k() {
      return (
        (o(document.activeElement)[0].classList.contains("editAction") &&
          o(document.activeElement).closest(".cardContainer").length &&
          o(document.activeElement).closest(".cardContainer")[0].classList.contains("lastTile")) ||
        "fillPasswordBtn" === document.activeElement.id
      );
    }
    function P() {
      return "searchBtn" === document.activeElement.id || "searchBtn2" === document.activeElement.id;
    }
    function _(e) {
      r.searchVault(e, l.type, S);
    }
    function S(e) {
      var t = l.type,
        e;
      e &&
        (e = JSON.parse(e)) &&
        (s.setup("sitesView", "sites", e.sites, e.bigicons, T, f), s.setup("formFillView", "formfills", e.formfills, null, T, m));
    }
    function T(e, t) {
      var n = o(".infield-dialog").outerHeight() + 20,
        i = o(".infield-dialog").outerWidth() + 10;
      e && o.isNumeric(e) && (n += e), t && o.isNumeric(t) && (i += t), csTop.LPInfieldFrame.resizeFrame(n, i);
    }
    function x(e) {
      o("#fillSelector").show();
      var t = JSON.parse(e.fillData.sites),
        n = e.fillData.bigIcons ? JSON.parse(e.fillData.bigIcons) : null,
        n = (s.setup("sitesView", "sites", t, n, T, u), e.fillData.formFills ? JSON.parse(e.fillData.formFills) : {});
      return (
        s.setup("formFillView", "formfills", n, null, T, g), a.show("formFillView"), d.hide(), Object.keys(t).length + Object.keys(n).length
      );
    }
    function F() {
      o("#fillSelector").hide(), a.show("generatePassView"), r.getGeneratePrefs(d.setup), d.show();
    }
    function E() {
      csTop.LPInfieldFrame.positionFrame(function (e) {
        csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_OPENED, e);
      }),
        csTop.LPInfieldFrame.show(),
        o(".infield-dialog").show();
    }
    function L() {
      o("#fillSelector").hide(), o(".header").hide(), a.show("paywallView"), d.hide();
      var e = Number(bg.get("g_primary_device_switches_left") || 0),
        t = bg.get("g_infield_multidevice_paywall_tracking");
      o("#gotItButton").click(function () {
        r.closePopup("close"),
          t &&
            bg.sendLpImprove("mdpw_paywall_clicked", {
              Action: "Dismiss",
              CurrentDevice: "Desktop",
              Source: "Infield Dropdown",
              SwitchesLeft: e
            });
      }),
        o("#goPremiumButton").click(function () {
          reduxApp && LPProxy.isExpiredFamiliesPurchaseFlowEnabled() && LPProxy.isExpiredFamilyUser()
            ? bg.openvault(!1, "showfamilyexpiredpurchase")
            : (window.open("https://www.lastpass.com/premium/payment", "_blank"),
              r.closePopup("close"),
              t &&
                bg.sendLpImprove("mdpw_paywall_clicked", {
                  Action: "Go Premium",
                  CurrentDevice: "Desktop",
                  Source: "Infield Dropdown",
                  SwitchesLeft: e
                }));
        }),
        o("#paywallFooter button").hide(),
        0 < e
          ? (o("#gotItButton").show(),
            o("#paywallContent").html(
              n.translateString("%sClick the LastPass%s icon on the browser toolbar to activate your computer.", "<b>", "</b>")
            ))
          : (o("#goPremiumButton").show(),
            o("#paywallContent").html(
              n.translateString("%sGo Premium%s for unlimited access on both mobile devices and computers.", "<b>", "</b>")
            ),
            reduxApp &&
              LPProxy.isExpiredFamiliesPurchaseFlowEnabled() &&
              LPProxy.isExpiredFamilyUser() &&
              (o("#paywallContent").html(
                n.translateString(
                  "%sUpgrade to Families or Premium%s for unlimited access on all mobile devices and computers.",
                  "<b>",
                  "</b>"
                )
              ),
              o("#goPremiumButton").html(n.translateString("Upgrade Now")))),
        E(),
        T(0, 0),
        t && bg.sendLpImprove("mdpw_user_viewed", { CurrentDevice: "Desktop", Source: "Infield Dropdown", SwitchesLeft: e });
    }
    function B(t) {
      if (t) {
        if ((l = t).type)
          switch (t.type) {
            case "generate":
              F(), c.display(!1);
              break;
            case "formfills":
              o(".lblSites").insertAfter("#formFillView"), o("#sitesView").insertAfter(".lblSites");
            default:
              var e = x(t);
          }
        var n;
        "generate" != t.type && t.condensedDropdown && !0 === t.condensedDropdown
          ? ((n = {
              init: function () {
                o(".viewLabel").hide(), o("#fillSelector").show();
                var e = n.getData();
                n.createDropdown(e), n.selectDropdownOption();
              },
              getData: function () {
                var e = 0,
                  t = [];
                return (
                  o(".views")
                    .children("div")
                    .each(function () {
                      var e = { id: null, text: null };
                      (e.id = o(this).attr("id")),
                        "sitesView" === e.id && ((e.text = "Log in as"), t.push(e)),
                        "formFillView" === e.id && ((e.text = "Fill form with"), t.push(e));
                    }),
                  t
                );
              },
              createDropdown: function (e) {
                for (
                  o("#fillSelector").html(""),
                    o("<div/>", { id: "dropdownButton", class: "dropdownButton" }).appendTo("#fillSelector"),
                    o("<span/>", { id: "dropdownButtonText", class: "dropdownButtonText", text: "" }).appendTo("#dropdownButton"),
                    o("<i/>", { id: "dropdownButtonIcon", class: "fa fa-caret-down dropdownButtonIcon", ariaHidden: !0 }).appendTo(
                      "#dropdownButton"
                    ),
                    o("<ul/>", { id: "dropdown", class: "dropdown" }).appendTo("#fillSelector"),
                    i = 0;
                  i < e.length;
                  i++
                )
                  o("<li/>", { id: "option" + i, class: "option" + i, "data-viewed": e[i].id }).appendTo("#dropdown"),
                    o("<i/>", { class: "fa fa-check", "aria-hidden": !0 }).appendTo("#option" + i),
                    o("<span />", { text: e[i].text }).appendTo("#option" + i);
                o("#dropdown").hover(
                  function () {
                    InfieldMenuTimer.clearTimer();
                  },
                  function () {
                    InfieldMenuTimer.startTimer();
                  }
                );
              },
              selectDropdownOption: function (e) {
                void 0 === e
                  ? (e = { id: "option0", text: o("#option0 > span").text(), action: o("#option0").attr("data-viewed") })
                  : InfieldCommands.sendLPImprove("infield_dropdown_toggled", { toggle: e.action, domain: t.url }),
                  o("#dropdownButtonText").text(e.text),
                  o("#views").children().hide(),
                  o('div[id*="' + e.action + '"]').show(),
                  o("#dropdown > li > i").hide(),
                  o("#dropdown > #" + e.id + " > i").show(),
                  o("#dropdown").hide();
              }
            }).init(),
            o("#dropdownButton").click(function () {
              o("#dropdown").show(), T(o("#dropdown").height());
            }),
            o("#dropdown > li").click(function () {
              var e = { id: o(this).attr("id"), text: o(this).text(), action: o(this).attr("data-viewed") };
              n.selectDropdownOption(e);
            }))
          : t.noHeaders && !0 === t.noHeaders && (o(".lblSites").hide(), o(".lblForms").hide()),
          o("#searchBtn")
            .click(function () {
              x(t), T();
            })
            .keypress(function () {
              x(t), T();
            }),
          o("#generatePassInfieldIconInfield")
            .click(function () {
              F();
            })
            .keypress(function () {
              F();
            }),
          E();
      } else r.closePopup("close");
    }
    return { init: y, setArrowPosition: v };
  })(jQuery, InfieldCommands, InfieldMenu, InfieldView, InfieldTiles, InfieldSearch, InfieldGeneratePassword, lpArrow, Strings);
lpInfield && lpInfield.init();
