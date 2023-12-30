(() => {
  var t,
    e = {
      133: () => {},
      982: () => {},
      762: (t, e, n) => {
        "use strict";
        n(469);
        var i = n(856),
          o = n.n(i),
          a = n(755);
        let s = null;
        if (/calendar.google.com/g.test(window.location.host)) {
          const t = a.noConflict();
          s = new (function () {
            var e = document.createElement("script");
            (e.src = chrome.runtime.getURL("js/injectobserver.bundle.js")),
              (e.onload = function () {
                this.remove();
              }),
              (document.head || document.documentElement).appendChild(e);
            var n = this;
            window.addEventListener(
              "message",
              function (e) {
                (void 0 === e.data.calendarId && void 0 === e.data.event_baseid) ||
                  ("event" === e.data.action
                    ? t(n).trigger({
                        type: "calendarIdObtained",
                        calendarId: e.data.calendarId,
                        number: e.data.number,
                        event_baseid: e.data.event_baseid
                      })
                    : "deleteevent" === e.data.action
                    ? t(n).trigger({ type: "calendarIdRemoved", calendarId: e.data.calendarId, event_baseid: e.data.event_baseid })
                    : "updatetimeandtimezone" === e.data.action
                    ? t(n).trigger({
                        type: "updateTimeAndTimezone",
                        calendarId: e.data.calendarId,
                        event_baseid: e.data.event_baseid,
                        dates: e.data.dates,
                        timezone: e.data.timezone,
                        topic: e.data.topic,
                        number: e.data.number,
                        zoomrooms: e.data.zoomrooms
                      })
                    : "recordZmlog" === e.data.action
                    ? t(n).trigger({ type: "recordZmlog", msgType: e.data.msgType, msg: e.data.msg, operaType: e.data.operaType })
                    : "saveInvitee" === e.data.action &&
                      t(n).trigger({
                        type: "saveInvitee",
                        meetingNumber: e.data.meetingNumber,
                        event_baseid: e.data.event_baseid,
                        invitee: e.data.invitee,
                        reFilter: e.data.reFilter,
                        joinUrl: e.data.joinUrl,
                        descText: e.data.descText
                      }));
              },
              !1
            );
          })();
        }
        const l = s;
        var r = n(755),
          d = n(915);
        const c = r.noConflict();
        function u(t, e, n) {
          var i = !1;
          return m(t, n) - m(e) > 40 && (i = !0), i;
        }
        function m(t, e) {
          var n = 0,
            i = /(\d{1,2}):(\d{2})(pm)?/gi.exec(t);
          return (
            i &&
              4 == i.length &&
              ((n = 60 * parseInt(i[1], 10) + parseInt(i[2], 10)), "pm" == i[3] && i[1] < 12 && (n += 720), e && (n += 1440)),
            n
          );
        }
        function p(t) {
          return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
            t
          );
        }
        const g = {
          check40MinDuration() {
            var t = !1;
            try {
              let e = document.querySelector("#xAlDaCbx input[type=checkbox]");
              if (e) {
                if (e.checked) return !0;
              } else if ("true" === document.querySelector("#xAlDaCbx[role=checkbox]")?.getAttribute("aria-checked")) return !0;
              t =
                c("#xStDaIn").attr("data-date") !== c("#xEnDaIn").attr("data-date")
                  ? u(c("input#xEnTiIn").attr("data-initial-value"), c("input#xStTiIn").attr("data-initial-value"), !0)
                  : u(c("input#xEnTiIn").attr("data-initial-value"), c("input#xStTiIn").attr("data-initial-value"));
            } catch (t) {
              sendLogToBackend({ msgType: 4, msg: { msg: d.errors[11], filename: "goog-script.js", function: "check40MinDuration" } });
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
            var e = c.trim(t).split(/[;,\n\r]+/);
            let n = !0;
            for (var i in e) (t = c.trim(e[i])), (n = n && p("a@" + t));
            return !0 === n;
          },
          validateEmail() {
            let t = !0,
              e = c("#zoom-setting #auth_domain_info");
            return (
              e.is(":visible") &&
                c("#zoom-setting #setting_option_authentication").prop("checked") &&
                (this.isMultiEmailDomains(e.val()) ? this.hideHasErrorMsg(e) : (this.showHasErrorMsg(e, d.errors[10]), (t = !1))),
              t
            );
          },
          paddingLeft(t, e) {
            let n = e - (t += "").length;
            if (n > 0) for (var i = 0; i < n; i++) t = "0" + t;
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
            if (c("#alternative_host").is(":visible") && "" != c("#alternative_host").val()) {
              let e = c("#alternative_host").parent(),
                n = e.find(".alternative_host_error");
              !(function (t) {
                var e = c.trim(t).split(/[;,\n\r]+/);
                if ("" == e) return !0;
                var n = !0;
                for (var i in e) {
                  var o = c.trim(e[i]);
                  n = n && p(o);
                }
                return !0 === n;
              })(c("#alternative_host").val())
                ? (e.addClass("has-error"), c("#alternative_host").trigger("focus"), n.text(d.tips[0]).show(), (t = !1))
                : (e.removeClass("has-error"), n.hide());
            }
            return t;
          },
          isEmail: (t) => p(t),
          ajaxValidAltHost() {
            var t = !0;
            return (
              c("#alternative_host").is(":visible") &&
                "" != c("#alternative_host").val() &&
                c("#alternative_host").parent().hasClass("has-error") &&
                (t = !1),
              t
            );
          },
          validateEnableDC() {
            if (c("#zoom-setting #setting_option_enableDC").is(":visible")) {
              if (c("#zoom-setting #setting_option_enableDC").prop("checked")) {
                let t = c("#zoom-setting .dcRegions .dc-group");
                return !!t.find("input:checked").length || (this.showHasErrorMsg(t, d.errors[18]), !1);
              }
              return !0;
            }
            return !0;
          },
          validatePwdInput() {
            var t = !0;
            return (
              c("#meeting_pwd").is(":visible") &&
                ("" == c("#meeting_pwd").val().trim()
                  ? (c("#meeting_pwd").parent().addClass("has-error"), c("#meeting_pwd").next().show(), (t = !1))
                  : (c("#meeting_pwd").parent().removeClass("has-error"), c("#meeting_pwd").next().hide())),
              t
            );
          },
          collateUserInput() {
            let t = c("#alternative_host").val();
            c("#alternative_host").is(":visible") && t && c("#alternative_host").val(this.callateInputHandler(t));
          },
          callateInputHandler(t) {
            let e = "";
            return (
              c.each(c.trim(t).split(/[;,\n\r]+/), (t, n) => {
                t > 0 && (e += ","), (e += c.trim(n));
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
        var h = n(573),
          f = n.n(h),
          v = n(755),
          b = n(755),
          _ = n(915),
          y = v.noConflict();
        function z(t, e) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(e, !0, !0), y(t).get(0).dispatchEvent(n);
        }
        function k(t) {
          return o().sanitize(t);
        }
        const w = {
          getSaveBtnNode: function () {
            let t = y("button[jsname='x8hlje']");
            return (
              t.length ? t.length > 1 && (t = y("button#xSaveBu[jsname='x8hlje']")) : (t = y("div[role='button'][jsname='x8hlje']")),
              t.length || g.logForQueryDom("getSaveBtnNode"),
              t
            );
          },
          getQuickNewEvt: function () {
            return y("#yDmH0d [jsname=bN97Pc] div[jsname=SF0uGd][data-eventid]");
          },
          getQuickTimeSection: function () {
            let t,
              e = this.getQuickNewEvt();
            return (
              e.length
                ? ((t = e.find("div[jsname=TAmOZ] button>div[jsname=WamLdf]").parent()),
                  t.length || (t = e.find("div[jsname=TAmOZ] div[role=button]>div[jsname=ksKsZd]").parent()))
                : (t = y()),
              t.length || g.logForQueryDom("getQuickTimeSection"),
              t
            );
          },
          getQuickMoreOptionNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("[jsname=rhPddf]") : y()), t.length || g.logForQueryDom("getQuickMoreOptionNode"), t;
          },
          getQuickTopicNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("div[jsname=GYcwYe] input") : y()), t.length || g.logForQueryDom("getQuickTopicNode"), t;
          },
          getQuickSaveBtnNode: function () {
            let t,
              e = this.getQuickNewEvt();
            return (t = e.length ? e.find("[jsname=x8hlje]") : y()), t.length || g.logForQueryDom("getQuickSaveBtnNode"), t;
          },
          getQuickWhereNode: function () {
            let t = y("div[jsname=vHVaxd] input[role=combobox][jsname=YPqjbf]");
            return t.length || g.logForQueryDom("getQuickWhereNode"), t;
          },
          getEventPopup: function () {
            let t = y("[jsname=bN97Pc] [jsname=sV9x3c]");
            return t.length || (t = y("[jsname=bN97Pc] #xDtlDlgCt")), t;
          },
          getZoomBtnSiblingNode: function () {
            let t,
              e = b("#YPCqFe");
            return (
              e.length
                ? ((t = e.find("[jsname=WwTOGd]")),
                  t.length || (t = e.find("[jsname=HU3Vff]").parent().children().eq(0)),
                  t.length || (t = e.find("#tabEventDetails").children().eq(0)))
                : (t = y()),
              t
            );
          },
          getAllDayNode: function () {
            let t = y("[jsname=nB7Rvb] #xAlDaCbx input[jsname=YPqjbf]");
            return (
              t.length || (t = y('[jsname=wU3vpb] [jscontroller=etBPYb] input[jsname=YPqjbf][aria-label="All day"]')),
              t.length || g.logForQueryDom("getAllDayNode"),
              t
            );
          },
          getGoogleTimezonedata: function () {
            let t;
            try {
              t = JSON.parse(b("#timezonedata").text());
            } catch (t) {}
            return Array.isArray(t) ? t : 0;
          },
          getTopicNode: function () {
            let t = y("div[jsname=GYcwYe] input");
            return t.length || g.logForQueryDom("getTopicNode"), t;
          },
          getVideoCallNode: function () {
            return null;
          },
          setTopicNodeValue: function (t) {
            var e = this.getTopicNode();
            e.val(t), z(e, "input");
          },
          getDefTimezone: function () {
            let t = y("#xTimezone");
            return t.length || g.logForQueryDom("getDefTimezone"), t.text();
          },
          getStartDateNode: function () {
            let t = y("div[jsname=iKdrbf] input[jsname=YPqjbf]:visible");
            return t.length || g.logForQueryDom("getStartDateNode"), t;
          },
          getStartTimeNode: function () {
            let t = y("div[jsname=B4GDSd] input[jsname=YPqjbf]:visible");
            return t.length || (t = y("div[jsname=B4GDSd] input[jsname=YPqjbf]")), t.length || g.logForQueryDom("getStartTimeNode"), t;
          },
          getEndDateNode: function () {
            let t = y("div[jsname=NNrqNc] input[jsname=YPqjbf]:visible");
            return t.length || g.logForQueryDom("getEndDateNode"), t;
          },
          getEndTimeNode: function () {
            let t = y("div[jsname=XCHdmd] input[jsname=YPqjbf]:visible");
            return t.length || (t = y("div[jsname=XCHdmd] input[jsname=YPqjbf]")), t.length || g.logForQueryDom("getEndTimeNode"), t;
          },
          getStartTimezoneId: function () {
            let t = y("div[jsname=L2QMlb] div[jsname=PH80Af]");
            return t.length || g.logForQueryDom("getStartTimezoneId"), t;
          },
          getEndTimezoneId: function () {
            let t = y("div[jsname=L2QMlb] div[jsname=yxQRke]");
            return t.length || g.logForQueryDom("getEndTimezoneId"), t;
          },
          getRepeatNode: function () {
            let t = y("div[jsname=PAiuue]:visible div[jsname=T7keRc]");
            if (((t.length && t.find("[data-value][aria-selected=true]").length) || (t = y("div[jsname=T7keRc]")), t.length)) {
              let e = t.find("div[jsname=xl07Ob] li[data-value][aria-selected=true]");
              if (
                (e.length || (e = t.find("div[jsname=d9BH4c] div[data-value][aria-selected=true]")),
                e.length || (e = t.find("[data-value][aria-selected=true]")),
                e.length)
              )
                return e;
            }
            return g.logForQueryDom("isRepeat"), y();
          },
          getPopupLocationNode: function () {
            let t,
              e = this.getEventPopup();
            return e.length ? ((t = e.find("#xDetDlgLoc div>a")), t.length || (t = e.find("#xDetDlgLoc div>div").eq(0))) : (t = y()), t;
          },
          getPopupDeleteBtn: function () {
            let t = y("#xDetDlg button[jsname=VkLyEc]");
            return t.length || (t = y("#xDetDlg div[role=button][jsname=VkLyEc]")), t.length || g.logForQueryDom("getPopupDeleteBtn"), t;
          },
          isRepeat: function () {
            let t = this.getRepeatNode().data("value");
            return !!Array.isArray(t) && !!t[1];
          },
          getGoogleVideoCallButtons: function () {
            return this.getButtonsContainer().find("[jsname=mWZCyf]");
          },
          getQuicLocationButton: function () {
            let t = y("div[jsname=YEMhHd] [jsname=TmcEkb] [jsname=RmhjUd] button span.ahrbyf[data-key=location]");
            if ((t.length || (t = y("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]")), t.length)) {
              if (t.length > 1) {
                let e = t.filter(":visible");
                e.length && (t = e);
              }
            } else g.logForQueryDom("getQuicLocationButton");
            return t;
          },
          getQuicTimezoneText: function () {
            let t = "",
              e = y("#yDmH0d div[jsname=xpDKHf] [jsname=hf42V] [jsname=V67aGc]");
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
            let t = y("div[jsname=YEMhHd] [jsname=hGaP9] [jsname=OXFAed] button span.ahrbyf[data-key=description]");
            return (
              t.length || (t = y("div[jsname=YEMhHd] [jsname=hGaP9] [jsname=OXFAed] div[role=button] span.ahrbyf[data-key=description]")),
              t.length || g.logForQueryDom("getQuicDescButton"),
              t
            );
          },
          getButtonsContainer: function () {
            var t = y("div.zoom-video-sec > .zoom-btn");
            if (!t.length || (!t.is(":visible") && "false" !== y("[jsname=nB7Rvb] #xEvtTab").attr("aria-selected"))) {
              var e = [];
              return (
                e.push('<div class="FrSOzf zoom-video-sec">'),
                e.push('\t<div aria-hidden="true" class="tzcF6">'),
                e.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>'),
                e.push("\t</div>"),
                e.push('\t<div class="j3nyw PxPKzc zoom-btn">'),
                e.push("\t</div>"),
                e.push("</div>"),
                y("[jsname=PAiuue][role=tabpanel] div.FrSOzf:eq(0)").after(e.join("")),
                y("div.zoom-video-sec > .zoom-btn")
              );
            }
            return t;
          },
          getEditDetailDOM: function () {
            let t = y("#YPCqFe div.p9lUpf[jsname=nB7Rvb]");
            return t.length || g.logForQueryDom("getEditDetailDOM"), t;
          },
          parseTime: function (t) {
            let e = y("div[jsname=B4GDSd]:visible");
            e.length || (e = y("div[jsname=B4GDSd]"));
            let n = e.find("div[jsname=V68bde] [jsname=rymPhb]");
            if ((n.length || (n = e.find("div[jsname=V68bde][role=listbox] > div")), t && n.length > 0)) {
              var i = n.find("> div"),
                o = i.length;
              if (o > 0 && o % 24 == 0)
                for (var a = (60 / o) * 24, s = 0; s < i.length; s++) {
                  if (y.trim(y(i[s]).text()) === t) {
                    var l = s * a;
                    return [Math.floor(l / 60), l % 60];
                  }
                  var r = t.match(/\d{2}/gi),
                    d = 0;
                  r.length >= 1 && (d = parseInt(r[r.length - 1]));
                  var c = t.replace(/:\d{2}/gi, ":00");
                  if (y.trim(y(i[s]).text()) === c) {
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
              i = y("div[jsname=iKdrbf]");
            if (i.length) {
              if (i.length > 1) {
                let t = i.filter(":visible");
                t.length && (i = t);
              }
              let o = i.find("input[jsname=YPqjbf]").attr("data-date");
              o || (o = i.attr("data-ical"));
              let a = /(\d{4})(\d{2})(\d{2})/gi.exec(o);
              a && 4 === a.length && ((t = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (e = parseInt(a[3], 10)));
            }
            return [t, n, e];
          },
          parseEndDate: function () {
            let t = -1,
              e = -1,
              n = -1,
              i = y("div[jsname=qPZlPe]");
            if (i.length) {
              if (i.length > 1) {
                let t = i.filter(":visible");
                t.length && (i = t);
              }
              let o = i.find("input[jsname=YPqjbf]").attr("data-date");
              o || (o = i.attr("data-ical"));
              let a = /(\d{4})(\d{2})(\d{2})/gi.exec(o);
              a && 4 === a.length && ((t = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (e = parseInt(a[3], 10)));
            }
            return [t, n, e];
          },
          getWhereNode: function () {
            let t = y("div[jsname=yNrILb] div[jsname=rYJt4b] input[jsname=YPqjbf][role=combobox]");
            return t.length || (t = y("div[jsname=yNrILb] div[jsname=YPqjbf] input[jsname=YPqjbf][role=combobox]")), t;
          },
          setWhereNodeValue: function (t) {
            var e = this.getWhereNode();
            if (e.length) {
              var n = k(this.getValueForWhereNode(e[0]));
              (n = n && n.length > 0 ? n + ", " + k(t) : k(t)),
                z(e, "focus"),
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
            let t = y("div[jsname=PAiuue]:visible [jsname=hGaP9] [jsname=yrriRe]");
            return t.length || (t = y("#xDescIn div[jsname=yrriRe]")), t.length || (t = y("#xDescIn div[contenteditable]")), t;
          },
          getPopupDescNode: function () {
            let t,
              e = this.getEventPopup();
            return (t = e.length ? e.find("#xDetDlgDesc") : y()), t;
          },
          getFocusTimeDescNode: function () {
            return y("[jsname=bN97Pc] [jsname=L9AdLc] [jsname=yrriRe]");
          },
          getDescText: function () {
            return this.getDescNode().html().replace(/<br>/g, " ");
          },
          setDescNodeValue: function (t) {
            var e = "<br>" + "─".repeat(10),
              n = "<br><br>" + "─".repeat(10);
            t = "<p>" + (t = e + "<br><br>" + f()(t).replace(/\r\n/g, "<br>") + n) + "</p>";
            var i = this.getDescNode();
            if (i.length) {
              var o = y.trim(i.html()),
                a = t;
              o && "" != i.text() && (a = o + t),
                z(i, "focus"),
                (i[0].innerHTML = a),
                i[0].dispatchEvent(new Event("paste")),
                i.parents("[jsname=NorrI]").addClass("CDELXb");
            } else g.logForQueryDom("setDescNodeValue");
          },
          escapeHtml: function (t) {
            return f()(t);
          },
          removeSession: function () {
            var t = this.getWhereNode();
            t.length > 0 &&
              (t[0].dispatchEvent(new Event("input", { bubbles: !0 })),
              t[0].focus(),
              t[0].select(),
              document.execCommand("inserttext", !1, this.removeZmSession()),
              t[0].dispatchEvent(new Event("input", { bubbles: !0 })));
            var e = this.getDescNode();
            e.length > 0 && ((e[0].innerHTML = this.removeZmDesc(e[0].innerHTML)), e[0].dispatchEvent(new Event("paste")));
          },
          removeZmSession: function () {
            var t = this.getWhereNode().val();
            return (t = t.replace(/[ ,;]*https:\/\/[\w\-.]*\/(pac\/join|[jswm])\/([\w\-.]{8,})(\?\w+=[^ ,;]*)?/g, ""));
          },
          removeZmDesc: function (t) {
            let e = /(?:\<br\>)?\u2500{10}[\w\W]*(?=\<br\>\u2500{10})\<br\>\u2500{10}/;
            if (!e.test(t)) {
              let t = 5 == _.envIndex ? "-x.de" : ".de";
              e = new RegExp(
                `https?:\\/\\/[\\w\\-]*\\.?(${_.multiVersion[0]}${_.runEnv[1]})(.us|.com.cn|.com|.cn|${t})\\/(pac\\/join|[jswm])\\/([\\w\\-.]{8,})((\\?|&|&amp;)\\w+=[^ ,;<&\\'\\"]*)*`,
                "ig"
              );
            }
            return t.replace(e, "");
          },
          getZoomRooms: function () {
            let t = [],
              e = y("#xRmLst div[jsname=OLRBPb] .QReV7>span");
            return (
              e.length || (e = y(".ilbnVd div[jsname=vnuzGe] .smD7sb>span:visible")),
              e.each(function (e, n) {
                t[e] = y(this).text();
              }),
              t.join(",")
            );
          },
          getPrivateEventNode: function () {
            let t = y("div[jsname=PAiuue]:visible div[jsname=y3puF] div[jsname=wSASue] div[jsname=xl07Ob] li[aria-selected=true]");
            return (
              t.length ||
                ((t = y("div[jsname=y3puF] div[jsname=wSASue] div[jsname=xl07Ob] li[aria-selected=true]")),
                t.length ||
                  (t = y("div[jsname=PAiuue]:visible div[jsname=y3puF] div[jsname=d9BH4c] div[jsname=wQNmvb][aria-selected=true]")),
                t.length || (t = y("div[jsname=y3puF] div[jsname=d9BH4c] div[jsname=wQNmvb][aria-selected=true]"))),
              t
            );
          },
          getIsPrivateEvent: function () {
            return 2 == this.getPrivateEventNode().data("value");
          },
          getZoomRoomsFromQuickSchedule: function () {
            let t = [],
              e = y("div[jsname=PAiuue]:visible div[jsname=gMNnYd] div[jsname=L9hiGd] div.gco0Sd");
            return (
              e.length || (e = y("div[jsname=wU3vpb] div[jsname=gMNnYd] div[jsname=ix0Hvc] div.gco0Sd:visible")),
              e.length || (e = y("div[jsname=SF0uGd] div[jsname=gMNnYd] div[jsname=L9hiGd] div.gco0Sd")),
              e.each(function (e, n) {
                t[e] = y(this).text();
              }),
              t.join(",")
            );
          },
          getBaseidFromDom: function () {
            let t = y("div[jsname=SF0uGd]").attr("data-loggingid"),
              e = "";
            if (t)
              try {
                e = JSON.parse(t)[0];
              } catch (t) {}
            return e;
          },
          getEidFromDom: function () {
            return y("div[jsname=SF0uGd]").attr("data-eventid") || "";
          }
        };
        var x = n(266),
          C = n(755);
        let D,
          j,
          T,
          E,
          S = null;
        function F(t) {
          (j = this),
            T.on("click", function (t) {
              t.target === this && R();
            }),
            T.on("focus", function (t) {
              R();
            }),
            D.on("click", function (t) {
              t.stopPropagation(), T.trigger("focus");
            }),
            E.on("click", "option", function (t) {
              t.stopPropagation(), P(C(this)), T.val("").trigger("input").trigger("focus");
            }),
            D.on("click", ".zm-tag .closebtn", function (t) {
              t.stopPropagation(), t.preventDefault();
              let e = C(this).parents(".zm-tag"),
                n = e.next();
              var i;
              n.hasClass("zm-tag") && (n = n.find(".closebtn")),
                (i = e.data("code")),
                E.find(`option[value=${i}]`).removeClass("selected"),
                e.remove(),
                q(),
                j.opt.tagChangeCallback(),
                n.trigger("focus");
            }),
            D.on("input", ".zm-selector-input", function (t) {
              C(this);
              !(function (t, e) {
                let n = [];
                if (Array.isArray(e) && e.length)
                  if ("" === t) n = e;
                  else if (t) {
                    let a = [],
                      s = [];
                    for (var i = 0, o = e.length; i < o; i++) {
                      let n = e[i],
                        o = n.displayName.search(new RegExp(t.trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i"));
                      0 === o ? a.push(n) : o > 0 && s.push(n);
                    }
                    n = [...a, ...s];
                  }
                let a = I(n);
                E.find(".zm-scrollbar-view").html(a),
                  D.find(".zm-tag").each(function (t, e) {
                    M(e.dataset.code);
                  });
                let s = E.find("option").not(".selected").eq(0).addClass("in-hover").get(0);
                s &&
                  setTimeout(function () {
                    s.scrollIntoView();
                  }, 10);
              })(this.value, j.opt.dataList);
            }),
            E.find(".zm-scrollbar-view").on("mouseover", function (t) {
              let e = C(t.target);
              e.hasClass("in-hover") ||
                e.hasClass("selected") ||
                (E.find("option.in-hover").removeClass("in-hover"),
                e.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
            }),
            C(window).on("resize", L);
        }
        function P(t) {
          t.hasClass("selected") || (t.addClass("selected"), N(t.html(), t.attr("value")), j.opt.tagChangeCallback());
        }
        function M(t) {
          if (t) {
            let e = E.find(`option[value=${t}]`);
            if (e.length) return e.addClass("selected"), e.html();
          }
          return "";
        }
        function N(t, e) {
          let n = `<span class="zm-tag" data-code="${A(e)}">${A(t)}<a class="closebtn" href="#" aria-label="remove ${A(
            t
          )}" role="button"></a></span>`;
          T.before(n), q();
        }
        function R() {
          D.hasClass("active-state") ||
            (D.addClass("active-state"),
            E.addClass("active-state"),
            E.width(D.width()),
            q(),
            T.trigger("focus"),
            setTimeout(function () {
              T.trigger("input");
            }, 50),
            j.opt.keyEventDom.on("keydown", function (t) {
              let e = t.keyCode;
              if (38 === e || 40 === e || 13 === e) {
                let n = E.find("option.in-hover");
                if (n.length && T.is(":focus"))
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
                  } else 13 === e && (P(n), T.val("").trigger("input").trigger("focus").get(0).scrollIntoView());
              }
            }));
        }
        function q() {
          let t = D.get(0).getBoundingClientRect();
          E.css({ left: t.left + "px", top: t.bottom + 5 + "px" });
        }
        function L() {
          S && clearTimeout(S),
            (S = setTimeout(function () {
              D && D.is(":visible") && q(), (S = null);
            }, 100));
        }
        function I(t) {
          let e = "";
          if (Array.isArray(t) && t.length)
            for (var n = 0, i = t.length; n < i; n++) {
              let i = t[n];
              e += `<option value="${A(i.code)}">${A(i.displayName)}</option>`;
            }
          return e || (e = '<div class="no-data">No data</div>'), e;
        }
        function A(t) {
          return o().sanitize(t);
        }
        const $ = class {
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
              (D = C(t).find(".zm-selector-cont")),
              (T = D.find(".zm-selector-input")),
              (E = C(".zm-selector-dropdown")),
              F.call(this, t));
          }
          createMenu(t, e, n) {
            let i = (function (t) {
              let e = `\n        <div class="zm-selector-cont">\n            <div class="zm-selector-input-cont">\n                <input type="text" autocomplete="off" aria-label="${A(
                t
              )}" role="combobox" placeholder="" class="zm-selector-input">\n            </div>\n        </div>\n    `;
              return e;
            })(n);
            C(t).html(i),
              (i = (function (t) {
                return `\n        <div class="zm-selector-dropdown">\n            <div class="zm-scrollbar">\n                <div class="zm-scrollbar-view">\n                    ${I(
                  t
                )}\n                </div>\n            </div>\n        </div>\n    `;
              })(e)),
              this.opt.dropDownCont.append(i);
          }
          getSelectedItems() {
            let t = [];
            return (
              D.find(".zm-tag").each(function (e, n) {
                t.push(n.dataset.code);
              }),
              t
            );
          }
          loseFocus() {
            D.removeClass("active-state"),
              E.removeClass("active-state"),
              j.opt.keyEventDom.off("keydown"),
              T.val() &&
                (T.val(""),
                setTimeout(function () {
                  T.trigger("input");
                }, 100));
          }
          resetTag(t) {
            if ((D.find(".zm-tag").remove(), E.find("option.selected").removeClass("selected"), Array.isArray(t) && t.length))
              for (var e = 0, n = t.length; e < n; e++) {
                let n = t[e],
                  i = M(n);
                i && N(i, n);
              }
            this.opt.tagChangeCallback(),
              setTimeout(function () {
                q();
              }, 200);
          }
          destroy() {
            C(window).off("resize", L), (D = null), (j = null), (T = null), (E = null);
          }
        };
        var O = n(893),
          V = n(755),
          H = n(915),
          B = n(812);
        const Q = V.noConflict();
        !(function (t) {
          let e,
            n,
            i,
            a = { needReconnect: !0 },
            s = !1,
            r = {},
            d = {},
            c = "",
            u = { renderData: null, selAuthLastVal: -1, $authentication: null, $zmEditDomainModule: null, authExceptionTimeout: null },
            m = !1,
            p = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            h = null,
            f = !1,
            v = { $editRegionModule: null, selRegion: [], selType: "0", editCache: { allow: [], deny: [] } },
            b = null,
            _ = null,
            y = null,
            z = null;
          function k() {
            (a = chrome.runtime.connect({ name: "Zoom" })), a.onDisconnect.addListener(C), a.onMessage.addListener(T);
          }
          function C(t) {
            "Zoom" === t.name && (a.needReconnect = !0);
          }
          function D(t) {
            if (a) {
              j();
              try {
                a.postMessage(t);
              } catch (e) {
                console.log("port.postMessage errors: ", e), k(), a.postMessage(t);
              }
            } else Et(H.errors[9], "warning");
          }
          function j() {
            a?.needReconnect && ((a = null), k());
          }
          function T(i) {
            if (i.error)
              i.syncState
                ? 1 == i.syncState
                  ? Me(i.errorMsg, !1, "progress")
                  : 2 == i.syncState
                  ? (Me(i.errorMsg, !0, "success"), K(), i.noReviveSchedule || X())
                  : (Me(i.errorMsg, !0, "fail"), K())
                : (K(), "login###again" === i.errorMsg ? Tt() : alert(i.errorMsg || H.errors[8]));
            else if ("schedule" === i.type || "pmi" === i.type) {
              var o = i.meeting,
                a = w.getWhereNode();
              a.length && o.addJoinUrl && w.setWhereNodeValue(o.joinUrl);
              var l = w.getTopicNode().val(),
                d = g.getUserLanguage();
              (l && l !== M[d]) || w.setTopicNodeValue(o.topic),
                Te(o.joinUrl),
                w.setDescNodeValue(o.email),
                wt(ct()),
                window.setTimeout(function () {
                  a[0] && a[0].focus();
                }, 100),
                t("#zoom_schedule_button_wrapper > *").hide(),
                t("#zoom_schedule_meeting_url").show(),
                w.getGoogleVideoCallButtons().hide(),
                t("#zoom-quick2adv-number").length <= 0
                  ? t("body").append('<div id="zoom-quick2adv-number" style="display:none;">' + E(o.number) + "</div>")
                  : t("#zoom-quick2adv-number").text(o.number),
                t("#YPCqFe #zm-usepmi").length <= 0
                  ? t("#YPCqFe").append('<div id="zm-usepmi" style="display:none;">' + E(o.usepmi) + "</div>")
                  : t("#YPCqFe #zm-usepmi").text(o.usepmi),
                kt();
            } else
              "updateZmOptions" === i.type
                ? "object" === B.type(i.zmOpt) &&
                  (function (n, i) {
                    (r = i),
                      (f = (function () {
                        let t = !1;
                        try {
                          let e = r.meetingFeatures.waitingRoom.childParams.op.value;
                          "boolean" === B.type(e) && (t = e);
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
                            (y = new O.Z({
                              el: t("#zoom-setting .schedule-for-cont").get(0),
                              defaultValue: r.zoom_config_schedule_for || "me",
                              dataList: n,
                              jquery: Q,
                              multiParamResults: !0,
                              ariaLabel: "select meeting host",
                              changeCallback: function () {
                                let { id: e, extData: n } = y.getSelectedResult(),
                                  i = n?.pmi;
                                "0" !== i && "000-000-000" !== i
                                  ? t(".meetingtype .pmi_number").text(i)
                                  : t(".meetingtype .pmi_number").text(""),
                                  Se();
                                let o = t("#zoom-setting .recording");
                                "me" !== e ? o.addClass("hide-change-setting") : o.removeClass("hide-change-setting"), Nt();
                              }
                            }));
                        } else
                          t("#zoom-setting .schedule").hide(),
                            "0" !== r.zoom_config_pmiNum && t("#zoom-setting .meetingtype .pmi_number").text(r.zoom_config_pmiNum);
                        Se();
                      })(),
                      (function () {
                        let e = r.adminTemplates;
                        if (Array.isArray(e) && e.length) {
                          let n = [{ id: "none", label: "None", suppleDesc: "", groupTitleIndex: -1 }];
                          for (let t = 0, i = e.length; t < i; t++) {
                            let i = e[t];
                            n.push({
                              id: i.templateId,
                              label: i.name,
                              suppleDesc: i.templateTip,
                              groupTitleIndex: i.templateType - 1,
                              extData: { templateType: i.templateType }
                            });
                          }
                          (z = new O.Z({
                            el: t("#zoom-setting .template-sel-cont").get(0),
                            defaultValue: "none",
                            dataList: n,
                            jquery: Q,
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
                              let { id: e, extData: n } = z.getSelectedResult();
                              e && "none" !== e && D({ type: "viewTemplateDetail", info: { templateId: e } });
                            });
                        } else t("#zoom-setting .template").remove();
                      })(),
                      i && i.schedulePmiLock && (t("[name=meeting_type]").prop({ disabled: !0 }), t(".pmi").append(e).addClass("haslock"));
                    var o = i.zoom_config_audio;
                    i.zoom_config_hasOther ||
                      (n.find(".audio #option_audio_3rd").parent().hide(),
                      "other" == o && (o = "both"),
                      n.find(".audio #option_audio_both").next().text("Both"));
                    i.zoom_config_noBoth && (n.find(".audio #option_audio_both").parent().hide(), "both" == o && (o = "telephony"));
                    var a = i.zoom_config_mute_upon_entry,
                      l = i.zoom_config_public_cal,
                      d = i.zoom_config_pmi,
                      c = i.zoom_config_video_host,
                      u = i.zoom_config_video_participants,
                      m = i.zoom_config_joinurl;
                    (s = i.security.pmi.passcode.default_jbh),
                      t("[name=meeting_type][value=" + (d ? "pmi" : "onetime") + "]").prop({ checked: !0 }),
                      n.find("#setting_option_uponentry").prop("checked", a),
                      n.find("[name=option_video_host][value=" + c + "]").prop("checked", !0),
                      n.find("[name=option_video_participants][value=" + u + "]").prop("checked", !0),
                      n.find("[name=option_audio][value=" + o + "]").prop("checked", !0),
                      n.find("#setting_option_joinurl").prop("checked", m),
                      (function () {
                        if (f) t("#zoom-setting .control-row.jbh").remove();
                        else {
                          t("#zoom-setting #setting_option_jbh").on("change", function () {
                            s && "pmi" === t("[name=meeting_type]:checked").val() && se(!0),
                              _ && _.changeLockState(!t(this).prop("checked"));
                          });
                          let e = r.zoom_config_jbh;
                          t("#zoom-setting #setting_option_jbh").prop("checked", e);
                          let n = r.lockOpts && r.lockOpts.jbh_locked;
                          if ((n && ye(t("#zoom-setting .control-row.jbh"), !0), r.enableJBHPriorStartMeeting)) {
                            let i = r.JBHPriorStartMeetingList,
                              o = [];
                            t.each(i, function (t, e) {
                              o.push({ id: t, label: e });
                            });
                            let a = r.jbhTimeMinutes;
                            (_ = new O.Z({
                              el: t("#zoom-setting .jbh .JBH-prior-start-cont").get(0),
                              defaultValue: a || "",
                              dataList: o,
                              lockState: n,
                              styleType: 2,
                              jquery: t,
                              ariaLabel: "select time",
                              scrollContainer: t("#zoom-setting .modal-body").get(0),
                              changeCallback: function (t) {}
                            })),
                              t("#zoom-setting .control-row.jbh").addClass("show-prior"),
                              e || _.changeLockState(!0);
                          }
                        }
                      })(),
                      (function (e) {
                        let n = Mt("qa", e),
                          i = t("#zoom-setting .qa");
                        n.show ? (n.disabled && ye(t("#zoom-setting .qa > label"), !0), Rt(e)) : i.remove();
                      })(d),
                      (function () {
                        let e = t("#zoom-setting .meetingchat");
                        e.on("change", "#setting_option_pmc", function (n) {
                          n.stopPropagation(), t(this).prop("checked") ? e.addClass("beencheck") : e.removeClass("beencheck");
                        }),
                          Nt();
                      })(),
                      i.zoom_config_hasPubCal
                        ? n.find("#setting_option_public_cal").prop("checked", l)
                        : t("#setting_option_public_cal").parents(".checkbox-inline").hide();
                    se(),
                      (function (e) {
                        let n = r.dcOptions;
                        if (n.support && !n.locked) {
                          let i = r.enableDC,
                            o = t("#zoom-setting .dcRegions .dc-group"),
                            a = t("#zoom-setting #setting_option_enableDC");
                          if (n.options.length) {
                            let e = (function (e) {
                              let n = "",
                                i = e.length - 1;
                              return (
                                t.each(e, function (t, e) {
                                  t % 2 == 0 && (n += '<div class="tablerow">'),
                                    (n += `\n\t\t\t\t<div class="tablecell">\n\t\t\t\t\t<label><input type="checkbox" name="option_dc_region" dcabbr="${E(
                                      e.abbr
                                    )}"><span>${E(e.name)}</span></label>\n\t\t\t\t</div>\n\t\t\t`),
                                    (t % 2 == 0 && t !== i) || (n += "</div>");
                                }),
                                n
                              );
                            })(n.options);
                            o.html(e),
                              (function () {
                                let e = t("#zoom-setting .dcRegions"),
                                  n = t("#zoom-setting .dcRegions .dc-group"),
                                  i = t("#zoom-setting #setting_option_enableDC");
                                n.find("input").on("change", function (t) {
                                  e.hasClass("has-error") && g.hideHasErrorMsg(n);
                                }),
                                  i.on("change", function (i) {
                                    t(this).prop("checked") ? e.addClass("showSubOptions") : e.removeClass("showSubOptions"),
                                      e.hasClass("has-error") && g.hideHasErrorMsg(n);
                                  });
                              })();
                          }
                          i &&
                            t.each(i, function (t, e) {
                              o.find("[dcabbr=" + t + "]").prop("checked", e), e && a.prop("checked", !0).trigger("change");
                            }),
                            e && t("#zoom-setting .dcRegions").addClass("pmi");
                        } else t("#zoom-setting .dcRegions").remove();
                      })(d);
                    let p = i.watermark || {};
                    p.support
                      ? (t("#setting_option_watermark").prop("checked", p.defaultVal),
                        p.locked &&
                          (t("#setting_option_watermark").prop("checked", !0).prop("disabled", !0),
                          t("#setting_option_watermark").parent().append(e).parent().addClass("haslock")))
                      : t("#setting_option_watermark").parents(".watermark").remove();
                    let h = i.audioWatermark || {};
                    h.support
                      ? (t("#setting_option_audiomark").prop("checked", h.defaultVal),
                        h.locked &&
                          (t("#setting_option_audiomark").prop("checked", !0).prop("disabled", !0),
                          t("#setting_option_audiomark").parent().append(e).parent().addClass("haslock")))
                      : t("#setting_option_audiomark").parents(".audiomark").remove();
                    i.show_unmute_all
                      ? n.find("#unmute_all").prop("checked", i.enable_unmute_all)
                      : n.find(".control-row.unmute_all").remove();
                    if (
                      (oe(),
                      qt(),
                      (function (e) {
                        let n = Mt("autoRec", e),
                          i = t("#zoom-setting .recording");
                        if (n.show) {
                          let a = n.dataOptions,
                            s = "",
                            l = a.length;
                          if (l) {
                            if (l > 1) {
                              for (var o = 0; o < l; o++) {
                                let t = a[o];
                                s += `\n\t\t\t\t\t\t\t<label class="radio-inline ${t.id}">\n\t\t\t\t\t\t\t\t<input type="radio" id="option_rec_${t.id}" name="option_rec_id" value="${t.id}" />${t.label}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t`;
                              }
                              if ((i.find(".recording-radio").html(E(s)), n.childParams.exceedMaxStorage.value)) {
                                let t = `\n\t\t\t\t\t\t\t<div class="exceed-storage warning">${H.tips[35]}</div>\n\t\t\t\t\t\t`;
                                i.append(E(t));
                              }
                            } else {
                              let e = a[0].label;
                              if (
                                ((e = "string" === B.type(e) ? e.toLowerCase() : ""),
                                t("#setting_recording")
                                  .next()
                                  .text(H.tips[4] + e),
                                i.find(".recording-radio").remove(),
                                i.addClass("on" + a[0].id),
                                n.childParams.exceedMaxStorage.value)
                              ) {
                                let t = `\n\t\t\t\t\t\t\t<div class="exceed-storage warning">${H.tips[35]}\n\t\t\t\t\t\t\t\t<div class="change-setting">${H.tips[36]}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;
                                i.append(E(t)), i.find(".exceed-storage a").attr("href", r.mySettingUrl + "?tab=recording");
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
                                (ye(t("#zoom-setting .recording > label"), !0),
                                t("#zoom-setting [name=option_rec_id]").prop("disabled", !0)),
                              Gt(e);
                          } else i.remove();
                        } else i.remove();
                      })(d),
                      Kt(),
                      Jt(),
                      (function () {
                        let e = Mt("interpretation", !1),
                          n = t("#zoom-setting .interpretation");
                        e.show
                          ? (Ht(e),
                            (function () {
                              let e = t("#zoom-setting .interpretation");
                              e.on("change", "#setting_option_interpretation", function (n) {
                                n.stopPropagation(), t(this).prop("checked") ? e.addClass("beencheck") : e.removeClass("beencheck");
                              }),
                                e.on("click", ".add-interpretation-btn", function (t) {
                                  t.stopPropagation(), t.preventDefault(), Ht();
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
                                      let i = 20,
                                        o = t("#zoom-setting .interpretation");
                                      o.hasClass("max-line") && o.find(".edit-interpretation-line").length < i && o.removeClass("max-line");
                                      $t(),
                                        n.length
                                          ? n.find(".remove-line-btn").trigger("focus")
                                          : t("#zoom-setting .interpretation .add-interpretation-btn").trigger("focus");
                                    })(t(this).parent());
                                }),
                                e.on("blur", ".interpretation-email", function (e) {
                                  e.stopPropagation(), At(t(this).parent(), !0);
                                });
                            })(),
                            n.find("#setting_option_interpretation").prop("checked", e.value).trigger("change"))
                          : n.remove();
                      })(),
                      i.lockOpts)
                    ) {
                      var v = i.lockOpts;
                      v.hostVideo_locked &&
                        (t("[name=option_video_host]").prop("disabled", !0),
                        t(".video .video-controls-label:first").append(e).addClass("haslock")),
                        v.pVideo_locked &&
                          (t("[name=option_video_participants]").prop("disabled", !0),
                          t(".video .video-controls-label:last").append(e).addClass("haslock")),
                        v.audio_locked &&
                          (t("[name=option_audio]").prop("disabled", !0), t(".audio .controls[role=group]").append(e).addClass("haslock")),
                        v.public_cal_locked &&
                          (t("#setting_option_public_cal").parent().append(e).parent().addClass("haslock"),
                          t("#setting_option_public_cal").prop("disabled", !0)),
                        v.mute_locked &&
                          (t("#setting_option_uponentry").prop("disabled", !0),
                          t("#setting_option_uponentry").parent().append(e).parent().addClass("haslock"));
                    }
                    i && !0 === i.option_enable_reg
                      ? i.schedulePmiLock
                        ? n.find("#setting_option_requirereg").prop({ disabled: !0 })
                        : !0 === i.zoom_option_require_reg && n.find("#setting_option_requirereg").prop({ checked: !0 }).trigger("change")
                      : n.find("#setting_option_requirereg").parent().parent().hide();
                    t("#meeting_type_normal").trigger("change"), Pt();
                  })(t("#zoom-setting .content_container form"), i.zmOpt)
                : "delSuccess" === i.type
                ? i.meeting && 0 != i.meeting && ze()
                : "iconDeleteSuccess" === i.type
                ? (Ct(i.meeting), i.meeting && 0 != i.meeting && ze())
                : "iconDeleteFailed" === i.type
                ? (!(function () {
                    let e = t("#zoom_schedule_meeting_url + i.icon-trash"),
                      n = e.get(0);
                    n && (e.removeClass("loading"), (n.lock = !1));
                  })(),
                  i.showMsg && Et(i.showMsg, "warning"))
                : "workemailSigninResult" === i.type ||
                  "ssoSigninResult" === i.type ||
                  ("deleteMeetingToast" == i.type
                    ? ze()
                    : "editFailed" == i.type
                    ? Et(i.errorMsg, "warning")
                    : "remoteCheckPwdResult" == i.type
                    ? (function (t, e) {
                        if (t) {
                          let { res: t, msg: i, errortype: o } = n.checkRules();
                          G(t, i, o, e.channel);
                        } else {
                          let { res: t, msg: n, errortype: i, channel: o } = e;
                          G(t, n, i, o);
                        }
                      })(i.exception, i.info)
                    : "updateTimeAndTimezoneFailed" == i.type && Et(i.errorMsg, "warning"));
          }
          function E(t) {
            return o().sanitize(t);
          }
          function S(t) {
            return ["tabAway", "tabReminder", "tabTask", "tabAppointmentSlotsV2Entry", "tabWorkingLocation"].includes(t);
          }
          function F() {
            w.getQuickNewEvt().length > 0 &&
              w.getQuickSaveBtnNode().on("click", function (e) {
                t("#zoom_repeat_edit_flag").text("0"), t("#zoom_recurring_edit_flag").text("");
                let n = (function () {
                  let t,
                    e = w.getFocusTimeDescNode();
                  e.length && (t = vt(e.html().replace(/<br>/g, " ")));
                  let n = w.getWhereNode();
                  !t && n.length && (t = vt(w.getValueForWhereNode(n[0])));
                  return t;
                })();
                if (n && n.url) {
                  let e = {
                    number: n.number,
                    topic: w.getQuickTopicNode().val(),
                    startTime: et(),
                    isRepeat: w.isRepeat(),
                    zoomrooms: w.getZoomRoomsFromQuickSchedule(),
                    duration: lt(),
                    timezone: Dt(),
                    isPrivateEvent: w.getIsPrivateEvent(),
                    event_baseid: w.getBaseidFromDom(),
                    zm_eid: w.getEidFromDom()
                  };
                  !e.event_baseid && e.zm_eid && (e.event_baseid = yt(e.zm_eid)),
                    D({ type: "update", info: e }),
                    (e.startTime && e.timezone && e.topic) || t("#zoom_repeat_edit_flag").text("1");
                }
                t("#zoom_edit_event_flag").text("1");
              });
          }
          function P(e) {
            setTimeout(() => {
              (e.lock = !1), t(".zm-busy24").hide();
            }, 1200);
          }
          (async function () {
            (e = `<a class="locked_by_admin" href="" aria-describedby="locktip" title="${H.tips[1]}"><i></i><span class="sr-only">Locked Option</span></a>`),
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
                    "authenticationSigninResult" === t.type &&
                      (function (t) {
                        if (t.msg) {
                          let e = t.msg;
                          t.errorCode && (e += " (error: " + t.errorCode + ")"), alert(e);
                        } else Et(H.tips[11]);
                      })(t);
                  }),
                  t(l)
                    .on("calendarIdObtained", function (t) {
                      D({
                        type: "saveNewCalendarEvent",
                        info: { calendarId: t.calendarId, number: t.number, event_baseid: t.event_baseid }
                      });
                    })
                    .on("calendarIdRemoved", function (t) {
                      let e = t.event_baseid,
                        n = Ne(e);
                      d[n] && (D({ type: "removeCalendarEvent", info: { calendarId: t.calendarId, event_baseid: e } }), delete d[n]);
                    })
                    .on("updateTimeAndTimezone", function (t) {
                      let e = t.dates;
                      D({
                        type: "updateTimeAndTimezone",
                        info: {
                          calendarId: t.calendarId,
                          event_baseid: t.event_baseid,
                          startTime: ot(e),
                          duration: at(e),
                          timezone: t.timezone || rt(),
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
                        let e = null;
                        if ((t.descText && (e = vt(t.descText)), !e && t.joinUrl && (e = vt(t.joinUrl)), !e)) return;
                      }
                      let e = r.maxAttendee || 1e3;
                      t.invitee.length > e && (t.invitee = t.invitee.slice(0, e));
                      let n = t.invitee.join(";");
                      D({ type: "saveInvitee", info: { meetingNumber: t.meetingNumber, event_baseid: t.event_baseid, invitee: n } });
                    }),
                  Q("body").attr("data-viewfamily"))
                ) {
                  let e = new p(function (t) {
                    m && Ee();
                  });
                  var i = new p(function (n) {
                    let i = t("#zoom-video-sec");
                    i.length > 0
                      ? m &&
                        !i.attr("datetimeob") &&
                        (!(function (e) {
                          let n = document.querySelector("#xStDaIn");
                          n && e.observe(n, { attributeFilter: ["data-date"], attributes: !0 });
                          let i = document.querySelector("#xStTiIn");
                          i && e.observe(i, { attributeFilter: ["data-initial-value"], attributes: !0 });
                          let o = document.querySelector("#xEnDaIn");
                          o && e.observe(o, { attributeFilter: ["data-date"], attributes: !0 });
                          let a = document.querySelector("#xEnTiIn");
                          a && e.observe(a, { attributeFilter: ["data-initial-value"], attributes: !0 });
                          let s = t("div[jsname=L2QMlb]")[0];
                          s && e.observe(s, { attributeFilter: ["class"], attributes: !0 });
                        })(e),
                        i.attr("datetimeob", "1"))
                      : "EVENT_EDIT" === Q("body").attr("data-viewfamily") &&
                        (function () {
                          let e = w.getZoomBtnSiblingNode();
                          if (e.length) {
                            var n = t('<div id="zoom-video-sec" class="' + E(e[0].className) + ' zoom-video-sec"></div>');
                            e.after(n),
                              n.append(
                                ((l = []).push('\t<div aria-hidden="true" class="tzcF6">'),
                                l.push('\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>'),
                                l.push("\t</div>"),
                                l.push('\t<div class="j3nyw PxPKzc zoom-btn">'),
                                l.push("\t</div>"),
                                l.join(""))
                              ),
                              bt(),
                              "" === t("#hInySc0").text() &&
                                "" !== t("#zm-quick2adv-desc").text() &&
                                w.setDescNodeValue(document.querySelector("#zm-quick2adv-desc").innerHTML);
                            var i,
                              o = location.pathname.split("eventedit/");
                            if (
                              (t("#zm-hidden-eid").length <= 0 &&
                                t("#YPCqFe").append('<div id="zm-hidden-eid" style="display:none;"></div>'),
                              t("#zoom_repeat_edit_flag").text("0"),
                              t("#zoom_recurring_edit_flag").text(""),
                              t("#zoom-quick2adv-number").empty(),
                              o && 2 == o.length && o[1].length > 48 && -1 == o[1].indexOf("duplicate/"))
                            )
                              t("#YPCqFe #zm-hidden-eid").text(o[1]);
                            else if ((t("#YPCqFe #zm-hidden-eid").text(""), o && 2 == o.length && o[1].indexOf("duplicate/") > -1))
                              if ((i = ht()) && i.number) {
                                var a = vt(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
                                a && a.number && t("#xRemRtcBu").trigger("click"),
                                  chrome.runtime.sendMessage({ type: "isNoMeetingLicenseUser" }, function (t) {
                                    setTimeout(function () {
                                      Ct(), t.noLicenseUser ? n.hide() : R();
                                    }, 200);
                                  });
                              }
                            if (
                              (t("#YPCqFe #zm-usepmi").empty(),
                              chrome.runtime.sendMessage({ type: "checkShowFree40MinsTip" }, function (e) {
                                e?.showFree40MinsTip
                                  ? ((m = !0),
                                    (function (e) {
                                      let n = `\n\t\t\t<div class="zoom-free-tooltip">\n\t\t\t\t<div>\n\t\t\t\t\t<div class="" aria-hidden="true">Your Zoom Basic plan has a 40-minute time limit on meetings.</div>${
                                        e
                                          ? ""
                                          : `<a href="https://zoom.us/buy?plan=pro&from=pro&zcid=2166&utm_source=Product&utm_medium=email&utm_content=FreeToPro&utm_campaign=${
                                              "edge" === H.browserConfig ? "EdgeExtension" : "ChromeExtension"
                                            }" class="zoom-upgrade" target="_blank"> Upgrade now </a> to enjoy unlimited meetings.`
                                      }\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;
                                      t(".zoom-free-tooltip").length <= 0 && t("#xDaRaSel").after(n);
                                    })(e?.isPaidAccount),
                                    Ee())
                                  : (m = !1);
                              }),
                              (i = ht()))
                            ) {
                              var s = ct();
                              i.url && Te(i.url), t("#zoom_schedule_meeting_url").show(), wt(s);
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
                                      var i = t("#zoom_schedule_button_wrapper");
                                      chrome.runtime.sendMessage({ type: "supportPAC" }, function (e) {
                                        if (e.hasPac) {
                                          var n = t("<button>", {
                                            id: "zoom_schedulepac_button",
                                            html: "Personal Audio Conference",
                                            class: "btn-pac"
                                          });
                                          0 == t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length && i.append(n),
                                            n.off("click").on("click", function () {
                                              Z(n);
                                            });
                                        }
                                      }),
                                        t("#YPCqFe").length && tt("dates")
                                          ? chrome.runtime.sendMessage({ type: "getReadyToSchedule" }, function (t) {
                                              t.readyToSchedule
                                                ? "complete" === document.readyState
                                                  ? setTimeout(function () {
                                                      R();
                                                    }, 1e3)
                                                  : (window.onload = function () {
                                                      R();
                                                    })
                                                : n.show();
                                            })
                                          : n.show();
                                    })();
                              });
                          }
                          var l;
                        })(t("body").get(0)),
                      n.forEach(function (e) {
                        try {
                          e.addedNodes[0].className.indexOf("XVt2Ub-bF1uUb") > -1 &&
                            document.querySelector(".Sb44q") &&
                            (t("#zoom_edit_event_flag").text("0"),
                            t("#zoom-quick2adv-number").empty(),
                            t("#zoom_repeat_edit_flag").text("0"));
                        } catch (t) {}
                        var n = e.addedNodes[0] && e.addedNodes[0].outerHTML;
                        if (
                          n &&
                          e.target == document.body &&
                          e.addedNodes[0].innerHTML &&
                          e.addedNodes[0].innerHTML.indexOf('id="J9Hpafc') > 0
                        ) {
                          var i = e.addedNodes[0].querySelector("div.YrbPvc"),
                            o = e.addedNodes[0].querySelector("div[role=button][aria-describedby^=J9Hpafc]");
                          o && null !== o && i && i.removeChild(o);
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
                                  var i = document.body.innerHTML.match(/\[\\"timezone\\",\\"(.*)\\\"],\[\\"defaultCalMode\\"/),
                                    o = i && i[1];
                                  t("div[jsname=L2QMlb] div[jsname=yxQRke]").attr("timezoneid", o || "");
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
                                        i = "";
                                      n.indexOf("following") > -1 ? (i = "TAIL") : n.indexOf("all") > -1 && (i = "ALL"),
                                        t("#zoom_recurring_edit_flag").text(i);
                                    }
                                  }
                                });
                          else if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                            var a = ft();
                            if (
                              -1 !== n.search('jsname="c6xFrd"') &&
                              a &&
                              a.url &&
                              -1 == n.search('jsname="VGHUeb"') &&
                              -1 == n.search('jsname="AOxYWc"')
                            ) {
                              var s = e.addedNodes[0],
                                l = s.querySelector("span[jsname=bN97Pc] >div");
                              if (
                                l &&
                                -1 == l.innerHTML.search("zm-remove-line") &&
                                s.querySelector("div[jsname=d8Aqse]  textarea[jsname=YPqjbf]")
                              ) {
                                let e = t("#rAECCd").text();
                                if (e) {
                                  var r = document.createElement("div");
                                  r.setAttribute("class", "zm-remove-line");
                                  var c = document.createElement("div"),
                                    u = document.createElement("div");
                                  c.appendChild(document.createTextNode("Topic")),
                                    u.appendChild(document.createTextNode(e)),
                                    r.appendChild(c),
                                    r.appendChild(u),
                                    l.insertBefore(r, l.childNodes[1]);
                                }
                                let n = t("#xDetDlgWhen").find(".CyPPBf");
                                if (
                                  (n.length || (n = t("#xDetDlgWhen").find(".AzuXid")),
                                  n.length || (n = t("#xDetDlgWhen").find("#rAECCd").parent().next()),
                                  n.length)
                                ) {
                                  var m = document.createElement("div");
                                  m.setAttribute("class", "zm-remove-line");
                                  var p = document.createElement("div"),
                                    g = document.createElement("div"),
                                    h = n.clone(),
                                    f = h.find("span").remove();
                                  p.appendChild(document.createTextNode("Time")),
                                    g.appendChild(document.createTextNode(h.text() + " " + f.text())),
                                    m.appendChild(p),
                                    m.appendChild(g),
                                    l.insertBefore(m, l.childNodes[2]);
                                }
                              }
                              t("div[jsaction][jsname=c6xFrd]").off(),
                                t("div[jsaction][jsname=c6xFrd]").on("click", "div[role=button]", function (e) {
                                  var n = t(this).attr("data-id") || "";
                                  if ("di8rgd" === n || "deA65" === n) {
                                    var i = ft();
                                    i &&
                                      i.number &&
                                      (sendLogToBackend({
                                        msgType: 2,
                                        msg: { msg: "del04", meetingNumber: i.number, jsname: t(this).attr("jsname") },
                                        operaType: 1
                                      }),
                                      D({ type: "delete", info: { number: i.number } }));
                                  }
                                });
                            }
                            if (-1 !== n.search('jsname="bN97Pc"') && -1 !== n.search('class="aZpV8b'))
                              if (
                                -1 === n.search('jsname="wU3vpb"') &&
                                -1 === n.search('jsname="PAiuue"') &&
                                t("#yDmH0d [jsname=bN97Pc] div[jsname=GfMrC]").is(":visible")
                              )
                                F();
                              else {
                                w.getQuickNewEvt().length > 0 &&
                                  chrome.runtime.sendMessage({ type: "isNoMeetingLicenseUser" }, function (e) {
                                    e.noLicenseUser
                                      ? w.getQuickSaveBtnNode().css("background", "#1a73e8")
                                      : (function () {
                                          var e = w.getQuickNewEvt();
                                          if (e.length > 0) {
                                            if (
                                              !e.find("[jsname=PAiuue]").length &&
                                              !e.find("[jsname=wU3vpb]").length &&
                                              e.find("[jsname=hG1TZc]").length
                                            )
                                              return;
                                            let i = !1;
                                            if (
                                              (e.find("div[jsname=x8hlje]").length < 1 && (i = !0), e.find(".quick-schedule").length <= 0)
                                            ) {
                                              var n = [];
                                              i
                                                ? (n.push('\t<i class="zm-busy zm-busy24" style="display:none;"></i>'),
                                                  n.push(
                                                    '\t<div role="button"  class="quick-schedule zoom-pop-link VfPpkd-LgbsSe nCP5yc DuMIQc" tabindex="0" >'
                                                  ),
                                                  n.push('\t\t<content><a class="RveJvd snByac">Make it a Zoom Meeting</a></content>'),
                                                  n.push("\t</div>"),
                                                  w
                                                    .getQuickSaveBtnNode()
                                                    .removeClass("VfPpkd-LgbsSe-OWXEXe-k8QpJ nCP5yc")
                                                    .addClass("LjDxcd nYqxP"))
                                                : (n.push('\t<i class="zm-busy zm-busy24" style="margin-top:-25px;display:none;"></i>'),
                                                  n.push(
                                                    '\t<div role="button" class="quick-schedule zoom-pop-link U26fgb O0WRkf e3Duub C0oVfc" tabindex="0" >'
                                                  ),
                                                  n.push('\t\t<content><a class="RveJvd snByac">Make it a Zoom Meeting</a></content>'),
                                                  n.push("\t</div>"),
                                                  w.getQuickSaveBtnNode().removeClass("zZhnYe e3Duub").addClass("nYqxP I2LGc")),
                                                w.getQuickSaveBtnNode().parent().append(n.join("")),
                                                e.find("div[jsname=rhHFf] content>span").empty(),
                                                t("#zoom-quick2adv-number").empty(),
                                                t("#zoom_repeat_edit_flag").text("0"),
                                                t("#zoom_recurring_edit_flag").text("");
                                            }
                                            t("div.quick-schedule content>a").on("click", function () {
                                              if (this.lock) return;
                                              let n = this;
                                              n.lock = !0;
                                              let i = vt(t("div[jsname=oAi9S] #xDetDlgVideo[data-details]").attr("data-details") || ""),
                                                o = w.getDescNode(),
                                                a = w.getQuickWhereNode();
                                              (t("div[jsname=wU3vpb] div[jsname=oAi9S] button[jsname=uXqWSe]").is(":visible") ||
                                                t("div[jsname=wU3vpb] div[jsname=oAi9S] div[role=button][jsname=uXqWSe]").is(":visible") ||
                                                a.is(":visible")) &&
                                              i &&
                                              i.url
                                                ? (function (e, n, i, o, a) {
                                                    let s = t("div[jsname=nw2lBd] a[href*='/www.google.com/url?']").attr("href") || "",
                                                      l =
                                                        "<br>" +
                                                        "─".repeat(10) +
                                                        "<br><br>" +
                                                        i.url +
                                                        '<br/><br/><a href="' +
                                                        s +
                                                        '" target="_blank">Joining Instructions</a><br><br>' +
                                                        "─".repeat(10),
                                                      r = t.trim(o.html());
                                                    r && "" != o.text() && (l = r + l);
                                                    o.html(l), o[0].dispatchEvent(new Event("paste"));
                                                    let d = E(w.getValueForWhereNode(a[0]));
                                                    d = d && d.length > 0 ? d + ", " + E(i.url) : E(i.url);
                                                    t("div[jsname=ovr9Gb] div[jsname=vRNCKf]").addClass("sMVRZe"),
                                                      t("div[jsname=ovr9Gb] div[jsname=vRNCKf] div[role=button][jsname=ix0Hvc]").trigger(
                                                        "click"
                                                      ),
                                                      t("div[jsname=ovr9Gb]").addClass("sMVRZe"),
                                                      a.is(":visible") || w.getQuicLocationButton().trigger("click");
                                                    setTimeout(function () {
                                                      a[0] &&
                                                        (a[0].dispatchEvent(new Event("input")),
                                                        a[0].focus(),
                                                        a[0].select(),
                                                        document.execCommand("inserttext", !1, d),
                                                        a[0].dispatchEvent(new Event("input"))),
                                                        setTimeout(function () {
                                                          (n.lock = !1), w.getQuickSaveBtnNode().trigger("click");
                                                        }, 800);
                                                    }, 0);
                                                  })(0, n, i, o, a)
                                                : (function (e, n) {
                                                    let i = ht();
                                                    if (i) return w.getQuickSaveBtnNode().trigger("click"), void P(n);
                                                    try {
                                                      let t = w.getQuickTimeSection();
                                                      if (t.length) {
                                                        t.trigger("click");
                                                        let n = e.find("div[jsname=iKdrbf] input[jsname=YPqjbf]")[0],
                                                          i = new Event("blur");
                                                        n.dispatchEvent(i);
                                                      }
                                                    } catch (t) {}
                                                    t(".zm-busy24").show(),
                                                      j(),
                                                      setTimeout(function () {
                                                        chrome.runtime.sendMessage(
                                                          {
                                                            type: "quickschedule",
                                                            info: { scheduleTime: et(), topic: _t(), trackfields: "", timezone: Dt() }
                                                          },
                                                          function (e) {
                                                            if (e && e.resetpwd)
                                                              return (
                                                                w.getQuickMoreOptionNode().trigger("click"),
                                                                void setTimeout(function () {
                                                                  X();
                                                                }, 1e3)
                                                              );
                                                            if (e && e.status) {
                                                              let n = w.getQuickTopicNode();
                                                              "" == n.val() &&
                                                                (n.val(e.result.topic).trigger("focus"),
                                                                n[0].dispatchEvent(new Event("input", { bubbles: !0 })),
                                                                n.trigger("blur"));
                                                              let i = t("#yDmH0d > #zoom-quick-location"),
                                                                o = t("#yDmH0d > #zoom-quick-desc"),
                                                                a = t("#yDmH0d > #zm-quick-number"),
                                                                s = null;
                                                              e.result.addJoinUrl &&
                                                                ((s = w.getQuickWhereNode()),
                                                                s.is(":visible") || w.getQuicLocationButton().trigger("click")),
                                                                a.length <= 0
                                                                  ? t("#yDmH0d").append(
                                                                      '<div id="zm-quick-number" style="display:none;">' +
                                                                        (E(e.result.number) || "") +
                                                                        "</div>"
                                                                    )
                                                                  : (a[0].textContent = e.result.number || ""),
                                                                t("#zoom-quick2adv-number").length <= 0
                                                                  ? t("body").append(
                                                                      '<div id="zoom-quick2adv-number" style="display:none;">' +
                                                                        (E(e.result.number) || "") +
                                                                        "</div>"
                                                                    )
                                                                  : t("#zoom-quick2adv-number").text(e.result.number || "");
                                                              let l = w.getDescNode(),
                                                                r = w.escapeHtml(e.result.email);
                                                              l.is(":visible") || w.getQuicDescButton().trigger("click"),
                                                                setTimeout(function () {
                                                                  if (e.result.addJoinUrl)
                                                                    if (s.is(":visible")) {
                                                                      s.length > 1 && (s = s.filter(":visible"));
                                                                      let n = E(w.getValueForWhereNode(s[0]));
                                                                      (n =
                                                                        n && n.length > 0
                                                                          ? n + ", " + E(e.result.joinUrl)
                                                                          : E(e.result.joinUrl)),
                                                                        s[0].dispatchEvent(new Event("input")),
                                                                        s[0].focus(),
                                                                        s[0].select(),
                                                                        document.execCommand("inserttext", !1, n),
                                                                        s[0].dispatchEvent(new Event("input")),
                                                                        i.length <= 0
                                                                          ? t("#yDmH0d").append(
                                                                              '<div id="zoom-quick-location" style="display:none;">' +
                                                                                (n || "") +
                                                                                "</div>"
                                                                            )
                                                                          : (i[0].textContent = n || "");
                                                                    } else
                                                                      i.length <= 0
                                                                        ? t("#yDmH0d").append(
                                                                            '<div id="zoom-quick-location" style="display:none;">' +
                                                                              (E(e.result.joinUrl) || "") +
                                                                              "</div>"
                                                                          )
                                                                        : (i[0].textContent = e.result.joinUrl || "");
                                                                  if (l.length > 0 && l.is(":visible")) {
                                                                    l.length > 1 && (l = l.filter(":visible"));
                                                                    let e =
                                                                      "<br>" +
                                                                      "─".repeat(10) +
                                                                      "<br><br>" +
                                                                      r.replace(/\r\n/g, "<br>") +
                                                                      "<br>" +
                                                                      "─".repeat(10);
                                                                    e = "<p>" + e + "</p>";
                                                                    let n = t.trim(l.html());
                                                                    n && "" != l.text() && (e = n + e),
                                                                      l.html(e),
                                                                      l[0].dispatchEvent(new Event("paste"));
                                                                  } else {
                                                                    let e = encodeURIComponent(r) || "";
                                                                    (e =
                                                                      "\n" +
                                                                      encodeURIComponent("─".repeat(10)) +
                                                                      "\n" +
                                                                      e +
                                                                      "\n" +
                                                                      encodeURIComponent("─".repeat(10))),
                                                                      o.length <= 0
                                                                        ? t("#yDmH0d").append(
                                                                            '<div id="zoom-quick-desc" style="display:none;">' +
                                                                              e +
                                                                              "</div>"
                                                                          )
                                                                        : (o[0].textContent = e);
                                                                  }
                                                                  setTimeout(function () {
                                                                    w.getQuickSaveBtnNode().trigger("click");
                                                                  }, 800);
                                                                }, 0);
                                                            } else
                                                              201 == e.errorCode
                                                                ? Tt()
                                                                : 3068 == e.errorCode
                                                                ? (w.getQuickMoreOptionNode().trigger("click"), R())
                                                                : e.syncState || (e.errorMessage && alert(e.errorMessage));
                                                            P(n);
                                                          }
                                                        );
                                                      }, 0);
                                                  })(e, n);
                                            }),
                                              e.find("[jsname=I0Fcpe] > button").length
                                                ? e.on("click", "[jsname=I0Fcpe] > button", function (e) {
                                                    S(t(this).attr("id") || "") ? t(".quick-schedule").hide() : t(".quick-schedule").show();
                                                  })
                                                : e.on("click", "[jsname=I0Fcpe] > div", function (e) {
                                                    S(t(this).attr("aria-controls") || "")
                                                      ? t(".quick-schedule").hide()
                                                      : t(".quick-schedule").show();
                                                  }),
                                              e.on("click", "[jsname=x8hlje]", function (e) {
                                                var n = t("#yDmH0d > #zm-quick-number")[0];
                                                if (
                                                  (t("#zoom_repeat_edit_flag").text("0"),
                                                  t("#zoom_recurring_edit_flag").text(""),
                                                  n && n.textContent.length > 8)
                                                ) {
                                                  let e = {
                                                    number: n.textContent,
                                                    topic: w.getQuickTopicNode().val(),
                                                    startTime: et(),
                                                    isRepeat: w.isRepeat(),
                                                    zoomrooms: w.getZoomRoomsFromQuickSchedule(),
                                                    duration: lt(),
                                                    timezone: Dt(),
                                                    isPrivateEvent: w.getIsPrivateEvent()
                                                  };
                                                  D({ type: "update", info: e }),
                                                    (e.startTime && e.timezone && e.topic) || t("#zoom_repeat_edit_flag").text("1");
                                                }
                                              });
                                          }
                                        })();
                                  });
                              }
                          }
                        } else if (n && -1 !== n.search('jsname="SF0uGd"') && "bN97Pc" === t(e.target).attr("jsname")) F();
                        else {
                          if (
                            n &&
                            -1 !== n.search('id="xDetDlgVideo"') &&
                            "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily
                          )
                            if ((a = ht()) && a.number)
                              (b = vt((_ = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || ""))) &&
                                b.number &&
                                b.number !== a.number &&
                                t("#xRemRtcBu").trigger("click");
                          var v = e.removedNodes[0] && e.removedNodes[0].outerHTML;
                          if (v)
                            if (-1 !== v.search('role="dialog"'))
                              "EVENT" == document.querySelector("body").dataset.viewfamily &&
                                -1 !== v.search('jsname="bN97Pc"') &&
                                -1 !== v.search('class="JtukPc"') &&
                                setTimeout(function () {
                                  t("#yDmH0d > #zoom-quick-desc").empty(),
                                    t("#yDmH0d > #zoom-quick-location").empty(),
                                    t("#yDmH0d > #zm-quick-number").empty(),
                                    t("#YPCqFe #zm-quick2adv-desc").empty();
                                }, 1e3);
                            else if (
                              -1 === v.search(' id="') &&
                              -1 !== v.search('role="button"') &&
                              -1 !== v.search("data-eventid=") &&
                              -1 !== v.search('data-opens-details="true"') &&
                              (-1 !== v.search("EfQccc") || -1 !== v.search("ifwtOb")) &&
                              -1 === v.search('role="main"') &&
                              v.search("jsaction=") < v.search("ynRLnc")
                            ) {
                              let e = new RegExp('(?<=data-eventid=")[a-zA-Z0-9/+]+(?=")').exec(v);
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
                                    ((t = Ne(t)),
                                    (d[t] = !0),
                                    setTimeout(function () {
                                      w.getQuickNewEvt().length && delete d[t];
                                    }, 100));
                                }
                              }
                            } else if (
                              "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily &&
                              -1 !== v.search('jsname="aZ2wEe"')
                            ) {
                              if ((a = ht()) && a.number)
                                (b = vt((_ = t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || ""))) &&
                                  b.number &&
                                  b.number !== a.number &&
                                  (alert(H.tips[3]),
                                  t("#xRemRtcBu").trigger("click"),
                                  sendLogToBackend({
                                    msgType: 2,
                                    msg: { msg: "del05", meetingNumber: b.number, meetingLink: _, extMeetingNumber: a.number },
                                    operaType: 1
                                  }),
                                  D({ type: "deleteonly", info: { number: b.number } }));
                            } else if (
                              "EVENT_EDIT" == document.querySelector("body").dataset.viewfamily &&
                              -1 !== v.search('id="xDetDlgVideo"')
                            ) {
                              if ((a = ht()) && a.number) {
                                var b,
                                  _ = "",
                                  y = e.removedNodes[0].querySelector("#xDetDlgVideo[data-details]");
                                y && (_ = y.getAttribute("data-details")),
                                  (b = vt(_)) &&
                                    b.number &&
                                    b.number == a.number &&
                                    (Ct(),
                                    sendLogToBackend({ msgType: 2, msg: { msg: "del06", meetingNumber: b.number }, operaType: 1 }),
                                    D({ type: "delete", info: { number: b.number } }));
                              }
                            }
                        }
                      });
                  });
                  i.observe(t("body").get(0), { attributes: !1, childList: !0, subtree: !0 }),
                    new p(function (e) {
                      e.forEach(function (e) {
                        if ("EVENT" == document.querySelector("body").dataset.viewfamily) {
                          var n = w.getEventPopup();
                          if (n.find(".zoom-join-link").length > 0 && n.is(":visible"));
                          else if (n.length > 0) {
                            var i = (function (t) {
                                let e = t.find("[jsname=bA8IK]");
                                if (e && e.length > 0) return !0;
                                return !1;
                              })(n),
                              o = ft();
                            if (o && o.url) {
                              let e = !!n.find(".kMp0We").length,
                                a = `\n\t\t\t\t\t\t\t\t\t\t<div class="${
                                  e ? "kMp0We" : "nBzcnc"
                                } OcVpRe zoom-join-link">\n\t\t\t\t\t\t\t\t\t\t\t<div aria-hidden="true" class="${
                                  e ? "nGJqzd OLw7vb" : "zZj8Pb EaVNbc"
                                }">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="DPvwYc zmlogo" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="${
                                  e ? "NI2kfb" : "toUqff"
                                }">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-pop-link"><a role="button" class="btn-meeting" target="_blank">Join Zoom Meeting</a></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t`;
                              n.children().eq(0).after(a),
                                t(".zoom-pop-link>a").attr("href", encodeURI(o.url)),
                                w.getPopupDeleteBtn().on("click", function (t) {
                                  i ||
                                    (sendLogToBackend({
                                      msgType: 2,
                                      msg: { msg: "del07", meetingNumber: o.number, nodeId: this.id },
                                      operaType: 1
                                    }),
                                    D({ type: "delete", info: { number: o.number } }));
                                }),
                                n.find("a").each(function () {
                                  var e = t(this).text();
                                  /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                                    e
                                  ) && t(this).attr("href", e);
                                }),
                                n.find("#xDetDlgDesc").each(function () {
                                  var e = t(this).html(),
                                    n = e.match(/\+[0-9][0-9 ]+[0-9]/g);
                                  if (n && n.length > 0)
                                    for (var i = 0; i < n.length; i++) e = e.replace(n[i], '<a href="tel:' + n[i] + '">' + n[i] + "</a>");
                                  t(this).html(e);
                                });
                              let s = (function () {
                                let t = "",
                                  e = w.getPopupLocationNode();
                                e.length && (t = vt(e.text()));
                                return t?.url;
                              })();
                              if (s) {
                                let t = n.find("#xDetDlgLoc");
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
                            }
                          }
                        }
                      });
                    }).observe(document.querySelector("#yDmH0d"), { attributes: !1, childList: !0, subtree: !0 });
                } else if (
                  (t("#maincell #coverinner")
                    .off()
                    .on("DOMSubtreeModified", function () {
                      e ||
                        mt() ||
                        !gt() ||
                        (function () {
                          var e = !1;
                          t("[id$=\\.save_top] .goog-imageless-button-content").data("click-event-registered") && (e = !0);
                          return e;
                        })() ||
                        pt() ||
                        (e = window.setTimeout(function () {
                          (e = null),
                            (function (e) {
                              if ((bt(), w.getDescNode().length)) {
                                var n = ht();
                                if (n) {
                                  var i = ct();
                                  n.url && i.attr("href", encodeURI(n.url)).html("Join Zoom Meeting"),
                                    w.getGoogleVideoCallButtons().hide(),
                                    wt(i);
                                } else
                                  !(function (e) {
                                    if (ut().length) return;
                                    var n = w.getButtonsContainer();
                                    n.addClass("zoom-button-container");
                                    var i = t("<button>", {
                                      id: "zoom_schedule_button",
                                      html: "Make it a Zoom Meeting",
                                      class: "btn-meeting"
                                    });
                                    t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length > 0 ||
                                      n.append(t('<div id="zoom_schedule_button_wrapper"></div>').append(i));
                                    var o = t("#zoom_schedule_button_wrapper");
                                    i.off("click").on("click", function () {
                                      t(this);
                                      R();
                                    }),
                                      chrome.runtime.sendMessage({ type: "supportPAC" }, function (e) {
                                        if (e.hasPac) {
                                          var n = t("<button>", {
                                            id: "zoom_schedulepac_button",
                                            html: "Personal Audio Conference",
                                            class: "btn-pac"
                                          });
                                          o.append(n),
                                            n.off("click").on("click", function () {
                                              Z();
                                            });
                                        }
                                      }),
                                      e || (t("#YPCqFe").length && tt("dates"))
                                        ? chrome.runtime.sendMessage({ type: "getReadyToSchedule" }, function (t) {
                                            t.readyToSchedule
                                              ? (window.onload = function () {
                                                  R();
                                                })
                                              : i.show();
                                          })
                                        : i.show();
                                  })(e);
                              }
                            })();
                        }, 600)),
                        !n &&
                          gt() &&
                          pt() &&
                          (n = window.setTimeout(function () {
                            n = null;
                            var t = ht();
                            if (t && t.url) {
                              var e = ct();
                              setTimeout(function () {
                                e && e.attr("href", encodeURI(t.url)).html("Join Zoom Meeting");
                              }, 100);
                            }
                          }, 600));
                    }),
                  t("#maincell #coverinner"))
                ) {
                  var o = document.querySelector("body"),
                    a = new p(function (e) {
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
                  o && a.observe(o, { attributes: !1, childList: !0, subtree: !0 });
                }
              })(),
              t("body").on("click", "#yDmH0d button[data-mdc-dialog-action=ok]", function (e) {
                let n = t(this).text();
                n &&
                  n.indexOf("Discard") > -1 &&
                  (t("#zoom-video-sec").is(":visible") || t(".quick-schedule.zoom-pop-link").is(":visible")) &&
                  t("#zoom-quick2adv-number").empty();
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
                  if (w.getQuickNewEvt().length || t("#zoom-video-sec").length > 0 || t("#b1w9Rc").length) return;
                  sendLogToBackend({ msgType: 2, msg: "del03" });
                }
              }),
              setTimeout(function () {
                chrome.runtime.sendMessage({ type: "getMeetingTrashUrl" }, function (t) {
                  t.meetingTrashUrl && (c = t.meetingTrashUrl);
                });
              }, 100);
          })(),
            (window.sendLogToBackend = function (t) {
              t && t.msgType && t.msg && D({ type: "sendLog", info: t });
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
          var M = { en: "Untitled event", zh: "无标题的活动", es: "Evento sin título", fr: "Événement sans titre" };
          function N() {
            let e = {},
              n = t("#zoom-setting .content_container form"),
              i = !("pmi" !== n.find("[name=meeting_type]:checked").val()),
              o = !1;
            if (n.find(".encryption-box").length) {
              o = n.find("#setting_option_e2e").prop("checked");
              let t = r.e2ee;
              i ? (t.pmiEnable = o) : (t.normalEnable = o), (e.e2ee = t);
            }
            if (((e.templateRes = {}), !i && z?.isVisible)) {
              let { id: t, extData: n } = z.getSelectedResult();
              "none" !== t && ((e.templateRes.templateId = t), (e.templateRes.templateType = n?.templateType));
            }
            let a,
              s = r.lockOpts.audio_locked;
            (a = o && s ? r.zoom_config_audio : n.find("[name=option_audio]:checked").val()), (e.zoom_config_audio = a);
            let l = "",
              d = Mt("autoRec");
            if (o && n.find(".recording").hasClass("e2e-hide")) l = d.childParams.autoRecordingSubSelected.value;
            else if (n.find("#setting_recording").is(":visible") && n.find("#setting_recording").prop("checked")) {
              let e = d.dataOptions;
              e.length > 1 ? (l = t("[name=option_rec_id]:checked").val()) : 1 === e.length && (l = e[0].id);
            }
            e.record_id = l;
            let c = !1;
            if (o && n.find(".qa").length) {
              c = Mt("qa").value;
            } else {
              let t = n.find("#setting_option_qa");
              c = !!t.is(":visible") && t.prop("checked");
            }
            e.qa = c;
            let m = n.find("#setting_option_pmc");
            e.pmc = !!m.is(":visible") && m.prop("checked");
            let p = n.find("#pmc_invite_external_user");
            if (
              ((e.enableAutoAddExternalUser = !!p.is(":visible") && p.prop("checked")),
              (e.zoom_config_schedule_for = (function () {
                let t = "";
                if (y?.isVisible) {
                  let { id: e, extData: n } = y.getSelectedResult();
                  "me" !== e && (t = e);
                }
                return t;
              })()),
              (e.zoom_config_video_host = n.find("[name=option_video_host]:checked").val()),
              (e.zoom_config_video_participants = n.find("[name=option_video_participants]:checked").val()),
              (e.mute_upon_entry = n.find("#setting_option_uponentry").prop("checked")),
              (e.public_cal = n.find("#setting_option_public_cal").prop("checked")),
              (e.zoom_config_pmi = i),
              (e.scheduleTime = et()),
              (e.topic = _t()),
              (e.trackfields = It()),
              (e.zoom_config_watermark = !!n.find("#setting_option_watermark").prop("checked")),
              (e.zoom_option_require_reg = !!n.find("#setting_option_requirereg").prop("checked")),
              (e.enable_unmute_all = n.find("#unmute_all").is(":visible") && n.find("#unmute_all").prop("checked")),
              (e.zoom_config_alternativehost = t("#alternative_host").is(":visible") ? t("#alternative_host").val() : ""),
              (e.enable_alternative_host_edit_poll = !!t("#host_edit_poll").is(":visible") && t("#host_edit_poll").prop("checked")),
              (e.focusModeValue = !!t("#setting_option_focusMode").is(":visible") && t("#setting_option_focusMode").prop("checked")),
              n.find("#setting_option_enableDC").is(":visible"))
            )
              if (n.find("#setting_option_enableDC").prop("checked")) {
                let i = n.find(".dcRegions .dc-group").find("input:checked");
                if (i.length) {
                  let n = {};
                  i.each(function (e) {
                    let i = t(this).attr("dcabbr");
                    i && (n[i] = !0);
                  }),
                    (e.enableDC = n);
                }
              } else e.enableDC = "";
            if (
              ((e.zoom_config_audiomark = !!n.find("#setting_option_audiomark").prop("checked")),
              (e.zoom_config_joinurl = n.find("#setting_option_joinurl").prop("checked")),
              (e.showDisablePmiMsg = r.showDisablePmiMsg),
              (e.showSecurityTip = r.showSecurityTip),
              !f)
            ) {
              let t;
              (t = o ? r.zoom_config_jbh : n.find("#setting_option_jbh").prop("checked")),
                (e.zoom_config_jbh = t),
                !e.zoom_config_pmi && e.zoom_config_jbh && _?.isVisible && (e.jbhTimeMinutes = _.getSelectedResult());
            }
            Object.assign(
              e,
              (function () {
                let e = t("#zoom-setting #setting_option_needpassword").prop("checked"),
                  n =
                    t("#zoom-setting #setting_option_authentication").is(":visible") &&
                    t("#zoom-setting #setting_option_authentication").prop("checked"),
                  i = { pwEnable: e, authEnable: n, wrEnable: !1 };
                f || (i.wrEnable = !!t("#zoom-setting #setting_option_waitingroom").prop("checked"));
                e && (i.pwd = t("#zoom-setting [name=meeting_pwd]").val().trim());
                n &&
                  (i.updateAuthOptionItem = (function () {
                    let e = u.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
                    if (e && e.id) return { name: e.name, type: e.type, id: e.id, domain: e.domain || void 0 };
                    return "";
                  })());
                return { securityRes: i };
              })()
            ),
              f &&
                Object.assign(
                  e,
                  (function () {
                    if (!t("#zoom-setting .waitingroom2").is(":visible")) return { waiting_room_new: "" };
                    let e,
                      n,
                      i = !!t("#setting_option_waitingroom2").prop("checked");
                    if (i)
                      (e = t("[name=option_waitingroom2]:checked").val()),
                        "auto" === e
                          ? (n = t("#auto_prior_start").val())
                          : "manu" === e && (n = t("#manu_prior_start").is(":visible") ? t("#manu_prior_start").val() : null);
                    else {
                      let i = pe("pmi" === t("[name=meeting_type]:checked").val());
                      (e = i.childParams.options.value),
                        "auto" === e ? (n = i.childParams.auto.value) : "manu" === e && (n = i.childParams.manu.value);
                    }
                    null === n && (n = -100);
                    return { waiting_room_new: { enable: i, type: e, join_time: n } };
                  })()
                ),
              (e.allowDenyRes = { defaultVal: !!t("#setting_allowDeny").prop("checked"), selRegion: v.selRegion, selType: v.selType });
            let { enableInterpretation: g, interpretation: h } = (function () {
              let e = t("#zoom-setting .interpretation:visible"),
                n = !!e.find("#setting_option_interpretation").prop("checked"),
                i = [];
              n &&
                e.find(".edit-interpretation-line").each(function (e, n) {
                  let o = t(n),
                    a = o.find(".interpretation-email").val();
                  if (a) {
                    let t, e;
                    o.find(".interpretation-sel-cont").each(function (n, i) {
                      if (i.zoomSelectObj) {
                        let { id: o, extData: a } = i.zoomSelectObj.getSelectedResult();
                        0 === n ? (t = o) : (e = o);
                      }
                    }),
                      t && e && i.push({ email: a, firstLanguage: t, secondLanguage: e });
                  }
                });
              return (i = JSON.stringify(i)), { enableInterpretation: n, interpretation: i };
            })();
            return (e.enableInterpretation = g), (e.interpretation = h), e;
          }
          function R(e) {
            D({ type: "sync", info: {} }),
              chrome.runtime.sendMessage({ type: "getZoomToken" }, function (o) {
                let a = o.zoom_config_pmi_saved_pwd,
                  s = o.zoom_config_pmi,
                  l = o.meetingPwdSettingsMap;
                var d, c, m, p;
                (h = o),
                  o.token &&
                    (o.fte || o.showSetting
                      ? t.modal(
                          t(
                            `\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog intact hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog" >\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="setting_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">\n\t\t\t\t\t\t\t\t\t\t<div class="schedule form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label">Schedule For</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width:200px;" class="schedule-for-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="meetingchat form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Meeting Chat</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row pmc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_pmc" name="setting_option_pmc" />Enable Continuous Meeting Chat</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pmcTip" info="${H.tips[43]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc">${H.tips[42]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="sub-options addExternalUser">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="pmc_invite_external_user" name="pmc_invite_external_user" />Automatically add invited external users</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="meetingtype form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Meeting ID</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Meeting Type">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="meeting_type_normal" name="meeting_type" value="onetime" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="meeting_type_normal"><span>Generate automatically</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline pmi">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="meeting_type_pmi" name="meeting_type" value="pmi">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="meeting_type_pmi"><span>Personal Meeting ID <span class="pmi_number"></span></span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${H.tips[22]}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="template form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label">Template</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="template-sel-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">You used an admin meeting template. <span class="view-template-btn">View Template Details</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="security-box form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Security</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Security">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="security-option">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword">Passcode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pwdTip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc pwd"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0;padding-left:20px;">${H.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_waitingroom">Waiting Room\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc wr">${H.tips[28]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_waitingroom2" name="setting_option_waitingroom2" /><span>Waiting Room</span>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip wr2Tip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row waitingroom2-option" role="group" aria-label="Waiting Room" style="padding-left:20px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_auto" name="option_waitingroom2" value="auto" /><span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id="auto_prior_start" class="zm-select-box"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_manu" name="option_waitingroom2" value="manu" /><span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id="manu_prior_start" class="zm-select-box"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row authentication"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="error-msg"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${H.tips[21]}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="encryption-box form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row encryption-option" role="group" aria-label="Encryption">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_enhanced" name="option_encryption" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="setting_option_enhanced">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Enhanced encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip e2eTip enhanced" info="${H.tips[24]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="setting_option_e2e" name="option_encryption" value="1" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="setting_option_e2e">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>End-to-end encryption</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip e2eTip e2e" info="${H.tips[25]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="zm-alert" role="alert">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<close></close>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="description">${H.tips[23]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="video form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Video</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Host</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Host">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_on" name="option_video_host" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_host_off" name="option_video_host" value="off"/>Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="video-label control-label">Participant</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video-controls-label controls" role="group" aria-label="Participant">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_on" name="option_video_participants" value="on" checked="checked"/>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="option_video_participant_off" name="option_video_participants" value="off" />Off</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="audio form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Audio</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls" role="group" aria-label="Audio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="telephony" name="option_audio" id="option_audio_telephony">Telephone</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline voip"><input type="radio" value="voip" name="option_audio" id="option_audio_voip">Computer Audio</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="both" name="option_audio" id="option_audio_both">Telephone and Computer Audio</label> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="radio-inline"><input type="radio" value="other" name="option_audio" id="option_audio_3rd">3rd Party Audio</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="options form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label">Options</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div controls">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="zm-alert jbh-moved-alert" role="alert">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<close></close>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="description"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirereg">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_requirereg" name="setting_option_requirereg" />Require registration</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row jbh">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_jbh" name="setting_option_jbh" /><label for="setting_option_jbh">Allow participants to join</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="prior-start-cont"><div class="JBH-prior-start-cont"></div><label for="setting_option_jbh">before start time</label></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="default-text" for="setting_option_jbh">anytime</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row qa">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_qa" name="setting_option_qa" />Q&A</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row uponentry">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_uponentry" name="setting_option_uponentry" />Mute participants upon entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row unmute_all">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="unmute_all" name="unmute_all" /><span>Request permission to unmute participants</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row watermark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_watermark" name="setting_option_watermark" />Add watermark that identifies the viewing participant\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row audiomark">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_audiomark" name="setting_option_audiomark" />Add audio watermark that identifies the participants\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row recording">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_recording" name="setting_recording" /><span>Automatically record meeting</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="recording-radio" role="group" aria-label="Record" style="padding-left:20px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row pubcal">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_public_cal" name="setting_option_public_cal" />Show in Public Event List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row focusMode">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_focusMode" name="setting_option_focusMode" />Enable focus mode when meeting starts</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row dcRegions">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_enableDC" name="setting_option_enableDC" /><span>Enable additional data center regions for this meeting</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="dc-group" role="group" aria-label="optional data center" style="padding-left:20px;"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top: 5px; margin-bottom: 0px;padding-left:20px;"></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row allowDeny">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_allowDeny" name="setting_allowDeny" /><span>Approve or block entry to users from specific countries/regions</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="regionRes allow">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOnly allow users from: <span class="sel-region-list"></span> <a href="" class="edit-region-button">Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="regionRes deny">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlock users from: <span class="sel-region-list"></span> <a href="" class="edit-region-button">Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="warning">${H.tips[21]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row joinurl">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_joinurl" name="setting_option_joinurl" />Include Invite Link in location field</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row interpretation">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_interpretation" name="setting_option_interpretation" />Enable Interpretation</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc">${H.tips[40]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="edit-interpretation-cont"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="error-msg-cont"><div class="error-msg"></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="" role="button" class="add-interpretation-btn">Add Language Interpreter</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="max-interpretation-line-tip">${H.tips[41]}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="altnativehost form-group clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="left-label control-label" for="alternative_host">Alternative hosts</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 400px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" id="alternative_host" name="alternative_host" aria-label="Alternative hosts" placeholder="john@company.com" value="" class="form-control" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row host-edit-poll">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline"><input type="checkbox" id="host_edit_poll" name="host_edit_poll" />Allow alternative hosts to add or edit polls</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip editPollTip" info="${H.tips[31]}"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span for="alternative_host" class="has-error help-block alternative_host_error" style="display: none;">${H.tips[0]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style="display:none;" id="locktip">${H.tips[1]}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue</button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t\t<i class="busy zm-busy24" style="display:none;"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`
                          ),
                          t.extend(
                            {},
                            {
                              overlayId: "zm-setting-dialog-overlay",
                              containerId: "zm-setting-dialog-container",
                              minHeight: 553,
                              escClose: !0,
                              fixed: !1,
                              persist: !0,
                              minWidth: 850,
                              maxWidth: 860,
                              close: !0,
                              overlayClose: !1,
                              onShow: function (i) {
                                (u.$authentication = t("#zoom-setting .control-row.authentication")),
                                  D({ type: "loadZoomOptions" }),
                                  (n = new x.Z({
                                    el: t("#zoom-setting #meeting_pwd").get(0),
                                    rule: l,
                                    jquery: Q,
                                    blurCallback: function () {
                                      Y(1);
                                    },
                                    startInputCallback: function () {
                                      J(2);
                                    },
                                    conformRuleCallback: function () {
                                      J(1);
                                    }
                                  }));
                                t("#zoom-setting .password-type");
                                let o = t("#zoom-setting .security-box"),
                                  a = t("#zoom-setting .requirepwd"),
                                  s = null;
                                t("#zoom-setting .submit").on("click", function (n) {
                                  if ((n.stopPropagation(), !this.waitCheckPwd))
                                    if ((t("#zoom-setting #alternative_host").trigger("blur"), o.find(".error-msg.showme").is(":visible")))
                                      o[0].scrollIntoView();
                                    else if (
                                      !(function () {
                                        let e = t("#zoom-setting .interpretation.beencheck"),
                                          n = !1;
                                        if (
                                          e.is(":visible") &&
                                          (e.find(".edit-interpretation-line.error-state").each(function (e, i) {
                                            let o = t(i);
                                            if ((At(o, !0), o.hasClass("error-state"))) return i.scrollIntoView(), (n = !0), !1;
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
                                          Y(2);
                                      } else W();
                                }),
                                  t("#zoom-setting #setting_option_needpassword").on("change", function () {
                                    t(this).prop("checked") || !1 ? a.addClass("sel") : a.removeClass("sel"), he();
                                  }),
                                  t("#zoom-setting #setting_option_waitingroom").on("change", function () {
                                    he();
                                  }),
                                  t("#zoom-setting #alternative_host").on("blur", function (e) {
                                    var n = t(this);
                                    n.val(n.val().trim());
                                  });
                                let d = t("#zoom-setting #alternative_host").parent(),
                                  c = t("#zoom-setting .altnativehost"),
                                  m = t("#zoom-setting .host-edit-poll");
                                t("#zoom-setting #alternative_host").on("keyup", function (e) {
                                  if (t(this).val().length > 0)
                                    window.setTimeout(function () {
                                      g.validateAltHost();
                                    }, 1e3),
                                      c.hasClass("show-edit-poll") &&
                                        !m.hasClass("haslock") &&
                                        d.hasClass("disable-state") &&
                                        (t("#host_edit_poll").prop("disabled", !1), d.removeClass("disable-state"));
                                  else {
                                    let e = t("#alternative_host").parent(),
                                      n = e.find(".alternative_host_error");
                                    e.removeClass("has-error"),
                                      n.hide(),
                                      c.hasClass("show-edit-poll") &&
                                        !m.hasClass("haslock") &&
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
                                let p = !1;
                                t("#zoom-setting [name=meeting_type]").on("change", function () {
                                  let e = t("#zoom-setting #meeting_type_pmi").prop("checked") || !1;
                                  e !== p &&
                                    ((p = e),
                                    e
                                      ? (t("#zoom-setting #setting_option_requirereg").prop("checked", !1).trigger("change"),
                                        t("#zoom-setting #setting_form").addClass("pmi"))
                                      : t("#zoom-setting #setting_form").removeClass("pmi"),
                                    se(!0, !0),
                                    Kt(!0),
                                    oe(!0, !0),
                                    Jt(!0),
                                    Gt(e),
                                    Rt(e),
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
                                                    "cloud" === Mt("autoRec").childParams.autoRecordingSubSelected.value &&
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
                                            t("[name=meeting_type]:checked").val();
                                            let e = t(".audio");
                                            if (e.hasClass("on-e2e-state")) {
                                              e.removeClass("on-e2e-state");
                                              let n = r.zoom_config_audio;
                                              t("[name=option_audio][value=" + n + "]").prop({ checked: !0 });
                                            }
                                            t("#zoom-setting .altnativehost").removeClass("on-e2e-state");
                                            let n = t(".recording");
                                            n.length && (n.removeClass("on-e2e-state e2e-hide"), Gt());
                                            let i = t(".jbh");
                                            i.length && i.removeClass("on-e2e-state");
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
                                        let e = "pmi" === t("[name=meeting_type]:checked").val(),
                                          n = t("#zoom-setting .waitingroom2");
                                        if (n.length) {
                                          n.removeClass("on-e2e-state"),
                                            ue(e, !0),
                                            ce(
                                              r.security,
                                              e,
                                              t("#zoom-setting #setting_option_needpassword").prop("checked"),
                                              t("#zoom-setting #setting_option_authentication").is(":visible") &&
                                                t("#zoom-setting #setting_option_authentication").prop("checked")
                                            );
                                        }
                                        let i = t("#zoom-setting .jbh-moved-alert");
                                        i.length && i.show();
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
                                      V(t(this), !0);
                                    })
                                    .on("mouseleave", function (e) {
                                      V(t(this), !1);
                                    }),
                                  t("#zoom-setting .zoom-info-tip").on("click", function (e) {
                                    V(t(this), !0, 0);
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
                                  i && i.destroy(),
                                  _ && (_.destroy(), (_ = null)),
                                  y && (y.destroy(), (y = null)),
                                  z && (z.destroy(), (z = null)),
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
                      : o.requireTracking || o.inputManualPwd
                      ? t.modal(
                          t(
                            ((d = o.requireTracking),
                            (c = o.inputManualPwd),
                            (m = o.pwdVoidable),
                            (p =
                              '\n\t\t<div id="zoom-setting" class="zoom-dialog modaldialog mixed hideme" autocomplete="off">\n\t\t\t<div class="modal-dialog" role="dialog">\n\t\t    \t<div class="modal-content">\n\t\t        \t<div class="modal-header">\n\t\t\t\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>\n\t\t\t\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>\n\t\t        \t</div>\n\t\t        \t<div class="modal-body">\n\t\t\t\t\t\t<div class="modal-body-container">\n\t\t\t\t\t\t\t<div class="content_container">\n\t\t\t\t\t\t\t\t<form role="form" id="tracking_form" class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-body">'),
                            c &&
                              ((p += '\t\t\t\t\t<div class="security-box poppwd form-group clearfix">'),
                              (p += m
                                ? `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Security</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="control-row requirepwd manual sel">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="setting_option_needpassword" name="setting_option_needpassword" checked />Passcode\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0;">${H.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`
                                : `\n\t\t\t\t\t\t\t\t\t\t\t<label class="left-label control-label" for="meeting_pwd">Security</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right-div">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="requirepwd manual sel control-row">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPasscode\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="password-type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" value="" name="meeting_pwd" maxlength="10" style="width: 126px;display:inline-block;vertical-align: top;" id="meeting_pwd" placeholder="Enter Passcode" aria-label="Require meeting passcode" autocomplete="off">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="zoom-info-tip pwdTip"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="usability-desc pwd"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="has-error help-block" style="margin-top:5px;margin-bottom:0px; margin-left:0;">${H.tips[6]}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`),
                              (p += "\t\t\t\t\t</div>")),
                            d &&
                              (p +=
                                '\t\t\t\t\t<div class="trackingcodes">\n\t\t\t\t\t\t\t\t\t\t\t<div class="trackitems"></div>\n\t\t\t\t\t\t\t\t\t\t</div>'),
                            p +
                              '\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t<button class="btn btn-primary submit"> Continue </button>\n\t\t\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>')
                          ),
                          t.extend(
                            {},
                            {
                              overlayId: "zm-track-dialog-overlay",
                              containerId: "zm-track-dialog-container",
                              minHeight: 520,
                              escClose: !0,
                              fixed: !1,
                              persist: !0,
                              minWidth: 670,
                              close: !0,
                              overlayClose: !1,
                              onShow: function (i) {
                                t("#zoom-setting .password-type");
                                let r = t("#zoom-setting .requirepwd"),
                                  d = t("#zoom-setting #meeting_pwd");
                                d.length && s && a && d.val(a),
                                  (n = new x.Z({
                                    el: d.get(0),
                                    rule: l,
                                    jquery: Q,
                                    blurCallback: function () {
                                      Y(1);
                                    },
                                    startInputCallback: function () {
                                      J(2);
                                    },
                                    conformRuleCallback: function () {
                                      J(1);
                                    }
                                  })),
                                  o.embedPasscode
                                    ? (r.find(".usability-desc.pwd").html(H.tips[26]), r.find(".pwdTip").attr("info", H.tips[29]))
                                    : (r.find(".usability-desc.pwd").html(H.tips[27]), r.find(".pwdTip").remove());
                                let c = t("#zoom-setting .modal-body");
                                c.height(c.get(0).getBoundingClientRect().height);
                                let u = null;
                                t("#zm-track-dialog-container #zoom-setting .submit").on("click", function (n) {
                                  if ((n.stopPropagation(), !this.waitCheckPwd))
                                    if (((this.$btn = e), t("#zoom-setting #meeting_pwd").is(":visible"))) {
                                      if (r.hasClass("has-error")) return void t("#zoom-setting #meeting_pwd").focus();
                                      (this.waitCheckPwd = !0),
                                        u && clearTimeout(u),
                                        (u = setTimeout(() => {
                                          (this.waitCheckPwd = !1), (u = null);
                                        }, 3e3)),
                                        Y(3);
                                    } else U();
                                }),
                                  t("#zoom-setting #setting_option_needpassword").on("change", function () {
                                    t("#zoom-setting #setting_option_needpassword").prop("checked") || !1
                                      ? r.addClass("sel")
                                      : r.removeClass("sel");
                                  });
                                let m = o.trackfields;
                                m && m.length > 0 && qt(m),
                                  t("#zoom-setting .zoom-info-tip")
                                    .on("mouseover click", function (e) {
                                      V(t(this), !0);
                                    })
                                    .on("mouseout", function (e) {
                                      V(t(this), !1);
                                    }),
                                  t("#zoom-setting .zoom-info-tip").on("click", function (e) {
                                    V(t(this), !0, 0);
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
                      : (D({ type: "schedule", info: { scheduleTime: et(), topic: _t(), timezone: rt() } }), zt(e)));
              });
          }
          let q,
            L,
            I,
            A = null;
          function V(e, n, i = 800) {
            e &&
              (A && (clearTimeout(A), (A = null)),
              (A = n
                ? setTimeout(function () {
                    e.hasClass("updateDom") ||
                      (function (t) {
                        let e = t.attr("info");
                        if (e) {
                          let n = `\n\t\t\t\t<div class="zoom-info-tip-pop">\n\t\t\t\t\t<div class="content">${e}</div>\n\t\t\t\t\t<div class="pop-arrow"></div>\n\t\t\t\t</div>`;
                          t.html(n).attr("info", null).addClass("updateDom");
                        }
                      })(e),
                      St(e.find(".zoom-info-tip-pop")),
                      (function (e) {
                        let n = e.find(".zoom-info-tip-pop"),
                          i = e.offset().top - t("#zoom-setting .modal-body").offset().top;
                        i - 50 < n.height() ? n.addClass("turn") : n.removeClass("turn");
                      })(e),
                      (A = null);
                  }, i)
                : setTimeout(function () {
                    e.hasClass("updateDom") && Ft(e.find(".zoom-info-tip-pop")), (A = null);
                  }, 200)));
          }
          function U(e) {
            let n = t("#zm-track-dialog-container #zoom-setting .submit");
            if (((n[0].waitCheckPwd = !1), void 0 !== e && !e)) return void t("#zoom-setting #meeting_pwd").focus();
            let i = h,
              o = n[0].$btn;
            if (Lt()) {
              let e = t("#zoom-setting #meeting_pwd"),
                n = "schedule",
                a = {
                  scheduleTime: et(),
                  topic: _t(),
                  trackfields: It(),
                  timezone: rt(),
                  securityRes: { pwd: e.val() ? e.val().trim() : "" }
                };
              i.zoom_config_pmi &&
                e.is(":visible") &&
                (i.pwdVoidable && ((n = "saveOptionsAndQuickSchedule"), (a.mandatorypwd = !0)),
                e.val().trim() != i.zoom_config_pmi_saved_pwd && ((n = "saveOptionsAndQuickSchedule"), (a.changepwd = !0))),
                D({ type: n, info: a }),
                t.modal.close(),
                zt(o);
            }
          }
          function W(e) {
            let n = t("#zoom-setting .submit");
            if (((n[0].waitCheckPwd = !1), void 0 !== e)) {
              if (!e) return void t("#zoom-setting #meeting_pwd").trigger("focus");
              t("[name=meeting_type][value=pmi]").prop("checked") && t("#zoom-setting .requirepwd").addClass("manual");
            }
            if (
              !(function () {
                if ("object" == B.type(r)) {
                  if (Object.keys(r).length) return !0;
                }
                return !1;
              })()
            )
              return void console.log("Setting panel initialization failed. Please refresh the page and try again.");
            let i = n[0].$btn;
            g.ajaxValidAltHost() &&
              (function () {
                if (u.$zmEditDomainModule) {
                  let e = u.$zmEditDomainModule.find(".btn-Save");
                  if (e.is(":visible") && !e.prop("disabled"))
                    return g.showHasErrorMsg(t("#zoom-setting #auth_domain_info"), H.errors[17]), !1;
                }
                return !0;
              })() &&
              g.validateAltHost() &&
              Lt() &&
              g.validateEnableDC() &&
              (g.collateUserInput(),
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
                        e && e.status && (D({ type: "saveOptionsAndSchedule", info: N() }), t.modal.close(), zt(i));
                      else {
                        let n = t("#alternative_host").parent(),
                          i = n.find(".alternative_host_error");
                        n.addClass("has-error"), t("#alternative_host").trigger("focus"), i.text(e.errorMessage).show();
                      }
                    }
                  ))
                : (D({ type: "saveOptionsAndSchedule", info: N() }), t.modal.close(), zt(i)));
          }
          function Z(e) {
            chrome.runtime.sendMessage({ type: "getZoomToken" }, function (n) {
              var i;
              n.token &&
                (n.requireTracking
                  ? t.modal(
                      t(
                        ((i = []).push('<div id="zoom-setting" class="zoom-dialog modaldialog hideme" autocomplete="off">'),
                        i.push('   <div class="modal-dialog" role="dialog">'),
                        i.push('      <div class="modal-content">'),
                        i.push('         <div class="modal-header">'),
                        i.push(
                          '\t\t\t<button type="button" class="close simplemodal-close" aria-describedby="myModalLabel" aria-label="close"></button>'
                        ),
                        i.push('\t\t\t<h4 class="modal-title" id="myModalLabel" style="text-align:left;">  Schedule Options </h4>'),
                        i.push("        </div>"),
                        i.push('         <div class="modal-body">'),
                        i.push('\t\t\t<div class="modal-body-container">'),
                        i.push('\t\t\t\t<div class="content_container">'),
                        i.push('\t\t\t\t\t <form role="form" id="tracking_form" class="form-horizontal">'),
                        i.push('\t\t\t\t\t\t<div class="form-body">'),
                        i.push('\t\t\t\t\t\t\t<div class="trackingcodes"><div class="trackitems"></div></div>'),
                        i.push("\t\t\t\t\t\t</div>"),
                        i.push("\t\t\t\t\t </form>"),
                        i.push("\t\t\t\t</div>"),
                        i.push("\t\t\t</div>"),
                        i.push("         </div>"),
                        i.push('         <div class="modal-footer">'),
                        i.push('\t\t\t\t<button class="btn btn-primary submit"> Continue </button>'),
                        i.push('\t\t\t\t<button type="button" class="btn btn-default simplemodal-close"> Cancel</button>'),
                        i.push("         </div>"),
                        i.push("      </div>"),
                        i.push("   </div>"),
                        i.push("</div>"),
                        i.join(""))
                      ),
                      t.extend(
                        {},
                        {
                          overlayId: "zm-track-dialog-overlay",
                          containerId: "zm-track-dialog-container",
                          minHeight: 520,
                          escClose: !0,
                          fixed: !1,
                          persist: !0,
                          minWidth: 670,
                          close: !0,
                          overlayClose: !1,
                          onShow: function (i) {
                            t("#zm-track-dialog-container #zoom-setting .submit").on("click", function () {
                              Lt() && (D({ type: "schedulepac", info: { trackfields: It() } }), t.modal.close(), zt(e));
                            });
                            let o = n.trackfields;
                            o && o.length > 0 && qt(o),
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
                  : (D({ type: "schedulepac", info: { trackfields: "" } }), zt(e)));
            });
          }
          function Y(e) {
            if (n) {
              let i = n.getPassword();
              if (i === q && t("#zoom-setting .requirepwd").hasClass("has-error")) return;
              if (((q = i), h.meetingPwdSettingsMap.enhanceDetectionRule && i)) D({ type: "remoteCheckPwd", info: { pwd: i, channel: e } });
              else {
                let { res: t, msg: i, errortype: o } = n.checkRules();
                G(t, i, o, e);
              }
            } else 2 === e ? W(!1) : 3 === e && U(!1);
          }
          function G(e, n, i, o) {
            e || !n || (1 === o && 2 === i)
              ? J()
              : (function (e, n) {
                  let i = t("#zoom-setting .requirepwd");
                  i.addClass("has-error").attr("errortype", n);
                  let o = i.find(".has-error");
                  o.text(e).addClass("showme"), 1 === n ? o.attr("role", "alert") : o.attr("role", null);
                })(n, i),
              2 === o ? W(e) : 3 === o && U(e);
          }
          function J(e) {
            let n = t("#zoom-setting .requirepwd");
            n.hasClass("has-error") &&
              ((e && e != n.attr("errortype")) ||
                (n.removeClass("has-error").attr("errortype", null), n.find(".has-error").removeClass("showme").attr("role", null)));
          }
          function K() {
            t("#zoom-video-sec").length && (t("#zoom_schedule_button_wrapper").show(), kt());
          }
          function X() {
            let e = "";
            t("#zoom-video-sec").length
              ? t("#zm-setting-dialog-container").length || (e = t("#zoom_schedule_button"))
              : (e = t("div.quick-schedule content>a")),
              e.length && e.trigger("click");
          }
          function tt(t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
            return null == e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
          }
          function et() {
            var t = nt();
            return (t = t ? g.toISOString(t) : "");
          }
          function nt() {
            let t = w.parseTime(w.getStartTimeNode().val());
            return it(w.parseStartDate(), t);
          }
          function it(t, e) {
            let n;
            if (-1 !== t[0] && -1 !== e[0]) {
              let i = g.paddingLeft(t[0], 4),
                o = g.paddingLeft(t[1], 2),
                a = g.paddingLeft(t[2], 2),
                s = g.paddingLeft(e[0], 2),
                l = g.paddingLeft(e[1], 2);
              n = new Date(i + "-" + o + "-" + a + "T" + s + ":" + l + ":00.000Z");
            }
            return n;
          }
          function ot(t) {
            let e = st(t.split("/")[0]);
            return g.toISOString(e);
          }
          function at(t) {
            let e = t.split("/");
            return (st(e[1]) - st(e[0])) / 6e4;
          }
          function st(t) {
            let e = [0, 4, 6, 11, 13, 15],
              n = [];
            for (let i = 0; i < e.length - 1; i++) n.push(t.substring(e[i], e[i + 1]));
            let i = new Date(n[0] + "-" + n[1] + "-" + n[2] + ":" + n[3] + ":" + n[4] + "Z");
            if ((o = i) instanceof Date && !isNaN(o)) return i;
            var o;
            sendLogToBackend({
              msgType: 6,
              msg: {
                msg: "Google calendar time format changed, unable to complete conversion!, method name: calendarTimeConver",
                str: t,
                res: i
              },
              operaType: 4
            });
          }
          function lt() {
            var e = 60;
            if (w.getAllDayNode().prop("checked")) return 1440;
            let n = (function () {
                let t = w.parseTime(w.getEndTimeNode().val());
                return it(w.parseEndDate(), t);
              })(),
              i = nt();
            if (n && i) e = (n - i) / 6e4;
            else {
              var o = w.getStartTimeNode(),
                a = w.getEndTimeNode();
              if (o.length && a.length) {
                var s,
                  l,
                  r = w.parseTime(t.trim(o.val())),
                  d = w.parseTime(t.trim(a.val()));
                -1 !== r[0] && -1 !== d[0] && ((s = r[0]), (l = r[1]), (e = 60 * (d[0] - s) + (d[1] - l)));
              }
            }
            return e <= 0 && (e = 60), e > 1440 && (e = 1440), e;
          }
          function rt() {
            let t = w.getDefTimezone(),
              e = w.getStartTimezoneId(),
              n = w.getEndTimezoneId(),
              i = e.text() || "",
              o = n.text() || "",
              a = null,
              s = "";
            return (
              "" == i && "" == o
                ? (s = dt(t))
                : (i && ((a = e.attr("timezoneid")), a && (s = dt(a)), s || (s = dt(jt(i)))),
                  !s && o && ((a = n.attr("timezoneid")), a && (s = dt(a)), s || (s = dt(jt(o))))),
              s
            );
          }
          function dt(t) {
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
          function ct() {
            var e = t("#zoom_schedule_meeting_url");
            if (!e.length) {
              var n = w.getButtonsContainer();
              n.length &&
                (e = t('<a id="zoom_schedule_meeting_url" role="button" class="btn-meeting hideme" target="_blank"></a>').appendTo(n));
            }
            return e;
          }
          function ut() {
            return t("#zoom_schedule_button");
          }
          function mt() {
            return !(!ut().length && !t("#zoom_schedulepac_button").length);
          }
          function pt() {
            var t = !0;
            return w.getTopicNode() && w.getTopicNode().length > 0 && (t = !1), t;
          }
          function gt() {
            var t = w.getDescNode();
            return !(!t || !t.length);
          }
          function ht() {
            var t;
            w.getDescNode().length && (t = vt(w.getDescText()));
            var e = w.getWhereNode();
            return !t && e.length && (t = vt(w.getValueForWhereNode(e[0]))), t;
          }
          function ft() {
            var t,
              e = w.getPopupDescNode();
            e.length && (t = vt(e.html().replace(/<br>/g, " ")));
            var n = w.getPopupLocationNode();
            return !t && n.length && (t = vt(n.text())), t;
          }
          function vt(t) {
            if (!t || "string" !== B.type(t)) return;
            let e;
            t = t.replace(/&amp;/g, "&");
            let n = 5 == H.envIndex ? "-x.de" : ".de",
              i = new RegExp(
                `(?<!=)https?:\\/\\/[\\w\\-]*\\.?(${H.multiVersion[0]}${H.runEnv[1]})(.us|.com.cn|.com|.cn|${n})\\/([jswm]|pac\\/join)\\/([\\w\\-.]{8,})(\\?\\w+=[^ <|\\n\\"]*)?`,
                "ig"
              ).exec(t);
            return i && i.length && (e = { number: i[4], url: i[0], type: "pac/join" === i[3] ? "pac_meeting" : "meeting" }), e;
          }
          function bt() {
            var e = w.getWhereNode();
            e && e.length > 0 && e[0].dispatchEvent(new Event("input", { bubbles: !0 }));
            var n = w.getSaveBtnNode();
            if (!n.data("click-event-registered")) {
              var i = w.getTopicNode();
              i.length && i.attr("maxlength", 200),
                n.data("click-event-registered", !0),
                n.off("click").on("click", function () {
                  t(this);
                  t("#zoom_repeat_edit_flag").text("0"), t("#zoom_recurring_edit_flag").text("");
                  var e = ht();
                  if (e) {
                    var n = "1" === t("#YPCqFe #zm-usepmi").text(),
                      i = t("#zoom-quick2adv-number").text(),
                      o = n && i.length > 8 ? i : e.number;
                    let d = t("#YPCqFe #zm-hidden-eid").text() || "";
                    var a = { number: o, zm_eid: d, event_baseid: yt(d), topic: _t() },
                      s = nt();
                    if (s) {
                      var l = lt();
                      t.extend(a, { startTime: g.toISOString(s), duration: l });
                    } else t.extend(a, { startTime: "", duration: 0 });
                    var r = w.isRepeat();
                    t.extend(a, { isRepeat: r, timezone: rt(), zoomrooms: w.getZoomRooms(), isPrivateEvent: w.getIsPrivateEvent() }),
                      (s || r) && D({ type: "update", info: a }),
                      (a.startTime && a.timezone && a.topic) || t("#zoom_repeat_edit_flag").text("1");
                  }
                  t("#zoom_edit_event_flag").text("1");
                });
            }
            t("[role=menuitem][jsname=j7LFlb] div[jsname=VkLyEc]")
              .parent()
              .off("click")
              .on("click", function () {
                var t = ht();
                t && t.number;
              });
          }
          function _t() {
            return w.getTopicNode().val() || "";
          }
          function yt(t) {
            let e = "";
            try {
              e = atob(t).split(" ")[0];
            } catch (e) {
              sendLogToBackend({ msgType: 4, msg: { msg: "convert Eid to Baseid failed, method name: convertEidToBaseid", eid: t } });
            }
            return e;
          }
          function zt(e) {
            (e = e || t("#zoom_schedule_button")).length && (e.prop("disabled", !0), e.addClass("zoom-loading"));
          }
          function kt() {
            let e = t(".zoom-button-container .zoom-loading");
            e.length && (e.prop("disabled", !1), e.removeClass("zoom-loading"));
          }
          function wt(e) {
            var n = ht();
            if (n) {
              if (t("#zoom_schedule_meeting_url + i.icon-trash").length <= 0) {
                var i = vt(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
                (i && i.number && i.number == n.number) ||
                  e.parent().append('<i class="icon-trash" title="Remove Zoom Meeting" aria-label="Remove Zoom Meeting"></i>');
              }
              t("#zoom_schedule_meeting_url + i.icon-trash").off(),
                t("#zoom_schedule_meeting_url + i.icon-trash").on("click", function (e) {
                  if (!this.lock && n && n.number) {
                    let e = "1" === t("#YPCqFe #zm-usepmi").text(),
                      i = t("#zoom-quick2adv-number").text(),
                      o = e && i.length > 8 ? i : n.number,
                      a = yt(t("#YPCqFe #zm-hidden-eid").text() || "");
                    sendLogToBackend({ msgType: 2, msg: { msg: "del08", meetingNumber: o, baseid: a }, operaType: 1 }),
                      D({ type: "icon_delete", info: { number: o, event_baseid: a } }),
                      t(this).addClass("loading"),
                      (this.lock = !0);
                  }
                });
            }
          }
          function xt(e) {
            var n = vt(t("#xRTCIn #xDetDlgVideo[data-details]").attr("data-details") || "");
            if (n && n.url) {
              w.setWhereNodeValue(n.url);
              var i = t("#xRTCIn a[href*='/script.google.com/']").attr("href") || "";
              w.setDescNodeValue(n.url + '<br><br><a href="' + i + '" target="_blank">Joining Instructions</a>'),
                Te(n.url),
                t("#zoom_schedule_meeting_url").show(),
                t("#zoom_schedule_button_wrapper > *").hide(),
                t("#zoom_schedule_meeting_url").show(),
                t("#zoom-quick2adv-number").length <= 0
                  ? t("body").append('<div id="zoom-quick2adv-number" style="display:none;">' + n.number + "</div>")
                  : t("#zoom-quick2adv-number").text(n.number);
            } else R(e);
          }
          function Ct(e) {
            t("#YPCqFe #zm-usepmi").empty(), t("#zoom-quick2adv-number").empty(), w.removeSession();
            var n = w.getButtonsContainer();
            n.addClass("zoom-button-container");
            var i = t("<button>", { id: "zoom_schedulepac_button", html: "Personal Audio Conference", class: "btn-pac" });
            t("#zoom_schedule_button_wrapper > #zoom_schedulepac_button").length > 0 &&
              i.off("click").on("click", function () {
                Z();
              });
            var o = t("<button>", { id: "zoom_schedule_button", html: "Make it a Zoom Meeting", class: "btn-meeting" });
            0 == t("#zoom_schedule_button_wrapper > #zoom_schedule_button").length &&
              (n.prepend(t('<div id="zoom_schedule_button_wrapper"></div>').prepend(o)),
              o.off("click").on("click", function () {
                xt(o);
              })),
              t("#zoom_schedule_meeting_url").hide(),
              t("#zoom_schedule_button_wrapper > *").show(),
              t("#zoom_schedule_meeting_url + i.icon-trash").remove(),
              w.getEditDetailDOM().removeClass("zoom-meeting-state");
          }
          function Dt() {
            let e = dt(jt(w.getQuicTimezoneText()));
            return (
              e ||
              ((e = dt(jt(t("#yDmH0d div[jsname=xpDKHf] div[jsname=oapyFe]").attr("data-tooltip")))),
              e || ((e = dt(t("#yDmH0d div[jsname=xpDKHf] div[jsname=T7keRc]").attr("data-starttimezone"))), e || dt(w.getDefTimezone())))
            );
          }
          function jt(t) {
            if (0 === b) return "";
            if ((b || (b = w.getGoogleTimezonedata()), t && Array.isArray(b)))
              try {
                let e = b[0];
                if (Array.isArray(e) && e.length)
                  for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    if (Array.isArray(i) && i[1] == t) return i[0];
                  }
              } catch (t) {}
            return "";
          }
          function Tt() {
            D({ type: "callPopupLogin" });
          }
          function Et(e, n = "success") {
            var i;
            (L && L.length) || ((i = '\n\t\t<div id="zoom-toast"></div>\n\t\t'), t("body").append(i), (L = t("#zoom-toast"))),
              L.removeClass("success warning failed").addClass(n),
              L.text(e),
              St(L),
              I && (clearTimeout(I), (I = null)),
              (I = setTimeout(function () {
                Ft(L);
              }, 5e3));
          }
          function St(t) {
            t.css({ display: "block" }),
              t.timeout && (clearTimeout(t.timeout), (t.timeout = null)),
              (t.timeout = setTimeout(function () {
                t.addClass("show"), (t.timeout = null);
              }, 10));
          }
          function Ft(t) {
            t.removeClass("show"),
              t.timeout && (clearTimeout(t.timeout), (t.timeout = null)),
              (t.timeout = setTimeout(function () {
                t.css({ display: "none" }), (t.timeout = null);
              }, 200));
          }
          function Pt() {
            let e = r.e2ee;
            if (e.support) {
              let n;
              (n = "pmi" === t("[name=meeting_type]:checked").val() ? e.pmiEnable : e.normalEnable),
                n
                  ? t("#setting_option_e2e").prop("checked", !0).trigger("change")
                  : t("#setting_option_enhanced").prop("checked", !0).trigger("change"),
                e.locked &&
                  (t("#setting_option_enhanced").parent().remove(), ye(t("#zoom-setting .encryption-option > .radio-inline"), !0));
            } else t("#zoom-setting .encryption-box").remove();
          }
          function Mt(e, n) {
            let i;
            return (
              "boolean" !== B.type(n) && (n = "pmi" === t("[name=meeting_type]:checked").val()),
              (i = n ? r?.pmiFeatures?.[e] : r?.meetingFeatures?.[e]),
              void 0 === i && (console.log("getDataFromFeatures failed, the key is: ", e), (i = {})),
              i
            );
          }
          function Nt() {
            let e = (function () {
                if (y?.isVisible) {
                  let { id: t, extData: e } = y.getSelectedResult();
                  if ("me" !== t) {
                    let e = r.zoom_assistants;
                    for (let n = 0; n < e.length; n++) {
                      let i = e[n];
                      if (i.id == t) return i.pmc;
                    }
                    return;
                  }
                }
                return Mt("pmc", !1);
              })(),
              n = t("#zoom-setting .meetingchat");
            "object" !== B.type(e) &&
              (e = {
                show: !1,
                value: !1,
                disabled: !1,
                childParams: { allowAutoAddInvitedExternalUsers: { show: !1, value: !1, disabled: !1 } }
              }),
              e.show ? n.removeClass("hideme") : n.addClass("hideme"),
              n.find("#setting_option_pmc").prop("checked", e.value).trigger("change");
            let i = e?.childParams?.allowAutoAddInvitedExternalUsers || {};
            i.show ? n.find(".addExternalUser").removeClass("hideme") : n.find(".addExternalUser").addClass("hideme"),
              n.find("#pmc_invite_external_user").prop("checked", !!i.value),
              i.disabled ? ye(n.find(".addExternalUser .checkbox-inline"), !0) : ye(n.find(".addExternalUser .checkbox-inline"), !1);
          }
          function Rt(e) {
            "boolean" !== B.type(e) && (e = "pmi" === t("[name=meeting_type]:checked").val());
            let n = Mt("qa", e);
            t("#setting_option_qa").prop("checked", n.value);
          }
          function qt(e) {
            if ((e || (e = r.zoom_trackfields), e && e.length > 0)) {
              let n = t("#zoom-setting .trackingcodes > .trackitems");
              n.empty(),
                t.each(e, function (e, i) {
                  let o = (function (t) {
                    if (!t || !t.trackField || !t.id) return "";
                    let e = `\n\t\t\t<div class="form-group clearfix">\n\t\t\t\t<label class="left-label">${E(t.trackField)}${
                      t.required ? "<i>*</i>" : ""
                    }</label>\n\t\t\t\t<div class="right-div">\n\t\t\t\t\t<div class="trackfield-sel-cont" trackitemid="${E(
                      t.id
                    )}" isrequired="${E(t.required)}"></div>\n\t\t\t\t\t${
                      t.required ? '<div class="error-msg showme" role="alert"></div>' : ""
                    }\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;
                    return e;
                  })(i);
                  if (o) {
                    n.append(o);
                    let e = i?.options,
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
                      (s.zoomSelectObj = new O.Z({
                        el: s,
                        defaultValue: i.mtValue,
                        dataList: l,
                        jquery: Q,
                        ariaLabel: l.length ? i.trackField + ",Select" : i.trackField,
                        scrollContainer: t("#zoom-setting .modal-body").get(0),
                        required: i.required,
                        inputMode: !0,
                        textInputMaxlength: 50,
                        allowClearInput: !0,
                        changeCallback: function (t) {
                          i.required && (t ? Vt(r) : Ot(H.errors[28], r));
                        }
                      }));
                  }
                });
            }
          }
          function Lt() {
            let e = t("#zoom-setting .trackingcodes .trackfield-sel-cont"),
              n = !1;
            return (
              e.is(":visible") &&
                e.each(function (e, i) {
                  let o = t(i),
                    a = o.parent();
                  if ("true" === o.attr("isrequired")) {
                    if (i.zoomSelectObj) {
                      i.zoomSelectObj.getSelectedResult() ? Vt(a) : Ot(H.errors[28], a);
                    }
                    if (a.hasClass("error-state")) return i.scrollIntoView(), (n = !0), !1;
                  }
                }),
              !n
            );
          }
          function It() {
            let e = t("#zoom-setting .trackingcodes .trackfield-sel-cont");
            if (e.is(":visible")) {
              let n = [];
              if (
                (e.each(function (e, i) {
                  if (i.zoomSelectObj) {
                    let e = i.zoomSelectObj.getSelectedResult();
                    e && n.push({ id: t(i).attr("trackitemid"), mtValue: e });
                  }
                }),
                n.length)
              )
                return JSON.stringify(n);
            }
            return "";
          }
          function At(t, e) {
            if (t?.length) {
              e || $t();
              let n = t.find(".interpretation-email").val();
              if (n) {
                if (!g.isEmail(n)) return void (e && Ot(H.errors[23], t));
                {
                  let e = (function (t) {
                    let e = [];
                    t?.length &&
                      t.find(".interpretation-sel-cont").each(function (t, n) {
                        if (n.zoomSelectObj) {
                          let { id: t, extData: i } = n.zoomSelectObj.getSelectedResult();
                          e.push(t);
                        }
                      });
                    return e;
                  })(t);
                  if (2 === e.length) {
                    if (!e[0] || !e[1]) return void Ot(H.errors[25], t);
                    if (e[0] === e[1]) return void Ot(H.errors[24], t);
                  }
                  let i = 0;
                  if (
                    (t
                      .parent()
                      .find(".interpretation-email")
                      .each(function (t, e) {
                        e.value === n && i++;
                      }),
                    i > 1)
                  )
                    return void Ot(H.errors[26], t);
                }
              }
              Vt(t);
            }
          }
          function $t() {
            if (Yt?.needCustomLangCheck) {
              let e = new Set();
              t("#zoom-setting .interpretation-sel-cont").each(function (t, n) {
                if (n.zoomSelectObj) {
                  let { id: t, extData: i } = n.zoomSelectObj.getSelectedResult();
                  t && i && !i.isFixed && e.add(t);
                }
              }),
                e.size > Yt?.maxCustomLanguagesValue
                  ? Ot(H.errors[27], t("#zoom-setting .interpretation .error-msg-cont"))
                  : Vt(t("#zoom-setting .interpretation .error-msg-cont"));
            }
          }
          function Ot(t, e) {
            ve(t, e, !0), e.addClass("error-state");
          }
          function Vt(t) {
            be(t), t.removeClass("error-state");
          }
          function Ht(e) {
            let n = t("#zoom-setting .interpretation"),
              i = n.find(".edit-interpretation-cont");
            i.append(
              '\n\t\t\t<div class="edit-interpretation-line">\n\t\t\t\t<input type="text" autocomplete="" name="" placeholder="john@company.com" aria-label="Interpreter email edit" class="interpretation-email form-control">\n\t\t\t\t<div class="interpretation-sel-cont"></div>\n\t\t\t\t<span class="link-symbol"></span>\n\t\t\t\t<div class="interpretation-sel-cont"></div>\n\t\t\t\t<a href="" class="remove-line-btn" aria-label="Remove Interpreter" role="button"></a>\n\t\t\t\t<div class="error-msg"></div>\n\t\t\t</div>\n\t\t'
            );
            let o = i.find(".edit-interpretation-line"),
              a = o.last();
            !(function (e, n) {
              if (n) {
                Yt = {
                  dataList: [],
                  firstLanguage: n?.childParams?.firstLanguage,
                  maxCustomLanguagesValue: n?.childParams?.maxCustomLanguagesValue,
                  needCustomLangCheck: !1
                };
                let e = n?.childParams?.fixedLanguageIdsArr,
                  i = null;
                Array.isArray(e) && e.length && (i = e);
                let o = 0;
                t.each(n.dataOptions, function (t, e) {
                  let n = e.id,
                    a = i && i.indexOf(n) > -1;
                  a || o++, Yt.dataList.push({ id: n, label: e.label, preIcon: e.ext, extData: { isFixed: a } });
                }),
                  o > Yt.maxCustomLanguagesValue && (Yt.needCustomLangCheck = !0);
              }
              Yt &&
                e.find(".interpretation-sel-cont").each(function (n, i) {
                  i.zoomSelectObj ||
                    (i.zoomSelectObj = new O.Z({
                      el: i,
                      defaultValue: 0 === n ? Yt.firstLanguage : "",
                      dataList: Yt.dataList,
                      jquery: Q,
                      ariaLabel: 0 === n ? "Select Source language" : "Select Target language",
                      placeholder: 0 === n ? "Select" : "Language",
                      multiParamResults: !0,
                      scrollContainer: t("#zoom-setting .modal-body").get(0),
                      changeCallback: function () {
                        At(e, !1);
                      }
                    }));
                });
            })(a, e);
            if (o.length >= 20) n.addClass("max-line"), a.find(".remove-line-btn").trigger("focus");
            else {
              let t = n.find(".add-interpretation-btn").get(0);
              t && t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            }
          }
          let Bt,
            Qt,
            Ut,
            Wt,
            Zt,
            Yt = null;
          function Gt(e) {
            "boolean" !== B.type(e) && (e = "pmi" === t("[name=meeting_type]:checked").val());
            let n = Mt("autoRec", e),
              i = t("#zoom-setting .recording");
            if ((t("#setting_recording").prop("checked", n.value).trigger("change"), n.dataOptions.length > 1)) {
              let t;
              if (n.value) {
                let e = n.childParams.autoRecordingSubSelected.value;
                t = i.find("[name=option_rec_id][value=" + e + "]");
              }
              (t && t.length) || (t = i.find("[name=option_rec_id]").eq(0)), t.prop({ checked: !0 }).trigger("change");
            }
          }
          function Jt(e) {
            let n = r.focusMode,
              i = t("#zoom-setting .focusMode");
            if (n.support) {
              if (e) {
                "pmi" === t("[name=meeting_type]:checked").val()
                  ? i.find("#setting_option_focusMode").prop({ checked: n.pmi.defaultVal })
                  : i.find("#setting_option_focusMode").prop({ checked: !1 });
              }
            } else i.remove();
          }
          function Kt(e) {
            let n = r.allowDeny,
              o = "pmi" === t("[name=meeting_type]:checked").val(),
              a = t("#zoom-setting .allowDeny");
            if (n.support) {
              e ||
                (function () {
                  let e = t("#zoom-setting .allowDeny");
                  e.find("#setting_allowDeny").on("change", function (n) {
                    t(this).prop("checked") ? (e.addClass("bechecked"), v.selRegion.length || ee()) : e.removeClass("bechecked"), Xt();
                  }),
                    e.on("click", ".edit-region-button", function (t) {
                      t.stopPropagation(), t.preventDefault(), ee();
                    });
                })(),
                t("#zoom-setting .edit-region-cont").length ||
                  (t("#zoom-setting .modal-dialog").append(
                    '\n\t\t\t<div class="edit-region-cont drop-edit-cont">\n\t\t\t\t<div class="backdrop"></div>\n\t\t\t\t<div class="box" tabindex="-1">\n\t\t\t\t\t<div class="title">Approve or Block Entry for Users from Specific Regions/Countries</div>\n\t\t\t\t\t<div class="type-cont">\n\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="allowDeny_type_allow" name="allowDeny_type" value="allow" checked><span>Only allow users from selected regions/countries</span></label>\n\t\t\t\t\t\t<label class="radio-inline"><input type="radio" id="allowDeny_type_deny" name="allowDeny_type" value="deny"><span>Block users from selected regions/countries</span></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="input-title">Countries/Regions</div>\n\t\t\t\t\t<div class="input-cont"></div>\n\t\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'
                  ),
                  (v.$editRegionModule = t("#zoom-setting .edit-region-cont")),
                  (i = new $({
                    el: t("#zoom-setting .edit-region-cont .input-cont").get(0),
                    dataList: n.regionList,
                    ariaLabel: "Regions/Countries",
                    keyEventDom: t("#zm-setting-dialog-container"),
                    dropDownCont: t("#zoom-setting .edit-region-cont"),
                    jquery: Q,
                    tagChangeCallback: function () {
                      i.getSelectedItems().length
                        ? v.$editRegionModule.find(".btn-Save").prop("disabled", !1)
                        : v.$editRegionModule.find(".btn-Save").prop("disabled", !0);
                    }
                  })),
                  (function () {
                    let e = t("#zoom-setting .allowDeny");
                    v.$editRegionModule.find(".btn-Cancel, input[name=allowDeny_type]").on("focus", function (t) {
                      i.loseFocus();
                    }),
                      v.$editRegionModule.find("input[name=allowDeny_type], button").on("blur", function (e) {
                        let n = this;
                        v.$editRegionModule.hasClass("show") &&
                          setTimeout(function () {
                            let e = document.activeElement;
                            if (!e || !t(e).parents(".edit-region-cont").length)
                              if ("BUTTON" === n.nodeName) v.$editRegionModule.find("input[name=allowDeny_type]:checked").trigger("focus");
                              else {
                                let t = v.$editRegionModule.find(".btn-Save");
                                t.prop("disabled") && (t = v.$editRegionModule.find(".btn-Cancel")), t.trigger("focus");
                              }
                          }, 0);
                      }),
                      v.$editRegionModule.on("click", ".btn-Cancel", function (t) {
                        ne(), v.selRegion.length || e.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
                      }),
                      v.$editRegionModule.on("click", ".btn-Save", function (t) {
                        (v.selRegion = i.getSelectedItems()),
                          (v.selType = "allow" === v.$editRegionModule.find("[name=allowDeny_type]:checked").val() ? "0" : "1"),
                          te(v.selRegion, v.selType),
                          ne(),
                          Xt();
                      }),
                      v.$editRegionModule.on("click", ".backdrop", function (t) {
                        ne(), v.selRegion.length || e.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
                      }),
                      v.$editRegionModule.on("click", function (t) {
                        t.stopPropagation(), i.loseFocus();
                      }),
                      v.$editRegionModule.find("[name=allowDeny_type]").on("change", function (t) {
                        let e = this.value,
                          n = i.getSelectedItems();
                        if ("allow" === e) {
                          v.editCache.deny = n;
                          let t = v.editCache.allow;
                          i.resetTag(t);
                        } else {
                          v.editCache.allow = n;
                          let t = v.editCache.deny;
                          i.resetTag(t);
                        }
                      });
                  })());
              let s = o ? n.pmi : n.normal;
              if (s.defaultVal) {
                let t = s.selectRegion,
                  e = s.type;
                (v.selRegion = t), (v.selType = e), te(t, e), a.find("#setting_allowDeny").prop({ checked: !0 }).trigger("change");
              } else
                a.find(".sel-region-list").html(""),
                  (v.selRegion = []),
                  (v.selType = "0"),
                  a.find("#setting_allowDeny").prop({ checked: !1 }).trigger("change");
              n.locked && (ye(t(".control-row.allowDeny > label"), !0), a.find(".edit-region-button").hide());
            } else a.remove();
          }
          function Xt() {
            let e,
              n = r.allowDeny,
              i = "pmi" === t("[name=meeting_type]:checked").val(),
              o = t("#zoom-setting .allowDeny");
            i
              ? o.removeClass("haschange")
              : ((e = n.normal),
                e.defaultVal !== o.find("#setting_allowDeny").prop("checked") ||
                (e.defaultVal && (e.type !== v.selType || e.selectRegion.join("") !== v.selRegion.join("")))
                  ? o.addClass("haschange")
                  : o.removeClass("haschange"));
          }
          function te(e, n) {
            let i,
              o = t("#zoom-setting .allowDeny"),
              a = "";
            for (var s = 0, l = e.length; s < l; s++) {
              let t = ie(e[s]);
              if (a.length + t.length > 148) {
                a = a.slice(0, -2) + "...";
                break;
              }
              (a += t), s < l - 1 && (a += ", ");
            }
            o.find(".regionRes").removeClass("show"),
              (i = "0" === n ? o.find(".regionRes.allow") : o.find(".regionRes.deny")),
              i.addClass("show"),
              i.find(".sel-region-list").html(a);
          }
          function ee() {
            t("#zoom-setting").addClass("edit-region-state"), St(t("#zoom-setting .edit-region-cont"));
            let e = "0" === v.selType ? "allow" : "deny";
            t("[name=allowDeny_type][value=" + e + "]")
              .prop({ checked: !0 })
              .trigger("focus");
            let n = v.selRegion;
            n.length || "0" !== v.selType || (n = [r.allowDeny.defaultRegion.code]),
              i.resetTag(n),
              (v.editCache.deny = []),
              (v.editCache.allow = []);
          }
          function ne() {
            t("#zoom-setting").removeClass("edit-region-state"),
              Ft(t("#zoom-setting .edit-region-cont")),
              t("#zoom-setting #setting_allowDeny").trigger("focus");
          }
          function ie(t) {
            if (r && r.allowDeny) {
              let i = r.allowDeny.regionList;
              if (Array.isArray(i))
                for (var e = 0, n = i.length; e < n; e++) {
                  let n = i[e];
                  if (n.code == t) return n.displayName;
                }
            }
            return "";
          }
          function oe(e, n) {
            let i = r.allowAlternativeHostEditPoll;
            if (!e)
              if (r) {
                let e = t("#alternative_host").parent(),
                  n = e.find(".alternative_host_error");
                e.removeClass("has-error"),
                  n.hide(),
                  r.zoom_support_althost
                    ? (i &&
                        i.support &&
                        (t(".altnativehost").addClass("show-edit-poll"), i.locked && ye(t("#zoom-setting .host-edit-poll"), !0)),
                      t("#alternative_host").val(r.zoom_config_althost).trigger("keyup"))
                    : t(".altnativehost").hide();
              } else t(".altnativehost").hide();
            if (r.zoom_support_althost && i && i.support) {
              "pmi" === t("[name=meeting_type]:checked").val()
                ? t("#host_edit_poll").prop("checked", i.pmi.defaultVal)
                : t("#host_edit_poll").prop("checked", i.normal.defaultVal);
            }
          }
          function ae() {
            let e,
              n = r.security,
              i = "pmi" === t("[name=meeting_type]:checked").val();
            (e = f ? fe() : !!t("#setting_option_jbh").prop("checked")), n && re(!0, !1, n, i, e, !0);
          }
          function se(e, n) {
            if (!e) {
              let e = r.embedPasscode,
                n = t("#zoom-setting .security-box");
              e
                ? (n.find(".usability-desc.pwd").html(H.tips[26]), n.find(".pwdTip").attr("info", H.tips[29]))
                : (n.find(".usability-desc.pwd").html(H.tips[27]), n.find(".pwdTip").remove());
            }
            let i;
            i = e ? "pmi" === t("[name=meeting_type]:checked").val() : r.zoom_config_pmi;
            let o,
              a = r.security;
            !(function (e, n, i) {
              if (!i)
                if (f) {
                  t("#zoom-setting .security-box .waitingroom").remove();
                  let e = t("#zoom-setting .jbh-moved-alert .description");
                  e.html(H.tips[38]), e.find("a").attr("href", r.mySettingUrl);
                } else t("#zoom-setting .security-box .waitingroom2").remove(), t("#zoom-setting .options .jbh-moved-alert").remove();
              f
                ? ue(n, i)
                : e &&
                  (function (e, n) {
                    let { wrEnable: i, wrLocked: o } = ge(e, n);
                    t("#setting_option_waitingroom").prop("checked", i), ye(t(".control-row.waitingroom > label"), !!o);
                    e.newSecurityEnabled.defaultVal &&
                      (!i && o ? t("#zoom-setting .waitingroom").hide() : t("#zoom-setting .waitingroom").show());
                  })(e, n);
            })(a, i, e),
              (o = e
                ? f
                  ? fe()
                  : !!t("#setting_option_jbh").prop("checked")
                : f
                ? (function (t) {
                    let e = pe(t);
                    if (!e.value) return !0;
                    let n = e.childParams.auto.value,
                      i = e.childParams.manu.value,
                      o = e.childParams.options.value;
                    if ("auto" === o) {
                      if ("-1" !== n) return !0;
                    } else if ("manu" === o && "-1" !== i && null !== i) return !0;
                    return !1;
                  })(i)
                : r.zoom_config_jbh),
              a &&
                (a.newSecurityEnabled.defaultVal
                  ? (function (e, n, i) {
                      let o = !1,
                        a = !1,
                        s = !1,
                        l = r.authentication,
                        d = l.locked;
                      n
                        ? ((o = e.pmi.passcode.default_all), (a = e.pmi.passcode.locked), (s = l.pmi.defaultVal))
                        : ((o = e.normal.passcode.defaultVal), (a = e.normal.passcode.locked), (s = l.normal.defaultVal));
                      t("#setting_option_needpassword").prop("checked", o), ye(t(".requirepwd > label"), !!a);
                      !o && a ? t("#zoom-setting .requirepwd").hide() : t("#zoom-setting .requirepwd").show();
                      l.support && (!s && d ? t("#zoom-setting .authentication").hide() : t("#zoom-setting .authentication").show());
                      ce(e, n, o, s);
                      let c = (function (e, n, i, o, a, s, l) {
                        let r,
                          d,
                          c = t("#zoom-setting .security-box"),
                          u = (!s && l) || !i.support;
                        if (f) {
                          let t = pe(e);
                          (r = t.value), (d = t.disabled);
                        } else {
                          let t = ge(n, e);
                          (r = t.wrEnable), (d = t.wrLocked);
                        }
                        return !o && a && !r && d && u ? (c.hide(), !1) : (c.is(":visible") || c.show(), !0);
                      })(n, e, l, o, a, s, d);
                      c && (de(e, n, i), he());
                      _e(n);
                    })(a, i, n)
                  : re(e, n, a, i, o),
                (function (e) {
                  let n = r.authentication;
                  if (((u.selAuthLastVal = -1), n.support)) {
                    u.renderData = n.optionLists;
                    let i = n.normal.defaultVal;
                    e &&
                      ((u.renderData = (function (t, e) {
                        if ("object" === B.type(e) && Object.keys(e).length && Array.isArray(t)) {
                          let o;
                          try {
                            o = JSON.parse(JSON.stringify(t));
                          } catch (t) {}
                          if (Array.isArray(o)) {
                            let t = !1;
                            e.defaultVal = !0;
                            for (var n = 0, i = o.length; n < i; n++) {
                              let i = o[n];
                              i.defaultVal && (o[n].defaultVal = !1), i.id == e.id && ((o[n] = e), (t = !0));
                            }
                            return t || ((e.del = !0), o.unshift(e)), o;
                          }
                        }
                        return t;
                      })(n.optionLists, n.pmi.pmiUpdate)),
                      (i = n.pmi.defaultVal));
                    let { htmlText: o, selVal: a } = (function (t) {
                      let e = "",
                        n = "",
                        i = -1,
                        o = "",
                        a = t.length;
                      if (a > 1) {
                        n = '<div class="select-field"><select id="sel_for_authentication" aria-label="Require authentication to join">';
                        for (var s = 0; s < a; s++) {
                          let o = t[s];
                          (n += `\n\t\t\t\t\t<option value="${s}">${E(o.name)}</option>\n\t\t\t\t`),
                            o.defaultVal && ((e = ": " + E(o.name)), (i = s));
                        }
                        (n += "</select></div>"), (o = '\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t');
                      } else
                        1 == a
                          ? ((e = ": " + E(t[0].name)), (o = '\n\t\t\t\t<div class="domain-info-field"></div>\n\t\t\t'))
                          : (o =
                              '<div class="exception-message">This option is disabled since there is no options available for you to select. Please check your meeting settings or contact your admin.</div>');
                      let l = `\n\t\t\t<label class="checkbox-inline"><input type="checkbox" id="setting_option_authentication" name="setting_option_authentication" />\n\t\t\t\t<optext>Only authenticated users can join<span class="name">${e}</span></optext>\n\t\t\t</label>\n\t\t\t${n}\n\t\t\t${o}\n\t\t\t<div class="del-opt-prompt">${H.tips[13]}</div>\n\t\t`;
                      return { htmlText: l, selVal: i };
                    })(u.renderData);
                    u.$authentication.html(o).removeClass("haslock"),
                      t("#zoom-setting .edit-domain-cont").length ||
                        (t("#zoom-setting .modal-dialog").append(
                          `\n\t\t\t<div class="edit-domain-cont drop-edit-cont">\n\t\t\t\t<div class="backdrop"></div>\n\t\t\t\t<div class="box" tabindex="-1">\n\t\t\t\t\t<div class="title">Edit Domains</div>\n\t\t\t\t\t<div class="notification">${H.tips[12]}</div>\n\t\t\t\t\t<div class="input-cont">\n\t\t\t\t\t\t<textarea id="auth_domain_info" name="auth_domain_info" placeholder="" value="" aria-label="allowed domains"></textarea>\n\t\t\t\t\t\t<span class="has-error help-block" style="display: none;" role="">${H.errors[10]}</span>\n\t\t\t\t\t\t<div class="block-domains-error">${H.errors[22]}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btns-cont">\n\t\t\t\t\t\t<button class="btn btn-Cancel">Cancel</button>\n\t\t\t\t\t\t<button class="btn btn-Save">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`
                        ),
                        (u.$zmEditDomainModule = t("#zoom-setting .edit-domain-cont")),
                        u.$zmEditDomainModule.find(".block-domains-error .setting-url").attr("href", r.mySettingUrl),
                        (function () {
                          u.$zmEditDomainModule.on("click", ".btn-Cancel", function (t) {
                            t.stopPropagation(), je();
                          }),
                            u.$zmEditDomainModule.on("click", ".btn-Save", function (e) {
                              e.stopPropagation(),
                                g.validateEmail() &&
                                (function () {
                                  let e = g.callateInputHandler(t("#zoom-setting #auth_domain_info").val()),
                                    n = r.blockDomains;
                                  if (!e || !Array.isArray(n) || !n.length) return !0;
                                  let i = [],
                                    o = e.split(","),
                                    a = n.join(",").indexOf("*.") > -1,
                                    s = e.indexOf("*.") > -1;
                                  if (a || s)
                                    for (d = 0; d < o.length; d++) {
                                      let t = o[d];
                                      for (var l = 0; l < n.length; l++) {
                                        let e = n[l];
                                        if (t == e) {
                                          i.push(t);
                                          break;
                                        }
                                        if (e.indexOf("*.") > -1) {
                                          let n = e.substring(e.lastIndexOf("*.") + 2);
                                          if (B.endWithStr(t, n)) {
                                            i.push(t);
                                            break;
                                          }
                                          if (t.indexOf("*.") > -1 && ((n = t.substring(t.lastIndexOf("*.") + 2)), B.endWithStr(e, n))) {
                                            i.push(t);
                                            break;
                                          }
                                        }
                                      }
                                    }
                                  else
                                    for (var d = 0; d < o.length; d++) {
                                      let t = o[d];
                                      n.indexOf(t) > -1 && i.push(t);
                                    }
                                  if (i.length)
                                    return (
                                      (function (t) {
                                        let e = Q("#zoom-setting .edit-domain-cont .block-domains-error");
                                        e.length && t && (e.find(".domains").html(t), e.show().attr("role", "alert"));
                                      })(i.join(",")),
                                      !1
                                    );
                                  return !0;
                                })()
                                  ? (!(function () {
                                      let e = g.callateInputHandler(t("#zoom-setting #auth_domain_info").val()),
                                        n = t("#zoom-setting #sel_for_authentication").val() || 0,
                                        i = u.renderData[n];
                                      i && i.domain && ((i.domain = e), Ce(n));
                                    })(),
                                    je())
                                  : t("#zoom-setting #auth_domain_info").trigger("focus");
                            }),
                            u.$zmEditDomainModule.on("click", ".backdrop", function (t) {
                              t.stopPropagation(), je();
                            }),
                            u.$zmEditDomainModule.find("textarea, button").on("blur", function (e) {
                              let n = this;
                              u.$zmEditDomainModule.hasClass("show") &&
                                setTimeout(function () {
                                  let e = document.activeElement;
                                  if (!e || !t(e).parents(".edit-domain-cont").length)
                                    if ("BUTTON" === n.nodeName) {
                                      let t = u.$zmEditDomainModule.find("textarea");
                                      t.prop("disabled") && (t = u.$zmEditDomainModule.find(".btn-Cancel")), t.trigger("focus");
                                    } else {
                                      let t = u.$zmEditDomainModule.find(".btn-Save");
                                      t.prop("disabled") && (t = u.$zmEditDomainModule.find(".btn-Cancel")), t.trigger("focus");
                                    }
                                }, 0);
                            });
                          let e = null,
                            n = u.$zmEditDomainModule.find(".btn-Save");
                          u.$zmEditDomainModule.find("#auth_domain_info").on("input", function (t) {
                            let i = this;
                            return (
                              e && clearTimeout(e),
                              (e = setTimeout(function () {
                                g.validateEmail(),
                                  i.value !== i.originalValue ? n.prop("disabled", !1) : n.prop("disabled", !0),
                                  De(),
                                  (e = null);
                              }, 500)),
                              (this.style.height = "auto"),
                              (this.style.height = this.scrollHeight + 2 + "px"),
                              !1
                            );
                          }),
                            u.$zmEditDomainModule.on("click", ".setting-url", function (e) {
                              e.stopPropagation(), e.preventDefault(), window.open(t(this).attr("href"));
                            });
                        })(),
                        u.$authentication.on("click", ".domain-info-field .edit-button", function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            (function () {
                              let e = t("#zoom-setting .authentication").hasClass("haslock");
                              e &&
                                (u.$zmEditDomainModule.addClass("haslocked"),
                                u.$zmEditDomainModule.find("#auth_domain_info").prop("disabled", !0),
                                u.$zmEditDomainModule.find(".btn-Save").remove());
                              (function () {
                                let e = u.renderData[t("#zoom-setting #sel_for_authentication").val() || 0];
                                if (e && e.domain) {
                                  let t = u.$zmEditDomainModule.find("#auth_domain_info");
                                  t.val(e.domain),
                                    (t.get(0).originalValue = e.domain),
                                    setTimeout(function () {
                                      t.trigger("input");
                                    }, 0);
                                }
                                u.$zmEditDomainModule.find(".btn-Save").prop("disabled", !0);
                              })(),
                                t("#zoom-setting").addClass("edit-domain-state"),
                                St(t("#zoom-setting .edit-domain-cont"));
                              let n = null;
                              if (e) {
                                let t = "allowed domains: " + u.$zmEditDomainModule.find("#auth_domain_info").val() + " Cancel";
                                (n = u.$zmEditDomainModule.find(".btn-Cancel")), n.attr("aria-label", t);
                              } else
                                u.$zmEditDomainModule.find(".btn-Cancel").attr("aria-label", ""),
                                  (n = u.$zmEditDomainModule.find("#auth_domain_info"));
                              n.trigger("focus");
                            })();
                        }),
                        u.$authentication.on("click", ".nooption", function (e) {
                          e.stopPropagation(),
                            (function () {
                              let e = t("#zoom-setting .authentication .exception-message");
                              e.is(":visible")
                                ? xe()
                                : (2 * u.$authentication.position().top > t("#zoom-setting .modal-body").height()
                                    ? e.removeClass("reversal")
                                    : e.addClass("reversal"),
                                  St(e),
                                  (u.authExceptionTimeout = setTimeout(function () {
                                    Ft(e), (u.authExceptionTimeout = null);
                                  }, 5e3)));
                            })();
                        })),
                      t("#zoom-setting #setting_option_authentication").on("change", function () {
                        let e = t(this).prop("checked");
                        e ? (u.$authentication.addClass("check"), we(e)) : (u.$authentication.removeClass("check"), we(e), ke()), he();
                      }),
                      t("#zoom-setting #sel_for_authentication").on("change", function () {
                        let e = t(this).val();
                        ke(), Ce(e, !0);
                      }),
                      (function (e, n, i) {
                        n.locked && ye(t("#zoom-setting .authentication > label"), !0);
                        let o = t("#zoom-setting #setting_option_authentication");
                        if (e > -1) {
                          let n = t("#zoom-setting #sel_for_authentication");
                          n.val(e), n.trigger("change");
                        } else u.$authentication.find(".domain-info-field").length && Ce(0, !0);
                        if ((o.prop("checked", i), o.trigger("change"), !u.renderData.length)) {
                          o.prop("checked", !1), o.prop("disabled", !0), o.parent().addClass("nooption");
                          let e = new Date().getTime();
                          t("#zoom-setting .modal-body").on("scroll", function (t) {
                            let n = new Date().getTime();
                            n - e > 1e3 && (xe(), (e = n));
                          });
                        }
                      })(a, n, i);
                  } else
                    u.$authentication.html("").hide(),
                      t("#zoom-setting .control-row.watermark").html("").hide(),
                      t("#zoom-setting .control-row.audiomark").html("").hide();
                })(i));
          }
          function le(e, n) {
            let i = r.showSecurityTip;
            if (i["type" + e]) {
              let o = e + 29;
              n.append(`<div class="security-tip"><close></close>${H.tips[o]}<div class="pop-arrow"></div></div>`), (i["type" + e] = !1);
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
          function re(e, n, i, o, a, s) {
            let l = !1,
              d = !1,
              c = !1,
              u = r.authentication;
            if (o) {
              let o = i.pmi.passcode;
              o.default_jbh
                ? (e ? (a ? (l = !0) : n || (l = !!t("#setting_option_needpassword").prop("checked"))) : a && (l = !0), a && (d = o.locked))
                : o.default_all
                ? ((l = !0), (d = o.locked))
                : ((l = !1), (d = o.locked)),
                (c = u.pmi.defaultVal);
            } else (l = i.normal.passcode.defaultVal), (d = i.normal.passcode.locked), (c = u.normal.defaultVal);
            t("#setting_option_needpassword").prop("checked", l),
              ye(t(".requirepwd > label"), !!d),
              de(i, o, n),
              s || ce(i, o, l, c),
              _e(o);
          }
          function de(e, n, i) {
            let o = t("#zoom-setting #meeting_pwd"),
              a = e.pmi.passcode.value;
            if (n) o.val(a);
            else {
              let t = r.iSFreeAccount ? 2 : 1,
                e = x.Z.generateMeetingPassword(h.meetingPwdSettingsMap, t);
              o.val(e);
            }
            i && (J(), Y(1));
          }
          function ce(e, n, i, o) {
            if ((be(t("#zoom-setting .security-box")), f)) {
              let a = pe(n),
                s = a.value,
                l = a.disabled,
                r = "manu" === a.childParams.options.value,
                d = a.childParams.options.disabled;
              !e.security3c1 ||
                i ||
                o ||
                (s && r) ||
                (l || (d && !r)
                  ? ve(H.tips[39], t("#zoom-setting .security-box"), !0)
                  : (l || t("#setting_option_waitingroom2").prop("checked", !0).trigger("change"),
                    d || t("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                    le(1, t("#zoom-setting .waitingroom2"))));
            } else {
              let { wrEnable: a, wrLocked: s } = ge(e, n);
              !e.security3c1 ||
                i ||
                o ||
                a ||
                (s
                  ? ve(H.errors[20], t("#zoom-setting .security-box"), !0)
                  : (t("#setting_option_waitingroom").prop("checked", !0), le(1, t("#zoom-setting .waitingroom"))));
            }
          }
          function ue(e, n) {
            let i = pe(e);
            if (i && i.show) {
              if (i.disabled && !i.value) return void t("#zoom-setting .security-box .waitingroom2").hide();
              t("#zoom-setting .security-box .waitingroom2").show(),
                n ||
                  t("#zoom-setting .wr2Tip").attr(
                    "info",
                    `<div>The options available here depend on your waiting room web settings for how participants are admitted.</div><div style="margin-top: 8px;">You can find enhanced settings for waiting room and join before host in the web settings portal. <a href="${r.mySettingUrl}" target="_blank">Go to Setting</a></div>`
                  );
              let e = i.childParams.auto,
                o = i.childParams.manu,
                a = i.childParams.options;
              t("#auto_prior_start").html(me(e.dataOptions)),
                t("#manu_prior_start").html(me(o.dataOptions)),
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
                      t(this).prop("checked") || !1 ? n.addClass("beencheck") : n.removeClass("beencheck"),
                        s && "pmi" === t("[name=meeting_type]:checked").val() && ae(),
                        he();
                    });
                    let i = t("#manu_prior_start"),
                      o = t("#auto_prior_start");
                    t("#zoom-setting [name=option_waitingroom2]").on("change", function () {
                      let e = t("[name=option_waitingroom2]:checked").val();
                      "manu" === e
                        ? (n.hasClass("on-e2e-state") || i.hasClass("locked") || i.prop("disabled", !1).css("opacity", 1),
                          o.prop("disabled", !0).css("opacity", 0.5))
                        : "auto" === e &&
                          (n.hasClass("on-e2e-state") || o.hasClass("locked") || o.prop("disabled", !1).css("opacity", 1),
                          i.prop("disabled", !0).css("opacity", 0.5)),
                        s && "pmi" === t("[name=meeting_type]:checked").val() && ae(),
                        he();
                    }),
                      t("#manu_prior_start").on("change", function () {
                        s && "pmi" === t("[name=meeting_type]:checked").val() && (ae(), he());
                      }),
                      t("#auto_prior_start").on("change", function () {
                        s && "pmi" === t("[name=meeting_type]:checked").val() && (ae(), he());
                      });
                  })(),
                i.disabled
                  ? ye(t("#zoom-setting .waitingroom2 > .checkbox-inline"), !0)
                  : ye(t("#zoom-setting .waitingroom2 > .checkbox-inline"), !1);
              let l = t("#zoom-setting .waitingroom2 .radio-inline");
              a.disabled ? l.find("input").prop("disabled", !0) : l.find("input").prop("disabled", !1),
                o.disabled
                  ? t("#manu_prior_start").prop("disabled", !0).addClass("locked")
                  : t("#manu_prior_start").prop("disabled", !1).removeClass("locked"),
                e.disabled
                  ? t("#auto_prior_start").prop("disabled", !0).addClass("locked")
                  : t("#auto_prior_start").prop("disabled", !1).removeClass("locked"),
                t("#setting_option_waitingroom2").prop({ checked: i.value }),
                "auto" === a.value
                  ? t("#setting_option_auto").prop({ checked: !0 }).trigger("change")
                  : "manu" === a.value && t("#setting_option_manu").prop({ checked: !0 }).trigger("change"),
                t("#auto_prior_start").val(e.value),
                null === o.value || -100 === o.value ? t("#manu_prior_start").remove() : t("#manu_prior_start").val(o.value),
                t("#setting_option_waitingroom2").trigger("change");
              let d = a.dataOptions || [],
                c = "Everyone is manually admitted",
                u = "Everyone is automatically admitted";
              for (let t = 0; t < d.length; t++)
                "auto" === d[t].id && d[t].label && (u = d[t].label), "manu" === d[t].id && d[t].label && (c = d[t].label);
              t("#setting_option_auto").next().text(u), t("#setting_option_manu").next().text(c);
            } else t("#zoom-setting .security-box .waitingroom2").hide();
          }
          function me(t) {
            if (Array.isArray(t) && t.length) {
              let e = "";
              for (let n = 0; n < t.length; n++) e += `\n\t\t\t\t\t<option value="${E(t[n].id)}">${E(t[n].label)}</option>\n\t\t\t\t`;
              return e;
            }
            return "";
          }
          function pe(t) {
            return t ? r.pmiFeatures.waitingRoom2 : r.meetingFeatures.waitingRoom2;
          }
          function ge(t, e) {
            let n = !1,
              i = !1;
            return (
              e
                ? ((n = t.pmi.waitingroom.defaultVal), (i = t.pmi.waitingroom.locked))
                : ((n = t.normal.waitingroom.defaultVal), (i = t.normal.waitingroom.locked)),
              { wrEnable: n, wrLocked: i }
            );
          }
          function he(e) {
            let n = r.security;
            if (("boolean" !== B.type(e) && (e = "pmi" === t("[name=meeting_type]:checked").val()), n.security3c1)) {
              let e = t("#zoom-setting .security-box"),
                n = t("#zoom-setting #setting_option_needpassword").prop("checked") || !1,
                i = t("#zoom-setting #setting_option_authentication").prop("checked") || !1;
              if (f) {
                let o = t("#zoom-setting #setting_option_waitingroom2").prop("checked") || !1,
                  a = t("#zoom-setting #setting_option_manu").prop("checked") || !1;
                (o && a) || n || i ? be(e) : ve(H.tips[39], e, !0);
              } else {
                t("#zoom-setting #setting_option_waitingroom").prop("checked") || !1 || n || i ? be(e) : ve(H.errors[20], e, !0);
              }
            }
          }
          function fe() {
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
          function ve(t, e, n) {
            if (t && e) {
              let i = e.find(".error-msg");
              i.html(t).addClass("showme"), n ? i.attr("role", "alert") : i.attr("role", null);
            }
          }
          function be(t) {
            if (t) {
              let e = t.find(".error-msg");
              e.hasClass("showme") && e.html("").removeClass("showme").attr("role", null);
            }
          }
          function _e(e) {
            let n = t("#zoom-setting #setting_option_needpassword").prop("checked") || !1,
              i = t("#zoom-setting .requirepwd");
            n ? i.addClass("sel") : i.removeClass("sel"),
              i.addClass("manual"),
              e ? t("#zoom-setting #setting_form").addClass("pmi") : t("#zoom-setting #setting_form").removeClass("pmi");
          }
          function ye(t, n) {
            n
              ? t.closest(".control-row").hasClass("haslock") ||
                (t.append(e).closest(".control-row").addClass("haslock"), t.find("input").prop("disabled", !0))
              : (t.find(".locked_by_admin").remove(),
                t.closest(".control-row").removeClass("haslock"),
                t.find("input").prop("disabled", !1));
          }
          function ze() {
            let e;
            (e = c
              ? `Zoom meeting has been deleted. You can recover this meeting within 7 days from the <a href="${c}" class="zoom-trash" target="_blank"> Recently Deleted </a> page on the Zoom web portal. `
              : "Zoom meeting has been deleted. You can recover this meeting within 7 days from the Recently Deleted page on the Zoom web portal. "),
              (function (e) {
                (Bt && Bt.length) ||
                  ((n =
                    '\n\t\t<div id="zoom-del-toast" role="alert"><div class="del-msg"></div><button class="close" aria-label="close"></button></div>\n\t\t'),
                  t("body").append(n),
                  (Bt = t("#zoom-del-toast")),
                  Bt.on("click", ".close", function (t) {
                    t.stopPropagation(), Bt.hasClass("show") && (Ft(Bt), Qt && (clearTimeout(Qt), (Qt = null)));
                  }));
                var n;
                Bt.hasClass("show")
                  ? (Ft(Bt),
                    Ut && clearTimeout(Ut),
                    (Ut = setTimeout(function () {
                      Bt.find(".del-msg").html(e), St(Bt), (Ut = null);
                    }, 200)))
                  : (Bt.find(".del-msg").html(e), St(Bt));
                Qt && clearTimeout(Qt);
                Qt = setTimeout(function () {
                  Ft(Bt), (Qt = null);
                }, 1e4);
              })(e);
          }
          function ke() {
            t("#zoom-setting").hasClass("edit-domain-state") && je();
          }
          function we(e) {
            e
              ? (t("#zoom-setting .control-row.watermark").show(), t("#zoom-setting .control-row.audiomark").show())
              : (t("#zoom-setting .control-row.watermark").hide(), t("#zoom-setting .control-row.audiomark").hide());
          }
          function xe() {
            u.authExceptionTimeout &&
              (clearTimeout(u.authExceptionTimeout),
              (u.authExceptionTimeout = null),
              Ft(t("#zoom-setting .authentication .exception-message")));
          }
          function Ce(t, e) {
            let n = u.renderData[t];
            if ((u.$authentication.find(".name").text(": " + n.name), "1" == n.type)) {
              let t,
                e,
                i = n.domain || "",
                o = 0;
              (o = i.split(/,|;/).length),
                i.length > 57 ? ((t = i.slice(0, 56) + "..."), (e = `View/edit all ${o} domains`)) : ((t = i), (e = "edit domain")),
                u.$authentication.hasClass("haslock") && (e = "view domain");
              let a = `\n\t\t\t\t<span class="domain-info-text">${E(t)}</span><a href="" class="edit-button">${e}</a>\n\t\t\t`;
              u.$authentication.find(".domain-info-field").html(a).addClass("eyeable");
            } else u.$authentication.find(".domain-info-field").html("").removeClass("eyeable");
            if (e) {
              let e = u.renderData[u.selAuthLastVal];
              e && e.del ? u.$authentication.find(".del-opt-prompt").show() : u.$authentication.find(".del-opt-prompt").hide(),
                (u.selAuthLastVal = t);
            }
          }
          function De() {
            Q("#zoom-setting .edit-domain-cont .block-domains-error").hide().attr("role", "");
          }
          function je() {
            t("#zoom-setting").removeClass("edit-domain-state"),
              u.$zmEditDomainModule.find("input").val("").trigger("keyup"),
              g.hideHasErrorMsg(t("#zoom-setting #auth_domain_info")),
              De(),
              Ft(t("#zoom-setting .edit-domain-cont")),
              t("#zoom-setting .domain-info-field .edit-button").trigger("focus");
          }
          function Te(t) {
            if (t) {
              ct().attr("href", encodeURI(t)).html("Join Zoom Meeting"), w.getEditDetailDOM().addClass("zoom-meeting-state");
            }
          }
          function Ee() {
            g.check40MinDuration() ? t(".zoom-free-tooltip").addClass("over-limit") : t(".zoom-free-tooltip").removeClass("over-limit");
          }
          function Se() {
            if (y?.isVisible) {
              let { id: t, extData: e } = y.getSelectedResult(),
                n = e?.pmi;
              "0" !== n ? Fe() : Pe(t);
            } else {
              "0" !== (r.zoom_config_pmiNum || "0") ? Fe() : Pe("me");
            }
          }
          function Fe() {
            let e = t("#zoom-setting .meetingtype");
            e.is(":visible") || (e.removeClass("hideme"), t("#zoom-setting .disable-pmi-msg").removeClass("showme"));
          }
          function Pe(e) {
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
                                if (y?.isVisible) {
                                  let { id: t, extData: e } = y.getSelectedResult();
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
          function Me(e, n, i) {
            var o;
            (Wt && Wt.length) ||
              ((o = '\n\t\t\t<div id="zoom-sync-toast"></div>\n\t\t'), t("body").append(o), (Wt = t("#zoom-sync-toast"))),
              Wt.text(e),
              i && (Wt[0].className = i),
              St(Wt),
              n &&
                (Zt && (clearTimeout(Zt), (Zt = null)),
                (Zt = setTimeout(function () {
                  Ft(Wt);
                }, 3e3)));
          }
          function Ne(t) {
            return "string" === B.type(t) && t.indexOf("_") > -1 ? t.replace(/_[A-Za-z]?\d{8}[A-Za-z]\d{6}[A-Za-z]?/g, "") : t;
          }
        })(Q);
      },
      469: (t, e, n) => {
        var i, o, a;
        (o = [n(755)]),
          void 0 ===
            (a =
              "function" ==
              typeof (i = function (t) {
                var e,
                  n,
                  i = [],
                  o = t(document),
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
                              height: this.o.modal ? i[0] : 0,
                              width: this.o.modal ? i[1] : 0,
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
                        o.bind("keydown.simplemodal", function (t) {
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
                                n.d.overlay.css({ height: i[0], width: i[1] }));
                        });
                    },
                    unbindEvents: function () {
                      t("." + this.o.closeClass).unbind("click.simplemodal"),
                        o.unbind("keydown.simplemodal"),
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
                            var i,
                              o,
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
                                    ? ((i =
                                        -1 ===
                                        (i = e[0]
                                          ? "number" == typeof e[0]
                                            ? e[0].toString()
                                            : e[0].replace(/px/, "")
                                          : n.css("top").replace(/px/, "")).indexOf("%")
                                          ? i +
                                            ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                                          : parseInt(i.replace(/%/, "")) +
                                            ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                                      e[1] &&
                                        (o =
                                          -1 === (o = "number" == typeof e[1] ? e[1].toString() : e[1].replace(/px/, "")).indexOf("%")
                                            ? o +
                                              ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'
                                            : parseInt(o.replace(/%/, "")) +
                                              ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'))
                                    : ((i =
                                        '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                                      (o =
                                        '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')),
                                  a.removeExpression("top"),
                                  a.removeExpression("left"),
                                  a.setExpression("top", i),
                                  a.setExpression("left", o));
                          }
                        }
                      );
                    },
                    focus: function (e) {
                      var n = this,
                        i = ((e = e && -1 !== t.inArray(e, ["first", "last"]) ? e : "first"), t(":input:enabled:visible:" + e, n.d.wrap));
                      setTimeout(function () {
                        0 < i.length ? i.focus() : n.d.wrap.focus();
                      }, 10);
                    },
                    getDimensions: function () {
                      var t = void 0 === window.innerHeight ? s.height() : window.innerHeight;
                      (i = [o.height(), o.width()]), (l = [t, s.width()]);
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
                        i = this.d.origHeight
                          ? this.d.origHeight
                          : c
                          ? this.d.container.height()
                          : this.getVal(t ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"),
                        o =
                          ((t = this.d.origWidth
                            ? this.d.origWidth
                            : c
                            ? this.d.container.width()
                            : this.getVal(t ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w")),
                          this.d.data.outerHeight(!0)),
                        a = this.d.data.outerWidth(!0);
                      (this.d.origHeight = this.d.origHeight || i), (this.d.origWidth = this.d.origWidth || t);
                      var s = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
                        r = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
                        d =
                          ((s = s && s < l[0] ? s : l[0]),
                          (r = r && r < l[1] ? r : l[1]),
                          this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto");
                      (i = i
                        ? this.o.autoResize && i > s
                          ? s
                          : i < d
                          ? d
                          : i
                        : o
                        ? o > s
                          ? s
                          : this.o.minHeight && "auto" !== d && o < d
                          ? d
                          : o
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
                        this.d.container.css({ height: i, width: t }),
                        this.d.wrap.css({ overflow: o > i || a > t ? "auto" : "visible" }),
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
                ? i.apply(e, o)
                : i) || (t.exports = a);
      }
    },
    n = {};
  function i(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var a = (n[t] = { exports: {} });
    return e[t].call(a.exports, a, a.exports, i), a.exports;
  }
  (i.m = e),
    (t = []),
    (i.O = (e, n, o, a) => {
      if (!n) {
        var s = 1 / 0;
        for (c = 0; c < t.length; c++) {
          for (var [n, o, a] = t[c], l = !0, r = 0; r < n.length; r++)
            (!1 & a || s >= a) && Object.keys(i.O).every((t) => i.O[t](n[r])) ? n.splice(r--, 1) : ((l = !1), a < s && (s = a));
          if (l) {
            t.splice(c--, 1);
            var d = o();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      a = a || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > a; c--) t[c] = t[c - 1];
      t[c] = [n, o, a];
    }),
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
    (i.d = (t, e) => {
      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.j = 998),
    (() => {
      var t = { 998: 0, 374: 0 };
      i.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var o,
            a,
            [s, l, r] = n,
            d = 0;
          if (s.some((e) => 0 !== t[e])) {
            for (o in l) i.o(l, o) && (i.m[o] = l[o]);
            if (r) var c = r(i);
          }
          for (e && e(n); d < s.length; d++) (a = s[d]), i.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return i.O(c);
        },
        n = (self.webpackChunkextension = self.webpackChunkextension || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var o = i.O(void 0, [374, 647, 493], () => i(762));
  o = i.O(o);
})();
