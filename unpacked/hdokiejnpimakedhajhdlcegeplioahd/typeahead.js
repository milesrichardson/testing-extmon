!(function (h) {
  var c = {
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
      isArray: h.isArray,
      isFunction: h.isFunction,
      isObject: h.isPlainObject,
      isUndefined: function (t) {
        return void 0 === t;
      },
      bind: h.proxy,
      each: function (t, n) {
        function e(t, e) {
          return n(e, t);
        }
        h.each(t, e);
      },
      map: h.map,
      filter: h.grep,
      every: function (n, i) {
        var r = !0;
        return n
          ? (h.each(n, function (t, e) {
              if (!(r = i.call(null, e, t, n))) return !1;
            }),
            !!r)
          : r;
      },
      some: function (n, i) {
        var r = !1;
        return n
          ? (h.each(n, function (t, e) {
              if ((r = i.call(null, e, t, n))) return !1;
            }),
            !!r)
          : r;
      },
      mixin: h.extend,
      getUniqueId:
        ((t = 0),
        function () {
          return t++;
        }),
      templatify: function t(e) {
        return h.isFunction(e) ? e : n;
        function n() {
          return String(e);
        }
      },
      defer: function (t) {
        setTimeout(function () {
          t();
        }, 0);
      },
      debounce: function (r, s, o) {
        var u, a;
        return function () {
          var t = this,
            e = arguments,
            n,
            i,
            n = function () {
              (u = null), o || (a = r.apply(t, e));
            },
            i = o && !u;
          return (
            clearTimeout(u),
            (u = setTimeout(function () {
              n();
            }, s)),
            (a = i ? r.apply(t, e) : a)
          );
        };
      },
      throttle: function (n, i) {
        var r,
          s,
          o,
          u,
          a,
          h,
          a = 0,
          h = function () {
            (a = new Date()), (o = null), (u = n.apply(r, s));
          };
        return function () {
          var t = new Date(),
            e = i - (t - a);
          return (
            (r = this),
            (s = arguments),
            e <= 0
              ? (clearTimeout(o), (o = null), (a = t), (u = n.apply(r, s)))
              : (o =
                  o ||
                  setTimeout(function () {
                    h();
                  }, e)),
            u
          );
        };
      },
      noop: function () {}
    },
    t,
    R = "0.10.1",
    e =
      ((L = this),
      c.mixin(n.prototype, {
        set: function t(e, n) {
          var i = this.list.tail,
            i;
          this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]),
            (i = this.hash[e])
              ? ((i.val = n), this.list.moveToFront(i))
              : ((i = new N(e, n)), this.list.add(i), (this.hash[e] = i), this.size++);
        },
        get: function t(e) {
          var e = this.hash[e];
          if (e) return this.list.moveToFront(e), e.val;
        }
      }),
      c.mixin(i.prototype, {
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
      n),
    L,
    V;
  function n(t) {
    (this.maxSize = t || 100), (this.size = 0), (this.hash = {}), (this.list = new i());
  }
  function i() {
    this.head = this.tail = null;
  }
  function N(t, e) {
    (this.key = t), (this.val = e), (this.prev = this.next = null);
  }
  var H = (function () {
      var r, t;
      try {
        (r = window.localStorage).setItem("~~~", "!"), r.removeItem("~~~");
      } catch (t) {
        r = null;
      }
      function e(t) {
        (this.prefix = ["__", t, "__"].join("")), (this.ttlKey = "__ttl__"), (this.keyMatcher = new RegExp("^" + this.prefix));
      }
      return (
        (t =
          r && window.JSON
            ? {
                _prefix: function (t) {
                  return this.prefix + t;
                },
                _ttlKey: function (t) {
                  return this._prefix(t) + this.ttlKey;
                },
                get: function (t) {
                  return this.isExpired(t) && this.remove(t), n(r.getItem(this._prefix(t)));
                },
                set: function (t, e, n) {
                  return (
                    c.isNumber(n) ? r.setItem(this._ttlKey(t), s(i() + n)) : r.removeItem(this._ttlKey(t)), r.setItem(this._prefix(t), s(e))
                  );
                },
                remove: function (t) {
                  return r.removeItem(this._ttlKey(t)), r.removeItem(this._prefix(t)), this;
                },
                clear: function () {
                  for (var t, e, n = [], i = r.length, t = 0; t < i; t++)
                    (e = r.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                  for (t = n.length; t--; ) this.remove(n[t]);
                  return this;
                },
                isExpired: function (t) {
                  var t = n(r.getItem(this._ttlKey(t)));
                  return !!(c.isNumber(t) && i() > t);
                }
              }
            : { get: c.noop, set: c.noop, remove: c.noop, clear: c.noop, isExpired: c.noop }),
        c.mixin(e.prototype, t),
        e
      );
      function i() {
        return new Date().getTime();
      }
      function s(t) {
        return JSON.stringify(c.isUndefined(t) ? null : t);
      }
      function n(t) {
        return JSON.parse(t);
      }
    })(),
    O =
      ((u = 0),
      (a = {}),
      (l = 6),
      (d = new e(10)),
      (r.setMaxPendingRequests = function t(e) {
        l = e;
      }),
      (r.resetCache = function t() {
        d = new e(10);
      }),
      c.mixin(r.prototype, {
        _get: function (e, t, n) {
          var i = this,
            r;
          function s(t) {
            n && n(t), d.set(e, t);
          }
          function o() {
            u--, delete a[e], i.onDeckRequestArgs && (i._get.apply(i, i.onDeckRequestArgs), (i.onDeckRequestArgs = null));
          }
          (r = a[e])
            ? r.done(s)
            : u < l
            ? (u++, (a[e] = this._send(e, t).done(s).always(o)))
            : (this.onDeckRequestArgs = [].slice.call(arguments, 0));
        },
        get: function (t, e, n) {
          var i = this,
            r;
          return (
            c.isFunction(e) && ((n = e), (e = {})),
            (r = d.get(t))
              ? c.defer(function () {
                  n && n(r);
                })
              : this._get(t, e, n),
            !!r
          );
        }
      }),
      r),
    u,
    a,
    l,
    d;
  function r(t) {
    (this._send = (t = t || {}).transport ? B(t.transport) : h.ajax), (this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get);
  }
  function B(o) {
    return function t(e, n) {
      var i = h.Deferred();
      return o(e, n, r, s), i;
      function r(t) {
        c.defer(function () {
          i.resolve(t);
        });
      }
      function s(t) {
        c.defer(function () {
          i.reject(t);
        });
      }
    };
  }
  var j =
    (c.mixin(s.prototype, {
      bootstrap: function t(e) {
        (this.datums = e.datums), (this.trie = e.trie);
      },
      add: function (t) {
        var o = this;
        (t = c.isArray(t) ? t : [t]),
          c.each(t, function (t) {
            var s,
              t,
              s = o.datums.push(t) - 1,
              t = p(o.datumTokenizer(t));
            c.each(t, function (t) {
              for (var e, n, i, r, e = o.trie, n = t.split(""); (i = n.shift()); ) (e = e.children[i] || (e.children[i] = f())).ids.push(s);
            });
          });
      },
      get: function t(e) {
        var r = this,
          e,
          s,
          e = p(this.queryTokenizer(e));
        return (
          c.each(e, function (t) {
            var e, n, i, t;
            if (s && 0 === s.length) return !1;
            for (e = r.trie, n = t.split(""); e && (i = n.shift()); ) e = e.children[i];
            if (!e || 0 !== n.length) return !(s = []);
            (t = e.ids.slice(0)), (s = s ? M(s, t) : t);
          }),
          s
            ? c.map(Q(s), function (t) {
                return r.datums[t];
              })
            : []
        );
      },
      serialize: function t() {
        return { datums: this.datums, trie: this.trie };
      }
    }),
    s);
  function s(t) {
    ((t = t || {}).datumTokenizer && t.queryTokenizer) || h.error("datumTokenizer and queryTokenizer are both required"),
      (this.datumTokenizer = t.datumTokenizer),
      (this.queryTokenizer = t.queryTokenizer),
      (this.datums = []),
      (this.trie = f());
  }
  function p(t) {
    return (
      (t = c.filter(t, function (t) {
        return !!t;
      })),
      (t = c.map(t, function (t) {
        return t.toLowerCase();
      }))
    );
  }
  function f() {
    return { ids: [], children: {} };
  }
  function Q(t) {
    for (var e = {}, n = [], i = 0; i < t.length; i++) e[t[i]] || ((e[t[i]] = !0), n.push(t[i]));
    return n;
  }
  function M(t, e) {
    var n = 0,
      i = 0,
      r = [];
    for (t = t.sort(s), e = e.sort(s); n < t.length && i < e.length; ) t[n] < e[i] ? n++ : (t[n] > e[i] || (r.push(t[n]), n++), i++);
    return r;
    function s(t, e) {
      return t - e;
    }
  }
  var o = { local: U, prefetch: W, remote: P };
  function U(t) {
    var t = t.local || null;
    return (t = c.isFunction(t) ? t.call(null) : t);
  }
  function W(t) {
    var t,
      e,
      e = { url: null, thumbprint: "", ttl: 864e5, filter: null, ajax: {} };
    return (
      (t = t.prefetch || null) &&
        ((t = c.isString(t) ? { url: t } : t),
        ((t = c.mixin(e, t)).thumbprint = R + t.thumbprint),
        (t.ajax.type = t.ajax.type || "GET"),
        (t.ajax.dataType = t.ajax.dataType || "json"),
        t.url || h.error("prefetch requires url to be set")),
      t
    );
  }
  function P(t) {
    var t,
      e,
      e = { url: null, wildcard: "%QUERY", replace: null, rateLimitBy: "debounce", rateLimitWait: 300, send: null, filter: null, ajax: {} };
    return (
      (t = t.remote || null) &&
        ((t = c.isString(t) ? { url: t } : t),
        ((t = c.mixin(e, t)).rateLimiter = (/^throttle$/i.test(t.rateLimitBy) ? i : n)(t.rateLimitWait)),
        (t.ajax.type = t.ajax.type || "GET"),
        (t.ajax.dataType = t.ajax.dataType || "json"),
        delete t.rateLimitBy,
        delete t.rateLimitWait,
        t.url || h.error("remote requires url to be set")),
      t
    );
    function n(e) {
      return function (t) {
        return c.debounce(t, e);
      };
    }
    function i(e) {
      return function (t) {
        return c.throttle(t, e);
      };
    }
  }
  var G = (window.Bloodhound =
      ((g = { data: "data", protocol: "protocol", thumbprint: "thumbprint" }),
      (m.tokenizers = {
        whitespace: function t(e) {
          return e.split(/\s+/);
        },
        nonword: function t(e) {
          return e.split(/\W+/);
        }
      }),
      c.mixin(m.prototype, {
        _loadPrefetch: function t(e) {
          var n = this,
            i,
            i,
            i = (i = this._readFromStorage(e.thumbprint))
              ? (this.index.bootstrap(i), h.Deferred().resolve())
              : h.ajax(e.url, e.ajax).done(r);
          return i;
          function r(t) {
            var t,
              t = e.filter ? e.filter(t) : t;
            n.add(t), n._saveToStorage(n.index.serialize(), e.thumbprint, e.ttl);
          }
        },
        _getFromRemote: function t(e, n) {
          var i = this,
            e,
            r;
          return (
            (e = e || ""),
            (r = encodeURIComponent(e)),
            (e = this.remote.replace ? this.remote.replace(this.remote.url, e) : this.remote.url.replace(this.remote.wildcard, r)),
            ("undefined" == typeof g_searchGroups || g_searchGroups) &&
              "function" == typeof shouldSearchGroups &&
              shouldSearchGroups() &&
              (e += "&grp=1"),
            "function" == typeof shouldSearchNoFriends && shouldSearchNoFriends() && (e += "&nofriends=1"),
            this.transport.get(e, this.remote.ajax, s)
          );
          function s(t) {
            var t = i.remote.filter ? i.remote.filter(t) : t;
            n(t);
          }
        },
        _saveToStorage: function t(e, n, i) {
          this.storage &&
            (this.storage.set(g.data, e, i), this.storage.set(g.protocol, location.protocol, i), this.storage.set(g.thumbprint, n, i));
        },
        _readFromStorage: function t(e) {
          var n = {},
            e;
          return (
            this.storage &&
              ((n.data = this.storage.get(g.data)),
              (n.protocol = this.storage.get(g.protocol)),
              (n.thumbprint = this.storage.get(g.thumbprint))),
            (e = n.thumbprint !== e || n.protocol !== location.protocol),
            n.data && !e ? n.data : null
          );
        },
        initialize: function t() {
          var e = this,
            n,
            n = this.prefetch ? this._loadPrefetch(this.prefetch) : h.Deferred().resolve();
          return (
            this.local && n.done(i),
            (this.transport = this.remote ? new O(this.remote) : null),
            (this.initialize = function t() {
              return n.promise();
            }),
            n.promise()
          );
          function i() {
            e.add(e.local);
          }
        },
        add: function t(e) {
          this.index.add(e);
        },
        get: function t(e, i) {
          var r = this,
            s,
            n = !1;
          function o(t) {
            var n = s.slice(0);
            c.each(t, function (e) {
              var t, t;
              return (
                c.some(n, function (t) {
                  return r.dupDetector(e, t);
                }) || n.push(e),
                n.length < r.limit
              );
            }),
              i && i(r.sorter(n));
          }
          (s = this.index.get(e)),
            !(n = (s = this.sorter(s).slice(0, this.limit)).length < this.limit && this.transport ? this._getFromRemote(e, o) : n) &&
              i &&
              i(s);
        },
        ttAdapter: function t() {
          return c.bind(this.get, this);
        }
      }),
      m)),
    g;
  function m(t) {
    (t && (t.local || t.prefetch || t.remote)) || h.error("one of local, prefetch, or remote is required"),
      (this.limit = t.limit || 5),
      (this.sorter = J(t.sorter)),
      (this.dupDetector = t.dupDetector || Y),
      (this.local = o.local(t)),
      (this.prefetch = o.prefetch(t)),
      (this.remote = o.remote(t)),
      (this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null),
      (this.index = new j({ datumTokenizer: t.datumTokenizer, queryTokenizer: t.queryTokenizer })),
      (this.storage = this.cacheKey ? new H(this.cacheKey) : null);
  }
  function J(e) {
    return c.isFunction(e) ? t : n;
    function t(t) {
      return t.sort(e);
    }
    function n(t) {
      return t;
    }
  }
  function Y() {
    return !1;
  }
  var y = {
      wrapper: '<span class="twitter-typeahead" style="width:100%"></span>',
      dropdown: '<span class="tt-dropdown-menu"></span>',
      dataset: '<div class="tt-dataset-%CLASS%"></div>',
      suggestions: '<span class="tt-suggestions"></span>',
      suggestion: '<div class="tt-suggestion">%BODY%</div>'
    },
    v = {
      wrapper: { position: "relative", display: "inline-block" },
      hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none" },
      input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" },
      inputWithNoHint: { position: "relative", verticalAlign: "top" },
      dropdown: { position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none" },
      suggestions: { display: "block" },
      suggestion: { whiteSpace: "nowrap", cursor: "pointer" },
      suggestionChild: { whiteSpace: "normal" },
      ltr: { left: "0", right: "auto" },
      rtl: { left: "auto", right: " 0" }
    },
    _ =
      (c.isMsie() &&
        c.mixin(v.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }),
      c.isMsie() && c.isMsie() <= 7 && c.mixin(v.input, { marginTop: "-1px" }),
      (w = "typeahead:"),
      c.mixin(b.prototype, {
        trigger: function (t) {
          var e = [].slice.call(arguments, 1);
          this.$el.trigger(w + t, e);
        }
      }),
      b),
    w;
  function b(t) {
    (t && t.el) || h.error("EventBus initialized without el"), (this.$el = h(t.el));
  }
  var x = ((k = /\s+/), (S = rt()), { onSync: tt, onAsync: X, off: et, trigger: nt }),
    k,
    S;
  function Z(t, e, n, i) {
    var r;
    if (n)
      for (e = e.split(k), n = i ? st(n, i) : n, this._callbacks = this._callbacks || {}; (r = e.shift()); )
        (this._callbacks[r] = this._callbacks[r] || { sync: [], async: [] }), this._callbacks[r][t].push(n);
    return this;
  }
  function X(t, e, n) {
    return Z.call(this, "async", t, e, n);
  }
  function tt(t, e, n) {
    return Z.call(this, "sync", t, e, n);
  }
  function et(t) {
    var e;
    if (this._callbacks) for (t = t.split(k); (e = t.shift()); ) delete this._callbacks[e];
    return this;
  }
  function nt(t) {
    var e = this,
      n,
      i,
      r,
      s,
      n;
    if (this._callbacks)
      for (t = t.split(k), r = [].slice.call(arguments, 1); (n = t.shift()) && (i = this._callbacks[n]); )
        (s = it(i.sync, this, [n].concat(r))), (n = it(i.async, this, [n].concat(r))), s() && S(n);
    return this;
  }
  function it(n, i, r) {
    return t;
    function t() {
      for (var t, e = 0; !t && e < n.length; e += 1) t = !1 === n[e].apply(i, r);
      return !t;
    }
  }
  function rt() {
    var t,
      e,
      t = window.setImmediate
        ? function t(e) {
            setImmediate(function () {
              e();
            });
          }
        : function t(e) {
            setTimeout(function () {
              e();
            }, 0);
          };
    return t;
  }
  function st(t, e) {
    return t.bind
      ? t.bind(e)
      : function () {
          t.apply(e, [].slice.call(arguments, 0));
        };
  }
  var ot =
      ((ut = window.document),
      (at = { node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1 }),
      function t(i) {
        var r;
        function e(t) {
          var e, n;
          return (
            (e = r.exec(t.data)) &&
              ((wrapperNode = ut.createElement(i.tagName)),
              i.className && (wrapperNode.className = i.className),
              (n = t.splitText(e.index)).splitText(e[0].length),
              wrapperNode.appendChild(n.cloneNode(!0)),
              t.parentNode.replaceChild(wrapperNode, n)),
            !!e
          );
        }
        function s(t, e) {
          for (var n, i = 3, r = 0; r < t.childNodes.length; r++) {
            if (3 === (n = t.childNodes[r]).nodeType) {
              e(n);
              break;
            }
            s(n, e);
          }
        }
        (i = c.mixin({}, at, i)).node &&
          i.pattern &&
          ((i.pattern = c.isArray(i.pattern) ? i.pattern : [i.pattern]), (r = ht(i.pattern, i.caseSensitive, i.wordsOnly)), s(i.node, e));
      }),
    ut,
    at;
  function ht(t, e, n) {
    for (var i = [], n, r = 0; r < t.length; r++) i.push(c.escapeRegExChars(t[r]));
    return (n = n ? "\\b(" + i.join("|") + ")\\b" : "(" + i.join("|") + ")"), e ? new RegExp(n) : new RegExp(n, "i");
  }
  var ct =
      ((C = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" }),
      ($.normalizeQuery = function (t) {
        return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
      }),
      c.mixin($.prototype, x, {
        _onBlur: function t(e) {
          this.resetInputValue(), this.trigger("blurred");
        },
        _onFocus: function t(e) {
          this.trigger("focused");
        },
        _onKeydown: function t(e) {
          var n = C[e.which || e.keyCode];
          this._managePreventDefault(n, e), n && this._shouldTrigger(n, e) && this.trigger(n + "Keyed", e);
        },
        _onInput: function t(e) {
          this._checkInputValue();
        },
        _managePreventDefault: function t(e, n) {
          var i, r, s;
          switch (e) {
            case "tab":
              (r = this.getHintValue()), (s = this.getInputValue()), (i = r && r !== s && !D(n));
              break;
            case "up":
            case "down":
              i = !D(n);
              break;
            default:
              i = !1;
          }
          i && n.preventDefault();
        },
        _shouldTrigger: function t(e, n) {
          var e,
            e = "tab" !== e || !D(n);
          return e;
        },
        _checkInputValue: function t() {
          var e,
            n,
            i,
            e = this.getInputValue(),
            n = dt(e, this.query),
            i = !!n && this.query.length !== e.length;
          n ? i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", (this.query = e));
        },
        focus: function t() {
          this.$input.focus();
        },
        blur: function t() {
          this.$input.blur();
        },
        getQuery: function t() {
          return this.query;
        },
        setQuery: function t(e) {
          this.query = e;
        },
        getInputValue: function t() {
          return this.$input.val();
        },
        setInputValue: function t(e, n) {
          this.$input.val(e), n || this._checkInputValue();
        },
        getHintValue: function t() {
          return this.$hint.val();
        },
        setHintValue: function t(e) {
          this.$hint.val(e);
        },
        resetInputValue: function t() {
          this.$input.val(this.query);
        },
        clearHint: function t() {
          this.$hint.val("");
        },
        getLanguageDirection: function t() {
          return (this.$input.css("direction") || "ltr").toLowerCase();
        },
        hasOverflow: function t() {
          var e = this.$input.width() - 2;
          return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e;
        },
        isCursorAtEnd: function () {
          var t,
            e,
            e,
            t = this.$input.val().length,
            e = this.$input[0].selectionStart;
          return c.isNumber(e)
            ? e === t
            : !document.selection || ((e = document.selection.createRange()).moveStart("character", -t), t === e.text.length);
        },
        destroy: function t() {
          this.$hint.off(".tt"), this.$input.off(".tt"), (this.$hint = this.$input = this.$overflowHelper = null);
        }
      }),
      $),
    C;
  function $(t) {
    var e = this,
      n,
      i,
      r,
      s;
    (t = t || {}).input || h.error("input is missing"),
      (n = c.bind(this._onBlur, this)),
      (i = c.bind(this._onFocus, this)),
      (r = c.bind(this._onKeydown, this)),
      (s = c.bind(this._onInput, this)),
      (this.$hint = h(t.hint)),
      (this.$input = h(t.input).on("blur.tt", n).on("focus.tt", i).on("keydown.tt", r)),
      0 === this.$hint.length && (this.setHintValue = this.getHintValue = this.clearHint = c.noop),
      c.isMsie()
        ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
            C[t.which || t.keyCode] || c.defer(c.bind(e._onInput, e, t));
          })
        : this.$input.on("input.tt", s),
      (this.query = this.$input.val()),
      (this.$overflowHelper = lt(this.$input));
  }
  function lt(t) {
    return h('<pre aria-hidden="true"></pre>')
      .css({
        position: "absolute",
        visibility: "hidden",
        whiteSpace: "nowrap",
        fontFamily: t.css("font-family"),
        fontSize: t.css("font-size"),
        fontStyle: t.css("font-style"),
        fontVariant: t.css("font-variant"),
        fontWeight: t.css("font-weight"),
        wordSpacing: t.css("word-spacing"),
        letterSpacing: t.css("letter-spacing"),
        textIndent: t.css("text-indent"),
        textRendering: t.css("text-rendering"),
        textTransform: t.css("text-transform")
      })
      .insertAfter(t);
  }
  function dt(t, e) {
    return $.normalizeQuery(t) === $.normalizeQuery(e);
  }
  function D(t) {
    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
  }
  var A =
      ((T = "ttDataset"),
      (I = "ttValue"),
      (K = "ttDatum"),
      (q.extractDatasetName = function t(e) {
        return h(e).data(T);
      }),
      (q.extractValue = function t(e) {
        return h(e).data(I);
      }),
      (q.extractDatum = function t(e) {
        return h(e).data(K);
      }),
      c.mixin(q.prototype, x, {
        _render: function t(i, r) {
          var s, e;
          function n() {
            return s.templates.empty({ query: i, isEmpty: !0 });
          }
          function o() {
            var t,
              e,
              t = h(y.suggestions).css(v.suggestions),
              e = c.map(r, n);
            return t.append.apply(t, e), s.highlight && ot({ node: t[0], pattern: i }), t;
            function n(t) {
              var e,
                e,
                e,
                e = s.templates.suggestion(t),
                e = y.suggestion.replace("%BODY%", e),
                e = h(e).data(T, s.name).data(I, s.displayFn(t)).data(K, t);
              return (
                e.children().each(function () {
                  h(this).css(v.suggestionChild);
                }),
                e
              );
            }
          }
          function u() {
            return s.templates.header({ query: i, isEmpty: !e });
          }
          function a() {
            return s.templates.footer({ query: i, isEmpty: !e });
          }
          this.$el &&
            ((s = this).$el.empty(),
            !(e = r && r.length) && this.templates.empty
              ? this.$el
                  .html(n())
                  .prepend(s.templates.header ? u() : null)
                  .append(s.templates.footer ? a() : null)
              : e &&
                this.$el
                  .html(o())
                  .prepend(s.templates.header ? u() : null)
                  .append(s.templates.footer ? a() : null),
            this.trigger("rendered"));
        },
        getRoot: function t() {
          return this.$el;
        },
        update: function t(e) {
          var n = this;
          function i(t) {
            e === n.query && n._render(e, t);
          }
          (this.query = e), this.source(e, i);
        },
        clear: function t() {
          this._render(this.query || "");
        },
        isEmpty: function t() {
          return this.$el.is(":empty");
        },
        destroy: function t() {
          this.$el = null;
        }
      }),
      q),
    T,
    I,
    K;
  function q(t) {
    ((t = t || {}).templates = t.templates || {}),
      t.source || h.error("missing source"),
      t.name && !gt(t.name) && h.error("invalid dataset name: " + t.name),
      (this.query = null),
      (this.highlight = !!t.highlight),
      (this.name = t.name || c.getUniqueId()),
      (this.source = t.source),
      (this.displayFn = pt(t.display || t.displayKey)),
      (this.templates = ft(t.templates, this.displayFn)),
      (this.$el = h(y.dataset.replace("%CLASS%", this.name)));
  }
  function pt(e) {
    return (e = e || "value"), c.isFunction(e) ? e : t;
    function t(t) {
      return t[e];
    }
  }
  function ft(t, e) {
    return {
      empty: t.empty && c.templatify(t.empty),
      header: t.header && c.templatify(t.header),
      footer: t.footer && c.templatify(t.footer),
      suggestion: t.suggestion || n
    };
    function n(t) {
      return "<p>" + e(t) + "</p>";
    }
  }
  function gt(t) {
    return /^[_a-zA-Z0-9-]+$/.test(t);
  }
  var mt =
    (c.mixin(yt.prototype, x, {
      _onSuggestionClick: function t(e) {
        this.trigger("suggestionClicked", h(e.currentTarget));
      },
      _onSuggestionMouseEnter: function t(e) {
        this._removeCursor(), this._setCursor(h(e.currentTarget), !0);
      },
      _onSuggestionMouseLeave: function t(e) {
        this._removeCursor();
      },
      _onRendered: function t() {
        function e(t) {
          return t.isEmpty();
        }
        (this.isEmpty = c.every(this.datasets, e)),
          this.isEmpty ? this._hide() : this.isOpen && this._show(),
          this.trigger("datasetRendered");
      },
      _hide: function () {
        this.$menu.hide();
      },
      _show: function () {
        this.$menu.css("display", "block");
      },
      _getSuggestions: function t() {
        return this.$menu.find(".tt-suggestion");
      },
      _getCursor: function t() {
        return this.$menu.find(".tt-cursor").first();
      },
      _setCursor: function t(e, n) {
        e.first().addClass("tt-cursor"), n || this.trigger("cursorMoved");
      },
      _removeCursor: function t() {
        this._getCursor().removeClass("tt-cursor");
      },
      _moveCursor: function t(e) {
        var n, i, i, e;
        this.isOpen &&
          ((i = this._getCursor()),
          (n = this._getSuggestions()),
          this._removeCursor(),
          -1 === (i = (((i = n.index(i) + e) + 1) % (n.length + 1)) - 1)
            ? this.trigger("cursorRemoved")
            : (i < -1 && (i = n.length - 1), this._setCursor((e = n.eq(i))), this._ensureVisible(e)));
      },
      _ensureVisible: function t(e) {
        var n,
          e,
          i,
          r,
          n = e.position().top,
          e = n + e.outerHeight(!0),
          i = this.$menu.scrollTop(),
          r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
        n < 0 ? this.$menu.scrollTop(i + n) : r < e && this.$menu.scrollTop(i + (e - r));
      },
      close: function t() {
        this.isOpen && ((this.isOpen = !1), this._removeCursor(), this._hide(), this.trigger("closed"));
      },
      open: function t() {
        this.isOpen || ((this.isOpen = !0), this.isEmpty || this._show(), this.trigger("opened"));
      },
      setLanguageDirection: function t(e) {
        this.$menu.css("ltr" === e ? v.ltr : v.rtl);
      },
      moveCursorUp: function t() {
        this._moveCursor(-1);
      },
      moveCursorDown: function t() {
        this._moveCursor(1);
      },
      getDatumForSuggestion: function t(e) {
        var n = null;
        return (n = e.length ? { raw: A.extractDatum(e), value: A.extractValue(e), datasetName: A.extractDatasetName(e) } : n);
      },
      getDatumForCursor: function t() {
        return this.getDatumForSuggestion(this._getCursor().first());
      },
      getDatumForTopSuggestion: function t() {
        return this.getDatumForSuggestion(this._getSuggestions().first());
      },
      update: function t(e) {
        function n(t) {
          t.update(e);
        }
        c.each(this.datasets, n);
      },
      empty: function t() {
        function e(t) {
          t.clear();
        }
        c.each(this.datasets, e), (this.isEmpty = !0);
      },
      isVisible: function t() {
        return this.isOpen && !this.isEmpty;
      },
      destroy: function t() {
        function e(t) {
          t.destroy();
        }
        this.$menu.off(".tt"), (this.$menu = null), c.each(this.datasets, e);
      }
    }),
    yt);
  function yt(t) {
    var e = this,
      n,
      i,
      r;
    (t = t || {}).menu || h.error("menu is required"),
      (this.isOpen = !1),
      (this.isEmpty = !0),
      (this.datasets = c.map(t.datasets, vt)),
      (n = c.bind(this._onSuggestionClick, this)),
      (i = c.bind(this._onSuggestionMouseEnter, this)),
      (r = c.bind(this._onSuggestionMouseLeave, this)),
      (this.$menu = h(t.menu)
        .on("click.tt", ".tt-suggestion", n)
        .on("mouseenter.tt", ".tt-suggestion", i)
        .on("mouseleave.tt", ".tt-suggestion", r)),
      c.each(this.datasets, function (t) {
        e.$menu.append(t.getRoot()), t.onSync("rendered", e._onRendered, e);
      });
  }
  function vt(t) {
    return new A(t);
  }
  var _t =
      ((z = "ttAttrs"),
      c.mixin(bt.prototype, {
        _onSuggestionClicked: function t(e, n) {
          var n;
          (n = this.dropdown.getDatumForSuggestion(n)) && this._select(n);
        },
        _onCursorMoved: function t() {
          var e = this.dropdown.getDatumForCursor();
          this.input.clearHint(), this.input.setInputValue(e.value, !0), this.eventBus.trigger("cursorchanged", e.raw, e.datasetName);
        },
        _onCursorRemoved: function t() {
          this.input.resetInputValue(), this._updateHint();
        },
        _onDatasetRendered: function t() {
          this._updateHint();
        },
        _onOpened: function t() {
          this._updateHint(), this.eventBus.trigger("opened");
        },
        _onClosed: function t() {
          this.input.clearHint(), this.eventBus.trigger("closed");
        },
        _onFocused: function t() {
          this.dropdown.empty(), this.dropdown.isOpen || 0 != this.minLength || this.dropdown.update(""), this.dropdown.open();
        },
        _onBlurred: function t() {
          this.dropdown.close();
        },
        _onEnterKeyed: function t(e, n) {
          var i,
            r,
            i = this.dropdown.getDatumForCursor(),
            r = this.dropdown.getDatumForTopSuggestion();
          i ? (this._select(i), n.preventDefault()) : this.autoselect && r && (this._select(r), n.preventDefault());
        },
        _onTabKeyed: function t(e, n) {
          var i;
          (i = this.dropdown.getDatumForCursor()) ? (this._select(i), n.preventDefault()) : this._autocomplete();
        },
        _onEscKeyed: function t() {
          this.dropdown.close(), this.input.resetInputValue();
        },
        _onUpKeyed: function t() {
          var e = this.input.getQuery();
          !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e),
            this.dropdown.open(),
            this.dropdown.moveCursorUp();
        },
        _onDownKeyed: function t() {
          var e = this.input.getQuery();
          !this.dropdown.isOpen && e.length >= this.minLength && this.dropdown.update(e),
            this.dropdown.open(),
            this.dropdown.moveCursorDown();
        },
        _onLeftKeyed: function t() {
          "rtl" === this.dir && this._autocomplete();
        },
        _onRightKeyed: function t() {
          "ltr" === this.dir && this._autocomplete();
        },
        _onQueryChanged: function t(e, n) {
          this.input.clearHint(),
            this.dropdown.empty(),
            n.length >= this.minLength && this.dropdown.update(n),
            this.dropdown.open(),
            this._setLanguageDirection();
        },
        _onWhitespaceChanged: function t() {
          this._updateHint(), this.dropdown.open();
        },
        _setLanguageDirection: function t() {
          var e;
          this.dir !== (e = this.input.getLanguageDirection()) &&
            ((this.dir = e), this.$node.css("direction", e), this.dropdown.setLanguageDirection(e));
        },
        _updateHint: function t() {
          var e,
            n,
            i,
            i,
            r,
            e,
            n,
            i,
            i,
            s,
            o,
            e = this.dropdown.getDatumForTopSuggestion();
          e &&
            this.dropdown.isVisible() &&
            !this.input.hasOverflow() &&
            ((n = this.input.getInputValue()),
            (i = ct.normalizeQuery(n)),
            (i = c.escapeRegExChars(i)),
            (s = e.value),
            new RegExp("/^http[s]?:/").exec(i) || (s = "" !== e.raw.a ? e.raw.a : e.raw.domain),
            (e = (r = new RegExp("^(?:" + i + ")(.*$)", "i")).exec(s)),
            this.input.setHintValue(n + (e ? e[1] : "")));
        },
        _autocomplete: function t() {
          var e,
            n,
            n,
            e = this.input.getHintValue(),
            n = this.input.getQuery();
          e &&
            n !== e &&
            this.input.isCursorAtEnd() &&
            ((n = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(n.value),
            this.eventBus.trigger("autocompleted", n.raw, n.datasetName));
        },
        _select: function t(e) {
          this.input.clearHint(),
            this.input.setQuery(e.value),
            this.input.setInputValue(e.value, !0),
            this._setLanguageDirection(),
            this.eventBus.trigger("selected", e.raw, e.datasetName),
            this.dropdown.close(),
            c.defer(c.bind(this.dropdown.empty, this.dropdown));
        },
        open: function t() {
          this.dropdown.open();
        },
        close: function t() {
          this.dropdown.close();
        },
        getQuery: function t() {
          return this.input.getQuery();
        },
        setQuery: function t(e) {
          this.input.setInputValue(e);
        },
        destroy: function t() {
          this.input.destroy(), this.dropdown.destroy(), St(this.$node), (this.$node = null);
        }
      }),
      bt),
    z,
    wt,
    E,
    F;
  function bt(t) {
    var e, n, i, r;
    (t = t || {}).input || h.error("missing input"),
      (this.autoselect = !!t.autoselect),
      (this.minLength = c.isNumber(t.minLength) ? t.minLength : 1),
      (this.$node = xt(t.input, t.withHint)),
      (e = this.$node.find(".tt-dropdown-menu")),
      (n = this.$node.find(".tt-input")),
      (i = this.$node.find(".tt-hint")),
      (this.eventBus = t.eventBus || new _({ el: n })),
      (this.dropdown = new mt({ menu: e, datasets: t.datasets })
        .onSync("suggestionClicked", this._onSuggestionClicked, this)
        .onSync("cursorMoved", this._onCursorMoved, this)
        .onSync("cursorRemoved", this._onCursorRemoved, this)
        .onSync("opened", this._onOpened, this)
        .onSync("closed", this._onClosed, this)
        .onAsync("datasetRendered", this._onDatasetRendered, this)),
      (this.input = new ct({ input: n, hint: i })
        .onSync("focused", this._onFocused, this)
        .onSync("blurred", this._onBlurred, this)
        .onSync("enterKeyed", this._onEnterKeyed, this)
        .onSync("tabKeyed", this._onTabKeyed, this)
        .onSync("escKeyed", this._onEscKeyed, this)
        .onSync("upKeyed", this._onUpKeyed, this)
        .onSync("downKeyed", this._onDownKeyed, this)
        .onSync("leftKeyed", this._onLeftKeyed, this)
        .onSync("rightKeyed", this._onRightKeyed, this)
        .onSync("queryChanged", this._onQueryChanged, this)
        .onSync("whitespaceChanged", this._onWhitespaceChanged, this)),
      e.on("mousedown.tt", function (t) {
        c.isMsie() &&
          c.isMsie() < 9 &&
          (n[0].onbeforedeactivate = function () {
            (window.event.returnValue = !1), (n[0].onbeforedeactivate = null);
          }),
          t.preventDefault();
      });
  }
  function xt(t, e) {
    var t,
      n,
      i,
      r,
      t = h(t),
      n = h(y.wrapper).css(v.wrapper),
      i = h(y.dropdown).css(v.dropdown),
      r = t.clone().css(v.hint).css(kt(t));
    r
      .val("")
      .removeData()
      .addClass("tt-hint")
      .removeAttr("id name placeholder")
      .prop("disabled", !0)
      .attr({ autocomplete: "off", spellcheck: "false" }),
      t.data(z, { dir: t.attr("dir"), autocomplete: t.attr("autocomplete"), spellcheck: t.attr("spellcheck"), style: t.attr("style") }),
      t
        .addClass("tt-input")
        .attr({ autocomplete: "off", spellcheck: !1 })
        .css(e ? v.input : v.inputWithNoHint);
    try {
      t.attr("dir") || t.attr("dir", "auto");
    } catch (t) {}
    return t
      .wrap(n)
      .parent()
      .prepend(e ? r : null)
      .append(i);
  }
  function kt(t) {
    return {
      backgroundAttachment: t.css("background-attachment"),
      backgroundClip: t.css("background-clip"),
      backgroundColor: t.css("background-color"),
      backgroundImage: t.css("background-image"),
      backgroundOrigin: t.css("background-origin"),
      backgroundPosition: t.css("background-position"),
      backgroundRepeat: t.css("background-repeat"),
      backgroundSize: t.css("background-size")
    };
  }
  function St(t) {
    var n = t.find(".tt-input");
    c.each(n.data(z), function (t, e) {
      c.isUndefined(t) ? n.removeAttr(e) : n.attr(e, t);
    }),
      n.detach().removeData(z).removeClass("tt-input").insertAfter(t),
      t.remove();
  }
  (wt = h.fn.typeahead),
    (E = "ttTypeahead"),
    (F = {
      initialize: function t(i, r) {
        return (r = c.isArray(r) ? r : [].slice.call(arguments, 1)), (i = i || {}), this.each(e);
        function e() {
          var t = h(this),
            e,
            n;
          c.each(r, function (t) {
            t.highlight = !!i.highlight;
          }),
            (n = new _t({
              input: t,
              eventBus: (e = new _({ el: t })),
              withHint: !!c.isUndefined(i.hint) || !!i.hint,
              minLength: i.minLength,
              autoselect: i.autoselect,
              datasets: r
            })),
            t.data(E, n);
        }
      },
      open: function t() {
        return this.each(e);
        function e() {
          var t, e;
          (e = h(this).data(E)) && e.open();
        }
      },
      close: function t() {
        return this.each(e);
        function e() {
          var t, e;
          (e = h(this).data(E)) && e.close();
        }
      },
      val: function t(n) {
        return arguments.length ? this.each(e) : i(this.first());
        function e() {
          var t, e;
          (e = h(this).data(E)) && e.setQuery(n);
        }
        function i(t) {
          var t, e;
          return (e = (t = t.data(E)) ? t.getQuery() : e);
        }
      },
      destroy: function t() {
        return this.each(e);
        function e() {
          var t = h(this),
            e;
          (e = t.data(E)) && (e.destroy(), t.removeData(E));
        }
      }
    }),
    (h.fn.typeahead = function (t) {
      return F[t] ? F[t].apply(this, [].slice.call(arguments, 1)) : F.initialize.apply(this, arguments);
    }),
    (h.fn.typeahead.noConflict = function t() {
      return (h.fn.typeahead = wt), this;
    });
})(window.jQuery);
