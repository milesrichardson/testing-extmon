var pidCryptUtil = require("./pidcrypt/pidcrypt_util.js"),
  workerSingleton = require("./index.js"),
  shouldLog = !0;
"undefined" == typeof KW_LOG && (shouldLog = !1);
var hexcase = 0,
  b64pad = "",
  chrsz = 8;
function hex_sha1(e) {
  return binb2hex(core_sha1(str2binb(e), e.length * chrsz));
}
function b64_sha1(e) {
  return binb2b64(core_sha1(str2binb(e), e.length * chrsz));
}
function str_sha1(e) {
  return binb2str(core_sha1(str2binb(e), e.length * chrsz));
}
function hex_hmac_sha1(e, r) {
  return binb2hex(core_hmac_sha1(e, r));
}
function b64_hmac_sha1(e, r) {
  return binb2b64(core_hmac_sha1(e, r));
}
function str_hmac_sha1(e, r) {
  return binb2str(core_hmac_sha1(e, r));
}
function sha1_vm_test() {
  return "a9993e364706816aba3e25717850c26c9cd0d89d" == hex_sha1("abc");
}
function core_sha1(e, r) {
  (e[r >> 5] |= 128 << (24 - (r % 32))), (e[15 + (((r + 64) >> 9) << 4)] = r);
  for (var n = Array(80), o = 1732584193, t = -271733879, a = -1732584194, s = 271733878, i = -1009589776, c = 0; c < e.length; c += 16) {
    for (var h = o, d = t, f = a, u = s, l = i, b = 0; b < 80; b++) {
      n[b] = b < 16 ? e[c + b] : rol(n[b - 3] ^ n[b - 8] ^ n[b - 14] ^ n[b - 16], 1);
      var _ = safe_add(safe_add(rol(o, 5), sha1_ft(b, t, a, s)), safe_add(safe_add(i, n[b]), sha1_kt(b)));
      (i = s), (s = a), (a = rol(t, 30)), (t = o), (o = _);
    }
    (o = safe_add(o, h)), (t = safe_add(t, d)), (a = safe_add(a, f)), (s = safe_add(s, u)), (i = safe_add(i, l));
  }
  return Array(o, t, a, s, i);
}
function sha1_ft(e, r, n, o) {
  return e < 20 ? (r & n) | (~r & o) : e < 40 ? r ^ n ^ o : e < 60 ? (r & n) | (r & o) | (n & o) : r ^ n ^ o;
}
function sha1_kt(e) {
  return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514;
}
function core_hmac_sha1(e, r) {
  var n = str2binb(e);
  n.length > 16 && (n = core_sha1(n, e.length * chrsz));
  for (var o = Array(16), t = Array(16), a = 0; a < 16; a++) (o[a] = 909522486 ^ n[a]), (t[a] = 1549556828 ^ n[a]);
  var s = core_sha1(o.concat(str2binb(r)), 512 + r.length * chrsz);
  return core_sha1(t.concat(s), 672);
}
function safe_add(e, r) {
  var n = (65535 & e) + (65535 & r);
  return (((e >> 16) + (r >> 16) + (n >> 16)) << 16) | (65535 & n);
}
function rol(e, r) {
  return (e << r) | (e >>> (32 - r));
}
function str2binb(e) {
  for (var r = Array(), n = (1 << chrsz) - 1, o = 0; o < e.length * chrsz; o += chrsz)
    r[o >> 5] |= (e.charCodeAt(o / chrsz) & n) << (32 - chrsz - (o % 32));
  return r;
}
function binb2str(e) {
  for (var r = "", n = (1 << chrsz) - 1, o = 0; o < 32 * e.length; o += chrsz)
    r += String.fromCharCode((e[o >> 5] >>> (32 - chrsz - (o % 32))) & n);
  return r;
}
function binb2hex(e) {
  for (var r = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < 4 * e.length; o++)
    n += r.charAt((e[o >> 2] >> (8 * (3 - (o % 4)) + 4)) & 15) + r.charAt((e[o >> 2] >> (8 * (3 - (o % 4)))) & 15);
  return n;
}
function binb2b64(e) {
  for (var r = "", n = 0; n < 4 * e.length; n += 3)
    for (
      var o =
          (((e[n >> 2] >> (8 * (3 - (n % 4)))) & 255) << 16) |
          (((e[(n + 1) >> 2] >> (8 * (3 - ((n + 1) % 4)))) & 255) << 8) |
          ((e[(n + 2) >> 2] >> (8 * (3 - ((n + 2) % 4)))) & 255),
        t = 0;
      t < 4;
      t++
    )
      8 * n + 6 * t > 32 * e.length
        ? (r += b64pad)
        : (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((o >> (6 * (3 - t))) & 63));
  return r;
}
function PBKDF2(e, r, n, o, t) {
  var a,
    s,
    i = t,
    c = this,
    h = e,
    d = str2binb(e),
    f = r,
    u = n,
    l = 0,
    b = o,
    _ = Math.ceil(b / 20),
    g = 1,
    v = new Array(16),
    w = new Array(16),
    p = new Array(0, 0, 0, 0, 0),
    y = "",
    m = null,
    C = function (e) {
      setTimeout(e, 0);
    };
  d.length > 16 && (d = core_sha1(d, e.length * chrsz));
  for (var k = 0; k < 16; ++k) (v[k] = 909522486 ^ d[k]), (w[k] = 1549556828 ^ d[k]);
  (this.deriveKey = function (e, r, n) {
    void 0 === n && (n = !0);
    const o = n ? workerSingleton.getWorker("PBKDF2WebpackWorker") : void 0;
    if (
      n &&
      (("undefined" != typeof window && void 0 !== o && "undefined" != typeof Worker) || ("undefined" != typeof NodeWorker && null != i))
    ) {
      shouldLog && console.log("starting worker");
      var d = null;
      "undefined" != typeof window
        ? ((d = new Worker(o)),
          window.KWWorkerReferencesToAvoidGarbageCollection || (window.KWWorkerReferencesToAvoidGarbageCollection = []),
          window.KWWorkerReferencesToAvoidGarbageCollection.push(d))
        : (d = new NodeWorker(t)),
        (d.onmessage = function (n) {
          var o = n.data.split(" "),
            t = o.shift();
          "progress" == t
            ? e(o[0])
            : "finished" == t
            ? (r(o.join()),
              d.terminate(),
              "undefined" != typeof window &&
                window &&
                window.KWWorkerReferencesToAvoidGarbageCollection &&
                (window.KWWorkerReferencesToAvoidGarbageCollection = window.KWWorkerReferencesToAvoidGarbageCollection.filter(function (e) {
                  return e !== d;
                })))
            : "debug" == t && alert(o.join());
        }),
        d.postMessage("set password " + pidCryptUtil.encodeBase64(encodeURIComponent(h))),
        d.postMessage("set salt " + pidCryptUtil.encodeBase64(encodeURIComponent(f))),
        d.postMessage("set num_iterations " + u),
        d.postMessage("set num_bytes " + b),
        d.postMessage("start");
    } else
      shouldLog && console.log("deriving key - no worker (maybe already inside a worker?)"),
        (s = e),
        (a = r),
        C(function () {
          c.do_PBKDF2_iterations();
        });
  }),
    (this.deriveKey_webworker = function (e, r) {
      var n = 0;
      (C = function (e) {
        ++n % 100 == 0 ? setTimeout(e, 0) : e();
      }),
        this.deriveKey(e, r, !1);
    }),
    (this.do_PBKDF2_iterations = function () {
      var e = 10;
      u - l < 10 && (e = u - l);
      for (var r = 0; r < e; ++r) {
        if (0 == l) {
          var n =
            f +
            String.fromCharCode((g >> 24) & 15) +
            String.fromCharCode((g >> 16) & 15) +
            String.fromCharCode((g >> 8) & 15) +
            String.fromCharCode(15 & g);
          (m = core_sha1(v.concat(str2binb(n)), 512 + 8 * n.length)), (m = core_sha1(w.concat(m), 672));
        } else (m = core_sha1(v.concat(m), 512 + 32 * m.length)), (m = core_sha1(w.concat(m), 672));
        for (var o = 0; o < m.length; ++o) p[o] ^= m[o];
        l++;
      }
      if ((s(((g - 1 + l / u) / _) * 100), l < u))
        C(function () {
          c.do_PBKDF2_iterations();
        });
      else if (g < _)
        (y += binb2hex(p)),
          g++,
          (p = new Array(0, 0, 0, 0, 0)),
          (l = 0),
          C(function () {
            c.do_PBKDF2_iterations();
          });
      else {
        var t = binb2hex(p);
        (y += t.substr(0, 2 * (b - 20 * (_ - 1)))), a(y);
      }
    });
}
module.exports = PBKDF2;
