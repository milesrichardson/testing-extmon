var KEY_UP = 38,
  KEY_DOWN = 40,
  KEY_ENTER = 13,
  ELEMENT_NODE = 1,
  KEY_ESCAPE = 27,
  KEY_F4 = 115;
function openCombo(e, t, o) {
  var t = document.getElementById(t),
    o,
    l;
  t.disabled ||
    ((l = "block" == (o = gComboEx = document.getElementById(o)).style.display),
    (gItemNum = (l ? setStyle(o, "display", "none", "") : showCombo(t, o), -1)),
    (gFocusItem = t),
    setTimeout(function () {
      doFocus();
    }, 0));
}
var g_iField = null,
  g_cb = null;
function showCombo(e, t) {
  (g_cb = t),
    (g_iField = e).addEventListener(
      "move",
      function (e) {
        realShowCombo();
      },
      !1
    ),
    realShowCombo();
}
function getY(e) {
  for (var t = 0; null != e; ) (t += e.offsetTop), (e = e.offsetParent);
  return t;
}
function getX(e) {
  for (var t = 0; null != e; ) (t += e.offsetLeft), (e = e.offsetParent);
  return t;
}
function realShowCombo() {
  var e = getY(g_iField),
    t = getX(g_iField),
    e = e + g_iField.offsetHeight + "px",
    t = t + "px";
  (g_cb.style.minWidth = g_iField.offsetWidth + "px"),
    setStyle(g_cb, "top", e, ""),
    setStyle(g_cb, "left", t, ""),
    setStyle(g_cb, "display", "block", "");
}
var gItemNum = 0,
  gComboEx = null;
function focusCombo(e, t, o) {
  var e = e.keyCode,
    l = !0,
    o = (gComboEx = document.getElementById(o));
  if (e == KEY_DOWN || e == KEY_F4) {
    for (
      var l = !1, i, n = ("block" == o.getAttribute("style.display") || showCombo(t, o), o.childNodes), s = n.length, d = 0;
      null != n[d] && d < s;

    ) {
      if (n[d].nodeType == ELEMENT_NODE && "item" == n[d].className) {
        gFocusItem = n[d];
        break;
      }
      d++;
    }
    (gItemNum = 0),
      setTimeout(function () {
        doFocus();
      }, 0),
      (l = !1);
  } else
    e != KEY_ENTER &&
      e == KEY_ESCAPE &&
      (null != t.val && 0 < t.val.length ? (l = !0) : ((l = !1), setStyle(gComboEx, "display", "none", ""), (gItemNum = -1)));
  return l;
}
function focusItem(e, t, o) {
  for (var l = o.val, i = null, n = getItems(t), s = n.length, d = !1, m = 0, c, o; m < s; m++)
    if (n[m].hasChildNodes() && n[m].firstChild.nodeValue == l) {
      (d = !0), (i = n[m]), (gItemNum = m);
      break;
    }
  d || ((i = addItem(t, l, n.length)), (gItemNum = n.length)),
    null != i &&
      ((gFocusItem = i),
      "block" != gComboEx.getAttribute("style.display")
        ? ((c = o.offsetTop + o.offsetHeight + "px"), (o = o.offsetLeft + "px"), setStyle(t, "top", c, ""), setStyle(t, "left", o, ""))
        : setStyle(t, "display", "none", ""),
      setStyle(t, "display", "block", ""),
      setTimeout(function () {
        doFocus();
      }, 0));
}
function addItem(e, t, o, l) {
  var i = (l = l || document).createElement("div"),
    n = void 0 !== t.label ? t.label : t,
    s = void 0 !== t.label ? t.value : t,
    s,
    t =
      ((i.val = s),
      (i.label = n),
      void 0 !== t.label &&
        ((i.label = t.label), void 0 !== t.image) &&
        (((s = l.createElement("img")).src = t.image), (s.style.paddingRight = "15px"), i.appendChild(s), (i.img = s.src)),
      l.createTextNode(n));
  return (
    i.appendChild(t),
    i.setAttribute("tabindex", "-1"),
    i.setAttribute("class", "item"),
    i.setAttribute("data-lpcount", o),
    i.addEventListener("click", function () {
      gItemNum = this.getAttribute("data-lpcount");
    }),
    i.addEventListener("mouseover", function () {
      (gFocusItem = this), doFocus();
    }),
    i.setAttribute("role", "listitem"),
    (i.style.overflow = "hidden"),
    e.appendChild(i),
    i
  );
}
function doComboNav(e, t, o) {
  var l = e.keyCode,
    i = !0,
    i,
    n,
    s,
    d,
    s,
    d,
    n,
    e,
    s;
  return (
    null == gComboEx && (gComboEx = t),
    l == KEY_UP || l == KEY_DOWN
      ? ((i = !1),
        (n = 0),
        (d = (s = getItems(gComboEx)).length),
        l == KEY_UP ? (n = gItemNum - 1) : (n = gItemNum + 1) == d && (n = -1),
        (gFocusItem = -1 == (gItemNum = n) ? document.getElementById(o) : s[n]),
        setTimeout(function () {
          doFocus();
        }, 0))
      : l == KEY_ENTER || (!e.keyCode && 0 <= e.button)
      ? null != (d = (s = getItems(gComboEx))[gItemNum]) &&
        "true" != d.getAttribute("aria-disabled") &&
        ((n = d.label),
        (e = d.val),
        ((s = document.getElementById(o)).value = n),
        (s.val = e),
        void 0 !== d.img && ((s.style.background = "url(" + d.img + ") no-repeat 2px 5px"), (s.style.paddingLeft = "25px")),
        s.onchange && s.onchange(),
        setStyle(gComboEx, "display", "none", ""),
        (gItemNum = 0),
        (gFocusItem = s),
        setTimeout(function () {
          doFocus();
        }, 0))
      : l == KEY_ESCAPE &&
        ((i = !1),
        setStyle(t, "display", "none", ""),
        (gItemNum = 0),
        (gFocusItem = document.getElementById(o)),
        setTimeout(function () {
          doFocus();
        }, 0)),
    i
  );
}
function getItems(e) {
  for (var t = new Array(), t = new Array(), o = e.childNodes, l = o.length, i = 0; i < l; i++)
    o[i].nodeType != ELEMENT_NODE ||
      ("item" != o[i].getAttribute("class") && "item focus" != o[i].getAttribute("class")) ||
      (t[t.length] = o[i]);
  return t;
}
function setStyle(e, t, o, l) {
  var i = !1;
  try {
    e.style && e.style.setProperty && (e.style.setProperty(t, o, l), (i = !0));
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
function create_combo(e, t, o, l, i) {
  i = i || "";
  var n = (l = l || document).getElementById(e),
    s = e + "_combo",
    d;
  if (!l.getElementById(s)) {
    if (
      ((n.onkeydown = function (e) {
        return focusCombo(e, this, this.id + "_combo");
      }),
      n.setAttribute("role", "textfield"),
      n.setAttribute("aria-haspopup", "true"),
      n.setAttribute("autocomplete", "off"),
      (n.style.marginRight = "0px"),
      "" == n.style.width.replace(/px/, ""))
    )
      try {
        var m,
          d = n.ownerDocument.defaultView.getComputedStyle(n, "").width.replace(/px/, "");
      } catch (e) {}
    var c = l.createElement(i + "div");
    c.setAttribute("role", "list"),
      (c.style.display = "none"),
      c.setAttribute("id", s),
      c.setAttribute("class", "dropStyle"),
      (c.onkeydown = function (e) {
        return doComboNav(e, this, this.id.substring(0, this.id.length - 6));
      }),
      c.addEventListener("click", function (e) {
        doComboNav(e, this, this.id.substring(0, this.id.length - 6));
      }),
      (c.style.paddingLeft = "6px"),
      (c.style.paddingRight = "6px"),
      (c.style.position = "absolute"),
      (void 0 !== l.body && l.body ? l.body : l.getElementById("main")).appendChild(c),
      n.ownerDocument.defaultView.addEventListener(
        "click",
        function () {
          close_combo(e, l);
        },
        !1
      );
    for (var u = 0; u < t.length; u++) addItem(c, t[u], u, l);
    var s = l.createElement(i + "img"),
      i =
        ((s.id = e + "_button"),
        (s.onclick = function (e) {
          openCombo(e, this.id.substring(0, this.id.length - 7), this.id.substring(0, this.id.length - 7) + "_combo"),
            (e.cancelBubble = !0);
        }),
        ("undefined" == typeof gLocalBaseUrl ? "" : gLocalBaseUrl) + "images/pwdrop.png"),
      a,
      i,
      g,
      g,
      o,
      o;
    "undefined" != typeof g_isie &&
      g_isie &&
      (i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzRGRTU3Q0E0MEExMUUwOTJDNjk3MDYyMDFDNUI4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzRGRTU3REE0MEExMUUwOTJDNjk3MDYyMDFDNUI4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVFMTE0Q0M3QTQwOTExRTA5MkM2OTcwNjIwMUM1QjhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVFMTE0Q0M4QTQwOTExRTA5MkM2OTcwNjIwMUM1QjhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I6ppiQAAAZhJREFUeNq0lc8rhEEcxve1m4sfB+IgFFk32oui9kDZiz1Jb36Ui4MLOSgcnNQWN7LlKJSD9kI4yUnKCVc54B/YZLc44PWZmrfeppl53zb71KfpffvO8z47890Zx/O8WDWUCD4UCgVdTQMMwCykoA3e4RXO4RJerMYadcMhDCq1rdALo7AmOYEfv6DGYroIT5C2BBDz2+EYzqA5zHgFdiP8oqCycmnqTcbDsAVOBXs2BHs6Y2F2FLJEYZqGjGowAR3/0GkLCc2GBVWEpOu6RZMLLdrH8ADxwOsRNXFSeW6CXEjCTcVUqFE1rtNMnCdVypA2K7tB24dhEmnyGtNahp2YpcGDKhnq0hjNKO+WoSeq8bMleU6mFGlbGNYttR+qcd5S3CVTCm34/zCDrp3gsSlPtzfoNEwow5Q8F+KGml8Y022eWMtvwySR8sJiKrQPVzrjW1iFSm6AG1gSqU3ttg1z8BXR0JPnsejpz7A+PoB+OPWLDYaPMCkPn1LUG0S037jcTPGRjFxnsUF3cC9ryupEp1qX6Z8AAwCnLFoADB2D+gAAAABJRU5ErkJggg=="),
      s.setAttribute("src", i),
      s.setAttribute("valign", "middle"),
      n.nextSibling ? n.parentNode.insertBefore(s, n.nextSibling) : n.parentNode.appendChild(s),
      o &&
        "undefined" != typeof getAbsolutePos &&
        ((a = 22),
        null != (i = getAbsolutePos(l, n)) &&
          0 < i.left &&
          0 < i.top &&
          ((g = i.left + i.width - 2 - 22), (s.style.left = g + "px"), (s.style.position = "absolute")),
        1 <= (o = Math.floor((22 - i.height) / 2)) &&
          i.height < 22 &&
          ((s.style.height = i.height + "px"),
          (s.style.width = i.height + "px"),
          (s.style.top = i.top + o + "px"),
          (g = i.left + i.width - 2 - 22 + o),
          (s.style.left = g + "px")),
        (o = Math.round((i.height - 22) / 2)),
        22 < i.height && (s.style.top = i.top + o + "px"),
        (n.style.paddingRight = "24px"),
        (n.style.textOverflow = "ellipsis"),
        (n.style.whiteSpace = "nowrap"),
        (n.style.overflow = "hidden"));
  }
}
function delete_combo_item(e, t) {
  var o,
    l = document.getElementById(e + "_combo");
  if (l)
    for (var i = getItems(l), n = 0; n < i.length; n++)
      if (i[n].innerHTML == t) {
        for (i.splice(n, 1); l.hasChildNodes(); ) l.removeChild(l.firstChild);
        for (var s = 0; s < i.length; s++) addItem(l, i[s].innerHTML, s);
        break;
      }
}
function close_combo(e, t) {
  var o,
    t = (t = t || document).getElementById(e + "_combo"),
    l;
  t && "block" == t.style.display && (setStyle(t, "display", "none", ""), (gItemNum = -1));
}
function repopulate_combo(e, t, o) {
  var l,
    i = (o = o || document).getElementById(e + "_combo");
  if (i) {
    for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
    for (var n = 0; n < t.length; n++) addItem(i, t[n], n, o);
  }
}
function destroy_combo(e, t) {
  if (((t = t || document), !(null == e || e.length <= 0)))
    try {
      var o = e + "_combo",
        l = t.getElementById(o);
      if (l) {
        for (; l.hasChildNodes(); ) l.removeChild(l.firstChild);
        l.parentNode.removeChild(l);
      }
      var i = e + "_button",
        n = t.getElementById(i);
      n && n.parentNode.removeChild(n);
    } catch (e) {
      console.log("destroy_combo error: " + e.message);
    }
}
