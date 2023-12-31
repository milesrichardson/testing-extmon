!(function () {
  function e(e) {
    return !e.className;
  }
  new Set([
    "version",
    "title",
    "lang",
    "translate",
    "dir",
    "dataset",
    "hidden",
    "tabIndex",
    "accessKey",
    "draggable",
    "spellcheck",
    "contentEditable",
    "isContentEditable",
    "offsetParent",
    "offsetTop",
    "offsetLeft",
    "offsetWidth",
    "offsetHeight",
    "style",
    "innerText",
    "outerText",
    "onabort",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextmenu",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onvolumechange",
    "onwaiting",
    "onwheel",
    "ongotpointercapture",
    "onlostpointercapture",
    "onpointerdown",
    "onpointermove",
    "onpointerup",
    "onpointercancel",
    "onpointerover",
    "onpointerout",
    "onpointerenter",
    "onpointerleave",
    "click",
    "focus",
    "blur",
    "onauxclick",
    "nonce",
    "namespaceURI",
    "prefix",
    "localName",
    "tagName",
    "id",
    "className",
    "classList",
    "slot",
    "attributes",
    "shadowRoot",
    "assignedSlot",
    "innerHTML",
    "outerHTML",
    "scrollTop",
    "scrollLeft",
    "scrollWidth",
    "scrollHeight",
    "clientTop",
    "clientLeft",
    "clientWidth",
    "clientHeight",
    "onbeforecopy",
    "onbeforecut",
    "onbeforepaste",
    "oncopy",
    "oncut",
    "onpaste",
    "onsearch",
    "onselectstart",
    "previousElementSibling",
    "nextElementSibling",
    "children",
    "firstElementChild",
    "lastElementChild",
    "childElementCount",
    "onwebkitfullscreenchange",
    "onwebkitfullscreenerror",
    "setPointerCapture",
    "releasePointerCapture",
    "hasPointerCapture",
    "hasAttributes",
    "getAttributeNames",
    "getAttribute",
    "getAttributeNS",
    "setAttribute",
    "setAttributeNS",
    "removeAttribute",
    "removeAttributeNS",
    "hasAttribute",
    "hasAttributeNS",
    "getAttributeNode",
    "getAttributeNodeNS",
    "setAttributeNode",
    "setAttributeNodeNS",
    "removeAttributeNode",
    "closest",
    "matches",
    "webkitMatchesSelector",
    "attachShadow",
    "getElementsByTagName",
    "getElementsByTagNameNS",
    "getElementsByClassName",
    "insertAdjacentElement",
    "insertAdjacentText",
    "insertAdjacentHTML",
    "requestPointerLock",
    "getClientRects",
    "getBoundingClientRect",
    "scrollIntoView",
    "scrollIntoViewIfNeeded",
    "createShadowRoot",
    "getDestinationInsertionPoints",
    "animate",
    "remove",
    "querySelector",
    "querySelectorAll",
    "webkitRequestFullScreen",
    "webkitRequestFullscreen",
    "scroll",
    "scrollTo",
    "scrollBy",
    "before",
    "after",
    "replaceWith",
    "prepend",
    "append",
    "ELEMENT_NODE",
    "ATTRIBUTE_NODE",
    "TEXT_NODE",
    "CDATA_SECTION_NODE",
    "ENTITY_REFERENCE_NODE",
    "ENTITY_NODE",
    "PROCESSING_INSTRUCTION_NODE",
    "COMMENT_NODE",
    "DOCUMENT_NODE",
    "DOCUMENT_TYPE_NODE",
    "DOCUMENT_FRAGMENT_NODE",
    "NOTATION_NODE",
    "DOCUMENT_POSITION_DISCONNECTED",
    "DOCUMENT_POSITION_PRECEDING",
    "DOCUMENT_POSITION_FOLLOWING",
    "DOCUMENT_POSITION_CONTAINS",
    "DOCUMENT_POSITION_CONTAINED_BY",
    "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
    "nodeType",
    "nodeName",
    "baseURI",
    "isConnected",
    "ownerDocument",
    "parentNode",
    "parentElement",
    "childNodes",
    "firstChild",
    "lastChild",
    "previousSibling",
    "nextSibling",
    "nodeValue",
    "textContent",
    "hasChildNodes",
    "getRootNode",
    "normalize",
    "cloneNode",
    "isEqualNode",
    "isSameNode",
    "compareDocumentPosition",
    "contains",
    "lookupPrefix",
    "lookupNamespaceURI",
    "isDefaultNamespace",
    "insertBefore",
    "appendChild",
    "replaceChild",
    "removeChild",
    "addEventListener",
    "removeEventListener",
    "dispatchEvent"
  ]);
  const t = [61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17],
    n = [61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17, 60417, 60416, 60419, 60418],
    o = [47, 91, ...t, 93, 47],
    r = [47, 91, ...n, 93, 47];
  [o, [...o, 103], r].map((e) => e.map((e) => String.fromCharCode(e)).join("")),
    ["rgba(118, 167, 250, 0.501960784313726)", "rgba(118, 167, 250, 0.5)", "rgba(143, 143, 143, 0.34)", "rgba(0, 0, 0, 0.15)"].map((e) =>
      e.replace(/\s+/g, "")
    );
  const s = { logError() {}, logException() {} };
  function a(e, t, n) {
    let o = 0;
    return {
      call(r, s, a, i) {
        var c;
        const l = i(a),
          u = null === (c = t.postFn) || void 0 === c ? void 0 : c[s];
        if (u)
          try {
            u(r, e, a, l, o++);
          } catch (e) {
            n.logException(`proxy.call.${String(s)}`, e);
          }
        return l;
      },
      set(r, s, a, i) {
        var c;
        o++;
        const l = null === (c = t.overrideSet) || void 0 === c ? void 0 : c[s];
        if (l)
          try {
            const t = l(r, e, a);
            if (void 0 !== t) return i(t);
          } catch (e) {
            n.logException(`proxy.set.${String(s)}`, e);
          }
        return i(a);
      }
    };
  }
  function i(e, t = []) {
    function n(e, o, r) {
      for (let s = r; s < t.length; s++) {
        const r = t[s].get;
        if (r) return r(e, o, () => n(e, o, s + 1));
      }
      return Reflect.get(e, o);
    }
    function o(e, n, r, s, a) {
      for (let i = a; i < t.length; i++) {
        const a = t[i].call;
        if (a) return a(e, n, s, (t) => o(e, n, r, t, i + 1));
      }
      return r.apply(e, s);
    }
    function r(e, n, o, s) {
      for (let a = s; a < t.length; a++) {
        const s = t[a].set;
        if (s) return s(e, n, o, (t) => r(e, n, t, a + 1));
      }
      return Reflect.set(e, n, o);
    }
    const s = new Map(),
      a = new Proxy(e, {
        get(e, t, r) {
          const a = n(e, t, 0);
          let i = s.get(t);
          return void 0 !== i && i[0] === a
            ? i[1]
            : "function" == typeof a
            ? ((i = [a, (...n) => o(e, t, a, n, 0)]), s.set(t, i), i[1])
            : a;
        },
        set: (e, t, n, o) => r(e, t, n, 0)
      });
    return {
      proxy: a,
      addMiddleware(e) {
        t.push(e);
      }
    };
  }
  function c(e = new Map()) {
    return {
      get size() {
        return e.size;
      },
      getMetrics(t, n) {
        var o;
        return null === (o = e.get(t)) || void 0 === o ? void 0 : o.get(n);
      },
      getFontMetrics(t) {
        const n = (function (t) {
          let n = e.get(t);
          return n || ((n = new Map()), e.set(t, n)), n;
        })(t);
        return {
          fontStyle: t,
          get size() {
            return n.size;
          },
          getMetrics: (e) => n.get(e),
          addMetrics(e, t) {
            n.set(e, t);
          }
        };
      },
      toJSON: () =>
        Object.fromEntries(
          l(e, (e) => {
            var t, n, o, r;
            return {
              height: [
                null !== (n = null === (t = e.get(d)) || void 0 === t ? void 0 : t.chunk.actualBoundingBoxAscent) && void 0 !== n ? n : 0,
                null !== (r = null === (o = e.get(d)) || void 0 === o ? void 0 : o.chunk.actualBoundingBoxDescent) && void 0 !== r ? r : 0
              ],
              widths: Object.fromEntries(l(e, ({ chunk: e }) => e.width))
            };
          })
        )
    };
  }
  function l(e, t = (e) => e) {
    return [...e.entries()].sort(([e], [t]) => (e < t ? -1 : t < e ? 1 : 0)).map(([e, n]) => [e, t(n)]);
  }
  function u(e) {
    return { metricsMap: c(e) };
  }
  const d = "M",
    g = " ";
  const p = {
    overrideSet: {
      font: (e, t, n) => (
        (t.fontStyle = (function (e) {
          const t = /^(?:([\d\w]+) )?(?:(\w+) )?([\d.]+)px (?:['"])?([\w -]+)(?:['"])?$/.exec(e);
          if (t) {
            const [e, n, o, r, s] = t;
            let a = "400",
              i = "normal";
            return (
              n &&
                (isNaN(parseInt(n, 10))
                  ? "italic" === n
                    ? ((i = "italic"), (a = isNaN(parseInt(o, 10)) ? ("bold" === o ? "700" : "400") : o))
                    : (a = "bold" === n ? "700" : "400")
                  : ((a = n), (i = o || i))),
              `${a} ${i} ${parseFloat(r).toFixed(4)}px "${s}"`
            );
          }
          return e;
        })(n)),
        n
      )
    },
    postFn: {
      measureText(e, t, [n], o) {
        if (!t.fontStyle) return;
        const r = t.metricsMap.getFontMetrics(t.fontStyle);
        if (!r.size) {
          const t = e.measureText(d),
            n = e.measureText("À"),
            o = e.measureText("g");
          r.addMetrics(d, { chunk: h(t, n, o), charShifts: [] });
          const s = e.measureText(g);
          r.addMetrics(g, { chunk: h(s), charShifts: [] });
        }
        const s = 8237 === n.charCodeAt(0),
          a = 8236 === n.charCodeAt(n.length - 1),
          i = n.substring(s ? 1 : 0, n.length - (a ? 1 : 0));
        if (i === d) return;
        const c = [];
        for (let t = 1; t < i.length; t++) {
          const n = i.slice(0, t),
            s = r.getMetrics(n);
          if (s) c.push(s.chunk);
          else {
            if (i.length - t > 30) {
              let e = c.length > 0 ? c[c.length - 1].width : 0,
                n = o.width - e;
              for (; t < i.length; ) {
                const r = n / (i.length - t + 1);
                (e += r), (n -= r), c.push({ ...o, width: e }), t++;
              }
              break;
            }
            const s = h(e.measureText(n));
            r.addMetrics(n, { chunk: s, charShifts: [...c] }), c.push(s);
          }
        }
        r.addMetrics(i, { chunk: o, charShifts: c });
      }
    }
  };
  function h(e, t = e, n = t) {
    return {
      width: e.width,
      actualBoundingBoxLeft: e.actualBoundingBoxLeft,
      actualBoundingBoxRight: e.actualBoundingBoxRight,
      actualBoundingBoxAscent: t.actualBoundingBoxAscent,
      actualBoundingBoxDescent: n.actualBoundingBoxDescent
    };
  }
  try {
    const N = [],
      E = [];
    function f(e) {
      for (const t of N) {
        const n = e(t.canvas, t.originalContext);
        n && t.proxy.addMiddleware(n);
      }
      E.push(e);
    }
    const T = u();
    function m() {
      return N.map((e) => e.canvas);
    }
    !(function () {
      const t =
        document.documentElement.dataset.grGdcConnId || (document.documentElement.dataset.grGdcConnId = `${Date.now()}-${Math.random()}`);
      (self[((e) => `GR_GDEI_${e}`)(t)] = { addMiddleware: f, textMeasuringState: T, getPatchedCanvases: m }),
        (function (e) {
          const t = self.HTMLCanvasElement.prototype.getContext;
          self.HTMLCanvasElement.prototype.getContext = function (...n) {
            var o;
            const r = t.call(this, ...n);
            try {
              const [t] = n;
              if ("2d" === t && null !== (s = r) && void 0 !== s.getTransform && s.getTransform().is2D)
                return null !== (o = e(this, r)) && void 0 !== o ? o : r;
            } catch (e) {}
            var s;
            return r;
          };
        })((t, n) => {
          const o = E.map((e) => e(t, n)).filter((e) => Boolean(e));
          if (e(t)) {
            const { middleware: e } = (function ({ state: e = u(), options: t }) {
              return { state: e, middleware: a(e, p, t) };
            })({ state: T, options: s });
            o.push(e);
          }
          const r = i(n, o);
          return N.push({ canvas: t, originalContext: n, proxy: r }), r.proxy;
        });
    })();
  } catch (C) {
    (document.documentElement.dataset.grGdcErrorMsg = C.message), (document.documentElement.dataset.grGdcErrorStack = C.stack);
  }
})();
