var forge = require("./forge");
require("./jsbn");
var LOW_PRIMES = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
    139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449,
    457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
    631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
  ],
  LP_LIMIT = (1 << 26) / LOW_PRIMES[LOW_PRIMES.length - 1],
  BigInteger = forge.jsbn.BigInteger,
  BIG_TWO = new BigInteger(null);
BIG_TWO.fromInt(2),
  self.addEventListener("message", function (e) {
    var r = findPrime(e.data);
    self.postMessage(r);
  }),
  self.postMessage({ found: !1 });
var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];
function findPrime(e) {
  for (var r = new BigInteger(e.hex, 16), n = 0, t = e.workLoad, i = 0; i < t; ++i) {
    if (isProbablePrime(r)) return { found: !0, prime: r.toString(16) };
    r.dAddOffset(GCD_30_DELTA[n++ % 8], 0);
  }
  return { found: !1 };
}
function isProbablePrime(e) {
  for (var r = 1; r < LOW_PRIMES.length; ) {
    for (var n = LOW_PRIMES[r], t = r + 1; t < LOW_PRIMES.length && n < LP_LIMIT; ) n *= LOW_PRIMES[t++];
    for (n = e.modInt(n); r < t; ) if (n % LOW_PRIMES[r++] == 0) return !1;
  }
  return runMillerRabin(e);
}
function runMillerRabin(e) {
  var r = e.subtract(BigInteger.ONE),
    n = r.getLowestSetBit();
  if (n <= 0) return !1;
  for (var t, i = r.shiftRight(n), o = _getMillerRabinTests(e.bitLength()), g = getPrng(), f = 0; f < o; ++f) {
    do {
      t = new BigInteger(e.bitLength(), g);
    } while (t.compareTo(BigInteger.ONE) <= 0 || t.compareTo(r) >= 0);
    var a = t.modPow(i, e);
    if (0 !== a.compareTo(BigInteger.ONE) && 0 !== a.compareTo(r)) {
      for (var u = n; --u; ) {
        if (0 === (a = a.modPowInt(2, e)).compareTo(BigInteger.ONE)) return !1;
        if (0 === a.compareTo(r)) break;
      }
      if (0 === u) return !1;
    }
  }
  return !0;
}
function getPrng() {
  return {
    nextBytes: function (e) {
      for (var r = 0; r < e.length; ++r) e[r] = Math.floor(255 * Math.random());
    }
  };
}
function _getMillerRabinTests(e) {
  return e <= 100
    ? 27
    : e <= 150
    ? 18
    : e <= 200
    ? 15
    : e <= 250
    ? 12
    : e <= 300
    ? 9
    : e <= 350
    ? 8
    : e <= 400
    ? 7
    : e <= 500
    ? 6
    : e <= 600
    ? 5
    : e <= 800
    ? 4
    : e <= 1250
    ? 3
    : 2;
}
