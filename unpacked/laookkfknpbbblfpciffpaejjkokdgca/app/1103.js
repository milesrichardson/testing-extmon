"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1103],
  {
    71103: (e, t, i) => {
      i.r(t), i.d(t, { default: () => b });
      var r = i(99437),
        s = i(58725),
        a = i(2770),
        d = i(92729);
      const l = r.Z.extend({
          mixins: [a.Z, a.H],
          data: () => ({
            id: null,
            label: "",
            value: null,
            type: null,
            pinned: !1,
            archived: !1,
            rounding: null,
            random: !1,
            cycle: "none",
            createdServer: null,
            modifiedServer: null,
            modified: null,
            isTeam: null,
            path: "",
            providerDataPointId: "",
            externalUrl: "",
            providerId: null,
            url: "",
            readOnly: !1,
            props: ["pinned", "label", "value", "type", "cycle", "rounding", "path", "providerDataPointId", "providerId", "url"]
          }),
          computed: {
            name() {
              return this.label;
            },
            authNeeded() {
              return this.type === d.Mu.INTEGRATION && "Authorization needed." === this.value;
            },
            tooltip() {
              return this.authNeeded ? "Authorization Needed" : this.externalUrl || "";
            },
            refreshAfterSave() {
              return this.editProps.type === d.Mu.INTEGRATION;
            },
            displayValue() {
              return this.type === d.Mu.URL && m.utils.isNumber(this.rounding) && m.utils.isNumber(this.value)
                ? new Number(this.value).toFixed(this.rounding)
                : this.authNeeded || "" === this.value || null === this.value || void 0 === this.value
                ? "-"
                : this.value;
            },
            disableSave() {
              let e = !1;
              return (
                this.editProps.type === d.Mu.INTEGRATION && ((this.editProps.providerId && this.editProps.providerDataPointId) || (e = !0)),
                null === this.editProps.type || e
              );
            },
            shouldDisplayQuickAdjust() {
              return this.type === d.Mu.MANUAL && !this.isTeam && !this.readOnly && m.utils.isNumber(this.value);
            }
          },
          watch: {
            value(e, t) {
              null !== t && (this.modified = Date.now());
            }
          },
          methods: {
            updateData: function (e) {
              (this.type = this.getMetricType(e)),
                (this.label = e.label),
                (this.value = e.value),
                (this.pinned = e.pinned),
                (this.id = e.id),
                (this.archived = e.archived),
                (this.rounding = e.rounding),
                (this.cycle = e.cycle),
                (this.path = e.path),
                (this.isTeam = e.isTeam || !1),
                (this.createdServer = e.createdServer),
                (this.modified = this.getLatestDate([this.modified, e.modified, e.modifiedServer])),
                (this.providerDataPointId = e.providerDataPointId),
                (this.providerId = e.providerId),
                (this.externalUrl = e.externalUrl),
                (this.url = e.url),
                (this.readOnly = e.readOnly),
                this.resetValueIfCycleElapsed();
            },
            getLatestDate: (e) =>
              e
                .filter((e) => e)
                .map((e) => new Date(e))
                .reduce((e, t) => (e > t ? e : t), 0),
            getChanges() {
              let e = [];
              return (
                this.editProps &&
                  this.props.forEach((t) => {
                    if ("type" !== t)
                      if ("object" == typeof this.editProps[t] && null !== this.editProps[t])
                        for (let i in this.editProps[t]) {
                          let r,
                            s = this[t][i],
                            a = this.editProps[t][i];
                          (r = s && s.getTime && a && a.getTime ? s.getTime() !== a.getTime() : s !== a),
                            r && (e.push(i), (this.editProps[i] = a));
                        }
                      else this[t] !== this.editProps[t] && e.push(t);
                  }),
                e
              );
            },
            getMetricType: (e) => (e.url ? d.Mu.URL : e.providerId ? d.Mu.INTEGRATION : d.Mu.MANUAL),
            resetValueIfCycleElapsed() {
              this.type === d.Mu.MANUAL &&
                this.cycle &&
                this.cycle !== d.zY.NONE &&
                this.getStartOfCycle() > this.getModifiedDate() &&
                (isNaN(1 * this.value) ? (this.value = "") : (this.value = 0));
            },
            getStartOfCycle: function () {
              return this[this.cycle + "Start"] && this[this.cycle + "Start"]();
            },
            dailyStart: function () {
              const e = m.utils.getDateString().split(/\D/),
                t = new Date(e[0], e[1] - 1, e[2]);
              return t.setHours(m.constants.dateRolloverHour), t.getTime();
            },
            weeklyStart: function () {
              let e = new Date(this.dailyStart());
              return e.setDate(e.getDate() - ((e.getDay() + 6) % 7)), this.getMomoDate(e);
            },
            monthlyStart: function () {
              let e = new Date(this.dailyStart());
              return e.setDate(1), this.getMomoDate(e);
            },
            yearlyStart: function () {
              let e = new Date(this.dailyStart());
              return e.setDate(1), e.setMonth(0), this.getMomoDate(e);
            },
            getMomoDate: function (e) {
              let t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
              return t.setHours(m.constants.dateRolloverHour), t.getTime();
            },
            getModifiedDate: function () {
              if (this.modified) return new Date(this.modified);
            }
          }
        }),
        o = r.Z.extend({
          data: function () {
            return {
              id: 1,
              title: "",
              beta: !1,
              largeIconUrl: "",
              status: "",
              statusId: null,
              umpId: null,
              smallIconUrl: "",
              shortDescription: "",
              dataPoints: []
            };
          },
          computed: {
            connected() {
              return "Connected" === this.status;
            }
          },
          methods: {
            updateData(e) {
              (this.beta = e.beta),
                (this.id = e.id),
                (this.umpId = e.ump_id),
                (this.status = e.status),
                (this.statusId = e.status_id),
                (this.umpId = e.ump_id),
                (this.largeIconUrl = e.large_icon_url),
                (this.smallIconUrl = e.small_icon_url),
                (this.title = e.provider_title),
                (this.shortDescription = e.short_description);
            }
          }
        });
      var n = i(94234),
        u = i(40671),
        h = i(13990),
        p = i(61250);
      const c = () => Promise.all([i.e(9965), i.e(4427), i.e(940)]).then(i.bind(i, 59594)),
        v = () => i.e(9152).then(i.bind(i, 99152)),
        y = () => i.e(159).then(i.bind(i, 20159)),
        g = () => i.e(3636).then(i.bind(i, 43636)),
        b = new (r.Z.extend({
          mixins: [
            n.FZ,
            n.cl,
            n.TF,
            n.Ox,
            n.mX,
            (0, p.Z)(({ item: e }) => {
              const t = { is_paid_event: !0 };
              var i;
              return (
                e &&
                  (t.type =
                    null === (i = d.bD.find((t) => [e.type, e.editProps.type].includes(t.id))) || void 0 === i
                      ? void 0
                      : i.title.toLowerCase()),
                t
              );
            })
          ],
          unreactive() {
            return {
              ...h.Z.metrics,
              Model: l,
              dataService: s.Z,
              providerCollection: new u.F(),
              visibleSetting: "metricVisible",
              sort: (e, t) => this.sortPinned(e, t),
              dashSort: (e, t) =>
                e.shouldDisplayQuickAdjust && !t.shouldDisplayQuickAdjust
                  ? 1
                  : t.shouldDisplayQuickAdjust && !e.shouldDisplayQuickAdjust
                  ? -1
                  : e.id - t.id,
              fields: [
                {
                  property: "label",
                  class: "item-body",
                  type: "input",
                  label: "Name",
                  required: !0,
                  hiddenInForm: (e) => e.type === d.Mu.INTEGRATION && (null === e.providerId || void 0 === e.providerId),
                  dataTest: "name",
                  autoCapitalize: !0
                },
                { type: g, hiddenInForm: (e) => e.type !== d.Mu.INTEGRATION },
                {
                  property: "value",
                  class: "item-body",
                  type: "input",
                  label: "Value",
                  placeholder: 0,
                  required: (e) => e.type === d.Mu.MANUAL,
                  hiddenInForm: (e) => e.type !== d.Mu.MANUAL,
                  dataTest: "value"
                },
                {
                  property: "cycle",
                  type: "select",
                  label: "Reset",
                  class: "reset",
                  options: [
                    { value: d.zY.NONE, label: "Never" },
                    { value: d.zY.DAILY, label: "Daily" },
                    { value: d.zY.WEEKLY, label: "Weekly" },
                    { value: d.zY.MONTHLY, label: "Monthly" },
                    { value: d.zY.YEARLY, label: "Yearly" }
                  ],
                  hiddenInForm: (e) => e.type !== d.Mu.MANUAL,
                  dataTest: "cycle"
                },
                {
                  property: "url",
                  placeholder: "https://",
                  class: "url",
                  type: "input",
                  label: "URL",
                  required: (e) => e.type === d.Mu.URL,
                  hiddenInForm: (e) => e.type !== d.Mu.URL,
                  subText:
                    'Enter an API address <a href="https://get.momentumdash.help/hc/en-us/articles/360038089754#h_b3d82248-1a7f-40c1-9304-01b0421dacca" target="_blank">More</a>',
                  dataTest: "url",
                  autoCorrect: !1,
                  validate: "validUrl"
                },
                {
                  property: "path",
                  class: "path",
                  type: y,
                  label: "Value",
                  required: (e) => e.type === d.Mu.URL,
                  hiddenInForm: (e) => e.type !== d.Mu.URL,
                  requiredComponentFields: (e) => {
                    if (e.url && !e.path) return ["path"];
                  }
                },
                {
                  property: "rounding",
                  type: c,
                  options: [
                    { selected: !0, disabled: !0, label: "Select decimal places" },
                    { value: 0, label: 0 },
                    { value: 1, label: 1 },
                    { value: 2, label: 2 },
                    { value: 3, label: 3 },
                    { value: 4, label: 4 }
                  ],
                  class: "rounding",
                  label: "Rounding",
                  dataTest: "rounding",
                  hiddenInForm: (e) => e.type !== d.Mu.URL || !m.utils.isNumber(e.value)
                },
                {
                  property: "pinned",
                  type: "toggle",
                  label: "Pin to dashboard",
                  dataTest: "pinned",
                  hiddenInForm: (e) => e.type === d.Mu.INTEGRATION && (null === e.providerId || void 0 === e.providerId)
                }
              ]
            };
          },
          computed: {
            providers() {
              return this.providerCollection.loaded || this.refreshMetricProviders(), this.providerCollection;
            }
          },
          created() {
            this.startMetricUpdateInterval();
          },
          methods: {
            startMetricUpdateInterval() {
              const e = 3e5,
                t = () => {
                  const i = localStorage.getItem("metrics:lastRefreshed"),
                    r = new Date().getTime();
                  r - i > e && (localStorage.setItem("metrics:lastRefreshed", r), this.refresh()), setTimeout(t, e);
                };
              setTimeout(t, e);
            },
            adjust(e, t) {
              const i = e.value;
              return (
                (e.value = Number(Number(e.value).toPrecision(12)) + t),
                (e.modified = Date.now()),
                this.dataService.update(e.id, { value: e.value, modified: e.modified }).catch(() => (e.value = i))
              );
            },
            getAddRequestBody(e) {
              let t = { label: m.utils.capitalizeFirstLetter(e.editProps.label), pinned: e.editProps.pinned };
              switch (e.editProps.type) {
                case d.Mu.MANUAL:
                  (t.value = m.utils.capitalizeFirstLetter(e.editProps.value)), (t.cycle = e.editProps.cycle);
                  break;
                case d.Mu.URL:
                  (t.value = e.editProps.value),
                    (t.url = m.utils.ensureUrlScheme(e.editProps.url)),
                    (t.path = e.editProps.path),
                    (t.rounding = e.editProps.rounding);
                  break;
                case d.Mu.INTEGRATION:
                  (t.value = ""), (t.providerId = e.editProps.providerId), (t.providerDataPointId = e.editProps.providerDataPointId);
              }
              return t;
            },
            getUpdateRequestBody(e) {
              const t = { modified: Date.now() };
              return (
                e.getChanges().forEach((i) => {
                  t[i] = "url" === i ? m.utils.ensureUrlScheme(e.editProps[i]) : e.editProps[i];
                }),
                t
              );
            },
            refreshMetricProviders() {
              return this.dataService.getProviders().then((e) => {
                const t = e.data.available_providers,
                  i = e.data.connected_providers;
                let r;
                t && i ? (r = t.concat(i)) : t ? (r = t) : i && (r = i),
                  r.forEach((e) => {
                    const t = e.id;
                    let i = null;
                    Object.prototype.hasOwnProperty.call(this.providers, t)
                      ? (i = this.providers[t])
                      : ((i = new o()), (i.teamUuid = this.teamUuid), this.$set(this.providers.items, t, i)),
                      i.updateData(e);
                  }),
                  this.$set(this.providers, "loaded", !0);
              });
            },
            modifyViewsObject(e, t) {
              const i = () => {
                  const e = t.adding;
                  t.showView(e ? "type" : "list", {
                    afterLeave: () => {
                      const i = t.activeItem;
                      i && (i.revertChanges(), e && i.copyProperties());
                    }
                  });
                },
                r = () => {
                  const e = t.activeItem,
                    i = e.providerId ?? e.editProps.providerId;
                  if (i && this.providers.loaded) return this.providers.items[i];
                };
              return (
                (e.type = {
                  addView: !0,
                  order: 3,
                  onEsc: "list",
                  header: { title: "Add metric", centerTitle: !0, buttonsLeft: { back: "list" } },
                  body: { component: v },
                  afterLeave: () => {
                    "edit" !== t.activeViewId && t.clearItem();
                  }
                }),
                (e.edit.header.title = () => {
                  const e = t.activeItem,
                    i = r();
                  if (i) return i.title;
                  let s = e.type ?? t.editProps.type;
                  return d.bD[s].title;
                }),
                (e.edit.header.icon = () => {
                  const e = r();
                  return e ? e.smallIconUrl : "";
                }),
                (e.edit.header.buttonsLeft.back = i),
                (e.edit.onEsc = i),
                delete e.edit.addView,
                (e.edit.afterLeave = () => {
                  "type" !== t.activeViewId && t.clearItem();
                }),
                e
              );
            },
            async connectProvider(e) {
              let t;
              "object" == typeof e
                ? (t = e)
                : (this.providers.loaded || (await this.refreshMetricProviders()), (t = this.providers.items[e]));
              const { data: i } = await this.dataService.connectProvider(t.id);
              "authRequired" === i.status && this.launchConnectWindow(t, i.authorizationUrl, i.winHeight, i.winWidth, i.windowFeatures);
            },
            launchConnectWindow(e, t, i = 510, r = 600, s = "titlebar, resizable, status") {
              const a = window.screen.width / 2 - r / 2,
                d = window.screen.height / 2 - i / 2,
                l = window.open(t, "MomentumAuthWindow", `${s}, left=${a}, top=${d}, width=${r}, height=${i}`);
              let o = setInterval(() => {
                l.closed && (clearInterval(o), this.refreshMetricProviders().then(() => this.fetchDataPoints(e)));
              }, 1e3);
            },
            fetchDataPoints(e) {
              this.dataService
                .getProviderDataPoints(e.id)
                .then((t) => {
                  let i = t && t.data && t.data.dataPoints;
                  i &&
                    i.sort((e, t) => {
                      if (!e.name || !t.name) return 0;
                      const i = e.name.toUpperCase(),
                        r = t.name.toUpperCase();
                      return i < r ? -1 : i > r ? 1 : 0;
                    }),
                    this.$set(this.providers.items[e.id], "dataPoints", i);
                })
                .catch(console.error);
            }
          }
        }))();
    },
    58725: (e, t, i) => {
      i.d(t, { Z: () => a });
      var r = i(99437),
        s = i(31624);
      const a = new (r.Z.extend({
        mixins: [s.X],
        unreactive: () => ({ type: "metrics", queryParams: { get: { round: !1 } } }),
        methods: {
          getProviders() {
            return this.$xhr.get("settings/metrics");
          },
          connectProvider(e) {
            return this.$xhr.put("settings/metrics/providers/", { provider_id: e });
          },
          getProviderDataPoints(e) {
            return this.$xhr.get(`settings/metrics/providers/${e}/dataPoints`);
          },
          getPathOptions(e) {
            return this.$xhr.post("metrics/preview", { url: e });
          }
        }
      }))();
    },
    61250: (e, t, i) => {
      i.d(t, { Z: () => s });
      var r = i(81405);
      function s(e = () => ({})) {
        return {
          methods: {
            capture(t, { properties: i = {}, context: s = {} } = {}) {
              Object.assign(i, e({ ...s, eventName: t, properties: i })),
                !i.feature && this.fullNameLCP
                  ? (i.feature = this.fullNameLCP)
                  : console.warn(
                      'captureMixin used without a "feature" property. Please add the namesMixin to the component or return a "feature" property when adding captureMixin'
                    ),
                r.ZP.capture(t, i);
            }
          }
        };
      }
    }
  }
]);
