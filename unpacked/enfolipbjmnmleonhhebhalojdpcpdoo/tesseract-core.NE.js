var TesseractCoreWASM = (function () {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  return function (TesseractCoreWASM) {
    TesseractCoreWASM = TesseractCoreWASM || {};

    var Module = typeof TesseractCoreWASM !== "undefined" ? TesseractCoreWASM : {};
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    Module["arguments"] = [];
    Module["thisProgram"] = "./this.program";
    Module["quit"] = function (status, toThrow) {
      throw toThrow;
    };
    Module["preRun"] = [];
    Module["postRun"] = [];
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof require === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      } else {
        return scriptDirectory + path;
      }
    }
    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = __dirname + "/";
      var nodeFS;
      var nodePath;
      Module["read"] = function shell_read(filename, binary) {
        var ret;
        if (!nodeFS) nodeFS = require("fs");
        if (!nodePath) nodePath = require("path");
        filename = nodePath["normalize"](filename);
        ret = nodeFS["readFileSync"](filename);
        return binary ? ret : ret.toString();
      };
      Module["readBinary"] = function readBinary(filename) {
        var ret = Module["read"](filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
      }
      Module["arguments"] = process["argv"].slice(2);
      process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      Module["quit"] = function (status) {
        process["exit"](status);
      };
      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        Module["read"] = function shell_read(f) {
          return read(f);
        };
      }
      Module["readBinary"] = function readBinary(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        Module["arguments"] = scriptArgs;
      } else if (typeof arguments != "undefined") {
        Module["arguments"] = arguments;
      }
      if (typeof quit === "function") {
        Module["quit"] = function (status) {
          quit(status);
        };
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      Module["read"] = function shell_read(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      };
      if (ENVIRONMENT_IS_WORKER) {
        Module["readBinary"] = function readBinary(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(xhr.response);
        };
      }
      Module["readAsync"] = function readAsync(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
            onload(xhr.response);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };
      Module["setWindowTitle"] = function (title) {
        document.title = title;
      };
    } else {
    }
    var out = Module["print"] || (typeof console !== "undefined" ? console.log.bind(console) : typeof print !== "undefined" ? print : null);
    var err =
      Module["printErr"] ||
      (typeof printErr !== "undefined" ? printErr : (typeof console !== "undefined" && console.warn.bind(console)) || out);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = undefined;
    var STACK_ALIGN = 16;
    function staticAlloc(size) {
      var ret = STATICTOP;
      STATICTOP = (STATICTOP + size + 15) & -16;
      return ret;
    }
    function dynamicAlloc(size) {
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = (ret + size + 15) & -16;
      HEAP32[DYNAMICTOP_PTR >> 2] = end;
      if (end >= TOTAL_MEMORY) {
        var success = enlargeMemory();
        if (!success) {
          HEAP32[DYNAMICTOP_PTR >> 2] = ret;
          return 0;
        }
      }
      return ret;
    }
    function alignMemory(size, factor) {
      if (!factor) factor = STACK_ALIGN;
      var ret = (size = Math.ceil(size / factor) * factor);
      return ret;
    }
    function getNativeTypeSize(type) {
      switch (type) {
        case "i1":
        case "i8":
          return 1;
        case "i16":
          return 2;
        case "i32":
          return 4;
        case "i64":
          return 8;
        case "float":
          return 4;
        case "double":
          return 8;
        default: {
          if (type[type.length - 1] === "*") {
            return 4;
          } else if (type[0] === "i") {
            var bits = parseInt(type.substr(1));
            assert(bits % 8 === 0);
            return bits / 8;
          } else {
            return 0;
          }
        }
      }
    }
    var asm2wasmImports = {
      "f64-rem": function (x, y) {
        return x % y;
      },
      debugger: function () {
        debugger;
      }
    };
    var functionPointers = new Array(0);
    var GLOBAL_BASE = 1024;
    var ABORT = false;
    var EXITSTATUS = 0;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") type = "i32";
      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;
        case "i8":
          HEAP8[ptr >> 0] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          (tempI64 = [
            value >>> 0,
            ((tempDouble = value),
            +Math_abs(tempDouble) >= 1
              ? tempDouble > 0
                ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
              : 0)
          ]),
            (HEAP32[ptr >> 2] = tempI64[0]),
            (HEAP32[(ptr + 4) >> 2] = tempI64[1]);
          break;
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        default:
          abort("invalid type for setValue: " + type);
      }
    }
    function getValue(ptr, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") type = "i32";
      switch (type) {
        case "i1":
          return HEAP8[ptr >> 0];
        case "i8":
          return HEAP8[ptr >> 0];
        case "i16":
          return HEAP16[ptr >> 1];
        case "i32":
          return HEAP32[ptr >> 2];
        case "i64":
          return HEAP32[ptr >> 2];
        case "float":
          return HEAPF32[ptr >> 2];
        case "double":
          return HEAPF64[ptr >> 3];
        default:
          abort("invalid type for getValue: " + type);
      }
      return null;
    }
    var ALLOC_NORMAL = 0;
    var ALLOC_STATIC = 2;
    var ALLOC_NONE = 4;
    function allocate(slab, types, allocator, ptr) {
      var zeroinit, size;
      if (typeof slab === "number") {
        zeroinit = true;
        size = slab;
      } else {
        zeroinit = false;
        size = slab.length;
      }
      var singleType = typeof types === "string" ? types : null;
      var ret;
      if (allocator == ALLOC_NONE) {
        ret = ptr;
      } else {
        ret = [typeof _malloc === "function" ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][
          allocator === undefined ? ALLOC_STATIC : allocator
        ](Math.max(size, singleType ? 1 : types.length));
      }
      if (zeroinit) {
        var stop;
        ptr = ret;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
          HEAP32[ptr >> 2] = 0;
        }
        stop = ret + size;
        while (ptr < stop) {
          HEAP8[ptr++ >> 0] = 0;
        }
        return ret;
      }
      if (singleType === "i8") {
        if (slab.subarray || slab.slice) {
          HEAPU8.set(slab, ret);
        } else {
          HEAPU8.set(new Uint8Array(slab), ret);
        }
        return ret;
      }
      var i = 0,
        type,
        typeSize,
        previousType;
      while (i < size) {
        var curr = slab[i];
        type = singleType || types[i];
        if (type === 0) {
          i++;
          continue;
        }
        if (type == "i64") type = "i32";
        setValue(ret + i, curr, type);
        if (previousType !== type) {
          typeSize = getNativeTypeSize(type);
          previousType = type;
        }
        i += typeSize;
      }
      return ret;
    }
    function getMemory(size) {
      if (!staticSealed) return staticAlloc(size);
      if (!runtimeInitialized) return dynamicAlloc(size);
      return _malloc(size);
    }
    function Pointer_stringify(ptr, length) {
      if (length === 0 || !ptr) return "";
      var hasUtf = 0;
      var t;
      var i = 0;
      while (1) {
        t = HEAPU8[(ptr + i) >> 0];
        hasUtf |= t;
        if (t == 0 && !length) break;
        i++;
        if (length && i == length) break;
      }
      if (!length) length = i;
      var ret = "";
      if (hasUtf < 128) {
        var MAX_CHUNK = 1024;
        var curr;
        while (length > 0) {
          curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
          ret = ret ? ret + curr : curr;
          ptr += MAX_CHUNK;
          length -= MAX_CHUNK;
        }
        return ret;
      }
      return UTF8ToString(ptr);
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
    function UTF8ArrayToString(u8Array, idx) {
      var endPtr = idx;
      while (u8Array[endPtr]) ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var u0, u1, u2, u3, u4, u5;
        var str = "";
        while (1) {
          u0 = u8Array[idx++];
          if (!u0) return str;
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode(((u0 & 31) << 6) | u1);
            continue;
          }
          u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
          } else {
            u3 = u8Array[idx++] & 63;
            if ((u0 & 248) == 240) {
              u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
            } else {
              u4 = u8Array[idx++] & 63;
              if ((u0 & 252) == 248) {
                u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
              } else {
                u5 = u8Array[idx++] & 63;
                u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
              }
            }
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
          }
        }
      }
    }
    function UTF8ToString(ptr) {
      return UTF8ArrayToString(HEAPU8, ptr);
    }
    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          outU8Array[outIdx++] = 192 | (u >> 6);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          outU8Array[outIdx++] = 224 | (u >> 12);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else if (u <= 2097151) {
          if (outIdx + 3 >= endIdx) break;
          outU8Array[outIdx++] = 240 | (u >> 18);
          outU8Array[outIdx++] = 128 | ((u >> 12) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else if (u <= 67108863) {
          if (outIdx + 4 >= endIdx) break;
          outU8Array[outIdx++] = 248 | (u >> 24);
          outU8Array[outIdx++] = 128 | ((u >> 18) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 12) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else {
          if (outIdx + 5 >= endIdx) break;
          outU8Array[outIdx++] = 252 | (u >> 30);
          outU8Array[outIdx++] = 128 | ((u >> 24) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 18) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 12) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
        if (u <= 127) {
          ++len;
        } else if (u <= 2047) {
          len += 2;
        } else if (u <= 65535) {
          len += 3;
        } else if (u <= 2097151) {
          len += 4;
        } else if (u <= 67108863) {
          len += 5;
        } else {
          len += 6;
        }
      }
      return len;
    }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }
    function demangle(func) {
      var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];
      assert(__cxa_demangle_func);
      try {
        var s = func;
        if (s.startsWith("__Z")) s = s.substr(1);
        var len = lengthBytesUTF8(s) + 1;
        var buf = _malloc(len);
        stringToUTF8(s, buf, len);
        var status = _malloc(4);
        var ret = __cxa_demangle_func(buf, 0, 0, status);
        if (HEAP32[status >> 2] === 0 && ret) {
          return Pointer_stringify(ret);
        }
      } catch (e) {
      } finally {
        if (buf) _free(buf);
        if (status) _free(status);
        if (ret) _free(ret);
      }
      return func;
    }
    function demangleAll(text) {
      var regex = /__Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }
    function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          err = e;
        }
        if (!err.stack) {
          return "(no stack trace available)";
        }
      }
      return err.stack.toString();
    }
    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
      return demangleAll(js);
    }
    var PAGE_SIZE = 16384;
    var WASM_PAGE_SIZE = 65536;
    var ASMJS_PAGE_SIZE = 16777216;
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - (x % multiple);
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBuffer(buf) {
      Module["buffer"] = buffer = buf;
    }
    function updateGlobalBufferViews() {
      Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
      Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
      Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
    }
    var STATIC_BASE, STATICTOP, staticSealed;
    var STACK_BASE, STACKTOP, STACK_MAX;
    var DYNAMIC_BASE, DYNAMICTOP_PTR;
    STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
    staticSealed = false;
    function abortOnCannotGrowMemory() {
      abort(
        "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
          TOTAL_MEMORY +
          ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "
      );
    }
    function enlargeMemory() {
      abortOnCannotGrowMemory();
    }
    var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;
    var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 268435456;
    if (TOTAL_MEMORY < TOTAL_STACK)
      err("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
    if (Module["buffer"]) {
      buffer = Module["buffer"];
    } else {
      if (typeof WebAssembly === "object" && typeof WebAssembly.Memory === "function") {
        Module["wasmMemory"] = new WebAssembly.Memory({ initial: TOTAL_MEMORY / WASM_PAGE_SIZE, maximum: TOTAL_MEMORY / WASM_PAGE_SIZE });
        buffer = Module["wasmMemory"].buffer;
      } else {
        buffer = new ArrayBuffer(TOTAL_MEMORY);
      }
      Module["buffer"] = buffer;
    }
    updateGlobalBufferViews();
    function getTotalMemory() {
      return TOTAL_MEMORY;
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback();
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATEXIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function ensureInitRuntime() {
      if (runtimeInitialized) return;
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      callRuntimeCallbacks(__ATEXIT__);
      runtimeExited = true;
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPreMain(cb) {
      __ATMAIN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }
    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) HEAP8[buffer >> 0] = 0;
    }
    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function getUniqueRunDependency(id) {
      return id;
    }
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }
    function integrateWasmJS() {
      var wasmTextFile = "tesseract-core.wast";
      var wasmBinaryFile = "tesseract-core.wasm";
      var asmjsCodeFile = "tesseract-core.temp.asm.js";
      if (!isDataURI(wasmTextFile)) {
        wasmTextFile = locateFile(wasmTextFile);
      }
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }
      if (!isDataURI(asmjsCodeFile)) {
        asmjsCodeFile = locateFile(asmjsCodeFile);
      }
      var wasmPageSize = 64 * 1024;
      var info = { global: null, env: null, asm2wasm: asm2wasmImports, parent: Module };
      var exports = null;
      function mergeMemory(newBuffer) {
        var oldBuffer = Module["buffer"];
        if (newBuffer.byteLength < oldBuffer.byteLength) {
          err("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
        }
        var oldView = new Int8Array(oldBuffer);
        var newView = new Int8Array(newBuffer);
        newView.set(oldView);
        updateGlobalBuffer(newBuffer);
        updateGlobalBufferViews();
      }
      function getBinary() {
        try {
          if (Module["wasmBinary"]) {
            return new Uint8Array(Module["wasmBinary"]);
          }
          if (Module["readBinary"]) {
            return Module["readBinary"](wasmBinaryFile);
          } else {
            throw "both async and sync fetching of the wasm failed";
          }
        } catch (err) {
          abort(err);
        }
      }
      function getBinaryPromise() {
        if (!Module["wasmBinary"] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" })
            .then(function (response) {
              if (!response["ok"]) {
                throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
              }
              return response["arrayBuffer"]();
            })
            .catch(function () {
              return getBinary();
            });
        }
        return new Promise(function (resolve, reject) {
          resolve(getBinary());
        });
      }
      function doNativeWasm(global, env, providedBuffer) {
        if (typeof WebAssembly !== "object") {
          err("no native wasm support detected");
          return false;
        }
        if (!(Module["wasmMemory"] instanceof WebAssembly.Memory)) {
          err("no native wasm Memory in use");
          return false;
        }
        env["memory"] = Module["wasmMemory"];
        info["global"] = { NaN: NaN, Infinity: Infinity };
        info["global.Math"] = Math;
        info["env"] = env;
        function receiveInstance(instance, module) {
          exports = instance.exports;
          if (exports.memory) mergeMemory(exports.memory);
          Module["asm"] = exports;
          Module["usingWasm"] = true;
          removeRunDependency("wasm-instantiate");
        }
        addRunDependency("wasm-instantiate");
        if (Module["instantiateWasm"]) {
          try {
            return Module["instantiateWasm"](info, receiveInstance);
          } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false;
          }
        }
        function receiveInstantiatedSource(output) {
          receiveInstance(output["instance"], output["module"]);
        }
        function instantiateArrayBuffer(receiver) {
          getBinaryPromise()
            .then(function (binary) {
              return WebAssembly.instantiate(binary, info);
            })
            .then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
        }
        if (
          !Module["wasmBinary"] &&
          typeof WebAssembly.instantiateStreaming === "function" &&
          !isDataURI(wasmBinaryFile) &&
          typeof fetch === "function"
        ) {
          WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, { credentials: "same-origin" }), info).then(
            receiveInstantiatedSource,
            function (reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            }
          );
        } else {
          instantiateArrayBuffer(receiveInstantiatedSource);
        }
        return {};
      }
      Module["asmPreload"] = Module["asm"];
      var asmjsReallocBuffer = Module["reallocBuffer"];
      var wasmReallocBuffer = function (size) {
        var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE;
        size = alignUp(size, PAGE_MULTIPLE);
        var old = Module["buffer"];
        var oldSize = old.byteLength;
        if (Module["usingWasm"]) {
          try {
            var result = Module["wasmMemory"].grow((size - oldSize) / wasmPageSize);
            if (result !== (-1 | 0)) {
              return (Module["buffer"] = Module["wasmMemory"].buffer);
            } else {
              return null;
            }
          } catch (e) {
            return null;
          }
        }
      };
      Module["reallocBuffer"] = function (size) {
        if (finalMethod === "asmjs") {
          return asmjsReallocBuffer(size);
        } else {
          return wasmReallocBuffer(size);
        }
      };
      var finalMethod = "";
      Module["asm"] = function (global, env, providedBuffer) {
        if (!env["table"]) {
          var TABLE_SIZE = Module["wasmTableSize"];
          if (TABLE_SIZE === undefined) TABLE_SIZE = 1024;
          var MAX_TABLE_SIZE = Module["wasmMaxTableSize"];
          if (typeof WebAssembly === "object" && typeof WebAssembly.Table === "function") {
            if (MAX_TABLE_SIZE !== undefined) {
              env["table"] = new WebAssembly.Table({ initial: TABLE_SIZE, maximum: MAX_TABLE_SIZE, element: "anyfunc" });
            } else {
              env["table"] = new WebAssembly.Table({ initial: TABLE_SIZE, element: "anyfunc" });
            }
          } else {
            env["table"] = new Array(TABLE_SIZE);
          }
          Module["wasmTable"] = env["table"];
        }
        if (!env["memoryBase"]) {
          env["memoryBase"] = Module["STATIC_BASE"];
        }
        if (!env["tableBase"]) {
          env["tableBase"] = 0;
        }
        var exports;
        exports = doNativeWasm(global, env, providedBuffer);
        assert(exports, "no binaryen method succeeded.");
        return exports;
      };
    }
    integrateWasmJS();
    var ASM_CONSTS = [
      function ($0) {
        if (Module["TesseractProgress"]) Module["TesseractProgress"]($0);
      }
    ];
    function _emscripten_asm_const_ii(code, a0) {
      return ASM_CONSTS[code](a0);
    }
    STATIC_BASE = GLOBAL_BASE;
    STATICTOP = STATIC_BASE + 1989024;
    __ATINIT__.push(
      {
        func: function () {
          __GLOBAL__sub_I_topitch_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_fpchop_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_gap_map_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_imagefind_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_makerow_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_oldbasel_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_pitsync1_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_strokewidth_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tabfind_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tablefind_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tabvector_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_edgblob_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tovars_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_underlin_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_wordseg_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_scrollview_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_render_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_baseapi_cpp();
        }
      },
      {
        func: function () {
          ___emscripten_environ_constructor();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_iostream_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_normmatch_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tessvars_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_polyaprx_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_split_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_ccutil_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_tprintf_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_blobclass_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_intfx_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_intproto_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_mfx_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_equationdetect_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_picofeat_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_protos_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_alignedblob_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_blkocc_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_cjkpitch_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_colfind_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_colpartitiongrid_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_devanagari_processing_cpp();
        }
      },
      {
        func: function () {
          __GLOBAL__sub_I_drawtord_cpp();
        }
      }
    );
    var STATIC_BUMP = 1989024;
    Module["STATIC_BASE"] = STATIC_BASE;
    Module["STATIC_BUMP"] = STATIC_BUMP;
    STATICTOP += 16;
    function ___assert_fail(condition, filename, line, func) {
      abort(
        "Assertion failed: " +
          Pointer_stringify(condition) +
          ", at: " +
          [filename ? Pointer_stringify(filename) : "unknown filename", line, func ? Pointer_stringify(func) : "unknown function"]
      );
    }
    var ENV = {};
    function ___buildEnvironment(environ) {
      var MAX_ENV_VALUES = 64;
      var TOTAL_ENV_SIZE = 1024;
      var poolPtr;
      var envPtr;
      if (!___buildEnvironment.called) {
        ___buildEnvironment.called = true;
        ENV["USER"] = ENV["LOGNAME"] = "web_user";
        ENV["PATH"] = "/";
        ENV["PWD"] = "/";
        ENV["HOME"] = "/home/web_user";
        ENV["LANG"] = "C.UTF-8";
        ENV["_"] = Module["thisProgram"];
        poolPtr = getMemory(TOTAL_ENV_SIZE);
        envPtr = getMemory(MAX_ENV_VALUES * 4);
        HEAP32[envPtr >> 2] = poolPtr;
        HEAP32[environ >> 2] = envPtr;
      } else {
        envPtr = HEAP32[environ >> 2];
        poolPtr = HEAP32[envPtr >> 2];
      }
      var strings = [];
      var totalSize = 0;
      for (var key in ENV) {
        if (typeof ENV[key] === "string") {
          var line = key + "=" + ENV[key];
          strings.push(line);
          totalSize += line.length;
        }
      }
      if (totalSize > TOTAL_ENV_SIZE) {
        throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
      }
      var ptrSize = 4;
      for (var i = 0; i < strings.length; i++) {
        var line = strings[i];
        writeAsciiToMemory(line, poolPtr);
        HEAP32[(envPtr + i * ptrSize) >> 2] = poolPtr;
        poolPtr += line.length + 1;
      }
      HEAP32[(envPtr + strings.length * ptrSize) >> 2] = 0;
    }
    function _emscripten_get_now() {
      abort();
    }
    function _emscripten_get_now_is_monotonic() {
      return (
        ENVIRONMENT_IS_NODE ||
        typeof dateNow !== "undefined" ||
        ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self["performance"] && self["performance"]["now"])
      );
    }
    var ERRNO_CODES = {
      EPERM: 1,
      ENOENT: 2,
      ESRCH: 3,
      EINTR: 4,
      EIO: 5,
      ENXIO: 6,
      E2BIG: 7,
      ENOEXEC: 8,
      EBADF: 9,
      ECHILD: 10,
      EAGAIN: 11,
      EWOULDBLOCK: 11,
      ENOMEM: 12,
      EACCES: 13,
      EFAULT: 14,
      ENOTBLK: 15,
      EBUSY: 16,
      EEXIST: 17,
      EXDEV: 18,
      ENODEV: 19,
      ENOTDIR: 20,
      EISDIR: 21,
      EINVAL: 22,
      ENFILE: 23,
      EMFILE: 24,
      ENOTTY: 25,
      ETXTBSY: 26,
      EFBIG: 27,
      ENOSPC: 28,
      ESPIPE: 29,
      EROFS: 30,
      EMLINK: 31,
      EPIPE: 32,
      EDOM: 33,
      ERANGE: 34,
      ENOMSG: 42,
      EIDRM: 43,
      ECHRNG: 44,
      EL2NSYNC: 45,
      EL3HLT: 46,
      EL3RST: 47,
      ELNRNG: 48,
      EUNATCH: 49,
      ENOCSI: 50,
      EL2HLT: 51,
      EDEADLK: 35,
      ENOLCK: 37,
      EBADE: 52,
      EBADR: 53,
      EXFULL: 54,
      ENOANO: 55,
      EBADRQC: 56,
      EBADSLT: 57,
      EDEADLOCK: 35,
      EBFONT: 59,
      ENOSTR: 60,
      ENODATA: 61,
      ETIME: 62,
      ENOSR: 63,
      ENONET: 64,
      ENOPKG: 65,
      EREMOTE: 66,
      ENOLINK: 67,
      EADV: 68,
      ESRMNT: 69,
      ECOMM: 70,
      EPROTO: 71,
      EMULTIHOP: 72,
      EDOTDOT: 73,
      EBADMSG: 74,
      ENOTUNIQ: 76,
      EBADFD: 77,
      EREMCHG: 78,
      ELIBACC: 79,
      ELIBBAD: 80,
      ELIBSCN: 81,
      ELIBMAX: 82,
      ELIBEXEC: 83,
      ENOSYS: 38,
      ENOTEMPTY: 39,
      ENAMETOOLONG: 36,
      ELOOP: 40,
      EOPNOTSUPP: 95,
      EPFNOSUPPORT: 96,
      ECONNRESET: 104,
      ENOBUFS: 105,
      EAFNOSUPPORT: 97,
      EPROTOTYPE: 91,
      ENOTSOCK: 88,
      ENOPROTOOPT: 92,
      ESHUTDOWN: 108,
      ECONNREFUSED: 111,
      EADDRINUSE: 98,
      ECONNABORTED: 103,
      ENETUNREACH: 101,
      ENETDOWN: 100,
      ETIMEDOUT: 110,
      EHOSTDOWN: 112,
      EHOSTUNREACH: 113,
      EINPROGRESS: 115,
      EALREADY: 114,
      EDESTADDRREQ: 89,
      EMSGSIZE: 90,
      EPROTONOSUPPORT: 93,
      ESOCKTNOSUPPORT: 94,
      EADDRNOTAVAIL: 99,
      ENETRESET: 102,
      EISCONN: 106,
      ENOTCONN: 107,
      ETOOMANYREFS: 109,
      EUSERS: 87,
      EDQUOT: 122,
      ESTALE: 116,
      ENOTSUP: 95,
      ENOMEDIUM: 123,
      EILSEQ: 84,
      EOVERFLOW: 75,
      ECANCELED: 125,
      ENOTRECOVERABLE: 131,
      EOWNERDEAD: 130,
      ESTRPIPE: 86
    };
    function ___setErrNo(value) {
      if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;
      return value;
    }
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if (clk_id === 1 && _emscripten_get_now_is_monotonic()) {
        now = _emscripten_get_now();
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      HEAP32[tp >> 2] = (now / 1e3) | 0;
      HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
      return 0;
    }
    function ___clock_gettime() {
      return _clock_gettime.apply(null, arguments);
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
    function __ZSt18uncaught_exceptionv() {
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
    var EXCEPTIONS = {
      last: 0,
      caught: [],
      infos: {},
      deAdjust: function (adjusted) {
        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
        for (var key in EXCEPTIONS.infos) {
          var ptr = +key;
          var info = EXCEPTIONS.infos[ptr];
          if (info.adjusted === adjusted) {
            return ptr;
          }
        }
        return adjusted;
      },
      addRef: function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount++;
      },
      decRef: function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        assert(info.refcount > 0);
        info.refcount--;
        if (info.refcount === 0 && !info.rethrown) {
          if (info.destructor) {
            Module["dynCall_vi"](info.destructor, ptr);
          }
          delete EXCEPTIONS.infos[ptr];
          ___cxa_free_exception(ptr);
        }
      },
      clearRef: function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount = 0;
      }
    };
    function ___cxa_pure_virtual() {
      ABORT = true;
      throw "Pure virtual function called!";
    }
    function ___cxa_throw(ptr, type, destructor) {
      EXCEPTIONS.infos[ptr] = { ptr: ptr, adjusted: ptr, type: type, destructor: destructor, refcount: 0, caught: false, rethrown: false };
      EXCEPTIONS.last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exception = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exception++;
      }
      throw (
        ptr +
        " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
      );
    }
    function ___lock() {}
    function ___map_file(pathname, size) {
      ___setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }
    var ERRNO_MESSAGES = {
      0: "Success",
      1: "Not super-user",
      2: "No such file or directory",
      3: "No such process",
      4: "Interrupted system call",
      5: "I/O error",
      6: "No such device or address",
      7: "Arg list too long",
      8: "Exec format error",
      9: "Bad file number",
      10: "No children",
      11: "No more processes",
      12: "Not enough core",
      13: "Permission denied",
      14: "Bad address",
      15: "Block device required",
      16: "Mount device busy",
      17: "File exists",
      18: "Cross-device link",
      19: "No such device",
      20: "Not a directory",
      21: "Is a directory",
      22: "Invalid argument",
      23: "Too many open files in system",
      24: "Too many open files",
      25: "Not a typewriter",
      26: "Text file busy",
      27: "File too large",
      28: "No space left on device",
      29: "Illegal seek",
      30: "Read only file system",
      31: "Too many links",
      32: "Broken pipe",
      33: "Math arg out of domain of func",
      34: "Math result not representable",
      35: "File locking deadlock error",
      36: "File or path name too long",
      37: "No record locks available",
      38: "Function not implemented",
      39: "Directory not empty",
      40: "Too many symbolic links",
      42: "No message of desired type",
      43: "Identifier removed",
      44: "Channel number out of range",
      45: "Level 2 not synchronized",
      46: "Level 3 halted",
      47: "Level 3 reset",
      48: "Link number out of range",
      49: "Protocol driver not attached",
      50: "No CSI structure available",
      51: "Level 2 halted",
      52: "Invalid exchange",
      53: "Invalid request descriptor",
      54: "Exchange full",
      55: "No anode",
      56: "Invalid request code",
      57: "Invalid slot",
      59: "Bad font file fmt",
      60: "Device not a stream",
      61: "No data (for no delay io)",
      62: "Timer expired",
      63: "Out of streams resources",
      64: "Machine is not on the network",
      65: "Package not installed",
      66: "The object is remote",
      67: "The link has been severed",
      68: "Advertise error",
      69: "Srmount error",
      70: "Communication error on send",
      71: "Protocol error",
      72: "Multihop attempted",
      73: "Cross mount point (not really error)",
      74: "Trying to read unreadable message",
      75: "Value too large for defined data type",
      76: "Given log. name not unique",
      77: "f.d. invalid for this operation",
      78: "Remote address changed",
      79: "Can   access a needed shared lib",
      80: "Accessing a corrupted shared lib",
      81: ".lib section in a.out corrupted",
      82: "Attempting to link in too many libs",
      83: "Attempting to exec a shared library",
      84: "Illegal byte sequence",
      86: "Streams pipe error",
      87: "Too many users",
      88: "Socket operation on non-socket",
      89: "Destination address required",
      90: "Message too long",
      91: "Protocol wrong type for socket",
      92: "Protocol not available",
      93: "Unknown protocol",
      94: "Socket type not supported",
      95: "Not supported",
      96: "Protocol family not supported",
      97: "Address family not supported by protocol family",
      98: "Address already in use",
      99: "Address not available",
      100: "Network interface is not configured",
      101: "Network is unreachable",
      102: "Connection reset by network",
      103: "Connection aborted",
      104: "Connection reset by peer",
      105: "No buffer space available",
      106: "Socket is already connected",
      107: "Socket is not connected",
      108: "Can't send after socket shutdown",
      109: "Too many references",
      110: "Connection timed out",
      111: "Connection refused",
      112: "Host is down",
      113: "Host is unreachable",
      114: "Socket already connected",
      115: "Connection already in progress",
      116: "Stale file handle",
      122: "Quota exceeded",
      123: "No medium (in tape drive)",
      125: "Operation canceled",
      130: "Previous owner died",
      131: "State not recoverable"
    };
    var PATH = {
      splitPath: function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function (parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: function (path) {
        var isAbsolute = path.charAt(0) === "/",
          trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(
          path.split("/").filter(function (p) {
            return !!p;
          }),
          !isAbsolute
        ).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: function (path) {
        var result = PATH.splitPath(path),
          root = result[0],
          dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function (path) {
        if (path === "/") return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
      },
      extname: function (path) {
        return PATH.splitPath(path)[3];
      },
      join: function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2: function (l, r) {
        return PATH.normalize(l + "/" + r);
      },
      resolve: function () {
        var resolvedPath = "",
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? arguments[i] : FS.cwd();
          if (typeof path !== "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charAt(0) === "/";
        }
        resolvedPath = PATH.normalizeArray(
          resolvedPath.split("/").filter(function (p) {
            return !!p;
          }),
          !resolvedAbsolute
        ).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "") break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "") break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var TTY = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open: function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close: function (stream) {
          stream.tty.ops.flush(stream.tty);
        },
        flush: function (stream) {
          stream.tty.ops.flush(stream.tty);
        },
        read: function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write: function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var i = 0;
          try {
            if (offset === 0 && length === 0) {
              stream.tty.ops.flush(stream.tty);
            } else {
              while (i < length) {
                stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                i++;
              }
            }
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char: function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = new Buffer(BUFSIZE);
              var bytesRead = 0;
              var isPosixPlatform = process.platform != "win32";
              var fd = process.stdin.fd;
              if (isPosixPlatform) {
                var usingDevice = false;
                try {
                  fd = fs.openSync("/dev/stdin", "r");
                  usingDevice = true;
                } catch (e) {}
              }
              try {
                bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, null);
              } catch (e) {
                if (e.toString().indexOf("EOF") != -1) bytesRead = 0;
                else throw e;
              }
              if (usingDevice) {
                fs.closeSync(fd);
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },
        put_char: function (tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        flush: function (tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function (tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        flush: function (tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      }
    };
    var MEMFS = {
      ops_table: null,
      mount: function (mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0);
      },
      createNode: function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: { llseek: MEMFS.stream_ops.llseek }
            },
            file: {
              node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink },
              stream: {}
            },
            chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      getFileDataAsRegularArray: function (node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr;
        }
        return node.contents;
      },
      getFileDataAsTypedArray: function (node) {
        if (!node.contents) return new Uint8Array();
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage: function (node, newCapacity) {
        if (node.contents && node.contents.subarray && newCapacity > node.contents.length) {
          node.contents = MEMFS.getFileDataAsRegularArray(node);
          node.usedBytes = node.contents.length;
        }
        if (!node.contents || node.contents.subarray) {
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) | 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity);
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
          return;
        }
        if (!node.contents && newCapacity > 0) node.contents = [];
        while (node.contents.length < newCapacity) node.contents.push(0);
      },
      resizeFileStorage: function (node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) {
          var oldContents = node.contents;
          node.contents = new Uint8Array(new ArrayBuffer(newSize));
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
          return;
        }
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },
      node_ops: {
        getattr: function (node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr: function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup: function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },
        mknod: function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function (old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {}
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },
        unlink: function (parent, name) {
          delete parent.contents[name];
        },
        rmdir: function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },
        readdir: function (node) {
          var entries = [".", ".."];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
        symlink: function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink: function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }
      },
      stream_ops: {
        read: function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
        write: function (stream, buffer, offset, length, position, canOwn) {
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position);
          else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek: function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        },
        allocate: function (stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap: function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && (contents.buffer === buffer || contents.buffer === buffer.buffer)) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < stream.node.usedBytes) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },
        msync: function (stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        }
      }
    };
    var IDBFS = {
      dbs: {},
      indexedDB: function () {
        if (typeof indexedDB !== "undefined") return indexedDB;
        var ret = null;
        if (typeof window === "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, "IDBFS used, but indexedDB not supported");
        return ret;
      },
      DB_VERSION: 21,
      DB_STORE_NAME: "FILE_DATA",
      mount: function (mount) {
        return MEMFS.mount.apply(null, arguments);
      },
      syncfs: function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function (err, local) {
          if (err) return callback(err);
          IDBFS.getRemoteSet(mount, function (err, remote) {
            if (err) return callback(err);
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },
      getDB: function (name, callback) {
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = function (e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
          var fileStore;
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
          if (!fileStore.indexNames.contains("timestamp")) {
            fileStore.createIndex("timestamp", "timestamp", { unique: false });
          }
        };
        req.onsuccess = function () {
          db = req.result;
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function (e) {
          callback(this.error);
          e.preventDefault();
        };
      },
      getLocalSet: function (mount, callback) {
        var entries = {};
        function isRealDir(p) {
          return p !== "." && p !== "..";
        }
        function toAbsolute(root) {
          return function (p) {
            return PATH.join2(root, p);
          };
        }
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
        while (check.length) {
          var path = check.pop();
          var stat;
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
          entries[path] = { timestamp: stat.mtime };
        }
        return callback(null, { type: "local", entries: entries });
      },
      getRemoteSet: function (mount, callback) {
        var entries = {};
        IDBFS.getDB(mount.mountpoint, function (err, db) {
          if (err) return callback(err);
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readonly");
            transaction.onerror = function (e) {
              callback(this.error);
              e.preventDefault();
            };
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index("timestamp");
            index.openKeyCursor().onsuccess = function (event) {
              var cursor = event.target.result;
              if (!cursor) {
                return callback(null, { type: "remote", db: db, entries: entries });
              }
              entries[cursor.primaryKey] = { timestamp: cursor.key };
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },
      loadLocalEntry: function (path, callback) {
        var stat, node;
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error("node type not supported"));
        }
      },
      storeLocalEntry: function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { canOwn: true });
          } else {
            return callback(new Error("node type not supported"));
          }
          FS.chmod(path, entry.mode);
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
        callback(null);
      },
      removeLocalEntry: function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
        callback(null);
      },
      loadRemoteEntry: function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function (event) {
          callback(null, event.target.result);
        };
        req.onerror = function (e) {
          callback(this.error);
          e.preventDefault();
        };
      },
      storeRemoteEntry: function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function () {
          callback(null);
        };
        req.onerror = function (e) {
          callback(this.error);
          e.preventDefault();
        };
      },
      removeRemoteEntry: function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function () {
          callback(null);
        };
        req.onerror = function (e) {
          callback(this.error);
          e.preventDefault();
        };
      },
      reconcile: function (src, dst, callback) {
        var total = 0;
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
        if (!total) {
          return callback(null);
        }
        var completed = 0;
        var db = src.type === "remote" ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readwrite");
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        }
        transaction.onerror = function (e) {
          done(this.error);
          e.preventDefault();
        };
        create.sort().forEach(function (path) {
          if (dst.type === "local") {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
        remove
          .sort()
          .reverse()
          .forEach(function (path) {
            if (dst.type === "local") {
              IDBFS.removeLocalEntry(path, done);
            } else {
              IDBFS.removeRemoteEntry(store, path, done);
            }
          });
      }
    };
    var NODEFS = {
      isWindows: false,
      staticInit: function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
        var flags = process["binding"]("constants");
        if (flags["fs"]) {
          flags = flags["fs"];
        }
        NODEFS.flagsForNodeMap = {
          1024: flags["O_APPEND"],
          64: flags["O_CREAT"],
          128: flags["O_EXCL"],
          0: flags["O_RDONLY"],
          2: flags["O_RDWR"],
          4096: flags["O_SYNC"],
          512: flags["O_TRUNC"],
          1: flags["O_WRONLY"]
        };
      },
      bufferFrom: function (arrayBuffer) {
        return Buffer.alloc ? Buffer.from(arrayBuffer) : new Buffer(arrayBuffer);
      },
      mount: function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, "/", NODEFS.getMode(mount.opts.root), 0);
      },
      createNode: function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },
      getMode: function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            stat.mode = stat.mode | ((stat.mode & 292) >> 2);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },
      realPath: function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },
      flagsForNode: function (flags) {
        flags &= ~2097152;
        flags &= ~2048;
        flags &= ~32768;
        flags &= ~524288;
        var newFlags = 0;
        for (var k in NODEFS.flagsForNodeMap) {
          if (flags & k) {
            newFlags |= NODEFS.flagsForNodeMap[k];
            flags ^= k;
          }
        }
        if (!flags) {
          return newFlags;
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
      },
      node_ops: {
        getattr: function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = ((stat.size + stat.blksize - 1) / stat.blksize) | 0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },
        setattr: function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        lookup: function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },
        mknod: function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, "", { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },
        rename: function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        unlink: function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        rmdir: function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        readdir: function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        symlink: function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        readlink: function (node) {
          var path = NODEFS.realPath(node);
          try {
            path = fs.readlinkSync(path);
            path = NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root), path);
            return path;
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }
      },
      stream_ops: {
        open: function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsForNode(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        close: function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        read: function (stream, buffer, offset, length, position) {
          if (length === 0) return 0;
          try {
            return fs.readSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        write: function (stream, buffer, offset, length, position) {
          try {
            return fs.writeSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },
        llseek: function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        }
      }
    };
    var WORKERFS = {
      DIR_MODE: 16895,
      FILE_MODE: 33279,
      reader: null,
      mount: function (mount) {
        assert(ENVIRONMENT_IS_WORKER);
        if (!WORKERFS.reader) WORKERFS.reader = new FileReaderSync();
        var root = WORKERFS.createNode(null, "/", WORKERFS.DIR_MODE, 0);
        var createdParents = {};
        function ensureParent(path) {
          var parts = path.split("/");
          var parent = root;
          for (var i = 0; i < parts.length - 1; i++) {
            var curr = parts.slice(0, i + 1).join("/");
            if (!createdParents[curr]) {
              createdParents[curr] = WORKERFS.createNode(parent, parts[i], WORKERFS.DIR_MODE, 0);
            }
            parent = createdParents[curr];
          }
          return parent;
        }
        function base(path) {
          var parts = path.split("/");
          return parts[parts.length - 1];
        }
        Array.prototype.forEach.call(mount.opts["files"] || [], function (file) {
          WORKERFS.createNode(ensureParent(file.name), base(file.name), WORKERFS.FILE_MODE, 0, file, file.lastModifiedDate);
        });
        (mount.opts["blobs"] || []).forEach(function (obj) {
          WORKERFS.createNode(ensureParent(obj["name"]), base(obj["name"]), WORKERFS.FILE_MODE, 0, obj["data"]);
        });
        (mount.opts["packages"] || []).forEach(function (pack) {
          pack["metadata"].files.forEach(function (file) {
            var name = file.filename.substr(1);
            WORKERFS.createNode(ensureParent(name), base(name), WORKERFS.FILE_MODE, 0, pack["blob"].slice(file.start, file.end));
          });
        });
        return root;
      },
      createNode: function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = WORKERFS.node_ops;
        node.stream_ops = WORKERFS.stream_ops;
        node.timestamp = (mtime || new Date()).getTime();
        assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE);
        if (mode === WORKERFS.FILE_MODE) {
          node.size = contents.size;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      node_ops: {
        getattr: function (node) {
          return {
            dev: 1,
            ino: undefined,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096)
          };
        },
        setattr: function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },
        lookup: function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        },
        mknod: function (parent, name, mode, dev) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },
        rename: function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },
        unlink: function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },
        rmdir: function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },
        readdir: function (node) {
          var entries = [".", ".."];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
        symlink: function (parent, newName, oldPath) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },
        readlink: function (node) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
      },
      stream_ops: {
        read: function (stream, buffer, offset, length, position) {
          if (position >= stream.node.size) return 0;
          var chunk = stream.node.contents.slice(position, position + length);
          var ab = WORKERFS.reader.readAsArrayBuffer(chunk);
          buffer.set(new Uint8Array(ab), offset);
          return chunk.size;
        },
        write: function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(ERRNO_CODES.EIO);
        },
        llseek: function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        }
      }
    };
    STATICTOP += 16;
    STATICTOP += 16;
    STATICTOP += 16;
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      trackingDelegate: {},
      tracking: { openFlags: { READ: 1, WRITE: 2 } },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      handleFSError: function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
        return ___setErrNo(e.errno);
      },
      lookupPath: function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path) return { path: "", node: null };
        var defaults = { follow_mount: true, recurse_count: 0 };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
        var parts = PATH.normalizeArray(
          path.split("/").filter(function (p) {
            return !!p;
          }),
          false
        );
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath: function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
          }
          path = path ? node.name + "/" + path : node.name;
          node = node.parent;
        }
      },
      hashName: function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
      hashAddNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode: function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode: function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function (parent, name, mode, rdev) {
            if (!parent) {
              parent = this;
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
          FS.FSNode.prototype = {};
          var readMode = 292 | 73;
          var writeMode = 146;
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function () {
                return (this.mode & readMode) === readMode;
              },
              set: function (val) {
                val ? (this.mode |= readMode) : (this.mode &= ~readMode);
              }
            },
            write: {
              get: function () {
                return (this.mode & writeMode) === writeMode;
              },
              set: function (val) {
                val ? (this.mode |= writeMode) : (this.mode &= ~writeMode);
              }
            },
            isFolder: {
              get: function () {
                return FS.isDir(this.mode);
              }
            },
            isDevice: {
              get: function () {
                return FS.isChrdev(this.mode);
              }
            }
          });
        }
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode: function (node) {
        FS.hashRemoveNode(node);
      },
      isRoot: function (node) {
        return node === node.parent;
      },
      isMountpoint: function (node) {
        return !!node.mounted;
      },
      isFile: function (mode) {
        return (mode & 61440) === 32768;
      },
      isDir: function (mode) {
        return (mode & 61440) === 16384;
      },
      isLink: function (mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev: function (mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev: function (mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO: function (mode) {
        return (mode & 61440) === 4096;
      },
      isSocket: function (mode) {
        return (mode & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        rs: 1052672,
        "r+": 2,
        w: 577,
        wx: 705,
        xw: 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        a: 1089,
        ax: 1217,
        xa: 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
      },
      modeStringToFlags: function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === "undefined") {
          throw new Error("Unknown file open mode: " + str);
        }
        return flags;
      },
      flagsToPermissionString: function (flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions: function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },
      mayLookup: function (dir) {
        var err = FS.nodePermissions(dir, "x");
        if (err) return err;
        if (!dir.node_ops.lookup) return ERRNO_CODES.EACCES;
        return 0;
      },
      mayCreate: function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {}
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete: function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, "wx");
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },
      mayOpen: function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },
      getStream: function (fd) {
        return FS.streams[fd];
      },
      createStream: function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function () {};
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function () {
                return this.node;
              },
              set: function (val) {
                this.node = val;
              }
            },
            isRead: {
              get: function () {
                return (this.flags & 2097155) !== 1;
              }
            },
            isWrite: {
              get: function () {
                return (this.flags & 2097155) !== 0;
              }
            },
            isAppend: {
              get: function () {
                return this.flags & 1024;
              }
            }
          });
        }
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream: function (fd) {
        FS.streams[fd] = null;
      },
      chrdev_stream_ops: {
        open: function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
        llseek: function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
      },
      major: function (dev) {
        return dev >> 8;
      },
      minor: function (dev) {
        return dev & 255;
      },
      makedev: function (ma, mi) {
        return (ma << 8) | mi;
      },
      registerDevice: function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: function (dev) {
        return FS.devices[dev];
      },
      getMounts: function (mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push.apply(check, m.mounts);
        }
        return mounts;
      },
      syncfs: function (populate, callback) {
        if (typeof populate === "function") {
          callback = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          console.log("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(err) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(err);
        }
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount: function (type, opts, mountpoint) {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
        var mount = { type: type, opts: opts, mountpoint: mountpoint, mounts: [] };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount: function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup: function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod: function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create: function (path, mode) {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir: function (path, mode) {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree: function (path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != ERRNO_CODES.EEXIST) throw e;
          }
        }
      },
      mkdev: function (path, mode, dev) {
        if (typeof dev === "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink: function (oldpath, newpath) {
        if (!PATH.resolve(oldpath)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename: function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        err = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, "w");
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        try {
          if (FS.trackingDelegate["willMovePath"]) {
            FS.trackingDelegate["willMovePath"](old_path, new_path);
          }
        } catch (e) {
          console.log("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
        } catch (e) {
          console.log("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
      },
      rmdir: function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          console.log("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          console.log("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readdir: function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },
      unlink: function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          console.log("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          console.log("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readlink: function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return PATH.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat: function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },
      lstat: function (path) {
        return FS.stat(path, true);
      },
      chmod: function (path, mode, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, { mode: (mode & 4095) | (node.mode & ~4095), timestamp: Date.now() });
      },
      lchmod: function (path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod: function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },
      chown: function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown: function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown: function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },
      truncate: function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, "w");
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate: function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },
      utime: function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
      },
      open: function (path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === "undefined" ? 438 : mode;
        if (flags & 64) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === "object") {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
            node = lookup.node;
          } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        if (!created) {
          var err = FS.mayOpen(node, flags);
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        if (flags & 512) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512);
        var stream = FS.createStream(
          {
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
          },
          fd_start,
          fd_end
        );
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            console.log("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate["onOpenFile"]) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate["onOpenFile"](path, trackingFlags);
          }
        } catch (e) {
          console.log("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
        }
        return stream;
      },
      close: function (stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (stream.getdents) stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed: function (stream) {
        return stream.fd === null;
      },
      llseek: function (stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read: function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
      write: function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
        } catch (e) {
          console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + e.message);
        }
        return bytesWritten;
      },
      allocate: function (stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap: function (stream, buffer, offset, length, position, prot, flags) {
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },
      msync: function (stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
      munmap: function (stream) {
        return 0;
      },
      ioctl: function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile: function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "r";
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile: function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "w";
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: function () {
        return FS.currentPath;
      },
      chdir: function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, "x");
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories: function () {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices: function () {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: function () {
            return 0;
          },
          write: function (stream, buffer, offset, length, pos) {
            return length;
          }
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device;
        if (typeof crypto !== "undefined") {
          var randomBuffer = new Uint8Array(1);
          random_device = function () {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0];
          };
        } else if (ENVIRONMENT_IS_NODE) {
          random_device = function () {
            return require("crypto")["randomBytes"](1)[0];
          };
        } else {
          random_device = function () {
            abort("random_device");
          };
        }
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: function () {
        FS.mkdir("/proc");
        FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount(
          {
            mount: function () {
              var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
              node.node_ops = {
                lookup: function (parent, name) {
                  var fd = +name;
                  var stream = FS.getStream(fd);
                  if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
                  var ret = {
                    parent: null,
                    mount: { mountpoint: "fake" },
                    node_ops: {
                      readlink: function () {
                        return stream.path;
                      }
                    }
                  };
                  ret.parent = ret;
                  return ret;
                }
              };
              return node;
            }
          },
          {},
          "/proc/self/fd"
        );
      },
      createStandardStreams: function () {
        if (Module["stdin"]) {
          FS.createDevice("/dev", "stdin", Module["stdin"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (Module["stdout"]) {
          FS.createDevice("/dev", "stdout", null, Module["stdout"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (Module["stderr"]) {
          FS.createDevice("/dev", "stderr", null, Module["stderr"]);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        var stdin = FS.open("/dev/stdin", "r");
        assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
        var stdout = FS.open("/dev/stdout", "w");
        assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
        var stderr = FS.open("/dev/stderr", "w");
        assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
      },
      ensureErrnoError: function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = function (errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) Object.defineProperty(this, "stack", { value: new Error().stack, writable: true });
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [ERRNO_CODES.ENOENT].forEach(function (code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = "<generic error, no stack>";
        });
      },
      staticInit: function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS: MEMFS, IDBFS: IDBFS, NODEFS: NODEFS, WORKERFS: WORKERFS };
      },
      init: function (input, output, error) {
        assert(
          !FS.init.initialized,
          "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
        );
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams();
      },
      quit: function () {
        FS.init.initialized = false;
        var fflush = Module["_fflush"];
        if (fflush) fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      getMode: function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },
      joinPath: function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == "/") path = path.substr(1);
        return path;
      },
      absolutePath: function (relative, base) {
        return PATH.resolve(base, relative);
      },
      standardizePath: function (path) {
        return PATH.normalize(path);
      },
      findObject: function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },
      analyzePath: function (path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {}
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createFolder: function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },
      createPath: function (parent, path, canRead, canWrite) {
        parent = typeof parent === "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {}
          parent = current;
        }
        return current;
      },
      createFile: function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile: function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, "w");
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
      createDevice: function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open: function (stream) {
            stream.seekable = false;
          },
          close: function (stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function (stream, buffer, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function (stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      createLink: function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },
      forceLoadFile: function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== "undefined") {
          throw new Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
          );
        } else if (Module["read"]) {
          try {
            obj.contents = intArrayFromString(Module["read"](obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },
      createLazyFile: function (parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize) | 0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, false);
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
          var chunkSize = 1024 * 1024;
          if (!hasByteServing) chunkSize = datalength;
          var doXHR = function (from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
            if (typeof Uint8Array != "undefined") xhr.responseType = "arraybuffer";
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
            xhr.send(null);
            if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(xhr.response || []);
            } else {
              return intArrayFromString(xhr.responseText || "", true);
            }
          };
          var lazyArray = this;
          lazyArray.setDataGetter(function (chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray.chunks[chunkNum] === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== "undefined") {
          if (!ENVIRONMENT_IS_WORKER)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function (key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length) return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },
      createPreloadedFile: function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init();
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module["preloadPlugins"].forEach(function (plugin) {
            if (handled) return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, function () {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == "string") {
          Browser.asyncLoad(
            url,
            function (byteArray) {
              processData(byteArray);
            },
            onerror
          );
        } else {
          processData(url);
        }
      },
      indexedDB: function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: function () {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log("creating db");
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0,
            fail = 0,
            total = paths.length;
          function finish() {
            if (fail == 0) onload();
            else onerror();
          }
          paths.forEach(function (path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() {
              ok++;
              if (ok + fail == total) finish();
            };
            putRequest.onerror = function putRequest_onerror() {
              fail++;
              if (ok + fail == total) finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      loadFilesFromDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
          } catch (e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0,
            fail = 0,
            total = paths.length;
          function finish() {
            if (fail == 0) onload();
            else onerror();
          }
          paths.forEach(function (path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() {
              fail++;
              if (ok + fail == total) finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }
    };
    var SYSCALLS = {
      DEFAULT_POLLMASK: 5,
      mappings: {},
      umask: 511,
      calculateAt: function (dirfd, path) {
        if (path[0] !== "/") {
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },
      doStat: function (func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            return -ERRNO_CODES.ENOTDIR;
          }
          throw e;
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[(buf + 4) >> 2] = 0;
        HEAP32[(buf + 8) >> 2] = stat.ino;
        HEAP32[(buf + 12) >> 2] = stat.mode;
        HEAP32[(buf + 16) >> 2] = stat.nlink;
        HEAP32[(buf + 20) >> 2] = stat.uid;
        HEAP32[(buf + 24) >> 2] = stat.gid;
        HEAP32[(buf + 28) >> 2] = stat.rdev;
        HEAP32[(buf + 32) >> 2] = 0;
        HEAP32[(buf + 36) >> 2] = stat.size;
        HEAP32[(buf + 40) >> 2] = 4096;
        HEAP32[(buf + 44) >> 2] = stat.blocks;
        HEAP32[(buf + 48) >> 2] = (stat.atime.getTime() / 1e3) | 0;
        HEAP32[(buf + 52) >> 2] = 0;
        HEAP32[(buf + 56) >> 2] = (stat.mtime.getTime() / 1e3) | 0;
        HEAP32[(buf + 60) >> 2] = 0;
        HEAP32[(buf + 64) >> 2] = (stat.ctime.getTime() / 1e3) | 0;
        HEAP32[(buf + 68) >> 2] = 0;
        HEAP32[(buf + 72) >> 2] = stat.ino;
        return 0;
      },
      doMsync: function (addr, stream, len, flags) {
        var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
        FS.msync(stream, buffer, 0, len, flags);
      },
      doMkdir: function (path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0;
      },
      doMknod: function (path, mode, dev) {
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -ERRNO_CODES.EINVAL;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },
      doReadlink: function (path, buf, bufsize) {
        if (bufsize <= 0) return -ERRNO_CODES.EINVAL;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len;
      },
      doAccess: function (path, amode) {
        if (amode & ~7) {
          return -ERRNO_CODES.EINVAL;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        var perms = "";
        if (amode & 4) perms += "r";
        if (amode & 2) perms += "w";
        if (amode & 1) perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
          return -ERRNO_CODES.EACCES;
        }
        return 0;
      },
      doDup: function (path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },
      doReadv: function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(iov + i * 8) >> 2];
          var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
          var curr = FS.read(stream, HEAP8, ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break;
        }
        return ret;
      },
      doWritev: function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(iov + i * 8) >> 2];
          var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
          var curr = FS.write(stream, HEAP8, ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },
      varargs: 0,
      get: function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
        return ret;
      },
      getStr: function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },
      getStreamFromFD: function () {
        var stream = FS.getStream(SYSCALLS.get());
        if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return stream;
      },
      getSocketFromFD: function () {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return socket;
      },
      getSocketAddress: function (allowNull) {
        var addrp = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      },
      get64: function () {
        var low = SYSCALLS.get(),
          high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },
      getZero: function () {
        assert(SYSCALLS.get() === 0);
      }
    };
    function ___syscall10(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var path = SYSCALLS.getStr();
        FS.unlink(path);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall140(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          offset_high = SYSCALLS.get(),
          offset_low = SYSCALLS.get(),
          result = SYSCALLS.get(),
          whence = SYSCALLS.get();
        var offset = offset_low;
        FS.llseek(stream, offset, whence);
        HEAP32[result >> 2] = stream.position;
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall145(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();
        return SYSCALLS.doReadv(stream, iov, iovcnt);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall146(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();
        return SYSCALLS.doWritev(stream, iov, iovcnt);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall183(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var buf = SYSCALLS.get(),
          size = SYSCALLS.get();
        if (size === 0) return -ERRNO_CODES.EINVAL;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd);
        if (size < cwdLengthInBytes + 1) return -ERRNO_CODES.ERANGE;
        stringToUTF8(cwd, buf, size);
        return buf;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall192(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var addr = SYSCALLS.get(),
          len = SYSCALLS.get(),
          prot = SYSCALLS.get(),
          flags = SYSCALLS.get(),
          fd = SYSCALLS.get(),
          off = SYSCALLS.get();
        off <<= 12;
        var ptr;
        var allocated = false;
        if (fd === -1) {
          ptr = _memalign(PAGE_SIZE, len);
          if (!ptr) return -ERRNO_CODES.ENOMEM;
          _memset(ptr, 0, len);
          allocated = true;
        } else {
          var info = FS.getStream(fd);
          if (!info) return -ERRNO_CODES.EBADF;
          var res = FS.mmap(info, HEAPU8, addr, len, off, prot, flags);
          ptr = res.ptr;
          allocated = res.allocated;
        }
        SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, flags: flags };
        return ptr;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall195(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var path = SYSCALLS.getStr(),
          buf = SYSCALLS.get();
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall197(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get();
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall221(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          cmd = SYSCALLS.get();
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -ERRNO_CODES.EINVAL;
            }
            var newStream;
            newStream = FS.open(stream.path, stream.flags, 0, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 12:
          case 12: {
            var arg = SYSCALLS.get();
            var offset = 0;
            HEAP16[(arg + offset) >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -ERRNO_CODES.EINVAL;
          case 9:
            ___setErrNo(ERRNO_CODES.EINVAL);
            return -1;
          default: {
            return -ERRNO_CODES.EINVAL;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall3(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get(),
          count = SYSCALLS.get();
        return FS.read(stream, HEAP8, buf, count);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall4(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          buf = SYSCALLS.get(),
          count = SYSCALLS.get();
        return FS.write(stream, HEAP8, buf, count);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall40(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var path = SYSCALLS.getStr();
        FS.rmdir(path);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall5(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(),
          flags = SYSCALLS.get(),
          mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall54(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(),
          op = SYSCALLS.get();
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            return 0;
          }
          case 21519: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            var argp = SYSCALLS.get();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            return -ERRNO_CODES.EINVAL;
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            return 0;
          }
          case 21524: {
            if (!stream.tty) return -ERRNO_CODES.ENOTTY;
            return 0;
          }
          default:
            abort("bad ioctl syscall " + op);
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall6(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD();
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___syscall91(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var addr = SYSCALLS.get(),
          len = SYSCALLS.get();
        var info = SYSCALLS.mappings[addr];
        if (!info) return 0;
        if (len === info.len) {
          var stream = FS.getStream(info.fd);
          SYSCALLS.doMsync(addr, stream, len, info.flags);
          FS.munmap(stream);
          SYSCALLS.mappings[addr] = null;
          if (info.allocated) {
            _free(info.malloc);
          }
        }
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___unlock() {}
    function _abort() {
      Module["abort"]();
    }
    function _clock() {
      if (_clock.start === undefined) _clock.start = Date.now();
      return ((Date.now() - _clock.start) * (1e6 / 1e3)) | 0;
    }
    function _difftime(time1, time0) {
      return time1 - time0;
    }
    function _longjmp(env, value) {
      Module["setThrew"](env, value || 1);
      throw "longjmp";
    }
    function _emscripten_longjmp(env, value) {
      _longjmp(env, value);
    }
    function __exit(status) {
      exit(status);
    }
    function _exit(status) {
      __exit(status);
    }
    function _getenv(name) {
      if (name === 0) return 0;
      name = Pointer_stringify(name);
      if (!ENV.hasOwnProperty(name)) return 0;
      if (_getenv.ret) _free(_getenv.ret);
      _getenv.ret = allocateUTF8(ENV[name]);
      return _getenv.ret;
    }
    function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[ptr >> 2] = (now / 1e3) | 0;
      HEAP32[(ptr + 4) >> 2] = ((now % 1e3) * 1e3) | 0;
      return 0;
    }
    var ___tm_current = STATICTOP;
    STATICTOP += 48;
    var ___tm_timezone = allocate(intArrayFromString("GMT"), "i8", ALLOC_STATIC);
    function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getUTCSeconds();
      HEAP32[(tmPtr + 4) >> 2] = date.getUTCMinutes();
      HEAP32[(tmPtr + 8) >> 2] = date.getUTCHours();
      HEAP32[(tmPtr + 12) >> 2] = date.getUTCDate();
      HEAP32[(tmPtr + 16) >> 2] = date.getUTCMonth();
      HEAP32[(tmPtr + 20) >> 2] = date.getUTCFullYear() - 1900;
      HEAP32[(tmPtr + 24) >> 2] = date.getUTCDay();
      HEAP32[(tmPtr + 36) >> 2] = 0;
      HEAP32[(tmPtr + 32) >> 2] = 0;
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
      HEAP32[(tmPtr + 28) >> 2] = yday;
      HEAP32[(tmPtr + 40) >> 2] = ___tm_timezone;
      return tmPtr;
    }
    function _gmtime(time) {
      return _gmtime_r(time, ___tm_current);
    }
    function _llvm_log2_f32(x) {
      return Math.log(x) / Math.LN2;
    }
    function _llvm_log2_f64() {
      return _llvm_log2_f32.apply(null, arguments);
    }
    function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }
    function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length - 1;
    }
    function _llvm_trap() {
      abort("trap!");
    }
    function _tzset() {
      if (_tzset.called) return;
      _tzset.called = true;
      HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
      var winter = new Date(2e3, 0, 1);
      var summer = new Date(2e3, 6, 1);
      HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      }
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocate(intArrayFromString(winterName), "i8", ALLOC_NORMAL);
      var summerNamePtr = allocate(intArrayFromString(summerName), "i8", ALLOC_NORMAL);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[(__get_tzname() + 4) >> 2] = summerNamePtr;
      } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[(__get_tzname() + 4) >> 2] = winterNamePtr;
      }
    }
    function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[(tmPtr + 4) >> 2] = date.getMinutes();
      HEAP32[(tmPtr + 8) >> 2] = date.getHours();
      HEAP32[(tmPtr + 12) >> 2] = date.getDate();
      HEAP32[(tmPtr + 16) >> 2] = date.getMonth();
      HEAP32[(tmPtr + 20) >> 2] = date.getFullYear() - 1900;
      HEAP32[(tmPtr + 24) >> 2] = date.getDay();
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
      HEAP32[(tmPtr + 28) >> 2] = yday;
      HEAP32[(tmPtr + 36) >> 2] = -(date.getTimezoneOffset() * 60);
      var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[(tmPtr + 32) >> 2] = dst;
      var zonePtr = HEAP32[(__get_tzname() + (dst ? 4 : 0)) >> 2];
      HEAP32[(tmPtr + 40) >> 2] = zonePtr;
      return tmPtr;
    }
    function _localtime(time) {
      return _localtime_r(time, ___tm_current);
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
      return dest;
    }
    function _mktime(tmPtr) {
      _tzset();
      var date = new Date(
        HEAP32[(tmPtr + 20) >> 2] + 1900,
        HEAP32[(tmPtr + 16) >> 2],
        HEAP32[(tmPtr + 12) >> 2],
        HEAP32[(tmPtr + 8) >> 2],
        HEAP32[(tmPtr + 4) >> 2],
        HEAP32[tmPtr >> 2],
        0
      );
      var dst = HEAP32[(tmPtr + 32) >> 2];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset);
      if (dst < 0) {
        HEAP32[(tmPtr + 32) >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if (dst > 0 != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
      }
      HEAP32[(tmPtr + 24) >> 2] = date.getDay();
      var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
      HEAP32[(tmPtr + 28) >> 2] = yday;
      return (date.getTime() / 1e3) | 0;
    }
    function _pthread_cond_wait() {
      return 0;
    }
    var PTHREAD_SPECIFIC = {};
    function _pthread_getspecific(key) {
      return PTHREAD_SPECIFIC[key] || 0;
    }
    var PTHREAD_SPECIFIC_NEXT_KEY = 1;
    function _pthread_key_create(key, destructor) {
      if (key == 0) {
        return ERRNO_CODES.EINVAL;
      }
      HEAP32[key >> 2] = PTHREAD_SPECIFIC_NEXT_KEY;
      PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0;
      PTHREAD_SPECIFIC_NEXT_KEY++;
      return 0;
    }
    function _pthread_mutex_init() {}
    function _pthread_once(ptr, func) {
      if (!_pthread_once.seen) _pthread_once.seen = {};
      if (ptr in _pthread_once.seen) return;
      Module["dynCall_v"](func);
      _pthread_once.seen[ptr] = 1;
    }
    function _pthread_setspecific(key, value) {
      if (!(key in PTHREAD_SPECIFIC)) {
        return ERRNO_CODES.EINVAL;
      }
      PTHREAD_SPECIFIC[key] = value;
      return 0;
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]);
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[(tm + 40) >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[(tm + 4) >> 2],
        tm_hour: HEAP32[(tm + 8) >> 2],
        tm_mday: HEAP32[(tm + 12) >> 2],
        tm_mon: HEAP32[(tm + 16) >> 2],
        tm_year: HEAP32[(tm + 20) >> 2],
        tm_wday: HEAP32[(tm + 24) >> 2],
        tm_yday: HEAP32[(tm + 28) >> 2],
        tm_isdst: HEAP32[(tm + 32) >> 2],
        tm_gmtoff: HEAP32[(tm + 36) >> 2],
        tm_zone: tm_zone ? Pointer_stringify(tm_zone) : ""
      };
      var pattern = Pointer_stringify(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S"
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function (date) {
          return WEEKDAYS[date.tm_wday].substring(0, 3);
        },
        "%A": function (date) {
          return WEEKDAYS[date.tm_wday];
        },
        "%b": function (date) {
          return MONTHS[date.tm_mon].substring(0, 3);
        },
        "%B": function (date) {
          return MONTHS[date.tm_mon];
        },
        "%C": function (date) {
          var year = date.tm_year + 1900;
          return leadingNulls((year / 100) | 0, 2);
        },
        "%d": function (date) {
          return leadingNulls(date.tm_mday, 2);
        },
        "%e": function (date) {
          return leadingSomething(date.tm_mday, 2, " ");
        },
        "%g": function (date) {
          return getWeekBasedYear(date).toString().substring(2);
        },
        "%G": function (date) {
          return getWeekBasedYear(date);
        },
        "%H": function (date) {
          return leadingNulls(date.tm_hour, 2);
        },
        "%I": function (date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": function (date) {
          return leadingNulls(
            date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1),
            3
          );
        },
        "%m": function (date) {
          return leadingNulls(date.tm_mon + 1, 2);
        },
        "%M": function (date) {
          return leadingNulls(date.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (date) {
          return leadingNulls(date.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (date) {
          var day = new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0);
          return day.getDay() || 7;
        },
        "%U": function (date) {
          var janFirst = new Date(date.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
        },
        "%V": function (date) {
          var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53";
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01";
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
            daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        "%w": function (date) {
          var day = new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0);
          return day.getDay();
        },
        "%W": function (date) {
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday =
            janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
        },
        "%y": function (date) {
          return (date.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (date) {
          return date.tm_year + 1900;
        },
        "%z": function (date) {
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = (off / 60) * 100 + (off % 60);
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": function (date) {
          return date.tm_zone;
        },
        "%%": function () {
          return "%";
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function _time(ptr) {
      var ret = (Date.now() / 1e3) | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret;
      }
      return ret;
    }
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function _emscripten_get_now_actual() {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else if (typeof dateNow !== "undefined") {
      _emscripten_get_now = dateNow;
    } else if (typeof self === "object" && self["performance"] && typeof self["performance"]["now"] === "function") {
      _emscripten_get_now = function () {
        return self["performance"]["now"]();
      };
    } else if (typeof performance === "object" && typeof performance["now"] === "function") {
      _emscripten_get_now = function () {
        return performance["now"]();
      };
    } else {
      _emscripten_get_now = Date.now;
    }
    FS.staticInit();
    __ATINIT__.unshift(function () {
      if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
    });
    __ATMAIN__.push(function () {
      FS.ignorePermissions = false;
    });
    __ATEXIT__.push(function () {
      FS.quit();
    });
    __ATINIT__.unshift(function () {
      TTY.init();
    });
    __ATEXIT__.push(function () {
      TTY.shutdown();
    });
    if (ENVIRONMENT_IS_NODE) {
      var fs = require("fs");
      var NODEJS_PATH = require("path");
      NODEFS.staticInit();
    }
    DYNAMICTOP_PTR = staticAlloc(4);
    STACK_BASE = STACKTOP = alignMemory(STATICTOP);
    STACK_MAX = STACK_BASE + TOTAL_STACK;
    DYNAMIC_BASE = alignMemory(STACK_MAX);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    staticSealed = true;
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    Module["wasmTableSize"] = 1929;
    Module["wasmMaxTableSize"] = 1929;
    function invoke_i(index) {
      var sp = stackSave();
      try {
        return Module["dynCall_i"](index);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return Module["dynCall_ii"](index, a1);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return Module["dynCall_iii"](index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_iiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return Module["dynCall_iiii"](index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_iiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return Module["dynCall_iiiii"](index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return Module["dynCall_iiiiii"](index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_v(index) {
      var sp = stackSave();
      try {
        Module["dynCall_v"](index);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_vi(index, a1) {
      var sp = stackSave();
      try {
        Module["dynCall_vi"](index, a1);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_vii(index, a1, a2) {
      var sp = stackSave();
      try {
        Module["dynCall_vii"](index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_viii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        Module["dynCall_viii"](index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_viiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        Module["dynCall_viiii"](index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_viiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        Module["dynCall_viiiii"](index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        Module["dynCall_viiiiiiiii"](index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (typeof e !== "number" && e !== "longjmp") throw e;
        Module["setThrew"](1, 0);
      }
    }
    Module.asmGlobalArg = {};
    Module.asmLibraryArg = {
      abort: abort,
      enlargeMemory: enlargeMemory,
      getTotalMemory: getTotalMemory,
      abortOnCannotGrowMemory: abortOnCannotGrowMemory,
      invoke_i: invoke_i,
      invoke_ii: invoke_ii,
      invoke_iii: invoke_iii,
      invoke_iiii: invoke_iiii,
      invoke_iiiii: invoke_iiiii,
      invoke_iiiiii: invoke_iiiiii,
      invoke_v: invoke_v,
      invoke_vi: invoke_vi,
      invoke_vii: invoke_vii,
      invoke_viii: invoke_viii,
      invoke_viiii: invoke_viiii,
      invoke_viiiii: invoke_viiiii,
      invoke_viiiiiiiii: invoke_viiiiiiiii,
      ___assert_fail: ___assert_fail,
      ___buildEnvironment: ___buildEnvironment,
      ___clock_gettime: ___clock_gettime,
      ___cxa_allocate_exception: ___cxa_allocate_exception,
      ___cxa_pure_virtual: ___cxa_pure_virtual,
      ___cxa_throw: ___cxa_throw,
      ___lock: ___lock,
      ___map_file: ___map_file,
      ___setErrNo: ___setErrNo,
      ___syscall10: ___syscall10,
      ___syscall140: ___syscall140,
      ___syscall145: ___syscall145,
      ___syscall146: ___syscall146,
      ___syscall183: ___syscall183,
      ___syscall192: ___syscall192,
      ___syscall195: ___syscall195,
      ___syscall197: ___syscall197,
      ___syscall221: ___syscall221,
      ___syscall3: ___syscall3,
      ___syscall4: ___syscall4,
      ___syscall40: ___syscall40,
      ___syscall5: ___syscall5,
      ___syscall54: ___syscall54,
      ___syscall6: ___syscall6,
      ___syscall91: ___syscall91,
      ___unlock: ___unlock,
      _abort: _abort,
      _clock: _clock,
      _difftime: _difftime,
      _emscripten_asm_const_ii: _emscripten_asm_const_ii,
      _emscripten_longjmp: _emscripten_longjmp,
      _emscripten_memcpy_big: _emscripten_memcpy_big,
      _exit: _exit,
      _getenv: _getenv,
      _gettimeofday: _gettimeofday,
      _gmtime: _gmtime,
      _llvm_log2_f32: _llvm_log2_f32,
      _llvm_log2_f64: _llvm_log2_f64,
      _llvm_stackrestore: _llvm_stackrestore,
      _llvm_stacksave: _llvm_stacksave,
      _llvm_trap: _llvm_trap,
      _localtime: _localtime,
      _longjmp: _longjmp,
      _mktime: _mktime,
      _pthread_cond_wait: _pthread_cond_wait,
      _pthread_getspecific: _pthread_getspecific,
      _pthread_key_create: _pthread_key_create,
      _pthread_mutex_init: _pthread_mutex_init,
      _pthread_once: _pthread_once,
      _pthread_setspecific: _pthread_setspecific,
      _strftime: _strftime,
      _strftime_l: _strftime_l,
      _time: _time,
      DYNAMICTOP_PTR: DYNAMICTOP_PTR,
      STACKTOP: STACKTOP
    };
    var asm = Module["asm"](Module.asmGlobalArg, Module.asmLibraryArg, buffer);
    Module["asm"] = asm;
    var __GLOBAL__sub_I_alignedblob_cpp = (Module["__GLOBAL__sub_I_alignedblob_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_alignedblob_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_baseapi_cpp = (Module["__GLOBAL__sub_I_baseapi_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_baseapi_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_blkocc_cpp = (Module["__GLOBAL__sub_I_blkocc_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_blkocc_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_blobclass_cpp = (Module["__GLOBAL__sub_I_blobclass_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_blobclass_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_ccutil_cpp = (Module["__GLOBAL__sub_I_ccutil_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_ccutil_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_cjkpitch_cpp = (Module["__GLOBAL__sub_I_cjkpitch_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_cjkpitch_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_colfind_cpp = (Module["__GLOBAL__sub_I_colfind_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_colfind_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_colpartitiongrid_cpp = (Module["__GLOBAL__sub_I_colpartitiongrid_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_colpartitiongrid_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_devanagari_processing_cpp = (Module["__GLOBAL__sub_I_devanagari_processing_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_devanagari_processing_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_drawtord_cpp = (Module["__GLOBAL__sub_I_drawtord_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_drawtord_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_edgblob_cpp = (Module["__GLOBAL__sub_I_edgblob_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_edgblob_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_equationdetect_cpp = (Module["__GLOBAL__sub_I_equationdetect_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_equationdetect_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_fpchop_cpp = (Module["__GLOBAL__sub_I_fpchop_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_fpchop_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_gap_map_cpp = (Module["__GLOBAL__sub_I_gap_map_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_gap_map_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_imagefind_cpp = (Module["__GLOBAL__sub_I_imagefind_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_imagefind_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_intfx_cpp = (Module["__GLOBAL__sub_I_intfx_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_intfx_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_intproto_cpp = (Module["__GLOBAL__sub_I_intproto_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_intproto_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_iostream_cpp = (Module["__GLOBAL__sub_I_iostream_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_iostream_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_makerow_cpp = (Module["__GLOBAL__sub_I_makerow_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_makerow_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_mfx_cpp = (Module["__GLOBAL__sub_I_mfx_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_mfx_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_normmatch_cpp = (Module["__GLOBAL__sub_I_normmatch_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_normmatch_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_oldbasel_cpp = (Module["__GLOBAL__sub_I_oldbasel_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_oldbasel_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_picofeat_cpp = (Module["__GLOBAL__sub_I_picofeat_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_picofeat_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_pitsync1_cpp = (Module["__GLOBAL__sub_I_pitsync1_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_pitsync1_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_polyaprx_cpp = (Module["__GLOBAL__sub_I_polyaprx_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_polyaprx_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_protos_cpp = (Module["__GLOBAL__sub_I_protos_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_protos_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_render_cpp = (Module["__GLOBAL__sub_I_render_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_render_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_scrollview_cpp = (Module["__GLOBAL__sub_I_scrollview_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_scrollview_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_split_cpp = (Module["__GLOBAL__sub_I_split_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_split_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_strokewidth_cpp = (Module["__GLOBAL__sub_I_strokewidth_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_strokewidth_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tabfind_cpp = (Module["__GLOBAL__sub_I_tabfind_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tabfind_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tablefind_cpp = (Module["__GLOBAL__sub_I_tablefind_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tablefind_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tabvector_cpp = (Module["__GLOBAL__sub_I_tabvector_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tabvector_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tessvars_cpp = (Module["__GLOBAL__sub_I_tessvars_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tessvars_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_topitch_cpp = (Module["__GLOBAL__sub_I_topitch_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_topitch_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tovars_cpp = (Module["__GLOBAL__sub_I_tovars_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tovars_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_tprintf_cpp = (Module["__GLOBAL__sub_I_tprintf_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_tprintf_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_underlin_cpp = (Module["__GLOBAL__sub_I_underlin_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_underlin_cpp"].apply(null, arguments);
    });
    var __GLOBAL__sub_I_wordseg_cpp = (Module["__GLOBAL__sub_I_wordseg_cpp"] = function () {
      return Module["asm"]["__GLOBAL__sub_I_wordseg_cpp"].apply(null, arguments);
    });
    var ___cxa_demangle = (Module["___cxa_demangle"] = function () {
      return Module["asm"]["___cxa_demangle"].apply(null, arguments);
    });
    var ___emscripten_environ_constructor = (Module["___emscripten_environ_constructor"] = function () {
      return Module["asm"]["___emscripten_environ_constructor"].apply(null, arguments);
    });
    var ___errno_location = (Module["___errno_location"] = function () {
      return Module["asm"]["___errno_location"].apply(null, arguments);
    });
    var __get_daylight = (Module["__get_daylight"] = function () {
      return Module["asm"]["__get_daylight"].apply(null, arguments);
    });
    var __get_timezone = (Module["__get_timezone"] = function () {
      return Module["asm"]["__get_timezone"].apply(null, arguments);
    });
    var __get_tzname = (Module["__get_tzname"] = function () {
      return Module["asm"]["__get_tzname"].apply(null, arguments);
    });
    var _boxaDestroy = (Module["_boxaDestroy"] = function () {
      return Module["asm"]["_boxaDestroy"].apply(null, arguments);
    });
    var _emscripten_bind_BoolPtr___destroy___0 = (Module["_emscripten_bind_BoolPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_BoolPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_BoxPtr___destroy___0 = (Module["_emscripten_bind_BoxPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_BoxPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Box___destroy___0 = (Module["_emscripten_bind_Box___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Box___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Box_get_h_0 = (Module["_emscripten_bind_Box_get_h_0"] = function () {
      return Module["asm"]["_emscripten_bind_Box_get_h_0"].apply(null, arguments);
    });
    var _emscripten_bind_Box_get_refcount_0 = (Module["_emscripten_bind_Box_get_refcount_0"] = function () {
      return Module["asm"]["_emscripten_bind_Box_get_refcount_0"].apply(null, arguments);
    });
    var _emscripten_bind_Box_get_w_0 = (Module["_emscripten_bind_Box_get_w_0"] = function () {
      return Module["asm"]["_emscripten_bind_Box_get_w_0"].apply(null, arguments);
    });
    var _emscripten_bind_Box_get_x_0 = (Module["_emscripten_bind_Box_get_x_0"] = function () {
      return Module["asm"]["_emscripten_bind_Box_get_x_0"].apply(null, arguments);
    });
    var _emscripten_bind_Box_get_y_0 = (Module["_emscripten_bind_Box_get_y_0"] = function () {
      return Module["asm"]["_emscripten_bind_Box_get_y_0"].apply(null, arguments);
    });
    var _emscripten_bind_Boxa___destroy___0 = (Module["_emscripten_bind_Boxa___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Boxa___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Boxa_get_box_0 = (Module["_emscripten_bind_Boxa_get_box_0"] = function () {
      return Module["asm"]["_emscripten_bind_Boxa_get_box_0"].apply(null, arguments);
    });
    var _emscripten_bind_Boxa_get_n_0 = (Module["_emscripten_bind_Boxa_get_n_0"] = function () {
      return Module["asm"]["_emscripten_bind_Boxa_get_n_0"].apply(null, arguments);
    });
    var _emscripten_bind_Boxa_get_nalloc_0 = (Module["_emscripten_bind_Boxa_get_nalloc_0"] = function () {
      return Module["asm"]["_emscripten_bind_Boxa_get_nalloc_0"].apply(null, arguments);
    });
    var _emscripten_bind_Boxa_get_refcount_0 = (Module["_emscripten_bind_Boxa_get_refcount_0"] = function () {
      return Module["asm"]["_emscripten_bind_Boxa_get_refcount_0"].apply(null, arguments);
    });
    var _emscripten_bind_ChoiceIterator_ChoiceIterator_1 = (Module["_emscripten_bind_ChoiceIterator_ChoiceIterator_1"] = function () {
      return Module["asm"]["_emscripten_bind_ChoiceIterator_ChoiceIterator_1"].apply(null, arguments);
    });
    var _emscripten_bind_ChoiceIterator_Confidence_0 = (Module["_emscripten_bind_ChoiceIterator_Confidence_0"] = function () {
      return Module["asm"]["_emscripten_bind_ChoiceIterator_Confidence_0"].apply(null, arguments);
    });
    var _emscripten_bind_ChoiceIterator_GetUTF8Text_0 = (Module["_emscripten_bind_ChoiceIterator_GetUTF8Text_0"] = function () {
      return Module["asm"]["_emscripten_bind_ChoiceIterator_GetUTF8Text_0"].apply(null, arguments);
    });
    var _emscripten_bind_ChoiceIterator_Next_0 = (Module["_emscripten_bind_ChoiceIterator_Next_0"] = function () {
      return Module["asm"]["_emscripten_bind_ChoiceIterator_Next_0"].apply(null, arguments);
    });
    var _emscripten_bind_ChoiceIterator___destroy___0 = (Module["_emscripten_bind_ChoiceIterator___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_ChoiceIterator___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Dawg___destroy___0 = (Module["_emscripten_bind_Dawg___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Dawg___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_DoublePtr___destroy___0 = (Module["_emscripten_bind_DoublePtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_DoublePtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_ETEXT_DESC___destroy___0 = (Module["_emscripten_bind_ETEXT_DESC___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_ETEXT_DESC___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_FloatPtr___destroy___0 = (Module["_emscripten_bind_FloatPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_FloatPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_IntPtr___destroy___0 = (Module["_emscripten_bind_IntPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_IntPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_LongStarPtr___destroy___0 = (Module["_emscripten_bind_LongStarPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_LongStarPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_OSBestResult___destroy___0 = (Module["_emscripten_bind_OSBestResult___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_OSBestResult___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_OSBestResult_get_oconfidence_0 = (Module["_emscripten_bind_OSBestResult_get_oconfidence_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSBestResult_get_oconfidence_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSBestResult_get_orientation_id_0 = (Module["_emscripten_bind_OSBestResult_get_orientation_id_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSBestResult_get_orientation_id_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSBestResult_get_sconfidence_0 = (Module["_emscripten_bind_OSBestResult_get_sconfidence_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSBestResult_get_sconfidence_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSBestResult_get_script_id_0 = (Module["_emscripten_bind_OSBestResult_get_script_id_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSBestResult_get_script_id_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSResults_OSResults_0 = (Module["_emscripten_bind_OSResults_OSResults_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSResults_OSResults_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSResults___destroy___0 = (Module["_emscripten_bind_OSResults___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_OSResults___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_OSResults_get_best_result_0 = (Module["_emscripten_bind_OSResults_get_best_result_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSResults_get_best_result_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSResults_get_unicharset_0 = (Module["_emscripten_bind_OSResults_get_unicharset_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSResults_get_unicharset_0"].apply(null, arguments);
    });
    var _emscripten_bind_OSResults_print_scores_0 = (Module["_emscripten_bind_OSResults_print_scores_0"] = function () {
      return Module["asm"]["_emscripten_bind_OSResults_print_scores_0"].apply(null, arguments);
    });
    var _emscripten_bind_Orientation___destroy___0 = (Module["_emscripten_bind_Orientation___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Orientation___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Baseline_5 = (Module["_emscripten_bind_PageIterator_Baseline_5"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Baseline_5"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Begin_0 = (Module["_emscripten_bind_PageIterator_Begin_0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Begin_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_BlockPolygon_0 = (Module["_emscripten_bind_PageIterator_BlockPolygon_0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_BlockPolygon_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_BlockType_0 = (Module["_emscripten_bind_PageIterator_BlockType_0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_BlockType_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_BoundingBoxInternal_5 = (Module["_emscripten_bind_PageIterator_BoundingBoxInternal_5"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_BoundingBoxInternal_5"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_BoundingBox_5 = (Module["_emscripten_bind_PageIterator_BoundingBox_5"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_BoundingBox_5"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_BoundingBox_6 = (Module["_emscripten_bind_PageIterator_BoundingBox_6"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_BoundingBox_6"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Cmp_1 = (Module["_emscripten_bind_PageIterator_Cmp_1"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Cmp_1"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Empty_1 = (Module["_emscripten_bind_PageIterator_Empty_1"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Empty_1"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_GetBinaryImage_1 = (Module["_emscripten_bind_PageIterator_GetBinaryImage_1"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_GetBinaryImage_1"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_GetImage_5 = (Module["_emscripten_bind_PageIterator_GetImage_5"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_GetImage_5"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_IsAtBeginningOf_1 = (Module["_emscripten_bind_PageIterator_IsAtBeginningOf_1"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_IsAtBeginningOf_1"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_IsAtFinalElement_2 = (Module["_emscripten_bind_PageIterator_IsAtFinalElement_2"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_IsAtFinalElement_2"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_IsWithinFirstTextlineOfParagraph_0 = (Module[
      "_emscripten_bind_PageIterator_IsWithinFirstTextlineOfParagraph_0"
    ] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_IsWithinFirstTextlineOfParagraph_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Next_1 = (Module["_emscripten_bind_PageIterator_Next_1"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Next_1"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_Orientation_4 = (Module["_emscripten_bind_PageIterator_Orientation_4"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_Orientation_4"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_ParagraphInfo_4 = (Module["_emscripten_bind_PageIterator_ParagraphInfo_4"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_ParagraphInfo_4"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_RestartParagraph_0 = (Module["_emscripten_bind_PageIterator_RestartParagraph_0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_RestartParagraph_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_RestartRow_0 = (Module["_emscripten_bind_PageIterator_RestartRow_0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator_RestartRow_0"].apply(null, arguments);
    });
    var _emscripten_bind_PageIterator_SetBoundingBoxComponents_2 = (Module["_emscripten_bind_PageIterator_SetBoundingBoxComponents_2"] =
      function () {
        return Module["asm"]["_emscripten_bind_PageIterator_SetBoundingBoxComponents_2"].apply(null, arguments);
      });
    var _emscripten_bind_PageIterator___destroy___0 = (Module["_emscripten_bind_PageIterator___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_PageIterator___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_ParagraphJustification___destroy___0 = (Module["_emscripten_bind_ParagraphJustification___destroy___0"] =
      function () {
        return Module["asm"]["_emscripten_bind_ParagraphJustification___destroy___0"].apply(null, arguments);
      });
    var _emscripten_bind_PixColormap___destroy___0 = (Module["_emscripten_bind_PixColormap___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_PixColormap___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_PixColormap_get_array_0 = (Module["_emscripten_bind_PixColormap_get_array_0"] = function () {
      return Module["asm"]["_emscripten_bind_PixColormap_get_array_0"].apply(null, arguments);
    });
    var _emscripten_bind_PixColormap_get_depth_0 = (Module["_emscripten_bind_PixColormap_get_depth_0"] = function () {
      return Module["asm"]["_emscripten_bind_PixColormap_get_depth_0"].apply(null, arguments);
    });
    var _emscripten_bind_PixColormap_get_n_0 = (Module["_emscripten_bind_PixColormap_get_n_0"] = function () {
      return Module["asm"]["_emscripten_bind_PixColormap_get_n_0"].apply(null, arguments);
    });
    var _emscripten_bind_PixColormap_get_nalloc_0 = (Module["_emscripten_bind_PixColormap_get_nalloc_0"] = function () {
      return Module["asm"]["_emscripten_bind_PixColormap_get_nalloc_0"].apply(null, arguments);
    });
    var _emscripten_bind_PixPtr___destroy___0 = (Module["_emscripten_bind_PixPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_PixPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix___destroy___0 = (Module["_emscripten_bind_Pix___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_colormap_0 = (Module["_emscripten_bind_Pix_get_colormap_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_colormap_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_d_0 = (Module["_emscripten_bind_Pix_get_d_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_d_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_data_0 = (Module["_emscripten_bind_Pix_get_data_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_data_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_h_0 = (Module["_emscripten_bind_Pix_get_h_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_h_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_informat_0 = (Module["_emscripten_bind_Pix_get_informat_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_informat_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_refcount_0 = (Module["_emscripten_bind_Pix_get_refcount_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_refcount_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_special_0 = (Module["_emscripten_bind_Pix_get_special_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_special_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_spp_0 = (Module["_emscripten_bind_Pix_get_spp_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_spp_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_text_0 = (Module["_emscripten_bind_Pix_get_text_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_text_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_w_0 = (Module["_emscripten_bind_Pix_get_w_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_w_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_wpl_0 = (Module["_emscripten_bind_Pix_get_wpl_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_wpl_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_xres_0 = (Module["_emscripten_bind_Pix_get_xres_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_xres_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pix_get_yres_0 = (Module["_emscripten_bind_Pix_get_yres_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pix_get_yres_0"].apply(null, arguments);
    });
    var _emscripten_bind_PixaPtr___destroy___0 = (Module["_emscripten_bind_PixaPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_PixaPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa___destroy___0 = (Module["_emscripten_bind_Pixa___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa_get_boxa_0 = (Module["_emscripten_bind_Pixa_get_boxa_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa_get_boxa_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa_get_n_0 = (Module["_emscripten_bind_Pixa_get_n_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa_get_n_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa_get_nalloc_0 = (Module["_emscripten_bind_Pixa_get_nalloc_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa_get_nalloc_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa_get_pix_0 = (Module["_emscripten_bind_Pixa_get_pix_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa_get_pix_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pixa_get_refcount_0 = (Module["_emscripten_bind_Pixa_get_refcount_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pixa_get_refcount_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta___destroy___0 = (Module["_emscripten_bind_Pta___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta_get_n_0 = (Module["_emscripten_bind_Pta_get_n_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta_get_n_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta_get_nalloc_0 = (Module["_emscripten_bind_Pta_get_nalloc_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta_get_nalloc_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta_get_refcount_0 = (Module["_emscripten_bind_Pta_get_refcount_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta_get_refcount_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta_get_x_0 = (Module["_emscripten_bind_Pta_get_x_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta_get_x_0"].apply(null, arguments);
    });
    var _emscripten_bind_Pta_get_y_0 = (Module["_emscripten_bind_Pta_get_y_0"] = function () {
      return Module["asm"]["_emscripten_bind_Pta_get_y_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Baseline_5 = (Module["_emscripten_bind_ResultIterator_Baseline_5"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Baseline_5"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Begin_0 = (Module["_emscripten_bind_ResultIterator_Begin_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Begin_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_BlockPolygon_0 = (Module["_emscripten_bind_ResultIterator_BlockPolygon_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_BlockPolygon_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_BlockType_0 = (Module["_emscripten_bind_ResultIterator_BlockType_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_BlockType_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_BoundingBoxInternal_5 = (Module["_emscripten_bind_ResultIterator_BoundingBoxInternal_5"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_BoundingBoxInternal_5"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_BoundingBox_5 = (Module["_emscripten_bind_ResultIterator_BoundingBox_5"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_BoundingBox_5"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_BoundingBox_6 = (Module["_emscripten_bind_ResultIterator_BoundingBox_6"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_BoundingBox_6"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Cmp_1 = (Module["_emscripten_bind_ResultIterator_Cmp_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Cmp_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Confidence_1 = (Module["_emscripten_bind_ResultIterator_Confidence_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Confidence_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Empty_1 = (Module["_emscripten_bind_ResultIterator_Empty_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Empty_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_EquivalentToTruth_1 = (Module["_emscripten_bind_ResultIterator_EquivalentToTruth_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_EquivalentToTruth_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_GetBinaryImage_1 = (Module["_emscripten_bind_ResultIterator_GetBinaryImage_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_GetBinaryImage_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_GetImage_5 = (Module["_emscripten_bind_ResultIterator_GetImage_5"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_GetImage_5"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_GetUTF8Text_1 = (Module["_emscripten_bind_ResultIterator_GetUTF8Text_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_GetUTF8Text_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_HasBlamerInfo_0 = (Module["_emscripten_bind_ResultIterator_HasBlamerInfo_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_HasBlamerInfo_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_HasTruthString_0 = (Module["_emscripten_bind_ResultIterator_HasTruthString_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_HasTruthString_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_IsAtBeginningOf_1 = (Module["_emscripten_bind_ResultIterator_IsAtBeginningOf_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_IsAtBeginningOf_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_IsAtFinalElement_2 = (Module["_emscripten_bind_ResultIterator_IsAtFinalElement_2"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_IsAtFinalElement_2"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_IsWithinFirstTextlineOfParagraph_0 = (Module[
      "_emscripten_bind_ResultIterator_IsWithinFirstTextlineOfParagraph_0"
    ] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_IsWithinFirstTextlineOfParagraph_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Next_1 = (Module["_emscripten_bind_ResultIterator_Next_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Next_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_Orientation_4 = (Module["_emscripten_bind_ResultIterator_Orientation_4"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_Orientation_4"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_ParagraphInfo_4 = (Module["_emscripten_bind_ResultIterator_ParagraphInfo_4"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_ParagraphInfo_4"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_ParagraphIsLtr_0 = (Module["_emscripten_bind_ResultIterator_ParagraphIsLtr_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_ParagraphIsLtr_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_RestartParagraph_0 = (Module["_emscripten_bind_ResultIterator_RestartParagraph_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_RestartParagraph_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_RestartRow_0 = (Module["_emscripten_bind_ResultIterator_RestartRow_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_RestartRow_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_ResultIterator_1 = (Module["_emscripten_bind_ResultIterator_ResultIterator_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_ResultIterator_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_SetBoundingBoxComponents_2 = (Module["_emscripten_bind_ResultIterator_SetBoundingBoxComponents_2"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_SetBoundingBoxComponents_2"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_SetLineSeparator_1 = (Module["_emscripten_bind_ResultIterator_SetLineSeparator_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_SetLineSeparator_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_SetParagraphSeparator_1 = (Module["_emscripten_bind_ResultIterator_SetParagraphSeparator_1"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_SetParagraphSeparator_1"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_SymbolIsDropcap_0 = (Module["_emscripten_bind_ResultIterator_SymbolIsDropcap_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_SymbolIsDropcap_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_SymbolIsSubscript_0 = (Module["_emscripten_bind_ResultIterator_SymbolIsSubscript_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_SymbolIsSubscript_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_SymbolIsSuperscript_0 = (Module["_emscripten_bind_ResultIterator_SymbolIsSuperscript_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_SymbolIsSuperscript_0"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_WordDirection_0 = (Module["_emscripten_bind_ResultIterator_WordDirection_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_WordDirection_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_WordFontAttributes_8 = (Module["_emscripten_bind_ResultIterator_WordFontAttributes_8"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_WordFontAttributes_8"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_WordIsFromDictionary_0 = (Module["_emscripten_bind_ResultIterator_WordIsFromDictionary_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_WordIsFromDictionary_0"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_WordIsNumeric_0 = (Module["_emscripten_bind_ResultIterator_WordIsNumeric_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_WordIsNumeric_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_WordLattice_1 = (Module["_emscripten_bind_ResultIterator_WordLattice_1"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_WordLattice_1"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator_WordNormedUTF8Text_0 = (Module["_emscripten_bind_ResultIterator_WordNormedUTF8Text_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_WordNormedUTF8Text_0"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_WordRecognitionLanguage_0 = (Module["_emscripten_bind_ResultIterator_WordRecognitionLanguage_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_ResultIterator_WordRecognitionLanguage_0"].apply(null, arguments);
      });
    var _emscripten_bind_ResultIterator_WordTruthUTF8Text_0 = (Module["_emscripten_bind_ResultIterator_WordTruthUTF8Text_0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator_WordTruthUTF8Text_0"].apply(null, arguments);
    });
    var _emscripten_bind_ResultIterator___destroy___0 = (Module["_emscripten_bind_ResultIterator___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_ResultIterator___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_AdaptToWordStr_2 = (Module["_emscripten_bind_TessBaseAPI_AdaptToWordStr_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_AdaptToWordStr_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_AllWordConfidences_0 = (Module["_emscripten_bind_TessBaseAPI_AllWordConfidences_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_AllWordConfidences_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_AnalyseLayout_0 = (Module["_emscripten_bind_TessBaseAPI_AnalyseLayout_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_AnalyseLayout_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_AnalyseLayout_1 = (Module["_emscripten_bind_TessBaseAPI_AnalyseLayout_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_AnalyseLayout_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_CatchSignals_0 = (Module["_emscripten_bind_TessBaseAPI_CatchSignals_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_CatchSignals_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_ClearAdaptiveClassifier_0 = (Module["_emscripten_bind_TessBaseAPI_ClearAdaptiveClassifier_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_TessBaseAPI_ClearAdaptiveClassifier_0"].apply(null, arguments);
      });
    var _emscripten_bind_TessBaseAPI_ClearPersistentCache_0 = (Module["_emscripten_bind_TessBaseAPI_ClearPersistentCache_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_ClearPersistentCache_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_Clear_0 = (Module["_emscripten_bind_TessBaseAPI_Clear_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_Clear_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_DetectOS_1 = (Module["_emscripten_bind_TessBaseAPI_DetectOS_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_DetectOS_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_End_0 = (Module["_emscripten_bind_TessBaseAPI_End_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_End_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetBoolVariable_2 = (Module["_emscripten_bind_TessBaseAPI_GetBoolVariable_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetBoolVariable_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetBoxText_1 = (Module["_emscripten_bind_TessBaseAPI_GetBoxText_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetBoxText_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetComponentImages_4 = (Module["_emscripten_bind_TessBaseAPI_GetComponentImages_4"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetComponentImages_4"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetComponentImages_7 = (Module["_emscripten_bind_TessBaseAPI_GetComponentImages_7"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetComponentImages_7"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetConnectedComponents_1 = (Module["_emscripten_bind_TessBaseAPI_GetConnectedComponents_1"] =
      function () {
        return Module["asm"]["_emscripten_bind_TessBaseAPI_GetConnectedComponents_1"].apply(null, arguments);
      });
    var _emscripten_bind_TessBaseAPI_GetDatapath_0 = (Module["_emscripten_bind_TessBaseAPI_GetDatapath_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetDatapath_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetDawg_1 = (Module["_emscripten_bind_TessBaseAPI_GetDawg_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetDawg_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetDoubleVariable_2 = (Module["_emscripten_bind_TessBaseAPI_GetDoubleVariable_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetDoubleVariable_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetHOCRText_1 = (Module["_emscripten_bind_TessBaseAPI_GetHOCRText_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetHOCRText_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetInitLanguagesAsString_0 = (Module["_emscripten_bind_TessBaseAPI_GetInitLanguagesAsString_0"] =
      function () {
        return Module["asm"]["_emscripten_bind_TessBaseAPI_GetInitLanguagesAsString_0"].apply(null, arguments);
      });
    var _emscripten_bind_TessBaseAPI_GetInputImage_0 = (Module["_emscripten_bind_TessBaseAPI_GetInputImage_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetInputImage_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetInputName_0 = (Module["_emscripten_bind_TessBaseAPI_GetInputName_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetInputName_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetIntVariable_2 = (Module["_emscripten_bind_TessBaseAPI_GetIntVariable_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetIntVariable_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetIterator_0 = (Module["_emscripten_bind_TessBaseAPI_GetIterator_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetIterator_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetOsdText_1 = (Module["_emscripten_bind_TessBaseAPI_GetOsdText_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetOsdText_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetPageSegMode_0 = (Module["_emscripten_bind_TessBaseAPI_GetPageSegMode_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetPageSegMode_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetRegions_1 = (Module["_emscripten_bind_TessBaseAPI_GetRegions_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetRegions_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetSourceYResolution_0 = (Module["_emscripten_bind_TessBaseAPI_GetSourceYResolution_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetSourceYResolution_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetStringVariable_1 = (Module["_emscripten_bind_TessBaseAPI_GetStringVariable_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetStringVariable_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetStrips_2 = (Module["_emscripten_bind_TessBaseAPI_GetStrips_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetStrips_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetTSVText_1 = (Module["_emscripten_bind_TessBaseAPI_GetTSVText_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetTSVText_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetTextlines_2 = (Module["_emscripten_bind_TessBaseAPI_GetTextlines_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetTextlines_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetTextlines_5 = (Module["_emscripten_bind_TessBaseAPI_GetTextlines_5"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetTextlines_5"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetThresholdedImageScaleFactor_0 = (Module[
      "_emscripten_bind_TessBaseAPI_GetThresholdedImageScaleFactor_0"
    ] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetThresholdedImageScaleFactor_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetThresholdedImage_0 = (Module["_emscripten_bind_TessBaseAPI_GetThresholdedImage_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetThresholdedImage_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetUNLVText_0 = (Module["_emscripten_bind_TessBaseAPI_GetUNLVText_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetUNLVText_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetUTF8Text_0 = (Module["_emscripten_bind_TessBaseAPI_GetUTF8Text_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetUTF8Text_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetUnichar_1 = (Module["_emscripten_bind_TessBaseAPI_GetUnichar_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetUnichar_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_GetWords_1 = (Module["_emscripten_bind_TessBaseAPI_GetWords_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_GetWords_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_InitForAnalysePage_0 = (Module["_emscripten_bind_TessBaseAPI_InitForAnalysePage_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_InitForAnalysePage_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_InitLangMod_2 = (Module["_emscripten_bind_TessBaseAPI_InitLangMod_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_InitLangMod_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_Init_2 = (Module["_emscripten_bind_TessBaseAPI_Init_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_Init_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_Init_3 = (Module["_emscripten_bind_TessBaseAPI_Init_3"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_Init_3"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_IsValidCharacter_1 = (Module["_emscripten_bind_TessBaseAPI_IsValidCharacter_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_IsValidCharacter_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_IsValidWord_1 = (Module["_emscripten_bind_TessBaseAPI_IsValidWord_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_IsValidWord_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_MeanTextConf_0 = (Module["_emscripten_bind_TessBaseAPI_MeanTextConf_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_MeanTextConf_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_NumDawgs_0 = (Module["_emscripten_bind_TessBaseAPI_NumDawgs_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_NumDawgs_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_PrintVariables_0 = (Module["_emscripten_bind_TessBaseAPI_PrintVariables_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_PrintVariables_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_ReadConfigFile_1 = (Module["_emscripten_bind_TessBaseAPI_ReadConfigFile_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_ReadConfigFile_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_ReadDebugConfigFile_1 = (Module["_emscripten_bind_TessBaseAPI_ReadDebugConfigFile_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_ReadDebugConfigFile_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_RecognizeForChopTest_1 = (Module["_emscripten_bind_TessBaseAPI_RecognizeForChopTest_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_RecognizeForChopTest_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_Recognize_1 = (Module["_emscripten_bind_TessBaseAPI_Recognize_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_Recognize_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetDebugVariable_2 = (Module["_emscripten_bind_TessBaseAPI_SetDebugVariable_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetDebugVariable_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetImage_1 = (Module["_emscripten_bind_TessBaseAPI_SetImage_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetImage_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetImage_5 = (Module["_emscripten_bind_TessBaseAPI_SetImage_5"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetImage_5"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetInputImage_1 = (Module["_emscripten_bind_TessBaseAPI_SetInputImage_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetInputImage_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetInputName_1 = (Module["_emscripten_bind_TessBaseAPI_SetInputName_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetInputName_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetOutputName_1 = (Module["_emscripten_bind_TessBaseAPI_SetOutputName_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetOutputName_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetPageSegMode_1 = (Module["_emscripten_bind_TessBaseAPI_SetPageSegMode_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetPageSegMode_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetRectangle_4 = (Module["_emscripten_bind_TessBaseAPI_SetRectangle_4"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetRectangle_4"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetSourceResolution_1 = (Module["_emscripten_bind_TessBaseAPI_SetSourceResolution_1"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetSourceResolution_1"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_SetVariable_2 = (Module["_emscripten_bind_TessBaseAPI_SetVariable_2"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_SetVariable_2"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_TessBaseAPI_0 = (Module["_emscripten_bind_TessBaseAPI_TessBaseAPI_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_TessBaseAPI_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_TesseractRect_7 = (Module["_emscripten_bind_TessBaseAPI_TesseractRect_7"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_TesseractRect_7"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_Version_0 = (Module["_emscripten_bind_TessBaseAPI_Version_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_Version_0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI___destroy___0 = (Module["_emscripten_bind_TessBaseAPI___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_TessBaseAPI_oem_0 = (Module["_emscripten_bind_TessBaseAPI_oem_0"] = function () {
      return Module["asm"]["_emscripten_bind_TessBaseAPI_oem_0"].apply(null, arguments);
    });
    var _emscripten_bind_TextlineOrder___destroy___0 = (Module["_emscripten_bind_TextlineOrder___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_TextlineOrder___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_UNICHARSET___destroy___0 = (Module["_emscripten_bind_UNICHARSET___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_UNICHARSET___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_UNICHARSET_get_script_from_script_id_1 = (Module["_emscripten_bind_UNICHARSET_get_script_from_script_id_1"] =
      function () {
        return Module["asm"]["_emscripten_bind_UNICHARSET_get_script_from_script_id_1"].apply(null, arguments);
      });
    var _emscripten_bind_UNICHARSET_get_script_id_from_name_1 = (Module["_emscripten_bind_UNICHARSET_get_script_id_from_name_1"] =
      function () {
        return Module["asm"]["_emscripten_bind_UNICHARSET_get_script_id_from_name_1"].apply(null, arguments);
      });
    var _emscripten_bind_UNICHARSET_get_script_table_size_0 = (Module["_emscripten_bind_UNICHARSET_get_script_table_size_0"] = function () {
      return Module["asm"]["_emscripten_bind_UNICHARSET_get_script_table_size_0"].apply(null, arguments);
    });
    var _emscripten_bind_VoidPtr___destroy___0 = (Module["_emscripten_bind_VoidPtr___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_VoidPtr___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_WordChoiceIterator_Confidence_0 = (Module["_emscripten_bind_WordChoiceIterator_Confidence_0"] = function () {
      return Module["asm"]["_emscripten_bind_WordChoiceIterator_Confidence_0"].apply(null, arguments);
    });
    var _emscripten_bind_WordChoiceIterator_GetUTF8Text_0 = (Module["_emscripten_bind_WordChoiceIterator_GetUTF8Text_0"] = function () {
      return Module["asm"]["_emscripten_bind_WordChoiceIterator_GetUTF8Text_0"].apply(null, arguments);
    });
    var _emscripten_bind_WordChoiceIterator_Next_0 = (Module["_emscripten_bind_WordChoiceIterator_Next_0"] = function () {
      return Module["asm"]["_emscripten_bind_WordChoiceIterator_Next_0"].apply(null, arguments);
    });
    var _emscripten_bind_WordChoiceIterator_WordChoiceIterator_1 = (Module["_emscripten_bind_WordChoiceIterator_WordChoiceIterator_1"] =
      function () {
        return Module["asm"]["_emscripten_bind_WordChoiceIterator_WordChoiceIterator_1"].apply(null, arguments);
      });
    var _emscripten_bind_WordChoiceIterator___destroy___0 = (Module["_emscripten_bind_WordChoiceIterator___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_WordChoiceIterator___destroy___0"].apply(null, arguments);
    });
    var _emscripten_bind_WritingDirection___destroy___0 = (Module["_emscripten_bind_WritingDirection___destroy___0"] = function () {
      return Module["asm"]["_emscripten_bind_WritingDirection___destroy___0"].apply(null, arguments);
    });
    var _emscripten_enum_OcrEngineMode_OEM_COUNT = (Module["_emscripten_enum_OcrEngineMode_OEM_COUNT"] = function () {
      return Module["asm"]["_emscripten_enum_OcrEngineMode_OEM_COUNT"].apply(null, arguments);
    });
    var _emscripten_enum_OcrEngineMode_OEM_DEFAULT = (Module["_emscripten_enum_OcrEngineMode_OEM_DEFAULT"] = function () {
      return Module["asm"]["_emscripten_enum_OcrEngineMode_OEM_DEFAULT"].apply(null, arguments);
    });
    var _emscripten_enum_OcrEngineMode_OEM_LSTM_ONLY = (Module["_emscripten_enum_OcrEngineMode_OEM_LSTM_ONLY"] = function () {
      return Module["asm"]["_emscripten_enum_OcrEngineMode_OEM_LSTM_ONLY"].apply(null, arguments);
    });
    var _emscripten_enum_OcrEngineMode_OEM_TESSERACT_LSTM_COMBINED = (Module["_emscripten_enum_OcrEngineMode_OEM_TESSERACT_LSTM_COMBINED"] =
      function () {
        return Module["asm"]["_emscripten_enum_OcrEngineMode_OEM_TESSERACT_LSTM_COMBINED"].apply(null, arguments);
      });
    var _emscripten_enum_OcrEngineMode_OEM_TESSERACT_ONLY = (Module["_emscripten_enum_OcrEngineMode_OEM_TESSERACT_ONLY"] = function () {
      return Module["asm"]["_emscripten_enum_OcrEngineMode_OEM_TESSERACT_ONLY"].apply(null, arguments);
    });
    var _emscripten_enum_Orientation__ORIENTATION_PAGE_DOWN = (Module["_emscripten_enum_Orientation__ORIENTATION_PAGE_DOWN"] = function () {
      return Module["asm"]["_emscripten_enum_Orientation__ORIENTATION_PAGE_DOWN"].apply(null, arguments);
    });
    var _emscripten_enum_Orientation__ORIENTATION_PAGE_LEFT = (Module["_emscripten_enum_Orientation__ORIENTATION_PAGE_LEFT"] = function () {
      return Module["asm"]["_emscripten_enum_Orientation__ORIENTATION_PAGE_LEFT"].apply(null, arguments);
    });
    var _emscripten_enum_Orientation__ORIENTATION_PAGE_RIGHT = (Module["_emscripten_enum_Orientation__ORIENTATION_PAGE_RIGHT"] =
      function () {
        return Module["asm"]["_emscripten_enum_Orientation__ORIENTATION_PAGE_RIGHT"].apply(null, arguments);
      });
    var _emscripten_enum_Orientation__ORIENTATION_PAGE_UP = (Module["_emscripten_enum_Orientation__ORIENTATION_PAGE_UP"] = function () {
      return Module["asm"]["_emscripten_enum_Orientation__ORIENTATION_PAGE_UP"].apply(null, arguments);
    });
    var _emscripten_enum_PageIteratorLevel_RIL_BLOCK = (Module["_emscripten_enum_PageIteratorLevel_RIL_BLOCK"] = function () {
      return Module["asm"]["_emscripten_enum_PageIteratorLevel_RIL_BLOCK"].apply(null, arguments);
    });
    var _emscripten_enum_PageIteratorLevel_RIL_PARA = (Module["_emscripten_enum_PageIteratorLevel_RIL_PARA"] = function () {
      return Module["asm"]["_emscripten_enum_PageIteratorLevel_RIL_PARA"].apply(null, arguments);
    });
    var _emscripten_enum_PageIteratorLevel_RIL_SYMBOL = (Module["_emscripten_enum_PageIteratorLevel_RIL_SYMBOL"] = function () {
      return Module["asm"]["_emscripten_enum_PageIteratorLevel_RIL_SYMBOL"].apply(null, arguments);
    });
    var _emscripten_enum_PageIteratorLevel_RIL_TEXTLINE = (Module["_emscripten_enum_PageIteratorLevel_RIL_TEXTLINE"] = function () {
      return Module["asm"]["_emscripten_enum_PageIteratorLevel_RIL_TEXTLINE"].apply(null, arguments);
    });
    var _emscripten_enum_PageIteratorLevel_RIL_WORD = (Module["_emscripten_enum_PageIteratorLevel_RIL_WORD"] = function () {
      return Module["asm"]["_emscripten_enum_PageIteratorLevel_RIL_WORD"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_AUTO = (Module["_emscripten_enum_PageSegMode_PSM_AUTO"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_AUTO"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_AUTO_ONLY = (Module["_emscripten_enum_PageSegMode_PSM_AUTO_ONLY"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_AUTO_ONLY"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_AUTO_OSD = (Module["_emscripten_enum_PageSegMode_PSM_AUTO_OSD"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_AUTO_OSD"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_CIRCLE_WORD = (Module["_emscripten_enum_PageSegMode_PSM_CIRCLE_WORD"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_CIRCLE_WORD"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_COUNT = (Module["_emscripten_enum_PageSegMode_PSM_COUNT"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_COUNT"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_OSD_ONLY = (Module["_emscripten_enum_PageSegMode_PSM_OSD_ONLY"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_OSD_ONLY"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_RAW_LINE = (Module["_emscripten_enum_PageSegMode_PSM_RAW_LINE"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_RAW_LINE"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK_VERT_TEXT = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK_VERT_TEXT"] =
      function () {
        return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK_VERT_TEXT"].apply(null, arguments);
      });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_CHAR = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_CHAR"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_CHAR"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_COLUMN = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_COLUMN"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_COLUMN"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_LINE = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_LINE"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_LINE"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SINGLE_WORD = (Module["_emscripten_enum_PageSegMode_PSM_SINGLE_WORD"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SINGLE_WORD"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SPARSE_TEXT = (Module["_emscripten_enum_PageSegMode_PSM_SPARSE_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SPARSE_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PageSegMode_PSM_SPARSE_TEXT_OSD = (Module["_emscripten_enum_PageSegMode_PSM_SPARSE_TEXT_OSD"] = function () {
      return Module["asm"]["_emscripten_enum_PageSegMode_PSM_SPARSE_TEXT_OSD"].apply(null, arguments);
    });
    var _emscripten_enum_ParagraphJustification__JUSTIFICATION_CENTER = (Module[
      "_emscripten_enum_ParagraphJustification__JUSTIFICATION_CENTER"
    ] = function () {
      return Module["asm"]["_emscripten_enum_ParagraphJustification__JUSTIFICATION_CENTER"].apply(null, arguments);
    });
    var _emscripten_enum_ParagraphJustification__JUSTIFICATION_LEFT = (Module[
      "_emscripten_enum_ParagraphJustification__JUSTIFICATION_LEFT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_ParagraphJustification__JUSTIFICATION_LEFT"].apply(null, arguments);
    });
    var _emscripten_enum_ParagraphJustification__JUSTIFICATION_RIGHT = (Module[
      "_emscripten_enum_ParagraphJustification__JUSTIFICATION_RIGHT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_ParagraphJustification__JUSTIFICATION_RIGHT"].apply(null, arguments);
    });
    var _emscripten_enum_ParagraphJustification__JUSTIFICATION_UNKNOWN = (Module[
      "_emscripten_enum_ParagraphJustification__JUSTIFICATION_UNKNOWN"
    ] = function () {
      return Module["asm"]["_emscripten_enum_ParagraphJustification__JUSTIFICATION_UNKNOWN"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_CAPTION_TEXT = (Module["_emscripten_enum_PolyBlockType_PT_CAPTION_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_CAPTION_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_COUNT = (Module["_emscripten_enum_PolyBlockType_PT_COUNT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_COUNT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_EQUATION = (Module["_emscripten_enum_PolyBlockType_PT_EQUATION"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_EQUATION"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_FLOWING_IMAGE = (Module["_emscripten_enum_PolyBlockType_PT_FLOWING_IMAGE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_FLOWING_IMAGE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_FLOWING_TEXT = (Module["_emscripten_enum_PolyBlockType_PT_FLOWING_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_FLOWING_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_HEADING_IMAGE = (Module["_emscripten_enum_PolyBlockType_PT_HEADING_IMAGE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_HEADING_IMAGE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_HEADING_TEXT = (Module["_emscripten_enum_PolyBlockType_PT_HEADING_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_HEADING_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_HORZ_LINE = (Module["_emscripten_enum_PolyBlockType_PT_HORZ_LINE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_HORZ_LINE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_INLINE_EQUATION = (Module["_emscripten_enum_PolyBlockType_PT_INLINE_EQUATION"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_INLINE_EQUATION"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_NOISE = (Module["_emscripten_enum_PolyBlockType_PT_NOISE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_NOISE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_PULLOUT_IMAGE = (Module["_emscripten_enum_PolyBlockType_PT_PULLOUT_IMAGE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_PULLOUT_IMAGE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_PULLOUT_TEXT = (Module["_emscripten_enum_PolyBlockType_PT_PULLOUT_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_PULLOUT_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_TABLE = (Module["_emscripten_enum_PolyBlockType_PT_TABLE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_TABLE"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_UNKNOWN = (Module["_emscripten_enum_PolyBlockType_PT_UNKNOWN"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_UNKNOWN"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_VERTICAL_TEXT = (Module["_emscripten_enum_PolyBlockType_PT_VERTICAL_TEXT"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_VERTICAL_TEXT"].apply(null, arguments);
    });
    var _emscripten_enum_PolyBlockType_PT_VERT_LINE = (Module["_emscripten_enum_PolyBlockType_PT_VERT_LINE"] = function () {
      return Module["asm"]["_emscripten_enum_PolyBlockType_PT_VERT_LINE"].apply(null, arguments);
    });
    var _emscripten_enum_StrongScriptDirection_DIR_LEFT_TO_RIGHT = (Module["_emscripten_enum_StrongScriptDirection_DIR_LEFT_TO_RIGHT"] =
      function () {
        return Module["asm"]["_emscripten_enum_StrongScriptDirection_DIR_LEFT_TO_RIGHT"].apply(null, arguments);
      });
    var _emscripten_enum_StrongScriptDirection_DIR_MIX = (Module["_emscripten_enum_StrongScriptDirection_DIR_MIX"] = function () {
      return Module["asm"]["_emscripten_enum_StrongScriptDirection_DIR_MIX"].apply(null, arguments);
    });
    var _emscripten_enum_StrongScriptDirection_DIR_NEUTRAL = (Module["_emscripten_enum_StrongScriptDirection_DIR_NEUTRAL"] = function () {
      return Module["asm"]["_emscripten_enum_StrongScriptDirection_DIR_NEUTRAL"].apply(null, arguments);
    });
    var _emscripten_enum_StrongScriptDirection_DIR_RIGHT_TO_LEFT = (Module["_emscripten_enum_StrongScriptDirection_DIR_RIGHT_TO_LEFT"] =
      function () {
        return Module["asm"]["_emscripten_enum_StrongScriptDirection_DIR_RIGHT_TO_LEFT"].apply(null, arguments);
      });
    var _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_LEFT_TO_RIGHT = (Module[
      "_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_LEFT_TO_RIGHT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_LEFT_TO_RIGHT"].apply(null, arguments);
    });
    var _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_RIGHT_TO_LEFT = (Module[
      "_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_RIGHT_TO_LEFT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_RIGHT_TO_LEFT"].apply(null, arguments);
    });
    var _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_TOP_TO_BOTTOM = (Module[
      "_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_TOP_TO_BOTTOM"
    ] = function () {
      return Module["asm"]["_emscripten_enum_TextlineOrder__TEXTLINE_ORDER_TOP_TO_BOTTOM"].apply(null, arguments);
    });
    var _emscripten_enum_WritingDirection__WRITING_DIRECTION_LEFT_TO_RIGHT = (Module[
      "_emscripten_enum_WritingDirection__WRITING_DIRECTION_LEFT_TO_RIGHT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_WritingDirection__WRITING_DIRECTION_LEFT_TO_RIGHT"].apply(null, arguments);
    });
    var _emscripten_enum_WritingDirection__WRITING_DIRECTION_RIGHT_TO_LEFT = (Module[
      "_emscripten_enum_WritingDirection__WRITING_DIRECTION_RIGHT_TO_LEFT"
    ] = function () {
      return Module["asm"]["_emscripten_enum_WritingDirection__WRITING_DIRECTION_RIGHT_TO_LEFT"].apply(null, arguments);
    });
    var _emscripten_enum_WritingDirection__WRITING_DIRECTION_TOP_TO_BOTTOM = (Module[
      "_emscripten_enum_WritingDirection__WRITING_DIRECTION_TOP_TO_BOTTOM"
    ] = function () {
      return Module["asm"]["_emscripten_enum_WritingDirection__WRITING_DIRECTION_TOP_TO_BOTTOM"].apply(null, arguments);
    });
    var _free = (Module["_free"] = function () {
      return Module["asm"]["_free"].apply(null, arguments);
    });
    var _malloc = (Module["_malloc"] = function () {
      return Module["asm"]["_malloc"].apply(null, arguments);
    });
    var _memalign = (Module["_memalign"] = function () {
      return Module["asm"]["_memalign"].apply(null, arguments);
    });
    var _memset = (Module["_memset"] = function () {
      return Module["asm"]["_memset"].apply(null, arguments);
    });
    var _pixDestroy = (Module["_pixDestroy"] = function () {
      return Module["asm"]["_pixDestroy"].apply(null, arguments);
    });
    var _pixReadHeaderMem = (Module["_pixReadHeaderMem"] = function () {
      return Module["asm"]["_pixReadHeaderMem"].apply(null, arguments);
    });
    var _pixReadMem = (Module["_pixReadMem"] = function () {
      return Module["asm"]["_pixReadMem"].apply(null, arguments);
    });
    var _pixaDestroy = (Module["_pixaDestroy"] = function () {
      return Module["asm"]["_pixaDestroy"].apply(null, arguments);
    });
    var _ptaDestroy = (Module["_ptaDestroy"] = function () {
      return Module["asm"]["_ptaDestroy"].apply(null, arguments);
    });
    var setThrew = (Module["setThrew"] = function () {
      return Module["asm"]["setThrew"].apply(null, arguments);
    });
    var stackAlloc = (Module["stackAlloc"] = function () {
      return Module["asm"]["stackAlloc"].apply(null, arguments);
    });
    var stackRestore = (Module["stackRestore"] = function () {
      return Module["asm"]["stackRestore"].apply(null, arguments);
    });
    var stackSave = (Module["stackSave"] = function () {
      return Module["asm"]["stackSave"].apply(null, arguments);
    });
    var dynCall_i = (Module["dynCall_i"] = function () {
      return Module["asm"]["dynCall_i"].apply(null, arguments);
    });
    var dynCall_ii = (Module["dynCall_ii"] = function () {
      return Module["asm"]["dynCall_ii"].apply(null, arguments);
    });
    var dynCall_iii = (Module["dynCall_iii"] = function () {
      return Module["asm"]["dynCall_iii"].apply(null, arguments);
    });
    var dynCall_iiii = (Module["dynCall_iiii"] = function () {
      return Module["asm"]["dynCall_iiii"].apply(null, arguments);
    });
    var dynCall_iiiii = (Module["dynCall_iiiii"] = function () {
      return Module["asm"]["dynCall_iiiii"].apply(null, arguments);
    });
    var dynCall_iiiiii = (Module["dynCall_iiiiii"] = function () {
      return Module["asm"]["dynCall_iiiiii"].apply(null, arguments);
    });
    var dynCall_v = (Module["dynCall_v"] = function () {
      return Module["asm"]["dynCall_v"].apply(null, arguments);
    });
    var dynCall_vi = (Module["dynCall_vi"] = function () {
      return Module["asm"]["dynCall_vi"].apply(null, arguments);
    });
    var dynCall_vii = (Module["dynCall_vii"] = function () {
      return Module["asm"]["dynCall_vii"].apply(null, arguments);
    });
    var dynCall_viii = (Module["dynCall_viii"] = function () {
      return Module["asm"]["dynCall_viii"].apply(null, arguments);
    });
    var dynCall_viiii = (Module["dynCall_viiii"] = function () {
      return Module["asm"]["dynCall_viiii"].apply(null, arguments);
    });
    var dynCall_viiiii = (Module["dynCall_viiiii"] = function () {
      return Module["asm"]["dynCall_viiiii"].apply(null, arguments);
    });
    var dynCall_viiiiiiiii = (Module["dynCall_viiiiiiiii"] = function () {
      return Module["asm"]["dynCall_viiiiiiiii"].apply(null, arguments);
    });
    Module["asm"] = asm;
    Module["setValue"] = setValue;
    Module["getValue"] = getValue;
    Module["FS"] = FS;
    Module["then"] = function (func) {
      if (Module["calledRun"]) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function () {
          if (old) old();
          func(Module);
        };
      }
      return Module;
    };
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    ExitStatus.prototype = new Error();
    ExitStatus.prototype.constructor = ExitStatus;
    var initialStackTop;
    dependenciesFulfilled = function runCaller() {
      if (!Module["calledRun"]) run();
      if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
    };
    function run(args) {
      args = args || Module["arguments"];
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) return;
      if (Module["calledRun"]) return;
      function doRun() {
        if (Module["calledRun"]) return;
        Module["calledRun"] = true;
        if (ABORT) return;
        ensureInitRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;
    function exit(status, implicit) {
      if (implicit && Module["noExitRuntime"] && status === 0) {
        return;
      }
      if (Module["noExitRuntime"]) {
      } else {
        ABORT = true;
        EXITSTATUS = status;
        STACKTOP = initialStackTop;
        exitRuntime();
        if (Module["onExit"]) Module["onExit"](status);
      }
      Module["quit"](status, new ExitStatus(status));
    }
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      if (what !== undefined) {
        out(what);
        err(what);
        what = JSON.stringify(what);
      } else {
        what = "";
      }
      ABORT = true;
      EXITSTATUS = 1;
      throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    }
    Module["abort"] = abort;
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    Module["noExitRuntime"] = true;
    run();
    function WrapperObject() {}
    WrapperObject.prototype = Object.create(WrapperObject.prototype);
    WrapperObject.prototype.constructor = WrapperObject;
    WrapperObject.prototype.__class__ = WrapperObject;
    WrapperObject.__cache__ = {};
    Module["WrapperObject"] = WrapperObject;
    function getCache(__class__) {
      return (__class__ || WrapperObject).__cache__;
    }
    Module["getCache"] = getCache;
    function wrapPointer(ptr, __class__) {
      var cache = getCache(__class__);
      var ret = cache[ptr];
      if (ret) return ret;
      ret = Object.create((__class__ || WrapperObject).prototype);
      ret.ptr = ptr;
      return (cache[ptr] = ret);
    }
    Module["wrapPointer"] = wrapPointer;
    function castObject(obj, __class__) {
      return wrapPointer(obj.ptr, __class__);
    }
    Module["castObject"] = castObject;
    Module["NULL"] = wrapPointer(0);
    function destroy(obj) {
      if (!obj["__destroy__"]) throw "Error: Cannot destroy object. (Did you create it yourself?)";
      obj["__destroy__"]();
      delete getCache(obj.__class__)[obj.ptr];
    }
    Module["destroy"] = destroy;
    function compare(obj1, obj2) {
      return obj1.ptr === obj2.ptr;
    }
    Module["compare"] = compare;
    function getPointer(obj) {
      return obj.ptr;
    }
    Module["getPointer"] = getPointer;
    function getClass(obj) {
      return obj.__class__;
    }
    Module["getClass"] = getClass;
    var ensureCache = {
      buffer: 0,
      size: 0,
      pos: 0,
      temps: [],
      needed: 0,
      prepare: function () {
        if (ensureCache.needed) {
          for (var i = 0; i < ensureCache.temps.length; i++) {
            Module["_free"](ensureCache.temps[i]);
          }
          ensureCache.temps.length = 0;
          Module["_free"](ensureCache.buffer);
          ensureCache.buffer = 0;
          ensureCache.size += ensureCache.needed;
          ensureCache.needed = 0;
        }
        if (!ensureCache.buffer) {
          ensureCache.size += 128;
          ensureCache.buffer = Module["_malloc"](ensureCache.size);
          assert(ensureCache.buffer);
        }
        ensureCache.pos = 0;
      },
      alloc: function (array, view) {
        assert(ensureCache.buffer);
        var bytes = view.BYTES_PER_ELEMENT;
        var len = array.length * bytes;
        len = (len + 7) & -8;
        var ret;
        if (ensureCache.pos + len >= ensureCache.size) {
          assert(len > 0);
          ensureCache.needed += len;
          ret = Module["_malloc"](len);
          ensureCache.temps.push(ret);
        } else {
          ret = ensureCache.buffer + ensureCache.pos;
          ensureCache.pos += len;
        }
        return ret;
      },
      copy: function (array, view, offset) {
        var offsetShifted = offset;
        var bytes = view.BYTES_PER_ELEMENT;
        switch (bytes) {
          case 2:
            offsetShifted >>= 1;
            break;
          case 4:
            offsetShifted >>= 2;
            break;
          case 8:
            offsetShifted >>= 3;
            break;
        }
        for (var i = 0; i < array.length; i++) {
          view[offsetShifted + i] = array[i];
        }
      }
    };
    function ensureString(value) {
      if (typeof value === "string") {
        var intArray = intArrayFromString(value);
        var offset = ensureCache.alloc(intArray, HEAP8);
        ensureCache.copy(intArray, HEAP8, offset);
        return offset;
      }
      return value;
    }
    function ParagraphJustification() {
      throw "cannot construct a ParagraphJustification, no constructor in IDL";
    }
    ParagraphJustification.prototype = Object.create(WrapperObject.prototype);
    ParagraphJustification.prototype.constructor = ParagraphJustification;
    ParagraphJustification.prototype.__class__ = ParagraphJustification;
    ParagraphJustification.__cache__ = {};
    Module["ParagraphJustification"] = ParagraphJustification;
    ParagraphJustification.prototype["__destroy__"] = ParagraphJustification.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_ParagraphJustification___destroy___0(self);
    };
    function BoolPtr() {
      throw "cannot construct a BoolPtr, no constructor in IDL";
    }
    BoolPtr.prototype = Object.create(WrapperObject.prototype);
    BoolPtr.prototype.constructor = BoolPtr;
    BoolPtr.prototype.__class__ = BoolPtr;
    BoolPtr.__cache__ = {};
    Module["BoolPtr"] = BoolPtr;
    BoolPtr.prototype["__destroy__"] = BoolPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_BoolPtr___destroy___0(self);
    };
    function LongStarPtr() {
      throw "cannot construct a LongStarPtr, no constructor in IDL";
    }
    LongStarPtr.prototype = Object.create(WrapperObject.prototype);
    LongStarPtr.prototype.constructor = LongStarPtr;
    LongStarPtr.prototype.__class__ = LongStarPtr;
    LongStarPtr.__cache__ = {};
    Module["LongStarPtr"] = LongStarPtr;
    LongStarPtr.prototype["__destroy__"] = LongStarPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_LongStarPtr___destroy___0(self);
    };
    function VoidPtr() {
      throw "cannot construct a VoidPtr, no constructor in IDL";
    }
    VoidPtr.prototype = Object.create(WrapperObject.prototype);
    VoidPtr.prototype.constructor = VoidPtr;
    VoidPtr.prototype.__class__ = VoidPtr;
    VoidPtr.__cache__ = {};
    Module["VoidPtr"] = VoidPtr;
    VoidPtr.prototype["__destroy__"] = VoidPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_VoidPtr___destroy___0(self);
    };
    function ResultIterator(arg0) {
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      this.ptr = _emscripten_bind_ResultIterator_ResultIterator_1(arg0);
      getCache(ResultIterator)[this.ptr] = this;
    }
    ResultIterator.prototype = Object.create(WrapperObject.prototype);
    ResultIterator.prototype.constructor = ResultIterator;
    ResultIterator.prototype.__class__ = ResultIterator;
    ResultIterator.__cache__ = {};
    Module["ResultIterator"] = ResultIterator;
    ResultIterator.prototype["Begin"] = ResultIterator.prototype.Begin = function () {
      var self = this.ptr;
      _emscripten_bind_ResultIterator_Begin_0(self);
    };
    ResultIterator.prototype["RestartParagraph"] = ResultIterator.prototype.RestartParagraph = function () {
      var self = this.ptr;
      _emscripten_bind_ResultIterator_RestartParagraph_0(self);
    };
    ResultIterator.prototype["IsWithinFirstTextlineOfParagraph"] = ResultIterator.prototype.IsWithinFirstTextlineOfParagraph = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_IsWithinFirstTextlineOfParagraph_0(self);
    };
    ResultIterator.prototype["RestartRow"] = ResultIterator.prototype.RestartRow = function () {
      var self = this.ptr;
      _emscripten_bind_ResultIterator_RestartRow_0(self);
    };
    ResultIterator.prototype["Next"] = ResultIterator.prototype.Next = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_ResultIterator_Next_1(self, arg0);
    };
    ResultIterator.prototype["IsAtBeginningOf"] = ResultIterator.prototype.IsAtBeginningOf = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_ResultIterator_IsAtBeginningOf_1(self, arg0);
    };
    ResultIterator.prototype["IsAtFinalElement"] = ResultIterator.prototype.IsAtFinalElement = function (arg0, arg1) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return !!_emscripten_bind_ResultIterator_IsAtFinalElement_2(self, arg0, arg1);
    };
    ResultIterator.prototype["Cmp"] = ResultIterator.prototype.Cmp = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return _emscripten_bind_ResultIterator_Cmp_1(self, arg0);
    };
    ResultIterator.prototype["SetBoundingBoxComponents"] = ResultIterator.prototype.SetBoundingBoxComponents = function (arg0, arg1) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      _emscripten_bind_ResultIterator_SetBoundingBoxComponents_2(self, arg0, arg1);
    };
    ResultIterator.prototype["BoundingBox"] = ResultIterator.prototype.BoundingBox = function (arg0, arg1, arg2, arg3, arg4, arg5) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg5 && typeof arg5 === "object") arg5 = arg5.ptr;
      if (arg5 === undefined) {
        return !!_emscripten_bind_ResultIterator_BoundingBox_5(self, arg0, arg1, arg2, arg3, arg4);
      }
      return !!_emscripten_bind_ResultIterator_BoundingBox_6(self, arg0, arg1, arg2, arg3, arg4, arg5);
    };
    ResultIterator.prototype["BoundingBoxInternal"] = ResultIterator.prototype.BoundingBoxInternal = function (
      arg0,
      arg1,
      arg2,
      arg3,
      arg4
    ) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return !!_emscripten_bind_ResultIterator_BoundingBoxInternal_5(self, arg0, arg1, arg2, arg3, arg4);
    };
    ResultIterator.prototype["Empty"] = ResultIterator.prototype.Empty = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_ResultIterator_Empty_1(self, arg0);
    };
    ResultIterator.prototype["BlockType"] = ResultIterator.prototype.BlockType = function () {
      var self = this.ptr;
      return _emscripten_bind_ResultIterator_BlockType_0(self);
    };
    ResultIterator.prototype["BlockPolygon"] = ResultIterator.prototype.BlockPolygon = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_ResultIterator_BlockPolygon_0(self), Pta);
    };
    ResultIterator.prototype["GetBinaryImage"] = ResultIterator.prototype.GetBinaryImage = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_ResultIterator_GetBinaryImage_1(self, arg0), Pix);
    };
    ResultIterator.prototype["GetImage"] = ResultIterator.prototype.GetImage = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return wrapPointer(_emscripten_bind_ResultIterator_GetImage_5(self, arg0, arg1, arg2, arg3, arg4), Pix);
    };
    ResultIterator.prototype["Baseline"] = ResultIterator.prototype.Baseline = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return !!_emscripten_bind_ResultIterator_Baseline_5(self, arg0, arg1, arg2, arg3, arg4);
    };
    ResultIterator.prototype["Orientation"] = ResultIterator.prototype.Orientation = function (arg0, arg1, arg2, arg3) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      _emscripten_bind_ResultIterator_Orientation_4(self, arg0, arg1, arg2, arg3);
    };
    ResultIterator.prototype["ParagraphInfo"] = ResultIterator.prototype.ParagraphInfo = function (arg0, arg1, arg2, arg3) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      _emscripten_bind_ResultIterator_ParagraphInfo_4(self, arg0, arg1, arg2, arg3);
    };
    ResultIterator.prototype["ParagraphIsLtr"] = ResultIterator.prototype.ParagraphIsLtr = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_ParagraphIsLtr_0(self);
    };
    ResultIterator.prototype["GetUTF8Text"] = ResultIterator.prototype.GetUTF8Text = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_GetUTF8Text_1(self, arg0));
    };
    ResultIterator.prototype["SetLineSeparator"] = ResultIterator.prototype.SetLineSeparator = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_ResultIterator_SetLineSeparator_1(self, arg0);
    };
    ResultIterator.prototype["SetParagraphSeparator"] = ResultIterator.prototype.SetParagraphSeparator = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_ResultIterator_SetParagraphSeparator_1(self, arg0);
    };
    ResultIterator.prototype["Confidence"] = ResultIterator.prototype.Confidence = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return _emscripten_bind_ResultIterator_Confidence_1(self, arg0);
    };
    ResultIterator.prototype["WordFontAttributes"] = ResultIterator.prototype.WordFontAttributes = function (
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      arg7
    ) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg5 && typeof arg5 === "object") arg5 = arg5.ptr;
      if (arg6 && typeof arg6 === "object") arg6 = arg6.ptr;
      if (arg7 && typeof arg7 === "object") arg7 = arg7.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_WordFontAttributes_8(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7));
    };
    ResultIterator.prototype["WordRecognitionLanguage"] = ResultIterator.prototype.WordRecognitionLanguage = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_WordRecognitionLanguage_0(self));
    };
    ResultIterator.prototype["WordDirection"] = ResultIterator.prototype.WordDirection = function () {
      var self = this.ptr;
      return _emscripten_bind_ResultIterator_WordDirection_0(self);
    };
    ResultIterator.prototype["WordIsFromDictionary"] = ResultIterator.prototype.WordIsFromDictionary = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_WordIsFromDictionary_0(self);
    };
    ResultIterator.prototype["WordIsNumeric"] = ResultIterator.prototype.WordIsNumeric = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_WordIsNumeric_0(self);
    };
    ResultIterator.prototype["HasBlamerInfo"] = ResultIterator.prototype.HasBlamerInfo = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_HasBlamerInfo_0(self);
    };
    ResultIterator.prototype["HasTruthString"] = ResultIterator.prototype.HasTruthString = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_HasTruthString_0(self);
    };
    ResultIterator.prototype["EquivalentToTruth"] = ResultIterator.prototype.EquivalentToTruth = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      return !!_emscripten_bind_ResultIterator_EquivalentToTruth_1(self, arg0);
    };
    ResultIterator.prototype["WordTruthUTF8Text"] = ResultIterator.prototype.WordTruthUTF8Text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_WordTruthUTF8Text_0(self));
    };
    ResultIterator.prototype["WordNormedUTF8Text"] = ResultIterator.prototype.WordNormedUTF8Text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_WordNormedUTF8Text_0(self));
    };
    ResultIterator.prototype["WordLattice"] = ResultIterator.prototype.WordLattice = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_ResultIterator_WordLattice_1(self, arg0));
    };
    ResultIterator.prototype["SymbolIsSuperscript"] = ResultIterator.prototype.SymbolIsSuperscript = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_SymbolIsSuperscript_0(self);
    };
    ResultIterator.prototype["SymbolIsSubscript"] = ResultIterator.prototype.SymbolIsSubscript = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_SymbolIsSubscript_0(self);
    };
    ResultIterator.prototype["SymbolIsDropcap"] = ResultIterator.prototype.SymbolIsDropcap = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ResultIterator_SymbolIsDropcap_0(self);
    };
    ResultIterator.prototype["__destroy__"] = ResultIterator.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_ResultIterator___destroy___0(self);
    };
    function TextlineOrder() {
      throw "cannot construct a TextlineOrder, no constructor in IDL";
    }
    TextlineOrder.prototype = Object.create(WrapperObject.prototype);
    TextlineOrder.prototype.constructor = TextlineOrder;
    TextlineOrder.prototype.__class__ = TextlineOrder;
    TextlineOrder.__cache__ = {};
    Module["TextlineOrder"] = TextlineOrder;
    TextlineOrder.prototype["__destroy__"] = TextlineOrder.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_TextlineOrder___destroy___0(self);
    };
    function ETEXT_DESC() {
      throw "cannot construct a ETEXT_DESC, no constructor in IDL";
    }
    ETEXT_DESC.prototype = Object.create(WrapperObject.prototype);
    ETEXT_DESC.prototype.constructor = ETEXT_DESC;
    ETEXT_DESC.prototype.__class__ = ETEXT_DESC;
    ETEXT_DESC.__cache__ = {};
    Module["ETEXT_DESC"] = ETEXT_DESC;
    ETEXT_DESC.prototype["__destroy__"] = ETEXT_DESC.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_ETEXT_DESC___destroy___0(self);
    };
    function PageIterator() {
      throw "cannot construct a PageIterator, no constructor in IDL";
    }
    PageIterator.prototype = Object.create(WrapperObject.prototype);
    PageIterator.prototype.constructor = PageIterator;
    PageIterator.prototype.__class__ = PageIterator;
    PageIterator.__cache__ = {};
    Module["PageIterator"] = PageIterator;
    PageIterator.prototype["Begin"] = PageIterator.prototype.Begin = function () {
      var self = this.ptr;
      _emscripten_bind_PageIterator_Begin_0(self);
    };
    PageIterator.prototype["RestartParagraph"] = PageIterator.prototype.RestartParagraph = function () {
      var self = this.ptr;
      _emscripten_bind_PageIterator_RestartParagraph_0(self);
    };
    PageIterator.prototype["IsWithinFirstTextlineOfParagraph"] = PageIterator.prototype.IsWithinFirstTextlineOfParagraph = function () {
      var self = this.ptr;
      return !!_emscripten_bind_PageIterator_IsWithinFirstTextlineOfParagraph_0(self);
    };
    PageIterator.prototype["RestartRow"] = PageIterator.prototype.RestartRow = function () {
      var self = this.ptr;
      _emscripten_bind_PageIterator_RestartRow_0(self);
    };
    PageIterator.prototype["Next"] = PageIterator.prototype.Next = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_PageIterator_Next_1(self, arg0);
    };
    PageIterator.prototype["IsAtBeginningOf"] = PageIterator.prototype.IsAtBeginningOf = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_PageIterator_IsAtBeginningOf_1(self, arg0);
    };
    PageIterator.prototype["IsAtFinalElement"] = PageIterator.prototype.IsAtFinalElement = function (arg0, arg1) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return !!_emscripten_bind_PageIterator_IsAtFinalElement_2(self, arg0, arg1);
    };
    PageIterator.prototype["Cmp"] = PageIterator.prototype.Cmp = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return _emscripten_bind_PageIterator_Cmp_1(self, arg0);
    };
    PageIterator.prototype["SetBoundingBoxComponents"] = PageIterator.prototype.SetBoundingBoxComponents = function (arg0, arg1) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      _emscripten_bind_PageIterator_SetBoundingBoxComponents_2(self, arg0, arg1);
    };
    PageIterator.prototype["BoundingBox"] = PageIterator.prototype.BoundingBox = function (arg0, arg1, arg2, arg3, arg4, arg5) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg5 && typeof arg5 === "object") arg5 = arg5.ptr;
      if (arg5 === undefined) {
        return !!_emscripten_bind_PageIterator_BoundingBox_5(self, arg0, arg1, arg2, arg3, arg4);
      }
      return !!_emscripten_bind_PageIterator_BoundingBox_6(self, arg0, arg1, arg2, arg3, arg4, arg5);
    };
    PageIterator.prototype["BoundingBoxInternal"] = PageIterator.prototype.BoundingBoxInternal = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return !!_emscripten_bind_PageIterator_BoundingBoxInternal_5(self, arg0, arg1, arg2, arg3, arg4);
    };
    PageIterator.prototype["Empty"] = PageIterator.prototype.Empty = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_PageIterator_Empty_1(self, arg0);
    };
    PageIterator.prototype["BlockType"] = PageIterator.prototype.BlockType = function () {
      var self = this.ptr;
      return _emscripten_bind_PageIterator_BlockType_0(self);
    };
    PageIterator.prototype["BlockPolygon"] = PageIterator.prototype.BlockPolygon = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_PageIterator_BlockPolygon_0(self), Pta);
    };
    PageIterator.prototype["GetBinaryImage"] = PageIterator.prototype.GetBinaryImage = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_PageIterator_GetBinaryImage_1(self, arg0), Pix);
    };
    PageIterator.prototype["GetImage"] = PageIterator.prototype.GetImage = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return wrapPointer(_emscripten_bind_PageIterator_GetImage_5(self, arg0, arg1, arg2, arg3, arg4), Pix);
    };
    PageIterator.prototype["Baseline"] = PageIterator.prototype.Baseline = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      return !!_emscripten_bind_PageIterator_Baseline_5(self, arg0, arg1, arg2, arg3, arg4);
    };
    PageIterator.prototype["Orientation"] = PageIterator.prototype.Orientation = function (arg0, arg1, arg2, arg3) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      _emscripten_bind_PageIterator_Orientation_4(self, arg0, arg1, arg2, arg3);
    };
    PageIterator.prototype["ParagraphInfo"] = PageIterator.prototype.ParagraphInfo = function (arg0, arg1, arg2, arg3) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      _emscripten_bind_PageIterator_ParagraphInfo_4(self, arg0, arg1, arg2, arg3);
    };
    PageIterator.prototype["__destroy__"] = PageIterator.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_PageIterator___destroy___0(self);
    };
    function WritingDirection() {
      throw "cannot construct a WritingDirection, no constructor in IDL";
    }
    WritingDirection.prototype = Object.create(WrapperObject.prototype);
    WritingDirection.prototype.constructor = WritingDirection;
    WritingDirection.prototype.__class__ = WritingDirection;
    WritingDirection.__cache__ = {};
    Module["WritingDirection"] = WritingDirection;
    WritingDirection.prototype["__destroy__"] = WritingDirection.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_WritingDirection___destroy___0(self);
    };
    function BoxPtr() {
      throw "cannot construct a BoxPtr, no constructor in IDL";
    }
    BoxPtr.prototype = Object.create(WrapperObject.prototype);
    BoxPtr.prototype.constructor = BoxPtr;
    BoxPtr.prototype.__class__ = BoxPtr;
    BoxPtr.__cache__ = {};
    Module["BoxPtr"] = BoxPtr;
    BoxPtr.prototype["__destroy__"] = BoxPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_BoxPtr___destroy___0(self);
    };
    function Box() {
      throw "cannot construct a Box, no constructor in IDL";
    }
    Box.prototype = Object.create(WrapperObject.prototype);
    Box.prototype.constructor = Box;
    Box.prototype.__class__ = Box;
    Box.__cache__ = {};
    Module["Box"] = Box;
    Box.prototype["get_x"] = Box.prototype.get_x = function () {
      var self = this.ptr;
      return _emscripten_bind_Box_get_x_0(self);
    };
    Object.defineProperty(Box.prototype, "x", { get: Box.prototype.get_x });
    Box.prototype["get_y"] = Box.prototype.get_y = function () {
      var self = this.ptr;
      return _emscripten_bind_Box_get_y_0(self);
    };
    Object.defineProperty(Box.prototype, "y", { get: Box.prototype.get_y });
    Box.prototype["get_w"] = Box.prototype.get_w = function () {
      var self = this.ptr;
      return _emscripten_bind_Box_get_w_0(self);
    };
    Object.defineProperty(Box.prototype, "w", { get: Box.prototype.get_w });
    Box.prototype["get_h"] = Box.prototype.get_h = function () {
      var self = this.ptr;
      return _emscripten_bind_Box_get_h_0(self);
    };
    Object.defineProperty(Box.prototype, "h", { get: Box.prototype.get_h });
    Box.prototype["get_refcount"] = Box.prototype.get_refcount = function () {
      var self = this.ptr;
      return _emscripten_bind_Box_get_refcount_0(self);
    };
    Object.defineProperty(Box.prototype, "refcount", { get: Box.prototype.get_refcount });
    Box.prototype["__destroy__"] = Box.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Box___destroy___0(self);
    };
    function PixaPtr() {
      throw "cannot construct a PixaPtr, no constructor in IDL";
    }
    PixaPtr.prototype = Object.create(WrapperObject.prototype);
    PixaPtr.prototype.constructor = PixaPtr;
    PixaPtr.prototype.__class__ = PixaPtr;
    PixaPtr.__cache__ = {};
    Module["PixaPtr"] = PixaPtr;
    PixaPtr.prototype["__destroy__"] = PixaPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_PixaPtr___destroy___0(self);
    };
    function WordChoiceIterator(arg0) {
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      this.ptr = _emscripten_bind_WordChoiceIterator_WordChoiceIterator_1(arg0);
      getCache(WordChoiceIterator)[this.ptr] = this;
    }
    WordChoiceIterator.prototype = Object.create(WrapperObject.prototype);
    WordChoiceIterator.prototype.constructor = WordChoiceIterator;
    WordChoiceIterator.prototype.__class__ = WordChoiceIterator;
    WordChoiceIterator.__cache__ = {};
    Module["WordChoiceIterator"] = WordChoiceIterator;
    WordChoiceIterator.prototype["Next"] = WordChoiceIterator.prototype.Next = function () {
      var self = this.ptr;
      return !!_emscripten_bind_WordChoiceIterator_Next_0(self);
    };
    WordChoiceIterator.prototype["GetUTF8Text"] = WordChoiceIterator.prototype.GetUTF8Text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_WordChoiceIterator_GetUTF8Text_0(self));
    };
    WordChoiceIterator.prototype["Confidence"] = WordChoiceIterator.prototype.Confidence = function () {
      var self = this.ptr;
      return _emscripten_bind_WordChoiceIterator_Confidence_0(self);
    };
    WordChoiceIterator.prototype["__destroy__"] = WordChoiceIterator.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_WordChoiceIterator___destroy___0(self);
    };
    function FloatPtr() {
      throw "cannot construct a FloatPtr, no constructor in IDL";
    }
    FloatPtr.prototype = Object.create(WrapperObject.prototype);
    FloatPtr.prototype.constructor = FloatPtr;
    FloatPtr.prototype.__class__ = FloatPtr;
    FloatPtr.__cache__ = {};
    Module["FloatPtr"] = FloatPtr;
    FloatPtr.prototype["__destroy__"] = FloatPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_FloatPtr___destroy___0(self);
    };
    function ChoiceIterator(arg0) {
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      this.ptr = _emscripten_bind_ChoiceIterator_ChoiceIterator_1(arg0);
      getCache(ChoiceIterator)[this.ptr] = this;
    }
    ChoiceIterator.prototype = Object.create(WrapperObject.prototype);
    ChoiceIterator.prototype.constructor = ChoiceIterator;
    ChoiceIterator.prototype.__class__ = ChoiceIterator;
    ChoiceIterator.__cache__ = {};
    Module["ChoiceIterator"] = ChoiceIterator;
    ChoiceIterator.prototype["Next"] = ChoiceIterator.prototype.Next = function () {
      var self = this.ptr;
      return !!_emscripten_bind_ChoiceIterator_Next_0(self);
    };
    ChoiceIterator.prototype["GetUTF8Text"] = ChoiceIterator.prototype.GetUTF8Text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_ChoiceIterator_GetUTF8Text_0(self));
    };
    ChoiceIterator.prototype["Confidence"] = ChoiceIterator.prototype.Confidence = function () {
      var self = this.ptr;
      return _emscripten_bind_ChoiceIterator_Confidence_0(self);
    };
    ChoiceIterator.prototype["__destroy__"] = ChoiceIterator.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_ChoiceIterator___destroy___0(self);
    };
    function PixPtr() {
      throw "cannot construct a PixPtr, no constructor in IDL";
    }
    PixPtr.prototype = Object.create(WrapperObject.prototype);
    PixPtr.prototype.constructor = PixPtr;
    PixPtr.prototype.__class__ = PixPtr;
    PixPtr.__cache__ = {};
    Module["PixPtr"] = PixPtr;
    PixPtr.prototype["__destroy__"] = PixPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_PixPtr___destroy___0(self);
    };
    function UNICHARSET() {
      throw "cannot construct a UNICHARSET, no constructor in IDL";
    }
    UNICHARSET.prototype = Object.create(WrapperObject.prototype);
    UNICHARSET.prototype.constructor = UNICHARSET;
    UNICHARSET.prototype.__class__ = UNICHARSET;
    UNICHARSET.__cache__ = {};
    Module["UNICHARSET"] = UNICHARSET;
    UNICHARSET.prototype["get_script_from_script_id"] = UNICHARSET.prototype.get_script_from_script_id = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_UNICHARSET_get_script_from_script_id_1(self, arg0));
    };
    UNICHARSET.prototype["get_script_id_from_name"] = UNICHARSET.prototype.get_script_id_from_name = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      return _emscripten_bind_UNICHARSET_get_script_id_from_name_1(self, arg0);
    };
    UNICHARSET.prototype["get_script_table_size"] = UNICHARSET.prototype.get_script_table_size = function () {
      var self = this.ptr;
      return _emscripten_bind_UNICHARSET_get_script_table_size_0(self);
    };
    UNICHARSET.prototype["__destroy__"] = UNICHARSET.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_UNICHARSET___destroy___0(self);
    };
    function IntPtr() {
      throw "cannot construct a IntPtr, no constructor in IDL";
    }
    IntPtr.prototype = Object.create(WrapperObject.prototype);
    IntPtr.prototype.constructor = IntPtr;
    IntPtr.prototype.__class__ = IntPtr;
    IntPtr.__cache__ = {};
    Module["IntPtr"] = IntPtr;
    IntPtr.prototype["__destroy__"] = IntPtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_IntPtr___destroy___0(self);
    };
    function Orientation() {
      throw "cannot construct a Orientation, no constructor in IDL";
    }
    Orientation.prototype = Object.create(WrapperObject.prototype);
    Orientation.prototype.constructor = Orientation;
    Orientation.prototype.__class__ = Orientation;
    Orientation.__cache__ = {};
    Module["Orientation"] = Orientation;
    Orientation.prototype["__destroy__"] = Orientation.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Orientation___destroy___0(self);
    };
    function OSBestResult() {
      throw "cannot construct a OSBestResult, no constructor in IDL";
    }
    OSBestResult.prototype = Object.create(WrapperObject.prototype);
    OSBestResult.prototype.constructor = OSBestResult;
    OSBestResult.prototype.__class__ = OSBestResult;
    OSBestResult.__cache__ = {};
    Module["OSBestResult"] = OSBestResult;
    OSBestResult.prototype["get_orientation_id"] = OSBestResult.prototype.get_orientation_id = function () {
      var self = this.ptr;
      return _emscripten_bind_OSBestResult_get_orientation_id_0(self);
    };
    Object.defineProperty(OSBestResult.prototype, "orientation_id", { get: OSBestResult.prototype.get_orientation_id });
    OSBestResult.prototype["get_script_id"] = OSBestResult.prototype.get_script_id = function () {
      var self = this.ptr;
      return _emscripten_bind_OSBestResult_get_script_id_0(self);
    };
    Object.defineProperty(OSBestResult.prototype, "script_id", { get: OSBestResult.prototype.get_script_id });
    OSBestResult.prototype["get_sconfidence"] = OSBestResult.prototype.get_sconfidence = function () {
      var self = this.ptr;
      return _emscripten_bind_OSBestResult_get_sconfidence_0(self);
    };
    Object.defineProperty(OSBestResult.prototype, "sconfidence", { get: OSBestResult.prototype.get_sconfidence });
    OSBestResult.prototype["get_oconfidence"] = OSBestResult.prototype.get_oconfidence = function () {
      var self = this.ptr;
      return _emscripten_bind_OSBestResult_get_oconfidence_0(self);
    };
    Object.defineProperty(OSBestResult.prototype, "oconfidence", { get: OSBestResult.prototype.get_oconfidence });
    OSBestResult.prototype["__destroy__"] = OSBestResult.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_OSBestResult___destroy___0(self);
    };
    function Boxa() {
      throw "cannot construct a Boxa, no constructor in IDL";
    }
    Boxa.prototype = Object.create(WrapperObject.prototype);
    Boxa.prototype.constructor = Boxa;
    Boxa.prototype.__class__ = Boxa;
    Boxa.__cache__ = {};
    Module["Boxa"] = Boxa;
    Boxa.prototype["get_n"] = Boxa.prototype.get_n = function () {
      var self = this.ptr;
      return _emscripten_bind_Boxa_get_n_0(self);
    };
    Object.defineProperty(Boxa.prototype, "n", { get: Boxa.prototype.get_n });
    Boxa.prototype["get_nalloc"] = Boxa.prototype.get_nalloc = function () {
      var self = this.ptr;
      return _emscripten_bind_Boxa_get_nalloc_0(self);
    };
    Object.defineProperty(Boxa.prototype, "nalloc", { get: Boxa.prototype.get_nalloc });
    Boxa.prototype["get_refcount"] = Boxa.prototype.get_refcount = function () {
      var self = this.ptr;
      return _emscripten_bind_Boxa_get_refcount_0(self);
    };
    Object.defineProperty(Boxa.prototype, "refcount", { get: Boxa.prototype.get_refcount });
    Boxa.prototype["get_box"] = Boxa.prototype.get_box = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Boxa_get_box_0(self), BoxPtr);
    };
    Object.defineProperty(Boxa.prototype, "box", { get: Boxa.prototype.get_box });
    Boxa.prototype["__destroy__"] = Boxa.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Boxa___destroy___0(self);
    };
    function PixColormap() {
      throw "cannot construct a PixColormap, no constructor in IDL";
    }
    PixColormap.prototype = Object.create(WrapperObject.prototype);
    PixColormap.prototype.constructor = PixColormap;
    PixColormap.prototype.__class__ = PixColormap;
    PixColormap.__cache__ = {};
    Module["PixColormap"] = PixColormap;
    PixColormap.prototype["get_array"] = PixColormap.prototype.get_array = function () {
      var self = this.ptr;
      return _emscripten_bind_PixColormap_get_array_0(self);
    };
    Object.defineProperty(PixColormap.prototype, "array", { get: PixColormap.prototype.get_array });
    PixColormap.prototype["get_depth"] = PixColormap.prototype.get_depth = function () {
      var self = this.ptr;
      return _emscripten_bind_PixColormap_get_depth_0(self);
    };
    Object.defineProperty(PixColormap.prototype, "depth", { get: PixColormap.prototype.get_depth });
    PixColormap.prototype["get_nalloc"] = PixColormap.prototype.get_nalloc = function () {
      var self = this.ptr;
      return _emscripten_bind_PixColormap_get_nalloc_0(self);
    };
    Object.defineProperty(PixColormap.prototype, "nalloc", { get: PixColormap.prototype.get_nalloc });
    PixColormap.prototype["get_n"] = PixColormap.prototype.get_n = function () {
      var self = this.ptr;
      return _emscripten_bind_PixColormap_get_n_0(self);
    };
    Object.defineProperty(PixColormap.prototype, "n", { get: PixColormap.prototype.get_n });
    PixColormap.prototype["__destroy__"] = PixColormap.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_PixColormap___destroy___0(self);
    };
    function Pta() {
      throw "cannot construct a Pta, no constructor in IDL";
    }
    Pta.prototype = Object.create(WrapperObject.prototype);
    Pta.prototype.constructor = Pta;
    Pta.prototype.__class__ = Pta;
    Pta.__cache__ = {};
    Module["Pta"] = Pta;
    Pta.prototype["get_n"] = Pta.prototype.get_n = function () {
      var self = this.ptr;
      return _emscripten_bind_Pta_get_n_0(self);
    };
    Object.defineProperty(Pta.prototype, "n", { get: Pta.prototype.get_n });
    Pta.prototype["get_nalloc"] = Pta.prototype.get_nalloc = function () {
      var self = this.ptr;
      return _emscripten_bind_Pta_get_nalloc_0(self);
    };
    Object.defineProperty(Pta.prototype, "nalloc", { get: Pta.prototype.get_nalloc });
    Pta.prototype["get_refcount"] = Pta.prototype.get_refcount = function () {
      var self = this.ptr;
      return _emscripten_bind_Pta_get_refcount_0(self);
    };
    Object.defineProperty(Pta.prototype, "refcount", { get: Pta.prototype.get_refcount });
    Pta.prototype["get_x"] = Pta.prototype.get_x = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Pta_get_x_0(self), FloatPtr);
    };
    Object.defineProperty(Pta.prototype, "x", { get: Pta.prototype.get_x });
    Pta.prototype["get_y"] = Pta.prototype.get_y = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Pta_get_y_0(self), FloatPtr);
    };
    Object.defineProperty(Pta.prototype, "y", { get: Pta.prototype.get_y });
    Pta.prototype["__destroy__"] = Pta.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Pta___destroy___0(self);
    };
    function Pix() {
      throw "cannot construct a Pix, no constructor in IDL";
    }
    Pix.prototype = Object.create(WrapperObject.prototype);
    Pix.prototype.constructor = Pix;
    Pix.prototype.__class__ = Pix;
    Pix.__cache__ = {};
    Module["Pix"] = Pix;
    Pix.prototype["get_w"] = Pix.prototype.get_w = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_w_0(self);
    };
    Object.defineProperty(Pix.prototype, "w", { get: Pix.prototype.get_w });
    Pix.prototype["get_h"] = Pix.prototype.get_h = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_h_0(self);
    };
    Object.defineProperty(Pix.prototype, "h", { get: Pix.prototype.get_h });
    Pix.prototype["get_d"] = Pix.prototype.get_d = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_d_0(self);
    };
    Object.defineProperty(Pix.prototype, "d", { get: Pix.prototype.get_d });
    Pix.prototype["get_spp"] = Pix.prototype.get_spp = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_spp_0(self);
    };
    Object.defineProperty(Pix.prototype, "spp", { get: Pix.prototype.get_spp });
    Pix.prototype["get_wpl"] = Pix.prototype.get_wpl = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_wpl_0(self);
    };
    Object.defineProperty(Pix.prototype, "wpl", { get: Pix.prototype.get_wpl });
    Pix.prototype["get_refcount"] = Pix.prototype.get_refcount = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_refcount_0(self);
    };
    Object.defineProperty(Pix.prototype, "refcount", { get: Pix.prototype.get_refcount });
    Pix.prototype["get_xres"] = Pix.prototype.get_xres = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_xres_0(self);
    };
    Object.defineProperty(Pix.prototype, "xres", { get: Pix.prototype.get_xres });
    Pix.prototype["get_yres"] = Pix.prototype.get_yres = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_yres_0(self);
    };
    Object.defineProperty(Pix.prototype, "yres", { get: Pix.prototype.get_yres });
    Pix.prototype["get_informat"] = Pix.prototype.get_informat = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_informat_0(self);
    };
    Object.defineProperty(Pix.prototype, "informat", { get: Pix.prototype.get_informat });
    Pix.prototype["get_special"] = Pix.prototype.get_special = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_special_0(self);
    };
    Object.defineProperty(Pix.prototype, "special", { get: Pix.prototype.get_special });
    Pix.prototype["get_text"] = Pix.prototype.get_text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_Pix_get_text_0(self));
    };
    Object.defineProperty(Pix.prototype, "text", { get: Pix.prototype.get_text });
    Pix.prototype["get_colormap"] = Pix.prototype.get_colormap = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Pix_get_colormap_0(self), PixColormap);
    };
    Object.defineProperty(Pix.prototype, "colormap", { get: Pix.prototype.get_colormap });
    Pix.prototype["get_data"] = Pix.prototype.get_data = function () {
      var self = this.ptr;
      return _emscripten_bind_Pix_get_data_0(self);
    };
    Object.defineProperty(Pix.prototype, "data", { get: Pix.prototype.get_data });
    Pix.prototype["__destroy__"] = Pix.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Pix___destroy___0(self);
    };
    function DoublePtr() {
      throw "cannot construct a DoublePtr, no constructor in IDL";
    }
    DoublePtr.prototype = Object.create(WrapperObject.prototype);
    DoublePtr.prototype.constructor = DoublePtr;
    DoublePtr.prototype.__class__ = DoublePtr;
    DoublePtr.__cache__ = {};
    Module["DoublePtr"] = DoublePtr;
    DoublePtr.prototype["__destroy__"] = DoublePtr.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_DoublePtr___destroy___0(self);
    };
    function Dawg() {
      throw "cannot construct a Dawg, no constructor in IDL";
    }
    Dawg.prototype = Object.create(WrapperObject.prototype);
    Dawg.prototype.constructor = Dawg;
    Dawg.prototype.__class__ = Dawg;
    Dawg.__cache__ = {};
    Module["Dawg"] = Dawg;
    Dawg.prototype["__destroy__"] = Dawg.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Dawg___destroy___0(self);
    };
    function TessBaseAPI() {
      this.ptr = _emscripten_bind_TessBaseAPI_TessBaseAPI_0();
      getCache(TessBaseAPI)[this.ptr] = this;
    }
    TessBaseAPI.prototype = Object.create(WrapperObject.prototype);
    TessBaseAPI.prototype.constructor = TessBaseAPI;
    TessBaseAPI.prototype.__class__ = TessBaseAPI;
    TessBaseAPI.__cache__ = {};
    Module["TessBaseAPI"] = TessBaseAPI;
    TessBaseAPI.prototype["Version"] = TessBaseAPI.prototype.Version = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_Version_0(self));
    };
    TessBaseAPI.prototype["CatchSignals"] = TessBaseAPI.prototype.CatchSignals = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_CatchSignals_0(self);
    };
    TessBaseAPI.prototype["SetInputName"] = TessBaseAPI.prototype.SetInputName = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_TessBaseAPI_SetInputName_1(self, arg0);
    };
    TessBaseAPI.prototype["GetInputName"] = TessBaseAPI.prototype.GetInputName = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetInputName_0(self));
    };
    TessBaseAPI.prototype["SetInputImage"] = TessBaseAPI.prototype.SetInputImage = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      _emscripten_bind_TessBaseAPI_SetInputImage_1(self, arg0);
    };
    TessBaseAPI.prototype["GetInputImage"] = TessBaseAPI.prototype.GetInputImage = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetInputImage_0(self), Pix);
    };
    TessBaseAPI.prototype["GetSourceYResolution"] = TessBaseAPI.prototype.GetSourceYResolution = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_GetSourceYResolution_0(self);
    };
    TessBaseAPI.prototype["GetDatapath"] = TessBaseAPI.prototype.GetDatapath = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetDatapath_0(self));
    };
    TessBaseAPI.prototype["SetOutputName"] = TessBaseAPI.prototype.SetOutputName = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_TessBaseAPI_SetOutputName_1(self, arg0);
    };
    TessBaseAPI.prototype["SetVariable"] = TessBaseAPI.prototype.SetVariable = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      else arg1 = ensureString(arg1);
      return !!_emscripten_bind_TessBaseAPI_SetVariable_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["SetDebugVariable"] = TessBaseAPI.prototype.SetDebugVariable = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      else arg1 = ensureString(arg1);
      return !!_emscripten_bind_TessBaseAPI_SetDebugVariable_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["GetIntVariable"] = TessBaseAPI.prototype.GetIntVariable = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return !!_emscripten_bind_TessBaseAPI_GetIntVariable_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["GetBoolVariable"] = TessBaseAPI.prototype.GetBoolVariable = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return !!_emscripten_bind_TessBaseAPI_GetBoolVariable_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["GetDoubleVariable"] = TessBaseAPI.prototype.GetDoubleVariable = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return !!_emscripten_bind_TessBaseAPI_GetDoubleVariable_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["GetStringVariable"] = TessBaseAPI.prototype.GetStringVariable = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetStringVariable_1(self, arg0));
    };
    TessBaseAPI.prototype["PrintVariables"] = TessBaseAPI.prototype.PrintVariables = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_PrintVariables_0(self);
    };
    TessBaseAPI.prototype["Init"] = TessBaseAPI.prototype.Init = function (arg0, arg1, arg2) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      else arg1 = ensureString(arg1);
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg2 === undefined) {
        return _emscripten_bind_TessBaseAPI_Init_2(self, arg0, arg1);
      }
      return _emscripten_bind_TessBaseAPI_Init_3(self, arg0, arg1, arg2);
    };
    TessBaseAPI.prototype["GetInitLanguagesAsString"] = TessBaseAPI.prototype.GetInitLanguagesAsString = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetInitLanguagesAsString_0(self));
    };
    TessBaseAPI.prototype["InitLangMod"] = TessBaseAPI.prototype.InitLangMod = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      else arg1 = ensureString(arg1);
      return _emscripten_bind_TessBaseAPI_InitLangMod_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["InitForAnalysePage"] = TessBaseAPI.prototype.InitForAnalysePage = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_InitForAnalysePage_0(self);
    };
    TessBaseAPI.prototype["ReadConfigFile"] = TessBaseAPI.prototype.ReadConfigFile = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_TessBaseAPI_ReadConfigFile_1(self, arg0);
    };
    TessBaseAPI.prototype["ReadDebugConfigFile"] = TessBaseAPI.prototype.ReadDebugConfigFile = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      _emscripten_bind_TessBaseAPI_ReadDebugConfigFile_1(self, arg0);
    };
    TessBaseAPI.prototype["SetPageSegMode"] = TessBaseAPI.prototype.SetPageSegMode = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      _emscripten_bind_TessBaseAPI_SetPageSegMode_1(self, arg0);
    };
    TessBaseAPI.prototype["GetPageSegMode"] = TessBaseAPI.prototype.GetPageSegMode = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_GetPageSegMode_0(self);
    };
    TessBaseAPI.prototype["TesseractRect"] = TessBaseAPI.prototype.TesseractRect = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg5 && typeof arg5 === "object") arg5 = arg5.ptr;
      if (arg6 && typeof arg6 === "object") arg6 = arg6.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_TesseractRect_7(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6));
    };
    TessBaseAPI.prototype["ClearAdaptiveClassifier"] = TessBaseAPI.prototype.ClearAdaptiveClassifier = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_ClearAdaptiveClassifier_0(self);
    };
    TessBaseAPI.prototype["SetImage"] = TessBaseAPI.prototype.SetImage = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg1 === undefined) {
        _emscripten_bind_TessBaseAPI_SetImage_1(self, arg0);
        return;
      }
      if (arg2 === undefined) {
        _emscripten_bind_TessBaseAPI_SetImage_2(self, arg0, arg1);
        return;
      }
      if (arg3 === undefined) {
        _emscripten_bind_TessBaseAPI_SetImage_3(self, arg0, arg1, arg2);
        return;
      }
      if (arg4 === undefined) {
        _emscripten_bind_TessBaseAPI_SetImage_4(self, arg0, arg1, arg2, arg3);
        return;
      }
      _emscripten_bind_TessBaseAPI_SetImage_5(self, arg0, arg1, arg2, arg3, arg4);
    };
    TessBaseAPI.prototype["SetSourceResolution"] = TessBaseAPI.prototype.SetSourceResolution = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      _emscripten_bind_TessBaseAPI_SetSourceResolution_1(self, arg0);
    };
    TessBaseAPI.prototype["SetRectangle"] = TessBaseAPI.prototype.SetRectangle = function (arg0, arg1, arg2, arg3) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      _emscripten_bind_TessBaseAPI_SetRectangle_4(self, arg0, arg1, arg2, arg3);
    };
    TessBaseAPI.prototype["GetThresholdedImage"] = TessBaseAPI.prototype.GetThresholdedImage = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetThresholdedImage_0(self), Pix);
    };
    TessBaseAPI.prototype["GetRegions"] = TessBaseAPI.prototype.GetRegions = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetRegions_1(self, arg0), Boxa);
    };
    TessBaseAPI.prototype["GetTextlines"] = TessBaseAPI.prototype.GetTextlines = function (arg0, arg1, arg2, arg3, arg4) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg2 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetTextlines_2(self, arg0, arg1), Boxa);
      }
      if (arg3 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetTextlines_3(self, arg0, arg1, arg2), Boxa);
      }
      if (arg4 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetTextlines_4(self, arg0, arg1, arg2, arg3), Boxa);
      }
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetTextlines_5(self, arg0, arg1, arg2, arg3, arg4), Boxa);
    };
    TessBaseAPI.prototype["GetStrips"] = TessBaseAPI.prototype.GetStrips = function (arg0, arg1) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetStrips_2(self, arg0, arg1), Boxa);
    };
    TessBaseAPI.prototype["GetWords"] = TessBaseAPI.prototype.GetWords = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetWords_1(self, arg0), Boxa);
    };
    TessBaseAPI.prototype["GetConnectedComponents"] = TessBaseAPI.prototype.GetConnectedComponents = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetConnectedComponents_1(self, arg0), Boxa);
    };
    TessBaseAPI.prototype["GetComponentImages"] = TessBaseAPI.prototype.GetComponentImages = function (
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6
    ) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      if (arg2 && typeof arg2 === "object") arg2 = arg2.ptr;
      if (arg3 && typeof arg3 === "object") arg3 = arg3.ptr;
      if (arg4 && typeof arg4 === "object") arg4 = arg4.ptr;
      if (arg5 && typeof arg5 === "object") arg5 = arg5.ptr;
      if (arg6 && typeof arg6 === "object") arg6 = arg6.ptr;
      if (arg4 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetComponentImages_4(self, arg0, arg1, arg2, arg3), Boxa);
      }
      if (arg5 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetComponentImages_5(self, arg0, arg1, arg2, arg3, arg4), Boxa);
      }
      if (arg6 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_GetComponentImages_6(self, arg0, arg1, arg2, arg3, arg4, arg5), Boxa);
      }
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetComponentImages_7(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6), Boxa);
    };
    TessBaseAPI.prototype["GetThresholdedImageScaleFactor"] = TessBaseAPI.prototype.GetThresholdedImageScaleFactor = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_GetThresholdedImageScaleFactor_0(self);
    };
    TessBaseAPI.prototype["AnalyseLayout"] = TessBaseAPI.prototype.AnalyseLayout = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg0 === undefined) {
        return wrapPointer(_emscripten_bind_TessBaseAPI_AnalyseLayout_0(self), PageIterator);
      }
      return wrapPointer(_emscripten_bind_TessBaseAPI_AnalyseLayout_1(self, arg0), PageIterator);
    };
    TessBaseAPI.prototype["Recognize"] = TessBaseAPI.prototype.Recognize = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return _emscripten_bind_TessBaseAPI_Recognize_1(self, arg0);
    };
    TessBaseAPI.prototype["RecognizeForChopTest"] = TessBaseAPI.prototype.RecognizeForChopTest = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return _emscripten_bind_TessBaseAPI_RecognizeForChopTest_1(self, arg0);
    };
    TessBaseAPI.prototype["GetIterator"] = TessBaseAPI.prototype.GetIterator = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetIterator_0(self), ResultIterator);
    };
    TessBaseAPI.prototype["GetUTF8Text"] = TessBaseAPI.prototype.GetUTF8Text = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetUTF8Text_0(self));
    };
    TessBaseAPI.prototype["GetHOCRText"] = TessBaseAPI.prototype.GetHOCRText = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetHOCRText_1(self, arg0));
    };
    TessBaseAPI.prototype["GetTSVText"] = TessBaseAPI.prototype.GetTSVText = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetTSVText_1(self, arg0));
    };
    TessBaseAPI.prototype["GetBoxText"] = TessBaseAPI.prototype.GetBoxText = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetBoxText_1(self, arg0));
    };
    TessBaseAPI.prototype["GetUNLVText"] = TessBaseAPI.prototype.GetUNLVText = function () {
      var self = this.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetUNLVText_0(self));
    };
    TessBaseAPI.prototype["GetOsdText"] = TessBaseAPI.prototype.GetOsdText = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetOsdText_1(self, arg0));
    };
    TessBaseAPI.prototype["MeanTextConf"] = TessBaseAPI.prototype.MeanTextConf = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_MeanTextConf_0(self);
    };
    TessBaseAPI.prototype["AllWordConfidences"] = TessBaseAPI.prototype.AllWordConfidences = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_AllWordConfidences_0(self), IntPtr);
    };
    TessBaseAPI.prototype["AdaptToWordStr"] = TessBaseAPI.prototype.AdaptToWordStr = function (arg0, arg1) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      if (arg1 && typeof arg1 === "object") arg1 = arg1.ptr;
      else arg1 = ensureString(arg1);
      return !!_emscripten_bind_TessBaseAPI_AdaptToWordStr_2(self, arg0, arg1);
    };
    TessBaseAPI.prototype["Clear"] = TessBaseAPI.prototype.Clear = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_Clear_0(self);
    };
    TessBaseAPI.prototype["End"] = TessBaseAPI.prototype.End = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_End_0(self);
    };
    TessBaseAPI.prototype["ClearPersistentCache"] = TessBaseAPI.prototype.ClearPersistentCache = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI_ClearPersistentCache_0(self);
    };
    TessBaseAPI.prototype["IsValidWord"] = TessBaseAPI.prototype.IsValidWord = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      return _emscripten_bind_TessBaseAPI_IsValidWord_1(self, arg0);
    };
    TessBaseAPI.prototype["IsValidCharacter"] = TessBaseAPI.prototype.IsValidCharacter = function (arg0) {
      var self = this.ptr;
      ensureCache.prepare();
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      else arg0 = ensureString(arg0);
      return !!_emscripten_bind_TessBaseAPI_IsValidCharacter_1(self, arg0);
    };
    TessBaseAPI.prototype["DetectOS"] = TessBaseAPI.prototype.DetectOS = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return !!_emscripten_bind_TessBaseAPI_DetectOS_1(self, arg0);
    };
    TessBaseAPI.prototype["GetUnichar"] = TessBaseAPI.prototype.GetUnichar = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return Pointer_stringify(_emscripten_bind_TessBaseAPI_GetUnichar_1(self, arg0));
    };
    TessBaseAPI.prototype["GetDawg"] = TessBaseAPI.prototype.GetDawg = function (arg0) {
      var self = this.ptr;
      if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
      return wrapPointer(_emscripten_bind_TessBaseAPI_GetDawg_1(self, arg0), Dawg);
    };
    TessBaseAPI.prototype["NumDawgs"] = TessBaseAPI.prototype.NumDawgs = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_NumDawgs_0(self);
    };
    TessBaseAPI.prototype["oem"] = TessBaseAPI.prototype.oem = function () {
      var self = this.ptr;
      return _emscripten_bind_TessBaseAPI_oem_0(self);
    };
    TessBaseAPI.prototype["__destroy__"] = TessBaseAPI.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_TessBaseAPI___destroy___0(self);
    };
    function OSResults() {
      this.ptr = _emscripten_bind_OSResults_OSResults_0();
      getCache(OSResults)[this.ptr] = this;
    }
    OSResults.prototype = Object.create(WrapperObject.prototype);
    OSResults.prototype.constructor = OSResults;
    OSResults.prototype.__class__ = OSResults;
    OSResults.__cache__ = {};
    Module["OSResults"] = OSResults;
    OSResults.prototype["print_scores"] = OSResults.prototype.print_scores = function () {
      var self = this.ptr;
      _emscripten_bind_OSResults_print_scores_0(self);
    };
    OSResults.prototype["get_best_result"] = OSResults.prototype.get_best_result = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_OSResults_get_best_result_0(self), OSBestResult);
    };
    Object.defineProperty(OSResults.prototype, "best_result", { get: OSResults.prototype.get_best_result });
    OSResults.prototype["get_unicharset"] = OSResults.prototype.get_unicharset = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_OSResults_get_unicharset_0(self), UNICHARSET);
    };
    Object.defineProperty(OSResults.prototype, "unicharset", { get: OSResults.prototype.get_unicharset });
    OSResults.prototype["__destroy__"] = OSResults.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_OSResults___destroy___0(self);
    };
    function Pixa() {
      throw "cannot construct a Pixa, no constructor in IDL";
    }
    Pixa.prototype = Object.create(WrapperObject.prototype);
    Pixa.prototype.constructor = Pixa;
    Pixa.prototype.__class__ = Pixa;
    Pixa.__cache__ = {};
    Module["Pixa"] = Pixa;
    Pixa.prototype["get_n"] = Pixa.prototype.get_n = function () {
      var self = this.ptr;
      return _emscripten_bind_Pixa_get_n_0(self);
    };
    Object.defineProperty(Pixa.prototype, "n", { get: Pixa.prototype.get_n });
    Pixa.prototype["get_nalloc"] = Pixa.prototype.get_nalloc = function () {
      var self = this.ptr;
      return _emscripten_bind_Pixa_get_nalloc_0(self);
    };
    Object.defineProperty(Pixa.prototype, "nalloc", { get: Pixa.prototype.get_nalloc });
    Pixa.prototype["get_refcount"] = Pixa.prototype.get_refcount = function () {
      var self = this.ptr;
      return _emscripten_bind_Pixa_get_refcount_0(self);
    };
    Object.defineProperty(Pixa.prototype, "refcount", { get: Pixa.prototype.get_refcount });
    Pixa.prototype["get_pix"] = Pixa.prototype.get_pix = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Pixa_get_pix_0(self), PixPtr);
    };
    Object.defineProperty(Pixa.prototype, "pix", { get: Pixa.prototype.get_pix });
    Pixa.prototype["get_boxa"] = Pixa.prototype.get_boxa = function () {
      var self = this.ptr;
      return wrapPointer(_emscripten_bind_Pixa_get_boxa_0(self), Boxa);
    };
    Object.defineProperty(Pixa.prototype, "boxa", { get: Pixa.prototype.get_boxa });
    Pixa.prototype["__destroy__"] = Pixa.prototype.__destroy__ = function () {
      var self = this.ptr;
      _emscripten_bind_Pixa___destroy___0(self);
    };
    (function () {
      function setupEnums() {
        Module["RIL_BLOCK"] = _emscripten_enum_PageIteratorLevel_RIL_BLOCK();
        Module["RIL_PARA"] = _emscripten_enum_PageIteratorLevel_RIL_PARA();
        Module["RIL_TEXTLINE"] = _emscripten_enum_PageIteratorLevel_RIL_TEXTLINE();
        Module["RIL_WORD"] = _emscripten_enum_PageIteratorLevel_RIL_WORD();
        Module["RIL_SYMBOL"] = _emscripten_enum_PageIteratorLevel_RIL_SYMBOL();
        Module["OEM_TESSERACT_ONLY"] = _emscripten_enum_OcrEngineMode_OEM_TESSERACT_ONLY();
        Module["OEM_LSTM_ONLY"] = _emscripten_enum_OcrEngineMode_OEM_LSTM_ONLY();
        Module["OEM_TESSERACT_LSTM_COMBINED"] = _emscripten_enum_OcrEngineMode_OEM_TESSERACT_LSTM_COMBINED();
        Module["OEM_DEFAULT"] = _emscripten_enum_OcrEngineMode_OEM_DEFAULT();
        Module["OEM_COUNT"] = _emscripten_enum_OcrEngineMode_OEM_COUNT();
        Module["WRITING_DIRECTION_LEFT_TO_RIGHT"] = _emscripten_enum_WritingDirection__WRITING_DIRECTION_LEFT_TO_RIGHT();
        Module["WRITING_DIRECTION_RIGHT_TO_LEFT"] = _emscripten_enum_WritingDirection__WRITING_DIRECTION_RIGHT_TO_LEFT();
        Module["WRITING_DIRECTION_TOP_TO_BOTTOM"] = _emscripten_enum_WritingDirection__WRITING_DIRECTION_TOP_TO_BOTTOM();
        Module["PT_UNKNOWN"] = _emscripten_enum_PolyBlockType_PT_UNKNOWN();
        Module["PT_FLOWING_TEXT"] = _emscripten_enum_PolyBlockType_PT_FLOWING_TEXT();
        Module["PT_HEADING_TEXT"] = _emscripten_enum_PolyBlockType_PT_HEADING_TEXT();
        Module["PT_PULLOUT_TEXT"] = _emscripten_enum_PolyBlockType_PT_PULLOUT_TEXT();
        Module["PT_EQUATION"] = _emscripten_enum_PolyBlockType_PT_EQUATION();
        Module["PT_INLINE_EQUATION"] = _emscripten_enum_PolyBlockType_PT_INLINE_EQUATION();
        Module["PT_TABLE"] = _emscripten_enum_PolyBlockType_PT_TABLE();
        Module["PT_VERTICAL_TEXT"] = _emscripten_enum_PolyBlockType_PT_VERTICAL_TEXT();
        Module["PT_CAPTION_TEXT"] = _emscripten_enum_PolyBlockType_PT_CAPTION_TEXT();
        Module["PT_FLOWING_IMAGE"] = _emscripten_enum_PolyBlockType_PT_FLOWING_IMAGE();
        Module["PT_HEADING_IMAGE"] = _emscripten_enum_PolyBlockType_PT_HEADING_IMAGE();
        Module["PT_PULLOUT_IMAGE"] = _emscripten_enum_PolyBlockType_PT_PULLOUT_IMAGE();
        Module["PT_HORZ_LINE"] = _emscripten_enum_PolyBlockType_PT_HORZ_LINE();
        Module["PT_VERT_LINE"] = _emscripten_enum_PolyBlockType_PT_VERT_LINE();
        Module["PT_NOISE"] = _emscripten_enum_PolyBlockType_PT_NOISE();
        Module["PT_COUNT"] = _emscripten_enum_PolyBlockType_PT_COUNT();
        Module["DIR_NEUTRAL"] = _emscripten_enum_StrongScriptDirection_DIR_NEUTRAL();
        Module["DIR_LEFT_TO_RIGHT"] = _emscripten_enum_StrongScriptDirection_DIR_LEFT_TO_RIGHT();
        Module["DIR_RIGHT_TO_LEFT"] = _emscripten_enum_StrongScriptDirection_DIR_RIGHT_TO_LEFT();
        Module["DIR_MIX"] = _emscripten_enum_StrongScriptDirection_DIR_MIX();
        Module["JUSTIFICATION_UNKNOWN"] = _emscripten_enum_ParagraphJustification__JUSTIFICATION_UNKNOWN();
        Module["JUSTIFICATION_LEFT"] = _emscripten_enum_ParagraphJustification__JUSTIFICATION_LEFT();
        Module["JUSTIFICATION_CENTER"] = _emscripten_enum_ParagraphJustification__JUSTIFICATION_CENTER();
        Module["JUSTIFICATION_RIGHT"] = _emscripten_enum_ParagraphJustification__JUSTIFICATION_RIGHT();
        Module["TEXTLINE_ORDER_LEFT_TO_RIGHT"] = _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_LEFT_TO_RIGHT();
        Module["TEXTLINE_ORDER_RIGHT_TO_LEFT"] = _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_RIGHT_TO_LEFT();
        Module["TEXTLINE_ORDER_TOP_TO_BOTTOM"] = _emscripten_enum_TextlineOrder__TEXTLINE_ORDER_TOP_TO_BOTTOM();
        Module["ORIENTATION_PAGE_UP"] = _emscripten_enum_Orientation__ORIENTATION_PAGE_UP();
        Module["ORIENTATION_PAGE_RIGHT"] = _emscripten_enum_Orientation__ORIENTATION_PAGE_RIGHT();
        Module["ORIENTATION_PAGE_DOWN"] = _emscripten_enum_Orientation__ORIENTATION_PAGE_DOWN();
        Module["ORIENTATION_PAGE_LEFT"] = _emscripten_enum_Orientation__ORIENTATION_PAGE_LEFT();
        Module["PSM_OSD_ONLY"] = _emscripten_enum_PageSegMode_PSM_OSD_ONLY();
        Module["PSM_AUTO_OSD"] = _emscripten_enum_PageSegMode_PSM_AUTO_OSD();
        Module["PSM_AUTO_ONLY"] = _emscripten_enum_PageSegMode_PSM_AUTO_ONLY();
        Module["PSM_AUTO"] = _emscripten_enum_PageSegMode_PSM_AUTO();
        Module["PSM_SINGLE_COLUMN"] = _emscripten_enum_PageSegMode_PSM_SINGLE_COLUMN();
        Module["PSM_SINGLE_BLOCK_VERT_TEXT"] = _emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK_VERT_TEXT();
        Module["PSM_SINGLE_BLOCK"] = _emscripten_enum_PageSegMode_PSM_SINGLE_BLOCK();
        Module["PSM_SINGLE_LINE"] = _emscripten_enum_PageSegMode_PSM_SINGLE_LINE();
        Module["PSM_SINGLE_WORD"] = _emscripten_enum_PageSegMode_PSM_SINGLE_WORD();
        Module["PSM_CIRCLE_WORD"] = _emscripten_enum_PageSegMode_PSM_CIRCLE_WORD();
        Module["PSM_SINGLE_CHAR"] = _emscripten_enum_PageSegMode_PSM_SINGLE_CHAR();
        Module["PSM_SPARSE_TEXT"] = _emscripten_enum_PageSegMode_PSM_SPARSE_TEXT();
        Module["PSM_SPARSE_TEXT_OSD"] = _emscripten_enum_PageSegMode_PSM_SPARSE_TEXT_OSD();
        Module["PSM_RAW_LINE"] = _emscripten_enum_PageSegMode_PSM_RAW_LINE();
        Module["PSM_COUNT"] = _emscripten_enum_PageSegMode_PSM_COUNT();
      }
      if (Module["calledRun"]) setupEnums();
      else addOnPreMain(setupEnums);
    })();
    BoolPtr.prototype["getValue"] = function (n) {
      return !!getValue(getPointer(this) + (n || 0) * "i1");
    };
    IntPtr.prototype["getValue"] = function (n) {
      return getValue(getPointer(this) + (n || 0) * 4, "i32");
    };
    FloatPtr.prototype["getValue"] = function (n) {
      return getValue(getPointer(this) + (n || 0) * 4, "float");
    };
    DoublePtr.prototype["getValue"] = function (n) {
      return getValue(getPointer(this) + (n || 0) * 8, "double");
    };
    BoxPtr.prototype["get"] =
      PixaPtr.prototype["get"] =
      PixPtr.prototype["get"] =
        function (n) {
          return getValue(getPointer(this) + (n || 0) * 4, "*");
        };
    function pointerHelper() {
      this.obj = {};
    }
    pointerHelper.prototype["wrap"] = function (name, type) {
      var ptr = _malloc(4);
      setValue(ptr, 0, "i32");
      return (this.obj[name] = wrapPointer(ptr, type));
    };
    pointerHelper.prototype["bool"] = function (name) {
      return this["wrap"](name, BoolPtr);
    };
    pointerHelper.prototype["i32"] = function (name) {
      return this["wrap"](name, IntPtr);
    };
    pointerHelper.prototype["f32"] = function (name) {
      return this["wrap"](name, FloatPtr);
    };
    pointerHelper.prototype["f64"] = function (name) {
      return (this.obj[name] = wrapPointer(_malloc(8), DoublePtr));
    };
    pointerHelper.prototype["peek"] = function () {
      var obj = {};
      for (var name in this.obj) {
        obj[name] = this.obj[name]["getValue"]();
      }
      return obj;
    };
    pointerHelper.prototype["get"] = function () {
      var obj = {};
      for (var name in this.obj) {
        obj[name] = this.obj[name]["getValue"]();
        _free(getPointer(this.obj[name]));
      }
      return obj;
    };
    ResultIterator.prototype["getBoundingBox"] = function (level) {
      var pt = new pointerHelper();
      this["BoundingBox"](level, pt["i32"]("x0"), pt["i32"]("y0"), pt["i32"]("x1"), pt["i32"]("y1"));
      return pt.get();
    };
    ResultIterator.prototype["getBaseline"] = function (pil) {
      var pt = new pointerHelper();
      var has_baseline = !!this["Baseline"](pil, pt["i32"]("x0"), pt["i32"]("y0"), pt["i32"]("x1"), pt["i32"]("y1"));
      var obj = pt.get();
      obj["has_baseline"] = has_baseline;
      return obj;
    };
    ResultIterator.prototype["getWordFontAttributes"] = function () {
      var pt = new pointerHelper();
      var fontName = this["WordFontAttributes"](
        pt["bool"]("is_bold"),
        pt["bool"]("is_italic"),
        pt["bool"]("is_underlined"),
        pt["bool"]("is_monospace"),
        pt["bool"]("is_serif"),
        pt["bool"]("is_smallcaps"),
        pt["i32"]("pointsize"),
        pt["i32"]("font_id")
      );
      var obj = pt.get();
      obj["font_name"] = fontName;
      return obj;
    };
    Module["pointerHelper"] = pointerHelper;

    return TesseractCoreWASM;
  };
})();
if (typeof exports === "object" && typeof module === "object") module.exports = TesseractCoreWASM;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return TesseractCoreWASM;
  });
else if (typeof exports === "object") exports["TesseractCoreWASM"] = TesseractCoreWASM;
