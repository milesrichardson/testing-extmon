(() => {
  var e = {
      1093: () => {},
      1515: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChunkedChannel = void 0);
        var r = s(2844),
          o = s(8489);
        const n = (e) => {
          if (!e.chunkId) throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(e)}`);
        };
        class i extends r.GenericChannel {
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
                for (let s = 0, r = e.length; s < r; s++) t[s] = e.charCodeAt(s);
                return t;
              })(t),
              r = [...Array(30)].map(() => Math.random().toString(36)[3]).join("");
            this._sender({ type: "chunk_start", chunkId: r, size: t.length });
            const o = (e = 0) => {
              let t = s.slice(e, e + this._chunkSize);
              t.length && (this._sender({ type: "chunk_data", chunkId: r, data: Array.from(t) }), o(e + this._chunkSize));
            };
            o(), this._sender({ type: "chunk_end", chunkId: r });
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
            if ((n(e), this._buffer[e.chunkId])) throw new Error(`There was already an entry in the buffer for chunkId ${e.chunkId}`);
            this._buffer[e.chunkId] = { id: e.chunkId, chunks: [], size: e.size };
          }
          _receiveChunkData(e) {
            if ((n(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
            this._buffer[e.chunkId].chunks.push(e.data);
          }
          _mergeChunks(e) {
            if ((n(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
            let t;
            const s = ((e, t) => {
              if (-1 === t) return String.fromCharCode.apply(null, e);
              {
                let s = "";
                for (let r = 0; r < e.length; r += t)
                  r + t > e.length
                    ? (s += String.fromCharCode.apply(null, e.subarray(r)))
                    : (s += String.fromCharCode.apply(null, e.subarray(r, r + t)));
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
            if (!(0, o.isTransportMessage)(t)) throw new Error(`Not a transport message: ${JSON.stringify(t)}`);
            return t;
          }
        }
        t.ChunkedChannel = i;
      },
      2844: (e, t) => {
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
      2374: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DEFAULT_PARAM = void 0), (t.DEFAULT_PARAM = "$_DEFAULT_$");
      },
      8511: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.combineEvents = function (...e) {
            const t = e.reduce((e, t) => (e.push.apply(e, Object.keys(t)), e), []),
              s = [...new Set(t)];
            if (t.length > s.length) throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
            return Object.assign({}, ...e);
          }),
          (t.createEventBus = function (e) {
            const t = (e.channels || []).map((t) => new o.Transport(t, e.ignoredEvents)),
              s = {};
            for (const o in e.events)
              e.events.hasOwnProperty(o) &&
                (!e.ignoredEvents || (e.ignoredEvents && !e.ignoredEvents.includes(o))) &&
                (s[o] = (0, r.connectSlot)(o, t, e.events[o].config));
            return s;
          });
        var r = s(4414),
          o = s(8346);
      },
      8557: (e, t) => {
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
      8489: (e, t) => {
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
      4414: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.slot = function (e = i) {
            return a(e);
          }),
          (t.connectSlot = function (e, t, s = {}) {
            const n = t.reduce((e, t, s) => ({ ...e, [s]: {} }), { [c]: {} }),
              i = t.reduce((e, t, s) => ({ ...e, [s]: {} }), {}),
              a = (e, t) => {
                let s = () => {};
                const r = new Promise((e) => (s = e));
                i[e][t] = { registered: r, onRegister: s };
              },
              d = [],
              p = [],
              _ = (e) => d.forEach((t) => t(e)),
              S = (e) => p.forEach((t) => t(e));
            return (
              t.forEach((t, s) => {
                t.addRemoteHandlerRegistrationCallback(e, (e = o.DEFAULT_PARAM, t) => {
                  if (!i[s]) return;
                  const r = n[s][e] || [];
                  (n[s][e] = r.concat(t)), 1 === l(e, n).length && _(e), i[s][e] || a(String(s), e), i[s][e].onRegister();
                }),
                  t.addRemoteHandlerUnregistrationCallback(e, (e = o.DEFAULT_PARAM, t) => {
                    const r = (n[s][e] || []).indexOf(t);
                    r > -1 && n[s][e].splice(r, 1), 0 === l(e, n).length && S(e), i[s] && a(String(s), e);
                  }),
                  t.addRemoteEventListChangedListener(e, () => {
                    i[s] &&
                      Object.keys(i[s]).forEach((e) => {
                        i[s][e].onRegister();
                      }),
                      delete i[s];
                  });
              }),
              Object.assign(
                function (e, c) {
                  const u = 2 === arguments.length,
                    d = u ? c : e,
                    p = u ? e : o.DEFAULT_PARAM,
                    _ = () => {
                      const e = l(p, n);
                      return (0, r.callHandlers)(d, e);
                    };
                  if (0 === t.length) return _();
                  const S = [];
                  if (
                    (s.autoReconnect &&
                      t.forEach((e) => {
                        S.push(e.autoReconnect());
                      }),
                    s.noBuffer)
                  )
                    return Promise.all(S).then(() => _());
                  {
                    t.forEach((e, t) => {
                      i[t] && !i[t][p] && a(String(t), p);
                    });
                    const e = t.reduce((e, t, s) => {
                      var r;
                      return [...e, ...(null !== (r = i[s] && [i[s][p].registered]) && void 0 !== r ? r : [])];
                    }, []);
                    return Promise.all(e).then(() => _());
                  }
                },
                {
                  on: function (s, r) {
                    let i = "",
                      a = () => new Promise((e) => e());
                    return (
                      "string" == typeof s ? ((i = s), (a = r || a)) : ((i = o.DEFAULT_PARAM), (a = s)),
                      t.forEach((t) => t.registerHandler(e, i, a)),
                      (n[c][i] = (n[c][i] || []).concat(a)),
                      1 === l(i, n).length && _(i),
                      () => {
                        t.forEach((t) => t.unregisterHandler(e, i, a));
                        const s = (n[c][i] || []).indexOf(a);
                        -1 !== s && n[c][i].splice(s, 1), 0 === l(i, n).length && S(i);
                      }
                    );
                  },
                  lazy: function (e, t) {
                    return (
                      d.push(e),
                      p.push(t),
                      u(n).forEach(e),
                      () => {
                        u(n).forEach(t);
                        const s = d.indexOf(e);
                        s > -1 && d.splice(s, 1);
                        const r = p.indexOf(t);
                        r > -1 && p.splice(r, 1);
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
        var r = s(8557),
          o = s(2374);
        const n = () => {
            throw new Error("Slot not connected");
          },
          i = { noBuffer: !1, autoReconnect: !0 };
        t.defaultSlotConfig = i;
        const a = (e) => Object.assign(() => n(), { config: e, lazy: () => n, on: () => n, slotName: "Not connected" }),
          c = "LOCAL_TRANSPORT",
          l = (e, t) => Object.keys(t).reduce((s, r) => s.concat(t[r][e] || []), []),
          u = (e) =>
            Object.keys(e).reduce((t, s) => {
              const r = e[s],
                o = [...t, ...Object.keys(r).filter((e) => (r[e] || []).length > 0)];
              return [...new Set(o)];
            }, []);
      },
      8346: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Transport = void 0);
        var r = s(8557);
        let o = 0;
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
          _requestReceived({ slotName: e, data: t, id: s, param: o }) {
            const n = this._localHandlers[e];
            if (!n) return;
            const i = n[o];
            i &&
              (0, r.callHandlers)(t, i)
                .then((t) => this._channel.send({ type: "response", slotName: e, id: s, data: t, param: o }))
                .catch((t) => this._channel.send({ id: s, message: `${t}`, param: o, slotName: e, stack: t.stack || "", type: "error" }));
          }
          _responseReceived({ slotName: e, data: t, id: s, param: r }) {
            const o = this._pendingRequests[e];
            o && o[r] && o[r][s] && (o[r][s].resolve(t), delete o[r][s]);
          }
          _errorReceived({ slotName: e, id: t, message: s, stack: r, param: o }) {
            const n = this._pendingRequests[e];
            if (!n || !n[o] || !n[o][t]) return;
            const i = new Error(`${s} on ${e} with param ${o}`);
            (i.stack = r || i.stack), this._pendingRequests[e][o][t].reject(i), delete this._pendingRequests[e][o][t];
          }
          _registerRemoteHandler({ slotName: e, param: t }) {
            const s = this._remoteHandlerRegistrationCallbacks[e];
            if (!s) return;
            const r = this._remoteHandlers[e];
            if (r && r[t]) return;
            const n = (s) =>
              new Promise((r, n) => {
                if (!this._channelReady) return n(new Error(`CHANNEL_NOT_READY on ${e}`));
                const i = "" + o++;
                (this._pendingRequests[e] = this._pendingRequests[e] || {}),
                  (this._pendingRequests[e][t] = this._pendingRequests[e][t] || {}),
                  (this._pendingRequests[e][t][i] = { resolve: r, reject: n }),
                  this._channel.send({ type: "request", id: i, slotName: e, param: t, data: s }),
                  setTimeout(() => {
                    const s = ((this._pendingRequests[e] || {})[t] || {})[i];
                    if (s) {
                      const r = new Error(`TIMED_OUT on ${e} with param ${t}`);
                      s.reject(r), delete this._pendingRequests[e][t][i];
                    }
                  }, this._channel.timeout);
              });
            (this._remoteHandlers[e] = this._remoteHandlers[e] || {}), (this._remoteHandlers[e][t] = n), s(t, n);
          }
          _unregisterRemoteHandler({ slotName: e, param: t }) {
            const s = this._remoteHandlerDeletionCallbacks[e],
              r = this._remoteHandlers[e];
            if (!r) return;
            const o = r[t];
            o && s && (s(t, o), delete this._remoteHandlers[e][t]);
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
                Object.keys(this._pendingRequests[t][s]).forEach((r) => {
                  this._pendingRequests[t][s][r].reject(e);
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
            const r = this._localHandlers[e];
            if (r && r[t]) {
              const o = r[t].indexOf(s);
              if (o > -1 && (r[t].splice(o, 1), 0 === r[t].length)) {
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
      1796: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "slot", {
            enumerable: !0,
            get: function () {
              return r.slot;
            }
          }),
          Object.defineProperty(t, "Slot", {
            enumerable: !0,
            get: function () {
              return r.Slot;
            }
          }),
          Object.defineProperty(t, "EventDeclaration", {
            enumerable: !0,
            get: function () {
              return o.EventDeclaration;
            }
          }),
          Object.defineProperty(t, "combineEvents", {
            enumerable: !0,
            get: function () {
              return o.combineEvents;
            }
          }),
          Object.defineProperty(t, "createEventBus", {
            enumerable: !0,
            get: function () {
              return o.createEventBus;
            }
          }),
          Object.defineProperty(t, "Channel", {
            enumerable: !0,
            get: function () {
              return n.Channel;
            }
          }),
          Object.defineProperty(t, "GenericChannel", {
            enumerable: !0,
            get: function () {
              return i.GenericChannel;
            }
          }),
          Object.defineProperty(t, "ChunkedChannel", {
            enumerable: !0,
            get: function () {
              return a.ChunkedChannel;
            }
          }),
          Object.defineProperty(t, "TransportMessage", {
            enumerable: !0,
            get: function () {
              return c.TransportMessage;
            }
          }),
          Object.defineProperty(t, "DEFAULT_PARAM", {
            enumerable: !0,
            get: function () {
              return l.DEFAULT_PARAM;
            }
          });
        var r = s(4414),
          o = s(8511),
          n = s(1093),
          i = s(2844),
          a = s(1515),
          c = s(8489),
          l = s(2374);
      },
      415: (e, t) => {
        "use strict";
        function s() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          if ("string" == typeof e[0]) {
            for (var s = {}, r = 0, o = e; r < o.length; r++) {
              var n = o[r];
              s[n] = n;
            }
            return s;
          }
          return e[0];
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Enum = s),
          (function (e) {
            function t(e) {
              for (var t = [], s = 0, r = Object.keys(e); s < r.length; s++) {
                var o = r[s];
                t.push(e[o]);
              }
              return t;
            }
            (e.ofKeys = function (e) {
              for (var t = {}, s = 0, r = Object.keys(e); s < r.length; s++) {
                var o = r[s];
                t[o] = o;
              }
              return t;
            }),
              (e.keys = function (e) {
                return Object.keys(e);
              }),
              (e.values = t),
              (e.isType = function (e, s) {
                return -1 !== t(e).indexOf(s);
              });
          })((s = t.Enum || (t.Enum = {})));
      },
      8473: function (e, t, s) {
        var r;
        !(function (o, n) {
          "use strict";
          var i = "function",
            a = "undefined",
            c = "object",
            l = "string",
            u = "major",
            d = "model",
            p = "name",
            _ = "type",
            S = "vendor",
            v = "version",
            m = "architecture",
            f = "console",
            E = "mobile",
            O = "tablet",
            h = "smarttv",
            g = "wearable",
            y = "embedded",
            b = "Amazon",
            A = "Apple",
            T = "ASUS",
            C = "BlackBerry",
            P = "Browser",
            I = "Chrome",
            N = "Firefox",
            R = "Google",
            D = "Huawei",
            M = "LG",
            w = "Microsoft",
            L = "Motorola",
            U = "Opera",
            F = "Samsung",
            j = "Sharp",
            k = "Sony",
            G = "Xiaomi",
            x = "Zebra",
            B = "Facebook",
            W = "Chromium OS",
            K = "Mac OS",
            Q = function (e) {
              for (var t = {}, s = 0; s < e.length; s++) t[e[s].toUpperCase()] = e[s];
              return t;
            },
            V = function (e, t) {
              return typeof e === l && -1 !== H(t).indexOf(H(e));
            },
            H = function (e) {
              return e.toLowerCase();
            },
            Y = function (e, t) {
              if (typeof e === l) return (e = e.replace(/^\s\s*/, "")), typeof t === a ? e : e.substring(0, 350);
            },
            Z = function (e, t) {
              for (var s, r, o, a, l, u, d = 0; d < t.length && !l; ) {
                var p = t[d],
                  _ = t[d + 1];
                for (s = r = 0; s < p.length && !l && p[s]; )
                  if ((l = p[s++].exec(e)))
                    for (o = 0; o < _.length; o++)
                      (u = l[++r]),
                        typeof (a = _[o]) === c && a.length > 0
                          ? 2 === a.length
                            ? typeof a[1] == i
                              ? (this[a[0]] = a[1].call(this, u))
                              : (this[a[0]] = a[1])
                            : 3 === a.length
                            ? typeof a[1] !== i || (a[1].exec && a[1].test)
                              ? (this[a[0]] = u ? u.replace(a[1], a[2]) : n)
                              : (this[a[0]] = u ? a[1].call(this, u, a[2]) : n)
                            : 4 === a.length && (this[a[0]] = u ? a[3].call(this, u.replace(a[1], a[2])) : n)
                          : (this[a] = u || n);
                d += 2;
              }
            },
            q = function (e, t) {
              for (var s in t)
                if (typeof t[s] === c && t[s].length > 0) {
                  for (var r = 0; r < t[s].length; r++) if (V(t[s][r], e)) return "?" === s ? n : s;
                } else if (V(t[s], e)) return "?" === s ? n : s;
              return e;
            },
            z = {
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
            X = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [v, [p, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [v, [p, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                ],
                [p, v],
                [/opios[\/ ]+([\w\.]+)/i],
                [v, [p, U + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [v, [p, U]],
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
                [p, v],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [v, [p, "UC" + P]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                [v, [p, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [v, [p, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [v, [p, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [v, [p, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [v, [p, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 Secure " + P], v],
                [/\bfocus\/([\w\.]+)/i],
                [v, [p, N + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [v, [p, U + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [v, [p, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [v, [p, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [v, [p, U + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [v, [p, "MIUI " + P]],
                [/fxios\/([-\w\.]+)/i],
                [v, [p, N]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[p, "360 " + P]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 " + P], v],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[p, /_/g, " "], v],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                ],
                [p, v],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                [p],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[p, B], v],
                [
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i
                ],
                [p, v],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [v, [p, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [v, [p, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [v, [p, I + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[p, I + " WebView"], v],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [v, [p, "Android " + P]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [p, v],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [v, [p, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [v, p],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  p,
                  [v, q, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [p, v],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[p, "Netscape"], v],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [v, [p, N + " Reality"]],
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
                [p, v],
                [/(cobalt)\/([\w\.]+)/i],
                [p, [v, /master.|lts./, ""]]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[m, "amd64"]],
                [/(ia32(?=;))/i],
                [[m, H]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[m, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[m, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[m, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[m, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[m, /ower/, "", H]],
                [/(sun4\w)[;\)]/i],
                [[m, "sparc"]],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [[m, H]]
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [d, [S, F], [_, O]],
                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [d, [S, F], [_, E]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [d, [S, A], [_, E]],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [d, [S, A], [_, O]],
                [/(macintosh);/i],
                [d, [S, A]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [d, [S, j], [_, E]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [d, [S, D], [_, O]],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                [d, [S, D], [_, E]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                ],
                [
                  [d, /_/g, " "],
                  [S, G],
                  [_, E]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [d, /_/g, " "],
                  [S, G],
                  [_, O]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [d, [S, "OPPO"], [_, E]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [d, [S, "Vivo"], [_, E]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [d, [S, "Realme"], [_, E]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                ],
                [d, [S, L], [_, E]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [d, [S, L], [_, O]],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [d, [S, M], [_, O]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i
                ],
                [d, [S, M], [_, E]],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [d, [S, "Lenovo"], [_, O]],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                  [d, /_/g, " "],
                  [S, "Nokia"],
                  [_, E]
                ],
                [/(pixel c)\b/i],
                [d, [S, R], [_, O]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [d, [S, R], [_, E]],
                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [d, [S, k], [_, E]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [d, "Xperia Tablet"],
                  [S, k],
                  [_, O]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [d, [S, "OnePlus"], [_, E]],
                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [d, [S, b], [_, O]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [d, /(.+)/g, "Fire Phone $1"],
                  [S, b],
                  [_, E]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [d, S, [_, O]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [d, [S, C], [_, E]],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [d, [S, T], [_, O]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [d, [S, T], [_, E]],
                [/(nexus 9)/i],
                [d, [S, "HTC"], [_, O]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                ],
                [S, [d, /_/g, " "], [_, E]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [d, [S, "Acer"], [_, O]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [d, [S, "Meizu"], [_, E]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i
                ],
                [S, d, [_, E]],
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
                [S, d, [_, O]],
                [/(surface duo)/i],
                [d, [S, w], [_, O]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [d, [S, "Fairphone"], [_, E]],
                [/(u304aa)/i],
                [d, [S, "AT&T"], [_, E]],
                [/\bsie-(\w*)/i],
                [d, [S, "Siemens"], [_, E]],
                [/\b(rct\w+) b/i],
                [d, [S, "RCA"], [_, O]],
                [/\b(venue[\d ]{2,7}) b/i],
                [d, [S, "Dell"], [_, O]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [d, [S, "Verizon"], [_, O]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [d, [S, "Barnes & Noble"], [_, O]],
                [/\b(tm\d{3}\w+) b/i],
                [d, [S, "NuVision"], [_, O]],
                [/\b(k88) b/i],
                [d, [S, "ZTE"], [_, O]],
                [/\b(nx\d{3}j) b/i],
                [d, [S, "ZTE"], [_, E]],
                [/\b(gen\d{3}) b.+49h/i],
                [d, [S, "Swiss"], [_, E]],
                [/\b(zur\d{3}) b/i],
                [d, [S, "Swiss"], [_, O]],
                [/\b((zeki)?tb.*\b) b/i],
                [d, [S, "Zeki"], [_, O]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[S, "Dragon Touch"], d, [_, O]],
                [/\b(ns-?\w{0,9}) b/i],
                [d, [S, "Insignia"], [_, O]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [d, [S, "NextBook"], [_, O]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[S, "Voice"], d, [_, E]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[S, "LvTel"], d, [_, E]],
                [/\b(ph-1) /i],
                [d, [S, "Essential"], [_, E]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [d, [S, "Envizen"], [_, O]],
                [/\b(trio[-\w\. ]+) b/i],
                [d, [S, "MachSpeed"], [_, O]],
                [/\btu_(1491) b/i],
                [d, [S, "Rotor"], [_, O]],
                [/(shield[\w ]+) b/i],
                [d, [S, "Nvidia"], [_, O]],
                [/(sprint) (\w+)/i],
                [S, d, [_, E]],
                [/(kin\.[onetw]{3})/i],
                [
                  [d, /\./g, " "],
                  [S, w],
                  [_, E]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [d, [S, x], [_, O]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [d, [S, x], [_, E]],
                [/smart-tv.+(samsung)/i],
                [S, [_, h]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [d, /^/, "SmartTV"],
                  [S, F],
                  [_, h]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [S, M],
                  [_, h]
                ],
                [/(apple) ?tv/i],
                [S, [d, A + " TV"], [_, h]],
                [/crkey/i],
                [
                  [d, I + "cast"],
                  [S, R],
                  [_, h]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [d, [S, b], [_, h]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [d, [S, j], [_, h]],
                [/(bravia[\w ]+)( bui|\))/i],
                [d, [S, k], [_, h]],
                [/(mitv-\w{5}) bui/i],
                [d, [S, G], [_, h]],
                [/Hbbtv.*(technisat) (.*);/i],
                [S, d, [_, h]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                [
                  [S, Y],
                  [d, Y],
                  [_, h]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[_, h]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [S, d, [_, f]],
                [/droid.+; (shield) bui/i],
                [d, [S, "Nvidia"], [_, f]],
                [/(playstation [345portablevi]+)/i],
                [d, [S, k], [_, f]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [d, [S, w], [_, f]],
                [/((pebble))app/i],
                [S, d, [_, g]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [d, [S, A], [_, g]],
                [/droid.+; (glass) \d/i],
                [d, [S, R], [_, g]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [d, [S, x], [_, g]],
                [/(quest( 2| pro)?)/i],
                [d, [S, B], [_, g]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [S, [_, y]],
                [/(aeobc)\b/i],
                [d, [S, b], [_, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [d, [_, E]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [d, [_, O]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[_, O]],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [[_, E]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [d, [S, "Generic"]]
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [v, [p, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [v, [p, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i
                ],
                [p, v],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [v, p]
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [p, v],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                ],
                [p, [v, q, z]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [p, "Windows"],
                  [v, q, z]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                [
                  [v, /_/g, "."],
                  [p, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                  [p, K],
                  [v, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [v, p],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i
                ],
                [p, v],
                [/\(bb(10);/i],
                [v, [p, C]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [v, [p, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [v, [p, N + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [v, [p, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [v, [p, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [v, [p, I + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[p, W], v],
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
                [p, v],
                [/(sunos) ?([\w\.\d]*)/i],
                [[p, "Solaris"], v],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i
                ],
                [p, v]
              ]
            },
            J = function (e, t) {
              if ((typeof e === c && ((t = e), (e = n)), !(this instanceof J))) return new J(e, t).getResult();
              var s = typeof o !== a && o.navigator ? o.navigator : n,
                r = e || (s && s.userAgent ? s.userAgent : ""),
                f = s && s.userAgentData ? s.userAgentData : n,
                h = t
                  ? (function (e, t) {
                      var s = {};
                      for (var r in e) t[r] && t[r].length % 2 == 0 ? (s[r] = t[r].concat(e[r])) : (s[r] = e[r]);
                      return s;
                    })(X, t)
                  : X,
                g = s && s.userAgent == r;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[p] = n),
                    (t[v] = n),
                    Z.call(t, r, h.browser),
                    (t[u] = typeof (e = t[v]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : n),
                    g && s && s.brave && typeof s.brave.isBrave == i && (t[p] = "Brave"),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[m] = n), Z.call(e, r, h.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[S] = n),
                    (e[d] = n),
                    (e[_] = n),
                    Z.call(e, r, h.device),
                    g && !e[_] && f && f.mobile && (e[_] = E),
                    g &&
                      "Macintosh" == e[d] &&
                      s &&
                      typeof s.standalone !== a &&
                      s.maxTouchPoints &&
                      s.maxTouchPoints > 2 &&
                      ((e[d] = "iPad"), (e[_] = O)),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[p] = n), (e[v] = n), Z.call(e, r, h.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (
                    (e[p] = n),
                    (e[v] = n),
                    Z.call(e, r, h.os),
                    g && !e[p] && f && "Unknown" != f.platform && (e[p] = f.platform.replace(/chrome os/i, W).replace(/macos/i, K)),
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
                  return r;
                }),
                (this.setUA = function (e) {
                  return (r = typeof e === l && e.length > 350 ? Y(e, 350) : e), this;
                }),
                this.setUA(r),
                this
              );
            };
          (J.VERSION = "1.0.35"),
            (J.BROWSER = Q([p, v, u])),
            (J.CPU = Q([m])),
            (J.DEVICE = Q([d, S, _, f, E, h, O, g, y])),
            (J.ENGINE = J.OS = Q([p, v])),
            typeof t !== a
              ? (e.exports && (t = e.exports = J), (t.UAParser = J))
              : s.amdO
              ? (r = function () {
                  return J;
                }.call(t, s, t, e)) === n || (e.exports = r)
              : typeof o !== a && (o.UAParser = J);
          var $ = typeof o !== a && (o.jQuery || o.Zepto);
          if ($ && !$.ua) {
            var ee = new J();
            ($.ua = ee.getResult()),
              ($.ua.get = function () {
                return ee.getUA();
              }),
              ($.ua.set = function (e) {
                ee.setUA(e);
                var t = ee.getResult();
                for (var s in t) $.ua[s] = t[s];
              });
          }
        })("object" == typeof window ? window : this);
      },
      3094: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5689: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.abTestsLiveQueriesSlots = t.abTestsQueriesSlots = t.abTestsCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.abTestsCommandsSlots = { participateToUserABTest: (0, r.slot)() }),
          (t.abTestsQueriesSlots = { getUserABTestVariant: (0, r.slot)() }),
          (t.abTestsLiveQueriesSlots = { liveUserABTestVariant: (0, o.liveSlot)() });
      },
      2607: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3094), t), o(s(5689), t);
      },
      8209: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1831), t), o(s(4190), t);
      },
      1831: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.contactInfoLiveQueriesSlots = t.contactInfoQueriesSlots = t.contactInfoCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.contactInfoCommandsSlots = { editContactInfo: (0, r.slot)() }),
          (t.contactInfoQueriesSlots = { getContactInfo: (0, r.slot)() }),
          (t.contactInfoLiveQueriesSlots = { liveContactInfo: (0, o.liveSlot)() });
      },
      4190: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EditContactInfoErrorCode = void 0),
          ((s = t.EditContactInfoErrorCode || (t.EditContactInfoErrorCode = {}))[(s.EMPTY_EMAIL = 0)] = "EMPTY_EMAIL"),
          (s[(s.INVALID_EMAIL = 1)] = "INVALID_EMAIL"),
          (s[(s.UNKNOWN_ERROR = 2)] = "UNKNOWN_ERROR");
      },
      9539: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5315), t);
      },
      5315: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.subscriptionCodeLiveQueriesSlots = t.subscriptionCodeQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.subscriptionCodeQueriesSlots = { getSubscriptionCode: (0, r.slot)() }),
          (t.subscriptionCodeLiveQueriesSlots = { liveSubscriptionCode: (0, o.liveSlot)() });
      },
      8875: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AccountCreationCode = void 0),
          ((s = t.AccountCreationCode || (t.AccountCreationCode = {}))[(s.USER_EXISTS = 0)] = "USER_EXISTS"),
          (s[(s.USER_DOESNT_EXIST = 1)] = "USER_DOESNT_EXIST"),
          (s[(s.USER_DOESNT_EXIST_UNLIKELY_MX = 2)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
          (s[(s.USER_DOESNT_EXIST_INVALID_MX = 3)] = "USER_DOESNT_EXIST_INVALID_MX"),
          (s[(s.USER_DOESNT_EXIST_SSO_NON_PROVISIONED = 4)] = "USER_DOESNT_EXIST_SSO_NON_PROVISIONED"),
          (s[(s.USER_SSO_PROVISIONED = 5)] = "USER_SSO_PROVISIONED"),
          (s[(s.USER_NITRO_SSO_PROVISIONED = 6)] = "USER_NITRO_SSO_PROVISIONED"),
          (s[(s.USER_NOT_PROPOSED = 7)] = "USER_NOT_PROPOSED");
      },
      1225: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.accountCreationLiveQueriesSlots = void 0);
        const r = s(5195);
        t.accountCreationLiveQueriesSlots = { liveAccountCreated: (0, r.liveSlot)() };
      },
      4705: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8875), t), o(s(1225), t);
      },
      1336: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.antiPhishingLiveQueriesSlots = void 0);
        const r = s(5195);
        t.antiPhishingLiveQueriesSlots = { livePhishingURLList: (0, r.liveSlot)() };
      },
      8244: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1336), t);
      },
      9051: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4837), t), o(s(4373), t);
      },
      4837: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.twoFactorAuthenticationLiveQueriesSlots =
            t.twoFactorAuthenticationQueriesSlots =
            t.twoFactorAuthenticationCommandsSlots =
              void 0);
        const r = s(1796),
          o = s(5195);
        (t.twoFactorAuthenticationCommandsSlots = {
          refreshU2FDevicesList: (0, r.slot)(),
          removeU2FAuthenticator: (0, r.slot)(),
          refreshTwoFactorAuthenticationInfo: (0, r.slot)(),
          startTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
          stopTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
          continueTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
          backTwoFactorAuthenticationEnableFlow: (0, r.slot)(),
          startTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
          stopTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
          continueTwoFactorAuthenticationDisableFlow: (0, r.slot)(),
          backTwoFactorAuthenticationDisableFlow: (0, r.slot)()
        }),
          (t.twoFactorAuthenticationQueriesSlots = {
            getU2FDevicesList: (0, r.slot)(),
            getTwoFactorAuthenticationEnableStage: (0, r.slot)(),
            getTwoFactorAuthenticationDisableStage: (0, r.slot)()
          }),
          (t.twoFactorAuthenticationLiveQueriesSlots = {
            liveU2FDevicesList: (0, o.liveSlot)(),
            liveTwoFactorAuthenticationEnableStage: (0, o.liveSlot)(),
            liveTwoFactorAuthenticationDisableStage: (0, o.liveSlot)()
          });
      },
      4373: (e, t) => {
        "use strict";
        var s, r, o, n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RequestTOTPActivationError =
            t.TwoFactorAuthenticationDisableStages =
            t.TwoFactorAuthenticationEnableStages =
            t.RemoveU2FAuthenticatorError =
            t.RefreshU2FErrorCode =
              void 0),
          ((i = t.RefreshU2FErrorCode || (t.RefreshU2FErrorCode = {}))[(i.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
          ((n = t.RemoveU2FAuthenticatorError || (t.RemoveU2FAuthenticatorError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (n.NO_KEYHANDLE_FOUND = "NO_KEYHANDLE_FOUND"),
          (n.WRONG_AUTHENTICATION_CODE = "WRONG_AUTHENTICATION_CODE"),
          ((o = t.TwoFactorAuthenticationEnableStages || (t.TwoFactorAuthenticationEnableStages = {})).AUTHENTICATION_TYPE =
            "AUTHENTICATION_TYPE"),
          (o.BACKUP_PHONE = "BACKUP_PHONE"),
          (o.QR_CODE = "QR_CODE"),
          (o.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
          (o.LOADING = "LOADING"),
          (o.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
          (o.BACKUP_CODES = "BACKUP_CODES"),
          (o.GENERIC_ERROR = "GENERIC_ERROR"),
          (o.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
          (o.SUCCESS = "SUCCESS"),
          ((r = t.TwoFactorAuthenticationDisableStages || (t.TwoFactorAuthenticationDisableStages = {})).CONFIRMATION = "CONFIRMATION"),
          (r.AUTHENTICATION_CODE = "AUTHENTICATION_CODE"),
          (r.BACKUP_CODE = "BACKUP_CODE"),
          (r.FINALIZING_CHANGES = "FINALIZING_CHANGES"),
          (r.SUCCESS = "SUCCESS"),
          (r.LOGOUT_REQUIRED = "LOGOUT_REQUIRED"),
          (r.GENERIC_ERROR = "GENERIC_ERROR"),
          ((s = t.RequestTOTPActivationError || (t.RequestTOTPActivationError = {})).INTERNAL_ERROR = "internal_error"),
          (s.CANNOT_SEED_FOR_USER_WITH_TOTP_ENABLED = "cannot_seed_for_user_with_TOTP_enabled"),
          (s.OTP_FAILED = "otp_failed"),
          (s.TOTP_TYPE_IS_NOT_SET_TO_EMAIL_TOKEN = "totp_type_is_not_set_to_email_token"),
          (s.PHONE_VALIDATION_FAILED = "phone_validation_failed");
      },
      2420: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8185), t), o(s(9110), t);
      },
      9110: (e, t) => {
        "use strict";
        var s, r, o, n, i, a, c, l;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InitUserVerificationWithWebAuthnError =
            t.RemoveWebAuthnAuthenticatorError =
            t.DisableWebAuthnAuthenticationError =
            t.OpenSessionWithWebAuthnAuthenticatorError =
            t.InitOpenSessionWithWebAuthnAuthenticatorError =
            t.RefreshAvailableWebAuthnAuthenticatorsError =
            t.RefreshWebAuthnAuthenticatorsError =
            t.RegisterWebAuthnAuthenticatorError =
            t.InitRegisterWebAuthnAuthenticatorError =
            t.EnableWebAuthnAuthenticationError =
            t.InitEnableWebAuthnAuthenticationError =
            t.WebAuthnCallTypes =
              void 0),
          (t.WebAuthnCallTypes = Object.freeze({ CREATE: "webauthn.create", GET: "webauthn.get" })),
          ((t.InitEnableWebAuthnAuthenticationError || (t.InitEnableWebAuthnAuthenticationError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          ((l = t.EnableWebAuthnAuthenticationError || (t.EnableWebAuthnAuthenticationError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (l.USER_HAS_OTP = "USER_HAS_OTP"),
          (l.WEBAUTHN_SERVICE_INIT_FAILED = "WEBAUTHN_SERVICE_INIT_FAILED"),
          ((t.InitRegisterWebAuthnAuthenticatorError || (t.InitRegisterWebAuthnAuthenticatorError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          ((c = t.RegisterWebAuthnAuthenticatorError || (t.RegisterWebAuthnAuthenticatorError = {})).USER_HAS_OTP = "USER_HAS_OTP"),
          (c.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          ((t.RefreshWebAuthnAuthenticatorsError || (t.RefreshWebAuthnAuthenticatorsError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          ((a = t.RefreshAvailableWebAuthnAuthenticatorsError || (t.RefreshAvailableWebAuthnAuthenticatorsError = {})).UNKNOWN_ERROR =
            "UNKNOWN_ERROR"),
          (a.MISSING_SESSION_KEYS_IN_STORE = "MISSING_SESSION_KEYS_IN_STORE"),
          ((i = t.InitOpenSessionWithWebAuthnAuthenticatorError || (t.InitOpenSessionWithWebAuthnAuthenticatorError = {})).UNKNOWN_ERROR =
            "UNKNOWN_ERROR"),
          (i.UNAVAILABLE_AUTHENTICATORS = "UNAVAILABLE_AUTHENTICATORS"),
          (i.CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION = "CANNOT_TRIGGER_WEBAUTHN_AUTHENTICATION"),
          ((n = t.OpenSessionWithWebAuthnAuthenticatorError || (t.OpenSessionWithWebAuthnAuthenticatorError = {})).UNKNOWN_ERROR =
            "UNKNOWN_ERROR"),
          (n.MP_MISSING_IN_SESSION_ERROR = "MP_MISSING_IN_SESSION_ERROR"),
          ((o = t.DisableWebAuthnAuthenticationError || (t.DisableWebAuthnAuthenticationError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (o.WEBAUTHN_SERVICE_DEACTIVATE_FAILED = "WEBAUTHN_SERVICE_DEACTIVATE_FAILED"),
          (o.MISSING_LOGIN = "MISSING_LOGIN"),
          ((r = t.RemoveWebAuthnAuthenticatorError || (t.RemoveWebAuthnAuthenticatorError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (r.CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR = "CANNOT_REMOVE_WEBAUTHN_AUTHENTICATOR"),
          ((s = t.InitUserVerificationWithWebAuthnError || (t.InitUserVerificationWithWebAuthnError = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (s.LOGGED_OUT = "LOGGED_OUT"),
          (s.CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS = "CANNOT_REFRESH_WEBAUTHN_AUTHENTICATORS"),
          (s.CANNOT_FETCH_WEBAUTHN_CHALLENGE = "CANNOT_FETCH_WEBAUTHN_CHALLENGE");
      },
      8185: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.webAuthnAuthenticationLiveQueriesSlots =
            t.webAuthnAuthenticationQueriesSlots =
            t.webAuthnAuthenticationCommandsSlots =
              void 0);
        const r = s(1796),
          o = s(5195);
        (t.webAuthnAuthenticationCommandsSlots = {
          enableWebAuthnAuthentication: (0, r.slot)(),
          initEnableWebAuthnAuthentication: (0, r.slot)(),
          refreshAvailableWebAuthnAuthenticators: (0, r.slot)(),
          refreshWebAuthnAuthenticators: (0, r.slot)(),
          initRegisterWebAuthnAuthenticator: (0, r.slot)(),
          registerWebAuthnAuthenticator: (0, r.slot)(),
          initOpenSessionWithWebAuthnAuthenticator: (0, r.slot)(),
          openSessionWithWebAuthnAuthenticator: (0, r.slot)(),
          disableWebAuthnAuthentication: (0, r.slot)(),
          removeWebAuthnAuthenticator: (0, r.slot)(),
          initUserVerificationWithWebAuthn: (0, r.slot)()
        }),
          (t.webAuthnAuthenticationQueriesSlots = {
            getWebAuthnAuthenticators: (0, r.slot)(),
            getWebAuthnAuthenticationOptedIn: (0, r.slot)()
          }),
          (t.webAuthnAuthenticationLiveQueriesSlots = {
            liveWebAuthnAuthenticators: (0, o.liveSlot)(),
            liveWebAuthnAuthenticationOptedIn: (0, o.liveSlot)()
          });
      },
      4634: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.authenticationLiveQueriesSlots = t.authenticationQueriesSlots = t.authenticationCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195),
          n = s(9051),
          i = s(2420);
        (t.authenticationCommandsSlots = (0, r.combineEvents)(
          {
            registerDevice: (0, r.slot)(),
            requestExtraDeviceToken: (0, r.slot)(),
            requestEmailToken: (0, r.slot)(),
            requestPaymentUpdateAuthenticationToken: (0, r.slot)(),
            setReactivationStatus: (0, r.slot)()
          },
          i.webAuthnAuthenticationCommandsSlots,
          n.twoFactorAuthenticationCommandsSlots
        )),
          (t.authenticationQueriesSlots = (0, r.combineEvents)(
            {
              getHasOtp2Type: (0, r.slot)(),
              getUserOtpType: (0, r.slot)(),
              getReactivationStatus: (0, r.slot)(),
              getAvailableUserVerificationMethods: (0, r.slot)()
            },
            i.webAuthnAuthenticationQueriesSlots,
            n.twoFactorAuthenticationQueriesSlots
          )),
          (t.authenticationLiveQueriesSlots = (0, r.combineEvents)(
            { liveReactivationStatus: (0, o.liveSlot)() },
            i.webAuthnAuthenticationLiveQueriesSlots,
            n.twoFactorAuthenticationLiveQueriesSlots
          ));
      },
      9888: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4634), t), o(s(8190), t), o(s(9051), t), o(s(2420), t);
      },
      8190: (e, t) => {
        "use strict";
        var s, r, o, n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AuthenticationCode =
            t.OtpType =
            t.UserVerificationMethod =
            t.PersistData =
            t.ReactivationStatus =
            t.EmailTokenApiError =
              void 0),
          (t.EmailTokenApiError = "SEND_TOKEN_FAILED"),
          ((i = t.ReactivationStatus || (t.ReactivationStatus = {})).DISABLED = "DISABLED"),
          (i.CLASSIC = "CLASSIC"),
          (i.WEBAUTHN = "WEBAUTHN"),
          ((n = t.PersistData || (t.PersistData = {}))[(n.PERSIST_DATA_YES = 0)] = "PERSIST_DATA_YES"),
          (n[(n.PERSIST_DATA_NO = 1)] = "PERSIST_DATA_NO"),
          ((o = t.UserVerificationMethod || (t.UserVerificationMethod = {})).MasterPassword = "masterPassword"),
          (o.Webauthn = "webauthn"),
          ((r = t.OtpType || (t.OtpType = {}))[(r.NO_OTP = 0)] = "NO_OTP"),
          (r[(r.OTP_NEW_DEVICE = 1)] = "OTP_NEW_DEVICE"),
          (r[(r.OTP_LOGIN = 2)] = "OTP_LOGIN"),
          ((s = t.AuthenticationCode || (t.AuthenticationCode = {}))[(s.INVALID_LOGIN = 0)] = "INVALID_LOGIN"),
          (s[(s.EMPTY_LOGIN = 1)] = "EMPTY_LOGIN"),
          (s[(s.EMPTY_MASTER_PASSWORD = 2)] = "EMPTY_MASTER_PASSWORD"),
          (s[(s.EMPTY_ENCRYPTED_KEY = 3)] = "EMPTY_ENCRYPTED_KEY"),
          (s[(s.INVALID_ENCRYPTED_KEY = 4)] = "INVALID_ENCRYPTED_KEY"),
          (s[(s.EMPTY_TOKEN = 5)] = "EMPTY_TOKEN"),
          (s[(s.EMPTY_OTP = 6)] = "EMPTY_OTP"),
          (s[(s.SEND_TOKEN_FAILED = 7)] = "SEND_TOKEN_FAILED"),
          (s[(s.UKI_REGISTRATION_FAILED = 8)] = "UKI_REGISTRATION_FAILED"),
          (s[(s.REGISTER_DEVICE_FAILED = 9)] = "REGISTER_DEVICE_FAILED"),
          (s[(s.BUSINESS_ERROR = 10)] = "BUSINESS_ERROR"),
          (s[(s.USER_DOESNT_EXIST = 11)] = "USER_DOESNT_EXIST"),
          (s[(s.USER_DOESNT_EXIST_UNLIKELY_MX = 12)] = "USER_DOESNT_EXIST_UNLIKELY_MX"),
          (s[(s.USER_DOESNT_EXIST_INVALID_MX = 13)] = "USER_DOESNT_EXIST_INVALID_MX"),
          (s[(s.USER_UNAUTHORIZED = 14)] = "USER_UNAUTHORIZED"),
          (s[(s.WRONG_PASSWORD = 15)] = "WRONG_PASSWORD"),
          (s[(s.DATA_TAMPERED_ERROR = 16)] = "DATA_TAMPERED_ERROR"),
          (s[(s.LOGGEDIN = 17)] = "LOGGEDIN"),
          (s[(s.ASK_TOKEN = 18)] = "ASK_TOKEN"),
          (s[(s.ASK_OTP = 19)] = "ASK_OTP"),
          (s[(s.ASK_MASTER_PASSWORD = 20)] = "ASK_MASTER_PASSWORD"),
          (s[(s.USE_LOCAL_UKI = 21)] = "USE_LOCAL_UKI"),
          (s[(s.ASK_DASHLANE_AUTHENTICATOR = 22)] = "ASK_DASHLANE_AUTHENTICATOR"),
          (s[(s.OTP_NOT_VALID = 23)] = "OTP_NOT_VALID"),
          (s[(s.OTP_TOO_MANY_ATTEMPTS = 24)] = "OTP_TOO_MANY_ATTEMPTS"),
          (s[(s.OTP_ALREADY_USED = 25)] = "OTP_ALREADY_USED"),
          (s[(s.BACKUP_CODE_NOT_VALID = 26)] = "BACKUP_CODE_NOT_VALID"),
          (s[(s.TOKEN_NOT_VALID = 27)] = "TOKEN_NOT_VALID"),
          (s[(s.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED = 28)] = "DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED"),
          (s[(s.SERVER_KEY_MISSING = 29)] = "SERVER_KEY_MISSING"),
          (s[(s.TOKEN_LOCKED = 30)] = "TOKEN_LOCKED"),
          (s[(s.TOKEN_TOO_MANY_ATTEMPTS = 31)] = "TOKEN_TOO_MANY_ATTEMPTS"),
          (s[(s.TOKEN_ACCOUNT_LOCKED = 32)] = "TOKEN_ACCOUNT_LOCKED"),
          (s[(s.TOKEN_EXPIRED = 33)] = "TOKEN_EXPIRED"),
          (s[(s.NO_ACTIVE_AUTHENTICATOR = 34)] = "NO_ACTIVE_AUTHENTICATOR"),
          (s[(s.FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE = 35)] = "FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE"),
          (s[(s.DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION = 36)] = "DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION"),
          (s[(s.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED = 37)] = "DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED"),
          (s[(s.TOKEN_PROVIDED_FOR_LOCAL_SESSION = 38)] = "TOKEN_PROVIDED_FOR_LOCAL_SESSION"),
          (s[(s.DEVICE_ALREADY_REGISTERED = 39)] = "DEVICE_ALREADY_REGISTERED"),
          (s[(s.OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION = 40)] = "OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION"),
          (s[(s.DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP = 41)] = "DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP"),
          (s[(s.UNKNOWN_SYNC_ERROR = 42)] = "UNKNOWN_SYNC_ERROR"),
          (s[(s.INVALID_UKI = 43)] = "INVALID_UKI"),
          (s[(s.UNKNOWN_UKI = 44)] = "UNKNOWN_UKI"),
          (s[(s.UNKNOWN_ERROR = 45)] = "UNKNOWN_ERROR"),
          (s[(s.UNEXPECTED_OTP_TYPE = 46)] = "UNEXPECTED_OTP_TYPE"),
          (s[(s.UNAUTHORIZED = 47)] = "UNAUTHORIZED"),
          (s[(s.UNAUTHORIZED_NOT_VALID_CONTENT = 48)] = "UNAUTHORIZED_NOT_VALID_CONTENT"),
          (s[(s.NETWORK_ERROR = 49)] = "NETWORK_ERROR"),
          (s[(s.THROTTLED = 50)] = "THROTTLED"),
          (s[(s.SESSION_ALREADY_OPENED = 51)] = "SESSION_ALREADY_OPENED"),
          (s[(s.INVALID_SESSION = 52)] = "INVALID_SESSION"),
          (s[(s.DEVICE_NOT_REGISTERED = 53)] = "DEVICE_NOT_REGISTERED"),
          (s[(s.MISSING_APP_KEYS = 54)] = "MISSING_APP_KEYS"),
          (s[(s.PROVIDE_EXTRA_DEVICE_TOKEN = 55)] = "PROVIDE_EXTRA_DEVICE_TOKEN"),
          (s[(s.PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE = 56)] = "PROVIDE_MASTER_PASSWORD_FOR_EXTRA_DEVICE"),
          (s[(s.PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE = 57)] = "PROVIDE_MASTER_PASSWORD_AND_SERVER_KEY_FOR_EXTRA_DEVICE"),
          (s[(s.ASK_OTP_FOR_NEW_DEVICE = 58)] = "ASK_OTP_FOR_NEW_DEVICE"),
          (s[(s.TEAM_GENERIC_ERROR = 59)] = "TEAM_GENERIC_ERROR"),
          (s[(s.SSO_LOGIN_BYPASS = 60)] = "SSO_LOGIN_BYPASS"),
          (s[(s.SSO_VERIFICATION_FAILED = 61)] = "SSO_VERIFICATION_FAILED"),
          (s[(s.SSO_BLOCKED = 62)] = "SSO_BLOCKED"),
          (s[(s.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION = 63)] = "CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION"),
          (s[(s.USER_DOESNT_EXIST_SSO = 64)] = "USER_DOESNT_EXIST_SSO");
      },
      233: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.autofillDataQueriesSlots = void 0);
        const r = s(1796);
        t.autofillDataQueriesSlots = {
          getSingleAddressForAutofill: (0, r.slot)(),
          getMultipleAddressesForAutofill: (0, r.slot)(),
          getSingleBankAccountForAutofill: (0, r.slot)(),
          getMultipleBankAccountsForAutofill: (0, r.slot)(),
          getSingleCompanyForAutofill: (0, r.slot)(),
          getMultipleCompaniesForAutofill: (0, r.slot)(),
          getSingleCredentialForAutofill: (0, r.slot)(),
          getMultipleCredentialsForAutofill: (0, r.slot)(),
          getSingleDriverLicenseForAutofill: (0, r.slot)(),
          getMultipleDriverLicensesForAutofill: (0, r.slot)(),
          getSingleEmailForAutofill: (0, r.slot)(),
          getMultipleEmailsForAutofill: (0, r.slot)(),
          getSingleFiscalIdForAutofill: (0, r.slot)(),
          getMultipleFiscalIdsForAutofill: (0, r.slot)(),
          getSingleGeneratedPasswordForAutofill: (0, r.slot)(),
          getMultipleGeneratedPasswordsForAutofill: (0, r.slot)(),
          getSingleIdCardForAutofill: (0, r.slot)(),
          getMultipleIdCardsForAutofill: (0, r.slot)(),
          getSingleIdentityForAutofill: (0, r.slot)(),
          getMultipleIdentitiesForAutofill: (0, r.slot)(),
          getSingleNoteForAutofill: (0, r.slot)(),
          getMultipleNotesForAutofill: (0, r.slot)(),
          getSinglePasskeyForAutofill: (0, r.slot)(),
          getSinglePassportForAutofill: (0, r.slot)(),
          getMultiplePassportsForAutofill: (0, r.slot)(),
          getSinglePaymentCardForAutofill: (0, r.slot)(),
          getMultiplePaymentCardsForAutofill: (0, r.slot)(),
          getSinglePersonalWebsiteForAutofill: (0, r.slot)(),
          getMultiplePersonalWebsitesForAutofill: (0, r.slot)(),
          getSinglePhoneForAutofill: (0, r.slot)(),
          getMultiplePhonesForAutofill: (0, r.slot)(),
          getSingleSocialSecurityIdForAutofill: (0, r.slot)(),
          getMultipleSocialSecurityIdsForAutofill: (0, r.slot)(),
          getAutofillSettingOnUrlForAutofill: (0, r.slot)()
        };
      },
      5861: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(233), t), o(s(3577), t), o(s(9450), t), o(s(8698), t);
      },
      9450: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3577: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AutofillOptions = void 0),
          ((s = t.AutofillOptions || (t.AutofillOptions = {})).ANALYSIS_ENABLED_ON_ALL_FORMS = "ANALYSIS_ENABLED_ON_ALL_FORMS"),
          (s.ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS = "ANALYSIS_ENABLED_ONLY_ON_LOGINS_AND_PASSWORDS");
      },
      8698: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultSourceTypeToDataModelTypeMap = void 0);
        const r = s(896),
          o = s(6937);
        t.vaultSourceTypeToDataModelTypeMap = {
          [r.VaultSourceType.Address]: o.DataModelType.KWAddress,
          [r.VaultSourceType.BankAccount]: o.DataModelType.KWBankStatement,
          [r.VaultSourceType.Company]: o.DataModelType.KWCompany,
          [r.VaultSourceType.Credential]: o.DataModelType.KWAuthentifiant,
          [r.VaultSourceType.CredentialCategory]: o.DataModelType.KWAuthCategory,
          [r.VaultSourceType.DriverLicense]: o.DataModelType.KWDriverLicence,
          [r.VaultSourceType.Email]: o.DataModelType.KWEmail,
          [r.VaultSourceType.FiscalId]: o.DataModelType.KWFiscalStatement,
          [r.VaultSourceType.GeneratedPassword]: o.DataModelType.KWGeneratedPassword,
          [r.VaultSourceType.IdCard]: o.DataModelType.KWIDCard,
          [r.VaultSourceType.Identity]: o.DataModelType.KWIdentity,
          [r.VaultSourceType.NoteCategory]: o.DataModelType.KWSecureNoteCategory,
          [r.VaultSourceType.Note]: o.DataModelType.KWSecureNote,
          [r.VaultSourceType.Passkey]: o.DataModelType.KWPasskey,
          [r.VaultSourceType.Passport]: o.DataModelType.KWPassport,
          [r.VaultSourceType.PaymentCard]: o.DataModelType.KWPaymentMean_creditCard,
          [r.VaultSourceType.PersonalWebsite]: o.DataModelType.KWPersonalWebsite,
          [r.VaultSourceType.Phone]: o.DataModelType.KWPhone,
          [r.VaultSourceType.SocialSecurityId]: o.DataModelType.KWSocialSecurityStatement
        };
      },
      3314: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonApiConnector = void 0);
        const r = s(1796),
          o = s(8884),
          n = s(2270),
          i = s(5431);
        t.CarbonApiConnector = (0, r.combineEvents)(o.carbonCommandsSlots, n.carbonQueriesSlots, i.carbonLiveQueriesSlots);
      },
      8884: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonCommandsSlots = void 0);
        const r = s(1796),
          o = s(2607),
          n = s(8209),
          i = s(9888),
          a = s(7120),
          c = s(78),
          l = s(754),
          u = s(4707),
          d = s(953),
          p = s(1738),
          _ = s(2553),
          S = s(1812),
          v = s(170),
          m = s(1126),
          f = s(6210),
          E = s(9358),
          O = s(3919),
          h = s(7341),
          g = s(4477),
          y = s(7894),
          b = s(3263),
          A = s(7981),
          T = s(3448),
          C = s(7422),
          P = s(553),
          I = s(7195),
          N = s(3572),
          R = s(7970);
        t.carbonCommandsSlots = (0, r.combineEvents)(
          o.abTestsCommandsSlots,
          i.authenticationCommandsSlots,
          a.changeMasterPasswordCommandsSlots,
          n.contactInfoCommandsSlots,
          c.cryptoMigrationCommandsSlots,
          l.darkWebInsightsCommandsSlots,
          u.dataManagementCommandsSlots,
          v.eventLoggerCommandsSlots,
          m.exceptionCommandsSlots,
          d.familyCommandsSlots,
          _.globalExtensionSettingsCommandsSlots,
          S.healthCommandsSlots,
          f.loginCommandsSlots,
          E.loginNotificationsCommandsSlots,
          O.loginStepInfoCommandsSlots,
          h.notificationsCommandsSlots,
          g.openSessionCommandsSlots,
          y.passwordGeneratorCommandsSlots,
          b.paymentsCommandsSlots,
          A.protectedItemsUnlockerCommandsSlots,
          T.recoveryCommandsSlots,
          p.remoteFileCommandsSlots,
          C.sharingCommandsSlots,
          P.teamCommandsSlots,
          I.teamAdminCommandsSlots,
          N.userMessagesCommandsSlots,
          R.vpnCommandsSlots
        );
      },
      5431: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLiveQueriesSlots = void 0);
        const r = s(1796),
          o = s(2607),
          n = s(8209),
          i = s(9539),
          a = s(4705),
          c = s(8244),
          l = s(9888),
          u = s(4707),
          d = s(7120),
          p = s(78),
          _ = s(1738),
          S = s(7890),
          v = s(9358),
          m = s(3919),
          f = s(7341),
          E = s(4477),
          O = s(7981),
          h = s(3448),
          g = s(7422),
          y = s(7195),
          b = s(3572),
          A = s(7970);
        t.carbonLiveQueriesSlots = (0, r.combineEvents)(
          o.abTestsLiveQueriesSlots,
          a.accountCreationLiveQueriesSlots,
          c.antiPhishingLiveQueriesSlots,
          l.authenticationLiveQueriesSlots,
          d.changeMasterPasswordLiveQueriesSlots,
          n.contactInfoLiveQueriesSlots,
          p.cryptoMigrationLiveQueriesSlots,
          u.dataManagementLiveQueriesSlots,
          S.killswitchLiveQueriesSlots,
          v.loginNotificationsLiveQueriesSlots,
          m.loginStepInfoLiveQueriesSlots,
          f.notificationsLiveQueriesSlots,
          E.openSessionLiveQueriesSlots,
          O.protectedItemsUnlockerLiveQueriesSlots,
          h.recoveryLiveQueriesSlots,
          _.remoteFilesLiveQueriesSlots,
          g.sharingLiveQueriesSlots,
          i.subscriptionCodeLiveQueriesSlots,
          y.teamAdminLiveQueriesSlots,
          b.userMessagesLiveQueriesSlots,
          A.vpnLiveQueriesSlots
        );
      },
      2270: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonQueriesSlots = void 0);
        const r = s(1796),
          o = s(2607),
          n = s(8209),
          i = s(9539),
          a = s(9888),
          c = s(5861),
          l = s(4707),
          u = s(78),
          d = s(6359),
          p = s(1559),
          _ = s(1738),
          S = s(7890),
          v = s(9358),
          m = s(3919),
          f = s(7341),
          E = s(4477),
          O = s(7894),
          h = s(3263),
          g = s(7981),
          y = s(3448),
          b = s(1072),
          A = s(7422),
          T = s(553),
          C = s(7195),
          P = s(3572),
          I = s(7970);
        t.carbonQueriesSlots = (0, r.combineEvents)(
          o.abTestsQueriesSlots,
          a.authenticationQueriesSlots,
          c.autofillDataQueriesSlots,
          n.contactInfoQueriesSlots,
          u.cryptoMigrationQueriesSlots,
          l.dataManagementQueriesSlots,
          d.deviceQueriesSlots,
          p.featureQueriesSlots,
          S.killswitchQueriesSlots,
          v.loginNotificationsQueriesSlots,
          m.loginStepInfoQueriesSlots,
          f.notificationsQueriesSlots,
          E.openSessionQueriesSlots,
          O.passwordGeneratorQueriesSlots,
          h.paymentsQueriesSlots,
          g.protectedItemsUnlockerQueriesSlots,
          y.recoveryQueriesSlots,
          _.remoteFilesQueriesSlots,
          A.sharingQueriesSlots,
          b.staticDataQueriesSlots,
          i.subscriptionCodeQueriesSlots,
          T.teamQueriesSlots,
          C.teamAdminQueriesSlots,
          P.userMessagesQueriesSlots,
          I.vpnQueriesSlots
        );
      },
      5040: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8884), t), o(s(5431), t), o(s(2270), t), o(s(3314), t);
      },
      5195: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6771), t), o(s(2798), t), o(s(5040), t), o(s(2022), t);
      },
      2798: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6771: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.liveSlot = void 0);
        const r = s(1796),
          o = { noBuffer: !0 };
        t.liveSlot = () => (0, r.slot)(o);
      },
      2022: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      130: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDebugConnector = void 0);
        const r = s(1796);
        t.CarbonDebugConnector = { log: (0, r.slot)(), info: (0, r.slot)(), warning: (0, r.slot)(), error: (0, r.slot)() };
      },
      9308: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9158: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(130), t), o(s(9308), t);
      },
      2497: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonDiagnosticConnector = void 0);
        const r = s(1796);
        t.CarbonDiagnosticConnector = { decipheringDiagnosticLogEvent: (0, r.slot)() };
      },
      4546: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4874: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(2497), t), o(s(4546), t);
      },
      4459: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.changeMasterPasswordLiveQueriesSlots = t.changeMasterPasswordCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.changeMasterPasswordCommandsSlots = { changeMasterPassword: (0, r.slot)() }),
          (t.changeMasterPasswordLiveQueriesSlots = { liveChangeMasterPasswordStatus: (0, o.liveSlot)() });
      },
      7120: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4459), t), o(s(2113), t);
      },
      2113: (e, t) => {
        "use strict";
        var s, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ChangeMasterPasswordStepNeeded = t.ChangeMasterPasswordCode = t.ChangeMPFlowPath = void 0),
          ((o = t.ChangeMPFlowPath || (t.ChangeMPFlowPath = {})).USER_CHANGING_MP = "USER_CHANGING_MP"),
          (o.MP_TO_SSO = "MP_TO_SSO"),
          (o.SSO_TO_MP = "SSO_TO_MP"),
          (o.TO_EMAIL_TOKEN = "EMAIL_TOKEN"),
          (o.ADMIN_ASSISTED_RECOVERY = "ADMIN_ASSISTED_RECOVERY"),
          (o.ACCOUNT_RECOVERY_KEY = "ACCOUNT_RECOVERY_KEY"),
          ((r = t.ChangeMasterPasswordCode || (t.ChangeMasterPasswordCode = {})).FEATURE_BLOCKED = "feature_blocked"),
          (r.INNACTIVE_SESSION = "inactive_session"),
          (r.INVALID_TOKEN = "invalid_token"),
          (r.OTP_PROBLEM = "otp_problem"),
          (r.MP_ERROR = "mp_error"),
          (r.MP_STRENGTH_ERROR = "mp_strength_error"),
          (r.SUCCESS = "success"),
          (r.SYNC_PROGRESS = "sync_in_progress"),
          (r.UNKNOWN_ERROR = "unknown_error"),
          (r.WRONG_PASSWORD = "wrong_password"),
          (r.UNEXPECTED_STATE = "unexpected_state"),
          ((s = t.ChangeMasterPasswordStepNeeded || (t.ChangeMasterPasswordStepNeeded = {})).DOWNLOAD = "download"),
          (s.DECRYPTING = "decrypting"),
          (s.ENCRYPTING = "encrypting"),
          (s.UPLOADING = "uploading"),
          (s.DONE = "done"),
          (s.ERROR = "error");
      },
      438: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cryptoMigrationLiveQueriesSlots = t.cryptoMigrationQueriesSlots = t.cryptoMigrationCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.cryptoMigrationCommandsSlots = { changeUserCrypto: (0, r.slot)() }),
          (t.cryptoMigrationQueriesSlots = { getCanUserChangeCrypto: (0, r.slot)(), getUserDerivationMethod: (0, r.slot)() }),
          (t.cryptoMigrationLiveQueriesSlots = { liveUserDerivationMethod: (0, o.liveSlot)() });
      },
      78: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(438), t), o(s(4032), t);
      },
      4032: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SupportedDerivationMethods = t.CryptoMigrationApiErrorType = void 0),
          ((t.CryptoMigrationApiErrorType || (t.CryptoMigrationApiErrorType = {})).ChangeUserCryptoFailed = "CHANGE_USER_CRYPTO_FAILED"),
          ((s = t.SupportedDerivationMethods || (t.SupportedDerivationMethods = {})).ARGON2D = "argon2d"),
          (s.PBKDF2 = "pbkdf2"),
          (s.KWC3 = "kwc3");
      },
      8523: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.darkWebInsightsCommandsSlots = void 0);
        const r = s(1796);
        t.darkWebInsightsCommandsSlots = { getDarkWebInsightsReportResults: (0, r.slot)(), getDarkWebInsightsSummary: (0, r.slot)() };
      },
      754: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8523), t), o(s(455), t);
      },
      455: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmailIncidentViewStatuses = t.DarkWebInsightsBreachType = t.DarkWebInsightsApiErrorType = void 0),
          ((r = t.DarkWebInsightsApiErrorType || (t.DarkWebInsightsApiErrorType = {})).GetDarkWebInsightsFailed =
            "GET_DARK_WEB_INSIGHTS_FAILED"),
          (r.GetDarkWebInsightsSummaryFailed = "GET_DARK_WEB_INSIGHTS_SUMMARY_FAILED"),
          ((s = t.DarkWebInsightsBreachType || (t.DarkWebInsightsBreachType = {})).Password = "password"),
          (s.CreditCard = "creditcard"),
          (s.IPAddress = "ip"),
          (s.MailingAddress = "address"),
          (s.Phone = "phone"),
          (s.Email = "email"),
          (s.Social = "social"),
          (s.GeoLocation = "geolocation"),
          (s.UserName = "username"),
          (s.PersonalInfo = "personalinfo"),
          (t.EmailIncidentViewStatuses = Object.freeze({ New: "new", Viewed: "viewed" }));
      },
      9632: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isAddress = void 0),
          (t.isAddress = function (e) {
            return Boolean(e) && "KWAddress" === e.kwType;
          });
      },
      6430: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBankAccount = void 0),
          (t.isBankAccount = function (e) {
            return Boolean(e) && "KWBankStatement" === e.kwType;
          });
      },
      5341: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBreach = t.BreachStatus = void 0),
          ((s = t.BreachStatus || (t.BreachStatus = {})).PENDING = "PENDING"),
          (s.VIEWED = "VIEWED"),
          (s.ACKNOWLEDGED = "ACKNOWLEDGED"),
          (t.isBreach = function (e) {
            return Boolean(e) && "KWSecurityBreach" === e.kwType;
          });
      },
      7790: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isCollection = void 0),
          (t.isCollection = function (e) {
            return Boolean(e) && "KWCollection" === e.kwType;
          });
      },
      1471: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isObjectLocalized =
            t.isDataModelObject =
            t.dataModelTypes =
            t.transactionTypes =
            t.getTransactionTypeFromDataModelType =
            t.getDataModelTypeFromTransactionType =
            t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE =
            t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE =
            t.TransactionType =
            t.DataModelType =
            t.getLocalFormat =
            t.Country =
              void 0);
        const r = s(415);
        var o;
        ((o = t.Country || (t.Country = {})).NO_TYPE = "NO_TYPE"),
          (o.UNIVERSAL = "UNIVERSAL"),
          (o.AD = "AD"),
          (o.AE = "AE"),
          (o.AF = "AF"),
          (o.AG = "AG"),
          (o.AI = "AI"),
          (o.AL = "AL"),
          (o.AM = "AM"),
          (o.AO = "AO"),
          (o.AR = "AR"),
          (o.AS = "AS"),
          (o.AT = "AT"),
          (o.AU = "AU"),
          (o.AW = "AW"),
          (o.AZ = "AZ"),
          (o.BA = "BA"),
          (o.BB = "BB"),
          (o.BD = "BD"),
          (o.BE = "BE"),
          (o.BF = "BF"),
          (o.BG = "BG"),
          (o.BH = "BH"),
          (o.BI = "BI"),
          (o.BJ = "BJ"),
          (o.BL = "BL"),
          (o.BM = "BM"),
          (o.BN = "BN"),
          (o.BO = "BO"),
          (o.BR = "BR"),
          (o.BS = "BS"),
          (o.BT = "BT"),
          (o.BW = "BW"),
          (o.BY = "BY"),
          (o.BZ = "BZ"),
          (o.CA = "CA"),
          (o.CD = "CD"),
          (o.CF = "CF"),
          (o.CG = "CG"),
          (o.CH = "CH"),
          (o.CI = "CI"),
          (o.CK = "CK"),
          (o.CL = "CL"),
          (o.CM = "CM"),
          (o.CN = "CN"),
          (o.CO = "CO"),
          (o.CR = "CR"),
          (o.CU = "CU"),
          (o.CV = "CV"),
          (o.CY = "CY"),
          (o.CZ = "CZ"),
          (o.DE = "DE"),
          (o.DJ = "DJ"),
          (o.DK = "DK"),
          (o.DM = "DM"),
          (o.DO = "DO"),
          (o.DZ = "DZ"),
          (o.EC = "EC"),
          (o.EE = "EE"),
          (o.EG = "EG"),
          (o.ER = "ER"),
          (o.ES = "ES"),
          (o.ET = "ET"),
          (o.FI = "FI"),
          (o.FJ = "FJ"),
          (o.FK = "FK"),
          (o.FM = "FM"),
          (o.FO = "FO"),
          (o.FR = "FR"),
          (o.GA = "GA"),
          (o.GB = "GB"),
          (o.GD = "GD"),
          (o.GE = "GE"),
          (o.GF = "GF"),
          (o.GG = "GG"),
          (o.GH = "GH"),
          (o.GI = "GI"),
          (o.GL = "GL"),
          (o.GM = "GM"),
          (o.GN = "GN"),
          (o.GP = "GP"),
          (o.GQ = "GQ"),
          (o.GR = "GR"),
          (o.GT = "GT"),
          (o.GU = "GU"),
          (o.GW = "GW"),
          (o.GY = "GY"),
          (o.HK = "HK"),
          (o.HN = "HN"),
          (o.HR = "HR"),
          (o.HT = "HT"),
          (o.HU = "HU"),
          (o.ID = "ID"),
          (o.IE = "IE"),
          (o.IL = "IL"),
          (o.IM = "IM"),
          (o.IN = "IN"),
          (o.IO = "IO"),
          (o.IQ = "IQ"),
          (o.IR = "IR"),
          (o.IS = "IS"),
          (o.IT = "IT"),
          (o.JE = "JE"),
          (o.JM = "JM"),
          (o.JO = "JO"),
          (o.JP = "JP"),
          (o.KE = "KE"),
          (o.KG = "KG"),
          (o.KH = "KH"),
          (o.KI = "KI"),
          (o.KM = "KM"),
          (o.KN = "KN"),
          (o.KP = "KP"),
          (o.KR = "KR"),
          (o.KW = "KW"),
          (o.KY = "KY"),
          (o.KZ = "KZ"),
          (o.LA = "LA"),
          (o.LB = "LB"),
          (o.LC = "LC"),
          (o.LI = "LI"),
          (o.LK = "LK"),
          (o.LR = "LR"),
          (o.LS = "LS"),
          (o.LT = "LT"),
          (o.LU = "LU"),
          (o.LV = "LV"),
          (o.LY = "LY"),
          (o.MA = "MA"),
          (o.MC = "MC"),
          (o.MD = "MD"),
          (o.ME = "ME"),
          (o.MF = "MF"),
          (o.MG = "MG"),
          (o.MH = "MH"),
          (o.MK = "MK"),
          (o.ML = "ML"),
          (o.MM = "MM"),
          (o.MN = "MN"),
          (o.MO = "MO"),
          (o.MP = "MP"),
          (o.MQ = "MQ"),
          (o.MR = "MR"),
          (o.MS = "MS"),
          (o.MT = "MT"),
          (o.MU = "MU"),
          (o.MV = "MV"),
          (o.MW = "MW"),
          (o.MX = "MX"),
          (o.MY = "MY"),
          (o.MZ = "MZ"),
          (o.NA = "NA"),
          (o.NC = "NC"),
          (o.NE = "NE"),
          (o.NF = "NF"),
          (o.NG = "NG"),
          (o.NI = "NI"),
          (o.NL = "NL"),
          (o.NO = "NO"),
          (o.NP = "NP"),
          (o.NR = "NR"),
          (o.NU = "NU"),
          (o.NZ = "NZ"),
          (o.OM = "OM"),
          (o.PA = "PA"),
          (o.PE = "PE"),
          (o.PF = "PF"),
          (o.PG = "PG"),
          (o.PH = "PH"),
          (o.PK = "PK"),
          (o.PL = "PL"),
          (o.PM = "PM"),
          (o.PR = "PR"),
          (o.PS = "PS"),
          (o.PT = "PT"),
          (o.PW = "PW"),
          (o.PY = "PY"),
          (o.QA = "QA"),
          (o.RE = "RE"),
          (o.RO = "RO"),
          (o.RS = "RS"),
          (o.RU = "RU"),
          (o.RW = "RW"),
          (o.SA = "SA"),
          (o.SB = "SB"),
          (o.SC = "SC"),
          (o.SD = "SD"),
          (o.SE = "SE"),
          (o.SG = "SG"),
          (o.SH = "SH"),
          (o.SI = "SI"),
          (o.SK = "SK"),
          (o.SL = "SL"),
          (o.SM = "SM"),
          (o.SN = "SN"),
          (o.SO = "SO"),
          (o.SR = "SR"),
          (o.ST = "ST"),
          (o.SV = "SV"),
          (o.SY = "SY"),
          (o.SZ = "SZ"),
          (o.TC = "TC"),
          (o.TD = "TD"),
          (o.TF = "TF"),
          (o.TG = "TG"),
          (o.TH = "TH"),
          (o.TJ = "TJ"),
          (o.TK = "TK"),
          (o.TL = "TL"),
          (o.TM = "TM"),
          (o.TN = "TN"),
          (o.TO = "TO"),
          (o.TR = "TR"),
          (o.TT = "TT"),
          (o.TV = "TV"),
          (o.TW = "TW"),
          (o.TZ = "TZ"),
          (o.UA = "UA"),
          (o.UG = "UG"),
          (o.US = "US"),
          (o.UY = "UY"),
          (o.UZ = "UZ"),
          (o.VA = "VA"),
          (o.VC = "VC"),
          (o.VE = "VE"),
          (o.VG = "VG"),
          (o.VI = "VI"),
          (o.VN = "VN"),
          (o.VU = "VU"),
          (o.WF = "WF"),
          (o.WS = "WS"),
          (o.XK = "XK"),
          (o.YE = "YE"),
          (o.YT = "YT"),
          (o.ZA = "ZA"),
          (o.ZM = "ZM"),
          (o.ZW = "ZW"),
          (o.AQ = "AQ"),
          (o.AX = "AX"),
          (o.BV = "BV"),
          (o.CC = "CC"),
          (o.CX = "CX"),
          (o.EH = "EH"),
          (o.GS = "GS"),
          (o.HM = "HM"),
          (o.PN = "PN"),
          (o.SJ = "SJ"),
          (o.UM = "UM"),
          (t.getLocalFormat = function (e) {
            return e.LocaleFormat;
          }),
          (t.DataModelType = (0, r.Enum)(
            "KWAddress",
            "KWAuthCategory",
            "KWAuthentifiant",
            "KWBankStatement",
            "KWCollection",
            "KWCompany",
            "KWDataChangeHistory",
            "KWDriverLicence",
            "KWEmail",
            "KWFiscalStatement",
            "KWGeneratedPassword",
            "KWIDCard",
            "KWIdentity",
            "KWMerchand",
            "KWMiscData",
            "KWPasskey",
            "KWPassport",
            "KWPaymentMean_creditCard",
            "KWPaymentMean_paypal",
            "KWPersonalWebsite",
            "KWPhone",
            "KWPurchaseAccount",
            "KWPurchaseCategory",
            "KWPurchasePaidBasket",
            "KWPurchaseTrueArticle",
            "KWSecret",
            "KWSecureFileInfo",
            "KWSecureNote",
            "KWSecureNoteCategory",
            "KWSecurityBreach",
            "KWSettingsManagerApp",
            "KWSocialSecurityStatement",
            "KWWebSite"
          )),
          (t.TransactionType = (0, r.Enum)(
            "ADDRESS",
            "AUTHENTIFIANT",
            "AUTH_CATEGORY",
            "BANKACCESS",
            "BANKACCOUNT",
            "BANKCATEGORY",
            "BANKINSTITUTION",
            "BANKSITE",
            "BANKSTATEMENT",
            "BANKTRANSACTION",
            "COLLECTION",
            "COMPANY",
            "DATA_CHANGE_HISTORY",
            "DATA_USAGE_HISTORY",
            "DEFAULT_AUTHENTIFIANT",
            "DEFAULT_CONFIDENTIAL",
            "DEFAULT_IDENTITY",
            "DEFAULT_MISC",
            "DEFAULT_PAYMENTMEANS",
            "DEFAULT_REWARDCARD",
            "DRIVERLICENCE",
            "EMAIL",
            "EMERGENCY_BUNDLE_FULL",
            "EMERGENCY_BUNDLE_LITE",
            "FULLBACKUP",
            "FISCALSTATEMENT",
            "GENERATED_PASSWORD",
            "IDCARD",
            "IDENTITY",
            "INVOICEACCESS",
            "INVOICEELEMENT",
            "INVOICEINSTITUTION",
            "MERCHANT",
            "MISCDATA",
            "PASSKEY",
            "PASSPORT",
            "PAYMENTMEANS_CREDITCARD",
            "PAYMENTMEAN_PAYPAL",
            "PERSONALWEBSITE",
            "PHONE",
            "POINTS",
            "PURCHASEABANDONNEDBASKET",
            "PURCHASEACCOUNT",
            "PURCHASEARTICLE",
            "PURCHASEBASKET",
            "PURCHASEDELIVERYARTICLE",
            "PURCHASEOPTIONARTICLE",
            "PURCHASEPAIDBASKET",
            "PURCHASE_CATEGORY",
            "REWARDCARD",
            "SECRET",
            "SECUREFILEINFO",
            "SECURENOTE",
            "SECURENOTE_CATEGORY",
            "SECURITYALERT",
            "SECURITYALERTS",
            "SECURITYBREACH",
            "SETTINGS",
            "SHARING_GROUP",
            "SOCIALSECURITYSTATEMENT",
            "WEBSITE"
          )),
          (t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE = {
            KWAddress: t.TransactionType.ADDRESS,
            KWAuthCategory: t.TransactionType.AUTH_CATEGORY,
            KWAuthentifiant: t.TransactionType.AUTHENTIFIANT,
            KWCollection: t.TransactionType.COLLECTION,
            KWBankStatement: t.TransactionType.BANKSTATEMENT,
            KWCompany: t.TransactionType.COMPANY,
            KWDataChangeHistory: t.TransactionType.DATA_CHANGE_HISTORY,
            KWDriverLicence: t.TransactionType.DRIVERLICENCE,
            KWEmail: t.TransactionType.EMAIL,
            KWFiscalStatement: t.TransactionType.FISCALSTATEMENT,
            KWGeneratedPassword: t.TransactionType.GENERATED_PASSWORD,
            KWIDCard: t.TransactionType.IDCARD,
            KWIdentity: t.TransactionType.IDENTITY,
            KWMerchand: t.TransactionType.MERCHANT,
            KWMiscData: t.TransactionType.MISCDATA,
            KWPasskey: t.TransactionType.PASSKEY,
            KWPassport: t.TransactionType.PASSPORT,
            KWPaymentMean_creditCard: t.TransactionType.PAYMENTMEANS_CREDITCARD,
            KWPaymentMean_paypal: t.TransactionType.PAYMENTMEAN_PAYPAL,
            KWPersonalWebsite: t.TransactionType.PERSONALWEBSITE,
            KWPhone: t.TransactionType.PHONE,
            KWPurchaseAccount: t.TransactionType.PURCHASEACCOUNT,
            KWPurchaseCategory: t.TransactionType.PURCHASE_CATEGORY,
            KWPurchasePaidBasket: t.TransactionType.PURCHASEPAIDBASKET,
            KWPurchaseTrueArticle: t.TransactionType.PURCHASEARTICLE,
            KWSecret: t.TransactionType.SECRET,
            KWSecureFileInfo: t.TransactionType.SECUREFILEINFO,
            KWSecureNote: t.TransactionType.SECURENOTE,
            KWSecureNoteCategory: t.TransactionType.SECURENOTE_CATEGORY,
            KWSecurityBreach: t.TransactionType.SECURITYBREACH,
            KWSettingsManagerApp: t.TransactionType.SETTINGS,
            KWSocialSecurityStatement: t.TransactionType.SOCIALSECURITYSTATEMENT,
            KWWebSite: t.TransactionType.WEBSITE
          }),
          (t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE = Object.keys(t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE).reduce(
            (e, s) => ((e[t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[s]] = s), e),
            {}
          )),
          (t.getDataModelTypeFromTransactionType = function (e) {
            const s = t.TRANSACTION_TYPE_TO_DATAMODEL_TYPE[e];
            if (!s) throw new Error(`No DataModelType found for TransactionType '${e}'`);
            return s;
          }),
          (t.getTransactionTypeFromDataModelType = function (e) {
            if (!t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e]) throw new Error(`No TransactionType found for DataModelType ${e}`);
            return t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE[e];
          }),
          (t.transactionTypes = r.Enum.keys(t.TransactionType)),
          (t.dataModelTypes = r.Enum.keys(t.DataModelType)),
          (t.isDataModelObject = (e) => !!e.LocaleFormat && "string" == typeof e.AnonId && "string" == typeof e.SpaceId),
          (t.isObjectLocalized = function (e) {
            return Boolean(e) && ("KWPhone" === e.kwType || "KWIdentity" === e.kwType || "KWAddress" === e.kwType);
          });
      },
      2615: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isCompany = void 0),
          (t.isCompany = function (e) {
            return Boolean(e) && "KWCompany" === e.kwType;
          });
      },
      9103: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isCredential = t.isCredentialCategory = void 0),
          (t.isCredentialCategory = function (e) {
            return Boolean(e) && "KWAuthCategory" === e.kwType;
          }),
          (t.isCredential = function (e) {
            return Boolean(e) && "KWAuthentifiant" === e.kwType;
          });
      },
      866: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isDriverLicense = void 0),
          (t.isDriverLicense = function (e) {
            return Boolean(e) && "KWDriverLicence" === e.kwType;
          });
      },
      2317: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEmail = void 0),
          (t.isEmail = function (e) {
            return Boolean(e) && "KWEmail" === e.kwType;
          });
      },
      6323: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2258: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isFiscalId = void 0),
          (t.isFiscalId = function (e) {
            return Boolean(e) && "KWFiscalStatement" === e.kwType;
          });
      },
      7092: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isGeneratedPassword = void 0),
          (t.isGeneratedPassword = function (e) {
            return Boolean(e) && "KWGeneratedPassword" === e.kwType;
          });
      },
      3343: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1407: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isIdCard = void 0),
          (t.isIdCard = function (e) {
            return Boolean(e) && "KWIDCard" === e.kwType;
          });
      },
      7682: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isIdentity = void 0),
          (t.isIdentity = function (e) {
            return Boolean(e) && "KWIdentity" === e.kwType;
          });
      },
      3393: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LinkedWebsiteSource = void 0),
          ((s = t.LinkedWebsiteSource || (t.LinkedWebsiteSource = {})).Manual = "manual"),
          (s.Remember = "remember");
      },
      9878: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isNote = t.isNoteCategory = t.NoteTypes = void 0),
          (t.NoteTypes = ["GRAY", "PURPLE", "GREEN", "BLUE", "YELLOW", "ORANGE", "PINK", "BROWN", "RED"]),
          (t.isNoteCategory = function (e) {
            return Boolean(e) && "KWSecureNoteCategory" === e.kwType;
          }),
          (t.isNote = function (e) {
            return Boolean(e) && "KWSecureNote" === e.kwType;
          });
      },
      4928: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPasskey = void 0),
          (t.isPasskey = function (e) {
            return Boolean(e) && "KWPasskey" === e.kwType;
          });
      },
      7610: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPassport = void 0),
          (t.isPassport = function (e) {
            return Boolean(e) && "KWPassport" === e.kwType;
          });
      },
      4082: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPaymentCard = t.PaymentCardColor = t.PaymentCardType = void 0);
        const r = s(415);
        (t.PaymentCardType = (0, r.Enum)(
          "PAYMENT_TYPE_VISA",
          "PAYMENT_TYPE_MASTERCARD",
          "PAYMENT_TYPE_AMEX",
          "PAYMENT_TYPE_DISCOVER",
          "PAYMENT_TYPE_JCB",
          "PAYMENT_TYPE_DINERSCLUB"
        )),
          (t.PaymentCardColor = (0, r.Enum)("BLACK", "SILVER", "WHITE", "RED", "ORANGE", "GOLD", "BLUE_1", "BLUE_2", "GREEN_1", "GREEN_2")),
          (t.isPaymentCard = function (e) {
            return Boolean(e) && "KWPaymentMean_creditCard" === e.kwType;
          });
      },
      7633: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPaypalAccount = void 0),
          (t.isPaypalAccount = function (e) {
            return Boolean(e) && "KWPaymentMean_paypal" === e.kwType;
          });
      },
      7066: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPersonalSettings = void 0),
          (t.isPersonalSettings = function (e) {
            return Boolean(e) && "KWSettingsManagerApp" === e.kwType;
          });
      },
      8994: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPersonalWebsite = void 0),
          (t.isPersonalWebsite = function (e) {
            return Boolean(e) && "KWPersonalWebsite" === e.kwType;
          });
      },
      8711: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.isPhone = t.PhoneType = void 0);
        const r = s(415);
        (t.PhoneType = (0, r.Enum)(
          "PHONE_TYPE_ANY",
          "PHONE_TYPE_MOBILE",
          "PHONE_TYPE_LANDLINE",
          "PHONE_TYPE_FAX",
          "PHONE_TYPE_WORK_MOBILE",
          "PHONE_TYPE_WORK_LANDLINE",
          "PHONE_TYPE_WORK_FAX"
        )),
          (t.isPhone = function (e) {
            return Boolean(e) && "KWPhone" === e.kwType;
          });
      },
      6058: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isSecret = void 0),
          (t.isSecret = function (e) {
            return Boolean(e) && "KWSecret" === e.kwType;
          });
      },
      18: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isSecureFileInfo = void 0),
          (t.isSecureFileInfo = function (e) {
            return Boolean(e) && "KWSecureFileInfo" === e.kwType;
          });
      },
      2679: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isSocialSecurityId = void 0),
          (t.isSocialSecurityId = function (e) {
            return Boolean(e) && "KWSocialSecurityStatement" === e.kwType;
          });
      },
      9056: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(9632), t),
          o(s(6430), t),
          o(s(5341), t),
          o(s(7790), t),
          o(s(1471), t),
          o(s(2615), t),
          o(s(9103), t),
          o(s(866), t),
          o(s(2317), t),
          o(s(6323), t),
          o(s(2258), t),
          o(s(7092), t),
          o(s(3343), t),
          o(s(1407), t),
          o(s(7682), t),
          o(s(3393), t),
          o(s(9878), t),
          o(s(4928), t),
          o(s(7610), t),
          o(s(4082), t),
          o(s(7633), t),
          o(s(7066), t),
          o(s(8994), t),
          o(s(8711), t),
          o(s(6058), t),
          o(s(18), t),
          o(s(2679), t);
      },
      1626: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4692: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6937: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9056), t), o(s(1626), t);
      },
      3230: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceQueriesSlots = void 0);
        const r = s(1796);
        t.deviceQueriesSlots = { getAnonymousComputerId: (0, r.slot)(), getPlatformInfo: (0, r.slot)() };
      },
      6359: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3230), t);
      },
      1642: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DeviceLimitCapabilityConnector = void 0);
        const r = s(1796);
        t.DeviceLimitCapabilityConnector = { deviceLimitCapabilityUpdated: (0, r.slot)() };
      },
      3254: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1642), t);
      },
      989: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9039: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonConnector = void 0);
        const r = s(1796);
        t.ExtensionCarbonConnector = {
          loginStatusChanged: (0, r.slot)({ noBuffer: !0 }),
          localAccountsListUpdated: (0, r.slot)({ noBuffer: !0 }),
          openSessionProgressChanged: (0, r.slot)({ noBuffer: !0 }),
          openSessionTokenSent: (0, r.slot)({ noBuffer: !0 }),
          openSessionDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
          openSessionOTPSent: (0, r.slot)({ noBuffer: !0 }),
          openSessionOTPForNewDeviceRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionAskMasterPassword: (0, r.slot)({ noBuffer: !0 }),
          openSessionTokenWarning: (0, r.slot)({ noBuffer: !0 }),
          openSessionExtraDeviceTokenRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionMasterPasswordLess: (0, r.slot)({ noBuffer: !0 }),
          openSessionSsoRedirectionToIdpRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionFailed: (0, r.slot)({ noBuffer: !0 }),
          sessionSyncStatus: (0, r.slot)({ noBuffer: !0 }),
          deactivateDeviceResult: (0, r.slot)({ noBuffer: !0 }),
          changeDeviceNameResult: (0, r.slot)({ noBuffer: !0 }),
          accountInfoChanged: (0, r.slot)({ noBuffer: !0 }),
          dataModelUpdated: (0, r.slot)({ noBuffer: !0 }),
          accountFeaturesChanged: (0, r.slot)({ noBuffer: !0 }),
          webOnboardingModeUpdated: (0, r.slot)({ noBuffer: !0 }),
          askWebsiteInfo: (0, r.slot)({ noBuffer: !0 }),
          getAccountInfo: (0, r.slot)({ noBuffer: !0 }),
          getAnonymousLogsMetadata: (0, r.slot)({ noBuffer: !0 }),
          checkIfMasterPasswordIsValid: (0, r.slot)({ noBuffer: !0 }),
          openSession: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithToken: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
          cancelDashlaneAuthenticatorRegistration: (0, r.slot)(),
          openSessionWithOTP: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithOTPForNewDevice: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithMasterPassword: (0, r.slot)({ noBuffer: !0 }),
          openExtraDeviceSession: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithExtraDeviceToken: (0, r.slot)({ noBuffer: !0 }),
          openSessionResendToken: (0, r.slot)({ noBuffer: !0 }),
          sessionForceSync: (0, r.slot)({ noBuffer: !0 }),
          closeSession: (0, r.slot)({ noBuffer: !0 }),
          lockSession: (0, r.slot)({ noBuffer: !0 }),
          exceptionLog: (0, r.slot)({ noBuffer: !0 }),
          getDevicesList: (0, r.slot)({ noBuffer: !0 }),
          getLocalAccountsList: (0, r.slot)({ noBuffer: !0 }),
          deactivateDevice: (0, r.slot)({ noBuffer: !0 }),
          changeDeviceName: (0, r.slot)({ noBuffer: !0 }),
          updateWebOnboardingMode: (0, r.slot)({ noBuffer: !0 })
        };
      },
      3148: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionCarbonEventType = void 0);
        const r = s(415);
        t.ExtensionCarbonEventType = (0, r.Enum)(
          "LOGIN_STATUS_CHANGED",
          "LOCAL_ACCOUNTS_LIST_UPDATED",
          "OPEN_SESSION_PROGRESS_CHANGED",
          "OPEN_SESSION_TOKEN_SENT",
          "OPEN_SESSION_OTP_SENT",
          "OPEN_SESSION_ASK_MASTER_PASSWORD",
          "OPEN_SESSION_ASK_PERSIST_DATA",
          "OPEN_SESSION_TOKEN_WARNING",
          "OPEN_SESSION_FAILED",
          "SESSION_SYNC_STATUS",
          "DEACTIVATE_DEVICE_RESULT",
          "CHANGE_DEVICE_NAME_RESULT",
          "ACCOUNT_INFO",
          "DATA_MODEL_UPDATED",
          "ACCOUNT_FEATURES",
          "OPEN_WEB_ONBOARDING_TAB",
          "WEB_ONBOARDING_MODE_UPDATED",
          "ASK_WEBSITE_INFO",
          "TOGGLE_DASHLANE_ON_PAGE",
          "TOGGLE_DASHLANE_ON_SITE",
          "GET_LOGIN_STATUS",
          "GET_ACCOUNT_INFO",
          "GET_DEVICES_LIST",
          "GET_LOCAL_ACCOUNTS_LIST",
          "GET_PASSWORD_GENERATION_SETTINGS",
          "GET_ANONYMOUS_LOGS_METADATA",
          "GENERATE_PASSWORD",
          "SAVE_GENERATED_PASSWORD",
          "DEACTIVATE_DEVICE",
          "CHANGE_DEVICE_NAME",
          "USERS_METADATA",
          "OPEN_SESSION",
          "OPEN_SESSION_WITH_TOKEN",
          "OPEN_SESSION_WITH_OTP",
          "OPEN_SESSION_MASTER_PASSWORD",
          "PERSIST_DATA_FOR_NEW_SESSION",
          "OPEN_SESSION_RESEND_TOKEN",
          "SESSION_FORCE_SYNC",
          "CLOSE_SESSION",
          "OPEN_DEV_SESSION",
          "UPDATE_WEB_ONBOARDING_MODE",
          "PERF_LOG",
          "EXCEPTION_LOG",
          "USAGE_LOG",
          "INSTALLER_LOG"
        );
      },
      8616: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9039), t), o(s(3148), t);
      },
      3178: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugConnector = void 0);
        const r = s(1796);
        t.ExtensionDebugConnector = {
          getExtensionId: (0, r.slot)(),
          switchExtensionToStandalone: (0, r.slot)(),
          showInput: (0, r.slot)(),
          showFormOnPage: (0, r.slot)(),
          signalTti: (0, r.slot)(),
          signalDatabasesSent: (0, r.slot)()
        };
      },
      2739: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtensionDebugEventType = void 0);
        const r = s(415);
        t.ExtensionDebugEventType = (0, r.Enum)(
          "GET_EXTENSION_ID",
          "SIGNAL_TTI",
          "DATABASES_SEND",
          "SHOW_INPUT",
          "SHOW_FORM_ON_PAGE",
          "SWITCH_TO_STANDALONE"
        );
      },
      8300: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3178), t), o(s(2739), t);
      },
      4496: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.familyCommandsSlots = void 0);
        const r = s(1796);
        t.familyCommandsSlots = {
          getFamilyDetails: (0, r.slot)(),
          joinFamily: (0, r.slot)(),
          leaveFamily: (0, r.slot)(),
          removeFamilyMember: (0, r.slot)(),
          resetFamilyJoinToken: (0, r.slot)()
        };
      },
      953: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4496), t), o(s(1224), t);
      },
      1224: (e, t) => {
        "use strict";
        var s, r, o, n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FamilyRenewalPlatform = t.FamilyMemberRole = t.FamilyStatusCode = t.JoinFamilyUserStatus = void 0),
          ((n = t.JoinFamilyUserStatus || (t.JoinFamilyUserStatus = {})).NEW_USER = "NEW_USER"),
          (n.EXISTING_FREE_USER = "EXISTING_FREE_USER"),
          (n.EXISTING_PREMIUM_USER = "EXISTING_PREMIUM_USER"),
          ((o = t.FamilyStatusCode || (t.FamilyStatusCode = {}))[(o.DISCONTINUED = 0)] = "DISCONTINUED"),
          (o[(o.PREMIUM = 1)] = "PREMIUM"),
          (o[(o.PREMIUM_PLUS = 2)] = "PREMIUM_PLUS"),
          ((r = t.FamilyMemberRole || (t.FamilyMemberRole = {})).ADMIN = "admin"),
          (r.REGULAR = "regular"),
          (r.REMOVED = "removed"),
          ((s = t.FamilyRenewalPlatform || (t.FamilyRenewalPlatform = {})).IOS_APP_STORE = "ios"),
          (s.MAC_STORE = "mac"),
          (s.PLAY_STORE = "playstore");
      },
      1580: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.featureQueriesSlots = void 0);
        const r = s(1796);
        t.featureQueriesSlots = { getHasFeature: (0, r.slot)(), getFeatures: (0, r.slot)() };
      },
      1559: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(2363), t), o(s(1580), t);
      },
      2363: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5470: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.remoteFilesLiveQueriesSlots = t.remoteFilesQueriesSlots = t.remoteFileCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.remoteFileCommandsSlots = { decipherRemoteFile: (0, r.slot)() }),
          (t.remoteFilesQueriesSlots = { getFileContent: (0, r.slot)() }),
          (t.remoteFilesLiveQueriesSlots = { liveFileMeta: (0, o.liveSlot)() });
      },
      1738: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5470), t), o(s(356), t);
      },
      356: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FileNamesList =
            t.SERVER_ERROR_HTTP_STATUS =
            t.UNSPECIFIED_ERROR =
            t.FILE_NOT_UPDATED =
            t.FILE_NOT_FOUND_HTTP_STATUS =
            t.NO_CURRENT_UPDATE_HTTP_STATUS =
            t.UPDATE_AVAILABLE_HTTP_STATUS =
              void 0),
          (t.UPDATE_AVAILABLE_HTTP_STATUS = "update_available"),
          (t.NO_CURRENT_UPDATE_HTTP_STATUS = "unknown_revision"),
          (t.FILE_NOT_FOUND_HTTP_STATUS = "not_found"),
          (t.FILE_NOT_UPDATED = "not_updated"),
          (t.UNSPECIFIED_ERROR = "unspecified_error"),
          (t.SERVER_ERROR_HTTP_STATUS = "error_server"),
          (t.FileNamesList = ["overrides.json", "phishing_urls_test.json"]);
      },
      829: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.globalExtensionSettingsCommandsSlots = void 0);
        const r = s(1796);
        t.globalExtensionSettingsCommandsSlots = { setGlobalExtensionSettings: (0, r.slot)(), getGlobalExtensionSettings: (0, r.slot)() };
      },
      2553: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(829), t), o(s(9767), t);
      },
      9767: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2223: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.healthCommandsSlots = void 0);
        const r = s(1796);
        t.healthCommandsSlots = { evaluatePassword: (0, r.slot)() };
      },
      1812: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(2223), t), o(s(2115), t);
      },
      2115: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7890: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6875), t);
      },
      6875: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.killswitchLiveQueriesSlots = t.killswitchQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.killswitchQueriesSlots = {
          getIsBrazeContentDisabled: (0, r.slot)(),
          getIsLoginFlowMigrationDisabled: (0, r.slot)(),
          getIsAutoSSOLoginDisabled: (0, r.slot)()
        }),
          (t.killswitchLiveQueriesSlots = {
            liveIsBrazeContentDisabled: (0, o.liveSlot)(),
            liveIsLoginFlowMigrationDisabled: (0, o.liveSlot)(),
            liveIsAutoSSOLoginDisabled: (0, o.liveSlot)()
          });
      },
      6605: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLeelooConnector = void 0);
        const r = s(1796);
        t.CarbonLeelooConnector = {
          abTestingChanged: (0, r.slot)(),
          loginStatusChanged: (0, r.slot)({ noBuffer: !0 }),
          openSessionProgressChanged: (0, r.slot)({ noBuffer: !0 }),
          openSessionTokenSent: (0, r.slot)({ noBuffer: !0 }),
          openSessionDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
          openSessionOTPSent: (0, r.slot)({ noBuffer: !0 }),
          openSessionOTPForNewDeviceRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionAskMasterPassword: (0, r.slot)({ noBuffer: !0 }),
          openSessionTokenWarning: (0, r.slot)({ noBuffer: !0 }),
          openSessionExtraDeviceTokenRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionSsoRedirectionToIdpRequired: (0, r.slot)({ noBuffer: !0 }),
          openSessionMasterPasswordLess: (0, r.slot)({ noBuffer: !0 }),
          openSessionFailed: (0, r.slot)({ noBuffer: !0 }),
          sessionSyncStatus: (0, r.slot)({ noBuffer: !0 }),
          localAccountsListUpdated: (0, r.slot)(),
          spaceDataUpdated: (0, r.slot)(),
          teamAdminDataUpdated: (0, r.slot)(),
          credentialLoginUrlRetrieved: (0, r.slot)(),
          deactivateDeviceResult: (0, r.slot)(),
          changeDeviceNameResult: (0, r.slot)(),
          accountInfoChanged: (0, r.slot)(),
          accountFeaturesChanged: (0, r.slot)(),
          updatePaymentCardTokenResult: (0, r.slot)(),
          webOnboardingModeUpdated: (0, r.slot)(),
          currentLocationUpdated: (0, r.slot)(),
          checkDirectorySyncKeyRequest: (0, r.slot)(),
          encryptSettingsResultUpdated: (0, r.slot)(),
          confirmCreateAccountResultUpdated: (0, r.slot)(),
          sendSharingResponseResult: (0, r.slot)(),
          serverSidePairingStatusChanged: (0, r.slot)(),
          getUki: (0, r.slot)(),
          getAccountInfo: (0, r.slot)(),
          getDevicesList: (0, r.slot)(),
          getLocalAccountsList: (0, r.slot)(),
          getTemporaryToken: (0, r.slot)(),
          deactivateDevice: (0, r.slot)(),
          changeDeviceName: (0, r.slot)(),
          getInvoices: (0, r.slot)(),
          getPersonalSettings: (0, r.slot)(),
          openSession: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithToken: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithDashlaneAuthenticator: (0, r.slot)({ noBuffer: !0 }),
          cancelDashlaneAuthenticatorRegistration: (0, r.slot)(),
          openSessionWithOTP: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithOTPForNewDevice: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithMasterPassword: (0, r.slot)({ noBuffer: !0 }),
          openExtraDeviceSession: (0, r.slot)({ noBuffer: !0 }),
          openSessionWithExtraDeviceToken: (0, r.slot)({ noBuffer: !0 }),
          openSessionResendToken: (0, r.slot)({ noBuffer: !0 }),
          sessionForceSync: (0, r.slot)(),
          closeSession: (0, r.slot)(),
          lockSession: (0, r.slot)({ noBuffer: !0 }),
          cancelPremiumSubscription: (0, r.slot)(),
          createUserGroup: (0, r.slot)(),
          deleteUserGroup: (0, r.slot)(),
          renameUserGroup: (0, r.slot)(),
          inviteUserGroupMembers: (0, r.slot)(),
          revokeUserGroupMembers: (0, r.slot)(),
          updateUserGroupMembers: (0, r.slot)(),
          teamUpdated: (0, r.slot)(),
          createAccountStep1: (0, r.slot)(),
          createAccountStep2: (0, r.slot)(),
          checkLogin: (0, r.slot)(),
          savePersonalDataItem: (0, r.slot)(),
          removePersonalDataItem: (0, r.slot)(),
          savePaymentCard: (0, r.slot)(),
          getMasterPasswordResetDemandList: (0, r.slot)(),
          acceptMasterPasswordResetDemand: (0, r.slot)(),
          checkIfMasterPasswordIsValid: (0, r.slot)(),
          declineMasterPasswordResetDemand: (0, r.slot)(),
          getMembers: (0, r.slot)(),
          addTeamAdmin: (0, r.slot)(),
          removeTeamAdmin: (0, r.slot)(),
          setTeamSettings: (0, r.slot)(),
          updateWebOnboardingMode: (0, r.slot)(),
          checkDirectorySyncKeyResponse: (0, r.slot)(),
          queryStaticDataCollections: (0, r.slot)(),
          sendSharingResponse: (0, r.slot)(),
          getDataModel: (0, r.slot)(),
          getSharingSync: (0, r.slot)(),
          revokeSharing: (0, r.slot)(),
          getSharingData: (0, r.slot)(),
          updateSharingPermission: (0, r.slot)(),
          setPendingElementsAsSeen: (0, r.slot)(),
          isUserLastAdminOnItem: (0, r.slot)(),
          doesUserReceiveItemViaGroup: (0, r.slot)(),
          resumeSession: (0, r.slot)(),
          exceptionLog: (0, r.slot)()
        };
      },
      5640: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6605), t), o(s(1340), t);
      },
      1340: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RemovePersonalDataItemFailureReason = void 0),
          ((s = t.RemovePersonalDataItemFailureReason || (t.RemovePersonalDataItemFailureReason = {}))[(s.LEAVE_SHARING_FAILED = 0)] =
            "LEAVE_SHARING_FAILED"),
          (s[(s.FORBIDDEN_LAST_ADMIN = 1)] = "FORBIDDEN_LAST_ADMIN"),
          (s[(s.FORBIDDEN_GROUP_ITEM = 2)] = "FORBIDDEN_GROUP_ITEM"),
          (s[(s.NOT_AUTHORIZED = 3)] = "NOT_AUTHORIZED"),
          (s[(s.NOT_FOUND = 4)] = "NOT_FOUND"),
          (s[(s.INTERNAL_ERROR = 5)] = "INTERNAL_ERROR");
      },
      1278: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.eventLoggerCommandsSlots = void 0);
        const r = s(1796);
        t.eventLoggerCommandsSlots = { logEvent: (0, r.slot)(), logPageView: (0, r.slot)(), flushQueue: (0, r.slot)() };
      },
      170: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1278), t), o(s(4168), t);
      },
      4168: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StyxApiResult = void 0),
          ((s = t.StyxApiResult || (t.StyxApiResult = {}))[(s.AllBatchesSent = 0)] = "AllBatchesSent"),
          (s[(s.SomeBatchesSent = 1)] = "SomeBatchesSent"),
          (s[(s.NoBatchesSent = 2)] = "NoBatchesSent");
      },
      3894: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.exceptionCommandsSlots = void 0);
        const r = s(1796);
        t.exceptionCommandsSlots = { logException: (0, r.slot)() };
      },
      1126: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3894), t), o(s(6929), t);
      },
      6929: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ExceptionCriticality = void 0),
          ((s = t.ExceptionCriticality || (t.ExceptionCriticality = {}))[(s.UNKNOWN = 0)] = "UNKNOWN"),
          (s[(s.WARNING = 1)] = "WARNING"),
          (s[(s.ERROR = 2)] = "ERROR");
      },
      7124: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.LoggingEventType = void 0);
        const r = s(415);
        t.LoggingEventType = (0, r.Enum)("EXCEPTION_LOG");
      },
      6210: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4160), t), o(s(8786), t);
      },
      4160: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginCommandsSlots = void 0);
        const r = s(1796);
        t.loginCommandsSlots = {
          abortDeviceLimitFlow: (0, r.slot)(),
          loginViaSSO: (0, r.slot)(),
          unlinkPreviousDevice: (0, r.slot)(),
          unlinkMultipleDevices: (0, r.slot)()
        };
      },
      8786: (e, t) => {
        "use strict";
        var s, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LoginViaSsoCode = t.SsoMigrationServerMethod = t.LoginResultEnum = void 0),
          ((o = t.LoginResultEnum || (t.LoginResultEnum = {}))[(o.MasterPasswordMissing = 0)] = "MasterPasswordMissing"),
          (o[(o.DeviceAuthenticationMissing = 1)] = "DeviceAuthenticationMissing"),
          (o[(o.TokenMissing = 2)] = "TokenMissing"),
          (o[(o.OTPMissing = 3)] = "OTPMissing"),
          (o[(o.AskPersistData = 4)] = "AskPersistData"),
          (o[(o.LoggedIn = 5)] = "LoggedIn"),
          (o[(o.ExtraDeviceTokenMissing = 6)] = "ExtraDeviceTokenMissing"),
          (o[(o.SSOLogin = 7)] = "SSOLogin"),
          (o[(o.DeviceLimitFlow = 8)] = "DeviceLimitFlow"),
          (o[(o.DashlaneAuthenticatorApprovalMissing = 9)] = "DashlaneAuthenticatorApprovalMissing"),
          (o[(o.DashlaneAuthenticatorApprovalCancelled = 10)] = "DashlaneAuthenticatorApprovalCancelled"),
          (o[(o.MasterPasswordLess = 11)] = "MasterPasswordLess"),
          ((r = t.SsoMigrationServerMethod || (t.SsoMigrationServerMethod = {})).SSO = "sso"),
          (r.MP = "master_password"),
          ((s = t.LoginViaSsoCode || (t.LoginViaSsoCode = {})).SUCCESS = "SUCCESS"),
          (s.ASK_NEW_MP = "ASK_NEW_MP"),
          (s.EMPTY_LOGIN = "EMPTY_LOGIN"),
          (s.INNACTIVE_SESSION = "INNACTIVE_SESSION"),
          (s.SSO_VERIFICATION_FAILED = "SSO_VERIFICATION_FAILED"),
          (s.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (s.UNSUPPORTED_TRANSITION = "UNSUPPORTED_TRANSITION"),
          (s.WRONG_PASSWORD = "WRONG_PASSWORD");
      },
      9358: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6863), t), o(s(512), t);
      },
      512: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loginNotificationsLiveQueriesSlots = t.loginNotificationsQueriesSlots = t.loginNotificationsCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.loginNotificationsCommandsSlots = { addLoginNotification: (0, r.slot)(), clearAllStoredLoginNotification: (0, r.slot)() }),
          (t.loginNotificationsQueriesSlots = { getLoginNotifications: (0, r.slot)() }),
          (t.loginNotificationsLiveQueriesSlots = { liveLoginNotifications: (0, o.liveSlot)() });
      },
      6863: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LoginNotificationType = void 0),
          ((s = t.LoginNotificationType || (t.LoginNotificationType = {})).RELOGIN_NEEDED = "RELOGIN_NEEDED"),
          (s.SSO_FEATURE_BLOCKED = "SSO_FEATURE_BLOCKED"),
          (s.SSO_SETUP_ERROR = "SSO_SETUP_ERROR"),
          (s.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
          (s.TEAM_ACCEPTANCE_SUCCESS = "TEAM_ACCEPTANCE_SUCCESS"),
          (s.TEAM_ACCEPTANCE_ERROR = "TEAM_ACCEPTANCE_ERROR");
      },
      3919: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1228), t), o(s(5741), t);
      },
      1228: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loginStepInfoLiveQueriesSlots = t.loginStepInfoQueriesSlots = t.loginStepInfoCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.loginStepInfoCommandsSlots = { updateLoginStepInfo: (0, r.slot)(), resetLoginStepInfo: (0, r.slot)() }),
          (t.loginStepInfoQueriesSlots = { getLoginStepInfo: (0, r.slot)() }),
          (t.loginStepInfoLiveQueriesSlots = { liveLoginStepInfo: (0, o.liveSlot)() });
      },
      5741: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LoginStep = void 0),
          ((s = t.LoginStep || (t.LoginStep = {})).Email = "email"),
          (s.Welcome = "welcome"),
          (s.OTP1 = "OTP1"),
          (s.OTP2 = "OTP2"),
          (s.BackupCodeOTP1 = "backupCodeOTP1"),
          (s.BackupCodeOTP2 = "backupCodeOTP2"),
          (s.OTPToken = "token"),
          (s.Password = "password"),
          (s.SSO = "SSO"),
          (s.ActivateSSO = "activateSSO"),
          (s.WebAuthn = "webAuthn"),
          (s.WebAuthnError = "webAuthnError"),
          (s.DeviceLimitReached = "deviceLimitReached"),
          (s.DashlaneAuthenticator = "dashlaneAuthenticator"),
          (s.PasswordLess = "passwordLess");
      },
      6913: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6038: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2700: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonMaverickConnector = void 0);
        const r = s(1796);
        t.CarbonMaverickConnector = {
          savePersonalDataItem: (0, r.slot)(),
          filledDataItem: (0, r.slot)(),
          updateWebOnboardingMode: (0, r.slot)()
        };
      },
      4503: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(2700), t), o(s(4490), t);
      },
      4490: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      480: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugConnector = void 0);
        const r = s(1796);
        t.MaverickDebugConnector = {
          getState: (0, r.slot)(),
          analyseDom: (0, r.slot)(),
          processAnalyzedPage: (0, r.slot)(),
          loadDatabases: (0, r.slot)(),
          runCredentialSaveTest: (0, r.slot)(),
          openUrl: (0, r.slot)(),
          toggleLogTypes: (0, r.slot)(),
          actionProcessed: (0, r.slot)(),
          domReceived: (0, r.slot)(),
          domAnalysed: (0, r.slot)(),
          signalError: (0, r.slot)(),
          credentialSaveTestRan: (0, r.slot)(),
          log: (0, r.slot)(),
          signalTabOpened: (0, r.slot)(),
          sendAnalysisResults: (0, r.slot)(),
          signalTabClosed: (0, r.slot)(),
          signalDatabasesInitialized: (0, r.slot)()
        };
      },
      5728: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickDebugEventType = void 0);
        const r = s(415);
        t.MaverickDebugEventType = (0, r.Enum)(
          "GET_STATE",
          "ANALYSE_DOM",
          "LOAD_DATABASES",
          "RUN_CREDENTAL_SAVE_TEST",
          "OPEN_URL",
          "TOGGLE_LOGS",
          "ACTION_PROCESSED",
          "DOM_RECEIVED",
          "DOM_ANALYSED",
          "SIGNAL_EXCEPTION",
          "CREDENTIAL_SAVE_RAN",
          "LOG"
        );
      },
      3025: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(480), t), o(s(5728), t);
      },
      7674: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaverickWrapperConnector = void 0);
        const r = s(1796);
        t.MaverickWrapperConnector = { analyseDom: (0, r.slot)(), pageInfoComputed: (0, r.slot)(), signalError: (0, r.slot)() };
      },
      9344: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ClickableElementTypes = t.LoginStatus = t.MaverickWrapperEventType = void 0);
        const r = s(415);
        (t.MaverickWrapperEventType = (0, r.Enum)("COMPUTE_PAGE_INFO", "PAGE_INFO_COMPUTED", "SIGNAL_EXCEPTION")),
          (t.LoginStatus = (0, r.Enum)("LOGGED_IN", "LOGGED_OUT", "UNKNOWN")),
          (t.ClickableElementTypes = (0, r.Enum)("goToLoginPage", "goToChangePasswordPage", "goToResetPasswordPage"));
      },
      3979: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(7674), t), o(s(9344), t);
      },
      7341: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(424), t), o(s(9199), t);
      },
      9199: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.notificationsLiveQueriesSlots = t.notificationsQueriesSlots = t.notificationsCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.notificationsCommandsSlots = {
          markNotificationAsInteracted: (0, r.slot)(),
          markNotificationAsSeen: (0, r.slot)(),
          markNotificationAsUnseen: (0, r.slot)()
        }),
          (t.notificationsQueriesSlots = { getNotificationStatus: (0, r.slot)() }),
          (t.notificationsLiveQueriesSlots = { liveNotificationStatus: (0, o.liveSlot)() });
      },
      424: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NotificationStatus = t.NotificationName = void 0),
          ((r = t.NotificationName || (t.NotificationName = {})).PaymentFailureChurning = "paymentFailureChurning"),
          (r.PaymentFailureChurned = "paymentFailureChurned"),
          (r.SwitchToMlAnalysisEngine = "switchToMlAnalysisEngine"),
          (r.DWMb2bAutoEnrollTooltip = "dWMb2bAutoEnrollTooltip"),
          (r.VpnProviderIsNowHotspot = "vpnProviderIsNowHotspot"),
          (r.VpnHostpotshieldInstalled = "vpnHostpotshieldInstalled"),
          (r.PopupIncomingTabPayments = "popupIncomingTabPayments"),
          (r.PopupIncomingTabSecureNotes = "popupIncomingTabSecureNotes"),
          (r.PopupIncomingTabPersonalInfo = "popupIncomingTabPersonalInfo"),
          (r.PopupIncomingTabIDs = "popupIncomingTabIDs"),
          (r.NewAccountMenuTooltip = "newAccountMenuTooltip"),
          (r.TacGetTheExtensionBanner = "tacGetTheExtensionBanner"),
          (r.TacEnableAccountRecoveryBanner = "tacEnableAccountRecoveryBanner"),
          (r.TacOnlyOneAdminBanner = "tacOnlyOneAdminBanner"),
          (r.TacDarkWebInsightsNewBadge = "tacDarkWebInsightsNewBadge"),
          (r.PasswordHistoryBanner = "passwordHistoryBanner"),
          (r.SharingCenterDisabledBanner = "sharingCenterDisabledBanner"),
          (r.AccountRecoveryAvailableAdminTooltip = "accountRecoveryAvailableAdminTooltip"),
          (r.AccountRecoveryAvailableEmployeeDialog = "accountRecoveryAvailableEmployeeDialog"),
          (r.ActivateInviteLink = "activateInviteLink"),
          (r.TacGetStartedOpenVault = "tacGetStartedOpenVault"),
          (r.TacGetStartedDismissPage = "tacGetStartedDismissedPage"),
          (r.TacGetStartedSeenPage = "tacGetStartedSeenPage"),
          ((s = t.NotificationStatus || (t.NotificationStatus = {})).Interacted = "interacted"),
          (s.Seen = "seen"),
          (s.Unseen = "unseen");
      },
      8690: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(22), t);
      },
      22: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebOnboardingPopoverStep = t.WebOnboardingLeelooStep = void 0);
        const r = s(415);
        (t.WebOnboardingLeelooStep = (0, r.Enum)(
          "SHOW_LOGIN_USING_EXTENSION_NOTIFICATION",
          "SHOW_SAVE_SITES_DIALOG",
          "SHOW_PASSWORD_SAVE_SUCCESS",
          "SHOW_WEB_SAVE_AND_AUTOLOGIN_COMPLETED",
          "SHOW_PASSWORD_IMPORT",
          "SHOW_GET_MOBILE_DIALOG"
        )),
          (t.WebOnboardingPopoverStep = (0, r.Enum)("SHOW_LOGIN_NOTIFICATION"));
      },
      2902: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Platform = void 0),
          ((s = t.Platform || (t.Platform = {}))[(s.Android = 0)] = "Android"),
          (s[(s.CarbonTests = 1)] = "CarbonTests"),
          (s[(s.CarbonUnknown = 2)] = "CarbonUnknown"),
          (s[(s.DesktopLegacyMacOS = 3)] = "DesktopLegacyMacOS"),
          (s[(s.DesktopLegacyWindows = 4)] = "DesktopLegacyWindows"),
          (s[(s.DesktopUWP = 5)] = "DesktopUWP"),
          (s[(s.IPad = 6)] = "IPad"),
          (s[(s.IPhone = 7)] = "IPhone"),
          (s[(s.IPod = 8)] = "IPod"),
          (s[(s.StandaloneExtension = 9)] = "StandaloneExtension"),
          (s[(s.TeamAdminConsole = 10)] = "TeamAdminConsole"),
          (s[(s.WebApp = 11)] = "WebApp"),
          (s[(s.WebAppDev = 12)] = "WebAppDev");
      },
      8627: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PlatformView = void 0),
          ((s = t.PlatformView || (t.PlatformView = {})).Android = "android"),
          (s.DesktopMacOS = "macosx"),
          (s.DesktopWindows = "windows"),
          (s.IPad = "ipad"),
          (s.IPhone = "iphone"),
          (s.IPod = "ipod"),
          (s.Other = "other"),
          (s.StandaloneExtension = "saex"),
          (s.TeamAdminConsole = "tac"),
          (s.WebApp = "webapp");
      },
      9257: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LoginDeviceLimitFlowStage = void 0),
          ((s = t.LoginDeviceLimitFlowStage || (t.LoginDeviceLimitFlowStage = {})).OneDeviceLimitReached = "OneDeviceLimitReached"),
          (s.MultipleDevicesLimitReached = "MultipleDevicesLimitReached"),
          (s.UnlinkingAndOpeningSession = "UnlinkingAndOpeningSession"),
          (s.UnlinkingMultipleDevicesError = "UnlinkingMultipleDevicesError"),
          (s.RefreshingDeviceLimitStatus = "RefreshingDeviceLimitStatus"),
          (s.OpeningSessionAfterDeviceLimitRemoval = "OpeningSessionAfterDeviceLimitRemoval"),
          (s.DeviceLimitDone = "DeviceLimitDone");
      },
      5155: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8098: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AbortDeviceLimitFlowError = void 0),
          ((t.AbortDeviceLimitFlowError || (t.AbortDeviceLimitFlowError = {})).UnexpectedError = "UNEXPECTED_ERROR");
      },
      2233: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(8098), t),
          o(s(5131), t),
          o(s(969), t),
          o(s(9257), t),
          o(s(5155), t),
          o(s(8627), t),
          o(s(8950), t),
          o(s(952), t),
          o(s(2902), t);
      },
      5131: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UNEXPECTED_ERROR = t.USER_STILL_OVERFLOWING = void 0),
          (t.USER_STILL_OVERFLOWING = "USER_STILL_OVERFLOWING"),
          (t.UNEXPECTED_ERROR = "UNEXPECTED_ERROR");
      },
      952: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      969: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UnlinkPreviousDeviceError = void 0),
          ((t.UnlinkPreviousDeviceError || (t.UnlinkPreviousDeviceError = {})).UnexpectedError = "UNEXPECTED_ERROR");
      },
      8950: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7168: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.deviceLimitLiveSlots = t.deviceLimitSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.deviceLimitSlots = { getLoginDeviceLimitFlow: (0, r.slot)() }),
          (t.deviceLimitLiveSlots = { liveLoginDeviceLimitFlow: (0, o.liveSlot)() });
      },
      7725: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4001), t);
      },
      8056: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.twoFactorStatusLiveSlots = t.twoFactorStatusSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.twoFactorStatusSlots = { getTwoFactorAuthenticationInfo: (0, r.slot)() }),
          (t.twoFactorStatusLiveSlots = { liveTwoFactorAuthenticationInfo: (0, o.liveSlot)() });
      },
      4001: (e, t) => {
        "use strict";
        var s, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES =
            t.TwoFactorAuthenticationInfoRequestStatus =
            t.TwoFactorAuthenticationType =
              void 0),
          ((o = t.TwoFactorAuthenticationType || (t.TwoFactorAuthenticationType = {})).EMAIL_TOKEN = "email_token"),
          (o.DEVICE_REGISTRATION = "totp_device_registration"),
          (o.LOGIN = "totp_login"),
          (o.SSO = "sso"),
          ((r = t.TwoFactorAuthenticationInfoRequestStatus || (t.TwoFactorAuthenticationInfoRequestStatus = {}))[(r.UNKNOWN = 0)] =
            "UNKNOWN"),
          (r[(r.PENDING = 1)] = "PENDING"),
          (r[(r.ERROR = 2)] = "ERROR"),
          (r[(r.READY = 3)] = "READY"),
          (function (e) {
            (e.LOGIN = "login"), (e.NEW_DEVICE = "newDevice"), (e.DISABLED = "disabled");
          })(s || (s = {})),
          (t.ENFORCE_TWO_FACTOR_AUTHENTICATION_ENABLED_VALUES = [s.LOGIN, s.NEW_DEVICE]);
      },
      4477: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3016), t), o(s(3985), t), o(s(2233), t), o(s(7725), t);
      },
      3985: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.openSessionCommandsSlots = t.openSessionLiveQueriesSlots = t.openSessionQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195),
          n = s(7168),
          i = s(8056);
        (t.openSessionQueriesSlots = Object.assign(
          Object.assign(
            {
              getLoginStatus: (0, r.slot)(),
              getLocalAccounts: (0, r.slot)(),
              getIsSSOUser: (0, r.slot)(),
              getSSOMigrationInfo: (0, r.slot)(),
              getSessionInfo: (0, r.slot)(),
              getMasterPasswordAndServerKey: (0, r.slot)(),
              getUserCryptoSettings: (0, r.slot)(),
              getSyncInfo: (0, r.slot)(),
              getIsSyncInProgress: (0, r.slot)(),
              getPremiumStatus: (0, r.slot)(),
              getNodePremiumStatus: (0, r.slot)(),
              getSubscriptionInformation: (0, r.slot)(),
              getActiveSpaces: (0, r.slot)(),
              getIsAuthenticated: (0, r.slot)(),
              getSSOProviderInfo: (0, r.slot)(),
              getUserLogin: (0, r.slot)(),
              getPublicUserId: (0, r.slot)(),
              getAnalyticsInstallationId: (0, r.slot)(),
              getUserLoginStatus: (0, r.slot)(),
              getWebOnboardingMode: (0, r.slot)(),
              getPremiumChurningDismissDate: (0, r.slot)(),
              getIsPaymentFailureChurningDismissed: (0, r.slot)(),
              getCredentialSearchOrder: (0, r.slot)(),
              getDidOpen: (0, r.slot)(),
              getPlatformName: (0, r.slot)(),
              getAccountAuthenticationType: (0, r.slot)()
            },
            n.deviceLimitSlots
          ),
          i.twoFactorStatusSlots
        )),
          (t.openSessionLiveQueriesSlots = Object.assign(
            Object.assign(
              {
                liveLoginStatus: (0, o.liveSlot)(),
                liveDidOpen: (0, o.liveSlot)(),
                liveIsSSOUser: (0, o.liveSlot)(),
                liveSSOMigrationInfo: (0, o.liveSlot)(),
                liveSessionInfo: (0, o.liveSlot)(),
                liveSyncInfo: (0, o.liveSlot)(),
                liveIsSyncInProgress: (0, o.liveSlot)(),
                livePremiumStatus: (0, o.liveSlot)(),
                liveServiceProviderUrl: (0, o.liveSlot)(),
                liveWebOnboardingMode: (0, o.liveSlot)(),
                liveSubscriptionInformation: (0, o.liveSlot)()
              },
              n.deviceLimitLiveSlots
            ),
            i.twoFactorStatusLiveSlots
          )),
          (t.openSessionCommandsSlots = {
            validateToken: (0, r.slot)(),
            validateMasterPassword: (0, r.slot)(),
            resetProtectedItemAutofillTimer: (0, r.slot)(),
            forceSync: (0, r.slot)(),
            updatePremiumChurningDismissDate: (0, r.slot)(),
            setCredentialSearchOrder: (0, r.slot)(),
            refreshSubscriptionInformation: (0, r.slot)(),
            updateAccountRecoveryKeyPersonalSettings: (0, r.slot)()
          });
      },
      3016: (e, t) => {
        "use strict";
        var s, r, o, n, i, a, c, l, u, d;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CredentialSearchOrder =
            t.SSOMigrationType =
            t.SpaceStatus =
            t.SpaceTier =
            t.B2CPlanFeature =
            t.SyncStatuses =
            t.ServerSidePairingStatus =
            t.possibleAdminPermissions =
            t.groupPermissions =
            t.PlanType =
            t.CapabilityKeys =
            t.PremiumStatusCode =
              void 0),
          ((d = t.PremiumStatusCode || (t.PremiumStatusCode = {}))[(d.NO_PREMIUM = 0)] = "NO_PREMIUM"),
          (d[(d.PREMIUM = 1)] = "PREMIUM"),
          (d[(d.PREMIUM_CANCELLED = 2)] = "PREMIUM_CANCELLED"),
          (d[(d.OLD_ACCOUNT = 3)] = "OLD_ACCOUNT"),
          (d[(d.NEW_USER = 4)] = "NEW_USER"),
          (d[(d.GRACE_PERIOD = 5)] = "GRACE_PERIOD"),
          (t.CapabilityKeys = [
            "autofillWithPhishingPrevention",
            "creditMonitoring",
            "dataLeak",
            "devicesLimit",
            "identityRestoration",
            "identityTheftProtection",
            "multipleAccounts",
            "passwordsLimit",
            "phoneSupport",
            "secureFiles",
            "secureNotes",
            "secureWiFi",
            "securityBreach",
            "sharingLimit",
            "sync",
            "yubikey",
            "scim",
            "sso",
            "collectionSharing"
          ]),
          ((u = t.PlanType || (t.PlanType = {})).Amazon = "amazon"),
          (u.FreeTrial = "free_trial"),
          (u.Invoice = "invoice"),
          (u.IOS = "ios"),
          (u.IOSRenewable = "ios_renewable"),
          (u.Mac = "mac"),
          (u.MacRenewable = "mac_renewable"),
          (u.Offer = "offer"),
          (u.Partner = "partner"),
          (u.Paypal = "paypal"),
          (u.PaypalRenewable = "paypal_renewable"),
          (u.Playstore = "playstore"),
          (u.PlaystoreRenewable = "playstore_renewable"),
          (u.Stripe = "stripe"),
          (t.groupPermissions = ["GROUP_CREATE", "GROUP_DELETE", "GROUP_EDIT", "GROUP_READ"]),
          (t.possibleAdminPermissions = ["FULL", "BILLING", ...t.groupPermissions]),
          ((l = t.ServerSidePairingStatus || (t.ServerSidePairingStatus = {}))[(l.UNPAIRED = 0)] = "UNPAIRED"),
          (l[(l.PAIRED = 1)] = "PAIRED"),
          ((c = t.SyncStatuses || (t.SyncStatuses = {})).READY = "ready"),
          (c.IN_PROGRESS = "in_progress"),
          (c.SUCCESS = "success"),
          (c.FAILURE = "failure"),
          (function (e) {
            (e.not_in_team = "not_in_team"), (e.proposed = "proposed"), (e.in_team = "in_team");
          })(s || (s = {})),
          ((a = t.B2CPlanFeature || (t.B2CPlanFeature = {})).Premium = "premium"),
          (a.Essentials = "essentials"),
          (a.Premiumplus = "premiumplus"),
          (a.BackupForAll = "backup"),
          ((i = t.SpaceTier || (t.SpaceTier = {})).Team = "team"),
          (i.Business = "business"),
          (i.Legacy = "legacy"),
          (i.Entreprise = "entreprise"),
          (i.Free = "free"),
          (i.Starter = "starter"),
          ((n = t.SpaceStatus || (t.SpaceStatus = {})).Accepted = "accepted"),
          (n.Pending = "pending"),
          (n.Proposed = "proposed"),
          (n.Refused = "refused"),
          (n.Removed = "removed"),
          (n.Revoked = "revoked"),
          (n.Unproposed = "unproposed"),
          ((o = t.SSOMigrationType || (t.SSOMigrationType = {}))[(o.MP_TO_SSO = 0)] = "MP_TO_SSO"),
          (o[(o.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
          (o[(o.SSO_TO_MP = 2)] = "SSO_TO_MP"),
          ((r = t.CredentialSearchOrder || (t.CredentialSearchOrder = {})).NAME = "name"),
          (r.DATE = "date");
      },
      7894: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4231), t), o(s(3533), t);
      },
      4231: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.passwordGeneratorQueriesSlots = t.passwordGeneratorCommandsSlots = void 0);
        const r = s(1796);
        (t.passwordGeneratorCommandsSlots = {
          generatePassword: (0, r.slot)(),
          generateAndSavePassword: (0, r.slot)(),
          savePasswordGenerationSettings: (0, r.slot)()
        }),
          (t.passwordGeneratorQueriesSlots = { getPasswordGenerationSettings: (0, r.slot)() });
      },
      3533: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3263: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5154), t), o(s(5869), t);
      },
      5154: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.paymentsQueriesSlots = t.paymentsCommandsSlots = void 0);
        const r = s(1796);
        (t.paymentsCommandsSlots = {
          cancelAutoRenew: (0, r.slot)(),
          downloadCustomerInvoice: (0, r.slot)(),
          fetchInvoiceList: (0, r.slot)(),
          requestRefund: (0, r.slot)()
        }),
          (t.paymentsQueriesSlots = { getInvoicesCount: (0, r.slot)(), getInvoiceList: (0, r.slot)(), getInvoiceListYears: (0, r.slot)() });
      },
      5869: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OrderDir = void 0),
          ((s = t.OrderDir || (t.OrderDir = {})).ascending = "ascending"),
          (s.descending = "descending");
      },
      7981: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6331), t), o(s(1230), t);
      },
      6331: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.protectedItemsUnlockerLiveQueriesSlots =
            t.protectedItemsUnlockerQueriesSlots =
            t.protectedItemsUnlockerCommandsSlots =
              void 0);
        const r = s(1796),
          o = s(5195);
        (t.protectedItemsUnlockerCommandsSlots = { disableCredentialProtection: (0, r.slot)(), unlockProtectedItems: (0, r.slot)() }),
          (t.protectedItemsUnlockerQueriesSlots = { areProtectedItemsUnlocked: (0, r.slot)() }),
          (t.protectedItemsUnlockerLiveQueriesSlots = { liveAreProtectedItemsUnlocked: (0, o.liveSlot)() });
      },
      1230: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DisableCredentialProtectionStatus = t.unlockProtectedItemsWrongPasswordError = t.UnlockProtectedItemsStatus = void 0),
          ((r = t.UnlockProtectedItemsStatus || (t.UnlockProtectedItemsStatus = {})).SUCCESS = "success"),
          (r.ERROR = "error"),
          (t.unlockProtectedItemsWrongPasswordError = "WRONG PASSWORD"),
          ((s = t.DisableCredentialProtectionStatus || (t.DisableCredentialProtectionStatus = {})).SUCCESS = "success"),
          (s.ERROR = "error");
      },
      3448: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9239), t), o(s(4298), t);
      },
      9239: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.recoveryLiveQueriesSlots = t.recoveryQueriesSlots = t.recoveryCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.recoveryCommandsSlots = {
          activateAccountRecovery: (0, r.slot)(),
          setupMasterPasswordForRecovery: (0, r.slot)(),
          deactivateAccountRecovery: (0, r.slot)(),
          registerDeviceForRecovery: (0, r.slot)(),
          startAccountRecovery: (0, r.slot)(),
          sendRecoveryRequest: (0, r.slot)(),
          cancelRecoveryRequest: (0, r.slot)(),
          checkRecoveryRequestStatus: (0, r.slot)(),
          recoverUserData: (0, r.slot)(),
          checkDoesLocalRecoveryKeyExist: (0, r.slot)(),
          isRecoveryRequestPending: (0, r.slot)()
        }),
          (t.recoveryQueriesSlots = {
            getRecoveryOptInSetting: (0, r.slot)(),
            getShouldShowFeatureActivationModal: (0, r.slot)(),
            getAccountRecoveryRequestCount: (0, r.slot)()
          }),
          (t.recoveryLiveQueriesSlots = { liveAccountRecoveryRequestCount: (0, o.liveSlot)() });
      },
      4298: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RequestStatus = t.RecoveryApiErrorType = void 0),
          ((r = t.RecoveryApiErrorType || (t.RecoveryApiErrorType = {})).CheckRecoveryStatusFailed = "CHECK_RECOVERY_STATUS_FAILED"),
          (r.RecoverySetupFailed = "RECOVERY_SETUP_FAILED"),
          (r.RecoveryDeactivationFailed = "RECOVERY_DEACTIVATION_FAILED"),
          (r.RecoveryRequestFailed = "RECOVERY_REQUEST_FAILED"),
          (r.RegisterDeviceFailed = "REGISTER_DEVICE_FAILED"),
          (r.SetupMasterPasswordForRecoveryFailed = "SETUP_MASTERPASSWORD_FOR_RECOVERY_FAILED"),
          (r.CancelRecoveryRequestFailed = "CANCEL_RECOVERY_REQUEST_FAILED"),
          (r.RecoverUserDataFailed = "RECOVER_REQUEST_FAILED"),
          (r.CheckLocalRecoveryKeyFailed = "CHECK_LOCAL_RECOVERY_KEY_FAILED"),
          (r.StartAccountRecoveryFailed = "START_ACCOUNT_RECOVERY_FAILED"),
          (r.AccountRecoveryNotAvailableError = "ACCOUNT_RECOVERY_NOT_AVAILABLE_ERROR"),
          (r.IsRecoveryRequestPendingFailed = "IS_RECOVERY_REQUEST_PENDING_FAILED"),
          ((s = t.RequestStatus || (t.RequestStatus = {})).PENDING = "PENDING"),
          (s.APPROVED = "APPROVED"),
          (s.REFUSED = "REFUSED"),
          (s.OVERRIDDEN = "OVERRIDDEN"),
          (s.CANCELED = "CANCELED");
      },
      6014: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPIPersonalWebsiteEvent =
            t.isPIEmailEvent =
            t.isPICompanyEvent =
            t.isPIAddressEvent =
            t.isPIPhoneEvent =
            t.isPIIdentityEvent =
            t.isPersonalInfoEvent =
            t.SaveOrigin =
              void 0),
          ((s = t.SaveOrigin || (t.SaveOrigin = {})).MANUAL = "MANUAL"),
          (s.MAV_DATACAPTURE = "MAV_DATACAPTURE"),
          (s.MAV_SAVE_CREDENTIAL = "MAV_SAVE_CREDENTIAL"),
          (s.IMPORT = "IMPORT"),
          (t.isPersonalInfoEvent = function (e) {
            return ["KWCompany", "KWEmail", "KWPersonalWebsite", "KWIdentity", "KWAddress", "KWPhone"].some(
              (t) => Boolean(e) && e.kwType === t
            );
          }),
          (t.isPIIdentityEvent = function (e) {
            return Boolean(e) && "KWIdentity" === e.kwType;
          }),
          (t.isPIPhoneEvent = function (e) {
            return Boolean(e) && "KWPhone" === e.kwType;
          }),
          (t.isPIAddressEvent = function (e) {
            return Boolean(e) && "KWAddress" === e.kwType;
          }),
          (t.isPICompanyEvent = function (e) {
            return Boolean(e) && "KWCompany" === e.kwType;
          }),
          (t.isPIEmailEvent = function (e) {
            return Boolean(e) && "KWEmail" === e.kwType;
          }),
          (t.isPIPersonalWebsiteEvent = function (e) {
            return Boolean(e) && "KWPersonalWebsite" === e.kwType;
          });
      },
      5169: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6014), t);
      },
      2725: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6480: (e, t) => {
        "use strict";
        var s, r, o, n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UpdateSharingPermissionFailureReason =
            t.RevokeSharingFailureReason =
            t.SharingResponseStatus =
            t.ShareItemFailureReason =
            t.isGroupRecipient =
            t.isUserRecipient =
              void 0),
          (t.isUserRecipient = function (e) {
            return Boolean(e) && "user" === e.type;
          }),
          (t.isGroupRecipient = function (e) {
            return Boolean(e) && "userGroup" === e.type;
          }),
          ((n = t.ShareItemFailureReason || (t.ShareItemFailureReason = {}))[(n.ITEM_DOESNT_EXIST = 0)] = "ITEM_DOESNT_EXIST"),
          (n[(n.LIMIT_EXCEEDED = 1)] = "LIMIT_EXCEEDED"),
          (n[(n.ITEM_HAS_ATTACHMENTS = 2)] = "ITEM_HAS_ATTACHMENTS"),
          (n[(n.SHARING_FAILED = 3)] = "SHARING_FAILED"),
          ((o = t.SharingResponseStatus || (t.SharingResponseStatus = {}))[(o.Accept = 0)] = "Accept"),
          (o[(o.Refuse = 1)] = "Refuse"),
          ((r = t.RevokeSharingFailureReason || (t.RevokeSharingFailureReason = {}))[(r.FORBIDDEN = 0)] = "FORBIDDEN"),
          (r[(r.NOT_FOUND = 1)] = "NOT_FOUND"),
          (r[(r.REVOKE_FAILED = 2)] = "REVOKE_FAILED"),
          ((s = t.UpdateSharingPermissionFailureReason || (t.UpdateSharingPermissionFailureReason = {}))[(s.FORBIDDEN = 0)] = "FORBIDDEN"),
          (s[(s.NOT_FOUND = 1)] = "NOT_FOUND"),
          (s[(s.UPDATE_FAILED = 2)] = "UPDATE_FAILED");
      },
      245: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6145: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6687: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6145), t), o(s(245), t), o(s(6480), t);
      },
      7422: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6687), t), o(s(8972), t), o(s(2866), t);
      },
      8972: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sharingCommandsSlots = t.sharingLiveQueriesSlots = t.sharingQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.sharingQueriesSlots = {
          getAllSharedItemIds: (0, r.slot)(),
          getGroupRecipients: (0, r.slot)(),
          getHasNotifications: (0, r.slot)(),
          getIsShared: (0, r.slot)(),
          getItemItemGroup: (0, r.slot)(),
          getMyAcceptedItemGroupUserMembers: (0, r.slot)(),
          getMyAcceptedUserGroups: (0, r.slot)(),
          getPendingUserGroups: (0, r.slot)(),
          getPendingItemGroups: (0, r.slot)(),
          getRecipientsCount: (0, r.slot)(),
          getUserRecipients: (0, r.slot)(),
          getSharingCapacity: (0, r.slot)(),
          isAllowedToShare: (0, r.slot)(),
          getUserGroups: (0, r.slot)(),
          getUserGroup: (0, r.slot)(),
          getUserGroupPermissionLevel: (0, r.slot)(),
          getUserGroupMembers: (0, r.slot)(),
          getSharingUsers: (0, r.slot)(),
          getSharingUserPermissionLevel: (0, r.slot)()
        }),
          (t.sharingLiveQueriesSlots = {
            liveAllSharedItemIds: (0, o.liveSlot)(),
            liveGroupRecipients: (0, o.liveSlot)(),
            liveHasNotifications: (0, o.liveSlot)(),
            liveIsShared: (0, o.liveSlot)(),
            liveMyAcceptedItemGroupUserMembers: (0, o.liveSlot)(),
            liveMyAcceptedUserGroups: (0, o.liveSlot)(),
            livePendingItemGroups: (0, o.liveSlot)(),
            livePendingUserGroups: (0, o.liveSlot)(),
            liveRecipientsCount: (0, o.liveSlot)(),
            liveUserRecipients: (0, o.liveSlot)(),
            liveSharingCapacity: (0, o.liveSlot)(),
            liveUserGroups: (0, o.liveSlot)(),
            liveUserGroupPermissionLevel: (0, o.liveSlot)(),
            liveSharingUsers: (0, o.liveSlot)(),
            liveSharingUserPermissionLevel: (0, o.liveSlot)()
          }),
          (t.sharingCommandsSlots = { convertItemToDashlaneXml: (0, r.slot)(), shareItem: (0, r.slot)() });
      },
      2866: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      793: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1804: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2563: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5187: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StaticDataQueryType = void 0),
          ((s = t.StaticDataQueryType || (t.StaticDataQueryType = {}))[(s.CALLING_CODES = 0)] = "CALLING_CODES"),
          (s[(s.GEOGRAPHIC_STATES = 1)] = "GEOGRAPHIC_STATES");
      },
      4332: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GeographicStateLevel = void 0),
          ((s = t.GeographicStateLevel || (t.GeographicStateLevel = {}))[(s.LEVEL_0 = 0)] = "LEVEL_0"),
          (s[(s.LEVEL_1 = 1)] = "LEVEL_1");
      },
      1072: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StaticDataQueryType = void 0);
        var n = s(5187);
        Object.defineProperty(t, "StaticDataQueryType", {
          enumerable: !0,
          get: function () {
            return n.StaticDataQueryType;
          }
        }),
          o(s(2563), t),
          o(s(4332), t),
          o(s(8554), t),
          o(s(6193), t);
      },
      6193: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.staticDataQueriesSlots = void 0);
        const r = s(1796);
        t.staticDataQueriesSlots = {
          getAllBanks: (0, r.slot)(),
          getAllCallingCodes: (0, r.slot)(),
          getBanks: (0, r.slot)(),
          getSecureDocumentsExtensionsList: (0, r.slot)()
        };
      },
      8554: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6648: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      553: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(494), t), o(s(2170), t);
      },
      494: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.teamCommandsSlots = t.teamQueriesSlots = void 0);
        const r = s(1796);
        (t.teamQueriesSlots = { getIsRecoveryEnabled: (0, r.slot)() }),
          (t.teamCommandsSlots = {
            getTeamInfo: (0, r.slot)(),
            getTeamOffers: (0, r.slot)(),
            getMidCycleTierUpgradePrice: (0, r.slot)(),
            getExpectedTaxInformation: (0, r.slot)(),
            changeTierMidCycle: (0, r.slot)(),
            computePlanPricing: (0, r.slot)(),
            addSeats: (0, r.slot)()
          });
      },
      2170: (e, t) => {
        "use strict";
        var s, r, o, n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AddSeatsErrorType =
            t.ComputePlanPricingErrorType =
            t.ChangeTierMidCycleErrorType =
            t.GetExpectedTaxInformationErrorType =
            t.GetMidCycleTierUpgradePriceErrorType =
            t.B2BPlanTiers =
            t.GetTeamOffersErrorType =
              void 0),
          ((n = t.GetTeamOffersErrorType || (t.GetTeamOffersErrorType = {})).GetTeamOffersFailed = "GET_TEAM_OFFERS_FAILED"),
          (n.GetTeamOffersSummaryFailed = "GET_TEAM_OFFERS_SUMMARY_FAILED"),
          (t.B2BPlanTiers = ["legacy", "team", "business", "entreprise"]),
          ((t.GetMidCycleTierUpgradePriceErrorType || (t.GetMidCycleTierUpgradePriceErrorType = {})).GetMidCycleTierUpgradePriceFailed =
            "GET_MID_CYCLE_TIER_UPGRADE_PRICE_FAILED"),
          ((t.GetExpectedTaxInformationErrorType || (t.GetExpectedTaxInformationErrorType = {})).GetExpectedTaxInformationFailed =
            "GET_EXPECTED_TAX_INFORMATION_FAILED"),
          ((o = t.ChangeTierMidCycleErrorType || (t.ChangeTierMidCycleErrorType = {})).ChangeTierMidCycleFailed =
            "CHANGE_TIER_MID_CYCLE_FAILED"),
          (o.PaymentMeanIsNotCreditcard = "PAYMENT_MEAN_IS_NOT_CREDITCARD"),
          (o.CurrentPlanStartDateInFuture = "CURRENT_PLAN_START_DATE_IN_FUTURE"),
          (o.ChangeTierMidCycleError = "CHANGE_TIER_MID_CYCLE_ERROR"),
          (o.PaymentMeanIsNotInvoice = "PAYMENT_MEAN_IS_NOT_INVOICE"),
          (o.ChangeTierAmountTooExpensive = "CHANGE_TIER_AMOUNT_TOO_EXPENSIVE"),
          (o.ErrorCalculatingTierChangeDiscount = "ERROR_CALCULATING_TIER_CHANGE_DISCOUNT"),
          (o.InsufficientAmount = "INSUFFICIENT_AMOUNT"),
          (o.AssignedPlanSameTierAsCurrentPlan = "ASSIGNED_PLAN_SAME_TIER_AS_CURRENT_PLAN"),
          (o.SalesTaxMismatch = "SALES_TAX_MISMATCH"),
          (o.NotBillingAdmin = "NOT_BILLING_ADMIN"),
          ((r = t.ComputePlanPricingErrorType || (t.ComputePlanPricingErrorType = {})).ComputePlanPricingFailed =
            "COMPUTE_PLAN_PRICING_FAILED"),
          (r.NotBillingAdmin = "NOT_BILLING_ADMIN"),
          ((s = t.AddSeatsErrorType || (t.AddSeatsErrorType = {})).AddSeatsFailed = "ADD_SEATS_FAILED"),
          (s.CannotAddSeatDuringFreeTrial = "CANNOT_ADD_SEAT_DURING_FREE_TRIAL"),
          (s.CannotAddSeatDuringGracePeriod = "CANNOT_ADD_SEAT_DURING_GRACE_PERIOD"),
          (s.UnsupportedPaymentMean = "UNSUPPORTED_PAYMENT_MEAN"),
          (s.NotBillingAdmin = "NOT_BILLING_ADMIN"),
          (s.PaymentFailed = "PAYMENT_FAILED");
      },
      1197: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetAuditLogQueryResultsState = t.ApiAuditLogsErrorType = void 0),
          ((r = t.ApiAuditLogsErrorType || (t.ApiAuditLogsErrorType = {})).StartAuditLogsQueryFailed = "START_AUDIT_LOGS_QUERY_FAILED"),
          (r.GetAuditLogQueryResultsFailed = "GET_AUDIT_LOG_QUERY_RESULTS_FAILED"),
          ((s = t.GetAuditLogQueryResultsState || (t.GetAuditLogQueryResultsState = {})).Queued = "QUEUED"),
          (s.Running = "RUNNING"),
          (s.Succeeded = "SUCCEEDED"),
          (s.Failed = "FAILED"),
          (s.Cancelled = "CANCELLED");
      },
      3129: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TeamDevicePlatform = void 0),
          ((s = t.TeamDevicePlatform || (t.TeamDevicePlatform = {})).SSO_CONNECTOR = "sso_connector"),
          (s.ENCRYPTION_SERVICE = "encryption_service"),
          (s.NITRO = "nitro_encryption_service");
      },
      2567: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6649: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DomainStatus = t.DomainStatusResponse = void 0),
          (function (e) {
            (e.pending = "pending"), (e.valid = "valid"), (e.expired = "expired"), (e.invalid = "invalid");
          })((s = t.DomainStatusResponse || (t.DomainStatusResponse = {}))),
          (t.DomainStatus = s);
      },
      6052: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EncryptionServiceRestartStatusCodes = void 0),
          ((s = t.EncryptionServiceRestartStatusCodes || (t.EncryptionServiceRestartStatusCodes = {})).OK = "OK"),
          (s.ES_UNREACHABLE = "ES_UNREACHABLE"),
          (s.ES_CONFIG_RELOAD_FAILURE = "ES_CONFIG_RELOAD_FAILURE"),
          (s.ES_INTERNAL_NETWORK_ERROR = "ES_INTERNAL_NETWORK_ERROR");
      },
      9815: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DomainNotValidForTeam =
            t.DomainContainsNonTeamUsers =
            t.InvalidPublicDomain =
            t.DomainAlreadyExists =
            t.TeamDoesNotExist =
            t.ServerError =
            t.InsufficientTier =
            t.TeamDeviceEncryptedConfigNotFound =
            t.InvalidTeamDeviceLogin =
            t.InvalidRequestError =
            t.DeviceAccountMappingAlreadyExists =
            t.DeviceKeyNotFound =
            t.UnknownTeamAdminError =
            t.NotAdmin =
            t.DeactivatedTeamDevice =
            t.BasicConfigNotFound =
              void 0),
          (t.BasicConfigNotFound = "BASIC_CONFIGURATION_NOT_FOUND"),
          (t.DeactivatedTeamDevice = "DEACTIVATED_TEAM_DEVICE"),
          (t.NotAdmin = "NOT_ADMIN"),
          (t.UnknownTeamAdminError = "UNKNOWN_ERROR"),
          (t.DeviceKeyNotFound = "DEVICE_KEY_NOT_FOUND"),
          (t.DeviceAccountMappingAlreadyExists = "DEVICE_ACCOUNT_MAPPING_ALREADY_EXISTS"),
          (t.InvalidRequestError = "invalid_request_error"),
          (t.InvalidTeamDeviceLogin = "INVALID_TEAM_DEVICE_LOGIN"),
          (t.TeamDeviceEncryptedConfigNotFound = "TEAM_DEVICE_CONFIGURATION_NOT_FOUND"),
          (t.InsufficientTier = "INSUFFICIENT_TIER"),
          (t.ServerError = "server_error"),
          (t.TeamDoesNotExist = "TEAM_DOES_NOT_EXIST"),
          (t.DomainAlreadyExists = "DOMAIN_ALREADY_EXISTS"),
          (t.InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN"),
          (t.DomainContainsNonTeamUsers = "DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS"),
          (t.DomainNotValidForTeam = "DOMAIN_NOT_VALID_FOR_TEAM");
      },
      7195: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownTeamAdminError = t.TeamDeviceEncryptedConfigNotFound = void 0);
        var n = s(9815);
        Object.defineProperty(t, "TeamDeviceEncryptedConfigNotFound", {
          enumerable: !0,
          get: function () {
            return n.TeamDeviceEncryptedConfigNotFound;
          }
        }),
          Object.defineProperty(t, "UnknownTeamAdminError", {
            enumerable: !0,
            get: function () {
              return n.UnknownTeamAdminError;
            }
          }),
          o(s(2027), t),
          o(s(1197), t),
          o(s(3129), t),
          o(s(2567), t),
          o(s(6649), t),
          o(s(6052), t),
          o(s(294), t),
          o(s(49), t),
          o(s(3631), t),
          o(s(5787), t),
          o(s(9560), t),
          o(s(7202), t);
      },
      294: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InviteLinkResponseErrorCode = void 0),
          ((s = t.InviteLinkResponseErrorCode || (t.InviteLinkResponseErrorCode = {})).NotAdmin = "not_admin"),
          (s.TeamKeyNotFound = "TEAM_KEY_NOT_FOUND"),
          (s.InviteLinkNotFound = "TEAM_INVITE_LINK_NOT_FOUND"),
          (s.UserInviteLinkNotFound = "USER_TEAM_INVITE_TOKEN_NOT_FOUND");
      },
      49: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetRecoveryCodesAsTeamCaptainErrorCode = void 0),
          ((s = t.GetRecoveryCodesAsTeamCaptainErrorCode || (t.GetRecoveryCodesAsTeamCaptainErrorCode = {})).NotAdmin =
            "not_billing_admin"),
          (s.InternalError = "internal_error"),
          (s.UnknownError = "UNKNOWN_ERROR");
      },
      3631: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.IDPMetadataParseErrors = t.IDPXmlParseErrors = void 0),
          ((t.IDPXmlParseErrors || (t.IDPXmlParseErrors = {})).XML_PARSE_FAILED = "xml_parse_failed"),
          ((s = t.IDPMetadataParseErrors || (t.IDPMetadataParseErrors = {})).KEY_DESCRIPTOR_NOT_FOUND = "key_descriptor_not_found"),
          (s.IDP_ENTRYPOINT_NOT_FOUND = "idp_entrypoint_not_found"),
          (s.INVALID_IDP_SSO_DESCRIPTOR = "invalid_idp_sso_descriptor"),
          (s.MISSING_CERTIFICATE = "missing_certificate"),
          (s.MULTIPLE_CERTIFICATES = "multiple_certificates"),
          (s.CERTIFICATE_TOO_SHORT = "certificate_too_short"),
          (s.CERTIFICATE_TOO_LONG = "certificate_too_long "),
          (s.CERTIFICATE_DECODE_FAILED = "certificate_decode_failed"),
          (s.INVALID_ENTRYPOINT = "invalid_entrypoint");
      },
      5787: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7202: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.teamAdminCommandsSlots = t.teamAdminLiveQueriesSlots = t.teamAdminQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.teamAdminQueriesSlots = {
          getAdministrableUserGroup: (0, r.slot)(),
          getAdministrableUserGroups: (0, r.slot)(),
          isGroupNameAvailable: (0, r.slot)(),
          getAdminProvisioningKey: (0, r.slot)()
        }),
          (t.teamAdminLiveQueriesSlots = {
            liveAdministrableUserGroup: (0, o.liveSlot)(),
            liveAdministrableUserGroups: (0, o.liveSlot)(),
            liveAdminProvisioningKey: (0, o.liveSlot)()
          }),
          (t.teamAdminCommandsSlots = {
            registerTeamDomain: (0, r.slot)(),
            completeTeamDomainRegistration: (0, r.slot)(),
            deactivateTeamDomain: (0, r.slot)(),
            getTeamDomains: (0, r.slot)(),
            getTeamDevice: (0, r.slot)(),
            listTeamDevices: (0, r.slot)(),
            deactivateTeamDevice: (0, r.slot)(),
            registerTeamDevice: (0, r.slot)(),
            registerTeamDeviceAccount: (0, r.slot)(),
            getEncryptionServiceConfig: (0, r.slot)(),
            generateAndSaveEncryptionServiceConfig: (0, r.slot)(),
            clearSelfHostedESSettings: (0, r.slot)(),
            getTeamDeviceEncryptedConfig: (0, r.slot)(),
            updateTeamDeviceEncryptedConfig: (0, r.slot)(),
            updateTeamSettings: (0, r.slot)(),
            parseMetadataFields: (0, r.slot)(),
            persistAdminProvisioningKey: (0, r.slot)(),
            removeAdminProvisioningKey: (0, r.slot)(),
            createSSOConnectorConfig: (0, r.slot)(),
            generateSSOConnectorKey: (0, r.slot)(),
            startAuditLogsQuery: (0, r.slot)(),
            getAuditLogQueryResults: (0, r.slot)(),
            getRecoveryCodesAsTeamCaptain: (0, r.slot)(),
            createInviteLink: (0, r.slot)(),
            changeInviteLinkTeamKey: (0, r.slot)(),
            toggleInviteLink: (0, r.slot)(),
            getInviteLink: (0, r.slot)(),
            requestInviteLinkToken: (0, r.slot)(),
            getInviteLinkForAdmin: (0, r.slot)(),
            getLastADSyncDate: (0, r.slot)(),
            getSpecialUserGroupInviteValuesForMemberInTeam: (0, r.slot)(),
            getSpecialUserGroupRevision: (0, r.slot)()
          });
      },
      9560: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2027: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TeamMemberSSOStatus = void 0),
          ((s = t.TeamMemberSSOStatus || (t.TeamMemberSSOStatus = {})).Activated = "activated"),
          (s.PendingActivation = "pending_activation"),
          (s.PendingDeactivation = "pending_deactivation");
      },
      3572: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9647), t), o(s(195), t);
      },
      9647: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UserMessageTypes = void 0),
          ((s = t.UserMessageTypes || (t.UserMessageTypes = {})).DEFAULT = "default"),
          (s.TRIAL_EXPIRED = "trial_expired"),
          (s.WEB_STORE = "web_store"),
          (s.DASHBOARD_UPRADE = "dashboard_upgrade"),
          (s.SHARING_CENTER_FAMILY = "sharing_center_family"),
          (s.SHARING_CENTER_WORK = "sharing_center_work");
      },
      195: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.userMessagesCommandsSlots = t.userMessagesLiveQueriesSlots = t.userMessagesQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.userMessagesQueriesSlots = { getVisibleUserMessages: (0, r.slot)(), getUserMessages: (0, r.slot)() }),
          (t.userMessagesLiveQueriesSlots = { liveUserMessages: (0, o.liveSlot)(), liveVisibleUserMessages: (0, o.liveSlot)() }),
          (t.userMessagesCommandsSlots = { dismissUserMessages: (0, r.slot)(), addUserMessage: (0, r.slot)() });
      },
      7970: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4012), t), o(s(3468), t);
      },
      4012: (e, t) => {
        "use strict";
        var s, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VpnDisabledReason = t.VpnAccountActivationErrorType = t.VpnAccountStatusType = void 0),
          ((o = t.VpnAccountStatusType || (t.VpnAccountStatusType = {})).Activated = "Activated"),
          (o.Activating = "Activating"),
          (o.Error = "Error"),
          (o.NotFound = "NotFound"),
          (o.Ready = "Ready"),
          ((r = t.VpnAccountActivationErrorType || (t.VpnAccountActivationErrorType = {})).ServerError = "ServerError"),
          (r.AccountAlreadyExistError = "AccountAlreadyExist"),
          ((s = t.VpnDisabledReason || (t.VpnDisabledReason = {})).InTeam = "InTeam"),
          (s.NotPremium = "NotPremium"),
          (s.NoPayment = "NoPayment"),
          (s.Other = "Other");
      },
      3468: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.vpnCommandsSlots = t.vpnLiveQueriesSlots = t.vpnQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.vpnQueriesSlots = { getVpnAccount: (0, r.slot)(), getVpnCapabilitySetting: (0, r.slot)() }),
          (t.vpnLiveQueriesSlots = { liveVpnAccount: (0, o.liveSlot)() }),
          (t.vpnCommandsSlots = {
            activateVpnAccount: (0, r.slot)(),
            clearVpnAccountErrors: (0, r.slot)(),
            completeVpnAccountActivation: (0, r.slot)()
          });
      },
      8522: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = s(693),
          o = s(6110),
          n = s(2341),
          i = s(700),
          a = s(2136),
          c = s(6520),
          l = s(3361),
          u = s(7567),
          d = s(4213);
        r.taskTrackingApi,
          o.activityLogsApi,
          n.vaultItemsCrudApi,
          l.AuthenticationFlowContracts.authenticationFlowApi,
          l.DeviceTransferContracts.deviceTransferApi,
          u.sessionApi,
          d.masterPasswordSecurityApi,
          a.passwordHealthApi,
          c.carbonLegacyApi,
          u.changeMasterPasswordApi,
          i.sharingCollectionsApi,
          i.sharingInvitesApi,
          n.vaultOrganizationApi,
          r.featureFlipsApi;
      },
      6520: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.carbonLegacyApi = void 0);
        const r = s(693),
          o = s(6530),
          n = s(8652),
          i = s(2299);
        t.carbonLegacyApi = (0, r.defineModuleApi)({ name: "carbon-legacy", commands: o.commands, queries: i.queries, events: n.events });
      },
      6402: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CarbonLegacyClient = void 0);
        const r = s(693),
          o = s(6520);
        class n extends (0, r.defineModuleClient)(o.carbonLegacyApi) {}
        (t.CarbonLegacyClient = n), (0, r.registerModuleClient)(o.carbonLegacyApi, n);
      },
      6530: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.commands =
            t.commandsFromCarbonAPI =
            t.MitigationDeleteGrapheneUserDataCommand =
            t.CarbonLegacyLeelooCommand =
            t.CarbonCommand =
              void 0);
        const r = s(693),
          o = s(5195),
          n = s(1155);
        class i extends (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device }) {}
        t.CarbonCommand = i;
        class a extends (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device }) {}
        t.CarbonLegacyLeelooCommand = a;
        class c extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
        (t.MitigationDeleteGrapheneUserDataCommand = c),
          (t.commandsFromCarbonAPI = (0, n.createCommandContractsFromConnector)(o.carbonCommandsSlots)),
          (t.commands = Object.assign(Object.assign({}, t.commandsFromCarbonAPI), {
            CarbonCommand: i,
            CarbonLegacyLeelooCommand: a,
            MitigationDeleteGrapheneUserDataCommand: c
          }));
      },
      8652: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.events = t.CarbonLegacyDeviceRemotelyDeleted = t.CarbonLegacyEvent = t.CarbonCommandResultEvent = void 0);
        const r = s(693);
        class o extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
        t.CarbonCommandResultEvent = o;
        class n extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
        t.CarbonLegacyEvent = n;
        class i extends (0, r.defineEvent)({ scope: r.UseCaseScope.Device }) {}
        (t.CarbonLegacyDeviceRemotelyDeleted = i),
          (t.events = { CarbonCommandResultEvent: o, CarbonLegacyEvent: n, CarbonLegacyDeviceRemotelyDeleted: i });
      },
      2299: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.queries = t.queriesFromCarbonAPI = t.CarbonStateListQuery = t.CarbonStateQuery = void 0);
        const r = s(693),
          o = s(5195),
          n = s(1155);
        class i extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
        t.CarbonStateQuery = i;
        class a extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
        (t.CarbonStateListQuery = a),
          (t.queriesFromCarbonAPI = (0, n.createQueryContractsFromConnectors)(o.carbonQueriesSlots, o.carbonLiveQueriesSlots)),
          (t.queries = Object.assign(Object.assign({}, t.queriesFromCarbonAPI), { CarbonStateQuery: i, CarbonStateListQuery: a }));
      },
      7453: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(2299), t),
          o(s(8652), t),
          o(s(6530), t),
          o(s(5278), t),
          o(s(6520), t),
          o(s(6402), t);
      },
      1155: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createQueryContractsFromConnectors = t.createCommandContractsFromConnector = void 0);
        const r = s(693);
        (t.createCommandContractsFromConnector = function (e) {
          return Object.keys(e).reduce(
            (e, t) =>
              Object.assign(Object.assign({}, e), {
                [`${t[0].toUpperCase().concat(t.substring(1))}Command`]: (0, r.defineCarbonCommand)({ scope: r.UseCaseScope.Device })
              }),
            {}
          );
        }),
          (t.createQueryContractsFromConnectors = function (e, t) {
            return [...Object.keys(e), ...Object.keys(t)].reduce(
              (e, t) =>
                Object.assign(Object.assign({}, e), {
                  [`${t[0].toUpperCase().concat(t.substring(1))}Query`]: (0, r.defineQuery)({ scope: r.UseCaseScope.Device })
                }),
              {}
            );
          });
      },
      5278: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LEGACY_CARBON_LEELOO_USED_COMMANDS = void 0),
          (t.LEGACY_CARBON_LEELOO_USED_COMMANDS = [
            "lockSession",
            "closeSession",
            "cancelDashlaneAuthenticatorRegistration",
            "openSession",
            "openSessionWithMasterPassword",
            "openSessionWithDashlaneAuthenticator",
            "openSessionWithExtraDeviceToken",
            "openSessionWithOTP",
            "openSessionWithOTPForNewDevice",
            "openSessionWithToken",
            "openSessionResendToken",
            "removePersonalDataItem",
            "savePersonalDataItem",
            "sessionForceSync"
          ]);
      },
      6075: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.bankAccountCommandsSlots = t.bankAccountLiveQueriesSlots = t.bankAccountQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.bankAccountQueriesSlots = { getBankAccount: (0, r.slot)(), getBankAccounts: (0, r.slot)() }),
          (t.bankAccountLiveQueriesSlots = { liveBankAccount: (0, o.liveSlot)(), liveBankAccounts: (0, o.liveSlot)() }),
          (t.bankAccountCommandsSlots = {
            addBankAccount: (0, r.slot)(),
            updateBankAccount: (0, r.slot)(),
            deleteBankAccount: (0, r.slot)()
          });
      },
      2458: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6075), t), o(s(2101), t);
      },
      2101: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UpdateBankAccountResultErrorCode = t.AddBankAccountResultErrorCode = t.DeleteBankAccountErrorCode = void 0),
          ((s = t.DeleteBankAccountErrorCode || (t.DeleteBankAccountErrorCode = {}))[(s.NOT_AUTHORIZED = 0)] = "NOT_AUTHORIZED"),
          (s[(s.NOT_FOUND = 1)] = "NOT_FOUND"),
          (s[(s.INTERNAL_ERROR = 2)] = "INTERNAL_ERROR"),
          ((t.AddBankAccountResultErrorCode || (t.AddBankAccountResultErrorCode = {})).EMPTY_BIC_AND_IBAN = "EMPTY_BIC_AND_IBAN"),
          ((t.UpdateBankAccountResultErrorCode || (t.UpdateBankAccountResultErrorCode = {})).EMPTY_BIC_AND_IBAN = "EMPTY_BIC_AND_IBAN");
      },
      1153: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.breachesCommandsSlots = t.breachesLiveQueriesSlots = t.breachesQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.breachesQueriesSlots = {
          getBreach: (0, r.slot)(),
          getBreaches: (0, r.slot)(),
          getBreachesPage: (0, r.slot)(),
          getBreachesPaginationToken: (0, r.slot)(),
          getBreachesUpdateStatus: (0, r.slot)()
        }),
          (t.breachesLiveQueriesSlots = {
            liveBreach: (0, o.liveSlot)(),
            liveBreaches: (0, o.liveSlot)(),
            liveBreachesBatch: (0, o.liveSlot)(),
            liveBreachesUpdaterStatus: (0, o.liveSlot)()
          }),
          (t.breachesCommandsSlots = { updateBreachStatus: (0, r.slot)() });
      },
      79: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1153), t), o(s(3949), t);
      },
      3949: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BreachesUpdaterStatus = t.BreachLeakedDataType = void 0),
          ((r = t.BreachLeakedDataType || (t.BreachLeakedDataType = {})).Username = "username"),
          (r.Password = "password"),
          (r.Email = "email"),
          (r.CreditCard = "creditcard"),
          (r.Phone = "phone"),
          (r.Address = "address"),
          (r.SSN = "ssn"),
          (r.IP = "ip"),
          (r.Location = "geolocation"),
          (r.PersonalInfo = "personalinfo"),
          (r.SocialNetwork = "social"),
          ((s = t.BreachesUpdaterStatus || (t.BreachesUpdaterStatus = {})).UNKNOWN = "unknown"),
          (s.SYNCING = "syncing"),
          (s.SKIPPED = "skipped"),
          (s.UNCHANGED = "unchanged"),
          (s.UPDATED = "updated"),
          (s.ERROR = "error");
      },
      3513: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.collectionsCommandsSlots = void 0);
        const r = s(1796);
        t.collectionsCommandsSlots = {
          addCollection: (0, r.slot)(),
          deleteCollection: (0, r.slot)(),
          removeItemsFromCollections: (0, r.slot)(),
          updateCollection: (0, r.slot)()
        };
      },
      5813: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3513), t), o(s(6238), t);
      },
      6238: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8979: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1060), t), o(s(1827), t);
      },
      1060: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.credentialsLiveQueriesSlots = t.credentialsQueriesSlots = t.credentialsCommandsSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.credentialsCommandsSlots = {
          addCredential: (0, r.slot)(),
          deleteCredential: (0, r.slot)(),
          deleteCredentialsInBulk: (0, r.slot)(),
          updateCredential: (0, r.slot)(),
          updateLinkedWebsites: (0, r.slot)()
        }),
          (t.credentialsQueriesSlots = {
            canUserAddNewCredential: (0, r.slot)(),
            getCredential: (0, r.slot)(),
            getCredentialCategories: (0, r.slot)(),
            getCredentials: (0, r.slot)(),
            getCredentialsByDomain: (0, r.slot)(),
            getCredentialsCount: (0, r.slot)(),
            getCredentialLimitStatus: (0, r.slot)(),
            getCredentialsPage: (0, r.slot)(),
            getCredentialsPaginationToken: (0, r.slot)(),
            getDashlaneDefinedLinkedWebsites: (0, r.slot)(),
            getShouldShowRequireMasterPassword: (0, r.slot)()
          }),
          (t.credentialsLiveQueriesSlots = {
            liveCanUserAddNewCredential: (0, o.liveSlot)(),
            liveCredential: (0, o.liveSlot)(),
            liveCredentials: (0, o.liveSlot)(),
            liveCredentialsByDomain: (0, o.liveSlot)(),
            liveCredentialsBatch: (0, o.liveSlot)(),
            liveCredentialsCount: (0, o.liveSlot)(),
            liveCredentialLimitStatus: (0, o.liveSlot)()
          });
      },
      1827: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CredentialLimitStatus = void 0),
          ((s = t.CredentialLimitStatus || (t.CredentialLimitStatus = {})).Unlimited = "unlimited"),
          (s.UnderLimit = "underLimit"),
          (s.NearLimit = "nearLimit"),
          (s.AtOrAboveLimit = "atOrAboveLimit");
      },
      8806: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.exportCommandsSlots = t.exportQueriesSlots = void 0);
        const r = s(1796);
        (t.exportQueriesSlots = { getIsForcedDomainsEnabled: (0, r.slot)() }),
          (t.exportCommandsSlots = { getPersonalDataExport: (0, r.slot)() });
      },
      8887: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8806), t), o(s(4615), t);
      },
      4615: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GetPersonalDataExportErrorMessage = void 0),
          ((s = t.GetPersonalDataExportErrorMessage || (t.GetPersonalDataExportErrorMessage = {})).UNSUPPORTED_DATATYPE_ERROR =
            "Unsupported Data Export Type"),
          (s.UNDEFINED_PASSWORD_ERROR = "Undefined Password");
      },
      575: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generatedPasswordsCommandsSlots = t.generatedPasswordsLiveQueriesSlots = t.generatedPasswordsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.generatedPasswordsQueriesSlots = {
          getGeneratedPassword: (0, r.slot)(),
          getGeneratedPasswordsCount: (0, r.slot)(),
          getGeneratedPasswords: (0, r.slot)(),
          getGeneratedPasswordsPage: (0, r.slot)(),
          getGeneratedPasswordsPaginationToken: (0, r.slot)()
        }),
          (t.generatedPasswordsLiveQueriesSlots = {
            liveGeneratedPasswordsCount: (0, o.liveSlot)(),
            liveGeneratedPasswords: (0, o.liveSlot)()
          }),
          (t.generatedPasswordsCommandsSlots = { saveGeneratedPassword: (0, r.slot)() });
      },
      4842: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(575), t), o(s(9282), t);
      },
      9282: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8359: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.driverLicensesCommandsSlots = t.driverLicensesLiveQueriesSlots = t.driverLicensesQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.driverLicensesQueriesSlots = { getDriverLicense: (0, r.slot)(), getDriverLicenses: (0, r.slot)() }),
          (t.driverLicensesLiveQueriesSlots = { liveDriverLicense: (0, o.liveSlot)(), liveDriverLicenses: (0, o.liveSlot)() }),
          (t.driverLicensesCommandsSlots = {
            addDriverLicense: (0, r.slot)(),
            editDriverLicense: (0, r.slot)(),
            deleteDriverLicense: (0, r.slot)()
          });
      },
      9032: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8359), t), o(s(6896), t);
      },
      6896: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5260: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fiscalsIdCommandsSlots = t.fiscalIdsLiveQueriesSlots = t.fiscalIdsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.fiscalIdsQueriesSlots = { getFiscalId: (0, r.slot)(), getFiscalIds: (0, r.slot)() }),
          (t.fiscalIdsLiveQueriesSlots = { liveFiscalId: (0, o.liveSlot)(), liveFiscalIds: (0, o.liveSlot)() }),
          (t.fiscalsIdCommandsSlots = { addFiscalId: (0, r.slot)(), editFiscalId: (0, r.slot)(), deleteFiscalId: (0, r.slot)() });
      },
      9524: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5260), t), o(s(7659), t);
      },
      7659: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      8014: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.idCardsCommandsSlots = t.idCardsLiveQueriesSlots = t.idCardsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.idCardsQueriesSlots = { getIdCard: (0, r.slot)(), getIdCards: (0, r.slot)() }),
          (t.idCardsLiveQueriesSlots = { liveIdCard: (0, o.liveSlot)(), liveIdCards: (0, o.liveSlot)() }),
          (t.idCardsCommandsSlots = { addIdCard: (0, r.slot)(), editIdCard: (0, r.slot)(), deleteIdCard: (0, r.slot)() });
      },
      1609: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8014), t), o(s(1255), t);
      },
      1255: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1835: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(6128), t),
          o(s(9032), t),
          o(s(9524), t),
          o(s(1609), t),
          o(s(6118), t),
          o(s(310), t),
          o(s(7217), t);
      },
      6118: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1063), t), o(s(8876), t);
      },
      1063: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.passportsCommandsSlots = t.passportsLiveQueriesSlots = t.passportsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.passportsQueriesSlots = { getPassport: (0, r.slot)(), getPassports: (0, r.slot)() }),
          (t.passportsLiveQueriesSlots = { livePassport: (0, o.liveSlot)(), livePassports: (0, o.liveSlot)() }),
          (t.passportsCommandsSlots = { addPassport: (0, r.slot)(), editPassport: (0, r.slot)(), deletePassport: (0, r.slot)() });
      },
      8876: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6128: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.idsCommandsSlots = t.idsLiveQueriesSlots = t.idsQueriesSlots = void 0);
        const r = s(1796),
          o = s(9032),
          n = s(5260),
          i = s(1609),
          a = s(6118),
          c = s(310);
        (t.idsQueriesSlots = (0, r.combineEvents)(
          o.driverLicensesQueriesSlots,
          n.fiscalIdsQueriesSlots,
          i.idCardsQueriesSlots,
          a.passportsQueriesSlots,
          c.socialSecurityIdsQueriesSlots
        )),
          (t.idsLiveQueriesSlots = (0, r.combineEvents)(
            o.driverLicensesLiveQueriesSlots,
            n.fiscalIdsLiveQueriesSlots,
            i.idCardsLiveQueriesSlots,
            a.passportsLiveQueriesSlots,
            c.socialSecurityIdsLiveQueriesSlots
          )),
          (t.idsCommandsSlots = (0, r.combineEvents)(
            o.driverLicensesCommandsSlots,
            n.fiscalsIdCommandsSlots,
            i.idCardsCommandsSlots,
            a.passportsCommandsSlots,
            c.socialSecurityIdsCommandsSlots
          ));
      },
      310: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5078), t), o(s(9003), t);
      },
      5078: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.socialSecurityIdsCommandsSlots = t.socialSecurityIdsLiveQueriesSlots = t.socialSecurityIdsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.socialSecurityIdsQueriesSlots = { getSocialSecurityId: (0, r.slot)(), getSocialSecurityIds: (0, r.slot)() }),
          (t.socialSecurityIdsLiveQueriesSlots = { liveSocialSecurityId: (0, o.liveSlot)(), liveSocialSecurityIds: (0, o.liveSlot)() }),
          (t.socialSecurityIdsCommandsSlots = {
            addSocialSecurityId: (0, r.slot)(),
            editSocialSecurityId: (0, r.slot)(),
            deleteSocialSecurityId: (0, r.slot)()
          });
      },
      9003: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7217: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UpdateIdResultErrorCode = t.AddIdResultErrorCode = t.IdErrorCode = void 0),
          ((s = t.IdErrorCode || (t.IdErrorCode = {})).INTERNAL_ERROR = "INTERNAL_ERROR"),
          (s.NOT_AUTHENTICATED = "NOT_AUTHENTICATED"),
          (s.NOT_FOUND = "NOT_FOUND"),
          ((t.AddIdResultErrorCode || (t.AddIdResultErrorCode = {})).MISSING_ID_NUMBER = "MISSING_ID_NUMBER"),
          ((t.UpdateIdResultErrorCode || (t.UpdateIdResultErrorCode = {})).MISSING_ID_NUMBER = "MISSING_ID_NUMBER");
      },
      3088: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.importCommandsSlots = t.importLiveQueriesSlots = t.importQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.importQueriesSlots = { getImportPersonalDataStatus: (0, r.slot)() }),
          (t.importLiveQueriesSlots = { liveImportPersonalDataStatus: (0, o.liveSlot)() }),
          (t.importCommandsSlots = {
            importPersonalData: (0, r.slot)(),
            previewPersonalData: (0, r.slot)(),
            dismissPersonalDataImportNotifications: (0, r.slot)()
          });
      },
      1186: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(3088), t), o(s(3606), t);
      },
      3606: (e, t) => {
        "use strict";
        var s, r, o, n, i, a;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PreviewPersonalDataErrorType =
            t.ImportPersonalDataStateType =
            t.ImportPersonalDataErrorType =
            t.ImportFormats =
            t.ImportSource =
            t.SupportedVaultTypes =
              void 0),
          ((a = t.SupportedVaultTypes || (t.SupportedVaultTypes = {})).CREDENTIAL = "credentials"),
          (a.NOTE = "notes"),
          (a.PAYMENT_CARD = "paymentCards"),
          (a.BANK_ACCOUNT = "bankAccounts"),
          (a.COLLECTION = "collections"),
          ((i = t.ImportSource || (t.ImportSource = {}))["1Password"] = "1password"),
          (i.Bitwarden = "bitwarden"),
          (i.Chrome = "chrome"),
          (i.Dash = "dash"),
          (i.Edge = "edge"),
          (i.Firefox = "firefox"),
          (i.Keepass = "keepass"),
          (i.Keeper = "keeper"),
          (i.Lastpass = "lastpass"),
          (i.Other = "other"),
          (i.Safari = "safari"),
          ((n = t.ImportFormats || (t.ImportFormats = {})).Csv = "csv"),
          (n.Dash = "dash"),
          ((o = t.ImportPersonalDataErrorType || (t.ImportPersonalDataErrorType = {})).Unavailable = "unavailable"),
          (o.Unknown = "unknown"),
          ((r = t.ImportPersonalDataStateType || (t.ImportPersonalDataStateType = {})).Idle = "idle"),
          (r.Processing = "processing"),
          (r.Success = "success"),
          (r.Error = "error"),
          ((s = t.PreviewPersonalDataErrorType || (t.PreviewPersonalDataErrorType = {})).BadPassword = "bad_password"),
          (s.Unavailable = "unavailable"),
          (s.InvalidFormat = "invalid"),
          (s.Unknown = "unknown");
      },
      4707: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(460), t),
          o(s(3664), t),
          o(s(154), t),
          o(s(2458), t),
          o(s(79), t),
          o(s(5813), t),
          o(s(8979), t),
          o(s(8887), t),
          o(s(1835), t),
          o(s(1186), t),
          o(s(7722), t),
          o(s(610), t),
          o(s(4483), t),
          o(s(1101), t),
          o(s(1176), t),
          o(s(7959), t),
          o(s(1655), t),
          o(s(2617), t),
          o(s(7767), t),
          o(s(1809), t),
          o(s(4842), t),
          o(s(7028), t);
      },
      7722: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5264), t);
      },
      5264: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UpdateLinkedWebsitesError = void 0),
          ((t.UpdateLinkedWebsitesError || (t.UpdateLinkedWebsitesError = {})).CredentialUpdateError = "credentialUpdateError");
      },
      2617: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(827), t), o(s(3187), t);
      },
      827: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.passkeyCommandsSlots = t.passkeyLiveQueriesSlots = t.passkeyQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.passkeyQueriesSlots = { getPasskey: (0, r.slot)(), getPasskeys: (0, r.slot)(), getPasskeysForDomain: (0, r.slot)() }),
          (t.passkeyLiveQueriesSlots = { livePasskey: (0, o.liveSlot)(), livePasskeys: (0, o.liveSlot)() }),
          (t.passkeyCommandsSlots = { addPasskey: (0, r.slot)(), updatePasskey: (0, r.slot)(), deletePasskey: (0, r.slot)() });
      },
      3187: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeletePasskeyErrorCode = void 0),
          ((s = t.DeletePasskeyErrorCode || (t.DeletePasskeyErrorCode = {}))[(s.NOT_AUTHORIZED = 0)] = "NOT_AUTHORIZED"),
          (s[(s.NOT_FOUND = 1)] = "NOT_FOUND"),
          (s[(s.INTERNAL_ERROR = 2)] = "INTERNAL_ERROR");
      },
      7767: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(771), t), o(s(5417), t);
      },
      771: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordHistoryLiveQueriesSlots = t.passwordHistoryQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.passwordHistoryQueriesSlots = {
          getPasswordHistory: (0, r.slot)(),
          getHasPasswordHistory: (0, r.slot)(),
          getPasswordHistoryPage: (0, r.slot)(),
          getPasswordHistoryPaginationToken: (0, r.slot)()
        }),
          (t.passwordHistoryLiveQueriesSlots = { livePasswordHistory: (0, o.liveSlot)(), livePasswordHistoryBatch: (0, o.liveSlot)() });
      },
      5417: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PasswordHistoryItemType = void 0),
          ((s = t.PasswordHistoryItemType || (t.PasswordHistoryItemType = {})).Credential = "credential"),
          (s.Generated = "generated");
      },
      1809: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(5549), t), o(s(9691), t);
      },
      5549: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.paymentCardCommandsSlots = t.paymentCardLiveQueriesSlots = t.paymentCardQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.paymentCardQueriesSlots = { getPaymentCard: (0, r.slot)(), getPaymentCards: (0, r.slot)() }),
          (t.paymentCardLiveQueriesSlots = { livePaymentCard: (0, o.liveSlot)(), livePaymentCards: (0, o.liveSlot)() }),
          (t.paymentCardCommandsSlots = {
            addPaymentCard: (0, r.slot)(),
            updatePaymentCard: (0, r.slot)(),
            deletePaymentCard: (0, r.slot)()
          });
      },
      9691: (e, t) => {
        "use strict";
        var s, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeletePaymentCardErrorCode = t.PaymentCardSaveResultErrorCode = void 0),
          ((r = t.PaymentCardSaveResultErrorCode || (t.PaymentCardSaveResultErrorCode = {})).EMPTY_CARD_NUMBER_AND_SECURITY_CODE =
            "EMPTY_CARD_NUMBER_AND_SECURITY_CODE"),
          (r.NOT_FOUND = "NOT_FOUND"),
          ((s = t.DeletePaymentCardErrorCode || (t.DeletePaymentCardErrorCode = {})).NOT_AUTHORIZED = "NOT_AUTHORIZED"),
          (s.NOT_FOUND = "NOT_FOUND"),
          (s.INTERNAL_ERROR = "INTERNAL_ERROR");
      },
      8504: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.addressLiveQueriesSlots = t.addressQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.addressQueriesSlots = { getAddresses: (0, r.slot)(), getAddress: (0, r.slot)() }),
          (t.addressLiveQueriesSlots = { liveAddress: (0, o.liveSlot)(), liveAddresses: (0, o.liveSlot)() });
      },
      3287: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(8504), t), o(s(3207), t);
      },
      3207: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2826: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.companyLiveQueriesSlots = t.companyQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.companyQueriesSlots = { getCompanies: (0, r.slot)(), getCompany: (0, r.slot)() }),
          (t.companyLiveQueriesSlots = { liveCompanies: (0, o.liveSlot)(), liveCompany: (0, o.liveSlot)() });
      },
      4898: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(2826), t), o(s(7595), t);
      },
      7595: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4951: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.emailLiveQueriesSlots = t.emailQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.emailQueriesSlots = { getEmail: (0, r.slot)(), getEmails: (0, r.slot)() }),
          (t.emailLiveQueriesSlots = { liveEmail: (0, o.liveSlot)(), liveEmails: (0, o.liveSlot)() });
      },
      1182: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4951), t), o(s(1269), t);
      },
      1269: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9422: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.identityLiveQueriesSlots = t.identityQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.identityQueriesSlots = { getIdentities: (0, r.slot)(), getIdentitiesCount: (0, r.slot)(), getIdentity: (0, r.slot)() }),
          (t.identityLiveQueriesSlots = {
            liveIdentities: (0, o.liveSlot)(),
            liveIdentitiesCount: (0, o.liveSlot)(),
            liveIdentity: (0, o.liveSlot)()
          });
      },
      5170: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9422), t), o(s(8761), t);
      },
      8761: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      154: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(3287), t),
          o(s(4898), t),
          o(s(1182), t),
          o(s(5170), t),
          o(s(4306), t),
          o(s(1250), t),
          o(s(4100), t);
      },
      1250: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4148), t), o(s(1277), t);
      },
      1277: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.phoneLiveQueriesSlots = t.phoneQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.phoneQueriesSlots = { getPhone: (0, r.slot)(), getPhones: (0, r.slot)() }),
          (t.phoneLiveQueriesSlots = { livePhone: (0, o.liveSlot)(), livePhones: (0, o.liveSlot)() });
      },
      4148: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4100: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.personalInfoLiveQueriesSlots = t.personalInfoQueriesSlots = void 0);
        const r = s(1796),
          o = s(3287),
          n = s(4898),
          i = s(1182),
          a = s(5170),
          c = s(1250),
          l = s(4306);
        (t.personalInfoQueriesSlots = (0, r.combineEvents)(
          o.addressQueriesSlots,
          n.companyQueriesSlots,
          i.emailQueriesSlots,
          a.identityQueriesSlots,
          c.phoneQueriesSlots,
          l.websiteQueriesSlots
        )),
          (t.personalInfoLiveQueriesSlots = (0, r.combineEvents)(
            o.addressLiveQueriesSlots,
            n.companyLiveQueriesSlots,
            i.emailLiveQueriesSlots,
            a.identityLiveQueriesSlots,
            c.phoneLiveQueriesSlots,
            l.websiteLiveQueriesSlots
          ));
      },
      4306: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6346), t), o(s(9434), t);
      },
      6346: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9434: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.websiteLiveQueriesSlots = t.websiteQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.websiteQueriesSlots = { getPersonalWebsite: (0, r.slot)(), getPersonalWebsites: (0, r.slot)() }),
          (t.websiteLiveQueriesSlots = { livePersonalWebsite: (0, o.liveSlot)(), livePersonalWebsites: (0, o.liveSlot)() });
      },
      610: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(7667), t), o(s(5003), t);
      },
      7667: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.secretCommandsSlots = t.secretLiveQueriesSlots = t.secretQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.secretQueriesSlots = {
          getSecret: (0, r.slot)(),
          getSecrets: (0, r.slot)(),
          getSecretsCount: (0, r.slot)(),
          getSecretsPage: (0, r.slot)(),
          getSecretsPaginationToken: (0, r.slot)()
        }),
          (t.secretLiveQueriesSlots = {
            liveSecret: (0, o.liveSlot)(),
            liveSecrets: (0, o.liveSlot)(),
            liveSecretsBatch: (0, o.liveSlot)(),
            liveSecretsCount: (0, o.liveSlot)()
          }),
          (t.secretCommandsSlots = { addSecret: (0, r.slot)(), updateSecret: (0, r.slot)(), deleteSecret: (0, r.slot)() });
      },
      5003: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeleteSecretErrorCode = t.SecretSaveResultErrorCode = void 0),
          ((t.SecretSaveResultErrorCode || (t.SecretSaveResultErrorCode = {})).NOT_FOUND = "NOT_FOUND"),
          ((s = t.DeleteSecretErrorCode || (t.DeleteSecretErrorCode = {})).NOT_FOUND = "NOT_FOUND"),
          (s.INTERNAL_ERROR = "INTERNAL_ERROR"),
          (s.LEAVE_SHARING_FAILED = "LEAVE_SHARING_FAILED"),
          (s.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN = "LEAVE_SHARING_FORBIDDEN_LAST_ADMIN"),
          (s.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM = "LEAVE_SHARING_FORBIDDEN_GROUP_ITEM");
      },
      4483: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(7606), t), o(s(5252), t);
      },
      7606: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.secureFilesCommandsSlots = t.secureFilesLiveQueriesSlots = t.secureFilesQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.secureFilesQueriesSlots = {
          getSecureFilesQuota: (0, r.slot)(),
          getSecureFilesInfoList: (0, r.slot)(),
          getFileDownloadProgress: (0, r.slot)(),
          getFileUploadProgress: (0, r.slot)()
        }),
          (t.secureFilesLiveQueriesSlots = {
            liveSecureFilesQuota: (0, o.liveSlot)(),
            liveFileDownloadProgress: (0, o.liveSlot)(),
            liveFileUploadProgress: (0, o.liveSlot)()
          }),
          (t.secureFilesCommandsSlots = {
            downloadSecureFile: (0, r.slot)(),
            chunkTransferDone: (0, r.slot)(),
            deleteSecureFile: (0, r.slot)(),
            addSecureFile: (0, r.slot)(),
            validateSecureFile: (0, r.slot)(),
            commitSecureFile: (0, r.slot)(),
            initSecureFilesStorageInfo: (0, r.slot)(),
            clearSecureFileState: (0, r.slot)()
          });
      },
      5252: (e, t) => {
        "use strict";
        var s, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FileUploadStatus = t.FileDownloadStatus = t.SecureFileResultErrorCode = void 0),
          ((o = t.SecureFileResultErrorCode || (t.SecureFileResultErrorCode = {})).MAX_CONTENT_LENGTH_EXCEEDED =
            "MAX_CONTENT_LENGTH_EXCEEDED"),
          (o.QUOTA_EXCEEDED = "QUOTA_EXCEEDED"),
          (o.INVALID_FILE_TYPE = "INVALID_FILE_TYPE"),
          (o.INTERNAL_ERROR = "INTERNAL_ERROR"),
          (o.SERVER_ERROR = "SERVER_ERROR"),
          (o.FILE_NOT_FOUND = "FILE_NOT_FOUND"),
          ((r = t.FileDownloadStatus || (t.FileDownloadStatus = {})).Initial = "Initial"),
          (r.Downloading = "Downloading"),
          (r.Deciphering = "Deciphering"),
          (r.Error = "Error"),
          (r.ChunkReady = "ChunkReady"),
          (r.ChunkDownloaded = "ChunkDownloaded"),
          (r.TransferComplete = "TransferComplete"),
          ((s = t.FileUploadStatus || (t.FileUploadStatus = {})).None = "None"),
          (s.Initial = "Initial"),
          (s.Uploading = "Uploading"),
          (s.Ciphering = "Ciphering"),
          (s.Done = "Done"),
          (s.Error = "Error");
      },
      1101: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(4240), t), o(s(766), t);
      },
      4240: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.secureNoteCategoryCommandsSlots = void 0);
        const r = s(1796);
        t.secureNoteCategoryCommandsSlots = { setupDefaultNoteCategories: (0, r.slot)() };
      },
      766: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1176: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(1670), t), o(s(1379), t);
      },
      1670: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.noteCommandsSlots = t.noteLiveQueriesSlots = t.noteQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.noteQueriesSlots = {
          getNote: (0, r.slot)(),
          getNoteCategories: (0, r.slot)(),
          getNotes: (0, r.slot)(),
          getNotesCount: (0, r.slot)(),
          getNotesPage: (0, r.slot)(),
          getNotesPaginationToken: (0, r.slot)()
        }),
          (t.noteLiveQueriesSlots = {
            liveNote: (0, o.liveSlot)(),
            liveNotes: (0, o.liveSlot)(),
            liveNotesBatch: (0, o.liveSlot)(),
            liveNotesCount: (0, o.liveSlot)()
          }),
          (t.noteCommandsSlots = { addSecureNote: (0, r.slot)(), updateSecureNote: (0, r.slot)(), deleteSecureNote: (0, r.slot)() });
      },
      1379: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeleteSecureNoteErrorCode = t.SecureNoteSaveResultErrorCode = void 0),
          ((t.SecureNoteSaveResultErrorCode || (t.SecureNoteSaveResultErrorCode = {})).NOT_FOUND = "NOT_FOUND"),
          ((s = t.DeleteSecureNoteErrorCode || (t.DeleteSecureNoteErrorCode = {})).NOT_FOUND = "NOT_FOUND"),
          (s.INTERNAL_ERROR = "INTERNAL_ERROR"),
          (s.LEAVE_SHARING_FAILED = "LEAVE_SHARING_FAILED"),
          (s.LEAVE_SHARING_FORBIDDEN_LAST_ADMIN = "LEAVE_SHARING_FORBIDDEN_LAST_ADMIN"),
          (s.LEAVE_SHARING_FORBIDDEN_GROUP_ITEM = "LEAVE_SHARING_FORBIDDEN_GROUP_ITEM");
      },
      7959: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(7515), t), o(s(4628), t);
      },
      7515: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.settingsCommandsSlots = t.settingsLiveQueriesSlots = t.settingsQueriesSlots = void 0);
        const r = s(1796),
          o = s(5195);
        (t.settingsQueriesSlots = {
          getAnonymousUserId: (0, r.slot)(),
          getIsUrlBanished: (0, r.slot)(),
          arePasswordsProtected: (0, r.slot)()
        }),
          (t.settingsLiveQueriesSlots = { liveArePasswordsProtected: (0, o.liveSlot)() }),
          (t.settingsCommandsSlots = {
            toggleDashlane: (0, r.slot)(),
            updateProtectPasswordsSetting: (0, r.slot)(),
            updateAutofillSettings: (0, r.slot)()
          });
      },
      4628: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      460: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.dataManagementCommandsSlots = t.dataManagementLiveQueriesSlots = t.dataManagementQueriesSlots = void 0);
        const r = s(1796),
          o = s(2458),
          n = s(79),
          i = s(5813),
          a = s(8979),
          c = s(8887),
          l = s(4842),
          u = s(1835),
          d = s(1186),
          p = s(2617),
          _ = s(7767),
          S = s(1809),
          v = s(154),
          m = s(4483),
          f = s(1101),
          E = s(1176),
          O = s(7959),
          h = s(1655),
          g = s(7028),
          y = s(610);
        (t.dataManagementQueriesSlots = (0, r.combineEvents)(
          o.bankAccountQueriesSlots,
          n.breachesQueriesSlots,
          a.credentialsQueriesSlots,
          c.exportQueriesSlots,
          l.generatedPasswordsQueriesSlots,
          u.idsQueriesSlots,
          d.importQueriesSlots,
          E.noteQueriesSlots,
          p.passkeyQueriesSlots,
          _.passwordHistoryQueriesSlots,
          S.paymentCardQueriesSlots,
          v.personalInfoQueriesSlots,
          y.secretQueriesSlots,
          m.secureFilesQueriesSlots,
          O.settingsQueriesSlots,
          h.spacesQueriesSlots,
          g.vaultQueriesSlots
        )),
          (t.dataManagementLiveQueriesSlots = (0, r.combineEvents)(
            o.bankAccountLiveQueriesSlots,
            n.breachesLiveQueriesSlots,
            a.credentialsLiveQueriesSlots,
            l.generatedPasswordsLiveQueriesSlots,
            u.idsLiveQueriesSlots,
            d.importLiveQueriesSlots,
            E.noteLiveQueriesSlots,
            p.passkeyLiveQueriesSlots,
            _.passwordHistoryLiveQueriesSlots,
            S.paymentCardLiveQueriesSlots,
            v.personalInfoLiveQueriesSlots,
            y.secretLiveQueriesSlots,
            m.secureFilesLiveQueriesSlots,
            O.settingsLiveQueriesSlots
          )),
          (t.dataManagementCommandsSlots = (0, r.combineEvents)(
            o.bankAccountCommandsSlots,
            n.breachesCommandsSlots,
            i.collectionsCommandsSlots,
            a.credentialsCommandsSlots,
            c.exportCommandsSlots,
            l.generatedPasswordsCommandsSlots,
            u.idsCommandsSlots,
            d.importCommandsSlots,
            E.noteCommandsSlots,
            p.passkeyCommandsSlots,
            S.paymentCardCommandsSlots,
            y.secretCommandsSlots,
            m.secureFilesCommandsSlots,
            f.secureNoteCategoryCommandsSlots,
            O.settingsCommandsSlots,
            g.vaultCommandsSlots
          ));
      },
      1655: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(711), t), o(s(1131), t);
      },
      711: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.spacesQueriesSlots = void 0);
        const r = s(1796);
        t.spacesQueriesSlots = { getSpace: (0, r.slot)(), getSpaces: (0, r.slot)() };
      },
      1131: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      3664: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7028: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(9092), t), o(s(8937), t);
      },
      9092: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.VaultItemDisableProtectionMode = void 0),
          ((s = t.VaultItemDisableProtectionMode || (t.VaultItemDisableProtectionMode = {}))[(s.CannotDisable = 0)] = "CannotDisable"),
          (s[(s.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
          (s[(s.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
      },
      8937: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultCommandsSlots = t.vaultQueriesSlots = void 0);
        const r = s(1796);
        (t.vaultQueriesSlots = { getAutofillProtectionContext: (0, r.slot)() }),
          (t.vaultCommandsSlots = { disableVaultItemProtection: (0, r.slot)() });
      },
      3576: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(5195), t),
          o(s(8616), t),
          o(s(5640), t),
          o(s(4503), t),
          o(s(3025), t),
          o(s(9158), t),
          o(s(4874), t),
          o(s(8300), t),
          o(s(3979), t),
          o(s(989), t),
          o(s(8209), t),
          o(s(9539), t),
          o(s(8244), t),
          o(s(9888), t),
          o(s(5861), t),
          o(s(7120), t),
          o(s(78), t),
          o(s(754), t),
          o(s(4707), t),
          o(s(6359), t),
          o(s(3254), t),
          o(s(953), t),
          o(s(1559), t),
          o(s(1738), t),
          o(s(2553), t),
          o(s(1812), t),
          o(s(7890), t),
          o(s(7124), t),
          o(s(170), t),
          o(s(1126), t),
          o(s(6210), t),
          o(s(9358), t),
          o(s(3919), t),
          o(s(4692), t),
          o(s(7341), t),
          o(s(4477), t),
          o(s(8690), t),
          o(s(7894), t),
          o(s(3263), t),
          o(s(7981), t),
          o(s(3448), t),
          o(s(7422), t),
          o(s(2607), t),
          o(s(4705), t),
          o(s(1804), t),
          o(s(793), t),
          o(s(553), t),
          o(s(7195), t),
          o(s(6648), t),
          o(s(6038), t),
          o(s(6913), t),
          o(s(2725), t),
          o(s(1072), t),
          o(s(6937), t),
          o(s(5169), t),
          o(s(3572), t),
          o(s(7970), t),
          o(s(7453), t),
          o(s(8522), t);
      },
      3361: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            AuthenticationFlowContracts: () => r,
            DeviceTransferContracts: () => n,
            IdentityVerificationFlowContracts: () => o,
            Request2FaCodesByPhoneCommand: () => me,
            Request2FaCodesByPhoneErrorCodes: () => Ee,
            ValidateWebauthnAssertionCommand: () => ve,
            userVerificationApi: () => fe
          });
        var r = {};
        s.r(r),
          s.d(r, {
            AuthenticationFlowClient: () => B,
            AuthenticationFlowStatusQuery: () => l,
            CancelDeviceTransferRequestCommand: () => w,
            ChangeAccountEmailCommand: () => S,
            ChangeTwoFactorAuthenticationOtpTypeCommand: () => O,
            ClearErrorCommand: () => A,
            DeviceToDeviceAuthenticationErrors: () => j,
            DeviceToDeviceAuthenticationFlowStep: () => F,
            GetSsoProviderInfoQuery: () => d,
            GetSsoUserSettingsQuery: () => u,
            InitiateAutologinWithSSOCommand: () => M,
            InitiateLoginWithSSOCommand: () => D,
            LockCommand: () => N,
            LoginViaSSOCommand: () => R,
            LogoutCommand: () => I,
            ResendEmailTokenCommand: () => h,
            ResendPushNotificationCommand: () => y,
            RetryWebAuthnAuthenticationCommand: () => T,
            SSOMigrationType: () => G,
            SendAccountEmailCommand: () => _,
            SendMasterPasswordCommand: () => g,
            SsoMigrationServerMethod: () => U,
            SubmitBackupCodeCommand: () => E,
            SubmitEmailTokenCommand: () => m,
            SubmitTotpCommand: () => f,
            SwitchToDashlaneAuthenticatorCommand: () => v,
            SwitchToEmailTokenCommand: () => b,
            UseMasterPasswordCommand: () => C,
            WebAuthnAuthenticationFailCommand: () => P,
            authenticationFlowApi: () => L,
            isDeviceToDeviceAuthenticationError: () => k
          });
        var o = {};
        s.r(o),
          s.d(o, {
            CancelIdentityVerificationCommand: () => $,
            ChangeTwoFactorAuthenticationOtpTypeCommand: () => K,
            ClearIdentityVerificationErrorCommand: () => Q,
            IdentityVerificationClient: () => re,
            IdentityVerificationCompletedEvent: () => te,
            IdentityVerificationFlowStatusQuery: () => W,
            ResendEmailTokenCommand: () => V,
            ResendPushNotificationCommand: () => H,
            StartIdentityVerificationCommand: () => J,
            SubmitBackupCodeCommand: () => Z,
            SubmitEmailTokenCommand: () => Y,
            SubmitTotpCommand: () => q,
            SwitchToDashlaneAuthenticatorCommand: () => z,
            SwitchToEmailTokenCommand: () => X,
            identityVerificationFlowApi: () => se
          });
        var n = {};
        s.r(n),
          s.d(n, {
            ApproveDeviceTransferRequestCommand: () => ae,
            CancelRequestCommand: () => ie,
            RefreshRequestCommand: () => ne,
            RejectDeviceTransferRequestCommand: () => ce,
            ReturnToDeviceSetupCommand: () => ue,
            SubmitPassphraseChallengeCommand: () => le,
            TrustedDeviceFlowError: () => Se,
            TrustedDeviceFlowErrors: () => pe,
            TrustedDeviceFlowStatusQuery: () => oe,
            TrustedDeviceFlowStep: () => _e,
            deviceTransferApi: () => de
          });
        var i = s(6952),
          a = s(9059),
          c = s(5029);
        class l extends (0, a.k)({ scope: c.F.Device }) {}
        class u extends (0, a.k)({ scope: c.F.Device }) {}
        class d extends (0, a.k)({ scope: c.F.Device }) {}
        var p = s(4354);
        class _ extends (0, p.g)({ scope: c.F.Device }) {}
        class S extends (0, p.g)({ scope: c.F.Device }) {}
        class v extends (0, p.g)({ scope: c.F.Device }) {}
        class m extends (0, p.g)({ scope: c.F.Device }) {}
        class f extends (0, p.g)({ scope: c.F.Device }) {}
        class E extends (0, p.g)({ scope: c.F.Device }) {}
        class O extends (0, p.g)({ scope: c.F.Device }) {}
        class h extends (0, p.g)({ scope: c.F.Device }) {}
        class g extends (0, p.g)({ scope: c.F.Device }) {}
        class y extends (0, p.g)({ scope: c.F.Device }) {}
        class b extends (0, p.g)({ scope: c.F.Device }) {}
        class A extends (0, p.g)({ scope: c.F.Device }) {}
        class T extends (0, p.g)({ scope: c.F.Device }) {}
        class C extends (0, p.g)({ scope: c.F.Device }) {}
        class P extends (0, p.g)({ scope: c.F.Device }) {}
        class I extends (0, p.g)({ scope: c.F.Device }) {}
        class N extends (0, p.g)({ scope: c.F.Device }) {}
        class R extends (0, p.g)({ scope: c.F.Device }) {}
        class D extends (0, p.g)({ scope: c.F.Device }) {}
        class M extends (0, p.g)({ scope: c.F.Device }) {}
        class w extends (0, p.g)({ scope: c.F.Device }) {}
        const L = (0, i.Q)({
          name: "authenticationFlow",
          commands: {
            changeLogin: S,
            changeTwoFactorAuthenticationOtpType: O,
            clearError: A,
            cancelDeviceTransferRequest: w,
            resendEmailToken: h,
            resendPushNotification: y,
            sendAccountEmail: _,
            sendMasterPassword: g,
            submitBackupCode: E,
            submitEmailToken: m,
            submitTotp: f,
            switchToDashlaneAuthenticator: v,
            switchToEmailToken: b,
            retryWebAuthnAuthentication: T,
            useMasterPassword: C,
            webAuthnAuthenticationFail: P,
            logout: I,
            lockSession: N,
            loginViaSSO: R,
            initiateLoginWithSSO: D,
            initiateAutologinWithSSOCommand: M
          },
          queries: { authenticationFlowStatus: l, getSsoUserSettings: u, getProviderInfo: d },
          events: {}
        });
        var U, F, j;
        !(function (e) {
          (e.SSO = "sso"), (e.MP = "master_password");
        })(U || (U = {})),
          (function (e) {
            (e.WaitingForTransferRequest = "WaitingForTransferRequest"),
              (e.DisplayInstructions = "DisplayInstructions"),
              (e.DisplayPassphrase = "DisplayPassphrase"),
              (e.Error = "Error"),
              (e.DeviceRegistered = "DeviceRegistered");
          })(F || (F = {})),
          (function (e) {
            (e.GENERIC_ERROR = "GENERIC_ERROR"),
              (e.TIMEOUT = "TIMEOUT"),
              (e.REQUEST_REJECTED = "REQUEST_REJECTED"),
              (e.ACCOUNT_ERROR = "ACCOUNT_ERROR"),
              (e.RATE_LIMIT = "RATE_LIMIT");
          })(j || (j = {}));
        const k = (e) => Object.values(j).includes(e);
        var G;
        !(function (e) {
          (e[(e.MP_TO_SSO = 0)] = "MP_TO_SSO"),
            (e[(e.MP_TO_SSO_WITH_INFO = 1)] = "MP_TO_SSO_WITH_INFO"),
            (e[(e.SSO_TO_MP = 2)] = "SSO_TO_MP");
        })(G || (G = {}));
        var x = s(7837);
        class B extends (0, x.E)(L) {}
        (0, x.K)(L, B);
        class W extends (0, a.k)({ scope: c.F.Device }) {}
        class K extends (0, p.g)({ scope: c.F.Device }) {}
        class Q extends (0, p.g)({ scope: c.F.Device }) {}
        class V extends (0, p.g)({ scope: c.F.Device }) {}
        class H extends (0, p.g)({ scope: c.F.Device }) {}
        class Y extends (0, p.g)({ scope: c.F.Device }) {}
        class Z extends (0, p.g)({ scope: c.F.Device }) {}
        class q extends (0, p.g)({ scope: c.F.Device }) {}
        class z extends (0, p.g)({ scope: c.F.Device }) {}
        class X extends (0, p.g)({ scope: c.F.Device }) {}
        class J extends (0, p.g)({ scope: c.F.Device }) {}
        class $ extends (0, p.g)({ scope: c.F.Device }) {}
        var ee = s(8885);
        class te extends (0, ee.d)({ scope: c.F.Device }) {}
        const se = (0, i.Q)({
          name: "identityVerificationFlow",
          commands: {
            changeTwoFactorAuthenticationOtpType: K,
            clearError: Q,
            resendEmailToken: V,
            resendPushNotification: H,
            submitBackupCode: Z,
            submitEmailToken: Y,
            submitTotp: q,
            switchToDashlaneAuthenticator: z,
            switchToEmailToken: X,
            startIdentityVerification: J,
            cancelIdentityVerification: $
          },
          queries: { identityVerificationFlowStatus: W },
          events: { identityVerificationCompleted: te }
        });
        class re extends (0, x.E)(se) {}
        (0, x.K)(se, re);
        class oe extends (0, a.k)({ scope: c.F.Device }) {}
        class ne extends (0, p.g)({ scope: c.F.User }) {}
        class ie extends (0, p.g)({ scope: c.F.User }) {}
        class ae extends (0, p.g)({ scope: c.F.User }) {}
        class ce extends (0, p.g)({ scope: c.F.User }) {}
        class le extends (0, p.g)({ scope: c.F.User }) {}
        class ue extends (0, p.g)({ scope: c.F.User }) {}
        const de = (0, i.Q)({
          name: "deviceTransfer",
          commands: {
            refreshRequest: ne,
            cancelRequest: ie,
            approveRequest: ae,
            rejectRequest: ce,
            submitPassphraseChallenge: le,
            returnToDeviceSetupCommand: ue
          },
          events: {},
          queries: { trustedDeviceFlowStatus: oe }
        });
        var pe, _e;
        !(function (e) {
          (e.GENERIC_ERROR = "GENERIC_ERROR"), (e.INVALID_PASSPHRASE = "INVALID_PASSPHRASE"), (e.TIMEOUT = "TIMEOUT");
        })(pe || (pe = {}));
        class Se extends Error {
          constructor(e, t) {
            super(e), (this.code = void 0), (this.code = t);
          }
        }
        !(function (e) {
          (e[(e.WaitingForNewDeviceRequest = 0)] = "WaitingForNewDeviceRequest"),
            (e[(e.NewDeviceRequestAvailable = 1)] = "NewDeviceRequestAvailable"),
            (e[(e.DisplayPassphraseChallenge = 2)] = "DisplayPassphraseChallenge"),
            (e[(e.DeviceTransferComplete = 3)] = "DeviceTransferComplete"),
            (e[(e.DeviceTransferRejected = 4)] = "DeviceTransferRejected"),
            (e[(e.Error = 5)] = "Error");
        })(_e || (_e = {}));
        class ve extends (0, p.g)({ scope: c.F.User }) {}
        class me extends (0, p.g)({ scope: c.F.Device }) {}
        const fe = (0, i.Q)({
          name: "userVerification",
          commands: { validateWebauthnAssertion: ve, request2FaCodesByPhone: me },
          queries: {},
          events: {}
        });
        var Ee;
        !(function (e) {
          (e.AccountNotEligible = "AccountNotEligible"), (e.NetworkError = "NetworkError");
        })(Ee || (Ee = {}));
      },
      896: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            AddDisabledSourceTypesCommand: () => U,
            AnalysisStatus: () => j,
            CREDENTIAL_DATA_MODELS: () => f,
            CountriesForAutofill: () => d,
            DisableAnalysisCommand: () => H,
            DisableAutofillOnFormsCommand: () => Z,
            DisableAutofillOnLoginsCommand: () => q,
            DisableAutologinCommand: () => Y,
            DisableFollowUpNotificationCommand: () => z,
            DisablePhishingPreventionForUrlCommand: () => D,
            EnableAnalysisCommand: () => B,
            EnableAutofillOnFormsCommand: () => K,
            EnableAutofillOnLoginsCommand: () => Q,
            EnableAutologinCommand: () => W,
            EnableFollowUpNotificationCommand: () => V,
            FORM_DATA_MODELS: () => m,
            GetAnalysisStatusOnUrlQuery: () => k,
            GetAutofillDisabledOnLoginsAndFormsNotificationStatusQuery: () => C,
            GetAutofillProtectionContextQuery: () => I,
            GetAutofillSettingsQuery: () => G,
            GetDashlaneDefinedLinkedWebsitesQuery: () => $,
            GetUserAutofillCorrectionsQuery: () => x,
            OtherSourceType: () => _,
            PasswordAutofillPerformedEvent: () => a,
            PhishingPreventionDisabledForUrlQuery: () => R,
            PhishingPreventionEnabledQuery: () => N,
            RemoveDisabledSourceTypesCommand: () => L,
            ResetProtectedItemAutofillTimerCommand: () => M,
            SetAutofillDisabledOnLoginsAndFormsNotificationStatusCommand: () => A,
            SetUserAutofillCorrectionsCommand: () => X,
            TemporaryEmitPasswordAutofillPerformedEventCommand: () => l,
            ToggleDashlaneCommand: () => F,
            UpdateLinkedWebsitesCommand: () => ee,
            VaultItemDisableProtectionMode: () => b,
            VaultSourceType: () => p,
            autofillDataApi: () => o,
            autofillNotificationsApi: () => P,
            autofillSecurityApi: () => w,
            autofillSettingsApi: () => J,
            autofillTrackingApi: () => u,
            isArrayOfAutofillableDataModel: () => h,
            isArrayOfUserAutofillCorrections: () => g,
            isAutofillableDataModel: () => O,
            isDashlaneDisabledPermanently: () => y,
            isOtherSourceType: () => S,
            isVaultSourceType: () => v,
            linkedWebsitesApi: () => te
          });
        var r = s(6952);
        const o = (0, r.Q)({ name: "autofillData", commands: {}, events: {}, queries: {} });
        var n = s(8885),
          i = s(5029);
        class a extends (0, n.d)({ scope: i.F.User }) {}
        var c = s(4354);
        class l extends (0, c.g)({ scope: i.F.User }) {}
        const u = (0, r.Q)({
            name: "autofillTracking",
            commands: { temporaryEmitPasswordAutofillPerformedEvent: l },
            events: { passwordAutofillPerformedEvent: a },
            queries: {}
          }),
          d = Object.freeze({
            NO_TYPE: "NO_TYPE",
            UNIVERSAL: "UNIVERSAL",
            AD: "AD",
            AE: "AE",
            AF: "AF",
            AG: "AG",
            AI: "AI",
            AL: "AL",
            AM: "AM",
            AO: "AO",
            AR: "AR",
            AS: "AS",
            AT: "AT",
            AU: "AU",
            AW: "AW",
            AZ: "AZ",
            BA: "BA",
            BB: "BB",
            BD: "BD",
            BE: "BE",
            BF: "BF",
            BG: "BG",
            BH: "BH",
            BI: "BI",
            BJ: "BJ",
            BL: "BL",
            BM: "BM",
            BN: "BN",
            BO: "BO",
            BR: "BR",
            BS: "BS",
            BT: "BT",
            BW: "BW",
            BY: "BY",
            BZ: "BZ",
            CA: "CA",
            CD: "CD",
            CF: "CF",
            CG: "CG",
            CH: "CH",
            CI: "CI",
            CK: "CK",
            CL: "CL",
            CM: "CM",
            CN: "CN",
            CO: "CO",
            CR: "CR",
            CU: "CU",
            CV: "CV",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DJ: "DJ",
            DK: "DK",
            DM: "DM",
            DO: "DO",
            DZ: "DZ",
            EC: "EC",
            EE: "EE",
            EG: "EG",
            ER: "ER",
            ES: "ES",
            ET: "ET",
            FI: "FI",
            FJ: "FJ",
            FK: "FK",
            FM: "FM",
            FO: "FO",
            FR: "FR",
            GA: "GA",
            GB: "GB",
            GD: "GD",
            GE: "GE",
            GF: "GF",
            GG: "GG",
            GH: "GH",
            GI: "GI",
            GL: "GL",
            GM: "GM",
            GN: "GN",
            GP: "GP",
            GQ: "GQ",
            GR: "GR",
            GT: "GT",
            GU: "GU",
            GW: "GW",
            GY: "GY",
            HK: "HK",
            HN: "HN",
            HR: "HR",
            HT: "HT",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IL: "IL",
            IM: "IM",
            IN: "IN",
            IO: "IO",
            IQ: "IQ",
            IR: "IR",
            IS: "IS",
            IT: "IT",
            JE: "JE",
            JM: "JM",
            JO: "JO",
            JP: "JP",
            KE: "KE",
            KG: "KG",
            KH: "KH",
            KI: "KI",
            KM: "KM",
            KN: "KN",
            KP: "KP",
            KR: "KR",
            KW: "KW",
            KY: "KY",
            KZ: "KZ",
            LA: "LA",
            LB: "LB",
            LC: "LC",
            LI: "LI",
            LK: "LK",
            LR: "LR",
            LS: "LS",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            LY: "LY",
            MA: "MA",
            MC: "MC",
            MD: "MD",
            ME: "ME",
            MF: "MF",
            MG: "MG",
            MH: "MH",
            MK: "MK",
            ML: "ML",
            MM: "MM",
            MN: "MN",
            MO: "MO",
            MP: "MP",
            MQ: "MQ",
            MR: "MR",
            MS: "MS",
            MT: "MT",
            MU: "MU",
            MV: "MV",
            MW: "MW",
            MX: "MX",
            MY: "MY",
            MZ: "MZ",
            NA: "NA",
            NC: "NC",
            NE: "NE",
            NF: "NF",
            NG: "NG",
            NI: "NI",
            NL: "NL",
            NO: "NO",
            NP: "NP",
            NR: "NR",
            NU: "NU",
            NZ: "NZ",
            OM: "OM",
            PA: "PA",
            PE: "PE",
            PF: "PF",
            PG: "PG",
            PH: "PH",
            PK: "PK",
            PL: "PL",
            PM: "PM",
            PR: "PR",
            PS: "PS",
            PT: "PT",
            PW: "PW",
            PY: "PY",
            QA: "QA",
            RE: "RE",
            RO: "RO",
            RS: "RS",
            RU: "RU",
            RW: "RW",
            SA: "SA",
            SB: "SB",
            SC: "SC",
            SD: "SD",
            SE: "SE",
            SG: "SG",
            SH: "SH",
            SI: "SI",
            SK: "SK",
            SL: "SL",
            SM: "SM",
            SN: "SN",
            SO: "SO",
            SR: "SR",
            ST: "ST",
            SV: "SV",
            SY: "SY",
            SZ: "SZ",
            TC: "TC",
            TD: "TD",
            TF: "TF",
            TG: "TG",
            TH: "TH",
            TJ: "TJ",
            TK: "TK",
            TL: "TL",
            TM: "TM",
            TN: "TN",
            TO: "TO",
            TR: "TR",
            TT: "TT",
            TV: "TV",
            TW: "TW",
            TZ: "TZ",
            UA: "UA",
            UG: "UG",
            US: "US",
            UY: "UY",
            UZ: "UZ",
            VA: "VA",
            VC: "VC",
            VE: "VE",
            VG: "VG",
            VI: "VI",
            VN: "VN",
            VU: "VU",
            WF: "WF",
            WS: "WS",
            XK: "XK",
            YE: "YE",
            YT: "YT",
            ZA: "ZA",
            ZM: "ZM",
            ZW: "ZW",
            AQ: "AQ",
            AX: "AX",
            BV: "BV",
            CC: "CC",
            CX: "CX",
            EH: "EH",
            GS: "GS",
            HM: "HM",
            PN: "PN",
            SJ: "SJ",
            UM: "UM"
          });
        var p, _;
        !(function (e) {
          (e.Address = "Address"),
            (e.BankAccount = "BankAccount"),
            (e.Company = "Company"),
            (e.Credential = "Credential"),
            (e.CredentialCategory = "CredentialCategory"),
            (e.DriverLicense = "DriverLicense"),
            (e.Email = "Email"),
            (e.FiscalId = "FiscalId"),
            (e.GeneratedPassword = "GeneratedPassword"),
            (e.IdCard = "IdCard"),
            (e.Identity = "Identity"),
            (e.NoteCategory = "NoteCategory"),
            (e.Note = "Note"),
            (e.Passport = "Passport"),
            (e.Passkey = "Passkey"),
            (e.PaymentCard = "PaymentCard"),
            (e.PersonalWebsite = "PersonalWebsite"),
            (e.Phone = "Phone"),
            (e.SocialSecurityId = "SocialSecurityId");
        })(p || (p = {})),
          (function (e) {
            (e.NewPassword = "newPassword"), (e.SubmitButton = "submitButton"), (e.WebauthnConditionalUI = "WebauthnConditionalUI");
          })(_ || (_ = {}));
        const S = (e) => Object.values(_).includes(e),
          v = (e) => e in p,
          m = [
            "KWAddress",
            "KWBankStatement",
            "KWCompany",
            "KWDriverLicence",
            "KWEmail",
            "KWFiscalStatement",
            "KWIDCard",
            "KWIdentity",
            "KWMerchand",
            "KWPassport",
            "KWPaymentMean_creditCard",
            "KWPaymentMean_paypal",
            "KWPersonalWebsite",
            "KWPhone",
            "KWSecureNote",
            "KWSecureNoteCategory",
            "KWSocialSecurityStatement"
          ],
          f = ["KWAuthentifiant", "KWGeneratedPassword", "KWPasskey"],
          E = [...m, ...f],
          O = (e) => !!e && "string" == typeof e && E.includes(e),
          h = (e) => !!e && "object" == typeof e && Array.isArray(e) && e.every(O),
          g = (e) =>
            e instanceof Array &&
            !e.find((e) => {
              return !("object" == typeof (t = e) && null !== t && "id" in t && "fieldIdentifier" in t && "domain" in t);
              var t;
            }),
          y = (e) => "none" === e.correctedDataSource;
        var b;
        !(function (e) {
          (e[(e.CannotDisable = 0)] = "CannotDisable"),
            (e[(e.DisableSpecificVaultItem = 1)] = "DisableSpecificVaultItem"),
            (e[(e.DisableGeneralSetting = 2)] = "DisableGeneralSetting");
        })(b || (b = {}));
        class A extends (0, c.g)({ scope: i.F.User }) {}
        var T = s(9059);
        class C extends (0, T.k)({ scope: i.F.User }) {}
        const P = (0, r.Q)({
          name: "autofillNotifications",
          commands: { setAutofillDisabledOnLoginsAndFormsNotificationStatus: A },
          events: {},
          queries: { getAutofillDisabledOnLoginsAndFormsNotificationStatus: C }
        });
        class I extends (0, T.k)({ scope: i.F.User }) {}
        class N extends (0, T.k)({ scope: i.F.User }) {}
        class R extends (0, T.k)({ scope: i.F.User }) {}
        class D extends (0, c.g)({ scope: i.F.User }) {}
        class M extends (0, c.g)({ scope: i.F.Device }) {}
        const w = (0, r.Q)({
          name: "autofillSecurity",
          commands: { disablePhishingPreventionForUrl: D, resetProtectedItemAutofillTimer: M },
          events: {},
          queries: { getAutofillProtectionContext: I, isPhishingPreventionCapabilityEnabled: N, isPhishingPreventionDisabledForUrl: R }
        });
        class L extends (0, c.g)({ scope: i.F.User }) {}
        class U extends (0, c.g)({ scope: i.F.User }) {}
        class F extends (0, c.g)({ scope: i.F.User }) {}
        var j;
        !(function (e) {
          (e.ANALYSIS_ENABLED = "ANALYSIS_ENABLED"),
            (e.ANALYSIS_DISABLED_BY_USER = "ANALYSIS_DISABLED_BY_USER"),
            (e.ANALYSIS_DISABLED_BY_B2B_ADMIN = "ANALYSIS_DISABLED_BY_B2B_ADMIN"),
            (e.ANALYSIS_DISABLED_BY_KILLSWITCH = "ANALYSIS_DISABLED_BY_KILLSWITCH"),
            (e.ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT = "ANALYSIS_DISABLED_BY_2FA_ENFORCEMENT");
        })(j || (j = {}));
        class k extends (0, T.k)({ scope: i.F.Device }) {}
        class G extends (0, T.k)({ scope: i.F.User }) {}
        class x extends (0, T.k)({ scope: i.F.User }) {}
        class B extends (0, c.g)({ scope: i.F.User }) {}
        class W extends (0, c.g)({ scope: i.F.User }) {}
        class K extends (0, c.g)({ scope: i.F.User }) {}
        class Q extends (0, c.g)({ scope: i.F.User }) {}
        class V extends (0, c.g)({ scope: i.F.User }) {}
        class H extends (0, c.g)({ scope: i.F.User }) {}
        class Y extends (0, c.g)({ scope: i.F.User }) {}
        class Z extends (0, c.g)({ scope: i.F.User }) {}
        class q extends (0, c.g)({ scope: i.F.User }) {}
        class z extends (0, c.g)({ scope: i.F.User }) {}
        class X extends (0, c.g)({ scope: i.F.User }) {}
        const J = (0, r.Q)({
          name: "autofillSettings",
          commands: {
            toggleDashlane: F,
            enableAnalysis: B,
            enableAutologin: W,
            enableAutofillOnForms: K,
            enableAutofillOnLogins: Q,
            enableFollowUpNotification: V,
            disableAnalysis: H,
            disableAutologin: Y,
            disableAutofillOnForms: Z,
            disableAutofillOnLogins: q,
            disableFollowUpNotification: z,
            addDisabledSourceTypes: U,
            removeDisabledSourceTypes: L,
            setUserAutofillCorrections: X
          },
          events: {},
          queries: { getAnalysisStatusOnUrl: k, getAutofillSettings: G, getUserAutofillCorrections: x }
        });
        class $ extends (0, T.k)({ scope: i.F.User }) {}
        class ee extends (0, c.g)({ scope: i.F.User }) {}
        const te = (0, r.Q)({
          name: "linkedWebsites",
          commands: { updateLinkedWebsites: ee },
          events: {},
          queries: { getDashlaneDefinedLinkedWebsites: $ }
        });
      },
      4213: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            DismissMasterPasswordNotificationCommand: () => i,
            IsMasterPasswordLeakedQuery: () => d,
            IsMasterPasswordNotificationDismissedQuery: () => _,
            IsMasterPasswordWeakQuery: () => p,
            TemporaryCheckMasterPasswordCommand: () => a,
            TemporaryCheckMasterPasswordWeakCommand: () => l,
            TemporaryResetMasterPasswordLeakedCommand: () => c,
            masterPasswordSecurityApi: () => S
          });
        var r = s(6952),
          o = s(4354),
          n = s(5029);
        class i extends (0, o.g)({ scope: n.F.User }) {}
        class a extends (0, o.g)({ scope: n.F.User }) {}
        class c extends (0, o.g)({ scope: n.F.User }) {}
        class l extends (0, o.g)({ scope: n.F.User }) {}
        var u = s(9059);
        class d extends (0, u.k)() {}
        class p extends (0, u.k)() {}
        class _ extends (0, u.k)() {}
        const S = (0, r.Q)({
          name: "masterPasswordSecurity",
          commands: {
            dismissMasterPasswordNotification: i,
            temporaryCheckMasterPassword: a,
            temporaryResetMasterPasswordLeaked: c,
            temporaryCheckMasterPasswordWeak: l
          },
          events: {},
          queries: { isMasterPasswordLeaked: d, isMasterPasswordWeak: p, isMasterPasswordNotificationDismissed: _ }
        });
      },
      2136: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            AddAutoRedirectedDomainCommand: () => $,
            BreachLeakedDataType: () => U,
            BreachQuery: () => D,
            BreachState: () => L,
            CompromisedCredentialsIdsForBreachQuery: () => Q,
            CompromisedCredentialsQuery: () => K,
            CorruptionDataSeverity: () => z,
            CorruptionDataStrength: () => q,
            CredentialHealthDataQuery: () => x,
            DarkWebOnboardingState: () => P,
            DataLeaksEmailStatus: () => g,
            DismissBreachCommand: () => N,
            DismissOnboardingNotificationCommand: () => i,
            EmailsListQuery: () => A,
            FilterCredentialsQuery: () => B,
            HealthFilter: () => Z,
            IsAutoRedirectedDomainQuery: () => J,
            MarkBreachAsSeenCommand: () => R,
            OnboardingNotificationStateQuery: () => T,
            OptinAlreadySubscribedError: () => d,
            OptinDataLeaksResultErrorCode: () => l,
            OptinDataLeaksResultOkCode: () => c,
            OptinEmailCommand: () => S,
            OptinGenericError: () => _,
            OptinInvalidEmailError: () => u,
            OptinTooManySubscriptionsError: () => p,
            OptoutDataLeaksResultErrorCode: () => m,
            OptoutDataLeaksResultOkCode: () => v,
            OptoutEmailCommand: () => h,
            OptoutGenericError: () => O,
            OptoutInvalidEmailError: () => f,
            OptoutNoSubscriptionError: () => E,
            OtpCodeForSecretOrUrlGenerationError: () => re,
            OtpCodeForSecretOrUrlQuery: () => oe,
            OtpCodeGenerationError: () => te,
            OtpCodeQuery: () => se,
            PasswordHealthComputationFinishedEvent: () => G,
            PasswordHealthReportQuery: () => V,
            RecalculatePasswordHealthCommand: () => j,
            RiskType: () => Y,
            ScoreQuery: () => W,
            UnreadBreachesCountQuery: () => M,
            UpdateIsCredentialExcludedCommand: () => F,
            antiphishingApi: () => ee,
            breachesApi: () => w,
            emailMonitoringApi: () => C,
            isDarkWebOnboardingState: () => I,
            isDataLeaksEmailStatus: () => b,
            otpApi: () => ne,
            passwordHealthApi: () => H,
            vaultReportApi: () => X
          });
        var r = s(6952),
          o = s(4354),
          n = s(5029);
        class i extends (0, o.g)({ scope: n.F.User }) {}
        var a = s(6168);
        const c = "OK";
        var l;
        !(function (e) {
          (e.INVALID_EMAIL = "EMAIL_IS_INVALID"),
            (e.ALREADY_SUBSCRIBED = "USER_HAS_ALREADY_AN_ACTIVE_SUBSCRIPTION"),
            (e.TOO_MANY_SUBSCRIPTIONS = "USER_HAS_TOO_MANY_SUBSCRIPTIONS"),
            (e.GENERIC_ERROR = "GENERIC_ERROR");
        })(l || (l = {}));
        class u extends (0, a.Hu)(l.INVALID_EMAIL, "") {}
        class d extends (0, a.Hu)(l.ALREADY_SUBSCRIBED, "") {}
        class p extends (0, a.Hu)(l.TOO_MANY_SUBSCRIPTIONS, "") {}
        class _ extends (0, a.Hu)(l.GENERIC_ERROR, "") {}
        class S extends (0, o.g)({ scope: n.F.User }) {}
        const v = "OK";
        var m;
        !(function (e) {
          (e.INVALID_EMAIL = "EMAIL_IS_INVALID"), (e.NO_SUBSCRIPTION = "USER_HAS_NO_SUBSCRIPTION"), (e.GENERIC_ERROR = "GENERIC_ERROR");
        })(m || (m = {}));
        class f extends (0, a.Hu)(m.INVALID_EMAIL, "") {}
        class E extends (0, a.Hu)(m.NO_SUBSCRIPTION, "") {}
        class O extends (0, a.Hu)(m.GENERIC_ERROR, "") {}
        class h extends (0, o.g)({ scope: n.F.User }) {}
        var g,
          y = s(9059);
        function b(e) {
          return "pending" === e || "active" === e || "disabled" === e;
        }
        !(function (e) {
          (e.PENDING = "pending"), (e.ACTIVE = "active"), (e.DISABLED = "disabled");
        })(g || (g = {}));
        class A extends (0, y.k)() {}
        class T extends (0, y.k)({ scope: n.F.User }) {}
        const C = (0, r.Q)({
          name: "emailMonitoring",
          commands: { dismissOnboardingNotification: i, optinEmail: S, optoutEmail: h },
          events: {},
          queries: { emailList: A, onboardingNotificationState: T }
        });
        var P;
        function I(e) {
          return "UNKNOWN" === e || "SEEN" === e || "NOT_SEEN" === e;
        }
        !(function (e) {
          (e.UNKNOWN = "UNKNOWN"), (e.SEEN = "SEEN"), (e.NOT_SEEN = "NOT_SEEN");
        })(P || (P = {}));
        class N extends (0, o.g)({ scope: n.F.User }) {}
        class R extends (0, o.g)({ scope: n.F.User }) {}
        class D extends (0, y.k)({ scope: n.F.User }) {}
        class M extends (0, y.k)({ scope: n.F.User }) {}
        const w = (0, r.Q)({
          name: "breaches",
          commands: { dismissBreach: N, markBreachAsSeen: R },
          events: {},
          queries: { breach: D, unreadBreachesCount: M }
        });
        var L, U;
        !(function (e) {
          (e.PENDING = "PENDING"), (e.VIEWED = "VIEWED"), (e.ACKNOWLEDGED = "ACKNOWLEDGED");
        })(L || (L = {})),
          (function (e) {
            (e.Username = "username"),
              (e.Password = "password"),
              (e.Email = "email"),
              (e.CreditCard = "creditcard"),
              (e.Phone = "phone"),
              (e.Address = "address"),
              (e.SSN = "ssn"),
              (e.IP = "ip"),
              (e.Location = "geolocation"),
              (e.PersonalInfo = "personalinfo"),
              (e.SocialNetwork = "social");
          })(U || (U = {}));
        class F extends (0, o.g)({ scope: n.F.User }) {}
        class j extends (0, o.g)({ scope: n.F.User }) {}
        var k = s(8885);
        class G extends (0, k.d)({ scope: n.F.User }) {}
        class x extends (0, y.k)({ scope: n.F.User }) {}
        class B extends (0, y.k)({ scope: n.F.User }) {}
        class W extends (0, y.k)({ scope: n.F.User }) {}
        class K extends (0, y.k)({ scope: n.F.User }) {}
        class Q extends (0, y.k)({ scope: n.F.User }) {}
        class V extends (0, y.k)({ scope: n.F.User }) {}
        const H = (0, r.Q)({
          name: "passwordHealth",
          commands: { updateIsCredentialExcluded: F, recalculatePasswordHealth: j },
          events: { passwordHealthComputationFinished: G },
          queries: {
            credentialHealthData: x,
            filterCredentials: B,
            score: W,
            compromisedCredentials: K,
            compromisedCredentialsIdsForBreach: Q,
            passwordHealthReport: V
          }
        });
        var Y, Z, q, z;
        !(function (e) {
          (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
        })(Y || (Y = {})),
          (function (e) {
            (e.All = "all"), (e.Weak = "weak"), (e.Reused = "reused"), (e.Compromised = "compromised"), (e.Excluded = "excluded");
          })(Z || (Z = {})),
          (function (e) {
            (e.WEAK = "weak"), (e.EXTREMELY_WEAK = "extremely_weak");
          })(q || (q = {})),
          (function (e) {
            (e.COMMON = "common"), (e.STRONG = "strong");
          })(z || (z = {}));
        const X = (0, r.Q)({ name: "vaultReport", commands: {}, events: {}, queries: {} });
        class J extends (0, y.k)() {}
        class $ extends (0, o.g)({ scope: n.F.User }) {}
        const ee = (0, r.Q)({
          name: "antiphishing",
          commands: { addAutoRedirectedDomain: $ },
          events: {},
          queries: { isAutoRedirectedDomain: J }
        });
        class te extends (0, a.Hu)("Cannot generate OTP code due to no OtpSecret or OtpUrl found for credential", "") {}
        class se extends (0, y.k)({ scope: n.F.User }) {}
        class re extends (0, a.Hu)("Cannot generate OTP code for secret or url", "") {}
        class oe extends (0, y.k)({ scope: n.F.User }) {}
        const ne = (0, r.Q)({ name: "otp", commands: {}, events: {}, queries: { otpCode: se, otpCodeForSecretOrUrl: oe } });
      },
      6110: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            ActivityLogCategory: () => u,
            ActivityLogType: () => l,
            StoreActivityLogsCommand: () => a,
            StoreActivityLogsInvalidLogsError: () => r,
            activityLogsApi: () => c
          });
        var r,
          o = s(6952),
          n = s(4354),
          i = s(5029);
        !(function (e) {
          (e.AUDIT_LOG_MISSING_JSON_SCHEMA = "AUDIT_LOG_MISSING_JSON_SCHEMA"),
            (e.AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA = "AUDIT_LOG_INVALID_JSON_FOR_JSON_SCHEMA"),
            (e.AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION = "AUDIT_LOG_INVALID_LOG_SCHEMA_TYPE_OR_VERSION"),
            (e.AUDIT_LOG_ERROR_READING_JSON_SCHEMA = "AUDIT_LOG_ERROR_READING_JSON_SCHEMA"),
            (e.STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED = "STORING_SENSITIVE_AUDIT_LOGS_NOT_ALLOWED");
        })(r || (r = {}));
        class a extends (0, n.g)({ scope: i.F.User }) {}
        const c = (0, o.Q)({ name: "activityLogs", commands: { storeActivityLogs: a }, events: {}, queries: {} });
        var l, u;
        !(function (e) {
          (e.UserInvited = "user_invited"),
            (e.UserReinvited = "user_reinvited"),
            (e.UserRemoved = "user_removed"),
            (e.TeamCaptainAdded = "team_captain_added"),
            (e.TeamCaptainRemoved = "team_captain_removed"),
            (e.GroupManagerAdded = "group_manager_added"),
            (e.GroupManagerRemoved = "group_manager_removed"),
            (e.MasterPasswordResetAccepted = "master_password_reset_accepted"),
            (e.MasterPasswordResetRefused = "master_password_reset_refused"),
            (e.BillingAdminAdded = "billing_admin_added"),
            (e.BillingAdminRemoved = "billing_admin_removed"),
            (e.UserGroupCreated = "user_group_created"),
            (e.UserGroupRenamed = "user_group_renamed"),
            (e.UserGroupDeleted = "user_group_deleted"),
            (e.UserJoinedUserGroup = "user_joined_user_group"),
            (e.UserLeftUserGroup = "user_left_user_group"),
            (e.UserInvitedToUserGroup = "user_invited_to_user_group"),
            (e.UserDeclinedInviteToUserGroup = "user_declined_invite_to_user_group"),
            (e.UserRemovedFromUserGroup = "user_removed_from_user_group"),
            (e.DomainRequested = "domain_requested"),
            (e.DomainValidated = "domain_validated"),
            (e.SensitiveLogsEnabled = "collect_sensitive_data_audit_logs_enabled"),
            (e.SensitiveLogsDisabled = "collect_sensitive_data_audit_logs_disabled"),
            (e.SsoIdpMetadataSet = "sso_idp_metadata_set"),
            (e.SsoServiceProviderUrlSet = "sso_service_provider_url_set"),
            (e.SsoEnabled = "sso_enabled"),
            (e.SsoDisabled = "sso_disabled"),
            (e.NitroSsoDomainProvisioned = "nitro_sso_domain_provisioned"),
            (e.NitroSsoDomainRemoved = "nitro_sso_domain_removed"),
            (e.NitroSsoDomainVerified = "nitro_sso_domain_verified"),
            (e.NitroSsoSetupStarted = "nitro_sso_setup_started"),
            (e.TeamNameChanged = "team_name_changed"),
            (e.NewBillingPeriodCreated = "new_billing_period_created"),
            (e.SeatsAdded = "seats_added"),
            (e.ContactEmailChanged = "contact_email_changed"),
            (e.MasterPasswordMobileResetEnabled = "master_password_mobile_reset_enabled"),
            (e.MasterPasswordMobileResetDisabled = "master_password_mobile_reset_disabled"),
            (e.MasterPasswordMobileReset = "master_password_mobile_reset"),
            (e.MasterPasswordChanged = "master_password_changed"),
            (e.MpToViewPasswordsEnabled = "mp_to_view_passwords_enabled"),
            (e.MpToViewPasswordsDisabled = "mp_to_view_passwords_disabled"),
            (e.TwoFactorAuthenticationLoginMethodAdded = "two_factor_authentication_login_method_added"),
            (e.TwoFactorAuthenticationLoginMethodRemoved = "two_factor_authentication_login_method_removed"),
            (e.BiometricSignInDisabled = "biometric_sign_in_disabled"),
            (e.DWMEmailAdded = "dwm_email_added"),
            (e.DWMEmailRemoved = "dwm_email_removed"),
            (e.DWMAlertReceived = "dwm_alert_received"),
            (e.UserDeviceAdded = "user_device_added"),
            (e.UserDeviceRemoved = "user_device_removed"),
            (e.UserDeviceLogin = "user_device_login"),
            (e.MasterPasswordReset = "master_password_reset"),
            (e.RequestedAccountRecovery = "requested_account_recovery"),
            (e.CompletedAccountRecovery = "completed_account_recovery"),
            (e.UserSharedCredentialWithGroup = "user_shared_credential_with_group"),
            (e.UserSharedCredentialWithEmail = "user_shared_credential_with_email"),
            (e.UserSharedCredentialWithExternal = "user_shared_credential_with_external"),
            (e.UserSharedSecureNoteWithGroup = "user_shared_secure_note_with_group"),
            (e.UserSharedSecureNoteWithEmail = "user_shared_secure_note_with_email"),
            (e.UserSharedSecureNoteWithExternal = "user_shared_secure_note_with_external"),
            (e.UserRevokedSharedCredentialGroup = "user_revoked_shared_credential_group"),
            (e.UserRevokedSharedCredentialEmail = "user_revoked_shared_credential_email"),
            (e.UserRevokedSharedCredentialExternal = "user_revoked_shared_credential_external"),
            (e.UserRevokedSharedSecureNoteGroup = "user_revoked_shared_secure_note_group"),
            (e.UserRevokedSharedSecureNoteEmail = "user_revoked_shared_secure_note_email"),
            (e.UserRevokedSharedSecureNoteExternal = "user_revoked_shared_secure_note_external"),
            (e.UserAcceptedSharingInviteSecureNote = "user_accepted_sharing_invite_secure_note"),
            (e.UserRejectedSharingInviteSecureNote = "user_rejected_sharing_invite_secure_note"),
            (e.UserAcceptedSharingInviteCredential = "user_accepted_sharing_invite_credential"),
            (e.UserRejectedSharingInviteCredential = "user_rejected_sharing_invite_credential"),
            (e.UserCreatedCredential = "user_created_credential"),
            (e.UserModifiedCredential = "user_modified_credential"),
            (e.UserDeletedCredential = "user_deleted_credential"),
            (e.UserImportedCredentials = "user_imported_credentials"),
            (e.UserCreatedSecureNote = "user_created_secure_note"),
            (e.UserModifiedSecureNote = "user_modified_secure_note"),
            (e.UserDeletedSecureNote = "user_deleted_secure_note");
        })(l || (l = {})),
          (function (e) {
            (e.Account = "account"),
              (e.Authentication = "authentication"),
              (e.DarkWebMonitoring = "dark_web_monitoring"),
              (e.Groups = "groups"),
              (e.ImportExport = "import_export"),
              (e.TeamSettings = "team_settings"),
              (e.TeamSettingsActiveDirectory = "team_settings_activedirectory"),
              (e.TeamSettingsPolicies = "team_settings_policies"),
              (e.TeamSettingsSAMLProvisioning = "team_settings_samlprovisioning"),
              (e.TeamSettingsSCIM = "team_settings_scim"),
              (e.TeamSettingsSSO = "team_settings_sso"),
              (e.Sharing = "sharing"),
              (e.UserSettings = "user_settings"),
              (e.UserSettingsAccountRecovery = "user_settings_accountrecovery"),
              (e.Users = "users"),
              (e.VaultIDs = "vault_ids"),
              (e.VaultPasswords = "vault_passwords"),
              (e.VaultPayments = "vault_payments"),
              (e.VaultPersonalInfo = "vault_personalinfo"),
              (e.VaultSecureNotes = "vault_securenotes");
          })(u || (u = {}));
      },
      7567: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            ChangeSessionKeyErrorTypes: () => b,
            CheckSessionKeyErrorTypes: () => G,
            CheckSessionKeyQuery: () => p,
            CheckSessionSessionNotCreated: () => W,
            CloseUserSessionCommand: () => D,
            CreateUserSessionCommand: () => C,
            CreatedSessionState: () => l,
            CreatedSessionsStateQuery: () => d,
            DeleteLocalSessionCommand: () => M,
            DeviceLimitQuery: () => X,
            FlushLocalDataCommand: () => O,
            IsAllowedQuery: () => z,
            MasterPasswordChangedEvent: () => Q,
            MultiAccountNotYetSupported: () => N,
            NotAllowedReason: () => Y,
            OpenUserSessionCommand: () => R,
            PlatformView: () => Z,
            PrepareLocalDataFlushCommand: () => h,
            SelectedOpenedSessionQuery: () => L,
            SessionAlreadyExists: () => T,
            SessionAlreadyOpened: () => I,
            SessionClient: () => B,
            SessionCloseMode: () => _,
            SessionClosedEvent: () => f,
            SessionClosingEvent: () => m,
            SessionCreationErrorTypes: () => g,
            SessionKeyChecker: () => K,
            SessionNotCreated: () => P,
            SessionOpenErrorTypes: () => y,
            SessionOpenedEvent: () => v,
            SessionOpeningEvent: () => w,
            SessionQueryParamsSchema: () => a,
            SessionState: () => c,
            SessionStateQuery: () => u,
            TemporarySendMasterPasswordChangedEventCommand: () => V,
            UnableToUpdateSessionKeyForNonExistingAccount: () => U,
            UnableToUpdateSessionSessionNotOpened: () => F,
            UpdateUserSessionKeyCommand: () => j,
            UserNotLogged: () => q,
            changeMasterPasswordApi: () => H,
            sessionApi: () => k,
            vaultAccessApi: () => J
          });
        var r = s(6952),
          o = s(9059),
          n = s(5029),
          i = s(7165);
        const a = i.z.object({ email: i.z.string() });
        var c, l;
        !(function (e) {
          (e.NotCreated = "notCreated"), (e.Closed = "closed"), (e.Open = "open");
        })(c || (c = {}));
        class u extends (0, o.k)({ scope: n.F.Device }) {}
        !(function (e) {
          (e.Closed = "closed"), (e.Open = "open");
        })(l || (l = {}));
        class d extends (0, o.k)({ scope: n.F.Device }) {}
        class p extends (0, o.k)({ scope: n.F.Device }) {}
        var _,
          S = s(8885);
        class v extends (0, S.d)({ scope: n.F.User }) {}
        class m extends (0, S.d)({ scope: n.F.User }) {}
        !(function (e) {
          (e.Close = "close"), (e.Lock = "lock");
        })(_ || (_ = {}));
        class f extends (0, S.d)({ scope: n.F.Device }) {}
        var E = s(4354);
        class O extends (0, E.g)({ scope: n.F.User }) {}
        class h extends (0, E.g)({ scope: n.F.User }) {}
        var g,
          y,
          b,
          A = s(6168);
        !(function (e) {
          e.AlreadyExists = "alreadyExists";
        })(g || (g = {}));
        class T extends (0, A.Hu)(g.AlreadyExists, "The session already exists. Delete it first.") {}
        class C extends (0, E.g)({ scope: n.F.Device }) {}
        !(function (e) {
          (e.NotCreated = "notCreated"),
            (e.AlreadyOpened = "alreadyOpened"),
            (e.MultiAccountNotYetSupported = "multiAccountNotYetSupported");
        })(y || (y = {}));
        class P extends (0, A.Hu)(y.NotCreated, "The session has not been created. Create it first.") {}
        class I extends (0, A.Hu)(y.AlreadyOpened, "The session is already opened for this user. Close it first.") {}
        class N extends (0, A.Hu)(y.MultiAccountNotYetSupported, "Another session is opened. Close it first.") {}
        class R extends (0, E.g)({ scope: n.F.Device }) {}
        class D extends (0, E.g)({ scope: n.F.Device }) {}
        class M extends (0, E.g)({ scope: n.F.Device }) {}
        class w extends (0, S.d)({ scope: n.F.User }) {}
        class L extends (0, o.k)({ scope: n.F.Device }) {}
        !(function (e) {
          (e.NotCreated = "notCreated"), (e.NotOpened = "notOpened");
        })(b || (b = {}));
        class U extends (0, A.Hu)(b.NotCreated, "The session has not been created. Create it first.") {}
        class F extends (0, A.Hu)(b.NotOpened, "The session has not been opened") {}
        class j extends (0, E.g)({ scope: n.F.Device }) {}
        const k = (0, r.Q)({
          name: "session",
          commands: {
            FlushLocalDataCommand: O,
            PrepareLocalDataFlushCommand: h,
            CreateUserSessionCommand: C,
            OpenUserSessionCommand: R,
            CloseUserSessionCommand: D,
            DeleteLocalSessionCommand: M,
            UpdateUserSessionKeyCommand: j
          },
          queries: { sessionState: u, createdSessionsState: d, selectedOpenedSession: L, checkSessionKey: p },
          events: { SessionOpenedEvent: v, SessionClosingEvent: m, SessionClosedEvent: f, SessionOpeningEvent: w }
        });
        var G,
          x = s(7837);
        class B extends (0, x.E)(k) {}
        (0, x.K)(k, B),
          (function (e) {
            e.SessionNotCreated = "notCreated";
          })(G || (G = {}));
        class W extends (0, A.Hu)(G.SessionNotCreated, "The session has not been created. Create it first.") {}
        class K {}
        class Q extends (0, S.d)({ scope: n.F.User }) {}
        class V extends (0, E.g)({ scope: n.F.User }) {}
        const H = (0, r.Q)({
          name: "changeMasterPassword",
          commands: { temporarySendMasterPasswordChangedEvent: V },
          events: { masterPasswordChanged: Q },
          queries: {}
        });
        var Y, Z;
        !(function (e) {
          (e.DeviceLimited = "DeviceLimited"),
            (e.Requires2FAEnforcement = "Requires2FAEnforcement"),
            (e.RequiresSSO2MPMigration = "RequiresSSO2MPMigration"),
            (e.RequiresMP2SSOMigration = "RequiresMP2SSOMigration"),
            (e.NoActiveUser = "NoActiveUser");
        })(Y || (Y = {}));
        class q extends (0, A.Hu)("UserNotLogged", "Please log the user") {}
        class z extends (0, o.k)({ scope: n.F.Device }) {}
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
        })(Z || (Z = {}));
        class X extends (0, o.k)({ scope: n.F.User }) {}
        const J = (0, r.Q)({ name: "vaultAccess", commands: {}, events: {}, queries: { isAllowed: z, deviceLimit: X } });
      },
      700: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            AcceptCollectionInviteCommand: () => O,
            AcceptCollectionInviteFailedError: () => E,
            AcceptCollectionInviteResultErrorCode: () => p,
            AddItemToCollectionsCommand: () => Oe,
            AddItemsToCollectionCommand: () => Ee,
            CreateSharedCollectionCommand: () => he,
            DeleteSharedCollectionCommand: () => ge,
            GetCollectionPermissionsQuery: () => _e,
            GetInvitesQuery: () => V,
            GetItemGroupForItemQuery: () => c,
            GetItemIdsInSharedCollectionsQuery: () => de,
            GetItemIdsInSharedCollectionsSchema: () => ie,
            GetPendingCollectionsQuery: () => H,
            GetPermissionForItemQuery: () => u,
            GetSharedCollectionsQuery: () => pe,
            GetSharingStatusForItemQuery: () => l,
            GetSharingTeamLoginsQuery: () => i,
            HasInvitesQuery: () => Y,
            InviteCollectionMembersCommand: () => ye,
            PendingCollectionSchema: () => ce,
            PendingItemGroupSchema: () => le,
            PendingUserGroupSchema: () => ue,
            Permission: () => q,
            PermissionSchema: () => $,
            RefuseCollectionInviteCommand: () => g,
            RefuseCollectionInviteFailedError: () => h,
            RefuseCollectionInviteResultErrorCode: () => _,
            RefuseItemGroupInviteAuthorHasInvalidStatusError: () => b,
            RefuseItemGroupInviteCommand: () => D,
            RefuseItemGroupInviteGroupHasInvalidStatusError: () => A,
            RefuseItemGroupInviteInvalidItemGroupRevisionError: () => P,
            RefuseItemGroupInviteNotEnoughAdminsError: () => I,
            RefuseItemGroupInviteNotFoundError: () => y,
            RefuseItemGroupInviteResultErrorCode: () => S,
            RefuseItemGroupInviteUserGroupIsNotInItemGroupError: () => C,
            RefuseItemGroupInviteUserIsNotInItemGroupError: () => T,
            RefuseItemGroupInviteUserIsNotInPendingStatusError: () => N,
            RefuseUserGroupInviteAuthorHasInvalidStatusError: () => B,
            RefuseUserGroupInviteCommand: () => K,
            RefuseUserGroupInviteGroupHasInvalidStatusError: () => x,
            RefuseUserGroupInviteInsufficientPrivilegesError: () => j,
            RefuseUserGroupInviteInvalidItemGroupRevisionError: () => U,
            RefuseUserGroupInviteInvalidTeamIdError: () => w,
            RefuseUserGroupInviteNotFoundError: () => M,
            RefuseUserGroupInviteResultErrorCode: () => v,
            RefuseUserGroupInviteUserGroupIsNotFoundError: () => L,
            RefuseUserGroupInviteUserGroupUpdateConflictError: () => F,
            RefuseUserGroupInviteUserIsNotInPendingStatusError: () => G,
            RefuseUserGroupInviteUserIsNotInUserGroupError: () => k,
            RemoveItemFromCollectionsCommand: () => Ae,
            RenameCollectionCommand: () => Te,
            RevokeCollectionMembersCommand: () => Ce,
            RsaStatusSchema: () => ee,
            ShareableCollectionSchema: () => ve,
            ShareableCollectionVaultItemSchema: () => Se,
            SharedCollectionRole: () => ae,
            SharedCollectionSchema: () => oe,
            SharedCollectionUserGroupSchema: () => se,
            SharedCollectionUserOrGroupViewSchema: () => re,
            SharedCollectionUserSchema: () => te,
            SharedCollectionsWithItemsQuery: () => me,
            SharingCollectionsClient: () => Re,
            SharingEnabledQuery: () => a,
            Status: () => z,
            StatusSchema: () => J,
            UpdateCollectionMembersCommand: () => be,
            UpdatePendingCollectionsCommand: () => Q,
            UpdateSharedCollectionsCommand: () => Pe,
            UsersAndGroupsInCollectionQuery: () => fe,
            UsersAndGroupsInCollectionSchema: () => ne,
            getRefuseItemGroupInviteFunctionalError: () => R,
            getRefuseUserGroupInviteFunctionalError: () => W,
            sharingCollectionsApi: () => Ie,
            sharingInvitesApi: () => Z,
            sharingItemsApi: () => d
          });
        var r = s(6952),
          o = s(9059),
          n = s(5029);
        class i extends (0, o.k)({ scope: n.F.User }) {}
        class a extends (0, o.k)({ scope: n.F.User }) {}
        class c extends (0, o.k)({ scope: n.F.User }) {}
        class l extends (0, o.k)({ scope: n.F.User }) {}
        class u extends (0, o.k)({ scope: n.F.User }) {}
        const d = (0, r.Q)({
          name: "sharingItems",
          commands: {},
          events: {},
          queries: {
            getSharingTeamLogins: i,
            sharingEnabled: a,
            getItemGroupForItem: c,
            getSharingStatusForItem: l,
            getPermissionForItem: u
          }
        });
        var p,
          _,
          S,
          v,
          m = s(4354),
          f = s(6168);
        !(function (e) {
          e.AcceptFailed = "AcceptFailed";
        })(p || (p = {}));
        class E extends (0, f.Hu)(p.AcceptFailed, "Failed to accept collection") {}
        class O extends (0, m.g)({ scope: n.F.User }) {}
        !(function (e) {
          e.RefuseFailed = "RefuseFailed";
        })(_ || (_ = {}));
        class h extends (0, f.Hu)(_.RefuseFailed, "Failed to refuse collection") {}
        class g extends (0, m.g)({ scope: n.F.User }) {}
        !(function (e) {
          (e.ItemGroupNotFound = "ItemGroupNotFound"),
            (e.AuthorHasInvalidStatus = "AuthorHasInvalidStatus"),
            (e.GroupHasInvalidStatus = "GroupHasInvalidStatus"),
            (e.UserIsNotInItemGroup = "UserIsNotInItemGroup"),
            (e.UserGroupIsNotInItemGroup = "UserGroupIsNotInItemGroup"),
            (e.InvalidItemGroupRevision = "InvalidItemGroupRevision"),
            (e.NotEnoughAdmins = "NotEnoughAdmins"),
            (e.UserIsNotInPendingStatus = "UserIsNotInPendingStatus");
        })(S || (S = {}));
        class y extends (0, f.Hu)(S.ItemGroupNotFound, "Item Group not found") {}
        class b extends (0, f.Hu)(S.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
        class A extends (0, f.Hu)(S.GroupHasInvalidStatus, "UserGroup is not in accepted/pending status (already refused or revoked)") {}
        class T extends (0, f.Hu)(S.UserIsNotInItemGroup, "User is not part of item group") {}
        class C extends (0, f.Hu)(S.UserGroupIsNotInItemGroup, "User group is not part of item group") {}
        class P extends (0, f.Hu)(S.InvalidItemGroupRevision, "Item group revision is not valid") {}
        class I extends (0, f.Hu)(S.NotEnoughAdmins, "The operation would let the item group with no admin") {}
        class N extends (0, f.Hu)(S.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
        function R(e) {
          switch (e) {
            case "AUTHOR_HAS_INVALID_STATUS":
              return new b();
            case "GROUP_HAS_INVALID_STATUS":
              return new A();
            case "USER_IS_NOT_IN_ITEM_GROUP":
              return new T();
            case "USER_GROUP_IS_NOT_IN_ITEM_GROUP":
              return new C();
            case "INVALID_ITEM_GROUP_REVISION":
              return new P();
            case "NOT_ENOUGH_ADMINS":
              return new I();
            case "USER_IS_NOT_IN_PENDING_STATUS":
              return new N();
            default:
              throw new Error("Unknown server error");
          }
        }
        class D extends (0, m.g)({ scope: n.F.User }) {}
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
        })(v || (v = {}));
        class M extends (0, f.Hu)(v.UserGroupNotFound, "User Group not found") {}
        class w extends (0, f.Hu)(v.InvalidTeamId, "Provided Team ID is not a number") {}
        class L extends (0, f.Hu)(v.UserGroupIsNotFound, "User group for provided ID does not exist") {}
        class U extends (0, f.Hu)(v.InvalidItemGroupRevision, "User group revision is not valid") {}
        class F extends (0, f.Hu)(v.UserGroupUpdateConflict, "Conflict between users attempting to update the same user group") {}
        class j extends (0, f.Hu)(v.InsufficientPrivileges, "The user does not have User Group permission to refuse the invitation") {}
        class k extends (0, f.Hu)(v.UserIsNotInUserGroup, "User is not part of a group") {}
        class G extends (0, f.Hu)(v.UserIsNotInPendingStatus, 'User is not in "pending" status or not part of a group') {}
        class x extends (0, f.Hu)(
          v.GroupHasInvalidStatus,
          'UserGroup is not in "accepted" or "pending" status (already refused or revoked)'
        ) {}
        class B extends (0, f.Hu)(v.AuthorHasInvalidStatus, "User is not in accepted/pending status (already refused or revoked)") {}
        function W(e) {
          switch (e) {
            case "INVALID_TEAM_ID":
              return new w();
            case "USER_GROUP_IS_NOT_FOUND":
              return new L();
            case "INVALID_USER_GROUP_REVISION":
              return new U();
            case "USER_GROUP_UPDATE_CONFLICT":
              return new F();
            case "INSUFFICIENT_PRIVILEGES":
              return new j();
            case "USER_IS_NOT_IN_USER_GROUP":
              return new k();
            case "USER_IS_NOT_IN_PENDING_STATUS":
              return new G();
            case "GROUP_HAS_INVALID_STATUS":
              return new x();
            case "AUTHOR_HAS_INVALID_STATUS":
              return new B();
            default:
              throw new Error("Unknown server error");
          }
        }
        class K extends (0, m.g)({ scope: n.F.User }) {}
        class Q extends (0, m.g)({ scope: n.F.User }) {}
        class V extends (0, o.k)({ scope: n.F.User }) {}
        class H extends (0, o.k)({ scope: n.F.User }) {}
        class Y extends (0, o.k)({ scope: n.F.User }) {}
        const Z = (0, r.Q)({
          name: "sharingInvites",
          commands: {
            AcceptCollectionInviteCommand: O,
            RefuseCollectionInviteCommand: g,
            RefuseItemGroupInviteCommand: D,
            RefuseUserGroupInviteCommand: K,
            UpdatePendingCollectionsCommand: Q
          },
          events: {},
          queries: { GetInvitesQuery: V, GetPendingCollectionsQuery: H, HasInvitesQuery: Y }
        });
        var q,
          z,
          X = s(7165);
        !(function (e) {
          (e.Admin = "admin"), (e.Limited = "limited");
        })(q || (q = {})),
          (function (e) {
            (e.Pending = "pending"), (e.Accepted = "accepted"), (e.Refused = "refused"), (e.Revoked = "revoked");
          })(z || (z = {}));
        const J = X.z.nativeEnum(z),
          $ = X.z.nativeEnum(q),
          ee = X.z.union([X.z.literal("noKey"), X.z.literal("publicKey"), X.z.literal("sharingKeys")]),
          te = X.z.object({
            acceptSignature: X.z.optional(X.z.nullable(X.z.string())),
            collectionKey: X.z.optional(X.z.nullable(X.z.string())),
            login: X.z.string(),
            permission: $,
            proposeSignature: X.z.optional(X.z.string()),
            proposeSignatureUsingAlias: X.z.optional(X.z.boolean()),
            referrer: X.z.string(),
            rsaStatus: X.z.optional(ee),
            status: J
          }),
          se = X.z.object({
            acceptSignature: X.z.optional(X.z.nullable(X.z.string())),
            collectionKey: X.z.optional(X.z.nullable(X.z.string())),
            name: X.z.string(),
            permission: $,
            proposeSignature: X.z.optional(X.z.string()),
            referrer: X.z.optional(X.z.string()),
            status: J,
            uuid: X.z.string()
          }),
          re = X.z.object({ label: X.z.string(), status: J, permission: $, id: X.z.string() }),
          oe = X.z.object({
            name: X.z.string(),
            privateKey: X.z.string(),
            publicKey: X.z.string(),
            revision: X.z.number(),
            userGroups: X.z.optional(X.z.array(se)),
            users: X.z.optional(X.z.array(te)),
            uuid: X.z.string()
          }),
          ne = X.z.object({ userGroups: X.z.optional(X.z.array(re)), users: X.z.optional(X.z.array(re)) }),
          ie = X.z.array(X.z.string());
        var ae;
        !(function (e) {
          (e.Editor = "editor"), (e.Manager = "manager");
        })(ae || (ae = {}));
        const ce = X.z.object({
            uuid: X.z.string(),
            name: X.z.string(),
            referrer: X.z.string(),
            permission: X.z.nativeEnum(q),
            seen: X.z.boolean()
          }),
          le = X.z.object({
            itemGroupId: X.z.string(),
            referrer: X.z.string(),
            permission: X.z.enum(["admin", "limited"]),
            seen: X.z.boolean()
          }),
          ue = X.z.object({
            groupId: X.z.string(),
            name: X.z.string(),
            referrer: X.z.string(),
            permission: X.z.enum(["admin", "limited"]),
            seen: X.z.boolean()
          });
        class de extends (0, o.k)({ scope: n.F.User }) {}
        class pe extends (0, o.k)({ scope: n.F.User }) {}
        class _e extends (0, o.k)({ scope: n.F.User }) {}
        const Se = X.z.object({ id: X.z.string(), type: X.z.string() }),
          ve = X.z.object({
            id: X.z.string(),
            name: X.z.string(),
            spaceId: X.z.string(),
            vaultItems: X.z.array(Se),
            isShared: X.z.optional(X.z.boolean())
          });
        class me extends (0, o.k)({ scope: n.F.User }) {}
        class fe extends (0, o.k)({ scope: n.F.User }) {}
        class Ee extends (0, m.g)({ scope: n.F.User }) {}
        class Oe extends (0, m.g)({ scope: n.F.User }) {}
        class he extends (0, m.g)({ scope: n.F.User }) {}
        class ge extends (0, m.g)({ scope: n.F.User }) {}
        class ye extends (0, m.g)({ scope: n.F.User }) {}
        class be extends (0, m.g)({ scope: n.F.User }) {}
        class Ae extends (0, m.g)({ scope: n.F.User }) {}
        class Te extends (0, m.g)({ scope: n.F.User }) {}
        class Ce extends (0, m.g)({ scope: n.F.User }) {}
        class Pe extends (0, m.g)({ scope: n.F.User }) {}
        const Ie = (0, r.Q)({
          name: "sharingCollections",
          commands: {
            addItemsToCollection: Ee,
            addItemToCollections: Oe,
            createSharedCollection: he,
            deleteSharedCollection: ge,
            inviteCollectionMembers: ye,
            updateCollectionMembers: be,
            removeItemFromCollections: Ae,
            renameCollection: Te,
            revokeCollectionMembers: Ce,
            updateSharedCollections: Pe
          },
          events: {},
          queries: {
            getItemIdsInSharedCollections: de,
            getSharedCollections: pe,
            getCollectionPermissions: _e,
            sharedCollectionsWithItems: me,
            usersAndGroupsInCollection: fe
          }
        });
        var Ne = s(7837);
        class Re extends (0, Ne.E)(Ie) {}
        (0, Ne.K)(Ie, Re);
      },
      2341: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            CanUserAddNewPasswordQuery: () => ee,
            CollectionsQuery: () => q,
            Country: () => T,
            CreateCollectionCommand: () => V,
            CreateVaultItemCommand: () => a,
            CreatedEvent: () => S,
            DeleteCollectionCommand: () => Q,
            DeleteVaultItemsCommand: () => c,
            DeletedEvent: () => v,
            DomainIconDetailsMapSchema: () => M,
            DomainIconDetailsQuery: () => E,
            DomainIconDetailsSchema: () => D,
            EmailType: () => L,
            EmitTemporaryVaultItemEventCommand: () => d,
            EventType: () => r,
            FilterOperators: () => b,
            GetPasswordLimitStatusQuery: () => te,
            GetVaultNotificationsStatusQuery: () => W,
            IdentityTitle: () => U,
            MigrateCategoriesCommand: () => H,
            NoteColors: () => j,
            OperationType: () => Y,
            PaymentCardColorType: () => w,
            PhoneType: () => F,
            SecureNoteCategoryQuery: () => h,
            SecureNoteSchema: () => k,
            SetVaultNotificationsStatusCommand: () => B,
            SortDirection: () => A,
            TempCredentialPreferencesQuery: () => g,
            TempCredentialPreferencesUpdateCommand: () => u,
            UpdateCollectionCommand: () => Z,
            UpdateVaultItemCommand: () => l,
            UpdatedEvent: () => m,
            VaultItemType: () => G,
            VaultItemTypeToResultDictionary: () => x,
            VaultItemsCrudClient: () => P,
            VaultItemsQuery: () => O,
            VaultOrganizationClient: () => X,
            VaultSearchQuery: () => J,
            passwordLimitApi: () => se,
            vaultItemsCrudApi: () => y,
            vaultNotificationsApi: () => K,
            vaultOrganizationApi: () => z,
            vaultSearchApi: () => $
          });
        var r,
          o = s(6952),
          n = s(4354),
          i = s(5029);
        class a extends (0, n.g)({ scope: i.F.User }) {}
        class c extends (0, n.g)({ scope: i.F.User }) {}
        class l extends (0, n.g)({ scope: i.F.User }) {}
        class u extends (0, n.g)({ scope: i.F.User }) {}
        !(function (e) {
          (e.Deleted = "deleted"), (e.Updated = "updated"), (e.Created = "created");
        })(r || (r = {}));
        class d extends (0, n.g)({ scope: i.F.User }) {}
        var p = s(8885);
        class _ extends (0, p.d)({ scope: i.F.User }) {}
        class S extends _ {}
        class v extends _ {}
        class m extends _ {}
        var f = s(9059);
        class E extends (0, f.k)({ scope: i.F.User }) {}
        class O extends (0, f.k)({ scope: i.F.User }) {}
        class h extends (0, f.k)({ scope: i.F.User }) {}
        class g extends (0, f.k)({ scope: i.F.User }) {}
        const y = (0, o.Q)({
          name: "vaultItemsCrud",
          commands: {
            createVaultItem: a,
            deleteVaultItems: c,
            updateVaultItem: l,
            tempCredentialPreferencesUpdate: u,
            emitTemporaryVaultItemEvent: d
          },
          events: { createdEvent: S, deletedEvent: v, updatedEvent: m },
          queries: { domainIconDetails: E, query: O, secureNoteCategory: h, tempCredentialPreferences: g }
        });
        var b,
          A,
          T,
          C = s(7837);
        class P extends (0, C.E)(y) {}
        (0, C.K)(y, P),
          (function (e) {
            (e.Equal = "equal"), (e.LessThan = "lessThan"), (e.GreaterThan = "greaterThan");
          })(b || (b = {})),
          (function (e) {
            (e.Ascend = "ascend"), (e.Descend = "descend");
          })(A || (A = {})),
          (function (e) {
            (e.NO_TYPE = "NO_TYPE"),
              (e.UNIVERSAL = "UNIVERSAL"),
              (e.AD = "AD"),
              (e.AE = "AE"),
              (e.AF = "AF"),
              (e.AG = "AG"),
              (e.AI = "AI"),
              (e.AL = "AL"),
              (e.AM = "AM"),
              (e.AO = "AO"),
              (e.AQ = "AQ"),
              (e.AR = "AR"),
              (e.AS = "AS"),
              (e.AT = "AT"),
              (e.AU = "AU"),
              (e.AW = "AW"),
              (e.AX = "AX"),
              (e.AZ = "AZ"),
              (e.BA = "BA"),
              (e.BB = "BB"),
              (e.BD = "BD"),
              (e.BE = "BE"),
              (e.BF = "BF"),
              (e.BG = "BG"),
              (e.BH = "BH"),
              (e.BI = "BI"),
              (e.BJ = "BJ"),
              (e.BL = "BL"),
              (e.BM = "BM"),
              (e.BN = "BN"),
              (e.BO = "BO"),
              (e.BR = "BR"),
              (e.BS = "BS"),
              (e.BT = "BT"),
              (e.BV = "BV"),
              (e.BW = "BW"),
              (e.BY = "BY"),
              (e.BZ = "BZ"),
              (e.CA = "CA"),
              (e.CC = "CC"),
              (e.CD = "CD"),
              (e.CF = "CF"),
              (e.CG = "CG"),
              (e.CH = "CH"),
              (e.CI = "CI"),
              (e.CK = "CK"),
              (e.CL = "CL"),
              (e.CM = "CM"),
              (e.CN = "CN"),
              (e.CO = "CO"),
              (e.CR = "CR"),
              (e.CU = "CU"),
              (e.CV = "CV"),
              (e.CX = "CX"),
              (e.CY = "CY"),
              (e.CZ = "CZ"),
              (e.DE = "DE"),
              (e.DJ = "DJ"),
              (e.DK = "DK"),
              (e.DM = "DM"),
              (e.DO = "DO"),
              (e.DZ = "DZ"),
              (e.EC = "EC"),
              (e.EE = "EE"),
              (e.EG = "EG"),
              (e.EH = "EH"),
              (e.ER = "ER"),
              (e.ES = "ES"),
              (e.ET = "ET"),
              (e.FI = "FI"),
              (e.FJ = "FJ"),
              (e.FK = "FK"),
              (e.FM = "FM"),
              (e.FO = "FO"),
              (e.FR = "FR"),
              (e.GA = "GA"),
              (e.GB = "GB"),
              (e.GD = "GD"),
              (e.GE = "GE"),
              (e.GF = "GF"),
              (e.GG = "GG"),
              (e.GH = "GH"),
              (e.GI = "GI"),
              (e.GL = "GL"),
              (e.GM = "GM"),
              (e.GN = "GN"),
              (e.GP = "GP"),
              (e.GQ = "GQ"),
              (e.GR = "GR"),
              (e.GS = "GS"),
              (e.GT = "GT"),
              (e.GU = "GU"),
              (e.GW = "GW"),
              (e.GY = "GY"),
              (e.HK = "HK"),
              (e.HM = "HM"),
              (e.HN = "HN"),
              (e.HR = "HR"),
              (e.HT = "HT"),
              (e.HU = "HU"),
              (e.ID = "ID"),
              (e.IE = "IE"),
              (e.IL = "IL"),
              (e.IM = "IM"),
              (e.IN = "IN"),
              (e.IO = "IO"),
              (e.IQ = "IQ"),
              (e.IR = "IR"),
              (e.IS = "IS"),
              (e.IT = "IT"),
              (e.JE = "JE"),
              (e.JM = "JM"),
              (e.JO = "JO"),
              (e.JP = "JP"),
              (e.KE = "KE"),
              (e.KG = "KG"),
              (e.KH = "KH"),
              (e.KI = "KI"),
              (e.KM = "KM"),
              (e.KN = "KN"),
              (e.KP = "KP"),
              (e.KR = "KR"),
              (e.KW = "KW"),
              (e.KY = "KY"),
              (e.KZ = "KZ"),
              (e.LA = "LA"),
              (e.LB = "LB"),
              (e.LC = "LC"),
              (e.LI = "LI"),
              (e.LK = "LK"),
              (e.LR = "LR"),
              (e.LS = "LS"),
              (e.LT = "LT"),
              (e.LU = "LU"),
              (e.LV = "LV"),
              (e.LY = "LY"),
              (e.MA = "MA"),
              (e.MC = "MC"),
              (e.MD = "MD"),
              (e.ME = "ME"),
              (e.MF = "MF"),
              (e.MG = "MG"),
              (e.MH = "MH"),
              (e.MK = "MK"),
              (e.ML = "ML"),
              (e.MM = "MM"),
              (e.MN = "MN"),
              (e.MO = "MO"),
              (e.MP = "MP"),
              (e.MQ = "MQ"),
              (e.MR = "MR"),
              (e.MS = "MS"),
              (e.MT = "MT"),
              (e.MU = "MU"),
              (e.MV = "MV"),
              (e.MW = "MW"),
              (e.MX = "MX"),
              (e.MY = "MY"),
              (e.MZ = "MZ"),
              (e.NA = "NA"),
              (e.NC = "NC"),
              (e.NE = "NE"),
              (e.NF = "NF"),
              (e.NG = "NG"),
              (e.NI = "NI"),
              (e.NL = "NL"),
              (e.NO = "NO"),
              (e.NP = "NP"),
              (e.NR = "NR"),
              (e.NU = "NU"),
              (e.NZ = "NZ"),
              (e.OM = "OM"),
              (e.PA = "PA"),
              (e.PE = "PE"),
              (e.PF = "PF"),
              (e.PG = "PG"),
              (e.PH = "PH"),
              (e.PK = "PK"),
              (e.PL = "PL"),
              (e.PM = "PM"),
              (e.PN = "PN"),
              (e.PR = "PR"),
              (e.PS = "PS"),
              (e.PT = "PT"),
              (e.PW = "PW"),
              (e.PY = "PY"),
              (e.QA = "QA"),
              (e.RE = "RE"),
              (e.RO = "RO"),
              (e.RS = "RS"),
              (e.RU = "RU"),
              (e.RW = "RW"),
              (e.SA = "SA"),
              (e.SB = "SB"),
              (e.SC = "SC"),
              (e.SD = "SD"),
              (e.SE = "SE"),
              (e.SG = "SG"),
              (e.SH = "SH"),
              (e.SI = "SI"),
              (e.SJ = "SJ"),
              (e.SK = "SK"),
              (e.SL = "SL"),
              (e.SM = "SM"),
              (e.SN = "SN"),
              (e.SO = "SO"),
              (e.SR = "SR"),
              (e.ST = "ST"),
              (e.SV = "SV"),
              (e.SY = "SY"),
              (e.SZ = "SZ"),
              (e.TC = "TC"),
              (e.TD = "TD"),
              (e.TF = "TF"),
              (e.TG = "TG"),
              (e.TH = "TH"),
              (e.TJ = "TJ"),
              (e.TK = "TK"),
              (e.TL = "TL"),
              (e.TM = "TM"),
              (e.TN = "TN"),
              (e.TO = "TO"),
              (e.TR = "TR"),
              (e.TT = "TT"),
              (e.TV = "TV"),
              (e.TW = "TW"),
              (e.TZ = "TZ"),
              (e.UA = "UA"),
              (e.UG = "UG"),
              (e.UM = "UM"),
              (e.US = "US"),
              (e.UY = "UY"),
              (e.UZ = "UZ"),
              (e.VA = "VA"),
              (e.VC = "VC"),
              (e.VE = "VE"),
              (e.VG = "VG"),
              (e.VI = "VI"),
              (e.VN = "VN"),
              (e.VU = "VU"),
              (e.WF = "WF"),
              (e.WS = "WS"),
              (e.XK = "XK"),
              (e.YE = "YE"),
              (e.YT = "YT"),
              (e.ZA = "ZA"),
              (e.ZM = "ZM"),
              (e.ZW = "ZW");
          })(T || (T = {}));
        var I = s(7165);
        const N = [
            "crawled",
            "xs",
            "sm",
            "sm@2x",
            "md",
            "md.tiff",
            "xmd",
            "xmd@2x",
            "l",
            "l@2x",
            "xl",
            "xl@2x",
            "46x30",
            "46x30@2x",
            "50x33",
            "50x33@2x",
            "56x56",
            "56x56@2x",
            "118x98",
            "118x98@2x",
            "160x106",
            "160x106@2x"
          ],
          R = (I.z.enum(N), N.reduce((e, t) => e.setKey(t, I.z.string().optional().nullable()), I.z.object({}))),
          D = I.z.object({ backgroundColor: I.z.string(), mainColor: I.z.string(), urls: R }),
          M = I.z.map(I.z.string(), D);
        var w, L, U, F, j;
        !(function (e) {
          (e.Black = "BLACK"),
            (e.Blue1 = "BLUE1"),
            (e.Blue2 = "BLUE2"),
            (e.Gold = "GOLD"),
            (e.Green1 = "GREEN1"),
            (e.Green2 = "GREEN2"),
            (e.Orange = "ORANGE"),
            (e.Red = "RED"),
            (e.Silver = "SILVER"),
            (e.White = "WHITE");
        })(w || (w = {})),
          (function (e) {
            (e.Perso = "PERSO"), (e.Pro = "PRO"), (e.NoType = "NO_TYPE");
          })(L || (L = {})),
          (function (e) {
            (e.Mr = "MR"), (e.Mrs = "MRS"), (e.Miss = "MISS"), (e.Ms = "MS"), (e.Mx = "MX"), (e.NoneOfThese = "NONEOFTHESE");
          })(U || (U = {})),
          (function (e) {
            (e.Any = "ANY"),
              (e.Fax = "FAX"),
              (e.Landline = "LANDLINE"),
              (e.Mobile = "MOBILE"),
              (e.WorkFax = "WORKFAX"),
              (e.WorkLandline = "WORKLANDLINE"),
              (e.WorkMobile = "WORKMOBILE");
          })(F || (F = {})),
          (function (e) {
            (e.BLUE = "BLUE"),
              (e.BROWN = "BROWN"),
              (e.GRAY = "GRAY"),
              (e.GREEN = "GREEN"),
              (e.ORANGE = "ORANGE"),
              (e.PINK = "PINK"),
              (e.PURPLE = "PURPLE"),
              (e.RED = "RED"),
              (e.YELLOW = "YELLOW");
          })(j || (j = {}));
        const k = I.z.object({
          color: I.z.string(),
          isSecured: I.z.boolean(),
          title: I.z.string(),
          content: I.z.string(),
          categoryId: I.z.string()
        });
        var G;
        !(function (e) {
          (e.Address = "KWAddress"),
            (e.BankAccount = "KWBankStatement"),
            (e.Company = "KWCompany"),
            (e.Credential = "KWAuthentifiant"),
            (e.DriversLicense = "KWDriverLicence"),
            (e.Email = "KWEmail"),
            (e.FiscalId = "KWFiscalStatement"),
            (e.IdCard = "KWIDCard"),
            (e.Identity = "KWIdentity"),
            (e.Passkey = "KWPasskey"),
            (e.Passport = "KWPassport"),
            (e.PaymentCard = "KWPaymentMean_creditCard"),
            (e.Phone = "KWPhone"),
            (e.Secret = "KWSecret"),
            (e.SecureNote = "KWSecureNote"),
            (e.SocialSecurityId = "KWSocialSecurityStatement"),
            (e.Website = "KWPersonalWebsite");
        })(G || (G = {}));
        const x = {
          [G.Address]: "addressesResult",
          [G.BankAccount]: "bankAccountsResult",
          [G.Company]: "companiesResult",
          [G.Credential]: "credentialsResult",
          [G.DriversLicense]: "driversLicensesResult",
          [G.Email]: "emailsResult",
          [G.FiscalId]: "fiscalIdsResult",
          [G.IdCard]: "idCardsResult",
          [G.Identity]: "identitiesResult",
          [G.Passkey]: "passkeysResult",
          [G.Passport]: "passportsResult",
          [G.PaymentCard]: "paymentCardsResult",
          [G.Phone]: "phonesResult",
          [G.Secret]: "secretsResult",
          [G.SecureNote]: "secureNotesResult",
          [G.SocialSecurityId]: "socialSecurityIdsResult",
          [G.Website]: "websitesResult"
        };
        class B extends (0, n.g)({ scope: i.F.User }) {}
        class W extends (0, f.k)({ scope: i.F.User }) {}
        const K = (0, o.Q)({
          name: "vaultNotifications",
          commands: { setVaultNotificationsStatus: B },
          events: {},
          queries: { getVaultNotificationsStatus: W }
        });
        class Q extends (0, n.g)({ scope: i.F.User }) {}
        class V extends (0, n.g)({ scope: i.F.User }) {}
        class H extends (0, n.g)({ scope: i.F.User }) {}
        var Y;
        !(function (e) {
          (e.SUBSTRACT_VAULT_ITEMS = "subtract_vault_items"), (e.APPEND_VAULT_ITEMS = "append_vault_items");
        })(Y || (Y = {}));
        class Z extends (0, n.g)({ scope: i.F.User }) {}
        class q extends (0, f.k)({ scope: i.F.User }) {}
        const z = (0, o.Q)({
          name: "vaultOrganization",
          commands: { deleteCollection: Q, createCollection: V, migrateCategories: H, updateCollection: Z },
          events: {},
          queries: { queryCollections: q }
        });
        class X extends (0, C.E)(z) {}
        (0, C.K)(z, X);
        class J extends (0, f.k)({ scope: i.F.User }) {}
        const $ = (0, o.Q)({ name: "vaultSearch", commands: {}, events: {}, queries: { search: J } });
        class ee extends (0, f.k)({ scope: i.F.User }) {}
        class te extends (0, f.k)({ scope: i.F.User }) {}
        const se = (0, o.Q)({
          name: "passwordLimit",
          commands: {},
          events: {},
          queries: { canUserAddNewPassword: ee, getPasswordLimitStatus: te }
        });
      },
      7204: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.analyticsApi = t.TrackPageViewCommand = t.TrackEventCommand = void 0);
        const r = s(5888),
          o = s(986);
        class n extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
        t.TrackEventCommand = n;
        class i extends (0, o.defineCommand)({ scope: o.UseCaseScope.Device }) {}
        (t.TrackPageViewCommand = i),
          (t.analyticsApi = (0, r.defineModuleApi)({
            commands: { TrackEventCommand: n, TrackPageViewCommand: i },
            events: {},
            name: "analytics",
            queries: {}
          }));
      },
      7022: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2389: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(7204), t), o(s(7022), t);
      },
      2142: (e, t) => {
        "use strict";
        function s(e) {
          const t = (e) => ({
              build: () => e,
              withMockedCommand: (s, r) => ((e.commands[s] = r), t(e)),
              withMockedQuery: (s, r) => ((e.queries[s] = r), t(e))
            }),
            s = { commands: {}, queries: {} };
          for (const t of Object.keys(e.commands))
            s.commands[t] = jest.fn(() => {
              throw new Error(`command ${t} of module ${e.name} is called but not mocked`);
            });
          for (const t of Object.keys(e.queries))
            s.queries[t] = jest.fn(() => {
              throw new Error(`query ${t} of module ${e.name} is called but not mocked`);
            });
          return t(s);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.appClientMockBuilder = void 0),
          (t.appClientMockBuilder = function () {
            const e = new Map(),
              t = {
                withModule: (r, o) => {
                  const n = r.name;
                  if (void 0 === o) {
                    const o = s(r).build();
                    return e.set(n, o), t;
                  }
                  if ("function" == typeof o) {
                    const i = s(r);
                    return e.set(n, o(i).build()), t;
                  }
                  return e.set(n, o), t;
                },
                build: (t) => {
                  const r = t ? Object.keys(t) : [...e.keys()];
                  return Array.from(r).reduce(
                    (r, o) => ({ ...r, [o]: e.get(o) ?? s(t ? t[o].api : { name: "", commands: {}, events: {}, queries: {} }).build() }),
                    {}
                  );
                }
              };
            return t;
          });
      },
      4833: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.appClientMockBuilder = void 0);
        var r = s(2142);
        Object.defineProperty(t, "appClientMockBuilder", {
          enumerable: !0,
          get: function () {
            return r.appClientMockBuilder;
          }
        });
      },
      4072: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandMessage = void 0);
        const r = s(8653);
        class o extends r.RequestMessage {
          constructor(e) {
            super(), (this.body = e);
          }
        }
        t.CommandMessage = o;
      },
      8653: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UseCaseScope = t.RequestMessage = void 0),
          (t.RequestMessage = class {}),
          ((s = t.UseCaseScope || (t.UseCaseScope = {})).User = "user"),
          (s.Device = "device");
      },
      5088: (e, t) => {
        "use strict";
        var s;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EMPTY_QUERY_RESULT = t.PAGINATION_START_PAGE_INDEX = t.FilterOperationName = void 0),
          ((s = t.FilterOperationName || (t.FilterOperationName = {})).Equals = "equals"),
          (s.Differs = "differs"),
          (s.Matches = "matches"),
          (s.In = "in"),
          (s.Contains = "contains"),
          (t.PAGINATION_START_PAGE_INDEX = 1),
          (t.EMPTY_QUERY_RESULT = { items: [], itemCount: 0, page: t.PAGINATION_START_PAGE_INDEX, pageCount: 1 });
      },
      7939: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineCarbonCommand = t.defineCommand = void 0);
        const r = s(4072),
          o = s(8653);
        (t.defineCommand = (...[e = { scope: o.UseCaseScope.User }]) => {
          var t;
          return ((t = class extends r.CommandMessage {}).metadata = e), t;
        }),
          (t.defineCarbonCommand = (e = { scope: o.UseCaseScope.User }) => {
            var t;
            return ((t = class extends r.CommandMessage {}).metadata = e), t;
          });
      },
      1941: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineQuery = void 0);
        const r = s(522),
          o = s(8653);
        t.defineQuery = (e = { scope: o.UseCaseScope.User }) => {
          var t;
          return ((t = class extends r.QueryMessage {}).metadata = e), t;
        };
      },
      986: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defineQuery =
            t.defineCarbonCommand =
            t.defineCommand =
            t.UseCaseScope =
            t.FilterOperationName =
            t.EMPTY_QUERY_RESULT =
            t.PAGINATION_START_PAGE_INDEX =
            t.QueryMessage =
            t.CommandMessage =
              void 0);
        var r = s(4072);
        Object.defineProperty(t, "CommandMessage", {
          enumerable: !0,
          get: function () {
            return r.CommandMessage;
          }
        });
        var o = s(522);
        Object.defineProperty(t, "QueryMessage", {
          enumerable: !0,
          get: function () {
            return o.QueryMessage;
          }
        });
        var n = s(5088);
        Object.defineProperty(t, "PAGINATION_START_PAGE_INDEX", {
          enumerable: !0,
          get: function () {
            return n.PAGINATION_START_PAGE_INDEX;
          }
        });
        var i = s(5088);
        Object.defineProperty(t, "EMPTY_QUERY_RESULT", {
          enumerable: !0,
          get: function () {
            return i.EMPTY_QUERY_RESULT;
          }
        }),
          Object.defineProperty(t, "FilterOperationName", {
            enumerable: !0,
            get: function () {
              return i.FilterOperationName;
            }
          });
        var a = s(8653);
        Object.defineProperty(t, "UseCaseScope", {
          enumerable: !0,
          get: function () {
            return a.UseCaseScope;
          }
        });
        var c = s(7939);
        Object.defineProperty(t, "defineCommand", {
          enumerable: !0,
          get: function () {
            return c.defineCommand;
          }
        }),
          Object.defineProperty(t, "defineCarbonCommand", {
            enumerable: !0,
            get: function () {
              return c.defineCarbonCommand;
            }
          });
        var l = s(1941);
        Object.defineProperty(t, "defineQuery", {
          enumerable: !0,
          get: function () {
            return l.defineQuery;
          }
        });
      },
      522: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueryMessage = void 0);
        const r = s(8653);
        class o extends r.RequestMessage {
          constructor(e) {
            super(), (this.body = e);
          }
        }
        t.QueryMessage = o;
      },
      9631: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventMessage = t.defineEvent = void 0);
        var r = s(4776);
        Object.defineProperty(t, "defineEvent", {
          enumerable: !0,
          get: function () {
            return r.defineEvent;
          }
        }),
          Object.defineProperty(t, "EventMessage", {
            enumerable: !0,
            get: function () {
              return r.EventMessage;
            }
          });
      },
      4776: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineEvent = t.EventMessage = void 0);
        const r = s(8653);
        class o {
          constructor(e) {
            this.body = e;
          }
        }
        (t.EventMessage = o),
          (t.defineEvent = (e = { scope: r.UseCaseScope.User }) => {
            var t;
            return ((t = class extends o {}).metadata = e), t;
          });
      },
      693: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(2389), t),
          o(s(986), t),
          o(s(5079), t),
          o(s(5888), t),
          o(s(9631), t),
          o(s(4833), t);
      },
      5079: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6518), t);
      },
      2397: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
        const r = s(5888),
          o = s(6609),
          n = s(7797);
        t.taskTrackingApi = (0, r.defineModuleApi)({
          name: "taskTracking",
          commands: { startTaskTracking: o.StartTaskTrackingCommand, terminateTaskTracking: n.TerminateTaskTrackingCommand },
          events: {},
          queries: {}
        });
      },
      9948: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(s(6609), t), o(s(7797), t);
      },
      6609: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartTaskTrackingCommand = void 0);
        const r = s(986);
        class o extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
        t.StartTaskTrackingCommand = o;
      },
      7797: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.TerminateTaskTrackingCommand = void 0);
        const r = s(986);
        class o extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
        t.TerminateTaskTrackingCommand = o;
      },
      6518: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.taskTrackingApi = void 0);
        var n = s(2397);
        Object.defineProperty(t, "taskTrackingApi", {
          enumerable: !0,
          get: function () {
            return n.taskTrackingApi;
          }
        }),
          o(s(9948), t);
      },
      7286: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      4164: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.featureFlipsApi = t.UserFeatureFlipQuery = t.UserFeatureFlipsQuery = void 0);
        const r = s(986),
          o = s(8369);
        class n extends (0, r.defineQuery)({ scope: r.UseCaseScope.User }) {}
        t.UserFeatureFlipsQuery = n;
        class i extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
        (t.UserFeatureFlipQuery = i),
          (t.featureFlipsApi = (0, o.defineModuleApi)({
            commands: {},
            events: {},
            name: "featureFlips",
            queries: { UserFeatureFlipsQuery: n, UserFeatureFlipQuery: i }
          }));
      },
      1057: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FeatureFlipsClient = void 0);
        const r = s(3767),
          o = s(4164);
        class n extends (0, r.defineModuleClient)(o.featureFlipsApi) {}
        (t.FeatureFlipsClient = n), (0, r.registerModuleClient)(o.featureFlipsApi, n);
      },
      5888: function (e, t, s) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, r) {
                  void 0 === r && (r = s);
                  var o = Object.getOwnPropertyDescriptor(t, s);
                  (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      }
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, s, r) {
                  void 0 === r && (r = s), (e[r] = t[s]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var s in e) "default" === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(s(8369), t),
          o(s(1697), t),
          o(s(7286), t),
          o(s(6964), t),
          o(s(3767), t),
          o(s(4164), t),
          o(s(1057), t),
          o(s(7646), t);
      },
      3767: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.registerModuleClient = t.defineModuleClient = void 0),
          (t.defineModuleClient = function (e) {
            var t;
            return (
              ((t = class {
                get commands() {
                  throw new Error("Not implemented");
                }
                get queries() {
                  throw new Error("Not implemented");
                }
              }).api = e),
              t
            );
          }),
          (t.registerModuleClient = function (e, t) {
            e.ClientClass = t;
          });
      },
      8369: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.defineModuleApi = void 0);
        const s = (e, t) =>
          Object.entries(e).reduce(
            (e, [s, r]) => (
              (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = r), e
            ),
            {}
          );
        t.defineModuleApi = (e) => ({
          name: e.name,
          commands: s(e.commands, "Command"),
          queries: s(e.queries, "Query"),
          events: s(e.events, "Event")
        });
      },
      6964: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.requestContextApi = t.ActiveUserSetEvent = t.SetActiveUserCommand = t.ActiveUserQuery = void 0);
        const r = s(986),
          o = s(9631),
          n = s(8369);
        class i extends (0, r.defineQuery)({ scope: r.UseCaseScope.Device }) {}
        t.ActiveUserQuery = i;
        class a extends (0, r.defineCommand)({ scope: r.UseCaseScope.Device }) {}
        t.SetActiveUserCommand = a;
        class c extends (0, o.defineEvent)({ scope: r.UseCaseScope.User }) {}
        (t.ActiveUserSetEvent = c),
          (t.requestContextApi = (0, n.defineModuleApi)({
            commands: { SetActiveUserCommand: a },
            events: { activeUserSet: c },
            name: "requestContext",
            queries: { ActiveUserQuery: i }
          }));
      },
      7646: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.RequestContextClient = void 0);
        const r = s(3767),
          o = s(6964);
        class n extends (0, r.defineModuleClient)(o.requestContextApi) {}
        (t.RequestContextClient = n), (0, r.registerModuleClient)(o.requestContextApi, n);
      },
      1697: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NullModuleApi = void 0),
          (t.NullModuleApi = { name: "api", commands: {}, events: {}, queries: {} });
      },
      5029: (e, t, s) => {
        "use strict";
        s.d(t, { F: () => o, z: () => r });
        class r {}
        var o;
        !(function (e) {
          (e.User = "user"), (e.Device = "device");
        })(o || (o = {}));
      },
      4354: (e, t, s) => {
        "use strict";
        s.d(t, { g: () => n });
        var r = s(5029);
        class o extends r.z {
          constructor(e) {
            super(), (this.body = e);
          }
        }
        const n = (...[e = { scope: r.F.User }]) => {
          var t;
          return ((t = class extends o {}).metadata = e), t;
        };
      },
      9059: (e, t, s) => {
        "use strict";
        s.d(t, { k: () => n });
        var r = s(5029);
        class o extends r.z {
          constructor(e) {
            super(), (this.body = e);
          }
        }
        const n = (e = { scope: r.F.User }) => {
          var t;
          return ((t = class extends o {}).metadata = e), t;
        };
      },
      8885: (e, t, s) => {
        "use strict";
        s.d(t, { d: () => n });
        var r = s(5029);
        class o {
          constructor(e) {
            this.body = e;
          }
        }
        const n = (e = { scope: r.F.User }) => {
          var t;
          return ((t = class extends o {}).metadata = e), t;
        };
      },
      7837: (e, t, s) => {
        "use strict";
        function r(e) {
          var t;
          return (
            ((t = class {
              get commands() {
                throw new Error("Not implemented");
              }
              get queries() {
                throw new Error("Not implemented");
              }
            }).api = e),
            t
          );
        }
        function o(e, t) {
          e.ClientClass = t;
        }
        s.d(t, { E: () => r, K: () => o });
      },
      6952: (e, t, s) => {
        "use strict";
        s.d(t, { Q: () => o });
        const r = (e, t) =>
            Object.entries(e).reduce(
              (e, [s, r]) => (
                (e[((e, t) => (e.endsWith(t) ? e.charAt(0).toLowerCase() + e.substring(1, e.length - t.length) : e))(s, t)] = r), e
              ),
              {}
            ),
          o = (e) => ({ name: e.name, commands: r(e.commands, "Command"), queries: r(e.queries, "Query"), events: r(e.events, "Event") });
      },
      6168: (e, t, s) => {
        "use strict";
        s.d(t, { Hu: () => r });
        const r = (e, t) =>
          class extends Error {
            constructor() {
              super(t), (this.tag = e);
            }
          };
      },
      7165: (e, t, s) => {
        "use strict";
        var r;
        s.d(t, { z: () => qe }),
          (function (e) {
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
                  r = {};
                for (const e of s) r[e] = t[e];
                return e.objectValues(r);
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
          })(r || (r = {}));
        const o = r.arrayToEnum([
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
          n = (e) => {
            switch (typeof e) {
              case "undefined":
                return o.undefined;
              case "string":
                return o.string;
              case "number":
                return isNaN(e) ? o.nan : o.number;
              case "boolean":
                return o.boolean;
              case "function":
                return o.function;
              case "bigint":
                return o.bigint;
              case "object":
                return Array.isArray(e)
                  ? o.array
                  : null === e
                  ? o.null
                  : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch
                  ? o.promise
                  : "undefined" != typeof Map && e instanceof Map
                  ? o.map
                  : "undefined" != typeof Set && e instanceof Set
                  ? o.set
                  : "undefined" != typeof Date && e instanceof Date
                  ? o.date
                  : o.object;
              default:
                return o.unknown;
            }
          },
          i = r.arrayToEnum([
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
        class a extends Error {
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
              r = (e) => {
                for (const o of e.issues)
                  if ("invalid_union" === o.code) o.unionErrors.map(r);
                  else if ("invalid_return_type" === o.code) r(o.returnTypeError);
                  else if ("invalid_arguments" === o.code) r(o.argumentsError);
                  else if (0 === o.path.length) s._errors.push(t(o));
                  else {
                    let e = s,
                      r = 0;
                    for (; r < o.path.length; ) {
                      const s = o.path[r];
                      r === o.path.length - 1
                        ? ((e[s] = e[s] || { _errors: [] }), e[s]._errors.push(t(o)))
                        : (e[s] = e[s] || { _errors: [] }),
                        (e = e[s]),
                        r++;
                    }
                  }
              };
            return r(this), s;
          }
          toString() {
            return this.message;
          }
          get message() {
            return JSON.stringify(this.issues, r.jsonStringifyReplacer, 2);
          }
          get isEmpty() {
            return 0 === this.issues.length;
          }
          flatten(e = (e) => e.message) {
            const t = {},
              s = [];
            for (const r of this.issues) r.path.length > 0 ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r))) : s.push(e(r));
            return { formErrors: s, fieldErrors: t };
          }
          get formErrors() {
            return this.flatten();
          }
        }
        a.create = (e) => new a(e);
        const c = (e, t) => {
          let s;
          switch (e.code) {
            case i.invalid_type:
              s = e.received === o.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
              break;
            case i.invalid_literal:
              s = `Invalid literal value, expected ${JSON.stringify(e.expected, r.jsonStringifyReplacer)}`;
              break;
            case i.unrecognized_keys:
              s = `Unrecognized key(s) in object: ${r.joinValues(e.keys, ", ")}`;
              break;
            case i.invalid_union:
              s = "Invalid input";
              break;
            case i.invalid_union_discriminator:
              s = `Invalid discriminator value. Expected ${r.joinValues(e.options)}`;
              break;
            case i.invalid_enum_value:
              s = `Invalid enum value. Expected ${r.joinValues(e.options)}, received '${e.received}'`;
              break;
            case i.invalid_arguments:
              s = "Invalid function arguments";
              break;
            case i.invalid_return_type:
              s = "Invalid function return type";
              break;
            case i.invalid_date:
              s = "Invalid date";
              break;
            case i.invalid_string:
              "object" == typeof e.validation
                ? "startsWith" in e.validation
                  ? (s = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                  ? (s = `Invalid input: must end with "${e.validation.endsWith}"`)
                  : r.assertNever(e.validation)
                : (s = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid");
              break;
            case i.too_small:
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
            case i.too_big:
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
            case i.custom:
              s = "Invalid input";
              break;
            case i.invalid_intersection_types:
              s = "Intersection results could not be merged";
              break;
            case i.not_multiple_of:
              s = `Number must be a multiple of ${e.multipleOf}`;
              break;
            default:
              (s = t.defaultError), r.assertNever(e);
          }
          return { message: s };
        };
        let l = c;
        function u() {
          return l;
        }
        const d = (e) => {
          const { data: t, path: s, errorMaps: r, issueData: o } = e,
            n = [...s, ...(o.path || [])],
            i = { ...o, path: n };
          let a = "";
          const c = r
            .filter((e) => !!e)
            .slice()
            .reverse();
          for (const e of c) a = e(i, { data: t, defaultError: a }).message;
          return { ...o, path: n, message: o.message || a };
        };
        function p(e, t) {
          const s = d({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, u(), c].filter((e) => !!e)
          });
          e.common.issues.push(s);
        }
        class _ {
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
            for (const r of t) {
              if ("aborted" === r.status) return S;
              "dirty" === r.status && e.dirty(), s.push(r.value);
            }
            return { status: e.value, value: s };
          }
          static async mergeObjectAsync(e, t) {
            const s = [];
            for (const e of t) s.push({ key: await e.key, value: await e.value });
            return _.mergeObjectSync(e, s);
          }
          static mergeObjectSync(e, t) {
            const s = {};
            for (const r of t) {
              const { key: t, value: o } = r;
              if ("aborted" === t.status) return S;
              if ("aborted" === o.status) return S;
              "dirty" === t.status && e.dirty(),
                "dirty" === o.status && e.dirty(),
                (void 0 !== o.value || r.alwaysSet) && (s[t.value] = o.value);
            }
            return { status: e.value, value: s };
          }
        }
        const S = Object.freeze({ status: "aborted" }),
          v = (e) => ({ status: "valid", value: e }),
          m = (e) => "aborted" === e.status,
          f = (e) => "dirty" === e.status,
          E = (e) => "valid" === e.status,
          O = (e) => void 0 !== typeof Promise && e instanceof Promise;
        var h;
        !(function (e) {
          (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
            (e.toString = (e) => ("string" == typeof e ? e : null == e ? void 0 : e.message));
        })(h || (h = {}));
        class g {
          constructor(e, t, s, r) {
            (this.parent = e), (this.data = t), (this._path = s), (this._key = r);
          }
          get path() {
            return this._path.concat(this._key);
          }
        }
        const y = (e, t) => {
          if (E(t)) return { success: !0, data: t.value };
          if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
          return { success: !1, error: new a(e.common.issues) };
        };
        function b(e) {
          if (!e) return {};
          const { errorMap: t, invalid_type_error: s, required_error: r, description: o } = e;
          if (t && (s || r)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
          return t
            ? { errorMap: t, description: o }
            : {
                errorMap: (e, t) =>
                  "invalid_type" !== e.code
                    ? { message: t.defaultError }
                    : void 0 === t.data
                    ? { message: null != r ? r : t.defaultError }
                    : { message: null != s ? s : t.defaultError },
                description: o
              };
        }
        class A {
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
            return n(e.data);
          }
          _getOrReturnCtx(e, t) {
            return (
              t || {
                common: e.parent.common,
                data: e.data,
                parsedType: n(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
              }
            );
          }
          _processInputParams(e) {
            return {
              status: new _(),
              ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: n(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
              }
            };
          }
          _parseSync(e) {
            const t = this._parse(e);
            if (O(t)) throw new Error("Synchronous parse encountered promise.");
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
            const r = {
                common: {
                  issues: [],
                  async: null !== (s = null == t ? void 0 : t.async) && void 0 !== s && s,
                  contextualErrorMap: null == t ? void 0 : t.errorMap
                },
                path: (null == t ? void 0 : t.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: n(e)
              },
              o = this._parseSync({ data: e, path: r.path, parent: r });
            return y(r, o);
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
                parsedType: n(e)
              },
              r = this._parse({ data: e, path: [], parent: s }),
              o = await (O(r) ? r : Promise.resolve(r));
            return y(s, o);
          }
          refine(e, t) {
            const s = (e) => ("string" == typeof t || void 0 === t ? { message: t } : "function" == typeof t ? t(e) : t);
            return this._refinement((t, r) => {
              const o = e(t),
                n = () => r.addIssue({ code: i.custom, ...s(t) });
              return "undefined" != typeof Promise && o instanceof Promise ? o.then((e) => !!e || (n(), !1)) : !!o || (n(), !1);
            });
          }
          refinement(e, t) {
            return this._refinement((s, r) => !!e(s) || (r.addIssue("function" == typeof t ? t(s, r) : t), !1));
          }
          _refinement(e) {
            return new ie({ schema: this, typeName: ve.ZodEffects, effect: { type: "refinement", refinement: e } });
          }
          optional() {
            return ae.create(this);
          }
          nullable() {
            return ce.create(this);
          }
          nullish() {
            return this.optional().nullable();
          }
          array() {
            return x.create(this);
          }
          promise() {
            return ne.create(this);
          }
          or(e) {
            return V.create([this, e]);
          }
          and(e) {
            return Z.create(this, e);
          }
          transform(e) {
            return new ie({ schema: this, typeName: ve.ZodEffects, effect: { type: "transform", transform: e } });
          }
          default(e) {
            return new le({ innerType: this, defaultValue: "function" == typeof e ? e : () => e, typeName: ve.ZodDefault });
          }
          brand() {
            return new pe({ typeName: ve.ZodBranded, type: this, ...b(void 0) });
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
        const T = /^c[^\s-]{8,}$/i,
          C = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
          P = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        class I extends A {
          constructor() {
            super(...arguments),
              (this._regex = (e, t, s) => this.refinement((t) => e.test(t), { validation: t, code: i.invalid_string, ...h.errToObj(s) })),
              (this.nonempty = (e) => this.min(1, h.errToObj(e))),
              (this.trim = () => new I({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] }));
          }
          _parse(e) {
            if (this._getType(e) !== o.string) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.string, received: t.parsedType }), S;
            }
            const t = new _();
            let s;
            for (const o of this._def.checks)
              if ("min" === o.kind)
                e.data.length < o.value &&
                  ((s = this._getOrReturnCtx(e, s)),
                  p(s, { code: i.too_small, minimum: o.value, type: "string", inclusive: !0, message: o.message }),
                  t.dirty());
              else if ("max" === o.kind)
                e.data.length > o.value &&
                  ((s = this._getOrReturnCtx(e, s)),
                  p(s, { code: i.too_big, maximum: o.value, type: "string", inclusive: !0, message: o.message }),
                  t.dirty());
              else if ("email" === o.kind)
                P.test(e.data) ||
                  ((s = this._getOrReturnCtx(e, s)), p(s, { validation: "email", code: i.invalid_string, message: o.message }), t.dirty());
              else if ("uuid" === o.kind)
                C.test(e.data) ||
                  ((s = this._getOrReturnCtx(e, s)), p(s, { validation: "uuid", code: i.invalid_string, message: o.message }), t.dirty());
              else if ("cuid" === o.kind)
                T.test(e.data) ||
                  ((s = this._getOrReturnCtx(e, s)), p(s, { validation: "cuid", code: i.invalid_string, message: o.message }), t.dirty());
              else if ("url" === o.kind)
                try {
                  new URL(e.data);
                } catch (r) {
                  (s = this._getOrReturnCtx(e, s)), p(s, { validation: "url", code: i.invalid_string, message: o.message }), t.dirty();
                }
              else
                "regex" === o.kind
                  ? ((o.regex.lastIndex = 0),
                    o.regex.test(e.data) ||
                      ((s = this._getOrReturnCtx(e, s)),
                      p(s, { validation: "regex", code: i.invalid_string, message: o.message }),
                      t.dirty()))
                  : "trim" === o.kind
                  ? (e.data = e.data.trim())
                  : "startsWith" === o.kind
                  ? e.data.startsWith(o.value) ||
                    ((s = this._getOrReturnCtx(e, s)),
                    p(s, { code: i.invalid_string, validation: { startsWith: o.value }, message: o.message }),
                    t.dirty())
                  : "endsWith" === o.kind
                  ? e.data.endsWith(o.value) ||
                    ((s = this._getOrReturnCtx(e, s)),
                    p(s, { code: i.invalid_string, validation: { endsWith: o.value }, message: o.message }),
                    t.dirty())
                  : r.assertNever(o);
            return { status: t.value, value: e.data };
          }
          _addCheck(e) {
            return new I({ ...this._def, checks: [...this._def.checks, e] });
          }
          email(e) {
            return this._addCheck({ kind: "email", ...h.errToObj(e) });
          }
          url(e) {
            return this._addCheck({ kind: "url", ...h.errToObj(e) });
          }
          uuid(e) {
            return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
          }
          cuid(e) {
            return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
          }
          regex(e, t) {
            return this._addCheck({ kind: "regex", regex: e, ...h.errToObj(t) });
          }
          startsWith(e, t) {
            return this._addCheck({ kind: "startsWith", value: e, ...h.errToObj(t) });
          }
          endsWith(e, t) {
            return this._addCheck({ kind: "endsWith", value: e, ...h.errToObj(t) });
          }
          min(e, t) {
            return this._addCheck({ kind: "min", value: e, ...h.errToObj(t) });
          }
          max(e, t) {
            return this._addCheck({ kind: "max", value: e, ...h.errToObj(t) });
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
        function N(e, t) {
          const s = (e.toString().split(".")[1] || "").length,
            r = (t.toString().split(".")[1] || "").length,
            o = s > r ? s : r;
          return (parseInt(e.toFixed(o).replace(".", "")) % parseInt(t.toFixed(o).replace(".", ""))) / Math.pow(10, o);
        }
        I.create = (e) => new I({ checks: [], typeName: ve.ZodString, ...b(e) });
        class R extends A {
          constructor() {
            super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
          }
          _parse(e) {
            if (this._getType(e) !== o.number) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.number, received: t.parsedType }), S;
            }
            let t;
            const s = new _();
            for (const o of this._def.checks)
              "int" === o.kind
                ? r.isInteger(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, { code: i.invalid_type, expected: "integer", received: "float", message: o.message }),
                  s.dirty())
                : "min" === o.kind
                ? (o.inclusive ? e.data < o.value : e.data <= o.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, { code: i.too_small, minimum: o.value, type: "number", inclusive: o.inclusive, message: o.message }),
                  s.dirty())
                : "max" === o.kind
                ? (o.inclusive ? e.data > o.value : e.data >= o.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, { code: i.too_big, maximum: o.value, type: "number", inclusive: o.inclusive, message: o.message }),
                  s.dirty())
                : "multipleOf" === o.kind
                ? 0 !== N(e.data, o.value) &&
                  ((t = this._getOrReturnCtx(e, t)), p(t, { code: i.not_multiple_of, multipleOf: o.value, message: o.message }), s.dirty())
                : r.assertNever(o);
            return { status: s.value, value: e.data };
          }
          gte(e, t) {
            return this.setLimit("min", e, !0, h.toString(t));
          }
          gt(e, t) {
            return this.setLimit("min", e, !1, h.toString(t));
          }
          lte(e, t) {
            return this.setLimit("max", e, !0, h.toString(t));
          }
          lt(e, t) {
            return this.setLimit("max", e, !1, h.toString(t));
          }
          setLimit(e, t, s, r) {
            return new R({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: h.toString(r) }] });
          }
          _addCheck(e) {
            return new R({ ...this._def, checks: [...this._def.checks, e] });
          }
          int(e) {
            return this._addCheck({ kind: "int", message: h.toString(e) });
          }
          positive(e) {
            return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: h.toString(e) });
          }
          negative(e) {
            return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: h.toString(e) });
          }
          nonpositive(e) {
            return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: h.toString(e) });
          }
          nonnegative(e) {
            return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: h.toString(e) });
          }
          multipleOf(e, t) {
            return this._addCheck({ kind: "multipleOf", value: e, message: h.toString(t) });
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
        R.create = (e) => new R({ checks: [], typeName: ve.ZodNumber, ...b(e) });
        class D extends A {
          _parse(e) {
            if (this._getType(e) !== o.bigint) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.bigint, received: t.parsedType }), S;
            }
            return v(e.data);
          }
        }
        D.create = (e) => new D({ typeName: ve.ZodBigInt, ...b(e) });
        class M extends A {
          _parse(e) {
            if (this._getType(e) !== o.boolean) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.boolean, received: t.parsedType }), S;
            }
            return v(e.data);
          }
        }
        M.create = (e) => new M({ typeName: ve.ZodBoolean, ...b(e) });
        class w extends A {
          _parse(e) {
            if (this._getType(e) !== o.date) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.date, received: t.parsedType }), S;
            }
            if (isNaN(e.data.getTime())) return p(this._getOrReturnCtx(e), { code: i.invalid_date }), S;
            const t = new _();
            let s;
            for (const o of this._def.checks)
              "min" === o.kind
                ? e.data.getTime() < o.value &&
                  ((s = this._getOrReturnCtx(e, s)),
                  p(s, { code: i.too_small, message: o.message, inclusive: !0, minimum: o.value, type: "date" }),
                  t.dirty())
                : "max" === o.kind
                ? e.data.getTime() > o.value &&
                  ((s = this._getOrReturnCtx(e, s)),
                  p(s, { code: i.too_big, message: o.message, inclusive: !0, maximum: o.value, type: "date" }),
                  t.dirty())
                : r.assertNever(o);
            return { status: t.value, value: new Date(e.data.getTime()) };
          }
          _addCheck(e) {
            return new w({ ...this._def, checks: [...this._def.checks, e] });
          }
          min(e, t) {
            return this._addCheck({ kind: "min", value: e.getTime(), message: h.toString(t) });
          }
          max(e, t) {
            return this._addCheck({ kind: "max", value: e.getTime(), message: h.toString(t) });
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
        w.create = (e) => new w({ checks: [], typeName: ve.ZodDate, ...b(e) });
        class L extends A {
          _parse(e) {
            if (this._getType(e) !== o.undefined) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.undefined, received: t.parsedType }), S;
            }
            return v(e.data);
          }
        }
        L.create = (e) => new L({ typeName: ve.ZodUndefined, ...b(e) });
        class U extends A {
          _parse(e) {
            if (this._getType(e) !== o.null) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.null, received: t.parsedType }), S;
            }
            return v(e.data);
          }
        }
        U.create = (e) => new U({ typeName: ve.ZodNull, ...b(e) });
        class F extends A {
          constructor() {
            super(...arguments), (this._any = !0);
          }
          _parse(e) {
            return v(e.data);
          }
        }
        F.create = (e) => new F({ typeName: ve.ZodAny, ...b(e) });
        class j extends A {
          constructor() {
            super(...arguments), (this._unknown = !0);
          }
          _parse(e) {
            return v(e.data);
          }
        }
        j.create = (e) => new j({ typeName: ve.ZodUnknown, ...b(e) });
        class k extends A {
          _parse(e) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: i.invalid_type, expected: o.never, received: t.parsedType }), S;
          }
        }
        k.create = (e) => new k({ typeName: ve.ZodNever, ...b(e) });
        class G extends A {
          _parse(e) {
            if (this._getType(e) !== o.undefined) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.void, received: t.parsedType }), S;
            }
            return v(e.data);
          }
        }
        G.create = (e) => new G({ typeName: ve.ZodVoid, ...b(e) });
        class x extends A {
          _parse(e) {
            const { ctx: t, status: s } = this._processInputParams(e),
              r = this._def;
            if (t.parsedType !== o.array) return p(t, { code: i.invalid_type, expected: o.array, received: t.parsedType }), S;
            if (
              (null !== r.minLength &&
                t.data.length < r.minLength.value &&
                (p(t, { code: i.too_small, minimum: r.minLength.value, type: "array", inclusive: !0, message: r.minLength.message }),
                s.dirty()),
              null !== r.maxLength &&
                t.data.length > r.maxLength.value &&
                (p(t, { code: i.too_big, maximum: r.maxLength.value, type: "array", inclusive: !0, message: r.maxLength.message }),
                s.dirty()),
              t.common.async)
            )
              return Promise.all(t.data.map((e, s) => r.type._parseAsync(new g(t, e, t.path, s)))).then((e) => _.mergeArray(s, e));
            const n = t.data.map((e, s) => r.type._parseSync(new g(t, e, t.path, s)));
            return _.mergeArray(s, n);
          }
          get element() {
            return this._def.type;
          }
          min(e, t) {
            return new x({ ...this._def, minLength: { value: e, message: h.toString(t) } });
          }
          max(e, t) {
            return new x({ ...this._def, maxLength: { value: e, message: h.toString(t) } });
          }
          length(e, t) {
            return this.min(e, t).max(e, t);
          }
          nonempty(e) {
            return this.min(1, e);
          }
        }
        var B;
        (x.create = (e, t) => new x({ type: e, minLength: null, maxLength: null, typeName: ve.ZodArray, ...b(t) })),
          (function (e) {
            e.mergeShapes = (e, t) => ({ ...e, ...t });
          })(B || (B = {}));
        const W = (e) => (t) => new Q({ ...e, shape: () => ({ ...e.shape(), ...t }) });
        function K(e) {
          if (e instanceof Q) {
            const t = {};
            for (const s in e.shape) {
              const r = e.shape[s];
              t[s] = ae.create(K(r));
            }
            return new Q({ ...e._def, shape: () => t });
          }
          return e instanceof x
            ? x.create(K(e.element))
            : e instanceof ae
            ? ae.create(K(e.unwrap()))
            : e instanceof ce
            ? ce.create(K(e.unwrap()))
            : e instanceof q
            ? q.create(e.items.map((e) => K(e)))
            : e;
        }
        class Q extends A {
          constructor() {
            super(...arguments),
              (this._cached = null),
              (this.nonstrict = this.passthrough),
              (this.augment = W(this._def)),
              (this.extend = W(this._def));
          }
          _getCached() {
            if (null !== this._cached) return this._cached;
            const e = this._def.shape(),
              t = r.objectKeys(e);
            return (this._cached = { shape: e, keys: t });
          }
          _parse(e) {
            if (this._getType(e) !== o.object) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.object, received: t.parsedType }), S;
            }
            const { status: t, ctx: s } = this._processInputParams(e),
              { shape: r, keys: n } = this._getCached(),
              a = [];
            if (!(this._def.catchall instanceof k && "strip" === this._def.unknownKeys)) for (const e in s.data) n.includes(e) || a.push(e);
            const c = [];
            for (const e of n) {
              const t = r[e],
                o = s.data[e];
              c.push({ key: { status: "valid", value: e }, value: t._parse(new g(s, o, s.path, e)), alwaysSet: e in s.data });
            }
            if (this._def.catchall instanceof k) {
              const e = this._def.unknownKeys;
              if ("passthrough" === e)
                for (const e of a) c.push({ key: { status: "valid", value: e }, value: { status: "valid", value: s.data[e] } });
              else if ("strict" === e) a.length > 0 && (p(s, { code: i.unrecognized_keys, keys: a }), t.dirty());
              else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
            } else {
              const e = this._def.catchall;
              for (const t of a) {
                const r = s.data[t];
                c.push({ key: { status: "valid", value: t }, value: e._parse(new g(s, r, s.path, t)), alwaysSet: t in s.data });
              }
            }
            return s.common.async
              ? Promise.resolve()
                  .then(async () => {
                    const e = [];
                    for (const t of c) {
                      const s = await t.key;
                      e.push({ key: s, value: await t.value, alwaysSet: t.alwaysSet });
                    }
                    return e;
                  })
                  .then((e) => _.mergeObjectSync(t, e))
              : _.mergeObjectSync(t, c);
          }
          get shape() {
            return this._def.shape();
          }
          strict(e) {
            return (
              h.errToObj,
              new Q({
                ...this._def,
                unknownKeys: "strict",
                ...(void 0 !== e
                  ? {
                      errorMap: (t, s) => {
                        var r, o, n, i;
                        const a =
                          null !== (n = null === (o = (r = this._def).errorMap) || void 0 === o ? void 0 : o.call(r, t, s).message) &&
                          void 0 !== n
                            ? n
                            : s.defaultError;
                        return "unrecognized_keys" === t.code
                          ? { message: null !== (i = h.errToObj(e).message) && void 0 !== i ? i : a }
                          : { message: a };
                      }
                    }
                  : {})
              })
            );
          }
          strip() {
            return new Q({ ...this._def, unknownKeys: "strip" });
          }
          passthrough() {
            return new Q({ ...this._def, unknownKeys: "passthrough" });
          }
          setKey(e, t) {
            return this.augment({ [e]: t });
          }
          merge(e) {
            return new Q({
              unknownKeys: e._def.unknownKeys,
              catchall: e._def.catchall,
              shape: () => B.mergeShapes(this._def.shape(), e._def.shape()),
              typeName: ve.ZodObject
            });
          }
          catchall(e) {
            return new Q({ ...this._def, catchall: e });
          }
          pick(e) {
            const t = {};
            return (
              r.objectKeys(e).map((e) => {
                this.shape[e] && (t[e] = this.shape[e]);
              }),
              new Q({ ...this._def, shape: () => t })
            );
          }
          omit(e) {
            const t = {};
            return (
              r.objectKeys(this.shape).map((s) => {
                -1 === r.objectKeys(e).indexOf(s) && (t[s] = this.shape[s]);
              }),
              new Q({ ...this._def, shape: () => t })
            );
          }
          deepPartial() {
            return K(this);
          }
          partial(e) {
            const t = {};
            if (e)
              return (
                r.objectKeys(this.shape).map((s) => {
                  -1 === r.objectKeys(e).indexOf(s) ? (t[s] = this.shape[s]) : (t[s] = this.shape[s].optional());
                }),
                new Q({ ...this._def, shape: () => t })
              );
            for (const e in this.shape) {
              const s = this.shape[e];
              t[e] = s.optional();
            }
            return new Q({ ...this._def, shape: () => t });
          }
          required() {
            const e = {};
            for (const t in this.shape) {
              let s = this.shape[t];
              for (; s instanceof ae; ) s = s._def.innerType;
              e[t] = s;
            }
            return new Q({ ...this._def, shape: () => e });
          }
          keyof() {
            return se(r.objectKeys(this.shape));
          }
        }
        (Q.create = (e, t) => new Q({ shape: () => e, unknownKeys: "strip", catchall: k.create(), typeName: ve.ZodObject, ...b(t) })),
          (Q.strictCreate = (e, t) =>
            new Q({ shape: () => e, unknownKeys: "strict", catchall: k.create(), typeName: ve.ZodObject, ...b(t) })),
          (Q.lazycreate = (e, t) => new Q({ shape: e, unknownKeys: "strip", catchall: k.create(), typeName: ve.ZodObject, ...b(t) }));
        class V extends A {
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
                const s = e.map((e) => new a(e.ctx.common.issues));
                return p(t, { code: i.invalid_union, unionErrors: s }), S;
              });
            {
              let e;
              const r = [];
              for (const o of s) {
                const s = { ...t, common: { ...t.common, issues: [] }, parent: null },
                  n = o._parseSync({ data: t.data, path: t.path, parent: s });
                if ("valid" === n.status) return n;
                "dirty" !== n.status || e || (e = { result: n, ctx: s }), s.common.issues.length && r.push(s.common.issues);
              }
              if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
              const o = r.map((e) => new a(e));
              return p(t, { code: i.invalid_union, unionErrors: o }), S;
            }
          }
          get options() {
            return this._def.options;
          }
        }
        V.create = (e, t) => new V({ options: e, typeName: ve.ZodUnion, ...b(t) });
        class H extends A {
          _parse(e) {
            const { ctx: t } = this._processInputParams(e);
            if (t.parsedType !== o.object) return p(t, { code: i.invalid_type, expected: o.object, received: t.parsedType }), S;
            const s = this.discriminator,
              r = t.data[s],
              n = this.options.get(r);
            return n
              ? t.common.async
                ? n._parseAsync({ data: t.data, path: t.path, parent: t })
                : n._parseSync({ data: t.data, path: t.path, parent: t })
              : (p(t, { code: i.invalid_union_discriminator, options: this.validDiscriminatorValues, path: [s] }), S);
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
            const r = new Map();
            try {
              t.forEach((t) => {
                const s = t.shape[e].value;
                r.set(s, t);
              });
            } catch (e) {
              throw new Error("The discriminator value could not be extracted from all the provided schemas");
            }
            if (r.size !== t.length) throw new Error("Some of the discriminator values are not unique");
            return new H({ typeName: ve.ZodDiscriminatedUnion, discriminator: e, options: r, ...b(s) });
          }
        }
        function Y(e, t) {
          const s = n(e),
            i = n(t);
          if (e === t) return { valid: !0, data: e };
          if (s === o.object && i === o.object) {
            const s = r.objectKeys(t),
              o = r.objectKeys(e).filter((e) => -1 !== s.indexOf(e)),
              n = { ...e, ...t };
            for (const s of o) {
              const r = Y(e[s], t[s]);
              if (!r.valid) return { valid: !1 };
              n[s] = r.data;
            }
            return { valid: !0, data: n };
          }
          if (s === o.array && i === o.array) {
            if (e.length !== t.length) return { valid: !1 };
            const s = [];
            for (let r = 0; r < e.length; r++) {
              const o = Y(e[r], t[r]);
              if (!o.valid) return { valid: !1 };
              s.push(o.data);
            }
            return { valid: !0, data: s };
          }
          return s === o.date && i === o.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
        }
        class Z extends A {
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e),
              r = (e, r) => {
                if (m(e) || m(r)) return S;
                const o = Y(e.value, r.value);
                return o.valid
                  ? ((f(e) || f(r)) && t.dirty(), { status: t.value, value: o.data })
                  : (p(s, { code: i.invalid_intersection_types }), S);
              };
            return s.common.async
              ? Promise.all([
                  this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
                  this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })
                ]).then(([e, t]) => r(e, t))
              : r(
                  this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
                  this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
                );
          }
        }
        Z.create = (e, t, s) => new Z({ left: e, right: t, typeName: ve.ZodIntersection, ...b(s) });
        class q extends A {
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e);
            if (s.parsedType !== o.array) return p(s, { code: i.invalid_type, expected: o.array, received: s.parsedType }), S;
            if (s.data.length < this._def.items.length)
              return p(s, { code: i.too_small, minimum: this._def.items.length, inclusive: !0, type: "array" }), S;
            !this._def.rest &&
              s.data.length > this._def.items.length &&
              (p(s, { code: i.too_big, maximum: this._def.items.length, inclusive: !0, type: "array" }), t.dirty());
            const r = s.data
              .map((e, t) => {
                const r = this._def.items[t] || this._def.rest;
                return r ? r._parse(new g(s, e, s.path, t)) : null;
              })
              .filter((e) => !!e);
            return s.common.async ? Promise.all(r).then((e) => _.mergeArray(t, e)) : _.mergeArray(t, r);
          }
          get items() {
            return this._def.items;
          }
          rest(e) {
            return new q({ ...this._def, rest: e });
          }
        }
        q.create = (e, t) => {
          if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
          return new q({ items: e, typeName: ve.ZodTuple, rest: null, ...b(t) });
        };
        class z extends A {
          get keySchema() {
            return this._def.keyType;
          }
          get valueSchema() {
            return this._def.valueType;
          }
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e);
            if (s.parsedType !== o.object) return p(s, { code: i.invalid_type, expected: o.object, received: s.parsedType }), S;
            const r = [],
              n = this._def.keyType,
              a = this._def.valueType;
            for (const e in s.data) r.push({ key: n._parse(new g(s, e, s.path, e)), value: a._parse(new g(s, s.data[e], s.path, e)) });
            return s.common.async ? _.mergeObjectAsync(t, r) : _.mergeObjectSync(t, r);
          }
          get element() {
            return this._def.valueType;
          }
          static create(e, t, s) {
            return new z(
              t instanceof A
                ? { keyType: e, valueType: t, typeName: ve.ZodRecord, ...b(s) }
                : { keyType: I.create(), valueType: e, typeName: ve.ZodRecord, ...b(t) }
            );
          }
        }
        class X extends A {
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e);
            if (s.parsedType !== o.map) return p(s, { code: i.invalid_type, expected: o.map, received: s.parsedType }), S;
            const r = this._def.keyType,
              n = this._def.valueType,
              a = [...s.data.entries()].map(([e, t], o) => ({
                key: r._parse(new g(s, e, s.path, [o, "key"])),
                value: n._parse(new g(s, t, s.path, [o, "value"]))
              }));
            if (s.common.async) {
              const e = new Map();
              return Promise.resolve().then(async () => {
                for (const s of a) {
                  const r = await s.key,
                    o = await s.value;
                  if ("aborted" === r.status || "aborted" === o.status) return S;
                  ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(), e.set(r.value, o.value);
                }
                return { status: t.value, value: e };
              });
            }
            {
              const e = new Map();
              for (const s of a) {
                const r = s.key,
                  o = s.value;
                if ("aborted" === r.status || "aborted" === o.status) return S;
                ("dirty" !== r.status && "dirty" !== o.status) || t.dirty(), e.set(r.value, o.value);
              }
              return { status: t.value, value: e };
            }
          }
        }
        X.create = (e, t, s) => new X({ valueType: t, keyType: e, typeName: ve.ZodMap, ...b(s) });
        class J extends A {
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e);
            if (s.parsedType !== o.set) return p(s, { code: i.invalid_type, expected: o.set, received: s.parsedType }), S;
            const r = this._def;
            null !== r.minSize &&
              s.data.size < r.minSize.value &&
              (p(s, { code: i.too_small, minimum: r.minSize.value, type: "set", inclusive: !0, message: r.minSize.message }), t.dirty()),
              null !== r.maxSize &&
                s.data.size > r.maxSize.value &&
                (p(s, { code: i.too_big, maximum: r.maxSize.value, type: "set", inclusive: !0, message: r.maxSize.message }), t.dirty());
            const n = this._def.valueType;
            function a(e) {
              const s = new Set();
              for (const r of e) {
                if ("aborted" === r.status) return S;
                "dirty" === r.status && t.dirty(), s.add(r.value);
              }
              return { status: t.value, value: s };
            }
            const c = [...s.data.values()].map((e, t) => n._parse(new g(s, e, s.path, t)));
            return s.common.async ? Promise.all(c).then((e) => a(e)) : a(c);
          }
          min(e, t) {
            return new J({ ...this._def, minSize: { value: e, message: h.toString(t) } });
          }
          max(e, t) {
            return new J({ ...this._def, maxSize: { value: e, message: h.toString(t) } });
          }
          size(e, t) {
            return this.min(e, t).max(e, t);
          }
          nonempty(e) {
            return this.min(1, e);
          }
        }
        J.create = (e, t) => new J({ valueType: e, minSize: null, maxSize: null, typeName: ve.ZodSet, ...b(t) });
        class $ extends A {
          constructor() {
            super(...arguments), (this.validate = this.implement);
          }
          _parse(e) {
            const { ctx: t } = this._processInputParams(e);
            if (t.parsedType !== o.function) return p(t, { code: i.invalid_type, expected: o.function, received: t.parsedType }), S;
            function s(e, s) {
              return d({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, u(), c].filter((e) => !!e),
                issueData: { code: i.invalid_arguments, argumentsError: s }
              });
            }
            function r(e, s) {
              return d({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, u(), c].filter((e) => !!e),
                issueData: { code: i.invalid_return_type, returnTypeError: s }
              });
            }
            const n = { errorMap: t.common.contextualErrorMap },
              l = t.data;
            return this._def.returns instanceof ne
              ? v(async (...e) => {
                  const t = new a([]),
                    o = await this._def.args.parseAsync(e, n).catch((r) => {
                      throw (t.addIssue(s(e, r)), t);
                    }),
                    i = await l(...o);
                  return await this._def.returns._def.type.parseAsync(i, n).catch((e) => {
                    throw (t.addIssue(r(i, e)), t);
                  });
                })
              : v((...e) => {
                  const t = this._def.args.safeParse(e, n);
                  if (!t.success) throw new a([s(e, t.error)]);
                  const o = l(...t.data),
                    i = this._def.returns.safeParse(o, n);
                  if (!i.success) throw new a([r(o, i.error)]);
                  return i.data;
                });
          }
          parameters() {
            return this._def.args;
          }
          returnType() {
            return this._def.returns;
          }
          args(...e) {
            return new $({ ...this._def, args: q.create(e).rest(j.create()) });
          }
          returns(e) {
            return new $({ ...this._def, returns: e });
          }
          implement(e) {
            return this.parse(e);
          }
          strictImplement(e) {
            return this.parse(e);
          }
          static create(e, t, s) {
            return new $({ args: e || q.create([]).rest(j.create()), returns: t || j.create(), typeName: ve.ZodFunction, ...b(s) });
          }
        }
        class ee extends A {
          get schema() {
            return this._def.getter();
          }
          _parse(e) {
            const { ctx: t } = this._processInputParams(e);
            return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
          }
        }
        ee.create = (e, t) => new ee({ getter: e, typeName: ve.ZodLazy, ...b(t) });
        class te extends A {
          _parse(e) {
            return e.data !== this._def.value
              ? (p(this._getOrReturnCtx(e), { code: i.invalid_literal, expected: this._def.value }), S)
              : { status: "valid", value: e.data };
          }
          get value() {
            return this._def.value;
          }
        }
        function se(e, t) {
          return new re({ values: e, typeName: ve.ZodEnum, ...b(t) });
        }
        te.create = (e, t) => new te({ value: e, typeName: ve.ZodLiteral, ...b(t) });
        class re extends A {
          _parse(e) {
            if ("string" != typeof e.data) {
              const t = this._getOrReturnCtx(e),
                s = this._def.values;
              return p(t, { expected: r.joinValues(s), received: t.parsedType, code: i.invalid_type }), S;
            }
            if (-1 === this._def.values.indexOf(e.data)) {
              const t = this._getOrReturnCtx(e),
                s = this._def.values;
              return p(t, { received: t.data, code: i.invalid_enum_value, options: s }), S;
            }
            return v(e.data);
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
        re.create = se;
        class oe extends A {
          _parse(e) {
            const t = r.getValidEnumValues(this._def.values),
              s = this._getOrReturnCtx(e);
            if (s.parsedType !== o.string && s.parsedType !== o.number) {
              const e = r.objectValues(t);
              return p(s, { expected: r.joinValues(e), received: s.parsedType, code: i.invalid_type }), S;
            }
            if (-1 === t.indexOf(e.data)) {
              const e = r.objectValues(t);
              return p(s, { received: s.data, code: i.invalid_enum_value, options: e }), S;
            }
            return v(e.data);
          }
          get enum() {
            return this._def.values;
          }
        }
        oe.create = (e, t) => new oe({ values: e, typeName: ve.ZodNativeEnum, ...b(t) });
        class ne extends A {
          _parse(e) {
            const { ctx: t } = this._processInputParams(e);
            if (t.parsedType !== o.promise && !1 === t.common.async)
              return p(t, { code: i.invalid_type, expected: o.promise, received: t.parsedType }), S;
            const s = t.parsedType === o.promise ? t.data : Promise.resolve(t.data);
            return v(s.then((e) => this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap })));
          }
        }
        ne.create = (e, t) => new ne({ type: e, typeName: ve.ZodPromise, ...b(t) });
        class ie extends A {
          innerType() {
            return this._def.schema;
          }
          _parse(e) {
            const { status: t, ctx: s } = this._processInputParams(e),
              o = this._def.effect || null;
            if ("preprocess" === o.type) {
              const e = o.transform(s.data);
              return s.common.async
                ? Promise.resolve(e).then((e) => this._def.schema._parseAsync({ data: e, path: s.path, parent: s }))
                : this._def.schema._parseSync({ data: e, path: s.path, parent: s });
            }
            const n = {
              addIssue: (e) => {
                p(s, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return s.path;
              }
            };
            if (((n.addIssue = n.addIssue.bind(n)), "refinement" === o.type)) {
              const e = (e) => {
                const t = o.refinement(e, n);
                if (s.common.async) return Promise.resolve(t);
                if (t instanceof Promise)
                  throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return e;
              };
              if (!1 === s.common.async) {
                const r = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
                return "aborted" === r.status ? S : ("dirty" === r.status && t.dirty(), e(r.value), { status: t.value, value: r.value });
              }
              return this._def.schema
                ._parseAsync({ data: s.data, path: s.path, parent: s })
                .then((s) =>
                  "aborted" === s.status
                    ? S
                    : ("dirty" === s.status && t.dirty(), e(s.value).then(() => ({ status: t.value, value: s.value })))
                );
            }
            if ("transform" === o.type) {
              if (!1 === s.common.async) {
                const e = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
                if (!E(e)) return e;
                const r = o.transform(e.value, n);
                if (r instanceof Promise)
                  throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return { status: t.value, value: r };
              }
              return this._def.schema
                ._parseAsync({ data: s.data, path: s.path, parent: s })
                .then((e) => (E(e) ? Promise.resolve(o.transform(e.value, n)).then((e) => ({ status: t.value, value: e })) : e));
            }
            r.assertNever(o);
          }
        }
        (ie.create = (e, t, s) => new ie({ schema: e, typeName: ve.ZodEffects, effect: t, ...b(s) })),
          (ie.createWithPreprocess = (e, t, s) =>
            new ie({ schema: t, effect: { type: "preprocess", transform: e }, typeName: ve.ZodEffects, ...b(s) }));
        class ae extends A {
          _parse(e) {
            return this._getType(e) === o.undefined ? v(void 0) : this._def.innerType._parse(e);
          }
          unwrap() {
            return this._def.innerType;
          }
        }
        ae.create = (e, t) => new ae({ innerType: e, typeName: ve.ZodOptional, ...b(t) });
        class ce extends A {
          _parse(e) {
            return this._getType(e) === o.null ? v(null) : this._def.innerType._parse(e);
          }
          unwrap() {
            return this._def.innerType;
          }
        }
        ce.create = (e, t) => new ce({ innerType: e, typeName: ve.ZodNullable, ...b(t) });
        class le extends A {
          _parse(e) {
            const { ctx: t } = this._processInputParams(e);
            let s = t.data;
            return (
              t.parsedType === o.undefined && (s = this._def.defaultValue()),
              this._def.innerType._parse({ data: s, path: t.path, parent: t })
            );
          }
          removeDefault() {
            return this._def.innerType;
          }
        }
        le.create = (e, t) => new ae({ innerType: e, typeName: ve.ZodOptional, ...b(t) });
        class ue extends A {
          _parse(e) {
            if (this._getType(e) !== o.nan) {
              const t = this._getOrReturnCtx(e);
              return p(t, { code: i.invalid_type, expected: o.nan, received: t.parsedType }), S;
            }
            return { status: "valid", value: e.data };
          }
        }
        ue.create = (e) => new ue({ typeName: ve.ZodNaN, ...b(e) });
        const de = Symbol("zod_brand");
        class pe extends A {
          _parse(e) {
            const { ctx: t } = this._processInputParams(e),
              s = t.data;
            return this._def.type._parse({ data: s, path: t.path, parent: t });
          }
          unwrap() {
            return this._def.type;
          }
        }
        const _e = (e, t = {}, s) =>
            e
              ? F.create().superRefine((r, o) => {
                  if (!e(r)) {
                    const e = "function" == typeof t ? t(r) : t,
                      n = "string" == typeof e ? { message: e } : e;
                    o.addIssue({ code: "custom", ...n, fatal: s });
                  }
                })
              : F.create(),
          Se = { object: Q.lazycreate };
        var ve;
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
        })(ve || (ve = {}));
        const me = I.create,
          fe = R.create,
          Ee = ue.create,
          Oe = D.create,
          he = M.create,
          ge = w.create,
          ye = L.create,
          be = U.create,
          Ae = F.create,
          Te = j.create,
          Ce = k.create,
          Pe = G.create,
          Ie = x.create,
          Ne = Q.create,
          Re = Q.strictCreate,
          De = V.create,
          Me = H.create,
          we = Z.create,
          Le = q.create,
          Ue = z.create,
          Fe = X.create,
          je = J.create,
          ke = $.create,
          Ge = ee.create,
          xe = te.create,
          Be = re.create,
          We = oe.create,
          Ke = ne.create,
          Qe = ie.create,
          Ve = ae.create,
          He = ce.create,
          Ye = ie.createWithPreprocess,
          Ze = S;
        var qe = Object.freeze({
          __proto__: null,
          getParsedType: n,
          ZodParsedType: o,
          defaultErrorMap: c,
          setErrorMap: function (e) {
            l = e;
          },
          getErrorMap: u,
          makeIssue: d,
          EMPTY_PATH: [],
          addIssueToContext: p,
          ParseStatus: _,
          INVALID: S,
          DIRTY: (e) => ({ status: "dirty", value: e }),
          OK: v,
          isAborted: m,
          isDirty: f,
          isValid: E,
          isAsync: O,
          ZodType: A,
          ZodString: I,
          ZodNumber: R,
          ZodBigInt: D,
          ZodBoolean: M,
          ZodDate: w,
          ZodUndefined: L,
          ZodNull: U,
          ZodAny: F,
          ZodUnknown: j,
          ZodNever: k,
          ZodVoid: G,
          ZodArray: x,
          get objectUtil() {
            return B;
          },
          ZodObject: Q,
          ZodUnion: V,
          ZodDiscriminatedUnion: H,
          ZodIntersection: Z,
          ZodTuple: q,
          ZodRecord: z,
          ZodMap: X,
          ZodSet: J,
          ZodFunction: $,
          ZodLazy: ee,
          ZodLiteral: te,
          ZodEnum: re,
          ZodNativeEnum: oe,
          ZodPromise: ne,
          ZodEffects: ie,
          ZodTransformer: ie,
          ZodOptional: ae,
          ZodNullable: ce,
          ZodDefault: le,
          ZodNaN: ue,
          BRAND: de,
          ZodBranded: pe,
          custom: _e,
          Schema: A,
          ZodSchema: A,
          late: Se,
          get ZodFirstPartyTypeKind() {
            return ve;
          },
          any: Ae,
          array: Ie,
          bigint: Oe,
          boolean: he,
          date: ge,
          discriminatedUnion: Me,
          effect: Qe,
          enum: Be,
          function: ke,
          instanceof: (e, t = { message: `Input not instance of ${e.name}` }) => _e((t) => t instanceof e, t, !0),
          intersection: we,
          lazy: Ge,
          literal: xe,
          map: Fe,
          nan: Ee,
          nativeEnum: We,
          never: Ce,
          null: be,
          nullable: He,
          number: fe,
          object: Ne,
          oboolean: () => he().optional(),
          onumber: () => fe().optional(),
          optional: Ve,
          ostring: () => me().optional(),
          preprocess: Ye,
          promise: Ke,
          record: Ue,
          set: je,
          strictObject: Re,
          string: me,
          transformer: Qe,
          tuple: Le,
          undefined: ye,
          union: De,
          unknown: Te,
          void: Pe,
          NEVER: Ze,
          ZodIssueCode: i,
          quotelessJson: (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
          ZodError: a
        });
      }
    },
    t = {};
  function s(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var n = (t[r] = { exports: {} });
    return e[r].call(n.exports, n, n.exports, s), n.exports;
  }
  (s.amdO = {}),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (s.d = (e, t) => {
      for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      function e(e) {
        if ("undefined" == typeof chrome) return !1;
        const t = e.split(".").reduce((e, t) => e?.[t], chrome);
        return Boolean(t);
      }
      function t() {
        if (!e("runtime.getManifest")) throw new Error("No runtime.getManifest support");
        return chrome.runtime.getManifest();
      }
      var r,
        o = s(8473),
        n = s.n(o);
      function i() {
        return new (n())(
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
              [[n().BROWSER.NAME, "Avast"], n().BROWSER.VERSION],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i],
              [[n().BROWSER.NAME, "Edge"], n().BROWSER.VERSION]
            ]
          }
        ).getResult();
      }
      !(function (e) {
        (e.CHROME = "Chrome"), (e.FIREFOX = "Firefox"), (e.EDGE = "Edge"), (e.SAFARI = "Safari"), (e.OPERA = "Opera");
      })(r || (r = {}));
      var a = s(1796),
        c = s(3576);
      let l = (function (e) {
        return (
          (e.PopupCarbon = "Popup"),
          (e.PopupCarbonLoader = "PopupCarbonLoader"),
          (e.OptionsCarbon = "OptionsCarbon"),
          (e.WebappCarbon = "leeloo"),
          e
        );
      })({});
      class u extends a.GenericChannel {
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
        setup(t) {
          this.port && this.onDisconnectListener(),
            (this.port = (function (t) {
              if (!e("runtime.connect")) throw new Error("No runtime.connect support");
              return chrome.runtime.connect(t);
            })({ name: t })),
            this.port.onMessage.addListener(this.onMessageListener),
            this.port.onDisconnect.addListener(this.onDisconnectListener),
            this._connected();
        }
      }
      const { OptionsCarbon: d } = l,
        p = new u(d);
      p.connect();
      const _ = (0, a.combineEvents)(c.ExtensionCarbonConnector, c.CarbonApiConnector),
        S = (0, a.createEventBus)({ events: _, channels: [p] }),
        v = (e) => {
          const t = e.querySelector("#usage-consent");
          if (((s = t), !Boolean(s && s instanceof HTMLInputElement))) throw new Error("Missing checkbox.");
          var s;
          return { usageConsentCheckbox: t };
        },
        m = "extng.loginFlow.forceLegacyFallback",
        f = ({ target: e }) => {
          window.localStorage.setItem(m, String(e.checked));
        },
        { version: E, manifest_version: O, name: h, version_name: g } = t();
      (async () => {
        const e = await window.localStorage.getItem(m),
          t = document.getElementById("ext-ng-login-flow");
        (t.checked = "true" === e), (t.onchange = f);
        const s = document.getElementById("ext-ng-form");
        s?.classList.remove("hidden");
      })(),
        (async () => {
          (await S.getHasFeature("webproduct_extension_ShowUserConsentOptions")) &&
            (await (async () => {
              const e = document.getElementById("permissions-form");
              if (!(e && e instanceof HTMLFormElement)) throw new Error("Cannot find the permissions form. Was it accidentally removed?");
              await (async (e) => {
                var t;
                const { usageConsentCheckbox: s } = v(e);
                (null == (t = (await S.getGlobalExtensionSettings()).interactionDataConsent) || t) && s.setAttribute("checked", ""),
                  s.addEventListener("change", (t) =>
                    (async (e, t, s) => {
                      if (!(e.currentTarget instanceof HTMLInputElement)) throw new Error("event target is not an input element");
                      const { usageConsentCheckbox: r } = v(s),
                        { currentTarget: o } = e,
                        n = { interactionDataConsent: r.checked, personalDataConsent: !0 };
                      o.setAttribute("disabled", ""), await S.setGlobalExtensionSettings(n), o.removeAttribute("disabled");
                    })(t, 0, e)
                  ),
                  e.classList.remove("hidden");
              })(e);
            })());
        })(),
        document.getElementById("logo")?.setAttribute(
          "src",
          (() => {
            var e;
            const { icons: s } = t(),
              r = null != (e = s?.[48]) ? e : "";
            return (o = r).indexOf("://") > 0 || o.startsWith("//") ? r : `/${r}`;
            var o;
          })()
        ),
        [
          ["extension-name", h],
          ["version", `v${E}`],
          ["version-name", `${g}`],
          ["manifest-version", `MV${O}`],
          ["browser-name", i().browser.name ?? ""],
          ["browser-version", i().browser.version ?? ""]
        ].forEach(([e, t]) => {
          "undefined" === t && document.getElementById(e)?.closest("li")?.classList.add("hidden"),
            document.getElementById(e)?.appendChild(document.createTextNode(`${t}`));
        });
    })();
})();
