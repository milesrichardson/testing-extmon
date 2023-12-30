var KEY_UP = 38,
  KEY_DOWN = 40,
  KEY_ENTER = 13,
  ELEMENT_NODE = 1,
  KEY_ESCAPE = 27,
  KEY_F4 = 115,
  KEY_LEFT = 37,
  KEY_RIGHT = 39,
  KEY_HOME = 36,
  KEY_END = 35,
  g_do_complete = !0,
  g_do_svg = !0;
function openCombo(e, t, o, n) {
  var t = (n = n || document).getElementById(t),
    o,
    i,
    l;
  t.disabled ||
    ((i = "block" == (o = gComboEx = n.getElementById(o)).style.display),
    (gItemNum = (i ? setStyle(o, "display", "none", "") : showCombo(t, o, null, n), -1)),
    (gFocusItem = t),
    ("undefined" != typeof window ? window : n.defaultView).setTimeout(function () {
      doFocus();
    }, 0));
}
var g_iField = null,
  g_cb = null,
  g_combobox_button = null;
function showCombo(e, t, o, n) {
  var t;
  (n = n || document),
    (g_cb = t),
    null != (g_iField = e) &&
      ((t = getComboButtonId(e.id)),
      (g_combobox_button = n.getElementById(t)),
      void 0 !== e.addEventListener
        ? e.addEventListener(
            "move",
            function (e) {
              realShowCombo(n);
            },
            !1
          )
        : e.attachEvent("onmove", function (e) {
            realShowCombo(n);
          })),
    realShowCombo(n);
}
function getY(e) {
  for (var t = 0; null != e; ) (t += e.offsetTop), (e = e.offsetParent);
  return t;
}
function getX(e) {
  for (var t = 0; null != e; ) (t += e.offsetLeft), (e = e.offsetParent);
  return t;
}
function realShowCombo(e) {
  null == e && (e = document);
  var t = getY(g_iField),
    o = getX(g_iField),
    t = t + g_iField.offsetHeight + "px",
    o = o + "px",
    t =
      ((g_cb.style.minWidth = g_iField.offsetWidth - 14 + "px"),
      setStyle(g_cb, "top", t, ""),
      setStyle(g_cb, "left", o, ""),
      setStyle(g_cb, "display", "block", ""),
      g_combobox_button && setStyle(g_combobox_button, "display", "", ""),
      LP_getAbsolutePos(e, g_iField)),
    o,
    e;
  null != t &&
    0 < t.left &&
    null !=
      (e =
        null == (e = (o = "undefined" != typeof window && void 0 !== window.setTimeout ? window : e.defaultView).innerWidth) &&
        "undefined" != typeof getWindowWidth
          ? getWindowWidth(o)
          : e) &&
    0 < e &&
    ((g_cb.style.maxWidth = parseInt(e) - parseInt(t.left) - 16 + "px"), parseInt(g_cb.style.maxWidth) < parseInt(g_cb.style.minWidth)) &&
    (g_cb.style.minWidth = g_cb.style.maxWidth);
}
var gItemNum = 0,
  gComboEx = null;
function focusCombo(e, t, o) {
  if ((e = e || window.event)) {
    var n = e.keyCode;
    if ("undefined" != typeof TABKEY && (n == TABKEY || n == SHIFTKEY)) {
      var i = "undefined" != typeof document && document.location ? document.location.href : "";
      if (-1 != i.indexOf("popupfilltab.html") || -1 != i.indexOf("#framesrc=LPMAGIC")) return tabfocuser(e), !1;
    }
    var i = "undefined" != typeof document ? document : e.view.document,
      n = e.keyCode,
      e = !0,
      o = (gComboEx = i.getElementById(o));
    if (n == KEY_DOWN || n == KEY_F4) {
      for (
        var e = !1, l, d = ("block" == o.getAttribute("style.display") || showCombo(t, o, null, i), o.childNodes), s = d.length, u = 0;
        null != d[u] && u < s;

      ) {
        if (d[u].nodeType == ELEMENT_NODE && "item" == d[u].className && "none" != d[u].style.display) {
          gFocusItem = d[u];
          break;
        }
        u++;
      }
      s <= (gItemNum = u) && (gItemNum = 0),
        setTimeout(function () {
          doFocus();
        }, 0),
        (e = !1);
    } else
      n != KEY_ENTER &&
        n == KEY_ESCAPE &&
        (null != t.val && 0 < t.val.length ? (e = !0) : ((e = !1), setStyle(gComboEx, "display", "none", ""), (gItemNum = -1)));
    return e;
  }
}
function focusItem(e, t, o) {
  for (var n = o.val, i = null, l = getItems(t), d = l.length, s = !1, u = 0, r, o; u < d; u++)
    if (l[u].hasChildNodes() && l[u].firstChild.nodeValue == n) {
      (s = !0), (i = l[u]), (gItemNum = u);
      break;
    }
  s || ((i = addItem(t, n, l.length)), (gItemNum = l.length)),
    null != i &&
      ((gFocusItem = i),
      "block" != gComboEx.getAttribute("style.display")
        ? ((r = o.offsetTop + o.offsetHeight + "px"), (o = o.offsetLeft + "px"), setStyle(t, "top", r, ""), setStyle(t, "left", o, ""))
        : setStyle(t, "display", "none", ""),
      setStyle(t, "display", "block", ""),
      setTimeout(function () {
        doFocus();
      }, 0));
}
function addItem(e, t, o, n) {
  var i = (n = n || document).createElement("div"),
    l = void 0 !== t.label ? t.label : t,
    d = void 0 !== t.label ? t.value : t,
    d,
    t =
      ((i.val = d),
      (i.label = l),
      void 0 !== t.label &&
        ((i.label = t.label), void 0 !== t.image) &&
        (((d = n.createElement("img")).src = t.image), (d.style.paddingRight = "15px"), i.appendChild(d), (i.img = d.src)),
      n.createTextNode(l)),
    s = i;
  return (
    i.appendChild(t),
    i.setAttribute("tabindex", "-1"),
    i.setAttribute("class", "item"),
    i.setAttribute("data-lpcount", o),
    void 0 !== i.addEventListener
      ? (i.addEventListener("click", function () {
          gItemNum = this.getAttribute("data-lpcount");
        }),
        i.addEventListener("mouseover", function () {
          (gFocusItem = this), doFocus();
        }))
      : (i.attachEvent("onclick", function () {
          gItemNum = s.getAttribute("data-lpcount");
        }),
        i.attachEvent("onmouseover", function () {
          (gFocusItem = s), doFocus();
        })),
    i.setAttribute("role", "listitem"),
    i.setAttribute("origText", ofa(l)),
    e.appendChild(i),
    i
  );
}
function doComboNav(e, t, o, n) {
  if ((e = e || window.event)) {
    var i = e.keyCode,
      l = !0,
      d,
      e,
      s,
      u,
      r;
    if ((null == gComboEx && (gComboEx = t), i == KEY_UP || i == KEY_DOWN)) {
      var l = !1,
        a = 0,
        d,
        m = (d = getItems(gComboEx)).length;
      if (i == KEY_UP) for (a = gItemNum - 1; 0 <= a && "none" == d[a].style.display; ) "none" == d[a].style.display && a--;
      else {
        for ((a = gItemNum + 1) == m && (a = -1); 0 <= a && a < m && "none" == d[a].style.display; ) "none" == d[a].style.display && a++;
        a == m && (a = -1);
      }
      (gFocusItem = -1 == (gItemNum = a) ? n.getElementById(o) : d[a]),
        setTimeout(function () {
          doFocus();
        }, 0);
    } else {
      i == KEY_ENTER || (!e.keyCode && 0 <= e.button)
        ? null != (e = (d = getItems(gComboEx))[gItemNum]) &&
          "true" != e.getAttribute("aria-disabled") &&
          ((s = e.label),
          (u = e.val),
          ((r = n.getElementById(o)).value = s),
          (r.val = u),
          void 0 !== e.img && ((r.style.background = "url(" + e.img + ") no-repeat 2px 5px"), (r.style.paddingLeft = "25px")),
          r.onchange && r.onchange(),
          setStyle(gComboEx, "display", "none", ""),
          (gItemNum = 0),
          (gFocusItem = r),
          setTimeout(function () {
            doFocus();
          }, 0))
        : i == KEY_ESCAPE &&
          ((l = !1),
          setStyle(t, "display", "none", ""),
          (gItemNum = 0),
          (gFocusItem = n.getElementById(o)),
          setTimeout(function () {
            doFocus();
          }, 0));
    }
    return l;
  }
}
function getItems(e) {
  if (null === e) return [];
  for (var t = new Array(), t = new Array(), o = e.childNodes, n = o.length, i = 0; i < n; i++)
    o[i].nodeType != ELEMENT_NODE ||
      ("item" != o[i].getAttribute("class") && "item focus" != o[i].getAttribute("class")) ||
      (t[t.length] = o[i]);
  return t;
}
function setStyle(e, t, o, n) {
  var i = !1;
  try {
    e.style && e.style.setProperty && (e.style.setProperty(t, o, n), (i = !0));
  } catch (e) {
    alert("exception caught setting style: " + e.message);
  }
  if (!i)
    try {
      (e.style[t] = o), (i = !0);
    } catch (e) {
      alert("exception caught setting direct style: " + e.message);
    }
  return i;
}
var gFocusItem = null,
  gLastFocusItem = null;
function doFocus() {
  null != gFocusItem &&
    (gFocusItem.focus(),
    gLastFocusItem && "item focus" == gLastFocusItem.className && (gLastFocusItem.className = "item"),
    gFocusItem && "item" == gFocusItem.className && (gFocusItem.className = "item focus"),
    (gLastFocusItem = gFocusItem),
    (gFocusItem = null));
}
function create_combo(t, e, o, n, i, l, d, s, u) {
  i = i || "";
  var r = (n = n || document).getElementById(t),
    a = getComboId(t),
    m,
    g,
    g;
  if (r && !n.getElementById(a) && null !== a) {
    (r.onkeydown = function (e) {
      return focusCombo((e = e || window.event), r, a);
    }),
      (r.onkeyup = function (e) {
        return (e = e || window.event), keyupCombo(n, e, r, a), !1;
      }),
      r.setAttribute("role", "textfield"),
      r.setAttribute("aria-haspopup", "true"),
      r.setAttribute("autocomplete", "off"),
      (r.style.marginRight = "0px");
    var c,
      f = (c = n.createElement(i + "div"));
    c.setAttribute("role", "list"),
      (c.style.display = "none"),
      "undefined" != typeof g_isie && g_isie && (c.style.display = "none"),
      c.setAttribute("id", a),
      c.setAttribute("class", "dropStyle"),
      "undefined" != typeof g_isie && g_isie && (c.className = "dropStyle"),
      (c.onkeydown = function (e) {
        return doComboNav(e, this, this.id.substring(0, this.id.length - 6), n);
      }),
      void 0 !== c.addEventListener
        ? c.addEventListener("click", function (e) {
            doComboNav(e, this, this.id.substring(0, this.id.length - 6), n);
          })
        : c.attachEvent("onclick", function (e) {
            if (!(e = e || window.event)) return !1;
            doComboNav(e, f, f.id.substring(0, f.id.length - 6), n);
          }),
      (c.style.overflowY = "auto"),
      (c.style.overflowX = "auto"),
      "undefined" != typeof g_isie && g_isie && (c.style.background = "#fff"),
      (c.style.paddingLeft = "6px"),
      (c.style.paddingRight = "6px"),
      (c.style.position = "absolute"),
      c.setAttribute("autofilled", "false"),
      u ? insertAfter(n.getElementById(u), c) : (void 0 !== n.body && n.body ? n.body : r.parentNode.parentNode).appendChild(c),
      void 0 !== r.ownerDocument.defaultView && void 0 !== r.ownerDocument.defaultView.addEventListener
        ? (r.ownerDocument.defaultView.addEventListener(
            "click",
            function (e) {
              e.target.id != t && close_combo(t, n);
            },
            !1
          ),
          r.addEventListener(
            "keydown",
            function (e) {
              9 == e.keyCode && close_combo(t, n);
            },
            !1
          ))
        : (document.attachEvent("onclick", function (e) {
            window.event.srcElement.id != t && close_combo(t, n);
          }),
          document.attachEvent("onkeydown", function (e) {
            9 == window.event.keyCode && close_combo(t, n);
          }));
    for (var p = 0; p < e.length; p++) addItem(c, e[p], p, n);
    var b,
      h = 30,
      y = 20,
      u = ("undefined" == typeof gLocalBaseUrl ? "" : gLocalBaseUrl) + "images/pwdrop.png",
      _,
      v,
      E,
      I,
      C;
    if (
      (g_do_svg && (u = ("undefined" == typeof gLocalBaseUrl ? "" : gLocalBaseUrl) + "images/teardrop.png"),
      (("undefined" != typeof g_isie && g_isie) || ("undefined" != typeof g_isfirefox && g_isfirefox)) &&
        (u =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfElEQVQ4T2NkoDJgpLJ5DKMGUh6io2GIGobe3t4LGBkZ49FD9v///wu3bt2agC3ECYYhuqH4DANZQNDAgIAAgT9//hwAqtUH4ossLCwOGzZs+IArPRA0EKQRZOjv378nsLKyFuAzjCgXkpoyiXIhKYaOGkhKaGFXS/UwBABG2SEVsoLJ9AAAAABJRU5ErkJggg=="),
      o && "undefined" != typeof LP_getAbsolutePos)
    ) {
      var w = 0,
        A = 0,
        c = n.createElement(i + "div"),
        x =
          (void 0 !== n.body && n.body ? (l ? insertAfter(n.getElementById(l), c) : n.body.appendChild(c)) : r.parentNode.appendChild(c),
          getComboButtonId(t)),
        m = new Array(),
        N = 3,
        B,
        B =
          void 0 !== r.ownerDocument.defaultView && void 0 !== r.ownerDocument.defaultView.getComputedStyle
            ? r.ownerDocument.defaultView.getComputedStyle(r)
            : r.currentStyle,
        v,
        E,
        E,
        w,
        A;
      if (!(v = LP_getAbsolutePos(n, r))) return;
      null != v &&
        0 < v.left &&
        0 < v.top &&
        ((E = v.left + parseInt(v.width) + 4 - 30),
        (A = w = 0),
        "undefined" != typeof g_isie && g_isie && ((A = -4), (w = 2)),
        (m.left = E + A + "px"),
        (m.position = "absolute"),
        (m.top = parseInt(v.top) + 4 + w + "px"),
        ("undefined" != typeof g_isfirefox && g_isfirefox) || (m.padding = N + "px"));
      var I,
        C =
          (1 <= (I = Math.floor((30 - v.height) / 2)) &&
            v.height < 30 &&
            ((A = w = 0),
            ((m = new Array()).position = "absolute"),
            (m.height = v.height - 4 + "px"),
            (m.width = v.height - 4 + "px"),
            (m.top = parseInt(v.top) + 4 + I + 4 + "px"),
            (E = v.left + parseInt(v.width) + 4 - 30 + I + 4),
            (m.left = E + I + "px"),
            (N -= 2 * I) < 0 && (N = 0),
            ("undefined" != typeof g_isfirefox && g_isfirefox) || (m.padding = N + "px")),
          Math.round((v.height - 30) / 2)),
        F,
        L,
        B =
          (30 < v.height &&
            ((A = w = 0),
            "undefined" != typeof g_isie &&
              g_isie &&
              ((C -= ((F = parseInt(B.borderTopWidth)) + parseInt(B.borderBottomWidth)) / 2), (A = -5), (w = F)),
            ((m = new Array()).left = E + A + "px"),
            (m.position = "absolute"),
            (m.top = v.top + C + w + "px"),
            (N += 2 * C),
            ("undefined" != typeof g_isfirefox && g_isfirefox) || (m.padding = N + "px")),
          "undefined" != typeof g_isie && g_isie && (m.border = "0px"),
          (r.style.textOverflow = "ellipsis"),
          (r.style.whiteSpace = "nowrap"),
          l &&
            ((c.style.marginLeft = d ? d + "px" : "-15px"),
            (c.style.display = "inline"),
            (c.style.verticalAlign = "top"),
            (c.style.marginTop = "6px"),
            s ? ((m = new Array()).marginTop = s + "px") : (m.marginTop = "-18px")),
          c.ownerDocument.createElement(g_isfirefox ? "image" : "img")),
        _,
        p;
      if (
        (B.setAttribute("id", x),
        B.setAttribute("src", u),
        B.setAttribute("valign", "middle"),
        c.appendChild(B),
        !(_ = n.getElementById(x)))
      )
        return;
      for (p in m) m.hasOwnProperty(p) && (_.style[p] = m[p]);
      _.onclick = function (e) {
        openCombo(e, this.id.substring(0, this.id.length - 7), getComboId(this.id.substring(0, this.id.length - 7)), n),
          null != e ? (e.cancelBubble = !0) : (window.event.cancelBubble = !0);
      };
    } else {
      o ||
        "undefined" == typeof LP_getAbsolutePos ||
        (((_ = n.createElement(i + "img")).id = getComboButtonId(t)),
        null !== _.id &&
          (_.onclick = function (e) {
            openCombo(e, this.id.substring(0, this.id.length - 7), getComboId(this.id.substring(0, this.id.length - 7)), n),
              null != e ? (e.cancelBubble = !0) : (window.event.cancelBubble = !0);
          }),
        _.setAttribute("src", u),
        _.setAttribute("valign", "middle"),
        (void 0 !== n.body && n.body ? n.body : n.getElementById("main")).appendChild(_),
        null != (v = LP_getAbsolutePos(n, r)) &&
          0 < v.left &&
          0 < v.top &&
          ((E = v.left + v.width + 2), (_.style.left = E + "px"), (_.style.position = "absolute"), (_.style.top = v.top + "px")),
        1 <= (I = Math.floor((30 - v.height) / 2)) &&
          v.height < 30 &&
          ((_.style.height = v.height + "px"), (_.style.width = v.height + "px"), (_.style.top = v.top + I + "px")),
        (C = Math.round((v.height - 30) / 2)),
        30 < v.height && (_.style.top = v.top + C + "px"));
    }
    _.className += "teardrop";
  }
}
function delete_combo_item(e, t) {
  var e = getComboId(e),
    o = document.getElementById(e);
  if (o)
    for (var n = getItems(o), i = 0; i < n.length; i++)
      if (n[i].innerHTML == t) {
        for (n.splice(i, 1); o.hasChildNodes(); ) o.removeChild(o.firstChild);
        for (var l = 0; l < n.length; l++) addItem(o, n[l].innerHTML, l);
        break;
      }
}
function close_combo(e, t) {
  t = t || document;
  var o = getComboId(e),
    o = t.getElementById(o),
    n;
  o &&
    ("block" == o.style.display && (setStyle(o, "display", "none", ""), (gItemNum = -1)), g_do_complete) &&
    unhighlight_combo_all_items(t, e);
}
function repopulate_combo(e, t, o) {
  o = o || document;
  var n = getComboId(e),
    i = o.getElementById(n);
  if (i) {
    for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
    for (var l = 0; l < t.length; l++) addItem(i, t[l], l, o);
  }
  var n = getComboButtonId(e),
    e = o.getElementById(n);
  e && setStyle(e, "display", "", "");
}
function destroy_combo(e, t) {
  if (((t = t || document), !(null == e || e.length <= 0)))
    try {
      var o = getComboId(e),
        n = t.getElementById(o);
      if (n) {
        for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
        n.parentNode.removeChild(n);
      }
      var i = getComboButtonId(e),
        l = t.getElementById(i);
      l && l.parentNode.removeChild(l);
    } catch (e) {
      console_log("destroy_combo error: " + e.message);
    }
}
function highlight_combo_item(e, t, o, n) {
  return 0;
  var i, l, d, l;
}
function unhighlight_combo_item(e, t, o) {
  return 0;
  var n;
}
function unhighlight_combo_all_items(e, t) {
  return 0;
  var o, n, i, l;
}
function getComboId(e) {
  return null === e || "" === e ? null : e + "_combo";
}
function getComboButtonId(e) {
  return null === e || "" === e ? null : e + "_button";
}
function hide_combo_item(e) {
  null !== e && setStyle(e, "display", "none", "");
}
function show_combo_item(e) {
  null !== e && setStyle(e, "display", "", "");
}
function show_all_combo_items(e, t) {
  if (((e = e || document), !(null == t || t.length <= 0))) {
    var t = getComboId(t),
      e = e.getElementById(t);
    if (e) for (var o = getItems(e), n = 0; n < o.length; n++) show_combo_item(o[n]);
  }
}
function combo_filter(e, t, o) {
  if (((e = e || document), !(null === t || t.length <= 0))) {
    var n = !0,
      i = 0,
      l = (null === o && (o = ""), of(o, e)),
      d = !0,
      s = null,
      u = getComboId(t),
      u = e.getElementById(u);
    if (u) {
      for (var r = getItems(u), a = 0, m, m, u, g, m; a < r.length; a++) {
        var c = "undefined" != typeof g_isfirefox && g_isfirefox ? r[a].textContent : get_innertext(r[a]),
          f = o,
          p = c,
          p = void 0 === c.trim ? c.replace(/^\s*|\s+$/g, "") : c.trim(),
          f;
        "" === (f = void 0 === o.trim ? o.replace(/^\s*|\s+$/g, "") : o.trim()) || 0 <= p.toLowerCase().indexOf(l.toLowerCase())
          ? (show_combo_item(r[a]), highlight_combo_item(e, t, r[a], o), (n = !1), i++, (s = r[a]))
          : (hide_combo_item(r[a]), unhighlight_combo_item(e, t, r[a]));
      }
      n
        ? close_combo(t, e)
        : ((m = u.getAttribute("autofilled")),
          1 === i &&
            "false" == m &&
            (u.setAttribute("autofilled", "true"),
            (m = e.getElementById(t)) &&
              ((u = m.value.length),
              (g = s.val.length),
              (m.value = s.val),
              "selectionStart" in m
                ? ((m.selectionStart = u), (m.selectionEnd = g))
                : ((m = m.createTextRange()).moveStart("character", u), m.collapse(), m.moveEnd("character", g), m.select())),
            close_combo(t, e)));
    }
  }
}
function keyupCombo(e, t, o, n) {
  if (((e = e || document), (t = t || window.event))) {
    var n = e.getElementById(n);
    if (null !== n && null !== o) {
      var i = t.keyCode;
      if (i != KEY_DOWN && i != KEY_F4 && i != KEY_UP && i != KEY_ENTER && i != KEY_ESCAPE) {
        if ("undefined" != typeof TABKEY && (i == TABKEY || i == SHIFTKEY)) {
          var i = "undefined" != typeof document && document.location ? document.location.href : "";
          if (-1 != i.indexOf("popupfilltab.html") || -1 != i.indexOf("#framesrc=LPMAGIC")) return tabfocuser(t), !1;
        }
        isComboShowing(n) ||
          (showCombo(o, n, null, e),
          (gItemNum = -1),
          setTimeout(function () {
            doFocus();
          }, 0)),
          combo_filter(e, o.id, o.value);
      }
    }
  }
}
function keydownCombo(e, t, o, n) {}
function isComboShowing(e) {
  return null !== e && "block" == e.style.display;
}
function insertAfter(e, t) {
  e.parentNode.insertBefore(t, e.nextSibling);
}
