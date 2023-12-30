(() => {
  "use strict";
  var e,
    t = {
      133: () => {},
      982: () => {},
      630: (e, t, o) => {
        var i = o(351),
          n = o(266),
          a = o(577),
          l = o(893),
          r = o(755),
          s = o(915),
          c = o(812);
        r(function () {
          let e,
            t,
            o,
            p = null,
            u = r("#meeting_pwd"),
            d = u.parents(".requirepwd"),
            m = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${s.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`,
            h = !1,
            _ = null,
            g = -1,
            f = r(".control-row.authentication"),
            v = r(".control-row.watermark"),
            b = r(".control-row.audiomark"),
            w = null,
            k = null,
            y = null,
            C = null;
          async function x() {
            if (!(await a.Z.hasZoomRqToken()))
              return (
                i.Z.popupLogin(!0),
                void (function () {
                  r(".content-header .topnav").remove();
                  let e = `\n\t\t\t<div class="tip-cont">${s.tips[34]}</div>\n\t\t`;
                  r("#content").html(e), r(".content-footer").remove();
                })()
              );
            if (p.no_meeting_license_user)
              !(function () {
                let e = `\n\t\t\t<p>${s.tips[32]}</p>\n\t\t`;
                r(".content-header").html(e),
                  (e = `\n\t\t\t<div class="tip-cont">${s.tips[33]}</div>\n\t\t`),
                  r("#content").html(e),
                  r(".content-footer").remove();
              })();
            else {
              try {
                h = !!p.security.pmi.passcode.default_jbh;
              } catch (e) {}
              !(function () {
                r(".meetingtype .pmi_txt1").html(s.tips[7]),
                  r(".meetingtype .pmi_txt2").html(s.tips[8]),
                  r("#locktip").html(s.tips[1]),
                  r(".encryption-box .zm-alert .description").html(s.tips[23]),
                  r(".encryption-box .e2eTip.enhanced").attr("info", s.tips[24]),
                  r(".encryption-box .e2eTip.e2e").attr("info", s.tips[25]);
                let e = r(".security-box");
                e.find(".warning").html(s.tips[20] + '<div class="web-setting-btn">Change Default Settings</div>'),
                  p.embedPasscode
                    ? (e.find(".usability-desc.pwd").html(s.tips[26]), e.find(".pwdTip").attr("info", s.tips[29]))
                    : (e.find(".usability-desc.pwd").html(s.tips[27]), e.find(".pwdTip").remove());
                e.find(".usability-desc.wr").html(s.tips[28]),
                  5 != s.envIndex &&
                    r(".content-footer .controls").append(
                      '\n\t\t\t\t<button id="setting_refresh" class="btn btn-refresh" title="Click the button to synchronize the latest Settings.">\n\t\t\t\t\t<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.51175 0.333344C3.43539 0.333344 0.110196 3.6594 0.00252797 7.79301C-0.106392 12.0135 3.31895 15.636 7.45541 15.6667H7.51175C9.58999 15.6667 11.4679 14.8106 12.82 13.4178C13.3571 12.8709 13.8166 12.2371 14.1772 11.5433C14.3437 11.2251 14.1997 10.8316 13.8717 10.6961L13.8241 10.6757C13.749 10.6437 13.6714 10.6297 13.595 10.6297C13.3797 10.6297 13.1731 10.7472 13.0692 10.953C12.775 11.5343 12.3931 12.0646 11.9437 12.5233C10.8044 13.6733 9.23945 14.3889 7.51175 14.3889C3.91489 14.3889 1.02412 11.2877 1.267 7.56301C1.47107 4.43884 3.92365 1.89351 6.98217 1.63412C7.1612 1.61879 7.33648 1.61112 7.51175 1.61112C9.27701 1.61112 10.8682 2.36501 12.0075 3.55334L13.8592 5.44445H11.6182C11.2588 5.44445 10.9797 5.73834 10.9922 6.11018C11.006 6.45645 11.3064 6.72223 11.647 6.72223H15.374C15.4504 6.72223 15.5368 6.70945 15.6131 6.67112C15.6495 6.65834 15.687 6.63279 15.7258 6.62001C15.7634 6.58168 15.7872 6.55612 15.8122 6.53057C15.8761 6.47945 15.9124 6.41557 15.9499 6.3389V6.32612C15.9887 6.24945 16 6.16001 16 6.08334V2.25001C16 1.89223 15.7133 1.61112 15.374 1.61112C15.3227 1.61112 15.2714 1.61751 15.2188 1.63157C14.9371 1.70312 14.748 1.97912 14.748 2.27684V4.55001C14.748 4.55001 12.7574 2.51834 12.646 2.41612C11.3052 1.12557 9.48984 0.333344 7.51175 0.333344Z" fill="#747487"/></svg>\n\t\t\t\t\t<span class="sr-only">Refresh Set</span>\n\t\t\t\t</button>\n\t\t\t'
                    );
                t = new n.Z({
                  el: r("#meeting_pwd").get(0),
                  rule: w,
                  blurCallback: function () {
                    !(async function (e) {
                      let n = t.getPassword();
                      if (n === o && r(".requirepwd").hasClass("has-error")) return;
                      if (((o = n), w.enhanceDetectionRule && n))
                        try {
                          let t = await i.Z.remoteCheckPassword(n);
                          F(t.status, t.errorMessage, 1, e);
                        } catch (o) {
                          let { res: i, msg: n, errortype: a } = t.checkRules();
                          F(i, n, a, e);
                        }
                      else {
                        let { res: o, msg: i, errortype: n } = t.checkRules();
                        F(o, i, n, e);
                      }
                    })(1);
                  },
                  startInputCallback: function () {
                    Z(2);
                  },
                  conformRuleCallback: function () {
                    Z(1);
                  }
                });
              })(),
                (function () {
                  r("body").on("click", "a", function (e) {
                    e.preventDefault(), e.stopPropagation();
                  }),
                    r("#setting_option_needpassword").on("change", function () {
                      de("1111111"), j();
                    }),
                    r("#setting_option_requirereg").on("change", function () {
                      de("22222222"),
                        r("#setting_option_requirereg").prop("checked") &&
                          !r("#meeting_type_normal").prop("checked") &&
                          (r("#meeting_type_normal").prop("checked", !0), r("#meeting_type_normal").trigger("change"));
                    });
                  let t = !1;
                  r("[name=meeting_type]").on("change", async function () {
                    de("33333333333");
                    let e = r("#meeting_type_pmi").prop("checked") || !1;
                    e !== t &&
                      (de("333333333 run!!!"),
                      (t = e),
                      r("#meeting_type_pmi").prop("checked")
                        ? (r(".pmi_txt2").show(),
                          r("#setting_option_requirereg").prop("checked", !1).attr("checked", null),
                          r(".requirepwd").addClass("show-input-pwd"),
                          r(".control-row.jbh").addClass("pmi"),
                          r(".dcRegions").addClass("pmi"))
                        : (r(".pmi_txt2").hide(),
                          r(".requirepwd").removeClass("show-input-pwd"),
                          r(".control-row.jbh").removeClass("pmi"),
                          r(".dcRegions").removeClass("pmi")),
                      await I(!0),
                      O());
                  });
                  let o = null;
                  r("#alternative_host").on("keyup", function (e) {
                    return (
                      r(this).val().length > 0
                        ? (o && clearTimeout(o),
                          (o = window.setTimeout(function () {
                            P(), (o = null);
                          }, 500)))
                        : (r("#alternative_host").parent().removeClass("has-error"), r("#alternative_host").next().hide()),
                      !1
                    );
                  }),
                    r(".topnav").on("click", "li[data-tab]", function (e) {
                      P() &&
                        (r(this).hasClass("active") ||
                          (r(".topnav > li").removeClass("active"),
                          r(this).addClass("active"),
                          r(".content-body > form >div.tab-pane").hide(),
                          r(".content-body > form >div." + r(this).data("tab")).show()),
                        e.preventDefault(),
                        e.stopPropagation());
                    }),
                    r("[name=option_pac]").on("change", function () {
                      de("666666666666");
                      var t = parseInt(r(this).val(), 10) - 1;
                      if (e && e.option_pac_enable) {
                        var o = e.acclist[t],
                          i = r(".pac").find(".pac-toll-numbers").empty();
                        r.each(o.toll_numbers, function (e, t) {
                          i.append("<label>" + A(t) + "</label>");
                        }),
                          r(".pac").find(".pac-mtg-number").text(o.meeting_number),
                          o.did_numbers && "" != o.did_numbers
                            ? (r(".pac")
                                .find(".pac-did-numbers")
                                .html("<label>" + A(o.did_numbers) + "</label>"),
                              r(".pac").find(".pac-did-numbers").parent().show())
                            : r(".pac").find(".pac-did-numbers").parent().hide();
                      }
                    });
                  r("#setting_submit").on("click", async function (e) {
                    if ((e.stopPropagation(), await a.Z.hasZoomRqToken())) return M(), !1;
                    i.Z.popupLogin(!0);
                  }),
                    r("#setting_cancel").on("click", function () {
                      return (
                        chrome.tabs.getCurrent(function (e) {
                          chrome.tabs.remove(e.id, function () {});
                        }),
                        !1
                      );
                    }),
                    r("#setting_refresh").on("click", function (e) {
                      e.stopPropagation();
                      let t = r(this);
                      t.hasClass("loading") ||
                        (t.addClass("loading"),
                        t.add("#setting_submit").prop("disabled", !0),
                        (async function () {
                          if (await a.Z.hasZoomRqToken())
                            try {
                              let e = await i.Z.toSyncImmediate();
                              e.status && "object" === c.type(e.result) ? window.location.reload() : (q(), V(s.errors[7], !0));
                            } catch (e) {
                              q(), V(s.errors[7], !0);
                            }
                          else q(), i.Z.popupLogin(!0);
                        })());
                    }),
                    r(":checkbox").on("click", function () {
                      r(this).attr("checked", !r(this).attr("checked"));
                    }),
                    r(":radio").on("click", function () {
                      var e = r(this).attr("name");
                      r("[name=" + e + "]")
                        .not(this)
                        .attr("checked", !1),
                        r(this).attr("checked", !0);
                    }),
                    r(".security-box .web-setting-btn").on("click", function (e) {
                      e.stopPropagation(), chrome.tabs.create({ url: r(this).attr("url") });
                    });
                  let n = !1;
                  r("[name=option_encryption]").on("change", function (e) {
                    de("77777777777777");
                    let t = "1" === this.value,
                      o = t !== n;
                    o &&
                      (de("77777777777777 run!!!"),
                      (n = t),
                      (function (e) {
                        let t = r(".encryption-box");
                        e
                          ? (t.addClass("on-e2e"),
                            (function () {
                              r(".audio").addClass("on-e2e-state"), r("[name=option_audio][value=voip]").prop({ checked: !0 });
                              let e = r(".jbh");
                              e.length && e.addClass("on-e2e-state");
                            })())
                          : (t.removeClass("on-e2e"),
                            (async function () {
                              r("[name=meeting_type]:checked").val();
                              let e = r(".audio");
                              if (e.hasClass("on-e2e-state")) {
                                e.removeClass("on-e2e-state");
                                let t = (await a.Z.getValue("zoom_config_audio")) || "both";
                                r("[name=option_audio][value=" + t + "]").prop({ checked: !0 });
                              }
                              let t = r(".jbh");
                              t.length && t.removeClass("on-e2e-state");
                            })());
                      })(t)),
                      (o || t) &&
                        (async function (e) {
                          if (e) {
                            let e = r(".waitingroom2");
                            if (e.length) {
                              e.addClass("on-e2e-state"),
                                r("#setting_option_waitingroom2").prop("checked", !0).prop("disabled", !0),
                                r("#auto_prior_start").val(-1).prop("disabled", !0).css("opacity", 0.5);
                              let t = r("#manu_prior_start");
                              t.length && t.val(-1).prop("disabled", !0).css("opacity", 0.5),
                                r("#setting_option_waitingroom2").trigger("change");
                            }
                            let t = r(".jbh-moved-alert");
                            t.length && t.hide();
                          } else {
                            let e = "pmi" === r("[name=meeting_type]:checked").val(),
                              t = r(".waitingroom2");
                            if (t.length) {
                              t.removeClass("on-e2e-state"),
                                await B(e, !0),
                                W(
                                  await a.Z.getSecurity(),
                                  e,
                                  !!r("#setting_option_needpassword").prop("checked"),
                                  r("#setting_option_authentication").is(":visible") && r("#setting_option_authentication").prop("checked")
                                );
                            }
                            let o = r(".jbh-moved-alert");
                            o.length && o.show();
                          }
                        })(t);
                  });
                  let l = r(".encryption-box");
                  l.on("click", "close", function (e) {
                    e.stopPropagation(), r(this).parents(".zm-alert").remove();
                  }),
                    l.on("click", ".description a", function (e) {
                      e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: r(this).attr("href") });
                    }),
                    r(".zoom-info-tip")
                      .on("mouseenter click", function (e) {
                        E(r(this), !0);
                      })
                      .on("mouseleave", function (e) {
                        E(r(this), !1);
                      }),
                    r(".zoom-info-tip").on("click", function (e) {
                      E(r(this), !0, 0);
                    });
                })(),
                (async function () {
                  (p && p.audiopac) || r(".content-header > .topnav").hide();
                  var t;
                  p && (t = p.lockedoptions);
                  await (async function () {
                    if (!p) return;
                    let e,
                      t = await a.Z.getValue("zoom_config_schedule_for");
                    p.assistants && (e = p.assistants);
                    if (e && e.length > 0) {
                      let o = [{ id: "me", label: "Myself", extData: { email: p.email || "", pmi: p.PMI || "0" } }];
                      r.each(e, function (e, t) {
                        "000-000-000" === t.roomid && (t.roomid = "0"),
                          o.push({ id: t.id, label: t.name, extData: { email: t.email || "", pmi: t.roomid || "0" } });
                      }),
                        (C = new l.Z({
                          el: r(".schedule .schedule-for-cont").get(0),
                          defaultValue: t || "me",
                          dataList: o,
                          jquery: r,
                          ariaLabel: "select meeting host",
                          scrollContBottomIndent: 70,
                          multiParamResults: !0,
                          changeCallback: function () {
                            let { id: e, extData: t } = C.getSelectedResult(),
                              o = t?.pmi;
                            "0" !== o && "000-000-000" !== o
                              ? r(".meetingtype .pmi_number").text(o)
                              : r(".meetingtype .pmi_number").text(""),
                              ce();
                            let i = r(".security-box .web-setting-btn");
                            "me" !== e ? i.hide() : i.show();
                          }
                        }));
                    } else r(".schedule").hide(), "0" !== p.PMI && r(".meetingtype .pmi_number").text(p.PMI);
                    ce();
                  })();
                  var o = !!(await a.Z.getValue("zoom_config_pmi"));
                  r("[name=meeting_type][value=" + (o ? "pmi" : "onetime") + "]").prop({ checked: !0 }),
                    p &&
                      p.scheduleDefaultLockOption &&
                      "true" === p.scheduleDefaultLockOption.usePMISchedule_locked &&
                      ee(r(".meetingtype .control-row"), !0);
                  var n = (await a.Z.getValue("zoom_config_video_host")) || "on",
                    s = (await a.Z.getValue("zoom_config_video_participants")) || "on";
                  r("[name=option_video_host][value=" + n + "]").prop({ checked: !0 }),
                    r("[name=option_video_participants][value=" + s + "]").prop({ checked: !0 }),
                    t && t.hostVideo_locked && ee(r(".video .video-controls-label:first"), !0);
                  t && t.pVideo_locked && ee(r(".video .video-controls-label:last"), !0);
                  let c = await a.Z.getValue("zoom_config_audio");
                  var u = c || "both";
                  p &&
                    !p.option_has3rd &&
                    (r(".audio>div.controls #option_audio_3rd").parent().remove(),
                    "other" == u && (u = "both"),
                    r("#option_audio_both").next().text("Both"));
                  p && p.option_noboth && (r(".audio>div.controls #option_audio_both").parent().remove(), "both" == u && (u = "telephony"));
                  r("[name=option_audio][value=" + u + "]").prop({ checked: !0 }), u != c && a.Z.saveValue("zoom_config_audio", u);
                  t && t.audio_locked && ee(r(".audio .controls[role=group]"), !0);
                  await (async function () {
                    if (k) r(".control-row.jbh").remove();
                    else {
                      r("#setting_option_jbh").on("change", function () {
                        de("44444444444"),
                          "pmi" === r("[name=meeting_type]:checked").val() && h && I(!0),
                          y && y.changeLockState(!r(this).prop("checked"));
                      });
                      let e = !!(await a.Z.getValue("zoom_config_jbh"));
                      r("#setting_option_jbh").prop("checked", e);
                      let t = p.lockedoptions && p.lockedoptions.jbh_locked;
                      if ((t && ee(r(".control-row.jbh"), !0), p && p.enableJBHPriorStartMeeting)) {
                        let o = await i.Z.getJBHPriorStartMeetingList(),
                          n = [];
                        r.each(o, function (e, t) {
                          n.push({ id: e, label: t });
                        });
                        let a = await i.Z.getJbhTimeMinutes();
                        (y = new l.Z({
                          el: r(".jbh .JBH-prior-start-cont").get(0),
                          defaultValue: a || "",
                          dataList: n,
                          lockState: t,
                          styleType: 2,
                          jquery: r,
                          ariaLabel: "select time",
                          scrollContBottomIndent: 70,
                          changeCallback: function () {}
                        })),
                          r(".control-row.jbh").addClass("show-prior"),
                          e || y.changeLockState(!0);
                      }
                    }
                  })(),
                    await I(),
                    await (async function () {
                      if (!p) return;
                      let e = p.dcOptions;
                      if (e.support && !e.locked) {
                        let t = await a.Z.getEnableDC(),
                          o = r(".dcRegions .dc-group"),
                          i = r("#setting_option_enableDC");
                        if (e.options.length) {
                          let t = (function (e) {
                            let t = "",
                              o = e.length - 1;
                            return (
                              r.each(e, function (e, i) {
                                e % 2 == 0 && (t += '<div class="tablerow">'),
                                  (t += `\n\t\t\t\t<div class="tablecell">\n\t\t\t\t\t<label><input type="checkbox" name="option_dc_region" dcabbr="${A(
                                    i.abbr
                                  )}"><span>${A(i.name)}</span></label>\n\t\t\t\t</div>\n\t\t\t`),
                                  (e % 2 == 0 && e !== o) || (t += "</div>");
                              }),
                              t
                            );
                          })(e.options);
                          o.html(t),
                            (function () {
                              let e = r(".dcRegions"),
                                t = r(".dcRegions .dc-group"),
                                o = r("#setting_option_enableDC");
                              t.find("input").on("change", function (o) {
                                e.hasClass("has-error") && le(t);
                              }),
                                o.on("change", function (o) {
                                  r(this).prop("checked") ? e.addClass("showSubOptions") : e.removeClass("showSubOptions"),
                                    e.hasClass("has-error") && le(t);
                                });
                            })();
                        }
                        t &&
                          r.each(t, function (e, t) {
                            o.find("[dcabbr=" + e + "]").prop("checked", t), t && i.prop("checked", !0).trigger("change");
                          });
                      } else r(".dcRegions").remove();
                    })();
                  var d = !!(await a.Z.getValue("zoom_config_mute_upon_entry"));
                  r("#setting_option_uponentry").prop("checked", d), t && t.mute_locked && ee(r(".control-row.entry"), !0);
                  if (p && p.show_unmute_all) {
                    let e = !!(await a.Z.getValue("enable_unmute_all"));
                    r("#unmute_all").prop("checked", e);
                  } else r(".control-row.unmute_all").remove();
                  let m = await a.Z.getWatermark();
                  m.support
                    ? (r("#setting_option_watermark").prop("checked", m.defaultVal),
                      m.locked && (r("#setting_option_watermark").prop("checked", !0), ee(r(".control-row.watermark"), !0)))
                    : r("#setting_option_watermark").parents("div.control-row").remove();
                  let _ = await a.Z.getAudioWatermark();
                  _.support
                    ? (r("#setting_option_audiomark").prop("checked", _.defaultVal),
                      _.locked && (r("#setting_option_audiomark").prop("checked", !0), ee(r(".control-row.audiomark"), !0)))
                    : r("#setting_option_audiomark").parents("div.control-row").remove();
                  if (p && p.option_haspublic_cal) {
                    var g = !!(await a.Z.getValue("zoom_config_public_cal"));
                    r("#setting_option_public_cal").prop("checked", g), t && t.public_cal_locked && ee(r(".control-row.pubcalendar"), !0);
                  } else r("#setting_option_public_cal").parents("div.control-row").remove();
                  var f = !0;
                  let v = await a.Z.getValue("zoom_config_joinurl");
                  null != v && (f = !!v);
                  r("#setting_option_joinurl").prop("checked", f),
                    p && !0 === p.option_enable_reg
                      ? p.scheduleDefaultLockOption && "true" === p.scheduleDefaultLockOption.usePMISchedule_locked
                        ? r("#setting_option_requirereg").prop({ disabled: !0 })
                        : !0 === (await a.Z.getValue("zoom_option_require_reg")) &&
                          r("#setting_option_requirereg").prop({ checked: !0 }).attr("checked", "checked").trigger("change")
                      : r(".requirereg").hide();
                  p
                    ? void 0 === p.alt_hosts
                      ? r(".altnativehost").hide()
                      : r("#alternative_host").val((await a.Z.getValue("zoom_config_althost")) || "")
                    : r(".altnativehost").hide();
                  r("#fixed_popup").prop("checked", !!(await a.Z.getValue("zoom_config_fixed_popup"))), !1;
                  var b = parseInt((await a.Z.getValue("zoom_config_pacindex")) || "1", 10);
                  (isNaN(b) || b < 1 || b > 2) && ((b = 1), a.Z.saveValue("zoom_config_pacindex", "1"));
                  p && p.audiopac && (e = p.audiopac);
                  if (e && e.option_pac_enable) {
                    var w = b - 1;
                    e.acclist.length < 2 && (r("#option_pac_acc2").parent().remove(), (w = 0), (b = 1)),
                      r("[name=option_pac][value=" + b + "]").prop("checked", !0);
                    var x = e.acclist[w],
                      F = r(".pac").find(".pac-toll-numbers");
                    r.each(x.toll_numbers, function (e, t) {
                      F.append("<label>" + A(t) + "</label>");
                    }),
                      r(".pac").find(".pac-mtg-number").text(x.meeting_number),
                      x.did_numbers && "" != x.did_numbers
                        ? r(".pac")
                            .find(".pac-did-numbers")
                            .html("<label>" + A(x.did_numbers) + "</label>")
                        : r(".pac").find(".pac-did-numbers").parent().hide();
                  }
                  (await a.Z.getValue("zoom_config_fte")) && parseInt(await a.Z.getValue("zoom_options_tabid")) > 0
                    ? (r("#setting_submit").text("Save and Continue"), r("#setting_cancel").hide(), r("#setting_refresh").hide())
                    : (r("#setting_submit").text("Save"), r("#setting_cancel").show(), r("#setting_refresh").show());
                  r("#meeting_type_normal").trigger("change"), O();
                })();
            }
          }
          function F(e, t, o, i) {
            e || !t || (1 === i && 2 === o)
              ? Z()
              : (function (e, t) {
                  d.addClass("has-error").attr("errortype", t);
                  let o = d.find(".has-error");
                  o.text(e).addClass("showme"), 1 === t ? o.attr("role", "alert") : o.attr("role", null);
                })(t, o),
              2 === i && M(e);
          }
          function Z(e) {
            d.hasClass("has-error") &&
              ((e && e != d.attr("errortype")) ||
                (d.removeClass("has-error").attr("errortype", null), d.find(".has-error").removeClass("showme").attr("role", null)));
          }
          var D;
          function V(e, t, o, i) {
            var n = r("#content_success_msg");
            t ? n.removeClass("alert-success").addClass("alert-danger") : n.addClass("alert-success").removeClass("alert-danger"),
              (i = i || 5e3),
              (o = o || n).html(e);
            var a = (parseInt(r(document.body).outerWidth(!0)) - n.outerWidth(!0)) / 2;
            o === n && o.css("left", a),
              D && window.clearTimeout(D),
              o.fadeIn("slow"),
              (D = window.setTimeout(function () {
                o.fadeOut("slow");
              }, i));
          }
          function z(e) {
            e ? (v.show(), b.show()) : (v.hide(), b.hide());
          }
          function j() {
            r("#setting_option_needpassword").prop("checked") || !1
              ? r(".requirepwd").addClass("sel")
              : r(".requirepwd").removeClass("sel");
          }
          function S(e) {
            let t = "";
            return (
              r.each(r.trim(e).split(/[;,\n\r]+/), (e, o) => {
                e > 0 && (t += ","), (t += r.trim(o));
              }),
              t
            );
          }
          function P() {
            var e = !0;
            return (
              r("#alternative_host").is(":visible") &&
                "" != r("#alternative_host").val() &&
                (!(function (e) {
                  var t = r.trim(e).split(/[;,\n\r]+/);
                  if ("" == t) return !0;
                  let o = !0;
                  for (var i in t) {
                    var n = r.trim(t[i]);
                    o = o && R(n);
                  }
                  return !0 === o;
                })(r("#alternative_host").val())
                  ? (r("#alternative_host").parent().addClass("has-error"),
                    r("#alternative_host").trigger("focus").next().show(),
                    r("#alternative_host").next().text(s.tips[0]),
                    (e = !1))
                  : (r("#alternative_host").parent().removeClass("has-error"), r("#alternative_host").next().hide())),
              e
            );
          }
          !(async function () {
            (p = await a.Z.getZoomData()), (w = await i.Z.getMeetingPwdSettingsMap()), (k = await a.Z.getWrOp());
            try {
              let e = setTimeout(() => {
                V("Updating Settings data online...", !1, null, 5e3);
              }, 50);
              (await i.Z.checkSyncFoVersionOrTime())
                ? (V("Network update data successfully!", !1, null, 2e3),
                  setTimeout(async function () {
                    (p = await a.Z.getZoomData()), (k = await a.Z.getWrOp()), x();
                  }, 50))
                : (clearTimeout(e), x());
            } catch (e) {
              V("Network update data failed!", !0, null, 2e3), x();
            }
          })();
          let T = null;
          function E(e, t, o = 800) {
            e &&
              (T && (clearTimeout(T), (T = null)),
              (T = t
                ? setTimeout(function () {
                    e.hasClass("updateDom") ||
                      (function (e) {
                        let t = e.attr("info");
                        if (t) {
                          let o = `\n\t\t\t\t<div class="zoom-info-tip-pop">\n\t\t\t\t\t<div class="content">${t}</div>\n\t\t\t\t\t<div class="pop-arrow"></div>\n\t\t\t\t</div>`;
                          e.html(o).attr("info", null).addClass("updateDom");
                        }
                      })(e),
                      re(e.find(".zoom-info-tip-pop")),
                      (function (e) {
                        let t = e.find(".zoom-info-tip-pop"),
                          o = e.offset();
                        o.top - 100 < t.height() ? t.addClass("turn") : t.removeClass("turn");
                      })(e),
                      (T = null);
                  }, o)
                : setTimeout(function () {
                    e.hasClass("updateDom") && se(e.find(".zoom-info-tip-pop")), (T = null);
                  }, 200)));
          }
          async function O() {
            let e = await a.Z.getE2ee();
            if (e.support) {
              let t;
              (t = "pmi" === r("[name=meeting_type]:checked").val() ? e.pmiEnable : e.normalEnable),
                t
                  ? r("#setting_option_e2e").prop("checked", !0).trigger("change")
                  : r("#setting_option_enhanced").prop("checked", !0).trigger("change"),
                e.locked && (r("#setting_option_enhanced").parent().remove(), ee(r(".encryption-option > label"), !0));
            } else r(".encryption-box").remove();
          }
          async function M(e) {
            let t = {};
            r(".topnav").is(":visible") && r(".topnav li:last-child").hasClass("active") && r(".topnav li:first-child").trigger("click");
            let o = "pmi" === r("[name=meeting_type]:checked").val(),
              n = r("#unmute_all").is(":visible") && r("#unmute_all").prop("checked"),
              l = !1,
              c = await a.Z.getE2ee();
            r(".encryption-box").length &&
              ((l = r("#setting_option_e2e").prop("checked")), o ? (c.pmiEnable = l) : (c.normalEnable = l), a.Z.setE2ee(c)),
              (t.option_e2ee_normal = c.normalEnable),
              (t.option_e2ee_pmi = c.pmiEnable);
            let u,
              d = p && p.lockedoptions && p.lockedoptions.audio_locked;
            l && d
              ? (u = (await a.Z.getValue("zoom_config_audio")) || "both")
              : ((u = r("[name=option_audio]:checked").val()), a.Z.saveValue("zoom_config_audio", u));
            let m = (function () {
              let e = "";
              if (C?.isVisible) {
                let { id: t, extData: o } = C.getSelectedResult();
                "me" !== t && (e = t);
              }
              return e;
            })();
            a.Z.saveValue("zoom_config_schedule_for", m),
              a.Z.saveValue("zoom_config_pmi", o),
              a.Z.saveValue("zoom_config_mute_upon_entry", r("#setting_option_uponentry").prop("checked")),
              a.Z.saveValue("enable_unmute_all", n),
              a.Z.saveValue(
                "zoom_config_public_cal",
                r("#setting_option_public_cal").is(":visible") && r("#setting_option_public_cal").prop("checked")
              ),
              a.Z.saveValue("zoom_config_video_host", r("[name=option_video_host]:checked").val()),
              a.Z.saveValue("zoom_config_video_participants", r("[name=option_video_participants]:checked").val()),
              a.Z.saveValue("zoom_config_pacindex", r("[name=option_pac]:checked").val() || "1"),
              a.Z.saveValue("zoom_config_joinurl", r("#setting_option_joinurl").prop("checked")),
              a.Z.saveValue("zoom_option_require_reg", r("#setting_option_requirereg").prop("checked"));
            let h = r("#setting_option_watermark").is(":visible") && r("#setting_option_watermark").prop("checked");
            a.Z.updateWatermarkDefault(h);
            let _ = r("#setting_option_audiomark").is(":visible") && r("#setting_option_audiomark").prop("checked");
            if ((a.Z.updateAudioWatermarkDefault(_), k))
              t.waiting_room_new = await (async function () {
                if (!r(".waitingroom2").is(":visible")) return "";
                let e,
                  t,
                  o = !!r("#setting_option_waitingroom2").prop("checked");
                if (o)
                  (e = r("[name=option_waitingroom2]:checked").val()),
                    "auto" === e
                      ? (t = r("#auto_prior_start").val())
                      : "manu" === e && (t = r("#manu_prior_start").is(":visible") ? r("#manu_prior_start").val() : null);
                else {
                  let o = "pmi" === r("[name=meeting_type]:checked").val(),
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
                ? (e = !!(await a.Z.getValue("zoom_config_jbh")))
                : ((e = r("#setting_option_jbh").prop("checked")), a.Z.saveValue("zoom_config_jbh", e)),
                !o && e && y?.isVisible && i.Z.setJbhTimeMinutes(y.getSelectedResult()),
                (t.zoom_config_jbh = e);
            }
            let g = await a.Z.getEnableDC();
            if (r("#setting_option_enableDC").is(":visible"))
              if (r("#setting_option_enableDC").prop("checked")) {
                let e = r(".dcRegions .dc-group"),
                  t = e.find("input:checked");
                if (!t.length) return void ae(e, s.errors[18]);
                {
                  let e = {};
                  t.each(function (t) {
                    let o = r(this).attr("dcabbr");
                    o && (e[o] = !0);
                  }),
                    a.Z.setEnableDC(e),
                    (g = e);
                }
              } else a.Z.setEnableDC(""), (g = "");
            t.enableDC = JSON.stringify(g);
            let f = r("#fixed_popup").is(":visible") && r("#fixed_popup").prop("checked");
            if ((a.Z.saveValue("zoom_config_fixed_popup", f), (t.zoom_config_fixed_popup = f), !P())) return !1;
            !(function () {
              let e = r("#alternative_host").val();
              r("#alternative_host").is(":visible") && e && r("#alternative_host").val(S(e));
            })(),
              (t.zoom_config_schedule_for = m),
              (t.zoom_config_pmi = o),
              (t.public_cal = r("#setting_option_public_cal").is(":visible") && r("#setting_option_public_cal").prop("checked")),
              (t.mute_upon_entry = r("#setting_option_uponentry").prop("checked")),
              (t.zoom_config_video_host = r("[name=option_video_host]:checked").val()),
              (t.zoom_config_video_participants = r("[name=option_video_participants]:checked").val()),
              (t.zoom_config_audio = u),
              (t.zoom_config_pacindex = r("[name=option_pac]:checked").val() || "1"),
              (t.zoom_config_watermark = r("#setting_option_watermark").is(":visible") && r("#setting_option_watermark").prop("checked")),
              (t.zoom_config_audiomark = r("#setting_option_audiomark").is(":visible") && r("#setting_option_audiomark").prop("checked")),
              (t.zoom_config_alternativehost = r("#alternative_host").val()),
              (t.zoom_config_joinurl = r("#setting_option_joinurl").prop("checked")),
              (t.require_reg = r("#setting_option_requirereg").prop("checked")),
              (t.enable_unmute_all = n);
            let v = r("#setting_submit");
            v.addClass("loading"), v.add("#setting_refresh").prop("disabled", !0);
            let b = parseInt(await a.Z.getValue("zoom_options_tabid"));
            if (b > 0 && (await a.Z.getValue("zoom_config_fte"))) {
              try {
                201 == (await i.Z.saveZoomSetting(t)).errorCode
                  ? i.Z.popupLogin(!0)
                  : (a.Z.saveValue("zoom_config_fte", !1),
                    a.Z.saveValue("zoom_config_althost", r("#alternative_host").val()),
                    chrome.tabs.update(b, { url: i.Z.getGoogleCalendarUrl() }, function (e) {}));
              } catch (e) {
                r("#alternative_host").parent().addClass("has-error"),
                  r("#alternative_host").trigger("focus").next().text(e?.data?.errorMessage),
                  r("#alternative_host").trigger("focus").next().show();
              }
              L();
            } else {
              try {
                201 == (await i.Z.saveZoomSetting(t)).errorCode
                  ? i.Z.popupLogin(!0)
                  : (a.Z.saveValue("zoom_config_althost", r("#alternative_host").val()), V("Your settings have been saved."));
              } catch (e) {
                r("#alternative_host").parent().addClass("has-error"),
                  r("#alternative_host").trigger("focus").next().text(e?.data?.errorMessage),
                  r("#alternative_host").trigger("focus").next().show();
              }
              L();
            }
          }
          function q() {
            let e = r("#setting_refresh");
            e.removeClass("loading"), e.add("#setting_submit").prop("disabled", !1), e.get(0).focus();
          }
          function L() {
            let e = r("#setting_submit");
            e.removeClass("loading"), e.add("#setting_refresh").prop("disabled", !1);
          }
          function R(e) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
              e
            );
          }
          function A(e) {
            return c.safeHTML(e);
          }
          async function $() {
            let e,
              t = await a.Z.getSecurity(),
              o = "pmi" === r("[name=meeting_type]:checked").val();
            (e = k ? N() : !!r("#setting_option_jbh").prop("checked")), t && (await X(!0, t, o, e, !0), K(o));
          }
          async function I(e) {
            let t;
            t = e ? "pmi" === r("[name=meeting_type]:checked").val() : !!(await a.Z.getValue("zoom_config_pmi"));
            let o,
              n = await a.Z.getSecurity();
            await (async function (e, t, o) {
              if (!o)
                if (k) {
                  r(".security-box .waitingroom").remove();
                  let e = r(".jbh-moved-alert .description");
                  e.html(s.tips[38]), e.find("a").attr("href", await i.Z.getMySettingUrl());
                } else r(".security-box .waitingroom2").remove(), r(".options .jbh-moved-alert").remove();
              k
                ? B(t, o)
                : e &&
                  (function (e, t) {
                    let { wrEnable: o, wrLocked: i } = U(e, t);
                    r("#setting_option_waitingroom").prop("checked", o), ee(r(".control-row.waitingroom > label"), !!i);
                    e.newSecurityEnabled.defaultVal && (!o && i ? r(".waitingroom").hide() : r(".waitingroom").show());
                  })(e, t);
            })(n, t, e),
              (o = e
                ? k
                  ? N()
                  : !!r("#setting_option_jbh").prop("checked")
                : k
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
                : !!(await a.Z.getValue("zoom_config_jbh"))),
              n &&
                (n.newSecurityEnabled.defaultVal
                  ? await (async function (e, t) {
                      let o = !1,
                        n = !1,
                        l = !1,
                        s = await a.Z.getAuthentication(),
                        c = s.locked;
                      if (t) {
                        (o = e.pmi.passcode.default_all), (n = e.pmi.passcode.locked), (l = s.pmi.defaultVal);
                        let t = e.pmi.passcode.value;
                        t && u.val(t);
                      } else (o = e.normal.passcode.defaultVal), (n = e.normal.passcode.locked), (l = s.normal.defaultVal);
                      r("#setting_option_needpassword").prop("checked", o), ee(r(".requirepwd > label"), !!n);
                      !o && n ? r(".requirepwd").hide() : r(".requirepwd").show();
                      s.support && (!l && c ? r(".authentication").hide() : r(".authentication").show());
                      await W(e, t, o, l),
                        await (async function (e, t, o, n, a, l, s) {
                          let c,
                            p,
                            u = r(".security-box"),
                            d = (!l && s) || !o.support;
                          if (k) {
                            let t = await i.Z.getWaitingRoom2(e);
                            (c = t.value), (p = t.disabled);
                          } else {
                            let o = U(t, e);
                            (c = o.wrEnable), (p = o.wrLocked);
                          }
                          !n && a && !c && p && d ? u.hide() : u.is(":visible") || u.show();
                        })(t, e, s, o, n, l, c),
                        j();
                    })(n, t)
                  : await X(e, n, t, o),
                await (async function (e) {
                  let t = await a.Z.getAuthentication();
                  if (((g = -1), t.support)) {
                    _ = t.optionLists;
                    let o = t.normal.defaultVal;
                    e &&
                      ((_ = (function (e, t) {
                        if ("object" === c.type(t) && Object.keys(t).length && Array.isArray(e)) {
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
                          (o += `\n\t\t\t\t\t<option value="${l}">${A(n.name)}</option>\n\t\t\t\t`),
                            n.defaultVal && ((t = ": " + A(n.name)), (i = l));
                        }
                        (o += "</select></div>"), (n = '<div class="domain-info-field"></div>');
                      } else
                        1 == a
                          ? ((t = ": " + A(e[0].name)), (n = '<div class="domain-info-field"></div>'))
                          : (n =
                              '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>');
                      let r = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${t}</span></optext>\n\t\t\t</label>\n\t\t\t${o}\n\t\t\t${n}\n\t\t\t<div class="del-opt-prompt">${s.tips[13]}</div>\n\t\t`;
                      return { htmlText: r, selVal: i };
                    })(_);
                    f.html(i).removeClass("haslock"),
                      r("#setting_option_authentication").on("change", function () {
                        let e = r(this).prop("checked");
                        e ? (f.addClass("check"), z(e)) : (f.removeClass("check"), z(e));
                      }),
                      r("#sel_for_authentication").on("change", function () {
                        ne(r(this).val(), !0);
                      }),
                      (function (e, t, o) {
                        let i = r("#setting_option_authentication");
                        e > -1
                          ? ((sel_for_authentication.value = e), r("#sel_for_authentication").trigger("change"))
                          : f.find(".domain-info-field").length && ne(0, !0);
                        i.prop("checked", o), i.trigger("change"), t.locked && ee(r(".authentication > label"), !0);
                        if (!_.length) {
                          i.prop("checked", !1), i.prop("disabled", !0), i.parent().addClass("nooption");
                          let e = new Date().getTime();
                          r("body").on("scroll", function (t) {
                            let o = new Date().getTime();
                            o - e > 1e3 && (ie(), (e = o));
                          });
                        }
                      })(n, t, o);
                  } else f.html("").hide(), v.html("").hide(), b.html("").hide();
                })(t),
                K(t));
          }
          async function W(e, t, o, n) {
            if ((G(r(".security-box")), k)) {
              let a = await i.Z.getWaitingRoom2(t),
                l = a.value,
                c = a.disabled,
                p = "manu" === a.childParams.options.value,
                u = a.childParams.options.disabled;
              !e.security3c1 ||
                o ||
                n ||
                (l && p) ||
                (c || (u && !p)
                  ? Y(s.tips[39], r(".security-box"), !0)
                  : (c || r("#setting_option_waitingroom2").prop("checked", !0).trigger("change"),
                    u || r("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                    Q(1, r(".waitingroom2"))));
            } else {
              let { wrEnable: i, wrLocked: a } = U(e, t);
              !e.security3c1 ||
                o ||
                n ||
                i ||
                (a
                  ? Y(s.errors[21], r(".security-box"), !1)
                  : (r("#setting_option_waitingroom").prop("checked", !0), Q(1, r(".waitingroom"))));
            }
          }
          async function B(e, t) {
            let o = await i.Z.getWaitingRoom2(e);
            if (o && o.show) {
              if (o.disabled && !o.value) return void r(".security-box .waitingroom2").hide();
              if ((r(".security-box .waitingroom2").show(), !t)) {
                let e = await i.Z.getMySettingUrl();
                r(".wr2Tip").attr(
                  "info",
                  `<div>The options available here depend on your waiting room web settings for how participants are admitted.</div><div style="margin-top: 8px;">You can find enhanced settings for waiting room and join before host in the web settings portal. <a href="${e}" target="_blank">Go to Setting</a></div>`
                );
              }
              let e = o.childParams.auto,
                n = o.childParams.manu,
                a = o.childParams.options;
              r("#auto_prior_start").html(J(e.dataOptions)),
                r("#manu_prior_start").html(J(n.dataOptions)),
                t ||
                  (function () {
                    let e = r(".jbh-moved-alert");
                    e.on("click", "close", function (t) {
                      t.stopPropagation(), e.remove();
                    }),
                      e.on("click", ".description a", function (e) {
                        e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: r(this).attr("href") });
                      }),
                      r(".waitingroom2 .wr2Tip").on("click", "a", function (e) {
                        e.stopPropagation(), e.preventDefault(), chrome.tabs.create({ url: r(this).attr("href") });
                      });
                    let t = r(".waitingroom2");
                    r("#setting_option_waitingroom2").on("change", async function () {
                      r(this).prop("checked") || !1 ? t.addClass("beencheck") : t.removeClass("beencheck"),
                        h && "pmi" === r("[name=meeting_type]:checked").val() && (await $()),
                        H();
                    }),
                      r("[name=option_waitingroom2]").on("change", async function () {
                        h && "pmi" === r("[name=meeting_type]:checked").val() && (await $()), H();
                      });
                  })(),
                o.disabled ? ee(r(".waitingroom2 > .checkbox-inline"), !0) : ee(r(".waitingroom2 > .checkbox-inline"), !1),
                r("#setting_option_waitingroom2").prop("disabled", !0),
                r(".waitingroom2 .radio-inline").find("input").prop("disabled", !0),
                r("#manu_prior_start").prop("disabled", !0),
                r("#auto_prior_start").prop("disabled", !0),
                r("#setting_option_waitingroom2").prop({ checked: o.value }),
                "auto" === a.value
                  ? r("#setting_option_auto").prop({ checked: !0 }).trigger("change")
                  : "manu" === a.value && r("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                r("#auto_prior_start").val(e.value),
                null === n.value || -100 === n.value ? r("#manu_prior_start").remove() : r("#manu_prior_start").val(n.value),
                r("#setting_option_waitingroom2").trigger("change");
              let l = a.dataOptions || [],
                s = "Everyone is manually admitted",
                c = "Everyone is automatically admitted";
              for (let e = 0; e < l.length; e++)
                "auto" === l[e].id && l[e].label && (c = l[e].label), "manu" === l[e].id && l[e].label && (s = l[e].label);
              r("#setting_option_auto").next().text(c), r("#setting_option_manu").next().text(s);
            } else r(".security-box .waitingroom2").hide();
          }
          async function H() {
            if ((await a.Z.getSecurity()).security3c1) {
              let e = r(".security-box"),
                t = r("#setting_option_needpassword").prop("checked") || !1,
                o = r("#setting_option_authentication").prop("checked") || !1;
              if (k) {
                let i = r("#setting_option_waitingroom2").prop("checked") || !1,
                  n = r("#setting_option_manu").prop("checked") || !1;
                (i && n) || t || o ? G(e) : Y(s.tips[39], e, !0);
              } else {
                r("#setting_option_waitingroom").prop("checked") || !1 || t || o ? G(e) : Y(s.errors[20], e, !0);
              }
            }
          }
          function J(e) {
            if (Array.isArray(e) && e.length) {
              let t = "";
              for (let o = 0; o < e.length; o++) t += `\n\t\t\t\t\t<option value="${A(e[o].id)}">${A(e[o].label)}</option>\n\t\t\t\t`;
              return t;
            }
            return "";
          }
          function U(e, t) {
            let o = !1,
              i = !1;
            return (
              t
                ? ((o = e.pmi.waitingroom.defaultVal), (i = e.pmi.waitingroom.locked))
                : ((o = e.normal.waitingroom.defaultVal), (i = e.normal.waitingroom.locked)),
              { wrEnable: o, wrLocked: i }
            );
          }
          function N() {
            if (!r(".waitingroom2").is(":visible")) return !0;
            if (!r("#setting_option_waitingroom2").prop("checked")) return !0;
            let e = r("[name=option_waitingroom2]:checked").val();
            if ("auto" === e) {
              if ("-1" !== r("#auto_prior_start").val()) return !0;
            } else if ("manu" === e && r("#manu_prior_start").is(":visible")) {
              if ("-1" !== r("#manu_prior_start").val()) return !0;
            }
            return !1;
          }
          function Y(e, t, o) {
            if (e && t) {
              let i = t.find(".error-msg");
              i.html(e).addClass("showme"), o ? i.attr("role", "alert") : i.attr("role", null);
            }
          }
          function G(e) {
            if (e) {
              let t = e.find(".error-msg");
              t.hasClass("showme") && t.html("").removeClass("showme").attr("role", null);
            }
          }
          async function K(e) {
            let t = r("#setting_option_needpassword"),
              o = r("#setting_option_waitingroom"),
              n = r("#setting_option_authentication");
            t.is(":visible") && !t.prop("disabled") && t.prop("disabled", !0),
              o.is(":visible") && !o.prop("disabled") && o.prop("disabled", !0),
              u.prop("disabled") || u.prop("disabled", !0),
              n.is(":visible") && !n.prop("disabled") && n.prop("disabled", !0);
            let a = r("#sel_for_authentication");
            a.is(":visible") && !a.prop("disabled") && a.prop("disabled", !0);
            let l = r(".security-box .web-setting-btn");
            if (l.length) {
              let t = "";
              (t = e ? await i.Z.getMyPMISettingUrl() : await i.Z.getMySettingUrl()), l.attr("url", t);
            }
          }
          async function Q(e, t) {
            let o = await i.Z.getShowSecurityTip();
            if (o["type" + e]) {
              let n = e + 29;
              t.append(`<div class="security-tip"><close></close>${s.tips[n]}<div class="pop-arrow"></div></div>`),
                (o["type" + e] = !1),
                i.Z.setShowSecurityTip(o);
              let a = r(".security-tip");
              a.on("click", "close", function (e) {
                e.stopPropagation(), a.remove();
              }),
                setTimeout(function () {
                  r("[name=meeting_type]").one("change", function (e) {
                    a.remove();
                  });
                }, 200);
            }
          }
          async function X(e, t, o, i, n) {
            let l = !1,
              s = !1,
              c = !1,
              p = await a.Z.getAuthentication();
            if (o) {
              let e = t.pmi.passcode;
              e.default_jbh
                ? (i && (l = !0), i && (s = e.locked))
                : e.default_all
                ? ((l = !0), (s = e.locked))
                : ((l = !1), (s = e.locked)),
                (c = p.pmi.defaultVal);
              let o = e.value;
              o && u.val(o);
            } else (l = t.normal.passcode.defaultVal), (s = t.normal.passcode.locked), (c = p.normal.defaultVal);
            r("#setting_option_needpassword").prop("checked", l), ee(r(".requirepwd > label"), !!s), n || (await W(t, o, l, c)), j();
          }
          function ee(e, t) {
            t
              ? e.closest(".control-row").hasClass("haslock") ||
                (e.append(m).closest(".control-row").addClass("haslock"), e.find("input").prop("disabled", !0))
              : (e.find(".locked_by_admin").remove(),
                e.closest(".control-row").removeClass("haslock"),
                e.find("input").prop("disabled", !1));
          }
          var te,
            oe = r(".authentication .exception-message");
          function ie() {
            te && (clearTimeout(te), (te = null), se(oe));
          }
          function ne(e, t) {
            let o = _[e];
            if ((f.find(".name").text(": " + o.name), "1" == o.type)) {
              let e,
                t = o.domain || "";
              e = t.length > 57 ? t.slice(0, 56) + "..." : t;
              let i = `\n\t\t\t<span class="domain-info-text">${A(e)}</span>\n\t\t\t`;
              f.find(".domain-info-field").html(i).addClass("eyeable");
            } else f.find(".domain-info-field").html("").removeClass("eyeable");
            if (t) {
              let t = _[g];
              t && t.del ? f.find(".del-opt-prompt").show() : f.find(".del-opt-prompt").hide(), (g = e);
            }
          }
          function ae(e, t) {
            e.length && (e.parent().addClass("has-error"), e.focus().next().text(t).show());
          }
          function le(e) {
            e.length && (e.parent().removeClass("has-error"), e.next().text("").hide());
          }
          function re(e) {
            e.css({ display: "block" }),
              e.timeout && (clearTimeout(e.timeout), (e.timeout = null)),
              (e.timeout = setTimeout(function () {
                e.addClass("show"), (e.timeout = null);
              }, 10));
          }
          function se(e) {
            e.removeClass("show"),
              e.timeout && (clearTimeout(e.timeout), (e.timeout = null)),
              (e.timeout = setTimeout(function () {
                e.css({ display: "none" }), (e.timeout = null);
              }, 150));
          }
          function ce() {
            if (C?.isVisible) {
              let { id: e, extData: t } = C.getSelectedResult(),
                o = t?.pmi;
              "0" !== o ? pe() : ue(e);
            } else {
              "0" !== (p.PMI || "0") ? pe() : ue("me");
            }
          }
          function pe() {
            let e = r(".meetingtype");
            e.is(":visible") || (e.removeClass("hideme"), r(".disable-pmi-msg").removeClass("showme"));
          }
          function ue(e) {
            let t = r(".meetingtype");
            t.is(":visible") &&
              (r("#meeting_type_normal").prop("checked", !0), r("#meeting_type_normal").trigger("change"), t.addClass("hideme")),
              (async function (e) {
                (await a.Z.getShowDisablePmiMsg())[e]
                  ? (function () {
                      if (!r(".disable-pmi-msg").length) {
                        r(".tab-pane.first-tab").prepend(
                          '<div class="disable-pmi-msg"><div>Your Personal Meeting ID is disabled<close></close></div></div>'
                        );
                        let e = r(".disable-pmi-msg");
                        e.find("close").on("click", async function (t) {
                          t.stopPropagation(), e.removeClass("showme");
                          let o = await a.Z.getShowDisablePmiMsg();
                          (o[
                            (function () {
                              if (C?.isVisible) {
                                let { id: e, extData: t } = C.getSelectedResult();
                                return e;
                              }
                              return "me";
                            })()
                          ] = !1),
                            a.Z.setShowDisablePmiMsg(o);
                        });
                      }
                      r(".disable-pmi-msg").addClass("showme");
                    })()
                  : r(".disable-pmi-msg").removeClass("showme");
              })(e);
          }
          function de(e) {
            5 != s.envIndex && console.log(e);
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
