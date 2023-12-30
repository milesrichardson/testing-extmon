!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 232));
})([
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return a;
      });
    const r = "Panel.loaded",
      o = "Panel.animated",
      i = "Storage.error",
      s = "Panel.tooltipsShowed",
      a = "data-consent-accepted";
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var r = n(32);
    const o = Object(r.detect)(),
      i = o && o.name,
      s = o && o.version,
      a = (o && o.os, "chrome" === i),
      u = "firefox" === i,
      c = "edge-chromium" === i || "edge" === i;
  },
  function (e, t, n) {
    "use strict";
    t.a = class {
      constructor() {
        (window.log = () => {}),
          (window.debug = () => {}),
          (window.error = () => {}),
          sdk.config.debug && ((window.log = console.log), (window.debug = console.debug), (window.error = console.error));
      }
    };
  },
  ,
  ,
  function (e, t) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  function (e, t, n) {
    "use strict";
    t.a = class {
      constructor() {
        this.callbacks = [];
      }
      add(e) {
        if ("function" != typeof e) return !1;
        this.callbacks.push(e);
        return { detach: this.detach.bind(this, this.callbacks.length - 1) };
      }
      dispatch(e) {
        for (const t in this.callbacks)
          try {
            this.callbacks[t](e);
          } catch (e) {}
        return !0;
      }
      detach(e) {
        return this.callbacks.splice(e, 1), !0;
      }
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r = t;
      function o(e, t, n) {
        for (var r = Object.keys(t), o = 0; o < r.length; ++o) (void 0 !== e[r[o]] && n) || (e[r[o]] = t[r[o]]);
        return e;
      }
      function i(e) {
        function t(e, n) {
          if (!(this instanceof t)) return new t(e, n);
          Object.defineProperty(this, "message", {
            get: function () {
              return e;
            }
          }),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, t)
              : Object.defineProperty(this, "stack", { value: new Error().stack || "" }),
            n && o(this, n);
        }
        return (
          ((t.prototype = Object.create(Error.prototype)).constructor = t),
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return e;
            }
          }),
          (t.prototype.toString = function () {
            return this.name + ": " + this.message;
          }),
          t
        );
      }
      (r.asPromise = n(75)),
        (r.base64 = n(41)),
        (r.EventEmitter = n(76)),
        (r.float = n(77)),
        (r.inquire = n(78)),
        (r.utf8 = n(79)),
        (r.pool = n(80)),
        (r.LongBits = n(81)),
        (r.global = ("undefined" != typeof window && window) || (void 0 !== e && e) || ("undefined" != typeof self && self) || this),
        (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
        (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
        (r.isNode = Boolean(r.global.process && r.global.process.versions && r.global.process.versions.node)),
        (r.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (r.isString = function (e) {
          return "string" == typeof e || e instanceof String;
        }),
        (r.isObject = function (e) {
          return e && "object" == typeof e;
        }),
        (r.isset = r.isSet =
          function (e, t) {
            var n = e[t];
            return (
              !(null == n || !e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
            );
          }),
        (r.Buffer = (function () {
          try {
            var e = r.inquire("buffer").Buffer;
            return e.prototype.utf8Write ? e : null;
          } catch (e) {
            return null;
          }
        })()),
        (r._Buffer_from = null),
        (r._Buffer_allocUnsafe = null),
        (r.newBuffer = function (e) {
          return "number" == typeof e
            ? r.Buffer
              ? r._Buffer_allocUnsafe(e)
              : new r.Array(e)
            : r.Buffer
            ? r._Buffer_from(e)
            : "undefined" == typeof Uint8Array
            ? e
            : new Uint8Array(e);
        }),
        (r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
        (r.Long = (r.global.dcodeIO && r.global.dcodeIO.Long) || r.global.Long || r.inquire("long")),
        (r.key2Re = /^true|false|0|1$/),
        (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
        (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
        (r.longToHash = function (e) {
          return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash;
        }),
        (r.longFromHash = function (e, t) {
          var n = r.LongBits.fromHash(e);
          return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
        }),
        (r.merge = o),
        (r.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        }),
        (r.newError = i),
        (r.ProtocolError = i("ProtocolError")),
        (r.oneOfGetter = function (e) {
          for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
          return function () {
            for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
              if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n];
          };
        }),
        (r.oneOfSetter = function (e) {
          return function (t) {
            for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]];
          };
        }),
        (r.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }),
        (r._configure = function () {
          var e = r.Buffer;
          e
            ? ((r._Buffer_from =
                (e.from !== Uint8Array.from && e.from) ||
                function (t, n) {
                  return new e(t, n);
                }),
              (r._Buffer_allocUnsafe =
                e.allocUnsafe ||
                function (t) {
                  return new e(t);
                }))
            : (r._Buffer_from = r._Buffer_allocUnsafe = null);
        });
    }).call(this, n(21));
  },
  function (e, t, n) {
    var r = n(30),
      o = n(45),
      i = n(46),
      s = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : s && s in Object(e) ? o(e) : i(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  function (e, t, n) {
    var r = n(36),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r || o || Function("return this")();
    e.exports = i;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o,
      i,
      s,
      a,
      u = n(73),
      c = u.Reader,
      p = u.Writer,
      l = u.util,
      f = u.roots.default || (u.roots.default = {});
    (f.proto =
      (((s = {}).api =
        (((i = {}).request =
          (((r = {}).AdConfig = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.AdConfig(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.AdConfig) return e;
                var t = new f.proto.api.request.AdConfig();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.AdConfig.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.AdConsumed = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.AdConsumed(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.AdConsumed) return e;
                var t = new f.proto.api.request.AdConsumed();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.AdConsumed.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Bandwidth = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Bandwidth(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Bandwidth) return e;
                var t = new f.proto.api.request.Bandwidth();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Bandwidth.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.BandwidthLimitReached = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.BandwidthLimitReached(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.BandwidthLimitReached) return e;
                var t = new f.proto.api.request.BandwidthLimitReached();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo)
                    throw TypeError(".proto.api.request.BandwidthLimitReached.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Base = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Base(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Base) return e;
                var t = new f.proto.api.request.Base();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Base.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.BNCrf = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.payload = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.payload),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.BNCrf(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.payload = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("payload")) throw l.ProtocolError("missing required 'payload'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.payload) ? null : "payload: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.BNCrf) return e;
                var t = new f.proto.api.request.BNCrf();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.BNCrf.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.payload && (t.payload = String(e.payload)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.payload = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.payload && e.hasOwnProperty("payload") && (n.payload = e.payload),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.BNLink = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.email = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.email),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.BNLink(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.email = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("email")) throw l.ProtocolError("missing required 'email'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.email) ? null : "email: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.BNLink) return e;
                var t = new f.proto.api.request.BNLink();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.BNLink.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.email && (t.email = String(e.email)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.email = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.BraintreeToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.BraintreeToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.BraintreeToken) return e;
                var t = new f.proto.api.request.BraintreeToken();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.BraintreeToken.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.ClientNotificationAcknowledge = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.message_id = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.message_id && Object.hasOwnProperty.call(e, "message_id") && t.uint32(18).string(e.message_id),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.ClientNotificationAcknowledge(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.message_id = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : null != e.message_id && e.hasOwnProperty("message_id") && !l.isString(e.message_id)
                  ? "message_id: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.ClientNotificationAcknowledge) return e;
                var t = new f.proto.api.request.ClientNotificationAcknowledge();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo)
                    throw TypeError(".proto.api.request.ClientNotificationAcknowledge.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.message_id && (t.message_id = String(e.message_id)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.message_id = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.message_id && e.hasOwnProperty("message_id") && (n.message_id = e.message_id),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Config = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Config(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Config) return e;
                var t = new f.proto.api.request.Config();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Config.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.DeviceTag = (function () {
            function e(e) {
              if (((this.tags = []), e)) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.tags = l.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.tags && e.tags.length)
                )
                  for (var n = 0; n < e.tags.length; ++n) f.proto.api.KeyValue.encode(e.tags[n], t.uint32(18).fork()).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.DeviceTag(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      (r.tags && r.tags.length) || (r.tags = []), r.tags.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if ((n = f.proto.api.DeviceInfo.verify(e.DeviceInfo))) return "DeviceInfo." + n;
                if (null != e.tags && e.hasOwnProperty("tags")) {
                  if (!Array.isArray(e.tags)) return "tags: array expected";
                  for (var t = 0; t < e.tags.length; ++t) {
                    var n;
                    if ((n = f.proto.api.KeyValue.verify(e.tags[t]))) return "tags." + n;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.DeviceTag) return e;
                var t = new f.proto.api.request.DeviceTag();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.DeviceTag.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                if (e.tags) {
                  if (!Array.isArray(e.tags)) throw TypeError(".proto.api.request.DeviceTag.tags: array expected");
                  t.tags = [];
                  for (var n = 0; n < e.tags.length; ++n) {
                    if ("object" != typeof e.tags[n]) throw TypeError(".proto.api.request.DeviceTag.tags: object expected");
                    t.tags[n] = f.proto.api.KeyValue.fromObject(e.tags[n]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && (n.tags = []),
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  e.tags && e.tags.length)
                ) {
                  n.tags = [];
                  for (var r = 0; r < e.tags.length; ++r) n.tags[r] = f.proto.api.KeyValue.toObject(e.tags[r], t);
                }
                return n;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.DownloadAppEmailSignup = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.email_address = ""),
              (e.prototype.are_notifications_allowed = !1),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  null != e.DeviceInfo &&
                    Object.hasOwnProperty.call(e, "DeviceInfo") &&
                    f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.email_address && Object.hasOwnProperty.call(e, "email_address") && t.uint32(18).string(e.email_address),
                  null != e.are_notifications_allowed &&
                    Object.hasOwnProperty.call(e, "are_notifications_allowed") &&
                    t.uint32(24).bool(e.are_notifications_allowed),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.DownloadAppEmailSignup(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.email_address = e.string();
                      break;
                    case 3:
                      r.are_notifications_allowed = e.bool();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.DeviceInfo && e.hasOwnProperty("DeviceInfo")) {
                  var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                  if (t) return "DeviceInfo." + t;
                }
                return null != e.email_address && e.hasOwnProperty("email_address") && !l.isString(e.email_address)
                  ? "email_address: string expected"
                  : null != e.are_notifications_allowed &&
                    e.hasOwnProperty("are_notifications_allowed") &&
                    "boolean" != typeof e.are_notifications_allowed
                  ? "are_notifications_allowed: boolean expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.DownloadAppEmailSignup) return e;
                var t = new f.proto.api.request.DownloadAppEmailSignup();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo)
                    throw TypeError(".proto.api.request.DownloadAppEmailSignup.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return (
                  null != e.email_address && (t.email_address = String(e.email_address)),
                  null != e.are_notifications_allowed && (t.are_notifications_allowed = Boolean(e.are_notifications_allowed)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.email_address = ""), (n.are_notifications_allowed = !1)),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.email_address && e.hasOwnProperty("email_address") && (n.email_address = e.email_address),
                  null != e.are_notifications_allowed &&
                    e.hasOwnProperty("are_notifications_allowed") &&
                    (n.are_notifications_allowed = e.are_notifications_allowed),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.IosBetaSignUp = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.email = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.email),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.IosBetaSignUp(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.email = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("email")) throw l.ProtocolError("missing required 'email'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.email) ? null : "email: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.IosBetaSignUp) return e;
                var t = new f.proto.api.request.IosBetaSignUp();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.IosBetaSignUp.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.email && (t.email = String(e.email)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.email = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.KochavaData = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.KochavaData(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.KochavaData) return e;
                var t = new f.proto.api.request.KochavaData();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.KochavaData.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Purchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t, n;
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.payload = ""),
              (e.prototype.purchase_type = 1),
              (e.prototype.credit_card_data = null),
              (e.prototype.plan = ""),
              (e.prototype.vendor_plan_id = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.payload),
                  null != e.purchase_type && Object.hasOwnProperty.call(e, "purchase_type") && t.uint32(24).int32(e.purchase_type),
                  null != e.credit_card_data &&
                    Object.hasOwnProperty.call(e, "credit_card_data") &&
                    f.proto.api.CreditCard.encode(e.credit_card_data, t.uint32(34).fork()).ldelim(),
                  null != e.plan && Object.hasOwnProperty.call(e, "plan") && t.uint32(42).string(e.plan),
                  null != e.vendor_plan_id && Object.hasOwnProperty.call(e, "vendor_plan_id") && t.uint32(50).string(e.vendor_plan_id),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Purchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.payload = e.string();
                      break;
                    case 3:
                      r.purchase_type = e.int32();
                      break;
                    case 4:
                      r.credit_card_data = f.proto.api.CreditCard.decode(e, e.uint32());
                      break;
                    case 5:
                      r.plan = e.string();
                      break;
                    case 6:
                      r.vendor_plan_id = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("payload")) throw l.ProtocolError("missing required 'payload'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t;
                if ((t = f.proto.api.DeviceInfo.verify(e.DeviceInfo))) return "DeviceInfo." + t;
                if (!l.isString(e.payload)) return "payload: string expected";
                if (null != e.purchase_type && e.hasOwnProperty("purchase_type"))
                  switch (e.purchase_type) {
                    default:
                      return "purchase_type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                  }
                return null != e.credit_card_data &&
                  e.hasOwnProperty("credit_card_data") &&
                  (t = f.proto.api.CreditCard.verify(e.credit_card_data))
                  ? "credit_card_data." + t
                  : null != e.plan && e.hasOwnProperty("plan") && !l.isString(e.plan)
                  ? "plan: string expected"
                  : null != e.vendor_plan_id && e.hasOwnProperty("vendor_plan_id") && !l.isString(e.vendor_plan_id)
                  ? "vendor_plan_id: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Purchase) return e;
                var t = new f.proto.api.request.Purchase();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Purchase.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                switch ((null != e.payload && (t.payload = String(e.payload)), e.purchase_type)) {
                  case "APP_STORE":
                  case 1:
                    t.purchase_type = 1;
                    break;
                  case "CREDIT_CARD":
                  case 2:
                    t.purchase_type = 2;
                    break;
                  case "PAYPAL":
                  case 3:
                    t.purchase_type = 3;
                    break;
                  case "GOOGLE_PLAY":
                  case 4:
                    t.purchase_type = 4;
                    break;
                  case "WIN_STORE":
                  case 5:
                    t.purchase_type = 5;
                }
                if (null != e.credit_card_data) {
                  if ("object" != typeof e.credit_card_data)
                    throw TypeError(".proto.api.request.Purchase.credit_card_data: object expected");
                  t.credit_card_data = f.proto.api.CreditCard.fromObject(e.credit_card_data);
                }
                return (
                  null != e.plan && (t.plan = String(e.plan)), null != e.vendor_plan_id && (t.vendor_plan_id = String(e.vendor_plan_id)), t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.DeviceInfo = null),
                    (n.payload = ""),
                    (n.purchase_type = t.enums === String ? "APP_STORE" : 1),
                    (n.credit_card_data = null),
                    (n.plan = ""),
                    (n.vendor_plan_id = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.payload && e.hasOwnProperty("payload") && (n.payload = e.payload),
                  null != e.purchase_type &&
                    e.hasOwnProperty("purchase_type") &&
                    (n.purchase_type = t.enums === String ? f.proto.api.request.Purchase.Type[e.purchase_type] : e.purchase_type),
                  null != e.credit_card_data &&
                    e.hasOwnProperty("credit_card_data") &&
                    (n.credit_card_data = f.proto.api.CreditCard.toObject(e.credit_card_data, t)),
                  null != e.plan && e.hasOwnProperty("plan") && (n.plan = e.plan),
                  null != e.vendor_plan_id && e.hasOwnProperty("vendor_plan_id") && (n.vendor_plan_id = e.vendor_plan_id),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.Type =
                ((t = {}),
                ((n = Object.create(t))[(t[1] = "APP_STORE")] = 1),
                (n[(t[2] = "CREDIT_CARD")] = 2),
                (n[(t[3] = "PAYPAL")] = 3),
                (n[(t[4] = "GOOGLE_PLAY")] = 4),
                (n[(t[5] = "WIN_STORE")] = 5),
                n)),
              e
            );
          })()),
          (r.PushToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.token = ""),
              (e.prototype.tz_name = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.token),
                  t.uint32(26).string(e.tz_name),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.PushToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.token = e.string();
                      break;
                    case 3:
                      r.tz_name = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("token")) throw l.ProtocolError("missing required 'token'", { instance: r });
                if (!r.hasOwnProperty("tz_name")) throw l.ProtocolError("missing required 'tz_name'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : l.isString(e.token)
                  ? l.isString(e.tz_name)
                    ? null
                    : "tz_name: string expected"
                  : "token: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.PushToken) return e;
                var t = new f.proto.api.request.PushToken();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.PushToken.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.token && (t.token = String(e.token)), null != e.tz_name && (t.tz_name = String(e.tz_name)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.token = ""), (n.tz_name = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  null != e.tz_name && e.hasOwnProperty("tz_name") && (n.tz_name = e.tz_name),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Redeem = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.code = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.code),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Redeem(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.code = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("code")) throw l.ProtocolError("missing required 'code'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.code) ? null : "code: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Redeem) return e;
                var t = new f.proto.api.request.Redeem();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Redeem.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.code && (t.code = String(e.code)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.code = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.code && e.hasOwnProperty("code") && (n.code = e.code),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.RestorePassword = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.email = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.email),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.RestorePassword(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.email = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("email")) throw l.ProtocolError("missing required 'email'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.email) ? null : "email: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.RestorePassword) return e;
                var t = new f.proto.api.request.RestorePassword();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.RestorePassword.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.email && (t.email = String(e.email)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.email = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.RestorePurchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.payload = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.payload),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.RestorePurchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.payload = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("payload")) throw l.ProtocolError("missing required 'payload'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.payload) ? null : "payload: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.RestorePurchase) return e;
                var t = new f.proto.api.request.RestorePurchase();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.RestorePurchase.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.payload && (t.payload = String(e.payload)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.payload = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.payload && e.hasOwnProperty("payload") && (n.payload = e.payload),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.SD = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.requested_country = ""),
              (e.prototype.additional_data = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.requested_country),
                  null != e.additional_data && Object.hasOwnProperty.call(e, "additional_data") && t.uint32(26).string(e.additional_data),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.SD(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.requested_country = e.string();
                      break;
                    case 3:
                      r.additional_data = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("requested_country")) throw l.ProtocolError("missing required 'requested_country'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : l.isString(e.requested_country)
                  ? null != e.additional_data && e.hasOwnProperty("additional_data") && !l.isString(e.additional_data)
                    ? "additional_data: string expected"
                    : null
                  : "requested_country: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.SD) return e;
                var t = new f.proto.api.request.SD();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.SD.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return (
                  null != e.requested_country && (t.requested_country = String(e.requested_country)),
                  null != e.additional_data && (t.additional_data = String(e.additional_data)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.requested_country = ""), (n.additional_data = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.requested_country && e.hasOwnProperty("requested_country") && (n.requested_country = e.requested_country),
                  null != e.additional_data && e.hasOwnProperty("additional_data") && (n.additional_data = e.additional_data),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.SelfPush = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.message_id = ""),
              (e.prototype.title = ""),
              (e.prototype.body = ""),
              (e.prototype.action = ""),
              (e.prototype.action_params = ""),
              (e.prototype.silent = !1),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.message_id),
                  t.uint32(26).string(e.title),
                  t.uint32(34).string(e.body),
                  t.uint32(42).string(e.action),
                  null != e.action_params && Object.hasOwnProperty.call(e, "action_params") && t.uint32(50).string(e.action_params),
                  t.uint32(56).bool(e.silent),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.SelfPush(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.message_id = e.string();
                      break;
                    case 3:
                      r.title = e.string();
                      break;
                    case 4:
                      r.body = e.string();
                      break;
                    case 5:
                      r.action = e.string();
                      break;
                    case 6:
                      r.action_params = e.string();
                      break;
                    case 7:
                      r.silent = e.bool();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("message_id")) throw l.ProtocolError("missing required 'message_id'", { instance: r });
                if (!r.hasOwnProperty("title")) throw l.ProtocolError("missing required 'title'", { instance: r });
                if (!r.hasOwnProperty("body")) throw l.ProtocolError("missing required 'body'", { instance: r });
                if (!r.hasOwnProperty("action")) throw l.ProtocolError("missing required 'action'", { instance: r });
                if (!r.hasOwnProperty("silent")) throw l.ProtocolError("missing required 'silent'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : l.isString(e.message_id)
                  ? l.isString(e.title)
                    ? l.isString(e.body)
                      ? l.isString(e.action)
                        ? null != e.action_params && e.hasOwnProperty("action_params") && !l.isString(e.action_params)
                          ? "action_params: string expected"
                          : "boolean" != typeof e.silent
                          ? "silent: boolean expected"
                          : null
                        : "action: string expected"
                      : "body: string expected"
                    : "title: string expected"
                  : "message_id: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.SelfPush) return e;
                var t = new f.proto.api.request.SelfPush();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.SelfPush.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return (
                  null != e.message_id && (t.message_id = String(e.message_id)),
                  null != e.title && (t.title = String(e.title)),
                  null != e.body && (t.body = String(e.body)),
                  null != e.action && (t.action = String(e.action)),
                  null != e.action_params && (t.action_params = String(e.action_params)),
                  null != e.silent && (t.silent = Boolean(e.silent)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.DeviceInfo = null),
                    (n.message_id = ""),
                    (n.title = ""),
                    (n.body = ""),
                    (n.action = ""),
                    (n.action_params = ""),
                    (n.silent = !1)),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.message_id && e.hasOwnProperty("message_id") && (n.message_id = e.message_id),
                  null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                  null != e.body && e.hasOwnProperty("body") && (n.body = e.body),
                  null != e.action && e.hasOwnProperty("action") && (n.action = e.action),
                  null != e.action_params && e.hasOwnProperty("action_params") && (n.action_params = e.action_params),
                  null != e.silent && e.hasOwnProperty("silent") && (n.silent = e.silent),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Signin = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.login = ""),
              (e.prototype.password = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.login),
                  t.uint32(26).string(e.password),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Signin(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.login = e.string();
                      break;
                    case 3:
                      r.password = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("login")) throw l.ProtocolError("missing required 'login'", { instance: r });
                if (!r.hasOwnProperty("password")) throw l.ProtocolError("missing required 'password'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : l.isString(e.login)
                  ? l.isString(e.password)
                    ? null
                    : "password: string expected"
                  : "login: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Signin) return e;
                var t = new f.proto.api.request.Signin();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Signin.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.login && (t.login = String(e.login)), null != e.password && (t.password = String(e.password)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.login = ""), (n.password = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.login && e.hasOwnProperty("login") && (n.login = e.login),
                  null != e.password && e.hasOwnProperty("password") && (n.password = e.password),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.SignInByMagicLink = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.auth_magic_link = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.auth_magic_link),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.SignInByMagicLink(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.auth_magic_link = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("auth_magic_link")) throw l.ProtocolError("missing required 'auth_magic_link'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : l.isString(e.auth_magic_link) ? null : "auth_magic_link: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.SignInByMagicLink) return e;
                var t = new f.proto.api.request.SignInByMagicLink();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.SignInByMagicLink.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.auth_magic_link && (t.auth_magic_link = String(e.auth_magic_link)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.auth_magic_link = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.auth_magic_link && e.hasOwnProperty("auth_magic_link") && (n.auth_magic_link = e.auth_magic_link),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.SigninWithToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.SigninWithToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.SigninWithToken) return e;
                var t = new f.proto.api.request.SigninWithToken();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.SigninWithToken.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.token = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Signout = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Signout(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Signout) return e;
                var t = new f.proto.api.request.Signout();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Signout.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Signup = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.email = ""),
              (e.prototype.password = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.email),
                  t.uint32(26).string(e.password),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Signup(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.email = e.string();
                      break;
                    case 3:
                      r.password = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                if (!r.hasOwnProperty("email")) throw l.ProtocolError("missing required 'email'", { instance: r });
                if (!r.hasOwnProperty("password")) throw l.ProtocolError("missing required 'password'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : l.isString(e.email)
                  ? l.isString(e.password)
                    ? null
                    : "password: string expected"
                  : "email: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Signup) return e;
                var t = new f.proto.api.request.Signup();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Signup.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return null != e.email && (t.email = String(e.email)), null != e.password && (t.password = String(e.password)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.email = ""), (n.password = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                  null != e.password && e.hasOwnProperty("password") && (n.password = e.password),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.SignupMultiDevice = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.display_group_id = 0),
              (e.prototype.email = ""),
              (e.prototype.password = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.display_group_id &&
                    Object.hasOwnProperty.call(e, "display_group_id") &&
                    t.uint32(16).uint32(e.display_group_id),
                  null != e.email && Object.hasOwnProperty.call(e, "email") && t.uint32(26).string(e.email),
                  null != e.password && Object.hasOwnProperty.call(e, "password") && t.uint32(34).string(e.password),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.SignupMultiDevice(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.display_group_id = e.uint32();
                      break;
                    case 3:
                      r.email = e.string();
                      break;
                    case 4:
                      r.password = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t
                  ? "DeviceInfo." + t
                  : null != e.display_group_id && e.hasOwnProperty("display_group_id") && !l.isInteger(e.display_group_id)
                  ? "display_group_id: integer expected"
                  : null != e.email && e.hasOwnProperty("email") && !l.isString(e.email)
                  ? "email: string expected"
                  : null != e.password && e.hasOwnProperty("password") && !l.isString(e.password)
                  ? "password: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.SignupMultiDevice) return e;
                var t = new f.proto.api.request.SignupMultiDevice();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.SignupMultiDevice.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return (
                  null != e.display_group_id && (t.display_group_id = e.display_group_id >>> 0),
                  null != e.email && (t.email = String(e.email)),
                  null != e.password && (t.password = String(e.password)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.DeviceInfo = null), (n.display_group_id = 0), (n.email = ""), (n.password = "")),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.display_group_id && e.hasOwnProperty("display_group_id") && (n.display_group_id = e.display_group_id),
                  null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                  null != e.password && e.hasOwnProperty("password") && (n.password = e.password),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.Status = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.Status(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.Status) return e;
                var t = new f.proto.api.request.Status();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.Status.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (r.UpsellPurchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t, n;
            return (
              (e.prototype.DeviceInfo = null),
              (e.prototype.upsell_session_id = ""),
              (e.prototype.upsell_type = 1),
              (e.prototype.option = 1),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(),
                  null != e.upsell_session_id &&
                    Object.hasOwnProperty.call(e, "upsell_session_id") &&
                    t.uint32(18).string(e.upsell_session_id),
                  null != e.upsell_type && Object.hasOwnProperty.call(e, "upsell_type") && t.uint32(24).int32(e.upsell_type),
                  null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(32).int32(e.option),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.UpsellPurchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    case 2:
                      r.upsell_session_id = e.string();
                      break;
                    case 3:
                      r.upsell_type = e.int32();
                      break;
                    case 4:
                      r.option = e.int32();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                if (t) return "DeviceInfo." + t;
                if (null != e.upsell_session_id && e.hasOwnProperty("upsell_session_id") && !l.isString(e.upsell_session_id))
                  return "upsell_session_id: string expected";
                if (null != e.upsell_type && e.hasOwnProperty("upsell_type"))
                  switch (e.upsell_type) {
                    default:
                      return "upsell_type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                  }
                if (null != e.option && e.hasOwnProperty("option"))
                  switch (e.option) {
                    default:
                      return "option: enum value expected";
                    case 1:
                    case 2:
                  }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.UpsellPurchase) return e;
                var t = new f.proto.api.request.UpsellPurchase();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.UpsellPurchase.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                switch ((null != e.upsell_session_id && (t.upsell_session_id = String(e.upsell_session_id)), e.upsell_type)) {
                  case "SPEED":
                  case 1:
                    t.upsell_type = 1;
                    break;
                  case "DEVICE":
                  case 2:
                    t.upsell_type = 2;
                    break;
                  case "TIME":
                  case 3:
                    t.upsell_type = 3;
                }
                switch (e.option) {
                  case "SKIP":
                  case 1:
                    t.option = 1;
                    break;
                  case "BUY":
                  case 2:
                    t.option = 2;
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.DeviceInfo = null),
                    (n.upsell_session_id = ""),
                    (n.upsell_type = t.enums === String ? "SPEED" : 1),
                    (n.option = t.enums === String ? "SKIP" : 1)),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  null != e.upsell_session_id && e.hasOwnProperty("upsell_session_id") && (n.upsell_session_id = e.upsell_session_id),
                  null != e.upsell_type &&
                    e.hasOwnProperty("upsell_type") &&
                    (n.upsell_type = t.enums === String ? f.proto.api.UpsellData.Type[e.upsell_type] : e.upsell_type),
                  null != e.option &&
                    e.hasOwnProperty("option") &&
                    (n.option = t.enums === String ? f.proto.api.request.UpsellPurchase.Option[e.option] : e.option),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.Option = ((t = {}), ((n = Object.create(t))[(t[1] = "SKIP")] = 1), (n[(t[2] = "BUY")] = 2), n)),
              e
            );
          })()),
          (r.WinStoreAuth = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.DeviceInfo = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.DeviceInfo.encode(e.DeviceInfo, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.request.WinStoreAuth(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.DeviceInfo = f.proto.api.DeviceInfo.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("DeviceInfo")) throw l.ProtocolError("missing required 'DeviceInfo'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.DeviceInfo.verify(e.DeviceInfo);
                return t ? "DeviceInfo." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.request.WinStoreAuth) return e;
                var t = new f.proto.api.request.WinStoreAuth();
                if (null != e.DeviceInfo) {
                  if ("object" != typeof e.DeviceInfo) throw TypeError(".proto.api.request.WinStoreAuth.DeviceInfo: object expected");
                  t.DeviceInfo = f.proto.api.DeviceInfo.fromObject(e.DeviceInfo);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.DeviceInfo = null),
                  null != e.DeviceInfo &&
                    e.hasOwnProperty("DeviceInfo") &&
                    (n.DeviceInfo = f.proto.api.DeviceInfo.toObject(e.DeviceInfo, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          r)),
        (i.DeviceInfo = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.platform = 1),
            (e.prototype.hash = ""),
            (e.prototype.package_name = ""),
            (e.prototype.app_version = 0),
            (e.prototype.model = ""),
            (e.prototype.make = ""),
            (e.prototype.os_name = ""),
            (e.prototype.language = ""),
            (e.prototype.signature = ""),
            (e.prototype.token = ""),
            (e.prototype.channel = ""),
            (e.prototype.bn_proxy_device_id = ""),
            (e.prototype.wl_id = ""),
            (e.prototype.timezone = ""),
            (e.prototype.store_country = ""),
            (e.prototype.currency = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                t.uint32(8).int32(e.platform),
                t.uint32(18).string(e.hash),
                t.uint32(26).string(e.package_name),
                t.uint32(32).int32(e.app_version),
                null != e.model && Object.hasOwnProperty.call(e, "model") && t.uint32(42).string(e.model),
                null != e.make && Object.hasOwnProperty.call(e, "make") && t.uint32(50).string(e.make),
                null != e.os_name && Object.hasOwnProperty.call(e, "os_name") && t.uint32(58).string(e.os_name),
                null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(66).string(e.language),
                null != e.signature && Object.hasOwnProperty.call(e, "signature") && t.uint32(74).string(e.signature),
                null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(82).string(e.token),
                null != e.channel && Object.hasOwnProperty.call(e, "channel") && t.uint32(90).string(e.channel),
                null != e.bn_proxy_device_id &&
                  Object.hasOwnProperty.call(e, "bn_proxy_device_id") &&
                  t.uint32(98).string(e.bn_proxy_device_id),
                null != e.wl_id && Object.hasOwnProperty.call(e, "wl_id") && t.uint32(106).string(e.wl_id),
                null != e.timezone && Object.hasOwnProperty.call(e, "timezone") && t.uint32(114).string(e.timezone),
                null != e.store_country && Object.hasOwnProperty.call(e, "store_country") && t.uint32(122).string(e.store_country),
                null != e.currency && Object.hasOwnProperty.call(e, "currency") && t.uint32(130).string(e.currency),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.DeviceInfo(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.platform = e.int32();
                    break;
                  case 2:
                    r.hash = e.string();
                    break;
                  case 3:
                    r.package_name = e.string();
                    break;
                  case 4:
                    r.app_version = e.int32();
                    break;
                  case 5:
                    r.model = e.string();
                    break;
                  case 6:
                    r.make = e.string();
                    break;
                  case 7:
                    r.os_name = e.string();
                    break;
                  case 8:
                    r.language = e.string();
                    break;
                  case 9:
                    r.signature = e.string();
                    break;
                  case 10:
                    r.token = e.string();
                    break;
                  case 11:
                    r.channel = e.string();
                    break;
                  case 12:
                    r.bn_proxy_device_id = e.string();
                    break;
                  case 13:
                    r.wl_id = e.string();
                    break;
                  case 14:
                    r.timezone = e.string();
                    break;
                  case 15:
                    r.store_country = e.string();
                    break;
                  case 16:
                    r.currency = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("platform")) throw l.ProtocolError("missing required 'platform'", { instance: r });
              if (!r.hasOwnProperty("hash")) throw l.ProtocolError("missing required 'hash'", { instance: r });
              if (!r.hasOwnProperty("package_name")) throw l.ProtocolError("missing required 'package_name'", { instance: r });
              if (!r.hasOwnProperty("app_version")) throw l.ProtocolError("missing required 'app_version'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              switch (e.platform) {
                default:
                  return "platform: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
              }
              return l.isString(e.hash)
                ? l.isString(e.package_name)
                  ? l.isInteger(e.app_version)
                    ? null != e.model && e.hasOwnProperty("model") && !l.isString(e.model)
                      ? "model: string expected"
                      : null != e.make && e.hasOwnProperty("make") && !l.isString(e.make)
                      ? "make: string expected"
                      : null != e.os_name && e.hasOwnProperty("os_name") && !l.isString(e.os_name)
                      ? "os_name: string expected"
                      : null != e.language && e.hasOwnProperty("language") && !l.isString(e.language)
                      ? "language: string expected"
                      : null != e.signature && e.hasOwnProperty("signature") && !l.isString(e.signature)
                      ? "signature: string expected"
                      : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                      ? "token: string expected"
                      : null != e.channel && e.hasOwnProperty("channel") && !l.isString(e.channel)
                      ? "channel: string expected"
                      : null != e.bn_proxy_device_id && e.hasOwnProperty("bn_proxy_device_id") && !l.isString(e.bn_proxy_device_id)
                      ? "bn_proxy_device_id: string expected"
                      : null != e.wl_id && e.hasOwnProperty("wl_id") && !l.isString(e.wl_id)
                      ? "wl_id: string expected"
                      : null != e.timezone && e.hasOwnProperty("timezone") && !l.isString(e.timezone)
                      ? "timezone: string expected"
                      : null != e.store_country && e.hasOwnProperty("store_country") && !l.isString(e.store_country)
                      ? "store_country: string expected"
                      : null != e.currency && e.hasOwnProperty("currency") && !l.isString(e.currency)
                      ? "currency: string expected"
                      : null
                    : "app_version: integer expected"
                  : "package_name: string expected"
                : "hash: string expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.DeviceInfo) return e;
              var t = new f.proto.api.DeviceInfo();
              switch (e.platform) {
                case "IOS":
                case 1:
                  t.platform = 1;
                  break;
                case "ANDROID":
                case 2:
                  t.platform = 2;
                  break;
                case "WINDOWS":
                case 3:
                  t.platform = 3;
                  break;
                case "MAC":
                case 4:
                  t.platform = 4;
                  break;
                case "EXTENSION_CHROME":
                case 5:
                  t.platform = 5;
                  break;
                case "OPEN_WRT":
                case 6:
                  t.platform = 6;
                  break;
                case "EXTENSION_FFOX":
                case 7:
                  t.platform = 7;
                  break;
                case "LINUX":
                case 8:
                  t.platform = 8;
                  break;
                case "SLING":
                case 9:
                  t.platform = 9;
                  break;
                case "EXTENSION_EDGE":
                case 10:
                  t.platform = 10;
              }
              return (
                null != e.hash && (t.hash = String(e.hash)),
                null != e.package_name && (t.package_name = String(e.package_name)),
                null != e.app_version && (t.app_version = 0 | e.app_version),
                null != e.model && (t.model = String(e.model)),
                null != e.make && (t.make = String(e.make)),
                null != e.os_name && (t.os_name = String(e.os_name)),
                null != e.language && (t.language = String(e.language)),
                null != e.signature && (t.signature = String(e.signature)),
                null != e.token && (t.token = String(e.token)),
                null != e.channel && (t.channel = String(e.channel)),
                null != e.bn_proxy_device_id && (t.bn_proxy_device_id = String(e.bn_proxy_device_id)),
                null != e.wl_id && (t.wl_id = String(e.wl_id)),
                null != e.timezone && (t.timezone = String(e.timezone)),
                null != e.store_country && (t.store_country = String(e.store_country)),
                null != e.currency && (t.currency = String(e.currency)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.platform = t.enums === String ? "IOS" : 1),
                  (n.hash = ""),
                  (n.package_name = ""),
                  (n.app_version = 0),
                  (n.model = ""),
                  (n.make = ""),
                  (n.os_name = ""),
                  (n.language = ""),
                  (n.signature = ""),
                  (n.token = ""),
                  (n.channel = ""),
                  (n.bn_proxy_device_id = ""),
                  (n.wl_id = ""),
                  (n.timezone = ""),
                  (n.store_country = ""),
                  (n.currency = "")),
                null != e.platform &&
                  e.hasOwnProperty("platform") &&
                  (n.platform = t.enums === String ? f.proto.api.DeviceInfo.Platform[e.platform] : e.platform),
                null != e.hash && e.hasOwnProperty("hash") && (n.hash = e.hash),
                null != e.package_name && e.hasOwnProperty("package_name") && (n.package_name = e.package_name),
                null != e.app_version && e.hasOwnProperty("app_version") && (n.app_version = e.app_version),
                null != e.model && e.hasOwnProperty("model") && (n.model = e.model),
                null != e.make && e.hasOwnProperty("make") && (n.make = e.make),
                null != e.os_name && e.hasOwnProperty("os_name") && (n.os_name = e.os_name),
                null != e.language && e.hasOwnProperty("language") && (n.language = e.language),
                null != e.signature && e.hasOwnProperty("signature") && (n.signature = e.signature),
                null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                null != e.channel && e.hasOwnProperty("channel") && (n.channel = e.channel),
                null != e.bn_proxy_device_id && e.hasOwnProperty("bn_proxy_device_id") && (n.bn_proxy_device_id = e.bn_proxy_device_id),
                null != e.wl_id && e.hasOwnProperty("wl_id") && (n.wl_id = e.wl_id),
                null != e.timezone && e.hasOwnProperty("timezone") && (n.timezone = e.timezone),
                null != e.store_country && e.hasOwnProperty("store_country") && (n.store_country = e.store_country),
                null != e.currency && e.hasOwnProperty("currency") && (n.currency = e.currency),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Platform =
              ((t = {}),
              ((n = Object.create(t))[(t[1] = "IOS")] = 1),
              (n[(t[2] = "ANDROID")] = 2),
              (n[(t[3] = "WINDOWS")] = 3),
              (n[(t[4] = "MAC")] = 4),
              (n[(t[5] = "EXTENSION_CHROME")] = 5),
              (n[(t[6] = "OPEN_WRT")] = 6),
              (n[(t[7] = "EXTENSION_FFOX")] = 7),
              (n[(t[8] = "LINUX")] = 8),
              (n[(t[9] = "SLING")] = 9),
              (n[(t[10] = "EXTENSION_EDGE")] = 10),
              n)),
            e
          );
        })()),
        (i.KeyValue = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.key = ""),
            (e.prototype.data_type = 1),
            (e.prototype.value = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                t.uint32(10).string(e.key),
                t.uint32(16).int32(e.data_type),
                null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(26).string(e.value),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.KeyValue(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.key = e.string();
                    break;
                  case 2:
                    r.data_type = e.int32();
                    break;
                  case 3:
                    r.value = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("key")) throw l.ProtocolError("missing required 'key'", { instance: r });
              if (!r.hasOwnProperty("data_type")) throw l.ProtocolError("missing required 'data_type'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (!l.isString(e.key)) return "key: string expected";
              switch (e.data_type) {
                default:
                  return "data_type: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
              }
              return null != e.value && e.hasOwnProperty("value") && !l.isString(e.value) ? "value: string expected" : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.KeyValue) return e;
              var t = new f.proto.api.KeyValue();
              switch ((null != e.key && (t.key = String(e.key)), e.data_type)) {
                case "NULL":
                case 1:
                  t.data_type = 1;
                  break;
                case "STRING":
                case 2:
                  t.data_type = 2;
                  break;
                case "BOOLEAN":
                case 3:
                  t.data_type = 3;
                  break;
                case "INTEGER":
                case 4:
                  t.data_type = 4;
                  break;
                case "FLOAT":
                case 5:
                  t.data_type = 5;
              }
              return null != e.value && (t.value = String(e.value)), t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.key = ""), (n.data_type = t.enums === String ? "NULL" : 1), (n.value = "")),
                null != e.key && e.hasOwnProperty("key") && (n.key = e.key),
                null != e.data_type &&
                  e.hasOwnProperty("data_type") &&
                  (n.data_type = t.enums === String ? f.proto.api.KeyValue.DataType[e.data_type] : e.data_type),
                null != e.value && e.hasOwnProperty("value") && (n.value = e.value),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.DataType =
              ((t = {}),
              ((n = Object.create(t))[(t[1] = "NULL")] = 1),
              (n[(t[2] = "STRING")] = 2),
              (n[(t[3] = "BOOLEAN")] = 3),
              (n[(t[4] = "INTEGER")] = 4),
              (n[(t[5] = "FLOAT")] = 5),
              n)),
            e
          );
        })()),
        (i.CreditCard = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.email = ""),
            (e.prototype.holder_name = ""),
            (e.prototype.number = ""),
            (e.prototype.cvn = ""),
            (e.prototype.expiration_month = 0),
            (e.prototype.expiration_year = 0),
            (e.prototype.billing_address = null),
            (e.prototype.first_name = ""),
            (e.prototype.last_name = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.email && Object.hasOwnProperty.call(e, "email") && t.uint32(10).string(e.email),
                null != e.holder_name && Object.hasOwnProperty.call(e, "holder_name") && t.uint32(18).string(e.holder_name),
                null != e.number && Object.hasOwnProperty.call(e, "number") && t.uint32(26).string(e.number),
                null != e.cvn && Object.hasOwnProperty.call(e, "cvn") && t.uint32(34).string(e.cvn),
                null != e.expiration_month && Object.hasOwnProperty.call(e, "expiration_month") && t.uint32(40).uint32(e.expiration_month),
                null != e.expiration_year && Object.hasOwnProperty.call(e, "expiration_year") && t.uint32(48).uint32(e.expiration_year),
                null != e.billing_address &&
                  Object.hasOwnProperty.call(e, "billing_address") &&
                  f.proto.api.CreditCard.Address.encode(e.billing_address, t.uint32(58).fork()).ldelim(),
                null != e.first_name && Object.hasOwnProperty.call(e, "first_name") && t.uint32(66).string(e.first_name),
                null != e.last_name && Object.hasOwnProperty.call(e, "last_name") && t.uint32(74).string(e.last_name),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.CreditCard(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.email = e.string();
                    break;
                  case 2:
                    r.holder_name = e.string();
                    break;
                  case 3:
                    r.number = e.string();
                    break;
                  case 4:
                    r.cvn = e.string();
                    break;
                  case 5:
                    r.expiration_month = e.uint32();
                    break;
                  case 6:
                    r.expiration_year = e.uint32();
                    break;
                  case 7:
                    r.billing_address = f.proto.api.CreditCard.Address.decode(e, e.uint32());
                    break;
                  case 8:
                    r.first_name = e.string();
                    break;
                  case 9:
                    r.last_name = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.email && e.hasOwnProperty("email") && !l.isString(e.email)) return "email: string expected";
              if (null != e.holder_name && e.hasOwnProperty("holder_name") && !l.isString(e.holder_name))
                return "holder_name: string expected";
              if (null != e.number && e.hasOwnProperty("number") && !l.isString(e.number)) return "number: string expected";
              if (null != e.cvn && e.hasOwnProperty("cvn") && !l.isString(e.cvn)) return "cvn: string expected";
              if (null != e.expiration_month && e.hasOwnProperty("expiration_month") && !l.isInteger(e.expiration_month))
                return "expiration_month: integer expected";
              if (null != e.expiration_year && e.hasOwnProperty("expiration_year") && !l.isInteger(e.expiration_year))
                return "expiration_year: integer expected";
              if (null != e.billing_address && e.hasOwnProperty("billing_address")) {
                var t = f.proto.api.CreditCard.Address.verify(e.billing_address);
                if (t) return "billing_address." + t;
              }
              return null != e.first_name && e.hasOwnProperty("first_name") && !l.isString(e.first_name)
                ? "first_name: string expected"
                : null != e.last_name && e.hasOwnProperty("last_name") && !l.isString(e.last_name)
                ? "last_name: string expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.CreditCard) return e;
              var t = new f.proto.api.CreditCard();
              if (
                (null != e.email && (t.email = String(e.email)),
                null != e.holder_name && (t.holder_name = String(e.holder_name)),
                null != e.number && (t.number = String(e.number)),
                null != e.cvn && (t.cvn = String(e.cvn)),
                null != e.expiration_month && (t.expiration_month = e.expiration_month >>> 0),
                null != e.expiration_year && (t.expiration_year = e.expiration_year >>> 0),
                null != e.billing_address)
              ) {
                if ("object" != typeof e.billing_address) throw TypeError(".proto.api.CreditCard.billing_address: object expected");
                t.billing_address = f.proto.api.CreditCard.Address.fromObject(e.billing_address);
              }
              return (
                null != e.first_name && (t.first_name = String(e.first_name)), null != e.last_name && (t.last_name = String(e.last_name)), t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.email = ""),
                  (n.holder_name = ""),
                  (n.number = ""),
                  (n.cvn = ""),
                  (n.expiration_month = 0),
                  (n.expiration_year = 0),
                  (n.billing_address = null),
                  (n.first_name = ""),
                  (n.last_name = "")),
                null != e.email && e.hasOwnProperty("email") && (n.email = e.email),
                null != e.holder_name && e.hasOwnProperty("holder_name") && (n.holder_name = e.holder_name),
                null != e.number && e.hasOwnProperty("number") && (n.number = e.number),
                null != e.cvn && e.hasOwnProperty("cvn") && (n.cvn = e.cvn),
                null != e.expiration_month && e.hasOwnProperty("expiration_month") && (n.expiration_month = e.expiration_month),
                null != e.expiration_year && e.hasOwnProperty("expiration_year") && (n.expiration_year = e.expiration_year),
                null != e.billing_address &&
                  e.hasOwnProperty("billing_address") &&
                  (n.billing_address = f.proto.api.CreditCard.Address.toObject(e.billing_address, t)),
                null != e.first_name && e.hasOwnProperty("first_name") && (n.first_name = e.first_name),
                null != e.last_name && e.hasOwnProperty("last_name") && (n.last_name = e.last_name),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Address = (function () {
              function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.prototype.country = ""),
                (e.prototype.state = ""),
                (e.prototype.city = ""),
                (e.prototype.address = ""),
                (e.prototype.zip = ""),
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  return (
                    t || (t = p.create()),
                    null != e.country && Object.hasOwnProperty.call(e, "country") && t.uint32(10).string(e.country),
                    null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(18).string(e.state),
                    null != e.city && Object.hasOwnProperty.call(e, "city") && t.uint32(26).string(e.city),
                    null != e.address && Object.hasOwnProperty.call(e, "address") && t.uint32(34).string(e.address),
                    null != e.zip && Object.hasOwnProperty.call(e, "zip") && t.uint32(42).string(e.zip),
                    t
                  );
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.CreditCard.Address(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        r.country = e.string();
                        break;
                      case 2:
                        r.state = e.string();
                        break;
                      case 3:
                        r.city = e.string();
                        break;
                      case 4:
                        r.address = e.string();
                        break;
                      case 5:
                        r.zip = e.string();
                        break;
                      default:
                        e.skipType(7 & o);
                    }
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  return "object" != typeof e || null === e
                    ? "object expected"
                    : null != e.country && e.hasOwnProperty("country") && !l.isString(e.country)
                    ? "country: string expected"
                    : null != e.state && e.hasOwnProperty("state") && !l.isString(e.state)
                    ? "state: string expected"
                    : null != e.city && e.hasOwnProperty("city") && !l.isString(e.city)
                    ? "city: string expected"
                    : null != e.address && e.hasOwnProperty("address") && !l.isString(e.address)
                    ? "address: string expected"
                    : null != e.zip && e.hasOwnProperty("zip") && !l.isString(e.zip)
                    ? "zip: string expected"
                    : null;
                }),
                (e.fromObject = function (e) {
                  if (e instanceof f.proto.api.CreditCard.Address) return e;
                  var t = new f.proto.api.CreditCard.Address();
                  return (
                    null != e.country && (t.country = String(e.country)),
                    null != e.state && (t.state = String(e.state)),
                    null != e.city && (t.city = String(e.city)),
                    null != e.address && (t.address = String(e.address)),
                    null != e.zip && (t.zip = String(e.zip)),
                    t
                  );
                }),
                (e.toObject = function (e, t) {
                  t || (t = {});
                  var n = {};
                  return (
                    t.defaults && ((n.country = ""), (n.state = ""), (n.city = ""), (n.address = ""), (n.zip = "")),
                    null != e.country && e.hasOwnProperty("country") && (n.country = e.country),
                    null != e.state && e.hasOwnProperty("state") && (n.state = e.state),
                    null != e.city && e.hasOwnProperty("city") && (n.city = e.city),
                    null != e.address && e.hasOwnProperty("address") && (n.address = e.address),
                    null != e.zip && e.hasOwnProperty("zip") && (n.zip = e.zip),
                    n
                  );
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                e
              );
            })()),
            e
          );
        })()),
        (i.UpsellData = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.type = 1),
            (e.prototype.session_id = ""),
            (e.prototype.currency = ""),
            (e.prototype.is_lifetime = !1),
            (e.prototype.duration_months = 0),
            (e.prototype.price_raw = ""),
            (e.prototype.price_formatted = ""),
            (e.prototype.price_per_month_raw = ""),
            (e.prototype.price_per_month_formatted = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).int32(e.type),
                null != e.session_id && Object.hasOwnProperty.call(e, "session_id") && t.uint32(18).string(e.session_id),
                null != e.currency && Object.hasOwnProperty.call(e, "currency") && t.uint32(26).string(e.currency),
                null != e.is_lifetime && Object.hasOwnProperty.call(e, "is_lifetime") && t.uint32(32).bool(e.is_lifetime),
                null != e.duration_months && Object.hasOwnProperty.call(e, "duration_months") && t.uint32(40).uint32(e.duration_months),
                null != e.price_raw && Object.hasOwnProperty.call(e, "price_raw") && t.uint32(50).string(e.price_raw),
                null != e.price_formatted && Object.hasOwnProperty.call(e, "price_formatted") && t.uint32(58).string(e.price_formatted),
                null != e.price_per_month_raw &&
                  Object.hasOwnProperty.call(e, "price_per_month_raw") &&
                  t.uint32(66).string(e.price_per_month_raw),
                null != e.price_per_month_formatted &&
                  Object.hasOwnProperty.call(e, "price_per_month_formatted") &&
                  t.uint32(74).string(e.price_per_month_formatted),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.UpsellData(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.type = e.int32();
                    break;
                  case 2:
                    r.session_id = e.string();
                    break;
                  case 3:
                    r.currency = e.string();
                    break;
                  case 4:
                    r.is_lifetime = e.bool();
                    break;
                  case 5:
                    r.duration_months = e.uint32();
                    break;
                  case 6:
                    r.price_raw = e.string();
                    break;
                  case 7:
                    r.price_formatted = e.string();
                    break;
                  case 8:
                    r.price_per_month_raw = e.string();
                    break;
                  case 9:
                    r.price_per_month_formatted = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.type && e.hasOwnProperty("type"))
                switch (e.type) {
                  default:
                    return "type: enum value expected";
                  case 1:
                  case 2:
                  case 3:
                }
              return null != e.session_id && e.hasOwnProperty("session_id") && !l.isString(e.session_id)
                ? "session_id: string expected"
                : null != e.currency && e.hasOwnProperty("currency") && !l.isString(e.currency)
                ? "currency: string expected"
                : null != e.is_lifetime && e.hasOwnProperty("is_lifetime") && "boolean" != typeof e.is_lifetime
                ? "is_lifetime: boolean expected"
                : null != e.duration_months && e.hasOwnProperty("duration_months") && !l.isInteger(e.duration_months)
                ? "duration_months: integer expected"
                : null != e.price_raw && e.hasOwnProperty("price_raw") && !l.isString(e.price_raw)
                ? "price_raw: string expected"
                : null != e.price_formatted && e.hasOwnProperty("price_formatted") && !l.isString(e.price_formatted)
                ? "price_formatted: string expected"
                : null != e.price_per_month_raw && e.hasOwnProperty("price_per_month_raw") && !l.isString(e.price_per_month_raw)
                ? "price_per_month_raw: string expected"
                : null != e.price_per_month_formatted &&
                  e.hasOwnProperty("price_per_month_formatted") &&
                  !l.isString(e.price_per_month_formatted)
                ? "price_per_month_formatted: string expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.UpsellData) return e;
              var t = new f.proto.api.UpsellData();
              switch (e.type) {
                case "SPEED":
                case 1:
                  t.type = 1;
                  break;
                case "DEVICE":
                case 2:
                  t.type = 2;
                  break;
                case "TIME":
                case 3:
                  t.type = 3;
              }
              return (
                null != e.session_id && (t.session_id = String(e.session_id)),
                null != e.currency && (t.currency = String(e.currency)),
                null != e.is_lifetime && (t.is_lifetime = Boolean(e.is_lifetime)),
                null != e.duration_months && (t.duration_months = e.duration_months >>> 0),
                null != e.price_raw && (t.price_raw = String(e.price_raw)),
                null != e.price_formatted && (t.price_formatted = String(e.price_formatted)),
                null != e.price_per_month_raw && (t.price_per_month_raw = String(e.price_per_month_raw)),
                null != e.price_per_month_formatted && (t.price_per_month_formatted = String(e.price_per_month_formatted)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.type = t.enums === String ? "SPEED" : 1),
                  (n.session_id = ""),
                  (n.currency = ""),
                  (n.is_lifetime = !1),
                  (n.duration_months = 0),
                  (n.price_raw = ""),
                  (n.price_formatted = ""),
                  (n.price_per_month_raw = ""),
                  (n.price_per_month_formatted = "")),
                null != e.type && e.hasOwnProperty("type") && (n.type = t.enums === String ? f.proto.api.UpsellData.Type[e.type] : e.type),
                null != e.session_id && e.hasOwnProperty("session_id") && (n.session_id = e.session_id),
                null != e.currency && e.hasOwnProperty("currency") && (n.currency = e.currency),
                null != e.is_lifetime && e.hasOwnProperty("is_lifetime") && (n.is_lifetime = e.is_lifetime),
                null != e.duration_months && e.hasOwnProperty("duration_months") && (n.duration_months = e.duration_months),
                null != e.price_raw && e.hasOwnProperty("price_raw") && (n.price_raw = e.price_raw),
                null != e.price_formatted && e.hasOwnProperty("price_formatted") && (n.price_formatted = e.price_formatted),
                null != e.price_per_month_raw && e.hasOwnProperty("price_per_month_raw") && (n.price_per_month_raw = e.price_per_month_raw),
                null != e.price_per_month_formatted &&
                  e.hasOwnProperty("price_per_month_formatted") &&
                  (n.price_per_month_formatted = e.price_per_month_formatted),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Type = ((t = {}), ((n = Object.create(t))[(t[1] = "SPEED")] = 1), (n[(t[2] = "DEVICE")] = 2), (n[(t[3] = "TIME")] = 3), n)),
            e
          );
        })()),
        (i.UserStatus = (function () {
          function e(e) {
            if (((this.packages_list = []), (this.packages = []), (this.experiments = []), (this.webkit_triggers = []), e))
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.packages_list = l.emptyArray),
            (e.prototype.packages = l.emptyArray),
            (e.prototype.login = ""),
            (e.prototype.devices_max = 0),
            (e.prototype.devices_used = 0),
            (e.prototype.is_anonymous = !1),
            (e.prototype.trial_period = null),
            (e.prototype.android_params = null),
            (e.prototype.ios_params = null),
            (e.prototype.windows_params = null),
            (e.prototype.flags = 0),
            (e.prototype.created_at = 0),
            (e.prototype.BundleConfig = null),
            (e.prototype.experiments = l.emptyArray),
            (e.prototype.webkit_triggers = l.emptyArray),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              if ((t || (t = p.create()), null != e.packages_list && e.packages_list.length))
                for (var n = 0; n < e.packages_list.length; ++n) t.uint32(8).int32(e.packages_list[n]);
              if (null != e.packages && e.packages.length)
                for (n = 0; n < e.packages.length; ++n) f.proto.api.Package.encode(e.packages[n], t.uint32(18).fork()).ldelim();
              if (
                (null != e.login && Object.hasOwnProperty.call(e, "login") && t.uint32(26).string(e.login),
                null != e.devices_max && Object.hasOwnProperty.call(e, "devices_max") && t.uint32(32).uint32(e.devices_max),
                null != e.devices_used && Object.hasOwnProperty.call(e, "devices_used") && t.uint32(40).uint32(e.devices_used),
                null != e.is_anonymous && Object.hasOwnProperty.call(e, "is_anonymous") && t.uint32(48).bool(e.is_anonymous),
                null != e.trial_period &&
                  Object.hasOwnProperty.call(e, "trial_period") &&
                  f.proto.api.TimeRange.encode(e.trial_period, t.uint32(58).fork()).ldelim(),
                null != e.android_params &&
                  Object.hasOwnProperty.call(e, "android_params") &&
                  f.proto.api.UserStatus.AndroidParams.encode(e.android_params, t.uint32(66).fork()).ldelim(),
                null != e.ios_params &&
                  Object.hasOwnProperty.call(e, "ios_params") &&
                  f.proto.api.UserStatus.IosParams.encode(e.ios_params, t.uint32(74).fork()).ldelim(),
                null != e.windows_params &&
                  Object.hasOwnProperty.call(e, "windows_params") &&
                  f.proto.api.UserStatus.WindowsParams.encode(e.windows_params, t.uint32(82).fork()).ldelim(),
                null != e.flags && Object.hasOwnProperty.call(e, "flags") && t.uint32(88).int32(e.flags),
                null != e.created_at && Object.hasOwnProperty.call(e, "created_at") && t.uint32(96).int32(e.created_at),
                null != e.BundleConfig &&
                  Object.hasOwnProperty.call(e, "BundleConfig") &&
                  f.proto.api.BundleConfig.encode(e.BundleConfig, t.uint32(106).fork()).ldelim(),
                null != e.experiments && e.experiments.length)
              )
                for (n = 0; n < e.experiments.length; ++n) f.proto.api.KeyValue.encode(e.experiments[n], t.uint32(114).fork()).ldelim();
              if (null != e.webkit_triggers && e.webkit_triggers.length)
                for (n = 0; n < e.webkit_triggers.length; ++n)
                  f.proto.api.WebkitTrigger.encode(e.webkit_triggers[n], t.uint32(122).fork()).ldelim();
              return t;
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.UserStatus(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (((r.packages_list && r.packages_list.length) || (r.packages_list = []), 2 == (7 & o)))
                      for (var i = e.uint32() + e.pos; e.pos < i; ) r.packages_list.push(e.int32());
                    else r.packages_list.push(e.int32());
                    break;
                  case 2:
                    (r.packages && r.packages.length) || (r.packages = []), r.packages.push(f.proto.api.Package.decode(e, e.uint32()));
                    break;
                  case 3:
                    r.login = e.string();
                    break;
                  case 4:
                    r.devices_max = e.uint32();
                    break;
                  case 5:
                    r.devices_used = e.uint32();
                    break;
                  case 6:
                    r.is_anonymous = e.bool();
                    break;
                  case 7:
                    r.trial_period = f.proto.api.TimeRange.decode(e, e.uint32());
                    break;
                  case 8:
                    r.android_params = f.proto.api.UserStatus.AndroidParams.decode(e, e.uint32());
                    break;
                  case 9:
                    r.ios_params = f.proto.api.UserStatus.IosParams.decode(e, e.uint32());
                    break;
                  case 10:
                    r.windows_params = f.proto.api.UserStatus.WindowsParams.decode(e, e.uint32());
                    break;
                  case 11:
                    r.flags = e.int32();
                    break;
                  case 12:
                    r.created_at = e.int32();
                    break;
                  case 13:
                    r.BundleConfig = f.proto.api.BundleConfig.decode(e, e.uint32());
                    break;
                  case 14:
                    (r.experiments && r.experiments.length) || (r.experiments = []),
                      r.experiments.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                    break;
                  case 15:
                    (r.webkit_triggers && r.webkit_triggers.length) || (r.webkit_triggers = []),
                      r.webkit_triggers.push(f.proto.api.WebkitTrigger.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.packages_list && e.hasOwnProperty("packages_list")) {
                if (!Array.isArray(e.packages_list)) return "packages_list: array expected";
                for (var t = 0; t < e.packages_list.length; ++t)
                  switch (e.packages_list[t]) {
                    default:
                      return "packages_list: enum value[] expected";
                    case 1:
                    case 10:
                    case 11:
                    case 15:
                    case 13:
                    case 12:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                  }
              }
              if (null != e.packages && e.hasOwnProperty("packages")) {
                if (!Array.isArray(e.packages)) return "packages: array expected";
                for (t = 0; t < e.packages.length; ++t) if ((n = f.proto.api.Package.verify(e.packages[t]))) return "packages." + n;
              }
              if (null != e.login && e.hasOwnProperty("login") && !l.isString(e.login)) return "login: string expected";
              if (null != e.devices_max && e.hasOwnProperty("devices_max") && !l.isInteger(e.devices_max))
                return "devices_max: integer expected";
              if (null != e.devices_used && e.hasOwnProperty("devices_used") && !l.isInteger(e.devices_used))
                return "devices_used: integer expected";
              if (null != e.is_anonymous && e.hasOwnProperty("is_anonymous") && "boolean" != typeof e.is_anonymous)
                return "is_anonymous: boolean expected";
              if (null != e.trial_period && e.hasOwnProperty("trial_period") && (n = f.proto.api.TimeRange.verify(e.trial_period)))
                return "trial_period." + n;
              if (
                null != e.android_params &&
                e.hasOwnProperty("android_params") &&
                (n = f.proto.api.UserStatus.AndroidParams.verify(e.android_params))
              )
                return "android_params." + n;
              if (null != e.ios_params && e.hasOwnProperty("ios_params") && (n = f.proto.api.UserStatus.IosParams.verify(e.ios_params)))
                return "ios_params." + n;
              if (
                null != e.windows_params &&
                e.hasOwnProperty("windows_params") &&
                (n = f.proto.api.UserStatus.WindowsParams.verify(e.windows_params))
              )
                return "windows_params." + n;
              if (null != e.flags && e.hasOwnProperty("flags") && !l.isInteger(e.flags)) return "flags: integer expected";
              if (null != e.created_at && e.hasOwnProperty("created_at") && !l.isInteger(e.created_at))
                return "created_at: integer expected";
              if (null != e.BundleConfig && e.hasOwnProperty("BundleConfig") && (n = f.proto.api.BundleConfig.verify(e.BundleConfig)))
                return "BundleConfig." + n;
              if (null != e.experiments && e.hasOwnProperty("experiments")) {
                if (!Array.isArray(e.experiments)) return "experiments: array expected";
                for (t = 0; t < e.experiments.length; ++t)
                  if ((n = f.proto.api.KeyValue.verify(e.experiments[t]))) return "experiments." + n;
              }
              if (null != e.webkit_triggers && e.hasOwnProperty("webkit_triggers")) {
                if (!Array.isArray(e.webkit_triggers)) return "webkit_triggers: array expected";
                for (t = 0; t < e.webkit_triggers.length; ++t) {
                  var n;
                  if ((n = f.proto.api.WebkitTrigger.verify(e.webkit_triggers[t]))) return "webkit_triggers." + n;
                }
              }
              return null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.UserStatus) return e;
              var t = new f.proto.api.UserStatus();
              if (e.packages_list) {
                if (!Array.isArray(e.packages_list)) throw TypeError(".proto.api.UserStatus.packages_list: array expected");
                t.packages_list = [];
                for (var n = 0; n < e.packages_list.length; ++n)
                  switch (e.packages_list[n]) {
                    default:
                    case "ELITE":
                    case 1:
                      t.packages_list[n] = 1;
                      break;
                    case "DEDICATED":
                    case 10:
                      t.packages_list[n] = 10;
                      break;
                    case "TURBO":
                    case 11:
                      t.packages_list[n] = 11;
                      break;
                    case "TRIAL":
                    case 15:
                      t.packages_list[n] = 15;
                      break;
                    case "ADS":
                    case 13:
                      t.packages_list[n] = 13;
                      break;
                    case "VIRTUAL_LOCATION":
                    case 12:
                      t.packages_list[n] = 12;
                      break;
                    case "FIVE_EXTRA_DEVICES":
                    case 18:
                      t.packages_list[n] = 18;
                      break;
                    case "TRIALWARE":
                    case 19:
                      t.packages_list[n] = 19;
                      break;
                    case "BUSINESS_MANAGER":
                    case 20:
                      t.packages_list[n] = 20;
                      break;
                    case "BUSINESS_MEMBER":
                    case 21:
                      t.packages_list[n] = 21;
                  }
              }
              if (e.packages) {
                if (!Array.isArray(e.packages)) throw TypeError(".proto.api.UserStatus.packages: array expected");
                for (t.packages = [], n = 0; n < e.packages.length; ++n) {
                  if ("object" != typeof e.packages[n]) throw TypeError(".proto.api.UserStatus.packages: object expected");
                  t.packages[n] = f.proto.api.Package.fromObject(e.packages[n]);
                }
              }
              if (
                (null != e.login && (t.login = String(e.login)),
                null != e.devices_max && (t.devices_max = e.devices_max >>> 0),
                null != e.devices_used && (t.devices_used = e.devices_used >>> 0),
                null != e.is_anonymous && (t.is_anonymous = Boolean(e.is_anonymous)),
                null != e.trial_period)
              ) {
                if ("object" != typeof e.trial_period) throw TypeError(".proto.api.UserStatus.trial_period: object expected");
                t.trial_period = f.proto.api.TimeRange.fromObject(e.trial_period);
              }
              if (null != e.android_params) {
                if ("object" != typeof e.android_params) throw TypeError(".proto.api.UserStatus.android_params: object expected");
                t.android_params = f.proto.api.UserStatus.AndroidParams.fromObject(e.android_params);
              }
              if (null != e.ios_params) {
                if ("object" != typeof e.ios_params) throw TypeError(".proto.api.UserStatus.ios_params: object expected");
                t.ios_params = f.proto.api.UserStatus.IosParams.fromObject(e.ios_params);
              }
              if (null != e.windows_params) {
                if ("object" != typeof e.windows_params) throw TypeError(".proto.api.UserStatus.windows_params: object expected");
                t.windows_params = f.proto.api.UserStatus.WindowsParams.fromObject(e.windows_params);
              }
              if (
                (null != e.flags && (t.flags = 0 | e.flags),
                null != e.created_at && (t.created_at = 0 | e.created_at),
                null != e.BundleConfig)
              ) {
                if ("object" != typeof e.BundleConfig) throw TypeError(".proto.api.UserStatus.BundleConfig: object expected");
                t.BundleConfig = f.proto.api.BundleConfig.fromObject(e.BundleConfig);
              }
              if (e.experiments) {
                if (!Array.isArray(e.experiments)) throw TypeError(".proto.api.UserStatus.experiments: array expected");
                for (t.experiments = [], n = 0; n < e.experiments.length; ++n) {
                  if ("object" != typeof e.experiments[n]) throw TypeError(".proto.api.UserStatus.experiments: object expected");
                  t.experiments[n] = f.proto.api.KeyValue.fromObject(e.experiments[n]);
                }
              }
              if (e.webkit_triggers) {
                if (!Array.isArray(e.webkit_triggers)) throw TypeError(".proto.api.UserStatus.webkit_triggers: array expected");
                for (t.webkit_triggers = [], n = 0; n < e.webkit_triggers.length; ++n) {
                  if ("object" != typeof e.webkit_triggers[n]) throw TypeError(".proto.api.UserStatus.webkit_triggers: object expected");
                  t.webkit_triggers[n] = f.proto.api.WebkitTrigger.fromObject(e.webkit_triggers[n]);
                }
              }
              return t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (
                ((t.arrays || t.defaults) && ((n.packages_list = []), (n.packages = []), (n.experiments = []), (n.webkit_triggers = [])),
                t.defaults &&
                  ((n.login = ""),
                  (n.devices_max = 0),
                  (n.devices_used = 0),
                  (n.is_anonymous = !1),
                  (n.trial_period = null),
                  (n.android_params = null),
                  (n.ios_params = null),
                  (n.windows_params = null),
                  (n.flags = 0),
                  (n.created_at = 0),
                  (n.BundleConfig = null)),
                e.packages_list && e.packages_list.length)
              ) {
                n.packages_list = [];
                for (var r = 0; r < e.packages_list.length; ++r)
                  n.packages_list[r] = t.enums === String ? f.proto.api.Package.Id[e.packages_list[r]] : e.packages_list[r];
              }
              if (e.packages && e.packages.length)
                for (n.packages = [], r = 0; r < e.packages.length; ++r) n.packages[r] = f.proto.api.Package.toObject(e.packages[r], t);
              if (
                (null != e.login && e.hasOwnProperty("login") && (n.login = e.login),
                null != e.devices_max && e.hasOwnProperty("devices_max") && (n.devices_max = e.devices_max),
                null != e.devices_used && e.hasOwnProperty("devices_used") && (n.devices_used = e.devices_used),
                null != e.is_anonymous && e.hasOwnProperty("is_anonymous") && (n.is_anonymous = e.is_anonymous),
                null != e.trial_period &&
                  e.hasOwnProperty("trial_period") &&
                  (n.trial_period = f.proto.api.TimeRange.toObject(e.trial_period, t)),
                null != e.android_params &&
                  e.hasOwnProperty("android_params") &&
                  (n.android_params = f.proto.api.UserStatus.AndroidParams.toObject(e.android_params, t)),
                null != e.ios_params &&
                  e.hasOwnProperty("ios_params") &&
                  (n.ios_params = f.proto.api.UserStatus.IosParams.toObject(e.ios_params, t)),
                null != e.windows_params &&
                  e.hasOwnProperty("windows_params") &&
                  (n.windows_params = f.proto.api.UserStatus.WindowsParams.toObject(e.windows_params, t)),
                null != e.flags && e.hasOwnProperty("flags") && (n.flags = e.flags),
                null != e.created_at && e.hasOwnProperty("created_at") && (n.created_at = e.created_at),
                null != e.BundleConfig &&
                  e.hasOwnProperty("BundleConfig") &&
                  (n.BundleConfig = f.proto.api.BundleConfig.toObject(e.BundleConfig, t)),
                e.experiments && e.experiments.length)
              )
                for (n.experiments = [], r = 0; r < e.experiments.length; ++r)
                  n.experiments[r] = f.proto.api.KeyValue.toObject(e.experiments[r], t);
              if (e.webkit_triggers && e.webkit_triggers.length)
                for (n.webkit_triggers = [], r = 0; r < e.webkit_triggers.length; ++r)
                  n.webkit_triggers[r] = f.proto.api.WebkitTrigger.toObject(e.webkit_triggers[r], t);
              return n;
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.AndroidParams = (function () {
              function e(e) {
                if (((this.subscriptions = []), e))
                  for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.prototype.subscriptions = l.emptyArray),
                (e.prototype.auth_magic_link = ""),
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  if ((t || (t = p.create()), null != e.subscriptions && e.subscriptions.length))
                    for (var n = 0; n < e.subscriptions.length; ++n)
                      f.proto.api.GoogleSubscription.encode(e.subscriptions[n], t.uint32(10).fork()).ldelim();
                  return (
                    null != e.auth_magic_link && Object.hasOwnProperty.call(e, "auth_magic_link") && t.uint32(18).string(e.auth_magic_link),
                    t
                  );
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.UserStatus.AndroidParams(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        (r.subscriptions && r.subscriptions.length) || (r.subscriptions = []),
                          r.subscriptions.push(f.proto.api.GoogleSubscription.decode(e, e.uint32()));
                        break;
                      case 2:
                        r.auth_magic_link = e.string();
                        break;
                      default:
                        e.skipType(7 & o);
                    }
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  if ("object" != typeof e || null === e) return "object expected";
                  if (null != e.subscriptions && e.hasOwnProperty("subscriptions")) {
                    if (!Array.isArray(e.subscriptions)) return "subscriptions: array expected";
                    for (var t = 0; t < e.subscriptions.length; ++t) {
                      var n = f.proto.api.GoogleSubscription.verify(e.subscriptions[t]);
                      if (n) return "subscriptions." + n;
                    }
                  }
                  return null != e.auth_magic_link && e.hasOwnProperty("auth_magic_link") && !l.isString(e.auth_magic_link)
                    ? "auth_magic_link: string expected"
                    : null;
                }),
                (e.fromObject = function (e) {
                  if (e instanceof f.proto.api.UserStatus.AndroidParams) return e;
                  var t = new f.proto.api.UserStatus.AndroidParams();
                  if (e.subscriptions) {
                    if (!Array.isArray(e.subscriptions))
                      throw TypeError(".proto.api.UserStatus.AndroidParams.subscriptions: array expected");
                    t.subscriptions = [];
                    for (var n = 0; n < e.subscriptions.length; ++n) {
                      if ("object" != typeof e.subscriptions[n])
                        throw TypeError(".proto.api.UserStatus.AndroidParams.subscriptions: object expected");
                      t.subscriptions[n] = f.proto.api.GoogleSubscription.fromObject(e.subscriptions[n]);
                    }
                  }
                  return null != e.auth_magic_link && (t.auth_magic_link = String(e.auth_magic_link)), t;
                }),
                (e.toObject = function (e, t) {
                  t || (t = {});
                  var n = {};
                  if (
                    ((t.arrays || t.defaults) && (n.subscriptions = []),
                    t.defaults && (n.auth_magic_link = ""),
                    e.subscriptions && e.subscriptions.length)
                  ) {
                    n.subscriptions = [];
                    for (var r = 0; r < e.subscriptions.length; ++r)
                      n.subscriptions[r] = f.proto.api.GoogleSubscription.toObject(e.subscriptions[r], t);
                  }
                  return null != e.auth_magic_link && e.hasOwnProperty("auth_magic_link") && (n.auth_magic_link = e.auth_magic_link), n;
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                e
              );
            })()),
            (e.IosParams = (function () {
              function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  return t || (t = p.create()), t;
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.UserStatus.IosParams(); e.pos < n; ) {
                    var o = e.uint32();
                    e.skipType(7 & o);
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  return "object" != typeof e || null === e ? "object expected" : null;
                }),
                (e.fromObject = function (e) {
                  return e instanceof f.proto.api.UserStatus.IosParams ? e : new f.proto.api.UserStatus.IosParams();
                }),
                (e.toObject = function () {
                  return {};
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                e
              );
            })()),
            (e.WindowsParams = (function () {
              function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  return t || (t = p.create()), t;
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.UserStatus.WindowsParams(); e.pos < n; ) {
                    var o = e.uint32();
                    e.skipType(7 & o);
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  return "object" != typeof e || null === e ? "object expected" : null;
                }),
                (e.fromObject = function (e) {
                  return e instanceof f.proto.api.UserStatus.WindowsParams ? e : new f.proto.api.UserStatus.WindowsParams();
                }),
                (e.toObject = function () {
                  return {};
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                e
              );
            })()),
            e
          );
        })()),
        (i.BundleConfig = (function () {
          function e(e) {
            if (((this.test_group = []), (this.Applications = []), e))
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.banner_text = ""),
            (e.prototype.title = ""),
            (e.prototype.subtitle = ""),
            (e.prototype.test_group = l.emptyArray),
            (e.prototype.Applications = l.emptyArray),
            (e.prototype.first_step_text = ""),
            (e.prototype.last_step_text = ""),
            (e.prototype.bottom_cta_text = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              if (
                (t || (t = p.create()),
                null != e.banner_text && Object.hasOwnProperty.call(e, "banner_text") && t.uint32(10).string(e.banner_text),
                null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(18).string(e.title),
                null != e.subtitle && Object.hasOwnProperty.call(e, "subtitle") && t.uint32(26).string(e.subtitle),
                null != e.test_group && e.test_group.length)
              )
                for (var n = 0; n < e.test_group.length; ++n) t.uint32(34).string(e.test_group[n]);
              if (null != e.Applications && e.Applications.length)
                for (n = 0; n < e.Applications.length; ++n)
                  f.proto.api.BundleConfig.BundleApplication.encode(e.Applications[n], t.uint32(42).fork()).ldelim();
              return (
                null != e.first_step_text && Object.hasOwnProperty.call(e, "first_step_text") && t.uint32(50).string(e.first_step_text),
                null != e.last_step_text && Object.hasOwnProperty.call(e, "last_step_text") && t.uint32(58).string(e.last_step_text),
                null != e.bottom_cta_text && Object.hasOwnProperty.call(e, "bottom_cta_text") && t.uint32(66).string(e.bottom_cta_text),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.banner_text = e.string();
                    break;
                  case 2:
                    r.title = e.string();
                    break;
                  case 3:
                    r.subtitle = e.string();
                    break;
                  case 4:
                    (r.test_group && r.test_group.length) || (r.test_group = []), r.test_group.push(e.string());
                    break;
                  case 5:
                    (r.Applications && r.Applications.length) || (r.Applications = []),
                      r.Applications.push(f.proto.api.BundleConfig.BundleApplication.decode(e, e.uint32()));
                    break;
                  case 6:
                    r.first_step_text = e.string();
                    break;
                  case 7:
                    r.last_step_text = e.string();
                    break;
                  case 8:
                    r.bottom_cta_text = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.banner_text && e.hasOwnProperty("banner_text") && !l.isString(e.banner_text))
                return "banner_text: string expected";
              if (null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)) return "title: string expected";
              if (null != e.subtitle && e.hasOwnProperty("subtitle") && !l.isString(e.subtitle)) return "subtitle: string expected";
              if (null != e.test_group && e.hasOwnProperty("test_group")) {
                if (!Array.isArray(e.test_group)) return "test_group: array expected";
                for (var t = 0; t < e.test_group.length; ++t) if (!l.isString(e.test_group[t])) return "test_group: string[] expected";
              }
              if (null != e.Applications && e.hasOwnProperty("Applications")) {
                if (!Array.isArray(e.Applications)) return "Applications: array expected";
                for (t = 0; t < e.Applications.length; ++t) {
                  var n = f.proto.api.BundleConfig.BundleApplication.verify(e.Applications[t]);
                  if (n) return "Applications." + n;
                }
              }
              return null != e.first_step_text && e.hasOwnProperty("first_step_text") && !l.isString(e.first_step_text)
                ? "first_step_text: string expected"
                : null != e.last_step_text && e.hasOwnProperty("last_step_text") && !l.isString(e.last_step_text)
                ? "last_step_text: string expected"
                : null != e.bottom_cta_text && e.hasOwnProperty("bottom_cta_text") && !l.isString(e.bottom_cta_text)
                ? "bottom_cta_text: string expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.BundleConfig) return e;
              var t = new f.proto.api.BundleConfig();
              if (
                (null != e.banner_text && (t.banner_text = String(e.banner_text)),
                null != e.title && (t.title = String(e.title)),
                null != e.subtitle && (t.subtitle = String(e.subtitle)),
                e.test_group)
              ) {
                if (!Array.isArray(e.test_group)) throw TypeError(".proto.api.BundleConfig.test_group: array expected");
                t.test_group = [];
                for (var n = 0; n < e.test_group.length; ++n) t.test_group[n] = String(e.test_group[n]);
              }
              if (e.Applications) {
                if (!Array.isArray(e.Applications)) throw TypeError(".proto.api.BundleConfig.Applications: array expected");
                for (t.Applications = [], n = 0; n < e.Applications.length; ++n) {
                  if ("object" != typeof e.Applications[n]) throw TypeError(".proto.api.BundleConfig.Applications: object expected");
                  t.Applications[n] = f.proto.api.BundleConfig.BundleApplication.fromObject(e.Applications[n]);
                }
              }
              return (
                null != e.first_step_text && (t.first_step_text = String(e.first_step_text)),
                null != e.last_step_text && (t.last_step_text = String(e.last_step_text)),
                null != e.bottom_cta_text && (t.bottom_cta_text = String(e.bottom_cta_text)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (
                ((t.arrays || t.defaults) && ((n.test_group = []), (n.Applications = [])),
                t.defaults &&
                  ((n.banner_text = ""),
                  (n.title = ""),
                  (n.subtitle = ""),
                  (n.first_step_text = ""),
                  (n.last_step_text = ""),
                  (n.bottom_cta_text = "")),
                null != e.banner_text && e.hasOwnProperty("banner_text") && (n.banner_text = e.banner_text),
                null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                null != e.subtitle && e.hasOwnProperty("subtitle") && (n.subtitle = e.subtitle),
                e.test_group && e.test_group.length)
              ) {
                n.test_group = [];
                for (var r = 0; r < e.test_group.length; ++r) n.test_group[r] = e.test_group[r];
              }
              if (e.Applications && e.Applications.length)
                for (n.Applications = [], r = 0; r < e.Applications.length; ++r)
                  n.Applications[r] = f.proto.api.BundleConfig.BundleApplication.toObject(e.Applications[r], t);
              return (
                null != e.first_step_text && e.hasOwnProperty("first_step_text") && (n.first_step_text = e.first_step_text),
                null != e.last_step_text && e.hasOwnProperty("last_step_text") && (n.last_step_text = e.last_step_text),
                null != e.bottom_cta_text && e.hasOwnProperty("bottom_cta_text") && (n.bottom_cta_text = e.bottom_cta_text),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.BundleApplication = (function () {
              function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.prototype.id = ""),
                (e.prototype.title = ""),
                (e.prototype.description = ""),
                (e.prototype.deeplink = ""),
                (e.prototype.is_new = !1),
                (e.prototype.is_redeemed = !1),
                (e.prototype.redeem_url = ""),
                (e.prototype.price_per_month = ""),
                (e.prototype.next_step = null),
                (e.prototype.info_page = null),
                (e.prototype.reporting_id = ""),
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  return (
                    t || (t = p.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(18).string(e.title),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(26).string(e.description),
                    null != e.deeplink && Object.hasOwnProperty.call(e, "deeplink") && t.uint32(34).string(e.deeplink),
                    null != e.is_new && Object.hasOwnProperty.call(e, "is_new") && t.uint32(40).bool(e.is_new),
                    null != e.is_redeemed && Object.hasOwnProperty.call(e, "is_redeemed") && t.uint32(48).bool(e.is_redeemed),
                    null != e.redeem_url && Object.hasOwnProperty.call(e, "redeem_url") && t.uint32(58).string(e.redeem_url),
                    null != e.price_per_month && Object.hasOwnProperty.call(e, "price_per_month") && t.uint32(66).string(e.price_per_month),
                    null != e.next_step &&
                      Object.hasOwnProperty.call(e, "next_step") &&
                      f.proto.api.BundleConfig.BundleApplication.NextStep.encode(e.next_step, t.uint32(74).fork()).ldelim(),
                    null != e.info_page &&
                      Object.hasOwnProperty.call(e, "info_page") &&
                      f.proto.api.BundleConfig.BundleApplication.InfoPage.encode(e.info_page, t.uint32(82).fork()).ldelim(),
                    null != e.reporting_id && Object.hasOwnProperty.call(e, "reporting_id") && t.uint32(90).string(e.reporting_id),
                    t
                  );
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        r.id = e.string();
                        break;
                      case 2:
                        r.title = e.string();
                        break;
                      case 3:
                        r.description = e.string();
                        break;
                      case 4:
                        r.deeplink = e.string();
                        break;
                      case 5:
                        r.is_new = e.bool();
                        break;
                      case 6:
                        r.is_redeemed = e.bool();
                        break;
                      case 7:
                        r.redeem_url = e.string();
                        break;
                      case 8:
                        r.price_per_month = e.string();
                        break;
                      case 9:
                        r.next_step = f.proto.api.BundleConfig.BundleApplication.NextStep.decode(e, e.uint32());
                        break;
                      case 10:
                        r.info_page = f.proto.api.BundleConfig.BundleApplication.InfoPage.decode(e, e.uint32());
                        break;
                      case 11:
                        r.reporting_id = e.string();
                        break;
                      default:
                        e.skipType(7 & o);
                    }
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  return "object" != typeof e || null === e
                    ? "object expected"
                    : null != e.id && e.hasOwnProperty("id") && !l.isString(e.id)
                    ? "id: string expected"
                    : null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)
                    ? "title: string expected"
                    : null != e.description && e.hasOwnProperty("description") && !l.isString(e.description)
                    ? "description: string expected"
                    : null != e.deeplink && e.hasOwnProperty("deeplink") && !l.isString(e.deeplink)
                    ? "deeplink: string expected"
                    : null != e.is_new && e.hasOwnProperty("is_new") && "boolean" != typeof e.is_new
                    ? "is_new: boolean expected"
                    : null != e.is_redeemed && e.hasOwnProperty("is_redeemed") && "boolean" != typeof e.is_redeemed
                    ? "is_redeemed: boolean expected"
                    : null != e.redeem_url && e.hasOwnProperty("redeem_url") && !l.isString(e.redeem_url)
                    ? "redeem_url: string expected"
                    : null != e.price_per_month && e.hasOwnProperty("price_per_month") && !l.isString(e.price_per_month)
                    ? "price_per_month: string expected"
                    : null != e.next_step &&
                      e.hasOwnProperty("next_step") &&
                      (t = f.proto.api.BundleConfig.BundleApplication.NextStep.verify(e.next_step))
                    ? "next_step." + t
                    : null != e.info_page &&
                      e.hasOwnProperty("info_page") &&
                      (t = f.proto.api.BundleConfig.BundleApplication.InfoPage.verify(e.info_page))
                    ? "info_page." + t
                    : null != e.reporting_id && e.hasOwnProperty("reporting_id") && !l.isString(e.reporting_id)
                    ? "reporting_id: string expected"
                    : null;
                  var t;
                }),
                (e.fromObject = function (e) {
                  if (e instanceof f.proto.api.BundleConfig.BundleApplication) return e;
                  var t = new f.proto.api.BundleConfig.BundleApplication();
                  if (
                    (null != e.id && (t.id = String(e.id)),
                    null != e.title && (t.title = String(e.title)),
                    null != e.description && (t.description = String(e.description)),
                    null != e.deeplink && (t.deeplink = String(e.deeplink)),
                    null != e.is_new && (t.is_new = Boolean(e.is_new)),
                    null != e.is_redeemed && (t.is_redeemed = Boolean(e.is_redeemed)),
                    null != e.redeem_url && (t.redeem_url = String(e.redeem_url)),
                    null != e.price_per_month && (t.price_per_month = String(e.price_per_month)),
                    null != e.next_step)
                  ) {
                    if ("object" != typeof e.next_step)
                      throw TypeError(".proto.api.BundleConfig.BundleApplication.next_step: object expected");
                    t.next_step = f.proto.api.BundleConfig.BundleApplication.NextStep.fromObject(e.next_step);
                  }
                  if (null != e.info_page) {
                    if ("object" != typeof e.info_page)
                      throw TypeError(".proto.api.BundleConfig.BundleApplication.info_page: object expected");
                    t.info_page = f.proto.api.BundleConfig.BundleApplication.InfoPage.fromObject(e.info_page);
                  }
                  return null != e.reporting_id && (t.reporting_id = String(e.reporting_id)), t;
                }),
                (e.toObject = function (e, t) {
                  t || (t = {});
                  var n = {};
                  return (
                    t.defaults &&
                      ((n.id = ""),
                      (n.title = ""),
                      (n.description = ""),
                      (n.deeplink = ""),
                      (n.is_new = !1),
                      (n.is_redeemed = !1),
                      (n.redeem_url = ""),
                      (n.price_per_month = ""),
                      (n.next_step = null),
                      (n.info_page = null),
                      (n.reporting_id = "")),
                    null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                    null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                    null != e.description && e.hasOwnProperty("description") && (n.description = e.description),
                    null != e.deeplink && e.hasOwnProperty("deeplink") && (n.deeplink = e.deeplink),
                    null != e.is_new && e.hasOwnProperty("is_new") && (n.is_new = e.is_new),
                    null != e.is_redeemed && e.hasOwnProperty("is_redeemed") && (n.is_redeemed = e.is_redeemed),
                    null != e.redeem_url && e.hasOwnProperty("redeem_url") && (n.redeem_url = e.redeem_url),
                    null != e.price_per_month && e.hasOwnProperty("price_per_month") && (n.price_per_month = e.price_per_month),
                    null != e.next_step &&
                      e.hasOwnProperty("next_step") &&
                      (n.next_step = f.proto.api.BundleConfig.BundleApplication.NextStep.toObject(e.next_step, t)),
                    null != e.info_page &&
                      e.hasOwnProperty("info_page") &&
                      (n.info_page = f.proto.api.BundleConfig.BundleApplication.InfoPage.toObject(e.info_page, t)),
                    null != e.reporting_id && e.hasOwnProperty("reporting_id") && (n.reporting_id = e.reporting_id),
                    n
                  );
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                (e.NextStep = (function () {
                  function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.title = ""),
                    (e.prototype.text = ""),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = p.create()),
                        null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                        null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text),
                        t
                      );
                    }),
                    (e.decode = function (e, t) {
                      e instanceof c || (e = c.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.NextStep();
                        e.pos < n;

                      ) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                          case 1:
                            r.title = e.string();
                            break;
                          case 2:
                            r.text = e.string();
                            break;
                          default:
                            e.skipType(7 & o);
                        }
                      }
                      return r;
                    }),
                    (e.verify = function (e) {
                      return "object" != typeof e || null === e
                        ? "object expected"
                        : null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)
                        ? "title: string expected"
                        : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                        ? "text: string expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof f.proto.api.BundleConfig.BundleApplication.NextStep) return e;
                      var t = new f.proto.api.BundleConfig.BundleApplication.NextStep();
                      return null != e.title && (t.title = String(e.title)), null != e.text && (t.text = String(e.text)), t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && ((n.title = ""), (n.text = "")),
                        null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                        null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(this, u.util.toJSONOptions);
                    }),
                    e
                  );
                })()),
                (e.InfoPage = (function () {
                  function e(e) {
                    if (((this.badges = []), (this.factoids = []), e))
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.header = null),
                    (e.prototype.badges = l.emptyArray),
                    (e.prototype.description = null),
                    (e.prototype.factoids = l.emptyArray),
                    (e.prototype.features = null),
                    (e.prototype.footer = null),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = p.create()),
                        null != e.header &&
                          Object.hasOwnProperty.call(e, "header") &&
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Header.encode(e.header, t.uint32(10).fork()).ldelim(),
                        null != e.badges && e.badges.length)
                      )
                        for (var n = 0; n < e.badges.length; ++n)
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge.encode(e.badges[n], t.uint32(18).fork()).ldelim();
                      if (
                        (null != e.description &&
                          Object.hasOwnProperty.call(e, "description") &&
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Description.encode(
                            e.description,
                            t.uint32(26).fork()
                          ).ldelim(),
                        null != e.factoids && e.factoids.length)
                      )
                        for (n = 0; n < e.factoids.length; ++n)
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid.encode(e.factoids[n], t.uint32(34).fork()).ldelim();
                      return (
                        null != e.features &&
                          Object.hasOwnProperty.call(e, "features") &&
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.encode(e.features, t.uint32(42).fork()).ldelim(),
                        null != e.footer &&
                          Object.hasOwnProperty.call(e, "footer") &&
                          f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer.encode(e.footer, t.uint32(50).fork()).ldelim(),
                        t
                      );
                    }),
                    (e.decode = function (e, t) {
                      e instanceof c || (e = c.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.InfoPage();
                        e.pos < n;

                      ) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                          case 1:
                            r.header = f.proto.api.BundleConfig.BundleApplication.InfoPage.Header.decode(e, e.uint32());
                            break;
                          case 2:
                            (r.badges && r.badges.length) || (r.badges = []),
                              r.badges.push(f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge.decode(e, e.uint32()));
                            break;
                          case 3:
                            r.description = f.proto.api.BundleConfig.BundleApplication.InfoPage.Description.decode(e, e.uint32());
                            break;
                          case 4:
                            (r.factoids && r.factoids.length) || (r.factoids = []),
                              r.factoids.push(f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid.decode(e, e.uint32()));
                            break;
                          case 5:
                            r.features = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.decode(e, e.uint32());
                            break;
                          case 6:
                            r.footer = f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer.decode(e, e.uint32());
                            break;
                          default:
                            e.skipType(7 & o);
                        }
                      }
                      return r;
                    }),
                    (e.verify = function (e) {
                      if ("object" != typeof e || null === e) return "object expected";
                      if (
                        null != e.header &&
                        e.hasOwnProperty("header") &&
                        (n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Header.verify(e.header))
                      )
                        return "header." + n;
                      if (null != e.badges && e.hasOwnProperty("badges")) {
                        if (!Array.isArray(e.badges)) return "badges: array expected";
                        for (var t = 0; t < e.badges.length; ++t)
                          if ((n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge.verify(e.badges[t]))) return "badges." + n;
                      }
                      if (
                        null != e.description &&
                        e.hasOwnProperty("description") &&
                        (n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Description.verify(e.description))
                      )
                        return "description." + n;
                      if (null != e.factoids && e.hasOwnProperty("factoids")) {
                        if (!Array.isArray(e.factoids)) return "factoids: array expected";
                        for (t = 0; t < e.factoids.length; ++t) {
                          var n;
                          if ((n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid.verify(e.factoids[t])))
                            return "factoids." + n;
                        }
                      }
                      return null != e.features &&
                        e.hasOwnProperty("features") &&
                        (n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.verify(e.features))
                        ? "features." + n
                        : null != e.footer &&
                          e.hasOwnProperty("footer") &&
                          (n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer.verify(e.footer))
                        ? "footer." + n
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage) return e;
                      var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage();
                      if (null != e.header) {
                        if ("object" != typeof e.header)
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.header: object expected");
                        t.header = f.proto.api.BundleConfig.BundleApplication.InfoPage.Header.fromObject(e.header);
                      }
                      if (e.badges) {
                        if (!Array.isArray(e.badges))
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.badges: array expected");
                        t.badges = [];
                        for (var n = 0; n < e.badges.length; ++n) {
                          if ("object" != typeof e.badges[n])
                            throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.badges: object expected");
                          t.badges[n] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge.fromObject(e.badges[n]);
                        }
                      }
                      if (null != e.description) {
                        if ("object" != typeof e.description)
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.description: object expected");
                        t.description = f.proto.api.BundleConfig.BundleApplication.InfoPage.Description.fromObject(e.description);
                      }
                      if (e.factoids) {
                        if (!Array.isArray(e.factoids))
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.factoids: array expected");
                        for (t.factoids = [], n = 0; n < e.factoids.length; ++n) {
                          if ("object" != typeof e.factoids[n])
                            throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.factoids: object expected");
                          t.factoids[n] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid.fromObject(e.factoids[n]);
                        }
                      }
                      if (null != e.features) {
                        if ("object" != typeof e.features)
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.features: object expected");
                        t.features = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.fromObject(e.features);
                      }
                      if (null != e.footer) {
                        if ("object" != typeof e.footer)
                          throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.footer: object expected");
                        t.footer = f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer.fromObject(e.footer);
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) && ((n.badges = []), (n.factoids = [])),
                        t.defaults && ((n.header = null), (n.description = null), (n.features = null), (n.footer = null)),
                        null != e.header &&
                          e.hasOwnProperty("header") &&
                          (n.header = f.proto.api.BundleConfig.BundleApplication.InfoPage.Header.toObject(e.header, t)),
                        e.badges && e.badges.length)
                      ) {
                        n.badges = [];
                        for (var r = 0; r < e.badges.length; ++r)
                          n.badges[r] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge.toObject(e.badges[r], t);
                      }
                      if (
                        (null != e.description &&
                          e.hasOwnProperty("description") &&
                          (n.description = f.proto.api.BundleConfig.BundleApplication.InfoPage.Description.toObject(e.description, t)),
                        e.factoids && e.factoids.length)
                      )
                        for (n.factoids = [], r = 0; r < e.factoids.length; ++r)
                          n.factoids[r] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid.toObject(e.factoids[r], t);
                      return (
                        null != e.features &&
                          e.hasOwnProperty("features") &&
                          (n.features = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.toObject(e.features, t)),
                        null != e.footer &&
                          e.hasOwnProperty("footer") &&
                          (n.footer = f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer.toObject(e.footer, t)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(this, u.util.toJSONOptions);
                    }),
                    (e.Header = (function () {
                      function e(e) {
                        if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.title = ""),
                        (e.prototype.text = ""),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          return (
                            t || (t = p.create()),
                            null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                            null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text),
                            t
                          );
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Header();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.title = e.string();
                                break;
                              case 2:
                                r.text = e.string();
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          return "object" != typeof e || null === e
                            ? "object expected"
                            : null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)
                            ? "title: string expected"
                            : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                            ? "text: string expected"
                            : null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Header) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Header();
                          return null != e.title && (t.title = String(e.title)), null != e.text && (t.text = String(e.text)), t;
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          return (
                            t.defaults && ((n.title = ""), (n.text = "")),
                            null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                            null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                            n
                          );
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        e
                      );
                    })()),
                    (e.Badge = (function () {
                      function e(e) {
                        if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.icon = ""),
                        (e.prototype.text = ""),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          return (
                            t || (t = p.create()),
                            null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(10).string(e.icon),
                            null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text),
                            t
                          );
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.icon = e.string();
                                break;
                              case 2:
                                r.text = e.string();
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          return "object" != typeof e || null === e
                            ? "object expected"
                            : null != e.icon && e.hasOwnProperty("icon") && !l.isString(e.icon)
                            ? "icon: string expected"
                            : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                            ? "text: string expected"
                            : null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Badge();
                          return null != e.icon && (t.icon = String(e.icon)), null != e.text && (t.text = String(e.text)), t;
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          return (
                            t.defaults && ((n.icon = ""), (n.text = "")),
                            null != e.icon && e.hasOwnProperty("icon") && (n.icon = e.icon),
                            null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                            n
                          );
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        e
                      );
                    })()),
                    (e.Description = (function () {
                      function e(e) {
                        if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.title = ""),
                        (e.prototype.text = ""),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          return (
                            t || (t = p.create()),
                            null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                            null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text),
                            t
                          );
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t,
                              r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Description();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.title = e.string();
                                break;
                              case 2:
                                r.text = e.string();
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          return "object" != typeof e || null === e
                            ? "object expected"
                            : null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)
                            ? "title: string expected"
                            : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                            ? "text: string expected"
                            : null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Description) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Description();
                          return null != e.title && (t.title = String(e.title)), null != e.text && (t.text = String(e.text)), t;
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          return (
                            t.defaults && ((n.title = ""), (n.text = "")),
                            null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                            null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                            n
                          );
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        e
                      );
                    })()),
                    (e.Factoid = (function () {
                      function e(e) {
                        if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.title = ""),
                        (e.prototype.text = ""),
                        (e.prototype.footer = ""),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          return (
                            t || (t = p.create()),
                            null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                            null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(18).string(e.text),
                            null != e.footer && Object.hasOwnProperty.call(e, "footer") && t.uint32(26).string(e.footer),
                            t
                          );
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.title = e.string();
                                break;
                              case 2:
                                r.text = e.string();
                                break;
                              case 3:
                                r.footer = e.string();
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          return "object" != typeof e || null === e
                            ? "object expected"
                            : null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)
                            ? "title: string expected"
                            : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                            ? "text: string expected"
                            : null != e.footer && e.hasOwnProperty("footer") && !l.isString(e.footer)
                            ? "footer: string expected"
                            : null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Factoid();
                          return (
                            null != e.title && (t.title = String(e.title)),
                            null != e.text && (t.text = String(e.text)),
                            null != e.footer && (t.footer = String(e.footer)),
                            t
                          );
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          return (
                            t.defaults && ((n.title = ""), (n.text = ""), (n.footer = "")),
                            null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                            null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                            null != e.footer && e.hasOwnProperty("footer") && (n.footer = e.footer),
                            n
                          );
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        e
                      );
                    })()),
                    (e.Features = (function () {
                      function e(e) {
                        if (((this.items = []), e))
                          for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.title = ""),
                        (e.prototype.items = l.emptyArray),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          if (
                            (t || (t = p.create()),
                            null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title),
                            null != e.items && e.items.length)
                          )
                            for (var n = 0; n < e.items.length; ++n)
                              f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.encode(
                                e.items[n],
                                t.uint32(18).fork()
                              ).ldelim();
                          return t;
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t,
                              r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Features();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.title = e.string();
                                break;
                              case 2:
                                (r.items && r.items.length) || (r.items = []),
                                  r.items.push(f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.decode(e, e.uint32()));
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          if ("object" != typeof e || null === e) return "object expected";
                          if (null != e.title && e.hasOwnProperty("title") && !l.isString(e.title)) return "title: string expected";
                          if (null != e.items && e.hasOwnProperty("items")) {
                            if (!Array.isArray(e.items)) return "items: array expected";
                            for (var t = 0; t < e.items.length; ++t) {
                              var n = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.verify(e.items[t]);
                              if (n) return "items." + n;
                            }
                          }
                          return null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Features) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Features();
                          if ((null != e.title && (t.title = String(e.title)), e.items)) {
                            if (!Array.isArray(e.items))
                              throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.Features.items: array expected");
                            t.items = [];
                            for (var n = 0; n < e.items.length; ++n) {
                              if ("object" != typeof e.items[n])
                                throw TypeError(".proto.api.BundleConfig.BundleApplication.InfoPage.Features.items: object expected");
                              t.items[n] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.fromObject(e.items[n]);
                            }
                          }
                          return t;
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          if (
                            ((t.arrays || t.defaults) && (n.items = []),
                            t.defaults && (n.title = ""),
                            null != e.title && e.hasOwnProperty("title") && (n.title = e.title),
                            e.items && e.items.length)
                          ) {
                            n.items = [];
                            for (var r = 0; r < e.items.length; ++r)
                              n.items[r] = f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.toObject(e.items[r], t);
                          }
                          return n;
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        (e.Item = (function () {
                          function e(e) {
                            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                          }
                          var t, n;
                          return (
                            (e.prototype.name = ""),
                            (e.prototype.type = 1),
                            (e.prototype.value = ""),
                            (e.create = function (t) {
                              return new e(t);
                            }),
                            (e.encode = function (e, t) {
                              return (
                                t || (t = p.create()),
                                null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name),
                                null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type),
                                null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(26).string(e.value),
                                t
                              );
                            }),
                            (e.decode = function (e, t) {
                              e instanceof c || (e = c.create(e));
                              for (
                                var n = void 0 === t ? e.len : e.pos + t,
                                  r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item();
                                e.pos < n;

                              ) {
                                var o = e.uint32();
                                switch (o >>> 3) {
                                  case 1:
                                    r.name = e.string();
                                    break;
                                  case 2:
                                    r.type = e.int32();
                                    break;
                                  case 3:
                                    r.value = e.string();
                                    break;
                                  default:
                                    e.skipType(7 & o);
                                }
                              }
                              return r;
                            }),
                            (e.verify = function (e) {
                              if ("object" != typeof e || null === e) return "object expected";
                              if (null != e.name && e.hasOwnProperty("name") && !l.isString(e.name)) return "name: string expected";
                              if (null != e.type && e.hasOwnProperty("type"))
                                switch (e.type) {
                                  default:
                                    return "type: enum value expected";
                                  case 1:
                                  case 2:
                                }
                              return null != e.value && e.hasOwnProperty("value") && !l.isString(e.value) ? "value: string expected" : null;
                            }),
                            (e.fromObject = function (e) {
                              if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item) return e;
                              var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item();
                              switch ((null != e.name && (t.name = String(e.name)), e.type)) {
                                case "TEXT":
                                case 1:
                                  t.type = 1;
                                  break;
                                case "CHECKBOX":
                                case 2:
                                  t.type = 2;
                              }
                              return null != e.value && (t.value = String(e.value)), t;
                            }),
                            (e.toObject = function (e, t) {
                              t || (t = {});
                              var n = {};
                              return (
                                t.defaults && ((n.name = ""), (n.type = t.enums === String ? "TEXT" : 1), (n.value = "")),
                                null != e.name && e.hasOwnProperty("name") && (n.name = e.name),
                                null != e.type &&
                                  e.hasOwnProperty("type") &&
                                  (n.type =
                                    t.enums === String
                                      ? f.proto.api.BundleConfig.BundleApplication.InfoPage.Features.Item.Type[e.type]
                                      : e.type),
                                null != e.value && e.hasOwnProperty("value") && (n.value = e.value),
                                n
                              );
                            }),
                            (e.prototype.toJSON = function () {
                              return this.constructor.toObject(this, u.util.toJSONOptions);
                            }),
                            (e.Type = ((t = {}), ((n = Object.create(t))[(t[1] = "TEXT")] = 1), (n[(t[2] = "CHECKBOX")] = 2), n)),
                            e
                          );
                        })()),
                        e
                      );
                    })()),
                    (e.Footer = (function () {
                      function e(e) {
                        if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                      }
                      return (
                        (e.prototype.text = ""),
                        (e.create = function (t) {
                          return new e(t);
                        }),
                        (e.encode = function (e, t) {
                          return (
                            t || (t = p.create()), null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(10).string(e.text), t
                          );
                        }),
                        (e.decode = function (e, t) {
                          e instanceof c || (e = c.create(e));
                          for (
                            var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer();
                            e.pos < n;

                          ) {
                            var o = e.uint32();
                            switch (o >>> 3) {
                              case 1:
                                r.text = e.string();
                                break;
                              default:
                                e.skipType(7 & o);
                            }
                          }
                          return r;
                        }),
                        (e.verify = function (e) {
                          return "object" != typeof e || null === e
                            ? "object expected"
                            : null != e.text && e.hasOwnProperty("text") && !l.isString(e.text)
                            ? "text: string expected"
                            : null;
                        }),
                        (e.fromObject = function (e) {
                          if (e instanceof f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer) return e;
                          var t = new f.proto.api.BundleConfig.BundleApplication.InfoPage.Footer();
                          return null != e.text && (t.text = String(e.text)), t;
                        }),
                        (e.toObject = function (e, t) {
                          t || (t = {});
                          var n = {};
                          return t.defaults && (n.text = ""), null != e.text && e.hasOwnProperty("text") && (n.text = e.text), n;
                        }),
                        (e.prototype.toJSON = function () {
                          return this.constructor.toObject(this, u.util.toJSONOptions);
                        }),
                        e
                      );
                    })()),
                    e
                  );
                })()),
                e
              );
            })()),
            e
          );
        })()),
        (i.Package = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.id = 1),
            (e.prototype.is_active = !1),
            (e.prototype.expiration_date = 0),
            (e.prototype.is_lifetime = !1),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                t.uint32(8).int32(e.id),
                null != e.is_active && Object.hasOwnProperty.call(e, "is_active") && t.uint32(16).bool(e.is_active),
                null != e.expiration_date && Object.hasOwnProperty.call(e, "expiration_date") && t.uint32(24).uint64(e.expiration_date),
                null != e.is_lifetime && Object.hasOwnProperty.call(e, "is_lifetime") && t.uint32(32).bool(e.is_lifetime),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.Package(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.id = e.int32();
                    break;
                  case 2:
                    r.is_active = e.bool();
                    break;
                  case 3:
                    r.expiration_date = e.uint64();
                    break;
                  case 4:
                    r.is_lifetime = e.bool();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("id")) throw l.ProtocolError("missing required 'id'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              switch (e.id) {
                default:
                  return "id: enum value expected";
                case 1:
                case 10:
                case 11:
                case 15:
                case 13:
                case 12:
                case 18:
                case 19:
                case 20:
                case 21:
              }
              return null != e.is_active && e.hasOwnProperty("is_active") && "boolean" != typeof e.is_active
                ? "is_active: boolean expected"
                : null != e.expiration_date &&
                  e.hasOwnProperty("expiration_date") &&
                  !(
                    l.isInteger(e.expiration_date) ||
                    (e.expiration_date && l.isInteger(e.expiration_date.low) && l.isInteger(e.expiration_date.high))
                  )
                ? "expiration_date: integer|Long expected"
                : null != e.is_lifetime && e.hasOwnProperty("is_lifetime") && "boolean" != typeof e.is_lifetime
                ? "is_lifetime: boolean expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.Package) return e;
              var t = new f.proto.api.Package();
              switch (e.id) {
                case "ELITE":
                case 1:
                  t.id = 1;
                  break;
                case "DEDICATED":
                case 10:
                  t.id = 10;
                  break;
                case "TURBO":
                case 11:
                  t.id = 11;
                  break;
                case "TRIAL":
                case 15:
                  t.id = 15;
                  break;
                case "ADS":
                case 13:
                  t.id = 13;
                  break;
                case "VIRTUAL_LOCATION":
                case 12:
                  t.id = 12;
                  break;
                case "FIVE_EXTRA_DEVICES":
                case 18:
                  t.id = 18;
                  break;
                case "TRIALWARE":
                case 19:
                  t.id = 19;
                  break;
                case "BUSINESS_MANAGER":
                case 20:
                  t.id = 20;
                  break;
                case "BUSINESS_MEMBER":
                case 21:
                  t.id = 21;
              }
              return (
                null != e.is_active && (t.is_active = Boolean(e.is_active)),
                null != e.expiration_date &&
                  (l.Long
                    ? ((t.expiration_date = l.Long.fromValue(e.expiration_date)).unsigned = !0)
                    : "string" == typeof e.expiration_date
                    ? (t.expiration_date = parseInt(e.expiration_date, 10))
                    : "number" == typeof e.expiration_date
                    ? (t.expiration_date = e.expiration_date)
                    : "object" == typeof e.expiration_date &&
                      (t.expiration_date = new l.LongBits(e.expiration_date.low >>> 0, e.expiration_date.high >>> 0).toNumber(!0))),
                null != e.is_lifetime && (t.is_lifetime = Boolean(e.is_lifetime)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.id = t.enums === String ? "ELITE" : 1), (n.is_active = !1), (n.expiration_date = 0), (n.is_lifetime = !1)),
                null != e.id && e.hasOwnProperty("id") && (n.id = t.enums === String ? f.proto.api.Package.Id[e.id] : e.id),
                null != e.is_active && e.hasOwnProperty("is_active") && (n.is_active = e.is_active),
                null != e.expiration_date &&
                  e.hasOwnProperty("expiration_date") &&
                  ("number" == typeof e.expiration_date
                    ? (n.expiration_date = t.longs === String ? String(e.expiration_date) : e.expiration_date)
                    : (n.expiration_date =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.expiration_date)
                          : t.longs === Number
                          ? new l.LongBits(e.expiration_date.low >>> 0, e.expiration_date.high >>> 0).toNumber(!0)
                          : e.expiration_date)),
                null != e.is_lifetime && e.hasOwnProperty("is_lifetime") && (n.is_lifetime = e.is_lifetime),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Id =
              ((t = {}),
              ((n = Object.create(t))[(t[1] = "ELITE")] = 1),
              (n[(t[10] = "DEDICATED")] = 10),
              (n[(t[11] = "TURBO")] = 11),
              (n[(t[15] = "TRIAL")] = 15),
              (n[(t[13] = "ADS")] = 13),
              (n[(t[12] = "VIRTUAL_LOCATION")] = 12),
              (n[(t[18] = "FIVE_EXTRA_DEVICES")] = 18),
              (n[(t[19] = "TRIALWARE")] = 19),
              (n[(t[20] = "BUSINESS_MANAGER")] = 20),
              (n[(t[21] = "BUSINESS_MEMBER")] = 21),
              n)),
            e
          );
        })()),
        (i.TimeRange = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.start = null),
            (e.prototype.end = null),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.start &&
                  Object.hasOwnProperty.call(e, "start") &&
                  f.proto.api.Timestamp.encode(e.start, t.uint32(10).fork()).ldelim(),
                null != e.end && Object.hasOwnProperty.call(e, "end") && f.proto.api.Timestamp.encode(e.end, t.uint32(18).fork()).ldelim(),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.TimeRange(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.start = f.proto.api.Timestamp.decode(e, e.uint32());
                    break;
                  case 2:
                    r.end = f.proto.api.Timestamp.decode(e, e.uint32());
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.start && e.hasOwnProperty("start") && (t = f.proto.api.Timestamp.verify(e.start))
                ? "start." + t
                : null != e.end && e.hasOwnProperty("end") && (t = f.proto.api.Timestamp.verify(e.end))
                ? "end." + t
                : null;
              var t;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.TimeRange) return e;
              var t = new f.proto.api.TimeRange();
              if (null != e.start) {
                if ("object" != typeof e.start) throw TypeError(".proto.api.TimeRange.start: object expected");
                t.start = f.proto.api.Timestamp.fromObject(e.start);
              }
              if (null != e.end) {
                if ("object" != typeof e.end) throw TypeError(".proto.api.TimeRange.end: object expected");
                t.end = f.proto.api.Timestamp.fromObject(e.end);
              }
              return t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.start = null), (n.end = null)),
                null != e.start && e.hasOwnProperty("start") && (n.start = f.proto.api.Timestamp.toObject(e.start, t)),
                null != e.end && e.hasOwnProperty("end") && (n.end = f.proto.api.Timestamp.toObject(e.end, t)),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.Timestamp = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.seconds = 0),
            (e.prototype.nanos = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds),
                null != e.nanos && Object.hasOwnProperty.call(e, "nanos") && t.uint32(16).int32(e.nanos),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.Timestamp(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.seconds = e.int64();
                    break;
                  case 2:
                    r.nanos = e.int32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.seconds &&
                  e.hasOwnProperty("seconds") &&
                  !(l.isInteger(e.seconds) || (e.seconds && l.isInteger(e.seconds.low) && l.isInteger(e.seconds.high)))
                ? "seconds: integer|Long expected"
                : null != e.nanos && e.hasOwnProperty("nanos") && !l.isInteger(e.nanos)
                ? "nanos: integer expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.Timestamp) return e;
              var t = new f.proto.api.Timestamp();
              return (
                null != e.seconds &&
                  (l.Long
                    ? ((t.seconds = l.Long.fromValue(e.seconds)).unsigned = !1)
                    : "string" == typeof e.seconds
                    ? (t.seconds = parseInt(e.seconds, 10))
                    : "number" == typeof e.seconds
                    ? (t.seconds = e.seconds)
                    : "object" == typeof e.seconds && (t.seconds = new l.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber())),
                null != e.nanos && (t.nanos = 0 | e.nanos),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.seconds = 0), (n.nanos = 0)),
                null != e.seconds &&
                  e.hasOwnProperty("seconds") &&
                  ("number" == typeof e.seconds
                    ? (n.seconds = t.longs === String ? String(e.seconds) : e.seconds)
                    : (n.seconds =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.seconds)
                          : t.longs === Number
                          ? new l.LongBits(e.seconds.low >>> 0, e.seconds.high >>> 0).toNumber()
                          : e.seconds)),
                null != e.nanos && e.hasOwnProperty("nanos") && (n.nanos = e.nanos),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.GoogleSubscription = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.status = 0),
            (e.prototype.created_at = null),
            (e.prototype.updated_at = null),
            (e.prototype.product_id = ""),
            (e.prototype.product_batch_id = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(8).uint32(e.status),
                null != e.created_at &&
                  Object.hasOwnProperty.call(e, "created_at") &&
                  f.proto.api.Timestamp.encode(e.created_at, t.uint32(18).fork()).ldelim(),
                null != e.updated_at &&
                  Object.hasOwnProperty.call(e, "updated_at") &&
                  f.proto.api.Timestamp.encode(e.updated_at, t.uint32(26).fork()).ldelim(),
                null != e.product_id && Object.hasOwnProperty.call(e, "product_id") && t.uint32(34).string(e.product_id),
                null != e.product_batch_id && Object.hasOwnProperty.call(e, "product_batch_id") && t.uint32(40).uint32(e.product_batch_id),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.GoogleSubscription(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.status = e.uint32();
                    break;
                  case 2:
                    r.created_at = f.proto.api.Timestamp.decode(e, e.uint32());
                    break;
                  case 3:
                    r.updated_at = f.proto.api.Timestamp.decode(e, e.uint32());
                    break;
                  case 4:
                    r.product_id = e.string();
                    break;
                  case 5:
                    r.product_batch_id = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.status && e.hasOwnProperty("status") && !l.isInteger(e.status)
                ? "status: integer expected"
                : null != e.created_at && e.hasOwnProperty("created_at") && (t = f.proto.api.Timestamp.verify(e.created_at))
                ? "created_at." + t
                : null != e.updated_at && e.hasOwnProperty("updated_at") && (t = f.proto.api.Timestamp.verify(e.updated_at))
                ? "updated_at." + t
                : null != e.product_id && e.hasOwnProperty("product_id") && !l.isString(e.product_id)
                ? "product_id: string expected"
                : null != e.product_batch_id && e.hasOwnProperty("product_batch_id") && !l.isInteger(e.product_batch_id)
                ? "product_batch_id: integer expected"
                : null;
              var t;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.GoogleSubscription) return e;
              var t = new f.proto.api.GoogleSubscription();
              if ((null != e.status && (t.status = e.status >>> 0), null != e.created_at)) {
                if ("object" != typeof e.created_at) throw TypeError(".proto.api.GoogleSubscription.created_at: object expected");
                t.created_at = f.proto.api.Timestamp.fromObject(e.created_at);
              }
              if (null != e.updated_at) {
                if ("object" != typeof e.updated_at) throw TypeError(".proto.api.GoogleSubscription.updated_at: object expected");
                t.updated_at = f.proto.api.Timestamp.fromObject(e.updated_at);
              }
              return (
                null != e.product_id && (t.product_id = String(e.product_id)),
                null != e.product_batch_id && (t.product_batch_id = e.product_batch_id >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.status = 0), (n.created_at = null), (n.updated_at = null), (n.product_id = ""), (n.product_batch_id = 0)),
                null != e.status && e.hasOwnProperty("status") && (n.status = e.status),
                null != e.created_at && e.hasOwnProperty("created_at") && (n.created_at = f.proto.api.Timestamp.toObject(e.created_at, t)),
                null != e.updated_at && e.hasOwnProperty("updated_at") && (n.updated_at = f.proto.api.Timestamp.toObject(e.updated_at, t)),
                null != e.product_id && e.hasOwnProperty("product_id") && (n.product_id = e.product_id),
                null != e.product_batch_id && e.hasOwnProperty("product_batch_id") && (n.product_batch_id = e.product_batch_id),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.WebkitTrigger = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.type = 1),
            (e.prototype.url = ""),
            (e.prototype.interval = 0),
            (e.prototype.test_id = ""),
            (e.prototype.test_group = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).int32(e.type),
                null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(18).string(e.url),
                null != e.interval && Object.hasOwnProperty.call(e, "interval") && t.uint32(24).int32(e.interval),
                null != e.test_id && Object.hasOwnProperty.call(e, "test_id") && t.uint32(34).string(e.test_id),
                null != e.test_group && Object.hasOwnProperty.call(e, "test_group") && t.uint32(42).string(e.test_group),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.WebkitTrigger(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.type = e.int32();
                    break;
                  case 2:
                    r.url = e.string();
                    break;
                  case 3:
                    r.interval = e.int32();
                    break;
                  case 4:
                    r.test_id = e.string();
                    break;
                  case 5:
                    r.test_group = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.type && e.hasOwnProperty("type"))
                switch (e.type) {
                  default:
                    return "type: enum value expected";
                  case 1:
                  case 2:
                  case 3:
                }
              return null != e.url && e.hasOwnProperty("url") && !l.isString(e.url)
                ? "url: string expected"
                : null != e.interval && e.hasOwnProperty("interval") && !l.isInteger(e.interval)
                ? "interval: integer expected"
                : null != e.test_id && e.hasOwnProperty("test_id") && !l.isString(e.test_id)
                ? "test_id: string expected"
                : null != e.test_group && e.hasOwnProperty("test_group") && !l.isString(e.test_group)
                ? "test_group: string expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.WebkitTrigger) return e;
              var t = new f.proto.api.WebkitTrigger();
              switch (e.type) {
                case "ON_LAUNCH_FREE":
                case 1:
                  t.type = 1;
                  break;
                case "ON_LAUNCH_PREMIUM":
                case 2:
                  t.type = 2;
                  break;
                case "ON_SUBSCRIPTION_CANCEL_BY_APP_STORE":
                case 3:
                  t.type = 3;
              }
              return (
                null != e.url && (t.url = String(e.url)),
                null != e.interval && (t.interval = 0 | e.interval),
                null != e.test_id && (t.test_id = String(e.test_id)),
                null != e.test_group && (t.test_group = String(e.test_group)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.type = t.enums === String ? "ON_LAUNCH_FREE" : 1),
                  (n.url = ""),
                  (n.interval = 0),
                  (n.test_id = ""),
                  (n.test_group = "")),
                null != e.type &&
                  e.hasOwnProperty("type") &&
                  (n.type = t.enums === String ? f.proto.api.WebkitTrigger.WebkitTriggerType[e.type] : e.type),
                null != e.url && e.hasOwnProperty("url") && (n.url = e.url),
                null != e.interval && e.hasOwnProperty("interval") && (n.interval = e.interval),
                null != e.test_id && e.hasOwnProperty("test_id") && (n.test_id = e.test_id),
                null != e.test_group && e.hasOwnProperty("test_group") && (n.test_group = e.test_group),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.WebkitTriggerType =
              ((t = {}),
              ((n = Object.create(t))[(t[1] = "ON_LAUNCH_FREE")] = 1),
              (n[(t[2] = "ON_LAUNCH_PREMIUM")] = 2),
              (n[(t[3] = "ON_SUBSCRIPTION_CANCEL_BY_APP_STORE")] = 3),
              n)),
            e
          );
        })()),
        (i.ProxyParams = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.username = ""),
            (e.prototype.password = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return t || (t = p.create()), t.uint32(10).string(e.username), t.uint32(18).string(e.password), t;
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.ProxyParams(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.username = e.string();
                    break;
                  case 2:
                    r.password = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("username")) throw l.ProtocolError("missing required 'username'", { instance: r });
              if (!r.hasOwnProperty("password")) throw l.ProtocolError("missing required 'password'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : l.isString(e.username)
                ? l.isString(e.password)
                  ? null
                  : "password: string expected"
                : "username: string expected";
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.ProxyParams) return e;
              var t = new f.proto.api.ProxyParams();
              return null != e.username && (t.username = String(e.username)), null != e.password && (t.password = String(e.password)), t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.username = ""), (n.password = "")),
                null != e.username && e.hasOwnProperty("username") && (n.username = e.username),
                null != e.password && e.hasOwnProperty("password") && (n.password = e.password),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.response =
          (((o = {}).AdConfig = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.can_show_video = !1),
              (e.prototype.cap_expired_at = 0),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.can_show_video && Object.hasOwnProperty.call(e, "can_show_video") && t.uint32(16).bool(e.can_show_video),
                  null != e.cap_expired_at && Object.hasOwnProperty.call(e, "cap_expired_at") && t.uint32(24).uint32(e.cap_expired_at),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.AdConfig(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.can_show_video = e.bool();
                      break;
                    case 3:
                      r.cap_expired_at = e.uint32();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t
                  ? "ResponseStatus." + t
                  : null != e.can_show_video && e.hasOwnProperty("can_show_video") && "boolean" != typeof e.can_show_video
                  ? "can_show_video: boolean expected"
                  : null != e.cap_expired_at && e.hasOwnProperty("cap_expired_at") && !l.isInteger(e.cap_expired_at)
                  ? "cap_expired_at: integer expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.AdConfig) return e;
                var t = new f.proto.api.response.AdConfig();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.AdConfig.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return (
                  null != e.can_show_video && (t.can_show_video = Boolean(e.can_show_video)),
                  null != e.cap_expired_at && (t.cap_expired_at = e.cap_expired_at >>> 0),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.can_show_video = !1), (n.cap_expired_at = 0)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.can_show_video && e.hasOwnProperty("can_show_video") && (n.can_show_video = e.can_show_video),
                  null != e.cap_expired_at && e.hasOwnProperty("cap_expired_at") && (n.cap_expired_at = e.cap_expired_at),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.AdConsumed = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.AdConsumed(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.AdConsumed) return e;
                var t = new f.proto.api.response.AdConsumed();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.AdConsumed.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.AdConsumed.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Bandwidth = (function () {
            function e(e) {
              if (((this.last_24_hours = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.last_24_hours = l.emptyArray),
              (e.prototype.is_cooldown_feature_enabled = !1),
              (e.prototype.is_cooldown_active = !1),
              (e.prototype.soft_limit_bytes = 0),
              (e.prototype.cooldown_minutes = 0),
              (e.prototype.cooldown_start_time = null),
              (e.prototype.data_after_cooldown_bytes = 0),
              (e.prototype.test_group_id = 0),
              (e.prototype.bandwidth_status = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.last_24_hours && e.last_24_hours.length)
                )
                  for (var n = 0; n < e.last_24_hours.length; ++n)
                    f.proto.api.KeyValue.encode(e.last_24_hours[n], t.uint32(18).fork()).ldelim();
                return (
                  null != e.is_cooldown_feature_enabled &&
                    Object.hasOwnProperty.call(e, "is_cooldown_feature_enabled") &&
                    t.uint32(24).bool(e.is_cooldown_feature_enabled),
                  null != e.is_cooldown_active &&
                    Object.hasOwnProperty.call(e, "is_cooldown_active") &&
                    t.uint32(32).bool(e.is_cooldown_active),
                  null != e.soft_limit_bytes &&
                    Object.hasOwnProperty.call(e, "soft_limit_bytes") &&
                    t.uint32(40).uint64(e.soft_limit_bytes),
                  null != e.cooldown_minutes &&
                    Object.hasOwnProperty.call(e, "cooldown_minutes") &&
                    t.uint32(48).uint32(e.cooldown_minutes),
                  null != e.cooldown_start_time &&
                    Object.hasOwnProperty.call(e, "cooldown_start_time") &&
                    f.proto.api.Timestamp.encode(e.cooldown_start_time, t.uint32(58).fork()).ldelim(),
                  null != e.data_after_cooldown_bytes &&
                    Object.hasOwnProperty.call(e, "data_after_cooldown_bytes") &&
                    t.uint32(64).uint64(e.data_after_cooldown_bytes),
                  null != e.test_group_id && Object.hasOwnProperty.call(e, "test_group_id") && t.uint32(72).uint32(e.test_group_id),
                  null != e.bandwidth_status &&
                    Object.hasOwnProperty.call(e, "bandwidth_status") &&
                    f.proto.api.BandwidthStatus.encode(e.bandwidth_status, t.uint32(82).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Bandwidth(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      (r.last_24_hours && r.last_24_hours.length) || (r.last_24_hours = []),
                        r.last_24_hours.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                      break;
                    case 3:
                      r.is_cooldown_feature_enabled = e.bool();
                      break;
                    case 4:
                      r.is_cooldown_active = e.bool();
                      break;
                    case 5:
                      r.soft_limit_bytes = e.uint64();
                      break;
                    case 6:
                      r.cooldown_minutes = e.uint32();
                      break;
                    case 7:
                      r.cooldown_start_time = f.proto.api.Timestamp.decode(e, e.uint32());
                      break;
                    case 8:
                      r.data_after_cooldown_bytes = e.uint64();
                      break;
                    case 9:
                      r.test_group_id = e.uint32();
                      break;
                    case 10:
                      r.bandwidth_status = f.proto.api.BandwidthStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if ((n = f.proto.api.ResponseStatus.verify(e.ResponseStatus))) return "ResponseStatus." + n;
                if (null != e.last_24_hours && e.hasOwnProperty("last_24_hours")) {
                  if (!Array.isArray(e.last_24_hours)) return "last_24_hours: array expected";
                  for (var t = 0; t < e.last_24_hours.length; ++t) {
                    var n;
                    if ((n = f.proto.api.KeyValue.verify(e.last_24_hours[t]))) return "last_24_hours." + n;
                  }
                }
                return null != e.is_cooldown_feature_enabled &&
                  e.hasOwnProperty("is_cooldown_feature_enabled") &&
                  "boolean" != typeof e.is_cooldown_feature_enabled
                  ? "is_cooldown_feature_enabled: boolean expected"
                  : null != e.is_cooldown_active && e.hasOwnProperty("is_cooldown_active") && "boolean" != typeof e.is_cooldown_active
                  ? "is_cooldown_active: boolean expected"
                  : null != e.soft_limit_bytes &&
                    e.hasOwnProperty("soft_limit_bytes") &&
                    !(
                      l.isInteger(e.soft_limit_bytes) ||
                      (e.soft_limit_bytes && l.isInteger(e.soft_limit_bytes.low) && l.isInteger(e.soft_limit_bytes.high))
                    )
                  ? "soft_limit_bytes: integer|Long expected"
                  : null != e.cooldown_minutes && e.hasOwnProperty("cooldown_minutes") && !l.isInteger(e.cooldown_minutes)
                  ? "cooldown_minutes: integer expected"
                  : null != e.cooldown_start_time &&
                    e.hasOwnProperty("cooldown_start_time") &&
                    (n = f.proto.api.Timestamp.verify(e.cooldown_start_time))
                  ? "cooldown_start_time." + n
                  : null != e.data_after_cooldown_bytes &&
                    e.hasOwnProperty("data_after_cooldown_bytes") &&
                    !(
                      l.isInteger(e.data_after_cooldown_bytes) ||
                      (e.data_after_cooldown_bytes &&
                        l.isInteger(e.data_after_cooldown_bytes.low) &&
                        l.isInteger(e.data_after_cooldown_bytes.high))
                    )
                  ? "data_after_cooldown_bytes: integer|Long expected"
                  : null != e.test_group_id && e.hasOwnProperty("test_group_id") && !l.isInteger(e.test_group_id)
                  ? "test_group_id: integer expected"
                  : null != e.bandwidth_status &&
                    e.hasOwnProperty("bandwidth_status") &&
                    (n = f.proto.api.BandwidthStatus.verify(e.bandwidth_status))
                  ? "bandwidth_status." + n
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Bandwidth) return e;
                var t = new f.proto.api.response.Bandwidth();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Bandwidth.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (e.last_24_hours) {
                  if (!Array.isArray(e.last_24_hours)) throw TypeError(".proto.api.response.Bandwidth.last_24_hours: array expected");
                  t.last_24_hours = [];
                  for (var n = 0; n < e.last_24_hours.length; ++n) {
                    if ("object" != typeof e.last_24_hours[n])
                      throw TypeError(".proto.api.response.Bandwidth.last_24_hours: object expected");
                    t.last_24_hours[n] = f.proto.api.KeyValue.fromObject(e.last_24_hours[n]);
                  }
                }
                if (
                  (null != e.is_cooldown_feature_enabled && (t.is_cooldown_feature_enabled = Boolean(e.is_cooldown_feature_enabled)),
                  null != e.is_cooldown_active && (t.is_cooldown_active = Boolean(e.is_cooldown_active)),
                  null != e.soft_limit_bytes &&
                    (l.Long
                      ? ((t.soft_limit_bytes = l.Long.fromValue(e.soft_limit_bytes)).unsigned = !0)
                      : "string" == typeof e.soft_limit_bytes
                      ? (t.soft_limit_bytes = parseInt(e.soft_limit_bytes, 10))
                      : "number" == typeof e.soft_limit_bytes
                      ? (t.soft_limit_bytes = e.soft_limit_bytes)
                      : "object" == typeof e.soft_limit_bytes &&
                        (t.soft_limit_bytes = new l.LongBits(e.soft_limit_bytes.low >>> 0, e.soft_limit_bytes.high >>> 0).toNumber(!0))),
                  null != e.cooldown_minutes && (t.cooldown_minutes = e.cooldown_minutes >>> 0),
                  null != e.cooldown_start_time)
                ) {
                  if ("object" != typeof e.cooldown_start_time)
                    throw TypeError(".proto.api.response.Bandwidth.cooldown_start_time: object expected");
                  t.cooldown_start_time = f.proto.api.Timestamp.fromObject(e.cooldown_start_time);
                }
                if (
                  (null != e.data_after_cooldown_bytes &&
                    (l.Long
                      ? ((t.data_after_cooldown_bytes = l.Long.fromValue(e.data_after_cooldown_bytes)).unsigned = !0)
                      : "string" == typeof e.data_after_cooldown_bytes
                      ? (t.data_after_cooldown_bytes = parseInt(e.data_after_cooldown_bytes, 10))
                      : "number" == typeof e.data_after_cooldown_bytes
                      ? (t.data_after_cooldown_bytes = e.data_after_cooldown_bytes)
                      : "object" == typeof e.data_after_cooldown_bytes &&
                        (t.data_after_cooldown_bytes = new l.LongBits(
                          e.data_after_cooldown_bytes.low >>> 0,
                          e.data_after_cooldown_bytes.high >>> 0
                        ).toNumber(!0))),
                  null != e.test_group_id && (t.test_group_id = e.test_group_id >>> 0),
                  null != e.bandwidth_status)
                ) {
                  if ("object" != typeof e.bandwidth_status)
                    throw TypeError(".proto.api.response.Bandwidth.bandwidth_status: object expected");
                  t.bandwidth_status = f.proto.api.BandwidthStatus.fromObject(e.bandwidth_status);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && (n.last_24_hours = []),
                  t.defaults &&
                    ((n.ResponseStatus = null),
                    (n.is_cooldown_feature_enabled = !1),
                    (n.is_cooldown_active = !1),
                    (n.soft_limit_bytes = 0),
                    (n.cooldown_minutes = 0),
                    (n.cooldown_start_time = null),
                    (n.data_after_cooldown_bytes = 0),
                    (n.test_group_id = 0),
                    (n.bandwidth_status = null)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  e.last_24_hours && e.last_24_hours.length)
                ) {
                  n.last_24_hours = [];
                  for (var r = 0; r < e.last_24_hours.length; ++r)
                    n.last_24_hours[r] = f.proto.api.KeyValue.toObject(e.last_24_hours[r], t);
                }
                return (
                  null != e.is_cooldown_feature_enabled &&
                    e.hasOwnProperty("is_cooldown_feature_enabled") &&
                    (n.is_cooldown_feature_enabled = e.is_cooldown_feature_enabled),
                  null != e.is_cooldown_active && e.hasOwnProperty("is_cooldown_active") && (n.is_cooldown_active = e.is_cooldown_active),
                  null != e.soft_limit_bytes &&
                    e.hasOwnProperty("soft_limit_bytes") &&
                    ("number" == typeof e.soft_limit_bytes
                      ? (n.soft_limit_bytes = t.longs === String ? String(e.soft_limit_bytes) : e.soft_limit_bytes)
                      : (n.soft_limit_bytes =
                          t.longs === String
                            ? l.Long.prototype.toString.call(e.soft_limit_bytes)
                            : t.longs === Number
                            ? new l.LongBits(e.soft_limit_bytes.low >>> 0, e.soft_limit_bytes.high >>> 0).toNumber(!0)
                            : e.soft_limit_bytes)),
                  null != e.cooldown_minutes && e.hasOwnProperty("cooldown_minutes") && (n.cooldown_minutes = e.cooldown_minutes),
                  null != e.cooldown_start_time &&
                    e.hasOwnProperty("cooldown_start_time") &&
                    (n.cooldown_start_time = f.proto.api.Timestamp.toObject(e.cooldown_start_time, t)),
                  null != e.data_after_cooldown_bytes &&
                    e.hasOwnProperty("data_after_cooldown_bytes") &&
                    ("number" == typeof e.data_after_cooldown_bytes
                      ? (n.data_after_cooldown_bytes =
                          t.longs === String ? String(e.data_after_cooldown_bytes) : e.data_after_cooldown_bytes)
                      : (n.data_after_cooldown_bytes =
                          t.longs === String
                            ? l.Long.prototype.toString.call(e.data_after_cooldown_bytes)
                            : t.longs === Number
                            ? new l.LongBits(e.data_after_cooldown_bytes.low >>> 0, e.data_after_cooldown_bytes.high >>> 0).toNumber(!0)
                            : e.data_after_cooldown_bytes)),
                  null != e.test_group_id && e.hasOwnProperty("test_group_id") && (n.test_group_id = e.test_group_id),
                  null != e.bandwidth_status &&
                    e.hasOwnProperty("bandwidth_status") &&
                    (n.bandwidth_status = f.proto.api.BandwidthStatus.toObject(e.bandwidth_status, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.BandwidthLimitReached = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.cooldown = null),
              (e.prototype.bandwidth_status = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.cooldown &&
                    Object.hasOwnProperty.call(e, "cooldown") &&
                    f.proto.api.BandwidthCooldown.encode(e.cooldown, t.uint32(18).fork()).ldelim(),
                  null != e.bandwidth_status &&
                    Object.hasOwnProperty.call(e, "bandwidth_status") &&
                    f.proto.api.BandwidthStatus.encode(e.bandwidth_status, t.uint32(26).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.BandwidthLimitReached(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.cooldown = f.proto.api.BandwidthCooldown.decode(e, e.uint32());
                      break;
                    case 3:
                      r.bandwidth_status = f.proto.api.BandwidthStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.cooldown && e.hasOwnProperty("cooldown") && (t = f.proto.api.BandwidthCooldown.verify(e.cooldown))
                  ? "cooldown." + t
                  : null != e.bandwidth_status &&
                    e.hasOwnProperty("bandwidth_status") &&
                    (t = f.proto.api.BandwidthStatus.verify(e.bandwidth_status))
                  ? "bandwidth_status." + t
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.BandwidthLimitReached) return e;
                var t = new f.proto.api.response.BandwidthLimitReached();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.BandwidthLimitReached.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.cooldown) {
                  if ("object" != typeof e.cooldown) throw TypeError(".proto.api.response.BandwidthLimitReached.cooldown: object expected");
                  t.cooldown = f.proto.api.BandwidthCooldown.fromObject(e.cooldown);
                }
                if (null != e.bandwidth_status) {
                  if ("object" != typeof e.bandwidth_status)
                    throw TypeError(".proto.api.response.BandwidthLimitReached.bandwidth_status: object expected");
                  t.bandwidth_status = f.proto.api.BandwidthStatus.fromObject(e.bandwidth_status);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.cooldown = null), (n.bandwidth_status = null)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.cooldown &&
                    e.hasOwnProperty("cooldown") &&
                    (n.cooldown = f.proto.api.BandwidthCooldown.toObject(e.cooldown, t)),
                  null != e.bandwidth_status &&
                    e.hasOwnProperty("bandwidth_status") &&
                    (n.bandwidth_status = f.proto.api.BandwidthStatus.toObject(e.bandwidth_status, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.BNCrf = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.BNCrf(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.BNCrf) return e;
                var t = new f.proto.api.response.BNCrf();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.BNCrf.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.BNLink = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t, n;
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.link_status = 202),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.link_status && Object.hasOwnProperty.call(e, "link_status") && t.uint32(16).int32(e.link_status),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.BNLink(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.link_status = e.int32();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                if (t) return "ResponseStatus." + t;
                if (null != e.link_status && e.hasOwnProperty("link_status"))
                  switch (e.link_status) {
                    default:
                      return "link_status: enum value expected";
                    case 202:
                    case 204:
                    case 400:
                    case 409:
                    case 423:
                  }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.BNLink) return e;
                var t = new f.proto.api.response.BNLink();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.BNLink.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                switch (e.link_status) {
                  case "ACCEPTED":
                  case 202:
                    t.link_status = 202;
                    break;
                  case "NO_CONTENT":
                  case 204:
                    t.link_status = 204;
                    break;
                  case "BAD_REQUEST":
                  case 400:
                    t.link_status = 400;
                    break;
                  case "CONFLICT":
                  case 409:
                    t.link_status = 409;
                    break;
                  case "LOCKED":
                  case 423:
                    t.link_status = 423;
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.link_status = t.enums === String ? "ACCEPTED" : 202)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.link_status &&
                    e.hasOwnProperty("link_status") &&
                    (n.link_status = t.enums === String ? f.proto.api.response.BNLink.LinkStatus[e.link_status] : e.link_status),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.LinkStatus =
                ((t = {}),
                ((n = Object.create(t))[(t[202] = "ACCEPTED")] = 202),
                (n[(t[204] = "NO_CONTENT")] = 204),
                (n[(t[400] = "BAD_REQUEST")] = 400),
                (n[(t[409] = "CONFLICT")] = 409),
                (n[(t[423] = "LOCKED")] = 423),
                n)),
              e
            );
          })()),
          (o.BraintreeToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.BraintreeToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t
                  ? "ResponseStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.BraintreeToken) return e;
                var t = new f.proto.api.response.BraintreeToken();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.BraintreeToken.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.ClientNotificationAcknowledge = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ClientNotificationAcknowledge(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.ClientNotificationAcknowledge) return e;
                var t = new f.proto.api.response.ClientNotificationAcknowledge();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.ClientNotificationAcknowledge.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Config = (function () {
            function e(e) {
              if (((this.Products = []), (this.sdk_blacklist = []), (this.webkit_triggers = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.PaymentPopupGeneral = null),
              (e.prototype.PaymentPopupOptin = null),
              (e.prototype.ConfigIos = null),
              (e.prototype.ConfigAndroid = null),
              (e.prototype.ConfigWindows = null),
              (e.prototype.Products = l.emptyArray),
              (e.prototype.Server = ""),
              (e.prototype.credit_card_config = null),
              (e.prototype.gpr_config = null),
              (e.prototype.app_rate_config = null),
              (e.prototype.vpn_sdk_config = null),
              (e.prototype.sdk_blacklist = l.emptyArray),
              (e.prototype.chat_url = ""),
              (e.prototype.webkit_triggers = l.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.PaymentPopupGeneral &&
                    Object.hasOwnProperty.call(e, "PaymentPopupGeneral") &&
                    f.proto.api.response.Config.PaymentPopup.encode(e.PaymentPopupGeneral, t.uint32(18).fork()).ldelim(),
                  null != e.PaymentPopupOptin &&
                    Object.hasOwnProperty.call(e, "PaymentPopupOptin") &&
                    f.proto.api.response.Config.PaymentPopup.encode(e.PaymentPopupOptin, t.uint32(26).fork()).ldelim(),
                  null != e.ConfigIos &&
                    Object.hasOwnProperty.call(e, "ConfigIos") &&
                    f.proto.api.response.ConfigIos.encode(e.ConfigIos, t.uint32(34).fork()).ldelim(),
                  null != e.ConfigAndroid &&
                    Object.hasOwnProperty.call(e, "ConfigAndroid") &&
                    f.proto.api.response.ConfigAndroid.encode(e.ConfigAndroid, t.uint32(42).fork()).ldelim(),
                  null != e.ConfigWindows &&
                    Object.hasOwnProperty.call(e, "ConfigWindows") &&
                    f.proto.api.response.ConfigWindows.encode(e.ConfigWindows, t.uint32(50).fork()).ldelim(),
                  null != e.Products && e.Products.length)
                )
                  for (var n = 0; n < e.Products.length; ++n)
                    f.proto.api.response.Config.Product.encode(e.Products[n], t.uint32(58).fork()).ldelim();
                if (
                  (null != e.Server && Object.hasOwnProperty.call(e, "Server") && t.uint32(66).string(e.Server),
                  null != e.credit_card_config &&
                    Object.hasOwnProperty.call(e, "credit_card_config") &&
                    f.proto.api.response.Config.CreditCardConfig.encode(e.credit_card_config, t.uint32(74).fork()).ldelim(),
                  null != e.gpr_config &&
                    Object.hasOwnProperty.call(e, "gpr_config") &&
                    f.proto.api.response.Config.GPRConfig.encode(e.gpr_config, t.uint32(82).fork()).ldelim(),
                  null != e.app_rate_config &&
                    Object.hasOwnProperty.call(e, "app_rate_config") &&
                    f.proto.api.response.Config.AppRateConfig.encode(e.app_rate_config, t.uint32(90).fork()).ldelim(),
                  null != e.vpn_sdk_config &&
                    Object.hasOwnProperty.call(e, "vpn_sdk_config") &&
                    f.proto.api.response.Config.VpnSdkConfig.encode(e.vpn_sdk_config, t.uint32(98).fork()).ldelim(),
                  null != e.sdk_blacklist && e.sdk_blacklist.length)
                )
                  for (n = 0; n < e.sdk_blacklist.length; ++n) t.uint32(106).string(e.sdk_blacklist[n]);
                if (
                  (null != e.chat_url && Object.hasOwnProperty.call(e, "chat_url") && t.uint32(114).string(e.chat_url),
                  null != e.webkit_triggers && e.webkit_triggers.length)
                )
                  for (n = 0; n < e.webkit_triggers.length; ++n)
                    f.proto.api.WebkitTrigger.encode(e.webkit_triggers[n], t.uint32(122).fork()).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.PaymentPopupGeneral = f.proto.api.response.Config.PaymentPopup.decode(e, e.uint32());
                      break;
                    case 3:
                      r.PaymentPopupOptin = f.proto.api.response.Config.PaymentPopup.decode(e, e.uint32());
                      break;
                    case 4:
                      r.ConfigIos = f.proto.api.response.ConfigIos.decode(e, e.uint32());
                      break;
                    case 5:
                      r.ConfigAndroid = f.proto.api.response.ConfigAndroid.decode(e, e.uint32());
                      break;
                    case 6:
                      r.ConfigWindows = f.proto.api.response.ConfigWindows.decode(e, e.uint32());
                      break;
                    case 7:
                      (r.Products && r.Products.length) || (r.Products = []),
                        r.Products.push(f.proto.api.response.Config.Product.decode(e, e.uint32()));
                      break;
                    case 8:
                      r.Server = e.string();
                      break;
                    case 9:
                      r.credit_card_config = f.proto.api.response.Config.CreditCardConfig.decode(e, e.uint32());
                      break;
                    case 10:
                      r.gpr_config = f.proto.api.response.Config.GPRConfig.decode(e, e.uint32());
                      break;
                    case 11:
                      r.app_rate_config = f.proto.api.response.Config.AppRateConfig.decode(e, e.uint32());
                      break;
                    case 12:
                      r.vpn_sdk_config = f.proto.api.response.Config.VpnSdkConfig.decode(e, e.uint32());
                      break;
                    case 13:
                      (r.sdk_blacklist && r.sdk_blacklist.length) || (r.sdk_blacklist = []), r.sdk_blacklist.push(e.string());
                      break;
                    case 14:
                      r.chat_url = e.string();
                      break;
                    case 15:
                      (r.webkit_triggers && r.webkit_triggers.length) || (r.webkit_triggers = []),
                        r.webkit_triggers.push(f.proto.api.WebkitTrigger.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if ((n = f.proto.api.ResponseStatus.verify(e.ResponseStatus))) return "ResponseStatus." + n;
                if (
                  null != e.PaymentPopupGeneral &&
                  e.hasOwnProperty("PaymentPopupGeneral") &&
                  (n = f.proto.api.response.Config.PaymentPopup.verify(e.PaymentPopupGeneral))
                )
                  return "PaymentPopupGeneral." + n;
                if (
                  null != e.PaymentPopupOptin &&
                  e.hasOwnProperty("PaymentPopupOptin") &&
                  (n = f.proto.api.response.Config.PaymentPopup.verify(e.PaymentPopupOptin))
                )
                  return "PaymentPopupOptin." + n;
                if (null != e.ConfigIos && e.hasOwnProperty("ConfigIos") && (n = f.proto.api.response.ConfigIos.verify(e.ConfigIos)))
                  return "ConfigIos." + n;
                if (
                  null != e.ConfigAndroid &&
                  e.hasOwnProperty("ConfigAndroid") &&
                  (n = f.proto.api.response.ConfigAndroid.verify(e.ConfigAndroid))
                )
                  return "ConfigAndroid." + n;
                if (
                  null != e.ConfigWindows &&
                  e.hasOwnProperty("ConfigWindows") &&
                  (n = f.proto.api.response.ConfigWindows.verify(e.ConfigWindows))
                )
                  return "ConfigWindows." + n;
                if (null != e.Products && e.hasOwnProperty("Products")) {
                  if (!Array.isArray(e.Products)) return "Products: array expected";
                  for (var t = 0; t < e.Products.length; ++t)
                    if ((n = f.proto.api.response.Config.Product.verify(e.Products[t]))) return "Products." + n;
                }
                if (null != e.Server && e.hasOwnProperty("Server") && !l.isString(e.Server)) return "Server: string expected";
                if (
                  null != e.credit_card_config &&
                  e.hasOwnProperty("credit_card_config") &&
                  (n = f.proto.api.response.Config.CreditCardConfig.verify(e.credit_card_config))
                )
                  return "credit_card_config." + n;
                if (
                  null != e.gpr_config &&
                  e.hasOwnProperty("gpr_config") &&
                  (n = f.proto.api.response.Config.GPRConfig.verify(e.gpr_config))
                )
                  return "gpr_config." + n;
                if (
                  null != e.app_rate_config &&
                  e.hasOwnProperty("app_rate_config") &&
                  (n = f.proto.api.response.Config.AppRateConfig.verify(e.app_rate_config))
                )
                  return "app_rate_config." + n;
                if (
                  null != e.vpn_sdk_config &&
                  e.hasOwnProperty("vpn_sdk_config") &&
                  (n = f.proto.api.response.Config.VpnSdkConfig.verify(e.vpn_sdk_config))
                )
                  return "vpn_sdk_config." + n;
                if (null != e.sdk_blacklist && e.hasOwnProperty("sdk_blacklist")) {
                  if (!Array.isArray(e.sdk_blacklist)) return "sdk_blacklist: array expected";
                  for (t = 0; t < e.sdk_blacklist.length; ++t)
                    if (!l.isString(e.sdk_blacklist[t])) return "sdk_blacklist: string[] expected";
                }
                if (null != e.chat_url && e.hasOwnProperty("chat_url") && !l.isString(e.chat_url)) return "chat_url: string expected";
                if (null != e.webkit_triggers && e.hasOwnProperty("webkit_triggers")) {
                  if (!Array.isArray(e.webkit_triggers)) return "webkit_triggers: array expected";
                  for (t = 0; t < e.webkit_triggers.length; ++t) {
                    var n;
                    if ((n = f.proto.api.WebkitTrigger.verify(e.webkit_triggers[t]))) return "webkit_triggers." + n;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Config) return e;
                var t = new f.proto.api.response.Config();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Config.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.PaymentPopupGeneral) {
                  if ("object" != typeof e.PaymentPopupGeneral)
                    throw TypeError(".proto.api.response.Config.PaymentPopupGeneral: object expected");
                  t.PaymentPopupGeneral = f.proto.api.response.Config.PaymentPopup.fromObject(e.PaymentPopupGeneral);
                }
                if (null != e.PaymentPopupOptin) {
                  if ("object" != typeof e.PaymentPopupOptin)
                    throw TypeError(".proto.api.response.Config.PaymentPopupOptin: object expected");
                  t.PaymentPopupOptin = f.proto.api.response.Config.PaymentPopup.fromObject(e.PaymentPopupOptin);
                }
                if (null != e.ConfigIos) {
                  if ("object" != typeof e.ConfigIos) throw TypeError(".proto.api.response.Config.ConfigIos: object expected");
                  t.ConfigIos = f.proto.api.response.ConfigIos.fromObject(e.ConfigIos);
                }
                if (null != e.ConfigAndroid) {
                  if ("object" != typeof e.ConfigAndroid) throw TypeError(".proto.api.response.Config.ConfigAndroid: object expected");
                  t.ConfigAndroid = f.proto.api.response.ConfigAndroid.fromObject(e.ConfigAndroid);
                }
                if (null != e.ConfigWindows) {
                  if ("object" != typeof e.ConfigWindows) throw TypeError(".proto.api.response.Config.ConfigWindows: object expected");
                  t.ConfigWindows = f.proto.api.response.ConfigWindows.fromObject(e.ConfigWindows);
                }
                if (e.Products) {
                  if (!Array.isArray(e.Products)) throw TypeError(".proto.api.response.Config.Products: array expected");
                  t.Products = [];
                  for (var n = 0; n < e.Products.length; ++n) {
                    if ("object" != typeof e.Products[n]) throw TypeError(".proto.api.response.Config.Products: object expected");
                    t.Products[n] = f.proto.api.response.Config.Product.fromObject(e.Products[n]);
                  }
                }
                if ((null != e.Server && (t.Server = String(e.Server)), null != e.credit_card_config)) {
                  if ("object" != typeof e.credit_card_config)
                    throw TypeError(".proto.api.response.Config.credit_card_config: object expected");
                  t.credit_card_config = f.proto.api.response.Config.CreditCardConfig.fromObject(e.credit_card_config);
                }
                if (null != e.gpr_config) {
                  if ("object" != typeof e.gpr_config) throw TypeError(".proto.api.response.Config.gpr_config: object expected");
                  t.gpr_config = f.proto.api.response.Config.GPRConfig.fromObject(e.gpr_config);
                }
                if (null != e.app_rate_config) {
                  if ("object" != typeof e.app_rate_config) throw TypeError(".proto.api.response.Config.app_rate_config: object expected");
                  t.app_rate_config = f.proto.api.response.Config.AppRateConfig.fromObject(e.app_rate_config);
                }
                if (null != e.vpn_sdk_config) {
                  if ("object" != typeof e.vpn_sdk_config) throw TypeError(".proto.api.response.Config.vpn_sdk_config: object expected");
                  t.vpn_sdk_config = f.proto.api.response.Config.VpnSdkConfig.fromObject(e.vpn_sdk_config);
                }
                if (e.sdk_blacklist) {
                  if (!Array.isArray(e.sdk_blacklist)) throw TypeError(".proto.api.response.Config.sdk_blacklist: array expected");
                  for (t.sdk_blacklist = [], n = 0; n < e.sdk_blacklist.length; ++n) t.sdk_blacklist[n] = String(e.sdk_blacklist[n]);
                }
                if ((null != e.chat_url && (t.chat_url = String(e.chat_url)), e.webkit_triggers)) {
                  if (!Array.isArray(e.webkit_triggers)) throw TypeError(".proto.api.response.Config.webkit_triggers: array expected");
                  for (t.webkit_triggers = [], n = 0; n < e.webkit_triggers.length; ++n) {
                    if ("object" != typeof e.webkit_triggers[n])
                      throw TypeError(".proto.api.response.Config.webkit_triggers: object expected");
                    t.webkit_triggers[n] = f.proto.api.WebkitTrigger.fromObject(e.webkit_triggers[n]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && ((n.Products = []), (n.sdk_blacklist = []), (n.webkit_triggers = [])),
                  t.defaults &&
                    ((n.ResponseStatus = null),
                    (n.PaymentPopupGeneral = null),
                    (n.PaymentPopupOptin = null),
                    (n.ConfigIos = null),
                    (n.ConfigAndroid = null),
                    (n.ConfigWindows = null),
                    (n.Server = ""),
                    (n.credit_card_config = null),
                    (n.gpr_config = null),
                    (n.app_rate_config = null),
                    (n.vpn_sdk_config = null),
                    (n.chat_url = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.PaymentPopupGeneral &&
                    e.hasOwnProperty("PaymentPopupGeneral") &&
                    (n.PaymentPopupGeneral = f.proto.api.response.Config.PaymentPopup.toObject(e.PaymentPopupGeneral, t)),
                  null != e.PaymentPopupOptin &&
                    e.hasOwnProperty("PaymentPopupOptin") &&
                    (n.PaymentPopupOptin = f.proto.api.response.Config.PaymentPopup.toObject(e.PaymentPopupOptin, t)),
                  null != e.ConfigIos &&
                    e.hasOwnProperty("ConfigIos") &&
                    (n.ConfigIos = f.proto.api.response.ConfigIos.toObject(e.ConfigIos, t)),
                  null != e.ConfigAndroid &&
                    e.hasOwnProperty("ConfigAndroid") &&
                    (n.ConfigAndroid = f.proto.api.response.ConfigAndroid.toObject(e.ConfigAndroid, t)),
                  null != e.ConfigWindows &&
                    e.hasOwnProperty("ConfigWindows") &&
                    (n.ConfigWindows = f.proto.api.response.ConfigWindows.toObject(e.ConfigWindows, t)),
                  e.Products && e.Products.length)
                ) {
                  n.Products = [];
                  for (var r = 0; r < e.Products.length; ++r)
                    n.Products[r] = f.proto.api.response.Config.Product.toObject(e.Products[r], t);
                }
                if (
                  (null != e.Server && e.hasOwnProperty("Server") && (n.Server = e.Server),
                  null != e.credit_card_config &&
                    e.hasOwnProperty("credit_card_config") &&
                    (n.credit_card_config = f.proto.api.response.Config.CreditCardConfig.toObject(e.credit_card_config, t)),
                  null != e.gpr_config &&
                    e.hasOwnProperty("gpr_config") &&
                    (n.gpr_config = f.proto.api.response.Config.GPRConfig.toObject(e.gpr_config, t)),
                  null != e.app_rate_config &&
                    e.hasOwnProperty("app_rate_config") &&
                    (n.app_rate_config = f.proto.api.response.Config.AppRateConfig.toObject(e.app_rate_config, t)),
                  null != e.vpn_sdk_config &&
                    e.hasOwnProperty("vpn_sdk_config") &&
                    (n.vpn_sdk_config = f.proto.api.response.Config.VpnSdkConfig.toObject(e.vpn_sdk_config, t)),
                  e.sdk_blacklist && e.sdk_blacklist.length)
                )
                  for (n.sdk_blacklist = [], r = 0; r < e.sdk_blacklist.length; ++r) n.sdk_blacklist[r] = e.sdk_blacklist[r];
                if (
                  (null != e.chat_url && e.hasOwnProperty("chat_url") && (n.chat_url = e.chat_url),
                  e.webkit_triggers && e.webkit_triggers.length)
                )
                  for (n.webkit_triggers = [], r = 0; r < e.webkit_triggers.length; ++r)
                    n.webkit_triggers[r] = f.proto.api.WebkitTrigger.toObject(e.webkit_triggers[r], t);
                return n;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.PaymentPopup = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                var t, n;
                return (
                  (e.prototype.url = ""),
                  (e.prototype.width = 0),
                  (e.prototype.height = 0),
                  (e.prototype.corners_radius = 0),
                  (e.prototype.type = 1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      t.uint32(10).string(e.url),
                      t.uint32(16).uint32(e.width),
                      t.uint32(24).uint32(e.height),
                      t.uint32(32).uint32(e.corners_radius),
                      t.uint32(40).int32(e.type),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.PaymentPopup(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.url = e.string();
                          break;
                        case 2:
                          r.width = e.uint32();
                          break;
                        case 3:
                          r.height = e.uint32();
                          break;
                        case 4:
                          r.corners_radius = e.uint32();
                          break;
                        case 5:
                          r.type = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    if (!r.hasOwnProperty("url")) throw l.ProtocolError("missing required 'url'", { instance: r });
                    if (!r.hasOwnProperty("width")) throw l.ProtocolError("missing required 'width'", { instance: r });
                    if (!r.hasOwnProperty("height")) throw l.ProtocolError("missing required 'height'", { instance: r });
                    if (!r.hasOwnProperty("corners_radius")) throw l.ProtocolError("missing required 'corners_radius'", { instance: r });
                    if (!r.hasOwnProperty("type")) throw l.ProtocolError("missing required 'type'", { instance: r });
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!l.isString(e.url)) return "url: string expected";
                    if (!l.isInteger(e.width)) return "width: integer expected";
                    if (!l.isInteger(e.height)) return "height: integer expected";
                    if (!l.isInteger(e.corners_radius)) return "corners_radius: integer expected";
                    switch (e.type) {
                      default:
                        return "type: enum value expected";
                      case 1:
                      case 2:
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.PaymentPopup) return e;
                    var t = new f.proto.api.response.Config.PaymentPopup();
                    switch (
                      (null != e.url && (t.url = String(e.url)),
                      null != e.width && (t.width = e.width >>> 0),
                      null != e.height && (t.height = e.height >>> 0),
                      null != e.corners_radius && (t.corners_radius = e.corners_radius >>> 0),
                      e.type)
                    ) {
                      case "POPUP":
                      case 1:
                        t.type = 1;
                        break;
                      case "PAGE":
                      case 2:
                        t.type = 2;
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults &&
                        ((n.url = ""), (n.width = 0), (n.height = 0), (n.corners_radius = 0), (n.type = t.enums === String ? "POPUP" : 1)),
                      null != e.url && e.hasOwnProperty("url") && (n.url = e.url),
                      null != e.width && e.hasOwnProperty("width") && (n.width = e.width),
                      null != e.height && e.hasOwnProperty("height") && (n.height = e.height),
                      null != e.corners_radius && e.hasOwnProperty("corners_radius") && (n.corners_radius = e.corners_radius),
                      null != e.type &&
                        e.hasOwnProperty("type") &&
                        (n.type = t.enums === String ? f.proto.api.response.Config.PaymentPopup.Type[e.type] : e.type),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  (e.Type = ((t = {}), ((n = Object.create(t))[(t[1] = "POPUP")] = 1), (n[(t[2] = "PAGE")] = 2), n)),
                  e
                );
              })()),
              (e.Product = (function () {
                function e(e) {
                  if (((this.Screens = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                var t, n;
                return (
                  (e.prototype.Id = ""),
                  (e.prototype.BatchId = 0),
                  (e.prototype.VendorId = 0),
                  (e.prototype.Type = 1),
                  (e.prototype.Order = 0),
                  (e.prototype.payment_type = 1),
                  (e.prototype.VendorPlanId = 0),
                  (e.prototype.duration_unit = 1),
                  (e.prototype.DurationUnitsNum = 0),
                  (e.prototype.Currency = ""),
                  (e.prototype.PriceTotal = ""),
                  (e.prototype.PricePerMonth = ""),
                  (e.prototype.PriceTotalRaw = ""),
                  (e.prototype.PricePerMonthRaw = ""),
                  (e.prototype.SavePercent = ""),
                  (e.prototype.DiscountPercent = ""),
                  (e.prototype.OldPriceTotal = ""),
                  (e.prototype.OldPriceTotalRaw = ""),
                  (e.prototype.OldPricePerMonth = ""),
                  (e.prototype.OldPricePerMonthRaw = ""),
                  (e.prototype.Title = ""),
                  (e.prototype.Description = ""),
                  (e.prototype.IsOptinTrial = !1),
                  (e.prototype.OptinTrialDurationUnit = 1),
                  (e.prototype.OptinTrialDurationUnitsNum = 0),
                  (e.prototype.IsMostPopular = !1),
                  (e.prototype.IsBestPrice = !1),
                  (e.prototype.LinkToWeb = ""),
                  (e.prototype.Screens = l.emptyArray),
                  (e.prototype.JsonCustomParams = ""),
                  (e.prototype.IsUniqueOffer = !1),
                  (e.prototype.DurationName = ""),
                  (e.prototype.DurationDays = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = p.create()),
                      t.uint32(10).string(e.Id),
                      t.uint32(16).uint32(e.BatchId),
                      t.uint32(24).uint32(e.VendorId),
                      t.uint32(32).int32(e.Type),
                      t.uint32(40).uint32(e.Order),
                      t.uint32(48).int32(e.payment_type),
                      null != e.VendorPlanId && Object.hasOwnProperty.call(e, "VendorPlanId") && t.uint32(56).uint32(e.VendorPlanId),
                      null != e.duration_unit && Object.hasOwnProperty.call(e, "duration_unit") && t.uint32(64).int32(e.duration_unit),
                      null != e.DurationUnitsNum &&
                        Object.hasOwnProperty.call(e, "DurationUnitsNum") &&
                        t.uint32(72).uint32(e.DurationUnitsNum),
                      null != e.Currency && Object.hasOwnProperty.call(e, "Currency") && t.uint32(82).string(e.Currency),
                      null != e.PriceTotal && Object.hasOwnProperty.call(e, "PriceTotal") && t.uint32(90).string(e.PriceTotal),
                      null != e.PricePerMonth && Object.hasOwnProperty.call(e, "PricePerMonth") && t.uint32(98).string(e.PricePerMonth),
                      null != e.PriceTotalRaw && Object.hasOwnProperty.call(e, "PriceTotalRaw") && t.uint32(106).string(e.PriceTotalRaw),
                      null != e.PricePerMonthRaw &&
                        Object.hasOwnProperty.call(e, "PricePerMonthRaw") &&
                        t.uint32(114).string(e.PricePerMonthRaw),
                      null != e.SavePercent && Object.hasOwnProperty.call(e, "SavePercent") && t.uint32(122).string(e.SavePercent),
                      null != e.DiscountPercent &&
                        Object.hasOwnProperty.call(e, "DiscountPercent") &&
                        t.uint32(130).string(e.DiscountPercent),
                      null != e.OldPriceTotal && Object.hasOwnProperty.call(e, "OldPriceTotal") && t.uint32(138).string(e.OldPriceTotal),
                      null != e.OldPriceTotalRaw &&
                        Object.hasOwnProperty.call(e, "OldPriceTotalRaw") &&
                        t.uint32(146).string(e.OldPriceTotalRaw),
                      null != e.OldPricePerMonth &&
                        Object.hasOwnProperty.call(e, "OldPricePerMonth") &&
                        t.uint32(154).string(e.OldPricePerMonth),
                      null != e.OldPricePerMonthRaw &&
                        Object.hasOwnProperty.call(e, "OldPricePerMonthRaw") &&
                        t.uint32(162).string(e.OldPricePerMonthRaw),
                      null != e.Title && Object.hasOwnProperty.call(e, "Title") && t.uint32(170).string(e.Title),
                      null != e.Description && Object.hasOwnProperty.call(e, "Description") && t.uint32(178).string(e.Description),
                      null != e.IsOptinTrial && Object.hasOwnProperty.call(e, "IsOptinTrial") && t.uint32(184).bool(e.IsOptinTrial),
                      null != e.OptinTrialDurationUnit &&
                        Object.hasOwnProperty.call(e, "OptinTrialDurationUnit") &&
                        t.uint32(192).int32(e.OptinTrialDurationUnit),
                      null != e.OptinTrialDurationUnitsNum &&
                        Object.hasOwnProperty.call(e, "OptinTrialDurationUnitsNum") &&
                        t.uint32(200).uint32(e.OptinTrialDurationUnitsNum),
                      null != e.IsMostPopular && Object.hasOwnProperty.call(e, "IsMostPopular") && t.uint32(208).bool(e.IsMostPopular),
                      null != e.IsBestPrice && Object.hasOwnProperty.call(e, "IsBestPrice") && t.uint32(216).bool(e.IsBestPrice),
                      null != e.LinkToWeb && Object.hasOwnProperty.call(e, "LinkToWeb") && t.uint32(226).string(e.LinkToWeb),
                      null != e.Screens && e.Screens.length)
                    )
                      for (var n = 0; n < e.Screens.length; ++n) t.uint32(234).string(e.Screens[n]);
                    return (
                      null != e.JsonCustomParams &&
                        Object.hasOwnProperty.call(e, "JsonCustomParams") &&
                        t.uint32(242).string(e.JsonCustomParams),
                      null != e.IsUniqueOffer && Object.hasOwnProperty.call(e, "IsUniqueOffer") && t.uint32(248).bool(e.IsUniqueOffer),
                      null != e.DurationName && Object.hasOwnProperty.call(e, "DurationName") && t.uint32(258).string(e.DurationName),
                      null != e.DurationDays && Object.hasOwnProperty.call(e, "DurationDays") && t.uint32(266).string(e.DurationDays),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.Product(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.Id = e.string();
                          break;
                        case 2:
                          r.BatchId = e.uint32();
                          break;
                        case 3:
                          r.VendorId = e.uint32();
                          break;
                        case 4:
                          r.Type = e.int32();
                          break;
                        case 5:
                          r.Order = e.uint32();
                          break;
                        case 6:
                          r.payment_type = e.int32();
                          break;
                        case 7:
                          r.VendorPlanId = e.uint32();
                          break;
                        case 8:
                          r.duration_unit = e.int32();
                          break;
                        case 9:
                          r.DurationUnitsNum = e.uint32();
                          break;
                        case 10:
                          r.Currency = e.string();
                          break;
                        case 11:
                          r.PriceTotal = e.string();
                          break;
                        case 12:
                          r.PricePerMonth = e.string();
                          break;
                        case 13:
                          r.PriceTotalRaw = e.string();
                          break;
                        case 14:
                          r.PricePerMonthRaw = e.string();
                          break;
                        case 15:
                          r.SavePercent = e.string();
                          break;
                        case 16:
                          r.DiscountPercent = e.string();
                          break;
                        case 17:
                          r.OldPriceTotal = e.string();
                          break;
                        case 18:
                          r.OldPriceTotalRaw = e.string();
                          break;
                        case 19:
                          r.OldPricePerMonth = e.string();
                          break;
                        case 20:
                          r.OldPricePerMonthRaw = e.string();
                          break;
                        case 21:
                          r.Title = e.string();
                          break;
                        case 22:
                          r.Description = e.string();
                          break;
                        case 23:
                          r.IsOptinTrial = e.bool();
                          break;
                        case 24:
                          r.OptinTrialDurationUnit = e.int32();
                          break;
                        case 25:
                          r.OptinTrialDurationUnitsNum = e.uint32();
                          break;
                        case 26:
                          r.IsMostPopular = e.bool();
                          break;
                        case 27:
                          r.IsBestPrice = e.bool();
                          break;
                        case 28:
                          r.LinkToWeb = e.string();
                          break;
                        case 29:
                          (r.Screens && r.Screens.length) || (r.Screens = []), r.Screens.push(e.string());
                          break;
                        case 30:
                          r.JsonCustomParams = e.string();
                          break;
                        case 31:
                          r.IsUniqueOffer = e.bool();
                          break;
                        case 32:
                          r.DurationName = e.string();
                          break;
                        case 33:
                          r.DurationDays = e.string();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    if (!r.hasOwnProperty("Id")) throw l.ProtocolError("missing required 'Id'", { instance: r });
                    if (!r.hasOwnProperty("BatchId")) throw l.ProtocolError("missing required 'BatchId'", { instance: r });
                    if (!r.hasOwnProperty("VendorId")) throw l.ProtocolError("missing required 'VendorId'", { instance: r });
                    if (!r.hasOwnProperty("Type")) throw l.ProtocolError("missing required 'Type'", { instance: r });
                    if (!r.hasOwnProperty("Order")) throw l.ProtocolError("missing required 'Order'", { instance: r });
                    if (!r.hasOwnProperty("payment_type")) throw l.ProtocolError("missing required 'payment_type'", { instance: r });
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!l.isString(e.Id)) return "Id: string expected";
                    if (!l.isInteger(e.BatchId)) return "BatchId: integer expected";
                    if (!l.isInteger(e.VendorId)) return "VendorId: integer expected";
                    switch (e.Type) {
                      default:
                        return "Type: enum value expected";
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                    }
                    if (!l.isInteger(e.Order)) return "Order: integer expected";
                    switch (e.payment_type) {
                      default:
                        return "payment_type: enum value expected";
                      case 1:
                      case 2:
                    }
                    if (null != e.VendorPlanId && e.hasOwnProperty("VendorPlanId") && !l.isInteger(e.VendorPlanId))
                      return "VendorPlanId: integer expected";
                    if (null != e.duration_unit && e.hasOwnProperty("duration_unit"))
                      switch (e.duration_unit) {
                        default:
                          return "duration_unit: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                      }
                    if (null != e.DurationUnitsNum && e.hasOwnProperty("DurationUnitsNum") && !l.isInteger(e.DurationUnitsNum))
                      return "DurationUnitsNum: integer expected";
                    if (null != e.Currency && e.hasOwnProperty("Currency") && !l.isString(e.Currency)) return "Currency: string expected";
                    if (null != e.PriceTotal && e.hasOwnProperty("PriceTotal") && !l.isString(e.PriceTotal))
                      return "PriceTotal: string expected";
                    if (null != e.PricePerMonth && e.hasOwnProperty("PricePerMonth") && !l.isString(e.PricePerMonth))
                      return "PricePerMonth: string expected";
                    if (null != e.PriceTotalRaw && e.hasOwnProperty("PriceTotalRaw") && !l.isString(e.PriceTotalRaw))
                      return "PriceTotalRaw: string expected";
                    if (null != e.PricePerMonthRaw && e.hasOwnProperty("PricePerMonthRaw") && !l.isString(e.PricePerMonthRaw))
                      return "PricePerMonthRaw: string expected";
                    if (null != e.SavePercent && e.hasOwnProperty("SavePercent") && !l.isString(e.SavePercent))
                      return "SavePercent: string expected";
                    if (null != e.DiscountPercent && e.hasOwnProperty("DiscountPercent") && !l.isString(e.DiscountPercent))
                      return "DiscountPercent: string expected";
                    if (null != e.OldPriceTotal && e.hasOwnProperty("OldPriceTotal") && !l.isString(e.OldPriceTotal))
                      return "OldPriceTotal: string expected";
                    if (null != e.OldPriceTotalRaw && e.hasOwnProperty("OldPriceTotalRaw") && !l.isString(e.OldPriceTotalRaw))
                      return "OldPriceTotalRaw: string expected";
                    if (null != e.OldPricePerMonth && e.hasOwnProperty("OldPricePerMonth") && !l.isString(e.OldPricePerMonth))
                      return "OldPricePerMonth: string expected";
                    if (null != e.OldPricePerMonthRaw && e.hasOwnProperty("OldPricePerMonthRaw") && !l.isString(e.OldPricePerMonthRaw))
                      return "OldPricePerMonthRaw: string expected";
                    if (null != e.Title && e.hasOwnProperty("Title") && !l.isString(e.Title)) return "Title: string expected";
                    if (null != e.Description && e.hasOwnProperty("Description") && !l.isString(e.Description))
                      return "Description: string expected";
                    if (null != e.IsOptinTrial && e.hasOwnProperty("IsOptinTrial") && "boolean" != typeof e.IsOptinTrial)
                      return "IsOptinTrial: boolean expected";
                    if (null != e.OptinTrialDurationUnit && e.hasOwnProperty("OptinTrialDurationUnit"))
                      switch (e.OptinTrialDurationUnit) {
                        default:
                          return "OptinTrialDurationUnit: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                      }
                    if (
                      null != e.OptinTrialDurationUnitsNum &&
                      e.hasOwnProperty("OptinTrialDurationUnitsNum") &&
                      !l.isInteger(e.OptinTrialDurationUnitsNum)
                    )
                      return "OptinTrialDurationUnitsNum: integer expected";
                    if (null != e.IsMostPopular && e.hasOwnProperty("IsMostPopular") && "boolean" != typeof e.IsMostPopular)
                      return "IsMostPopular: boolean expected";
                    if (null != e.IsBestPrice && e.hasOwnProperty("IsBestPrice") && "boolean" != typeof e.IsBestPrice)
                      return "IsBestPrice: boolean expected";
                    if (null != e.LinkToWeb && e.hasOwnProperty("LinkToWeb") && !l.isString(e.LinkToWeb))
                      return "LinkToWeb: string expected";
                    if (null != e.Screens && e.hasOwnProperty("Screens")) {
                      if (!Array.isArray(e.Screens)) return "Screens: array expected";
                      for (var t = 0; t < e.Screens.length; ++t) if (!l.isString(e.Screens[t])) return "Screens: string[] expected";
                    }
                    return null != e.JsonCustomParams && e.hasOwnProperty("JsonCustomParams") && !l.isString(e.JsonCustomParams)
                      ? "JsonCustomParams: string expected"
                      : null != e.IsUniqueOffer && e.hasOwnProperty("IsUniqueOffer") && "boolean" != typeof e.IsUniqueOffer
                      ? "IsUniqueOffer: boolean expected"
                      : null != e.DurationName && e.hasOwnProperty("DurationName") && !l.isString(e.DurationName)
                      ? "DurationName: string expected"
                      : null != e.DurationDays && e.hasOwnProperty("DurationDays") && !l.isString(e.DurationDays)
                      ? "DurationDays: string expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.Product) return e;
                    var t = new f.proto.api.response.Config.Product();
                    switch (
                      (null != e.Id && (t.Id = String(e.Id)),
                      null != e.BatchId && (t.BatchId = e.BatchId >>> 0),
                      null != e.VendorId && (t.VendorId = e.VendorId >>> 0),
                      e.Type)
                    ) {
                      case "ELITE":
                      case 1:
                        t.Type = 1;
                        break;
                      case "SPEED":
                      case 2:
                        t.Type = 2;
                        break;
                      case "EXTRA_5_DEVICES":
                      case 3:
                        t.Type = 3;
                        break;
                      case "TURBO":
                      case 4:
                        t.Type = 4;
                    }
                    switch ((null != e.Order && (t.Order = e.Order >>> 0), e.payment_type)) {
                      case "ONE_TIME":
                      case 1:
                        t.payment_type = 1;
                        break;
                      case "SUBSCRIPTION":
                      case 2:
                        t.payment_type = 2;
                    }
                    switch ((null != e.VendorPlanId && (t.VendorPlanId = e.VendorPlanId >>> 0), e.duration_unit)) {
                      case "DAY":
                      case 1:
                        t.duration_unit = 1;
                        break;
                      case "WEEK":
                      case 2:
                        t.duration_unit = 2;
                        break;
                      case "MONTH":
                      case 3:
                        t.duration_unit = 3;
                        break;
                      case "YEAR":
                      case 4:
                        t.duration_unit = 4;
                        break;
                      case "LIFETIME":
                      case 5:
                        t.duration_unit = 5;
                    }
                    switch (
                      (null != e.DurationUnitsNum && (t.DurationUnitsNum = e.DurationUnitsNum >>> 0),
                      null != e.Currency && (t.Currency = String(e.Currency)),
                      null != e.PriceTotal && (t.PriceTotal = String(e.PriceTotal)),
                      null != e.PricePerMonth && (t.PricePerMonth = String(e.PricePerMonth)),
                      null != e.PriceTotalRaw && (t.PriceTotalRaw = String(e.PriceTotalRaw)),
                      null != e.PricePerMonthRaw && (t.PricePerMonthRaw = String(e.PricePerMonthRaw)),
                      null != e.SavePercent && (t.SavePercent = String(e.SavePercent)),
                      null != e.DiscountPercent && (t.DiscountPercent = String(e.DiscountPercent)),
                      null != e.OldPriceTotal && (t.OldPriceTotal = String(e.OldPriceTotal)),
                      null != e.OldPriceTotalRaw && (t.OldPriceTotalRaw = String(e.OldPriceTotalRaw)),
                      null != e.OldPricePerMonth && (t.OldPricePerMonth = String(e.OldPricePerMonth)),
                      null != e.OldPricePerMonthRaw && (t.OldPricePerMonthRaw = String(e.OldPricePerMonthRaw)),
                      null != e.Title && (t.Title = String(e.Title)),
                      null != e.Description && (t.Description = String(e.Description)),
                      null != e.IsOptinTrial && (t.IsOptinTrial = Boolean(e.IsOptinTrial)),
                      e.OptinTrialDurationUnit)
                    ) {
                      case "DAY":
                      case 1:
                        t.OptinTrialDurationUnit = 1;
                        break;
                      case "WEEK":
                      case 2:
                        t.OptinTrialDurationUnit = 2;
                        break;
                      case "MONTH":
                      case 3:
                        t.OptinTrialDurationUnit = 3;
                        break;
                      case "YEAR":
                      case 4:
                        t.OptinTrialDurationUnit = 4;
                        break;
                      case "LIFETIME":
                      case 5:
                        t.OptinTrialDurationUnit = 5;
                    }
                    if (
                      (null != e.OptinTrialDurationUnitsNum && (t.OptinTrialDurationUnitsNum = e.OptinTrialDurationUnitsNum >>> 0),
                      null != e.IsMostPopular && (t.IsMostPopular = Boolean(e.IsMostPopular)),
                      null != e.IsBestPrice && (t.IsBestPrice = Boolean(e.IsBestPrice)),
                      null != e.LinkToWeb && (t.LinkToWeb = String(e.LinkToWeb)),
                      e.Screens)
                    ) {
                      if (!Array.isArray(e.Screens)) throw TypeError(".proto.api.response.Config.Product.Screens: array expected");
                      t.Screens = [];
                      for (var n = 0; n < e.Screens.length; ++n) t.Screens[n] = String(e.Screens[n]);
                    }
                    return (
                      null != e.JsonCustomParams && (t.JsonCustomParams = String(e.JsonCustomParams)),
                      null != e.IsUniqueOffer && (t.IsUniqueOffer = Boolean(e.IsUniqueOffer)),
                      null != e.DurationName && (t.DurationName = String(e.DurationName)),
                      null != e.DurationDays && (t.DurationDays = String(e.DurationDays)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.Screens = []),
                      t.defaults &&
                        ((n.Id = ""),
                        (n.BatchId = 0),
                        (n.VendorId = 0),
                        (n.Type = t.enums === String ? "ELITE" : 1),
                        (n.Order = 0),
                        (n.payment_type = t.enums === String ? "ONE_TIME" : 1),
                        (n.VendorPlanId = 0),
                        (n.duration_unit = t.enums === String ? "DAY" : 1),
                        (n.DurationUnitsNum = 0),
                        (n.Currency = ""),
                        (n.PriceTotal = ""),
                        (n.PricePerMonth = ""),
                        (n.PriceTotalRaw = ""),
                        (n.PricePerMonthRaw = ""),
                        (n.SavePercent = ""),
                        (n.DiscountPercent = ""),
                        (n.OldPriceTotal = ""),
                        (n.OldPriceTotalRaw = ""),
                        (n.OldPricePerMonth = ""),
                        (n.OldPricePerMonthRaw = ""),
                        (n.Title = ""),
                        (n.Description = ""),
                        (n.IsOptinTrial = !1),
                        (n.OptinTrialDurationUnit = t.enums === String ? "DAY" : 1),
                        (n.OptinTrialDurationUnitsNum = 0),
                        (n.IsMostPopular = !1),
                        (n.IsBestPrice = !1),
                        (n.LinkToWeb = ""),
                        (n.JsonCustomParams = ""),
                        (n.IsUniqueOffer = !1),
                        (n.DurationName = ""),
                        (n.DurationDays = "")),
                      null != e.Id && e.hasOwnProperty("Id") && (n.Id = e.Id),
                      null != e.BatchId && e.hasOwnProperty("BatchId") && (n.BatchId = e.BatchId),
                      null != e.VendorId && e.hasOwnProperty("VendorId") && (n.VendorId = e.VendorId),
                      null != e.Type &&
                        e.hasOwnProperty("Type") &&
                        (n.Type = t.enums === String ? f.proto.api.response.Config.Product.ProductType[e.Type] : e.Type),
                      null != e.Order && e.hasOwnProperty("Order") && (n.Order = e.Order),
                      null != e.payment_type &&
                        e.hasOwnProperty("payment_type") &&
                        (n.payment_type =
                          t.enums === String ? f.proto.api.response.Config.Product.PaymentType[e.payment_type] : e.payment_type),
                      null != e.VendorPlanId && e.hasOwnProperty("VendorPlanId") && (n.VendorPlanId = e.VendorPlanId),
                      null != e.duration_unit &&
                        e.hasOwnProperty("duration_unit") &&
                        (n.duration_unit =
                          t.enums === String ? f.proto.api.response.Config.Product.DurationUnit[e.duration_unit] : e.duration_unit),
                      null != e.DurationUnitsNum && e.hasOwnProperty("DurationUnitsNum") && (n.DurationUnitsNum = e.DurationUnitsNum),
                      null != e.Currency && e.hasOwnProperty("Currency") && (n.Currency = e.Currency),
                      null != e.PriceTotal && e.hasOwnProperty("PriceTotal") && (n.PriceTotal = e.PriceTotal),
                      null != e.PricePerMonth && e.hasOwnProperty("PricePerMonth") && (n.PricePerMonth = e.PricePerMonth),
                      null != e.PriceTotalRaw && e.hasOwnProperty("PriceTotalRaw") && (n.PriceTotalRaw = e.PriceTotalRaw),
                      null != e.PricePerMonthRaw && e.hasOwnProperty("PricePerMonthRaw") && (n.PricePerMonthRaw = e.PricePerMonthRaw),
                      null != e.SavePercent && e.hasOwnProperty("SavePercent") && (n.SavePercent = e.SavePercent),
                      null != e.DiscountPercent && e.hasOwnProperty("DiscountPercent") && (n.DiscountPercent = e.DiscountPercent),
                      null != e.OldPriceTotal && e.hasOwnProperty("OldPriceTotal") && (n.OldPriceTotal = e.OldPriceTotal),
                      null != e.OldPriceTotalRaw && e.hasOwnProperty("OldPriceTotalRaw") && (n.OldPriceTotalRaw = e.OldPriceTotalRaw),
                      null != e.OldPricePerMonth && e.hasOwnProperty("OldPricePerMonth") && (n.OldPricePerMonth = e.OldPricePerMonth),
                      null != e.OldPricePerMonthRaw &&
                        e.hasOwnProperty("OldPricePerMonthRaw") &&
                        (n.OldPricePerMonthRaw = e.OldPricePerMonthRaw),
                      null != e.Title && e.hasOwnProperty("Title") && (n.Title = e.Title),
                      null != e.Description && e.hasOwnProperty("Description") && (n.Description = e.Description),
                      null != e.IsOptinTrial && e.hasOwnProperty("IsOptinTrial") && (n.IsOptinTrial = e.IsOptinTrial),
                      null != e.OptinTrialDurationUnit &&
                        e.hasOwnProperty("OptinTrialDurationUnit") &&
                        (n.OptinTrialDurationUnit =
                          t.enums === String
                            ? f.proto.api.response.Config.Product.DurationUnit[e.OptinTrialDurationUnit]
                            : e.OptinTrialDurationUnit),
                      null != e.OptinTrialDurationUnitsNum &&
                        e.hasOwnProperty("OptinTrialDurationUnitsNum") &&
                        (n.OptinTrialDurationUnitsNum = e.OptinTrialDurationUnitsNum),
                      null != e.IsMostPopular && e.hasOwnProperty("IsMostPopular") && (n.IsMostPopular = e.IsMostPopular),
                      null != e.IsBestPrice && e.hasOwnProperty("IsBestPrice") && (n.IsBestPrice = e.IsBestPrice),
                      null != e.LinkToWeb && e.hasOwnProperty("LinkToWeb") && (n.LinkToWeb = e.LinkToWeb),
                      e.Screens && e.Screens.length)
                    ) {
                      n.Screens = [];
                      for (var r = 0; r < e.Screens.length; ++r) n.Screens[r] = e.Screens[r];
                    }
                    return (
                      null != e.JsonCustomParams && e.hasOwnProperty("JsonCustomParams") && (n.JsonCustomParams = e.JsonCustomParams),
                      null != e.IsUniqueOffer && e.hasOwnProperty("IsUniqueOffer") && (n.IsUniqueOffer = e.IsUniqueOffer),
                      null != e.DurationName && e.hasOwnProperty("DurationName") && (n.DurationName = e.DurationName),
                      null != e.DurationDays && e.hasOwnProperty("DurationDays") && (n.DurationDays = e.DurationDays),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  (e.ProductType =
                    ((t = {}),
                    ((n = Object.create(t))[(t[1] = "ELITE")] = 1),
                    (n[(t[2] = "SPEED")] = 2),
                    (n[(t[3] = "EXTRA_5_DEVICES")] = 3),
                    (n[(t[4] = "TURBO")] = 4),
                    n)),
                  (e.DurationUnit = (function () {
                    var e = {},
                      t = Object.create(e);
                    return (
                      (t[(e[1] = "DAY")] = 1),
                      (t[(e[2] = "WEEK")] = 2),
                      (t[(e[3] = "MONTH")] = 3),
                      (t[(e[4] = "YEAR")] = 4),
                      (t[(e[5] = "LIFETIME")] = 5),
                      t
                    );
                  })()),
                  (e.PaymentType = (function () {
                    var e = {},
                      t = Object.create(e);
                    return (t[(e[1] = "ONE_TIME")] = 1), (t[(e[2] = "SUBSCRIPTION")] = 2), t;
                  })()),
                  e
                );
              })()),
              (e.CreditCardConfig = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                var t, n;
                return (
                  (e.prototype.form_type = 1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      null != e.form_type && Object.hasOwnProperty.call(e, "form_type") && t.uint32(8).int32(e.form_type),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.CreditCardConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.form_type = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.form_type && e.hasOwnProperty("form_type"))
                      switch (e.form_type) {
                        default:
                          return "form_type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                      }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.CreditCardConfig) return e;
                    var t = new f.proto.api.response.Config.CreditCardConfig();
                    switch (e.form_type) {
                      case "LONG_FORM":
                      case 1:
                        t.form_type = 1;
                        break;
                      case "SHORT_FORM":
                      case 2:
                        t.form_type = 2;
                        break;
                      case "SHORT_FORM_WITH_ZIP":
                      case 3:
                        t.form_type = 3;
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && (n.form_type = t.enums === String ? "LONG_FORM" : 1),
                      null != e.form_type &&
                        e.hasOwnProperty("form_type") &&
                        (n.form_type =
                          t.enums === String ? f.proto.api.response.Config.CreditCardConfig.FormType[e.form_type] : e.form_type),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  (e.FormType =
                    ((t = {}),
                    ((n = Object.create(t))[(t[1] = "LONG_FORM")] = 1),
                    (n[(t[2] = "SHORT_FORM")] = 2),
                    (n[(t[3] = "SHORT_FORM_WITH_ZIP")] = 3),
                    n)),
                  e
                );
              })()),
              (e.GPRConfig = (function () {
                function e(e) {
                  if (((this.primary = []), (this.backup = []), (this.feature_blacklist = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.primary = l.emptyArray),
                  (e.prototype.backup = l.emptyArray),
                  (e.prototype.feature_blacklist = l.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if ((t || (t = p.create()), null != e.primary && e.primary.length))
                      for (var n = 0; n < e.primary.length; ++n) t.uint32(10).string(e.primary[n]);
                    if (null != e.backup && e.backup.length) for (n = 0; n < e.backup.length; ++n) t.uint32(18).string(e.backup[n]);
                    if (null != e.feature_blacklist && e.feature_blacklist.length)
                      for (n = 0; n < e.feature_blacklist.length; ++n) t.uint32(26).string(e.feature_blacklist[n]);
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.GPRConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (r.primary && r.primary.length) || (r.primary = []), r.primary.push(e.string());
                          break;
                        case 2:
                          (r.backup && r.backup.length) || (r.backup = []), r.backup.push(e.string());
                          break;
                        case 3:
                          (r.feature_blacklist && r.feature_blacklist.length) || (r.feature_blacklist = []),
                            r.feature_blacklist.push(e.string());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.primary && e.hasOwnProperty("primary")) {
                      if (!Array.isArray(e.primary)) return "primary: array expected";
                      for (var t = 0; t < e.primary.length; ++t) if (!l.isString(e.primary[t])) return "primary: string[] expected";
                    }
                    if (null != e.backup && e.hasOwnProperty("backup")) {
                      if (!Array.isArray(e.backup)) return "backup: array expected";
                      for (t = 0; t < e.backup.length; ++t) if (!l.isString(e.backup[t])) return "backup: string[] expected";
                    }
                    if (null != e.feature_blacklist && e.hasOwnProperty("feature_blacklist")) {
                      if (!Array.isArray(e.feature_blacklist)) return "feature_blacklist: array expected";
                      for (t = 0; t < e.feature_blacklist.length; ++t)
                        if (!l.isString(e.feature_blacklist[t])) return "feature_blacklist: string[] expected";
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.GPRConfig) return e;
                    var t = new f.proto.api.response.Config.GPRConfig();
                    if (e.primary) {
                      if (!Array.isArray(e.primary)) throw TypeError(".proto.api.response.Config.GPRConfig.primary: array expected");
                      t.primary = [];
                      for (var n = 0; n < e.primary.length; ++n) t.primary[n] = String(e.primary[n]);
                    }
                    if (e.backup) {
                      if (!Array.isArray(e.backup)) throw TypeError(".proto.api.response.Config.GPRConfig.backup: array expected");
                      for (t.backup = [], n = 0; n < e.backup.length; ++n) t.backup[n] = String(e.backup[n]);
                    }
                    if (e.feature_blacklist) {
                      if (!Array.isArray(e.feature_blacklist))
                        throw TypeError(".proto.api.response.Config.GPRConfig.feature_blacklist: array expected");
                      for (t.feature_blacklist = [], n = 0; n < e.feature_blacklist.length; ++n)
                        t.feature_blacklist[n] = String(e.feature_blacklist[n]);
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && ((n.primary = []), (n.backup = []), (n.feature_blacklist = [])),
                      e.primary && e.primary.length)
                    ) {
                      n.primary = [];
                      for (var r = 0; r < e.primary.length; ++r) n.primary[r] = e.primary[r];
                    }
                    if (e.backup && e.backup.length) for (n.backup = [], r = 0; r < e.backup.length; ++r) n.backup[r] = e.backup[r];
                    if (e.feature_blacklist && e.feature_blacklist.length)
                      for (n.feature_blacklist = [], r = 0; r < e.feature_blacklist.length; ++r)
                        n.feature_blacklist[r] = e.feature_blacklist[r];
                    return n;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  e
                );
              })()),
              (e.AppRateConfig = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.is_show = !1),
                  (e.prototype.days_frequency = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      t.uint32(8).bool(e.is_show),
                      null != e.days_frequency && Object.hasOwnProperty.call(e, "days_frequency") && t.uint32(16).int32(e.days_frequency),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.AppRateConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.is_show = e.bool();
                          break;
                        case 2:
                          r.days_frequency = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    if (!r.hasOwnProperty("is_show")) throw l.ProtocolError("missing required 'is_show'", { instance: r });
                    return r;
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : "boolean" != typeof e.is_show
                      ? "is_show: boolean expected"
                      : null != e.days_frequency && e.hasOwnProperty("days_frequency") && !l.isInteger(e.days_frequency)
                      ? "days_frequency: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.AppRateConfig) return e;
                    var t = new f.proto.api.response.Config.AppRateConfig();
                    return (
                      null != e.is_show && (t.is_show = Boolean(e.is_show)),
                      null != e.days_frequency && (t.days_frequency = 0 | e.days_frequency),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && ((n.is_show = !1), (n.days_frequency = 0)),
                      null != e.is_show && e.hasOwnProperty("is_show") && (n.is_show = e.is_show),
                      null != e.days_frequency && e.hasOwnProperty("days_frequency") && (n.days_frequency = e.days_frequency),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  e
                );
              })()),
              (e.VpnSdkConfig = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.availability_config = null),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      null != e.availability_config &&
                        Object.hasOwnProperty.call(e, "availability_config") &&
                        f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.encode(
                          e.availability_config,
                          t.uint32(10).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Config.VpnSdkConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.availability_config = f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.availability_config && e.hasOwnProperty("availability_config")) {
                      var t = f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.verify(e.availability_config);
                      if (t) return "availability_config." + t;
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.Config.VpnSdkConfig) return e;
                    var t = new f.proto.api.response.Config.VpnSdkConfig();
                    if (null != e.availability_config) {
                      if ("object" != typeof e.availability_config)
                        throw TypeError(".proto.api.response.Config.VpnSdkConfig.availability_config: object expected");
                      t.availability_config = f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.fromObject(
                        e.availability_config
                      );
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && (n.availability_config = null),
                      null != e.availability_config &&
                        e.hasOwnProperty("availability_config") &&
                        (n.availability_config = f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.toObject(
                          e.availability_config,
                          t
                        )),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  (e.NetworkAvailabilityTest = (function () {
                    function e(e) {
                      if (((this.certificate_url = []), (this.captive_url = []), e))
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    return (
                      (e.prototype.certificate_url = l.emptyArray),
                      (e.prototype.captive_url = l.emptyArray),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        if ((t || (t = p.create()), null != e.certificate_url && e.certificate_url.length))
                          for (var n = 0; n < e.certificate_url.length; ++n) t.uint32(10).string(e.certificate_url[n]);
                        if (null != e.captive_url && e.captive_url.length)
                          for (n = 0; n < e.captive_url.length; ++n) t.uint32(18).string(e.captive_url[n]);
                        return t;
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        for (
                          var n = void 0 === t ? e.len : e.pos + t,
                            r = new f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest();
                          e.pos < n;

                        ) {
                          var o = e.uint32();
                          switch (o >>> 3) {
                            case 1:
                              (r.certificate_url && r.certificate_url.length) || (r.certificate_url = []),
                                r.certificate_url.push(e.string());
                              break;
                            case 2:
                              (r.captive_url && r.captive_url.length) || (r.captive_url = []), r.captive_url.push(e.string());
                              break;
                            default:
                              e.skipType(7 & o);
                          }
                        }
                        return r;
                      }),
                      (e.verify = function (e) {
                        if ("object" != typeof e || null === e) return "object expected";
                        if (null != e.certificate_url && e.hasOwnProperty("certificate_url")) {
                          if (!Array.isArray(e.certificate_url)) return "certificate_url: array expected";
                          for (var t = 0; t < e.certificate_url.length; ++t)
                            if (!l.isString(e.certificate_url[t])) return "certificate_url: string[] expected";
                        }
                        if (null != e.captive_url && e.hasOwnProperty("captive_url")) {
                          if (!Array.isArray(e.captive_url)) return "captive_url: array expected";
                          for (t = 0; t < e.captive_url.length; ++t)
                            if (!l.isString(e.captive_url[t])) return "captive_url: string[] expected";
                        }
                        return null;
                      }),
                      (e.fromObject = function (e) {
                        if (e instanceof f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest) return e;
                        var t = new f.proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest();
                        if (e.certificate_url) {
                          if (!Array.isArray(e.certificate_url))
                            throw TypeError(
                              ".proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.certificate_url: array expected"
                            );
                          t.certificate_url = [];
                          for (var n = 0; n < e.certificate_url.length; ++n) t.certificate_url[n] = String(e.certificate_url[n]);
                        }
                        if (e.captive_url) {
                          if (!Array.isArray(e.captive_url))
                            throw TypeError(".proto.api.response.Config.VpnSdkConfig.NetworkAvailabilityTest.captive_url: array expected");
                          for (t.captive_url = [], n = 0; n < e.captive_url.length; ++n) t.captive_url[n] = String(e.captive_url[n]);
                        }
                        return t;
                      }),
                      (e.toObject = function (e, t) {
                        t || (t = {});
                        var n = {};
                        if (
                          ((t.arrays || t.defaults) && ((n.certificate_url = []), (n.captive_url = [])),
                          e.certificate_url && e.certificate_url.length)
                        ) {
                          n.certificate_url = [];
                          for (var r = 0; r < e.certificate_url.length; ++r) n.certificate_url[r] = e.certificate_url[r];
                        }
                        if (e.captive_url && e.captive_url.length)
                          for (n.captive_url = [], r = 0; r < e.captive_url.length; ++r) n.captive_url[r] = e.captive_url[r];
                        return n;
                      }),
                      (e.prototype.toJSON = function () {
                        return this.constructor.toObject(this, u.util.toJSONOptions);
                      }),
                      e
                    );
                  })()),
                  e
                );
              })()),
              e
            );
          })()),
          (o.ConfigIos = (function () {
            function e(e) {
              if (((this.experiments = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.experiments = l.emptyArray),
              (e.prototype.ads_config_json = ""),
              (e.prototype.update_config = null),
              (e.prototype.speed_test_config = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if ((t || (t = p.create()), null != e.experiments && e.experiments.length))
                  for (var n = 0; n < e.experiments.length; ++n)
                    f.proto.api.KeyValue.encode(e.experiments[n], t.uint32(10).fork()).ldelim();
                return (
                  null != e.ads_config_json && Object.hasOwnProperty.call(e, "ads_config_json") && t.uint32(18).string(e.ads_config_json),
                  null != e.update_config &&
                    Object.hasOwnProperty.call(e, "update_config") &&
                    f.proto.api.response.ConfigIos.UpdateConfig.encode(e.update_config, t.uint32(26).fork()).ldelim(),
                  null != e.speed_test_config &&
                    Object.hasOwnProperty.call(e, "speed_test_config") &&
                    f.proto.api.response.ConfigIos.SpeedTestConfig.encode(e.speed_test_config, t.uint32(34).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigIos(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      (r.experiments && r.experiments.length) || (r.experiments = []),
                        r.experiments.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                      break;
                    case 2:
                      r.ads_config_json = e.string();
                      break;
                    case 3:
                      r.update_config = f.proto.api.response.ConfigIos.UpdateConfig.decode(e, e.uint32());
                      break;
                    case 4:
                      r.speed_test_config = f.proto.api.response.ConfigIos.SpeedTestConfig.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.experiments && e.hasOwnProperty("experiments")) {
                  if (!Array.isArray(e.experiments)) return "experiments: array expected";
                  for (var t = 0; t < e.experiments.length; ++t)
                    if ((n = f.proto.api.KeyValue.verify(e.experiments[t]))) return "experiments." + n;
                }
                return null != e.ads_config_json && e.hasOwnProperty("ads_config_json") && !l.isString(e.ads_config_json)
                  ? "ads_config_json: string expected"
                  : null != e.update_config &&
                    e.hasOwnProperty("update_config") &&
                    (n = f.proto.api.response.ConfigIos.UpdateConfig.verify(e.update_config))
                  ? "update_config." + n
                  : null != e.speed_test_config &&
                    e.hasOwnProperty("speed_test_config") &&
                    (n = f.proto.api.response.ConfigIos.SpeedTestConfig.verify(e.speed_test_config))
                  ? "speed_test_config." + n
                  : null;
                var n;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.ConfigIos) return e;
                var t = new f.proto.api.response.ConfigIos();
                if (e.experiments) {
                  if (!Array.isArray(e.experiments)) throw TypeError(".proto.api.response.ConfigIos.experiments: array expected");
                  t.experiments = [];
                  for (var n = 0; n < e.experiments.length; ++n) {
                    if ("object" != typeof e.experiments[n]) throw TypeError(".proto.api.response.ConfigIos.experiments: object expected");
                    t.experiments[n] = f.proto.api.KeyValue.fromObject(e.experiments[n]);
                  }
                }
                if ((null != e.ads_config_json && (t.ads_config_json = String(e.ads_config_json)), null != e.update_config)) {
                  if ("object" != typeof e.update_config) throw TypeError(".proto.api.response.ConfigIos.update_config: object expected");
                  t.update_config = f.proto.api.response.ConfigIos.UpdateConfig.fromObject(e.update_config);
                }
                if (null != e.speed_test_config) {
                  if ("object" != typeof e.speed_test_config)
                    throw TypeError(".proto.api.response.ConfigIos.speed_test_config: object expected");
                  t.speed_test_config = f.proto.api.response.ConfigIos.SpeedTestConfig.fromObject(e.speed_test_config);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && (n.experiments = []),
                  t.defaults && ((n.ads_config_json = ""), (n.update_config = null), (n.speed_test_config = null)),
                  e.experiments && e.experiments.length)
                ) {
                  n.experiments = [];
                  for (var r = 0; r < e.experiments.length; ++r) n.experiments[r] = f.proto.api.KeyValue.toObject(e.experiments[r], t);
                }
                return (
                  null != e.ads_config_json && e.hasOwnProperty("ads_config_json") && (n.ads_config_json = e.ads_config_json),
                  null != e.update_config &&
                    e.hasOwnProperty("update_config") &&
                    (n.update_config = f.proto.api.response.ConfigIos.UpdateConfig.toObject(e.update_config, t)),
                  null != e.speed_test_config &&
                    e.hasOwnProperty("speed_test_config") &&
                    (n.speed_test_config = f.proto.api.response.ConfigIos.SpeedTestConfig.toObject(e.speed_test_config, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.UpdateConfig = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.available = 0),
                  (e.prototype.required = 0),
                  (e.prototype.url = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      null != e.available && Object.hasOwnProperty.call(e, "available") && t.uint32(8).uint32(e.available),
                      null != e.required && Object.hasOwnProperty.call(e, "required") && t.uint32(16).uint32(e.required),
                      null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(26).string(e.url),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigIos.UpdateConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.available = e.uint32();
                          break;
                        case 2:
                          r.required = e.uint32();
                          break;
                        case 3:
                          r.url = e.string();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.available && e.hasOwnProperty("available") && !l.isInteger(e.available)
                      ? "available: integer expected"
                      : null != e.required && e.hasOwnProperty("required") && !l.isInteger(e.required)
                      ? "required: integer expected"
                      : null != e.url && e.hasOwnProperty("url") && !l.isString(e.url)
                      ? "url: string expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.ConfigIos.UpdateConfig) return e;
                    var t = new f.proto.api.response.ConfigIos.UpdateConfig();
                    return (
                      null != e.available && (t.available = e.available >>> 0),
                      null != e.required && (t.required = e.required >>> 0),
                      null != e.url && (t.url = String(e.url)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && ((n.available = 0), (n.required = 0), (n.url = "")),
                      null != e.available && e.hasOwnProperty("available") && (n.available = e.available),
                      null != e.required && e.hasOwnProperty("required") && (n.required = e.required),
                      null != e.url && e.hasOwnProperty("url") && (n.url = e.url),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  e
                );
              })()),
              (e.SpeedTestConfig = (function () {
                function e(e) {
                  if (((this.url = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.url = l.emptyArray),
                  (e.prototype.limit = 0),
                  (e.prototype.frequency = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if ((t || (t = p.create()), null != e.url && e.url.length))
                      for (var n = 0; n < e.url.length; ++n) t.uint32(10).string(e.url[n]);
                    return (
                      null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit),
                      null != e.frequency && Object.hasOwnProperty.call(e, "frequency") && t.uint32(24).int32(e.frequency),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigIos.SpeedTestConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (r.url && r.url.length) || (r.url = []), r.url.push(e.string());
                          break;
                        case 2:
                          r.limit = e.int32();
                          break;
                        case 3:
                          r.frequency = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (null != e.url && e.hasOwnProperty("url")) {
                      if (!Array.isArray(e.url)) return "url: array expected";
                      for (var t = 0; t < e.url.length; ++t) if (!l.isString(e.url[t])) return "url: string[] expected";
                    }
                    return null != e.limit && e.hasOwnProperty("limit") && !l.isInteger(e.limit)
                      ? "limit: integer expected"
                      : null != e.frequency && e.hasOwnProperty("frequency") && !l.isInteger(e.frequency)
                      ? "frequency: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.ConfigIos.SpeedTestConfig) return e;
                    var t = new f.proto.api.response.ConfigIos.SpeedTestConfig();
                    if (e.url) {
                      if (!Array.isArray(e.url)) throw TypeError(".proto.api.response.ConfigIos.SpeedTestConfig.url: array expected");
                      t.url = [];
                      for (var n = 0; n < e.url.length; ++n) t.url[n] = String(e.url[n]);
                    }
                    return null != e.limit && (t.limit = 0 | e.limit), null != e.frequency && (t.frequency = 0 | e.frequency), t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.url = []), t.defaults && ((n.limit = 0), (n.frequency = 0)), e.url && e.url.length)
                    ) {
                      n.url = [];
                      for (var r = 0; r < e.url.length; ++r) n.url[r] = e.url[r];
                    }
                    return (
                      null != e.limit && e.hasOwnProperty("limit") && (n.limit = e.limit),
                      null != e.frequency && e.hasOwnProperty("frequency") && (n.frequency = e.frequency),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (o.ConfigAndroid = (function () {
            function e(e) {
              if (((this.experiments = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.PurchaseFailureUrl = ""),
              (e.prototype.ads_config = null),
              (e.prototype.update = null),
              (e.prototype.ads_config_json = ""),
              (e.prototype.experiments = l.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = p.create()),
                  null != e.PurchaseFailureUrl &&
                    Object.hasOwnProperty.call(e, "PurchaseFailureUrl") &&
                    t.uint32(10).string(e.PurchaseFailureUrl),
                  null != e.ads_config &&
                    Object.hasOwnProperty.call(e, "ads_config") &&
                    f.proto.api.response.ConfigAndroid.AdsConfig.encode(e.ads_config, t.uint32(18).fork()).ldelim(),
                  null != e.update &&
                    Object.hasOwnProperty.call(e, "update") &&
                    f.proto.api.response.ConfigAndroid.UpdateConfig.encode(e.update, t.uint32(26).fork()).ldelim(),
                  null != e.ads_config_json && Object.hasOwnProperty.call(e, "ads_config_json") && t.uint32(34).string(e.ads_config_json),
                  null != e.experiments && e.experiments.length)
                )
                  for (var n = 0; n < e.experiments.length; ++n)
                    f.proto.api.KeyValue.encode(e.experiments[n], t.uint32(42).fork()).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigAndroid(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.PurchaseFailureUrl = e.string();
                      break;
                    case 2:
                      r.ads_config = f.proto.api.response.ConfigAndroid.AdsConfig.decode(e, e.uint32());
                      break;
                    case 3:
                      r.update = f.proto.api.response.ConfigAndroid.UpdateConfig.decode(e, e.uint32());
                      break;
                    case 4:
                      r.ads_config_json = e.string();
                      break;
                    case 5:
                      (r.experiments && r.experiments.length) || (r.experiments = []),
                        r.experiments.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.PurchaseFailureUrl && e.hasOwnProperty("PurchaseFailureUrl") && !l.isString(e.PurchaseFailureUrl))
                  return "PurchaseFailureUrl: string expected";
                if (
                  null != e.ads_config &&
                  e.hasOwnProperty("ads_config") &&
                  (n = f.proto.api.response.ConfigAndroid.AdsConfig.verify(e.ads_config))
                )
                  return "ads_config." + n;
                if (
                  null != e.update &&
                  e.hasOwnProperty("update") &&
                  (n = f.proto.api.response.ConfigAndroid.UpdateConfig.verify(e.update))
                )
                  return "update." + n;
                if (null != e.ads_config_json && e.hasOwnProperty("ads_config_json") && !l.isString(e.ads_config_json))
                  return "ads_config_json: string expected";
                if (null != e.experiments && e.hasOwnProperty("experiments")) {
                  if (!Array.isArray(e.experiments)) return "experiments: array expected";
                  for (var t = 0; t < e.experiments.length; ++t) {
                    var n;
                    if ((n = f.proto.api.KeyValue.verify(e.experiments[t]))) return "experiments." + n;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.ConfigAndroid) return e;
                var t = new f.proto.api.response.ConfigAndroid();
                if ((null != e.PurchaseFailureUrl && (t.PurchaseFailureUrl = String(e.PurchaseFailureUrl)), null != e.ads_config)) {
                  if ("object" != typeof e.ads_config) throw TypeError(".proto.api.response.ConfigAndroid.ads_config: object expected");
                  t.ads_config = f.proto.api.response.ConfigAndroid.AdsConfig.fromObject(e.ads_config);
                }
                if (null != e.update) {
                  if ("object" != typeof e.update) throw TypeError(".proto.api.response.ConfigAndroid.update: object expected");
                  t.update = f.proto.api.response.ConfigAndroid.UpdateConfig.fromObject(e.update);
                }
                if ((null != e.ads_config_json && (t.ads_config_json = String(e.ads_config_json)), e.experiments)) {
                  if (!Array.isArray(e.experiments)) throw TypeError(".proto.api.response.ConfigAndroid.experiments: array expected");
                  t.experiments = [];
                  for (var n = 0; n < e.experiments.length; ++n) {
                    if ("object" != typeof e.experiments[n])
                      throw TypeError(".proto.api.response.ConfigAndroid.experiments: object expected");
                    t.experiments[n] = f.proto.api.KeyValue.fromObject(e.experiments[n]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && (n.experiments = []),
                  t.defaults && ((n.PurchaseFailureUrl = ""), (n.ads_config = null), (n.update = null), (n.ads_config_json = "")),
                  null != e.PurchaseFailureUrl && e.hasOwnProperty("PurchaseFailureUrl") && (n.PurchaseFailureUrl = e.PurchaseFailureUrl),
                  null != e.ads_config &&
                    e.hasOwnProperty("ads_config") &&
                    (n.ads_config = f.proto.api.response.ConfigAndroid.AdsConfig.toObject(e.ads_config, t)),
                  null != e.update &&
                    e.hasOwnProperty("update") &&
                    (n.update = f.proto.api.response.ConfigAndroid.UpdateConfig.toObject(e.update, t)),
                  null != e.ads_config_json && e.hasOwnProperty("ads_config_json") && (n.ads_config_json = e.ads_config_json),
                  e.experiments && e.experiments.length)
                ) {
                  n.experiments = [];
                  for (var r = 0; r < e.experiments.length; ++r) n.experiments[r] = f.proto.api.KeyValue.toObject(e.experiments[r], t);
                }
                return n;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.AdsConfig = (function () {
                function e(e) {
                  if (((this.events_list = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ads_interval = 0),
                  (e.prototype.latitude = 0),
                  (e.prototype.longtitude = 0),
                  (e.prototype.events_list = l.emptyArray),
                  (e.prototype.webview_unsage_uri = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = p.create()),
                      t.uint32(8).uint32(e.ads_interval),
                      t.uint32(17).double(e.latitude),
                      t.uint32(25).double(e.longtitude),
                      null != e.events_list && e.events_list.length)
                    )
                      for (var n = 0; n < e.events_list.length; ++n)
                        f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.encode(e.events_list[n], t.uint32(34).fork()).ldelim();
                    return (
                      null != e.webview_unsage_uri &&
                        Object.hasOwnProperty.call(e, "webview_unsage_uri") &&
                        t.uint32(42).string(e.webview_unsage_uri),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigAndroid.AdsConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.ads_interval = e.uint32();
                          break;
                        case 2:
                          r.latitude = e.double();
                          break;
                        case 3:
                          r.longtitude = e.double();
                          break;
                        case 4:
                          (r.events_list && r.events_list.length) || (r.events_list = []),
                            r.events_list.push(f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.decode(e, e.uint32()));
                          break;
                        case 5:
                          r.webview_unsage_uri = e.string();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    if (!r.hasOwnProperty("ads_interval")) throw l.ProtocolError("missing required 'ads_interval'", { instance: r });
                    if (!r.hasOwnProperty("latitude")) throw l.ProtocolError("missing required 'latitude'", { instance: r });
                    if (!r.hasOwnProperty("longtitude")) throw l.ProtocolError("missing required 'longtitude'", { instance: r });
                    return r;
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e) return "object expected";
                    if (!l.isInteger(e.ads_interval)) return "ads_interval: integer expected";
                    if ("number" != typeof e.latitude) return "latitude: number expected";
                    if ("number" != typeof e.longtitude) return "longtitude: number expected";
                    if (null != e.events_list && e.hasOwnProperty("events_list")) {
                      if (!Array.isArray(e.events_list)) return "events_list: array expected";
                      for (var t = 0; t < e.events_list.length; ++t) {
                        var n = f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.verify(e.events_list[t]);
                        if (n) return "events_list." + n;
                      }
                    }
                    return null != e.webview_unsage_uri && e.hasOwnProperty("webview_unsage_uri") && !l.isString(e.webview_unsage_uri)
                      ? "webview_unsage_uri: string expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.ConfigAndroid.AdsConfig) return e;
                    var t = new f.proto.api.response.ConfigAndroid.AdsConfig();
                    if (
                      (null != e.ads_interval && (t.ads_interval = e.ads_interval >>> 0),
                      null != e.latitude && (t.latitude = Number(e.latitude)),
                      null != e.longtitude && (t.longtitude = Number(e.longtitude)),
                      e.events_list)
                    ) {
                      if (!Array.isArray(e.events_list))
                        throw TypeError(".proto.api.response.ConfigAndroid.AdsConfig.events_list: array expected");
                      t.events_list = [];
                      for (var n = 0; n < e.events_list.length; ++n) {
                        if ("object" != typeof e.events_list[n])
                          throw TypeError(".proto.api.response.ConfigAndroid.AdsConfig.events_list: object expected");
                        t.events_list[n] = f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.fromObject(e.events_list[n]);
                      }
                    }
                    return null != e.webview_unsage_uri && (t.webview_unsage_uri = String(e.webview_unsage_uri)), t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.events_list = []),
                      t.defaults && ((n.ads_interval = 0), (n.latitude = 0), (n.longtitude = 0), (n.webview_unsage_uri = "")),
                      null != e.ads_interval && e.hasOwnProperty("ads_interval") && (n.ads_interval = e.ads_interval),
                      null != e.latitude &&
                        e.hasOwnProperty("latitude") &&
                        (n.latitude = t.json && !isFinite(e.latitude) ? String(e.latitude) : e.latitude),
                      null != e.longtitude &&
                        e.hasOwnProperty("longtitude") &&
                        (n.longtitude = t.json && !isFinite(e.longtitude) ? String(e.longtitude) : e.longtitude),
                      e.events_list && e.events_list.length)
                    ) {
                      n.events_list = [];
                      for (var r = 0; r < e.events_list.length; ++r)
                        n.events_list[r] = f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.toObject(e.events_list[r], t);
                    }
                    return (
                      null != e.webview_unsage_uri &&
                        e.hasOwnProperty("webview_unsage_uri") &&
                        (n.webview_unsage_uri = e.webview_unsage_uri),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  (e.AdAction = (function () {
                    function e(e) {
                      if (((this.app_list = []), e))
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    var t, n;
                    return (
                      (e.prototype.placement_type = 8),
                      (e.prototype.provider = 0),
                      (e.prototype.placement_id = ""),
                      (e.prototype.log = ""),
                      (e.prototype.app_list = l.emptyArray),
                      (e.create = function (t) {
                        return new e(t);
                      }),
                      (e.encode = function (e, t) {
                        if (
                          (t || (t = p.create()),
                          t.uint32(8).int32(e.placement_type),
                          t.uint32(24).uint32(e.provider),
                          t.uint32(34).string(e.placement_id),
                          t.uint32(42).string(e.log),
                          null != e.app_list && e.app_list.length)
                        )
                          for (var n = 0; n < e.app_list.length; ++n) t.uint32(50).string(e.app_list[n]);
                        return t;
                      }),
                      (e.decode = function (e, t) {
                        e instanceof c || (e = c.create(e));
                        for (
                          var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigAndroid.AdsConfig.AdAction();
                          e.pos < n;

                        ) {
                          var o = e.uint32();
                          switch (o >>> 3) {
                            case 1:
                              r.placement_type = e.int32();
                              break;
                            case 3:
                              r.provider = e.uint32();
                              break;
                            case 4:
                              r.placement_id = e.string();
                              break;
                            case 5:
                              r.log = e.string();
                              break;
                            case 6:
                              (r.app_list && r.app_list.length) || (r.app_list = []), r.app_list.push(e.string());
                              break;
                            default:
                              e.skipType(7 & o);
                          }
                        }
                        if (!r.hasOwnProperty("placement_type"))
                          throw l.ProtocolError("missing required 'placement_type'", { instance: r });
                        if (!r.hasOwnProperty("provider")) throw l.ProtocolError("missing required 'provider'", { instance: r });
                        if (!r.hasOwnProperty("placement_id")) throw l.ProtocolError("missing required 'placement_id'", { instance: r });
                        if (!r.hasOwnProperty("log")) throw l.ProtocolError("missing required 'log'", { instance: r });
                        return r;
                      }),
                      (e.verify = function (e) {
                        if ("object" != typeof e || null === e) return "object expected";
                        switch (e.placement_type) {
                          default:
                            return "placement_type: enum value expected";
                          case 8:
                          case 13:
                          case 14:
                          case 16:
                          case 30:
                          case 31:
                        }
                        if (!l.isInteger(e.provider)) return "provider: integer expected";
                        if (!l.isString(e.placement_id)) return "placement_id: string expected";
                        if (!l.isString(e.log)) return "log: string expected";
                        if (null != e.app_list && e.hasOwnProperty("app_list")) {
                          if (!Array.isArray(e.app_list)) return "app_list: array expected";
                          for (var t = 0; t < e.app_list.length; ++t) if (!l.isString(e.app_list[t])) return "app_list: string[] expected";
                        }
                        return null;
                      }),
                      (e.fromObject = function (e) {
                        if (e instanceof f.proto.api.response.ConfigAndroid.AdsConfig.AdAction) return e;
                        var t = new f.proto.api.response.ConfigAndroid.AdsConfig.AdAction();
                        switch (e.placement_type) {
                          case "CONNECTED":
                          case 8:
                            t.placement_type = 8;
                            break;
                          case "MANUAL_CONNECT_ATTEMPT":
                          case 13:
                            t.placement_type = 13;
                            break;
                          case "MANUAL_DISCONNECT_ATTEMPT":
                          case 14:
                            t.placement_type = 14;
                            break;
                          case "APP_FOREGROUND":
                          case 16:
                            t.placement_type = 16;
                            break;
                          case "LOCK_SCREEN":
                          case 30:
                            t.placement_type = 30;
                            break;
                          case "CHARGE_SCREEN":
                          case 31:
                            t.placement_type = 31;
                        }
                        if (
                          (null != e.provider && (t.provider = e.provider >>> 0),
                          null != e.placement_id && (t.placement_id = String(e.placement_id)),
                          null != e.log && (t.log = String(e.log)),
                          e.app_list)
                        ) {
                          if (!Array.isArray(e.app_list))
                            throw TypeError(".proto.api.response.ConfigAndroid.AdsConfig.AdAction.app_list: array expected");
                          t.app_list = [];
                          for (var n = 0; n < e.app_list.length; ++n) t.app_list[n] = String(e.app_list[n]);
                        }
                        return t;
                      }),
                      (e.toObject = function (e, t) {
                        t || (t = {});
                        var n = {};
                        if (
                          ((t.arrays || t.defaults) && (n.app_list = []),
                          t.defaults &&
                            ((n.placement_type = t.enums === String ? "CONNECTED" : 8),
                            (n.provider = 0),
                            (n.placement_id = ""),
                            (n.log = "")),
                          null != e.placement_type &&
                            e.hasOwnProperty("placement_type") &&
                            (n.placement_type =
                              t.enums === String
                                ? f.proto.api.response.ConfigAndroid.AdsConfig.AdAction.PlacementType[e.placement_type]
                                : e.placement_type),
                          null != e.provider && e.hasOwnProperty("provider") && (n.provider = e.provider),
                          null != e.placement_id && e.hasOwnProperty("placement_id") && (n.placement_id = e.placement_id),
                          null != e.log && e.hasOwnProperty("log") && (n.log = e.log),
                          e.app_list && e.app_list.length)
                        ) {
                          n.app_list = [];
                          for (var r = 0; r < e.app_list.length; ++r) n.app_list[r] = e.app_list[r];
                        }
                        return n;
                      }),
                      (e.prototype.toJSON = function () {
                        return this.constructor.toObject(this, u.util.toJSONOptions);
                      }),
                      (e.PlacementType =
                        ((t = {}),
                        ((n = Object.create(t))[(t[8] = "CONNECTED")] = 8),
                        (n[(t[13] = "MANUAL_CONNECT_ATTEMPT")] = 13),
                        (n[(t[14] = "MANUAL_DISCONNECT_ATTEMPT")] = 14),
                        (n[(t[16] = "APP_FOREGROUND")] = 16),
                        (n[(t[30] = "LOCK_SCREEN")] = 30),
                        (n[(t[31] = "CHARGE_SCREEN")] = 31),
                        n)),
                      e
                    );
                  })()),
                  e
                );
              })()),
              (e.UpdateConfig = (function () {
                function e(e) {
                  if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.available = 0),
                  (e.prototype.required = 0),
                  (e.prototype.url = ""),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = p.create()),
                      null != e.available && Object.hasOwnProperty.call(e, "available") && t.uint32(8).uint32(e.available),
                      null != e.required && Object.hasOwnProperty.call(e, "required") && t.uint32(16).uint32(e.required),
                      null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(26).string(e.url),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof c || (e = c.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigAndroid.UpdateConfig(); e.pos < n; ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          r.available = e.uint32();
                          break;
                        case 2:
                          r.required = e.uint32();
                          break;
                        case 3:
                          r.url = e.string();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return r;
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.available && e.hasOwnProperty("available") && !l.isInteger(e.available)
                      ? "available: integer expected"
                      : null != e.required && e.hasOwnProperty("required") && !l.isInteger(e.required)
                      ? "required: integer expected"
                      : null != e.url && e.hasOwnProperty("url") && !l.isString(e.url)
                      ? "url: string expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof f.proto.api.response.ConfigAndroid.UpdateConfig) return e;
                    var t = new f.proto.api.response.ConfigAndroid.UpdateConfig();
                    return (
                      null != e.available && (t.available = e.available >>> 0),
                      null != e.required && (t.required = e.required >>> 0),
                      null != e.url && (t.url = String(e.url)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && ((n.available = 0), (n.required = 0), (n.url = "")),
                      null != e.available && e.hasOwnProperty("available") && (n.available = e.available),
                      null != e.required && e.hasOwnProperty("required") && (n.required = e.required),
                      null != e.url && e.hasOwnProperty("url") && (n.url = e.url),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(this, u.util.toJSONOptions);
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (o.ConfigWindows = (function () {
            function e(e) {
              if (((this.experiments = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.is_trialware_feature_enabled = !1),
              (e.prototype.experiments = l.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = p.create()),
                  null != e.is_trialware_feature_enabled &&
                    Object.hasOwnProperty.call(e, "is_trialware_feature_enabled") &&
                    t.uint32(8).bool(e.is_trialware_feature_enabled),
                  null != e.experiments && e.experiments.length)
                )
                  for (var n = 0; n < e.experiments.length; ++n)
                    f.proto.api.KeyValue.encode(e.experiments[n], t.uint32(18).fork()).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.ConfigWindows(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.is_trialware_feature_enabled = e.bool();
                      break;
                    case 2:
                      (r.experiments && r.experiments.length) || (r.experiments = []),
                        r.experiments.push(f.proto.api.KeyValue.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (
                  null != e.is_trialware_feature_enabled &&
                  e.hasOwnProperty("is_trialware_feature_enabled") &&
                  "boolean" != typeof e.is_trialware_feature_enabled
                )
                  return "is_trialware_feature_enabled: boolean expected";
                if (null != e.experiments && e.hasOwnProperty("experiments")) {
                  if (!Array.isArray(e.experiments)) return "experiments: array expected";
                  for (var t = 0; t < e.experiments.length; ++t) {
                    var n = f.proto.api.KeyValue.verify(e.experiments[t]);
                    if (n) return "experiments." + n;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.ConfigWindows) return e;
                var t = new f.proto.api.response.ConfigWindows();
                if (
                  (null != e.is_trialware_feature_enabled && (t.is_trialware_feature_enabled = Boolean(e.is_trialware_feature_enabled)),
                  e.experiments)
                ) {
                  if (!Array.isArray(e.experiments)) throw TypeError(".proto.api.response.ConfigWindows.experiments: array expected");
                  t.experiments = [];
                  for (var n = 0; n < e.experiments.length; ++n) {
                    if ("object" != typeof e.experiments[n])
                      throw TypeError(".proto.api.response.ConfigWindows.experiments: object expected");
                    t.experiments[n] = f.proto.api.KeyValue.fromObject(e.experiments[n]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                if (
                  ((t.arrays || t.defaults) && (n.experiments = []),
                  t.defaults && (n.is_trialware_feature_enabled = !1),
                  null != e.is_trialware_feature_enabled &&
                    e.hasOwnProperty("is_trialware_feature_enabled") &&
                    (n.is_trialware_feature_enabled = e.is_trialware_feature_enabled),
                  e.experiments && e.experiments.length)
                ) {
                  n.experiments = [];
                  for (var r = 0; r < e.experiments.length; ++r) n.experiments[r] = f.proto.api.KeyValue.toObject(e.experiments[r], t);
                }
                return n;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.DeviceTag = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.DeviceTag(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.DeviceTag) return e;
                var t = new f.proto.api.response.DeviceTag();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.DeviceTag.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.DownloadAppEmailSignup = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.DownloadAppEmailSignup(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.DownloadAppEmailSignup) return e;
                var t = new f.proto.api.response.DownloadAppEmailSignup();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.DownloadAppEmailSignup.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Error = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Error(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Error) return e;
                var t = new f.proto.api.response.Error();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Error.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.IosBetaSignUp = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.IosBetaSignUp(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.IosBetaSignUp) return e;
                var t = new f.proto.api.response.IosBetaSignUp();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.IosBetaSignUp.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.KochavaData = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.raw_data = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.raw_data && Object.hasOwnProperty.call(e, "raw_data") && t.uint32(18).string(e.raw_data),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.KochavaData(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.raw_data = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t
                  ? "ResponseStatus." + t
                  : null != e.raw_data && e.hasOwnProperty("raw_data") && !l.isString(e.raw_data)
                  ? "raw_data: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.KochavaData) return e;
                var t = new f.proto.api.response.KochavaData();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.KochavaData.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return null != e.raw_data && (t.raw_data = String(e.raw_data)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.raw_data = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.raw_data && e.hasOwnProperty("raw_data") && (n.raw_data = e.raw_data),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Purchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t, n;
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.already_processed = !1),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.prototype.purchase_status = 1),
              (e.prototype.upsell_data = null),
              (e.prototype.transaction_id = ""),
              (e.prototype.decline_reason = 0),
              (e.prototype.wl_id = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.already_processed &&
                    Object.hasOwnProperty.call(e, "already_processed") &&
                    t.uint32(16).bool(e.already_processed),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(26).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(34).string(e.token),
                  null != e.purchase_status && Object.hasOwnProperty.call(e, "purchase_status") && t.uint32(40).int32(e.purchase_status),
                  null != e.upsell_data &&
                    Object.hasOwnProperty.call(e, "upsell_data") &&
                    f.proto.api.UpsellData.encode(e.upsell_data, t.uint32(50).fork()).ldelim(),
                  null != e.transaction_id && Object.hasOwnProperty.call(e, "transaction_id") && t.uint32(58).string(e.transaction_id),
                  null != e.decline_reason && Object.hasOwnProperty.call(e, "decline_reason") && t.uint32(64).uint32(e.decline_reason),
                  null != e.wl_id && Object.hasOwnProperty.call(e, "wl_id") && t.uint32(74).string(e.wl_id),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Purchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.already_processed = e.bool();
                      break;
                    case 3:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 4:
                      r.token = e.string();
                      break;
                    case 5:
                      r.purchase_status = e.int32();
                      break;
                    case 6:
                      r.upsell_data = f.proto.api.UpsellData.decode(e, e.uint32());
                      break;
                    case 7:
                      r.transaction_id = e.string();
                      break;
                    case 8:
                      r.decline_reason = e.uint32();
                      break;
                    case 9:
                      r.wl_id = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t;
                if ((t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))) return "ResponseStatus." + t;
                if (null != e.already_processed && e.hasOwnProperty("already_processed") && "boolean" != typeof e.already_processed)
                  return "already_processed: boolean expected";
                if (null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus)))
                  return "UserStatus." + t;
                if (null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)) return "token: string expected";
                if (null != e.purchase_status && e.hasOwnProperty("purchase_status"))
                  switch (e.purchase_status) {
                    default:
                      return "purchase_status: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                  }
                return null != e.upsell_data && e.hasOwnProperty("upsell_data") && (t = f.proto.api.UpsellData.verify(e.upsell_data))
                  ? "upsell_data." + t
                  : null != e.transaction_id && e.hasOwnProperty("transaction_id") && !l.isString(e.transaction_id)
                  ? "transaction_id: string expected"
                  : null != e.decline_reason && e.hasOwnProperty("decline_reason") && !l.isInteger(e.decline_reason)
                  ? "decline_reason: integer expected"
                  : null != e.wl_id && e.hasOwnProperty("wl_id") && !l.isString(e.wl_id)
                  ? "wl_id: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Purchase) return e;
                var t = new f.proto.api.response.Purchase();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Purchase.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if ((null != e.already_processed && (t.already_processed = Boolean(e.already_processed)), null != e.UserStatus)) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Purchase.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                switch ((null != e.token && (t.token = String(e.token)), e.purchase_status)) {
                  case "SUCCESS":
                  case 1:
                    t.purchase_status = 1;
                    break;
                  case "DECLINE":
                  case 2:
                    t.purchase_status = 2;
                    break;
                  case "DECLINE_SECOND_OPTIN":
                  case 3:
                    t.purchase_status = 3;
                    break;
                  case "ADDRESS_REQUESTED":
                  case 4:
                    t.purchase_status = 4;
                    break;
                  case "ERROR":
                  case 5:
                    t.purchase_status = 5;
                    break;
                  case "NO_PLAN":
                  case 6:
                    t.purchase_status = 6;
                    break;
                  case "PLAN_NOT_FOUND":
                  case 7:
                    t.purchase_status = 7;
                    break;
                  case "NO_CC_DATA":
                  case 8:
                    t.purchase_status = 8;
                    break;
                  case "BAD_EMAIL":
                  case 9:
                    t.purchase_status = 9;
                    break;
                  case "BAD_CC_NUM":
                  case 10:
                    t.purchase_status = 10;
                    break;
                  case "BAD_CC_CVN":
                  case 11:
                    t.purchase_status = 11;
                    break;
                  case "BAD_CC_HOLDER_NAME":
                  case 12:
                    t.purchase_status = 12;
                    break;
                  case "BAD_CC_EXP_YEAR":
                  case 13:
                    t.purchase_status = 13;
                    break;
                  case "BAD_CC_EXP_MONTH":
                  case 14:
                    t.purchase_status = 14;
                    break;
                  case "RESTRICTED_COUNTRY":
                  case 15:
                    t.purchase_status = 15;
                    break;
                  case "BAD_ZIP":
                  case 16:
                    t.purchase_status = 16;
                }
                if (null != e.upsell_data) {
                  if ("object" != typeof e.upsell_data) throw TypeError(".proto.api.response.Purchase.upsell_data: object expected");
                  t.upsell_data = f.proto.api.UpsellData.fromObject(e.upsell_data);
                }
                return (
                  null != e.transaction_id && (t.transaction_id = String(e.transaction_id)),
                  null != e.decline_reason && (t.decline_reason = e.decline_reason >>> 0),
                  null != e.wl_id && (t.wl_id = String(e.wl_id)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.ResponseStatus = null),
                    (n.already_processed = !1),
                    (n.UserStatus = null),
                    (n.token = ""),
                    (n.purchase_status = t.enums === String ? "SUCCESS" : 1),
                    (n.upsell_data = null),
                    (n.transaction_id = ""),
                    (n.decline_reason = 0),
                    (n.wl_id = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.already_processed && e.hasOwnProperty("already_processed") && (n.already_processed = e.already_processed),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  null != e.purchase_status &&
                    e.hasOwnProperty("purchase_status") &&
                    (n.purchase_status =
                      t.enums === String ? f.proto.api.response.Purchase.PurchaseStatus[e.purchase_status] : e.purchase_status),
                  null != e.upsell_data &&
                    e.hasOwnProperty("upsell_data") &&
                    (n.upsell_data = f.proto.api.UpsellData.toObject(e.upsell_data, t)),
                  null != e.transaction_id && e.hasOwnProperty("transaction_id") && (n.transaction_id = e.transaction_id),
                  null != e.decline_reason && e.hasOwnProperty("decline_reason") && (n.decline_reason = e.decline_reason),
                  null != e.wl_id && e.hasOwnProperty("wl_id") && (n.wl_id = e.wl_id),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.PurchaseStatus =
                ((t = {}),
                ((n = Object.create(t))[(t[1] = "SUCCESS")] = 1),
                (n[(t[2] = "DECLINE")] = 2),
                (n[(t[3] = "DECLINE_SECOND_OPTIN")] = 3),
                (n[(t[4] = "ADDRESS_REQUESTED")] = 4),
                (n[(t[5] = "ERROR")] = 5),
                (n[(t[6] = "NO_PLAN")] = 6),
                (n[(t[7] = "PLAN_NOT_FOUND")] = 7),
                (n[(t[8] = "NO_CC_DATA")] = 8),
                (n[(t[9] = "BAD_EMAIL")] = 9),
                (n[(t[10] = "BAD_CC_NUM")] = 10),
                (n[(t[11] = "BAD_CC_CVN")] = 11),
                (n[(t[12] = "BAD_CC_HOLDER_NAME")] = 12),
                (n[(t[13] = "BAD_CC_EXP_YEAR")] = 13),
                (n[(t[14] = "BAD_CC_EXP_MONTH")] = 14),
                (n[(t[15] = "RESTRICTED_COUNTRY")] = 15),
                (n[(t[16] = "BAD_ZIP")] = 16),
                n)),
              e
            );
          })()),
          (o.PushToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.PushToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.PushToken) return e;
                var t = new f.proto.api.response.PushToken();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.PushToken.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Redeem = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Redeem(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Redeem) return e;
                var t = new f.proto.api.response.Redeem();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Redeem.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Redeem.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.RestorePassword = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.RestorePassword(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.RestorePassword) return e;
                var t = new f.proto.api.response.RestorePassword();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.RestorePassword.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.RestorePurchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.RestorePurchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.RestorePurchase) return e;
                var t = new f.proto.api.response.RestorePurchase();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.RestorePurchase.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.RestorePurchase.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.SD = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.raw_data = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.raw_data && Object.hasOwnProperty.call(e, "raw_data") && t.uint32(18).string(e.raw_data),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.SD(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.raw_data = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t
                  ? "ResponseStatus." + t
                  : null != e.raw_data && e.hasOwnProperty("raw_data") && !l.isString(e.raw_data)
                  ? "raw_data: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.SD) return e;
                var t = new f.proto.api.response.SD();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.SD.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return null != e.raw_data && (t.raw_data = String(e.raw_data)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.raw_data = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.raw_data && e.hasOwnProperty("raw_data") && (n.raw_data = e.raw_data),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.SelfPush = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.SelfPush(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.SelfPush) return e;
                var t = new f.proto.api.response.SelfPush();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.SelfPush.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Signin = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Signin(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Signin) return e;
                var t = new f.proto.api.response.Signin();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Signin.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Signin.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.SignInByMagicLink = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return t || (t = p.create()), f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(), t;
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.SignInByMagicLink(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t ? "ResponseStatus." + t : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.SignInByMagicLink) return e;
                var t = new f.proto.api.response.SignInByMagicLink();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.SignInByMagicLink.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && (n.ResponseStatus = null),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.SigninWithToken = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.SigninWithToken(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.SigninWithToken) return e;
                var t = new f.proto.api.response.SigninWithToken();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.SigninWithToken.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.SigninWithToken.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Signout = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Signout(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Signout) return e;
                var t = new f.proto.api.response.Signout();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Signout.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Signout.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Signup = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Signup(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Signup) return e;
                var t = new f.proto.api.response.Signup();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Signup.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Signup.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.SignupMultiDevice = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.SignupMultiDevice(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.SignupMultiDevice) return e;
                var t = new f.proto.api.response.SignupMultiDevice();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.SignupMultiDevice.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.SignupMultiDevice.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                return null != e.token && (t.token = String(e.token)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.UserStatus = null), (n.token = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.Status = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.token = ""),
              (e.prototype.client_cache = ""),
              (e.prototype.wl_id = ""),
              (e.prototype.proxy_params = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(26).string(e.token),
                  null != e.client_cache && Object.hasOwnProperty.call(e, "client_cache") && t.uint32(34).string(e.client_cache),
                  null != e.wl_id && Object.hasOwnProperty.call(e, "wl_id") && t.uint32(42).string(e.wl_id),
                  null != e.proxy_params &&
                    Object.hasOwnProperty.call(e, "proxy_params") &&
                    f.proto.api.ProxyParams.encode(e.proxy_params, t.uint32(50).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.Status(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.token = e.string();
                      break;
                    case 4:
                      r.client_cache = e.string();
                      break;
                    case 5:
                      r.wl_id = e.string();
                      break;
                    case 6:
                      r.proxy_params = f.proto.api.ProxyParams.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                return "object" != typeof e || null === e
                  ? "object expected"
                  : (t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))
                  ? "ResponseStatus." + t
                  : null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus))
                  ? "UserStatus." + t
                  : null != e.token && e.hasOwnProperty("token") && !l.isString(e.token)
                  ? "token: string expected"
                  : null != e.client_cache && e.hasOwnProperty("client_cache") && !l.isString(e.client_cache)
                  ? "client_cache: string expected"
                  : null != e.wl_id && e.hasOwnProperty("wl_id") && !l.isString(e.wl_id)
                  ? "wl_id: string expected"
                  : null != e.proxy_params && e.hasOwnProperty("proxy_params") && (t = f.proto.api.ProxyParams.verify(e.proxy_params))
                  ? "proxy_params." + t
                  : null;
                var t;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.Status) return e;
                var t = new f.proto.api.response.Status();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus) throw TypeError(".proto.api.response.Status.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.Status.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                if (
                  (null != e.token && (t.token = String(e.token)),
                  null != e.client_cache && (t.client_cache = String(e.client_cache)),
                  null != e.wl_id && (t.wl_id = String(e.wl_id)),
                  null != e.proxy_params)
                ) {
                  if ("object" != typeof e.proxy_params) throw TypeError(".proto.api.response.Status.proxy_params: object expected");
                  t.proxy_params = f.proto.api.ProxyParams.fromObject(e.proxy_params);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.ResponseStatus = null),
                    (n.UserStatus = null),
                    (n.token = ""),
                    (n.client_cache = ""),
                    (n.wl_id = ""),
                    (n.proxy_params = null)),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.token && e.hasOwnProperty("token") && (n.token = e.token),
                  null != e.client_cache && e.hasOwnProperty("client_cache") && (n.client_cache = e.client_cache),
                  null != e.wl_id && e.hasOwnProperty("wl_id") && (n.wl_id = e.wl_id),
                  null != e.proxy_params &&
                    e.hasOwnProperty("proxy_params") &&
                    (n.proxy_params = f.proto.api.ProxyParams.toObject(e.proxy_params, t)),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          (o.UpsellPurchase = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t, n;
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.UserStatus = null),
              (e.prototype.purchase_status = 1),
              (e.prototype.next_upsell_data = null),
              (e.prototype.transaction_id = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  null != e.UserStatus &&
                    Object.hasOwnProperty.call(e, "UserStatus") &&
                    f.proto.api.UserStatus.encode(e.UserStatus, t.uint32(18).fork()).ldelim(),
                  null != e.purchase_status && Object.hasOwnProperty.call(e, "purchase_status") && t.uint32(24).int32(e.purchase_status),
                  null != e.next_upsell_data &&
                    Object.hasOwnProperty.call(e, "next_upsell_data") &&
                    f.proto.api.UpsellData.encode(e.next_upsell_data, t.uint32(34).fork()).ldelim(),
                  null != e.transaction_id && Object.hasOwnProperty.call(e, "transaction_id") && t.uint32(42).string(e.transaction_id),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.UpsellPurchase(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.UserStatus = f.proto.api.UserStatus.decode(e, e.uint32());
                      break;
                    case 3:
                      r.purchase_status = e.int32();
                      break;
                    case 4:
                      r.next_upsell_data = f.proto.api.UpsellData.decode(e, e.uint32());
                      break;
                    case 5:
                      r.transaction_id = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t;
                if ((t = f.proto.api.ResponseStatus.verify(e.ResponseStatus))) return "ResponseStatus." + t;
                if (null != e.UserStatus && e.hasOwnProperty("UserStatus") && (t = f.proto.api.UserStatus.verify(e.UserStatus)))
                  return "UserStatus." + t;
                if (null != e.purchase_status && e.hasOwnProperty("purchase_status"))
                  switch (e.purchase_status) {
                    default:
                      return "purchase_status: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                  }
                return null != e.next_upsell_data &&
                  e.hasOwnProperty("next_upsell_data") &&
                  (t = f.proto.api.UpsellData.verify(e.next_upsell_data))
                  ? "next_upsell_data." + t
                  : null != e.transaction_id && e.hasOwnProperty("transaction_id") && !l.isString(e.transaction_id)
                  ? "transaction_id: string expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.UpsellPurchase) return e;
                var t = new f.proto.api.response.UpsellPurchase();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.UpsellPurchase.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                if (null != e.UserStatus) {
                  if ("object" != typeof e.UserStatus) throw TypeError(".proto.api.response.UpsellPurchase.UserStatus: object expected");
                  t.UserStatus = f.proto.api.UserStatus.fromObject(e.UserStatus);
                }
                switch (e.purchase_status) {
                  case "PURCHASED":
                  case 1:
                    t.purchase_status = 1;
                    break;
                  case "SKIPPED":
                  case 2:
                    t.purchase_status = 2;
                    break;
                  case "ERROR":
                  case 3:
                    t.purchase_status = 3;
                }
                if (null != e.next_upsell_data) {
                  if ("object" != typeof e.next_upsell_data)
                    throw TypeError(".proto.api.response.UpsellPurchase.next_upsell_data: object expected");
                  t.next_upsell_data = f.proto.api.UpsellData.fromObject(e.next_upsell_data);
                }
                return null != e.transaction_id && (t.transaction_id = String(e.transaction_id)), t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults &&
                    ((n.ResponseStatus = null),
                    (n.UserStatus = null),
                    (n.purchase_status = t.enums === String ? "PURCHASED" : 1),
                    (n.next_upsell_data = null),
                    (n.transaction_id = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.UserStatus &&
                    e.hasOwnProperty("UserStatus") &&
                    (n.UserStatus = f.proto.api.UserStatus.toObject(e.UserStatus, t)),
                  null != e.purchase_status &&
                    e.hasOwnProperty("purchase_status") &&
                    (n.purchase_status =
                      t.enums === String ? f.proto.api.response.UpsellPurchase.PurchaseStatus[e.purchase_status] : e.purchase_status),
                  null != e.next_upsell_data &&
                    e.hasOwnProperty("next_upsell_data") &&
                    (n.next_upsell_data = f.proto.api.UpsellData.toObject(e.next_upsell_data, t)),
                  null != e.transaction_id && e.hasOwnProperty("transaction_id") && (n.transaction_id = e.transaction_id),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              (e.PurchaseStatus =
                ((t = {}), ((n = Object.create(t))[(t[1] = "PURCHASED")] = 1), (n[(t[2] = "SKIPPED")] = 2), (n[(t[3] = "ERROR")] = 3), n)),
              e
            );
          })()),
          (o.WinStoreAuth = (function () {
            function e(e) {
              if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.ResponseStatus = null),
              (e.prototype.CollectionToken = ""),
              (e.prototype.PurchaseToken = ""),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = p.create()),
                  f.proto.api.ResponseStatus.encode(e.ResponseStatus, t.uint32(10).fork()).ldelim(),
                  t.uint32(18).string(e.CollectionToken),
                  t.uint32(26).string(e.PurchaseToken),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof c || (e = c.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.response.WinStoreAuth(); e.pos < n; ) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      r.ResponseStatus = f.proto.api.ResponseStatus.decode(e, e.uint32());
                      break;
                    case 2:
                      r.CollectionToken = e.string();
                      break;
                    case 3:
                      r.PurchaseToken = e.string();
                      break;
                    default:
                      e.skipType(7 & o);
                  }
                }
                if (!r.hasOwnProperty("ResponseStatus")) throw l.ProtocolError("missing required 'ResponseStatus'", { instance: r });
                if (!r.hasOwnProperty("CollectionToken")) throw l.ProtocolError("missing required 'CollectionToken'", { instance: r });
                if (!r.hasOwnProperty("PurchaseToken")) throw l.ProtocolError("missing required 'PurchaseToken'", { instance: r });
                return r;
              }),
              (e.verify = function (e) {
                if ("object" != typeof e || null === e) return "object expected";
                var t = f.proto.api.ResponseStatus.verify(e.ResponseStatus);
                return t
                  ? "ResponseStatus." + t
                  : l.isString(e.CollectionToken)
                  ? l.isString(e.PurchaseToken)
                    ? null
                    : "PurchaseToken: string expected"
                  : "CollectionToken: string expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof f.proto.api.response.WinStoreAuth) return e;
                var t = new f.proto.api.response.WinStoreAuth();
                if (null != e.ResponseStatus) {
                  if ("object" != typeof e.ResponseStatus)
                    throw TypeError(".proto.api.response.WinStoreAuth.ResponseStatus: object expected");
                  t.ResponseStatus = f.proto.api.ResponseStatus.fromObject(e.ResponseStatus);
                }
                return (
                  null != e.CollectionToken && (t.CollectionToken = String(e.CollectionToken)),
                  null != e.PurchaseToken && (t.PurchaseToken = String(e.PurchaseToken)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var n = {};
                return (
                  t.defaults && ((n.ResponseStatus = null), (n.CollectionToken = ""), (n.PurchaseToken = "")),
                  null != e.ResponseStatus &&
                    e.hasOwnProperty("ResponseStatus") &&
                    (n.ResponseStatus = f.proto.api.ResponseStatus.toObject(e.ResponseStatus, t)),
                  null != e.CollectionToken && e.hasOwnProperty("CollectionToken") && (n.CollectionToken = e.CollectionToken),
                  null != e.PurchaseToken && e.hasOwnProperty("PurchaseToken") && (n.PurchaseToken = e.PurchaseToken),
                  n
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, u.util.toJSONOptions);
              }),
              e
            );
          })()),
          o)),
        (i.ResponseStatus = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.success = !1),
            (e.prototype.error_code = 0),
            (e.prototype.error_message = ""),
            (e.prototype.debug = ""),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                t.uint32(8).bool(e.success),
                null != e.error_code && Object.hasOwnProperty.call(e, "error_code") && t.uint32(16).uint32(e.error_code),
                null != e.error_message && Object.hasOwnProperty.call(e, "error_message") && t.uint32(26).string(e.error_message),
                null != e.debug && Object.hasOwnProperty.call(e, "debug") && t.uint32(34).string(e.debug),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.ResponseStatus(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.success = e.bool();
                    break;
                  case 2:
                    r.error_code = e.uint32();
                    break;
                  case 3:
                    r.error_message = e.string();
                    break;
                  case 4:
                    r.debug = e.string();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("success")) throw l.ProtocolError("missing required 'success'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : "boolean" != typeof e.success
                ? "success: boolean expected"
                : null != e.error_code && e.hasOwnProperty("error_code") && !l.isInteger(e.error_code)
                ? "error_code: integer expected"
                : null != e.error_message && e.hasOwnProperty("error_message") && !l.isString(e.error_message)
                ? "error_message: string expected"
                : null != e.debug && e.hasOwnProperty("debug") && !l.isString(e.debug)
                ? "debug: string expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.ResponseStatus) return e;
              var t = new f.proto.api.ResponseStatus();
              return (
                null != e.success && (t.success = Boolean(e.success)),
                null != e.error_code && (t.error_code = e.error_code >>> 0),
                null != e.error_message && (t.error_message = String(e.error_message)),
                null != e.debug && (t.debug = String(e.debug)),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && ((n.success = !1), (n.error_code = 0), (n.error_message = ""), (n.debug = "")),
                null != e.success && e.hasOwnProperty("success") && (n.success = e.success),
                null != e.error_code && e.hasOwnProperty("error_code") && (n.error_code = e.error_code),
                null != e.error_message && e.hasOwnProperty("error_message") && (n.error_message = e.error_message),
                null != e.debug && e.hasOwnProperty("debug") && (n.debug = e.debug),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Errno =
              ((t = {}),
              ((n = Object.create(t))[(t[1] = "DEVICE_NOT_FOUND")] = 1),
              (n[(t[2] = "USER_NOT_FOUND")] = 2),
              (n[(t[3] = "LICENSE_NOT_FOUND")] = 3),
              (n[(t[4] = "DEVICE_HASH_COLLISION")] = 4),
              (n[(t[5] = "BAD_PURCHASE_RECEIPT")] = 5),
              (n[(t[6] = "GET_LOCK_FAILED")] = 6),
              (n[(t[7] = "ITEM_NOT_FOUND")] = 7),
              (n[(t[10] = "PLATFORM_NOT_SUPPORTED")] = 10),
              (n[(t[11] = "OPERATION_NOT_SUPPORTED")] = 11),
              (n[(t[12] = "UNAUTHORIZED")] = 12),
              (n[(t[13] = "INVALID_INPUT")] = 13),
              (n[(t[14] = "SERVER_INTERNAL")] = 14),
              (n[(t[15] = "BAD_STATE")] = 15),
              (n[(t[16] = "OPERATION_FAILED")] = 16),
              (n[(t[403] = "SIGNIN_FAILED")] = 403),
              (n[(t[405] = "SIGNUP_FAILED")] = 405),
              (n[(t[999] = "UNHANDLED_EXCEPTION")] = 999),
              n)),
            e
          );
        })()),
        (i.BandwidthStatus = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.period_duration_seconds = 0),
            (e.prototype.limit_bytes = 0),
            (e.prototype.consumed_bytes = 0),
            (e.prototype.is_limit_reached = !1),
            (e.prototype.reset_seconds_remaining = 0),
            (e.prototype.reset_seconds_timestamp = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.period_duration_seconds &&
                  Object.hasOwnProperty.call(e, "period_duration_seconds") &&
                  t.uint32(8).uint32(e.period_duration_seconds),
                null != e.limit_bytes && Object.hasOwnProperty.call(e, "limit_bytes") && t.uint32(16).uint64(e.limit_bytes),
                null != e.consumed_bytes && Object.hasOwnProperty.call(e, "consumed_bytes") && t.uint32(24).uint64(e.consumed_bytes),
                null != e.is_limit_reached && Object.hasOwnProperty.call(e, "is_limit_reached") && t.uint32(32).bool(e.is_limit_reached),
                null != e.reset_seconds_remaining &&
                  Object.hasOwnProperty.call(e, "reset_seconds_remaining") &&
                  t.uint32(40).uint32(e.reset_seconds_remaining),
                null != e.reset_seconds_timestamp &&
                  Object.hasOwnProperty.call(e, "reset_seconds_timestamp") &&
                  t.uint32(48).uint32(e.reset_seconds_timestamp),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BandwidthStatus(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.period_duration_seconds = e.uint32();
                    break;
                  case 2:
                    r.limit_bytes = e.uint64();
                    break;
                  case 3:
                    r.consumed_bytes = e.uint64();
                    break;
                  case 4:
                    r.is_limit_reached = e.bool();
                    break;
                  case 5:
                    r.reset_seconds_remaining = e.uint32();
                    break;
                  case 6:
                    r.reset_seconds_timestamp = e.uint32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              return "object" != typeof e || null === e
                ? "object expected"
                : null != e.period_duration_seconds &&
                  e.hasOwnProperty("period_duration_seconds") &&
                  !l.isInteger(e.period_duration_seconds)
                ? "period_duration_seconds: integer expected"
                : null != e.limit_bytes &&
                  e.hasOwnProperty("limit_bytes") &&
                  !(l.isInteger(e.limit_bytes) || (e.limit_bytes && l.isInteger(e.limit_bytes.low) && l.isInteger(e.limit_bytes.high)))
                ? "limit_bytes: integer|Long expected"
                : null != e.consumed_bytes &&
                  e.hasOwnProperty("consumed_bytes") &&
                  !(
                    l.isInteger(e.consumed_bytes) ||
                    (e.consumed_bytes && l.isInteger(e.consumed_bytes.low) && l.isInteger(e.consumed_bytes.high))
                  )
                ? "consumed_bytes: integer|Long expected"
                : null != e.is_limit_reached && e.hasOwnProperty("is_limit_reached") && "boolean" != typeof e.is_limit_reached
                ? "is_limit_reached: boolean expected"
                : null != e.reset_seconds_remaining &&
                  e.hasOwnProperty("reset_seconds_remaining") &&
                  !l.isInteger(e.reset_seconds_remaining)
                ? "reset_seconds_remaining: integer expected"
                : null != e.reset_seconds_timestamp &&
                  e.hasOwnProperty("reset_seconds_timestamp") &&
                  !l.isInteger(e.reset_seconds_timestamp)
                ? "reset_seconds_timestamp: integer expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.BandwidthStatus) return e;
              var t = new f.proto.api.BandwidthStatus();
              return (
                null != e.period_duration_seconds && (t.period_duration_seconds = e.period_duration_seconds >>> 0),
                null != e.limit_bytes &&
                  (l.Long
                    ? ((t.limit_bytes = l.Long.fromValue(e.limit_bytes)).unsigned = !0)
                    : "string" == typeof e.limit_bytes
                    ? (t.limit_bytes = parseInt(e.limit_bytes, 10))
                    : "number" == typeof e.limit_bytes
                    ? (t.limit_bytes = e.limit_bytes)
                    : "object" == typeof e.limit_bytes &&
                      (t.limit_bytes = new l.LongBits(e.limit_bytes.low >>> 0, e.limit_bytes.high >>> 0).toNumber(!0))),
                null != e.consumed_bytes &&
                  (l.Long
                    ? ((t.consumed_bytes = l.Long.fromValue(e.consumed_bytes)).unsigned = !0)
                    : "string" == typeof e.consumed_bytes
                    ? (t.consumed_bytes = parseInt(e.consumed_bytes, 10))
                    : "number" == typeof e.consumed_bytes
                    ? (t.consumed_bytes = e.consumed_bytes)
                    : "object" == typeof e.consumed_bytes &&
                      (t.consumed_bytes = new l.LongBits(e.consumed_bytes.low >>> 0, e.consumed_bytes.high >>> 0).toNumber(!0))),
                null != e.is_limit_reached && (t.is_limit_reached = Boolean(e.is_limit_reached)),
                null != e.reset_seconds_remaining && (t.reset_seconds_remaining = e.reset_seconds_remaining >>> 0),
                null != e.reset_seconds_timestamp && (t.reset_seconds_timestamp = e.reset_seconds_timestamp >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.period_duration_seconds = 0),
                  (n.limit_bytes = 0),
                  (n.consumed_bytes = 0),
                  (n.is_limit_reached = !1),
                  (n.reset_seconds_remaining = 0),
                  (n.reset_seconds_timestamp = 0)),
                null != e.period_duration_seconds &&
                  e.hasOwnProperty("period_duration_seconds") &&
                  (n.period_duration_seconds = e.period_duration_seconds),
                null != e.limit_bytes &&
                  e.hasOwnProperty("limit_bytes") &&
                  ("number" == typeof e.limit_bytes
                    ? (n.limit_bytes = t.longs === String ? String(e.limit_bytes) : e.limit_bytes)
                    : (n.limit_bytes =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.limit_bytes)
                          : t.longs === Number
                          ? new l.LongBits(e.limit_bytes.low >>> 0, e.limit_bytes.high >>> 0).toNumber(!0)
                          : e.limit_bytes)),
                null != e.consumed_bytes &&
                  e.hasOwnProperty("consumed_bytes") &&
                  ("number" == typeof e.consumed_bytes
                    ? (n.consumed_bytes = t.longs === String ? String(e.consumed_bytes) : e.consumed_bytes)
                    : (n.consumed_bytes =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.consumed_bytes)
                          : t.longs === Number
                          ? new l.LongBits(e.consumed_bytes.low >>> 0, e.consumed_bytes.high >>> 0).toNumber(!0)
                          : e.consumed_bytes)),
                null != e.is_limit_reached && e.hasOwnProperty("is_limit_reached") && (n.is_limit_reached = e.is_limit_reached),
                null != e.reset_seconds_remaining &&
                  e.hasOwnProperty("reset_seconds_remaining") &&
                  (n.reset_seconds_remaining = e.reset_seconds_remaining),
                null != e.reset_seconds_timestamp &&
                  e.hasOwnProperty("reset_seconds_timestamp") &&
                  (n.reset_seconds_timestamp = e.reset_seconds_timestamp),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        (i.BandwidthCooldown = (function () {
          function e(e) {
            if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.is_cooldown_feature_enabled = !1),
            (e.prototype.is_cooldown_active = !1),
            (e.prototype.cooldown_minutes = 0),
            (e.prototype.cooldown_start_time = null),
            (e.prototype.data_after_cooldown_bytes = 0),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              return (
                t || (t = p.create()),
                null != e.is_cooldown_feature_enabled &&
                  Object.hasOwnProperty.call(e, "is_cooldown_feature_enabled") &&
                  t.uint32(8).bool(e.is_cooldown_feature_enabled),
                null != e.is_cooldown_active &&
                  Object.hasOwnProperty.call(e, "is_cooldown_active") &&
                  t.uint32(16).bool(e.is_cooldown_active),
                null != e.cooldown_minutes && Object.hasOwnProperty.call(e, "cooldown_minutes") && t.uint32(24).uint32(e.cooldown_minutes),
                null != e.cooldown_start_time &&
                  Object.hasOwnProperty.call(e, "cooldown_start_time") &&
                  f.proto.api.Timestamp.encode(e.cooldown_start_time, t.uint32(34).fork()).ldelim(),
                null != e.data_after_cooldown_bytes &&
                  Object.hasOwnProperty.call(e, "data_after_cooldown_bytes") &&
                  t.uint32(40).uint64(e.data_after_cooldown_bytes),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.proto.api.BandwidthCooldown(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.is_cooldown_feature_enabled = e.bool();
                    break;
                  case 2:
                    r.is_cooldown_active = e.bool();
                    break;
                  case 3:
                    r.cooldown_minutes = e.uint32();
                    break;
                  case 4:
                    r.cooldown_start_time = f.proto.api.Timestamp.decode(e, e.uint32());
                    break;
                  case 5:
                    r.data_after_cooldown_bytes = e.uint64();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (
                null != e.is_cooldown_feature_enabled &&
                e.hasOwnProperty("is_cooldown_feature_enabled") &&
                "boolean" != typeof e.is_cooldown_feature_enabled
              )
                return "is_cooldown_feature_enabled: boolean expected";
              if (null != e.is_cooldown_active && e.hasOwnProperty("is_cooldown_active") && "boolean" != typeof e.is_cooldown_active)
                return "is_cooldown_active: boolean expected";
              if (null != e.cooldown_minutes && e.hasOwnProperty("cooldown_minutes") && !l.isInteger(e.cooldown_minutes))
                return "cooldown_minutes: integer expected";
              if (null != e.cooldown_start_time && e.hasOwnProperty("cooldown_start_time")) {
                var t = f.proto.api.Timestamp.verify(e.cooldown_start_time);
                if (t) return "cooldown_start_time." + t;
              }
              return null != e.data_after_cooldown_bytes &&
                e.hasOwnProperty("data_after_cooldown_bytes") &&
                !(
                  l.isInteger(e.data_after_cooldown_bytes) ||
                  (e.data_after_cooldown_bytes &&
                    l.isInteger(e.data_after_cooldown_bytes.low) &&
                    l.isInteger(e.data_after_cooldown_bytes.high))
                )
                ? "data_after_cooldown_bytes: integer|Long expected"
                : null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.proto.api.BandwidthCooldown) return e;
              var t = new f.proto.api.BandwidthCooldown();
              if (
                (null != e.is_cooldown_feature_enabled && (t.is_cooldown_feature_enabled = Boolean(e.is_cooldown_feature_enabled)),
                null != e.is_cooldown_active && (t.is_cooldown_active = Boolean(e.is_cooldown_active)),
                null != e.cooldown_minutes && (t.cooldown_minutes = e.cooldown_minutes >>> 0),
                null != e.cooldown_start_time)
              ) {
                if ("object" != typeof e.cooldown_start_time)
                  throw TypeError(".proto.api.BandwidthCooldown.cooldown_start_time: object expected");
                t.cooldown_start_time = f.proto.api.Timestamp.fromObject(e.cooldown_start_time);
              }
              return (
                null != e.data_after_cooldown_bytes &&
                  (l.Long
                    ? ((t.data_after_cooldown_bytes = l.Long.fromValue(e.data_after_cooldown_bytes)).unsigned = !0)
                    : "string" == typeof e.data_after_cooldown_bytes
                    ? (t.data_after_cooldown_bytes = parseInt(e.data_after_cooldown_bytes, 10))
                    : "number" == typeof e.data_after_cooldown_bytes
                    ? (t.data_after_cooldown_bytes = e.data_after_cooldown_bytes)
                    : "object" == typeof e.data_after_cooldown_bytes &&
                      (t.data_after_cooldown_bytes = new l.LongBits(
                        e.data_after_cooldown_bytes.low >>> 0,
                        e.data_after_cooldown_bytes.high >>> 0
                      ).toNumber(!0))),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults &&
                  ((n.is_cooldown_feature_enabled = !1),
                  (n.is_cooldown_active = !1),
                  (n.cooldown_minutes = 0),
                  (n.cooldown_start_time = null),
                  (n.data_after_cooldown_bytes = 0)),
                null != e.is_cooldown_feature_enabled &&
                  e.hasOwnProperty("is_cooldown_feature_enabled") &&
                  (n.is_cooldown_feature_enabled = e.is_cooldown_feature_enabled),
                null != e.is_cooldown_active && e.hasOwnProperty("is_cooldown_active") && (n.is_cooldown_active = e.is_cooldown_active),
                null != e.cooldown_minutes && e.hasOwnProperty("cooldown_minutes") && (n.cooldown_minutes = e.cooldown_minutes),
                null != e.cooldown_start_time &&
                  e.hasOwnProperty("cooldown_start_time") &&
                  (n.cooldown_start_time = f.proto.api.Timestamp.toObject(e.cooldown_start_time, t)),
                null != e.data_after_cooldown_bytes &&
                  e.hasOwnProperty("data_after_cooldown_bytes") &&
                  ("number" == typeof e.data_after_cooldown_bytes
                    ? (n.data_after_cooldown_bytes = t.longs === String ? String(e.data_after_cooldown_bytes) : e.data_after_cooldown_bytes)
                    : (n.data_after_cooldown_bytes =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.data_after_cooldown_bytes)
                          : t.longs === Number
                          ? new l.LongBits(e.data_after_cooldown_bytes.low >>> 0, e.data_after_cooldown_bytes.high >>> 0).toNumber(!0)
                          : e.data_after_cooldown_bytes)),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            e
          );
        })()),
        i)),
      s)),
      (f.AF =
        (((a = {}).ConnectString = (function () {
          function e(e) {
            if (((this.token = []), (this.caid = []), e))
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          var t, n;
          return (
            (e.prototype.deviceHash = ""),
            (e.prototype.serverIP = 0),
            (e.prototype.serverPort = 0),
            (e.prototype.platform = 0),
            (e.prototype.protocol = 0),
            (e.prototype.clientVersion = 0),
            (e.prototype.requestedCountry = ""),
            (e.prototype.token = l.emptyArray),
            (e.prototype.channel = 0),
            (e.prototype.serverDomain = ""),
            (e.prototype.platformInfo = ""),
            (e.prototype.network = 0),
            (e.prototype.reason = 0),
            (e.prototype.caid = l.emptyArray),
            (e.prototype.appName = 0),
            (e.prototype.userLang = ""),
            (e.prototype.profile = null),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.encode = function (e, t) {
              if (
                (t || (t = p.create()),
                t.uint32(10).string(e.deviceHash),
                t.uint32(16).uint32(e.serverIP),
                t.uint32(24).uint32(e.serverPort),
                t.uint32(32).int32(e.platform),
                t.uint32(40).int32(e.protocol),
                t.uint32(48).uint32(e.clientVersion),
                null != e.requestedCountry && Object.hasOwnProperty.call(e, "requestedCountry") && t.uint32(58).string(e.requestedCountry),
                null != e.token && e.token.length)
              ) {
                t.uint32(66).fork();
                for (var n = 0; n < e.token.length; ++n) t.fixed64(e.token[n]);
                t.ldelim();
              }
              if (
                (null != e.channel && Object.hasOwnProperty.call(e, "channel") && t.uint32(72).uint32(e.channel),
                null != e.serverDomain && Object.hasOwnProperty.call(e, "serverDomain") && t.uint32(82).string(e.serverDomain),
                null != e.platformInfo && Object.hasOwnProperty.call(e, "platformInfo") && t.uint32(90).string(e.platformInfo),
                null != e.network && Object.hasOwnProperty.call(e, "network") && t.uint32(96).int32(e.network),
                null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(104).uint32(e.reason),
                null != e.caid && e.caid.length)
              ) {
                for (t.uint32(114).fork(), n = 0; n < e.caid.length; ++n) t.fixed64(e.caid[n]);
                t.ldelim();
              }
              return (
                null != e.appName && Object.hasOwnProperty.call(e, "appName") && t.uint32(120).int32(e.appName),
                null != e.userLang && Object.hasOwnProperty.call(e, "userLang") && t.uint32(130).string(e.userLang),
                null != e.profile &&
                  Object.hasOwnProperty.call(e, "profile") &&
                  f.AF.ConnectString.UserProfile.encode(e.profile, t.uint32(138).fork()).ldelim(),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, r = new f.AF.ConnectString(); e.pos < n; ) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    r.deviceHash = e.string();
                    break;
                  case 2:
                    r.serverIP = e.uint32();
                    break;
                  case 3:
                    r.serverPort = e.uint32();
                    break;
                  case 4:
                    r.platform = e.int32();
                    break;
                  case 5:
                    r.protocol = e.int32();
                    break;
                  case 6:
                    r.clientVersion = e.uint32();
                    break;
                  case 7:
                    r.requestedCountry = e.string();
                    break;
                  case 8:
                    if (((r.token && r.token.length) || (r.token = []), 2 == (7 & o)))
                      for (var i = e.uint32() + e.pos; e.pos < i; ) r.token.push(e.fixed64());
                    else r.token.push(e.fixed64());
                    break;
                  case 9:
                    r.channel = e.uint32();
                    break;
                  case 10:
                    r.serverDomain = e.string();
                    break;
                  case 11:
                    r.platformInfo = e.string();
                    break;
                  case 12:
                    r.network = e.int32();
                    break;
                  case 13:
                    r.reason = e.uint32();
                    break;
                  case 14:
                    if (((r.caid && r.caid.length) || (r.caid = []), 2 == (7 & o)))
                      for (i = e.uint32() + e.pos; e.pos < i; ) r.caid.push(e.fixed64());
                    else r.caid.push(e.fixed64());
                    break;
                  case 15:
                    r.appName = e.int32();
                    break;
                  case 16:
                    r.userLang = e.string();
                    break;
                  case 17:
                    r.profile = f.AF.ConnectString.UserProfile.decode(e, e.uint32());
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              if (!r.hasOwnProperty("deviceHash")) throw l.ProtocolError("missing required 'deviceHash'", { instance: r });
              if (!r.hasOwnProperty("serverIP")) throw l.ProtocolError("missing required 'serverIP'", { instance: r });
              if (!r.hasOwnProperty("serverPort")) throw l.ProtocolError("missing required 'serverPort'", { instance: r });
              if (!r.hasOwnProperty("platform")) throw l.ProtocolError("missing required 'platform'", { instance: r });
              if (!r.hasOwnProperty("protocol")) throw l.ProtocolError("missing required 'protocol'", { instance: r });
              if (!r.hasOwnProperty("clientVersion")) throw l.ProtocolError("missing required 'clientVersion'", { instance: r });
              return r;
            }),
            (e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (!l.isString(e.deviceHash)) return "deviceHash: string expected";
              if (!l.isInteger(e.serverIP)) return "serverIP: integer expected";
              if (!l.isInteger(e.serverPort)) return "serverPort: integer expected";
              switch (e.platform) {
                default:
                  return "platform: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
              }
              switch (e.protocol) {
                default:
                  return "protocol: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
              }
              if (!l.isInteger(e.clientVersion)) return "clientVersion: integer expected";
              if (null != e.requestedCountry && e.hasOwnProperty("requestedCountry") && !l.isString(e.requestedCountry))
                return "requestedCountry: string expected";
              if (null != e.token && e.hasOwnProperty("token")) {
                if (!Array.isArray(e.token)) return "token: array expected";
                for (var t = 0; t < e.token.length; ++t)
                  if (!(l.isInteger(e.token[t]) || (e.token[t] && l.isInteger(e.token[t].low) && l.isInteger(e.token[t].high))))
                    return "token: integer|Long[] expected";
              }
              if (null != e.channel && e.hasOwnProperty("channel") && !l.isInteger(e.channel)) return "channel: integer expected";
              if (null != e.serverDomain && e.hasOwnProperty("serverDomain") && !l.isString(e.serverDomain))
                return "serverDomain: string expected";
              if (null != e.platformInfo && e.hasOwnProperty("platformInfo") && !l.isString(e.platformInfo))
                return "platformInfo: string expected";
              if (null != e.network && e.hasOwnProperty("network"))
                switch (e.network) {
                  default:
                    return "network: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                }
              if (null != e.reason && e.hasOwnProperty("reason") && !l.isInteger(e.reason)) return "reason: integer expected";
              if (null != e.caid && e.hasOwnProperty("caid")) {
                if (!Array.isArray(e.caid)) return "caid: array expected";
                for (t = 0; t < e.caid.length; ++t)
                  if (!(l.isInteger(e.caid[t]) || (e.caid[t] && l.isInteger(e.caid[t].low) && l.isInteger(e.caid[t].high))))
                    return "caid: integer|Long[] expected";
              }
              if (null != e.appName && e.hasOwnProperty("appName"))
                switch (e.appName) {
                  default:
                    return "appName: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                }
              if (null != e.userLang && e.hasOwnProperty("userLang") && !l.isString(e.userLang)) return "userLang: string expected";
              if (null != e.profile && e.hasOwnProperty("profile")) {
                var n = f.AF.ConnectString.UserProfile.verify(e.profile);
                if (n) return "profile." + n;
              }
              return null;
            }),
            (e.fromObject = function (e) {
              if (e instanceof f.AF.ConnectString) return e;
              var t = new f.AF.ConnectString();
              switch (
                (null != e.deviceHash && (t.deviceHash = String(e.deviceHash)),
                null != e.serverIP && (t.serverIP = e.serverIP >>> 0),
                null != e.serverPort && (t.serverPort = e.serverPort >>> 0),
                e.platform)
              ) {
                case "ANDROID":
                case 0:
                  t.platform = 0;
                  break;
                case "IPHONE":
                case 1:
                  t.platform = 1;
                  break;
                case "WINDOWS":
                case 2:
                  t.platform = 2;
                  break;
                case "MAC":
                case 3:
                  t.platform = 3;
                  break;
                case "OPENWRT":
                case 4:
                  t.platform = 4;
                  break;
                case "ROUTER":
                case 5:
                  t.platform = 5;
                  break;
                case "ANDROIDTV":
                case 6:
                  t.platform = 6;
                  break;
                case "LINUX":
                case 7:
                  t.platform = 7;
                  break;
                case "BROWSER_CHROME":
                case 8:
                  t.platform = 8;
                  break;
                case "BROWSER_FIREFOX":
                case 9:
                  t.platform = 9;
                  break;
                case "BROWSER_EDGE":
                case 10:
                  t.platform = 10;
              }
              switch (e.protocol) {
                case "OVPN_UDP":
                case 0:
                  t.protocol = 0;
                  break;
                case "OVPN_TCP":
                case 1:
                  t.protocol = 1;
                  break;
                case "PROXY":
                case 2:
                  t.protocol = 2;
                  break;
                case "IPSEC":
                case 3:
                  t.protocol = 3;
                  break;
                case "HYDRA":
                case 4:
                  t.protocol = 4;
                  break;
                case "BIXI":
                case 5:
                  t.protocol = 5;
                  break;
                case "WEB_PROXY":
                case 6:
                  t.protocol = 6;
              }
              if (
                (null != e.clientVersion && (t.clientVersion = e.clientVersion >>> 0),
                null != e.requestedCountry && (t.requestedCountry = String(e.requestedCountry)),
                e.token)
              ) {
                if (!Array.isArray(e.token)) throw TypeError(".AF.ConnectString.token: array expected");
                t.token = [];
                for (var n = 0; n < e.token.length; ++n)
                  l.Long
                    ? ((t.token[n] = l.Long.fromValue(e.token[n])).unsigned = !1)
                    : "string" == typeof e.token[n]
                    ? (t.token[n] = parseInt(e.token[n], 10))
                    : "number" == typeof e.token[n]
                    ? (t.token[n] = e.token[n])
                    : "object" == typeof e.token[n] &&
                      (t.token[n] = new l.LongBits(e.token[n].low >>> 0, e.token[n].high >>> 0).toNumber());
              }
              switch (
                (null != e.channel && (t.channel = e.channel >>> 0),
                null != e.serverDomain && (t.serverDomain = String(e.serverDomain)),
                null != e.platformInfo && (t.platformInfo = String(e.platformInfo)),
                e.network)
              ) {
                case "WIFI":
                case 0:
                  t.network = 0;
                  break;
                case "LAN":
                case 1:
                  t.network = 1;
                  break;
                case "CELLULAR":
                case 2:
                  t.network = 2;
              }
              if ((null != e.reason && (t.reason = e.reason >>> 0), e.caid)) {
                if (!Array.isArray(e.caid)) throw TypeError(".AF.ConnectString.caid: array expected");
                for (t.caid = [], n = 0; n < e.caid.length; ++n)
                  l.Long
                    ? ((t.caid[n] = l.Long.fromValue(e.caid[n])).unsigned = !1)
                    : "string" == typeof e.caid[n]
                    ? (t.caid[n] = parseInt(e.caid[n], 10))
                    : "number" == typeof e.caid[n]
                    ? (t.caid[n] = e.caid[n])
                    : "object" == typeof e.caid[n] && (t.caid[n] = new l.LongBits(e.caid[n].low >>> 0, e.caid[n].high >>> 0).toNumber());
              }
              switch (e.appName) {
                case "HSS":
                case 0:
                  t.appName = 0;
                  break;
                case "COMSCORE":
                case 1:
                  t.appName = 1;
                  break;
                case "HEXA":
                case 2:
                  t.appName = 2;
                  break;
                case "BETTERNET":
                case 3:
                  t.appName = 3;
                  break;
                case "VPN360":
                case 4:
                  t.appName = 4;
                  break;
                case "TOUCHVPN":
                case 5:
                  t.appName = 5;
              }
              if ((null != e.userLang && (t.userLang = String(e.userLang)), null != e.profile)) {
                if ("object" != typeof e.profile) throw TypeError(".AF.ConnectString.profile: object expected");
                t.profile = f.AF.ConnectString.UserProfile.fromObject(e.profile);
              }
              return t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (
                ((t.arrays || t.defaults) && ((n.token = []), (n.caid = [])),
                t.defaults &&
                  ((n.deviceHash = ""),
                  (n.serverIP = 0),
                  (n.serverPort = 0),
                  (n.platform = t.enums === String ? "ANDROID" : 0),
                  (n.protocol = t.enums === String ? "OVPN_UDP" : 0),
                  (n.clientVersion = 0),
                  (n.requestedCountry = ""),
                  (n.channel = 0),
                  (n.serverDomain = ""),
                  (n.platformInfo = ""),
                  (n.network = t.enums === String ? "WIFI" : 0),
                  (n.reason = 0),
                  (n.appName = t.enums === String ? "HSS" : 0),
                  (n.userLang = ""),
                  (n.profile = null)),
                null != e.deviceHash && e.hasOwnProperty("deviceHash") && (n.deviceHash = e.deviceHash),
                null != e.serverIP && e.hasOwnProperty("serverIP") && (n.serverIP = e.serverIP),
                null != e.serverPort && e.hasOwnProperty("serverPort") && (n.serverPort = e.serverPort),
                null != e.platform &&
                  e.hasOwnProperty("platform") &&
                  (n.platform = t.enums === String ? f.AF.ConnectString.Platform[e.platform] : e.platform),
                null != e.protocol &&
                  e.hasOwnProperty("protocol") &&
                  (n.protocol = t.enums === String ? f.AF.ConnectString.Protocol[e.protocol] : e.protocol),
                null != e.clientVersion && e.hasOwnProperty("clientVersion") && (n.clientVersion = e.clientVersion),
                null != e.requestedCountry && e.hasOwnProperty("requestedCountry") && (n.requestedCountry = e.requestedCountry),
                e.token && e.token.length)
              ) {
                n.token = [];
                for (var r = 0; r < e.token.length; ++r)
                  "number" == typeof e.token[r]
                    ? (n.token[r] = t.longs === String ? String(e.token[r]) : e.token[r])
                    : (n.token[r] =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.token[r])
                          : t.longs === Number
                          ? new l.LongBits(e.token[r].low >>> 0, e.token[r].high >>> 0).toNumber()
                          : e.token[r]);
              }
              if (
                (null != e.channel && e.hasOwnProperty("channel") && (n.channel = e.channel),
                null != e.serverDomain && e.hasOwnProperty("serverDomain") && (n.serverDomain = e.serverDomain),
                null != e.platformInfo && e.hasOwnProperty("platformInfo") && (n.platformInfo = e.platformInfo),
                null != e.network &&
                  e.hasOwnProperty("network") &&
                  (n.network = t.enums === String ? f.AF.ConnectString.Network[e.network] : e.network),
                null != e.reason && e.hasOwnProperty("reason") && (n.reason = e.reason),
                e.caid && e.caid.length)
              )
                for (n.caid = [], r = 0; r < e.caid.length; ++r)
                  "number" == typeof e.caid[r]
                    ? (n.caid[r] = t.longs === String ? String(e.caid[r]) : e.caid[r])
                    : (n.caid[r] =
                        t.longs === String
                          ? l.Long.prototype.toString.call(e.caid[r])
                          : t.longs === Number
                          ? new l.LongBits(e.caid[r].low >>> 0, e.caid[r].high >>> 0).toNumber()
                          : e.caid[r]);
              return (
                null != e.appName &&
                  e.hasOwnProperty("appName") &&
                  (n.appName = t.enums === String ? f.AF.ConnectString.AppName[e.appName] : e.appName),
                null != e.userLang && e.hasOwnProperty("userLang") && (n.userLang = e.userLang),
                null != e.profile && e.hasOwnProperty("profile") && (n.profile = f.AF.ConnectString.UserProfile.toObject(e.profile, t)),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions);
            }),
            (e.Platform =
              ((t = {}),
              ((n = Object.create(t))[(t[0] = "ANDROID")] = 0),
              (n[(t[1] = "IPHONE")] = 1),
              (n[(t[2] = "WINDOWS")] = 2),
              (n[(t[3] = "MAC")] = 3),
              (n[(t[4] = "OPENWRT")] = 4),
              (n[(t[5] = "ROUTER")] = 5),
              (n[(t[6] = "ANDROIDTV")] = 6),
              (n[(t[7] = "LINUX")] = 7),
              (n[(t[8] = "BROWSER_CHROME")] = 8),
              (n[(t[9] = "BROWSER_FIREFOX")] = 9),
              (n[(t[10] = "BROWSER_EDGE")] = 10),
              n)),
            (e.Protocol = (function () {
              var e = {},
                t = Object.create(e);
              return (
                (t[(e[0] = "OVPN_UDP")] = 0),
                (t[(e[1] = "OVPN_TCP")] = 1),
                (t[(e[2] = "PROXY")] = 2),
                (t[(e[3] = "IPSEC")] = 3),
                (t[(e[4] = "HYDRA")] = 4),
                (t[(e[5] = "BIXI")] = 5),
                (t[(e[6] = "WEB_PROXY")] = 6),
                t
              );
            })()),
            (e.Network = (function () {
              var e = {},
                t = Object.create(e);
              return (t[(e[0] = "WIFI")] = 0), (t[(e[1] = "LAN")] = 1), (t[(e[2] = "CELLULAR")] = 2), t;
            })()),
            (e.AppName = (function () {
              var e = {},
                t = Object.create(e);
              return (
                (t[(e[0] = "HSS")] = 0),
                (t[(e[1] = "COMSCORE")] = 1),
                (t[(e[2] = "HEXA")] = 2),
                (t[(e[3] = "BETTERNET")] = 3),
                (t[(e[4] = "VPN360")] = 4),
                (t[(e[5] = "TOUCHVPN")] = 5),
                t
              );
            })()),
            (e.UserProfile = (function () {
              function e(e) {
                if (((this.token = []), (this.packages = []), (this.signature = []), e))
                  for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
              }
              return (
                (e.prototype.token = l.emptyArray),
                (e.prototype.packages = l.emptyArray),
                (e.prototype.signature = l.emptyArray),
                (e.create = function (t) {
                  return new e(t);
                }),
                (e.encode = function (e, t) {
                  if ((t || (t = p.create()), null != e.token && e.token.length)) {
                    t.uint32(10).fork();
                    for (var n = 0; n < e.token.length; ++n) t.fixed64(e.token[n]);
                    t.ldelim();
                  }
                  if (null != e.packages && e.packages.length)
                    for (n = 0; n < e.packages.length; ++n)
                      f.AF.ConnectString.UserProfile.Package.encode(e.packages[n], t.uint32(18).fork()).ldelim();
                  if (null != e.signature && e.signature.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.signature.length; ++n) t.fixed64(e.signature[n]);
                    t.ldelim();
                  }
                  return t;
                }),
                (e.decode = function (e, t) {
                  e instanceof c || (e = c.create(e));
                  for (var n = void 0 === t ? e.len : e.pos + t, r = new f.AF.ConnectString.UserProfile(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        if (((r.token && r.token.length) || (r.token = []), 2 == (7 & o)))
                          for (var i = e.uint32() + e.pos; e.pos < i; ) r.token.push(e.fixed64());
                        else r.token.push(e.fixed64());
                        break;
                      case 2:
                        (r.packages && r.packages.length) || (r.packages = []),
                          r.packages.push(f.AF.ConnectString.UserProfile.Package.decode(e, e.uint32()));
                        break;
                      case 3:
                        if (((r.signature && r.signature.length) || (r.signature = []), 2 == (7 & o)))
                          for (i = e.uint32() + e.pos; e.pos < i; ) r.signature.push(e.fixed64());
                        else r.signature.push(e.fixed64());
                        break;
                      default:
                        e.skipType(7 & o);
                    }
                  }
                  return r;
                }),
                (e.verify = function (e) {
                  if ("object" != typeof e || null === e) return "object expected";
                  if (null != e.token && e.hasOwnProperty("token")) {
                    if (!Array.isArray(e.token)) return "token: array expected";
                    for (var t = 0; t < e.token.length; ++t)
                      if (!(l.isInteger(e.token[t]) || (e.token[t] && l.isInteger(e.token[t].low) && l.isInteger(e.token[t].high))))
                        return "token: integer|Long[] expected";
                  }
                  if (null != e.packages && e.hasOwnProperty("packages")) {
                    if (!Array.isArray(e.packages)) return "packages: array expected";
                    for (t = 0; t < e.packages.length; ++t) {
                      var n = f.AF.ConnectString.UserProfile.Package.verify(e.packages[t]);
                      if (n) return "packages." + n;
                    }
                  }
                  if (null != e.signature && e.hasOwnProperty("signature")) {
                    if (!Array.isArray(e.signature)) return "signature: array expected";
                    for (t = 0; t < e.signature.length; ++t)
                      if (
                        !(
                          l.isInteger(e.signature[t]) ||
                          (e.signature[t] && l.isInteger(e.signature[t].low) && l.isInteger(e.signature[t].high))
                        )
                      )
                        return "signature: integer|Long[] expected";
                  }
                  return null;
                }),
                (e.fromObject = function (e) {
                  if (e instanceof f.AF.ConnectString.UserProfile) return e;
                  var t = new f.AF.ConnectString.UserProfile();
                  if (e.token) {
                    if (!Array.isArray(e.token)) throw TypeError(".AF.ConnectString.UserProfile.token: array expected");
                    t.token = [];
                    for (var n = 0; n < e.token.length; ++n)
                      l.Long
                        ? ((t.token[n] = l.Long.fromValue(e.token[n])).unsigned = !1)
                        : "string" == typeof e.token[n]
                        ? (t.token[n] = parseInt(e.token[n], 10))
                        : "number" == typeof e.token[n]
                        ? (t.token[n] = e.token[n])
                        : "object" == typeof e.token[n] &&
                          (t.token[n] = new l.LongBits(e.token[n].low >>> 0, e.token[n].high >>> 0).toNumber());
                  }
                  if (e.packages) {
                    if (!Array.isArray(e.packages)) throw TypeError(".AF.ConnectString.UserProfile.packages: array expected");
                    for (t.packages = [], n = 0; n < e.packages.length; ++n) {
                      if ("object" != typeof e.packages[n]) throw TypeError(".AF.ConnectString.UserProfile.packages: object expected");
                      t.packages[n] = f.AF.ConnectString.UserProfile.Package.fromObject(e.packages[n]);
                    }
                  }
                  if (e.signature) {
                    if (!Array.isArray(e.signature)) throw TypeError(".AF.ConnectString.UserProfile.signature: array expected");
                    for (t.signature = [], n = 0; n < e.signature.length; ++n)
                      l.Long
                        ? ((t.signature[n] = l.Long.fromValue(e.signature[n])).unsigned = !1)
                        : "string" == typeof e.signature[n]
                        ? (t.signature[n] = parseInt(e.signature[n], 10))
                        : "number" == typeof e.signature[n]
                        ? (t.signature[n] = e.signature[n])
                        : "object" == typeof e.signature[n] &&
                          (t.signature[n] = new l.LongBits(e.signature[n].low >>> 0, e.signature[n].high >>> 0).toNumber());
                  }
                  return t;
                }),
                (e.toObject = function (e, t) {
                  t || (t = {});
                  var n = {};
                  if (((t.arrays || t.defaults) && ((n.token = []), (n.packages = []), (n.signature = [])), e.token && e.token.length)) {
                    n.token = [];
                    for (var r = 0; r < e.token.length; ++r)
                      "number" == typeof e.token[r]
                        ? (n.token[r] = t.longs === String ? String(e.token[r]) : e.token[r])
                        : (n.token[r] =
                            t.longs === String
                              ? l.Long.prototype.toString.call(e.token[r])
                              : t.longs === Number
                              ? new l.LongBits(e.token[r].low >>> 0, e.token[r].high >>> 0).toNumber()
                              : e.token[r]);
                  }
                  if (e.packages && e.packages.length)
                    for (n.packages = [], r = 0; r < e.packages.length; ++r)
                      n.packages[r] = f.AF.ConnectString.UserProfile.Package.toObject(e.packages[r], t);
                  if (e.signature && e.signature.length)
                    for (n.signature = [], r = 0; r < e.signature.length; ++r)
                      "number" == typeof e.signature[r]
                        ? (n.signature[r] = t.longs === String ? String(e.signature[r]) : e.signature[r])
                        : (n.signature[r] =
                            t.longs === String
                              ? l.Long.prototype.toString.call(e.signature[r])
                              : t.longs === Number
                              ? new l.LongBits(e.signature[r].low >>> 0, e.signature[r].high >>> 0).toNumber()
                              : e.signature[r]);
                  return n;
                }),
                (e.prototype.toJSON = function () {
                  return this.constructor.toObject(this, u.util.toJSONOptions);
                }),
                (e.Package = (function () {
                  function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.packageID = 0),
                    (e.prototype.validTo = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = p.create()), t.uint32(8).uint32(e.packageID), t.uint32(16).int64(e.validTo), t;
                    }),
                    (e.decode = function (e, t) {
                      e instanceof c || (e = c.create(e));
                      for (var n = void 0 === t ? e.len : e.pos + t, r = new f.AF.ConnectString.UserProfile.Package(); e.pos < n; ) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                          case 1:
                            r.packageID = e.uint32();
                            break;
                          case 2:
                            r.validTo = e.int64();
                            break;
                          default:
                            e.skipType(7 & o);
                        }
                      }
                      if (!r.hasOwnProperty("packageID")) throw l.ProtocolError("missing required 'packageID'", { instance: r });
                      if (!r.hasOwnProperty("validTo")) throw l.ProtocolError("missing required 'validTo'", { instance: r });
                      return r;
                    }),
                    (e.verify = function (e) {
                      return "object" != typeof e || null === e
                        ? "object expected"
                        : l.isInteger(e.packageID)
                        ? l.isInteger(e.validTo) || (e.validTo && l.isInteger(e.validTo.low) && l.isInteger(e.validTo.high))
                          ? null
                          : "validTo: integer|Long expected"
                        : "packageID: integer expected";
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof f.AF.ConnectString.UserProfile.Package) return e;
                      var t = new f.AF.ConnectString.UserProfile.Package();
                      return (
                        null != e.packageID && (t.packageID = e.packageID >>> 0),
                        null != e.validTo &&
                          (l.Long
                            ? ((t.validTo = l.Long.fromValue(e.validTo)).unsigned = !1)
                            : "string" == typeof e.validTo
                            ? (t.validTo = parseInt(e.validTo, 10))
                            : "number" == typeof e.validTo
                            ? (t.validTo = e.validTo)
                            : "object" == typeof e.validTo &&
                              (t.validTo = new l.LongBits(e.validTo.low >>> 0, e.validTo.high >>> 0).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && ((n.packageID = 0), (n.validTo = 0)),
                        null != e.packageID && e.hasOwnProperty("packageID") && (n.packageID = e.packageID),
                        null != e.validTo &&
                          e.hasOwnProperty("validTo") &&
                          ("number" == typeof e.validTo
                            ? (n.validTo = t.longs === String ? String(e.validTo) : e.validTo)
                            : (n.validTo =
                                t.longs === String
                                  ? l.Long.prototype.toString.call(e.validTo)
                                  : t.longs === Number
                                  ? new l.LongBits(e.validTo.low >>> 0, e.validTo.high >>> 0).toNumber()
                                  : e.validTo)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(this, u.util.toJSONOptions);
                    }),
                    e
                  );
                })()),
                e
              );
            })()),
            e
          );
        })()),
        a)),
      (e.exports = f);
  },
  ,
  function (e, t, n) {
    var r = n(25).Symbol;
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var n =
        (this && this.__spreadArrays) ||
        function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          var r = Array(e),
            o = 0;
          for (t = 0; t < n; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
          return r;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t, n) {
        (this.name = e), (this.version = t), (this.os = n), (this.type = "browser");
      };
      t.BrowserInfo = r;
      var o = function (t) {
        (this.version = t), (this.type = "node"), (this.name = "node"), (this.os = e.platform);
      };
      t.NodeInfo = o;
      var i = function (e, t, n, r) {
        (this.name = e), (this.version = t), (this.os = n), (this.bot = r), (this.type = "bot-device");
      };
      t.SearchBotDeviceInfo = i;
      var s = function () {
        (this.type = "bot"), (this.bot = !0), (this.name = "bot"), (this.version = null), (this.os = null);
      };
      t.BotInfo = s;
      var a = function () {
        (this.type = "react-native"), (this.name = "react-native"), (this.version = null), (this.os = null);
      };
      t.ReactNativeInfo = a;
      var u = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        c = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /Edg\/([0-9\.]+)/],
          ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
          ]
        ],
        p = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/]
        ];
      function l(e) {
        return (
          "" !== e &&
          c.reduce(function (t, n) {
            var r = n[0],
              o = n[1];
            if (t) return t;
            var i = o.exec(e);
            return !!i && [r, i];
          }, !1)
        );
      }
      function f(e) {
        var t = l(e);
        if (!t) return null;
        var o = t[0],
          a = t[1];
        if ("searchbot" === o) return new s();
        var c = a[1] && a[1].split(/[._]/).slice(0, 3);
        c
          ? c.length < 3 &&
            (c = n(
              c,
              (function (e) {
                for (var t = [], n = 0; n < e; n++) t.push("0");
                return t;
              })(3 - c.length)
            ))
          : (c = []);
        var p = c.join("."),
          f = d(e),
          h = u.exec(e);
        return h && h[1] ? new i(o, p, f, h[1]) : new r(o, c.join("."), f);
      }
      function d(e) {
        for (var t = 0, n = p.length; t < n; t++) {
          var r = p[t],
            o = r[0];
          if (r[1].exec(e)) return o;
        }
        return null;
      }
      function h() {
        return void 0 !== e && e.version ? new o(e.version.slice(1)) : null;
      }
      (t.detect = function (e) {
        return e
          ? f(e)
          : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
          ? new a()
          : "undefined" != typeof navigator
          ? f(navigator.userAgent)
          : h();
      }),
        (t.browserName = function (e) {
          var t = l(e);
          return t ? t[0] : null;
        }),
        (t.parseUserAgent = f),
        (t.detectOS = d),
        (t.getNodeVersion = h);
    }).call(this, n(44));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return u;
      });
    const r = /(Touch VPN|Betternet|Hotspot Shield)/,
      o = ["lgbipmmmnjifkiiikaffhceflifbmhib"],
      i = (e, t = !1) =>
        new Promise((n) => {
          browser.management.setEnabled(e, t, () => {
            n();
          });
        }),
      s = async () => {
        const e = sdk.config.application.applicationId;
        return (
          await new Promise((e) => {
            chrome.management.getAll((t) => {
              e(t);
            });
          })
        ).filter(
          ({ enabled: t, id: n, permissions: i, type: s, mayDisable: a, name: u }) =>
            "extension" === s &&
            n !== e &&
            !!t &&
            !!a &&
            !u.match(r) &&
            !o.includes(n) &&
            (!!u.toLowerCase().includes("expressvpn".toLowerCase()) || i.includes("proxy"))
        );
      },
      a = async () => (await s()).length > 0,
      u = async () => {
        const e = await s();
        for (const { id: t } of e) await i(t, !1).catch(() => 0);
      };
  },
  ,
  ,
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }).call(this, n(21));
  },
  function (e, t, n) {
    var r = n(54)(Object, "create");
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function (e, t, n) {
    var r = n(56);
    e.exports = function (e, t) {
      for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
      return -1;
    };
  },
  function (e, t, n) {
    var r = n(108);
    e.exports = function (e, t) {
      var n = e.__data__;
      return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = t;
    r.length = function (e) {
      var t = e.length;
      if (!t) return 0;
      for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++n;
      return Math.ceil(3 * e.length) / 4 - n;
    };
    for (var o = new Array(64), i = new Array(123), s = 0; s < 64; )
      i[(o[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : (s - 59) | 43)] = s++;
    r.encode = function (e, t, n) {
      for (var r, i = null, s = [], a = 0, u = 0; t < n; ) {
        var c = e[t++];
        switch (u) {
          case 0:
            (s[a++] = o[c >> 2]), (r = (3 & c) << 4), (u = 1);
            break;
          case 1:
            (s[a++] = o[r | (c >> 4)]), (r = (15 & c) << 2), (u = 2);
            break;
          case 2:
            (s[a++] = o[r | (c >> 6)]), (s[a++] = o[63 & c]), (u = 0);
        }
        a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), (a = 0));
      }
      return (
        u && ((s[a++] = o[r]), (s[a++] = 61), 1 === u && (s[a++] = 61)),
        i ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
      );
    };
    (r.decode = function (e, t, n) {
      for (var r, o = n, s = 0, a = 0; a < e.length; ) {
        var u = e.charCodeAt(a++);
        if (61 === u && s > 1) break;
        if (void 0 === (u = i[u])) throw Error("invalid encoding");
        switch (s) {
          case 0:
            (r = u), (s = 1);
            break;
          case 1:
            (t[n++] = (r << 2) | ((48 & u) >> 4)), (r = u), (s = 2);
            break;
          case 2:
            (t[n++] = ((15 & r) << 4) | ((60 & u) >> 2)), (r = u), (s = 3);
            break;
          case 3:
            (t[n++] = ((3 & r) << 6) | u), (s = 0);
        }
      }
      if (1 === s) throw Error("invalid encoding");
      return n - o;
    }),
      (r.test = function (e) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
      });
  },
  function (e, t, n) {
    var r = n(23),
      o = n(24);
    e.exports = function (e) {
      return "number" == typeof e || (o(e) && "[object Number]" == r(e));
    };
  },
  ,
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    })();
    var u,
      c = [],
      p = !1,
      l = -1;
    function f() {
      p && u && ((p = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && d());
    }
    function d() {
      if (!p) {
        var e = a(f);
        p = !0;
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++l < t; ) u && u[l].run();
          (l = -1), (t = c.length);
        }
        (u = null),
          (p = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new h(e, t)), 1 !== c.length || p || a(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    var r = n(30),
      o = Object.prototype,
      i = o.hasOwnProperty,
      s = o.toString,
      a = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      var t = i.call(e, a),
        n = e[a];
      try {
        e[a] = void 0;
        var r = !0;
      } catch (e) {}
      var o = s.call(e);
      return r && (t ? (e[a] = n) : delete e[a]), o;
    };
  },
  function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e);
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function r(e) {
      "use strict";
      (e = e || {}), (this.depth = e.depth || !1), (this.throwOnCircularRef = !("throwOnCircularRef" in e) || !1 !== e.throwOnCircularRef);
    }
    function o(e) {
      "use strict";
      var t = Array.prototype.slice.call(arguments, 0);
      t.unshift(null);
      var n = r.bind.apply(r, t);
      return new n();
    }
    function i(e) {
      "use strict";
      var t = n(112),
        i = n(113),
        s = [],
        a = {};
      function u(e) {
        return e.reduce(function (e, t) {
          return t instanceof Object ? e.push(t) : (e = []), e;
        }, []);
      }
      function c(e) {
        var t,
          n = e[e.length - 1];
        if (n instanceof Array) t = [];
        else if (n instanceof Function)
          try {
            t = i(n);
          } catch (e) {
            throw new Error(e.message);
          }
        else t = n instanceof Object ? {} : n;
        return t;
      }
      function p(e) {
        e.forEach(function (e) {
          if (e instanceof Object && s.indexOf(e) > -1) throw new Error("Circular reference error");
        }),
          (s = s.concat(e));
      }
      function l(e, n) {
        (n = !1 !== a.depth ? (n ? n + 1 : 1) : 0), !0 === a.throwOnCircularRef && p(e);
        var r = c(e);
        function o(e, t, o) {
          r[t] ? (r[t] = l([r[t], o[t]], n)) : (r[t] = l([o[t]], n));
        }
        r instanceof Object &&
          n <= a.depth &&
          u(e).forEach(function (e) {
            t(e, o);
          });
        return r;
      }
      return (
        arguments[0] instanceof r
          ? ((a = arguments[0]), (e = Array.prototype.slice.call(arguments, 1)))
          : ((a = o()), (e = Array.prototype.slice.call(arguments, 0))),
        l(e)
      );
    }
    (i.createOptions = o), (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    e.exports = l;
    var r,
      o = n(22),
      i = o.LongBits,
      s = o.base64,
      a = o.utf8;
    function u(e, t, n) {
      (this.fn = e), (this.len = t), (this.next = void 0), (this.val = n);
    }
    function c() {}
    function p(e) {
      (this.head = e.head), (this.tail = e.tail), (this.len = e.len), (this.next = e.states);
    }
    function l() {
      (this.len = 0), (this.head = new u(c, 0, 0)), (this.tail = this.head), (this.states = null);
    }
    var f = function () {
      return o.Buffer
        ? function () {
            return (l.create = function () {
              return new r();
            })();
          }
        : function () {
            return new l();
          };
    };
    function d(e, t, n) {
      t[n] = 255 & e;
    }
    function h(e, t) {
      (this.len = e), (this.next = void 0), (this.val = t);
    }
    function g(e, t, n) {
      for (; e.hi; ) (t[n++] = (127 & e.lo) | 128), (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0), (e.hi >>>= 7);
      for (; e.lo > 127; ) (t[n++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
      t[n++] = e.lo;
    }
    function y(e, t, n) {
      (t[n] = 255 & e), (t[n + 1] = (e >>> 8) & 255), (t[n + 2] = (e >>> 16) & 255), (t[n + 3] = e >>> 24);
    }
    (l.create = f()),
      (l.alloc = function (e) {
        return new o.Array(e);
      }),
      o.Array !== Array && (l.alloc = o.pool(l.alloc, o.Array.prototype.subarray)),
      (l.prototype._push = function (e, t, n) {
        return (this.tail = this.tail.next = new u(e, t, n)), (this.len += t), this;
      }),
      (h.prototype = Object.create(u.prototype)),
      (h.prototype.fn = function (e, t, n) {
        for (; e > 127; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
        t[n] = e;
      }),
      (l.prototype.uint32 = function (e) {
        return (
          (this.len += (this.tail = this.tail.next =
            new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len),
          this
        );
      }),
      (l.prototype.int32 = function (e) {
        return e < 0 ? this._push(g, 10, i.fromNumber(e)) : this.uint32(e);
      }),
      (l.prototype.sint32 = function (e) {
        return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
      }),
      (l.prototype.uint64 = function (e) {
        var t = i.from(e);
        return this._push(g, t.length(), t);
      }),
      (l.prototype.int64 = l.prototype.uint64),
      (l.prototype.sint64 = function (e) {
        var t = i.from(e).zzEncode();
        return this._push(g, t.length(), t);
      }),
      (l.prototype.bool = function (e) {
        return this._push(d, 1, e ? 1 : 0);
      }),
      (l.prototype.fixed32 = function (e) {
        return this._push(y, 4, e >>> 0);
      }),
      (l.prototype.sfixed32 = l.prototype.fixed32),
      (l.prototype.fixed64 = function (e) {
        var t = i.from(e);
        return this._push(y, 4, t.lo)._push(y, 4, t.hi);
      }),
      (l.prototype.sfixed64 = l.prototype.fixed64),
      (l.prototype.float = function (e) {
        return this._push(o.float.writeFloatLE, 4, e);
      }),
      (l.prototype.double = function (e) {
        return this._push(o.float.writeDoubleLE, 8, e);
      });
    var _ = o.Array.prototype.set
      ? function (e, t, n) {
          t.set(e, n);
        }
      : function (e, t, n) {
          for (var r = 0; r < e.length; ++r) t[n + r] = e[r];
        };
    (l.prototype.bytes = function (e) {
      var t = e.length >>> 0;
      if (!t) return this._push(d, 1, 0);
      if (o.isString(e)) {
        var n = l.alloc((t = s.length(e)));
        s.decode(e, n, 0), (e = n);
      }
      return this.uint32(t)._push(_, t, e);
    }),
      (l.prototype.string = function (e) {
        var t = a.length(e);
        return t ? this.uint32(t)._push(a.write, t, e) : this._push(d, 1, 0);
      }),
      (l.prototype.fork = function () {
        return (this.states = new p(this)), (this.head = this.tail = new u(c, 0, 0)), (this.len = 0), this;
      }),
      (l.prototype.reset = function () {
        return (
          this.states
            ? ((this.head = this.states.head),
              (this.tail = this.states.tail),
              (this.len = this.states.len),
              (this.states = this.states.next))
            : ((this.head = this.tail = new u(c, 0, 0)), (this.len = 0)),
          this
        );
      }),
      (l.prototype.ldelim = function () {
        var e = this.head,
          t = this.tail,
          n = this.len;
        return this.reset().uint32(n), n && ((this.tail.next = e.next), (this.tail = t), (this.len += n)), this;
      }),
      (l.prototype.finish = function () {
        for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e; ) e.fn(e.val, t, n), (n += e.len), (e = e.next);
        return t;
      }),
      (l._configure = function (e) {
        (r = e), (l.create = f()), r._configure();
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = u;
    var r,
      o = n(22),
      i = o.LongBits,
      s = o.utf8;
    function a(e, t) {
      return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
    }
    function u(e) {
      (this.buf = e), (this.pos = 0), (this.len = e.length);
    }
    var c,
      p =
        "undefined" != typeof Uint8Array
          ? function (e) {
              if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
              throw Error("illegal buffer");
            }
          : function (e) {
              if (Array.isArray(e)) return new u(e);
              throw Error("illegal buffer");
            },
      l = function () {
        return o.Buffer
          ? function (e) {
              return (u.create = function (e) {
                return o.Buffer.isBuffer(e) ? new r(e) : p(e);
              })(e);
            }
          : p;
      };
    function f() {
      var e = new i(0, 0),
        t = 0;
      if (!(this.len - this.pos > 4)) {
        for (; t < 3; ++t) {
          if (this.pos >= this.len) throw a(this);
          if (((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0), this.buf[this.pos++] < 128)) return e;
        }
        return (e.lo = (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0), e;
      }
      for (; t < 4; ++t) if (((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0), this.buf[this.pos++] < 128)) return e;
      if (
        ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
        (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return e;
      if (((t = 0), this.len - this.pos > 4)) {
        for (; t < 5; ++t) if (((e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0), this.buf[this.pos++] < 128)) return e;
      } else
        for (; t < 5; ++t) {
          if (this.pos >= this.len) throw a(this);
          if (((e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0), this.buf[this.pos++] < 128)) return e;
        }
      throw Error("invalid varint encoding");
    }
    function d(e, t) {
      return (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0;
    }
    function h() {
      if (this.pos + 8 > this.len) throw a(this, 8);
      return new i(d(this.buf, (this.pos += 4)), d(this.buf, (this.pos += 4)));
    }
    (u.create = l()),
      (u.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice),
      (u.prototype.uint32 =
        ((c = 4294967295),
        function () {
          if (((c = (127 & this.buf[this.pos]) >>> 0), this.buf[this.pos++] < 128)) return c;
          if (((c = (c | ((127 & this.buf[this.pos]) << 7)) >>> 0), this.buf[this.pos++] < 128)) return c;
          if (((c = (c | ((127 & this.buf[this.pos]) << 14)) >>> 0), this.buf[this.pos++] < 128)) return c;
          if (((c = (c | ((127 & this.buf[this.pos]) << 21)) >>> 0), this.buf[this.pos++] < 128)) return c;
          if (((c = (c | ((15 & this.buf[this.pos]) << 28)) >>> 0), this.buf[this.pos++] < 128)) return c;
          if ((this.pos += 5) > this.len) throw ((this.pos = this.len), a(this, 10));
          return c;
        })),
      (u.prototype.int32 = function () {
        return 0 | this.uint32();
      }),
      (u.prototype.sint32 = function () {
        var e = this.uint32();
        return ((e >>> 1) ^ -(1 & e)) | 0;
      }),
      (u.prototype.bool = function () {
        return 0 !== this.uint32();
      }),
      (u.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        return d(this.buf, (this.pos += 4));
      }),
      (u.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        return 0 | d(this.buf, (this.pos += 4));
      }),
      (u.prototype.float = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        var e = o.float.readFloatLE(this.buf, this.pos);
        return (this.pos += 4), e;
      }),
      (u.prototype.double = function () {
        if (this.pos + 8 > this.len) throw a(this, 4);
        var e = o.float.readDoubleLE(this.buf, this.pos);
        return (this.pos += 8), e;
      }),
      (u.prototype.bytes = function () {
        var e = this.uint32(),
          t = this.pos,
          n = this.pos + e;
        if (n > this.len) throw a(this, e);
        return (
          (this.pos += e),
          Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
        );
      }),
      (u.prototype.string = function () {
        var e = this.bytes();
        return s.read(e, 0, e.length);
      }),
      (u.prototype.skip = function (e) {
        if ("number" == typeof e) {
          if (this.pos + e > this.len) throw a(this, e);
          this.pos += e;
        } else
          do {
            if (this.pos >= this.len) throw a(this);
          } while (128 & this.buf[this.pos++]);
        return this;
      }),
      (u.prototype.skipType = function (e) {
        switch (e) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error("invalid wire type " + e + " at offset " + this.pos);
        }
        return this;
      }),
      (u._configure = function (e) {
        (r = e), (u.create = l()), r._configure();
        var t = o.Long ? "toLong" : "toNumber";
        o.merge(u.prototype, {
          int64: function () {
            return f.call(this)[t](!1);
          },
          uint64: function () {
            return f.call(this)[t](!0);
          },
          sint64: function () {
            return f.call(this).zzDecode()[t](!1);
          },
          fixed64: function () {
            return h.call(this)[t](!0);
          },
          sfixed64: function () {
            return h.call(this)[t](!1);
          }
        });
      });
  },
  function (e, t, n) {
    var r = n(91),
      o = n(95);
    e.exports = function (e, t) {
      var n = o(e, t);
      return r(n) ? n : void 0;
    };
  },
  function (e, t, n) {
    var r = n(23),
      o = n(38);
    e.exports = function (e) {
      if (!o(e)) return !1;
      var t = r(e);
      return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e === t || (e != e && t != t);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e;
    };
  },
  function (e, t, n) {
    var r = n(116);
    e.exports = function (e, t) {
      var n = -1,
        o = e.length,
        i = o - 1;
      for (t = void 0 === t ? o : t; ++n < t; ) {
        var s = r(n, i),
          a = e[s];
        (e[s] = e[n]), (e[n] = a);
      }
      return (e.length = t), e;
    };
  },
  function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  },
  function (e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
      var r = typeof e;
      return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || ("symbol" != r && n.test(e))) && e > -1 && e % 1 == 0 && e < t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    };
  },
  function (e, t, n) {
    var r = n(55),
      o = n(61);
    e.exports = function (e) {
      return null != e && o(e.length) && !r(e);
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    var r = n(87);
    function o(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError("Expected a function");
      var n = function () {
        var r = arguments,
          o = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var s = e.apply(this, r);
        return (n.cache = i.set(o, s) || i), s;
      };
      return (n.cache = new (o.Cache || r)()), n;
    }
    (o.Cache = r), (e.exports = o);
  },
  function (e, t, n) {
    var r = n(114),
      o = n(117),
      i = n(59),
      s = n(136),
      a = n(137);
    e.exports = function (e, t, n) {
      return (t = (n ? s(e, t, n) : void 0 === t) ? 1 : a(t)), (i(e) ? r : o)(e, t);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, r, o) {
      var i, s;
      if (void 0 === r) r = 0;
      else if ((r |= 0) < 0 || r >= e.length) throw new RangeError("invalid lower bound");
      if (void 0 === o) o = e.length - 1;
      else if ((o |= 0) < r || o >= e.length) throw new RangeError("invalid upper bound");
      for (; r <= o; )
        if ((s = +n(e[(i = r + ((o - r) >>> 1))], t, i, e)) < 0) r = i + 1;
        else {
          if (!(s > 0)) return i;
          o = i - 1;
        }
      return ~r;
    };
  },
  function (e, t, n) {
    (function (e, r) {
      var o;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function () {
        var i = "Expected a function",
          s = "__lodash_placeholder__",
          a = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
          ],
          u = "[object Arguments]",
          c = "[object Array]",
          p = "[object Boolean]",
          l = "[object Date]",
          f = "[object Error]",
          d = "[object Function]",
          h = "[object GeneratorFunction]",
          g = "[object Map]",
          y = "[object Number]",
          _ = "[object Object]",
          v = "[object RegExp]",
          b = "[object Set]",
          w = "[object String]",
          m = "[object Symbol]",
          O = "[object WeakMap]",
          k = "[object ArrayBuffer]",
          S = "[object DataView]",
          P = "[object Float32Array]",
          j = "[object Float64Array]",
          x = "[object Int8Array]",
          I = "[object Int16Array]",
          D = "[object Int32Array]",
          R = "[object Uint8Array]",
          C = "[object Uint16Array]",
          T = "[object Uint32Array]",
          A = /\b__p \+= '';/g,
          E = /\b(__p \+=) '' \+/g,
          B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          U = /&(?:amp|lt|gt|quot|#39);/g,
          N = /[&<>"']/g,
          q = RegExp(U.source),
          L = RegExp(N.source),
          M = /<%-([\s\S]+?)%>/g,
          J = /<%([\s\S]+?)%>/g,
          W = /<%=([\s\S]+?)%>/g,
          F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          V = /^\w*$/,
          z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          $ = /[\\^$.*+?()[\]{}|]/g,
          H = RegExp($.source),
          G = /^\s+/,
          K = /\s/,
          X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Y = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Z = /,? & /,
          Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          ee = /[()=,{}\[\]\/\s]/,
          te = /\\(\\)?/g,
          ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          re = /\w*$/,
          oe = /^[-+]0x[0-9a-f]+$/i,
          ie = /^0b[01]+$/i,
          se = /^\[object .+?Constructor\]$/,
          ae = /^0o[0-7]+$/i,
          ue = /^(?:0|[1-9]\d*)$/,
          ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          pe = /($^)/,
          le = /['\n\r\u2028\u2029\\]/g,
          fe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          de =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          he = "[\\ud800-\\udfff]",
          ge = "[" + de + "]",
          ye = "[" + fe + "]",
          _e = "\\d+",
          ve = "[\\u2700-\\u27bf]",
          be = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          we = "[^\\ud800-\\udfff" + de + _e + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          me = "\\ud83c[\\udffb-\\udfff]",
          Oe = "[^\\ud800-\\udfff]",
          ke = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Se = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Pe = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          je = "(?:" + be + "|" + we + ")",
          xe = "(?:" + Pe + "|" + we + ")",
          Ie = "(?:" + ye + "|" + me + ")" + "?",
          De = "[\\ufe0e\\ufe0f]?" + Ie + ("(?:\\u200d(?:" + [Oe, ke, Se].join("|") + ")[\\ufe0e\\ufe0f]?" + Ie + ")*"),
          Re = "(?:" + [ve, ke, Se].join("|") + ")" + De,
          Ce = "(?:" + [Oe + ye + "?", ye, ke, Se, he].join("|") + ")",
          Te = RegExp("['’]", "g"),
          Ae = RegExp(ye, "g"),
          Ee = RegExp(me + "(?=" + me + ")|" + Ce + De, "g"),
          Be = RegExp(
            [
              Pe + "?" + be + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [ge, Pe, "$"].join("|") + ")",
              xe + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [ge, Pe + je, "$"].join("|") + ")",
              Pe + "?" + je + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              Pe + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              _e,
              Re
            ].join("|"),
            "g"
          ),
          Ue = RegExp("[\\u200d\\ud800-\\udfff" + fe + "\\ufe0e\\ufe0f]"),
          Ne = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          qe = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout"
          ],
          Le = -1,
          Me = {};
        (Me[P] = Me[j] = Me[x] = Me[I] = Me[D] = Me[R] = Me["[object Uint8ClampedArray]"] = Me[C] = Me[T] = !0),
          (Me[u] = Me[c] = Me[k] = Me[p] = Me[S] = Me[l] = Me[f] = Me[d] = Me[g] = Me[y] = Me[_] = Me[v] = Me[b] = Me[w] = Me[O] = !1);
        var Je = {};
        (Je[u] =
          Je[c] =
          Je[k] =
          Je[S] =
          Je[p] =
          Je[l] =
          Je[P] =
          Je[j] =
          Je[x] =
          Je[I] =
          Je[D] =
          Je[g] =
          Je[y] =
          Je[_] =
          Je[v] =
          Je[b] =
          Je[w] =
          Je[m] =
          Je[R] =
          Je["[object Uint8ClampedArray]"] =
          Je[C] =
          Je[T] =
            !0),
          (Je[f] = Je[d] = Je[O] = !1);
        var We = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
          Fe = parseFloat,
          Ve = parseInt,
          ze = "object" == typeof e && e && e.Object === Object && e,
          $e = "object" == typeof self && self && self.Object === Object && self,
          He = ze || $e || Function("return this")(),
          Ge = t && !t.nodeType && t,
          Ke = Ge && "object" == typeof r && r && !r.nodeType && r,
          Xe = Ke && Ke.exports === Ge,
          Ye = Xe && ze.process,
          Ze = (function () {
            try {
              var e = Ke && Ke.require && Ke.require("util").types;
              return e || (Ye && Ye.binding && Ye.binding("util"));
            } catch (e) {}
          })(),
          Qe = Ze && Ze.isArrayBuffer,
          et = Ze && Ze.isDate,
          tt = Ze && Ze.isMap,
          nt = Ze && Ze.isRegExp,
          rt = Ze && Ze.isSet,
          ot = Ze && Ze.isTypedArray;
        function it(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        }
        function st(e, t, n, r) {
          for (var o = -1, i = null == e ? 0 : e.length; ++o < i; ) {
            var s = e[o];
            t(r, s, n(s), e);
          }
          return r;
        }
        function at(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); );
          return e;
        }
        function ut(e, t) {
          for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
          return e;
        }
        function ct(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (!t(e[n], n, e)) return !1;
          return !0;
        }
        function pt(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
            var s = e[n];
            t(s, n, e) && (i[o++] = s);
          }
          return i;
        }
        function lt(e, t) {
          return !!(null == e ? 0 : e.length) && mt(e, t, 0) > -1;
        }
        function ft(e, t, n) {
          for (var r = -1, o = null == e ? 0 : e.length; ++r < o; ) if (n(t, e[r])) return !0;
          return !1;
        }
        function dt(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
          return o;
        }
        function ht(e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
          return e;
        }
        function gt(e, t, n, r) {
          var o = -1,
            i = null == e ? 0 : e.length;
          for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
          return n;
        }
        function yt(e, t, n, r) {
          var o = null == e ? 0 : e.length;
          for (r && o && (n = e[--o]); o--; ) n = t(n, e[o], o, e);
          return n;
        }
        function _t(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
          return !1;
        }
        var vt = Pt("length");
        function bt(e, t, n) {
          var r;
          return (
            n(e, function (e, n, o) {
              if (t(e, n, o)) return (r = n), !1;
            }),
            r
          );
        }
        function wt(e, t, n, r) {
          for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; ) if (t(e[i], i, e)) return i;
          return -1;
        }
        function mt(e, t, n) {
          return t == t
            ? (function (e, t, n) {
                var r = n - 1,
                  o = e.length;
                for (; ++r < o; ) if (e[r] === t) return r;
                return -1;
              })(e, t, n)
            : wt(e, kt, n);
        }
        function Ot(e, t, n, r) {
          for (var o = n - 1, i = e.length; ++o < i; ) if (r(e[o], t)) return o;
          return -1;
        }
        function kt(e) {
          return e != e;
        }
        function St(e, t) {
          var n = null == e ? 0 : e.length;
          return n ? It(e, t) / n : NaN;
        }
        function Pt(e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        }
        function jt(e) {
          return function (t) {
            return null == e ? void 0 : e[t];
          };
        }
        function xt(e, t, n, r, o) {
          return (
            o(e, function (e, o, i) {
              n = r ? ((r = !1), e) : t(n, e, o, i);
            }),
            n
          );
        }
        function It(e, t) {
          for (var n, r = -1, o = e.length; ++r < o; ) {
            var i = t(e[r]);
            void 0 !== i && (n = void 0 === n ? i : n + i);
          }
          return n;
        }
        function Dt(e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        }
        function Rt(e) {
          return e ? e.slice(0, Gt(e) + 1).replace(G, "") : e;
        }
        function Ct(e) {
          return function (t) {
            return e(t);
          };
        }
        function Tt(e, t) {
          return dt(t, function (t) {
            return e[t];
          });
        }
        function At(e, t) {
          return e.has(t);
        }
        function Et(e, t) {
          for (var n = -1, r = e.length; ++n < r && mt(t, e[n], 0) > -1; );
          return n;
        }
        function Bt(e, t) {
          for (var n = e.length; n-- && mt(t, e[n], 0) > -1; );
          return n;
        }
        function Ut(e, t) {
          for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
          return r;
        }
        var Nt = jt({
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
          }),
          qt = jt({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
        function Lt(e) {
          return "\\" + We[e];
        }
        function Mt(e) {
          return Ue.test(e);
        }
        function Jt(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function Wt(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        function Ft(e, t) {
          for (var n = -1, r = e.length, o = 0, i = []; ++n < r; ) {
            var a = e[n];
            (a !== t && a !== s) || ((e[n] = s), (i[o++] = n));
          }
          return i;
        }
        function Vt(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        function zt(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = [e, e];
            }),
            n
          );
        }
        function $t(e) {
          return Mt(e)
            ? (function (e) {
                var t = (Ee.lastIndex = 0);
                for (; Ee.test(e); ) ++t;
                return t;
              })(e)
            : vt(e);
        }
        function Ht(e) {
          return Mt(e)
            ? (function (e) {
                return e.match(Ee) || [];
              })(e)
            : (function (e) {
                return e.split("");
              })(e);
        }
        function Gt(e) {
          for (var t = e.length; t-- && K.test(e.charAt(t)); );
          return t;
        }
        var Kt = jt({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
        var Xt = (function e(t) {
          var n,
            r = (t = null == t ? He : Xt.defaults(He.Object(), t, Xt.pick(He, qe))).Array,
            o = t.Date,
            K = t.Error,
            fe = t.Function,
            de = t.Math,
            he = t.Object,
            ge = t.RegExp,
            ye = t.String,
            _e = t.TypeError,
            ve = r.prototype,
            be = fe.prototype,
            we = he.prototype,
            me = t["__core-js_shared__"],
            Oe = be.toString,
            ke = we.hasOwnProperty,
            Se = 0,
            Pe = (n = /[^.]+$/.exec((me && me.keys && me.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "",
            je = we.toString,
            xe = Oe.call(he),
            Ie = He._,
            De = ge(
              "^" +
                Oe.call(ke)
                  .replace($, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            ),
            Re = Xe ? t.Buffer : void 0,
            Ce = t.Symbol,
            Ee = t.Uint8Array,
            Ue = Re ? Re.allocUnsafe : void 0,
            We = Wt(he.getPrototypeOf, he),
            ze = he.create,
            $e = we.propertyIsEnumerable,
            Ge = ve.splice,
            Ke = Ce ? Ce.isConcatSpreadable : void 0,
            Ye = Ce ? Ce.iterator : void 0,
            Ze = Ce ? Ce.toStringTag : void 0,
            vt = (function () {
              try {
                var e = ti(he, "defineProperty");
                return e({}, "", {}), e;
              } catch (e) {}
            })(),
            jt = t.clearTimeout !== He.clearTimeout && t.clearTimeout,
            Yt = o && o.now !== He.Date.now && o.now,
            Zt = t.setTimeout !== He.setTimeout && t.setTimeout,
            Qt = de.ceil,
            en = de.floor,
            tn = he.getOwnPropertySymbols,
            nn = Re ? Re.isBuffer : void 0,
            rn = t.isFinite,
            on = ve.join,
            sn = Wt(he.keys, he),
            an = de.max,
            un = de.min,
            cn = o.now,
            pn = t.parseInt,
            ln = de.random,
            fn = ve.reverse,
            dn = ti(t, "DataView"),
            hn = ti(t, "Map"),
            gn = ti(t, "Promise"),
            yn = ti(t, "Set"),
            _n = ti(t, "WeakMap"),
            vn = ti(he, "create"),
            bn = _n && new _n(),
            wn = {},
            mn = Ii(dn),
            On = Ii(hn),
            kn = Ii(gn),
            Sn = Ii(yn),
            Pn = Ii(_n),
            jn = Ce ? Ce.prototype : void 0,
            xn = jn ? jn.valueOf : void 0,
            In = jn ? jn.toString : void 0;
          function Dn(e) {
            if (zs(e) && !Es(e) && !(e instanceof An)) {
              if (e instanceof Tn) return e;
              if (ke.call(e, "__wrapped__")) return Di(e);
            }
            return new Tn(e);
          }
          var Rn = (function () {
            function e() {}
            return function (t) {
              if (!Vs(t)) return {};
              if (ze) return ze(t);
              e.prototype = t;
              var n = new e();
              return (e.prototype = void 0), n;
            };
          })();
          function Cn() {}
          function Tn(e, t) {
            (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = void 0);
          }
          function An(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = 4294967295),
              (this.__views__ = []);
          }
          function En(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Bn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Un(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Nn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new Un(); ++t < n; ) this.add(e[t]);
          }
          function qn(e) {
            var t = (this.__data__ = new Bn(e));
            this.size = t.size;
          }
          function Ln(e, t) {
            var n = Es(e),
              r = !n && As(e),
              o = !n && !r && qs(e),
              i = !n && !r && !o && Qs(e),
              s = n || r || o || i,
              a = s ? Dt(e.length, ye) : [],
              u = a.length;
            for (var c in e)
              (!t && !ke.call(e, c)) ||
                (s &&
                  ("length" == c ||
                    (o && ("offset" == c || "parent" == c)) ||
                    (i && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                    ui(c, u))) ||
                a.push(c);
            return a;
          }
          function Mn(e) {
            var t = e.length;
            return t ? e[Nr(0, t - 1)] : void 0;
          }
          function Jn(e, t) {
            return Pi(bo(e), Xn(t, 0, e.length));
          }
          function Wn(e) {
            return Pi(bo(e));
          }
          function Fn(e, t, n) {
            ((void 0 !== n && !Rs(e[t], n)) || (void 0 === n && !(t in e))) && Gn(e, t, n);
          }
          function Vn(e, t, n) {
            var r = e[t];
            (ke.call(e, t) && Rs(r, n) && (void 0 !== n || t in e)) || Gn(e, t, n);
          }
          function zn(e, t) {
            for (var n = e.length; n--; ) if (Rs(e[n][0], t)) return n;
            return -1;
          }
          function $n(e, t, n, r) {
            return (
              tr(e, function (e, o, i) {
                t(r, e, n(e), i);
              }),
              r
            );
          }
          function Hn(e, t) {
            return e && wo(t, ma(t), e);
          }
          function Gn(e, t, n) {
            "__proto__" == t && vt ? vt(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
          }
          function Kn(e, t) {
            for (var n = -1, o = t.length, i = r(o), s = null == e; ++n < o; ) i[n] = s ? void 0 : ya(e, t[n]);
            return i;
          }
          function Xn(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e;
          }
          function Yn(e, t, n, r, o, i) {
            var s,
              a = 1 & t,
              c = 2 & t,
              f = 4 & t;
            if ((n && (s = o ? n(e, r, o, i) : n(e)), void 0 !== s)) return s;
            if (!Vs(e)) return e;
            var O = Es(e);
            if (O) {
              if (
                ((s = (function (e) {
                  var t = e.length,
                    n = new e.constructor(t);
                  t && "string" == typeof e[0] && ke.call(e, "index") && ((n.index = e.index), (n.input = e.input));
                  return n;
                })(e)),
                !a)
              )
                return bo(e, s);
            } else {
              var A = oi(e),
                E = A == d || A == h;
              if (qs(e)) return fo(e, a);
              if (A == _ || A == u || (E && !o)) {
                if (((s = c || E ? {} : si(e)), !a))
                  return c
                    ? (function (e, t) {
                        return wo(e, ri(e), t);
                      })(
                        e,
                        (function (e, t) {
                          return e && wo(t, Oa(t), e);
                        })(s, e)
                      )
                    : (function (e, t) {
                        return wo(e, ni(e), t);
                      })(e, Hn(s, e));
              } else {
                if (!Je[A]) return o ? e : {};
                s = (function (e, t, n) {
                  var r = e.constructor;
                  switch (t) {
                    case k:
                      return ho(e);
                    case p:
                    case l:
                      return new r(+e);
                    case S:
                      return (function (e, t) {
                        var n = t ? ho(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength);
                      })(e, n);
                    case P:
                    case j:
                    case x:
                    case I:
                    case D:
                    case R:
                    case "[object Uint8ClampedArray]":
                    case C:
                    case T:
                      return go(e, n);
                    case g:
                      return new r();
                    case y:
                    case w:
                      return new r(e);
                    case v:
                      return (function (e) {
                        var t = new e.constructor(e.source, re.exec(e));
                        return (t.lastIndex = e.lastIndex), t;
                      })(e);
                    case b:
                      return new r();
                    case m:
                      return (o = e), xn ? he(xn.call(o)) : {};
                  }
                  var o;
                })(e, A, a);
              }
            }
            i || (i = new qn());
            var B = i.get(e);
            if (B) return B;
            i.set(e, s),
              Xs(e)
                ? e.forEach(function (r) {
                    s.add(Yn(r, t, n, r, e, i));
                  })
                : $s(e) &&
                  e.forEach(function (r, o) {
                    s.set(o, Yn(r, t, n, o, e, i));
                  });
            var U = O ? void 0 : (f ? (c ? Go : Ho) : c ? Oa : ma)(e);
            return (
              at(U || e, function (r, o) {
                U && (r = e[(o = r)]), Vn(s, o, Yn(r, t, n, o, e, i));
              }),
              s
            );
          }
          function Zn(e, t, n) {
            var r = n.length;
            if (null == e) return !r;
            for (e = he(e); r--; ) {
              var o = n[r],
                i = t[o],
                s = e[o];
              if ((void 0 === s && !(o in e)) || !i(s)) return !1;
            }
            return !0;
          }
          function Qn(e, t, n) {
            if ("function" != typeof e) throw new _e(i);
            return mi(function () {
              e.apply(void 0, n);
            }, t);
          }
          function er(e, t, n, r) {
            var o = -1,
              i = lt,
              s = !0,
              a = e.length,
              u = [],
              c = t.length;
            if (!a) return u;
            n && (t = dt(t, Ct(n))), r ? ((i = ft), (s = !1)) : t.length >= 200 && ((i = At), (s = !1), (t = new Nn(t)));
            e: for (; ++o < a; ) {
              var p = e[o],
                l = null == n ? p : n(p);
              if (((p = r || 0 !== p ? p : 0), s && l == l)) {
                for (var f = c; f--; ) if (t[f] === l) continue e;
                u.push(p);
              } else i(t, l, r) || u.push(p);
            }
            return u;
          }
          (Dn.templateSettings = { escape: M, evaluate: J, interpolate: W, variable: "", imports: { _: Dn } }),
            (Dn.prototype = Cn.prototype),
            (Dn.prototype.constructor = Dn),
            (Tn.prototype = Rn(Cn.prototype)),
            (Tn.prototype.constructor = Tn),
            (An.prototype = Rn(Cn.prototype)),
            (An.prototype.constructor = An),
            (En.prototype.clear = function () {
              (this.__data__ = vn ? vn(null) : {}), (this.size = 0);
            }),
            (En.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (En.prototype.get = function (e) {
              var t = this.__data__;
              if (vn) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return ke.call(t, e) ? t[e] : void 0;
            }),
            (En.prototype.has = function (e) {
              var t = this.__data__;
              return vn ? void 0 !== t[e] : ke.call(t, e);
            }),
            (En.prototype.set = function (e, t) {
              var n = this.__data__;
              return (this.size += this.has(e) ? 0 : 1), (n[e] = vn && void 0 === t ? "__lodash_hash_undefined__" : t), this;
            }),
            (Bn.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Bn.prototype.delete = function (e) {
              var t = this.__data__,
                n = zn(t, e);
              return !(n < 0) && (n == t.length - 1 ? t.pop() : Ge.call(t, n, 1), --this.size, !0);
            }),
            (Bn.prototype.get = function (e) {
              var t = this.__data__,
                n = zn(t, e);
              return n < 0 ? void 0 : t[n][1];
            }),
            (Bn.prototype.has = function (e) {
              return zn(this.__data__, e) > -1;
            }),
            (Bn.prototype.set = function (e, t) {
              var n = this.__data__,
                r = zn(n, e);
              return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
            }),
            (Un.prototype.clear = function () {
              (this.size = 0), (this.__data__ = { hash: new En(), map: new (hn || Bn)(), string: new En() });
            }),
            (Un.prototype.delete = function (e) {
              var t = Qo(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (Un.prototype.get = function (e) {
              return Qo(this, e).get(e);
            }),
            (Un.prototype.has = function (e) {
              return Qo(this, e).has(e);
            }),
            (Un.prototype.set = function (e, t) {
              var n = Qo(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (Nn.prototype.add = Nn.prototype.push =
              function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
            (Nn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (qn.prototype.clear = function () {
              (this.__data__ = new Bn()), (this.size = 0);
            }),
            (qn.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (qn.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (qn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (qn.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof Bn) {
                var r = n.__data__;
                if (!hn || r.length < 199) return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new Un(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var tr = ko(cr),
            nr = ko(pr, !0);
          function rr(e, t) {
            var n = !0;
            return (
              tr(e, function (e, r, o) {
                return (n = !!t(e, r, o));
              }),
              n
            );
          }
          function or(e, t, n) {
            for (var r = -1, o = e.length; ++r < o; ) {
              var i = e[r],
                s = t(i);
              if (null != s && (void 0 === a ? s == s && !Zs(s) : n(s, a)))
                var a = s,
                  u = i;
            }
            return u;
          }
          function ir(e, t) {
            var n = [];
            return (
              tr(e, function (e, r, o) {
                t(e, r, o) && n.push(e);
              }),
              n
            );
          }
          function sr(e, t, n, r, o) {
            var i = -1,
              s = e.length;
            for (n || (n = ai), o || (o = []); ++i < s; ) {
              var a = e[i];
              t > 0 && n(a) ? (t > 1 ? sr(a, t - 1, n, r, o) : ht(o, a)) : r || (o[o.length] = a);
            }
            return o;
          }
          var ar = So(),
            ur = So(!0);
          function cr(e, t) {
            return e && ar(e, t, ma);
          }
          function pr(e, t) {
            return e && ur(e, t, ma);
          }
          function lr(e, t) {
            return pt(t, function (t) {
              return Js(e[t]);
            });
          }
          function fr(e, t) {
            for (var n = 0, r = (t = uo(t, e)).length; null != e && n < r; ) e = e[xi(t[n++])];
            return n && n == r ? e : void 0;
          }
          function dr(e, t, n) {
            var r = t(e);
            return Es(e) ? r : ht(r, n(e));
          }
          function hr(e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : Ze && Ze in he(e)
              ? (function (e) {
                  var t = ke.call(e, Ze),
                    n = e[Ze];
                  try {
                    e[Ze] = void 0;
                    var r = !0;
                  } catch (e) {}
                  var o = je.call(e);
                  r && (t ? (e[Ze] = n) : delete e[Ze]);
                  return o;
                })(e)
              : (function (e) {
                  return je.call(e);
                })(e);
          }
          function gr(e, t) {
            return e > t;
          }
          function yr(e, t) {
            return null != e && ke.call(e, t);
          }
          function _r(e, t) {
            return null != e && t in he(e);
          }
          function vr(e, t, n) {
            for (var o = n ? ft : lt, i = e[0].length, s = e.length, a = s, u = r(s), c = 1 / 0, p = []; a--; ) {
              var l = e[a];
              a && t && (l = dt(l, Ct(t))),
                (c = un(l.length, c)),
                (u[a] = !n && (t || (i >= 120 && l.length >= 120)) ? new Nn(a && l) : void 0);
            }
            l = e[0];
            var f = -1,
              d = u[0];
            e: for (; ++f < i && p.length < c; ) {
              var h = l[f],
                g = t ? t(h) : h;
              if (((h = n || 0 !== h ? h : 0), !(d ? At(d, g) : o(p, g, n)))) {
                for (a = s; --a; ) {
                  var y = u[a];
                  if (!(y ? At(y, g) : o(e[a], g, n))) continue e;
                }
                d && d.push(g), p.push(h);
              }
            }
            return p;
          }
          function br(e, t, n) {
            var r = null == (e = _i(e, (t = uo(t, e)))) ? e : e[xi(Mi(t))];
            return null == r ? void 0 : it(r, e, n);
          }
          function wr(e) {
            return zs(e) && hr(e) == u;
          }
          function mr(e, t, n, r, o) {
            return (
              e === t ||
              (null == e || null == t || (!zs(e) && !zs(t))
                ? e != e && t != t
                : (function (e, t, n, r, o, i) {
                    var s = Es(e),
                      a = Es(t),
                      d = s ? c : oi(e),
                      h = a ? c : oi(t),
                      O = (d = d == u ? _ : d) == _,
                      P = (h = h == u ? _ : h) == _,
                      j = d == h;
                    if (j && qs(e)) {
                      if (!qs(t)) return !1;
                      (s = !0), (O = !1);
                    }
                    if (j && !O)
                      return (
                        i || (i = new qn()),
                        s || Qs(e)
                          ? zo(e, t, n, r, o, i)
                          : (function (e, t, n, r, o, i, s) {
                              switch (n) {
                                case S:
                                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                  (e = e.buffer), (t = t.buffer);
                                case k:
                                  return !(e.byteLength != t.byteLength || !i(new Ee(e), new Ee(t)));
                                case p:
                                case l:
                                case y:
                                  return Rs(+e, +t);
                                case f:
                                  return e.name == t.name && e.message == t.message;
                                case v:
                                case w:
                                  return e == t + "";
                                case g:
                                  var a = Jt;
                                case b:
                                  var u = 1 & r;
                                  if ((a || (a = Vt), e.size != t.size && !u)) return !1;
                                  var c = s.get(e);
                                  if (c) return c == t;
                                  (r |= 2), s.set(e, t);
                                  var d = zo(a(e), a(t), r, o, i, s);
                                  return s.delete(e), d;
                                case m:
                                  if (xn) return xn.call(e) == xn.call(t);
                              }
                              return !1;
                            })(e, t, d, n, r, o, i)
                      );
                    if (!(1 & n)) {
                      var x = O && ke.call(e, "__wrapped__"),
                        I = P && ke.call(t, "__wrapped__");
                      if (x || I) {
                        var D = x ? e.value() : e,
                          R = I ? t.value() : t;
                        return i || (i = new qn()), o(D, R, n, r, i);
                      }
                    }
                    if (!j) return !1;
                    return (
                      i || (i = new qn()),
                      (function (e, t, n, r, o, i) {
                        var s = 1 & n,
                          a = Ho(e),
                          u = a.length,
                          c = Ho(t).length;
                        if (u != c && !s) return !1;
                        var p = u;
                        for (; p--; ) {
                          var l = a[p];
                          if (!(s ? l in t : ke.call(t, l))) return !1;
                        }
                        var f = i.get(e),
                          d = i.get(t);
                        if (f && d) return f == t && d == e;
                        var h = !0;
                        i.set(e, t), i.set(t, e);
                        var g = s;
                        for (; ++p < u; ) {
                          l = a[p];
                          var y = e[l],
                            _ = t[l];
                          if (r) var v = s ? r(_, y, l, t, e, i) : r(y, _, l, e, t, i);
                          if (!(void 0 === v ? y === _ || o(y, _, n, r, i) : v)) {
                            h = !1;
                            break;
                          }
                          g || (g = "constructor" == l);
                        }
                        if (h && !g) {
                          var b = e.constructor,
                            w = t.constructor;
                          b == w ||
                            !("constructor" in e) ||
                            !("constructor" in t) ||
                            ("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) ||
                            (h = !1);
                        }
                        return i.delete(e), i.delete(t), h;
                      })(e, t, n, r, o, i)
                    );
                  })(e, t, n, r, mr, o))
            );
          }
          function Or(e, t, n, r) {
            var o = n.length,
              i = o,
              s = !r;
            if (null == e) return !i;
            for (e = he(e); o--; ) {
              var a = n[o];
              if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
            }
            for (; ++o < i; ) {
              var u = (a = n[o])[0],
                c = e[u],
                p = a[1];
              if (s && a[2]) {
                if (void 0 === c && !(u in e)) return !1;
              } else {
                var l = new qn();
                if (r) var f = r(c, p, u, e, t, l);
                if (!(void 0 === f ? mr(p, c, 3, r, l) : f)) return !1;
              }
            }
            return !0;
          }
          function kr(e) {
            return !(!Vs(e) || ((t = e), Pe && Pe in t)) && (Js(e) ? De : se).test(Ii(e));
            var t;
          }
          function Sr(e) {
            return "function" == typeof e ? e : null == e ? Ha : "object" == typeof e ? (Es(e) ? Rr(e[0], e[1]) : Dr(e)) : nu(e);
          }
          function Pr(e) {
            if (!di(e)) return sn(e);
            var t = [];
            for (var n in he(e)) ke.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function jr(e) {
            if (!Vs(e))
              return (function (e) {
                var t = [];
                if (null != e) for (var n in he(e)) t.push(n);
                return t;
              })(e);
            var t = di(e),
              n = [];
            for (var r in e) ("constructor" != r || (!t && ke.call(e, r))) && n.push(r);
            return n;
          }
          function xr(e, t) {
            return e < t;
          }
          function Ir(e, t) {
            var n = -1,
              o = Us(e) ? r(e.length) : [];
            return (
              tr(e, function (e, r, i) {
                o[++n] = t(e, r, i);
              }),
              o
            );
          }
          function Dr(e) {
            var t = ei(e);
            return 1 == t.length && t[0][2]
              ? gi(t[0][0], t[0][1])
              : function (n) {
                  return n === e || Or(n, e, t);
                };
          }
          function Rr(e, t) {
            return pi(e) && hi(t)
              ? gi(xi(e), t)
              : function (n) {
                  var r = ya(n, e);
                  return void 0 === r && r === t ? _a(n, e) : mr(t, r, 3);
                };
          }
          function Cr(e, t, n, r, o) {
            e !== t &&
              ar(
                t,
                function (i, s) {
                  if ((o || (o = new qn()), Vs(i)))
                    !(function (e, t, n, r, o, i, s) {
                      var a = bi(e, n),
                        u = bi(t, n),
                        c = s.get(u);
                      if (c) return void Fn(e, n, c);
                      var p = i ? i(a, u, n + "", e, t, s) : void 0,
                        l = void 0 === p;
                      if (l) {
                        var f = Es(u),
                          d = !f && qs(u),
                          h = !f && !d && Qs(u);
                        (p = u),
                          f || d || h
                            ? Es(a)
                              ? (p = a)
                              : Ns(a)
                              ? (p = bo(a))
                              : d
                              ? ((l = !1), (p = fo(u, !0)))
                              : h
                              ? ((l = !1), (p = go(u, !0)))
                              : (p = [])
                            : Gs(u) || As(u)
                            ? ((p = a), As(a) ? (p = aa(a)) : (Vs(a) && !Js(a)) || (p = si(u)))
                            : (l = !1);
                      }
                      l && (s.set(u, p), o(p, u, r, i, s), s.delete(u));
                      Fn(e, n, p);
                    })(e, t, s, n, Cr, r, o);
                  else {
                    var a = r ? r(bi(e, s), i, s + "", e, t, o) : void 0;
                    void 0 === a && (a = i), Fn(e, s, a);
                  }
                },
                Oa
              );
          }
          function Tr(e, t) {
            var n = e.length;
            if (n) return ui((t += t < 0 ? n : 0), n) ? e[t] : void 0;
          }
          function Ar(e, t, n) {
            t = t.length
              ? dt(t, function (e) {
                  return Es(e)
                    ? function (t) {
                        return fr(t, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [Ha];
            var r = -1;
            return (
              (t = dt(t, Ct(Zo()))),
              (function (e, t) {
                var n = e.length;
                for (e.sort(t); n--; ) e[n] = e[n].value;
                return e;
              })(
                Ir(e, function (e, n, o) {
                  return {
                    criteria: dt(t, function (t) {
                      return t(e);
                    }),
                    index: ++r,
                    value: e
                  };
                }),
                function (e, t) {
                  return (function (e, t, n) {
                    var r = -1,
                      o = e.criteria,
                      i = t.criteria,
                      s = o.length,
                      a = n.length;
                    for (; ++r < s; ) {
                      var u = yo(o[r], i[r]);
                      if (u) {
                        if (r >= a) return u;
                        var c = n[r];
                        return u * ("desc" == c ? -1 : 1);
                      }
                    }
                    return e.index - t.index;
                  })(e, t, n);
                }
              )
            );
          }
          function Er(e, t, n) {
            for (var r = -1, o = t.length, i = {}; ++r < o; ) {
              var s = t[r],
                a = fr(e, s);
              n(a, s) && Wr(i, uo(s, e), a);
            }
            return i;
          }
          function Br(e, t, n, r) {
            var o = r ? Ot : mt,
              i = -1,
              s = t.length,
              a = e;
            for (e === t && (t = bo(t)), n && (a = dt(e, Ct(n))); ++i < s; )
              for (var u = 0, c = t[i], p = n ? n(c) : c; (u = o(a, p, u, r)) > -1; ) a !== e && Ge.call(a, u, 1), Ge.call(e, u, 1);
            return e;
          }
          function Ur(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
              var o = t[n];
              if (n == r || o !== i) {
                var i = o;
                ui(o) ? Ge.call(e, o, 1) : eo(e, o);
              }
            }
            return e;
          }
          function Nr(e, t) {
            return e + en(ln() * (t - e + 1));
          }
          function qr(e, t) {
            var n = "";
            if (!e || t < 1 || t > 9007199254740991) return n;
            do {
              t % 2 && (n += e), (t = en(t / 2)) && (e += e);
            } while (t);
            return n;
          }
          function Lr(e, t) {
            return Oi(yi(e, t, Ha), e + "");
          }
          function Mr(e) {
            return Mn(Ra(e));
          }
          function Jr(e, t) {
            var n = Ra(e);
            return Pi(n, Xn(t, 0, n.length));
          }
          function Wr(e, t, n, r) {
            if (!Vs(e)) return e;
            for (var o = -1, i = (t = uo(t, e)).length, s = i - 1, a = e; null != a && ++o < i; ) {
              var u = xi(t[o]),
                c = n;
              if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
              if (o != s) {
                var p = a[u];
                void 0 === (c = r ? r(p, u, a) : void 0) && (c = Vs(p) ? p : ui(t[o + 1]) ? [] : {});
              }
              Vn(a, u, c), (a = a[u]);
            }
            return e;
          }
          var Fr = bn
              ? function (e, t) {
                  return bn.set(e, t), e;
                }
              : Ha,
            Vr = vt
              ? function (e, t) {
                  return vt(e, "toString", { configurable: !0, enumerable: !1, value: Va(t), writable: !0 });
                }
              : Ha;
          function zr(e) {
            return Pi(Ra(e));
          }
          function $r(e, t, n) {
            var o = -1,
              i = e.length;
            t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), (i = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
            for (var s = r(i); ++o < i; ) s[o] = e[o + t];
            return s;
          }
          function Hr(e, t) {
            var n;
            return (
              tr(e, function (e, r, o) {
                return !(n = t(e, r, o));
              }),
              !!n
            );
          }
          function Gr(e, t, n) {
            var r = 0,
              o = null == e ? r : e.length;
            if ("number" == typeof t && t == t && o <= 2147483647) {
              for (; r < o; ) {
                var i = (r + o) >>> 1,
                  s = e[i];
                null !== s && !Zs(s) && (n ? s <= t : s < t) ? (r = i + 1) : (o = i);
              }
              return o;
            }
            return Kr(e, t, Ha, n);
          }
          function Kr(e, t, n, r) {
            var o = 0,
              i = null == e ? 0 : e.length;
            if (0 === i) return 0;
            for (var s = (t = n(t)) != t, a = null === t, u = Zs(t), c = void 0 === t; o < i; ) {
              var p = en((o + i) / 2),
                l = n(e[p]),
                f = void 0 !== l,
                d = null === l,
                h = l == l,
                g = Zs(l);
              if (s) var y = r || h;
              else y = c ? h && (r || f) : a ? h && f && (r || !d) : u ? h && f && !d && (r || !g) : !d && !g && (r ? l <= t : l < t);
              y ? (o = p + 1) : (i = p);
            }
            return un(i, 4294967294);
          }
          function Xr(e, t) {
            for (var n = -1, r = e.length, o = 0, i = []; ++n < r; ) {
              var s = e[n],
                a = t ? t(s) : s;
              if (!n || !Rs(a, u)) {
                var u = a;
                i[o++] = 0 === s ? 0 : s;
              }
            }
            return i;
          }
          function Yr(e) {
            return "number" == typeof e ? e : Zs(e) ? NaN : +e;
          }
          function Zr(e) {
            if ("string" == typeof e) return e;
            if (Es(e)) return dt(e, Zr) + "";
            if (Zs(e)) return In ? In.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function Qr(e, t, n) {
            var r = -1,
              o = lt,
              i = e.length,
              s = !0,
              a = [],
              u = a;
            if (n) (s = !1), (o = ft);
            else if (i >= 200) {
              var c = t ? null : Lo(e);
              if (c) return Vt(c);
              (s = !1), (o = At), (u = new Nn());
            } else u = t ? [] : a;
            e: for (; ++r < i; ) {
              var p = e[r],
                l = t ? t(p) : p;
              if (((p = n || 0 !== p ? p : 0), s && l == l)) {
                for (var f = u.length; f--; ) if (u[f] === l) continue e;
                t && u.push(l), a.push(p);
              } else o(u, l, n) || (u !== a && u.push(l), a.push(p));
            }
            return a;
          }
          function eo(e, t) {
            return null == (e = _i(e, (t = uo(t, e)))) || delete e[xi(Mi(t))];
          }
          function to(e, t, n, r) {
            return Wr(e, t, n(fr(e, t)), r);
          }
          function no(e, t, n, r) {
            for (var o = e.length, i = r ? o : -1; (r ? i-- : ++i < o) && t(e[i], i, e); );
            return n ? $r(e, r ? 0 : i, r ? i + 1 : o) : $r(e, r ? i + 1 : 0, r ? o : i);
          }
          function ro(e, t) {
            var n = e;
            return (
              n instanceof An && (n = n.value()),
              gt(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, ht([e], t.args));
                },
                n
              )
            );
          }
          function oo(e, t, n) {
            var o = e.length;
            if (o < 2) return o ? Qr(e[0]) : [];
            for (var i = -1, s = r(o); ++i < o; ) for (var a = e[i], u = -1; ++u < o; ) u != i && (s[i] = er(s[i] || a, e[u], t, n));
            return Qr(sr(s, 1), t, n);
          }
          function io(e, t, n) {
            for (var r = -1, o = e.length, i = t.length, s = {}; ++r < o; ) {
              var a = r < i ? t[r] : void 0;
              n(s, e[r], a);
            }
            return s;
          }
          function so(e) {
            return Ns(e) ? e : [];
          }
          function ao(e) {
            return "function" == typeof e ? e : Ha;
          }
          function uo(e, t) {
            return Es(e) ? e : pi(e, t) ? [e] : ji(ua(e));
          }
          var co = Lr;
          function po(e, t, n) {
            var r = e.length;
            return (n = void 0 === n ? r : n), !t && n >= r ? e : $r(e, t, n);
          }
          var lo =
            jt ||
            function (e) {
              return He.clearTimeout(e);
            };
          function fo(e, t) {
            if (t) return e.slice();
            var n = e.length,
              r = Ue ? Ue(n) : new e.constructor(n);
            return e.copy(r), r;
          }
          function ho(e) {
            var t = new e.constructor(e.byteLength);
            return new Ee(t).set(new Ee(e)), t;
          }
          function go(e, t) {
            var n = t ? ho(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
          }
          function yo(e, t) {
            if (e !== t) {
              var n = void 0 !== e,
                r = null === e,
                o = e == e,
                i = Zs(e),
                s = void 0 !== t,
                a = null === t,
                u = t == t,
                c = Zs(t);
              if ((!a && !c && !i && e > t) || (i && s && u && !a && !c) || (r && s && u) || (!n && u) || !o) return 1;
              if ((!r && !i && !c && e < t) || (c && n && o && !r && !i) || (a && n && o) || (!s && o) || !u) return -1;
            }
            return 0;
          }
          function _o(e, t, n, o) {
            for (var i = -1, s = e.length, a = n.length, u = -1, c = t.length, p = an(s - a, 0), l = r(c + p), f = !o; ++u < c; )
              l[u] = t[u];
            for (; ++i < a; ) (f || i < s) && (l[n[i]] = e[i]);
            for (; p--; ) l[u++] = e[i++];
            return l;
          }
          function vo(e, t, n, o) {
            for (var i = -1, s = e.length, a = -1, u = n.length, c = -1, p = t.length, l = an(s - u, 0), f = r(l + p), d = !o; ++i < l; )
              f[i] = e[i];
            for (var h = i; ++c < p; ) f[h + c] = t[c];
            for (; ++a < u; ) (d || i < s) && (f[h + n[a]] = e[i++]);
            return f;
          }
          function bo(e, t) {
            var n = -1,
              o = e.length;
            for (t || (t = r(o)); ++n < o; ) t[n] = e[n];
            return t;
          }
          function wo(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var i = -1, s = t.length; ++i < s; ) {
              var a = t[i],
                u = r ? r(n[a], e[a], a, n, e) : void 0;
              void 0 === u && (u = e[a]), o ? Gn(n, a, u) : Vn(n, a, u);
            }
            return n;
          }
          function mo(e, t) {
            return function (n, r) {
              var o = Es(n) ? st : $n,
                i = t ? t() : {};
              return o(n, e, Zo(r, 2), i);
            };
          }
          function Oo(e) {
            return Lr(function (t, n) {
              var r = -1,
                o = n.length,
                i = o > 1 ? n[o - 1] : void 0,
                s = o > 2 ? n[2] : void 0;
              for (
                i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0,
                  s && ci(n[0], n[1], s) && ((i = o < 3 ? void 0 : i), (o = 1)),
                  t = he(t);
                ++r < o;

              ) {
                var a = n[r];
                a && e(t, a, r, i);
              }
              return t;
            });
          }
          function ko(e, t) {
            return function (n, r) {
              if (null == n) return n;
              if (!Us(n)) return e(n, r);
              for (var o = n.length, i = t ? o : -1, s = he(n); (t ? i-- : ++i < o) && !1 !== r(s[i], i, s); );
              return n;
            };
          }
          function So(e) {
            return function (t, n, r) {
              for (var o = -1, i = he(t), s = r(t), a = s.length; a--; ) {
                var u = s[e ? a : ++o];
                if (!1 === n(i[u], u, i)) break;
              }
              return t;
            };
          }
          function Po(e) {
            return function (t) {
              var n = Mt((t = ua(t))) ? Ht(t) : void 0,
                r = n ? n[0] : t.charAt(0),
                o = n ? po(n, 1).join("") : t.slice(1);
              return r[e]() + o;
            };
          }
          function jo(e) {
            return function (t) {
              return gt(Ja(Aa(t).replace(Te, "")), e, "");
            };
          }
          function xo(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var n = Rn(e.prototype),
                r = e.apply(n, t);
              return Vs(r) ? r : n;
            };
          }
          function Io(e) {
            return function (t, n, r) {
              var o = he(t);
              if (!Us(t)) {
                var i = Zo(n, 3);
                (t = ma(t)),
                  (n = function (e) {
                    return i(o[e], e, o);
                  });
              }
              var s = e(t, n, r);
              return s > -1 ? o[i ? t[s] : s] : void 0;
            };
          }
          function Do(e) {
            return $o(function (t) {
              var n = t.length,
                r = n,
                o = Tn.prototype.thru;
              for (e && t.reverse(); r--; ) {
                var s = t[r];
                if ("function" != typeof s) throw new _e(i);
                if (o && !a && "wrapper" == Xo(s)) var a = new Tn([], !0);
              }
              for (r = a ? r : n; ++r < n; ) {
                var u = Xo((s = t[r])),
                  c = "wrapper" == u ? Ko(s) : void 0;
                a =
                  c && li(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9]
                    ? a[Xo(c[0])].apply(a, c[3])
                    : 1 == s.length && li(s)
                    ? a[u]()
                    : a.thru(s);
              }
              return function () {
                var e = arguments,
                  r = e[0];
                if (a && 1 == e.length && Es(r)) return a.plant(r).value();
                for (var o = 0, i = n ? t[o].apply(this, e) : r; ++o < n; ) i = t[o].call(this, i);
                return i;
              };
            });
          }
          function Ro(e, t, n, o, i, s, a, u, c, p) {
            var l = 128 & t,
              f = 1 & t,
              d = 2 & t,
              h = 24 & t,
              g = 512 & t,
              y = d ? void 0 : xo(e);
            return function _() {
              for (var v = arguments.length, b = r(v), w = v; w--; ) b[w] = arguments[w];
              if (h)
                var m = Yo(_),
                  O = Ut(b, m);
              if ((o && (b = _o(b, o, i, h)), s && (b = vo(b, s, a, h)), (v -= O), h && v < p)) {
                var k = Ft(b, m);
                return No(e, t, Ro, _.placeholder, n, b, k, u, c, p - v);
              }
              var S = f ? n : this,
                P = d ? S[e] : e;
              return (
                (v = b.length),
                u ? (b = vi(b, u)) : g && v > 1 && b.reverse(),
                l && c < v && (b.length = c),
                this && this !== He && this instanceof _ && (P = y || xo(P)),
                P.apply(S, b)
              );
            };
          }
          function Co(e, t) {
            return function (n, r) {
              return (function (e, t, n, r) {
                return (
                  cr(e, function (e, o, i) {
                    t(r, n(e), o, i);
                  }),
                  r
                );
              })(n, e, t(r), {});
            };
          }
          function To(e, t) {
            return function (n, r) {
              var o;
              if (void 0 === n && void 0 === r) return t;
              if ((void 0 !== n && (o = n), void 0 !== r)) {
                if (void 0 === o) return r;
                "string" == typeof n || "string" == typeof r ? ((n = Zr(n)), (r = Zr(r))) : ((n = Yr(n)), (r = Yr(r))), (o = e(n, r));
              }
              return o;
            };
          }
          function Ao(e) {
            return $o(function (t) {
              return (
                (t = dt(t, Ct(Zo()))),
                Lr(function (n) {
                  var r = this;
                  return e(t, function (e) {
                    return it(e, r, n);
                  });
                })
              );
            });
          }
          function Eo(e, t) {
            var n = (t = void 0 === t ? " " : Zr(t)).length;
            if (n < 2) return n ? qr(t, e) : t;
            var r = qr(t, Qt(e / $t(t)));
            return Mt(t) ? po(Ht(r), 0, e).join("") : r.slice(0, e);
          }
          function Bo(e) {
            return function (t, n, o) {
              return (
                o && "number" != typeof o && ci(t, n, o) && (n = o = void 0),
                (t = ra(t)),
                void 0 === n ? ((n = t), (t = 0)) : (n = ra(n)),
                (function (e, t, n, o) {
                  for (var i = -1, s = an(Qt((t - e) / (n || 1)), 0), a = r(s); s--; ) (a[o ? s : ++i] = e), (e += n);
                  return a;
                })(t, n, (o = void 0 === o ? (t < n ? 1 : -1) : ra(o)), e)
              );
            };
          }
          function Uo(e) {
            return function (t, n) {
              return ("string" == typeof t && "string" == typeof n) || ((t = sa(t)), (n = sa(n))), e(t, n);
            };
          }
          function No(e, t, n, r, o, i, s, a, u, c) {
            var p = 8 & t;
            (t |= p ? 32 : 64), 4 & (t &= ~(p ? 64 : 32)) || (t &= -4);
            var l = [e, t, o, p ? i : void 0, p ? s : void 0, p ? void 0 : i, p ? void 0 : s, a, u, c],
              f = n.apply(void 0, l);
            return li(e) && wi(f, l), (f.placeholder = r), ki(f, e, t);
          }
          function qo(e) {
            var t = de[e];
            return function (e, n) {
              if (((e = sa(e)), (n = null == n ? 0 : un(oa(n), 292)) && rn(e))) {
                var r = (ua(e) + "e").split("e");
                return +((r = (ua(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n));
              }
              return t(e);
            };
          }
          var Lo =
            yn && 1 / Vt(new yn([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new yn(e);
                }
              : Za;
          function Mo(e) {
            return function (t) {
              var n = oi(t);
              return n == g
                ? Jt(t)
                : n == b
                ? zt(t)
                : (function (e, t) {
                    return dt(t, function (t) {
                      return [t, e[t]];
                    });
                  })(t, e(t));
            };
          }
          function Jo(e, t, n, o, a, u, c, p) {
            var l = 2 & t;
            if (!l && "function" != typeof e) throw new _e(i);
            var f = o ? o.length : 0;
            if (
              (f || ((t &= -97), (o = a = void 0)),
              (c = void 0 === c ? c : an(oa(c), 0)),
              (p = void 0 === p ? p : oa(p)),
              (f -= a ? a.length : 0),
              64 & t)
            ) {
              var d = o,
                h = a;
              o = a = void 0;
            }
            var g = l ? void 0 : Ko(e),
              y = [e, t, n, o, a, d, h, u, c, p];
            if (
              (g &&
                (function (e, t) {
                  var n = e[1],
                    r = t[1],
                    o = n | r,
                    i = o < 131,
                    a =
                      (128 == r && 8 == n) || (128 == r && 256 == n && e[7].length <= t[8]) || (384 == r && t[7].length <= t[8] && 8 == n);
                  if (!i && !a) return e;
                  1 & r && ((e[2] = t[2]), (o |= 1 & n ? 0 : 4));
                  var u = t[3];
                  if (u) {
                    var c = e[3];
                    (e[3] = c ? _o(c, u, t[4]) : u), (e[4] = c ? Ft(e[3], s) : t[4]);
                  }
                  (u = t[5]) && ((c = e[5]), (e[5] = c ? vo(c, u, t[6]) : u), (e[6] = c ? Ft(e[5], s) : t[6]));
                  (u = t[7]) && (e[7] = u);
                  128 & r && (e[8] = null == e[8] ? t[8] : un(e[8], t[8]));
                  null == e[9] && (e[9] = t[9]);
                  (e[0] = t[0]), (e[1] = o);
                })(y, g),
              (e = y[0]),
              (t = y[1]),
              (n = y[2]),
              (o = y[3]),
              (a = y[4]),
              !(p = y[9] = void 0 === y[9] ? (l ? 0 : e.length) : an(y[9] - f, 0)) && 24 & t && (t &= -25),
              t && 1 != t)
            )
              _ =
                8 == t || 16 == t
                  ? (function (e, t, n) {
                      var o = xo(e);
                      return function i() {
                        for (var s = arguments.length, a = r(s), u = s, c = Yo(i); u--; ) a[u] = arguments[u];
                        var p = s < 3 && a[0] !== c && a[s - 1] !== c ? [] : Ft(a, c);
                        if ((s -= p.length) < n) return No(e, t, Ro, i.placeholder, void 0, a, p, void 0, void 0, n - s);
                        var l = this && this !== He && this instanceof i ? o : e;
                        return it(l, this, a);
                      };
                    })(e, t, p)
                  : (32 != t && 33 != t) || a.length
                  ? Ro.apply(void 0, y)
                  : (function (e, t, n, o) {
                      var i = 1 & t,
                        s = xo(e);
                      return function t() {
                        for (
                          var a = -1,
                            u = arguments.length,
                            c = -1,
                            p = o.length,
                            l = r(p + u),
                            f = this && this !== He && this instanceof t ? s : e;
                          ++c < p;

                        )
                          l[c] = o[c];
                        for (; u--; ) l[c++] = arguments[++a];
                        return it(f, i ? n : this, l);
                      };
                    })(e, t, n, o);
            else
              var _ = (function (e, t, n) {
                var r = 1 & t,
                  o = xo(e);
                return function t() {
                  var i = this && this !== He && this instanceof t ? o : e;
                  return i.apply(r ? n : this, arguments);
                };
              })(e, t, n);
            return ki((g ? Fr : wi)(_, y), e, t);
          }
          function Wo(e, t, n, r) {
            return void 0 === e || (Rs(e, we[n]) && !ke.call(r, n)) ? t : e;
          }
          function Fo(e, t, n, r, o, i) {
            return Vs(e) && Vs(t) && (i.set(t, e), Cr(e, t, void 0, Fo, i), i.delete(t)), e;
          }
          function Vo(e) {
            return Gs(e) ? void 0 : e;
          }
          function zo(e, t, n, r, o, i) {
            var s = 1 & n,
              a = e.length,
              u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var c = i.get(e),
              p = i.get(t);
            if (c && p) return c == t && p == e;
            var l = -1,
              f = !0,
              d = 2 & n ? new Nn() : void 0;
            for (i.set(e, t), i.set(t, e); ++l < a; ) {
              var h = e[l],
                g = t[l];
              if (r) var y = s ? r(g, h, l, t, e, i) : r(h, g, l, e, t, i);
              if (void 0 !== y) {
                if (y) continue;
                f = !1;
                break;
              }
              if (d) {
                if (
                  !_t(t, function (e, t) {
                    if (!At(d, t) && (h === e || o(h, e, n, r, i))) return d.push(t);
                  })
                ) {
                  f = !1;
                  break;
                }
              } else if (h !== g && !o(h, g, n, r, i)) {
                f = !1;
                break;
              }
            }
            return i.delete(e), i.delete(t), f;
          }
          function $o(e) {
            return Oi(yi(e, void 0, Bi), e + "");
          }
          function Ho(e) {
            return dr(e, ma, ni);
          }
          function Go(e) {
            return dr(e, Oa, ri);
          }
          var Ko = bn
            ? function (e) {
                return bn.get(e);
              }
            : Za;
          function Xo(e) {
            for (var t = e.name + "", n = wn[t], r = ke.call(wn, t) ? n.length : 0; r--; ) {
              var o = n[r],
                i = o.func;
              if (null == i || i == e) return o.name;
            }
            return t;
          }
          function Yo(e) {
            return (ke.call(Dn, "placeholder") ? Dn : e).placeholder;
          }
          function Zo() {
            var e = Dn.iteratee || Ga;
            return (e = e === Ga ? Sr : e), arguments.length ? e(arguments[0], arguments[1]) : e;
          }
          function Qo(e, t) {
            var n,
              r,
              o = e.__data__;
            return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n)
              ? o["string" == typeof t ? "string" : "hash"]
              : o.map;
          }
          function ei(e) {
            for (var t = ma(e), n = t.length; n--; ) {
              var r = t[n],
                o = e[r];
              t[n] = [r, o, hi(o)];
            }
            return t;
          }
          function ti(e, t) {
            var n = (function (e, t) {
              return null == e ? void 0 : e[t];
            })(e, t);
            return kr(n) ? n : void 0;
          }
          var ni = tn
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = he(e)),
                      pt(tn(e), function (t) {
                        return $e.call(e, t);
                      }));
                }
              : iu,
            ri = tn
              ? function (e) {
                  for (var t = []; e; ) ht(t, ni(e)), (e = We(e));
                  return t;
                }
              : iu,
            oi = hr;
          function ii(e, t, n) {
            for (var r = -1, o = (t = uo(t, e)).length, i = !1; ++r < o; ) {
              var s = xi(t[r]);
              if (!(i = null != e && n(e, s))) break;
              e = e[s];
            }
            return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && Fs(o) && ui(s, o) && (Es(e) || As(e));
          }
          function si(e) {
            return "function" != typeof e.constructor || di(e) ? {} : Rn(We(e));
          }
          function ai(e) {
            return Es(e) || As(e) || !!(Ke && e && e[Ke]);
          }
          function ui(e, t) {
            var n = typeof e;
            return (
              !!(t = null == t ? 9007199254740991 : t) && ("number" == n || ("symbol" != n && ue.test(e))) && e > -1 && e % 1 == 0 && e < t
            );
          }
          function ci(e, t, n) {
            if (!Vs(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? Us(n) && ui(t, n.length) : "string" == r && t in n) && Rs(n[t], e);
          }
          function pi(e, t) {
            if (Es(e)) return !1;
            var n = typeof e;
            return (
              !("number" != n && "symbol" != n && "boolean" != n && null != e && !Zs(e)) ||
              V.test(e) ||
              !F.test(e) ||
              (null != t && e in he(t))
            );
          }
          function li(e) {
            var t = Xo(e),
              n = Dn[t];
            if ("function" != typeof n || !(t in An.prototype)) return !1;
            if (e === n) return !0;
            var r = Ko(n);
            return !!r && e === r[0];
          }
          ((dn && oi(new dn(new ArrayBuffer(1))) != S) ||
            (hn && oi(new hn()) != g) ||
            (gn && "[object Promise]" != oi(gn.resolve())) ||
            (yn && oi(new yn()) != b) ||
            (_n && oi(new _n()) != O)) &&
            (oi = function (e) {
              var t = hr(e),
                n = t == _ ? e.constructor : void 0,
                r = n ? Ii(n) : "";
              if (r)
                switch (r) {
                  case mn:
                    return S;
                  case On:
                    return g;
                  case kn:
                    return "[object Promise]";
                  case Sn:
                    return b;
                  case Pn:
                    return O;
                }
              return t;
            });
          var fi = me ? Js : su;
          function di(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || we);
          }
          function hi(e) {
            return e == e && !Vs(e);
          }
          function gi(e, t) {
            return function (n) {
              return null != n && n[e] === t && (void 0 !== t || e in he(n));
            };
          }
          function yi(e, t, n) {
            return (
              (t = an(void 0 === t ? e.length - 1 : t, 0)),
              function () {
                for (var o = arguments, i = -1, s = an(o.length - t, 0), a = r(s); ++i < s; ) a[i] = o[t + i];
                i = -1;
                for (var u = r(t + 1); ++i < t; ) u[i] = o[i];
                return (u[t] = n(a)), it(e, this, u);
              }
            );
          }
          function _i(e, t) {
            return t.length < 2 ? e : fr(e, $r(t, 0, -1));
          }
          function vi(e, t) {
            for (var n = e.length, r = un(t.length, n), o = bo(e); r--; ) {
              var i = t[r];
              e[r] = ui(i, n) ? o[i] : void 0;
            }
            return e;
          }
          function bi(e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
          }
          var wi = Si(Fr),
            mi =
              Zt ||
              function (e, t) {
                return He.setTimeout(e, t);
              },
            Oi = Si(Vr);
          function ki(e, t, n) {
            var r = t + "";
            return Oi(
              e,
              (function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]), (t = t.join(n > 2 ? ", " : " ")), e.replace(X, "{\n/* [wrapped with " + t + "] */\n")
                );
              })(
                r,
                (function (e, t) {
                  return (
                    at(a, function (n) {
                      var r = "_." + n[0];
                      t & n[1] && !lt(e, r) && e.push(r);
                    }),
                    e.sort()
                  );
                })(
                  (function (e) {
                    var t = e.match(Y);
                    return t ? t[1].split(Z) : [];
                  })(r),
                  n
                )
              )
            );
          }
          function Si(e) {
            var t = 0,
              n = 0;
            return function () {
              var r = cn(),
                o = 16 - (r - n);
              if (((n = r), o > 0)) {
                if (++t >= 800) return arguments[0];
              } else t = 0;
              return e.apply(void 0, arguments);
            };
          }
          function Pi(e, t) {
            var n = -1,
              r = e.length,
              o = r - 1;
            for (t = void 0 === t ? r : t; ++n < t; ) {
              var i = Nr(n, o),
                s = e[i];
              (e[i] = e[n]), (e[n] = s);
            }
            return (e.length = t), e;
          }
          var ji = (function (e) {
            var t = Ss(e, function (e) {
                return 500 === n.size && n.clear(), e;
              }),
              n = t.cache;
            return t;
          })(function (e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(""),
              e.replace(z, function (e, n, r, o) {
                t.push(r ? o.replace(te, "$1") : n || e);
              }),
              t
            );
          });
          function xi(e) {
            if ("string" == typeof e || Zs(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function Ii(e) {
            if (null != e) {
              try {
                return Oe.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          function Di(e) {
            if (e instanceof An) return e.clone();
            var t = new Tn(e.__wrapped__, e.__chain__);
            return (t.__actions__ = bo(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
          }
          var Ri = Lr(function (e, t) {
              return Ns(e) ? er(e, sr(t, 1, Ns, !0)) : [];
            }),
            Ci = Lr(function (e, t) {
              var n = Mi(t);
              return Ns(n) && (n = void 0), Ns(e) ? er(e, sr(t, 1, Ns, !0), Zo(n, 2)) : [];
            }),
            Ti = Lr(function (e, t) {
              var n = Mi(t);
              return Ns(n) && (n = void 0), Ns(e) ? er(e, sr(t, 1, Ns, !0), void 0, n) : [];
            });
          function Ai(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var o = null == n ? 0 : oa(n);
            return o < 0 && (o = an(r + o, 0)), wt(e, Zo(t, 3), o);
          }
          function Ei(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var o = r - 1;
            return void 0 !== n && ((o = oa(n)), (o = n < 0 ? an(r + o, 0) : un(o, r - 1))), wt(e, Zo(t, 3), o, !0);
          }
          function Bi(e) {
            return (null == e ? 0 : e.length) ? sr(e, 1) : [];
          }
          function Ui(e) {
            return e && e.length ? e[0] : void 0;
          }
          var Ni = Lr(function (e) {
              var t = dt(e, so);
              return t.length && t[0] === e[0] ? vr(t) : [];
            }),
            qi = Lr(function (e) {
              var t = Mi(e),
                n = dt(e, so);
              return t === Mi(n) ? (t = void 0) : n.pop(), n.length && n[0] === e[0] ? vr(n, Zo(t, 2)) : [];
            }),
            Li = Lr(function (e) {
              var t = Mi(e),
                n = dt(e, so);
              return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? vr(n, void 0, t) : [];
            });
          function Mi(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : void 0;
          }
          var Ji = Lr(Wi);
          function Wi(e, t) {
            return e && e.length && t && t.length ? Br(e, t) : e;
          }
          var Fi = $o(function (e, t) {
            var n = null == e ? 0 : e.length,
              r = Kn(e, t);
            return (
              Ur(
                e,
                dt(t, function (e) {
                  return ui(e, n) ? +e : e;
                }).sort(yo)
              ),
              r
            );
          });
          function Vi(e) {
            return null == e ? e : fn.call(e);
          }
          var zi = Lr(function (e) {
              return Qr(sr(e, 1, Ns, !0));
            }),
            $i = Lr(function (e) {
              var t = Mi(e);
              return Ns(t) && (t = void 0), Qr(sr(e, 1, Ns, !0), Zo(t, 2));
            }),
            Hi = Lr(function (e) {
              var t = Mi(e);
              return (t = "function" == typeof t ? t : void 0), Qr(sr(e, 1, Ns, !0), void 0, t);
            });
          function Gi(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = pt(e, function (e) {
                if (Ns(e)) return (t = an(e.length, t)), !0;
              })),
              Dt(t, function (t) {
                return dt(e, Pt(t));
              })
            );
          }
          function Ki(e, t) {
            if (!e || !e.length) return [];
            var n = Gi(e);
            return null == t
              ? n
              : dt(n, function (e) {
                  return it(t, void 0, e);
                });
          }
          var Xi = Lr(function (e, t) {
              return Ns(e) ? er(e, t) : [];
            }),
            Yi = Lr(function (e) {
              return oo(pt(e, Ns));
            }),
            Zi = Lr(function (e) {
              var t = Mi(e);
              return Ns(t) && (t = void 0), oo(pt(e, Ns), Zo(t, 2));
            }),
            Qi = Lr(function (e) {
              var t = Mi(e);
              return (t = "function" == typeof t ? t : void 0), oo(pt(e, Ns), void 0, t);
            }),
            es = Lr(Gi);
          var ts = Lr(function (e) {
            var t = e.length,
              n = t > 1 ? e[t - 1] : void 0;
            return (n = "function" == typeof n ? (e.pop(), n) : void 0), Ki(e, n);
          });
          function ns(e) {
            var t = Dn(e);
            return (t.__chain__ = !0), t;
          }
          function rs(e, t) {
            return t(e);
          }
          var os = $o(function (e) {
            var t = e.length,
              n = t ? e[0] : 0,
              r = this.__wrapped__,
              o = function (t) {
                return Kn(t, e);
              };
            return !(t > 1 || this.__actions__.length) && r instanceof An && ui(n)
              ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({ func: rs, args: [o], thisArg: void 0 }),
                new Tn(r, this.__chain__).thru(function (e) {
                  return t && !e.length && e.push(void 0), e;
                }))
              : this.thru(o);
          });
          var is = mo(function (e, t, n) {
            ke.call(e, n) ? ++e[n] : Gn(e, n, 1);
          });
          var ss = Io(Ai),
            as = Io(Ei);
          function us(e, t) {
            return (Es(e) ? at : tr)(e, Zo(t, 3));
          }
          function cs(e, t) {
            return (Es(e) ? ut : nr)(e, Zo(t, 3));
          }
          var ps = mo(function (e, t, n) {
            ke.call(e, n) ? e[n].push(t) : Gn(e, n, [t]);
          });
          var ls = Lr(function (e, t, n) {
              var o = -1,
                i = "function" == typeof t,
                s = Us(e) ? r(e.length) : [];
              return (
                tr(e, function (e) {
                  s[++o] = i ? it(t, e, n) : br(e, t, n);
                }),
                s
              );
            }),
            fs = mo(function (e, t, n) {
              Gn(e, n, t);
            });
          function ds(e, t) {
            return (Es(e) ? dt : Ir)(e, Zo(t, 3));
          }
          var hs = mo(
            function (e, t, n) {
              e[n ? 0 : 1].push(t);
            },
            function () {
              return [[], []];
            }
          );
          var gs = Lr(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return n > 1 && ci(e, t[0], t[1]) ? (t = []) : n > 2 && ci(t[0], t[1], t[2]) && (t = [t[0]]), Ar(e, sr(t, 1), []);
            }),
            ys =
              Yt ||
              function () {
                return He.Date.now();
              };
          function _s(e, t, n) {
            return (t = n ? void 0 : t), Jo(e, 128, void 0, void 0, void 0, void 0, (t = e && null == t ? e.length : t));
          }
          function vs(e, t) {
            var n;
            if ("function" != typeof t) throw new _e(i);
            return (
              (e = oa(e)),
              function () {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n;
              }
            );
          }
          var bs = Lr(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var o = Ft(n, Yo(bs));
                r |= 32;
              }
              return Jo(e, r, t, n, o);
            }),
            ws = Lr(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var o = Ft(n, Yo(ws));
                r |= 32;
              }
              return Jo(t, r, e, n, o);
            });
          function ms(e, t, n) {
            var r,
              o,
              s,
              a,
              u,
              c,
              p = 0,
              l = !1,
              f = !1,
              d = !0;
            if ("function" != typeof e) throw new _e(i);
            function h(t) {
              var n = r,
                i = o;
              return (r = o = void 0), (p = t), (a = e.apply(i, n));
            }
            function g(e) {
              return (p = e), (u = mi(_, t)), l ? h(e) : a;
            }
            function y(e) {
              var n = e - c;
              return void 0 === c || n >= t || n < 0 || (f && e - p >= s);
            }
            function _() {
              var e = ys();
              if (y(e)) return v(e);
              u = mi(
                _,
                (function (e) {
                  var n = t - (e - c);
                  return f ? un(n, s - (e - p)) : n;
                })(e)
              );
            }
            function v(e) {
              return (u = void 0), d && r ? h(e) : ((r = o = void 0), a);
            }
            function b() {
              var e = ys(),
                n = y(e);
              if (((r = arguments), (o = this), (c = e), n)) {
                if (void 0 === u) return g(c);
                if (f) return lo(u), (u = mi(_, t)), h(c);
              }
              return void 0 === u && (u = mi(_, t)), a;
            }
            return (
              (t = sa(t) || 0),
              Vs(n) &&
                ((l = !!n.leading), (s = (f = "maxWait" in n) ? an(sa(n.maxWait) || 0, t) : s), (d = "trailing" in n ? !!n.trailing : d)),
              (b.cancel = function () {
                void 0 !== u && lo(u), (p = 0), (r = c = o = u = void 0);
              }),
              (b.flush = function () {
                return void 0 === u ? a : v(ys());
              }),
              b
            );
          }
          var Os = Lr(function (e, t) {
              return Qn(e, 1, t);
            }),
            ks = Lr(function (e, t, n) {
              return Qn(e, sa(t) || 0, n);
            });
          function Ss(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t)) throw new _e(i);
            var n = function () {
              var r = arguments,
                o = t ? t.apply(this, r) : r[0],
                i = n.cache;
              if (i.has(o)) return i.get(o);
              var s = e.apply(this, r);
              return (n.cache = i.set(o, s) || i), s;
            };
            return (n.cache = new (Ss.Cache || Un)()), n;
          }
          function Ps(e) {
            if ("function" != typeof e) throw new _e(i);
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, t[0]);
                case 2:
                  return !e.call(this, t[0], t[1]);
                case 3:
                  return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
            };
          }
          Ss.Cache = Un;
          var js = co(function (e, t) {
              var n = (t = 1 == t.length && Es(t[0]) ? dt(t[0], Ct(Zo())) : dt(sr(t, 1), Ct(Zo()))).length;
              return Lr(function (r) {
                for (var o = -1, i = un(r.length, n); ++o < i; ) r[o] = t[o].call(this, r[o]);
                return it(e, this, r);
              });
            }),
            xs = Lr(function (e, t) {
              return Jo(e, 32, void 0, t, Ft(t, Yo(xs)));
            }),
            Is = Lr(function (e, t) {
              return Jo(e, 64, void 0, t, Ft(t, Yo(Is)));
            }),
            Ds = $o(function (e, t) {
              return Jo(e, 256, void 0, void 0, void 0, t);
            });
          function Rs(e, t) {
            return e === t || (e != e && t != t);
          }
          var Cs = Uo(gr),
            Ts = Uo(function (e, t) {
              return e >= t;
            }),
            As = wr(
              (function () {
                return arguments;
              })()
            )
              ? wr
              : function (e) {
                  return zs(e) && ke.call(e, "callee") && !$e.call(e, "callee");
                },
            Es = r.isArray,
            Bs = Qe
              ? Ct(Qe)
              : function (e) {
                  return zs(e) && hr(e) == k;
                };
          function Us(e) {
            return null != e && Fs(e.length) && !Js(e);
          }
          function Ns(e) {
            return zs(e) && Us(e);
          }
          var qs = nn || su,
            Ls = et
              ? Ct(et)
              : function (e) {
                  return zs(e) && hr(e) == l;
                };
          function Ms(e) {
            if (!zs(e)) return !1;
            var t = hr(e);
            return t == f || "[object DOMException]" == t || ("string" == typeof e.message && "string" == typeof e.name && !Gs(e));
          }
          function Js(e) {
            if (!Vs(e)) return !1;
            var t = hr(e);
            return t == d || t == h || "[object AsyncFunction]" == t || "[object Proxy]" == t;
          }
          function Ws(e) {
            return "number" == typeof e && e == oa(e);
          }
          function Fs(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
          }
          function Vs(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function zs(e) {
            return null != e && "object" == typeof e;
          }
          var $s = tt
            ? Ct(tt)
            : function (e) {
                return zs(e) && oi(e) == g;
              };
          function Hs(e) {
            return "number" == typeof e || (zs(e) && hr(e) == y);
          }
          function Gs(e) {
            if (!zs(e) || hr(e) != _) return !1;
            var t = We(e);
            if (null === t) return !0;
            var n = ke.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Oe.call(n) == xe;
          }
          var Ks = nt
            ? Ct(nt)
            : function (e) {
                return zs(e) && hr(e) == v;
              };
          var Xs = rt
            ? Ct(rt)
            : function (e) {
                return zs(e) && oi(e) == b;
              };
          function Ys(e) {
            return "string" == typeof e || (!Es(e) && zs(e) && hr(e) == w);
          }
          function Zs(e) {
            return "symbol" == typeof e || (zs(e) && hr(e) == m);
          }
          var Qs = ot
            ? Ct(ot)
            : function (e) {
                return zs(e) && Fs(e.length) && !!Me[hr(e)];
              };
          var ea = Uo(xr),
            ta = Uo(function (e, t) {
              return e <= t;
            });
          function na(e) {
            if (!e) return [];
            if (Us(e)) return Ys(e) ? Ht(e) : bo(e);
            if (Ye && e[Ye])
              return (function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              })(e[Ye]());
            var t = oi(e);
            return (t == g ? Jt : t == b ? Vt : Ra)(e);
          }
          function ra(e) {
            return e
              ? (e = sa(e)) === 1 / 0 || e === -1 / 0
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          }
          function oa(e) {
            var t = ra(e),
              n = t % 1;
            return t == t ? (n ? t - n : t) : 0;
          }
          function ia(e) {
            return e ? Xn(oa(e), 0, 4294967295) : 0;
          }
          function sa(e) {
            if ("number" == typeof e) return e;
            if (Zs(e)) return NaN;
            if (Vs(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = Vs(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = Rt(e);
            var n = ie.test(e);
            return n || ae.test(e) ? Ve(e.slice(2), n ? 2 : 8) : oe.test(e) ? NaN : +e;
          }
          function aa(e) {
            return wo(e, Oa(e));
          }
          function ua(e) {
            return null == e ? "" : Zr(e);
          }
          var ca = Oo(function (e, t) {
              if (di(t) || Us(t)) wo(t, ma(t), e);
              else for (var n in t) ke.call(t, n) && Vn(e, n, t[n]);
            }),
            pa = Oo(function (e, t) {
              wo(t, Oa(t), e);
            }),
            la = Oo(function (e, t, n, r) {
              wo(t, Oa(t), e, r);
            }),
            fa = Oo(function (e, t, n, r) {
              wo(t, ma(t), e, r);
            }),
            da = $o(Kn);
          var ha = Lr(function (e, t) {
              e = he(e);
              var n = -1,
                r = t.length,
                o = r > 2 ? t[2] : void 0;
              for (o && ci(t[0], t[1], o) && (r = 1); ++n < r; )
                for (var i = t[n], s = Oa(i), a = -1, u = s.length; ++a < u; ) {
                  var c = s[a],
                    p = e[c];
                  (void 0 === p || (Rs(p, we[c]) && !ke.call(e, c))) && (e[c] = i[c]);
                }
              return e;
            }),
            ga = Lr(function (e) {
              return e.push(void 0, Fo), it(Sa, void 0, e);
            });
          function ya(e, t, n) {
            var r = null == e ? void 0 : fr(e, t);
            return void 0 === r ? n : r;
          }
          function _a(e, t) {
            return null != e && ii(e, t, _r);
          }
          var va = Co(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = je.call(t)), (e[t] = n);
            }, Va(Ha)),
            ba = Co(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = je.call(t)), ke.call(e, t) ? e[t].push(n) : (e[t] = [n]);
            }, Zo),
            wa = Lr(br);
          function ma(e) {
            return Us(e) ? Ln(e) : Pr(e);
          }
          function Oa(e) {
            return Us(e) ? Ln(e, !0) : jr(e);
          }
          var ka = Oo(function (e, t, n) {
              Cr(e, t, n);
            }),
            Sa = Oo(function (e, t, n, r) {
              Cr(e, t, n, r);
            }),
            Pa = $o(function (e, t) {
              var n = {};
              if (null == e) return n;
              var r = !1;
              (t = dt(t, function (t) {
                return (t = uo(t, e)), r || (r = t.length > 1), t;
              })),
                wo(e, Go(e), n),
                r && (n = Yn(n, 7, Vo));
              for (var o = t.length; o--; ) eo(n, t[o]);
              return n;
            });
          var ja = $o(function (e, t) {
            return null == e
              ? {}
              : (function (e, t) {
                  return Er(e, t, function (t, n) {
                    return _a(e, n);
                  });
                })(e, t);
          });
          function xa(e, t) {
            if (null == e) return {};
            var n = dt(Go(e), function (e) {
              return [e];
            });
            return (
              (t = Zo(t)),
              Er(e, n, function (e, n) {
                return t(e, n[0]);
              })
            );
          }
          var Ia = Mo(ma),
            Da = Mo(Oa);
          function Ra(e) {
            return null == e ? [] : Tt(e, ma(e));
          }
          var Ca = jo(function (e, t, n) {
            return (t = t.toLowerCase()), e + (n ? Ta(t) : t);
          });
          function Ta(e) {
            return Ma(ua(e).toLowerCase());
          }
          function Aa(e) {
            return (e = ua(e)) && e.replace(ce, Nt).replace(Ae, "");
          }
          var Ea = jo(function (e, t, n) {
              return e + (n ? "-" : "") + t.toLowerCase();
            }),
            Ba = jo(function (e, t, n) {
              return e + (n ? " " : "") + t.toLowerCase();
            }),
            Ua = Po("toLowerCase");
          var Na = jo(function (e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase();
          });
          var qa = jo(function (e, t, n) {
            return e + (n ? " " : "") + Ma(t);
          });
          var La = jo(function (e, t, n) {
              return e + (n ? " " : "") + t.toUpperCase();
            }),
            Ma = Po("toUpperCase");
          function Ja(e, t, n) {
            return (
              (e = ua(e)),
              void 0 === (t = n ? void 0 : t)
                ? (function (e) {
                    return Ne.test(e);
                  })(e)
                  ? (function (e) {
                      return e.match(Be) || [];
                    })(e)
                  : (function (e) {
                      return e.match(Q) || [];
                    })(e)
                : e.match(t) || []
            );
          }
          var Wa = Lr(function (e, t) {
              try {
                return it(e, void 0, t);
              } catch (e) {
                return Ms(e) ? e : new K(e);
              }
            }),
            Fa = $o(function (e, t) {
              return (
                at(t, function (t) {
                  (t = xi(t)), Gn(e, t, bs(e[t], e));
                }),
                e
              );
            });
          function Va(e) {
            return function () {
              return e;
            };
          }
          var za = Do(),
            $a = Do(!0);
          function Ha(e) {
            return e;
          }
          function Ga(e) {
            return Sr("function" == typeof e ? e : Yn(e, 1));
          }
          var Ka = Lr(function (e, t) {
              return function (n) {
                return br(n, e, t);
              };
            }),
            Xa = Lr(function (e, t) {
              return function (n) {
                return br(e, n, t);
              };
            });
          function Ya(e, t, n) {
            var r = ma(t),
              o = lr(t, r);
            null != n || (Vs(t) && (o.length || !r.length)) || ((n = t), (t = e), (e = this), (o = lr(t, ma(t))));
            var i = !(Vs(n) && "chain" in n && !n.chain),
              s = Js(e);
            return (
              at(o, function (n) {
                var r = t[n];
                (e[n] = r),
                  s &&
                    (e.prototype[n] = function () {
                      var t = this.__chain__;
                      if (i || t) {
                        var n = e(this.__wrapped__),
                          o = (n.__actions__ = bo(this.__actions__));
                        return o.push({ func: r, args: arguments, thisArg: e }), (n.__chain__ = t), n;
                      }
                      return r.apply(e, ht([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function Za() {}
          var Qa = Ao(dt),
            eu = Ao(ct),
            tu = Ao(_t);
          function nu(e) {
            return pi(e)
              ? Pt(xi(e))
              : (function (e) {
                  return function (t) {
                    return fr(t, e);
                  };
                })(e);
          }
          var ru = Bo(),
            ou = Bo(!0);
          function iu() {
            return [];
          }
          function su() {
            return !1;
          }
          var au = To(function (e, t) {
              return e + t;
            }, 0),
            uu = qo("ceil"),
            cu = To(function (e, t) {
              return e / t;
            }, 1),
            pu = qo("floor");
          var lu,
            fu = To(function (e, t) {
              return e * t;
            }, 1),
            du = qo("round"),
            hu = To(function (e, t) {
              return e - t;
            }, 0);
          return (
            (Dn.after = function (e, t) {
              if ("function" != typeof t) throw new _e(i);
              return (
                (e = oa(e)),
                function () {
                  if (--e < 1) return t.apply(this, arguments);
                }
              );
            }),
            (Dn.ary = _s),
            (Dn.assign = ca),
            (Dn.assignIn = pa),
            (Dn.assignInWith = la),
            (Dn.assignWith = fa),
            (Dn.at = da),
            (Dn.before = vs),
            (Dn.bind = bs),
            (Dn.bindAll = Fa),
            (Dn.bindKey = ws),
            (Dn.castArray = function () {
              if (!arguments.length) return [];
              var e = arguments[0];
              return Es(e) ? e : [e];
            }),
            (Dn.chain = ns),
            (Dn.chunk = function (e, t, n) {
              t = (n ? ci(e, t, n) : void 0 === t) ? 1 : an(oa(t), 0);
              var o = null == e ? 0 : e.length;
              if (!o || t < 1) return [];
              for (var i = 0, s = 0, a = r(Qt(o / t)); i < o; ) a[s++] = $r(e, i, (i += t));
              return a;
            }),
            (Dn.compact = function (e) {
              for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n; ) {
                var i = e[t];
                i && (o[r++] = i);
              }
              return o;
            }),
            (Dn.concat = function () {
              var e = arguments.length;
              if (!e) return [];
              for (var t = r(e - 1), n = arguments[0], o = e; o--; ) t[o - 1] = arguments[o];
              return ht(Es(n) ? bo(n) : [n], sr(t, 1));
            }),
            (Dn.cond = function (e) {
              var t = null == e ? 0 : e.length,
                n = Zo();
              return (
                (e = t
                  ? dt(e, function (e) {
                      if ("function" != typeof e[1]) throw new _e(i);
                      return [n(e[0]), e[1]];
                    })
                  : []),
                Lr(function (n) {
                  for (var r = -1; ++r < t; ) {
                    var o = e[r];
                    if (it(o[0], this, n)) return it(o[1], this, n);
                  }
                })
              );
            }),
            (Dn.conforms = function (e) {
              return (function (e) {
                var t = ma(e);
                return function (n) {
                  return Zn(n, e, t);
                };
              })(Yn(e, 1));
            }),
            (Dn.constant = Va),
            (Dn.countBy = is),
            (Dn.create = function (e, t) {
              var n = Rn(e);
              return null == t ? n : Hn(n, t);
            }),
            (Dn.curry = function e(t, n, r) {
              var o = Jo(t, 8, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n));
              return (o.placeholder = e.placeholder), o;
            }),
            (Dn.curryRight = function e(t, n, r) {
              var o = Jo(t, 16, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n));
              return (o.placeholder = e.placeholder), o;
            }),
            (Dn.debounce = ms),
            (Dn.defaults = ha),
            (Dn.defaultsDeep = ga),
            (Dn.defer = Os),
            (Dn.delay = ks),
            (Dn.difference = Ri),
            (Dn.differenceBy = Ci),
            (Dn.differenceWith = Ti),
            (Dn.drop = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r ? $r(e, (t = n || void 0 === t ? 1 : oa(t)) < 0 ? 0 : t, r) : [];
            }),
            (Dn.dropRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r ? $r(e, 0, (t = r - (t = n || void 0 === t ? 1 : oa(t))) < 0 ? 0 : t) : [];
            }),
            (Dn.dropRightWhile = function (e, t) {
              return e && e.length ? no(e, Zo(t, 3), !0, !0) : [];
            }),
            (Dn.dropWhile = function (e, t) {
              return e && e.length ? no(e, Zo(t, 3), !0) : [];
            }),
            (Dn.fill = function (e, t, n, r) {
              var o = null == e ? 0 : e.length;
              return o
                ? (n && "number" != typeof n && ci(e, t, n) && ((n = 0), (r = o)),
                  (function (e, t, n, r) {
                    var o = e.length;
                    for (
                      (n = oa(n)) < 0 && (n = -n > o ? 0 : o + n),
                        (r = void 0 === r || r > o ? o : oa(r)) < 0 && (r += o),
                        r = n > r ? 0 : ia(r);
                      n < r;

                    )
                      e[n++] = t;
                    return e;
                  })(e, t, n, r))
                : [];
            }),
            (Dn.filter = function (e, t) {
              return (Es(e) ? pt : ir)(e, Zo(t, 3));
            }),
            (Dn.flatMap = function (e, t) {
              return sr(ds(e, t), 1);
            }),
            (Dn.flatMapDeep = function (e, t) {
              return sr(ds(e, t), 1 / 0);
            }),
            (Dn.flatMapDepth = function (e, t, n) {
              return (n = void 0 === n ? 1 : oa(n)), sr(ds(e, t), n);
            }),
            (Dn.flatten = Bi),
            (Dn.flattenDeep = function (e) {
              return (null == e ? 0 : e.length) ? sr(e, 1 / 0) : [];
            }),
            (Dn.flattenDepth = function (e, t) {
              return (null == e ? 0 : e.length) ? sr(e, (t = void 0 === t ? 1 : oa(t))) : [];
            }),
            (Dn.flip = function (e) {
              return Jo(e, 512);
            }),
            (Dn.flow = za),
            (Dn.flowRight = $a),
            (Dn.fromPairs = function (e) {
              for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                var o = e[t];
                r[o[0]] = o[1];
              }
              return r;
            }),
            (Dn.functions = function (e) {
              return null == e ? [] : lr(e, ma(e));
            }),
            (Dn.functionsIn = function (e) {
              return null == e ? [] : lr(e, Oa(e));
            }),
            (Dn.groupBy = ps),
            (Dn.initial = function (e) {
              return (null == e ? 0 : e.length) ? $r(e, 0, -1) : [];
            }),
            (Dn.intersection = Ni),
            (Dn.intersectionBy = qi),
            (Dn.intersectionWith = Li),
            (Dn.invert = va),
            (Dn.invertBy = ba),
            (Dn.invokeMap = ls),
            (Dn.iteratee = Ga),
            (Dn.keyBy = fs),
            (Dn.keys = ma),
            (Dn.keysIn = Oa),
            (Dn.map = ds),
            (Dn.mapKeys = function (e, t) {
              var n = {};
              return (
                (t = Zo(t, 3)),
                cr(e, function (e, r, o) {
                  Gn(n, t(e, r, o), e);
                }),
                n
              );
            }),
            (Dn.mapValues = function (e, t) {
              var n = {};
              return (
                (t = Zo(t, 3)),
                cr(e, function (e, r, o) {
                  Gn(n, r, t(e, r, o));
                }),
                n
              );
            }),
            (Dn.matches = function (e) {
              return Dr(Yn(e, 1));
            }),
            (Dn.matchesProperty = function (e, t) {
              return Rr(e, Yn(t, 1));
            }),
            (Dn.memoize = Ss),
            (Dn.merge = ka),
            (Dn.mergeWith = Sa),
            (Dn.method = Ka),
            (Dn.methodOf = Xa),
            (Dn.mixin = Ya),
            (Dn.negate = Ps),
            (Dn.nthArg = function (e) {
              return (
                (e = oa(e)),
                Lr(function (t) {
                  return Tr(t, e);
                })
              );
            }),
            (Dn.omit = Pa),
            (Dn.omitBy = function (e, t) {
              return xa(e, Ps(Zo(t)));
            }),
            (Dn.once = function (e) {
              return vs(2, e);
            }),
            (Dn.orderBy = function (e, t, n, r) {
              return null == e
                ? []
                : (Es(t) || (t = null == t ? [] : [t]), Es((n = r ? void 0 : n)) || (n = null == n ? [] : [n]), Ar(e, t, n));
            }),
            (Dn.over = Qa),
            (Dn.overArgs = js),
            (Dn.overEvery = eu),
            (Dn.overSome = tu),
            (Dn.partial = xs),
            (Dn.partialRight = Is),
            (Dn.partition = hs),
            (Dn.pick = ja),
            (Dn.pickBy = xa),
            (Dn.property = nu),
            (Dn.propertyOf = function (e) {
              return function (t) {
                return null == e ? void 0 : fr(e, t);
              };
            }),
            (Dn.pull = Ji),
            (Dn.pullAll = Wi),
            (Dn.pullAllBy = function (e, t, n) {
              return e && e.length && t && t.length ? Br(e, t, Zo(n, 2)) : e;
            }),
            (Dn.pullAllWith = function (e, t, n) {
              return e && e.length && t && t.length ? Br(e, t, void 0, n) : e;
            }),
            (Dn.pullAt = Fi),
            (Dn.range = ru),
            (Dn.rangeRight = ou),
            (Dn.rearg = Ds),
            (Dn.reject = function (e, t) {
              return (Es(e) ? pt : ir)(e, Ps(Zo(t, 3)));
            }),
            (Dn.remove = function (e, t) {
              var n = [];
              if (!e || !e.length) return n;
              var r = -1,
                o = [],
                i = e.length;
              for (t = Zo(t, 3); ++r < i; ) {
                var s = e[r];
                t(s, r, e) && (n.push(s), o.push(r));
              }
              return Ur(e, o), n;
            }),
            (Dn.rest = function (e, t) {
              if ("function" != typeof e) throw new _e(i);
              return Lr(e, (t = void 0 === t ? t : oa(t)));
            }),
            (Dn.reverse = Vi),
            (Dn.sampleSize = function (e, t, n) {
              return (t = (n ? ci(e, t, n) : void 0 === t) ? 1 : oa(t)), (Es(e) ? Jn : Jr)(e, t);
            }),
            (Dn.set = function (e, t, n) {
              return null == e ? e : Wr(e, t, n);
            }),
            (Dn.setWith = function (e, t, n, r) {
              return (r = "function" == typeof r ? r : void 0), null == e ? e : Wr(e, t, n, r);
            }),
            (Dn.shuffle = function (e) {
              return (Es(e) ? Wn : zr)(e);
            }),
            (Dn.slice = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? (n && "number" != typeof n && ci(e, t, n)
                    ? ((t = 0), (n = r))
                    : ((t = null == t ? 0 : oa(t)), (n = void 0 === n ? r : oa(n))),
                  $r(e, t, n))
                : [];
            }),
            (Dn.sortBy = gs),
            (Dn.sortedUniq = function (e) {
              return e && e.length ? Xr(e) : [];
            }),
            (Dn.sortedUniqBy = function (e, t) {
              return e && e.length ? Xr(e, Zo(t, 2)) : [];
            }),
            (Dn.split = function (e, t, n) {
              return (
                n && "number" != typeof n && ci(e, t, n) && (t = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0)
                  ? (e = ua(e)) && ("string" == typeof t || (null != t && !Ks(t))) && !(t = Zr(t)) && Mt(e)
                    ? po(Ht(e), 0, n)
                    : e.split(t, n)
                  : []
              );
            }),
            (Dn.spread = function (e, t) {
              if ("function" != typeof e) throw new _e(i);
              return (
                (t = null == t ? 0 : an(oa(t), 0)),
                Lr(function (n) {
                  var r = n[t],
                    o = po(n, 0, t);
                  return r && ht(o, r), it(e, this, o);
                })
              );
            }),
            (Dn.tail = function (e) {
              var t = null == e ? 0 : e.length;
              return t ? $r(e, 1, t) : [];
            }),
            (Dn.take = function (e, t, n) {
              return e && e.length ? $r(e, 0, (t = n || void 0 === t ? 1 : oa(t)) < 0 ? 0 : t) : [];
            }),
            (Dn.takeRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r ? $r(e, (t = r - (t = n || void 0 === t ? 1 : oa(t))) < 0 ? 0 : t, r) : [];
            }),
            (Dn.takeRightWhile = function (e, t) {
              return e && e.length ? no(e, Zo(t, 3), !1, !0) : [];
            }),
            (Dn.takeWhile = function (e, t) {
              return e && e.length ? no(e, Zo(t, 3)) : [];
            }),
            (Dn.tap = function (e, t) {
              return t(e), e;
            }),
            (Dn.throttle = function (e, t, n) {
              var r = !0,
                o = !0;
              if ("function" != typeof e) throw new _e(i);
              return (
                Vs(n) && ((r = "leading" in n ? !!n.leading : r), (o = "trailing" in n ? !!n.trailing : o)),
                ms(e, t, { leading: r, maxWait: t, trailing: o })
              );
            }),
            (Dn.thru = rs),
            (Dn.toArray = na),
            (Dn.toPairs = Ia),
            (Dn.toPairsIn = Da),
            (Dn.toPath = function (e) {
              return Es(e) ? dt(e, xi) : Zs(e) ? [e] : bo(ji(ua(e)));
            }),
            (Dn.toPlainObject = aa),
            (Dn.transform = function (e, t, n) {
              var r = Es(e),
                o = r || qs(e) || Qs(e);
              if (((t = Zo(t, 4)), null == n)) {
                var i = e && e.constructor;
                n = o ? (r ? new i() : []) : Vs(e) && Js(i) ? Rn(We(e)) : {};
              }
              return (
                (o ? at : cr)(e, function (e, r, o) {
                  return t(n, e, r, o);
                }),
                n
              );
            }),
            (Dn.unary = function (e) {
              return _s(e, 1);
            }),
            (Dn.union = zi),
            (Dn.unionBy = $i),
            (Dn.unionWith = Hi),
            (Dn.uniq = function (e) {
              return e && e.length ? Qr(e) : [];
            }),
            (Dn.uniqBy = function (e, t) {
              return e && e.length ? Qr(e, Zo(t, 2)) : [];
            }),
            (Dn.uniqWith = function (e, t) {
              return (t = "function" == typeof t ? t : void 0), e && e.length ? Qr(e, void 0, t) : [];
            }),
            (Dn.unset = function (e, t) {
              return null == e || eo(e, t);
            }),
            (Dn.unzip = Gi),
            (Dn.unzipWith = Ki),
            (Dn.update = function (e, t, n) {
              return null == e ? e : to(e, t, ao(n));
            }),
            (Dn.updateWith = function (e, t, n, r) {
              return (r = "function" == typeof r ? r : void 0), null == e ? e : to(e, t, ao(n), r);
            }),
            (Dn.values = Ra),
            (Dn.valuesIn = function (e) {
              return null == e ? [] : Tt(e, Oa(e));
            }),
            (Dn.without = Xi),
            (Dn.words = Ja),
            (Dn.wrap = function (e, t) {
              return xs(ao(t), e);
            }),
            (Dn.xor = Yi),
            (Dn.xorBy = Zi),
            (Dn.xorWith = Qi),
            (Dn.zip = es),
            (Dn.zipObject = function (e, t) {
              return io(e || [], t || [], Vn);
            }),
            (Dn.zipObjectDeep = function (e, t) {
              return io(e || [], t || [], Wr);
            }),
            (Dn.zipWith = ts),
            (Dn.entries = Ia),
            (Dn.entriesIn = Da),
            (Dn.extend = pa),
            (Dn.extendWith = la),
            Ya(Dn, Dn),
            (Dn.add = au),
            (Dn.attempt = Wa),
            (Dn.camelCase = Ca),
            (Dn.capitalize = Ta),
            (Dn.ceil = uu),
            (Dn.clamp = function (e, t, n) {
              return (
                void 0 === n && ((n = t), (t = void 0)),
                void 0 !== n && (n = (n = sa(n)) == n ? n : 0),
                void 0 !== t && (t = (t = sa(t)) == t ? t : 0),
                Xn(sa(e), t, n)
              );
            }),
            (Dn.clone = function (e) {
              return Yn(e, 4);
            }),
            (Dn.cloneDeep = function (e) {
              return Yn(e, 5);
            }),
            (Dn.cloneDeepWith = function (e, t) {
              return Yn(e, 5, (t = "function" == typeof t ? t : void 0));
            }),
            (Dn.cloneWith = function (e, t) {
              return Yn(e, 4, (t = "function" == typeof t ? t : void 0));
            }),
            (Dn.conformsTo = function (e, t) {
              return null == t || Zn(e, t, ma(t));
            }),
            (Dn.deburr = Aa),
            (Dn.defaultTo = function (e, t) {
              return null == e || e != e ? t : e;
            }),
            (Dn.divide = cu),
            (Dn.endsWith = function (e, t, n) {
              (e = ua(e)), (t = Zr(t));
              var r = e.length,
                o = (n = void 0 === n ? r : Xn(oa(n), 0, r));
              return (n -= t.length) >= 0 && e.slice(n, o) == t;
            }),
            (Dn.eq = Rs),
            (Dn.escape = function (e) {
              return (e = ua(e)) && L.test(e) ? e.replace(N, qt) : e;
            }),
            (Dn.escapeRegExp = function (e) {
              return (e = ua(e)) && H.test(e) ? e.replace($, "\\$&") : e;
            }),
            (Dn.every = function (e, t, n) {
              var r = Es(e) ? ct : rr;
              return n && ci(e, t, n) && (t = void 0), r(e, Zo(t, 3));
            }),
            (Dn.find = ss),
            (Dn.findIndex = Ai),
            (Dn.findKey = function (e, t) {
              return bt(e, Zo(t, 3), cr);
            }),
            (Dn.findLast = as),
            (Dn.findLastIndex = Ei),
            (Dn.findLastKey = function (e, t) {
              return bt(e, Zo(t, 3), pr);
            }),
            (Dn.floor = pu),
            (Dn.forEach = us),
            (Dn.forEachRight = cs),
            (Dn.forIn = function (e, t) {
              return null == e ? e : ar(e, Zo(t, 3), Oa);
            }),
            (Dn.forInRight = function (e, t) {
              return null == e ? e : ur(e, Zo(t, 3), Oa);
            }),
            (Dn.forOwn = function (e, t) {
              return e && cr(e, Zo(t, 3));
            }),
            (Dn.forOwnRight = function (e, t) {
              return e && pr(e, Zo(t, 3));
            }),
            (Dn.get = ya),
            (Dn.gt = Cs),
            (Dn.gte = Ts),
            (Dn.has = function (e, t) {
              return null != e && ii(e, t, yr);
            }),
            (Dn.hasIn = _a),
            (Dn.head = Ui),
            (Dn.identity = Ha),
            (Dn.includes = function (e, t, n, r) {
              (e = Us(e) ? e : Ra(e)), (n = n && !r ? oa(n) : 0);
              var o = e.length;
              return n < 0 && (n = an(o + n, 0)), Ys(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && mt(e, t, n) > -1;
            }),
            (Dn.indexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var o = null == n ? 0 : oa(n);
              return o < 0 && (o = an(r + o, 0)), mt(e, t, o);
            }),
            (Dn.inRange = function (e, t, n) {
              return (
                (t = ra(t)),
                void 0 === n ? ((n = t), (t = 0)) : (n = ra(n)),
                (function (e, t, n) {
                  return e >= un(t, n) && e < an(t, n);
                })((e = sa(e)), t, n)
              );
            }),
            (Dn.invoke = wa),
            (Dn.isArguments = As),
            (Dn.isArray = Es),
            (Dn.isArrayBuffer = Bs),
            (Dn.isArrayLike = Us),
            (Dn.isArrayLikeObject = Ns),
            (Dn.isBoolean = function (e) {
              return !0 === e || !1 === e || (zs(e) && hr(e) == p);
            }),
            (Dn.isBuffer = qs),
            (Dn.isDate = Ls),
            (Dn.isElement = function (e) {
              return zs(e) && 1 === e.nodeType && !Gs(e);
            }),
            (Dn.isEmpty = function (e) {
              if (null == e) return !0;
              if (Us(e) && (Es(e) || "string" == typeof e || "function" == typeof e.splice || qs(e) || Qs(e) || As(e))) return !e.length;
              var t = oi(e);
              if (t == g || t == b) return !e.size;
              if (di(e)) return !Pr(e).length;
              for (var n in e) if (ke.call(e, n)) return !1;
              return !0;
            }),
            (Dn.isEqual = function (e, t) {
              return mr(e, t);
            }),
            (Dn.isEqualWith = function (e, t, n) {
              var r = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
              return void 0 === r ? mr(e, t, void 0, n) : !!r;
            }),
            (Dn.isError = Ms),
            (Dn.isFinite = function (e) {
              return "number" == typeof e && rn(e);
            }),
            (Dn.isFunction = Js),
            (Dn.isInteger = Ws),
            (Dn.isLength = Fs),
            (Dn.isMap = $s),
            (Dn.isMatch = function (e, t) {
              return e === t || Or(e, t, ei(t));
            }),
            (Dn.isMatchWith = function (e, t, n) {
              return (n = "function" == typeof n ? n : void 0), Or(e, t, ei(t), n);
            }),
            (Dn.isNaN = function (e) {
              return Hs(e) && e != +e;
            }),
            (Dn.isNative = function (e) {
              if (fi(e)) throw new K("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
              return kr(e);
            }),
            (Dn.isNil = function (e) {
              return null == e;
            }),
            (Dn.isNull = function (e) {
              return null === e;
            }),
            (Dn.isNumber = Hs),
            (Dn.isObject = Vs),
            (Dn.isObjectLike = zs),
            (Dn.isPlainObject = Gs),
            (Dn.isRegExp = Ks),
            (Dn.isSafeInteger = function (e) {
              return Ws(e) && e >= -9007199254740991 && e <= 9007199254740991;
            }),
            (Dn.isSet = Xs),
            (Dn.isString = Ys),
            (Dn.isSymbol = Zs),
            (Dn.isTypedArray = Qs),
            (Dn.isUndefined = function (e) {
              return void 0 === e;
            }),
            (Dn.isWeakMap = function (e) {
              return zs(e) && oi(e) == O;
            }),
            (Dn.isWeakSet = function (e) {
              return zs(e) && "[object WeakSet]" == hr(e);
            }),
            (Dn.join = function (e, t) {
              return null == e ? "" : on.call(e, t);
            }),
            (Dn.kebabCase = Ea),
            (Dn.last = Mi),
            (Dn.lastIndexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var o = r;
              return (
                void 0 !== n && (o = (o = oa(n)) < 0 ? an(r + o, 0) : un(o, r - 1)),
                t == t
                  ? (function (e, t, n) {
                      for (var r = n + 1; r--; ) if (e[r] === t) return r;
                      return r;
                    })(e, t, o)
                  : wt(e, kt, o, !0)
              );
            }),
            (Dn.lowerCase = Ba),
            (Dn.lowerFirst = Ua),
            (Dn.lt = ea),
            (Dn.lte = ta),
            (Dn.max = function (e) {
              return e && e.length ? or(e, Ha, gr) : void 0;
            }),
            (Dn.maxBy = function (e, t) {
              return e && e.length ? or(e, Zo(t, 2), gr) : void 0;
            }),
            (Dn.mean = function (e) {
              return St(e, Ha);
            }),
            (Dn.meanBy = function (e, t) {
              return St(e, Zo(t, 2));
            }),
            (Dn.min = function (e) {
              return e && e.length ? or(e, Ha, xr) : void 0;
            }),
            (Dn.minBy = function (e, t) {
              return e && e.length ? or(e, Zo(t, 2), xr) : void 0;
            }),
            (Dn.stubArray = iu),
            (Dn.stubFalse = su),
            (Dn.stubObject = function () {
              return {};
            }),
            (Dn.stubString = function () {
              return "";
            }),
            (Dn.stubTrue = function () {
              return !0;
            }),
            (Dn.multiply = fu),
            (Dn.nth = function (e, t) {
              return e && e.length ? Tr(e, oa(t)) : void 0;
            }),
            (Dn.noConflict = function () {
              return He._ === this && (He._ = Ie), this;
            }),
            (Dn.noop = Za),
            (Dn.now = ys),
            (Dn.pad = function (e, t, n) {
              e = ua(e);
              var r = (t = oa(t)) ? $t(e) : 0;
              if (!t || r >= t) return e;
              var o = (t - r) / 2;
              return Eo(en(o), n) + e + Eo(Qt(o), n);
            }),
            (Dn.padEnd = function (e, t, n) {
              e = ua(e);
              var r = (t = oa(t)) ? $t(e) : 0;
              return t && r < t ? e + Eo(t - r, n) : e;
            }),
            (Dn.padStart = function (e, t, n) {
              e = ua(e);
              var r = (t = oa(t)) ? $t(e) : 0;
              return t && r < t ? Eo(t - r, n) + e : e;
            }),
            (Dn.parseInt = function (e, t, n) {
              return n || null == t ? (t = 0) : t && (t = +t), pn(ua(e).replace(G, ""), t || 0);
            }),
            (Dn.random = function (e, t, n) {
              if (
                (n && "boolean" != typeof n && ci(e, t, n) && (t = n = void 0),
                void 0 === n && ("boolean" == typeof t ? ((n = t), (t = void 0)) : "boolean" == typeof e && ((n = e), (e = void 0))),
                void 0 === e && void 0 === t ? ((e = 0), (t = 1)) : ((e = ra(e)), void 0 === t ? ((t = e), (e = 0)) : (t = ra(t))),
                e > t)
              ) {
                var r = e;
                (e = t), (t = r);
              }
              if (n || e % 1 || t % 1) {
                var o = ln();
                return un(e + o * (t - e + Fe("1e-" + ((o + "").length - 1))), t);
              }
              return Nr(e, t);
            }),
            (Dn.reduce = function (e, t, n) {
              var r = Es(e) ? gt : xt,
                o = arguments.length < 3;
              return r(e, Zo(t, 4), n, o, tr);
            }),
            (Dn.reduceRight = function (e, t, n) {
              var r = Es(e) ? yt : xt,
                o = arguments.length < 3;
              return r(e, Zo(t, 4), n, o, nr);
            }),
            (Dn.repeat = function (e, t, n) {
              return (t = (n ? ci(e, t, n) : void 0 === t) ? 1 : oa(t)), qr(ua(e), t);
            }),
            (Dn.replace = function () {
              var e = arguments,
                t = ua(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }),
            (Dn.result = function (e, t, n) {
              var r = -1,
                o = (t = uo(t, e)).length;
              for (o || ((o = 1), (e = void 0)); ++r < o; ) {
                var i = null == e ? void 0 : e[xi(t[r])];
                void 0 === i && ((r = o), (i = n)), (e = Js(i) ? i.call(e) : i);
              }
              return e;
            }),
            (Dn.round = du),
            (Dn.runInContext = e),
            (Dn.sample = function (e) {
              return (Es(e) ? Mn : Mr)(e);
            }),
            (Dn.size = function (e) {
              if (null == e) return 0;
              if (Us(e)) return Ys(e) ? $t(e) : e.length;
              var t = oi(e);
              return t == g || t == b ? e.size : Pr(e).length;
            }),
            (Dn.snakeCase = Na),
            (Dn.some = function (e, t, n) {
              var r = Es(e) ? _t : Hr;
              return n && ci(e, t, n) && (t = void 0), r(e, Zo(t, 3));
            }),
            (Dn.sortedIndex = function (e, t) {
              return Gr(e, t);
            }),
            (Dn.sortedIndexBy = function (e, t, n) {
              return Kr(e, t, Zo(n, 2));
            }),
            (Dn.sortedIndexOf = function (e, t) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var r = Gr(e, t);
                if (r < n && Rs(e[r], t)) return r;
              }
              return -1;
            }),
            (Dn.sortedLastIndex = function (e, t) {
              return Gr(e, t, !0);
            }),
            (Dn.sortedLastIndexBy = function (e, t, n) {
              return Kr(e, t, Zo(n, 2), !0);
            }),
            (Dn.sortedLastIndexOf = function (e, t) {
              if (null == e ? 0 : e.length) {
                var n = Gr(e, t, !0) - 1;
                if (Rs(e[n], t)) return n;
              }
              return -1;
            }),
            (Dn.startCase = qa),
            (Dn.startsWith = function (e, t, n) {
              return (e = ua(e)), (n = null == n ? 0 : Xn(oa(n), 0, e.length)), (t = Zr(t)), e.slice(n, n + t.length) == t;
            }),
            (Dn.subtract = hu),
            (Dn.sum = function (e) {
              return e && e.length ? It(e, Ha) : 0;
            }),
            (Dn.sumBy = function (e, t) {
              return e && e.length ? It(e, Zo(t, 2)) : 0;
            }),
            (Dn.template = function (e, t, n) {
              var r = Dn.templateSettings;
              n && ci(e, t, n) && (t = void 0), (e = ua(e)), (t = la({}, t, r, Wo));
              var o,
                i,
                s = la({}, t.imports, r.imports, Wo),
                a = ma(s),
                u = Tt(s, a),
                c = 0,
                p = t.interpolate || pe,
                l = "__p += '",
                f = ge(
                  (t.escape || pe).source + "|" + p.source + "|" + (p === W ? ne : pe).source + "|" + (t.evaluate || pe).source + "|$",
                  "g"
                ),
                d =
                  "//# sourceURL=" +
                  (ke.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Le + "]") +
                  "\n";
              e.replace(f, function (t, n, r, s, a, u) {
                return (
                  r || (r = s),
                  (l += e.slice(c, u).replace(le, Lt)),
                  n && ((o = !0), (l += "' +\n__e(" + n + ") +\n'")),
                  a && ((i = !0), (l += "';\n" + a + ";\n__p += '")),
                  r && (l += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (c = u + t.length),
                  t
                );
              }),
                (l += "';\n");
              var h = ke.call(t, "variable") && t.variable;
              if (h) {
                if (ee.test(h)) throw new K("Invalid `variable` option passed into `_.template`");
              } else l = "with (obj) {\n" + l + "\n}\n";
              (l = (i ? l.replace(A, "") : l).replace(E, "$1").replace(B, "$1;")),
                (l =
                  "function(" +
                  (h || "obj") +
                  ") {\n" +
                  (h ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (o ? ", __e = _.escape" : "") +
                  (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") +
                  l +
                  "return __p\n}");
              var g = Wa(function () {
                return fe(a, d + "return " + l).apply(void 0, u);
              });
              if (((g.source = l), Ms(g))) throw g;
              return g;
            }),
            (Dn.times = function (e, t) {
              if ((e = oa(e)) < 1 || e > 9007199254740991) return [];
              var n = 4294967295,
                r = un(e, 4294967295);
              e -= 4294967295;
              for (var o = Dt(r, (t = Zo(t))); ++n < e; ) t(n);
              return o;
            }),
            (Dn.toFinite = ra),
            (Dn.toInteger = oa),
            (Dn.toLength = ia),
            (Dn.toLower = function (e) {
              return ua(e).toLowerCase();
            }),
            (Dn.toNumber = sa),
            (Dn.toSafeInteger = function (e) {
              return e ? Xn(oa(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0;
            }),
            (Dn.toString = ua),
            (Dn.toUpper = function (e) {
              return ua(e).toUpperCase();
            }),
            (Dn.trim = function (e, t, n) {
              if ((e = ua(e)) && (n || void 0 === t)) return Rt(e);
              if (!e || !(t = Zr(t))) return e;
              var r = Ht(e),
                o = Ht(t);
              return po(r, Et(r, o), Bt(r, o) + 1).join("");
            }),
            (Dn.trimEnd = function (e, t, n) {
              if ((e = ua(e)) && (n || void 0 === t)) return e.slice(0, Gt(e) + 1);
              if (!e || !(t = Zr(t))) return e;
              var r = Ht(e);
              return po(r, 0, Bt(r, Ht(t)) + 1).join("");
            }),
            (Dn.trimStart = function (e, t, n) {
              if ((e = ua(e)) && (n || void 0 === t)) return e.replace(G, "");
              if (!e || !(t = Zr(t))) return e;
              var r = Ht(e);
              return po(r, Et(r, Ht(t))).join("");
            }),
            (Dn.truncate = function (e, t) {
              var n = 30,
                r = "...";
              if (Vs(t)) {
                var o = "separator" in t ? t.separator : o;
                (n = "length" in t ? oa(t.length) : n), (r = "omission" in t ? Zr(t.omission) : r);
              }
              var i = (e = ua(e)).length;
              if (Mt(e)) {
                var s = Ht(e);
                i = s.length;
              }
              if (n >= i) return e;
              var a = n - $t(r);
              if (a < 1) return r;
              var u = s ? po(s, 0, a).join("") : e.slice(0, a);
              if (void 0 === o) return u + r;
              if ((s && (a += u.length - a), Ks(o))) {
                if (e.slice(a).search(o)) {
                  var c,
                    p = u;
                  for (o.global || (o = ge(o.source, ua(re.exec(o)) + "g")), o.lastIndex = 0; (c = o.exec(p)); ) var l = c.index;
                  u = u.slice(0, void 0 === l ? a : l);
                }
              } else if (e.indexOf(Zr(o), a) != a) {
                var f = u.lastIndexOf(o);
                f > -1 && (u = u.slice(0, f));
              }
              return u + r;
            }),
            (Dn.unescape = function (e) {
              return (e = ua(e)) && q.test(e) ? e.replace(U, Kt) : e;
            }),
            (Dn.uniqueId = function (e) {
              var t = ++Se;
              return ua(e) + t;
            }),
            (Dn.upperCase = La),
            (Dn.upperFirst = Ma),
            (Dn.each = us),
            (Dn.eachRight = cs),
            (Dn.first = Ui),
            Ya(
              Dn,
              ((lu = {}),
              cr(Dn, function (e, t) {
                ke.call(Dn.prototype, t) || (lu[t] = e);
              }),
              lu),
              { chain: !1 }
            ),
            (Dn.VERSION = "4.17.21"),
            at(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
              Dn[e].placeholder = Dn;
            }),
            at(["drop", "take"], function (e, t) {
              (An.prototype[e] = function (n) {
                n = void 0 === n ? 1 : an(oa(n), 0);
                var r = this.__filtered__ && !t ? new An(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = un(n, r.__takeCount__))
                    : r.__views__.push({ size: un(n, 4294967295), type: e + (r.__dir__ < 0 ? "Right" : "") }),
                  r
                );
              }),
                (An.prototype[e + "Right"] = function (t) {
                  return this.reverse()[e](t).reverse();
                });
            }),
            at(["filter", "map", "takeWhile"], function (e, t) {
              var n = t + 1,
                r = 1 == n || 3 == n;
              An.prototype[e] = function (e) {
                var t = this.clone();
                return t.__iteratees__.push({ iteratee: Zo(e, 3), type: n }), (t.__filtered__ = t.__filtered__ || r), t;
              };
            }),
            at(["head", "last"], function (e, t) {
              var n = "take" + (t ? "Right" : "");
              An.prototype[e] = function () {
                return this[n](1).value()[0];
              };
            }),
            at(["initial", "tail"], function (e, t) {
              var n = "drop" + (t ? "" : "Right");
              An.prototype[e] = function () {
                return this.__filtered__ ? new An(this) : this[n](1);
              };
            }),
            (An.prototype.compact = function () {
              return this.filter(Ha);
            }),
            (An.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (An.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (An.prototype.invokeMap = Lr(function (e, t) {
              return "function" == typeof e
                ? new An(this)
                : this.map(function (n) {
                    return br(n, e, t);
                  });
            })),
            (An.prototype.reject = function (e) {
              return this.filter(Ps(Zo(e)));
            }),
            (An.prototype.slice = function (e, t) {
              e = oa(e);
              var n = this;
              return n.__filtered__ && (e > 0 || t < 0)
                ? new An(n)
                : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                  void 0 !== t && (n = (t = oa(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                  n);
            }),
            (An.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (An.prototype.toArray = function () {
              return this.take(4294967295);
            }),
            cr(An.prototype, function (e, t) {
              var n = /^(?:filter|find|map|reject)|While$/.test(t),
                r = /^(?:head|last)$/.test(t),
                o = Dn[r ? "take" + ("last" == t ? "Right" : "") : t],
                i = r || /^find/.test(t);
              o &&
                (Dn.prototype[t] = function () {
                  var t = this.__wrapped__,
                    s = r ? [1] : arguments,
                    a = t instanceof An,
                    u = s[0],
                    c = a || Es(t),
                    p = function (e) {
                      var t = o.apply(Dn, ht([e], s));
                      return r && l ? t[0] : t;
                    };
                  c && n && "function" == typeof u && 1 != u.length && (a = c = !1);
                  var l = this.__chain__,
                    f = !!this.__actions__.length,
                    d = i && !l,
                    h = a && !f;
                  if (!i && c) {
                    t = h ? t : new An(this);
                    var g = e.apply(t, s);
                    return g.__actions__.push({ func: rs, args: [p], thisArg: void 0 }), new Tn(g, l);
                  }
                  return d && h ? e.apply(this, s) : ((g = this.thru(p)), d ? (r ? g.value()[0] : g.value()) : g);
                });
            }),
            at(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
              var t = ve[e],
                n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                r = /^(?:pop|shift)$/.test(e);
              Dn.prototype[e] = function () {
                var e = arguments;
                if (r && !this.__chain__) {
                  var o = this.value();
                  return t.apply(Es(o) ? o : [], e);
                }
                return this[n](function (n) {
                  return t.apply(Es(n) ? n : [], e);
                });
              };
            }),
            cr(An.prototype, function (e, t) {
              var n = Dn[t];
              if (n) {
                var r = n.name + "";
                ke.call(wn, r) || (wn[r] = []), wn[r].push({ name: t, func: n });
              }
            }),
            (wn[Ro(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
            (An.prototype.clone = function () {
              var e = new An(this.__wrapped__);
              return (
                (e.__actions__ = bo(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = bo(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = bo(this.__views__)),
                e
              );
            }),
            (An.prototype.reverse = function () {
              if (this.__filtered__) {
                var e = new An(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()).__dir__ *= -1;
              return e;
            }),
            (An.prototype.value = function () {
              var e = this.__wrapped__.value(),
                t = this.__dir__,
                n = Es(e),
                r = t < 0,
                o = n ? e.length : 0,
                i = (function (e, t, n) {
                  var r = -1,
                    o = n.length;
                  for (; ++r < o; ) {
                    var i = n[r],
                      s = i.size;
                    switch (i.type) {
                      case "drop":
                        e += s;
                        break;
                      case "dropRight":
                        t -= s;
                        break;
                      case "take":
                        t = un(t, e + s);
                        break;
                      case "takeRight":
                        e = an(e, t - s);
                    }
                  }
                  return { start: e, end: t };
                })(0, o, this.__views__),
                s = i.start,
                a = i.end,
                u = a - s,
                c = r ? a : s - 1,
                p = this.__iteratees__,
                l = p.length,
                f = 0,
                d = un(u, this.__takeCount__);
              if (!n || (!r && o == u && d == u)) return ro(e, this.__actions__);
              var h = [];
              e: for (; u-- && f < d; ) {
                for (var g = -1, y = e[(c += t)]; ++g < l; ) {
                  var _ = p[g],
                    v = _.iteratee,
                    b = _.type,
                    w = v(y);
                  if (2 == b) y = w;
                  else if (!w) {
                    if (1 == b) continue e;
                    break e;
                  }
                }
                h[f++] = y;
              }
              return h;
            }),
            (Dn.prototype.at = os),
            (Dn.prototype.chain = function () {
              return ns(this);
            }),
            (Dn.prototype.commit = function () {
              return new Tn(this.value(), this.__chain__);
            }),
            (Dn.prototype.next = function () {
              void 0 === this.__values__ && (this.__values__ = na(this.value()));
              var e = this.__index__ >= this.__values__.length;
              return { done: e, value: e ? void 0 : this.__values__[this.__index__++] };
            }),
            (Dn.prototype.plant = function (e) {
              for (var t, n = this; n instanceof Cn; ) {
                var r = Di(n);
                (r.__index__ = 0), (r.__values__ = void 0), t ? (o.__wrapped__ = r) : (t = r);
                var o = r;
                n = n.__wrapped__;
              }
              return (o.__wrapped__ = e), t;
            }),
            (Dn.prototype.reverse = function () {
              var e = this.__wrapped__;
              if (e instanceof An) {
                var t = e;
                return (
                  this.__actions__.length && (t = new An(this)),
                  (t = t.reverse()).__actions__.push({ func: rs, args: [Vi], thisArg: void 0 }),
                  new Tn(t, this.__chain__)
                );
              }
              return this.thru(Vi);
            }),
            (Dn.prototype.toJSON =
              Dn.prototype.valueOf =
              Dn.prototype.value =
                function () {
                  return ro(this.__wrapped__, this.__actions__);
                }),
            (Dn.prototype.first = Dn.prototype.head),
            Ye &&
              (Dn.prototype[Ye] = function () {
                return this;
              }),
            Dn
          );
        })();
        (He._ = Xt),
          void 0 ===
            (o = function () {
              return Xt;
            }.call(t, n, t, r)) || (r.exports = o);
      }).call(this);
    }).call(this, n(21), n(31)(e));
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    e.exports = n(74);
  },
  function (e, t, n) {
    "use strict";
    var r = t;
    function o() {
      r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
    }
    (r.build = "minimal"),
      (r.Writer = n(52)),
      (r.BufferWriter = n(82)),
      (r.Reader = n(53)),
      (r.BufferReader = n(83)),
      (r.util = n(22)),
      (r.rpc = n(84)),
      (r.roots = n(86)),
      (r.configure = o),
      o();
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n = new Array(arguments.length - 1),
        r = 0,
        o = 2,
        i = !0;
      for (; o < arguments.length; ) n[r++] = arguments[o++];
      return new Promise(function (o, s) {
        n[r] = function (e) {
          if (i)
            if (((i = !1), e)) s(e);
            else {
              for (var t = new Array(arguments.length - 1), n = 0; n < t.length; ) t[n++] = arguments[n];
              o.apply(null, t);
            }
        };
        try {
          e.apply(t || null, n);
        } catch (e) {
          i && ((i = !1), s(e));
        }
      });
    };
  },
  function (e, t, n) {
    "use strict";
    function r() {
      this._listeners = {};
    }
    (e.exports = r),
      (r.prototype.on = function (e, t, n) {
        return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: t, ctx: n || this }), this;
      }),
      (r.prototype.off = function (e, t) {
        if (void 0 === e) this._listeners = {};
        else if (void 0 === t) this._listeners[e] = [];
        else for (var n = this._listeners[e], r = 0; r < n.length; ) n[r].fn === t ? n.splice(r, 1) : ++r;
        return this;
      }),
      (r.prototype.emit = function (e) {
        var t = this._listeners[e];
        if (t) {
          for (var n = [], r = 1; r < arguments.length; ) n.push(arguments[r++]);
          for (r = 0; r < t.length; ) t[r].fn.apply(t[r++].ctx, n);
        }
        return this;
      });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (
        "undefined" != typeof Float32Array
          ? (function () {
              var t = new Float32Array([-0]),
                n = new Uint8Array(t.buffer),
                r = 128 === n[3];
              function o(e, r, o) {
                (t[0] = e), (r[o] = n[0]), (r[o + 1] = n[1]), (r[o + 2] = n[2]), (r[o + 3] = n[3]);
              }
              function i(e, r, o) {
                (t[0] = e), (r[o] = n[3]), (r[o + 1] = n[2]), (r[o + 2] = n[1]), (r[o + 3] = n[0]);
              }
              function s(e, r) {
                return (n[0] = e[r]), (n[1] = e[r + 1]), (n[2] = e[r + 2]), (n[3] = e[r + 3]), t[0];
              }
              function a(e, r) {
                return (n[3] = e[r]), (n[2] = e[r + 1]), (n[1] = e[r + 2]), (n[0] = e[r + 3]), t[0];
              }
              (e.writeFloatLE = r ? o : i), (e.writeFloatBE = r ? i : o), (e.readFloatLE = r ? s : a), (e.readFloatBE = r ? a : s);
            })()
          : (function () {
              function t(e, t, n, r) {
                var o = t < 0 ? 1 : 0;
                if ((o && (t = -t), 0 === t)) e(1 / t > 0 ? 0 : 2147483648, n, r);
                else if (isNaN(t)) e(2143289344, n, r);
                else if (t > 34028234663852886e22) e(((o << 31) | 2139095040) >>> 0, n, r);
                else if (t < 11754943508222875e-54) e(((o << 31) | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                else {
                  var i = Math.floor(Math.log(t) / Math.LN2);
                  e(((o << 31) | ((i + 127) << 23) | (8388607 & Math.round(t * Math.pow(2, -i) * 8388608))) >>> 0, n, r);
                }
              }
              function n(e, t, n) {
                var r = e(t, n),
                  o = 2 * (r >> 31) + 1,
                  i = (r >>> 23) & 255,
                  s = 8388607 & r;
                return 255 === i
                  ? s
                    ? NaN
                    : o * (1 / 0)
                  : 0 === i
                  ? 1401298464324817e-60 * o * s
                  : o * Math.pow(2, i - 150) * (s + 8388608);
              }
              (e.writeFloatLE = t.bind(null, o)),
                (e.writeFloatBE = t.bind(null, i)),
                (e.readFloatLE = n.bind(null, s)),
                (e.readFloatBE = n.bind(null, a));
            })(),
        "undefined" != typeof Float64Array
          ? (function () {
              var t = new Float64Array([-0]),
                n = new Uint8Array(t.buffer),
                r = 128 === n[7];
              function o(e, r, o) {
                (t[0] = e),
                  (r[o] = n[0]),
                  (r[o + 1] = n[1]),
                  (r[o + 2] = n[2]),
                  (r[o + 3] = n[3]),
                  (r[o + 4] = n[4]),
                  (r[o + 5] = n[5]),
                  (r[o + 6] = n[6]),
                  (r[o + 7] = n[7]);
              }
              function i(e, r, o) {
                (t[0] = e),
                  (r[o] = n[7]),
                  (r[o + 1] = n[6]),
                  (r[o + 2] = n[5]),
                  (r[o + 3] = n[4]),
                  (r[o + 4] = n[3]),
                  (r[o + 5] = n[2]),
                  (r[o + 6] = n[1]),
                  (r[o + 7] = n[0]);
              }
              function s(e, r) {
                return (
                  (n[0] = e[r]),
                  (n[1] = e[r + 1]),
                  (n[2] = e[r + 2]),
                  (n[3] = e[r + 3]),
                  (n[4] = e[r + 4]),
                  (n[5] = e[r + 5]),
                  (n[6] = e[r + 6]),
                  (n[7] = e[r + 7]),
                  t[0]
                );
              }
              function a(e, r) {
                return (
                  (n[7] = e[r]),
                  (n[6] = e[r + 1]),
                  (n[5] = e[r + 2]),
                  (n[4] = e[r + 3]),
                  (n[3] = e[r + 4]),
                  (n[2] = e[r + 5]),
                  (n[1] = e[r + 6]),
                  (n[0] = e[r + 7]),
                  t[0]
                );
              }
              (e.writeDoubleLE = r ? o : i), (e.writeDoubleBE = r ? i : o), (e.readDoubleLE = r ? s : a), (e.readDoubleBE = r ? a : s);
            })()
          : (function () {
              function t(e, t, n, r, o, i) {
                var s = r < 0 ? 1 : 0;
                if ((s && (r = -r), 0 === r)) e(0, o, i + t), e(1 / r > 0 ? 0 : 2147483648, o, i + n);
                else if (isNaN(r)) e(0, o, i + t), e(2146959360, o, i + n);
                else if (r > 17976931348623157e292) e(0, o, i + t), e(((s << 31) | 2146435072) >>> 0, o, i + n);
                else {
                  var a;
                  if (r < 22250738585072014e-324) e((a = r / 5e-324) >>> 0, o, i + t), e(((s << 31) | (a / 4294967296)) >>> 0, o, i + n);
                  else {
                    var u = Math.floor(Math.log(r) / Math.LN2);
                    1024 === u && (u = 1023),
                      e((4503599627370496 * (a = r * Math.pow(2, -u))) >>> 0, o, i + t),
                      e(((s << 31) | ((u + 1023) << 20) | ((1048576 * a) & 1048575)) >>> 0, o, i + n);
                  }
                }
              }
              function n(e, t, n, r, o) {
                var i = e(r, o + t),
                  s = e(r, o + n),
                  a = 2 * (s >> 31) + 1,
                  u = (s >>> 20) & 2047,
                  c = 4294967296 * (1048575 & s) + i;
                return 2047 === u ? (c ? NaN : a * (1 / 0)) : 0 === u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496);
              }
              (e.writeDoubleLE = t.bind(null, o, 0, 4)),
                (e.writeDoubleBE = t.bind(null, i, 4, 0)),
                (e.readDoubleLE = n.bind(null, s, 0, 4)),
                (e.readDoubleBE = n.bind(null, a, 4, 0));
            })(),
        e
      );
    }
    function o(e, t, n) {
      (t[n] = 255 & e), (t[n + 1] = (e >>> 8) & 255), (t[n + 2] = (e >>> 16) & 255), (t[n + 3] = e >>> 24);
    }
    function i(e, t, n) {
      (t[n] = e >>> 24), (t[n + 1] = (e >>> 16) & 255), (t[n + 2] = (e >>> 8) & 255), (t[n + 3] = 255 & e);
    }
    function s(e, t) {
      return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
    }
    function a(e, t) {
      return ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
    }
    e.exports = r(r);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
      } catch (e) {}
      return null;
    }
    module.exports = inquire;
  },
  function (e, t, n) {
    "use strict";
    var r = t;
    (r.length = function (e) {
      for (var t = 0, n = 0, r = 0; r < e.length; ++r)
        (n = e.charCodeAt(r)) < 128
          ? (t += 1)
          : n < 2048
          ? (t += 2)
          : 55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(r + 1))
          ? (++r, (t += 4))
          : (t += 3);
      return t;
    }),
      (r.read = function (e, t, n) {
        if (n - t < 1) return "";
        for (var r, o = null, i = [], s = 0; t < n; )
          (r = e[t++]) < 128
            ? (i[s++] = r)
            : r > 191 && r < 224
            ? (i[s++] = ((31 & r) << 6) | (63 & e[t++]))
            : r > 239 && r < 365
            ? ((r = (((7 & r) << 18) | ((63 & e[t++]) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])) - 65536),
              (i[s++] = 55296 + (r >> 10)),
              (i[s++] = 56320 + (1023 & r)))
            : (i[s++] = ((15 & r) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])),
            s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), (s = 0));
        return o
          ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))), o.join(""))
          : String.fromCharCode.apply(String, i.slice(0, s));
      }),
      (r.write = function (e, t, n) {
        for (var r, o, i = n, s = 0; s < e.length; ++s)
          (r = e.charCodeAt(s)) < 128
            ? (t[n++] = r)
            : r < 2048
            ? ((t[n++] = (r >> 6) | 192), (t[n++] = (63 & r) | 128))
            : 55296 == (64512 & r) && 56320 == (64512 & (o = e.charCodeAt(s + 1)))
            ? ((r = 65536 + ((1023 & r) << 10) + (1023 & o)),
              ++s,
              (t[n++] = (r >> 18) | 240),
              (t[n++] = ((r >> 12) & 63) | 128),
              (t[n++] = ((r >> 6) & 63) | 128),
              (t[n++] = (63 & r) | 128))
            : ((t[n++] = (r >> 12) | 224), (t[n++] = ((r >> 6) & 63) | 128), (t[n++] = (63 & r) | 128));
        return n - i;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      var r = n || 8192,
        o = r >>> 1,
        i = null,
        s = r;
      return function (n) {
        if (n < 1 || n > o) return e(n);
        s + n > r && ((i = e(r)), (s = 0));
        var a = t.call(i, s, (s += n));
        return 7 & s && (s = 1 + (7 | s)), a;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = o;
    var r = n(22);
    function o(e, t) {
      (this.lo = e >>> 0), (this.hi = t >>> 0);
    }
    var i = (o.zero = new o(0, 0));
    (i.toNumber = function () {
      return 0;
    }),
      (i.zzEncode = i.zzDecode =
        function () {
          return this;
        }),
      (i.length = function () {
        return 1;
      });
    var s = (o.zeroHash = "\0\0\0\0\0\0\0\0");
    (o.fromNumber = function (e) {
      if (0 === e) return i;
      var t = e < 0;
      t && (e = -e);
      var n = e >>> 0,
        r = ((e - n) / 4294967296) >>> 0;
      return t && ((r = ~r >>> 0), (n = ~n >>> 0), ++n > 4294967295 && ((n = 0), ++r > 4294967295 && (r = 0))), new o(n, r);
    }),
      (o.from = function (e) {
        if ("number" == typeof e) return o.fromNumber(e);
        if (r.isString(e)) {
          if (!r.Long) return o.fromNumber(parseInt(e, 10));
          e = r.Long.fromString(e);
        }
        return e.low || e.high ? new o(e.low >>> 0, e.high >>> 0) : i;
      }),
      (o.prototype.toNumber = function (e) {
        if (!e && this.hi >>> 31) {
          var t = (1 + ~this.lo) >>> 0,
            n = ~this.hi >>> 0;
          return t || (n = (n + 1) >>> 0), -(t + 4294967296 * n);
        }
        return this.lo + 4294967296 * this.hi;
      }),
      (o.prototype.toLong = function (e) {
        return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) };
      });
    var a = String.prototype.charCodeAt;
    (o.fromHash = function (e) {
      return e === s
        ? i
        : new o(
            (a.call(e, 0) | (a.call(e, 1) << 8) | (a.call(e, 2) << 16) | (a.call(e, 3) << 24)) >>> 0,
            (a.call(e, 4) | (a.call(e, 5) << 8) | (a.call(e, 6) << 16) | (a.call(e, 7) << 24)) >>> 0
          );
    }),
      (o.prototype.toHash = function () {
        return String.fromCharCode(
          255 & this.lo,
          (this.lo >>> 8) & 255,
          (this.lo >>> 16) & 255,
          this.lo >>> 24,
          255 & this.hi,
          (this.hi >>> 8) & 255,
          (this.hi >>> 16) & 255,
          this.hi >>> 24
        );
      }),
      (o.prototype.zzEncode = function () {
        var e = this.hi >> 31;
        return (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0), (this.lo = ((this.lo << 1) ^ e) >>> 0), this;
      }),
      (o.prototype.zzDecode = function () {
        var e = -(1 & this.lo);
        return (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0), (this.hi = ((this.hi >>> 1) ^ e) >>> 0), this;
      }),
      (o.prototype.length = function () {
        var e = this.lo,
          t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
          n = this.hi >>> 24;
        return 0 === n
          ? 0 === t
            ? e < 16384
              ? e < 128
                ? 1
                : 2
              : e < 2097152
              ? 3
              : 4
            : t < 16384
            ? t < 128
              ? 5
              : 6
            : t < 2097152
            ? 7
            : 8
          : n < 128
          ? 9
          : 10;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(52);
    (i.prototype = Object.create(r.prototype)).constructor = i;
    var o = n(22);
    function i() {
      r.call(this);
    }
    function s(e, t, n) {
      e.length < 40 ? o.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n);
    }
    (i._configure = function () {
      (i.alloc = o._Buffer_allocUnsafe),
        (i.writeBytesBuffer =
          o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name
            ? function (e, t, n) {
                t.set(e, n);
              }
            : function (e, t, n) {
                if (e.copy) e.copy(t, n, 0, e.length);
                else for (var r = 0; r < e.length; ) t[n++] = e[r++];
              });
    }),
      (i.prototype.bytes = function (e) {
        o.isString(e) && (e = o._Buffer_from(e, "base64"));
        var t = e.length >>> 0;
        return this.uint32(t), t && this._push(i.writeBytesBuffer, t, e), this;
      }),
      (i.prototype.string = function (e) {
        var t = o.Buffer.byteLength(e);
        return this.uint32(t), t && this._push(s, t, e), this;
      }),
      i._configure();
  },
  function (e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(53);
    (i.prototype = Object.create(r.prototype)).constructor = i;
    var o = n(22);
    function i(e) {
      r.call(this, e);
    }
    (i._configure = function () {
      o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice);
    }),
      (i.prototype.string = function () {
        var e = this.uint32();
        return this.buf.utf8Slice
          ? this.buf.utf8Slice(this.pos, (this.pos = Math.min(this.pos + e, this.len)))
          : this.buf.toString("utf-8", this.pos, (this.pos = Math.min(this.pos + e, this.len)));
      }),
      i._configure();
  },
  function (e, t, n) {
    "use strict";
    t.Service = n(85);
  },
  function (e, t, n) {
    "use strict";
    e.exports = o;
    var r = n(22);
    function o(e, t, n) {
      if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
      r.EventEmitter.call(this), (this.rpcImpl = e), (this.requestDelimited = Boolean(t)), (this.responseDelimited = Boolean(n));
    }
    ((o.prototype = Object.create(r.EventEmitter.prototype)).constructor = o),
      (o.prototype.rpcCall = function e(t, n, o, i, s) {
        if (!i) throw TypeError("request must be specified");
        var a = this;
        if (!s) return r.asPromise(e, a, t, n, o, i);
        if (a.rpcImpl)
          try {
            return a.rpcImpl(t, n[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function (e, n) {
              if (e) return a.emit("error", e, t), s(e);
              if (null !== n) {
                if (!(n instanceof o))
                  try {
                    n = o[a.responseDelimited ? "decodeDelimited" : "decode"](n);
                  } catch (e) {
                    return a.emit("error", e, t), s(e);
                  }
                return a.emit("data", n, t), s(null, n);
              }
              a.end(!0);
            });
          } catch (e) {
            return (
              a.emit("error", e, t),
              void setTimeout(function () {
                s(e);
              }, 0)
            );
          }
        else
          setTimeout(function () {
            s(Error("already ended"));
          }, 0);
      }),
      (o.prototype.end = function (e) {
        return this.rpcImpl && (e || this.rpcImpl(null, null, null), (this.rpcImpl = null), this.emit("end").off()), this;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = {};
  },
  function (e, t, n) {
    var r = n(88),
      o = n(107),
      i = n(109),
      s = n(110),
      a = n(111);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (u.prototype.clear = r), (u.prototype.delete = o), (u.prototype.get = i), (u.prototype.has = s), (u.prototype.set = a), (e.exports = u);
  },
  function (e, t, n) {
    var r = n(89),
      o = n(100),
      i = n(106);
    e.exports = function () {
      (this.size = 0), (this.__data__ = { hash: new r(), map: new (i || o)(), string: new r() });
    };
  },
  function (e, t, n) {
    var r = n(90),
      o = n(96),
      i = n(97),
      s = n(98),
      a = n(99);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (u.prototype.clear = r), (u.prototype.delete = o), (u.prototype.get = i), (u.prototype.has = s), (u.prototype.set = a), (e.exports = u);
  },
  function (e, t, n) {
    var r = n(37);
    e.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (e, t, n) {
    var r = n(55),
      o = n(92),
      i = n(38),
      s = n(94),
      a = /^\[object .+?Constructor\]$/,
      u = Function.prototype,
      c = Object.prototype,
      p = u.toString,
      l = c.hasOwnProperty,
      f = RegExp(
        "^" +
          p
            .call(l)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    e.exports = function (e) {
      return !(!i(e) || o(e)) && (r(e) ? f : a).test(s(e));
    };
  },
  function (e, t, n) {
    var r,
      o = n(93),
      i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function (e) {
      return !!i && i in e;
    };
  },
  function (e, t, n) {
    var r = n(25)["__core-js_shared__"];
    e.exports = r;
  },
  function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t];
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t, n) {
    var r = n(37),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      if (r) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return o.call(t, e) ? t[e] : void 0;
    };
  },
  function (e, t, n) {
    var r = n(37),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      return r ? void 0 !== t[e] : o.call(t, e);
    };
  },
  function (e, t, n) {
    var r = n(37);
    e.exports = function (e, t) {
      var n = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t), this;
    };
  },
  function (e, t, n) {
    var r = n(101),
      o = n(102),
      i = n(103),
      s = n(104),
      a = n(105);
    function u(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (u.prototype.clear = r), (u.prototype.delete = o), (u.prototype.get = i), (u.prototype.has = s), (u.prototype.set = a), (e.exports = u);
  },
  function (e, t) {
    e.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (e, t, n) {
    var r = n(39),
      o = Array.prototype.splice;
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0);
    };
  },
  function (e, t, n) {
    var r = n(39);
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
  },
  function (e, t, n) {
    var r = n(39);
    e.exports = function (e) {
      return r(this.__data__, e) > -1;
    };
  },
  function (e, t, n) {
    var r = n(39);
    e.exports = function (e, t) {
      var n = this.__data__,
        o = r(n, e);
      return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
    };
  },
  function (e, t, n) {
    var r = n(54)(n(25), "Map");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(40);
    e.exports = function (e) {
      var t = r(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
    };
  },
  function (e, t, n) {
    var r = n(40);
    e.exports = function (e) {
      return r(this, e).get(e);
    };
  },
  function (e, t, n) {
    var r = n(40);
    e.exports = function (e) {
      return r(this, e).has(e);
    };
  },
  function (e, t, n) {
    var r = n(40);
    e.exports = function (e, t) {
      var n = r(this, e),
        o = n.size;
      return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      "use strict";
      return (
        Object.keys(e).forEach(function (n) {
          t(e[n], n, e);
        }),
        e
      );
    };
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    function cloneFunction(func) {
      var out, str;
      try {
        (str = func.toString()), (out = /\[native code\]/.test(str) ? func : eval("(function(){return " + str + "}());"));
      } catch (e) {
        throw new Error(e.message + "\r\n\r\n" + str);
      }
      return out;
    }
    module.exports = cloneFunction;
  },
  function (e, t, n) {
    var r = n(57),
      o = n(115),
      i = n(58);
    e.exports = function (e, t) {
      return i(o(e), r(t, 0, e.length));
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    };
  },
  function (e, t) {
    var n = Math.floor,
      r = Math.random;
    e.exports = function (e, t) {
      return e + n(r() * (t - e + 1));
    };
  },
  function (e, t, n) {
    var r = n(57),
      o = n(58),
      i = n(118);
    e.exports = function (e, t) {
      var n = i(e);
      return o(n, r(t, 0, n.length));
    };
  },
  function (e, t, n) {
    var r = n(119),
      o = n(121);
    e.exports = function (e) {
      return null == e ? [] : r(e, o(e));
    };
  },
  function (e, t, n) {
    var r = n(120);
    e.exports = function (e, t) {
      return r(t, function (t) {
        return e[t];
      });
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
      return o;
    };
  },
  function (e, t, n) {
    var r = n(122),
      o = n(132),
      i = n(62);
    e.exports = function (e) {
      return i(e) ? r(e) : o(e);
    };
  },
  function (e, t, n) {
    var r = n(123),
      o = n(124),
      i = n(59),
      s = n(126),
      a = n(60),
      u = n(128),
      c = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
      var n = i(e),
        p = !n && o(e),
        l = !n && !p && s(e),
        f = !n && !p && !l && u(e),
        d = n || p || l || f,
        h = d ? r(e.length, String) : [],
        g = h.length;
      for (var y in e)
        (!t && !c.call(e, y)) ||
          (d &&
            ("length" == y ||
              (l && ("offset" == y || "parent" == y)) ||
              (f && ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
              a(y, g))) ||
          h.push(y);
      return h;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    };
  },
  function (e, t, n) {
    var r = n(125),
      o = n(24),
      i = Object.prototype,
      s = i.hasOwnProperty,
      a = i.propertyIsEnumerable,
      u = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (e) {
            return o(e) && s.call(e, "callee") && !a.call(e, "callee");
          };
    e.exports = u;
  },
  function (e, t, n) {
    var r = n(23),
      o = n(24);
    e.exports = function (e) {
      return o(e) && "[object Arguments]" == r(e);
    };
  },
  function (e, t, n) {
    (function (e) {
      var r = n(25),
        o = n(127),
        i = t && !t.nodeType && t,
        s = i && "object" == typeof e && e && !e.nodeType && e,
        a = s && s.exports === i ? r.Buffer : void 0,
        u = (a ? a.isBuffer : void 0) || o;
      e.exports = u;
    }).call(this, n(31)(e));
  },
  function (e, t) {
    e.exports = function () {
      return !1;
    };
  },
  function (e, t, n) {
    var r = n(129),
      o = n(130),
      i = n(131),
      s = i && i.isTypedArray,
      a = s ? o(s) : r;
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(23),
      o = n(61),
      i = n(24),
      s = {};
    (s["[object Float32Array]"] =
      s["[object Float64Array]"] =
      s["[object Int8Array]"] =
      s["[object Int16Array]"] =
      s["[object Int32Array]"] =
      s["[object Uint8Array]"] =
      s["[object Uint8ClampedArray]"] =
      s["[object Uint16Array]"] =
      s["[object Uint32Array]"] =
        !0),
      (s["[object Arguments]"] =
        s["[object Array]"] =
        s["[object ArrayBuffer]"] =
        s["[object Boolean]"] =
        s["[object DataView]"] =
        s["[object Date]"] =
        s["[object Error]"] =
        s["[object Function]"] =
        s["[object Map]"] =
        s["[object Number]"] =
        s["[object Object]"] =
        s["[object RegExp]"] =
        s["[object Set]"] =
        s["[object String]"] =
        s["[object WeakMap]"] =
          !1),
      (e.exports = function (e) {
        return i(e) && o(e.length) && !!s[r(e)];
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  },
  function (e, t, n) {
    (function (e) {
      var r = n(36),
        o = t && !t.nodeType && t,
        i = o && "object" == typeof e && e && !e.nodeType && e,
        s = i && i.exports === o && r.process,
        a = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            return e || (s && s.binding && s.binding("util"));
          } catch (e) {}
        })();
      e.exports = a;
    }).call(this, n(31)(e));
  },
  function (e, t, n) {
    var r = n(133),
      o = n(134),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!r(e)) return o(e);
      var t = [];
      for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
      return t;
    };
  },
  function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || n);
    };
  },
  function (e, t, n) {
    var r = n(135)(Object.keys, Object);
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    };
  },
  function (e, t, n) {
    var r = n(56),
      o = n(62),
      i = n(60),
      s = n(38);
    e.exports = function (e, t, n) {
      if (!s(n)) return !1;
      var a = typeof t;
      return !!("number" == a ? o(n) && i(t, n.length) : "string" == a && t in n) && r(n[t], e);
    };
  },
  function (e, t, n) {
    var r = n(138);
    e.exports = function (e) {
      var t = r(e),
        n = t % 1;
      return t == t ? (n ? t - n : t) : 0;
    };
  },
  function (e, t, n) {
    var r = n(139);
    e.exports = function (e) {
      return e ? ((e = r(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0) : 0 === e ? e : 0;
    };
  },
  function (e, t, n) {
    var r = n(140),
      o = n(38),
      i = n(142),
      s = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      u = /^0o[0-7]+$/i,
      c = parseInt;
    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (i(e)) return NaN;
      if (o(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = o(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = r(e);
      var n = a.test(e);
      return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
    };
  },
  function (e, t, n) {
    var r = n(141),
      o = /^\s+/;
    e.exports = function (e) {
      return e ? e.slice(0, r(e) + 1).replace(o, "") : e;
    };
  },
  function (e, t) {
    var n = /\s/;
    e.exports = function (e) {
      for (var t = e.length; t-- && n.test(e.charAt(t)); );
      return t;
    };
  },
  function (e, t, n) {
    var r = n(23),
      o = n(24);
    e.exports = function (e) {
      return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(12);
    window.sdk = {
      loading: {
        loaded: !1,
        started: Date.now(),
        restart: () => {
          location.reload();
        }
      }
    };
    var r = n(8);
    const o = (e) => (+e >= 10 ? e : "0" + e);
    (sdk.config = {
      browser: "Chrome",
      debug: !1,
      application: {
        id: "hotspot-shield-chrome",
        name: "hotspot-shield",
        applicationId: browser.runtime.id,
        appName: 0,
        ...(() => {
          const e = browser.runtime.getManifest().version,
            t = ((e) => {
              const [t, n, r] = e.split(".").map((e) => +e);
              return +`${t}${o(n)}${o(r)}`;
            })(e);
          let n;
          return r.d ? (n = 9) : r.b ? (n = 8) : r.c && (n = 10), { version: e, decimalVersion: t, connectStringPlatform: n };
        })()
      },
      authorization: { carrier: "hss", platform: "chrome" },
      infra: "hss",
      protocolPrefix: "chrome-extension",
      configs: {
        free: "https://s3-us-west-2.amazonaws.com/hssext/hss-free.json",
        elite: "https://s3-us-west-2.amazonaws.com/hssext/hss-elite.json"
      },
      countryCheckUrl: "https://www.hsselite.com/ipinfo",
      elite: {
        api: "https://api.hsselite.com/1/plain/",
        enabled: !0,
        prefix: "HC",
        popupUtm: "hss_ChromeExtension",
        deviceInfo: {
          make: navigator.userAgent.match(/Chrom(e|ium)/g) ? navigator.userAgent.match(/Chrom(e|ium)/g)[0] : "undefined",
          model: "Chrome",
          platform: 5,
          package_name: "com.anchorfree.extchrome"
        }
      },
      proxy: { connecting: { enabled: !0, delay: 3.5 }, disconnecting: { enabled: !0, delay: 1.8 } },
      reporting: {
        analytics: {
          id: "UA-114461737-1",
          sampling: {
            elite: 100,
            click: 100,
            bypass: 100,
            secured: 100,
            malware: 100,
            connection: 100,
            application: 100,
            contentWall: 100,
            SpeedMonitoring: 100,
            default: 10
          },
          interval: 72e6,
          noPrefix: !0
        }
      },
      promo: { rateUs: { delay: 12e5, interval: 6048e5 }, trial: { delay: 0, interval: 864e5, limit: 10 } },
      uninstallUrl: "https://www.hotspotshield.com/vpn/vpn-for-chrome/uninstall/",
      survey: { enable: !1 },
      lokalise: { id: "46090834612f42cfd6bbf6.18401933", token: "deaa823479d8040a4b63429c8b2c4dfc3d76b18f" }
    }),
      (sdk.config.installUrl = `chrome-extension://${sdk.config.application.applicationId}/pages/welcome.html`),
      (sdk.config.promo.rateUs.url = `https://chrome.google.com/webstore/detail/hotspot-shield-vpn-free-p/${sdk.config.application.applicationId}?hl=en-US`);
    var i = n(9);
    class s {
      static get(e, t) {
        return s.request(e, "GET", !1, t);
      }
      static post(e, t, n) {
        return s.request(e, "POST", t, n);
      }
      static request(e, t, n, r) {
        return (
          (r = r || 6e4),
          new Promise((o, i) => {
            const s = new XMLHttpRequest();
            s.open(t, e),
              "POST" === t && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
              (s.onload = function () {
                s.status >= 200 && s.status < 300 ? o(s.responseText) : i();
              }),
              (s.onerror = function (e) {
                i(e);
              }),
              (s.timeout = r),
              (s.ontimeout = function (e) {
                i(e);
              }),
              s.send(n);
          })
        );
      }
    }
    var a = s,
      u = n(41),
      c = n.n(u),
      p = n(28),
      l = n.n(p);
    var f = class {
      constructor() {
        (sdk.getBase64ConnectionString = this.getBase64ConnectionString),
          (sdk.parseBase64DeviceInfo = this.parseBase64DeviceInfo),
          (sdk.getBase64DeviceInfo = this.getBase64DeviceInfo);
      }
      async getBase64DeviceInfo(e) {
        const t = l.a.proto.api.DeviceInfo,
          n = t.create(e),
          r = t.encode(n).finish();
        let o = c.a.encode(r, 0, r.length);
        return (o = o.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "")), o;
      }
      parseBase64DeviceInfo(e) {
        const t = l.a.proto.api.DeviceInfo,
          n = Uint8Array.from(atob(e), (e) => e.charCodeAt(0)),
          r = t.decode(n);
        return t.toObject(r);
      }
      getBase64ConnectionString(e) {
        const t = l.a.AF.ConnectString,
          n = t.create(e),
          r = t.encode(n).finish();
        return c.a.encode(r, 0, r.length);
      }
      request(e, t, n) {
        return new Promise((r, o) => {
          debug("Proto request: " + t), debug(JSON.stringify(n)), debug("-------------------------------------");
          const i = l.a.proto.api.request[e],
            s = i.verify(n);
          s && error("request", s, e, t, n);
          const a = i.create(n),
            u = i.encode(a).finish();
          this.sendRequestFetch(e, t, u)
            .then((e) => {
              try {
                return e.ResponseStatus.success ? r(e) : o(e);
              } catch (t) {
                return o(e);
              }
            })
            .catch((e) => {
              o({ ResponseStatus: { success: !1, error_code: e, error_message: null } });
            });
        });
      }
      async response(e, t) {
        try {
          let n = l.a.proto.api.response[e].decode(new Uint8Array(t));
          return (
            (n = this.transformToObject(n)),
            debug("Proto response: " + e),
            debug(JSON.stringify(n)),
            debug("-------------------------------------"),
            n
          );
        } catch (n) {
          throw (console.error("response for " + e, n, t), n);
        }
      }
      async sendRequestFetch(e, t, n) {
        try {
          const r = await fetch(sdk.config.elite.api + t, { method: "POST", body: n }),
            o = await r.arrayBuffer();
          return this.response(e, o);
        } catch (r) {
          throw (console.error("request failed", r, e, t, n), r);
        }
      }
      transformToObject(e) {
        const t = {};
        for (const n in e)
          "function" != typeof e[n] &&
            (null === e[n] ? (t[n] = e[n]) : "object" == typeof e[n] ? (t[n] = this.transformToObject(e[n])) : (t[n] = e[n]));
        return t;
      }
    };
    function d(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var h = class {
      constructor() {
        d(this, "getFreeSD", async () => this.getSD("free")),
          d(this, "getEliteSD", async () => this.getSD("elite")),
          d(this, "getSD", async (e) => {
            try {
              const t = await this.proto.request("SD", "config/sd", {
                DeviceInfo: { ...this.deviceInfo(), package_name: "com.anchorfree.extchrome" },
                requested_country: "OP",
                additional_data: "packages%5B%5D=" + e
              });
              let n;
              if (t && t.raw_data)
                try {
                  const e = JSON.parse(t.raw_data);
                  e.servers && (n = e.servers);
                } catch (e) {}
              return n;
            } catch (e) {
              return;
            }
          }),
          (this.popUp = {
            deviceInfo: "",
            trial: "https://www.hsselite.com/payment/cc/week2month?chrome_ext=1",
            payment: "https://www.hsselite.com/pre_purchase?chrome_ext=1"
          }),
          (this.proto = new f()),
          (sdk.getDeviceInfo = this.deviceInfo.bind(this)),
          (sdk.getSD = this.getSD),
          (sdk.getFreeSD = this.getFreeSD),
          (sdk.getEliteSD = this.getEliteSD),
          (sdk.connectionString = this.connectionString.bind(this)),
          (this.updateStatusInterval = 432e5);
      }
      init() {
        return new Promise((e) => {
          this.getStatus().then(
            () => (
              this.getPopUp(),
              this.showToPublic(),
              setInterval(() => {
                this.getStatus();
              }, this.updateStatusInterval),
              e()
            )
          );
        });
      }
      async getStatus() {
        let e;
        try {
          e = await this.proto.request("Status", "status", { DeviceInfo: this.deviceInfo() });
        } catch (t) {
          e = t;
        }
        await this.statusCallback(e);
      }
      async signIn(e, t) {
        try {
          this.eliteEvent({ category: "signin" });
          const n = await this.proto.request("Signin", "signin", { DeviceInfo: this.deviceInfo(), login: e, password: t }),
            r = await this.statusCallback(n);
          return (
            this.eliteEvent({ category: "signedin", touchpoint: sdk.user.status.elite ? "elite" : "free" }),
            sdk.user.status.elite && sdk.forceLoadSD(),
            r
          );
        } catch (e) {
          throw (null == e ? void 0 : e.ResponseStatus) || e;
        }
      }
      async signUp(e, t) {
        try {
          this.eliteEvent({ category: "signup" });
          await this.proto.request("Signup", "signup", { DeviceInfo: this.deviceInfo(), email: e, password: t });
          return await this.signIn(e, t);
        } catch (e) {
          throw (null == e ? void 0 : e.ResponseStatus) || e;
        }
      }
      async restorePassword(e) {
        try {
          return (
            this.eliteEvent({ category: "restorepassword" }),
            await this.proto.request("RestorePassword", "restore", { DeviceInfo: this.deviceInfo(), email: e })
          );
        } catch (e) {
          throw (null == e ? void 0 : e.ResponseStatus) || e;
        }
      }
      getPopUp() {
        this.proto.request("Config", "config/payment_popup", { DeviceInfo: this.deviceInfo() }).then((e) => {
          var t, n, r;
          null != e &&
            null !== (t = e.ResponseStatus) &&
            void 0 !== t &&
            t.success &&
            (null !== (n = e.PaymentPopupGeneral) && void 0 !== n && n.url && (this.popUp.payment = e.PaymentPopupGeneral.url),
            null !== (r = e.PaymentPopupOptin) && void 0 !== r && r.url && (this.popUp.trial = e.PaymentPopupOptin.url),
            this.proto.getBase64DeviceInfo(this.deviceInfo()).then((e) => {
              this.popUp.deviceInfo = e;
            }));
        });
      }
      openPopUp(e, t) {
        (this.domain = t), (this.touchpoint = e);
        const n = { category: "openpopup", touchpoint: this.touchpoint };
        this.eliteEvent(n);
        const r = `touchpoint=${e}&domain=${this.domain}&user_co=${sdk.user.country}${
            "connected" === sdk.proxy.status.status ? "&proxy_co=" + sdk.proxy.status.location : ""
          }`,
          o = `${this.popUp.payment + (-1 !== this.popUp.payment.indexOf("?") ? "&" : "?")}pbdi=${
            this.popUp.deviceInfo
          }&ct=${encodeURIComponent(r)}&utm_source=${sdk.config.elite.popupUtm}&utm_medium=Free&utm_campaign=${this.touchpoint}`;
        sdk.tabs.openPage(o);
      }
      openTrialPromo(e, t) {
        (this.domain = t), (this.touchpoint = e);
        const n = { category: "opentrialpromo", touchpoint: this.touchpoint };
        this.eliteEvent(n);
        const r = `touchpoint=${e}&domain=${this.domain}&user_co=${sdk.user.country}${
            "connected" === sdk.proxy.status.status ? "&proxy_co=" + sdk.proxy.status.location : ""
          }`,
          o = `${this.popUp.trial}&pbdi=${this.popUp.deviceInfo}&ct=${encodeURIComponent(r)}&utm_source=${
            sdk.config.elite.popupUtm
          }&utm_medium=Free&utm_campaign=${this.touchpoint}`;
        sdk.tabs.openPage(o);
      }
      async statusCallback(e) {
        if (
          ((sdk.user.status.token = void 0),
          (sdk.user.status.elite = !1),
          (sdk.user.status.login = void 0),
          (sdk.user.status.bnLink = !1),
          (sdk.user.status.authorized = !1),
          "hss" === sdk.config.infra &&
            e.proxy_params &&
            (sdk.user.status.hss = { password: e.proxy_params.password, username: e.proxy_params.username }),
          e.token && (sdk.user.status.token = e.token),
          e.UserStatus &&
            void 0 !== e.UserStatus.is_anonymous &&
            !e.UserStatus.is_anonymous &&
            e.UserStatus.login &&
            "_AFFREE_" !== e.UserStatus.login &&
            ((sdk.user.status.login = e.UserStatus.login), (sdk.user.status.authorized = !0), (sdk.user.status.bnLink = !1)),
          e.UserStatus && e.UserStatus.packages)
        )
          for (const t in e.UserStatus.packages) {
            if (e.UserStatus.packages[t].is_active) {
              sdk.user.status.elite = !0;
              break;
            }
          }
        return await sdk.storage.set("User.data", sdk.user), JSON.parse(JSON.stringify(sdk.user.status));
      }
      showToPublic() {
        (sdk.user.bnLink = this.bnLink.bind(this)),
          (sdk.user.signUp = this.signUp.bind(this)),
          (sdk.user.signIn = this.signIn.bind(this)),
          (sdk.user.signOut = this.signOut.bind(this)),
          (sdk.user.openPopUp = this.openPopUp.bind(this)),
          (sdk.user.getStatus = this.getStatus),
          (sdk.user.openTrialPromo = this.openTrialPromo.bind(this)),
          (sdk.user.restorePassword = this.restorePassword.bind(this));
      }
      bnLink(e) {
        return (
          this.eliteEvent({ category: "bnLink" }),
          (sdk.user.status.login = e),
          (sdk.user.status.bnLink = !0),
          this.proto
            .request("BNLink", "bn/link", { DeviceInfo: this.deviceInfo(), email: e })
            .then((e) => (e && e.link_status && 202 === e.link_status && !this.bnLinkInterval && this.monitoreBnLink(), e))
        );
      }
      monitoreBnLink() {
        this.bnLinkInterval = setInterval(() => {
          this.getStatus().then(() => {
            if (sdk.user.status.authorized) return clearInterval(this.bnLinkInterval), (this.bnLinkInterval = null), !0;
          });
        }, 1e4);
      }
      signOut() {
        return (
          this.eliteEvent({ category: "signout" }),
          this.proto.request("Signout", "signout", { DeviceInfo: this.deviceInfo() }).then((e) => this.statusCallback(e))
        );
      }
      deviceInfo() {
        const e = {
          platform: sdk.config.elite.deviceInfo.platform,
          hash: sdk.user.hash,
          package_name: sdk.config.elite.deviceInfo.package_name,
          app_version: sdk.config.application.decimalVersion,
          model: sdk.config.elite.deviceInfo.model,
          make: sdk.config.elite.deviceInfo.make,
          os_name: navigator.userAgent.match(/\(([^);]+)/i) ? navigator.userAgent.match(/\(([^);]+)/i)[1] : "undefined",
          language: sdk.user.language
        };
        return sdk.user.status.token && (e.token = sdk.user.status.token), e;
      }
      connectionString({ serverDomain: e, requestedCountry: t, serverPort: n }) {
        return {
          deviceHash: sdk.user.hash,
          serverIP: 0,
          serverPort: n,
          platform: sdk.config.application.connectStringPlatform,
          protocol: 6,
          clientVersion: sdk.config.application.decimalVersion,
          requestedCountry: t,
          serverDomain: e,
          platformInfo: sdk.config.elite.deviceInfo.platform,
          appName: sdk.config.application.appName,
          userLang: sdk.user.language
        };
      }
      eliteEvent(e) {
        return new Promise((t) => {
          try {
            const n = sdk.proxy.status,
              r = {
                event: "elite",
                category: e.category,
                touchpoint: e.touchpoint,
                "connection-country": n && "connected" === n.status ? n.country : null
              };
            sdk.reporting.analytics("elite", e.category, e.touchpoint), sdk.reporting.internal(r).then(() => t());
          } catch (e) {
            return t();
          }
        });
      }
    };
    const g = { prod: ["api-prod-partner-us-west-2.northghost.com"], debug: ["api-stage-partner-us-west-2.northghost.com"] };
    var y = class {
      init() {
        return (
          this.onBeforeSendHeaders(),
          (sdk.authorization = { getToken: this.getToken.bind(this) }),
          new Promise((e) => {
            this.getToken().then(() => {
              if (!sdk.config.debug) return e();
              this.getToken("debug").then(() => e());
            });
          })
        );
      }
      getToken(e, t) {
        return (
          (t = void 0 === t ? 0 : ++t),
          (e = e || "prod"),
          new Promise((n) => {
            if (g[e].length <= t || sdk.user.credentials[e].username) return n();
            const r = sdk.storage.get("User.Authorization.firebaseData");
            let o = `https://${g[e][t]}/user/login?device_id=${sdk.user.hash}&device_name=Chrome%20Extension&device_type=${
              sdk.config.authorization.platform
            }_extension&carrier_id=${sdk.config.authorization.carrier}&tz=${new Date().getTimezoneOffset()}&auth_method=${
              r ? "firebase" : "anonymous"
            }`;
            r && (o += "&access_token=" + r.token),
              (this.url = g[e][t]),
              a
                .post(o)
                .then((r) => {
                  var o;
                  this.url = void 0;
                  try {
                    r = JSON.parse(r);
                  } catch (e) {
                    r = void 0;
                  }
                  if ("OK" !== (null === (o = r) || void 0 === o ? void 0 : o.result)) return n(this.getToken(e, t));
                  try {
                    sdk.user.credentials[e] = {
                      id: r.subscriber.id,
                      name: r.subscriber.name,
                      carrier_id: r.subscriber.carrier_id,
                      username: "access_token",
                      password: r.access_token
                    };
                  } catch (t) {
                    sdk.user.credentials[e] = {};
                  }
                  sdk.storage.set("User.data", sdk.user).then(() => n());
                })
                .catch((r) => {
                  (this.url = void 0), n(this.getToken(e, t));
                });
          })
        );
      }
      onBeforeSendHeaders() {
        const e = ["blocking", "requestHeaders"];
        (r.b || r.c) && r.a >= "72" && e.push("extraHeaders"),
          browser.webRequest.onBeforeSendHeaders.addListener(
            (e) => {
              if (this.url && -1 !== e.url.indexOf(this.url)) {
                for (const t in e.requestHeaders)
                  if ("origin" === e.requestHeaders[t].name.toLowerCase()) {
                    e.requestHeaders[t].value = "https://" + this.url;
                    break;
                  }
                return { requestHeaders: e.requestHeaders };
              }
            },
            { urls: ["https://*/*"] },
            e
          );
      }
    };
    var _ = class {
      constructor() {
        this.data = sdk.storage.get("User.data");
        const e = sdk.storage.get("User.hash") || (this.data && this.data.hash) || "";
        (this.data && this.data.credentials && this.data.credentials.prod && this.data.credentials.old) ||
          (this.data = { status: {}, credentials: { prod: {}, debug: {}, old: {} } }),
          (this.data.hash = e),
          this.hash(),
          e !== this.data.hash && sdk.storage.set("User.hash", this.data.hash),
          this.percent(),
          this.language(),
          this.country(),
          (sdk.user = this.data),
          sdk.user.credentials.old.username ||
            ((sdk.user.credentials.old.username = sdk.user.hash + ".h783ohaw09jdf0"),
            (sdk.user.credentials.old.password = sdk.user.hash + ".h78239hd"));
      }
      init() {
        return new Promise((e) => {
          new h().init().then(() => {
            new y().init().then(() => e());
          });
        });
      }
      hash() {
        if (
          !this.data.hash ||
          [
            "HCd12b98511010b60631a7ef41e6e674f0",
            "HCd12b98511010b60631a7ef41e6e674f1",
            "HCd12b98511010b60631a7ef41e6e674f2",
            "HCd12b98511010b60631a7ef41e6e674f3"
          ].includes(this.data.hash)
        ) {
          this.data.hash = "";
          for (let e = 0; e < 8; e++) this.data.hash += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
          this.data.hash = sdk.config.elite.prefix + this.data.hash;
        }
      }
      percent() {
        this.data.percent || (this.data.percent = Number(Date.now().toString().substr(-2, 2)));
      }
      language() {
        this.data.language = navigator && navigator.language ? navigator.language.replace(/-.*/, "").toLowerCase() : "";
      }
      country() {
        return new Promise((e) => {
          if (this.data.country) return e(!0);
          a.get(sdk.config.countryCheckUrl)
            .then((t) => {
              try {
                const n = JSON.parse(t);
                n && n.country_code && ((this.data.country = n.country_code.toLowerCase()), e(!0));
              } catch (t) {
                e(!0);
              }
            })
            .catch(() => {
              e(!0);
            });
        });
      }
    };
    class v {
      constructor() {
        (this.data = null),
          (this.updateDelay = 144e5),
          (this.updateInterval = null),
          (this.url = "https://api.lokalise.com/api2/projects/%PROJECT%/keys/?limit=1000&include_translations=1"),
          this.prepareSDK();
      }
      async init() {
        this.updateInterval && (clearTimeout(this.updateInterval), (this.updateInterval = null));
        const e = sdk.storage.get("i18n.timestamp");
        !e || e < Date.now() ? await this.getTranslations() : (this.data = sdk.storage.get("i18n.data")),
          this.getAllLanguages().length &&
            (this.updateInterval = setTimeout(() => {
              this.init();
            }, this.updateDelay));
      }
      getAllLanguages() {
        return this.data ? Object.keys(this.data) : [];
      }
      prepareSDK() {
        sdk.lokalise = {
          get: this.get.bind(this),
          getAllLanguages: this.getAllLanguages.bind(this),
          fetch: this.getTranslations.bind(this)
        };
      }
      getTranslations() {
        const { lokalise: e } = sdk.config;
        if (!e) return !1;
        const t = e.id,
          n = e.token;
        return (
          !(!t || !n) &&
          fetch(this.url.replace("%PROJECT%", t), { headers: { "x-api-token": n } })
            .then((e) => e.json())
            .then((e) => this.parse(e))
            .then(() => {
              this.save();
            })
            .catch((e) => console.log(e))
        );
      }
      save() {
        sdk.storage.set("i18n.data", this.data), sdk.storage.set("i18n.timestamp", Date.now() + this.updateDelay);
      }
      parse(e) {
        if (!e.keys) return !1;
        const { keys: t } = e,
          n = {};
        return (
          t.forEach((e) => {
            const { translations: t } = e;
            t.forEach((t) => {
              n[t.language_iso] || (n[t.language_iso] = {}), (n[t.language_iso][e.key_name.web] = t.translation);
            });
          }),
          (this.data = n),
          !0
        );
      }
      get(e) {
        try {
          const t = sdk.storage.get("Locales.language") || "en";
          let n = this.data[t][e];
          return n || (n = this.data.en[e]), n.replace(/%BROWSER%/, sdk.config.browser);
        } catch (e) {
          console.log(e);
        }
      }
    }
    const b = (e) => !!/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e),
      w = (e) => {
        if (!e) return;
        const t = e.toLowerCase().match(/^[^:]+:\/\/(www\.)?([^?/\\]+)/);
        return t && t[2] ? t[2] : void 0;
      };
    var m = n(13);
    var O = class {
        constructor() {
          (this.data = { tabs: [], active: { id: void 0, domain: void 0, title: void 0 } }),
            (this.favicons = sdk.storage.get("Tabs.favicons") ? sdk.storage.get("Tabs.favicons") : {}),
            this.createSignals();
        }
        init() {
          return this.updateList().then(() => {
            this.pageView(),
              this.listeners(),
              (sdk.tabs = {
                active: this.data.active,
                openPage: this.openPage.bind(this),
                addFavicon: this.addFavicon.bind(this),
                getFavicon: this.getFavicon.bind(this),
                getByTabId: this.getByTabId.bind(this),
                getActiveTab: this.getActiveTab.bind(this),
                getActiveWebsiteTab: this.getActiveWebsiteTab.bind(this),
                getByWindowId: this.getByWindowId.bind(this),
                onPageView: this.onPageView,
                onTabChanged: this.onTabChanged,
                onDomainChanged: this.onDomainChanged
              });
          });
        }
        listeners() {
          browser.tabs.onRemoved.addListener(this.updateList.bind(this)),
            browser.tabs.onDetached.addListener(this.updateList.bind(this)),
            browser.tabs.onReplaced.addListener(this.updateList.bind(this)),
            browser.tabs.onActivated.addListener(this.updateList.bind(this));
        }
        updateList() {
          return new Promise((e) => {
            browser.tabs.query({}, (t) => {
              this.data.tabs = [];
              for (const e in t) {
                if (!t[e] || !t[e].url || !t[e].url.match(/^https?/)) continue;
                const n = this.createRecord(t[e]);
                n && this.data.tabs.push(n);
              }
              this.getActiveTab().then((t) => {
                const n = this.data.active.id,
                  r = this.data.active.domain;
                this.data.active.title;
                return (
                  (this.data.active.id = t.id),
                  (this.data.active.domain = t.domain),
                  (this.data.active.title = t.title),
                  n && n !== t.id ? this.onTabChanged.dispatch(t) : n && r !== t.domain && this.onDomainChanged.dispatch(t),
                  e()
                );
              });
            });
          });
        }
        addFavicon(e, t) {
          this.favicons[e] || (this.favicons[e] = t), sdk.storage.set("Tabs.favicons", this.favicons);
        }
        getFavicon(e) {
          return this.favicons[e] ? this.favicons[e] : void 0;
        }
        getActiveTab() {
          return new Promise((e) => {
            browser.tabs.query({ active: !0, currentWindow: !0 }, (t) => {
              if (t && t[0]) return e(this.createRecord(t[0]));
              browser.tabs.query({ active: !0 }, (t) =>
                t && t[0] ? e(this.createRecord(t[0])) : e({ id: void 0, domain: void 0, title: void 0 })
              );
            });
          });
        }
        async getActiveWebsiteTab() {
          const e = await this.getActiveTab();
          if (/^https?:\/\/.*?/.test(e.url)) return e;
        }
        getByTabId(e) {
          if (!e || "number" != typeof e) return !1;
          for (const t in this.data.tabs) {
            const n = this.data.tabs[t];
            if (n.id === e) return n;
          }
          return !1;
        }
        getByWindowId(e) {
          if (!e || "number" != typeof e) return !1;
          for (const t in this.data.tabs) {
            const n = this.data.tabs[t];
            if (n.windowId === e) return n;
          }
          return !1;
        }
        createRecord(e) {
          if (!e) return;
          const t = { id: e.id, url: e.url, title: e.title, domain: w(e.url), windowId: e.windowId };
          return e.favIconUrl && this.addFavicon(t.domain, e.favIconUrl), t;
        }
        createSignals() {
          (this.onPageView = new m.a()), (this.onTabChanged = new m.a()), (this.onDomainChanged = new m.a());
        }
        getDomain(e) {
          if (!e) return;
          const t = e.toLowerCase().match(/^[^:]+:\/\/(www\.)?([^?/\\]+)/);
          return t && t[2] ? t[2] : void 0;
        }
        pageView() {
          browser.webRequest.onResponseStarted.addListener(
            (e) => {
              if (!e || -1 === e.tabId || "main_frame" !== e.type) return;
              const t = w(e.url);
              t &&
                this.updateList().then(() => {
                  this.onPageView.dispatch({ domain: t });
                });
            },
            { urls: ["http://*/*", "https://*/*"] },
            ["responseHeaders"]
          );
        }
        openPage(e, t) {
          return new Promise((n) => {
            if ("popup" !== (t = t || {}).mode)
              browser.tabs.create({ url: e }, (e) => {
                n(e);
              });
            else {
              const r = t.width || 580,
                o = t.height || 600,
                i = screen.width / 2 - r / 2,
                s = screen.height / 2 - o / 2;
              browser.windows.create(
                {
                  url: e,
                  width: Math.round(r),
                  height: Math.round(o),
                  left: Math.round(i),
                  top: Math.round(s),
                  focused: !0,
                  type: "popup"
                },
                (e) => {
                  n(e.tabs[0]);
                }
              );
            }
          });
        }
      },
      k = n(33);
    const S = async (e) => new Promise((t) => setTimeout(() => t(!0), e));
    var P = class {
        constructor(e) {
          (this.startTime = 0),
            (this.status = sdk.proxy.status.status),
            "connected" === this.status && (this.startTime = Date.now()),
            sdk.proxy.onStatusChanged.add((e) => {
              -1 !== ["connected", "disconnected"].indexOf(e.status) &&
                ("connected" === this.status && "connected" !== e.status && (this.startTime = 0),
                "connected" === e.status && "connected" !== this.status && (this.startTime = Date.now()),
                (this.status = e.status));
            });
        }
        get() {
          return this.startTime;
        }
      },
      j = ["pixel.quantserve.com", "event.shelljacket.us", "api.hsselite.com", "order.hotspotshield.com"],
      x = { free: [] },
      I = n(42),
      D = n.n(I);
    function R({ host: e, port: t }) {
      return !!b(e) && !!D()(t) && !(t < 0 || t > 65353);
    }
    class C {
      static async loadConfig() {
        const [e, t] = await Promise.all([sdk.getEliteSD(), sdk.getFreeSD()]);
        return C.parseConfig(e, t);
      }
      static parseConfig(e, t) {
        const n = { servers: { elite: {}, regular: {} }, locations: { elite: [], regular: [] } };
        try {
          Object.entries(e).forEach(([e, t]) => {
            (e = e.toLowerCase()),
              (n.servers.elite[e] = t
                .filter(R)
                .map(({ host: t, priority: n, port: r }) => ({ host: t, address: t, scheme: "https", country: e, priority: n, port: r }))),
              n.locations.elite.push(e);
          });
        } catch (e) {
          console.error("HssConfig.parseConfig: unable to parse elite servers", e);
        }
        try {
          Object.entries(t).forEach(([e, t]) => {
            (e = e.toLowerCase()),
              (n.servers.regular[e] = t
                .filter(R)
                .map(({ host: t, priority: n, port: r }) => ({ host: t, address: t, scheme: "https", country: e, priority: n, port: r }))),
              n.locations.regular.push(e);
          });
        } catch (e) {
          console.error("HssConfig.parseConfig: unable to parse free servers", e);
        }
        return n;
      }
    }
    var T = C;
    function A(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    const E = "Proxy.Config.config";
    var B = class {
      constructor() {
        A(this, "loadConfig", () => {
          if (sdk.storage.get("Proxy.Config.stopUpdate")) return;
          const e = sdk.storage.get("manual-configs");
          if (e) return console.log("use manual configs", e), void (this.config = e);
          if (sdk.config.infra && "hss" === sdk.config.infra)
            return T.loadConfig().then((e) => {
              this.config = e;
            });
          const t = (e, n, r) => (
            (n = void 0 === n ? 0 : ++n),
            (r = void 0 === r ? [] : r),
            new Promise((o) => {
              if (n === e.length || !e[n]) return o(r);
              a.get(e[n])
                .then((i) => {
                  try {
                    (i = JSON.parse(i)).servers ? r.push(i.servers) : i.push([]);
                  } catch (e) {
                    i.push([]);
                  }
                  return o(t(e, n, r));
                })
                .catch((i) => (r.push([]), o(t(e, n, r))));
            })
          );
          t([sdk.config.configs.free, sdk.config.configs.elite]).then((e) => {
            const t = { free: void 0, elite: void 0 };
            e && e[0] && e[0].length > 0 ? (t.free = e[0]) : x.free && (t.free = x.free),
              e && e[1] && e[1].length > 0 ? (t.elite = e[1]) : x.elite && (t.elite = x.elite),
              this.parseConfig(t);
          });
        }),
          A(this, "restoreConfig", async () => {
            let e = sdk.storage.get(E) ? sdk.storage.get(E) : x;
            "string" == typeof e && (e = x), this.parseConfig(e);
          }),
          A(this, "parseConfig", (e) => {
            const t = { servers: { elite: {}, regular: {} }, locations: { elite: [], regular: [] } };
            for (const n in e.free) {
              const r = e.free[n];
              this.isValidServerConfig(r) &&
                ((e.elite && -1 !== ["us", "gb", "fr", "in", "sg"].indexOf(r.country)) ||
                  (-1 === t.locations.regular.indexOf(r.country) &&
                    (t.locations.regular.push(r.country), (t.servers.regular[r.country] = [])),
                  t.servers.regular[r.country].push(r)));
            }
            for (const n in e.elite) {
              const r = e.elite[n];
              this.isValidServerConfig(r) &&
                (-1 === t.locations.elite.indexOf(r.country) && (t.locations.elite.push(r.country), (t.servers.elite[r.country] = [])),
                t.servers.elite[r.country].push(r));
            }
            sdk.storage.set(E, e), (this.config = t);
          }),
          A(
            this,
            "isValidServerConfig",
            ({ address: e, scheme: t, port: n }) => !!b(e) && !!/^https?$/.test(t) && !!D()(n) && !(n < 0 || n > 65353)
          ),
          A(this, "getLocations", (e) =>
            "all" === (e = e || "regular") ? this.config.locations : this.config.locations[e] ? this.config.locations[e] : {}
          ),
          A(this, "getServerByAddress", (e) => {
            for (const t of Object.values(this.config.servers))
              if (t)
                for (const n of Object.values(t)) {
                  if (!n) continue;
                  const t = n.find((t) => t.address === e);
                  if (t) return t;
                }
            return null;
          }),
          A(this, "disableServer", (e) => {
            const t = this.getServerByAddress(e);
            return !!t && !t.disable && ((t.disable = new Date()), !0);
          }),
          A(this, "getServers", (e, t) => {
            if ("all" === (e = e || "regular")) return JSON.parse(JSON.stringify(this.config.servers));
            const n = JSON.parse(JSON.stringify(this.config.servers));
            return n[e] ? (t && !n[e][t] ? null : t && n[e][t] ? n[e][t].filter((e) => !e.disable) : !t && n[e] ? n[e] : null) : null;
          }),
          (this.config = { servers: { elite: {}, regular: {} }, locations: { elite: [], regular: [] } }),
          "hss" !== sdk.config.infra && this.restoreConfig(),
          this.runPolling(),
          (sdk.forceLoadSD = this.loadConfig),
          sdk.config.debug && (sdk.restoreConfig = this.restoreConfig);
      }
      runPolling() {
        this.loadConfig(),
          setInterval(() => {
            this.loadConfig();
          }, 864e5);
      }
    };
    const U = "Proxy.Servers.active";
    var N = class {
      constructor() {
        var e, t, n;
        (n = () => this.active),
          (t = "getActive") in (e = this)
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          (this.config = new B()),
          (sdk.servers = this),
          (this.active = sdk.storage.get(U) ? sdk.storage.get(U) : []);
      }
      setActive(e) {
        return (
          (this.active = e),
          r.d &&
            ((this.proxyConfigPool = this.active.map(({ address: e, port: t, scheme: n }) => ({
              port: t,
              type: n,
              host: e,
              failoverTimeout: 3
            }))),
            (this.proxyOptimalPool = this.getServers().map(({ address: e, port: t, scheme: n }) => ({
              port: t,
              type: n,
              host: e,
              failoverTimeout: 3
            })))),
          sdk.storage.set(U, e)
        );
      }
      getServers(
        e = "us",
        t = (() => {
          var e, t;
          return null === (e = sdk.user) || void 0 === e || null === (t = e.status) || void 0 === t ? void 0 : t.elite;
        })()
          ? "elite"
          : "regular"
      ) {
        const n = this.getServersByPriority(this.config.getServers(t)[e]).splice(0, 5);
        if (n.length < 5) {
          const r = this.getBackupServers(e, t);
          let o = n.length;
          for (; o < 5; ) r[o] && n.push(r[o]), o++;
        }
        return n;
      }
      getBackupServers(e, t) {
        const n = this.config.getServers(t),
          r = [];
        for (const t in n) if (t !== e) for (const e in n[t]) n[t][e].disable || r.push(n[t][e]);
        return this.getServersByPriority(r);
      }
      getServersByPriority(e, t) {
        const n = [];
        let r = 0;
        t = t || [];
        for (const t in e) (r += e[t].priority), n.push(r);
        const o = Math.floor(Math.random() * r);
        for (let r = 0; r < n.length; r++) if (o <= n[r]) return t.push(e[r]), e.splice(r, 1), this.getServersByPriority(e, t);
        return t;
      }
      getOptimalLocation(e) {
        const t = this.config.getLocations(e);
        return t[[Math.floor(Math.random() * t.length)]];
      }
      disableServer(e) {
        this.config.disableServer(e) && sdk.proxy.updateProxy();
      }
      concat(e) {
        let t = "";
        for (const n in e) {
          if (!e[n]) continue;
          t += `${"http" === e[n].scheme ? "proxy" : e[n].scheme} ${e[n].address}:${e[n].port};`;
        }
        return t;
      }
    };
    function q(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var L = class {
      constructor() {
        q(this, "updateProxy", async () => {
          const e = this.servers.getServers(this.status.location);
          return await this.servers.setActive(e), this.render();
        }),
          q(this, "firefoxProxy", (e) => {
            browser.proxy.onRequest.hasListener(this.firefoxProxyRequestHandler) &&
              browser.proxy.onRequest.removeListener(this.firefoxProxyRequestHandler),
              browser.proxy.onRequest.addListener(this.firefoxProxyRequestHandler, { urls: ["<all_urls>"] });
          }),
          q(this, "firefoxProxyRequestHandler", (e) => {
            const t = "connected" === sdk.proxy.status.status,
              { host: n } = new URL(e.url);
            if (!t) {
              var r, o;
              return Object.keys(
                (null === (r = sdk.proxy) || void 0 === r || null === (o = r.secured) || void 0 === o ? void 0 : o.get()) || {}
              ).find((e) => n.indexOf(e) >= 0)
                ? this.servers.proxyOptimalPool
                : { type: "direct" };
            }
            return j.includes(n) || sdk.proxy.bypass.isInList(n) ? { type: "direct" } : this.servers.proxyConfigPool;
          }),
          q(this, "renderClearProxy", () => this.setPacScript("function FindProxyForURL(url, host) { return 'DIRECT'; }")),
          q(this, "render", (e) => (r.d ? this.firefoxProxy(e) : this.pacScriptProxy(e))),
          q(this, "pacScriptProxy", (e) => {
            const t = sdk.storage.get("Proxy.proxyLocal"),
              n = "connected" === sdk.proxy.status.status;
            let r = "";
            t &&
              n &&
              (r =
                "\n      var ip = dnsResolve(host);\n      if(\n        isPlainHostName(host) \n        || shExpMatch(host, '*.local') \n        || isInNet(ip, '10.0.0.0', '255.0.0.0') \n        || isInNet(ip, '172.16.0.0',  '255.240.0.0') \n        || isInNet(ip, '192.168.0.0',  '255.255.0.0') \n        || isInNet(ip, '173.37.0.0',  '255.255.0.0') \n        || isInNet(ip, '127.0.0.0', '255.255.255.0')\n       ) return 'DIRECT';\n      ");
            const o = `\n      let active  = false,\n       created = ${Date.now()},\n       started = Date.now();\n       if((started-100) < created) { active = true; }\n\n      function FindProxyForURL(url, host) {\n        if(!url.match(/^(https?)|(ftp):\\/\\//)) return 'DIRECT';\n        if(!active && (Date.now() > (started + 2000))) active = true;\n        if(!active) return 'DIRECT';\n        \n        url = url.toLowerCase();\n        host = host.toLowerCase();\n        \n        ${r}\n        \n        ${this.whiteList()}\n        \n        ${this.bypassWebsitesRow()}\n        \n        ${this.globalRow(
              e,
              n
            )}\n        \n        ${this.securedWebsitesRow(e)}  \n        \n        return 'DIRECT';\n      }\n      `;
            return this.setPacScript(o);
          }),
          q(this, "globalRow", (e, t) => (t ? `return '${this.servers.concat(this.servers.getActive()) + (e ? "DIRECT;" : "")}';\n` : "")),
          q(this, "bypassWebsitesRow", () => {
            var e, t;
            const n = null === (e = sdk.proxy) || void 0 === e || null === (t = e.bypass) || void 0 === t ? void 0 : t.get();
            if (null == n || !n.length) return "";
            return `if(${n.flatMap((e) => [`host == '${e}'`, `dnsDomainIs(host, '.${e}')`]).join(" || ")}) return 'DIRECT';`;
          }),
          q(
            this,
            "whiteList",
            () =>
              `if (host == '127.0.0.1' || ${["www.google-analytics.com", "localhost", ...j]
                .flatMap((e) => [`host == '${e}'`, `dnsDomainIs(host, '.${e}')`])
                .join(" || ")}) return 'DIRECT';`
          ),
          q(this, "securedWebsitesRow", (e) => {
            var t, n, r;
            const o = (null === (t = sdk.proxy) || void 0 === t || null === (n = t.secured) || void 0 === n ? void 0 : n.get()) || {};
            if (0 === Object.keys(o).length) return "";
            const i = Object.keys(o);
            let s = this.servers.getActive();
            (null !== (r = s) && void 0 !== r && r.length) || (s = this.servers.getServers());
            const a = this.servers.concat(s);
            return `if(${i.flatMap((e) => [`host == '${e}'`, `dnsDomainIs(host, '.${e}')`]).join(" || ")}) return '${a}${
              e ? "DIRECT;" : ""
            }';`;
          }),
          q(
            this,
            "setPacScript",
            (e) =>
              new Promise((t) => {
                debug(e), debug("-----------------------------");
                const n = { mode: "pac_script", pacScript: { data: e } };
                browser.proxy.settings.set({ value: n, scope: "regular" }, () => {
                  t();
                }),
                  browser.extension.isAllowedIncognitoAccess((e) => {
                    if (e)
                      try {
                        browser.proxy.settings.set({ value: n, scope: "incognito_persistent" }, () => {});
                      } catch (e) {
                        error(e);
                      }
                  });
              })
          ),
          (this.servers = new N());
      }
    };
    const M = "Proxy.Status.status";
    var J = class extends L {
        constructor() {
          var e, t, n;
          super(),
            (n = () => "avaliable"),
            (t = "getGlobalStatus") in (e = this)
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            (this.status = sdk.storage.get(M) ? sdk.storage.get(M) : { status: "disconnected", location: "optimal" }),
            this.createSignals(),
            this.watchForProxyError();
        }
        createSignals() {
          (this.onProxyError = new m.a()), (this.onStatusChanged = new m.a());
        }
        updateStatus(e, t) {
          return (this.status.status = e), (this.status.location = t || this.status.location), sdk.storage.set(M, this.status);
        }
        watchForProxyError() {
          let e,
            t = 0,
            n = !1;
          const o = (r) => {
            if (!sdk.proxy.disableErrors && !n) {
              if (((n = !0), (t = e && e < Date.now() - 3e4 ? 0 : ++t), (e = Date.now()), 50 === t))
                return sdk.proxy.disconnect({ error: r }).then(() => {
                  this.onProxyError.dispatch("disconnect"), (t = 0), (n = !1);
                });
              this.onProxyError.dispatch("update"),
                this.render(!0),
                setTimeout(() => {
                  (n = !1), this.render();
                }, 5e3);
            }
          };
          r.d ? browser.proxy.onError.addListener(o) : browser.proxy.onProxyError.addListener(o);
        }
      },
      W = n(67),
      F = n.n(W);
    var V = class {
      constructor() {
        (this.lastProxyHost = ""), (this.tryCounter = { new: 0, default: 0, hss: 0 });
        const e = F()(sdk.proxy.getServerByAddress);
        browser.webRequest.onAuthRequired.addListener(
          (t) => {
            if (!t.isProxy) return;
            if (!e(t.challenger.host)) return;
            if (this.tryCounter.new >= 1 && this.tryCounter.old >= 1) return sdk.servers.disableServer(t.challenger.host), { cancel: !0 };
            return { authCredentials: this.getAuthCredentials(t.challenger.host) };
          },
          { urls: ["http://*/*", "https://*/*"] },
          ["blocking"]
        );
      }
      getAuthCredentials(e) {
        if (
          (this.lastProxyHost !== e && ((this.lastProxyHost = e), (this.tryCounter = { new: 0, default: 0, hss: 0 })),
          "hss" === sdk.config.infra)
        ) {
          debug("try hss auth"), (this.tryCounter.hss += 1);
          const t = sdk.connectionString({ serverDomain: e, requestedCountry: "US", serverPort: 433 }),
            n = sdk.getBase64ConnectionString(t);
          debug("connectingString", JSON.stringify(t)), debug("base64ConnectionString", n), debug("base64ConnectionString", n);
          const r = { username: sdk.user.status.hss.username, password: `${n}$${sdk.user.status.hss.password}` };
          return debug("payload", JSON.stringify(r)), r;
        }
        return this.tryCounter.new <= this.tryCounter.default
          ? ((this.tryCounter.new += 1), { username: sdk.user.credentials.prod.username, password: sdk.user.credentials.prod.password })
          : ((this.tryCounter.default += 1), { username: sdk.user.credentials.old.username, password: sdk.user.credentials.old.password });
      }
    };
    const z = "Proxy.BypassWebsites.list";
    var $ = class {
      constructor() {
        (this.list = sdk.storage.get(z) ? sdk.storage.get(z) : []), (this.onChange = new m.a());
      }
      add(e) {
        return new Promise((t, n) =>
          -1 === this.list.indexOf(e)
            ? (this.list.push(e),
              sdk.storage.set(z, this.list).then(() => (sdk.proxy.render(), this.onChange.dispatch(this.get()), t(this.list))))
            : t(this.list)
        );
      }
      get() {
        return this.list;
      }
      remove(e) {
        return new Promise((t, n) =>
          -1 !== this.list.indexOf(e)
            ? (this.list.splice(this.list.indexOf(e), 1),
              sdk.storage.set(z, this.list).then(() => (sdk.proxy.render(), this.onChange.dispatch(this.get()), t())))
            : t()
        );
      }
      isInList(e) {
        return !!e && !!this.list && !!this.list.find((t) => e.indexOf(t) >= 0);
      }
    };
    var H = class {
      constructor() {
        (this.list = sdk.storage.get("Proxy.SecuredWebsites.list") ? sdk.storage.get("Proxy.SecuredWebsites.list") : void 0),
          this.list || ((this.list = {}), sdk.storage.set("Proxy.SecuredWebsites.list", this.list)),
          (this.onChange = new m.a()),
          (this.lock = {}),
          sdk.tabs.onPageView.add((e) => {
            e &&
              e.domain &&
              this.isInList(e.domain) &&
              (this.list[e.domain].visited++, sdk.storage.set("Proxy.SecuredWebsites.list", this.list));
          });
      }
      add(e, t) {
        return new Promise(
          (t, n) => (
            this.list[e] ||
              ((this.lock[e] = !0),
              (this.list[e] = { location: "optimal", type: "custom", visited: 0 }),
              sdk.storage.set("Proxy.SecuredWebsites.list", this.list),
              sdk.proxy.render(),
              this.onChange.dispatch(this.get())),
            t(this.list)
          )
        );
      }
      get() {
        return this.list;
      }
      remove(e) {
        return new Promise((t, n) =>
          this.list[e]
            ? (delete this.list[e],
              sdk.storage
                .set("Proxy.SecuredWebsites.list", this.list)
                .then(() => (sdk.proxy.render(), this.onChange.dispatch(this.get()), t())))
            : t()
        );
      }
      isInList(e) {
        return !!this.list[e];
      }
      isLocked(e) {
        return !!this.lock[e];
      }
      unlock(e) {
        delete this.lock[e];
      }
    };
    function G(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var K = class extends J {
        constructor() {
          super(),
            G(this, "connect", async (e, t) => {
              var n;
              (e = e || "us"),
                debug("Connect: " + e),
                this.onStatusChanged.dispatch({ status: "connecting", location: this.status.location }),
                await sdk.storage.set("GDPR.Connected", !0),
                await this.updateStatus("connected", e),
                null !== (n = sdk.config.webRTC) && void 0 !== n && n.auto && (await sdk.webRTC.setStatus("on")),
                await sdk.reporting.onBeforeConnectionStartPreparation(),
                await this.updateProxy(),
                sdk.reporting.onAfterConnectionStartReport({ location: e }),
                await S(t || 1e3 * sdk.config.proxy.connecting.delay),
                this.onStatusChanged.dispatch(this.status);
            }),
            G(this, "reconnect", async (e) => {
              var t;
              (e = e || "us"),
                debug("Reconnect: " + e),
                await sdk.reporting.onAfterConnectionEndReport(),
                await this.updateStatus("connected", e),
                null !== (t = sdk.config.webRTC) && void 0 !== t && t.auto && (await sdk.webRTC.setStatus("on")),
                await sdk.reporting.onBeforeConnectionStartPreparation(),
                await this.updateProxy(),
                sdk.reporting.onAfterConnectionStartReport({ location: e, reconnect: !0 }),
                this.onStatusChanged.dispatch({ status: "connected", location: this.status.location });
            }),
            G(this, "disconnect", async ({ delay: e, cancel: t = !1, error: n } = {}) => {
              var r;
              debug("Disconnect"),
                this.onStatusChanged.dispatch({ status: "disconnecting", location: this.status.location }),
                await this.updateStatus("disconnected"),
                null !== (r = sdk.config.webRTC) && void 0 !== r && r.auto && (await sdk.webRTC.setStatus("off")),
                await this.updateProxy(),
                sdk.reporting.onAfterConnectionEndReport({ error: n, cancel: t }),
                await S(e || 1e3 * sdk.config.proxy.disconnecting.delay),
                this.onStatusChanged.dispatch(this.status);
            }),
            (sdk.proxy = {
              status: this.status,
              render: this.render,
              connect: this.connect,
              reconnect: this.reconnect,
              disconnect: this.disconnect,
              updateProxy: this.updateProxy,
              getServers: this.servers.config.getServers,
              getLocations: this.servers.config.getLocations,
              getGlobalStatus: this.getGlobalStatus,
              getActiveServers: this.servers.getActive,
              getServerByAddress: this.servers.config.getServerByAddress,
              disableOtherProxy: k.a,
              onProxyError: this.onProxyError,
              onStatusChanged: this.onStatusChanged,
              disableErrors: !1
            });
          const e = new P();
          sdk.proxy.timer = e.get.bind(e);
          const t = new $();
          (sdk.proxy.bypass = {
            add: t.add.bind(t),
            get: t.get.bind(t),
            remove: t.remove.bind(t),
            isInList: t.isInList.bind(t),
            onChange: t.onChange
          }),
            this.SecuredWebsites(),
            this.initDone();
        }
        SecuredWebsites(e) {
          const t = new H(e);
          sdk.proxy.secured = {
            add: t.add.bind(t),
            get: t.get.bind(t),
            remove: t.remove.bind(t),
            isInList: t.isInList.bind(t),
            isLocked: t.isLocked.bind(t),
            unlock: t.unlock.bind(t),
            onChange: t.onChange
          };
        }
        async initDone() {
          var e;
          (new V(), sdk.storage.get("Storage.error"))
            ? await this.renderClearProxy()
            : (await this.updateStatus("disconnected"),
              null !== (e = sdk.config.webRTC) && void 0 !== e && e.auto && (await sdk.webRTC.setStatus("off")),
              await this.updateProxy(),
              this.onStatusChanged.dispatch(this.status));
        }
      },
      X = n(7);
    var Y = class {
      constructor() {
        this.data = {};
      }
      init() {
        return new Promise((e) => {
          (sdk.storage = {}),
            (sdk.storage.get = this.get.bind(this)),
            (sdk.storage.set = this.set.bind(this)),
            (sdk.storage.print = () => {
              log(this.data);
            }),
            (sdk.storage.clean = () => {
              browser.storage.local.clear(), location.reload();
            });
          try {
            browser.storage.local.get(null, (t) => {
              debug(t), (this.data = t), (this.data[X.c] = !1), (this.data[X.b] = !1), e();
            });
          } catch (t) {
            (this.data = {}), (this.data[X.c] = !1), (this.data[X.b] = !1), (this.data[X.d] = !0), (this.data[X.e] = !0), e();
          }
        });
      }
      get(e) {
        if ("object" == typeof e) {
          const t = [];
          for (const n in e) t.push(this.data[e[n]]);
          return t;
        }
        return this.data[e];
      }
      set(e, t) {
        return (
          (this.data[e] = this.clone(t)),
          new Promise(
            t
              ? (t) => {
                  try {
                    browser.storage.local.set({ [e]: this.data[e] }, () => {
                      t();
                    });
                  } catch (e) {
                    t();
                  }
                }
              : (t) => {
                  try {
                    browser.storage.local.remove(e, () => {
                      t();
                    });
                  } catch (e) {
                    t();
                  }
                }
          )
        );
      }
      clone(e) {
        return "object" != typeof e ? e : JSON.parse(JSON.stringify(e));
      }
    };
    const Z = "Reporting.Internal.queue";
    var Q = class {
        constructor() {
          (this.queue = sdk.storage.get(Z) ? sdk.storage.get(Z) : []),
            (r.d && !sdk.storage.get(X.a)) || (this.send(), setInterval(this.send.bind(this), 15e4));
        }
        event(e) {
          return (
            (e.payload.version = sdk.config.application.version),
            (e.payload.country = sdk.user.country),
            (e.payload.hash = sdk.user.hash),
            (e.payload.id = sdk.config.application.id),
            (e.payload.ts = Date.now()),
            this.queue.push(e),
            sdk.storage.set(Z, this.queue).then(() => e)
          );
        }
        send() {
          if (0 === this.queue.length || !sdk.storage.get("GDPR.Connected")) return;
          const e = this.queue;
          this.queue = [];
          const t = this.queue.length - 1;
          let n = "";
          for (const r in e) (n += JSON.stringify(e[r]).toLowerCase()), r !== t && (n += "\n");
          a.post("https://event.shelljacket.us/api/report/chrome_ext", n)
            .then(() => {
              sdk.storage.set(Z, this.queue);
            })
            .catch((t) => {
              (this.queue = this.queue.concat(e.slice(-100))), sdk.storage.set(Z, this.queue);
            });
        }
      },
      ee = n(51),
      te = n.n(ee);
    const ne = {
        version: "v",
        clientId: "cid",
        userId: "uid",
        trackingId: "tid",
        hitType: "t",
        applicationName: "an",
        applicationId: "aid",
        applicationVersion: "av",
        contentDescription: "cd",
        category: "ec",
        action: "ea",
        label: "el",
        value: "ev",
        screenName: "cd",
        campaignName: "cn",
        campaignSource: "cs",
        campaignMedium: "cm",
        clientIpAddress: "uip",
        userAgent: "ua"
      },
      re = "Reporting.Analytics.param";
    var oe = class {
        init() {
          var e, t, n, r;
          return null !== (e = sdk) &&
            void 0 !== e &&
            null !== (t = e.config) &&
            void 0 !== t &&
            null !== (n = t.reporting) &&
            void 0 !== n &&
            null !== (r = n.analytics) &&
            void 0 !== r &&
            r.id
            ? this.restoreParams()
            : new Promise((e) => {
                e();
              });
        }
        event(e) {
          return new Promise((t) => {
            var n, r, o, i, s;
            if (
              null === (n = e) ||
              void 0 === n ||
              !n.category ||
              null === (r = sdk) ||
              void 0 === r ||
              null === (o = r.config) ||
              void 0 === o ||
              null === (i = o.reporting) ||
              void 0 === i ||
              null === (s = i.analytics) ||
              void 0 === s ||
              !s.id
            )
              return t();
            const a = sdk.config.reporting.analytics;
            return Number(
              Date.now()
                .toString()
                .match(/[0-9]{2}$/)
            ) >
              (a.sampling[e.category] ? a.sampling[e.category] : a.sampling.default) - 1
              ? t()
              : (a.noPrefix || (e.category = "_" + e.category),
                (e.hitType = "event"),
                (e.version = "1"),
                (e.clientId = sdk.user.hash),
                (e.applicationId = sdk.config.application.id),
                (e.applicationName = sdk.config.application.name),
                (e.applicationVersion = sdk.config.application.version),
                (e = te()(e, this.params)),
                t(this.send(e)));
          });
        }
        send(e) {
          return new Promise((t, n) => {
            a.post(
              "https://www.google-analytics.com/collect",
              ((e) => {
                const t = {};
                for (const n in e) {
                  const r = e[n];
                  void 0 !== r && null != r && (t[ne[n] || n] = r);
                }
                const n = [];
                for (const e in t) n.push(`${e}=${encodeURIComponent(t[e])}`);
                return n.join("&");
              })(e)
            )
              .then(() => t())
              .catch(() => t());
          });
        }
        restoreParams() {
          return (
            (this.params = sdk.storage.get(re) ? sdk.storage.get(re) : {}),
            new Promise((e) => (this.params.trackingId ? e() : this.createParams().then(() => e())))
          );
        }
        createParams() {
          const e = { trackingId: sdk.config.reporting.analytics.id };
          return new Promise((t) => {
            this.updateParams(e).then(() => {
              browser.tabs.query({ url: `https://chrome.google.com/*${sdk.config.application.applicationId}*` }, (e) => {
                const n = e[0];
                if (!n) return t();
                const r = n.url.match(/utm_campaign=([^&]+)/),
                  o = n.url.match(/utm_source=([^&]+)/),
                  i = n.url.match(/utm_medium=([^&]+)/),
                  s = {
                    campaignName: r && r[1] ? r[1] : null,
                    campaignSource: o && o[1] ? o[1] : null,
                    campaignMedium: i && i[1] ? i[1] : null
                  };
                this.updateParams(s).then(() => t());
              });
            });
          });
        }
        updateParams(e) {
          return (this.params = te()(this.params, e)), sdk.storage.set(re, this.params);
        }
      },
      ie = n(68),
      se = n.n(ie);
    function ae(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    const ue = [
        { link: "http://google.com/generate_204", domain: "google.com" },
        { link: "http://gstatic.com/generate_204", domain: "gstatic.com" },
        { link: "http://maps.google.com/generate_204", domain: "maps.google.com" },
        { link: "http://www.google.com/generate_204", domain: "www.google.com" },
        { link: "http://clients3.google.com/generate_204", domain: "clients3.google.com" }
      ],
      ce = [
        { link: "https://google.com/", domain: "google.com" },
        { link: "https://apple.com", domain: "apple.com" },
        { link: "https://microsoft.com", domain: "microsoft.com" },
        { link: "https://yahoo.com", domain: "yahoo.com" },
        { link: "https://baidu.com", domain: "baidu.com" },
        { link: "https://amazon.com", domain: "amazon.com" },
        { link: "https://instagram.com", domain: "instagram.com" },
        { link: "https://linkedin.com", domain: "linkedin.com" },
        { link: "https://ebay.com", domain: "ebay.com" },
        { link: "https://bing.com", domain: "bing.com" },
        { link: "https://samsung.com", domain: "samsung.com" },
        { link: "https://goo.gl", domain: "goo.gl" },
        { link: "https://wikipedia.org", domain: "wikipedia.org" },
        { link: "https://live.com", domain: "live.com" },
        { link: "https://office.com", domain: "office.com" }
      ],
      pe = ["success", "internal error", "connection error", "connection stuck", "no network", "failed"];
    class le {
      constructor() {
        ae(this, "catime", null),
          ae(this, "beforeConnectionIp", null),
          ae(this, "idAddressChanged", null),
          ae(this, "seqNo", 0),
          ae(this, "getCurrentIpAddress", async () => {
            try {
              const e = await fetch("https://www.hsselite.com/ipinfo"),
                { ip: t } = await e.json();
              return t;
            } catch {
              return null;
            }
          }),
          ae(this, "onBeforeConnectionStartPreparation", async () => {
            (this.idAddressChanged = null), (this.catime = null), (this.beforeConnectionIp = await this.getCurrentIpAddress());
          }),
          ae(this, "onAfterConnectionStartReport", async ({ location: e = sdk.proxy.status.location, reconnect: t = !1 } = {}) => {
            (this.catime = Date.now()),
              await this.reportConnectionStart(),
              await this.reportConnectionStartDetails({ location: e, reconnect: t });
          }),
          ae(this, "onAfterConnectionEndReport", async ({ error: e = !1, cancel: t } = {}) => {
            await this.reportConnectionEnd(), t || (!e && !1 !== this.idAddressChanged) || (await this.reportConnectionEndDetailed());
          }),
          ae(this, "reportConnectionStart", async () => {
            sdk.reporting.internal("connection_start", { duration: Date.now() - this.catime });
          }),
          ae(this, "reportConnectionStartDetails", async ({ location: e, reconnect: t }) => {
            var n;
            let r = sdk.proxy.getActiveServers();
            (null !== (n = r) && void 0 !== n && n.length) || (r = sdk.servers.getServers());
            const o = r[0],
              i = {},
              s = await this.getCurrentIpAddress();
            let a = 0;
            if (((this.idAddressChanged = s !== this.beforeConnectionIp), !this.idAddressChanged)) {
              a = 1;
              const n = await this.getNetworkAvailabilityDetails({ location: e, reconnect: t, server: o });
              (i.network_availability = (n.filter(({ result: e }) => "ok" === e).length / n.length).toFixed(2)),
                (i.notes = { network_availability_test: n });
            }
            const u = sdk.getDeviceInfo();
            (i.details = [
              {
                server_domain: o.address,
                server_port: o.port,
                duration: Date.now() - this.catime,
                error_code: a,
                catime: this.catime,
                sd_config_source: sdk.config.hss ? "hss" : "embedded",
                protocol: "https",
                to_country: e,
                reason: t ? "a_reconnect" : "m_ui",
                device_hash: u.hash,
                caid: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                  .replace(/[xy]/g, function (e) {
                    const t = (16 * Math.random()) | 0;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                  })
                  .replaceAll("-", "")
                  .toUpperCase(),
                app_name: u.package_name,
                app_version: sdk.config.application.version,
                user_type: sdk.user.status.elite ? "premium" : "free",
                error: pe[a],
                ucr_sd_source: "",
                seq_no: this.seqNo++
              }
            ]),
              sdk.reporting.internal("connection_start_detailed", i);
          }),
          ae(this, "reportConnectionEnd", async () => {
            sdk.reporting.internal("connection_end", { duration: Date.now() - this.catime });
          }),
          ae(this, "reportConnectionEndDetailed", async () => {
            const e = {},
              t = await this.getNetworkAvailabilityDetails();
            (e.network_availability = (t.filter(({ result: e }) => "ok" === e).length / t.length).toFixed(2)),
              (e.notes = { network_availability_test: t }),
              sdk.reporting.internal("connection_end_detailed", e);
          }),
          ae(this, "getNetworkAvailabilityDetails", async () => {
            const e = [];
            try {
              for (const { link: t } of ue) {
                const { ok: n, status: r } = await fetch(t);
                let o = 0;
                n || (o = 2);
                let i = "ok";
                204 !== r && n ? (i = "wall") : n || (i = "invalid"), e.push({ type: "captive portal", url: t, result: i });
              }
              for (const { link: t } of se()(ce, 8)) {
                const { ok: n } = await fetch(t);
                let r = 0;
                n || (r = 2), e.push({ type: "http certificate", url: t, result: n ? "ok" : "invalid" });
              }
            } catch (e) {}
            return e;
          });
      }
    }
    var fe = class {
      init() {
        return (
          (this.internalObj = new Q()),
          (this.analyticsObj = new oe()),
          (this.connectionReportObj = new le()),
          this.analyticsObj.init().then(() => {
            sdk.reporting = {
              report: this.report.bind(this),
              internal: this.internal.bind(this),
              analytics: this.analytics.bind(this),
              onAfterConnectionStartReport: this.connectionReportObj.onAfterConnectionStartReport,
              onBeforeConnectionStartPreparation: this.connectionReportObj.onBeforeConnectionStartPreparation,
              onAfterConnectionEndReport: this.connectionReportObj.onAfterConnectionEndReport
            };
          })
        );
      }
      report(...e) {
        return !r.d || sdk.storage.get(X.a) ? (this.internal.apply(this, e), this.analytics.apply(this, e)) : Promise.resolve();
      }
      internal(...e) {
        if (0 === e.length)
          return new Promise((e) => {
            e();
          });
        const t = ["event", "category", "action", "label", "value"],
          n = {};
        for (const r in e)
          if ("object" != typeof e[r] && t[r]) n[t[r]] = e[r];
          else if ("object" == typeof e[r]) for (const t in e[r]) e[r][t] && (n[t] = e[r][t]);
        if (!n.event)
          return new Promise((e) => {
            e();
          });
        const r = { event: n.event, payload: {} };
        delete n.event;
        for (const e in n) r.payload[e] = n[e];
        return this.internalObj.event(r);
      }
      analytics(...e) {
        if (0 === e.length)
          return new Promise((e) => {
            e();
          });
        const t = ["category", "action", "label", "value"],
          n = {};
        for (const r in e)
          if ("object" != typeof e[r] && t[r]) n[t[r]] = e[r];
          else if ("object" == typeof e[r]) for (const t in e[r]) n[t] = e[r][t];
        return n.category
          ? (n.value && (n.label = `${n.label}_${n.value}`),
            this.analyticsObj.event({ category: n.category, action: n.action, label: n.label }))
          : new Promise((e) => {
              e();
            });
      }
    };
    const de = "Monitoring.lextPing";
    var he = class {
      constructor() {
        this.install(), this.update(), this.ping(), this.status();
      }
      status() {
        let e = { connected: 0, disconnected: 0, secured: 0, bypass: 0 };
        const t = {
          bypass: ["disconnected", "bypass"],
          secured: ["connected", "secured"],
          connected: ["connected", "regular"],
          disconnected: ["disconnected", "regular"]
        };
        sdk.tabs.onPageView.add((t) => {
          t &&
            t.domain &&
            (sdk.proxy.bypass.isInList(t.domain) && "connected" === sdk.proxy.status.status
              ? e.bypass++
              : sdk.proxy.secured.isInList(t.domain) && "connected" !== sdk.proxy.status.status
              ? e.secured++
              : "connected" === sdk.proxy.status.status
              ? e.connected++
              : e.disconnected++,
            sdk.reporting.internal("pageview", {
              category: Date.now(),
              "connection-status": sdk.proxy.status.status,
              "connection-country": sdk.proxy.status.location
            }));
        }),
          setInterval(() => {
            for (const n in e)
              0 !== e[n] &&
                sdk.storage.get("GDPR.Connected") &&
                sdk.reporting.internal("status", { connection_status: t[n][0], connection_type: t[n][1], sites_number: e[n] });
            e = { connected: 0, disconnected: 0, secured: 0, bypass: 0 };
          }, 12e4);
      }
      update() {
        browser.runtime.onUpdateAvailable.addListener(() => {
          sdk.reporting.report("application", "updated").then(() => {
            browser.runtime.reload();
          });
        });
      }
      install() {
        sdk.config.uninstallUrl && browser.runtime.setUninstallURL(sdk.config.uninstallUrl),
          sdk.storage.get("Monitoring.launched") ||
            sdk.reporting.report("application", "installed").then(() => {
              sdk.storage.set("Monitoring.launched", !0).then(() => {
                sdk.config.installUrl && sdk.tabs.openPage(sdk.config.installUrl);
              });
            });
      }
      ping() {
        sdk.config.reporting &&
          sdk.config.reporting.analytics &&
          !sdk.config.reporting.analytics.interval &&
          ((!sdk.storage.get(de) || sdk.storage.get(de) < Date.now()) &&
            sdk.reporting.analytics("application", "status", sdk.user.status.elite ? "elite" : "free").then(() => {
              sdk.storage.set(de, Date.now() + sdk.config.reporting.analytics.interval);
            }),
          setTimeout(() => {
            this.ping();
          }, 36e5));
      }
    };
    const ge = `${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/static/data/sword`;
    var ye = class {
      constructor() {
        this.rules = {};
      }
      async loadRules() {
        const e = await fetch(ge),
          t = await e.json(),
          n = {};
        for (const e in t)
          try {
            if (t[e].match(/\.$/)) continue;
            const r = t[e].split(".");
            r.reverse(), (n[r[0]] = n[r[0]] ? n[r[0]] : []), n[r[0]].push(t[e]);
          } catch (e) {
            error(e);
          }
        this.rules = n;
      }
      isInList(e) {
        const t = e.split(".");
        return !(!this.rules[t[t.length - 1]] || -1 === this.rules[t[t.length - 1]].indexOf(e));
      }
    };
    var _e = class {
      static getDomain(e) {
        if (!e) return "";
        const t =
            "ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt".split(
              "|"
            ),
          n =
            "com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|北海道|和歌山|神奈川|鹿児島|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flå|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|орг|обр|упр|alt|nis|jpn|mex|ath|iki|nid|gda|inc".split(
              "|"
            ),
          r = (e = e.replace(/^(https?:)?\/\/(www.)?([^/]+).*/, "$3")).split(".");
        for (; r.length > 3; ) r.shift();
        return (
          3 === r.length && ((r[1].length > 2 && r[2].length > 2) || (-1 === n.indexOf(r[1]) && -1 === t.indexOf(r[2]))) && r.shift(),
          r.join(".")
        );
      }
      static getFullDomain(e) {
        return (e && (e = e.replace(/^(https?:)?\/\/(www.)?([^/]+).*/, "$3"))) || "";
      }
    };
    const ve = "Sword.Replace",
      be = "Sword.Enabled",
      we = ["hotspotshield.com", "betternet.co", "hamsterdance.com", "html5zombo.com"];
    var me = class {
      constructor() {
        (this.tabs = {}),
          (this.done = !1),
          (this.enabled = !1),
          (this.replace = !1),
          (this.swordQ = {}),
          sdk.storage.get(ve) || sdk.storage.set(ve, we),
          (this.rules = new ye()),
          this.rules
            .loadRules()
            .then(() => {
              (this.done = !0),
                (this.enabled = !!sdk.storage.get(be) && sdk.storage.get(be)),
                (this.replace = sdk.storage.get(ve) && sdk.storage.get(ve).length > 0 ? sdk.storage.get(ve) : []),
                0 === this.replace.length && ((this.enabled = !1), sdk.storage.set(be, this.enabled));
            })
            .catch(() => {
              this.disable();
            });
      }
      getList() {
        return this.replace;
      }
      removeFromList(e) {
        return (
          this.replace.splice(e, 1),
          sdk.storage
            .set(ve, this.replace)
            .then(
              () => (
                (this.replace = sdk.storage.get(ve) && sdk.storage.get(ve).length > 0 ? sdk.storage.get(ve) : []),
                0 === this.replace.length && ((this.enabled = !1), sdk.storage.set(be, this.enabled)),
                this.replace
              )
            )
        );
      }
      addToList(e) {
        let t = !1;
        for (const n in this.replace) this.replace[n] === e && (t = !0);
        return new Promise((n) => {
          if (t) return n();
          this.replace.push(e), sdk.storage.set(ve, this.replace).then(() => n(this.replace));
        });
      }
      message(e, t) {
        switch (e.method) {
          case "getSwordData":
            return this.getSwordData(t.tab.id);
          case "checkSwordInsertionDomain":
            return this.checkSwordInsertionDomain(e.message.url, t.tab.id);
        }
      }
      getSwordData(e) {
        return this.done && this.enabled && this.tabs[e] ? this.tabs[e] : { disabled: !0 };
      }
      checkSwordInsertionDomain(e, t) {
        if (!this.done || !this.enabled || !this.tabs[t]) return { isInList: !1 };
        const n = _e.getDomain(e),
          r = _e.getFullDomain(e);
        return n === this.tabs[t].domain
          ? { isInList: !1 }
          : this.rules.isInList(r) || this.rules.isInList(n)
          ? { isInList: !0 }
          : { isInList: !1 };
      }
      onBeforeRequest(e) {
        if (!this.done || !this.enabled) return !1;
        if ("main_frame" === e.type) {
          const t = this.replace[Math.floor(Math.random() * this.replace.length)];
          return (
            (this.tabs[e.tabId] = {
              id: e.tabId,
              url: e.url,
              domain: _e.getDomain(e.url),
              fullDomain: _e.getFullDomain(e.url),
              aliasDomain: t
            }),
            !1
          );
        }
        const t = this.getRequestInfo(e);
        if (!t || -1 === t.request.url.indexOf(t.tab.domain)) return !1;
        if (!this.rules.isInList(t.request.fullDomain) && !this.rules.isInList(t.request.domain)) return !1;
        const n = t.request.url.replace(new RegExp(t.tab.domain, "g"), t.aliasDomain);
        return (this.swordQ[n] = "replace"), n;
      }
      onBeforeSendHeaders(e) {
        if (!this.done || !this.enabled) return !1;
        const t = this.getRequestInfo(e);
        if (!t) return !1;
        if (!this.rules.isInList(t.request.fullDomain) && !this.rules.isInList(t.request.domain)) return !1;
        const n = [];
        let r = !1;
        for (const e in t.headers) {
          const o = t.headers[e];
          -1 !== o.value.indexOf(t.tab.domain) && ((r = !0), (o.value = o.value.replace(new RegExp(t.tab.domain, "g"), t.aliasDomain))),
            n.push(o);
        }
        return !!r && (e.url && (this.swordQ[e.url] = "update"), n);
      }
      onHeadersReceived(e) {
        if (!this.done || !this.enabled) return !1;
        const t = this.getRequestInfo(e);
        if (!t || t.request.domain === t.request.initiatorDomain) return !1;
        delete this.swordQ[e.url];
        const n = [];
        let r = !1,
          o = !1;
        for (const e in t.headers) {
          const i = t.headers[e];
          "access-control-allow-origin" === i.name.toLowerCase() && (r = !0),
            -1 !== i.value.indexOf(t.aliasDomain) && ((o = !0), (i.value = i.value.replace(new RegExp(t.aliasDomain, "g"), t.tab.domain))),
            n.push(i);
        }
        return r || ((o = !0), n.push({ name: "Access-Control-Allow-Origin", value: t.request.initiator })), !!o && n;
      }
      getStatus() {
        return this.enabled ? "on" : "off";
      }
      setStatus(e) {
        if (-1 !== ["on", "off", "disabled"].indexOf(e))
          return (this.enabled = "on" === e), 0 === this.replace.length && (this.enabled = !1), sdk.storage.set(be, this.enabled);
      }
      getRequestInfo(e) {
        if (!e || !e.tabId || !this.tabs[e.tabId]) return !1;
        const t = {
          tab: { url: this.tabs[e.tabId].url, domain: this.tabs[e.tabId].domain, fullDomain: this.tabs[e.tabId].fullDomain },
          request: {
            url: e.url,
            domain: _e.getDomain(e.url),
            initiator: e.initiator,
            initiatorDomain: _e.getDomain(e.initiator),
            fullDomain: _e.getFullDomain(e.url)
          },
          headers: e.requestHeaders ? e.requestHeaders : e.responseHeaders ? e.responseHeaders : [],
          aliasDomain: this.tabs[e.tabId].aliasDomain
        };
        return t.tab.domain !== t.request.domain && t;
      }
    };
    function Oe(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    class ke {
      constructor() {
        Oe(this, "getStatus", () => this.status),
          Oe(this, "setStatus", (e) => {
            if (-1 !== ["on", "off", "disabled"].indexOf(e) && this.status !== e)
              return (this.status = e), "on" === this.status ? this.enable() : this.disable();
          }),
          Oe(
            this,
            "enable",
            () =>
              new Promise((e) => {
                browser.privacy.network.webRTCIPHandlingPolicy.set(
                  { value: "disable_non_proxied_udp" },
                  () => ("Firefox" === sdk.config.browser && browser.privacy.network.peerConnectionEnabled.set({ value: !1 }), e())
                );
              })
          ),
          Oe(
            this,
            "disable",
            () =>
              new Promise((e) => {
                browser.privacy.network.webRTCIPHandlingPolicy.set(
                  { value: "default_public_and_private_interfaces" },
                  () => ("Firefox" === sdk.config.browser && browser.privacy.network.peerConnectionEnabled.set({ value: !0 }), e())
                );
              })
          ),
          browser.privacy.network.webRTCIPHandlingPolicy.get({}, (e) => {
            e && "disable_non_proxied_udp" === e.value ? (this.status = "on") : (this.status = "off");
          });
      }
      static inject() {
        const e = new ke();
        return (sdk.webRTC = e), e;
      }
    }
    var Se = ke;
    var Pe = class {
      static step1(e) {
        const t = { none: [] };
        for (const n in e) {
          const r = e[n];
          let [o, i, s] = r.match(/([^#]*)##(.*)/);
          if (((i = i.match(/[^,]+/g)), i))
            for (const e in i) {
              const n = i[e];
              t[n] || (t[n] = []), t[n].push(s);
            }
          else t.none.push(s);
        }
        for (const e in t) t[e] = t[e].join(", ");
        return t;
      }
    };
    class je {
      static step1(e) {
        for (const t in e) {
          const [n, r] = e[t].match(/[^$]+/g),
            o = n.replace(/https?:\/\//, "").match(/[a-z0-9]{4,}/g);
          e[t] = { origin: e[t], filter: je.parseFilter(n), options: je.parseOptions(r), keywords: o || [""], exception: /^@@/.test(n) };
        }
        return e;
      }
      static step2(e) {
        const t = [],
          n = { white: {}, black: {} };
        let r = 0;
        for (const o in e) {
          const i = e[o],
            s = { filter: new RegExp(i.filter), origin: i.origin };
          i.options &&
            (i.options.isType && (s.isType = new RegExp(i.options.isType)),
            i.options.notType && (s.notType = new RegExp(i.options.notType)),
            i.options.isDomain && (s.isDomain = new RegExp(i.options.isDomain)),
            i.options.notDomain && (s.notDomain = new RegExp(i.options.notDomain)),
            i.options.thirdParty && (s.thirdParty = i.options.thirdParty)),
            (t[r] = s);
          for (const e in i.keywords) {
            const t = i.keywords[e],
              o = i.exception ? "white" : "black";
            n[o][t] || (n[o][t] = []), n[o][t].push(r);
          }
          r++;
        }
        return { filters: t, keywords: n };
      }
      static parseFilter(e) {
        return e
          .replace(/(^@@)|(\|$)/g, "")
          .replace(/([-\[\]/{}()+?.$])/g, "\\$1")
          .replace(/^[|]{1}([^|])/, "$1")
          .replace(/\^(.)/g, "(\\/|\\?)$1")
          .replace(/\^/g, "((\\/|\\?)|$)")
          .replace(/^[|]{2}/, "https?://([^/]+)?")
          .replace(/\*/g, ".*")
          .replace(/\|/g, "\\|");
      }
      static parseOptions(e) {
        if (!e) return !1;
        if (/^(websocket|popup|elemhide|generichide|genericblock|object\-subrequest)$/.test(e)) return -1;
        const t = {},
          n = [],
          r = [],
          o = [],
          i = [];
        e = e.match(/[^,]+/g);
        for (const s in e) {
          const a = e[s];
          if (!/^(websocket|popup|elemhide|generichide|genericblock|object\-subrequest)$/.test(a))
            if (/^~third\-party/.test(a)) t.thirdParty = -1;
            else if (/^third\-party/.test(a)) t.thirdParty = 1;
            else if (/^domain=/.test(a)) {
              const e = a
                .replace(/([.-])/g, "\\$1")
                .match(/domain=(.*)/)[1]
                .match(/[^|]+/g);
              for (const t in e) {
                const o = e[t];
                /^~/.test(o) ? r.push(`^.*${o.replace(/~/, "")}$`) : n.push(`^.*${o}$`);
              }
            } else /~/.test(a) ? i.push(a) : o.push(a);
        }
        let s = 0;
        return (
          n.length > 0 && (s++, (t.isDomain = n.join("|"))),
          r.length > 0 && (s++, (t.notDomain = r.join("|"))),
          o.length > 0 && (s++, (t.isType = o.join("|"))),
          i.length > 0 && (s++, (t.notType = i.join("|"))),
          !(0 === s && !t.thirdParty) && t
        );
      }
    }
    var xe = je;
    const Ie = `${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/static/data/adblock`;
    var De = class {
      getRules() {
        return new Promise((e) => {
          const t = sdk.storage.get("AdBlocker.Rules.savedRules");
          if (t) return (t[0] = xe.step2(t[0])), e(t);
          this.loadRules().then((t) => {
            let [n, r] = this.splitRulesByType(t);
            (r = Pe.step1(r)),
              (n = xe.step1(n)),
              sdk.storage.set("AdBlocker.Rules.savedRules", [n, r]).then(() => ((n = xe.step2(n)), e([n, r])));
          });
        });
      }
      splitRulesByType(e) {
        e = e.replace(/[ ]/g, "").match(/[^\r\n]+/g);
        const t = [],
          n = [];
        for (const r in e) {
          const o = e[r];
          "" === o || /^\/.*\/(\$|$)/.test(o) || /^!|\[|#@#/.test(o) || (/##/.test(o) ? t.push(o) : n.push(o));
        }
        return [n, t];
      }
      async loadRules() {
        try {
          return (await fetch(Ie)).text();
        } catch (e) {
          return "";
        }
      }
    };
    var Re = class {
      constructor(e) {
        this.rules = e;
      }
      getRules(e) {
        return this.rules[e] ? this.rules[e] : this.rules.none;
      }
    };
    var Ce = class {
      constructor(e) {
        this.rules = e;
      }
      check(e) {
        let t = e.url.replace(/^https?:\/\//, "").match(/[a-z0-9]{4,}/g);
        t ? t.push("") : (t = [""]);
        for (const n in t) {
          const r = t[n];
          if (this.rules.keywords.white[r] && this.checkRules(e, this.rules.keywords.white[r], "whitelist")) return !1;
        }
        for (const n in t) {
          const r = t[n];
          if (this.rules.keywords.black[r] && this.checkRules(e, this.rules.keywords.black[r], "blacklist")) return !0;
        }
        return !1;
      }
      checkRules(e, t, n) {
        for (const r in t) {
          const o = this.rules.filters[t[r]];
          if (
            (!o.thirdParty || e.thirdParty === o.thirdParty) &&
            o.filter.test(e.url) &&
            (!o.isDomain || o.isDomain.test(e.referer)) &&
            (!o.notDomain || !o.notDomain.test(e.referer)) &&
            (!o.isType || o.isType.test(e.type)) &&
            (!o.notType || !o.notType.test(e.type))
          )
            return debug(`${e.url} ${n}`), debug(e), debug(o), debug("---------------------------------"), !0;
        }
        return !1;
      }
    };
    var Te = class {
      constructor() {
        (this.rules = new De()),
          this.rules.getRules().then((e) => {
            const [t, n] = e,
              r = [];
            for (const e in t.filters) {
              const n = t.filters[e];
              Object.keys(n).length > 2 || r.push(n.filter.toString());
            }
            (window.tempFilters = r),
              (this.status = sdk.storage.get("AdBlocker.status") ? sdk.storage.get("AdBlocker.status") : "off"),
              (this.counter = sdk.storage.get("AdBlocker.counter") ? sdk.storage.get("AdBlocker.counter") : 0),
              (this.domMatcher = new Re(n)),
              (this.requestMatcher = new Ce(t));
          });
      }
      check(e) {
        if ("on" !== this.status || "main_frame" === e.type) return !1;
        "sub_frame" === e.type && (e.type = "subdocument");
        const t = { url: e.url, type: e.type.toLowerCase(), referer: e.url.match(/https?:\/\/([^/]+)/)[1], thirdParty: -1 };
        for (const n in e.requestHeaders) {
          const r = e.requestHeaders[n];
          "referer" === r.name.toLowerCase() && (t.referer = r.value.match(/https?:\/\/([^/]+)/)[1]);
        }
        const n = sdk.tabs.getByTabId(e.tabId);
        n && n.domain !== t.referer && (t.thirdParty = 1), (t.tab = n);
        const r = this.requestMatcher.check(t);
        return r && this.counter++, r;
      }
      getCounter() {
        return this.counter;
      }
      getStatus() {
        return this.status;
      }
      getDomRules(e) {
        return !("on" !== this.status || !this.isConnected(e)) && this.domMatcher.getRules();
      }
      isConnected(e) {
        if (!e) return !1;
        const t = sdk.tabs.getByTabId(e);
        return (
          !!t && !sdk.proxy.bypass.isInList(t.domain) && (!!sdk.proxy.secured.isInList(t.domain) || "connected" === sdk.proxy.status.status)
        );
      }
      setStatus(e) {
        if (-1 !== ["on", "off", "disabled"].indexOf(e)) return (this.status = e), sdk.storage.set("AdBlocker.status", e);
      }
    };
    var Ae = class {
      constructor() {
        let e = "";
        (e = "connected" === sdk.proxy.status.status ? "enable" : "disable"),
          this[e]().then(() => {
            sdk.proxy.onStatusChanged.add(this.proxyStatusChanged.bind(this));
          });
      }
      proxyStatusChanged() {
        "connected" === sdk.proxy.status.status && "off" === this.status
          ? this.enable()
          : "disconnected" === sdk.proxy.status.status && "on" === this.status && this.disable();
      }
      init() {
        browser.privacy.network.networkPredictionEnabled.get({}, (e) => {
          e && e.value ? (this.status = "on") : (this.status = "off");
        });
      }
      enable() {
        return new Promise((e) => {
          browser.privacy.network.networkPredictionEnabled.set({ value: !1 }, () => ((this.status = "on"), e()));
        });
      }
      disable() {
        return new Promise((e) => {
          browser.privacy.network.networkPredictionEnabled.set({ value: !0 }, () => {
            var t, n;
            return (this.status = "off"), null === (t = sdk) || void 0 === t || null === (n = t.speed) || void 0 === n || n.reset(), e();
          });
        });
      }
    };
    var Ee = class {
        constructor() {
          (this.counter = sdk.storage.get("Connection.Sites.counter") ? sdk.storage.get("Connection.Sites.counter") : 0),
            this.save(),
            sdk.tabs.onPageView.add(() => {
              "connected" === sdk.proxy.status.status && this.counter++;
            });
        }
        getCounter() {
          return this.counter;
        }
        save() {
          this.saveInterval
            ? sdk.storage.set("Connection.Sites.counter", this.counter)
            : (this.saveInterval = setInterval(this.save.bind(this), 3e4));
        }
      },
      Be = n(69),
      Ue = n.n(Be);
    const Ne = (e, t) => (e > t ? 1 : e < t ? -1 : 0),
      qe = (e, t) => Ue()(e, t, Ne) >= 0,
      Le = "Connection.MalwareBlocker.whiteList",
      Me = `${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/static/data/malware`;
    var Je = class {
      constructor() {
        (this.status = sdk.storage.get("Connection.MalwareBlocker.status") ? sdk.storage.get("Connection.MalwareBlocker.status") : "off"),
          (this.counter = sdk.storage.get("Connection.MalwareBlocker.counter") ? sdk.storage.get("Connection.MalwareBlocker.counter") : 0),
          (this.whiteList = sdk.storage.get(Le) ? sdk.storage.get(Le) : []),
          this.loadRules().then(() => {
            setInterval(() => {
              sdk.storage.set("Connection.MalwareBlocker.counter", this.counter);
            }, 3e4);
          });
      }
      getCounter() {
        return this.counter;
      }
      getStatus() {
        return this.status;
      }
      setStatus(e) {
        if (-1 !== ["on", "off", "disabled"].indexOf(e)) return (this.status = e), sdk.storage.set("Connection.MalwareBlocker.status", e);
      }
      async loadRules() {
        try {
          const e = await fetch(Me),
            t = await e.text();
          this.rules = t.split(" ");
        } catch (e) {
          error(e);
        }
      }
      check(e) {
        return (
          !("on" !== this.status || !e || -1 !== this.whiteList.indexOf(e)) &&
          !!qe(this.rules, e) &&
          (debug(e + " is malware"), this.counter++, !0)
        );
      }
      proceed(e) {
        return new Promise((t) => {
          const n = w(e);
          if (!n || -1 !== this.whiteList.indexOf(n)) return t();
          sdk.reporting.report("malware", "proceed", n), this.whiteList.push(n), sdk.storage.set(Le, this.whiteList).then(() => t());
        });
      }
    };
    const We = `${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/static/data/trackers`;
    var Fe = class {
      constructor() {
        (this.status = sdk.storage.get("Connection.Tracker.status") ? sdk.storage.get("Connection.Tracker.status") : "off"),
          (this.counter = sdk.storage.get("Connection.Tracker.counter") ? sdk.storage.get("Connection.Tracker.counter") : 0),
          this.loadRules().then(() => {
            setInterval(() => {
              sdk.storage.set("Connection.Tracker.counter", this.counter);
            }, 3e4);
          });
      }
      getCounter() {
        return this.counter;
      }
      getStatus() {
        return this.status;
      }
      setStatus(e) {
        if (-1 !== ["on", "off", "disabled"].indexOf(e)) return (this.status = e), sdk.storage.set("Connection.Tracker.status", e);
      }
      async loadRules() {
        try {
          const e = await fetch(We),
            t = await e.text();
          this.rules = t.split(" ");
        } catch (e) {
          error(e);
        }
      }
      check(e) {
        return !("on" !== this.status || !e) && !!qe(this.rules, e) && (this.counter++, !0);
      }
    };
    var Ve = class {
      constructor() {
        (this.status = sdk.storage.get("Connection.Cookie.status") ? sdk.storage.get("Connection.Cookie.status") : "off"),
          (this.counter = sdk.storage.get("Connection.Cookie.counter") ? sdk.storage.get("Connection.Cookie.counter") : 0),
          setInterval(() => {
            sdk.storage.set("Connection.Cookie.counter", this.counter);
          }, 3e4);
      }
      getCounter() {
        return this.counter;
      }
      getStatus() {
        return this.status;
      }
      setStatus(e) {
        if (-1 !== ["on", "off", "disabled"].indexOf(e)) return (this.status = e), sdk.storage.set("Connection.Cookie.status", e);
      }
      check(e) {
        if ("on" !== this.status) return e;
        for (const t in e) {
          let n = {};
          if (((n = e[t].name.toLowerCase()), "cookie" === n)) {
            Number(
              Date.now()
                .toString()
                .match(/[0-9]{2}$/)
            ) < 10 && this.counter++,
              e.splice(t, 1);
            break;
          }
        }
        return e;
      }
    };
    var ze = class {
      constructor() {
        this.restore(), this.save();
      }
      getCounter() {
        return this.counter;
      }
      save() {
        this.saveInterval
          ? sdk.storage.set("Connection.Bandwidth.counter", this.counter)
          : (this.saveInterval = setInterval(this.save.bind(this), 6e4));
      }
      count(e) {
        if (this.counter)
          for (const t in e) {
            const n = e[t];
            if (((n.name = n.name.toLowerCase()), (n.value = n.value.toLowerCase()), "content-length" === n.name))
              return this.update(n.value), { cancel: !1 };
          }
      }
      update(e) {
        e = Number((Number(e) / 1048576).toFixed(4));
        const t = Math.round(Date.now() / 1e3),
          n = this.counter;
        t < n.day.end ? (n.day.bandwidth += e) : (n.day = { bandwidth: 0, end: t + 86400 }),
          t < n.week.end ? (n.week.bandwidth += e) : (n.week = { bandwidth: 0, end: t + 604800 }),
          t < n.month.end ? (n.month.bandwidth += e) : (n.month = { bandwidth: 0, end: t + 2592e3 }),
          (n.total.bandwidth += e),
          (this.counter = n);
      }
      restore() {
        let e = sdk.storage.get("Connection.Bandwidth.counter");
        if (!e) {
          const t = Math.round(Date.now() / 1e3),
            n = 86400;
          (e = {
            total: { bandwidth: 0 },
            month: { bandwidth: 0, end: t + 30 * n },
            week: { bandwidth: 0, end: t + 7 * n },
            day: { bandwidth: 0, end: t + n }
          }),
            sdk.storage.set("Connection.Bandwidth.counter", e);
        }
        this.counter = e;
      }
    };
    var $e = class {
      constructor() {
        this.dailyLimit = 250;
      }
      getLimit() {
        const { login: e } = sdk.user.status;
        return e && (this.dailyLimit = 500), sdk.storage.get("appDownloaded") && (this.dailyLimit = 1e3), this.dailyLimit;
      }
    };
    var He = class {
      constructor() {
        (this.startRequestHashMap = {}), (this.speed = null);
      }
      get() {
        return this.speed;
      }
      reset() {
        this.startRequestHashMap = {};
      }
      update({ start: e, end: t, headers: n, remove: r }) {
        if ((e && (this.startRequestHashMap[e.requestId] = e.timeStamp), n && t)) {
          const e = n.find((e) => "content-length" === e.name);
          if (!e) return;
          const r = Number((Number(e.value) / 1048576).toFixed(4)),
            o = this.startRequestHashMap[t.requestId],
            i = r / ((t.timeStamp - o) / 1e3);
          this.speed = i;
        }
        r && delete this.startRequestHashMap[r];
      }
    };
    var Ge = class {
        constructor({ sword: e = !1 } = {}) {
          (this.webRTC = new Se()),
            (this.adBlocker = new Te()),
            (this.dnsPrefetch = new Ae()),
            (this.sitesCounter = new Ee()),
            (this.malwareBlocker = new Je()),
            (this.trackerBlocker = new Fe()),
            (this.cookiesBlocker = new Ve()),
            (this.bandwidthCounter = new ze()),
            (this.limitUsage = new $e()),
            (sdk.sitesCounter = this.sitesCounter.getCounter.bind(this.sitesCounter)),
            (sdk.bandwidthCounter = this.bandwidthCounter.getCounter.bind(this.bandwidthCounter)),
            (sdk.limitUsage = this.limitUsage.getLimit.bind(this.limitUsage)),
            (sdk.cookiesBlocker = {
              getStatus: this.cookiesBlocker.getStatus.bind(this.cookiesBlocker),
              setStatus: this.cookiesBlocker.setStatus.bind(this.cookiesBlocker),
              getCounter: this.cookiesBlocker.getCounter.bind(this.cookiesBlocker)
            }),
            (sdk.adBlocker = {
              setStatus: this.adBlocker.setStatus.bind(this.adBlocker),
              getStatus: this.adBlocker.getStatus.bind(this.adBlocker),
              getCounter: this.adBlocker.getCounter.bind(this.adBlocker),
              getDomRules: this.adBlocker.getDomRules.bind(this.adBlocker)
            }),
            (sdk.trackerBlocker = {
              setStatus: this.trackerBlocker.setStatus.bind(this.trackerBlocker),
              getStatus: this.trackerBlocker.getStatus.bind(this.trackerBlocker),
              getCounter: this.trackerBlocker.getCounter.bind(this.trackerBlocker)
            }),
            (sdk.malwareBlocker = {
              setStatus: this.malwareBlocker.setStatus.bind(this.malwareBlocker),
              getStatus: this.malwareBlocker.getStatus.bind(this.malwareBlocker),
              getCounter: this.malwareBlocker.getCounter.bind(this.malwareBlocker),
              proceed: this.malwareBlocker.proceed.bind(this.malwareBlocker)
            }),
            (sdk.webRTC = this.webRTC),
            e &&
              ((this.sword = new me()),
              (sdk.sword = {
                message: this.sword.message.bind(this.sword),
                getList: this.sword.getList.bind(this.sword),
                setStatus: this.sword.setStatus.bind(this.sword),
                getStatus: this.sword.getStatus.bind(this.sword),
                addToList: this.sword.addToList.bind(this.sword),
                removeFromList: this.sword.removeFromList.bind(this.sword)
              }));
          const t = new He();
          (sdk.speed = { get: t.get.bind(t), update: t.update.bind(t), reset: t.reset.bind(t) }),
            this.onBeforeRequest(),
            this.onHeadersRecived(),
            this.onBeforeSendHeaders(),
            this.onCompletedHeaders();
        }
        onBeforeRequest() {
          browser.webRequest.onBeforeRequest.addListener(
            (e) => {
              var t, n, r;
              if (-1 === e.tabId || !this.isConnected(e.tabId)) return;
              let o = Date.now();
              sdk.speed.update({ start: { requestId: e.requestId, timeStamp: e.timeStamp } });
              const i = null === (t = this.sword) || void 0 === t ? void 0 : t.onBeforeRequest(e);
              if (i) return debug(`Sword redirect: ${Date.now() - o} ${i}`), { redirectUrl: i };
              o = Date.now();
              const s = w(e.url);
              return null !== (n = this.malwareBlocker) && void 0 !== n && n.check(s)
                ? "main_frame" === e.type
                  ? (debug(`malwareBlocker redirect: ${Date.now() - o} ${e.url}`),
                    sdk.reporting.report("malware", "blocked", s),
                    {
                      redirectUrl: `${sdk.config.protocolPrefix}://${sdk.config.application.applicationId}/pages/blocked.html?url=${escape(
                        e.url
                      )}`
                    })
                  : (sdk.reporting.report("malware", "canceled", s),
                    debug(`malwareBlocker cancel: ${Date.now() - o} ${e.url}`),
                    { cancel: !0 })
                : ((o = Date.now()),
                  null !== (r = this.trackerBlocker) && void 0 !== r && r.check(s)
                    ? (debug(`trackerBlocker: ${Date.now() - o} ${e.url}`), { cancel: !0 })
                    : void 0);
            },
            { urls: ["http://*/*", "https://*/*"] },
            ["blocking", "requestBody"]
          );
        }
        onBeforeSendHeaders() {
          browser.webRequest.onBeforeSendHeaders.addListener(
            (e) => {
              var t, n, r, o;
              if (-1 === e.tabId || !this.isConnected(e.tabId)) return;
              let i = Date.now();
              if (null !== (t = this.adBlocker) && void 0 !== t && t.check(e))
                return debug(`AdBlocker: ${Date.now() - i} ${e.url}`), { cancel: !0 };
              i = Date.now();
              return (
                (null === (n = this.sword) || void 0 === n || null === (r = n.onBeforeSendHeaders) || void 0 === r
                  ? void 0
                  : r.call(n, e)) && debug(`Sword modify headers: ${Date.now() - i} ${e.url}`),
                { requestHeaders: null === (o = this.cookiesBlocker) || void 0 === o ? void 0 : o.check(e.requestHeaders) }
              );
            },
            { urls: ["http://*/*", "https://*/*"] },
            ["blocking", "requestHeaders"]
          );
        }
        onHeadersRecived() {
          browser.webRequest.onHeadersReceived.addListener(
            (e) => {
              var t;
              if (-1 === e.tabId || !this.isConnected(e.tabId)) return;
              const n = null === (t = this.sword) || void 0 === t ? void 0 : t.onHeadersReceived(e);
              return n ? { responseHeaders: n } : void 0;
            },
            { urls: ["<all_urls>"] },
            ["blocking", "responseHeaders"]
          );
        }
        onCompletedHeaders() {
          browser.webRequest.onCompleted.addListener(
            (e) => {
              -1 !== e.tabId &&
                this.isConnected(e.tabId) &&
                (this.bandwidthCounter.count(e.responseHeaders),
                sdk.speed.update({ end: { requestId: e.requestId, timeStamp: e.timeStamp }, headers: e.responseHeaders }),
                sdk.speed.update({ remove: e.requestId }));
            },
            { urls: ["<all_urls>"] },
            ["responseHeaders"]
          );
        }
        isConnected(e) {
          if (!e) return !1;
          const t = sdk.tabs.getByTabId(e);
          return (
            !!t &&
            !sdk.proxy.bypass.isInList(t.domain) &&
            (!!sdk.proxy.secured.isInList(t.domain) || "connected" === sdk.proxy.status.status)
          );
        }
      },
      Ke = n(70),
      Xe = n.n(Ke);
    const Ye = [
        "xvideos.com",
        "pornolab.net",
        "nudevista.com",
        "bet365.com",
        "youporn.com",
        "myfreecams.com",
        "planetromeo.com",
        "youjizz.com",
        "spankbang.com",
        "txxx.com",
        "new.livejasmin.com",
        "xonline.vip",
        "porntube.com",
        "vporn.com",
        "video-one.com",
        "creatives.livejasmin.com",
        "alohatube.com",
        "4tube.com",
        "avnori.com",
        "porn.com",
        "tnaflix.com",
        "tube8.com",
        "eporner.com",
        "hclips.com",
        "gotporn.com",
        "brazzers.com",
        "ashemaletube.com",
        "pron.tv",
        "fetlife.com",
        "xpcams.com",
        "hqporner.com",
        "pornhd.com",
        "cam4.es",
        "bongacams.com",
        "whoer.net",
        "proxy-nl.hide.me",
        "href.li",
        "hiload.com",
        "hola.org",
        "manhunt.net",
        "privatecams.com",
        "manjam.com"
      ],
      Ze = "ContentWall.timer";
    var Qe = class {
      constructor() {
        (this.timer = sdk.storage.get(Ze) ? sdk.storage.get(Ze) : 0), (this.limit = sdk.storage.get("ContentWall.disconnected") ? 30 : 120);
      }
      handleRequest(e) {
        return new Promise((t) => {
          switch (e.method) {
            case "shouldShow":
              return t(this.shouldShow(e));
            case "increase":
              return t(this.increase());
            case "disconnect":
              return t(this.disconnect(e));
            case "open":
              return t(this.openPopUp(e));
          }
        });
      }
      shouldShow(e) {
        var t;
        if (null === (t = e.message) || void 0 === t || !t.domain || -1 === Ye.indexOf(e.message.domain) || sdk.user.status.elite)
          return !1;
        const n = e.message.domain;
        return (
          !(sdk.proxy.bypass.isInList(n) || (!sdk.proxy.secured.isInList(n) && "connected" !== sdk.proxy.status.status)) &&
          (sdk.reporting.report("contentWall", "show", n), { limit: this.limit, timer: this.timer })
        );
      }
      disconnect(e) {
        var t;
        if (null === (t = e.message) || void 0 === t || !t.domain || -1 === Ye.indexOf(e.message.domain)) return !1;
        const n = e.message.domain;
        sdk.proxy.secured.isInList(n) && sdk.proxy.secured.remove(n),
          (this.timer = 0),
          (this.limit = 30),
          sdk.storage.set("ContentWall.disconnected", !0),
          sdk.storage.set(Ze, this.timer),
          sdk.reporting.report("contentWall", "disconnect", n),
          sdk.reporting.report("bypass", "addCw", n).then(() => {
            sdk.proxy.bypass.add(n);
          });
      }
      increase() {
        sdk.storage.set(Ze, ++this.timer);
      }
      openPopUp(e) {
        sdk.reporting.report("contentWall", "popup", sdk.tabs.active.domain),
          sdk.user.openPopUp("contentWall", e.message && e.message.domain ? e.message.domain : void 0);
      }
    };
    var et = class {
      constructor() {
        (this.contentWall = new Qe()), browser.runtime.onMessage.addListener((e, t, n) => (this.handleRequest(e, n), !0));
      }
      async handleRequest(e, t) {
        if (e && e.method) {
          if (e.method) {
            const n = Xe.a.get(sdk, e.method);
            let r = null;
            "function" == typeof n && (r = await n(...e.arguments)), t(r);
          }
          if ("ContentWall" === e.from)
            this.contentWall.handleRequest(e).then((e) => {
              t(e);
            });
          else if ("AdBlocker" === e.from) {
            var n;
            t(null === (n = sdk.adBlocker) || void 0 === n ? void 0 : n.getDomRules());
          }
        }
      }
    };
    var tt = class {
      constructor() {
        this.setIcon(),
          sdk.tabs.onPageView.add(this.setIcon.bind(this)),
          sdk.tabs.onTabChanged.add(this.setIcon.bind(this)),
          sdk.proxy.onStatusChanged.add(this.setIcon.bind(this)),
          sdk.proxy.bypass.onChange.add(this.setIcon.bind(this)),
          sdk.proxy.secured.onChange.add(this.setIcon.bind(this));
      }
      setIcon() {
        const e = sdk.tabs.active.domain,
          t = sdk.proxy.status.status;
        let n;
        (n =
          "unavailable" === sdk.proxy.getGlobalStatus()
            ? "unavailable"
            : sdk.proxy.bypass.isInList(e) && "disconnected" !== t
            ? "bypass"
            : -1 !== ["connecting", "disconnecting"].indexOf(t)
            ? "connecting"
            : "connected" === t
            ? "connected"
            : sdk.proxy.secured.isInList(e)
            ? "secured"
            : t),
          browser.browserAction.setIcon({
            path: { 19: `/static/assets/icons/status/${n}.png`, 38: `/static/assets/icons/status/${n}.png` }
          });
      }
    };
    const nt = "DesktopMessages.nextPromoMessage",
      rt = "DesktopMessages.whatConnect";
    var ot = class {
      constructor() {
        sdk.proxy.onProxyError.add(this.proxyError.bind(this)),
          sdk.proxy.onStatusChanged.add(this.proxyStatusChanged.bind(this)),
          browser.notifications.onClosed.addListener((e) => {
            const t = this.checkType(e);
            t && sdk.reporting.report("message", t, "closed");
          }),
          browser.notifications.onButtonClicked.addListener((e, t) => {
            const n = this.checkType(e);
            n &&
              (1 === t
                ? browser.notifications.clear(e, () => {
                    sdk.reporting.report("message", n, "buttonClose");
                  })
                : (0 === t && "error" === n) || (0 === t && "promo" === n)
                ? browser.notifications.clear(e, () => {
                    sdk.reporting.report("message", n, "buttonDownload"),
                      -1 !== navigator.platform.indexOf("Mac")
                        ? window.open(
                            "https://control.kochava.com/v1/cpi/click?campaign_id=kohotspot-shield-e1z5meb8bd0bc517b5d1&network_id=7450&site_id=1&device_id=device_id"
                          )
                        : window.open(
                            "https://control.kochava.com/v1/cpi/click?campaign_id=kohotspot-shield-2oo5a539acac1e6b0f&network_id=7450&site_id=1&device_id=device_id"
                          );
                  })
                : 0 === t && "update" === n && browser.notifications.clear(e, () => {}));
          });
      }
      proxyStatusChanged(e) {
        if ("connected" !== (null == e ? void 0 : e.status)) return;
        let t = sdk.storage.get(rt) ? sdk.storage.get(rt) : 0;
        t++,
          sdk.storage.set(rt, t),
          t < 2 ||
            setTimeout(() => {
              this.showProxyStatusMessage();
            }, 15e3);
      }
      showProxyStatusMessage() {
        (sdk.storage.get(nt) ? sdk.storage.get(nt) : 0) >= Date.now() ||
          browser.notifications.create(
            "promoMessage" + Date.now(),
            {
              type: "image",
              title: "Try our Desktop VPN Client",
              iconUrl: "/static/assets/messages/logo.svg",
              imageUrl: "/static/assets/messages/block.png",
              message: "Protect your entire internet connection, not just browser",
              requireInteraction: !0,
              buttons: [{ title: "Start Free Download" }, { title: "Next time" }]
            },
            () => {
              sdk.reporting.report("message", "promo", "showed"), sdk.storage.set(nt, Date.now() + 6048e5);
            }
          );
      }
      proxyError(e) {
        "disconnect" === e &&
          browser.notifications.create(
            "errorMessage" + Date.now(),
            {
              type: "basic",
              title: "Connection alert",
              iconUrl: "/static/assets/messages/warning.png",
              message: "We are having troubles. Download Hotspot Shield to get secure and unrestricted access",
              requireInteraction: !0,
              buttons: [{ title: "Fix Connection" }, { title: "Close" }]
            },
            () => {
              sdk.reporting.report("message", "error", "showed");
            }
          );
      }
      checkType(e) {
        const t = e.match(/^([a-z]+)Message/);
        if (t && t[1])
          switch (t[1]) {
            case "error":
              return "error";
            case "promo":
              return "promo";
            case "update":
              return "update";
            default:
              return;
          }
      }
    };
    class it {
      constructor() {
        this.init();
      }
      init() {
        new i.a(),
          new Y().init().then(() => {
            new O().init().then(() => {
              new _().init().then(() => {
                new fe().init().then(() => {
                  new K(), new v(), new et(), new he(), new tt(), new ot(), new Ge({ sword: !0 }), (sdk.loading.loaded = !0);
                });
              });
            });
          });
      }
    }
    try {
      new it();
    } catch (e) {
      console.log("CRITICAL ERROR"), console.log(e);
    }
  }
]);
