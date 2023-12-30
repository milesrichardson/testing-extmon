(self.webpackChunk = self.webpackChunk || []).push([
  [9414],
  {
    84268: (e, t, r) => {
      r.r(t), r.d(t, { AutomaticallyAppliedAlertHighlights: () => p });
      var s = r(27378),
        h = r(72120),
        i = r(42356),
        a = r(77176),
        l = r(7604),
        o = r(32538);
      class g extends s.Component {
        constructor() {
          super(...arguments), (this._sub = null), (this.state = { hovered: !1, wasEverHovered: !1 });
        }
        componentDidMount() {
          this._sub && this._sub.unsubscribe(),
            (this._sub = this.props.isHovered.subscribe((e) => {
              this.state.hovered !== e && this.setState((t) => ({ hovered: e, wasEverHovered: t.wasEverHovered || e }));
            }));
        }
        componentWillUnmount() {
          this._sub && this._sub.unsubscribe();
        }
        render() {
          return this.props.rects && this.props.rects.length > 0
            ? s.createElement(
                s.Fragment,
                null,
                this.props.rects.map((e, t) =>
                  s.createElement("div", {
                    key: t ? `${this.props.baseKey}${t}` : this.props.baseKey,
                    style: { top: e.top, left: e.left, width: e.width, height: Math.max(0, e.height + this.props.heightOffset) },
                    "data-grammarly-part": this.props.grammarlyPart,
                    className: (0, i.cs)(
                      o.automaticAlertHighlight,
                      o.automaticAlertApplied,
                      this.state.hovered && o.hovered,
                      !this.props.automaticallyFadeOut && o.permanent,
                      this.state.wasEverHovered && o.wasEverHovered
                    )
                  })
                )
              )
            : null;
        }
      }
      const p = ({
        highlights: e,
        highlightHeightOffset: t,
        highlightsTheme: r,
        getAlertById: i,
        getHoverState: o,
        highlightsFilter: p,
        automaticallyFadeOut: n,
        grammarlyPart: u
      }) =>
        s.createElement(h.J, {
          highlights: e.view((e) =>
            Array.from(e.values()).filter((e) => {
              const t = i(e.meta.alertId);
              return !!t && p(t);
            })
          ),
          highlightHeightOffset: t,
          highlightsTheme: r,
          getHoverState: o,
          getAlertById: i,
          highlightRenderer: (e, t, r) =>
            s.createElement(g, {
              automaticallyFadeOut: n,
              rects: e.rects,
              heightOffset: r,
              isHovered: t.pipe(a.U((e) => e === l.pc.hovered)),
              baseKey: e.meta.highlightId,
              grammarlyPart: u
            })
        });
    },
    32538: (e) => {
      e.exports = {
        automaticAlertApplied: "u0bKW",
        hovered: "DPmWq",
        automaticAlertHighlight: "r4W5p",
        highlightFadeOut: "oQ58h",
        fadeInOutUnderline: "vnBMk",
        undoIcon: "jxA30",
        permanent: "f37nV",
        wasEverHovered: "ayg3e"
      };
    }
  }
]);
