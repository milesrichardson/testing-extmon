var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (c) {
  var a = 0;
  return function () {
    return a < c.length ? { done: !1, value: c[a++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (c) {
  return { next: $jscomp.arrayIteratorImpl(c) };
};
$jscomp.makeIterator = function (c) {
  var a = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
  return a ? a.call(c) : $jscomp.arrayIterator(c);
};
$jscomp.getGlobal = function (c) {
  return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (c, a, e) {
        c != Array.prototype && c != Object.prototype && (c[a] = e.value);
      };
$jscomp.polyfill = function (c, a, e, b) {
  if (a) {
    e = $jscomp.global;
    c = c.split(".");
    for (b = 0; b < c.length - 1; b++) {
      var d = c[b];
      d in e || (e[d] = {});
      e = e[d];
    }
    c = c[c.length - 1];
    b = e[c];
    a = a(b);
    a != b && null != a && $jscomp.defineProperty(e, c, { configurable: !0, writable: !0, value: a });
  }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill(
  "Promise",
  function (c) {
    function a() {
      this.batch_ = null;
    }
    function e(b) {
      return b instanceof d
        ? b
        : new d(function (a, c) {
            a(b);
          });
    }
    if (c && !$jscomp.FORCE_POLYFILL_PROMISE) return c;
    a.prototype.asyncExecute = function (b) {
      if (null == this.batch_) {
        this.batch_ = [];
        var a = this;
        this.asyncExecuteFunction(function () {
          a.executeBatch_();
        });
      }
      this.batch_.push(b);
    };
    var b = $jscomp.global.setTimeout;
    a.prototype.asyncExecuteFunction = function (a) {
      b(a, 0);
    };
    a.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var b = this.batch_;
        this.batch_ = [];
        for (var a = 0; a < b.length; ++a) {
          var c = b[a];
          b[a] = null;
          try {
            c();
          } catch (u) {
            this.asyncThrow_(u);
          }
        }
      }
      this.batch_ = null;
    };
    a.prototype.asyncThrow_ = function (b) {
      this.asyncExecuteFunction(function () {
        throw b;
      });
    };
    var d = function (b) {
      this.state_ = 0;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      var a = this.createResolveAndReject_();
      try {
        b(a.resolve, a.reject);
      } catch (p) {
        a.reject(p);
      }
    };
    d.prototype.createResolveAndReject_ = function () {
      function b(b) {
        return function (d) {
          c || ((c = !0), b.call(a, d));
        };
      }
      var a = this,
        c = !1;
      return { resolve: b(this.resolveTo_), reject: b(this.reject_) };
    };
    d.prototype.resolveTo_ = function (b) {
      if (b === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (b instanceof d) this.settleSameAsPromise_(b);
      else {
        a: switch (typeof b) {
          case "object":
            var a = null != b;
            break a;
          case "function":
            a = !0;
            break a;
          default:
            a = !1;
        }
        a ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
      }
    };
    d.prototype.resolveToNonPromiseObj_ = function (b) {
      var a = void 0;
      try {
        a = b.then;
      } catch (p) {
        this.reject_(p);
        return;
      }
      "function" == typeof a ? this.settleSameAsThenable_(a, b) : this.fulfill_(b);
    };
    d.prototype.reject_ = function (b) {
      this.settle_(2, b);
    };
    d.prototype.fulfill_ = function (b) {
      this.settle_(1, b);
    };
    d.prototype.settle_ = function (b, a) {
      if (0 != this.state_) throw Error("Cannot settle(" + b + ", " + a + "): Promise already settled in state" + this.state_);
      this.state_ = b;
      this.result_ = a;
      this.executeOnSettledCallbacks_();
    };
    d.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var b = 0; b < this.onSettledCallbacks_.length; ++b) l.asyncExecute(this.onSettledCallbacks_[b]);
        this.onSettledCallbacks_ = null;
      }
    };
    var l = new a();
    d.prototype.settleSameAsPromise_ = function (b) {
      var a = this.createResolveAndReject_();
      b.callWhenSettled_(a.resolve, a.reject);
    };
    d.prototype.settleSameAsThenable_ = function (b, a) {
      var c = this.createResolveAndReject_();
      try {
        b.call(a, c.resolve, c.reject);
      } catch (u) {
        c.reject(u);
      }
    };
    d.prototype.then = function (b, a) {
      function c(b, a) {
        return "function" == typeof b
          ? function (a) {
              try {
                e(b(a));
              } catch (w) {
                g(w);
              }
            }
          : a;
      }
      var e,
        g,
        l = new d(function (b, a) {
          e = b;
          g = a;
        });
      this.callWhenSettled_(c(b, e), c(a, g));
      return l;
    };
    d.prototype.catch = function (b) {
      return this.then(void 0, b);
    };
    d.prototype.callWhenSettled_ = function (b, a) {
      function c() {
        switch (d.state_) {
          case 1:
            b(d.result_);
            break;
          case 2:
            a(d.result_);
            break;
          default:
            throw Error("Unexpected state: " + d.state_);
        }
      }
      var d = this;
      null == this.onSettledCallbacks_ ? l.asyncExecute(c) : this.onSettledCallbacks_.push(c);
    };
    d.resolve = e;
    d.reject = function (b) {
      return new d(function (a, c) {
        c(b);
      });
    };
    d.race = function (b) {
      return new d(function (a, c) {
        for (var d = $jscomp.makeIterator(b), g = d.next(); !g.done; g = d.next()) e(g.value).callWhenSettled_(a, c);
      });
    };
    d.all = function (b) {
      var a = $jscomp.makeIterator(b),
        c = a.next();
      return c.done
        ? e([])
        : new d(function (b, d) {
            function g(a) {
              return function (c) {
                p[a] = c;
                f--;
                0 == f && b(p);
              };
            }
            var p = [],
              f = 0;
            do p.push(void 0), f++, e(c.value).callWhenSettled_(g(p.length - 1), d), (c = a.next());
            while (!c.done);
          });
    };
    return d;
  },
  "es6",
  "es3"
);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (c, a) {
  this.$jscomp$symbol$id_ = c;
  $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: a });
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function c(e) {
    if (this instanceof c) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (e || "") + "_" + a++, e);
  }
  var a = 0;
  return c;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.iterator;
  c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[c] &&
    $jscomp.defineProperty(Array.prototype, c, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.asyncIterator;
  c || (c = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (c) {
  $jscomp.initSymbolIterator();
  c = { next: c };
  c[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return c;
};
$jscomp.underscoreProtoCanBeSet = function () {
  var c = { a: !0 },
    a = {};
  try {
    return (a.__proto__ = c), a.a;
  } catch (e) {}
  return !1;
};
$jscomp.setPrototypeOf =
  "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (c, a) {
        c.__proto__ = a;
        if (c.__proto__ !== a) throw new TypeError(c + " is not extensible");
        return c;
      }
    : null;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (c) {
  if (!(c instanceof Object)) throw new TypeError("Iterator result " + c + " is not an object");
};
$jscomp.generator.Context = function () {
  this.isRunning_ = !1;
  this.yieldAllIterator_ = null;
  this.yieldResult = void 0;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
$jscomp.generator.Context.prototype.start_ = function () {
  if (this.isRunning_) throw new TypeError("Generator is already running");
  this.isRunning_ = !0;
};
$jscomp.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = !1;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function (c) {
  this.yieldResult = c;
};
$jscomp.generator.Context.prototype.throw_ = function (c) {
  this.abruptCompletion_ = { exception: c, isException: !0 };
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype.return = function (c) {
  this.abruptCompletion_ = { return: c };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (c) {
  this.abruptCompletion_ = { jumpTo: c };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function (c, a) {
  this.nextAddress = a;
  return { value: c };
};
$jscomp.generator.Context.prototype.yieldAll = function (c, a) {
  c = $jscomp.makeIterator(c);
  var e = c.next();
  $jscomp.generator.ensureIteratorResultIsObject_(e);
  if (e.done) (this.yieldResult = e.value), (this.nextAddress = a);
  else return (this.yieldAllIterator_ = c), this.yield(e.value, a);
};
$jscomp.generator.Context.prototype.jumpTo = function (c) {
  this.nextAddress = c;
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (c, a) {
  this.catchAddress_ = c;
  void 0 != a && (this.finallyAddress_ = a);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function (c) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = c || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function (c, a) {
  this.nextAddress = c;
  this.catchAddress_ = a || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function (c) {
  this.catchAddress_ = c || 0;
  c = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return c;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function (c, a, e) {
  e ? (this.finallyContexts_[e] = this.abruptCompletion_) : (this.finallyContexts_ = [this.abruptCompletion_]);
  this.catchAddress_ = c || 0;
  this.finallyAddress_ = a || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (c, a) {
  a = this.finallyContexts_.splice(a || 0)[0];
  if ((a = this.abruptCompletion_ = this.abruptCompletion_ || a)) {
    if (a.isException) return this.jumpToErrorHandler_();
    void 0 != a.jumpTo && this.finallyAddress_ < a.jumpTo
      ? ((this.nextAddress = a.jumpTo), (this.abruptCompletion_ = null))
      : (this.nextAddress = this.finallyAddress_);
  } else this.nextAddress = c;
};
$jscomp.generator.Context.prototype.forIn = function (c) {
  return new $jscomp.generator.Context.PropertyIterator(c);
};
$jscomp.generator.Context.PropertyIterator = function (c) {
  this.object_ = c;
  this.properties_ = [];
  for (var a in c) this.properties_.push(a);
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
  for (; 0 < this.properties_.length; ) {
    var c = this.properties_.pop();
    if (c in this.object_) return c;
  }
  return null;
};
$jscomp.generator.Engine_ = function (c) {
  this.context_ = new $jscomp.generator.Context();
  this.program_ = c;
};
$jscomp.generator.Engine_.prototype.next_ = function (c) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, c, this.context_.next_);
  this.context_.next_(c);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function (c) {
  this.context_.start_();
  var a = this.context_.yieldAllIterator_;
  if (a)
    return this.yieldAllStep_(
      "return" in a
        ? a["return"]
        : function (a) {
            return { value: a, done: !0 };
          },
      c,
      this.context_.return
    );
  this.context_.return(c);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function (c) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], c, this.context_.next_);
  this.context_.throw_(c);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (c, a, e) {
  try {
    var b = c.call(this.context_.yieldAllIterator_, a);
    $jscomp.generator.ensureIteratorResultIsObject_(b);
    if (!b.done) return this.context_.stop_(), b;
    var d = b.value;
  } catch (l) {
    return (this.context_.yieldAllIterator_ = null), this.context_.throw_(l), this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  e.call(this.context_, d);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
  for (; this.context_.nextAddress; )
    try {
      var c = this.program_(this.context_);
      if (c) return this.context_.stop_(), { value: c.value, done: !1 };
    } catch (a) {
      (this.context_.yieldResult = void 0), this.context_.throw_(a);
    }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    c = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (c.isException) throw c.exception;
    return { value: c.return, done: !0 };
  }
  return { value: void 0, done: !0 };
};
$jscomp.generator.Generator_ = function (c) {
  this.next = function (a) {
    return c.next_(a);
  };
  this.throw = function (a) {
    return c.throw_(a);
  };
  this.return = function (a) {
    return c.return_(a);
  };
  $jscomp.initSymbolIterator();
  this[Symbol.iterator] = function () {
    return this;
  };
};
$jscomp.generator.createGenerator = function (c, a) {
  a = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a));
  $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(a, c.prototype);
  return a;
};
$jscomp.asyncExecutePromiseGenerator = function (c) {
  function a(b) {
    return c.next(b);
  }
  function e(b) {
    return c.throw(b);
  }
  return new Promise(function (b, d) {
    function l(c) {
      c.done ? b(c.value) : Promise.resolve(c.value).then(a, e).then(l, d);
    }
    l(c.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (c) {
  return $jscomp.asyncExecutePromiseGenerator(c());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (c) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(c)));
};
$jscomp.checkStringArgs = function (c, a, e) {
  if (null == c) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  if (a instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  return c + "";
};
$jscomp.polyfill(
  "String.prototype.startsWith",
  function (c) {
    return c
      ? c
      : function (a, c) {
          var b = $jscomp.checkStringArgs(this, a, "startsWith");
          a += "";
          var d = b.length,
            e = a.length;
          c = Math.max(0, Math.min(c | 0, b.length));
          for (var h = 0; h < e && c < d; ) if (b[c++] != a[h++]) return !1;
          return h >= e;
        };
  },
  "es6",
  "es3"
);
$jscomp.iteratorFromArray = function (c, a) {
  $jscomp.initSymbolIterator();
  c instanceof String && (c += "");
  var e = 0,
    b = {
      next: function () {
        if (e < c.length) {
          var d = e++;
          return { value: a(d, c[d]), done: !1 };
        }
        b.next = function () {
          return { done: !0, value: void 0 };
        };
        return b.next();
      }
    };
  b[Symbol.iterator] = function () {
    return b;
  };
  return b;
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (c) {
    return c
      ? c
      : function () {
          return $jscomp.iteratorFromArray(this, function (a) {
            return a;
          });
        };
  },
  "es6",
  "es3"
);
(function (c) {
  c = c.SymO2 = c.SymO2 || {};
  var a = { requestType: {}, header: {}, contentType: {}, responseType: {}, domain: {}, oxygen: {}, session: {}, spoc: {} };
  a.spoc.internalErrors = {};
  a.sso = {};
  a.sso.httpErrorResponse = {};
  a.sso.httpErrorResponse.primaryStatus = {};
  a.sso.httpErrorResponse.detailedStatus = {};
  a.sso.httpErrorResponse.detailedStatus.ssoError = {};
  a.oxygen.ETAG = "ETag";
  a.MACHINE_GUID = "machineGUID";
  a.SSO_SETUP_URL = "content/ui/ssosetup.html";
  a.SEAMLESS_ONBOARD_URL = "content/ui/onboardSetup.html";
  a.OCL_CONTAINER = "oclv2";
  a.OCL_CONTAINER_OLD = "ocl";
  a.OCL_ENCRYPTION_KEY = "oclSecureContainerKey";
  a.GLOBAL_CONTAINER = "global";
  a.session.LLT = "llt";
  a.session.ST = "st";
  a.session.EMAIL = "email";
  a.session.NA_GUID = "naguid";
  a.session.USER_ID = "userid";
  a.session.FIRST_NAME = "firstname";
  a.session.LAST_NAME = "lastname";
  a.session.ACCESS_TOKEN = "accessToken";
  a.session.ACCESS_TOKEN_TTL = "accessToken_ttl";
  a.session.DEFAULT_ACCESS_TOKEN_TTL = 15e5;
  a.session.ID_TOKEN = "idToken";
  a.session.ID_TOKEN_TTL = "idToken_ttl";
  a.session.DEFAULT_ID_TOKEN_TTL = 15e5;
  a.session.PARTNER_INFO = "partnerInfo";
  a.requestType.POST_METHOD = "POST";
  a.requestType.GET_METHOD = "GET";
  a.requestType.PUT_METHOD = "PUT";
  a.requestType.DELETE_METHOD = "DELETE";
  a.requestType.HEAD_METHOD = "HEAD";
  a.header.AUTHORIZATION = "Authorization";
  a.header.REQUEST_ID = "X-Symc-Request-Id";
  a.header.BASIC_AUTHENTICATION = "WWW-Authenticate";
  a.header.SYMC_MACHINE_ID = "X-Symc-Machine-ID";
  a.header.CHALLENGES = "X-Symc-Challenges";
  a.header.ORIGIN_HEADER = "X-Symc-Origin";
  a.header.ETAG = "ETag";
  a.header.IF_MATCH = "if-match";
  a.header.RANGE = "Range";
  a.header.ACCEPT = "Accept";
  a.header.CONTENT_TYPE = "Content-Type";
  a.header.CORS = "Access-Control-Allow-Origin";
  a.header.USER_AGENT = "X-Symc-User-Agent";
  a.header.SYMC_AUTH = "X-Symc-Auth";
  a.header.SYMC_COOKIE = "X-Symc-Cookie";
  a.header.CONNECTION = "Connection";
  a.header.KEEP_ALIVE = "Keep-Alive";
  a.header.NOT_MODIFIED = "304 Not Modified";
  a.header.SYMC_EXPECT = "X-Symc-Expect";
  a.header.SCHEMA_ERROR = "X-Symc-SchemaErrors";
  a.header.TENANT_ID = "X-NLOK-Tenant-ID";
  a.contentType.PROTOBUF = "application/x-protobuf ";
  a.contentType.JSON = "application/json";
  a.contentType.FORM_URL_ENCODED = "application/x-www-form-urlencoded";
  a.responseType.ARRAY_BUFFER = "arraybuffer";
  a.spoc.INTERNAL_DOMAIN = "internal";
  a.spoc.HTTP_DOMAIN = "http";
  a.spoc.internalErrors.SUCCESS = 0;
  a.spoc.internalErrors.STOPPED = 1;
  a.spoc.internalErrors.CANCELLED = 2;
  a.spoc.internalErrors.UNRECOVERABLE = 3;
  a.spoc.internalErrors.UNKNOWN = 4;
  a.sso.httpErrorResponse.primaryStatus.SUCCESS = "0000";
  a.sso.httpErrorResponse.primaryStatus.EBE_ERROR = "0001";
  a.sso.httpErrorResponse.primaryStatus.SSO_ERROR = "0002";
  a.sso.httpErrorResponse.detailedStatus.ssoError.TOKEN_EXPIRED = "0001";
  a.sso.httpErrorResponse.detailedStatus.ssoError.TOKEN_INVALID = "0002";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_CLIENT_ID = "0003";
  a.sso.httpErrorResponse.detailedStatus.ssoError.UNAUTHORIZED_SERVICE = "0004";
  a.sso.httpErrorResponse.detailedStatus.ssoError.ACL_LACKS_PRIVILEGE = "0005";
  a.sso.httpErrorResponse.detailedStatus.ssoError.RATE_LIMITED = "0010";
  a.sso.httpErrorResponse.detailedStatus.ssoError.NULL_ACL = "0020";
  a.sso.httpErrorResponse.detailedStatus.ssoError.NULL_CONTEXT = "0021";
  a.sso.httpErrorResponse.detailedStatus.ssoError.CONTENT_LENGTH_MAXED = "0022";
  a.sso.httpErrorResponse.detailedStatus.ssoError.MALFORMED_REQUEST = "0023";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_SIGNATURE = "0024";
  a.sso.httpErrorResponse.detailedStatus.ssoError.TIMESTAMP_EXPIRED = "0025";
  a.sso.httpErrorResponse.detailedStatus.ssoError.TIMESTAMP_REQUIRED = "0026";
  a.sso.httpErrorResponse.detailedStatus.ssoError.TIMESTAMP_DUPLICATE = "0027";
  a.sso.httpErrorResponse.detailedStatus.ssoError.MACHINE_ID_REQUIRED = "0028";
  a.sso.httpErrorResponse.detailedStatus.ssoError.AUTHORIZATION_MAXED_OUT = "0029";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_CERTIFICATE = "0040";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_DATE_HEADER = "0041";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_TEMPLATE_GUID = "0050";
  a.sso.httpErrorResponse.detailedStatus.ssoError.MISSING_EMAIL_ADDRESS = "0051";
  a.sso.httpErrorResponse.detailedStatus.ssoError.MISSING_ISSUER = "0052";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_EMAIL_LENGTH = "0053";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_EMAIL = "0054";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_PHONE_NUMBER = "0055";
  a.sso.httpErrorResponse.detailedStatus.ssoError.USER_DOES_NOT_EXIST = "2104";
  a.sso.httpErrorResponse.detailedStatus.ssoError.INVALID_ACCOUNT_LOGIN = "2106";
  a.domain.COOKIES = "com.symantec.cookies";
  a.DEFAULT_XHR_TIMEOUT = 6e4;
  a.openIDConnect = { ALG: "RS256" };
  c.constants = a;
})(window);
(function (c) {
  (c.SymO2 = c.SymO2 || {}).utils = (function (a, c) {
    var b = {},
      d = a.utils.isNil,
      e = a.logger,
      h = a.utils.isString,
      t = a.utils.isArray;
    b.arrayBufferToStringUTF16LE = function (a) {
      if (d(a)) return null;
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      for (var c = [], g = 0; g < a.byteLength; g++) c.push(a[g]);
      return b.byteArrayToStringUTF16LE(c);
    };
    b.stringUTF16LEToByteArray = function (b) {
      if (!1 === h(b)) throw Error("Input string cannot be null or is not a string");
      for (var a = [], c = 0; c < b.length; ++c) {
        var d = b.charCodeAt(c),
          e = (d & 65280) >> 8;
        a.push(d & 255);
        a.push(e);
      }
      return a;
    };
    b.byteArrayToStringUTF16LE = function (b) {
      if (!1 === t(b)) throw Error("Byte array cannot be null or is not an array");
      if (2 > b.length) throw Error("Byte array needs to contain at least two bytes");
      if (0 !== b.length % 2) throw Error("Byte array needs to contain even number of bytes");
      for (var a = "", c = 0; c < b.length - 1; c += 2) {
        var d = b[c];
        if (255 < d) throw Error("Encoding error: Input contains element larger than a byte.");
        d &= 255;
        var e = b[c + 1];
        if (255 < e) throw Error("Encoding error: Input contains element larger than a byte.");
        e = (e << 8) & 65280;
        a += String.fromCharCode(d + e);
      }
      return a;
    };
    b.createUInt8BufferFromStringBuffer = function (b, a) {
      if (d(b)) return null;
      d(a) && (a = b.length);
      a < b.length && (a = b.length);
      a = new Uint8Array(a);
      for (var c = 0, e = b.length; c < e; c++) {
        var p = b.charCodeAt(c);
        if (255 < p) throw Error("Encoding error: Input contains element larger than a byte.");
        a[c] = p;
      }
      return a;
    };
    b.createStringBufferFromUint8Buffer = function (b) {
      if (d(b)) return null;
      var a = "";
      b = new Uint8Array(b);
      for (var c = b.byteLength, e = 0; e < c; e++) a += String.fromCharCode(b[e]);
      return a;
    };
    b.encode64AndPrint = function (a, c) {
      var g = null;
      d(a) ||
        ("string" === typeof a && (g = a),
        a instanceof Uint8Array && (g = b.createStringBufferFromUint8Buffer(a)),
        (a = forge.util.encode64(g)),
        e.log(c + ":" + a));
    };
    b.challengeListToString = function (a) {
      if (d(a)) return null;
      a = b.createStringBufferFromUint8Buffer(a.toArrayBuffer());
      a = forge.util.encode64(a);
      return encodeURIComponent(a);
    };
    b.stringToChallengeList = function (a) {
      if (d(a)) return null;
      var l = c.proto.com.symantec.oxygen.datastore.v2.messages.ChallengeList,
        g = null;
      a = decodeURIComponent(a);
      a = forge.util.decode64(a);
      a = b.createUInt8BufferFromStringBuffer(a);
      try {
        g = l.decode(a);
      } catch (m) {
        e.error(m);
      }
      return g;
    };
    b.parseSchemaError = function (a) {
      var d = c.proto.com.symantec.oxygen.datastore.v2.messages.InvalidNodeList;
      a = decodeURIComponent(a);
      a = forge.util.decode64(a);
      a = b.createUInt8BufferFromStringBuffer(a);
      return d.decode(a).getNodes();
    };
    b.protobufToEncodedString = function (a) {
      if (d(a)) return null;
      var c = null;
      try {
        var e = b.createStringBufferFromUint8Buffer(a.toArrayBuffer());
        c = forge.util.encode64(e);
      } catch (m) {
        c = null;
      }
      return c;
    };
    b.encodedStringToProtobuf = function (a, c) {
      if (d(a) || d(c)) return null;
      var g = null;
      try {
        var l = b.createUInt8BufferFromStringBuffer(forge.util.decode64(a));
        g = c.decode(l);
      } catch (k) {
        e.error(k), (g = null);
      }
      return g;
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.telemetryWrapper = (function (a, c) {
    var b = a.utils.isNil,
      d = a.utils.isString,
      e = a.telemetryConstants,
      h = {
        TELEMETRY_CATEGORY: "OCL",
        NON_INTERACTION: 1,
        actionType: { SESSION: "Session", SSO: "SSO", OXYGEN: "Oxygen", OXYGEN_SCHEMA: "Oxygen-Schema", SPOC: "Spoc" },
        O2_SESSION: { LOGIN: "login", LOGOUT: "logout" },
        SSO_SETUP: {
          ST_IGNORED: "STIgnored",
          OIDC_CALL_SUCCESS: "OIDCCallSuccess",
          OIDC_CALL_FAILURE: "OIDCCallFailure",
          NA_SIGNIN_SUCCESS: "NASignInSuccess",
          EXTENSION_URL_LAUNCHED: "ExtensionURLLaunched",
          NA_SIGNIN_FAILURE: "NASIgnInFailure"
        },
        send: function (c, l, u) {
          if (!d(c)) throw Error("action should be a string");
          if (!d(l)) throw Error("label should be a string");
          if (b(u)) throw Error("value cannot be nil");
          var g = {};
          g[e.parameters.NON_INTERACTION_HIT] = h.NON_INTERACTION;
          g[e.parameters.HIT_TYPE] = e.HIT_TYPE.EVENT;
          g[e.parameters.CATEGORY] = h.TELEMETRY_CATEGORY;
          g[e.parameters.ACTION] = c + "-" + u;
          g[e.parameters.LABEL] = l;
          a.telemetry.send(g);
        },
        sendSessionLoginErrorCode: function (a) {
          h.send(h.actionType.SESSION, h.O2_SESSION.LOGIN, a);
        },
        sendSessionLogoutCode: function (a) {
          h.send(h.actionType.SESSION, h.O2_SESSION.LOGOUT, a);
        },
        sendSSOErrorCodeWithFullUrl: function (a, b) {
          h.send(h.actionType.SSO, b, a);
        },
        sendOxygenErrorCodeWithFullUrl: function (a, b) {
          h.send(h.actionType.OXYGEN, b, a);
        },
        sendSpocErrorCodeWithFullUrl: function (a, b) {
          h.send(h.actionType.SPOC, b, a);
        },
        sendOxygenDataStoreSchemaError: function (a, b) {
          h.send(h.actionType.OXYGEN_SCHEMA, b, a);
        },
        sendNASignedInAlready: function () {
          h.send(h.SSO_SETUP.ST_IGNORED, h.O2_SESSION.LOGIN, 200);
        },
        sendOIDCCallSuccess: function (a) {
          h.send(h.SSO_SETUP.OIDC_CALL_SUCCESS, h.O2_SESSION.LOGIN, a);
        },
        sendOIDCCallFailure: function (a) {
          h.send(h.SSO_SETUP.OIDC_CALL_FAILURE, h.O2_SESSION.LOGIN, a);
        },
        sendNASignedFromST: function (a) {
          h.send(h.SSO_SETUP.NA_SIGNIN_SUCCESS, h.O2_SESSION.LOGIN, a);
        },
        sendExtensionURLLaunched: function (a) {
          h.send(h.SSO_SETUP.EXTENSION_URL_LAUNCHED, a, 1);
        },
        sendNASIgnInFailureFromST: function (a) {
          h.send(h.SSO_SETUP.NA_SIGNIN_FAILURE, h.O2_SESSION.LOGIN, a);
        }
      };
    return h;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  (c.SymO2 = c.SymO2 || {}).authSCD = (function (a, c) {
    var b = {},
      d = a.utils.isNil;
    b.SSO_LOGOUT_URL = "https://login.norton.com/sso/logout";
    b.NSL_URL = "https://login.norton.com";
    b.SSO_LOGIN_URL = b.NSL_URL + "/sso/idp";
    b.GOOGLE_LOGIN_KEY = "google";
    b.APPLE_LOGIN_KEY = "apple";
    b.BT_PARTNER_LOGIN_KEY = "bt";
    b.SSO_OPEN_ID_URL = "https://login.norton.com/sso/idp/OPENID";
    b.SSO_OPENID_CONNECT_LOGIN_URL = "https://login.norton.com/sso/idp/OIDC";
    b.SSO_OPENID_CONNECT_TOKEN_URL = "https://login.norton.com/sso/oidc1/tokens";
    b.SSO_OPENID_CONNECT_DISCOVER_URL = "https://login.norton.com/sso/oidc1/token/jwks";
    b.IDSAFE_PORTAL_URL = "https://identitysafe.norton.com";
    b.O2_URL = "https://rs.avira.com/api/1";
    b.DS_URL = "https://ncs-ds.avira.com/api/datastore/v2";
    b.SPOC_URL = "https://spoc.avira.com";
    b.TENANT_ID = "17fba20b-f6a9-4c5a-98df-f1e1b7be3381";
    b.USER_AGENT = "XBP/5.3.5/Chrome//Oxygen";
    b.SPOC_USER_AGENT = "XBP/OCL";
    b.SPOC_DEFAULT_TIMEOUT = 3600;
    b.SPOC_RETRY_COUNT = 5;
    b.RETRY_TIMEOUT = 3600;
    b.DEFAULT_TTL = 1814400;
    b.DEFAULT_ACL_TTL = 15552e3;
    b.setMachineGUID = function (a) {
      d(a) || (this.machineGUID = a);
    };
    b.getMachineGUID = function () {
      if (d(this.machineGUID)) throw Error("machineGUID is not set. SymO2.ready is not called");
      return this.machineGUID;
    };
    b.serialize = function () {
      return {
        sso: b.SSO_URL,
        portal_interstitial_url: b.IDSAFE_PORTAL_URL,
        o2: b.O2_URL,
        "o2-ds": b.DS_URL,
        spoc: b.SPOC_URL,
        machineGUID: b.getMachineGUID(),
        userAgent: b.USER_AGENT,
        spocUserAgent: b.SPOC_USER_AGENT,
        ssoOpenIDConnectLoginURL: b.SSO_OPENID_CONNECT_LOGIN_URL,
        ssoOpenIDConnectTokenURL: b.SSO_OPENID_CONNECT_TOKEN_URL
      };
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c = c.SymO2 = c.SymO2 || {};
  var a = dcodeIO.ProtoBuf.newBuilder({})
    ["import"]({
      package: null,
      syntax: "proto2",
      messages: [
        {
          name: "com",
          fields: [],
          syntax: "proto2",
          messages: [
            {
              name: "symantec",
              fields: [],
              syntax: "proto2",
              messages: [
                {
                  name: "oxygen",
                  fields: [],
                  syntax: "proto2",
                  messages: [
                    {
                      name: "datastore",
                      fields: [],
                      syntax: "proto2",
                      messages: [
                        {
                          name: "db",
                          fields: [],
                          syntax: "proto2",
                          messages: [
                            {
                              name: "messages",
                              fields: [],
                              syntax: "proto2",
                              options: { optimize_for: "SPEED" },
                              messages: [
                                {
                                  name: "DatastoreV1CallbackMessage",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "callbackUrl", id: 1 },
                                    { rule: "optional", type: "string", name: "mimeType", id: 2 },
                                    { rule: "optional", type: "string", name: "rulePattern", id: 3 },
                                    { rule: "optional", type: "string", name: "userId", id: 4 },
                                    { rule: "optional", type: "QueueMessageDSv1Operation", name: "dsOperation", id: 5 },
                                    { rule: "optional", type: "uint32", name: "appId", id: 6 },
                                    { rule: "optional", type: "bytes", name: "dsRequest", id: 7 },
                                    { rule: "optional", type: "string", name: "node_path", id: 8 }
                                  ]
                                }
                              ],
                              enums: [
                                {
                                  name: "QueueMessageDSv1Operation",
                                  syntax: "proto2",
                                  values: [
                                    { name: "OP_CREATE", id: 1 },
                                    { name: "OP_UPDATE", id: 2 },
                                    { name: "OP_DELETE", id: 3 }
                                  ]
                                }
                              ],
                              isNamespace: !0
                            }
                          ],
                          isNamespace: !0
                        },
                        {
                          name: "v2",
                          fields: [],
                          syntax: "proto2",
                          messages: [
                            {
                              name: "messages",
                              fields: [],
                              syntax: "proto2",
                              options: { java_package: "com.symantec.oxygen.datastore.v2.messages", optimize_for: "SPEED" },
                              messages: [
                                {
                                  name: "Value",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "name", id: 1 },
                                    { rule: "required", type: "DataTypeID", name: "type", id: 2 },
                                    { rule: "optional", type: "uint32", name: "data_bool", id: 3 },
                                    { rule: "optional", type: "string", name: "data_string", id: 4 },
                                    { rule: "optional", type: "uint32", name: "data_uint32", id: 5 },
                                    { rule: "optional", type: "uint64", name: "data_uint64", id: 6 },
                                    { rule: "optional", type: "uint64", name: "data_timestamp", id: 7 },
                                    { rule: "optional", type: "bytes", name: "data_binary", id: 8 },
                                    { rule: "optional", type: "string", name: "data_stream", id: 9 },
                                    { rule: "repeated", type: "SetValue", name: "data_set", id: 10 },
                                    { rule: "optional", type: "bool", name: "overwrite", id: 11 }
                                  ],
                                  enums: [
                                    {
                                      name: "DataTypeID",
                                      syntax: "proto2",
                                      values: [
                                        { name: "TID_NIL", id: 0 },
                                        { name: "TID_BOOL", id: 1 },
                                        { name: "TID_STRING", id: 2 },
                                        { name: "TID_UINT32", id: 3 },
                                        { name: "TID_UINT64", id: 4 },
                                        { name: "TID_TIMESTAMP", id: 5 },
                                        { name: "TID_BINARY", id: 6 },
                                        { name: "TID_SET", id: 7 }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "SetValue",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "SetValueDataTypeID", name: "type", id: 1 },
                                    { rule: "optional", type: "string", name: "data_string", id: 2 },
                                    { rule: "optional", type: "uint32", name: "data_uint32", id: 3 },
                                    { rule: "optional", type: "uint64", name: "data_uint64", id: 4 },
                                    { rule: "optional", type: "bytes", name: "data_binary", id: 5 },
                                    { rule: "optional", type: "uint64", name: "modified_time", id: 6 }
                                  ],
                                  enums: [
                                    {
                                      name: "SetValueDataTypeID",
                                      syntax: "proto2",
                                      values: [
                                        { name: "TID_STRING", id: 0 },
                                        { name: "TID_UINT32", id: 1 },
                                        { name: "TID_UINT64", id: 2 },
                                        { name: "TID_BINARY", id: 3 }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "Node",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "path", id: 1 },
                                    { rule: "optional", type: "bool", name: "deleted", id: 2 },
                                    { rule: "repeated", type: "Value", name: "values", id: 3 },
                                    { rule: "optional", type: "uint64", name: "node_modified", id: 5 },
                                    { rule: "repeated", type: "ChildNodeMeta", name: "child_nodes", id: 6 }
                                  ]
                                },
                                {
                                  name: "ChildNodeMeta",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "node_name", id: 1 },
                                    { rule: "required", type: "string", name: "node_url", id: 2 }
                                  ]
                                },
                                {
                                  name: "NodeList",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "entity_id", id: 1 },
                                    { rule: "repeated", type: "Node", name: "nodes", id: 2 }
                                  ]
                                },
                                {
                                  name: "MultiEntityNodeList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "NodeList", name: "nodeLists", id: 1 }]
                                },
                                {
                                  name: "DatastoreRangeQuery",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "from_revision", id: 1 },
                                    { rule: "repeated", type: "string", name: "to_revision", id: 2 }
                                  ]
                                },
                                {
                                  name: "ErrorResultList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "ErrorResult", name: "entityError", id: 1 }]
                                },
                                {
                                  name: "ErrorResult",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "entity_id", id: 1 },
                                    { rule: "optional", type: "uint32", name: "status_code", id: 2 }
                                  ]
                                },
                                {
                                  name: "Challenge",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "entity_id", id: 1 },
                                    { rule: "required", type: "uint32", name: "app_id", id: 2 },
                                    { rule: "required", type: "uint64", name: "session_id", id: 3 },
                                    { rule: "optional", type: "bytes", name: "salt", id: 4 },
                                    { rule: "optional", type: "bytes", name: "client_data", id: 5 },
                                    { rule: "optional", type: "bytes", name: "decrypted_challenge", id: 6 },
                                    { rule: "optional", type: "bytes", name: "privateKey", id: 7 },
                                    { rule: "optional", type: "bytes", name: "publicKey", id: 8 }
                                  ]
                                },
                                {
                                  name: "ChallengeList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Challenge", name: "challenges", id: 1 }]
                                },
                                {
                                  name: "DataStoreSpocPayloadV2",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "origin", id: 1 },
                                    { rule: "repeated", type: "string", name: "to_revision", id: 2 },
                                    { rule: "repeated", type: "uint32", name: "app_id", id: 3 }
                                  ]
                                },
                                {
                                  name: "DsCallbackRequestV2",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "repeated", type: "NodeChange", name: "changed_nodes", id: 1 },
                                    { rule: "optional", type: "string", name: "entity_id", id: 2 },
                                    { rule: "optional", type: "string", name: "source_user_agent", id: 3 },
                                    { rule: "optional", type: "string", name: "request_id", id: 4 }
                                  ]
                                },
                                {
                                  name: "NodeChange",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "path", id: 1 },
                                    { rule: "repeated", type: "Value", name: "values", id: 2 },
                                    { rule: "required", type: "DsOperation", name: "ds_operation", id: 3 },
                                    { rule: "optional", type: "string", name: "callbackUrl", id: 4 },
                                    { rule: "optional", type: "string", name: "mimeType", id: 5 },
                                    { rule: "optional", type: "string", name: "rulePattern", id: 6 }
                                  ]
                                },
                                {
                                  name: "InvalidNode",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "path", id: 1 },
                                    { rule: "required", type: "uint32", name: "reason", id: 3 }
                                  ]
                                },
                                {
                                  name: "InvalidNodeList",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "entity_id", id: 1 },
                                    { rule: "repeated", type: "InvalidNode", name: "nodes", id: 2 }
                                  ]
                                },
                                {
                                  name: "InvalidMultiEntityNodeList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "InvalidNodeList", name: "nodeLists", id: 1 }]
                                }
                              ],
                              enums: [
                                {
                                  name: "DsOperation",
                                  syntax: "proto2",
                                  values: [
                                    { name: "OP_READ", id: 1 },
                                    { name: "OP_WRITE", id: 2 },
                                    { name: "OP_DELETE", id: 3 }
                                  ]
                                }
                              ],
                              isNamespace: !0
                            }
                          ],
                          isNamespace: !0
                        }
                      ],
                      isNamespace: !0
                    },
                    {
                      name: "rest",
                      fields: [],
                      syntax: "proto2",
                      messages: [
                        {
                          name: "error",
                          fields: [],
                          syntax: "proto2",
                          messages: [
                            {
                              name: "messages",
                              fields: [],
                              syntax: "proto2",
                              options: { optimize_for: "SPEED" },
                              messages: [
                                {
                                  name: "Error",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "error_type", id: 1 },
                                    { rule: "required", type: "Code", name: "error_code", id: 2 },
                                    { rule: "optional", type: "string", name: "error_desc", id: 3 }
                                  ],
                                  enums: [
                                    {
                                      name: "Code",
                                      syntax: "proto2",
                                      values: [
                                        { name: "AUTH_INVALID_TOKEN", id: 1 },
                                        { name: "AUTH_BAD_CREDENTIALS", id: 2 },
                                        { name: "AUTH_GENERIC_ERROR", id: 3 }
                                      ]
                                    }
                                  ]
                                }
                              ],
                              isNamespace: !0
                            }
                          ],
                          isNamespace: !0
                        },
                        {
                          name: "accounts",
                          fields: [],
                          syntax: "proto2",
                          messages: [
                            {
                              name: "messages",
                              fields: [],
                              syntax: "proto2",
                              options: { java_package: "com.symantec.oxygen.rest.accounts.messages", optimize_for: "SPEED" },
                              messages: [
                                {
                                  name: "id",
                                  syntax: "proto2",
                                  fields: [
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "OXYGEN_ACL_GUID",
                                      id: 1,
                                      options: { default: "F8852F19-F8C5-46a1-99C3-4209748693F3" }
                                    },
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "OXYGEN_SERVICE_ID",
                                      id: 2,
                                      options: { default: "o2api.norton.com" }
                                    },
                                    { rule: "optional", type: "int32", name: "ACL_FULL_ACCESS", id: 3, options: { default: -1 } }
                                  ]
                                },
                                {
                                  name: "AclGuidV2",
                                  syntax: "proto2",
                                  fields: [
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "ACL_GUID_REGISTER_MACHINE",
                                      id: 1,
                                      options: { default: "0D8F0C65-5BAA-4bb9-834C-808A8CC3325D" }
                                    },
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "ACL_GUID_DATASTORE_READ",
                                      id: 2,
                                      options: { default: "4B05419E-9878-464e-B55D-F208B07F6AA7" }
                                    },
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "ACL_GUID_DATASTORE_WRITE",
                                      id: 3,
                                      options: { default: "5C40FD9F-3373-4a1b-BEAB-DA9E409A7B62" }
                                    },
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "ACL_GUID_MACHINE_OWNER_INFO",
                                      id: 4,
                                      options: { default: "44396799-3A63-4385-8E0F-648723094FE3" }
                                    },
                                    {
                                      rule: "optional",
                                      type: "string",
                                      name: "ACL_GUID_FULL_ACCESS",
                                      id: 5,
                                      options: { default: "42305456-406C-4D7C-8DB8-942D7B48993A" }
                                    }
                                  ]
                                },
                                {
                                  name: "Group",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "href", id: 1 },
                                    { rule: "optional", type: "uint64", name: "id", id: 2 },
                                    { rule: "optional", type: "string", name: "name", id: 3 },
                                    { rule: "repeated", type: "GroupOwner", name: "owners", id: 4 },
                                    { rule: "repeated", type: "GroupMember", name: "members", id: 5 }
                                  ]
                                },
                                {
                                  name: "GroupOwner",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "User", name: "owner", id: 1 },
                                    { rule: "optional", type: "Acl", name: "groupAcl", id: 2 }
                                  ]
                                },
                                {
                                  name: "GroupMember",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "User", name: "member", id: 1 },
                                    { rule: "optional", type: "bool", name: "create_if_not_exist", id: 3 }
                                  ]
                                },
                                {
                                  name: "User",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "href", id: 1 },
                                    { rule: "optional", type: "uint64", name: "id", id: 2 },
                                    { rule: "optional", type: "string", name: "username", id: 3 },
                                    { rule: "optional", type: "string", name: "password", id: 4 },
                                    { rule: "optional", type: "string", name: "display_name", id: 5 },
                                    { rule: "optional", type: "string", name: "avatar", id: 6 },
                                    { rule: "optional", type: "string", name: "country", id: 7 },
                                    { rule: "optional", type: "string", name: "language", id: 8 },
                                    { rule: "optional", type: "bool", name: "email_security_alerts", id: 9 },
                                    { rule: "optional", type: "bool", name: "email_product_updates", id: 10 },
                                    { rule: "optional", type: "string", name: "norton_account_guid", id: 13 },
                                    { rule: "optional", type: "string", name: "firstname", id: 14, options: { default: "" } },
                                    { rule: "optional", type: "string", name: "lastname", id: 15, options: { default: "" } },
                                    { rule: "optional", type: "MachineListV2", name: "machines", id: 16 },
                                    { rule: "repeated", type: "Group", name: "groups", id: 17 },
                                    { rule: "optional", type: "string", name: "ebe_language", id: 18 },
                                    { rule: "optional", type: "string", name: "birthday", id: 19 },
                                    { rule: "optional", type: "Gender", name: "gender", id: 20 },
                                    { rule: "optional", type: "uint64", name: "oxygen_id", id: 21 },
                                    { rule: "optional", type: "uint64", name: "legacy_id", id: 22 }
                                  ],
                                  enums: [
                                    {
                                      name: "MaxValues",
                                      syntax: "proto2",
                                      values: [
                                        { name: "USERNAME_LENGTH", id: 256 },
                                        { name: "PASSWORD_LENGTH", id: 128 }
                                      ]
                                    },
                                    {
                                      name: "Gender",
                                      syntax: "proto2",
                                      values: [
                                        { name: "M", id: 0 },
                                        { name: "F", id: 1 }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "UserList",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "repeated", type: "User", name: "owners", id: 1 },
                                    { rule: "repeated", type: "User", name: "members", id: 2 }
                                  ]
                                },
                                {
                                  name: "EncryptionKey",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "bytes", name: "client_key", id: 1 },
                                    { rule: "required", type: "uint64", name: "entity_id", id: 2 }
                                  ],
                                  enums: [{ name: "MaxValues", syntax: "proto2", values: [{ name: "CLIENTKEY_LENGTH", id: 32 }] }]
                                },
                                {
                                  name: "MachineUserAccount",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "name", id: 1 },
                                    { rule: "optional", type: "string", name: "id", id: 2 },
                                    { rule: "optional", type: "string", name: "comment", id: 3 }
                                  ],
                                  enums: [
                                    {
                                      name: "MaxValues",
                                      syntax: "proto2",
                                      values: [
                                        { name: "USER_NAME_LENGTH", id: 128 },
                                        { name: "USER_ID_LENGTH", id: 100 },
                                        { name: "COMMENT_LENGTH", id: 255 }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "MachineTypeConst",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "Desktop", id: 1, options: { default: "Desktop" } },
                                    { rule: "optional", type: "string", name: "Laptop", id: 2, options: { default: "Laptop" } },
                                    { rule: "optional", type: "string", name: "Netbook", id: 3, options: { default: "Netbook" } },
                                    { rule: "optional", type: "string", name: "Tablet", id: 4, options: { default: "Tablet" } },
                                    { rule: "optional", type: "string", name: "Phone", id: 5, options: { default: "Phone" } }
                                  ]
                                },
                                {
                                  name: "Machine",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "href", id: 1 },
                                    { rule: "optional", type: "uint64", name: "id", id: 2, options: { default: 0 } },
                                    { rule: "optional", type: "string", name: "name", id: 3 },
                                    { rule: "optional", type: "string", name: "os_name", id: 4, options: { default: "unknown" } },
                                    { rule: "optional", type: "string", name: "os_version", id: 5, options: { default: "unknown" } },
                                    { rule: "optional", type: "string", name: "machine_type", id: 6, options: { default: "unknown" } },
                                    { rule: "repeated", type: "MachineUserAccount", name: "users", id: 7 },
                                    { rule: "optional", type: "string", name: "heartbeat_guid", id: 8 },
                                    { rule: "optional", type: "string", name: "license_key", id: 9 },
                                    { rule: "optional", type: "bytes", name: "machine_key", id: 10 },
                                    { rule: "optional", type: "string", name: "machine_guid", id: 11 },
                                    { rule: "optional", type: "string", name: "silo_guid", id: 12 },
                                    { rule: "optional", type: "string", name: "silo_version", id: 13 },
                                    { rule: "optional", type: "string", name: "silo_internal_key", id: 14 }
                                  ],
                                  enums: [
                                    {
                                      name: "MaxValues",
                                      syntax: "proto2",
                                      values: [
                                        { name: "MACHINE_NAME_LENGTH", id: 200 },
                                        { name: "OS_NAME_LENGTH", id: 50 },
                                        { name: "OS_VERSION_LENGTH", id: 45 }
                                      ],
                                      options: { allow_alias: !0 }
                                    }
                                  ]
                                },
                                {
                                  name: "MachineInfo",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "uint64", name: "id", id: 1, options: { default: 0 } },
                                    { rule: "optional", type: "string", name: "name", id: 2 },
                                    { rule: "optional", type: "string", name: "os_name", id: 3, options: { default: "unknown" } },
                                    { rule: "optional", type: "string", name: "os_version", id: 4, options: { default: "unknown" } },
                                    { rule: "optional", type: "string", name: "machine_type", id: 5, options: { default: "unknown" } },
                                    { rule: "repeated", type: "MachineUserAccount", name: "users", id: 6 },
                                    { rule: "optional", type: "string", name: "machine_guid", id: 7 },
                                    { rule: "optional", type: "string", name: "claim_key", id: 8 },
                                    { rule: "optional", type: "uint64", name: "creation_time", id: 9 }
                                  ],
                                  enums: [
                                    {
                                      name: "MaxValues",
                                      syntax: "proto2",
                                      values: [
                                        { name: "MACHINE_NAME_LENGTH", id: 50 },
                                        { name: "OS_NAME_LENGTH", id: 50 },
                                        { name: "OS_VERSION_LENGTH", id: 50 }
                                      ],
                                      options: { allow_alias: !0 }
                                    }
                                  ]
                                },
                                {
                                  name: "Notification",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "uint64", name: "id", id: 1 },
                                    { rule: "optional", type: "string", name: "uri", id: 2 },
                                    { rule: "optional", type: "uint64", name: "ttl", id: 3 },
                                    { rule: "optional", type: "string", name: "application", id: 4 },
                                    { rule: "optional", type: "string", name: "device_type", id: 5 },
                                    { rule: "optional", type: "uint64", name: "user", id: 6 },
                                    { rule: "optional", type: "string", name: "machine", id: 7 },
                                    { rule: "optional", type: "uint64", name: "flags", id: 8 },
                                    { rule: "optional", type: "string", name: "language", id: 9 },
                                    { rule: "optional", type: "uint64", name: "creation_time", id: 10 }
                                  ]
                                },
                                {
                                  name: "NotificationList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Notification", name: "notifications", id: 1 }]
                                },
                                {
                                  name: "GroupInviteToken",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "uint64", name: "id", id: 1 },
                                    { rule: "optional", type: "string", name: "token_guid", id: 2 },
                                    { rule: "optional", type: "uint64", name: "group_id", id: 3 },
                                    { rule: "optional", type: "uint64", name: "application_id", id: 4 },
                                    { rule: "optional", type: "string", name: "email", id: 5 },
                                    { rule: "optional", type: "uint64", name: "creation_time", id: 6 }
                                  ]
                                },
                                {
                                  name: "SiloInfo",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "uint64", name: "id", id: 1 },
                                    { rule: "optional", type: "string", name: "guid", id: 2 },
                                    { rule: "optional", type: "string", name: "version", id: 3 },
                                    { rule: "optional", type: "string", name: "name", id: 4 },
                                    { rule: "optional", type: "bytes", name: "silo_key", id: 5 },
                                    { rule: "optional", type: "uint64", name: "creation_time", id: 6 }
                                  ]
                                },
                                {
                                  name: "MachineV2",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "MachineInfo", name: "machine_info", id: 1 },
                                    { rule: "repeated", type: "SiloInfo", name: "silo_infos", id: 2 },
                                    { rule: "optional", type: "string", name: "href", id: 3 }
                                  ]
                                },
                                {
                                  name: "Silo",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "MachineInfo", name: "machine_info", id: 1 },
                                    { rule: "required", type: "SiloInfo", name: "silo_Info", id: 2 }
                                  ]
                                },
                                {
                                  name: "MachineList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Machine", name: "machines", id: 1 }]
                                },
                                {
                                  name: "MachineListV2",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "MachineV2", name: "machines", id: 1 }]
                                },
                                {
                                  name: "MachineComponent",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "uint32", name: "app_id", id: 1 },
                                    { rule: "required", type: "string", name: "version", id: 2 }
                                  ]
                                },
                                {
                                  name: "MachineInventory",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "MachineComponent", name: "components", id: 1 }]
                                },
                                {
                                  name: "AccountStatus",
                                  syntax: "proto2",
                                  fields: [{ rule: "required", type: "UserAccountStatus", name: "status", id: 1 }],
                                  enums: [
                                    {
                                      name: "UserAccountStatus",
                                      syntax: "proto2",
                                      values: [
                                        { name: "UAS_NONE", id: 0 },
                                        { name: "UAS_NORTON_ONLY", id: 1 }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: "SSOToken",
                                  syntax: "proto2",
                                  fields: [{ rule: "required", type: "string", name: "token", id: 1 }],
                                  enums: [{ name: "MaxValues", syntax: "proto2", values: [{ name: "TOKEN_LENGTH", id: 1024 }] }]
                                },
                                {
                                  name: "MachineOwnerInfo",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "User", name: "user", id: 1 },
                                    { rule: "required", type: "MachineInfo", name: "machine", id: 2 }
                                  ]
                                },
                                {
                                  name: "SessionTokenHeader",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "uint32", name: "version", id: 1 },
                                    { rule: "required", type: "uint32", name: "key_index", id: 2 },
                                    { rule: "required", type: "uint32", name: "signature_index", id: 3 },
                                    { rule: "required", type: "bytes", name: "iv", id: 4 },
                                    { rule: "required", type: "bytes", name: "signature", id: 5 }
                                  ]
                                },
                                {
                                  name: "SessionToken",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "SessionTokenHeader", name: "header", id: 1 },
                                    { rule: "required", type: "bytes", name: "cipher_text", id: 2 }
                                  ]
                                },
                                {
                                  name: "ExtendedSessionAccess",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "int32", name: "app_id", id: 1 },
                                    { rule: "optional", type: "uint64", name: "ttlDataStoreRead", id: 2 },
                                    { rule: "optional", type: "uint64", name: "ttlDataStoreWrite", id: 3 },
                                    { rule: "optional", type: "uint64", name: "ttlRegisterMachine", id: 4 },
                                    { rule: "repeated", type: "int32", name: "app_list", id: 5 }
                                  ]
                                },
                                {
                                  name: "Acl",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "uint64", name: "principal", id: 1 },
                                    { rule: "required", type: "uint64", name: "target", id: 2 },
                                    { rule: "optional", type: "uint32", name: "application", id: 3 },
                                    { rule: "optional", type: "bytes", name: "permission", id: 4 },
                                    { rule: "optional", type: "EntityType", name: "principalType", id: 5 },
                                    { rule: "optional", type: "EntityType", name: "targetType", id: 6 },
                                    { rule: "repeated", type: "string", name: "accessGuids", id: 7 },
                                    { rule: "optional", type: "bool", name: "trusted", id: 8 }
                                  ]
                                },
                                { name: "AclList", syntax: "proto2", fields: [{ rule: "repeated", type: "Acl", name: "acl_list", id: 1 }] },
                                {
                                  name: "Delegation",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "uint64", name: "machine_id", id: 1 },
                                    { rule: "repeated", type: "string", name: "permission", id: 2 }
                                  ]
                                },
                                {
                                  name: "DelegationList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Delegation", name: "delegation", id: 1 }]
                                },
                                {
                                  name: "Delegator",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "User", name: "user", id: 1 },
                                    { rule: "optional", type: "string", name: "category", id: 2 },
                                    { rule: "repeated", type: "Delegation", name: "delegations", id: 3 }
                                  ]
                                },
                                {
                                  name: "DelegatorList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Delegator", name: "delegators", id: 1 }]
                                },
                                {
                                  name: "Entity",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "uint64", name: "id", id: 1, options: { default: 0 } },
                                    { rule: "optional", type: "string", name: "name", id: 2, options: { default: "unknown" } },
                                    { rule: "optional", type: "string", name: "application", id: 3, options: { default: "unknown" } }
                                  ],
                                  enums: [
                                    {
                                      name: "MaxValues",
                                      syntax: "proto2",
                                      values: [
                                        { name: "ENTITY_NAME_LENGTH", id: 50 },
                                        { name: "ENTITY_APPLICATION_LENGTH", id: 50 }
                                      ],
                                      options: { allow_alias: !0 }
                                    }
                                  ]
                                },
                                {
                                  name: "EntityList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "Entity", name: "entities", id: 1 }]
                                },
                                {
                                  name: "TrustedServiceToken",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "token", id: 1 },
                                    { rule: "optional", type: "uint32", name: "ttlInMinute", id: 2 }
                                  ]
                                },
                                {
                                  name: "UserAttributes",
                                  syntax: "proto2",
                                  fields: [{ rule: "optional", type: "bool", name: "use_upper_machine_limit", id: 1 }]
                                },
                                { name: "SiloCache", syntax: "proto2", fields: [] },
                                {
                                  name: "MBApiRequest",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "optional", type: "string", name: "request", id: 1 },
                                    { rule: "optional", type: "uint64", name: "id", id: 2 },
                                    { rule: "optional", type: "string", name: "authentication", id: 3 }
                                  ]
                                },
                                {
                                  name: "ChallengeData",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "bytes", name: "privateKey", id: 1 },
                                    { rule: "required", type: "bytes", name: "publicKey", id: 2 },
                                    { rule: "required", type: "bytes", name: "salt", id: 3 },
                                    { rule: "optional", type: "bool", name: "force", id: 4 },
                                    { rule: "optional", type: "bytes", name: "challengeData", id: 5 },
                                    { rule: "optional", type: "bytes", name: "challengeDecrypted", id: 6 },
                                    { rule: "optional", type: "uint64", name: "user_id", id: 7 },
                                    { rule: "optional", type: "uint64", name: "session_id", id: 8 }
                                  ]
                                },
                                {
                                  name: "SymcRSCookieHeader",
                                  syntax: "proto2",
                                  fields: [
                                    { rule: "required", type: "string", name: "name", id: 1 },
                                    { rule: "required", type: "string", name: "value", id: 2 },
                                    { rule: "optional", type: "string", name: "expires", id: 3 }
                                  ]
                                },
                                {
                                  name: "SymcRSCookieHeaderList",
                                  syntax: "proto2",
                                  fields: [{ rule: "repeated", type: "SymcRSCookieHeader", name: "cookies", id: 1 }]
                                }
                              ],
                              enums: [
                                {
                                  name: "AclBit",
                                  syntax: "proto2",
                                  values: [
                                    { name: "ACL_REGISTER_MACHINE", id: 16 },
                                    { name: "ACL_DATASTORE_READ", id: 1 },
                                    { name: "ACL_DATASTORE_WRITE", id: 2 },
                                    { name: "ACL_MACHINE_OWNER_INFO", id: 3 }
                                  ]
                                },
                                {
                                  name: "AclPermissionBits",
                                  syntax: "proto2",
                                  values: [
                                    { name: "ACCESS_ACL_WRITE", id: 1 },
                                    { name: "ACCESS_READ", id: 2 },
                                    { name: "ACCESS_WRITE", id: 4 }
                                  ]
                                },
                                {
                                  name: "EntityType",
                                  syntax: "proto2",
                                  values: [
                                    { name: "USER", id: 0 },
                                    { name: "SILO", id: 1 },
                                    { name: "GROUP", id: 2 },
                                    { name: "OXYGEN_ENTITY", id: 3 }
                                  ]
                                }
                              ],
                              isNamespace: !0
                            }
                          ],
                          isNamespace: !0
                        }
                      ],
                      isNamespace: !0
                    }
                  ],
                  isNamespace: !0
                }
              ],
              isNamespace: !0
            }
          ],
          isNamespace: !0
        },
        {
          name: "spoc",
          fields: [],
          syntax: "proto2",
          options: { java_package: "com.symantec.spoc.messages", optimize_for: "SPEED" },
          messages: [
            {
              name: "SpocRegistrationArray",
              syntax: "proto2",
              fields: [{ rule: "repeated", type: "SpocRegistration", name: "registration", id: 1 }]
            },
            {
              name: "SpocRegistration",
              syntax: "proto2",
              fields: [
                { rule: "required", type: "string", name: "entity", id: 1 },
                { rule: "required", type: "int32", name: "channel", id: 2 },
                { rule: "required", type: "int32", name: "revision", id: 3 },
                { rule: "optional", type: "bytes", name: "payload", id: 4 },
                { rule: "repeated", type: "NotificationService", name: "NotificationService", id: 5 },
                { rule: "optional", type: "string", name: "ApplicationID", id: 6 }
              ]
            },
            {
              name: "NotificationService",
              syntax: "proto2",
              fields: [
                { rule: "required", type: "NotificationServiceType", name: "ServiceType", id: 1 },
                { rule: "required", type: "string", name: "RegistrationID", id: 2 },
                { rule: "optional", type: "string", name: "CertID", id: 3 },
                { rule: "optional", type: "MessagePriority", name: "Priority", id: 4, options: { default: "NORMAL" } }
              ]
            },
            { name: "SpocBumpArray", syntax: "proto2", fields: [{ rule: "repeated", type: "SpocBump", name: "bump", id: 1 }] },
            {
              name: "SpocBump",
              syntax: "proto2",
              fields: [
                { rule: "required", type: "string", name: "entity", id: 1 },
                { rule: "required", type: "int32", name: "channel", id: 2 },
                { rule: "optional", type: "bytes", name: "payload", id: 3 },
                { rule: "optional", type: "string", name: "ApplicationID", id: 4 },
                { rule: "optional", type: "ServiceData", name: "serviceData", id: 5 }
              ]
            },
            { name: "ServiceData", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "apsJson", id: 1 }] },
            { name: "SpocPollArray", syntax: "proto2", fields: [{ rule: "repeated", type: "SpocPoll", name: "poll", id: 1 }] },
            {
              name: "SpocPoll",
              syntax: "proto2",
              fields: [
                { rule: "required", type: "string", name: "entity", id: 1 },
                { rule: "required", type: "int32", name: "channel", id: 2 },
                { rule: "optional", type: "int32", name: "revision", id: 3 }
              ]
            },
            { name: "SpocStateArray", syntax: "proto2", fields: [{ rule: "repeated", type: "SpocState", name: "state", id: 1 }] },
            {
              name: "SpocState",
              syntax: "proto2",
              fields: [
                { rule: "required", type: "string", name: "entity", id: 1 },
                { rule: "required", type: "int32", name: "channel", id: 2 },
                { rule: "optional", type: "int64", name: "timestamp", id: 3 },
                { rule: "optional", type: "int32", name: "online", id: 4 },
                { rule: "optional", type: "int64", name: "timeout", id: 5 }
              ]
            }
          ],
          enums: [
            {
              name: "SPOCChannel",
              syntax: "proto2",
              values: [
                { name: "SC_NOREV", id: 0 },
                { name: "SC_STATE", id: 1 },
                { name: "SC_DATASTORE_UPDATE", id: 2 },
                { name: "SC_REGISTRATION_UPDATE", id: 3 },
                { name: "SC_DATA_REQUEST", id: 4 },
                { name: "SC_REMOTE_MANAGEMENT_REQUEST", id: 5 },
                { name: "SC_ENTITLEMENT_UPDATE", id: 6 },
                { name: "SC_EVENT_LOG_UPDATE", id: 7 },
                { name: "SC_INCENTIVES_UPDATE", id: 8 },
                { name: "SC_REGISTRATION_DELETE", id: 9 },
                { name: "SC_EVENT_LOG_LOCATION", id: 10 },
                { name: "SC_EVENT_LOG_NMS_MSWS", id: 11 },
                { name: "SC_PRODUCT_ENTITLEMENT_UPDATE", id: 12 },
                { name: "SC_SUBSCRIPTION_UPDATE", id: 13 },
                { name: "SC_NORTON_HOME_UPDATE", id: 20 },
                { name: "SC_SE_PROXY", id: 30 },
                { name: "SC_NMS_COMMAND", id: 31 },
                { name: "SC_PDM_POLICY", id: 40 },
                { name: "SC_PDM_COMMAND", id: 41 },
                { name: "SC_DCS_COMMAND", id: 50 },
                { name: "SC_MTS_MESSAGE", id: 100 },
                { name: "SC_MAX", id: 500 }
              ]
            },
            {
              name: "NotificationServiceType",
              syntax: "proto2",
              values: [
                { name: "NS_GCM", id: 1 },
                { name: "NS_APNS", id: 2 },
                { name: "NS_WNS", id: 3 }
              ]
            },
            {
              name: "MessagePriority",
              syntax: "proto2",
              values: [
                { name: "HIGH", id: 1 },
                { name: "NORMAL", id: 2 }
              ]
            }
          ],
          isNamespace: !0
        }
      ],
      isNamespace: !0
    })
    .build();
  c.proto = a;
})(window);
(function (c) {
  c.SymO2.sso = (function (a, c) {
    var b = {},
      d = a.utils.isNil,
      e = a.utils.isntNil,
      h = a.utils.isFunction,
      t = a.utils.isString,
      p = a.utils.isSuccessCode,
      u = a.base64,
      g = c.authSCD,
      m = c.constants,
      k = c.telemetryWrapper;
    b.getPublicKey = function () {
      if (d(this.publicKey)) throw Error("Public Key not available. OCL was not properly initialized.");
      return this.publicKey;
    };
    b.getPublicKeyIdentifier = function () {
      if (d(this.pubKeyID)) throw Error("Public Key ID not available. OCL was not properly initialized.");
      return this.pubKeyID;
    };
    b.generateScopeParam = function (a) {
      var b = "openid",
        c;
      for (c in a) (b += "+"), (b += a[c]);
      return b;
    };
    b.getOpenIDConnectLoginURL = function (a) {
      if (d(a)) throw Error("State cannot be null.");
      var f = c.session,
        e = g.SSO_OPENID_CONNECT_LOGIN_URL,
        q = [];
      q.push("response_type=code");
      var v = b.generateScopeParam(f.getScopes());
      q.push("scope=" + v);
      q.push("client_id=" + encodeURIComponent(f.getClientID()));
      q.push("state=" + encodeURIComponent(a));
      q.push("redirect_uri=" + encodeURIComponent(f.getReturnURL()));
      return e + "?" + q.join("&");
    };
    b.parseAuthCodeAndGetTokens = function (a, b) {
      if (d(a)) throw Error("Params cannot be null");
      if (!1 === h(b)) throw Error("Callback cannot be null");
      var f = null,
        e;
      for (e in a) {
        var g = a[e].split("=");
        switch (g[0]) {
          case "code":
            f = g[1];
        }
      }
      d(f)
        ? setTimeout(function () {
            b(null, "Invalid Parameters");
          }, 1)
        : c.sso.getTokensFromAuthorizationCode(f, b);
    };
    b.generateToken = function (a, r) {
      if (d(a)) throw Error("Params cannot be null");
      if (d(r)) throw Error("Callback cannot be null");
      var f = c.session,
        q = b.generateScopeParam(f.getScopes());
      a.push("redirect_uri=" + encodeURIComponent(f.getReturnURL()));
      a.push("scope=" + q);
      a = a.join("&");
      var v = g.SSO_OPENID_CONNECT_TOKEN_URL;
      q = {};
      var n = f.getClientID(),
        x = f.getClientSecret();
      e(x) && ((n = "Basic " + btoa(n + ":" + x)), (q[m.header.AUTHORIZATION] = n));
      b.ssoConnection(
        v,
        m.requestType.POST_METHOD,
        function (a) {
          var c = a.target.status;
          if (p(c)) {
            var d = JSON.parse(a.target.response),
              e = d.access_token,
              g = d.refresh_token;
            d = d.id_token;
            b.parseAndValidateJWT(d)
              ? (f.setLLT(g),
                f.setAccessToken(e),
                f.setIDToken(d),
                setTimeout(function () {
                  r(c, e);
                }, 1))
              : setTimeout(function () {
                  r(null, Error("Token could not be verified"));
                }, 1);
          } else
            setTimeout(function () {
              k.sendSSOErrorCodeWithFullUrl(c, v + "-" + m.requestType.POST_METHOD);
              r(c, a);
            }, 1);
        },
        q,
        a
      );
    };
    b.parseAndValidateJWT = function (a) {
      var b = c.session;
      if (d(a)) throw Error("JWT cannot be null.");
      a = a.split(".");
      JSON.parse(atob(a[0]));
      a = JSON.parse(u.decode(a[1]));
      var f = a.sub;
      b.setEmail(a.email);
      b.setNAGUID(f);
      e(a.IdP) ? b.setPartnerInfo(a.IdP) : b.setPartnerInfo("NA");
      return !0;
    };
    b.getTokensFromAuthorizationCode = function (a, c) {
      var d = [];
      d.push("grant_type=authorization_code");
      d.push("code=" + a);
      b.generateToken(d, c);
    };
    b.getTokensFromRefreshToken = function (a) {
      var d = [],
        f = c.session;
      d.push("grant_type=refresh_token");
      d.push("refresh_token=" + f.getLLT());
      b.generateToken(d, a);
    };
    b.getTokensFromST = function (a, d) {
      var f = [],
        e = c.session;
      f.push("grant_type=access_token");
      f.push("access_token=" + a);
      f.push("client_id=" + e.getClientID());
      f.push("client_secret=dummy_secret");
      f.push("claims={challenge:true}");
      b.generateToken(f, d);
    };
    b.ssoConnection = function (a, b, c, e, g) {
      if (!t(a)) throw Error("API URL should be a string");
      if (d(b)) throw Error("Http method cannot be nil");
      if (!h(c)) throw Error("Output callback should be a function");
      var f = new XMLHttpRequest();
      f.open(b, a, !0);
      f.timeout = m.DEFAULT_XHR_TIMEOUT;
      f.addEventListener("load", function (a) {
        c(a);
      });
      f.addEventListener("error", function (a) {
        c(a);
      });
      f.addEventListener("timeout", function (a) {
        c(a);
      });
      for (var q in e) f.setRequestHeader(q, e[q]);
      f.setRequestHeader(m.header.ACCEPT, m.contentType.JSON);
      f.setRequestHeader(m.header.CONTENT_TYPE, m.contentType.FORM_URL_ENCODED);
      f.send(g);
    };
    b.logout = function (a) {
      var b = new XMLHttpRequest();
      b.open("GET", c.authSCD.SSO_LOGOUT_URL, !0);
      b.addEventListener("load", function (b) {
        h(a) &&
          setTimeout(function () {
            a(!0);
          }, 1);
        !1 === p(b.target.status) && k.sendSSOErrorCodeWithFullUrl(b.target.status, g.SSO_LOGOUT_URL + "-" + m.requestType.GET_METHOD);
      });
      b.addEventListener("error", function (b) {
        h(a) &&
          setTimeout(function () {
            a(!1);
          }, 1);
        k.sendSSOErrorCodeWithFullUrl(b.target.status, g.SSO_LOGOUT_URL + "-" + m.requestType.GET_METHOD);
      });
      b.send();
    };
    b.signIntoNA = function () {
      c.naLoginManager.loginToNA();
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.cct = (function (a, c) {
    var b = {},
      d = a.utils.isNil,
      e = a.utils.isSuccessCode,
      h = a.utils.isFunction,
      t = a.utils.isEmptyObject,
      p = a.logger;
    b.storeOIDCTokensAndConnectToOxygen = function (a, b) {
      if (!h(b)) throw Error("Callback has to be a function");
      if (t(a.oidctokens)) p.error("OidcTokens cannot be null"), b(!1, Error("OidcTokens cannot be null"));
      else {
        var g = a.oidctokens.access_token,
          l = a.oidctokens.refresh_token;
        a = a.oidctokens.id_token;
        if (d(g) || d(l) || d(a)) p.error("Tokens cannot be null"), b(!1, Error("Tokens cannot be null"));
        else if (c.sso.parseAndValidateJWT(a)) {
          var f = c.session;
          f.setLLT(l);
          f.setIDToken(a);
          f.setAccessToken(g);
          c.oxygen.getUserID(function (a, c) {
            !1 === e(a)
              ? (f.logout(),
                setTimeout(function () {
                  b(!1, c);
                }, 1))
              : setTimeout(function () {
                  b(!0, null);
                }, 1);
          }, g);
        } else
          setTimeout(function () {
            b(!1, Error("Token could not be verified"));
          }, 1);
      }
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.cookieManager = (function (a, c) {
    var b = null,
      d = null,
      e = c.proto.com.symantec.oxygen.rest.accounts.messages.SymcRSCookieHeaderList,
      h = c.constants,
      t = a.utils.isNil,
      p = a.utils.isntNil,
      u = a.utils.isFunction,
      g = a.logger,
      m = a.utils.isString;
    b = function () {};
    b.prototype.load = function (b) {
      if (!u(b)) throw Error("Callback should be a non-null function");
      d = a.settings.loadSettingsContainer(h.domain.COOKIES, !1);
      b(!0, null);
    };
    b.prototype.unload = function () {
      d = null;
    };
    b.prototype.get = function (a) {
      if (t(d)) g.info("CookieManager is not loaded ");
      else {
        if (!m(a)) throw Error("url should be a string");
        var b = d.getObject(a);
        if (t(b) || t(b.expires)) return g.info("Did not find any cookie stored for url : " + a), null;
        var c = new Date(b.expires);
        return new Date().getTime() >= c.getTime() ? (this.remove(a), null) : b.cookie;
      }
    };
    b.prototype.add = function (a, b) {
      if (t(d)) return g.info("CookieManager is not loaded "), !1;
      if (!m(a)) throw Error("url should be a string");
      if (t(b)) throw Error("Value cannot be null");
      var f = decodeURIComponent(b);
      f = forge.util.decode64(f);
      f = c.utils.createUInt8BufferFromStringBuffer(f);
      var l = e.decode(f);
      f = new Date();
      p(l.cookies) && p(l.cookies[0].expires)
        ? f.setSeconds(f.getSeconds() + parseInt(l.cookies[0].expires))
        : f.setSeconds(f.getSeconds() + 86399);
      l = {};
      if (new Date().getTime() >= f.getTime()) return g.error("Cookie expired " + h.header.SYMC_COOKIE + " for domain: " + a), !1;
      l.expires = f;
      l.cookie = b;
      d.setObject(a, l);
      return !0;
    };
    b.prototype.remove = function (a) {
      if (t(d)) return g.info("CookieManager is not loaded "), !1;
      if (!m(a)) throw Error("url should be a string");
      d.removeObject(a);
      return !0;
    };
    b.prototype.removeAll = function (b) {
      d = null;
      a.settings.deleteSettingsContainer(h.domain.COOKIES, b);
      return !0;
    };
    return (b = new b());
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.oxygen = (function (a, c) {
    var b = { oclContainer: null },
      d = a.utils.isNil,
      e = a.utils.isntNil,
      h = a.utils.isString,
      t = a.utils.isFunction,
      p = a.utils.isArray,
      u = a.utils,
      g = c.authSCD,
      m = c.proto.com.symantec.oxygen.rest.accounts.messages,
      k = c.proto.com.symantec.oxygen.datastore.v2.messages,
      f = c.sso,
      r = m.EncryptionKey,
      w = m.ExtendedSessionAccess,
      q = k.NodeList,
      v = k.DatastoreRangeQuery,
      n = c.constants,
      x = a.constants.httpStatusCodes,
      C = a.utils.isSuccessCode,
      z = c.utils,
      A = a.logger,
      D = c.cookieManager,
      y = c.telemetryWrapper;
    b.setContainer = function (a) {
      if (d(a)) throw Error("container cannot be null");
      b.oclContainer = a;
    };
    b.getUserID = function (a, b) {
      if (!1 === t(a)) throw Error("Callback cannot be nil/undefined and must be of type function");
      var d = c.session,
        f = g.O2_URL + "/users/key";
      this.oxygenConnection(f, n.requestType.GET_METHOD, b, function (b, c) {
        if (C(b)) {
          var e = c.target.response,
            g = null;
          try {
            (g = r.decode(e)), d.setUserID(g.getEntityId().toNumber()), d.setClientKey(g.getClientKey());
          } catch (E) {
            A.error(E);
            setTimeout(function () {
              a(null, E.message);
            }, 1);
            return;
          }
          setTimeout(function () {
            a(b, null);
          }, 1);
        } else
          setTimeout(function () {
            y.sendOxygenErrorCodeWithFullUrl(b, f + "-" + n.requestType.GET_METHOD);
            a(b, c.target.response);
          }, 1);
      });
    };
    b.putNodes = function (a, c, f, v) {
      if (d(a)) throw Error("EntityID cannot be null");
      if (d(c)) throw Error("Node list cannot be null");
      if (!1 === c instanceof q) throw Error("nodeList is not an instance of NodeList class");
      if (0 === c.getNodes().length) throw Error("Cannot upload empty node list without any nodes");
      if (!1 === t(f)) throw Error("Callback cannot be null or is not a function");
      var x = null;
      x = d(v) ? {} : v;
      v = b.oclContainer.getObject(n.oxygen.ETAG);
      e(v) && (x[n.header.IF_MATCH] = v);
      b.oxygenConnection(
        g.DS_URL + "/" + a,
        n.requestType.PUT_METHOD,
        null,
        function (a, b) {
          var c = b.target.response,
            d = null,
            v = null,
            x;
          for (x in n.header)
            if (n.header.hasOwnProperty(x)) {
              var h = n.header[x],
                l = b.target.getResponseHeader(h);
              e(l) && ((v = v || {}), (v[h] = l));
            }
          if (!1 === C(a))
            setTimeout(function () {
              y.sendOxygenErrorCodeWithFullUrl(a, g.DS_URL + "-" + n.requestType.PUT_METHOD);
              f(a, null, c, v);
            }, 1);
          else {
            try {
              d = q.decode(c);
            } catch (F) {
              A.error(F);
              setTimeout(function () {
                f(null, null, F, v);
              }, 1);
              return;
            }
            setTimeout(function () {
              f(a, d, null, v);
            }, 1);
          }
        },
        c,
        x
      );
    };
    b.getDatastorePaths = function (a, c, f, h, l, r, w) {
      if (!p(a) || 0 === a.length) throw Error("Datastore paths cannot be nil or empty");
      if (d(c)) throw Error("EntityID cannot be nil");
      if (!t(f) || 4 < f.length || 3 > f.length)
        throw Error(
          "outCallback cannot be nil/undefined and has to be of type function or the argument list of the callback does not match Datastore callback"
        );
      d(h) && (h = !0);
      d(w) && (w = !1);
      d(l) && (l = {});
      var m = b.oclContainer.getObject(n.oxygen.ETAG),
        k = null;
      w || d(m) || ((k = new v()), k.setFromRevision(m), !1 !== p(r) && k.setToRevision(r));
      e(k) && ((r = z.createStringBufferFromUint8Buffer(k.toArrayBuffer())), (r = forge.util.encode64(r)), (l[n.header.RANGE] = r));
      c = g.DS_URL + "/" + c;
      for (var u in a) c = c + a[u] + ",";
      c = c.substring(0, c.length - 1);
      b.oxygenConnection(
        c + "?include_sub_nodes=" + h,
        n.requestType.GET_METHOD,
        null,
        function (a, b) {
          b = b.target;
          var c = b.response,
            d = null,
            v = null;
          b = b.getResponseHeader(n.header.CHALLENGES);
          e(b) && ((v = {}), (v[n.header.CHALLENGES] = b));
          if (C(a)) {
            try {
              d = q.decode(c);
            } catch (B) {
              A.error(B);
              setTimeout(function () {
                f(a, d, v, B);
              }, 1);
              return;
            }
            setTimeout(function () {
              f(a, d, v, null);
            }, 1);
          } else if (a === x.UNAUTHORIZED) {
            try {
              d = q.decode(c);
            } catch (B) {
              A.error(B);
              setTimeout(function () {
                f(a, d, v, B);
              }, 1);
              return;
            }
            setTimeout(function () {
              y.sendOxygenErrorCodeWithFullUrl(a, g.DS_URL + "-" + n.requestType.GET_METHOD);
              f(a, d, v, c);
            }, 1);
          } else
            setTimeout(function () {
              y.sendOxygenErrorCodeWithFullUrl(a, g.DS_URL + "-" + n.requestType.GET_METHOD);
              f(a, d, l, c);
            }, 1);
        },
        null,
        l
      );
    };
    b.addACLs = function (a) {
      if (d(a)) throw Error("Callback function cannot be null");
      var f = new w();
      f.setTtlDataStoreRead(g.DEFAULT_ACL_TTL);
      f.setTtlDataStoreWrite(g.DEFAULT_ACL_TTL);
      var e = g.O2_URL + "/users/" + c.session.getUserID() + "/session/access";
      b.oxygenConnection(e, n.requestType.POST_METHOD, null, a, f);
    };
    b.handleSchemaError = function (a) {
      try {
        var b = z.parseSchemaError(a),
          c;
        for (c in b) {
          var d = b[c],
            f = d.getPath(),
            e = d.getReason();
          y.sendOxygenDataStoreSchemaError(e, f);
        }
      } catch (G) {
        A.error(G);
      }
    };
    b.oxygenConnection = function (q, v, l, r, w, m) {
      var k = c.session;
      if (!1 === h(q)) throw Error("API URL cannot be nil/undefined and has to be of type string");
      if (!1 === h(v)) throw Error("method cannot be nil/undefined and has to be of type string");
      if (!1 === t(r)) throw Error("outCallback cannot be nil/undefined and has to be of type function");
      d(l) && (l = k.getAccessToken());
      var z = a.utils.baseURL(q),
        p = D.get(z);
      if (d(p) && d(l))
        f.getTokensFromRefreshToken(function (a, c) {
          C(a)
            ? setTimeout(function () {
                b.oxygenConnection(q, v, c, r, w, m);
              }, 1)
            : setTimeout(function () {
                r(a, c);
              }, 1);
        });
      else {
        k = new XMLHttpRequest();
        k.open(v, q, !0);
        k.timeout = n.DEFAULT_XHR_TIMEOUT;
        k.addEventListener("load", function (c) {
          if (a.utils.baseURL(g.DS_URL) === z) {
            var d = c.target.getResponseHeader(n.header.ETAG);
            e(d) && b.oclContainer.setObject(n.oxygen.ETAG, d);
            c.target.status === x.INVALID_SCHEMA &&
              ((d = c.target.getResponseHeader(n.header.SCHEMA_ERROR)), e(d) && b.handleSchemaError(d));
          }
          d = c.target.getResponseHeader(n.header.SYMC_COOKIE);
          e(d) && !1 === D.add(z, d) && A.debug("Failed to add cookie " + n.header.SYMC_COOKIE + " for " + z);
          r(c.target.status, c);
        });
        k.addEventListener("error", function (a) {
          r(a.target.status, a);
        });
        k.addEventListener("timeout", function (a) {
          r(a.target.status, a);
        });
        if (e(m)) for (var y in m) k.setRequestHeader(y, m[y]);
        e(p) ? k.setRequestHeader(n.header.SYMC_COOKIE, p) : k.setRequestHeader(n.header.SYMC_AUTH, "Bearer " + l);
        k.setRequestHeader(n.header.ORIGIN_HEADER, g.getMachineGUID());
        k.setRequestHeader(n.header.SYMC_MACHINE_ID, g.getMachineGUID());
        k.setRequestHeader(n.header.ACCEPT, n.contentType.PROTOBUF);
        k.setRequestHeader(n.header.CONTENT_TYPE, n.contentType.PROTOBUF);
        k.setRequestHeader(n.header.USER_AGENT, g.USER_AGENT);
        k.setRequestHeader(n.header.TENANT_ID, g.TENANT_ID);
        l = "bfw-o2-" + u.createNewGuid().toLowerCase().replace(/-/g, "");
        k.setRequestHeader(n.header.REQUEST_ID, l);
        console.log(l);
        k.responseType = n.responseType.ARRAY_BUFFER;
        l = null;
        e(w) && (l = w.toArrayBuffer());
        k.send(l);
      }
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.session = (function (a, c) {
    var b = {
        llt: null,
        naGUID: null,
        userID: null,
        email: null,
        firstName: null,
        lastName: null,
        clientKey: null,
        password: null,
        sessionContainer: null,
        partnerInfo: null
      },
      d = a.utils,
      e = d.isNil,
      h = d.isntNil,
      t = d.isFunction,
      p = d.isArray,
      u = a.utils.isSuccessCode,
      g = c.constants,
      m = c.sso,
      k = c.oxygen,
      f = a.logger,
      r = c.telemetryWrapper,
      w = a.secureSettings;
    b.setContainer = function (a) {
      if (e(a)) throw Error("container cannot be null");
      b.sessionContainer = a;
      a = b.sessionContainer.getObject(g.session.LLT);
      var c = b.sessionContainer.getObject(g.session.NA_GUID),
        d = b.sessionContainer.getObject(g.session.EMAIL),
        f = b.sessionContainer.getObject(g.session.USER_ID),
        q = b.sessionContainer.getObject(g.session.ACCESS_TOKEN),
        h = b.sessionContainer.getObject(g.session.ID_TOKEN),
        r = b.sessionContainer.getObject(g.session.PARTNER_INFO);
      b.setLLT(a, !1);
      b.setNAGUID(c, !1);
      b.setUserID(f, !1);
      b.setEmail(d, !1);
      b.setAccessToken(q, !1);
      b.setIDToken(h, !1);
      b.setPartnerInfo(r, !1);
    };
    b.initialize = function (a, b, c, d) {
      if (e(a)) throw Error("Scopes cannot be null");
      if (e(b)) throw Error("Return URL cannot be null");
      if (e(c)) throw Error("Client ID cannot be null");
      this.scopes = a;
      this.returnURL = b;
      this.clientID = c;
      this.clientSecret = d;
    };
    b.getScopes = function () {
      if (e(this.scopes)) throw Error("Scopes cannot be null. OCL has not be initialized");
      return this.scopes;
    };
    b.getReturnURL = function () {
      if (e(this.returnURL)) throw Error("Return URL cannot be null. OCL has not been initialized.");
      return this.returnURL;
    };
    b.getClientID = function () {
      if (e(this.clientID)) throw Error("Client ID cannot be null. OCL has not been initialized");
      return this.clientID;
    };
    b.getClientSecret = function () {
      return this.clientSecret;
    };
    b.isLoggedIn = function (a) {
      if (!1 === t(a)) throw Error("Callback cannot be null or is not a function");
      if (e(b.sessionContainer))
        setTimeout(function () {
          a(!1, Error("sessionContainer is not loaded"));
        }, 1);
      else {
        var c = b.sessionContainer.getObject(g.session.LLT);
        e(c)
          ? setTimeout(function () {
              a(!1, Error("LLT unavailable"));
            }, 1)
          : setTimeout(function () {
              a(!0, null);
            }, 1);
      }
    };
    b.login = function (a, c) {
      if (!p(a)) throw Error("URL parameters cannot be null or is not an Array");
      if (!t(c)) throw Error("Callback cannot be null or is not a function");
      m.parseAuthCodeAndGetTokens(a, function (a, d) {
        !1 === u(a)
          ? (b.logout(),
            setTimeout(function () {
              r.sendSessionLoginErrorCode(a);
              c(!1, d);
            }, 1))
          : k.getUserID(function (a, d) {
              !1 === u(a)
                ? (b.logout(),
                  setTimeout(function () {
                    c(!1, d);
                  }, 1))
                : setTimeout(function () {
                    c(!0, null);
                  }, 1);
            }, d);
      });
    };
    b.logout = function (a) {
      this.password = this.email = this.naGUID = this.llt = this.clientKey = this.userID = this.lastName = this.firstName = null;
      w.resetSecureSettingsCollection(g.OCL_CONTAINER, function (b, c) {
        b || f.error("OCL resetSecureSettingsCollection returned failure");
        m.logout(function (b) {
          b ? a(!0, null) : (a(!1, Error("SSO returned failure")), f.error("SSO logout returned failure"));
          r.sendSessionLogoutCode(!0 === b ? 1 : 0);
        });
      });
    };
    b.setPassword = function (a) {
      this.password = a;
    };
    b.getPassword = function () {
      return this.password;
    };
    b.getFirstName = function () {
      return this.firstName;
    };
    b.setFirstName = function (a, c, d) {
      this.firstName = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.FIRST_NAME, a, d);
    };
    b.getLastName = function () {
      return this.lastName;
    };
    b.setLastName = function (a, c, d) {
      this.lastName = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.LAST_NAME, a, d);
    };
    b.getEmail = function () {
      return this.email;
    };
    b.setEmail = function (a, c, d) {
      this.email = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.EMAIL, a, d);
    };
    b.setAccessToken = function (a, c, d) {
      this.accessToken = a;
      e(c) && (c = !0);
      c &&
        ((c = new Date().getTime() + g.session.DEFAULT_ACCESS_TOKEN_TTL),
        b.openSettingsAndSetObject(g.session.ACCESS_TOKEN, a, d),
        b.openSettingsAndSetObject(g.session.ACCESS_TOKEN_TTL, c, d));
    };
    b.getAccessToken = function () {
      if (e(this.accessToken)) return null;
      var a = b.sessionContainer.getObject(g.session.ACCESS_TOKEN_TTL),
        c = new Date().getTime();
      return 0 >= a - c
        ? ((this.accessToken = null),
          b.sessionContainer.removeObject(g.session.ACCESS_TOKEN_TTL),
          b.sessionContainer.removeObject(g.session.ACCESS_TOKEN),
          null)
        : this.accessToken;
    };
    b.setIDToken = function (a, c, d) {
      this._idToken = a;
      e(c) && (c = !0);
      c &&
        ((c = new Date().getTime() + g.session.DEFAULT_ID_TOKEN_TTL),
        b.openSettingsAndSetObject(g.session.ID_TOKEN, a, d),
        b.openSettingsAndSetObject(g.session.ID_TOKEN_TTL, c, d));
    };
    b.getIDToken = function () {
      if (e(this._idToken)) return null;
      var a = b.sessionContainer.getObject(g.session.ID_TOKEN_TTL),
        c = new Date().getTime();
      return 0 >= a - c
        ? ((this._idToken = null),
          b.sessionContainer.removeObject(g.session.ID_TOKEN_TTL),
          b.sessionContainer.removeObject(g.session.ID_TOKEN),
          null)
        : this._idToken;
    };
    b.getRefreshedIDToken = function () {
      var a = this;
      return new Promise(function (b) {
        var c = a.getIDToken();
        if (h(c)) return b(c);
        m.getTokensFromRefreshToken(function (d) {
          c = 200 === d ? a.getIDToken() : null;
          return b(c);
        });
      });
    };
    b.getLLT = function () {
      return this.llt;
    };
    b.setLLT = function (a, c, d) {
      this.llt = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.LLT, a, d);
    };
    b.getNAGUID = function () {
      return this.naGUID;
    };
    b.setNAGUID = function (a, c, d) {
      this.naGUID = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.NA_GUID, a, d);
    };
    b.getUserID = function () {
      return this.userID;
    };
    b.setUserID = function (a, c, d) {
      this.userID = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.USER_ID, a, d);
    };
    b.setClientKey = function (a) {
      this.clientKey = a;
    };
    b.getClientKey = function () {
      return this.clientKey;
    };
    b.getPartnerInfo = function () {
      return this.partnerInfo;
    };
    b.setPartnerInfo = function (a, c, d) {
      this.partnerInfo = a;
      e(c) && (c = !0);
      c && b.openSettingsAndSetObject(g.session.PARTNER_INFO, a, d);
    };
    b.openSettingsAndSetObject = function (a, c, d) {
      if (e(b.sessionContainer))
        !1 !== t(d) &&
          setTimeout(function () {
            d(!1, Error("sessionContainer is not loaded"));
          }, 1);
      else
        try {
          b.sessionContainer.setObject(a, c, d);
        } catch (x) {
          !1 !== t(d) && d(!1, x);
        }
    };
    b.serialize = function () {
      return {
        llt: this.llt,
        naGUID: this.naGUID,
        userID: this.userID,
        email: this.email,
        accessToken: this.accessToken,
        idToken: this._idToken
      };
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.spocRequest = (function (a, c) {
    var b = {},
      d = c.constants,
      e = a.utils.isNil,
      h = a.utils.isntNil,
      t = a.logger,
      p = a.utils.isString,
      u = a.utils.isSuccessCode,
      g = c.authSCD,
      m = c.proto.spoc.SpocRegistrationArray,
      k = c.utils,
      f = c.telemetryWrapper,
      r = a.constants.httpStatusCodes,
      w = function (a, b) {
        if (e(a)) throw Error("Domain cannot be null");
        if (e(b)) throw Error("Status code cannot be null");
        this.domain = a;
        this.code = b;
      };
    w.prototype.getDomain = function () {
      return this.domain;
    };
    w.prototype.getCode = function () {
      return this.code;
    };
    var q = function (a, b, c, d, f, g) {
      if (e(a)) throw Error("Status cannot be null");
      if (!1 === p(b)) throw Error("EntityID cannot be null");
      if (e(c)) throw Error("Channel cannot be null");
      if (e(d)) throw Error("Revision cannot be null");
      this.status = a;
      this.entityID = b;
      this.channel = c;
      this.revisionNumber = d;
      this.payload = f;
      e(g) && (g = null);
      this.appID = g;
    };
    q.prototype.getEntity = function () {
      return this.entityID;
    };
    q.prototype.getApplicationID = function () {
      return this.appID;
    };
    q.prototype.getRevision = function () {
      return this.revisionNumber;
    };
    q.prototype.getChannel = function () {
      return this.channel;
    };
    q.prototype.getPayload = function () {
      return this.payload;
    };
    q.prototype.getStatus = function () {
      return this.status;
    };
    q.prototype.toString = function () {
      var a = {};
      a.status = this.getStatus();
      a.entityID = this.getEntity();
      a.channel = this.getChannel();
      a.revision = this.getRevision();
      var b = null,
        c = this.getPayload();
      if (h(c)) {
        b = k.createStringBufferFromUint8Buffer(c);
        if (e(b)) throw Error("Could not convert BumpInfo to string");
        b = forge.util.encode64(b);
      }
      a.payLoad = b;
      a.appID = this.getApplicationID();
      return JSON.stringify(a);
    };
    b.BumpInfo = q;
    b.Status = w;
    b.registrationCallbacks = {};
    b.xhr = null;
    b.startDate = null;
    b.coalescingTimer = null;
    b.spocRegistrationMap = {};
    b.retryCount = g.SPOC_RETRY_COUNT;
    b.currentTimeout = 1;
    b.performCallback = function (a, b) {
      var c = this.registrationCallbacks[a],
        d = c.callbackObj,
        f = c.callback;
      delete this.registrationCallbacks[a];
      delete this.spocRegistrationMap[a];
      setTimeout(function () {
        e(d) ? f(b) : f.apply(d, [b]);
      }, 1);
    };
    var v = function (a, b) {
      return a + ":" + b;
    };
    b.stopSPOCConnection = function (a) {
      if (h(a)) {
        var c = a.getEntity();
        var f = a.getChannel();
        var e = c + ":" + f;
        delete b.registrationCallbacks[e];
        delete b.spocRegistrationMap[e];
        b.startSPOCConnection();
      } else
        for (e in (h(b.xhr) && b.xhr.abort(), this.spocRegistrationMap)) {
          a = this.spocRegistrationMap[e];
          c = a.getEntity();
          f = a.getChannel();
          var g = a.getRevision();
          a = a.getApplicationID();
          var r = new w(d.spoc.INTERNAL_DOMAIN, d.spoc.internalErrors.STOPPED);
          c = new q(r, c, f, g, null, a);
          b.performCallback(e, c);
        }
    };
    b.startSPOCConnection = function (a, c, d) {
      this.retryCount = g.SPOC_RETRY_COUNT;
      this.retryTimeout = 1;
      h(this.coalescingTimer) && clearTimeout(this.coalescingTimer);
      if (h(a) && h(c)) {
        var f = v(a.getEntity(), a.getChannel());
        this.registrationCallbacks[f] = { callback: c, callbackObj: d };
        this.spocRegistrationMap[f] = a;
      }
      this.coalescingTimer = setTimeout(function () {
        h(b.xhr) && b.xhr.abort();
        0 === n().length ? t.log("No registrations available. Spoc Connection will not be created.") : b.performRetry(n());
      }, 5e3);
    };
    var n = function () {
      var a = [],
        c;
      for (c in b.spocRegistrationMap) a.push(b.spocRegistrationMap[c]);
      return a;
    };
    b.notifyClientsOnError = function (a) {
      switch (a) {
        case r.BAD_REQUEST:
        case r.ENTITY_TOO_LARGE:
        case r.RATE_LIMITING:
          a = new w(d.spoc.INTERNAL_DOMAIN, d.spoc.internalErrors.UNRECOVERABLE);
          break;
        default:
          a = new w(d.spoc.INTERNAL_DOMAIN, d.spoc.internalErrors.UNKNOWN);
      }
      for (var c in this.spocRegistrationMap) {
        var f = this.spocRegistrationMap[c],
          e = f.getEntity(),
          g = f.getChannel(),
          h = f.getRevision();
        f = f.getApplicationID();
        e = new q(a, e, g, h, null, f);
        b.performCallback(c, e);
      }
    };
    b.notifyClientsOnSuccess = function (a) {
      a = a.getRegistration();
      for (var c = 0; c < a.length; c++) {
        var f = a[c],
          e = f.getEntity(),
          g = f.getChannel(),
          h = f.getRevision(),
          r = f.getApplicationID(),
          k = e + ":" + g,
          n = new w(d.spoc.INTERNAL_DOMAIN, d.spoc.internalErrors.SUCCESS);
        f = new q(n, e, g, h, f.getPayload(), r);
        b.performCallback(k, f);
      }
      b.startSPOCConnection();
    };
    b.performRetry = function (a, c) {
      0 === this.retryCount
        ? b.notifyClientsOnError(r.RATE_LIMITING)
        : ((this.retryTimeout = b.nextRetryTimeout(this.retryTimeout)),
          this.retryCount--,
          setTimeout(function () {
            b.connection(a, c);
          }, 1e3 * this.retryTimeout));
    };
    b.nextRetryTimeout = function (a) {
      var b = g.SPOC_RETRY_COUNT - this.retryCount;
      return 0 === b ? a : a + b * g.RETRY_TIMEOUT + Math.floor(60 * Math.random() + 1);
    };
    b.connection = function (a, c) {
      if (e(a) || 0 === a.length) throw Error("Registration array cannot be null or empty");
      e(c) && (c = g.SPOC_DEFAULT_TIMEOUT);
      var h = new m();
      h.setRegistration(a);
      var k = new XMLHttpRequest();
      k.open(d.requestType.POST_METHOD, g.SPOC_URL + "/register?t=" + c, !0);
      k.timeout = 1e3 * c;
      k.responseType = d.responseType.ARRAY_BUFFER;
      k.setRequestHeader(d.header.SYMC_EXPECT, d.header.NOT_MODIFIED);
      k.setRequestHeader(d.header.CONTENT_TYPE, d.contentType.PROTOBUF);
      k.setRequestHeader(d.header.USER_AGENT, g.SPOC_USER_AGENT);
      k.addEventListener("load", function (e) {
        var h = e.target;
        e = h.status;
        var k = h.statusText;
        h = h.response;
        e === r.NOT_MODIFIED
          ? b.startSPOCConnection()
          : u(e)
          ? ((e = m.decode(h)), b.notifyClientsOnSuccess(e))
          : e === r.RATE_LIMITING
          ? b.performRetry(a, c)
          : (f.sendSpocErrorCodeWithFullUrl(e + "-" + k, g.SPOC_URL + "-" + d.requestType.POST_METHOD), b.notifyClientsOnError(e));
      });
      k.addEventListener("timeout", function (a) {
        b.startSPOCConnection();
      });
      k.addEventListener("error", function (a) {
        b.notifyClientsOnError(a.target.status);
      });
      this.xhr = k;
      h = h.toArrayBuffer();
      this.xhr.send(h);
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.SpocRegistration = (function (a, c) {
    var b = c.constants,
      d = a.utils.isNil,
      e = a.utils.isFunction,
      h = a.logger,
      t = a.utils.isString,
      p = c.authSCD,
      u = c.spocRequest,
      g = c.proto.spoc.SpocRegistration,
      m = c.proto.com.symantec.oxygen.datastore.v2.messages.DataStoreSpocPayloadV2,
      k = function (b, c, g, h, k) {
        if (!t(b)) throw Error("Entity ID must be a string");
        if (d(c)) throw Error("Channel cannot be Nil");
        if (!e(g)) throw Error("The callback must be of type function");
        if (d(h)) throw Error("Revision Number cannot be Nil");
        if (d(k)) k = null;
        else if (!t(k)) throw Error("The application ID must be a string");
        this.entityID = b;
        this.channel = c;
        this.callback = g;
        this.revisionNumber = h;
        this.appID = k;
        this.guid = a.utils.createNewGuid();
      };
    k.prototype.getIdentity = function () {
      return this.guid;
    };
    k.prototype.getEntityID = function () {
      return this.entityID;
    };
    k.prototype.getChannel = function () {
      return this.channel;
    };
    k.prototype.getRevision = function () {
      return this.revisionNumber;
    };
    k.prototype.getAppID = function () {
      return this.appID;
    };
    k.prototype.handlePayloadForChannelTwo = function (a) {
      if (d(a) || 0 === a.byteLength) return { sameMachine: !1 };
      var b = p.getMachineGUID(),
        c = null;
      try {
        var f = m.decode(a);
        if (f.getOrigin() === b) return { sameMachine: !0 };
        c = f.getToRevision();
      } catch (v) {
        h.error(v);
      }
      return { sameMachine: !1, toRevisions: c };
    };
    k.prototype.internalCallback = function (a) {
      var d = a.getStatus();
      this.revisionNumber = a.getRevision();
      var f = !1;
      if (d.getDomain() === b.spoc.INTERNAL_DOMAIN)
        switch (d.getCode()) {
          case b.spoc.internalErrors.STOPPED:
            f = this.callback(a);
            break;
          case b.spoc.internalErrors.UNRECOVERABLE:
            this.callback(a);
            break;
          case b.spoc.internalErrors.SUCCESS:
            d = null;
            if (
              this.channel === c.proto.spoc.SPOCChannel.SC_DATASTORE_UPDATE &&
              ((f = this.handlePayloadForChannelTwo(a.getPayload())), (d = f.toRevisions), f.sameMachine)
            ) {
              f = !0;
              break;
            }
            f = this.callback(a, d);
            break;
          default:
            f = this.callback(a);
        }
      f && this.addRegistration();
    };
    k.prototype.addRegistration = function () {
      var a = new g();
      a.setEntity(this.entityID);
      a.setChannel(this.channel);
      a.setRevision(this.revisionNumber);
      a.setApplicationID(this.appID);
      u.startSPOCConnection(a, this.internalCallback, this);
      this.spocReg = a;
    };
    k.prototype.removeRegistration = function () {
      if (d(this.spocReg)) throw Error("Unexpected: the spoc registration is invalid");
      u.stopSPOCConnection(this.spocReg);
      this.spocReg = null;
    };
    return k;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.spocManager = (function (a, c) {
    var b = {},
      d = c.constants,
      e = a.utils.isNil,
      h = a.logger,
      t = a.utils.isString,
      p = a.utils.isFunction,
      u = c.proto.spoc.SpocPollArray,
      g = c.proto.spoc.SpocPoll,
      m = c.authSCD,
      k = a.utils.isSuccessCode;
    b.connections = {};
    b.makeSpocRequest = function (a, d, g, h, k) {
      a = new c.SpocRegistration(a, d, g, h, k);
      a.addRegistration();
      d = a.getIdentity();
      if (e(d)) throw Error("Unable to return the identity for SpocRegistration");
      b.connections[d] = a;
      return d;
    };
    b.cancelSPOCRequest = function (a) {
      if (e(a)) return h.error("identity cannot be null"), !1;
      if (!b.connections.hasOwnProperty(a)) return h.warn("identity not found in SpocManager"), !1;
      b.connections[a].removeRegistration();
      delete b.connections[a];
      return !0;
    };
    b.cancelSPOCRequests = function () {
      c.spocRequest.stopSPOCConnection();
      b.connections = {};
    };
    b.getConnections = function () {
      return b.connections;
    };
    b.poll = function (a, b, c) {
      if (!t(a)) throw Error("entityID must be a string");
      if (e(b)) throw Error("channel cannot be Nil");
      if (!p(c)) throw Error("callback must be a function");
      var f = new g();
      f.setEntity(a);
      f.setChannel(b);
      a = [];
      a.push(f);
      f = new u();
      f.setPoll(a);
      a = new XMLHttpRequest();
      a.open(d.requestType.POST_METHOD, m.SPOC_URL + "/poll", !0);
      a.responseType = d.responseType.ARRAY_BUFFER;
      a.setRequestHeader(d.header.CONTENT_TYPE, d.contentType.PROTOBUF);
      a.setRequestHeader(d.header.USER_AGENT, m.SPOC_USER_AGENT);
      a.setRequestHeader(d.header.TENANT_ID, m.TENANT_ID);
      a.addEventListener("load", function (a) {
        var b = a.target;
        a = b.status;
        b = b.response;
        k(a)
          ? e(b)
            ? c(1, Error("SPOC Poll response is Nil"))
            : ((a = u.decode(b)),
              e(a)
                ? c(1, Error("SPOC Poll response decode failed"))
                : ((a = a.getPoll()),
                  0 === a.length ? c(1, Error("SPOC Poll retured empty revision")) : ((a = a[0].getRevision()), c(a, null))))
          : c(1, Error("SPOC Poll failed, status: " + a));
      });
      a.addEventListener("error", function (a) {
        c(1, Error("SPOC Poll failed"));
      });
      this.xhr = a;
      f = f.toArrayBuffer();
      this.xhr.send(f);
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  var a = c.SymBfw,
    e = a.extensionAdapter,
    b = a.logger;
  a = a.utils;
  var d = a.isString,
    l = a.isSuccessCode,
    h = a.urlWithoutQueryParameters,
    t = a.isFunction;
  a = c.SymO2;
  var p = a.constants,
    u = a.oxygen,
    g = a.session,
    m = a.sso,
    k = a.telemetryWrapper;
  a = function () {
    this._ssoSetUrl = null;
    this._handleSSOSetupPage = this._handleSSOSetupPage.bind(this);
  };
  a.prototype._handleSSOSetupPageLoadedBeforeEventRegistration = function () {
    var a = this;
    e.getAllTabs(function (b) {
      b = void 0 === b ? [] : b;
      if (b.length) {
        var c = e.getExtensionURL(p.SSO_SETUP_URL);
        b = b.filter(function (a) {
          return a.url.startsWith(c);
        });
        b.length && ((b = b[0]), a._handleSSOSetupPage({ tabId: b.id, url: b.url }));
      }
    });
  };
  a.prototype.init = function () {
    var a = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
      if (SymBfw.globals.BROWSER === SymBfw.constants.BROWSER_TYPE.EDGE || SymBfw.globals.BROWSER === SymBfw.constants.BROWSER_TYPE.FIREFOX)
        return b.return();
      a._ssoSetUrl = e.getExtensionURL(p.SSO_SETUP_URL);
      a._handleSSOSetupPageLoadedBeforeEventRegistration();
      e.addOnBeforeRequestEventListener(a._handleSSOSetupPage, [a._ssoSetUrl + "?*"], ["blocking"]);
      b.jumpToEnd();
    });
  };
  a.prototype._canIgnoreSSOSetup = function (a) {
    if (!1 === t(a)) throw Error("Callback cannot be null or is not a function");
    e.getAllTabs(function (b) {
      b = void 0 === b ? [] : b;
      if (b.length) {
        var c = e.getExtensionURL(p.SEAMLESS_ONBOARD_URL);
        b.some(function (a) {
          return a.url.startsWith(c);
        })
          ? a(!0)
          : a(!1);
      } else a(!1);
    });
  };
  a.prototype._handleSSOSetupPage = function (a) {
    this._canIgnoreSSOSetup(function (c) {
      k.sendExtensionURLLaunched(h(a.url), c ? 0 : 1);
      c
        ? (e.closeTabAndEnsureBrowserIsAlive(a.tabId), b.debug("Ignoring the SSOSetup with ST because Seamless onboard page is active"))
        : g.isLoggedIn(function (c, f) {
            if (c)
              e.closeTabAndEnsureBrowserIsAlive(a.tabId),
                k.sendNASignedInAlready(),
                b.debug("NA already signed-in when the ST is received");
            else if (((c = new URI(a.url).query(!0)[p.session.ST]), d(c))) {
              var h = function (a, c) {
                l(a)
                  ? (k.sendNASignedFromST(a), b.debug("NA signed-in using ST"))
                  : (g.logout(function () {}), k.sendNASIgnInFailureFromST(a));
              };
              e.closeTabAndEnsureBrowserIsAlive(a.tabId);
              m.getTokensFromST(c, function (a, c) {
                l(a)
                  ? (k.sendOIDCCallSuccess(a), b.debug("Retrieved OIDC using ST"), u.getUserID(h, c))
                  : (g.logout(function () {}), k.sendOIDCCallFailure(a));
              });
            } else b.error("ST token should be string");
          });
    });
  };
  c.SymO2.ssoSetup = new a();
})(window);
(function (c) {
  c.SymO2.init = (function (a, c) {
    var b = {},
      d = c.constants,
      e = a.utils.isNil,
      h = a.utils.isntNil,
      t = a.settings,
      p = a.cookies,
      u = a.secureSettings,
      g = a.extensionAdapter,
      m = a.logger,
      k = c.ssoSetup;
    b._getEncryptionKey = function () {
      var b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress)
          return (
            (b = p.get(d.OCL_ENCRYPTION_KEY)),
            e(b)
              ? f.yield(
                  new Promise(function (a) {
                    u.deleteSecureSettingsContainer(d.OCL_CONTAINER, function (b) {
                      a(b);
                    });
                  }),
                  3
                )
              : f.jumpTo(2)
          );
        2 != f.nextAddress &&
          ((c = f.yieldResult),
          m.info("Deleted " + d.OCL_CONTAINER + " as cookies deleted. deletion status: " + c),
          (b = a.utils.createNewGuid()),
          p.set(d.OCL_ENCRYPTION_KEY, b, !0));
        return f.return(b);
      });
    };
    b._setContainer = function (a) {
      c.oxygen.setContainer(a);
      c.session.setContainer(a);
    };
    b.loadOCLContainer = function () {
      if (h(b.oclPromise)) return b.oclPromise;
      b.oclPromise = new Promise(function (c, h) {
        var f;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
          if (1 == k.nextAddress) return k.yield(b._getEncryptionKey(), 2);
          f = k.yieldResult;
          u.loadSecureSettingsContainer(d.OCL_CONTAINER, f, function (f, k, m) {
            if (!1 === f || e(k)) return h("Unable to load OCL container:" + m);
            var l = function () {
                b._setContainer(k);
                u.deleteSecureSettingsContainer(d.OCL_CONTAINER_OLD);
                c("OCL container loaded successfully");
              },
              n = g.getExtensionId();
            k.copySecureSettings(d.OCL_CONTAINER_OLD, n, function (b) {
              if (b || a.globals.BROWSER !== a.constants.BROWSER_TYPE.EDGE_CHROMIUM) l();
              else {
                b = {
                  lcccdlklhahfmobgpnilndimkankpnkg: "EdgeExtension_SymantecCorporation5478111E43ACF_v68kp9n051hdp",
                  bdaafgjhhjkdplpffldcncdignokfkbo: "EdgeExtension_SymantecCorporationNortonSafeWeb_v68kp9n051hdp"
                }[n];
                if (e(b)) return l();
                k.copySecureSettings(d.OCL_CONTAINER_OLD, b, function (a) {
                  l();
                });
              }
            });
          });
          k.jumpToEnd();
        });
      });
      return b.oclPromise;
    };
    b.setMachineGUID = function () {
      if (h(b.globalPromise)) return b.globalPromise;
      b.globalPromise = new Promise(function (b, g) {
        t.loadSettingsContainer(d.GLOBAL_CONTAINER, !0, function (f, h, k) {
          if (!1 === f) g("Unable to load GLOBAL container:" + k);
          else {
            var m = h.getObject(d.MACHINE_GUID);
            e(m)
              ? ((m = a.utils.createNewGuid()),
                h.setObject(d.MACHINE_GUID, m, function (a, d) {
                  a ? (c.authSCD.setMachineGUID(m), b("GLOBAL container loaded successfully")) : g("Could not set machineGUID : " + d);
                }))
              : (c.authSCD.setMachineGUID(m), b("GLOBAL container loaded successfully"));
          }
        });
      });
      return b.globalPromise;
    };
    b.ready = function () {
      if (h(b.readyPromise)) return b.readyPromise;
      b.readyPromise = new Promise(function (a, c) {
        Promise.all([b.loadOCLContainer(), b.setMachineGUID(), k.init()]).then(
          function (b) {
            a(b);
          },
          function (a) {
            c(a);
          }
        );
      });
      return b.readyPromise;
    };
    return b;
  })(c.SymBfw, c.SymO2);
})(window);
(function (c) {
  c.SymO2.naLoginManager = (function (a, c) {
    var b = a.extensionAdapter,
      d = a.utils.isNil,
      e = a.utils.isntNil,
      h = a.utils,
      t = a.utils.isFunction,
      p = c.session,
      u = null,
      g = {
        loginToNA: function () {
          g._launchSSO();
        },
        _launchSSO: function () {
          var a = c.sso.getOpenIDConnectLoginURL("142b5c23-5ba5-4cc9-baef-3cc1c45c595b");
          g._focusExistingLoginTab(a, function (c) {
            c ||
              b.createTab(a, function (a) {
                b.addOnBeforeRequestEventListener(g._onAuthReturnUrl, [p.getReturnURL() + "?*"], ["blocking"]);
              });
          });
        },
        _focusExistingLoginTab: function (a, c) {
          if (!t(c)) throw Error("No callback function defined");
          b.getTabsWithURL(a, function (f) {
            e(b.getLastError()) || d(f)
              ? c(!1)
              : d(f[0]) || d(f[0].url)
              ? c(!1)
              : ((f = f[0]), f.url !== a ? c(!1) : (b.activateTab(f.id), b.focusWindow(b.getWindowIDForTab(f)), c(!0)));
          });
        },
        _onAuthReturnUrl: function (a) {
          if (d(a)) g._publishAuthEvent("LOGIN_FAILURE");
          else if ((b.removeOnBeforeRequestEventListener(g._onAuthReturnUrl), d(a.tabId) || d(a.url))) g._publishAuthEvent("LOGIN_FAILURE");
          else if (u !== a.tabId)
            if (((u = a.tabId), h.urlWithoutQueryParameters(a.url, !0) !== p.getReturnURL())) g._publishAuthEvent("LOGIN_FAILURE");
            else {
              b.closeTab(a.tabId);
              var e = new URI(a.url).query(!0);
              if (d(e.code) || d(e.state)) g._publishAuthEvent("LOGIN_FAILURE");
              else if ("142b5c23-5ba5-4cc9-baef-3cc1c45c595b" !== e.state) g._publishAuthEvent("LOGIN_FAILURE");
              else {
                e = Object.keys(e).map(function (a) {
                  return a + "=" + e[a];
                });
                try {
                  c.sso.parseAuthCodeAndGetTokens(e, function (a, b) {
                    200 == a ? g._publishAuthEvent("LOGIN_SUCCESS") : g._publishAuthEvent("LOGIN_FAILURE");
                  });
                } catch (f) {
                  g._publishAuthEvent("LOGIN_FAILURE");
                }
              }
            }
        },
        _publishAuthEvent: function (a) {
          h.createCustomHTMLEvent("NA_LOGIN_STATUS", a);
        }
      };
    return g;
  })(c.SymBfw, c.SymO2);
})(window);
