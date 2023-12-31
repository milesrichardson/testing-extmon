/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var scriptLoaded = !0,
  stubbornNodes = [],
  changedNodes = [],
  stickyNodes = [],
  floatingElements = [],
  commPortName,
  options,
  lockedScrollEvent,
  canBeBetter,
  fsSelectionHint,
  advMode;
const ignoredAttributeFlagName = "__fireshotIgnoredElement",
  prevPosXFlagName = "__fireshotPosX",
  prevPosYFlagName = "__fireshotPosY",
  prevScrollXName = "__fireshotScrollX",
  prevScrollYName = "__fireshotScrollY",
  analysisCountName = "__fireshotCheckedCntr",
  scrolledElementId = "__fireshotSE",
  stickyHeaderFooterProtectionHeight = 150;
chrome.runtime.sendMessage &&
  chrome.runtime.sendMessage({ message: "getPortName" }, function (a) {
    commPortName = a.portName;
    getConsolePtr()("Obtained port name: " + commPortName);
  });
function getOptionFromScript(a, b) {
  return options[a] || b;
}
var addRule = (function (a) {
  var b = document.head.appendChild(a).sheet;
  return function (f, d) {
    var r =
        "string" === typeof d
          ? d
          : Object.keys(d)
              .map(function (l) {
                return l + ":" + ("content" === l ? "'" + d[l] + "'" : d[l]);
              })
              .join(";"),
      h = b ? b.insertRule(f + "{" + r + "}", b.cssRules.length) : 0;
    return {
      cancel: function () {
        b && b.removeRule(h);
      }
    };
  };
})(document.createElement("style"));
function enableSomeElements(a) {
  "undefined" === typeof a && (a = !0);
  var b;
  if (window.location.href.match(/https?:\/\/mail\.google\.com/i)) {
    for (var f = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT), d; (d = f.nextNode()); )
      "TD" == d.nodeName &&
        d.getAttribute("class") &&
        d.getAttribute("class").match(/Bu y3/i) &&
        d.style.setProperty("display", a ? "" : "none", "important");
    (b = document.getElementById(":ro")) && b.style.setProperty("display", a ? "" : "none", "important");
    (b = document.getElementById(":5")) && b.style.setProperty("display", a ? "" : "none", "important");
  }
}
function safeChangeElementStyleProperty(a, b, f, d) {
  a.unshift({ object: b, property: f, value: b.style.getPropertyValue(f), priority: b.style.getPropertyPriority(f) });
  b.style.setProperty(f, d, "important");
  getConsolePtr()("Changing: ");
  getConsolePtr()(b);
  getConsolePtr()("Setting element.style['" + f + "'] = '" + d + "'");
}
function restoreChangedStyles(a) {
  a.forEach((b) => {
    b.value ? b.object.style.setProperty(b.property, b.value, b.priority) : (b.object.style[b.property] = null);
    getConsolePtr()("Restoring: ");
    getConsolePtr()(b.object);
    getConsolePtr()("Setting element.style['" + b.property + "'] = '" + b.value + "'");
  });
  a.length = 0;
}
function hideObtrusiveElements(a, b, f) {
  var d = a.getBoundingClientRect();
  let r = d.width * d.height + 1,
    h = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT),
    l = a !== getScrollingElement(),
    k = 0.9 * window.innerWidth,
    u = 0.9 * window.innerHeight,
    v = 0.33 * d.width,
    K = 0.33 * d.height,
    p = 0.9 * d.width,
    y = 0.9 * d.height;
  for (; null !== (d = h.nextNode()); )
    if (d !== a && !d[ignoredAttributeFlagName]) {
      if (!f) {
        var m = "undefined" !== typeof d[analysisCountName] ? d[analysisCountName] : 0;
        if (2 < m) continue;
        d[analysisCountName] = ++m;
      }
      m = d.getBoundingClientRect();
      if (
        (d.scrollWidth > k && d.scrollHeight > u && d.clientWidth > v && d.clientHeight > K) ||
        (l && d.clientWidth > p && d.clientHeight > y)
      )
        d[ignoredAttributeFlagName] = 1;
      else if (0 === m.width * m.height) d[ignoredAttributeFlagName] = 1;
      else {
        var x = "undefined" !== typeof d[prevPosXFlagName] ? d[prevPosXFlagName] : null,
          A = d[prevPosYFlagName],
          E = d[prevScrollXName],
          B = d[prevScrollYName];
        d[prevPosXFlagName] = m.left;
        d[prevPosYFlagName] = m.top;
        d[prevScrollXName] = a.scrollLeft;
        d[prevScrollYName] = a.scrollTop;
        if (
          !(
            null === x ||
            0 > m.top ||
            m.top > window.innerHeight ||
            ((E = Math.abs(a.scrollLeft - E)),
            (B = Math.abs(a.scrollTop - B)),
            (x = Math.abs(m.left - x)),
            (A = Math.abs(m.top - A)),
            !((!b && A < B / 2) || (b && x < E / 2)) ||
              elementInHiddenList(d) ||
              (l && isChildOf(d, a)) ||
              (l && isChildOf(a, d) && 0.35 < (m.width * m.height) / r))
          )
        ) {
          a: {
            for (m = d; m && m.parentNode && m != document; ) {
              A = document.defaultView.getComputedStyle(m, "");
              if ("hidden" === A.visibility || "none" === A.display || "0" === A.opacity) {
                m = !0;
                break a;
              }
              m = m.parentNode;
            }
            m = !1;
          }
          m ? (d[ignoredAttributeFlagName] = 1) : hideElement(d);
        }
      }
    }
}
function elementInHiddenList(a) {
  for (var b = 0; b < stubbornNodes.length; ++b) if (stubbornNodes[b].elem === a) return !0;
  return !1;
}
function hideElement(a) {
  getConsolePtr()("Hiding:");
  getConsolePtr()(a);
  stubbornNodes.push({
    elem: a,
    opacity: a.style.getPropertyValue("opacity"),
    animation: a.style.getPropertyValue("animation"),
    transitionDuration: a.style.getPropertyValue("transition-duration")
  });
  a.style.setProperty("opacity", "0", "important");
  a.style.setProperty("animation", "unset", "important");
  a.style.setProperty("transition-duration", "0s", "important");
  a[ignoredAttributeFlagName] = 1;
}
function hideStubbornElements(a, b) {
  var f = a ? a.getBoundingClientRect() : void 0;
  const d = f ? f.width : window.innerWidth;
  f = f ? f.height : window.innerHeight;
  b = b || !1;
  for (var r = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT), h; (h = r.nextNode()); )
    if (h !== a && (!fsSelectionHint || h != fsSelectionHint.holder) && "__FireShotAutomationBanner" !== h.id) {
      var l = document.defaultView.getComputedStyle(h, ""),
        k = l && l.getPropertyValue("position");
      if (
        !(
          ("fixed" != k && "sticky" != k) ||
          elementInHiddenList(h) ||
          "none" == l.getPropertyValue("display") ||
          (a && isChildOf(h, a)) ||
          ("sticky" != k && b && h.scrollWidth > window.innerWidth) ||
          (h.scrollWidth > 0.9 * window.innerWidth &&
            h.scrollHeight > 0.9 * window.innerHeight &&
            h.clientWidth > 0.33 * d &&
            h.clientHeight > 0.33 * f)
        )
      ) {
        var u = !1;
        if ("sticky" === k) {
          var v = l.getPropertyValue("top"),
            K = l.getPropertyValue("bottom"),
            p = l.getPropertyValue("left");
          l = l.getPropertyValue("right");
          v && "-3e+07px" !== v && (advMode ? safeChangeElementStyleProperty(stickyNodes, h, "top", "-3e+07px") : (u = !0));
          K && "-3e+07px" !== K && (advMode ? safeChangeElementStyleProperty(stickyNodes, h, "bottom", "-3e+07px") : (u = !0));
          p && "-3e+07px" !== p && (advMode ? safeChangeElementStyleProperty(stickyNodes, h, "left", "-3e+07px") : (u = !0));
          l && "-3e+07px" !== l && (advMode ? safeChangeElementStyleProperty(stickyNodes, h, "right", "-3e+07px") : (u = !0));
        }
        canBeBetter |= u;
        if (u || "sticky" !== k) getConsolePtr()("Found stubborn element " + h.id), hideElement(h);
      }
    }
  for (a = 0; a < stubbornNodes.length; ++a) stubbornNodes[a].elem.style.setProperty("opacity", "0");
}
function showHiddenElements() {
  for (var a = 0; a < stubbornNodes.length; ++a)
    stubbornNodes[a].elem.style.setProperty("opacity", stubbornNodes[a].opacity),
      stubbornNodes[a].elem.style.setProperty("animation", stubbornNodes[a].animation),
      stubbornNodes[a].elem.style.setProperty("transition-duration", stubbornNodes[a].transitionDuration);
}
function removeCustomAttributes() {
  for (var a = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT), b; (b = a.nextNode()); )
    [ignoredAttributeFlagName, analysisCountName, prevPosXFlagName, prevPosYFlagName, prevScrollXName, prevScrollYName].forEach((f) => {
      "undefined" !== typeof b[f] && delete b[f];
    });
}
function disableFixedBackgrounds() {
  for (var a = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT), b; null !== (b = a.nextNode()); )
    "fixed" == document.defaultView.getComputedStyle(b, "").backgroundAttachment &&
      safeChangeElementStyleProperty(changedNodes, b, "background-attachment", "scroll");
}
function FBAdapter() {
  var a = [];
  (function () {
    a = Array.prototype.slice
      .call(document.querySelectorAll("DIV"))
      .map(function (b) {
        return { element: b, top: b.style.top };
      })
      .filter(function (b) {
        return "absolute" == b.element.style.position;
      });
  })();
  return {
    undoSwitchingToFixedPositions: function () {
      a.forEach(function (b) {
        "fixed" == b.element.style.position && ((b.element.style.position = "absolute"), (b.element.style.top = b.top));
      });
    }
  };
}
function getAltExtents() {
  var a = window.document,
    b = a.documentElement;
  b = b.clientWidth ? b.clientWidth : window.innerWidth;
  var f = -1;
  0 > f && (f = window.innerHeight - getSBHeight(window));
  if (a.body) {
    var d = "CSS1Compat" == a.compatMode ? a.documentElement.scrollWidth : a.body.scrollWidth,
      r = a.documentElement.scrollHeight,
      h = "CSS1Compat" == a.compatMode ? a.documentElement.clientWidth : a.body.clientWidth;
    a = "CSS1Compat" == a.compatMode ? a.documentElement.clientHeight : a.body.clientHeight;
    d < h && (d = h);
    r < a && (r = a);
    b < d && (b = d);
    f < r && (f = r);
  }
  return { Width: b, Height: f };
}
function findScrolledElement(a, b, f) {
  let d;
  var r = location.href;
  let h = createNodeIteratorAdvanced(document.documentElement, NodeFilter.SHOW_ELEMENT);
  f.forEach((v) => {
    v.tagName = "IFRAME_MOCKUP";
    v.getClientRects = function () {
      return [{ left: v.x, top: v.y, width: v.width, height: v.height }];
    };
    v.scaleX = v.scales[0];
    v.scaleY = v.scales[1];
  });
  f = f.values();
  const l =
    document.documentElement.clientWidth === document.documentElement.scrollWidth &&
    document.documentElement.clientHeight === document.documentElement.scrollHeight;
  var k = r.match(/https?:\/\/www\.(facebook|fb)\.com/i);
  var u = r.match(/https?:\/\/www\.(facebook|fb)\.com\/messages/i);
  r = r.match(/https?:\/\/www\.bing\.com/i);
  if (!k || u) {
    for (; (k = h.nextNode()) || (k = f.next().value); ) {
      u = k.scaleX || 1;
      const v = k.scaleY || 1;
      0 < k.scrollWidth &&
        0 < k.scrollHeight &&
        (k.scrollWidth > k.clientWidth || k.scrollHeight > k.clientHeight) &&
        ((r &&
          0 < k.getClientRects().length &&
          0 === k.getClientRects()[0].top &&
          k.clientWidth > window.innerWidth - 100 &&
          k.clientHeight > window.innerHeight - 100) ||
          (l &&
            k.clientWidth > 0.5 * document.documentElement.clientWidth &&
            k.clientHeight > 0.8 * document.documentElement.clientHeight) ||
          (k.scrollWidth * u > a && k.scrollHeight * v > 0.5 * b) ||
          (k.scrollHeight * v > 1.5 * b && k.scrollWidth * u > 0.3 * a) ||
          (k.clientWidth > 0.7 * a && k.clientHeight > 0.7 * b)) &&
        (!d || d.clientWidth * d.clientHeight < k.clientWidth * k.clientHeight) &&
        ("IFRAME_MOCKUP" === k.tagName || isScrollableStyle(document.defaultView.getComputedStyle(k, ""))) &&
        ((u = getElementExtents(k)),
        u.absoluteX + u.w <= window.innerWidth + 2 &&
          (u.absoluteY + u.h <= window.innerHeight + 2 ||
            (1.5 * window.innerHeight < k.scrollHeight && k.clientHeight <= window.innerHeight + 50)) &&
          (d = k));
    }
    d && (getConsolePtr()("Found scrolled element:"), getConsolePtr()(d));
    return d;
  }
}
function getElementExtents(a) {
  var b = a.getClientRects(),
    f = { absoluteX: 0, absoluteY: 0, w: 0, h: 0 };
  0 < b.length &&
    ((f.absoluteX = a.clientLeft + b[0].left), (f.absoluteY = a.clientTop + b[0].top), (f.w = b[0].width), (f.h = b[0].height));
  return f;
}
function disableFloatingInView(a) {
  floatingElements = [];
  for (
    var b = document,
      f = getElementExtents(a),
      d = window.innerWidth * window.innerHeight + 1,
      r = createNodeIteratorAdvanced(b.documentElement, NodeFilter.SHOW_ELEMENT),
      h;
    null !== (h = r.nextNode());

  ) {
    var l = b.defaultView.getComputedStyle(h, "");
    !l ||
      "0" === l.getPropertyValue("opacity") ||
      ("absolute" != l.getPropertyValue("position") && "relative" != l.getPropertyValue("position")) ||
      ((l = getElementExtents(h)),
      0 === l.w * l.h ||
        0.35 < (l.w * l.h) / d ||
        h == a ||
        !getIntersection(f.absoluteX, f.absoluteY, f.w, f.h, l.absoluteX, l.absoluteY, l.w, l.h) ||
        isChildOf(a, h) ||
        isChildOf(h, a) ||
        (getConsolePtr()("Hiding:"), getConsolePtr()(h), safeChangeElementStyleProperty(floatingElements, h, "opacity", "0")));
  }
}
function disableScrollEvent() {
  lockedScrollEvent = function (a) {
    a.stopImmediatePropagation();
  };
  window.addEventListener("scroll", lockedScrollEvent, !0);
}
function enableScrollEvent() {
  window.removeEventListener("scroll", lockedScrollEvent, !0);
}
function getOffsets(a, b, f) {
  var d = { x: 0, y: 0 };
  b === cModeVisible
    ? ((d.x = getScrollingElement().scrollLeft), (d.y = getScrollingElement().scrollTop))
    : b === cModeSelected
    ? ((d.x = f.left), (d.y = f.top))
    : a.div && ((d.x = a.left), (d.y = a.top));
  return d;
}
function getScrollingElement() {
  return document.scrollingElement || document.body;
}
function checkAndFixScrollBehavior() {
  const a = document.documentElement,
    b = a.style.getPropertyValue("scroll-behavior");
  "" !== b && "unset" !== b && a.style.setProperty("scroll-behavior", "unset", "important");
}
chrome.runtime.onConnect.addListener(function (a) {
  function b(e, q) {
    options[e] = q;
    a.postMessage({ topic: "setOption", optionName: e, optionValue: q });
  }
  function f() {
    const e = document.createElement("div");
    e.style = "position:absolute";
    document.body.appendChild(e);
    setTimeout(() => document.body.removeChild(e), 50);
  }
  function d(e, q) {
    g = q;
    p = e;
    if (na) {
      if ((e = document.getElementById("main-content")))
        safeChangeElementStyleProperty(changedNodes, e, "margin-bottom", "0"),
          safeChangeElementStyleProperty(changedNodes, e, "position", "static");
      if ((e = document.getElementById("footer")))
        safeChangeElementStyleProperty(changedNodes, e, "height", "auto"),
          safeChangeElementStyleProperty(changedNodes, e, "width", "auto"),
          safeChangeElementStyleProperty(changedNodes, e, "position", "static");
    }
    c = getScrollingElement();
    canBeBetter |= P;
    p != cModeEntire ||
      g ||
      ((g = findScrolledElement(c.scrollWidth, c.scrollHeight, W)),
      !advMode && g && "IFRAME_MOCKUP" === g.tagName && ((canBeBetter = !0), (g = findScrolledElement(c.scrollWidth, c.scrollHeight, []))));
    if (!g || "IFRAME_MOCKUP" !== g.tagName) {
      F = g || Q.body;
      R = void 0;
      g &&
        (safeChangeElementStyleProperty(changedNodes, g, "scroll-behavior", "unset"),
        (c = g),
        g.scrollIntoView(),
        disableFloatingInView(g),
        (ca = g.style.zIndex),
        (g.style.zIndex = 2147483647),
        g.id || (g.id = scrolledElementId),
        (R = addRule(`#${scrolledElementId}::-webkit-scrollbar`, { display: "none" })),
        safeChangeElementStyleProperty(changedNodes, g, "scrollbar-width", "none"),
        oa && safeChangeElementStyleProperty(changedNodes, g, "background", "#ddd"));
      da = c.scrollTop;
      ea = c.scrollLeft;
      z = c.scrollWidth;
      w = c.scrollHeight;
      S = M = T = U = void 0;
      if (!g) {
        "hidden" === document.defaultView.getComputedStyle(document.body, "").overflowX &&
          ((M = F.style.overflowX),
          (e = c.scrollHeight),
          (F.style.overflowX = "visible"),
          e >= c.scrollHeight && ((F.style.overflowX = M), (M = void 0)));
        z = Math.max(
          Q.documentElement.scrollWidth,
          F.scrollWidth,
          document.documentElement.clientWidth,
          F.offsetWidth,
          document.documentElement.offsetWidth
        );
        w = Math.max(
          Q.documentElement.scrollHeight,
          F.scrollHeight,
          document.documentElement.clientHeight,
          F.offsetHeight,
          document.documentElement.offsetHeight
        );
        if (0 >= z || 0 >= w) (e = getAltExtents()), (z = e.Width), (w = e.Height);
        0 >= z && (z = 1024);
        0 >= w && (w = 768);
      }
      p === cModeEntire &&
        (u
          ? ((c.scrollTop = 1),
            (c.scrollLeft = 1),
            setTimeout(function () {
              c.scrollTop = 0;
              c.scrollLeft = 0;
            }, 10))
          : (P && 32 < c.getClientRects()[0]?.x && (disableScrollEvent(), setTimeout(enableScrollEvent, 10)),
            (c.scrollTop = 0),
            (c.scrollLeft = 0)));
      X && (fa = FBAdapter());
      p !== cModeVisible && p !== cModeBrowser && enableSomeElements(!1);
      g
        ? ((B = g.clientWidth), (G = g.clientHeight))
        : ((B = window.innerWidth), (G = window.innerHeight), z < window.innerWidth && (z = window.innerWidth));
    }
  }
  if (chrome.runtime.sendMessage && a.name != commPortName) {
    var r = a.name.split("-");
    r = 0 < r.length ? r[r.length - 1] : "0";
    var h = commPortName.split("-");
    h = 0 < h.length ? h[h.length - 1] : "0";
    "0" === r &&
      "0" === h &&
      (a.postMessage({ topic: "initAborted" }),
      alert("Please reload this page and run FireShot again."),
      getConsolePtr()("Comm port name is wrong: " + a.name + " <> " + commPortName));
  } else {
    var l = !0,
      k = !0,
      u = 0 === window.navigator.plugins.length && isConsoleOpened(),
      v = 1,
      K = 1,
      p = 0,
      y = 0,
      m = 1,
      x = 1,
      A = !0,
      E = !0,
      B = 0,
      G = 0,
      Y = 0,
      ha = 0,
      t = { left: 0, top: 0, right: 0, bottom: 0 },
      g,
      Q,
      F,
      c,
      da,
      ea,
      M,
      U,
      T,
      z,
      w,
      ca,
      C,
      X = null != window.location.href.match(/https?:\/\/www\.(facebook|fb)\.com/i),
      P = null != window.location.href.match(/https?:\/\/web.whatsapp.com/i),
      oa = null != window.location.href.match(/https?:\/\/web.telegram.org/i),
      na = window.location.href.match(/https?:\/\/getfireshot.com\/?$/i);
    window.location.href.match(/https?:\/\/web.whatsapp.com/i);
    var fa,
      S,
      R,
      Z,
      aa,
      W,
      O,
      ia,
      ja,
      L,
      ba = 0;
    a.onMessage.addListener(function (e) {
      getConsolePtr()("CS:" + e.topic);
      switch (e.topic) {
        case "preStep1":
          document.body
            ? ((changedNodes = []),
              (ia = getScrollingElement().scrollLeft),
              (ja = getScrollingElement().scrollTop),
              isSafari() ||
                (safeChangeElementStyleProperty(changedNodes, document.body, "overflow-x", "hidden"),
                safeChangeElementStyleProperty(changedNodes, document.body, "overflow-y", "hidden")),
              a.postMessage({ topic: "preStep1Done", windowW: window.innerWidth, windowH: window.innerHeight }))
            : a.postMessage({ topic: "initAborted" });
          break;
        case "preStep2":
          restoreChangedStyles(changedNodes);
          getScrollingElement().scrollTo(ia, ja);
          setTimeout(() => a.postMessage({ topic: "preStep2Done", windowW: window.innerWidth, windowH: window.innerHeight }, 100));
          break;
        case "init":
          advMode = e.adv;
          window.isDebug |= e.debug;
          y = advMode ? 150 : 200;
          Q = window.document;
          options = JSON.parse(e.options);
          W = e.frames;
          m = e.ratioW;
          x = e.ratioH;
          getConsolePtr()("Ratios: " + m + ", " + x);
          stubbornNodes = [];
          changedNodes = [];
          stickyNodes = [];
          Z = y / ((parseInt(getOptionFromScript(cPageScrollingSpeedPref, 100)) || 100) / 100);
          aa = advMode && "true" === getOptionFromScript(cAllowInfiniteScrolling, "true");
          canBeBetter = !1;
          try {
            if ((d(e.mode), g && "IFRAME_MOCKUP" === g.tagName)) {
              var q = g.getClientRects(),
                D = c.scrollLeft,
                V = c.scrollTop;
              const n = q[0].left + D,
                H = q[0].top + V;
              c.scrollTo(n, H);
              a.postMessage({
                topic: "switchToFrame",
                id: g.frameId,
                restorePosition: { left: D, top: V },
                capturePosition: { left: n - c.scrollLeft, top: H - c.scrollTop }
              });
              break;
            }
          } catch (n) {
            getConsolePtr()(n.stack);
            a.postMessage({ topic: "initAborted" });
            break;
          }
          disableFixedBackgrounds();
          safeChangeElementStyleProperty(changedNodes, window.document.documentElement, "scroll-behavior", "unset");
          if ((p !== cModeSelected && !g) || u)
            (S = addRule("body::-webkit-scrollbar", { display: "none" })),
              isFirefox() &&
                (safeChangeElementStyleProperty(changedNodes, window.document.documentElement, "scrollbar-width", "none"), f()),
              document.scrollingElement
                ? (w = Math.max(w, document.scrollingElement.scrollHeight))
                : ((T = document.defaultView.getComputedStyle(document.documentElement, "").overflowY),
                  (document.documentElement.style.overflowY = "initial"),
                  (U = document.defaultView.getComputedStyle(document.documentElement, "").overflowX),
                  (document.documentElement.style.overflowX = "initial"));
          var ka = {
            topic: "initDone",
            url: document.location.toString(),
            title: document.title.replace(/\u200B/g, "").replace(/\u00a0/g, " "),
            emulation: u
          };
          X && p === cModeEntire
            ? setTimeout(function () {
                c.scrollTop = w;
                setTimeout(function () {
                  c.scrollTop = 0;
                  setTimeout(function () {
                    a.postMessage(ka);
                  }, y);
                }, y);
              }, y)
            : setTimeout(() => a.postMessage(ka), y);
          break;
        case "cancelSelection":
          O && O.cancel();
          break;
        case "selectArea":
          if (!document.body) {
            alert("Apologies, this page does not support capturing selections.");
            a.postMessage({ topic: "areaSelectionCanceled" });
            enableScrollEvent();
            break;
          }
          fsSelectionHint = FireShotAddon.FSSelectionHint(document);
          advMode && "false" !== getOptionFromScript(cShowSelectionHintPref, "true") && fsSelectionHint.show();
          O = FireShotAddon.FSSelector({
            browser: "chrome",
            extendedMode: advMode,
            doc: document,
            ignoredAttributeFlagName,
            frames: advMode ? W : [],
            onScroll: () => {}
          });
          O.makeSelection(function (n) {
            function H() {
              showHiddenElements();
              advMode && restoreChangedStyles(stickyNodes);
              removeCustomAttributes();
              enableScrollEvent();
            }
            advMode && (fsSelectionHint.isShown() ? fsSelectionHint.hide() : b(cShowSelectionHintPref, "false"));
            if (n.left == n.right || n.top == n.bottom) a.postMessage({ topic: "areaSelectionCanceled" }), H();
            else {
              canBeBetter |= 200 < c.scrollHeight - c.scrollHeight;
              advMode && ((w = Math.max(w, c.scrollHeight)), showHiddenElements(), restoreChangedStyles(stickyNodes));
              if (n.isScrollable) {
                if ("IFRAME_MOCKUP" === n.selectedElement.tagName) {
                  const pa = c.scrollLeft,
                    qa = c.scrollTop,
                    la = n.selectedElement.rect.left,
                    ma = n.selectedElement.rect.top;
                  c.scrollTo(la, ma);
                  a.postMessage({
                    topic: "switchToFrame",
                    id: n.selectedElement.frameId,
                    restorePosition: { left: pa, top: qa },
                    capturePosition: { left: la - c.scrollLeft, top: ma - c.scrollTop }
                  });
                  H();
                  return;
                }
                getConsolePtr()("Capturing element:");
                getConsolePtr()(n.selectedElement);
                d(cModeEntire, n.selectedElement);
              } else {
                c.scrollLeft = n.left;
                if (
                  n.top - stickyHeaderFooterProtectionHeight < c.scrollTop ||
                  n.bottom + stickyHeaderFooterProtectionHeight > c.scrollTop + innerHeight ||
                  n.bottom - n.top + stickyHeaderFooterProtectionHeight > innerHeight
                )
                  c.scrollTop = Math.max(0, n.top - stickyHeaderFooterProtectionHeight);
                Y = c.scrollLeft;
                ha = c.scrollTop;
                t.left = n.left;
                t.top = n.top;
                t.right = n.right;
                t.bottom = n.bottom;
              }
              setTimeout(() => a.postMessage({ topic: "areaSelected" }), y);
            }
            O = void 0;
          });
          break;
        case "scrollNext":
          const N = p === cModeSelected && t.bottom - t.top + stickyHeaderFooterProtectionHeight < innerHeight;
          if (l) {
            C = new LinksGrabber(g || document);
            C.clearAttributes();
            C.markHiddenLinks();
            C.createLinksSnapshot();
            advMode && !N && hideObtrusiveElements(c, !1);
            0 === c.scrollLeft && 0 === c.scrollTop && C.checkClickableLinks();
            L = c.scrollTop;
            l = !1;
            setTimeout(() => {
              try {
                a.postMessage({ topic: "scrollDone", x: c.scrollLeft * m, y: c.scrollTop * x, progress: 0 });
              } catch (n) {
                console.error(n);
              }
            }, y);
            break;
          }
          if (!N) {
            if (
              !e.cancel &&
              A &&
              p != cModeVisible &&
              p != cModeBrowser &&
              ((V = p == cModeSelected ? t.right : z),
              (q = Math.max(B - 30, 0)),
              checkAndFixScrollBehavior(),
              (D = c.scrollLeft),
              (c.scrollLeft += Math.max(0, Math.min(q, V - (c.scrollLeft + q) + 20))),
              (A = c.scrollLeft != D && c.scrollLeft < z))
            ) {
              1 == v && K++;
              getConsolePtr()("scrollLeft:" + c.scrollLeft);
              setTimeout(() => {
                N || (hideStubbornElements(g, !0), advMode && hideObtrusiveElements(c, !0));
                C.createLinksSnapshot();
                setTimeout(() => {
                  a.postMessage({
                    topic: "scrollDone",
                    x: c.scrollLeft * m,
                    y: c.scrollTop * x,
                    progress: Math.ceil(0 < w - L ? (100 * (c.scrollTop - L)) / (w - L) : 100)
                  });
                }, y + Z);
              }, 0);
              break;
            }
            if (!e.cancel && E && p != cModeVisible && p != cModeBrowser) {
              q = k ? stickyHeaderFooterProtectionHeight : 40;
              k = !1;
              q = G - q;
              0 >= q && (q = G);
              D = stickyHeaderFooterProtectionHeight;
              0 < q - D && (q -= D);
              checkAndFixScrollBehavior();
              D = c.scrollTop;
              c.scrollTop += q;
              const n = c.scrollTop,
                H = c.scrollHeight;
              E = D != c.scrollTop && (aa || c.scrollTop < w);
              p == cModeSelected && (E &= c.scrollTop < t.bottom);
              if (E) {
                v++;
                checkAndFixScrollBehavior();
                c.scrollLeft = p == cModeEntire ? 0 : Y;
                getConsolePtr()("scrollTop:" + c.scrollTop);
                A = !0;
                setTimeout(() => {
                  X && fa.undoSwitchingToFixedPositions();
                  N || (hideStubbornElements(g), advMode && hideObtrusiveElements(c, !1));
                  C.createLinksSnapshot();
                  setTimeout(() => {
                    0 === ba && c.scrollHeight < H && (c.scrollTop < n || isFirefox() || isSafari()) && (ba = H - c.scrollHeight);
                    a.postMessage({
                      topic: "scrollDone",
                      x: c.scrollLeft * m,
                      y: (c.scrollTop + ba) * x,
                      progress: Math.ceil(0 < w - L ? (100 * (c.scrollTop - L)) / (w - L) : 100)
                    });
                  }, y + Z);
                }, 10);
                break;
              }
            }
          }
          e.cancel && getConsolePtr()("Capturing canceled");
          if (e.cancel || aa) w = Math.max(c.scrollTop + G, w);
          e = {
            topic: "scrollFinished",
            div: 0,
            left: 0,
            top: 0,
            rows: v,
            cols: K,
            cw: B,
            ch: G,
            hScrollbar: window.innerHeight > G,
            vScrollBar: window.innerWidth > B,
            cropLeft: 0,
            stickyHdrHeight: Math.floor(stickyHeaderFooterProtectionHeight * x),
            cropRight: 0,
            cropTop: 0,
            cropBottom: 0,
            canBeBetter: canBeBetter && p !== cModeVisible
          };
          g &&
            ((q = g.getClientRects()),
            (e.div = 1),
            0 < q.length &&
              ((e.left = Math.max(0, g.clientLeft + q[0].left)),
              (e.top = Math.max(0, g.clientTop + q[0].top)),
              (e.cw = g.clientWidth),
              (e.ch = g.clientHeight)));
          restoreChangedStyles(floatingElements);
          p === cModeSelected &&
            ((e.crop = !0),
            (e.cropLeft = t.left - Y),
            (e.cropTop = t.top - ha),
            (e.cropRight = e.cropLeft + (t.right - t.left)),
            (e.cropBottom = e.cropTop + (t.bottom - t.top)));
          getConsolePtr()(JSON.stringify(e));
          const I = getOffsets(e, p, t);
          C.getLinks(e, I, m, x);
          C.clearAttributes();
          C = void 0;
          let J;
          p === cModeSelected
            ? ((J = new fsRect(t.left, t.top, t.right - t.left, t.bottom - t.top)),
              N && ((J.left -= c.scrollLeft), (J.top -= c.scrollTop), (I.x = t.left - c.scrollLeft), (I.y = t.top - c.scrollTop)))
            : p === cModeVisible
            ? ((J = new fsRect(0, 0, B, G)), (I.x = I.y = 0))
            : (J = g ? new fsRect(I.x, I.y, z, c.scrollTop + e.ch) : new fsRect(0, 0, z, c.scrollTop + e.ch));
          p === cModeVisible ||
            N ||
            (P && disableScrollEvent(), (c.scrollTop = 0), (c.scrollLeft = 0), P && setTimeout(enableScrollEvent, 10));
          showHiddenElements();
          setTimeout(() => {
            const n = new TextGrabber(c);
            e.words = n.getElements(I, m, x, J);
            e.left *= m;
            e.top *= x;
            e.cw *= m;
            e.ch *= x;
            e.cropLeft *= m;
            e.cropTop *= x;
            e.cropRight *= m;
            e.cropBottom *= x;
            c.scrollLeft = ea;
            c.scrollTop = da;
            restoreChangedStyles(changedNodes);
            restoreChangedStyles(stickyNodes);
            void 0 !== M && (document.body.style.overflowX = M);
            void 0 !== T && (document.documentElement.style.overflowY = T);
            void 0 !== U && (document.documentElement.style.overflowX = U);
            g && ((g.style.zIndex = ca), g.id === scrolledElementId && (g.id = ""));
            p != cModeVisible && p != cModeBrowser && enableSomeElements(!0);
            removeCustomAttributes();
            S && S.cancel();
            R && R.cancel();
            isFirefox() && f();
            setTimeout(function () {
              a.postMessage(e);
            }, y);
          }, 10);
          break;
        case "sendFireShotCaptureCompleteEvent":
          window.fsPendingCB &&
            ((q = { cbId: window.fsPendingCB, data: e.data }),
            "undefined" !== typeof cloneInto && (q = cloneInto(q, document.defaultView)),
            (q = new document.defaultView.CustomEvent("FireShotCaptureCompleteEvent", { detail: q })),
            document.dispatchEvent(q));
      }
    });
  }
});
