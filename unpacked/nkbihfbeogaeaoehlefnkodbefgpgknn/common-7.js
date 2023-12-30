LavaPack.loadBundle(
  [
    [
      498,
      {
        "./_version": 497,
        "@ethersproject/address": 421,
        "@ethersproject/bignumber": 428,
        "@ethersproject/bytes": 430,
        "@ethersproject/constants": 434,
        "@ethersproject/keccak256": 449,
        "@ethersproject/logger": 452,
        "@ethersproject/properties": 458,
        "@ethersproject/rlp": 484,
        "@ethersproject/signing-key": 491
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r),
                            Object.defineProperty(e, n, {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            });
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                      ? function (e, t) {
                          Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                      : function (e, t) {
                          e.default = t;
                        }),
                  i =
                    (this && this.__importStar) ||
                    function (e) {
                      if (e && e.__esModule) return e;
                      var t = {};
                      if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                      return s(t, e), t;
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.parse = r.serialize = r.accessListify = r.recoverAddress = r.computeAddress = r.TransactionTypes = void 0);
                var o = e("@ethersproject/address"),
                  a = e("@ethersproject/bignumber"),
                  c = e("@ethersproject/bytes"),
                  u = e("@ethersproject/constants"),
                  l = e("@ethersproject/keccak256"),
                  d = e("@ethersproject/properties"),
                  h = i(e("@ethersproject/rlp")),
                  p = e("@ethersproject/signing-key"),
                  f = e("@ethersproject/logger"),
                  y = e("./_version"),
                  g = new f.Logger(y.version);
                function m(e) {
                  return "0x" === e ? null : (0, o.getAddress)(e);
                }
                function b(e) {
                  return "0x" === e ? u.Zero : a.BigNumber.from(e);
                }
                !(function (e) {
                  (e[(e.legacy = 0)] = "legacy"), (e[(e.eip2930 = 1)] = "eip2930"), (e[(e.eip1559 = 2)] = "eip1559");
                })(r.TransactionTypes || (r.TransactionTypes = {}));
                var v = [
                    { name: "nonce", maxLength: 32, numeric: !0 },
                    { name: "gasPrice", maxLength: 32, numeric: !0 },
                    { name: "gasLimit", maxLength: 32, numeric: !0 },
                    { name: "to", length: 20 },
                    { name: "value", maxLength: 32, numeric: !0 },
                    { name: "data" }
                  ],
                  T = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, type: !0, value: !0 };
                function w(e) {
                  var t = (0, p.computePublicKey)(e);
                  return (0, o.getAddress)((0, c.hexDataSlice)((0, l.keccak256)((0, c.hexDataSlice)(t, 1)), 12));
                }
                function k(e, t) {
                  return w((0, p.recoverPublicKey)((0, c.arrayify)(e), t));
                }
                function I(e, t) {
                  var r = (0, c.stripZeros)(a.BigNumber.from(e).toHexString());
                  return r.length > 32 && g.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r;
                }
                function C(e, t) {
                  return {
                    address: (0, o.getAddress)(e),
                    storageKeys: (t || []).map(function (t, r) {
                      return (
                        32 !== (0, c.hexDataLength)(t) &&
                          g.throwArgumentError("invalid access list storageKey", "accessList[" + e + ":" + r + "]", t),
                        t.toLowerCase()
                      );
                    })
                  };
                }
                function E(e) {
                  if (Array.isArray(e))
                    return e.map(function (e, t) {
                      return Array.isArray(e)
                        ? (e.length > 2 &&
                            g.throwArgumentError("access list expected to be [ address, storageKeys[] ]", "value[" + t + "]", e),
                          C(e[0], e[1]))
                        : C(e.address, e.storageKeys);
                    });
                  var t = Object.keys(e).map(function (t) {
                    var r = e[t].reduce(function (e, t) {
                      return (e[t] = !0), e;
                    }, {});
                    return C(t, Object.keys(r).sort());
                  });
                  return (
                    t.sort(function (e, t) {
                      return e.address.localeCompare(t.address);
                    }),
                    t
                  );
                }
                function _(e) {
                  return E(e).map(function (e) {
                    return [e.address, e.storageKeys];
                  });
                }
                function P(e, t) {
                  if (null != e.gasPrice) {
                    var r = a.BigNumber.from(e.gasPrice),
                      n = a.BigNumber.from(e.maxFeePerGas || 0);
                    r.eq(n) || g.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", { gasPrice: r, maxFeePerGas: n });
                  }
                  var s = [
                    I(e.chainId || 0, "chainId"),
                    I(e.nonce || 0, "nonce"),
                    I(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                    I(e.maxFeePerGas || 0, "maxFeePerGas"),
                    I(e.gasLimit || 0, "gasLimit"),
                    null != e.to ? (0, o.getAddress)(e.to) : "0x",
                    I(e.value || 0, "value"),
                    e.data || "0x",
                    _(e.accessList || [])
                  ];
                  if (t) {
                    var i = (0, c.splitSignature)(t);
                    s.push(I(i.recoveryParam, "recoveryParam")), s.push((0, c.stripZeros)(i.r)), s.push((0, c.stripZeros)(i.s));
                  }
                  return (0, c.hexConcat)(["0x02", h.encode(s)]);
                }
                function R(e, t) {
                  var r = [
                    I(e.chainId || 0, "chainId"),
                    I(e.nonce || 0, "nonce"),
                    I(e.gasPrice || 0, "gasPrice"),
                    I(e.gasLimit || 0, "gasLimit"),
                    null != e.to ? (0, o.getAddress)(e.to) : "0x",
                    I(e.value || 0, "value"),
                    e.data || "0x",
                    _(e.accessList || [])
                  ];
                  if (t) {
                    var n = (0, c.splitSignature)(t);
                    r.push(I(n.recoveryParam, "recoveryParam")), r.push((0, c.stripZeros)(n.r)), r.push((0, c.stripZeros)(n.s));
                  }
                  return (0, c.hexConcat)(["0x01", h.encode(r)]);
                }
                function D(e, t, r) {
                  try {
                    var n = b(t[0]).toNumber();
                    if (0 !== n && 1 !== n) throw new Error("bad recid");
                    e.v = n;
                  } catch (e) {
                    g.throwArgumentError("invalid v for transaction type: 1", "v", t[0]);
                  }
                  (e.r = (0, c.hexZeroPad)(t[1], 32)), (e.s = (0, c.hexZeroPad)(t[2], 32));
                  try {
                    var s = (0, l.keccak256)(r(e));
                    e.from = k(s, { r: e.r, s: e.s, recoveryParam: e.v });
                  } catch (e) {}
                }
                (r.computeAddress = w),
                  (r.recoverAddress = k),
                  (r.accessListify = E),
                  (r.serialize = function (e, t) {
                    if (null == e.type || 0 === e.type)
                      return (
                        null != e.accessList &&
                          g.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                        (function (e, t) {
                          (0, d.checkProperties)(e, T);
                          var r = [];
                          v.forEach(function (t) {
                            var n = e[t.name] || [],
                              s = {};
                            t.numeric && (s.hexPad = "left"),
                              (n = (0, c.arrayify)((0, c.hexlify)(n, s))),
                              t.length &&
                                n.length !== t.length &&
                                n.length > 0 &&
                                g.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n),
                              t.maxLength &&
                                (n = (0, c.stripZeros)(n)).length > t.maxLength &&
                                g.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n),
                              r.push((0, c.hexlify)(n));
                          });
                          var n = 0;
                          if (
                            (null != e.chainId
                              ? "number" != typeof (n = e.chainId) && g.throwArgumentError("invalid transaction.chainId", "transaction", e)
                              : t && !(0, c.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)),
                            0 !== n && (r.push((0, c.hexlify)(n)), r.push("0x"), r.push("0x")),
                            !t)
                          )
                            return h.encode(r);
                          var s = (0, c.splitSignature)(t),
                            i = 27 + s.recoveryParam;
                          return (
                            0 !== n
                              ? (r.pop(),
                                r.pop(),
                                r.pop(),
                                (i += 2 * n + 8),
                                s.v > 28 && s.v !== i && g.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t))
                              : s.v !== i && g.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t),
                            r.push((0, c.hexlify)(i)),
                            r.push((0, c.stripZeros)((0, c.arrayify)(s.r))),
                            r.push((0, c.stripZeros)((0, c.arrayify)(s.s))),
                            h.encode(r)
                          );
                        })(e, t)
                      );
                    switch (e.type) {
                      case 1:
                        return R(e, t);
                      case 2:
                        return P(e, t);
                    }
                    return g.throwError("unsupported transaction type: " + e.type, f.Logger.errors.UNSUPPORTED_OPERATION, {
                      operation: "serializeTransaction",
                      transactionType: e.type
                    });
                  }),
                  (r.parse = function (e) {
                    var t = (0, c.arrayify)(e);
                    if (t[0] > 127)
                      return (function (e) {
                        var t = h.decode(e);
                        9 !== t.length && 6 !== t.length && g.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                        var r = {
                          nonce: b(t[0]).toNumber(),
                          gasPrice: b(t[1]),
                          gasLimit: b(t[2]),
                          to: m(t[3]),
                          value: b(t[4]),
                          data: t[5],
                          chainId: 0
                        };
                        if (6 === t.length) return r;
                        try {
                          r.v = a.BigNumber.from(t[6]).toNumber();
                        } catch (e) {
                          return r;
                        }
                        if (
                          ((r.r = (0, c.hexZeroPad)(t[7], 32)),
                          (r.s = (0, c.hexZeroPad)(t[8], 32)),
                          a.BigNumber.from(r.r).isZero() && a.BigNumber.from(r.s).isZero())
                        )
                          (r.chainId = r.v), (r.v = 0);
                        else {
                          (r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0);
                          var n = r.v - 27,
                            s = t.slice(0, 6);
                          0 !== r.chainId && (s.push((0, c.hexlify)(r.chainId)), s.push("0x"), s.push("0x"), (n -= 2 * r.chainId + 8));
                          var i = (0, l.keccak256)(h.encode(s));
                          try {
                            r.from = k(i, { r: (0, c.hexlify)(r.r), s: (0, c.hexlify)(r.s), recoveryParam: n });
                          } catch (e) {}
                          r.hash = (0, l.keccak256)(e);
                        }
                        return (r.type = null), r;
                      })(t);
                    switch (t[0]) {
                      case 1:
                        return (function (e) {
                          var t = h.decode(e.slice(1));
                          8 !== t.length &&
                            11 !== t.length &&
                            g.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, c.hexlify)(e));
                          var r = {
                            type: 1,
                            chainId: b(t[0]).toNumber(),
                            nonce: b(t[1]).toNumber(),
                            gasPrice: b(t[2]),
                            gasLimit: b(t[3]),
                            to: m(t[4]),
                            value: b(t[5]),
                            data: t[6],
                            accessList: E(t[7])
                          };
                          return 8 === t.length || ((r.hash = (0, l.keccak256)(e)), D(r, t.slice(8), R)), r;
                        })(t);
                      case 2:
                        return (function (e) {
                          var t = h.decode(e.slice(1));
                          9 !== t.length &&
                            12 !== t.length &&
                            g.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, c.hexlify)(e));
                          var r = b(t[2]),
                            n = b(t[3]),
                            s = {
                              type: 2,
                              chainId: b(t[0]).toNumber(),
                              nonce: b(t[1]).toNumber(),
                              maxPriorityFeePerGas: r,
                              maxFeePerGas: n,
                              gasPrice: null,
                              gasLimit: b(t[4]),
                              to: m(t[5]),
                              value: b(t[6]),
                              data: t[7],
                              accessList: E(t[8])
                            };
                          return 9 === t.length || ((s.hash = (0, l.keccak256)(e)), D(s, t.slice(9), P)), s;
                        })(t);
                    }
                    return g.throwError("unsupported transaction type: " + t[0], f.Logger.errors.UNSUPPORTED_OPERATION, {
                      operation: "parseTransaction",
                      transactionType: t[0]
                    });
                  });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/transactions", file: "node_modules/@ethersproject/transactions/lib/index.js" }
    ],
    [
      499,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.version = void 0), (r.version = "web/5.7.1");
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/_version.js" }
    ],
    [
      50,
      { "../../../shared/modules/browser-runtime.utils": 3985, "@sentry/browser": 1982, loglevel: 3322, "webextension-polyfill": 3937 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = a(e("webextension-polyfill")),
                  s = a(e("loglevel")),
                  i = e("@sentry/browser"),
                  o = e("../../../shared/modules/browser-runtime.utils");
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                r.default = class {
                  constructor() {
                    (this.isSupported = Boolean(n.default.storage.local)),
                      this.isSupported || s.default.error("Storage local API not available."),
                      (this.dataPersistenceFailing = !1),
                      (this.mostRecentRetrievedState = null);
                  }
                  setMetadata(e) {
                    this.metadata = e;
                  }
                  async set(e) {
                    if (!this.isSupported)
                      throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                    if (!e) throw new Error("MetaMask - updated state is missing");
                    if (!this.metadata)
                      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                    try {
                      await this._set({ data: e, meta: this.metadata }), this.dataPersistenceFailing && (this.dataPersistenceFailing = !1);
                    } catch (e) {
                      this.dataPersistenceFailing || ((this.dataPersistenceFailing = !0), (0, i.captureException)(e)),
                        s.default.error("error setting state in local store:", e);
                    }
                  }
                  async get() {
                    if (!this.isSupported) return undefined;
                    const e = await this._get();
                    return (
                      (t = e),
                      0 === Object.keys(t).length
                        ? ((this.mostRecentRetrievedState = null), undefined)
                        : ((this.mostRecentRetrievedState = e), e)
                    );
                    var t;
                  }
                  _get() {
                    const { local: e } = n.default.storage;
                    return new Promise((t, r) => {
                      e.get(null).then((e) => {
                        const n = (0, o.checkForLastError)();
                        n ? r(n) : t(e);
                      });
                    });
                  }
                  _set(e) {
                    const { local: t } = n.default.storage;
                    return new Promise((r, n) => {
                      t.set(e).then(() => {
                        const e = (0, o.checkForLastError)();
                        e ? n(e) : r();
                      });
                    });
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/local-store.js" }
    ],
    [
      500,
      { "@ethersproject/bytes": 430 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (s, i) {
                        function o(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? s(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(o, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        s,
                        i,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & s[0]) throw s[1];
                            return s[1];
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
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) &&
                                    !(s = s.call(n, i[1])).done)
                                )
                                  return s;
                                switch (((n = 0), s && (i = [2 & i[0], s.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    s = i;
                                    break;
                                  case 4:
                                    return o.label++, { value: i[1], done: !1 };
                                  case 5:
                                    o.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (!((s = o.trys), (s = s.length > 0 && s[s.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      o = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!s || (i[1] > s[0] && i[1] < s[3]))) {
                                      o.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && o.label < s[1]) {
                                      (o.label = s[1]), (s = i);
                                      break;
                                    }
                                    if (s && o.label < s[2]) {
                                      (o.label = s[2]), o.ops.push(i);
                                      break;
                                    }
                                    s[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                i = t.call(e, o);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = s = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.getUrl = void 0);
                var i = e("@ethersproject/bytes");
                r.getUrl = function (e, t) {
                  return n(this, void 0, void 0, function () {
                    var r, n, o, a, c;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return (
                            null == t && (t = {}),
                            (r = { method: t.method || "GET", headers: t.headers || {}, body: t.body || undefined }),
                            !0 !== t.skipFetchSetup &&
                              ((r.mode = "cors"),
                              (r.cache = "no-cache"),
                              (r.credentials = "same-origin"),
                              (r.redirect = "follow"),
                              (r.referrer = "client")),
                            null != t.fetchOptions &&
                              ((n = t.fetchOptions).mode && (r.mode = n.mode),
                              n.cache && (r.cache = n.cache),
                              n.credentials && (r.credentials = n.credentials),
                              n.redirect && (r.redirect = n.redirect),
                              n.referrer && (r.referrer = n.referrer)),
                            [4, fetch(e, r)]
                          );
                        case 1:
                          return [4, (o = s.sent()).arrayBuffer()];
                        case 2:
                          return (
                            (a = s.sent()),
                            (c = {}),
                            o.headers.forEach
                              ? o.headers.forEach(function (e, t) {
                                  c[t.toLowerCase()] = e;
                                })
                              : o.headers.keys().forEach(function (e) {
                                  c[e.toLowerCase()] = o.headers.get(e);
                                }),
                            [2, { headers: c, statusCode: o.status, statusMessage: o.statusText, body: (0, i.arrayify)(new Uint8Array(a)) }]
                          );
                      }
                    });
                  });
                };
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/browser-geturl.js" }
    ],
    [
      501,
      {
        "./_version": 499,
        "./geturl": 500,
        "@ethersproject/base64": 423,
        "@ethersproject/bytes": 430,
        "@ethersproject/logger": 452,
        "@ethersproject/properties": 458,
        "@ethersproject/strings": 495
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
                      return new (r || (r = Promise))(function (s, i) {
                        function o(e) {
                          try {
                            c(n.next(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function a(e) {
                          try {
                            c(n.throw(e));
                          } catch (e) {
                            i(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? s(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(o, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
                      var r,
                        n,
                        s,
                        i,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & s[0]) throw s[1];
                            return s[1];
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
                      function a(i) {
                        return function (a) {
                          return (function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o; )
                              try {
                                if (
                                  ((r = 1),
                                  n &&
                                    (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) &&
                                    !(s = s.call(n, i[1])).done)
                                )
                                  return s;
                                switch (((n = 0), s && (i = [2 & i[0], s.value]), i[0])) {
                                  case 0:
                                  case 1:
                                    s = i;
                                    break;
                                  case 4:
                                    return o.label++, { value: i[1], done: !1 };
                                  case 5:
                                    o.label++, (n = i[1]), (i = [0]);
                                    continue;
                                  case 7:
                                    (i = o.ops.pop()), o.trys.pop();
                                    continue;
                                  default:
                                    if (!((s = o.trys), (s = s.length > 0 && s[s.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                      o = 0;
                                      continue;
                                    }
                                    if (3 === i[0] && (!s || (i[1] > s[0] && i[1] < s[3]))) {
                                      o.label = i[1];
                                      break;
                                    }
                                    if (6 === i[0] && o.label < s[1]) {
                                      (o.label = s[1]), (s = i);
                                      break;
                                    }
                                    if (s && o.label < s[2]) {
                                      (o.label = s[2]), o.ops.push(i);
                                      break;
                                    }
                                    s[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                                }
                                i = t.call(e, o);
                              } catch (e) {
                                (i = [6, e]), (n = 0);
                              } finally {
                                r = s = 0;
                              }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                          })([i, a]);
                        };
                      }
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.poll = r.fetchJson = r._fetchData = void 0);
                var i = e("@ethersproject/base64"),
                  o = e("@ethersproject/bytes"),
                  a = e("@ethersproject/properties"),
                  c = e("@ethersproject/strings"),
                  u = e("@ethersproject/logger"),
                  l = e("./_version"),
                  d = new u.Logger(l.version),
                  h = e("./geturl");
                function p(e) {
                  return new Promise(function (t) {
                    setTimeout(t, e);
                  });
                }
                function f(e, t) {
                  if (null == e) return null;
                  if ("string" == typeof e) return e;
                  if ((0, o.isBytesLike)(e)) {
                    if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim()))
                      try {
                        return (0, c.toUtf8String)(e);
                      } catch (e) {}
                    return (0, o.hexlify)(e);
                  }
                  return e;
                }
                function y(e, t, r) {
                  var o = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
                  d.assertArgument(o > 0 && o % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", o);
                  var l = "object" == typeof e ? e.throttleCallback : null,
                    y = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
                  d.assertArgument(y > 0 && y % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", y);
                  var g = "object" == typeof e && !!e.errorPassThrough,
                    m = {},
                    b = null,
                    v = { method: "GET" },
                    T = !1,
                    w = 12e4;
                  if ("string" == typeof e) b = e;
                  else if ("object" == typeof e) {
                    if (
                      ((null != e && null != e.url) || d.throwArgumentError("missing URL", "connection.url", e),
                      (b = e.url),
                      "number" == typeof e.timeout && e.timeout > 0 && (w = e.timeout),
                      e.headers)
                    )
                      for (var k in e.headers)
                        (m[k.toLowerCase()] = { key: k, value: String(e.headers[k]) }),
                          ["if-none-match", "if-modified-since"].indexOf(k.toLowerCase()) >= 0 && (T = !0);
                    if (((v.allowGzip = !!e.allowGzip), null != e.user && null != e.password)) {
                      "https:" !== b.substring(0, 6) &&
                        !0 !== e.allowInsecureAuthentication &&
                        d.throwError("basic authentication requires a secure https url", u.Logger.errors.INVALID_ARGUMENT, {
                          argument: "url",
                          url: b,
                          user: e.user,
                          password: "[REDACTED]"
                        });
                      var I = e.user + ":" + e.password;
                      m.authorization = { key: "Authorization", value: "Basic " + (0, i.encode)((0, c.toUtf8Bytes)(I)) };
                    }
                    null != e.skipFetchSetup && (v.skipFetchSetup = !!e.skipFetchSetup),
                      null != e.fetchOptions && (v.fetchOptions = (0, a.shallowCopy)(e.fetchOptions));
                  }
                  var C,
                    E = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                    _ = b ? b.match(E) : null;
                  if (_)
                    try {
                      var P = {
                          statusCode: 200,
                          statusMessage: "OK",
                          headers: { "content-type": _[1] || "text/plain" },
                          body: _[2]
                            ? (0, i.decode)(_[3])
                            : ((C = _[3]),
                              (0, c.toUtf8Bytes)(
                                C.replace(/%([0-9a-f][0-9a-f])/gi, function (e, t) {
                                  return String.fromCharCode(parseInt(t, 16));
                                })
                              ))
                        },
                        R = P.body;
                      return r && (R = r(P.body, P)), Promise.resolve(R);
                    } catch (e) {
                      d.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                        body: f(_[1], _[2]),
                        error: e,
                        requestBody: null,
                        requestMethod: "GET",
                        url: b
                      });
                    }
                  t &&
                    ((v.method = "POST"),
                    (v.body = t),
                    null == m["content-type"] && (m["content-type"] = { key: "Content-Type", value: "application/octet-stream" }),
                    null == m["content-length"] && (m["content-length"] = { key: "Content-Length", value: String(t.length) }));
                  var D = {};
                  Object.keys(m).forEach(function (e) {
                    var t = m[e];
                    D[t.key] = t.value;
                  }),
                    (v.headers = D);
                  var S,
                    O =
                      ((S = null),
                      {
                        promise: new Promise(function (e, t) {
                          w &&
                            (S = setTimeout(function () {
                              null != S &&
                                ((S = null),
                                t(
                                  d.makeError("timeout", u.Logger.errors.TIMEOUT, {
                                    requestBody: f(v.body, D["content-type"]),
                                    requestMethod: v.method,
                                    timeout: w,
                                    url: b
                                  })
                                ));
                            }, w));
                        }),
                        cancel: function () {
                          null != S && (clearTimeout(S), (S = null));
                        }
                      }),
                    x = (function () {
                      return n(this, void 0, void 0, function () {
                        var e, t, n, i, a, c, m, w, k;
                        return s(this, function (s) {
                          switch (s.label) {
                            case 0:
                              (e = 0), (s.label = 1);
                            case 1:
                              if (!(e < o)) return [3, 20];
                              (t = null), (s.label = 2);
                            case 2:
                              return s.trys.push([2, 9, , 10]), [4, (0, h.getUrl)(b, v)];
                            case 3:
                              return (
                                (t = s.sent()),
                                e < o
                                  ? 301 !== t.statusCode && 302 !== t.statusCode
                                    ? [3, 4]
                                    : ((n = t.headers.location || ""),
                                      "GET" === v.method && n.match(/^https:/) ? ((b = t.headers.location), [3, 19]) : [3, 8])
                                  : [3, 8]
                              );
                            case 4:
                              return 429 !== t.statusCode ? [3, 8] : ((k = !0), l ? [4, l(e, b)] : [3, 6]);
                            case 5:
                              (k = s.sent()), (s.label = 6);
                            case 6:
                              return k
                                ? (0,
                                  (i = t.headers["retry-after"]),
                                  [
                                    4,
                                    p(
                                      "string" == typeof i && i.match(/^[1-9][0-9]*$/)
                                        ? 1e3 * parseInt(i)
                                        : y * parseInt(String(Math.random() * Math.pow(2, e)))
                                    )
                                  ])
                                : [3, 8];
                            case 7:
                              return s.sent(), [3, 19];
                            case 8:
                              return [3, 10];
                            case 9:
                              return (
                                (a = s.sent()),
                                null == (t = a.response) &&
                                  (O.cancel(),
                                  d.throwError("missing response", u.Logger.errors.SERVER_ERROR, {
                                    requestBody: f(v.body, D["content-type"]),
                                    requestMethod: v.method,
                                    serverError: a,
                                    url: b
                                  })),
                                [3, 10]
                              );
                            case 10:
                              if (
                                ((c = t.body),
                                T && 304 === t.statusCode
                                  ? (c = null)
                                  : !g &&
                                    (t.statusCode < 200 || t.statusCode >= 300) &&
                                    (O.cancel(),
                                    d.throwError("bad response", u.Logger.errors.SERVER_ERROR, {
                                      status: t.statusCode,
                                      headers: t.headers,
                                      body: f(c, t.headers ? t.headers["content-type"] : null),
                                      requestBody: f(v.body, D["content-type"]),
                                      requestMethod: v.method,
                                      url: b
                                    })),
                                !r)
                              )
                                return [3, 18];
                              s.label = 11;
                            case 11:
                              return s.trys.push([11, 13, , 18]), [4, r(c, t)];
                            case 12:
                              return (m = s.sent()), O.cancel(), [2, m];
                            case 13:
                              return (w = s.sent()).throttleRetry && e < o ? ((k = !0), l ? [4, l(e, b)] : [3, 15]) : [3, 17];
                            case 14:
                              (k = s.sent()), (s.label = 15);
                            case 15:
                              return k ? [4, p(y * parseInt(String(Math.random() * Math.pow(2, e))))] : [3, 17];
                            case 16:
                              return s.sent(), [3, 19];
                            case 17:
                              return (
                                O.cancel(),
                                d.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                                  body: f(c, t.headers ? t.headers["content-type"] : null),
                                  error: w,
                                  requestBody: f(v.body, D["content-type"]),
                                  requestMethod: v.method,
                                  url: b
                                }),
                                [3, 18]
                              );
                            case 18:
                              return O.cancel(), [2, c];
                            case 19:
                              return e++, [3, 1];
                            case 20:
                              return [
                                2,
                                d.throwError("failed response", u.Logger.errors.SERVER_ERROR, {
                                  requestBody: f(v.body, D["content-type"]),
                                  requestMethod: v.method,
                                  url: b
                                })
                              ];
                          }
                        });
                      });
                    })();
                  return Promise.race([O.promise, x]);
                }
                (r._fetchData = y),
                  (r.fetchJson = function (e, t, r) {
                    var n = null;
                    if (null != t) {
                      n = (0, c.toUtf8Bytes)(t);
                      var s = "string" == typeof e ? { url: e } : (0, a.shallowCopy)(e);
                      if (s.headers)
                        0 !==
                          Object.keys(s.headers).filter(function (e) {
                            return "content-type" === e.toLowerCase();
                          }).length || ((s.headers = (0, a.shallowCopy)(s.headers)), (s.headers["content-type"] = "application/json"));
                      else s.headers = { "content-type": "application/json" };
                      e = s;
                    }
                    return y(e, n, function (e, t) {
                      var n = null;
                      if (null != e)
                        try {
                          n = JSON.parse((0, c.toUtf8String)(e));
                        } catch (t) {
                          d.throwError("invalid JSON", u.Logger.errors.SERVER_ERROR, { body: e, error: t });
                        }
                      return r && (n = r(n, t)), n;
                    });
                  }),
                  (r.poll = function (e, t) {
                    return (
                      t || (t = {}),
                      null == (t = (0, a.shallowCopy)(t)).floor && (t.floor = 0),
                      null == t.ceiling && (t.ceiling = 1e4),
                      null == t.interval && (t.interval = 250),
                      new Promise(function (r, n) {
                        var s = null,
                          i = !1,
                          o = function () {
                            return !i && ((i = !0), s && clearTimeout(s), !0);
                          };
                        t.timeout &&
                          (s = setTimeout(function () {
                            o() && n(new Error("timeout"));
                          }, t.timeout));
                        var a = t.retryLimit,
                          c = 0;
                        !(function s() {
                          return e().then(
                            function (e) {
                              if (e !== undefined) o() && r(e);
                              else if (t.oncePoll) t.oncePoll.once("poll", s);
                              else if (t.onceBlock) t.onceBlock.once("block", s);
                              else if (!i) {
                                if (++c > a) return void (o() && n(new Error("retry limit reached")));
                                var u = t.interval * parseInt(String(Math.random() * Math.pow(2, c)));
                                u < t.floor && (u = t.floor), u > t.ceiling && (u = t.ceiling), setTimeout(s, u);
                              }
                              return null;
                            },
                            function (e) {
                              o() && n(e);
                            }
                          );
                        })();
                      })
                    );
                  });
              };
            };
      },
      { package: "@ethersproject/providers>@ethersproject/web", file: "node_modules/@ethersproject/web/lib/index.js" }
    ],
    [
      518,
      { "@ethereumjs/util": 392, "@keystonehq/bc-ur-registry": 537, buffer: 2392, hdkey: 3060, uuid: 3902 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      s = e("@keystonehq/bc-ur-registry"),
                      i = e("uuid"),
                      o = (n = e("hdkey")) && "object" == typeof n && "default" in n ? n.default : n,
                      a = e("@ethereumjs/util");
                    const c = {
                        ETH_SIGN_REQUEST: new s.RegistryType("eth-sign-request", 401),
                        ETH_SIGNATURE: new s.RegistryType("eth-signature", 402),
                        ETH_NFT_ITEM: new s.RegistryType("eth-nft-item", 403)
                      },
                      { decodeToDataItem: u, RegistryTypes: l } = s.extend;
                    var d, h;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"),
                        (e[(e.signData = 2)] = "signData"),
                        (e[(e.dataType = 3)] = "dataType"),
                        (e[(e.chainId = 4)] = "chainId"),
                        (e[(e.derivationPath = 5)] = "derivationPath"),
                        (e[(e.address = 6)] = "address"),
                        (e[(e.origin = 7)] = "origin");
                    })(d || (d = {})),
                      ((h = r.DataType || (r.DataType = {}))[(h.transaction = 1)] = "transaction"),
                      (h[(h.typedData = 2)] = "typedData"),
                      (h[(h.personalMessage = 3)] = "personalMessage"),
                      (h[(h.typedTransaction = 4)] = "typedTransaction");
                    class p extends s.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGN_REQUEST),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignData = () => this.signData),
                          (this.getDataType = () => this.dataType),
                          (this.getChainId = () => this.chainId),
                          (this.getDerivationPath = () => this.derivationPath.getPath()),
                          (this.getSourceFingerprint = () => this.derivationPath.getSourceFingerprint()),
                          (this.getSignRequestAddress = () => this.address),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            this.requestId && (e[d.requestId] = new s.DataItem(this.requestId, l.UUID.getTag())),
                              this.address && (e[d.address] = this.address),
                              this.chainId && (e[d.chainId] = Number(this.chainId)),
                              this.origin && (e[d.origin] = this.origin),
                              (e[d.signData] = this.signData),
                              (e[d.dataType] = this.dataType);
                            const t = this.derivationPath.toDataItem();
                            return t.setTag(this.derivationPath.getRegistryType().getTag()), (e[d.derivationPath] = t), new s.DataItem(e);
                          }),
                          (this.requestId = e.requestId),
                          (this.signData = e.signData),
                          (this.dataType = e.dataType),
                          (this.chainId = e.chainId),
                          (this.derivationPath = e.derivationPath),
                          (this.address = e.address),
                          (this.origin = e.origin);
                      }
                      static constructETHRequest(e, r, n, o, a, c, u, l) {
                        const d = n.replace(/[m|M]\//, "").split("/"),
                          h = new s.CryptoKeypath(
                            d.map((e) => {
                              const t = parseInt(e.replace("'", ""));
                              let r = !1;
                              return e.endsWith("'") && (r = !0), new s.PathComponent({ index: t, hardened: r });
                            }),
                            t.from(o, "hex")
                          );
                        return new p({
                          requestId: a ? t.from(i.parse(a)) : undefined,
                          signData: e,
                          dataType: r,
                          derivationPath: h,
                          chainId: c,
                          address: u ? t.from(u.replace("0x", ""), "hex") : undefined,
                          origin: l || undefined
                        });
                      }
                    }
                    (p.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[d.signData],
                        n = t[d.dataType],
                        i = s.CryptoKeypath.fromDataItem(t[d.derivationPath]),
                        o = t[d.chainId] ? t[d.chainId] : undefined,
                        a = t[d.address] ? t[d.address] : undefined,
                        c = t[d.requestId] ? t[d.requestId].getData() : undefined,
                        u = t[d.origin] ? t[d.origin] : undefined;
                      return new p({ requestId: c, signData: r, dataType: n, chainId: o, derivationPath: i, address: a, origin: u });
                    }),
                      (p.fromCBOR = (e) => {
                        const t = u(e);
                        return p.fromDataItem(t);
                      });
                    const { RegistryTypes: f, decodeToDataItem: y } = s.extend;
                    var g;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"), (e[(e.signature = 2)] = "signature"), (e[(e.origin = 3)] = "origin");
                    })(g || (g = {}));
                    class m extends s.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGNATURE),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignature = () => this.signature),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.requestId && (e[g.requestId] = new s.DataItem(this.requestId, f.UUID.getTag())),
                              this.origin && (e[g.origin] = this.origin),
                              (e[g.signature] = this.signature),
                              new s.DataItem(e)
                            );
                          }),
                          (this.signature = e),
                          (this.requestId = t),
                          (this.origin = r);
                      }
                    }
                    (m.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[g.signature],
                        n = t[g.requestId] ? t[g.requestId].getData() : undefined;
                      return new m(r, n, t[g.origin]);
                    }),
                      (m.fromCBOR = (e) => {
                        const t = y(e);
                        return m.fromDataItem(t);
                      });
                    const { decodeToDataItem: b } = s.extend;
                    var v;
                    !(function (e) {
                      (e[(e.chainId = 1)] = "chainId"),
                        (e[(e.contractAddress = 2)] = "contractAddress"),
                        (e[(e.contractName = 3)] = "contractName"),
                        (e[(e.name = 4)] = "name"),
                        (e[(e.mediaData = 5)] = "mediaData");
                    })(v || (v = {}));
                    class T extends s.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_NFT_ITEM),
                          (this.getChainId = () => this.chainId),
                          (this.getName = () => this.name),
                          (this.getmediaData = () => this.mediaData),
                          (this.getContractAddress = () => this.contractAddress),
                          (this.getContractName = () => this.contractName),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              (e[v.chainId] = this.chainId),
                              (e[v.name] = this.name),
                              (e[v.contractAddress] = this.contractAddress),
                              (e[v.contractName] = this.contractName),
                              (e[v.mediaData] = this.mediaData),
                              new s.DataItem(e)
                            );
                          }),
                          (this.chainId = e.chainId),
                          (this.name = e.name),
                          (this.contractAddress = e.contractAddress),
                          (this.contractName = e.contractName),
                          (this.mediaData = e.mediaData);
                      }
                      static constructETHNFTItem(e, t, r, n, s) {
                        return new T({ chainId: e, contractAddress: t, contractName: r, mediaData: s, name: n });
                      }
                    }
                    (T.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[v.chainId],
                        n = t[v.name],
                        s = t[v.mediaData],
                        i = t[v.contractAddress],
                        o = t[v.contractName];
                      return new T({ chainId: r, name: n, contractAddress: i, contractName: o, mediaData: s });
                    }),
                      (T.fromCBOR = (e) => {
                        const t = b(e);
                        return T.fromDataItem(t);
                      });
                    const w = (e, t) => {
                      const r = o.fromExtendedKey(e).derive(t),
                        n = "0x" + a.publicToAddress(r.publicKey, !0).toString("hex");
                      return a.toChecksumAddress(n);
                    };
                    s.patchTags(
                      Object.values(c)
                        .filter((e) => !!e.getTag())
                        .map((e) => e.getTag())
                    ),
                      Object.keys(s).forEach(function (e) {
                        "default" !== e &&
                          Object.defineProperty(r, e, {
                            enumerable: !0,
                            get: function () {
                              return s[e];
                            }
                          });
                      }),
                      (r.ETHNFTItem = T),
                      (r.ETHSignature = m),
                      (r.EthSignRequest = p),
                      (r.findHDPathFromAddress = (e, t, r, n) => {
                        for (let s = 0; s < r; s++) {
                          const r = w(t, `M/0/${s}`);
                          if (e.toLowerCase() == r.toLowerCase()) return `${n}/0/${s}`;
                        }
                        return null;
                      }),
                      (r.generateAddressFromXpub = w);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth",
        file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/bc-ur-registry-eth.cjs.development.js"
      }
    ],
    [
      519,
      { "@ethereumjs/util": 392, "@keystonehq/bc-ur-registry": 537, buffer: 2392, hdkey: 3060, uuid: 3902 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      s = e("@keystonehq/bc-ur-registry"),
                      i = e("uuid"),
                      o = (n = e("hdkey")) && "object" == typeof n && "default" in n ? n.default : n,
                      a = e("@ethereumjs/util");
                    const c = {
                        ETH_SIGN_REQUEST: new s.RegistryType("eth-sign-request", 401),
                        ETH_SIGNATURE: new s.RegistryType("eth-signature", 402),
                        ETH_NFT_ITEM: new s.RegistryType("eth-nft-item", 403)
                      },
                      { decodeToDataItem: u, RegistryTypes: l } = s.extend;
                    var d, h;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"),
                        (e[(e.signData = 2)] = "signData"),
                        (e[(e.dataType = 3)] = "dataType"),
                        (e[(e.chainId = 4)] = "chainId"),
                        (e[(e.derivationPath = 5)] = "derivationPath"),
                        (e[(e.address = 6)] = "address"),
                        (e[(e.origin = 7)] = "origin");
                    })(d || (d = {})),
                      ((h = r.DataType || (r.DataType = {}))[(h.transaction = 1)] = "transaction"),
                      (h[(h.typedData = 2)] = "typedData"),
                      (h[(h.personalMessage = 3)] = "personalMessage"),
                      (h[(h.typedTransaction = 4)] = "typedTransaction");
                    class p extends s.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGN_REQUEST),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignData = () => this.signData),
                          (this.getDataType = () => this.dataType),
                          (this.getChainId = () => this.chainId),
                          (this.getDerivationPath = () => this.derivationPath.getPath()),
                          (this.getSourceFingerprint = () => this.derivationPath.getSourceFingerprint()),
                          (this.getSignRequestAddress = () => this.address),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            this.requestId && (e[d.requestId] = new s.DataItem(this.requestId, l.UUID.getTag())),
                              this.address && (e[d.address] = this.address),
                              this.chainId && (e[d.chainId] = Number(this.chainId)),
                              this.origin && (e[d.origin] = this.origin),
                              (e[d.signData] = this.signData),
                              (e[d.dataType] = this.dataType);
                            const t = this.derivationPath.toDataItem();
                            return t.setTag(this.derivationPath.getRegistryType().getTag()), (e[d.derivationPath] = t), new s.DataItem(e);
                          }),
                          (this.requestId = e.requestId),
                          (this.signData = e.signData),
                          (this.dataType = e.dataType),
                          (this.chainId = e.chainId),
                          (this.derivationPath = e.derivationPath),
                          (this.address = e.address),
                          (this.origin = e.origin);
                      }
                      static constructETHRequest(e, r, n, o, a, c, u, l) {
                        const d = n.replace(/[m|M]\//, "").split("/"),
                          h = new s.CryptoKeypath(
                            d.map((e) => {
                              const t = parseInt(e.replace("'", ""));
                              let r = !1;
                              return e.endsWith("'") && (r = !0), new s.PathComponent({ index: t, hardened: r });
                            }),
                            t.from(o, "hex")
                          );
                        return new p({
                          requestId: a ? t.from(i.parse(a)) : void 0,
                          signData: e,
                          dataType: r,
                          derivationPath: h,
                          chainId: c,
                          address: u ? t.from(u.replace("0x", ""), "hex") : void 0,
                          origin: l || void 0
                        });
                      }
                    }
                    (p.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[d.signData],
                        n = t[d.dataType],
                        i = s.CryptoKeypath.fromDataItem(t[d.derivationPath]),
                        o = t[d.chainId] ? t[d.chainId] : void 0,
                        a = t[d.address] ? t[d.address] : void 0,
                        c = t[d.requestId] ? t[d.requestId].getData() : void 0;
                      return new p({
                        requestId: c,
                        signData: r,
                        dataType: n,
                        chainId: o,
                        derivationPath: i,
                        address: a,
                        origin: t[d.origin] ? t[d.origin] : void 0
                      });
                    }),
                      (p.fromCBOR = (e) => {
                        const t = u(e);
                        return p.fromDataItem(t);
                      });
                    const { RegistryTypes: f, decodeToDataItem: y } = s.extend;
                    var g;
                    !(function (e) {
                      (e[(e.requestId = 1)] = "requestId"), (e[(e.signature = 2)] = "signature"), (e[(e.origin = 3)] = "origin");
                    })(g || (g = {}));
                    class m extends s.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.getRegistryType = () => c.ETH_SIGNATURE),
                          (this.getRequestId = () => this.requestId),
                          (this.getSignature = () => this.signature),
                          (this.getOrigin = () => this.origin),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.requestId && (e[g.requestId] = new s.DataItem(this.requestId, f.UUID.getTag())),
                              this.origin && (e[g.origin] = this.origin),
                              (e[g.signature] = this.signature),
                              new s.DataItem(e)
                            );
                          }),
                          (this.signature = e),
                          (this.requestId = t),
                          (this.origin = r);
                      }
                    }
                    (m.fromDataItem = (e) => {
                      const t = e.getData(),
                        r = t[g.signature],
                        n = t[g.requestId] ? t[g.requestId].getData() : void 0;
                      return new m(r, n, t[g.origin]);
                    }),
                      (m.fromCBOR = (e) => {
                        const t = y(e);
                        return m.fromDataItem(t);
                      });
                    const { decodeToDataItem: b } = s.extend;
                    var v;
                    !(function (e) {
                      (e[(e.chainId = 1)] = "chainId"),
                        (e[(e.contractAddress = 2)] = "contractAddress"),
                        (e[(e.contractName = 3)] = "contractName"),
                        (e[(e.name = 4)] = "name"),
                        (e[(e.mediaData = 5)] = "mediaData");
                    })(v || (v = {}));
                    class T extends s.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.getRegistryType = () => c.ETH_NFT_ITEM),
                          (this.getChainId = () => this.chainId),
                          (this.getName = () => this.name),
                          (this.getmediaData = () => this.mediaData),
                          (this.getContractAddress = () => this.contractAddress),
                          (this.getContractName = () => this.contractName),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              (e[v.chainId] = this.chainId),
                              (e[v.name] = this.name),
                              (e[v.contractAddress] = this.contractAddress),
                              (e[v.contractName] = this.contractName),
                              (e[v.mediaData] = this.mediaData),
                              new s.DataItem(e)
                            );
                          }),
                          (this.chainId = e.chainId),
                          (this.name = e.name),
                          (this.contractAddress = e.contractAddress),
                          (this.contractName = e.contractName),
                          (this.mediaData = e.mediaData);
                      }
                      static constructETHNFTItem(e, t, r, n, s) {
                        return new T({ chainId: e, contractAddress: t, contractName: r, mediaData: s, name: n });
                      }
                    }
                    (T.fromDataItem = (e) => {
                      const t = e.getData();
                      return new T({
                        chainId: t[v.chainId],
                        name: t[v.name],
                        contractAddress: t[v.contractAddress],
                        contractName: t[v.contractName],
                        mediaData: t[v.mediaData]
                      });
                    }),
                      (T.fromCBOR = (e) => {
                        const t = b(e);
                        return T.fromDataItem(t);
                      });
                    const w = (e, t) => {
                      const r = o.fromExtendedKey(e).derive(t),
                        n = "0x" + a.publicToAddress(r.publicKey, !0).toString("hex");
                      return a.toChecksumAddress(n);
                    };
                    s.patchTags(
                      Object.values(c)
                        .filter((e) => !!e.getTag())
                        .map((e) => e.getTag())
                    ),
                      Object.keys(s).forEach(function (e) {
                        "default" !== e &&
                          Object.defineProperty(r, e, {
                            enumerable: !0,
                            get: function () {
                              return s[e];
                            }
                          });
                      }),
                      (r.ETHNFTItem = T),
                      (r.ETHSignature = m),
                      (r.EthSignRequest = p),
                      (r.findHDPathFromAddress = (e, t, r, n) => {
                        for (let s = 0; s < r; s++) {
                          const r = w(t, "M/0/" + s);
                          if (e.toLowerCase() == r.toLowerCase()) return `${n}/0/${s}`;
                        }
                        return null;
                      }),
                      (r.generateAddressFromXpub = w);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth",
        file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/bc-ur-registry-eth.cjs.production.min.js"
      }
    ],
    [
      520,
      { "./bc-ur-registry-eth.cjs.development.js": 518, "./bc-ur-registry-eth.cjs.production.min.js": 519 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = e("./bc-ur-registry-eth.cjs.production.min.js");
              };
            };
      },
      { package: "@keystonehq/bc-ur-registry-eth", file: "node_modules/@keystonehq/bc-ur-registry-eth/dist/index.js" }
    ],
    [
      521,
      { "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Bytes = void 0);
                const n = e("./lib"),
                  s = e("./RegistryItem"),
                  i = e("./RegistryType");
                class o extends s.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.bytes = e),
                      (this.getRegistryType = () => i.RegistryTypes.BYTES),
                      (this.getData = () => this.bytes),
                      (this.toDataItem = () => new n.DataItem(this.bytes));
                  }
                }
                (r.Bytes = o),
                  (o.fromDataItem = (e) => {
                    const t = e.getData();
                    if (!t) throw new Error(`#[ur-registry][Bytes][fn.fromDataItem]: decoded [dataItem][#data] is undefined: ${e}`);
                    return new o(t);
                  }),
                  (o.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return o.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/Bytes.js"
      }
    ],
    [
      522,
      { ".": 537, "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540, buffer: 2392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoAccount = void 0);
                    const n = e("."),
                      s = e("./lib"),
                      i = e("./RegistryItem"),
                      o = e("./RegistryType");
                    var a;
                    !(function (e) {
                      (e[(e.masterFingerprint = 1)] = "masterFingerprint"), (e[(e.outputDescriptors = 2)] = "outputDescriptors");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e, t) {
                        super(),
                          (this.masterFingerprint = e),
                          (this.outputDescriptors = t),
                          (this.getRegistryType = () => o.RegistryTypes.CRYPTO_ACCOUNT),
                          (this.getMasterFingerprint = () => this.masterFingerprint),
                          (this.getOutputDescriptors = () => this.outputDescriptors),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.masterFingerprint && (e[a.masterFingerprint] = this.masterFingerprint.readUInt32BE(0)),
                              this.outputDescriptors && (e[a.outputDescriptors] = this.outputDescriptors.map((e) => e.toDataItem())),
                              new s.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoAccount = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          s = t.alloc(4),
                          i = r[a.masterFingerprint];
                        i && s.writeUInt32BE(i, 0);
                        const o = r[a.outputDescriptors].map((e) => n.CryptoOutput.fromDataItem(e));
                        return new c(s, o);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, s.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoAccount.js"
      }
    ],
    [
      523,
      { "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoCoinInfo = r.Network = r.Type = void 0);
                const n = e("./lib"),
                  s = e("./RegistryItem"),
                  i = e("./RegistryType");
                var o, a, c;
                !(function (e) {
                  (e.type = "1"), (e.network = "2");
                })(o || (o = {})),
                  (function (e) {
                    e[(e.bitcoin = 0)] = "bitcoin";
                  })((a = r.Type || (r.Type = {}))),
                  (function (e) {
                    (e[(e.mainnet = 0)] = "mainnet"), (e[(e.testnet = 1)] = "testnet");
                  })((c = r.Network || (r.Network = {})));
                class u extends s.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.type = e),
                      (this.network = t),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_COIN_INFO),
                      (this.getType = () => this.type || a.bitcoin),
                      (this.getNetwork = () => this.network || c.mainnet),
                      (this.toDataItem = () => {
                        const e = {};
                        return this.type && (e[o.type] = this.type), this.network && (e[o.network] = this.network), new n.DataItem(e);
                      });
                  }
                }
                (r.CryptoCoinInfo = u),
                  (u.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[o.type],
                      n = t[o.network];
                    return new u(r, n);
                  }),
                  (u.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return u.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoCoinInfo.js"
      }
    ],
    [
      524,
      { "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoECKey = void 0);
                const n = e("./lib"),
                  s = e("./RegistryItem"),
                  i = e("./RegistryType");
                var o;
                !(function (e) {
                  (e[(e.curve = 1)] = "curve"), (e[(e.private = 2)] = "private"), (e[(e.data = 3)] = "data");
                })(o || (o = {}));
                class a extends s.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.isECKey = () => !0),
                      (this.getCurve = () => this.curve || 0),
                      (this.isPrivateKey = () => this.privateKey || !1),
                      (this.getData = () => this.data),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_ECKEY),
                      (this.toDataItem = () => {
                        const e = {};
                        return (
                          this.curve && (e[o.curve] = this.curve),
                          this.privateKey !== undefined && (e[o.private] = this.privateKey),
                          (e[o.data] = this.data),
                          new n.DataItem(e)
                        );
                      }),
                      (this.getOutputDescriptorContent = () => this.data.toString("hex")),
                      (this.data = e.data),
                      (this.curve = e.curve),
                      (this.privateKey = e.privateKey || undefined);
                  }
                }
                (r.CryptoECKey = a),
                  (a.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[o.curve],
                      n = t[o.private],
                      s = t[o.data];
                    if (!s)
                      throw new Error(`#[ur-registry][CryptoECKey][fn.fromDataItem]: decoded [dataItem][#data.data] is undefined: ${e}`);
                    return new a({ data: s, curve: r, privateKey: n });
                  }),
                  (a.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return a.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoECKey.js"
      }
    ],
    [
      525,
      {
        "./CryptoCoinInfo": 523,
        "./CryptoKeypath": 526,
        "./RegistryItem": 532,
        "./RegistryType": 533,
        "./lib": 540,
        bs58check: 2396,
        buffer: 2392
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoHDKey = void 0);
                    const n = e("bs58check"),
                      s = e("./CryptoCoinInfo"),
                      i = e("./CryptoKeypath"),
                      o = e("./lib"),
                      a = e("./RegistryItem"),
                      c = e("./RegistryType");
                    var u;
                    !(function (e) {
                      (e[(e.is_master = 1)] = "is_master"),
                        (e[(e.is_private = 2)] = "is_private"),
                        (e[(e.key_data = 3)] = "key_data"),
                        (e[(e.chain_code = 4)] = "chain_code"),
                        (e[(e.use_info = 5)] = "use_info"),
                        (e[(e.origin = 6)] = "origin"),
                        (e[(e.children = 7)] = "children"),
                        (e[(e.parent_fingerprint = 8)] = "parent_fingerprint"),
                        (e[(e.name = 9)] = "name"),
                        (e[(e.note = 10)] = "note");
                    })(u || (u = {}));
                    class l extends a.RegistryItem {
                      constructor(e) {
                        super(),
                          (this.isECKey = () => !1),
                          (this.getKey = () => this.key),
                          (this.getChainCode = () => this.chainCode),
                          (this.isMaster = () => this.master),
                          (this.isPrivateKey = () => !!this.privateKey),
                          (this.getUseInfo = () => this.useInfo),
                          (this.getOrigin = () => this.origin),
                          (this.getChildren = () => this.children),
                          (this.getParentFingerprint = () => this.parentFingerprint),
                          (this.getName = () => this.name),
                          (this.getNote = () => this.note),
                          (this.getBip32Key = () => {
                            var e, r, s;
                            let i,
                              o,
                              a = 0,
                              c = t.alloc(4).fill(0);
                            if (this.isMaster()) (i = t.from("0488ADE4", "hex")), (o = 0), (a = 0);
                            else {
                              o =
                                (null === (e = this.getOrigin()) || void 0 === e ? void 0 : e.getComponents().length) ||
                                (null === (r = this.getOrigin()) || void 0 === r ? void 0 : r.getDepth());
                              const n = null === (s = this.getOrigin()) || void 0 === s ? void 0 : s.getComponents(),
                                u = n[n.length - 1];
                              u &&
                                ((a = u.isHardened() ? u.getIndex() + 2147483648 : u.getIndex()),
                                this.getParentFingerprint() && (c = this.getParentFingerprint())),
                                (i = this.isPrivateKey() ? t.from("0488ADE4", "hex") : t.from("0488B21E", "hex"));
                            }
                            const u = t.alloc(1);
                            u.writeUInt8(o, 0);
                            const l = t.alloc(4);
                            l.writeUInt32BE(a, 0);
                            const d = this.getChainCode(),
                              h = this.getKey();
                            return (0, n.encode)(t.concat([i, u, c, l, d, h]));
                          }),
                          (this.getRegistryType = () => c.RegistryTypes.CRYPTO_HDKEY),
                          (this.getOutputDescriptorContent = () => {
                            var e, t, r, n, s, i, o;
                            let a = "";
                            return (
                              this.getOrigin() &&
                                (null === (e = this.getOrigin()) || void 0 === e ? void 0 : e.getSourceFingerprint()) &&
                                (null === (t = this.getOrigin()) || void 0 === t ? void 0 : t.getPath()) &&
                                (a += `${
                                  null === (n = null === (r = this.getOrigin()) || void 0 === r ? void 0 : r.getSourceFingerprint()) ||
                                  void 0 === n
                                    ? void 0
                                    : n.toString("hex")
                                }/${null === (s = this.getOrigin()) || void 0 === s ? void 0 : s.getPath()}`),
                              (a += this.getBip32Key()),
                              this.getChildren() &&
                                (null === (i = this.getChildren()) || void 0 === i ? void 0 : i.getPath()) &&
                                (a += `/${null === (o = this.getChildren()) || void 0 === o ? void 0 : o.getPath()}`),
                              a
                            );
                          }),
                          (this.setupMasterKey = (e) => {
                            (this.master = !0), (this.key = e.key), (this.chainCode = e.chainCode);
                          }),
                          (this.setupDeriveKey = (e) => {
                            (this.master = !1),
                              (this.privateKey = e.isPrivateKey),
                              (this.key = e.key),
                              (this.chainCode = e.chainCode),
                              (this.useInfo = e.useInfo),
                              (this.origin = e.origin),
                              (this.children = e.children),
                              (this.parentFingerprint = e.parentFingerprint),
                              (this.name = e.name),
                              (this.note = e.note);
                          }),
                          (this.toDataItem = () => {
                            const e = {};
                            if (this.master) (e[u.is_master] = !0), (e[u.key_data] = this.key), (e[u.chain_code] = this.chainCode);
                            else {
                              if (
                                (this.privateKey !== undefined && (e[u.is_private] = this.privateKey),
                                (e[u.key_data] = this.key),
                                this.chainCode && (e[u.chain_code] = this.chainCode),
                                this.useInfo)
                              ) {
                                const t = this.useInfo.toDataItem();
                                t.setTag(this.useInfo.getRegistryType().getTag()), (e[u.use_info] = t);
                              }
                              if (this.origin) {
                                const t = this.origin.toDataItem();
                                t.setTag(this.origin.getRegistryType().getTag()), (e[u.origin] = t);
                              }
                              if (this.children) {
                                const t = this.children.toDataItem();
                                t.setTag(this.children.getRegistryType().getTag()), (e[u.children] = t);
                              }
                              this.parentFingerprint && (e[u.parent_fingerprint] = this.parentFingerprint.readUInt32BE(0)),
                                this.name !== undefined && (e[u.name] = this.name),
                                this.note !== undefined && (e[u.note] = this.note);
                            }
                            return new o.DataItem(e);
                          }),
                          e.isMaster ? this.setupMasterKey(e) : this.setupDeriveKey(e);
                      }
                    }
                    (r.CryptoHDKey = l),
                      (l.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = !!r[u.is_master],
                          o = r[u.is_private],
                          a = r[u.key_data],
                          c = r[u.chain_code],
                          d = r[u.use_info] ? s.CryptoCoinInfo.fromDataItem(r[u.use_info]) : undefined,
                          h = r[u.origin] ? i.CryptoKeypath.fromDataItem(r[u.origin]) : undefined,
                          p = r[u.children] ? i.CryptoKeypath.fromDataItem(r[u.children]) : undefined,
                          f = r[u.parent_fingerprint];
                        let y = undefined;
                        f && ((y = t.alloc(4)), y.writeUInt32BE(f, 0));
                        const g = r[u.name],
                          m = r[u.note];
                        return new l({
                          isMaster: n,
                          isPrivateKey: o,
                          key: a,
                          chainCode: c,
                          useInfo: d,
                          origin: h,
                          children: p,
                          parentFingerprint: y,
                          name: g,
                          note: m
                        });
                      }),
                      (l.fromCBOR = (e) => {
                        const t = (0, o.decodeToDataItem)(e);
                        return l.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoHDKey.js"
      }
    ],
    [
      526,
      { "./PathComponent": 531, "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540, buffer: 2392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoKeypath = void 0);
                    const n = e("./lib"),
                      s = e("./PathComponent"),
                      i = e("./RegistryItem"),
                      o = e("./RegistryType");
                    var a;
                    !(function (e) {
                      (e[(e.components = 1)] = "components"),
                        (e[(e.source_fingerprint = 2)] = "source_fingerprint"),
                        (e[(e.depth = 3)] = "depth");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e = [], t, r) {
                        super(),
                          (this.components = e),
                          (this.sourceFingerprint = t),
                          (this.depth = r),
                          (this.getRegistryType = () => o.RegistryTypes.CRYPTO_KEYPATH),
                          (this.getPath = () => {
                            if (0 === this.components.length) return undefined;
                            return this.components
                              .map((e) => `${e.isWildcard() ? "*" : e.getIndex()}${e.isHardened() ? "'" : ""}`)
                              .join("/");
                          }),
                          (this.getComponents = () => this.components),
                          (this.getSourceFingerprint = () => this.sourceFingerprint),
                          (this.getDepth = () => this.depth),
                          (this.toDataItem = () => {
                            const e = {},
                              t = [];
                            return (
                              this.components &&
                                this.components.forEach((e) => {
                                  e.isWildcard() ? t.push([]) : t.push(e.getIndex()), t.push(e.isHardened());
                                }),
                              (e[a.components] = t),
                              this.sourceFingerprint && (e[a.source_fingerprint] = this.sourceFingerprint.readUInt32BE(0)),
                              this.depth !== undefined && (e[a.depth] = this.depth),
                              new n.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoKeypath = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = [],
                          i = r[a.components];
                        if (i)
                          for (let e = 0; e < i.length; e += 2) {
                            const t = i[e + 1],
                              r = i[e];
                            "number" == typeof r
                              ? n.push(new s.PathComponent({ index: r, hardened: t }))
                              : n.push(new s.PathComponent({ hardened: t }));
                          }
                        const o = r[a.source_fingerprint];
                        let u;
                        o && ((u = t.alloc(4)), u.writeUInt32BE(o, 0));
                        const l = r[a.depth];
                        return new c(n, u, l);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, n.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoKeypath.js"
      }
    ],
    [
      527,
      {
        "./CryptoECKey": 524,
        "./CryptoHDKey": 525,
        "./MultiKey": 530,
        "./RegistryItem": 532,
        "./RegistryType": 533,
        "./ScriptExpression": 534,
        "./lib": 540
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoOutput = void 0);
                const n = e("./CryptoECKey"),
                  s = e("./CryptoHDKey"),
                  i = e("./lib"),
                  o = e("./MultiKey"),
                  a = e("./RegistryItem"),
                  c = e("./RegistryType"),
                  u = e("./ScriptExpression");
                class l extends a.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.scriptExpressions = e),
                      (this.cryptoKey = t),
                      (this.getRegistryType = () => c.RegistryTypes.CRYPTO_OUTPUT),
                      (this.getCryptoKey = () => this.cryptoKey),
                      (this.getHDKey = () => (this.cryptoKey instanceof s.CryptoHDKey ? this.cryptoKey : undefined)),
                      (this.getECKey = () => (this.cryptoKey instanceof n.CryptoECKey ? this.cryptoKey : undefined)),
                      (this.getMultiKey = () => (this.cryptoKey instanceof o.MultiKey ? this.cryptoKey : undefined)),
                      (this.getScriptExpressions = () => this.scriptExpressions),
                      (this._toOutputDescriptor = (e) =>
                        e >= this.scriptExpressions.length
                          ? this.cryptoKey.getOutputDescriptorContent()
                          : `${this.scriptExpressions[e].getExpression()}(${this._toOutputDescriptor(e + 1)})`),
                      (this.toString = () => this._toOutputDescriptor(0)),
                      (this.toDataItem = () => {
                        let e = this.cryptoKey.toDataItem();
                        (this.cryptoKey instanceof n.CryptoECKey || this.cryptoKey instanceof s.CryptoHDKey) &&
                          e.setTag(this.cryptoKey.getRegistryType().getTag());
                        return (
                          [...this.scriptExpressions].reverse().forEach((t) => {
                            const r = t.getTag();
                            e.getTag() === undefined ? e.setTag(r) : (e = new i.DataItem(e, r));
                          }),
                          e
                        );
                      });
                  }
                }
                (r.CryptoOutput = l),
                  (l.fromDataItem = (e) => {
                    const t = [];
                    let r = e;
                    for (;;) {
                      let e = r.getTag();
                      const n = u.ScriptExpression.fromTag(e);
                      if (!n) break;
                      if ((t.push(n), !(r.getData() instanceof i.DataItem))) break;
                      (r = r.getData()), (e = r.getTag());
                    }
                    const a = t.length;
                    if (
                      a > 0 &&
                      (t[a - 1].getExpression() === u.ScriptExpressions.MULTISIG.getExpression() ||
                        t[a - 1].getExpression() === u.ScriptExpressions.SORTED_MULTISIG.getExpression())
                    ) {
                      const e = o.MultiKey.fromDataItem(r);
                      return new l(t, e);
                    }
                    if (r.getTag() === c.RegistryTypes.CRYPTO_HDKEY.getTag()) {
                      const e = s.CryptoHDKey.fromDataItem(r);
                      return new l(t, e);
                    }
                    {
                      const e = n.CryptoECKey.fromDataItem(r);
                      return new l(t, e);
                    }
                  }),
                  (l.fromCBOR = (e) => {
                    const t = (0, i.decodeToDataItem)(e);
                    return l.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoOutput.js"
      }
    ],
    [
      528,
      { "./RegistryItem": 532, "./RegistryType": 533, "./lib": 540 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoPSBT = void 0);
                const n = e("./lib"),
                  s = e("./RegistryItem"),
                  i = e("./RegistryType");
                class o extends s.RegistryItem {
                  constructor(e) {
                    super(),
                      (this.psbt = e),
                      (this.getRegistryType = () => i.RegistryTypes.CRYPTO_PSBT),
                      (this.getPSBT = () => this.psbt),
                      (this.toDataItem = () => new n.DataItem(this.psbt));
                  }
                }
                (r.CryptoPSBT = o),
                  (o.fromDataItem = (e) => {
                    const t = e.getData();
                    if (!t) throw new Error(`#[ur-registry][CryptoPSBT][fn.fromDataItem]: decoded [dataItem][#data] is undefined: ${e}`);
                    return new o(t);
                  }),
                  (o.fromCBOR = (e) => {
                    const t = (0, n.decodeToDataItem)(e);
                    return o.fromDataItem(t);
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/CryptoPSBT.js"
      }
    ],
    [
      529,
      { "..": 537, "../RegistryType": 533, "../errors": 535, "@ngraveio/bc-ur": 1901 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.URRegistryDecoder = void 0);
                const n = e("@ngraveio/bc-ur"),
                  s = e(".."),
                  i = e("../RegistryType"),
                  o = e("../errors");
                class a extends n.URDecoder {
                  constructor() {
                    super(...arguments),
                      (this.resultRegistryType = () => {
                        const e = this.resultUR();
                        switch (e.type) {
                          case i.RegistryTypes.BYTES.getType():
                            return s.Bytes.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_HDKEY.getType():
                            return s.CryptoHDKey.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_KEYPATH.getType():
                            return s.CryptoKeypath.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_COIN_INFO.getType():
                            return s.CryptoCoinInfo.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_ECKEY.getType():
                            return s.CryptoECKey.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_OUTPUT.getType():
                            return s.CryptoOutput.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_PSBT.getType():
                            return s.CryptoPSBT.fromCBOR(e.cbor);
                          case i.RegistryTypes.CRYPTO_ACCOUNT.getType():
                            return s.CryptoAccount.fromCBOR(e.cbor);
                          default:
                            throw new o.UnknownURTypeError(
                              `#[ur-registry][Decoder][fn.resultRegistryType]: registry type ${e.type} is not supported now`
                            );
                        }
                      });
                  }
                }
                r.URRegistryDecoder = a;
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/Decoder/index.js"
      }
    ],
    [
      530,
      { "./CryptoECKey": 524, "./CryptoHDKey": 525, "./RegistryItem": 532, "./RegistryType": 533, "./lib/DataItem": 538 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.MultiKey = void 0);
                const n = e("./CryptoECKey"),
                  s = e("./CryptoHDKey"),
                  i = e("./lib/DataItem"),
                  o = e("./RegistryItem"),
                  a = e("./RegistryType");
                var c;
                !(function (e) {
                  (e[(e.threshold = 1)] = "threshold"), (e[(e.keys = 2)] = "keys");
                })(c || (c = {}));
                class u extends o.RegistryItem {
                  constructor(e, t) {
                    super(),
                      (this.threshold = e),
                      (this.keys = t),
                      (this.getThreshold = () => this.threshold),
                      (this.getKeys = () => this.keys),
                      (this.toDataItem = () => {
                        const e = {};
                        e[c.threshold] = this.threshold;
                        const t = this.keys.map((e) => {
                          const t = e.toDataItem();
                          return t.setTag(e.getRegistryType().getTag()), t;
                        });
                        return (e[c.keys] = t), new i.DataItem(e);
                      }),
                      (this.getOutputDescriptorContent = () =>
                        [this.getThreshold(), this.keys.map((e) => e.getOutputDescriptorContent()).join(",")].join(","));
                  }
                }
                (r.MultiKey = u),
                  (u.fromDataItem = (e) => {
                    const t = e.getData(),
                      r = t[c.threshold],
                      i = t[c.keys],
                      o = [];
                    return (
                      i.forEach((e) => {
                        e.getTag() === a.RegistryTypes.CRYPTO_HDKEY.getTag()
                          ? o.push(s.CryptoHDKey.fromDataItem(e))
                          : e.getTag() === a.RegistryTypes.CRYPTO_ECKEY.getTag() && o.push(n.CryptoECKey.fromDataItem(e));
                      }),
                      new u(r, o)
                    );
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/MultiKey.js"
      }
    ],
    [
      531,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.PathComponent = void 0);
                class n {
                  constructor(e) {
                    if (
                      ((this.getIndex = () => this.index),
                      (this.isWildcard = () => this.wildcard),
                      (this.isHardened = () => this.hardened),
                      (this.index = e.index),
                      (this.hardened = e.hardened),
                      this.index !== undefined ? (this.wildcard = !1) : (this.wildcard = !0),
                      this.index && 0 != (this.index & n.HARDENED_BIT))
                    )
                      throw new Error(
                        `#[ur-registry][PathComponent][fn.constructor]: Invalid index ${this.index} - most significant bit cannot be set`
                      );
                  }
                }
                (r.PathComponent = n), (n.HARDENED_BIT = 2147483648);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/PathComponent.js"
      }
    ],
    [
      532,
      { "./lib": 540, "@ngraveio/bc-ur": 1901 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.RegistryItem = void 0);
                const n = e("@ngraveio/bc-ur"),
                  s = e("./lib");
                r.RegistryItem = class {
                  constructor() {
                    (this.toCBOR = () => {
                      if (this.toDataItem() === undefined)
                        throw new Error(
                          `#[ur-registry][RegistryItem][fn.toCBOR]: registry ${this.getRegistryType()}'s method toDataItem returns undefined`
                        );
                      return (0, s.encodeDataItem)(this.toDataItem());
                    }),
                      (this.toUR = () => new n.UR(this.toCBOR(), this.getRegistryType().getType())),
                      (this.toUREncoder = (e, t, r) => {
                        const s = this.toUR();
                        return new n.UREncoder(s, e, t, r);
                      });
                  }
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/RegistryItem.js"
      }
    ],
    [
      533,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.RegistryTypes = r.RegistryType = void 0);
                class n {
                  constructor(e, t) {
                    (this.type = e), (this.tag = t), (this.getTag = () => this.tag), (this.getType = () => this.type);
                  }
                }
                (r.RegistryType = n),
                  (r.RegistryTypes = {
                    UUID: new n("uuid", 37),
                    BYTES: new n("bytes", undefined),
                    CRYPTO_HDKEY: new n("crypto-hdkey", 303),
                    CRYPTO_KEYPATH: new n("crypto-keypath", 304),
                    CRYPTO_COIN_INFO: new n("crypto-coin-info", 305),
                    CRYPTO_ECKEY: new n("crypto-eckey", 306),
                    CRYPTO_OUTPUT: new n("crypto-output", 308),
                    CRYPTO_PSBT: new n("crypto-psbt", 310),
                    CRYPTO_ACCOUNT: new n("crypto-account", 311),
                    CRYPTO_MULTI_ACCOUNTS: new n("crypto-multi-accounts", 1103)
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/RegistryType.js"
      }
    ],
    [
      534,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ScriptExpressions = r.ScriptExpression = void 0);
                class n {
                  constructor(e, t) {
                    (this.tag = e), (this.expression = t), (this.getTag = () => this.tag), (this.getExpression = () => this.expression);
                  }
                }
                (r.ScriptExpression = n),
                  (n.fromTag = (e) => Object.values(r.ScriptExpressions).find((t) => t.getTag() === e)),
                  (r.ScriptExpressions = {
                    SCRIPT_HASH: new n(400, "sh"),
                    WITNESS_SCRIPT_HASH: new n(401, "wsh"),
                    PUBLIC_KEY: new n(402, "pk"),
                    PUBLIC_KEY_HASH: new n(403, "pkh"),
                    WITNESS_PUBLIC_KEY_HASH: new n(404, "wpkh"),
                    COMBO: new n(405, "combo"),
                    MULTISIG: new n(406, "multi"),
                    SORTED_MULTISIG: new n(407, "sortedmulti"),
                    ADDRESS: new n(307, "addr"),
                    RAW_SCRIPT: new n(408, "raw")
                  });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/ScriptExpression.js"
      }
    ],
    [
      535,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.UnknownURTypeError = void 0);
                class n extends Error {
                  constructor(e) {
                    super(e);
                  }
                }
                r.UnknownURTypeError = n;
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/errors/index.js"
      }
    ],
    [
      536,
      { "../CryptoHDKey": 525, "../RegistryItem": 532, "../RegistryType": 533, "../lib": 540, buffer: 2392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.CryptoMultiAccounts = void 0);
                    const n = e("../RegistryType"),
                      s = e("../CryptoHDKey"),
                      i = e("../RegistryItem"),
                      o = e("../lib");
                    var a;
                    !(function (e) {
                      (e[(e.masterFingerprint = 1)] = "masterFingerprint"), (e[(e.keys = 2)] = "keys"), (e[(e.device = 3)] = "device");
                    })(a || (a = {}));
                    class c extends i.RegistryItem {
                      constructor(e, t, r) {
                        super(),
                          (this.masterFingerprint = e),
                          (this.keys = t),
                          (this.device = r),
                          (this.getRegistryType = () => n.RegistryTypes.CRYPTO_MULTI_ACCOUNTS),
                          (this.getMasterFingerprint = () => this.masterFingerprint),
                          (this.getKeys = () => this.keys),
                          (this.getDevice = () => this.device),
                          (this.toDataItem = () => {
                            const e = {};
                            return (
                              this.masterFingerprint && (e[a.masterFingerprint] = this.masterFingerprint.readUInt32BE(0)),
                              this.keys &&
                                (e[a.keys] = this.keys.map((e) => {
                                  const t = e.toDataItem();
                                  return t.setTag(e.getRegistryType().getTag()), t;
                                })),
                              this.device && (e[a.device] = this.device),
                              new o.DataItem(e)
                            );
                          });
                      }
                    }
                    (r.CryptoMultiAccounts = c),
                      (c.fromDataItem = (e) => {
                        const r = e.getData(),
                          n = t.alloc(4),
                          i = r[a.masterFingerprint];
                        i && n.writeUInt32BE(i, 0);
                        const o = r[a.keys].map((e) => s.CryptoHDKey.fromDataItem(e)),
                          u = r[a.device];
                        return new c(n, o, u);
                      }),
                      (c.fromCBOR = (e) => {
                        const t = (0, o.decodeToDataItem)(e);
                        return c.fromDataItem(t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/extended/CryptoMultiAccounts.js"
      }
    ],
    [
      537,
      {
        "./Bytes": 521,
        "./CryptoAccount": 522,
        "./CryptoCoinInfo": 523,
        "./CryptoECKey": 524,
        "./CryptoHDKey": 525,
        "./CryptoKeypath": 526,
        "./CryptoOutput": 527,
        "./CryptoPSBT": 528,
        "./Decoder": 529,
        "./MultiKey": 530,
        "./PathComponent": 531,
        "./RegistryItem": 532,
        "./RegistryType": 533,
        "./ScriptExpression": 534,
        "./errors": 535,
        "./extended/CryptoMultiAccounts": 536,
        "./lib": 540,
        "./patchCBOR": 541,
        "./types": 542,
        "./utils": 543,
        tslib: 3858
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.extend =
                    r.PathComponent =
                    r.ScriptExpressions =
                    r.MultiKey =
                    r.CryptoPSBT =
                    r.CryptoOutput =
                    r.CryptoECKey =
                    r.CryptoCoinInfoNetwork =
                    r.CryptoCoinInfoType =
                    r.CryptoCoinInfo =
                    r.CryptoKeypath =
                    r.CryptoMultiAccounts =
                    r.CryptoHDKey =
                    r.CryptoAccount =
                    r.Bytes =
                    r.URRegistryDecoder =
                    r.DataItem =
                      void 0);
                const n = e("tslib");
                e("./patchCBOR");
                const s = e("./CryptoHDKey");
                Object.defineProperty(r, "CryptoHDKey", {
                  enumerable: !0,
                  get: function () {
                    return s.CryptoHDKey;
                  }
                });
                const i = e("./CryptoKeypath");
                Object.defineProperty(r, "CryptoKeypath", {
                  enumerable: !0,
                  get: function () {
                    return i.CryptoKeypath;
                  }
                });
                const o = e("./CryptoCoinInfo");
                Object.defineProperty(r, "CryptoCoinInfo", {
                  enumerable: !0,
                  get: function () {
                    return o.CryptoCoinInfo;
                  }
                }),
                  Object.defineProperty(r, "CryptoCoinInfoType", {
                    enumerable: !0,
                    get: function () {
                      return o.Type;
                    }
                  }),
                  Object.defineProperty(r, "CryptoCoinInfoNetwork", {
                    enumerable: !0,
                    get: function () {
                      return o.Network;
                    }
                  });
                const a = e("./CryptoECKey");
                Object.defineProperty(r, "CryptoECKey", {
                  enumerable: !0,
                  get: function () {
                    return a.CryptoECKey;
                  }
                });
                const c = e("./Bytes");
                Object.defineProperty(r, "Bytes", {
                  enumerable: !0,
                  get: function () {
                    return c.Bytes;
                  }
                });
                const u = e("./CryptoOutput");
                Object.defineProperty(r, "CryptoOutput", {
                  enumerable: !0,
                  get: function () {
                    return u.CryptoOutput;
                  }
                });
                const l = e("./CryptoPSBT");
                Object.defineProperty(r, "CryptoPSBT", {
                  enumerable: !0,
                  get: function () {
                    return l.CryptoPSBT;
                  }
                });
                const d = e("./CryptoAccount");
                Object.defineProperty(r, "CryptoAccount", {
                  enumerable: !0,
                  get: function () {
                    return d.CryptoAccount;
                  }
                });
                const h = e("./Decoder");
                Object.defineProperty(r, "URRegistryDecoder", {
                  enumerable: !0,
                  get: function () {
                    return h.URRegistryDecoder;
                  }
                });
                const p = e("./MultiKey");
                Object.defineProperty(r, "MultiKey", {
                  enumerable: !0,
                  get: function () {
                    return p.MultiKey;
                  }
                });
                const f = e("./ScriptExpression");
                Object.defineProperty(r, "ScriptExpressions", {
                  enumerable: !0,
                  get: function () {
                    return f.ScriptExpressions;
                  }
                });
                const y = e("./PathComponent");
                Object.defineProperty(r, "PathComponent", {
                  enumerable: !0,
                  get: function () {
                    return y.PathComponent;
                  }
                });
                const g = e("./RegistryItem"),
                  m = e("./RegistryType"),
                  b = e("./lib");
                var v = e("./lib");
                Object.defineProperty(r, "DataItem", {
                  enumerable: !0,
                  get: function () {
                    return v.DataItem;
                  }
                });
                const T = e("./utils"),
                  w = e("./extended/CryptoMultiAccounts");
                Object.defineProperty(r, "CryptoMultiAccounts", {
                  enumerable: !0,
                  get: function () {
                    return w.CryptoMultiAccounts;
                  }
                });
                const k = {
                    URRegistryDecoder: h.URRegistryDecoder,
                    Bytes: c.Bytes,
                    CryptoAccount: d.CryptoAccount,
                    CryptoHDKey: s.CryptoHDKey,
                    CryptoMultiAccounts: w.CryptoMultiAccounts,
                    CryptoKeypath: i.CryptoKeypath,
                    CryptoCoinInfo: o.CryptoCoinInfo,
                    CryptoCoinInfoType: o.Type,
                    CryptoCoinInfoNetwork: o.Network,
                    CryptoECKey: a.CryptoECKey,
                    CryptoOutput: u.CryptoOutput,
                    CryptoPSBT: l.CryptoPSBT,
                    MultiKey: p.MultiKey,
                    ScriptExpressions: f.ScriptExpressions,
                    PathComponent: y.PathComponent
                  },
                  I = {
                    addReader: b.addReader,
                    addSemanticDecode: b.addSemanticDecode,
                    addSemanticEncode: b.addSemanticEncode,
                    addWriter: b.addWriter,
                    patchTags: T.patchTags
                  },
                  C = {
                    RegistryTypes: m.RegistryTypes,
                    RegistryItem: g.RegistryItem,
                    RegistryType: m.RegistryType,
                    decodeToDataItem: b.decodeToDataItem,
                    encodeDataItem: b.encodeDataItem,
                    cbor: I
                  };
                (r.extend = C),
                  (0, n.__exportStar)(e("./errors"), r),
                  (0, n.__exportStar)(e("./Decoder"), r),
                  (0, n.__exportStar)(e("./lib"), r),
                  (0, n.__exportStar)(e("./CryptoAccount"), r),
                  (0, n.__exportStar)(e("./CryptoPSBT"), r),
                  (0, n.__exportStar)(e("./CryptoHDKey"), r),
                  (0, n.__exportStar)(e("./extended/CryptoMultiAccounts"), r),
                  (0, n.__exportStar)(e("./CryptoOutput"), r),
                  (0, n.__exportStar)(e("./CryptoCoinInfo"), r),
                  (0, n.__exportStar)(e("./CryptoECKey"), r),
                  (0, n.__exportStar)(e("./MultiKey"), r),
                  (0, n.__exportStar)(e("./CryptoKeypath"), r),
                  (0, n.__exportStar)(e("./patchCBOR"), r),
                  (0, n.__exportStar)(e("./PathComponent"), r),
                  (0, n.__exportStar)(e("./RegistryItem"), r),
                  (0, n.__exportStar)(e("./RegistryType"), r),
                  (0, n.__exportStar)(e("./types"), r),
                  (0, n.__exportStar)(e("./utils"), r),
                  (r.default = k);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/index.js"
      }
    ],
    [
      538,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.DataItem = void 0);
                r.DataItem = class {
                  constructor(e, t) {
                    (this.setTag = (e) => {
                      this.tag = e;
                    }),
                      (this.clearTag = () => {
                        this.tag = undefined;
                      }),
                      (this.getTag = () => this.tag),
                      (this.getData = () => this.data),
                      (this.data = e),
                      (this.tag = t);
                  }
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/DataItem.js"
      }
    ],
    [
      539,
      { "./DataItem": 538, buffer: 2392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (r) {
                  (function () {
                    var n, s;
                    (n = this),
                      (s = function () {
                        const { DataItem: t } = e("./DataItem");
                        var n = (function () {
                          function e(e) {
                            this.$hex = e;
                          }
                          (e.prototype = {
                            length: function () {
                              return this.$hex.length / 2;
                            },
                            toString: function (e) {
                              if (!e || "hex" === e || 16 === e) return this.$hex;
                              if ("utf-8" === e) {
                                for (var t = "", r = 0; r < this.$hex.length; r += 2) t += "%" + this.$hex.substring(r, r + 2);
                                return decodeURIComponent(t);
                              }
                              if ("latin" === e) {
                                for (t = [], r = 0; r < this.$hex.length; r += 2) t.push(parseInt(this.$hex.substring(r, r + 2), 16));
                                return String.fromCharCode.apply(String, t);
                              }
                              throw new Error("Unrecognised format: " + e);
                            }
                          }),
                            (e.fromLatinString = function (t) {
                              for (var r = "", n = 0; n < t.length; n++) {
                                var s = t.charCodeAt(n).toString(16);
                                1 === s.length && (s = "0" + s), (r += s);
                              }
                              return new e(r);
                            }),
                            (e.fromUtf8String = function (t) {
                              for (var r = encodeURIComponent(t), n = "", s = 0; s < r.length; s++)
                                if ("%" === r.charAt(s)) (n += r.substring(s + 1, s + 3)), (s += 2);
                                else {
                                  var i = r.charCodeAt(s).toString(16);
                                  i.length < 2 && (i = "0" + i), (n += i);
                                }
                              return new e(n);
                            });
                          var n = [],
                            s = {},
                            i = function (e) {
                              return function () {
                                throw new Error(e + " not implemented");
                              };
                            };
                          function o() {}
                          function a() {}
                          function c(e, t) {
                            var r = e.value;
                            return r < 24
                              ? r
                              : 24 == r
                              ? t.readByte()
                              : 25 == r
                              ? t.readUint16()
                              : 26 == r
                              ? t.readUint32()
                              : 27 == r
                              ? t.readUint64()
                              : 31 == r
                              ? null
                              : void i("Additional info: " + r)();
                          }
                          function u(e, t, r) {
                            var n = e << 5;
                            t < 24
                              ? r.writeByte(n | t)
                              : t < 256
                              ? (r.writeByte(24 | n), r.writeByte(t))
                              : t < 65536
                              ? (r.writeByte(25 | n), r.writeUint16(t))
                              : t < 4294967296
                              ? (r.writeByte(26 | n), r.writeUint32(t))
                              : (r.writeByte(27 | n), r.writeUint64(t));
                          }
                          (o.prototype = {
                            peekByte: i("peekByte"),
                            readByte: i("readByte"),
                            readChunk: i("readChunk"),
                            readFloat16: function () {
                              var e = this.readUint16(),
                                t = (32767 & e) >> 10,
                                r = 1023 & e,
                                n = 32768 & e;
                              if (31 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                              var s = t ? Math.pow(2, t - 25) * (1024 + r) : Math.pow(2, -24) * r;
                              return n ? -s : s;
                            },
                            readFloat32: function () {
                              var e = this.readUint32(),
                                t = (2147483647 & e) >> 23,
                                r = 8388607 & e,
                                n = 2147483648 & e;
                              if (255 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                              var s = t ? Math.pow(2, t - 23 - 127) * (8388608 + r) : Math.pow(2, -149) * r;
                              return n ? -s : s;
                            },
                            readFloat64: function () {
                              var e = this.readUint32(),
                                t = (e >> 20) & 2047,
                                r = 4294967296 * (1048575 & e) + this.readUint32(),
                                n = 2147483648 & e;
                              if (2047 === t) return 0 === r ? (n ? -Infinity : Infinity) : NaN;
                              var s = t ? Math.pow(2, t - 52 - 1023) * (4503599627370496 + r) : Math.pow(2, -1074) * r;
                              return n ? -s : s;
                            },
                            readUint16: function () {
                              return 256 * this.readByte() + this.readByte();
                            },
                            readUint32: function () {
                              return 65536 * this.readUint16() + this.readUint16();
                            },
                            readUint64: function () {
                              return 4294967296 * this.readUint32() + this.readUint32();
                            }
                          }),
                            (a.prototype = {
                              writeByte: i("writeByte"),
                              result: i("result"),
                              writeFloat16: i("writeFloat16"),
                              writeFloat32: i("writeFloat32"),
                              writeFloat64: i("writeFloat64"),
                              writeUint16: function (e) {
                                this.writeByte((e >> 8) & 255), this.writeByte(255 & e);
                              },
                              writeUint32: function (e) {
                                this.writeUint16((e >> 16) & 65535), this.writeUint16(65535 & e);
                              },
                              writeUint64: function (e) {
                                if (e >= 9007199254740992 || e <= -9007199254740992)
                                  throw new Error("Cannot encode Uint64 of: " + e + " magnitude to big (floating point errors)");
                                this.writeUint32(Math.floor(e / 4294967296)), this.writeUint32(e % 4294967296);
                              },
                              writeString: i("writeString"),
                              canWriteBinary: function (e) {
                                return !1;
                              },
                              writeBinary: i("writeChunk")
                            });
                          var l = new Error();
                          function d(e) {
                            var t = (function (e) {
                              var t = e.readByte();
                              return { type: t >> 5, value: 31 & t };
                            })(e);
                            switch (t.type) {
                              case 0:
                                return c(t, e);
                              case 1:
                                return -1 - c(t, e);
                              case 2:
                                return e.readChunk(c(t, e));
                              case 3:
                                return e.readChunk(c(t, e)).toString("utf-8");
                              case 4:
                              case 5:
                                var r = c(t, e),
                                  n = [];
                                if (null !== r) {
                                  5 === t.type && (r *= 2);
                                  for (var i = 0; i < r; i++) n[i] = d(e);
                                } else for (var o; (o = d(e)) !== l; ) n.push(o);
                                if (5 === t.type) {
                                  var a = {};
                                  for (i = 0; i < n.length; i += 2) a[n[i]] = n[i + 1];
                                  return a;
                                }
                                return n;
                              case 6:
                                var u = c(t, e),
                                  h = s[u];
                                return (n = d(e)), h ? h(n) : n;
                              case 7:
                                if (25 === t.value) return e.readFloat16();
                                if (26 === t.value) return e.readFloat32();
                                if (27 === t.value) return e.readFloat64();
                                switch (c(t, e)) {
                                  case 20:
                                    return !1;
                                  case 21:
                                    return !0;
                                  case 22:
                                    return null;
                                  case 23:
                                    return undefined;
                                  case null:
                                    return l;
                                  default:
                                    throw new Error("Unknown fixed value: " + t.value);
                                }
                              default:
                                throw new Error("Unsupported header: " + JSON.stringify(t));
                            }
                            throw new Error("not implemented yet");
                          }
                          function h(e, t) {
                            for (var r = 0; r < n.length; r++) {
                              var s = n[r].fn(e);
                              if (s !== undefined) return u(6, n[r].tag, t), h(s, t);
                            }
                            if ((e && "function" == typeof e.toCBOR && (e = e.toCBOR()), !1 === e)) u(7, 20, t);
                            else if (!0 === e) u(7, 21, t);
                            else if (null === e) u(7, 22, t);
                            else if (e === undefined) u(7, 23, t);
                            else if ("number" == typeof e)
                              Math.floor(e) === e && e < 9007199254740992 && e > -9007199254740992
                                ? e < 0
                                  ? u(1, -1 - e, t)
                                  : u(0, e, t)
                                : ((function (e, t, r) {
                                    r.writeByte((e << 5) | t);
                                  })(7, 27, t),
                                  t.writeFloat64(e));
                            else if ("string" == typeof e)
                              t.writeString(e, function (e) {
                                u(3, e, t);
                              });
                            else if (t.canWriteBinary(e))
                              t.writeBinary(e, function (e) {
                                u(2, e, t);
                              });
                            else {
                              if ("object" != typeof e) throw new Error("CBOR encoding not supported: " + e);
                              if ((y.config.useToJSON && "function" == typeof e.toJSON && (e = e.toJSON()), Array.isArray(e)))
                                for (u(4, e.length, t), r = 0; r < e.length; r++) h(e[r], t);
                              else {
                                var i = Object.keys(e);
                                for (u(5, i.length, t), r = 0; r < i.length; r++) {
                                  const n = parseInt(i[r]);
                                  isNaN(n) ? (h(i[r], t), h(e[i[r]], t)) : (h(n, t), h(e[i[r]], t));
                                }
                              }
                            }
                          }
                          var p = [],
                            f = [],
                            y = {
                              config: { useToJSON: !0 },
                              addWriter: function (e, t) {
                                "string" == typeof e
                                  ? f.push(function (r) {
                                      if (e === r) return t(r);
                                    })
                                  : f.push(e);
                              },
                              addReader: function (e, t) {
                                "string" == typeof e
                                  ? p.push(function (r, n) {
                                      if (e === n) return t(r, n);
                                    })
                                  : p.push(e);
                              },
                              encode: function (e, t) {
                                for (var r = 0; r < f.length; r++) {
                                  var n = (0, f[r])(t);
                                  if (n) return h(e, n), n.result();
                                }
                                throw new Error("Unsupported output format: " + t);
                              },
                              encodeDataItem: function (e, t) {
                                for (var r = 0; r < f.length; r++) {
                                  var n = (0, f[r])(t);
                                  if (n) return e.getTag() !== undefined ? (h(e, n), n.result()) : (h(e.getData(), n), n.result());
                                }
                                throw new Error("Unsupported output format: " + t);
                              },
                              decode: function (e, t) {
                                for (var r = 0; r < p.length; r++) {
                                  var n = (0, p[r])(e, t);
                                  if (n) return d(n);
                                }
                                throw new Error("Unsupported input format: " + t);
                              },
                              decodeToDataItem: function (e, r) {
                                for (var n = 0; n < p.length; n++) {
                                  var s = (0, p[n])(e, r);
                                  if (s) {
                                    const e = d(s);
                                    return e instanceof t ? e : new t(e);
                                  }
                                }
                                throw new Error("Unsupported input format: " + r);
                              },
                              addSemanticEncode: function (e, t) {
                                if ("number" != typeof e || e % 1 != 0 || e < 0) throw new Error("Tag must be a positive integer");
                                return n.push({ tag: e, fn: t }), this;
                              },
                              addSemanticDecode: function (e, t) {
                                if ("number" != typeof e || e % 1 != 0 || e < 0) throw new Error("Tag must be a positive integer");
                                return (s[e] = t), this;
                              }
                            };
                          function g(e) {
                            (this.buffer = e), (this.pos = 0);
                          }
                          function m(e) {
                            (this.byteLength = 0),
                              (this.defaultBufferLength = 16384),
                              (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                              (this.latestBufferOffset = 0),
                              (this.completeBuffers = []),
                              (this.stringFormat = e);
                          }
                          function b(e) {
                            (this.hex = e), (this.pos = 0);
                          }
                          function v(e) {
                            (this.$hex = ""), (this.finalFormat = e || "hex");
                          }
                          return (
                            (g.prototype = Object.create(o.prototype)),
                            (g.prototype.peekByte = function () {
                              return this.buffer[this.pos];
                            }),
                            (g.prototype.readByte = function () {
                              return this.buffer[this.pos++];
                            }),
                            (g.prototype.readUint16 = function () {
                              var e = this.buffer.readUInt16BE(this.pos);
                              return (this.pos += 2), e;
                            }),
                            (g.prototype.readUint32 = function () {
                              var e = this.buffer.readUInt32BE(this.pos);
                              return (this.pos += 4), e;
                            }),
                            (g.prototype.readFloat32 = function () {
                              var e = this.buffer.readFloatBE(this.pos);
                              return (this.pos += 4), e;
                            }),
                            (g.prototype.readFloat64 = function () {
                              var e = this.buffer.readDoubleBE(this.pos);
                              return (this.pos += 8), e;
                            }),
                            (g.prototype.readChunk = function (e) {
                              var t = r.alloc(e);
                              return this.buffer.copy(t, 0, this.pos, (this.pos += e)), t;
                            }),
                            (m.prototype = Object.create(a.prototype)),
                            (m.prototype.writeByte = function (e) {
                              (this.latestBuffer[this.latestBufferOffset++] = e),
                                this.latestBufferOffset >= this.latestBuffer.length &&
                                  (this.completeBuffers.push(this.latestBuffer),
                                  (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                  (this.latestBufferOffset = 0)),
                                this.byteLength++;
                            }),
                            (m.prototype.writeFloat32 = function (e) {
                              var t = r.alloc(4);
                              t.writeFloatBE(e, 0), this.writeBuffer(t);
                            }),
                            (m.prototype.writeFloat64 = function (e) {
                              var t = r.alloc(8);
                              t.writeDoubleBE(e, 0), this.writeBuffer(t);
                            }),
                            (m.prototype.writeString = function (e, t) {
                              var n = r.from(e, "utf-8");
                              t(n.length), this.writeBuffer(n);
                            }),
                            (m.prototype.canWriteBinary = function (e) {
                              return e instanceof r;
                            }),
                            (m.prototype.writeBinary = function (e, t) {
                              t(e.length), this.writeBuffer(e);
                            }),
                            (m.prototype.writeBuffer = function (e) {
                              if (!(e instanceof r)) throw new TypeError("BufferWriter only accepts Buffers");
                              this.latestBufferOffset
                                ? this.latestBuffer.length - this.latestBufferOffset >= e.length
                                  ? (e.copy(this.latestBuffer, this.latestBufferOffset),
                                    (this.latestBufferOffset += e.length),
                                    this.latestBufferOffset >= this.latestBuffer.length &&
                                      (this.completeBuffers.push(this.latestBuffer),
                                      (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                      (this.latestBufferOffset = 0)))
                                  : (this.completeBuffers.push(this.latestBuffer.slice(0, this.latestBufferOffset)),
                                    this.completeBuffers.push(e),
                                    (this.latestBuffer = r.alloc(this.defaultBufferLength)),
                                    (this.latestBufferOffset = 0))
                                : this.completeBuffers.push(e),
                                (this.byteLength += e.length);
                            }),
                            (m.prototype.result = function () {
                              for (var e = r.alloc(this.byteLength), t = 0, n = 0; n < this.completeBuffers.length; n++) {
                                var s = this.completeBuffers[n];
                                s.copy(e, t, 0, s.length), (t += s.length);
                              }
                              return (
                                this.latestBufferOffset && this.latestBuffer.copy(e, t, 0, this.latestBufferOffset),
                                this.stringFormat ? e.toString(this.stringFormat) : e
                              );
                            }),
                            "function" == typeof r &&
                              (y.addReader(function (e, t) {
                                return r.isBuffer(e) ? new g(e) : "hex" === t || "base64" === t ? new g(r.from(e, t)) : void 0;
                              }),
                              y.addWriter(function (e) {
                                return e && "buffer" !== e ? ("hex" === e || "base64" === e ? new m(e) : void 0) : new m();
                              })),
                            (b.prototype = Object.create(o.prototype)),
                            (b.prototype.peekByte = function () {
                              var e = this.hex.substring(this.pos, 2);
                              return parseInt(e, 16);
                            }),
                            (b.prototype.readByte = function () {
                              var e = this.hex.substring(this.pos, this.pos + 2);
                              return (this.pos += 2), parseInt(e, 16);
                            }),
                            (b.prototype.readChunk = function (t) {
                              var n = this.hex.substring(this.pos, this.pos + 2 * t);
                              return (this.pos += 2 * t), "function" == typeof r ? r.from(n, "hex") : new e(n);
                            }),
                            (v.prototype = Object.create(a.prototype)),
                            (v.prototype.writeByte = function (e) {
                              if (e < 0 || e > 255) throw new Error("Byte value out of range: " + e);
                              var t = e.toString(16);
                              1 == t.length && (t = "0" + t), (this.$hex += t);
                            }),
                            (v.prototype.canWriteBinary = function (t) {
                              return t instanceof e || ("function" == typeof r && t instanceof r);
                            }),
                            (v.prototype.writeBinary = function (t, n) {
                              if (t instanceof e) n(t.length()), (this.$hex += t.$hex);
                              else {
                                if (!("function" == typeof r && t instanceof r))
                                  throw new TypeError("HexWriter only accepts BinaryHex or Buffers");
                                n(t.length), (this.$hex += t.toString("hex"));
                              }
                            }),
                            (v.prototype.result = function () {
                              return "buffer" === this.finalFormat && "function" == typeof r
                                ? r.from(this.$hex, "hex")
                                : new e(this.$hex).toString(this.finalFormat);
                            }),
                            (v.prototype.writeString = function (t, r) {
                              var n = e.fromUtf8String(t);
                              r(n.length()), (this.$hex += n.$hex);
                            }),
                            y.addReader(function (t, r) {
                              return t instanceof e || t.$hex ? new b(t.$hex) : "hex" === r ? new b(t) : void 0;
                            }),
                            y.addWriter(function (e) {
                              if ("hex" === e) return new v();
                            }),
                            y
                          );
                        })();
                        return (
                          n
                            .addSemanticEncode(0, function (e) {
                              if (e instanceof Date) return e.toISOString();
                            })
                            .addSemanticDecode(0, function (e) {
                              return new Date(e);
                            })
                            .addSemanticDecode(1, function (e) {
                              return new Date(e);
                            }),
                          n
                        );
                      }),
                      "function" == typeof define && define.amd
                        ? define([], s)
                        : void 0 !== t && t.exports
                        ? (t.exports = s())
                        : (n.CBOR = s());
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/cbor-sync.js"
      }
    ],
    [
      54,
      { "../../../shared/modules/fetch-with-timeout": 3991, loglevel: 3322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = s(e("loglevel"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e, t, r) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (r !== undefined) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = r),
                    e
                  );
                }
                const o = (0, s(e("../../../shared/modules/fetch-with-timeout")).default)();
                r.default = class {
                  constructor() {
                    i(this, "isSupported", !0),
                      (this._initialized = !1),
                      (this._initializing = this._init()),
                      (this._state = undefined),
                      (this.mostRecentRetrievedState = null);
                  }
                  async _init() {
                    try {
                      const e = await o("http://localhost:12345/state.json");
                      e.ok && (this._state = await e.json());
                    } catch (e) {
                      n.default.debug(`Error loading network state: '${e.message}'`);
                    } finally {
                      this._initialized = !0;
                    }
                  }
                  async get() {
                    return (
                      this._initialized || (await this._initializing),
                      this.mostRecentRetrievedState || (this.mostRecentRetrievedState = this._state),
                      this._state
                    );
                  }
                  setMetadata(e) {
                    this.metadata = e;
                  }
                  async set(e) {
                    if (!this.isSupported)
                      throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                    if (!e) throw new Error("MetaMask - updated state is missing");
                    if (!this.metadata)
                      throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                    this._initialized || (await this._initializing), (this._state = { data: e, meta: this._metadata });
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/network-store.js" }
    ],
    [
      540,
      { "./DataItem": 538, "./cbor-sync": 539 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.DataItem =
                    r.addWriter =
                    r.addReader =
                    r.addSemanticEncode =
                    r.addSemanticDecode =
                    r.decodeToDataItem =
                    r.encodeDataItem =
                      void 0);
                var n = e("./cbor-sync");
                Object.defineProperty(r, "encodeDataItem", {
                  enumerable: !0,
                  get: function () {
                    return n.encodeDataItem;
                  }
                }),
                  Object.defineProperty(r, "decodeToDataItem", {
                    enumerable: !0,
                    get: function () {
                      return n.decodeToDataItem;
                    }
                  }),
                  Object.defineProperty(r, "addSemanticDecode", {
                    enumerable: !0,
                    get: function () {
                      return n.addSemanticDecode;
                    }
                  }),
                  Object.defineProperty(r, "addSemanticEncode", {
                    enumerable: !0,
                    get: function () {
                      return n.addSemanticEncode;
                    }
                  }),
                  Object.defineProperty(r, "addReader", {
                    enumerable: !0,
                    get: function () {
                      return n.addReader;
                    }
                  }),
                  Object.defineProperty(r, "addWriter", {
                    enumerable: !0,
                    get: function () {
                      return n.addWriter;
                    }
                  });
                var s = e("./DataItem");
                Object.defineProperty(r, "DataItem", {
                  enumerable: !0,
                  get: function () {
                    return s.DataItem;
                  }
                });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/lib/index.js"
      }
    ],
    [
      541,
      { "./RegistryType": 533, "./ScriptExpression": 534, "./utils": 543 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                const n = e("./utils"),
                  s = e("./RegistryType"),
                  i = e("./ScriptExpression"),
                  o = Object.values(s.RegistryTypes)
                    .filter((e) => !!e.getTag())
                    .map((e) => e.getTag()),
                  a = Object.values(i.ScriptExpressions).map((e) => e.getTag());
                (0, n.patchTags)(o.concat(a));
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/patchCBOR.js"
      }
    ],
    [
      542,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/types.js"
      }
    ],
    [
      543,
      { "./lib": 540 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.patchTags = void 0);
                const n = e("./lib"),
                  s = [];
                r.patchTags = (e) => {
                  e.forEach((e) => {
                    s.find((t) => t === e) ||
                      ((0, n.addSemanticEncode)(e, (t) => {
                        if (t instanceof n.DataItem && t.getTag() === e) return t.getData();
                      }),
                      (0, n.addSemanticDecode)(e, (t) => new n.DataItem(t, e)),
                      s.push(e));
                  });
                };
              };
            };
      },
      {
        package: "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",
        file: "node_modules/@keystonehq/bc-ur-registry/dist/utils.js"
      }
    ],
    [
      73,
      { "@sentry/utils": 2065 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.FilterEvents = void 0);
                var n = e("@sentry/utils");
                function s(e, t, r) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (r !== undefined) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = r),
                    e
                  );
                }
                class i {
                  constructor({ getMetaMetricsEnabled: e }) {
                    s(this, "name", i.id), s(this, "getMetaMetricsEnabled", void 0), (this.getMetaMetricsEnabled = e);
                  }
                  setupOnce(e, t) {
                    e(async (e) => {
                      const r = t().getIntegration(i);
                      return r && !(await r.getMetaMetricsEnabled())
                        ? (n.logger.warn("Event dropped due to MetaMetrics setting."), null)
                        : e;
                    });
                  }
                }
                (r.FilterEvents = i), s(i, "id", "FilterEvents");
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/sentry-filter-events.ts" }
    ],
    [
      74,
      {
        "../../../shared/modules/object.utils": 3997,
        "../platforms/extension": 196,
        "./local-store": 50,
        "./network-store": 54,
        "./setupSentry": 75
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n = e("../../../shared/modules/object.utils"),
                  s = a(e("../platforms/extension")),
                  i = a(e("./local-store")),
                  o = (a(e("./network-store")), e("./setupSentry"));
                function a(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = new s.default(),
                  u = new i.default();
                globalThis.stateHooks.getPersistedState = async function () {
                  return await u.get();
                };
                const l = { data: o.SENTRY_BACKGROUND_STATE, meta: { version: !0 } };
                globalThis.stateHooks.getSentryState = function () {
                  const e = { browser: window.navigator.userAgent, version: c.getVersion() };
                  if (globalThis.stateHooks.getSentryAppState) return { ...e, state: globalThis.stateHooks.getSentryAppState() };
                  if (u.mostRecentRetrievedState || globalThis.stateHooks.getMostRecentPersistedState) {
                    const t = u.mostRecentRetrievedState || globalThis.stateHooks.getMostRecentPersistedState();
                    if (t) return { ...e, persistedState: (0, n.maskObject)(t, l) };
                  }
                  return e;
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/setup-initial-state-hooks.js" }
    ],
    [
      75,
      {
        "../../../shared/modules/object.utils": 3997,
        "./extractEthjsErrorMessage": 45,
        "./sentry-filter-events": 73,
        "@sentry/browser": 1982,
        "@sentry/integrations": 2037
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.SENTRY_UI_STATE = r.SENTRY_BACKGROUND_STATE = r.ERROR_URL_ALLOWLIST = void 0),
                  (r.beforeBreadcrumb = w),
                  (r.default = function ({ release: e, getState: t }) {
                    if (!e) throw new Error("Missing release");
                    if (l && !f) return undefined;
                    const r = "main" === p ? d : `${d}-${p}`;
                    let n;
                    "production" === d
                      ? (console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN`),
                        (n = "https://3567c198f8a8412082d32655da2961d0@sentry.io/273505"))
                      : (console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN_DEV`), (n = h));
                    async function o() {
                      const e = t();
                      if (e.state || e.persistedState) return b(e);
                      try {
                        return v(await globalThis.stateHooks.getPersistedState());
                      } catch (e) {
                        return console.error(e), !1;
                      }
                    }
                    s.init({
                      dsn: n,
                      debug: l,
                      autoSessionTracking: !1,
                      environment: r,
                      integrations: [new a.FilterEvents({ getMetaMetricsEnabled: o }), new i.Dedupe(), new i.ExtraErrorData()],
                      release: e,
                      beforeSend: (e) => I(e, t),
                      beforeBreadcrumb: w(t)
                    });
                    const c = async () => {
                        var e, t, r, n;
                        const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                          a =
                            (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                              ? void 0
                              : r.call(n)) ?? {};
                        i && !0 === (await o()) && ((a.autoSessionTracking = !0), i.startSession());
                      },
                      u = async () => {
                        var e, t, r, n;
                        const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                          a =
                            (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                              ? void 0
                              : r.call(n)) ?? {};
                        i && !1 === (await o()) && ((a.autoSessionTracking = !1), i.endSession());
                      };
                    return {
                      ...s,
                      startSession: c,
                      endSession: u,
                      toggleSession: async () => {
                        var e, t, r, n;
                        const i = null === (e = s.getCurrentHub) || void 0 === e ? void 0 : e.call(s),
                          a = (null === (t = i.getClient) || void 0 === t || null === (r = (n = t.call(i)).getOptions) || void 0 === r
                            ? void 0
                            : r.call(n)) ?? { autoSessionTracking: !1 },
                          l = await o();
                        !0 === l && !1 === a.autoSessionTracking ? await c() : !1 === l && !0 === a.autoSessionTracking && (await u());
                      }
                    };
                  }),
                  (r.removeUrlsFromBreadCrumb = k),
                  (r.rewriteReport = I);
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = u(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                      if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
                      }
                    return (n.default = e), r && r.set(e, n), n;
                  })(e("@sentry/browser")),
                  i = e("@sentry/integrations"),
                  o = e("../../../shared/modules/object.utils"),
                  a = e("./sentry-filter-events"),
                  c = (n = e("./extractEthjsErrorMessage")) && n.__esModule ? n : { default: n };
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (u = function (e) {
                    return e ? r : t;
                  })(e);
                }
                const l = !1,
                  d = "production",
                  h = "https://f59f3dd640d2429d9d0e2445a87ea8e1@sentry.io/273496",
                  p = "main",
                  f = !1,
                  y = (r.ERROR_URL_ALLOWLIST = {
                    CRYPTOCOMPARE: "cryptocompare.com",
                    COINGECKO: "coingecko.com",
                    ETHERSCAN: "etherscan.io",
                    CODEFI: "codefi.network",
                    SEGMENT: "segment.io"
                  }),
                  g = (r.SENTRY_BACKGROUND_STATE = {
                    AccountTracker: { accounts: !1, currentBlockGasLimit: !0 },
                    AddressBookController: { addressBook: !1 },
                    AlertController: { alertEnabledness: !0, unconnectedAccountAlertShownOrigins: !1, web3ShimUsageOrigins: !1 },
                    AnnouncementController: { announcements: !1 },
                    AppMetadataController: {
                      currentAppVersion: !0,
                      currentMigrationVersion: !0,
                      previousAppVersion: !0,
                      previousMigrationVersion: !0
                    },
                    ApprovalController: { approvalFlows: !1, pendingApprovals: !1, pendingApprovalCount: !1 },
                    AppStateController: {
                      browserEnvironment: !0,
                      connectedStatusPopoverHasBeenShown: !0,
                      currentPopupId: !1,
                      defaultHomeActiveTabName: !0,
                      fullScreenGasPollTokens: !0,
                      hadAdvancedGasFeesSetPriorToMigration92_3: !0,
                      nftsDetectionNoticeDismissed: !0,
                      nftsDropdownState: !0,
                      notificationGasPollTokens: !0,
                      outdatedBrowserWarningLastShown: !0,
                      popupGasPollTokens: !0,
                      qrHardware: !0,
                      recoveryPhraseReminderHasBeenShown: !0,
                      recoveryPhraseReminderLastShown: !0,
                      showBetaHeader: !0,
                      showProductTour: !0,
                      showTestnetMessageInDropdown: !0,
                      snapsInstallPrivacyWarningShown: !0,
                      termsOfUseLastAgreed: !0,
                      timeoutMinutes: !0,
                      trezorModel: !0,
                      usedNetworks: !0
                    },
                    CachedBalancesController: { cachedBalances: !1 },
                    CronjobController: { jobs: !1 },
                    CurrencyController: { currentCurrency: !0, currencyRates: !0 },
                    DecryptMessageController: { unapprovedDecryptMsgs: !1, unapprovedDecryptMsgCount: !0 },
                    EncryptionPublicKeyController: { unapprovedEncryptionPublicKeyMsgs: !1, unapprovedEncryptionPublicKeyMsgCount: !0 },
                    EnsController: { ensResolutionsByAddress: !1 },
                    GasFeeController: { estimatedGasFeeTimeBounds: !0, gasEstimateType: !0, gasFeeEstimates: !0 },
                    KeyringController: { isUnlocked: !0, keyrings: !1 },
                    LoggingController: { logs: !1 },
                    MetaMetricsController: {
                      eventsBeforeMetricsOptIn: !1,
                      fragments: !1,
                      metaMetricsId: !0,
                      participateInMetaMetrics: !0,
                      previousUserTraits: !1,
                      segmentApiCalls: !1,
                      traits: !1
                    },
                    NetworkController: {
                      networkConfigurations: !1,
                      networksMetadata: !0,
                      providerConfig: { chainId: !0, id: !0, nickname: !0, rpcPrefs: !1, rpcUrl: !1, ticker: !0, type: !0 },
                      selectedNetworkClientId: !1
                    },
                    NftController: { allNftContracts: !1, allNfts: !1, ignoredNfts: !1 },
                    NotificationController: { notifications: !1 },
                    OnboardingController: { completedOnboarding: !0, firstTimeFlowType: !0, onboardingTabs: !1, seedPhraseBackedUp: !0 },
                    PPOMController: {
                      chainStatus: !0,
                      securityAlertsEnabled: !1,
                      storageMetadata: [],
                      versionFileETag: !1,
                      versionInfo: []
                    },
                    PermissionController: { subjects: !1 },
                    PermissionLogController: { permissionActivityLog: !1, permissionHistory: !1 },
                    PhishingController: {},
                    PreferencesController: {
                      advancedGasFee: !0,
                      currentLocale: !0,
                      disabledRpcMethodPreferences: !0,
                      dismissSeedBackUpReminder: !0,
                      featureFlags: !0,
                      forgottenPassword: !0,
                      identities: !1,
                      incomingTransactionsPreferences: !0,
                      ipfsGateway: !1,
                      isLineaMainnetReleased: !0,
                      knownMethodData: !1,
                      ledgerTransportType: !0,
                      lostIdentities: !1,
                      openSeaEnabled: !0,
                      preferences: {
                        autoLockTimeLimit: !0,
                        hideZeroBalanceTokens: !0,
                        showFiatInTestnets: !0,
                        showTestNetworks: !0,
                        useNativeCurrencyAsPrimaryCurrency: !0
                      },
                      selectedAddress: !1,
                      snapRegistryList: !1,
                      theme: !0,
                      transactionSecurityCheckEnabled: !0,
                      use4ByteResolution: !0,
                      useAddressBarEnsResolution: !0,
                      useBlockie: !0,
                      useCurrencyRateCheck: !0,
                      useMultiAccountBalanceChecker: !0,
                      useNftDetection: !0,
                      useNonceField: !0,
                      usePhishDetect: !0,
                      useTokenDetection: !0,
                      useRequestQueue: !0
                    },
                    SelectedNetworkController: { domains: !0, perDomainNetwork: !1 },
                    SignatureController: {
                      unapprovedMsgCount: !0,
                      unapprovedMsgs: !1,
                      unapprovedPersonalMsgCount: !0,
                      unapprovedPersonalMsgs: !1,
                      unapprovedTypedMessages: !1,
                      unapprovedTypedMessagesCount: !0
                    },
                    SmartTransactionsController: {
                      smartTransactionsState: {
                        fees: { approvalTxFees: !0, tradeTxFees: !0 },
                        liveness: !0,
                        smartTransactions: !1,
                        userOptIn: !0,
                        userOptInV2: !0
                      }
                    },
                    SnapController: { unencryptedSnapStates: !1, snapStates: !1, snaps: !1 },
                    SnapsRegistry: { database: !1, lastUpdated: !1 },
                    SubjectMetadataController: { subjectMetadata: !1 },
                    SwapsController: {
                      swapsState: {
                        approveTxId: !1,
                        customApproveTxData: !1,
                        customGasPrice: !0,
                        customMaxFeePerGas: !0,
                        customMaxGas: !0,
                        customMaxPriorityFeePerGas: !0,
                        errorKey: !0,
                        fetchParams: !0,
                        quotes: !1,
                        quotesLastFetched: !0,
                        quotesPollingLimitEnabled: !0,
                        routeState: !0,
                        saveFetchedQuotes: !0,
                        selectedAggId: !0,
                        swapsFeatureFlags: !0,
                        swapsFeatureIsLive: !0,
                        swapsQuotePrefetchingRefreshTime: !0,
                        swapsQuoteRefreshTime: !0,
                        swapsStxBatchStatusRefreshTime: !0,
                        swapsStxGetTransactionsRefreshTime: !0,
                        swapsStxMaxFeeMultiplier: !0,
                        swapsUserFeeLevel: !0,
                        tokens: !1,
                        topAggId: !1,
                        tradeTxId: !1
                      }
                    },
                    TokenListController: {
                      preventPollingOnNetworkRestart: !0,
                      tokenList: !1,
                      tokensChainsCache: { [o.AllProperties]: !1 }
                    },
                    TokenRatesController: { contractExchangeRates: !1 },
                    TokensController: {
                      allDetectedTokens: { [o.AllProperties]: !1 },
                      allIgnoredTokens: { [o.AllProperties]: !1 },
                      allTokens: { [o.AllProperties]: !1 },
                      detectedTokens: !1,
                      ignoredTokens: !1,
                      tokens: !1
                    },
                    TransactionController: { transactions: !1, lastFetchedBlockNumbers: !1, methodData: !1 },
                    TxController: { transactions: !1 }
                  }),
                  m = Object.values(g).reduce((e, t) => ({ ...e, ...t }), {});
                r.SENTRY_UI_STATE = {
                  gas: !0,
                  history: !0,
                  metamask: {
                    ...m,
                    isInitialized: !0,
                    customNonceValue: !0,
                    isAccountMenuOpen: !0,
                    isNetworkMenuOpen: !0,
                    nextNonce: !0,
                    pendingTokens: !1,
                    welcomeScreenSeen: !0,
                    useSafeChainsListValidation: !0,
                    addSnapAccountEnabled: !1,
                    snapsAddSnapAccountModalDismissed: !1
                  },
                  unconnectedAccount: !0
                };
                function b(e) {
                  return e.persistedState
                    ? v(e.persistedState)
                    : !!e.state &&
                        (e.state.metamask
                          ? Boolean(e.state.metamask.participateInMetaMetrics)
                          : Boolean(null === (t = e.state.MetaMetricsController) || void 0 === t ? void 0 : t.participateInMetaMetrics));
                  var t;
                }
                function v(e) {
                  var t;
                  return Boolean(
                    null == e || null === (t = e.data) || void 0 === t || null === (t = t.MetaMetricsController) || void 0 === t
                      ? void 0
                      : t.participateInMetaMetrics
                  );
                }
                function T(e) {
                  return e.match(/^(chrome-extension|moz-extension):\/\//u) ? e : "";
                }
                function w(e) {
                  return (t) => {
                    if (!e) return null;
                    const r = e();
                    if (
                      !b(r) ||
                      !(function (e) {
                        var t, r;
                        return e.persistedState
                          ? Boolean(
                              null === (t = e.persistedState.data) || void 0 === t || null === (t = t.OnboardingController) || void 0 === t
                                ? void 0
                                : t.completedOnboarding
                            )
                          : !!e.state &&
                              (e.state.metamask
                                ? Boolean(e.state.metamask.completedOnboarding)
                                : Boolean(null === (r = e.state.OnboardingController) || void 0 === r ? void 0 : r.completedOnboarding));
                      })(r) ||
                      "ui.input" === (null == t ? void 0 : t.category)
                    )
                      return null;
                    return k(t);
                  };
                }
                function k(e) {
                  var t, r, n;
                  return (
                    null != e && null !== (t = e.data) && void 0 !== t && t.url && (e.data.url = T(e.data.url)),
                    null != e && null !== (r = e.data) && void 0 !== r && r.to && (e.data.to = T(e.data.to)),
                    null != e && null !== (n = e.data) && void 0 !== n && n.from && (e.data.from = T(e.data.from)),
                    e
                  );
                }
                function I(e, t) {
                  try {
                    if (
                      ((function (e) {
                        C(e, (e) => {
                          let t = (0, c.default)(e);
                          return (
                            0 === t.indexOf("Transaction Failed: known transaction") && (t = "Transaction Failed: known transaction"), t
                          );
                        });
                      })(e),
                      (function (e) {
                        C(e, (e) => {
                          let t = e;
                          const r = /(([-.+a-zA-Z]+:\/\/)|(www\.))\S+[@:.]\S+/gu;
                          return (
                            (t.match(r) || []).forEach((e) => {
                              try {
                                const r = new URL(e),
                                  { hostname: n } = r;
                                Object.values(y).some((e) => n === e || n.endsWith(`.${e}`)) || (t = t.replace(e, "**"));
                              } catch (r) {
                                t = t.replace(e, "**");
                              }
                            }),
                            t
                          );
                        });
                      })(e),
                      (function (e) {
                        C(e, (e) => e.replace(/0x[A-Fa-f0-9]{40}/u, "0x**"));
                      })(e),
                      (function (e) {
                        var t;
                        null !== (t = e.request) && void 0 !== t && t.url && (e.request.url = E(e.request.url));
                        e.exception &&
                          e.exception.values &&
                          e.exception.values.forEach((e) => {
                            e.stacktrace &&
                              e.stacktrace.frames.forEach((e) => {
                                e.filename = E(e.filename);
                              });
                          });
                      })(e),
                      t)
                    ) {
                      const r = t();
                      e.extra || (e.extra = {}), (e.extra.appState = r);
                    }
                  } catch (e) {
                    console.warn(e);
                  }
                  return e;
                }
                function C(e, t) {
                  "string" == typeof e.message && (e.message = t(e.message)),
                    e.exception &&
                      e.exception.values &&
                      e.exception.values.forEach((e) => {
                        "string" == typeof e.value && (e.value = t(e.value));
                      });
                }
                function E(e) {
                  var t;
                  if (null === (t = globalThis.location) || void 0 === t || !t.origin) return e;
                  const r = null == e ? void 0 : e.split(globalThis.location.origin)[1];
                  if (!r) return e;
                  return `/metamask${r}`;
                }
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/setupSentry.js" }
    ],
    [
      80,
      { "../../../shared/constants/app": 3953, "obj-multiplex": 3399, pump: 3508 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.setupMultiplex = function (e) {
                    const t = new n.default();
                    return (
                      t.ignoreStream(i.EXTENSION_MESSAGES.CONNECTION_READY),
                      (0, s.default)(e, t, e, (e) => {
                        e && console.error(e);
                      }),
                      t
                    );
                  });
                var n = o(e("obj-multiplex")),
                  s = o(e("pump")),
                  i = e("../../../shared/constants/app");
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/stream-utils.js" }
    ],
    [
      82,
      {
        "../../../shared/constants/app": 3953,
        "../../../shared/constants/network": 3963,
        "../../../shared/modules/hexstring-utils": 3993,
        "@metamask/transaction-controller": 1835,
        "bn.js": 2331,
        lodash: 3312,
        url: 3879
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BnMultiplyByFraction = function (e, t, r) {
                    const n = new s.default(t),
                      i = new s.default(r);
                    return e.mul(n).div(i);
                  }),
                  (r.addHexPrefix = void 0),
                  (r.addUrlProtocolPrefix = function (e) {
                    let t = e.trim();
                    t.length && !n.default.parse(t).protocol && (t = `https://${t}`);
                    if (null !== p(t)) return t;
                    return null;
                  }),
                  (r.checkAlarmExists = function (e, t) {
                    return e.some((e) => e.name === t);
                  }),
                  (r.deferredPromise = function () {
                    let e, t;
                    return {
                      promise: new Promise((r, n) => {
                        (e = r), (t = n);
                      }),
                      resolve: e,
                      reject: t
                    };
                  }),
                  (r.formatTxMetaForRpcResult = function (e) {
                    const { r: t, s: r, v: n, hash: s, txReceipt: i, txParams: a } = e,
                      {
                        to: c,
                        data: u,
                        nonce: l,
                        gas: d,
                        from: h,
                        value: p,
                        gasPrice: f,
                        accessList: y,
                        maxFeePerGas: g,
                        maxPriorityFeePerGas: m
                      } = a,
                      b = {
                        v: n,
                        r: t,
                        s: r,
                        to: c,
                        gas: d,
                        from: h,
                        hash: s,
                        nonce: `${l}`,
                        input: u || "0x",
                        value: p || "0x0",
                        accessList: y || null,
                        blockHash: (null == i ? void 0 : i.blockHash) || null,
                        blockNumber: (null == i ? void 0 : i.blockNumber) || null,
                        transactionIndex: (null == i ? void 0 : i.transactionIndex) || null,
                        type: g && m ? o.TransactionEnvelopeType.feeMarket : o.TransactionEnvelopeType.legacy
                      };
                    g && m ? ((b.gasPrice = g), (b.maxFeePerGas = g), (b.maxPriorityFeePerGas = m)) : (b.gasPrice = f);
                    return b;
                  }),
                  (r.generateRandomId = void 0),
                  (r.getChainType = function (e) {
                    if (e === c.CHAIN_IDS.MAINNET) return "mainnet";
                    if (c.TEST_CHAINS.includes(e)) return "testnet";
                    return "custom";
                  }),
                  (r.getPlatform = r.getEnvironmentType = void 0),
                  (r.getValidUrl = p),
                  (r.hexToBn = function (e) {
                    return new s.default((0, u.stripHexPrefix)(e), 16);
                  }),
                  (r.isValidDate = void 0),
                  (r.isWebUrl = function (e) {
                    const t = p(e);
                    return null !== t && ("https:" === t.protocol || "http:" === t.protocol);
                  }),
                  (r.previousValueComparator = function (e, t) {
                    let r,
                      n = !0;
                    return (s) => {
                      try {
                        return n ? ((n = !1), e(t ?? s, s)) : e(r, s);
                      } finally {
                        r = s;
                      }
                    };
                  });
                var n = l(e("url")),
                  s = l(e("bn.js")),
                  i = e("lodash"),
                  o = e("@metamask/transaction-controller"),
                  a = e("../../../shared/constants/app"),
                  c = e("../../../shared/constants/network"),
                  u = e("../../../shared/modules/hexstring-utils");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = (0, i.memoize)((e) => {
                  const t = new URL(e);
                  return "/popup.html" === t.pathname
                    ? a.ENVIRONMENT_TYPE_POPUP
                    : ["/home.html"].includes(t.pathname)
                    ? a.ENVIRONMENT_TYPE_FULLSCREEN
                    : "/notification.html" === t.pathname
                    ? a.ENVIRONMENT_TYPE_NOTIFICATION
                    : a.ENVIRONMENT_TYPE_BACKGROUND;
                });
                r.getEnvironmentType = (e = window.location.href) => d(e);
                r.getPlatform = () => {
                  const { navigator: e } = window,
                    { userAgent: t } = e;
                  return t.includes("Firefox")
                    ? a.PLATFORM_FIREFOX
                    : "brave" in e
                    ? a.PLATFORM_BRAVE
                    : t.includes("Edg/")
                    ? a.PLATFORM_EDGE
                    : t.includes("OPR")
                    ? a.PLATFORM_OPERA
                    : a.PLATFORM_CHROME;
                };
                r.addHexPrefix = (e) =>
                  "string" != typeof e || e.match(/^-?0x/u)
                    ? e
                    : e.match(/^-?0X/u)
                    ? e.replace("0X", "0x")
                    : e.startsWith("-")
                    ? e.replace("-", "-0x")
                    : `0x${e}`;
                const h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                r.generateRandomId = () => {
                  let e = "";
                  for (let t = 0; t < 20; t++) e += h.charAt(Math.floor(62 * Math.random()));
                  return e;
                };
                function p(e) {
                  try {
                    const t = new URL(e);
                    return 0 === t.hostname.length || 0 === t.pathname.length || t.hostname !== decodeURIComponent(t.hostname) ? null : t;
                  } catch (e) {
                    return null;
                  }
                }
                r.isValidDate = (e) => e instanceof Date;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/util.ts" }
    ],
    [
      977,
      { "./errors": 978, "./packer": 981, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.decodeSingle = r.decode = r.encodePacked = r.encodeSingle = r.encode = void 0);
                const n = e("@metamask/utils"),
                  s = e("./errors"),
                  i = e("./packer");
                r.encode = (e, t, r, n) => {
                  try {
                    return (0, i.pack)({ types: e, values: t, packed: r, tight: n });
                  } catch (e) {
                    if (e instanceof s.ParserError) throw new s.ParserError(`Unable to encode value: ${e.message}`, e);
                    throw new s.ParserError(`An unexpected error occurred: ${(0, s.getErrorMessage)(e)}`, e);
                  }
                };
                r.encodeSingle = (e, t) => (0, r.encode)([e], [t]);
                r.encodePacked = (e, t, n) => (0, r.encode)(e, t, !0, n);
                r.decode = (e, t) => {
                  const r = (0, n.createBytes)(t);
                  try {
                    return (0, i.unpack)(e, r);
                  } catch (e) {
                    if (e instanceof s.ParserError) throw new s.ParserError(`Unable to decode value: ${e.message}`, e);
                    throw new s.ParserError(`An unexpected error occurred: ${(0, s.getErrorMessage)(e)}`, e);
                  }
                };
                r.decodeSingle = (e, t) => {
                  const i = (0, r.decode)([e], t);
                  return (0, n.assert)(1 === i.length, new s.ParserError("Decoded value array has unexpected length.")), i[0];
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/abi.js" }
    ],
    [
      978,
      { "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ParserError = r.getErrorStack = r.getErrorMessage = void 0);
                const n = e("@metamask/utils");
                r.getErrorMessage = (e) =>
                  "string" == typeof e
                    ? e
                    : e instanceof Error || ((0, n.isObject)(e) && (0, n.hasProperty)(e, "message") && "string" == typeof e.message)
                    ? e.message
                    : "Unknown error.";
                r.getErrorStack = (e) => (e instanceof Error ? e.stack : undefined);
                class s extends Error {
                  constructor(e, t) {
                    super(e), (this.name = "ParserError");
                    const n = (0, r.getErrorStack)(t);
                    n && (this.stack = n);
                  }
                }
                r.ParserError = s;
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/errors.js" }
    ],
    [
      979,
      { "./abi": 977, "./errors": 978, "./types": 994 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var s = Object.getOwnPropertyDescriptor(t, r);
                          (s && !("get" in s ? !t.__esModule : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), s(e("./abi"), r), s(e("./errors"), r), s(e("./types"), r);
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/index.js" }
    ],
    [
      980,
      { "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.iterate = void 0);
                const n = e("@metamask/utils");
                r.iterate = function* (e, t = 32) {
                  for (let r = 0; r < e.length; r += t) {
                    const s = (e) => {
                        (0, n.assert)(e >= 0, "Cannot skip a negative number of bytes."),
                          (0, n.assert)(e % t == 0, "Length must be a multiple of the size."),
                          (r += e);
                      },
                      i = e.subarray(r);
                    yield { skip: s, value: i };
                  }
                  return { skip: () => undefined, value: new Uint8Array() };
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/iterator.js" }
    ],
    [
      981,
      { "./errors": 978, "./iterator": 980, "./parsers": 988, "./utils": 996, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.unpack = r.pack = r.isDynamicParser = r.getParser = void 0);
                const n = e("@metamask/utils"),
                  s = e("./errors"),
                  i = e("./iterator"),
                  o = e("./parsers"),
                  a = e("./utils");
                r.getParser = (e) => {
                  const t = {
                      address: o.address,
                      array: o.array,
                      bool: o.bool,
                      bytes: o.bytes,
                      fixedBytes: o.fixedBytes,
                      function: o.fn,
                      number: o.number,
                      string: o.string,
                      tuple: o.tuple
                    },
                    r = t[e];
                  if (r) return r;
                  const n = Object.values(t).find((t) => t.isType(e));
                  if (n) return n;
                  throw new s.ParserError(`The type "${e}" is not supported.`);
                };
                r.isDynamicParser = (e, t) => {
                  const { isDynamic: r } = e;
                  return "function" == typeof r ? r(t) : r;
                };
                r.pack = ({ types: e, values: t, packed: i = !1, tight: o = !1, arrayPacked: c = !1, byteArray: u = new Uint8Array() }) => {
                  (0, n.assert)(
                    e.length === t.length,
                    new s.ParserError(`The number of types (${e.length}) does not match the number of values (${t.length}).`)
                  );
                  const {
                    staticBuffer: l,
                    dynamicBuffer: d,
                    pointers: h
                  } = e.reduce(
                    ({ staticBuffer: e, dynamicBuffer: s, pointers: a }, u, l) => {
                      const d = (0, r.getParser)(u),
                        h = t[l];
                      if (i || c || !(0, r.isDynamicParser)(d, u))
                        return {
                          staticBuffer: d.encode({ buffer: e, value: h, type: u, packed: i, tight: o }),
                          dynamicBuffer: s,
                          pointers: a
                        };
                      return {
                        staticBuffer: (0, n.concatBytes)([e, new Uint8Array(32)]),
                        dynamicBuffer: d.encode({ buffer: s, value: h, type: u, packed: i, tight: o }),
                        pointers: [...a, { position: e.length, pointer: s.length }]
                      };
                    },
                    { staticBuffer: new Uint8Array(), dynamicBuffer: new Uint8Array(), pointers: [] }
                  );
                  (0, n.assert)((!i && !c) || 0 === d.length, new s.ParserError("Invalid pack state."));
                  const p = l.length,
                    f = h.reduce((e, { pointer: t, position: r }) => {
                      const s = (0, a.padStart)((0, n.numberToBytes)(p + t));
                      return (0, a.set)(e, s, r);
                    }, l);
                  return (0, n.concatBytes)([u, f, d]);
                };
                r.unpack = (e, t) => {
                  const o = (0, i.iterate)(t);
                  return e.map((e) => {
                    const {
                      value: { value: i, skip: a },
                      done: c
                    } = o.next();
                    (0, n.assert)(
                      !c,
                      new s.ParserError(
                        `The encoded value is invalid for the provided types. Reached end of buffer while attempting to parse "${e}".`
                      )
                    );
                    const u = (0, r.getParser)(e);
                    if ((0, r.isDynamicParser)(u, e)) {
                      const r = (0, n.bytesToNumber)(i.subarray(0, 32)),
                        s = t.subarray(r);
                      return u.decode({ type: e, value: s, skip: a });
                    }
                    return u.decode({ type: e, value: i, skip: a });
                  });
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/packer.js" }
    ],
    [
      982,
      { "../errors": 978, "../utils": 996, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.address = r.getAddress = void 0);
                const n = e("@metamask/utils"),
                  s = e("../errors"),
                  i = e("../utils");
                (r.getAddress = (e) => {
                  const t = (0, n.createBytes)(e);
                  return (
                    (0, n.assert)(
                      t.length <= 20,
                      new s.ParserError(`Invalid address value. Expected address to be 20 bytes long, but received ${t.length} bytes.`)
                    ),
                    (0, i.padStart)(t, 20)
                  );
                }),
                  (r.address = {
                    isDynamic: !1,
                    isType: (e) => "address" === e,
                    getByteLength: () => 32,
                    encode({ buffer: e, value: t, packed: s }) {
                      const o = (0, r.getAddress)(t);
                      if (s) return (0, n.concatBytes)([e, o]);
                      const a = (0, i.padStart)(o);
                      return (0, n.concatBytes)([e, a]);
                    },
                    decode: ({ value: e }) => (0, n.add0x)((0, n.bytesToHex)(e.slice(12, 32)))
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/address.js" }
    ],
    [
      983,
      { "../errors": 978, "../packer": 981, "../utils": 996, "./fixed-bytes": 986, "./tuple": 992, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.array = r.getTupleType = r.getArrayType = r.isArrayType = void 0);
                const n = e("@metamask/utils"),
                  s = e("../errors"),
                  i = e("../packer"),
                  o = e("../utils"),
                  a = e("./fixed-bytes"),
                  c = e("./tuple"),
                  u = /^(?<type>.*)\[(?<length>\d*?)\]$/u;
                r.isArrayType = (e) => u.test(e);
                r.getArrayType = (e) => {
                  const t = e.match(u);
                  return (
                    (0, n.assert)(t?.groups?.type, new s.ParserError(`Invalid array type. Expected an array type, but received "${e}".`)),
                    [t.groups.type, t.groups.length ? parseInt(t.groups.length, 10) : undefined]
                  );
                };
                (r.getTupleType = (e, t) => `(${new Array(t).fill(e).join(",")})`),
                  (r.array = {
                    isDynamic(e) {
                      const [t, n] = (0, r.getArrayType)(e);
                      return n === undefined || (0, i.isDynamicParser)((0, i.getParser)(t), t);
                    },
                    isType: (e) => (0, r.isArrayType)(e),
                    getByteLength(e) {
                      (0, n.assert)((0, r.isArrayType)(e), new s.ParserError(`Expected an array type, but received "${e}".`));
                      const [t, o] = (0, r.getArrayType)(e);
                      return (0, i.isDynamicParser)(this, e) || o === undefined ? 32 : c.tuple.getByteLength((0, r.getTupleType)(t, o));
                    },
                    encode({ type: e, buffer: t, value: u, packed: l, tight: d }) {
                      const [h, p] = (0, r.getArrayType)(e);
                      if (
                        ((0, n.assert)(!l || !(0, r.isArrayType)(h), new s.ParserError("Cannot pack nested arrays.")),
                        l && (0, i.isDynamicParser)((0, i.getParser)(h), h))
                      )
                        return (0, i.pack)({
                          types: new Array(u.length).fill(h),
                          values: u,
                          byteArray: t,
                          packed: l,
                          arrayPacked: !0,
                          tight: d
                        });
                      if (p)
                        return (
                          (0, n.assert)(
                            p === u.length,
                            new s.ParserError(
                              `Array length does not match type length. Expected a length of ${p}, but received ${u.length}.`
                            )
                          ),
                          c.tuple.encode({
                            type: (0, r.getTupleType)(h, p),
                            buffer: t,
                            value: u,
                            packed: a.fixedBytes.isType(h) && d,
                            tight: d
                          })
                        );
                      if (l)
                        return (0, i.pack)({
                          types: new Array(u.length).fill(h),
                          values: u,
                          byteArray: t,
                          packed: a.fixedBytes.isType(h) && d,
                          arrayPacked: !0,
                          tight: d
                        });
                      const f = (0, o.padStart)((0, n.numberToBytes)(u.length));
                      return (0, i.pack)({
                        types: new Array(u.length).fill(h),
                        values: u,
                        byteArray: (0, n.concatBytes)([t, f]),
                        packed: l,
                        tight: d
                      });
                    },
                    decode({ type: e, value: t, ...o }) {
                      const [a, u] = (0, r.getArrayType)(e);
                      if (u) {
                        const e = c.tuple.decode({ type: (0, r.getTupleType)(a, u), value: t, ...o });
                        return (
                          (0, n.assert)(
                            e.length === u,
                            new s.ParserError(
                              `Array length does not match type length. Expected a length of ${u}, but received ${e.length}.`
                            )
                          ),
                          e
                        );
                      }
                      const l = (0, n.bytesToNumber)(t.subarray(0, 32));
                      return (0, i.unpack)(new Array(l).fill(a), t.subarray(32));
                    }
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/array.js" }
    ],
    [
      984,
      { "../errors": 978, "./number": 989, "@metamask/utils": 1893, superstruct: 3846 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.bool = r.getBooleanValue = void 0);
                const n = e("@metamask/utils"),
                  s = e("superstruct"),
                  i = e("../errors"),
                  o = e("./number"),
                  a = (0, s.coerce)((0, s.boolean)(), (0, s.union)([(0, s.literal)("true"), (0, s.literal)("false")]), (e) => "true" === e);
                (r.getBooleanValue = (e) => {
                  try {
                    return (0, s.create)(e, a) ? BigInt(1) : BigInt(0);
                  } catch {
                    throw new i.ParserError(
                      `Invalid boolean value. Expected a boolean literal, or the string "true" or "false", but received "${e}".`
                    );
                  }
                }),
                  (r.bool = {
                    isDynamic: !1,
                    isType: (e) => "bool" === e,
                    getByteLength: () => 32,
                    encode({ buffer: e, value: t, packed: s, tight: i }) {
                      const a = (0, r.getBooleanValue)(t);
                      return s
                        ? (0, n.concatBytes)([e, (0, n.bigIntToBytes)(a)])
                        : o.number.encode({ type: "uint256", buffer: e, value: a, packed: s, tight: i });
                    },
                    decode: (e) => o.number.decode({ ...e, type: "uint256" }) === BigInt(1)
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/bool.js" }
    ],
    [
      985,
      { "../utils": 996, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.bytes = void 0);
                const n = e("@metamask/utils"),
                  s = e("../utils");
                r.bytes = {
                  isDynamic: !0,
                  isType: (e) => "bytes" === e,
                  getByteLength: () => 32,
                  encode({ buffer: e, value: t, packed: r }) {
                    const i = (0, n.createBytes)(t);
                    if (r) return (0, n.concatBytes)([e, i]);
                    const o = 32 * Math.ceil(i.byteLength / 32);
                    return (0, n.concatBytes)([e, (0, s.padStart)((0, n.numberToBytes)(i.byteLength)), (0, s.padEnd)(i, o)]);
                  },
                  decode({ value: e }) {
                    const t = e.subarray(0, 32),
                      r = (0, n.bytesToNumber)(t);
                    return e.slice(32, 32 + r);
                  }
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/bytes.js" }
    ],
    [
      986,
      { "../errors": 978, "../utils": 996, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.fixedBytes = r.getByteLength = void 0);
                const n = e("@metamask/utils"),
                  s = e("../errors"),
                  i = e("../utils"),
                  o = /^bytes([0-9]{1,2})$/u;
                (r.getByteLength = (e) => {
                  const t = e.match(o)?.[1];
                  (0, n.assert)(t, `Invalid byte length. Expected a number between 1 and 32, but received "${e}".`);
                  const r = Number(t);
                  return (
                    (0, n.assert)(
                      r > 0 && r <= 32,
                      new s.ParserError(`Invalid byte length. Expected a number between 1 and 32, but received "${e}".`)
                    ),
                    r
                  );
                }),
                  (r.fixedBytes = {
                    isDynamic: !1,
                    isType: (e) => o.test(e),
                    getByteLength: () => 32,
                    encode({ type: e, buffer: t, value: o, packed: a }) {
                      const c = (0, r.getByteLength)(e),
                        u = (0, n.createBytes)(o);
                      return (
                        (0, n.assert)(
                          u.length <= c,
                          new s.ParserError(`Expected a value of length ${c}, but received a value of length ${u.length}.`)
                        ),
                        a ? (0, n.concatBytes)([t, (0, i.padEnd)(u, c)]) : (0, n.concatBytes)([t, (0, i.padEnd)(u)])
                      );
                    },
                    decode({ type: e, value: t }) {
                      const n = (0, r.getByteLength)(e);
                      return t.slice(0, n);
                    }
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/fixed-bytes.js" }
    ],
    [
      987,
      { "../errors": 978, "./fixed-bytes": 986, "@metamask/utils": 1893, superstruct: 3846 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.fn = r.getFunction = void 0);
                const n = e("@metamask/utils"),
                  s = e("superstruct"),
                  i = e("../errors"),
                  o = e("./fixed-bytes"),
                  a = (0, s.coerce)(
                    (0, s.object)({ address: n.StrictHexStruct, selector: n.StrictHexStruct }),
                    (0, s.union)([n.StrictHexStruct, (0, s.instance)(Uint8Array)]),
                    (e) => {
                      const t = (0, n.createBytes)(e);
                      return (
                        (0, n.assert)(
                          24 === t.length,
                          new i.ParserError(
                            `Invalid Solidity function. Expected function to be 24 bytes long, but received ${t.length} bytes.`
                          )
                        ),
                        { address: (0, n.bytesToHex)(t.subarray(0, 20)), selector: (0, n.bytesToHex)(t.subarray(20, 24)) }
                      );
                    }
                  );
                (r.getFunction = (e) => {
                  const t = (0, s.create)(e, a);
                  return (0, n.concatBytes)([(0, n.hexToBytes)(t.address), (0, n.hexToBytes)(t.selector)]);
                }),
                  (r.fn = {
                    isDynamic: !1,
                    isType: (e) => "function" === e,
                    getByteLength: () => 32,
                    encode({ buffer: e, value: t, packed: n, tight: s }) {
                      const i = (0, r.getFunction)(t);
                      return o.fixedBytes.encode({ type: "bytes24", buffer: e, value: i, packed: n, tight: s });
                    },
                    decode: ({ value: e }) => ({ address: (0, n.bytesToHex)(e.slice(0, 20)), selector: (0, n.bytesToHex)(e.slice(20, 24)) })
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/function.js" }
    ],
    [
      988,
      {
        "./address": 982,
        "./array": 983,
        "./bool": 984,
        "./bytes": 985,
        "./fixed-bytes": 986,
        "./function": 987,
        "./number": 989,
        "./parser": 990,
        "./string": 991,
        "./tuple": 992
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var s = Object.getOwnPropertyDescriptor(t, r);
                          (s && !("get" in s ? !t.__esModule : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  s(e("./address"), r),
                  s(e("./array"), r),
                  s(e("./bool"), r),
                  s(e("./bytes"), r),
                  s(e("./fixed-bytes"), r),
                  s(e("./function"), r),
                  s(e("./number"), r),
                  s(e("./parser"), r),
                  s(e("./string"), r),
                  s(e("./tuple"), r);
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/index.js" }
    ],
    [
      989,
      { "../errors": 978, "../utils": 996, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.number = r.getBigInt = r.assertNumberLength = r.getLength = r.isSigned = void 0);
                const n = e("@metamask/utils"),
                  s = e("../errors"),
                  i = e("../utils"),
                  o = /^u?int(?<length>[0-9]*)?$/u;
                r.isSigned = (e) => !e.startsWith("u");
                r.getLength = (e) => {
                  if ("int" === e || "uint" === e) return 256;
                  const t = e.match(o);
                  (0, n.assert)(t?.groups?.length, new s.ParserError(`Invalid number type. Expected a number type, but received "${e}".`));
                  const r = parseInt(t.groups.length, 10);
                  return (
                    (0, n.assert)(
                      r >= 8 && r <= 256,
                      new s.ParserError(`Invalid number length. Expected a number between 8 and 256, but received "${e}".`)
                    ),
                    (0, n.assert)(r % 8 == 0, new s.ParserError(`Invalid number length. Expected a multiple of 8, but received "${e}".`)),
                    r
                  );
                };
                r.assertNumberLength = (e, t) => {
                  const i = (0, r.getLength)(t),
                    o = BigInt(2) ** BigInt(i - ((0, r.isSigned)(t) ? 1 : 0)) - BigInt(1);
                  (0, r.isSigned)(t)
                    ? (0, n.assert)(e >= -(o + BigInt(1)) && e <= o, new s.ParserError(`Number "${e}" is out of range for type "${t}".`))
                    : (0, n.assert)(e <= o, new s.ParserError(`Number "${e}" is out of range for type "${t}".`));
                };
                (r.getBigInt = (e) => {
                  try {
                    return (0, n.createBigInt)(e);
                  } catch {
                    throw new s.ParserError(`Invalid number. Expected a valid number value, but received "${e}".`);
                  }
                }),
                  (r.number = {
                    isDynamic: !1,
                    isType: (e) => o.test(e),
                    getByteLength: () => 32,
                    encode({ type: e, buffer: t, value: s, packed: o }) {
                      const a = (0, r.getBigInt)(s);
                      if (((0, r.assertNumberLength)(a, e), (0, r.isSigned)(e))) {
                        if (o) {
                          const s = (0, r.getLength)(e) / 8;
                          return (0, n.concatBytes)([t, (0, n.signedBigIntToBytes)(a, s)]);
                        }
                        return (0, n.concatBytes)([t, (0, i.padStart)((0, n.signedBigIntToBytes)(a, 32))]);
                      }
                      if (o) {
                        const s = (0, r.getLength)(e) / 8;
                        return (0, n.concatBytes)([t, (0, i.padStart)((0, n.bigIntToBytes)(a), s)]);
                      }
                      return (0, n.concatBytes)([t, (0, i.padStart)((0, n.bigIntToBytes)(a))]);
                    },
                    decode({ type: e, value: t }) {
                      const s = t.subarray(0, 32);
                      if ((0, r.isSigned)(e)) {
                        const t = (0, n.bytesToSignedBigInt)(s);
                        return (0, r.assertNumberLength)(t, e), t;
                      }
                      const i = (0, n.bytesToBigInt)(s);
                      return (0, r.assertNumberLength)(i, e), i;
                    }
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/number.js" }
    ],
    [
      990,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/parser.js" }
    ],
    [
      991,
      { "./bytes": 985, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.string = void 0);
                const n = e("@metamask/utils"),
                  s = e("./bytes");
                r.string = {
                  isDynamic: !0,
                  isType: (e) => "string" === e,
                  getByteLength: () => 32,
                  encode: ({ buffer: e, value: t, packed: r, tight: i }) =>
                    s.bytes.encode({ type: "bytes", buffer: e, value: (0, n.stringToBytes)(t), packed: r, tight: i }),
                  decode: (e) => (0, n.bytesToString)(s.bytes.decode(e))
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/string.js" }
    ],
    [
      992,
      { "../errors": 978, "../packer": 981, "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.tuple = r.getTupleElements = void 0);
                const n = e("@metamask/utils"),
                  s = e("../errors"),
                  i = e("../packer"),
                  o = /^\((.+)\)$/u;
                (r.getTupleElements = (e) => {
                  (0, n.assert)(
                    e.startsWith("(") && e.endsWith(")"),
                    new s.ParserError(`Invalid tuple type. Expected tuple type, but received "${e}".`)
                  );
                  const t = [];
                  let r = "",
                    i = 0;
                  for (let n = 1; n < e.length - 1; n++) {
                    const s = e[n];
                    "," === s && 0 === i ? (t.push(r.trim()), (r = "")) : ((r += s), "(" === s ? (i += 1) : ")" === s && (i -= 1));
                  }
                  return r.trim() && t.push(r.trim()), t;
                }),
                  (r.tuple = {
                    isDynamic: (e) =>
                      (0, r.getTupleElements)(e).some((e) => {
                        const t = (0, i.getParser)(e);
                        return (0, i.isDynamicParser)(t, e);
                      }),
                    isType: (e) => ((e) => o.test(e))(e),
                    getByteLength(e) {
                      if ((0, i.isDynamicParser)(this, e)) return 32;
                      return (0, r.getTupleElements)(e).reduce((e, t) => e + (0, i.getParser)(t).getByteLength(t), 0);
                    },
                    encode({ type: e, buffer: t, value: n, packed: s, tight: o }) {
                      const a = (0, r.getTupleElements)(e);
                      return (0, i.pack)({ types: a, values: n, byteArray: t, packed: s, tight: o });
                    },
                    decode({ type: e, value: t, skip: n }) {
                      const s = (0, r.getTupleElements)(e);
                      return n(this.getByteLength(e) - 32), (0, i.unpack)(s, t);
                    }
                  });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/parsers/tuple.js" }
    ],
    [
      993,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/types/abi.js" }
    ],
    [
      994,
      { "./abi": 993 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var s = Object.getOwnPropertyDescriptor(t, r);
                          (s && !("get" in s ? !t.__esModule : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), s(e("./abi"), r);
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/types/index.js" }
    ],
    [
      995,
      { "@metamask/utils": 1893 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.padEnd = r.padStart = r.set = void 0);
                const n = e("@metamask/utils");
                r.set = (e, t, r) => (0, n.concatBytes)([e.subarray(0, r), t, e.subarray(r + t.length)]);
                r.padStart = (e, t = 32) => {
                  const r = new Uint8Array(Math.max(t - e.length, 0)).fill(0);
                  return (0, n.concatBytes)([r, e]);
                };
                r.padEnd = (e, t = 32) => {
                  const r = new Uint8Array(Math.max(t - e.length, 0)).fill(0);
                  return (0, n.concatBytes)([e, r]);
                };
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/utils/buffer.js" }
    ],
    [
      996,
      { "./buffer": 995 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var s = Object.getOwnPropertyDescriptor(t, r);
                          (s && !("get" in s ? !t.__esModule : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), s(e("./buffer"), r);
              };
            };
      },
      { package: "@metamask/assets-controllers>@metamask/abi-utils", file: "node_modules/@metamask/abi-utils/dist/utils/index.js" }
    ]
  ],
  [],
  {}
);
