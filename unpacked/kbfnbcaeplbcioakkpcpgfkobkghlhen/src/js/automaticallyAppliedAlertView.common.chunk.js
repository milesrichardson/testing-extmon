(self.webpackChunk = self.webpackChunk || []).push([
  [9414],
  {
    75260: (e, t, s) => {
      s.r(t), s.d(t, { AutomaticallyAppliedAlertHighlights: () => g });
      var r = s(27378),
        h = s(72120),
        i = s(42356),
        a = s(77176),
        l = s(7604),
        o = s(58425);
      class p extends r.Component {
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
            ? r.createElement(
                r.Fragment,
                null,
                this.props.rects.map((e, t) =>
                  r.createElement("div", {
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
      const g = ({
        highlights: e,
        highlightHeightOffset: t,
        highlightsTheme: s,
        getAlertById: i,
        getHoverState: o,
        highlightsFilter: g,
        automaticallyFadeOut: d,
        grammarlyPart: n
      }) =>
        r.createElement(h.J, {
          highlights: e.view((e) =>
            Array.from(e.values()).filter((e) => {
              const t = i(e.meta.alertId);
              return !!t && g(t);
            })
          ),
          highlightHeightOffset: t,
          highlightsTheme: s,
          getHoverState: o,
          getAlertById: i,
          highlightRenderer: (e, t, s) =>
            r.createElement(p, {
              automaticallyFadeOut: d,
              rects: e.rects,
              heightOffset: s,
              isHovered: t.pipe(a.U((e) => e === l.pc.hovered)),
              baseKey: e.meta.highlightId,
              grammarlyPart: n
            })
        });
    },
    58425: (e) => {
      e.exports = {
        automaticAlertApplied: "CQ0pp",
        hovered: "dLCsS",
        automaticAlertHighlight: "AVZiz",
        highlightFadeOut: "N2yW4",
        fadeInOutUnderline: "VV5ad",
        undoIcon: "QJBJF",
        permanent: "H1MKl",
        wasEverHovered: "_7n3e"
      };
    }
  }
]);
