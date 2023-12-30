(() => {
  var N = (m, g) => () => (g || m((g = { exports: {} }).exports, g), g.exports);
  var y = N((S, C) => {
    C.exports = {
      prod: !0,
      beta: !1,
      buildDate: "mer. 20 d\xE9c. 2023 16:32:19 UTC",
      buildOptions: { linuxlic: !1, noyt: !0, browser: "chrome" }
    };
  });
  weh.is_safe.then(() => {
    let m = new RegExp("(\\d+)x(\\d+)"),
      g = new RegExp("([\\d\\.]+)\\s*(\\S+)"),
      v = new Set();
    window.addEventListener("unload", () => {
      for (let e of v) weh.rpc.call("galleryUnhighlight", e);
    });
    let f = y().buildOptions || {};
    f.browser != "firefox" && (document.querySelector("html").style.width = "500px");
    function _(e = { hits: {}, progress: {}, actionHit: null, actions: {}, logs: [], embed: null, maxHeight: void 0 }, t) {
      switch (t.type) {
        case "setActionHit":
          e = Object.assign({}, e, { actionHit: t.payload });
          break;
        case "clearActionHit":
          e = Object.assign({}, e, { actionHit: null, embed: null });
          break;
        case "updateData":
          e = Object.assign({}, e, t.payload);
          break;
        case "embed":
          e = Object.assign({}, e, { embed: t.payload });
          break;
        case "setMaxHeight":
          e = Object.assign({}, e, { maxHeight: t.payload });
          break;
      }
      return e;
    }
    let p = createStore(_);
    weh.rpc.listen({
      hits: (e) => {
        p.dispatch({ type: "updateData", payload: { hits: e } });
      },
      progress: (e) => {
        p.dispatch({ type: "updateData", payload: { progress: e } });
      },
      logs: (e) => {
        p.dispatch({ type: "updateData", payload: { logs: e } });
      },
      copyToClipboard: (e) => {
        var t = document.createElement("input");
        document.body.appendChild(t), (t.value = e), t.select(), document.execCommand("Copy"), document.body.removeChild(t);
      },
      embed: (e) => {
        p.dispatch({ type: "embed", payload: e });
      }
    }),
      weh.prefs.then((e) => {
        let t = (i) => {
          let s;
          switch (f.browser) {
            case "chrome":
              s = 590;
              break;
            case "edge":
              s = 500;
              break;
            default:
              s = 600;
          }
          browser.windows.getLastFocused().then((r) => {
            p.dispatch({ type: "setMaxHeight", payload: "" + Math.min(s, r.height - i) + "px" });
          });
        };
        e.on("popupHeightLeftOver", (i, s) => t(s)), t(e.popupHeightLeftOver);
      }),
      weh.rpc.call("getMainData").then((e) => {
        p.dispatch({ type: "updateData", payload: e });
      });
    var k = connect(
      (e, t) => ({
        hits: e.hits || {},
        progress: e.progress || {},
        actionHit: e.actionHit || null,
        actions: e.actions || {},
        logs: e.logs || [],
        embed: e.embed || null,
        maxHeight: e.maxHeight || void 0
      }),
      (e) => bindActionCreators({}, e)
    )(
      class extends React.Component {
        constructor(e) {
          super(e),
            (this.state = { section: "active", hitGroups: [], hits: {}, counters: this.zeroCounters(), actionHit: null }),
            (this.call = this.call.bind(this));
        }
        componentWillReceiveProps(e) {
          this.buildGroups(e.hits), this.setState({ actionHit: e.actionHit });
        }
        call(...e) {
          return () => {
            weh.rpc.call(...e);
          };
        }
        local(e, ...t) {
          return this[e].bind(this, ...t);
        }
        canClear() {
          for (var e = Object.keys(this.state.hits), t = 0; t < e.length; t++) {
            var i = this.state.hits[e[t]];
            if (i.status == "active" || i.status == "inactive" || i.status == "orphan") return !0;
          }
        }
        zeroCounters() {
          return { all: 0, active: 0, inactive: 0, orphan: 0, pinned: 0, running: 0 };
        }
        buildGroups(e, t) {
          t = t || this.state.section;
          let i = [
            "description",
            "descrPrefix",
            "adp",
            "size",
            "duration",
            "quality",
            "bitrate",
            "length",
            "mediaDomain",
            "type",
            "extension",
            "originalExt"
          ];
          var s = { counters: this.zeroCounters() };
          if (!e) {
            (s.hitGroups = []), this.setState(s);
            return;
          }
          var r = [],
            n = {};
          for (var a in e) {
            var h = e[a];
            h.status == t && (h.group ? (n[h.group] ? n[h.group].push(h) : (n[h.group] = [h])) : ((h.primary = !0), r.push([h]))),
              s.counters.all++,
              s.counters[h.status]++;
          }
          for (var b in n) {
            var l = n[b];
            l.sort((c, d) => {
              if (c.bitrate && d.bitrate && c.bitrate != d.bitrate) return d.bitrate - c.bitrate;
              var o = m.exec(c.size);
              if (o) {
                var u = m.exec(d.size);
                if (u && (o[1] != u[1] || o[2] != u[2])) return parseInt(u[1]) * parseInt(u[2]) - parseInt(o[1]) * parseInt(o[2]);
              }
              return 0;
            }),
              l.forEach((c, d) => {
                c.primary = d === 0;
              });
            var w = l[0],
              T = {};
            i.forEach(function (c) {
              if (!(typeof w[c] > "u")) {
                for (var d = !0, o = 1; o < l.length; o++) {
                  var u = l[o];
                  if (u[c] !== w[c]) {
                    d = !1;
                    break;
                  }
                }
                if (d) for (var o = 1; o < l.length; o++) delete l[o][c];
              }
            }),
              r.push(l);
          }
          (s.hitGroups = r), (s.hits = e), this.setState(s);
        }
        sortGroups(e, t) {
          let i = e[0],
            s = t[0];
          return i.extension === "mp4" && s.extension != "mp4"
            ? -1
            : i.running && s.running && i.actionStartDate && s.actionStartDate
            ? i.actionStartDate - s.actionStartDate
            : i.chunked && !s.chunked
            ? -1
            : !i.chunked && s.chunked
            ? 1
            : i.adp && !s.adp
            ? -1
            : !i.adp && s.adp
            ? 1
            : i.chunked && e.length != t.length
            ? t.length - e.length
            : (s.created || 0) - (i.created || 0);
        }
        logDetails(e) {
          return () => {
            weh.rpc.call("logDetails", e);
          };
        }
        command(e) {
          var t = this;
          return (i) => {
            i.stopPropagation();
            var s = i.shiftKey,
              r = t.state.actionHit;
            r &&
              weh.rpc.call("actionCommand", e, r.id).then((n) => {
                !s && !n && window.close();
              }),
              t.asDefaultInput &&
                t.asDefaultInput.checked &&
                (weh.unsafe_prefs["default-action-" + (t.props.actions[e].catPriority || 0)] = e);
          };
        }
        renderActions() {
          if (!this.state.actionHit || this.props.embed) return null;
          var e = this,
            t = (this.state.actionHit.actions || []).map((i) =>
              React.createElement(
                "div",
                { key: i, className: "vdh-container click action" },
                React.createElement(
                  "div",
                  { onClick: this.command(i) },
                  React.createElement(
                    "div",
                    { className: "action-thumbnail" },
                    React.createElement("img", { src: e.props.actions[i].icon })
                  ),
                  React.createElement(
                    "div",
                    { className: "action-details" },
                    React.createElement("div", { className: "action-title" }, e.props.actions[i].title),
                    React.createElement("div", { className: "action-descr" }, e.props.actions[i].description)
                  )
                )
              )
            );
          return React.createElement(
            "div",
            { className: "actions" },
            t,
            React.createElement(
              "div",
              { className: "default-check" },
              React.createElement("input", { id: "checkbox1", type: "checkbox", ref: (i) => (this.asDefaultInput = i) }),
              React.createElement("label", { htmlFor: "checkbox1" }, weh._("action_as_default"))
            )
          );
        }
        renderEmbed() {
          return this.props.embed ? React.createElement(Embedded, { className: "embed", src: this.props.embed }) : null;
        }
        renderLog() {
          var e = this,
            t = this.props.logs.map((i) =>
              React.createElement(
                "div",
                { key: i.key, className: "vdh-log vdh-log-" + i.type },
                i.videoTitle && React.createElement("div", { className: "log-video-title" }, i.videoTitle),
                i.message,
                i.details && React.createElement("a", { onClick: e.logDetails(i.key), href: "#" }, weh._("details_parenthesis"))
              )
            );
          return React.createElement("div", { className: "logs" }, t);
        }
        renderNoHit() {
          return this.state.section == "active"
            ? React.createElement(
                "div",
                { className: "no-media" },
                React.createElement("h2", null, weh._("no_media_current_tab")),
                React.createElement("p", null, weh._("no_media_to_process_descr"))
              )
            : React.createElement("div", { className: "no-media" }, React.createElement("h2", null, weh._("no_media_to_process")));
        }
        renderHits() {
          if (this.state.section == "log") return this.renderLog();
          if (this.state.hitGroups.length == 0) return this.renderNoHit();
          var e = this,
            t = [];
          Object.keys(this.state.hitGroups).forEach((s) => {
            var r = e.state.hitGroups[s];
            t.push(r);
          }),
            t.sort(e.sortGroups);
          var i = [];
          return (
            t.forEach((s) => {
              s.forEach((r) => {
                var n = e.props.actions[r.actions[0]];
                i.push(React.createElement(x, { key: r.id, hit: r, progress: e.props.progress[r.id] || -1, defaultAction: n }));
              });
            }),
            React.createElement("div", { className: "has-media" }, i)
          );
        }
        renderFooterButtons() {
          return React.createElement(
            "div",
            { className: "buttons" },
            React.createElement(
              "div",
              { className: "buttons-container" },
              React.createElement("div", { className: "buttons-opener" }, React.createElement("img", { src: "images/icon-3dots-64.png" })),
              React.createElement(
                "button",
                { onClick: this.call("openAbout"), title: weh._("about") },
                React.createElement("img", { src: "images/icon-about-64.png" })
              ),
              f.browser == "firefox" &&
                React.createElement(
                  "button",
                  { onClick: this.call("openSites"), title: weh._("supported_sites") },
                  React.createElement("img", { src: "images/icon-sites-list-64.png" })
                ),
              React.createElement(
                "button",
                { onClick: this.call("analyzePage"), title: weh._("analyze_page") },
                React.createElement("img", { src: "images/icon-photo-64.png" })
              ),
              React.createElement(
                "button",
                { onClick: this.call("convertLocal"), title: weh._("convert_local_files") },
                React.createElement("img", { src: "images/icon-action-convert-b-64.png" })
              ),
              React.createElement(
                "button",
                { onClick: this.call("mergeLocal"), title: weh._("merge_local_files") },
                React.createElement("img", { src: "images/icon-merger-64.png" })
              ),
              React.createElement("div", { className: "separator" }),
              React.createElement("div", { className: "separator" }, "\xA0"),
              this.canClear() &&
                React.createElement(
                  "button",
                  { onClick: this.call("clearHits", "all"), title: weh._("clear_hits") },
                  React.createElement("img", { src: "images/icon-action-delete-64.png" })
                )
            )
          );
        }
        setSection(e) {
          var t = this;
          return () => {
            t.buildGroups(t.state.hits, e), t.setState({ section: e });
          };
        }
        clearLogs() {
          var e = this;
          return () => {
            weh.rpc.call("clearLogs").then(e.setSection("active"));
          };
        }
        shouldDisplayGroupText(e) {
          if (this.state.section == e || (e == "log" && this.props.logs.length == 0)) return !1;
          for (var t = Object.keys(this.state.counters), i = 0; i < t.length; i++) {
            var s = t[i],
              r = this.state.counters[s];
            if ((s == e && r == 0) || (s != "all" && s != e && s != this.state.section && r > 0)) return !1;
          }
          return !(e != "log" && this.props.logs.length > 0);
        }
        showGroupBadge(e, t) {
          var i = "",
            s = 0,
            r = e;
          if (this.state.section == e) return null;
          if (e == "log") {
            if (((s = this.props.logs.length), s == 0)) return null;
            var n = this.props.logs.filter((a) => a.type == "error");
            n.length > 0 ? ((i = weh._("errors")), (s = n.length), (e = "error")) : (i = weh._("logs"));
          } else {
            if (this.state.counters[e] == 0) return;
            (i = weh._(t)), (s = this.state.counters[e]);
          }
          return React.createElement(
            "div",
            { className: "click group group-" + e, onClick: this.setSection(r), title: i },
            React.createElement("div", null, React.createElement("div", null, s))
          );
        }
        showGroupText(e, t) {
          if (this.shouldDisplayGroupText(e)) {
            var i = this.props.logs.filter((s) => s.type == "error").length;
            return (
              e == "log" && i > 0 && (t = "errors"),
              React.createElement("div", { className: "click group-text", onClick: this.setSection(e) }, weh._(t))
            );
          } else return null;
        }
        renderFooterGroups() {
          return React.createElement(
            "div",
            { className: "groups" },
            this.showGroupBadge("active", "in_current_tab"),
            this.showGroupText("active", "in_current_tab"),
            this.showGroupBadge("inactive", "in_other_tab"),
            this.showGroupText("inactive", "in_other_tab"),
            this.showGroupBadge("orphan", "orphan"),
            this.showGroupText("orphan", "orphan"),
            this.showGroupBadge("pinned", "pinned"),
            this.showGroupText("pinned", "pinned"),
            this.showGroupBadge("running", "running"),
            this.showGroupText("running", "running"),
            this.showGroupBadge("log", "logs"),
            this.showGroupText("log", "logs")
          );
        }
        renderFooter() {
          return React.createElement(
            "footer",
            null,
            React.createElement(
              "div",
              { className: "right-side" },
              React.createElement("div", { className: "separator" }, "\xA0"),
              React.createElement(
                "button",
                { onClick: this.call("openSettings"), title: weh._("settings") },
                React.createElement("img", { src: "images/icon-settings-64.png" })
              )
            ),
            this.renderFooterButtons(),
            this.renderFooterGroups()
          );
        }
        clearActionHit() {
          return () => {
            p.dispatch({ type: "clearActionHit" });
          };
        }
        render() {
          return React.createElement(
            "div",
            { className: "main-panel " + (((this.state.actionHit || this.props.embed) && "actions-open ") || " ") },
            this.renderActions(),
            this.renderEmbed(),
            React.createElement(
              "div",
              { className: "main-content section-" + this.state.section, style: { maxHeight: this.props.maxHeight } },
              React.createElement("img", {
                className: "click back-active",
                onClick: this.setSection("active"),
                src: "images/icon-chevron-left-64.png"
              }),
              this.state.section == "log" &&
                React.createElement("img", {
                  className: "click clear-logs",
                  onClick: this.clearLogs(),
                  src: "images/icon-action-delete-64.png",
                  title: weh._("clear_logs")
                }),
              React.createElement("div", { className: "click back-margin", onClick: this.setSection("active") }),
              React.createElement(
                "main",
                { className: "content-hits" },
                this.renderHits(),
                React.createElement("div", { className: "main-content-mask", onClick: this.clearActionHit() })
              ),
              this.renderFooter()
            )
          );
        }
      }
    );
    class x extends React.Component {
      constructor(t) {
        super(t), (this.action = this.action.bind(this)), (this.state = {});
      }
      componentWillReceiveProps(t) {
        this.orphanTimer || this.updateOrphanTimer(t);
      }
      componentDidMount() {
        this.orphanTimer || this.updateOrphanTimer();
      }
      componentWillUnmount() {
        this.orphanTimer && (clearTimeout(this.orphanTimer), (this.orphanTimer = null));
      }
      updateOrphanTimer(t) {
        if (((t = t || this.props), (this.orphanTimer = null), this.props.hit.status == "orphan")) {
          var i = Date.now(),
            s = this.props.hit.orphanT0,
            r = this.props.hit.orphanT;
          this.setState({ orphanTimer: Math.max(0, Math.min(100, (100 * (r - i)) / (r - s))) }),
            (this.orphanTimer = setTimeout(this.updateOrphanTimer.bind(this), 1e3));
        }
      }
      action(t) {}
      getClass() {
        return "";
      }
      durationString(t) {
        var i = Math.floor(t / 3600),
          s = Math.floor((t % 3600) / 60),
          r = t % 60;
        return i > 0 ? i + ":" + ("00" + s).substr(-2) + ":" + ("00" + r).substr(-2) : s + ":" + ("00" + r).substr(-2);
      }
      description() {
        var t = this.props.hit;
        if (t.description) return t.description;
        var i = [];
        if (t.operation === "downloading" && t.dlbitrate) {
          let a = g.exec(t.dlbitrate);
          a && i.push(a[1] + " " + a[2]);
        }
        if (
          (t.descrPrefix && i.push(t.descrPrefix),
          t.adp && i.push("ADP"),
          t.size && i.push(t.size),
          t.duration && i.push(this.durationString(t.duration)),
          t.quality)
        ) {
          let a = weh._("quality_" + t.quality);
          a == "" && (a = t.quality.toUpperCase()), i.push(a);
        }
        if (t.bitrate) {
          var s = t.bitrate,
            r = "bps";
          t.bitrate > 1e7
            ? ((r = "Mbps"), (s = Math.round(t.bitrate / 1e6)))
            : t.bitrate > 1e6
            ? ((r = "Mbps"), (s = Math.round(t.bitrate / 1e5) / 10))
            : t.bitrate > 1e4
            ? ((r = "Kbps"), (s = Math.round(t.bitrate / 1e3)))
            : t.bitrate > 1e3 && ((r = "Kbps"), (s = Math.round(t.bitrate / 100) / 10)),
            i.push(s + r);
        }
        var n = this.lengthString();
        if (
          (n && i.push(n),
          t.mediaDomain && i.push(weh._("from_domain", [t.mediaDomain])),
          t.type == "audio" && i.push(weh._("audio_only")),
          t.extension &&
            (t.originalExt && t.originalExt != t.extension && i.push(t.originalExt.toUpperCase() + ">" + t.extension.toUpperCase()),
            i.push(t.extension.toUpperCase())),
          t.operation === "downloading" ||
            t.operation === "aggregating" ||
            t.operation === "converting" ||
            t.operation === "collecting" ||
            (this.props.progress && !t.operation))
        ) {
          let a = this.props.progress;
          if (t.opStartDate && a !== "undefined" && a >= 0 && (i.push(a + "%"), a > 0)) {
            let l = ((Date.now() - t.opStartDate) / a) * (100 - a);
            (l = Math.max(0, Math.floor(l / 1e3))), i.push(this.durationString(l));
          }
        }
        return i.join(" - ");
      }
      lengthString() {
        var t = this.props.hit;
        return t.length
          ? t.length > 1024 * 1024
            ? weh._("MB", [Math.round((t.length * 10) / (1024 * 1024)) / 10])
            : t.length > 1024
            ? weh._("KB", [Math.round((t.length * 10) / 1024) / 10])
            : weh._("Bytes", [t.length])
          : null;
      }
      titleClass() {
        var t = ["hit-title-text"];
        return t.push("hit-title-text-" + weh.unsafe_prefs.titleMode), t.join(" ");
      }
      progress() {
        let t = parseInt(this.props.progress);
        return (isNaN(t) || t < 0) && (t = 0), { width: t + "%" };
      }
      orphanTimerStyle() {
        return { width: (this.state.orphanTimer || 100) + "%" };
      }
      moreActions() {
        var t = this;
        return (i) => {
          i.stopPropagation(), p.dispatch({ type: "setActionHit", payload: t.props.hit });
        };
      }
      call(...t) {
        return () => {
          weh.rpc.call(...t);
        };
      }
      callDefault() {
        var t = this;
        return (i) => {
          i.stopPropagation();
          var s = i.shiftKey;
          weh.rpc.call("actionCommand", t.props.hit.actions[0], t.props.hit.id).then((r) => {
            !s && !r && window.close();
          });
        };
      }
      onMouseEnter() {
        var t = this;
        return () => {
          v.add(t.props.hit.selectorAttr), weh.rpc.call("galleryHighlight", t.props.hit.selectorAttr);
        };
      }
      onMouseLeave() {
        var t = this;
        return () => {
          v.delete(t.props.hit.selectorAttr), weh.rpc.call("galleryUnhighlight", t.props.hit.selectorAttr);
        };
      }
      render() {
        var t = this.props.hit;
        return React.createElement(
          "div",
          {
            className: "click hit " + this.getClass(),
            onMouseEnter: t.mouseTrack && this.onMouseEnter(),
            onMouseLeave: t.mouseTrack && this.onMouseLeave(),
            onClick: this.callDefault()
          },
          React.createElement(
            "div",
            { className: "vdh-container" },
            React.createElement(
              "div",
              null,
              (t.thumbnail || t.thumbnailUrl) &&
                t.primary &&
                React.createElement(
                  "div",
                  { className: "hit-thumbnail" },
                  React.createElement("img", { src: t.thumbnailUrl || t.thumbnail })
                ),
              React.createElement(
                "div",
                { className: "vdh-fullwidth hit-descr" },
                t.primary &&
                  React.createElement(
                    "div",
                    { className: "hit-title" },
                    React.createElement("div", { className: this.titleClass() }, t.title)
                  ),
                React.createElement(
                  "div",
                  { className: "hit-summary" },
                  this.props.defaultAction &&
                    React.createElement(
                      "div",
                      { className: "hit-summary-action", title: this.props.defaultAction.description },
                      React.createElement(
                        "div",
                        null,
                        React.createElement("img", { className: "default-action", src: this.props.defaultAction.icon })
                      )
                    ),
                  t.primary &&
                    weh.unsafe_prefs.hitsGotoTab &&
                    t.topUrl &&
                    t.status == "inactive" &&
                    React.createElement("img", {
                      className: "hit-descr-button",
                      src: "images/icon-gototab-64.png",
                      title: weh._("hit_go_to_tab"),
                      onClick: this.call("gotoTab", t.topUrl)
                    }),
                  t._signature && t._signature && t._signature.length > 0 && React.createElement("img", { src: "images/icon-lock-64.png" }),
                  t.operation && React.createElement("span", { className: "hit-operation" }, weh._(t.operation) + " - "),
                  this.description()
                ),
                t.status == "running" &&
                  React.createElement("div", { className: "hit-progress" }, React.createElement("div", { style: this.progress() })),
                t.status == "orphan" &&
                  React.createElement(
                    "div",
                    { className: "hit-progress hit-orphan" },
                    React.createElement("div", { style: this.orphanTimerStyle() })
                  )
              ),
              React.createElement(
                "div",
                { className: "click hit-actions", onClick: this.moreActions() },
                React.createElement("div", null, React.createElement("img", { className: "more-actions", src: "images/icon-3dots-64.png" }))
              )
            )
          )
        );
      }
    }
    render(React.createElement(Provider, { store: p }, React.createElement(k, null)), document.getElementById("root"));
  });
})();
