/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
handlePostMessages = (c) => {
  function n(d) {
    let e = d.getPropertyValue("overflow-x"),
      f = d.getPropertyValue("overflow-y");
    return d && ("hidden" != f || "hidden" != e) && m(d);
  }
  function m(d) {
    return "none" != d.getPropertyValue("display") && "hidden" != d.getPropertyValue("visibility");
  }
  function p(d) {
    let e = "";
    ["transform", "-webkit-transform", "-o-transform", "-moz-transform"].forEach((b) => {
      "" === e && (b = d.getPropertyValue(b).match(/matrix\((.+)\)/i)) && 1 < b.length && (e = b[1]);
    });
    let f = e.split(",");
    return 3 <= f.length ? [parseFloat(f[0]), parseFloat(f[3])] : [1, 1];
  }
  function q(d, e) {
    const f = (b, a) => {
      const g = [...b.querySelectorAll(a)];
      b = document.createNodeIterator(b, Node.ELEMENT_NODE);
      let h;
      for (; (h = b.nextNode()); ) h.shadowRoot && g.push(...f(h.shadowRoot, a));
      return g;
    };
    f(document, "frame,iframe").forEach((b) => {
      var a = b.getClientRects();
      a = a.length
        ? { x: a[0].x, y: a[0].y, width: a[0].width, height: a[0].height, clientLeft: b.clientLeft, clientTop: b.clientTop }
        : { x: 0, y: 0, width: 0, height: 0, clientLeft: 0, clientTop: 0 };
      var g = 0 === e && document.scrollingElement ? document.scrollingElement.scrollWidth : window.innerWidth;
      let h = 0 === e && document.scrollingElement ? document.scrollingElement.scrollHeight : window.innerHeight,
        r = 0 === e && document.scrollingElement ? document.scrollingElement.scrollLeft : 0,
        t = 0 === e && document.scrollingElement ? document.scrollingElement.scrollTop : 0;
      var l = document.defaultView.getComputedStyle(b, "");
      g =
        0 <= a.x + a.clientLeft + r &&
        a.x + a.width <= g + 1 &&
        a.width <= window.innerWidth + 1 &&
        0 <= a.y + a.clientTop + t &&
        a.y + a.height <= h + 1 &&
        a.height <= window.innerHeight + 1 &&
        m(l);
      a.x += d.clientLeft + d.x;
      a.y += d.clientTop + d.y;
      l = p(l);
      b.contentWindow.postMessage({ message: "rInfo", exts: a, scales: l, domId: b.id, fullyVisible: g, level: e + 1 }, "*");
    });
  }
  if (c.data && "undefined" !== typeof c.data.message)
    switch (c.data.message) {
      case "rInfo":
        window.removeEventListener("message", handlePostMessages);
        var k = document.scrollingElement || document.body;
        k = {
          level: c.data.level,
          domId: c.data.domId,
          x: c.data.exts.x,
          y: c.data.exts.y,
          width: c.data.exts.width,
          height: c.data.exts.height,
          scales: c.data.scales,
          clientLeft: c.data.exts.clientLeft,
          clientTop: c.data.exts.clientTop,
          clientWidth: window.innerWidth,
          clientHeight: window.innerHeight,
          scrollWidth: k.scrollWidth,
          scrollHeight: k.scrollHeight,
          scrollable: n(document.defaultView.getComputedStyle(document.body, "")),
          fullyVisible: c.data.fullyVisible
        };
        chrome.runtime.sendMessage({ message: "frameInfo", data: k });
        q(k, c.data.level);
    }
};
window.addEventListener("message", handlePostMessages, !1);
setTimeout(() => window.removeEventListener("message", handlePostMessages), 2e3);
