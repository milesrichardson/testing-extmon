"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7030],
  {
    852594: (e, t, a) => {
      a.r(t), a.d(t, { AddressAddPanel: () => E });
      var r = a(696832),
        s = a(453576),
        l = a(575257),
        n = a(660765),
        o = a(441217),
        d = a(635164),
        i = a(66941),
        c = a(537026),
        u = a(62429),
        m = a(60043),
        g = a(201389),
        h = a(347613),
        b = a(796446),
        I = a(933741),
        f = a(635978);
      const E = ({ lee: e }) => {
        const t = (0, r.createRef)(),
          [a, E] = r.useState(!1),
          { routes: N } = (0, m.Xo)(),
          { translate: P } = (0, g.Z)();
        r.useEffect(() => {
          (0, u.Nc)(n.PageView.ItemAddressCreate);
        }, []);
        const V = () => {
            (0, u.Nc)(n.PageView.ItemPersonalInfoList), (0, d.uX)(N.userPersonalInfo);
          },
          k = r.createElement(h.ZP, { iconSize: h.Jh.headerEditPanelIcon, iconType: h.Tu.address }),
          p = (0, I.gV)(P, "address"),
          v = l.c[e.globalState.locale.country],
          w = (0, c.B)(e.globalState),
          C = {
            addressFull: "",
            addressName: "",
            building: "",
            city: "",
            digitCode: "",
            door: "",
            floor: "",
            linkedPhone: "",
            localeFormat: v || l.c.US,
            receiver: "",
            spaceId: null != w ? w : "",
            stairs: "",
            state: "",
            stateLevel2: "",
            stateNumber: "",
            streetName: "",
            streetNumber: "",
            streetTitle: "",
            zipCode: ""
          };
        return r.createElement(
          b.zI,
          {
            isViewingExistingItem: !1,
            itemHasBeenEdited: a,
            onNavigateOut: () => {
              V();
            },
            onSubmit: async () => {
              var e;
              if (null != (e = t.current?.isFormValid()) && e)
                try {
                  await (() => {
                    const e = null != (a = t.current?.getValues()) ? a : null;
                    var a;
                    const r = { kwType: "KWAddress", origin: s.SaveOrigin.MANUAL, content: { ...e, addressFull: e?.streetName } };
                    return i.C.savePersonalDataItem(r);
                  })(),
                    V();
                } catch (e) {
                  console.warn(e);
                }
            },
            formId: "add_address_panel",
            header: r.createElement(b.V9, { icon: k, iconBackgroundColor: o.colors.dashGreen00, title: p })
          },
          r.createElement(f.k, { lee: e, currentValues: C, signalEditedValues: () => E(!0), ref: t })
        );
      };
    }
  }
]);
