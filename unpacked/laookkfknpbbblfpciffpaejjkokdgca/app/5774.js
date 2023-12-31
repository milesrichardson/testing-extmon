"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5774],
  {
    55774: (e, t, n) => {
      n.r(t), n.d(t, { default: () => a });
      var d = n(20144),
        i = n(51089),
        p = n(25343),
        s = n(96046);
      const a = new (d.ZP.extend({
        name: "ModalDevPanelManager",
        data: () => ({ experimentMap: (0, p.DV)(), definitions: i.U, pinnedStep: null }),
        methods: {
          setStepActive(e, t) {
            const n = () => m.trigger("modal:show", e, t);
            m.modals ? n() : m.once("modalContainer:created:checkForced", n);
          },
          setPinnedStepActiveOnDashLoad({ stepId: e, subStepIndex: t, experimentId: n, variantId: d } = {}) {
            let i;
            if (n) {
              const t = this.experimentMap[n],
                p = t && t.variants[d];
              i = p && p.steps[e];
            } else i = this.definitions[e];
            i &&
              (this.toggleStepPinned(i, { stepId: e, subStepIndex: t, experimentId: n, variantId: d }),
              s.Z.appsReady
                ? this.setStepActive(i, t)
                : m.once("appsReady", () => {
                    this.setStepActive(i, t);
                  }));
          },
          toggleStepPinned(e, { stepId: t, subStepIndex: n, experimentId: d, variantId: i } = {}) {
            const p = localStorage.getObject("devPanel:pinnedStep");
            p
              ? this.objectsMatch(p, { stepId: t, subStepIndex: n, experimentId: d, variantId: i })
                ? (this.$set(e, "pinned", !e.pinned),
                  (this.pinnedStep = e.pinned ? e : null),
                  this.updateSubStepIndex(e, e.pinned ? n : void 0),
                  null === this.pinnedStep && m.trigger("modal:close"))
                : this.objectsMatch((({ stepId: e, experimentId: t, variantId: n }) => ({ stepId: e, experimentId: t, variantId: n }))(p), {
                    stepId: t,
                    experimentId: d,
                    variantId: i
                  })
                ? this.updateSubStepIndex(e, n)
                : (this.pinnedStep && (this.$set(this.pinnedStep, "pinned", !1), this.updateSubStepIndex(this.pinnedStep, void 0)),
                  this.$set(e, "pinned", !0),
                  this.updateSubStepIndex(e, n),
                  (this.pinnedStep = e))
              : (this.$set(e, "pinned", !0), (this.pinnedStep = e), this.updateSubStepIndex(e, n)),
              e.pinned
                ? localStorage.setObject("devPanel:pinnedStep", { stepId: t, subStepIndex: n, experimentId: d, variantId: i })
                : localStorage.removeItem("devPanel:pinnedStep");
          },
          updateSubStepIndex(e, t) {
            void 0 === t ? this.$delete(e, "pinnedSubStepIndex") : this.$set(e, "pinnedSubStepIndex", t);
          },
          objectsMatch: (e, t) => new Array(...new Set([...Object.keys(e), ...Object.keys(t)])).every((n) => e[n] === t[n])
        }
      }))();
    }
  }
]);
