LPSiteNotification = (function () {
  var u = !1,
    o = !1,
    a = !1,
    e = !1,
    V = 500,
    n,
    q = function (t) {
      for (var e = 0; e < t.fields.length; ++e) if ("password" === t.fields[e].type) return !0;
      return !1;
    },
    U =
      ((r = !1),
      function (t) {
        r ||
          ((r = !0),
          setTimeout(function () {
            r = !1;
          }, V),
          q(t)
            ? (t.generatedPassword || (u = !0),
              bg.LPTabState.processPasswordSubmit({
                formData: t,
                callback: t.generatedPassword || LPContentScriptTools.isUnloading() ? null : tt
              }))
            : 0 < t.fields.length && (bg.LPTabState.processTextSubmit(t), bg.LPTabState.clear()));
      }),
    r,
    M =
      ((R = 'input:not([type]),input[type="text"],input[type="email"],input[type="password"]'),
      (B = function (t) {
        return t.value && (t.value !== t.getAttribute("value") || 1 < t.value.length) && LPContentScriptTools.isVisible(t);
      }),
      (H = function (t) {
        for (var e, n = [], r = (t || document.body).querySelectorAll(R), o = 0; o < r.length; ++o) B(r[o]) && n.push(r[o]);
        return n;
      }),
      (G = function (t) {
        for (var e = [], n = {}, r = {}, o = t.length < 1e3 ? t.length : 1e3, i = 0; i < o; ++i) {
          var a = t[i];
          switch (a.type) {
            case "hidden":
            case "text":
            case "email":
              !a.value ||
                ("hidden" !== a.type && LPContentScriptTools.isVisible(a)) ||
                (n.hasOwnProperty(a.value) ? delete r[a.value] : (n[(r[a.value] = a).value] = !0));
          }
        }
        var u = LPContentScriptTools.findTextNodes({ searches: Object.keys(r), searchAll: !0, exactMatch: !0, allowEmails: !0 }),
          s = {};
        return (
          u
            .filter(function (t) {
              return !s.hasOwnProperty(t.match) && (s[t.match] = !0);
            })
            .forEach(function (t) {
              t.parent && "OPTION" !== t.parent.nodeName && LPContentScriptTools.isVisible(t.parent) && e.push(r[t.match]);
            }),
          e
        );
      }),
      (j = function (t) {
        var e = {
          type: t.type,
          value: t.value,
          id: t.id,
          label: LPContentScriptTools.getLabel(t),
          attributes: LPContentScriptTools.getAttributes(t, ["name", "ng-model", "data-reactid"])
        };
        return "password" !== e.type && "disc" === LPContentScriptTools.getCSS(t, "text-security") && (e.type = "password"), e;
      }),
      (W = function (t, e) {
        for (var n = [], r = 0; r < t.length; ++r) {
          var o = t[r];
          "password" !== o.inputData.type &&
            (o.inputData.value = S.getUnmaskedValue({ input: o.input, inputValue: o.inputData.value, form: e.form })),
            (o.inputData.formname = (e.form && e.form.getAttribute("name")) || ""),
            n.push(o.inputData);
        }
        return {
          url: parsePageUrl(document.location.href, proxies),
          top: window === top,
          fields: n,
          generatedPassword: e.generatedPassword,
          username: S.getUsername()
        };
      }),
      (J = function (t) {
        if (LP_explicit_ignored(document, t)) return !0;
        if (n && n.length) {
          Element.prototype.matches ||
            (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
          for (var e = 0; e < n.length; e++) if (t.matches(n[e].querySelector) && "off" == n[e].override) return !0;
        }
        return !1;
      }),
      function (t) {
        if (vt(t.generateFormAction)) return null;
        for (var e = H(t.form), n = (t.form && (e = G(t.form).concat(e)), []), r = 0; r < e.length; ++r) {
          var o = e[r],
            i;
          J(o) || ((i = j(o)), n.push({ input: o, inputData: i }));
        }
        var a = W(n, t);
        return t.deferred || U(a), a;
      }),
    R,
    B,
    H,
    G,
    j,
    W,
    J,
    i =
      ((X = function () {
        s = null;
      }),
      function (e) {
        return function (t) {
          if ((s = !1 !== t.isTrusted && !1 !== s))
            try {
              e(t);
            } catch (t) {
              Raven.captureException(t);
            }
          setTimeout(X, 0);
        };
      }),
    s,
    X,
    Z =
      (($ = function (t, e, n) {
        var r = c(t);
        return !(
          !r ||
          !LPContentScriptTools.isVisible(r) ||
          (n && !LPContentScriptTools.isClickable(r) ? (o = !0) : e.passwordChangeForm && r.value !== t.value)
        );
      }),
      (c = function (t) {
        if (t.id) return document.getElementById(t.id);
        for (var e in t.attributes) {
          var e = document.querySelector("input[" + e + '="' + t.attributes[e] + '"]');
          if (e) return e;
        }
        return null;
      }),
      (l = function (t, e) {
        for (var n = 0; n < t.fields.length; ++n) {
          var r = t.fields[n];
          if ("password" === r.type) return $(r, t, e);
        }
        return !1;
      }),
      (K = function (t, e) {
        var t = c(t);
        t &&
          t.addEventListener(
            "input",
            i(function () {
              e(!0);
            })
          );
      }),
      function (n, e) {
        var r = 0,
          t = 20,
          o = null,
          i = !1,
          a = function (t) {
            i || ((i = !(u = !1)), clearInterval(o), e(t));
          };
        u
          ? ((o = setInterval(function () {
              var t = 20 === ++r,
                e = l(n, t);
              (e && !t) || a(e);
            }, 1e3)),
            z(n, a))
          : a(l(n));
      }),
    $,
    c,
    l,
    z,
    K,
    Q =
      ((f = !(z = function (t, e) {
        for (var n = 0; n < t.fields.length; ++n) {
          var r = t.fields[n];
          "password" === r.type && K(r, e);
        }
      })),
      function (t) {
        var e, n;
        a ||
          f ||
          ((f = !0),
          (t.postSetup = function () {
            Topics.get(Topics.SITE_NOTIFICATION).publish(n);
          }),
          (e = { css: { top: 10, right: 10 } }),
          (n = LPFrame.openDialog("contentScriptSite", t, e)),
          (a = !0),
          Y(t, e),
          n.onClose(function () {
            a = !1;
          }));
      }),
    f,
    Y = function (t, e) {
      var n = 0,
        r,
        o = 6,
        i = setInterval(function () {
          n++,
            document.getElementsByTagName("iframe").length < 1 &&
              a &&
              n <= 6 &&
              ((dialog = LPFrame.openDialog("contentScriptSite", t, e)), clearInterval(i)),
            6 < n && clearInterval(i);
        }, 3e3);
    },
    tt = function (t) {
      LPContentScriptTools.isUnloading() ||
        (Topics.get(Topics.SITE_NOTIFICATION_STATE).publish(t),
        t.dialogData && !o && ((t.detectionType = "inject"), csTop.LPSiteNotification.showSiteNotification(t)));
    },
    et =
      ((d = function (t) {
        return -1 < (t = t.toLowerCase()).indexOf("submit") || -1 < t.indexOf("save");
      }),
      (p = function (t) {
        for (var e = t.attributes, n = 0; n < e.length; ++n) {
          var r = e[n];
          if (d(r.name) || d(r.value)) return !0;
        }
        return !1;
      }),
      function (t) {
        if ("INPUT" === t.nodeName) return "submit" === t.type || ("button" === t.type && p(t));
        for (var e = t; e && 0 === e.getElementsByTagName("input").length; ) {
          if ("BUTTON" === e.nodeName) return "submit" === e.type || p(e);
          if (p(e)) return !0;
          e = e.parentElement;
        }
        return !1;
      }),
    d,
    p,
    g = function (t) {
      switch (t.nodeName) {
        case "TEXTAREA":
        case "SELECT":
          return !0;
        case "INPUT":
          switch (t.type) {
            case "button":
            case "submit":
              return !1;
            default:
              return !0;
          }
        default:
          return !1;
      }
    },
    m =
      ((h = []),
      (nt = function (t) {
        for (var e = 0; e < t.length; ++e) {
          var n = t[e];
          if ("attributes" !== n.type) return !0;
          if (n.target.getAttribute(n.attributeName) !== n.oldValue) return !0;
        }
        return !1;
      }),
      (rt = function (t) {
        nt(t) &&
          (h.forEach(function (t) {
            t();
          }),
          b());
      }),
      {
        reset: (b = function () {
          v && (v.disconnect(), (v = null)), (h = []);
        }),
        onChange: function (t) {
          "undefined" != typeof MutationObserver &&
            (v ||
              (v = new MutationObserver(rt)).observe(document.body, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
                attributeOldValue: !0
              }),
            -1 === h.indexOf(t) && h.push(t),
            setTimeout(function () {
              b();
            }, 0));
        }
      }),
    v,
    h,
    b,
    nt,
    rt,
    ot,
    it = {
      startTracking: function (t, r) {
        var o = function (e) {
          var n;
          t(e.detail) &&
            (window.removeEventListener("lprequeststart", o),
            (n = function (t) {
              e.detail.requestID === t.detail.requestID && (window.removeEventListener("lprequestend", n), r(t.detail));
            }),
            window.addEventListener("lprequestend", n));
        };
        window.addEventListener("lprequeststart", o), T.push(o);
      },
      stopTracking: function () {
        T.forEach(function (t) {
          window.removeEventListener("lprequeststart", t);
        }),
          (T = []);
      }
    },
    T,
    at,
    ut,
    S =
      ((L = v = s = null),
      (w = !(T = [])),
      (P = []),
      Topics.get(Topics.FILLED_GENERATED_PW).subscribe(function (t) {
        (e = !0), y({ target: t.element, generatedPassword: t.password, generateFormAction: !0 });
      }),
      Topics.get(Topics.CLEAR_DATA).subscribe(function (t) {
        _();
      }),
      Topics.get(Topics.LOGIN).subscribe(function (t) {
        bg.LPTabState.getState(function (t) {
          t.enabled && A(t);
        });
      }),
      (y = function (t) {
        var e;
        return (
          (t.form = LPContentScriptTools.getForm(t.target)),
          t.form || ((e = document.querySelector("input[type=password]")) && (t.form = LPContentScriptTools.getForm(e))),
          M(t)
        );
      }),
      (C = function () {
        (u = !1), bg.LPTabState.clear();
      }),
      (st = function (t) {
        try {
          return decodeURIComponent(t);
        } catch (t) {}
        return null;
      }),
      (E = function (t) {
        var o = t && t.formData;
        o &&
          0 < o.fields.length &&
          (it.stopTracking(),
          it.startTracking(function (t) {
            if (t && t.data)
              for (var e = st(t.data), n = 0; n < o.fields.length; ++n) {
                var r = o.fields[n].value;
                if ((e && -1 < e.indexOf(r)) || -1 < t.data.indexOf(r)) return !0;
              }
            return !1;
          }, t.responseHandler));
      }),
      (ct = /^2[0-9][0-9]$/),
      (N = function (t) {
        return ct.test(t);
      }),
      (lt = function (t) {
        return 0 === t;
      }),
      (I = function (t) {
        E({
          formData: t,
          responseHandler: function (t) {
            N(t.statusCode) || 0 === t.statusCode || C();
          }
        });
      }),
      (O = function (t) {
        var e = y({ target: t, deferred: !0 });
        E({
          formData: e,
          responseHandler: function (t) {
            N(t.statusCode) && U(e);
          }
        });
      }),
      (x = LPContentScriptTools.debounce(
        function (t) {
          m.reset(), I(y({ target: t.target, type: t.type }));
        },
        1e3,
        !0
      )),
      (D = {
        submit: i(function (t) {
          x(t);
        }),
        lpsubmit: function (t) {
          m.reset(), M({ form: t.target, type: "submit" });
        },
        mouseup: i(function (t) {
          var e = t.target;
          et(e) ? x(t) : g(e) || (u && m.onChange(C), O(e));
        }),
        keydown: i(function (t) {
          var e;
          13 === (t.keyCode || t.which) &&
            ((e = t.target), g(e) || et(e) ? (m.reset(), I(y({ target: e, type: t.type }))) : (u && m.onChange(C), O(e)));
        }),
        change: i(function (t) {
          var e = t.target;
          if ("INPUT" === e.nodeName && e.value)
            switch (e.type) {
              case "text":
              case "email":
                for (var n = 0; n < P.length; ++n) if (P[n].input === e) return void (P[n].value = e.value);
                P.push({ input: e, value: e.value });
            }
        }),
        paste: i(function (t) {
          var e = t.target;
          g(t.target) &&
            bg.LPTabState.getCopiedGeneratedPassword(function (t) {
              e.value === t && y({ target: e, generatedPassword: t });
            });
        })
      }),
      (ft = function (t) {
        L = t;
      }),
      (dt = function () {
        if (L.usernames && 0 < L.usernames.length) return LPContentScriptTools.findText({ searches: L.usernames, wordMatch: !0 });
      }),
      (A = function (t) {
        if (should_do_lastpass_here(document) && (ft(t), !w)) {
          for (var e in D) document.addEventListener(e, D[e], !0);
          w = !0;
        }
      }),
      (_ = function () {
        if (w) {
          for (var t in D) document.removeEventListener(t, D[t], !0);
          w = !1;
        }
        P = [];
      }),
      (k = function (t) {
        return -1 < t.indexOf("*") || -1 < t.indexOf(String.fromCharCode(8226));
      }),
      (pt = function (t, e) {
        return (
          t.value && !k(t.value) && t.value.length === e.length && (t.value[0] === e[0] || t.value[t.value.length - 1] === e[e.length - 1])
        );
      }),
      (gt = function (t) {
        if (k(t.inputValue)) {
          for (var e, e = 0; e < P.length; ++e) {
            var n = P[e];
            if (n.input === t.input && n.value !== t.inputValue) return n.value;
          }
          if (t.form)
            for (e = 0; e < t.form.length; ++e) {
              var r = t.form[e];
              if (pt(r, t.inputValue)) return r.value;
            }
        }
        return t.inputValue;
      }),
      (t = document.documentElement) &&
        "HTML" === t.nodeName &&
        g_issafari_appext &&
        ((F = document.createElement("script")).appendChild(document.createTextNode(LPContentScriptConstants.JS.PageWebRequestEvents)),
        t.appendChild(F),
        t.removeChild(F)),
      { setup: A, teardown: _, getUnmaskedValue: gt, getUsername: dt }),
    L,
    w,
    P,
    y,
    C,
    st,
    E,
    N,
    ct,
    lt,
    I,
    O,
    x,
    D,
    ft,
    dt,
    A,
    _,
    k,
    pt,
    gt,
    t,
    F,
    mt = LPContentScriptTools.debounce(
      function () {
        bg.LPTabState.getSiteNotification({ callback: tt });
      },
      1e3,
      !0
    ),
    vt =
      (Topics.get(Topics.INITIALIZED).subscribe(function () {
        (bg.LPTabState.pageLoaded = !0),
          bg.LPTabState.getState(function (t) {
            t.enabled && (S.setup(t), window === top ? mt() : t.formSubmittedFrame && csTop.LPSiteNotification.getSiteNotification());
          });
        var t = { host: document.location.host, pathname: document.location.pathname },
          e = bg.get("LPContentScriptFeatures");
        e &&
          (e.field_override_global || e.field_override_admin) &&
          bg.FieldOverrides.getSite(t, function (t) {
            n = t;
          });
      }),
      window !== top &&
        window.addEventListener(
          "beforeunload",
          function () {
            u && csTop.LPSiteNotification.getSiteNotification();
          },
          !0
        ),
      function (t) {
        return !(t || !e || (e = !1));
      });
  return { formExists: Z, showSiteNotification: Q, getSiteNotification: mt };
})();
