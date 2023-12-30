(() => {
  "use strict";
  var e,
    t = {
      133: () => {},
      982: () => {},
      630: (e, t, o) => {
        var i = o(351),
          n = o(856),
          a = o.n(n),
          l = o(266),
          r = o(577),
          s = o(893),
          c = o(755),
          p = o(915),
          u = o(812);
        c(function () {
          let e,
            t,
            o,
            n = null,
            d = c("#meeting_pwd"),
            m = d.parents(".requirepwd"),
            h = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${p.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`,
            _ = !1,
            g = null,
            f = -1,
            v = c(".control-row.authentication"),
            b = c(".control-row.watermark"),
            w = c(".control-row.audiomark"),
            k = null,
            y = null,
            C = null,
            x = null;
          async function F() {
            if (!(await r.Z.hasZoomRqToken()))
              return (
                i.Z.popupLogin(!0),
                void (function () {
                  c(".content-header .topnav").remove();
                  let e = `\n\t\t\t<div class="tip-cont">${p.tips[34]}</div>\n\t\t`;
                  c("#content").html(e), c(".content-footer").remove();
                })()
              );
            if (n.no_meeting_license_user)
              !(function () {
                let e = `\n\t\t\t<p>${p.tips[32]}</p>\n\t\t`;
                c(".content-header").html(e),
                  (e = `\n\t\t\t<div class="tip-cont">${p.tips[33]}</div>\n\t\t`),
                  c("#content").html(e),
                  c(".content-footer").remove();
              })();
            else {
              try {
                _ = !!n.security.pmi.passcode.default_jbh;
              } catch (e) {}
              !(function () {
                c(".meetingtype .pmi_txt1").html(p.tips[7]),
                  c(".meetingtype .pmi_txt2").html(p.tips[8]),
                  c("#locktip").html(p.tips[1]),
                  c(".encryption-box .zm-alert .description").html(p.tips[23]),
                  c(".encryption-box .e2eTip.enhanced").attr("info", p.tips[24]),
                  c(".encryption-box .e2eTip.e2e").attr("info", p.tips[25]);
                let e = c(".security-box");
                e.find(".warning").html(p.tips[20] + '<div class="web-setting-btn">Change Default Settings</div>'),
                  n.embedPasscode
                    ? (e.find(".usability-desc.pwd").html(p.tips[26]), e.find(".pwdTip").attr("info", p.tips[29]))
                    : (e.find(".usability-desc.pwd").html(p.tips[27]), e.find(".pwdTip").remove());
                e.find(".usability-desc.wr").html(p.tips[28]),
                  5 != p.envIndex &&
                    c(".content-footer .controls").append(
                      '\n\t\t\t\t<button id="setting_refresh" class="btn btn-refresh" title="Click the button to synchronize the latest Settings.">\n\t\t\t\t\t<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.51175 0.333344C3.43539 0.333344 0.110196 3.6594 0.00252797 7.79301C-0.106392 12.0135 3.31895 15.636 7.45541 15.6667H7.51175C9.58999 15.6667 11.4679 14.8106 12.82 13.4178C13.3571 12.8709 13.8166 12.2371 14.1772 11.5433C14.3437 11.2251 14.1997 10.8316 13.8717 10.6961L13.8241 10.6757C13.749 10.6437 13.6714 10.6297 13.595 10.6297C13.3797 10.6297 13.1731 10.7472 13.0692 10.953C12.775 11.5343 12.3931 12.0646 11.9437 12.5233C10.8044 13.6733 9.23945 14.3889 7.51175 14.3889C3.91489 14.3889 1.02412 11.2877 1.267 7.56301C1.47107 4.43884 3.92365 1.89351 6.98217 1.63412C7.1612 1.61879 7.33648 1.61112 7.51175 1.61112C9.27701 1.61112 10.8682 2.36501 12.0075 3.55334L13.8592 5.44445H11.6182C11.2588 5.44445 10.9797 5.73834 10.9922 6.11018C11.006 6.45645 11.3064 6.72223 11.647 6.72223H15.374C15.4504 6.72223 15.5368 6.70945 15.6131 6.67112C15.6495 6.65834 15.687 6.63279 15.7258 6.62001C15.7634 6.58168 15.7872 6.55612 15.8122 6.53057C15.8761 6.47945 15.9124 6.41557 15.9499 6.3389V6.32612C15.9887 6.24945 16 6.16001 16 6.08334V2.25001C16 1.89223 15.7133 1.61112 15.374 1.61112C15.3227 1.61112 15.2714 1.61751 15.2188 1.63157C14.9371 1.70312 14.748 1.97912 14.748 2.27684V4.55001C14.748 4.55001 12.7574 2.51834 12.646 2.41612C11.3052 1.12557 9.48984 0.333344 7.51175 0.333344Z" fill="#747487"/></svg>\n\t\t\t\t\t<span class="sr-only">Refresh Set</span>\n\t\t\t\t</button>\n\t\t\t'
                    );
                t = new l.Z({
                  el: c("#meeting_pwd").get(0),
                  rule: k,
                  blurCallback: function () {
                    !(async function (e) {
                      let n = t.getPassword();
                      if (n === o && c(".requirepwd").hasClass("has-error")) return;
                      if (((o = n), k.enhanceDetectionRule && n))
                        try {
                          let t = await i.Z.remoteCheckPassword(n);
                          Z(t.status, t.errorMessage, 1, e);
                        } catch (o) {
                          let { res: i, msg: n, errortype: a } = t.checkRules();
                          Z(i, n, a, e);
                        }
                      else {
                        let { res: o, msg: i, errortype: n } = t.checkRules();
                        Z(o, i, n, e);
                      }
                    })(1);
                  },
                  startInputCallback: function () {
                    D(2);
                  },
                  conformRuleCallback: function () {
                    D(1);
                  }
                });
              })(),
                (function () {
                  c("body").on("click", "a", function (e) {
                    e.preventDefault(), e.stopPropagation();
                  }),
                    c("#setting_option_needpassword").on("change", function () {
                      me("1111111"), S();
                    }),
                    c("#setting_option_requirereg").on("change", function () {
                      me("22222222"),
                        c("#setting_option_requirereg").prop("checked") &&
                          !c("#meeting_type_normal").prop("checked") &&
                          (c("#meeting_type_normal").prop("checked", !0), c("#meeting_type_normal").trigger("change"));
                    });
                  let t = !1;
                  c("[name=meeting_type]").on("change", async function () {
                    me("33333333333");
                    let e = c("#meeting_type_pmi").prop("checked") || !1;
                    e !== t &&
                      (me("333333333 run!!!"),
                      (t = e),
                      c("#meeting_type_pmi").prop("checked")
                        ? (c(".pmi_txt2").show(),
                          c("#setting_option_requirereg").prop("checked", !1).attr("checked", null),
                          c(".requirepwd").addClass("show-input-pwd"),
                          c(".control-row.jbh").addClass("pmi"),
                          c(".dcRegions").addClass("pmi"))
                        : (c(".pmi_txt2").hide(),
                          c(".requirepwd").removeClass("show-input-pwd"),
                          c(".control-row.jbh").removeClass("pmi"),
                          c(".dcRegions").removeClass("pmi")),
                      await W(!0),
                      M());
                  });
                  let o = null;
                  c("#alternative_host").on("keyup", function (e) {
                    return (
                      c(this).val().length > 0
                        ? (o && clearTimeout(o),
                          (o = window.setTimeout(function () {
                            T(), (o = null);
                          }, 500)))
                        : (c("#alternative_host").parent().removeClass("has-error"), c("#alternative_host").next().hide()),
                      !1
                    );
                  }),
                    c(".topnav").on("click", "li[data-tab]", function (e) {
                      T() &&
                        (c(this).hasClass("active") ||
                          (c(".topnav > li").removeClass("active"),
                          c(this).addClass("active"),
                          c(".content-body > form >div.tab-pane").hide(),
                          c(".content-body > form >div." + c(this).data("tab")).show()),
                        e.preventDefault(),
                        e.stopPropagation());
                    }),
                    c("[name=option_pac]").on("change", function () {
                      me("666666666666");
                      var t = parseInt(c(this).val(), 10) - 1;
                      if (e && e.option_pac_enable) {
                        var o = e.acclist[t],
                          i = c(".pac").find(".pac-toll-numbers").empty();
                        c.each(o.toll_numbers, function (e, t) {
                          i.append("<label>" + $(t) + "</label>");
                        }),
                          c(".pac").find(".pac-mtg-number").text(o.meeting_number),
                          o.did_numbers && "" != o.did_numbers
                            ? (c(".pac")
                                .find(".pac-did-numbers")
                                .html("<label>" + $(o.did_numbers) + "</label>"),
                              c(".pac").find(".pac-did-numbers").parent().show())
                            : c(".pac").find(".pac-did-numbers").parent().hide();
                      }
                    });
                  c("#setting_submit").on("click", async function (e) {
                    if ((e.stopPropagation(), await r.Z.hasZoomRqToken())) return q(), !1;
                    i.Z.popupLogin(!0);
                  }),
                    c("#setting_cancel").on("click", function () {
                      return (
                        chrome.tabs.getCurrent(function (e) {
                          chrome.tabs.remove(e.id, function () {});
                        }),
                        !1
                      );
                    }),
                    c("#setting_refresh").on("click", function (e) {
                      e.stopPropagation();
                      let t = c(this);
                      t.hasClass("loading") ||
                        (t.addClass("loading"),
                        t.add("#setting_submit").prop("disabled", !0),
                        (async function () {
                          if (await r.Z.hasZoomRqToken())
                            try {
                              let e = await i.Z.toSyncImmediate();
                              e.status && "object" === u.type(e.result) ? window.location.reload() : (R(), z(p.errors[7], !0));
                            } catch (e) {
                              R(), z(p.errors[7], !0);
                            }
                          else R(), i.Z.popupLogin(!0);
                        })());
                    }),
                    c(":checkbox").on("click", function () {
                      c(this).attr("checked", !c(this).attr("checked"));
                    }),
                    c(":radio").on("click", function () {
                      var e = c(this).attr("name");
                      c("[name=" + e + "]")
                        .not(this)
                        .attr("checked", !1),
                        c(this).attr("checked", !0);
                    }),
                    c(".security-box .web-setting-btn").on("click", function (e) {
                      e.stopPropagation(), chrome.tabs.create({ url: c(this).attr("url") });
                    });
                  let n = !1;
                  c("[name=option_encryption]").on("change", function (e) {
                    me("77777777777777");
                    let t = "1" === this.value,
                      o = t !== n;
                    o &&
                      (me("77777777777777 run!!!"),
                      (n = t),
                      (function (e) {
                        let t = c(".encryption-box");
                        e
                          ? (t.addClass("on-e2e"),
                            (function () {
                              c(".audio").addClass("on-e2e-state"), c("[name=option_audio][value=voip]").prop({ checked: !0 });
                              let e = c(".jbh");
                              e.length && e.addClass("on-e2e-state");
                            })())
                          : (t.removeClass("on-e2e"),
                            (async function () {
                              c("[name=meeting_type]:checked").val();
                              let e = c(".audio");
                              if (e.hasClass("on-e2e-state")) {
                                e.removeClass("on-e2e-state");
                                let t = (await r.Z.getValue("zoom_config_audio")) || "both";
                                c("[name=option_audio][value=" + t + "]").prop({ checked: !0 });
                              }
                              let t = c(".jbh");
                              t.length && t.removeClass("on-e2e-state");
                            })());
                      })(t)),
                      (o || t) &&
                        (async function (e) {
                          if (e) {
                            let e = c(".waitingroom2");
                            if (e.length) {
                              e.addClass("on-e2e-state"),
                                c("#setting_option_waitingroom2").prop("checked", !0).prop("disabled", !0),
                                c("#auto_prior_start").val(-1).prop("disabled", !0).css("opacity", 0.5);
                              let t = c("#manu_prior_start");
                              t.length && t.val(-1).prop("disabled", !0).css("opacity", 0.5),
                                c("#setting_option_waitingroom2").trigger("change");
                            }
                            let t = c(".jbh-moved-alert");
                            t.length && t.hide();
                          } else {
                            let e = "pmi" === c("[name=meeting_type]:checked").val(),
                              t = c(".waitingroom2");
                            if (t.length) {
                              t.removeClass("on-e2e-state"),
                                await J(e, !0),
                                B(
                                  await r.Z.getSecurity(),
                                  e,
                                  !!c("#setting_option_needpassword").prop("checked"),
                                  c("#setting_option_authentication").is(":visible") && c("#setting_option_authentication").prop("checked")
                                );
                            }
                            let o = c(".jbh-moved-alert");
                            o.length && o.show();
                          }
                        })(t);
                  });
                  let a = c(".encryption-box");
                  a.on("click", "close", function (e) {
                    e.stopPropagation(), c(this).parents(".zm-alert").remove();
                  }),
                    a.on("click", ".description a", function (e) {
                      e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: c(this).attr("href") });
                    }),
                    c(".zoom-info-tip")
                      .on("mouseenter click", function (e) {
                        O(c(this), !0);
                      })
                      .on("mouseleave", function (e) {
                        O(c(this), !1);
                      }),
                    c(".zoom-info-tip").on("click", function (e) {
                      O(c(this), !0, 0);
                    });
                })(),
                (async function () {
                  (n && n.audiopac) || c(".content-header > .topnav").hide();
                  var t;
                  n && (t = n.lockedoptions);
                  await (async function () {
                    if (!n) return;
                    let e,
                      t = await r.Z.getValue("zoom_config_schedule_for");
                    n.assistants && (e = n.assistants);
                    if (e && e.length > 0) {
                      let o = [{ id: "me", label: "Myself", extData: { email: n.email || "", pmi: n.PMI || "0" } }];
                      c.each(e, function (e, t) {
                        "000-000-000" === t.roomid && (t.roomid = "0"),
                          o.push({ id: t.id, label: t.name, extData: { email: t.email || "", pmi: t.roomid || "0" } });
                      }),
                        (x = new s.Z({
                          el: c(".schedule .schedule-for-cont").get(0),
                          defaultValue: t || "me",
                          dataList: o,
                          jquery: c,
                          ariaLabel: "select meeting host",
                          scrollContBottomIndent: 70,
                          multiParamResults: !0,
                          changeCallback: function () {
                            let { id: e, extData: t } = x.getSelectedResult(),
                              o = t?.pmi;
                            "0" !== o && "000-000-000" !== o
                              ? c(".meetingtype .pmi_number").text(o)
                              : c(".meetingtype .pmi_number").text(""),
                              pe();
                            let i = c(".security-box .web-setting-btn");
                            "me" !== e ? i.hide() : i.show();
                          }
                        }));
                    } else c(".schedule").hide(), "0" !== n.PMI && c(".meetingtype .pmi_number").text(n.PMI);
                    pe();
                  })();
                  var o = !!(await r.Z.getValue("zoom_config_pmi"));
                  c("[name=meeting_type][value=" + (o ? "pmi" : "onetime") + "]").prop({ checked: !0 }),
                    n &&
                      n.scheduleDefaultLockOption &&
                      "true" === n.scheduleDefaultLockOption.usePMISchedule_locked &&
                      te(c(".meetingtype .control-row"), !0);
                  var a = (await r.Z.getValue("zoom_config_video_host")) || "on",
                    l = (await r.Z.getValue("zoom_config_video_participants")) || "on";
                  c("[name=option_video_host][value=" + a + "]").prop({ checked: !0 }),
                    c("[name=option_video_participants][value=" + l + "]").prop({ checked: !0 }),
                    t && t.hostVideo_locked && te(c(".video .video-controls-label:first"), !0);
                  t && t.pVideo_locked && te(c(".video .video-controls-label:last"), !0);
                  let p = await r.Z.getValue("zoom_config_audio");
                  var u = p || "both";
                  n &&
                    !n.option_has3rd &&
                    (c(".audio>div.controls #option_audio_3rd").parent().remove(),
                    "other" == u && (u = "both"),
                    c("#option_audio_both").next().text("Both"));
                  n && n.option_noboth && (c(".audio>div.controls #option_audio_both").parent().remove(), "both" == u && (u = "telephony"));
                  c("[name=option_audio][value=" + u + "]").prop({ checked: !0 }), u != p && r.Z.saveValue("zoom_config_audio", u);
                  t && t.audio_locked && te(c(".audio .controls[role=group]"), !0);
                  await (async function () {
                    if (y) c(".control-row.jbh").remove();
                    else {
                      c("#setting_option_jbh").on("change", function () {
                        me("44444444444"),
                          "pmi" === c("[name=meeting_type]:checked").val() && _ && W(!0),
                          C && C.changeLockState(!c(this).prop("checked"));
                      });
                      let e = !!(await r.Z.getValue("zoom_config_jbh"));
                      c("#setting_option_jbh").prop("checked", e);
                      let t = n.lockedoptions && n.lockedoptions.jbh_locked;
                      if ((t && te(c(".control-row.jbh"), !0), n && n.enableJBHPriorStartMeeting)) {
                        let o = await i.Z.getJBHPriorStartMeetingList(),
                          n = [];
                        c.each(o, function (e, t) {
                          n.push({ id: e, label: t });
                        });
                        let a = await i.Z.getJbhTimeMinutes();
                        (C = new s.Z({
                          el: c(".jbh .JBH-prior-start-cont").get(0),
                          defaultValue: a || "",
                          dataList: n,
                          lockState: t,
                          styleType: 2,
                          jquery: c,
                          ariaLabel: "select time",
                          scrollContBottomIndent: 70,
                          changeCallback: function () {}
                        })),
                          c(".control-row.jbh").addClass("show-prior"),
                          e || C.changeLockState(!0);
                      }
                    }
                  })(),
                    await W(),
                    await (async function () {
                      if (!n) return;
                      let e = n.dcOptions;
                      if (e.support && !e.locked) {
                        let t = await r.Z.getEnableDC(),
                          o = c(".dcRegions .dc-group"),
                          i = c("#setting_option_enableDC");
                        if (e.options.length) {
                          let t = (function (e) {
                            let t = "",
                              o = e.length - 1;
                            return (
                              c.each(e, function (e, i) {
                                e % 2 == 0 && (t += '<div class="tablerow">'),
                                  (t += `\n\t\t\t\t<div class="tablecell">\n\t\t\t\t\t<label><input type="checkbox" name="option_dc_region" dcabbr="${$(
                                    i.abbr
                                  )}"><span>${$(i.name)}</span></label>\n\t\t\t\t</div>\n\t\t\t`),
                                  (e % 2 == 0 && e !== o) || (t += "</div>");
                              }),
                              t
                            );
                          })(e.options);
                          o.html(t),
                            (function () {
                              let e = c(".dcRegions"),
                                t = c(".dcRegions .dc-group"),
                                o = c("#setting_option_enableDC");
                              t.find("input").on("change", function (o) {
                                e.hasClass("has-error") && re(t);
                              }),
                                o.on("change", function (o) {
                                  c(this).prop("checked") ? e.addClass("showSubOptions") : e.removeClass("showSubOptions"),
                                    e.hasClass("has-error") && re(t);
                                });
                            })();
                        }
                        t &&
                          c.each(t, function (e, t) {
                            o.find("[dcabbr=" + e + "]").prop("checked", t), t && i.prop("checked", !0).trigger("change");
                          });
                      } else c(".dcRegions").remove();
                    })();
                  var d = !!(await r.Z.getValue("zoom_config_mute_upon_entry"));
                  c("#setting_option_uponentry").prop("checked", d), t && t.mute_locked && te(c(".control-row.entry"), !0);
                  if (n && n.show_unmute_all) {
                    let e = !!(await r.Z.getValue("enable_unmute_all"));
                    c("#unmute_all").prop("checked", e);
                  } else c(".control-row.unmute_all").remove();
                  let m = await r.Z.getWatermark();
                  m.support
                    ? (c("#setting_option_watermark").prop("checked", m.defaultVal),
                      m.locked && (c("#setting_option_watermark").prop("checked", !0), te(c(".control-row.watermark"), !0)))
                    : c("#setting_option_watermark").parents("div.control-row").remove();
                  let h = await r.Z.getAudioWatermark();
                  h.support
                    ? (c("#setting_option_audiomark").prop("checked", h.defaultVal),
                      h.locked && (c("#setting_option_audiomark").prop("checked", !0), te(c(".control-row.audiomark"), !0)))
                    : c("#setting_option_audiomark").parents("div.control-row").remove();
                  if (n && n.option_haspublic_cal) {
                    var g = !!(await r.Z.getValue("zoom_config_public_cal"));
                    c("#setting_option_public_cal").prop("checked", g), t && t.public_cal_locked && te(c(".control-row.pubcalendar"), !0);
                  } else c("#setting_option_public_cal").parents("div.control-row").remove();
                  var f = !0;
                  let v = await r.Z.getValue("zoom_config_joinurl");
                  null != v && (f = !!v);
                  c("#setting_option_joinurl").prop("checked", f),
                    n && !0 === n.option_enable_reg
                      ? n.scheduleDefaultLockOption && "true" === n.scheduleDefaultLockOption.usePMISchedule_locked
                        ? c("#setting_option_requirereg").prop({ disabled: !0 })
                        : !0 === (await r.Z.getValue("zoom_option_require_reg")) &&
                          c("#setting_option_requirereg").prop({ checked: !0 }).attr("checked", "checked").trigger("change")
                      : c(".requirereg").hide();
                  n
                    ? void 0 === n.alt_hosts
                      ? c(".altnativehost").hide()
                      : c("#alternative_host").val((await r.Z.getValue("zoom_config_althost")) || "")
                    : c(".altnativehost").hide();
                  c("#fixed_popup").prop("checked", !!(await r.Z.getValue("zoom_config_fixed_popup")));
                  var b = parseInt((await r.Z.getValue("zoom_config_pacindex")) || "1", 10);
                  (isNaN(b) || b < 1 || b > 2) && ((b = 1), r.Z.saveValue("zoom_config_pacindex", "1"));
                  n && n.audiopac && (e = n.audiopac);
                  if (e && e.option_pac_enable) {
                    var w = b - 1;
                    e.acclist.length < 2 && (c("#option_pac_acc2").parent().remove(), (w = 0), (b = 1)),
                      c("[name=option_pac][value=" + b + "]").prop("checked", !0);
                    var k = e.acclist[w],
                      F = c(".pac").find(".pac-toll-numbers");
                    c.each(k.toll_numbers, function (e, t) {
                      F.append("<label>" + $(t) + "</label>");
                    }),
                      c(".pac").find(".pac-mtg-number").text(k.meeting_number),
                      k.did_numbers && "" != k.did_numbers
                        ? c(".pac")
                            .find(".pac-did-numbers")
                            .html("<label>" + $(k.did_numbers) + "</label>")
                        : c(".pac").find(".pac-did-numbers").parent().hide();
                  }
                  (await r.Z.getValue("zoom_config_fte")) && parseInt(await r.Z.getValue("zoom_options_tabid")) > 0
                    ? (c("#setting_submit").text("Save and Continue"), c("#setting_cancel").hide(), c("#setting_refresh").hide())
                    : (c("#setting_submit").text("Save"), c("#setting_cancel").show(), c("#setting_refresh").show());
                  c("#meeting_type_normal").trigger("change"), M();
                })();
            }
          }
          function Z(e, t, o, i) {
            e || !t || (1 === i && 2 === o)
              ? D()
              : (function (e, t) {
                  m.addClass("has-error").attr("errortype", t);
                  let o = m.find(".has-error");
                  o.text(e).addClass("showme"), 1 === t ? o.attr("role", "alert") : o.attr("role", null);
                })(t, o),
              2 === i && q(e);
          }
          function D(e) {
            m.hasClass("has-error") &&
              ((e && e != m.attr("errortype")) ||
                (m.removeClass("has-error").attr("errortype", null), m.find(".has-error").removeClass("showme").attr("role", null)));
          }
          var V;
          function z(e, t, o, i) {
            var n = c("#content_success_msg");
            t ? n.removeClass("alert-success").addClass("alert-danger") : n.addClass("alert-success").removeClass("alert-danger"),
              (i = i || 5e3),
              (o = o || n).html(e);
            var a = (parseInt(c(document.body).outerWidth(!0)) - n.outerWidth(!0)) / 2;
            o === n && o.css("left", a),
              V && window.clearTimeout(V),
              o.fadeIn("slow"),
              (V = window.setTimeout(function () {
                o.fadeOut("slow");
              }, i));
          }
          function j(e) {
            e ? (b.show(), w.show()) : (b.hide(), w.hide());
          }
          function S() {
            c("#setting_option_needpassword").prop("checked") || !1
              ? c(".requirepwd").addClass("sel")
              : c(".requirepwd").removeClass("sel");
          }
          function P(e) {
            let t = "";
            return (
              c.each(c.trim(e).split(/[;,\n\r]+/), (e, o) => {
                e > 0 && (t += ","), (t += c.trim(o));
              }),
              t
            );
          }
          function T() {
            var e = !0;
            return (
              c("#alternative_host").is(":visible") &&
                "" != c("#alternative_host").val() &&
                (!(function (e) {
                  var t = c.trim(e).split(/[;,\n\r]+/);
                  if ("" == t) return !0;
                  let o = !0;
                  for (var i in t) {
                    var n = c.trim(t[i]);
                    o = o && A(n);
                  }
                  return !0 === o;
                })(c("#alternative_host").val())
                  ? (c("#alternative_host").parent().addClass("has-error"),
                    c("#alternative_host").trigger("focus").next().show(),
                    c("#alternative_host").next().text(p.tips[0]),
                    (e = !1))
                  : (c("#alternative_host").parent().removeClass("has-error"), c("#alternative_host").next().hide())),
              e
            );
          }
          !(async function () {
            (n = await r.Z.getZoomData()), (k = await i.Z.getMeetingPwdSettingsMap()), (y = await r.Z.getWrOp());
            try {
              let e = setTimeout(() => {
                z("Updating Settings data online...", !1, null, 5e3);
              }, 50);
              (await i.Z.checkSyncFoVersionOrTime())
                ? (z("Network update data successfully!", !1, null, 2e3),
                  setTimeout(async function () {
                    (n = await r.Z.getZoomData()), (y = await r.Z.getWrOp()), F();
                  }, 50))
                : (clearTimeout(e), F());
            } catch (e) {
              z("Network update data failed!", !0, null, 2e3), F();
            }
          })();
          let E = null;
          function O(e, t, o = 800) {
            e &&
              (E && (clearTimeout(E), (E = null)),
              (E = t
                ? setTimeout(function () {
                    e.hasClass("updateDom") ||
                      (function (e) {
                        let t = e.attr("info");
                        if (t) {
                          let o = `\n\t\t\t\t<div class="zoom-info-tip-pop">\n\t\t\t\t\t<div class="content">${t}</div>\n\t\t\t\t\t<div class="pop-arrow"></div>\n\t\t\t\t</div>`;
                          e.html(o).attr("info", null).addClass("updateDom");
                        }
                      })(e),
                      se(e.find(".zoom-info-tip-pop")),
                      (function (e) {
                        let t = e.find(".zoom-info-tip-pop"),
                          o = e.offset();
                        o.top - 100 < t.height() ? t.addClass("turn") : t.removeClass("turn");
                      })(e),
                      (E = null);
                  }, o)
                : setTimeout(function () {
                    e.hasClass("updateDom") && ce(e.find(".zoom-info-tip-pop")), (E = null);
                  }, 200)));
          }
          async function M() {
            let e = await r.Z.getE2ee();
            if (e.support) {
              let t;
              (t = "pmi" === c("[name=meeting_type]:checked").val() ? e.pmiEnable : e.normalEnable),
                t
                  ? c("#setting_option_e2e").prop("checked", !0).trigger("change")
                  : c("#setting_option_enhanced").prop("checked", !0).trigger("change"),
                e.locked && (c("#setting_option_enhanced").parent().remove(), te(c(".encryption-option > label"), !0));
            } else c(".encryption-box").remove();
          }
          async function q(e) {
            let t = {};
            c(".topnav").is(":visible") && c(".topnav li:last-child").hasClass("active") && c(".topnav li:first-child").trigger("click");
            let o = "pmi" === c("[name=meeting_type]:checked").val(),
              a = c("#unmute_all").is(":visible") && c("#unmute_all").prop("checked"),
              l = !1,
              s = await r.Z.getE2ee();
            c(".encryption-box").length &&
              ((l = c("#setting_option_e2e").prop("checked")), o ? (s.pmiEnable = l) : (s.normalEnable = l), r.Z.setE2ee(s)),
              (t.option_e2ee_normal = s.normalEnable),
              (t.option_e2ee_pmi = s.pmiEnable);
            let u,
              d = n && n.lockedoptions && n.lockedoptions.audio_locked;
            l && d
              ? (u = (await r.Z.getValue("zoom_config_audio")) || "both")
              : ((u = c("[name=option_audio]:checked").val()), r.Z.saveValue("zoom_config_audio", u));
            let m = (function () {
              let e = "";
              if (x?.isVisible) {
                let { id: t, extData: o } = x.getSelectedResult();
                "me" !== t && (e = t);
              }
              return e;
            })();
            r.Z.saveValue("zoom_config_schedule_for", m),
              r.Z.saveValue("zoom_config_pmi", o),
              r.Z.saveValue("zoom_config_mute_upon_entry", c("#setting_option_uponentry").prop("checked")),
              r.Z.saveValue("enable_unmute_all", a),
              r.Z.saveValue(
                "zoom_config_public_cal",
                c("#setting_option_public_cal").is(":visible") && c("#setting_option_public_cal").prop("checked")
              ),
              r.Z.saveValue("zoom_config_video_host", c("[name=option_video_host]:checked").val()),
              r.Z.saveValue("zoom_config_video_participants", c("[name=option_video_participants]:checked").val()),
              r.Z.saveValue("zoom_config_pacindex", c("[name=option_pac]:checked").val() || "1"),
              r.Z.saveValue("zoom_config_joinurl", c("#setting_option_joinurl").prop("checked")),
              r.Z.saveValue("zoom_option_require_reg", c("#setting_option_requirereg").prop("checked"));
            let h = c("#setting_option_watermark").is(":visible") && c("#setting_option_watermark").prop("checked");
            r.Z.updateWatermarkDefault(h);
            let _ = c("#setting_option_audiomark").is(":visible") && c("#setting_option_audiomark").prop("checked");
            if ((r.Z.updateAudioWatermarkDefault(_), y))
              t.waiting_room_new = await (async function () {
                if (!c(".waitingroom2").is(":visible")) return "";
                let e,
                  t,
                  o = !!c("#setting_option_waitingroom2").prop("checked");
                if (o)
                  (e = c("[name=option_waitingroom2]:checked").val()),
                    "auto" === e
                      ? (t = c("#auto_prior_start").val())
                      : "manu" === e && (t = c("#manu_prior_start").is(":visible") ? c("#manu_prior_start").val() : null);
                else {
                  let o = "pmi" === c("[name=meeting_type]:checked").val(),
                    n = await i.Z.getWaitingRoom2(o);
                  n.show &&
                    ((e = n.childParams.options.value),
                    "auto" === e ? (t = n.childParams.auto.value) : "manu" === e && (t = n.childParams.manu.value));
                }
                null === t && (t = -100);
                let n = { enable: o, type: e, join_time: t };
                return JSON.stringify(n);
              })();
            else {
              let e;
              l
                ? (e = !!(await r.Z.getValue("zoom_config_jbh")))
                : ((e = c("#setting_option_jbh").prop("checked")), r.Z.saveValue("zoom_config_jbh", e)),
                !o && e && C?.isVisible && i.Z.setJbhTimeMinutes(C.getSelectedResult()),
                (t.zoom_config_jbh = e);
            }
            let g = await r.Z.getEnableDC();
            if (c("#setting_option_enableDC").is(":visible"))
              if (c("#setting_option_enableDC").prop("checked")) {
                let e = c(".dcRegions .dc-group"),
                  t = e.find("input:checked");
                if (!t.length) return void le(e, p.errors[18]);
                {
                  let e = {};
                  t.each(function (t) {
                    let o = c(this).attr("dcabbr");
                    o && (e[o] = !0);
                  }),
                    r.Z.setEnableDC(e),
                    (g = e);
                }
              } else r.Z.setEnableDC(""), (g = "");
            t.enableDC = JSON.stringify(g);
            let f = c("#fixed_popup").is(":visible") && c("#fixed_popup").prop("checked");
            if ((r.Z.saveValue("zoom_config_fixed_popup", f), (t.zoom_config_fixed_popup = f), !T())) return !1;
            !(function () {
              let e = c("#alternative_host").val();
              c("#alternative_host").is(":visible") && e && c("#alternative_host").val(P(e));
            })(),
              (t.zoom_config_schedule_for = m),
              (t.zoom_config_pmi = o),
              (t.public_cal = c("#setting_option_public_cal").is(":visible") && c("#setting_option_public_cal").prop("checked")),
              (t.mute_upon_entry = c("#setting_option_uponentry").prop("checked")),
              (t.zoom_config_video_host = c("[name=option_video_host]:checked").val()),
              (t.zoom_config_video_participants = c("[name=option_video_participants]:checked").val()),
              (t.zoom_config_audio = u),
              (t.zoom_config_pacindex = c("[name=option_pac]:checked").val() || "1"),
              (t.zoom_config_watermark = c("#setting_option_watermark").is(":visible") && c("#setting_option_watermark").prop("checked")),
              (t.zoom_config_audiomark = c("#setting_option_audiomark").is(":visible") && c("#setting_option_audiomark").prop("checked")),
              (t.zoom_config_alternativehost = c("#alternative_host").val()),
              (t.zoom_config_joinurl = c("#setting_option_joinurl").prop("checked")),
              (t.require_reg = c("#setting_option_requirereg").prop("checked")),
              (t.enable_unmute_all = a);
            let v = c("#setting_submit");
            v.addClass("loading"), v.add("#setting_refresh").prop("disabled", !0);
            let b = parseInt(await r.Z.getValue("zoom_options_tabid"));
            if (b > 0 && (await r.Z.getValue("zoom_config_fte"))) {
              try {
                201 == (await i.Z.saveZoomSetting(t)).errorCode
                  ? i.Z.popupLogin(!0)
                  : (r.Z.saveValue("zoom_config_fte", !1),
                    r.Z.saveValue("zoom_config_althost", c("#alternative_host").val()),
                    chrome.tabs.update(b, { url: i.Z.getGoogleCalendarUrl() }, function (e) {}));
              } catch (e) {
                c("#alternative_host").parent().addClass("has-error"),
                  c("#alternative_host").trigger("focus").next().text(e?.data?.errorMessage),
                  c("#alternative_host").trigger("focus").next().show();
              }
              L();
            } else {
              try {
                201 == (await i.Z.saveZoomSetting(t)).errorCode
                  ? i.Z.popupLogin(!0)
                  : (r.Z.saveValue("zoom_config_althost", c("#alternative_host").val()), z("Your settings have been saved."));
              } catch (e) {
                c("#alternative_host").parent().addClass("has-error"),
                  c("#alternative_host").trigger("focus").next().text(e?.data?.errorMessage),
                  c("#alternative_host").trigger("focus").next().show();
              }
              L();
            }
          }
          function R() {
            let e = c("#setting_refresh");
            e.removeClass("loading"), e.add("#setting_submit").prop("disabled", !1), e.get(0).focus();
          }
          function L() {
            let e = c("#setting_submit");
            e.removeClass("loading"), e.add("#setting_refresh").prop("disabled", !1);
          }
          function A(e) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
              e
            );
          }
          function $(e) {
            return a().sanitize(e);
          }
          async function I() {
            let e,
              t = await r.Z.getSecurity(),
              o = "pmi" === c("[name=meeting_type]:checked").val();
            (e = y ? Y() : !!c("#setting_option_jbh").prop("checked")), t && (await ee(!0, t, o, e, !0), Q(o));
          }
          async function W(e) {
            let t;
            t = e ? "pmi" === c("[name=meeting_type]:checked").val() : !!(await r.Z.getValue("zoom_config_pmi"));
            let o,
              n = await r.Z.getSecurity();
            await (async function (e, t, o) {
              if (!o)
                if (y) {
                  c(".security-box .waitingroom").remove();
                  let e = c(".jbh-moved-alert .description");
                  e.html(p.tips[38]), e.find("a").attr("href", await i.Z.getMySettingUrl());
                } else c(".security-box .waitingroom2").remove(), c(".options .jbh-moved-alert").remove();
              y
                ? J(t, o)
                : e &&
                  (function (e, t) {
                    let { wrEnable: o, wrLocked: i } = N(e, t);
                    c("#setting_option_waitingroom").prop("checked", o), te(c(".control-row.waitingroom > label"), !!i);
                    e.newSecurityEnabled.defaultVal && (!o && i ? c(".waitingroom").hide() : c(".waitingroom").show());
                  })(e, t);
            })(n, t, e),
              (o = e
                ? y
                  ? Y()
                  : !!c("#setting_option_jbh").prop("checked")
                : y
                ? await (async function (e) {
                    let t = await i.Z.getWaitingRoom2(e);
                    if (!t.value) return !0;
                    let o = t.childParams.auto.value,
                      n = t.childParams.manu.value,
                      a = t.childParams.options.value;
                    if ("auto" === a) {
                      if ("-1" !== o) return !0;
                    } else if ("manu" === a && "-1" !== n && null !== n) return !0;
                    return !1;
                  })(t)
                : !!(await r.Z.getValue("zoom_config_jbh"))),
              n &&
                (n.newSecurityEnabled.defaultVal
                  ? await (async function (e, t) {
                      let o = !1,
                        n = !1,
                        a = !1,
                        l = await r.Z.getAuthentication(),
                        s = l.locked;
                      if (t) {
                        (o = e.pmi.passcode.default_all), (n = e.pmi.passcode.locked), (a = l.pmi.defaultVal);
                        let t = e.pmi.passcode.value;
                        t && d.val(t);
                      } else (o = e.normal.passcode.defaultVal), (n = e.normal.passcode.locked), (a = l.normal.defaultVal);
                      c("#setting_option_needpassword").prop("checked", o), te(c(".requirepwd > label"), !!n);
                      !o && n ? c(".requirepwd").hide() : c(".requirepwd").show();
                      l.support && (!a && s ? c(".authentication").hide() : c(".authentication").show());
                      await B(e, t, o, a),
                        await (async function (e, t, o, n, a, l, r) {
                          let s,
                            p,
                            u = c(".security-box"),
                            d = (!l && r) || !o.support;
                          if (y) {
                            let t = await i.Z.getWaitingRoom2(e);
                            (s = t.value), (p = t.disabled);
                          } else {
                            let o = N(t, e);
                            (s = o.wrEnable), (p = o.wrLocked);
                          }
                          !n && a && !s && p && d ? u.hide() : u.is(":visible") || u.show();
                        })(t, e, l, o, n, a, s),
                        S();
                    })(n, t)
                  : await ee(e, n, t, o),
                await (async function (e) {
                  let t = await r.Z.getAuthentication();
                  if (((f = -1), t.support)) {
                    g = t.optionLists;
                    let o = t.normal.defaultVal;
                    e &&
                      ((g = (function (e, t) {
                        if ("object" === u.type(t) && Object.keys(t).length && Array.isArray(e)) {
                          let n = !1;
                          t.defaultVal = !0;
                          for (var o = 0, i = e.length; o < i; o++) {
                            let i = e[o];
                            i.defaultVal && (e[o].defaultVal = !1), i.id == t.id && ((e[o] = t), (n = !0));
                          }
                          n || ((t.del = !0), e.unshift(t));
                        }
                        return e;
                      })(t.optionLists, t.pmi.pmiUpdate)),
                      (o = t.pmi.defaultVal));
                    let { htmlText: i, selVal: n } = (function (e) {
                      let t = "",
                        o = "",
                        i = -1,
                        n = "",
                        a = e.length;
                      if (a > 1) {
                        o = '<div class="select-field"><select id="sel_for_authentication">';
                        for (var l = 0; l < a; l++) {
                          let n = e[l];
                          (o += `\n\t\t\t\t\t<option value="${l}">${$(n.name)}</option>\n\t\t\t\t`),
                            n.defaultVal && ((t = ": " + $(n.name)), (i = l));
                        }
                        (o += "</select></div>"), (n = '<div class="domain-info-field"></div>');
                      } else
                        1 == a
                          ? ((t = ": " + $(e[0].name)), (n = '<div class="domain-info-field"></div>'))
                          : (n =
                              '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>');
                      let r = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${t}</span></optext>\n\t\t\t</label>\n\t\t\t${o}\n\t\t\t${n}\n\t\t\t<div class="del-opt-prompt">${p.tips[13]}</div>\n\t\t`;
                      return { htmlText: r, selVal: i };
                    })(g);
                    v.html(i).removeClass("haslock"),
                      c("#setting_option_authentication").on("change", function () {
                        let e = c(this).prop("checked");
                        e ? (v.addClass("check"), j(e)) : (v.removeClass("check"), j(e));
                      }),
                      c("#sel_for_authentication").on("change", function () {
                        ae(c(this).val(), !0);
                      }),
                      (function (e, t, o) {
                        let i = c("#setting_option_authentication");
                        e > -1
                          ? ((sel_for_authentication.value = e), c("#sel_for_authentication").trigger("change"))
                          : v.find(".domain-info-field").length && ae(0, !0);
                        i.prop("checked", o), i.trigger("change"), t.locked && te(c(".authentication > label"), !0);
                        if (!g.length) {
                          i.prop("checked", !1), i.prop("disabled", !0), i.parent().addClass("nooption");
                          let e = new Date().getTime();
                          c("body").on("scroll", function (t) {
                            let o = new Date().getTime();
                            o - e > 1e3 && (ne(), (e = o));
                          });
                        }
                      })(n, t, o);
                  } else v.html("").hide(), b.html("").hide(), w.html("").hide();
                })(t),
                Q(t));
          }
          async function B(e, t, o, n) {
            if ((K(c(".security-box")), y)) {
              let a = await i.Z.getWaitingRoom2(t),
                l = a.value,
                r = a.disabled,
                s = "manu" === a.childParams.options.value,
                u = a.childParams.options.disabled;
              !e.security3c1 ||
                o ||
                n ||
                (l && s) ||
                (r || (u && !s)
                  ? G(p.tips[39], c(".security-box"), !0)
                  : (r || c("#setting_option_waitingroom2").prop("checked", !0).trigger("change"),
                    u || c("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                    X(1, c(".waitingroom2"))));
            } else {
              let { wrEnable: i, wrLocked: a } = N(e, t);
              !e.security3c1 ||
                o ||
                n ||
                i ||
                (a
                  ? G(p.errors[21], c(".security-box"), !1)
                  : (c("#setting_option_waitingroom").prop("checked", !0), X(1, c(".waitingroom"))));
            }
          }
          async function J(e, t) {
            let o = await i.Z.getWaitingRoom2(e);
            if (o && o.show) {
              if (o.disabled && !o.value) return void c(".security-box .waitingroom2").hide();
              if ((c(".security-box .waitingroom2").show(), !t)) {
                let e = await i.Z.getMySettingUrl();
                c(".wr2Tip").attr(
                  "info",
                  `<div>The options available here depend on your waiting room web settings for how participants are admitted.</div><div style="margin-top: 8px;">You can find enhanced settings for waiting room and join before host in the web settings portal. <a href="${e}" target="_blank">Go to Setting</a></div>`
                );
              }
              let e = o.childParams.auto,
                n = o.childParams.manu,
                a = o.childParams.options;
              c("#auto_prior_start").html(H(e.dataOptions)),
                c("#manu_prior_start").html(H(n.dataOptions)),
                t ||
                  (function () {
                    let e = c(".jbh-moved-alert");
                    e.on("click", "close", function (t) {
                      t.stopPropagation(), e.remove();
                    }),
                      e.on("click", ".description a", function (e) {
                        e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: c(this).attr("href") });
                      }),
                      c(".waitingroom2 .wr2Tip").on("click", "a", function (e) {
                        e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: c(this).attr("href") });
                      });
                    let t = c(".waitingroom2");
                    c("#setting_option_waitingroom2").on("change", async function () {
                      c(this).prop("checked") || !1 ? t.addClass("beencheck") : t.removeClass("beencheck"),
                        _ && "pmi" === c("[name=meeting_type]:checked").val() && (await I()),
                        U();
                    }),
                      c("[name=option_waitingroom2]").on("change", async function () {
                        _ && "pmi" === c("[name=meeting_type]:checked").val() && (await I()), U();
                      });
                  })(),
                o.disabled ? te(c(".waitingroom2 > .checkbox-inline"), !0) : te(c(".waitingroom2 > .checkbox-inline"), !1),
                c("#setting_option_waitingroom2").prop("disabled", !0),
                c(".waitingroom2 .radio-inline").find("input").prop("disabled", !0),
                c("#manu_prior_start").prop("disabled", !0),
                c("#auto_prior_start").prop("disabled", !0),
                c("#setting_option_waitingroom2").prop({ checked: o.value }),
                "auto" === a.value
                  ? c("#setting_option_auto").prop({ checked: !0 }).trigger("change")
                  : "manu" === a.value && c("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                c("#auto_prior_start").val(e.value),
                null === n.value || -100 === n.value ? c("#manu_prior_start").remove() : c("#manu_prior_start").val(n.value),
                c("#setting_option_waitingroom2").trigger("change");
              let l = a.dataOptions || [],
                r = "Everyone is manually admitted",
                s = "Everyone is automatically admitted";
              for (let e = 0; e < l.length; e++)
                "auto" === l[e].id && l[e].label && (s = l[e].label), "manu" === l[e].id && l[e].label && (r = l[e].label);
              c("#setting_option_auto").next().text(s), c("#setting_option_manu").next().text(r);
            } else c(".security-box .waitingroom2").hide();
          }
          async function U() {
            if ((await r.Z.getSecurity()).security3c1) {
              let e = c(".security-box"),
                t = c("#setting_option_needpassword").prop("checked") || !1,
                o = c("#setting_option_authentication").prop("checked") || !1;
              if (y) {
                let i = c("#setting_option_waitingroom2").prop("checked") || !1,
                  n = c("#setting_option_manu").prop("checked") || !1;
                (i && n) || t || o ? K(e) : G(p.tips[39], e, !0);
              } else {
                c("#setting_option_waitingroom").prop("checked") || !1 || t || o ? K(e) : G(p.errors[20], e, !0);
              }
            }
          }
          function H(e) {
            if (Array.isArray(e) && e.length) {
              let t = "";
              for (let o = 0; o < e.length; o++) t += `\n\t\t\t\t\t<option value="${$(e[o].id)}">${$(e[o].label)}</option>\n\t\t\t\t`;
              return t;
            }
            return "";
          }
          function N(e, t) {
            let o = !1,
              i = !1;
            return (
              t
                ? ((o = e.pmi.waitingroom.defaultVal), (i = e.pmi.waitingroom.locked))
                : ((o = e.normal.waitingroom.defaultVal), (i = e.normal.waitingroom.locked)),
              { wrEnable: o, wrLocked: i }
            );
          }
          function Y() {
            if (!c(".waitingroom2").is(":visible")) return !0;
            if (!c("#setting_option_waitingroom2").prop("checked")) return !0;
            let e = c("[name=option_waitingroom2]:checked").val();
            if ("auto" === e) {
              if ("-1" !== c("#auto_prior_start").val()) return !0;
            } else if ("manu" === e && c("#manu_prior_start").is(":visible")) {
              if ("-1" !== c("#manu_prior_start").val()) return !0;
            }
            return !1;
          }
          function G(e, t, o) {
            if (e && t) {
              let i = t.find(".error-msg");
              i.html(e).addClass("showme"), o ? i.attr("role", "alert") : i.attr("role", null);
            }
          }
          function K(e) {
            if (e) {
              let t = e.find(".error-msg");
              t.hasClass("showme") && t.html("").removeClass("showme").attr("role", null);
            }
          }
          async function Q(e) {
            let t = c("#setting_option_needpassword"),
              o = c("#setting_option_waitingroom"),
              n = c("#setting_option_authentication");
            t.is(":visible") && !t.prop("disabled") && t.prop("disabled", !0),
              o.is(":visible") && !o.prop("disabled") && o.prop("disabled", !0),
              d.prop("disabled") || d.prop("disabled", !0),
              n.is(":visible") && !n.prop("disabled") && n.prop("disabled", !0);
            let a = c("#sel_for_authentication");
            a.is(":visible") && !a.prop("disabled") && a.prop("disabled", !0);
            let l = c(".security-box .web-setting-btn");
            if (l.length) {
              let t = "";
              (t = e ? await i.Z.getMyPMISettingUrl() : await i.Z.getMySettingUrl()), l.attr("url", t);
            }
          }
          async function X(e, t) {
            let o = await i.Z.getShowSecurityTip();
            if (o["type" + e]) {
              let n = e + 29;
              t.append(`<div class="security-tip"><close></close>${p.tips[n]}<div class="pop-arrow"></div></div>`),
                (o["type" + e] = !1),
                i.Z.setShowSecurityTip(o);
              let a = c(".security-tip");
              a.on("click", "close", function (e) {
                e.stopPropagation(), a.remove();
              }),
                setTimeout(function () {
                  c("[name=meeting_type]").one("change", function (e) {
                    a.remove();
                  });
                }, 200);
            }
          }
          async function ee(e, t, o, i, n) {
            let a = !1,
              l = !1,
              s = !1,
              p = await r.Z.getAuthentication();
            if (o) {
              let e = t.pmi.passcode;
              e.default_jbh
                ? (i && (a = !0), i && (l = e.locked))
                : e.default_all
                ? ((a = !0), (l = e.locked))
                : ((a = !1), (l = e.locked)),
                (s = p.pmi.defaultVal);
              let o = e.value;
              o && d.val(o);
            } else (a = t.normal.passcode.defaultVal), (l = t.normal.passcode.locked), (s = p.normal.defaultVal);
            c("#setting_option_needpassword").prop("checked", a), te(c(".requirepwd > label"), !!l), n || (await B(t, o, a, s)), S();
          }
          function te(e, t) {
            t
              ? e.closest(".control-row").hasClass("haslock") ||
                (e.append(h).closest(".control-row").addClass("haslock"), e.find("input").prop("disabled", !0))
              : (e.find(".locked_by_admin").remove(),
                e.closest(".control-row").removeClass("haslock"),
                e.find("input").prop("disabled", !1));
          }
          var oe,
            ie = c(".authentication .exception-message");
          function ne() {
            oe && (clearTimeout(oe), (oe = null), ce(ie));
          }
          function ae(e, t) {
            let o = g[e];
            if ((v.find(".name").text(": " + o.name), "1" == o.type)) {
              let e,
                t = o.domain || "";
              e = t.length > 57 ? t.slice(0, 56) + "..." : t;
              let i = `\n\t\t\t<span class="domain-info-text">${$(e)}</span>\n\t\t\t`;
              v.find(".domain-info-field").html(i).addClass("eyeable");
            } else v.find(".domain-info-field").html("").removeClass("eyeable");
            if (t) {
              let t = g[f];
              t && t.del ? v.find(".del-opt-prompt").show() : v.find(".del-opt-prompt").hide(), (f = e);
            }
          }
          function le(e, t) {
            e.length && (e.parent().addClass("has-error"), e.focus().next().text(t).show());
          }
          function re(e) {
            e.length && (e.parent().removeClass("has-error"), e.next().text("").hide());
          }
          function se(e) {
            e.css({ display: "block" }),
              e.timeout && (clearTimeout(e.timeout), (e.timeout = null)),
              (e.timeout = setTimeout(function () {
                e.addClass("show"), (e.timeout = null);
              }, 10));
          }
          function ce(e) {
            e.removeClass("show"),
              e.timeout && (clearTimeout(e.timeout), (e.timeout = null)),
              (e.timeout = setTimeout(function () {
                e.css({ display: "none" }), (e.timeout = null);
              }, 150));
          }
          function pe() {
            if (x?.isVisible) {
              let { id: e, extData: t } = x.getSelectedResult(),
                o = t?.pmi;
              "0" !== o ? ue() : de(e);
            } else {
              "0" !== (n.PMI || "0") ? ue() : de("me");
            }
          }
          function ue() {
            let e = c(".meetingtype");
            e.is(":visible") || (e.removeClass("hideme"), c(".disable-pmi-msg").removeClass("showme"));
          }
          function de(e) {
            let t = c(".meetingtype");
            t.is(":visible") &&
              (c("#meeting_type_normal").prop("checked", !0), c("#meeting_type_normal").trigger("change"), t.addClass("hideme")),
              (async function (e) {
                (await r.Z.getShowDisablePmiMsg())[e]
                  ? (function () {
                      if (!c(".disable-pmi-msg").length) {
                        c(".tab-pane.first-tab").prepend(
                          '<div class="disable-pmi-msg"><div>Your Personal Meeting ID is disabled<close></close></div></div>'
                        );
                        let e = c(".disable-pmi-msg");
                        e.find("close").on("click", async function (t) {
                          t.stopPropagation(), e.removeClass("showme");
                          let o = await r.Z.getShowDisablePmiMsg();
                          (o[
                            (function () {
                              if (x?.isVisible) {
                                let { id: e, extData: t } = x.getSelectedResult();
                                return e;
                              }
                              return "me";
                            })()
                          ] = !1),
                            r.Z.setShowDisablePmiMsg(o);
                        });
                      }
                      c(".disable-pmi-msg").addClass("showme");
                    })()
                  : c(".disable-pmi-msg").removeClass("showme");
              })(e);
          }
          function me(e) {
            5 != p.envIndex && console.log(e);
          }
        });
      }
    },
    o = {};
  function i(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var a = (o[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, i), a.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, o, n, a) => {
      if (!o) {
        var l = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [o, n, a] = e[p], r = !0, s = 0; s < o.length; s++)
            (!1 & a || l >= a) && Object.keys(i.O).every((e) => i.O[e](o[s])) ? o.splice(s--, 1) : ((r = !1), a < l && (l = a));
          if (r) {
            e.splice(p--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > a; p--) e[p] = e[p - 1];
      e[p] = [o, n, a];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var o in t) i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.j = 798),
    (() => {
      var e = { 798: 0, 374: 0, 532: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var n,
            a,
            [l, r, s] = o,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (n in r) i.o(r, n) && (i.m[n] = r[n]);
            if (s) var p = s(i);
          }
          for (t && t(o); c < l.length; c++) (a = l[c]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return i.O(p);
        },
        o = (self.webpackChunkextension = self.webpackChunkextension || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var n = i.O(void 0, [374, 532, 647, 493], () => i(630));
  n = i.O(n);
})();
