!(function (e) {
  "use strict";
  var c = !1;
  try {
    throw new Error();
  } catch (ut) {
    c = !!ut.stack;
  }
  var r = Object.prototype.toString,
    t = "Function",
    o = e.window[t].prototype.toString,
    i = /^\[object .+?Constructor\]$/,
    u = RegExp(
      "^" +
        String(r)
          .replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&")
          .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  function n(t) {
    var n = typeof t;
    return "function" == n ? u.test(o.call(t)) : t && "object" == n && i.test(r.call(t));
  }
  var p,
    s,
    f,
    a,
    l,
    d,
    h,
    y,
    v = I(),
    m = function () {},
    w =
      ((l = a = { task: void 0, next: null }),
      (h = void 0),
      (y = d = !1),
      (w = function (t) {
        (l = l.next = { task: t, domain: y && process.domain, next: null }), d || ((d = !0), h());
      }),
      (h =
        "undefined" != typeof process && process.nextTick
          ? ((y = !0),
            function () {
              process.nextTick(j);
            })
          : "function" == typeof setImmediate
          ? "undefined" != typeof window && n(setImmediate.bind)
            ? setImmediate.bind(window, j)
            : function () {
                setImmediate(j);
              }
          : "undefined" != typeof MessageChannel
          ? (((s = new MessageChannel()).port1.onmessage = function () {
              (h = f), (s.port1.onmessage = j)();
            }),
            (f = function () {
              s.port2.postMessage(0);
            }),
            function () {
              e.WindowUtil.setTimeout(j, 0), f();
            })
          : function () {
              e.WindowUtil.setTimeout(j, 0);
            }),
      w);
  function j() {
    for (; a.next; ) {
      var t = (a = a.next).task;
      a.task = void 0;
      var n = a.domain;
      n && ((a.domain = void 0), n.enter());
      try {
        t();
      } catch (ut) {
        if (y) throw (n && n.exit(), e.WindowUtil.setTimeout(j, 0), n && n.enter(), ut);
        setTimeout(function () {
          throw ut;
        }, 0);
      }
      n && n.exit();
    }
    d = !1;
  }
  var k = e.window[t].call;
  function g(t) {
    return function () {
      return k.apply(t, arguments);
    };
  }
  var b = g(Array.prototype.slice),
    R = g(function (t, n) {
      var e = 0,
        r = this.length;
      if (1 === arguments.length)
        for (;;) {
          if (e in this) {
            n = this[e++];
            break;
          }
          if (++e >= r) throw new TypeError();
        }
      for (; e < r; e++) e in this && (n = t(n, this[e], e));
      return n;
    }),
    x = g(
      Array.prototype.indexOf ||
        function (t) {
          for (var n = 0; n < this.length; n++) if (this[n] === t) return n;
          return -1;
        }
    ),
    O = g(
      Array.prototype.map ||
        function (r, o) {
          var i = this,
            u = [];
          return (
            R(
              i,
              function (t, n, e) {
                u.push(r.call(o, n, e, i));
              },
              void 0
            ),
            u
          );
        }
    ),
    T = n(Object.create)
      ? Object.create
      : function (t) {
          function n() {}
          return (n.prototype = t), new n();
        },
    S = g(Object.prototype.hasOwnProperty),
    N =
      Object.keys ||
      function (t) {
        var n,
          e = [];
        for (n in t) S(t, n) && e.push(n);
        return e;
      },
    E = g(Object.prototype.toString);
  function D(t) {
    return t === Object(t);
  }
  var U =
      "undefined" != typeof ReturnValue
        ? ReturnValue
        : function (t) {
            this.value = t;
          },
    P = "From previous event:";
  function $(t, n) {
    if (c && n.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(P)) {
      for (var e = [], r = n; r; r = r.source) r.stack && e.unshift(r.stack);
      e.unshift(t.stack);
      n = e.join("\n" + P + "\n");
      t.stack = (function (t) {
        for (var n = t.split("\n"), e = [], r = 0; r < n.length; ++r) {
          var o = n[r];
          !(function (t) {
            var n = C(t);
            if (!n) return !1;
            (t = n[0]), (n = n[1]);
            return t === p && v <= n && n <= it;
          })(o) &&
            !(function (t) {
              return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:");
            })(o) &&
            o &&
            e.push(o);
        }
        return e.join("\n");
      })(n);
    }
  }
  function C(t) {
    var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
    if (n) return [n[1], Number(n[2])];
    n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
    if (n) return [n[1], Number(n[2])];
    t = /.*@(.+):(\d+)$/.exec(t);
    return t ? [t[1], Number(t[2])] : void 0;
  }
  function I() {
    if (c)
      try {
        throw new Error();
      } catch (ut) {
        var t = ut.stack.split("\n"),
          t = C(0 < t[0].indexOf("@") ? t[1] : t[2]);
        return t ? ((p = t[0]), t[1]) : void 0;
      }
  }
  function A(t, n, e) {
    return function () {
      return (
        "undefined" != typeof console &&
          "function" == typeof console.warn &&
          console.warn(n + " is deprecated, use " + e + " instead.", new Error("").stack),
        t.apply(t, arguments)
      );
    };
  }
  function F(t) {
    return L(t) ? t : (q(t) ? tt : _)(t);
  }
  function M() {
    var o,
      i = [],
      u = [],
      t = T(M.prototype),
      n = T(W.prototype);
    if (
      ((n.promiseDispatch = function (t, n, e) {
        var r = b(arguments);
        i
          ? (i.push(r), "when" === n && e[1] && u.push(e[1]))
          : w(function () {
              o.promiseDispatch.apply(o, r);
            });
      }),
      (n.valueOf = A(
        function () {
          if (i) return n;
          var t = V(o);
          return L(t) && (o = t), t;
        },
        "valueOf",
        "inspect"
      )),
      (n.inspect = function () {
        return o ? o.inspect() : { state: "pending" };
      }),
      F.longStackSupport && c)
    )
      try {
        throw new Error();
      } catch (ut) {
        n.stack = ut.stack.substring(ut.stack.indexOf("\n") + 1);
      }
    function e(e) {
      (o = e),
        (n.source = e),
        R(
          i,
          function (t, n) {
            w(function () {
              e.promiseDispatch.apply(e, n);
            });
          },
          void 0
        ),
        (u = i = void 0);
    }
    return (
      (t.promise = n),
      (t.resolve = function (t) {
        o || e(F(t));
      }),
      (t.fulfill = function (t) {
        o || e(_(t));
      }),
      (t.reject = function (t) {
        o || e(Z(t));
      }),
      (t.notify = function (e) {
        o ||
          R(
            u,
            function (t, n) {
              w(function () {
                n(e);
              });
            },
            void 0
          );
      }),
      t
    );
  }
  function Q(t) {
    if ("function" != typeof t) throw new TypeError("resolver must be a function.");
    var n = M();
    try {
      t(n.resolve, n.reject, n.notify);
    } catch (e) {
      n.reject(e);
    }
    return n.promise;
  }
  function W(i, u, n) {
    void 0 === u &&
      (u = function (t) {
        return Z(new Error("Promise does not support operation: " + t));
      }),
      void 0 === n &&
        (n = function () {
          return { state: "unknown" };
        });
    var t,
      c = T(W.prototype);
    return (
      (c.promiseDispatch = function (t, n, e) {
        var r;
        try {
          r = i[n] ? i[n].apply(c, e) : u.call(c, n, e);
        } catch (o) {
          r = Z(o);
        }
        t && t(r);
      }),
      (c.inspect = n) &&
        ("rejected" === (t = n()).state && (c.exception = t.reason),
        (c.valueOf = A(function () {
          var t = n();
          return "pending" === t.state || "rejected" === t.state ? c : t.value;
        }))),
      c
    );
  }
  function B(t, n, e, r) {
    return F(t).then(n, e, r);
  }
  function V(t) {
    if (L(t)) {
      var n = t.inspect();
      if ("fulfilled" === n.state) return n.value;
    }
    return t;
  }
  function L(t) {
    return D(t) && "function" == typeof t.promiseDispatch && "function" == typeof t.inspect;
  }
  function q(t) {
    return D(t) && "function" == typeof t.then;
  }
  ((F.resolve = F).nextTick = w),
    (F.longStackSupport = !1),
    ((F.defer = M).prototype.makeNodeResolver = function () {
      var e = this;
      return function (t, n) {
        t ? e.reject(t) : 2 < arguments.length ? e.resolve(b(arguments, 1)) : e.resolve(n);
      };
    }),
    (F.promise = Q),
    (F.passByCopy = function (t) {
      return t;
    }),
    (W.prototype.passByCopy = function () {
      return this;
    }),
    (F.join = function (t, n) {
      return F(t).join(n);
    }),
    (W.prototype.join = function (t) {
      return F([this, t]).spread(function (t, n) {
        if (t === n) return t;
        throw new Error("Can't join: not the same: " + t + " " + n);
      });
    }),
    (F.race = function (o) {
      return Q(function (t, n) {
        for (var e = 0, r = o.length; e < r; e++) F(o[e]).then(t, n);
      });
    }),
    (W.prototype.race = function () {
      return this.then(F.race);
    }),
    ((F.makePromise = W).prototype.toString = function () {
      return "[object Promise]";
    }),
    (W.prototype.then = function (e, r, o) {
      var i = this,
        u = M(),
        n = !1;
      function c(t) {
        try {
          return "function" == typeof e ? e(t) : t;
        } catch (n) {
          return Z(n);
        }
      }
      function p(t) {
        if ("function" == typeof r) {
          $(t, i);
          try {
            return r(t);
          } catch (n) {
            return Z(n);
          }
        }
        return Z(t);
      }
      return (
        w(function () {
          i.promiseDispatch(
            function (t) {
              n || ((n = !0), u.resolve(c(t)));
            },
            "when",
            [
              function (t) {
                n || ((n = !0), u.resolve(p(t)));
              }
            ]
          );
        }),
        i.promiseDispatch(void 0, "when", [
          void 0,
          function (t) {
            var n,
              e,
              r = !1;
            try {
              (e = t), (n = "function" == typeof o ? o(e) : e);
            } catch (ut) {
              if (((r = !0), !F.onerror)) throw ut;
              F.onerror(ut);
            }
            r || u.notify(n);
          }
        ]),
        u.promise
      );
    }),
    (F.when = B),
    (W.prototype.thenResolve = function (t) {
      return this.then(function () {
        return t;
      });
    }),
    (F.thenResolve = function (t, n) {
      return F(t).thenResolve(n);
    }),
    (W.prototype.thenReject = function (t) {
      return this.then(function () {
        throw t;
      });
    }),
    (F.thenReject = function (t, n) {
      return F(t).thenReject(n);
    }),
    (F.nearer = V),
    (F.isPromise = L),
    (F.isPromiseAlike = q),
    (F.isPending = function (t) {
      return L(t) && "pending" === t.inspect().state;
    }),
    (W.prototype.isPending = function () {
      return "pending" === this.inspect().state;
    }),
    (F.isFulfilled = function (t) {
      return !L(t) || "fulfilled" === t.inspect().state;
    }),
    (W.prototype.isFulfilled = function () {
      return "fulfilled" === this.inspect().state;
    }),
    (F.isRejected = function (t) {
      return L(t) && "rejected" === t.inspect().state;
    });
  var z = [],
    G = [],
    H = !(W.prototype.isRejected = function () {
      return "rejected" === this.inspect().state;
    }),
    J = !0;
  function K() {
    for (var t = 0; t < z.length; t++) {
      var n = z[t];
      console.warn("Unhandled rejection reason:", n);
    }
  }
  function X() {
    (z.length = 0), (G.length = 0), (H = !1), J || ((J = !0), "undefined" != typeof process && process.on && process.on("exit", K));
  }
  function Y(t, n) {
    J &&
      (G.push(t),
      n && "undefined" != typeof n.stack ? z.push(n.stack) : z.push("(no stack) " + n),
      H ||
        "undefined" == typeof window ||
        window.Touch ||
        !window.console ||
        console.warn("[Q] Unhandled rejection reasons (should be empty):", z),
      (H = !0));
  }
  function Z(e) {
    var t = W(
      {
        when: function (t) {
          var n;
          return t && ((n = this), !J || (-1 !== (n = x(G, n)) && (G.splice(n, 1), z.splice(n, 1)))), t ? t(e) : this;
        }
      },
      function () {
        return this;
      },
      function () {
        return { state: "rejected", reason: e };
      }
    );
    return Y(t, e), t;
  }
  function _(e) {
    return W(
      {
        when: function () {
          return e;
        },
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
        delete: function (t) {
          delete e[t];
        },
        post: function (t, n) {
          return null == t ? e.apply(void 0, n) : e[t].apply(e, n);
        },
        apply: function (t, n) {
          return e.apply(t, n);
        },
        keys: function () {
          return N(e);
        }
      },
      void 0,
      function () {
        return { state: "fulfilled", value: e };
      }
    );
  }
  function tt(n) {
    var e = M();
    return (
      w(function () {
        try {
          n.then(e.resolve, e.reject, e.notify);
        } catch (t) {
          e.reject(t);
        }
      }),
      e.promise
    );
  }
  function nt(t, n, e) {
    return F(t).spread(n, e);
  }
  function et(t, n, e) {
    return F(t).dispatch(n, e);
  }
  function rt(t) {
    return B(t, function (o) {
      var i = 0,
        u = M();
      return (
        R(
          o,
          function (t, n, e) {
            var r;
            L(n) && "fulfilled" === (r = n.inspect()).state
              ? (o[e] = r.value)
              : (++i,
                B(
                  n,
                  function (t) {
                    (o[e] = t), 0 == --i && u.resolve(o);
                  },
                  u.reject,
                  function (t) {
                    u.notify({ index: e, value: t });
                  }
                ));
          },
          void 0
        ),
        0 === i && u.resolve(o),
        u.promise
      );
    });
  }
  function ot(t) {
    return B(t, function (t) {
      return (
        (t = O(t, F)),
        B(
          rt(
            O(t, function (t) {
              return B(t, m, m);
            })
          ),
          function () {
            return t;
          }
        )
      );
    });
  }
  (F.resetUnhandledRejections = X),
    (F.getUnhandledReasons = function () {
      return z.slice();
    }),
    (F.stopUnhandledRejectionTracking = function () {
      X(), "undefined" != typeof process && process.on && process.removeListener("exit", K), (J = !1);
    }),
    X(),
    (F.reject = Z),
    (F.fulfill = _),
    (F.master = function (e) {
      return W(
        { isDef: function () {} },
        function (t, n) {
          return et(e, t, n);
        },
        function () {
          return F(e).inspect();
        }
      );
    }),
    (F.spread = nt),
    (W.prototype.spread = function (n, t) {
      return this.all().then(function (t) {
        return n.apply(void 0, t);
      }, t);
    }),
    (F["async"] = function (n) {
      return function () {
        function t(t, n) {
          var e;
          try {
            e = o[t](n);
          } catch (r) {
            return "[object StopIteration]" === E((n = r)) || n instanceof U ? r.value : Z(r);
          }
          return B(e, i, u);
        }
        var o = n.apply(this, arguments),
          i = t.bind(t, "next"),
          u = t.bind(t, "throw");
        return i();
      };
    }),
    (F.spawn = function (t) {
      F.done(F["async"](t)());
    }),
    (F["return"] = function (t) {
      throw new U(t);
    }),
    (F.promised = function (e) {
      return function () {
        return nt([this, rt(arguments)], function (t, n) {
          return e.apply(t, n);
        });
      };
    }),
    (F.dispatch = et),
    (W.prototype.dispatch = function (t, n) {
      var e = this,
        r = M();
      return (
        w(function () {
          e.promiseDispatch(r.resolve, t, n);
        }),
        r.promise
      );
    }),
    (F.get = function (t, n) {
      return F(t).dispatch("get", [n]);
    }),
    (W.prototype.get = function (t) {
      return this.dispatch("get", [t]);
    }),
    (F.set = function (t, n, e) {
      return F(t).dispatch("set", [n, e]);
    }),
    (W.prototype.set = function (t, n) {
      return this.dispatch("set", [t, n]);
    }),
    (F.del = F["delete"] =
      function (t, n) {
        return F(t).dispatch("delete", [n]);
      }),
    (W.prototype.del = W.prototype["delete"] =
      function (t) {
        return this.dispatch("delete", [t]);
      }),
    (F.mapply = F.post =
      function (t, n, e) {
        return F(t).dispatch("post", [n, e]);
      }),
    (W.prototype.mapply = W.prototype.post =
      function (t, n) {
        return this.dispatch("post", [t, n]);
      }),
    (F.send =
      F.mcall =
      F.invoke =
        function (t, n) {
          return F(t).dispatch("post", [n, b(arguments, 2)]);
        }),
    (W.prototype.send =
      W.prototype.mcall =
      W.prototype.invoke =
        function (t) {
          return this.dispatch("post", [t, b(arguments, 1)]);
        }),
    (F.fapply = function (t, n) {
      return F(t).dispatch("apply", [void 0, n]);
    }),
    (W.prototype.fapply = function (t) {
      return this.dispatch("apply", [void 0, t]);
    }),
    (F["try"] = F.fcall =
      function (t) {
        return F(t).dispatch("apply", [void 0, b(arguments, 1)]);
      }),
    (W.prototype.fcall = function () {
      return this.dispatch("apply", [void 0, b(arguments)]);
    }),
    (F.fbind = function (t) {
      var n = F(t),
        e = b(arguments, 1);
      return function () {
        return n.dispatch("apply", [this, e.concat(b(arguments))]);
      };
    }),
    (W.prototype.fbind = function () {
      var t = this,
        n = b(arguments);
      return function () {
        return t.dispatch("apply", [this, n.concat(b(arguments))]);
      };
    }),
    (F.keys = function (t) {
      return F(t).dispatch("keys", []);
    }),
    (W.prototype.keys = function () {
      return this.dispatch("keys", []);
    }),
    (F.all = rt),
    (W.prototype.all = function () {
      return rt(this);
    }),
    (F.allResolved = A(ot, "allResolved", "allSettled")),
    (W.prototype.allResolved = function () {
      return ot(this);
    }),
    (F.allSettled = function (t) {
      return F(t).allSettled();
    }),
    (W.prototype.allSettled = function () {
      return this.then(function (t) {
        return rt(
          O(t, function (t) {
            function n() {
              return t.inspect();
            }
            return (t = F(t)).then(n, n);
          })
        );
      });
    }),
    (F.fail = F["catch"] =
      function (t, n) {
        return F(t).then(void 0, n);
      }),
    (W.prototype.fail = W.prototype["catch"] =
      function (t) {
        return this.then(void 0, t);
      }),
    (F.progress = function (t, n) {
      return F(t).then(void 0, void 0, n);
    }),
    (W.prototype.progress = function (t) {
      return this.then(void 0, void 0, t);
    }),
    (F.fin = F["finally"] =
      function (t, n) {
        return F(t)["finally"](n);
      }),
    (W.prototype.fin = W.prototype["finally"] =
      function (n) {
        return (
          (n = F(n)),
          this.then(
            function (t) {
              return n.fcall().then(function () {
                return t;
              });
            },
            function (t) {
              return n.fcall().then(function () {
                throw t;
              });
            }
          )
        );
      }),
    (F.done = function (t, n, e, r) {
      return F(t).done(n, e, r);
    }),
    (W.prototype.done = function (t, n, e) {
      var r = function (t) {
          w(function () {
            if (($(t, o), !F.onerror)) throw t;
            F.onerror(t);
          });
        },
        o = t || n || e ? this.then(t, n, e) : this;
      "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r);
    }),
    (F.timeout = function (t, n, e) {
      return F(t).timeout(n, e);
    }),
    (W.prototype.timeout = function (t, n) {
      var e = M(),
        r = setTimeout(function () {
          e.reject(new Error(n || "Timed out after " + t + " ms"));
        }, t);
      return (
        this.then(
          function (t) {
            clearTimeout(r), e.resolve(t);
          },
          function (t) {
            clearTimeout(r), e.reject(t);
          },
          e.notify
        ),
        e.promise
      );
    }),
    (F.delay = function (t, n) {
      return void 0 === n && ((n = t), (t = void 0)), F(t).delay(n);
    }),
    (W.prototype.delay = function (e) {
      return this.then(function (t) {
        var n = M();
        return (
          setTimeout(function () {
            n.resolve(t);
          }, e),
          n.promise
        );
      });
    }),
    (F.nfapply = function (t, n) {
      return F(t).nfapply(n);
    }),
    (W.prototype.nfapply = function (t) {
      var n = M(),
        t = b(t);
      return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise;
    }),
    (F.nfcall = function (t) {
      var n = b(arguments, 1);
      return F(t).nfapply(n);
    }),
    (W.prototype.nfcall = function () {
      var t = b(arguments),
        n = M();
      return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise;
    }),
    (F.nfbind = F.denodeify =
      function (e) {
        var r = b(arguments, 1);
        return function () {
          var t = r.concat(b(arguments)),
            n = M();
          return t.push(n.makeNodeResolver()), F(e).fapply(t).fail(n.reject), n.promise;
        };
      }),
    (W.prototype.nfbind = W.prototype.denodeify =
      function () {
        var t = b(arguments);
        return t.unshift(this), F.denodeify.apply(void 0, t);
      }),
    (F.nbind = function (e, r) {
      var o = b(arguments, 2);
      return function () {
        var t = o.concat(b(arguments)),
          n = M();
        return (
          t.push(n.makeNodeResolver()),
          F(function () {
            return e.apply(r, arguments);
          })
            .fapply(t)
            .fail(n.reject),
          n.promise
        );
      };
    }),
    (W.prototype.nbind = function () {
      var t = b(arguments, 0);
      return t.unshift(this), F.nbind.apply(void 0, t);
    }),
    (F.nmapply = F.npost =
      function (t, n, e) {
        return F(t).npost(n, e);
      }),
    (W.prototype.nmapply = W.prototype.npost =
      function (t, n) {
        var e = b(n || []),
          n = M();
        return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise;
      }),
    (F.nsend =
      F.nmcall =
      F.ninvoke =
        function (t, n) {
          var e = b(arguments, 2),
            r = M();
          return e.push(r.makeNodeResolver()), F(t).dispatch("post", [n, e]).fail(r.reject), r.promise;
        }),
    (W.prototype.nsend =
      W.prototype.nmcall =
      W.prototype.ninvoke =
        function (t) {
          var n = b(arguments, 1),
            e = M();
          return n.push(e.makeNodeResolver()), this.dispatch("post", [t, n]).fail(e.reject), e.promise;
        }),
    (F.nodeify = function (t, n) {
      return F(t).nodeify(n);
    }),
    (W.prototype.nodeify = function (n) {
      if (!n) return this;
      this.then(
        function (t) {
          w(function () {
            n(null, t);
          });
        },
        function (t) {
          w(function () {
            n(t);
          });
        }
      );
    }),
    (e.Q = F),
    e.Q.stopUnhandledRejectionTracking();
  var it = I();
})(Okta);
