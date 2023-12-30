!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("bloodhound", ["jquery"], function (t) {
        return (e.Bloodhound = i(t));
      })
    : "object" == typeof exports
    ? (module.exports = i(require("jquery")))
    : (e.Bloodhound = i(jQuery));
})(this, function (l) {
  var f = (function () {
      "use strict";
      return {
        isMsie: function () {
          return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2];
        },
        isBlankString: function (t) {
          return !t || /^\s*$/.test(t);
        },
        escapeRegExChars: function (t) {
          return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function (t) {
          return "string" == typeof t;
        },
        isNumber: function (t) {
          return "number" == typeof t;
        },
        isArray: l.isArray,
        isFunction: l.isFunction,
        isObject: l.isPlainObject,
        isUndefined: function (t) {
          return void 0 === t;
        },
        isElement: function (t) {
          return !(!t || 1 !== t.nodeType);
        },
        isJQuery: function (t) {
          return t instanceof l;
        },
        toStr: function t(e) {
          return f.isUndefined(e) || null === e ? "" : e + "";
        },
        bind: l.proxy,
        each: function (t, i) {
          function e(t, e) {
            return i(e, t);
          }
          l.each(t, e);
        },
        map: l.map,
        filter: l.grep,
        every: function (i, r) {
          var n = !0;
          return i
            ? (l.each(i, function (t, e) {
                if (!(n = r.call(null, e, t, i))) return !1;
              }),
              !!n)
            : n;
        },
        some: function (i, r) {
          var n = !1;
          return i
            ? (l.each(i, function (t, e) {
                if ((n = r.call(null, e, t, i))) return !1;
              }),
              !!n)
            : n;
        },
        mixin: l.extend,
        identity: function (t) {
          return t;
        },
        clone: function (t) {
          return l.extend(!0, {}, t);
        },
        getIdGenerator: function () {
          var t = 0;
          return function () {
            return t++;
          };
        },
        templatify: function t(e) {
          return l.isFunction(e) ? e : i;
          function i() {
            return String(e);
          }
        },
        defer: function (t) {
          setTimeout(function () {
            t();
          }, 0);
        },
        debounce: function (n, s, o) {
          var u, c;
          return function () {
            var t = this,
              e = arguments,
              i,
              r,
              i = function () {
                (u = null), o || (c = n.apply(t, e));
              },
              r = o && !u;
            return (
              clearTimeout(u),
              (u = setTimeout(function () {
                i();
              }, s)),
              (c = r ? n.apply(t, e) : c)
            );
          };
        },
        throttle: function (i, r) {
          var n,
            s,
            o,
            u,
            c,
            a,
            c = 0,
            a = function () {
              (c = new Date()), (o = null), (u = i.apply(n, s));
            };
          return function () {
            var t = new Date(),
              e = r - (t - c);
            return (
              (n = this),
              (s = arguments),
              e <= 0
                ? (clearTimeout(o), (o = null), (c = t), (u = i.apply(n, s)))
                : (o =
                    o ||
                    setTimeout(function () {
                      a();
                    }, e)),
              u
            );
          };
        },
        stringify: function (t) {
          return f.isString(t) ? t : JSON.stringify(t);
        },
        noop: function () {}
      };
    })(),
    u = "0.11.1",
    t = (function () {
      "use strict";
      return { nonword: e, whitespace: t, obj: { nonword: i(e), whitespace: i(t) } };
      function t(t) {
        return (t = f.toStr(t)) ? t.split(/\s+/) : [];
      }
      function e(t) {
        return (t = f.toStr(t)) ? t.split(/\W+/) : [];
      }
      function i(n) {
        return function t(r) {
          return (
            (r = f.isArray(r) ? r : [].slice.call(arguments, 0)),
            function t(e) {
              var i = [];
              return (
                f.each(r, function (t) {
                  i = i.concat(n(f.toStr(e[t])));
                }),
                i
              );
            }
          );
        };
      }
    })(),
    i = (function () {
      "use strict";
      function t(t) {
        (this.maxSize = f.isNumber(t) ? t : 100), this.reset(), this.maxSize <= 0 && (this.set = this.get = l.noop);
      }
      function e() {
        this.head = this.tail = null;
      }
      function n(t, e) {
        (this.key = t), (this.val = e), (this.prev = this.next = null);
      }
      return (
        f.mixin(t.prototype, {
          set: function t(e, i) {
            var r = this.list.tail,
              r;
            this.size >= this.maxSize && (this.list.remove(r), delete this.hash[r.key], this.size--),
              (r = this.hash[e])
                ? ((r.val = i), this.list.moveToFront(r))
                : ((r = new n(e, i)), this.list.add(r), (this.hash[e] = r), this.size++);
          },
          get: function t(e) {
            var e = this.hash[e];
            if (e) return this.list.moveToFront(e), e.val;
          },
          reset: function t() {
            (this.size = 0), (this.hash = {}), (this.list = new e());
          }
        }),
        f.mixin(e.prototype, {
          add: function t(e) {
            this.head && ((e.next = this.head), (this.head.prev = e)), (this.head = e), (this.tail = this.tail || e);
          },
          remove: function t(e) {
            e.prev ? (e.prev.next = e.next) : (this.head = e.next), e.next ? (e.next.prev = e.prev) : (this.tail = e.prev);
          },
          moveToFront: function (t) {
            this.remove(t), this.add(t);
          }
        }),
        t
      );
    })(),
    e = (function () {
      "use strict";
      var s;
      try {
        (s = window.localStorage).setItem("~~~", "!"), s.removeItem("~~~");
      } catch (t) {
        s = null;
      }
      function t(t, e) {
        (this.prefix = ["__", t, "__"].join("")),
          (this.ttlKey = "__ttl__"),
          (this.keyMatcher = new RegExp("^" + f.escapeRegExChars(this.prefix))),
          (this.ls = e || s),
          this.ls || this._noop();
      }
      return (
        f.mixin(t.prototype, {
          _prefix: function (t) {
            return this.prefix + t;
          },
          _ttlKey: function (t) {
            return this._prefix(t) + this.ttlKey;
          },
          _noop: function () {
            this.get = this.set = this.remove = this.clear = this.isExpired = f.noop;
          },
          _safeSet: function (t, e) {
            try {
              this.ls.setItem(t, e);
            } catch (t) {
              "QuotaExceededError" === t.name && (this.clear(), this._noop());
            }
          },
          get: function (t) {
            return this.isExpired(t) && this.remove(t), e(this.ls.getItem(this._prefix(t)));
          },
          set: function (t, e, i) {
            return (
              f.isNumber(i) ? this._safeSet(this._ttlKey(t), n(r() + i)) : this.ls.removeItem(this._ttlKey(t)),
              this._safeSet(this._prefix(t), n(e))
            );
          },
          remove: function (t) {
            return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this;
          },
          clear: function () {
            for (var t, e = i(this.keyMatcher), t = e.length; t--; ) this.remove(e[t]);
            return this;
          },
          isExpired: function (t) {
            var t = e(this.ls.getItem(this._ttlKey(t)));
            return !!(f.isNumber(t) && r() > t);
          }
        }),
        t
      );
      function r() {
        return new Date().getTime();
      }
      function n(t) {
        return JSON.stringify(f.isUndefined(t) ? null : t);
      }
      function e(t) {
        return l.parseJSON(t);
      }
      function i(t) {
        for (var e, i, r = [], n = s.length, e = 0; e < n; e++) (i = s.key(e)).match(t) && r.push(i.replace(t, ""));
        return r;
      }
    })(),
    r = (function () {
      "use strict";
      var c = 0,
        a = {},
        h = 6,
        e = new i(10);
      function t(t) {
        (t = t || {}),
          (this.cancelled = !1),
          (this.lastReq = null),
          (this._send = t.transport),
          (this._get = t.limiter ? t.limiter(this._get) : this._get),
          (this._cache = !1 === t.cache ? new i(0) : e);
      }
      return (
        (t.setMaxPendingRequests = function t(e) {
          h = e;
        }),
        (t.resetCache = function t() {
          e.reset();
        }),
        f.mixin(t.prototype, {
          _fingerprint: function t(e) {
            return (e = e || {}).url + e.type + l.param(e.data || {});
          },
          _get: function (t, e) {
            var i = this,
              r,
              n;
            function s(t) {
              e(null, t), i._cache.set(r, t);
            }
            function o() {
              e(!0);
            }
            function u() {
              c--, delete a[r], i.onDeckRequestArgs && (i._get.apply(i, i.onDeckRequestArgs), (i.onDeckRequestArgs = null));
            }
            (r = this._fingerprint(t)),
              this.cancelled ||
                r !== this.lastReq ||
                ((n = a[r])
                  ? n.done(s).fail(o)
                  : c < h
                  ? (c++, (a[r] = this._send(t).done(s).fail(o).always(u)))
                  : (this.onDeckRequestArgs = [].slice.call(arguments, 0)));
          },
          get: function (t, e) {
            var i, i;
            (e = e || l.noop),
              (t = f.isString(t) ? { url: t } : t || {}),
              (i = this._fingerprint(t)),
              (this.cancelled = !1),
              (this.lastReq = i),
              (i = this._cache.get(i)) ? e(null, i) : this._get(t, e);
          },
          cancel: function () {
            this.cancelled = !0;
          }
        }),
        t
      );
    })(),
    n = (window.SearchIndex = (function () {
      "use strict";
      var t = "c",
        e = "i";
      function i(t) {
        ((t = t || {}).datumTokenizer && t.queryTokenizer) || l.error("datumTokenizer and queryTokenizer are both required"),
          (this.identify = t.identify || f.stringify),
          (this.datumTokenizer = t.datumTokenizer),
          (this.queryTokenizer = t.queryTokenizer),
          this.reset();
      }
      return (
        f.mixin(i.prototype, {
          bootstrap: function t(e) {
            (this.datums = e.datums), (this.trie = e.trie);
          },
          add: function (t) {
            var s = this;
            (t = f.isArray(t) ? t : [t]),
              f.each(t, function (t) {
                var n, t;
                (s.datums[(n = s.identify(t))] = t),
                  (t = r(s.datumTokenizer(t))),
                  f.each(t, function (t) {
                    for (var e, i, r, e = s.trie, i = t.split(""); (r = i.shift()); ) (e = e.c[r] || (e.c[r] = o())).i.push(n);
                  });
              });
          },
          get: function t(e) {
            var i = this;
            return f.map(e, function (t) {
              return i.datums[t];
            });
          },
          search: function t(e) {
            var n = this,
              e,
              s,
              e = r(this.queryTokenizer(e));
            return (
              f.each(e, function (t) {
                var e, i, r, t;
                if (s && 0 === s.length) return !1;
                for (e = n.trie, i = t.split(""); e && (r = i.shift()); ) e = e.c[r];
                if (!e || 0 !== i.length) return !(s = []);
                (t = e.i.slice(0)), (s = s ? c(s, t) : t);
              }),
              s
                ? f.map(u(s), function (t) {
                    return n.datums[t];
                  })
                : []
            );
          },
          all: function t() {
            var e = [],
              i;
            for (i in this.datums) e.push(this.datums[i]);
            return e;
          },
          reset: function t() {
            (this.datums = {}), (this.trie = o());
          },
          serialize: function t() {
            return { datums: this.datums, trie: this.trie };
          }
        }),
        i
      );
      function r(t) {
        return (
          (t = f.filter(t, function (t) {
            return !!t;
          })),
          (t = f.map(t, function (t) {
            return t.toLowerCase();
          }))
        );
      }
      function o() {
        var t = { i: [], c: {} };
        return t;
      }
      function u(t) {
        for (var e = {}, i = [], r = 0, n = t.length; r < n; r++) e[t[r]] || ((e[t[r]] = !0), i.push(t[r]));
        return i;
      }
      function c(t, e) {
        for (var i = 0, r = 0, n = [], s = ((t = t.sort()), (e = e.sort()), t.length), o = e.length; i < s && r < o; )
          t[i] < e[r] ? i++ : (t[i] > e[r] || (n.push(t[i]), i++), r++);
        return n;
      }
    })()),
    s = (function () {
      "use strict";
      var r;
      function t(t) {
        (this.url = t.url),
          (this.ttl = t.ttl),
          (this.cache = t.cache),
          (this.prepare = t.prepare),
          (this.transform = t.transform),
          (this.transport = t.transport),
          (this.thumbprint = t.thumbprint),
          (this.storage = new e(t.cacheKey));
      }
      return (
        (r = { data: "data", protocol: "protocol", thumbprint: "thumbprint" }),
        f.mixin(t.prototype, {
          _settings: function t() {
            return { url: this.url, type: "GET", dataType: "json" };
          },
          store: function t(e) {
            this.cache &&
              (this.storage.set(r.data, e, this.ttl),
              this.storage.set(r.protocol, location.protocol, this.ttl),
              this.storage.set(r.thumbprint, this.thumbprint, this.ttl));
          },
          fromCache: function t() {
            var e = {},
              i;
            return this.cache &&
              ((e.data = this.storage.get(r.data)),
              (e.protocol = this.storage.get(r.protocol)),
              (e.thumbprint = this.storage.get(r.thumbprint)),
              (i = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol),
              e.data) &&
              !i
              ? e.data
              : null;
          },
          fromNetwork: function (e) {
            var i = this,
              t;
            function r() {
              e(!0);
            }
            function n(t) {
              e(null, i.transform(t));
            }
            e && ((t = this.prepare(this._settings())), this.transport(t).fail(r).done(n));
          },
          clear: function t() {
            return this.storage.clear(), this;
          }
        }),
        t
      );
    })(),
    o = (function () {
      "use strict";
      function t(t) {
        (this.url = t.url),
          (this.prepare = t.prepare),
          (this.transform = t.transform),
          (this.transport = new r({ cache: t.cache, limiter: t.limiter, transport: t.transport }));
      }
      return (
        f.mixin(t.prototype, {
          _settings: function t() {
            return { url: this.url, type: "GET", dataType: "json" };
          },
          get: function t(e, i) {
            var r = this,
              e;
            if (i) return (e = this.prepare((e = e || ""), this._settings())), this.transport.get(e, n);
            function n(t, e) {
              i(t ? [] : r.transform(e));
            }
          },
          cancelLastRequest: function t() {
            this.transport.cancel();
          }
        }),
        t
      );
    })(),
    c = (function () {
      "use strict";
      return function t(e) {
        var i,
          r,
          i = {
            initialize: !0,
            identify: f.stringify,
            datumTokenizer: null,
            queryTokenizer: null,
            sufficient: 5,
            sorter: null,
            local: [],
            prefetch: null,
            remote: null
          };
        return (
          (e = f.mixin(i, e || {})).datumTokenizer || l.error("datumTokenizer is required"),
          e.queryTokenizer || l.error("queryTokenizer is required"),
          (r = e.sorter),
          (e.sorter = r
            ? function (t) {
                return t.sort(r);
              }
            : f.identity),
          (e.local = f.isFunction(e.local) ? e.local() : e.local),
          (e.prefetch = n(e.prefetch)),
          (e.remote = s(e.remote)),
          e
        );
      };
      function n(t) {
        var e;
        return t
          ? ((e = {
              url: null,
              ttl: 864e5,
              cache: !0,
              cacheKey: null,
              thumbprint: "",
              prepare: f.identity,
              transform: f.identity,
              transport: null
            }),
            (t = f.isString(t) ? { url: t } : t),
            (t = f.mixin(e, t)).url || l.error("prefetch requires url to be set"),
            (t.transform = t.filter || t.transform),
            (t.cacheKey = t.cacheKey || t.url),
            (t.thumbprint = u + t.thumbprint),
            (t.transport = t.transport ? o(t.transport) : l.ajax),
            t)
          : null;
      }
      function s(t) {
        var e;
        if (t)
          return (
            (e = {
              url: null,
              cache: !0,
              prepare: null,
              replace: null,
              wildcard: null,
              limiter: null,
              rateLimitBy: "debounce",
              rateLimitWait: 300,
              transform: f.identity,
              transport: null
            }),
            (t = f.isString(t) ? { url: t } : t),
            (t = f.mixin(e, t)).url || l.error("remote requires url to be set"),
            (t.transform = t.filter || t.transform),
            (t.prepare = i(t)),
            (t.limiter = r(t)),
            (t.transport = t.transport ? o(t.transport) : l.ajax),
            delete t.replace,
            delete t.wildcard,
            delete t.rateLimitBy,
            delete t.rateLimitWait,
            t
          );
      }
      function i(t) {
        var e,
          i,
          r,
          e = t.prepare,
          i = t.replace,
          r = t.wildcard;
        return (e = e || (i ? n : t.wildcard ? s : o));
        function n(t, e) {
          return (e.url = i(e.url, t)), e;
        }
        function s(t, e) {
          return (e.url = e.url.replace(r, encodeURIComponent(t))), e;
        }
        function o(t, e) {
          return e;
        }
      }
      function r(t) {
        var e,
          i,
          t,
          e = t.limiter,
          i = t.rateLimitBy,
          t = t.rateLimitWait;
        return (e = e || (/^throttle$/i.test(i) ? n : r)(t));
        function r(i) {
          return function t(e) {
            return f.debounce(e, i);
          };
        }
        function n(i) {
          return function t(e) {
            return f.throttle(e, i);
          };
        }
      }
      function o(s) {
        return function t(e) {
          var i = l.Deferred();
          return s(e, r, n), i;
          function r(t) {
            f.defer(function () {
              i.resolve(t);
            });
          }
          function n(t) {
            f.defer(function () {
              i.reject(t);
            });
          }
        };
      }
    })(),
    a;
  return (function () {
    "use strict";
    var e;
    function i(t) {
      (t = c(t)),
        (this.sorter = t.sorter),
        (this.identify = t.identify),
        (this.sufficient = t.sufficient),
        (this.local = t.local),
        (this.remote = t.remote ? new o(t.remote) : null),
        (this.prefetch = t.prefetch ? new s(t.prefetch) : null),
        (this.index = new n({ identify: this.identify, datumTokenizer: t.datumTokenizer, queryTokenizer: t.queryTokenizer })),
        !1 !== t.initialize && this.initialize();
    }
    return (
      (e = window && window.Bloodhound),
      (i.noConflict = function t() {
        return window && (window.Bloodhound = e), i;
      }),
      (i.tokenizers = t),
      f.mixin(i.prototype, {
        __ttAdapter: function t() {
          var r = this;
          return this.remote ? e : i;
          function e(t, e, i) {
            return r.search(t, e, i);
          }
          function i(t, e) {
            return r.search(t, e);
          }
        },
        _loadPrefetch: function t() {
          var i = this,
            r,
            e,
            r = l.Deferred();
          return (
            this.prefetch
              ? (e = this.prefetch.fromCache())
                ? (this.index.bootstrap(e), r.resolve())
                : this.prefetch.fromNetwork(n)
              : r.resolve(),
            r.promise()
          );
          function n(t, e) {
            if (t) return r.reject();
            i.add(e), i.prefetch.store(i.index.serialize()), r.resolve();
          }
        },
        _initialize: function t() {
          var e = this,
            i;
          return this.clear(), (this.initPromise = this._loadPrefetch()).done(r), this.initPromise;
          function r() {
            e.add(e.local);
          }
        },
        initialize: function t(e) {
          return !this.initPromise || e ? this._initialize() : this.initPromise;
        },
        add: function t(e) {
          return this.index.add(e), this;
        },
        get: function t(e) {
          return (e = f.isArray(e) ? e : [].slice.call(arguments)), this.index.get(e);
        },
        search: function t(e, i, r) {
          var n = this,
            s,
            s = this.sorter(this.index.search(e));
          return (
            i(this.remote ? s.slice() : s),
            this.remote && s.length < this.sufficient ? this.remote.get(e, o) : this.remote && this.remote.cancelLastRequest(),
            this
          );
          function o(t) {
            var i = [];
            f.each(t, function (e) {
              f.some(s, function (t) {
                return n.identify(e) === n.identify(t);
              }) || i.push(e);
            }),
              r && r(i);
          }
        },
        all: function t() {
          return this.index.all();
        },
        clear: function t() {
          return this.index.reset(), this;
        },
        clearPrefetchCache: function t() {
          return this.prefetch && this.prefetch.clear(), this;
        },
        clearRemoteCache: function t() {
          return r.resetCache(), this;
        },
        ttAdapter: function t() {
          return this.__ttAdapter();
        }
      }),
      i
    );
  })();
});