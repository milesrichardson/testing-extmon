"use strict";
(this.webpackChunk_dashlane_webcards = this.webpackChunk_dashlane_webcards || []).push([
  [150],
  {
    71093: () => {},
    71515: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChunkedChannel = void 0);
      var s = n(42844),
        r = n(58489);
      const a = (e) => {
        if (!e.chunkId) throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(e)}`);
      };
      class i extends s.GenericChannel {
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
              for (let n = 0, s = e.length; n < s; n++) t[n] = e.charCodeAt(n);
              return t;
            })(t),
            s = [...Array(30)].map(() => Math.random().toString(36)[3]).join("");
          this._sender({ type: "chunk_start", chunkId: s, size: t.length });
          const r = (e = 0) => {
            let t = n.slice(e, e + this._chunkSize);
            t.length && (this._sender({ type: "chunk_data", chunkId: s, data: Array.from(t) }), r(e + this._chunkSize));
          };
          r(), this._sender({ type: "chunk_end", chunkId: s });
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
          if ((a(e), this._buffer[e.chunkId])) throw new Error(`There was already an entry in the buffer for chunkId ${e.chunkId}`);
          this._buffer[e.chunkId] = { id: e.chunkId, chunks: [], size: e.size };
        }
        _receiveChunkData(e) {
          if ((a(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
          this._buffer[e.chunkId].chunks.push(e.data);
        }
        _mergeChunks(e) {
          if ((a(e), !this._buffer[e.chunkId])) throw new Error(`ChunkId ${e.chunkId} was not found in the buffer`);
          const t = this._buffer[e.chunkId].chunks.reduce(
            (e, t, n) => (t.forEach((t, n) => (e.uintArray[e.currentIx + n] = t)), (e.currentIx += t.length), e),
            { uintArray: new Uint16Array(this._buffer[e.chunkId].size), currentIx: 0 }
          );
          let n;
          const s = ((e, t) => {
            if (-1 === t) return String.fromCharCode.apply(null, e);
            {
              let n = "";
              for (let s = 0; s < e.length; s += t)
                s + t > e.length
                  ? (n += String.fromCharCode.apply(null, e.subarray(s)))
                  : (n += String.fromCharCode.apply(null, e.subarray(s, s + t)));
              return n;
            }
          })(t.uintArray, this._maxStringAlloc);
          try {
            n = JSON.parse(s);
          } catch (e) {
            throw new Error(`Not a valid JSON string: ${s}`);
          }
          if (!(0, r.isTransportMessage)(n)) throw new Error(`Not a transport message: ${JSON.stringify(n)}`);
          return n;
        }
      }
      t.ChunkedChannel = i;
    },
    42844: (e, t) => {
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
    32374: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DEFAULT_PARAM = void 0), (t.DEFAULT_PARAM = "$_DEFAULT_$");
    },
    88511: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.combineEvents = function (...e) {
          const t = e.reduce((e, t) => (e.push.apply(e, Object.keys(t)), e), []),
            n = [...new Set(t)];
          if (t.length > n.length) throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
          return Object.assign({}, ...e);
        }),
        (t.createEventBus = function (e) {
          const t = (e.channels || []).map((t) => new r.Transport(t, e.ignoredEvents)),
            n = {};
          for (const r in e.events)
            e.events.hasOwnProperty(r) &&
              (!e.ignoredEvents || (e.ignoredEvents && !e.ignoredEvents.includes(r))) &&
              (n[r] = (0, s.connectSlot)(r, t, e.events[r].config));
          return n;
        });
      var s = n(74414),
        r = n(78346);
    },
    78557: (e, t) => {
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
    58489: (e, t) => {
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
    74414: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slot = function (e = i) {
          return o(e);
        }),
        (t.connectSlot = function (e, t, n = {}) {
          const a = t.reduce((e, t, n) => ({ ...e, [n]: {} }), { [c]: {} }),
            i = t.reduce((e, t, n) => ({ ...e, [n]: {} }), {}),
            o = (e, t) => {
              let n = () => {};
              const s = new Promise((e) => (n = e));
              i[e][t] = { registered: s, onRegister: n };
            },
            l = [],
            h = [],
            p = (e) => l.forEach((t) => t(e)),
            m = (e) => h.forEach((t) => t(e));
          return (
            t.forEach((t, n) => {
              t.addRemoteHandlerRegistrationCallback(e, (e = r.DEFAULT_PARAM, t) => {
                if (!i[n]) return;
                const s = a[n][e] || [];
                (a[n][e] = s.concat(t)), 1 === d(e, a).length && p(e), i[n][e] || o(String(n), e), i[n][e].onRegister();
              }),
                t.addRemoteHandlerUnregistrationCallback(e, (e = r.DEFAULT_PARAM, t) => {
                  const s = (a[n][e] || []).indexOf(t);
                  s > -1 && a[n][e].splice(s, 1), 0 === d(e, a).length && m(e), i[n] && o(String(n), e);
                }),
                t.addRemoteEventListChangedListener(e, () => {
                  i[n] &&
                    Object.keys(i[n]).forEach((e) => {
                      i[n][e].onRegister();
                    }),
                    delete i[n];
                });
            }),
            Object.assign(
              function (e, c) {
                const u = 2 === arguments.length,
                  l = u ? c : e,
                  h = u ? e : r.DEFAULT_PARAM,
                  p = () => {
                    const e = d(h, a);
                    return (0, s.callHandlers)(l, e);
                  };
                if (0 === t.length) return p();
                const m = [];
                if (
                  (n.autoReconnect &&
                    t.forEach((e) => {
                      m.push(e.autoReconnect());
                    }),
                  n.noBuffer)
                )
                  return Promise.all(m).then(() => p());
                {
                  t.forEach((e, t) => {
                    i[t] && !i[t][h] && o(String(t), h);
                  });
                  const e = t.reduce((e, t, n) => {
                    var s;
                    return [...e, ...(null !== (s = i[n] && [i[n][h].registered]) && void 0 !== s ? s : [])];
                  }, []);
                  return Promise.all(e).then(() => p());
                }
              },
              {
                on: function (n, s) {
                  let i = "",
                    o = () => new Promise((e) => e());
                  return (
                    "string" == typeof n ? ((i = n), (o = s || o)) : ((i = r.DEFAULT_PARAM), (o = n)),
                    t.forEach((t) => t.registerHandler(e, i, o)),
                    (a[c][i] = (a[c][i] || []).concat(o)),
                    1 === d(i, a).length && p(i),
                    () => {
                      t.forEach((t) => t.unregisterHandler(e, i, o));
                      const n = (a[c][i] || []).indexOf(o);
                      -1 !== n && a[c][i].splice(n, 1), 0 === d(i, a).length && m(i);
                    }
                  );
                },
                lazy: function (e, t) {
                  return (
                    l.push(e),
                    h.push(t),
                    u(a).forEach(e),
                    () => {
                      u(a).forEach(t);
                      const n = l.indexOf(e);
                      n > -1 && l.splice(n, 1);
                      const s = h.indexOf(t);
                      s > -1 && h.splice(s, 1);
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
      var s = n(78557),
        r = n(32374);
      const a = () => {
          throw new Error("Slot not connected");
        },
        i = { noBuffer: !1, autoReconnect: !0 };
      t.defaultSlotConfig = i;
      const o = (e) => Object.assign(() => a(), { config: e, lazy: () => a, on: () => a, slotName: "Not connected" }),
        c = "LOCAL_TRANSPORT",
        d = (e, t) => Object.keys(t).reduce((n, s) => n.concat(t[s][e] || []), []),
        u = (e) =>
          Object.keys(e).reduce((t, n) => {
            const s = e[n],
              r = [...t, ...Object.keys(s).filter((e) => (s[e] || []).length > 0)];
            return [...new Set(r)];
          }, []);
    },
    78346: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Transport = void 0);
      var s = n(78557);
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
        _requestReceived({ slotName: e, data: t, id: n, param: r }) {
          const a = this._localHandlers[e];
          if (!a) return;
          const i = a[r];
          i &&
            (0, s.callHandlers)(t, i)
              .then((t) => this._channel.send({ type: "response", slotName: e, id: n, data: t, param: r }))
              .catch((t) => this._channel.send({ id: n, message: `${t}`, param: r, slotName: e, stack: t.stack || "", type: "error" }));
        }
        _responseReceived({ slotName: e, data: t, id: n, param: s }) {
          const r = this._pendingRequests[e];
          r && r[s] && r[s][n] && (r[s][n].resolve(t), delete r[s][n]);
        }
        _errorReceived({ slotName: e, id: t, message: n, stack: s, param: r }) {
          const a = this._pendingRequests[e];
          if (!a || !a[r] || !a[r][t]) return;
          const i = new Error(`${n} on ${e} with param ${r}`);
          (i.stack = s || i.stack), this._pendingRequests[e][r][t].reject(i), delete this._pendingRequests[e][r][t];
        }
        _registerRemoteHandler({ slotName: e, param: t }) {
          const n = this._remoteHandlerRegistrationCallbacks[e];
          if (!n) return;
          const s = this._remoteHandlers[e];
          if (s && s[t]) return;
          const a = (n) =>
            new Promise((s, a) => {
              if (!this._channelReady) return a(new Error(`CHANNEL_NOT_READY on ${e}`));
              const i = "" + r++;
              (this._pendingRequests[e] = this._pendingRequests[e] || {}),
                (this._pendingRequests[e][t] = this._pendingRequests[e][t] || {}),
                (this._pendingRequests[e][t][i] = { resolve: s, reject: a }),
                this._channel.send({ type: "request", id: i, slotName: e, param: t, data: n }),
                setTimeout(() => {
                  const n = ((this._pendingRequests[e] || {})[t] || {})[i];
                  if (n) {
                    const s = new Error(`TIMED_OUT on ${e} with param ${t}`);
                    n.reject(s), delete this._pendingRequests[e][t][i];
                  }
                }, this._channel.timeout);
            });
          (this._remoteHandlers[e] = this._remoteHandlers[e] || {}), (this._remoteHandlers[e][t] = a), n(t, a);
        }
        _unregisterRemoteHandler({ slotName: e, param: t }) {
          const n = this._remoteHandlerDeletionCallbacks[e],
            s = this._remoteHandlers[e];
          if (!s) return;
          const r = s[t];
          r && n && (n(t, r), delete this._remoteHandlers[e][t]);
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
              Object.keys(this._pendingRequests[t][n]).forEach((s) => {
                this._pendingRequests[t][n][s].reject(e);
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
          const s = this._localHandlers[e];
          if (s && s[t]) {
            const r = s[t].indexOf(n);
            if (r > -1 && (s[t].splice(r, 1), 0 === s[t].length)) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "slot", {
          enumerable: !0,
          get: function () {
            return s.slot;
          }
        }),
        Object.defineProperty(t, "Slot", {
          enumerable: !0,
          get: function () {
            return s.Slot;
          }
        }),
        Object.defineProperty(t, "EventDeclaration", {
          enumerable: !0,
          get: function () {
            return r.EventDeclaration;
          }
        }),
        Object.defineProperty(t, "combineEvents", {
          enumerable: !0,
          get: function () {
            return r.combineEvents;
          }
        }),
        Object.defineProperty(t, "createEventBus", {
          enumerable: !0,
          get: function () {
            return r.createEventBus;
          }
        }),
        Object.defineProperty(t, "Channel", {
          enumerable: !0,
          get: function () {
            return a.Channel;
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
            return o.ChunkedChannel;
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
            return d.DEFAULT_PARAM;
          }
        });
      var s = n(74414),
        r = n(88511),
        a = n(71093),
        i = n(42844),
        o = n(71515),
        c = n(58489),
        d = n(32374);
    },
    50415: (e, t) => {
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if ("string" == typeof e[0]) {
          for (var n = {}, s = 0, r = e; s < r.length; s++) {
            var a = r[s];
            n[a] = a;
          }
          return n;
        }
        return e[0];
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Enum = n),
        (function (e) {
          function t(e) {
            for (var t = [], n = 0, s = Object.keys(e); n < s.length; n++) {
              var r = s[n];
              t.push(e[r]);
            }
            return t;
          }
          (e.ofKeys = function (e) {
            for (var t = {}, n = 0, s = Object.keys(e); n < s.length; n++) {
              var r = s[n];
              t[r] = r;
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
    7165: (e, t, n) => {
      var s;
      n.d(t, { z: () => Je }),
        (function (e) {
          (e.assertEqual = (e) => e),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw new Error();
            }),
            (e.arrayToEnum = (e) => {
              const t = {};
              for (const n of e) t[n] = n;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              const n = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
                s = {};
              for (const e of n) s[e] = t[e];
              return e.objectValues(s);
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
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (const n of e) if (t(n)) return n;
            }),
            (e.isInteger =
              "function" == typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) => "number" == typeof e && isFinite(e) && Math.floor(e) === e),
            (e.joinValues = function (e, t = " | ") {
              return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) => ("bigint" == typeof t ? t.toString() : t));
        })(s || (s = {}));
      const r = s.arrayToEnum([
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
        a = (e) => {
          switch (typeof e) {
            case "undefined":
              return r.undefined;
            case "string":
              return r.string;
            case "number":
              return isNaN(e) ? r.nan : r.number;
            case "boolean":
              return r.boolean;
            case "function":
              return r.function;
            case "bigint":
              return r.bigint;
            case "object":
              return Array.isArray(e)
                ? r.array
                : null === e
                ? r.null
                : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch
                ? r.promise
                : "undefined" != typeof Map && e instanceof Map
                ? r.map
                : "undefined" != typeof Set && e instanceof Set
                ? r.set
                : "undefined" != typeof Date && e instanceof Date
                ? r.date
                : r.object;
            default:
              return r.unknown;
          }
        },
        i = s.arrayToEnum([
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
      class o extends Error {
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
            n = { _errors: [] },
            s = (e) => {
              for (const r of e.issues)
                if ("invalid_union" === r.code) r.unionErrors.map(s);
                else if ("invalid_return_type" === r.code) s(r.returnTypeError);
                else if ("invalid_arguments" === r.code) s(r.argumentsError);
                else if (0 === r.path.length) n._errors.push(t(r));
                else {
                  let e = n,
                    s = 0;
                  for (; s < r.path.length; ) {
                    const n = r.path[s];
                    s === r.path.length - 1
                      ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(r)))
                      : (e[n] = e[n] || { _errors: [] }),
                      (e = e[n]),
                      s++;
                  }
                }
            };
          return s(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, s.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          const t = {},
            n = [];
          for (const s of this.issues) s.path.length > 0 ? ((t[s.path[0]] = t[s.path[0]] || []), t[s.path[0]].push(e(s))) : n.push(e(s));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      o.create = (e) => new o(e);
      const c = (e, t) => {
        let n;
        switch (e.code) {
          case i.invalid_type:
            n = e.received === r.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
            break;
          case i.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, s.jsonStringifyReplacer)}`;
            break;
          case i.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${s.joinValues(e.keys, ", ")}`;
            break;
          case i.invalid_union:
            n = "Invalid input";
            break;
          case i.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${s.joinValues(e.options)}`;
            break;
          case i.invalid_enum_value:
            n = `Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;
            break;
          case i.invalid_arguments:
            n = "Invalid function arguments";
            break;
          case i.invalid_return_type:
            n = "Invalid function return type";
            break;
          case i.invalid_date:
            n = "Invalid date";
            break;
          case i.invalid_string:
            "object" == typeof e.validation
              ? "startsWith" in e.validation
                ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                : "endsWith" in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : s.assertNever(e.validation)
              : (n = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid");
            break;
          case i.too_small:
            n =
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
            n =
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
            n = "Invalid input";
            break;
          case i.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
          case i.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          default:
            (n = t.defaultError), s.assertNever(e);
        }
        return { message: n };
      };
      let d = c;
      function u() {
        return d;
      }
      const l = (e) => {
        const { data: t, path: n, errorMaps: s, issueData: r } = e,
          a = [...n, ...(r.path || [])],
          i = { ...r, path: a };
        let o = "";
        const c = s
          .filter((e) => !!e)
          .slice()
          .reverse();
        for (const e of c) o = e(i, { data: t, defaultError: o }).message;
        return { ...r, path: a, message: r.message || o };
      };
      function h(e, t) {
        const n = l({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, u(), c].filter((e) => !!e)
        });
        e.common.issues.push(n);
      }
      class p {
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
          const n = [];
          for (const s of t) {
            if ("aborted" === s.status) return m;
            "dirty" === s.status && e.dirty(), n.push(s.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          const n = [];
          for (const e of t) n.push({ key: await e.key, value: await e.value });
          return p.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          const n = {};
          for (const s of t) {
            const { key: t, value: r } = s;
            if ("aborted" === t.status) return m;
            if ("aborted" === r.status) return m;
            "dirty" === t.status && e.dirty(),
              "dirty" === r.status && e.dirty(),
              (void 0 !== r.value || s.alwaysSet) && (n[t.value] = r.value);
          }
          return { status: e.value, value: n };
        }
      }
      const m = Object.freeze({ status: "aborted" }),
        f = (e) => ({ status: "valid", value: e }),
        _ = (e) => "aborted" === e.status,
        y = (e) => "dirty" === e.status,
        g = (e) => "valid" === e.status,
        v = (e) => void 0 !== typeof Promise && e instanceof Promise;
      var b;
      !(function (e) {
        (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
          (e.toString = (e) => ("string" == typeof e ? e : null == e ? void 0 : e.message));
      })(b || (b = {}));
      class k {
        constructor(e, t, n, s) {
          (this.parent = e), (this.data = t), (this._path = n), (this._key = s);
        }
        get path() {
          return this._path.concat(this._key);
        }
      }
      const w = (e, t) => {
        if (g(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return { success: !1, error: new o(e.common.issues) };
      };
      function x(e) {
        if (!e) return {};
        const { errorMap: t, invalid_type_error: n, required_error: s, description: r } = e;
        if (t && (n || s)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
        return t
          ? { errorMap: t, description: r }
          : {
              errorMap: (e, t) =>
                "invalid_type" !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                  ? { message: null != s ? s : t.defaultError }
                  : { message: null != n ? n : t.defaultError },
              description: r
            };
      }
      class E {
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
          return a(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: a(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new p(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: a(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent
            }
          };
        }
        _parseSync(e) {
          const t = this._parse(e);
          if (v(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          const t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          const n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          const s = {
              common: {
                issues: [],
                async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                contextualErrorMap: null == t ? void 0 : t.errorMap
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: a(e)
            },
            r = this._parseSync({ data: e, path: s.path, parent: s });
          return w(s, r);
        }
        async parseAsync(e, t) {
          const n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          const n = {
              common: { issues: [], contextualErrorMap: null == t ? void 0 : t.errorMap, async: !0 },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: a(e)
            },
            s = this._parse({ data: e, path: [], parent: n }),
            r = await (v(s) ? s : Promise.resolve(s));
          return w(n, r);
        }
        refine(e, t) {
          const n = (e) => ("string" == typeof t || void 0 === t ? { message: t } : "function" == typeof t ? t(e) : t);
          return this._refinement((t, s) => {
            const r = e(t),
              a = () => s.addIssue({ code: i.custom, ...n(t) });
            return "undefined" != typeof Promise && r instanceof Promise ? r.then((e) => !!e || (a(), !1)) : !!r || (a(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((n, s) => !!e(n) || (s.addIssue("function" == typeof t ? t(n, s) : t), !1));
        }
        _refinement(e) {
          return new ie({ schema: this, typeName: fe.ZodEffects, effect: { type: "refinement", refinement: e } });
        }
        optional() {
          return oe.create(this);
        }
        nullable() {
          return ce.create(this);
        }
        nullish() {
          return this.optional().nullable();
        }
        array() {
          return L.create(this);
        }
        promise() {
          return ae.create(this);
        }
        or(e) {
          return K.create([this, e]);
        }
        and(e) {
          return W.create(this, e);
        }
        transform(e) {
          return new ie({ schema: this, typeName: fe.ZodEffects, effect: { type: "transform", transform: e } });
        }
        default(e) {
          return new de({ innerType: this, defaultValue: "function" == typeof e ? e : () => e, typeName: fe.ZodDefault });
        }
        brand() {
          return new he({ typeName: fe.ZodBranded, type: this, ...x(void 0) });
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
      const O = /^c[^\s-]{8,}$/i,
        Z = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        T = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      class C extends E {
        constructor() {
          super(...arguments),
            (this._regex = (e, t, n) => this.refinement((t) => e.test(t), { validation: t, code: i.invalid_string, ...b.errToObj(n) })),
            (this.nonempty = (e) => this.min(1, b.errToObj(e))),
            (this.trim = () => new C({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] }));
        }
        _parse(e) {
          if (this._getType(e) !== r.string) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.string, received: t.parsedType }), m;
          }
          const t = new p();
          let n;
          for (const r of this._def.checks)
            if ("min" === r.kind)
              e.data.length < r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                h(n, { code: i.too_small, minimum: r.value, type: "string", inclusive: !0, message: r.message }),
                t.dirty());
            else if ("max" === r.kind)
              e.data.length > r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                h(n, { code: i.too_big, maximum: r.value, type: "string", inclusive: !0, message: r.message }),
                t.dirty());
            else if ("email" === r.kind)
              T.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)), h(n, { validation: "email", code: i.invalid_string, message: r.message }), t.dirty());
            else if ("uuid" === r.kind)
              Z.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)), h(n, { validation: "uuid", code: i.invalid_string, message: r.message }), t.dirty());
            else if ("cuid" === r.kind)
              O.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)), h(n, { validation: "cuid", code: i.invalid_string, message: r.message }), t.dirty());
            else if ("url" === r.kind)
              try {
                new URL(e.data);
              } catch (s) {
                (n = this._getOrReturnCtx(e, n)), h(n, { validation: "url", code: i.invalid_string, message: r.message }), t.dirty();
              }
            else
              "regex" === r.kind
                ? ((r.regex.lastIndex = 0),
                  r.regex.test(e.data) ||
                    ((n = this._getOrReturnCtx(e, n)),
                    h(n, { validation: "regex", code: i.invalid_string, message: r.message }),
                    t.dirty()))
                : "trim" === r.kind
                ? (e.data = e.data.trim())
                : "startsWith" === r.kind
                ? e.data.startsWith(r.value) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  h(n, { code: i.invalid_string, validation: { startsWith: r.value }, message: r.message }),
                  t.dirty())
                : "endsWith" === r.kind
                ? e.data.endsWith(r.value) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  h(n, { code: i.invalid_string, validation: { endsWith: r.value }, message: r.message }),
                  t.dirty())
                : s.assertNever(r);
          return { status: t.value, value: e.data };
        }
        _addCheck(e) {
          return new C({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...b.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...b.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...b.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...b.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...b.errToObj(t) });
        }
        startsWith(e, t) {
          return this._addCheck({ kind: "startsWith", value: e, ...b.errToObj(t) });
        }
        endsWith(e, t) {
          return this._addCheck({ kind: "endsWith", value: e, ...b.errToObj(t) });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...b.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...b.errToObj(t) });
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
      function R(e, t) {
        const n = (e.toString().split(".")[1] || "").length,
          s = (t.toString().split(".")[1] || "").length,
          r = n > s ? n : s;
        return (parseInt(e.toFixed(r).replace(".", "")) % parseInt(t.toFixed(r).replace(".", ""))) / Math.pow(10, r);
      }
      C.create = (e) => new C({ checks: [], typeName: fe.ZodString, ...x(e) });
      class j extends E {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
        }
        _parse(e) {
          if (this._getType(e) !== r.number) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.number, received: t.parsedType }), m;
          }
          let t;
          const n = new p();
          for (const r of this._def.checks)
            "int" === r.kind
              ? s.isInteger(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                h(t, { code: i.invalid_type, expected: "integer", received: "float", message: r.message }),
                n.dirty())
              : "min" === r.kind
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                h(t, { code: i.too_small, minimum: r.value, type: "number", inclusive: r.inclusive, message: r.message }),
                n.dirty())
              : "max" === r.kind
              ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                h(t, { code: i.too_big, maximum: r.value, type: "number", inclusive: r.inclusive, message: r.message }),
                n.dirty())
              : "multipleOf" === r.kind
              ? 0 !== R(e.data, r.value) &&
                ((t = this._getOrReturnCtx(e, t)), h(t, { code: i.not_multiple_of, multipleOf: r.value, message: r.message }), n.dirty())
              : s.assertNever(r);
          return { status: n.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, b.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, b.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, b.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, b.toString(t));
        }
        setLimit(e, t, n, s) {
          return new j({ ...this._def, checks: [...this._def.checks, { kind: e, value: t, inclusive: n, message: b.toString(s) }] });
        }
        _addCheck(e) {
          return new j({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: b.toString(e) });
        }
        positive(e) {
          return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: b.toString(e) });
        }
        negative(e) {
          return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: b.toString(e) });
        }
        nonpositive(e) {
          return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: b.toString(e) });
        }
        nonnegative(e) {
          return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: b.toString(e) });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: "multipleOf", value: e, message: b.toString(t) });
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
      j.create = (e) => new j({ checks: [], typeName: fe.ZodNumber, ...x(e) });
      class N extends E {
        _parse(e) {
          if (this._getType(e) !== r.bigint) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.bigint, received: t.parsedType }), m;
          }
          return f(e.data);
        }
      }
      N.create = (e) => new N({ typeName: fe.ZodBigInt, ...x(e) });
      class S extends E {
        _parse(e) {
          if (this._getType(e) !== r.boolean) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.boolean, received: t.parsedType }), m;
          }
          return f(e.data);
        }
      }
      S.create = (e) => new S({ typeName: fe.ZodBoolean, ...x(e) });
      class P extends E {
        _parse(e) {
          if (this._getType(e) !== r.date) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.date, received: t.parsedType }), m;
          }
          if (isNaN(e.data.getTime())) return h(this._getOrReturnCtx(e), { code: i.invalid_date }), m;
          const t = new p();
          let n;
          for (const r of this._def.checks)
            "min" === r.kind
              ? e.data.getTime() < r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                h(n, { code: i.too_small, message: r.message, inclusive: !0, minimum: r.value, type: "date" }),
                t.dirty())
              : "max" === r.kind
              ? e.data.getTime() > r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                h(n, { code: i.too_big, message: r.message, inclusive: !0, maximum: r.value, type: "date" }),
                t.dirty())
              : s.assertNever(r);
          return { status: t.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new P({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e.getTime(), message: b.toString(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e.getTime(), message: b.toString(t) });
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
      P.create = (e) => new P({ checks: [], typeName: fe.ZodDate, ...x(e) });
      class I extends E {
        _parse(e) {
          if (this._getType(e) !== r.undefined) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.undefined, received: t.parsedType }), m;
          }
          return f(e.data);
        }
      }
      I.create = (e) => new I({ typeName: fe.ZodUndefined, ...x(e) });
      class A extends E {
        _parse(e) {
          if (this._getType(e) !== r.null) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.null, received: t.parsedType }), m;
          }
          return f(e.data);
        }
      }
      A.create = (e) => new A({ typeName: fe.ZodNull, ...x(e) });
      class M extends E {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return f(e.data);
        }
      }
      M.create = (e) => new M({ typeName: fe.ZodAny, ...x(e) });
      class D extends E {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return f(e.data);
        }
      }
      D.create = (e) => new D({ typeName: fe.ZodUnknown, ...x(e) });
      class H extends E {
        _parse(e) {
          const t = this._getOrReturnCtx(e);
          return h(t, { code: i.invalid_type, expected: r.never, received: t.parsedType }), m;
        }
      }
      H.create = (e) => new H({ typeName: fe.ZodNever, ...x(e) });
      class $ extends E {
        _parse(e) {
          if (this._getType(e) !== r.undefined) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.void, received: t.parsedType }), m;
          }
          return f(e.data);
        }
      }
      $.create = (e) => new $({ typeName: fe.ZodVoid, ...x(e) });
      class L extends E {
        _parse(e) {
          const { ctx: t, status: n } = this._processInputParams(e),
            s = this._def;
          if (t.parsedType !== r.array) return h(t, { code: i.invalid_type, expected: r.array, received: t.parsedType }), m;
          if (
            (null !== s.minLength &&
              t.data.length < s.minLength.value &&
              (h(t, { code: i.too_small, minimum: s.minLength.value, type: "array", inclusive: !0, message: s.minLength.message }),
              n.dirty()),
            null !== s.maxLength &&
              t.data.length > s.maxLength.value &&
              (h(t, { code: i.too_big, maximum: s.maxLength.value, type: "array", inclusive: !0, message: s.maxLength.message }),
              n.dirty()),
            t.common.async)
          )
            return Promise.all(t.data.map((e, n) => s.type._parseAsync(new k(t, e, t.path, n)))).then((e) => p.mergeArray(n, e));
          const a = t.data.map((e, n) => s.type._parseSync(new k(t, e, t.path, n)));
          return p.mergeArray(n, a);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new L({ ...this._def, minLength: { value: e, message: b.toString(t) } });
        }
        max(e, t) {
          return new L({ ...this._def, maxLength: { value: e, message: b.toString(t) } });
        }
        length(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      var z;
      (L.create = (e, t) => new L({ type: e, minLength: null, maxLength: null, typeName: fe.ZodArray, ...x(t) })),
        (function (e) {
          e.mergeShapes = (e, t) => ({ ...e, ...t });
        })(z || (z = {}));
      const U = (e) => (t) => new V({ ...e, shape: () => ({ ...e.shape(), ...t }) });
      function q(e) {
        if (e instanceof V) {
          const t = {};
          for (const n in e.shape) {
            const s = e.shape[n];
            t[n] = oe.create(q(s));
          }
          return new V({ ...e._def, shape: () => t });
        }
        return e instanceof L
          ? L.create(q(e.element))
          : e instanceof oe
          ? oe.create(q(e.unwrap()))
          : e instanceof ce
          ? ce.create(q(e.unwrap()))
          : e instanceof J
          ? J.create(e.items.map((e) => q(e)))
          : e;
      }
      class V extends E {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = U(this._def)),
            (this.extend = U(this._def));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          const e = this._def.shape(),
            t = s.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== r.object) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.object, received: t.parsedType }), m;
          }
          const { status: t, ctx: n } = this._processInputParams(e),
            { shape: s, keys: a } = this._getCached(),
            o = [];
          if (!(this._def.catchall instanceof H && "strip" === this._def.unknownKeys)) for (const e in n.data) a.includes(e) || o.push(e);
          const c = [];
          for (const e of a) {
            const t = s[e],
              r = n.data[e];
            c.push({ key: { status: "valid", value: e }, value: t._parse(new k(n, r, n.path, e)), alwaysSet: e in n.data });
          }
          if (this._def.catchall instanceof H) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (const e of o) c.push({ key: { status: "valid", value: e }, value: { status: "valid", value: n.data[e] } });
            else if ("strict" === e) o.length > 0 && (h(n, { code: i.unrecognized_keys, keys: o }), t.dirty());
            else if ("strip" !== e) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
          } else {
            const e = this._def.catchall;
            for (const t of o) {
              const s = n.data[t];
              c.push({ key: { status: "valid", value: t }, value: e._parse(new k(n, s, n.path, t)), alwaysSet: t in n.data });
            }
          }
          return n.common.async
            ? Promise.resolve()
                .then(async () => {
                  const e = [];
                  for (const t of c) {
                    const n = await t.key;
                    e.push({ key: n, value: await t.value, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => p.mergeObjectSync(t, e))
            : p.mergeObjectSync(t, c);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            b.errToObj,
            new V({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, n) => {
                      var s, r, a, i;
                      const o =
                        null !== (a = null === (r = (s = this._def).errorMap) || void 0 === r ? void 0 : r.call(s, t, n).message) &&
                        void 0 !== a
                          ? a
                          : n.defaultError;
                      return "unrecognized_keys" === t.code
                        ? { message: null !== (i = b.errToObj(e).message) && void 0 !== i ? i : o }
                        : { message: o };
                    }
                  }
                : {})
            })
          );
        }
        strip() {
          return new V({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new V({ ...this._def, unknownKeys: "passthrough" });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        merge(e) {
          return new V({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => z.mergeShapes(this._def.shape(), e._def.shape()),
            typeName: fe.ZodObject
          });
        }
        catchall(e) {
          return new V({ ...this._def, catchall: e });
        }
        pick(e) {
          const t = {};
          return (
            s.objectKeys(e).map((e) => {
              this.shape[e] && (t[e] = this.shape[e]);
            }),
            new V({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          const t = {};
          return (
            s.objectKeys(this.shape).map((n) => {
              -1 === s.objectKeys(e).indexOf(n) && (t[n] = this.shape[n]);
            }),
            new V({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return q(this);
        }
        partial(e) {
          const t = {};
          if (e)
            return (
              s.objectKeys(this.shape).map((n) => {
                -1 === s.objectKeys(e).indexOf(n) ? (t[n] = this.shape[n]) : (t[n] = this.shape[n].optional());
              }),
              new V({ ...this._def, shape: () => t })
            );
          for (const e in this.shape) {
            const n = this.shape[e];
            t[e] = n.optional();
          }
          return new V({ ...this._def, shape: () => t });
        }
        required() {
          const e = {};
          for (const t in this.shape) {
            let n = this.shape[t];
            for (; n instanceof oe; ) n = n._def.innerType;
            e[t] = n;
          }
          return new V({ ...this._def, shape: () => e });
        }
        keyof() {
          return ne(s.objectKeys(this.shape));
        }
      }
      (V.create = (e, t) => new V({ shape: () => e, unknownKeys: "strip", catchall: H.create(), typeName: fe.ZodObject, ...x(t) })),
        (V.strictCreate = (e, t) =>
          new V({ shape: () => e, unknownKeys: "strict", catchall: H.create(), typeName: fe.ZodObject, ...x(t) })),
        (V.lazycreate = (e, t) => new V({ shape: e, unknownKeys: "strip", catchall: H.create(), typeName: fe.ZodObject, ...x(t) }));
      class K extends E {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            n = this._def.options;
          if (t.common.async)
            return Promise.all(
              n.map(async (e) => {
                const n = { ...t, common: { ...t.common, issues: [] }, parent: null };
                return { result: await e._parseAsync({ data: t.data, path: t.path, parent: n }), ctx: n };
              })
            ).then(function (e) {
              for (const t of e) if ("valid" === t.result.status) return t.result;
              for (const n of e) if ("dirty" === n.result.status) return t.common.issues.push(...n.ctx.common.issues), n.result;
              const n = e.map((e) => new o(e.ctx.common.issues));
              return h(t, { code: i.invalid_union, unionErrors: n }), m;
            });
          {
            let e;
            const s = [];
            for (const r of n) {
              const n = { ...t, common: { ...t.common, issues: [] }, parent: null },
                a = r._parseSync({ data: t.data, path: t.path, parent: n });
              if ("valid" === a.status) return a;
              "dirty" !== a.status || e || (e = { result: a, ctx: n }), n.common.issues.length && s.push(n.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const r = s.map((e) => new o(e));
            return h(t, { code: i.invalid_union, unionErrors: r }), m;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      K.create = (e, t) => new K({ options: e, typeName: fe.ZodUnion, ...x(t) });
      class B extends E {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.object) return h(t, { code: i.invalid_type, expected: r.object, received: t.parsedType }), m;
          const n = this.discriminator,
            s = t.data[n],
            a = this.options.get(s);
          return a
            ? t.common.async
              ? a._parseAsync({ data: t.data, path: t.path, parent: t })
              : a._parseSync({ data: t.data, path: t.path, parent: t })
            : (h(t, { code: i.invalid_union_discriminator, options: this.validDiscriminatorValues, path: [n] }), m);
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
        static create(e, t, n) {
          const s = new Map();
          try {
            t.forEach((t) => {
              const n = t.shape[e].value;
              s.set(n, t);
            });
          } catch (e) {
            throw new Error("The discriminator value could not be extracted from all the provided schemas");
          }
          if (s.size !== t.length) throw new Error("Some of the discriminator values are not unique");
          return new B({ typeName: fe.ZodDiscriminatedUnion, discriminator: e, options: s, ...x(n) });
        }
      }
      function F(e, t) {
        const n = a(e),
          i = a(t);
        if (e === t) return { valid: !0, data: e };
        if (n === r.object && i === r.object) {
          const n = s.objectKeys(t),
            r = s.objectKeys(e).filter((e) => -1 !== n.indexOf(e)),
            a = { ...e, ...t };
          for (const n of r) {
            const s = F(e[n], t[n]);
            if (!s.valid) return { valid: !1 };
            a[n] = s.data;
          }
          return { valid: !0, data: a };
        }
        if (n === r.array && i === r.array) {
          if (e.length !== t.length) return { valid: !1 };
          const n = [];
          for (let s = 0; s < e.length; s++) {
            const r = F(e[s], t[s]);
            if (!r.valid) return { valid: !1 };
            n.push(r.data);
          }
          return { valid: !0, data: n };
        }
        return n === r.date && i === r.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
      }
      class W extends E {
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e),
            s = (e, s) => {
              if (_(e) || _(s)) return m;
              const r = F(e.value, s.value);
              return r.valid
                ? ((y(e) || y(s)) && t.dirty(), { status: t.value, value: r.data })
                : (h(n, { code: i.invalid_intersection_types }), m);
            };
          return n.common.async
            ? Promise.all([
                this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
                this._def.right._parseAsync({ data: n.data, path: n.path, parent: n })
              ]).then(([e, t]) => s(e, t))
            : s(
                this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
                this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
              );
        }
      }
      W.create = (e, t, n) => new W({ left: e, right: t, typeName: fe.ZodIntersection, ...x(n) });
      class J extends E {
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.array) return h(n, { code: i.invalid_type, expected: r.array, received: n.parsedType }), m;
          if (n.data.length < this._def.items.length)
            return h(n, { code: i.too_small, minimum: this._def.items.length, inclusive: !0, type: "array" }), m;
          !this._def.rest &&
            n.data.length > this._def.items.length &&
            (h(n, { code: i.too_big, maximum: this._def.items.length, inclusive: !0, type: "array" }), t.dirty());
          const s = n.data
            .map((e, t) => {
              const s = this._def.items[t] || this._def.rest;
              return s ? s._parse(new k(n, e, n.path, t)) : null;
            })
            .filter((e) => !!e);
          return n.common.async ? Promise.all(s).then((e) => p.mergeArray(t, e)) : p.mergeArray(t, s);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new J({ ...this._def, rest: e });
        }
      }
      J.create = (e, t) => {
        if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new J({ items: e, typeName: fe.ZodTuple, rest: null, ...x(t) });
      };
      class G extends E {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.object) return h(n, { code: i.invalid_type, expected: r.object, received: n.parsedType }), m;
          const s = [],
            a = this._def.keyType,
            o = this._def.valueType;
          for (const e in n.data) s.push({ key: a._parse(new k(n, e, n.path, e)), value: o._parse(new k(n, n.data[e], n.path, e)) });
          return n.common.async ? p.mergeObjectAsync(t, s) : p.mergeObjectSync(t, s);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return new G(
            t instanceof E
              ? { keyType: e, valueType: t, typeName: fe.ZodRecord, ...x(n) }
              : { keyType: C.create(), valueType: e, typeName: fe.ZodRecord, ...x(t) }
          );
        }
      }
      class Y extends E {
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.map) return h(n, { code: i.invalid_type, expected: r.map, received: n.parsedType }), m;
          const s = this._def.keyType,
            a = this._def.valueType,
            o = [...n.data.entries()].map(([e, t], r) => ({
              key: s._parse(new k(n, e, n.path, [r, "key"])),
              value: a._parse(new k(n, t, n.path, [r, "value"]))
            }));
          if (n.common.async) {
            const e = new Map();
            return Promise.resolve().then(async () => {
              for (const n of o) {
                const s = await n.key,
                  r = await n.value;
                if ("aborted" === s.status || "aborted" === r.status) return m;
                ("dirty" !== s.status && "dirty" !== r.status) || t.dirty(), e.set(s.value, r.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            const e = new Map();
            for (const n of o) {
              const s = n.key,
                r = n.value;
              if ("aborted" === s.status || "aborted" === r.status) return m;
              ("dirty" !== s.status && "dirty" !== r.status) || t.dirty(), e.set(s.value, r.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      Y.create = (e, t, n) => new Y({ valueType: t, keyType: e, typeName: fe.ZodMap, ...x(n) });
      class Q extends E {
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.set) return h(n, { code: i.invalid_type, expected: r.set, received: n.parsedType }), m;
          const s = this._def;
          null !== s.minSize &&
            n.data.size < s.minSize.value &&
            (h(n, { code: i.too_small, minimum: s.minSize.value, type: "set", inclusive: !0, message: s.minSize.message }), t.dirty()),
            null !== s.maxSize &&
              n.data.size > s.maxSize.value &&
              (h(n, { code: i.too_big, maximum: s.maxSize.value, type: "set", inclusive: !0, message: s.maxSize.message }), t.dirty());
          const a = this._def.valueType;
          function o(e) {
            const n = new Set();
            for (const s of e) {
              if ("aborted" === s.status) return m;
              "dirty" === s.status && t.dirty(), n.add(s.value);
            }
            return { status: t.value, value: n };
          }
          const c = [...n.data.values()].map((e, t) => a._parse(new k(n, e, n.path, t)));
          return n.common.async ? Promise.all(c).then((e) => o(e)) : o(c);
        }
        min(e, t) {
          return new Q({ ...this._def, minSize: { value: e, message: b.toString(t) } });
        }
        max(e, t) {
          return new Q({ ...this._def, maxSize: { value: e, message: b.toString(t) } });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      Q.create = (e, t) => new Q({ valueType: e, minSize: null, maxSize: null, typeName: fe.ZodSet, ...x(t) });
      class X extends E {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.function) return h(t, { code: i.invalid_type, expected: r.function, received: t.parsedType }), m;
          function n(e, n) {
            return l({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, u(), c].filter((e) => !!e),
              issueData: { code: i.invalid_arguments, argumentsError: n }
            });
          }
          function s(e, n) {
            return l({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, u(), c].filter((e) => !!e),
              issueData: { code: i.invalid_return_type, returnTypeError: n }
            });
          }
          const a = { errorMap: t.common.contextualErrorMap },
            d = t.data;
          return this._def.returns instanceof ae
            ? f(async (...e) => {
                const t = new o([]),
                  r = await this._def.args.parseAsync(e, a).catch((s) => {
                    throw (t.addIssue(n(e, s)), t);
                  }),
                  i = await d(...r);
                return await this._def.returns._def.type.parseAsync(i, a).catch((e) => {
                  throw (t.addIssue(s(i, e)), t);
                });
              })
            : f((...e) => {
                const t = this._def.args.safeParse(e, a);
                if (!t.success) throw new o([n(e, t.error)]);
                const r = d(...t.data),
                  i = this._def.returns.safeParse(r, a);
                if (!i.success) throw new o([s(r, i.error)]);
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
          return new X({ ...this._def, args: J.create(e).rest(D.create()) });
        }
        returns(e) {
          return new X({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new X({ args: e || J.create([]).rest(D.create()), returns: t || D.create(), typeName: fe.ZodFunction, ...x(n) });
        }
      }
      class ee extends E {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ee.create = (e, t) => new ee({ getter: e, typeName: fe.ZodLazy, ...x(t) });
      class te extends E {
        _parse(e) {
          return e.data !== this._def.value
            ? (h(this._getOrReturnCtx(e), { code: i.invalid_literal, expected: this._def.value }), m)
            : { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ne(e, t) {
        return new se({ values: e, typeName: fe.ZodEnum, ...x(t) });
      }
      te.create = (e, t) => new te({ value: e, typeName: fe.ZodLiteral, ...x(t) });
      class se extends E {
        _parse(e) {
          if ("string" != typeof e.data) {
            const t = this._getOrReturnCtx(e),
              n = this._def.values;
            return h(t, { expected: s.joinValues(n), received: t.parsedType, code: i.invalid_type }), m;
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            const t = this._getOrReturnCtx(e),
              n = this._def.values;
            return h(t, { received: t.data, code: i.invalid_enum_value, options: n }), m;
          }
          return f(e.data);
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
      se.create = ne;
      class re extends E {
        _parse(e) {
          const t = s.getValidEnumValues(this._def.values),
            n = this._getOrReturnCtx(e);
          if (n.parsedType !== r.string && n.parsedType !== r.number) {
            const e = s.objectValues(t);
            return h(n, { expected: s.joinValues(e), received: n.parsedType, code: i.invalid_type }), m;
          }
          if (-1 === t.indexOf(e.data)) {
            const e = s.objectValues(t);
            return h(n, { received: n.data, code: i.invalid_enum_value, options: e }), m;
          }
          return f(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      re.create = (e, t) => new re({ values: e, typeName: fe.ZodNativeEnum, ...x(t) });
      class ae extends E {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.promise && !1 === t.common.async)
            return h(t, { code: i.invalid_type, expected: r.promise, received: t.parsedType }), m;
          const n = t.parsedType === r.promise ? t.data : Promise.resolve(t.data);
          return f(n.then((e) => this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap })));
        }
      }
      ae.create = (e, t) => new ae({ type: e, typeName: fe.ZodPromise, ...x(t) });
      class ie extends E {
        innerType() {
          return this._def.schema;
        }
        _parse(e) {
          const { status: t, ctx: n } = this._processInputParams(e),
            r = this._def.effect || null;
          if ("preprocess" === r.type) {
            const e = r.transform(n.data);
            return n.common.async
              ? Promise.resolve(e).then((e) => this._def.schema._parseAsync({ data: e, path: n.path, parent: n }))
              : this._def.schema._parseSync({ data: e, path: n.path, parent: n });
          }
          const a = {
            addIssue: (e) => {
              h(n, e), e.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            }
          };
          if (((a.addIssue = a.addIssue.bind(a)), "refinement" === r.type)) {
            const e = (e) => {
              const t = r.refinement(e, a);
              if (n.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              return e;
            };
            if (!1 === n.common.async) {
              const s = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
              return "aborted" === s.status ? m : ("dirty" === s.status && t.dirty(), e(s.value), { status: t.value, value: s.value });
            }
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((n) =>
                "aborted" === n.status
                  ? m
                  : ("dirty" === n.status && t.dirty(), e(n.value).then(() => ({ status: t.value, value: n.value })))
              );
          }
          if ("transform" === r.type) {
            if (!1 === n.common.async) {
              const e = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
              if (!g(e)) return e;
              const s = r.transform(e.value, a);
              if (s instanceof Promise)
                throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
              return { status: t.value, value: s };
            }
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((e) => (g(e) ? Promise.resolve(r.transform(e.value, a)).then((e) => ({ status: t.value, value: e })) : e));
          }
          s.assertNever(r);
        }
      }
      (ie.create = (e, t, n) => new ie({ schema: e, typeName: fe.ZodEffects, effect: t, ...x(n) })),
        (ie.createWithPreprocess = (e, t, n) =>
          new ie({ schema: t, effect: { type: "preprocess", transform: e }, typeName: fe.ZodEffects, ...x(n) }));
      class oe extends E {
        _parse(e) {
          return this._getType(e) === r.undefined ? f(void 0) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      oe.create = (e, t) => new oe({ innerType: e, typeName: fe.ZodOptional, ...x(t) });
      class ce extends E {
        _parse(e) {
          return this._getType(e) === r.null ? f(null) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ce.create = (e, t) => new ce({ innerType: e, typeName: fe.ZodNullable, ...x(t) });
      class de extends E {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          let n = t.data;
          return (
            t.parsedType === r.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({ data: n, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      de.create = (e, t) => new oe({ innerType: e, typeName: fe.ZodOptional, ...x(t) });
      class ue extends E {
        _parse(e) {
          if (this._getType(e) !== r.nan) {
            const t = this._getOrReturnCtx(e);
            return h(t, { code: i.invalid_type, expected: r.nan, received: t.parsedType }), m;
          }
          return { status: "valid", value: e.data };
        }
      }
      ue.create = (e) => new ue({ typeName: fe.ZodNaN, ...x(e) });
      const le = Symbol("zod_brand");
      class he extends E {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      const pe = (e, t = {}, n) =>
          e
            ? M.create().superRefine((s, r) => {
                if (!e(s)) {
                  const e = "function" == typeof t ? t(s) : t,
                    a = "string" == typeof e ? { message: e } : e;
                  r.addIssue({ code: "custom", ...a, fatal: n });
                }
              })
            : M.create(),
        me = { object: V.lazycreate };
      var fe;
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
      })(fe || (fe = {}));
      const _e = C.create,
        ye = j.create,
        ge = ue.create,
        ve = N.create,
        be = S.create,
        ke = P.create,
        we = I.create,
        xe = A.create,
        Ee = M.create,
        Oe = D.create,
        Ze = H.create,
        Te = $.create,
        Ce = L.create,
        Re = V.create,
        je = V.strictCreate,
        Ne = K.create,
        Se = B.create,
        Pe = W.create,
        Ie = J.create,
        Ae = G.create,
        Me = Y.create,
        De = Q.create,
        He = X.create,
        $e = ee.create,
        Le = te.create,
        ze = se.create,
        Ue = re.create,
        qe = ae.create,
        Ve = ie.create,
        Ke = oe.create,
        Be = ce.create,
        Fe = ie.createWithPreprocess,
        We = m;
      var Je = Object.freeze({
        __proto__: null,
        getParsedType: a,
        ZodParsedType: r,
        defaultErrorMap: c,
        setErrorMap: function (e) {
          d = e;
        },
        getErrorMap: u,
        makeIssue: l,
        EMPTY_PATH: [],
        addIssueToContext: h,
        ParseStatus: p,
        INVALID: m,
        DIRTY: (e) => ({ status: "dirty", value: e }),
        OK: f,
        isAborted: _,
        isDirty: y,
        isValid: g,
        isAsync: v,
        ZodType: E,
        ZodString: C,
        ZodNumber: j,
        ZodBigInt: N,
        ZodBoolean: S,
        ZodDate: P,
        ZodUndefined: I,
        ZodNull: A,
        ZodAny: M,
        ZodUnknown: D,
        ZodNever: H,
        ZodVoid: $,
        ZodArray: L,
        get objectUtil() {
          return z;
        },
        ZodObject: V,
        ZodUnion: K,
        ZodDiscriminatedUnion: B,
        ZodIntersection: W,
        ZodTuple: J,
        ZodRecord: G,
        ZodMap: Y,
        ZodSet: Q,
        ZodFunction: X,
        ZodLazy: ee,
        ZodLiteral: te,
        ZodEnum: se,
        ZodNativeEnum: re,
        ZodPromise: ae,
        ZodEffects: ie,
        ZodTransformer: ie,
        ZodOptional: oe,
        ZodNullable: ce,
        ZodDefault: de,
        ZodNaN: ue,
        BRAND: le,
        ZodBranded: he,
        custom: pe,
        Schema: E,
        ZodSchema: E,
        late: me,
        get ZodFirstPartyTypeKind() {
          return fe;
        },
        any: Ee,
        array: Ce,
        bigint: ve,
        boolean: be,
        date: ke,
        discriminatedUnion: Se,
        effect: Ve,
        enum: ze,
        function: He,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) => pe((t) => t instanceof e, t, !0),
        intersection: Pe,
        lazy: $e,
        literal: Le,
        map: Me,
        nan: ge,
        nativeEnum: Ue,
        never: Ze,
        null: xe,
        nullable: Be,
        number: ye,
        object: Re,
        oboolean: () => be().optional(),
        onumber: () => ye().optional(),
        optional: Ke,
        ostring: () => _e().optional(),
        preprocess: Fe,
        promise: qe,
        record: Ae,
        set: De,
        strictObject: je,
        string: _e,
        transformer: Ve,
        tuple: Ie,
        undefined: we,
        union: Ne,
        unknown: Oe,
        void: Te,
        NEVER: We,
        ZodIssueCode: i,
        quotelessJson: (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: o
      });
    }
  }
]);
