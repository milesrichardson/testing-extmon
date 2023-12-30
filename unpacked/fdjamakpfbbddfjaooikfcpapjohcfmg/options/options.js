(() => {
  var e = {
      656: (e) => {
        var t,
          s,
          n = (e.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (s) {
            try {
              return t.call(null, e, 0);
            } catch (s) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (e) {
            t = r;
          }
          try {
            s = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            s = i;
          }
        })();
        var a,
          c = [],
          u = !1,
          l = -1;
        function d() {
          u && a && ((u = !1), a.length ? (c = a.concat(c)) : (l = -1), c.length && p());
        }
        function p() {
          if (!u) {
            var e = o(d);
            u = !0;
            for (var t = c.length; t; ) {
              for (a = c, c = []; ++l < t; ) a && a[l].run();
              (l = -1), (t = c.length);
            }
            (a = null),
              (u = !1),
              (function (e) {
                if (s === clearTimeout) return clearTimeout(e);
                if ((s === i || !s) && clearTimeout) return (s = clearTimeout), clearTimeout(e);
                try {
                  return s(e);
                } catch (t) {
                  try {
                    return s.call(null, e);
                  } catch (t) {
                    return s.call(this, e);
                  }
                }
              })(e);
          }
        }
        function h(e, t) {
          (this.fun = e), (this.array = t);
        }
        function m() {}
        (n.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
          c.push(new h(e, t)), 1 !== c.length || u || o(p);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = m),
          (n.addListener = m),
          (n.once = m),
          (n.off = m),
          (n.removeListener = m),
          (n.removeAllListeners = m),
          (n.emit = m),
          (n.prependListener = m),
          (n.prependOnceListener = m),
          (n.listeners = function (e) {
            return [];
          }),
          (n.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      93: () => {},
      515: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChunkedChannel = void 0);
        var n = s(844),
          r = s(489);
        const i = (e) => {
          if (!e.chunkId) throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(e)}`);
        };
        class o extends n.GenericChannel {
          constructor(e) {
            super(e.timeout),
              (this._chunkSize = void 0),
              (this._maxStringAlloc = void 0),
              (this._sender = void 0),
              (this._buffer = {}),
              (this._chunkSize = e.chunkSize),
              (this._sender = e.sender),
              (this._maxStringAlloc = e.maxStringAlloc || -1);
          }
          send(e) {
            const t = JSON.stringify(e);
            if (t.length <= this._chunkSize) return void this._sender(e);
            const s = ((e) => {
                const t = new Uint16Array(e.length);
                for (let s = 0, n = e.length; s < n; s++) t[s] = e.charCodeAt(s);
                return t;
              })(t),
              n = [...Array(30)].map(() => Math.random().toString(36)[3]).join("");
            this._sender({ type: "chunk_start", chunkId: n, size: t.length });
            const r = (e = 0) => {
              let t = s.slice(e, e + this._chunkSize);
              t.length && (this._sender({ type: "chunk_data", chunkId: n, data: Array.from(t) }), r(e + this._chunkSize));
            };
            r(), this._sender({ type: "chunk_end", chunkId: n });
          }
          _messageReceived(e) {
            switch (e.type) {
              case "chunk_start":
                this._receiveNewChunk(e);
                break;
              case "chunk_data":
                this._receiveChunkData(e);
                break;
              case "chunk_end":
                const t = this._mergeChunks(e);
                super._messageReceived(t);
                break;
              default:
                super._messageReceived(e);
            }
          }
          _receiveNewChunk(e) {
            if ((i(e), this._buffer[e.chunkId])) throw new Error(`There was already an entry in the buffer for chunkId ${e.chunkId}`);
            this._buffer[e.chunkId] = { id: e.chunkId, chunks: [], size: e.size };
          }
          _receiveChunkData(e) {
            if ((i(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
            this._buffer[e.chunkId].chunks.push(e.data);
          }
          _mergeChunks(e) {
            if ((i(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
            let t;
            const s = ((e, t) => {
              if (-1 === t) return String.fromCharCode.apply(null, e);
              {
                let s = "";
                for (let n = 0; n < e.length; n += t)
                  n + t > e.length
                    ? (s += String.fromCharCode.apply(null, e.subarray(n)))
                    : (s += String.fromCharCode.apply(null, e.subarray(n, n + t)));
                return s;
              }
            })(
              this._buffer[e.chunkId].chunks.reduce(
                (e, t, s) => (t.forEach((t, s) => (e.uintArray[e.currentIx + s] = t)), (e.currentIx += t.length), e),
                { uintArray: new Uint16Array(this._buffer[e.chunkId].size), currentIx: 0 }
              ).uintArray,
              this._maxStringAlloc
            );
            try {
              t = JSON.parse(s);
            } catch (e) {
              throw new Error(`Not a valid JSON string: ${s}`);
            }
            if (!(0, r.isTransportMessage)(t)) throw new Error(`Not a transport message: ${JSON.stringify(t)}`);
            return t;
          }
        }
        t.ChunkedChannel = o;
      },
      844: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GenericChannel = void 0),
          (t.GenericChannel = class {
            constructor(e = 5e3) {
              (this._timeout = e),
                (this._onMessageCallbacks = []),
                (this._onConnectCallbacks = []),
                (this._onDisconnectCallbacks = []),
                (this._onErrorCallbacks = []),
                (this._ready = !1);
            }
            get timeout() {
              return this._timeout;
            }
            onData(e) {
              -1 === this._onMessageCallbacks.indexOf(e) && this._onMessageCallbacks.push(e);
            }
            onConnect(e) {
              this._ready && e(), this._onConnectCallbacks.push(e);
            }
            onDisconnect(e) {
              this._onDisconnectCallbacks.push(e);
            }
            onError(e) {
              this._onErrorCallbacks.push(e);
            }
            _messageReceived(e) {
              this._onMessageCallbacks.forEach((t) => t(e));
            }
            _error(e) {
              this._onErrorCallbacks.forEach((t) => t(e));
            }
            _connected() {
              (this._ready = !0), this._onConnectCallbacks.forEach((e) => e());
            }
            _disconnected() {
              (this._ready = !1), this._onDisconnectCallbacks.forEach((e) => e());
            }
          });
      },
      374: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DEFAULT_PARAM = void 0), (t.DEFAULT_PARAM = "$_DEFAULT_$");
      },
      511: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.combineEvents = function (...e) {
            const t = e.reduce((e, t) => (e.push.apply(e, Object.keys(t)), e), []),
              s = [...new Set(t)];
            if (t.length > s.length) throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
            return Object.assign({}, ...e);
          }),
          (t.createEventBus = function (e) {
            const t = (e.channels || []).map((t) => new r.Transport(t, e.ignoredEvents)),
              s = {};
            for (const r in e.events)
              e.events.hasOwnProperty(r) &&
                (!e.ignoredEvents || (e.ignoredEvents && !e.ignoredEvents.includes(r))) &&
                (s[r] = (0, n.connectSlot)(r, t, e.events[r].config));
            return s;
          });
        var n = s(414),
          r = s(346);
      },
      557: (e, t) => {
        "use strict";
        function s(e, t) {
          let s = null;
          try {
            s = e(t);
          } catch (e) {
            return Promise.reject(e);
          }
          return s && s.then ? s : Promise.resolve(s);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.callHandlers = function (e, t) {
            return t && 0 !== t.length ? (1 === t.length ? s(t[0], e) : Promise.all(t.map((t) => s(t, e)))) : new Promise((e) => {});
          });
      },
      489: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isTransportMessage = function (e) {
            switch (e.type) {
              case "request":
              case "response":
              case "error":
              case "handler_unregistered":
              case "handler_registered":
              case "event_list":
                return !0;
              default:
                return !1;
            }
          });
      },
      414: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.slot = function (e = o) {
            return a(e);
          }),
          (t.connectSlot = function (e, t, s = {}) {
            const i = t.reduce((e, t, s) => ({ ...e, [s]: {} }), { [c]: {} }),
              o = t.reduce((e, t, s) => ({ ...e, [s]: {} }), {}),
              a = (e, t) => {
                let s = () => {};
                const n = new Promise((e) => (s = e));
                o[e][t] = { registered: n, onRegister: s };
              },
              d = [],
              p = [],
              h = (e) => d.forEach((t) => t(e)),
              m = (e) => p.forEach((t) => t(e));
            return (
              t.forEach((t, s) => {
                t.addRemoteHandlerRegistrationCallback(e, (e = r.DEFAULT_PARAM, t) => {
                  if (!o[s]) return;
                  const n = i[s][e] || [];
                  (i[s][e] = n.concat(t)), 1 === u(e, i).length && h(e), o[s][e] || a(String(s), e), o[s][e].onRegister();
                }),
                  t.addRemoteHandlerUnregistrationCallback(e, (e = r.DEFAULT_PARAM, t) => {
                    const n = (i[s][e] || []).indexOf(t);
                    n > -1 && i[s][e].splice(n, 1), 0 === u(e, i).length && m(e), o[s] && a(String(s), e);
                  }),
                  t.addRemoteEventListChangedListener(e, () => {
                    o[s] &&
                      Object.keys(o[s]).forEach((e) => {
                        o[s][e].onRegister();
                      }),
                      delete o[s];
                  });
              }),
              Object.assign(
                function (e, c) {
                  const l = 2 === arguments.length,
                    d = l ? c : e,
                    p = l ? e : r.DEFAULT_PARAM,
                    h = () => {
                      const e = u(p, i);
                      return (0, n.callHandlers)(d, e);
                    };
                  if (0 === t.length) return h();
                  const m = [];
                  if (
                    (s.autoReconnect &&
                      t.forEach((e) => {
                        m.push(e.autoReconnect());
                      }),
                    s.noBuffer)
                  )
                    return Promise.all(m).then(() => h());
                  {
                    t.forEach((e, t) => {
                      o[t] && !o[t][p] && a(String(t), p);
                    });
                    const e = t.reduce((e, t, s) => {
                      var n;
                      return [...e, ...(null !== (n = o[s] && [o[s][p].registered]) && void 0 !== n ? n : [])];
                    }, []);
                    return Promise.all(e).then(() => h());
                  }
                },
                {
                  on: function (s, n) {
                    let o = "",
                      a = () => new Promise((e) => e());
                    return (
                      "string" == typeof s ? ((o = s), (a = n || a)) : ((o = r.DEFAULT_PARAM), (a = s)),
                      t.forEach((t) => t.registerHandler(e, o, a)),
                      (i[c][o] = (i[c][o] || []).concat(a)),
                      1 === u(o, i).length && h(o),
                      () => {
                        t.forEach((t) => t.unregisterHandler(e, o, a));
                        const s = (i[c][o] || []).indexOf(a);
                        -1 !== s && i[c][o].splice(s, 1), 0 === u(o, i).length && m(o);
                      }
                    );
                  },
                  lazy: function (e, t) {
                    return (
                      d.push(e),
                      p.push(t),
                      l(i).forEach(e),
                      () => {
                        l(i).forEach(t);
                        const s = d.indexOf(e);
                        s > -1 && d.splice(s, 1);
                        const n = p.indexOf(t);
                        n > -1 && p.splice(n, 1);
                      }
                    );
                  },
                  config: s,
                  slotName: e
                }
              )
            );
          }),
          (t.defaultSlotConfig = void 0);
        var n = s(557),
          r = s(374);
        const i = () => {
            throw new Error("Slot not connected");
          },
          o = { noBuffer: !1, autoReconnect: !0 };
        t.defaultSlotConfig = o;
        const a = (e) => Object.assign(() => i(), { config: e, lazy: () => i, on: () => i, slotName: "Not connected" }),
          c = "LOCAL_TRANSPORT",
          u = (e, t) => Object.keys(t).reduce((s, n) => s.concat(t[n][e] || []), []),
          l = (e) =>
            Object.keys(e).reduce((t, s) => {
              const n = e[s],
                r = [...t, ...Object.keys(n).filter((e) => (n[e] || []).length > 0)];
              return [...new Set(r)];
            }, []);
      },
      346: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Transport = void 0);
        var n = s(557);
        let r = 0;
        t.Transport = class {
          constructor(e, t) {
            (this._channel = e),
              (this._localHandlers = {}),
              (this._localHandlerRegistrations = {}),
              (this._remoteHandlers = {}),
              (this._remoteHandlerRegistrationCallbacks = {}),
              (this._remoteHandlerDeletionCallbacks = {}),
              (this._remoteIgnoredEventsCallbacks = {}),
              (this._pendingRequests = {}),
              (this._channelReady = !1),
              this._channel.onData((e) => {
                switch (e.type) {
                  case "request":
                    return this._requestReceived(e);
                  case "response":
                    return this._responseReceived(e);
                  case "handler_registered":
                    return this._registerRemoteHandler(e);
                  case "handler_unregistered":
                    return this._unregisterRemoteHandler(e);
                  case "error":
                    return this._errorReceived(e);
                  case "event_list":
                    return this._remoteIgnoredEventsReceived(e);
                  default:
                    ((e) => {
                      throw new Error(`Should not happen: ${e}`);
                    })(e);
                }
              }),
              this._channel.onConnect(() => {
                (this._channelReady = !0),
                  Object.keys(this._localHandlerRegistrations).forEach((e) => {
                    this._localHandlerRegistrations[e].forEach((e) => {
                      this._channel.send(e);
                    });
                  }),
                  t && this._channel.send({ type: "event_list", ignoredEvents: t });
              }),
              this._channel.onDisconnect(() => {
                (this._channelReady = !1),
                  this._unregisterAllRemoteHandlers(),
                  this._rejectAllPendingRequests(new Error("REMOTE_CONNECTION_CLOSED"));
              }),
              this._channel.onError((e) => this._rejectAllPendingRequests(e));
          }
          _remoteIgnoredEventsReceived({ ignoredEvents: e }) {
            Object.keys(this._remoteIgnoredEventsCallbacks).forEach((t) => {
              e.includes(t) && this._remoteIgnoredEventsCallbacks[t]();
            });
          }
          _requestReceived({ slotName: e, data: t, id: s, param: r }) {
            const i = this._localHandlers[e];
            if (!i) return;
            const o = i[r];
            o &&
              (0, n.callHandlers)(t, o)
                .then((t) => this._channel.send({ type: "response", slotName: e, id: s, data: t, param: r }))
                .catch((t) => this._channel.send({ id: s, message: `${t}`, param: r, slotName: e, stack: t.stack || "", type: "error" }));
          }
          _responseReceived({ slotName: e, data: t, id: s, param: n }) {
            const r = this._pendingRequests[e];
            r && r[n] && r[n][s] && (r[n][s].resolve(t), delete r[n][s]);
          }
          _errorReceived({ slotName: e, id: t, message: s, stack: n, param: r }) {
            const i = this._pendingRequests[e];
            if (!i || !i[r] || !i[r][t]) return;
            const o = new Error(`${s} on ${e} with param ${r}`);
            (o.stack = n || o.stack), this._pendingRequests[e][r][t].reject(o), delete this._pendingRequests[e][r][t];
          }
          _registerRemoteHandler({ slotName: e, param: t }) {
            const s = this._remoteHandlerRegistrationCallbacks[e];
            if (!s) return;
            const n = this._remoteHandlers[e];
            if (n && n[t]) return;
            const i = (s) =>
              new Promise((n, i) => {
                if (!this._channelReady) return i(new Error(`CHANNEL_NOT_READY on ${e}`));
                const o = "" + r++;
                (this._pendingRequests[e] = this._pendingRequests[e] || {}),
                  (this._pendingRequests[e][t] = this._pendingRequests[e][t] || {}),
                  (this._pendingRequests[e][t][o] = { resolve: n, reject: i }),
                  this._channel.send({ type: "request", id: o, slotName: e, param: t, data: s }),
                  setTimeout(() => {
                    const s = ((this._pendingRequests[e] || {})[t] || {})[o];
                    if (s) {
                      const n = new Error(`TIMED_OUT on ${e} with param ${t}`);
                      s.reject(n), delete this._pendingRequests[e][t][o];
                    }
                  }, this._channel.timeout);
              });
            (this._remoteHandlers[e] = this._remoteHandlers[e] || {}), (this._remoteHandlers[e][t] = i), s(t, i);
          }
          _unregisterRemoteHandler({ slotName: e, param: t }) {
            const s = this._remoteHandlerDeletionCallbacks[e],
              n = this._remoteHandlers[e];
            if (!n) return;
            const r = n[t];
            r && s && (s(t, r), delete this._remoteHandlers[e][t]);
          }
          _unregisterAllRemoteHandlers() {
            Object.keys(this._remoteHandlerDeletionCallbacks).forEach((e) => {
              const t = this._remoteHandlers[e];
              t &&
                Object.keys(t)
                  .filter((e) => t[e])
                  .forEach((t) => this._unregisterRemoteHandler({ slotName: e, param: t }));
            });
          }
          _rejectAllPendingRequests(e) {
            Object.keys(this._pendingRequests).forEach((t) => {
              Object.keys(this._pendingRequests[t]).forEach((s) => {
                Object.keys(this._pendingRequests[t][s]).forEach((n) => {
                  this._pendingRequests[t][s][n].reject(e);
                });
              }),
                (this._pendingRequests[t] = {});
            });
          }
          addRemoteHandlerRegistrationCallback(e, t) {
            this._remoteHandlerRegistrationCallbacks[e] || (this._remoteHandlerRegistrationCallbacks[e] = t);
          }
          addRemoteHandlerUnregistrationCallback(e, t) {
            this._remoteHandlerDeletionCallbacks[e] || (this._remoteHandlerDeletionCallbacks[e] = t);
          }
          addRemoteEventListChangedListener(e, t) {
            this._remoteIgnoredEventsCallbacks[e] || (this._remoteIgnoredEventsCallbacks[e] = t);
          }
          registerHandler(e, t, s) {
            if (
              ((this._localHandlers[e] = this._localHandlers[e] || {}),
              (this._localHandlers[e][t] = this._localHandlers[e][t] || []),
              this._localHandlers[e][t].push(s),
              1 === this._localHandlers[e][t].length)
            ) {
              const s = { type: "handler_registered", param: t, slotName: e };
              (this._localHandlerRegistrations[t] = this._localHandlerRegistrations[t] || []),
                this._localHandlerRegistrations[t].push(s),
                this._channelReady && this._channel.send(s);
            }
          }
          unregisterHandler(e, t, s) {
            const n = this._localHandlers[e];
            if (n && n[t]) {
              const r = n[t].indexOf(s);
              if (r > -1 && (n[t].splice(r, 1), 0 === n[t].length)) {
                const s = { type: "handler_unregistered", param: t, slotName: e };
                this._channelReady && this._channel.send(s);
              }
            }
          }
          isDisconnected() {
            return !this._channelReady;
          }
          autoReconnect() {
            if (this.isDisconnected() && this._channel.autoReconnect) {
              const e = new Promise((e) => {
                this._channel.onConnect(() => e());
              });
              return this._channel.autoReconnect(), e;
            }
            return Promise.resolve();
          }
        };
      },
      796: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "LW", {
          enumerable: !0,
          get: function () {
            return n.slot;
          }
        }),
          Object.defineProperty(t, "mt", {
            enumerable: !0,
            get: function () {
              return r.combineEvents;
            }
          }),
          Object.defineProperty(t, "nv", {
            enumerable: !0,
            get: function () {
              return r.createEventBus;
            }
          }),
          Object.defineProperty(t, "oN", {
            enumerable: !0,
            get: function () {
              return i.GenericChannel;
            }
          });
        var n = s(414),
          r = s(511),
          i = (s(93), s(844));
        s(515), s(489), s(374);
      },
      473: function (e, t, s) {
        var n;
        !(function (r, i) {
          "use strict";
          var o = "function",
            a = "undefined",
            c = "object",
            u = "string",
            l = "major",
            d = "model",
            p = "name",
            h = "type",
            m = "vendor",
            f = "version",
            v = "architecture",
            g = "console",
            y = "mobile",
            b = "tablet",
            w = "smarttv",
            _ = "wearable",
            x = "embedded",
            S = "Amazon",
            L = "Apple",
            I = "ASUS",
            A = "BlackBerry",
            k = "Browser",
            C = "Chrome",
            W = "Firefox",
            E = "Google",
            T = "Huawei",
            U = "LG",
            N = "Microsoft",
            O = "Motorola",
            D = "Opera",
            P = "Samsung",
            R = "Sharp",
            F = "Sony",
            M = "Xiaomi",
            B = "Zebra",
            j = "Facebook",
            q = "Chromium OS",
            Z = "Mac OS",
            G = function (e) {
              for (var t = {}, s = 0; s < e.length; s++) t[e[s].toUpperCase()] = e[s];
              return t;
            },
            V = function (e, t) {
              return typeof e === u && -1 !== H(t).indexOf(H(e));
            },
            H = function (e) {
              return e.toLowerCase();
            },
            $ = function (e, t) {
              if (typeof e === u) return (e = e.replace(/^\s\s*/, "")), typeof t === a ? e : e.substring(0, 350);
            },
            z = function (e, t) {
              for (var s, n, r, a, u, l, d = 0; d < t.length && !u; ) {
                var p = t[d],
                  h = t[d + 1];
                for (s = n = 0; s < p.length && !u && p[s]; )
                  if ((u = p[s++].exec(e)))
                    for (r = 0; r < h.length; r++)
                      (l = u[++n]),
                        typeof (a = h[r]) === c && a.length > 0
                          ? 2 === a.length
                            ? typeof a[1] == o
                              ? (this[a[0]] = a[1].call(this, l))
                              : (this[a[0]] = a[1])
                            : 3 === a.length
                            ? typeof a[1] !== o || (a[1].exec && a[1].test)
                              ? (this[a[0]] = l ? l.replace(a[1], a[2]) : i)
                              : (this[a[0]] = l ? a[1].call(this, l, a[2]) : i)
                            : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : i)
                          : (this[a] = l || i);
                d += 2;
              }
            },
            K = function (e, t) {
              for (var s in t)
                if (typeof t[s] === c && t[s].length > 0) {
                  for (var n = 0; n < t[s].length; n++) if (V(t[s][n], e)) return "?" === s ? i : s;
                } else if (V(t[s], e)) return "?" === s ? i : s;
              return e;
            },
            Y = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            },
            Q = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [f, [p, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [f, [p, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                ],
                [p, f],
                [/opios[\/ ]+([\w\.]+)/i],
                [f, [p, D + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [f, [p, D]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(heytap|ovi)browser\/([\d\.]+)/i,
                  /(weibo)__([\d\.]+)/i
                ],
                [p, f],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [f, [p, "UC" + k]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                [f, [p, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [f, [p, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [f, [p, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [f, [p, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [f, [p, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 Secure " + k], f],
                [/\bfocus\/([\w\.]+)/i],
                [f, [p, W + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [f, [p, D + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [f, [p, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [f, [p, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [f, [p, D + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [f, [p, "MIUI " + k]],
                [/fxios\/([-\w\.]+)/i],
                [f, [p, W]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[p, "360 " + k]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 " + k], f],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[p, /_/g, " "], f],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                ],
                [p, f],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                [p],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[p, j], f],
                [
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i
                ],
                [p, f],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [f, [p, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [f, [p, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [f, [p, C + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[p, C + " WebView"], f],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [f, [p, "Android " + k]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [p, f],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [f, [p, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [f, p],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  p,
                  [f, K, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [p, f],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[p, "Netscape"], f],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [f, [p, W + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                  /panasonic;(viera)/i
                ],
                [p, f],
                [/(cobalt)\/([\w\.]+)/i],
                [p, [f, /master.|lts./, ""]]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[v, "amd64"]],
                [/(ia32(?=;))/i],
                [[v, H]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[v, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[v, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[v, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[v, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[v, /ower/, "", H]],
                [/(sun4\w)[;\)]/i],
                [[v, "sparc"]],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [[v, H]]
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [d, [m, P], [h, b]],
                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [d, [m, P], [h, y]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [d, [m, L], [h, y]],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [d, [m, L], [h, b]],
                [/(macintosh);/i],
                [d, [m, L]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [d, [m, R], [h, y]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [d, [m, T], [h, b]],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                [d, [m, T], [h, y]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                ],
                [
                  [d, /_/g, " "],
                  [m, M],
                  [h, y]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [d, /_/g, " "],
                  [m, M],
                  [h, b]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [d, [m, "OPPO"], [h, y]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [d, [m, "Vivo"], [h, y]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [d, [m, "Realme"], [h, y]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                ],
                [d, [m, O], [h, y]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [d, [m, O], [h, b]],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [d, [m, U], [h, b]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i
                ],
                [d, [m, U], [h, y]],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [d, [m, "Lenovo"], [h, b]],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                  [d, /_/g, " "],
                  [m, "Nokia"],
                  [h, y]
                ],
                [/(pixel c)\b/i],
                [d, [m, E], [h, b]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [d, [m, E], [h, y]],
                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [d, [m, F], [h, y]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [d, "Xperia Tablet"],
                  [m, F],
                  [h, b]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [d, [m, "OnePlus"], [h, y]],
                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [d, [m, S], [h, b]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [d, /(.+)/g, "Fire Phone $1"],
                  [m, S],
                  [h, y]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [d, m, [h, b]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [d, [m, A], [h, y]],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [d, [m, I], [h, b]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [d, [m, I], [h, y]],
                [/(nexus 9)/i],
                [d, [m, "HTC"], [h, b]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                ],
                [m, [d, /_/g, " "], [h, y]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [d, [m, "Acer"], [h, b]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [d, [m, "Meizu"], [h, y]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i
                ],
                [m, d, [h, y]],
                [
                  /(kobo)\s(ereader|touch)/i,
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i
                ],
                [m, d, [h, b]],
                [/(surface duo)/i],
                [d, [m, N], [h, b]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [d, [m, "Fairphone"], [h, y]],
                [/(u304aa)/i],
                [d, [m, "AT&T"], [h, y]],
                [/\bsie-(\w*)/i],
                [d, [m, "Siemens"], [h, y]],
                [/\b(rct\w+) b/i],
                [d, [m, "RCA"], [h, b]],
                [/\b(venue[\d ]{2,7}) b/i],
                [d, [m, "Dell"], [h, b]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [d, [m, "Verizon"], [h, b]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [d, [m, "Barnes & Noble"], [h, b]],
                [/\b(tm\d{3}\w+) b/i],
                [d, [m, "NuVision"], [h, b]],
                [/\b(k88) b/i],
                [d, [m, "ZTE"], [h, b]],
                [/\b(nx\d{3}j) b/i],
                [d, [m, "ZTE"], [h, y]],
                [/\b(gen\d{3}) b.+49h/i],
                [d, [m, "Swiss"], [h, y]],
                [/\b(zur\d{3}) b/i],
                [d, [m, "Swiss"], [h, b]],
                [/\b((zeki)?tb.*\b) b/i],
                [d, [m, "Zeki"], [h, b]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[m, "Dragon Touch"], d, [h, b]],
                [/\b(ns-?\w{0,9}) b/i],
                [d, [m, "Insignia"], [h, b]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [d, [m, "NextBook"], [h, b]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[m, "Voice"], d, [h, y]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[m, "LvTel"], d, [h, y]],
                [/\b(ph-1) /i],
                [d, [m, "Essential"], [h, y]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [d, [m, "Envizen"], [h, b]],
                [/\b(trio[-\w\. ]+) b/i],
                [d, [m, "MachSpeed"], [h, b]],
                [/\btu_(1491) b/i],
                [d, [m, "Rotor"], [h, b]],
                [/(shield[\w ]+) b/i],
                [d, [m, "Nvidia"], [h, b]],
                [/(sprint) (\w+)/i],
                [m, d, [h, y]],
                [/(kin\.[onetw]{3})/i],
                [
                  [d, /\./g, " "],
                  [m, N],
                  [h, y]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [d, [m, B], [h, b]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [d, [m, B], [h, y]],
                [/smart-tv.+(samsung)/i],
                [m, [h, w]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [d, /^/, "SmartTV"],
                  [m, P],
                  [h, w]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [m, U],
                  [h, w]
                ],
                [/(apple) ?tv/i],
                [m, [d, L + " TV"], [h, w]],
                [/crkey/i],
                [
                  [d, C + "cast"],
                  [m, E],
                  [h, w]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [d, [m, S], [h, w]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [d, [m, R], [h, w]],
                [/(bravia[\w ]+)( bui|\))/i],
                [d, [m, F], [h, w]],
                [/(mitv-\w{5}) bui/i],
                [d, [m, M], [h, w]],
                [/Hbbtv.*(technisat) (.*);/i],
                [m, d, [h, w]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                [
                  [m, $],
                  [d, $],
                  [h, w]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[h, w]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [m, d, [h, g]],
                [/droid.+; (shield) bui/i],
                [d, [m, "Nvidia"], [h, g]],
                [/(playstation [345portablevi]+)/i],
                [d, [m, F], [h, g]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [d, [m, N], [h, g]],
                [/((pebble))app/i],
                [m, d, [h, _]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [d, [m, L], [h, _]],
                [/droid.+; (glass) \d/i],
                [d, [m, E], [h, _]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [d, [m, B], [h, _]],
                [/(quest( 2| pro)?)/i],
                [d, [m, j], [h, _]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [m, [h, x]],
                [/(aeobc)\b/i],
                [d, [m, S], [h, x]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [d, [h, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [d, [h, b]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[h, b]],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [[h, y]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [d, [m, "Generic"]]
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [f, [p, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [f, [p, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i
                ],
                [p, f],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [f, p]
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [p, f],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                ],
                [p, [f, K, Y]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [p, "Windows"],
                  [f, K, Y]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                [
                  [f, /_/g, "."],
                  [p, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                  [p, Z],
                  [f, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [f, p],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i
                ],
                [p, f],
                [/\(bb(10);/i],
                [f, [p, A]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [f, [p, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [f, [p, W + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [f, [p, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [f, [p, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [f, [p, C + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[p, q], f],
                [
                  /panasonic;(viera)/i,
                  /(netrange)mmh/i,
                  /(nettv)\/(\d+\.[\w\.]+)/i,
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i
                ],
                [p, f],
                [/(sunos) ?([\w\.\d]*)/i],
                [[p, "Solaris"], f],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i
                ],
                [p, f]
              ]
            },
            J = function (e, t) {
              if ((typeof e === c && ((t = e), (e = i)), !(this instanceof J))) return new J(e, t).getResult();
              var s = typeof r !== a && r.navigator ? r.navigator : i,
                n = e || (s && s.userAgent ? s.userAgent : ""),
                g = s && s.userAgentData ? s.userAgentData : i,
                w = t
                  ? (function (e, t) {
                      var s = {};
                      for (var n in e) t[n] && t[n].length % 2 == 0 ? (s[n] = t[n].concat(e[n])) : (s[n] = e[n]);
                      return s;
                    })(Q, t)
                  : Q,
                _ = s && s.userAgent == n;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[p] = i),
                    (t[f] = i),
                    z.call(t, n, w.browser),
                    (t[l] = typeof (e = t[f]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : i),
                    _ && s && s.brave && typeof s.brave.isBrave == o && (t[p] = "Brave"),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[v] = i), z.call(e, n, w.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[m] = i),
                    (e[d] = i),
                    (e[h] = i),
                    z.call(e, n, w.device),
                    _ && !e[h] && g && g.mobile && (e[h] = y),
                    _ &&
                      "Macintosh" == e[d] &&
                      s &&
                      typeof s.standalone !== a &&
                      s.maxTouchPoints &&
                      s.maxTouchPoints > 2 &&
                      ((e[d] = "iPad"), (e[h] = b)),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[p] = i), (e[f] = i), z.call(e, n, w.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (
                    (e[p] = i),
                    (e[f] = i),
                    z.call(e, n, w.os),
                    _ && !e[p] && g && "Unknown" != g.platform && (e[p] = g.platform.replace(/chrome os/i, q).replace(/macos/i, Z)),
                    e
                  );
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                  };
                }),
                (this.getUA = function () {
                  return n;
                }),
                (this.setUA = function (e) {
                  return (n = typeof e === u && e.length > 350 ? $(e, 350) : e), this;
                }),
                this.setUA(n),
                this
              );
            };
          (J.VERSION = "1.0.35"),
            (J.BROWSER = G([p, f, l])),
            (J.CPU = G([v])),
            (J.DEVICE = G([d, m, h, g, y, w, b, _, x])),
            (J.ENGINE = J.OS = G([p, f])),
            typeof t !== a
              ? (e.exports && (t = e.exports = J), (t.UAParser = J))
              : s.amdO
              ? (n = function () {
                  return J;
                }.call(t, s, t, e)) === i || (e.exports = n)
              : typeof r !== a && (r.UAParser = J);
          var X = typeof r !== a && (r.jQuery || r.Zepto);
          if (X && !X.ua) {
            var ee = new J();
            (X.ua = ee.getResult()),
              (X.ua.get = function () {
                return ee.getUA();
              }),
              (X.ua.set = function (e) {
                ee.setUA(e);
                var t = ee.getResult();
                for (var s in t) X.ua[s] = t[s];
              });
          }
        })("object" == typeof window ? window : this);
      }
    },
    t = {};
  function s(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var i = (t[n] = { exports: {} });
    return e[n].call(i.exports, i, i.exports, s), i.exports;
  }
  (s.amdO = {}),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (s.d = (e, t) => {
      for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = new Error().stack);
        });
        return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
      }
      var t = e(function (e) {
          return function () {
            e(this), (this.name = "EmptyError"), (this.message = "no elements in sequence");
          };
        }),
        n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }),
            n(e, t)
          );
        };
      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function s() {
          this.constructor = e;
        }
        n(e, t), (e.prototype = null === t ? Object.create(t) : ((s.prototype = t.prototype), new s()));
      }
      function i(e, t) {
        var s,
          n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: []
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(a) {
          return function (c) {
            return (function (a) {
              if (s) throw new TypeError("Generator is already executing.");
              for (; i && ((i = 0), a[0] && (o = 0)), o; )
                try {
                  if (
                    ((s = 1),
                    n &&
                      (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) &&
                      !(r = r.call(n, a[1])).done)
                  )
                    return r;
                  switch (((n = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                    case 0:
                    case 1:
                      r = a;
                      break;
                    case 4:
                      return o.label++, { value: a[1], done: !1 };
                    case 5:
                      o.label++, (n = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (!((r = (r = o.trys).length > 0 && r[r.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        o = 0;
                        continue;
                      }
                      if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                        o.label = a[1];
                        break;
                      }
                      if (6 === a[0] && o.label < r[1]) {
                        (o.label = r[1]), (r = a);
                        break;
                      }
                      if (r && o.label < r[2]) {
                        (o.label = r[2]), o.ops.push(a);
                        break;
                      }
                      r[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  a = t.call(e, o);
                } catch (e) {
                  (a = [6, e]), (n = 0);
                } finally {
                  s = r = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      }
      function o(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          s = t && e[t],
          n = 0;
        if (s) return s.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function a(e, t) {
        var s = "function" == typeof Symbol && e[Symbol.iterator];
        if (!s) return e;
        var n,
          r,
          i = s.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) o.push(n.value);
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            n && !n.done && (s = i.return) && s.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        return o;
      }
      function c(e, t, s) {
        if (s || 2 === arguments.length)
          for (var n, r = 0, i = t.length; r < i; r++) (!n && r in t) || (n || (n = Array.prototype.slice.call(t, 0, r)), (n[r] = t[r]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function u(e) {
        return this instanceof u ? ((this.v = e), this) : new u(e);
      }
      function l(e) {
        return "function" == typeof e;
      }
      Object.create, Object.create;
      var d = e(function (e) {
        return function (t) {
          e(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t);
        };
      });
      function p(e, t) {
        if (e) {
          var s = e.indexOf(t);
          0 <= s && e.splice(s, 1);
        }
      }
      var h = (function () {
          function e(e) {
            (this.initialTeardown = e), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
          }
          return (
            (e.prototype.unsubscribe = function () {
              var e, t, s, n, r;
              if (!this.closed) {
                this.closed = !0;
                var i = this._parentage;
                if (i)
                  if (((this._parentage = null), Array.isArray(i)))
                    try {
                      for (var u = o(i), p = u.next(); !p.done; p = u.next()) p.value.remove(this);
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        p && !p.done && (t = u.return) && t.call(u);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else i.remove(this);
                var h = this.initialTeardown;
                if (l(h))
                  try {
                    h();
                  } catch (e) {
                    r = e instanceof d ? e.errors : [e];
                  }
                var m = this._finalizers;
                if (m) {
                  this._finalizers = null;
                  try {
                    for (var f = o(m), g = f.next(); !g.done; g = f.next()) {
                      var y = g.value;
                      try {
                        v(y);
                      } catch (e) {
                        (r = null != r ? r : []), e instanceof d ? (r = c(c([], a(r)), a(e.errors))) : r.push(e);
                      }
                    }
                  } catch (e) {
                    s = { error: e };
                  } finally {
                    try {
                      g && !g.done && (n = f.return) && n.call(f);
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                }
                if (r) throw new d(r);
              }
            }),
            (e.prototype.add = function (t) {
              var s;
              if (t && t !== this)
                if (this.closed) v(t);
                else {
                  if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this);
                  }
                  (this._finalizers = null !== (s = this._finalizers) && void 0 !== s ? s : []).push(t);
                }
            }),
            (e.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (e.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
            }),
            (e.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e ? (this._parentage = null) : Array.isArray(t) && p(t, e);
            }),
            (e.prototype.remove = function (t) {
              var s = this._finalizers;
              s && p(s, t), t instanceof e && t._removeParent(this);
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
          var t;
        })(),
        m = h.EMPTY;
      function f(e) {
        return e instanceof h || (e && "closed" in e && l(e.remove) && l(e.add) && l(e.unsubscribe));
      }
      function v(e) {
        l(e) ? e() : e.unsubscribe();
      }
      var g = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1
        },
        y = {
          setTimeout: function (e, t) {
            for (var s = [], n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
            var r = y.delegate;
            return (null == r ? void 0 : r.setTimeout) ? r.setTimeout.apply(r, c([e, t], a(s))) : setTimeout.apply(void 0, c([e, t], a(s)));
          },
          clearTimeout: function (e) {
            var t = y.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0
        };
      function b(e) {
        y.setTimeout(function () {
          var t = g.onUnhandledError;
          if (!t) throw e;
          t(e);
        });
      }
      function w() {}
      var _ = x("C", void 0, void 0);
      function x(e, t, s) {
        return { kind: e, value: t, error: s };
      }
      var S = null;
      function L(e) {
        if (g.useDeprecatedSynchronousErrorHandling) {
          var t = !S;
          if ((t && (S = { errorThrown: !1, error: null }), e(), t)) {
            var s = S,
              n = s.errorThrown,
              r = s.error;
            if (((S = null), n)) throw r;
          }
        } else e();
      }
      var I = (function (e) {
          function t(t) {
            var s = e.call(this) || this;
            return (s.isStopped = !1), t ? ((s.destination = t), f(t) && t.add(s)) : (s.destination = U), s;
          }
          return (
            r(t, e),
            (t.create = function (e, t, s) {
              return new W(e, t, s);
            }),
            (t.prototype.next = function (e) {
              this.isStopped
                ? T(
                    (function (e) {
                      return x("N", e, void 0);
                    })(e),
                    this
                  )
                : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped ? T(x("E", void 0, e), this) : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped ? T(_, this) : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), e.prototype.unsubscribe.call(this), (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(h),
        A = Function.prototype.bind;
      function k(e, t) {
        return A.call(e, t);
      }
      var C = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  E(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  E(e);
                }
              else E(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  E(e);
                }
            }),
            e
          );
        })(),
        W = (function (e) {
          function t(t, s, n) {
            var r,
              i,
              o = e.call(this) || this;
            return (
              l(t) || !t
                ? (r = { next: null != t ? t : void 0, error: null != s ? s : void 0, complete: null != n ? n : void 0 })
                : o && g.useDeprecatedNextContext
                ? (((i = Object.create(t)).unsubscribe = function () {
                    return o.unsubscribe();
                  }),
                  (r = { next: t.next && k(t.next, i), error: t.error && k(t.error, i), complete: t.complete && k(t.complete, i) }))
                : (r = t),
              (o.destination = new C(r)),
              o
            );
          }
          return r(t, e), t;
        })(I);
      function E(e) {
        var t;
        g.useDeprecatedSynchronousErrorHandling
          ? ((t = e), g.useDeprecatedSynchronousErrorHandling && S && ((S.errorThrown = !0), (S.error = t)))
          : b(e);
      }
      function T(e, t) {
        var s = g.onStoppedNotification;
        s &&
          y.setTimeout(function () {
            return s(e, t);
          });
      }
      var U = {
        closed: !0,
        next: w,
        error: function (e) {
          throw e;
        },
        complete: w
      };
      function N(e, s) {
        var n = "object" == typeof s;
        return new Promise(function (r, i) {
          var o = new W({
            next: function (e) {
              r(e), o.unsubscribe();
            },
            error: i,
            complete: function () {
              n ? r(s.defaultValue) : i(new t());
            }
          });
          e.subscribe(o);
        });
      }
      const O = (e) => "failure" === e.tag,
        D = (e) => e.data;
      function P(e, t) {
        throw new Error(t ?? `Unreachable code detected (${e})`);
      }
      function R(e) {
        if ("undefined" == typeof chrome) return !1;
        const t = e.split(".").reduce((e, t) => e?.[t], chrome);
        return Boolean(t);
      }
      function F() {
        if (!R("runtime.getManifest")) throw new Error("No runtime.getManifest support");
        return chrome.runtime.getManifest();
      }
      var M,
        B = s(473),
        j = s.n(B);
      function q() {
        return new (j())(
          (function () {
            const e =
              "object" == typeof window
                ? window.navigator
                : "object" == typeof self && "function" == typeof importScripts
                ? self.navigator
                : void 0;
            return e?.userAgent;
          })(),
          {
            browser: [
              [/(AVG|Avast)\/([\w.]+)/i],
              [[j().BROWSER.NAME, "Avast"], j().BROWSER.VERSION],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i],
              [[j().BROWSER.NAME, "Edge"], j().BROWSER.VERSION]
            ]
          }
        ).getResult();
      }
      s(656),
        (function (e) {
          (e.CHROME = "Chrome"), (e.FIREFOX = "Firefox"), (e.EDGE = "Edge"), (e.SAFARI = "Safari"), (e.OPERA = "Opera");
        })(M || (M = {}));
      var Z = s(796);
      const G = {
          loginStatusChanged: (0, Z.LW)({ noBuffer: !0 }),
          localAccountsListUpdated: (0, Z.LW)({ noBuffer: !0 }),
          openSessionProgressChanged: (0, Z.LW)({ noBuffer: !0 }),
          openSessionTokenSent: (0, Z.LW)({ noBuffer: !0 }),
          openSessionDashlaneAuthenticator: (0, Z.LW)({ noBuffer: !0 }),
          openSessionOTPSent: (0, Z.LW)({ noBuffer: !0 }),
          openSessionOTPForNewDeviceRequired: (0, Z.LW)({ noBuffer: !0 }),
          openSessionAskMasterPassword: (0, Z.LW)({ noBuffer: !0 }),
          openSessionTokenWarning: (0, Z.LW)({ noBuffer: !0 }),
          openSessionExtraDeviceTokenRequired: (0, Z.LW)({ noBuffer: !0 }),
          openSessionMasterPasswordLess: (0, Z.LW)({ noBuffer: !0 }),
          openSessionSsoRedirectionToIdpRequired: (0, Z.LW)({ noBuffer: !0 }),
          openSessionFailed: (0, Z.LW)({ noBuffer: !0 }),
          sessionSyncStatus: (0, Z.LW)({ noBuffer: !0 }),
          deactivateDeviceResult: (0, Z.LW)({ noBuffer: !0 }),
          changeDeviceNameResult: (0, Z.LW)({ noBuffer: !0 }),
          accountInfoChanged: (0, Z.LW)({ noBuffer: !0 }),
          dataModelUpdated: (0, Z.LW)({ noBuffer: !0 }),
          accountFeaturesChanged: (0, Z.LW)({ noBuffer: !0 }),
          webOnboardingModeUpdated: (0, Z.LW)({ noBuffer: !0 }),
          askWebsiteInfo: (0, Z.LW)({ noBuffer: !0 }),
          getAccountInfo: (0, Z.LW)({ noBuffer: !0 }),
          getAnonymousLogsMetadata: (0, Z.LW)({ noBuffer: !0 }),
          checkIfMasterPasswordIsValid: (0, Z.LW)({ noBuffer: !0 }),
          openSession: (0, Z.LW)({ noBuffer: !0 }),
          openSessionWithToken: (0, Z.LW)({ noBuffer: !0 }),
          openSessionWithDashlaneAuthenticator: (0, Z.LW)({ noBuffer: !0 }),
          cancelDashlaneAuthenticatorRegistration: (0, Z.LW)(),
          openSessionWithOTP: (0, Z.LW)({ noBuffer: !0 }),
          openSessionWithOTPForNewDevice: (0, Z.LW)({ noBuffer: !0 }),
          openSessionWithMasterPassword: (0, Z.LW)({ noBuffer: !0 }),
          openExtraDeviceSession: (0, Z.LW)({ noBuffer: !0 }),
          openSessionWithExtraDeviceToken: (0, Z.LW)({ noBuffer: !0 }),
          openSessionResendToken: (0, Z.LW)({ noBuffer: !0 }),
          sessionForceSync: (0, Z.LW)({ noBuffer: !0 }),
          closeSession: (0, Z.LW)({ noBuffer: !0 }),
          lockSession: (0, Z.LW)({ noBuffer: !0 }),
          exceptionLog: (0, Z.LW)({ noBuffer: !0 }),
          getDevicesList: (0, Z.LW)({ noBuffer: !0 }),
          getLocalAccountsList: (0, Z.LW)({ noBuffer: !0 }),
          deactivateDevice: (0, Z.LW)({ noBuffer: !0 }),
          changeDeviceName: (0, Z.LW)({ noBuffer: !0 }),
          updateWebOnboardingMode: (0, Z.LW)({ noBuffer: !0 })
        },
        V = { noBuffer: !0 },
        H = () => (0, Z.LW)(V),
        $ = { participateToUserABTest: (0, Z.LW)() },
        z = { getUserABTestVariant: (0, Z.LW)() },
        K = { liveUserABTestVariant: H() },
        Y = { editContactInfo: (0, Z.LW)() },
        Q = { getContactInfo: (0, Z.LW)() },
        J = { liveContactInfo: H() },
        X = {
          refreshU2FDevicesList: (0, Z.LW)(),
          removeU2FAuthenticator: (0, Z.LW)(),
          refreshTwoFactorAuthenticationInfo: (0, Z.LW)(),
          startTwoFactorAuthenticationEnableFlow: (0, Z.LW)(),
          stopTwoFactorAuthenticationEnableFlow: (0, Z.LW)(),
          continueTwoFactorAuthenticationEnableFlow: (0, Z.LW)(),
          backTwoFactorAuthenticationEnableFlow: (0, Z.LW)(),
          startTwoFactorAuthenticationDisableFlow: (0, Z.LW)(),
          stopTwoFactorAuthenticationDisableFlow: (0, Z.LW)(),
          continueTwoFactorAuthenticationDisableFlow: (0, Z.LW)(),
          backTwoFactorAuthenticationDisableFlow: (0, Z.LW)()
        },
        ee = {
          getU2FDevicesList: (0, Z.LW)(),
          getTwoFactorAuthenticationEnableStage: (0, Z.LW)(),
          getTwoFactorAuthenticationDisableStage: (0, Z.LW)()
        },
        te = { liveU2FDevicesList: H(), liveTwoFactorAuthenticationEnableStage: H(), liveTwoFactorAuthenticationDisableStage: H() },
        se = {
          enableWebAuthnAuthentication: (0, Z.LW)(),
          initEnableWebAuthnAuthentication: (0, Z.LW)(),
          refreshAvailableWebAuthnAuthenticators: (0, Z.LW)(),
          refreshWebAuthnAuthenticators: (0, Z.LW)(),
          initRegisterWebAuthnAuthenticator: (0, Z.LW)(),
          registerWebAuthnAuthenticator: (0, Z.LW)(),
          initOpenSessionWithWebAuthnAuthenticator: (0, Z.LW)(),
          openSessionWithWebAuthnAuthenticator: (0, Z.LW)(),
          disableWebAuthnAuthentication: (0, Z.LW)(),
          removeWebAuthnAuthenticator: (0, Z.LW)(),
          initUserVerificationWithWebAuthn: (0, Z.LW)()
        },
        ne = { getWebAuthnAuthenticators: (0, Z.LW)(), getWebAuthnAuthenticationOptedIn: (0, Z.LW)() },
        re = { liveWebAuthnAuthenticators: H(), liveWebAuthnAuthenticationOptedIn: H() },
        ie = (0, Z.mt)(
          {
            registerDevice: (0, Z.LW)(),
            requestExtraDeviceToken: (0, Z.LW)(),
            requestEmailToken: (0, Z.LW)(),
            requestPaymentUpdateAuthenticationToken: (0, Z.LW)(),
            setReactivationStatus: (0, Z.LW)()
          },
          se,
          X
        ),
        oe = (0, Z.mt)(
          {
            getHasOtp2Type: (0, Z.LW)(),
            getUserOtpType: (0, Z.LW)(),
            getReactivationStatus: (0, Z.LW)(),
            getAvailableUserVerificationMethods: (0, Z.LW)()
          },
          ne,
          ee
        ),
        ae = (0, Z.mt)({ liveReactivationStatus: H() }, re, te),
        ce = { changeMasterPassword: (0, Z.LW)() },
        ue = { liveChangeMasterPasswordStatus: H() },
        le = { changeUserCrypto: (0, Z.LW)() },
        de = { getCanUserChangeCrypto: (0, Z.LW)(), getUserDerivationMethod: (0, Z.LW)() },
        pe = { liveUserDerivationMethod: H() },
        he = { getDarkWebInsightsReportResults: (0, Z.LW)(), getDarkWebInsightsSummary: (0, Z.LW)() },
        me = { getBankAccount: (0, Z.LW)(), getBankAccounts: (0, Z.LW)() },
        fe = { liveBankAccount: H(), liveBankAccounts: H() },
        ve = { addBankAccount: (0, Z.LW)(), updateBankAccount: (0, Z.LW)(), deleteBankAccount: (0, Z.LW)() },
        ge = {
          getBreach: (0, Z.LW)(),
          getBreaches: (0, Z.LW)(),
          getBreachesPage: (0, Z.LW)(),
          getBreachesPaginationToken: (0, Z.LW)(),
          getBreachesUpdateStatus: (0, Z.LW)()
        },
        ye = { liveBreach: H(), liveBreaches: H(), liveBreachesBatch: H(), liveBreachesUpdaterStatus: H() },
        be = { updateBreachStatus: (0, Z.LW)() },
        we = {
          addCollection: (0, Z.LW)(),
          deleteCollection: (0, Z.LW)(),
          removeItemsFromCollections: (0, Z.LW)(),
          updateCollection: (0, Z.LW)()
        },
        _e = {
          addCredential: (0, Z.LW)(),
          deleteCredential: (0, Z.LW)(),
          deleteCredentialsInBulk: (0, Z.LW)(),
          updateCredential: (0, Z.LW)(),
          updateLinkedWebsites: (0, Z.LW)()
        },
        xe = {
          canUserAddNewCredential: (0, Z.LW)(),
          getCredential: (0, Z.LW)(),
          getCredentialCategories: (0, Z.LW)(),
          getCredentials: (0, Z.LW)(),
          getCredentialsByDomain: (0, Z.LW)(),
          getCredentialsCount: (0, Z.LW)(),
          getCredentialLimitStatus: (0, Z.LW)(),
          getCredentialsPage: (0, Z.LW)(),
          getCredentialsPaginationToken: (0, Z.LW)(),
          getDashlaneDefinedLinkedWebsites: (0, Z.LW)(),
          getShouldShowRequireMasterPassword: (0, Z.LW)()
        },
        Se = {
          liveCanUserAddNewCredential: H(),
          liveCredential: H(),
          liveCredentials: H(),
          liveCredentialsByDomain: H(),
          liveCredentialsBatch: H(),
          liveCredentialsCount: H(),
          liveCredentialLimitStatus: H()
        },
        Le = { getIsForcedDomainsEnabled: (0, Z.LW)() },
        Ie = { getPersonalDataExport: (0, Z.LW)() },
        Ae = {
          getGeneratedPassword: (0, Z.LW)(),
          getGeneratedPasswordsCount: (0, Z.LW)(),
          getGeneratedPasswords: (0, Z.LW)(),
          getGeneratedPasswordsPage: (0, Z.LW)(),
          getGeneratedPasswordsPaginationToken: (0, Z.LW)()
        },
        ke = { liveGeneratedPasswordsCount: H(), liveGeneratedPasswords: H() },
        Ce = { saveGeneratedPassword: (0, Z.LW)() },
        We = { getDriverLicense: (0, Z.LW)(), getDriverLicenses: (0, Z.LW)() },
        Ee = { liveDriverLicense: H(), liveDriverLicenses: H() },
        Te = { addDriverLicense: (0, Z.LW)(), editDriverLicense: (0, Z.LW)(), deleteDriverLicense: (0, Z.LW)() },
        Ue = { getFiscalId: (0, Z.LW)(), getFiscalIds: (0, Z.LW)() },
        Ne = { liveFiscalId: H(), liveFiscalIds: H() },
        Oe = { addFiscalId: (0, Z.LW)(), editFiscalId: (0, Z.LW)(), deleteFiscalId: (0, Z.LW)() },
        De = { getIdCard: (0, Z.LW)(), getIdCards: (0, Z.LW)() },
        Pe = { liveIdCard: H(), liveIdCards: H() },
        Re = { addIdCard: (0, Z.LW)(), editIdCard: (0, Z.LW)(), deleteIdCard: (0, Z.LW)() },
        Fe = { getPassport: (0, Z.LW)(), getPassports: (0, Z.LW)() },
        Me = { livePassport: H(), livePassports: H() },
        Be = { addPassport: (0, Z.LW)(), editPassport: (0, Z.LW)(), deletePassport: (0, Z.LW)() },
        je = { getSocialSecurityId: (0, Z.LW)(), getSocialSecurityIds: (0, Z.LW)() },
        qe = { liveSocialSecurityId: H(), liveSocialSecurityIds: H() },
        Ze = { addSocialSecurityId: (0, Z.LW)(), editSocialSecurityId: (0, Z.LW)(), deleteSocialSecurityId: (0, Z.LW)() },
        Ge = (0, Z.mt)(We, Ue, De, Fe, je),
        Ve = (0, Z.mt)(Ee, Ne, Pe, Me, qe),
        He = (0, Z.mt)(Te, Oe, Re, Be, Ze),
        $e = { getImportPersonalDataStatus: (0, Z.LW)() },
        ze = { liveImportPersonalDataStatus: H() },
        Ke = { importPersonalData: (0, Z.LW)(), previewPersonalData: (0, Z.LW)(), dismissPersonalDataImportNotifications: (0, Z.LW)() },
        Ye = { getPasskey: (0, Z.LW)(), getPasskeys: (0, Z.LW)(), getPasskeysForDomain: (0, Z.LW)() },
        Qe = { livePasskey: H(), livePasskeys: H() },
        Je = { addPasskey: (0, Z.LW)(), updatePasskey: (0, Z.LW)(), deletePasskey: (0, Z.LW)() },
        Xe = {
          getPasswordHistory: (0, Z.LW)(),
          getHasPasswordHistory: (0, Z.LW)(),
          getPasswordHistoryPage: (0, Z.LW)(),
          getPasswordHistoryPaginationToken: (0, Z.LW)()
        },
        et = { livePasswordHistory: H(), livePasswordHistoryBatch: H() },
        tt = { getPaymentCard: (0, Z.LW)(), getPaymentCards: (0, Z.LW)() },
        st = { livePaymentCard: H(), livePaymentCards: H() },
        nt = { addPaymentCard: (0, Z.LW)(), updatePaymentCard: (0, Z.LW)(), deletePaymentCard: (0, Z.LW)() },
        rt = { getAddresses: (0, Z.LW)(), getAddress: (0, Z.LW)() },
        it = { liveAddress: H(), liveAddresses: H() },
        ot = { getCompanies: (0, Z.LW)(), getCompany: (0, Z.LW)() },
        at = { liveCompanies: H(), liveCompany: H() },
        ct = { getEmail: (0, Z.LW)(), getEmails: (0, Z.LW)() },
        ut = { liveEmail: H(), liveEmails: H() },
        lt = { getIdentities: (0, Z.LW)(), getIdentitiesCount: (0, Z.LW)(), getIdentity: (0, Z.LW)() },
        dt = { liveIdentities: H(), liveIdentitiesCount: H(), liveIdentity: H() },
        pt = { getPhone: (0, Z.LW)(), getPhones: (0, Z.LW)() },
        ht = { livePhone: H(), livePhones: H() },
        mt = { getPersonalWebsite: (0, Z.LW)(), getPersonalWebsites: (0, Z.LW)() },
        ft = { livePersonalWebsite: H(), livePersonalWebsites: H() },
        vt = (0, Z.mt)(rt, ot, ct, lt, pt, mt),
        gt = (0, Z.mt)(it, at, ut, dt, ht, ft),
        yt = {
          getSecureFilesQuota: (0, Z.LW)(),
          getSecureFilesInfoList: (0, Z.LW)(),
          getFileDownloadProgress: (0, Z.LW)(),
          getFileUploadProgress: (0, Z.LW)()
        },
        bt = { liveSecureFilesQuota: H(), liveFileDownloadProgress: H(), liveFileUploadProgress: H() },
        wt = {
          downloadSecureFile: (0, Z.LW)(),
          chunkTransferDone: (0, Z.LW)(),
          deleteSecureFile: (0, Z.LW)(),
          addSecureFile: (0, Z.LW)(),
          validateSecureFile: (0, Z.LW)(),
          commitSecureFile: (0, Z.LW)(),
          initSecureFilesStorageInfo: (0, Z.LW)(),
          clearSecureFileState: (0, Z.LW)()
        },
        _t = { setupDefaultNoteCategories: (0, Z.LW)() },
        xt = {
          getNote: (0, Z.LW)(),
          getNoteCategories: (0, Z.LW)(),
          getNotes: (0, Z.LW)(),
          getNotesCount: (0, Z.LW)(),
          getNotesPage: (0, Z.LW)(),
          getNotesPaginationToken: (0, Z.LW)()
        },
        St = { liveNote: H(), liveNotes: H(), liveNotesBatch: H(), liveNotesCount: H() },
        Lt = { addSecureNote: (0, Z.LW)(), updateSecureNote: (0, Z.LW)(), deleteSecureNote: (0, Z.LW)() },
        It = { getAnonymousUserId: (0, Z.LW)(), getIsUrlBanished: (0, Z.LW)(), arePasswordsProtected: (0, Z.LW)() },
        At = { liveArePasswordsProtected: H() },
        kt = { toggleDashlane: (0, Z.LW)(), updateProtectPasswordsSetting: (0, Z.LW)(), updateAutofillSettings: (0, Z.LW)() },
        Ct = { getSpace: (0, Z.LW)(), getSpaces: (0, Z.LW)() },
        Wt = { getAutofillProtectionContext: (0, Z.LW)() },
        Et = { disableVaultItemProtection: (0, Z.LW)() },
        Tt = {
          getSecret: (0, Z.LW)(),
          getSecrets: (0, Z.LW)(),
          getSecretsCount: (0, Z.LW)(),
          getSecretsPage: (0, Z.LW)(),
          getSecretsPaginationToken: (0, Z.LW)()
        },
        Ut = { liveSecret: H(), liveSecrets: H(), liveSecretsBatch: H(), liveSecretsCount: H() },
        Nt = { addSecret: (0, Z.LW)(), updateSecret: (0, Z.LW)(), deleteSecret: (0, Z.LW)() },
        Ot = (0, Z.mt)(me, ge, xe, Le, Ae, Ge, $e, xt, Ye, Xe, tt, vt, Tt, yt, It, Ct, Wt),
        Dt = (0, Z.mt)(fe, ye, Se, ke, Ve, ze, St, Qe, et, st, gt, Ut, bt, At),
        Pt = (0, Z.mt)(ve, be, we, _e, Ie, Ce, He, Ke, Lt, Je, nt, Nt, wt, _t, kt, Et),
        Rt = {
          getFamilyDetails: (0, Z.LW)(),
          joinFamily: (0, Z.LW)(),
          leaveFamily: (0, Z.LW)(),
          removeFamilyMember: (0, Z.LW)(),
          resetFamilyJoinToken: (0, Z.LW)()
        },
        Ft = { decipherRemoteFile: (0, Z.LW)() },
        Mt = { getFileContent: (0, Z.LW)() },
        Bt = { liveFileMeta: H() },
        jt = { setGlobalExtensionSettings: (0, Z.LW)(), getGlobalExtensionSettings: (0, Z.LW)() },
        qt = { evaluatePassword: (0, Z.LW)() },
        Zt = { logEvent: (0, Z.LW)(), logPageView: (0, Z.LW)(), flushQueue: (0, Z.LW)() },
        Gt = { logException: (0, Z.LW)() },
        Vt = {
          abortDeviceLimitFlow: (0, Z.LW)(),
          loginViaSSO: (0, Z.LW)(),
          unlinkPreviousDevice: (0, Z.LW)(),
          unlinkMultipleDevices: (0, Z.LW)()
        },
        Ht = { addLoginNotification: (0, Z.LW)(), clearAllStoredLoginNotification: (0, Z.LW)() },
        $t = { getLoginNotifications: (0, Z.LW)() },
        zt = { liveLoginNotifications: H() },
        Kt = { updateLoginStepInfo: (0, Z.LW)(), resetLoginStepInfo: (0, Z.LW)() },
        Yt = { getLoginStepInfo: (0, Z.LW)() },
        Qt = { liveLoginStepInfo: H() },
        Jt = { markNotificationAsInteracted: (0, Z.LW)(), markNotificationAsSeen: (0, Z.LW)(), markNotificationAsUnseen: (0, Z.LW)() },
        Xt = { getNotificationStatus: (0, Z.LW)() },
        es = { liveNotificationStatus: H() },
        ts = { getLoginDeviceLimitFlow: (0, Z.LW)() },
        ss = { liveLoginDeviceLimitFlow: H() },
        ns = { getTwoFactorAuthenticationInfo: (0, Z.LW)() },
        rs = { liveTwoFactorAuthenticationInfo: H() },
        is = {
          getLoginStatus: (0, Z.LW)(),
          getLocalAccounts: (0, Z.LW)(),
          getIsSSOUser: (0, Z.LW)(),
          getSSOMigrationInfo: (0, Z.LW)(),
          getSessionInfo: (0, Z.LW)(),
          getMasterPasswordAndServerKey: (0, Z.LW)(),
          getUserCryptoSettings: (0, Z.LW)(),
          getSyncInfo: (0, Z.LW)(),
          getIsSyncInProgress: (0, Z.LW)(),
          getPremiumStatus: (0, Z.LW)(),
          getNodePremiumStatus: (0, Z.LW)(),
          getSubscriptionInformation: (0, Z.LW)(),
          getActiveSpaces: (0, Z.LW)(),
          getIsAuthenticated: (0, Z.LW)(),
          getSSOProviderInfo: (0, Z.LW)(),
          getUserLogin: (0, Z.LW)(),
          getPublicUserId: (0, Z.LW)(),
          getAnalyticsInstallationId: (0, Z.LW)(),
          getUserLoginStatus: (0, Z.LW)(),
          getWebOnboardingMode: (0, Z.LW)(),
          getPremiumChurningDismissDate: (0, Z.LW)(),
          getIsPaymentFailureChurningDismissed: (0, Z.LW)(),
          getCredentialSearchOrder: (0, Z.LW)(),
          getDidOpen: (0, Z.LW)(),
          getPlatformName: (0, Z.LW)(),
          getAccountAuthenticationType: (0, Z.LW)(),
          ...ts,
          ...ns
        },
        os = {
          liveLoginStatus: H(),
          liveDidOpen: H(),
          liveIsSSOUser: H(),
          liveSSOMigrationInfo: H(),
          liveSessionInfo: H(),
          liveSyncInfo: H(),
          liveIsSyncInProgress: H(),
          livePremiumStatus: H(),
          liveServiceProviderUrl: H(),
          liveWebOnboardingMode: H(),
          liveSubscriptionInformation: H(),
          ...ss,
          ...rs
        },
        as = {
          validateToken: (0, Z.LW)(),
          validateMasterPassword: (0, Z.LW)(),
          resetProtectedItemAutofillTimer: (0, Z.LW)(),
          forceSync: (0, Z.LW)(),
          updatePremiumChurningDismissDate: (0, Z.LW)(),
          setCredentialSearchOrder: (0, Z.LW)(),
          refreshSubscriptionInformation: (0, Z.LW)(),
          updateAccountRecoveryKeyPersonalSettings: (0, Z.LW)()
        },
        cs = { generatePassword: (0, Z.LW)(), generateAndSavePassword: (0, Z.LW)(), savePasswordGenerationSettings: (0, Z.LW)() },
        us = { getPasswordGenerationSettings: (0, Z.LW)() },
        ls = {
          cancelAutoRenew: (0, Z.LW)(),
          downloadCustomerInvoice: (0, Z.LW)(),
          fetchInvoiceList: (0, Z.LW)(),
          requestRefund: (0, Z.LW)()
        },
        ds = { getInvoicesCount: (0, Z.LW)(), getInvoiceList: (0, Z.LW)(), getInvoiceListYears: (0, Z.LW)() },
        ps = { disableCredentialProtection: (0, Z.LW)(), unlockProtectedItems: (0, Z.LW)() },
        hs = { areProtectedItemsUnlocked: (0, Z.LW)() },
        ms = { liveAreProtectedItemsUnlocked: H() },
        fs = {
          activateAccountRecovery: (0, Z.LW)(),
          setupMasterPasswordForRecovery: (0, Z.LW)(),
          deactivateAccountRecovery: (0, Z.LW)(),
          registerDeviceForRecovery: (0, Z.LW)(),
          startAccountRecovery: (0, Z.LW)(),
          sendRecoveryRequest: (0, Z.LW)(),
          cancelRecoveryRequest: (0, Z.LW)(),
          checkRecoveryRequestStatus: (0, Z.LW)(),
          recoverUserData: (0, Z.LW)(),
          checkDoesLocalRecoveryKeyExist: (0, Z.LW)(),
          isRecoveryRequestPending: (0, Z.LW)()
        },
        vs = {
          getRecoveryOptInSetting: (0, Z.LW)(),
          getShouldShowFeatureActivationModal: (0, Z.LW)(),
          getAccountRecoveryRequestCount: (0, Z.LW)()
        },
        gs = { liveAccountRecoveryRequestCount: H() },
        ys = {
          getAllSharedItemIds: (0, Z.LW)(),
          getMyAcceptedItemGroupUserMembers: (0, Z.LW)(),
          getMyAcceptedUserGroups: (0, Z.LW)(),
          getSharingCapacity: (0, Z.LW)(),
          isAllowedToShare: (0, Z.LW)(),
          getUserGroups: (0, Z.LW)(),
          getUserGroup: (0, Z.LW)(),
          getUserGroupPermissionLevel: (0, Z.LW)(),
          getUserGroupMembers: (0, Z.LW)(),
          getSharingUsers: (0, Z.LW)(),
          getSharingUserPermissionLevel: (0, Z.LW)()
        },
        bs = {
          liveAllSharedItemIds: H(),
          liveMyAcceptedItemGroupUserMembers: H(),
          liveMyAcceptedUserGroups: H(),
          liveSharingCapacity: H(),
          liveUserGroups: H(),
          liveUserGroupPermissionLevel: H(),
          liveSharingUsers: H(),
          liveSharingUserPermissionLevel: H()
        },
        ws = { convertItemToDashlaneXml: (0, Z.LW)(), shareItem: (0, Z.LW)() },
        _s = { getIsRecoveryEnabled: (0, Z.LW)() },
        xs = {
          getTeamInfo: (0, Z.LW)(),
          getMidCycleTierUpgradePrice: (0, Z.LW)(),
          getExpectedTaxInformation: (0, Z.LW)(),
          changeTierMidCycle: (0, Z.LW)(),
          computePlanPricing: (0, Z.LW)(),
          addSeats: (0, Z.LW)()
        },
        Ss = {
          getAdministrableUserGroup: (0, Z.LW)(),
          getAdministrableUserGroups: (0, Z.LW)(),
          isGroupNameAvailable: (0, Z.LW)(),
          getAdminProvisioningKey: (0, Z.LW)()
        },
        Ls = { liveAdministrableUserGroup: H(), liveAdministrableUserGroups: H(), liveAdminProvisioningKey: H() },
        Is = {
          registerTeamDomain: (0, Z.LW)(),
          completeTeamDomainRegistration: (0, Z.LW)(),
          deactivateTeamDomain: (0, Z.LW)(),
          getTeamDomains: (0, Z.LW)(),
          getTeamDevice: (0, Z.LW)(),
          listTeamDevices: (0, Z.LW)(),
          deactivateTeamDevice: (0, Z.LW)(),
          registerTeamDevice: (0, Z.LW)(),
          registerTeamDeviceAccount: (0, Z.LW)(),
          getEncryptionServiceConfig: (0, Z.LW)(),
          generateAndSaveEncryptionServiceConfig: (0, Z.LW)(),
          clearSelfHostedESSettings: (0, Z.LW)(),
          getTeamDeviceEncryptedConfig: (0, Z.LW)(),
          updateTeamDeviceEncryptedConfig: (0, Z.LW)(),
          updateTeamSettings: (0, Z.LW)(),
          parseMetadataFields: (0, Z.LW)(),
          persistAdminProvisioningKey: (0, Z.LW)(),
          removeAdminProvisioningKey: (0, Z.LW)(),
          createSSOConnectorConfig: (0, Z.LW)(),
          generateSSOConnectorKey: (0, Z.LW)(),
          startAuditLogsQuery: (0, Z.LW)(),
          getAuditLogQueryResults: (0, Z.LW)(),
          getRecoveryCodesAsTeamCaptain: (0, Z.LW)(),
          createInviteLink: (0, Z.LW)(),
          changeInviteLinkTeamKey: (0, Z.LW)(),
          toggleInviteLink: (0, Z.LW)(),
          getInviteLink: (0, Z.LW)(),
          requestInviteLinkToken: (0, Z.LW)(),
          getInviteLinkForAdmin: (0, Z.LW)(),
          getLastADSyncDate: (0, Z.LW)(),
          getSpecialUserGroupInviteValuesForMemberInTeam: (0, Z.LW)(),
          getSpecialUserGroupRevision: (0, Z.LW)()
        },
        As = { getVisibleUserMessages: (0, Z.LW)(), getUserMessages: (0, Z.LW)() },
        ks = { liveUserMessages: H(), liveVisibleUserMessages: H() },
        Cs = { dismissUserMessages: (0, Z.LW)(), addUserMessage: (0, Z.LW)() },
        Ws = { getVpnAccount: (0, Z.LW)(), getVpnCapabilitySetting: (0, Z.LW)() },
        Es = { liveVpnAccount: H() },
        Ts = { activateVpnAccount: (0, Z.LW)(), clearVpnAccountErrors: (0, Z.LW)(), completeVpnAccountActivation: (0, Z.LW)() },
        Us = { getAnonymousComputerId: (0, Z.LW)(), getPlatformInfo: (0, Z.LW)() },
        Ns = { cleanRemotelyRemovedProfiles: (0, Z.LW)() },
        Os = (0, Z.mt)($, ie, ce, Y, le, he, Pt, Zt, Gt, Rt, jt, qt, Vt, Ht, Kt, Jt, as, cs, ls, ps, fs, Ft, ws, xs, Is, Cs, Ts, Ns),
        Ds = { getSubscriptionCode: (0, Z.LW)() },
        Ps = { liveSubscriptionCode: H() },
        Rs = {
          getSingleAddressForAutofill: (0, Z.LW)(),
          getMultipleAddressesForAutofill: (0, Z.LW)(),
          getSingleBankAccountForAutofill: (0, Z.LW)(),
          getMultipleBankAccountsForAutofill: (0, Z.LW)(),
          getSingleCompanyForAutofill: (0, Z.LW)(),
          getMultipleCompaniesForAutofill: (0, Z.LW)(),
          getSingleCredentialForAutofill: (0, Z.LW)(),
          getMultipleCredentialsForAutofill: (0, Z.LW)(),
          getSingleDriverLicenseForAutofill: (0, Z.LW)(),
          getMultipleDriverLicensesForAutofill: (0, Z.LW)(),
          getSingleEmailForAutofill: (0, Z.LW)(),
          getMultipleEmailsForAutofill: (0, Z.LW)(),
          getSingleFiscalIdForAutofill: (0, Z.LW)(),
          getMultipleFiscalIdsForAutofill: (0, Z.LW)(),
          getSingleGeneratedPasswordForAutofill: (0, Z.LW)(),
          getMultipleGeneratedPasswordsForAutofill: (0, Z.LW)(),
          getSingleIdCardForAutofill: (0, Z.LW)(),
          getMultipleIdCardsForAutofill: (0, Z.LW)(),
          getSingleIdentityForAutofill: (0, Z.LW)(),
          getMultipleIdentitiesForAutofill: (0, Z.LW)(),
          getSingleNoteForAutofill: (0, Z.LW)(),
          getMultipleNotesForAutofill: (0, Z.LW)(),
          getSinglePasskeyForAutofill: (0, Z.LW)(),
          getSinglePassportForAutofill: (0, Z.LW)(),
          getMultiplePassportsForAutofill: (0, Z.LW)(),
          getSinglePaymentCardForAutofill: (0, Z.LW)(),
          getMultiplePaymentCardsForAutofill: (0, Z.LW)(),
          getSinglePersonalWebsiteForAutofill: (0, Z.LW)(),
          getMultiplePersonalWebsitesForAutofill: (0, Z.LW)(),
          getSinglePhoneForAutofill: (0, Z.LW)(),
          getMultiplePhonesForAutofill: (0, Z.LW)(),
          getSingleSocialSecurityIdForAutofill: (0, Z.LW)(),
          getMultipleSocialSecurityIdsForAutofill: (0, Z.LW)(),
          getAutofillSettingOnUrlForAutofill: (0, Z.LW)()
        },
        Fs = { getHasFeature: (0, Z.LW)(), getFeatures: (0, Z.LW)() },
        Ms = {
          getIsBrazeContentDisabled: (0, Z.LW)(),
          getIsLoginFlowMigrationDisabled: (0, Z.LW)(),
          getIsAutoSSOLoginDisabled: (0, Z.LW)()
        },
        Bs = { liveIsBrazeContentDisabled: H(), liveIsLoginFlowMigrationDisabled: H(), liveIsAutoSSOLoginDisabled: H() },
        js = {
          getAllBanks: (0, Z.LW)(),
          getAllCallingCodes: (0, Z.LW)(),
          getBanks: (0, Z.LW)(),
          getSecureDocumentsExtensionsList: (0, Z.LW)()
        },
        qs = (0, Z.mt)(z, oe, Rs, Q, de, Ot, Us, Fs, Ms, $t, Yt, Xt, is, us, ds, hs, vs, Mt, ys, js, Ds, _s, Ss, As, Ws),
        Zs = { liveAccountCreated: H() },
        Gs = { livePhishingURLList: H() },
        Vs = (0, Z.mt)(K, Zs, Gs, ae, ue, J, pe, Dt, Bs, zt, Qt, es, os, ms, gs, Bt, bs, Ps, Ls, ks, Es),
        Hs = (0, Z.mt)(Os, qs, Vs);
      let $s = (function (e) {
        return (
          (e.PopupCarbon = "Popup"),
          (e.PopupCarbonLoader = "PopupCarbonLoader"),
          (e.OptionsCarbon = "OptionsCarbon"),
          (e.WebappCarbon = "leeloo"),
          e
        );
      })({});
      function zs(e) {
        if (!R("runtime.connect")) throw new Error("No runtime.connect support");
        return chrome.runtime.connect(e);
      }
      class Ks extends Z.oN {
        constructor(e) {
          super(),
            (this.name = void 0),
            (this.port = void 0),
            (this.onMessageListener = (e) => {
              this._messageReceived(e);
            }),
            (this.onDisconnectListener = () => {
              this.port &&
                (this.port.onMessage.removeListener(this.onMessageListener),
                this.port.onDisconnect.removeListener(this.onDisconnectListener),
                (this.port = void 0)),
                this._disconnected();
            }),
            (this.name = e);
        }
        connect() {
          self.chrome && this.setup(this.name);
        }
        autoReconnect() {
          this.connect();
        }
        send(e) {
          if (!this.port) throw new Error("No port to send message");
          this.port.postMessage(e);
        }
        setup(e) {
          this.port && this.onDisconnectListener(),
            (this.port = zs({ name: e })),
            this.port.onMessage.addListener(this.onMessageListener),
            this.port.onDisconnect.addListener(this.onDisconnectListener),
            this._connected();
        }
      }
      const { OptionsCarbon: Ys } = $s,
        Qs = new Ks(Ys);
      Qs.connect();
      const Js = (0, Z.mt)(G, Hs),
        Xs = (0, Z.nv)({ events: Js, channels: [Qs] }),
        en = (e) => {
          const t = e.querySelector("#usage-consent");
          if (((s = t), !Boolean(s && s instanceof HTMLInputElement))) throw new Error("Missing checkbox.");
          var s;
          return { usageConsentCheckbox: t };
        },
        tn = "extng.loginFlow.forceLegacyFallback",
        sn = ({ target: e }) => {
          window.localStorage.setItem(tn, String(e.checked));
        };
      var nn;
      !(function (e) {
        (e.DEV = "DEV"), (e.QA = "QA"), (e.NIGHTLY = "NIGHTLY"), (e.BETA = "BETA"), (e.PRODUCTION = "PRODUCTION");
      })(nn || (nn = {}));
      const rn = 500,
        on = ["saved-checkmark", "saved-checkmark-hidden"],
        an = Object.freeze([nn.DEV, nn.NIGHTLY]),
        cn = ["api", "nitro"];
      let un;
      async function ln(e, t, s) {
        const { editSettingsForStaging: n } = e.webServices.commands,
          r = s.targetStagingCheckbox.checked
            ? {
                override: !0,
                baseUrlOverride: s.stagingURLInput.value,
                cloudflareAccessKeyOverride: s.stagingCloudflareAccessKeyInput.value,
                cloudflareSecretKeyOverride: s.stagingCloudflareSecretKeyInput.value
              }
            : { override: !1 };
        await n({ [t]: r });
      }
      function dn(e, t) {
        const s = document.getElementById(`staging-urls-fieldset-${e}`);
        if (!(s && s instanceof HTMLFieldSetElement)) throw new Error(`No staging-urls-fieldset-${e}`);
        s.classList.toggle("hidden", !t);
      }
      function pn(e) {
        const t = document.getElementById(`staging-saved-${e}`);
        if (!t) throw new Error(`No staging-saved-${e}`);
        window.clearTimeout(un),
          t.classList.remove(...on),
          t.classList.add(...on),
          (un = window.setTimeout(() => {
            t.classList.remove(...on);
          }, rn));
      }
      class hn {}
      var mn;
      !(function (e) {
        (e.User = "user"), (e.Device = "device");
      })(mn || (mn = {}));
      class fn extends hn {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const vn = (e = { scope: mn.User }) => {
        var t;
        return ((t = class extends fn {}).metadata = e), t;
      };
      class gn extends hn {
        constructor(e) {
          super(), (this.body = e);
        }
      }
      const yn = (...[e = { scope: mn.User }]) => {
          var t;
          return ((t = class extends gn {}).metadata = e), t;
        },
        bn = (e = { scope: mn.User }) => {
          var t;
          return ((t = class extends gn {}).metadata = e), t;
        };
      class wn {
        constructor(e) {
          this.body = e;
        }
      }
      const _n = (e = { scope: mn.User }) => {
          var t;
          return ((t = class extends wn {}).metadata = e), t;
        },
        xn = (e, t) =>
          Object.entries(e).reduce(
            (e, [s, n]) => (
              (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = n), e
            ),
            {}
          ),
        Sn = (e) => ({ name: e.name, commands: xn(e.commands, "Command"), queries: xn(e.queries, "Query"), events: xn(e.events, "Event") });
      class Ln extends vn({ scope: mn.Device }) {}
      class In extends yn({ scope: mn.Device }) {}
      class An extends _n({ scope: mn.User }) {}
      const kn = Sn({
        commands: { SetActiveUserCommand: In },
        events: { activeUserSet: An },
        name: "requestContext",
        queries: { ActiveUserQuery: Ln }
      });
      class Cn extends yn({ scope: mn.Device }) {}
      class Wn extends yn({ scope: mn.Device }) {}
      const En = Sn({ name: "taskTracking", commands: { startTaskTracking: Cn, terminateTaskTracking: Wn }, events: {}, queries: {} }),
        Tn = (e, t) =>
          (() => {
            const e = (t) => ({
              define: () => t,
              with: (s) => {
                const n = { api: s.module, main: s.on, queryOnly: s.queryOnly ?? [] },
                  r = { [s.module.name]: n };
                return e({ ...t, ...r });
              }
            });
            return e({});
          })()
            .with({ module: kn, on: e })
            .with({ module: En, on: e });
      Tn("node");
      class Un extends bn({ scope: mn.Device }) {}
      class Nn extends bn({ scope: mn.Device }) {}
      class On extends yn({ scope: mn.Device }) {}
      var Dn;
      const Pn = {
        ...((Dn = Os),
        Object.keys(Dn).reduce(
          (e, t) => ({ ...e, [`${t[0].toUpperCase().concat(t.substring(1))}Command`]: bn({ scope: mn.Device }) }),
          {}
        )),
        CarbonCommand: Un,
        CarbonLegacyLeelooCommand: Nn,
        MitigationDeleteGrapheneUserDataCommand: On
      };
      class Rn extends _n({ scope: mn.Device }) {}
      class Fn extends _n({ scope: mn.Device }) {}
      class Mn extends _n({ scope: mn.Device }) {}
      const Bn = { CarbonCommandResultEvent: Rn, CarbonLegacyEvent: Fn, CarbonLegacyDeviceRemotelyDeleted: Mn };
      class jn extends vn({ scope: mn.Device }) {}
      class qn extends vn({ scope: mn.Device }) {}
      var Zn, Gn;
      const Vn = Sn({
        name: "carbon-legacy",
        commands: Pn,
        queries: {
          ...((Zn = qs),
          (Gn = Vs),
          [...Object.keys(Zn), ...Object.keys(Gn)].reduce(
            (e, t) => ({ ...e, [`${t[0].toUpperCase().concat(t.substring(1))}Query`]: vn({ scope: mn.Device }) }),
            {}
          )),
          CarbonStateQuery: jn,
          CarbonStateListQuery: qn
        },
        events: Bn
      });
      class Hn extends yn({ scope: mn.User }) {}
      class $n extends yn({ scope: mn.User }) {}
      class zn extends vn({ scope: mn.User }) {}
      class Kn extends vn({ scope: mn.User }) {}
      const Yn = Sn({
        name: "breaches",
        commands: { dismissBreach: Hn, markBreachAsSeen: $n },
        events: {},
        queries: { breach: zn, unreadBreachesCount: Kn }
      });
      class Qn extends yn({ scope: mn.User }) {}
      const Jn = (e, t) =>
        class extends Error {
          constructor() {
            super(t), (this.tag = e);
          }
        };
      var Xn, er, tr;
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"),
          (e.ALREADY_SUBSCRIBED = "USER_HAS_ALREADY_AN_ACTIVE_SUBSCRIPTION"),
          (e.TOO_MANY_SUBSCRIPTIONS = "USER_HAS_TOO_MANY_SUBSCRIPTIONS"),
          (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(Xn || (Xn = {}));
      class sr extends Jn(Xn.INVALID_EMAIL, "") {}
      class nr extends Jn(Xn.ALREADY_SUBSCRIBED, "") {}
      class rr extends Jn(Xn.TOO_MANY_SUBSCRIPTIONS, "") {}
      class ir extends Jn(Xn.GENERIC_ERROR, "") {}
      class or extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.INVALID_EMAIL = "EMAIL_IS_INVALID"), (e.NO_SUBSCRIPTION = "USER_HAS_NO_SUBSCRIPTION"), (e.GENERIC_ERROR = "GENERIC_ERROR");
      })(er || (er = {}));
      class ar extends Jn(er.INVALID_EMAIL, "") {}
      class cr extends Jn(er.NO_SUBSCRIPTION, "") {}
      class ur extends Jn(er.GENERIC_ERROR, "") {}
      class lr extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.PENDING = "pending"), (e.ACTIVE = "active"), (e.DISABLED = "disabled");
      })(tr || (tr = {}));
      class dr extends vn() {}
      class pr extends vn({ scope: mn.User }) {}
      const hr = Sn({
        name: "emailMonitoring",
        commands: { dismissOnboardingNotification: Qn, optinEmail: or, optoutEmail: lr },
        events: {},
        queries: { emailList: dr, onboardingNotificationState: pr }
      });
      class mr extends yn({ scope: mn.User }) {}
      class fr extends yn({ scope: mn.User }) {}
      class vr extends _n({ scope: mn.User }) {}
      class gr extends vn({ scope: mn.User }) {}
      class yr extends vn({ scope: mn.User }) {}
      class br extends vn({ scope: mn.User }) {}
      class wr extends vn({ scope: mn.User }) {}
      class _r extends vn({ scope: mn.User }) {}
      class xr extends vn({ scope: mn.User }) {}
      class Sr extends vn({ scope: mn.User }) {}
      const Lr = Sn({
          name: "passwordHealth",
          commands: { updateIsCredentialExcluded: mr, recalculatePasswordHealth: fr },
          events: { passwordHealthComputationFinished: vr },
          queries: {
            credentialHealthData: gr,
            filterCredentials: yr,
            score: br,
            compromisedCredentials: wr,
            compromisedCredentialsIdsForBreach: _r,
            passwordHealthReport: xr,
            scoreForPassword: Sr
          }
        }),
        Ir = Sn({ name: "vaultReport", commands: {}, events: {}, queries: {} });
      class Ar extends vn() {}
      class kr extends yn({ scope: mn.User }) {}
      const Cr = Sn({
        name: "antiphishing",
        commands: { addAutoRedirectedDomain: kr },
        events: {},
        queries: { isAutoRedirectedDomain: Ar }
      });
      class Wr extends Jn("Cannot generate OTP code due to no OtpSecret or OtpUrl found for credential", "") {}
      class Er extends vn({ scope: mn.User }) {}
      class Tr extends Jn("Cannot generate OTP code for secret or url", "") {}
      class Ur extends vn({ scope: mn.User }) {}
      const Nr = Sn({ name: "otp", commands: {}, events: {}, queries: { otpCode: Er, otpCodeForSecretOrUrl: Ur } });
      class Or extends vn({ scope: mn.User }) {}
      class Dr extends vn({ scope: mn.User }) {}
      class Pr extends vn({ scope: mn.User }) {}
      class Rr extends vn({ scope: mn.User }) {}
      class Fr extends vn({ scope: mn.User }) {}
      class Mr extends vn({ scope: mn.User }) {}
      var Br;
      !(function (e) {
        (e.assertEqual = (e) => e),
          (e.assertIs = function (e) {}),
          (e.assertNever = function (e) {
            throw new Error();
          }),
          (e.arrayToEnum = (e) => {
            const t = {};
            for (const s of e) t[s] = s;
            return t;
          }),
          (e.getValidEnumValues = (t) => {
            const s = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
              n = {};
            for (const e of s) n[e] = t[e];
            return e.objectValues(n);
          }),
          (e.objectValues = (t) =>
            e.objectKeys(t).map(function (e) {
              return t[e];
            })),
          (e.objectKeys =
            "function" == typeof Object.keys
              ? (e) => Object.keys(e)
              : (e) => {
                  const t = [];
                  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && t.push(s);
                  return t;
                }),
          (e.find = (e, t) => {
            for (const s of e) if (t(s)) return s;
          }),
          (e.isInteger =
            "function" == typeof Number.isInteger
              ? (e) => Number.isInteger(e)
              : (e) => "number" == typeof e && isFinite(e) && Math.floor(e) === e),
          (e.joinValues = function (e, t = " | ") {
            return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
          }),
          (e.jsonStringifyReplacer = (e, t) => ("bigint" == typeof t ? t.toString() : t));
      })(Br || (Br = {}));
      const jr = Br.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set"
        ]),
        qr = (e) => {
          switch (typeof e) {
            case "undefined":
              return jr.undefined;
            case "string":
              return jr.string;
            case "number":
              return isNaN(e) ? jr.nan : jr.number;
            case "boolean":
              return jr.boolean;
            case "function":
              return jr.function;
            case "bigint":
              return jr.bigint;
            case "object":
              return Array.isArray(e)
                ? jr.array
                : null === e
                ? jr.null
                : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch
                ? jr.promise
                : "undefined" != typeof Map && e instanceof Map
                ? jr.map
                : "undefined" != typeof Set && e instanceof Set
                ? jr.set
                : "undefined" != typeof Date && e instanceof Date
                ? jr.date
                : jr.object;
            default:
              return jr.unknown;
          }
        },
        Zr = Br.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of"
        ]);
      class Gr extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          const t = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t), (this.name = "ZodError"), (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          const t =
              e ||
              function (e) {
                return e.message;
              },
            s = { _errors: [] },
            n = (e) => {
              for (const r of e.issues)
                if ("invalid_union" === r.code) r.unionErrors.map(n);
                else if ("invalid_return_type" === r.code) n(r.returnTypeError);
                else if ("invalid_arguments" === r.code) n(r.argumentsError);
                else if (0 === r.path.length) s._errors.push(t(r));
                else {
                  let e = s,
                    n = 0;
                  for (; n < r.path.length; ) {
                    const s = r.path[n];
                    n === r.path.length - 1
                      ? ((e[s] = e[s] || { _errors: [] }), e[s]._errors.push(t(r)))
                      : (e[s] = e[s] || { _errors: [] }),
                      (e = e[s]),
                      n++;
                  }
                }
            };
          return n(this), s;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, Br.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          const t = {},
            s = [];
          for (const n of this.issues) n.path.length > 0 ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n))) : s.push(e(n));
          return { formErrors: s, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      Gr.create = (e) => new Gr(e);
      const Vr = (e, t) => {
        let s;
        switch (e.code) {
          case Zr.invalid_type:
            s = e.received === jr.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
            break;
          case Zr.invalid_literal:
            s = `Invalid literal value, expected ${JSON.stringify(e.expected, Br.jsonStringifyReplacer)}`;
            break;
          case Zr.unrecognized_keys:
            s = `Unrecognized key(s) in object: ${Br.joinValues(e.keys, ", ")}`;
            break;
          case Zr.invalid_union:
            s = "Invalid input";
            break;
          case Zr.invalid_union_discriminator:
            s = `Invalid discriminator value. Expected ${Br.joinValues(e.options)}`;
            break;
          case Zr.invalid_enum_value:
            s = `Invalid enum value. Expected ${Br.joinValues(e.options)}, received '${e.received}'`;
            break;
          case Zr.invalid_arguments:
            s = "Invalid function arguments";
            break;
          case Zr.invalid_return_type:
            s = "Invalid function return type";
            break;
          case Zr.invalid_date:
            s = "Invalid date";
            break;
          case Zr.invalid_string:
            "object" == typeof e.validation
              ? "startsWith" in e.validation
                ? (s = `Invalid input: must start with "${e.validation.startsWith}"`)
                : "endsWith" in e.validation
                ? (s = `Invalid input: must end with "${e.validation.endsWith}"`)
                : Br.assertNever(e.validation)
              : (s = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid");
            break;
          case Zr.too_small:
            s =
              "array" === e.type
                ? `Array must contain ${e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
                : "string" === e.type
                ? `String must contain ${e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
                : "number" === e.type
                ? `Number must be greater than ${e.inclusive ? "or equal to " : ""}${e.minimum}`
                : "date" === e.type
                ? `Date must be greater than ${e.inclusive ? "or equal to " : ""}${new Date(e.minimum)}`
                : "Invalid input";
            break;
          case Zr.too_big:
            s =
              "array" === e.type
                ? `Array must contain ${e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
                : "string" === e.type
                ? `String must contain ${e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
                : "number" === e.type
                ? `Number must be less than ${e.inclusive ? "or equal to " : ""}${e.maximum}`
                : "date" === e.type
                ? `Date must be smaller than ${e.inclusive ? "or equal to " : ""}${new Date(e.maximum)}`
                : "Invalid input";
            break;
          case Zr.custom:
            s = "Invalid input";
            break;
          case Zr.invalid_intersection_types:
            s = "Intersection results could not be merged";
            break;
          case Zr.not_multiple_of:
            s = `Number must be a multiple of ${e.multipleOf}`;
            break;
          default:
            (s = t.defaultError), Br.assertNever(e);
        }
        return { message: s };
      };
      let Hr = Vr;
      function $r() {
        return Hr;
      }
      const zr = (e) => {
        const { data: t, path: s, errorMaps: n, issueData: r } = e,
          i = [...s, ...(r.path || [])],
          o = { ...r, path: i };
        let a = "";
        const c = n
          .filter((e) => !!e)
          .slice()
          .reverse();
        for (const e of c) a = e(o, { data: t, defaultError: a }).message;
        return { ...r, path: i, message: r.message || a };
      };
      function Kr(e, t) {
        const s = zr({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, $r(), Vr].filter((e) => !!e)
        });
        e.common.issues.push(s);
      }
      class Yr {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          const s = [];
          for (const n of t) {
            if ("aborted" === n.status) return Qr;
            "dirty" === n.status && e.dirty(), s.push(n.value);
          }
          return { status: e.value, value: s };
        }
        static async mergeObjectAsync(e, t) {
          const s = [];
          for (const e of t) s.push({ key: await e.key, value: await e.value });
          return Yr.mergeObjectSync(e, s);
        }
        static mergeObjectSync(e, t) {
          const s = {};
          for (const n of t) {
            const { key: t, value: r } = n;
            if ("aborted" === t.status) return Qr;
            if ("aborted" === r.status) return Qr;
            "dirty" === t.status && e.dirty(),
              "dirty" === r.status && e.dirty(),
              (void 0 !== r.value || n.alwaysSet) && (s[t.value] = r.value);
          }
          return { status: e.value, value: s };
        }
      }
      const Qr = Object.freeze({ status: "aborted" }),
        Jr = (e) => ({ status: "valid", value: e }),
        Xr = (e) => "aborted" === e.status,
        ei = (e) => "dirty" === e.status,
        ti = (e) => "valid" === e.status,
        si = (e) => void 0 !== typeof Promise && e instanceof Promise;
      var ni;
      !(function (e) {
        (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
          (e.toString = (e) => ("string" == typeof e ? e : null == e ? void 0 : e.message));
      })(ni || (ni = {}));
      class ri {
        constructor(e, t, s, n) {
          (this.parent = e), (this.data = t), (this._path = s), (this._key = n);
        }
        get path() {
          return this._path.concat(this._key);
        }
      }
      const ii = (e, t) => {
        if (ti(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return { success: !1, error: new Gr(e.common.issues) };
      };
      function oi(e) {
        if (!e) return {};
        const { errorMap: t, invalid_type_error: s, required_error: n, description: r } = e;
        if (t && (s || n)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
        return t
          ? { errorMap: t, description: r }
          : {
              errorMap: (e, t) =>
                "invalid_type" !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                  ? { message: null != n ? n : t.defaultError }
                  : { message: null != s ? s : t.defaultError },
              description: r
            };
      }
      class ai {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this.superRefine = this._refinement),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.default = this.default.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return qr(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: qr(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new Yr(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: qr(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent
            }
          };
        }
        _parseSync(e) {
          const t = this._parse(e);
          if (si(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          const t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          const s = this.safeParse(e, t);
          if (s.success) return s.data;
          throw s.error;
        }
        safeParse(e, t) {
          var s;
          const n = {
              common: {
                issues: [],
                async: null !== (s = null == t ? void 0 : t.async) && void 0 !== s && s,
                contextualErrorMap: null == t ? void 0 : t.errorMap
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: qr(e)
            },
            r = this._parseSync({ data: e, path: n.path, parent: n });
          return ii(n, r);
        }
        async parseAsync(e, t) {
          const s = await this.safeParseAsync(e, t);
          if (s.success) return s.data;
          throw s.error;
        }
        async safeParseAsync(e, t) {
          const s = {
              common: { issues: [], contextualErrorMap: null == t ? void 0 : t.errorMap, async: !0 },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: qr(e)
            },
            n = this._parse({ data: e, path: [], parent: s }),
            r = await (si(n) ? n : Promise.resolve(n));
          return ii(s, r);
        }
        refine(e, t) {
          const s = (e) => ("string" == typeof t || void 0 === t ? { message: t } : "function" == typeof t ? t(e) : t);
          return this._refinement((t, n) => {
            const r = e(t),
              i = () => n.addIssue({ code: Zr.custom, ...s(t) });
            return "undefined" != typeof Promise && r instanceof Promise ? r.then((e) => !!e || (i(), !1)) : !!r || (i(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((s, n) => !!e(s) || (n.addIssue("function" == typeof t ? t(s, n) : t), !1));
        }
        _refinement(e) {
          return new Zi({ schema: this, typeName: Ji.ZodEffects, effect: { type: "refinement", refinement: e } });
        }
        optional() {
          return Gi.create(this);
        }
        nullable() {
          return Vi.create(this);
        }
        nullish() {
          return this.optional().nullable();
        }
        array() {
          return Si.create(this);
        }
        promise() {
          return qi.create(this);
        }
        or(e) {
          return Ci.create([this, e]);
        }
        and(e) {
          return Ti.create(this, e);
        }
        transform(e) {
          return new Zi({ schema: this, typeName: Ji.ZodEffects, effect: { type: "transform", transform: e } });
        }
        default(e) {
          return new Hi({ innerType: this, defaultValue: "function" == typeof e ? e : () => e, typeName: Ji.ZodDefault });
        }
        brand() {
          return new Ki({ typeName: Ji.ZodBranded, type: this, ...oi(void 0) });
        }
        describe(e) {
          return new (0, this.constructor)({ ...this._def, description: e });
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      const ci = /^c[^\s-]{8,}$/i,
        ui = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        li = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      class di extends ai {
        constructor() {
          super(...arguments),
            (this._regex = (e, t, s) => this.refinement((t) => e.test(t), { validation: t, code: Zr.invalid_string, ...ni.errToObj(s) })),
            (this.nonempty = (e) => this.min(1, ni.errToObj(e))),
            (this.trim = () => new di({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] }));
        }
        _parse(e) {
          if (this._getType(e) !== jr.string) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.string, received: t.parsedType }), Qr;
          }
          const t = new Yr();
          let s;
          for (const n of this._def.checks)
            if ("min" === n.kind)
              e.data.length < n.value &&
                ((s = this._getOrReturnCtx(e, s)),
                Kr(s, { code: Zr.too_small, minimum: n.value, type: "string", inclusive: !0, message: n.message }),
                t.dirty());
            else if ("max" === n.kind)
              e.data.length > n.value &&
                ((s = this._getOrReturnCtx(e, s)),
                Kr(s, { code: Zr.too_big, maximum: n.value, type: "string", inclusive: !0, message: n.message }),
                t.dirty());
            else if ("email" === n.kind)
              li.test(e.data) ||
                ((s = this._getOrReturnCtx(e, s)), Kr(s, { validation: "email", code: Zr.invalid_string, message: n.message }), t.dirty());
            else if ("uuid" === n.kind)
              ui.test(e.data) ||
                ((s = this._getOrReturnCtx(e, s)), Kr(s, { validation: "uuid", code: Zr.invalid_string, message: n.message }), t.dirty());
            else if ("cuid" === n.kind)
              ci.test(e.data) ||
                ((s = this._getOrReturnCtx(e, s)), Kr(s, { validation: "cuid", code: Zr.invalid_string, message: n.message }), t.dirty());
            else if ("url" === n.kind)
              try {
                new URL(e.data);
              } catch (r) {
                (s = this._getOrReturnCtx(e, s)), Kr(s, { validation: "url", code: Zr.invalid_string, message: n.message }), t.dirty();
              }
            else
              "regex" === n.kind
                ? ((n.regex.lastIndex = 0),
                  n.regex.test(e.data) ||
                    ((s = this._getOrReturnCtx(e, s)),
                    Kr(s, { validation: "regex", code: Zr.invalid_string, message: n.message }),
                    t.dirty()))
                : "trim" === n.kind
                ? (e.data = e.data.trim())
                : "startsWith" === n.kind
                ? e.data.startsWith(n.value) ||
                  ((s = this._getOrReturnCtx(e, s)),
                  Kr(s, { code: Zr.invalid_string, validation: { startsWith: n.value }, message: n.message }),
                  t.dirty())
                : "endsWith" === n.kind
                ? e.data.endsWith(n.value) ||
                  ((s = this._getOrReturnCtx(e, s)),
                  Kr(s, { code: Zr.invalid_string, validation: { endsWith: n.value }, message: n.message }),
                  t.dirty())
                : Br.assertNever(n);
          return { status: t.value, value: e.data };
        }
        _addCheck(e) {
          return new di({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...ni.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...ni.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...ni.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...ni.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...ni.errToObj(t) });
        }
        startsWith(e, t) {
          return this._addCheck({ kind: "startsWith", value: e, ...ni.errToObj(t) });
        }
        endsWith(e, t) {
          return this._addCheck({ kind: "endsWith", value: e, ...ni.errToObj(t) });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...ni.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...ni.errToObj(t) });
        }
        length(e, t) {
          return this.min(e, t).max(e, t);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get minLength() {
          let e = null;
          for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      function pi(e, t) {
        const s = (e.toString().split(".")[1] || "").length,
          n = (t.toString().split(".")[1] || "").length,
          r = s > n ? s : n;
        return (parseInt(e.toFixed(r).replace(".", "")) % parseInt(t.toFixed(r).replace(".", ""))) / Math.pow(10, r);
      }
      di.create = (e) => new di({ checks: [], typeName: Ji.ZodString, ...oi(e) });
      class hi extends ai {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
        }
        _parse(e) {
          if (this._getType(e) !== jr.number) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.number, received: t.parsedType }), Qr;
          }
          let t;
          const s = new Yr();
          for (const n of this._def.checks)
            "int" === n.kind
              ? Br.isInteger(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                Kr(t, { code: Zr.invalid_type, expected: "integer", received: "float", message: n.message }),
                s.dirty())
              : "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                Kr(t, { code: Zr.too_small, minimum: n.value, type: "number", inclusive: n.inclusive, message: n.message }),
                s.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                Kr(t, { code: Zr.too_big, maximum: n.value, type: "number", inclusive: n.inclusive, message: n.message }),
                s.dirty())
              : "multipleOf" === n.kind
              ? 0 !== pi(e.data, n.value) &&
                ((t = this._getOrReturnCtx(e, t)), Kr(t, { code: Zr.not_multiple_of, multipleOf: n.value, message: n.message }), s.dirty())
              : Br.assertNever(n);
          return { status: s.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, ni.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, ni.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, ni.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, ni.toString(t));
        }
        setLimit(e, t, s, n) {
          return new hi({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: ni.toString(n) }] });
        }
        _addCheck(e) {
          return new hi({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: ni.toString(e) });
        }
        positive(e) {
          return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: ni.toString(e) });
        }
        negative(e) {
          return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: ni.toString(e) });
        }
        nonpositive(e) {
          return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: ni.toString(e) });
        }
        nonnegative(e) {
          return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: ni.toString(e) });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: "multipleOf", value: e, message: ni.toString(t) });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find((e) => "int" === e.kind);
        }
      }
      hi.create = (e) => new hi({ checks: [], typeName: Ji.ZodNumber, ...oi(e) });
      class mi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.bigint) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.bigint, received: t.parsedType }), Qr;
          }
          return Jr(e.data);
        }
      }
      mi.create = (e) => new mi({ typeName: Ji.ZodBigInt, ...oi(e) });
      class fi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.boolean) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.boolean, received: t.parsedType }), Qr;
          }
          return Jr(e.data);
        }
      }
      fi.create = (e) => new fi({ typeName: Ji.ZodBoolean, ...oi(e) });
      class vi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.date) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.date, received: t.parsedType }), Qr;
          }
          if (isNaN(e.data.getTime())) return Kr(this._getOrReturnCtx(e), { code: Zr.invalid_date }), Qr;
          const t = new Yr();
          let s;
          for (const n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                ((s = this._getOrReturnCtx(e, s)),
                Kr(s, { code: Zr.too_small, message: n.message, inclusive: !0, minimum: n.value, type: "date" }),
                t.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                ((s = this._getOrReturnCtx(e, s)),
                Kr(s, { code: Zr.too_big, message: n.message, inclusive: !0, maximum: n.value, type: "date" }),
                t.dirty())
              : Br.assertNever(n);
          return { status: t.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new vi({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e.getTime(), message: ni.toString(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e.getTime(), message: ni.toString(t) });
        }
        get minDate() {
          let e = null;
          for (const t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (const t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      vi.create = (e) => new vi({ checks: [], typeName: Ji.ZodDate, ...oi(e) });
      class gi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.undefined) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.undefined, received: t.parsedType }), Qr;
          }
          return Jr(e.data);
        }
      }
      gi.create = (e) => new gi({ typeName: Ji.ZodUndefined, ...oi(e) });
      class yi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.null) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.null, received: t.parsedType }), Qr;
          }
          return Jr(e.data);
        }
      }
      yi.create = (e) => new yi({ typeName: Ji.ZodNull, ...oi(e) });
      class bi extends ai {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return Jr(e.data);
        }
      }
      bi.create = (e) => new bi({ typeName: Ji.ZodAny, ...oi(e) });
      class wi extends ai {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return Jr(e.data);
        }
      }
      wi.create = (e) => new wi({ typeName: Ji.ZodUnknown, ...oi(e) });
      class _i extends ai {
        _parse(e) {
          const t = this._getOrReturnCtx(e);
          return Kr(t, { code: Zr.invalid_type, expected: jr.never, received: t.parsedType }), Qr;
        }
      }
      _i.create = (e) => new _i({ typeName: Ji.ZodNever, ...oi(e) });
      class xi extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.undefined) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.void, received: t.parsedType }), Qr;
          }
          return Jr(e.data);
        }
      }
      xi.create = (e) => new xi({ typeName: Ji.ZodVoid, ...oi(e) });
      class Si extends ai {
        _parse(e) {
          const { ctx: t, status: s } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== jr.array) return Kr(t, { code: Zr.invalid_type, expected: jr.array, received: t.parsedType }), Qr;
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (Kr(t, { code: Zr.too_small, minimum: n.minLength.value, type: "array", inclusive: !0, message: n.minLength.message }),
              s.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (Kr(t, { code: Zr.too_big, maximum: n.maxLength.value, type: "array", inclusive: !0, message: n.maxLength.message }),
              s.dirty()),
            t.common.async)
          )
            return Promise.all(t.data.map((e, s) => n.type._parseAsync(new ri(t, e, t.path, s)))).then((e) => Yr.mergeArray(s, e));
          const r = t.data.map((e, s) => n.type._parseSync(new ri(t, e, t.path, s)));
          return Yr.mergeArray(s, r);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new Si({ ...this._def, minLength: { value: e, message: ni.toString(t) } });
        }
        max(e, t) {
          return new Si({ ...this._def, maxLength: { value: e, message: ni.toString(t) } });
        }
        length(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      var Li;
      (Si.create = (e, t) => new Si({ type: e, minLength: null, maxLength: null, typeName: Ji.ZodArray, ...oi(t) })),
        (function (e) {
          e.mergeShapes = (e, t) => ({ ...e, ...t });
        })(Li || (Li = {}));
      const Ii = (e) => (t) => new ki({ ...e, shape: () => ({ ...e.shape(), ...t }) });
      function Ai(e) {
        if (e instanceof ki) {
          const t = {};
          for (const s in e.shape) {
            const n = e.shape[s];
            t[s] = Gi.create(Ai(n));
          }
          return new ki({ ...e._def, shape: () => t });
        }
        return e instanceof Si
          ? Si.create(Ai(e.element))
          : e instanceof Gi
          ? Gi.create(Ai(e.unwrap()))
          : e instanceof Vi
          ? Vi.create(Ai(e.unwrap()))
          : e instanceof Ui
          ? Ui.create(e.items.map((e) => Ai(e)))
          : e;
      }
      class ki extends ai {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = Ii(this._def)),
            (this.extend = Ii(this._def));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          const e = this._def.shape(),
            t = Br.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== jr.object) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.object, received: t.parsedType }), Qr;
          }
          const { status: t, ctx: s } = this._processInputParams(e),
            { shape: n, keys: r } = this._getCached(),
            i = [];
          if (!(this._def.catchall instanceof _i && "strip" === this._def.unknownKeys)) for (const e in s.data) r.includes(e) || i.push(e);
          const o = [];
          for (const e of r) {
            const t = n[e],
              r = s.data[e];
            o.push({ key: { status: "valid", value: e }, value: t._parse(new ri(s, r, s.path, e)), alwaysSet: e in s.data });
          }
          if (this._def.catchall instanceof _i) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (const e of i) o.push({ key: { status: "valid", value: e }, value: { status: "valid", value: s.data[e] } });
            else if ("strict" === e) i.length > 0 && (Kr(s, { code: Zr.unrecognized_keys, keys: i }), t.dirty());
            else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
          } else {
            const e = this._def.catchall;
            for (const t of i) {
              const n = s.data[t];
              o.push({ key: { status: "valid", value: t }, value: e._parse(new ri(s, n, s.path, t)), alwaysSet: t in s.data });
            }
          }
          return s.common.async
            ? Promise.resolve()
                .then(async () => {
                  const e = [];
                  for (const t of o) {
                    const s = await t.key;
                    e.push({ key: s, value: await t.value, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => Yr.mergeObjectSync(t, e))
            : Yr.mergeObjectSync(t, o);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            ni.errToObj,
            new ki({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, s) => {
                      var n, r, i, o;
                      const a =
                        null !== (i = null === (r = (n = this._def).errorMap) || void 0 === r ? void 0 : r.call(n, t, s).message) &&
                        void 0 !== i
                          ? i
                          : s.defaultError;
                      return "unrecognized_keys" === t.code
                        ? { message: null !== (o = ni.errToObj(e).message) && void 0 !== o ? o : a }
                        : { message: a };
                    }
                  }
                : {})
            })
          );
        }
        strip() {
          return new ki({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new ki({ ...this._def, unknownKeys: "passthrough" });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        merge(e) {
          return new ki({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => Li.mergeShapes(this._def.shape(), e._def.shape()),
            typeName: Ji.ZodObject
          });
        }
        catchall(e) {
          return new ki({ ...this._def, catchall: e });
        }
        pick(e) {
          const t = {};
          return (
            Br.objectKeys(e).map((e) => {
              this.shape[e] && (t[e] = this.shape[e]);
            }),
            new ki({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          const t = {};
          return (
            Br.objectKeys(this.shape).map((s) => {
              -1 === Br.objectKeys(e).indexOf(s) && (t[s] = this.shape[s]);
            }),
            new ki({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return Ai(this);
        }
        partial(e) {
          const t = {};
          if (e)
            return (
              Br.objectKeys(this.shape).map((s) => {
                -1 === Br.objectKeys(e).indexOf(s) ? (t[s] = this.shape[s]) : (t[s] = this.shape[s].optional());
              }),
              new ki({ ...this._def, shape: () => t })
            );
          for (const e in this.shape) {
            const s = this.shape[e];
            t[e] = s.optional();
          }
          return new ki({ ...this._def, shape: () => t });
        }
        required() {
          const e = {};
          for (const t in this.shape) {
            let s = this.shape[t];
            for (; s instanceof Gi; ) s = s._def.innerType;
            e[t] = s;
          }
          return new ki({ ...this._def, shape: () => e });
        }
        keyof() {
          return Mi(Br.objectKeys(this.shape));
        }
      }
      (ki.create = (e, t) => new ki({ shape: () => e, unknownKeys: "strip", catchall: _i.create(), typeName: Ji.ZodObject, ...oi(t) })),
        (ki.strictCreate = (e, t) =>
          new ki({ shape: () => e, unknownKeys: "strict", catchall: _i.create(), typeName: Ji.ZodObject, ...oi(t) })),
        (ki.lazycreate = (e, t) => new ki({ shape: e, unknownKeys: "strip", catchall: _i.create(), typeName: Ji.ZodObject, ...oi(t) }));
      class Ci extends ai {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            s = this._def.options;
          if (t.common.async)
            return Promise.all(
              s.map(async (e) => {
                const s = { ...t, common: { ...t.common, issues: [] }, parent: null };
                return { result: await e._parseAsync({ data: t.data, path: t.path, parent: s }), ctx: s };
              })
            ).then(function (e) {
              for (const t of e) if ("valid" === t.result.status) return t.result;
              for (const s of e) if ("dirty" === s.result.status) return t.common.issues.push(...s.ctx.common.issues), s.result;
              const s = e.map((e) => new Gr(e.ctx.common.issues));
              return Kr(t, { code: Zr.invalid_union, unionErrors: s }), Qr;
            });
          {
            let e;
            const n = [];
            for (const r of s) {
              const s = { ...t, common: { ...t.common, issues: [] }, parent: null },
                i = r._parseSync({ data: t.data, path: t.path, parent: s });
              if ("valid" === i.status) return i;
              "dirty" !== i.status || e || (e = { result: i, ctx: s }), s.common.issues.length && n.push(s.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const r = n.map((e) => new Gr(e));
            return Kr(t, { code: Zr.invalid_union, unionErrors: r }), Qr;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      Ci.create = (e, t) => new Ci({ options: e, typeName: Ji.ZodUnion, ...oi(t) });
      class Wi extends ai {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== jr.object) return Kr(t, { code: Zr.invalid_type, expected: jr.object, received: t.parsedType }), Qr;
          const s = this.discriminator,
            n = t.data[s],
            r = this.options.get(n);
          return r
            ? t.common.async
              ? r._parseAsync({ data: t.data, path: t.path, parent: t })
              : r._parseSync({ data: t.data, path: t.path, parent: t })
            : (Kr(t, { code: Zr.invalid_union_discriminator, options: this.validDiscriminatorValues, path: [s] }), Qr);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get validDiscriminatorValues() {
          return Array.from(this.options.keys());
        }
        get options() {
          return this._def.options;
        }
        static create(e, t, s) {
          const n = new Map();
          try {
            t.forEach((t) => {
              const s = t.shape[e].value;
              n.set(s, t);
            });
          } catch (e) {
            throw new Error("The discriminator value could not be extracted from all the provided schemas");
          }
          if (n.size !== t.length) throw new Error("Some of the discriminator values are not unique");
          return new Wi({ typeName: Ji.ZodDiscriminatedUnion, discriminator: e, options: n, ...oi(s) });
        }
      }
      function Ei(e, t) {
        const s = qr(e),
          n = qr(t);
        if (e === t) return { valid: !0, data: e };
        if (s === jr.object && n === jr.object) {
          const s = Br.objectKeys(t),
            n = Br.objectKeys(e).filter((e) => -1 !== s.indexOf(e)),
            r = { ...e, ...t };
          for (const s of n) {
            const n = Ei(e[s], t[s]);
            if (!n.valid) return { valid: !1 };
            r[s] = n.data;
          }
          return { valid: !0, data: r };
        }
        if (s === jr.array && n === jr.array) {
          if (e.length !== t.length) return { valid: !1 };
          const s = [];
          for (let n = 0; n < e.length; n++) {
            const r = Ei(e[n], t[n]);
            if (!r.valid) return { valid: !1 };
            s.push(r.data);
          }
          return { valid: !0, data: s };
        }
        return s === jr.date && n === jr.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
      }
      class Ti extends ai {
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e),
            n = (e, n) => {
              if (Xr(e) || Xr(n)) return Qr;
              const r = Ei(e.value, n.value);
              return r.valid
                ? ((ei(e) || ei(n)) && t.dirty(), { status: t.value, value: r.data })
                : (Kr(s, { code: Zr.invalid_intersection_types }), Qr);
            };
          return s.common.async
            ? Promise.all([
                this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
                this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
                this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
              );
        }
      }
      Ti.create = (e, t, s) => new Ti({ left: e, right: t, typeName: Ji.ZodIntersection, ...oi(s) });
      class Ui extends ai {
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e);
          if (s.parsedType !== jr.array) return Kr(s, { code: Zr.invalid_type, expected: jr.array, received: s.parsedType }), Qr;
          if (s.data.length < this._def.items.length)
            return Kr(s, { code: Zr.too_small, minimum: this._def.items.length, inclusive: !0, type: "array" }), Qr;
          !this._def.rest &&
            s.data.length > this._def.items.length &&
            (Kr(s, { code: Zr.too_big, maximum: this._def.items.length, inclusive: !0, type: "array" }), t.dirty());
          const n = s.data
            .map((e, t) => {
              const n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new ri(s, e, s.path, t)) : null;
            })
            .filter((e) => !!e);
          return s.common.async ? Promise.all(n).then((e) => Yr.mergeArray(t, e)) : Yr.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new Ui({ ...this._def, rest: e });
        }
      }
      Ui.create = (e, t) => {
        if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new Ui({ items: e, typeName: Ji.ZodTuple, rest: null, ...oi(t) });
      };
      class Ni extends ai {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e);
          if (s.parsedType !== jr.object) return Kr(s, { code: Zr.invalid_type, expected: jr.object, received: s.parsedType }), Qr;
          const n = [],
            r = this._def.keyType,
            i = this._def.valueType;
          for (const e in s.data) n.push({ key: r._parse(new ri(s, e, s.path, e)), value: i._parse(new ri(s, s.data[e], s.path, e)) });
          return s.common.async ? Yr.mergeObjectAsync(t, n) : Yr.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, s) {
          return new Ni(
            t instanceof ai
              ? { keyType: e, valueType: t, typeName: Ji.ZodRecord, ...oi(s) }
              : { keyType: di.create(), valueType: e, typeName: Ji.ZodRecord, ...oi(t) }
          );
        }
      }
      class Oi extends ai {
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e);
          if (s.parsedType !== jr.map) return Kr(s, { code: Zr.invalid_type, expected: jr.map, received: s.parsedType }), Qr;
          const n = this._def.keyType,
            r = this._def.valueType,
            i = [...s.data.entries()].map(([e, t], i) => ({
              key: n._parse(new ri(s, e, s.path, [i, "key"])),
              value: r._parse(new ri(s, t, s.path, [i, "value"]))
            }));
          if (s.common.async) {
            const e = new Map();
            return Promise.resolve().then(async () => {
              for (const s of i) {
                const n = await s.key,
                  r = await s.value;
                if ("aborted" === n.status || "aborted" === r.status) return Qr;
                ("dirty" !== n.status && "dirty" !== r.status) || t.dirty(), e.set(n.value, r.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            const e = new Map();
            for (const s of i) {
              const n = s.key,
                r = s.value;
              if ("aborted" === n.status || "aborted" === r.status) return Qr;
              ("dirty" !== n.status && "dirty" !== r.status) || t.dirty(), e.set(n.value, r.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      Oi.create = (e, t, s) => new Oi({ valueType: t, keyType: e, typeName: Ji.ZodMap, ...oi(s) });
      class Di extends ai {
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e);
          if (s.parsedType !== jr.set) return Kr(s, { code: Zr.invalid_type, expected: jr.set, received: s.parsedType }), Qr;
          const n = this._def;
          null !== n.minSize &&
            s.data.size < n.minSize.value &&
            (Kr(s, { code: Zr.too_small, minimum: n.minSize.value, type: "set", inclusive: !0, message: n.minSize.message }), t.dirty()),
            null !== n.maxSize &&
              s.data.size > n.maxSize.value &&
              (Kr(s, { code: Zr.too_big, maximum: n.maxSize.value, type: "set", inclusive: !0, message: n.maxSize.message }), t.dirty());
          const r = this._def.valueType;
          function i(e) {
            const s = new Set();
            for (const n of e) {
              if ("aborted" === n.status) return Qr;
              "dirty" === n.status && t.dirty(), s.add(n.value);
            }
            return { status: t.value, value: s };
          }
          const o = [...s.data.values()].map((e, t) => r._parse(new ri(s, e, s.path, t)));
          return s.common.async ? Promise.all(o).then((e) => i(e)) : i(o);
        }
        min(e, t) {
          return new Di({ ...this._def, minSize: { value: e, message: ni.toString(t) } });
        }
        max(e, t) {
          return new Di({ ...this._def, maxSize: { value: e, message: ni.toString(t) } });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      Di.create = (e, t) => new Di({ valueType: e, minSize: null, maxSize: null, typeName: Ji.ZodSet, ...oi(t) });
      class Pi extends ai {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== jr.function) return Kr(t, { code: Zr.invalid_type, expected: jr.function, received: t.parsedType }), Qr;
          function s(e, s) {
            return zr({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, $r(), Vr].filter((e) => !!e),
              issueData: { code: Zr.invalid_arguments, argumentsError: s }
            });
          }
          function n(e, s) {
            return zr({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, $r(), Vr].filter((e) => !!e),
              issueData: { code: Zr.invalid_return_type, returnTypeError: s }
            });
          }
          const r = { errorMap: t.common.contextualErrorMap },
            i = t.data;
          return this._def.returns instanceof qi
            ? Jr(async (...e) => {
                const t = new Gr([]),
                  o = await this._def.args.parseAsync(e, r).catch((n) => {
                    throw (t.addIssue(s(e, n)), t);
                  }),
                  a = await i(...o);
                return await this._def.returns._def.type.parseAsync(a, r).catch((e) => {
                  throw (t.addIssue(n(a, e)), t);
                });
              })
            : Jr((...e) => {
                const t = this._def.args.safeParse(e, r);
                if (!t.success) throw new Gr([s(e, t.error)]);
                const o = i(...t.data),
                  a = this._def.returns.safeParse(o, r);
                if (!a.success) throw new Gr([n(o, a.error)]);
                return a.data;
              });
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new Pi({ ...this._def, args: Ui.create(e).rest(wi.create()) });
        }
        returns(e) {
          return new Pi({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, s) {
          return new Pi({ args: e || Ui.create([]).rest(wi.create()), returns: t || wi.create(), typeName: Ji.ZodFunction, ...oi(s) });
        }
      }
      class Ri extends ai {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      Ri.create = (e, t) => new Ri({ getter: e, typeName: Ji.ZodLazy, ...oi(t) });
      class Fi extends ai {
        _parse(e) {
          return e.data !== this._def.value
            ? (Kr(this._getOrReturnCtx(e), { code: Zr.invalid_literal, expected: this._def.value }), Qr)
            : { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function Mi(e, t) {
        return new Bi({ values: e, typeName: Ji.ZodEnum, ...oi(t) });
      }
      Fi.create = (e, t) => new Fi({ value: e, typeName: Ji.ZodLiteral, ...oi(t) });
      class Bi extends ai {
        _parse(e) {
          if ("string" != typeof e.data) {
            const t = this._getOrReturnCtx(e),
              s = this._def.values;
            return Kr(t, { expected: Br.joinValues(s), received: t.parsedType, code: Zr.invalid_type }), Qr;
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            const t = this._getOrReturnCtx(e),
              s = this._def.values;
            return Kr(t, { received: t.data, code: Zr.invalid_enum_value, options: s }), Qr;
          }
          return Jr(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
      }
      Bi.create = Mi;
      class ji extends ai {
        _parse(e) {
          const t = Br.getValidEnumValues(this._def.values),
            s = this._getOrReturnCtx(e);
          if (s.parsedType !== jr.string && s.parsedType !== jr.number) {
            const e = Br.objectValues(t);
            return Kr(s, { expected: Br.joinValues(e), received: s.parsedType, code: Zr.invalid_type }), Qr;
          }
          if (-1 === t.indexOf(e.data)) {
            const e = Br.objectValues(t);
            return Kr(s, { received: s.data, code: Zr.invalid_enum_value, options: e }), Qr;
          }
          return Jr(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ji.create = (e, t) => new ji({ values: e, typeName: Ji.ZodNativeEnum, ...oi(t) });
      class qi extends ai {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== jr.promise && !1 === t.common.async)
            return Kr(t, { code: Zr.invalid_type, expected: jr.promise, received: t.parsedType }), Qr;
          const s = t.parsedType === jr.promise ? t.data : Promise.resolve(t.data);
          return Jr(s.then((e) => this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap })));
        }
      }
      qi.create = (e, t) => new qi({ type: e, typeName: Ji.ZodPromise, ...oi(t) });
      class Zi extends ai {
        innerType() {
          return this._def.schema;
        }
        _parse(e) {
          const { status: t, ctx: s } = this._processInputParams(e),
            n = this._def.effect || null;
          if ("preprocess" === n.type) {
            const e = n.transform(s.data);
            return s.common.async
              ? Promise.resolve(e).then((e) => this._def.schema._parseAsync({ data: e, path: s.path, parent: s }))
              : this._def.schema._parseSync({ data: e, path: s.path, parent: s });
          }
          const r = {
            addIssue: (e) => {
              Kr(s, e), e.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return s.path;
            }
          };
          if (((r.addIssue = r.addIssue.bind(r)), "refinement" === n.type)) {
            const e = (e) => {
              const t = n.refinement(e, r);
              if (s.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              return e;
            };
            if (!1 === s.common.async) {
              const n = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
              return "aborted" === n.status ? Qr : ("dirty" === n.status && t.dirty(), e(n.value), { status: t.value, value: n.value });
            }
            return this._def.schema
              ._parseAsync({ data: s.data, path: s.path, parent: s })
              .then((s) =>
                "aborted" === s.status
                  ? Qr
                  : ("dirty" === s.status && t.dirty(), e(s.value).then(() => ({ status: t.value, value: s.value })))
              );
          }
          if ("transform" === n.type) {
            if (!1 === s.common.async) {
              const e = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
              if (!ti(e)) return e;
              const i = n.transform(e.value, r);
              if (i instanceof Promise)
                throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
              return { status: t.value, value: i };
            }
            return this._def.schema
              ._parseAsync({ data: s.data, path: s.path, parent: s })
              .then((e) => (ti(e) ? Promise.resolve(n.transform(e.value, r)).then((e) => ({ status: t.value, value: e })) : e));
          }
          Br.assertNever(n);
        }
      }
      (Zi.create = (e, t, s) => new Zi({ schema: e, typeName: Ji.ZodEffects, effect: t, ...oi(s) })),
        (Zi.createWithPreprocess = (e, t, s) =>
          new Zi({ schema: t, effect: { type: "preprocess", transform: e }, typeName: Ji.ZodEffects, ...oi(s) }));
      class Gi extends ai {
        _parse(e) {
          return this._getType(e) === jr.undefined ? Jr(void 0) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      Gi.create = (e, t) => new Gi({ innerType: e, typeName: Ji.ZodOptional, ...oi(t) });
      class Vi extends ai {
        _parse(e) {
          return this._getType(e) === jr.null ? Jr(null) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      Vi.create = (e, t) => new Vi({ innerType: e, typeName: Ji.ZodNullable, ...oi(t) });
      class Hi extends ai {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          let s = t.data;
          return (
            t.parsedType === jr.undefined && (s = this._def.defaultValue()),
            this._def.innerType._parse({ data: s, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      Hi.create = (e, t) => new Gi({ innerType: e, typeName: Ji.ZodOptional, ...oi(t) });
      class $i extends ai {
        _parse(e) {
          if (this._getType(e) !== jr.nan) {
            const t = this._getOrReturnCtx(e);
            return Kr(t, { code: Zr.invalid_type, expected: jr.nan, received: t.parsedType }), Qr;
          }
          return { status: "valid", value: e.data };
        }
      }
      $i.create = (e) => new $i({ typeName: Ji.ZodNaN, ...oi(e) });
      const zi = Symbol("zod_brand");
      class Ki extends ai {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            s = t.data;
          return this._def.type._parse({ data: s, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      const Yi = (e, t = {}, s) =>
          e
            ? bi.create().superRefine((n, r) => {
                if (!e(n)) {
                  const e = "function" == typeof t ? t(n) : t,
                    i = "string" == typeof e ? { message: e } : e;
                  r.addIssue({ code: "custom", ...i, fatal: s });
                }
              })
            : bi.create(),
        Qi = { object: ki.lazycreate };
      var Ji;
      !(function (e) {
        (e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded");
      })(Ji || (Ji = {}));
      const Xi = di.create,
        eo = hi.create,
        to = $i.create,
        so = mi.create,
        no = fi.create,
        ro = vi.create,
        io = gi.create,
        oo = yi.create,
        ao = bi.create,
        co = wi.create,
        uo = _i.create,
        lo = xi.create,
        po = Si.create,
        ho = ki.create,
        mo = ki.strictCreate,
        fo = Ci.create,
        vo = Wi.create,
        go = Ti.create,
        yo = Ui.create,
        bo = Ni.create,
        wo = Oi.create,
        _o = Di.create,
        xo = Pi.create,
        So = Ri.create,
        Lo = Fi.create,
        Io = Bi.create,
        Ao = ji.create,
        ko = qi.create,
        Co = Zi.create,
        Wo = Gi.create,
        Eo = Vi.create,
        To = Zi.createWithPreprocess,
        Uo = Qr;
      var No = Object.freeze({
        __proto__: null,
        getParsedType: qr,
        ZodParsedType: jr,
        defaultErrorMap: Vr,
        setErrorMap: function (e) {
          Hr = e;
        },
        getErrorMap: $r,
        makeIssue: zr,
        EMPTY_PATH: [],
        addIssueToContext: Kr,
        ParseStatus: Yr,
        INVALID: Qr,
        DIRTY: (e) => ({ status: "dirty", value: e }),
        OK: Jr,
        isAborted: Xr,
        isDirty: ei,
        isValid: ti,
        isAsync: si,
        ZodType: ai,
        ZodString: di,
        ZodNumber: hi,
        ZodBigInt: mi,
        ZodBoolean: fi,
        ZodDate: vi,
        ZodUndefined: gi,
        ZodNull: yi,
        ZodAny: bi,
        ZodUnknown: wi,
        ZodNever: _i,
        ZodVoid: xi,
        ZodArray: Si,
        get objectUtil() {
          return Li;
        },
        ZodObject: ki,
        ZodUnion: Ci,
        ZodDiscriminatedUnion: Wi,
        ZodIntersection: Ti,
        ZodTuple: Ui,
        ZodRecord: Ni,
        ZodMap: Oi,
        ZodSet: Di,
        ZodFunction: Pi,
        ZodLazy: Ri,
        ZodLiteral: Fi,
        ZodEnum: Bi,
        ZodNativeEnum: ji,
        ZodPromise: qi,
        ZodEffects: Zi,
        ZodTransformer: Zi,
        ZodOptional: Gi,
        ZodNullable: Vi,
        ZodDefault: Hi,
        ZodNaN: $i,
        BRAND: zi,
        ZodBranded: Ki,
        custom: Yi,
        Schema: ai,
        ZodSchema: ai,
        late: Qi,
        get ZodFirstPartyTypeKind() {
          return Ji;
        },
        any: ao,
        array: po,
        bigint: so,
        boolean: no,
        date: ro,
        discriminatedUnion: vo,
        effect: Co,
        enum: Io,
        function: xo,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) => Yi((t) => t instanceof e, t, !0),
        intersection: go,
        lazy: So,
        literal: Lo,
        map: wo,
        nan: to,
        nativeEnum: Ao,
        never: uo,
        null: oo,
        nullable: Eo,
        number: eo,
        object: ho,
        oboolean: () => no().optional(),
        onumber: () => eo().optional(),
        optional: Wo,
        ostring: () => Xi().optional(),
        preprocess: To,
        promise: ko,
        record: bo,
        set: _o,
        strictObject: mo,
        string: Xi,
        transformer: Co,
        tuple: yo,
        undefined: io,
        union: fo,
        unknown: co,
        void: lo,
        NEVER: Uo,
        ZodIssueCode: Zr,
        quotelessJson: (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Gr
      });
      const Oo = No.object({ id: No.string(), type: No.string() });
      No.object({
        id: No.string(),
        name: No.string(),
        spaceId: No.string(),
        vaultItems: No.array(Oo),
        isShared: No.optional(No.boolean())
      });
      class Do extends vn({ scope: mn.User }) {}
      class Po extends vn({ scope: mn.User }) {}
      class Ro extends yn({ scope: mn.User }) {}
      class Fo extends yn({ scope: mn.User }) {}
      class Mo extends yn({ scope: mn.User }) {}
      class Bo extends yn({ scope: mn.User }) {}
      class jo extends yn({ scope: mn.User }) {}
      class qo extends yn({ scope: mn.User }) {}
      class Zo extends yn({ scope: mn.User }) {}
      class Go extends yn({ scope: mn.User }) {}
      class Vo extends yn({ scope: mn.User }) {}
      class Ho extends yn({ scope: mn.User }) {}
      class $o extends yn({ scope: mn.User }) {}
      const zo = Sn({
        name: "sharingCollections",
        commands: {
          addItemsToCollection: Ro,
          addItemToCollections: Fo,
          createSharedCollection: Mo,
          deleteSharedCollection: Bo,
          inviteCollectionMembers: jo,
          updateCollectionMembers: qo,
          removeItemFromCollections: Zo,
          renameCollection: Go,
          revokeCollectionMembers: Vo,
          updateSharedCollections: Ho,
          updatePermissionForCollectionItem: $o
        },
        events: {},
        queries: {
          getCollectionsForUserOrGroup: Or,
          getItemIdsInSharedCollections: Dr,
          getSharedCollections: Pr,
          getCollectionPermissionsForUser: Rr,
          getCollectionRoleForGroup: Fr,
          getSharedCollectionsCount: Mr,
          sharedCollectionsWithItems: Do,
          usersAndGroupsInCollection: Po
        }
      });
      class Ko extends vn({ scope: mn.User }) {}
      class Yo extends vn({ scope: mn.User }) {}
      class Qo extends vn({ scope: mn.User }) {}
      class Jo extends vn({ scope: mn.User }) {}
      class Xo extends vn({ scope: mn.User }) {}
      class ea extends vn({ scope: mn.User }) {}
      Object.freeze({ Group: "group", Collection: "collection", User: "user" });
      class ta extends vn({ scope: mn.User }) {}
      const sa = Sn({
        name: "sharingItems",
        commands: {},
        events: {},
        queries: {
          getSharingTeamLogins: Ko,
          sharingEnabled: Yo,
          getItemGroupForItem: Qo,
          getSharingStatusForItem: Jo,
          getPermissionForItem: Xo,
          getIsLastAdminForItem: ea,
          sharedAccessForItem: ta
        }
      });
      var na, ra, ia, oa;
      !(function (e) {
        e.AcceptFailed = "AcceptFailed";
      })(na || (na = {}));
      class aa extends Jn(na.AcceptFailed, "Failed to accept collection") {}
      class ca extends yn({ scope: mn.User }) {}
      !(function (e) {
        e.RefuseFailed = "RefuseFailed";
      })(ra || (ra = {}));
      class ua extends Jn(ra.RefuseFailed, "Failed to refuse collection") {}
      class la extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.ItemGroupNotFound = "ItemGroupNotFound"),
          (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus"),
          (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
          (e.UserIsNotInItemGroup = "UserIsNotInItemGroup"),
          (e.UserGroupIsNotInItemGroup = "UserGroupIsNotInItemGroup"),
          (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
          (e.NotEnoughAdmins = "NotEnoughAdmins"),
          (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus");
      })(ia || (ia = {}));
      class da extends Jn(ia.ItemGroupNotFound, "Item Group not found") {}
      class pa extends Jn(ia.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      class ha extends Jn(ia.GroupHasInvalidStatus, "UserGroup is not in accepted/pending status (already refused or revoked)") {}
      class ma extends Jn(ia.UserIsNotInItemGroup, "User is not part of item group") {}
      class fa extends Jn(ia.UserGroupIsNotInItemGroup, "User group is not part of item group") {}
      class va extends Jn(ia.InvalidItemGroupRevision, "Item group revision is not valid") {}
      class ga extends Jn(ia.NotEnoughAdmins, "The operation would let the item group with no admin") {}
      class ya extends Jn(ia.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      class ba extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.UserGroupNotFound = "UserGroupNotFound"),
          (e.InvalidTeamId = "InvalidTeamId"),
          (e.UserGroupIsNotFound = "UserGroupIsNotFound"),
          (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
          (e.UserGroupUpdateConflict = "UserGroupUpdateConflict"),
          (e.InsufficientPrivileges = "InsufficientPrivileges"),
          (e.UserIsNotInUserGroup = "UserIsNotInUserGroup"),
          (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus"),
          (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
          (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus");
      })(oa || (oa = {}));
      class wa extends Jn(oa.UserGroupNotFound, "User Group not found") {}
      class _a extends Jn(oa.InvalidTeamId, "Provided Team ID is not a number") {}
      class xa extends Jn(oa.UserGroupIsNotFound, "User group for provided ID does not exist") {}
      class Sa extends Jn(oa.InvalidItemGroupRevision, "User group revision is not valid") {}
      class La extends Jn(oa.UserGroupUpdateConflict, "Conflict between users attempting to update the same user group") {}
      class Ia extends Jn(oa.InsufficientPrivileges, "The user does not have User Group permission to refuse the invitation") {}
      class Aa extends Jn(oa.UserIsNotInUserGroup, "User is not part of a group") {}
      class ka extends Jn(oa.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
      class Ca extends Jn(oa.GroupHasInvalidStatus, 'UserGroup is not in "accepted" or "pending" status (already refused or revoked)') {}
      class Wa extends Jn(oa.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
      class Ea extends yn({ scope: mn.User }) {}
      class Ta extends yn({ scope: mn.User }) {}
      class Ua extends vn({ scope: mn.User }) {}
      class Na extends vn({ scope: mn.User }) {}
      class Oa extends vn({ scope: mn.User }) {}
      const Da = Sn({
          name: "sharingInvites",
          commands: {
            AcceptCollectionInviteCommand: ca,
            RefuseCollectionInviteCommand: la,
            RefuseItemGroupInviteCommand: ba,
            RefuseUserGroupInviteCommand: Ea,
            UpdatePendingCollectionsCommand: Ta
          },
          events: {},
          queries: { GetInvitesQuery: Ua, GetPendingCollectionsQuery: Na, HasInvitesQuery: Oa }
        }),
        Pa = Sn({ name: "enclaveSdkApi", commands: {}, events: {}, queries: {} });
      class Ra extends yn({ scope: mn.User }) {}
      class Fa extends yn({ scope: mn.User }) {}
      class Ma extends yn({ scope: mn.User }) {}
      class Ba extends yn({ scope: mn.User }) {}
      class ja extends yn({ scope: mn.User }) {}
      class qa extends yn({ scope: mn.User }) {}
      class Za extends yn({ scope: mn.Device }) {}
      class Ga extends yn({ scope: mn.User }) {}
      class Va extends yn({ scope: mn.User }) {}
      class Ha extends yn({ scope: mn.User }) {}
      class $a extends yn({ scope: mn.User }) {}
      class za extends vn({ scope: mn.User }) {}
      const Ka = Sn({
        name: "confidentialSSOApi",
        commands: {
          CheckDNSValidationCommand: Ra,
          ClearSettingsCommand: Fa,
          CreateTeamCommand: Ma,
          DeleteDomainCommand: Ba,
          EnableSsoCommand: ja,
          InitSsoProvisioningCommand: qa,
          LoginUserWithEnclaveSSOCommand: Za,
          ProvisionDomainCommand: Ga,
          TestLoginUserWithEnclaveSSOCommand: Va,
          UpdateMetadataCommand: Ha,
          ValidateMetadataCommand: $a
        },
        events: {},
        queries: { SsoProvisioningQuery: za }
      });
      class Ya extends yn({ scope: mn.User }) {}
      class Qa extends yn({ scope: mn.User }) {}
      class Ja extends vn({ scope: mn.User }) {}
      class Xa extends vn({ scope: mn.User }) {}
      const ec = Sn({
        name: "scim",
        commands: { updateScimConfiguration: Ya, generateScimToken: Qa },
        events: {},
        queries: { scimConfiguration: Ja, scimEndpoint: Xa }
      });
      class tc extends vn({ scope: mn.Device }) {}
      class sc extends vn({ scope: mn.Device }) {}
      class nc extends vn({ scope: mn.Device }) {}
      class rc extends yn({ scope: mn.Device }) {}
      class ic extends yn({ scope: mn.Device }) {}
      class oc extends yn({ scope: mn.Device }) {}
      class ac extends yn({ scope: mn.Device }) {}
      class cc extends yn({ scope: mn.Device }) {}
      class uc extends yn({ scope: mn.Device }) {}
      class lc extends yn({ scope: mn.Device }) {}
      class dc extends yn({ scope: mn.Device }) {}
      class pc extends yn({ scope: mn.Device }) {}
      class hc extends yn({ scope: mn.Device }) {}
      class mc extends yn({ scope: mn.Device }) {}
      class fc extends yn({ scope: mn.Device }) {}
      class vc extends yn({ scope: mn.Device }) {}
      class gc extends yn({ scope: mn.Device }) {}
      class yc extends yn({ scope: mn.Device }) {}
      class bc extends yn({ scope: mn.Device }) {}
      class wc extends yn({ scope: mn.Device }) {}
      class _c extends yn({ scope: mn.Device }) {}
      class xc extends yn({ scope: mn.Device }) {}
      class Sc extends yn({ scope: mn.Device }) {}
      class Lc extends yn({ scope: mn.Device }) {}
      const Ic = Sn({
        name: "authenticationFlow",
        commands: {
          changeLogin: ic,
          changeTwoFactorAuthenticationOtpType: lc,
          clearError: fc,
          cancelDeviceTransferRequest: Lc,
          resendEmailToken: dc,
          resendPushNotification: hc,
          sendAccountEmail: rc,
          sendMasterPassword: pc,
          submitBackupCode: uc,
          submitEmailToken: ac,
          submitTotp: cc,
          switchToDashlaneAuthenticator: oc,
          switchToEmailToken: mc,
          retryWebAuthnAuthentication: vc,
          useMasterPassword: gc,
          webAuthnAuthenticationFail: yc,
          logout: bc,
          lockSession: wc,
          loginViaSSO: _c,
          initiateLoginWithSSO: xc,
          initiateAutologinWithSSOCommand: Sc
        },
        queries: { authenticationFlowStatus: tc, getSsoUserSettings: sc, getProviderInfo: nc },
        events: {}
      });
      class Ac extends vn({ scope: mn.Device }) {}
      class kc extends yn({ scope: mn.User }) {}
      class Cc extends yn({ scope: mn.User }) {}
      class Wc extends yn({ scope: mn.User }) {}
      class Ec extends yn({ scope: mn.User }) {}
      class Tc extends yn({ scope: mn.User }) {}
      class Uc extends yn({ scope: mn.User }) {}
      const Nc = Sn({
        name: "deviceTransfer",
        commands: {
          refreshRequest: kc,
          cancelRequest: Cc,
          approveRequest: Wc,
          rejectRequest: Ec,
          submitPassphraseChallenge: Tc,
          returnToDeviceSetupCommand: Uc
        },
        events: {},
        queries: { trustedDeviceFlowStatus: Ac }
      });
      class Oc extends vn({ scope: mn.Device }) {}
      class Dc extends yn({ scope: mn.Device }) {}
      class Pc extends yn({ scope: mn.Device }) {}
      class Rc extends yn({ scope: mn.Device }) {}
      class Fc extends yn({ scope: mn.Device }) {}
      class Mc extends yn({ scope: mn.Device }) {}
      class Bc extends yn({ scope: mn.Device }) {}
      class jc extends yn({ scope: mn.Device }) {}
      class qc extends yn({ scope: mn.Device }) {}
      class Zc extends yn({ scope: mn.Device }) {}
      class Gc extends yn({ scope: mn.Device }) {}
      class Vc extends yn({ scope: mn.Device }) {}
      class Hc extends _n({ scope: mn.Device }) {}
      const $c = Sn({
        name: "identityVerificationFlow",
        commands: {
          changeTwoFactorAuthenticationOtpType: Dc,
          clearError: Pc,
          resendEmailToken: Rc,
          resendPushNotification: Fc,
          submitBackupCode: Bc,
          submitEmailToken: Mc,
          submitTotp: jc,
          switchToDashlaneAuthenticator: qc,
          switchToEmailToken: Zc,
          startIdentityVerification: Gc,
          cancelIdentityVerification: Vc
        },
        queries: { identityVerificationFlowStatus: Oc },
        events: { identityVerificationCompleted: Hc }
      });
      class zc extends yn({ scope: mn.User }) {}
      class Kc extends yn({ scope: mn.Device }) {}
      const Yc = Sn({
        name: "userVerification",
        commands: { validateWebauthnAssertion: zc, request2FaCodesByPhone: Kc },
        queries: {},
        events: {}
      });
      class Qc extends yn({ scope: mn.Device }) {}
      No.discriminatedUnion("with", [
        No.object({
          with: No.literal("token"),
          login: No.string(),
          token: No.string(),
          deviceName: No.optional(No.string()),
          ignoreAlreadyRegisteredError: No.optional(No.boolean())
        }),
        No.object({
          with: No.literal("authTicket"),
          login: No.string(),
          authTicket: No.string(),
          deviceName: No.optional(No.string()),
          ignoreAlreadyRegisteredError: No.optional(No.boolean())
        })
      ]);
      class Jc extends yn({ scope: mn.Device }) {}
      class Xc extends vn({ scope: mn.Device }) {}
      const eu = Sn({
        name: "deviceRegistration",
        commands: { cleanRemotelyRemovedProfiles: Qc, registerDevice: Jc },
        events: {},
        queries: { localAccounts: Xc }
      });
      var tu, su, nu, ru, iu, ou;
      No.object({ email: No.string() }),
        (function (e) {
          (e.NotCreated = "notCreated"), (e.Closed = "closed"), (e.Open = "open");
        })(tu || (tu = {}));
      class au extends vn({ scope: mn.Device }) {}
      !(function (e) {
        (e.Closed = "closed"), (e.Open = "open");
      })(su || (su = {}));
      class cu extends vn({ scope: mn.Device }) {}
      class uu extends vn({ scope: mn.Device }) {}
      class lu extends _n({ scope: mn.User }) {}
      class du extends _n({ scope: mn.User }) {}
      !(function (e) {
        (e.Close = "close"), (e.Lock = "lock");
      })(nu || (nu = {}));
      class pu extends _n({ scope: mn.Device }) {}
      class hu extends yn({ scope: mn.User }) {}
      class mu extends yn({ scope: mn.User }) {}
      !(function (e) {
        e.AlreadyExists = "alreadyExists";
      })(ru || (ru = {}));
      class fu extends Jn(ru.AlreadyExists, "The session already exists. Delete it first.") {}
      class vu extends yn({ scope: mn.Device }) {}
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.AlreadyOpened = "alreadyOpened"), (e.MultiAccountNotYetSupported = "multiAccountNotYetSupported");
      })(iu || (iu = {}));
      class gu extends Jn(iu.NotCreated, "The session has not been created. Create it first.") {}
      class yu extends Jn(iu.AlreadyOpened, "The session is already opened for this user. Close it first.") {}
      class bu extends Jn(iu.MultiAccountNotYetSupported, "Another session is opened. Close it first.") {}
      class wu extends yn({ scope: mn.Device }) {}
      class _u extends yn({ scope: mn.Device }) {}
      class xu extends yn({ scope: mn.Device }) {}
      class Su extends _n({ scope: mn.User }) {}
      class Lu extends vn({ scope: mn.Device }) {}
      !(function (e) {
        (e.NotCreated = "notCreated"), (e.NotOpened = "notOpened");
      })(ou || (ou = {}));
      class Iu extends Jn(ou.NotCreated, "The session has not been created. Create it first.") {}
      class Au extends Jn(ou.NotOpened, "The session has not been opened") {}
      class ku extends yn({ scope: mn.Device }) {}
      const Cu = Sn({
        name: "session",
        commands: {
          FlushLocalDataCommand: hu,
          PrepareLocalDataFlushCommand: mu,
          CreateUserSessionCommand: vu,
          OpenUserSessionCommand: wu,
          CloseUserSessionCommand: _u,
          DeleteLocalSessionCommand: xu,
          UpdateUserSessionKeyCommand: ku
        },
        queries: { sessionState: au, createdSessionsState: cu, selectedOpenedSession: Lu, checkSessionKey: uu },
        events: { SessionOpenedEvent: lu, SessionClosingEvent: du, SessionClosedEvent: pu, SessionOpeningEvent: Su }
      });
      class Wu extends _n({ scope: mn.User }) {}
      class Eu extends yn({ scope: mn.User }) {}
      const Tu = Sn({
        name: "changeMasterPassword",
        commands: { temporarySendMasterPasswordChangedEvent: Eu },
        events: { masterPasswordChanged: Wu },
        queries: {}
      });
      var Uu, Nu;
      !(function (e) {
        (e.DeviceLimited = "DeviceLimited"),
          (e.Requires2FAEnforcement = "Requires2FAEnforcement"),
          (e.RequiresSSO2MPMigration = "RequiresSSO2MPMigration"),
          (e.RequiresMP2SSOMigration = "RequiresMP2SSOMigration"),
          (e.NoActiveUser = "NoActiveUser");
      })(Uu || (Uu = {}));
      class Ou extends Jn("UserNotLogged", "Please log the user") {}
      class Du extends vn({ scope: mn.Device }) {}
      !(function (e) {
        (e.Android = "android"),
          (e.DesktopMacOS = "macosx"),
          (e.DesktopWindows = "windows"),
          (e.IPad = "ipad"),
          (e.IPhone = "iphone"),
          (e.IPod = "ipod"),
          (e.Other = "other"),
          (e.StandaloneExtension = "saex"),
          (e.TeamAdminConsole = "tac"),
          (e.WebApp = "webapp");
      })(Nu || (Nu = {}));
      class Pu extends vn({ scope: mn.User }) {}
      const Ru = Sn({ name: "vaultAccess", commands: {}, events: {}, queries: { isAllowed: Du, deviceLimit: Pu } });
      class Fu extends yn({ scope: mn.Device }) {}
      class Mu extends vn({ scope: mn.Device }) {}
      const Bu = Sn({ name: "sync", commands: { SyncCommand: Fu }, queries: { SyncProgressQuery: Mu }, events: {} }),
        ju = Sn({ name: "autofillData", commands: {}, events: {}, queries: {} });
      class qu extends yn({ scope: mn.User }) {}
      class Zu extends vn({ scope: mn.User }) {}
      const Gu = Sn({
        name: "autofillNotifications",
        commands: { setAutofillDisabledOnLoginsAndFormsNotificationStatus: qu },
        events: {},
        queries: { getAutofillDisabledOnLoginsAndFormsNotificationStatus: Zu }
      });
      class Vu extends vn({ scope: mn.User }) {}
      class Hu extends vn({ scope: mn.User }) {}
      class $u extends vn({ scope: mn.User }) {}
      class zu extends yn({ scope: mn.User }) {}
      class Ku extends yn({ scope: mn.Device }) {}
      const Yu = Sn({
        name: "autofillSecurity",
        commands: { disablePhishingPreventionForUrl: zu, resetProtectedItemAutofillTimer: Ku },
        events: {},
        queries: { getAutofillProtectionContext: Vu, isPhishingPreventionCapabilityEnabled: Hu, isPhishingPreventionDisabledForUrl: $u }
      });
      class Qu extends yn({ scope: mn.User }) {}
      class Ju extends yn({ scope: mn.User }) {}
      class Xu extends yn({ scope: mn.User }) {}
      var el;
      !(function (e) {
        (e.ANALYSIS_ENABLED = "ANALYSIS_ENABLED"),
          (e.ANALYSIS_DISABLED_BY_USER = "ANALYSIS_DISABLED_BY_USER"),
          (e.ANALYSIS_DISABLED_BY_B2B_ADMIN = "ANALYSIS_DISABLED_BY_B2B_ADMIN"),
          (e.ANALYSIS_DISABLED_BY_KILLSWITCH = "ANALYSIS_DISABLED_BY_KILLSWITCH"),
          (e.ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT = "ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT");
      })(el || (el = {}));
      class tl extends vn({ scope: mn.Device }) {}
      class sl extends vn({ scope: mn.User }) {}
      class nl extends vn({ scope: mn.User }) {}
      class rl extends yn({ scope: mn.User }) {}
      class il extends yn({ scope: mn.User }) {}
      class ol extends yn({ scope: mn.User }) {}
      class al extends yn({ scope: mn.User }) {}
      class cl extends yn({ scope: mn.User }) {}
      class ul extends yn({ scope: mn.User }) {}
      class ll extends yn({ scope: mn.User }) {}
      class dl extends yn({ scope: mn.User }) {}
      class pl extends yn({ scope: mn.User }) {}
      class hl extends yn({ scope: mn.User }) {}
      class ml extends yn({ scope: mn.User }) {}
      const fl = Sn({
        name: "autofillSettings",
        commands: {
          toggleDashlane: Xu,
          enableAnalysis: rl,
          enableAutologin: il,
          enableAutofillOnForms: ol,
          enableAutofillOnLogins: al,
          enableFollowUpNotification: cl,
          disableAnalysis: ul,
          disableAutologin: ll,
          disableAutofillOnForms: dl,
          disableAutofillOnLogins: pl,
          disableFollowUpNotification: hl,
          addDisabledSourceTypes: Ju,
          removeDisabledSourceTypes: Qu,
          setUserAutofillCorrections: ml
        },
        events: {},
        queries: { getAnalysisStatusOnUrl: tl, getAutofillSettings: sl, getUserAutofillCorrections: nl }
      });
      class vl extends _n({ scope: mn.User }) {}
      class gl extends yn({ scope: mn.User }) {}
      const yl = Sn({
        name: "autofillTracking",
        commands: { temporaryEmitPasswordAutofillPerformedEvent: gl },
        events: { passwordAutofillPerformedEvent: vl },
        queries: {}
      });
      class bl extends vn({ scope: mn.User }) {}
      class wl extends yn({ scope: mn.User }) {}
      const _l = Sn({
        name: "linkedWebsites",
        commands: { updateLinkedWebsites: wl },
        events: {},
        queries: { getDashlaneDefinedLinkedWebsites: bl }
      });
      class xl extends yn({ scope: mn.User }) {}
      class Sl extends yn({ scope: mn.User }) {}
      class Ll extends yn({ scope: mn.User }) {}
      class Il extends yn({ scope: mn.User }) {}
      var Al;
      !(function (e) {
        (e.Deleted = "deleted"), (e.Updated = "updated"), (e.Created = "created");
      })(Al || (Al = {}));
      class kl extends yn({ scope: mn.User }) {}
      class Cl extends _n({ scope: mn.User }) {}
      class Wl extends vn({ scope: mn.User }) {}
      class El extends vn({ scope: mn.User }) {}
      class Tl extends vn({ scope: mn.User }) {}
      class Ul extends vn({ scope: mn.User }) {}
      const Nl = Sn({
        name: "vaultItemsCrud",
        commands: {
          createVaultItem: xl,
          deleteVaultItems: Sl,
          updateVaultItem: Ll,
          tempCredentialPreferencesUpdate: Il,
          emitTemporaryVaultItemEvent: kl
        },
        events: { createdEvent: class extends Cl {}, deletedEvent: class extends Cl {}, updatedEvent: class extends Cl {} },
        queries: { domainIconDetails: Wl, query: El, secureNoteCategory: Tl, tempCredentialPreferences: Ul }
      });
      class Ol extends vn({ scope: mn.User }) {}
      const Dl = Sn({ name: "vaultSearch", commands: {}, events: {}, queries: { search: Ol } });
      class Pl extends yn({ scope: mn.User }) {}
      class Rl extends yn({ scope: mn.User }) {}
      class Fl extends yn({ scope: mn.User }) {}
      var Ml;
      !(function (e) {
        (e.SUBSTRACT_VAULT_ITEMS = "subtract_vault_items"), (e.APPEND_VAULT_ITEMS = "append_vault_items");
      })(Ml || (Ml = {}));
      class Bl extends yn({ scope: mn.User }) {}
      class jl extends vn({ scope: mn.User }) {}
      const ql = Sn({
        name: "vaultOrganization",
        commands: { deleteCollection: Pl, createCollection: Rl, migrateCategories: Fl, updateCollection: Bl },
        events: {},
        queries: { queryCollections: jl }
      });
      class Zl extends yn({ scope: mn.User }) {}
      class Gl extends vn({ scope: mn.User }) {}
      const Vl = Sn({
        name: "vaultNotifications",
        commands: { setVaultNotificationsStatus: Zl },
        events: {},
        queries: { getVaultNotificationsStatus: Gl }
      });
      class Hl extends vn({ scope: mn.User }) {}
      class $l extends vn({ scope: mn.User }) {}
      const zl = Sn({
        name: "passwordLimit",
        commands: {},
        events: {},
        queries: { canUserAddNewPassword: Hl, getPasswordLimitStatus: $l }
      });
      class Kl extends vn({ scope: mn.Device }) {}
      const Yl = Sn({ name: "overrides", commands: {}, events: {}, queries: { OverridesQuery: Kl } });
      class Ql extends yn({ scope: mn.User }) {}
      class Jl extends yn({ scope: mn.User }) {}
      class Xl extends yn({ scope: mn.User }) {}
      class ed extends yn({ scope: mn.User }) {}
      class td extends yn({ scope: mn.User }) {}
      class sd extends yn({ scope: mn.User }) {}
      class nd extends yn({ scope: mn.Device }) {}
      class rd extends yn({ scope: mn.User }) {}
      class id extends yn({ scope: mn.Device }) {}
      class od extends yn({ scope: mn.Device }) {}
      class ad extends yn({ scope: mn.Device }) {}
      class cd extends yn({ scope: mn.Device }) {}
      class ud extends vn({ scope: mn.User }) {}
      class ld extends vn({ scope: mn.Device }) {}
      class dd extends vn({ scope: mn.Device }) {}
      class pd extends vn({ scope: mn.User }) {}
      const hd = Sn({
        name: "accountRecoveryKey",
        commands: {
          goToActivationNextStep: Ql,
          goToActivationPrevStep: Jl,
          requestActivation: Xl,
          cancelActivation: ed,
          cancelGeneration: td,
          confirmActivation: sd,
          confirmNewPassword: nd,
          deactivate: rd,
          submitRecoveryKey: id,
          tryAgainRecovery: od,
          cancelRecoveryFlow: ad,
          startRecoveryFlow: cd
        },
        queries: { activationFlowStatus: ud, accountRecoveryKeyStatus: ld, recoveryFlowStatus: dd, recoveryMethodsInfo: pd },
        events: {}
      });
      var md;
      !(function (e) {
        (e.AUDIT_LOG_MISSING_JSON_SCHEMA = "AUDIT_LOG_MISSING_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA = "AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA"),
          (e.AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION = "AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION"),
          (e.AUDIT_LOG_ERROR_READING_JSON_SCHEMA = "AUDIT_LOG_ERROR_READING_JSON_SCHEMA"),
          (e.STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED = "STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED");
      })(md || (md = {}));
      class fd extends yn({ scope: mn.User }) {}
      const vd = Sn({ name: "activityLogs", commands: { storeActivityLogs: fd }, events: {}, queries: {} });
      var gd;
      !(function (e) {
        (e.InvalidOrigin = "InvalidOrigin"),
          (e.NoFreeSlot = "NoFreeSlot"),
          (e.NoFreeSlotFreePlan = "NoFreeSlotFreePlan"),
          (e.UserTeamInviteTokenNotFound = "UserTeamInviteTokenNotFound"),
          (e.PaymentFailed = "PaymentFailed"),
          (e.NotBillingAdmin = "NotBillingAdmin"),
          (e.CannotAddSeatDuringGracePeriod = "CannotAddSeatDuringGracePeriod");
      })(gd || (gd = {}));
      class yd extends Jn(gd.InvalidOrigin, "Invalid origin") {}
      class bd extends Jn(gd.NoFreeSlot, "No free slot") {}
      class wd extends Jn(gd.NoFreeSlotFreePlan, "No free slot in free plan") {}
      class _d extends Jn(gd.UserTeamInviteTokenNotFound, "No invite token to a team available for user") {}
      class xd extends Jn(gd.PaymentFailed, "Payment failed") {}
      class Sd extends Jn(gd.NotBillingAdmin, "User is not the billing admin") {}
      class Ld extends Jn(gd.CannotAddSeatDuringGracePeriod, "Seats cannot be added during grace period") {}
      class Id extends yn({ scope: mn.User }) {}
      const Ad = Sn({ name: "teamMembers", commands: { ProposeMembersCommand: Id }, events: {}, queries: {} });
      class kd extends yn({ scope: mn.User }) {}
      class Cd extends yn({ scope: mn.User }) {}
      class Wd extends yn({ scope: mn.User }) {}
      class Ed extends vn({ scope: mn.User }) {}
      class Td extends vn({ scope: mn.User }) {}
      class Ud extends vn({ scope: mn.User }) {}
      class Nd extends vn({ scope: mn.User }) {}
      class Od extends vn({ scope: mn.User }) {}
      class Dd extends vn({ scope: mn.User }) {}
      class Pd extends vn({ scope: mn.User }) {}
      class Rd extends vn({ scope: mn.User }) {}
      class Fd extends vn({ scope: mn.User }) {}
      class Md extends vn({ scope: mn.User }) {}
      class Bd extends vn({ scope: mn.User }) {}
      const jd = Sn({
        name: "teamPlanDetails",
        commands: { extendFreeTrial: kd, requestTeamPlanCancellation: Cd, editTeamPolicies: Wd },
        events: {},
        queries: {
          getTeamBillingInformation: Ed,
          getTeamCancellationStatus: Td,
          getTeamCapabilities: Ud,
          getTeamCreationDateUnixQuery: Nd,
          getTeamId: Od,
          getTeamName: Dd,
          getTeamRoles: Pd,
          getTeamPolicies: Rd,
          getTeamSeats: Fd,
          getTeamSecurityScore: Md,
          getTeamTrialStatus: Bd
        }
      });
      class qd extends vn({ scope: mn.User }) {}
      const Zd = Sn({ name: "teamOffers", commands: {}, events: {}, queries: { getTeamOffers: qd } });
      var Gd, Vd, Hd;
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(Gd || (Gd = {}));
      class $d extends Jn(Gd.TeamNotFound, "The given user is not part of a single team") {}
      class zd extends Jn(Gd.NotBillingAdmin, "The user is not Billing Admin") {}
      class Kd extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.VatNumberNotFound = "VatNumberNotFound"), (e.NotBillingAdmin = "NotBillingAdmin");
      })(Vd || (Vd = {}));
      class Yd extends Jn(Vd.TeamNotFound, "The given user is not part of a single team") {}
      class Qd extends Jn(Vd.VatNumberNotFound, "The given Team does not have a VAT number") {}
      class Jd extends Jn(Vd.NotBillingAdmin, "The user is not Billing Admin") {}
      class Xd extends yn({ scope: mn.User }) {}
      !(function (e) {
        (e.TeamNotFound = "TeamNotFound"), (e.NotBillingAdmin = "NotBillingAdmin"), (e.VatNumberNotUpserted = "VatNumberNotUpserted");
      })(Hd || (Hd = {}));
      class ep extends Jn(Hd.TeamNotFound, "The given user is not part of a single team") {}
      class tp extends Jn(Hd.NotBillingAdmin, "The user is not Billing Admin") {}
      class sp extends Jn(Hd.VatNumberNotUpserted, "The VAT number couldn't be upserted") {}
      class np extends yn({ scope: mn.User }) {}
      const rp = Sn({
        name: "teamVat",
        commands: { DeleteTeamVatCommand: Kd, GetTeamVatCommand: Xd, UpsertTeamVatCommand: np },
        events: {},
        queries: {}
      });
      class ip extends vn() {}
      class op extends vn() {}
      class ap extends vn() {}
      class cp extends Jn("UserNotLogged", "Please log the user") {}
      class up extends Jn("UserNotAdmin", "User is not an admin") {}
      class lp extends vn({ scope: mn.User, noUserError: new cp() }) {}
      class dp extends vn() {}
      class pp extends yn({ scope: mn.User }) {}
      class hp extends yn({ scope: mn.User }) {}
      class mp extends yn({ scope: mn.User }) {}
      const fp = Sn({
        name: "teamGetStarted",
        commands: { markVaultAsVisited: pp, markGetStartedAsSeen: hp, markNotificationAsSeen: mp },
        events: {},
        queries: { hasVisitedVault: ip, hasSeenGetStarted: op, hasSeenNotification: ap, isTeamCreator: lp, teamTasksCompletion: dp }
      });
      class vp extends yn({ scope: mn.User }) {}
      class gp extends yn({ scope: mn.User }) {}
      class yp extends yn({ scope: mn.User }) {}
      class bp extends yn({ scope: mn.User }) {}
      class wp extends vn() {}
      class _p extends vn() {}
      class xp extends vn() {}
      class Sp extends vn() {}
      const Lp = Sn({
        name: "teamAdminNotifications",
        commands: {
          markB2BPlanDiscontinuedSeen: vp,
          markNewRestrictSharingPolicySeen: gp,
          markNotificationTrialExtendedSeen: yp,
          markOfferToExtendFreeTrialSeen: bp
        },
        events: {},
        queries: {
          hasSeenB2BPlanDiscontinued: wp,
          hasSeenNewRestrictSharingPolicy: _p,
          hasSeenNotificationTrialExtended: xp,
          hasSeenOfferToExtendFreeTrial: Sp
        }
      });
      class Ip extends vn({ scope: mn.User }) {}
      const Ap = Sn({ name: "teamPasswordHealth", commands: {}, events: {}, queries: { getReport: Ip } });
      class kp extends yn({ scope: mn.User }) {}
      class Cp extends yn({ scope: mn.User }) {}
      const Wp = Sn({
        name: "teamMidcycleTier",
        commands: { ChangeTierMidcycleCommand: kp, MidcycleTierUpgradePriceCommand: Cp },
        events: {},
        queries: {}
      });
      class Ep extends yn({ scope: mn.User }) {}
      class Tp extends yn({ scope: mn.User }) {}
      class Up extends yn({ scope: mn.User }) {}
      class Np extends yn({ scope: mn.User }) {}
      class Op extends vn() {}
      class Dp extends vn() {}
      class Pp extends vn() {}
      const Rp = Sn({
        name: "masterPasswordSecurity",
        commands: {
          dismissMasterPasswordNotification: Ep,
          temporaryCheckMasterPassword: Tp,
          temporaryResetMasterPasswordLeaked: Up,
          temporaryCheckMasterPasswordWeak: Np
        },
        events: {},
        queries: { isMasterPasswordLeaked: Op, isMasterPasswordWeak: Dp, isMasterPasswordNotificationDismissed: Pp }
      });
      class Fp extends yn({ scope: mn.User }) {}
      class Mp extends vn({ scope: mn.User }) {}
      const Bp = Sn({ name: "userConsents", commands: { UpdateConsentsCommand: Fp }, events: {}, queries: { getConsents: Mp } });
      class jp extends vn({ scope: mn.User }) {}
      var qp;
      !(function (e) {
        (e.DEFAULT = "default"),
          (e.TRIAL_EXPIRED = "trial_expired"),
          (e.WEB_STORE = "web_store"),
          (e.DASHBOARD_UPGRADE = "dashboard_upgrade"),
          (e.SHARING_CENTER_FAMILY = "sharing_center_family"),
          (e.SHARING_CENTER_WORK = "sharing_center_work");
      })(qp || (qp = {}));
      class Zp extends vn({ scope: mn.User }) {}
      const Gp = Sn({ name: "notifications", commands: {}, events: {}, queries: { GetPlanPricingQuery: jp, GetUserMessagesQuery: Zp } });
      class Vp extends yn({ scope: mn.Device }) {}
      class Hp extends yn({ scope: mn.Device }) {}
      const $p = Sn({ commands: { TrackEventCommand: Vp, TrackPageViewCommand: Hp }, events: {}, name: "analytics", queries: {} });
      class zp extends vn({ scope: mn.User }) {}
      class Kp extends vn({ scope: mn.Device }) {}
      const Yp = Sn({ commands: {}, events: {}, name: "featureFlips", queries: { UserFeatureFlipsQuery: zp, UserFeatureFlipQuery: Kp } });
      class Qp extends vn({ scope: mn.Device }) {}
      class Jp extends yn({ scope: mn.Device }) {}
      const Xp = Sn({
        commands: { EditSettingsForStagingCommand: Jp },
        events: {},
        name: "webServices",
        queries: { SettingsForStagingQuery: Qp }
      });
      class eh extends vn({ scope: mn.Device }) {}
      const th = Sn({ name: "platformInfo", commands: {}, events: {}, queries: { PlatformInfoQuery: eh } });
      class sh extends yn({ scope: mn.User }) {}
      class nh extends yn({ scope: mn.User }) {}
      class rh extends vn({ scope: mn.Device }) {}
      const ih = Sn({
        name: "permissions",
        commands: { addGroupManager: sh, removeGroupManager: nh },
        events: {},
        queries: { userPermissions: rh }
      });
      class oh extends vn({ scope: mn.Device }) {}
      class ah extends vn({ scope: mn.Device }) {}
      var ch, uh;
      !(function (e) {
        (e.INVALID_OTP_ALREADY_USED = "INVALID_OTP_ALREADY_USED"),
          (e.INVALID_OTP_BLOCKED = "INVALID_OTP_BLOCKED"),
          (e.VERIFICATION_FAILED = "VERIFICATION_FAILED"),
          (e.ACCOUNT_BLOCKED_CONTACT_SUPPORT = "ACCOUNT_BLOCKED_CONTACT_SUPPORT"),
          (e.VERIFICATION_REQUIRES_REQUEST = "VERIFICATION_REQUIRES_REQUEST"),
          (e.VERIFICATION_TIMEOUT = "VERIFICATION_TIMEOUT");
      })(ch || (ch = {})),
        No.object({ tag: No.nativeEnum(ch) });
      class lh extends yn({ scope: mn.Device }) {}
      !(function (e) {
        (e.UNKNOWN_USER = "user_not_found"), (e.SSO_BLOCKED = "SSO_BLOCKED");
      })(uh || (uh = {})),
        No.object({ tag: No.nativeEnum(uh) });
      class dh extends yn({ scope: mn.Device }) {}
      const ph = Sn({
        name: "deleteOrResetAccount",
        commands: { completeFlow: lh, initiateFlow: dh },
        events: {},
        queries: { userAuthenticationMethod: oh, isFlowCompleted: ah }
      });
      class hh extends vn({ scope: mn.User }) {}
      class mh extends yn({ scope: mn.User }) {}
      const fh = Sn({ name: "accountReferral", commands: { inviteByEmail: mh }, events: {}, queries: { getSharingLink: hh } });
      class vh extends yn({ scope: mn.User }) {}
      class gh extends yn({ scope: mn.User }) {}
      class yh extends vn({ scope: mn.User }) {}
      class bh extends vn({ scope: mn.User }) {}
      class wh extends vn() {}
      class _h extends vn() {}
      const xh = Sn({
          name: "getStarted",
          commands: { dismissGetStarted: vh, markAdminConsoleOpened: gh },
          events: {},
          queries: {
            hasCompletedAutofillTutorial: yh,
            hasCompletedCredentialTutorial: bh,
            hasOpenedAdminConsole: wh,
            isGetStartedDismissed: _h
          }
        }),
        Sh = "background",
        Lh = Tn(Sh)
          .with({ module: Vn, on: Sh })
          .with({ module: Yn, on: Sh })
          .with({ module: hr, on: Sh })
          .with({ module: Pa, on: Sh })
          .with({ module: Ka, on: Sh })
          .with({ module: ec, on: Sh })
          .with({ module: Lr, on: Sh })
          .with({ module: zo, on: Sh })
          .with({ module: sa, on: Sh })
          .with({ module: Ic, on: Sh })
          .with({ module: Nc, on: Sh })
          .with({ module: $c, on: Sh })
          .with({ module: Yc, on: Sh })
          .with({ module: ju, on: Sh })
          .with({ module: Gu, on: Sh })
          .with({ module: Yu, on: Sh })
          .with({ module: fl, on: Sh })
          .with({ module: yl, on: Sh })
          .with({ module: _l, on: Sh })
          .with({ module: Da, on: Sh })
          .with({ module: ih, on: Sh })
          .with({ module: Bu, on: Sh })
          .with({ module: Ir, on: Sh })
          .with({ module: Nl, on: Sh })
          .with({ module: Dl, on: Sh })
          .with({ module: ql, on: Sh })
          .with({ module: Vl, on: Sh })
          .with({ module: zl, on: Sh })
          .with({ module: vd, on: Sh })
          .with({ module: Cr, on: Sh })
          .with({ module: Nr, on: Sh })
          .with({ module: Rp, on: Sh })
          .with({ module: Yl, on: Sh })
          .with({ module: hd, on: Sh })
          .with({ module: $p, on: Sh })
          .with({ module: Cu, on: Sh })
          .with({ module: Ad, on: Sh })
          .with({ module: jd, on: Sh })
          .with({ module: Zd, on: Sh })
          .with({ module: rp, on: Sh })
          .with({ module: Yp, on: Sh })
          .with({ module: Gp, on: Sh })
          .with({ module: Tu, on: Sh })
          .with({ module: fp, on: Sh })
          .with({ module: Lp, on: Sh })
          .with({ module: Ap, on: Sh })
          .with({ module: Bp, on: Sh })
          .with({ module: Ru, on: Sh })
          .with({ module: ph, on: Sh })
          .with({ module: fh, on: Sh })
          .with({ module: xh, on: Sh })
          .with({ module: eu, on: Sh })
          .with({ module: Xp, on: Sh })
          .with({ module: th, on: Sh })
          .with({ module: Wp, on: Sh })
          .define();
      var Ih;
      !(function (e) {
        (e.Connected = "Connected"), (e.Disconnected = "Disconnected");
      })(Ih || (Ih = {}));
      var Ah = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function kh(e) {
        return e;
      }
      var Ch = (function () {
        function e(e) {
          e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (t) {
            var s = new e();
            return (s.source = this), (s.operator = t), s;
          }),
          (e.prototype.subscribe = function (e, t, s) {
            var n,
              r = this,
              i =
                ((n = e) && n instanceof I) ||
                ((function (e) {
                  return e && l(e.next) && l(e.error) && l(e.complete);
                })(n) &&
                  f(n))
                  ? e
                  : new W(e, t, s);
            return (
              L(function () {
                var e = r,
                  t = e.operator,
                  s = e.source;
                i.add(t ? t.call(i, s) : s ? r._subscribe(i) : r._trySubscribe(i));
              }),
              i
            );
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              e.error(t);
            }
          }),
          (e.prototype.forEach = function (e, t) {
            var s = this;
            return new (t = Wh(t))(function (t, n) {
              var r = new W({
                next: function (t) {
                  try {
                    e(t);
                  } catch (e) {
                    n(e), r.unsubscribe();
                  }
                },
                error: n,
                complete: t
              });
              s.subscribe(r);
            });
          }),
          (e.prototype._subscribe = function (e) {
            var t;
            return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e);
          }),
          (e.prototype[Ah] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (
              0 === (s = e).length
                ? kh
                : 1 === s.length
                ? s[0]
                : function (e) {
                    return s.reduce(function (e, t) {
                      return t(e);
                    }, e);
                  }
            )(this);
            var s;
          }),
          (e.prototype.toPromise = function (e) {
            var t = this;
            return new (e = Wh(e))(function (e, s) {
              var n;
              t.subscribe(
                function (e) {
                  return (n = e);
                },
                function (e) {
                  return s(e);
                },
                function () {
                  return e(n);
                }
              );
            });
          }),
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function Wh(e) {
        var t;
        return null !== (t = null != e ? e : g.Promise) && void 0 !== t ? t : Promise;
      }
      var Eh = e(function (e) {
          return function () {
            e(this), (this.name = "ObjectUnsubscribedError"), (this.message = "object unsubscribed");
          };
        }),
        Th = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.closed = !1),
              (t.currentObservers = null),
              (t.observers = []),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            r(t, e),
            (t.prototype.lift = function (e) {
              var t = new Uh(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype._throwIfClosed = function () {
              if (this.closed) throw new Eh();
            }),
            (t.prototype.next = function (e) {
              var t = this;
              L(function () {
                var s, n;
                if ((t._throwIfClosed(), !t.isStopped)) {
                  t.currentObservers || (t.currentObservers = Array.from(t.observers));
                  try {
                    for (var r = o(t.currentObservers), i = r.next(); !i.done; i = r.next()) i.value.next(e);
                  } catch (e) {
                    s = { error: e };
                  } finally {
                    try {
                      i && !i.done && (n = r.return) && n.call(r);
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                }
              });
            }),
            (t.prototype.error = function (e) {
              var t = this;
              L(function () {
                if ((t._throwIfClosed(), !t.isStopped)) {
                  (t.hasError = t.isStopped = !0), (t.thrownError = e);
                  for (var s = t.observers; s.length; ) s.shift().error(e);
                }
              });
            }),
            (t.prototype.complete = function () {
              var e = this;
              L(function () {
                if ((e._throwIfClosed(), !e.isStopped)) {
                  e.isStopped = !0;
                  for (var t = e.observers; t.length; ) t.shift().complete();
                }
              });
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
            }),
            Object.defineProperty(t.prototype, "observed", {
              get: function () {
                var e;
                return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype._trySubscribe = function (t) {
              return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
            }),
            (t.prototype._innerSubscribe = function (e) {
              var t = this,
                s = this,
                n = s.hasError,
                r = s.isStopped,
                i = s.observers;
              return n || r
                ? m
                : ((this.currentObservers = null),
                  i.push(e),
                  new h(function () {
                    (t.currentObservers = null), p(i, e);
                  }));
            }),
            (t.prototype._checkFinalizedStatuses = function (e) {
              var t = this,
                s = t.hasError,
                n = t.thrownError,
                r = t.isStopped;
              s ? e.error(n) : r && e.complete();
            }),
            (t.prototype.asObservable = function () {
              var e = new Ch();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new Uh(e, t);
            }),
            t
          );
        })(Ch),
        Uh = (function (e) {
          function t(t, s) {
            var n = e.call(this) || this;
            return (n.destination = t), (n.source = s), n;
          }
          return (
            r(t, e),
            (t.prototype.next = function (e) {
              var t, s;
              null === (s = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === s || s.call(t, e);
            }),
            (t.prototype.error = function (e) {
              var t, s;
              null === (s = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === s || s.call(t, e);
            }),
            (t.prototype.complete = function () {
              var e, t;
              null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e);
            }),
            (t.prototype._subscribe = function (e) {
              var t, s;
              return null !== (s = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== s ? s : m;
            }),
            t
          );
        })(Th),
        Nh = (function (e) {
          function t(t) {
            var s = e.call(this) || this;
            return (s._value = t), s;
          }
          return (
            r(t, e),
            Object.defineProperty(t.prototype, "value", {
              get: function () {
                return this.getValue();
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype._subscribe = function (t) {
              var s = e.prototype._subscribe.call(this, t);
              return !s.closed && t.next(this._value), s;
            }),
            (t.prototype.getValue = function () {
              var e = this,
                t = e.hasError,
                s = e.thrownError,
                n = e._value;
              if (t) throw s;
              return this._throwIfClosed(), n;
            }),
            (t.prototype.next = function (t) {
              e.prototype.next.call(this, (this._value = t));
            }),
            t
          );
        })(Th),
        Oh = {
          now: function () {
            return (Oh.delegate || Date).now();
          },
          delegate: void 0
        },
        Dh = (function (e) {
          function t(t, s, n) {
            void 0 === t && (t = 1 / 0), void 0 === s && (s = 1 / 0), void 0 === n && (n = Oh);
            var r = e.call(this) || this;
            return (
              (r._bufferSize = t),
              (r._windowTime = s),
              (r._timestampProvider = n),
              (r._buffer = []),
              (r._infiniteTimeWindow = !0),
              (r._infiniteTimeWindow = s === 1 / 0),
              (r._bufferSize = Math.max(1, t)),
              (r._windowTime = Math.max(1, s)),
              r
            );
          }
          return (
            r(t, e),
            (t.prototype.next = function (t) {
              var s = this,
                n = s.isStopped,
                r = s._buffer,
                i = s._infiniteTimeWindow,
                o = s._timestampProvider,
                a = s._windowTime;
              n || (r.push(t), !i && r.push(o.now() + a)), this._trimBuffer(), e.prototype.next.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var t = this._innerSubscribe(e), s = this._infiniteTimeWindow, n = this._buffer.slice(), r = 0;
                r < n.length && !e.closed;
                r += s ? 1 : 2
              )
                e.next(n[r]);
              return this._checkFinalizedStatuses(e), t;
            }),
            (t.prototype._trimBuffer = function () {
              var e = this,
                t = e._bufferSize,
                s = e._timestampProvider,
                n = e._buffer,
                r = e._infiniteTimeWindow,
                i = (r ? 1 : 2) * t;
              if ((t < 1 / 0 && i < n.length && n.splice(0, n.length - i), !r)) {
                for (var o = s.now(), a = 0, c = 1; c < n.length && n[c] <= o; c += 2) a = c;
                a && n.splice(0, a + 1);
              }
            }),
            t
          );
        })(Th),
        Ph = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function Rh(e) {
        return l(null == e ? void 0 : e.then);
      }
      function Fh(e) {
        return l(e[Ah]);
      }
      function Mh(e) {
        return Symbol.asyncIterator && l(null == e ? void 0 : e[Symbol.asyncIterator]);
      }
      function Bh(e) {
        return new TypeError(
          "You provided " +
            (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
        );
      }
      var jh = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
      function qh(e) {
        return l(null == e ? void 0 : e[jh]);
      }
      function Zh(e) {
        return (function (e, t, s) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var n,
            r = s.apply(e, t || []),
            i = [];
          return (
            (n = {}),
            o("next"),
            o("throw"),
            o("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n
          );
          function o(e) {
            r[e] &&
              (n[e] = function (t) {
                return new Promise(function (s, n) {
                  i.push([e, t, s, n]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (s = r[e](t)).value instanceof u ? Promise.resolve(s.value.v).then(c, l) : d(i[0][2], s);
            } catch (e) {
              d(i[0][3], e);
            }
            var s;
          }
          function c(e) {
            a("next", e);
          }
          function l(e) {
            a("throw", e);
          }
          function d(e, t) {
            e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
          }
        })(this, arguments, function () {
          var t, s, n;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                (t = e.getReader()), (r.label = 1);
              case 1:
                r.trys.push([1, , 9, 10]), (r.label = 2);
              case 2:
                return [4, u(t.read())];
              case 3:
                return (s = r.sent()), (n = s.value), s.done ? [4, u(void 0)] : [3, 5];
              case 4:
                return [2, r.sent()];
              case 5:
                return [4, u(n)];
              case 6:
                return [4, r.sent()];
              case 7:
                return r.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function Gh(e) {
        return l(null == e ? void 0 : e.getReader);
      }
      function Vh(e) {
        if (e instanceof Ch) return e;
        if (null != e) {
          if (Fh(e))
            return (
              (r = e),
              new Ch(function (e) {
                var t = r[Ah]();
                if (l(t.subscribe)) return t.subscribe(e);
                throw new TypeError("Provided object does not correctly implement Symbol.observable");
              })
            );
          if (Ph(e))
            return (
              (n = e),
              new Ch(function (e) {
                for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                e.complete();
              })
            );
          if (Rh(e))
            return (
              (s = e),
              new Ch(function (e) {
                s.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                ).then(null, b);
              })
            );
          if (Mh(e)) return Hh(e);
          if (qh(e))
            return (
              (t = e),
              new Ch(function (e) {
                var s, n;
                try {
                  for (var r = o(t), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value;
                    if ((e.next(a), e.closed)) return;
                  }
                } catch (e) {
                  s = { error: e };
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(r);
                  } finally {
                    if (s) throw s.error;
                  }
                }
                e.complete();
              })
            );
          if (Gh(e)) return Hh(Zh(e));
        }
        var t, s, n, r;
        throw Bh(e);
      }
      function Hh(e) {
        return new Ch(function (t) {
          (function (e, t) {
            var s, n, r, a, c, u, l;
            return (
              (c = this),
              void 0,
              (l = function () {
                var c, u;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      i.trys.push([0, 5, 6, 11]),
                        (s = (function (e) {
                          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                          var t,
                            s = e[Symbol.asyncIterator];
                          return s
                            ? s.call(e)
                            : ((e = o(e)),
                              (t = {}),
                              n("next"),
                              n("throw"),
                              n("return"),
                              (t[Symbol.asyncIterator] = function () {
                                return this;
                              }),
                              t);
                          function n(s) {
                            t[s] =
                              e[s] &&
                              function (t) {
                                return new Promise(function (n, r) {
                                  !(function (e, t, s, n) {
                                    Promise.resolve(n).then(function (t) {
                                      e({ value: t, done: s });
                                    }, t);
                                  })(n, r, (t = e[s](t)).done, t.value);
                                });
                              };
                          }
                        })(e)),
                        (i.label = 1);
                    case 1:
                      return [4, s.next()];
                    case 2:
                      if ((n = i.sent()).done) return [3, 4];
                      if (((c = n.value), t.next(c), t.closed)) return [2];
                      i.label = 3;
                    case 3:
                      return [3, 1];
                    case 4:
                      return [3, 11];
                    case 5:
                      return (u = i.sent()), (r = { error: u }), [3, 11];
                    case 6:
                      return i.trys.push([6, , 9, 10]), n && !n.done && (a = s.return) ? [4, a.call(s)] : [3, 8];
                    case 7:
                      i.sent(), (i.label = 8);
                    case 8:
                      return [3, 10];
                    case 9:
                      if (r) throw r.error;
                      return [7];
                    case 10:
                      return [7];
                    case 11:
                      return t.complete(), [2];
                  }
                });
              }),
              new ((u = void 0) || (u = Promise))(function (e, t) {
                function s(e) {
                  try {
                    r(l.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function n(e) {
                  try {
                    r(l.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function r(t) {
                  var r;
                  t.done
                    ? e(t.value)
                    : ((r = t.value),
                      r instanceof u
                        ? r
                        : new u(function (e) {
                            e(r);
                          })).then(s, n);
                }
                r((l = l.apply(c, [])).next());
              })
            );
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
      function $h(e, t, s, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = !1);
        var i = t.schedule(function () {
          s(), r ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if ((e.add(i), !r)) return i;
      }
      function zh(e) {
        return function (t) {
          if (
            (function (e) {
              return l(null == e ? void 0 : e.lift);
            })(t)
          )
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function Kh(e, t, s, n, r) {
        return new Yh(e, t, s, n, r);
      }
      var Yh = (function (e) {
        function t(t, s, n, r, i, o) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = i),
            (a.shouldUnsubscribe = o),
            (a._next = s
              ? function (e) {
                  try {
                    s(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (a._error = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          r(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var s = this.closed;
              e.prototype.unsubscribe.call(this), !s && (null === (t = this.onFinalize) || void 0 === t || t.call(this));
            }
          }),
          t
        );
      })(I);
      function Qh(e, t) {
        return (
          void 0 === t && (t = 0),
          zh(function (s, n) {
            s.subscribe(
              Kh(
                n,
                function (s) {
                  return $h(
                    n,
                    e,
                    function () {
                      return n.next(s);
                    },
                    t
                  );
                },
                function () {
                  return $h(
                    n,
                    e,
                    function () {
                      return n.complete();
                    },
                    t
                  );
                },
                function (s) {
                  return $h(
                    n,
                    e,
                    function () {
                      return n.error(s);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
      function Jh(e, t) {
        return (
          void 0 === t && (t = 0),
          zh(function (s, n) {
            n.add(
              e.schedule(function () {
                return s.subscribe(n);
              }, t)
            );
          })
        );
      }
      function Xh(e, t) {
        if (!e) throw new Error("Iterable cannot be null");
        return new Ch(function (s) {
          $h(s, t, function () {
            var n = e[Symbol.asyncIterator]();
            $h(
              s,
              t,
              function () {
                n.next().then(function (e) {
                  e.done ? s.complete() : s.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function em(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (Fh(e))
                  return (function (e, t) {
                    return Vh(e).pipe(Jh(t), Qh(t));
                  })(e, t);
                if (Ph(e))
                  return (function (e, t) {
                    return new Ch(function (s) {
                      var n = 0;
                      return t.schedule(function () {
                        n === e.length ? s.complete() : (s.next(e[n++]), s.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (Rh(e))
                  return (function (e, t) {
                    return Vh(e).pipe(Jh(t), Qh(t));
                  })(e, t);
                if (Mh(e)) return Xh(e, t);
                if (qh(e))
                  return (function (e, t) {
                    return new Ch(function (s) {
                      var n;
                      return (
                        $h(s, t, function () {
                          (n = e[jh]()),
                            $h(
                              s,
                              t,
                              function () {
                                var e, t, r;
                                try {
                                  (t = (e = n.next()).value), (r = e.done);
                                } catch (e) {
                                  return void s.error(e);
                                }
                                r ? s.complete() : s.next(t);
                              },
                              0,
                              !0
                            );
                        }),
                        function () {
                          return l(null == n ? void 0 : n.return) && n.return();
                        }
                      );
                    });
                  })(e, t);
                if (Gh(e))
                  return (function (e, t) {
                    return Xh(Zh(e), t);
                  })(e, t);
              }
              throw Bh(e);
            })(e, t)
          : Vh(e);
      }
      var tm = new Ch(function (e) {
        return e.complete();
      });
      function sm(e) {
        return e <= 0
          ? function () {
              return tm;
            }
          : zh(function (t, s) {
              var n = 0;
              t.subscribe(
                Kh(s, function (t) {
                  ++n <= e && (s.next(t), e <= n && s.complete());
                })
              );
            });
      }
      function nm(e) {
        void 0 === e && (e = {});
        var t = e.connector,
          s =
            void 0 === t
              ? function () {
                  return new Th();
                }
              : t,
          n = e.resetOnError,
          r = void 0 === n || n,
          i = e.resetOnComplete,
          o = void 0 === i || i,
          a = e.resetOnRefCountZero,
          c = void 0 === a || a;
        return function (e) {
          var t = null,
            n = null,
            i = null,
            a = 0,
            u = !1,
            l = !1,
            d = function () {
              null == n || n.unsubscribe(), (n = null);
            },
            p = function () {
              d(), (t = i = null), (u = l = !1);
            },
            h = function () {
              var e = t;
              p(), null == e || e.unsubscribe();
            };
          return zh(function (e, m) {
            a++, l || u || d();
            var f = (i = null != i ? i : s());
            m.add(function () {
              0 != --a || l || u || (n = rm(h, c));
            }),
              f.subscribe(m),
              t ||
                ((t = new W({
                  next: function (e) {
                    return f.next(e);
                  },
                  error: function (e) {
                    (l = !0), d(), (n = rm(p, r, e)), f.error(e);
                  },
                  complete: function () {
                    (u = !0), d(), (n = rm(p, o)), f.complete();
                  }
                })),
                em(e).subscribe(t));
          })(e);
        };
      }
      function rm(e, t) {
        for (var s = [], n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
        return !0 === t
          ? (e(), null)
          : !1 === t
          ? null
          : t
              .apply(void 0, c([], a(s)))
              .pipe(sm(1))
              .subscribe(function () {
                return e();
              });
      }
      function im(e, t, s) {
        var n,
          r,
          i,
          o,
          a = !1;
        return (
          e && "object" == typeof e
            ? ((n = e.bufferSize),
              (o = void 0 === n ? 1 / 0 : n),
              (r = e.windowTime),
              (t = void 0 === r ? 1 / 0 : r),
              (a = void 0 !== (i = e.refCount) && i),
              (s = e.scheduler))
            : (o = null != e ? e : 1 / 0),
          nm({
            connector: function () {
              return new Dh(o, t, s);
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: a
          })
        );
      }
      function om(e, t) {
        return zh(function (s, n) {
          var r = 0;
          s.subscribe(
            Kh(n, function (s) {
              n.next(e.call(t, s, r++));
            })
          );
        });
      }
      function am(e, t, s) {
        return (
          void 0 === s && (s = 1 / 0),
          l(t)
            ? am(function (s, n) {
                return om(function (e, r) {
                  return t(s, e, n, r);
                })(Vh(e(s, n)));
              }, s)
            : ("number" == typeof t && (s = t),
              zh(function (t, n) {
                return (function (e, t, s, n, r, i, o, a) {
                  var c = [],
                    u = 0,
                    l = 0,
                    d = !1,
                    p = function () {
                      !d || c.length || u || t.complete();
                    },
                    h = function (e) {
                      u++;
                      var r = !1;
                      Vh(s(e, l++)).subscribe(
                        Kh(
                          t,
                          function (e) {
                            t.next(e);
                          },
                          function () {
                            r = !0;
                          },
                          void 0,
                          function () {
                            if (r)
                              try {
                                for (u--; c.length && u < n; ) void 0, (e = c.shift()), h(e);
                                p();
                              } catch (e) {
                                t.error(e);
                              }
                            var e;
                          }
                        )
                      );
                    };
                  return (
                    e.subscribe(
                      Kh(
                        t,
                        function (e) {
                          return u < n ? h(e) : c.push(e);
                        },
                        function () {
                          (d = !0), p();
                        }
                      )
                    ),
                    function () {}
                  );
                })(t, n, e, s);
              }))
        );
      }
      class cm {
        constructor(e) {
          (this.status$ = new Nh(Ih.Connected)),
            (this.port$ = new Ch((t) => {
              let s;
              const n = this.status$;
              function r() {
                s?.onDisconnect.removeListener(r);
                const i = zs({ name: e });
                n.next(Ih.Disconnected), i.onDisconnect.addListener(r), t.next(i), n.next(Ih.Connected), (s = i);
              }
              return (
                r(),
                () => {
                  s?.onDisconnect.removeListener(r), s?.disconnect();
                }
              );
            }).pipe(im(1))),
            (this.portSubscription = this.port$.subscribe()),
            (this.messages$ = this.port$.pipe(
              am(
                (t) =>
                  new Ch((s) => {
                    const n = (t) => {
                      var n;
                      (n = t) && "object" == typeof n && "graphene-message" === n.type && t.channelName === e && s.next(t.message);
                    };
                    return (
                      t.onMessage.addListener(n),
                      () => {
                        t.onMessage.removeListener(n);
                      }
                    );
                  })
              )
            ));
        }
        async sendMessage(e) {
          const t = await N(this.port$);
          t.postMessage(
            (({ channelName: e, message: t }) => ({ channelName: e, message: t, type: "graphene-message" }))({
              channelName: t.name,
              message: e
            })
          );
        }
        stop() {
          return this.portSubscription.unsubscribe(), this.status$.next(Ih.Disconnected), Promise.resolve();
        }
      }
      class um {
        constructor(e) {
          (this.appDefinition = e.appDefinition),
            (this.currentNode = e.currentNode),
            (this.channels = e.channels),
            (this.subscriptions = e.subscriptions),
            (this.channelsListener = e.channelsListener);
        }
        getNodeList() {
          return this.currentNode ? [...this.getRemoteNodeList(), this.currentNode] : this.getRemoteNodeList();
        }
        getRemoteNodeList() {
          return Object.keys(this.channels);
        }
        getModuleNames() {
          return Object.keys(this.appDefinition);
        }
      }
      function lm(e, t) {
        return zh(function (s, n) {
          var r = 0;
          s.subscribe(
            Kh(n, function (s) {
              return e.call(t, s, r++) && n.next(s);
            })
          );
        });
      }
      const dm = (e) => "response" === e.type;
      function pm(e, s) {
        var n = "object" == typeof s;
        return new Promise(function (r, i) {
          var o,
            a = !1;
          e.subscribe({
            next: function (e) {
              (o = e), (a = !0);
            },
            error: i,
            complete: function () {
              a ? r(o) : n ? r(s.defaultValue) : i(new t());
            }
          });
        });
      }
      function hm(e) {
        return zh(function (t, s) {
          var n,
            r = null,
            i = !1;
          (r = t.subscribe(
            Kh(s, void 0, void 0, function (o) {
              (n = Vh(e(o, hm(e)(t)))), r ? (r.unsubscribe(), (r = null), n.subscribe(s)) : (i = !0);
            })
          )),
            i && (r.unsubscribe(), (r = null), n.subscribe(s));
        });
      }
      function mm(e) {
        return e[e.length - 1];
      }
      function fm(e) {
        return (t = mm(e)) && l(t.schedule) ? e.pop() : void 0;
        var t;
      }
      function vm() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return em(e, fm(e));
      }
      function gm() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function (t) {
          return (function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (void 0 === (s = 1) && (s = 1 / 0), am(kh, s))(em(e, fm(e)));
            var s;
          })(t, vm.apply(void 0, c([], a(e))));
        };
      }
      const ym = (e) => !(!e || "object" != typeof e) && "unSubscription" === e.type;
      var bm = Array.isArray,
        wm = Object.getPrototypeOf,
        _m = Object.prototype,
        xm = Object.keys,
        Sm = Array.isArray;
      function Lm() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var s = fm(e),
          n = (function (e) {
            return l(mm(e)) ? e.pop() : void 0;
          })(e),
          r = (function (e) {
            if (1 === e.length) {
              var t = e[0];
              if (bm(t)) return { args: t, keys: null };
              if ((n = t) && "object" == typeof n && wm(n) === _m) {
                var s = xm(t);
                return {
                  args: s.map(function (e) {
                    return t[e];
                  }),
                  keys: s
                };
              }
            }
            var n;
            return { args: e, keys: null };
          })(e),
          i = r.args,
          o = r.keys;
        if (0 === i.length) return em([], s);
        var u,
          d = new Ch(
            (function (e, t, s) {
              return (
                void 0 === s && (s = kh),
                function (n) {
                  Im(
                    t,
                    function () {
                      for (
                        var r = e.length,
                          i = new Array(r),
                          o = r,
                          a = r,
                          c = function (r) {
                            Im(
                              t,
                              function () {
                                var c = em(e[r], t),
                                  u = !1;
                                c.subscribe(
                                  Kh(
                                    n,
                                    function (e) {
                                      (i[r] = e), u || ((u = !0), a--), a || n.next(s(i.slice()));
                                    },
                                    function () {
                                      --o || n.complete();
                                    }
                                  )
                                );
                              },
                              n
                            );
                          },
                          u = 0;
                        u < r;
                        u++
                      )
                        c(u);
                    },
                    n
                  );
                }
              );
            })(
              i,
              s,
              o
                ? function (e) {
                    return (function (e, t) {
                      return e.reduce(function (e, s, n) {
                        return (e[s] = t[n]), e;
                      }, {});
                    })(o, e);
                  }
                : kh
            )
          );
        return n
          ? d.pipe(
              ((u = n),
              om(function (e) {
                return (function (e, t) {
                  return Sm(t) ? e.apply(void 0, c([], a(t))) : e(t);
                })(u, e);
              }))
            )
          : d;
      }
      function Im(e, t, s) {
        e ? $h(s, e, t) : t();
      }
      function Am(e, t) {
        return (
          void 0 === t && (t = !1),
          zh(function (s, n) {
            var r = 0;
            s.subscribe(
              Kh(n, function (s) {
                var i = e(s, r++);
                (i || t) && n.next(s), !i && n.complete();
              })
            );
          })
        );
      }
      function km(e, t) {
        return (
          void 0 === t && (t = kh),
          (e = null != e ? e : Cm),
          zh(function (s, n) {
            var r,
              i = !0;
            s.subscribe(
              Kh(n, function (s) {
                var o = t(s);
                (!i && e(r, o)) || ((i = !1), (r = o), n.next(s));
              })
            );
          })
        );
      }
      function Cm(e, t) {
        return e === t;
      }
      function Wm(e, t) {
        return t
          ? function (s) {
              return s.pipe(
                Wm(function (s, n) {
                  return Vh(e(s, n)).pipe(
                    om(function (e, r) {
                      return t(s, e, n, r);
                    })
                  );
                })
              );
            }
          : zh(function (t, s) {
              var n = 0,
                r = null,
                i = !1;
              t.subscribe(
                Kh(
                  s,
                  function (t) {
                    r ||
                      ((r = Kh(s, void 0, function () {
                        (r = null), i && s.complete();
                      })),
                      Vh(e(t, n++)).subscribe(r));
                  },
                  function () {
                    (i = !0), !r && s.complete();
                  }
                )
              );
            });
      }
      const Em = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
      let Tm;
      const Um = new Uint8Array(16);
      function Nm() {
        if (!Tm && ((Tm = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Tm))
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Tm(Um);
      }
      const Om = [];
      for (let e = 0; e < 256; ++e) Om.push((e + 256).toString(16).slice(1));
      const Dm = function (e, t, s) {
        if (Em.randomUUID && !t && !e) return Em.randomUUID();
        const n = (e = e || {}).random || (e.rng || Nm)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) t[s + e] = n[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            Om[e[t + 0]] +
            Om[e[t + 1]] +
            Om[e[t + 2]] +
            Om[e[t + 3]] +
            "-" +
            Om[e[t + 4]] +
            Om[e[t + 5]] +
            "-" +
            Om[e[t + 6]] +
            Om[e[t + 7]] +
            "-" +
            Om[e[t + 8]] +
            Om[e[t + 9]] +
            "-" +
            Om[e[t + 10]] +
            Om[e[t + 11]] +
            Om[e[t + 12]] +
            Om[e[t + 13]] +
            Om[e[t + 14]] +
            Om[e[t + 15]]
          );
        })(n);
      };
      class Pm {
        constructor(e) {
          this.stopped$ = new Nh(!1);
          const t = { routes: {} };
          this.routes = (() => {
            const { routes: s } = Object.keys(e).reduce((t, s) => {
              const n = e[s];
              if (
                ("local" === n.type && (t.routes[s] = { send: n.onMessage, trySend: async (...e) => (await pm(n.onMessage(...e)), !0) }),
                "remote" === n.type)
              ) {
                const e = ((e, t) => {
                  const s = (s, n, r) => {
                    const i = { content: n, destination: String(s), id: Dm() };
                    return new Ch((s) => {
                      let n = { type: "start", definition: i, metadata: r };
                      const o = Lm({ message: e.receivedMessages$, stopped: t })
                          .pipe(
                            Am(({ stopped: e }) => !e),
                            om(({ message: e }) => e)
                          )
                          .subscribe((e) => {
                            var t;
                            (t = e) && "object" == typeof t && "initial-acknowledgement" === t.type && e.id === i.id
                              ? (n = { ...n, metadata: { ...n.metadata, isReminder: !0 } })
                              : ((e) => !(!e || "object" != typeof e) && "data" === e.type)(e) && e.id === i.id
                              ? s.next(e.data)
                              : ((e) => !(!e || "object" != typeof e) && "error" === e.type)(e) && e.id === i.id
                              ? s.error(new Error(e.errorMessage))
                              : ((e) => !(!e || "object" != typeof e) && "end" === e.type)(e) && e.id === i.id && s.complete();
                          }),
                        a = Lm({
                          sendTimes: e.channelState$.pipe(
                            km(),
                            lm((e) => e === Ih.Connected)
                          ),
                          stopped: t
                        })
                          .pipe(
                            Am(({ stopped: e }) => !e),
                            Wm(() => em(e.send(n)))
                          )
                          .subscribe();
                      return () => {
                        e.send({ type: "unSubscription", id: i.id }), a.unsubscribe(), o.unsubscribe();
                      };
                    });
                  };
                  return { send: s, trySend: async (t, n, r) => (await N(e.channelState$)) === Ih.Connected && (await pm(s(t, n, r)), !0) };
                })(n.channel, this.stopped$);
                t.routes[s] = e;
              }
              return t;
            }, t);
            return s;
          })();
        }
        connect(e, t) {
          let s = !1;
          return {
            start: () => {
              if (s) throw new Error("Already started");
              s = !0;
              const n = (e) =>
                  ((e, t, s) => {
                    const n = new Set(s),
                      r = new Map(),
                      i = t.receivedMessages$.pipe(lm(ym)).subscribe((e) => {
                        const t = r.get(e.id);
                        t?.unsubscribe(), r.delete(e.id);
                      }),
                      o = t.receivedMessages$
                        .pipe(
                          lm((e) => {
                            return (
                              !(!(t = e) || "object" != typeof t) &&
                              "start" === t.type &&
                              n.has(e.definition.destination) &&
                              !r.has(e.definition.id)
                            );
                            var t;
                          }),
                          am((e) =>
                            em(
                              (async (e) => (
                                r.set(e.definition.id, { unsubscribe: () => {} }),
                                await t.send({ type: "initial-acknowledgement", id: e.definition.id }),
                                e
                              ))(e)
                            )
                          )
                        )
                        .subscribe((s) => {
                          const n = s.definition.destination,
                            i = e(n, s.definition.content, s.metadata),
                            o = { type: "end", id: s.definition.id },
                            a = i
                              .pipe(
                                om((e) => ({ id: s.definition.id, data: e, type: "data" })),
                                hm((e) => vm({ id: s.definition.id, type: "error", errorMessage: e.message })),
                                gm(o),
                                am((e) => em(t.send(e)))
                              )
                              .subscribe();
                          r.set(s.definition.id, {
                            unsubscribe: () => {
                              a.unsubscribe();
                            }
                          });
                        });
                    return {
                      unsubscribe: () => {
                        o.unsubscribe(), i.unsubscribe();
                        for (const e of r.values()) e.unsubscribe();
                      }
                    };
                  })((e, t, s) => this.routes[e].send(e, t, s), e, Object.keys(this.routes)),
                r = e.map(n),
                i = new Map(),
                o = t.connectedChannels$.subscribe((e) => {
                  const t = [...i.entries()].filter(([t]) => !(t in e)),
                    s = Object.keys(e).filter((e) => !i.has(e));
                  t.forEach(([e, t]) => {
                    i.delete(e), t.unsubscribe();
                  }),
                    s.forEach((t) => {
                      const s = e[t],
                        r = n(s);
                      i.set(t, r);
                    });
                });
              return Promise.resolve({
                stop: () => ([...r, o, ...i.values()].forEach((e) => e.unsubscribe()), this.stopped$.next(!0), Promise.resolve())
              });
            }
          };
        }
        sendMessage(e, t) {
          return this.routes[e].send(e, t, { isReminder: !1 });
        }
        trySendMessage(e, t) {
          return this.routes[e].trySend(e, t, { isReminder: !1 });
        }
      }
      class Rm {
        constructor() {
          this.entries = {};
        }
        get(e) {
          return this.entries[e];
        }
        getOrDefault(e, t) {
          return this.entries[e] ?? t;
        }
        getOrFail(e) {
          if (!this.has(e)) throw new Error(`No ${e} in request context`);
          return this.entries[e];
        }
        has(e) {
          return e in this.entries;
        }
        async getOrAdd(e, t) {
          return this.has(e) || this.set(e, await t()), this.get(e);
        }
        getOrAddSync(e, t) {
          return this.has(e) || this.set(e, t()), this.get(e);
        }
        set(e, t) {
          this.entries[e] = t;
        }
        toSerializable() {
          return this.entries;
        }
        static fromSerializable(e) {
          const t = new Rm();
          for (const [s, n] of Object.entries(e)) t.entries[s] = n;
          return t;
        }
        clone() {
          return Rm.fromSerializable(JSON.parse(JSON.stringify(this.toSerializable())));
        }
        withValue(e, t) {
          return this.set(e, t), this;
        }
      }
      const Fm = () => em([]);
      class Mm {
        constructor(e) {
          this.config = e;
        }
        async sendCommand(e, t, s, n) {
          if (!this.broker) throw new Error("call connect() first");
          return await N(
            this.broker
              .sendMessage(`command-${e}`, { type: "command", module: e, commandName: String(t), command: s, context: n.toSerializable() })
              .pipe(
                lm(dm),
                om((e) => e.response)
              )
          );
        }
        sendQuery(e, t, s, n) {
          if (!this.broker) throw new Error("call connect() first");
          return this.broker
            .sendMessage(`query-${e}`, { type: "query", module: e, queryName: String(t), query: s, context: n.toSerializable() })
            .pipe(
              lm(dm),
              om((e) => e.response)
            );
        }
        connect(e) {
          const t = e
              ? (t, s, n) => {
                  switch (s.type) {
                    case "response":
                      return tm;
                    case "command":
                      return em(
                        e.onCommand(s.module, s.commandName, s.command, Rm.fromSerializable(s.context), { isReminder: n.isReminder })
                      ).pipe(om((e) => ({ type: "response", response: e })));
                    case "query":
                      return em(e.onQuery(s.module, s.queryName, s.query, Rm.fromSerializable(s.context))).pipe(
                        om((e) => ({ type: "response", response: e }))
                      );
                  }
                  P(s);
                }
              : Fm,
            s = ((e, t, s, n) =>
              Object.keys(e).reduce((r, i) => {
                const { commandMailbox: o, queryMailbox: a } = ((r) => {
                  const { main: i, queryOnly: o } = e[r],
                    a = { type: "local", onMessage: n };
                  if (i === t) return { commandMailbox: a, queryMailbox: a };
                  const c = { type: "remote", channel: s[i] };
                  return { commandMailbox: c, queryMailbox: t && o.includes(t) ? a : c };
                })(i);
                return (r[`command-${i}`] = o), (r[`query-${i}`] = a), r;
              }, {}))(this.config.appDefinition, this.config.currentNode, this.config.channels, t);
          return (this.broker = new Pm(s)), this.broker.connect(Object.values(this.config.channels), this.config.channelsListener);
        }
      }
      const Bm = (e, t, s) => {
        const n = (n) =>
            Object.keys(e[n].api.commands).reduce(
              (e, r) => (
                (e[r] = (e) => {
                  const i = s ?? new Rm();
                  return t.sendCommand(n, r, e, i);
                }),
                e
              ),
              {}
            ),
          r = (n) =>
            Object.keys(e[n].api.queries).reduce(
              (e, r) => (
                (e[r] = (e) => {
                  const i = s ?? new Rm();
                  return t.sendQuery(n, r, e, i);
                }),
                e
              ),
              {}
            );
        return Object.keys(e)
          .map((e) => e)
          .reduce((e, t) => ((e[t] = { commands: n(t), queries: r(t) }), e), {});
      };
      var jm = (function (e) {
          function t(t, s) {
            return e.call(this) || this;
          }
          return (
            r(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(h),
        qm = {
          setInterval: function (e, t) {
            for (var s = [], n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
            var r = qm.delegate;
            return (null == r ? void 0 : r.setInterval)
              ? r.setInterval.apply(r, c([e, t], a(s)))
              : setInterval.apply(void 0, c([e, t], a(s)));
          },
          clearInterval: function (e) {
            var t = qm.delegate;
            return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
          },
          delegate: void 0
        },
        Zm = (function (e) {
          function t(t, s) {
            var n = e.call(this, t, s) || this;
            return (n.scheduler = t), (n.work = s), (n.pending = !1), n;
          }
          return (
            r(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var s = this.id,
                n = this.scheduler;
              return (
                null != s && (this.id = this.recycleAsyncId(n, s, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(n, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, s) {
              return void 0 === s && (s = 0), qm.setInterval(e.flush.bind(e, this), s);
            }),
            (t.prototype.recycleAsyncId = function (e, t, s) {
              if ((void 0 === s && (s = 0), null != s && this.delay === s && !1 === this.pending)) return t;
              qm.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var s = this._execute(e, t);
              if (s) return s;
              !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var s,
                n = !1;
              try {
                this.work(e);
              } catch (e) {
                (n = !0), (s = e || new Error("Scheduled action threw falsy error"));
              }
              if (n) return this.unsubscribe(), s;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  s = this.scheduler,
                  n = s.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  p(n, this),
                  null != t && (this.id = this.recycleAsyncId(s, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(jm),
        Gm = (function () {
          function e(t, s) {
            void 0 === s && (s = e.now), (this.schedulerActionCtor = t), (this.now = s);
          }
          return (
            (e.prototype.schedule = function (e, t, s) {
              return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(s, t);
            }),
            (e.now = Oh.now),
            e
          );
        })(),
        Vm = new ((function (e) {
          function t(t, s) {
            void 0 === s && (s = Gm.now);
            var n = e.call(this, t, s) || this;
            return (n.actions = []), (n._active = !1), (n._scheduled = void 0), n;
          }
          return (
            r(t, e),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this._active) t.push(e);
              else {
                var s;
                this._active = !0;
                do {
                  if ((s = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this._active = !1), s)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw s;
                }
              }
            }),
            t
          );
        })(Gm))(Zm),
        Hm = e(function (e) {
          return function (t) {
            void 0 === t && (t = null), e(this), (this.message = "Timeout has occurred"), (this.name = "TimeoutError"), (this.info = t);
          };
        });
      function $m(e) {
        throw new Hm(e);
      }
      class zm {
        constructor(e, t = 3e4) {
          const s = e.status$.pipe(km());
          let n = !1;
          const r = new Th(),
            i = r
              .pipe(
                am(async (r) => {
                  const i = Dm();
                  let o = !1;
                  const a = e.messages$.pipe(
                      Am(() => !n),
                      lm((e) => "acknowledgement" === e.type && e.id === i),
                      sm(1),
                      (function (e, t) {
                        var s,
                          n = (s = e) instanceof Date && !isNaN(s) ? { first: e } : "number" == typeof e ? { each: e } : e,
                          r = n.first,
                          i = n.each,
                          o = n.with,
                          a = void 0 === o ? $m : o,
                          c = n.scheduler,
                          u = void 0 === c ? Vm : c,
                          l = n.meta,
                          d = void 0 === l ? null : l;
                        if (null == r && null == i) throw new TypeError("No timeout provided.");
                        return zh(function (e, t) {
                          var s,
                            n,
                            o = null,
                            c = 0,
                            l = function (e) {
                              n = $h(
                                t,
                                u,
                                function () {
                                  try {
                                    s.unsubscribe(), Vh(a({ meta: d, lastValue: o, seen: c })).subscribe(t);
                                  } catch (e) {
                                    t.error(e);
                                  }
                                },
                                e
                              );
                            };
                          (s = e.subscribe(
                            Kh(
                              t,
                              function (e) {
                                null == n || n.unsubscribe(), c++, t.next((o = e)), i > 0 && l(i);
                              },
                              void 0,
                              void 0,
                              function () {
                                (null == n ? void 0 : n.closed) || null == n || n.unsubscribe(), (o = null);
                              }
                            )
                          )),
                            !c && l(null != r ? ("number" == typeof r ? r : +r - u.now()) : i);
                        });
                      })(t),
                      hm(() => tm),
                      im(1)
                    ),
                    c = a.subscribe(() => {
                      (o = !0), c.unsubscribe();
                    }),
                    u = s
                      .pipe(
                        Am(() => !o && !n),
                        Wm(() => em(e.sendMessage({ type: "send", id: i, message: r.message })))
                      )
                      .subscribe();
                  try {
                    await pm(a), u.unsubscribe(), r.resolve();
                  } catch (e) {
                    u.unsubscribe(), r.reject(e);
                  }
                })
              )
              .subscribe();
          (this.stop = () => ((n = !0), i.unsubscribe(), e.stop())),
            (this.send = (e) =>
              new Promise((t, s) => {
                const n = { message: e, resolve: t, reject: s };
                r.next(n);
              })),
            (this.channelState$ = e.status$),
            (this.receivedMessages$ = e.messages$.pipe(
              lm((e) => "send" === e.type),
              am(async (t) => {
                if ("send" === t.type) return await e.sendMessage({ type: "acknowledgement", id: t.id }), t.message;
              }),
              nm()
            ));
        }
      }
      const Km = { connectedChannels$: new Nh({}) };
      !(async function () {
        const e = (function () {
            const e = new cm("graphene-background-port"),
              { client: t } = (function ({ appDefinition: e, channels: t, channelsListener: s }) {
                const n = new um({ appDefinition: e, channels: t, channelsListener: s, currentNode: null, subscriptions: {} }),
                  r = new Mm(n),
                  i = () => {
                    throw new Error("Unexpected request received by detached application client");
                  },
                  o = r.connect({ onCommand: i, onQuery: i }).start();
                return { client: Bm(e, r), stop: async () => (await o).stop() };
              })({ appDefinition: Lh, channels: { background: new zm(e) }, channelsListener: Km });
            return t;
          })(),
          t = await N(e.platformInfo.queries.platformInfo());
        O(t) && P(t.error);
        const s = D(t).buildType;
        document.getElementById("logo")?.setAttribute(
          "src",
          (() => {
            var e;
            const { icons: t } = F(),
              s = null != (e = t?.[48]) ? e : "";
            return (n = s).indexOf("://") > 0 || n.startsWith("//") ? s : `/${s}`;
            var n;
          })()
        ),
          (function (e) {
            const { version: t, manifest_version: s, name: n, version_name: r } = F();
            [
              ["extension-name", n],
              ["version", `v${t}`],
              ["build-type", `${e}`],
              ["version-name", `${r}`],
              ["manifest-version", `MV${s}`],
              ["browser-name", q().browser.name ?? ""],
              ["browser-version", q().browser.version ?? ""]
            ].forEach(([e, t]) => {
              "undefined" === t && document.getElementById(e)?.closest("li")?.classList.add("hidden"),
                document.getElementById(e)?.appendChild(document.createTextNode(`${t}`));
            });
          })(s),
          (async () => {
            const e = await window.localStorage.getItem(tn),
              t = document.getElementById("ext-ng-login-flow");
            (t.checked = "true" === e), (t.onchange = sn);
            const s = document.getElementById("ext-ng-form");
            s?.classList.remove("hidden");
          })(),
          (async () => {
            if (!(await Xs.getHasFeature("webproduct_extension_ShowUserConsentOptions"))) return;
            const e = document.getElementById("permissions-form");
            if (!(e && e instanceof HTMLFormElement)) throw new Error("Cannot find the permissions form. Was it accidentally removed?");
            await (async (e) => {
              var t;
              const { usageConsentCheckbox: s } = en(e);
              (null == (t = (await Xs.getGlobalExtensionSettings()).interactionDataConsent) || t) && s.setAttribute("checked", ""),
                s.addEventListener("change", (t) =>
                  (async (e, t, s) => {
                    if (!(e.currentTarget instanceof HTMLInputElement)) throw new Error("event target is not an input element");
                    const { usageConsentCheckbox: n } = en(s),
                      { currentTarget: r } = e,
                      i = { interactionDataConsent: n.checked, personalDataConsent: !0 };
                    r.setAttribute("disabled", ""), await Xs.setGlobalExtensionSettings(i), r.removeAttribute("disabled");
                  })(t, 0, e)
                ),
                e.classList.remove("hidden");
            })(e);
          })(),
          (function (e, t) {
            if (!an.includes(t)) return;
            cn.forEach((t) =>
              (async function (e, t) {
                const s = (function (e) {
                    const t = document.getElementById(`target-staging-${e}`);
                    if (!(t && t instanceof HTMLInputElement)) throw new Error(`No target-staging-${e}`);
                    const s = document.getElementById(`staging-url-${e}`);
                    if (!(s && s instanceof HTMLInputElement)) throw new Error(`No staging-url-${e}`);
                    const n = document.getElementById(`staging-cloudflare-access-key-${e}`);
                    if (!(n && n instanceof HTMLInputElement)) throw new Error(`No staging-cloudflare-access-key-${e}`);
                    const r = document.getElementById(`staging-cloudflare-secret-key-${e}`);
                    if (!(r && r instanceof HTMLInputElement)) throw new Error(`No staging-cloudflare-secret-key-${e}`);
                    return {
                      targetStagingCheckbox: t,
                      stagingURLInput: s,
                      stagingCloudflareAccessKeyInput: n,
                      stagingCloudflareSecretKeyInput: r
                    };
                  })(t),
                  {
                    targetStagingCheckbox: n,
                    stagingCloudflareAccessKeyInput: r,
                    stagingCloudflareSecretKeyInput: i,
                    stagingURLInput: o
                  } = s,
                  a = async () => {
                    await ln(e, t, s), pn(t);
                  };
                n.addEventListener("change", async () => {
                  const r = n.checked;
                  dn(t, r), await ln(e, t, s), pn(t);
                }),
                  o.addEventListener("blur", a),
                  r.addEventListener("blur", a),
                  i.addEventListener("blur", a);
                const c = await N(e.webServices.queries.settingsForStaging());
                if (O(c)) return;
                const u = D(c)[t];
                if (((n.checked = u.override), u.override)) {
                  const { baseUrlOverride: e, cloudflareAccessKeyOverride: t, cloudflareSecretKeyOverride: s } = u;
                  (o.value = e), (r.value = t), (i.value = s);
                }
                dn(t, u.override);
              })(e, t)
            );
            const s = document.getElementById("staging-options-form");
            s?.classList.remove("hidden");
          })(e, s);
      })();
    })();
})();
