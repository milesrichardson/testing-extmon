"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6182],
  {
    86182: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      var a = function () {
        var e = this,
          t = e._self._c;
        return !e.showGreeting || e.mantraOverride
          ? t(
              "div",
              { key: "mantra" },
              [
                t("mantra", {
                  attrs: { "mantra-override": e.mantraOverride },
                  on: {
                    "show-greeting": function (t) {
                      e.showGreeting = !0;
                    },
                    "stop-cycle": e.stopMantraGreetingCycle
                  }
                })
              ],
              1
            )
          : t(
              "div",
              { key: "greeting" },
              [
                t("greeting", {
                  on: {
                    "show-mantra": function (t) {
                      e.showGreeting = !1;
                    },
                    "stop-cycle": e.stopMantraGreetingCycle
                  }
                })
              ],
              1
            );
      };
      a._withStripped = !0;
      const r = {
          name: "GreetingMantraContainer",
          components: { Greeting: () => n.e(3569).then(n.bind(n, 23569)), Mantra: () => n.e(511).then(n.bind(n, 30511)) },
          mixins: [n(42223).Z],
          mantraManager: m.models.mantraManager,
          data: () => ({ showGreeting: null, timeoutId: null, intervalId: null, mantraOverride: null }),
          computed: {
            isMantraShowing() {
              return !1 === this.showGreeting;
            }
          },
          created() {
            m.on("globalEvent:pageHidden", this.clearMantraGreetingCycleIfInAlternatingMode),
              m.on("globalEvent:pageShown", this.setMantraGreetingCycleIfInAlternatingMode),
              m.models.customization.on("change:mantraVisible", this.toggleMantraFromTrigger),
              m.models.mantraManager.on("show-mantra", this.showMantraFromTrigger),
              m.models.mantraSettings.on("change:firstMantraActivated", this.showMantraFromTrigger),
              m.models.mantraManager.on("show-greeting", this.showGreetingFromTrigger),
              m.models.mantraSettings.on("change:frequency", this.mantraFrequencyChangeFromTrigger),
              m.models.mantraManager.on("mantra-pin", this.showPinnnedMantraFromTrigger),
              m.models.mantraManager.on("mantra-un-pin", this.hidePinnnedMantraFromTrigger),
              m.models.mantraManager.on("mantra-active-change", this.showMantraFromTrigger),
              this.$options.mantraManager.shouldShowMantraAfterGreetingFirstTabOfDay() && this.showMantraOnTimeoutForFirstTabOfDay(),
              m.on("mantra:override", this.overrideMantra),
              m.trigger("greetingMantraContainer:created"),
              (this.showGreeting = !this.$options.mantraManager.checkIfMantraShouldBeShown()),
              this.showGreeting &&
                !this.$options.mantraManager.hasSeenGreetingToday() &&
                this.$options.mantraManager.markGreetingAsSeenToday(),
              this.setMantraGreetingCycleIfInAlternatingMode();
          },
          destroyed() {
            this.clearMantraGreetingCycle(),
              m.off("globalEvent:pageHidden", this.clearMantraGreetingCycleIfInAlternatingMode),
              m.off("globalEvent:pageShown", this.setMantraGreetingCycleIfInAlternatingMode),
              m.models.customization.off("change:mantraVisible", this.toggleMantraFromTrigger),
              m.models.mantraManager.off("show-mantra", this.showMantraFromTrigger),
              m.models.mantraManager.off("show-greeting", this.showGreetingFromTrigger),
              m.models.mantraManager.off("mantra-pin", this.clearAndSetMantraGreetingCycleIfInAlternatingMode),
              m.models.mantraSettings.off("change:frequency", this.mantraFrequencyChangeFromTrigger),
              m.off("mantra:override", this.overrideMantra);
          },
          methods: {
            overrideMantra(e) {
              (this.mantraOverride = e), this.clearMantraGreetingCycle();
            },
            showMantraOnTimeoutForFirstTabOfDay() {
              this.timeoutId && clearTimeout(this.timeoutId),
                (this.timeoutId = setTimeout(() => {
                  this.showGreeting = !1;
                }, this.$options.mantraManager.durationGreetingFirstTabOfDay)),
                this.$options.mantraManager.markGreetingAsSeenToday();
            },
            showGreetingFromTrigger() {
              this.clearAndSetMantraGreetingCycleIfInAlternatingMode(), (this.showGreeting = !0);
            },
            showMantraFromTrigger() {
              this.$options.mantraManager.getActiveItem() &&
                (this.clearAndSetMantraGreetingCycleIfInAlternatingMode(), (this.showGreeting = !1));
            },
            toggleMantraFromTrigger() {
              this.$options.mantraManager.isEnabled() && this.$options.mantraManager.getActiveItem() && this.showGreeting
                ? (this.showGreeting = !1)
                : (this.showGreeting = !0),
                this.clearAndSetMantraGreetingCycleIfInAlternatingMode();
            },
            mantraFrequencyChangeFromTrigger() {
              this.clearMantraGreetingCycle(),
                this.$options.mantraManager.isFrequencyAlways()
                  ? (this.showGreeting = !1)
                  : this.setMantraGreetingCycleIfInAlternatingMode();
            },
            setMantraGreetingCycleIfInAlternatingMode() {
              this.intervalId ||
                this.$options.mantraManager.noMantra ||
                this.$options.mantraManager.activeFeedsEmpty() ||
                !this.$options.mantraManager.isEnabled() ||
                !this.$options.mantraManager.isInAlternatingMode() ||
                this.setMantraGreetingCycleInterval();
            },
            setMantraGreetingCycleInterval() {
              if (this.intervalId) return;
              const e = this.$options.mantraManager.getDurationTotal();
              e && ((this.intervalId = setInterval(this.setMantraGreetingCycleTimeout, e)), this.setMantraGreetingCycleTimeoutInitial());
            },
            setMantraGreetingCycleTimeout() {
              this.isMantraShowing
                ? (this.setMantraGreetingCycleTimeoutHelper("mantra", "greeting"), document.hidden || (this.showGreeting = !0))
                : (document.hidden || (this.showGreeting = !1), this.setMantraGreetingCycleTimeoutHelper("greeting", "mantra"));
            },
            setMantraGreetingCycleTimeoutInitial() {
              this.isMantraShowing
                ? this.setMantraGreetingCycleTimeoutHelper("greeting", "mantra")
                : this.setMantraGreetingCycleTimeoutHelper("mantra", "greeting");
            },
            setMantraGreetingCycleTimeoutHelper(e, t) {
              this.$options.mantraManager.getDuration(t) > 0 &&
                (this.timeoutId = setTimeout(() => {
                  document.hidden || ("greeting" === e ? (this.showGreeting = !0) : "mantra" === e && (this.showGreeting = !1));
                }, this.$options.mantraManager.getDuration(t)));
            },
            clearMantraGreetingCycleIfInAlternatingMode() {
              this.intervalId &&
                this.$options.mantraManager.isEnabled() &&
                this.$options.mantraManager.isInAlternatingMode() &&
                this.clearMantraGreetingCycle();
            },
            clearMantraGreetingCycle() {
              clearInterval(this.intervalId), clearTimeout(this.timeoutId), (this.intervalId = null), (this.timeoutId = null);
            },
            clearAndSetMantraGreetingCycleIfInAlternatingMode() {
              this.clearMantraGreetingCycle(), this.setMantraGreetingCycleIfInAlternatingMode();
            },
            stopMantraGreetingCycle(e) {
              e ? this.clearMantraGreetingCycle() : this.setMantraGreetingCycleIfInAlternatingMode();
            },
            showPinnnedMantraFromTrigger() {
              (this.showGreeting = !1), this.clearMantraGreetingCycleIfInAlternatingMode();
            },
            hidePinnnedMantraFromTrigger() {
              (this.showGreeting = !0), this.clearMantraGreetingCycleIfInAlternatingMode();
            }
          }
        },
        i = (0, n(51900).Z)(r, a, [], !1, null, null, null).exports;
    }
  }
]);
