var fn_addin = function (c, i, t) {
  var e = {},
    t =
      ((e.styles = e.styles || {}),
      (e.commands = e.commands || {}),
      (e.dependencies = t || e.dependencies || {}),
      (e.styles.style = function () {}),
      (e.views = e.views || {}),
      (e.collect = e.collect || {}),
      (e.models = e.models || {}),
      (e.templates = e.templates || {}),
      (e.info = {
        addin: "1e373fa7-a454-4652-8d77-1a4fcc88c069",
        id: "settings_balance",
        dependencies: ["settings"],
        commands: ["settings.panels.balance"]
      }),
      c.console.log(c.elapsed() + ": " + e.info.id + " started"),
      (e.templates = e.templates || {}),
      (e.templates.main = Handlebars.template({
        1: function (t, e, n, a, s) {
          var o = null != e ? e : t.nullContext || {},
            i = t.hooks.helperMissing,
            l = "function",
            c = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            (null !=
            (t = d(n, "if").call(o, s && d(s, "first"), {
              name: "if",
              hash: {},
              fn: t.program(2, s, 0),
              inverse: t.program(4, s, 0),
              data: s,
              loc: { start: { line: 22, column: 5 }, end: { line: 26, column: 12 } }
            }))
              ? t
              : "") +
            '\t\t\t\t\t<span class="toggle-option balance-shortcut" data-shortcut="' +
            c(
              typeof (t = null != (t = d(n, "label") || (null != e ? d(e, "label") : e)) ? t : i) == l
                ? t.call(o, { name: "label", hash: {}, data: s, loc: { start: { line: 27, column: 65 }, end: { line: 27, column: 74 } } })
                : t
            ) +
            '"><span class="toggle-label">' +
            c(
              typeof (t = null != (t = d(n, "displayLabel") || (null != e ? d(e, "displayLabel") : e)) ? t : i) == l
                ? t.call(o, {
                    name: "displayLabel",
                    hash: {},
                    data: s,
                    loc: { start: { line: 27, column: 103 }, end: { line: 27, column: 119 } }
                  })
                : t
            ) +
            "</span></span>\n"
          );
        },
        2: function (t, e, n, a, s) {
          return '\t\t\t\t\t<span class="toggle-divider"></span>\n';
        },
        4: function (t, e, n, a, s) {
          return '\t\t\t\t\t<span class="toggle-divider">|</span>\n';
        },
        6: function (t, e, n, a, s) {
          return "\t\t\t\t\t\t\t\t<option>00</option>\n\t\t\t\t\t\t\t\t<option>01</option>\n\t\t\t\t\t\t\t\t<option>02</option>\n\t\t\t\t\t\t\t\t<option>03</option>\n\t\t\t\t\t\t\t\t<option>04</option>\n\t\t\t\t\t\t\t\t<option>05</option>\n\t\t\t\t\t\t\t\t<option>06</option>\n\t\t\t\t\t\t\t\t<option>07</option>\n\t\t\t\t\t\t\t\t<option>08</option>\n\t\t\t\t\t\t\t\t<option>09</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>13</option>\n\t\t\t\t\t\t\t\t<option>14</option>\n\t\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t\t<option>16</option>\n\t\t\t\t\t\t\t\t<option>17</option>\n\t\t\t\t\t\t\t\t<option>18</option>\n\t\t\t\t\t\t\t\t<option>19</option>\n\t\t\t\t\t\t\t\t<option>20</option>\n\t\t\t\t\t\t\t\t<option>21</option>\n\t\t\t\t\t\t\t\t<option>22</option>\n\t\t\t\t\t\t\t\t<option>23</option>\n";
        },
        8: function (t, e, n, a, s) {
          return "\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t\t\t\t<option>6</option>\n\t\t\t\t\t\t\t\t<option>7</option>\n\t\t\t\t\t\t\t\t<option>8</option>\n\t\t\t\t\t\t\t\t<option>9</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n";
        },
        10: function (t, e, n, a, s) {
          return " &nbsp; ";
        },
        12: function (t, e, n, a, s) {
          return '\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="start">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n';
        },
        14: function (t, e, n, a, s) {
          return '\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="end">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n';
        },
        16: function (t, e, n, a, s) {
          return '\t\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceNotes">\n\t\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t\t<span class="setting-name">Hide Notes</span>\n\t\t\t\t\t\t</li>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, a, s) {
          var o,
            i = null != e ? e : t.nullContext || {},
            l = t.lambda,
            c = t.escapeExpression,
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<h3>Balance</h3>\n<p class="description">Balance your day with periods of uptime and downtime</p>\n<ul class="settings-list options-list">\n\t<li class="slide-toggle has-toggle balance-mode on">\n\t\t<span class="toggle-slider" data-test="balance-toggle"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t<span class="setting-name">Enable Balance mode</span>\n\t\t<span class="option-message">Hide productivity features during downtime</span>\n\t</li>\n</ul>\n\n\n\n<h4>Uptime Schedule</h4>\n<p class="subdescription">Times when productivity features are active</p>\n<ul class="settings-list options-list shortcut-list">\n\t<li class="slide-toggle has-toggle custom-time-toggle">\n\t\t<div class="balance-time-wrapper">\n\t\t\t<span class="setting-name">Hours of the day</span>\n\n\t\t\t<span class="toggle-options">\n' +
            (null !=
            (o = d(n, "each").call(i, null != e ? d(e, "shortcuts") : e, {
              name: "each",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 21, column: 4 }, end: { line: 28, column: 13 } }
            }))
              ? o
              : "") +
            '\t\t\t\t<br>\n\t\t\t\t<span class="toggle-option toggle-custom time-custom">\n\t\t\t\t\t<span class="toggle-label">Custom</span>\n\t\t\t\t\t<span class="badge badge-plus">Plus</span>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Time">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Start time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="start">\n' +
            (null !=
            (o = d(n, "if").call(i, null != e ? d(e, "hour24") : e, {
              name: "if",
              hash: {},
              fn: t.program(6, s, 0),
              inverse: t.program(8, s, 0),
              data: s,
              loc: { start: { line: 43, column: 7 }, end: { line: 81, column: 14 } }
            }))
              ? o
              : "") +
            '\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\x3c!--\n\n\t\t\t\t\t--\x3e<span class="time-divider">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="start">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t' +
            (null !=
            (o = d(n, "if").call(i, null != e ? d(e, "hour24") : e, {
              name: "if",
              hash: {},
              fn: t.program(10, s, 0),
              inverse: t.program(12, s, 0),
              data: s,
              loc: { start: { line: 95, column: 6 }, end: { line: 102, column: 13 } }
            }))
              ? o
              : "") +
            '\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">End time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="end">\n' +
            (null !=
            (o = d(n, "if").call(i, null != e ? d(e, "hour24") : e, {
              name: "if",
              hash: {},
              fn: t.program(6, s, 0),
              inverse: t.program(8, s, 0),
              data: s,
              loc: { start: { line: 111, column: 7 }, end: { line: 149, column: 14 } }
            }))
              ? o
              : "") +
            '\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<span class="time-divider" style="margin: 0 0 0 -4px;">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="end">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t' +
            (null !=
            (o = d(n, "if").call(i, null != e ? d(e, "hour24") : e, {
              name: "if",
              hash: {},
              fn: t.program(10, s, 0),
              inverse: t.program(14, s, 0),
              data: s,
              loc: { start: { line: 163, column: 6 }, end: { line: 170, column: 13 } }
            }))
              ? o
              : "") +
            '\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class="slide-toggle has-toggle custom-days-toggle">\n\t\t<span class="setting-name">Days of the week</span>\n\n\t\t<span class="toggle-options">\n\t\t\t<span class="toggle-option days-shortcut" data-days="1,2,3,4,5"><span class="toggle-label">Weekdays</span></span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option days-shortcut" data-days="0,1,2,3,4,5,6"><span class="toggle-label">Every day</span></span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option toggle-custom days-custom">\n\t\t\t\t<span class="toggle-label">Custom</span>\n\t\t\t\t<span class="badge badge-plus">Plus</span>\n\t\t\t</span>\n\t\t</span>\n\n\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Days">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Days Active</span>\n\n\t\t\t\t<span class="toggle-options">\n\t\t\t\t\t<span class="toggle-option day-toggle" data-day="0"><span class="toggle-label">S</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="1"><span class="toggle-label">M</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="2"><span class="toggle-label">T</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="3"><span class="toggle-label">W</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="4"><span class="toggle-label">T</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="5"><span class="toggle-label">F</span></span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle" data-day="6"><span class="toggle-label">S</span></span>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n\n\n\n<div class="show-on-balance">\n\t<h4 class="button-advanced" data-test="options">Downtime Options<i class="icon icon-angle-down"></i></h4>\n\t<p class="subdescription">Productivity features to hide during downtime</p>\n\t<div class="smooth-height-wrapper">\n\t\t<div class="smooth-height-content">\n\t\t\t<div class="wrapper-advanced">\n\t\t\t\t<ul class="settings-list options-list balance-rest-list">\n\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceClock">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Clock</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceGreeting" data-test="toggle-greeting">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Greeting</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceFocus">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Focus</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceTodo">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Todo</span>\n\t\t\t\t\t</li>\n' +
            (null !=
            (o = d(n, "if").call(i, null != e ? d(e, "plusEnabled") : e, {
              name: "if",
              hash: {},
              fn: t.program(16, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 233, column: 5 }, end: { line: 238, column: 12 } }
            }))
              ? o
              : "") +
            '\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class="balance-quote">&ldquo;' +
            c(l(null != (o = null != e ? d(e, "currentQuote") : e) ? d(o, "body") : o, e)) +
            '&rdquo;<span class="balance-quote-source">– ' +
            c(l(null != (o = null != e ? d(e, "currentQuote") : e) ? d(o, "source") : o, e)) +
            "</span></div>\n"
          );
        },
        useData: !0
      })),
      (e.styles = e.styles || {}),
      (e.styles.style = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          (t.innerHTML =
            ".settings .balance-time-wrapper,.settings-balance .custom-days-toggle{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap}.settings .balance-time-wrapper .setting-name span{white-space:pre}.settings .balance-time-wrapper .toggle-options{margin-top:0;flex:1 0 auto;float:none}select.balance-time{opacity:.8}select.balance-time:hover{opacity:1}.settings-balance,.settings-balance .toggle-options{transition:all .2s ease}.toggle-options-custom.animating{transition:height .2s ease}.settings-balance .day-toggle{cursor:pointer}.settings-balance .button-advanced{margin:-12px 0 0 -23px;opacity:1;float:none}.settings-balance .button-advanced .icon-angle-down{margin-left:2px}.settings-balance .balance-quote{margin-top:45px;opacity:.5;text-align:center}.firefox .settings-balance .balance-quote{padding-bottom:30px}.settings-balance .balance-quote-source{margin-top:4px;display:block;font-size:14px}"),
          document.getElementsByTagName("head")[0].appendChild(t);
      }),
      e.dependencies.settings);
  return (
    (e.views.Main = t.views.SettingsPanel.extend({
      attributes: { id: "settings-balance", class: "settings-view settings-balance", "data-test": "settings-balance" },
      panelid: "balance",
      panelTitle: "Balance Settings",
      analytics: new c.Analytics({ feature: "balance mode" }),
      quotes: [
        { body: "Time you enjoy wasting is not wasted.", source: "John Lennon" },
        { body: "Sometimes the best training is to rest.", source: "Cristiano Ronaldo" },
        { body: "Rest until you feel like playing, then play until you feel like resting.", source: "Martha Beck" },
        { body: "If you get tired, learn to rest, not to quit.", source: "Banksy" },
        { body: "Everything in moderation, including moderation.", source: "Oscar Wilde" },
        { body: "Sometimes the most productive thing you can do is rest.", source: "Anonymous" },
        { body: "Balance achievement with appreciation.", source: "Tim Ferriss" },
        { body: "There is virtue in work and there is virtue in rest. Use both and overlook neither.", source: "Alan Cohen" }
      ],
      showAdvanced: !1,
      template: e.templates.main,
      events: {
        "click .balance-mode": "toggleBalanceMode",
        "click .balance-option": "toggleBalanceOption",
        "click .day-toggle": "toggleDay",
        "change .balance-time": "updateBalanceTime",
        "click .balance-shortcut": "chooseShortcut",
        "click .days-shortcut": "setDays",
        "click .toggle-custom": "toggleCustomOptions",
        "click .cancel-custom": "cancelCustomOptions",
        "click .button-advanced": "toggleAdvanced"
      },
      initialize: function (t) {
        c.models.balanceMode && !c.models.balanceMode.initCompleted && (c.models.balanceMode.initCompleted = !0),
          (this.collection = new c.collect.Settings()),
          t && t.showAdvanced && (this.showAdvanced = !0),
          (this.plusEnabled = c.conditionalFeatures.featureEnabled("plus")),
          (this.shortcuts = {});
        for (var e = 8.5, n = 4.5; e < 10; ) {
          var a,
            s,
            o = (a = Math.floor(e)) == e ? "00" : "30",
            i = Math.floor(n),
            l = this.generateLabel(a, o, i, (s = i == n ? "00" : "30"));
          (this.shortcuts[l] = {}),
            (this.shortcuts[l].start = { hour: a, minute: o, noon: "AM" }),
            (this.shortcuts[l].end = { hour: i, minute: s, noon: "PM" }),
            (this.shortcuts[l].label = l),
            (this.hour24 = !c.models.customization.get("hour12clock")),
            (this.shortcuts[l].displayLabel = this.generateLabel((this.hour24 ? "0" : "") + a, o, i + (this.hour24 ? 12 : 0), s)),
            (n += 0.5),
            (e += 0.5);
        }
        (this.heightFound = !1),
          (this.animating = { customTime: !1, customDays: !1 }),
          (this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)]);
      },
      render: function () {
        var t,
          e = this;
        return (
          this.$el.css("opacity", 0),
          this.$el.html(this.template(this)),
          (this.$buttonAdvanced = this.$(".button-advanced")),
          (this.$wrapperAdvanced = this.$(".wrapper-advanced")),
          this.showAdvanced &&
            setTimeout(function () {
              c.utils.scrollToBottom(e.$el);
            }, 0),
          this.toggleAdvanced(null, this.showAdvanced),
          this.heightFound || (0 < (t = this.$(".toggle-options-custom")).length && t.css({ position: "absolute", opacity: 0 })),
          (this.$balanceToggler = this.$el.find(".balance-mode")),
          this.updateBalanceMode(!0),
          setTimeout(function () {
            e.$el.css("opacity", 1);
          }, 10),
          setTimeout(function () {
            e.calcCustomHeights();
          }, 1),
          setTimeout(function () {
            e.$el.find(".toggle-options-custom").addClass("animating");
          }, 400),
          this.analytics.capture("settings panel show"),
          this
        );
      },
      generateLabel: function (t, e, n, a) {
        return t + ":" + e + "-" + n + ":" + a;
      },
      calcCustomHeights: function () {
        var a = this;
        a.$(".toggle-options-custom").each(function () {
          var t,
            e = i(this),
            n = e.height();
          0 < n &&
            (e.data("main-height", n),
            (t = 0),
            c.models.balanceMode.get("custom" + e.data("custom")) && (t = n),
            e.css({ overflow: "hidden", height: t, position: "relative" }),
            e.css({ opacity: 1 }),
            (a.heightFound = !0));
        });
      },
      updateBalanceDays: function (t) {
        for (var n = c.models.balanceMode, e = "", a = 0; a < 7; a++) n.get("days")[a] && (0 < e.length && (e += ","), (e += a));
        (this.customDays = !1),
          this.$el.find(".days-shortcut").removeClass("active"),
          this.$el.find(".days-custom").removeClass("active"),
          n.get("customDays")
            ? (this.$(".days-custom").addClass("active"), this.showCustomOptions(this.$(".custom-days-toggle"), !0))
            : (this.$el.find('[data-days="' + e + '"]').addClass("active"), t || this.hideCustomOptions(this.$(".custom-days-toggle"))),
          this.$el.find(".day-toggle").each(function (t, e) {
            e = i(e);
            e.toggleClass("active", n.get("daysCustom")[parseInt(e.attr("data-day"))]);
          });
      },
      updateBalanceMode: function (t) {
        var s = c.models.balanceMode,
          o =
            (this.$balanceToggler.toggleClass("on", s.get("enabled")),
            this.$(".show-on-balance").mToggle("block", s.get("enabled")),
            this.$(".balance-option").each(function (t, e) {
              e = i(e);
              e.toggleClass("on", s.get([e.attr("data-option")]));
            }),
            !c.models.customization.get("hour12clock")),
          e =
            (this.$el.find(".balance-time").each(function () {
              var t = i(this),
                e = t.attr("data-time"),
                n = t.attr("data-side"),
                n = s.get(n + "Custom"),
                a = 0,
                n = (o && "hour" == e ? "PM" == n.noon && (a = 12) : o || "hour" != e || 0 != n.hour || (a = 12), n[e]);
              a && (n = parseInt(n) + a), t.val((n = o && "hour" == e && 1 == (n + "").length ? "0" + n : n));
            }),
            this.generateLabel(s.get("start").hour, s.get("start").minute, s.get("end").hour, s.get("end").minute));
        this.$(".balance-shortcut").removeClass("active"),
          s.get("customTime")
            ? (this.$(".time-custom").addClass("active"), this.showCustomOptions(this.$(".custom-time-toggle"), !0))
            : (this.$el.find('[data-shortcut="' + e + '"]').addClass("active"),
              this.$(".time-custom").removeClass("active"),
              t || this.hideCustomOptions(this.$(".custom-time-toggle"))),
          this.updateBalanceDays(t);
      },
      updateBalanceTime: function (t) {
        var e,
          n = i(t.delegatedTarget).attr("data-time"),
          a = i(t.delegatedTarget).attr("data-side"),
          s = c.models.balanceMode,
          o = s.get(a + "Custom"),
          o = { hour: o.hour, minute: o.minute, noon: o.noon },
          t = i(t.delegatedTarget).val();
        "hour" == n
          ? ((t = parseInt(t)),
            c.models.customization.get("hour12clock")
              ? (o.hour = 12 == t ? 0 : t)
              : ((o.hour = t - ((e = 11 < t) ? 12 : 0)), (o.noon = e ? "PM" : "AM")))
          : (o[n] = t),
          s.set(a + "Custom", o),
          this.updateBalanceMode(),
          c.models.balanceMode.balanceChanged(),
          this.analytics.capture("hours customize", { is_paid_event: !0 });
      },
      toggleBalanceMode: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var t = c.models.balanceMode,
          e = !c.models.balanceMode.get("enabled");
        this.analytics.capture(e ? "feature enable" : "feature disable"),
          c.models.customization.set("balanceManualToggle", !0),
          t.set("enabled", e),
          this.$balanceToggler.toggleClass("on", e),
          this.$(".show-on-balance").mToggle("block", e),
          t.balanceChanged(),
          e && (localStorage.setItem("balanceManualToggle", !0), this.calcCustomHeights(), this.updateBalanceMode());
      },
      toggleBalanceOption: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var e = i(t.delegatedTarget).attr("data-option"),
          n = c.models.balanceMode;
        n.set(e, !n.get(e)),
          i(t.delegatedTarget).toggleClass("on", n.get(e)),
          c.models.balanceMode.balanceChanged(),
          this.analytics.capture("downtime options change");
      },
      chooseShortcut: function (a) {
        var s = this,
          o = c.models.balanceMode;
        o.set("customTime", !1),
          this.$(".balance-shortcut").each(function (t, e) {
            var n = i(e);
            e == a.delegatedTarget &&
              ((n = { hour: (e = s.shortcuts[n.attr("data-shortcut")]).start.hour, minute: e.start.minute, noon: e.start.noon }),
              (e = { hour: e.end.hour, minute: e.end.minute, noon: e.end.noon }),
              o.set("start", n),
              o.set("end", e));
          }),
          c.models.balanceMode.balanceChanged(),
          this.updateBalanceMode(),
          this.analytics.capture("hours select builtin");
      },
      setDays: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var t = i(t.delegatedTarget),
          e = c.models.balanceMode;
        e.set("customDays", !1);
        for (var t = t.attr("data-days").split(","), n = e.get("days"), a = 0; a < 7; a++) n[a] = !1;
        t.map(function (t) {
          n[parseInt(t)] = !0;
        }),
          this.updateBalanceDays(),
          c.models.balanceMode.balanceChanged(),
          this.analytics.capture("days select builtin");
      },
      toggleDay: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var t = i(t.delegatedTarget),
          e = c.models.balanceMode,
          n = parseInt(t.attr("data-day"));
        (e.get("daysCustom")[n] = !e.get("daysCustom")[n]),
          t.toggleClass("active", e.get("daysCustom")[n]),
          this.updateBalanceDays(),
          c.models.balanceMode.balanceChanged(),
          this.analytics.capture("days customize", { is_paid_event: !0 });
      },
      toggleCustomOptions: function (t) {
        var e;
        c.conditionalFeatures.featureEnabled("plus")
          ? ((e = (t = i(t.delegatedTarget).closest(".slide-toggle")).find(".toggle-options-custom").data("custom")),
            t.hasClass("show-custom") || (this.showCustomOptions(t), c.models.balanceMode.balanceChanged()),
            this.analytics.capture(("Days" === e ? "days" : "hours") + " select custom", { is_paid_event: !0 }))
          : c.cmd("modal.open", "UPSELL_BALANCE_MODE", { eventSource: "settings" });
      },
      showCustomOptions: function (t, e) {
        var n,
          a = c.models.balanceMode,
          s = t.find(".toggle-options-custom"),
          o = (t.addClass("show-custom"), "custom" + s.data("custom"));
        this.animating[o] ||
          10 < s.height() ||
          ((this.animating[o] = !0),
          (n = this),
          setTimeout(function () {
            n.animating[o] = !1;
          }, 200),
          s.css({ height: s.data("main-height") }),
          e) ||
          (a.set(o, !0), this.updateBalanceMode());
      },
      hideCustomOptions: function (t) {
        var e = this,
          n = t.find(".toggle-options-custom"),
          a = "custom" + n.data("custom");
        this.animating[a] ||
          n.height() < 10 ||
          ((this.animating[a] = !0),
          n.css({ height: 0 }),
          setTimeout(function () {
            e.animating[a] = !1;
          }, 200),
          t.removeClass("show-custom"));
      },
      toggleAdvanced: function (t, e) {
        void 0 === e
          ? (c.settingsUtils.toggleAdvanced(this), (this.showAdvanced = !this.showAdvanced))
          : (this.$buttonAdvanced.toggleClass("active", e), this.$wrapperAdvanced.mToggle("block", e));
      },
      cancelCustomOptions: function (t) {
        this.toggleCustomOptions(t);
      }
    })),
    c.commandManager &&
      c.commandManager.registerCommand("settings.panels.balance", function (t) {
        return e.styleLoaded || ((e.styleLoaded = !0), e.styles.style()), new e.views.Main(t);
      }),
    e
  );
};
m.addinManager && m.addinManager.registerAddinFn("1e373fa7-a454-4652-8d77-1a4fcc88c069", fn_addin);
