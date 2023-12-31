var LPCFG = {
    do_popup_actions: !0,
    popup_show_sitename_suffix: !0,
    popup_show_menu_expand_visual_cue: !0,
    g_do_icon_number_hint: !0,
    g_creditcard_profile_annotate: !0,
    g_visual_cue_on_hover: !0,
    RETRY_TIMEOUT_QUANTUM: 30,
    __FINAL: 0
  },
  LPIFRAMEVARS = {
    g_genpws: [],
    g_myprefs: {},
    g_should_set_prefs: !0,
    g_sites: null,
    g_formfills: null,
    g_favicons: null,
    g_bigicons: null,
    g_genpwpattern: "",
    g_do_40fieldicon: !1,
    _FINAL: 0
  },
  LPpop = {
    create_popup_obj: function (e, t) {
      var i = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "",
        n = null,
        l = null,
        r = null,
        o = null,
        p = null,
        a = null,
        a;
      if ((((a = e.createElement(i + "div")).style.display = "block"), (a.style.border = "0"), !a)) return null;
      var s = null,
        f = null,
        u = null,
        d = null,
        _,
        c,
        g,
        A,
        k = "",
        m,
        R = 0,
        L = 300,
        P = 20,
        h = 0,
        b =
          (LPCFG.popup_show_menu_expand_visual_cue && (h = 24),
          "font-size: 14px;font-family: Helvetica,Arial,sans-serif;font-weight:bold;"),
        E,
        E = "undefined" != typeof measureText ? measureText : LP_measureText,
        y = {},
        F,
        m,
        p;
      if ((void 0 !== t.favicons && (y = LPJSON.parse(t.favicons)), !(s = e.createElement(i + "div")))) return null;
      if ((s.setAttribute("id", "popupcontainer"), a.appendChild(s), !(f = e.createElement(i + "table")))) return null;
      if ((f.setAttribute("id", "lptabpopup"), s.appendChild(f), !(u = e.createElement(i + "div")))) return null;
      if ((u.setAttribute("id", "popupcontainerff"), a.appendChild(u), !(d = e.createElement(i + "table")))) return null;
      if (
        (d.setAttribute("id", "lptabpopupformfills"),
        (d.style.display = "none"),
        u.appendChild(d),
        (tbodyff = e.createElement(i + "tbody")).setAttribute("id", "lptbodyff"),
        d.appendChild(tbodyff),
        void 0 === t.sites)
      )
        c = 0;
      else
        for (m in ((c = N((_ = LPpop.getAutoFillArray(e, LPJSON.parse(t.sites), !0)))), _))
          if (_.hasOwnProperty(m) && null != _[m] && null != _[m].useusername) {
            var v = _[m].useusername,
              x = (v = v.length <= 0 ? _[m].name : v),
              n,
              l,
              S,
              S,
              I,
              C,
              M,
              v,
              v,
              F;
            if (!(n = e.createElement(i + "tr"))) return null;
            if (
              (n.setAttribute("id", "trpopuprow" + lp_ofa(m)),
              n.setAttribute("aid", _[m].aid),
              n.setAttribute("sitename", _[m].name),
              n.setAttribute("username", _[m].useusername),
              (n.className = "popuprow"),
              LPIFRAMEVARS.g_do_40fieldicon && (n.style.height = "39px"),
              f.appendChild(n),
              !(l = e.createElement(i + "td")))
            )
              return null;
            if (
              (l.setAttribute("id", "tdpopuprow" + lp_ofa(m)),
              l.setAttribute("aid", lp_ofa(_[m].aid)),
              n.appendChild(l),
              void 0 !== y[_[m].aid] &&
                (LPIFRAMEVARS.g_do_40fieldicon
                  ? (((S = LPpop.gen_image_frag(e, LPpop.lookup_bigicon(_[m].aid))).width = "88px"),
                    (S.height = "22px"),
                    (S.style.width = "88px"),
                    (S.style.height = "22px"))
                  : (S = LPpop.gen_image_frag(e, LPpop.lookup_favicon(_[m].aid))),
                S) &&
                l.appendChild(S),
              LPIFRAMEVARS.g_do_40fieldicon &&
                (((I = e.createElement(i + "div")).style.position = "absolute"),
                (I.style.display = "inline-block"),
                (I.style.left = "104px")),
              !(C = e.createElement(i + "span")))
            )
              return null;
            C.setAttribute("id", "spanpopuprow" + lp_ofa(m)),
              (C.className = "popcell shortenstr"),
              LPIFRAMEVARS.g_do_40fieldicon && ((C.style.fontSize = "11px"), (C.style.fontWeight = "bold")),
              "undefined" != typeof g_isedge && g_isedge && C.setAttribute("x-ms-format-detection", "none"),
              LP_elt_set_text(C, v),
              LPIFRAMEVARS.g_do_40fieldicon ? (I.appendChild(C), l.appendChild(I)) : l.appendChild(C),
              LPCFG.popup_show_menu_expand_visual_cue &&
                (M = LPpop.visual_cue_frag(e, "expand", m)) &&
                (LPIFRAMEVARS.g_do_40fieldicon ? I : l).appendChild(M),
              LPCFG.popup_show_sitename_suffix &&
                ((v = _[m].name), (v = LPpop.subscript_name_frag(e, v))) &&
                (LPIFRAMEVARS.g_do_40fieldicon ? ((v.style.paddingLeft = 0), I) : l).appendChild(v),
              (F = E(e, x, null, b)).width + P + h > R && (R = F.width + P + h);
          }
      if (void 0 === t.formfills) A = 0;
      else
        for (var V, g, A = N((g = LPJSON.parse(t.formfills))), V = 0; V <= 1; V++)
          for (m in g)
            if (
              g.hasOwnProperty(m) &&
              null != g[m] &&
              null != g[m].decprofilename &&
              null != g[m].profiletype &&
              parseInt(g[m].profiletype) === V
            ) {
              var G = "",
                l,
                S,
                S,
                I;
              if (("" != g[m].ccnum && g[m].profiletype, !(n = e.createElement(i + "tr")))) return null;
              if (
                (n.setAttribute("id", "trpopupffrow" + lp_ofa(m)),
                n.setAttribute("ffid", g[m].ffid),
                n.setAttribute("profilename", g[m].decprofilename),
                n.setAttribute("formtype", V),
                "" != g[m].ccnum && 0 == g[m].profiletype && n.setAttribute("hascc", "1"),
                (n.className = "popuprow"),
                tbodyff.appendChild(n),
                !(l = e.createElement(i + "td")))
              )
                return null;
              l.setAttribute("id", "tdpopupffrow" + lp_ofa(m)),
                l.setAttribute("ffid", g[m].ffid),
                n.appendChild(l),
                void 0 !== y[g[m].ffid] &&
                  (LPIFRAMEVARS.g_do_40fieldicon
                    ? (((S = LPpop.gen_image_frag(e, LPpop.lookup_bigicon(g[m].ffid))).width = "88px"),
                      (S.height = "22px"),
                      (S.style.width = "88px"),
                      (S.style.height = "22px"),
                      (S.style.backgroundColor = "#666666"))
                    : (S = LPpop.gen_image_frag(e, LPpop.lookup_favicon(g[m].ffid))),
                  S) &&
                  l.appendChild(S),
                LPIFRAMEVARS.g_do_40fieldicon &&
                  (((I = e.createElement(i + "div")).style.position = "absolute"),
                  (I.style.display = "inline-block"),
                  (I.style.left = "104px"));
              var x = g[m].decprofilename,
                C,
                w,
                M,
                F;
              ((C = e.createElement(i + "span")).className = "popcell shortenstr"),
                C.setAttribute("id", "spanpopupffrow" + lp_ofa(m)),
                LPIFRAMEVARS.g_do_40fieldicon && ((C.style.fontSize = "11px"), (C.style.fontWeight = "bold")),
                LP_elt_set_text(C, lp_of(g[m].decprofilename, e)),
                LPIFRAMEVARS.g_do_40fieldicon ? (I.appendChild(C), l.appendChild(I)) : l.appendChild(C),
                LPCFG.g_creditcard_profile_annotate &&
                  1 == V &&
                  (((w = e.createElement(i + "span")).className = "cc"),
                  LP_elt_set_text(w, "(" + lpgs("Credit Card") + ")"),
                  C.appendChild(w),
                  (x += lpgs("Credit Card"))),
                LPCFG.popup_show_menu_expand_visual_cue &&
                  (M = LPpop.visual_cue_frag(e, "expandff", m)) &&
                  (LPIFRAMEVARS.g_do_40fieldicon ? I : l).appendChild(M),
                (F = measureText(e, x, null, b)).width + P + h > R && (R = F.width + P + h);
            }
      if (LPCFG.do_popup_actions) {
        if (0 < A) {
          if (!(n = e.createElement(i + "tr"))) return null;
          if (((n.className = "tablerow_sep"), tbodyff.appendChild(n), !(l = e.createElement(i + "td")))) return null;
          if ((n.appendChild(l), !(p = e.createElement(i + "hr")))) return null;
          l.appendChild(p);
        }
      } else if (c <= 0 && A <= 0) return null;
      function N(e) {
        var t = 0,
          i;
        for (i in e) t++;
        return t;
      }
      return (g_popupfill_widest = R = L < R ? L : R), a;
    },
    visual_cue_frag: function (e, t, i) {
      var n = null,
        l = null,
        r = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "";
      if (!t || !e) return null;
      if (LPCFG.popup_show_menu_expand_visual_cue) {
        if (!(n = e.createElement(r + "span"))) return null;
        n.setAttribute("id", t + lp_ofa(i)),
          n.setAttribute("expander", "true"),
          (n.className = "expander"),
          LPCFG.g_visual_cue_on_hover && (n.style.display = "none"),
          LPIFRAMEVARS.g_do_40fieldicon && (n.style.paddingRight = "16px");
        var o,
          r = LPpop.gen_image_frag(e, "arrow.png");
        r && (r.setAttribute("id", t + "img" + lp_ofa(i)), r.setAttribute("alt", "+"), n.appendChild(r));
      }
      return n;
    },
    subscript_name_frag: function (e, t) {
      var i = null,
        n;
      return e
        ? ((n = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : ""),
          t &&
            0 < t.length &&
            (((i = e.createElement(n + "p")).className = "subtext"), LP_elt_set_text(i, t), LPIFRAMEVARS.g_do_40fieldicon) &&
            (i.className += " shortenstr"),
          i)
        : null;
    },
    gen_image_frag: function (e, t) {
      if (!e) return null;
      var i = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : "",
        n = null;
      if (g_isfirefox) {
        if (!(n = e.createElement("image"))) return null;
        n.setAttribute("src", t), (n.style.padding = "2px");
      } else {
        if (!(n = e.createElement(i + "img"))) return null;
        n.setAttribute("src", t), (n.style.padding = "2px"), n.setAttribute("alt", "");
      }
      return n;
    },
    set_icon_hint_from_data: function (e, t) {
      var i, e, n, t, e, t;
      function l(e) {
        var t = 0,
          i;
        for (i in e) t++;
        return t;
      }
      LPCFG.g_do_icon_number_hint &&
        ((e = void 0 === t.sites ? 0 : l((i = LPpop.getAutoFillArray(e, LPJSON.parse(t.sites), !0)))),
        (t = void 0 === t.formfills ? 0 : l((n = LPJSON.parse(t.formfills)))),
        (g_icon_numbers.sites = e),
        (g_icon_numbers.formfills = t),
        (g_icon_numbers.generate = t));
    },
    getAutoFillArray: function (e, t, i) {
      var n = [],
        e = punycode.URLToASCII(e.location.href),
        l = lpcanonizeUrl(e),
        r;
      for (r in t) (t[r].genpw && !i) || (n[r] = t[r]);
      return n;
    },
    lookup_username: function (e) {
      var t, i;
      if (LPIFRAMEVARS && LPIFRAMEVARS.g_sites && null !== e)
        for (i in LPIFRAMEVARS.g_sites)
          if (LPIFRAMEVARS.g_sites[i] && LPIFRAMEVARS.g_sites[i].aid == e)
            return (t = LPIFRAMEVARS.g_sites[i]).useusername || t.unencryptedUsername || "";
      return "";
    },
    lookup_sitename: function (e) {
      var t, i;
      if (LPIFRAMEVARS && LPIFRAMEVARS.g_sites && null !== e)
        for (i in LPIFRAMEVARS.g_sites)
          if (LPIFRAMEVARS.g_sites[i] && LPIFRAMEVARS.g_sites[i].aid == e) return (t = LPIFRAMEVARS.g_sites[i]).sitename || t.name || "";
      return "";
    },
    lookup_profile: function (e) {
      var t, i;
      if (LPIFRAMEVARS && LPIFRAMEVARS.g_formfills && null !== e)
        for (i in LPIFRAMEVARS.g_formfills)
          if (LPIFRAMEVARS.g_formfills[i] && LPIFRAMEVARS.g_formfills[i].ffid == e)
            return (t = LPIFRAMEVARS.g_formfills[i]).decprofilename || (t.decprofilename ? t.profilename : "");
      return "";
    },
    lookup_favicon: function (e) {
      var t;
      if (LPIFRAMEVARS && LPIFRAMEVARS.g_favicons && null !== e) return (t = LPIFRAMEVARS.g_favicons[e]) || null;
    },
    lookup_bigicon: function (e) {
      var t;
      if (LPIFRAMEVARS && LPIFRAMEVARS.g_bigicons && null !== e) return (t = LPIFRAMEVARS.g_bigicons[e]) || null;
    },
    __FINAL__: 0
  };
