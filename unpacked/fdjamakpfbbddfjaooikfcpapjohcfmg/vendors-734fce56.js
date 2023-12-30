(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9342],
  {
    313110: (e, t, n) => {
      var r = n(173656),
        i = n(296704);
      function o(e, t, n) {
        (e =
          e ||
          function (e) {
            this.queue(e);
          }),
          (t =
            t ||
            function () {
              this.queue(null);
            });
        var o = !1,
          s = !1,
          a = [],
          u = !1,
          c = new i();
        function l() {
          for (; a.length && !c.paused; ) {
            var e = a.shift();
            if (null === e) return c.emit("end");
            c.emit("data", e);
          }
        }
        return (
          (c.readable = c.writable = !0),
          (c.paused = !1),
          (c.autoDestroy = !(n && !1 === n.autoDestroy)),
          (c.write = function (t) {
            return e.call(this, t), !c.paused;
          }),
          (c.queue = c.push =
            function (e) {
              return u || (null === e && (u = !0), a.push(e), l()), c;
            }),
          c.on("end", function () {
            (c.readable = !1),
              !c.writable &&
                c.autoDestroy &&
                r.nextTick(function () {
                  c.destroy();
                });
          }),
          (c.end = function (e) {
            if (!o)
              return (o = !0), arguments.length && c.write(e), (c.writable = !1), t.call(c), !c.readable && c.autoDestroy && c.destroy(), c;
          }),
          (c.destroy = function () {
            if (!s) return (s = !0), (o = !0), (a.length = 0), (c.writable = c.readable = !1), c.emit("close"), c;
          }),
          (c.pause = function () {
            if (!c.paused) return (c.paused = !0), c;
          }),
          (c.resume = function () {
            return c.paused && ((c.paused = !1), c.emit("resume")), l(), c.paused || c.emit("drain"), c;
          }),
          c
        );
      }
      (e.exports = o), (o.through = o);
    },
    182183: (e) => {
      function t() {}
      (t.prototype = {
        on: function (e, t, n) {
          var r = this.e || (this.e = {});
          return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
        },
        once: function (e, t, n) {
          var r = this;
          function i() {
            r.off(e, i), t.apply(n, arguments);
          }
          return (i._ = t), this.on(e, i, n);
        },
        emit: function (e) {
          for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++)
            n[r].fn.apply(n[r].ctx, t);
          return this;
        },
        off: function (e, t) {
          var n = this.e || (this.e = {}),
            r = n[e],
            i = [];
          if (r && t) for (var o = 0, s = r.length; o < s; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
          return i.length ? (n[e] = i) : delete n[e], this;
        }
      }),
        (e.exports = t),
        (e.exports.TinyEmitter = t);
    },
    432054: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = 8630 == n.j || null,
        i = "Invariant failed";
      const o =
        8630 == n.j
          ? function (e, t) {
              if (!e) {
                if (r) throw new Error(i);
                throw new Error(i + ": " + (t || ""));
              }
            }
          : null;
    },
    973248: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = 8630 == n.j || null;
      const i =
        8630 == n.j
          ? function (e, t) {
              if (!r) {
                if (e) return;
                var n = "Warning: " + t;
                "undefined" != typeof console && console.warn(n);
                try {
                  throw Error(n);
                } catch (e) {}
              }
            }
          : null;
    },
    771093: () => {},
    271515: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChunkedChannel = void 0);
      var r = n(542844),
        i = n(358489);
      const o = (e) => {
        if (!e.chunkId) throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(e)}`);
      };
      class s extends r.GenericChannel {
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
          const n = ((e) => {
              const t = new Uint16Array(e.length);
              for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
              return t;
            })(t),
            r = [...Array(30)].map(() => Math.random().toString(36)[3]).join("");
          this._sender({ type: "chunk_start", chunkId: r, size: t.length });
          const i = (e = 0) => {
            let t = n.slice(e, e + this._chunkSize);
            t.length && (this._sender({ type: "chunk_data", chunkId: r, data: Array.from(t) }), i(e + this._chunkSize));
          };
          i(), this._sender({ type: "chunk_end", chunkId: r });
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
          if ((o(e), this._buffer[e.chunkId])) throw new Error(`There was already an entry in the buffer for chunkId ${e.chunkId}`);
          this._buffer[e.chunkId] = { id: e.chunkId, chunks: [], size: e.size };
        }
        _receiveChunkData(e) {
          if ((o(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
          this._buffer[e.chunkId].chunks.push(e.data);
        }
        _mergeChunks(e) {
          if ((o(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
          const t = this._buffer[e.chunkId].chunks.reduce(
            (e, t, n) => (t.forEach((t, n) => (e.uintArray[e.currentIx + n] = t)), (e.currentIx += t.length), e),
            { uintArray: new Uint16Array(this._buffer[e.chunkId].size), currentIx: 0 }
          );
          let n;
          const r = ((e, t) => {
            if (-1 === t) return String.fromCharCode.apply(null, e);
            {
              let n = "";
              for (let r = 0; r < e.length; r += t)
                r + t > e.length
                  ? (n += String.fromCharCode.apply(null, e.subarray(r)))
                  : (n += String.fromCharCode.apply(null, e.subarray(r, r + t)));
              return n;
            }
          })(t.uintArray, this._maxStringAlloc);
          try {
            n = JSON.parse(r);
          } catch (e) {
            throw new Error(`Not a valid JSON string: ${r}`);
          }
          if (!(0, i.isTransportMessage)(n)) throw new Error(`Not a transport message: ${JSON.stringify(n)}`);
          return n;
        }
      }
      t.ChunkedChannel = s;
    },
    542844: (e, t) => {
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
    432374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DEFAULT_PARAM = void 0), (t.DEFAULT_PARAM = "$_DEFAULT_$");
    },
    488511: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.combineEvents = function (...e) {
          const t = e.reduce((e, t) => (e.push.apply(e, Object.keys(t)), e), []),
            n = [...new Set(t)];
          if (t.length > n.length) throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
          return Object.assign({}, ...e);
        }),
        (t.createEventBus = function (e) {
          const t = (e.channels || []).map((t) => new i.Transport(t, e.ignoredEvents)),
            n = {};
          for (const i in e.events)
            e.events.hasOwnProperty(i) &&
              (!e.ignoredEvents || (e.ignoredEvents && !e.ignoredEvents.includes(i))) &&
              (n[i] = (0, r.connectSlot)(i, t, e.events[i].config));
          return n;
        });
      var r = n(174414),
        i = n(978346);
    },
    378557: (e, t) => {
      "use strict";
      function n(e, t) {
        let n = null;
        try {
          n = e(t);
        } catch (e) {
          return Promise.reject(e);
        }
        return n && n.then ? n : Promise.resolve(n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.callHandlers = function (e, t) {
          return t && 0 !== t.length ? (1 === t.length ? n(t[0], e) : Promise.all(t.map((t) => n(t, e)))) : new Promise((e) => {});
        });
    },
    358489: (e, t) => {
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
    174414: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slot = function (e = s) {
          return a(e);
        }),
        (t.connectSlot = function (e, t, n = {}) {
          const o = t.reduce((e, t, n) => ({ ...e, [n]: {} }), { [u]: {} }),
            s = t.reduce((e, t, n) => ({ ...e, [n]: {} }), {}),
            a = (e, t) => {
              let n = () => {};
              const r = new Promise((e) => (n = e));
              s[e][t] = { registered: r, onRegister: n };
            },
            f = [],
            h = [],
            d = (e) => f.forEach((t) => t(e)),
            p = (e) => h.forEach((t) => t(e));
          return (
            t.forEach((t, n) => {
              t.addRemoteHandlerRegistrationCallback(e, (e = i.DEFAULT_PARAM, t) => {
                if (!s[n]) return;
                const r = o[n][e] || [];
                (o[n][e] = r.concat(t)), 1 === c(e, o).length && d(e), s[n][e] || a(String(n), e), s[n][e].onRegister();
              }),
                t.addRemoteHandlerUnregistrationCallback(e, (e = i.DEFAULT_PARAM, t) => {
                  const r = (o[n][e] || []).indexOf(t);
                  r > -1 && o[n][e].splice(r, 1), 0 === c(e, o).length && p(e), s[n] && a(String(n), e);
                }),
                t.addRemoteEventListChangedListener(e, () => {
                  s[n] &&
                    Object.keys(s[n]).forEach((e) => {
                      s[n][e].onRegister();
                    }),
                    delete s[n];
                });
            }),
            Object.assign(
              function (e, u) {
                const l = 2 === arguments.length,
                  f = l ? u : e,
                  h = l ? e : i.DEFAULT_PARAM,
                  d = () => {
                    const e = c(h, o);
                    return (0, r.callHandlers)(f, e);
                  };
                if (0 === t.length) return d();
                const p = [];
                if (
                  (n.autoReconnect &&
                    t.forEach((e) => {
                      p.push(e.autoReconnect());
                    }),
                  n.noBuffer)
                )
                  return Promise.all(p).then(() => d());
                {
                  t.forEach((e, t) => {
                    s[t] && !s[t][h] && a(String(t), h);
                  });
                  const e = t.reduce((e, t, n) => {
                    var r;
                    return [...e, ...(null !== (r = s[n] && [s[n][h].registered]) && void 0 !== r ? r : [])];
                  }, []);
                  return Promise.all(e).then(() => d());
                }
              },
              {
                on: function (n, r) {
                  let s = "",
                    a = () => new Promise((e) => e());
                  return (
                    "string" == typeof n ? ((s = n), (a = r || a)) : ((s = i.DEFAULT_PARAM), (a = n)),
                    t.forEach((t) => t.registerHandler(e, s, a)),
                    (o[u][s] = (o[u][s] || []).concat(a)),
                    1 === c(s, o).length && d(s),
                    () => {
                      t.forEach((t) => t.unregisterHandler(e, s, a));
                      const n = (o[u][s] || []).indexOf(a);
                      -1 !== n && o[u][s].splice(n, 1), 0 === c(s, o).length && p(s);
                    }
                  );
                },
                lazy: function (e, t) {
                  return (
                    f.push(e),
                    h.push(t),
                    l(o).forEach(e),
                    () => {
                      l(o).forEach(t);
                      const n = f.indexOf(e);
                      n > -1 && f.splice(n, 1);
                      const r = h.indexOf(t);
                      r > -1 && h.splice(r, 1);
                    }
                  );
                },
                config: n,
                slotName: e
              }
            )
          );
        }),
        (t.defaultSlotConfig = void 0);
      var r = n(378557),
        i = n(432374);
      const o = () => {
          throw new Error("Slot not connected");
        },
        s = { noBuffer: !1, autoReconnect: !0 };
      t.defaultSlotConfig = s;
      const a = (e) => Object.assign(() => o(), { config: e, lazy: () => o, on: () => o, slotName: "Not connected" }),
        u = "LOCAL_TRANSPORT",
        c = (e, t) => Object.keys(t).reduce((n, r) => n.concat(t[r][e] || []), []),
        l = (e) =>
          Object.keys(e).reduce((t, n) => {
            const r = e[n],
              i = [...t, ...Object.keys(r).filter((e) => (r[e] || []).length > 0)];
            return [...new Set(i)];
          }, []);
    },
    978346: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Transport = void 0);
      var r = n(378557);
      let i = 0;
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
        _requestReceived({ slotName: e, data: t, id: n, param: i }) {
          const o = this._localHandlers[e];
          if (!o) return;
          const s = o[i];
          s &&
            (0, r.callHandlers)(t, s)
              .then((t) => this._channel.send({ type: "response", slotName: e, id: n, data: t, param: i }))
              .catch((t) => this._channel.send({ id: n, message: `${t}`, param: i, slotName: e, stack: t.stack || "", type: "error" }));
        }
        _responseReceived({ slotName: e, data: t, id: n, param: r }) {
          const i = this._pendingRequests[e];
          i && i[r] && i[r][n] && (i[r][n].resolve(t), delete i[r][n]);
        }
        _errorReceived({ slotName: e, id: t, message: n, stack: r, param: i }) {
          const o = this._pendingRequests[e];
          if (!o || !o[i] || !o[i][t]) return;
          const s = new Error(`${n} on ${e} with param ${i}`);
          (s.stack = r || s.stack), this._pendingRequests[e][i][t].reject(s), delete this._pendingRequests[e][i][t];
        }
        _registerRemoteHandler({ slotName: e, param: t }) {
          const n = this._remoteHandlerRegistrationCallbacks[e];
          if (!n) return;
          const r = this._remoteHandlers[e];
          if (r && r[t]) return;
          const o = (n) =>
            new Promise((r, o) => {
              if (!this._channelReady) return o(new Error(`CHANNEL_NOT_READY on ${e}`));
              const s = "" + i++;
              (this._pendingRequests[e] = this._pendingRequests[e] || {}),
                (this._pendingRequests[e][t] = this._pendingRequests[e][t] || {}),
                (this._pendingRequests[e][t][s] = { resolve: r, reject: o }),
                this._channel.send({ type: "request", id: s, slotName: e, param: t, data: n }),
                setTimeout(() => {
                  const n = ((this._pendingRequests[e] || {})[t] || {})[s];
                  if (n) {
                    const r = new Error(`TIMED_OUT on ${e} with param ${t}`);
                    n.reject(r), delete this._pendingRequests[e][t][s];
                  }
                }, this._channel.timeout);
            });
          (this._remoteHandlers[e] = this._remoteHandlers[e] || {}), (this._remoteHandlers[e][t] = o), n(t, o);
        }
        _unregisterRemoteHandler({ slotName: e, param: t }) {
          const n = this._remoteHandlerDeletionCallbacks[e],
            r = this._remoteHandlers[e];
          if (!r) return;
          const i = r[t];
          i && n && (n(t, i), delete this._remoteHandlers[e][t]);
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
            Object.keys(this._pendingRequests[t]).forEach((n) => {
              Object.keys(this._pendingRequests[t][n]).forEach((r) => {
                this._pendingRequests[t][n][r].reject(e);
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
        registerHandler(e, t, n) {
          if (
            ((this._localHandlers[e] = this._localHandlers[e] || {}),
            (this._localHandlers[e][t] = this._localHandlers[e][t] || []),
            this._localHandlers[e][t].push(n),
            1 === this._localHandlers[e][t].length)
          ) {
            const n = { type: "handler_registered", param: t, slotName: e };
            (this._localHandlerRegistrations[t] = this._localHandlerRegistrations[t] || []),
              this._localHandlerRegistrations[t].push(n),
              this._channelReady && this._channel.send(n);
          }
        }
        unregisterHandler(e, t, n) {
          const r = this._localHandlers[e];
          if (r && r[t]) {
            const i = r[t].indexOf(n);
            if (i > -1 && (r[t].splice(i, 1), 0 === r[t].length)) {
              const n = { type: "handler_unregistered", param: t, slotName: e };
              this._channelReady && this._channel.send(n);
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
    71796: (e, t, n) => {
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
            return i.EventDeclaration;
          }
        }),
        Object.defineProperty(t, "combineEvents", {
          enumerable: !0,
          get: function () {
            return i.combineEvents;
          }
        }),
        Object.defineProperty(t, "createEventBus", {
          enumerable: !0,
          get: function () {
            return i.createEventBus;
          }
        }),
        Object.defineProperty(t, "Channel", {
          enumerable: !0,
          get: function () {
            return o.Channel;
          }
        }),
        Object.defineProperty(t, "GenericChannel", {
          enumerable: !0,
          get: function () {
            return s.GenericChannel;
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
            return u.TransportMessage;
          }
        }),
        Object.defineProperty(t, "DEFAULT_PARAM", {
          enumerable: !0,
          get: function () {
            return c.DEFAULT_PARAM;
          }
        });
      var r = n(174414),
        i = n(488511),
        o = n(771093),
        s = n(542844),
        a = n(271515),
        u = n(358489),
        c = n(432374);
    },
    833569: (e, t, n) => {
      "use strict";
      n.d(t, { _T: () => i, pi: () => r });
      var r = function () {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          r.apply(this, arguments)
        );
      };
      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        }
        return n;
      }
    },
    488802: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          __assign: () => o,
          __asyncDelegator: () => T,
          __asyncGenerator: () => O,
          __asyncValues: () => R,
          __await: () => k,
          __awaiter: () => p,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldIn: () => A,
          __classPrivateFieldSet: () => N,
          __createBinding: () => w,
          __decorate: () => a,
          __esDecorate: () => c,
          __exportStar: () => y,
          __extends: () => i,
          __generator: () => b,
          __importDefault: () => C,
          __importStar: () => P,
          __makeTemplateObject: () => j,
          __metadata: () => d,
          __param: () => u,
          __propKey: () => f,
          __read: () => _,
          __rest: () => s,
          __runInitializers: () => l,
          __setFunctionName: () => h,
          __spread: () => m,
          __spreadArray: () => E,
          __spreadArrays: () => v,
          __values: () => g
        });
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = e;
        }
        r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function s(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function a(e, t, n, r) {
        var i,
          o = arguments.length,
          s = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
        else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function u(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function c(e, t, n, r, i, o) {
        function s(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e;
        }
        for (
          var a,
            u = r.kind,
            c = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            l = !t && e ? (r.static ? e : e.prototype) : null,
            f = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}),
            h = !1,
            d = n.length - 1;
          d >= 0;
          d--
        ) {
          var p = {};
          for (var b in r) p[b] = "access" === b ? {} : r[b];
          for (var b in r.access) p.access[b] = r.access[b];
          p.addInitializer = function (e) {
            if (h) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(s(e || null));
          };
          var w = (0, n[d])("accessor" === u ? { get: f.get, set: f.set } : f[c], p);
          if ("accessor" === u) {
            if (void 0 === w) continue;
            if (null === w || "object" != typeof w) throw new TypeError("Object expected");
            (a = s(w.get)) && (f.get = a), (a = s(w.set)) && (f.set = a), (a = s(w.init)) && i.push(a);
          } else (a = s(w)) && ("field" === u ? i.push(a) : (f[c] = a));
        }
        l && Object.defineProperty(l, r.name, f), (h = !0);
      }
      function l(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
      }
      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function h(e, t, n) {
        return (
          "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t })
        );
      }
      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }
      function p(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function b(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(a) {
          return function (u) {
            return (function (a) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), a[0] && (s = 0)), s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                      !(i = i.call(r, a[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                    case 0:
                    case 1:
                      i = a;
                      break;
                    case 4:
                      return s.label++, { value: a[1], done: !1 };
                    case 5:
                      s.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0;
                        continue;
                      }
                      if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                        s.label = a[1];
                        break;
                      }
                      if (6 === a[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = a);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(a);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  a = t.call(e, s);
                } catch (e) {
                  (a = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, u]);
          };
        }
      }
      var w = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                }
              }),
              Object.defineProperty(e, r, i);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function y(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || w(t, e, n);
      }
      function g(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function _(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function m() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          i = 0;
        for (t = 0; t < n; t++) for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
        return r;
      }
      function E(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function k(e) {
        return this instanceof k ? ((this.v = e), this) : new k(e);
      }
      function O(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(e, t || []),
          o = [];
        return (
          (r = {}),
          s("next"),
          s("throw"),
          s("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function s(e) {
          i[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (n = i[e](t)).value instanceof k ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n);
          } catch (e) {
            l(o[0][3], e);
          }
          var n;
        }
        function u(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function T(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, i) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n) ? { value: k(e[r](t)), done: !1 } : i ? i(t) : t;
              }
            : i;
        }
      }
      function R(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = g(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                !(function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, i, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function j(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
      }
      var x = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && w(t, e, n);
        return x(t, e), t;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function N(e, t, n, r, i) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      function A(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t)) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
    },
    233377: function (e) {
      e.exports = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { exports: {}, id: r, loaded: !1 });
          return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = ""), t(0);
      })([
        function (e, t, n) {
          "use strict";
          function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }), r(n(2)), r(n(3)), r(n(1)), r(n(4));
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.eq = function e(t, n) {
              var r = 0;
              if (t === n) return !0;
              if ("function" == typeof t.equals) return t.equals(n);
              if (t.length > 0 && t.length === n.length) {
                for (; r < t.length; r += 1) if (!e(t[r], n[r])) return !1;
                return !0;
              }
              return !1;
            });
        },
        function (e, t, n) {
          "use strict";
          function r(e) {
            return null != e;
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i,
            o = n(1);
          !(function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })((i = t.EitherType || (t.EitherType = {}))),
            (t.either = function (e, t) {
              if (r(e) && r(t)) throw new TypeError("Cannot construct an Either with both a left and a right");
              if (!r(e) && !r(t)) throw new TypeError("Cannot construct an Either with neither a left nor a right");
              return r(e) && !r(t) ? s.left(e) : !r(e) && r(t) ? s.right(t) : void 0;
            });
          var s = (function () {
            function e(e, t, n) {
              (this.type = e),
                (this.l = t),
                (this.r = n),
                (this.of = this.unit),
                (this.chain = this.bind),
                (this.lift = this.fmap),
                (this.map = this.fmap);
            }
            return (
              (e.left = function (t) {
                return new e(i.Left, t);
              }),
              (e.right = function (t) {
                return new e(i.Right, null, t);
              }),
              (e.prototype.unit = function (t) {
                return e.right(t);
              }),
              (e.prototype.bind = function (t) {
                return this.type === i.Right ? t(this.r) : e.left(this.l);
              }),
              (e.prototype.fmap = function (e) {
                var t = this;
                return this.bind(function (n) {
                  return t.unit(e(n));
                });
              }),
              (e.prototype.caseOf = function (e) {
                return this.type === i.Right ? e.right(this.r) : e.left(this.l);
              }),
              (e.prototype.equals = function (e) {
                return (
                  e.type === this.type && ((this.type === i.Left && o.eq(e.l, this.l)) || (this.type === i.Right && o.eq(e.r, this.r)))
                );
              }),
              (e.prototype.do = function (e) {
                void 0 === e && (e = {});
                var t = Object.assign({ left: function (e) {}, right: function (e) {} }, e);
                return this.caseOf(t), this;
              }),
              e
            );
          })();
          t.Either = s;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r,
            i = n(1);
          !(function (e) {
            (e[(e.Nothing = 0)] = "Nothing"), (e[(e.Just = 1)] = "Just");
          })((r = t.MaybeType || (t.MaybeType = {}))),
            (t.maybe = function (e) {
              return o.maybe(e);
            });
          var o = (function () {
            function e(e, t) {
              (this.type = e),
                (this.value = t),
                (this.of = this.unit),
                (this.chain = this.bind),
                (this.lift = this.fmap),
                (this.map = this.fmap);
            }
            return (
              (e.sequence = function (t) {
                if (
                  Object.keys(t).filter(function (e) {
                    return t[e].type === r.Nothing;
                  }).length
                )
                  return e.nothing();
                var n = {};
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i].value);
                return e.just(n);
              }),
              (e.maybe = function (t) {
                return null == t ? new e(r.Nothing) : new e(r.Just, t);
              }),
              (e.just = function (t) {
                if (null == t) throw new TypeError("Cannot Maybe.just(null)");
                return new e(r.Just, t);
              }),
              (e.nothing = function () {
                return new e(r.Nothing);
              }),
              (e.isJust = function (e) {
                return e.type === r.Just;
              }),
              (e.isNothing = function (e) {
                return e.type === r.Nothing;
              }),
              (e.prototype.unit = function (t) {
                return e.maybe(t);
              }),
              (e.prototype.bind = function (t) {
                return this.type === r.Just ? t(this.value) : e.nothing();
              }),
              (e.prototype.fmap = function (e) {
                var t = this;
                return this.bind(function (n) {
                  return t.unit(e(n));
                });
              }),
              (e.prototype.caseOf = function (e) {
                return this.type === r.Just ? e.just(this.value) : e.nothing();
              }),
              (e.prototype.defaulting = function (t) {
                return e.just(this.valueOr(t));
              }),
              (e.prototype.equals = function (e) {
                return e.type === this.type && (this.type === r.Nothing || i.eq(e.value, this.value));
              }),
              (e.prototype.valueOr = function (e) {
                return this.valueOrCompute(function () {
                  return e;
                });
              }),
              (e.prototype.valueOrCompute = function (e) {
                return this.type === r.Just ? this.value : e();
              }),
              (e.prototype.valueOrThrow = function (e) {
                if (this.type === r.Just) return this.value;
                throw e || new Error("No value is available.");
              }),
              (e.prototype.do = function (e) {
                void 0 === e && (e = {});
                var t = Object.assign({ just: function (e) {}, nothing: function () {} }, e);
                return this.caseOf(t), this;
              }),
              e
            );
          })();
          (o.all = function (e) {
            return o.sequence(e);
          }),
            (t.Maybe = o);
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.writer = function (e, t) {
              return n.writer(e, t);
            });
          var n = (function () {
            function e(e, t) {
              (this.story = e),
                (this.value = t),
                (this.of = this.unit),
                (this.chain = this.bind),
                (this.lift = this.fmap),
                (this.map = this.fmap);
            }
            return (
              (e.writer = function (t, n) {
                return new e(t, n);
              }),
              (e.tell = function (t) {
                return new e([t], 0);
              }),
              (e.prototype.unit = function (t) {
                return new e([], t);
              }),
              (e.prototype.bind = function (t) {
                var n = t(this.value);
                return new e(this.story.concat(n.story), n.value);
              }),
              (e.prototype.fmap = function (e) {
                var t = this;
                return this.bind(function (n) {
                  return t.unit(e(n));
                });
              }),
              (e.prototype.caseOf = function (e) {
                return e.writer(this.story, this.value);
              }),
              (e.prototype.equals = function (e) {
                var t,
                  n = !0;
                for (t = 0; t < this.story.length; t += 1) n = n && this.story[t] === e.story[t];
                return n && this.value === e.value;
              }),
              e
            );
          })();
          t.Writer = n;
        }
      ]);
    },
    217983: (e, t, n) => {
      var r = n(515313).Buffer;
      e.exports = function (e) {
        return "function" == typeof r._augment && r.TYPED_ARRAY_SUPPORT ? r._augment(e) : new r(e);
      };
    },
    918918: (e, t) => {
      var n,
        r,
        i,
        o = void 0,
        s =
          ((n = Object.prototype.toString),
          (r = Object.prototype.hasOwnProperty),
          {
            Class: function (e) {
              return n.call(e).replace(/^\[object *|\]$/g, "");
            },
            HasProperty: function (e, t) {
              return t in e;
            },
            HasOwnProperty: function (e, t) {
              return r.call(e, t);
            },
            IsCallable: function (e) {
              return "function" == typeof e;
            },
            ToInt32: function (e) {
              return e >> 0;
            },
            ToUint32: function (e) {
              return e >>> 0;
            }
          }),
        a = Math.LN2,
        u = Math.abs,
        c = Math.floor,
        l = Math.log,
        f = Math.min,
        h = Math.pow,
        d = Math.round;
      function p(e) {
        if (b && i) {
          var t,
            n = b(e);
          for (t = 0; t < n.length; t += 1) i(e, n[t], { value: e[n[t]], writable: !1, enumerable: !1, configurable: !1 });
        }
      }
      i =
        Object.defineProperty &&
        (function () {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch (e) {
            return !1;
          }
        })()
          ? Object.defineProperty
          : function (e, t, n) {
              if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
              return (
                s.HasProperty(n, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, n.get),
                s.HasProperty(n, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, n.set),
                s.HasProperty(n, "value") && (e[t] = n.value),
                e
              );
            };
      var b =
        Object.getOwnPropertyNames ||
        function (e) {
          if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var t,
            n = [];
          for (t in e) s.HasOwnProperty(e, t) && n.push(t);
          return n;
        };
      function w(e, t) {
        var n = 32 - t;
        return (e << n) >> n;
      }
      function y(e, t) {
        var n = 32 - t;
        return (e << n) >>> n;
      }
      function g(e) {
        return [255 & e];
      }
      function _(e) {
        return w(e[0], 8);
      }
      function m(e) {
        return [255 & e];
      }
      function v(e) {
        return y(e[0], 8);
      }
      function E(e) {
        return [(e = d(Number(e))) < 0 ? 0 : e > 255 ? 255 : 255 & e];
      }
      function k(e) {
        return [(e >> 8) & 255, 255 & e];
      }
      function O(e) {
        return w((e[0] << 8) | e[1], 16);
      }
      function T(e) {
        return [(e >> 8) & 255, 255 & e];
      }
      function R(e) {
        return y((e[0] << 8) | e[1], 16);
      }
      function j(e) {
        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function x(e) {
        return w((e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3], 32);
      }
      function P(e) {
        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function C(e) {
        return y((e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3], 32);
      }
      function S(e, t, n) {
        var r,
          i,
          o,
          s,
          d,
          p,
          b,
          w = (1 << (t - 1)) - 1;
        function y(e) {
          var t = c(e),
            n = e - t;
          return n < 0.5 ? t : n > 0.5 || t % 2 ? t + 1 : t;
        }
        for (
          e != e
            ? ((i = (1 << t) - 1), (o = h(2, n - 1)), (r = 0))
            : e === 1 / 0 || e === -1 / 0
            ? ((i = (1 << t) - 1), (o = 0), (r = e < 0 ? 1 : 0))
            : 0 === e
            ? ((i = 0), (o = 0), (r = 1 / e == -1 / 0 ? 1 : 0))
            : ((r = e < 0),
              (e = u(e)) >= h(2, 1 - w)
                ? ((i = f(c(l(e) / a), 1023)),
                  (o = y((e / h(2, i)) * h(2, n))) / h(2, n) >= 2 && ((i += 1), (o = 1)),
                  i > w ? ((i = (1 << t) - 1), (o = 0)) : ((i += w), (o -= h(2, n))))
                : ((i = 0), (o = y(e / h(2, 1 - w - n))))),
            d = [],
            s = n;
          s;
          s -= 1
        )
          d.push(o % 2 ? 1 : 0), (o = c(o / 2));
        for (s = t; s; s -= 1) d.push(i % 2 ? 1 : 0), (i = c(i / 2));
        for (d.push(r ? 1 : 0), d.reverse(), p = d.join(""), b = []; p.length; )
          b.push(parseInt(p.substring(0, 8), 2)), (p = p.substring(8));
        return b;
      }
      function N(e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          c,
          l,
          f = [];
        for (r = e.length; r; r -= 1) for (o = e[r - 1], i = 8; i; i -= 1) f.push(o % 2 ? 1 : 0), (o >>= 1);
        return (
          f.reverse(),
          (s = f.join("")),
          (a = (1 << (t - 1)) - 1),
          (u = parseInt(s.substring(0, 1), 2) ? -1 : 1),
          (c = parseInt(s.substring(1, 1 + t), 2)),
          (l = parseInt(s.substring(1 + t), 2)),
          c === (1 << t) - 1
            ? 0 !== l
              ? NaN
              : u * (1 / 0)
            : c > 0
            ? u * h(2, c - a) * (1 + l / h(2, n))
            : 0 !== l
            ? u * h(2, -(a - 1)) * (l / h(2, n))
            : u < 0
            ? -0
            : 0
        );
      }
      function A(e) {
        return N(e, 11, 52);
      }
      function M(e) {
        return S(e, 11, 52);
      }
      function L(e) {
        return N(e, 8, 23);
      }
      function I(e) {
        return S(e, 8, 23);
      }
      !(function () {
        var e = function (e) {
          if ((e = s.ToInt32(e)) < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
          var t;
          for (this.byteLength = e, this._bytes = [], this._bytes.length = e, t = 0; t < this.byteLength; t += 1) this._bytes[t] = 0;
          p(this);
        };
        t.eT = t.eT || e;
        var n = function () {};
        function r(t, r, a) {
          var u;
          return (
            (u = function (t, n, r) {
              var o, a, c, l;
              if (arguments.length && "number" != typeof arguments[0])
                if ("object" == typeof arguments[0] && arguments[0].constructor === u)
                  for (
                    o = arguments[0],
                      this.length = o.length,
                      this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                      this.buffer = new e(this.byteLength),
                      this.byteOffset = 0,
                      c = 0;
                    c < this.length;
                    c += 1
                  )
                    this._setter(c, o._getter(c));
                else if ("object" != typeof arguments[0] || arguments[0] instanceof e || "ArrayBuffer" === s.Class(arguments[0])) {
                  if ("object" != typeof arguments[0] || !(arguments[0] instanceof e || "ArrayBuffer" === s.Class(arguments[0])))
                    throw new TypeError("Unexpected argument type(s)");
                  if (((this.buffer = t), (this.byteOffset = s.ToUint32(n)), this.byteOffset > this.buffer.byteLength))
                    throw new RangeError("byteOffset out of range");
                  if (this.byteOffset % this.BYTES_PER_ELEMENT)
                    throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                  if (arguments.length < 3) {
                    if (((this.byteLength = this.buffer.byteLength - this.byteOffset), this.byteLength % this.BYTES_PER_ELEMENT))
                      throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                    this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                  } else (this.length = s.ToUint32(r)), (this.byteLength = this.length * this.BYTES_PER_ELEMENT);
                  if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                    throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
                } else
                  for (
                    a = arguments[0],
                      this.length = s.ToUint32(a.length),
                      this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                      this.buffer = new e(this.byteLength),
                      this.byteOffset = 0,
                      c = 0;
                    c < this.length;
                    c += 1
                  )
                    (l = a[c]), this._setter(c, Number(l));
              else {
                if (((this.length = s.ToInt32(arguments[0])), r < 0))
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                (this.byteLength = this.length * this.BYTES_PER_ELEMENT), (this.buffer = new e(this.byteLength)), (this.byteOffset = 0);
              }
              (this.constructor = u),
                p(this),
                (function (e) {
                  if (i) {
                    if (e.length > 1e5) throw new RangeError("Array too large for polyfill");
                    var t;
                    for (t = 0; t < e.length; t += 1) n(t);
                  }
                  function n(t) {
                    i(e, t, {
                      get: function () {
                        return e._getter(t);
                      },
                      set: function (n) {
                        e._setter(t, n);
                      },
                      enumerable: !0,
                      configurable: !1
                    });
                  }
                })(this);
            }),
            (u.prototype = new n()),
            (u.prototype.BYTES_PER_ELEMENT = t),
            (u.prototype._pack = r),
            (u.prototype._unpack = a),
            (u.BYTES_PER_ELEMENT = t),
            (u.prototype._getter = function (e) {
              if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
              if ((e = s.ToUint32(e)) >= this.length) return o;
              var t,
                n,
                r = [];
              for (t = 0, n = this.byteOffset + e * this.BYTES_PER_ELEMENT; t < this.BYTES_PER_ELEMENT; t += 1, n += 1)
                r.push(this.buffer._bytes[n]);
              return this._unpack(r);
            }),
            (u.prototype.get = u.prototype._getter),
            (u.prototype._setter = function (e, t) {
              if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
              if ((e = s.ToUint32(e)) >= this.length) return o;
              var n,
                r,
                i = this._pack(t);
              for (n = 0, r = this.byteOffset + e * this.BYTES_PER_ELEMENT; n < this.BYTES_PER_ELEMENT; n += 1, r += 1)
                this.buffer._bytes[r] = i[n];
            }),
            (u.prototype.set = function (e, t) {
              if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
              var n, r, i, o, a, u, c, l, f, h;
              if ("object" == typeof arguments[0] && arguments[0].constructor === this.constructor) {
                if (((n = arguments[0]), (i = s.ToUint32(arguments[1])) + n.length > this.length))
                  throw new RangeError("Offset plus length of array is out of range");
                if (
                  ((l = this.byteOffset + i * this.BYTES_PER_ELEMENT), (f = n.length * this.BYTES_PER_ELEMENT), n.buffer === this.buffer)
                ) {
                  for (h = [], a = 0, u = n.byteOffset; a < f; a += 1, u += 1) h[a] = n.buffer._bytes[u];
                  for (a = 0, c = l; a < f; a += 1, c += 1) this.buffer._bytes[c] = h[a];
                } else for (a = 0, u = n.byteOffset, c = l; a < f; a += 1, u += 1, c += 1) this.buffer._bytes[c] = n.buffer._bytes[u];
              } else {
                if ("object" != typeof arguments[0] || void 0 === arguments[0].length) throw new TypeError("Unexpected argument type(s)");
                if (((r = arguments[0]), (o = s.ToUint32(r.length)), (i = s.ToUint32(arguments[1])) + o > this.length))
                  throw new RangeError("Offset plus length of array is out of range");
                for (a = 0; a < o; a += 1) (u = r[a]), this._setter(i + a, Number(u));
              }
            }),
            (u.prototype.subarray = function (e, t) {
              function n(e, t, n) {
                return e < t ? t : e > n ? n : e;
              }
              (e = s.ToInt32(e)),
                (t = s.ToInt32(t)),
                arguments.length < 1 && (e = 0),
                arguments.length < 2 && (t = this.length),
                e < 0 && (e = this.length + e),
                t < 0 && (t = this.length + t),
                (e = n(e, 0, this.length));
              var r = (t = n(t, 0, this.length)) - e;
              return r < 0 && (r = 0), new this.constructor(this.buffer, this.byteOffset + e * this.BYTES_PER_ELEMENT, r);
            }),
            u
          );
        }
        var a = r(1, g, _),
          u = r(1, m, v),
          c = r(1, E, v),
          l = r(2, k, O),
          f = r(2, T, R),
          h = r(4, j, x),
          d = r(4, P, C),
          b = r(4, I, L),
          w = r(8, M, A);
        (t.iq = t.iq || a),
          (t.U2 = t.U2 || u),
          (t.we = t.we || c),
          (t.M2 = t.M2 || l),
          (t.HA = t.HA || f),
          (t.ZV = t.ZV || h),
          (t._R = t._R || d),
          (t.$L = t.$L || b),
          (t.I = t.I || w);
      })(),
        (function () {
          function e(e, t) {
            return s.IsCallable(e.get) ? e.get(t) : e[t];
          }
          var n,
            r = ((n = new t.HA([4660])), 18 === e(new t.U2(n.buffer), 0)),
            i = function (e, n, r) {
              if (0 === arguments.length) e = new t.eT(0);
              else if (!(e instanceof t.eT || "ArrayBuffer" === s.Class(e))) throw new TypeError("TypeError");
              if (((this.buffer = e || new t.eT(0)), (this.byteOffset = s.ToUint32(n)), this.byteOffset > this.buffer.byteLength))
                throw new RangeError("byteOffset out of range");
              if (
                ((this.byteLength = arguments.length < 3 ? this.buffer.byteLength - this.byteOffset : s.ToUint32(r)),
                this.byteOffset + this.byteLength > this.buffer.byteLength)
              )
                throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              p(this);
            };
          function o(n) {
            return function (i, o) {
              if ((i = s.ToUint32(i)) + n.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
              i += this.byteOffset;
              var a,
                u = new t.U2(this.buffer, i, n.BYTES_PER_ELEMENT),
                c = [];
              for (a = 0; a < n.BYTES_PER_ELEMENT; a += 1) c.push(e(u, a));
              return Boolean(o) === Boolean(r) && c.reverse(), e(new n(new t.U2(c).buffer), 0);
            };
          }
          function a(n) {
            return function (i, o, a) {
              if ((i = s.ToUint32(i)) + n.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
              var u,
                c = new n([o]),
                l = new t.U2(c.buffer),
                f = [];
              for (u = 0; u < n.BYTES_PER_ELEMENT; u += 1) f.push(e(l, u));
              Boolean(a) === Boolean(r) && f.reverse(), new t.U2(this.buffer, i, n.BYTES_PER_ELEMENT).set(f);
            };
          }
          (i.prototype.getUint8 = o(t.U2)),
            (i.prototype.getInt8 = o(t.iq)),
            (i.prototype.getUint16 = o(t.HA)),
            (i.prototype.getInt16 = o(t.M2)),
            (i.prototype.getUint32 = o(t._R)),
            (i.prototype.getInt32 = o(t.ZV)),
            (i.prototype.getFloat32 = o(t.$L)),
            (i.prototype.getFloat64 = o(t.I)),
            (i.prototype.setUint8 = a(t.U2)),
            (i.prototype.setInt8 = a(t.iq)),
            (i.prototype.setUint16 = a(t.HA)),
            (i.prototype.setInt16 = a(t.M2)),
            (i.prototype.setUint32 = a(t._R)),
            (i.prototype.setInt32 = a(t.ZV)),
            (i.prototype.setFloat32 = a(t.$L)),
            (i.prototype.setFloat64 = a(t.I)),
            (t.VO = t.VO || i);
        })();
    },
    50415: (e, t) => {
      "use strict";
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if ("string" == typeof e[0]) {
          for (var n = {}, r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            n[o] = o;
          }
          return n;
        }
        return e[0];
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Enum = n),
        (function (e) {
          function t(e) {
            for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
              var i = r[n];
              t.push(e[i]);
            }
            return t;
          }
          (e.ofKeys = function (e) {
            for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
              var i = r[n];
              t[i] = i;
            }
            return t;
          }),
            (e.keys = function (e) {
              return Object.keys(e);
            }),
            (e.values = t),
            (e.isType = function (e, n) {
              return -1 !== t(e).indexOf(n);
            });
        })((n = t.Enum || (t.Enum = {})));
    },
    108473: function (e, t, n) {
      var r;
      !(function (i, o) {
        "use strict";
        var s = "function",
          a = "undefined",
          u = "object",
          c = "string",
          l = "major",
          f = "model",
          h = "name",
          d = "type",
          p = "vendor",
          b = "version",
          w = "architecture",
          y = "console",
          g = "mobile",
          _ = "tablet",
          m = "smarttv",
          v = "wearable",
          E = "embedded",
          k = "Amazon",
          O = "Apple",
          T = "ASUS",
          R = "BlackBerry",
          j = "Browser",
          x = "Chrome",
          P = "Firefox",
          C = "Google",
          S = "Huawei",
          N = "LG",
          A = "Microsoft",
          M = "Motorola",
          L = "Opera",
          I = "Samsung",
          q = "Sharp",
          H = "Sony",
          U = "Xiaomi",
          B = "Zebra",
          D = "Facebook",
          z = "Chromium OS",
          Y = "Mac OS",
          $ = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
            return t;
          },
          F = function (e, t) {
            return typeof e === c && -1 !== V(t).indexOf(V(e));
          },
          V = function (e) {
            return e.toLowerCase();
          },
          G = function (e, t) {
            if (typeof e === c) return (e = e.replace(/^\s\s*/, "")), typeof t === a ? e : e.substring(0, 350);
          },
          J = function (e, t) {
            for (var n, r, i, a, c, l, f = 0; f < t.length && !c; ) {
              var h = t[f],
                d = t[f + 1];
              for (n = r = 0; n < h.length && !c && h[n]; )
                if ((c = h[n++].exec(e)))
                  for (i = 0; i < d.length; i++)
                    (l = c[++r]),
                      typeof (a = d[i]) === u && a.length > 0
                        ? 2 === a.length
                          ? typeof a[1] == s
                            ? (this[a[0]] = a[1].call(this, l))
                            : (this[a[0]] = a[1])
                          : 3 === a.length
                          ? typeof a[1] !== s || (a[1].exec && a[1].test)
                            ? (this[a[0]] = l ? l.replace(a[1], a[2]) : o)
                            : (this[a[0]] = l ? a[1].call(this, l, a[2]) : o)
                          : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : o)
                        : (this[a] = l || o);
              f += 2;
            }
          },
          Z = function (e, t) {
            for (var n in t)
              if (typeof t[n] === u && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++) if (F(t[n][r], e)) return "?" === n ? o : n;
              } else if (F(t[n], e)) return "?" === n ? o : n;
            return e;
          },
          W = {
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
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [b, [h, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [b, [h, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [h, b],
              [/opios[\/ ]+([\w\.]+)/i],
              [b, [h, L + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [b, [h, L]],
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
              [h, b],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [b, [h, "UC" + j]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [b, [h, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [b, [h, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [b, [h, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [b, [h, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [b, [h, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[h, /(.+)/, "$1 Secure " + j], b],
              [/\bfocus\/([\w\.]+)/i],
              [b, [h, P + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [b, [h, L + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [b, [h, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [b, [h, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [b, [h, L + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [b, [h, "MIUI " + j]],
              [/fxios\/([-\w\.]+)/i],
              [b, [h, P]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[h, "360 " + j]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[h, /(.+)/, "$1 " + j], b],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[h, /_/g, " "], b],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
              ],
              [h, b],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
              [h],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[h, D], b],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i
              ],
              [h, b],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [b, [h, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [b, [h, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [b, [h, x + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[h, x + " WebView"], b],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [b, [h, "Android " + j]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [h, b],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [b, [h, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [b, h],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                h,
                [b, Z, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [h, b],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[h, "Netscape"], b],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [b, [h, P + " Reality"]],
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
              [h, b],
              [/(cobalt)\/([\w\.]+)/i],
              [h, [b, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[w, "amd64"]],
              [/(ia32(?=;))/i],
              [[w, V]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[w, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[w, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[w, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[w, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[w, /ower/, "", V]],
              [/(sun4\w)[;\)]/i],
              [[w, "sparc"]],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [[w, V]]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [p, I], [d, _]],
              [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [p, I], [d, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [p, O], [d, g]],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [p, O], [d, _]],
              [/(macintosh);/i],
              [f, [p, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [p, q], [d, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [p, S], [d, _]],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [p, S], [d, g]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
              ],
              [
                [f, /_/g, " "],
                [p, U],
                [d, g]
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [p, U],
                [d, _]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [p, "OPPO"], [d, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [p, "Vivo"], [d, g]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [f, [p, "Realme"], [d, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
              ],
              [f, [p, M], [d, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [p, M], [d, _]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [p, N], [d, _]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
              ],
              [f, [p, N], [d, g]],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [f, [p, "Lenovo"], [d, _]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [p, "Nokia"],
                [d, g]
              ],
              [/(pixel c)\b/i],
              [f, [p, C], [d, _]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [p, C], [d, g]],
              [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [p, H], [d, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [p, H],
                [d, _]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [p, "OnePlus"], [d, g]],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [p, k], [d, _]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [p, k],
                [d, g]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, p, [d, _]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [p, R], [d, g]],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [p, T], [d, _]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [p, T], [d, g]],
              [/(nexus 9)/i],
              [f, [p, "HTC"], [d, _]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
              ],
              [p, [f, /_/g, " "], [d, g]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [p, "Acer"], [d, _]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [p, "Meizu"], [d, g]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i
              ],
              [p, f, [d, g]],
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
              [p, f, [d, _]],
              [/(surface duo)/i],
              [f, [p, A], [d, _]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [p, "Fairphone"], [d, g]],
              [/(u304aa)/i],
              [f, [p, "AT&T"], [d, g]],
              [/\bsie-(\w*)/i],
              [f, [p, "Siemens"], [d, g]],
              [/\b(rct\w+) b/i],
              [f, [p, "RCA"], [d, _]],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [p, "Dell"], [d, _]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [p, "Verizon"], [d, _]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [p, "Barnes & Noble"], [d, _]],
              [/\b(tm\d{3}\w+) b/i],
              [f, [p, "NuVision"], [d, _]],
              [/\b(k88) b/i],
              [f, [p, "ZTE"], [d, _]],
              [/\b(nx\d{3}j) b/i],
              [f, [p, "ZTE"], [d, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [p, "Swiss"], [d, g]],
              [/\b(zur\d{3}) b/i],
              [f, [p, "Swiss"], [d, _]],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [p, "Zeki"], [d, _]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], f, [d, _]],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [p, "Insignia"], [d, _]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [p, "NextBook"], [d, _]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], f, [d, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], f, [d, g]],
              [/\b(ph-1) /i],
              [f, [p, "Essential"], [d, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [p, "Envizen"], [d, _]],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [p, "MachSpeed"], [d, _]],
              [/\btu_(1491) b/i],
              [f, [p, "Rotor"], [d, _]],
              [/(shield[\w ]+) b/i],
              [f, [p, "Nvidia"], [d, _]],
              [/(sprint) (\w+)/i],
              [p, f, [d, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [p, A],
                [d, g]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [p, B], [d, _]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [p, B], [d, g]],
              [/smart-tv.+(samsung)/i],
              [p, [d, m]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [p, I],
                [d, m]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, N],
                [d, m]
              ],
              [/(apple) ?tv/i],
              [p, [f, O + " TV"], [d, m]],
              [/crkey/i],
              [
                [f, x + "cast"],
                [p, C],
                [d, m]
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [f, [p, k], [d, m]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [p, q], [d, m]],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [p, H], [d, m]],
              [/(mitv-\w{5}) bui/i],
              [f, [p, U], [d, m]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, f, [d, m]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, G],
                [f, G],
                [d, m]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, m]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, f, [d, y]],
              [/droid.+; (shield) bui/i],
              [f, [p, "Nvidia"], [d, y]],
              [/(playstation [345portablevi]+)/i],
              [f, [p, H], [d, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [p, A], [d, y]],
              [/((pebble))app/i],
              [p, f, [d, v]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [p, O], [d, v]],
              [/droid.+; (glass) \d/i],
              [f, [p, C], [d, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [p, B], [d, v]],
              [/(quest( 2| pro)?)/i],
              [f, [p, D], [d, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [d, E]],
              [/(aeobc)\b/i],
              [f, [p, k], [d, E]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [f, [d, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [d, _]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[d, _]],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [[d, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [b, [h, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [b, [h, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i
              ],
              [h, b],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [b, h]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [h, b],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
              ],
              [h, [b, Z, W]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [h, "Windows"],
                [b, Z, W]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [b, /_/g, "."],
                [h, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [h, Y],
                [b, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [b, h],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i
              ],
              [h, b],
              [/\(bb(10);/i],
              [b, [h, R]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [b, [h, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [b, [h, P + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [b, [h, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [b, [h, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [b, [h, x + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[h, z], b],
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
              [h, b],
              [/(sunos) ?([\w\.\d]*)/i],
              [[h, "Solaris"], b],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i
              ],
              [h, b]
            ]
          },
          X = function (e, t) {
            if ((typeof e === u && ((t = e), (e = o)), !(this instanceof X))) return new X(e, t).getResult();
            var n = typeof i !== a && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              y = n && n.userAgentData ? n.userAgentData : o,
              m = t
                ? (function (e, t) {
                    var n = {};
                    for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                    return n;
                  })(K, t)
                : K,
              v = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[h] = o),
                  (t[b] = o),
                  J.call(t, r, m.browser),
                  (t[l] = typeof (e = t[b]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o),
                  v && n && n.brave && typeof n.brave.isBrave == s && (t[h] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[w] = o), J.call(e, r, m.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = o),
                  (e[f] = o),
                  (e[d] = o),
                  J.call(e, r, m.device),
                  v && !e[d] && y && y.mobile && (e[d] = g),
                  v &&
                    "Macintosh" == e[f] &&
                    n &&
                    typeof n.standalone !== a &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[f] = "iPad"), (e[d] = _)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[h] = o), (e[b] = o), J.call(e, r, m.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[b] = o),
                  J.call(e, r, m.os),
                  v && !e[h] && y && "Unknown" != y.platform && (e[h] = y.platform.replace(/chrome os/i, z).replace(/macos/i, Y)),
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
                return (r = typeof e === c && e.length > 350 ? G(e, 350) : e), this;
              }),
              this.setUA(r),
              this
            );
          };
        (X.VERSION = "1.0.35"),
          (X.BROWSER = $([h, b, l])),
          (X.CPU = $([w])),
          (X.DEVICE = $([f, p, d, y, g, m, _, v, E])),
          (X.ENGINE = X.OS = $([h, b])),
          typeof t !== a
            ? (e.exports && (t = e.exports = X), (t.UAParser = X))
            : n.amdO
            ? (r = function () {
                return X;
              }.call(t, n, t, e)) === o || (e.exports = r)
            : typeof i !== a && (i.UAParser = X);
        var Q = typeof i !== a && (i.jQuery || i.Zepto);
        if (Q && !Q.ua) {
          var ee = new X();
          (Q.ua = ee.getResult()),
            (Q.ua.get = function () {
              return ee.getUA();
            }),
            (Q.ua.set = function (e) {
              ee.setUA(e);
              var t = ee.getResult();
              for (var n in t) Q.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    }
  }
]);
