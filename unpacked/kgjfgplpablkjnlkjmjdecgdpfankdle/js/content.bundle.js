(() => {
  var t,
    e = {
      133: () => {},
      982: () => {},
      319: (t, e, n) => {
        "use strict";
        n(469);
        var o = n(755);
        let i = null;
        if (/calendar.google.com/g.test(window.location.host)) {
          const t = o.noConflict();
          (i = new (function () {
            let e = this;
            window.addEventListener(
              "message",
              function (n) {
                "https://calendar.google.com" === n.origin &&
                  ((void 0 === n.data.calendarId && void 0 === n.data.event_baseid) ||
                    ("event" === n.data.action
                      ? t(e).trigger({
                          type: "calendarIdObtained",
                          calendarId: n.data.calendarId,
                          number: n.data.number,
                          event_baseid: n.data.event_baseid,
                          scheduleTime: n.data.scheduleTime,
                          wb_doc_id: n.data.wb_doc_id,
                          wb_permission: n.data.wb_permission
                        })
                      : "deleteevent" === n.data.action
                      ? t(e).trigger({ type: "calendarIdRemoved", calendarId: n.data.calendarId, event_baseid: n.data.event_baseid })
                      : "updatetimeandtimezone" === n.data.action
                      ? t(e).trigger({
                          type: "updateTimeAndTimezone",
                          calendarId: n.data.calendarId,
                          event_baseid: n.data.event_baseid,
                          dates: n.data.dates,
                          timezone: n.data.timezone,
                          topic: n.data.topic,
                          number: n.data.number,
                          zoomrooms: n.data.zoomrooms
                        })
                      : "recordZmlog" === n.data.action
                      ? t(e).trigger({ type: "recordZmlog", msgType: n.data.msgType, msg: n.data.msg, operaType: n.data.operaType })
                      : "saveInvitee" === n.data.action &&
                        t(e).trigger({
                          type: "saveInvitee",
                          meetingNumber: n.data.meetingNumber,
                          wb_doc_id: n.data.wb_doc_id,
                          wb_permission: n.data.wb_permission,
                          event_baseid: n.data.event_baseid,
                          invitee: n.data.invitee,
                          reFilter: n.data.reFilter,
                          joinUrl: n.data.joinUrl,
                          descText: n.data.descText
                        })));
              },
              !1
            );
          })()),
            (i.loadObserver = function () {
              let t = document.createElement("script");
              (t.src = chrome.runtime.getURL("js/injectobserver.bundle.js")),
                (t.onload = function () {
                  this.remove();
                }),
                (document.head || document.documentElement).appendChild(t);
            });
        }
        const a = i;
        var s = n(755),
          l = n(915);
        const r = s.noConflict();
        function d(t, e, n) {
          var o = !1;
          return c(t, n) - c(e) > 40 && (o = !0), o;
        }
        function c(t, e) {
          var n = 0,
            o = /(\d{1,2}):(\d{2})(pm)?/gi.exec(t);
          return (
            o &&
              4 == o.length &&
              ((n = 60 * parseInt(o[1], 10) + parseInt(o[2], 10)), "pm" == o[3] && o[1] < 12 && (n += 720), e && (n += 1440)),
            n
          );
        }
        function u(t) {
          return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
            t
          );
        }
        const m = {
          check40MinDuration() {
            var t = !1;
            try {
              let e = document.querySelector("#xAlDaCbx input[type=checkbox]");
              if (e) {
                if (e.checked) return !0;
              } else if ("true" === document.querySelector("#xAlDaCbx[role=checkbox]")?.getAttribute("aria-checked")) return !0;
              t =
                r("#xStDaIn").attr("data-date") !== r("#xEnDaIn").attr("data-date")
                  ? d(r("input#xEnTiIn").attr("data-initial-value"), r("input#xStTiIn").attr("data-initial-value"), !0)
                  : d(r("input#xEnTiIn").attr("data-initial-value"), r("input#xStTiIn").attr("data-initial-value"));
            } catch (t) {
              sendLogToBackend({ msgType: 4, msg: { msg: l.errors[11], filename: "goog-script.js", function: "check40MinDuration" } });
            }
            return t;
          },
          logForQueryDom(t) {
            sendLogToBackend({
              msgType: 6,
              msg: { msg: "Failed to query the Google calendar dom node: " + t, filename: "goog-script.js", function: "newui." + t },
              operaType: 2
            });
          },
          showHasErrorMsg(t, e) {
            t.length && (t.parent().addClass("has-error"), t.focus().next().text(e).show().attr("role", "alert"));
          },
          hideHasErrorMsg(t) {
            t.length && (t.parent().removeClass("has-error"), t.next().text("").hide().attr("role", ""));
          },
          isMultiEmailDomains(t) {
            if (!t) return !1;
            var e = r.trim(t).split(/[;,\n\r]+/);
            let n = !0;
            for (var o in e) (t = r.trim(e[o])), (n = n && u("a@" + t));
            return !0 === n;
          },
          validateEmail() {
            let t = !0,
              e = r("#zoom-setting #auth_domain_info");
            return (
              e.is(":visible") &&
                r("#zoom-setting #setting_option_authentication").prop("checked") &&
                (this.isMultiEmailDomains(e.val()) ? this.hideHasErrorMsg(e) : (this.showHasErrorMsg(e, l.errors[10]), (t = !1))),
              t
            );
          },
          paddingLeft(t, e) {
            let n = e - (t += "").length;
            if (n > 0) for (var o = 0; o < n; o++) t = "0" + t;
            return t;
          },
          toISOString(t) {
            function e(t) {
              return t < 10 ? "0" + t : t;
            }
            return (
              t.getUTCFullYear() +
              "-" +
              e(t.getUTCMonth() + 1) +
              "-" +
              e(t.getUTCDate()) +
              "T" +
              e(t.getUTCHours()) +
              ":" +
              e(t.getUTCMinutes()) +
              ":" +
              e(t.getUTCSeconds()) +
              "Z"
            );
          },
          validateAltHost() {
            var t = !0;
            if (r("#alternative_host").is(":visible") && "" != r("#alternative_host").val()) {
              let e = r("#alternative_host").parent(),
                n = e.find(".alternative_host_error");
              !(function (t) {
                var e = r.trim(t).split(/[;,\n\r]+/);
                if ("" == e) return !0;
                var n = !0;
                for (var o in e) {
                  var i = r.trim(e[o]);
                  n = n && u(i);
                }
                return !0 === n;
              })(r("#alternative_host").val())
                ? (e.addClass("has-error"), r("#alternative_host").trigger("focus"), n.text(l.tips[0]).show(), (t = !1))
                : (e.removeClass("has-error"), n.hide());
            }
            return t;
          },
          isEmail: (t) => u(t),
          ajaxValidAltHost() {
            var t = !0;
            return (
              r("#alternative_host").is(":visible") &&
                "" != r("#alternative_host").val() &&
                r("#alternative_host").parent().hasClass("has-error") &&
                (t = !1),
              t
            );
          },
          validateEnableDC() {
            if (r("#zoom-setting #setting_option_enableDC").is(":visible")) {
              if (r("#zoom-setting #setting_option_enableDC").prop("checked")) {
                let t = r("#zoom-setting .dcRegions .dc-group");
                return !!t.find("input:checked").length || (this.showHasErrorMsg(t, l.errors[18]), !1);
              }
              return !0;
            }
            return !0;
          },
          validatePwdInput() {
            var t = !0;
            return (
              r("#meeting_pwd").is(":visible") &&
                ("" == r("#meeting_pwd").val().trim()
                  ? (r("#meeting_pwd").parent().addClass("has-error"), r("#meeting_pwd").next().show(), (t = !1))
                  : (r("#meeting_pwd").parent().removeClass("has-error"), r("#meeting_pwd").next().hide())),
              t
            );
          },
          collateUserInput() {
            let t = r("#alternative_host").val();
            r("#alternative_host").is(":visible") && t && r("#alternative_host").val(this.callateInputHandler(t));
          },
          callateInputHandler(t) {
            let e = "";
            return (
              r.each(r.trim(t).split(/[;,\n\r]+/), (t, n) => {
                t > 0 && (e += ","), (e += r.trim(n));
              }),
              e
            );
          },
          getUserLanguage() {
            var t = "en",
              e = document.body.innerHTML.match(/\[\\"locale\\",\\"(.*)\\\"],\[\\"format24HourTime\\"/),
              n = e && e[1];
            return n && n.indexOf("_") > 0 && (t = n.split("_")[0]), t;
          }
        };
        var p = n(573),
          g = n.n(p),
          h = n(755),
          f = n(755),
          v = n(812),
          b = n(915),
          _ = h.noConflict();
        function y(t, e) {
          let n = new Event(e, { bubbles: !0 });
          _(t).get(0).dispatchEvent(n);
        }
        function z(t) {
          y(t, "input");
        }
        function w(t) {
          return v.safeHTML(t);
        }
        const k = {
          getSaveBtnNode: function () {
            let t = _("button[jsname='x8hlje']");
            return (
              t.length ? t.length > 1 && (t = _("button#xSaveBu[jsname='x8hlje']")) : (t = _("div[role='button'][jsname='x8hlje']")),
              t.length || m.logForQueryDom("getSaveBtnNode"),
              t
            );
          },
          getQuickNewEvt: function () {
            return _("#yDmH0d [jsname=bN97Pc] div[jsname=SF0uGd][data-eventid]");
          },
          getQuickTimeSection: function () {
            let t,
              e = this.getQuickNewEvt();
            return (
              e.length
                ? ((t = e.find("div[jsname=TAmOZ] button>div[jsname=WamLdf]").parent()),
                  t.length || (t = e.find("div[jsname=TAmOZ] div[role=button]>div[jsname=ksKsZd]").parent()))
                : (t = _()),
              t.length || m.logForQueryDom("getQuickTimeSection"),
              t
            );
          },
          expandQuickTimeSection: function () {
            try {
              let t = this.getQuickTimeSection();
              if (t.length) {
                t.trigger("click"), this.getQuickNewEvt().find("div[jsname=iKdrbf] input[jsname=YPqjbf]").trigger("blur");
              }
            } catch (t) {}
          },
          getQuicWbBtnSiblingNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (
              (t = e.length ? e.find("[jsname=PAiuue][aria-labelledby=tabEvent]") : _()),
              t.length || m.logForQueryDom("getQuicWbBtnSiblingNode"),
              t
            );
          },
          getQuickMoreOptionNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("[jsname=rhPddf]") : _()), t.length || m.logForQueryDom("getQuickMoreOptionNode"), t;
          },
          getQuickTopicNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("div[jsname=GYcwYe] input") : _()), t.length || m.logForQueryDom("getQuickTopicNode"), t;
          },
          getQuickSaveBtnNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("[jsname=x8hlje]") : _()), t.length || m.logForQueryDom("getQuickSaveBtnNode"), t;
          },
          getQuickWhereNode: function () {
            let t = _("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]");
            return t.length || m.logForQueryDom("getQuickWhereNode"), t;
          },
          getEventPopup: function () {
            let t = _("[jsname=bN97Pc] [jsname=sV9x3c]");
            return t.length || (t = _("[jsname=bN97Pc] #xDtlDlgCt")), t;
          },
          getZoomBtnSiblingNode: function () {
            let t,
              e = f("#YPCqFe");
            return (
              e.length
                ? ((t = e.find("[jsname=WwTOGd]")),
                  t.length || (t = e.find("[jsname=HU3Vff]").parent().children().eq(0)),
                  t.length || (t = e.find("#tabEventDetails").children().eq(0)))
                : (t = _()),
              t
            );
          },
          getWbBtnSiblingNode: function () {
            let t,
              e = f("#YPCqFe");
            return (
              e.length
                ? ((t = e.find("[jsname=lxECqb]").parent().parent()),
                  t.length || (t = e.find("#xBusySel").parent().prev()),
                  t.length || (t = e.find("#xNtList").parent().next()))
                : (t = _()),
              t
            );
          },
          getAllDayNode: function () {
            let t = _("[jsname=nB7Rvb] #xAlDaCbx input[jsname=YPqjbf]");
            return (
              t.length || (t = _('[jsname=wU3vpb] [jscontroller=etBPYb] input[jsname=YPqjbf][aria-label="All day"]')),
              t.length || m.logForQueryDom("getAllDayNode"),
              t
            );
          },
          getGoogleTimezonedata: function () {
            let t;
            try {
              t = JSON.parse(f("#timezonedata").text());
            } catch (t) {}
            return Array.isArray(t) ? t : 0;
          },
          getTopicNode: function () {
            let t = _("div[jsname=GYcwYe] input");
            return t.length || m.logForQueryDom("getTopicNode"), t;
          },
          getVideoCallNode: function () {
            return null;
          },
          setTopicNodeValue: function (t) {
            let e = this.getTopicNode();
            e.val(t), z(e);
          },
          setQuickTopicNodeValue: function (t) {
            let e = this.getQuickTopicNode();
            e.val(t).trigger("focus"), z(e), e.trigger("blur");
          },
          getDefTimezone: function () {
            let t = _("#xTimezone");
            return t.length || m.logForQueryDom("getDefTimezone"), t.text();
          },
          getStartDateNode: function () {
            let t = _("div[jsname=iKdrbf] input[jsname=YPqjbf]:visible");
            return t.length || m.logForQueryDom("getStartDateNode"), t;
          },
          getStartTimeNode: function () {
            let t = _("div[jsname=B4GDSd] input[jsname=YPqjbf]:visible");
            return t.length || (t = _("div[jsname=B4GDSd] input[jsname=YPqjbf]")), t.length || m.logForQueryDom("getStartTimeNode"), t;
          },
          getEndDateNode: function () {
            let t = _("div[jsname=NNrqNc] input[jsname=YPqjbf]:visible");
            return t.length || m.logForQueryDom("getEndDateNode"), t;
          },
          getEndTimeNode: function () {
            let t = _("div[jsname=XCHdmd] input[jsname=YPqjbf]:visible");
            return t.length || (t = _("div[jsname=XCHdmd] input[jsname=YPqjbf]")), t.length || m.logForQueryDom("getEndTimeNode"), t;
          },
          getStartTimezoneId: function () {
            let t = _("div[jsname=L2QMlb] div[jsname=PH80Af]");
            return t.length || m.logForQueryDom("getStartTimezoneId"), t;
          },
          getEndTimezoneId: function () {
            let t = _("div[jsname=L2QMlb] div[jsname=yxQRke]");
            return t.length || m.logForQueryDom("getEndTimezoneId"), t;
          },
          getRepeatNode: function () {
            let t = _("div[jsname=PAiuue]:visible div[jsname=T7keRc]");
            if (((t.length && t.find("[data-value][aria-selected=true]").length) || (t = _("div[jsname=T7keRc]")), t.length)) {
              let e = t.find("div[jsname=xl07Ob] li[data-value][aria-selected=true]");
              if (
                (e.length || (e = t.find("div[jsname=d9BH4c] div[data-value][aria-selected=true]")),
                e.length || (e = t.find("[data-value][aria-selected=true]")),
                e.length)
              )
                return e;
            }
            return m.logForQueryDom("isRepeat"), _();
          },
          getPopupTopicNode: function () {
            let t,
              e = this.getEventPopup();
            return e.length ? ((t = e.find("#rAECCd")), t.length || (t = e.find("#xDetDlgWhen [role=heading]"))) : (t = _()), t;
          },
          getPopupEditButton: function () {
            let t = _("[jsname=bN97Pc] button[jsname=DyVDA]");
            return t.length || (t = _('[jsname=bN97Pc] #xDetDlg [aria-label="Edit event"]')), t;
          },
          getPopupLocationNode: function () {
            let t,
              e = this.getEventPopup();
            return e.length ? ((t = e.find("#xDetDlgLoc div>a")), t.length || (t = e.find("#xDetDlgLoc div>div").eq(0))) : (t = _()), t;
          },
          getPopupDeleteBtn: function () {
            let t = _("#xDetDlg button[jsname=VkLyEc]");
            return t.length || (t = _("#xDetDlg div[role=button][jsname=VkLyEc]")), t.length || m.logForQueryDom("getPopupDeleteBtn"), t;
          },
          isRepeat: function () {
            let t = this.getRepeatNode().data("value");
            return !!Array.isArray(t) && !!t[1];
          },
          getGoogleVideoCallButtons: function () {
            return this.getButtonsContainer().find("[jsname=mWZCyf]");
          },
          getQuicLocationButton: function () {
            let t = _("div[jsname=YEMhHd] [jsname=TmcEkb] [jsname=RmhjUd] button span[data-key=location]");
            if ((t.length || (t = _("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]")), t.length)) {
              if (t.length > 1) {
                let e = t.filter(":visible");
                e.length && (t = e);
              }
            } else m.logForQueryDom("getQuicLocationButton");
            return t;
          },
          getQuicTimezoneText: function () {
            let t = "",
              e = _("#yDmH0d div[jsname=xpDKHf] [jsname=hf42V] [jsname=V67aGc]");
            if (e.length) {
              if (e.length > 1) {
                let t = e.filter(":visible");
                e = t.length ? t : e.eq(0);
              }
              t = e.text();
            }
            return t;
          },
          getQuicDescButton: function () {
            let t = _("div[jsname=YEMhHd] [jsname=hGaP9] [jsname=OXFAed] button span[data-key=description]");
            return (
              t.length || (t = _("div[jsname=YEMhHd] [jsname=hGaP9] [jsname=OXFAed] div[role=button] span[data-key=description]")),
              t.length || m.logForQueryDom("getQuicDescButton"),
              t
            );
          },
          getButtonsContainer: function () {
            var t = _("div.zoom-video-sec > .zoom-btn");
            if (!t.length || (!t.is(":visible") && "false" !== _("[jsname=nB7Rvb] #xEvtTab").attr("aria-selected"))) {
              var e = [];
              return (
                e.push('<div class="FrSOzf zoom-video-sec">'),
                e.push('\t<div aria-hidden="true" class="tzcF6">'),
                e.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>'),
                e.push("\t</div>"),
                e.push('\t<div class="j3nyw PxPKzc zoom-btn">'),
                e.push("\t</div>"),
                e.push("</div>"),
                _("[jsname=PAiuue][role=tabpanel] div.FrSOzf:eq(0)").after(e.join("")),
                _("div.zoom-video-sec > .zoom-btn")
              );
            }
            return t;
          },
          getEditDetailDOM: function () {
            let t = _("#YPCqFe div.p9lUpf[jsname=nB7Rvb]");
            return t.length || m.logForQueryDom("getEditDetailDOM"), t;
          },
          parseTime: function (t) {
            let e = _("div[jsname=B4GDSd]:visible");
            e.length || (e = _("div[jsname=B4GDSd]"));
            let n = e.find("div[jsname=V68bde] [jsname=rymPhb]");
            if ((n.length || (n = e.find("div[jsname=V68bde][role=listbox] > div")), t && n.length > 0)) {
              var o = n.find("> div"),
                i = o.length;
              if (i > 0 && i % 24 == 0)
                for (var a = (60 / i) * 24, s = 0; s < o.length; s++) {
                  if (_.trim(_(o[s]).text()) === t) {
                    var l = s * a;
                    return [Math.floor(l / 60), l % 60];
                  }
                  var r = t.match(/\d{2}/gi),
                    d = 0;
                  r.length >= 1 && (d = parseInt(r[r.length - 1]));
                  var c = t.replace(/:\d{2}/gi, ":00");
                  if (_.trim(_(o[s]).text()) === c) {
                    l = s * a + d;
                    return [Math.floor(l / 60), l % 60];
                  }
                }
            }
            return [-1, -1];
          },
          parseStartDate: function () {
            let t = -1,
              e = -1,
              n = -1,
              o = _("div[jsname=iKdrbf]");
            if (o.length) {
              if (o.length > 1) {
                let t = o.filter(":visible");
                t.length && (o = t);
              }
              let i = o.find("input[jsname=YPqjbf]").attr("data-date");
              i || (i = o.attr("data-ical"));
              let a = /(\d{4})(\d{2})(\d{2})/gi.exec(i);
              a && 4 === a.length && ((t = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (e = parseInt(a[3], 10)));
            }
            return [t, n, e];
          },
          parseEndDate: function () {
            let t = -1,
              e = -1,
              n = -1,
              o = _("div[jsname=qPZlPe]");
            if (o.length) {
              if (o.length > 1) {
                let t = o.filter(":visible");
                t.length && (o = t);
              }
              let i = o.find("input[jsname=YPqjbf]").attr("data-date");
              i || (i = o.attr("data-ical"));
              let a = /(\d{4})(\d{2})(\d{2})/gi.exec(i);
              a && 4 === a.length && ((t = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (e = parseInt(a[3], 10)));
            }
            return [t, n, e];
          },
          getWhereNode: function () {
            let t = _("div[jsname=yNrILb] div[jsname=rYJt4b] input[jsname=YPqjbf][role=combobox]");
            return t.length || (t = _("div[jsname=yNrILb] div[jsname=YPqjbf] input[jsname=YPqjbf][role=combobox]")), t;
          },
          setWhereNodeValue: function (t) {
            var e = this.getWhereNode();
            if (e.length) {
              var n = w(this.getValueForWhereNode(e[0]));
              (n = n && n.length > 0 ? n + ", " + w(t) : w(t)),
                y(e, "focus"),
                e[0].dispatchEvent(new Event("input", { bubbles: !0 })),
                e[0].focus(),
                e[0].select(),
                document.execCommand("inserttext", !1, n),
                e[0].dispatchEvent(new Event("input", { bubbles: !0 }));
            }
          },
          getValueForWhereNode: function (t) {
            if (t) {
              let e = t.value;
              if (!e) {
                let n = t.getAttribute("data-initial-value");
                n && (e = n);
              }
              return e;
            }
            return "";
          },
          getDescNode: function () {
            let t = _("div[jsname=PAiuue]:visible [jsname=hGaP9] [jsname=yrriRe]");
            return (
              t.length || (t = _("#xDescIn div[jsname=yrriRe]")),
              t.length || (t = _("#xDescIn div[contenteditable]")),
              t.length || (t = _("#yDmH0d [jsname=GfMrC] [jsname=hGaP9] [jsname=yrriRe]")),
              t
            );
          },
          getPopupDescNode: function () {
            let t,
              e = this.getEventPopup();
            return (t = e.length ? e.find("#xDetDlgDesc") : _()), t;
          },
          hasAttendeeOnEventPop: function () {
            let t,
              e = this.getEventPopup();
            return !(!e.length || ((t = e.find("[jsname=bA8IK]")), !t.length));
          },
          getFocusTimeDescNode: function () {
            return _("[jsname=bN97Pc] [jsname=L9AdLc] [jsname=yrriRe]");
          },
          getDescText: function () {
            return this.getDescNode().html().replace(/<br>/g, " ");
          },
          setDescNodeValue: function (t, e, n) {
            if (t) {
              let e, o;
              n
                ? ((e = "<br>—————————<br><br>"), (o = "<br><br>—————————"))
                : ((e = "<br>" + "─".repeat(10) + "<br><br>"), (o = "<br><br>" + "─".repeat(10))),
                (t = "<p>" + (t = e + g()(t).replace(/\r\n/g, "<br>") + o) + "</p>");
            }
            let o = this.getDescNode();
            if (o.length) {
              let e = _.trim(o.html()),
                n = t;
              e && "" != o.text() && (n = e + t),
                y(o, "focus"),
                (o[0].innerHTML = n),
                o[0].dispatchEvent(new Event("paste")),
                o.parents("[jsname=NorrI]").addClass("CDELXb");
            } else m.logForQueryDom("setDescNodeValue");
          },
          escapeHtml: function (t) {
            return g()(t);
          },
          removeSession: function (t) {
            let e = this.getWhereNode();
            e.length > 0 &&
              (e[0].dispatchEvent(new Event("input", { bubbles: !0 })),
              e[0].focus(),
              e[0].select(),
              document.execCommand("inserttext", !1, this.removeZmSession()),
              e[0].dispatchEvent(new Event("input", { bubbles: !0 })));
            let n = this.getDescNode();
            n.length > 0 && ((n[0].innerHTML = this.removeZmDesc(n[0].innerHTML, t)), n[0].dispatchEvent(new Event("paste")));
          },
          removeZmSession: function () {
            var t = this.getWhereNode().val();
            return (t = t.replace(/[ ,;]*https:\/\/[\w\-.]*\/(pac\/join|[jswm])\/([\w\-.]{8,})(\?\w+=[^ ,;]*)?/g, ""));
          },
          removeZmDesc: function (t, e) {
            let n = /(?:\<br\>)?\u2500{10}[\w\W]*(?=\<br\>\u2500{10})\<br\>\u2500{10}/;
            if (!n.test(t)) {
              let t = 5 == b.envIndex ? "-x.de" : ".de";
              n = new RegExp(
                `https?:\\/\\/[\\w\\-]*\\.?(${b.multiVersion[0]}${b.runEnv[1]})(.us|.com.cn|.com|.cn|${t})\\/(pac\\/join|[jswm])\\/([\\w\\-.]{8,})((\\?|&|&amp;)\\w+=[^ ,;<&\\'\\"]*)*`,
                "ig"
              );
            }
            return t.replace(n, "");
          },
          getZoomRooms: function () {
            let t = [],
              e = _("#xRmLst div[jsname=OLRBPb] .QReV7>span");
            return (
              e.length || (e = _(".ilbnVd div[jsname=vnuzGe] .smD7sb>span:visible")),
              e.each(function (e, n) {
                t[e] = _(this).text();
              }),
              t.join(",")
            );
          },
          getPrivateEventNode: function () {
            let t = _("div[jsname=PAiuue]:visible div[jsname=y3puF] div[jsname=wSASue] div[jsname=xl07Ob] li[aria-selected=true]");
            return (
              t.length ||
                ((t = _("div[jsname=y3puF] div[jsname=wSASue] div[jsname=xl07Ob] li[aria-selected=true]")),
                t.length ||
                  (t = _("div[jsname=PAiuue]:visible div[jsname=y3puF] div[jsname=d9BH4c] div[jsname=wQNmvb][aria-selected=true]")),
                t.length || (t = _("div[jsname=y3puF] div[jsname=d9BH4c] div[jsname=wQNmvb][aria-selected=true]"))),
              t
            );
          },
          getIsPrivateEvent: function () {
            return 2 == this.getPrivateEventNode().data("value");
          },
          getZoomRoomsFromQuickSchedule: function () {
            let t = [],
              e = _("div[jsname=PAiuue]:visible div[jsname=gMNnYd] div[jsname=L9hiGd] div.gco0Sd");
            return (
              e.length || (e = _("div[jsname=wU3vpb] div[jsname=gMNnYd] div[jsname=ix0Hvc] div.gco0Sd:visible")),
              e.length || (e = _("div[jsname=SF0uGd] div[jsname=gMNnYd] div[jsname=L9hiGd] div.gco0Sd")),
              e.each(function (e, n) {
                t[e] = _(this).text();
              }),
              t.join(",")
            );
          },
          getBaseidFromDom: function () {
            let t = _("div[jsname=SF0uGd]").attr("data-loggingid"),
              e = "";
            if (t)
              try {
                e = JSON.parse(t)[0];
              } catch (t) {}
            return e;
          },
          getEidFromDom: function () {
            return _("div[jsname=SF0uGd]").attr("data-eventid") || "";
          }
        };
        var x = n(266),
          C = n(755),
          D = n(812);
        let T,
          j,
          E,
          S,
          P = null;
        function F(t) {
          (j = this),
            E.on("click", function (t) {
              t.target === this && q();
            }),
            E.on("focus", function (t) {
              q();
            }),
            T.on("click", function (t) {
              t.stopPropagation(), E.trigger("focus");
            }),
            S.on("click", "option", function (t) {
              t.stopPropagation(), M(C(this)), E.val("").trigger("input").trigger("focus");
            }),
            T.on("click", ".zm-tag .closebtn", function (t) {
              t.stopPropagation(), t.preventDefault();
              let e = C(this).parents(".zm-tag"),
                n = e.next();
              var o;
              n.hasClass("zm-tag") && (n = n.find(".closebtn")),
                (o = e.data("code")),
                S.find(`option[value=${o}]`).removeClass("selected"),
                e.remove(),
                R(),
                j.opt.tagChangeCallback(),
                n.trigger("focus");
            }),
            T.on("input", ".zm-selector-input", function (t) {
              C(this);
              !(function (t, e) {
                let n = [];
                if (Array.isArray(e) && e.length)
                  if ("" === t) n = e;
                  else if (t) {
                    let a = [],
                      s = [];
                    for (var o = 0, i = e.length; o < i; o++) {
                      let n = e[o],
                        i = n.displayName.search(new RegExp(t.trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i"));
                      0 === i ? a.push(n) : i > 0 && s.push(n);
                    }
                    n = [...a, ...s];
                  }
                let a = A(n);
                S.find(".zm-scrollbar-view").html(a),
                  T.find(".zm-tag").each(function (t, e) {
                    N(e.dataset.code);
                  });
                let s = S.find("option").not(".selected").eq(0).addClass("in-hover").get(0);
                s &&
                  setTimeout(function () {
                    s.scrollIntoView();
                  }, 10);
              })(this.value, j.opt.dataList);
            }),
            S.find(".zm-scrollbar-view").on("mouseover", function (t) {
              let e = C(t.target);
              e.hasClass("in-hover") ||
                e.hasClass("selected") ||
                (S.find("option.in-hover").removeClass("in-hover"),
                e.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
            }),
            C(window).on("resize", L);
        }
        function M(t) {
          t.hasClass("selected") || (t.addClass("selected"), I(t.html(), t.attr("value")), j.opt.tagChangeCallback());
        }
        function N(t) {
          if (t) {
            let e = S.find(`option[value=${t}]`);
            if (e.length) return e.addClass("selected"), e.html();
          }
          return "";
        }
        function I(t, e) {
          let n = `<span class="zm-tag" data-code="${$(e)}">${$(t)}<a class="closebtn" href="#" aria-label="remove ${$(
            t
          )}" role="button"></a></span>`;
          E.before(n), R();
        }
        function q() {
          T.hasClass("active-state") ||
            (T.addClass("active-state"),
            S.addClass("active-state"),
            S.width(T.width()),
            R(),
            E.trigger("focus"),
            setTimeout(function () {
              E.trigger("input");
            }, 50),
            j.opt.keyEventDom.on("keydown", function (t) {
              let e = t.keyCode;
              if (38 === e || 40 === e || 13 === e) {
                let n = S.find("option.in-hover");
                if (n.length && E.is(":focus"))
                  if ((t.stopPropagation(), t.preventDefault(), 38 === e)) {
                    let t = n.prevAll().not(".selected").eq(0);
                    t.length &&
                      (n.removeClass("in-hover"),
                      t.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
                  } else if (40 === e) {
                    let t = n.nextAll().not(".selected").eq(0);
                    t.length &&
                      (n.removeClass("in-hover"),
                      t.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
                  } else 13 === e && (M(n), E.val("").trigger("input").trigger("focus").get(0).scrollIntoView());
              }
            }));
        }
        function R() {
          let t = T.get(0).getBoundingClientRect();
          S.css({ left: Math.round(t.left) + "px", top: Math.round(t.bottom + 5) + "px" });
        }
        function L() {
          P && clearTimeout(P),
            (P = setTimeout(function () {
              T && T.is(":visible") && R(), (P = null);
            }, 100));
        }
        function A(t) {
          let e = "";
          if (Array.isArray(t) && t.length)
            for (var n = 0, o = t.length; n < o; n++) {
              let o = t[n];
              e += `<option value="${$(o.code)}">${$(o.displayName)}</option>`;
            }
          return e || (e = '<div class="no-data">No data</div>'), e;
        }
        function $(t) {
          return D.safeHTML(t);
        }
        const O = class {
          constructor(t) {
            (this.opt = Object.assign({}, { ariaLabel: "", tagChangeCallback: () => {} }, t)), this.init();
          }
          log() {
            console.log(this.opt);
          }
          init() {
            this.opt.jquery && (C = this.opt.jquery);
            let t = this.opt.el,
              e = this.opt.dataList,
              n = this.opt.ariaLabel;
            t &&
              ((this.opt.keyEventDom = this.opt.keyEventDom || C("body")),
              (this.opt.dropDownCont = this.opt.dropDownCont || C("body")),
              this.createMenu(t, e, n),
              (T = C(t).find(".zm-selector-cont")),
              (E = T.find(".zm-selector-input")),
              (S = C(".zm-selector-dropdown")),
              F.call(this, t));
          }
          createMenu(t, e, n) {
            let o = (function (t) {
              let e = `\n        <div class="zm-selector-cont">\n            <div class="zm-selector-input-cont">\n                <input type="text" autocomplete="off" aria-label="${$(
                t
              )}" role="combobox" placeholder="" class="zm-selector-input">\n            </div>\n        </div>\n    `;
              return e;
            })(n);
            C(t).html(o),
              (o = (function (t) {
                return `\n        <div class="zm-selector-dropdown">\n            <div class="zm-scrollbar">\n                <div class="zm-scrollbar-view">\n                    ${A(
                  t
                )}\n                </div>\n            </div>\n        </div>\n    `;
              })(e)),
              this.opt.dropDownCont.append(o);
          }
          getSelectedItems() {
            let t = [];
            return (
              T.find(".zm-tag").each(function (e, n) {
                t.push(n.dataset.code);
              }),
              t
            );
          }
          loseFocus() {
            T.removeClass("active-state"),
              S.removeClass("active-state"),
              j.opt.keyEventDom.off("keydown"),
              E.val() &&
                (E.val(""),
                setTimeout(function () {
                  E.trigger("input");
                }, 100));
          }
          resetTag(t) {
            if ((T.find(".zm-tag").remove(), S.find("option.selected").removeClass("selected"), Array.isArray(t) && t.length))
              for (var e = 0, n = t.length; e < n; e++) {
                let n = t[e],
                  o = N(n);
                o && I(o, n);
              }
            this.opt.tagChangeCallback(),
              setTimeout(function () {
                R();
              }, 200);
          }
          destroy() {
            C(window).off("resize", L), (T = null), (j = null), (E = null), (S = null);
          }
        };
        var V = n(893),
          H = n(812),
          W = n.n(H),
          B = n(755),
          Q = n(915);
        let U,
          Z,
          Y,
          G = "",
          J = "",
          K = 0,
          X = null,
          tt = "",
          et = !1,
          nt = !1,
          ot = {},
          it = {},
          at = {};
        function st() {
          B("#zoom-whiteboard-con").show();
          let t = B("#zoom-whiteboard-con .zoom-wb-btn-con");
          t.on("click", "#zoom_whiteboard_button", function (t) {
            t.stopPropagation(), gt(1);
          }),
            t.on("click", ".delete-button", function (t) {
              t.stopPropagation(), t.preventDefault(), mt(), B("#zoom-whiteboard-con").removeClass("in-info-state");
            });
          let e = k.getSaveBtnNode();
          e.data("wb-click-event-registered") || (e.data("wb-click-event-registered", !0), e.off("click", lt).on("click", lt));
        }
        function lt() {
          if (B("#zoom-whiteboard-con").hasClass("in-info-state")) {
            let t = rt();
            if (t) {
              if (
                (function (t) {
                  if (k.getDescNode().length) {
                    let e = Ft(k.getDescText());
                    if (!e?.docId)
                      return (
                        Y.opt.sendMessage({ type: "executeDeleteWB", info: { calendarId: t, event_baseid: W().convertEidToBaseid(t) } }), !0
                      );
                  }
                  return !1;
                })(t)
              )
                return;
              Y.opt.getMeetingNumber() ||
                (function (t) {
                  let { docId: e, permission: n } = ct();
                  if (e) {
                    let o = {
                      scheduleTime: Y.opt.getSchedTime(),
                      wb_doc_id: e,
                      wb_permission: n,
                      calendarId: t,
                      event_baseid: W().convertEidToBaseid(t)
                    };
                    Y.opt.sendMessage({ type: "executeEditWB", info: o });
                  }
                })(t);
            } else jt();
          }
        }
        function rt() {
          let t = "";
          try {
            t = location.pathname.split("eventedit/")[1];
          } catch (t) {}
          return t;
        }
        function dt() {
          return at.hasLogin && at.whiteboard?.support;
        }
        function ct() {
          if (ut()) return { docId: "", permission: "" };
          let t = B("#zoom-whiteboard-record").text();
          if (t) {
            let e;
            try {
              e = JSON.parse(t);
            } catch (t) {}
            if (e?.docId) return { docId: e.docId, permission: e.permission };
          }
          let e = St();
          return e?.docId ? { docId: e.docId, permission: "" } : { docId: "", permission: "" };
        }
        function ut() {
          if (B("#zoom-whiteboard-record").text()) {
            if (k.getDescNode().length) {
              let t = Ft(k.getDescText());
              if (!t?.docId) return B("#zoom-whiteboard-record").empty(), !0;
            }
          }
          return !1;
        }
        function mt() {
          if (!B("#zoom-whiteboard-record").text()) {
            let t = rt();
            if (t) {
              let e = St();
              e?.docId && Y.opt.sendMessage({ type: "executeDeleteWB", info: { calendarId: t, event_baseid: W().convertEidToBaseid(t) } });
            }
          }
          pt(), Y.clearDomRecord();
        }
        function pt() {
          let t = k.getDescNode();
          t.length > 0 &&
            ((t[0].innerHTML = (function (t) {
              let e = /\—{9}\<br\>\<br\>Whiteboard[\w\W]*\/wb\/doc\/([\w\-.]{8,})[\w\W]*\<br\>\<br\>\—{9}/;
              return t.replace(e, "");
            })(t[0].innerHTML)),
            t[0].dispatchEvent(new Event("paste")));
        }
        function gt(t) {
          (U = t),
            Y.opt.sendMessage({ type: "sync", info: {} }),
            J
              ? (Nt({ type: "zmCalMessage", data: { messageName: "refreshData" } }), Mt(), ht(B("#zoom-whiteboard-dialog").get(0)))
              : chrome.runtime.sendMessage({ type: "getWhiteboardUrl" }, function (t) {
                  t.whiteboardUrl &&
                    (B("#zoom-whiteboard-dialog").length || (t.baseurl && qt(t.baseurl), Ct(t.whiteboardUrl)),
                    ht(B("#zoom-whiteboard-dialog").get(0)));
                });
        }
        function ht(t) {
          !(function (t) {
            t && !B(t).attr("open") && (t.showModal(), B(t).addClass("show"));
          })(t),
            nt && ft();
        }
        function ft() {
          (nt = !1),
            (document.getElementById("zoom-whiteboard-iframe").src += ""),
            W().showDomAnimate(B("#zoom-whiteboard-dialog .loading-mask"));
        }
        function vt(t) {
          B("#zoom-whiteboard-con").addClass("in-info-state"),
            B("#zoom_whiteboard_info_box").attr("href", Et(t)).attr("docid", t).html(bt()),
            (Z = 1),
            _t(t);
        }
        function bt() {
          return '\n        <div class="load-bg">\n            <div class="skeleton-loading img-bg"></div>\n            <div class="skeleton-loading name-bg"></div>\n            <div class="skeleton-loading time-bg"></div>\n        </div>\n    ';
        }
        function _t(t) {
          tt && (it[tt] = !1), (tt = t);
          let { data: e, exception: n } = yt(t);
          e ? (n ? xt(e.docId) : kt(e)) : ((it[t] = !0), J ? (new Date().getTime() > K ? Tt(zt, !0) : zt()) : Tt(zt, !0));
        }
        function yt(t) {
          let e = ot[t];
          if (e?.data && e?.time) {
            let n = new Date().getTime(),
              o = e.exception ? 2e4 : 6e4;
            if (n - e.time < o) return e;
            delete ot[t];
          }
          return {};
        }
        function zt() {
          J && tt && Y.opt.sendMessage({ type: "getWhiteboardInfo", token: J, docId: tt });
        }
        function wt() {
          let t;
          return (
            (t = B(1 === Z ? "#zoom_whiteboard_info_box" : 2 === Z ? "#zoom_quick_whiteboard_info_box" : "#zoom_eventpop_wb_info_box")), t
          );
        }
        function kt(t) {
          let e = wt();
          if (e.attr("docid") === t.docId && !e.find(".whiteboard-name").length) {
            let n = t.previewFileDownloadUrl || "",
              o = t.docName || "Zoom Whiteboard",
              i = (function (t) {
                if (t)
                  try {
                    let e = new Date(t);
                    if (e) {
                      let t = e.toDateString().split(" ");
                      if (4 === t.length) {
                        let e = t[3].substring(2);
                        return `${t[1]} ${t[2]}, ${e}`;
                      }
                    }
                  } catch (t) {}
                return "";
              })(t.updateTime),
              a = "";
            a = n ? `<img src="${n}" class="whiteboard-img">` : '<div class="whiteboard-img-bg"></div>';
            let s = `\n            ${a}\n            ${
              3 === Z ? "" : '<button class="delete-button"></button>'
            }\n            <div class="dividing-line"></div>\n            <div class="whiteboard-name${
              i ? "" : " simple"
            }">${o}</div>\n        `;
            if (
              (i && (s += `\n                <div class="whiteboard-modified-time">Modified at ${i}</div>\n            `),
              e.append(Rt(s)),
              n)
            ) {
              Lt(e.find(".name-bg")), Lt(e.find(".time-bg"));
              let t = e.find(".whiteboard-img");
              t.get(0).complete
                ? (t.addClass("load-done"), Lt(e.find(".load-bg")))
                : (e.addClass("anima"),
                  t.one("load", function (n) {
                    n.stopPropagation(), t.addClass("load-done"), Lt(e.find(".load-bg"));
                  }),
                  t.one("error", function (n) {
                    n.stopPropagation(), t.before('<div class="whiteboard-img-bg"></div>'), t.remove(), Lt(e.find(".load-bg"));
                  }));
            } else Lt(e.find(".load-bg"));
          }
        }
        function xt(t) {
          if (t) {
            let e = wt();
            if (e.attr("docid") === t) {
              let t = `\n                <div class="whiteboard-img-bg"></div>\n                ${
                3 === Z ? "" : '<button class="delete-button"></button>'
              }\n                <div class="dividing-line"></div>\n                <div class="whiteboard-name simple">Zoom Whiteboard</div>\n            `;
              e.append(t), Lt(e.find(".load-bg"));
            }
          }
        }
        function Ct(t) {
          let e = `\n        <dialog id="zoom-whiteboard-dialog" class="zoom-whiteboard-dialog zoom-full-screen-dialog">\n            <header class="modal-header">\n                <button class="refresh action-btn" aria-label="refresh"></button>\n                <button class="close action-btn" aria-label="close"></button>\n            </header>\n            <div class="modal-body">\n                <iframe src="${t}" id="zoom-whiteboard-iframe"></iframe>\n                <div class="loading-mask"></div>\n            </div>\n        </dialog>\n    `;
          B("body").append(e),
            (function () {
              let t = B("#zoom-whiteboard-dialog");
              t.on("click", ".refresh", function (t) {
                t.stopPropagation(), ft();
              }),
                t.on("click", ".close", function (e) {
                  e.stopPropagation(), It(t.get(0));
                }),
                t.find("#zoom-whiteboard-iframe").on("load", function (t) {
                  W().closeDomAnimate(B("#zoom-whiteboard-dialog .loading-mask"), 400);
                }),
                window.addEventListener(
                  "message",
                  function (t) {
                    var e;
                    "zmCalMessage" === t.data?.type &&
                      t.origin === G &&
                      ((e = t.data?.data),
                      e &&
                        ("getWhiteboardToken" === e.messageName
                          ? Tt(Dt)
                          : "getBasicInfo" === e.messageName
                          ? Mt()
                          : "addEvent" === e.messageName
                          ? (function (t) {
                              if (t?.docId) {
                                let e = t.docId;
                                1 === U
                                  ? ((function (t) {
                                      let e = `Whiteboard link: ${Et(t)}`;
                                      k.setDescNodeValue(Rt(e), !1, !0);
                                    })(e),
                                    vt(e))
                                  : ((function (t) {
                                      let e = `Whiteboard link: ${Et(t)}`;
                                      k.setDescNodeValue(Rt(e), !1, !0);
                                    })(e),
                                    (function (t) {
                                      B("#zoom-quick-whiteboard-con").addClass("in-info-state"),
                                        B("#zoom_quick_whiteboard_info_box")
                                          .attr("href", Et(t))
                                          .attr("docid", t)
                                          .html(
                                            '\n        <div class="load-bg">\n            <div class="skeleton-loading img-bg"></div>\n            <div class="skeleton-loading name-bg"></div>\n            <div class="skeleton-loading time-bg"></div>\n        </div>\n    '
                                          ),
                                        (Z = 2),
                                        _t(t);
                                    })(e),
                                    k.expandQuickTimeSection()),
                                  (function (t) {
                                    if (t) {
                                      let e = "";
                                      try {
                                        e = JSON.stringify(t);
                                      } catch (t) {}
                                      e &&
                                        (B("#zoom-whiteboard-record").length <= 0
                                          ? B("body").append('<div id="zoom-whiteboard-record" style="display:none;">' + Rt(e) + "</div>")
                                          : B("#zoom-whiteboard-record").text(e));
                                    }
                                  })(t);
                              }
                            })(e.wbInfo)
                          : "close" === e.messageName && It(B("#zoom-whiteboard-dialog").get(0))));
                  },
                  !1
                );
            })();
        }
        function Dt() {
          J && Nt({ type: "zmCalMessage", data: { messageName: "getWhiteboardToken", whiteboardToken: J } });
        }
        function Tt(t, e) {
          t && (Array.isArray(X) ? (e && X.includes(t)) || X.push(t) : ((X = [t]), Y.opt.sendMessage({ type: "getWhiteboardToken" })));
        }
        function jt() {
          if (ut()) return;
          let t = B("#zoom-whiteboard-record").text();
          if (t) {
            let e;
            try {
              e = JSON.parse(t);
            } catch (t) {}
            if (e?.docId) {
              e.scheduleTime = Y.opt.getSchedTime() || "";
              try {
                (e = JSON.stringify(e)), B("#zoom-whiteboard-record").text(e);
              } catch (t) {}
            }
          }
        }
        function Et(t) {
          return `${G}/wb/doc/${t}`;
        }
        function St() {
          let t;
          return k.getDescNode().length && (t = Ft(k.getDescText())), t;
        }
        function Pt() {
          let t,
            e = k.getPopupDescNode();
          return e.length && (t = Ft(e.html().replace(/<br>/g, " "))), t;
        }
        function Ft(t) {
          if (!t || "string" !== W().type(t)) return;
          let e;
          t = t.replace(/&amp;/g, "&");
          let n = 5 == Q.envIndex ? "-x.de" : ".de",
            o = new RegExp(
              `(?<!=)https?:\\/\\/[\\w\\-]*\\.?(${Q.multiVersion[0]}${Q.runEnv[1]})(.us|.com.cn|.com|.cn|${n})\\/(wb\\/doc)\\/([\\w\\-.]{8,})`,
              "ig"
            ).exec(t);
          return o && o.length && (e = { docId: o[4], url: o[0] }), e;
        }
        function Mt() {
          let t = "";
          et ? (et = !1) : (t = 1 === U ? k.getTopicNode().val() || "" : k.getQuickTopicNode().val() || ""),
            Nt({ type: "zmCalMessage", data: { messageName: "getBasicInfo", basicInfo: { meetingName: t } } });
        }
        function Nt(t) {
          B("#zoom-whiteboard-iframe").get(0).contentWindow.postMessage(t, G);
        }
        function It(t) {
          t &&
            B(t).hasClass("show") &&
            (B(t).removeClass("show"),
            setTimeout(function () {
              t.close();
            }, 160));
        }
        function qt(t) {
          "/" === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), (G = t);
        }
        function Rt(t) {
          return W().safeHTML(t);
        }
        function Lt(t, e = 150) {
          t?.length &&
            !t.hasClass("take-bow") &&
            (t.addClass("take-bow"),
            setTimeout(function () {
              t.remove();
            }, e));
        }
        function At() {
          chrome.runtime.sendMessage({ type: "getWhiteboardData" }, function (t) {
            t && (at = t);
          });
        }
        const $t = class {
          $selcont;
          constructor(t) {
            (this.opt = Object.assign(
              {},
              { sendMessage: () => {}, getSchedTime: () => {}, getMeetingNumber: () => {}, deleteHandlerForInfoPop: (t) => {} },
              t
            )),
              this.init();
          }
          log() {
            console.log(this.opt);
          }
          init() {
            this.opt.jquery && (B = this.opt.jquery), (Y = this), At();
          }
          preloadWhiteboard() {
            B("#zoom-whiteboard-dialog").length ||
              chrome.runtime.sendMessage({ type: "checkPreloadWb" }, function (t) {
                t.hasLogin &&
                  t.support &&
                  chrome.runtime.sendMessage({ type: "getWhiteboardUrl" }, function (t) {
                    t.whiteboardUrl &&
                      (B("#zoom-whiteboard-dialog").length || (t.baseurl && qt(t.baseurl), (et = !0), Ct(t.whiteboardUrl)));
                  });
              });
          }
          reloadWhiteboardDialog(t) {
            let e = B("#zoom-whiteboard-dialog");
            t ? (It(e.get(0)), (nt = !0)) : ft();
          }
          getWhiteboardData() {
            At();
          }
          addWhiteboardBtn() {
            let t = k.getWbBtnSiblingNode();
            if (
              t.length &&
              !B("#zoom-whiteboard-con").length &&
              (t.after(
                `\n        <div id="zoom-whiteboard-con" class="${Rt(
                  t[0].className
                )} zoom-whiteboard-con">\n            <div aria-hidden="true" class="tzcF6">\n                <span class="DPvwYc zoom-whiteboard-icon" aria-hidden="true"></span>\n            </div>\n            <div class="j3nyw PxPKzc zoom-wb-btn-con">\n                <button id="zoom_whiteboard_button" class="zoom_whiteboard_button btn-meeting">Add a Zoom Attachement</button>\n                <a id="zoom_whiteboard_info_box" class="zoom_whiteboard_info_box" target="_blank"></a>\n            </div>\n        </div>\n    `
              ),
              B("#zoom-whiteboard-con").hide(),
              at.hasLogin)
            ) {
              let t = at.whiteboard,
                e = St();
              e?.docId ? t?.support && (st(), vt(e.docId)) : t?.support && st();
            }
          }
          addQuickWhiteboardBtn() {
            let t = k.getQuicWbBtnSiblingNode();
            if (
              t.length &&
              !B("#zoom-quick-whiteboard-con").length &&
              (t.append(
                '\n        <div id="zoom-quick-whiteboard-con" class="zoom-whiteboard-con">\n            <div aria-hidden="true" class="tzcF6">\n                <span class="DPvwYc zoom-whiteboard-icon" aria-hidden="true"></span>\n            </div>\n            <div class="j3nyw PxPKzc zoom-quick-wb-btn-con">\n                <button id="zoom_quick_whiteboard_button" class="zoom_whiteboard_button btn-meeting">Add a Zoom Attachement</button>\n                <a id="zoom_quick_whiteboard_info_box" class="zoom_whiteboard_info_box" target="_blank"></a>\n            </div>\n        </div>\n    '
              ),
              B("#zoom-quick-whiteboard-con").hide(),
              at.hasLogin)
            ) {
              let t = at.whiteboard;
              t?.support &&
                (function () {
                  B("#zoom-quick-whiteboard-con").show();
                  let t = B("#zoom-quick-whiteboard-con .zoom-quick-wb-btn-con");
                  t.on("click", "#zoom_quick_whiteboard_button", function (t) {
                    t.stopPropagation(), gt(2);
                  }),
                    t.on("click", ".delete-button", function (t) {
                      t.stopPropagation(), t.preventDefault(), mt(), B("#zoom-quick-whiteboard-con").removeClass("in-info-state");
                    }),
                    k.getQuickNewEvt().on("click", "[jsname=x8hlje]", function (t) {
                      B("#zoom-quick-whiteboard-con").hasClass("in-info-state") && jt();
                    });
                })();
            }
          }
          addWbInfoBoxForEventPop() {
            let t = k.getEventPopup();
            if (t.length && !("true" === t.attr("nowhiteboardinfo") || (t.find("#zoom-whiteboard-info-con").length && t.is(":visible")))) {
              let e = Pt();
              if (e?.docId) {
                let n = e.docId;
                t.children()
                  .eq(0)
                  .after(
                    '\n        <div id="zoom-whiteboard-info-con" class="zoom-whiteboard-con in-info-state">\n            <div aria-hidden="true" class="zZj8Pb EaVNbc">\n                <span class="DPvwYc zoom-whiteboard-icon" aria-hidden="true"></span>\n            </div>\n            <div class="j3nyw PxPKzc zoom-wb-btn-con">\n                <a id="zoom_eventpop_wb_info_box" class="zoom_whiteboard_info_box" target="_blank"></a>\n            </div>\n        </div>\n    '
                  );
                let { data: o, exception: i } = yt(n);
                if (o)
                  !(function (t, e, n) {
                    B("#zoom_eventpop_wb_info_box").attr("href", Et(t)).attr("docid", t).html(bt()), (Z = 3), (tt = t), n ? xt(t) : kt(e);
                  })(n, o, i);
                else if (it[n])
                  !(function (t) {
                    B("#zoom_eventpop_wb_info_box").attr("href", Et(t)).attr("docid", t).html(bt()), (Z = 3);
                  })(n);
                else if ((B("#zoom-whiteboard-info-con").hide(), at.hasLogin)) {
                  let t = at.whiteboard;
                  t?.support &&
                    (B("#zoom-whiteboard-info-con").show(),
                    (function (t) {
                      B("#zoom_eventpop_wb_info_box").attr("href", Et(t)).attr("docid", t).html(bt()), (Z = 3), _t(t);
                    })(e.docId));
                }
                !(function () {
                  if (!k.hasAttendeeOnEventPop()) {
                    k.getPopupDeleteBtn().off("click", Y.opt.deleteHandlerForInfoPop).on("click", Y.opt.deleteHandlerForInfoPop);
                  }
                })();
              } else t.attr("nowhiteboardinfo", "true");
            }
          }
          hasDocIdInEventPopup() {
            let t = Pt();
            return !!t?.docId;
          }
          bindWbParamForEditMeeting(t) {
            !(function (t) {
              if (t) {
                let { docId: e, permission: n } = ct();
                e && ((t.wb_doc_id = e), (t.wb_permission = n));
              }
            })(t);
          }
          getWhiteboardTokenHandler(t, e) {
            if (!t) {
              let { res: t, msg: n, access_token: o, token_exp: i } = e;
              if (t && o)
                return void (function (t, e) {
                  (J = t), e <= 0 && (e = 72e5);
                  if (((K = new Date().getTime() + e - 18e4), Array.isArray(X))) {
                    for (let t = 0; t < X.length; t++) {
                      let e = X[t];
                      try {
                        e();
                      } catch (t) {
                        console.log(t);
                      }
                    }
                    X = null;
                  } else console.log("no callback method for getWbToken!");
                })(o, i);
            }
            Array.isArray(X) && (X.includes(zt) && tt && ((it[tt] = !1), xt(tt)), (X = null));
          }
          getWhiteboardInfoHandler(t, e) {
            let n = e?.data?.docId;
            if (n) {
              it[n] = !1;
              let o = e.data;
              (ot[n] = { data: o, exception: t, time: new Date().getTime() }), t ? xt(n) : kt(o);
            }
          }
          clearDomRecord() {
            B("#zoom-whiteboard-record").empty();
          }
          checkAndClearDomRecord() {
            (B("#zoom-whiteboard-con").is(":visible") || B("#zoom-quick-whiteboard-con").is(":visible")) && this.clearDomRecord();
          }
          removeWB() {
            if (dt()) {
              let t = St();
              if (t?.docId) return pt(), !0;
            }
            return !1;
          }
          addWbFlow() {
            dt() &&
              setTimeout(function () {
                gt(1);
              }, 200);
          }
          getParsedWhiteboardInfo(t) {
            return Ft(t);
          }
          destroy() {}
        };
        var Ot = n(755),
          Vt = n(915),
          Ht = n(812);
        const Wt = Ot.noConflict();
        !(function (t) {
          let e,
            n,
            o,
            i,
            s = { needReconnect: !0 },
            l = !1,
            r = {},
            d = {},
            c = "",
            u = "",
            p = { renderData: null, selAuthLastVal: -1, $authentication: null, $zmEditDomainModule: null, authExceptionTimeout: null },
            g = !1,
            h = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            f = null,
            v = !1,
            b = { $editRegionModule: null, selRegion: [], selType: "0", editCache: { allow: [], deny: [] } },
            _ = null,
            y = null,
            z = null,
            w = null;
          function C() {
            chrome.runtime.sendMessage({ type: "getAccountEmail" }, function (t) {
              let e = t?.email;
              !u && e
                ? (i.getWhiteboardData(), i.preloadWhiteboard())
                : u && !e
                ? (i.getWhiteboardData(), i.reloadWhiteboardDialog(!0))
                : u && e && u !== e && (i.getWhiteboardData(), i.reloadWhiteboardDialog(), Ht.showToast(Vt.tips[44], "warning")),
                (u = e);
            });
          }
          function D() {
            (s = chrome.runtime.connect({ name: "Zoom" })), s.onDisconnect.addListener(T), s.onMessage.addListener(S);
          }
          function T(t) {
            "Zoom" === t.name && (s.needReconnect = !0);
          }
          function j(t) {
            if (s) {
              E();
              try {
                s.postMessage(t);
              } catch (e) {
                console.log("port.postMessage errors: ", e), D(), s.postMessage(t);
              }
            } else Ht.showToast(Vt.errors[9], "warning");
          }
          function E() {
            s?.needReconnect && ((s = null), D());
          }
          function S(o) {
            if (o.error)
              o.syncState
                ? 1 == o.syncState
                  ? $e(o.errorMsg, !1, "progress")
                  : 2 == o.syncState
                  ? ($e(o.errorMsg, !0, "success"), J(), o.noReviveSchedule || K())
                  : ($e(o.errorMsg, !0, "fail"), J())
                : (J(), "login###again" === o.errorMsg ? jt() : alert(o.errorMsg || Vt.errors[8]));
            else if ("schedule" === o.type || "pmi" === o.type) {
              let e = o.meeting,
                n = k.getWhereNode();
              n.length && e.addJoinUrl && k.setWhereNodeValue(e.joinUrl);
              let i = k.getTopicNode().val(),
                a = m.getUserLanguage();
              if (!i || i === R[a]) {
                let t = e.topic;
                k.setTopicNodeValue(t);
              }
              k.setDescNodeValue(e.email),
                Ie(e.joinUrl),
                kt(dt()),
                window.setTimeout(function () {
                  n[0] && n[0].focus();
                }, 100),
                t("#zoom_schedule_button_wrapper > *").hide(),
                t("#zoom_schedule_meeting_url").show(),
                k.getGoogleVideoCallButtons().hide(),
                t("#zoom-quick2adv-number").length <= 0
                  ? t("body").append('<div id="zoom-quick2adv-number" style="display:none;">' + P(e.number) + "</div>")
                  : t("#zoom-quick2adv-number").text(e.number),
                t("#YPCqFe #zm-usepmi").length <= 0
                  ? t("#YPCqFe").append('<div id="zm-usepmi" style="display:none;">' + P(e.usepmi) + "</div>")
                  : t("#YPCqFe #zm-usepmi").text(e.usepmi),
                wt();
            } else
              "updateZmOptions" === o.type
                ? "object" === Ht.type(o.zmOpt) &&
                  (function (n, o) {
                    (r = o),
                      (v = (function () {
                        let t = !1;
                        try {
                          let e = r.meetingFeatures.waitingRoom.childParams.op.value;
                          "boolean" === Ht.type(e) && (t = e);
                        } catch (t) {}
                        return t;
                      })()),
                      (function () {
                        let e = r.zoom_assistants;
                        if (e && e.length > 0) {
                          let n = [{ id: "me", label: "Myself", extData: { email: r.host_email || "", pmi: r.zoom_config_pmiNum || "0" } }];
                          t.each(e, function (t, e) {
                            "000-000-000" === e.roomid && (e.roomid = "0"),
                              n.push({ id: e.id, label: e.name, extData: { email: e.email || "", pmi: e.roomid || "0" } });
                          }),
                            (z = new V.Z({
                              el: t("#zoom-setting .schedule-for-cont").get(0),
                              defaultValue: r.zoom_config_schedule_for || "me",
                              dataList: n,
                              jquery: Wt,
                              multiParamResults: !0,
                              ariaLabel: "select meeting host",
                              changeCallback: function () {
                                let { id: e, extData: n } = z.getSelectedResult(),
                                  o = n?.pmi;
                                "0" !== o && "000-000-000" !== o
                                  ? t(".meetingtype .pmi_number").text(o)
                                  : t(".meetingtype .pmi_number").text(""),
                                  Re();
                                let i = t("#zoom-setting .recording");
                                "me" !== e ? i.addClass("hide-change-setting") : i.removeClass("hide-change-setting"), Mt();
                              }
                            }));
                        } else
                          t("#zoom-setting .schedule").hide(),
                            "0" !== r.zoom_config_pmiNum && t("#zoom-setting .meetingtype .pmi_number").text(r.zoom_config_pmiNum);
                        Re();
                      })(),
                      (function () {
                        let e = r.adminTemplates;
                        if (Array.isArray(e) && e.length) {
                          let n = [{ id: "none", label: "None", suppleDesc: "", groupTitleIndex: -1 }];
                          for (let t = 0, o = e.length; t < o; t++) {
                            let o = e[t];
                            n.push({
                              id: o.templateId,
                              label: o.name,
                              suppleDesc: o.templateTip,
                              groupTitleIndex: o.templateType - 1,
                              extData: { templateType: o.templateType }
                            });
                          }
                          (w = new V.Z({
                            el: t("#zoom-setting .template-sel-cont").get(0),
                            defaultValue: "none",
                            dataList: n,
                            jquery: Wt,
                            ariaLabel: "select meeting template",
                            groupRender: !0,
                            placeholder: "Select a template",
                            multiParamResults: !0,
                            groupTitleArr: ["Personal templates", "Account templates"],
                            changeCallback: function (e) {
                              "none" !== e
                                ? t("#zoom-setting .template").addClass("showWarning")
                                : t("#zoom-setting .template").removeClass("showWarning");
                            }
                          })),
                            t("#zoom-setting .template").on("click", ".view-template-btn", function (t) {
                              t.stopPropagation();
                              let { id: e, extData: n } = w.getSelectedResult();
                              e && "none" !== e && j({ type: "viewTemplateDetail", info: { templateId: e } });
                            });
                        } else t("#zoom-setting .template").remove();
                      })(),
                      o && o.schedulePmiLock && (t("[name=meeting_type]").prop({ disabled: !0 }), t(".pmi").append(e).addClass("haslock"));
                    var i = o.zoom_config_audio;
                    o.zoom_config_hasOther ||
                      (n.find(".audio #option_audio_3rd").parent().hide(),
                      "other" == i && (i = "both"),
                      n.find(".audio #option_audio_both").next().text("Both"));
                    o.zoom_config_noBoth && (n.find(".audio #option_audio_both").parent().hide(), "both" == i && (i = "telephony"));
                    var a = o.zoom_config_mute_upon_entry,
                      s = o.zoom_config_public_cal,
                      d = o.zoom_config_pmi,
                      c = o.zoom_config_video_host,
                      u = o.zoom_config_video_participants,
                      p = o.zoom_config_joinurl;
                    (l = o.security.pmi.passcode.default_jbh),
                      t("[name=meeting_type][value=" + (d ? "pmi" : "onetime") + "]").prop({ checked: !0 }),
                      n.find("#setting_option_uponentry").prop("checked", a),
                      n.find("[name=option_video_host][value=" + c + "]").prop("checked", !0),
                      n.find("[name=option_video_participants][value=" + u + "]").prop("checked", !0),
                      n.find("[name=option_audio][value=" + i + "]").prop("checked", !0),
                      n.find("#setting_option_joinurl").prop("checked", p),
                      (function () {
                        if (v) t("#zoom-setting .control-row.jbh").remove();
                        else {
                          t("#zoom-setting #setting_option_jbh").on("change", function () {
                            l && Lt() && pe(!0), y && y.changeLockState(!t(this).prop("checked"));
                          });
                          let e = r.zoom_config_jbh;
                          t("#zoom-setting #setting_option_jbh").prop("checked", e);
                          let n = r.lockOpts && r.lockOpts.jbh_locked;
                          if ((n && Te(t("#zoom-setting .control-row.jbh"), !0), r.enableJBHPriorStartMeeting)) {
                            let o = r.JBHPriorStartMeetingList,
                              i = [];
                            t.each(o, function (t, e) {
                              i.push({ id: t, label: e });
                            });
                            let a = r.jbhTimeMinutes;
                            (y = new V.Z({
                              el: t("#zoom-setting .jbh .JBH-prior-start-cont").get(0),
                              defaultValue: a || "",
                              dataList: i,
                              lockState: n,
                              styleType: 2,
                              jquery: t,
                              ariaLabel: "select time",
                              scrollContainer: t("#zoom-setting .modal-body").get(0),
                              changeCallback: function (t) {}
                            })),
                              t("#zoom-setting .control-row.jbh").addClass("show-prior"),
                              e || y.changeLockState(!0);
                          }
                        }
                      })(),
                      (function (e) {
                        let n = Ft("qa", e),
                          o = t("#zoom-setting .qa");
                        n.show ? (n.disabled && Te(t("#zoom-setting .qa > label"), !0), Nt(e)) : o.remove();
                      })(d),
                      (function () {
                        let e = t("#zoom-setting .meetingchat");
                        e.on("change", "#setting_option_pmc", function (n) {
                          t(this).prop("checked") ? e.addClass("beencheck") : e.removeClass("beencheck");
                        }),
                          Mt();
                      })(),
                      (function (e) {
                        let n = Ft("meetingSummary", e),
                          o = t("#zoom-setting .meetingSummary");
                        n.show ? (n.disabled && Te(t("#zoom-setting .meetingSummary > label"), !0), It(e)) : o.remove();
                      })(d),
                      (function (e) {
                        let n = Ft("meetingQuery", e),
                          o = t("#zoom-setting .meetingQuery");
                        n.show ? (n.disabled && Te(t("#zoom-setting .meetingQuery > label"), !0), qt(e)) : o.remove();
                      })(d),
                      o.zoom_config_hasPubCal
                        ? n.find("#setting_option_public_cal").prop("checked", s)
                        : t("#setting_option_public_cal").parents(".checkbox-inline").hide();
                    pe(),
                      (function (e) {
                        let n = r.dcOptions;
                        if (n.support && !n.locked) {
                          let o = r.enableDC,
                            i = t("#zoom-setting .dcRegions .dc-group"),
                            a = t("#zoom-setting #setting_option_enableDC");
                          if (n.options.length) {
                            let e = (function (e) {
                              let n = "",
                                o = e.length - 1;
                              return (
                                t.each(e, function (t, e) {
                                  t % 2 == 0 && (n += '<div class="tablerow">'),
                                    (n += `\n\t\t\t\t<div class="tablecell">\n\t\t\t\t\t<label><input type="checkbox" name="option_dc_region" dcabbr="${P(
                                      e.abbr
                                    )}"><span>${P(e.name)}</span></label>\n\t\t\t\t</div>\n\t\t\t`),
                                    (t % 2 == 0 && t !== o) || (n += "</div>");
                                }),
                                n
                              );
                            })(n.options);
                            i.html(e),
                              (function () {
                                let e = t("#zoom-setting .dcRegions"),
                                  n = t("#zoom-setting .dcRegions .dc-group"),
                                  o = t("#zoom-setting #setting_option_enableDC");
                                n.find("input").on("change", function (t) {
                                  e.hasClass("has-error") && m.hideHasErrorMsg(n);
                                }),
                                  o.on("change", function (o) {
                                    t(this).prop("checked") ? e.addClass("showSubOptions") : e.removeClass("showSubOptions"),
                                      e.hasClass("has-error") && m.hideHasErrorMsg(n);
                                  });
                              })();
                          }
                          o &&
                            t.each(o, function (t, e) {
                              i.find("[dcabbr=" + t + "]").prop("checked", e), e && a.prop("checked", !0).trigger("change");
                            }),
                            e && t("#zoom-setting .dcRegions").addClass("pmi");
                        } else t("#zoom-setting .dcRegions").remove();
                      })(d);
                    let g = o.watermark || {};
                    g.support
                      ? (t("#setting_option_watermark").prop("checked", g.defaultVal),
                        g.locked &&
                          (t("#setting_option_watermark").prop("checked", !0).prop("disabled", !0),
                          t("#setting_option_watermark").parent().append(e).parent().addClass("haslock")))
                      : t("#setting_option_watermark").parents(".watermark").remove();
                    let h = o.audioWatermark || {};
                    h.support
                      ? (t("#setting_option_audiomark").prop("checked", h.defaultVal),
                        h.locked &&
                          (t("#setting_option_audiomark").prop("checked", !0).prop("disabled", !0),
                          t("#setting_option_audiomark").parent().append(e).parent().addClass("haslock")))
                      : t("#setting_option_audiomark").parents(".audiomark").remove();
                    o.show_unmute_all
                      ? n.find("#unmute_all").prop("checked", o.enable_unmute_all)
                      : n.find(".control-row.unmute_all").remove();
                    if (
                      (ue(),
                      At(),
                      (function (e) {
                        let n = Ft("autoRec", e),
                          o = t("#zoom-setting .recording");
                        if (n.show) {
                          let a = n.dataOptions,
                            s = "",
                            l = a.length;
                          if (l) {
                            if (l > 1) {
                              for (var i = 0; i < l; i++) {
                                let t = a[i];
                                s += `\n\t\t\t\t\t\t\t<label class="radio-inline ${t.id}">\n\t\t\t\t\t\t\t\t<input type="radio" id="option_rec_${t.id}" name="option_rec_id" value="${t.id}" />${t.label}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t`;
                              }
                              if ((o.find(".recording-radio").html(P(s)), n.childParams.exceedMaxStorage.value)) {
                                let t = `\n\t\t\t\t\t\t\t<div class="exceed-storage warning">${Vt.tips[35]}</div>\n\t\t\t\t\t\t`;
                                o.append(P(t));
                              }
                            } else {
                              let e = a[0].label;
                              if (
                                ((e = "string" === Ht.type(e) ? e.toLowerCase() : ""),
                                t("#setting_recording")
                                  .next()
                                  .text(Vt.tips[4] + e),
                                o.find(".recording-radio").remove(),
                                o.addClass("on" + a[0].id),
                                n.childParams.exceedMaxStorage.value)
                              ) {
                                let t = `\n\t\t\t\t\t\t\t<div class="exceed-storage warning">${Vt.tips[35]}\n\t\t\t\t\t\t\t\t<div class="change-setting">${Vt.tips[36]}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;
                                o.append(P(t)), o.find(".exceed-storage a").attr("href", r.mySettingUrl + "?tab=recording");
                              }
                            }
                            !(function () {
                              let e = t("#zoom-setting .recording");
                              t("#setting_recording").on("change", function () {
                                t(this).prop("checked") || !1 ? e.addClass("beencheck") : e.removeClass("beencheck");
                              }),
                                t("[name=option_rec_id]").on("change", function () {
                                  e.removeClass("oncloud onlocal").addClass("on" + t(this).val());
                                }),
                                e.on("click", ".exceed-storage a", function (e) {
                                  e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                                });
                            })(),
                              n.disabled &&
                                (Te(t("#zoom-setting .recording > label"), !0),
                                t("#zoom-setting [name=option_rec_id]").prop("disabled", !0)),
                              oe(e);
                          } else o.remove();
                        } else o.remove();
                      })(d),
                      ae(),
                      ie(),
                      (function () {
                        let e = Ft("interpretation", !1),
                          n = t("#zoom-setting .interpretation");
                        e.show
                          ? (Gt(e),
                            (function () {
                              let e = t("#zoom-setting .interpretation");
                              e.on("change", "#setting_option_interpretation", function (n) {
                                n.stopPropagation(), t(this).prop("checked") ? e.addClass("beencheck") : e.removeClass("beencheck");
                              }),
                                e.on("click", ".add-interpretation-btn", function (t) {
                                  t.stopPropagation(), t.preventDefault(), Gt();
                                }),
                                e.on("click", ".remove-line-btn", function (e) {
                                  e.stopPropagation(),
                                    e.preventDefault(),
                                    (function (e) {
                                      let n = e.next();
                                      e.find(".interpretation-sel-cont").each(function (t, e) {
                                        e.zoomSelectObj && e.zoomSelectObj.destroy();
                                      }),
                                        e.remove();
                                      let o = 20,
                                        i = t("#zoom-setting .interpretation");
                                      i.hasClass("max-line") && i.find(".edit-interpretation-line").length < o && i.removeClass("max-line");
                                      Ut(),
                                        n.length
                                          ? n.find(".remove-line-btn").trigger("focus")
                                          : t("#zoom-setting .interpretation .add-interpretation-btn").trigger("focus");
                                    })(t(this).parent());
                                }),
                                e.on("blur", ".interpretation-email", function (e) {
                                  e.stopPropagation(), Qt(t(this).parent(), !0);
                                });
                            })(),
                            n.find("#setting_option_interpretation").prop("checked", e.value).trigger("change"))
                          : n.remove();
                      })(),
                      o.lockOpts)
                    ) {
                      var f = o.lockOpts;
                      f.hostVideo_locked &&
                        (t("[name=option_video_host]").prop("disabled", !0),
                        t(".video .video-controls-label:first").append(e).addClass("haslock")),
                        f.pVideo_locked &&
                          (t("[name=option_video_participants]").prop("disabled", !0),
                          t(".video .video-controls-label:last").append(e).addClass("haslock")),
                        f.audio_locked &&
                          (t("[name=option_audio]").prop("disabled", !0), t(".audio .controls[role=group]").append(e).addClass("haslock")),
                        f.public_cal_locked &&
                          (t("#setting_option_public_cal").parent().append(e).parent().addClass("haslock"),
                          t("#setting_option_public_cal").prop("disabled", !0)),
                        f.mute_locked &&
                          (t("#setting_option_uponentry").prop("disabled", !0),
                          t("#setting_option_uponentry").parent().append(e).parent().addClass("haslock"));
                    }
                    o && !0 === o.option_enable_reg
                      ? o.schedulePmiLock
                        ? n.find("#setting_option_requirereg").prop({ disabled: !0 })
                        : !0 === o.zoom_option_require_reg && n.find("#setting_option_requirereg").prop({ checked: !0 }).trigger("change")
                      : n.find("#setting_option_requirereg").parent().parent().hide();
                    t("#meeting_type_normal").trigger("change"), Pt();
                  })(t("#zoom-setting .content_container form"), o.zmOpt)
                : "delSuccess" === o.type
                ? o.meeting && 0 != o.meeting && je()
                : "iconDeleteSuccess" === o.type
                ? (Ct(o.meeting), o.meeting && 0 != o.meeting && je())
                : "iconDeleteFailed" === o.type
                ? (!(function () {
                    let e = t("#zoom-video-sec i.icon-trash"),
                      n = e.get(0);
                    n && (e.removeClass("loading"), (n.lock = !1));
                  })(),
                  o.showMsg && Ht.showToast(o.showMsg, "warning"))
                : "workemailSigninResult" === o.type ||
                  "ssoSigninResult" === o.type ||
                  ("deleteMeetingToast" == o.type
                    ? je()
                    : "editFailed" == o.type
                    ? Ht.showToast(o.errorMsg, "warning")
                    : "remoteCheckPwdResult" == o.type
                    ? (function (t, e) {
                        if (t) {
                          let { res: t, msg: o, errortype: i } = n.checkRules();
                          Y(t, o, i, e.channel);
                        } else {
                          let { res: t, msg: n, errortype: o, channel: i } = e;
                          Y(t, n, o, i);
                        }
                      })(o.exception, o.info)
                    : "updateTimeAndTimezoneFailed" == o.type
                    ? Ht.showToast(o.errorMsg, "warning")
                    : "getWhiteboardTokenResult" == o.type
                    ? i.getWhiteboardTokenHandler(o.exception, o.info)
                    : "getWhiteboardInfoResult" == o.type && i.getWhiteboardInfoHandler(o.exception, o.info));
          }
          function P(t) {
            return Ht.safeHTML(t);
          }
          function F(e) {
            let n = e?.data?.meetingNumber || "",
              o = t("#xDetDlg").attr("data-eventid") || "";
            (n || o) &&
              (sendLogToBackend({ msgType: 2, msg: { msg: "del07", meetingNumber: n, nodeId: this.id }, operaType: 1 }),
              j({ type: "delete", info: { number: n, zm_eid: o } }));
          }
          function M(e) {
            let n = t(this).attr("data-id") || "";
            if ("di8rgd" === n || "deA65" === n) {
              let e = ht(),
                n = e?.number || "",
                o = t("#xDetDlg").attr("data-eventid") || "";
              (n || o) &&
                (sendLogToBackend({ msgType: 2, msg: { msg: "del04", meetingNumber: n, jsname: t(this).attr("jsname") }, operaType: 1 }),
                j({ type: "delete", info: { number: n, zm_eid: o } }));
            }
          }
          function N(t) {
            return ["tabAway", "tabReminder", "tabTask", "tabAppointmentSlotsV2Entry", "tabWorkingLocation"].includes(t);
          }
          function I() {
            if (k.getQuickNewEvt().length > 0) {
              0,
                k.getQuickSaveBtnNode().on("click", function (e) {
                  t("#zoom_repeat_edit_flag").text("0"), t("#zoom_recurring_edit_flag").text("");
                  let n = (function () {
                    let t,
                      e = k.getFocusTimeDescNode();
                    e.length && (t = ft(e.html().replace(/<br>/g, " ")));
                    let n = k.getWhereNode();
                    !t && n.length && (t = ft(k.getValueForWhereNode(n[0])));
                    return t;
                  })();
                  if (n && n.url) {
                    let e = {
                      number: n.number,
                      topic: k.getQuickTopicNode().val(),
                      startTime: tt(),
                      isRepeat: k.isRepeat(),
                      zoomrooms: k.getZoomRoomsFromQuickSchedule(),
                      duration: st(),
                      timezone: Dt(),
                      isPrivateEvent: k.getIsPrivateEvent(),
                      event_baseid: k.getBaseidFromDom(),
                      zm_eid: k.getEidFromDom()
                    };
                    !e.event_baseid && e.zm_eid && (e.event_baseid = Ht.convertEidToBaseid(e.zm_eid)),
                      j({ type: "update", info: e }),
                      (e.startTime && e.timezone && e.topic) || t("#zoom_repeat_edit_flag").text("1");
                  }
                  t("#zoom_edit_event_flag").text("1");
                });
            }
          }
          function q(e) {
            setTimeout(() => {
              (e.lock = !1), t(".zm-busy24").hide();
            }, 1200);
          }
          (async function () {
            0;
            a &&
              (a.loadObserver(),
              t(a)
                .on("calendarIdObtained", function (t) {
                  j({
                    type: "saveNewCalendarEvent",
                    info: {
                      calendarId: t.calendarId,
                      number: t.number,
                      event_baseid: t.event_baseid,
                      scheduleTime: t.scheduleTime,
                      wb_doc_id: t.wb_doc_id,
                      wb_permission: t.wb_permission
                    }
                  });
                })
                .on("calendarIdRemoved", function (t) {
                  let e = t.event_baseid,
                    n = Oe(e);
                  d[n] && (j({ type: "removeCalendarEvent", info: { calendarId: t.calendarId, event_baseid: e } }), delete d[n]);
                })
                .on("updateTimeAndTimezone", function (t) {
                  let e = t.dates;
                  j({
                    type: "updateTimeAndTimezone",
                    info: {
                      calendarId: t.calendarId,
                      event_baseid: t.event_baseid,
                      startTime: ot(e),
                      duration: it(e),
                      timezone: t.timezone || lt(),
                      topic: t.topic || "",
                      number: t.number || "",
                      zoomrooms: t.zoomrooms || ""
                    }
                  });
                })
                .on("recordZmlog", function (t) {
                  sendLogToBackend({ msgType: t.msgType, msg: t.msg, operaType: t.operaType });
                })
                .on("saveInvitee", function (t) {
                  if (t.reFilter) {
                    let e = null,
                      n = null;
                    if (
                      (t.descText && ((e = ft(t.descText)), (n = i.getParsedWhiteboardInfo(t.descText))),
                      !e && t.joinUrl && (e = ft(t.joinUrl)),
                      !e && !n)
                    )
                      return;
                  }
                  let e = r.maxAttendee || 1e3;
                  t.invitee.length > e && (t.invitee = t.invitee.slice(0, e));
                  let n = t.invitee.join(";");
                  j({
                    type: "saveInvitee",
                    info: {
                      meetingNumber: t.meetingNumber,
                      wb_doc_id: t.wb_doc_id,
                      wb_permission: t.wb_permission,
                      event_baseid: t.event_baseid,
                      invitee: n
                    }
                  });
                })),
              (e = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${Vt.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`),
              t("body").on("click", ".zoom-dialog a", function (t) {
                t.preventDefault(), t.stopPropagation();
              }),
              t("body").on("submit", ".zoom-dialog form", function (t) {
                t.preventDefault(), t.stopPropagation();
              }),
              (function () {
                var e, n;
                if (
                  (chrome.runtime.onMessage.addListener(function (t, e, n) {
                    "authenticationSigninResult" === t.type
                      ? (function (t) {
                          if (t.msg) {
                            let e = t.msg;
                            t.errorCode && (e += " (error: " + t.errorCode + ")"), alert(e);
                          } else Ht.showToast(Vt.tips[11]);
                        })(t)
                      : "notificationSignout" === t.type && C();
                  }),
                  Wt("body").attr("data-viewfamily"))
                ) {
                  let e = new h(function (t) {
                    g && qe();
                  });
                  var o = new h(function (n) {
                    let o = t("#zoom-video-sec");
                    o.length > 0
                      ? g &&
                        !o.attr("datetimeob") &&
                        (!(function (e) {
                          let n = document.querySelector("#xStDaIn");
                          n && e.observe(n, { attributeFilter: ["data-date"], attributes: !0 });
                          let o = document.querySelector("#xStTiIn");
                          o && e.observe(o, { attributeFilter: ["data-initial-value"], attributes: !0 });
                          let i = document.querySelector("#xEnDaIn");
                          i && e.observe(i, { attributeFilter: ["data-date"], attributes: !0 });
                          let a = document.querySelector("#xEnTiIn");
                          a && e.observe(a, { attributeFilter: ["data-initial-value"], attributes: !0 });
                          let s = t("div[jsname=L2QMlb]")[0];
                          s && e.observe(s, { attributeFilter: ["class"], attributes: !0 });
                        })(e),
                        o.attr("datetimeob", "1"))
                      : "EVENT_EDIT" === Wt("body").attr("data-viewfamily") &&
                        (!(function () {
                          let e = k.getZoomBtnSiblingNode();
                          if (e.length) {
                            var n = t('<div id="zoom-video-sec" class="' + P(e[0].className) + ' zoom-video-sec"></div>');
                            e.after(n),
                              n.append(
                                ((r = []).push('\t<div aria-hidden="true" class="tzcF6">'),
                                r.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>'),
                                r.push("\t</div>"),
                                r.push('\t<div class="j3nyw PxPKzc zoom-btn">'),
                                r.push("\t</div>"),
                                r.join(""))
                              ),
                              vt(),
                              "" === t("#hInySc0").text() &&
                                "" !== t("#zm-quick2adv-desc").text() &&
                                k.setDescNodeValue(document.querySelector("#zm-quick2adv-desc").innerHTML);
                            var o = location.pathname.split("eventedit/");
                            if (
                              (t("#zm-hidden-eid").length <= 0 &&
                                t("#YPCqFe").append('<div id="zm-hidden-eid" style="display:none;"></div>'),
                              t("#zoom_repeat_edit_flag").text("0"),
                              t("#zoom_recurring_edit_flag").text(""),
                              t("#zoom-quick2adv-number").empty(),
                              i.clearDomRecord(),
                              o && 2 == o.length && o[1].length > 48 && -1 == o[1].indexOf("duplicate/"))
                            )
                              t("#YPCqFe #zm-hidden-eid").text(o[1]);
                            else if ((t("#YPCqFe #zm-hidden-eid").text(""), o && 2 == o.length && o[1].indexOf("duplicate/") > -1)) {
                              let e = i.removeWB();
                              var a;
                              if ((a = gt()) && a.number) {
                                var s = ft(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
                                s && s.number && t("#xRemRtcBu").trigger("click"),
                                  chrome.runtime.sendMessage({ type: "isNoMeetingLicenseUser" }, function (t) {
                                    setTimeout(function () {
                                      Ct(), t.noLicenseUser ? (n.hide(), e && i.addWbFlow()) : A();
                                    }, 200);
                                  });
                              } else e && i.addWbFlow();
                            }
                            if (
                              (t("#YPCqFe #zm-usepmi").empty(),
                              chrome.runtime.sendMessage({ type: "checkShowFree40MinsTip" }, function (e) {
                                e?.showFree40MinsTip
                                  ? ((g = !0),
                                    (function (e) {
                                      let n = `\n\t\t\t<div class="zoom-free-tooltip">\n\t\t\t\t<div>\n\t\t\t\t\t<div class="" aria-hidden="true">Your Zoom Basic plan has a 40-minute time limit on meetings.</div>${
                                        e
                                          ? ""
                                          : `<a href="https://zoom.us/buy?plan=pro&from=pro&zcid=2166&utm_source=Product&utm_medium=email&utm_content=FreeToPro&utm_campaign=${
                                              "edge" === Vt.browserConfig ? "EdgeExtension" : "ChromeExtension"
                                            }" class="zoom-upgrade" target="_blank"> Upgrade now </a> to enjoy unlimited meetings.`
                                      }\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;
                                      t(".zoom-free-tooltip").length <= 0 && t("#xDaRaSel").after(n);
                                    })(e?.isPaidAccount),
                                    qe())
                                  : (g = !1);
                              }),
                              (a = gt()))
                            ) {
                              var l = dt();
                              a.url && Ie(a.url), t("#zoom_schedule_meeting_url").show(), kt(l);
                            } else
                              chrome.runtime.sendMessage({ type: "isNoMeetingLicenseUser" }, function (e) {
                                e.noLicenseUser
                                  ? n.hide()
                                  : (function () {
                                      var e = t("#zoom-video-sec").find(".zoom-btn");
                                      e.addClass("zoom-button-container");
                                      var n = t("<button>", {
                                        id: "zoom_schedule_button",
                                        html: "Make it a Zoom Meeting",
                                        class: "btn-meeting"
                                      });
                                      0 == t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length &&
                                        (e.prepend(t('<div id="zoom_schedule_button_wrapper"></div>').prepend(n)),
                                        n.off("click").on("click", function () {
                                          xt(n);
                                        }));
                                      var o = t("#zoom_schedule_button_wrapper");
                                      chrome.runtime.sendMessage({ type: "supportPAC" }, function (e) {
                                        if (e.hasPac) {
                                          var n = t("<button>", {
                                            id: "zoom_schedulepac_button",
                                            html: "Personal Audio Conference",
                                            class: "btn-pac"
                                          });
                                          0 == t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length && o.append(n),
                                            n.off("click").on("click", function () {
                                              U(n);
                                            });
                                        }
                                      }),
                                        t("#YPCqFe").length && X("dates")
                                          ? chrome.runtime.sendMessage({ type: "getReadyToSchedule" }, function (t) {
                                              t.readyToSchedule
                                                ? "complete" === document.readyState
                                                  ? setTimeout(function () {
                                                      A();
                                                    }, 1e3)
                                                  : (window.onload = function () {
                                                      A();
                                                    })
                                                : n.show();
                                            })
                                          : n.show();
                                    })();
                              });
                          }
                          var r;
                        })(),
                        i.addWhiteboardBtn()),
                      n.forEach(function (e) {
                        try {
                          e.addedNodes[0].className.indexOf("XVt2Ub-bF1uUb") > -1 &&
                            document.querySelector(".Sb44q") &&
                            (t("#zoom_edit_event_flag").text("0"),
                            t("#zoom-quick2adv-number").empty(),
                            t("#zoom_repeat_edit_flag").text("0"),
                            i.clearDomRecord());
                        } catch (t) {}
                        var n = e.addedNodes[0] && e.addedNodes[0].outerHTML;
                        if (
                          n &&
                          e.target == document.body &&
                          e.addedNodes[0].innerHTML &&
                          e.addedNodes[0].innerHTML.indexOf('id="J9Hpafc') > 0
                        ) {
                          var o = e.addedNodes[0].querySelector("div.YrbPvc"),
                            a = e.addedNodes[0].querySelector("div[role=button][aria-describedby^=J9Hpafc]");
                          a && null !== a && o && o.removeChild(a);
                        }
                        if (n && -1 !== n.search('role="dialog"')) {
                          if ("EVENT_EDIT" == document.querySelector("body").dataset.viewfamily)
                            t("div[jsname=troJl] div[jsname=V68bde]").off(),
                              t("div[jsname=troJl] div[jsname=V68bde]").on("click", "div[role=option]", function (e) {
                                t(this)
                                  .parents("div[jsname=troJl]")
                                  .attr("zm_st_tzid", t(this).attr("data-value").replace("suggestion:", ""));
                              }),
                              t("div[jsname=troJl] div[jsname=V68bde]").on("keydown", function (e) {
                                if (13 == e.keyCode) {
                                  var n = t(this).find("div[role=option][tabindex=0]").attr("data-value").replace("suggestion:", "");
                                  n && t(this).parents("div[jsname=troJl]").attr("zm_st_tzid", n);
                                }
                              }),
                              t("div[jsname=c6xFrd]").on("keydown", ">div[data-id=EBS5u]", function (e) {
                                13 == e.keyCode && t(this).trigger("click");
                              }),
                              t("div[jsname=c6xFrd]").on("click", ">div[data-id=EBS5u]", function (e) {
                                var n = t("div[jsname=troJl]").attr("zm_st_tzid");
                                if (n) t("div[jsname=L2QMlb] div[jsname=yxQRke]").attr("timezoneid", n);
                                else {
                                  var o = document.body.innerHTML.match(/\[\\"timezone\\",\\"(.*)\\\"],\[\\"defaultCalMode\\"/),
                                    i = o && o[1];
                                  t("div[jsname=L2QMlb] div[jsname=yxQRke]").attr("timezoneid", i || "");
                                }
                              }),
                              n &&
                                -1 !== n.search('id="b1w9Rc"') &&
                                "yDmH0d" === t(e.target).attr("id") &&
                                t("#yDmH0d div[jsname=c6xFrd] div[jsname=LgbsSe][data-id=EBS5u]").on("click", function (e) {
                                  let n = t('#yDmH0d [jsname=bN97Pc] input[name="cYHKXe"]:checked').val();
                                  if (["Y8PVec", "NkyfNe", "Woal0c"].includes(n))
                                    t("#zoom_recurring_edit_flag").text(
                                      (function (t) {
                                        switch (t) {
                                          case "Y8PVec":
                                            return "TAIL";
                                          case "NkyfNe":
                                            return "ALL";
                                          default:
                                            return "";
                                        }
                                      })(n)
                                    );
                                  else {
                                    let e = t('#yDmH0d [jsname=bN97Pc] input[name="cYHKXe"]:checked').closest("label[class=SDtMeb]");
                                    if (e.length && e.parents("#yDmH0d").length) {
                                      let n = e.text().toLowerCase(),
                                        o = "";
                                      n.indexOf("following") > -1 ? (o = "TAIL") : n.indexOf("all") > -1 && (o = "ALL"),
                                        t("#zoom_recurring_edit_flag").text(o);
                                    }
                                  }
                                });
                          else if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                            if (
                              -1 !== n.search('jsname="c6xFrd"') &&
                              -1 == n.search('jsname="VGHUeb"') &&
                              -1 == n.search('jsname="AOxYWc"')
                            ) {
                              let n = ht(),
                                o = n?.url;
                              if (o) {
                                let n = e.addedNodes[0],
                                  o = n.querySelector("span[jsname=bN97Pc] >div");
                                if (
                                  o &&
                                  -1 == o.innerHTML.search("zm-remove-line") &&
                                  n.querySelector("div[jsname=d8Aqse] textarea[jsname=YPqjbf]")
                                ) {
                                  let e = t("#rAECCd").text();
                                  if (e) {
                                    var s = document.createElement("div");
                                    s.setAttribute("class", "zm-remove-line");
                                    var l = document.createElement("div"),
                                      r = document.createElement("div");
                                    l.appendChild(document.createTextNode("Topic")),
                                      r.appendChild(document.createTextNode(e)),
                                      s.appendChild(l),
                                      s.appendChild(r),
                                      o.insertBefore(s, o.childNodes[1]);
                                  }
                                  let n = t("#xDetDlgWhen").find(".CyPPBf");
                                  if (
                                    (n.length || (n = t("#xDetDlgWhen").find(".AzuXid")),
                                    n.length || (n = t("#xDetDlgWhen").find("#rAECCd").parent().next()),
                                    n.length)
                                  ) {
                                    var c = document.createElement("div");
                                    c.setAttribute("class", "zm-remove-line");
                                    var u = document.createElement("div"),
                                      m = document.createElement("div"),
                                      p = n.clone(),
                                      g = p.find("span").remove();
                                    u.appendChild(document.createTextNode("Time")),
                                      m.appendChild(document.createTextNode(p.text() + " " + g.text())),
                                      c.appendChild(u),
                                      c.appendChild(m),
                                      o.insertBefore(c, o.childNodes[2]);
                                  }
                                }
                              }
                              (i.hasDocIdInEventPopup() || o) &&
                                t("div[jsaction][jsname=c6xFrd]")
                                  .off("click", "[jsname=LgbsSe][data-id]", M)
                                  .on("click", "[jsname=LgbsSe][data-id]", M);
                            }
                            if (-1 !== n.search('jsname="bN97Pc"') && -1 !== n.search('class="aZpV8b'))
                              if (
                                -1 === n.search('jsname="wU3vpb"') &&
                                -1 === n.search('jsname="PAiuue"') &&
                                t("#yDmH0d [jsname=bN97Pc] div[jsname=GfMrC]").is(":visible")
                              )
                                I();
                              else {
                                k.getQuickNewEvt().length > 0 &&
                                  (chrome.runtime.sendMessage({ type: "isNoMeetingLicenseUser" }, function (e) {
                                    e.noLicenseUser
                                      ? k.getQuickSaveBtnNode().css("background", "#1a73e8")
                                      : (function () {
                                          var e = k.getQuickNewEvt();
                                          if (e.length > 0) {
                                            if (
                                              !e.find("[jsname=PAiuue]").length &&
                                              !e.find("[jsname=wU3vpb]").length &&
                                              e.find("[jsname=hG1TZc]").length
                                            )
                                              return;
                                            let n = !1;
                                            if (
                                              (e.find("div[jsname=x8hlje]").length < 1 && (n = !0), e.find(".quick-schedule").length <= 0)
                                            ) {
                                              let o = "";
                                              n
                                                ? ((o =
                                                    '\n\t\t\t\t\t\t<div class="zoom-quick-schedule-cont" style="display: inline-block;">\n\t\t\t\t\t\t\t<i class="zm-busy zm-busy24" style="display:none;"></i>\n\t\t\t\t\t\t\t<div role="button"  class="quick-schedule zoom-pop-link VfPpkd-LgbsSe nCP5yc DuMIQc" tabindex="0">\n\t\t\t\t\t\t\t\t<content><a class="RveJvd snByac">Make it a Zoom Meeting</a></content>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'),
                                                  k
                                                    .getQuickSaveBtnNode()
                                                    .removeClass("VfPpkd-LgbsSe-OWXEXe-k8QpJ nCP5yc")
                                                    .addClass("LjDxcd nYqxP"))
                                                : ((o =
                                                    '\n\t\t\t\t\t\t<div class="zoom-quick-schedule-cont" style="display: inline-block;">\n\t\t\t\t\t\t\t<i class="zm-busy zm-busy24" style="margin-top:-25px;display:none;"></i>\n\t\t\t\t\t\t\t<div role="button" class="quick-schedule zoom-pop-link U26fgb O0WRkf e3Duub C0oVfc" tabindex="0">\n\t\t\t\t\t\t\t\t<content><a class="RveJvd snByac">Make it a Zoom Meeting</a></content>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'),
                                                  k.getQuickSaveBtnNode().removeClass("zZhnYe e3Duub").addClass("nYqxP I2LGc")),
                                                k.getQuickSaveBtnNode().parent().append(o),
                                                e.find("div[jsname=rhHFf] content>span").empty(),
                                                t("#zoom-quick2adv-number").empty(),
                                                t("#zoom_repeat_edit_flag").text("0"),
                                                t("#zoom_recurring_edit_flag").text(""),
                                                i.clearDomRecord();
                                            }
                                            t("div.quick-schedule content>a").on("click", function () {
                                              if (this.lock) return;
                                              let e = this;
                                              e.lock = !0;
                                              let n = ft(t("div[jsname=oAi9S] #xDetDlgVideo[data-details]").attr("data-details") || ""),
                                                o = k.getDescNode(),
                                                i = k.getQuickWhereNode();
                                              (t("div[jsname=wU3vpb] div[jsname=oAi9S] button[jsname=uXqWSe]").is(":visible") ||
                                                t("div[jsname=wU3vpb] div[jsname=oAi9S] div[role=button][jsname=uXqWSe]").is(":visible") ||
                                                i.is(":visible")) &&
                                              n &&
                                              n.url
                                                ? (function (e, n, o, i, a) {
                                                    let s = t("div[jsname=nw2lBd] a[href*='/www.google.com/url?']").attr("href") || "",
                                                      l =
                                                        "<br>" +
                                                        "─".repeat(10) +
                                                        "<br><br>" +
                                                        o.url +
                                                        '<br/><br/><a href="' +
                                                        s +
                                                        '" target="_blank">Joining Instructions</a><br><br>' +
                                                        "─".repeat(10),
                                                      r = t.trim(i.html());
                                                    r && "" != i.text() && (l = r + l);
                                                    i.html(l), i[0].dispatchEvent(new Event("paste"));
                                                    let d = P(k.getValueForWhereNode(a[0]));
                                                    d = d && d.length > 0 ? d + ", " + P(o.url) : P(o.url);
                                                    t("div[jsname=ovr9Gb] div[jsname=vRNCKf]").addClass("sMVRZe"),
                                                      t("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]").trigger(
                                                        "click"
                                                      ),
                                                      t("div[jsname=ovr9Gb]").addClass("sMVRZe"),
                                                      a.is(":visible") || k.getQuicLocationButton().trigger("click");
                                                    setTimeout(function () {
                                                      a[0] &&
                                                        (a[0].dispatchEvent(new Event("input")),
                                                        a[0].focus(),
                                                        a[0].select(),
                                                        document.execCommand("inserttext", !1, d),
                                                        a[0].dispatchEvent(new Event("input"))),
                                                        setTimeout(function () {
                                                          (n.lock = !1), k.getQuickSaveBtnNode().trigger("click");
                                                        }, 800);
                                                    }, 0);
                                                  })(0, e, n, o, i)
                                                : (function (e, n) {
                                                    let o = gt();
                                                    if (o) return k.getQuickSaveBtnNode().trigger("click"), void q(n);
                                                    k.expandQuickTimeSection(),
                                                      t(".zm-busy24").show(),
                                                      E(),
                                                      setTimeout(function () {
                                                        let e = { scheduleTime: tt(), topic: yt(), trackfields: "", timezone: Dt() };
                                                        chrome.runtime.sendMessage({ type: "quickschedule", info: e }, function (e) {
                                                          if (e && e.resetpwd)
                                                            return (
                                                              k.getQuickMoreOptionNode().trigger("click"),
                                                              void setTimeout(function () {
                                                                K();
                                                              }, 1e3)
                                                            );
                                                          if (e && e.status) {
                                                            if ("" == k.getQuickTopicNode().val()) {
                                                              let t = e.result.topic;
                                                              k.setQuickTopicNodeValue(t);
                                                            }
                                                            let n = t("#yDmH0d > #zoom-quick-location"),
                                                              o = t("#yDmH0d > #zoom-quick-desc"),
                                                              i = t("#yDmH0d > #zm-quick-number"),
                                                              a = null;
                                                            e.result.addJoinUrl &&
                                                              ((a = k.getQuickWhereNode()),
                                                              a.is(":visible") || k.getQuicLocationButton().trigger("click")),
                                                              i.length <= 0
                                                                ? t("#yDmH0d").append(
                                                                    '<div id="zm-quick-number" style="display:none;">' +
                                                                      (P(e.result.number) || "") +
                                                                      "</div>"
                                                                  )
                                                                : (i[0].textContent = e.result.number || ""),
                                                              t("#zoom-quick2adv-number").length <= 0
                                                                ? t("body").append(
                                                                    '<div id="zoom-quick2adv-number" style="display:none;">' +
                                                                      (P(e.result.number) || "") +
                                                                      "</div>"
                                                                  )
                                                                : t("#zoom-quick2adv-number").text(e.result.number || "");
                                                            let s = k.getDescNode(),
                                                              l = k.escapeHtml(e.result.email);
                                                            s.is(":visible") || k.getQuicDescButton().trigger("click"),
                                                              setTimeout(function () {
                                                                if (e.result.addJoinUrl)
                                                                  if (a.is(":visible")) {
                                                                    a.length > 1 && (a = a.filter(":visible"));
                                                                    let o = P(k.getValueForWhereNode(a[0]));
                                                                    (o =
                                                                      o && o.length > 0
                                                                        ? o + ", " + P(e.result.joinUrl)
                                                                        : P(e.result.joinUrl)),
                                                                      a[0].dispatchEvent(new Event("input")),
                                                                      a[0].focus(),
                                                                      a[0].select(),
                                                                      document.execCommand("inserttext", !1, o),
                                                                      a[0].dispatchEvent(new Event("input")),
                                                                      n.length <= 0
                                                                        ? t("#yDmH0d").append(
                                                                            '<div id="zoom-quick-location" style="display:none;">' +
                                                                              (o || "") +
                                                                              "</div>"
                                                                          )
                                                                        : (n[0].textContent = o || "");
                                                                  } else
                                                                    n.length <= 0
                                                                      ? t("#yDmH0d").append(
                                                                          '<div id="zoom-quick-location" style="display:none;">' +
                                                                            (P(e.result.joinUrl) || "") +
                                                                            "</div>"
                                                                        )
                                                                      : (n[0].textContent = e.result.joinUrl || "");
                                                                if (s.length > 0 && s.is(":visible")) {
                                                                  s.length > 1 && (s = s.filter(":visible"));
                                                                  let e =
                                                                    "<br>" +
                                                                    "─".repeat(10) +
                                                                    "<br><br>" +
                                                                    l.replace(/\r\n/g, "<br>") +
                                                                    "<br><br>" +
                                                                    "─".repeat(10);
                                                                  e = "<p>" + e + "</p>";
                                                                  let n = t.trim(s.html());
                                                                  n && "" != s.text() && (e = n + e),
                                                                    s.html(e),
                                                                    s[0].dispatchEvent(new Event("paste"));
                                                                } else {
                                                                  let e = encodeURIComponent(l) || "";
                                                                  (e =
                                                                    "\n" +
                                                                    encodeURIComponent("─".repeat(10)) +
                                                                    "\n" +
                                                                    e +
                                                                    "\n" +
                                                                    encodeURIComponent("─".repeat(10))),
                                                                    o.length <= 0
                                                                      ? t("#yDmH0d").append(
                                                                          '<div id="zoom-quick-desc" style="display:none;">' + e + "</div>"
                                                                        )
                                                                      : (o[0].textContent = e);
                                                                }
                                                                setTimeout(function () {
                                                                  k.getQuickSaveBtnNode().trigger("click");
                                                                }, 800),
                                                                  setTimeout(() => {
                                                                    t(".zoom-quick-schedule-cont .zoom-setting-cont").remove();
                                                                  }, 1200);
                                                              }, 0);
                                                          } else
                                                            201 == e.errorCode
                                                              ? jt()
                                                              : 3068 == e.errorCode
                                                              ? (k.getQuickMoreOptionNode().trigger("click"), A())
                                                              : e.syncState || (e.errorMessage && alert(e.errorMessage));
                                                          q(n);
                                                        });
                                                      }, 0);
                                                  })(0, e);
                                            }),
                                              e.find("[jsname=I0Fcpe] > button").length
                                                ? e.on("click", "[jsname=I0Fcpe] > button", function (e) {
                                                    N(t(this).attr("id") || "")
                                                      ? t(".zoom-quick-schedule-cont").hide()
                                                      : t(".zoom-quick-schedule-cont").show();
                                                  })
                                                : e.on("click", "[jsname=I0Fcpe] > div", function (e) {
                                                    N(t(this).attr("aria-controls") || "")
                                                      ? t(".zoom-quick-schedule-cont").hide()
                                                      : t(".zoom-quick-schedule-cont").show();
                                                  }),
                                              (function (e) {
                                                let n = e.find("[jsname=I0Fcpe] > button[aria-selected=true]");
                                                if (n.length) {
                                                  N(n.attr("id") || "")
                                                    ? t(".zoom-quick-schedule-cont").hide()
                                                    : t(".zoom-quick-schedule-cont").show();
                                                } else if (((n = e.find("[jsname=I0Fcpe] > div[aria-selected=true]")), n.length)) {
                                                  N(n.attr("aria-controls") || "")
                                                    ? t(".zoom-quick-schedule-cont").hide()
                                                    : t(".zoom-quick-schedule-cont").show();
                                                }
                                              })(e),
                                              e.on("click", "[jsname=x8hlje]", function (e) {
                                                var n = t("#yDmH0d > #zm-quick-number")[0];
                                                if (
                                                  (t("#zoom_repeat_edit_flag").text("0"),
                                                  t("#zoom_recurring_edit_flag").text(""),
                                                  n && n.textContent.length > 8)
                                                ) {
                                                  let e = {
                                                    number: n.textContent,
                                                    topic: k.getQuickTopicNode().val(),
                                                    startTime: tt(),
                                                    isRepeat: k.isRepeat(),
                                                    zoomrooms: k.getZoomRoomsFromQuickSchedule(),
                                                    duration: st(),
                                                    timezone: Dt(),
                                                    isPrivateEvent: k.getIsPrivateEvent()
                                                  };
                                                  i.bindWbParamForEditMeeting(e),
                                                    j({ type: "update", info: e }),
                                                    (e.startTime && e.timezone && e.topic) || t("#zoom_repeat_edit_flag").text("1");
                                                }
                                              });
                                          }
                                        })();
                                  }),
                                  i.addQuickWhiteboardBtn());
                              }
                          }
                        } else if (n && -1 !== n.search('jsname="SF0uGd"') && "bN97Pc" === t(e.target).attr("jsname")) I();
                        else {
                          if (
                            n &&
                            -1 !== n.search('id="xDetDlgVideo"') &&
                            "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily
                          )
                            if ((f = gt()) && f.number)
                              (v = ft((b = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || ""))) &&
                                v.number &&
                                v.number !== f.number &&
                                t("#xRemRtcBu").trigger("click");
                          var h = e.removedNodes[0] && e.removedNodes[0].outerHTML;
                          if (h)
                            if (-1 !== h.search('role="dialog"'))
                              "EVENT" == document.querySelector("body").dataset.viewfamily &&
                                -1 !== h.search('jsname="bN97Pc"') &&
                                -1 !== h.search('class="JtukPc"') &&
                                setTimeout(function () {
                                  t("#yDmH0d > #zoom-quick-desc").empty(),
                                    t("#yDmH0d > #zoom-quick-location").empty(),
                                    t("#yDmH0d > #zm-quick-number").empty(),
                                    t("#YPCqFe #zm-quick2adv-desc").empty();
                                }, 1e3);
                            else if (
                              -1 === h.search(' id="') &&
                              -1 !== h.search('role="button"') &&
                              -1 !== h.search("data-eventid=") &&
                              -1 !== h.search('data-opens-details="true"') &&
                              (-1 !== h.search("EfQccc") || -1 !== h.search("ifwtOb")) &&
                              -1 === h.search('role="main"') &&
                              h.search("jsaction=") < h.search("ynRLnc")
                            ) {
                              let e = new RegExp('(?<=data-eventid=")[a-zA-Z0-9/+]+(?=")').exec(h);
                              if (t.isArray(e)) {
                                e = e[0];
                                let n = t(`[data-eventid=${e}]`);
                                if (!n.hasClass("EfQccc") && !n.hasClass("ifwtOb")) {
                                  let t = "";
                                  try {
                                    let n = atob(e).split(" ");
                                    -1 !== n[1].search("@") && (t = n[0]);
                                  } catch (t) {}
                                  t &&
                                    ((t = Oe(t)),
                                    (d[t] = !0),
                                    setTimeout(function () {
                                      k.getQuickNewEvt().length && delete d[t];
                                    }, 100));
                                }
                              }
                            } else if (
                              "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily &&
                              -1 !== h.search('jsname="aZ2wEe"')
                            ) {
                              if ((f = gt()) && f.number)
                                (v = ft((b = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || ""))) &&
                                  v.number &&
                                  v.number !== f.number &&
                                  (alert(Vt.tips[3]),
                                  t("#xRemRtcBu").trigger("click"),
                                  sendLogToBackend({
                                    msgType: 2,
                                    msg: { msg: "del05", meetingNumber: v.number, meetingLink: b, extMeetingNumber: f.number },
                                    operaType: 1
                                  }),
                                  j({ type: "deleteonly", info: { number: v.number } }));
                            } else if (
                              "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily &&
                              -1 !== h.search('id="xDetDlgVideo"')
                            ) {
                              var f;
                              if ((f = gt()) && f.number) {
                                var v,
                                  b = "",
                                  _ = e.removedNodes[0].querySelector("#xDetDlgVideo[data-details]");
                                _ && (b = _.getAttribute("data-details")),
                                  (v = ft(b)) &&
                                    v.number &&
                                    v.number == f.number &&
                                    (Ct(),
                                    sendLogToBackend({ msgType: 2, msg: { msg: "del06", meetingNumber: v.number }, operaType: 1 }),
                                    j({ type: "delete", info: { number: v.number } }));
                              }
                            }
                        }
                      });
                  });
                  o.observe(t("body").get(0), { attributes: !1, childList: !0, subtree: !0 }),
                    new h(function (e) {
                      e.forEach(function (e) {
                        if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                          let e = k.getEventPopup();
                          if (e.length) {
                            i.addWbInfoBoxForEventPop();
                            let n = e.find(".zoom-join-link");
                            "true" === e.attr("nomeetinginfo") ||
                              (n.length && e.is(":visible")) ||
                              (function (e) {
                                let n = k.hasAttendeeOnEventPop(),
                                  o = ht();
                                if (o && o.url) {
                                  let i = !!e.find(".kMp0We").length,
                                    a = `\n\t\t\t\t<div class="${
                                      i ? "kMp0We" : "nBzcnc"
                                    } OcVpRe zoom-join-link">\n\t\t\t\t\t<div aria-hidden="true" class="${
                                      i ? "nGJqzd OLw7vb" : "zZj8Pb EaVNbc"
                                    }">\n\t\t\t\t\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="${
                                      i ? "NI2kfb" : "toUqff"
                                    }">\n\t\t\t\t\t\t<div class="zoom-pop-link"><a role="button" class="btn-meeting" target="_blank">Join Zoom Meeting</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`;
                                  if ((e.children().eq(0).after(a), t(".zoom-pop-link>a").attr("href", encodeURI(o.url)), !n)) {
                                    k.getPopupDeleteBtn().off("click", F).on("click", { meetingNumber: o.number }, F);
                                  }
                                  e.find("a").each(function () {
                                    let e = t(this).text();
                                    /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                                      e
                                    ) && t(this).attr("href", e);
                                  }),
                                    e.find("#xDetDlgDesc").each(function () {
                                      let e = t(this).html(),
                                        n = e.match(/\+[0-9][0-9 ]+[0-9]/g);
                                      if (n && n.length > 0)
                                        for (let t = 0; t < n.length; t++)
                                          e = e.replace(n[t], '<a href="tel:' + n[t] + '">' + n[t] + "</a>");
                                      t(this).html(e);
                                    });
                                  let s = (function () {
                                    let t = "",
                                      e = k.getPopupLocationNode();
                                    e.length && (t = ft(e.text()));
                                    return t?.url;
                                  })();
                                  if (s) {
                                    let t = e.find("#xDetDlgLoc");
                                    if (!t.find("div>a").length) {
                                      let e = t.find("div>div").eq(0);
                                      if (e.length) {
                                        let n = `<a target="_blank" class="AP8Kec" href="${s}">${e.text()}</a>`;
                                        e.html(n),
                                          t.on("click", function (t) {
                                            t.stopPropagation();
                                          });
                                      }
                                    }
                                  }
                                } else e.attr("nomeetinginfo", "true");
                              })(e);
                          }
                        }
                      });
                    }).observe(document.querySelector("#yDmH0d"), { attributes: !1, childList: !0, subtree: !0 });
                } else if (
                  (t("#maincell #coverinner")
                    .off()
                    .on("DOMSubtreeModified", function () {
                      e ||
                        ut() ||
                        !pt() ||
                        (function () {
                          var e = !1;
                          t("[id$=\\.save_top] .goog-imageless-button-content").data("click-event-registered") && (e = !0);
                          return e;
                        })() ||
                        mt() ||
                        (e = window.setTimeout(function () {
                          (e = null),
                            (function (e) {
                              if ((vt(), k.getDescNode().length)) {
                                var n = gt();
                                if (n) {
                                  var o = dt();
                                  n.url && o.attr("href", encodeURI(n.url)).html("Join Zoom Meeting"),
                                    k.getGoogleVideoCallButtons().hide(),
                                    kt(o);
                                } else
                                  !(function (e) {
                                    if (ct().length) return;
                                    var n = k.getButtonsContainer();
                                    n.addClass("zoom-button-container");
                                    var o = t("<button>", {
                                      id: "zoom_schedule_button",
                                      html: "Make it a Zoom Meeting",
                                      class: "btn-meeting"
                                    });
                                    t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length > 0 ||
                                      n.append(t('<div id="zoom_schedule_button_wrapper"></div>').append(o));
                                    var i = t("#zoom_schedule_button_wrapper");
                                    o.off("click").on("click", function () {
                                      t(this);
                                      A();
                                    }),
                                      chrome.runtime.sendMessage({ type: "supportPAC" }, function (e) {
                                        if (e.hasPac) {
                                          var n = t("<button>", {
                                            id: "zoom_schedulepac_button",
                                            html: "Personal Audio Conference",
                                            class: "btn-pac"
                                          });
                                          i.append(n),
                                            n.off("click").on("click", function () {
                                              U();
                                            });
                                        }
                                      }),
                                      e || (t("#YPCqFe").length && X("dates"))
                                        ? chrome.runtime.sendMessage({ type: "getReadyToSchedule" }, function (t) {
                                            t.readyToSchedule
                                              ? (window.onload = function () {
                                                  A();
                                                })
                                              : o.show();
                                          })
                                        : o.show();
                                  })(e);
                              }
                            })();
                        }, 600)),
                        !n &&
                          pt() &&
                          mt() &&
                          (n = window.setTimeout(function () {
                            n = null;
                            var t = gt();
                            if (t && t.url) {
                              var e = dt();
                              setTimeout(function () {
                                e && e.attr("href", encodeURI(t.url)).html("Join Zoom Meeting");
                              }, 100);
                            }
                          }, 600));
                    }),
                  t("#maincell #coverinner"))
                ) {
                  var a = document.querySelector("body"),
                    s = new h(function (e) {
                      var n = t(".ep-etz-dialog .ep-etz-box-start .tz-pck-timezone");
                      n &&
                        n.val() &&
                        t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").parents(".ep-edr-first-line").attr("timezoneid", n.val()),
                        t(".ep-etz-dialog").is(":visible") &&
                          (t(".ep-etz-dialog .ep-etz-dialog-buttons").off(),
                          t(".ep-etz-dialog .ep-etz-dialog-buttons").on("click", "> button[name=yes]", function (e) {
                            var n = t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]")
                              .parents(".ep-edr-first-line")
                              .attr("timezoneid");
                            n && t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").attr("timezoneid", n);
                          }),
                          t(".ep-etz-dialog .ep-etz-dialog-buttons").on("keydown", "> button[name=yes]", function (e) {
                            13 == e.keyCode && t(this).trigger("click");
                          }),
                          t(".ep-etz-dialog .ep-etz-dialog-buttons").on("keydown", "> span", function (e) {
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid");
                          }),
                          t(".ep-etz-dialog .tz-pck-timezone").off(),
                          t(".ep-etz-dialog .tz-pck-timezone").on("change", "", function (e) {
                            var n = t(".ep-etz-dialog .ep-etz-box-start .tz-pck-timezone");
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]")
                              .parents(".ep-edr-first-line")
                              .attr("timezoneid", n.val());
                          })),
                        t(".ep-etz-remove-dialog").is(":visible") &&
                          (t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").off(),
                          t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").on("click", "> button[name=ok]", function (e) {
                            t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid");
                          }),
                          t(".ep-etz-remove-dialog .ep-etz-remove-dialog-buttons").on("keydown", "> button[name=ok]", function (e) {
                            13 == e.keyCode && t("span[id$=\\-edr-st-txt], span[id$=\\-edr-both-txt]").removeAttr("timezoneid");
                          }));
                    });
                  a && s.observe(a, { attributes: !1, childList: !0, subtree: !0 });
                }
              })(),
              t("body").on("click", "#yDmH0d button[data-mdc-dialog-action=ok]", function (e) {
                let n = t(this).text();
                n &&
                  n.indexOf("Discard") > -1 &&
                  ((t("#zoom-video-sec").is(":visible") || t(".quick-schedule.zoom-pop-link").is(":visible")) &&
                    t("#zoom-quick2adv-number").empty(),
                  i.checkAndClearDomRecord());
              }),
              t("body").append('<div id="zoom_edit_event_flag">0</div>'),
              t("body").append('<div id="zoom_repeat_edit_flag">0</div>'),
              t("body").append('<div id="zoom_recurring_edit_flag"></div>'),
              t("body").on("click", "[jsname=mg9Pef] [jsname=j7LFlb][aria-label=Delete]", function () {
                sendLogToBackend({ msgType: 2, msg: "del01" });
              }),
              t("body").on("click", '[jsname=mg9Pef] [jsname=j7LFlb][aria-label="Delete D"]', function () {
                sendLogToBackend({ msgType: 2, msg: "del01" });
              }),
              t("body").on("click", ".Q3pIde [jsname=j7LFlb][aria-label=Delete]", function () {
                sendLogToBackend({ msgType: 2, msg: "del02" });
              }),
              t("body").on("keydown", function (e) {
                if (8 == e.keyCode || 46 == e.keyCode) {
                  if (k.getQuickNewEvt().length || t("#zoom-video-sec").length > 0 || t("#b1w9Rc").length) return;
                  sendLogToBackend({ msgType: 2, msg: "del03" });
                }
              }),
              (i = new $t({ sendMessage: j, getSchedTime: tt, getMeetingNumber: bt, deleteHandlerForInfoPop: F })),
              window.addEventListener(
                "mousedown",
                function (e) {
                  t(".zoom-full-screen-dialog").hasClass("show") && e.stopImmediatePropagation();
                },
                !0
              ),
              setTimeout(function () {
                chrome.runtime.sendMessage({ type: "getMeetingTrashUrl" }, function (t) {
                  t && ((c = t.meetingTrashUrl || ""), (u = t.email || ""));
                }),
                  i.preloadWhiteboard(),
                  document.addEventListener("visibilitychange", function (t) {
                    "visible" === document.visibilityState && C();
                  });
              }, 100);
          })(),
            (window.sendLogToBackend = function (t) {
              t && t.msgType && t.msg && j({ type: "sendLog", info: t });
            }),
            window.addEventListener(
              "error",
              (t) => {
                (t.message || t.error) &&
                  sendLogToBackend({
                    msgType: 1,
                    msg: { msg: t.message, filename: t.filename, lineno: t.lineno, colno: t.colno, stack: t.error ? t.error.stack : "" }
                  });
              },
              !0
            );
          var R = { en: "Untitled event", zh: "无标题的活动", es: "Evento sin título", fr: "Événement sans titre" };
          function L() {
            let e = {},
              n = t("#zoom-setting .content_container form"),
              o = !("pmi" !== n.find("[name=meeting_type]:checked").val()),
              i = !1;
            if (n.find(".encryption-box").length) {
              i = n.find("#setting_option_e2e").prop("checked");
              let t = r.e2ee;
              o ? (t.pmiEnable = i) : (t.normalEnable = i), (e.e2ee = t);
            }
            if (((e.templateRes = {}), !o && w?.isVisible)) {
              let { id: t, extData: n } = w.getSelectedResult();
              "none" !== t && ((e.templateRes.templateId = t), (e.templateRes.templateType = n?.templateType));
            }
            let a,
              s = r.lockOpts.audio_locked;
            (a = i && s ? r.zoom_config_audio : n.find("[name=option_audio]:checked").val()), (e.zoom_config_audio = a);
            let l = "",
              d = Ft("autoRec");
            if (i && n.find(".recording").hasClass("e2e-hide")) l = d.childParams.autoRecordingSubSelected.value;
            else if (n.find("#setting_recording").is(":visible") && n.find("#setting_recording").prop("checked")) {
              let e = d.dataOptions;
              e.length > 1 ? (l = t("[name=option_rec_id]:checked").val()) : 1 === e.length && (l = e[0].id);
            }
            e.record_id = l;
            let c = !1;
            if (i && n.find(".qa").length) {
              c = Ft("qa").value;
            } else {
              let t = n.find("#setting_option_qa");
              c = !!t.is(":visible") && t.prop("checked");
            }
            e.qa = c;
            let u = !1;
            if (i && n.find(".meetingSummary").length) {
              u = Ft("meetingSummary", o).value;
            } else {
              let t = n.find("#setting_option_meetingSummary");
              u = !!t.is(":visible") && t.prop("checked");
            }
            e.meetingSummary = u;
            let m = !1;
            if (i && n.find(".meetingQuery").length) {
              m = Ft("meetingQuery", o).value;
            } else {
              let t = n.find("#setting_option_meetingQuery");
              m = !!t.is(":visible") && t.prop("checked");
            }
            e.meetingQuery = m;
            let g = n.find("#setting_option_pmc");
            e.pmc = !!g.is(":visible") && g.prop("checked");
            let h = n.find("#pmc_invite_external_user");
            if (
              ((e.enableAutoAddExternalUser = !!h.is(":visible") && h.prop("checked")),
              (e.zoom_config_schedule_for = (function () {
                let t = "";
                if (z?.isVisible) {
                  let { id: e, extData: n } = z.getSelectedResult();
                  "me" !== e && (t = e);
                }
                return t;
              })()),
              (e.zoom_config_video_host = n.find("[name=option_video_host]:checked").val()),
              (e.zoom_config_video_participants = n.find("[name=option_video_participants]:checked").val()),
              (e.mute_upon_entry = n.find("#setting_option_uponentry").prop("checked")),
              (e.public_cal = n.find("#setting_option_public_cal").prop("checked")),
              (e.zoom_config_pmi = o),
              (e.scheduleTime = tt()),
              (e.topic = yt()),
              (e.trackfields = Bt()),
              (e.zoom_config_watermark = !!n.find("#setting_option_watermark").prop("checked")),
              (e.zoom_option_require_reg = !!n.find("#setting_option_requirereg").prop("checked")),
              (e.enable_unmute_all = n.find("#unmute_all").is(":visible") && n.find("#unmute_all").prop("checked")),
              (e.zoom_config_alternativehost = t("#alternative_host").is(":visible") ? t("#alternative_host").val() : ""),
              (e.enable_alternative_host_edit_poll = !!t("#host_edit_poll").is(":visible") && t("#host_edit_poll").prop("checked")),
              (e.focusModeValue = !!t("#setting_option_focusMode").is(":visible") && t("#setting_option_focusMode").prop("checked")),
              n.find("#setting_option_enableDC").is(":visible"))
            )
              if (n.find("#setting_option_enableDC").prop("checked")) {
                let o = n.find(".dcRegions .dc-group").find("input:checked");
                if (o.length) {
                  let n = {};
                  o.each(function (e) {
                    let o = t(this).attr("dcabbr");
                    o && (n[o] = !0);
                  }),
                    (e.enableDC = n);
                }
              } else e.enableDC = "";
            if (
              ((e.zoom_config_audiomark = !!n.find("#setting_option_audiomark").prop("checked")),
              (e.zoom_config_joinurl = n.find("#setting_option_joinurl").prop("checked")),
              (e.showDisablePmiMsg = r.showDisablePmiMsg),
              (e.showSecurityTip = r.showSecurityTip),
              !v)
            ) {
              let t;
              (t = i ? r.zoom_config_jbh : n.find("#setting_option_jbh").prop("checked")),
                (e.zoom_config_jbh = t),
                !e.zoom_config_pmi && e.zoom_config_jbh && y?.isVisible && (e.jbhTimeMinutes = y.getSelectedResult());
            }
            Object.assign(
              e,
              (function () {
                let e = t("#zoom-setting #setting_option_needpassword").prop("checked"),
                  n =
                    t("#zoom-setting #setting_option_authentication").is(":visible") &&
                    t("#zoom-setting #setting_option_authentication").prop("checked"),
                  o = { pwEnable: e, authEnable: n, wrEnable: !1 };
                v || (o.wrEnable = !!t("#zoom-setting #setting_option_waitingroom").prop("checked"));
                e && (o.pwd = t("#zoom-setting [name=meeting_pwd]").val().trim());
                n &&
                  (o.updateAuthOptionItem = (function () {
                    let e = p.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
                    if (e && e.id) return { name: e.name, type: e.type, id: e.id, domain: e.domain || void 0 };
                    return "";
                  })());
                return { securityRes: o };
              })()
            ),
              v &&
                Object.assign(
                  e,
                  (function () {
                    if (!t("#zoom-setting .waitingroom2").is(":visible")) return { waiting_room_new: "" };
                    let e,
                      n,
                      o = !!t("#setting_option_waitingroom2").prop("checked");
                    if (o)
                      (e = t("[name=option_waitingroom2]:checked").val()),
                        "auto" === e
                          ? (n = t("#auto_prior_start").val())
                          : "manu" === e && (n = t("#manu_prior_start").is(":visible") ? t("#manu_prior_start").val() : null);
                    else {
                      let t = ye(Lt());
                      (e = t.childParams.options.value),
                        "auto" === e ? (n = t.childParams.auto.value) : "manu" === e && (n = t.childParams.manu.value);
                    }
                    null === n && (n = -100);
                    return { waiting_room_new: { enable: o, type: e, join_time: n } };
                  })()
                ),
              (e.allowDenyRes = { defaultVal: !!t("#setting_allowDeny").prop("checked"), selRegion: b.selRegion, selType: b.selType });
            let { enableInterpretation: f, interpretation: _ } = (function () {
              let e = t("#zoom-setting .interpretation:visible"),
                n = !!e.find("#setting_option_interpretation").prop("checked"),
                o = [];
              n &&
                e.find(".edit-interpretation-line").each(function (e, n) {
                  let i = t(n),
                    a = i.find(".interpretation-email").val();
                  if (a) {
                    let t, e;
                    i.find(".interpretation-sel-cont").each(function (n, o) {
                      if (o.zoomSelectObj) {
                        let { id: i, extData: a } = o.zoomSelectObj.getSelectedResult();
                        0 === n ? (t = i) : (e = i);
                      }
                    }),
                      t && e && o.push({ email: a, firstLanguage: t, secondLanguage: e });
                  }
                });
              return (o = JSON.stringify(o)), { enableInterpretation: n, interpretation: o };
            })();
            return (e.enableInterpretation = f), (e.interpretation = _), e;
          }
          function A(e) {
            j({ type: "sync", info: {} }),
              chrome.runtime.sendMessage({ type: "getZoomToken" }, function (i) {
                let a = i.zoom_config_pmi_saved_pwd,
                  s = i.zoom_config_pmi,
                  l = i.meetingPwdSettingsMap;
                var d, c, u, g;
                (f = i),
                  i.token &&
                    (i.fte || i.showSetting
                      ? t.modal(
                          t(
                            `\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog intact hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog" >\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="setting_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">\n\t\t\t\t\t\t\t\t\t\t<div class="schedule form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label">Schedule For</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width:200px;" class="schedule-for-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="meetingchat form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Meeting Chat</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row pmc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_pmc" name="setting_option_pmc" />Enable Continuous Meeting Chat</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pmcTip" info="${Vt.tips[43]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc">${Vt.tips[42]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sub-options addExternalUser">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="pmc_invite_external_user" name="pmc_invite_external_user" />Automatically add invited external users</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="meetingtype form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Meeting ID</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Meeting Type">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="meeting_type_normal" name="meeting_type" value="onetime" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="meeting_type_normal"><span>Generate automatically</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline pmi">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="meeting_type_pmi" name="meeting_type" value="pmi">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="meeting_type_pmi"><span>Personal Meeting ID <span class="pmi_number"></span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${Vt.tips[22]}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="template form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label">Template</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="template-sel-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">You used an admin meeting template. <span class="view-template-btn">View Template Details</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="security-box form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Security</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Security">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="security-option">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword">Passcode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pwdTip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc pwd"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0;padding-left:20px;">${Vt.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_waitingroom">Waiting Room\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc wr">${Vt.tips[28]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_waitingroom2" name="setting_option_waitingroom2" /><span>Waiting Room</span>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip wr2Tip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom2-option" role="group" aria-label="Waiting Room" style="padding-left:20px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_auto" name="option_waitingroom2" value="auto" /><span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id="auto_prior_start" class="zm-select-box"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_manu" name="option_waitingroom2" value="manu" /><span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id="manu_prior_start" class="zm-select-box"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row authentication"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="error-msg"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${Vt.tips[21]}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="encryption-box form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row encryption-option" role="group" aria-label="Encryption">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_enhanced" name="option_encryption" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="setting_option_enhanced">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Enhanced encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip e2eTip enhanced" info="${Vt.tips[24]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_e2e" name="option_encryption" value="1" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="setting_option_e2e">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>End-to-end encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip e2eTip e2e" info="${Vt.tips[25]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="zm-alert" role="alert">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<close></close>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="description">${Vt.tips[23]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="video form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Video</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Host</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Host">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_on" name="option_video_host" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_off" name="option_video_host" value="off"/>Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Participant</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Participant">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_on" name="option_video_participants" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_off" name="option_video_participants" value="off" />Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="audio form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Audio</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Audio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="telephony" name="option_audio" id="option_audio_telephony">Telephone</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline voip"><input type="radio" value="voip" name="option_audio" id="option_audio_voip">Computer Audio</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="both" name="option_audio" id="option_audio_both">Telephone and Computer Audio</label> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="other" name="option_audio" id="option_audio_3rd">3rd Party Audio</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="options form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Options</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="zm-alert jbh-moved-alert" role="alert">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<close></close>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="description"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirereg">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_requirereg" name="setting_option_requirereg" />Require registration</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row jbh">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_jbh" name="setting_option_jbh" /><label for="setting_option_jbh">Allow participants to join</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="prior-start-cont"><div class="JBH-prior-start-cont"></div><label for="setting_option_jbh">before start time</label></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="default-text" for="setting_option_jbh">anytime</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row qa">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_qa" name="setting_option_qa" />Q&A</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row uponentry">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_uponentry" name="setting_option_uponentry" />Mute participants upon entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row unmute_all">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="unmute_all" name="unmute_all" /><span>Request permission to unmute participants</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row watermark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_watermark" name="setting_option_watermark" />Add watermark that identifies the viewing participant\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row audiomark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_audiomark" name="setting_option_audiomark" />Add audio watermark that identifies the participants\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row recording">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_recording" name="setting_recording" /><span>Automatically record meeting</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="recording-radio" role="group" aria-label="Record" style="padding-left:20px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row meetingSummary">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_meetingSummary" name="setting_option_meetingSummary" />Automatically start Meeting Summary</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row meetingQuery">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_meetingQuery" name="setting_option_meetingQuery" />Automatically start AI Companion questions</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row pubcal">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_public_cal" name="setting_option_public_cal" />Show in Public Event List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row focusMode">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_focusMode" name="setting_option_focusMode" />Enable focus mode when meeting starts</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row dcRegions">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_enableDC" name="setting_option_enableDC" /><span>Enable additional data center regions for this meeting</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="dc-group" role="group" aria-label="optional data center" style="padding-left:20px;"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top: 5px; margin-bottom: 0px;padding-left:20px;"></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row allowDeny">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_allowDeny" name="setting_allowDeny" /><span>Approve or block entry to users from specific countries/regions</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="regionRes allow">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOnly allow users from: <span class="sel-region-list"></span> <a href="" class="edit-region-button">Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="regionRes deny">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlock users from: <span class="sel-region-list"></span> <a href="" class="edit-region-button">Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${Vt.tips[21]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row joinurl">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_joinurl" name="setting_option_joinurl" />Include Invite Link in location field</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row interpretation">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_interpretation" name="setting_option_interpretation" />Enable Interpretation</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc">${Vt.tips[40]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="edit-interpretation-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="error-msg-cont"><div class="error-msg"></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="" role="button" class="add-interpretation-btn">Add Language Interpreter</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="max-interpretation-line-tip">${Vt.tips[41]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="altnativehost form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label" for="alternative_host">Alternative hosts</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 400px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" id="alternative_host" name="alternative_host" aria-label="Alternative hosts" placeholder="john@company.com" value="" class="form-control" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row host-edit-poll">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="host_edit_poll" name="host_edit_poll" />Allow alternative hosts to add or edit polls</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip editPollTip" info="${Vt.tips[31]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span for="alternative_host" class="has-error help-block alternative_host_error" style="display: none;">${Vt.tips[0]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style="display:none;" id="locktip">${Vt.tips[1]}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue</button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t\t<i class="busy zm-busy24" style="display:none;"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`
                          ),
                          t.extend(
                            {},
                            {
                              overlayId: "zm-setting-dialog-overlay",
                              containerId: "zm-setting-dialog-container",
                              escClose: !0,
                              fixed: !1,
                              persist: !0,
                              close: !0,
                              overlayClose: !1,
                              autoPosition: !1,
                              onOpen: function (t) {
                                t.overlay.fadeIn("fast"), t.container.fadeIn("fast"), t.data.fadeIn("fast");
                              },
                              onShow: function (o) {
                                (p.$authentication = t("#zoom-setting .control-row.authentication")),
                                  j({ type: "loadZoomOptions" }),
                                  (n = new x.Z({
                                    el: t("#zoom-setting #meeting_pwd").get(0),
                                    rule: l,
                                    jquery: Wt,
                                    blurCallback: function () {
                                      Z(1);
                                    },
                                    startInputCallback: function () {
                                      G(2);
                                    },
                                    conformRuleCallback: function () {
                                      G(1);
                                    }
                                  }));
                                t("#zoom-setting .password-type");
                                let i = t("#zoom-setting .security-box"),
                                  a = t("#zoom-setting .requirepwd"),
                                  s = null;
                                t("#zoom-setting .submit").on("click", function (n) {
                                  if ((n.stopPropagation(), !this.waitCheckPwd))
                                    if ((t("#zoom-setting #alternative_host").trigger("blur"), i.find(".error-msg.showme").is(":visible")))
                                      i[0].scrollIntoView();
                                    else if (
                                      !(function () {
                                        let e = t("#zoom-setting .interpretation.beencheck"),
                                          n = !1;
                                        if (
                                          e.is(":visible") &&
                                          (e.find(".edit-interpretation-line.error-state").each(function (e, o) {
                                            let i = t(o);
                                            if ((Qt(i, !0), i.hasClass("error-state"))) return o.scrollIntoView(), (n = !0), !1;
                                          }),
                                          !n)
                                        ) {
                                          let t = e.find(".error-msg-cont.error-state");
                                          t.length && ((n = !0), t.get(0).scrollIntoView());
                                        }
                                        return n;
                                      })()
                                    )
                                      if (
                                        ((this.$btn = e),
                                        t("#zoom-setting #setting_option_needpassword").prop("checked") &&
                                          t("#zoom-setting #meeting_pwd").is(":visible"))
                                      ) {
                                        if (a.hasClass("has-error")) return void t("#zoom-setting #meeting_pwd").trigger("focus");
                                        (this.waitCheckPwd = !0),
                                          s && clearTimeout(s),
                                          (s = setTimeout(() => {
                                            (this.waitCheckPwd = !1), (s = null);
                                          }, 3e3)),
                                          Z(2);
                                      } else Q();
                                }),
                                  t("#zoom-setting #setting_option_needpassword").on("change", function () {
                                    t(this).prop("checked") || !1 ? a.addClass("sel") : a.removeClass("sel"), we();
                                  }),
                                  t("#zoom-setting #setting_option_waitingroom").on("change", function () {
                                    we();
                                  }),
                                  t("#zoom-setting #alternative_host").on("blur", function (e) {
                                    var n = t(this);
                                    n.val(n.val().trim());
                                  });
                                let d = t("#zoom-setting #alternative_host").parent(),
                                  c = t("#zoom-setting .altnativehost"),
                                  u = t("#zoom-setting .host-edit-poll");
                                t("#zoom-setting #alternative_host").on("keyup", function (e) {
                                  if (t(this).val().length > 0)
                                    window.setTimeout(function () {
                                      m.validateAltHost();
                                    }, 1e3),
                                      c.hasClass("show-edit-poll") &&
                                        !u.hasClass("haslock") &&
                                        d.hasClass("disable-state") &&
                                        (t("#host_edit_poll").prop("disabled", !1), d.removeClass("disable-state"));
                                  else {
                                    let e = t("#alternative_host").parent(),
                                      n = e.find(".alternative_host_error");
                                    e.removeClass("has-error"),
                                      n.hide(),
                                      c.hasClass("show-edit-poll") &&
                                        !u.hasClass("haslock") &&
                                        (t("#host_edit_poll").prop("disabled", !0), d.addClass("disable-state"));
                                  }
                                  return !1;
                                }),
                                  t("#zoom-setting #setting_option_requirereg").on("change", function () {
                                    var e = t("#zoom-setting #setting_option_requirereg").prop("checked") || !1;
                                    e &&
                                      !t("#zoom-setting #meeting_type_normal").prop("checked") &&
                                      (t("#zoom-setting #meeting_type_normal").prop("checked", !0),
                                      t("#zoom-setting #meeting_type_normal").trigger("change")),
                                      e
                                        ? t("#zoom-setting .meetingchat").addClass("enable-requirereg")
                                        : t("#zoom-setting .meetingchat").removeClass("enable-requirereg");
                                  }),
                                  t("#meeting_pwd").parent().removeClass("has-error"),
                                  t("#meeting_pwd").next().hide();
                                let g = !1;
                                t("#zoom-setting [name=meeting_type]").on("change", function () {
                                  let e = t("#zoom-setting #meeting_type_pmi").prop("checked") || !1;
                                  e !== g &&
                                    ((g = e),
                                    e
                                      ? (t("#zoom-setting #setting_option_requirereg").prop("checked", !1).trigger("change"),
                                        t("#zoom-setting #setting_form").addClass("pmi"))
                                      : t("#zoom-setting #setting_form").removeClass("pmi"),
                                    pe(!0, !0),
                                    ae(!0),
                                    ue(!0, !0),
                                    ie(!0),
                                    oe(e),
                                    Nt(e),
                                    It(e),
                                    qt(e),
                                    Pt());
                                });
                                let h = !1;
                                t("#zoom-setting [name=option_encryption]").on("change", function (e) {
                                  let n = "1" === this.value;
                                  (n !== h || n) &&
                                    ((h = n),
                                    (function (e) {
                                      let n = t(".encryption-box");
                                      e
                                        ? (n.addClass("on-e2e"),
                                          (function () {
                                            t(".audio").addClass("on-e2e-state"),
                                              t("[name=option_audio][value=voip]").prop({ checked: !0 }),
                                              t("#zoom-setting .altnativehost").addClass("on-e2e-state");
                                            let e = t("#zoom-setting .recording");
                                            if (e.length) {
                                              e.addClass("on-e2e-state");
                                              let n = !1;
                                              if (r)
                                                if (
                                                  (function (t) {
                                                    let e = r.meetingFeatures.autoRec.dataOptions;
                                                    if (e.length)
                                                      for (var n = 0; n < e.length; n++) {
                                                        if (e[n].id === t) return !0;
                                                      }
                                                    return !1;
                                                  })("local")
                                                ) {
                                                  if (e.hasClass("haslock")) {
                                                    "cloud" === Ft("autoRec").childParams.autoRecordingSubSelected.value &&
                                                      (e.addClass("e2e-hide"), (n = !0));
                                                  }
                                                } else e.addClass("e2e-hide"), (n = !0);
                                              if (!n) {
                                                if (t("#zoom-setting .recording-radio").length) {
                                                  "cloud" == t("[name=option_rec_id]:checked").val() &&
                                                    (t("[name=option_rec_id][value=local]").prop({ checked: !0 }).trigger("change"),
                                                    e.hasClass("haslock") || t("#setting_recording").prop("checked", !1).trigger("change"));
                                                }
                                              }
                                            }
                                            let n = t(".jbh");
                                            n.length && n.addClass("on-e2e-state");
                                            t("#zoom-setting #setting_form").addClass("on-e2e-state");
                                          })())
                                        : (n.removeClass("on-e2e"),
                                          (function () {
                                            Lt();
                                            let e = t(".audio");
                                            if (e.hasClass("on-e2e-state")) {
                                              e.removeClass("on-e2e-state");
                                              let n = r.zoom_config_audio;
                                              t("[name=option_audio][value=" + n + "]").prop({ checked: !0 });
                                            }
                                            t("#zoom-setting .altnativehost").removeClass("on-e2e-state");
                                            let n = t(".recording");
                                            n.length && (n.removeClass("on-e2e-state e2e-hide"), oe());
                                            let o = t(".jbh");
                                            o.length && o.removeClass("on-e2e-state");
                                            t("#zoom-setting #setting_form").removeClass("on-e2e-state");
                                          })());
                                    })(n),
                                    (function (e) {
                                      if (e) {
                                        let e = t("#zoom-setting .waitingroom2");
                                        if (e.length) {
                                          e.addClass("on-e2e-state"),
                                            t("#setting_option_waitingroom2").prop("checked", !0).prop("disabled", !0),
                                            t("#auto_prior_start").val(-1).prop("disabled", !0).css("opacity", 0.5);
                                          let n = t("#manu_prior_start");
                                          n.length && n.val(-1).prop("disabled", !0).css("opacity", 0.5),
                                            t("#setting_option_waitingroom2").trigger("change");
                                        }
                                        let n = t("#zoom-setting .jbh-moved-alert");
                                        n.length && n.hide();
                                      } else {
                                        let e = Lt(),
                                          n = t("#zoom-setting .waitingroom2");
                                        if (n.length) {
                                          n.removeClass("on-e2e-state"),
                                            be(e, !0),
                                            ve(
                                              r.security,
                                              e,
                                              t("#zoom-setting #setting_option_needpassword").prop("checked"),
                                              t("#zoom-setting #setting_option_authentication").is(":visible") &&
                                                t("#zoom-setting #setting_option_authentication").prop("checked")
                                            );
                                        }
                                        let o = t("#zoom-setting .jbh-moved-alert");
                                        o.length && o.show();
                                      }
                                    })(n));
                                });
                                let f = t(".encryption-box");
                                f.on("click", "close", function (e) {
                                  e.stopPropagation(), t(this).parents(".zm-alert").remove();
                                }),
                                  f.on("click", ".description a", function (e) {
                                    e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                                  }),
                                  t("#zoom-setting .zoom-info-tip")
                                    .on("mouseenter click", function (e) {
                                      W(t(this), !0);
                                    })
                                    .on("mouseleave", function (e) {
                                      W(t(this), !1);
                                    }),
                                  t("#zoom-setting .zoom-info-tip").on("click", function (e) {
                                    W(t(this), !0, 0);
                                  }),
                                  setTimeout(function () {
                                    t("#zoom-setting").find(".close").trigger("blur");
                                  }, 10);
                              },
                              onClose: function (e) {
                                t("#zoom-setting .modal-body").off("scroll"),
                                  t("#zoom-setting .submit").off("click"),
                                  t("#zoom-setting #setting_option_needpassword").off("change"),
                                  t("#zoom-setting #meeting_pwd").off("keyup"),
                                  t("#zoom-setting #alternative_host").off("blur"),
                                  t("#zoom-setting #alternative_host").off("keyup"),
                                  t("#zoom-setting #setting_option_requirereg").off("change"),
                                  t("#zoom-setting [name=meeting_type]").off("change"),
                                  t("#zoom-setting #setting_option_jbh").off("change"),
                                  o && o.destroy(),
                                  y && (y.destroy(), (y = null)),
                                  z && (z.destroy(), (z = null)),
                                  w && (w.destroy(), (w = null)),
                                  t("#zoom-setting .interpretation-sel-cont").each(function (t, e) {
                                    e.zoomSelectObj && e.zoomSelectObj.destroy();
                                  }),
                                  t("#zoom-setting .trackfield-sel-cont").each(function (t, e) {
                                    e.zoomSelectObj && e.zoomSelectObj.destroy();
                                  }),
                                  e.container.fadeOut("fast", function () {
                                    e.overlay.fadeOut("fast", function () {
                                      t.modal.close(),
                                        t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")
                                          ? t("#zoom_schedule_button").trigger("focus")
                                          : t(".ep-dp-calendar select[id$=\\.calendar]").trigger("focus");
                                    });
                                  });
                              }
                            }
                          )
                        )
                      : i.requireTracking || i.inputManualPwd
                      ? t.modal(
                          t(
                            ((d = i.requireTracking),
                            (c = i.inputManualPwd),
                            (u = i.pwdVoidable),
                            (g =
                              '\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog mixed hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog">\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t        \t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="tracking_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">'),
                            c &&
                              ((g += '\t\t\t\t\t<div class="security-box poppwd form-group clearfix">'),
                              (g += u
                                ? `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Security</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd manual sel">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword" checked />Passcode\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0;">${Vt.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`
                                : `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Security</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="requirepwd manual sel control-row">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPasscode\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pwdTip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc pwd"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0px; margin-left:0;">${Vt.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`),
                              (g += "\t\t\t\t\t</div>")),
                            d &&
                              (g +=
                                '\t\t\t\t\t<div class="trackingcodes">\n\t\t\t\t\t\t\t\t\t\t\t<div class="trackitems"></div>\n\t\t\t\t\t\t\t\t\t\t</div>'),
                            g +
                              '\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue </button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>')
                          ),
                          t.extend(
                            {},
                            {
                              overlayId: "zm-track-dialog-overlay",
                              containerId: "zm-track-dialog-container",
                              escClose: !0,
                              fixed: !1,
                              persist: !0,
                              close: !0,
                              overlayClose: !1,
                              autoPosition: !1,
                              onOpen: function (t) {
                                t.overlay.fadeIn("fast"), t.container.fadeIn("fast"), t.data.fadeIn("fast");
                              },
                              onShow: function (o) {
                                t("#zoom-setting .password-type");
                                let r = t("#zoom-setting .requirepwd"),
                                  d = t("#zoom-setting #meeting_pwd");
                                d.length && s && a && d.val(a),
                                  (n = new x.Z({
                                    el: d.get(0),
                                    rule: l,
                                    jquery: Wt,
                                    blurCallback: function () {
                                      Z(1);
                                    },
                                    startInputCallback: function () {
                                      G(2);
                                    },
                                    conformRuleCallback: function () {
                                      G(1);
                                    }
                                  })),
                                  i.embedPasscode
                                    ? (r.find(".usability-desc.pwd").html(Vt.tips[26]), r.find(".pwdTip").attr("info", Vt.tips[29]))
                                    : (r.find(".usability-desc.pwd").html(Vt.tips[27]), r.find(".pwdTip").remove());
                                let c = null;
                                t("#zm-track-dialog-container #zoom-setting .submit").on("click", function (n) {
                                  if ((n.stopPropagation(), !this.waitCheckPwd))
                                    if (((this.$btn = e), t("#zoom-setting #meeting_pwd").is(":visible"))) {
                                      if (r.hasClass("has-error")) return void t("#zoom-setting #meeting_pwd").focus();
                                      (this.waitCheckPwd = !0),
                                        c && clearTimeout(c),
                                        (c = setTimeout(() => {
                                          (this.waitCheckPwd = !1), (c = null);
                                        }, 3e3)),
                                        Z(3);
                                    } else B();
                                }),
                                  t("#zoom-setting #setting_option_needpassword").on("change", function () {
                                    t("#zoom-setting #setting_option_needpassword").prop("checked") || !1
                                      ? r.addClass("sel")
                                      : r.removeClass("sel");
                                  });
                                let u = i.trackfields;
                                u && u.length > 0 && At(u),
                                  t("#zoom-setting .zoom-info-tip")
                                    .on("mouseover click", function (e) {
                                      W(t(this), !0);
                                    })
                                    .on("mouseout", function (e) {
                                      W(t(this), !1);
                                    }),
                                  t("#zoom-setting .zoom-info-tip").on("click", function (e) {
                                    W(t(this), !0, 0);
                                  }),
                                  setTimeout(function () {
                                    t("#zoom-setting").find(".close").trigger("blur");
                                  }, 10);
                              },
                              onClose: function (e) {
                                t("#zm-track-dialog-container #zoom-setting .submit").off("click"),
                                  t("#zoom-setting #setting_option_needpassword").off("change"),
                                  t("#zoom-setting #meeting_pwd").off("keyup"),
                                  t("#zoom-setting .trackfield-sel-cont").each(function (t, e) {
                                    e.zoomSelectObj && e.zoomSelectObj.destroy();
                                  }),
                                  e.container.fadeOut("fast", function () {
                                    e.overlay.fadeOut("fast", function () {
                                      t.modal.close(),
                                        t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")
                                          ? t("#zoom_schedule_button").trigger("focus")
                                          : t(".ep-dp-calendar select[id$=\\.calendar]").trigger("focus");
                                    });
                                  });
                              }
                            }
                          )
                        )
                      : (j({ type: "schedule", info: { scheduleTime: tt(), topic: yt(), timezone: lt() } }), zt(e)));
              });
          }
          let $,
            H = null;
          function W(e, n, o = 800) {
            e &&
              (H && (clearTimeout(H), (H = null)),
              (H = n
                ? setTimeout(function () {
                    e.hasClass("updateDom") ||
                      (function (t) {
                        let e = t.attr("info");
                        if (e) {
                          let n = `\n\t\t\t\t<div class="zoom-info-tip-pop">\n\t\t\t\t\t<div class="content">${e}</div>\n\t\t\t\t\t<div class="pop-arrow"></div>\n\t\t\t\t</div>`;
                          t.html(n).attr("info", null).addClass("updateDom");
                        }
                      })(e),
                      Et(e.find(".zoom-info-tip-pop")),
                      (function (e) {
                        let n = e.find(".zoom-info-tip-pop"),
                          o = e.offset().top - t("#zoom-setting .modal-body").offset().top;
                        o - 50 < n.height() ? n.addClass("turn") : n.removeClass("turn");
                      })(e),
                      (H = null);
                  }, o)
                : setTimeout(function () {
                    e.hasClass("updateDom") && St(e.find(".zoom-info-tip-pop")), (H = null);
                  }, 200)));
          }
          function B(e) {
            let n = t("#zm-track-dialog-container #zoom-setting .submit");
            if (((n[0].waitCheckPwd = !1), void 0 !== e && !e)) return void t("#zoom-setting #meeting_pwd").focus();
            let o = f,
              i = n[0].$btn;
            if (Ot()) {
              let e = t("#zoom-setting #meeting_pwd"),
                n = "schedule",
                a = {
                  scheduleTime: tt(),
                  topic: yt(),
                  trackfields: Bt(),
                  timezone: lt(),
                  securityRes: { pwd: e.val() ? e.val().trim() : "" }
                };
              o.zoom_config_pmi &&
                e.is(":visible") &&
                (o.pwdVoidable && ((n = "saveOptionsAndQuickSchedule"), (a.mandatorypwd = !0)),
                e.val().trim() != o.zoom_config_pmi_saved_pwd && ((n = "saveOptionsAndQuickSchedule"), (a.changepwd = !0))),
                j({ type: n, info: a }),
                t.modal.close(),
                zt(i);
            }
          }
          function Q(e) {
            let n = t("#zoom-setting .submit");
            if (((n[0].waitCheckPwd = !1), void 0 !== e)) {
              if (!e) return void t("#zoom-setting #meeting_pwd").trigger("focus");
              t("[name=meeting_type][value=pmi]").prop("checked") && t("#zoom-setting .requirepwd").addClass("manual");
            }
            if (
              !(function () {
                if ("object" == Ht.type(r)) {
                  if (Object.keys(r).length) return !0;
                }
                return !1;
              })()
            )
              return void console.log("Setting panel initialization failed. Please refresh the page and try again.");
            let o = n[0].$btn;
            m.ajaxValidAltHost() &&
              (function () {
                if (p.$zmEditDomainModule) {
                  let e = p.$zmEditDomainModule.find(".btn-Save");
                  if (e.is(":visible") && !e.prop("disabled"))
                    return m.showHasErrorMsg(t("#zoom-setting #auth_domain_info"), Vt.errors[17]), !1;
                }
                return !0;
              })() &&
              m.validateAltHost() &&
              Ot() &&
              m.validateEnableDC() &&
              (m.collateUserInput(),
              "" != t("#zoom-setting #alternative_host").val()
                ? (t("#zoom-setting .modal-footer .submit").addClass("inprogress"),
                  t("#zoom-setting .busy").show(),
                  chrome.runtime.sendMessage(
                    { type: "validateAltHost", althosts: t("#zoom-setting #alternative_host").val() },
                    function (e) {
                      if (
                        (t("#zoom-setting .busy").hide(),
                        t("#zoom-setting .modal-footer .submit").removeClass("inprogress"),
                        !e || e.status || (1113 != e.errorCode && 1114 != e.errorCode && 1115 != e.errorCode))
                      )
                        e && e.status && (j({ type: "saveOptionsAndSchedule", info: L() }), t.modal.close(), zt(o));
                      else {
                        let n = t("#alternative_host").parent(),
                          o = n.find(".alternative_host_error");
                        n.addClass("has-error"), t("#alternative_host").trigger("focus"), o.text(e.errorMessage).show();
                      }
                    }
                  ))
                : (j({ type: "saveOptionsAndSchedule", info: L() }), t.modal.close(), zt(o)));
          }
          function U(e) {
            chrome.runtime.sendMessage({ type: "getZoomToken" }, function (n) {
              var o;
              n.token &&
                (n.requireTracking
                  ? t.modal(
                      t(
                        ((o = []).push('<div id="zoom-setting" class="zoom-dialog modaldialog hideme" autocomplete="off">'),
                        o.push('   <div class="modal-dialog" role="dialog">'),
                        o.push('      <div class="modal-content">'),
                        o.push('         <div class="modal-header">'),
                        o.push(
                          '\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>'
                        ),
                        o.push('\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>'),
                        o.push("        </div>"),
                        o.push('         <div class="modal-body">'),
                        o.push('\t\t\t<div class="modal-body-container">'),
                        o.push('\t\t\t\t<div class="content_container">'),
                        o.push('\t\t\t\t\t <form role="form" id="tracking_form" class="form-horizontal">'),
                        o.push('\t\t\t\t\t\t<div class="form-body">'),
                        o.push('\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>'),
                        o.push("\t\t\t\t\t\t</div>"),
                        o.push("\t\t\t\t\t </form>"),
                        o.push("\t\t\t\t</div>"),
                        o.push("\t\t\t</div>"),
                        o.push("         </div>"),
                        o.push('         <div class="modal-footer">'),
                        o.push('\t\t\t\t<button class="btn btn-primary submit"> Continue </button>'),
                        o.push('\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>'),
                        o.push("         </div>"),
                        o.push("      </div>"),
                        o.push("   </div>"),
                        o.push("</div>"),
                        o.join(""))
                      ),
                      t.extend(
                        {},
                        {
                          overlayId: "zm-track-dialog-overlay",
                          containerId: "zm-track-dialog-container",
                          escClose: !0,
                          fixed: !1,
                          persist: !0,
                          close: !0,
                          overlayClose: !1,
                          autoPosition: !1,
                          onOpen: function (t) {
                            t.overlay.fadeIn("fast"), t.container.fadeIn("fast"), t.data.fadeIn("fast");
                          },
                          onShow: function (o) {
                            t("#zm-track-dialog-container #zoom-setting .submit").on("click", function () {
                              Ot() && (j({ type: "schedulepac", info: { trackfields: Bt() } }), t.modal.close(), zt(e));
                            });
                            let i = n.trackfields;
                            i && i.length > 0 && At(i),
                              setTimeout(function () {
                                t("#zoom-setting").find(".close").trigger("blur");
                              }, 10);
                          },
                          onClose: function (e) {
                            t("#zm-track-dialog-container #zoom-setting .submit").off("click"),
                              t("#zoom-setting .trackfield-sel-cont").each(function (t, e) {
                                e.zoomSelectObj && e.zoomSelectObj.destroy();
                              }),
                              e.container.fadeOut("fast", function () {
                                e.overlay.fadeOut("fast", function () {
                                  t.modal.close(),
                                    t("#zoom_schedule_button") && t("#zoom_schedule_button").is(":visible")
                                      ? t("#zoom_schedule_button").focus()
                                      : t(".ep-dp-calendar select[id$=\\.calendar]").focus();
                                });
                              });
                          }
                        }
                      )
                    )
                  : (j({ type: "schedulepac", info: { trackfields: "" } }), zt(e)));
            });
          }
          function Z(e) {
            if (n) {
              let o = n.getPassword();
              if (o === $ && t("#zoom-setting .requirepwd").hasClass("has-error")) return;
              if ((($ = o), f.meetingPwdSettingsMap.enhanceDetectionRule && o)) j({ type: "remoteCheckPwd", info: { pwd: o, channel: e } });
              else {
                let { res: t, msg: o, errortype: i } = n.checkRules();
                Y(t, o, i, e);
              }
            } else 2 === e ? Q(!1) : 3 === e && B(!1);
          }
          function Y(e, n, o, i) {
            e || !n || (1 === i && 2 === o)
              ? G()
              : (function (e, n) {
                  let o = t("#zoom-setting .requirepwd");
                  o.addClass("has-error").attr("errortype", n);
                  let i = o.find(".has-error");
                  i.text(e).addClass("showme"), 1 === n ? i.attr("role", "alert") : i.attr("role", null);
                })(n, o),
              2 === i ? Q(e) : 3 === i && B(e);
          }
          function G(e) {
            let n = t("#zoom-setting .requirepwd");
            n.hasClass("has-error") &&
              ((e && e != n.attr("errortype")) ||
                (n.removeClass("has-error").attr("errortype", null), n.find(".has-error").removeClass("showme").attr("role", null)));
          }
          function J() {
            t("#zoom-video-sec").length && (t("#zoom_schedule_button_wrapper").show(), wt());
          }
          function K() {
            let e = "";
            t("#zoom-video-sec").length
              ? t("#zm-setting-dialog-container").length || (e = t("#zoom_schedule_button"))
              : (e = t("div.quick-schedule content>a")),
              e.length && e.trigger("click");
          }
          function X(t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
            return null == e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
          }
          function tt() {
            var t = et();
            return (t = t ? m.toISOString(t) : "");
          }
          function et() {
            let t = k.parseTime(k.getStartTimeNode().val());
            return nt(k.parseStartDate(), t);
          }
          function nt(t, e) {
            let n;
            if (-1 !== t[0] && -1 !== e[0]) {
              let o = m.paddingLeft(t[0], 4),
                i = m.paddingLeft(t[1], 2),
                a = m.paddingLeft(t[2], 2),
                s = m.paddingLeft(e[0], 2),
                l = m.paddingLeft(e[1], 2);
              n = new Date(o + "-" + i + "-" + a + "T" + s + ":" + l + ":00.000Z");
            }
            return n;
          }
          function ot(t) {
            let e = at(t.split("/")[0]);
            return m.toISOString(e);
          }
          function it(t) {
            let e = t.split("/");
            return (at(e[1]) - at(e[0])) / 6e4;
          }
          function at(t) {
            let e = [0, 4, 6, 11, 13, 15],
              n = [];
            for (let o = 0; o < e.length - 1; o++) n.push(t.substring(e[o], e[o + 1]));
            let o = new Date(n[0] + "-" + n[1] + "-" + n[2] + ":" + n[3] + ":" + n[4] + "Z");
            if ((i = o) instanceof Date && !isNaN(i)) return o;
            var i;
            sendLogToBackend({
              msgType: 6,
              msg: {
                msg: "Google calendar time format changed, unable to complete conversion!, method name: calendarTimeConver",
                str: t,
                res: o
              },
              operaType: 4
            });
          }
          function st() {
            var e = 60;
            if (k.getAllDayNode().prop("checked")) return 1440;
            let n = (function () {
                let t = k.parseTime(k.getEndTimeNode().val());
                return nt(k.parseEndDate(), t);
              })(),
              o = et();
            if (n && o) e = (n - o) / 6e4;
            else {
              var i = k.getStartTimeNode(),
                a = k.getEndTimeNode();
              if (i.length && a.length) {
                var s,
                  l,
                  r = k.parseTime(t.trim(i.val())),
                  d = k.parseTime(t.trim(a.val()));
                -1 !== r[0] && -1 !== d[0] && ((s = r[0]), (l = r[1]), (e = 60 * (d[0] - s) + (d[1] - l)));
              }
            }
            return e <= 0 && (e = 60), e > 1440 && (e = 1440), e;
          }
          function lt() {
            let t = k.getDefTimezone(),
              e = k.getStartTimezoneId(),
              n = k.getEndTimezoneId(),
              o = e.text() || "",
              i = n.text() || "",
              a = null,
              s = "";
            return (
              "" == o && "" == i
                ? (s = rt(t))
                : (o && ((a = e.attr("timezoneid")), a && (s = rt(a)), s || (s = rt(Tt(o)))),
                  !s && i && ((a = n.attr("timezoneid")), a && (s = rt(a)), s || (s = rt(Tt(i))))),
              s
            );
          }
          function rt(t) {
            if (!t) return "";
            let e = /[a-zA-Z]+(\/[a-zA-Z_\-]+)+/.exec(t);
            if (e && Array.isArray(e)) {
              let n = e[0];
              return (
                n !== t &&
                  sendLogToBackend({ msgType: 4, msg: { msg: "Irregular time zone, method name: timezoneVerify", timeZone: t, res: n } }),
                n
              );
            }
            return "UTC" === t
              ? t
              : (sendLogToBackend({ msgType: 4, msg: { msg: "Time zone error, method name: timezoneVerify", timeZone: t } }), "");
          }
          function dt() {
            var e = t("#zoom_schedule_meeting_url");
            if (!e.length) {
              var n = k.getButtonsContainer();
              n.length &&
                (e = t('<a id="zoom_schedule_meeting_url" role="button" class="btn-meeting hideme" target="_blank"></a>').appendTo(n));
            }
            return e;
          }
          function ct() {
            return t("#zoom_schedule_button");
          }
          function ut() {
            return !(!ct().length && !t("#zoom_schedulepac_button").length);
          }
          function mt() {
            var t = !0;
            return k.getTopicNode() && k.getTopicNode().length > 0 && (t = !1), t;
          }
          function pt() {
            var t = k.getDescNode();
            return !(!t || !t.length);
          }
          function gt() {
            var t;
            k.getDescNode().length && (t = ft(k.getDescText()));
            var e = k.getWhereNode();
            return !t && e.length && (t = ft(k.getValueForWhereNode(e[0]))), t;
          }
          function ht() {
            var t,
              e = k.getPopupDescNode();
            e.length && (t = ft(e.html().replace(/<br>/g, " ")));
            var n = k.getPopupLocationNode();
            return !t && n.length && (t = ft(n.text())), t;
          }
          function ft(t) {
            if (!t || "string" !== Ht.type(t)) return;
            let e;
            t = t.replace(/&amp;/g, "&");
            let n = 5 == Vt.envIndex ? "-x.de" : ".de",
              o = new RegExp(
                `(?<!=)https?:\\/\\/[\\w\\-]*\\.?(${Vt.multiVersion[0]}${Vt.runEnv[1]})(.us|.com.cn|.com|.cn|${n})\\/([jswm]|pac\\/join)\\/([\\w\\-.]{8,})(\\?\\w+=[^ <|\\n\\"]*)?`,
                "ig"
              ).exec(t);
            return o && o.length && (e = { number: o[4], url: o[0], type: "pac/join" === o[3] ? "pac_meeting" : "meeting" }), e;
          }
          function vt() {
            var e = k.getWhereNode();
            e && e.length > 0 && e[0].dispatchEvent(new Event("input", { bubbles: !0 }));
            var n = k.getSaveBtnNode();
            if (!n.data("click-event-registered")) {
              var o = k.getTopicNode();
              o.length && o.attr("maxlength", 200), n.data("click-event-registered", !0), n.off("click", _t).on("click", _t);
            }
            t("[role=menuitem][jsname=j7LFlb] div[jsname=VkLyEc]")
              .parent()
              .off("click")
              .on("click", function () {
                var t = gt();
                t && t.number;
              });
          }
          function bt() {
            let e = gt();
            if (e) {
              let n = "1" === t("#YPCqFe #zm-usepmi").text(),
                o = t("#zoom-quick2adv-number").text();
              return n && o.length > 8 ? o : e.number;
            }
            return "";
          }
          function _t() {
            t(this);
            t("#zoom_repeat_edit_flag").text("0"), t("#zoom_recurring_edit_flag").text("");
            var e = gt();
            if (e) {
              var n = "1" === t("#YPCqFe #zm-usepmi").text(),
                o = t("#zoom-quick2adv-number").text(),
                a = n && o.length > 8 ? o : e.number;
              let c = t("#YPCqFe #zm-hidden-eid").text() || "";
              var s = { number: a, zm_eid: c, event_baseid: Ht.convertEidToBaseid(c), topic: yt() },
                l = et();
              if (l) {
                var r = st();
                t.extend(s, { startTime: m.toISOString(l), duration: r });
              } else t.extend(s, { startTime: "", duration: 0 });
              var d = k.isRepeat();
              t.extend(s, { isRepeat: d, timezone: lt(), zoomrooms: k.getZoomRooms(), isPrivateEvent: k.getIsPrivateEvent() }),
                i.bindWbParamForEditMeeting(s),
                (l || d) && j({ type: "update", info: s }),
                (s.startTime && s.timezone && s.topic) || t("#zoom_repeat_edit_flag").text("1");
            }
            t("#zoom_edit_event_flag").text("1");
          }
          function yt() {
            return k.getTopicNode().val() || "";
          }
          function zt(e) {
            (e = e || t("#zoom_schedule_button")).length && (e.prop("disabled", !0), e.addClass("zoom-loading"));
          }
          function wt() {
            let e = t(".zoom-button-container .zoom-loading");
            e.length && (e.prop("disabled", !1), e.removeClass("zoom-loading"));
          }
          function kt(e) {
            var n = gt();
            if (n) {
              if (t("#zoom-video-sec i.icon-trash").length <= 0) {
                var o = ft(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
                (o && o.number && o.number == n.number) ||
                  e.parent().append('<i class="icon-trash" title="Remove Zoom Meeting" aria-label="Remove Zoom Meeting"></i>');
              }
              t("#zoom-video-sec i.icon-trash").off(),
                t("#zoom-video-sec i.icon-trash").on("click", function (e) {
                  if (!this.lock && n && n.number) {
                    let e = "1" === t("#YPCqFe #zm-usepmi").text(),
                      o = t("#zoom-quick2adv-number").text(),
                      i = e && o.length > 8 ? o : n.number,
                      a = Ht.convertEidToBaseid(t("#YPCqFe #zm-hidden-eid").text() || "");
                    sendLogToBackend({ msgType: 2, msg: { msg: "del08", meetingNumber: i, baseid: a }, operaType: 1 }),
                      j({ type: "icon_delete", info: { number: i, event_baseid: a } }),
                      t(this).addClass("loading"),
                      (this.lock = !0);
                  }
                });
            }
          }
          function xt(e) {
            var n = ft(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
            if (n && n.url) {
              k.setWhereNodeValue(n.url);
              var o = t("#xRTCIn a[href*='/script.google.com/']").attr("href") || "";
              k.setDescNodeValue(n.url + '<br><br><a href="' + o + '" target="_blank">Joining Instructions</a>'),
                Ie(n.url),
                t("#zoom_schedule_button_wrapper > *").hide(),
                t("#zoom_schedule_meeting_url").show(),
                t("#zoom-quick2adv-number").length <= 0
                  ? t("body").append('<div id="zoom-quick2adv-number" style="display:none;">' + n.number + "</div>")
                  : t("#zoom-quick2adv-number").text(n.number);
            } else A(e);
          }
          function Ct(e) {
            t("#YPCqFe #zm-usepmi").empty(), t("#zoom-quick2adv-number").empty(), k.removeSession();
            var n = k.getButtonsContainer();
            n.addClass("zoom-button-container");
            var o = t("<button>", { id: "zoom_schedulepac_button", html: "Personal Audio Conference", class: "btn-pac" });
            t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length > 0 &&
              o.off("click").on("click", function () {
                U();
              });
            var i = t("<button>", { id: "zoom_schedule_button", html: "Make it a Zoom Meeting", class: "btn-meeting" });
            0 == t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length &&
              (n.prepend(t('<div id="zoom_schedule_button_wrapper"></div>').prepend(i)),
              i.off("click").on("click", function () {
                xt(i);
              })),
              t("#zoom_schedule_meeting_url").hide(),
              t("#zoom_schedule_button_wrapper > *").show(),
              t("#zoom-video-sec i.icon-trash").remove(),
              k.getEditDetailDOM().removeClass("zoom-meeting-state");
          }
          function Dt() {
            let e = rt(Tt(k.getQuicTimezoneText()));
            return (
              e ||
              ((e = rt(Tt(t("#yDmH0d div[jsname=xpDKHf] div[jsname=oapyFe]").attr("data-tooltip")))),
              e || ((e = rt(t("#yDmH0d div[jsname=xpDKHf] div[jsname=T7keRc]").attr("data-starttimezone"))), e || rt(k.getDefTimezone())))
            );
          }
          function Tt(t) {
            if (0 === _) return "";
            if ((_ || (_ = k.getGoogleTimezonedata()), t && Array.isArray(_)))
              try {
                let e = _[0];
                if (Array.isArray(e) && e.length)
                  for (let n = 0; n < e.length; n++) {
                    let o = e[n];
                    if (Array.isArray(o) && o[1] == t) return o[0];
                  }
              } catch (t) {}
            return "";
          }
          function jt() {
            j({ type: "callPopupLogin" });
          }
          function Et(t) {
            t.hasClass("show") ||
              (t.css({ display: "block" }),
              t.timeout && (clearTimeout(t.timeout), (t.timeout = null)),
              (t.timeout = setTimeout(function () {
                t.addClass("show"), (t.timeout = null);
              }, 10)));
          }
          function St(t) {
            t.hasClass("show") &&
              (t.removeClass("show"),
              t.timeout && (clearTimeout(t.timeout), (t.timeout = null)),
              (t.timeout = setTimeout(function () {
                t.css({ display: "none" }), (t.timeout = null);
              }, 200)));
          }
          function Pt() {
            let e = r.e2ee;
            if (e.support) {
              let n;
              (n = Lt() ? e.pmiEnable : e.normalEnable),
                n
                  ? t("#setting_option_e2e").prop("checked", !0).trigger("change")
                  : t("#setting_option_enhanced").prop("checked", !0).trigger("change"),
                e.locked &&
                  (t("#setting_option_enhanced").parent().remove(), Te(t("#zoom-setting .encryption-option > .radio-inline"), !0));
            } else t("#zoom-setting .encryption-box").remove();
          }
          function Ft(t, e) {
            let n;
            return (
              "boolean" !== Ht.type(e) && (e = Lt()),
              (n = e ? r?.pmiFeatures?.[t] : r?.meetingFeatures?.[t]),
              void 0 === n && (console.log("getDataFromFeatures failed, the key is: ", t), (n = {})),
              n
            );
          }
          function Mt() {
            let e = (function () {
                if (z?.isVisible) {
                  let { id: t, extData: e } = z.getSelectedResult();
                  if ("me" !== t) {
                    let e = r.zoom_assistants;
                    for (let n = 0; n < e.length; n++) {
                      let o = e[n];
                      if (o.id == t) return o.pmc;
                    }
                    return;
                  }
                }
                return Ft("pmc", !1);
              })(),
              n = t("#zoom-setting .meetingchat");
            "object" !== Ht.type(e) &&
              (e = {
                show: !1,
                value: !1,
                disabled: !1,
                childParams: { allowAutoAddInvitedExternalUsers: { show: !1, value: !1, disabled: !1 } }
              }),
              e.show ? n.removeClass("hideme") : n.addClass("hideme"),
              n.find("#setting_option_pmc").prop("checked", e.value).trigger("change");
            let o = e?.childParams?.allowAutoAddInvitedExternalUsers || {};
            o.show ? n.find(".addExternalUser").removeClass("hideme") : n.find(".addExternalUser").addClass("hideme"),
              n.find("#pmc_invite_external_user").prop("checked", !!o.value),
              o.disabled ? Te(n.find(".addExternalUser .checkbox-inline"), !0) : Te(n.find(".addExternalUser .checkbox-inline"), !1);
          }
          function Nt(e) {
            let n = Ft("qa", (e = Rt(e)));
            t("#setting_option_qa").prop("checked", n.value);
          }
          function It(e) {
            let n = Ft("meetingSummary", (e = Rt(e)));
            t("#setting_option_meetingSummary").prop("checked", n.value);
          }
          function qt(e) {
            let n = Ft("meetingQuery", (e = Rt(e)));
            t("#setting_option_meetingQuery").prop("checked", n.value);
          }
          function Rt(t) {
            return "boolean" !== Ht.type(t) && (t = Lt()), t;
          }
          function Lt() {
            return "pmi" === t("[name=meeting_type]:checked").val();
          }
          function At(e) {
            if ((e || (e = r.zoom_trackfields), e && e.length > 0)) {
              let n = t("#zoom-setting .trackingcodes > .trackitems");
              n.empty(),
                t.each(e, function (e, o) {
                  let i = (function (t) {
                    if (!t || !t.trackField || !t.id) return "";
                    let e = `\n\t\t\t<div class="form-group clearfix">\n\t\t\t\t<label class="left-label">${P(t.trackField)}${
                      t.required ? "<i>*</i>" : ""
                    }</label>\n\t\t\t\t<div class="right-div">\n\t\t\t\t\t<div class="trackfield-sel-cont" trackitemid="${P(
                      t.id
                    )}" isrequired="${P(t.required)}"></div>\n\t\t\t\t\t${
                      t.required ? '<div class="error-msg showme" role="alert"></div>' : ""
                    }\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;
                    return e;
                  })(o);
                  if (i) {
                    n.append(i);
                    let e = o?.options,
                      a = n.find(".trackfield-sel-cont").last(),
                      s = a.get(0),
                      l = [];
                    Array.isArray(e) &&
                      e.length &&
                      t.each(e, function (t, e) {
                        l.push({ id: e, label: e });
                      });
                    let r = a.parent();
                    s.zoomSelectObj ||
                      (s.zoomSelectObj = new V.Z({
                        el: s,
                        defaultValue: o.mtValue,
                        dataList: l,
                        jquery: Wt,
                        ariaLabel: l.length ? o.trackField + ",Select" : o.trackField,
                        scrollContainer: t("#zoom-setting .modal-body").get(0),
                        required: o.required,
                        inputMode: !0,
                        textInputMaxlength: 50,
                        allowClearInput: !0,
                        changeCallback: function (t) {
                          o.required && (t ? Yt(r) : Zt(Vt.errors[28], r));
                        }
                      }));
                  }
                });
            }
          }
          function Ot() {
            let e = t("#zoom-setting .trackingcodes .trackfield-sel-cont"),
              n = !1;
            return (
              e.is(":visible") &&
                e.each(function (e, o) {
                  let i = t(o),
                    a = i.parent();
                  if ("true" === i.attr("isrequired")) {
                    if (o.zoomSelectObj) {
                      o.zoomSelectObj.getSelectedResult() ? Yt(a) : Zt(Vt.errors[28], a);
                    }
                    if (a.hasClass("error-state")) return o.scrollIntoView(), (n = !0), !1;
                  }
                }),
              !n
            );
          }
          function Bt() {
            let e = t("#zoom-setting .trackingcodes .trackfield-sel-cont");
            if (e.is(":visible")) {
              let n = [];
              if (
                (e.each(function (e, o) {
                  if (o.zoomSelectObj) {
                    let e = o.zoomSelectObj.getSelectedResult();
                    e && n.push({ id: t(o).attr("trackitemid"), mtValue: e });
                  }
                }),
                n.length)
              )
                return JSON.stringify(n);
            }
            return "";
          }
          function Qt(t, e) {
            if (t?.length) {
              e || Ut();
              let n = t.find(".interpretation-email").val();
              if (n) {
                if (!m.isEmail(n)) return void (e && Zt(Vt.errors[23], t));
                {
                  let e = (function (t) {
                    let e = [];
                    t?.length &&
                      t.find(".interpretation-sel-cont").each(function (t, n) {
                        if (n.zoomSelectObj) {
                          let { id: t, extData: o } = n.zoomSelectObj.getSelectedResult();
                          e.push(t);
                        }
                      });
                    return e;
                  })(t);
                  if (2 === e.length) {
                    if (!e[0] || !e[1]) return void Zt(Vt.errors[25], t);
                    if (e[0] === e[1]) return void Zt(Vt.errors[24], t);
                  }
                  let o = 0;
                  if (
                    (t
                      .parent()
                      .find(".interpretation-email")
                      .each(function (t, e) {
                        e.value === n && o++;
                      }),
                    o > 1)
                  )
                    return void Zt(Vt.errors[26], t);
                }
              }
              Yt(t);
            }
          }
          function Ut() {
            if (ne?.needCustomLangCheck) {
              let e = new Set();
              t("#zoom-setting .interpretation-sel-cont").each(function (t, n) {
                if (n.zoomSelectObj) {
                  let { id: t, extData: o } = n.zoomSelectObj.getSelectedResult();
                  t && o && !o.isFixed && e.add(t);
                }
              }),
                e.size > ne?.maxCustomLanguagesValue
                  ? Zt(Vt.errors[27], t("#zoom-setting .interpretation .error-msg-cont"))
                  : Yt(t("#zoom-setting .interpretation .error-msg-cont"));
            }
          }
          function Zt(t, e) {
            xe(t, e, !0), e.addClass("error-state");
          }
          function Yt(t) {
            Ce(t), t.removeClass("error-state");
          }
          function Gt(e) {
            let n = t("#zoom-setting .interpretation"),
              o = n.find(".edit-interpretation-cont");
            o.append(
              '\n\t\t\t<div class="edit-interpretation-line">\n\t\t\t\t<input type="text" autocomplete="" name="" placeholder="john@company.com" aria-label="Interpreter email edit" class="interpretation-email form-control">\n\t\t\t\t<div class="interpretation-sel-cont"></div>\n\t\t\t\t<span class="link-symbol"></span>\n\t\t\t\t<div class="interpretation-sel-cont"></div>\n\t\t\t\t<a href="" class="remove-line-btn" aria-label="Remove Interpreter" role="button"></a>\n\t\t\t\t<div class="error-msg"></div>\n\t\t\t</div>\n\t\t'
            );
            let i = o.find(".edit-interpretation-line"),
              a = i.last();
            !(function (e, n) {
              if (n) {
                ne = {
                  dataList: [],
                  firstLanguage: n?.childParams?.firstLanguage,
                  maxCustomLanguagesValue: n?.childParams?.maxCustomLanguagesValue,
                  needCustomLangCheck: !1
                };
                let e = n?.childParams?.fixedLanguageIdsArr,
                  o = null;
                Array.isArray(e) && e.length && (o = e);
                let i = 0;
                t.each(n.dataOptions, function (t, e) {
                  let n = e.id,
                    a = o && o.indexOf(n) > -1;
                  a || i++, ne.dataList.push({ id: n, label: e.label, preIcon: e.ext, extData: { isFixed: a } });
                }),
                  i > ne.maxCustomLanguagesValue && (ne.needCustomLangCheck = !0);
              }
              ne &&
                e.find(".interpretation-sel-cont").each(function (n, o) {
                  o.zoomSelectObj ||
                    (o.zoomSelectObj = new V.Z({
                      el: o,
                      defaultValue: 0 === n ? ne.firstLanguage : "",
                      dataList: ne.dataList,
                      jquery: Wt,
                      ariaLabel: 0 === n ? "Select Source language" : "Select Target language",
                      placeholder: 0 === n ? "Select" : "Language",
                      multiParamResults: !0,
                      scrollContainer: t("#zoom-setting .modal-body").get(0),
                      changeCallback: function () {
                        Qt(e, !1);
                      }
                    }));
                });
            })(a, e);
            if (i.length >= 20) n.addClass("max-line"), a.find(".remove-line-btn").trigger("focus");
            else {
              let t = n.find(".add-interpretation-btn").get(0);
              t && t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            }
          }
          let Jt,
            Kt,
            Xt,
            te,
            ee,
            ne = null;
          function oe(e, n) {
            "boolean" !== Ht.type(e) && (e = Lt());
            let o = Ft("autoRec", e),
              i = t("#zoom-setting .recording");
            if ((n || t("#setting_recording").prop("checked", o.value).trigger("change"), o.dataOptions.length > 1)) {
              let t;
              if (o.value) {
                let e = o.childParams.autoRecordingSubSelected.value;
                t = i.find("[name=option_rec_id][value=" + e + "]");
              }
              (t && t.length) || (t = i.find("[name=option_rec_id]").eq(0)), t.prop({ checked: !0 }).trigger("change");
            }
          }
          function ie(e) {
            let n = r.focusMode,
              o = t("#zoom-setting .focusMode");
            if (n.support) {
              if (e) {
                Lt()
                  ? o.find("#setting_option_focusMode").prop({ checked: n.pmi.defaultVal })
                  : o.find("#setting_option_focusMode").prop({ checked: !1 });
              }
            } else o.remove();
          }
          function ae(e) {
            let n = r.allowDeny,
              i = Lt(),
              a = t("#zoom-setting .allowDeny");
            if (n.support) {
              e ||
                (function () {
                  let e = t("#zoom-setting .allowDeny");
                  e.find("#setting_allowDeny").on("change", function (n) {
                    t(this).prop("checked") ? (e.addClass("bechecked"), b.selRegion.length || re()) : e.removeClass("bechecked"), se();
                  }),
                    e.on("click", ".edit-region-button", function (t) {
                      t.stopPropagation(), t.preventDefault(), re();
                    });
                })(),
                t("#zoom-setting .edit-region-cont").length ||
                  (t("#zoom-setting .modal-dialog").append(
                    '\n\t\t\t<div class="edit-region-cont drop-edit-cont">\n\t\t\t\t<div class="backdrop"></div>\n\t\t\t\t<div class="box" tabindex="-1">\n\t\t\t\t\t<div class="title">Approve or Block Entry for Users from Specific Regions/Countries</div>\n\t\t\t\t\t<div class="type-cont">\n\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="allowDeny_type_allow" name="allowDeny_type" value="allow" checked><span>Only allow users from selected regions/countries</span></label>\n\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="allowDeny_type_deny" name="allowDeny_type" value="deny"><span>Block users from selected regions/countries</span></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="input-title">Countries/Regions</div>\n\t\t\t\t\t<div class="input-cont"></div>\n\t\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'
                  ),
                  (b.$editRegionModule = t("#zoom-setting .edit-region-cont")),
                  (o = new O({
                    el: t("#zoom-setting .edit-region-cont .input-cont").get(0),
                    dataList: n.regionList,
                    ariaLabel: "Regions/Countries",
                    keyEventDom: t("#zm-setting-dialog-container"),
                    dropDownCont: t("#zoom-setting .edit-region-cont"),
                    jquery: Wt,
                    tagChangeCallback: function () {
                      o.getSelectedItems().length
                        ? b.$editRegionModule.find(".btn-Save").prop("disabled", !1)
                        : b.$editRegionModule.find(".btn-Save").prop("disabled", !0);
                    }
                  })),
                  (function () {
                    let e = t("#zoom-setting .allowDeny");
                    b.$editRegionModule.find(".btn-Cancel, input[name=allowDeny_type]").on("focus", function (t) {
                      o.loseFocus();
                    }),
                      b.$editRegionModule.find("input[name=allowDeny_type], button").on("blur", function (e) {
                        let n = this;
                        b.$editRegionModule.hasClass("show") &&
                          setTimeout(function () {
                            let e = document.activeElement;
                            if (!e || !t(e).parents(".edit-region-cont").length)
                              if ("BUTTON" === n.nodeName) b.$editRegionModule.find("input[name=allowDeny_type]:checked").trigger("focus");
                              else {
                                let t = b.$editRegionModule.find(".btn-Save");
                                t.prop("disabled") && (t = b.$editRegionModule.find(".btn-Cancel")), t.trigger("focus");
                              }
                          }, 0);
                      }),
                      b.$editRegionModule.on("click", ".btn-Cancel", function (t) {
                        de(), b.selRegion.length || e.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
                      }),
                      b.$editRegionModule.on("click", ".btn-Save", function (t) {
                        (b.selRegion = o.getSelectedItems()),
                          (b.selType = "allow" === b.$editRegionModule.find("[name=allowDeny_type]:checked").val() ? "0" : "1"),
                          le(b.selRegion, b.selType),
                          de(),
                          se();
                      }),
                      b.$editRegionModule.on("click", ".backdrop", function (t) {
                        de(), b.selRegion.length || e.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
                      }),
                      b.$editRegionModule.on("click", function (t) {
                        t.stopPropagation(), o.loseFocus();
                      }),
                      b.$editRegionModule.find("[name=allowDeny_type]").on("change", function (t) {
                        let e = this.value,
                          n = o.getSelectedItems();
                        if ("allow" === e) {
                          b.editCache.deny = n;
                          let t = b.editCache.allow;
                          o.resetTag(t);
                        } else {
                          b.editCache.allow = n;
                          let t = b.editCache.deny;
                          o.resetTag(t);
                        }
                      });
                  })());
              let s = i ? n.pmi : n.normal;
              if (s.defaultVal) {
                let t = s.selectRegion,
                  e = s.type;
                (b.selRegion = t), (b.selType = e), le(t, e), a.find("#setting_allowDeny").prop({ checked: !0 }).trigger("change");
              } else
                a.find(".sel-region-list").html(""),
                  (b.selRegion = []),
                  (b.selType = "0"),
                  a.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
              n.locked && (Te(t(".control-row.allowDeny > label"), !0), a.find(".edit-region-button").hide());
            } else a.remove();
          }
          function se() {
            let e,
              n = r.allowDeny,
              o = Lt(),
              i = t("#zoom-setting .allowDeny");
            o
              ? i.removeClass("haschange")
              : ((e = n.normal),
                e.defaultVal !== i.find("#setting_allowDeny").prop("checked") ||
                (e.defaultVal && (e.type !== b.selType || e.selectRegion.join("") !== b.selRegion.join("")))
                  ? i.addClass("haschange")
                  : i.removeClass("haschange"));
          }
          function le(e, n) {
            let o,
              i = t("#zoom-setting .allowDeny"),
              a = "";
            for (var s = 0, l = e.length; s < l; s++) {
              let t = ce(e[s]);
              if (a.length + t.length > 148) {
                a = a.slice(0, -2) + "...";
                break;
              }
              (a += t), s < l - 1 && (a += ", ");
            }
            i.find(".regionRes").removeClass("show"),
              (o = "0" === n ? i.find(".regionRes.allow") : i.find(".regionRes.deny")),
              o.addClass("show"),
              o.find(".sel-region-list").html(a);
          }
          function re() {
            t("#zoom-setting").addClass("edit-region-state"), Et(t("#zoom-setting .edit-region-cont"));
            let e = "0" === b.selType ? "allow" : "deny";
            t("[name=allowDeny_type][value=" + e + "]")
              .prop({ checked: !0 })
              .trigger("focus");
            let n = b.selRegion;
            n.length || "0" !== b.selType || (n = [r.allowDeny.defaultRegion.code]),
              o.resetTag(n),
              (b.editCache.deny = []),
              (b.editCache.allow = []);
          }
          function de() {
            t("#zoom-setting").removeClass("edit-region-state"),
              St(t("#zoom-setting .edit-region-cont")),
              t("#zoom-setting #setting_allowDeny").trigger("focus");
          }
          function ce(t) {
            if (r && r.allowDeny) {
              let o = r.allowDeny.regionList;
              if (Array.isArray(o))
                for (var e = 0, n = o.length; e < n; e++) {
                  let n = o[e];
                  if (n.code == t) return n.displayName;
                }
            }
            return "";
          }
          function ue(e, n) {
            let o = r.allowAlternativeHostEditPoll;
            if (!e)
              if (r) {
                let e = t("#alternative_host").parent(),
                  n = e.find(".alternative_host_error");
                e.removeClass("has-error"),
                  n.hide(),
                  r.zoom_support_althost
                    ? (o &&
                        o.support &&
                        (t(".altnativehost").addClass("show-edit-poll"), o.locked && Te(t("#zoom-setting .host-edit-poll"), !0)),
                      t("#alternative_host").val(r.zoom_config_althost).trigger("keyup"))
                    : t(".altnativehost").hide();
              } else t(".altnativehost").hide();
            if (r.zoom_support_althost && o && o.support) {
              Lt() ? t("#host_edit_poll").prop("checked", o.pmi.defaultVal) : t("#host_edit_poll").prop("checked", o.normal.defaultVal);
            }
          }
          function me() {
            let e,
              n = r.security,
              o = Lt();
            (e = v ? ke() : !!t("#setting_option_jbh").prop("checked")), n && he(!0, !1, n, o, e, !0);
          }
          function pe(e, n) {
            if (!e) {
              let e = r.embedPasscode,
                n = t("#zoom-setting .security-box");
              e
                ? (n.find(".usability-desc.pwd").html(Vt.tips[26]), n.find(".pwdTip").attr("info", Vt.tips[29]))
                : (n.find(".usability-desc.pwd").html(Vt.tips[27]), n.find(".pwdTip").remove());
            }
            let o;
            o = e ? Lt() : r.zoom_config_pmi;
            let i,
              a = r.security;
            !(function (e, n, o) {
              if (!o)
                if (v) {
                  t("#zoom-setting .security-box .waitingroom").remove();
                  let e = t("#zoom-setting .jbh-moved-alert .description");
                  e.html(Vt.tips[38]), e.find("a").attr("href", r.mySettingUrl);
                } else t("#zoom-setting .security-box .waitingroom2").remove(), t("#zoom-setting .options .jbh-moved-alert").remove();
              v
                ? be(n, o)
                : e &&
                  (function (e, n) {
                    let { wrEnable: o, wrLocked: i } = ze(e, n);
                    t("#setting_option_waitingroom").prop("checked", o), Te(t(".control-row.waitingroom > label"), !!i);
                    e.newSecurityEnabled.defaultVal &&
                      (!o && i ? t("#zoom-setting .waitingroom").hide() : t("#zoom-setting .waitingroom").show());
                  })(e, n);
            })(a, o, e),
              (i = e
                ? v
                  ? ke()
                  : !!t("#setting_option_jbh").prop("checked")
                : v
                ? (function (t) {
                    let e = ye(t);
                    if (!e.value) return !0;
                    let n = e.childParams.auto.value,
                      o = e.childParams.manu.value,
                      i = e.childParams.options.value;
                    if ("auto" === i) {
                      if ("-1" !== n) return !0;
                    } else if ("manu" === i && "-1" !== o && null !== o) return !0;
                    return !1;
                  })(o)
                : r.zoom_config_jbh),
              a &&
                (a.newSecurityEnabled.defaultVal
                  ? (function (e, n, o) {
                      let i = !1,
                        a = !1,
                        s = !1,
                        l = r.authentication,
                        d = l.locked;
                      n
                        ? ((i = e.pmi.passcode.default_all), (a = e.pmi.passcode.locked), (s = l.pmi.defaultVal))
                        : ((i = e.normal.passcode.defaultVal), (a = e.normal.passcode.locked), (s = l.normal.defaultVal));
                      t("#setting_option_needpassword").prop("checked", i), Te(t(".requirepwd > label"), !!a);
                      !i && a ? t("#zoom-setting .requirepwd").hide() : t("#zoom-setting .requirepwd").show();
                      l.support && (!s && d ? t("#zoom-setting .authentication").hide() : t("#zoom-setting .authentication").show());
                      ve(e, n, i, s);
                      let c = (function (e, n, o, i, a, s, l) {
                        let r,
                          d,
                          c = t("#zoom-setting .security-box"),
                          u = (!s && l) || !o.support;
                        if (v) {
                          let t = ye(e);
                          (r = t.value), (d = t.disabled);
                        } else {
                          let t = ze(n, e);
                          (r = t.wrEnable), (d = t.wrLocked);
                        }
                        return !i && a && !r && d && u ? (c.hide(), !1) : (c.is(":visible") || c.show(), !0);
                      })(n, e, l, i, a, s, d);
                      c && (fe(e, n, o), we());
                      De(n);
                    })(a, o, n)
                  : he(e, n, a, o, i),
                (function (e) {
                  let n = r.authentication;
                  if (((p.selAuthLastVal = -1), n.support)) {
                    p.renderData = n.optionLists;
                    let o = n.normal.defaultVal;
                    e &&
                      ((p.renderData = (function (t, e) {
                        if ("object" === Ht.type(e) && Object.keys(e).length && Array.isArray(t)) {
                          let i;
                          try {
                            i = JSON.parse(JSON.stringify(t));
                          } catch (t) {}
                          if (Array.isArray(i)) {
                            let t = !1;
                            e.defaultVal = !0;
                            for (var n = 0, o = i.length; n < o; n++) {
                              let o = i[n];
                              o.defaultVal && (i[n].defaultVal = !1), o.id == e.id && ((i[n] = e), (t = !0));
                            }
                            return t || ((e.del = !0), i.unshift(e)), i;
                          }
                        }
                        return t;
                      })(n.optionLists, n.pmi.pmiUpdate)),
                      (o = n.pmi.defaultVal));
                    let { htmlText: i, selVal: a } = (function (t) {
                      let e = "",
                        n = "",
                        o = -1,
                        i = "",
                        a = t.length;
                      if (a > 1) {
                        n = '<div class="select-field"><select id="sel_for_authentication" aria-label="Require authentication to join">';
                        for (var s = 0; s < a; s++) {
                          let i = t[s];
                          (n += `\n\t\t\t\t\t<option value="${s}">${P(i.name)}</option>\n\t\t\t\t`),
                            i.defaultVal && ((e = ": " + P(i.name)), (o = s));
                        }
                        (n += "</select></div>"), (i = '\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t');
                      } else
                        1 == a
                          ? ((e = ": " + P(t[0].name)), (i = '\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t'))
                          : (i =
                              '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>');
                      let l = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${e}</span></optext>\n\t\t\t</label>\n\t\t\t${n}\n\t\t\t${i}\n\t\t\t<div class="del-opt-prompt">${Vt.tips[13]}</div>\n\t\t`;
                      return { htmlText: l, selVal: o };
                    })(p.renderData);
                    p.$authentication.html(i).removeClass("haslock"),
                      t("#zoom-setting .edit-domain-cont").length ||
                        (t("#zoom-setting .modal-dialog").append(
                          `\n\t\t\t<div class="edit-domain-cont drop-edit-cont">\n\t\t\t\t<div class="backdrop"></div>\n\t\t\t\t<div class="box" tabindex="-1">\n\t\t\t\t\t<div class="title">Edit Domains</div>\n\t\t\t\t\t<div class="notification">${Vt.tips[12]}</div>\n\t\t\t\t\t<div class="input-cont">\n\t\t\t\t\t\t<textarea id="auth_domain_info" name="auth_domain_info" placeholder="" value="" aria-label="allowed domains"></textarea>\n\t\t\t\t\t\t<span class="has-error help-block" style="display: none;" role="">${Vt.errors[10]}</span>\n\t\t\t\t\t\t<div class="block-domains-error">${Vt.errors[22]}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`
                        ),
                        (p.$zmEditDomainModule = t("#zoom-setting .edit-domain-cont")),
                        p.$zmEditDomainModule.find(".block-domains-error .setting-url").attr("href", r.mySettingUrl),
                        (function () {
                          p.$zmEditDomainModule.on("click", ".btn-Cancel", function (t) {
                            t.stopPropagation(), Ne();
                          }),
                            p.$zmEditDomainModule.on("click", ".btn-Save", function (e) {
                              e.stopPropagation(),
                                m.validateEmail() &&
                                (function () {
                                  let e = m.callateInputHandler(t("#zoom-setting #auth_domain_info").val()),
                                    n = r.blockDomains;
                                  if (!e || !Array.isArray(n) || !n.length) return !0;
                                  let o = [],
                                    i = e.split(","),
                                    a = n.join(",").indexOf("*.") > -1,
                                    s = e.indexOf("*.") > -1;
                                  if (a || s)
                                    for (d = 0; d < i.length; d++) {
                                      let t = i[d];
                                      for (var l = 0; l < n.length; l++) {
                                        let e = n[l];
                                        if (t == e) {
                                          o.push(t);
                                          break;
                                        }
                                        if (e.indexOf("*.") > -1) {
                                          let n = e.substring(e.lastIndexOf("*.") + 2);
                                          if (Ht.endWithStr(t, n)) {
                                            o.push(t);
                                            break;
                                          }
                                          if (t.indexOf("*.") > -1 && ((n = t.substring(t.lastIndexOf("*.") + 2)), Ht.endWithStr(e, n))) {
                                            o.push(t);
                                            break;
                                          }
                                        }
                                      }
                                    }
                                  else
                                    for (var d = 0; d < i.length; d++) {
                                      let t = i[d];
                                      n.indexOf(t) > -1 && o.push(t);
                                    }
                                  if (o.length)
                                    return (
                                      (function (t) {
                                        let e = Wt("#zoom-setting .edit-domain-cont .block-domains-error");
                                        e.length && t && (e.find(".domains").html(t), e.show().attr("role", "alert"));
                                      })(o.join(",")),
                                      !1
                                    );
                                  return !0;
                                })()
                                  ? (!(function () {
                                      let e = m.callateInputHandler(t("#zoom-setting #auth_domain_info").val()),
                                        n = t("#zoom-setting #sel_for_authentication").val() || 0,
                                        o = p.renderData[n];
                                      o && o.domain && ((o.domain = e), Fe(n));
                                    })(),
                                    Ne())
                                  : t("#zoom-setting #auth_domain_info").trigger("focus");
                            }),
                            p.$zmEditDomainModule.on("click", ".backdrop", function (t) {
                              t.stopPropagation(), Ne();
                            }),
                            p.$zmEditDomainModule.find("textarea, button").on("blur", function (e) {
                              let n = this;
                              p.$zmEditDomainModule.hasClass("show") &&
                                setTimeout(function () {
                                  let e = document.activeElement;
                                  if (!e || !t(e).parents(".edit-domain-cont").length)
                                    if ("BUTTON" === n.nodeName) {
                                      let t = p.$zmEditDomainModule.find("textarea");
                                      t.prop("disabled") && (t = p.$zmEditDomainModule.find(".btn-Cancel")), t.trigger("focus");
                                    } else {
                                      let t = p.$zmEditDomainModule.find(".btn-Save");
                                      t.prop("disabled") && (t = p.$zmEditDomainModule.find(".btn-Cancel")), t.trigger("focus");
                                    }
                                }, 0);
                            });
                          let e = null,
                            n = p.$zmEditDomainModule.find(".btn-Save");
                          p.$zmEditDomainModule.find("#auth_domain_info").on("input", function (t) {
                            let o = this;
                            return (
                              e && clearTimeout(e),
                              (e = setTimeout(function () {
                                m.validateEmail(),
                                  o.value !== o.originalValue ? n.prop("disabled", !1) : n.prop("disabled", !0),
                                  Me(),
                                  (e = null);
                              }, 500)),
                              (this.style.height = "auto"),
                              (this.style.height = this.scrollHeight + 2 + "px"),
                              !1
                            );
                          }),
                            p.$zmEditDomainModule.on("click", ".setting-url", function (e) {
                              e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                            });
                        })(),
                        p.$authentication.on("click", ".domain-info-field .edit-button", function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            (function () {
                              let e = t("#zoom-setting .authentication").hasClass("haslock");
                              e &&
                                (p.$zmEditDomainModule.addClass("haslocked"),
                                p.$zmEditDomainModule.find("#auth_domain_info").prop("disabled", !0),
                                p.$zmEditDomainModule.find(".btn-Save").remove());
                              (function () {
                                let e = p.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
                                if (e && e.domain) {
                                  let t = p.$zmEditDomainModule.find("#auth_domain_info");
                                  t.val(e.domain),
                                    (t.get(0).originalValue = e.domain),
                                    setTimeout(function () {
                                      t.trigger("input");
                                    }, 0);
                                }
                                p.$zmEditDomainModule.find(".btn-Save").prop("disabled", !0);
                              })(),
                                t("#zoom-setting").addClass("edit-domain-state"),
                                Et(t("#zoom-setting .edit-domain-cont"));
                              let n = null;
                              if (e) {
                                let t = "allowed domains: " + p.$zmEditDomainModule.find("#auth_domain_info").val() + " Cancel";
                                (n = p.$zmEditDomainModule.find(".btn-Cancel")), n.attr("aria-label", t);
                              } else
                                p.$zmEditDomainModule.find(".btn-Cancel").attr("aria-label", ""),
                                  (n = p.$zmEditDomainModule.find("#auth_domain_info"));
                              n.trigger("focus");
                            })();
                        }),
                        p.$authentication.on("click", ".nooption", function (e) {
                          e.stopPropagation(),
                            (function () {
                              let e = t("#zoom-setting .authentication .exception-message");
                              e.is(":visible")
                                ? Pe()
                                : (2 * p.$authentication.position().top > t("#zoom-setting .modal-body").height()
                                    ? e.removeClass("reversal")
                                    : e.addClass("reversal"),
                                  Et(e),
                                  (p.authExceptionTimeout = setTimeout(function () {
                                    St(e), (p.authExceptionTimeout = null);
                                  }, 5e3)));
                            })();
                        })),
                      t("#zoom-setting #setting_option_authentication").on("change", function () {
                        let e = t(this).prop("checked");
                        e ? (p.$authentication.addClass("check"), Se(e)) : (p.$authentication.removeClass("check"), Se(e), Ee()), we();
                      }),
                      t("#zoom-setting #sel_for_authentication").on("change", function () {
                        let e = t(this).val();
                        Ee(), Fe(e, !0);
                      }),
                      (function (e, n, o) {
                        n.locked && Te(t("#zoom-setting .authentication > label"), !0);
                        let i = t("#zoom-setting #setting_option_authentication");
                        if (e > -1) {
                          let n = t("#zoom-setting #sel_for_authentication");
                          n.val(e), n.trigger("change");
                        } else p.$authentication.find(".domain-info-field").length && Fe(0, !0);
                        if ((i.prop("checked", o), i.trigger("change"), !p.renderData.length)) {
                          i.prop("checked", !1), i.prop("disabled", !0), i.parent().addClass("nooption");
                          let e = new Date().getTime();
                          t("#zoom-setting .modal-body").on("scroll", function (t) {
                            let n = new Date().getTime();
                            n - e > 1e3 && (Pe(), (e = n));
                          });
                        }
                      })(a, n, o);
                  } else
                    p.$authentication.html("").hide(),
                      t("#zoom-setting .control-row.watermark").html("").hide(),
                      t("#zoom-setting .control-row.audiomark").html("").hide();
                })(o));
          }
          function ge(e, n) {
            let o = r.showSecurityTip;
            if (o["type" + e]) {
              let i = e + 29;
              n.append(`<div class="security-tip"><close></close>${Vt.tips[i]}<div class="pop-arrow"></div></div>`), (o["type" + e] = !1);
              let a = t("#zoom-setting .security-tip");
              a.on("click", "close", function (t) {
                t.stopPropagation(), a.remove();
              }),
                setTimeout(function () {
                  t("#zoom-setting [name=meeting_type]").one("change", function (t) {
                    a.remove();
                  });
                }, 0),
                1 === e &&
                  t("#setting_option_waitingroom").one("change", function (t) {
                    a.remove();
                  });
            }
          }
          function he(e, n, o, i, a, s) {
            let l = !1,
              d = !1,
              c = !1,
              u = r.authentication;
            if (i) {
              let i = o.pmi.passcode;
              i.default_jbh
                ? (e ? (a ? (l = !0) : n || (l = !!t("#setting_option_needpassword").prop("checked"))) : a && (l = !0), a && (d = i.locked))
                : i.default_all
                ? ((l = !0), (d = i.locked))
                : ((l = !1), (d = i.locked)),
                (c = u.pmi.defaultVal);
            } else (l = o.normal.passcode.defaultVal), (d = o.normal.passcode.locked), (c = u.normal.defaultVal);
            t("#setting_option_needpassword").prop("checked", l),
              Te(t(".requirepwd > label"), !!d),
              fe(o, i, n),
              s || ve(o, i, l, c),
              De(i);
          }
          function fe(e, n, o) {
            let i = t("#zoom-setting #meeting_pwd"),
              a = e.pmi.passcode.value;
            if (n) i.val(a);
            else {
              let t = r.iSFreeAccount ? 2 : 1,
                e = x.Z.generateMeetingPassword(f.meetingPwdSettingsMap, t);
              i.val(e);
            }
            o && (G(), Z(1));
          }
          function ve(e, n, o, i) {
            if ((Ce(t("#zoom-setting .security-box")), v)) {
              let a = ye(n),
                s = a.value,
                l = a.disabled,
                r = "manu" === a.childParams.options.value,
                d = a.childParams.options.disabled;
              !e.security3c1 ||
                o ||
                i ||
                (s && r) ||
                (l || (d && !r)
                  ? xe(Vt.tips[39], t("#zoom-setting .security-box"), !0)
                  : (l || t("#setting_option_waitingroom2").prop("checked", !0).trigger("change"),
                    d || t("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                    ge(1, t("#zoom-setting .waitingroom2"))));
            } else {
              let { wrEnable: a, wrLocked: s } = ze(e, n);
              !e.security3c1 ||
                o ||
                i ||
                a ||
                (s
                  ? xe(Vt.errors[20], t("#zoom-setting .security-box"), !0)
                  : (t("#setting_option_waitingroom").prop("checked", !0), ge(1, t("#zoom-setting .waitingroom"))));
            }
          }
          function be(e, n) {
            let o = ye(e);
            if (o && o.show) {
              if (o.disabled && !o.value) return void t("#zoom-setting .security-box .waitingroom2").hide();
              t("#zoom-setting .security-box .waitingroom2").show(),
                n ||
                  t("#zoom-setting .wr2Tip").attr(
                    "info",
                    `<div>The options available here depend on your waiting room web settings for how participants are admitted.</div><div style="margin-top: 8px;">You can find enhanced settings for waiting room and join before host in the web settings portal. <a href="${r.mySettingUrl}" target="_blank">Go to Setting</a></div>`
                  );
              let e = o.childParams.auto,
                i = o.childParams.manu,
                a = o.childParams.options;
              t("#auto_prior_start").html(_e(e.dataOptions)),
                t("#manu_prior_start").html(_e(i.dataOptions)),
                n ||
                  (function () {
                    let e = t("#zoom-setting .jbh-moved-alert");
                    e.on("click", "close", function (t) {
                      t.stopPropagation(), e.remove();
                    }),
                      e.on("click", ".description a", function (e) {
                        e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                      }),
                      t(".waitingroom2 .wr2Tip").on("click", "a", function (e) {
                        e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                      });
                    let n = t("#zoom-setting .waitingroom2");
                    t("#setting_option_waitingroom2").on("change", function () {
                      t(this).prop("checked") || !1 ? n.addClass("beencheck") : n.removeClass("beencheck"), l && Lt() && me(), we();
                    });
                    let o = t("#manu_prior_start"),
                      i = t("#auto_prior_start");
                    t("#zoom-setting [name=option_waitingroom2]").on("change", function () {
                      let e = t("[name=option_waitingroom2]:checked").val();
                      "manu" === e
                        ? (n.hasClass("on-e2e-state") || o.hasClass("locked") || o.prop("disabled", !1).css("opacity", 1),
                          i.prop("disabled", !0).css("opacity", 0.5))
                        : "auto" === e &&
                          (n.hasClass("on-e2e-state") || i.hasClass("locked") || i.prop("disabled", !1).css("opacity", 1),
                          o.prop("disabled", !0).css("opacity", 0.5)),
                        l && Lt() && me(),
                        we();
                    }),
                      t("#manu_prior_start").on("change", function () {
                        l && Lt() && (me(), we());
                      }),
                      t("#auto_prior_start").on("change", function () {
                        l && Lt() && (me(), we());
                      });
                  })(),
                o.disabled
                  ? Te(t("#zoom-setting .waitingroom2 > .checkbox-inline"), !0)
                  : Te(t("#zoom-setting .waitingroom2 > .checkbox-inline"), !1);
              let s = t("#zoom-setting .waitingroom2 .radio-inline");
              a.disabled ? s.find("input").prop("disabled", !0) : s.find("input").prop("disabled", !1),
                i.disabled
                  ? t("#manu_prior_start").prop("disabled", !0).addClass("locked")
                  : t("#manu_prior_start").prop("disabled", !1).removeClass("locked"),
                e.disabled
                  ? t("#auto_prior_start").prop("disabled", !0).addClass("locked")
                  : t("#auto_prior_start").prop("disabled", !1).removeClass("locked"),
                t("#setting_option_waitingroom2").prop({ checked: o.value }),
                "auto" === a.value
                  ? t("#setting_option_auto").prop({ checked: !0 }).trigger("change")
                  : "manu" === a.value && t("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                t("#auto_prior_start").val(e.value),
                null === i.value || -100 === i.value ? t("#manu_prior_start").remove() : t("#manu_prior_start").val(i.value),
                t("#setting_option_waitingroom2").trigger("change");
              let d = a.dataOptions || [],
                c = "Everyone is manually admitted",
                u = "Everyone is automatically admitted";
              for (let t = 0; t < d.length; t++)
                "auto" === d[t].id && d[t].label && (u = d[t].label), "manu" === d[t].id && d[t].label && (c = d[t].label);
              t("#setting_option_auto").next().text(u), t("#setting_option_manu").next().text(c);
            } else t("#zoom-setting .security-box .waitingroom2").hide();
          }
          function _e(t) {
            if (Array.isArray(t) && t.length) {
              let e = "";
              for (let n = 0; n < t.length; n++) e += `\n\t\t\t\t\t<option value="${P(t[n].id)}">${P(t[n].label)}</option>\n\t\t\t\t`;
              return e;
            }
            return "";
          }
          function ye(t) {
            return t ? r.pmiFeatures.waitingRoom2 : r.meetingFeatures.waitingRoom2;
          }
          function ze(t, e) {
            let n = !1,
              o = !1;
            return (
              e
                ? ((n = t.pmi.waitingroom.defaultVal), (o = t.pmi.waitingroom.locked))
                : ((n = t.normal.waitingroom.defaultVal), (o = t.normal.waitingroom.locked)),
              { wrEnable: n, wrLocked: o }
            );
          }
          function we(e) {
            let n = r.security;
            if (("boolean" !== Ht.type(e) && (e = Lt()), n.security3c1)) {
              let e = t("#zoom-setting .security-box"),
                n = t("#zoom-setting #setting_option_needpassword").prop("checked") || !1,
                o = t("#zoom-setting #setting_option_authentication").prop("checked") || !1;
              if (v) {
                let i = t("#zoom-setting #setting_option_waitingroom2").prop("checked") || !1,
                  a = t("#zoom-setting #setting_option_manu").prop("checked") || !1;
                (i && a) || n || o ? Ce(e) : xe(Vt.tips[39], e, !0);
              } else {
                t("#zoom-setting #setting_option_waitingroom").prop("checked") || !1 || n || o ? Ce(e) : xe(Vt.errors[20], e, !0);
              }
            }
          }
          function ke() {
            if (!t("#zoom-setting .waitingroom2").is(":visible")) return !0;
            if (!t("#setting_option_waitingroom2").prop("checked")) return !0;
            let e = t("[name=option_waitingroom2]:checked").val();
            if ("auto" === e) {
              if ("-1" !== t("#auto_prior_start").val()) return !0;
            } else if ("manu" === e && t("#manu_prior_start").is(":visible")) {
              if ("-1" !== t("#manu_prior_start").val()) return !0;
            }
            return !1;
          }
          function xe(t, e, n) {
            if (t && e) {
              let o = e.find(".error-msg");
              o.html(t).addClass("showme"), n ? o.attr("role", "alert") : o.attr("role", null);
            }
          }
          function Ce(t) {
            if (t) {
              let e = t.find(".error-msg");
              e.hasClass("showme") && e.html("").removeClass("showme").attr("role", null);
            }
          }
          function De(e) {
            let n = t("#zoom-setting #setting_option_needpassword").prop("checked") || !1,
              o = t("#zoom-setting .requirepwd");
            n ? o.addClass("sel") : o.removeClass("sel"),
              o.addClass("manual"),
              e ? t("#zoom-setting #setting_form").addClass("pmi") : t("#zoom-setting #setting_form").removeClass("pmi");
          }
          function Te(t, n) {
            n
              ? t.closest(".control-row").hasClass("haslock") ||
                (t.append(e).closest(".control-row").addClass("haslock"), t.find("input").prop("disabled", !0))
              : (t.find(".locked_by_admin").remove(),
                t.closest(".control-row").removeClass("haslock"),
                t.find("input").prop("disabled", !1));
          }
          function je() {
            let e;
            (e = c
              ? `Zoom meeting has been deleted. You can recover this meeting within 7 days from the <a href="${c}" class="zoom-trash" target="_blank"> Recently Deleted </a> page on the Zoom web portal. `
              : "Zoom meeting has been deleted. You can recover this meeting within 7 days from the Recently Deleted page on the Zoom web portal. "),
              (function (e) {
                (Jt && Jt.length) ||
                  ((n =
                    '\n\t\t<div id="zoom-del-toast" role="alert"><div class="del-msg"></div><button class="close" aria-label="close"></button></div>\n\t\t'),
                  t("body").append(n),
                  (Jt = t("#zoom-del-toast")),
                  Jt.on("click", ".close", function (t) {
                    t.stopPropagation(), Jt.hasClass("show") && (St(Jt), Kt && (clearTimeout(Kt), (Kt = null)));
                  }));
                var n;
                Jt.hasClass("show")
                  ? (St(Jt),
                    Xt && clearTimeout(Xt),
                    (Xt = setTimeout(function () {
                      Jt.find(".del-msg").html(e), Et(Jt), (Xt = null);
                    }, 200)))
                  : (Jt.find(".del-msg").html(e), Et(Jt));
                Kt && clearTimeout(Kt);
                Kt = setTimeout(function () {
                  St(Jt), (Kt = null);
                }, 1e4);
              })(e);
          }
          function Ee() {
            t("#zoom-setting").hasClass("edit-domain-state") && Ne();
          }
          function Se(e) {
            e
              ? (t("#zoom-setting .control-row.watermark").show(), t("#zoom-setting .control-row.audiomark").show())
              : (t("#zoom-setting .control-row.watermark").hide(), t("#zoom-setting .control-row.audiomark").hide());
          }
          function Pe() {
            p.authExceptionTimeout &&
              (clearTimeout(p.authExceptionTimeout),
              (p.authExceptionTimeout = null),
              St(t("#zoom-setting .authentication .exception-message")));
          }
          function Fe(t, e) {
            let n = p.renderData[t];
            if ((p.$authentication.find(".name").text(": " + n.name), "1" == n.type)) {
              let t,
                e,
                o = n.domain || "",
                i = 0;
              (i = o.split(/,|;/).length),
                o.length > 57 ? ((t = o.slice(0, 56) + "..."), (e = `View/edit all ${i} domains`)) : ((t = o), (e = "edit domain")),
                p.$authentication.hasClass("haslock") && (e = "view domain");
              let a = `\n\t\t\t\t<span class="domain-info-text">${P(t)}</span><a href="" class="edit-button">${e}</a>\n\t\t\t`;
              p.$authentication.find(".domain-info-field").html(a).addClass("eyeable");
            } else p.$authentication.find(".domain-info-field").html("").removeClass("eyeable");
            if (e) {
              let e = p.renderData[p.selAuthLastVal];
              e && e.del ? p.$authentication.find(".del-opt-prompt").show() : p.$authentication.find(".del-opt-prompt").hide(),
                (p.selAuthLastVal = t);
            }
          }
          function Me() {
            Wt("#zoom-setting .edit-domain-cont .block-domains-error").hide().attr("role", "");
          }
          function Ne() {
            t("#zoom-setting").removeClass("edit-domain-state"),
              p.$zmEditDomainModule.find("input").val("").trigger("keyup"),
              m.hideHasErrorMsg(t("#zoom-setting #auth_domain_info")),
              Me(),
              St(t("#zoom-setting .edit-domain-cont")),
              t("#zoom-setting .domain-info-field .edit-button").trigger("focus");
          }
          function Ie(t) {
            if (t) {
              dt().attr("href", encodeURI(t)).html("Join Zoom Meeting"), k.getEditDetailDOM().addClass("zoom-meeting-state");
            }
          }
          function qe() {
            m.check40MinDuration() ? t(".zoom-free-tooltip").addClass("over-limit") : t(".zoom-free-tooltip").removeClass("over-limit");
          }
          function Re() {
            if (z?.isVisible) {
              let { id: t, extData: e } = z.getSelectedResult(),
                n = e?.pmi;
              "0" !== n ? Le() : Ae(t);
            } else {
              "0" !== (r.zoom_config_pmiNum || "0") ? Le() : Ae("me");
            }
          }
          function Le() {
            let e = t("#zoom-setting .meetingtype");
            e.is(":visible") || (e.removeClass("hideme"), t("#zoom-setting .disable-pmi-msg").removeClass("showme"));
          }
          function Ae(e) {
            let n = t("#zoom-setting .meetingtype");
            n.is(":visible") &&
              (t("#zoom-setting #meeting_type_normal").prop("checked", !0),
              t("#zoom-setting #meeting_type_normal").trigger("change"),
              n.addClass("hideme")),
              (function (e) {
                r.showDisablePmiMsg[e]
                  ? (function () {
                      if (!t("#zoom-setting .disable-pmi-msg").length) {
                        t("#zoom-setting #setting_form>.form-body").prepend(
                          '<div class="disable-pmi-msg"><div>Your Personal Meeting ID is disabled<close></close></div></div>'
                        );
                        let e = t("#zoom-setting .disable-pmi-msg");
                        e.find("close").on("click", function (t) {
                          t.stopPropagation(),
                            e.removeClass("showme"),
                            (r.showDisablePmiMsg[
                              (function () {
                                if (z?.isVisible) {
                                  let { id: t, extData: e } = z.getSelectedResult();
                                  return t;
                                }
                                return "me";
                              })()
                            ] = !1);
                        });
                      }
                      t("#zoom-setting .disable-pmi-msg").addClass("showme");
                    })()
                  : t("#zoom-setting .disable-pmi-msg").removeClass("showme");
              })(e);
          }
          function $e(e, n, o) {
            var i;
            (te && te.length) ||
              ((i = '\n\t\t\t<div id="zoom-sync-toast"></div>\n\t\t'), t("body").append(i), (te = t("#zoom-sync-toast"))),
              te.text(e),
              o && (te[0].className = o),
              Et(te),
              n &&
                (ee && (clearTimeout(ee), (ee = null)),
                (ee = setTimeout(function () {
                  St(te);
                }, 3e3)));
          }
          function Oe(t) {
            return "string" === Ht.type(t) && t.indexOf("_") > -1 ? t.replace(/_[A-Za-z]?\d{8}[A-Za-z]\d{6}[A-Za-z]?/g, "") : t;
          }
        })(Wt);
      },
      469: (t, e, n) => {
        var o, i, a;
        (i = [n(755)]),
          void 0 ===
            (a =
              "function" ==
              typeof (o = function (t) {
                var e,
                  n,
                  o = [],
                  i = t(document),
                  a = navigator.userAgent.toLowerCase(),
                  s = t(window),
                  l = [],
                  r = null,
                  d = /msie/.test(a) && !/opera/.test(a),
                  c = /opera/.test(a);
                (e = d && /msie 6./.test(a) && "object" != typeof window.XMLHttpRequest),
                  (n = d && /msie 7.0/.test(a)),
                  (t.modal = function (e, n) {
                    return t.modal.impl.init(e, n);
                  }),
                  (t.modal.close = function () {
                    t.modal.impl.close();
                  }),
                  (t.modal.focus = function (e) {
                    t.modal.impl.focus(e);
                  }),
                  (t.modal.setContainerDimensions = function () {
                    t.modal.impl.setContainerDimensions();
                  }),
                  (t.modal.setPosition = function () {
                    t.modal.impl.setPosition();
                  }),
                  (t.modal.update = function (e, n) {
                    t.modal.impl.update(e, n);
                  }),
                  (t.fn.modal = function (e) {
                    return t.modal.impl.init(this, e);
                  }),
                  (t.modal.defaults = {
                    appendTo: "body",
                    focus: !0,
                    opacity: 50,
                    overlayId: "simplemodal-overlay",
                    overlayCss: {},
                    containerId: "simplemodal-container",
                    containerCss: {},
                    dataId: "simplemodal-data",
                    dataCss: {},
                    minHeight: null,
                    minWidth: null,
                    maxHeight: null,
                    maxWidth: null,
                    autoResize: !1,
                    autoPosition: !0,
                    zIndex: 1e3,
                    close: !0,
                    closeHTML: '<a class="modalCloseImg" title="Close"></a>',
                    closeClass: "simplemodal-close",
                    escClose: !0,
                    overlayClose: !1,
                    fixed: !0,
                    position: null,
                    persist: !1,
                    modal: !0,
                    onOpen: null,
                    onShow: null,
                    onClose: null
                  }),
                  (t.modal.impl = {
                    d: {},
                    init: function (e, n) {
                      if (this.d.data) return !1;
                      if (
                        ((r = d && !1),
                        (this.o = t.extend({}, t.modal.defaults, n)),
                        (this.zIndex = this.o.zIndex),
                        (this.occb = !1),
                        "object" == typeof e)
                      )
                        (e = e instanceof t ? e : t(e)),
                          (this.d.placeholder = !1),
                          0 < e.parent().parent().length &&
                            (e.before(t("<span></span>").attr("id", "simplemodal-placeholder").css({ display: "none" })),
                            (this.d.placeholder = !0),
                            (this.display = e.css("display")),
                            !this.o.persist) &&
                            (this.d.orig = e.clone(!0));
                      else {
                        if ("string" != typeof e && "number" != typeof e)
                          return alert("SimpleModal Error: Unsupported data type: " + typeof e), this;
                        e = t("<div></div>").html(e);
                      }
                      return this.create(e), this.open(), t.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]), this;
                    },
                    create: function (n) {
                      this.getDimensions(),
                        this.o.modal &&
                          e &&
                          (this.d.iframe = t('<iframe src="about:blank"></iframe>')
                            .css(
                              t.extend(this.o.iframeCss, {
                                display: "none",
                                opacity: 0,
                                position: "fixed",
                                height: l[0],
                                width: l[1],
                                zIndex: this.o.zIndex,
                                top: 0,
                                left: 0
                              })
                            )
                            .appendTo(this.o.appendTo)),
                        (this.d.overlay = t("<div></div>")
                          .attr("id", this.o.overlayId)
                          .addClass("simplemodal-overlay")
                          .css(
                            t.extend(this.o.overlayCss, {
                              display: "none",
                              opacity: this.o.opacity / 100,
                              height: this.o.modal ? o[0] : 0,
                              width: this.o.modal ? o[1] : 0,
                              position: "fixed",
                              left: 0,
                              top: 0,
                              zIndex: this.o.zIndex + 1
                            })
                          )
                          .appendTo(this.o.appendTo)),
                        (this.d.container = t("<div></div>")
                          .attr("id", this.o.containerId)
                          .addClass("simplemodal-container")
                          .css(
                            t.extend({ position: this.o.fixed ? "fixed" : "absolute" }, this.o.containerCss, {
                              display: "none",
                              zIndex: this.o.zIndex + 2
                            })
                          )
                          .append(this.o.close && this.o.closeHTML ? t(this.o.closeHTML).addClass(this.o.closeClass) : "")
                          .appendTo(this.o.appendTo)),
                        (this.d.wrap = t("<div></div>")
                          .attr("tabIndex", -1)
                          .addClass("simplemodal-wrap")
                          .css({ height: "100%", outline: 0, width: "100%" })
                          .appendTo(this.d.container)),
                        (this.d.data = n
                          .attr("id", n.attr("id") || this.o.dataId)
                          .addClass("simplemodal-data")
                          .css(t.extend(this.o.dataCss, { display: "none" }))
                          .appendTo("body")),
                        this.setContainerDimensions(),
                        this.d.data.appendTo(this.d.wrap),
                        (e || r) && this.fixIE();
                    },
                    bindEvents: function () {
                      var n = this;
                      t("." + n.o.closeClass).bind("click.simplemodal", function (t) {
                        t.preventDefault(), n.close();
                      }),
                        n.o.modal &&
                          n.o.close &&
                          n.o.overlayClose &&
                          n.d.overlay.bind("click.simplemodal", function (t) {
                            t.preventDefault(), n.close();
                          }),
                        i.bind("keydown.simplemodal", function (t) {
                          n.o.modal && 9 === t.keyCode
                            ? n.watchTab(t)
                            : n.o.close && n.o.escClose && 27 === t.keyCode && (t.preventDefault(), n.close());
                        }),
                        s.bind("resize.simplemodal orientationchange.simplemodal", function () {
                          n.getDimensions(),
                            n.o.autoResize ? n.setContainerDimensions() : n.o.autoPosition && n.setPosition(),
                            e || r
                              ? n.fixIE()
                              : n.o.modal &&
                                (n.d.iframe && n.d.iframe.css({ height: l[0], width: l[1] }),
                                n.d.overlay.css({ height: o[0], width: o[1] }));
                        });
                    },
                    unbindEvents: function () {
                      t("." + this.o.closeClass).unbind("click.simplemodal"),
                        i.unbind("keydown.simplemodal"),
                        s.unbind(".simplemodal"),
                        this.d.overlay.unbind("click.simplemodal");
                    },
                    fixIE: function () {
                      var e = this.o.position;
                      t.each(
                        [
                          this.d.iframe || null,
                          this.o.modal ? this.d.overlay : null,
                          "fixed" === this.d.container.css("position") ? this.d.container : null
                        ],
                        function (t, n) {
                          if (n) {
                            var o,
                              i,
                              a = n[0].style;
                            (a.position = "absolute"),
                              2 > t
                                ? (a.removeExpression("height"),
                                  a.removeExpression("width"),
                                  a.setExpression(
                                    "height",
                                    'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'
                                  ),
                                  a.setExpression(
                                    "width",
                                    'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"'
                                  ))
                                : (e && e.constructor === Array
                                    ? ((o =
                                        -1 ===
                                        (o = e[0]
                                          ? "number" == typeof e[0]
                                            ? e[0].toString()
                                            : e[0].replace(/px/, "")
                                          : n.css("top").replace(/px/, "")).indexOf("%")
                                          ? o +
                                            ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                                          : parseInt(o.replace(/%/, "")) +
                                            ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                                      e[1] &&
                                        (i =
                                          -1 === (i = "number" == typeof e[1] ? e[1].toString() : e[1].replace(/px/, "")).indexOf("%")
                                            ? i +
                                              ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'
                                            : parseInt(i.replace(/%/, "")) +
                                              ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'))
                                    : ((o =
                                        '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                                      (i =
                                        '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')),
                                  a.removeExpression("top"),
                                  a.removeExpression("left"),
                                  a.setExpression("top", o),
                                  a.setExpression("left", i));
                          }
                        }
                      );
                    },
                    focus: function (e) {
                      var n = this,
                        o = ((e = e && -1 !== t.inArray(e, ["first", "last"]) ? e : "first"), t(":input:enabled:visible:" + e, n.d.wrap));
                      setTimeout(function () {
                        0 < o.length ? o.focus() : n.d.wrap.focus();
                      }, 10);
                    },
                    getDimensions: function () {
                      var t = void 0 === window.innerHeight ? s.height() : window.innerHeight;
                      (o = [i.height(), i.width()]), (l = [t, s.width()]);
                    },
                    getVal: function (t, e) {
                      return t
                        ? "number" == typeof t
                          ? t
                          : "auto" === t
                          ? 0
                          : 0 < t.indexOf("%")
                          ? (parseInt(t.replace(/%/, "")) / 100) * ("h" === e ? l[0] : l[1])
                          : parseInt(t.replace(/px/, ""))
                        : null;
                    },
                    update: function (t, e) {
                      if (!this.d.data) return !1;
                      (this.d.origHeight = this.getVal(t, "h")),
                        (this.d.origWidth = this.getVal(e, "w")),
                        this.d.data.hide(),
                        t && this.d.container.css("height", t),
                        e && this.d.container.css("width", e),
                        this.setContainerDimensions(),
                        this.d.data.show(),
                        this.o.focus && this.focus(),
                        this.unbindEvents(),
                        this.bindEvents();
                    },
                    setContainerDimensions: function () {
                      var t = e || n,
                        o = this.d.origHeight
                          ? this.d.origHeight
                          : c
                          ? this.d.container.height()
                          : this.getVal(t ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"),
                        i =
                          ((t = this.d.origWidth
                            ? this.d.origWidth
                            : c
                            ? this.d.container.width()
                            : this.getVal(t ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w")),
                          this.d.data.outerHeight(!0)),
                        a = this.d.data.outerWidth(!0);
                      (this.d.origHeight = this.d.origHeight || o), (this.d.origWidth = this.d.origWidth || t);
                      var s = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
                        r = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
                        d =
                          ((s = s && s < l[0] ? s : l[0]),
                          (r = r && r < l[1] ? r : l[1]),
                          this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto");
                      (o = o
                        ? this.o.autoResize && o > s
                          ? s
                          : o < d
                          ? d
                          : o
                        : i
                        ? i > s
                          ? s
                          : this.o.minHeight && "auto" !== d && i < d
                          ? d
                          : i
                        : d),
                        (s = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto"),
                        (t = t
                          ? this.o.autoResize && t > r
                            ? r
                            : t < s
                            ? s
                            : t
                          : a
                          ? a > r
                            ? r
                            : this.o.minWidth && "auto" !== s && a < s
                            ? s
                            : a
                          : s),
                        this.d.container.css({ height: o, width: t }),
                        this.d.wrap.css({ overflow: i > o || a > t ? "auto" : "visible" }),
                        this.o.autoPosition && this.setPosition();
                    },
                    setPosition: function () {
                      var t, e;
                      (t = l[0] / 2 - this.d.container.outerHeight(!0) / 2), (e = l[1] / 2 - this.d.container.outerWidth(!0) / 2);
                      var n = "fixed" !== this.d.container.css("position") ? s.scrollTop() : 0;
                      this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position)
                        ? ((t = n + (this.o.position[0] || t)), (e = this.o.position[1] || e))
                        : (t = n + t),
                        this.d.container.css({ left: e, top: t });
                    },
                    watchTab: function (e) {
                      0 < t(e.target).parents(".simplemodal-container").length
                        ? ((this.inputs = t(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0])),
                          ((!e.shiftKey && e.target === this.inputs[this.inputs.length - 1]) ||
                            (e.shiftKey && e.target === this.inputs[0]) ||
                            0 === this.inputs.length) &&
                            (e.preventDefault(), this.focus(e.shiftKey ? "last" : "first")))
                        : (e.preventDefault(), this.focus());
                    },
                    open: function () {
                      this.d.iframe && this.d.iframe.show(),
                        t.isFunction(this.o.onOpen)
                          ? this.o.onOpen.apply(this, [this.d])
                          : (this.d.overlay.show(), this.d.container.show(), this.d.data.show()),
                        this.o.focus && this.focus(),
                        this.bindEvents();
                    },
                    close: function () {
                      if (!this.d.data) return !1;
                      if ((this.unbindEvents(), t.isFunction(this.o.onClose) && !this.occb))
                        (this.occb = !0), this.o.onClose.apply(this, [this.d]);
                      else {
                        if (this.d.placeholder) {
                          var e = t("#simplemodal-placeholder");
                          this.o.persist
                            ? e.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display))
                            : (this.d.data.hide().remove(), e.replaceWith(this.d.orig));
                        } else this.d.data.hide().remove();
                        this.d.container.hide().remove(),
                          this.d.overlay.hide(),
                          this.d.iframe && this.d.iframe.hide().remove(),
                          this.d.overlay.remove(),
                          (this.d = {});
                      }
                    }
                  });
              })
                ? o.apply(e, i)
                : o) || (t.exports = a);
      }
    },
    n = {};
  function o(t) {
    var i = n[t];
    if (void 0 !== i) return i.exports;
    var a = (n[t] = { exports: {} });
    return e[t].call(a.exports, a, a.exports, o), a.exports;
  }
  (o.m = e),
    (t = []),
    (o.O = (e, n, i, a) => {
      if (!n) {
        var s = 1 / 0;
        for (c = 0; c < t.length; c++) {
          for (var [n, i, a] = t[c], l = !0, r = 0; r < n.length; r++)
            (!1 & a || s >= a) && Object.keys(o.O).every((t) => o.O[t](n[r])) ? n.splice(r--, 1) : ((l = !1), a < s && (s = a));
          if (l) {
            t.splice(c--, 1);
            var d = i();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      a = a || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > a; c--) t[c] = t[c - 1];
      t[c] = [n, i, a];
    }),
    (o.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return o.d(e, { a: e }), e;
    }),
    (o.d = (t, e) => {
      for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (o.j = 998),
    (() => {
      var t = { 998: 0, 374: 0 };
      o.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var i,
            a,
            [s, l, r] = n,
            d = 0;
          if (s.some((e) => 0 !== t[e])) {
            for (i in l) o.o(l, i) && (o.m[i] = l[i]);
            if (r) var c = r(o);
          }
          for (e && e(n); d < s.length; d++) (a = s[d]), o.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return o.O(c);
        },
        n = (self.webpackChunkextension = self.webpackChunkextension || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var i = o.O(void 0, [374, 647, 493], () => o(319));
  i = o.O(i);
})();
