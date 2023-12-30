!(function () {
  function t(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  function e() {
    let t, e;
    return {
      promise: new Promise((n, o) => {
        (t = n), (e = o);
      }),
      resolve: t,
      reject: e
    };
  }
  class n extends Error {}
  function o(t) {
    return new Promise((e, o) => setTimeout(() => o(new n("Promise timed out.")), t));
  }
  class r extends Error {
    constructor(t) {
      super(`Matching not exhaustive: unexpected value ${JSON.stringify(t)}`);
    }
  }
  async function s(e, n, o) {
    const r = o();
    if (!(e > 0)) return r;
    try {
      return await r;
    } catch (r) {
      return await t(n), s(e - 1, n, o);
    }
  }
  var i;
  !(function (t) {
    function e() {
      return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
    }
    t.create = function () {
      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    };
  })(i || (i = {}));
  void 0 !== self.requestIdleCallback && self.requestIdleCallback;
  var a;
  !(function (n) {
    class o extends Error {
      constructor(t, e = 1e3) {
        super(`SafePromiseError: ${t}`), (this.stack = (super.stack || "").slice(e));
      }
    }
    function r(t) {
      return t.catch((t) => (t instanceof Error && !t.stack ? Promise.reject(new o(t.message)) : Promise.reject(t)));
    }
    (n.fromPromise = r),
      (n.fromAsync = function (t) {
        return (...e) => r(t(...e));
      }),
      (n.noop = n.fromPromise(Promise.resolve())),
      (n.create = function (t) {
        return r(new Promise(t));
      }),
      (n.sync = function (t) {
        return r(new Promise((e, n) => e(t())));
      }),
      (n.createCompletionSource = e),
      (n.delay = t);
  })(a || (a = {}));
  class l {
    constructor(t, e) {
      (this._transport = t),
        (this._log = e),
        (this._calls = new Map()),
        (this._sub = this._transport.inbound.subscribe((t) => {
          var e;
          const n = this._calls.get(t.id);
          if (n)
            try {
              "err" in t ? n.reject(t.err) : n.resolve(t.res);
            } finally {
              this._calls.delete(t.id);
            }
          else null === (e = this._log) || void 0 === e || e.warn(`received rpc call response for unregistered call ${t.id}`);
        })),
        (this.api = new Proxy({}, { get: (t, e) => ("then" === e ? void 0 : (...t) => this._handleCall(e, t)) }));
    }
    _handleCall(t, e) {
      let n = i.create();
      for (; this._calls.has(n); ) n = i.create();
      const o = a.createCompletionSource();
      return this._calls.set(n, o), this._transport.outbound({ id: n, method: t, args: e }), o.promise;
    }
    dispose() {
      this._sub.unsubscribe();
    }
  }
  class c {
    constructor(t, e, n, o) {
      (this._customInboundEventName = e),
        (this._customOutboundEventName = n),
        (this._wrapOutboundMessage = o),
        (this.inbound = {
          subscribe: (t) => {
            const e = ({ detail: e }) => {
              const n = e;
              t && ("function" == typeof t ? t(n) : t.next && t.next(n));
            };
            return (
              this._target.addEventListener(this._customInboundEventName, e, !1),
              { unsubscribe: () => this._target.removeEventListener(this._customInboundEventName, e, !1) }
            );
          }
        }),
        (this.outbound = (t) => {
          const e = this._wrapOutboundMessage ? this._wrapOutboundMessage(t) : t,
            n = new CustomEvent(this._customOutboundEventName, { bubbles: !0, cancelable: !0, detail: e });
          this._target.dispatchEvent(n);
        }),
        (this._target = t.defaultView || t);
    }
  }
  const u = (t, e) => (t < e ? -1 : t > e ? 1 : 0);
  function g(t, e) {
    const n = t.left <= e.left ? t : e,
      o = n === t ? e : t,
      r = t.top <= e.top ? t : e,
      s = r === t ? e : t;
    return n.left + n.width > o.left && r.top + r.height > s.top;
  }
  const f = (t, e) => (t.top === e.top ? u(t.left, e.left) : u(t.top, e.top)),
    p =
      (new Set([
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
      ]),
      [
        "autocorrect",
        "comment",
        "composing_decoration",
        "composing_region",
        "draft_comment",
        "ignore_spellcheck",
        "ignore_word",
        "import_warnings",
        "link",
        "named_range",
        "revision_diff",
        "smart_todo",
        "spellcheck",
        "suppress_feature",
        "text",
        "voice_corrections",
        "voice_dotted_span",
        "autogen",
        "cell",
        "citation_sources",
        "column_sector",
        "date_time",
        "document",
        "equation",
        "equation_function",
        "footnote",
        "headings",
        "horizontal_rule",
        "language",
        "list",
        "paragraph",
        "row",
        "tbl"
      ]),
    d = [61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17],
    h = [61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17, 60417, 60416, 60419, 60418],
    m = [d, h],
    v = [47, 91, ...d, 93, 47],
    y = [47, 91, ...h, 93, 47],
    b = [v, [...v, 103], y].map((t) => t.map((t) => String.fromCharCode(t)).join("")),
    S = ["rgba(118, 167, 250, 0.501960784313726)", "rgba(118, 167, 250, 0.5)", "rgba(143, 143, 143, 0.34)", "rgba(0, 0, 0, 0.15)"].map(
      (t) => t.replace(/\s+/g, "")
    );
  function x(t, e) {
    let n = 0,
      o = t.length - 1;
    for (; n <= o; ) {
      const r = (n + o) >> 1,
        s = e(t[r]);
      if (s > 0) n = r + 1;
      else {
        if (!(s < 0)) return { kind: "found", index: r };
        o = r - 1;
      }
    }
    return { kind: "notFound", lastSearchRange: [Math.min(n, o), Math.max(n, o)] };
  }
  function w(t, e, n = 0.001) {
    return t === e || Math.abs(t - e) <= n;
  }
  var T, E, C;
  function M() {
    let t,
      e,
      n,
      o,
      r = T.INIT;
    const s = () => {
      (t = void 0), (e = void 0), (r = T.INIT), (n = void 0), (o = void 0);
    };
    let i = 0;
    return {
      hasEquations: () => i > 0,
      getEquationState: () => ({ level: t, stage: r, seqIndex: n, fragmentStartIndex: o, equations: i }),
      onTranslate: (a, l, c, u, g) => {
        if (
          l &&
          void 0 !== o &&
          ((o, s, i, a) => o === t && !(!e || e.x !== -i || e.y !== -a) && n === s - 1 && T.RESTORE === r)(a, c, u, g)
        ) {
          const t = l.fragments,
            e = o,
            n = t.length - e;
          if (n > 0) return t.splice(e, n), s(), i++, !0;
        }
        return (t = a), (e = { x: u, y: g }), (o = null == l ? void 0 : l.fragments.length), (r = T.TRANSLATE), (n = c), !1;
      },
      onBeforeSave: (e, o) => {
        if (e === t) {
          if (T.TRANSLATE !== r) return void s();
          if (void 0 === n || o !== n + 1) return void s();
          (n = o), (r = T.SAVE);
        }
      },
      onAfterRestore: (e, o) => {
        if (e === t) {
          if (T.SAVE !== r) return void s();
          (n = o), (r = T.RESTORE);
        }
      },
      onClip: () => {
        s();
      },
      reset: () => {
        (i = 0), s();
      }
    };
  }
  function A(t) {
    return t.type === E.text;
  }
  !(function (t) {
    (t[(t.INIT = -1)] = "INIT"), (t[(t.TRANSLATE = 0)] = "TRANSLATE"), (t[(t.SAVE = 1)] = "SAVE"), (t[(t.RESTORE = 2)] = "RESTORE");
  })(T || (T = {})),
    (function (t) {
      (t.text = "text"), (t.space = "space"), (t.lineBreak = "lineBreak"), (t.footnoteLink = "footnoteLink"), (t.mention = "mention");
    })(E || (E = {})),
    (function (t) {
      (t.ordinary = "ordinary"), (t.special = "special");
    })(C || (C = {}));
  function k(t, e, n) {
    let o = 0;
    return {
      call(r, s, i, a) {
        var l;
        const c = a(i),
          u = null === (l = e.postFn) || void 0 === l ? void 0 : l[s];
        if (u)
          try {
            u(r, t, i, c, o++);
          } catch (t) {
            n.logException(`proxy.call.${String(s)}`, t);
          }
        return c;
      },
      set(r, s, i, a) {
        var l;
        o++;
        const c = null === (l = e.overrideSet) || void 0 === l ? void 0 : l[s];
        if (c)
          try {
            const e = c(r, t, i);
            if (void 0 !== e) return a(e);
          } catch (t) {
            n.logException(`proxy.set.${String(s)}`, t);
          }
        return a(i);
      }
    };
  }
  const _ = "M",
    R = " ";
  function N(t) {
    const e = /^(?:([\d\w]+) )?(?:(\w+) )?([\d.]+)px (?:['"])?([\w -]+)(?:['"])?$/.exec(t);
    if (e) {
      const [t, n, o, r, s] = e;
      let i = "400",
        a = "normal";
      return (
        n &&
          (isNaN(parseInt(n, 10))
            ? "italic" === n
              ? ((a = "italic"), (i = isNaN(parseInt(o, 10)) ? ("bold" === o ? "700" : "400") : o))
              : (i = "bold" === n ? "700" : "400")
            : ((i = n), (a = o || a))),
        `${i} ${a} ${parseFloat(r).toFixed(4)}px "${s}"`
      );
    }
    return t;
  }
  function P(t, e, n) {
    const o = new DOMPoint(t, e).matrixTransform(n);
    return { left: o.x, top: o.y };
  }
  function I(t, e, n) {
    return { width: n.a * t + n.c * e, height: n.b * t + n.d * e };
  }
  function O(t, e) {
    return e.a * t;
  }
  function D(t, e) {
    return e.d * t;
  }
  const L = (t) => {
      if ("moveTo" in t) return t.moveTo;
    },
    j = (t) => {
      if ("lineTo" in t) return t.lineTo;
    },
    F = (t) => {
      if ("bezierCurveTo" in t) return t.bezierCurveTo;
    };
  function G(t, e, n, o, r = !1) {
    const s = (t, e, n, o = !1) => {
      t.beginPath(),
        (t.strokeStyle = `rgba(0,0,255,${o ? 0.05 : 0.2})`),
        (t.lineWidth = 2),
        t.moveTo(e, n),
        t.lineTo(e, n - 20),
        t.stroke();
    };
    t.save(), t.resetTransform(), s(t, e, n, r), o.forEach((o) => s(t, e + o, n, r)), t.restore();
  }
  const z = (t, e, n, o, r, s = 0, i = !1) => {
      t.save(),
        t.resetTransform(),
        (t.fillStyle = `rgba(221,0,0,${i ? 0.05 : 0.1})`),
        t.fillRect(e, n, o, 10),
        (t.fillStyle = `rgba(221,0,0,${i ? 0.4 : 0.8})`),
        (t.font = "10px Arial"),
        t.fillText(`${s}`, e, n + 10),
        (t.fillStyle = `rgba(0,128,221,${i ? 0.4 : 0.8})`),
        G(t, e, n, r, i),
        t.restore();
    },
    B = (t, e, n, o, r, s = !1) => {
      t.save(),
        t.resetTransform(),
        (t.fillStyle = `rgba(0,221,0,${s ? 0.05 : 0.1})`),
        t.fillRect(e, n + 10, o, 10),
        t.restore(),
        G(t, e, n, r, s);
    },
    $ = (t, e, n, o = !1) => {
      t.save(),
        t.resetTransform(),
        t.beginPath(),
        (t.strokeStyle = `rgba(0,221,0,${o ? 0.05 : 0.1})`),
        (t.lineWidth = 5),
        t.moveTo(e + 2.5, n),
        t.lineTo(e + 2.5, n + 10),
        t.lineTo(e - 10, n + 10),
        t.stroke(),
        t.restore();
    },
    q = ["#ffffff", "rgba(255,255,255,1)"],
    W = ["#f1f3f4", "rgba(241,243,244,1)"];
  function K(t) {
    if (t.compact) return 0;
    const { clips: e } = t.savableState;
    if (1 === e.length) {
      if (!t.currentPageMap) return 0;
      return V(e[0], { ...t.currentPageMap.pageAttrs.canvasBitmapSize, left: 0, top: 0 });
    }
    if (2 === e.length) {
      const [t, n] = e;
      return V(n, t);
    }
    return 0;
  }
  function V(t, e) {
    return t.left !== e.left || t.width !== e.width
      ? 0
      : 0 === t.top && t.height < 0.6666666666666666 * e.height
      ? 1
      : t.top > e.top && t.top > 0.6666666666666666 * e.height
      ? 2
      : 0;
  }
  function U(t) {
    const e = t.getCurrentPageAttrs();
    if (
      ((t.matchingBroken = !1),
      (t.hasSuggestions = !1),
      (t.footnote = { footnoteLineDetected: !1 }),
      (t.compact = e.isCompactLayout),
      t.clearedRect &&
        (function (t, e) {
          const { left: n, top: o, width: r, height: s } = e,
            i = t;
          return !(n <= 0 && o <= 0 && n + r >= i.width && o + s >= i.height);
        })(e.canvasBitmapSize, t.clearedRect))
    ) {
      t.currentPageMap = null;
      const n = { rect: null, fragments: [], wordCount: 0 };
      (t.currentPartialMap = { pageAttrs: e, rect: t.clearedRect, sections: { main: n } }),
        (t.savableState.renderContainer = t.currentPageFragment =
          { type: "page", pageAttrs: e, partialRect: t.clearedRect, fragments: [] });
    } else
      (t.currentPartialMap = null),
        (t.currentPageMap =
          ((n = e),
          {
            pageAttrs: { ...n },
            sections: {
              main: { rect: null, fragments: [], wordCount: 0 },
              header: { rect: null, fragments: [], wordCount: 0 },
              footer: { rect: null, fragments: [], wordCount: 0 },
              footnotes: { rect: null, fragments: [], wordCount: 0 }
            }
          })),
        (t.savableState.renderContainer = t.currentPageFragment = { type: "page", pageAttrs: e, fragments: [] });
    var n;
  }
  function H(t, e, n, o) {
    const r = n.metricsMap.getMetrics(e, _),
      s = n.metricsMap.getMetrics(e, R);
    if (!r || !s) return null;
    return {
      spaceMetrics: s,
      top: t.top - D(r.chunk.actualBoundingBoxAscent, o),
      height: D(r.chunk.actualBoundingBoxAscent + r.chunk.actualBoundingBoxDescent, o)
    };
  }
  function Y(t, e, n, { top: o, height: r }, s, i) {
    const a = i.metricsMap.getMetrics(e, t);
    if (!a) return null;
    const l = O(a.chunk.width, s);
    return { baseline: n.top, top: o, left: n.left, text: t, width: l, height: r, charShifts: a.charShifts.map((t) => O(t.width, s)) };
  }
  function J(t, e, n, o, r, s, i, a) {
    const l = /^\d+$/.test(st(t)),
      c = !a && !l,
      u = H(n, e, r, s);
    if (c) return !0;
    if (l) {
      const a = st(t);
      if (i && u && A(i)) {
        let t = i,
          l = o.fragments.length - 1;
        for (let e = o.fragments.length - 1; e > 0; e--) {
          const r = o.fragments[e];
          if (r.type === E.lineBreak) break;
          if (!(r.left > n.left)) {
            (t = r), (l = e);
            break;
          }
        }
        const c = Math.abs(t.height * X - u.height) < Z * u.height,
          g = Math.abs(t.top - u.top) < u.height * Z;
        if (c && g) {
          const i = Y(a, e, n, u, s, r);
          if (i) {
            const e = { ...i, height: t.height, baseline: t.baseline, type: E.footnoteLink, class: C.ordinary, linkText: a, text: "#" };
            if (
              (function (t) {
                return t.type === E.space;
              })(t) &&
              w(t.left, n.left, tt)
            )
              return (
                !(function (t, e, n = 0.001) {
                  return (function (t, e, n = 0.001) {
                    return t >= e || t + n >= e;
                  })(e, t, n);
                })(t.width, i.width, tt)
                  ? o.fragments.splice(l, 1, e, { ...t, left: t.left + i.width, width: t.width - i.width })
                  : o.fragments.splice(l, 1, e),
                !0
              );
            if (Math.abs(i.left - t.left - t.width) < 0.5 * u.spaceMetrics.chunk.width) return o.fragments.splice(l + 1, 0, e), !0;
          }
        }
      }
    } else if (a && i && u && A(i)) {
      const a = Math.abs(i.height * X - u.height) < Z * u.height,
        l = Math.abs(i.top - u.top) < u.height * Z;
      if (a && l) {
        const a = Y(st(t), e, n, u, s, r);
        if (a) {
          if (Math.abs(a.left - i.left - i.width) < 0.5 * u.spaceMetrics.chunk.width)
            return o.fragments.push({ ...a, height: i.height, baseline: i.baseline, type: E.text, class: C.ordinary }), !0;
        }
      }
    }
    return !1;
  }
  const Q = 1,
    X = 0.6,
    Z = 0.1,
    tt = 0.001,
    et = 192,
    nt = ["rgba(0,0,0,1)"],
    ot = [String.fromCharCode(8204), "‭", "‬"],
    rt = new RegExp(`[${ot.join("")}]`, "g");
  function st(t) {
    return t.replace(rt, "");
  }
  function it(t) {
    return "rgba(19,115,51,0.7)" === t;
  }
  function at(t, e, n, o, r, s) {
    var i, a;
    const l = s.getTransform(),
      c = P(e, n, l),
      u = N(null !== (i = r.savableState.font) && void 0 !== i ? i : s.font),
      g = st(t),
      f = (p = t).startsWith("‭") && p.endsWith("‬");
    var p, d, h, m;
    if (
      ((d = r.savableState.font),
      (h = r.savableState.strokeStyle),
      (m = s.fillStyle),
      '400 14px "Google Sans"' === d && "rgba(240,244,249,1)" === h && "string" == typeof m && ["#1f1f1f", "rgba(31,31,31,1)"].includes(m))
    )
      return;
    r.savableState.renderContainer &&
      g &&
      r.savableState.renderContainer.fragments.push({
        type: "text",
        style: u,
        text: g,
        special: !f,
        baseline: c.top,
        left: c.left,
        scaleX: l.a,
        scaleY: l.d
      });
    const v = o.fragments.length > 0 ? o.fragments[o.fragments.length - 1] : null;
    if (J(t, u, c, o, r, l, v, f)) return;
    const y = v && ((b = v).type === E.text || b.type === E.footnoteLink) ? v : null;
    var b, S;
    if (y) {
      const t = { top: y.baseline, left: y.left },
        e = c.left - t.left - y.width,
        n = r.lastTextClipsId !== r.savableState.clipsId || c.top - t.top > 0.2 * y.height;
      !n &&
        e > Q &&
        (o.fragments.push({
          type: E.space,
          class: C.ordinary,
          baseline: c.top,
          left: t.left + y.width,
          top: y.top,
          width: e,
          height: y.height
        }),
        r.debugVizualize && B(s, t.left + y.width, c.top, e, [])),
        n &&
          (o.fragments.push(
            ((S = { baseline: y.baseline, left: y.left + y.width, top: y.top, height: y.height, width: r.lastTextWhitespaceWidth }),
            { ...S, type: E.lineBreak, class: C.ordinary })
          ),
          r.debugVizualize && $(s, y.left + y.width, y.top));
    }
    r.lastTextClipsId = r.savableState.clipsId;
    const x = H(c, u, r, l);
    if (!x) return;
    r.lastTextWhitespaceWidth = x.spaceMetrics.chunk.width;
    const w = null !== (a = g.match(/[^\s]+|\s+/g)) && void 0 !== a ? a : [];
    for (const t of w) {
      const e = Y(t, u, c, x, l, r);
      if (null == e) continue;
      const n = { type: E.text, class: C.ordinary, ...e };
      o.fragments.push(n),
        r.debugVizualize &&
          (t.match(/^\s+$/)
            ? B(s, c.left, c.top, n.width, n.charShifts)
            : z(s, c.left, c.top, e.width, e.charShifts, " " === t ? void 0 : o.wordCount++)),
        (c.left += n.width);
    }
  }
  const lt = {
      postFn: {
        fillText(t, e, [n, o, r, s]) {
          const i = (function (t, e) {
            if (t.currentPartialMap) return t.currentPartialMap.sections.main;
            if (!t.currentPageMap) return null;
            const n = t.currentPageMap.sections,
              o =
                t.footnote.footnoteLineDetected && e > t.footnote.footnoteLinePosition.top
                  ? t.currentPageMap.sections.footnotes
                  : t.currentPageMap.sections.main;
            if (t.compact) return o;
            switch (K(t)) {
              case 1:
                return n.header;
              case 2:
                return n.footer;
              default:
                return o;
            }
          })(e, r);
          if (!i)
            return void (function (t, e) {
              !t.currentPageMap && !t.currentPartialMap && t.api.log(e, "Current page map expected");
            })(e, "proxy.fillText");
          const a = i.fragments.length > 0;
          at(n, o, r, i, e, t), !a && i.fragments.length > 0 && (i.rect = pt(e));
        },
        drawImage(t, e, n) {
          const o = e.savableState.renderContainer;
          if (o) {
            const [e, r, s, i, a, l, c, u, g] = n,
              f = t.getTransform(),
              p = P(null != l ? l : r, null != c ? c : s, f),
              d = null != u ? u : i,
              h = null != g ? g : a,
              m = void 0 === d || void 0 === h ? void 0 : { width: d, height: h },
              v = void 0 === m ? { ...p, width: void 0, height: void 0 } : { ...p, ...I(m.width, m.height, f) };
            o.fragments.push({ type: "image", rect: v });
          }
        },
        fillRect(t, e, [n, o, r, s]) {
          if ("string" == typeof t.fillStyle && S.includes(t.fillStyle.replace(/\s+/g, ""))) {
            const i = t.getTransform(),
              a = { ...P(n, o, i), ...I(r, s, i) },
              l = pt(e);
            if (!l || g(a, l)) {
              const t = (function (t, e, n) {
                const o = x(t, (t) => {
                  const o = n(e, t);
                  return 0 === o ? -1 : o;
                });
                return "found" === o.kind ? o.index : o.lastSearchRange[0] < 0 ? null : o.lastSearchRange[0];
              })(e.currentSelection, a, f);
              null === t ? e.currentSelection.unshift(a) : e.currentSelection.splice(t + 1, 0, a);
            }
          }
          1 === e.saveCount &&
            null === e.currentPageFragment &&
            "string" == typeof t.fillStyle &&
            q.includes(t.fillStyle) &&
            !e.savableState.clips.length &&
            dt(e, t, [n, o, r, s]);
        },
        clearRect(t, e, n) {
          e.savableState.clips.length || dt(e, t, n);
        },
        scale(t, e) {
          1 === e.saveCount && null === e.currentPageFragment && null !== e.clearedRect && U(e);
        },
        translate(t, e, [n, o], r, s) {
          e.equations.onTranslate(e.saveCount, e.savableState.renderContainer, s, n, o);
        },
        save(t, e, n, o, r) {
          e.equations.onBeforeSave(e.saveCount, r), e.saveCount++, e.savedState.push({ ...e.savableState });
        },
        restore(t, e, n, o, r) {
          const s = e.savedState.pop();
          if ((s && (e.savableState = s), e.saveCount--, 0 === e.saveCount)) {
            if ((e.hasSuggestions && e.onChangeMode("suggest"), e.currentPageMap && e.currentPageFragment)) {
              const t = e.currentPageMap.pageAttrs,
                n = e.currentPageMap.sections,
                o = n.footer.rect ? Math.min(t.canvasBitmapSize.height, n.footer.rect.top) : t.canvasBitmapSize.height,
                r = e.footnote.footnoteLineDetected ? e.footnote.footnoteLinePosition.top : o;
              n.footnotes.rect = { top: r, left: 0, width: t.canvasBitmapSize.width, height: o - r };
              const s = n.header.rect ? Math.max(0, n.header.rect.top + n.header.rect.height) : 0;
              (n.main.rect = { top: s, left: 0, width: t.canvasBitmapSize.width, height: r - s }),
                e.onRender({
                  pageMap:
                    ((a = e.currentPageMap),
                    {
                      pageAttrs: a.pageAttrs,
                      sections: {
                        main: ft(a.sections.main),
                        footnotes: ft(a.sections.footnotes),
                        header: ft(a.sections.header),
                        footer: ft(a.sections.footer)
                      }
                    }),
                  pageAttrs: t,
                  selection: e.currentSelection,
                  hasSuggestions: e.hasSuggestions,
                  hasEquations: e.equations.hasEquations(),
                  pageFragment: e.currentPageFragment
                }),
                (e.currentPageFragment = null),
                (e.currentPageMap = null),
                (e.currentSelection = []),
                (e.clearedRect = null),
                (e.strikethroughLines = []);
            } else
              e.currentPartialMap &&
                e.currentPageFragment &&
                (e.onRender({
                  partialPageMap:
                    ((i = e.currentPartialMap), { pageAttrs: i.pageAttrs, rect: i.rect, sections: { main: ft(i.sections.main) } }),
                  pageAttrs: e.currentPartialMap.pageAttrs,
                  selection: e.currentSelection,
                  hasSuggestions: e.hasSuggestions,
                  hasEquations: e.equations.hasEquations(),
                  pageFragment: e.currentPageFragment
                }),
                (e.currentPageFragment = null),
                (e.currentPartialMap = null),
                (e.clearedRect = null),
                (e.strikethroughLines = []));
            e.equations.reset();
          }
          var i, a;
          e.equations.onAfterRestore(e.saveCount, r);
        },
        moveTo(t, e, [n, o]) {
          e.footnote.footnoteLineDetected || (e.footnote.lastPosition = { left: n, top: o }), e.path.push({ moveTo: gt(t, [n, o]) });
        },
        lineTo(t, e, [n, o]) {
          !(function (t, e, n, o) {
            var r;
            if (!t.footnote.footnoteLineDetected) {
              const s = t.footnote.lastPosition;
              if (s) {
                const i = e - s.left;
                if (
                  n > 0 &&
                  Math.abs(s.top - n) < Q &&
                  i === et &&
                  (null === (r = null == t ? void 0 : t.savableState) || void 0 === r ? void 0 : r.strokeStyle) &&
                  nt.includes(t.savableState.strokeStyle) &&
                  ((t.footnote = { footnoteLineDetected: !0, footnoteLinePosition: s }), t.savableState.renderContainer)
                ) {
                  const r = P(e, n, o.getTransform());
                  t.savableState.renderContainer.fragments.push({ type: "footnote_line", y: r.top });
                }
              }
            }
            t.footnote.footnoteLineDetected || (t.footnote.lastPosition = { left: e, top: n });
          })(e, n, o, t),
            e.path.push({ lineTo: gt(t, [n, o]) });
        },
        beginPath(t, e) {
          e.path = [];
        },
        clip(t, e, n) {
          var o, r;
          if ((e.equations.onClip(), n[0])) e.api.logError("proxy.clip:unexpectedArguments", "clip with parameters is not supported");
          else if (1 !== e.path.length)
            e.api.logError("proxy.clip:unsupportedPath", "clip with multiple paths is not supported", { pathSize: e.path.length });
          else if ("rect" in e.path[0]) {
            if (((e.savableState.clips = [...e.savableState.clips, e.path[0].rect]), e.savableState.renderContainer)) {
              const t = { type: "clip", rect: e.path[0].rect, fragments: [] };
              e.savableState.renderContainer.fragments.push(t), (e.savableState.renderContainer = t);
            }
            if (e.currentPageMap) {
              const t = (null !== (o = e.currentPageMap.sections.header.fragments.length) && void 0 !== o ? o : 0) > 0,
                n = (null !== (r = e.currentPageMap.sections.footer.fragments.length) && void 0 !== r ? r : 0) > 0;
              if (!t || !n)
                switch (K(e)) {
                  case 1:
                    t || (e.currentPageMap.sections.header.rect = pt(e));
                    break;
                  case 2:
                    n || (e.currentPageMap.sections.footer.rect = pt(e));
                }
            }
          } else e.api.logError("proxy.clip:unsupportedPath", "clip only supports rect paths");
          e.savableState.clipsId = ++e.lastClipsId;
        },
        rect(t, e, n) {
          e.path.push({ rect: ut(t, n) });
        },
        stroke(t, e, n) {
          if (n[0]) return;
          const o = e.savableState.strokeStyle;
          o &&
            (function (t) {
              return t.startsWith("rgba(") && t.endsWith(",0.7)");
            })(o) &&
            2 === e.path.length &&
            "moveTo" in e.path[0] &&
            "lineTo" in e.path[1] &&
            e.path[0].moveTo.top === e.path[1].lineTo.top &&
            (e.strikethroughLines.push({
              y: e.path[0].moveTo.top,
              left: e.path[0].moveTo.left,
              width: e.path[1].lineTo.left - e.path[0].moveTo.left
            }),
            e.savableState.renderContainer &&
              e.savableState.renderContainer.fragments.push({
                type: "strikethrough",
                y: e.path[0].moveTo.top,
                left: e.path[0].moveTo.left,
                width: e.path[1].lineTo.left - e.path[0].moveTo.left,
                unidentifiedUserColor: !it(o)
              }));
        },
        bezierCurveTo(t, e, [n, o, r, s, i, a]) {
          e.path.push({ bezierCurveTo: gt(t, [i, a]) });
        },
        fill(t, e) {
          if ("string" == typeof (n = t.fillStyle) && W.includes(n) && e.savableState.renderContainer) {
            const t = (function (t) {
              if (9 !== t.length) return;
              let e = 1 / 0,
                n = 1 / 0,
                o = -1 / 0,
                r = -1 / 0;
              for (let s = 0; s < t.length; s++) {
                let i;
                if (((i = 0 === s ? L(t[0]) : s % 2 == 1 ? j(t[s]) : F(t[s])), !i)) return;
                (e = Math.min(i.left, e)), (n = Math.min(i.top, n)), (r = Math.max(i.left, r)), (o = Math.max(i.top, o));
              }
              return { left: e, top: n, width: r - e, height: o - n };
            })(e.path);
            if (t) {
              const n = { type: "code_block", rect: t };
              e.savableState.renderContainer.fragments.push(n);
            }
          }
          var n;
        }
      },
      overrideSet: {
        strokeStyle(t, e, n) {
          let o;
          return (
            "string" == typeof n
              ? ("rgba(221,0,0,1)" === n || "rgba(66,133,244,1)" === n ? (o = "rgba(0,0,0,0)") : it(n) && (e.hasSuggestions = !0),
                (e.savableState.strokeStyle = null != o ? o : n))
              : (e.savableState.strokeStyle = void 0),
            o
          );
        },
        fillStyle: (t, e, n) =>
          "rgba(252,232,230,1)" === n || "rgba(232,240,254,1)" === n
            ? "rgba(0,0,0,0)"
            : void ("rgba(31,161,93,1)" === n && (e.hasSuggestions = !0)),
        font(t, e, n) {
          e.savableState.font = n;
        }
      }
    },
    ct = { overrideSet: { strokeStyle: (t, e, n) => ("rgba(221,0,0,1)" === n || "rgba(66,133,244,1)" === n ? "rgba(0,0,0,0)" : void 0) } };
  function ut(t, [e, n, o, r]) {
    const s = t.getTransform();
    return { ...P(e, n, s), ...I(o, r, s) };
  }
  function gt(t, [e, n]) {
    return P(e, n, t.getTransform());
  }
  function ft(t) {
    const { wordCount: e, ...n } = t;
    return n;
  }
  function pt(t) {
    return t.savableState.clips.reduce(
      (t, e) =>
        t
          ? (function (t, e) {
              const n = Math.max(t.left, e.left),
                o = Math.max(t.top, e.top),
                r = Math.min(t.left + t.width, e.left + e.width),
                s = Math.min(t.top + t.height, e.top + e.height);
              return { left: n, top: o, width: n > r ? 0 : r - n, height: o > s ? 0 : s - o };
            })(t, e)
          : e,
      null
    );
  }
  function dt(t, e, [n, o, r, s]) {
    const i = ut(e, [n, o, r, s]);
    (t.clearedRect = i), (t.currentSelection = t.currentSelection.filter((t) => !g(t, i)));
  }
  function ht(t, e, n) {
    let o;
    function r(r, s) {
      const i =
        (void 0 === o &&
          ((o = null !== (a = e()) && void 0 !== a ? a : null),
          o || n.logError("createMeasuringFallbackMetricsMap", "Can't create self-measuring canvas")),
        o);
      var a;
      if (!i) return;
      n.log("createMeasuringFallbackMetricsMap", "No metrics for text"), (i.font = r), i.measureText(s);
      const l = t.getMetrics(r, s);
      return l || n.logError("createMeasuringFallbackMetricsMap", "Self-measuring failed for text"), l;
    }
    return {
      get size() {
        return t.size;
      },
      getMetrics(e, n) {
        var o;
        return null !== (o = t.getMetrics(e, n)) && void 0 !== o ? o : r(e, n);
      },
      getFontMetrics(e) {
        const n = t.getFontMetrics(e);
        return {
          fontStyle: e,
          get size() {
            return n.size;
          },
          getMetrics(t) {
            var o;
            return null !== (o = n.getMetrics(t)) && void 0 !== o ? o : r(e, t);
          }
        };
      },
      toJSON: () => t.toJSON()
    };
  }
  class mt {
    constructor(t, e) {
      (this._transport = t),
        (this._api = e),
        (this._disposed = !1),
        (this._sub = this._transport.inbound.subscribe(async (t) => {
          try {
            const e = this._api[t.data.method];
            if ("function" != typeof e) throw { message: `invalid method name ${String(t.data.method)}` };
            {
              const n = { clientId: t.clientId },
                o = await e.call(this._api, n, ...t.data.args);
              this._transport.outbound({ clientId: t.clientId, data: { id: t.data.id, res: o } });
            }
          } catch (e) {
            this._transport.outbound({ clientId: t.clientId, data: { id: t.data.id, err: e } });
          }
        }));
    }
    dispose() {
      this._disposed || ((this._disposed = !0), this._sub.unsubscribe());
    }
  }
  class vt extends Error {
    constructor(t) {
      super(`Assertion failed: ${t ? ("string" == typeof t ? t : t()) : "(unnamed)"}`);
    }
  }
  function yt(t, e) {
    if (!t) throw new vt(e);
  }
  function bt(t, e) {
    if (null == t) throw new vt(() => (e ? `Expected ${e} to be non-null` : "Expected non-null"));
    return t;
  }
  function St(t) {
    return !("object" != typeof t || !t) && "number" == typeof t.start && "number" == typeof t.end;
  }
  function xt(t) {
    return Array.isArray(t) && t.length > 0 && void 0 !== t[0] && t.every(St);
  }
  function wt(t, e) {
    return {
      get: () => e.reduce((t, e) => (null == t ? void 0 : t[e]), t.get()),
      parent() {
        if (0 !== e.length) return wt(t, e.slice(0, -1));
      },
      getPath: () => [t, e]
    };
  }
  function Tt(t) {
    return {
      get(e) {
        let n = e;
        for (const e of t) {
          if (null == n) return;
          n = n[e];
        }
        return null != n ? n : void 0;
      },
      getPath: () => t
    };
  }
  function Et(t) {
    let e;
    function n(e) {
      return (
        t(Mt.extractingIndexLookupMapKeys),
        (function (t) {
          const e = jt(t);
          if (e) return { indexes: Tt([e.indexKey]), data: Tt([e.dataKey]) };
        })(e)
      );
    }
    return {
      getIndexes: (t) => (void 0 === e && (e = n(t)), (e && e.indexes.get(t)) || []),
      getData: (t) => (void 0 === e && (e = n(t)), (e && e.data.get(t)) || [])
    };
  }
  function* Ct(t, e) {
    const n = e.getIndexes(t),
      o = e.getData(t);
    for (const t of n) {
      const e = o[t];
      void 0 !== e && (yield [t, e]);
    }
  }
  const Mt = {
      extractingSuggestionSets: "start to extract extractedSuggestionSets",
      extractingOpenEndRangesMapPath: "start to extract openEndRangesMapPath",
      noDeleteSuggestionCannotExtractOpenEndRangesMapPath:
        "can not extract openEndRangesMapPath, there is no suggestions in the document yet",
      extractingIndexLookupMapPaths: "extracting IndexLookupMapPaths",
      extractingDeletionIndexLookupMapPath: "extracting DeletionSuggestionIndexLookupMapPath",
      extractingIndexLookupMapKeys: "extracting suggestion index lookup map keys",
      extractContainerByAdditionLookupMap: "extract addition lookup map path by addition lookup map path",
      pickDeletionIndexLookupMapFromTwoMaps: "pick deletion lookup map from two lookup maps"
    },
    At = {
      canNotGetGDocsDocument: "can not get extracted gdocs document object",
      suggestionMustHaveSameStart: "suggestion range must have same start",
      suggestionCountNotMatch: "two SuggestionMaps must contains same amount of suggestions",
      canNotFindSuggestionSetContainer: "can not find suggestion sets container",
      canNotGetSuggestionRangeFromLookupMap: "can not get suggestion range from lookup map",
      canNotExtractSuggestionRange: "can not extract suggestion range from suggestion",
      canNotGetFirstSuggestionId: "can not get first suggestion id, suggestionMapAll is wrong",
      suggestionSetsAreNotSameType: "suggestion sets do not have same type",
      suggestionLookupMapArrayNotValid: "we can not find the relationship between two arrays",
      canNotGetAdditionLookupMapContainer: "additionLookupMapContainer getter is wrong",
      canNotGetSuggestionMapAdd: "can not find suggestionMapAdd by the same path for suggestionMapAll"
    },
    kt = (t) => `find ${t} suggestions set(s)`,
    _t = (t) => `find ${t} suggestion Map(s) in suggestion set`,
    Rt = (t) => `find ${t} deletion suggestion lookup map container(s)`,
    Nt = (t) => `find ${t} suggestion lookup map(s)`,
    Pt = (t) => `find ${t} deletion suggestion lookup map(s)`,
    It = (t) => `find more ${t} array keys`;
  function Ot(t, e, n) {
    if (!(e in t)) return !1;
    const o = t[e];
    return "function" == typeof o && o.length === n;
  }
  const Dt = (t, e, n) => {
    let o;
    for (const [r, s] of Ct(t, e))
      if (void 0 === o) s.includes(n) && (o = r);
      else if (0 == s.length) return { start: o, end: r };
  };
  function Lt(t) {
    const e = new Set();
    return (
      t.map((t) => {
        for (const n of t) e.add(n);
      }),
      e.size
    );
  }
  function jt(t) {
    const e = t,
      n = Object.keys(t).filter((t) => Array.isArray(e[t]));
    if (2 !== n.length) throw new Error(It(n.length));
    const o = e[n[0]],
      r = e[n[1]];
    if (!1 !== Ft(o, r)) {
      if (!1 !== Ft(r, o)) return;
      return { indexKey: n[0], dataKey: n[1] };
    }
    if (!1 !== Ft(r, o)) return { indexKey: n[1], dataKey: n[0] };
    throw new Error(At.suggestionLookupMapArrayNotValid);
  }
  function Ft(t, e) {
    if (0 !== t.length || 0 !== e.length) {
      if (t.length > 0 && e.length > 0 && t.every((t) => "number" == typeof t && void 0 !== e[t])) {
        return (function (t, e = 3) {
          const n = [];
          let o = 0;
          for (const r of t) {
            for (; o < r; ) {
              if ((n.push(o), n.length === e)) return n;
              o++;
            }
            o = r + 1;
          }
          for (; n.length < e; ) n.push(o++);
          return n;
        })(t).every((t) => void 0 === e[t]);
      }
      return !1;
    }
  }
  function Gt(t, e) {
    if ("object" == typeof e && e && Ot(e, "constructor", 5)) for (const [t, n] of Object.entries(e)) if (zt(t, n)) return !0;
    return !1;
  }
  function zt(t, e) {
    return (
      "object" == typeof e &&
      !!e &&
      "constructor" in e &&
      "clear" in e &&
      "contains" in e &&
      "add" in e &&
      "function" == typeof e.add &&
      4 === e.add.length
    );
  }
  function Bt(t, e) {
    return Xt(
      t,
      (t, n) =>
        (function (t, e) {
          let n = !1;
          return (
            Wt(t, (t) => {
              if (!Array.isArray(t)) return !1;
              for (const o of t) {
                if (!$t(o)) return !1;
                o === e && (n = !0);
              }
              return !0;
            }) && n
          );
        })(n, e),
      2
    ).results;
  }
  function $t(t) {
    return "string" == typeof t && t.startsWith("suggest.");
  }
  function qt(t) {
    return Array.isArray(t) && t.every($t);
  }
  function Wt(t, e) {
    if (
      !(function (t) {
        if ("object" != typeof t || !t) return !1;
        if (
          ![
            { name: "clear", length: 0 },
            { name: "get", length: 1 },
            { name: "size", length: 0 },
            { name: "map", length: 1 }
          ].every(({ name: e, length: n }) => Ot(t, e, n))
        )
          return !1;
        try {
          return jt(t), !0;
        } catch (t) {
          return !1;
        }
      })(t)
    )
      return !1;
    for (const n of Object.values(t)) if (Array.isArray(n) && 0 != n.length && n.every((t) => void 0 === t || e(t))) return !0;
    return !1;
  }
  function Kt(t, e) {
    return Wt(e, qt);
  }
  function Vt(t, e, n, o) {
    o(Mt.pickDeletionIndexLookupMapFromTwoMaps);
    const r = (function (t) {
      const e = Lt(t[0]),
        n = Lt(t[1]);
      if (e !== n) return e < n ? 0 : 1;
      return;
    })(e);
    return void 0 !== r
      ? r
      : (function ([t, e], n, o) {
          const r = Object.keys(o)[0],
            s = Dt(t, n, r),
            i = Dt(e, n, r);
          if (!s || !i) throw new Error(At.canNotGetSuggestionRangeFromLookupMap);
          const a = o[r],
            l = a.contains(s.start, s.end),
            c = a.contains(i.start, i.end);
          if (!l || !c) return l ? 1 : 0;
          return s.start > i.start ? 0 : 1;
        })(e, t, n);
  }
  function Ut(t, e, n, o, r, s) {
    const i = r.getSuggestionMap(e);
    if (!i) return;
    const a = r.getSuggestionMap(n);
    if (!a) throw new Error(At.canNotGetSuggestionMapAdd);
    const l = (function (t, e) {
      const n = Object.keys(t),
        o = Object.keys(e);
      if (n.length !== o.length) {
        for (const t of n) if (!e[t]) return t;
        if (n.length < o.length) throw new Error(At.canNotGetFirstSuggestionId);
      }
    })(i, a);
    return l
      ? (function (t, e, n) {
          n(Mt.extractingDeletionIndexLookupMapPath);
          const o = Bt(t, e);
          if (1 == o.length) return Ht(o[0].path);
          throw new Error(Pt(o.length));
        })(t, l, s)
      : (function (t, e, n, o) {
          o(Mt.extractingIndexLookupMapPaths);
          const r = (function (t) {
            return Xt(t, Kt, 2).results;
          })(t);
          if (1 == r.length) {
            const [t, ...e] = r[0].path;
            return (function (t, e, n) {
              let o;
              return {
                getDeletionLookupMap(r) {
                  if (void 0 === o) {
                    const s = t.get(r);
                    if (!s) throw new Error(At.canNotGetAdditionLookupMapContainer);
                    const i = (function (t, e, n) {
                      n(Mt.extractContainerByAdditionLookupMap);
                      const o = [];
                      for (const [n, i] of Object.entries(e))
                        (r = i) !== (s = t) && "object" == typeof r && r && r.constructor === s.constructor && o.push(n);
                      var r, s;
                      if (1 === o.length) return Tt([o[0]]);
                      if (o.length > 1) throw new Error(Rt(o.length));
                    })(s, r, n);
                    if (!i) return;
                    o = Tt([...i.getPath(), ...e.getPath()]);
                  }
                  return o.get(r);
                }
              };
            })(Tt([t]), Tt(e), o);
          }
          if (2 == r.length) {
            return Ht(r[Vt(n, [r[0].value, r[1].value], e, o)].path);
          }
          throw new Error(Nt(r.length));
        })(t, a, o, s);
  }
  function Ht(t) {
    const e = Tt(t);
    return { getDeletionLookupMap: (t) => e.get(t) };
  }
  function Yt(t, e) {
    const n = Object.entries(t)
      .map(([t, e]) => {
        if ("object" != typeof e || !e) return null;
        const n = Object.keys(e);
        if (0 === n.length || !n.every((t) => t.startsWith("suggest."))) return null;
        return {
          openEndRangesMapPath: t,
          suggestionMap: e,
          suggestionIds: n,
          range: (function (t) {
            const e = Xt(t, (t, e) => xt(e), 0);
            if (1 !== e.results.length) throw new Error(At.canNotExtractSuggestionRange);
            return e.results[0].value[0];
          })(e[n[0]])
        };
      })
      .filter(Boolean);
    if (0 === n.length) return void e(Mt.noDeleteSuggestionCannotExtractOpenEndRangesMapPath);
    if (2 != n.length) throw new Error(_t(n.length));
    const [o, r] = n;
    if (o.suggestionIds.length !== r.suggestionIds.length || o.suggestionIds.some((t) => !r.suggestionMap[t]))
      throw new Error(At.suggestionCountNotMatch);
    if (o.range.start !== r.range.start) throw new Error(At.suggestionMustHaveSameStart);
    return o.range.end > r.range.end ? Tt([o.openEndRangesMapPath]) : Tt([r.openEndRangesMapPath]);
  }
  function Jt(t, e, n, o) {
    try {
      const r = (function (t, e) {
          e(Mt.extractingSuggestionSets);
          const n = Xt(t, Gt, 1);
          if (1 !== n.results.length) throw new Error(At.canNotFindSuggestionSetContainer);
          const o = Xt(n.results[0].value, zt, 1);
          if (2 !== o.results.length) throw new Error(kt(o.results.length));
          const r = o.results[0].value,
            s = o.results[1].value;
          if (s.constructor !== r.constructor) throw new Error(At.suggestionSetsAreNotSameType);
          return { suggestionSetAll: r, suggestionSetAdd: s };
        })(t, o),
        s = Et(o),
        i = (function (t) {
          let e;
          return {
            getSuggestionMap: (n) => (void 0 === e && (t(Mt.extractingOpenEndRangesMapPath), (e = Yt(n, t))), null == e ? void 0 : e.get(n))
          };
        })(o);
      let a, l;
      return {
        getDeleteSuggestionRanges() {
          try {
            return (
              void 0 === l &&
                (void 0 === a && (a = Ut(e, r.suggestionSetAll, r.suggestionSetAdd, s, i, o)), a && (l = a.getDeletionLookupMap(e))),
              l
                ? ((t, e) => {
                    const n = [];
                    let o = -1;
                    for (const [r, s] of Ct(t, e))
                      -1 === o ? s.length > 0 && (o = r) : 0 == s.length && (n.push({ start: o, end: r }), (o = -1));
                    return n;
                  })(l, s)
                : []
            );
          } catch (t) {
            return (l = null), n(t.message), [];
          }
        }
      };
    } catch (t) {
      return n(t.message), { getDeleteSuggestionRanges: () => [] };
    }
  }
  function Qt(t, e, n) {
    const o = t.get();
    if (!o) return [void 0, void 0, void 0];
    const r = Xt(o, e, n);
    if (!r.results.length) return [void 0, void 0, void 0];
    const s = r.results.map((e) => wt(t, e.path));
    return [s[0], r.results[0].value, s];
  }
  function Xt(t, e, n, o = Object.getOwnPropertyNames(t), r = 0, s) {
    var i;
    const a = new Set(),
      l = [];
    let c = 0;
    const u = performance.now();
    let g, f;
    const p = (t, e, n, o) => {
        if (null == t) return;
        if (a.has(t)) return;
        if ((a.add(t), s && !s(t, e))) return;
        const r = { next: void 0, value: t, key: e, parent: n, depth: o };
        f ? (f.next = r) : (g = r), (f = r);
      },
      d = () => {
        const t = g;
        return t && ((g = t.next), g || (f = void 0)), t;
      },
      h = (t) => {
        const e = [];
        let n = t;
        for (; n; ) e.push(n.key), (n = n.parent);
        return e.reverse();
      };
    for (const e of o) "prototype" !== e && p(t[e], e, void 0, 0);
    for (; g; ) {
      const t = d();
      if (!t) break;
      c++;
      const { key: o, value: s, depth: a } = t;
      if (!(s instanceof Window) && !(s instanceof Node)) {
        try {
          const t = null === (i = null == s ? void 0 : s.constructor) || void 0 === i ? void 0 : i.name;
          if ("Window" === t || "HTMLDocument" === t) continue;
        } catch (t) {}
        if (!(a > n)) {
          try {
            if (e(o, s)) {
              const e = h(t);
              l.push({ path: e, value: s, depth: a, iterations: c, performance: performance.now() - u });
              continue;
            }
          } catch (t) {}
          if (null != s)
            if (Array.isArray(s))
              for (let e = 0; e < s.length && e < r; e++)
                try {
                  p(s[e], `${e}`, t, a + 1);
                } catch (t) {}
            else if ("function" == typeof s);
            else if (s instanceof Object)
              if (s instanceof Node);
              else
                for (const e of Object.getOwnPropertyNames(s))
                  if ("prototype" !== e)
                    try {
                      p(s[e], e, t, a + 1);
                    } catch (t) {}
        }
      }
    }
    return { results: l, iterations: c, performance: performance.now() - u };
  }
  function Zt(t) {
    let e,
      n = 0;
    const o = () => {
      n++, (e = t());
    };
    return {
      get calcCount() {
        return n;
      },
      refresh: o,
      get: () => (0 === n && o(), e)
    };
  }
  function te(t) {
    const e = bt(Object.getOwnPropertyNames(t).find((t) => -1 !== t.toString().indexOf("_kixApp"))),
      n = bt(t[e], "kixApp"),
      o = (function (t, e) {
        const n = new Set();
        return t.filter((t) => {
          const o = e(t);
          return !n.has(o) && (n.add(o), !0);
        });
      })(Xt(n, (t, e) => "string" == typeof e && "" === e.charAt(0), 5).results, (t) => t.value).filter((t) =>
        isNaN(parseInt(t.path[t.path.length - 1], 10))
      );
    for (const t of o) {
      const o = t.path.slice(0, t.path.length - 1).reduce((t, e) => t[e], n);
      if (1 === Xt(o, ee, 2).results.length) return [e].concat(t.path);
      if (1 === Xt(o, ne, 2).results.length) return [e].concat(t.path);
    }
    return null;
  }
  function ee(t, e) {
    return Array.isArray(e) && m.some((t) => e.length === t.length && e.every((e, n) => e.charCodeAt(0) === t[n]));
  }
  function ne(t, e) {
    return e instanceof RegExp && b.includes(e.toString());
  }
  function oe(t) {
    try {
      const e = t.get();
      if (!e) return null;
      const n = Xt(
        e,
        (t, e) =>
          (function (t) {
            return se(t) && Boolean(t.length > 0 && void 0 !== t[0]);
          })(e),
        3,
        void 0,
        void 0,
        (t, e) =>
          !(
            t &&
            "object" == typeof t &&
            ((e.length > 4 && /^[0-9a-f]+$/.test(e)) ||
              "docs-text-overlay-selection" in t ||
              "docs-text-overlay-bookmark" in t ||
              "cell-grid" in t)
          )
      );
      return n.results.length > 0 ? wt(t, n.results[0].path) : null;
    } catch (t) {
      return null;
    }
  }
  function re(t) {
    return Boolean(t && "object" == typeof t && "start" in t && "number" == typeof t.start && "end" in t && "number" == typeof t.end);
  }
  function se(t) {
    return Boolean(t && Array.isArray(t) && t.every(re));
  }
  function ie(t, e, n) {
    return t.push(Array.isArray(e) || isNaN(e) ? n : e), t;
  }
  class ae {
    constructor(t, e, n) {
      (this._win = t),
        (this._logError = e),
        (this._logInfo = n),
        (this._result = null),
        (this._resizer = void 0),
        (this._kixApp = (function (t) {
          const e = bt(Object.getOwnPropertyNames(t).find((t) => -1 !== t.toString().indexOf("_kixApp")));
          return wt(((n = t), { get: () => n }), [e]);
          var n;
        })(this._win)),
        (this._images = Zt(() =>
          (function (t) {
            const e = "inline",
              n = "positioned";
            try {
              const [o] = Qt(t, (t, o) => (t === e || t === n) && "object" == typeof o, 5);
              yt(!!o);
              const r = o.parent();
              yt(!!r);
              const [s, i] = Qt(o, (t, e) => "object" == typeof e && !!e && 2 === Object.keys(e).length, 5);
              yt(!!s && !!i);
              const a = bt(Object.keys(i)[0]),
                [l, c] = bt(s.getPath());
              return { inline: wt(r, [e, ...c, a]), positioned: wt(r, [n, ...c, a]) };
            } catch (t) {
              return { inline: null, positioned: null, error: t };
            }
          })(this._kixApp)
        )),
        (this._textSelection = Zt(() => oe(this._kixApp)));
    }
    _attemptTextExtraction() {
      try {
        const t = te(this._win),
          e = (function (t) {
            const e = bt(Object.getOwnPropertyNames(t).find((t) => -1 !== t.toString().indexOf("_kixApp"))),
              n = Xt(
                bt(t[e], "kixApp"),
                (t, e) => "horizontal_rule" === t && "object" == typeof e && null !== e && 2 === Object.keys(e).length,
                6
              );
            return 0 === n.results.length ? null : [e].concat(bt(n.results[0]).path, Object.keys(n.results[0].value)[0]);
          })(this._win);
        let n = !1;
        this._images.refresh();
        const o = t ? [...t] : [],
          r = o.pop(),
          s = o.reduce((t, e) => t[e], this._win),
          i = null == e ? void 0 : e.pop(),
          a = e ? (null == e ? void 0 : e.reduce((t, e) => t[e], this._win)) : {};
        if (o.length > 0) {
          const t =
              !this._useSuggestionInternalsWrapper &&
              (function (t, e) {
                try {
                  const n = bt(Object.getOwnPropertyNames(t).find((t) => -1 !== t.toString().indexOf("_kixApp"))),
                    o = Xt(
                      bt(t[n], "kixApp"),
                      (t, e) => Array.isArray(e) && e.some((t) => Array.isArray(t) && -1 !== t.toString().indexOf("suggest.")),
                      10
                    )
                      .results.filter((t) => t.path[0] === e[1])
                      .filter((t) => !p.some((e) => t.path.includes(e)))
                      .map((t) => {
                        const e = [...t.path];
                        return e.pop(), e;
                      })
                      .reduce((e, o) => {
                        const r = [n].concat(o).reduce((t, e) => t[e], t);
                        return e
                          ? r[e.idProp] > e.id
                            ? { ...e, id: r[e.idProp], path: o }
                            : e
                          : Object.getOwnPropertyNames(r).reduce(
                              (t, e) =>
                                Array.isArray(r[e]) || isNaN(parseInt(r[e], 10))
                                  ? Array.isArray(r[e][0])
                                    ? { ...t, fullArrayProp: e }
                                    : { ...t, compactArrayProp: e }
                                  : { ...t, idProp: e, id: r[e] },
                              { path: o }
                            );
                      }, null);
                  return { suggestionsFullArrayPath: o ? [n].concat(o.path, o.fullArrayProp) : null };
                } catch (t) {
                  return { suggestionsFullArrayPath: null };
                }
              })(this._win, o).suggestionsFullArrayPath,
            e = Array.isArray(t) && t.pop(),
            l = t && t.reduce((t, e) => t[e], this._win);
          let c;
          if (this._useSuggestionInternalsWrapper) {
            const t = this.getKixApp(),
              e = o.slice(0, -1).reduce((t, e) => t[e], this._win);
            c = Jt(
              t,
              e,
              (t) => this._logError("ExtractSuggestionInternals", t),
              (t) => this._logInfo("ExtractSuggestionInternals", t)
            );
          }
          const u = (t) => {
            const e = null == t ? void 0 : t.get();
            return Array.isArray(e) ? e.reduce(ie, []) : [];
          };
          return {
            getText: () => {
              const t = s[r];
              if ("string" != typeof t)
                throw (this._logError("ExtractFullText", "unexpected text value type"), new Error("unexpected text value type"));
              const o = a[i],
                g = Array.isArray(o) ? o.reduce(ie, []).sort((t, e) => t - e) : [],
                f = u(this._images.get().positioned);
              let p = u(this._images.get().inline);
              n ||
                (p.length > 0
                  ? (n = !0)
                  : this._images.calcCount < 10 &&
                    "string" == typeof t &&
                    t.indexOf("*") >= 0 &&
                    (this._images.refresh(), (p = u(this._images.get().inline)), (n = p.length > 0)));
              const d = l && e && l[e];
              return {
                fullText: t,
                ignoredRanges: d ? [...d].reduce((t, e) => (t.push(Array.isArray(e) ? !!e[0] : !!t.length && t[t.length - 1]), t), []) : [],
                deleteSuggestionRanges: null == c ? void 0 : c.getDeleteSuggestionRanges(),
                nonTextEntities: {
                  horizontal_rule: { startsAt: g, textRepresentation: "-" },
                  inline_image: { startsAt: p, textRepresentation: "*" },
                  positioned_image: { startsAt: f, textRepresentation: "" }
                }
              };
            },
            gotIgnoredRanges: !!l,
            gotDeleteRanges: !!c
          };
        }
        return { error: "notFound" };
      } catch (t) {
        return { error: "exception", message: t.message };
      }
    }
    _attemptResizerExtraction() {
      const t = (function (t) {
        try {
          return [bt(Object.getOwnPropertyNames(t).find((t) => -1 !== t.toString().indexOf("_kixApp")))].concat("resize");
        } catch (t) {
          return null;
        }
      })(this._win);
      try {
        return t ? t.reduce((t, e) => t[e], this._win) : null;
      } catch (t) {
        return null;
      }
    }
    _tryGetTextSelectionRanges(t) {
      const e = () => {
          const t = this._textSelection.get();
          if (t) {
            const e = t.get();
            if (se(e)) return e;
          }
          return null;
        },
        n = e();
      return n || (t && this._textSelection.calcCount < 10 && this._textSelection.refresh(), e());
    }
    _getText(t) {
      try {
        if (
          (this._result || (this._result = this._attemptTextExtraction()),
          t.reQueryForIgnoredRanges &&
            "getText" in this._result &&
            ((this._useSuggestionInternalsWrapper ? this._result.gotDeleteRanges : this._result.gotIgnoredRanges) ||
              (this._result = this._attemptTextExtraction())),
          "getText" in this._result)
        ) {
          return { ...this._result.getText(), textSelectionRanges: this._tryGetTextSelectionRanges(t.expectTextSelection) };
        }
        return null;
      } catch (t) {
        return null;
      }
    }
    enableDeleteSuggestionRanges(t) {
      this._useSuggestionInternalsWrapper = t;
    }
    getKixApp() {
      return this._kixApp.get();
    }
    getText(t) {
      return this._getText(t);
    }
    triggerRender() {
      try {
        return void 0 === this._resizer && (this._resizer = this._attemptResizerExtraction()), this._resizer ? (this._resizer(), !0) : !1;
      } catch (t) {
        return !1;
      }
    }
  }
  function le(t, e) {
    const n = (function (t, e) {
        const n = Xt(
          t,
          (t, e) =>
            (function (t) {
              if (
                "object" == typeof t &&
                null !== t &&
                "function" == typeof t.getSelection &&
                "function" == typeof t.constructor &&
                3 === t.constructor.length
              ) {
                const e = t.getSelection();
                return null != e && "object" == typeof e && "function" == typeof e.constructor && 6 === e.constructor.length;
              }
              return !1;
            })(e),
          1
        );
        if (1 !== n.results.length) return e("extractSelectionController", ce(n.results, "selection controller")), null;
        const o = n.results[0].value,
          r = o.getSelection();
        if (!r) return null;
        const s = Xt(o, ue, 0, Object.getOwnPropertyNames(Object.getPrototypeOf(o)));
        if (1 !== s.results.length) return e("extractSetSelectionResult", ce(s.results, "setSelection"), s.results), null;
        const i = s.results[0].value;
        return {
          selectionController: o,
          selectionControllerAccessors: {
            setSelection(t, e, n) {
              i.call(t, e, n);
            }
          },
          currentSelection: r
        };
      })(t, e),
      o = {
        GDocsTextRange: null,
        GDocsCursor: null,
        GDocsSelectionCursor: null,
        GDocsSelection: null,
        selectionController: null,
        selectionControllerAccessors: null
      };
    if (!n) return o;
    const { selectionController: r, selectionControllerAccessors: s, currentSelection: i } = n;
    o.selectionController = r;
    const {
      GDocsSelection: a,
      GDocsCursor: l,
      GDocsTextRange: c,
      selectionAccessors: u,
      currentCursor: g
    } = (function (t) {
      const e = t.constructor,
        n = (function (t) {
          const e = Xt(
            t,
            (t, e) =>
              (function (t) {
                if ("object" != typeof t || !t) return !1;
                const e = t.constructor;
                return 3 === (null == e ? void 0 : e.length) && "function" == typeof t.shift && 1 === t.shift.length;
              })(e),
            0
          );
          if (1 !== e.results.length) return null;
          const n = e.results[0].value,
            o = n.constructor,
            r = e.results[0].path[0];
          return { GDocsCursor: o, currentCursor: n, cursorPropName: r };
        })(t);
      if (!n)
        return {
          GDocsSelection: e,
          GDocsCursor: null,
          GDocsTextRange: null,
          currentCursor: null,
          selectionAccessors: null,
          wrapSelection: null
        };
      const { GDocsCursor: o, currentCursor: r, cursorPropName: s } = n,
        i = Xt(t, (t, e) => xt(e), 0),
        a = Xt(t, l, 0, Object.getOwnPropertyNames(Object.getPrototypeOf(t)));
      function l(e, n) {
        return "function" == typeof n && 1 === n.length && !1 === n.call(t, {}) && !0 === n.call(t, t);
      }
      if (1 === i.results.length && 1 === a.results.length) {
        const t = i.results[0].path[0],
          n = a.results[0].value,
          l = { getCursor: (t) => t[s], getRanges: (e) => e[t], equals: (t, e) => n.call(t, e) };
        return {
          GDocsSelection: e,
          GDocsCursor: o,
          GDocsTextRange: i.results[0].value[0].constructor,
          currentCursor: r,
          selectionAccessors: l
        };
      }
      return { GDocsSelection: e, GDocsCursor: o, GDocsTextRange: null, currentCursor: r, selectionAccessors: null };
    })(i);
    if (
      ((o.GDocsSelection = a),
      (o.GDocsCursor = l),
      (o.GDocsTextRange = c),
      (o.selectionControllerAccessors = s),
      (o.selectionAccessors = u),
      !g)
    )
      return o;
    const f = (function (t, e) {
      const n = Xt(
        t,
        (t, n) =>
          n !== e &&
          (function (t) {
            return !("object" != typeof t || !t) && 3 === t.constructor.length;
          })(n),
        0
      );
      if (2 !== n.results.length) return null;
      const o = n.results[0].value;
      return o.constructor;
    })(i, g);
    return (o.GDocsSelectionCursor = f), o;
  }
  const ce = (t, e) => `Failed to extract ${e}, found ${t.length < 5 ? t.length : ">5"} candidates`;
  function ue(t, e) {
    return "function" == typeof e && 2 === e.length;
  }
  var ge;
  !(function (t) {
    (t.PagedMode = "kix-document"), (t.PagelessMode = "docstext-simple");
  })(ge || (ge = {}));
  const fe = (t, e) => {
    const { results: n } = Xt(
      t,
      (t, e) =>
        ((t) => {
          const e = [ge.PagedMode, ge.PagelessMode];
          return (
            "object" == typeof t &&
            null !== t &&
            "function" == typeof t.isRoot &&
            t.isRoot() &&
            "function" == typeof t.getType &&
            e.includes(t.getType())
          );
        })(e),
      5
    );
    if (1 !== n.length)
      return (
        e("extractGDocsInternalsLayoutTree", `Failed to extract GDocsInternalsLayoutTree, found ${n.length} instances.`),
        { status: "fail", failReason: 0 === n.length ? "noInstances" : "multipleInstances" }
      );
    return { status: "success", rootNodeType: n[0].value.getType() };
  };
  function pe(t) {
    return (function (t) {
      return t && "wrappedJSObject" in t;
    })(t)
      ? t.wrappedJSObject
      : t;
  }
  function de(t) {
    t.dispatchEvent(new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, keyCode: 46, key: "Delete" }));
  }
  function he(t, e) {
    const n =
        void 0 === e.html
          ? void 0
          : (function (t, e) {
              try {
                return t();
              } catch (t) {
                return e(t);
              }
            })(
              () => new DataTransfer(),
              () => {}
            ),
      o = new InputEvent("beforeinput", {
        inputType: "insertReplacementText",
        data: e.plain,
        dataTransfer: n,
        cancelable: !0,
        bubbles: !0
      });
    o.dataTransfer &&
      (void 0 !== e.plain && pe(o.dataTransfer).setData("text/plain", e.plain),
      void 0 !== e.html && pe(o.dataTransfer).setData("text/html", e.html)),
      t.dispatchEvent(o);
  }
  function me(t, e) {
    t.dispatchEvent(
      new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, keyCode: 39, key: "ArrowRight", code: "ArrowRight", shiftKey: !0 })
    ),
      e(),
      (function (t) {
        t.dispatchEvent(
          new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, keyCode: 37, key: "ArrowLeft", code: "ArrowLeft", shiftKey: !0 })
        );
      })(t);
  }
  var ve, ye, be, Se, xe, we;
  !(function (t) {
    (t.equals = function (t, e) {
      return w(t.left, e.left) && w(t.top, e.top);
    }),
      (t.fromCartesian = function ({ x: t, y: e }) {
        return { top: e, left: t };
      }),
      (t.toCartesian = function ({ top: t, left: e }) {
        return { x: e, y: t };
      }),
      (t.zero = { top: 0, left: 0 }),
      (t.minus = function (t, e) {
        return { top: t.top - e.top, left: t.left - e.left };
      }),
      (t.plus = function (t, e) {
        return { top: t.top + e.top, left: t.left + e.left };
      }),
      (t.ceil = function (t) {
        return { left: Math.ceil(t.left), top: Math.ceil(t.top) };
      }),
      (t.floor = function (t) {
        return { left: Math.floor(t.left), top: Math.floor(t.top) };
      }),
      (t.create = function (t) {
        return { top: t.top, left: t.left };
      }),
      (t.l1Distance = function (t, e) {
        return Math.abs(t.top - e.top) + Math.abs(t.left - e.left);
      });
  })(ve || (ve = {})),
    (function (t) {
      function e(t) {
        return { top: t.top, left: t.left };
      }
      (t.create = e),
        (t.fromClientPoint = function (t, n, o) {
          return e({ top: t.top - n.top + o.top, left: t.left - n.left + o.left });
        }),
        (t.zero = { top: 0, left: 0 });
    })(ye || (ye = {})),
    (function (t) {
      function e(t) {
        return { top: t.top, left: t.left };
      }
      (t.create = e),
        (t.fromOffsetPoint = function (t, n, o) {
          return e({ top: t.top + n.top - o.top, left: t.left + n.left - o.left });
        }),
        (t.fromPage = function (t, n) {
          return e({ top: t.top - n.top, left: t.left - n.left });
        });
    })(be || (be = {})),
    (function (t) {
      function e(t) {
        return { top: t.top, left: t.left };
      }
      (t.create = e),
        (t.getHighlightsPosition = function (t, n, o, r = { top: 0, left: 0 }) {
          return e({ top: t.top + n.top + o.top + r.top, left: t.left + n.left + o.left + r.left });
        }),
        (t.fromClient = function (t, n) {
          return e({ top: t.top + n.top, left: t.left + n.left });
        }),
        (t.fromOffset = function (t, e, n) {
          return { top: t.top + e.top - n.top, left: t.left + e.left - n.left };
        });
    })(Se || (Se = {})),
    (function (t) {
      (t.editorElementSelector = "div.kix-appview-editor"),
        (t.textEventsTargetIframeSelector = "iframe.docs-texteventtarget-iframe"),
        (t.textEventsTargetElementSelector = '[contenteditable="true"]');
    })(xe || (xe = {})),
    (function (t) {
      (t.spellingBubbleSelector = "div.kix-spell-bubble"),
        (t.sellingUnderlinePromoBubbleSelector = "div.jfk-bubble.jfk-bubble-promo.docs-promo-bubble"),
        (t.pageLessModeTableMaskInner = "kix-domviewscroller-inner"),
        (t.pageLessModeTableMaskOuter = "kix-domviewscroller-outer");
    })(we || (we = {}));
  const Te = { success: !1, textChanged: !1, failReason: "noFullText" },
    Ee = { success: !1, textChanged: !1, failReason: "fullTextMismatch" },
    Ce = { success: !1, textChanged: !1, failReason: "noInternals" },
    Me = { success: !1, textChanged: !1, failReason: "noEventTarget" },
    Ae = { success: !1, textChanged: !1, failReason: "wrongRange" },
    ke = { success: !1, textChanged: !0, failReason: "noFullTextAfter" },
    _e = { success: !1, textChanged: !0, failReason: "resultTextMismatch" },
    Re = { success: !0, textChanged: !0, failReason: null },
    Ne = { ...Re, withIgnoreRanges: !0 };
  function Pe(t, e) {
    he(t, { plain: e });
  }
  class Ie {
    constructor(t, e, n, o, r) {
      (this._getInternals = t),
        (this._getFullTextInfo = e),
        (this._getKeyboardEventTarget = n),
        (this._getDocumentViewElement = o),
        (this._getEditorViewElement = r);
    }
    _resetSelectionNoScroll() {
      var t, e;
      const n = this._getDocumentViewElement();
      if (!n) return !1;
      const o = this._getEditorViewElement();
      if (!o) return !1;
      const r = null === (t = n.getClientRects()) || void 0 === t ? void 0 : t.item(0);
      if (!r || r.width <= 0 || r.height <= 0) return !1;
      const s = null === (e = o.getClientRects()) || void 0 === e ? void 0 : e.item(0);
      if (!s || s.width <= 0 || s.height <= 0) return !1;
      const i = Math.max(r.left, s.left),
        a = Math.min(r.right, s.right),
        l = Math.max(r.top, s.top),
        c = Math.min(r.bottom, s.bottom);
      if (i > a || l > c) return !1;
      const u = Math.floor((i + a) / 2),
        g = Math.floor(l + c) / 2;
      return (
        (function (t, e = be.create({ left: 0, top: 0 }), n = !1) {
          const o = { clientX: e.left, clientY: e.top, bubbles: !0, shiftKey: n };
          t.dispatchEvent(new MouseEvent("mousedown", o)), t.dispatchEvent(new MouseEvent("mouseup", o));
        })(n, be.create({ left: u, top: g })),
        !0
      );
    }
    replaceText({ start: t, end: e }, n, o, r = !1) {
      const s = this._getFullTextInfo();
      if (null === s) return Te;
      const i = s.fullText;
      if (void 0 !== o && i !== o) return Ee;
      const a = this._getInternals();
      if (!a) return Ce;
      const l = this._getKeyboardEventTarget();
      if (!l) return Me;
      if (t > e || t < 0 || e > i.length) return Ae;
      const c = () => {
          const t = a.selectionController.getSelection();
          l.dispatchEvent(
            new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, keyCode: 39, key: "ArrowRight", code: "ArrowRight" })
          );
          const e = a.selectionController.getSelection();
          (t === e || a.selectionAccessors.equals(t, e)) &&
            (function (t) {
              t.dispatchEvent(
                new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, keyCode: 37, key: "ArrowLeft", code: "ArrowLeft" })
              );
            })(l);
        },
        u = () => {
          const t = a.selectionController.getSelection();
          return a.selectionAccessors.getRanges(t).length > 0;
        };
      u() && ((this._resetSelectionNoScroll() && !u()) || c());
      const g = (function (t, e, n) {
        const o = new t.GDocsCursor(n);
        if (n > e) {
          const r = new t.GDocsCursor(e),
            s = new t.GDocsSelectionCursor(e, n - 1, r),
            i = new t.GDocsSelectionCursor(e, n - 1, o);
          return new t.GDocsSelection(o, i, s);
        }
        return new t.GDocsSelection(o, null, null);
      })(a, t, e);
      a.selectionControllerAccessors.setSelection(a.selectionController, g, !0),
        t === e ? "" !== n && Pe(l, n) : "" === n ? de(l) : Pe(l, n);
      const f = (function ({ getFullTextInfo: t, fullTextBefore: e, newText: n, start: o, end: r, validationRetryWithIgnoreRanges: s }) {
        const i = t(),
          a = e.slice(0, o) + n + e.slice(r);
        if ((null == i ? void 0 : i.fullText) === a) return Re;
        const l = s && t(!0);
        if (l) {
          const t = l.fullText === e.slice(0, o) + n + e.slice(o),
            s = o + n.length,
            i = r + n.length;
          if (
            t &&
            (function (t, e, n) {
              const { deleteSuggestionRanges: o, ignoredRanges: r } = t;
              if (o) {
                for (const { start: t, end: r } of o) if (t <= e && n <= r) return !0;
                return !1;
              }
              for (let t = e; t < n; t++) if (!r[t]) return !1;
              return !0;
            })(l, s, i)
          )
            return Ne;
        }
        if (!i && !l) return ke;
        return _e;
      })({ getFullTextInfo: this._getFullTextInfo, fullTextBefore: i, newText: n, start: t, end: e, validationRetryWithIgnoreRanges: r });
      return f !== Te && u() && c(), f;
    }
  }
  function Oe(t) {
    let e = !0;
    const n = new Set();
    return {
      onRender(o, r) {
        e ? n.add([o, r]) : t(o, r);
      },
      pause() {
        e = !0;
      },
      resume() {
        (e = !1),
          (() => {
            const e = [...n.values()];
            n.clear();
            for (const [n, o] of e) t(n, o);
          })();
      }
    };
  }
  function De(e, n, o = 1) {
    const r = new Set();
    let s = !1;
    return {
      onRender(i) {
        if (i.pageFragment.partialRect)
          r.add(i),
            (async () => {
              if (s) return;
              if ((await t(0), s)) return;
              if (!r.size) return;
              (s = !0), n(), await t(o), (s = !1);
              const i = [...r.values()];
              r.clear();
              for (const t of i) e.onRender(t, !0);
            })();
        else {
          let t = !1;
          if (((s = !1), r.size)) {
            const e = i.pageFragment.pageAttrs.pageOffsetRect,
              n = [...r.values()];
            for (const o of n) {
              g(o.pageFragment.pageAttrs.pageOffsetRect, e) && (r.delete(o), (t = !0));
            }
          }
          e.onRender(i, t);
        }
      },
      pause() {
        e.pause();
      },
      resume() {
        e.resume();
      }
    };
  }
  const Le = (e, n, r, i) => (a, l, c) => {
    const u = () => document.querySelector(".kix-rotatingtilemanager:not(.docs-ui-unprintable *)");
    !(async function () {
      var g;
      try {
        const f =
          null !== (g = u()) && void 0 !== g
            ? g
            : await (async function () {
                let e = 120;
                const n = 250;
                for (; e; ) {
                  await t(n);
                  const o = u();
                  if (o) return o;
                  e--;
                }
                return null;
              })();
        if (!f) return void e.api.logError("injected.startFail", "Injected init failed: Cannot find rotating tile manager in 30 seconds");
        const p = () =>
            (function (t) {
              var e, n, o;
              try {
                return null !==
                  (o =
                    null ===
                      (n =
                        null === (e = t.querySelector(xe.textEventsTargetIframeSelector)) || void 0 === e ? void 0 : e.contentDocument) ||
                    void 0 === n
                      ? void 0
                      : n.querySelector(xe.textEventsTargetElementSelector)) && void 0 !== o
                  ? o
                  : null;
              } catch (t) {
                return null;
              }
            })(document),
          d = () => {
            var t;
            return null !== (t = document.querySelector(".kix-appview-editor")) && void 0 !== t ? t : null;
          },
          h = (function (t, e, n) {
            const o = new ae(self, e, n);
            let r = o.getKixApp(),
              s = null,
              i = null,
              a = 0,
              l = 0;
            function c() {
              a >= 10 ||
                (a++,
                (r = o.getKixApp()),
                (s = r ? le(r, e) : null),
                (i =
                  s &&
                  s.GDocsCursor &&
                  s.GDocsSelection &&
                  s.GDocsTextRange &&
                  s.GDocsSelectionCursor &&
                  s.selectionController &&
                  s.selectionControllerAccessors &&
                  s.selectionAccessors
                    ? s
                    : null));
            }
            return {
              fullTextExtractor: o,
              get gdocsApp() {
                return o.getKixApp();
              },
              get selection() {
                return s || c(), s;
              },
              getSelectionFull() {
                if ((s || c(), !i)) {
                  if (!s) return null;
                  t(() => {
                    c();
                  });
                }
                return i;
              },
              getLayoutTreeAvailability: () =>
                l >= 2 ? null : (l++, (r = o.getKixApp()), r ? fe(r, e) : { status: "fail", failReason: "noInstances" })
            };
          })(
            (t) => {
              const e = p();
              e && me(e, t);
            },
            e.api.logError,
            e.api.log
          ),
          m = new Ie(
            () => h.getSelectionFull(),
            (t = !1) => h.fullTextExtractor.getText({ reQueryForIgnoredRanges: t, expectTextSelection: !1 }),
            p,
            () => f,
            d
          ),
          v = (function (e, n, o) {
            let r,
              s = !1,
              i = !1;
            let a = Oe((t, r = !1) => {
              const a = {
                fullText:
                  i || !s ? null : o.getText({ reQueryForIgnoredRanges: t.hasSuggestions, expectTextSelection: t.selection.length > 0 }),
                renderResult: t,
                forcedFullRender: r
              };
              e.pageRendered(a, n);
            });
            return (
              a.pause(),
              {
                onChangeMode(t) {
                  r !== t && ((r = t), "suggest" === r && ((s = !1), (i = !1), l(t)));
                },
                onRender(t) {
                  a.onRender(t);
                },
                init: (t) => {
                  t.forceFullRender && (a = De(a, () => o.triggerRender())),
                    o.enableDeleteSuggestionRanges(t.useDeleteSuggestionRanges),
                    l(void 0);
                }
              }
            );
            async function l(n) {
              if ((await t(0), s || i)) return;
              if (r !== n) return;
              null === o.getText({ reQueryForIgnoredRanges: !0, expectTextSelection: !1 })
                ? ((i = !0), e.logError("FullTextExtractor", "Cannot get full document text"))
                : (s = !0),
                a.resume();
            }
          })(e.api, n, h.fullTextExtractor),
          y = ht(l.metricsMap, () => document.createElement("canvas").getContext("2d"), e.api);
        a((t) => {
          if (
            (function (t) {
              return t.matches(".kix-canvas-tile-content");
            })(t)
          ) {
            const n = (function (t) {
              return {
                ...t,
                matchingBroken: !1,
                currentSelection: [],
                currentPageFragment: null,
                currentPageMap: null,
                currentPartialMap: null,
                saveCount: 0,
                savedState: [],
                savableState: { clips: [], clipsId: 0, font: void 0, strokeStyle: void 0, renderContainer: null },
                path: [],
                lastClipsId: 0,
                lastTextClipsId: 0,
                lastTextWhitespaceWidth: 0,
                clearedRect: null,
                hasSuggestions: !1,
                footnote: { footnoteLineDetected: !1 },
                compact: !1,
                strikethroughLines: [],
                equations: M()
              };
            })({
              api: e.api,
              metricsMap: y,
              getCurrentPageAttrs() {
                var e;
                const n = f.getBoundingClientRect(),
                  { left: o, top: r, width: s, height: i } = t.getBoundingClientRect(),
                  a = { left: o - n.left, top: r - n.top, width: s, height: i };
                return {
                  canvasBitmapSize: { width: t.width, height: t.height },
                  pageOffsetRect: a,
                  isCompactLayout: Boolean(
                    null === (e = t.parentElement) || void 0 === e ? void 0 : e.classList.contains("kix-page-canvas-compact-mode")
                  )
                };
              },
              onChangeMode: v.onChangeMode,
              onRender(e) {
                (function (t) {
                  return t.matches("canvas.kix-canvas-tile-content:not(.docs-ui-unprintable *)");
                })(t) && v.onRender(e);
              }
            });
            return r
              ? (function ({ api: t, state: e }) {
                  return k(e, ct, t);
                })({ api: e.api, state: n })
              : (function ({ api: t, state: e }) {
                  return k(e, lt, t);
                })({ api: e.api, state: n });
          }
        }),
          i({ replaceText: m.replaceText.bind(m), getLayoutTreeAvailability: () => h.getLayoutTreeAvailability() });
        const b = await s(10, 0, () => {
          return (t = 400), (n = e.api.init()), Promise.race([o(t), n]);
          var t, n;
        });
        b && v.init(b),
          r || (await t(1e3), l.metricsMap.size || (await e.api.logError("init.textMeasuringCheck", "No text measuring events received"))),
          await (async function (e, n) {
            for (let o = 0; o < 60; o++) {
              const o = document.querySelectorAll("canvas");
              if (o.length) {
                const t = n();
                return void (
                  [...o].every((e) => t.includes(e)) ||
                  (await e.api.logError("init.patchedCanvasesCheck", "Not all the document canvases have been patched"))
                );
              }
              await t(1e3);
            }
            await e.api.logError("init.patchedCanvasesCheck", "No document canvases found after 60 seconds");
          })(e, c);
      } catch (t) {
        try {
          await e.api.logException("init", t);
        } catch (t) {}
      }
    })();
  };
  !(async function () {
    var t, e;
    let n;
    try {
      const o =
          document.documentElement.dataset.grGdcConnId || (document.documentElement.dataset.grGdcConnId = `${Date.now()}-${Math.random()}`),
        r = (function (t) {
          return { request: `gr-cs-request-${t}`, response: `gr-cs-response-${t}` };
        })(o);
      (n = new l(new c(document, r.response, r.request))), n.api.log("injected.starting", "Injected script initialization");
      const s = self[`GR_GDEI_${o}`];
      if (!s) {
        console.error("Could not start grammarly integration", "no early injected data found");
        const t = { message: document.documentElement.dataset.grGdcErrorMsg, stack: document.documentElement.dataset.grGdcErrorStack };
        return void n.api.logError("injected.starting", "No early injected data found", t);
      }
      const a = (null === (t = document.currentScript) || void 0 === t ? void 0 : t.getAttribute("data-ext-version")) || "unknown",
        u = Boolean(null === (e = document.currentScript) || void 0 === e ? void 0 : e.getAttribute("data-ext-minimal")) || !1,
        g = (function (t) {
          return { request: `gr-ics-request-${t}`, response: `gr-ics-response-${t}` };
        })(o);
      Le(n, a, u, (t) => {
        new mt(
          (function (t, e = i.create()) {
            return {
              inbound: {
                subscribe: (n) =>
                  t.inbound.subscribe({
                    next(t) {
                      var o;
                      if (n) {
                        const r = { clientId: e, data: t };
                        "function" == typeof n ? n(r) : null === (o = n.next) || void 0 === o || o.call(n, r);
                      }
                    }
                  })
              },
              outbound(n) {
                n.clientId === e && t.outbound(n.data);
              }
            };
          })(new c(document, g.request, g.response)),
          { replaceText: (e, ...n) => t.replaceText(...n), getLayoutTreeAvailability: () => t.getLayoutTreeAvailability() }
        );
      })(s.addMiddleware, s.textMeasuringState, s.getPatchedCanvases);
    } catch (t) {
      console.error("Could not start grammarly integration", "module not loaded", t),
        n && n.api.logError("injected.startFail", `Injected init failed: ${String(t)}`);
    }
  })();
})();
