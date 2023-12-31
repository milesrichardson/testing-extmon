// Copyright (c) 2010, Google Inc. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//   * Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the name of Google nor the names of its contributors may
//     be used to endorse or promote products derived from this software
//     without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.webpToCanvas = factory();
  }
})(this, function () {
  var Module;
  if (!Module) Module = (typeof Module !== "undefined" ? Module : null) || {};
  var moduleOverrides = {};
  for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }
  var ENVIRONMENT_IS_WEB = false;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false;
  if (Module["ENVIRONMENT"]) {
    if (Module["ENVIRONMENT"] === "WEB") {
      ENVIRONMENT_IS_WEB = true;
    } else if (Module["ENVIRONMENT"] === "WORKER") {
      ENVIRONMENT_IS_WORKER = true;
    } else if (Module["ENVIRONMENT"] === "NODE") {
      ENVIRONMENT_IS_NODE = true;
    } else if (Module["ENVIRONMENT"] === "SHELL") {
      ENVIRONMENT_IS_SHELL = true;
    } else {
      throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
    }
  } else {
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof require === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  }
  if (ENVIRONMENT_IS_NODE) {
    if (!Module["print"]) Module["print"] = console.log;
    if (!Module["printErr"]) Module["printErr"] = console.warn;
    var nodeFS;
    var nodePath;
    Module["read"] = function shell_read(filename, binary) {
      if (!nodeFS) nodeFS = require("fs");
      if (!nodePath) nodePath = require("path");
      filename = nodePath["normalize"](filename);
      var ret = nodeFS["readFileSync"](filename);
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
    Module["load"] = function load(f) {
      globalEval(read(f));
    };
    if (!Module["thisProgram"]) {
      if (process["argv"].length > 1) {
        Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
      } else {
        Module["thisProgram"] = "unknown-program";
      }
    }
    Module["arguments"] = process["argv"].slice(2);
    if (typeof module !== "undefined") {
      module["exports"] = Module;
    }
    process["on"]("uncaughtException", function (ex) {
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });
    Module["inspect"] = function () {
      return "[Emscripten Module object]";
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (!Module["print"]) Module["print"] = print;
    if (typeof printErr != "undefined") Module["printErr"] = printErr;
    if (typeof read != "undefined") {
      Module["read"] = read;
    } else {
      Module["read"] = function shell_read() {
        throw "no read() available";
      };
    }
    Module["readBinary"] = function readBinary(f) {
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(f));
      }
      var data = read(f, "binary");
      assert(typeof data === "object");
      return data;
    };
    if (typeof scriptArgs != "undefined") {
      Module["arguments"] = scriptArgs;
    } else if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }
    if (typeof quit === "function") {
      Module["quit"] = function (status, toThrow) {
        quit(status);
      };
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
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
        } else {
          onerror();
        }
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
    if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }
    if (typeof console !== "undefined") {
      if (!Module["print"])
        Module["print"] = function shell_print(x) {
          console.log(x);
        };
      if (!Module["printErr"])
        Module["printErr"] = function shell_printErr(x) {
          console.warn(x);
        };
    } else {
      var TRY_USE_DUMP = false;
      if (!Module["print"])
        Module["print"] =
          TRY_USE_DUMP && typeof dump !== "undefined"
            ? function (x) {
                dump(x);
              }
            : function (x) {};
    }
    if (ENVIRONMENT_IS_WORKER) {
      Module["load"] = importScripts;
    }
    if (typeof Module["setWindowTitle"] === "undefined") {
      Module["setWindowTitle"] = function (title) {
        document.title = title;
      };
    }
  } else {
    throw "Unknown runtime environment. Where are we?";
  }
  function globalEval(x) {
    abort("NO_DYNAMIC_EXECUTION=1 was set, cannot eval");
  }
  if (!Module["load"] && Module["read"]) {
    Module["load"] = function load(f) {
      globalEval(Module["read"](f));
    };
  }
  if (!Module["print"]) {
    Module["print"] = function () {};
  }
  if (!Module["printErr"]) {
    Module["printErr"] = Module["print"];
  }
  if (!Module["arguments"]) {
    Module["arguments"] = [];
  }
  if (!Module["thisProgram"]) {
    Module["thisProgram"] = "./this.program";
  }
  if (!Module["quit"]) {
    Module["quit"] = function (status, toThrow) {
      throw toThrow;
    };
  }
  Module.print = Module["print"];
  Module.printErr = Module["printErr"];
  Module["preRun"] = [];
  Module["postRun"] = [];
  for (var key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }
  moduleOverrides = undefined;
  var Runtime = {
    setTempRet0: function (value) {
      tempRet0 = value;
      return value;
    },
    getTempRet0: function () {
      return tempRet0;
    },
    stackSave: function () {
      return STACKTOP;
    },
    stackRestore: function (stackTop) {
      STACKTOP = stackTop;
    },
    getNativeTypeSize: function (type) {
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
            return Runtime.QUANTUM_SIZE;
          } else if (type[0] === "i") {
            var bits = parseInt(type.substr(1));
            assert(bits % 8 === 0);
            return bits / 8;
          } else {
            return 0;
          }
        }
      }
    },
    getNativeFieldSize: function (type) {
      return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
    },
    STACK_ALIGN: 16,
    prepVararg: function (ptr, type) {
      if (type === "double" || type === "i64") {
        if (ptr & 7) {
          assert((ptr & 7) === 4);
          ptr += 4;
        }
      } else {
        assert((ptr & 3) === 0);
      }
      return ptr;
    },
    getAlignSize: function (type, size, vararg) {
      if (!vararg && (type == "i64" || type == "double")) return 8;
      if (!type) return Math.min(size, 8);
      return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
    },
    dynCall: function (sig, ptr, args) {
      if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
      } else {
        return Module["dynCall_" + sig].call(null, ptr);
      }
    },
    functionPointers: [],
    addFunction: function (func) {
      for (var i = 0; i < Runtime.functionPointers.length; i++) {
        if (!Runtime.functionPointers[i]) {
          Runtime.functionPointers[i] = func;
          return 2 * (1 + i);
        }
      }
      throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
    },
    removeFunction: function (index) {
      Runtime.functionPointers[(index - 2) / 2] = null;
    },
    warnOnce: function (text) {
      if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
      if (!Runtime.warnOnce.shown[text]) {
        Runtime.warnOnce.shown[text] = 1;
        Module.printErr(text);
      }
    },
    funcWrappers: {},
    getFuncWrapper: function (func, sig) {
      assert(sig);
      if (!Runtime.funcWrappers[sig]) {
        Runtime.funcWrappers[sig] = {};
      }
      var sigCache = Runtime.funcWrappers[sig];
      if (!sigCache[func]) {
        if (sig.length === 1) {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func);
          };
        } else if (sig.length === 2) {
          sigCache[func] = function dynCall_wrapper(arg) {
            return Runtime.dynCall(sig, func, [arg]);
          };
        } else {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
          };
        }
      }
      return sigCache[func];
    },
    getCompilerSetting: function (name) {
      throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
    },
    stackAlloc: function (size) {
      var ret = STACKTOP;
      STACKTOP = (STACKTOP + size) | 0;
      STACKTOP = (STACKTOP + 15) & -16;
      return ret;
    },
    staticAlloc: function (size) {
      var ret = STATICTOP;
      STATICTOP = (STATICTOP + size) | 0;
      STATICTOP = (STATICTOP + 15) & -16;
      return ret;
    },
    dynamicAlloc: function (size) {
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = ((ret + size + 15) | 0) & -16;
      HEAP32[DYNAMICTOP_PTR >> 2] = end;
      if (end >= TOTAL_MEMORY) {
        var success = enlargeMemory();
        if (!success) {
          HEAP32[DYNAMICTOP_PTR >> 2] = ret;
          return 0;
        }
      }
      return ret;
    },
    alignMemory: function (size, quantum) {
      var ret = (size = Math.ceil(size / (quantum ? quantum : 16)) * (quantum ? quantum : 16));
      return ret;
    },
    makeBigInt: function (low, high, unsigned) {
      var ret = unsigned ? +(low >>> 0) + +(high >>> 0) * +4294967296 : +(low >>> 0) + +(high | 0) * +4294967296;
      return ret;
    },
    GLOBAL_BASE: 8,
    QUANTUM_SIZE: 4,
    __dummy__: 0
  };
  Module["Runtime"] = Runtime;
  var ABORT = 0;
  var EXITSTATUS = 0;
  function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed: " + text);
    }
  }
  function getCFunc(ident) {
    var func = Module["_" + ident];
    if (!func) {
      abort("NO_DYNAMIC_EXECUTION=1 was set, cannot eval");
    }
    assert(func, "Cannot call unknown function " + ident + " (perhaps LLVM optimizations or closure removed it?)");
    return func;
  }
  var cwrap, ccall;
  (function () {
    var JSfuncs = {
      stackSave: function () {
        Runtime.stackSave();
      },
      stackRestore: function () {
        Runtime.stackRestore();
      },
      arrayToC: function (arr) {
        var ret = Runtime.stackAlloc(arr.length);
        writeArrayToMemory(arr, ret);
        return ret;
      },
      stringToC: function (str) {
        var ret = 0;
        if (str !== null && str !== undefined && str !== 0) {
          var len = (str.length << 2) + 1;
          ret = Runtime.stackAlloc(len);
          stringToUTF8(str, ret, len);
        }
        return ret;
      }
    };
    var toC = { string: JSfuncs["stringToC"], array: JSfuncs["arrayToC"] };
    ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = Runtime.stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      if (returnType === "string") ret = Pointer_stringify(ret);
      if (stack !== 0) {
        if (opts && opts.async) {
          EmterpreterAsync.asyncFinalizers.push(function () {
            Runtime.stackRestore(stack);
          });
          return;
        }
        Runtime.stackRestore(stack);
      }
      return ret;
    };
    cwrap = function cwrap(ident, returnType, argTypes) {
      return function () {
        return ccall(ident, returnType, argTypes, arguments);
      };
    };
  })();
  Module["ccall"] = ccall;
  Module["cwrap"] = cwrap;
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
          +Math_abs(tempDouble) >= +1
            ? tempDouble > +0
              ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0
              : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0
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
  Module["setValue"] = setValue;
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
        abort("invalid type for setValue: " + type);
    }
    return null;
  }
  Module["getValue"] = getValue;
  var ALLOC_NORMAL = 0;
  var ALLOC_STACK = 1;
  var ALLOC_STATIC = 2;
  var ALLOC_DYNAMIC = 3;
  var ALLOC_NONE = 4;
  Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
  Module["ALLOC_STACK"] = ALLOC_STACK;
  Module["ALLOC_STATIC"] = ALLOC_STATIC;
  Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
  Module["ALLOC_NONE"] = ALLOC_NONE;
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
      ret = [typeof _malloc === "function" ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][
        allocator === undefined ? ALLOC_STATIC : allocator
      ](Math.max(size, singleType ? 1 : types.length));
    }
    if (zeroinit) {
      var ptr = ret,
        stop;
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
      if (typeof curr === "function") {
        curr = Runtime.getFunctionIndex(curr);
      }
      type = singleType || types[i];
      if (type === 0) {
        i++;
        continue;
      }
      if (type == "i64") type = "i32";
      setValue(ret + i, curr, type);
      if (previousType !== type) {
        typeSize = Runtime.getNativeTypeSize(type);
        previousType = type;
      }
      i += typeSize;
    }
    return ret;
  }
  Module["allocate"] = allocate;
  function getMemory(size) {
    if (!staticSealed) return Runtime.staticAlloc(size);
    if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
    return _malloc(size);
  }
  Module["getMemory"] = getMemory;
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
    return Module["UTF8ToString"](ptr);
  }
  Module["Pointer_stringify"] = Pointer_stringify;
  function AsciiToString(ptr) {
    var str = "";
    while (1) {
      var ch = HEAP8[ptr++ >> 0];
      if (!ch) return str;
      str += String.fromCharCode(ch);
    }
  }
  Module["AsciiToString"] = AsciiToString;
  function stringToAscii(str, outPtr) {
    return writeAsciiToMemory(str, outPtr, false);
  }
  Module["stringToAscii"] = stringToAscii;
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
  Module["UTF8ArrayToString"] = UTF8ArrayToString;
  function UTF8ToString(ptr) {
    return UTF8ArrayToString(HEAPU8, ptr);
  }
  Module["UTF8ToString"] = UTF8ToString;
  function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);
      if (u >= 55296 && u <= 57343) u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
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
  Module["stringToUTF8Array"] = stringToUTF8Array;
  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  }
  Module["stringToUTF8"] = stringToUTF8;
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
  Module["lengthBytesUTF8"] = lengthBytesUTF8;
  var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
  function demangle(func) {
    var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];
    if (__cxa_demangle_func) {
      try {
        var s = func.substr(1);
        var len = lengthBytesUTF8(s) + 1;
        var buf = _malloc(len);
        stringToUTF8(s, buf, len);
        var status = _malloc(4);
        var ret = __cxa_demangle_func(buf, 0, 0, status);
        if (getValue(status, "i32") === 0 && ret) {
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
    Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return func;
  }
  function demangleAll(text) {
    var regex = /__Z[\w\d_]+/g;
    return text.replace(regex, function (x) {
      var y = demangle(x);
      return x === y ? x : x + " [" + y + "]";
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
  Module["stackTrace"] = stackTrace;
  var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
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
        ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "
    );
  }
  function enlargeMemory() {
    abortOnCannotGrowMemory();
  }
  var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;
  var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 16777216;
  if (TOTAL_MEMORY < TOTAL_STACK)
    Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
  if (Module["buffer"]) {
    buffer = Module["buffer"];
  } else {
    {
      buffer = new ArrayBuffer(TOTAL_MEMORY);
    }
  }
  updateGlobalBufferViews();
  function getTotalMemory() {
    return TOTAL_MEMORY;
  }
  HEAP32[0] = 1668509029;
  HEAP16[1] = 25459;
  if (HEAPU8[2] !== 115 || HEAPU8[3] !== 99) throw "Runtime error: expected the system to be little-endian!";
  Module["HEAP"] = HEAP;
  Module["buffer"] = buffer;
  Module["HEAP8"] = HEAP8;
  Module["HEAP16"] = HEAP16;
  Module["HEAP32"] = HEAP32;
  Module["HEAPU8"] = HEAPU8;
  Module["HEAPU16"] = HEAPU16;
  Module["HEAPU32"] = HEAPU32;
  Module["HEAPF32"] = HEAPF32;
  Module["HEAPF64"] = HEAPF64;
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
  Module["addOnPreRun"] = addOnPreRun;
  function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }
  Module["addOnInit"] = addOnInit;
  function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }
  Module["addOnPreMain"] = addOnPreMain;
  function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
  }
  Module["addOnExit"] = addOnExit;
  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }
  Module["addOnPostRun"] = addOnPostRun;
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  Module["intArrayFromString"] = intArrayFromString;
  function intArrayToString(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      var chr = array[i];
      if (chr > 255) {
        chr &= 255;
      }
      ret.push(String.fromCharCode(chr));
    }
    return ret.join("");
  }
  Module["intArrayToString"] = intArrayToString;
  function writeStringToMemory(string, buffer, dontAddNull) {
    Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
    var lastChar, end;
    if (dontAddNull) {
      end = buffer + lengthBytesUTF8(string);
      lastChar = HEAP8[end];
    }
    stringToUTF8(string, buffer, Infinity);
    if (dontAddNull) HEAP8[end] = lastChar;
  }
  Module["writeStringToMemory"] = writeStringToMemory;
  function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer);
  }
  Module["writeArrayToMemory"] = writeArrayToMemory;
  function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    }
    if (!dontAddNull) HEAP8[buffer >> 0] = 0;
  }
  Module["writeAsciiToMemory"] = writeAsciiToMemory;
  if (!Math["imul"] || Math["imul"](4294967295, 5) !== -5)
    Math["imul"] = function imul(a, b) {
      var ah = a >>> 16;
      var al = a & 65535;
      var bh = b >>> 16;
      var bl = b & 65535;
      return (al * bl + ((ah * bl + al * bh) << 16)) | 0;
    };
  Math.imul = Math["imul"];
  if (!Math["clz32"])
    Math["clz32"] = function (x) {
      x = x >>> 0;
      for (var i = 0; i < 32; i++) {
        if (x & (1 << (31 - i))) return i;
      }
      return 32;
    };
  Math.clz32 = Math["clz32"];
  if (!Math["trunc"])
    Math["trunc"] = function (x) {
      return x < 0 ? Math.ceil(x) : Math.floor(x);
    };
  Math.trunc = Math["trunc"];
  var Math_abs = Math.abs;
  var Math_cos = Math.cos;
  var Math_sin = Math.sin;
  var Math_tan = Math.tan;
  var Math_acos = Math.acos;
  var Math_asin = Math.asin;
  var Math_atan = Math.atan;
  var Math_atan2 = Math.atan2;
  var Math_exp = Math.exp;
  var Math_log = Math.log;
  var Math_sqrt = Math.sqrt;
  var Math_ceil = Math.ceil;
  var Math_floor = Math.floor;
  var Math_pow = Math.pow;
  var Math_imul = Math.imul;
  var Math_fround = Math.fround;
  var Math_round = Math.round;
  var Math_min = Math.min;
  var Math_clz32 = Math.clz32;
  var Math_trunc = Math.trunc;
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
  Module["addRunDependency"] = addRunDependency;
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
  Module["removeRunDependency"] = removeRunDependency;
  Module["preloadedImages"] = {};
  Module["preloadedAudios"] = {};
  var ASM_CONSTS = [];
  STATIC_BASE = Runtime.GLOBAL_BASE;
  STATICTOP = STATIC_BASE + 12192;
  __ATINIT__.push();
  allocate(
    [
      0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 15, 0, 0, 0, 31, 0, 0, 0, 63, 0, 0, 0, 127, 0, 0, 0, 255, 0, 0, 0, 255, 1, 0, 0, 255,
      3, 0, 0, 255, 7, 0, 0, 255, 15, 0, 0, 255, 31, 0, 0, 255, 63, 0, 0, 255, 127, 0, 0, 255, 255, 0, 0, 255, 255, 1, 0, 255, 255, 3, 0,
      255, 255, 7, 0, 255, 255, 15, 0, 255, 255, 31, 0, 255, 255, 63, 0, 255, 255, 127, 0, 255, 255, 255, 0, 108, 0, 0, 0, 112, 0, 0, 0,
      116, 0, 0, 0, 120, 0, 0, 0, 124, 0, 0, 0, 128, 0, 0, 0, 132, 0, 0, 0, 48, 82, 225, 13, 134, 24, 179, 3, 203, 172, 95, 119, 106, 98,
      136, 28, 85, 92, 56, 104, 40, 184, 179, 20, 248, 254, 133, 74, 75, 184, 221, 73, 151, 243, 252, 100, 137, 2, 85, 92, 0, 0, 41, 74,
      218, 193, 126, 13, 171, 183, 64, 89, 125, 87, 146, 84, 114, 202, 25, 78, 105, 140, 211, 56, 101, 238, 1, 12, 95, 117, 161, 50, 82,
      246, 55, 84, 50, 44, 187, 90, 177, 87, 170, 15, 231, 51, 245, 115, 218, 238, 95, 104, 226, 204, 99, 117, 131, 14, 153, 110, 237, 167,
      48, 71, 198, 217, 192, 79, 60, 21, 107, 73, 250, 3, 20, 79, 12, 251, 26, 84, 50, 11, 153, 115, 28, 203, 215, 38, 6, 55, 204, 111, 216,
      119, 187, 44, 42, 47, 118, 117, 221, 204, 37, 100, 97, 84, 179, 36, 21, 135, 125, 10, 168, 20, 4, 34, 103, 191, 30, 20, 131, 21, 180,
      86, 227, 2, 229, 115, 111, 177, 202, 68, 66, 77, 38, 40, 251, 174, 186, 115, 237, 235, 80, 10, 251, 182, 106, 29, 11, 212, 58, 13,
      104, 59, 219, 53, 131, 30, 8, 43, 149, 107, 206, 119, 240, 229, 129, 81, 188, 59, 133, 120, 148, 148, 159, 0, 60, 237, 229, 39, 100,
      1, 0, 0, 104, 1, 0, 0, 69, 33, 0, 0, 73, 33, 0, 0, 78, 33, 0, 0, 84, 33, 0, 0, 86, 80, 56, 32, 1, 0, 0, 0, 2, 0, 0, 0, 86, 80, 56, 76,
      1, 0, 0, 0, 2, 0, 0, 0, 86, 80, 56, 88, 3, 0, 0, 0, 4, 0, 0, 0, 48, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 156, 47, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 47, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 138, 11, 140, 11, 142, 11, 146, 11, 154, 11, 170, 11, 202, 11, 10, 12, 140, 12, 140, 13, 140, 15, 140, 19, 24, 1, 0, 1, 0,
      1, 0, 1, 40, 0, 0, 0, 4, 0, 8, 0, 12, 0, 128, 0, 132, 0, 136, 0, 140, 0, 0, 1, 4, 1, 8, 1, 12, 1, 128, 1, 132, 1, 136, 1, 140, 1, 4,
      0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 16, 0, 17, 0, 18, 0, 19, 0, 20, 0, 21, 0, 22, 0, 23, 0, 24,
      0, 25, 0, 26, 0, 27, 0, 28, 0, 29, 0, 30, 0, 31, 0, 32, 0, 33, 0, 34, 0, 35, 0, 36, 0, 37, 0, 38, 0, 39, 0, 40, 0, 41, 0, 42, 0, 43,
      0, 44, 0, 45, 0, 46, 0, 47, 0, 48, 0, 49, 0, 50, 0, 51, 0, 52, 0, 53, 0, 54, 0, 55, 0, 56, 0, 57, 0, 58, 0, 60, 0, 62, 0, 64, 0, 66,
      0, 68, 0, 70, 0, 72, 0, 74, 0, 76, 0, 78, 0, 80, 0, 82, 0, 84, 0, 86, 0, 88, 0, 90, 0, 92, 0, 94, 0, 96, 0, 98, 0, 100, 0, 102, 0,
      104, 0, 106, 0, 108, 0, 110, 0, 112, 0, 114, 0, 116, 0, 119, 0, 122, 0, 125, 0, 128, 0, 131, 0, 134, 0, 137, 0, 140, 0, 143, 0, 146,
      0, 149, 0, 152, 0, 155, 0, 158, 0, 161, 0, 164, 0, 167, 0, 170, 0, 173, 0, 177, 0, 181, 0, 185, 0, 189, 0, 193, 0, 197, 0, 201, 0,
      205, 0, 209, 0, 213, 0, 217, 0, 221, 0, 225, 0, 229, 0, 234, 0, 239, 0, 245, 0, 249, 0, 254, 0, 3, 1, 8, 1, 13, 1, 18, 1, 23, 1, 28,
      1, 85, 110, 97, 98, 108, 101, 32, 116, 111, 32, 100, 101, 109, 117, 120, 32, 102, 114, 97, 109, 101, 33, 10, 0, 85, 110, 97, 98, 108,
      101, 32, 116, 111, 32, 115, 101, 116, 32, 118, 105, 100, 101, 111, 32, 109, 111, 100, 101, 32, 40, 51, 50, 98, 112, 112, 32, 37, 100,
      120, 37, 100, 41, 33, 10, 0, 85, 110, 97, 98, 108, 101, 32, 116, 111, 32, 99, 114, 101, 97, 116, 101, 32, 37, 100, 120, 37, 100, 32,
      82, 71, 66, 65, 32, 115, 117, 114, 102, 97, 99, 101, 33, 10, 0, 69, 114, 114, 111, 114, 32, 100, 101, 99, 111, 100, 105, 110, 103, 32,
      105, 109, 97, 103, 101, 32, 40, 37, 100, 41, 10, 0, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
      143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
      170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196,
      197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223,
      224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
      251, 252, 253, 254, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
      63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
      96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
      123, 124, 125, 126, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
      127, 127, 127, 127, 127, 127, 0, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
      240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
      240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
      240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 241, 242, 243, 244,
      245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
      144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
      171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
      198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
      225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251,
      252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 254, 253, 252, 251, 250, 249, 248, 247, 246,
      245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219,
      218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192,
      191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165,
      164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138,
      137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111,
      110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
      79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47,
      46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14,
      13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
      119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
      146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
      173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
      200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
      227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253,
      254, 255, 24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74,
      36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84,
      92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94,
      0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112, 17, 18, 0, 1, 2, 3, 4, 5,
      16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2, 3, 7, 3, 3, 11, 3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1, 8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1,
      0, 2, 8, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 100, 101, 99, 111, 100, 101, 32, 97, 108, 112, 104, 97, 32, 100, 97, 116, 97,
      46, 0, 70, 114, 97, 109, 101, 32, 115, 101, 116, 117, 112, 32, 102, 97, 105, 108, 101, 100, 0, 110, 111, 32, 109, 101, 109, 111, 114,
      121, 32, 100, 117, 114, 105, 110, 103, 32, 102, 114, 97, 109, 101, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111,
      110, 46, 0, 86, 80, 56, 88, 0, 65, 76, 80, 72, 0, 86, 80, 56, 32, 0, 86, 80, 56, 76, 0, 231, 120, 48, 89, 115, 113, 120, 152, 112,
      152, 179, 64, 126, 170, 118, 46, 70, 95, 175, 69, 143, 80, 85, 82, 72, 155, 103, 56, 58, 10, 171, 218, 189, 17, 13, 152, 114, 26, 17,
      163, 44, 195, 21, 10, 173, 121, 24, 80, 195, 26, 62, 44, 64, 85, 144, 71, 10, 38, 171, 213, 144, 34, 26, 170, 46, 55, 19, 136, 160,
      33, 206, 71, 63, 20, 8, 114, 114, 208, 12, 9, 226, 81, 40, 11, 96, 182, 84, 29, 16, 36, 134, 183, 89, 137, 98, 101, 106, 165, 148, 72,
      187, 100, 130, 157, 111, 32, 75, 80, 66, 102, 167, 99, 74, 62, 40, 234, 128, 41, 53, 9, 178, 241, 141, 26, 8, 107, 74, 43, 26, 146,
      73, 166, 49, 23, 157, 65, 38, 105, 160, 51, 52, 31, 115, 128, 104, 79, 12, 27, 217, 255, 87, 17, 7, 87, 68, 71, 44, 114, 51, 15, 186,
      23, 47, 41, 14, 110, 182, 183, 21, 17, 194, 66, 45, 25, 102, 197, 189, 23, 18, 22, 88, 88, 147, 150, 42, 46, 45, 196, 205, 43, 97,
      183, 117, 85, 38, 35, 179, 61, 39, 53, 200, 87, 26, 21, 43, 232, 171, 56, 34, 51, 104, 114, 102, 29, 93, 77, 39, 28, 85, 171, 58, 165,
      90, 98, 64, 34, 22, 116, 206, 23, 34, 43, 166, 73, 107, 54, 32, 26, 51, 1, 81, 43, 31, 68, 25, 106, 22, 64, 171, 36, 225, 114, 34, 19,
      21, 102, 132, 188, 16, 76, 124, 62, 18, 78, 95, 85, 57, 50, 48, 51, 193, 101, 35, 159, 215, 111, 89, 46, 111, 60, 148, 31, 172, 219,
      228, 21, 18, 111, 112, 113, 77, 85, 179, 255, 38, 120, 114, 40, 42, 1, 196, 245, 209, 10, 25, 109, 88, 43, 29, 140, 166, 213, 37, 43,
      154, 61, 63, 30, 155, 67, 45, 68, 1, 209, 100, 80, 8, 43, 154, 1, 51, 26, 71, 142, 78, 78, 16, 255, 128, 34, 197, 171, 41, 40, 5, 102,
      211, 183, 4, 1, 221, 51, 50, 17, 168, 209, 192, 23, 25, 82, 138, 31, 36, 171, 27, 166, 38, 44, 229, 67, 87, 58, 169, 82, 115, 26, 59,
      179, 63, 59, 90, 180, 59, 166, 93, 73, 154, 40, 40, 21, 116, 143, 209, 34, 39, 175, 47, 15, 16, 183, 34, 223, 49, 45, 183, 46, 17, 33,
      183, 6, 98, 15, 32, 183, 57, 46, 22, 24, 128, 1, 54, 17, 37, 65, 32, 73, 115, 28, 128, 23, 128, 205, 40, 3, 9, 115, 51, 192, 18, 6,
      223, 87, 37, 9, 115, 59, 77, 64, 21, 47, 104, 55, 44, 218, 9, 54, 53, 130, 226, 64, 90, 70, 205, 40, 41, 23, 26, 57, 54, 57, 112, 184,
      5, 41, 38, 166, 213, 30, 34, 26, 133, 152, 116, 10, 32, 134, 39, 19, 53, 221, 26, 114, 32, 73, 255, 31, 9, 65, 234, 2, 15, 1, 118, 73,
      75, 32, 12, 51, 192, 255, 160, 43, 51, 88, 31, 35, 67, 102, 85, 55, 186, 85, 56, 21, 23, 111, 59, 205, 45, 37, 192, 55, 38, 70, 124,
      73, 102, 1, 34, 98, 125, 98, 42, 88, 104, 85, 117, 175, 82, 95, 84, 53, 89, 128, 100, 113, 101, 45, 75, 79, 123, 47, 51, 128, 81, 171,
      1, 57, 17, 5, 71, 102, 57, 53, 41, 49, 38, 33, 13, 121, 57, 73, 26, 1, 85, 41, 10, 67, 138, 77, 110, 90, 47, 114, 115, 21, 2, 10, 102,
      255, 166, 23, 6, 101, 29, 16, 10, 85, 128, 101, 196, 26, 57, 18, 10, 102, 102, 213, 34, 20, 43, 117, 20, 15, 36, 163, 128, 68, 1, 26,
      102, 61, 71, 37, 34, 53, 31, 243, 192, 69, 60, 71, 38, 73, 119, 28, 222, 37, 68, 45, 128, 34, 1, 47, 11, 245, 171, 62, 17, 19, 70,
      146, 85, 55, 62, 70, 37, 43, 37, 154, 100, 163, 85, 160, 1, 63, 9, 92, 136, 28, 64, 32, 201, 85, 75, 15, 9, 9, 64, 255, 184, 119, 16,
      86, 6, 28, 5, 64, 255, 25, 248, 1, 56, 8, 17, 132, 137, 255, 55, 116, 128, 58, 15, 20, 82, 135, 57, 26, 121, 40, 164, 50, 31, 137,
      154, 133, 25, 35, 218, 51, 103, 44, 131, 131, 123, 31, 6, 158, 86, 40, 64, 135, 148, 224, 45, 183, 128, 22, 26, 17, 131, 240, 154, 14,
      1, 209, 45, 16, 21, 91, 64, 222, 7, 1, 197, 56, 21, 39, 155, 60, 138, 23, 102, 213, 83, 12, 13, 54, 192, 255, 68, 47, 28, 85, 26, 85,
      85, 128, 128, 32, 146, 171, 18, 11, 7, 63, 144, 171, 4, 4, 246, 35, 27, 10, 146, 174, 171, 12, 26, 128, 190, 80, 35, 99, 180, 80, 126,
      54, 45, 85, 126, 47, 87, 176, 51, 41, 20, 32, 101, 75, 128, 139, 118, 146, 116, 128, 85, 56, 41, 15, 176, 236, 85, 37, 9, 62, 71, 30,
      17, 119, 118, 255, 17, 18, 138, 101, 38, 60, 138, 55, 70, 43, 26, 142, 146, 36, 19, 30, 171, 255, 97, 27, 20, 138, 45, 61, 62, 219, 1,
      81, 188, 64, 32, 41, 20, 117, 151, 142, 20, 21, 163, 112, 19, 12, 61, 195, 128, 48, 4, 24, 0, 1, 255, 2, 254, 3, 4, 6, 253, 5, 252,
      251, 250, 7, 249, 8, 248, 247, 79, 75, 0, 110, 117, 108, 108, 32, 86, 80, 56, 73, 111, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111,
      32, 86, 80, 56, 71, 101, 116, 72, 101, 97, 100, 101, 114, 115, 40, 41, 0, 84, 114, 117, 110, 99, 97, 116, 101, 100, 32, 104, 101, 97,
      100, 101, 114, 46, 0, 73, 110, 99, 111, 114, 114, 101, 99, 116, 32, 107, 101, 121, 102, 114, 97, 109, 101, 32, 112, 97, 114, 97, 109,
      101, 116, 101, 114, 115, 46, 0, 70, 114, 97, 109, 101, 32, 110, 111, 116, 32, 100, 105, 115, 112, 108, 97, 121, 97, 98, 108, 101, 46,
      0, 99, 97, 110, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 112, 105, 99, 116, 117, 114, 101, 32, 104, 101, 97, 100, 101, 114, 0,
      66, 97, 100, 32, 99, 111, 100, 101, 32, 119, 111, 114, 100, 0, 98, 97, 100, 32, 112, 97, 114, 116, 105, 116, 105, 111, 110, 32, 108,
      101, 110, 103, 116, 104, 0, 99, 97, 110, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 115, 101, 103, 109, 101, 110, 116, 32, 104,
      101, 97, 100, 101, 114, 0, 99, 97, 110, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 102, 105, 108, 116, 101, 114, 32, 104, 101, 97,
      100, 101, 114, 0, 99, 97, 110, 110, 111, 116, 32, 112, 97, 114, 115, 101, 32, 112, 97, 114, 116, 105, 116, 105, 111, 110, 115, 0, 78,
      111, 116, 32, 97, 32, 107, 101, 121, 32, 102, 114, 97, 109, 101, 46, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 176, 246, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255, 249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255, 234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 253, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255, 239, 253, 254, 255, 255, 255, 255, 255, 255, 255,
      255, 254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255, 251, 255, 254, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 254, 255, 255, 255, 255, 255, 255,
      255, 255, 251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 253,
      255, 254, 255, 255, 255, 255, 255, 255, 250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 225, 252, 241, 253, 255, 255, 254,
      255, 255, 255, 255, 234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 223,
      254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 248, 254, 255, 255, 255,
      255, 255, 255, 255, 255, 249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 253, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 253, 255, 255, 255, 255, 255, 255,
      255, 255, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255, 234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255, 251, 251,
      243, 253, 254, 255, 254, 255, 255, 255, 255, 255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 236, 253, 254, 255, 255, 255, 255,
      255, 255, 255, 255, 251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 254,
      254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 248, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255, 248, 254, 249, 253, 255, 255, 255, 255,
      255, 255, 255, 255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255, 252, 254,
      251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255, 248, 254, 253, 255, 255, 255, 255,
      255, 255, 255, 255, 253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255, 245,
      251, 254, 255, 255, 255, 255, 255, 255, 255, 255, 253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 251, 253, 255, 255, 255,
      255, 255, 255, 255, 255, 252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 250, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 253, 136, 254,
      255, 228, 219, 128, 128, 128, 128, 128, 189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128, 106, 126, 227, 252, 214, 209, 255, 255,
      128, 128, 128, 1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128, 181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128, 78, 134,
      202, 247, 198, 180, 255, 219, 128, 128, 128, 1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128, 184, 150, 247, 255, 236, 224, 128,
      128, 128, 128, 128, 77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128, 1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128, 170,
      139, 241, 252, 236, 209, 255, 255, 128, 128, 128, 37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128, 1, 204, 254, 255, 245, 255,
      128, 128, 128, 128, 128, 207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128, 102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128,
      1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128, 177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128, 80, 129, 211, 255, 194,
      224, 128, 128, 128, 128, 128, 1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128, 246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128,
      255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62, 131, 45, 198, 221, 172,
      176, 220, 157, 252, 221, 1, 68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128, 1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128,
      184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128, 81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128, 1, 129, 232, 253, 214,
      197, 242, 196, 255, 255, 128, 99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128, 23, 91, 163, 242, 170, 187, 247, 210, 255, 255,
      128, 1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128, 109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128, 44, 130, 201, 253,
      205, 192, 255, 255, 128, 128, 128, 1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128, 94, 136, 225, 251, 218, 190, 255, 255, 128,
      128, 128, 22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128, 1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128, 124, 143, 241,
      255, 227, 234, 128, 128, 128, 128, 128, 35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128, 1, 157, 247, 255, 236, 231, 255, 255,
      128, 128, 128, 121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128, 45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128, 1, 1, 251,
      255, 213, 255, 128, 128, 128, 128, 128, 203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128, 137, 1, 177, 255, 224, 255, 128, 128,
      128, 128, 128, 253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128, 175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128, 73, 17, 171,
      221, 161, 179, 236, 167, 255, 234, 128, 1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128, 239, 90, 244, 250, 211, 209, 255, 255,
      128, 128, 128, 155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128, 1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128, 201, 51, 219,
      255, 196, 186, 128, 128, 128, 128, 128, 69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128, 1, 191, 251, 255, 255, 128, 128, 128,
      128, 128, 128, 223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128, 141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128, 1, 16,
      248, 255, 255, 128, 128, 128, 128, 128, 128, 190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128, 149, 1, 255, 128, 128, 128, 128,
      128, 128, 128, 128, 1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128, 247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128, 240,
      128, 255, 128, 128, 128, 128, 128, 128, 128, 128, 1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128, 213, 62, 250, 255, 255, 128,
      128, 128, 128, 128, 128, 55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 202, 24, 213, 235, 186,
      191, 220, 160, 240, 175, 255, 126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128, 61, 46, 138, 219, 151, 178, 240, 170, 255, 216,
      128, 1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128, 166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128, 39, 77, 162, 232,
      172, 180, 245, 178, 255, 255, 128, 1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128, 124, 74, 191, 243, 183, 193, 250, 221, 255,
      255, 128, 24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128, 1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128, 149, 150, 226,
      252, 216, 205, 255, 171, 128, 128, 128, 28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128, 1, 81, 230, 252, 204, 203, 255, 192,
      128, 128, 128, 123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128, 20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128, 1, 222,
      248, 255, 216, 213, 128, 128, 128, 128, 128, 168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128, 47, 116, 215, 255, 211, 212, 255,
      255, 128, 128, 128, 1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128, 141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128, 42, 80,
      160, 240, 162, 185, 255, 205, 128, 128, 128, 1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128, 244, 1, 255, 128, 128, 128, 128, 128,
      128, 128, 128, 238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19,
      20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77,
      78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124,
      126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157, 0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15, 173, 148,
      140, 0, 176, 155, 140, 135, 0, 180, 157, 141, 134, 130, 0, 254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0, 80, 114, 101,
      109, 97, 116, 117, 114, 101, 32, 101, 110, 100, 45, 111, 102, 45, 112, 97, 114, 116, 105, 116, 105, 111, 110, 48, 32, 101, 110, 99,
      111, 117, 110, 116, 101, 114, 101, 100, 46, 0, 80, 114, 101, 109, 97, 116, 117, 114, 101, 32, 101, 110, 100, 45, 111, 102, 45, 102,
      105, 108, 101, 32, 101, 110, 99, 111, 117, 110, 116, 101, 114, 101, 100, 46, 0, 79, 117, 116, 112, 117, 116, 32, 97, 98, 111, 114,
      116, 101, 100, 46, 0, 82, 73, 70, 70, 0, 87, 69, 66, 80, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
      11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17,
      17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9,
      11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0,
      9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0,
      0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48,
      120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 78, 65, 78, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67,
      68, 69, 70, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20,
      21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90,
      91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103,
      97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114,
      0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116,
      32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114,
      97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32,
      102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114,
      111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108,
      97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108,
      101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82,
      101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115,
      116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108,
      121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114,
      111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105,
      108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116,
      121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112,
      101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110,
      32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115,
      32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66,
      114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32,
      100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99,
      101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116,
      32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84,
      101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114,
      111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32,
      108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32,
      108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97,
      110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102,
      105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100,
      32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114,
      111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97,
      114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97,
      118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111,
      117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98,
      108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97,
      116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109,
      112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32
    ],
    "i8",
    ALLOC_NONE,
    Runtime.GLOBAL_BASE
  );
  allocate(
    [
      109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110,
      116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32,
      115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99,
      101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115,
      111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0,
      80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105,
      108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111,
      116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115,
      115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0,
      80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107,
      101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111,
      116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116,
      121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114,
      116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112,
      111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112,
      112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110,
      111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0,
      78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111,
      110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111,
      110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97,
      105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111,
      99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110,
      100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114,
      97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112,
      101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105,
      108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117,
      111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0,
      87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105,
      110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0, 110, 97, 110, 0, 40, 110, 117, 108, 108, 41, 0, 46, 0
    ],
    "i8",
    ALLOC_NONE,
    Runtime.GLOBAL_BASE + 10240
  );
  var tempDoublePtr = STATICTOP;
  STATICTOP += 16;
  var GL = {
    counter: 1,
    lastError: 0,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    uniforms: [],
    shaders: [],
    vaos: [],
    contexts: [],
    currentContext: null,
    offscreenCanvases: {},
    timerQueriesEXT: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    programInfos: {},
    stringCache: {},
    tempFixedLengthArray: [],
    packAlignment: 4,
    unpackAlignment: 4,
    init: function () {
      GL.miniTempBuffer = new Float32Array(GL.MINI_TEMP_BUFFER_SIZE);
      for (var i = 0; i < GL.MINI_TEMP_BUFFER_SIZE; i++) {
        GL.miniTempBufferViews[i] = GL.miniTempBuffer.subarray(0, i + 1);
      }
      for (var i = 0; i < 32; i++) {
        GL.tempFixedLengthArray.push(new Array(i));
      }
    },
    recordError: function recordError(errorCode) {
      if (!GL.lastError) {
        GL.lastError = errorCode;
      }
    },
    getNewId: function (table) {
      var ret = GL.counter++;
      for (var i = table.length; i < ret; i++) {
        table[i] = null;
      }
      return ret;
    },
    MINI_TEMP_BUFFER_SIZE: 256,
    miniTempBuffer: null,
    miniTempBufferViews: [0],
    getSource: function (shader, count, string, length) {
      var source = "";
      for (var i = 0; i < count; ++i) {
        var frag;
        if (length) {
          var len = HEAP32[(length + i * 4) >> 2];
          if (len < 0) {
            frag = Pointer_stringify(HEAP32[(string + i * 4) >> 2]);
          } else {
            frag = Pointer_stringify(HEAP32[(string + i * 4) >> 2], len);
          }
        } else {
          frag = Pointer_stringify(HEAP32[(string + i * 4) >> 2]);
        }
        source += frag;
      }
      return source;
    },
    createContext: function (canvas, webGLContextAttributes) {
      if (typeof webGLContextAttributes["majorVersion"] === "undefined" && typeof webGLContextAttributes["minorVersion"] === "undefined") {
        webGLContextAttributes["majorVersion"] = 1;
        webGLContextAttributes["minorVersion"] = 0;
      }
      var ctx;
      var errorInfo = "?";
      function onContextCreationError(event) {
        errorInfo = event.statusMessage || errorInfo;
      }
      try {
        canvas.addEventListener("webglcontextcreationerror", onContextCreationError, false);
        try {
          if (webGLContextAttributes["majorVersion"] == 1 && webGLContextAttributes["minorVersion"] == 0) {
            ctx = canvas.getContext("webgl", webGLContextAttributes) || canvas.getContext("experimental-webgl", webGLContextAttributes);
          } else if (webGLContextAttributes["majorVersion"] == 2 && webGLContextAttributes["minorVersion"] == 0) {
            ctx = canvas.getContext("webgl2", webGLContextAttributes);
          } else {
            throw "Unsupported WebGL context version " + majorVersion + "." + minorVersion + "!";
          }
        } finally {
          canvas.removeEventListener("webglcontextcreationerror", onContextCreationError, false);
        }
        if (!ctx) throw ":(";
      } catch (e) {
        Module.print("Could not create canvas: " + [errorInfo, e, JSON.stringify(webGLContextAttributes)]);
        return 0;
      }
      if (!ctx) return 0;
      return GL.registerContext(ctx, webGLContextAttributes);
    },
    registerContext: function (ctx, webGLContextAttributes) {
      var handle = GL.getNewId(GL.contexts);
      var context = { handle: handle, attributes: webGLContextAttributes, version: webGLContextAttributes["majorVersion"], GLctx: ctx };
      if (ctx.canvas) ctx.canvas.GLctxObject = context;
      GL.contexts[handle] = context;
      if (
        typeof webGLContextAttributes["enableExtensionsByDefault"] === "undefined" ||
        webGLContextAttributes["enableExtensionsByDefault"]
      ) {
        GL.initExtensions(context);
      }
      return handle;
    },
    makeContextCurrent: function (contextHandle) {
      var context = GL.contexts[contextHandle];
      if (!context) return false;
      GLctx = Module.ctx = context.GLctx;
      GL.currentContext = context;
      return true;
    },
    getContext: function (contextHandle) {
      return GL.contexts[contextHandle];
    },
    deleteContext: function (contextHandle) {
      if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
      if (typeof JSEvents === "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
      if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
        GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
      GL.contexts[contextHandle] = null;
    },
    initExtensions: function (context) {
      if (!context) context = GL.currentContext;
      if (context.initExtensionsDone) return;
      context.initExtensionsDone = true;
      var GLctx = context.GLctx;
      context.maxVertexAttribs = GLctx.getParameter(GLctx.MAX_VERTEX_ATTRIBS);
      if (context.version < 2) {
        var instancedArraysExt = GLctx.getExtension("ANGLE_instanced_arrays");
        if (instancedArraysExt) {
          GLctx["vertexAttribDivisor"] = function (index, divisor) {
            instancedArraysExt["vertexAttribDivisorANGLE"](index, divisor);
          };
          GLctx["drawArraysInstanced"] = function (mode, first, count, primcount) {
            instancedArraysExt["drawArraysInstancedANGLE"](mode, first, count, primcount);
          };
          GLctx["drawElementsInstanced"] = function (mode, count, type, indices, primcount) {
            instancedArraysExt["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
          };
        }
        var vaoExt = GLctx.getExtension("OES_vertex_array_object");
        if (vaoExt) {
          GLctx["createVertexArray"] = function () {
            return vaoExt["createVertexArrayOES"]();
          };
          GLctx["deleteVertexArray"] = function (vao) {
            vaoExt["deleteVertexArrayOES"](vao);
          };
          GLctx["bindVertexArray"] = function (vao) {
            vaoExt["bindVertexArrayOES"](vao);
          };
          GLctx["isVertexArray"] = function (vao) {
            return vaoExt["isVertexArrayOES"](vao);
          };
        }
        var drawBuffersExt = GLctx.getExtension("WEBGL_draw_buffers");
        if (drawBuffersExt) {
          GLctx["drawBuffers"] = function (n, bufs) {
            drawBuffersExt["drawBuffersWEBGL"](n, bufs);
          };
        }
      }
      GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
      var automaticallyEnabledExtensions = [
        "OES_texture_float",
        "OES_texture_half_float",
        "OES_standard_derivatives",
        "OES_vertex_array_object",
        "WEBGL_compressed_texture_s3tc",
        "WEBGL_depth_texture",
        "OES_element_index_uint",
        "EXT_texture_filter_anisotropic",
        "ANGLE_instanced_arrays",
        "OES_texture_float_linear",
        "OES_texture_half_float_linear",
        "WEBGL_compressed_texture_atc",
        "WEBGL_compressed_texture_pvrtc",
        "EXT_color_buffer_half_float",
        "WEBGL_color_buffer_float",
        "EXT_frag_depth",
        "EXT_sRGB",
        "WEBGL_draw_buffers",
        "WEBGL_shared_resources",
        "EXT_shader_texture_lod",
        "EXT_color_buffer_float"
      ];
      var exts = GLctx.getSupportedExtensions();
      if (exts && exts.length > 0) {
        GLctx.getSupportedExtensions().forEach(function (ext) {
          if (automaticallyEnabledExtensions.indexOf(ext) != -1) {
            GLctx.getExtension(ext);
          }
        });
      }
    },
    populateUniformTable: function (program) {
      var p = GL.programs[program];
      GL.programInfos[program] = { uniforms: {}, maxUniformLength: 0, maxAttributeLength: -1, maxUniformBlockNameLength: -1 };
      var ptable = GL.programInfos[program];
      var utable = ptable.uniforms;
      var numUniforms = GLctx.getProgramParameter(p, GLctx.ACTIVE_UNIFORMS);
      for (var i = 0; i < numUniforms; ++i) {
        var u = GLctx.getActiveUniform(p, i);
        var name = u.name;
        ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length + 1);
        if (name.indexOf("]", name.length - 1) !== -1) {
          var ls = name.lastIndexOf("[");
          name = name.slice(0, ls);
        }
        var loc = GLctx.getUniformLocation(p, name);
        if (loc != null) {
          var id = GL.getNewId(GL.uniforms);
          utable[name] = [u.size, id];
          GL.uniforms[id] = loc;
          for (var j = 1; j < u.size; ++j) {
            var n = name + "[" + j + "]";
            loc = GLctx.getUniformLocation(p, n);
            id = GL.getNewId(GL.uniforms);
            GL.uniforms[id] = loc;
          }
        }
      }
    }
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
  function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;
    Browser.mainLoop.timingValue = value;
    if (!Browser.mainLoop.func) {
      return 1;
    }
    if (mode == 0) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
        var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
        setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
      };
      Browser.mainLoop.method = "timeout";
    } else if (mode == 1) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
        Browser.requestAnimationFrame(Browser.mainLoop.runner);
      };
      Browser.mainLoop.method = "rAF";
    } else if (mode == 2) {
      if (!window["setImmediate"]) {
        var setImmediates = [];
        var emscriptenMainLoopMessageId = "setimmediate";
        function Browser_setImmediate_messageHandler(event) {
          if (event.source === window && event.data === emscriptenMainLoopMessageId) {
            event.stopPropagation();
            setImmediates.shift()();
          }
        }
        window.addEventListener("message", Browser_setImmediate_messageHandler, true);
        window["setImmediate"] = function Browser_emulated_setImmediate(func) {
          setImmediates.push(func);
          if (ENVIRONMENT_IS_WORKER) {
            if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
            Module["setImmediates"].push(func);
            window.postMessage({ target: emscriptenMainLoopMessageId });
          } else window.postMessage(emscriptenMainLoopMessageId, "*");
        };
      }
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
        window["setImmediate"](Browser.mainLoop.runner);
      };
      Browser.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _emscripten_get_now() {
    abort();
  }
  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
    Module["noExitRuntime"] = true;
    assert(
      !Browser.mainLoop.func,
      "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
    );
    Browser.mainLoop.func = func;
    Browser.mainLoop.arg = arg;
    var browserIterationFunc;
    if (typeof arg !== "undefined") {
      browserIterationFunc = function () {
        Module["dynCall_vi"](func, arg);
      };
    } else {
      browserIterationFunc = function () {
        Module["dynCall_v"](func);
      };
    }
    var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
    Browser.mainLoop.runner = function Browser_mainLoop_runner() {
      if (ABORT) return;
      if (Browser.mainLoop.queue.length > 0) {
        var start = Date.now();
        var blocker = Browser.mainLoop.queue.shift();
        blocker.func(blocker.arg);
        if (Browser.mainLoop.remainingBlockers) {
          var remaining = Browser.mainLoop.remainingBlockers;
          var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
          if (blocker.counted) {
            Browser.mainLoop.remainingBlockers = next;
          } else {
            next = next + 0.5;
            Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
          }
        }
        console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
        Browser.mainLoop.updateStatus();
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
        setTimeout(Browser.mainLoop.runner, 0);
        return;
      }
      if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
      Browser.mainLoop.currentFrameNumber = (Browser.mainLoop.currentFrameNumber + 1) | 0;
      if (
        Browser.mainLoop.timingMode == 1 &&
        Browser.mainLoop.timingValue > 1 &&
        Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0
      ) {
        Browser.mainLoop.scheduler();
        return;
      } else if (Browser.mainLoop.timingMode == 0) {
        Browser.mainLoop.tickStartTime = _emscripten_get_now();
      }
      if (Browser.mainLoop.method === "timeout" && Module.ctx) {
        Module.printErr(
          "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"
        );
        Browser.mainLoop.method = "";
      }
      Browser.mainLoop.runIter(browserIterationFunc);
      if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
      Browser.mainLoop.scheduler();
    };
    if (!noSetTiming) {
      if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);
      else _emscripten_set_main_loop_timing(1, 1);
      Browser.mainLoop.scheduler();
    }
    if (simulateInfiniteLoop) {
      throw "SimulateInfiniteLoop";
    }
  }
  var Browser = {
    mainLoop: {
      scheduler: null,
      method: "",
      currentlyRunningMainloop: 0,
      func: null,
      arg: 0,
      timingMode: 0,
      timingValue: 0,
      currentFrameNumber: 0,
      queue: [],
      pause: function () {
        Browser.mainLoop.scheduler = null;
        Browser.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        Browser.mainLoop.currentlyRunningMainloop++;
        var timingMode = Browser.mainLoop.timingMode;
        var timingValue = Browser.mainLoop.timingValue;
        var func = Browser.mainLoop.func;
        Browser.mainLoop.func = null;
        _emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true);
        _emscripten_set_main_loop_timing(timingMode, timingValue);
        Browser.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (Module["setStatus"]) {
          var message = Module["statusMessage"] || "Please wait...";
          var remaining = Browser.mainLoop.remainingBlockers;
          var expected = Browser.mainLoop.expectedBlockers;
          if (remaining) {
            if (remaining < expected) {
              Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
            } else {
              Module["setStatus"](message);
            }
          } else {
            Module["setStatus"]("");
          }
        }
      },
      runIter: function (func) {
        if (ABORT) return;
        if (Module["preMainLoop"]) {
          var preRet = Module["preMainLoop"]();
          if (preRet === false) {
            return;
          }
        }
        try {
          func();
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === "object" && e.stack) Module.printErr("exception thrown: " + [e, e.stack]);
            throw e;
          }
        }
        if (Module["postMainLoop"]) Module["postMainLoop"]();
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
      if (Browser.initted) return;
      Browser.initted = true;
      try {
        new Blob();
        Browser.hasBlobConstructor = true;
      } catch (e) {
        Browser.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      Browser.BlobBuilder =
        typeof MozBlobBuilder != "undefined"
          ? MozBlobBuilder
          : typeof WebKitBlobBuilder != "undefined"
          ? WebKitBlobBuilder
          : !Browser.hasBlobConstructor
          ? console.log("warning: no BlobBuilder")
          : null;
      Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
      if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        Module.noImageDecoding = true;
      }
      var imagePlugin = {};
      imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
        return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
      };
      imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
        var b = null;
        if (Browser.hasBlobConstructor) {
          try {
            b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            if (b.size !== byteArray.length) {
              b = new Blob([new Uint8Array(byteArray).buffer], { type: Browser.getMimetype(name) });
            }
          } catch (e) {
            Runtime.warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
          }
        }
        if (!b) {
          var bb = new Browser.BlobBuilder();
          bb.append(new Uint8Array(byteArray).buffer);
          b = bb.getBlob();
        }
        var url = Browser.URLObject.createObjectURL(b);
        var img = new Image();
        img.onload = function img_onload() {
          assert(img.complete, "Image " + name + " could not be decoded");
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          Module["preloadedImages"][name] = canvas;
          Browser.URLObject.revokeObjectURL(url);
          if (onload) onload(byteArray);
        };
        img.onerror = function img_onerror(event) {
          console.log("Image " + url + " could not be decoded");
          if (onerror) onerror();
        };
        img.src = url;
      };
      Module["preloadPlugins"].push(imagePlugin);
      var audioPlugin = {};
      audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
        return !Module.noAudioDecoding && name.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      };
      audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
        var done = false;
        function finish(audio) {
          if (done) return;
          done = true;
          Module["preloadedAudios"][name] = audio;
          if (onload) onload(byteArray);
        }
        function fail() {
          if (done) return;
          done = true;
          Module["preloadedAudios"][name] = new Audio();
          if (onerror) onerror();
        }
        if (Browser.hasBlobConstructor) {
          try {
            var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          } catch (e) {
            return fail();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var audio = new Audio();
          audio.addEventListener(
            "canplaythrough",
            function () {
              finish(audio);
            },
            false
          );
          audio.onerror = function audio_onerror(event) {
            if (done) return;
            console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");
            function encode64(data) {
              var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var PAD = "=";
              var ret = "";
              var leftchar = 0;
              var leftbits = 0;
              for (var i = 0; i < data.length; i++) {
                leftchar = (leftchar << 8) | data[i];
                leftbits += 8;
                while (leftbits >= 6) {
                  var curr = (leftchar >> (leftbits - 6)) & 63;
                  leftbits -= 6;
                  ret += BASE[curr];
                }
              }
              if (leftbits == 2) {
                ret += BASE[(leftchar & 3) << 4];
                ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar & 15) << 2];
                ret += PAD;
              }
              return ret;
            }
            audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
            finish(audio);
          };
          audio.src = url;
          Browser.safeSetTimeout(function () {
            finish(audio);
          }, 1e4);
        } else {
          return fail();
        }
      };
      Module["preloadPlugins"].push(audioPlugin);
      function pointerLockChange() {
        Browser.pointerLock =
          document["pointerLockElement"] === Module["canvas"] ||
          document["mozPointerLockElement"] === Module["canvas"] ||
          document["webkitPointerLockElement"] === Module["canvas"] ||
          document["msPointerLockElement"] === Module["canvas"];
      }
      var canvas = Module["canvas"];
      if (canvas) {
        canvas.requestPointerLock =
          canvas["requestPointerLock"] ||
          canvas["mozRequestPointerLock"] ||
          canvas["webkitRequestPointerLock"] ||
          canvas["msRequestPointerLock"] ||
          function () {};
        canvas.exitPointerLock =
          document["exitPointerLock"] ||
          document["mozExitPointerLock"] ||
          document["webkitExitPointerLock"] ||
          document["msExitPointerLock"] ||
          function () {};
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", pointerLockChange, false);
        document.addEventListener("mozpointerlockchange", pointerLockChange, false);
        document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
        document.addEventListener("mspointerlockchange", pointerLockChange, false);
        if (Module["elementPointerLock"]) {
          canvas.addEventListener(
            "click",
            function (ev) {
              if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                Module["canvas"].requestPointerLock();
                ev.preventDefault();
              }
            },
            false
          );
        }
      }
    },
    createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
      if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
      var ctx;
      var contextHandle;
      if (useWebGL) {
        var contextAttributes = { antialias: false, alpha: false };
        if (webGLContextAttributes) {
          for (var attribute in webGLContextAttributes) {
            contextAttributes[attribute] = webGLContextAttributes[attribute];
          }
        }
        contextHandle = GL.createContext(canvas, contextAttributes);
        if (contextHandle) {
          ctx = GL.getContext(contextHandle).GLctx;
        }
      } else {
        ctx = canvas.getContext("2d");
      }
      if (!ctx) return null;
      if (setInModule) {
        if (!useWebGL)
          assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        Module.ctx = ctx;
        if (useWebGL) GL.makeContextCurrent(contextHandle);
        Module.useWebGL = useWebGL;
        Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
          callback();
        });
        Browser.init();
      }
      return ctx;
    },
    destroyContext: function (canvas, useWebGL, setInModule) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (lockPointer, resizeCanvas, vrDevice) {
      Browser.lockPointer = lockPointer;
      Browser.resizeCanvas = resizeCanvas;
      Browser.vrDevice = vrDevice;
      if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;
      if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;
      if (typeof Browser.vrDevice === "undefined") Browser.vrDevice = null;
      var canvas = Module["canvas"];
      function fullscreenChange() {
        Browser.isFullscreen = false;
        var canvasContainer = canvas.parentNode;
        if (
          (document["fullscreenElement"] ||
            document["mozFullScreenElement"] ||
            document["msFullscreenElement"] ||
            document["webkitFullscreenElement"] ||
            document["webkitCurrentFullScreenElement"]) === canvasContainer
        ) {
          canvas.exitFullscreen =
            document["exitFullscreen"] ||
            document["cancelFullScreen"] ||
            document["mozCancelFullScreen"] ||
            document["msExitFullscreen"] ||
            document["webkitCancelFullScreen"] ||
            function () {};
          canvas.exitFullscreen = canvas.exitFullscreen.bind(document);
          if (Browser.lockPointer) canvas.requestPointerLock();
          Browser.isFullscreen = true;
          if (Browser.resizeCanvas) Browser.setFullscreenCanvasSize();
        } else {
          canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
          canvasContainer.parentNode.removeChild(canvasContainer);
          if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
        }
        if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
        if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
        Browser.updateCanvasDimensions(canvas);
      }
      if (!Browser.fullscreenHandlersInstalled) {
        Browser.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", fullscreenChange, false);
        document.addEventListener("mozfullscreenchange", fullscreenChange, false);
        document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
        document.addEventListener("MSFullscreenChange", fullscreenChange, false);
      }
      var canvasContainer = document.createElement("div");
      canvas.parentNode.insertBefore(canvasContainer, canvas);
      canvasContainer.appendChild(canvas);
      canvasContainer.requestFullscreen =
        canvasContainer["requestFullscreen"] ||
        canvasContainer["mozRequestFullScreen"] ||
        canvasContainer["msRequestFullscreen"] ||
        (canvasContainer["webkitRequestFullscreen"]
          ? function () {
              canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
            }
          : null) ||
        (canvasContainer["webkitRequestFullScreen"]
          ? function () {
              canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
            }
          : null);
      if (vrDevice) {
        canvasContainer.requestFullscreen({ vrDisplay: vrDevice });
      } else {
        canvasContainer.requestFullscreen();
      }
    },
    requestFullScreen: function (lockPointer, resizeCanvas, vrDevice) {
      Module.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");
      Browser.requestFullScreen = function (lockPointer, resizeCanvas, vrDevice) {
        return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
      };
      return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (func) {
      var now = Date.now();
      if (Browser.nextRAF === 0) {
        Browser.nextRAF = now + 1e3 / 60;
      } else {
        while (now + 2 >= Browser.nextRAF) {
          Browser.nextRAF += 1e3 / 60;
        }
      }
      var delay = Math.max(Browser.nextRAF - now, 0);
      setTimeout(func, delay);
    },
    requestAnimationFrame: function requestAnimationFrame(func) {
      if (typeof window === "undefined") {
        Browser.fakeRequestAnimationFrame(func);
      } else {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame =
            window["requestAnimationFrame"] ||
            window["mozRequestAnimationFrame"] ||
            window["webkitRequestAnimationFrame"] ||
            window["msRequestAnimationFrame"] ||
            window["oRequestAnimationFrame"] ||
            Browser.fakeRequestAnimationFrame;
        }
        window.requestAnimationFrame(func);
      }
    },
    safeCallback: function (func) {
      return function () {
        if (!ABORT) return func.apply(null, arguments);
      };
    },
    allowAsyncCallbacks: true,
    queuedAsyncCallbacks: [],
    pauseAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = false;
    },
    resumeAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = true;
      if (Browser.queuedAsyncCallbacks.length > 0) {
        var callbacks = Browser.queuedAsyncCallbacks;
        Browser.queuedAsyncCallbacks = [];
        callbacks.forEach(function (func) {
          func();
        });
      }
    },
    safeRequestAnimationFrame: function (func) {
      return Browser.requestAnimationFrame(function () {
        if (ABORT) return;
        if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      });
    },
    safeSetTimeout: function (func, timeout) {
      Module["noExitRuntime"] = true;
      return setTimeout(function () {
        if (ABORT) return;
        if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      }, timeout);
    },
    safeSetInterval: function (func, timeout) {
      Module["noExitRuntime"] = true;
      return setInterval(function () {
        if (ABORT) return;
        if (Browser.allowAsyncCallbacks) {
          func();
        }
      }, timeout);
    },
    getMimetype: function (name) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[name.substr(name.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (func) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
      }
      window.getUserMedia(func);
    },
    getMovementX: function (event) {
      return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
    },
    getMovementY: function (event) {
      return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
    },
    getMouseWheelDelta: function (event) {
      var delta = 0;
      switch (event.type) {
        case "DOMMouseScroll":
          delta = event.detail;
          break;
        case "mousewheel":
          delta = event.wheelDelta;
          break;
        case "wheel":
          delta = event["deltaY"];
          break;
        default:
          throw "unrecognized mouse wheel event: " + event.type;
      }
      return delta;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (event) {
      if (Browser.pointerLock) {
        if (event.type != "mousemove" && "mozMovementX" in event) {
          Browser.mouseMovementX = Browser.mouseMovementY = 0;
        } else {
          Browser.mouseMovementX = Browser.getMovementX(event);
          Browser.mouseMovementY = Browser.getMovementY(event);
        }
        if (typeof SDL != "undefined") {
          Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
        } else {
          Browser.mouseX += Browser.mouseMovementX;
          Browser.mouseY += Browser.mouseMovementY;
        }
      } else {
        var rect = Module["canvas"].getBoundingClientRect();
        var cw = Module["canvas"].width;
        var ch = Module["canvas"].height;
        var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
          var touch = event.touch;
          if (touch === undefined) {
            return;
          }
          var adjustedX = touch.pageX - (scrollX + rect.left);
          var adjustedY = touch.pageY - (scrollY + rect.top);
          adjustedX = adjustedX * (cw / rect.width);
          adjustedY = adjustedY * (ch / rect.height);
          var coords = { x: adjustedX, y: adjustedY };
          if (event.type === "touchstart") {
            Browser.lastTouches[touch.identifier] = coords;
            Browser.touches[touch.identifier] = coords;
          } else if (event.type === "touchend" || event.type === "touchmove") {
            var last = Browser.touches[touch.identifier];
            if (!last) last = coords;
            Browser.lastTouches[touch.identifier] = last;
            Browser.touches[touch.identifier] = coords;
          }
          return;
        }
        var x = event.pageX - (scrollX + rect.left);
        var y = event.pageY - (scrollY + rect.top);
        x = x * (cw / rect.width);
        y = y * (ch / rect.height);
        Browser.mouseMovementX = x - Browser.mouseX;
        Browser.mouseMovementY = y - Browser.mouseY;
        Browser.mouseX = x;
        Browser.mouseY = y;
      }
    },
    asyncLoad: function (url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
      Module["readAsync"](
        url,
        function (arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (dep) removeRunDependency(dep);
        },
        function (event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        }
      );
      if (dep) addRunDependency(dep);
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var canvas = Module["canvas"];
      Browser.resizeListeners.forEach(function (listener) {
        listener(canvas.width, canvas.height);
      });
    },
    setCanvasSize: function (width, height, noUpdates) {
      var canvas = Module["canvas"];
      Browser.updateCanvasDimensions(canvas, width, height);
      if (!noUpdates) Browser.updateResizeListeners();
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[(SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2];
        flags = flags | 8388608;
        HEAP32[(SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2] = flags;
      }
      Browser.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[(SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2];
        flags = flags & ~8388608;
        HEAP32[(SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2] = flags;
      }
      Browser.updateResizeListeners();
    },
    updateCanvasDimensions: function (canvas, wNative, hNative) {
      if (wNative && hNative) {
        canvas.widthNative = wNative;
        canvas.heightNative = hNative;
      } else {
        wNative = canvas.widthNative;
        hNative = canvas.heightNative;
      }
      var w = wNative;
      var h = hNative;
      if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
        if (w / h < Module["forcedAspectRatio"]) {
          w = Math.round(h * Module["forcedAspectRatio"]);
        } else {
          h = Math.round(w / Module["forcedAspectRatio"]);
        }
      }
      if (
        (document["fullscreenElement"] ||
          document["mozFullScreenElement"] ||
          document["msFullscreenElement"] ||
          document["webkitFullscreenElement"] ||
          document["webkitCurrentFullScreenElement"]) === canvas.parentNode &&
        typeof screen != "undefined"
      ) {
        var factor = Math.min(screen.width / w, screen.height / h);
        w = Math.round(w * factor);
        h = Math.round(h * factor);
      }
      if (Browser.resizeCanvas) {
        if (canvas.width != w) canvas.width = w;
        if (canvas.height != h) canvas.height = h;
        if (typeof canvas.style != "undefined") {
          canvas.style.removeProperty("width");
          canvas.style.removeProperty("height");
        }
      } else {
        if (canvas.width != wNative) canvas.width = wNative;
        if (canvas.height != hNative) canvas.height = hNative;
        if (typeof canvas.style != "undefined") {
          if (w != wNative || h != hNative) {
            canvas.style.setProperty("width", w + "px", "important");
            canvas.style.setProperty("height", h + "px", "important");
          } else {
            canvas.style.removeProperty("width");
            canvas.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var handle = Browser.nextWgetRequestHandle;
      Browser.nextWgetRequestHandle++;
      return handle;
    }
  };
  var _environ = STATICTOP;
  STATICTOP += 16;
  function ___buildEnvironment(env) {
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
      ENV["LANG"] = "C";
      ENV["_"] = Module["thisProgram"];
      poolPtr = allocate(TOTAL_ENV_SIZE, "i8", ALLOC_STATIC);
      envPtr = allocate(MAX_ENV_VALUES * 4, "i8*", ALLOC_STATIC);
      HEAP32[envPtr >> 2] = poolPtr;
      HEAP32[_environ >> 2] = envPtr;
    } else {
      envPtr = HEAP32[_environ >> 2];
      poolPtr = HEAP32[envPtr >> 2];
    }
    var strings = [];
    var totalSize = 0;
    for (var key in env) {
      if (typeof env[key] === "string") {
        var line = key + "=" + env[key];
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
  var ENV = {};
  function _getenv(name) {
    if (name === 0) return 0;
    name = Pointer_stringify(name);
    if (!ENV.hasOwnProperty(name)) return 0;
    if (_getenv.ret) _free(_getenv.ret);
    _getenv.ret = allocate(intArrayFromString(ENV[name]), "i8", ALLOC_NORMAL);
    return _getenv.ret;
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
  function _putenv(string) {
    if (string === 0) {
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
    string = Pointer_stringify(string);
    var splitPoint = string.indexOf("=");
    if (string === "" || string.indexOf("=") === -1) {
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
    var name = string.slice(0, splitPoint);
    var value = string.slice(splitPoint + 1);
    if (!(name in ENV) || ENV[name] !== value) {
      ENV[name] = value;
      ___buildEnvironment(ENV);
    }
    return 0;
  }
  function _SDL_RWFromConstMem(mem, size) {
    var id = SDL.rwops.length;
    SDL.rwops.push({ bytes: mem, count: size });
    return id;
  }
  function _TTF_FontHeight(font) {
    var fontData = SDL.fonts[font];
    return fontData.size;
  }
  function _TTF_SizeText(font, text, w, h) {
    var fontData = SDL.fonts[font];
    if (w) {
      HEAP32[w >> 2] = SDL.estimateTextWidth(fontData, Pointer_stringify(text));
    }
    if (h) {
      HEAP32[h >> 2] = fontData.size;
    }
    return 0;
  }
  function _TTF_RenderText_Solid(font, text, color) {
    text = Pointer_stringify(text) || " ";
    var fontData = SDL.fonts[font];
    var w = SDL.estimateTextWidth(fontData, text);
    var h = fontData.size;
    var color = SDL.loadColorToCSSRGB(color);
    var fontString = SDL.makeFontString(h, fontData.name);
    var surf = SDL.makeSurface(w, h, 0, false, "text:" + text);
    var surfData = SDL.surfaces[surf];
    surfData.ctx.save();
    surfData.ctx.fillStyle = color;
    surfData.ctx.font = fontString;
    surfData.ctx.textBaseline = "bottom";
    surfData.ctx.fillText(text, 0, h | 0);
    surfData.ctx.restore();
    return surf;
  }
  function _Mix_HaltMusic() {
    var audio = SDL.music.audio;
    if (audio) {
      audio.src = audio.src;
      audio.currentPosition = 0;
      audio.pause();
    }
    SDL.music.audio = null;
    if (SDL.hookMusicFinished) {
      Module["dynCall_v"](SDL.hookMusicFinished);
    }
    return 0;
  }
  function _Mix_PlayMusic(id, loops) {
    if (SDL.music.audio) {
      if (!SDL.music.audio.paused) Module.printErr("Music is already playing. " + SDL.music.source);
      SDL.music.audio.pause();
    }
    var info = SDL.audios[id];
    var audio;
    if (info.webAudio) {
      audio = {};
      audio.resource = info;
      audio.paused = false;
      audio.currentPosition = 0;
      audio.play = function () {
        SDL.playWebAudio(this);
      };
      audio.pause = function () {
        SDL.pauseWebAudio(this);
      };
    } else if (info.audio) {
      audio = info.audio;
    }
    audio["onended"] = function () {
      if (SDL.music.audio == this) _Mix_HaltMusic();
    };
    audio.loop = loops != 0;
    audio.volume = SDL.music.volume;
    SDL.music.audio = audio;
    audio.play();
    return 0;
  }
  function _Mix_FreeChunk(id) {
    SDL.audios[id] = null;
  }
  function _Mix_LoadWAV_RW(rwopsID, freesrc) {
    var rwops = SDL.rwops[rwopsID];
    if (rwops === undefined) return 0;
    var filename = "";
    var audio;
    var webAudio;
    var bytes;
    if (rwops.filename !== undefined) {
      filename = PATH.resolve(rwops.filename);
      var raw = Module["preloadedAudios"][filename];
      if (!raw) {
        if (raw === null) Module.printErr("Trying to reuse preloaded audio, but freePreloadedMediaOnUse is set!");
        if (!Module.noAudioDecoding) Runtime.warnOnce("Cannot find preloaded audio " + filename);
        try {
          bytes = FS.readFile(filename);
        } catch (e) {
          Module.printErr("Couldn't find file for: " + filename);
          return 0;
        }
      }
      if (Module["freePreloadedMediaOnUse"]) {
        Module["preloadedAudios"][filename] = null;
      }
      audio = raw;
    } else if (rwops.bytes !== undefined) {
      if (SDL.webAudioAvailable()) bytes = HEAPU8.buffer.slice(rwops.bytes, rwops.bytes + rwops.count);
      else bytes = HEAPU8.subarray(rwops.bytes, rwops.bytes + rwops.count);
    } else {
      return 0;
    }
    var arrayBuffer = bytes ? bytes.buffer || bytes : bytes;
    var canPlayWithWebAudio = Module["SDL_canPlayWithWebAudio"] === undefined || Module["SDL_canPlayWithWebAudio"](filename, arrayBuffer);
    if (bytes !== undefined && SDL.webAudioAvailable() && canPlayWithWebAudio) {
      audio = undefined;
      webAudio = {};
      webAudio.onDecodeComplete = [];
      function onDecodeComplete(data) {
        webAudio.decodedBuffer = data;
        webAudio.onDecodeComplete.forEach(function (e) {
          e();
        });
        webAudio.onDecodeComplete = undefined;
      }
      SDL.audioContext["decodeAudioData"](arrayBuffer, onDecodeComplete);
    } else if (audio === undefined && bytes) {
      var blob = new Blob([bytes], { type: rwops.mimetype });
      var url = URL.createObjectURL(blob);
      audio = new Audio();
      audio.src = url;
      audio.mozAudioChannelType = "content";
    }
    var id = SDL.audios.length;
    SDL.audios.push({ source: filename, audio: audio, webAudio: webAudio });
    return id;
  }
  function _Mix_PlayChannel(channel, id, loops) {
    var info = SDL.audios[id];
    if (!info) return -1;
    if (!info.audio && !info.webAudio) return -1;
    if (channel == -1) {
      for (var i = SDL.channelMinimumNumber; i < SDL.numChannels; i++) {
        if (!SDL.channels[i].audio) {
          channel = i;
          break;
        }
      }
      if (channel == -1) {
        Module.printErr("All " + SDL.numChannels + " channels in use!");
        return -1;
      }
    }
    var channelInfo = SDL.channels[channel];
    var audio;
    if (info.webAudio) {
      audio = {};
      audio.resource = info;
      audio.paused = false;
      audio.currentPosition = 0;
      audio.play = function () {
        SDL.playWebAudio(this);
      };
      audio.pause = function () {
        SDL.pauseWebAudio(this);
      };
    } else {
      audio = info.audio.cloneNode(true);
      audio.numChannels = info.audio.numChannels;
      audio.frequency = info.audio.frequency;
    }
    audio["onended"] = function SDL_audio_onended() {
      if (channelInfo.audio == this) {
        channelInfo.audio.paused = true;
        channelInfo.audio = null;
      }
      if (SDL.channelFinished) Runtime.getFuncWrapper(SDL.channelFinished, "vi")(channel);
    };
    channelInfo.audio = audio;
    audio.loop = loops != 0;
    audio.volume = channelInfo.volume;
    audio.play();
    return channel;
  }
  function _SDL_PauseAudio(pauseOn) {
    if (!SDL.audio) {
      return;
    }
    if (pauseOn) {
      if (SDL.audio.timer !== undefined) {
        clearTimeout(SDL.audio.timer);
        SDL.audio.numAudioTimersPending = 0;
        SDL.audio.timer = undefined;
      }
    } else if (!SDL.audio.timer) {
      SDL.audio.numAudioTimersPending = 1;
      SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1);
    }
    SDL.audio.paused = pauseOn;
  }
  function _SDL_CloseAudio() {
    if (SDL.audio) {
      _SDL_PauseAudio(1);
      _free(SDL.audio.buffer);
      SDL.audio = null;
      SDL.allocateChannels(0);
    }
  }
  function _SDL_LockSurface(surf) {
    var surfData = SDL.surfaces[surf];
    surfData.locked++;
    if (surfData.locked > 1) return 0;
    if (!surfData.buffer) {
      surfData.buffer = _malloc(surfData.width * surfData.height * 4);
      HEAP32[(surf + 20) >> 2] = surfData.buffer;
    }
    HEAP32[(surf + 20) >> 2] = surfData.buffer;
    if (surf == SDL.screen && Module.screenIsReadOnly && surfData.image) return 0;
    if (SDL.defaults.discardOnLock) {
      if (!surfData.image) {
        surfData.image = surfData.ctx.createImageData(surfData.width, surfData.height);
      }
      if (!SDL.defaults.opaqueFrontBuffer) return;
    } else {
      surfData.image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
    }
    if (surf == SDL.screen && SDL.defaults.opaqueFrontBuffer) {
      var data = surfData.image.data;
      var num = data.length;
      for (var i = 0; i < num / 4; i++) {
        data[i * 4 + 3] = 255;
      }
    }
    if (SDL.defaults.copyOnLock && !SDL.defaults.discardOnLock) {
      if (surfData.isFlagSet(2097152)) {
        throw "CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set" + new Error().stack;
      } else {
        HEAPU8.set(surfData.image.data, surfData.buffer);
      }
    }
    return 0;
  }
  function _SDL_FreeRW(rwopsID) {
    SDL.rwops[rwopsID] = null;
    while (SDL.rwops.length > 0 && SDL.rwops[SDL.rwops.length - 1] === null) {
      SDL.rwops.pop();
    }
  }
  function _IMG_Load_RW(rwopsID, freeSrc) {
    try {
      var cleanup = function () {
        if (rwops && freeSrc) _SDL_FreeRW(rwopsID);
      };
      var addCleanup = function (func) {
        var old = cleanup;
        cleanup = function added_cleanup() {
          old();
          func();
        };
      };
      var callStbImage = function (func, params) {
        var x = Module["_malloc"](4);
        var y = Module["_malloc"](4);
        var comp = Module["_malloc"](4);
        addCleanup(function () {
          Module["_free"](x);
          Module["_free"](y);
          Module["_free"](comp);
          if (data) Module["_stbi_image_free"](data);
        });
        var data = Module["_" + func].apply(null, params.concat([x, y, comp, 0]));
        if (!data) return null;
        return {
          rawData: true,
          data: data,
          width: HEAP32[x >> 2],
          height: HEAP32[y >> 2],
          size: HEAP32[x >> 2] * HEAP32[y >> 2] * HEAP32[comp >> 2],
          bpp: HEAP32[comp >> 2]
        };
      };
      var rwops = SDL.rwops[rwopsID];
      if (rwops === undefined) {
        return 0;
      }
      var filename = rwops.filename;
      if (filename === undefined) {
        Runtime.warnOnce(
          "Only file names that have been preloaded are supported for IMG_Load_RW. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js), or package files with --use-preload-plugins"
        );
        return 0;
      }
      if (!raw) {
        filename = PATH.resolve(filename);
        var raw = Module["preloadedImages"][filename];
        if (!raw) {
          if (raw === null) Module.printErr("Trying to reuse preloaded image, but freePreloadedMediaOnUse is set!");
          Runtime.warnOnce("Cannot find preloaded image " + filename);
          Runtime.warnOnce(
            "Cannot find preloaded image " +
              filename +
              ". Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js), or package files with --use-preload-plugins"
          );
          return 0;
        } else if (Module["freePreloadedMediaOnUse"]) {
          Module["preloadedImages"][filename] = null;
        }
      }
      var surf = SDL.makeSurface(raw.width, raw.height, 0, false, "load:" + filename);
      var surfData = SDL.surfaces[surf];
      surfData.ctx.globalCompositeOperation = "copy";
      if (!raw.rawData) {
        surfData.ctx.drawImage(raw, 0, 0, raw.width, raw.height, 0, 0, raw.width, raw.height);
      } else {
        var imageData = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
        if (raw.bpp == 4) {
          imageData.data.set(HEAPU8.subarray(raw.data, raw.data + raw.size));
        } else if (raw.bpp == 3) {
          var pixels = raw.size / 3;
          var data = imageData.data;
          var sourcePtr = raw.data;
          var destPtr = 0;
          for (var i = 0; i < pixels; i++) {
            data[destPtr++] = HEAPU8[sourcePtr++ >> 0];
            data[destPtr++] = HEAPU8[sourcePtr++ >> 0];
            data[destPtr++] = HEAPU8[sourcePtr++ >> 0];
            data[destPtr++] = 255;
          }
        } else if (raw.bpp == 2) {
          var pixels = raw.size;
          var data = imageData.data;
          var sourcePtr = raw.data;
          var destPtr = 0;
          for (var i = 0; i < pixels; i++) {
            var gray = HEAPU8[sourcePtr++ >> 0];
            var alpha = HEAPU8[sourcePtr++ >> 0];
            data[destPtr++] = gray;
            data[destPtr++] = gray;
            data[destPtr++] = gray;
            data[destPtr++] = alpha;
          }
        } else if (raw.bpp == 1) {
          var pixels = raw.size;
          var data = imageData.data;
          var sourcePtr = raw.data;
          var destPtr = 0;
          for (var i = 0; i < pixels; i++) {
            var value = HEAPU8[sourcePtr++ >> 0];
            data[destPtr++] = value;
            data[destPtr++] = value;
            data[destPtr++] = value;
            data[destPtr++] = 255;
          }
        } else {
          Module.printErr("cannot handle bpp " + raw.bpp);
          return 0;
        }
        surfData.ctx.putImageData(imageData, 0, 0);
      }
      surfData.ctx.globalCompositeOperation = "source-over";
      _SDL_LockSurface(surf);
      surfData.locked--;
      if (SDL.GL) {
        surfData.canvas = surfData.ctx = null;
      }
      return surf;
    } finally {
      cleanup();
    }
  }
  function _SDL_RWFromFile(_name, mode) {
    var id = SDL.rwops.length;
    var name = Pointer_stringify(_name);
    SDL.rwops.push({ filename: name, mimetype: Browser.getMimetype(name) });
    return id;
  }
  function _IMG_Load(filename) {
    var rwops = _SDL_RWFromFile(filename);
    var result = _IMG_Load_RW(rwops, 1);
    return result;
  }
  function _SDL_UpperBlitScaled(src, srcrect, dst, dstrect) {
    return SDL.blitSurface(src, srcrect, dst, dstrect, true);
  }
  function _SDL_UpperBlit(src, srcrect, dst, dstrect) {
    return SDL.blitSurface(src, srcrect, dst, dstrect, false);
  }
  function _SDL_GetTicks() {
    return (Date.now() - SDL.startTime) | 0;
  }
  var SDL = {
    defaults: { width: 320, height: 200, copyOnLock: true, discardOnLock: false, opaqueFrontBuffer: true },
    version: null,
    surfaces: {},
    canvasPool: [],
    events: [],
    fonts: [null],
    audios: [null],
    rwops: [null],
    music: { audio: null, volume: 1 },
    mixerFrequency: 22050,
    mixerFormat: 32784,
    mixerNumChannels: 2,
    mixerChunkSize: 1024,
    channelMinimumNumber: 0,
    GL: false,
    glAttributes: {
      0: 3,
      1: 3,
      2: 2,
      3: 0,
      4: 0,
      5: 1,
      6: 16,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 1,
      16: 0,
      17: 0,
      18: 0
    },
    keyboardState: null,
    keyboardMap: {},
    canRequestFullscreen: false,
    isRequestingFullscreen: false,
    textInput: false,
    startTime: null,
    initFlags: 0,
    buttonState: 0,
    modState: 0,
    DOMButtons: [0, 0, 0],
    DOMEventToSDLEvent: {},
    TOUCH_DEFAULT_ID: 0,
    eventHandler: null,
    eventHandlerContext: null,
    eventHandlerTemp: 0,
    keyCodes: {
      16: 1249,
      17: 1248,
      18: 1250,
      20: 1081,
      33: 1099,
      34: 1102,
      35: 1101,
      36: 1098,
      37: 1104,
      38: 1106,
      39: 1103,
      40: 1105,
      44: 316,
      45: 1097,
      46: 127,
      91: 1251,
      93: 1125,
      96: 1122,
      97: 1113,
      98: 1114,
      99: 1115,
      100: 1116,
      101: 1117,
      102: 1118,
      103: 1119,
      104: 1120,
      105: 1121,
      106: 1109,
      107: 1111,
      109: 1110,
      110: 1123,
      111: 1108,
      112: 1082,
      113: 1083,
      114: 1084,
      115: 1085,
      116: 1086,
      117: 1087,
      118: 1088,
      119: 1089,
      120: 1090,
      121: 1091,
      122: 1092,
      123: 1093,
      124: 1128,
      125: 1129,
      126: 1130,
      127: 1131,
      128: 1132,
      129: 1133,
      130: 1134,
      131: 1135,
      132: 1136,
      133: 1137,
      134: 1138,
      135: 1139,
      144: 1107,
      160: 94,
      161: 33,
      162: 34,
      163: 35,
      164: 36,
      165: 37,
      166: 38,
      167: 95,
      168: 40,
      169: 41,
      170: 42,
      171: 43,
      172: 124,
      173: 45,
      174: 123,
      175: 125,
      176: 126,
      181: 127,
      182: 129,
      183: 128,
      188: 44,
      190: 46,
      191: 47,
      192: 96,
      219: 91,
      220: 92,
      221: 93,
      222: 39,
      224: 1251
    },
    scanCodes: {
      8: 42,
      9: 43,
      13: 40,
      27: 41,
      32: 44,
      35: 204,
      39: 53,
      44: 54,
      46: 55,
      47: 56,
      48: 39,
      49: 30,
      50: 31,
      51: 32,
      52: 33,
      53: 34,
      54: 35,
      55: 36,
      56: 37,
      57: 38,
      58: 203,
      59: 51,
      61: 46,
      91: 47,
      92: 49,
      93: 48,
      96: 52,
      97: 4,
      98: 5,
      99: 6,
      100: 7,
      101: 8,
      102: 9,
      103: 10,
      104: 11,
      105: 12,
      106: 13,
      107: 14,
      108: 15,
      109: 16,
      110: 17,
      111: 18,
      112: 19,
      113: 20,
      114: 21,
      115: 22,
      116: 23,
      117: 24,
      118: 25,
      119: 26,
      120: 27,
      121: 28,
      122: 29,
      127: 76,
      305: 224,
      308: 226,
      316: 70
    },
    loadRect: function (rect) {
      return { x: HEAP32[(rect + 0) >> 2], y: HEAP32[(rect + 4) >> 2], w: HEAP32[(rect + 8) >> 2], h: HEAP32[(rect + 12) >> 2] };
    },
    updateRect: function (rect, r) {
      HEAP32[rect >> 2] = r.x;
      HEAP32[(rect + 4) >> 2] = r.y;
      HEAP32[(rect + 8) >> 2] = r.w;
      HEAP32[(rect + 12) >> 2] = r.h;
    },
    intersectionOfRects: function (first, second) {
      var leftX = Math.max(first.x, second.x);
      var leftY = Math.max(first.y, second.y);
      var rightX = Math.min(first.x + first.w, second.x + second.w);
      var rightY = Math.min(first.y + first.h, second.y + second.h);
      return { x: leftX, y: leftY, w: Math.max(leftX, rightX) - leftX, h: Math.max(leftY, rightY) - leftY };
    },
    checkPixelFormat: function (fmt) {},
    loadColorToCSSRGB: function (color) {
      var rgba = HEAP32[color >> 2];
      return "rgb(" + (rgba & 255) + "," + ((rgba >> 8) & 255) + "," + ((rgba >> 16) & 255) + ")";
    },
    loadColorToCSSRGBA: function (color) {
      var rgba = HEAP32[color >> 2];
      return "rgba(" + (rgba & 255) + "," + ((rgba >> 8) & 255) + "," + ((rgba >> 16) & 255) + "," + ((rgba >> 24) & 255) / 255 + ")";
    },
    translateColorToCSSRGBA: function (rgba) {
      return "rgba(" + (rgba & 255) + "," + ((rgba >> 8) & 255) + "," + ((rgba >> 16) & 255) + "," + (rgba >>> 24) / 255 + ")";
    },
    translateRGBAToCSSRGBA: function (r, g, b, a) {
      return "rgba(" + (r & 255) + "," + (g & 255) + "," + (b & 255) + "," + (a & 255) / 255 + ")";
    },
    translateRGBAToColor: function (r, g, b, a) {
      return r | (g << 8) | (b << 16) | (a << 24);
    },
    makeSurface: function (width, height, flags, usePageCanvas, source, rmask, gmask, bmask, amask) {
      flags = flags || 0;
      var is_SDL_HWSURFACE = flags & 1;
      var is_SDL_HWPALETTE = flags & 2097152;
      var is_SDL_OPENGL = flags & 67108864;
      var surf = _malloc(60);
      var pixelFormat = _malloc(44);
      var bpp = is_SDL_HWPALETTE ? 1 : 4;
      var buffer = 0;
      if (!is_SDL_HWSURFACE && !is_SDL_OPENGL) {
        buffer = _malloc(width * height * 4);
      }
      HEAP32[surf >> 2] = flags;
      HEAP32[(surf + 4) >> 2] = pixelFormat;
      HEAP32[(surf + 8) >> 2] = width;
      HEAP32[(surf + 12) >> 2] = height;
      HEAP32[(surf + 16) >> 2] = width * bpp;
      HEAP32[(surf + 20) >> 2] = buffer;
      HEAP32[(surf + 36) >> 2] = 0;
      HEAP32[(surf + 40) >> 2] = 0;
      HEAP32[(surf + 44) >> 2] = Module["canvas"].width;
      HEAP32[(surf + 48) >> 2] = Module["canvas"].height;
      HEAP32[(surf + 56) >> 2] = 1;
      HEAP32[pixelFormat >> 2] = -2042224636;
      HEAP32[(pixelFormat + 4) >> 2] = 0;
      HEAP8[(pixelFormat + 8) >> 0] = bpp * 8;
      HEAP8[(pixelFormat + 9) >> 0] = bpp;
      HEAP32[(pixelFormat + 12) >> 2] = rmask || 255;
      HEAP32[(pixelFormat + 16) >> 2] = gmask || 65280;
      HEAP32[(pixelFormat + 20) >> 2] = bmask || 16711680;
      HEAP32[(pixelFormat + 24) >> 2] = amask || 4278190080;
      SDL.GL = SDL.GL || is_SDL_OPENGL;
      var canvas;
      if (!usePageCanvas) {
        if (SDL.canvasPool.length > 0) {
          canvas = SDL.canvasPool.pop();
        } else {
          canvas = document.createElement("canvas");
        }
        canvas.width = width;
        canvas.height = height;
      } else {
        canvas = Module["canvas"];
      }
      var webGLContextAttributes = {
        antialias: SDL.glAttributes[13] != 0 && SDL.glAttributes[14] > 1,
        depth: SDL.glAttributes[6] > 0,
        stencil: SDL.glAttributes[7] > 0,
        alpha: SDL.glAttributes[3] > 0
      };
      var ctx = Browser.createContext(canvas, is_SDL_OPENGL, usePageCanvas, webGLContextAttributes);
      SDL.surfaces[surf] = {
        width: width,
        height: height,
        canvas: canvas,
        ctx: ctx,
        surf: surf,
        buffer: buffer,
        pixelFormat: pixelFormat,
        alpha: 255,
        flags: flags,
        locked: 0,
        usePageCanvas: usePageCanvas,
        source: source,
        isFlagSet: function (flag) {
          return flags & flag;
        }
      };
      return surf;
    },
    copyIndexedColorData: function (surfData, rX, rY, rW, rH) {
      if (!surfData.colors) {
        return;
      }
      var fullWidth = Module["canvas"].width;
      var fullHeight = Module["canvas"].height;
      var startX = rX || 0;
      var startY = rY || 0;
      var endX = (rW || fullWidth - startX) + startX;
      var endY = (rH || fullHeight - startY) + startY;
      var buffer = surfData.buffer;
      if (!surfData.image.data32) {
        surfData.image.data32 = new Uint32Array(surfData.image.data.buffer);
      }
      var data32 = surfData.image.data32;
      var colors32 = surfData.colors32;
      for (var y = startY; y < endY; ++y) {
        var base = y * fullWidth;
        for (var x = startX; x < endX; ++x) {
          data32[base + x] = colors32[HEAPU8[(buffer + base + x) >> 0]];
        }
      }
    },
    freeSurface: function (surf) {
      var refcountPointer = surf + 56;
      var refcount = HEAP32[refcountPointer >> 2];
      if (refcount > 1) {
        HEAP32[refcountPointer >> 2] = refcount - 1;
        return;
      }
      var info = SDL.surfaces[surf];
      if (!info.usePageCanvas && info.canvas) SDL.canvasPool.push(info.canvas);
      if (info.buffer) _free(info.buffer);
      _free(info.pixelFormat);
      _free(surf);
      SDL.surfaces[surf] = null;
      if (surf === SDL.screen) {
        SDL.screen = null;
      }
    },
    blitSurface__deps: ["SDL_LockSurface"],
    blitSurface: function (src, srcrect, dst, dstrect, scale) {
      var srcData = SDL.surfaces[src];
      var dstData = SDL.surfaces[dst];
      var sr, dr;
      if (srcrect) {
        sr = SDL.loadRect(srcrect);
      } else {
        sr = { x: 0, y: 0, w: srcData.width, h: srcData.height };
      }
      if (dstrect) {
        dr = SDL.loadRect(dstrect);
      } else {
        dr = { x: 0, y: 0, w: srcData.width, h: srcData.height };
      }
      if (dstData.clipRect) {
        var widthScale = !scale || sr.w === 0 ? 1 : sr.w / dr.w;
        var heightScale = !scale || sr.h === 0 ? 1 : sr.h / dr.h;
        dr = SDL.intersectionOfRects(dstData.clipRect, dr);
        sr.w = dr.w * widthScale;
        sr.h = dr.h * heightScale;
        if (dstrect) {
          SDL.updateRect(dstrect, dr);
        }
      }
      var blitw, blith;
      if (scale) {
        blitw = dr.w;
        blith = dr.h;
      } else {
        blitw = sr.w;
        blith = sr.h;
      }
      if (sr.w === 0 || sr.h === 0 || blitw === 0 || blith === 0) {
        return 0;
      }
      var oldAlpha = dstData.ctx.globalAlpha;
      dstData.ctx.globalAlpha = srcData.alpha / 255;
      dstData.ctx.drawImage(srcData.canvas, sr.x, sr.y, sr.w, sr.h, dr.x, dr.y, blitw, blith);
      dstData.ctx.globalAlpha = oldAlpha;
      if (dst != SDL.screen) {
        Runtime.warnOnce("WARNING: copying canvas data to memory for compatibility");
        _SDL_LockSurface(dst);
        dstData.locked--;
      }
      return 0;
    },
    downFingers: {},
    savedKeydown: null,
    receiveEvent: function (event) {
      function unpressAllPressedKeys() {
        for (var code in SDL.keyboardMap) {
          SDL.events.push({ type: "keyup", keyCode: SDL.keyboardMap[code] });
        }
      }
      switch (event.type) {
        case "touchstart":
        case "touchmove": {
          event.preventDefault();
          var touches = [];
          if (event.type === "touchstart") {
            for (var i = 0; i < event.touches.length; i++) {
              var touch = event.touches[i];
              if (SDL.downFingers[touch.identifier] != true) {
                SDL.downFingers[touch.identifier] = true;
                touches.push(touch);
              }
            }
          } else {
            touches = event.touches;
          }
          var firstTouch = touches[0];
          if (firstTouch) {
            if (event.type == "touchstart") {
              SDL.DOMButtons[0] = 1;
            }
            var mouseEventType;
            switch (event.type) {
              case "touchstart":
                mouseEventType = "mousedown";
                break;
              case "touchmove":
                mouseEventType = "mousemove";
                break;
            }
            var mouseEvent = { type: mouseEventType, button: 0, pageX: firstTouch.clientX, pageY: firstTouch.clientY };
            SDL.events.push(mouseEvent);
          }
          for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            SDL.events.push({ type: event.type, touch: touch });
          }
          break;
        }
        case "touchend": {
          event.preventDefault();
          for (var i = 0; i < event.changedTouches.length; i++) {
            var touch = event.changedTouches[i];
            if (SDL.downFingers[touch.identifier] === true) {
              delete SDL.downFingers[touch.identifier];
            }
          }
          var mouseEvent = { type: "mouseup", button: 0, pageX: event.changedTouches[0].clientX, pageY: event.changedTouches[0].clientY };
          SDL.DOMButtons[0] = 0;
          SDL.events.push(mouseEvent);
          for (var i = 0; i < event.changedTouches.length; i++) {
            var touch = event.changedTouches[i];
            SDL.events.push({ type: "touchend", touch: touch });
          }
          break;
        }
        case "DOMMouseScroll":
        case "mousewheel":
        case "wheel":
          var delta = -Browser.getMouseWheelDelta(event);
          delta = delta == 0 ? 0 : delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1);
          var button = delta > 0 ? 3 : 4;
          SDL.events.push({ type: "mousedown", button: button, pageX: event.pageX, pageY: event.pageY });
          SDL.events.push({ type: "mouseup", button: button, pageX: event.pageX, pageY: event.pageY });
          SDL.events.push({ type: "wheel", deltaX: 0, deltaY: delta });
          event.preventDefault();
          break;
        case "mousemove":
          if (SDL.DOMButtons[0] === 1) {
            SDL.events.push({ type: "touchmove", touch: { identifier: 0, deviceID: -1, pageX: event.pageX, pageY: event.pageY } });
          }
          if (Browser.pointerLock) {
            if ("mozMovementX" in event) {
              event["movementX"] = event["mozMovementX"];
              event["movementY"] = event["mozMovementY"];
            }
            if (event["movementX"] == 0 && event["movementY"] == 0) {
              event.preventDefault();
              return;
            }
          }
        case "keydown":
        case "keyup":
        case "keypress":
        case "mousedown":
        case "mouseup":
          if (event.type !== "keydown" || (!SDL.unicode && !SDL.textInput) || event.keyCode === 8 || event.keyCode === 9) {
            event.preventDefault();
          }
          if (event.type == "mousedown") {
            SDL.DOMButtons[event.button] = 1;
            SDL.events.push({ type: "touchstart", touch: { identifier: 0, deviceID: -1, pageX: event.pageX, pageY: event.pageY } });
          } else if (event.type == "mouseup") {
            if (!SDL.DOMButtons[event.button]) {
              return;
            }
            SDL.events.push({ type: "touchend", touch: { identifier: 0, deviceID: -1, pageX: event.pageX, pageY: event.pageY } });
            SDL.DOMButtons[event.button] = 0;
          }
          if (event.type === "keydown" || event.type === "mousedown") {
            SDL.canRequestFullscreen = true;
          } else if (event.type === "keyup" || event.type === "mouseup") {
            if (SDL.isRequestingFullscreen) {
              Module["requestFullscreen"](true, true);
              SDL.isRequestingFullscreen = false;
            }
            SDL.canRequestFullscreen = false;
          }
          if (event.type === "keypress" && SDL.savedKeydown) {
            SDL.savedKeydown.keypressCharCode = event.charCode;
            SDL.savedKeydown = null;
          } else if (event.type === "keydown") {
            SDL.savedKeydown = event;
          }
          if (event.type !== "keypress" || SDL.textInput) {
            SDL.events.push(event);
          }
          break;
        case "mouseout":
          for (var i = 0; i < 3; i++) {
            if (SDL.DOMButtons[i]) {
              SDL.events.push({ type: "mouseup", button: i, pageX: event.pageX, pageY: event.pageY });
              SDL.DOMButtons[i] = 0;
            }
          }
          event.preventDefault();
          break;
        case "focus":
          SDL.events.push(event);
          event.preventDefault();
          break;
        case "blur":
          SDL.events.push(event);
          unpressAllPressedKeys();
          event.preventDefault();
          break;
        case "visibilitychange":
          SDL.events.push({ type: "visibilitychange", visible: !document.hidden });
          unpressAllPressedKeys();
          event.preventDefault();
          break;
        case "unload":
          if (Browser.mainLoop.runner) {
            SDL.events.push(event);
            Browser.mainLoop.runner();
          }
          return;
        case "resize":
          SDL.events.push(event);
          if (event.preventDefault) {
            event.preventDefault();
          }
          break;
      }
      if (SDL.events.length >= 1e4) {
        Module.printErr("SDL event queue full, dropping events");
        SDL.events = SDL.events.slice(0, 1e4);
      }
      SDL.flushEventsToHandler();
      return;
    },
    lookupKeyCodeForEvent: function (event) {
      var code = event.keyCode;
      if (code >= 65 && code <= 90) {
        code += 32;
      } else {
        code = SDL.keyCodes[event.keyCode] || event.keyCode;
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT && code >= (224 | (1 << 10)) && code <= (227 | (1 << 10))) {
          code += 4;
        }
      }
      return code;
    },
    handleEvent: function (event) {
      if (event.handled) return;
      event.handled = true;
      switch (event.type) {
        case "touchstart":
        case "touchend":
        case "touchmove": {
          Browser.calculateMouseEvent(event);
          break;
        }
        case "keydown":
        case "keyup": {
          var down = event.type === "keydown";
          var code = SDL.lookupKeyCodeForEvent(event);
          HEAP8[(SDL.keyboardState + code) >> 0] = down;
          SDL.modState =
            (HEAP8[(SDL.keyboardState + 1248) >> 0] ? 64 : 0) |
            (HEAP8[(SDL.keyboardState + 1249) >> 0] ? 1 : 0) |
            (HEAP8[(SDL.keyboardState + 1250) >> 0] ? 256 : 0) |
            (HEAP8[(SDL.keyboardState + 1252) >> 0] ? 128 : 0) |
            (HEAP8[(SDL.keyboardState + 1253) >> 0] ? 2 : 0) |
            (HEAP8[(SDL.keyboardState + 1254) >> 0] ? 512 : 0);
          if (down) {
            SDL.keyboardMap[code] = event.keyCode;
          } else {
            delete SDL.keyboardMap[code];
          }
          break;
        }
        case "mousedown":
        case "mouseup":
          if (event.type == "mousedown") {
            SDL.buttonState |= 1 << event.button;
          } else if (event.type == "mouseup") {
            SDL.buttonState &= ~(1 << event.button);
          }
        case "mousemove": {
          Browser.calculateMouseEvent(event);
          break;
        }
      }
    },
    flushEventsToHandler: function () {
      if (!SDL.eventHandler) return;
      while (SDL.pollEvent(SDL.eventHandlerTemp)) {
        Module["dynCall_iii"](SDL.eventHandler, SDL.eventHandlerContext, SDL.eventHandlerTemp);
      }
    },
    pollEvent: function (ptr) {
      if (SDL.initFlags & 512 && SDL.joystickEventState) {
        SDL.queryJoysticks();
      }
      if (ptr) {
        while (SDL.events.length > 0) {
          if (SDL.makeCEvent(SDL.events.shift(), ptr) !== false) return 1;
        }
        return 0;
      } else {
        return SDL.events.length > 0;
      }
    },
    makeCEvent: function (event, ptr) {
      if (typeof event === "number") {
        _memcpy(ptr, event, 28);
        _free(event);
        return;
      }
      SDL.handleEvent(event);
      switch (event.type) {
        case "keydown":
        case "keyup": {
          var down = event.type === "keydown";
          var key = SDL.lookupKeyCodeForEvent(event);
          var scan;
          if (key >= 1024) {
            scan = key - 1024;
          } else {
            scan = SDL.scanCodes[key] || key;
          }
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP8[(ptr + 8) >> 0] = down ? 1 : 0;
          HEAP8[(ptr + 9) >> 0] = 0;
          HEAP32[(ptr + 12) >> 2] = scan;
          HEAP32[(ptr + 16) >> 2] = key;
          HEAP16[(ptr + 20) >> 1] = SDL.modState;
          HEAP32[(ptr + 24) >> 2] = event.keypressCharCode || key;
          break;
        }
        case "keypress": {
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          var cStr = intArrayFromString(String.fromCharCode(event.charCode));
          for (var i = 0; i < cStr.length; ++i) {
            HEAP8[(ptr + (8 + i)) >> 0] = cStr[i];
          }
          break;
        }
        case "mousedown":
        case "mouseup":
        case "mousemove": {
          if (event.type != "mousemove") {
            var down = event.type === "mousedown";
            HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
            HEAP32[(ptr + 4) >> 2] = 0;
            HEAP32[(ptr + 8) >> 2] = 0;
            HEAP32[(ptr + 12) >> 2] = 0;
            HEAP8[(ptr + 16) >> 0] = event.button + 1;
            HEAP8[(ptr + 17) >> 0] = down ? 1 : 0;
            HEAP32[(ptr + 20) >> 2] = Browser.mouseX;
            HEAP32[(ptr + 24) >> 2] = Browser.mouseY;
          } else {
            HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
            HEAP32[(ptr + 4) >> 2] = 0;
            HEAP32[(ptr + 8) >> 2] = 0;
            HEAP32[(ptr + 12) >> 2] = 0;
            HEAP32[(ptr + 16) >> 2] = SDL.buttonState;
            HEAP32[(ptr + 20) >> 2] = Browser.mouseX;
            HEAP32[(ptr + 24) >> 2] = Browser.mouseY;
            HEAP32[(ptr + 28) >> 2] = Browser.mouseMovementX;
            HEAP32[(ptr + 32) >> 2] = Browser.mouseMovementY;
          }
          break;
        }
        case "wheel": {
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 16) >> 2] = event.deltaX;
          HEAP32[(ptr + 20) >> 2] = event.deltaY;
          break;
        }
        case "touchstart":
        case "touchend":
        case "touchmove": {
          var touch = event.touch;
          if (!Browser.touches[touch.identifier]) break;
          var w = Module["canvas"].width;
          var h = Module["canvas"].height;
          var x = Browser.touches[touch.identifier].x / w;
          var y = Browser.touches[touch.identifier].y / h;
          var lx = Browser.lastTouches[touch.identifier].x / w;
          var ly = Browser.lastTouches[touch.identifier].y / h;
          var dx = x - lx;
          var dy = y - ly;
          if (touch["deviceID"] === undefined) touch.deviceID = SDL.TOUCH_DEFAULT_ID;
          if (dx === 0 && dy === 0 && event.type === "touchmove") return false;
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 4) >> 2] = _SDL_GetTicks();
          (tempI64 = [
            touch.deviceID >>> 0,
            ((tempDouble = touch.deviceID),
            +Math_abs(tempDouble) >= +1
              ? tempDouble > +0
                ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0
                : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0
              : 0)
          ]),
            (HEAP32[(ptr + 8) >> 2] = tempI64[0]),
            (HEAP32[(ptr + 12) >> 2] = tempI64[1]);
          (tempI64 = [
            touch.identifier >>> 0,
            ((tempDouble = touch.identifier),
            +Math_abs(tempDouble) >= +1
              ? tempDouble > +0
                ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0
                : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0
              : 0)
          ]),
            (HEAP32[(ptr + 16) >> 2] = tempI64[0]),
            (HEAP32[(ptr + 20) >> 2] = tempI64[1]);
          HEAPF32[(ptr + 24) >> 2] = x;
          HEAPF32[(ptr + 28) >> 2] = y;
          HEAPF32[(ptr + 32) >> 2] = dx;
          HEAPF32[(ptr + 36) >> 2] = dy;
          if (touch.force !== undefined) {
            HEAPF32[(ptr + 40) >> 2] = touch.force;
          } else {
            HEAPF32[(ptr + 40) >> 2] = event.type == "touchend" ? 0 : 1;
          }
          break;
        }
        case "unload": {
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          break;
        }
        case "resize": {
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 4) >> 2] = event.w;
          HEAP32[(ptr + 8) >> 2] = event.h;
          break;
        }
        case "joystick_button_up":
        case "joystick_button_down": {
          var state = event.type === "joystick_button_up" ? 0 : 1;
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP8[(ptr + 4) >> 0] = event.index;
          HEAP8[(ptr + 5) >> 0] = event.button;
          HEAP8[(ptr + 6) >> 0] = state;
          break;
        }
        case "joystick_axis_motion": {
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP8[(ptr + 4) >> 0] = event.index;
          HEAP8[(ptr + 5) >> 0] = event.axis;
          HEAP32[(ptr + 8) >> 2] = SDL.joystickAxisValueConversion(event.value);
          break;
        }
        case "focus": {
          var SDL_WINDOWEVENT_FOCUS_GAINED = 12;
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 4) >> 2] = 0;
          HEAP8[(ptr + 8) >> 0] = SDL_WINDOWEVENT_FOCUS_GAINED;
          break;
        }
        case "blur": {
          var SDL_WINDOWEVENT_FOCUS_LOST = 13;
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 4) >> 2] = 0;
          HEAP8[(ptr + 8) >> 0] = SDL_WINDOWEVENT_FOCUS_LOST;
          break;
        }
        case "visibilitychange": {
          var SDL_WINDOWEVENT_SHOWN = 1;
          var SDL_WINDOWEVENT_HIDDEN = 2;
          var visibilityEventID = event.visible ? SDL_WINDOWEVENT_SHOWN : SDL_WINDOWEVENT_HIDDEN;
          HEAP32[ptr >> 2] = SDL.DOMEventToSDLEvent[event.type];
          HEAP32[(ptr + 4) >> 2] = 0;
          HEAP8[(ptr + 8) >> 0] = visibilityEventID;
          break;
        }
        default:
          throw "Unhandled SDL event: " + event.type;
      }
    },
    makeFontString: function (height, fontName) {
      if (fontName.charAt(0) != "'" && fontName.charAt(0) != '"') {
        fontName = '"' + fontName + '"';
      }
      return height + "px " + fontName + ", serif";
    },
    estimateTextWidth: function (fontData, text) {
      var h = fontData.size;
      var fontString = SDL.makeFontString(h, fontData.name);
      var tempCtx = SDL.ttfContext;
      tempCtx.save();
      tempCtx.font = fontString;
      var ret = tempCtx.measureText(text).width | 0;
      tempCtx.restore();
      return ret;
    },
    allocateChannels: function (num) {
      if (SDL.numChannels && SDL.numChannels >= num && num != 0) return;
      SDL.numChannels = num;
      SDL.channels = [];
      for (var i = 0; i < num; i++) {
        SDL.channels[i] = { audio: null, volume: 1 };
      }
    },
    setGetVolume: function (info, volume) {
      if (!info) return 0;
      var ret = info.volume * 128;
      if (volume != -1) {
        info.volume = Math.min(Math.max(volume, 0), 128) / 128;
        if (info.audio) {
          try {
            info.audio.volume = info.volume;
            if (info.audio.webAudioGainNode) info.audio.webAudioGainNode["gain"]["value"] = info.volume;
          } catch (e) {
            Module.printErr("setGetVolume failed to set audio volume: " + e);
          }
        }
      }
      return ret;
    },
    setPannerPosition: function (info, x, y, z) {
      if (!info) return;
      if (info.audio) {
        if (info.audio.webAudioPannerNode) {
          info.audio.webAudioPannerNode["setPosition"](x, y, z);
        }
      }
    },
    playWebAudio: function (audio) {
      if (!audio) return;
      if (audio.webAudioNode) return;
      if (!SDL.webAudioAvailable()) return;
      try {
        var webAudio = audio.resource.webAudio;
        audio.paused = false;
        if (!webAudio.decodedBuffer) {
          if (webAudio.onDecodeComplete === undefined) abort("Cannot play back audio object that was not loaded");
          webAudio.onDecodeComplete.push(function () {
            if (!audio.paused) SDL.playWebAudio(audio);
          });
          return;
        }
        audio.webAudioNode = SDL.audioContext["createBufferSource"]();
        audio.webAudioNode["buffer"] = webAudio.decodedBuffer;
        audio.webAudioNode["loop"] = audio.loop;
        audio.webAudioNode["onended"] = function () {
          audio["onended"]();
        };
        audio.webAudioPannerNode = SDL.audioContext["createPanner"]();
        audio.webAudioPannerNode["setPosition"](0, 0, -0.5);
        audio.webAudioPannerNode["panningModel"] = "equalpower";
        audio.webAudioGainNode = SDL.audioContext["createGain"]();
        audio.webAudioGainNode["gain"]["value"] = audio.volume;
        audio.webAudioNode["connect"](audio.webAudioPannerNode);
        audio.webAudioPannerNode["connect"](audio.webAudioGainNode);
        audio.webAudioGainNode["connect"](SDL.audioContext["destination"]);
        audio.webAudioNode["start"](0, audio.currentPosition);
        audio.startTime = SDL.audioContext["currentTime"] - audio.currentPosition;
      } catch (e) {
        Module.printErr("playWebAudio failed: " + e);
      }
    },
    pauseWebAudio: function (audio) {
      if (!audio) return;
      if (audio.webAudioNode) {
        try {
          audio.currentPosition = (SDL.audioContext["currentTime"] - audio.startTime) % audio.resource.webAudio.decodedBuffer.duration;
          audio.webAudioNode["onended"] = undefined;
          audio.webAudioNode.stop(0);
          audio.webAudioNode = undefined;
        } catch (e) {
          Module.printErr("pauseWebAudio failed: " + e);
        }
      }
      audio.paused = true;
    },
    openAudioContext: function () {
      if (!SDL.audioContext) {
        if (typeof AudioContext !== "undefined") SDL.audioContext = new AudioContext();
        else if (typeof webkitAudioContext !== "undefined") SDL.audioContext = new webkitAudioContext();
      }
    },
    webAudioAvailable: function () {
      return !!SDL.audioContext;
    },
    fillWebAudioBufferFromHeap: function (heapPtr, sizeSamplesPerChannel, dstAudioBuffer) {
      var numChannels = SDL.audio.channels;
      for (var c = 0; c < numChannels; ++c) {
        var channelData = dstAudioBuffer["getChannelData"](c);
        if (channelData.length != sizeSamplesPerChannel) {
          throw (
            "Web Audio output buffer length mismatch! Destination size: " +
            channelData.length +
            " samples vs expected " +
            sizeSamplesPerChannel +
            " samples!"
          );
        }
        if (SDL.audio.format == 32784) {
          for (var j = 0; j < sizeSamplesPerChannel; ++j) {
            channelData[j] = HEAP16[(heapPtr + (j * numChannels + c) * 2) >> 1] / 32768;
          }
        } else if (SDL.audio.format == 8) {
          for (var j = 0; j < sizeSamplesPerChannel; ++j) {
            var v = HEAP8[(heapPtr + (j * numChannels + c)) >> 0];
            channelData[j] = (v >= 0 ? v - 128 : v + 128) / 128;
          }
        }
      }
    },
    debugSurface: function (surfData) {
      console.log("dumping surface " + [surfData.surf, surfData.source, surfData.width, surfData.height]);
      var image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
      var data = image.data;
      var num = Math.min(surfData.width, surfData.height);
      for (var i = 0; i < num; i++) {
        console.log(
          "   diagonal " +
            i +
            ":" +
            [
              data[i * surfData.width * 4 + i * 4 + 0],
              data[i * surfData.width * 4 + i * 4 + 1],
              data[i * surfData.width * 4 + i * 4 + 2],
              data[i * surfData.width * 4 + i * 4 + 3]
            ]
        );
      }
    },
    joystickEventState: 1,
    lastJoystickState: {},
    joystickNamePool: {},
    recordJoystickState: function (joystick, state) {
      var buttons = new Array(state.buttons.length);
      for (var i = 0; i < state.buttons.length; i++) {
        buttons[i] = SDL.getJoystickButtonState(state.buttons[i]);
      }
      SDL.lastJoystickState[joystick] = {
        buttons: buttons,
        axes: state.axes.slice(0),
        timestamp: state.timestamp,
        index: state.index,
        id: state.id
      };
    },
    getJoystickButtonState: function (button) {
      if (typeof button === "object") {
        return button["pressed"];
      } else {
        return button > 0;
      }
    },
    queryJoysticks: function () {
      for (var joystick in SDL.lastJoystickState) {
        var state = SDL.getGamepad(joystick - 1);
        var prevState = SDL.lastJoystickState[joystick];
        if (typeof state === "undefined") return;
        if (typeof state.timestamp !== "number" || state.timestamp !== prevState.timestamp) {
          var i;
          for (i = 0; i < state.buttons.length; i++) {
            var buttonState = SDL.getJoystickButtonState(state.buttons[i]);
            if (buttonState !== prevState.buttons[i]) {
              SDL.events.push({
                type: buttonState ? "joystick_button_down" : "joystick_button_up",
                joystick: joystick,
                index: joystick - 1,
                button: i
              });
            }
          }
          for (i = 0; i < state.axes.length; i++) {
            if (state.axes[i] !== prevState.axes[i]) {
              SDL.events.push({ type: "joystick_axis_motion", joystick: joystick, index: joystick - 1, axis: i, value: state.axes[i] });
            }
          }
          SDL.recordJoystickState(joystick, state);
        }
      }
    },
    joystickAxisValueConversion: function (value) {
      value = Math.min(1, Math.max(value, -1));
      return Math.ceil((value + 1) * 32767.5 - 32768);
    },
    getGamepads: function () {
      var fcn =
        navigator.getGamepads || navigator.webkitGamepads || navigator.mozGamepads || navigator.gamepads || navigator.webkitGetGamepads;
      if (fcn !== undefined) {
        return fcn.apply(navigator);
      } else {
        return [];
      }
    },
    getGamepad: function (deviceIndex) {
      var gamepads = SDL.getGamepads();
      if (gamepads.length > deviceIndex && deviceIndex >= 0) {
        return gamepads[deviceIndex];
      }
      return null;
    }
  };
  function _SDL_SetVideoMode(width, height, depth, flags) {
    [
      "touchstart",
      "touchend",
      "touchmove",
      "mousedown",
      "mouseup",
      "mousemove",
      "DOMMouseScroll",
      "mousewheel",
      "wheel",
      "mouseout"
    ].forEach(function (event) {
      Module["canvas"].addEventListener(event, SDL.receiveEvent, true);
    });
    var canvas = Module["canvas"];
    if (width == 0 && height == 0) {
      width = canvas.width;
      height = canvas.height;
    }
    if (!SDL.addedResizeListener) {
      SDL.addedResizeListener = true;
      Browser.resizeListeners.push(function (w, h) {
        if (!SDL.settingVideoMode) {
          SDL.receiveEvent({ type: "resize", w: w, h: h });
        }
      });
    }
    if (width !== canvas.width || height !== canvas.height) {
      SDL.settingVideoMode = true;
      Browser.setCanvasSize(width, height);
      SDL.settingVideoMode = false;
    }
    if (SDL.screen) {
      SDL.freeSurface(SDL.screen);
      assert(!SDL.screen);
    }
    if (SDL.GL) flags = flags | 67108864;
    SDL.screen = SDL.makeSurface(width, height, flags, true, "screen");
    return SDL.screen;
  }
  function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    return dest;
  }
  var SYSCALLS = {
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
  var cttz_i8 = allocate(
    [
      8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2,
      0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0,
      1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1,
      0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0,
      2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5,
      0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0
    ],
    "i8",
    ALLOC_STATIC
  );
  function _SDL_UnlockSurface(surf) {
    assert(!SDL.GL);
    var surfData = SDL.surfaces[surf];
    if (!surfData.locked || --surfData.locked > 0) {
      return;
    }
    if (surfData.isFlagSet(2097152)) {
      SDL.copyIndexedColorData(surfData);
    } else if (!surfData.colors) {
      var data = surfData.image.data;
      var buffer = surfData.buffer;
      assert(buffer % 4 == 0, "Invalid buffer offset: " + buffer);
      var src = buffer >> 2;
      var dst = 0;
      var isScreen = surf == SDL.screen;
      var num;
      if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
        num = data.length;
        while (dst < num) {
          var val = HEAP32[src];
          data[dst] = val & 255;
          data[dst + 1] = (val >> 8) & 255;
          data[dst + 2] = (val >> 16) & 255;
          data[dst + 3] = isScreen ? 255 : (val >> 24) & 255;
          src++;
          dst += 4;
        }
      } else {
        var data32 = new Uint32Array(data.buffer);
        if (isScreen && SDL.defaults.opaqueFrontBuffer) {
          num = data32.length;
          data32.set(HEAP32.subarray(src, src + num));
          var data8 = new Uint8Array(data.buffer);
          var i = 3;
          var j = i + 4 * num;
          if (num % 8 == 0) {
            while (i < j) {
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
              data8[i] = 255;
              i = (i + 4) | 0;
            }
          } else {
            while (i < j) {
              data8[i] = 255;
              i = (i + 4) | 0;
            }
          }
        } else {
          data32.set(HEAP32.subarray(src, src + data32.length));
        }
      }
    } else {
      var width = Module["canvas"].width;
      var height = Module["canvas"].height;
      var s = surfData.buffer;
      var data = surfData.image.data;
      var colors = surfData.colors;
      for (var y = 0; y < height; y++) {
        var base = y * width * 4;
        for (var x = 0; x < width; x++) {
          var val = HEAPU8[s++ >> 0] * 4;
          var start = base + x * 4;
          data[start] = colors[val];
          data[start + 1] = colors[val + 1];
          data[start + 2] = colors[val + 2];
        }
        s += width * 3;
      }
    }
    surfData.ctx.putImageData(surfData.image, 0, 0);
  }
  function _SDL_Init(initFlags) {
    SDL.startTime = Date.now();
    SDL.initFlags = initFlags;
    if (!Module["doNotCaptureKeyboard"]) {
      var keyboardListeningElement = Module["keyboardListeningElement"] || document;
      keyboardListeningElement.addEventListener("keydown", SDL.receiveEvent);
      keyboardListeningElement.addEventListener("keyup", SDL.receiveEvent);
      keyboardListeningElement.addEventListener("keypress", SDL.receiveEvent);
      window.addEventListener("focus", SDL.receiveEvent);
      window.addEventListener("blur", SDL.receiveEvent);
      document.addEventListener("visibilitychange", SDL.receiveEvent);
    }
    if (initFlags & 512) {
      addEventListener("gamepadconnected", function () {});
    }
    window.addEventListener("unload", SDL.receiveEvent);
    SDL.keyboardState = _malloc(65536);
    _memset(SDL.keyboardState, 0, 65536);
    SDL.DOMEventToSDLEvent["keydown"] = 768;
    SDL.DOMEventToSDLEvent["keyup"] = 769;
    SDL.DOMEventToSDLEvent["keypress"] = 771;
    SDL.DOMEventToSDLEvent["mousedown"] = 1025;
    SDL.DOMEventToSDLEvent["mouseup"] = 1026;
    SDL.DOMEventToSDLEvent["mousemove"] = 1024;
    SDL.DOMEventToSDLEvent["wheel"] = 1027;
    SDL.DOMEventToSDLEvent["touchstart"] = 1792;
    SDL.DOMEventToSDLEvent["touchend"] = 1793;
    SDL.DOMEventToSDLEvent["touchmove"] = 1794;
    SDL.DOMEventToSDLEvent["unload"] = 256;
    SDL.DOMEventToSDLEvent["resize"] = 28673;
    SDL.DOMEventToSDLEvent["visibilitychange"] = 512;
    SDL.DOMEventToSDLEvent["focus"] = 512;
    SDL.DOMEventToSDLEvent["blur"] = 512;
    SDL.DOMEventToSDLEvent["joystick_axis_motion"] = 1536;
    SDL.DOMEventToSDLEvent["joystick_button_down"] = 1539;
    SDL.DOMEventToSDLEvent["joystick_button_up"] = 1540;
    return 0;
  }
  function ___syscall146(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
      var stream = SYSCALLS.get(),
        iov = SYSCALLS.get(),
        iovcnt = SYSCALLS.get();
      var ret = 0;
      if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []];
        ___syscall146.printChar = function (stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? Module["print"] : Module["printErr"])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(iov + i * 8) >> 2];
        var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
        for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr + j]);
        }
        ret += len;
      }
      return ret;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
      return -e.errno;
    }
  }
  function _SDL_Flip(surf) {}
  function _SDL_FreeSurface(surf) {
    if (surf) SDL.freeSurface(surf);
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
  function _SDL_CreateRGBSurface(flags, width, height, depth, rmask, gmask, bmask, amask) {
    return SDL.makeSurface(width, height, flags, false, "CreateRGBSurface", rmask, gmask, bmask, amask);
  }
  var GLctx;
  GL.init();
  Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas, vrDevice) {
    Module.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
    Module["requestFullScreen"] = Module["requestFullscreen"];
    Browser.requestFullScreen(lockPointer, resizeCanvas, vrDevice);
  };
  Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas, vrDevice) {
    Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
  };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func);
  };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates);
  };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause();
  };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume();
  };
  Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia();
  };
  Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
  };
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
  ___buildEnvironment(ENV);
  __ATEXIT__.push(function () {
    var fflush = Module["_fflush"];
    if (fflush) fflush(0);
    var printChar = ___syscall146.printChar;
    if (!printChar) return;
    var buffers = ___syscall146.buffers;
    if (buffers[1].length) printChar(1, 10);
    if (buffers[2].length) printChar(2, 10);
  });
  DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);
  STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
  STACK_MAX = STACK_BASE + TOTAL_STACK;
  DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);
  HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
  staticSealed = true;
  function invoke_iiii(index, a1, a2, a3) {
    try {
      return Module["dynCall_iiii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    try {
      Module["dynCall_viiiii"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_vi(index, a1) {
    try {
      Module["dynCall_vi"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_vii(index, a1, a2) {
    try {
      Module["dynCall_vii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
    try {
      return Module["dynCall_iiiiiii"](index, a1, a2, a3, a4, a5, a6);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_ii(index, a1) {
    try {
      return Module["dynCall_ii"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    try {
      Module["dynCall_viiiiiiiii"](index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_iii(index, a1, a2) {
    try {
      return Module["dynCall_iii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  function invoke_viiii(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viiii"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;
      Module["setThrew"](1, 0);
    }
  }
  Module.asmGlobalArg = {
    Math: Math,
    Int8Array: Int8Array,
    Int16Array: Int16Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
    Uint16Array: Uint16Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array,
    NaN: NaN,
    Infinity: Infinity
  };
  Module.asmLibraryArg = {
    abort: abort,
    assert: assert,
    enlargeMemory: enlargeMemory,
    getTotalMemory: getTotalMemory,
    abortOnCannotGrowMemory: abortOnCannotGrowMemory,
    invoke_iiii: invoke_iiii,
    invoke_viiiii: invoke_viiiii,
    invoke_vi: invoke_vi,
    invoke_vii: invoke_vii,
    invoke_iiiiiii: invoke_iiiiiii,
    invoke_ii: invoke_ii,
    invoke_viiiiiiiii: invoke_viiiiiiiii,
    invoke_iii: invoke_iii,
    invoke_viiii: invoke_viiii,
    _putenv: _putenv,
    _SDL_SetVideoMode: _SDL_SetVideoMode,
    _IMG_Load: _IMG_Load,
    _TTF_FontHeight: _TTF_FontHeight,
    _SDL_CloseAudio: _SDL_CloseAudio,
    _SDL_PauseAudio: _SDL_PauseAudio,
    _SDL_GetTicks: _SDL_GetTicks,
    ___buildEnvironment: ___buildEnvironment,
    _SDL_LockSurface: _SDL_LockSurface,
    ___setErrNo: ___setErrNo,
    _emscripten_set_main_loop_timing: _emscripten_set_main_loop_timing,
    _SDL_Init: _SDL_Init,
    _SDL_FreeSurface: _SDL_FreeSurface,
    _Mix_PlayChannel: _Mix_PlayChannel,
    _TTF_RenderText_Solid: _TTF_RenderText_Solid,
    _Mix_FreeChunk: _Mix_FreeChunk,
    _IMG_Load_RW: _IMG_Load_RW,
    _Mix_PlayMusic: _Mix_PlayMusic,
    _emscripten_memcpy_big: _emscripten_memcpy_big,
    _TTF_SizeText: _TTF_SizeText,
    _Mix_LoadWAV_RW: _Mix_LoadWAV_RW,
    _SDL_UpperBlitScaled: _SDL_UpperBlitScaled,
    ___syscall140: ___syscall140,
    _emscripten_set_main_loop: _emscripten_set_main_loop,
    _emscripten_get_now: _emscripten_get_now,
    _SDL_CreateRGBSurface: _SDL_CreateRGBSurface,
    _getenv: _getenv,
    _SDL_UnlockSurface: _SDL_UnlockSurface,
    ___syscall6: ___syscall6,
    _Mix_HaltMusic: _Mix_HaltMusic,
    _SDL_Flip: _SDL_Flip,
    _SDL_FreeRW: _SDL_FreeRW,
    _SDL_UpperBlit: _SDL_UpperBlit,
    _SDL_RWFromConstMem: _SDL_RWFromConstMem,
    ___syscall146: ___syscall146,
    _SDL_RWFromFile: _SDL_RWFromFile,
    DYNAMICTOP_PTR: DYNAMICTOP_PTR,
    tempDoublePtr: tempDoublePtr,
    ABORT: ABORT,
    STACKTOP: STACKTOP,
    STACK_MAX: STACK_MAX,
    cttz_i8: cttz_i8
  }; // EMSCRIPTEN_START_ASM
  var asm = (function (global, env, buffer) {
    "use asm";
    var a = new global.Int8Array(buffer);
    var b = new global.Int16Array(buffer);
    var c = new global.Int32Array(buffer);
    var d = new global.Uint8Array(buffer);
    var e = new global.Uint16Array(buffer);
    var f = new global.Uint32Array(buffer);
    var g = new global.Float32Array(buffer);
    var h = new global.Float64Array(buffer);
    var i = env.DYNAMICTOP_PTR | 0;
    var j = env.tempDoublePtr | 0;
    var k = env.ABORT | 0;
    var l = env.STACKTOP | 0;
    var m = env.STACK_MAX | 0;
    var n = env.cttz_i8 | 0;
    var o = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = global.NaN,
      t = global.Infinity;
    var u = 0,
      v = 0,
      w = 0,
      x = 0,
      y = 0.0;
    var z = 0;
    var A = global.Math.floor;
    var B = global.Math.abs;
    var C = global.Math.sqrt;
    var D = global.Math.pow;
    var E = global.Math.cos;
    var F = global.Math.sin;
    var G = global.Math.tan;
    var H = global.Math.acos;
    var I = global.Math.asin;
    var J = global.Math.atan;
    var K = global.Math.atan2;
    var L = global.Math.exp;
    var M = global.Math.log;
    var N = global.Math.ceil;
    var O = global.Math.imul;
    var P = global.Math.min;
    var Q = global.Math.max;
    var R = global.Math.clz32;
    var S = env.abort;
    var T = env.assert;
    var U = env.enlargeMemory;
    var V = env.getTotalMemory;
    var W = env.abortOnCannotGrowMemory;
    var X = env.invoke_iiii;
    var Y = env.invoke_viiiii;
    var Z = env.invoke_vi;
    var _ = env.invoke_vii;
    var $ = env.invoke_iiiiiii;
    var aa = env.invoke_ii;
    var ba = env.invoke_viiiiiiiii;
    var ca = env.invoke_iii;
    var da = env.invoke_viiii;
    var ea = env._putenv;
    var fa = env._SDL_SetVideoMode;
    var ga = env._IMG_Load;
    var ha = env._TTF_FontHeight;
    var ia = env._SDL_CloseAudio;
    var ja = env._SDL_PauseAudio;
    var ka = env._SDL_GetTicks;
    var la = env.___buildEnvironment;
    var ma = env._SDL_LockSurface;
    var na = env.___setErrNo;
    var oa = env._emscripten_set_main_loop_timing;
    var pa = env._SDL_Init;
    var qa = env._SDL_FreeSurface;
    var ra = env._Mix_PlayChannel;
    var sa = env._TTF_RenderText_Solid;
    var ta = env._Mix_FreeChunk;
    var ua = env._IMG_Load_RW;
    var va = env._Mix_PlayMusic;
    var wa = env._emscripten_memcpy_big;
    var xa = env._TTF_SizeText;
    var ya = env._Mix_LoadWAV_RW;
    var za = env._SDL_UpperBlitScaled;
    var Aa = env.___syscall140;
    var Ba = env._emscripten_set_main_loop;
    var Ca = env._emscripten_get_now;
    var Da = env._SDL_CreateRGBSurface;
    var Ea = env._getenv;
    var Fa = env._SDL_UnlockSurface;
    var Ga = env.___syscall6;
    var Ha = env._Mix_HaltMusic;
    var Ia = env._SDL_Flip;
    var Ja = env._SDL_FreeRW;
    var Ka = env._SDL_UpperBlit;
    var La = env._SDL_RWFromConstMem;
    var Ma = env.___syscall146;
    var Na = env._SDL_RWFromFile;
    var Oa = 0.0;
    // EMSCRIPTEN_START_FUNCS
    function xc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      t = (((n * 3) | 0) + 131074 + m) | 0;
      u = a[b >> 0] | 0;
      a[i >> 0] = -1;
      w = (t >>> 2) & 255;
      t = (t >>> 18) & 255;
      u = (((u & 255) * 19077) | 0) >>> 8;
      s = (u + -14234 + (((t * 26149) | 0) >>> 8)) | 0;
      a[(i + 1) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
      t = (u + 8708 - (((w * 6419) | 0) >>> 8) - (((t * 13320) | 0) >>> 8)) | 0;
      a[(i + 2) >> 0] = t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0;
      w = (u + -17685 + (((w * 33050) | 0) >>> 8)) | 0;
      a[(i + 3) >> 0] = w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0;
      w = (c | 0) != 0;
      if (w) {
        s = (n + 131074 + ((m * 3) | 0)) | 0;
        u = a[c >> 0] | 0;
        a[j >> 0] = -1;
        t = (s >>> 2) & 255;
        s = (s >>> 18) & 255;
        u = (((u & 255) * 19077) | 0) >>> 8;
        r = ((((s * 26149) | 0) >>> 8) + -14234 + u) | 0;
        a[(j + 1) >> 0] = r >>> 0 < 16384 ? r >>> 6 : ((r >>> 31) + 255) | 0;
        s = (8708 - (((t * 6419) | 0) >>> 8) - (((s * 13320) | 0) >>> 8) + u) | 0;
        a[(j + 2) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
        u = ((((t * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[(j + 3) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          z = (t + l) | 0;
          B = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          y = a[(b + o) >> 0] | 0;
          p = o << 2;
          A = (i + p) | 0;
          a[A >> 0] = -1;
          q = (z >>> 1) & 255;
          z = (z >>> 17) & 255;
          y = (((y & 255) * 19077) | 0) >>> 8;
          C = (y + -14234 + (((z * 26149) | 0) >>> 8)) | 0;
          a[(A + 1) >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          z = (y + 8708 - (((q * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8)) | 0;
          a[(A + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          q = (y + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
          a[(A + 3) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          A = a[(b + l) >> 0] | 0;
          q = s << 3;
          y = (i + q) | 0;
          a[y >> 0] = -1;
          z = (B >>> 1) & 255;
          B = (B >>> 17) & 255;
          A = (((A & 255) * 19077) | 0) >>> 8;
          C = (A + -14234 + (((B * 26149) | 0) >>> 8)) | 0;
          a[(y + 1) >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          B = (A + 8708 - (((z * 6419) | 0) >>> 8) - (((B * 13320) | 0) >>> 8)) | 0;
          a[(y + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          z = (A + -17685 + (((z * 33050) | 0) >>> 8)) | 0;
          a[(y + 3) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          if (w) {
            y = (u + r) | 0;
            z = (t + m) | 0;
            C = a[(c + o) >> 0] | 0;
            B = (j + p) | 0;
            a[B >> 0] = -1;
            A = (y >>> 1) & 255;
            y = (y >>> 17) & 255;
            C = (((C & 255) * 19077) | 0) >>> 8;
            u = ((((y * 26149) | 0) >>> 8) + -14234 + C) | 0;
            a[(B + 1) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
            y = (8708 - (((A * 6419) | 0) >>> 8) - (((y * 13320) | 0) >>> 8) + C) | 0;
            a[(B + 2) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            C = ((((A * 33050) | 0) >>> 8) + -17685 + C) | 0;
            a[(B + 3) >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
            B = a[(c + l) >> 0] | 0;
            C = (j + q) | 0;
            a[C >> 0] = -1;
            A = (z >>> 1) & 255;
            z = (z >>> 17) & 255;
            B = (((B & 255) * 19077) | 0) >>> 8;
            y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
            a[(C + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
            a[(C + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[(C + 3) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      z = (m + 131074 + ((n * 3) | 0)) | 0;
      B = a[(b + x) >> 0] | 0;
      l = x << 2;
      C = (i + l) | 0;
      a[C >> 0] = -1;
      A = (z >>> 2) & 255;
      z = (z >>> 18) & 255;
      B = (((B & 255) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 3) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      if (!w) return;
      z = (n + 131074 + ((m * 3) | 0)) | 0;
      B = a[(c + x) >> 0] | 0;
      C = (j + l) | 0;
      a[C >> 0] = -1;
      A = (z >>> 2) & 255;
      z = (z >>> 18) & 255;
      B = (((B & 255) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 3) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      return;
    }
    function yc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      t = (((n * 3) | 0) + 131074 + m) | 0;
      w = (t >>> 2) & 255;
      t = t >>> 18;
      s = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      u = (s + -14234 + (((t * 26149) | 0) >>> 8)) | 0;
      t = (s + 8708 - (((t * 13320) | 0) >>> 8) - (((w * 6419) | 0) >>> 8)) | 0;
      w = (s + -17685 + (((w * 33050) | 0) >>> 8)) | 0;
      a[i >> 0] =
        ((t >>> 0 < 16384 ? t >>> 6 : (((t >> 31) & 3841) + 255) | 0) >>> 4) | ((u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0) & 240);
      a[(i + 1) >> 0] = (w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0) | 15;
      w = (c | 0) != 0;
      if (w) {
        s = (n + 131074 + ((m * 3) | 0)) | 0;
        r = (s >>> 2) & 255;
        s = s >>> 18;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        t = ((((s * 26149) | 0) >>> 8) + -14234 + u) | 0;
        s = (8708 - (((s * 13320) | 0) >>> 8) - (((r * 6419) | 0) >>> 8) + u) | 0;
        u = ((((r * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[j >> 0] =
          ((s >>> 0 < 16384 ? s >>> 6 : (((s >> 31) & 3841) + 255) | 0) >>> 4) |
          ((t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0) & 240);
        a[(j + 1) >> 0] = (u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0) | 15;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          C = (t + l) | 0;
          B = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          q = (C >>> 1) & 255;
          C = C >>> 17;
          p = o << 1;
          z = (i + p) | 0;
          A = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          y = (A + -14234 + (((C * 26149) | 0) >>> 8)) | 0;
          C = (A + 8708 - (((C * 13320) | 0) >>> 8) - (((q * 6419) | 0) >>> 8)) | 0;
          q = (A + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
          a[z >> 0] =
            ((C >>> 0 < 16384 ? C >>> 6 : (((C >> 31) & 3841) + 255) | 0) >>> 4) |
            ((y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0) & 240);
          a[(z + 1) >> 0] = (q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0) | 15;
          z = (B >>> 1) & 255;
          B = B >>> 17;
          q = s << 2;
          y = (i + q) | 0;
          C = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          A = (C + -14234 + (((B * 26149) | 0) >>> 8)) | 0;
          B = (C + 8708 - (((B * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8)) | 0;
          z = (C + -17685 + (((z * 33050) | 0) >>> 8)) | 0;
          a[y >> 0] =
            ((B >>> 0 < 16384 ? B >>> 6 : (((B >> 31) & 3841) + 255) | 0) >>> 4) |
            ((A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0) & 240);
          a[(y + 1) >> 0] = (z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0) | 15;
          if (w) {
            A = (u + r) | 0;
            z = (t + m) | 0;
            u = (A >>> 1) & 255;
            A = A >>> 17;
            y = (j + p) | 0;
            C = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            B = ((((A * 26149) | 0) >>> 8) + -14234 + C) | 0;
            A = (8708 - (((A * 13320) | 0) >>> 8) - (((u * 6419) | 0) >>> 8) + C) | 0;
            C = ((((u * 33050) | 0) >>> 8) + -17685 + C) | 0;
            a[y >> 0] =
              ((A >>> 0 < 16384 ? A >>> 6 : (((A >> 31) & 3841) + 255) | 0) >>> 4) |
              ((B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0) & 240);
            a[(y + 1) >> 0] = (C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0) | 15;
            y = (z >>> 1) & 255;
            z = z >>> 17;
            C = (j + q) | 0;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            A = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
            z = (8708 - (((z * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
            B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[C >> 0] =
              ((z >>> 0 < 16384 ? z >>> 6 : (((z >> 31) & 3841) + 255) | 0) >>> 4) |
              ((A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0) & 240);
            a[(C + 1) >> 0] = (B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0) | 15;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      z = (m + 131074 + ((n * 3) | 0)) | 0;
      y = (z >>> 2) & 255;
      z = z >>> 18;
      l = x << 1;
      C = (i + l) | 0;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      A = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      z = (8708 - (((z * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
      B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] =
        ((z >>> 0 < 16384 ? z >>> 6 : (((z >> 31) & 3841) + 255) | 0) >>> 4) | ((A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0) & 240);
      a[(C + 1) >> 0] = (B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0) | 15;
      if (!w) return;
      z = (n + 131074 + ((m * 3) | 0)) | 0;
      y = (z >>> 2) & 255;
      z = z >>> 18;
      C = (j + l) | 0;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      A = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      z = (8708 - (((z * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
      B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] =
        ((z >>> 0 < 16384 ? z >>> 6 : (((z >> 31) & 3841) + 255) | 0) >>> 4) | ((A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0) & 240);
      a[(C + 1) >> 0] = (B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0) | 15;
      return;
    }
    function zc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      u = (((n * 3) | 0) + 131074 + m) | 0;
      w = (u >>> 2) & 255;
      u = u >>> 18;
      s = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      t = (s + -14234 + (((u * 26149) | 0) >>> 8)) | 0;
      u = (s + 8708 - (((u * 13320) | 0) >>> 8) - (((w * 6419) | 0) >>> 8)) | 0;
      u = u >>> 0 < 16384 ? u >> 6 : (((u >> 31) & -255) + 255) | 0;
      w = (s + -17685 + (((w * 33050) | 0) >>> 8)) | 0;
      a[i >> 0] = (u >>> 5) | ((t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0) & 248);
      a[(i + 1) >> 0] = ((u << 3) & 224) | ((w >>> 0 < 16384 ? w >>> 6 : (((w >> 31) & 1793) + 255) | 0) >>> 3);
      w = (c | 0) != 0;
      if (w) {
        t = (n + 131074 + ((m * 3) | 0)) | 0;
        r = (t >>> 2) & 255;
        t = t >>> 18;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        s = ((((t * 26149) | 0) >>> 8) + -14234 + u) | 0;
        t = (8708 - (((t * 13320) | 0) >>> 8) - (((r * 6419) | 0) >>> 8) + u) | 0;
        t = t >>> 0 < 16384 ? t >> 6 : (((t >> 31) & -255) + 255) | 0;
        u = ((((r * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[j >> 0] = (t >>> 5) | ((s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0) & 248);
        a[(j + 1) >> 0] = ((t << 3) & 224) | ((u >>> 0 < 16384 ? u >>> 6 : (((u >> 31) & 1793) + 255) | 0) >>> 3);
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          y = (t + l) | 0;
          A = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          q = (y >>> 1) & 255;
          y = y >>> 17;
          p = o << 1;
          z = (i + p) | 0;
          B = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (B + -14234 + (((y * 26149) | 0) >>> 8)) | 0;
          y = (B + 8708 - (((y * 13320) | 0) >>> 8) - (((q * 6419) | 0) >>> 8)) | 0;
          y = y >>> 0 < 16384 ? y >> 6 : (((y >> 31) & -255) + 255) | 0;
          q = (B + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
          a[z >> 0] = (y >>> 5) | ((C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0) & 248);
          a[(z + 1) >> 0] = ((y << 3) & 224) | ((q >>> 0 < 16384 ? q >>> 6 : (((q >> 31) & 1793) + 255) | 0) >>> 3);
          z = (A >>> 1) & 255;
          A = A >>> 17;
          q = s << 2;
          y = (i + q) | 0;
          C = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          B = (C + -14234 + (((A * 26149) | 0) >>> 8)) | 0;
          A = (C + 8708 - (((A * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8)) | 0;
          A = A >>> 0 < 16384 ? A >> 6 : (((A >> 31) & -255) + 255) | 0;
          z = (C + -17685 + (((z * 33050) | 0) >>> 8)) | 0;
          a[y >> 0] = (A >>> 5) | ((B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0) & 248);
          a[(y + 1) >> 0] = ((A << 3) & 224) | ((z >>> 0 < 16384 ? z >>> 6 : (((z >> 31) & 1793) + 255) | 0) >>> 3);
          if (w) {
            B = (u + r) | 0;
            A = (t + m) | 0;
            u = (B >>> 1) & 255;
            B = B >>> 17;
            y = (j + p) | 0;
            C = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            z = ((((B * 26149) | 0) >>> 8) + -14234 + C) | 0;
            B = (8708 - (((B * 13320) | 0) >>> 8) - (((u * 6419) | 0) >>> 8) + C) | 0;
            B = B >>> 0 < 16384 ? B >> 6 : (((B >> 31) & -255) + 255) | 0;
            C = ((((u * 33050) | 0) >>> 8) + -17685 + C) | 0;
            a[y >> 0] = (B >>> 5) | ((z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0) & 248);
            a[(y + 1) >> 0] = ((B << 3) & 224) | ((C >>> 0 < 16384 ? C >>> 6 : (((C >> 31) & 1793) + 255) | 0) >>> 3);
            y = (A >>> 1) & 255;
            A = A >>> 17;
            C = (j + q) | 0;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            z = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
            A = (8708 - (((A * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
            A = A >>> 0 < 16384 ? A >> 6 : (((A >> 31) & -255) + 255) | 0;
            B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[C >> 0] = (A >>> 5) | ((z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0) & 248);
            a[(C + 1) >> 0] = ((A << 3) & 224) | ((B >>> 0 < 16384 ? B >>> 6 : (((B >> 31) & 1793) + 255) | 0) >>> 3);
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      A = (m + 131074 + ((n * 3) | 0)) | 0;
      y = (A >>> 2) & 255;
      A = A >>> 18;
      l = x << 1;
      C = (i + l) | 0;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      z = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      A = (8708 - (((A * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
      A = A >>> 0 < 16384 ? A >> 6 : (((A >> 31) & -255) + 255) | 0;
      B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = (A >>> 5) | ((z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0) & 248);
      a[(C + 1) >> 0] = ((A << 3) & 224) | ((B >>> 0 < 16384 ? B >>> 6 : (((B >> 31) & 1793) + 255) | 0) >>> 3);
      if (!w) return;
      A = (n + 131074 + ((m * 3) | 0)) | 0;
      y = (A >>> 2) & 255;
      A = A >>> 18;
      C = (j + l) | 0;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      z = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      A = (8708 - (((A * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + B) | 0;
      A = A >>> 0 < 16384 ? A >> 6 : (((A >> 31) & -255) + 255) | 0;
      B = ((((y * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = (A >>> 5) | ((z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0) & 248);
      a[(C + 1) >> 0] = ((A << 3) & 224) | ((B >>> 0 < 16384 ? B >>> 6 : (((B >> 31) & 1793) + 255) | 0) >>> 3);
      return;
    }
    function Ac(b, c, e, f) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      var g = 0;
      if (!b) b = 0;
      else b = a[b >> 0] | 0;
      if ((f | 0) > 0) g = 0;
      else return;
      do {
        b = ((d[(c + g) >> 0] | 0) + (b & 255)) & 255;
        a[(e + g) >> 0] = b;
        g = (g + 1) | 0;
      } while ((g | 0) != (f | 0));
      return;
    }
    function Bc(b, c, e, f) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      var g = 0;
      g = (f | 0) > 0;
      if (!b) {
        if (g) {
          g = 0;
          b = 0;
        } else return;
        do {
          g = ((d[(c + b) >> 0] | 0) + (g & 255)) | 0;
          a[(e + b) >> 0] = g;
          b = (b + 1) | 0;
        } while ((b | 0) != (f | 0));
        return;
      } else {
        if (g) g = 0;
        else return;
        do {
          a[(e + g) >> 0] = (d[(c + g) >> 0] | 0) + (d[(b + g) >> 0] | 0);
          g = (g + 1) | 0;
        } while ((g | 0) != (f | 0));
        return;
      }
    }
    function Cc(b, c, e, f) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0;
      g = (f | 0) > 0;
      if (!b) {
        if (g) {
          g = 0;
          h = 0;
        } else return;
        do {
          g = ((d[(c + h) >> 0] | 0) + (g & 255)) | 0;
          a[(e + h) >> 0] = g;
          h = (h + 1) | 0;
        } while ((h | 0) != (f | 0));
        return;
      }
      i = a[b >> 0] | 0;
      if (g) {
        g = i;
        h = i;
        j = 0;
      } else return;
      while (1) {
        g = ((g & 255) - (h & 255) + (i & 255)) | 0;
        g = ((g >>> 0 < 256 ? g : ((g >>> 31) + 255) | 0) + (d[(c + j) >> 0] | 0)) & 255;
        a[(e + j) >> 0] = g;
        h = (j + 1) | 0;
        if ((h | 0) == (f | 0)) break;
        k = i;
        j = h;
        i = a[(b + h) >> 0] | 0;
        h = k;
      }
      return;
    }
    function Dc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      a[g >> 0] = a[b >> 0] | 0;
      h = (b + 1) | 0;
      i = (g + 1) | 0;
      l = (c + -1) | 0;
      j = (c | 0) > 1;
      if (j) {
        c = 0;
        do {
          a[(i + c) >> 0] = (d[(h + c) >> 0] | 0) - (d[(b + c) >> 0] | 0);
          c = (c + 1) | 0;
        } while ((c | 0) != (l | 0));
      }
      b = (b + f) | 0;
      c = (g + f) | 0;
      if ((e | 0) <= 1) return;
      k = (0 - f) | 0;
      if (j) j = 1;
      else {
        h = 1;
        while (1) {
          a[c >> 0] = (d[b >> 0] | 0) - (d[(b + k) >> 0] | 0);
          h = (h + 1) | 0;
          if ((h | 0) == (e | 0)) break;
          else {
            b = (b + f) | 0;
            c = (c + f) | 0;
          }
        }
        return;
      }
      while (1) {
        a[c >> 0] = (d[b >> 0] | 0) - (d[(b + k) >> 0] | 0);
        i = (b + 1) | 0;
        g = (c + 1) | 0;
        h = 0;
        do {
          a[(g + h) >> 0] = (d[(i + h) >> 0] | 0) - (d[(b + h) >> 0] | 0);
          h = (h + 1) | 0;
        } while ((h | 0) != (l | 0));
        j = (j + 1) | 0;
        if ((j | 0) == (e | 0)) break;
        else {
          b = (b + f) | 0;
          c = (c + f) | 0;
        }
      }
      return;
    }
    function Ec(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0;
      a[g >> 0] = a[b >> 0] | 0;
      i = (b + 1) | 0;
      j = (g + 1) | 0;
      k = (c + -1) | 0;
      if ((c | 0) > 1) {
        h = 0;
        do {
          a[(j + h) >> 0] = (d[(i + h) >> 0] | 0) - (d[(b + h) >> 0] | 0);
          h = (h + 1) | 0;
        } while ((h | 0) != (k | 0));
      }
      if (((c | 0) > 0) & ((e | 0) > 1)) j = 1;
      else return;
      do {
        h = b;
        b = (b + f) | 0;
        g = (g + f) | 0;
        i = 0;
        do {
          a[(g + i) >> 0] = (d[(b + i) >> 0] | 0) - (d[(h + i) >> 0] | 0);
          i = (i + 1) | 0;
        } while ((i | 0) != (c | 0));
        j = (j + 1) | 0;
      } while ((j | 0) != (e | 0));
      return;
    }
    function Fc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      a[g >> 0] = a[b >> 0] | 0;
      i = (b + 1) | 0;
      j = (g + 1) | 0;
      k = (c + -1) | 0;
      l = (c | 0) > 1;
      if (l) {
        h = 0;
        do {
          a[(j + h) >> 0] = (d[(i + h) >> 0] | 0) - (d[(b + h) >> 0] | 0);
          h = (h + 1) | 0;
        } while ((h | 0) != (k | 0));
      }
      b = (b + f) | 0;
      h = (g + f) | 0;
      if ((e | 0) <= 1) return;
      k = (0 - f) | 0;
      if (l) j = 1;
      else {
        i = 1;
        while (1) {
          a[h >> 0] = (d[b >> 0] | 0) - (d[(b + k) >> 0] | 0);
          i = (i + 1) | 0;
          if ((i | 0) == (e | 0)) break;
          else {
            b = (b + f) | 0;
            h = (h + f) | 0;
          }
        }
        return;
      }
      while (1) {
        a[h >> 0] = (d[b >> 0] | 0) - (d[(b + k) >> 0] | 0);
        i = 1;
        do {
          l = (i - f) | 0;
          l = ((d[(b + l) >> 0] | 0) + (d[(b + (i + -1)) >> 0] | 0) - (d[(b + (l + -1)) >> 0] | 0)) | 0;
          a[(h + i) >> 0] = (d[(b + i) >> 0] | 0) - (l >>> 0 < 256 ? l : ((l >>> 31) + 255) | 0);
          i = (i + 1) | 0;
        } while ((i | 0) != (c | 0));
        j = (j + 1) | 0;
        if ((j | 0) == (e | 0)) break;
        else {
          b = (b + f) | 0;
          h = (h + f) | 0;
        }
      }
      return;
    }
    function Gc(b, d, e, f) {
      b = b | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0;
      if (((d | 0) < 1) | (((b | 0) < 1) | ((f | 0) == 0))) {
        f = 2;
        return f | 0;
      }
      s = (e | 0) != 0;
      if (s) {
        if (c[(e + 8) >> 2] | 0) {
          g = c[(e + 20) >> 2] | 0;
          j = c[(e + 24) >> 2] | 0;
          h = c[(e + 12) >> 2] | 0;
          i = c[(e + 16) >> 2] | 0;
          if (((j | 0) < 1) | (((g | 0) < 1) | ((i | h | 0) < 0))) {
            f = 2;
            return f | 0;
          }
          if (((((h & -2) + g) | 0) > (b | 0)) | ((((i & -2) + j) | 0) > (d | 0))) {
            f = 2;
            return f | 0;
          } else {
            h = g;
            d = j;
          }
        } else h = b;
        if (c[(e + 28) >> 2] | 0) {
          b = c[(e + 32) >> 2] | 0;
          g = c[(e + 36) >> 2] | 0;
          if (!b) {
            q = ue(g | 0, ((((g | 0) < 0) << 31) >> 31) | 0, h | 0, ((((h | 0) < 0) << 31) >> 31) | 0) | 0;
            b = ((d | 0) / 2) | 0;
            b = le(q | 0, z | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
            b = se(b | 0, z | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
          }
          if (!g) {
            q = ue(b | 0, ((((b | 0) < 0) << 31) >> 31) | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
            d = ((h | 0) / 2) | 0;
            d = le(q | 0, z | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
            d = se(d | 0, z | 0, h | 0, ((((h | 0) < 0) << 31) >> 31) | 0) | 0;
          } else d = g;
          if (((b | 0) < 1) | ((d | 0) < 1)) {
            f = 2;
            return f | 0;
          }
        } else b = h;
      }
      c[(f + 4) >> 2] = b;
      q = (f + 8) | 0;
      c[q >> 2] = d;
      p = c[f >> 2] | 0;
      if (!(((d | 0) > 0) & ((b | 0) > 0) & (p >>> 0 < 13))) {
        f = 2;
        return f | 0;
      }
      do
        if ((c[(f + 12) >> 2] | 0) < 1 ? ((r = (f + 80) | 0), (c[r >> 2] | 0) == 0) : 0) {
          h = (((b | 0) < 0) << 31) >> 31;
          g = a[(4937 + p) >> 0] | 0;
          o = ue((g & 255) | 0, 0, b | 0, h | 0) | 0;
          n = z;
          if ((n >>> 0 > 0) | (((n | 0) == 0) & (o >>> 0 > 4294967295))) {
            f = 2;
            return f | 0;
          }
          n = O(g & 255, b) | 0;
          g = (((d | 0) < 0) << 31) >> 31;
          o = ue(n | 0, ((((n | 0) < 0) << 31) >> 31) | 0, d | 0, g | 0) | 0;
          l = z;
          m = p >>> 0 < 11;
          if (m) {
            k = 0;
            h = 0;
            i = 0;
            d = 0;
            j = 0;
            b = 0;
          } else {
            k = (((b + 1) | 0) / 2) | 0;
            i = (((d + 1) | 0) / 2) | 0;
            i = ue(k | 0, ((((k | 0) < 0) << 31) >> 31) | 0, i | 0, ((((i | 0) < 0) << 31) >> 31) | 0) | 0;
            u = z;
            t = (p | 0) == 12;
            j = ue(b | 0, h | 0, d | 0, g | 0) | 0;
            h = t ? b : 0;
            d = u;
            j = t ? j : 0;
            b = t ? z : 0;
          }
          g = oe(i | 0, d | 0, 1) | 0;
          d = z;
          u = le(j | 0, b | 0, o | 0, l | 0) | 0;
          d = le(u | 0, z | 0, g | 0, d | 0) | 0;
          u = z;
          if (
            !(((d | 0) == 0) & ((u | 0) == 0))
              ? !(((u >>> 0 < 0) | (((u | 0) == 0) & (d >>> 0 < 2147418113))) & (((d | 0) == (d | 0)) & ((u | 0) == 0)))
              : 0
          ) {
            u = 1;
            return u | 0;
          }
          d = Ad(d) | 0;
          if (!d) {
            u = 1;
            return u | 0;
          }
          c[r >> 2] = d;
          c[(f + 16) >> 2] = d;
          if (m) {
            c[(f + 20) >> 2] = n;
            c[(f + 24) >> 2] = o;
            break;
          }
          c[(f + 32) >> 2] = n;
          c[(f + 48) >> 2] = o;
          d = (d + o) | 0;
          c[(f + 20) >> 2] = d;
          c[(f + 36) >> 2] = k;
          c[(f + 52) >> 2] = i;
          c[(f + 24) >> 2] = d + i;
          c[(f + 40) >> 2] = k;
          c[(f + 56) >> 2] = i;
          if ((p | 0) == 12) c[(f + 28) >> 2] = d + g;
          c[(f + 60) >> 2] = j;
          c[(f + 44) >> 2] = h;
        }
      while (0);
      d = Hc(f) | 0;
      if (((d | 0) != 0) | (s ^ 1)) {
        u = d;
        return u | 0;
      }
      if (!(c[(e + 48) >> 2] | 0)) {
        u = 0;
        return u | 0;
      }
      g = ((c[q >> 2] | 0) + -1) | 0;
      d = (f + 16) | 0;
      b = c[d >> 2] | 0;
      if ((c[f >> 2] | 0) >>> 0 < 11) {
        u = (f + 20) | 0;
        t = c[u >> 2] | 0;
        c[d >> 2] = b + (O(t, g) | 0);
        c[u >> 2] = 0 - t;
        u = 0;
        return u | 0;
      }
      t = (f + 32) | 0;
      s = c[t >> 2] | 0;
      c[d >> 2] = b + (O(s, g) | 0);
      c[t >> 2] = 0 - s;
      t = g >> 1;
      d = (f + 36) | 0;
      b = c[d >> 2] | 0;
      s = O(b, t) | 0;
      u = (f + 20) | 0;
      c[u >> 2] = (c[u >> 2] | 0) + s;
      c[d >> 2] = 0 - b;
      d = (f + 40) | 0;
      b = c[d >> 2] | 0;
      t = O(b, t) | 0;
      u = (f + 24) | 0;
      c[u >> 2] = (c[u >> 2] | 0) + t;
      c[d >> 2] = 0 - b;
      d = (f + 28) | 0;
      b = c[d >> 2] | 0;
      if (!b) {
        u = 0;
        return u | 0;
      }
      u = (f + 44) | 0;
      t = c[u >> 2] | 0;
      c[d >> 2] = b + (O(t, g) | 0);
      c[u >> 2] = 0 - t;
      u = 0;
      return u | 0;
    }
    function Hc(a) {
      a = a | 0;
      var b = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0;
      f = c[a >> 2] | 0;
      i = c[(a + 4) >> 2] | 0;
      e = c[(a + 8) >> 2] | 0;
      if (f >>> 0 >= 13) {
        k = 2;
        return k | 0;
      }
      k = (e + -1) | 0;
      g = (((k | 0) < 0) << 31) >> 31;
      b = (c[(a + 16) >> 2] | 0) != 0;
      do
        if (f >>> 0 < 11) {
          h = c[(a + 20) >> 2] | 0;
          h = (h | 0) > -1 ? h : (0 - h) | 0;
          k = ue(h | 0, ((((h | 0) < 0) << 31) >> 31) | 0, k | 0, g | 0) | 0;
          i = O(d[(4937 + f) >> 0] | 0, i) | 0;
          k = le(k | 0, z | 0, i | 0, ((((i | 0) < 0) << 31) >> 31) | 0) | 0;
          j = z;
          if (!(b & (((h | 0) >= (i | 0)) & ((j >>> 0 < 0) | ((j | 0) == 0 ? k >>> 0 <= (c[(a + 24) >> 2] | 0) >>> 0 : 0))))) {
            k = 2;
            return k | 0;
          }
        } else {
          r = (((i + 1) | 0) / 2) | 0;
          q = c[(a + 32) >> 2] | 0;
          q = (q | 0) > -1 ? q : (0 - q) | 0;
          s = c[(a + 36) >> 2] | 0;
          s = (s | 0) > -1 ? s : (0 - s) | 0;
          t = c[(a + 40) >> 2] | 0;
          t = (t | 0) > -1 ? t : (0 - t) | 0;
          h = c[(a + 44) >> 2] | 0;
          h = (h | 0) > -1 ? h : (0 - h) | 0;
          o = ue(q | 0, ((((q | 0) < 0) << 31) >> 31) | 0, k | 0, g | 0) | 0;
          j = (((i | 0) < 0) << 31) >> 31;
          o = le(o | 0, z | 0, i | 0, j | 0) | 0;
          p = z;
          u = (((((e + 1) | 0) / 2) | 0) + -1) | 0;
          l = (((u | 0) < 0) << 31) >> 31;
          m = ue(s | 0, ((((s | 0) < 0) << 31) >> 31) | 0, u | 0, l | 0) | 0;
          e = (((r | 0) < 0) << 31) >> 31;
          m = le(m | 0, z | 0, r | 0, e | 0) | 0;
          n = z;
          l = ue(t | 0, ((((t | 0) < 0) << 31) >> 31) | 0, u | 0, l | 0) | 0;
          e = le(l | 0, z | 0, r | 0, e | 0) | 0;
          l = z;
          b =
            ((c[(a + 24) >> 2] | 0) != 0) &
            (((c[(a + 20) >> 2] | 0) != 0) &
              (b &
                (((t | 0) >= (r | 0)) &
                  (((s | 0) >= (r | 0)) &
                    (((q | 0) >= (i | 0)) &
                      (((p >>> 0 < 0) | ((p | 0) == 0 ? o >>> 0 <= (c[(a + 48) >> 2] | 0) >>> 0 : 0)) &
                        ((n >>> 0 < 0) | ((n | 0) == 0 ? m >>> 0 <= (c[(a + 52) >> 2] | 0) >>> 0 : 0)) &
                        ((l >>> 0 < 0) | ((l | 0) == 0 ? e >>> 0 <= (c[(a + 56) >> 2] | 0) >>> 0 : 0))))))));
          if ((f | 0) == 12) {
            u = ue(h | 0, ((((h | 0) < 0) << 31) >> 31) | 0, k | 0, g | 0) | 0;
            u = le(u | 0, z | 0, i | 0, j | 0) | 0;
            t = z;
            if (
              ((c[(a + 28) >> 2] | 0) != 0) &
              (((h | 0) >= (i | 0)) & b & ((t >>> 0 < 0) | ((t | 0) == 0 ? u >>> 0 <= (c[(a + 60) >> 2] | 0) >>> 0 : 0)))
            )
              break;
            else b = 2;
            return b | 0;
          } else {
            if (b) break;
            else b = 2;
            return b | 0;
          }
        }
      while (0);
      u = 0;
      return u | 0;
    }
    function Ic(f, g) {
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        _ = 0,
        $ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0,
        na = 0,
        oa = 0,
        pa = 0,
        qa = 0,
        ra = 0,
        sa = 0,
        ta = 0,
        ua = 0,
        va = 0,
        wa = 0,
        xa = 0,
        ya = 0,
        za = 0,
        Aa = 0,
        Ba = 0,
        Ca = 0,
        Da = 0,
        Ea = 0,
        Fa = 0,
        Ga = 0,
        Ha = 0,
        Ia = 0,
        Ja = 0,
        Ka = 0,
        La = 0,
        Ma = 0,
        Na = 0,
        Oa = 0,
        Pa = 0,
        Qa = 0,
        Sa = 0,
        Ta = 0,
        Ua = 0,
        Va = 0,
        Wa = 0,
        Xa = 0,
        Ya = 0,
        Za = 0,
        _a = 0,
        $a = 0,
        ab = 0,
        bb = 0,
        cb = 0,
        db = 0,
        eb = 0,
        fb = 0,
        gb = 0,
        hb = 0,
        ib = 0,
        jb = 0,
        kb = 0,
        lb = 0,
        mb = 0,
        nb = 0,
        ob = 0,
        pb = 0,
        qb = 0,
        rb = 0,
        sb = 0,
        tb = 0,
        ub = 0,
        vb = 0,
        wb = 0,
        xb = 0,
        yb = 0,
        zb = 0,
        Ab = 0,
        Bb = 0,
        Cb = 0,
        Db = 0,
        Eb = 0,
        Fb = 0,
        Gb = 0,
        Hb = 0;
      Db = c[(g + 4) >> 2] | 0;
      h = c[g >> 2] | 0;
      i = c[(f + 2264) >> 2] | 0;
      Gb = (i + 40) | 0;
      Hb = (i + 584) | 0;
      a[(i + 39) >> 0] = -127;
      a[(i + 71) >> 0] = -127;
      a[(i + 103) >> 0] = -127;
      a[(i + 135) >> 0] = -127;
      a[(i + 167) >> 0] = -127;
      a[(i + 199) >> 0] = -127;
      a[(i + 231) >> 0] = -127;
      a[(i + 263) >> 0] = -127;
      a[(i + 295) >> 0] = -127;
      a[(i + 327) >> 0] = -127;
      a[(i + 359) >> 0] = -127;
      a[(i + 391) >> 0] = -127;
      a[(i + 423) >> 0] = -127;
      a[(i + 455) >> 0] = -127;
      a[(i + 487) >> 0] = -127;
      a[(i + 519) >> 0] = -127;
      Cb = (i + 600) | 0;
      a[(i + 583) >> 0] = -127;
      a[(i + 599) >> 0] = -127;
      a[(i + 615) >> 0] = -127;
      a[(i + 631) >> 0] = -127;
      a[(i + 647) >> 0] = -127;
      a[(i + 663) >> 0] = -127;
      a[(i + 679) >> 0] = -127;
      a[(i + 695) >> 0] = -127;
      a[(i + 711) >> 0] = -127;
      a[(i + 727) >> 0] = -127;
      a[(i + 743) >> 0] = -127;
      a[(i + 759) >> 0] = -127;
      a[(i + 775) >> 0] = -127;
      a[(i + 791) >> 0] = -127;
      a[(i + 807) >> 0] = -127;
      a[(i + 823) >> 0] = -127;
      Eb = (Db | 0) > 0;
      if (Eb) {
        a[(i + 567) >> 0] = -127;
        a[(i + 551) >> 0] = -127;
        a[(i + 7) >> 0] = -127;
      } else {
        k = (i + 7) | 0;
        l = (k + 21) | 0;
        do {
          a[k >> 0] = 127;
          k = (k + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (i + 551) | 0;
        l = (k + 9) | 0;
        do {
          a[k >> 0] = 127;
          k = (k + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (i + 567) | 0;
        l = (k + 9) | 0;
        do {
          a[k >> 0] = 127;
          k = (k + 1) | 0;
        } while ((k | 0) < (l | 0));
      }
      Fb = (f + 288) | 0;
      if ((c[Fb >> 2] | 0) <= 0) return;
      pb = (g + 16) | 0;
      qb = (f + 2252) | 0;
      rb = (i + 8) | 0;
      sb = (i + 552) | 0;
      tb = (i + 568) | 0;
      vb = (Db | 0) == 0;
      ub = vb ? 6 : 5;
      vb = vb ? 4 : 0;
      wb = (f + 292) | 0;
      xb = (i + 520) | 0;
      yb = (i + 808) | 0;
      zb = (i + 824) | 0;
      Ab = h << 4;
      Bb = (f + 2280) | 0;
      lb = h << 3;
      mb = (f + 2284) | 0;
      nb = (f + 2268) | 0;
      ob = (f + 2272) | 0;
      Ia = (f + 2276) | 0;
      Ja = (i + 24) | 0;
      Ka = (i + 408) | 0;
      La = (i + 280) | 0;
      Ma = (i + 152) | 0;
      Na = (i + 4) | 0;
      Oa = (i + 20) | 0;
      Pa = (i + 36) | 0;
      Qa = (i + 52) | 0;
      Sa = (i + 68) | 0;
      Ta = (i + 84) | 0;
      Ua = (i + 100) | 0;
      Va = (i + 116) | 0;
      Wa = (i + 132) | 0;
      Xa = (i + 148) | 0;
      Ya = (i + 164) | 0;
      Za = (i + 180) | 0;
      _a = (i + 196) | 0;
      $a = (i + 212) | 0;
      ab = (i + 228) | 0;
      bb = (i + 244) | 0;
      cb = (i + 260) | 0;
      db = (i + 276) | 0;
      eb = (i + 292) | 0;
      fb = (i + 308) | 0;
      gb = (i + 324) | 0;
      hb = (i + 340) | 0;
      ib = (i + 356) | 0;
      jb = (i + 372) | 0;
      kb = (i + 388) | 0;
      r = (i + 404) | 0;
      s = (i + 420) | 0;
      t = (i + 436) | 0;
      u = (i + 452) | 0;
      v = (i + 468) | 0;
      w = (i + 484) | 0;
      x = (i + 500) | 0;
      y = (i + 516) | 0;
      z = (i + 532) | 0;
      A = (i + 548) | 0;
      B = (i + 556) | 0;
      C = (i + 564) | 0;
      D = (i + 572) | 0;
      E = (i + 580) | 0;
      F = (i + 588) | 0;
      G = (i + 596) | 0;
      H = (i + 604) | 0;
      I = (i + 612) | 0;
      J = (i + 620) | 0;
      K = (i + 628) | 0;
      L = (i + 636) | 0;
      M = (i + 644) | 0;
      N = (i + 652) | 0;
      P = (i + 660) | 0;
      Q = (i + 668) | 0;
      R = (i + 676) | 0;
      S = (i + 684) | 0;
      T = (i + 692) | 0;
      U = (i + 700) | 0;
      V = (i + 708) | 0;
      W = (i + 716) | 0;
      X = (i + 724) | 0;
      Y = (i + 732) | 0;
      Z = (i + 740) | 0;
      _ = (i + 748) | 0;
      $ = (i + 756) | 0;
      aa = (i + 764) | 0;
      ba = (i + 772) | 0;
      ca = (i + 780) | 0;
      da = (i + 788) | 0;
      ea = (i + 796) | 0;
      fa = (i + 804) | 0;
      ga = (i + 812) | 0;
      ha = (i + 820) | 0;
      ia = (i + 828) | 0;
      ja = (i + 72) | 0;
      ka = (i + 104) | 0;
      la = (i + 136) | 0;
      ma = (i + 168) | 0;
      na = (i + 200) | 0;
      oa = (i + 232) | 0;
      pa = (i + 264) | 0;
      qa = (i + 296) | 0;
      ra = (i + 328) | 0;
      sa = (i + 360) | 0;
      ta = (i + 392) | 0;
      ua = (i + 424) | 0;
      va = (i + 456) | 0;
      wa = (i + 488) | 0;
      xa = (i + 616) | 0;
      ya = (i + 632) | 0;
      za = (i + 648) | 0;
      Aa = (i + 664) | 0;
      Ba = (i + 680) | 0;
      Ca = (i + 696) | 0;
      Da = (i + 712) | 0;
      Ea = (i + 728) | 0;
      Fa = (i + 744) | 0;
      Ga = (i + 760) | 0;
      Ha = (i + 776) | 0;
      q = (i + 792) | 0;
      p = 0;
      do {
        m = c[pb >> 2] | 0;
        if ((p | 0) > 0) {
          o = d[Oa >> 0] | (d[(Oa + 1) >> 0] << 8) | (d[(Oa + 2) >> 0] << 16) | (d[(Oa + 3) >> 0] << 24);
          a[Na >> 0] = o;
          a[(Na + 1) >> 0] = o >> 8;
          a[(Na + 2) >> 0] = o >> 16;
          a[(Na + 3) >> 0] = o >> 24;
          o = d[Qa >> 0] | (d[(Qa + 1) >> 0] << 8) | (d[(Qa + 2) >> 0] << 16) | (d[(Qa + 3) >> 0] << 24);
          a[Pa >> 0] = o;
          a[(Pa + 1) >> 0] = o >> 8;
          a[(Pa + 2) >> 0] = o >> 16;
          a[(Pa + 3) >> 0] = o >> 24;
          o = d[Ta >> 0] | (d[(Ta + 1) >> 0] << 8) | (d[(Ta + 2) >> 0] << 16) | (d[(Ta + 3) >> 0] << 24);
          a[Sa >> 0] = o;
          a[(Sa + 1) >> 0] = o >> 8;
          a[(Sa + 2) >> 0] = o >> 16;
          a[(Sa + 3) >> 0] = o >> 24;
          o = d[Va >> 0] | (d[(Va + 1) >> 0] << 8) | (d[(Va + 2) >> 0] << 16) | (d[(Va + 3) >> 0] << 24);
          a[Ua >> 0] = o;
          a[(Ua + 1) >> 0] = o >> 8;
          a[(Ua + 2) >> 0] = o >> 16;
          a[(Ua + 3) >> 0] = o >> 24;
          o = d[Xa >> 0] | (d[(Xa + 1) >> 0] << 8) | (d[(Xa + 2) >> 0] << 16) | (d[(Xa + 3) >> 0] << 24);
          a[Wa >> 0] = o;
          a[(Wa + 1) >> 0] = o >> 8;
          a[(Wa + 2) >> 0] = o >> 16;
          a[(Wa + 3) >> 0] = o >> 24;
          o = d[Za >> 0] | (d[(Za + 1) >> 0] << 8) | (d[(Za + 2) >> 0] << 16) | (d[(Za + 3) >> 0] << 24);
          a[Ya >> 0] = o;
          a[(Ya + 1) >> 0] = o >> 8;
          a[(Ya + 2) >> 0] = o >> 16;
          a[(Ya + 3) >> 0] = o >> 24;
          o = d[$a >> 0] | (d[($a + 1) >> 0] << 8) | (d[($a + 2) >> 0] << 16) | (d[($a + 3) >> 0] << 24);
          a[_a >> 0] = o;
          a[(_a + 1) >> 0] = o >> 8;
          a[(_a + 2) >> 0] = o >> 16;
          a[(_a + 3) >> 0] = o >> 24;
          o = d[bb >> 0] | (d[(bb + 1) >> 0] << 8) | (d[(bb + 2) >> 0] << 16) | (d[(bb + 3) >> 0] << 24);
          a[ab >> 0] = o;
          a[(ab + 1) >> 0] = o >> 8;
          a[(ab + 2) >> 0] = o >> 16;
          a[(ab + 3) >> 0] = o >> 24;
          o = d[db >> 0] | (d[(db + 1) >> 0] << 8) | (d[(db + 2) >> 0] << 16) | (d[(db + 3) >> 0] << 24);
          a[cb >> 0] = o;
          a[(cb + 1) >> 0] = o >> 8;
          a[(cb + 2) >> 0] = o >> 16;
          a[(cb + 3) >> 0] = o >> 24;
          o = d[fb >> 0] | (d[(fb + 1) >> 0] << 8) | (d[(fb + 2) >> 0] << 16) | (d[(fb + 3) >> 0] << 24);
          a[eb >> 0] = o;
          a[(eb + 1) >> 0] = o >> 8;
          a[(eb + 2) >> 0] = o >> 16;
          a[(eb + 3) >> 0] = o >> 24;
          o = d[hb >> 0] | (d[(hb + 1) >> 0] << 8) | (d[(hb + 2) >> 0] << 16) | (d[(hb + 3) >> 0] << 24);
          a[gb >> 0] = o;
          a[(gb + 1) >> 0] = o >> 8;
          a[(gb + 2) >> 0] = o >> 16;
          a[(gb + 3) >> 0] = o >> 24;
          o = d[jb >> 0] | (d[(jb + 1) >> 0] << 8) | (d[(jb + 2) >> 0] << 16) | (d[(jb + 3) >> 0] << 24);
          a[ib >> 0] = o;
          a[(ib + 1) >> 0] = o >> 8;
          a[(ib + 2) >> 0] = o >> 16;
          a[(ib + 3) >> 0] = o >> 24;
          o = d[r >> 0] | (d[(r + 1) >> 0] << 8) | (d[(r + 2) >> 0] << 16) | (d[(r + 3) >> 0] << 24);
          a[kb >> 0] = o;
          a[(kb + 1) >> 0] = o >> 8;
          a[(kb + 2) >> 0] = o >> 16;
          a[(kb + 3) >> 0] = o >> 24;
          o = d[t >> 0] | (d[(t + 1) >> 0] << 8) | (d[(t + 2) >> 0] << 16) | (d[(t + 3) >> 0] << 24);
          a[s >> 0] = o;
          a[(s + 1) >> 0] = o >> 8;
          a[(s + 2) >> 0] = o >> 16;
          a[(s + 3) >> 0] = o >> 24;
          o = d[v >> 0] | (d[(v + 1) >> 0] << 8) | (d[(v + 2) >> 0] << 16) | (d[(v + 3) >> 0] << 24);
          a[u >> 0] = o;
          a[(u + 1) >> 0] = o >> 8;
          a[(u + 2) >> 0] = o >> 16;
          a[(u + 3) >> 0] = o >> 24;
          o = d[x >> 0] | (d[(x + 1) >> 0] << 8) | (d[(x + 2) >> 0] << 16) | (d[(x + 3) >> 0] << 24);
          a[w >> 0] = o;
          a[(w + 1) >> 0] = o >> 8;
          a[(w + 2) >> 0] = o >> 16;
          a[(w + 3) >> 0] = o >> 24;
          o = d[z >> 0] | (d[(z + 1) >> 0] << 8) | (d[(z + 2) >> 0] << 16) | (d[(z + 3) >> 0] << 24);
          a[y >> 0] = o;
          a[(y + 1) >> 0] = o >> 8;
          a[(y + 2) >> 0] = o >> 16;
          a[(y + 3) >> 0] = o >> 24;
          o = d[B >> 0] | (d[(B + 1) >> 0] << 8) | (d[(B + 2) >> 0] << 16) | (d[(B + 3) >> 0] << 24);
          a[A >> 0] = o;
          a[(A + 1) >> 0] = o >> 8;
          a[(A + 2) >> 0] = o >> 16;
          a[(A + 3) >> 0] = o >> 24;
          o = d[D >> 0] | (d[(D + 1) >> 0] << 8) | (d[(D + 2) >> 0] << 16) | (d[(D + 3) >> 0] << 24);
          a[C >> 0] = o;
          a[(C + 1) >> 0] = o >> 8;
          a[(C + 2) >> 0] = o >> 16;
          a[(C + 3) >> 0] = o >> 24;
          o = d[F >> 0] | (d[(F + 1) >> 0] << 8) | (d[(F + 2) >> 0] << 16) | (d[(F + 3) >> 0] << 24);
          a[E >> 0] = o;
          a[(E + 1) >> 0] = o >> 8;
          a[(E + 2) >> 0] = o >> 16;
          a[(E + 3) >> 0] = o >> 24;
          o = d[H >> 0] | (d[(H + 1) >> 0] << 8) | (d[(H + 2) >> 0] << 16) | (d[(H + 3) >> 0] << 24);
          a[G >> 0] = o;
          a[(G + 1) >> 0] = o >> 8;
          a[(G + 2) >> 0] = o >> 16;
          a[(G + 3) >> 0] = o >> 24;
          o = d[J >> 0] | (d[(J + 1) >> 0] << 8) | (d[(J + 2) >> 0] << 16) | (d[(J + 3) >> 0] << 24);
          a[I >> 0] = o;
          a[(I + 1) >> 0] = o >> 8;
          a[(I + 2) >> 0] = o >> 16;
          a[(I + 3) >> 0] = o >> 24;
          o = d[L >> 0] | (d[(L + 1) >> 0] << 8) | (d[(L + 2) >> 0] << 16) | (d[(L + 3) >> 0] << 24);
          a[K >> 0] = o;
          a[(K + 1) >> 0] = o >> 8;
          a[(K + 2) >> 0] = o >> 16;
          a[(K + 3) >> 0] = o >> 24;
          o = d[N >> 0] | (d[(N + 1) >> 0] << 8) | (d[(N + 2) >> 0] << 16) | (d[(N + 3) >> 0] << 24);
          a[M >> 0] = o;
          a[(M + 1) >> 0] = o >> 8;
          a[(M + 2) >> 0] = o >> 16;
          a[(M + 3) >> 0] = o >> 24;
          o = d[Q >> 0] | (d[(Q + 1) >> 0] << 8) | (d[(Q + 2) >> 0] << 16) | (d[(Q + 3) >> 0] << 24);
          a[P >> 0] = o;
          a[(P + 1) >> 0] = o >> 8;
          a[(P + 2) >> 0] = o >> 16;
          a[(P + 3) >> 0] = o >> 24;
          o = d[S >> 0] | (d[(S + 1) >> 0] << 8) | (d[(S + 2) >> 0] << 16) | (d[(S + 3) >> 0] << 24);
          a[R >> 0] = o;
          a[(R + 1) >> 0] = o >> 8;
          a[(R + 2) >> 0] = o >> 16;
          a[(R + 3) >> 0] = o >> 24;
          o = d[U >> 0] | (d[(U + 1) >> 0] << 8) | (d[(U + 2) >> 0] << 16) | (d[(U + 3) >> 0] << 24);
          a[T >> 0] = o;
          a[(T + 1) >> 0] = o >> 8;
          a[(T + 2) >> 0] = o >> 16;
          a[(T + 3) >> 0] = o >> 24;
          o = d[W >> 0] | (d[(W + 1) >> 0] << 8) | (d[(W + 2) >> 0] << 16) | (d[(W + 3) >> 0] << 24);
          a[V >> 0] = o;
          a[(V + 1) >> 0] = o >> 8;
          a[(V + 2) >> 0] = o >> 16;
          a[(V + 3) >> 0] = o >> 24;
          o = d[Y >> 0] | (d[(Y + 1) >> 0] << 8) | (d[(Y + 2) >> 0] << 16) | (d[(Y + 3) >> 0] << 24);
          a[X >> 0] = o;
          a[(X + 1) >> 0] = o >> 8;
          a[(X + 2) >> 0] = o >> 16;
          a[(X + 3) >> 0] = o >> 24;
          o = d[_ >> 0] | (d[(_ + 1) >> 0] << 8) | (d[(_ + 2) >> 0] << 16) | (d[(_ + 3) >> 0] << 24);
          a[Z >> 0] = o;
          a[(Z + 1) >> 0] = o >> 8;
          a[(Z + 2) >> 0] = o >> 16;
          a[(Z + 3) >> 0] = o >> 24;
          o = d[aa >> 0] | (d[(aa + 1) >> 0] << 8) | (d[(aa + 2) >> 0] << 16) | (d[(aa + 3) >> 0] << 24);
          a[$ >> 0] = o;
          a[($ + 1) >> 0] = o >> 8;
          a[($ + 2) >> 0] = o >> 16;
          a[($ + 3) >> 0] = o >> 24;
          o = d[ca >> 0] | (d[(ca + 1) >> 0] << 8) | (d[(ca + 2) >> 0] << 16) | (d[(ca + 3) >> 0] << 24);
          a[ba >> 0] = o;
          a[(ba + 1) >> 0] = o >> 8;
          a[(ba + 2) >> 0] = o >> 16;
          a[(ba + 3) >> 0] = o >> 24;
          o = d[ea >> 0] | (d[(ea + 1) >> 0] << 8) | (d[(ea + 2) >> 0] << 16) | (d[(ea + 3) >> 0] << 24);
          a[da >> 0] = o;
          a[(da + 1) >> 0] = o >> 8;
          a[(da + 2) >> 0] = o >> 16;
          a[(da + 3) >> 0] = o >> 24;
          o = d[ga >> 0] | (d[(ga + 1) >> 0] << 8) | (d[(ga + 2) >> 0] << 16) | (d[(ga + 3) >> 0] << 24);
          a[fa >> 0] = o;
          a[(fa + 1) >> 0] = o >> 8;
          a[(fa + 2) >> 0] = o >> 16;
          a[(fa + 3) >> 0] = o >> 24;
          o = d[ia >> 0] | (d[(ia + 1) >> 0] << 8) | (d[(ia + 2) >> 0] << 16) | (d[(ia + 3) >> 0] << 24);
          a[ha >> 0] = o;
          a[(ha + 1) >> 0] = o >> 8;
          a[(ha + 2) >> 0] = o >> 16;
          a[(ha + 3) >> 0] = o >> 24;
        }
        n = c[qb >> 2] | 0;
        o = (n + (p << 5)) | 0;
        h = c[(m + ((p * 800) | 0) + 788) >> 2] | 0;
        if (Eb) {
          k = rb;
          j = o;
          l = (k + 16) | 0;
          do {
            a[k >> 0] = a[j >> 0] | 0;
            k = (k + 1) | 0;
            j = (j + 1) | 0;
          } while ((k | 0) < (l | 0));
          i = (n + (p << 5) + 16) | 0;
          j = i;
          j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
          i = (i + 4) | 0;
          i = d[i >> 0] | (d[(i + 1) >> 0] << 8) | (d[(i + 2) >> 0] << 16) | (d[(i + 3) >> 0] << 24);
          k = sb;
          l = k;
          a[l >> 0] = j;
          a[(l + 1) >> 0] = j >> 8;
          a[(l + 2) >> 0] = j >> 16;
          a[(l + 3) >> 0] = j >> 24;
          k = (k + 4) | 0;
          a[k >> 0] = i;
          a[(k + 1) >> 0] = i >> 8;
          a[(k + 2) >> 0] = i >> 16;
          a[(k + 3) >> 0] = i >> 24;
          k = (n + (p << 5) + 24) | 0;
          i = k;
          i = d[i >> 0] | (d[(i + 1) >> 0] << 8) | (d[(i + 2) >> 0] << 16) | (d[(i + 3) >> 0] << 24);
          k = (k + 4) | 0;
          k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
          l = tb;
          j = l;
          a[j >> 0] = i;
          a[(j + 1) >> 0] = i >> 8;
          a[(j + 2) >> 0] = i >> 16;
          a[(j + 3) >> 0] = i >> 24;
          l = (l + 4) | 0;
          a[l >> 0] = k;
          a[(l + 1) >> 0] = k >> 8;
          a[(l + 2) >> 0] = k >> 16;
          a[(l + 3) >> 0] = k >> 24;
        }
        a: do
          if (!(a[(m + ((p * 800) | 0) + 768) >> 0] | 0)) {
            l = a[(m + ((p * 800) | 0) + 769) >> 0] | 0;
            Ra[c[(11076 + (((l << 24) >> 24 == 0 ? ((p | 0) == 0 ? ub : vb) : l & 255) << 2)) >> 2] & 31](Gb);
            if (h | 0) {
              g = h;
              h = 0;
              while (1) {
                f = (m + ((p * 800) | 0) + ((h << 4) << 1)) | 0;
                i = (Gb + (e[(830 + (h << 1)) >> 1] | 0)) | 0;
                switch ((g >>> 30) & 3) {
                  case 3: {
                    md(f, i);
                    break;
                  }
                  case 2: {
                    Lc(b[f >> 1] | 0, b[(f + 2) >> 1] | 0, b[(f + 8) >> 1] | 0, i);
                    break;
                  }
                  case 1: {
                    Kc(b[f >> 1] | 0, i);
                    break;
                  }
                  default: {
                  }
                }
                h = (h + 1) | 0;
                if ((h | 0) == 16) break a;
                else g = g << 2;
              }
            }
          } else {
            do
              if (Eb)
                if ((p | 0) < (((c[Fb >> 2] | 0) + -1) | 0)) {
                  g = (o + 32) | 0;
                  g = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  a[Ja >> 0] = g;
                  a[(Ja + 1) >> 0] = g >> 8;
                  a[(Ja + 2) >> 0] = g >> 16;
                  a[(Ja + 3) >> 0] = g >> 24;
                  break;
                } else {
                  g = a[(n + (p << 5) + 15) >> 0] | 0;
                  me(Ja | 0, g | 0, 4) | 0;
                  g = g & 255;
                  g = (g << 8) | g;
                  g = (g << 16) | g;
                  break;
                }
              else g = c[Ja >> 2] | 0;
            while (0);
            c[Ka >> 2] = g;
            c[La >> 2] = g;
            c[Ma >> 2] = g;
            g = h;
            h = 0;
            while (1) {
              f = (Gb + (e[(830 + (h << 1)) >> 1] | 0)) | 0;
              Ra[c[(11104 + ((a[(m + ((p * 800) | 0) + 769 + h) >> 0] & 255) << 2)) >> 2] & 31](f);
              i = (m + ((p * 800) | 0) + ((h << 4) << 1)) | 0;
              switch ((g >>> 30) & 3) {
                case 3: {
                  md(i, f);
                  break;
                }
                case 2: {
                  Lc(b[i >> 1] | 0, b[(i + 2) >> 1] | 0, b[(i + 8) >> 1] | 0, f);
                  break;
                }
                case 1: {
                  Kc(b[i >> 1] | 0, f);
                  break;
                }
                default: {
                }
              }
              h = (h + 1) | 0;
              if ((h | 0) == 16) break a;
              else g = g << 2;
            }
          }
        while (0);
        h = c[(m + ((p * 800) | 0) + 792) >> 2] | 0;
        g = a[(m + ((p * 800) | 0) + 785) >> 0] | 0;
        g = (11144 + (((g << 24) >> 24 == 0 ? ((p | 0) == 0 ? ub : vb) : g & 255) << 2)) | 0;
        Ra[c[g >> 2] & 31](Hb);
        Ra[c[g >> 2] & 31](Cb);
        g = (m + ((p * 800) | 0) + 512) | 0;
        do
          if ((h & 255) | 0) {
            if ((h & 170) | 0) {
              md(g, Hb);
              md((m + ((p * 800) | 0) + 544) | 0, F);
              md((m + ((p * 800) | 0) + 576) | 0, Da);
              md((m + ((p * 800) | 0) + 608) | 0, W);
              break;
            }
            g = b[g >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, Hb);
            g = b[(m + ((p * 800) | 0) + 544) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, F);
            g = b[(m + ((p * 800) | 0) + 576) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, Da);
            g = b[(m + ((p * 800) | 0) + 608) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, W);
          }
        while (0);
        g = h >>> 8;
        h = (m + ((p * 800) | 0) + 640) | 0;
        do
          if ((g & 255) | 0) {
            if ((g & 170) | 0) {
              md(h, Cb);
              md((m + ((p * 800) | 0) + 672) | 0, H);
              md((m + ((p * 800) | 0) + 704) | 0, Ea);
              md((m + ((p * 800) | 0) + 736) | 0, Y);
              break;
            }
            g = b[h >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, Cb);
            g = b[(m + ((p * 800) | 0) + 672) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, H);
            g = b[(m + ((p * 800) | 0) + 704) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, Ea);
            g = b[(m + ((p * 800) | 0) + 736) >> 1] | 0;
            if ((g << 16) >> 16) Kc(g, Y);
          }
        while (0);
        if ((Db | 0) < (((c[wb >> 2] | 0) + -1) | 0)) {
          k = o;
          j = xb;
          l = (k + 16) | 0;
          do {
            a[k >> 0] = a[j >> 0] | 0;
            k = (k + 1) | 0;
            j = (j + 1) | 0;
          } while ((k | 0) < (l | 0));
          l = yb;
          k = l;
          k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
          l = (l + 4) | 0;
          l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
          m = (n + (p << 5) + 16) | 0;
          o = m;
          a[o >> 0] = k;
          a[(o + 1) >> 0] = k >> 8;
          a[(o + 2) >> 0] = k >> 16;
          a[(o + 3) >> 0] = k >> 24;
          m = (m + 4) | 0;
          a[m >> 0] = l;
          a[(m + 1) >> 0] = l >> 8;
          a[(m + 2) >> 0] = l >> 16;
          a[(m + 3) >> 0] = l >> 24;
          m = zb;
          l = m;
          l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
          m = (m + 4) | 0;
          m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
          o = (n + (p << 5) + 24) | 0;
          n = o;
          a[n >> 0] = l;
          a[(n + 1) >> 0] = l >> 8;
          a[(n + 2) >> 0] = l >> 16;
          a[(n + 3) >> 0] = l >> 24;
          o = (o + 4) | 0;
          a[o >> 0] = m;
          a[(o + 1) >> 0] = m >> 8;
          a[(o + 2) >> 0] = m >> 16;
          a[(o + 3) >> 0] = m >> 24;
        }
        h = O(Ab, c[Bb >> 2] | 0) | 0;
        g = c[mb >> 2] | 0;
        h = ((c[nb >> 2] | 0) + (p << 4) + h) | 0;
        i = p << 3;
        f = ((c[ob >> 2] | 0) + i) | 0;
        i = ((c[Ia >> 2] | 0) + i) | 0;
        k = h;
        j = Gb;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (c[Bb >> 2] | 0)) | 0;
        j = ja;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (c[Bb >> 2] << 1)) | 0;
        j = ka;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 3) | 0)) | 0;
        j = la;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (c[Bb >> 2] << 2)) | 0;
        j = ma;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 5) | 0)) | 0;
        j = na;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 6) | 0)) | 0;
        j = oa;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 7) | 0)) | 0;
        j = pa;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (c[Bb >> 2] << 3)) | 0;
        j = qa;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 9) | 0)) | 0;
        j = ra;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 10) | 0)) | 0;
        j = sa;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 11) | 0)) | 0;
        j = ta;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 12) | 0)) | 0;
        j = ua;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 13) | 0)) | 0;
        j = va;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 14) | 0)) | 0;
        j = wa;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        k = (h + (((c[Bb >> 2] | 0) * 15) | 0)) | 0;
        j = xb;
        l = (k + 16) | 0;
        do {
          a[k >> 0] = a[j >> 0] | 0;
          k = (k + 1) | 0;
          j = (j + 1) | 0;
        } while ((k | 0) < (l | 0));
        o = O(g, lb) | 0;
        n = (f + o) | 0;
        o = (i + o) | 0;
        j = Hb;
        m = j;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (j + 4) | 0;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = n;
        l = k;
        a[l >> 0] = m;
        a[(l + 1) >> 0] = m >> 8;
        a[(l + 2) >> 0] = m >> 16;
        a[(l + 3) >> 0] = m >> 24;
        k = (k + 4) | 0;
        a[k >> 0] = j;
        a[(k + 1) >> 0] = j >> 8;
        a[(k + 2) >> 0] = j >> 16;
        a[(k + 3) >> 0] = j >> 24;
        k = Cb;
        j = k;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (k + 4) | 0;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = o;
        m = l;
        a[m >> 0] = j;
        a[(m + 1) >> 0] = j >> 8;
        a[(m + 2) >> 0] = j >> 16;
        a[(m + 3) >> 0] = j >> 24;
        l = (l + 4) | 0;
        a[l >> 0] = k;
        a[(l + 1) >> 0] = k >> 8;
        a[(l + 2) >> 0] = k >> 16;
        a[(l + 3) >> 0] = k >> 24;
        l = xa;
        k = l;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (l + 4) | 0;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (n + (c[mb >> 2] | 0)) | 0;
        j = m;
        a[j >> 0] = k;
        a[(j + 1) >> 0] = k >> 8;
        a[(j + 2) >> 0] = k >> 16;
        a[(j + 3) >> 0] = k >> 24;
        m = (m + 4) | 0;
        a[m >> 0] = l;
        a[(m + 1) >> 0] = l >> 8;
        a[(m + 2) >> 0] = l >> 16;
        a[(m + 3) >> 0] = l >> 24;
        m = ya;
        l = m;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (m + 4) | 0;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (o + (c[mb >> 2] | 0)) | 0;
        k = j;
        a[k >> 0] = l;
        a[(k + 1) >> 0] = l >> 8;
        a[(k + 2) >> 0] = l >> 16;
        a[(k + 3) >> 0] = l >> 24;
        j = (j + 4) | 0;
        a[j >> 0] = m;
        a[(j + 1) >> 0] = m >> 8;
        a[(j + 2) >> 0] = m >> 16;
        a[(j + 3) >> 0] = m >> 24;
        j = za;
        m = j;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (j + 4) | 0;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (n + (c[mb >> 2] << 1)) | 0;
        l = k;
        a[l >> 0] = m;
        a[(l + 1) >> 0] = m >> 8;
        a[(l + 2) >> 0] = m >> 16;
        a[(l + 3) >> 0] = m >> 24;
        k = (k + 4) | 0;
        a[k >> 0] = j;
        a[(k + 1) >> 0] = j >> 8;
        a[(k + 2) >> 0] = j >> 16;
        a[(k + 3) >> 0] = j >> 24;
        k = Aa;
        j = k;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (k + 4) | 0;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (o + (c[mb >> 2] << 1)) | 0;
        m = l;
        a[m >> 0] = j;
        a[(m + 1) >> 0] = j >> 8;
        a[(m + 2) >> 0] = j >> 16;
        a[(m + 3) >> 0] = j >> 24;
        l = (l + 4) | 0;
        a[l >> 0] = k;
        a[(l + 1) >> 0] = k >> 8;
        a[(l + 2) >> 0] = k >> 16;
        a[(l + 3) >> 0] = k >> 24;
        l = Ba;
        k = l;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (l + 4) | 0;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (n + (((c[mb >> 2] | 0) * 3) | 0)) | 0;
        j = m;
        a[j >> 0] = k;
        a[(j + 1) >> 0] = k >> 8;
        a[(j + 2) >> 0] = k >> 16;
        a[(j + 3) >> 0] = k >> 24;
        m = (m + 4) | 0;
        a[m >> 0] = l;
        a[(m + 1) >> 0] = l >> 8;
        a[(m + 2) >> 0] = l >> 16;
        a[(m + 3) >> 0] = l >> 24;
        m = Ca;
        l = m;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (m + 4) | 0;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (o + (((c[mb >> 2] | 0) * 3) | 0)) | 0;
        k = j;
        a[k >> 0] = l;
        a[(k + 1) >> 0] = l >> 8;
        a[(k + 2) >> 0] = l >> 16;
        a[(k + 3) >> 0] = l >> 24;
        j = (j + 4) | 0;
        a[j >> 0] = m;
        a[(j + 1) >> 0] = m >> 8;
        a[(j + 2) >> 0] = m >> 16;
        a[(j + 3) >> 0] = m >> 24;
        j = Da;
        m = j;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (j + 4) | 0;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (n + (c[mb >> 2] << 2)) | 0;
        l = k;
        a[l >> 0] = m;
        a[(l + 1) >> 0] = m >> 8;
        a[(l + 2) >> 0] = m >> 16;
        a[(l + 3) >> 0] = m >> 24;
        k = (k + 4) | 0;
        a[k >> 0] = j;
        a[(k + 1) >> 0] = j >> 8;
        a[(k + 2) >> 0] = j >> 16;
        a[(k + 3) >> 0] = j >> 24;
        k = Ea;
        j = k;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (k + 4) | 0;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (o + (c[mb >> 2] << 2)) | 0;
        m = l;
        a[m >> 0] = j;
        a[(m + 1) >> 0] = j >> 8;
        a[(m + 2) >> 0] = j >> 16;
        a[(m + 3) >> 0] = j >> 24;
        l = (l + 4) | 0;
        a[l >> 0] = k;
        a[(l + 1) >> 0] = k >> 8;
        a[(l + 2) >> 0] = k >> 16;
        a[(l + 3) >> 0] = k >> 24;
        l = Fa;
        k = l;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (l + 4) | 0;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (n + (((c[mb >> 2] | 0) * 5) | 0)) | 0;
        j = m;
        a[j >> 0] = k;
        a[(j + 1) >> 0] = k >> 8;
        a[(j + 2) >> 0] = k >> 16;
        a[(j + 3) >> 0] = k >> 24;
        m = (m + 4) | 0;
        a[m >> 0] = l;
        a[(m + 1) >> 0] = l >> 8;
        a[(m + 2) >> 0] = l >> 16;
        a[(m + 3) >> 0] = l >> 24;
        m = Ga;
        l = m;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        m = (m + 4) | 0;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (o + (((c[mb >> 2] | 0) * 5) | 0)) | 0;
        k = j;
        a[k >> 0] = l;
        a[(k + 1) >> 0] = l >> 8;
        a[(k + 2) >> 0] = l >> 16;
        a[(k + 3) >> 0] = l >> 24;
        j = (j + 4) | 0;
        a[j >> 0] = m;
        a[(j + 1) >> 0] = m >> 8;
        a[(j + 2) >> 0] = m >> 16;
        a[(j + 3) >> 0] = m >> 24;
        j = Ha;
        m = j;
        m = d[m >> 0] | (d[(m + 1) >> 0] << 8) | (d[(m + 2) >> 0] << 16) | (d[(m + 3) >> 0] << 24);
        j = (j + 4) | 0;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (n + (((c[mb >> 2] | 0) * 6) | 0)) | 0;
        l = k;
        a[l >> 0] = m;
        a[(l + 1) >> 0] = m >> 8;
        a[(l + 2) >> 0] = m >> 16;
        a[(l + 3) >> 0] = m >> 24;
        k = (k + 4) | 0;
        a[k >> 0] = j;
        a[(k + 1) >> 0] = j >> 8;
        a[(k + 2) >> 0] = j >> 16;
        a[(k + 3) >> 0] = j >> 24;
        k = q;
        j = k;
        j = d[j >> 0] | (d[(j + 1) >> 0] << 8) | (d[(j + 2) >> 0] << 16) | (d[(j + 3) >> 0] << 24);
        k = (k + 4) | 0;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (o + (((c[mb >> 2] | 0) * 6) | 0)) | 0;
        m = l;
        a[m >> 0] = j;
        a[(m + 1) >> 0] = j >> 8;
        a[(m + 2) >> 0] = j >> 16;
        a[(m + 3) >> 0] = j >> 24;
        l = (l + 4) | 0;
        a[l >> 0] = k;
        a[(l + 1) >> 0] = k >> 8;
        a[(l + 2) >> 0] = k >> 16;
        a[(l + 3) >> 0] = k >> 24;
        l = yb;
        k = l;
        k = d[k >> 0] | (d[(k + 1) >> 0] << 8) | (d[(k + 2) >> 0] << 16) | (d[(k + 3) >> 0] << 24);
        l = (l + 4) | 0;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        n = (n + (((c[mb >> 2] | 0) * 7) | 0)) | 0;
        m = n;
        a[m >> 0] = k;
        a[(m + 1) >> 0] = k >> 8;
        a[(m + 2) >> 0] = k >> 16;
        a[(m + 3) >> 0] = k >> 24;
        n = (n + 4) | 0;
        a[n >> 0] = l;
        a[(n + 1) >> 0] = l >> 8;
        a[(n + 2) >> 0] = l >> 16;
        a[(n + 3) >> 0] = l >> 24;
        n = zb;
        l = n;
        l = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
        n = (n + 4) | 0;
        n = d[n >> 0] | (d[(n + 1) >> 0] << 8) | (d[(n + 2) >> 0] << 16) | (d[(n + 3) >> 0] << 24);
        o = (o + (((c[mb >> 2] | 0) * 7) | 0)) | 0;
        m = o;
        a[m >> 0] = l;
        a[(m + 1) >> 0] = l >> 8;
        a[(m + 2) >> 0] = l >> 16;
        a[(m + 3) >> 0] = l >> 24;
        o = (o + 4) | 0;
        a[o >> 0] = n;
        a[(o + 1) >> 0] = n >> 8;
        a[(o + 2) >> 0] = n >> 16;
        a[(o + 3) >> 0] = n >> 24;
        p = (p + 1) | 0;
      } while ((p | 0) < (c[Fb >> 2] | 0));
      return;
    }
    function Jc(f, g) {
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        _ = 0,
        $ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0,
        na = 0,
        oa = 0,
        pa = 0,
        qa = 0;
      pa = l;
      l = (l + 256) | 0;
      $ = pa;
      D = (f + 160) | 0;
      na = c[D >> 2] | 0;
      y = (f + 2308) | 0;
      ea = a[(4962 + (c[y >> 2] | 0)) >> 0] | 0;
      J = ea & 255;
      ba = (f + 2280) | 0;
      G = c[ba >> 2] | 0;
      ca = O(J, G) | 0;
      da = (f + 2284) | 0;
      I = c[da >> 2] | 0;
      ea = O(((ea & 255) >>> 1) & 255, I) | 0;
      G = O(G, na << 4) | 0;
      I = O(I, na << 3) | 0;
      fa = (f + 2268) | 0;
      ga = (0 - ca) | 0;
      ha = ((c[fa >> 2] | 0) + ga + G) | 0;
      ia = (f + 2272) | 0;
      ja = (0 - ea) | 0;
      ka = ((c[ia >> 2] | 0) + ja + I) | 0;
      la = (f + 2276) | 0;
      ma = ((c[la >> 2] | 0) + ja + I) | 0;
      i = (f + 164) | 0;
      F = c[i >> 2] | 0;
      H = (F | 0) == 0;
      oa = (F | 0) >= (((c[(f + 308) >> 2] | 0) + -1) | 0);
      if ((c[(f + 148) >> 2] | 0) == 2) Ic(f, D);
      if (c[(f + 168) >> 2] | 0 ? ((j = c[(f + 296) >> 2] | 0), (A = (f + 304) | 0), (j | 0) < (c[A >> 2] | 0)) : 0) {
        B = (f + 172) | 0;
        x = (c[i >> 2] | 0) > 0;
        do {
          i = c[D >> 2] | 0;
          w = c[ba >> 2] | 0;
          s = c[B >> 2] | 0;
          v = ((c[fa >> 2] | 0) + (O(i << 4, w) | 0) + (j << 4)) | 0;
          r = d[(s + (j << 2) + 1) >> 0] | 0;
          _ = a[(s + (j << 2)) >> 0] | 0;
          u = _ & 255;
          do
            if ((_ << 24) >> 24) {
              p = (j | 0) > 0;
              if ((c[y >> 2] | 0) != 1) {
                q = c[da >> 2] | 0;
                n = O(q, i << 3) | 0;
                m = j << 3;
                k = ((c[ia >> 2] | 0) + n + m) | 0;
                m = ((c[la >> 2] | 0) + n + m) | 0;
                n = d[(s + (j << 2) + 3) >> 0] | 0;
                o = (u + 4) | 0;
                if (p) {
                  ld(v, 1, w, 16, o, r, n);
                  ld(k, 1, q, 8, o, r, n);
                  ld(m, 1, q, 8, o, r, n);
                }
                i = (s + (j << 2) + 2) | 0;
                if (a[i >> 0] | 0) {
                  jd((v + 4) | 0, 1, w, 16, u, r, n);
                  jd((v + 8) | 0, 1, w, 16, u, r, n);
                  jd((v + 12) | 0, 1, w, 16, u, r, n);
                  jd((k + 4) | 0, 1, q, 8, u, r, n);
                  jd((m + 4) | 0, 1, q, 8, u, r, n);
                }
                if (x) {
                  ld(v, w, 1, 16, o, r, n);
                  ld(k, q, 1, 8, o, r, n);
                  ld(m, q, 1, 8, o, r, n);
                }
                if (!(a[i >> 0] | 0)) break;
                _ = w << 2;
                Z = (v + _) | 0;
                jd(Z, w, 1, 16, u, r, n);
                Z = (Z + _) | 0;
                jd(Z, w, 1, 16, u, r, n);
                jd((Z + _) | 0, w, 1, 16, u, r, n);
                _ = q << 2;
                jd((k + _) | 0, q, 1, 8, u, r, n);
                jd((m + _) | 0, q, 1, 8, u, r, n);
                break;
              }
              if (p) {
                k = ((u << 1) + 8) | 1;
                i = 0;
                do {
                  m = (v + (O(i, w) | 0)) | 0;
                  n = (m + -1) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + -2) >> 0] | 0) - (d[(m + 1) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= k >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
              }
              t = (s + (j << 2) + 2) | 0;
              if (a[t >> 0] | 0) {
                r = (u << 1) | 1;
                k = (v + 4) | 0;
                i = 0;
                do {
                  m = (k + (O(i, w) | 0)) | 0;
                  n = (m + -1) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + -2) >> 0] | 0) - (d[(m + 1) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= r >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
                k = (v + 8) | 0;
                i = 0;
                do {
                  m = (k + (O(i, w) | 0)) | 0;
                  n = (m + -1) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + -2) >> 0] | 0) - (d[(m + 1) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= r >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
                k = (v + 12) | 0;
                i = 0;
                do {
                  m = (k + (O(i, w) | 0)) | 0;
                  n = (m + -1) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + -2) >> 0] | 0) - (d[(m + 1) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= r >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
              }
              if (x) {
                k = ((u << 1) + 8) | 1;
                m = O(w, -2) | 0;
                n = (0 - w) | 0;
                i = 0;
                do {
                  o = (v + i) | 0;
                  p = (o + n) | 0;
                  q = d[p >> 0] | 0;
                  r = d[o >> 0] | 0;
                  s = ((d[(o + m) >> 0] | 0) - (d[(o + w) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (q - r)) >> 0] << 2) + (d[(4536 + s) >> 0] | 0)) | 0) >>> 0 <= k >>> 0) {
                    Z = ((a[(2268 + s) >> 0] | 0) + ((((r - q) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[p >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + q)) >> 0] | 0;
                    a[o >> 0] = a[(3769 + (r - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
              }
              if (a[t >> 0] | 0) {
                r = w << 2;
                s = (u << 1) | 1;
                t = O(w, -2) | 0;
                u = (0 - w) | 0;
                k = (v + r) | 0;
                i = 0;
                do {
                  m = (k + i) | 0;
                  n = (m + u) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + t) >> 0] | 0) - (d[(m + w) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= s >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
                k = (k + r) | 0;
                i = 0;
                do {
                  m = (k + i) | 0;
                  n = (m + u) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + t) >> 0] | 0) - (d[(m + w) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= s >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
                k = (k + r) | 0;
                i = 0;
                do {
                  m = (k + i) | 0;
                  n = (m + u) | 0;
                  o = d[n >> 0] | 0;
                  p = d[m >> 0] | 0;
                  q = ((d[(m + t) >> 0] | 0) - (d[(m + w) >> 0] | 0)) | 0;
                  if ((((d[(4536 + (o - p)) >> 0] << 2) + (d[(4536 + q) >> 0] | 0)) | 0) >>> 0 <= s >>> 0) {
                    Z = ((a[(2268 + q) >> 0] | 0) + ((((p - o) | 0) * 3) | 0)) | 0;
                    _ = a[(3401 + ((Z + 4) >> 3)) >> 0] | 0;
                    a[n >> 0] = a[(3769 + ((a[(3401 + ((Z + 3) >> 3)) >> 0] | 0) + o)) >> 0] | 0;
                    a[m >> 0] = a[(3769 + (p - _)) >> 0] | 0;
                  }
                  i = (i + 1) | 0;
                } while ((i | 0) != 16);
              }
            }
          while (0);
          j = (j + 1) | 0;
        } while ((j | 0) < (c[A >> 2] | 0));
      }
      if (c[(f + 540) >> 2] | 0 ? ((C = c[(f + 296) >> 2] | 0), (E = (f + 304) | 0), (h = c[E >> 2] | 0), (C | 0) < (h | 0)) : 0) {
        t = (f + 176) | 0;
        u = (f + 544) | 0;
        v = (f + 548) | 0;
        s = C;
        do {
          r = c[da >> 2] | 0;
          p = ((c[t >> 2] | 0) + ((s * 800) | 0) + 796) | 0;
          i = a[p >> 0] | 0;
          if ((i & 255) > 3) {
            i = i & 255;
            j = c[D >> 2] | 0;
            o = c[ia >> 2] | 0;
            q = c[la >> 2] | 0;
            h = 0;
            k = c[u >> 2] | 0;
            m = c[v >> 2] | 0;
            do {
              Z = (f + 552 + (k << 2)) | 0;
              _ = ((c[Z >> 2] | 0) - (c[(f + 552 + (m << 2)) >> 2] | 0)) | 0;
              c[Z >> 2] = _ & 2147483647;
              Z = ((c[u >> 2] | 0) + 1) | 0;
              k = (Z | 0) == 55 ? 0 : Z;
              c[u >> 2] = k;
              Z = ((c[v >> 2] | 0) + 1) | 0;
              m = (Z | 0) == 55 ? 0 : Z;
              c[v >> 2] = m;
              a[($ + h) >> 0] = ((O((_ << 1) >> 24, i) | 0) >>> 8) + 128;
              h = (h + 1) | 0;
            } while ((h | 0) != 64);
            m = O(j << 3, r) | 0;
            n = s << 3;
            id($, (o + m + n) | 0, r);
            i = d[p >> 0] | 0;
            h = 0;
            j = c[u >> 2] | 0;
            k = c[v >> 2] | 0;
            do {
              Z = (f + 552 + (j << 2)) | 0;
              _ = ((c[Z >> 2] | 0) - (c[(f + 552 + (k << 2)) >> 2] | 0)) | 0;
              c[Z >> 2] = _ & 2147483647;
              Z = ((c[u >> 2] | 0) + 1) | 0;
              j = (Z | 0) == 55 ? 0 : Z;
              c[u >> 2] = j;
              Z = ((c[v >> 2] | 0) + 1) | 0;
              k = (Z | 0) == 55 ? 0 : Z;
              c[v >> 2] = k;
              a[($ + h) >> 0] = ((O((_ << 1) >> 24, i) | 0) >>> 8) + 128;
              h = (h + 1) | 0;
            } while ((h | 0) != 64);
            id($, (q + m + n) | 0, r);
            h = c[E >> 2] | 0;
          }
          s = (s + 1) | 0;
        } while ((s | 0) < (h | 0));
      }
      _ = (g + 44) | 0;
      if (c[_ >> 2] | 0) {
        i = F << 4;
        if (H) {
          c[(g + 20) >> 2] = (c[fa >> 2] | 0) + G;
          c[(g + 24) >> 2] = (c[ia >> 2] | 0) + I;
          j = i;
          h = ((c[la >> 2] | 0) + I) | 0;
        } else {
          c[(g + 20) >> 2] = ha;
          c[(g + 24) >> 2] = ka;
          j = (i - J) | 0;
          h = ma;
        }
        Y = (g + 28) | 0;
        c[Y >> 2] = h;
        X = (i + 16 + (oa ? 0 : (0 - J) | 0)) | 0;
        U = (g + 88) | 0;
        A = c[U >> 2] | 0;
        X = (X | 0) > (A | 0) ? A : X;
        Z = (g + 104) | 0;
        c[Z >> 2] = 0;
        B = (f + 2348) | 0;
        a: do
          if (((c[B >> 2] | 0) != 0) & ((X | 0) > (j | 0))) {
            t = (X - j) | 0;
            W = c[g >> 2] | 0;
            b: do
              if (!(((j | 0) < 0) | ((t | 0) < 1))) {
                T = (f + 2356) | 0;
                c: do
                  if (!(c[T >> 2] | 0)) {
                    V = (f + 2344) | 0;
                    h = c[V >> 2] | 0;
                    d: do
                      if (!h) {
                        h = Ad(144) | 0;
                        if (!h) {
                          c[V >> 2] = 0;
                          aa = 279;
                          break b;
                        }
                        if ((c[(h + -4) >> 2] & 3) | 0) me(h | 0, 0, 144) | 0;
                        c[V >> 2] = h;
                        h = c[g >> 2] | 0;
                        S = c[U >> 2] | 0;
                        h = ue(S | 0, ((((S | 0) < 0) << 31) >> 31) | 0, h | 0, ((((h | 0) < 0) << 31) >> 31) | 0) | 0;
                        S = z;
                        if (
                          !(((h | 0) == 0) & ((S | 0) == 0))
                            ? !(((S >>> 0 < 0) | (((S | 0) == 0) & (h >>> 0 < 2147418113))) & (((h | 0) == (h | 0)) & ((S | 0) == 0)))
                            : 0
                        ) {
                          c[(f + 2360) >> 2] = 0;
                          break;
                        }
                        h = Ad(h) | 0;
                        c[(f + 2360) >> 2] = h;
                        if (h | 0) {
                          c[(f + 2364) >> 2] = h;
                          c[(f + 2368) >> 2] = 0;
                          y = c[V >> 2] | 0;
                          k = c[B >> 2] | 0;
                          i = c[(f + 2352) >> 2] | 0;
                          v = (k + 1) | 0;
                          s = (i + -1) | 0;
                          r = (y + 24) | 0;
                          if (c[33] | 0) {
                            c[2797] = 0;
                            c[2798] = 15;
                            c[2799] = 16;
                            c[2800] = 17;
                            c[2793] = 0;
                            c[2794] = 15;
                            c[2795] = 16;
                            c[2796] = 17;
                            c[33] = 0;
                          }
                          c[(y + 136) >> 2] = h;
                          n = c[g >> 2] | 0;
                          c[y >> 2] = n;
                          o = (g + 4) | 0;
                          p = c[o >> 2] | 0;
                          q = (y + 4) | 0;
                          c[q >> 2] = p;
                          if (i >>> 0 >= 2) {
                            m = a[k >> 0] & 3;
                            c[(y + 8) >> 2] = m & 255;
                            c[(y + 12) >> 2] = ((d[k >> 0] | 0) >>> 2) & 3;
                            h = ((d[k >> 0] | 0) >>> 4) & 3;
                            c[(y + 16) >> 2] = h;
                            if ((m & 255) > 1) break;
                            if ((h >>> 0 > 1) | ((d[k >> 0] | 0) > 63)) break;
                            h = r;
                            i = (h + 108) | 0;
                            do {
                              c[h >> 2] = 0;
                              h = (h + 4) | 0;
                            } while ((h | 0) < (i | 0));
                            c[(y + 68) >> 2] = 6;
                            c[(y + 72) >> 2] = 7;
                            c[(y + 76) >> 2] = 1;
                            h = (y + 64) | 0;
                            c[h >> 2] = y;
                            c[r >> 2] = c[g >> 2];
                            i = (y + 28) | 0;
                            c[i >> 2] = c[o >> 2];
                            c[(y + 96) >> 2] = c[(g + 72) >> 2];
                            c[(y + 100) >> 2] = c[(g + 76) >> 2];
                            c[(y + 104) >> 2] = c[(g + 80) >> 2];
                            c[(y + 108) >> 2] = c[(g + 84) >> 2];
                            c[(y + 112) >> 2] = c[U >> 2];
                            e: do
                              if (!((m << 24) >> 24)) {
                                if (s >>> 0 < (O(p, n) | 0) >>> 0) break d;
                              } else {
                                w = Ad(272) | 0;
                                if (!w) break d;
                                if ((c[(w + -4) >> 2] & 3) | 0) me(w | 0, 0, 272) | 0;
                                c[w >> 2] = 0;
                                c[(w + 4) >> 2] = 2;
                                jb();
                                x = (y + 20) | 0;
                                c[x >> 2] = w;
                                p = c[y >> 2] | 0;
                                u = (w + 100) | 0;
                                c[u >> 2] = p;
                                o = c[q >> 2] | 0;
                                q = (w + 104) | 0;
                                c[q >> 2] = o;
                                c[(w + 8) >> 2] = r;
                                c[h >> 2] = y;
                                c[r >> 2] = p;
                                c[i >> 2] = o;
                                c[w >> 2] = 0;
                                n = (w + 24) | 0;
                                c[(w + 36) >> 2] = s;
                                m = n;
                                c[m >> 2] = 0;
                                c[(m + 4) >> 2] = 0;
                                c[(w + 44) >> 2] = 0;
                                c[(w + 48) >> 2] = 0;
                                m = s >>> 0 < 8 ? s : 8;
                                if (!m) {
                                  i = 0;
                                  h = 0;
                                } else {
                                  k = 0;
                                  i = 0;
                                  h = 0;
                                  do {
                                    S = oe(d[(v + k) >> 0] | 0, 0, (k << 3) | 0) | 0;
                                    i = S | i;
                                    h = z | h;
                                    k = (k + 1) | 0;
                                  } while (k >>> 0 < m >>> 0);
                                }
                                S = n;
                                c[S >> 2] = i;
                                c[(S + 4) >> 2] = h;
                                c[(w + 40) >> 2] = m;
                                c[(w + 32) >> 2] = v;
                                f: do
                                  if (kb(p, o, 1, w, 0) | 0) {
                                    g: do
                                      if ((c[(w + 176) >> 2] | 0) == 1) {
                                        if ((c[(w + 180) >> 2] | 0) != 3) break;
                                        if ((c[(w + 120) >> 2] | 0) > 0) break;
                                        i = c[(w + 164) >> 2] | 0;
                                        if ((i | 0) > 0) {
                                          k = c[(w + 168) >> 2] | 0;
                                          h = 0;
                                          do {
                                            if (a[c[(k + ((h * 548) | 0) + 4) >> 2] >> 0] | 0) break g;
                                            if (a[c[(k + ((h * 548) | 0) + 8) >> 2] >> 0] | 0) break g;
                                            if (a[c[(k + ((h * 548) | 0) + 12) >> 2] >> 0] | 0) break g;
                                            h = (h + 1) | 0;
                                          } while ((h | 0) < (i | 0));
                                        }
                                        c[(y + 132) >> 2] = 1;
                                        h = c[u >> 2] | 0;
                                        i = c[q >> 2] | 0;
                                        h = ue(i | 0, ((((i | 0) < 0) << 31) >> 31) | 0, h | 0, ((((h | 0) < 0) << 31) >> 31) | 0) | 0;
                                        i = z;
                                        c[(w + 20) >> 2] = 0;
                                        do
                                          if (((h | 0) == 0) & ((i | 0) == 0)) aa = 103;
                                          else {
                                            if (
                                              ((i >>> 0 < 0) | (((i | 0) == 0) & (h >>> 0 < 2147418113))) &
                                              (((h | 0) == (h | 0)) & ((i | 0) == 0))
                                            ) {
                                              aa = 103;
                                              break;
                                            }
                                            c[(w + 16) >> 2] = 0;
                                          }
                                        while (0);
                                        if ((aa | 0) == 103 ? ((S = Ad(h) | 0), (c[(w + 16) >> 2] = S), S | 0) : 0) break e;
                                        c[w >> 2] = 1;
                                        break f;
                                      }
                                    while (0);
                                    c[(y + 132) >> 2] = 0;
                                    i = c[y >> 2] | 0;
                                    n = c[u >> 2] | 0;
                                    h = c[q >> 2] | 0;
                                    n = ue(h | 0, ((((h | 0) < 0) << 31) >> 31) | 0, n | 0, ((((n | 0) < 0) << 31) >> 31) | 0) | 0;
                                    h = z;
                                    m = i & 65535;
                                    i = oe(i | 0, ((((i | 0) < 0) << 31) >> 31) | 0, 4) | 0;
                                    i = le(i | 0, z | 0, m | 0, 0) | 0;
                                    h = le(i | 0, z | 0, n | 0, h | 0) | 0;
                                    i = z;
                                    k = oe(h | 0, i | 0, 2) | 0;
                                    do
                                      if (((h | 0) == 0) & ((i | 0) == 0)) aa = 108;
                                      else {
                                        if (
                                          ((i >>> 0 < 0) | (((i | 0) == 0) & (h >>> 0 < 536854529))) &
                                          (((k | 0) == ((k & -4) | 0)) & ((z | 0) == 0))
                                        ) {
                                          aa = 108;
                                          break;
                                        }
                                        c[(w + 16) >> 2] = 0;
                                      }
                                    while (0);
                                    do
                                      if ((aa | 0) == 108) {
                                        h = Ad(k) | 0;
                                        c[(w + 16) >> 2] = h;
                                        if (!h) break;
                                        c[(w + 20) >> 2] = h + (n << 2) + (m << 2);
                                        break e;
                                      }
                                    while (0);
                                    c[w >> 2] = 1;
                                    c[(w + 20) >> 2] = 0;
                                  }
                                while (0);
                                h = c[x >> 2] | 0;
                                if (h | 0) {
                                  eb(h);
                                  Bd(h);
                                }
                                c[x >> 2] = 0;
                                break d;
                              }
                            while (0);
                            h = c[V >> 2] | 0;
                            if ((c[(h + 16) >> 2] | 0) == 1) {
                              t = (A - j) | 0;
                              k = h;
                              aa = 118;
                              break;
                            } else {
                              c[(f + 2372) >> 2] = 0;
                              k = h;
                              aa = 118;
                              break;
                            }
                          }
                        }
                      } else {
                        k = h;
                        aa = 118;
                      }
                    while (0);
                    h: do
                      if ((aa | 0) == 118) {
                        r = c[k >> 2] | 0;
                        S = c[(k + 112) >> 2] | 0;
                        if (c[(k + 8) >> 2] | 0) {
                          h = (t + j) | 0;
                          R = c[(k + 20) >> 2] | 0;
                          if ((c[(R + 108) >> 2] | 0) < (h | 0)) {
                            do
                              if (c[(k + 132) >> 2] | 0) {
                                J = c[(R + 16) >> 2] | 0;
                                K = c[(R + 100) >> 2] | 0;
                                P = (R + 112) | 0;
                                i = c[P >> 2] | 0;
                                k = ((i | 0) / (K | 0)) | 0;
                                o = (i | 0) % (K | 0) | 0;
                                Q = O(K, c[(R + 104) >> 2] | 0) | 0;
                                L = O(K, h) | 0;
                                M = c[(R + 148) >> 2] | 0;
                                i: do
                                  if ((i | 0) < (L | 0)) {
                                    N = (R + 152) | 0;
                                    m = c[N >> 2] | 0;
                                    if (!m) n = 0;
                                    else
                                      n =
                                        c[((c[(R + 160) >> 2] | 0) + (((O(c[(R + 156) >> 2] | 0, k >> m) | 0) + (o >> m)) << 2)) >> 2] | 0;
                                    m = (R + 48) | 0;
                                    if (c[m >> 2] | 0) {
                                      aa = 218;
                                      break;
                                    }
                                    C = (R + 168) | 0;
                                    D = (R + 160) | 0;
                                    E = (R + 156) | 0;
                                    F = (R + 44) | 0;
                                    B = (R + 24) | 0;
                                    G = (R + 40) | 0;
                                    H = (R + 36) | 0;
                                    I = (R + 32) | 0;
                                    n = ((c[C >> 2] | 0) + ((n * 548) | 0)) | 0;
                                    s = 0;
                                    while (1) {
                                      if (!(o & M)) {
                                        n = c[N >> 2] | 0;
                                        if (!n) n = 0;
                                        else n = c[((c[D >> 2] | 0) + (((O(c[E >> 2] | 0, k >> n) | 0) + (o >> n)) << 2)) >> 2] | 0;
                                        n = ((c[C >> 2] | 0) + ((n * 548) | 0)) | 0;
                                      }
                                      p = c[F >> 2] | 0;
                                      do
                                        if ((p | 0) > 31) {
                                          r = c[H >> 2] | 0;
                                          q = c[G >> 2] | 0;
                                          do {
                                            if (q >>> 0 >= r >>> 0) break;
                                            x = B;
                                            x = ne(c[x >> 2] | 0, c[(x + 4) >> 2] | 0, 8) | 0;
                                            y = z;
                                            w = B;
                                            c[w >> 2] = x;
                                            c[(w + 4) >> 2] = y;
                                            w = oe(d[((c[I >> 2] | 0) + q) >> 0] | 0, 0, 56) | 0;
                                            A = B;
                                            c[A >> 2] = w | x;
                                            c[(A + 4) >> 2] = z | y;
                                            q = (q + 1) | 0;
                                            c[G >> 2] = q;
                                            p = (p + -8) | 0;
                                            c[F >> 2] = p;
                                          } while ((p | 0) > 7);
                                          if ((s | 0) == 0 ? !(((p | 0) > 64) & ((q | 0) == (r | 0))) : 0) {
                                            q = 0;
                                            break;
                                          }
                                          c[m >> 2] = 1;
                                          c[F >> 2] = 0;
                                          p = 0;
                                          q = 1;
                                        } else q = s;
                                      while (0);
                                      u = c[n >> 2] | 0;
                                      y = B;
                                      x = c[y >> 2] | 0;
                                      y = c[(y + 4) >> 2] | 0;
                                      s = ne(x | 0, y | 0, (p & 63) | 0) | 0;
                                      s = s & 255;
                                      t = (u + (s << 2)) | 0;
                                      r = a[t >> 0] | 0;
                                      if ((r & 255) > 8) {
                                        p = (p + 8) | 0;
                                        c[F >> 2] = p;
                                        A = ne(x | 0, y | 0, (p & 63) | 0) | 0;
                                        r = (t + (e[(u + (s << 2) + 2) >> 1] << 2) + ((((1 << ((r & 255) + -8)) + -1) & A) << 2)) | 0;
                                        t = r;
                                        r = a[r >> 0] | 0;
                                      }
                                      s = ((r & 255) + p) | 0;
                                      c[F >> 2] = s;
                                      p = b[(t + 2) >> 1] | 0;
                                      r = p & 65535;
                                      do
                                        if ((p & 65535) < 256) {
                                          a[(J + i) >> 0] = p;
                                          i = (i + 1) | 0;
                                          o = (o + 1) | 0;
                                          if ((o | 0) < (K | 0)) break;
                                          o = (k + 1) | 0;
                                          if (!(((k | 0) < (h | 0)) & (((o & 15) | 0) == 0))) {
                                            k = o;
                                            o = 0;
                                            break;
                                          }
                                          fb(R, o);
                                          k = o;
                                          o = 0;
                                        } else {
                                          if ((p & 65535) >= 280) {
                                            n = i;
                                            i = 0;
                                            k = q;
                                            break i;
                                          }
                                          p = (r + -256) | 0;
                                          r = (r + -258) >> 1;
                                          if ((p | 0) < 4) {
                                            w = p;
                                            p = s;
                                            r = y;
                                          } else {
                                            v = ((p & 1) | 2) << r;
                                            j: do
                                              if (((r | 0) < 25) & ((q | 0) == 0)) {
                                                p = ne(x | 0, y | 0, (s & 63) | 0) | 0;
                                                p = p & c[(8 + (r << 2)) >> 2];
                                                t = (s + r) | 0;
                                                c[F >> 2] = t;
                                                if ((t | 0) <= 7) {
                                                  q = 0;
                                                  s = x;
                                                  r = y;
                                                  break;
                                                }
                                                u = c[H >> 2] | 0;
                                                q = c[G >> 2] | 0;
                                                s = x;
                                                r = y;
                                                while (1) {
                                                  if (q >>> 0 >= u >>> 0) break;
                                                  s = ne(s | 0, r | 0, 8) | 0;
                                                  r = z;
                                                  A = B;
                                                  c[A >> 2] = s;
                                                  c[(A + 4) >> 2] = r;
                                                  A = oe(d[((c[I >> 2] | 0) + q) >> 0] | 0, 0, 56) | 0;
                                                  s = A | s;
                                                  r = z | r;
                                                  A = B;
                                                  c[A >> 2] = s;
                                                  c[(A + 4) >> 2] = r;
                                                  q = (q + 1) | 0;
                                                  c[G >> 2] = q;
                                                  t = (t + -8) | 0;
                                                  c[F >> 2] = t;
                                                  if ((t | 0) <= 7) {
                                                    q = 0;
                                                    break j;
                                                  }
                                                }
                                                if (((q | 0) == (u | 0)) & ((t | 0) > 64)) aa = 163;
                                                else q = 0;
                                              } else {
                                                p = 0;
                                                s = x;
                                                r = y;
                                                aa = 163;
                                              }
                                            while (0);
                                            if ((aa | 0) == 163) {
                                              aa = 0;
                                              c[m >> 2] = 1;
                                              c[F >> 2] = 0;
                                              t = 0;
                                              q = 1;
                                            }
                                            w = (p + v) | 0;
                                            p = t;
                                            x = s;
                                          }
                                          A = (w + 1) | 0;
                                          t = c[(n + 16) >> 2] | 0;
                                          u = ne(x | 0, r | 0, (p & 63) | 0) | 0;
                                          u = u & 255;
                                          v = (t + (u << 2)) | 0;
                                          s = a[v >> 0] | 0;
                                          if ((s & 255) > 8) {
                                            p = (p + 8) | 0;
                                            c[F >> 2] = p;
                                            y = ne(x | 0, r | 0, (p & 63) | 0) | 0;
                                            s = (v + (e[(t + (u << 2) + 2) >> 1] << 2) + ((((1 << ((s & 255) + -8)) + -1) & y) << 2)) | 0;
                                            v = s;
                                            s = a[s >> 0] | 0;
                                          }
                                          t = ((s & 255) + p) | 0;
                                          c[F >> 2] = t;
                                          y = b[(v + 2) >> 1] | 0;
                                          p = y & 65535;
                                          do
                                            if ((t | 0) > 31) {
                                              v = c[H >> 2] | 0;
                                              s = c[G >> 2] | 0;
                                              u = x;
                                              do {
                                                if (s >>> 0 >= v >>> 0) break;
                                                u = ne(u | 0, r | 0, 8) | 0;
                                                r = z;
                                                x = B;
                                                c[x >> 2] = u;
                                                c[(x + 4) >> 2] = r;
                                                x = oe(d[((c[I >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                                u = x | u;
                                                r = z | r;
                                                x = B;
                                                c[x >> 2] = u;
                                                c[(x + 4) >> 2] = r;
                                                s = (s + 1) | 0;
                                                c[G >> 2] = s;
                                                t = (t + -8) | 0;
                                                c[F >> 2] = t;
                                              } while ((t | 0) > 7);
                                              if ((q | 0) == 0 ? !(((t | 0) > 64) & ((s | 0) == (v | 0))) : 0) {
                                                q = 0;
                                                v = u;
                                                break;
                                              }
                                              c[m >> 2] = 1;
                                              c[F >> 2] = 0;
                                              t = 0;
                                              q = 1;
                                              v = u;
                                            } else v = x;
                                          while (0);
                                          s = (p + -2) >> 1;
                                          if ((y & 65535) >= 4) {
                                            x = ((p & 1) | 2) << s;
                                            k: do
                                              if (((s | 0) < 25) & ((q | 0) == 0)) {
                                                p = ne(v | 0, r | 0, (t & 63) | 0) | 0;
                                                p = p & c[(8 + (s << 2)) >> 2];
                                                s = (t + s) | 0;
                                                c[F >> 2] = s;
                                                if ((s | 0) <= 7) {
                                                  q = 0;
                                                  break;
                                                }
                                                u = c[H >> 2] | 0;
                                                q = c[G >> 2] | 0;
                                                t = v;
                                                while (1) {
                                                  if (q >>> 0 >= u >>> 0) break;
                                                  v = ne(t | 0, r | 0, 8) | 0;
                                                  y = z;
                                                  qa = B;
                                                  c[qa >> 2] = v;
                                                  c[(qa + 4) >> 2] = y;
                                                  qa = oe(d[((c[I >> 2] | 0) + q) >> 0] | 0, 0, 56) | 0;
                                                  t = qa | v;
                                                  r = z | y;
                                                  y = B;
                                                  c[y >> 2] = t;
                                                  c[(y + 4) >> 2] = r;
                                                  q = (q + 1) | 0;
                                                  c[G >> 2] = q;
                                                  s = (s + -8) | 0;
                                                  c[F >> 2] = s;
                                                  if ((s | 0) <= 7) {
                                                    q = 0;
                                                    break k;
                                                  }
                                                }
                                                if (((q | 0) == (u | 0)) & ((s | 0) > 64)) aa = 181;
                                                else q = 0;
                                              } else {
                                                p = 0;
                                                aa = 181;
                                              }
                                            while (0);
                                            if ((aa | 0) == 181) {
                                              aa = 0;
                                              c[m >> 2] = 1;
                                              c[F >> 2] = 0;
                                              q = 1;
                                            }
                                            p = (p + x) | 0;
                                          }
                                          if (((p + 1) | 0) > 120) p = (p + -119) | 0;
                                          else {
                                            p = d[(4792 + p) >> 0] | 0;
                                            p = ((O(p >>> 4, K) | 0) + (8 - (p & 15))) | 0;
                                            p = (p | 0) > 1 ? p : 1;
                                          }
                                          if ((((Q - i) | 0) < (A | 0)) | ((i | 0) < (p | 0))) {
                                            n = i;
                                            i = 0;
                                            k = q;
                                            break i;
                                          }
                                          t = (J + i) | 0;
                                          r = (t + (0 - p)) | 0;
                                          l: do
                                            if ((A | 0) > 7) {
                                              switch (p | 0) {
                                                case 1: {
                                                  q = a[r >> 0] | 0;
                                                  p = O(q & 255, 16843009) | 0;
                                                  break;
                                                }
                                                case 2: {
                                                  q = d[r >> 0] | (d[(r + 1) >> 0] << 8);
                                                  p = ((q & 65535) * 65537) | 0;
                                                  q = q & 255;
                                                  break;
                                                }
                                                case 4: {
                                                  q =
                                                    d[r >> 0] | (d[(r + 1) >> 0] << 8) | (d[(r + 2) >> 0] << 16) | (d[(r + 3) >> 0] << 24);
                                                  p = q;
                                                  q = q & 255;
                                                  break;
                                                }
                                                default: {
                                                  aa = 201;
                                                  break l;
                                                }
                                              }
                                              do
                                                if (!(t & 3)) {
                                                  v = p;
                                                  w = A;
                                                  s = t;
                                                } else {
                                                  r = (r + 1) | 0;
                                                  s = (t + 1) | 0;
                                                  a[t >> 0] = q;
                                                  p = (p << 24) | (p >>> 8);
                                                  if (!(s & 3)) {
                                                    v = p;
                                                    break;
                                                  } else {
                                                    t = s;
                                                    q = w;
                                                  }
                                                  while (1) {
                                                    u = (r + 1) | 0;
                                                    s = (t + 1) | 0;
                                                    a[t >> 0] = a[r >> 0] | 0;
                                                    p = (p << 24) | (p >>> 8);
                                                    q = (q + -1) | 0;
                                                    if (!(s & 3)) {
                                                      v = p;
                                                      w = q;
                                                      r = u;
                                                      break;
                                                    } else {
                                                      r = u;
                                                      t = s;
                                                    }
                                                  }
                                                }
                                              while (0);
                                              q = w >> 2;
                                              if ((q | 0) > 0) {
                                                p = 0;
                                                do {
                                                  c[(s + (p << 2)) >> 2] = v;
                                                  p = (p + 1) | 0;
                                                } while ((p | 0) != (q | 0));
                                                p = q << 2;
                                              } else p = 0;
                                              if ((p | 0) >= (w | 0)) break;
                                              do {
                                                a[(s + p) >> 0] = a[(r + p) >> 0] | 0;
                                                p = (p + 1) | 0;
                                              } while ((p | 0) != (w | 0));
                                            } else aa = 201;
                                          while (0);
                                          do
                                            if ((aa | 0) == 201) {
                                              aa = 0;
                                              if ((p | 0) >= (A | 0)) {
                                                pe(t | 0, r | 0, A | 0) | 0;
                                                break;
                                              }
                                              if ((A | 0) > 0) p = 0;
                                              else break;
                                              do {
                                                a[(t + p) >> 0] = a[(r + p) >> 0] | 0;
                                                p = (p + 1) | 0;
                                              } while ((p | 0) != (A | 0));
                                            }
                                          while (0);
                                          i = (A + i) | 0;
                                          o = (A + o) | 0;
                                          if ((o | 0) >= (K | 0)) {
                                            p = k;
                                            k = o;
                                            while (1) {
                                              o = (k - K) | 0;
                                              k = (p + 1) | 0;
                                              if (((p | 0) < (h | 0)) & (((k & 15) | 0) == 0)) fb(R, k);
                                              if ((o | 0) < (K | 0)) break;
                                              else {
                                                p = k;
                                                k = o;
                                              }
                                            }
                                          }
                                          if (((i | 0) >= (L | 0)) | (((o & M) | 0) == 0)) break;
                                          n = c[N >> 2] | 0;
                                          if (!n) n = 0;
                                          else n = c[((c[D >> 2] | 0) + (((O(c[E >> 2] | 0, k >> n) | 0) + (o >> n)) << 2)) >> 2] | 0;
                                          n = ((c[C >> 2] | 0) + ((n * 548) | 0)) | 0;
                                        }
                                      while (0);
                                      if (c[m >> 2] | 0) break;
                                      if ((c[G >> 2] | 0) == (c[H >> 2] | 0)) p = (c[F >> 2] | 0) > 64;
                                      else p = 0;
                                      s = p & 1;
                                      c[m >> 2] = s;
                                      if (!(((i | 0) < (L | 0)) & (p ^ 1))) {
                                        aa = 218;
                                        break i;
                                      }
                                    }
                                    c[m >> 2] = 1;
                                    aa = 218;
                                  } else {
                                    m = (R + 48) | 0;
                                    aa = 218;
                                  }
                                while (0);
                                if ((aa | 0) == 218) {
                                  fb(R, (k | 0) > (h | 0) ? h : k);
                                  n = i;
                                  i = 1;
                                  k = c[m >> 2] | 0;
                                }
                                do
                                  if (!k) {
                                    if ((c[(R + 40) >> 2] | 0) != (c[(R + 36) >> 2] | 0)) {
                                      k = 0;
                                      break;
                                    }
                                    k = (c[(R + 44) >> 2] | 0) > 64;
                                  } else k = 1;
                                while (0);
                                c[m >> 2] = k & 1;
                                if (((i | 0) == 0) | (((Q | 0) > (n | 0)) & k)) {
                                  c[R >> 2] = k ? 5 : 3;
                                  break h;
                                } else {
                                  c[P >> 2] = n;
                                  break;
                                }
                              } else {
                                if (c[27] | 0) c[27] = 0;
                                i = hb(R, c[(R + 16) >> 2] | 0, c[(R + 100) >> 2] | 0, c[(R + 104) >> 2] | 0, h, 1) | 0;
                              }
                            while (0);
                            if (!i) break;
                          }
                        } else {
                          s = (f + 2368) | 0;
                          h = c[s >> 2] | 0;
                          p = O(r, j) | 0;
                          i = ((c[B >> 2] | 0) + 1 + p) | 0;
                          q = c[(f + 2364) >> 2] | 0;
                          p = (q + p) | 0;
                          o = (k + 12) | 0;
                          m = c[o >> 2] | 0;
                          k = (t | 0) > 0;
                          if (!m) {
                            if (k) {
                              k = 0;
                              h = p;
                              while (1) {
                                pe(h | 0, i | 0, r | 0) | 0;
                                k = (k + 1) | 0;
                                if ((k | 0) == (t | 0)) break;
                                else {
                                  i = (i + r) | 0;
                                  h = (h + r) | 0;
                                }
                              }
                              h = (q + (O(r, (j + -1 + t) | 0) | 0)) | 0;
                            }
                          } else if (k) {
                            n = O(r, (j + -1 + t) | 0) | 0;
                            Xa[c[(11188 + (m << 2)) >> 2] & 31](h, i, p, r);
                            if ((t | 0) != 1) {
                              h = p;
                              k = 1;
                              do {
                                i = (i + r) | 0;
                                qa = h;
                                h = (h + r) | 0;
                                Xa[c[(11188 + (c[o >> 2] << 2)) >> 2] & 31](qa, i, h, r);
                                k = (k + 1) | 0;
                              } while ((k | 0) != (t | 0));
                            }
                            h = (q + n) | 0;
                          }
                          c[s >> 2] = h;
                          h = (t + j) | 0;
                        }
                        if ((h | 0) < (S | 0)) {
                          if (!(c[T >> 2] | 0)) break c;
                        } else c[T >> 2] = 1;
                        h = c[V >> 2] | 0;
                        if (h | 0) {
                          i = c[(h + 20) >> 2] | 0;
                          if (i | 0) {
                            eb(i);
                            Bd(i);
                          }
                          Bd(h);
                        }
                        c[V >> 2] = 0;
                        r = c[(f + 2372) >> 2] | 0;
                        if ((r | 0) <= 0) break c;
                        N = c[(g + 84) >> 2] | 0;
                        E = ((c[(f + 2364) >> 2] | 0) + (O(N, W) | 0)) | 0;
                        Q = c[(g + 76) >> 2] | 0;
                        E = (E + Q) | 0;
                        Q = ((c[(g + 80) >> 2] | 0) - Q) | 0;
                        N = ((c[U >> 2] | 0) - N) | 0;
                        P = ((r | 0) / 25) | 0;
                        C = (0 - P) | 0;
                        if (r >>> 0 <= 100 ? !(((E | 0) == 0) | ((Q | 0) < 1) | ((N | 0) < 1)) : 0) {
                          if ((r | 0) <= 24) break c;
                          k = (P << 1) | 1;
                          s = Q << 1;
                          i = O((k + 1) | 0, s) | 0;
                          h = (s + 4094 + i) | 0;
                          if (h >>> 0 >= 2147418113) break;
                          M = Ad(h) | 0;
                          if (!M) break;
                          K = M;
                          L = (M + ((O(k, Q) | 0) << 1)) | 0;
                          D = (L + ((0 - Q) << 1)) | 0;
                          me(D | 0, 0, s | 0) | 0;
                          J = (M + i) | 0;
                          q = (J + s) | 0;
                          H = (262144 / ((O(k, k) | 0) >>> 0)) | 0;
                          me($ | 0, 0, 256) | 0;
                          I = (Q | 0) > 0;
                          if (I & ((N | 0) > 0)) {
                            n = 0;
                            o = E;
                            k = 255;
                            m = 0;
                            h = 0;
                            i = 255;
                            while (1) {
                              p = 0;
                              do {
                                qa = d[(o + p) >> 0] | 0;
                                V = (qa | 0) < (i | 0);
                                k = V ? qa : k;
                                i = V ? qa : i;
                                V = (qa | 0) > (h | 0);
                                m = V ? qa : m;
                                h = V ? qa : h;
                                a[($ + qa) >> 0] = 1;
                                p = (p + 1) | 0;
                              } while ((p | 0) != (Q | 0));
                              n = (n + 1) | 0;
                              if ((n | 0) == (N | 0)) {
                                G = k;
                                F = m;
                                break;
                              } else o = (o + W) | 0;
                            }
                          } else {
                            G = 255;
                            F = 0;
                            i = 255;
                            h = 0;
                          }
                          m = -1;
                          n = 0;
                          k = 0;
                          h = (h - i) | 0;
                          while (1) {
                            if (!(a[($ + n) >> 0] | 0)) {
                              i = m;
                              o = k;
                            } else {
                              qa = (n - m) | 0;
                              i = n;
                              o = (k + 1) | 0;
                              h = ((m | 0) > -1) & ((qa | 0) < (h | 0)) ? qa : h;
                            }
                            n = (n + 1) | 0;
                            if ((n | 0) == 256) break;
                            else {
                              m = i;
                              k = o;
                            }
                          }
                          B = (q + 2046) | 0;
                          n = h << 2;
                          i = (h * 12) >> 2;
                          k = (n - i) | 0;
                          h = 1;
                          do {
                            do
                              if ((h | 0) > (i | 0)) {
                                if ((n | 0) <= (h | 0)) {
                                  m = 0;
                                  break;
                                }
                                m = ((O((n - h) | 0, i) | 0) / (k | 0)) | 0;
                              } else m = h;
                            while (0);
                            qa = m >> 2;
                            b[(B + (h << 1)) >> 1] = qa;
                            b[(B + ((0 - h) << 1)) >> 1] = 0 - qa;
                            h = (h + 1) | 0;
                          } while ((h | 0) != 1024);
                          b[B >> 1] = 0;
                          if (((N | 0) > (C | 0)) & ((o | 0) > 2)) {
                            A = (N + -1) | 0;
                            v = (r | 0) < -24;
                            w = (Q - P) | 0;
                            x = ~P;
                            y = (L + ((Q + -1) << 1)) | 0;
                            s = (s + -2 - P) | 0;
                            t = (P + -1) | 0;
                            u = (P + 1) | 0;
                            q = C;
                            r = E;
                            h = E;
                            o = K;
                            p = D;
                            do {
                              n = p;
                              p = o;
                              if (I) {
                                i = 0;
                                k = 0;
                                while (1) {
                                  m = d[(r + i) >> 0] | 0;
                                  $ = (m + k + (e[(n + (i << 1)) >> 1] | 0)) | 0;
                                  qa = (p + (i << 1)) | 0;
                                  b[(L + (i << 1)) >> 1] = $ - (e[qa >> 1] | 0);
                                  b[qa >> 1] = $;
                                  i = (i + 1) | 0;
                                  if ((i | 0) == (Q | 0)) break;
                                  else k = (m + (k & 65535)) | 0;
                                }
                              }
                              o = (p + (Q << 1)) | 0;
                              o = (o | 0) == (L | 0) ? K : o;
                              r = ((q | 0) > -1) & ((q | 0) < (A | 0)) ? (r + W) | 0 : r;
                              if ((q | 0) >= (P | 0)) {
                                if (v) i = 0;
                                else {
                                  i = 0;
                                  do {
                                    b[(J + (i << 1)) >> 1] =
                                      (O(((e[(L + ((P - i) << 1)) >> 1] | 0) + (e[(L + ((t + i) << 1)) >> 1] | 0)) & 65535, H) | 0) >>> 16;
                                    i = (i + 1) | 0;
                                  } while ((i | 0) != (u | 0));
                                  i = u;
                                }
                                if ((i | 0) < (w | 0)) {
                                  do {
                                    b[(J + (i << 1)) >> 1] =
                                      (O(((e[(L + ((i + P) << 1)) >> 1] | 0) - (e[(L + ((i + x) << 1)) >> 1] | 0)) & 65535, H) | 0) >>> 16;
                                    i = (i + 1) | 0;
                                  } while ((i | 0) != (w | 0));
                                  i = w;
                                }
                                if ((i | 0) < (Q | 0))
                                  do {
                                    b[(J + (i << 1)) >> 1] =
                                      (O(
                                        ((e[y >> 1] << 1) - (e[(L + ((s - i) << 1)) >> 1] | 0) - (e[(L + ((i + x) << 1)) >> 1] | 0)) &
                                          65535,
                                        H
                                      ) |
                                        0) >>>
                                      16;
                                    i = (i + 1) | 0;
                                  } while ((i | 0) != (Q | 0));
                                if (I) {
                                  k = 0;
                                  do {
                                    m = (h + k) | 0;
                                    i = d[m >> 0] | 0;
                                    if (((i | 0) < (F | 0)) & ((i | 0) > (G | 0))) {
                                      i = ((b[(B + (((e[(J + (k << 1)) >> 1] | 0) - (i << 2)) << 1)) >> 1] | 0) + i) | 0;
                                      if (i >>> 0 > 255) i = (((i >> 31) & -255) + 255) | 0;
                                      else i = i & 255;
                                      a[m >> 0] = i;
                                    }
                                    k = (k + 1) | 0;
                                  } while ((k | 0) != (Q | 0));
                                }
                                h = (h + W) | 0;
                              }
                              q = (q + 1) | 0;
                            } while ((q | 0) != (N | 0));
                          }
                          Bd(M);
                          break c;
                        }
                      }
                    while (0);
                    h = (f + 2360) | 0;
                    Bd(c[h >> 2] | 0);
                    c[h >> 2] = 0;
                    c[(f + 2364) >> 2] = 0;
                    h = c[V >> 2] | 0;
                    if (h | 0) {
                      i = c[(h + 20) >> 2] | 0;
                      if (i | 0) {
                        eb(i);
                        Bd(i);
                      }
                      Bd(h);
                    }
                    c[V >> 2] = 0;
                    aa = 279;
                    break b;
                  }
                while (0);
                h = ((c[(f + 2364) >> 2] | 0) + (O(W, j) | 0)) | 0;
                c[Z >> 2] = h;
                if (h | 0) break a;
              } else aa = 279;
            while (0);
            if ((aa | 0) == 279) c[Z >> 2] = 0;
            if (c[f >> 2] | 0) {
              qa = 0;
              l = pa;
              return qa | 0;
            }
            c[f >> 2] = 3;
            c[(f + 8) >> 2] = 4965;
            c[(f + 4) >> 2] = 0;
            qa = 0;
            l = pa;
            return qa | 0;
          } else h = 0;
        while (0);
        k = c[(g + 84) >> 2] | 0;
        if ((k | 0) > (j | 0)) {
          i = (k - j) | 0;
          aa = O(c[ba >> 2] | 0, i) | 0;
          qa = (g + 20) | 0;
          c[qa >> 2] = (c[qa >> 2] | 0) + aa;
          qa = O(c[da >> 2] | 0, i >> 1) | 0;
          aa = (g + 24) | 0;
          c[aa >> 2] = (c[aa >> 2] | 0) + qa;
          c[Y >> 2] = (c[Y >> 2] | 0) + qa;
          if (!h) {
            j = k;
            h = 0;
          } else {
            h = (h + (O(c[g >> 2] | 0, i) | 0)) | 0;
            c[Z >> 2] = h;
            j = k;
          }
        }
        if ((X | 0) > (j | 0)) {
          i = c[(g + 76) >> 2] | 0;
          qa = (g + 20) | 0;
          c[qa >> 2] = (c[qa >> 2] | 0) + i;
          qa = i >> 1;
          aa = (g + 24) | 0;
          c[aa >> 2] = (c[aa >> 2] | 0) + qa;
          c[Y >> 2] = (c[Y >> 2] | 0) + qa;
          if (h | 0) c[Z >> 2] = h + i;
          c[(g + 8) >> 2] = j - k;
          c[(g + 12) >> 2] = (c[(g + 80) >> 2] | 0) - i;
          c[(g + 16) >> 2] = X - j;
          h = Ua[c[_ >> 2] & 7](g) | 0;
        } else h = 1;
      } else h = 1;
      if (oa | (((na + 1) | 0) != (c[(f + 156) >> 2] | 0))) {
        qa = h;
        l = pa;
        return qa | 0;
      }
      pe(((c[fa >> 2] | 0) + ga) | 0, (ha + (c[ba >> 2] << 4)) | 0, ca | 0) | 0;
      pe(((c[ia >> 2] | 0) + ja) | 0, (ka + (c[da >> 2] << 3)) | 0, ea | 0) | 0;
      pe(((c[la >> 2] | 0) + ja) | 0, (ma + (c[da >> 2] << 3)) | 0, ea | 0) | 0;
      qa = h;
      l = pa;
      return qa | 0;
    }
    function Kc(b, c) {
      b = b | 0;
      c = c | 0;
      var e = 0,
        f = 0;
      b = (((b << 16) >> 16) + 4) >> 3;
      e = (b + (d[c >> 0] | 0)) | 0;
      a[c >> 0] = e >>> 0 > 255 ? ((e >>> 31) + 255) | 0 : e;
      e = (c + 1) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 2) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 3) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 32) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 33) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 34) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 35) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 64) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 65) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 66) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 67) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 96) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 97) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      e = (c + 98) | 0;
      f = ((d[e >> 0] | 0) + b) | 0;
      a[e >> 0] = f >>> 0 > 255 ? ((f >>> 31) + 255) | 0 : f;
      c = (c + 99) | 0;
      b = ((d[c >> 0] | 0) + b) | 0;
      a[c >> 0] = b >>> 0 > 255 ? ((b >>> 31) + 255) | 0 : b;
      return;
    }
    function Lc(b, c, e, f) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0;
      h = (((b << 16) >> 16) + 4) | 0;
      e = (e << 16) >> 16;
      i = (e * 35468) >> 16;
      e = (((e * 20091) >> 16) + e) | 0;
      b = (c << 16) >> 16;
      g = (b * 35468) >> 16;
      b = (((b * 20091) >> 16) + b) | 0;
      c = (e + h) | 0;
      j = (((c + b) >> 3) + (d[f >> 0] | 0)) | 0;
      a[f >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
      j = (f + 1) | 0;
      k = (((c + g) >> 3) + (d[j >> 0] | 0)) | 0;
      a[j >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
      j = (f + 2) | 0;
      k = ((d[j >> 0] | 0) + ((c - g) >> 3)) | 0;
      a[j >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
      j = (f + 3) | 0;
      c = ((d[j >> 0] | 0) + ((c - b) >> 3)) | 0;
      a[j >> 0] = c >>> 0 > 255 ? ((c >>> 31) + 255) | 0 : c;
      j = (i + h) | 0;
      c = (f + 32) | 0;
      k = ((d[c >> 0] | 0) + ((b + j) >> 3)) | 0;
      a[c >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
      c = (f + 33) | 0;
      k = ((d[c >> 0] | 0) + ((j + g) >> 3)) | 0;
      a[c >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
      c = (f + 34) | 0;
      k = ((d[c >> 0] | 0) + ((j - g) >> 3)) | 0;
      a[c >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
      c = (f + 35) | 0;
      j = ((d[c >> 0] | 0) + ((j - b) >> 3)) | 0;
      a[c >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
      i = (h - i) | 0;
      c = (f + 64) | 0;
      j = ((d[c >> 0] | 0) + ((b + i) >> 3)) | 0;
      a[c >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
      c = (f + 65) | 0;
      j = ((d[c >> 0] | 0) + ((i + g) >> 3)) | 0;
      a[c >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
      c = (f + 66) | 0;
      j = ((d[c >> 0] | 0) + ((i - g) >> 3)) | 0;
      a[c >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
      c = (f + 67) | 0;
      i = ((d[c >> 0] | 0) + ((i - b) >> 3)) | 0;
      a[c >> 0] = i >>> 0 > 255 ? ((i >>> 31) + 255) | 0 : i;
      e = (h - e) | 0;
      c = (f + 96) | 0;
      h = ((d[c >> 0] | 0) + ((e + b) >> 3)) | 0;
      a[c >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
      c = (f + 97) | 0;
      h = ((d[c >> 0] | 0) + ((e + g) >> 3)) | 0;
      a[c >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
      c = (f + 98) | 0;
      g = ((d[c >> 0] | 0) + ((e - g) >> 3)) | 0;
      a[c >> 0] = g >>> 0 > 255 ? ((g >>> 31) + 255) | 0 : g;
      f = (f + 99) | 0;
      b = ((d[f >> 0] | 0) + ((e - b) >> 3)) | 0;
      a[f >> 0] = b >>> 0 > 255 ? ((b >>> 31) + 255) | 0 : b;
      return;
    }
    function Mc(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -32) >> 0] | 0) +
          4 +
          (d[(a + -1) >> 0] | 0) +
          (d[(a + -31) >> 0] | 0) +
          (d[(a + 31) >> 0] | 0) +
          (d[(a + -30) >> 0] | 0) +
          (d[(a + 63) >> 0] | 0) +
          (d[(a + -29) >> 0] | 0) +
          (d[(a + 95) >> 0] | 0)) |
          0) >>>
          3) &
        255;
      me(a | 0, b | 0, 4) | 0;
      me((a + 32) | 0, b | 0, 4) | 0;
      me((a + 64) | 0, b | 0, 4) | 0;
      me((a + 96) | 0, b | 0, 4) | 0;
      return;
    }
    function Nc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
      e = (3769 + (0 - (d[(b + -33) >> 0] | 0))) | 0;
      i = (e + (d[(b + -1) >> 0] | 0)) | 0;
      h = d[(b + -32) >> 0] | 0;
      a[b >> 0] = a[(i + h) >> 0] | 0;
      g = d[(b + -31) >> 0] | 0;
      a[(b + 1) >> 0] = a[(i + g) >> 0] | 0;
      f = d[(b + -30) >> 0] | 0;
      a[(b + 2) >> 0] = a[(i + f) >> 0] | 0;
      c = d[(b + -29) >> 0] | 0;
      a[(b + 3) >> 0] = a[(i + c) >> 0] | 0;
      i = (e + (d[(b + 31) >> 0] | 0)) | 0;
      a[(b + 32) >> 0] = a[(i + h) >> 0] | 0;
      a[(b + 33) >> 0] = a[(i + g) >> 0] | 0;
      a[(b + 34) >> 0] = a[(i + f) >> 0] | 0;
      a[(b + 35) >> 0] = a[(i + c) >> 0] | 0;
      i = (e + (d[(b + 63) >> 0] | 0)) | 0;
      a[(b + 64) >> 0] = a[(i + h) >> 0] | 0;
      a[(b + 65) >> 0] = a[(i + g) >> 0] | 0;
      a[(b + 66) >> 0] = a[(i + f) >> 0] | 0;
      a[(b + 67) >> 0] = a[(i + c) >> 0] | 0;
      e = (e + (d[(b + 95) >> 0] | 0)) | 0;
      a[(b + 96) >> 0] = a[(e + h) >> 0] | 0;
      a[(b + 97) >> 0] = a[(e + g) >> 0] | 0;
      a[(b + 98) >> 0] = a[(e + f) >> 0] | 0;
      a[(b + 99) >> 0] = a[(e + c) >> 0] | 0;
      return;
    }
    function Oc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0;
      f = d[(b + -32) >> 0] | 0;
      e = d[(b + -31) >> 0] | 0;
      g = ((((d[(b + -33) >> 0] | 0) + 2 + (f << 1) + e) | 0) >>> 2) & 255;
      h = d[(b + -30) >> 0] | 0;
      f = (((f + 2 + (e << 1) + h) | 0) >>> 2) & 255;
      c = d[(b + -29) >> 0] | 0;
      e = (((e + 2 + (h << 1) + c) | 0) >>> 2) & 255;
      c = (((h + 2 + (c << 1) + (d[(b + -28) >> 0] | 0)) | 0) >>> 2) & 255;
      a[b >> 0] = g;
      a[(b + 1) >> 0] = f;
      a[(b + 2) >> 0] = e;
      a[(b + 3) >> 0] = c;
      a[(b + 32) >> 0] = g;
      a[(b + 33) >> 0] = f;
      a[(b + 34) >> 0] = e;
      a[(b + 35) >> 0] = c;
      a[(b + 64) >> 0] = g;
      a[(b + 65) >> 0] = f;
      a[(b + 66) >> 0] = e;
      a[(b + 67) >> 0] = c;
      a[(b + 96) >> 0] = g;
      a[(b + 97) >> 0] = f;
      a[(b + 98) >> 0] = e;
      a[(b + 99) >> 0] = c;
      return;
    }
    function Pc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      k = d[(b + -1) >> 0] | 0;
      j = d[(b + 31) >> 0] | 0;
      l = d[(b + 63) >> 0] | 0;
      h = d[(b + -33) >> 0] | 0;
      g = d[(b + -32) >> 0] | 0;
      f = d[(b + -31) >> 0] | 0;
      e = d[(b + -30) >> 0] | 0;
      c = d[(b + -29) >> 0] | 0;
      a[(b + 96) >> 0] = ((j + 2 + (l << 1) + (d[(b + 95) >> 0] | 0)) | 0) >>> 2;
      i = (k + 2) | 0;
      l = ((((j << 1) + i + l) | 0) >>> 2) & 255;
      a[(b + 64) >> 0] = l;
      a[(b + 97) >> 0] = l;
      j = ((((k << 1) + 2 + j + h) | 0) >>> 2) & 255;
      a[(b + 32) >> 0] = j;
      a[(b + 65) >> 0] = j;
      a[(b + 98) >> 0] = j;
      i = ((((h << 1) + i + g) | 0) >>> 2) & 255;
      a[b >> 0] = i;
      a[(b + 33) >> 0] = i;
      a[(b + 66) >> 0] = i;
      a[(b + 99) >> 0] = i;
      h = (((h + 2 + (g << 1) + f) | 0) >>> 2) & 255;
      a[(b + 1) >> 0] = h;
      a[(b + 34) >> 0] = h;
      a[(b + 67) >> 0] = h;
      g = (((g + 2 + (f << 1) + e) | 0) >>> 2) & 255;
      a[(b + 2) >> 0] = g;
      a[(b + 35) >> 0] = g;
      a[(b + 3) >> 0] = ((f + 2 + (e << 1) + c) | 0) >>> 2;
      return;
    }
    function Qc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      j = d[(b + -31) >> 0] | 0;
      i = d[(b + -30) >> 0] | 0;
      h = d[(b + -29) >> 0] | 0;
      g = d[(b + -28) >> 0] | 0;
      f = d[(b + -27) >> 0] | 0;
      e = d[(b + -26) >> 0] | 0;
      c = d[(b + -25) >> 0] | 0;
      a[b >> 0] = (((d[(b + -32) >> 0] | 0) + 2 + (j << 1) + i) | 0) >>> 2;
      j = (((j + 2 + (i << 1) + h) | 0) >>> 2) & 255;
      a[(b + 32) >> 0] = j;
      a[(b + 1) >> 0] = j;
      i = (((i + 2 + (h << 1) + g) | 0) >>> 2) & 255;
      a[(b + 64) >> 0] = i;
      a[(b + 33) >> 0] = i;
      a[(b + 2) >> 0] = i;
      h = (((h + 2 + (g << 1) + f) | 0) >>> 2) & 255;
      a[(b + 96) >> 0] = h;
      a[(b + 65) >> 0] = h;
      a[(b + 34) >> 0] = h;
      a[(b + 3) >> 0] = h;
      g = (((g + 2 + (f << 1) + e) | 0) >>> 2) & 255;
      a[(b + 97) >> 0] = g;
      a[(b + 66) >> 0] = g;
      a[(b + 35) >> 0] = g;
      f = (((f + 2 + (e << 1) + c) | 0) >>> 2) & 255;
      a[(b + 98) >> 0] = f;
      a[(b + 67) >> 0] = f;
      a[(b + 99) >> 0] = ((e + 2 + c + (c << 1)) | 0) >>> 2;
      return;
    }
    function Rc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0;
      h = d[(b + -1) >> 0] | 0;
      g = d[(b + 31) >> 0] | 0;
      e = d[(b + 63) >> 0] | 0;
      c = d[(b + 95) >> 0] | 0;
      f = O(((((d[(b + -33) >> 0] | 0) + 2 + (h << 1) + g) | 0) >>> 2) & 255, 16843009) | 0;
      a[b >> 0] = f;
      a[(b + 1) >> 0] = f >> 8;
      a[(b + 2) >> 0] = f >> 16;
      a[(b + 3) >> 0] = f >> 24;
      f = (b + 32) | 0;
      h = O((((h + 2 + (g << 1) + e) | 0) >>> 2) & 255, 16843009) | 0;
      a[f >> 0] = h;
      a[(f + 1) >> 0] = h >> 8;
      a[(f + 2) >> 0] = h >> 16;
      a[(f + 3) >> 0] = h >> 24;
      f = (b + 64) | 0;
      g = O((((g + 2 + (e << 1) + c) | 0) >>> 2) & 255, 16843009) | 0;
      a[f >> 0] = g;
      a[(f + 1) >> 0] = g >> 8;
      a[(f + 2) >> 0] = g >> 16;
      a[(f + 3) >> 0] = g >> 24;
      b = (b + 96) | 0;
      c = O((((e + 2 + c + (c << 1)) | 0) >>> 2) & 255, 16843009) | 0;
      a[b >> 0] = c;
      a[(b + 1) >> 0] = c >> 8;
      a[(b + 2) >> 0] = c >> 16;
      a[(b + 3) >> 0] = c >> 24;
      return;
    }
    function Sc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      k = d[(b + -1) >> 0] | 0;
      j = d[(b + 31) >> 0] | 0;
      l = d[(b + 63) >> 0] | 0;
      h = d[(b + -33) >> 0] | 0;
      g = d[(b + -32) >> 0] | 0;
      f = d[(b + -31) >> 0] | 0;
      e = d[(b + -30) >> 0] | 0;
      c = d[(b + -29) >> 0] | 0;
      i = (((h + 1 + g) | 0) >>> 1) & 255;
      a[(b + 65) >> 0] = i;
      a[b >> 0] = i;
      i = (((g + 1 + f) | 0) >>> 1) & 255;
      a[(b + 66) >> 0] = i;
      a[(b + 1) >> 0] = i;
      i = (((f + 1 + e) | 0) >>> 1) & 255;
      a[(b + 67) >> 0] = i;
      a[(b + 2) >> 0] = i;
      a[(b + 3) >> 0] = ((e + 1 + c) | 0) >>> 1;
      i = (k + 2) | 0;
      a[(b + 96) >> 0] = (((j << 1) + i + l) | 0) >>> 2;
      a[(b + 64) >> 0] = (((k << 1) + 2 + j + h) | 0) >>> 2;
      i = ((((h << 1) + i + g) | 0) >>> 2) & 255;
      a[(b + 97) >> 0] = i;
      a[(b + 32) >> 0] = i;
      h = (((h + 2 + (g << 1) + f) | 0) >>> 2) & 255;
      a[(b + 98) >> 0] = h;
      a[(b + 33) >> 0] = h;
      g = (((g + 2 + (f << 1) + e) | 0) >>> 2) & 255;
      a[(b + 99) >> 0] = g;
      a[(b + 34) >> 0] = g;
      a[(b + 35) >> 0] = ((f + 2 + (e << 1) + c) | 0) >>> 2;
      return;
    }
    function Tc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      k = d[(b + -32) >> 0] | 0;
      j = d[(b + -31) >> 0] | 0;
      i = d[(b + -30) >> 0] | 0;
      h = d[(b + -29) >> 0] | 0;
      g = d[(b + -28) >> 0] | 0;
      f = d[(b + -27) >> 0] | 0;
      e = d[(b + -26) >> 0] | 0;
      c = d[(b + -25) >> 0] | 0;
      a[b >> 0] = ((k + 1 + j) | 0) >>> 1;
      l = (((j + 1 + i) | 0) >>> 1) & 255;
      a[(b + 64) >> 0] = l;
      a[(b + 1) >> 0] = l;
      l = (((i + 1 + h) | 0) >>> 1) & 255;
      a[(b + 65) >> 0] = l;
      a[(b + 2) >> 0] = l;
      l = (((h + 1 + g) | 0) >>> 1) & 255;
      a[(b + 66) >> 0] = l;
      a[(b + 3) >> 0] = l;
      a[(b + 32) >> 0] = ((k + 2 + (j << 1) + i) | 0) >>> 2;
      j = (((j + 2 + (i << 1) + h) | 0) >>> 2) & 255;
      a[(b + 96) >> 0] = j;
      a[(b + 33) >> 0] = j;
      i = (((i + 2 + (h << 1) + g) | 0) >>> 2) & 255;
      a[(b + 97) >> 0] = i;
      a[(b + 34) >> 0] = i;
      h = (((h + 2 + (g << 1) + f) | 0) >>> 2) & 255;
      a[(b + 98) >> 0] = h;
      a[(b + 35) >> 0] = h;
      a[(b + 67) >> 0] = ((g + 2 + (f << 1) + e) | 0) >>> 2;
      a[(b + 99) >> 0] = ((f + 2 + (e << 1) + c) | 0) >>> 2;
      return;
    }
    function Uc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      i = d[(b + -1) >> 0] | 0;
      f = d[(b + 31) >> 0] | 0;
      e = d[(b + 63) >> 0] | 0;
      c = d[(b + 95) >> 0] | 0;
      h = d[(b + -33) >> 0] | 0;
      j = d[(b + -32) >> 0] | 0;
      g = d[(b + -31) >> 0] | 0;
      k = d[(b + -30) >> 0] | 0;
      l = (i + 1) | 0;
      m = (((h + l) | 0) >>> 1) & 255;
      a[(b + 34) >> 0] = m;
      a[b >> 0] = m;
      l = (((l + f) | 0) >>> 1) & 255;
      a[(b + 66) >> 0] = l;
      a[(b + 32) >> 0] = l;
      l = (((f + 1 + e) | 0) >>> 1) & 255;
      a[(b + 98) >> 0] = l;
      a[(b + 64) >> 0] = l;
      a[(b + 96) >> 0] = ((e + 1 + c) | 0) >>> 1;
      a[(b + 3) >> 0] = ((j + 2 + (g << 1) + k) | 0) >>> 2;
      a[(b + 2) >> 0] = ((h + 2 + (j << 1) + g) | 0) >>> 2;
      g = (i + 2) | 0;
      j = ((((h << 1) + g + j) | 0) >>> 2) & 255;
      a[(b + 35) >> 0] = j;
      a[(b + 1) >> 0] = j;
      h = ((((i << 1) + 2 + f + h) | 0) >>> 2) & 255;
      a[(b + 67) >> 0] = h;
      a[(b + 33) >> 0] = h;
      g = ((((f << 1) + g + e) | 0) >>> 2) & 255;
      a[(b + 99) >> 0] = g;
      a[(b + 65) >> 0] = g;
      a[(b + 97) >> 0] = ((f + 2 + (e << 1) + c) | 0) >>> 2;
      return;
    }
    function Vc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
      h = d[(b + -1) >> 0] | 0;
      g = d[(b + 31) >> 0] | 0;
      f = d[(b + 63) >> 0] | 0;
      c = a[(b + 95) >> 0] | 0;
      e = c & 255;
      a[b >> 0] = ((h + 1 + g) | 0) >>> 1;
      i = (((g + 1 + f) | 0) >>> 1) & 255;
      a[(b + 32) >> 0] = i;
      a[(b + 2) >> 0] = i;
      i = (((f + 1 + e) | 0) >>> 1) & 255;
      a[(b + 64) >> 0] = i;
      a[(b + 34) >> 0] = i;
      a[(b + 1) >> 0] = ((h + 2 + (g << 1) + f) | 0) >>> 2;
      g = (((g + 2 + (f << 1) + e) | 0) >>> 2) & 255;
      a[(b + 33) >> 0] = g;
      a[(b + 3) >> 0] = g;
      e = (((f + 2 + e + (e << 1)) | 0) >>> 2) & 255;
      a[(b + 65) >> 0] = e;
      a[(b + 35) >> 0] = e;
      a[(b + 66) >> 0] = c;
      a[(b + 67) >> 0] = c;
      me((b + 96) | 0, c | 0, 4) | 0;
      return;
    }
    function Wc(a) {
      a = a | 0;
      var b = 0,
        c = 0;
      b = 16;
      c = 0;
      do {
        b = ((d[(a + ((c << 5) + -1)) >> 0] | 0) + b + (d[(a + (c + -32)) >> 0] | 0)) | 0;
        c = (c + 1) | 0;
      } while ((c | 0) != 16);
      c = (b >>> 5) & 255;
      me(a | 0, c | 0, 16) | 0;
      me((a + 32) | 0, c | 0, 16) | 0;
      me((a + 64) | 0, c | 0, 16) | 0;
      me((a + 96) | 0, c | 0, 16) | 0;
      me((a + 128) | 0, c | 0, 16) | 0;
      me((a + 160) | 0, c | 0, 16) | 0;
      me((a + 192) | 0, c | 0, 16) | 0;
      me((a + 224) | 0, c | 0, 16) | 0;
      me((a + 256) | 0, c | 0, 16) | 0;
      me((a + 288) | 0, c | 0, 16) | 0;
      me((a + 320) | 0, c | 0, 16) | 0;
      me((a + 352) | 0, c | 0, 16) | 0;
      me((a + 384) | 0, c | 0, 16) | 0;
      me((a + 416) | 0, c | 0, 16) | 0;
      me((a + 448) | 0, c | 0, 16) | 0;
      me((a + 480) | 0, c | 0, 16) | 0;
      return;
    }
    function Xc(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0;
      e = (b + -32) | 0;
      r = (3769 + (0 - (d[(b + -33) >> 0] | 0))) | 0;
      s = (b + -31) | 0;
      t = (b + -30) | 0;
      u = (b + -29) | 0;
      f = (b + -28) | 0;
      g = (b + -27) | 0;
      h = (b + -26) | 0;
      i = (b + -25) | 0;
      j = (b + -24) | 0;
      k = (b + -23) | 0;
      l = (b + -22) | 0;
      m = (b + -21) | 0;
      n = (b + -20) | 0;
      o = (b + -19) | 0;
      p = (b + -18) | 0;
      q = (b + -17) | 0;
      c = 0;
      while (1) {
        v = (r + (d[(b + -1) >> 0] | 0)) | 0;
        a[b >> 0] = a[(v + (d[e >> 0] | 0)) >> 0] | 0;
        a[(b + 1) >> 0] = a[(v + (d[s >> 0] | 0)) >> 0] | 0;
        a[(b + 2) >> 0] = a[(v + (d[t >> 0] | 0)) >> 0] | 0;
        a[(b + 3) >> 0] = a[(v + (d[u >> 0] | 0)) >> 0] | 0;
        a[(b + 4) >> 0] = a[(v + (d[f >> 0] | 0)) >> 0] | 0;
        a[(b + 5) >> 0] = a[(v + (d[g >> 0] | 0)) >> 0] | 0;
        a[(b + 6) >> 0] = a[(v + (d[h >> 0] | 0)) >> 0] | 0;
        a[(b + 7) >> 0] = a[(v + (d[i >> 0] | 0)) >> 0] | 0;
        a[(b + 8) >> 0] = a[(v + (d[j >> 0] | 0)) >> 0] | 0;
        a[(b + 9) >> 0] = a[(v + (d[k >> 0] | 0)) >> 0] | 0;
        a[(b + 10) >> 0] = a[(v + (d[l >> 0] | 0)) >> 0] | 0;
        a[(b + 11) >> 0] = a[(v + (d[m >> 0] | 0)) >> 0] | 0;
        a[(b + 12) >> 0] = a[(v + (d[n >> 0] | 0)) >> 0] | 0;
        a[(b + 13) >> 0] = a[(v + (d[o >> 0] | 0)) >> 0] | 0;
        a[(b + 14) >> 0] = a[(v + (d[p >> 0] | 0)) >> 0] | 0;
        a[(b + 15) >> 0] = a[(v + (d[q >> 0] | 0)) >> 0] | 0;
        c = (c + 1) | 0;
        if ((c | 0) == 16) break;
        else b = (b + 32) | 0;
      }
      return;
    }
    function Yc(b) {
      b = b | 0;
      var c = 0,
        d = 0,
        e = 0,
        f = 0;
      c = (b + -32) | 0;
      d = b;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 32) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 64) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 96) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 128) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 160) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 192) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 224) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 256) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 288) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 320) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 352) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 384) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 416) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 448) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      d = (b + 480) | 0;
      e = c;
      f = (d + 16) | 0;
      do {
        a[d >> 0] = a[e >> 0] | 0;
        d = (d + 1) | 0;
        e = (e + 1) | 0;
      } while ((d | 0) < (f | 0));
      return;
    }
    function Zc(b) {
      b = b | 0;
      me(b | 0, a[(b + -1) >> 0] | 0, 16) | 0;
      me((b + 32) | 0, a[(b + 31) >> 0] | 0, 16) | 0;
      me((b + 64) | 0, a[(b + 63) >> 0] | 0, 16) | 0;
      me((b + 96) | 0, a[(b + 95) >> 0] | 0, 16) | 0;
      me((b + 128) | 0, a[(b + 127) >> 0] | 0, 16) | 0;
      me((b + 160) | 0, a[(b + 159) >> 0] | 0, 16) | 0;
      me((b + 192) | 0, a[(b + 191) >> 0] | 0, 16) | 0;
      me((b + 224) | 0, a[(b + 223) >> 0] | 0, 16) | 0;
      me((b + 256) | 0, a[(b + 255) >> 0] | 0, 16) | 0;
      me((b + 288) | 0, a[(b + 287) >> 0] | 0, 16) | 0;
      me((b + 320) | 0, a[(b + 319) >> 0] | 0, 16) | 0;
      me((b + 352) | 0, a[(b + 351) >> 0] | 0, 16) | 0;
      me((b + 384) | 0, a[(b + 383) >> 0] | 0, 16) | 0;
      me((b + 416) | 0, a[(b + 415) >> 0] | 0, 16) | 0;
      me((b + 448) | 0, a[(b + 447) >> 0] | 0, 16) | 0;
      me((b + 480) | 0, a[(b + 479) >> 0] | 0, 16) | 0;
      return;
    }
    function _c(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -1) >> 0] | 0) +
          8 +
          (d[(a + 31) >> 0] | 0) +
          (d[(a + 63) >> 0] | 0) +
          (d[(a + 95) >> 0] | 0) +
          (d[(a + 127) >> 0] | 0) +
          (d[(a + 159) >> 0] | 0) +
          (d[(a + 191) >> 0] | 0) +
          (d[(a + 223) >> 0] | 0) +
          (d[(a + 255) >> 0] | 0) +
          (d[(a + 287) >> 0] | 0) +
          (d[(a + 319) >> 0] | 0) +
          (d[(a + 351) >> 0] | 0) +
          (d[(a + 383) >> 0] | 0) +
          (d[(a + 415) >> 0] | 0) +
          (d[(a + 447) >> 0] | 0) +
          (d[(a + 479) >> 0] | 0)) |
          0) >>>
          4) &
        255;
      me(a | 0, b | 0, 16) | 0;
      me((a + 32) | 0, b | 0, 16) | 0;
      me((a + 64) | 0, b | 0, 16) | 0;
      me((a + 96) | 0, b | 0, 16) | 0;
      me((a + 128) | 0, b | 0, 16) | 0;
      me((a + 160) | 0, b | 0, 16) | 0;
      me((a + 192) | 0, b | 0, 16) | 0;
      me((a + 224) | 0, b | 0, 16) | 0;
      me((a + 256) | 0, b | 0, 16) | 0;
      me((a + 288) | 0, b | 0, 16) | 0;
      me((a + 320) | 0, b | 0, 16) | 0;
      me((a + 352) | 0, b | 0, 16) | 0;
      me((a + 384) | 0, b | 0, 16) | 0;
      me((a + 416) | 0, b | 0, 16) | 0;
      me((a + 448) | 0, b | 0, 16) | 0;
      me((a + 480) | 0, b | 0, 16) | 0;
      return;
    }
    function $c(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -32) >> 0] | 0) +
          8 +
          (d[(a + -31) >> 0] | 0) +
          (d[(a + -30) >> 0] | 0) +
          (d[(a + -29) >> 0] | 0) +
          (d[(a + -28) >> 0] | 0) +
          (d[(a + -27) >> 0] | 0) +
          (d[(a + -26) >> 0] | 0) +
          (d[(a + -25) >> 0] | 0) +
          (d[(a + -24) >> 0] | 0) +
          (d[(a + -23) >> 0] | 0) +
          (d[(a + -22) >> 0] | 0) +
          (d[(a + -21) >> 0] | 0) +
          (d[(a + -20) >> 0] | 0) +
          (d[(a + -19) >> 0] | 0) +
          (d[(a + -18) >> 0] | 0) +
          (d[(a + -17) >> 0] | 0)) |
          0) >>>
          4) &
        255;
      me(a | 0, b | 0, 16) | 0;
      me((a + 32) | 0, b | 0, 16) | 0;
      me((a + 64) | 0, b | 0, 16) | 0;
      me((a + 96) | 0, b | 0, 16) | 0;
      me((a + 128) | 0, b | 0, 16) | 0;
      me((a + 160) | 0, b | 0, 16) | 0;
      me((a + 192) | 0, b | 0, 16) | 0;
      me((a + 224) | 0, b | 0, 16) | 0;
      me((a + 256) | 0, b | 0, 16) | 0;
      me((a + 288) | 0, b | 0, 16) | 0;
      me((a + 320) | 0, b | 0, 16) | 0;
      me((a + 352) | 0, b | 0, 16) | 0;
      me((a + 384) | 0, b | 0, 16) | 0;
      me((a + 416) | 0, b | 0, 16) | 0;
      me((a + 448) | 0, b | 0, 16) | 0;
      me((a + 480) | 0, b | 0, 16) | 0;
      return;
    }
    function ad(b) {
      b = b | 0;
      var c = 0,
        d = 0;
      c = b;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 32) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 64) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 96) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 128) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 160) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 192) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 224) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 256) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 288) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 320) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 352) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 384) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 416) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 448) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      c = (b + 480) | 0;
      d = (c + 16) | 0;
      do {
        a[c >> 0] = 128;
        c = (c + 1) | 0;
      } while ((c | 0) < (d | 0));
      return;
    }
    function bd(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -32) >> 0] | 0) +
          8 +
          (d[(a + -1) >> 0] | 0) +
          (d[(a + -31) >> 0] | 0) +
          (d[(a + 31) >> 0] | 0) +
          (d[(a + -30) >> 0] | 0) +
          (d[(a + 63) >> 0] | 0) +
          (d[(a + -29) >> 0] | 0) +
          (d[(a + 95) >> 0] | 0) +
          (d[(a + -28) >> 0] | 0) +
          (d[(a + 127) >> 0] | 0) +
          (d[(a + -27) >> 0] | 0) +
          (d[(a + 159) >> 0] | 0) +
          (d[(a + -26) >> 0] | 0) +
          (d[(a + 191) >> 0] | 0) +
          (d[(a + -25) >> 0] | 0) +
          (d[(a + 223) >> 0] | 0)) |
          0) >>>
          4) &
        255;
      me(a | 0, b | 0, 8) | 0;
      me((a + 32) | 0, b | 0, 8) | 0;
      me((a + 64) | 0, b | 0, 8) | 0;
      me((a + 96) | 0, b | 0, 8) | 0;
      me((a + 128) | 0, b | 0, 8) | 0;
      me((a + 160) | 0, b | 0, 8) | 0;
      me((a + 192) | 0, b | 0, 8) | 0;
      me((a + 224) | 0, b | 0, 8) | 0;
      return;
    }
    function cd(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0;
      e = (b + -32) | 0;
      j = (3769 + (0 - (d[(b + -33) >> 0] | 0))) | 0;
      k = (b + -31) | 0;
      l = (b + -30) | 0;
      m = (b + -29) | 0;
      f = (b + -28) | 0;
      g = (b + -27) | 0;
      h = (b + -26) | 0;
      i = (b + -25) | 0;
      c = 0;
      while (1) {
        n = (j + (d[(b + -1) >> 0] | 0)) | 0;
        a[b >> 0] = a[(n + (d[e >> 0] | 0)) >> 0] | 0;
        a[(b + 1) >> 0] = a[(n + (d[k >> 0] | 0)) >> 0] | 0;
        a[(b + 2) >> 0] = a[(n + (d[l >> 0] | 0)) >> 0] | 0;
        a[(b + 3) >> 0] = a[(n + (d[m >> 0] | 0)) >> 0] | 0;
        a[(b + 4) >> 0] = a[(n + (d[f >> 0] | 0)) >> 0] | 0;
        a[(b + 5) >> 0] = a[(n + (d[g >> 0] | 0)) >> 0] | 0;
        a[(b + 6) >> 0] = a[(n + (d[h >> 0] | 0)) >> 0] | 0;
        a[(b + 7) >> 0] = a[(n + (d[i >> 0] | 0)) >> 0] | 0;
        c = (c + 1) | 0;
        if ((c | 0) == 8) break;
        else b = (b + 32) | 0;
      }
      return;
    }
    function dd(b) {
      b = b | 0;
      var c = 0,
        e = 0,
        f = 0,
        g = 0;
      c = (b + -32) | 0;
      f = c;
      f = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
      c = (c + 4) | 0;
      c = d[c >> 0] | (d[(c + 1) >> 0] << 8) | (d[(c + 2) >> 0] << 16) | (d[(c + 3) >> 0] << 24);
      e = b;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 32) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 64) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 96) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 128) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 160) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      e = (b + 192) | 0;
      g = e;
      a[g >> 0] = f;
      a[(g + 1) >> 0] = f >> 8;
      a[(g + 2) >> 0] = f >> 16;
      a[(g + 3) >> 0] = f >> 24;
      e = (e + 4) | 0;
      a[e >> 0] = c;
      a[(e + 1) >> 0] = c >> 8;
      a[(e + 2) >> 0] = c >> 16;
      a[(e + 3) >> 0] = c >> 24;
      b = (b + 224) | 0;
      e = b;
      a[e >> 0] = f;
      a[(e + 1) >> 0] = f >> 8;
      a[(e + 2) >> 0] = f >> 16;
      a[(e + 3) >> 0] = f >> 24;
      b = (b + 4) | 0;
      a[b >> 0] = c;
      a[(b + 1) >> 0] = c >> 8;
      a[(b + 2) >> 0] = c >> 16;
      a[(b + 3) >> 0] = c >> 24;
      return;
    }
    function ed(b) {
      b = b | 0;
      me(b | 0, a[(b + -1) >> 0] | 0, 8) | 0;
      me((b + 32) | 0, a[(b + 31) >> 0] | 0, 8) | 0;
      me((b + 64) | 0, a[(b + 63) >> 0] | 0, 8) | 0;
      me((b + 96) | 0, a[(b + 95) >> 0] | 0, 8) | 0;
      me((b + 128) | 0, a[(b + 127) >> 0] | 0, 8) | 0;
      me((b + 160) | 0, a[(b + 159) >> 0] | 0, 8) | 0;
      me((b + 192) | 0, a[(b + 191) >> 0] | 0, 8) | 0;
      me((b + 224) | 0, a[(b + 223) >> 0] | 0, 8) | 0;
      return;
    }
    function fd(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -1) >> 0] | 0) +
          4 +
          (d[(a + 31) >> 0] | 0) +
          (d[(a + 63) >> 0] | 0) +
          (d[(a + 95) >> 0] | 0) +
          (d[(a + 127) >> 0] | 0) +
          (d[(a + 159) >> 0] | 0) +
          (d[(a + 191) >> 0] | 0) +
          (d[(a + 223) >> 0] | 0)) |
          0) >>>
          3) &
        255;
      me(a | 0, b | 0, 8) | 0;
      me((a + 32) | 0, b | 0, 8) | 0;
      me((a + 64) | 0, b | 0, 8) | 0;
      me((a + 96) | 0, b | 0, 8) | 0;
      me((a + 128) | 0, b | 0, 8) | 0;
      me((a + 160) | 0, b | 0, 8) | 0;
      me((a + 192) | 0, b | 0, 8) | 0;
      me((a + 224) | 0, b | 0, 8) | 0;
      return;
    }
    function gd(a) {
      a = a | 0;
      var b = 0;
      b =
        ((((d[(a + -32) >> 0] | 0) +
          4 +
          (d[(a + -31) >> 0] | 0) +
          (d[(a + -30) >> 0] | 0) +
          (d[(a + -29) >> 0] | 0) +
          (d[(a + -28) >> 0] | 0) +
          (d[(a + -27) >> 0] | 0) +
          (d[(a + -26) >> 0] | 0) +
          (d[(a + -25) >> 0] | 0)) |
          0) >>>
          3) &
        255;
      me(a | 0, b | 0, 8) | 0;
      me((a + 32) | 0, b | 0, 8) | 0;
      me((a + 64) | 0, b | 0, 8) | 0;
      me((a + 96) | 0, b | 0, 8) | 0;
      me((a + 128) | 0, b | 0, 8) | 0;
      me((a + 160) | 0, b | 0, 8) | 0;
      me((a + 192) | 0, b | 0, 8) | 0;
      me((a + 224) | 0, b | 0, 8) | 0;
      return;
    }
    function hd(b) {
      b = b | 0;
      var c = 0,
        d = 0;
      c = b;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 32) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 64) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 96) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 128) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 160) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      c = (b + 192) | 0;
      d = c;
      a[d >> 0] = -2139062144;
      a[(d + 1) >> 0] = -2139062144 >> 8;
      a[(d + 2) >> 0] = -2139062144 >> 16;
      a[(d + 3) >> 0] = -2139062144 >> 24;
      c = (c + 4) | 0;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      b = (b + 224) | 0;
      c = b;
      a[c >> 0] = -2139062144;
      a[(c + 1) >> 0] = -2139062144 >> 8;
      a[(c + 2) >> 0] = -2139062144 >> 16;
      a[(c + 3) >> 0] = -2139062144 >> 24;
      b = (b + 4) | 0;
      a[b >> 0] = -2139062144;
      a[(b + 1) >> 0] = -2139062144 >> 8;
      a[(b + 2) >> 0] = -2139062144 >> 16;
      a[(b + 3) >> 0] = -2139062144 >> 24;
      return;
    }
    function id(b, c, e) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      if ((e | 0) != 1) {
        f = 0;
        while (1) {
          g = ((((d[b >> 0] | 0) + -120) >> 4) + (d[c >> 0] | 0)) | 0;
          a[c >> 0] = g >>> 0 > 255 ? ((g >>> 31) + 255) | 0 : g;
          g = (c + 1) | 0;
          h = ((((d[(b + 1) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 2) | 0;
          h = ((((d[(b + 2) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 3) | 0;
          h = ((((d[(b + 3) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 4) | 0;
          h = ((((d[(b + 4) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 5) | 0;
          h = ((((d[(b + 5) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 6) | 0;
          h = ((((d[(b + 6) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          g = (c + 7) | 0;
          h = ((((d[(b + 7) >> 0] | 0) + -120) >> 4) + (d[g >> 0] | 0)) | 0;
          a[g >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
          f = (f + 1) | 0;
          if ((f | 0) == 8) break;
          else {
            c = (c + e) | 0;
            b = (b + 8) | 0;
          }
        }
        return;
      }
      e = c;
      g = 0;
      f = a[c >> 0] | 0;
      c = a[(c + 6) >> 0] | 0;
      while (1) {
        h = ((((d[b >> 0] | 0) + -120) >> 4) + (f & 255)) | 0;
        a[e >> 0] = h >>> 0 > 255 ? ((h >>> 31) + 255) | 0 : h;
        h = e;
        e = (e + 1) | 0;
        i = ((((d[(b + 1) >> 0] | 0) + -120) >> 4) + (d[e >> 0] | 0)) | 0;
        f = (i >>> 0 > 255 ? ((i >>> 31) + 255) | 0 : i) & 255;
        a[e >> 0] = f;
        i = (h + 2) | 0;
        j = ((((d[(b + 2) >> 0] | 0) + -120) >> 4) + (d[i >> 0] | 0)) | 0;
        a[i >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
        i = (h + 3) | 0;
        j = ((((d[(b + 3) >> 0] | 0) + -120) >> 4) + (d[i >> 0] | 0)) | 0;
        a[i >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
        i = (h + 4) | 0;
        j = ((((d[(b + 4) >> 0] | 0) + -120) >> 4) + (d[i >> 0] | 0)) | 0;
        a[i >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
        i = (h + 5) | 0;
        j = ((((d[(b + 5) >> 0] | 0) + -120) >> 4) + (d[i >> 0] | 0)) | 0;
        a[i >> 0] = j >>> 0 > 255 ? ((j >>> 31) + 255) | 0 : j;
        i = ((((d[(b + 6) >> 0] | 0) + -120) >> 4) + (c & 255)) | 0;
        a[(h + 6) >> 0] = i >>> 0 > 255 ? ((i >>> 31) + 255) | 0 : i;
        h = (h + 7) | 0;
        i = ((((d[(b + 7) >> 0] | 0) + -120) >> 4) + (d[h >> 0] | 0)) | 0;
        c = (i >>> 0 > 255 ? ((i >>> 31) + 255) | 0 : i) & 255;
        a[h >> 0] = c;
        g = (g + 1) | 0;
        if ((g | 0) == 8) break;
        else b = (b + 8) | 0;
      }
      return;
    }
    function jd(b, c, e, f, g, h, i) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      var j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0;
      t = (g << 1) | 1;
      if ((f | 0) <= 0) return;
      r = O(c, -2) | 0;
      s = (0 - c) | 0;
      while (1) {
        q = f;
        f = (f + -1) | 0;
        if (kd(b, c, t, h) | 0) {
          l = (b + r) | 0;
          n = d[l >> 0] | 0;
          o = (b + s) | 0;
          p = d[o >> 0] | 0;
          j = (b + c) | 0;
          g = a[j >> 0] | 0;
          k = a[b >> 0] | 0;
          if ((d[(4536 + (n - p)) >> 0] | 0) <= (i | 0)) {
            m = g & 255;
            g = k & 255;
            if ((d[(4536 + (m - g)) >> 0] | 0) > (i | 0)) {
              j = m;
              u = 7;
            } else {
              w = (((g - p) | 0) * 3) | 0;
              v = a[(3401 + ((w + 4) >> 3)) >> 0] | 0;
              w = a[(3401 + ((w + 3) >> 3)) >> 0] | 0;
              k = (v + 1) >> 1;
              a[l >> 0] = a[(3769 + (k + n)) >> 0] | 0;
              a[o >> 0] = a[(3769 + (w + p)) >> 0] | 0;
              a[b >> 0] = a[(3769 + (g - v)) >> 0] | 0;
              g = (m - k) | 0;
            }
          } else {
            j = g & 255;
            g = k & 255;
            u = 7;
          }
          if ((u | 0) == 7) {
            u = 0;
            j = ((a[(2268 + (n - j)) >> 0] | 0) + ((((g - p) | 0) * 3) | 0)) | 0;
            w = a[(3401 + ((j + 4) >> 3)) >> 0] | 0;
            a[o >> 0] = a[(3769 + ((a[(3401 + ((j + 3) >> 3)) >> 0] | 0) + p)) >> 0] | 0;
            j = b;
            g = (g - w) | 0;
          }
          a[j >> 0] = a[(3769 + g) >> 0] | 0;
        }
        if ((q | 0) <= 1) break;
        else b = (b + e) | 0;
      }
      return;
    }
    function kd(a, b, c, e) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      l = d[(a + (O(b, -3) | 0)) >> 0] | 0;
      f = d[(a + (O(b, -2) | 0)) >> 0] | 0;
      g = d[(a + (0 - b)) >> 0] | 0;
      h = d[a >> 0] | 0;
      i = d[(a + b) >> 0] | 0;
      j = d[(a + (b << 1)) >> 0] | 0;
      k = d[(a + ((b * 3) | 0)) >> 0] | 0;
      if (((((d[(4536 + (g - h)) >> 0] | 0) << 2) + (d[(4536 + (f - i)) >> 0] | 0)) | 0) > (c | 0)) {
        l = 0;
        return l | 0;
      }
      if (
        (
          (
            (
              (d[(4536 + ((d[(a + (O(b, -4) | 0)) >> 0] | 0) - l)) >> 0] | 0 | 0) <= (e | 0)
                ? (d[(4536 + (l - f)) >> 0] | 0 | 0) <= (e | 0)
                : 0
            )
              ? (d[(4536 + (f - g)) >> 0] | 0 | 0) <= (e | 0)
              : 0
          )
            ? (d[(4536 + (k - j)) >> 0] | 0 | 0) <= (e | 0)
            : 0
        )
          ? (d[(4536 + (j - i)) >> 0] | 0 | 0) <= (e | 0)
          : 0
      )
        a = (d[(4536 + (i - h)) >> 0] | 0 | 0) <= (e | 0);
      else a = 0;
      l = a & 1;
      return l | 0;
    }
    function ld(b, c, e, f, g, h, i) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      var j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0;
      v = (g << 1) | 1;
      if ((f | 0) <= 0) return;
      r = O(c, -2) | 0;
      s = (0 - c) | 0;
      t = O(c, -3) | 0;
      u = c << 1;
      while (1) {
        q = f;
        f = (f + -1) | 0;
        if (kd(b, c, v, h) | 0) {
          l = (b + r) | 0;
          n = d[l >> 0] | 0;
          o = (b + s) | 0;
          p = d[o >> 0] | 0;
          m = (b + c) | 0;
          g = a[m >> 0] | 0;
          k = a[b >> 0] | 0;
          if ((d[(4536 + (n - p)) >> 0] | 0) <= (i | 0)) {
            j = g & 255;
            g = k & 255;
            if ((d[(4536 + (j - g)) >> 0] | 0) > (i | 0)) w = 7;
            else {
              B = (b + t) | 0;
              y = (b + u) | 0;
              x = d[y >> 0] | 0;
              k = a[(2268 + ((a[(2268 + (n - j)) >> 0] | 0) + ((((g - p) | 0) * 3) | 0))) >> 0] | 0;
              A = (((k * 27) | 0) + 63) >> 7;
              z = (((k * 18) | 0) + 63) >> 7;
              k = (((k * 9) | 0) + 63) >> 7;
              a[B >> 0] = a[(3769 + (k + (d[B >> 0] | 0))) >> 0] | 0;
              a[l >> 0] = a[(3769 + (z + n)) >> 0] | 0;
              a[o >> 0] = a[(3769 + (A + p)) >> 0] | 0;
              a[b >> 0] = a[(3769 + (g - A)) >> 0] | 0;
              a[m >> 0] = a[(3769 + (j - z)) >> 0] | 0;
              j = y;
              g = (x - k) | 0;
            }
          } else {
            j = g & 255;
            g = k & 255;
            w = 7;
          }
          if ((w | 0) == 7) {
            w = 0;
            j = ((a[(2268 + (n - j)) >> 0] | 0) + ((((g - p) | 0) * 3) | 0)) | 0;
            B = a[(3401 + ((j + 4) >> 3)) >> 0] | 0;
            a[o >> 0] = a[(3769 + ((a[(3401 + ((j + 3) >> 3)) >> 0] | 0) + p)) >> 0] | 0;
            j = b;
            g = (g - B) | 0;
          }
          a[j >> 0] = a[(3769 + g) >> 0] | 0;
        }
        if ((q | 0) <= 1) break;
        else b = (b + e) | 0;
      }
      return;
    }
    function md(e, f) {
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0;
      i = l;
      l = (l + 64) | 0;
      h = i;
      m = b[e >> 1] | 0;
      o = b[(e + 16) >> 1] | 0;
      n = (o + m) | 0;
      o = (m - o) | 0;
      m = b[(e + 8) >> 1] | 0;
      g = b[(e + 24) >> 1] | 0;
      k = (((m * 35468) >> 16) - g - ((g * 20091) >> 16)) | 0;
      g = (((m * 20091) >> 16) + m + ((g * 35468) >> 16)) | 0;
      c[h >> 2] = g + n;
      c[(h + 4) >> 2] = k + o;
      c[(h + 8) >> 2] = o - k;
      c[(h + 12) >> 2] = n - g;
      g = b[(e + 2) >> 1] | 0;
      n = b[(e + 18) >> 1] | 0;
      k = (n + g) | 0;
      n = (g - n) | 0;
      g = b[(e + 10) >> 1] | 0;
      o = b[(e + 26) >> 1] | 0;
      m = (((g * 35468) >> 16) - o - ((o * 20091) >> 16)) | 0;
      o = (((g * 20091) >> 16) + g + ((o * 35468) >> 16)) | 0;
      g = (o + k) | 0;
      c[(h + 16) >> 2] = g;
      c[(h + 20) >> 2] = m + n;
      c[(h + 24) >> 2] = n - m;
      c[(h + 28) >> 2] = k - o;
      o = b[(e + 4) >> 1] | 0;
      k = b[(e + 20) >> 1] | 0;
      m = (k + o) | 0;
      k = (o - k) | 0;
      o = b[(e + 12) >> 1] | 0;
      n = b[(e + 28) >> 1] | 0;
      j = (((o * 35468) >> 16) - n - ((n * 20091) >> 16)) | 0;
      n = (((o * 20091) >> 16) + o + ((n * 35468) >> 16)) | 0;
      c[(h + 32) >> 2] = n + m;
      c[(h + 36) >> 2] = j + k;
      c[(h + 40) >> 2] = k - j;
      c[(h + 44) >> 2] = m - n;
      n = b[(e + 6) >> 1] | 0;
      m = b[(e + 22) >> 1] | 0;
      j = (m + n) | 0;
      m = (n - m) | 0;
      n = b[(e + 14) >> 1] | 0;
      e = b[(e + 30) >> 1] | 0;
      k = (((n * 35468) >> 16) - e - ((e * 20091) >> 16)) | 0;
      e = (((n * 20091) >> 16) + n + ((e * 35468) >> 16)) | 0;
      c[(h + 48) >> 2] = e + j;
      c[(h + 52) >> 2] = k + m;
      c[(h + 56) >> 2] = m - k;
      c[(h + 60) >> 2] = j - e;
      e = 0;
      while (1) {
        n = ((c[h >> 2] | 0) + 4) | 0;
        j = c[(h + 32) >> 2] | 0;
        m = (n + j) | 0;
        j = (n - j) | 0;
        n = c[(h + 48) >> 2] | 0;
        k = (((g * 35468) >> 16) - n - ((n * 20091) >> 16)) | 0;
        n = (((g * 20091) >> 16) + g + ((n * 35468) >> 16)) | 0;
        o = (((n + m) >> 3) + (d[f >> 0] | 0)) | 0;
        a[f >> 0] = o >>> 0 > 255 ? ((o >>> 31) + 255) | 0 : o;
        o = (f + 1) | 0;
        g = (((k + j) >> 3) + (d[o >> 0] | 0)) | 0;
        a[o >> 0] = g >>> 0 > 255 ? ((g >>> 31) + 255) | 0 : g;
        o = (f + 2) | 0;
        k = ((d[o >> 0] | 0) + ((j - k) >> 3)) | 0;
        a[o >> 0] = k >>> 0 > 255 ? ((k >>> 31) + 255) | 0 : k;
        o = (f + 3) | 0;
        n = ((d[o >> 0] | 0) + ((m - n) >> 3)) | 0;
        a[o >> 0] = n >>> 0 > 255 ? ((n >>> 31) + 255) | 0 : n;
        e = (e + 1) | 0;
        if ((e | 0) == 4) break;
        g = c[(h + 20) >> 2] | 0;
        f = (f + 32) | 0;
        h = (h + 4) | 0;
      }
      l = i;
      return;
    }
    function nd(b, e, f, g, h, i, j, k) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0;
      G = b;
      H = (k | 0) != 0;
      if (H) w = c[(k + 8) >> 2] | 0;
      else w = 0;
      if (((b | 0) == 0) | (e >>> 0 < 12)) {
        h = 7;
        return h | 0;
      }
      if (e >>> 0 > 11)
        if (!(Kd(b, 8636) | 0)) {
          if (Kd((b + 8) | 0, 8641) | 0) {
            h = 3;
            return h | 0;
          }
          l = (d[(b + 5) >> 0] << 8) | d[(b + 4) >> 0] | (((d[(b + 7) >> 0] << 8) | d[(b + 6) >> 0]) << 16);
          if (((l + -12) | 0) >>> 0 > 4294967274) {
            h = 3;
            return h | 0;
          }
          if (((w | 0) != 0) & (l >>> 0 > ((e + -8) | 0) >>> 0)) {
            h = 7;
            return h | 0;
          } else {
            m = (e + -12) | 0;
            b = (b + 12) | 0;
            B = 9;
          }
        } else {
          m = e;
          b = G;
          F = 0;
          s = 0;
        }
      else {
        m = e;
        b = G;
        l = 0;
        B = 9;
      }
      if ((B | 0) == 9)
        if (m >>> 0 < 8) {
          h = 7;
          return h | 0;
        } else {
          F = l;
          s = (l | 0) != 0;
        }
      p = b;
      if (!(Kd(p, 5052) | 0)) {
        if (((d[(p + 5) >> 0] << 8) | d[(p + 4) >> 0] | (((d[(p + 7) >> 0] << 8) | d[(p + 6) >> 0]) << 16) | 0) != 10) {
          h = 3;
          return h | 0;
        }
        if (m >>> 0 < 18) {
          h = 7;
          return h | 0;
        }
        b = d[(p + 8) >> 0] | 0;
        l = (((d[(p + 13) >> 0] << 8) | d[(p + 12) >> 0] | (d[(p + 14) >> 0] << 16)) + 1) | 0;
        o = (((d[(p + 16) >> 0] << 8) | d[(p + 15) >> 0] | (d[(p + 17) >> 0] << 16)) + 1) | 0;
        D = O(l, o) | 0;
        E = (o | 0) == 0;
        if (E ? 0 : (((D >>> 0) / ((E ? 1 : o) >>> 0)) | 0 | 0) != (l | 0)) {
          h = 3;
          return h | 0;
        }
        q = b & 2;
        if (s) {
          r = b;
          E = 1;
          D = o;
          m = (m + -18) | 0;
          v = q >>> 1;
          b = (p + 18) | 0;
          p = 1;
          o = (q | 0) != 0;
        } else {
          h = 3;
          return h | 0;
        }
      } else {
        r = 0;
        E = 0;
        D = 0;
        l = 0;
        v = 0;
        p = 0;
        o = 0;
      }
      C = (h | 0) == 0;
      if (!C) c[h >> 2] = (r >>> 4) & 1;
      if (i | 0) c[i >> 2] = v;
      t = (j | 0) == 0;
      if (!t) c[j >> 2] = 0;
      u = (k | 0) == 0;
      a: do
        if (!(u & (p & o))) {
          b: do
            if (m >>> 0 >= 4) {
              if (!(s & ((E | 0) != 0)))
                if ((E | F | 0) == 0 ? ((n = b), (Kd(n, 5057) | 0) == 0) : 0) B = 27;
                else {
                  o = b;
                  i = 0;
                  b = 0;
                }
              else {
                n = b;
                B = 27;
              }
              c: do
                if ((B | 0) == 27) {
                  if (m >>> 0 < 8) {
                    b = 0;
                    break b;
                  }
                  if (!F) {
                    o = b;
                    s = 0;
                    b = 0;
                    while (1) {
                      q = (d[(n + 5) >> 0] << 8) | d[(n + 4) >> 0] | (((d[(n + 7) >> 0] << 8) | d[(n + 6) >> 0]) << 16);
                      if (q >>> 0 > 4294967286) {
                        b = 3;
                        break;
                      }
                      p = (q + 9) & -2;
                      if (!(Kd(n, 5062) | 0)) {
                        i = s;
                        break c;
                      }
                      if (!(Kd(n, 5067) | 0)) {
                        i = s;
                        break c;
                      }
                      if (m >>> 0 < p >>> 0) break b;
                      r = (Kd(n, 5057) | 0) == 0;
                      b = r ? (n + 8) | 0 : b;
                      o = (n + p) | 0;
                      m = (m - p) | 0;
                      if (m >>> 0 < 8) break b;
                      else {
                        n = o;
                        s = r ? q : s;
                      }
                    }
                    return b | 0;
                  } else {
                    q = 22;
                    o = b;
                    i = 0;
                    b = 0;
                  }
                  while (1) {
                    r = (d[(n + 5) >> 0] << 8) | d[(n + 4) >> 0] | (((d[(n + 7) >> 0] << 8) | d[(n + 6) >> 0]) << 16);
                    if (r >>> 0 > 4294967286) {
                      b = 3;
                      B = 99;
                      break;
                    }
                    p = (r + 9) & -2;
                    q = (p + q) | 0;
                    if (q >>> 0 > F >>> 0) {
                      b = 3;
                      B = 99;
                      break;
                    }
                    if (!(Kd(n, 5062) | 0)) break c;
                    if (!(Kd(n, 5067) | 0)) break c;
                    if (m >>> 0 < p >>> 0) break b;
                    s = (Kd(n, 5057) | 0) == 0;
                    b = s ? (n + 8) | 0 : b;
                    o = (n + p) | 0;
                    m = (m - p) | 0;
                    if (m >>> 0 < 8) break b;
                    else {
                      n = o;
                      i = s ? r : i;
                    }
                  }
                  if ((B | 0) == 99) return b | 0;
                }
              while (0);
              p = o;
              n = (Kd(p, 5067) | 0) == 0;
              q = n & 1;
              if (m >>> 0 >= 8) {
                if (n | ((Kd(p, 5062) | 0) == 0)) {
                  n = (d[(p + 5) >> 0] << 8) | d[(p + 4) >> 0] | (((d[(p + 7) >> 0] << 8) | d[(p + 6) >> 0]) << 16);
                  if ((F >>> 0 > 11) & (n >>> 0 > ((F + -12) | 0) >>> 0)) {
                    h = 3;
                    return h | 0;
                  }
                  m = (m + -8) | 0;
                  if (((w | 0) != 0) & (n >>> 0 > m >>> 0)) break;
                  x = m;
                  A = (p + 8) | 0;
                  y = n;
                  w = q;
                } else {
                  if ((a[p >> 0] | 0) == 47) n = (d[(p + 4) >> 0] | 0) < 32;
                  else n = 0;
                  x = m;
                  A = o;
                  y = m;
                  w = n & 1;
                }
                if (y >>> 0 > 4294967286) {
                  h = 3;
                  return h | 0;
                }
                m = (w | 0) != 0;
                if (!(t | ((v | 0) != 0))) c[j >> 2] = m ? 2 : 1;
                do
                  if (m) {
                    if (x >>> 0 < 5) break b;
                    u = A;
                    if (!A) {
                      h = 3;
                      return h | 0;
                    }
                    if ((a[u >> 0] | 0) != 47) {
                      h = 3;
                      return h | 0;
                    }
                    if ((d[(u + 4) >> 0] | 0) >= 32) {
                      h = 3;
                      return h | 0;
                    }
                    p = x >>> 0 < 8 ? x : 8;
                    switch (p & 15) {
                      case 0: {
                        m = 0;
                        n = 0;
                        break;
                      }
                      case 1: {
                        m = 47;
                        n = 0;
                        B = 65;
                        break;
                      }
                      default: {
                        o = 1;
                        m = 47;
                        n = 0;
                        do {
                          B = oe(d[(u + o) >> 0] | 0, 0, (o << 3) | 0) | 0;
                          m = B | m;
                          n = z | n;
                          o = (o + 1) | 0;
                        } while (o >>> 0 < p >>> 0);
                        B = 65;
                      }
                    }
                    if (x >>> 0 > 8) {
                      q = ne(m | 0, n | 0, 8) | 0;
                      n = z;
                      j = oe(d[(u + p) >> 0] | 0, 0, 56) | 0;
                      o = (p + 1) | 0;
                      p = 0;
                      q = j | q;
                      n = z | n;
                    } else {
                      o = p;
                      p = 8;
                      q = m;
                    }
                    if (!((((m & 255) | 0) == 47) & (0 == 0))) {
                      h = 3;
                      return h | 0;
                    }
                    s = ne(q | 0, n | 0, p | 0) | 0;
                    s = s & 16383;
                    m = o;
                    o = (p + 14) | 0;
                    while (1) {
                      if (m >>> 0 >= x >>> 0) {
                        B = 72;
                        break;
                      }
                      q = ne(q | 0, n | 0, 8) | 0;
                      n = z;
                      j = oe(d[(u + m) >> 0] | 0, 0, 56) | 0;
                      q = j | q;
                      n = z | n;
                      m = (m + 1) | 0;
                      o = (o + -8) | 0;
                      if ((o | 0) <= 7) {
                        p = o;
                        r = q;
                        o = n;
                        break;
                      }
                    }
                    do
                      if ((B | 0) == 72) {
                        if (((m | 0) == (x | 0)) & ((o | 0) > 64)) b = 3;
                        else {
                          p = o;
                          r = q;
                          o = n;
                          break;
                        }
                        return b | 0;
                      }
                    while (0);
                    n = (s + 1) | 0;
                    s = ne(r | 0, o | 0, (p & 63) | 0) | 0;
                    s = s & 16383;
                    q = (p + 14) | 0;
                    d: do
                      if ((q | 0) > 7) {
                        while (1) {
                          if (m >>> 0 >= x >>> 0) break;
                          r = ne(r | 0, o | 0, 8) | 0;
                          o = z;
                          j = oe(d[(u + m) >> 0] | 0, 0, 56) | 0;
                          r = j | r;
                          o = z | o;
                          m = (m + 1) | 0;
                          q = (q + -8) | 0;
                          if ((q | 0) <= 7) {
                            p = m;
                            break d;
                          }
                        }
                        if (((m | 0) == (x | 0)) & ((q | 0) > 64)) b = 3;
                        else {
                          p = m;
                          break;
                        }
                        return b | 0;
                      } else p = m;
                    while (0);
                    m = (s + 1) | 0;
                    t = ne(r | 0, o | 0, (q & 63) | 0) | 0;
                    t = t & 1;
                    s = (q + 1) | 0;
                    e: do
                      if ((q | 0) > 6) {
                        q = s;
                        while (1) {
                          if (p >>> 0 >= x >>> 0) break;
                          r = ne(r | 0, o | 0, 8) | 0;
                          o = z;
                          j = oe(d[(u + p) >> 0] | 0, 0, 56) | 0;
                          r = j | r;
                          o = z | o;
                          p = (p + 1) | 0;
                          q = (q + -8) | 0;
                          if ((q | 0) <= 7) break e;
                        }
                        if (((p | 0) == (x | 0)) & ((q | 0) > 64)) b = 3;
                        else break;
                        return b | 0;
                      } else q = s;
                    while (0);
                    r = ne(r | 0, o | 0, (q & 63) | 0) | 0;
                    r = r & 7;
                    o = (q + 3) | 0;
                    f: do
                      if ((o | 0) > 7) {
                        while (1) {
                          if (p >>> 0 >= x >>> 0) break;
                          o = (o + -8) | 0;
                          if ((o | 0) > 7) p = (p + 1) | 0;
                          else {
                            B = 85;
                            break f;
                          }
                        }
                        if ((((o | 0) < 65) | ((p | 0) != (x | 0))) & ((r | 0) == 0)) break;
                        else b = 3;
                        return b | 0;
                      } else B = 85;
                    while (0);
                    do
                      if ((B | 0) == 85) {
                        if (!r) break;
                        else b = 3;
                        return b | 0;
                      }
                    while (0);
                    if (C) break;
                    c[h >> 2] = t;
                  } else {
                    if (x >>> 0 < 10) break b;
                    o = A;
                    if (!(((A | 0) != 0) & (((x + -3) | 0) >>> 0 > 2))) {
                      h = 3;
                      return h | 0;
                    }
                    if ((a[(o + 3) >> 0] | 0) != -99) {
                      h = 3;
                      return h | 0;
                    }
                    if ((a[(o + 4) >> 0] | 0) != 1) {
                      h = 3;
                      return h | 0;
                    }
                    if ((a[(o + 5) >> 0] | 0) != 42) {
                      h = 3;
                      return h | 0;
                    }
                    B = d[o >> 0] | 0;
                    n = ((d[(o + 7) >> 0] << 8) & 16128) | d[(o + 6) >> 0];
                    m = ((d[(o + 9) >> 0] << 8) & 16128) | d[(o + 8) >> 0];
                    if (
                      !(
                        ((B & 8) >>> 0 < 7) &
                        (((B & 17) | 0) == 16) &
                        ((((d[(o + 1) >> 0] << 8) | B | (d[(o + 2) >> 0] << 16)) >>> 5) >>> 0 < y >>> 0)
                      )
                    ) {
                      h = 3;
                      return h | 0;
                    }
                    if (((n | 0) == 0) | ((m | 0) == 0)) b = 3;
                    else break;
                    return b | 0;
                  }
                while (0);
                if (E | 0 ? !(((l | 0) == (n | 0)) & ((D | 0) == (m | 0))) : 0) {
                  h = 3;
                  return h | 0;
                }
                if (!H) {
                  l = n;
                  break a;
                }
                c[k >> 2] = G;
                c[(k + 4) >> 2] = e;
                l = (k + 8) | 0;
                c[l >> 2] = 0;
                c[(l + 4) >> 2] = 0;
                c[(k + 16) >> 2] = b;
                c[(k + 20) >> 2] = i;
                c[(k + 24) >> 2] = y;
                c[(k + 28) >> 2] = F;
                c[(k + 32) >> 2] = w;
                c[(k + 12) >> 2] = A - G;
                l = n;
                break a;
              }
            } else b = 0;
          while (0);
          if (u & ((E | 0) != 0)) m = D;
          else {
            h = 7;
            return h | 0;
          }
        } else {
          m = D;
          b = 0;
        }
      while (0);
      if (!C) c[h >> 2] = c[h >> 2] | ((b | 0) != 0);
      if (f | 0) c[f >> 2] = l;
      if (!g) {
        h = 0;
        return h | 0;
      }
      c[g >> 2] = m;
      h = 0;
      return h | 0;
    }
    function od(f, g) {
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0;
      if (!f) {
        f = 0;
        return f | 0;
      }
      c[f >> 2] = 0;
      v = (f + 8) | 0;
      c[v >> 2] = 5990;
      if (!g) {
        c[f >> 2] = 2;
        c[v >> 2] = 5993;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      k = c[(g + 64) >> 2] | 0;
      l = c[(g + 60) >> 2] | 0;
      if (l >>> 0 < 4) {
        c[f >> 2] = 7;
        c[v >> 2] = 6030;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      h = d[k >> 0] | 0;
      m = (d[(k + 1) >> 0] << 8) | h | (d[(k + 2) >> 0] << 16);
      i = ((h & 1) ^ 1) & 255;
      t = (f + 40) | 0;
      a[t >> 0] = i;
      C = (h >>> 1) & 7;
      a[(f + 41) >> 0] = C;
      h = (h >>> 4) & 1;
      a[(f + 42) >> 0] = h;
      n = m >>> 5;
      c[(f + 44) >> 2] = n;
      if ((C & 255) > 3) {
        c[f >> 2] = 3;
        c[v >> 2] = 6048;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      if (!((h << 24) >> 24)) {
        c[f >> 2] = 4;
        c[v >> 2] = 6079;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      h = (k + 3) | 0;
      j = (l + -3) | 0;
      i = (i << 24) >> 24 == 0;
      do
        if (!i) {
          if (j >>> 0 < 7) {
            c[f >> 2] = 7;
            c[v >> 2] = 6102;
            c[(f + 4) >> 2] = 0;
            f = 0;
            return f | 0;
          }
          if (((a[h >> 0] | 0) == -99 ? (a[(k + 4) >> 0] | 0) == 1 : 0) ? (a[(k + 5) >> 0] | 0) == 42 : 0) {
            C = (k + 7) | 0;
            j = ((d[C >> 0] << 8) & 16128) | d[(k + 6) >> 0];
            b[(f + 48) >> 1] = j;
            a[(f + 52) >> 0] = (d[C >> 0] | 0) >>> 6;
            C = (k + 9) | 0;
            h = ((d[C >> 0] << 8) & 16128) | d[(k + 8) >> 0];
            b[(f + 50) >> 1] = h;
            a[(f + 53) >> 0] = (d[C >> 0] | 0) >>> 6;
            c[(f + 288) >> 2] = ((j + 15) | 0) >>> 4;
            c[(f + 292) >> 2] = ((h + 15) | 0) >>> 4;
            c[g >> 2] = j;
            c[(g + 4) >> 2] = h;
            c[(g + 72) >> 2] = 0;
            c[(g + 84) >> 2] = 0;
            c[(g + 76) >> 2] = 0;
            c[(g + 80) >> 2] = j;
            c[(g + 88) >> 2] = h;
            c[(g + 92) >> 2] = 0;
            c[(g + 96) >> 2] = j;
            c[(g + 100) >> 2] = h;
            c[(g + 12) >> 2] = j;
            c[(g + 16) >> 2] = h;
            h = (f + 904) | 0;
            b[h >> 1] = 65535;
            a[(h + 2) >> 0] = 255;
            c[(f + 104) >> 2] = 0;
            c[(f + 108) >> 2] = 0;
            c[(f + 112) >> 2] = 1;
            c[(f + 116) >> 2] = 0;
            c[(f + 120) >> 2] = 0;
            h = (k + 10) | 0;
            j = (l + -10) | 0;
            break;
          }
          c[f >> 2] = 3;
          c[v >> 2] = 6130;
          c[(f + 4) >> 2] = 0;
          f = 0;
          return f | 0;
        }
      while (0);
      if (j >>> 0 < n >>> 0) {
        c[f >> 2] = 7;
        c[v >> 2] = 6144;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      x = (f + 12) | 0;
      y = (f + 16) | 0;
      c[y >> 2] = 254;
      c[x >> 2] = 0;
      z = (f + 20) | 0;
      c[z >> 2] = -8;
      A = (f + 36) | 0;
      c[A >> 2] = 0;
      B = (f + 24) | 0;
      c[B >> 2] = h;
      k = (h + n) | 0;
      C = (f + 28) | 0;
      c[C >> 2] = k;
      s = m >>> 0 > 127 ? (k + -4 + 1) | 0 : h;
      w = (f + 32) | 0;
      c[w >> 2] = s;
      do
        if (s >>> 0 <= h >>> 0)
          if (!n) {
            c[x >> 2] = 0;
            c[z >> 2] = 0;
            c[A >> 2] = 1;
            break;
          } else {
            c[z >> 2] = 0;
            c[B >> 2] = h + 1;
            c[x >> 2] = d[h >> 0];
            break;
          }
        else {
          s = d[h >> 0] | (d[(h + 1) >> 0] << 8) | (d[(h + 2) >> 0] << 16) | (d[(h + 3) >> 0] << 24);
          c[B >> 2] = h + 3;
          c[x >> 2] = (ye(s | 0) | 0) >>> 8;
          c[z >> 2] = 16;
        }
      while (0);
      g = (j - n) | 0;
      if (!i) {
        a[(f + 54) >> 0] = sd(x, 1) | 0;
        a[(f + 55) >> 0] = sd(x, 1) | 0;
      }
      r = sd(x, 1) | 0;
      s = (f + 104) | 0;
      c[s >> 2] = r;
      if (r) {
        i = (f + 108) | 0;
        c[i >> 2] = sd(x, 1) | 0;
        if (sd(x, 1) | 0) {
          c[(f + 112) >> 2] = sd(x, 1) | 0;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 7) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 116) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 7) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 117) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 7) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 118) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 7) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 119) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 6) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 120) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 6) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 121) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 6) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 122) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = 0;
          else {
            h = sd(x, 6) | 0;
            r = (sd(x, 1) | 0) != 0;
            h = (r ? (0 - h) | 0 : h) & 255;
          }
          a[(f + 123) >> 0] = h;
        }
        if (c[i >> 2] | 0) {
          if (!(sd(x, 1) | 0)) h = -1;
          else h = (sd(x, 8) | 0) & 255;
          a[(f + 904) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = -1;
          else h = (sd(x, 8) | 0) & 255;
          a[(f + 905) >> 0] = h;
          if (!(sd(x, 1) | 0)) h = -1;
          else h = (sd(x, 8) | 0) & 255;
          a[(f + 906) >> 0] = h;
        }
      } else c[(f + 108) >> 2] = 0;
      if (c[A >> 2] | 0) {
        if (c[f >> 2] | 0) {
          f = 0;
          return f | 0;
        }
        c[f >> 2] = 3;
        c[v >> 2] = 6165;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      h = (f + 56) | 0;
      c[h >> 2] = sd(x, 1) | 0;
      i = (f + 60) | 0;
      c[i >> 2] = sd(x, 6) | 0;
      c[(f + 64) >> 2] = sd(x, 3) | 0;
      r = sd(x, 1) | 0;
      c[(f + 68) >> 2] = r;
      do
        if (r | 0 ? sd(x, 1) | 0 : 0) {
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 72) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 76) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 80) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 84) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 88) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 92) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (sd(x, 1) | 0) {
            r = sd(x, 6) | 0;
            q = (sd(x, 1) | 0) != 0;
            c[(f + 96) >> 2] = q ? (0 - r) | 0 : r;
          }
          if (!(sd(x, 1) | 0)) break;
          r = sd(x, 6) | 0;
          q = (sd(x, 1) | 0) != 0;
          c[(f + 100) >> 2] = q ? (0 - r) | 0 : r;
        }
      while (0);
      if (!(c[i >> 2] | 0)) h = 0;
      else h = c[h >> 2] | 0 ? 1 : 2;
      c[(f + 2308) >> 2] = h;
      if (c[A >> 2] | 0) {
        if (c[f >> 2] | 0) {
          f = 0;
          return f | 0;
        }
        c[f >> 2] = 3;
        c[v >> 2] = 6193;
        c[(f + 4) >> 2] = 0;
        f = 0;
        return f | 0;
      }
      q = (k + g) | 0;
      r = ((1 << (sd(x, 2) | 0)) + -1) | 0;
      c[(f + 312) >> 2] = r;
      h = (r * 3) | 0;
      if (g >>> 0 >= h >>> 0) {
        i = (k + h) | 0;
        h = (g - h) | 0;
        if (r) {
          p = 0;
          n = k;
          while (1) {
            g = (d[(n + 1) >> 0] << 8) | d[n >> 0] | (d[(n + 2) >> 0] << 16);
            g = g >>> 0 > h >>> 0 ? h : g;
            c[(f + 316 + ((p * 28) | 0) + 4) >> 2] = 254;
            j = (f + 316 + ((p * 28) | 0)) | 0;
            c[j >> 2] = 0;
            k = (f + 316 + ((p * 28) | 0) + 8) | 0;
            c[k >> 2] = -8;
            l = (f + 316 + ((p * 28) | 0) + 24) | 0;
            c[l >> 2] = 0;
            m = (f + 316 + ((p * 28) | 0) + 12) | 0;
            c[m >> 2] = i;
            o = (i + g) | 0;
            c[(f + 316 + ((p * 28) | 0) + 16) >> 2] = o;
            D = g >>> 0 > 3 ? (o + -4 + 1) | 0 : i;
            c[(f + 316 + ((p * 28) | 0) + 20) >> 2] = D;
            do
              if (D >>> 0 <= i >>> 0)
                if ((g | 0) > 0) {
                  c[k >> 2] = 0;
                  c[m >> 2] = i + 1;
                  c[j >> 2] = d[i >> 0];
                  break;
                } else {
                  c[j >> 2] = 0;
                  c[k >> 2] = 0;
                  c[l >> 2] = 1;
                  break;
                }
              else {
                D = d[i >> 0] | (d[(i + 1) >> 0] << 8) | (d[(i + 2) >> 0] << 16) | (d[(i + 3) >> 0] << 24);
                c[m >> 2] = i + 3;
                c[j >> 2] = (ye(D | 0) | 0) >>> 8;
                c[k >> 2] = 16;
              }
            while (0);
            h = (h - g) | 0;
            p = (p + 1) | 0;
            if ((p | 0) == (r | 0)) {
              i = o;
              break;
            } else {
              i = o;
              n = (n + 3) | 0;
            }
          }
        }
        c[(f + 316 + ((r * 28) | 0) + 4) >> 2] = 254;
        g = (f + 316 + ((r * 28) | 0)) | 0;
        c[g >> 2] = 0;
        j = (f + 316 + ((r * 28) | 0) + 8) | 0;
        c[j >> 2] = -8;
        k = (f + 316 + ((r * 28) | 0) + 24) | 0;
        c[k >> 2] = 0;
        l = (f + 316 + ((r * 28) | 0) + 12) | 0;
        c[l >> 2] = i;
        D = (i + h) | 0;
        c[(f + 316 + ((r * 28) | 0) + 16) >> 2] = D;
        D = h >>> 0 > 3 ? (D + -4 + 1) | 0 : i;
        c[(f + 316 + ((r * 28) | 0) + 20) >> 2] = D;
        do
          if (D >>> 0 <= i >>> 0)
            if ((h | 0) > 0) {
              c[j >> 2] = 0;
              c[l >> 2] = i + 1;
              c[g >> 2] = d[i >> 0];
              break;
            } else {
              c[g >> 2] = 0;
              c[j >> 2] = 0;
              c[k >> 2] = 1;
              break;
            }
          else {
            D = d[i >> 0] | (d[(i + 1) >> 0] << 8) | (d[(i + 2) >> 0] << 16) | (d[(i + 3) >> 0] << 24);
            c[l >> 2] = i + 3;
            c[g >> 2] = (ye(D | 0) | 0) >>> 8;
            c[j >> 2] = 16;
          }
        while (0);
        if (i >>> 0 < q >>> 0) {
          g = sd(x, 7) | 0;
          if (!(sd(x, 1) | 0)) l = 0;
          else {
            l = sd(x, 4) | 0;
            D = (sd(x, 1) | 0) != 0;
            l = D ? (0 - l) | 0 : l;
          }
          if (!(sd(x, 1) | 0)) m = 0;
          else {
            m = sd(x, 4) | 0;
            D = (sd(x, 1) | 0) != 0;
            m = D ? (0 - m) | 0 : m;
          }
          if (!(sd(x, 1) | 0)) n = 0;
          else {
            n = sd(x, 4) | 0;
            D = (sd(x, 1) | 0) != 0;
            n = D ? (0 - n) | 0 : n;
          }
          if (!(sd(x, 1) | 0)) o = 0;
          else {
            o = sd(x, 4) | 0;
            D = (sd(x, 1) | 0) != 0;
            o = D ? (0 - o) | 0 : o;
          }
          if (!(sd(x, 1) | 0)) p = 0;
          else {
            p = sd(x, 4) | 0;
            D = (sd(x, 1) | 0) != 0;
            p = D ? (0 - p) | 0 : p;
          }
          j = (f + 776) | 0;
          k = (f + 112) | 0;
          i = 0;
          do {
            do
              if (!(c[s >> 2] | 0)) {
                if ((i | 0) <= 0) {
                  h = g;
                  u = 112;
                  break;
                }
                D = (f + 776 + (i << 5)) | 0;
                c[D >> 2] = c[j >> 2];
                c[(D + 4) >> 2] = c[(j + 4) >> 2];
                c[(D + 8) >> 2] = c[(j + 8) >> 2];
                c[(D + 12) >> 2] = c[(j + 12) >> 2];
                c[(D + 16) >> 2] = c[(j + 16) >> 2];
                c[(D + 20) >> 2] = c[(j + 20) >> 2];
                c[(D + 24) >> 2] = c[(j + 24) >> 2];
                c[(D + 28) >> 2] = c[(j + 28) >> 2];
              } else {
                h = (((c[k >> 2] | 0) == 0 ? g : 0) + (a[(f + 116 + i) >> 0] | 0)) | 0;
                u = 112;
              }
            while (0);
            if ((u | 0) == 112) {
              u = 0;
              D = (h + l) | 0;
              c[(f + 776 + (i << 5)) >> 2] = d[(8373 + ((D | 0) < 0 ? 0 : (D | 0) < 127 ? D : 127)) >> 0];
              c[(f + 776 + (i << 5) + 4) >> 2] = e[(862 + (((h | 0) < 0 ? 0 : (h | 0) < 127 ? h : 127) << 1)) >> 1];
              D = (h + m) | 0;
              c[(f + 776 + (i << 5) + 8) >> 2] = d[(8373 + ((D | 0) < 0 ? 0 : (D | 0) < 127 ? D : 127)) >> 0] << 1;
              D = (h + n) | 0;
              D = ((e[(862 + (((D | 0) < 0 ? 0 : (D | 0) < 127 ? D : 127) << 1)) >> 1] | 0) * 101581) | 0;
              c[(f + 776 + (i << 5) + 12) >> 2] = D >>> 0 < 524288 ? 8 : D >>> 16;
              D = (h + o) | 0;
              c[(f + 776 + (i << 5) + 16) >> 2] = d[(8373 + ((D | 0) < 0 ? 0 : (D | 0) < 117 ? D : 117)) >> 0];
              D = (h + p) | 0;
              c[(f + 776 + (i << 5) + 20) >> 2] = e[(862 + (((D | 0) < 0 ? 0 : (D | 0) < 127 ? D : 127) << 1)) >> 1];
              c[(f + 776 + (i << 5) + 24) >> 2] = D;
            }
            i = (i + 1) | 0;
          } while ((i | 0) != 4);
          if (!(a[t >> 0] | 0)) {
            if (c[f >> 2] | 0) {
              D = 0;
              return D | 0;
            }
            c[f >> 2] = 4;
            c[v >> 2] = 6244;
            c[(f + 4) >> 2] = 0;
            D = 0;
            return D | 0;
          }
          sd(x, 1) | 0;
          o = 0;
          do {
            n = 0;
            do {
              m = 0;
              do {
                l = 0;
                do {
                  g = d[(6261 + ((o * 264) | 0) + ((n * 33) | 0) + ((m * 11) | 0) + l) >> 0] | 0;
                  k = c[y >> 2] | 0;
                  h = c[z >> 2] | 0;
                  do
                    if ((h | 0) < 0) {
                      i = c[B >> 2] | 0;
                      if (i >>> 0 < (c[w >> 2] | 0) >>> 0) {
                        D = d[i >> 0] | (d[(i + 1) >> 0] << 8) | (d[(i + 2) >> 0] << 16) | (d[(i + 3) >> 0] << 24);
                        c[B >> 2] = i + 3;
                        D = (ye(D | 0) | 0) >>> 8;
                        c[x >> 2] = (c[x >> 2] << 24) | D;
                        h = (h + 24) | 0;
                        c[z >> 2] = h;
                        break;
                      }
                      if (i >>> 0 < (c[C >> 2] | 0) >>> 0) {
                        h = (h + 8) | 0;
                        c[z >> 2] = h;
                        c[B >> 2] = i + 1;
                        c[x >> 2] = (c[x >> 2] << 8) | d[i >> 0];
                        break;
                      }
                      if (!(c[A >> 2] | 0)) {
                        c[x >> 2] = c[x >> 2] << 8;
                        h = (h + 8) | 0;
                        c[z >> 2] = h;
                        c[A >> 2] = 1;
                        break;
                      } else {
                        c[z >> 2] = 0;
                        h = 0;
                        break;
                      }
                    }
                  while (0);
                  i = (O(k, g) | 0) >>> 8;
                  g = c[x >> 2] | 0;
                  j = (i + 1) | 0;
                  if ((g >>> h) >>> 0 > i >>> 0) {
                    v = (k - i) | 0;
                    c[x >> 2] = g - (j << h);
                    D = (R(v | 0) | 0) ^ 24;
                    c[z >> 2] = h - D;
                    c[y >> 2] = (v << D) + -1;
                    h = sd(x, 8) | 0;
                  } else {
                    D = (R(j | 0) | 0) ^ 24;
                    c[z >> 2] = h - D;
                    c[y >> 2] = (j << D) + -1;
                    h = d[(7317 + ((o * 264) | 0) + ((n * 33) | 0) + ((m * 11) | 0) + l) >> 0] | 0;
                  }
                  a[(f + 907 + ((o * 264) | 0) + ((n * 33) | 0) + ((m * 11) | 0) + l) >> 0] = h;
                  l = (l + 1) | 0;
                } while ((l | 0) != 11);
                m = (m + 1) | 0;
              } while ((m | 0) != 3);
              n = (n + 1) | 0;
            } while ((n | 0) != 8);
            D = (f + 907 + ((o * 264) | 0)) | 0;
            c[(f + 1964 + ((o * 68) | 0)) >> 2] = D;
            c[(f + 1964 + ((o * 68) | 0) + 4) >> 2] = f + 907 + ((o * 264) | 0) + 33;
            c[(f + 1964 + ((o * 68) | 0) + 8) >> 2] = f + 907 + ((o * 264) | 0) + 66;
            c[(f + 1964 + ((o * 68) | 0) + 12) >> 2] = f + 907 + ((o * 264) | 0) + 99;
            v = (f + 907 + ((o * 264) | 0) + 198) | 0;
            c[(f + 1964 + ((o * 68) | 0) + 16) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 20) >> 2] = f + 907 + ((o * 264) | 0) + 132;
            c[(f + 1964 + ((o * 68) | 0) + 24) >> 2] = f + 907 + ((o * 264) | 0) + 165;
            c[(f + 1964 + ((o * 68) | 0) + 28) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 32) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 36) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 40) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 44) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 48) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 52) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 56) >> 2] = v;
            c[(f + 1964 + ((o * 68) | 0) + 60) >> 2] = f + 907 + ((o * 264) | 0) + 231;
            c[(f + 1964 + ((o * 68) | 0) + 64) >> 2] = D;
            o = (o + 1) | 0;
          } while ((o | 0) != 4);
          D = sd(x, 1) | 0;
          c[(f + 2236) >> 2] = D;
          if (D | 0) a[(f + 2240) >> 0] = sd(x, 8) | 0;
          c[(f + 4) >> 2] = 1;
          D = 1;
          return D | 0;
        } else h = 5;
      } else h = 7;
      if (c[f >> 2] | 0) {
        D = 0;
        return D | 0;
      }
      c[f >> 2] = h;
      c[v >> 2] = 6220;
      c[(f + 4) >> 2] = 0;
      D = 0;
      return D | 0;
    }
    function pd(b, d) {
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0;
      I = (b + 108) | 0;
      j = c[I >> 2] | 0;
      f = (d - j) | 0;
      if ((f | 0) <= 0) {
        c[I >> 2] = d;
        return;
      }
      h = c[(b + 100) >> 2] | 0;
      g = ((c[(b + 16) >> 2] | 0) + ((O(h, j) | 0) << 2)) | 0;
      l = c[(b + 8) >> 2] | 0;
      k = c[(b + 20) >> 2] | 0;
      H = c[l >> 2] << 2;
      e = c[(b + 176) >> 2] | 0;
      i = k;
      if ((e | 0) <= 0) {
        if ((i | 0) != (g | 0)) pe(k | 0, g | 0, O(f << 2, h) | 0) | 0;
      } else
        while (1) {
          f = (e + -1) | 0;
          ib((b + 180 + ((f * 20) | 0)) | 0, j, d, g, i);
          if ((e | 0) > 1) {
            g = i;
            e = f;
          } else break;
        }
      e = c[I >> 2] | 0;
      h = c[(l + 88) >> 2] | 0;
      h = (h | 0) < (d | 0) ? h : d;
      g = c[(l + 84) >> 2] | 0;
      f = (g | 0) > (e | 0);
      i = f ? g : e;
      if ((h | 0) <= (i | 0)) {
        c[I >> 2] = d;
        return;
      }
      E = (k + (O((g - e) | 0, H) | 0)) | 0;
      m = c[(l + 76) >> 2] | 0;
      f = ((f ? E : k) + (m << 2)) | 0;
      c[(l + 8) >> 2] = i - g;
      m = ((c[(l + 80) >> 2] | 0) - m) | 0;
      c[(l + 12) >> 2] = m;
      k = (h - i) | 0;
      c[(l + 16) >> 2] = k;
      E = (b + 12) | 0;
      i = c[E >> 2] | 0;
      G = c[i >> 2] | 0;
      g = (c[(l + 92) >> 2] | 0) != 0;
      h = (k | 0) > 0;
      if (G >>> 0 < 11) {
        F = (b + 116) | 0;
        E = c[(i + 20) >> 2] | 0;
        D = ((c[(i + 16) >> 2] | 0) + (O(E, c[F >> 2] | 0) | 0)) | 0;
        if (g)
          if (h) {
            C = (b + 268) | 0;
            e = 0;
            B = 0;
            do {
              l = (f + (O(B, H) | 0)) | 0;
              A = (D + (O(e, E) | 0)) | 0;
              b = (k - B) | 0;
              m = c[C >> 2] | 0;
              n = c[(m + 32) >> 2] | 0;
              n = ((((c[(m + 24) >> 2] | 0) + -1 + n) | 0) / (n | 0)) | 0;
              n = (n | 0) > (b | 0) ? b : n;
              o = c[(m + 44) >> 2] | 0;
              if ((n | 0) > 0) {
                p = (o | 0) > 0;
                h = 0;
                j = l;
                while (1) {
                  if (p) {
                    i = 0;
                    do {
                      q = (j + (i << 2)) | 0;
                      g = c[q >> 2] | 0;
                      if (g >>> 0 < 4278190080) {
                        if (g >>> 0 < 16777216) g = 0;
                        else {
                          z = ((g >>> 24) * 65793) | 0;
                          g =
                            ((((O(z, g & 255) | 0) + 8388608) | 0) >>> 24) |
                            (g & -16777216) |
                            (((((O(z, (g >>> 8) & 255) | 0) + 8388608) | 0) >>> 24) << 8) |
                            (((((O(z, (g >>> 16) & 255) | 0) + 8388608) | 0) >>> 24) << 16);
                        }
                        c[q >> 2] = g;
                      }
                      i = (i + 1) | 0;
                    } while ((i | 0) != (o | 0));
                  }
                  h = (h + 1) | 0;
                  if ((h | 0) == (n | 0)) break;
                  else j = (j + H) | 0;
                }
              }
              B = ((jc(m, b, l, H) | 0) + B) | 0;
              n = c[C >> 2] | 0;
              o = (n + 68) | 0;
              p = c[o >> 2] | 0;
              q = (n + 52) | 0;
              r = c[q >> 2] | 0;
              s = (n + 24) | 0;
              b = (n + 56) | 0;
              m = (n + 64) | 0;
              a: do
                if ((c[m >> 2] | 0) < (c[b >> 2] | 0)) {
                  t = (n + 4) | 0;
                  u = (n + 20) | 0;
                  v = (n + 8) | 0;
                  w = (n + 76) | 0;
                  x = (n + 28) | 0;
                  y = (n + 72) | 0;
                  z = (r | 0) > 0;
                  g = 0;
                  do {
                    if ((c[s >> 2] | 0) >= 1) break a;
                    l = (A + (O(g, E) | 0)) | 0;
                    do
                      if (!(c[t >> 2] | 0)) {
                        if (c[u >> 2] | 0) {
                          sc(n);
                          break;
                        }
                        if ((O(c[q >> 2] | 0, c[v >> 2] | 0) | 0) > 0) {
                          h = 0;
                          i = c[w >> 2] | 0;
                          do {
                            a[((c[o >> 2] | 0) + h) >> 0] = c[(i + (h << 2)) >> 2];
                            i = c[w >> 2] | 0;
                            c[(i + (h << 2)) >> 2] = 0;
                            h = (h + 1) | 0;
                          } while ((h | 0) < (O(c[q >> 2] | 0, c[v >> 2] | 0) | 0));
                        }
                      } else rc(n);
                    while (0);
                    c[s >> 2] = (c[s >> 2] | 0) + (c[x >> 2] | 0);
                    c[o >> 2] = (c[o >> 2] | 0) + (c[y >> 2] | 0);
                    c[m >> 2] = (c[m >> 2] | 0) + 1;
                    if (z) {
                      i = 0;
                      do {
                        j = (p + (i << 2)) | 0;
                        h = c[j >> 2] | 0;
                        if (h >>> 0 < 4278190080) {
                          if (h >>> 0 < 16777216) h = 0;
                          else {
                            J = (4278190080 / ((h >>> 24) >>> 0)) | 0;
                            h =
                              ((((O(J, h & 255) | 0) + 8388608) | 0) >>> 24) |
                              (h & -16777216) |
                              (((((O(J, (h >>> 8) & 255) | 0) + 8388608) | 0) >>> 24) << 8) |
                              (((((O(J, (h >>> 16) & 255) | 0) + 8388608) | 0) >>> 24) << 16);
                          }
                          c[j >> 2] = h;
                        }
                        i = (i + 1) | 0;
                      } while ((i | 0) != (r | 0));
                    }
                    qd(p, r, G, l);
                    g = (g + 1) | 0;
                  } while ((c[m >> 2] | 0) < (c[b >> 2] | 0));
                } else g = 0;
              while (0);
              e = (g + e) | 0;
            } while ((B | 0) < (k | 0));
          } else e = 0;
        else if (h) {
          g = k;
          e = D;
          while (1) {
            qd(f, m, G, e);
            if ((g | 0) > 1) {
              g = (g + -1) | 0;
              f = (f + H) | 0;
              e = (e + E) | 0;
            } else {
              e = k;
              break;
            }
          }
        } else e = k;
        c[F >> 2] = (c[F >> 2] | 0) + e;
        c[I >> 2] = d;
        return;
      }
      D = (b + 116) | 0;
      e = c[D >> 2] | 0;
      b: do
        if (g) {
          if (h) {
            C = (b + 268) | 0;
            B = 0;
            A = f;
            do {
              j = (k - B) | 0;
              l = c[C >> 2] | 0;
              b = c[(l + 32) >> 2] | 0;
              b = ((((c[(l + 24) >> 2] | 0) + -1 + b) | 0) / (b | 0)) | 0;
              b = (b | 0) > (j | 0) ? j : b;
              m = c[(l + 44) >> 2] | 0;
              if ((b | 0) > 0) {
                n = (m | 0) > 0;
                g = 0;
                i = A;
                while (1) {
                  if (n) {
                    h = 0;
                    do {
                      o = (i + (h << 2)) | 0;
                      f = c[o >> 2] | 0;
                      if (f >>> 0 < 4278190080) {
                        if (f >>> 0 < 16777216) f = 0;
                        else {
                          J = ((f >>> 24) * 65793) | 0;
                          f =
                            ((((O(J, f & 255) | 0) + 8388608) | 0) >>> 24) |
                            (f & -16777216) |
                            (((((O(J, (f >>> 8) & 255) | 0) + 8388608) | 0) >>> 24) << 8) |
                            (((((O(J, (f >>> 16) & 255) | 0) + 8388608) | 0) >>> 24) << 16);
                        }
                        c[o >> 2] = f;
                      }
                      h = (h + 1) | 0;
                    } while ((h | 0) != (m | 0));
                  }
                  g = (g + 1) | 0;
                  if ((g | 0) == (b | 0)) break;
                  else i = (i + H) | 0;
                }
              }
              B = ((jc(l, j, A, H) | 0) + B) | 0;
              A = (A + (O(b, H) | 0)) | 0;
              m = c[C >> 2] | 0;
              n = (m + 68) | 0;
              o = c[n >> 2] | 0;
              p = (m + 52) | 0;
              q = c[p >> 2] | 0;
              r = (m + 24) | 0;
              l = (m + 56) | 0;
              b = (m + 64) | 0;
              c: do
                if ((c[b >> 2] | 0) < (c[l >> 2] | 0)) {
                  s = (o + 3) | 0;
                  t = (m + 4) | 0;
                  u = (m + 20) | 0;
                  v = (m + 8) | 0;
                  w = (m + 76) | 0;
                  x = (m + 28) | 0;
                  y = (m + 72) | 0;
                  z = (q | 0) > 0;
                  j = e;
                  f = 0;
                  while (1) {
                    if ((c[r >> 2] | 0) >= 1) break c;
                    do
                      if (!(c[t >> 2] | 0)) {
                        if (c[u >> 2] | 0) {
                          sc(m);
                          break;
                        }
                        if ((O(c[p >> 2] | 0, c[v >> 2] | 0) | 0) > 0) {
                          g = 0;
                          h = c[w >> 2] | 0;
                          do {
                            a[((c[n >> 2] | 0) + g) >> 0] = c[(h + (g << 2)) >> 2];
                            h = c[w >> 2] | 0;
                            c[(h + (g << 2)) >> 2] = 0;
                            g = (g + 1) | 0;
                          } while ((g | 0) < (O(c[p >> 2] | 0, c[v >> 2] | 0) | 0));
                        }
                      } else rc(m);
                    while (0);
                    c[r >> 2] = (c[r >> 2] | 0) + (c[x >> 2] | 0);
                    c[n >> 2] = (c[n >> 2] | 0) + (c[y >> 2] | 0);
                    c[b >> 2] = (c[b >> 2] | 0) + 1;
                    if (z) {
                      h = 0;
                      do {
                        i = (o + (h << 2)) | 0;
                        g = c[i >> 2] | 0;
                        if (g >>> 0 < 4278190080) {
                          if (g >>> 0 < 16777216) g = 0;
                          else {
                            J = (4278190080 / ((g >>> 24) >>> 0)) | 0;
                            g =
                              ((((O(J, g & 255) | 0) + 8388608) | 0) >>> 24) |
                              (g & -16777216) |
                              (((((O(J, (g >>> 8) & 255) | 0) + 8388608) | 0) >>> 24) << 8) |
                              (((((O(J, (g >>> 16) & 255) | 0) + 8388608) | 0) >>> 24) << 16);
                          }
                          c[i >> 2] = g;
                        }
                        h = (h + 1) | 0;
                      } while ((h | 0) != (q | 0));
                    }
                    i = c[E >> 2] | 0;
                    h = ((c[(i + 16) >> 2] | 0) + (O(c[(i + 32) >> 2] | 0, j) | 0)) | 0;
                    if (z) {
                      g = 0;
                      do {
                        J = c[(o + (g << 2)) >> 2] | 0;
                        a[(h + g) >> 0] =
                          (((((J & 255) * 6420) | 0) + 1081344 + ((((J >>> 16) & 255) * 16839) | 0) + ((((J >>> 8) & 255) * 33059) | 0)) |
                            0) >>>
                          16;
                        g = (g + 1) | 0;
                      } while ((g | 0) != (q | 0));
                    }
                    g = j >> 1;
                    J = ((c[(i + 20) >> 2] | 0) + (O(c[(i + 36) >> 2] | 0, g) | 0)) | 0;
                    rd(o, J, ((c[(i + 24) >> 2] | 0) + (O(c[(i + 40) >> 2] | 0, g) | 0)) | 0, q, (j & 1) ^ 1);
                    g = c[(i + 28) >> 2] | 0;
                    if (g | 0 ? ((F = (g + (O(c[(i + 44) >> 2] | 0, j) | 0)) | 0), z) : 0) {
                      g = 0;
                      do {
                        a[(F + g) >> 0] = a[(s + (g << 2)) >> 0] | 0;
                        g = (g + 1) | 0;
                      } while ((g | 0) != (q | 0));
                    }
                    f = (f + 1) | 0;
                    if ((c[b >> 2] | 0) < (c[l >> 2] | 0)) j = (j + 1) | 0;
                    else break;
                  }
                } else f = 0;
              while (0);
              e = (f + e) | 0;
            } while ((B | 0) < (k | 0));
          }
        } else if (h) {
          l = (m | 0) > 0;
          while (1) {
            j = (k + -1) | 0;
            h = ((c[(i + 16) >> 2] | 0) + (O(c[(i + 32) >> 2] | 0, e) | 0)) | 0;
            if (l) {
              g = 0;
              do {
                J = c[(f + (g << 2)) >> 2] | 0;
                a[(h + g) >> 0] =
                  (((((J & 255) * 6420) | 0) + 1081344 + ((((J >>> 16) & 255) * 16839) | 0) + ((((J >>> 8) & 255) * 33059) | 0)) | 0) >>>
                  16;
                g = (g + 1) | 0;
              } while ((g | 0) != (m | 0));
            }
            g = e >> 1;
            J = ((c[(i + 20) >> 2] | 0) + (O(c[(i + 36) >> 2] | 0, g) | 0)) | 0;
            rd(f, J, ((c[(i + 24) >> 2] | 0) + (O(c[(i + 40) >> 2] | 0, g) | 0)) | 0, m, (e & 1) ^ 1);
            g = c[(i + 28) >> 2] | 0;
            if (g | 0 ? ((n = (g + (O(c[(i + 44) >> 2] | 0, e) | 0)) | 0), (o = (f + 3) | 0), l) : 0) {
              g = 0;
              do {
                a[(n + g) >> 0] = a[(o + (g << 2)) >> 0] | 0;
                g = (g + 1) | 0;
              } while ((g | 0) != (m | 0));
            }
            e = (e + 1) | 0;
            if ((k | 0) <= 1) break b;
            k = j;
            f = (f + H) | 0;
            i = c[E >> 2] | 0;
          }
        }
      while (0);
      c[D >> 2] = e;
      c[I >> 2] = d;
      return;
    }
    function qd(b, e, f, g) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      do
        switch (f | 0) {
          case 0: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              e = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[g >> 0] = e >>> 16;
              a[(g + 1) >> 0] = e >>> 8;
              a[(g + 2) >> 0] = e;
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 3) | 0;
            }
            return;
          }
          case 1: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              e = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[g >> 0] = e >>> 16;
              a[(g + 1) >> 0] = e >>> 8;
              a[(g + 2) >> 0] = e;
              a[(g + 3) >> 0] = e >>> 24;
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 4) | 0;
            }
            return;
          }
          case 7: {
            h = (b + (e << 2)) | 0;
            if ((e | 0) > 0) f = g;
            else return;
            while (1) {
              i = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[f >> 0] = i >>> 16;
              a[(f + 1) >> 0] = i >>> 8;
              a[(f + 2) >> 0] = i;
              a[(f + 3) >> 0] = i >>> 24;
              if (b >>> 0 >= h >>> 0) break;
              else f = (f + 4) | 0;
            }
            f = (g + 3) | 0;
            b = 0;
            do {
              h = b << 2;
              i = a[(f + h) >> 0] | 0;
              if ((i << 24) >> 24 != -1) {
                j = ((i & 255) * 32897) | 0;
                i = (g + h) | 0;
                a[i >> 0] = (O(d[i >> 0] | 0, j) | 0) >>> 23;
                i = (g + (h | 1)) | 0;
                a[i >> 0] = (O(d[i >> 0] | 0, j) | 0) >>> 23;
                i = (g + (h | 2)) | 0;
                a[i >> 0] = (O(d[i >> 0] | 0, j) | 0) >>> 23;
              }
              b = (b + 1) | 0;
            } while ((b | 0) != (e | 0));
            return;
          }
          case 2: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              j = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[g >> 0] = j;
              a[(g + 1) >> 0] = j >>> 8;
              a[(g + 2) >> 0] = j >>> 16;
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 3) | 0;
            }
            return;
          }
          case 3: {
            pe(g | 0, b | 0, (e << 2) | 0) | 0;
            return;
          }
          case 8: {
            pe(g | 0, b | 0, (e << 2) | 0) | 0;
            if ((e | 0) <= 0) return;
            f = (g + 3) | 0;
            b = 0;
            do {
              h = b << 2;
              i = a[(f + h) >> 0] | 0;
              if ((i << 24) >> 24 != -1) {
                i = ((i & 255) * 32897) | 0;
                j = (g + h) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
                j = (g + (h | 1)) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
                j = (g + (h | 2)) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
              }
              b = (b + 1) | 0;
            } while ((b | 0) != (e | 0));
            return;
          }
          case 4: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              j = ye(c[b >> 2] | 0) | 0;
              b = (b + 4) | 0;
              a[g >> 0] = j;
              a[(g + 1) >> 0] = j >> 8;
              a[(g + 2) >> 0] = j >> 16;
              a[(g + 3) >> 0] = j >> 24;
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 4) | 0;
            }
            return;
          }
          case 9: {
            h = (b + (e << 2)) | 0;
            if ((e | 0) > 0) f = g;
            else return;
            while (1) {
              j = ye(c[b >> 2] | 0) | 0;
              b = (b + 4) | 0;
              a[f >> 0] = j;
              a[(f + 1) >> 0] = j >> 8;
              a[(f + 2) >> 0] = j >> 16;
              a[(f + 3) >> 0] = j >> 24;
              if (b >>> 0 >= h >>> 0) break;
              else f = (f + 4) | 0;
            }
            f = (g + 1) | 0;
            b = 0;
            do {
              h = b << 2;
              i = a[(g + h) >> 0] | 0;
              if ((i << 24) >> 24 != -1) {
                i = ((i & 255) * 32897) | 0;
                j = (f + h) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
                j = (f + (h | 1)) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
                j = (f + (h | 2)) | 0;
                a[j >> 0] = (O(d[j >> 0] | 0, i) | 0) >>> 23;
              }
              b = (b + 1) | 0;
            } while ((b | 0) != (e | 0));
            return;
          }
          case 5: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              j = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[g >> 0] = ((j >>> 16) & 240) | ((j >>> 12) & 15);
              a[(g + 1) >> 0] = (j & 240) | (j >>> 28);
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 2) | 0;
            }
            return;
          }
          case 10: {
            h = (b + (e << 2)) | 0;
            if ((e | 0) > 0) f = g;
            else return;
            while (1) {
              j = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[f >> 0] = ((j >>> 16) & 240) | ((j >>> 12) & 15);
              a[(f + 1) >> 0] = (j & 240) | (j >>> 28);
              if (b >>> 0 >= h >>> 0) {
                b = 0;
                break;
              } else f = (f + 2) | 0;
            }
            do {
              j = b << 1;
              f = (g + j) | 0;
              j = (g + (j | 1)) | 0;
              h = a[j >> 0] | 0;
              i = h & 15;
              k = ((i & 255) * 4369) | 0;
              l = d[f >> 0] | 0;
              h = h & 255;
              h = ((O((h & 240) | (h >>> 4), k) | 0) >>> 16) & 255;
              a[f >> 0] = (((O(k, (l & 240) | (l >>> 4)) | 0) >>> 16) & 240) | (((O(((l << 4) & 240) | (l & 15), k) | 0) >>> 20) & 15);
              a[j >> 0] = (h & -16) | i;
              b = (b + 1) | 0;
            } while ((b | 0) != (e | 0));
            return;
          }
          case 6: {
            f = (b + (e << 2)) | 0;
            if ((e | 0) <= 0) return;
            while (1) {
              l = c[b >> 2] | 0;
              b = (b + 4) | 0;
              a[g >> 0] = ((l >>> 16) & 248) | ((l >>> 13) & 7);
              a[(g + 1) >> 0] = ((l >>> 5) & 224) | ((l >>> 3) & 31);
              if (b >>> 0 >= f >>> 0) break;
              else g = (g + 2) | 0;
            }
            return;
          }
          default:
            return;
        }
      while (0);
    }
    function rd(b, e, f, g, h) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      var i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0;
      j = g >> 1;
      if ((j | 0) > 0)
        if (!h) {
          i = 0;
          do {
            n = i << 1;
            l = c[(b + (n << 2)) >> 2] | 0;
            n = c[(b + ((n | 1) << 2)) >> 2] | 0;
            k = (((n >>> 15) & 510) + ((l >>> 15) & 510)) | 0;
            m = (((n >>> 7) & 510) + ((l >>> 7) & 510)) | 0;
            l = (((n << 1) & 510) + ((l << 1) & 510)) | 0;
            n = ((O(k, -9719) | 0) + 33685504 + (O(m, -19081) | 0) + ((l * 28800) | 0)) | 0;
            o = n >> 18;
            l = (((k * 28800) | 0) + 33685504 + (O(m, -24116) | 0) + (O(l, -4684) | 0)) | 0;
            m = l >> 18;
            k = (e + i) | 0;
            a[k >> 0] = (((d[k >> 0] | 0) + 1 + (o >>> 0 < 256 ? o : (((n >> 31) & 257) + 255) | 0)) | 0) >>> 1;
            k = (f + i) | 0;
            a[k >> 0] = (((d[k >> 0] | 0) + 1 + (m >>> 0 < 256 ? m : (((l >> 31) & 257) + 255) | 0)) | 0) >>> 1;
            i = (i + 1) | 0;
          } while ((i | 0) != (j | 0));
          k = j;
        } else {
          i = 0;
          do {
            m = i << 1;
            o = c[(b + (m << 2)) >> 2] | 0;
            m = c[(b + ((m | 1) << 2)) >> 2] | 0;
            k = (((m >>> 15) & 510) + ((o >>> 15) & 510)) | 0;
            n = (((m >>> 7) & 510) + ((o >>> 7) & 510)) | 0;
            o = (((m << 1) & 510) + ((o << 1) & 510)) | 0;
            m = ((O(k, -9719) | 0) + 33685504 + (O(n, -19081) | 0) + ((o * 28800) | 0)) | 0;
            l = m >> 18;
            o = (((k * 28800) | 0) + 33685504 + (O(n, -24116) | 0) + (O(o, -4684) | 0)) | 0;
            n = o >> 18;
            a[(e + i) >> 0] = l >>> 0 < 256 ? l : ((m >>> 31) + 255) | 0;
            a[(f + i) >> 0] = n >>> 0 < 256 ? n : ((o >>> 31) + 255) | 0;
            i = (i + 1) | 0;
          } while ((i | 0) != (j | 0));
          k = j;
        }
      else k = 0;
      if (!(g & 1)) return;
      j = c[(b + ((k << 1) << 2)) >> 2] | 0;
      n = (j >>> 14) & 1020;
      o = (j >>> 6) & 1020;
      j = (j << 2) & 1020;
      i = ((O(n, -9719) | 0) + 33685504 + (O(o, -19081) | 0) + ((j * 28800) | 0)) | 0;
      m = i >> 18;
      i = m >>> 0 < 256 ? m : (((i >> 31) & -255) + 255) | 0;
      j = (((n * 28800) | 0) + 33685504 + (O(o, -24116) | 0) + (O(j, -4684) | 0)) | 0;
      o = j >> 18;
      j = o >>> 0 < 256 ? o : (((j >> 31) & -255) + 255) | 0;
      if (!h) {
        o = (e + k) | 0;
        a[o >> 0] = ((i + 1 + (d[o >> 0] | 0)) | 0) >>> 1;
        i = (f + k) | 0;
        j = ((j + 1 + (d[i >> 0] | 0)) | 0) >>> 1;
      } else {
        a[(e + k) >> 0] = i;
        i = (f + k) | 0;
      }
      a[i >> 0] = j;
      return;
    }
    function sd(a, b) {
      a = a | 0;
      b = b | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0;
      if ((b | 0) <= 0) {
        r = 0;
        return r | 0;
      }
      m = (a + 4) | 0;
      n = (a + 8) | 0;
      o = (a + 12) | 0;
      p = (a + 20) | 0;
      q = (a + 16) | 0;
      r = (a + 24) | 0;
      e = 0;
      g = c[n >> 2] | 0;
      k = c[m >> 2] | 0;
      do {
        l = b;
        b = (b + -1) | 0;
        do
          if ((g | 0) < 0) {
            f = c[o >> 2] | 0;
            if (f >>> 0 < (c[p >> 2] | 0) >>> 0) {
              j = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
              c[o >> 2] = f + 3;
              j = (ye(j | 0) | 0) >>> 8;
              c[a >> 2] = (c[a >> 2] << 24) | j;
              g = (g + 24) | 0;
              c[n >> 2] = g;
              break;
            }
            if (f >>> 0 < (c[q >> 2] | 0) >>> 0) {
              g = (g + 8) | 0;
              c[n >> 2] = g;
              c[o >> 2] = f + 1;
              c[a >> 2] = (c[a >> 2] << 8) | (d[f >> 0] | 0);
              break;
            }
            if (!(c[r >> 2] | 0)) {
              c[a >> 2] = c[a >> 2] << 8;
              g = (g + 8) | 0;
              c[n >> 2] = g;
              c[r >> 2] = 1;
              break;
            } else {
              c[n >> 2] = 0;
              g = 0;
              break;
            }
          }
        while (0);
        h = (k >>> 1) & 16777215;
        i = c[a >> 2] | 0;
        j = (i >>> g) >>> 0 > h >>> 0;
        f = (h + 1) | 0;
        if (j) {
          c[a >> 2] = i - (f << g);
          f = (k - h) | 0;
        }
        k = (R(f | 0) | 0) ^ 24;
        g = (g - k) | 0;
        c[n >> 2] = g;
        k = ((f << k) + -1) | 0;
        c[m >> 2] = k;
        e = ((j & 1) << b) | e;
      } while ((l | 0) > 1);
      return e | 0;
    }
    function td(e, f, g, h, i, j) {
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      var k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0;
      if ((i | 0) >= 16) {
        A = 16;
        return A | 0;
      }
      z = (e + 4) | 0;
      A = (e + 8) | 0;
      v = (e + 12) | 0;
      w = (e + 20) | 0;
      x = (e + 16) | 0;
      y = (e + 24) | 0;
      o = ((c[(f + (i << 2)) >> 2] | 0) + ((g * 11) | 0)) | 0;
      m = i;
      l = c[A >> 2] | 0;
      n = c[z >> 2] | 0;
      a: while (1) {
        i = d[o >> 0] | 0;
        do
          if ((l | 0) < 0) {
            g = c[v >> 2] | 0;
            if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
              u = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
              c[v >> 2] = g + 3;
              u = (ye(u | 0) | 0) >>> 8;
              c[e >> 2] = (c[e >> 2] << 24) | u;
              l = (l + 24) | 0;
              c[A >> 2] = l;
              break;
            }
            if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
              l = (l + 8) | 0;
              c[A >> 2] = l;
              c[v >> 2] = g + 1;
              c[e >> 2] = (c[e >> 2] << 8) | (d[g >> 0] | 0);
              break;
            }
            if (!(c[y >> 2] | 0)) {
              c[e >> 2] = c[e >> 2] << 8;
              l = (l + 8) | 0;
              c[A >> 2] = l;
              c[y >> 2] = 1;
              break;
            } else {
              c[A >> 2] = 0;
              l = 0;
              break;
            }
          }
        while (0);
        g = (O(i, n) | 0) >>> 8;
        i = c[e >> 2] | 0;
        k = (g + 1) | 0;
        if ((i >>> l) >>> 0 <= g >>> 0) {
          i = 164;
          break;
        }
        q = (n - g) | 0;
        i = (i - (k << l)) | 0;
        c[e >> 2] = i;
        t = (R(q | 0) | 0) ^ 24;
        l = (l - t) | 0;
        c[A >> 2] = l;
        t = ((q << t) + -1) | 0;
        c[z >> 2] = t;
        q = o;
        u = m;
        o = t;
        while (1) {
          k = d[(q + 1) >> 0] | 0;
          do
            if ((l | 0) < 0) {
              g = c[v >> 2] | 0;
              if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                m = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                c[v >> 2] = g + 3;
                i = ((ye(m | 0) | 0) >>> 8) | (i << 24);
                c[e >> 2] = i;
                m = (l + 24) | 0;
                c[A >> 2] = m;
                break;
              }
              if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                m = (l + 8) | 0;
                c[A >> 2] = m;
                c[v >> 2] = g + 1;
                i = (i << 8) | (d[g >> 0] | 0);
                c[e >> 2] = i;
                break;
              }
              if (!(c[y >> 2] | 0)) {
                i = i << 8;
                c[e >> 2] = i;
                m = (l + 8) | 0;
                c[A >> 2] = m;
                c[y >> 2] = 1;
                break;
              } else {
                c[A >> 2] = 0;
                m = 0;
                break;
              }
            } else m = l;
          while (0);
          k = (O(k, o) | 0) >>> 8;
          n = (i >>> m) >>> 0 > k >>> 0;
          g = (k + 1) | 0;
          l = (i - (g << m)) | 0;
          if (n) {
            c[e >> 2] = l;
            g = (o - k) | 0;
            i = l;
          }
          o = (R(g | 0) | 0) ^ 24;
          l = (m - o) | 0;
          c[A >> 2] = l;
          o = ((g << o) + -1) | 0;
          c[z >> 2] = o;
          t = (u + 1) | 0;
          s = c[(f + (t << 2)) >> 2] | 0;
          if (n) break;
          if ((t | 0) == 16) {
            g = 16;
            i = 165;
            break a;
          } else {
            q = s;
            u = t;
          }
        }
        k = d[(q + 2) >> 0] | 0;
        do
          if ((l | 0) < 0) {
            g = c[v >> 2] | 0;
            if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
              r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
              c[v >> 2] = g + 3;
              i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
              c[e >> 2] = i;
              l = (l + 24) | 0;
              c[A >> 2] = l;
              break;
            }
            if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
              l = (l + 8) | 0;
              c[A >> 2] = l;
              c[v >> 2] = g + 1;
              i = (i << 8) | (d[g >> 0] | 0);
              c[e >> 2] = i;
              break;
            }
            if (!(c[y >> 2] | 0)) {
              i = i << 8;
              c[e >> 2] = i;
              l = (l + 8) | 0;
              c[A >> 2] = l;
              c[y >> 2] = 1;
              break;
            } else {
              c[A >> 2] = 0;
              l = 0;
              break;
            }
          }
        while (0);
        g = (O(k, o) | 0) >>> 8;
        k = (g + 1) | 0;
        do
          if ((i >>> l) >>> 0 > g >>> 0) {
            r = (o - g) | 0;
            i = (i - (k << l)) | 0;
            c[e >> 2] = i;
            n = (R(r | 0) | 0) ^ 24;
            k = (l - n) | 0;
            c[A >> 2] = k;
            n = ((r << n) + -1) | 0;
            c[z >> 2] = n;
            l = d[(q + 3) >> 0] | 0;
            do
              if ((k | 0) < 0) {
                g = c[v >> 2] | 0;
                if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                  r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  c[v >> 2] = g + 3;
                  i = (i << 24) | ((ye(r | 0) | 0) >>> 8);
                  c[e >> 2] = i;
                  k = (k + 24) | 0;
                  c[A >> 2] = k;
                  break;
                }
                if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                  k = (k + 8) | 0;
                  c[A >> 2] = k;
                  c[v >> 2] = g + 1;
                  i = (i << 8) | (d[g >> 0] | 0);
                  c[e >> 2] = i;
                  break;
                }
                if (!(c[y >> 2] | 0)) {
                  i = i << 8;
                  c[e >> 2] = i;
                  k = (k + 8) | 0;
                  c[A >> 2] = k;
                  c[y >> 2] = 1;
                  break;
                } else {
                  c[A >> 2] = 0;
                  k = 0;
                  break;
                }
              }
            while (0);
            l = (O(n, l) | 0) >>> 8;
            o = (i >>> k) >>> 0 > l >>> 0;
            g = (l + 1) | 0;
            m = (i - (g << k)) | 0;
            if (o) {
              c[e >> 2] = m;
              g = (n - l) | 0;
              i = m;
            }
            p = (R(g | 0) | 0) ^ 24;
            m = (k - p) | 0;
            c[A >> 2] = m;
            p = ((g << p) + -1) | 0;
            c[z >> 2] = p;
            g = (m | 0) < 0;
            if (!o) {
              k = d[(q + 4) >> 0] | 0;
              do
                if (g) {
                  g = c[v >> 2] | 0;
                  if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                    r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                    c[v >> 2] = g + 3;
                    i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                    c[e >> 2] = i;
                    m = (m + 24) | 0;
                    c[A >> 2] = m;
                    break;
                  }
                  if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[v >> 2] = g + 1;
                    i = (i << 8) | (d[g >> 0] | 0);
                    c[e >> 2] = i;
                    break;
                  }
                  if (!(c[y >> 2] | 0)) {
                    i = i << 8;
                    c[e >> 2] = i;
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[y >> 2] = 1;
                    break;
                  } else {
                    c[A >> 2] = 0;
                    m = 0;
                    break;
                  }
                }
              while (0);
              k = (O(k, p) | 0) >>> 8;
              n = (i >>> m) >>> 0 > k >>> 0;
              g = (k + 1) | 0;
              l = (i - (g << m)) | 0;
              if (n) {
                c[e >> 2] = l;
                g = (p - k) | 0;
                i = l;
              }
              o = (R(g | 0) | 0) ^ 24;
              m = (m - o) | 0;
              c[A >> 2] = m;
              o = ((g << o) + -1) | 0;
              c[z >> 2] = o;
              if (!n) {
                p = 2;
                l = 2;
                k = o;
                break;
              }
              k = d[(q + 5) >> 0] | 0;
              do
                if ((m | 0) < 0) {
                  g = c[v >> 2] | 0;
                  if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                    r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                    c[v >> 2] = g + 3;
                    i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                    c[e >> 2] = i;
                    m = (m + 24) | 0;
                    c[A >> 2] = m;
                    break;
                  }
                  if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[v >> 2] = g + 1;
                    i = (i << 8) | (d[g >> 0] | 0);
                    c[e >> 2] = i;
                    break;
                  }
                  if (!(c[y >> 2] | 0)) {
                    i = i << 8;
                    c[e >> 2] = i;
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[y >> 2] = 1;
                    break;
                  } else {
                    c[A >> 2] = 0;
                    m = 0;
                    break;
                  }
                }
              while (0);
              k = (O(k, o) | 0) >>> 8;
              l = (i >>> m) >>> 0 > k >>> 0;
              g = (k + 1) | 0;
              if (l) {
                i = (i - (g << m)) | 0;
                c[e >> 2] = i;
                g = (o - k) | 0;
              }
              k = (R(g | 0) | 0) ^ 24;
              m = (m - k) | 0;
              c[A >> 2] = m;
              k = ((g << k) + -1) | 0;
              c[z >> 2] = k;
              p = l ? 4 : 3;
              l = 2;
              break;
            }
            k = d[(q + 6) >> 0] | 0;
            do
              if (g) {
                g = c[v >> 2] | 0;
                if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                  r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  c[v >> 2] = g + 3;
                  i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                  c[e >> 2] = i;
                  m = (m + 24) | 0;
                  c[A >> 2] = m;
                  break;
                }
                if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                  m = (m + 8) | 0;
                  c[A >> 2] = m;
                  c[v >> 2] = g + 1;
                  i = (i << 8) | (d[g >> 0] | 0);
                  c[e >> 2] = i;
                  break;
                }
                if (!(c[y >> 2] | 0)) {
                  i = i << 8;
                  c[e >> 2] = i;
                  m = (m + 8) | 0;
                  c[A >> 2] = m;
                  c[y >> 2] = 1;
                  break;
                } else {
                  c[A >> 2] = 0;
                  m = 0;
                  break;
                }
              }
            while (0);
            k = (O(k, p) | 0) >>> 8;
            n = (i >>> m) >>> 0 > k >>> 0;
            g = (k + 1) | 0;
            l = (i - (g << m)) | 0;
            if (n) {
              c[e >> 2] = l;
              g = (p - k) | 0;
              i = l;
            }
            o = (R(g | 0) | 0) ^ 24;
            m = (m - o) | 0;
            c[A >> 2] = m;
            o = ((g << o) + -1) | 0;
            c[z >> 2] = o;
            g = (m | 0) < 0;
            if (n) {
              k = d[(q + 8) >> 0] | 0;
              do
                if (g) {
                  g = c[v >> 2] | 0;
                  if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                    r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                    c[v >> 2] = g + 3;
                    i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                    c[e >> 2] = i;
                    m = (m + 24) | 0;
                    c[A >> 2] = m;
                    break;
                  }
                  if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[v >> 2] = g + 1;
                    i = (i << 8) | (d[g >> 0] | 0);
                    c[e >> 2] = i;
                    break;
                  }
                  if (!(c[y >> 2] | 0)) {
                    i = i << 8;
                    c[e >> 2] = i;
                    m = (m + 8) | 0;
                    c[A >> 2] = m;
                    c[y >> 2] = 1;
                    break;
                  } else {
                    c[A >> 2] = 0;
                    m = 0;
                    break;
                  }
                }
              while (0);
              k = (O(k, o) | 0) >>> 8;
              n = (i >>> m) >>> 0 > k >>> 0;
              p = n & 1;
              g = (k + 1) | 0;
              l = (i - (g << m)) | 0;
              if (n) {
                c[e >> 2] = l;
                g = (o - k) | 0;
                i = l;
              }
              o = (R(g | 0) | 0) ^ 24;
              l = (m - o) | 0;
              c[A >> 2] = l;
              o = ((g << o) + -1) | 0;
              c[z >> 2] = o;
              k = d[(q + (n ? 10 : 9)) >> 0] | 0;
              do
                if ((l | 0) < 0) {
                  g = c[v >> 2] | 0;
                  if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                    m = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                    c[v >> 2] = g + 3;
                    i = ((ye(m | 0) | 0) >>> 8) | (i << 24);
                    c[e >> 2] = i;
                    m = (l + 24) | 0;
                    c[A >> 2] = m;
                    break;
                  }
                  if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                    m = (l + 8) | 0;
                    c[A >> 2] = m;
                    c[v >> 2] = g + 1;
                    i = (i << 8) | (d[g >> 0] | 0);
                    c[e >> 2] = i;
                    break;
                  }
                  if (!(c[y >> 2] | 0)) {
                    i = i << 8;
                    c[e >> 2] = i;
                    m = (l + 8) | 0;
                    c[A >> 2] = m;
                    c[y >> 2] = 1;
                    break;
                  } else {
                    c[A >> 2] = 0;
                    m = 0;
                    break;
                  }
                } else m = l;
              while (0);
              k = (O(o, k) | 0) >>> 8;
              n = (i >>> m) >>> 0 > k >>> 0;
              g = (k + 1) | 0;
              l = (i - (g << m)) | 0;
              if (n) {
                c[e >> 2] = l;
                g = (o - k) | 0;
                i = l;
              }
              o = (R(g | 0) | 0) ^ 24;
              m = (m - o) | 0;
              c[A >> 2] = m;
              o = ((g << o) + -1) | 0;
              c[z >> 2] = o;
              r = (n & 1) | (p << 1);
              g = c[(364 + (r << 2)) >> 2] | 0;
              l = a[g >> 0] | 0;
              if (!((l << 24) >> 24)) {
                k = 0;
                g = o;
              } else {
                k = 0;
                q = o;
                while (1) {
                  n = l & 255;
                  do
                    if ((m | 0) < 0) {
                      l = c[v >> 2] | 0;
                      if (l >>> 0 < (c[w >> 2] | 0) >>> 0) {
                        p = d[l >> 0] | (d[(l + 1) >> 0] << 8) | (d[(l + 2) >> 0] << 16) | (d[(l + 3) >> 0] << 24);
                        c[v >> 2] = l + 3;
                        i = ((ye(p | 0) | 0) >>> 8) | (i << 24);
                        c[e >> 2] = i;
                        m = (m + 24) | 0;
                        c[A >> 2] = m;
                        break;
                      }
                      if (l >>> 0 < (c[x >> 2] | 0) >>> 0) {
                        m = (m + 8) | 0;
                        c[A >> 2] = m;
                        c[v >> 2] = l + 1;
                        i = (i << 8) | (d[l >> 0] | 0);
                        c[e >> 2] = i;
                        break;
                      }
                      if (!(c[y >> 2] | 0)) {
                        i = i << 8;
                        c[e >> 2] = i;
                        m = (m + 8) | 0;
                        c[A >> 2] = m;
                        c[y >> 2] = 1;
                        break;
                      } else {
                        c[A >> 2] = 0;
                        m = 0;
                        break;
                      }
                    }
                  while (0);
                  n = (O(n, q) | 0) >>> 8;
                  p = (i >>> m) >>> 0 > n >>> 0;
                  l = (n + 1) | 0;
                  o = (i - (l << m)) | 0;
                  if (p) {
                    c[e >> 2] = o;
                    l = (q - n) | 0;
                    i = o;
                  }
                  n = (R(l | 0) | 0) ^ 24;
                  m = (m - n) | 0;
                  c[A >> 2] = m;
                  n = ((l << n) + -1) | 0;
                  c[z >> 2] = n;
                  k = (p & 1) | (k << 1);
                  g = (g + 1) | 0;
                  l = a[g >> 0] | 0;
                  if (!((l << 24) >> 24)) {
                    g = n;
                    break;
                  } else q = n;
                }
              }
              p = (k + ((8 << r) | 3)) | 0;
              l = 2;
              k = g;
              break;
            }
            k = d[(q + 7) >> 0] | 0;
            do
              if (g) {
                g = c[v >> 2] | 0;
                if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                  r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  c[v >> 2] = g + 3;
                  i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                  c[e >> 2] = i;
                  m = (m + 24) | 0;
                  c[A >> 2] = m;
                  break;
                }
                if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                  m = (m + 8) | 0;
                  c[A >> 2] = m;
                  c[v >> 2] = g + 1;
                  i = (i << 8) | (d[g >> 0] | 0);
                  c[e >> 2] = i;
                  break;
                }
                if (!(c[y >> 2] | 0)) {
                  i = i << 8;
                  c[e >> 2] = i;
                  m = (m + 8) | 0;
                  c[A >> 2] = m;
                  c[y >> 2] = 1;
                  break;
                } else {
                  c[A >> 2] = 0;
                  m = 0;
                  break;
                }
              }
            while (0);
            k = (O(k, o) | 0) >>> 8;
            n = (i >>> m) >>> 0 > k >>> 0;
            g = (k + 1) | 0;
            l = (i - (g << m)) | 0;
            if (n) {
              c[e >> 2] = l;
              g = (o - k) | 0;
              i = l;
            }
            o = (R(g | 0) | 0) ^ 24;
            l = (m - o) | 0;
            c[A >> 2] = l;
            o = ((g << o) + -1) | 0;
            c[z >> 2] = o;
            g = (l | 0) < 0;
            if (!n) {
              do
                if (g) {
                  g = c[v >> 2] | 0;
                  if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                    r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                    c[v >> 2] = g + 3;
                    i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                    c[e >> 2] = i;
                    l = (l + 24) | 0;
                    c[A >> 2] = l;
                    break;
                  }
                  if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                    l = (l + 8) | 0;
                    c[A >> 2] = l;
                    c[v >> 2] = g + 1;
                    i = (i << 8) | (d[g >> 0] | 0);
                    c[e >> 2] = i;
                    break;
                  }
                  if (!(c[y >> 2] | 0)) {
                    i = i << 8;
                    c[e >> 2] = i;
                    l = (l + 8) | 0;
                    c[A >> 2] = l;
                    c[y >> 2] = 1;
                    break;
                  } else {
                    c[A >> 2] = 0;
                    l = 0;
                    break;
                  }
                }
              while (0);
              k = ((o * 159) | 0) >>> 8;
              m = (i >>> l) >>> 0 > k >>> 0;
              g = (k + 1) | 0;
              if (m) {
                i = (i - (g << l)) | 0;
                c[e >> 2] = i;
                g = (o - k) | 0;
              }
              k = (R(g | 0) | 0) ^ 24;
              r = (l - k) | 0;
              c[A >> 2] = r;
              k = ((g << k) + -1) | 0;
              c[z >> 2] = k;
              p = m ? 6 : 5;
              l = 2;
              m = r;
              break;
            }
            do
              if (g) {
                g = c[v >> 2] | 0;
                if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                  r = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  c[v >> 2] = g + 3;
                  i = ((ye(r | 0) | 0) >>> 8) | (i << 24);
                  c[e >> 2] = i;
                  l = (l + 24) | 0;
                  c[A >> 2] = l;
                  break;
                }
                if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                  l = (l + 8) | 0;
                  c[A >> 2] = l;
                  c[v >> 2] = g + 1;
                  i = (i << 8) | (d[g >> 0] | 0);
                  c[e >> 2] = i;
                  break;
                }
                if (!(c[y >> 2] | 0)) {
                  i = i << 8;
                  c[e >> 2] = i;
                  l = (l + 8) | 0;
                  c[A >> 2] = l;
                  c[y >> 2] = 1;
                  break;
                } else {
                  c[A >> 2] = 0;
                  l = 0;
                  break;
                }
              }
            while (0);
            k = ((o * 165) | 0) >>> 8;
            n = (i >>> l) >>> 0 > k >>> 0;
            g = (k + 1) | 0;
            m = (i - (g << l)) | 0;
            if (n) {
              c[e >> 2] = m;
              g = (o - k) | 0;
              i = m;
            }
            o = (R(g | 0) | 0) ^ 24;
            k = (l - o) | 0;
            c[A >> 2] = k;
            o = ((g << o) + -1) | 0;
            c[z >> 2] = o;
            n = (((n & 1) << 1) + 7) | 0;
            do
              if ((k | 0) < 0) {
                g = c[v >> 2] | 0;
                if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
                  l = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                  c[v >> 2] = g + 3;
                  i = ((ye(l | 0) | 0) >>> 8) | (i << 24);
                  c[e >> 2] = i;
                  l = (k + 24) | 0;
                  c[A >> 2] = l;
                  break;
                }
                if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
                  l = (k + 8) | 0;
                  c[A >> 2] = l;
                  c[v >> 2] = g + 1;
                  i = (i << 8) | (d[g >> 0] | 0);
                  c[e >> 2] = i;
                  break;
                }
                if (!(c[y >> 2] | 0)) {
                  i = i << 8;
                  c[e >> 2] = i;
                  l = (k + 8) | 0;
                  c[A >> 2] = l;
                  c[y >> 2] = 1;
                  break;
                } else {
                  c[A >> 2] = 0;
                  l = 0;
                  break;
                }
              } else l = k;
            while (0);
            k = ((o * 145) | 0) >>> 8;
            m = (i >>> l) >>> 0 > k >>> 0;
            g = (k + 1) | 0;
            if (m) {
              i = (i - (g << l)) | 0;
              c[e >> 2] = i;
              g = (o - k) | 0;
            }
            k = (R(g | 0) | 0) ^ 24;
            r = (l - k) | 0;
            c[A >> 2] = r;
            k = ((g << k) + -1) | 0;
            c[z >> 2] = k;
            p = (n + (m & 1)) | 0;
            l = 2;
            m = r;
          } else {
            p = (R(k | 0) | 0) ^ 24;
            m = (l - p) | 0;
            c[A >> 2] = m;
            k = ((k << p) + -1) | 0;
            c[z >> 2] = k;
            p = 1;
            l = 1;
          }
        while (0);
        o = (s + ((l * 11) | 0)) | 0;
        do
          if ((m | 0) < 0) {
            g = c[v >> 2] | 0;
            if (g >>> 0 < (c[w >> 2] | 0) >>> 0) {
              s = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
              c[v >> 2] = g + 3;
              i = (i << 24) | ((ye(s | 0) | 0) >>> 8);
              c[e >> 2] = i;
              g = (m + 24) | 0;
              c[A >> 2] = g;
              break;
            }
            if (g >>> 0 < (c[x >> 2] | 0) >>> 0) {
              s = (m + 8) | 0;
              c[A >> 2] = s;
              c[v >> 2] = g + 1;
              i = (i << 8) | (d[g >> 0] | 0);
              c[e >> 2] = i;
              g = s;
              break;
            }
            if (!(c[y >> 2] | 0)) {
              i = i << 8;
              c[e >> 2] = i;
              g = (m + 8) | 0;
              c[A >> 2] = g;
              c[y >> 2] = 1;
              break;
            } else {
              c[A >> 2] = 0;
              g = 0;
              break;
            }
          } else g = m;
        while (0);
        r = k >>> 1;
        s = (r - (i >>> g)) >> 31;
        l = (g + -1) | 0;
        c[A >> 2] = l;
        n = (s + k) | 1;
        c[z >> 2] = n;
        c[e >> 2] = i - ((s & (r + 1)) << g);
        s = (O(((s ^ p) - s) | 0, c[(h + ((((u | 0) > 0) & 1) << 2)) >> 2] | 0) | 0) & 65535;
        b[(j + ((d[(8501 + u) >> 0] | 0) << 1)) >> 1] = s;
        if ((t | 0) >= 16) {
          g = 16;
          i = 165;
          break;
        } else m = t;
      }
      if ((i | 0) == 164) {
        j = (R(k | 0) | 0) ^ 24;
        c[A >> 2] = l - j;
        c[z >> 2] = (k << j) + -1;
        A = m;
        return A | 0;
      } else if ((i | 0) == 165) return g | 0;
      return 0;
    }
    function Ya(a) {
      a = a | 0;
      var b = 0;
      b = l;
      l = (l + a) | 0;
      l = (l + 15) & -16;
      return b | 0;
    }
    function Za() {
      return l | 0;
    }
    function _a(a) {
      a = a | 0;
      l = a;
    }
    function $a(a, b) {
      a = a | 0;
      b = b | 0;
      l = a;
      m = b;
    }
    function ab(a, b) {
      a = a | 0;
      b = b | 0;
      if (!o) {
        o = a;
        p = b;
      }
    }
    function bb(a) {
      a = a | 0;
      z = a;
    }
    function cb() {
      return z | 0;
    }
    function db(b, e) {
      b = b | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0;
      G = l;
      l = (l + 368) | 0;
      E = (G + 16) | 0;
      u = (G + 8) | 0;
      t = G;
      A = (G + 312) | 0;
      D = (G + 224) | 0;
      F = (G + 24) | 0;
      me(F | 0, 0, 200) | 0;
      if (!(c[2768] | 0)) {
        pa(32) | 0;
        c[2768] = 1;
      }
      a: do
        if (b) {
          o = F;
          s = (o + 40) | 0;
          do {
            c[o >> 2] = 0;
            o = (o + 4) | 0;
          } while ((o | 0) < (s | 0));
          B = (F + 4) | 0;
          x = (F + 8) | 0;
          v = (F + 12) | 0;
          w = (F + 16) | 0;
          if (!(nd(b, e, F, B, x, v, w, 0) | 0)) {
            b: do
              if (!(c[v >> 2] | 0)) {
                f = 0;
                n = b;
                g = 0;
              } else {
                c: do
                  if (e >>> 0 >= 20) {
                    do
                      if (
                        ((Kd(b, 8636) | 0) == 0 ? (Kd((b + 8) | 0, 8641) | 0) == 0 : 0)
                          ? ((f =
                              ((d[(b + 5) >> 0] | 0) << 8) |
                              (d[(b + 4) >> 0] | 0) |
                              ((((d[(b + 7) >> 0] | 0) << 8) | (d[(b + 6) >> 0] | 0)) << 16)),
                            ((f + -8) | 0) >>> 0 <= 4294967278)
                          : 0
                      ) {
                        f = (f + 8) | 0;
                        if (f >>> 0 >= e >>> 0) {
                          if (f >>> 0 > e >>> 0) {
                            f = 0;
                            g = 0;
                            break c;
                          }
                        } else e = f;
                        m = Ad(68) | 0;
                        if (!m) {
                          f = 0;
                          g = 0;
                          break c;
                        }
                        if ((c[(m + -4) >> 2] & 3) | 0) {
                          o = m;
                          s = (o + 68) | 0;
                          do {
                            a[o >> 0] = 0;
                            o = (o + 1) | 0;
                          } while ((o | 0) < (s | 0));
                        }
                        i = (m + 20) | 0;
                        c[i >> 2] = 0;
                        c[(m + 40) >> 2] = 1;
                        c[(m + 44) >> 2] = -1;
                        c[(m + 32) >> 2] = -1;
                        c[(m + 36) >> 2] = -1;
                        j = (m + 52) | 0;
                        c[(m + 56) >> 2] = j;
                        k = (m + 60) | 0;
                        c[(m + 64) >> 2] = k;
                        c[m >> 2] = 12;
                        c[(m + 4) >> 2] = e;
                        c[(m + 8) >> 2] = f;
                        c[(m + 12) >> 2] = e;
                        c[(m + 16) >> 2] = b;
                        f = (b + 12) | 0;
                        if (Kd(380, f) | 0)
                          if (Kd(392, f) | 0) {
                            if (!(Kd(404, f) | 0)) {
                              g = 404;
                              f = 3;
                              z = 29;
                            }
                          } else {
                            g = 392;
                            f = 1;
                            z = 29;
                          }
                        else {
                          g = 380;
                          f = 1;
                          z = 29;
                        }
                        if ((z | 0) == 29) {
                          f = Ua[f & 7](m) | 0;
                          if (f) {
                            if (((f + -1) | 0) >>> 0 >= 2) z = 32;
                          } else {
                            c[i >> 2] = 2;
                            z = 32;
                          }
                          if ((z | 0) == 32 ? Ua[c[(g + 8) >> 2] & 7](m) | 0 : 0) {
                            f = m;
                            g = m;
                            break;
                          }
                          c[i >> 2] = -1;
                        }
                        f = c[j >> 2] | 0;
                        if (f | 0)
                          do {
                            E = f;
                            f = c[(f + 56) >> 2] | 0;
                            Bd(E);
                          } while ((f | 0) != 0);
                        f = c[k >> 2] | 0;
                        if (f | 0)
                          do {
                            E = f;
                            f = c[(f + 8) >> 2] | 0;
                            Bd(E);
                          } while ((f | 0) != 0);
                        Bd(m);
                        f = 0;
                        g = 0;
                        break c;
                      } else z = 11;
                    while (0);
                    d: do
                      if ((z | 0) == 11) {
                        o = A;
                        s = (o + 40) | 0;
                        do {
                          c[o >> 2] = 0;
                          o = (o + 4) | 0;
                        } while ((o | 0) < (s | 0));
                        g = (A + 4) | 0;
                        p = (A + 8) | 0;
                        if (!(nd(b, e, A, g, p, (A + 12) | 0, (A + 16) | 0, 0) | 0)) {
                          r = Ad(68) | 0;
                          f = (r | 0) == 0;
                          if (!f ? (c[(r + -4) >> 2] & 3) | 0 : 0) {
                            o = r;
                            s = (o + 68) | 0;
                            do {
                              a[o >> 0] = 0;
                              o = (o + 1) | 0;
                            } while ((o | 0) < (s | 0));
                          }
                          q = Ad(60) | 0;
                          do
                            if (q | 0) {
                              if ((c[(q + -4) >> 2] & 3) | 0) {
                                o = q;
                                s = (o + 60) | 0;
                                do {
                                  a[o >> 0] = 0;
                                  o = (o + 1) | 0;
                                } while ((o | 0) < (s | 0));
                              }
                              if (!f) {
                                j = (r + 20) | 0;
                                c[j >> 2] = 0;
                                c[(r + 40) >> 2] = 1;
                                c[(r + 44) >> 2] = -1;
                                k = (r + 32) | 0;
                                c[k >> 2] = -1;
                                m = (r + 36) | 0;
                                c[m >> 2] = -1;
                                n = (r + 52) | 0;
                                o = (r + 56) | 0;
                                c[o >> 2] = n;
                                c[(r + 64) >> 2] = r + 60;
                                c[r >> 2] = 0;
                                c[(r + 4) >> 2] = e;
                                c[(r + 8) >> 2] = 0;
                                c[(r + 12) >> 2] = e;
                                c[(r + 16) >> 2] = b;
                                i = c[A >> 2] | 0;
                                g = c[g >> 2] | 0;
                                f = c[p >> 2] | 0;
                                c[(q + 40) >> 2] = 0;
                                c[(q + 44) >> 2] = e;
                                c[(q + 8) >> 2] = i;
                                c[(q + 12) >> 2] = g;
                                C = (q + 16) | 0;
                                f = c[C >> 2] | f;
                                c[C >> 2] = f;
                                c[(q + 32) >> 2] = 1;
                                c[(q + 36) >> 2] = 1;
                                C = c[n >> 2] | 0;
                                if (C | 0 ? (c[(C + 36) >> 2] | 0) == 0 : 0) break;
                                c[n >> 2] = q;
                                C = (q + 56) | 0;
                                c[C >> 2] = 0;
                                c[o >> 2] = C;
                                c[j >> 2] = 2;
                                c[k >> 2] = i;
                                c[m >> 2] = g;
                                g = (r + 28) | 0;
                                c[g >> 2] = c[g >> 2] | (f | 0 ? 16 : 0);
                                c[(r + 48) >> 2] = 1;
                                f = r;
                                g = r;
                                break d;
                              }
                            }
                          while (0);
                          Bd(r);
                          Bd(q);
                        }
                        f = 0;
                        g = 0;
                        break c;
                      }
                    while (0);
                    if (f) {
                      if ((c[(f + 48) >> 2] | 0) >= 1 ? ((h = c[(f + 52) >> 2] | 0), (h | 0) != 0) : 0) {
                        while (1) {
                          if ((c[(h + 32) >> 2] | 0) == 1) break;
                          h = c[(h + 56) >> 2] | 0;
                          if (!h) break c;
                        }
                        i = c[(h + 40) >> 2] | 0;
                        e = c[(h + 44) >> 2] | 0;
                        j = c[(h + 52) >> 2] | 0;
                        if (!j) h = i;
                        else {
                          C = c[(h + 48) >> 2] | 0;
                          h = C;
                          e = (j + e + ((i | 0) == 0 ? 0 : (i - j - C) | 0)) | 0;
                        }
                        h = ((c[(f + 16) >> 2] | 0) + h) | 0;
                        if (h) {
                          n = h;
                          break b;
                        }
                      }
                    } else f = 0;
                  } else {
                    f = 0;
                    g = 0;
                  }
                while (0);
                he();
                h = 0;
                e = 0;
                j = 0;
                i = f;
                break a;
              }
            while (0);
            C = fa(c[F >> 2] | 0, c[B >> 2] | 0, 32, 0) | 0;
            h = c[B >> 2] | 0;
            i = c[F >> 2] | 0;
            if (!C) {
              c[t >> 2] = i;
              c[(t + 4) >> 2] = h;
              ie(0, 1142, t);
              h = 0;
              e = 0;
              j = 0;
              i = f;
              break;
            }
            t = Da(0, i | 0, h | 0, 32, 255, 65280, 16711680, -16777216) | 0;
            if (!t) {
              h = c[B >> 2] | 0;
              c[u >> 2] = c[F >> 2];
              c[(u + 4) >> 2] = h;
              ie(0, 1183, u);
              h = 0;
              e = C;
              j = 0;
              i = f;
              break;
            }
            ma(t | 0) | 0;
            c[(F + 40) >> 2] = 1;
            k = (F + 44) | 0;
            c[k >> 2] = c[(t + 8) >> 2];
            i = c[(t + 12) >> 2] | 0;
            m = (F + 48) | 0;
            c[m >> 2] = i;
            c[(F + 56) >> 2] = c[(t + 20) >> 2];
            o = c[(t + 16) >> 2] | 0;
            p = (F + 60) | 0;
            c[p >> 2] = o;
            r = (F + 64) | 0;
            c[r >> 2] = O(o, i) | 0;
            i = (F + 52) | 0;
            c[i >> 2] = 1;
            o = F;
            s = (o + 40) | 0;
            do {
              c[o >> 2] = 0;
              o = (o + 4) | 0;
            } while ((o | 0) < (s | 0));
            h = nd(n, e, F, B, x, v, w, 0) | 0;
            e: do
              switch (h | 0) {
                case 0: {
                  o = (A + 4) | 0;
                  s = (o + 52) | 0;
                  do {
                    c[o >> 2] = 0;
                    o = (o + 4) | 0;
                  } while ((o | 0) < (s | 0));
                  c[(A + 20) >> 2] = F + 124;
                  j = (F + 40) | 0;
                  c[A >> 2] = j;
                  if ((c[i >> 2] | 0) > 1 ? ((y = c[j >> 2] | 0), !((((y + -7) | 0) >>> 0 > 3) | ((c[x >> 2] | 0) == 0))) : 0) {
                    b = (D + 12) | 0;
                    o = b;
                    s = (o + 72) | 0;
                    do {
                      c[o >> 2] = 0;
                      o = (o + 4) | 0;
                    } while ((o | 0) < (s | 0));
                    c[D >> 2] = y;
                    o = (D + 4) | 0;
                    c[o >> 2] = c[F >> 2];
                    q = (D + 8) | 0;
                    c[q >> 2] = c[B >> 2];
                    c[A >> 2] = D;
                    h = ud(n, e, A) | 0;
                    f: do
                      if (!h) {
                        n = c[o >> 2] | 0;
                        c[k >> 2] = n;
                        i = c[q >> 2] | 0;
                        c[m >> 2] = i;
                        if (!(Hc(j) | 0)) {
                          j = c[D >> 2] | 0;
                          e = c[(D + 16) >> 2] | 0;
                          h = c[(F + 56) >> 2] | 0;
                          if (j >>> 0 < 11) {
                            m = c[(D + 20) >> 2] | 0;
                            k = c[p >> 2] | 0;
                            j = O(d[(4937 + j) >> 0] | 0, n) | 0;
                            if ((i | 0) <= 0) {
                              h = 0;
                              break;
                            }
                            while (1) {
                              pe(h | 0, e | 0, j | 0) | 0;
                              if ((i | 0) > 1) {
                                i = (i + -1) | 0;
                                e = (e + m) | 0;
                                h = (h + k) | 0;
                              } else {
                                h = 0;
                                break f;
                              }
                            }
                          }
                          j = c[(D + 32) >> 2] | 0;
                          k = c[(F + 72) >> 2] | 0;
                          if ((i | 0) > 0) {
                            while (1) {
                              pe(h | 0, e | 0, n | 0) | 0;
                              if ((i | 0) > 1) {
                                i = (i + -1) | 0;
                                e = (e + j) | 0;
                                h = (h + k) | 0;
                              } else break;
                            }
                            h = c[o >> 2] | 0;
                            i = c[q >> 2] | 0;
                          } else h = n;
                          j = c[(D + 36) >> 2] | 0;
                          k = c[(F + 76) >> 2] | 0;
                          m = (((h + 1) | 0) / 2) | 0;
                          if ((i | 0) > 0) {
                            e = (((i + 1) | 0) / 2) | 0;
                            i = c[(D + 20) >> 2] | 0;
                            h = c[p >> 2] | 0;
                            while (1) {
                              pe(h | 0, i | 0, m | 0) | 0;
                              if ((e | 0) > 1) {
                                e = (e + -1) | 0;
                                i = (i + j) | 0;
                                h = (h + k) | 0;
                              } else break;
                            }
                            h = c[o >> 2] | 0;
                            i = c[q >> 2] | 0;
                          }
                          k = c[(D + 40) >> 2] | 0;
                          m = c[(F + 80) >> 2] | 0;
                          j = (((h + 1) | 0) / 2) | 0;
                          if ((i | 0) > 0) {
                            e = (((i + 1) | 0) / 2) | 0;
                            i = c[(D + 24) >> 2] | 0;
                            h = c[r >> 2] | 0;
                            while (1) {
                              pe(h | 0, i | 0, j | 0) | 0;
                              if ((e | 0) > 1) {
                                e = (e + -1) | 0;
                                i = (i + k) | 0;
                                h = (h + m) | 0;
                              } else break;
                            }
                          }
                          h = c[D >> 2] | 0;
                          e = (h + -1) | 0;
                          h = ((h + -7) | 0) >>> 0 < 4;
                          if (e >>> 0 < 12) {
                            if (!(h | (((2077 >>> (e & 65535)) & 1) != 0))) {
                              h = 0;
                              break;
                            }
                          } else if (!h) {
                            h = 0;
                            break;
                          }
                          k = c[(D + 44) >> 2] | 0;
                          m = c[(F + 84) >> 2] | 0;
                          j = c[o >> 2] | 0;
                          h = c[q >> 2] | 0;
                          if ((h | 0) > 0) {
                            e = c[(D + 28) >> 2] | 0;
                            i = c[(F + 68) >> 2] | 0;
                            while (1) {
                              pe(i | 0, e | 0, j | 0) | 0;
                              if ((h | 0) > 1) {
                                h = (h + -1) | 0;
                                e = (e + k) | 0;
                                i = (i + m) | 0;
                              } else {
                                h = 0;
                                break;
                              }
                            }
                          } else h = 0;
                        } else h = 2;
                      }
                    while (0);
                    if ((c[b >> 2] | 0) < 1) Bd(c[(D + 80) >> 2] | 0);
                    z = 83;
                    break e;
                  }
                  h = ud(n, e, A) | 0;
                  z = 83;
                  break;
                }
                case 7: {
                  h = 3;
                  break;
                }
                default:
                  z = 83;
              }
            while (0);
            if ((z | 0) == 83)
              if (!h) {
                Fa(t | 0);
                if (Ka(t | 0, 0, C | 0, 0) | 0) {
                  h = t;
                  e = C;
                  j = 0;
                  i = f;
                  break;
                }
                h = t;
                e = C;
                j = ((Ia(C | 0) | 0) == 0) & 1;
                i = f;
                break;
              }
            c[E >> 2] = h;
            ie(0, 1221, E);
            h = t;
            e = C;
            j = 0;
            i = f;
          } else {
            h = 0;
            e = 0;
            j = 0;
            i = 0;
            g = 0;
          }
        } else {
          h = 0;
          e = 0;
          j = 0;
          i = 0;
          g = 0;
        }
      while (0);
      qa(h | 0);
      qa(e | 0);
      f = (F + 120) | 0;
      if ((c[(F + 52) >> 2] | 0) < 1) Bd(c[f >> 2] | 0);
      c[f >> 2] = 0;
      if (!i) {
        l = G;
        return j | 0;
      }
      f = c[(i + 52) >> 2] | 0;
      if (f | 0)
        do {
          F = f;
          f = c[(f + 56) >> 2] | 0;
          Bd(F);
        } while ((f | 0) != 0);
      f = c[(i + 60) >> 2] | 0;
      if (f | 0)
        do {
          F = f;
          f = c[(f + 8) >> 2] | 0;
          Bd(F);
        } while ((f | 0) != 0);
      Bd(g);
      l = G;
      return j | 0;
    }
    function eb(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0;
      if (!a) return;
      Bd(c[(a + 160) >> 2] | 0);
      Bd(c[(a + 172) >> 2] | 0);
      b = c[(a + 168) >> 2] | 0;
      if (b | 0) Bd(b);
      b = (a + 124) | 0;
      Bd(c[b >> 2] | 0);
      c[b >> 2] = 0;
      Bd(c[(a + 136) >> 2] | 0);
      b = (a + 16) | 0;
      d = (a + 120) | 0;
      e = (d + 56) | 0;
      do {
        c[d >> 2] = 0;
        d = (d + 4) | 0;
      } while ((d | 0) < (e | 0));
      Bd(c[b >> 2] | 0);
      c[b >> 2] = 0;
      d = (a + 176) | 0;
      if ((c[d >> 2] | 0) > 0) {
        b = 0;
        do {
          e = (a + 180 + ((b * 20) | 0) + 16) | 0;
          Bd(c[e >> 2] | 0);
          c[e >> 2] = 0;
          b = (b + 1) | 0;
        } while ((b | 0) < (c[d >> 2] | 0));
      }
      c[d >> 2] = 0;
      c[(a + 260) >> 2] = 0;
      e = (a + 264) | 0;
      Bd(c[e >> 2] | 0);
      c[e >> 2] = 0;
      c[(a + 12) >> 2] = 0;
      return;
    }
    function fb(b, e) {
      b = b | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0;
      f = c[(b + 8) >> 2] | 0;
      q = c[(f + 40) >> 2] | 0;
      u = (q + 12) | 0;
      v = (b + 108) | 0;
      t = c[((c[u >> 2] | 0) >>> 0 < 2 ? (f + 84) | 0 : v) >> 2] | 0;
      r = c[v >> 2] | 0;
      r = (r | 0) < (t | 0) ? t : r;
      if ((r | 0) >= (e | 0)) {
        u = (b + 116) | 0;
        c[u >> 2] = e;
        c[v >> 2] = e;
        return;
      }
      s = c[f >> 2] | 0;
      t = ((c[(q + 136) >> 2] | 0) + (O(s, r) | 0)) | 0;
      g = ((c[(b + 16) >> 2] | 0) + (O(c[(b + 100) >> 2] | 0, r) | 0)) | 0;
      f = c[(b + 184) >> 2] | 0;
      n = 8 >>> f;
      o = c[(b + 188) >> 2] | 0;
      p = c[(b + 196) >> 2] | 0;
      if ((n | 0) < 8) {
        l = ((1 << f) + -1) | 0;
        m = ((1 << n) + -1) | 0;
        if ((o | 0) > 0) {
          i = t;
          j = r;
          while (1) {
            f = 0;
            k = 0;
            h = i;
            while (1) {
              if (!(k & l)) {
                f = d[g >> 0] | 0;
                g = (g + 1) | 0;
              }
              a[h >> 0] = (c[(p + ((f & m) << 2)) >> 2] | 0) >>> 8;
              k = (k + 1) | 0;
              if ((k | 0) == (o | 0)) break;
              else {
                f = f >>> n;
                h = (h + 1) | 0;
              }
            }
            j = (j + 1) | 0;
            if ((j | 0) == (e | 0)) break;
            else i = (i + o) | 0;
          }
        }
      } else if ((o | 0) > 0) {
        k = r;
        f = g;
        g = t;
        while (1) {
          h = 0;
          i = g;
          j = f;
          while (1) {
            a[i >> 0] = (c[(p + ((d[j >> 0] | 0) << 2)) >> 2] | 0) >>> 8;
            h = (h + 1) | 0;
            if ((h | 0) == (o | 0)) break;
            else {
              i = (i + 1) | 0;
              j = (j + 1) | 0;
            }
          }
          k = (k + 1) | 0;
          if ((k | 0) == (e | 0)) break;
          else {
            f = (f + o) | 0;
            g = (g + o) | 0;
          }
        }
      }
      f = c[u >> 2] | 0;
      if (!f) {
        u = (b + 116) | 0;
        c[u >> 2] = e;
        c[v >> 2] = e;
        return;
      }
      h = (q + 140) | 0;
      i = O(s, (e + -1 - r) | 0) | 0;
      Xa[c[(11188 + (f << 2)) >> 2] & 31](c[h >> 2] | 0, t, t, s);
      f = (r + 1) | 0;
      if ((f | 0) != (e | 0)) {
        g = t;
        do {
          r = g;
          g = (g + s) | 0;
          Xa[c[(11188 + (c[u >> 2] << 2)) >> 2] & 31](r, g, g, s);
          f = (f + 1) | 0;
        } while ((f | 0) != (e | 0));
      }
      c[h >> 2] = t + i;
      u = (b + 116) | 0;
      c[u >> 2] = e;
      c[v >> 2] = e;
      return;
    }
    function gb(b, d) {
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0;
      v = (b + 108) | 0;
      f = c[v >> 2] | 0;
      e = (d - f) | 0;
      w = (b + 100) | 0;
      if ((e | 0) <= 0) {
        w = (b + 116) | 0;
        c[w >> 2] = d;
        c[v >> 2] = d;
        return;
      }
      q = c[w >> 2] | 0;
      s = (b + 8) | 0;
      t = (b + 20) | 0;
      u = (b + 176) | 0;
      n = f;
      l = f;
      r = ((c[(b + 16) >> 2] | 0) + ((O(q, f) | 0) << 2)) | 0;
      f = q;
      while (1) {
        q = (e | 0) < 16 ? e : 16;
        o = c[s >> 2] | 0;
        m = c[(o + 40) >> 2] | 0;
        o = c[o >> 2] | 0;
        j = O(o, q) | 0;
        p = ((c[(m + 136) >> 2] | 0) + (O(o, n) | 0)) | 0;
        k = c[t >> 2] | 0;
        g = c[u >> 2] | 0;
        i = (q + l) | 0;
        if ((g | 0) <= 0) {
          if ((k | 0) != (r | 0)) pe(k | 0, r | 0, O(f << 2, q) | 0) | 0;
        } else {
          h = r;
          f = g;
          while (1) {
            g = (f + -1) | 0;
            ib((b + 180 + ((g * 20) | 0)) | 0, l, i, h, k);
            if ((f | 0) > 1) {
              h = k;
              f = g;
            } else break;
          }
        }
        if ((j | 0) > 0) {
          f = 0;
          do {
            a[(p + f) >> 0] = (c[(k + (f << 2)) >> 2] | 0) >>> 8;
            f = (f + 1) | 0;
          } while ((f | 0) != (j | 0));
        }
        k = (q + n) | 0;
        i = (m + 12) | 0;
        g = c[i >> 2] | 0;
        if (g | 0) {
          j = (m + 140) | 0;
          f = c[j >> 2] | 0;
          if ((e | 0) > 0) {
            h = O(o, (q + -1) | 0) | 0;
            Xa[c[(11188 + (g << 2)) >> 2] & 31](f, p, p, o);
            f = (n + 1) | 0;
            if ((f | 0) != (k | 0)) {
              g = p;
              do {
                n = g;
                g = (g + o) | 0;
                Xa[c[(11188 + (c[i >> 2] << 2)) >> 2] & 31](n, g, g, o);
                f = (f + 1) | 0;
              } while ((f | 0) != (k | 0));
            }
            f = (p + h) | 0;
          }
          c[j >> 2] = f;
        }
        e = (e - q) | 0;
        f = c[w >> 2] | 0;
        if ((e | 0) <= 0) break;
        q = (r + ((O(f, q) | 0) << 2)) | 0;
        n = k;
        l = c[v >> 2] | 0;
        r = q;
      }
      w = (b + 116) | 0;
      c[w >> 2] = d;
      c[v >> 2] = d;
      return;
    }
    function hb(f, g, h, i, j, k) {
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        _ = 0,
        $ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0;
      ia = (f + 112) | 0;
      V = c[ia >> 2] | 0;
      n = ((V | 0) / (h | 0)) | 0;
      l = (V | 0) % (h | 0) | 0;
      ha = (f + 24) | 0;
      m = (g + (V << 2)) | 0;
      da = (g + ((O(i, h) | 0) << 2)) | 0;
      aa = O(j, h) | 0;
      W = (g + (aa << 2)) | 0;
      ea = (f + 120) | 0;
      Y = c[ea >> 2] | 0;
      X = (Y + 280) | 0;
      fa = (f + 56) | 0;
      o = c[fa >> 2] | 0 ? n : 16777216;
      Y = (Y | 0) > 0;
      ga = (f + 124) | 0;
      Z = Y ? ga : 0;
      _ = c[(f + 148) >> 2] | 0;
      $ = (f + 152) | 0;
      if ((V | 0) < (aa | 0)) {
        i = c[$ >> 2] | 0;
        if (!i) i = 0;
        else i = c[((c[(f + 160) >> 2] | 0) + (((O(c[(f + 156) >> 2] | 0, n >> i) | 0) + (l >> i)) << 2)) >> 2] | 0;
        L = (f + 168) | 0;
        i = ((c[L >> 2] | 0) + ((i * 548) | 0)) | 0;
      } else {
        i = 0;
        L = (f + 168) | 0;
      }
      M = (f + 160) | 0;
      N = (f + 156) | 0;
      P = (f + 44) | 0;
      aa = (f + 48) | 0;
      Q = (f + 40) | 0;
      R = (f + 36) | 0;
      H = da;
      S = (k | 0) == 0;
      T = (f + 64) | 0;
      U = (f + 96) | 0;
      V = (f + 136) | 0;
      G = (Z + 4) | 0;
      I = (k | 0) != 0;
      J = (f + 32) | 0;
      K = (f + 144) | 0;
      s = m;
      a: while (1) {
        A = m;
        p = s;
        b: while (1) {
          C = l;
          D = p;
          l = o;
          while (1) {
            if (D >>> 0 >= W >>> 0) {
              B = 135;
              break a;
            }
            if ((n | 0) < (l | 0)) F = l;
            else {
              c[T >> 2] = c[ha >> 2];
              c[(T + 4) >> 2] = c[(ha + 4) >> 2];
              c[(T + 8) >> 2] = c[(ha + 8) >> 2];
              c[(T + 12) >> 2] = c[(ha + 12) >> 2];
              c[(T + 16) >> 2] = c[(ha + 16) >> 2];
              c[(T + 20) >> 2] = c[(ha + 20) >> 2];
              c[(T + 24) >> 2] = c[(ha + 24) >> 2];
              c[(T + 28) >> 2] = c[(ha + 28) >> 2];
              c[U >> 2] = (D - g) >> 2;
              if ((c[ea >> 2] | 0) > 0) pe(c[V >> 2] | 0, c[ga >> 2] | 0, (4 << c[K >> 2]) | 0) | 0;
              F = (n + 8) | 0;
            }
            if (!(C & _)) {
              i = c[$ >> 2] | 0;
              if (!i) i = 0;
              else i = c[((c[M >> 2] | 0) + (((O(c[N >> 2] | 0, n >> i) | 0) + (C >> i)) << 2)) >> 2] | 0;
              E = ((c[L >> 2] | 0) + ((i * 548) | 0)) | 0;
            } else E = i;
            if (c[(E + 28) >> 2] | 0) {
              B = 21;
              break b;
            }
            i = c[P >> 2] | 0;
            do
              if ((i | 0) > 31) {
                o = c[R >> 2] | 0;
                l = c[Q >> 2] | 0;
                do {
                  if (l >>> 0 >= o >>> 0) break;
                  w = ha;
                  w = ne(c[w >> 2] | 0, c[(w + 4) >> 2] | 0, 8) | 0;
                  x = z;
                  v = ha;
                  c[v >> 2] = w;
                  c[(v + 4) >> 2] = x;
                  v = oe(d[((c[J >> 2] | 0) + l) >> 0] | 0 | 0, 0, 56) | 0;
                  y = ha;
                  c[y >> 2] = v | w;
                  c[(y + 4) >> 2] = z | x;
                  l = (l + 1) | 0;
                  c[Q >> 2] = l;
                  i = (i + -8) | 0;
                  c[P >> 2] = i;
                } while ((i | 0) > 7);
                if ((c[aa >> 2] | 0) == 0 ? !(((i | 0) > 64) & ((l | 0) == (o | 0))) : 0) break;
                c[aa >> 2] = 1;
                c[P >> 2] = 0;
                i = 0;
              }
            while (0);
            w = ha;
            u = c[w >> 2] | 0;
            w = c[(w + 4) >> 2] | 0;
            if (c[(E + 32) >> 2] | 0) {
              l = ne(u | 0, w | 0, (i & 63) | 0) | 0;
              l = l & 63;
              y = c[(E + 36 + (l << 3)) >> 2] | 0;
              l = c[(E + 36 + (l << 3) + 4) >> 2] | 0;
              i = (y + i) | 0;
              if ((y | 0) < 256) {
                c[P >> 2] = i;
                c[D >> 2] = l;
                i = 0;
              } else {
                c[P >> 2] = i + -256;
                i = l;
              }
              if (c[aa >> 2] | 0) {
                i = 1;
                B = 139;
                break a;
              }
              l = c[Q >> 2] | 0;
              o = c[R >> 2] | 0;
              if ((l | 0) == (o | 0) ? ((ba = c[P >> 2] | 0), (ba | 0) > 64) : 0) {
                i = ba;
                B = 138;
                break a;
              }
              if (!i) {
                i = m;
                break b;
              } else y = i;
            } else {
              p = c[E >> 2] | 0;
              q = ne(u | 0, w | 0, (i & 63) | 0) | 0;
              q = q & 255;
              o = (p + (q << 2)) | 0;
              l = a[o >> 0] | 0;
              if ((l & 255) > 8) {
                i = (i + 8) | 0;
                c[P >> 2] = i;
                y = ne(u | 0, w | 0, (i & 63) | 0) | 0;
                l = (o + ((e[(p + (q << 2) + 2) >> 1] | 0) << 2) + ((y & ((1 << ((l & 255) + -8)) + -1)) << 2)) | 0;
                o = l;
                l = a[l >> 0] | 0;
              }
              c[P >> 2] = (l & 255) + i;
              if (c[aa >> 2] | 0) {
                i = 1;
                B = 139;
                break a;
              }
              y = e[(o + 2) >> 1] | 0;
              l = c[Q >> 2] | 0;
              o = c[R >> 2] | 0;
            }
            if ((l | 0) == (o | 0) ? ((ca = c[P >> 2] | 0), (ca | 0) > 64) : 0) {
              i = ca;
              B = 138;
              break a;
            }
            if ((y | 0) < 256) {
              B = 44;
              break b;
            }
            if ((y | 0) >= 280) {
              B = 129;
              break b;
            }
            i = (y + -256) | 0;
            p = (y + -258) >> 1;
            if ((i | 0) < 4) {
              s = i;
              i = c[P >> 2] | 0;
              v = w;
              x = 0;
            } else {
              s = ((i & 1) | 2) << p;
              c: do
                if ((p | 0) < 25) {
                  i = c[P >> 2] | 0;
                  r = ne(u | 0, w | 0, (i & 63) | 0) | 0;
                  r = r & c[(8 + (p << 2)) >> 2];
                  i = (i + p) | 0;
                  c[P >> 2] = i;
                  if ((i | 0) > 7) {
                    q = u;
                    p = w;
                    while (1) {
                      if (l >>> 0 >= o >>> 0) break;
                      q = ne(q | 0, p | 0, 8) | 0;
                      p = z;
                      y = ha;
                      c[y >> 2] = q;
                      c[(y + 4) >> 2] = p;
                      y = oe(d[((c[J >> 2] | 0) + l) >> 0] | 0 | 0, 0, 56) | 0;
                      q = y | q;
                      p = z | p;
                      y = ha;
                      c[y >> 2] = q;
                      c[(y + 4) >> 2] = p;
                      l = (l + 1) | 0;
                      c[Q >> 2] = l;
                      i = (i + -8) | 0;
                      c[P >> 2] = i;
                      if ((i | 0) <= 7) {
                        t = 0;
                        break c;
                      }
                    }
                    if (((l | 0) == (o | 0)) & ((i | 0) > 64)) {
                      i = r;
                      l = o;
                      B = 74;
                    } else t = 0;
                  } else {
                    t = 0;
                    q = u;
                    p = w;
                  }
                } else {
                  i = 0;
                  q = u;
                  p = w;
                  B = 74;
                }
              while (0);
              if ((B | 0) == 74) {
                B = 0;
                c[aa >> 2] = 1;
                c[P >> 2] = 0;
                r = i;
                i = 0;
                t = 1;
              }
              s = (r + s) | 0;
              u = q;
              v = p;
              x = t;
            }
            y = (s + 1) | 0;
            q = c[(E + 16) >> 2] | 0;
            r = ne(u | 0, v | 0, (i & 63) | 0) | 0;
            r = r & 255;
            t = (q + (r << 2)) | 0;
            p = a[t >> 0] | 0;
            if ((p & 255) > 8) {
              i = (i + 8) | 0;
              c[P >> 2] = i;
              w = ne(u | 0, v | 0, (i & 63) | 0) | 0;
              p = (t + ((e[(q + (r << 2) + 2) >> 1] | 0) << 2) + ((w & ((1 << ((p & 255) + -8)) + -1)) << 2)) | 0;
              t = p;
              p = a[p >> 0] | 0;
            }
            i = ((p & 255) + i) | 0;
            c[P >> 2] = i;
            w = b[(t + 2) >> 1] | 0;
            r = w & 65535;
            do
              if ((i | 0) > 31) {
                q = u;
                p = v;
                while (1) {
                  if (l >>> 0 >= o >>> 0) {
                    t = q;
                    break;
                  }
                  q = ne(q | 0, p | 0, 8) | 0;
                  p = z;
                  v = ha;
                  c[v >> 2] = q;
                  c[(v + 4) >> 2] = p;
                  v = oe(d[((c[J >> 2] | 0) + l) >> 0] | 0 | 0, 0, 56) | 0;
                  q = v | q;
                  p = z | p;
                  v = ha;
                  c[v >> 2] = q;
                  c[(v + 4) >> 2] = p;
                  l = (l + 1) | 0;
                  c[Q >> 2] = l;
                  i = (i + -8) | 0;
                  c[P >> 2] = i;
                  if ((i | 0) <= 7) {
                    t = q;
                    break;
                  }
                }
                if ((x | 0) == 0 ? !(((i | 0) > 64) & ((l | 0) == (o | 0))) : 0) {
                  q = 0;
                  u = t;
                  break;
                }
                c[aa >> 2] = 1;
                c[P >> 2] = 0;
                i = 0;
                q = 1;
                u = t;
              } else {
                q = x;
                p = v;
              }
            while (0);
            t = (r + -2) >> 1;
            if ((w & 65535) >= 4) {
              v = ((r & 1) | 2) << t;
              d: do
                if (((t | 0) < 25) & ((q | 0) == 0)) {
                  r = ne(u | 0, p | 0, (i & 63) | 0) | 0;
                  r = r & c[(8 + (t << 2)) >> 2];
                  i = (i + t) | 0;
                  c[P >> 2] = i;
                  if ((i | 0) > 7) q = u;
                  else {
                    q = r;
                    p = 0;
                    break;
                  }
                  while (1) {
                    if (l >>> 0 >= o >>> 0) break;
                    w = ne(q | 0, p | 0, 8) | 0;
                    x = z;
                    u = ha;
                    c[u >> 2] = w;
                    c[(u + 4) >> 2] = x;
                    u = oe(d[((c[J >> 2] | 0) + l) >> 0] | 0 | 0, 0, 56) | 0;
                    q = u | w;
                    p = z | x;
                    x = ha;
                    c[x >> 2] = q;
                    c[(x + 4) >> 2] = p;
                    l = (l + 1) | 0;
                    c[Q >> 2] = l;
                    i = (i + -8) | 0;
                    c[P >> 2] = i;
                    if ((i | 0) <= 7) {
                      q = r;
                      p = 0;
                      break d;
                    }
                  }
                  if (((l | 0) == (o | 0)) & ((i | 0) > 64)) {
                    i = r;
                    l = o;
                    B = 90;
                  } else {
                    q = r;
                    p = 0;
                  }
                } else {
                  i = 0;
                  B = 90;
                }
              while (0);
              if ((B | 0) == 90) {
                B = 0;
                c[aa >> 2] = 1;
                c[P >> 2] = 0;
                q = i;
                i = 0;
                p = 1;
              }
              r = (q + v) | 0;
              q = p;
            }
            if (((r + 1) | 0) > 120) p = (r + -119) | 0;
            else {
              p = d[(4792 + r) >> 0] | 0;
              p = ((O(p >>> 4, h) | 0) + (8 - (p & 15))) | 0;
              p = (p | 0) > 1 ? p : 1;
            }
            if (q | 0) {
              i = 1;
              B = 139;
              break a;
            }
            if (((l | 0) == (o | 0)) & ((i | 0) > 64)) {
              B = 138;
              break a;
            }
            l = D;
            if ((((l - g) >> 2) | 0) < (p | 0)) break a;
            if ((((H - l) >> 2) | 0) < (y | 0)) break a;
            q = (D + ((0 - p) << 2)) | 0;
            do
              if ((((l & 3) | 0) == 0) & (((y | 0) > 3) & ((p | 0) < 3))) {
                if ((p | 0) == 1) {
                  r = c[q >> 2] | 0;
                  i = r;
                  o = r;
                } else {
                  r = q;
                  o = c[r >> 2] | 0;
                  i = o;
                  r = c[(r + 4) >> 2] | 0;
                }
                if (!(l & 4)) {
                  s = y;
                  t = D;
                  p = o;
                  o = r;
                } else {
                  c[D >> 2] = i;
                  t = (D + 4) | 0;
                  q = (q + 4) | 0;
                  p = r;
                }
                l = s >> 1;
                if ((l | 0) > 0) {
                  i = 0;
                  do {
                    x = (t + (i << 3)) | 0;
                    c[x >> 2] = p;
                    c[(x + 4) >> 2] = o;
                    i = (i + 1) | 0;
                  } while ((i | 0) != (l | 0));
                  i = l << 1;
                } else i = 0;
                if (!(s & 1)) break;
                c[(t + (i << 2)) >> 2] = c[(q + (i << 2)) >> 2];
              } else {
                if ((p | 0) >= (y | 0)) {
                  pe(D | 0, q | 0, (y << 2) | 0) | 0;
                  break;
                }
                if ((y | 0) > 0) i = 0;
                else break;
                do {
                  c[(D + (i << 2)) >> 2] = c[(q + (i << 2)) >> 2];
                  i = (i + 1) | 0;
                } while ((i | 0) != (y | 0));
              }
            while (0);
            p = (D + (y << 2)) | 0;
            l = (y + C) | 0;
            e: do
              if ((l | 0) >= (h | 0)) {
                if (S) {
                  i = n;
                  while (1) {
                    l = (l - h) | 0;
                    i = (i + 1) | 0;
                    if ((l | 0) < (h | 0)) {
                      n = i;
                      break e;
                    }
                  }
                } else i = n;
                while (1) {
                  l = (l - h) | 0;
                  n = (i + 1) | 0;
                  if (((i | 0) < (j | 0)) & (((n & 15) | 0) == 0)) Sa[k & 3](f, n);
                  if ((l | 0) < (h | 0)) break;
                  else i = n;
                }
              }
            while (0);
            if (!(l & _)) i = E;
            else {
              i = c[$ >> 2] | 0;
              if (!i) i = 0;
              else i = c[((c[M >> 2] | 0) + (((O(c[N >> 2] | 0, n >> i) | 0) + (l >> i)) << 2)) >> 2] | 0;
              i = ((c[L >> 2] | 0) + ((i * 548) | 0)) | 0;
            }
            if (Y) break;
            else {
              C = l;
              D = p;
              l = F;
            }
          }
          if (m >>> 0 < p >>> 0) {
            B = 127;
            break;
          } else o = F;
        }
        do
          if ((B | 0) == 21) {
            i = m;
            l = c[(E + 24) >> 2] | 0;
            B = 59;
          } else if ((B | 0) == 44) {
            if (c[(E + 20) >> 2] | 0) {
              i = m;
              l = c[(E + 24) >> 2] | (y << 8);
              B = 59;
              break;
            }
            q = c[(E + 4) >> 2] | 0;
            i = c[P >> 2] | 0;
            r = ne(u | 0, w | 0, (i & 63) | 0) | 0;
            r = r & 255;
            s = (q + (r << 2)) | 0;
            p = a[s >> 0] | 0;
            if ((p & 255) > 8) {
              i = (i + 8) | 0;
              c[P >> 2] = i;
              B = ne(u | 0, w | 0, (i & 63) | 0) | 0;
              p = (s + ((e[(q + (r << 2) + 2) >> 1] | 0) << 2) + ((B & ((1 << ((p & 255) + -8)) + -1)) << 2)) | 0;
              s = p;
              p = a[p >> 0] | 0;
            }
            p = ((p & 255) + i) | 0;
            c[P >> 2] = p;
            x = e[(s + 2) >> 1] | 0;
            f: do
              if ((p | 0) > 31) {
                i = u;
                q = w;
                while (1) {
                  if (l >>> 0 >= o >>> 0) break;
                  i = ne(i | 0, q | 0, 8) | 0;
                  q = z;
                  B = ha;
                  c[B >> 2] = i;
                  c[(B + 4) >> 2] = q;
                  B = oe(d[((c[J >> 2] | 0) + l) >> 0] | 0 | 0, 0, 56) | 0;
                  i = B | i;
                  q = z | q;
                  B = ha;
                  c[B >> 2] = i;
                  c[(B + 4) >> 2] = q;
                  l = (l + 1) | 0;
                  c[Q >> 2] = l;
                  p = (p + -8) | 0;
                  c[P >> 2] = p;
                  if ((p | 0) <= 7) {
                    v = i;
                    w = 0;
                    break f;
                  }
                }
                if (((p | 0) > 64) & ((l | 0) == (o | 0))) {
                  c[aa >> 2] = 1;
                  c[P >> 2] = 0;
                  p = 0;
                  v = i;
                  w = 1;
                  l = o;
                } else {
                  v = i;
                  w = 0;
                }
              } else {
                v = u;
                q = w;
                w = 0;
              }
            while (0);
            r = c[(E + 8) >> 2] | 0;
            s = ne(v | 0, q | 0, (p & 63) | 0) | 0;
            s = s & 255;
            t = (r + (s << 2)) | 0;
            i = a[t >> 0] | 0;
            if ((i & 255) > 8) {
              p = (p + 8) | 0;
              c[P >> 2] = p;
              B = ne(v | 0, q | 0, (p & 63) | 0) | 0;
              i = (t + ((e[(r + (s << 2) + 2) >> 1] | 0) << 2) + ((((1 << ((i & 255) + -8)) + -1) & B) << 2)) | 0;
              t = i;
              i = a[i >> 0] | 0;
            }
            i = ((i & 255) + p) | 0;
            c[P >> 2] = i;
            u = e[(t + 2) >> 1] | 0;
            r = c[(E + 12) >> 2] | 0;
            s = ne(v | 0, q | 0, (i & 63) | 0) | 0;
            s = s & 255;
            t = (r + (s << 2)) | 0;
            p = a[t >> 0] | 0;
            if ((p & 255) > 8) {
              i = (i + 8) | 0;
              c[P >> 2] = i;
              q = ne(v | 0, q | 0, (i & 63) | 0) | 0;
              p = (t + ((e[(r + (s << 2) + 2) >> 1] | 0) << 2) + ((((1 << ((p & 255) + -8)) + -1) & q) << 2)) | 0;
              q = p;
              p = a[p >> 0] | 0;
            } else q = t;
            i = ((p & 255) + i) | 0;
            c[P >> 2] = i;
            if (w | 0) {
              i = 1;
              B = 139;
              break a;
            }
            if (((i | 0) > 64) & ((l | 0) == (o | 0))) {
              B = 138;
              break a;
            } else {
              i = m;
              l = (x << 16) | (y << 8) | u | ((e[(q + 2) >> 1] | 0) << 24);
              B = 59;
            }
          } else if ((B | 0) == 127) {
            B = 0;
            o = c[Z >> 2] | 0;
            r = (m + 4) | 0;
            q = ((p >>> 0 > r >>> 0 ? p : r) + -1 + (0 - A)) | 0;
            do {
              D = c[m >> 2] | 0;
              m = (m + 4) | 0;
              E = c[G >> 2] | 0;
              C = ue(D | 0, 0, 506832829, 0) | 0;
              E = ne(C | 0, 0, E | 0) | 0;
              c[(o + (E << 2)) >> 2] = D;
            } while (m >>> 0 < p >>> 0);
            s = p;
            m = (r + ((q >>> 2) << 2)) | 0;
            o = F;
            continue a;
          } else if ((B | 0) == 129) {
            B = 0;
            if ((y | 0) >= (X | 0)) break a;
            p = (y + -280) | 0;
            o = c[Z >> 2] | 0;
            if (m >>> 0 < D >>> 0) {
              l = (D + -1 + (0 - A)) | 0;
              i = m;
              do {
                A = c[i >> 2] | 0;
                i = (i + 4) | 0;
                B = c[G >> 2] | 0;
                y = ue(A | 0, 0, 506832829, 0) | 0;
                B = ne(y | 0, 0, B | 0) | 0;
                c[(o + (B << 2)) >> 2] = A;
              } while (i >>> 0 < D >>> 0);
              i = (m + 4 + ((l >>> 2) << 2)) | 0;
            } else i = m;
            l = c[(o + (p << 2)) >> 2] | 0;
            B = 59;
          }
        while (0);
        if ((B | 0) == 59) {
          B = 0;
          c[D >> 2] = l;
        }
        q = (D + 4) | 0;
        l = (C + 1) | 0;
        if ((l | 0) < (h | 0)) {
          s = q;
          m = i;
          o = F;
          i = E;
          continue;
        }
        o = (n + 1) | 0;
        if (I & ((n | 0) < (j | 0)) & (((o & 15) | 0) == 0)) Sa[k & 3](f, o);
        if (!(Y & (i >>> 0 < q >>> 0))) {
          n = o;
          l = 0;
          s = q;
          m = i;
          o = F;
          i = E;
          continue;
        }
        m = c[Z >> 2] | 0;
        p = ((i >>> 0 > D >>> 0 ? i : D) + 3 + (0 - i)) | 0;
        l = i;
        while (1) {
          A = c[l >> 2] | 0;
          C = c[G >> 2] | 0;
          y = ue(A | 0, 0, 506832829, 0) | 0;
          C = ne(y | 0, 0, C | 0) | 0;
          c[(m + (C << 2)) >> 2] = A;
          if (l >>> 0 < D >>> 0) l = (l + 4) | 0;
          else break;
        }
        n = o;
        l = 0;
        s = q;
        m = (i + 4 + ((p >>> 2) << 2)) | 0;
        o = F;
        i = E;
      }
      if ((B | 0) == 135)
        if (!(c[aa >> 2] | 0))
          if ((c[Q >> 2] | 0) == (c[R >> 2] | 0)) {
            i = c[P >> 2] | 0;
            B = 138;
          } else {
            i = 0;
            B = 139;
          }
        else {
          i = 1;
          B = 139;
        }
      if ((B | 0) == 138) {
        i = (i | 0) > 64;
        B = 139;
      }
      if ((B | 0) == 139) {
        c[aa >> 2] = i & 1;
        if ((D >>> 0 < da >>> 0) & (i & ((c[fa >> 2] | 0) != 0))) {
          c[f >> 2] = 5;
          c[ha >> 2] = c[T >> 2];
          c[(ha + 4) >> 2] = c[(T + 4) >> 2];
          c[(ha + 8) >> 2] = c[(T + 8) >> 2];
          c[(ha + 12) >> 2] = c[(T + 12) >> 2];
          c[(ha + 16) >> 2] = c[(T + 16) >> 2];
          c[(ha + 20) >> 2] = c[(T + 20) >> 2];
          c[(ha + 24) >> 2] = c[(T + 24) >> 2];
          c[(ha + 28) >> 2] = c[(T + 28) >> 2];
          c[ia >> 2] = c[U >> 2];
          if ((c[ea >> 2] | 0) <= 0) {
            ia = 1;
            return ia | 0;
          }
          pe(c[ga >> 2] | 0, c[V >> 2] | 0, (4 << c[(f + 132) >> 2]) | 0) | 0;
          ia = 1;
          return ia | 0;
        }
        if (!i) {
          if (!S) Sa[k & 3](f, (n | 0) > (j | 0) ? j : n);
          c[f >> 2] = 0;
          c[ia >> 2] = (D - g) >> 2;
          ia = 1;
          return ia | 0;
        }
      }
      c[f >> 2] = 3;
      ia = 0;
      return ia | 0;
    }
    function ib(a, b, d, e, f) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0;
      i = (a + 8) | 0;
      v = c[i >> 2] | 0;
      switch (c[a >> 2] | 0) {
        case 2: {
          h = O(v, (d - b) | 0) | 0;
          if ((h | 0) > 0) g = 0;
          else return;
          do {
            d = c[(e + (g << 2)) >> 2] | 0;
            v = (d >>> 8) & 255;
            c[(f + (g << 2)) >> 2] = ((((v << 16) | v) + (d & 16711935)) & 16711935) | (d & -16711936);
            g = (g + 1) | 0;
          } while ((g | 0) != (h | 0));
          return;
        }
        case 0: {
          k = (v + -1) | 0;
          if (!b) {
            g = c[e >> 2] | 0;
            g = ((g + -16777216) & -16711936) | (g & 16711935);
            c[f >> 2] = g;
            i = (e + 4) | 0;
            j = (f + 4) | 0;
            if ((v | 0) > 1) {
              h = 0;
              do {
                u = c[(i + (h << 2)) >> 2] | 0;
                g = (((u & -16711936) + (g & -16711936)) & -16711936) | (((u & 16711935) + (g & 16711935)) & 16711935);
                c[(j + (h << 2)) >> 2] = g;
                h = (h + 1) | 0;
              } while ((h | 0) != (k | 0));
            }
            h = 1;
            e = (e + (v << 2)) | 0;
            g = (f + (v << 2)) | 0;
          } else {
            h = b;
            g = f;
          }
          i = c[(a + 4) >> 2] | 0;
          n = 1 << i;
          o = (n + -1) | 0;
          l = ((n + k) | 0) >>> i;
          a: do
            if ((h | 0) < (d | 0)) {
              p = (0 - v) | 0;
              m = (0 - n) | 0;
              if ((v | 0) <= 1)
                while (1) {
                  u = c[(g + (p << 2)) >> 2] | 0;
                  t = c[e >> 2] | 0;
                  c[g >> 2] = (((t & -16711936) + (u & -16711936)) & -16711936) | (((t & 16711935) + (u & 16711935)) & 16711935);
                  h = (h + 1) | 0;
                  if ((h | 0) == (d | 0)) break a;
                  else {
                    e = (e + (v << 2)) | 0;
                    g = (g + (v << 2)) | 0;
                  }
                }
              k = ((c[(a + 16) >> 2] | 0) + ((O(l, h >> i) | 0) << 2)) | 0;
              while (1) {
                i = c[(g + (p << 2)) >> 2] | 0;
                j = c[e >> 2] | 0;
                c[g >> 2] = (((j & -16711936) + (i & -16711936)) & -16711936) | (((j & 16711935) + (i & 16711935)) & 16711935);
                i = 1;
                j = k;
                while (1) {
                  u = ((i & m) + n) | 0;
                  s = i;
                  i = (u | 0) > (v | 0) ? v : u;
                  t = (g + (s << 2)) | 0;
                  Xa[c[(11204 + ((((c[j >> 2] | 0) >>> 8) & 15) << 2)) >> 2] & 31]((e + (s << 2)) | 0, (t + (p << 2)) | 0, (i - s) | 0, t);
                  if ((v | 0) <= (u | 0)) break;
                  else j = (j + 4) | 0;
                }
                h = (h + 1) | 0;
                if ((h | 0) == (d | 0)) break;
                else {
                  k = ((h & o) | 0) == 0 ? (k + (l << 2)) | 0 : k;
                  e = (e + (v << 2)) | 0;
                  g = (g + (v << 2)) | 0;
                }
              }
            }
          while (0);
          if ((c[(a + 12) >> 2] | 0) == (d | 0)) return;
          pe((f + ((0 - v) << 2)) | 0, (f + ((O(v, (d + ~b) | 0) | 0) << 2)) | 0, (v << 2) | 0) | 0;
          return;
        }
        case 1: {
          g = c[(a + 4) >> 2] | 0;
          q = 1 << g;
          s = (q + -1) | 0;
          r = v & (0 - q);
          t = (v - r) | 0;
          u = ((v + -1 + q) | 0) >>> g;
          if ((d | 0) <= (b | 0)) return;
          l = ((c[(a + 16) >> 2] | 0) + ((O(u, b >> g) | 0) << 2)) | 0;
          if ((r | 0) <= 0) {
            if ((v | 0) <= 0) return;
            m = (t | 0) > 0;
            g = b;
            while (1) {
              h = c[l >> 2] | 0;
              if (m) {
                j = (h << 24) >> 24;
                k = (h << 16) >> 24;
                i = (h << 8) >> 24;
                h = 0;
                do {
                  a = c[(e + (h << 2)) >> 2] | 0;
                  r = (a << 16) >> 24;
                  v = (((O(r, j) | 0) >> 5) + (a >>> 16)) | 0;
                  c[(f + (h << 2)) >> 2] =
                    ((v << 16) & 16711680) | (a & -16711936) | ((((O(r, k) | 0) >>> 5) + a + ((O((v << 24) >> 24, i) | 0) >>> 5)) & 255);
                  h = (h + 1) | 0;
                } while ((h | 0) != (t | 0));
              }
              g = (g + 1) | 0;
              if ((g | 0) == (d | 0)) break;
              else {
                f = (f + (t << 2)) | 0;
                l = ((g & s) | 0) == 0 ? (l + (u << 2)) | 0 : l;
                e = (e + (t << 2)) | 0;
              }
            }
            return;
          }
          o = (g | 0) == 31;
          p = (t | 0) > 0;
          g = f;
          while (1) {
            m = (e + (r << 2)) | 0;
            f = l;
            n = e;
            do {
              h = f;
              f = (f + 4) | 0;
              h = c[h >> 2] | 0;
              if (!o) {
                j = (h << 24) >> 24;
                k = ((h >>> 8) << 24) >> 24;
                i = ((h >>> 16) << 24) >> 24;
                h = 0;
                do {
                  w = c[(n + (h << 2)) >> 2] | 0;
                  x = (w << 16) >> 24;
                  a = (((O(x, j) | 0) >> 5) + (w >>> 16)) | 0;
                  c[(g + (h << 2)) >> 2] =
                    ((a << 16) & 16711680) | (w & -16711936) | ((((O(x, k) | 0) >>> 5) + w + ((O((a << 24) >> 24, i) | 0) >>> 5)) & 255);
                  h = (h + 1) | 0;
                } while ((h | 0) != (q | 0));
              }
              n = (n + (q << 2)) | 0;
              g = (g + (q << 2)) | 0;
            } while (n >>> 0 < m >>> 0);
            if (n >>> 0 < ((e + (v << 2)) | 0) >>> 0) {
              h = c[f >> 2] | 0;
              if (p) {
                j = (h << 24) >> 24;
                e = (h << 16) >> 24;
                i = (h << 8) >> 24;
                h = 0;
                do {
                  w = c[(n + (h << 2)) >> 2] | 0;
                  a = (w << 16) >> 24;
                  x = (((O(a, j) | 0) >> 5) + (w >>> 16)) | 0;
                  c[(g + (h << 2)) >> 2] =
                    ((x << 16) & 16711680) | (w & -16711936) | ((((O(a, e) | 0) >>> 5) + w + ((O((x << 24) >> 24, i) | 0) >>> 5)) & 255);
                  h = (h + 1) | 0;
                } while ((h | 0) != (t | 0));
              }
              e = (n + (t << 2)) | 0;
              g = (g + (t << 2)) | 0;
            } else e = n;
            b = (b + 1) | 0;
            if ((b | 0) == (d | 0)) break;
            else l = ((b & s) | 0) == 0 ? (l + (u << 2)) | 0 : l;
          }
          return;
        }
        case 3: {
          g = (a + 4) | 0;
          h = c[g >> 2] | 0;
          if (((e | 0) == (f | 0)) & ((h | 0) > 0)) {
            k = (d - b) | 0;
            n = O(((v + -1 + (1 << h)) | 0) >>> h, k) | 0;
            k = (e + ((O(v, k) | 0) << 2) + ((0 - n) << 2)) | 0;
            we(k | 0, e | 0, (n << 2) | 0) | 0;
            g = c[g >> 2] | 0;
            n = c[i >> 2] | 0;
            m = c[(a + 16) >> 2] | 0;
            f = 8 >>> g;
            if ((f | 0) >= 8) {
              if (((d | 0) > (b | 0)) & ((n | 0) > 0)) g = e;
              else return;
              while (1) {
                h = 0;
                i = g;
                j = k;
                while (1) {
                  c[i >> 2] = c[(m + ((((c[j >> 2] | 0) >>> 8) & 255) << 2)) >> 2];
                  h = (h + 1) | 0;
                  if ((h | 0) == (n | 0)) break;
                  else {
                    i = (i + 4) | 0;
                    j = (j + 4) | 0;
                  }
                }
                b = (b + 1) | 0;
                if ((b | 0) == (d | 0)) break;
                else {
                  k = (k + (n << 2)) | 0;
                  g = (g + (n << 2)) | 0;
                }
              }
              return;
            }
            j = ((1 << g) + -1) | 0;
            l = ((1 << f) + -1) | 0;
            if (!(((d | 0) > (b | 0)) & ((n | 0) > 0))) return;
            while (1) {
              i = 0;
              g = 0;
              h = e;
              while (1) {
                if (!(i & j)) {
                  g = ((c[k >> 2] | 0) >>> 8) & 255;
                  k = (k + 4) | 0;
                }
                c[h >> 2] = c[(m + ((g & l) << 2)) >> 2];
                i = (i + 1) | 0;
                if ((i | 0) == (n | 0)) break;
                else {
                  g = g >>> f;
                  h = (h + 4) | 0;
                }
              }
              b = (b + 1) | 0;
              if ((b | 0) == (d | 0)) break;
              else e = (e + (n << 2)) | 0;
            }
            return;
          } else {
            n = c[(a + 16) >> 2] | 0;
            m = 8 >>> h;
            if ((m | 0) >= 8) {
              if (((d | 0) > (b | 0)) & ((v | 0) > 0)) {
                k = b;
                g = f;
              } else return;
              while (1) {
                h = 0;
                i = g;
                j = e;
                while (1) {
                  c[i >> 2] = c[(n + ((((c[j >> 2] | 0) >>> 8) & 255) << 2)) >> 2];
                  h = (h + 1) | 0;
                  if ((h | 0) == (v | 0)) break;
                  else {
                    i = (i + 4) | 0;
                    j = (j + 4) | 0;
                  }
                }
                k = (k + 1) | 0;
                if ((k | 0) == (d | 0)) break;
                else {
                  e = (e + (v << 2)) | 0;
                  g = (g + (v << 2)) | 0;
                }
              }
              return;
            }
            k = ((1 << h) + -1) | 0;
            l = ((1 << m) + -1) | 0;
            if (((d | 0) > (b | 0)) & ((v | 0) > 0)) j = f;
            else return;
            while (1) {
              i = 0;
              g = 0;
              h = j;
              while (1) {
                if (!(i & k)) {
                  g = ((c[e >> 2] | 0) >>> 8) & 255;
                  e = (e + 4) | 0;
                }
                c[h >> 2] = c[(n + ((g & l) << 2)) >> 2];
                i = (i + 1) | 0;
                if ((i | 0) == (v | 0)) break;
                else {
                  g = g >>> m;
                  h = (h + 4) | 0;
                }
              }
              b = (b + 1) | 0;
              if ((b | 0) == (d | 0)) break;
              else j = (j + (v << 2)) | 0;
            }
            return;
          }
        }
        default:
          return;
      }
    }
    function jb() {
      if (!(c[28] | 0)) return;
      c[2817] = 1;
      c[2818] = 2;
      c[2819] = 3;
      c[2820] = 4;
      c[2821] = 5;
      c[2822] = 6;
      c[2823] = 7;
      c[2824] = 8;
      c[2825] = 9;
      c[2826] = 10;
      c[2827] = 11;
      c[2828] = 12;
      c[2829] = 13;
      c[2830] = 14;
      c[2831] = 1;
      c[2832] = 1;
      c[2849] = 1;
      c[2850] = 2;
      c[2851] = 3;
      c[2852] = 4;
      c[2853] = 5;
      c[2854] = 6;
      c[2855] = 7;
      c[2856] = 8;
      c[2857] = 9;
      c[2858] = 10;
      c[2859] = 11;
      c[2860] = 12;
      c[2861] = 13;
      c[2862] = 14;
      c[2863] = 1;
      c[2864] = 1;
      c[2801] = 1;
      c[2802] = 2;
      c[2803] = 3;
      c[2804] = 4;
      c[2805] = 5;
      c[2806] = 6;
      c[2807] = 7;
      c[2808] = 8;
      c[2809] = 9;
      c[2810] = 10;
      c[2811] = 11;
      c[2812] = 12;
      c[2813] = 13;
      c[2814] = 14;
      c[2815] = 1;
      c[2816] = 1;
      c[2833] = 1;
      c[2834] = 2;
      c[2835] = 3;
      c[2836] = 4;
      c[2837] = 5;
      c[2838] = 6;
      c[2839] = 7;
      c[2840] = 8;
      c[2841] = 9;
      c[2842] = 10;
      c[2843] = 11;
      c[2844] = 12;
      c[2845] = 13;
      c[2846] = 14;
      c[2847] = 1;
      c[2848] = 1;
      c[28] = 0;
      return;
    }
    function kb(f, g, h, i, j) {
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      var k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        P = 0,
        Q = 0,
        R = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        _ = 0,
        $ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0;
      ea = l;
      l = (l + 1648) | 0;
      Y = (ea + 624) | 0;
      Z = (ea + 112) | 0;
      _ = (ea + 36) | 0;
      $ = ea;
      aa = (ea + 32) | 0;
      U = (i + 24) | 0;
      da = (i + 120) | 0;
      ba = (h | 0) != 0;
      a: do
        if (ba) {
          w = (i + 176) | 0;
          x = (i + 260) | 0;
          C = (i + 48) | 0;
          v = (i + 44) | 0;
          y = (i + 40) | 0;
          A = (i + 36) | 0;
          B = (i + 32) | 0;
          t = f;
          while (1) {
            b: while (1) {
              c: while (1) {
                d: do
                  if (!(c[C >> 2] | 0)) {
                    n = U;
                    k = c[n >> 2] | 0;
                    n = c[(n + 4) >> 2] | 0;
                    T = c[v >> 2] | 0;
                    f = ne(k | 0, n | 0, (T & 63) | 0) | 0;
                    f = f & 1;
                    m = (T + 1) | 0;
                    c[v >> 2] = m;
                    if ((T | 0) > 6) {
                      p = c[A >> 2] | 0;
                      o = c[y >> 2] | 0;
                      while (1) {
                        if (o >>> 0 >= p >>> 0) break;
                        S = ne(k | 0, n | 0, 8) | 0;
                        T = z;
                        R = U;
                        c[R >> 2] = S;
                        c[(R + 4) >> 2] = T;
                        R = oe(d[((c[B >> 2] | 0) + o) >> 0] | 0, 0, 56) | 0;
                        k = R | S;
                        n = z | T;
                        T = U;
                        c[T >> 2] = k;
                        c[(T + 4) >> 2] = n;
                        o = (o + 1) | 0;
                        c[y >> 2] = o;
                        m = (m + -8) | 0;
                        c[v >> 2] = m;
                        if ((m | 0) <= 7) {
                          k = f;
                          f = 0;
                          break d;
                        }
                      }
                      if (((o | 0) == (p | 0)) & ((m | 0) > 64)) ca = 12;
                      else {
                        k = f;
                        f = 0;
                      }
                    } else {
                      k = f;
                      f = 0;
                    }
                  } else {
                    f = 0;
                    ca = 12;
                  }
                while (0);
                if ((ca | 0) == 12) {
                  ca = 0;
                  c[C >> 2] = 1;
                  c[v >> 2] = 0;
                  k = f;
                  m = 0;
                  f = 1;
                }
                if (!k) {
                  T = t;
                  ca = 46;
                  break a;
                }
                u = c[w >> 2] | 0;
                e: do
                  if (!f) {
                    o = U;
                    n = c[o >> 2] | 0;
                    o = c[(o + 4) >> 2] | 0;
                    f = ne(n | 0, o | 0, (m & 63) | 0) | 0;
                    f = f & 3;
                    k = (m + 2) | 0;
                    c[v >> 2] = k;
                    if ((k | 0) > 7) {
                      p = c[A >> 2] | 0;
                      m = c[y >> 2] | 0;
                      while (1) {
                        if (m >>> 0 >= p >>> 0) break;
                        S = ne(n | 0, o | 0, 8) | 0;
                        T = z;
                        R = U;
                        c[R >> 2] = S;
                        c[(R + 4) >> 2] = T;
                        R = oe(d[((c[B >> 2] | 0) + m) >> 0] | 0, 0, 56) | 0;
                        n = R | S;
                        o = z | T;
                        T = U;
                        c[T >> 2] = n;
                        c[(T + 4) >> 2] = o;
                        m = (m + 1) | 0;
                        c[y >> 2] = m;
                        k = (k + -8) | 0;
                        c[v >> 2] = k;
                        if ((k | 0) <= 7) break e;
                      }
                      if (((m | 0) == (p | 0)) & ((k | 0) > 64)) ca = 20;
                    }
                  } else {
                    f = 0;
                    ca = 20;
                  }
                while (0);
                if ((ca | 0) == 20) {
                  ca = 0;
                  c[C >> 2] = 1;
                  c[v >> 2] = 0;
                }
                k = c[x >> 2] | 0;
                m = 1 << f;
                if ((k & m) | 0) {
                  f = 3;
                  ca = 263;
                  break a;
                }
                c[x >> 2] = k | m;
                c[(i + 180 + ((u * 20) | 0)) >> 2] = f;
                r = (i + 180 + ((u * 20) | 0) + 8) | 0;
                c[r >> 2] = t;
                q = (i + 180 + ((u * 20) | 0) + 12) | 0;
                c[q >> 2] = g;
                s = (i + 180 + ((u * 20) | 0) + 16) | 0;
                c[s >> 2] = 0;
                c[w >> 2] = (c[w >> 2] | 0) + 1;
                switch (f | 0) {
                  case 3:
                    break b;
                  case 1:
                  case 0:
                    break c;
                  default: {
                  }
                }
              }
              f: do
                if (!(c[C >> 2] | 0)) {
                  m = U;
                  k = c[m >> 2] | 0;
                  m = c[(m + 4) >> 2] | 0;
                  o = c[v >> 2] | 0;
                  f = ne(k | 0, m | 0, (o & 63) | 0) | 0;
                  f = f & 7;
                  o = (o + 3) | 0;
                  c[v >> 2] = o;
                  if ((o | 0) > 7) {
                    p = c[A >> 2] | 0;
                    n = c[y >> 2] | 0;
                    while (1) {
                      if (n >>> 0 >= p >>> 0) break;
                      S = ne(k | 0, m | 0, 8) | 0;
                      T = z;
                      R = U;
                      c[R >> 2] = S;
                      c[(R + 4) >> 2] = T;
                      R = oe(d[((c[B >> 2] | 0) + n) >> 0] | 0, 0, 56) | 0;
                      k = R | S;
                      m = z | T;
                      T = U;
                      c[T >> 2] = k;
                      c[(T + 4) >> 2] = m;
                      n = (n + 1) | 0;
                      c[y >> 2] = n;
                      o = (o + -8) | 0;
                      c[v >> 2] = o;
                      if ((o | 0) <= 7) break f;
                    }
                    if (((n | 0) == (p | 0)) & ((o | 0) > 64)) ca = 44;
                  }
                } else {
                  f = 0;
                  ca = 44;
                }
              while (0);
              if ((ca | 0) == 44) {
                ca = 0;
                c[C >> 2] = 1;
                c[v >> 2] = 0;
              }
              T = (f + 2) | 0;
              c[(i + 180 + ((u * 20) | 0) + 4) >> 2] = T;
              S = 1 << T;
              if (!(kb((((c[r >> 2] | 0) + -1 + S) | 0) >>> T, ((S + -1 + (c[q >> 2] | 0)) | 0) >>> T, 0, i, s) | 0)) {
                f = 3;
                ca = 263;
                break a;
              }
            }
            g: do
              if (!(c[C >> 2] | 0)) {
                m = U;
                k = c[m >> 2] | 0;
                m = c[(m + 4) >> 2] | 0;
                o = c[v >> 2] | 0;
                f = ne(k | 0, m | 0, (o & 63) | 0) | 0;
                f = f & 255;
                o = (o + 8) | 0;
                c[v >> 2] = o;
                if ((o | 0) > 7) {
                  p = c[A >> 2] | 0;
                  n = c[y >> 2] | 0;
                  while (1) {
                    if (n >>> 0 >= p >>> 0) break;
                    S = ne(k | 0, m | 0, 8) | 0;
                    T = z;
                    R = U;
                    c[R >> 2] = S;
                    c[(R + 4) >> 2] = T;
                    R = oe(d[((c[B >> 2] | 0) + n) >> 0] | 0, 0, 56) | 0;
                    k = R | S;
                    m = z | T;
                    T = U;
                    c[T >> 2] = k;
                    c[(T + 4) >> 2] = m;
                    n = (n + 1) | 0;
                    c[y >> 2] = n;
                    o = (o + -8) | 0;
                    c[v >> 2] = o;
                    if ((o | 0) <= 7) break g;
                  }
                  if (((n | 0) == (p | 0)) & ((o | 0) > 64)) ca = 29;
                }
              } else {
                f = 0;
                ca = 29;
              }
            while (0);
            if ((ca | 0) == 29) {
              ca = 0;
              c[C >> 2] = 1;
              c[v >> 2] = 0;
            }
            k = (f + 1) | 0;
            T = (f | 0) > 15 ? 0 : (f | 0) > 3 ? 1 : (f | 0) > 1 ? 2 : 3;
            p = (((c[r >> 2] | 0) + -1 + (1 << T)) | 0) >>> T;
            f = (i + 180 + ((u * 20) | 0) + 4) | 0;
            c[f >> 2] = T;
            if (!(kb(k, 1, 0, i, s) | 0)) {
              f = 3;
              ca = 263;
              break a;
            }
            n = 1 << (8 >>> (c[f >> 2] | 0));
            f = oe(n | 0, ((((n | 0) < 0) << 31) >> 31) | 0, 2) | 0;
            if (!(((f | 0) == ((f & -4) | 0)) & ((z | 0) == 0))) {
              f = 3;
              ca = 263;
              break a;
            }
            o = Ad(f) | 0;
            if (!o) {
              f = 3;
              ca = 263;
              break a;
            }
            m = c[s >> 2] | 0;
            c[o >> 2] = c[m >> 2];
            k = k << 2;
            if ((k | 0) > 4) {
              f = 4;
              do {
                a[(o + f) >> 0] = (d[(o + (f + -4)) >> 0] | 0) + (d[(m + f) >> 0] | 0);
                f = (f + 1) | 0;
              } while ((f | 0) != (k | 0));
            } else k = 4;
            f = n << 2;
            if ((f | 0) > (k | 0)) me((o + k) | 0, 0, (f - k) | 0) | 0;
            Bd(c[s >> 2] | 0);
            c[s >> 2] = o;
            t = p;
          }
        } else {
          ca = (i + 48) | 0;
          T = f;
          C = ca;
          f = c[ca >> 2] | 0;
          ca = 46;
        }
      while (0);
      h: do
        if ((ca | 0) == 46) {
          i: do
            if (!f) {
              n = U;
              m = c[n >> 2] | 0;
              n = c[(n + 4) >> 2] | 0;
              k = (i + 44) | 0;
              S = c[k >> 2] | 0;
              f = ne(m | 0, n | 0, (S & 63) | 0) | 0;
              f = f & 1;
              p = (S + 1) | 0;
              c[k >> 2] = p;
              r = (i + 40) | 0;
              if ((S | 0) > 6) {
                s = (i + 32) | 0;
                q = c[(i + 36) >> 2] | 0;
                o = c[r >> 2] | 0;
                while (1) {
                  if (o >>> 0 >= q >>> 0) break;
                  R = ne(m | 0, n | 0, 8) | 0;
                  S = z;
                  Q = U;
                  c[Q >> 2] = R;
                  c[(Q + 4) >> 2] = S;
                  Q = oe(d[((c[s >> 2] | 0) + o) >> 0] | 0, 0, 56) | 0;
                  m = Q | R;
                  n = z | S;
                  S = U;
                  c[S >> 2] = m;
                  c[(S + 4) >> 2] = n;
                  o = (o + 1) | 0;
                  c[r >> 2] = o;
                  p = (p + -8) | 0;
                  c[k >> 2] = p;
                  if ((p | 0) <= 7) break i;
                }
                if (((o | 0) == (q | 0)) & ((p | 0) > 64)) {
                  c[C >> 2] = 1;
                  ca = 54;
                }
              }
            } else {
              c[C >> 2] = 1;
              f = 0;
              k = (i + 44) | 0;
              ca = 54;
            }
          while (0);
          if ((ca | 0) == 54) c[k >> 2] = 0;
          if (f) {
            j: do
              if (!(c[C >> 2] | 0)) {
                n = U;
                m = c[n >> 2] | 0;
                n = c[(n + 4) >> 2] | 0;
                k = (i + 44) | 0;
                p = c[k >> 2] | 0;
                f = ne(m | 0, n | 0, (p & 63) | 0) | 0;
                f = f & 15;
                p = (p + 4) | 0;
                c[k >> 2] = p;
                r = (i + 40) | 0;
                if ((p | 0) > 7) {
                  s = (i + 32) | 0;
                  q = c[(i + 36) >> 2] | 0;
                  o = c[r >> 2] | 0;
                  while (1) {
                    if (o >>> 0 >= q >>> 0) break;
                    R = ne(m | 0, n | 0, 8) | 0;
                    S = z;
                    Q = U;
                    c[Q >> 2] = R;
                    c[(Q + 4) >> 2] = S;
                    Q = oe(d[((c[s >> 2] | 0) + o) >> 0] | 0, 0, 56) | 0;
                    m = Q | R;
                    n = z | S;
                    S = U;
                    c[S >> 2] = m;
                    c[(S + 4) >> 2] = n;
                    o = (o + 1) | 0;
                    c[r >> 2] = o;
                    p = (p + -8) | 0;
                    c[k >> 2] = p;
                    if ((p | 0) <= 7) break j;
                  }
                  if (((o | 0) == (q | 0)) & ((p | 0) > 64)) {
                    c[C >> 2] = 1;
                    ca = 64;
                  }
                }
              } else {
                c[C >> 2] = 1;
                f = 0;
                k = (i + 44) | 0;
                ca = 64;
              }
            while (0);
            if ((ca | 0) == 64) c[k >> 2] = 0;
            if (((f + -1) | 0) >>> 0 < 11) S = f;
            else {
              c[i >> 2] = 3;
              f = 0;
              break;
            }
          } else S = 0;
          c[aa >> 2] = 0;
          R = e[(796 + (S << 1)) >> 1] | 0;
          if (h) {
            k: do
              if (!(c[C >> 2] | 0)) {
                n = U;
                m = c[n >> 2] | 0;
                n = c[(n + 4) >> 2] | 0;
                k = (i + 44) | 0;
                Q = c[k >> 2] | 0;
                f = ne(m | 0, n | 0, (Q & 63) | 0) | 0;
                f = f & 1;
                p = (Q + 1) | 0;
                c[k >> 2] = p;
                r = (i + 40) | 0;
                if ((Q | 0) > 6) {
                  s = (i + 32) | 0;
                  q = c[(i + 36) >> 2] | 0;
                  o = c[r >> 2] | 0;
                  while (1) {
                    if (o >>> 0 >= q >>> 0) break;
                    P = ne(m | 0, n | 0, 8) | 0;
                    Q = z;
                    N = U;
                    c[N >> 2] = P;
                    c[(N + 4) >> 2] = Q;
                    N = oe(d[((c[s >> 2] | 0) + o) >> 0] | 0, 0, 56) | 0;
                    m = N | P;
                    n = z | Q;
                    Q = U;
                    c[Q >> 2] = m;
                    c[(Q + 4) >> 2] = n;
                    o = (o + 1) | 0;
                    c[r >> 2] = o;
                    p = (p + -8) | 0;
                    c[k >> 2] = p;
                    if ((p | 0) <= 7) break k;
                  }
                  if (((o | 0) == (q | 0)) & ((p | 0) > 64)) {
                    c[C >> 2] = 1;
                    ca = 76;
                  }
                }
              } else {
                c[C >> 2] = 1;
                f = 0;
                k = (i + 44) | 0;
                ca = 76;
              }
            while (0);
            if ((ca | 0) == 76) c[k >> 2] = 0;
            if (f) {
              l: do
                if (!(c[C >> 2] | 0)) {
                  n = U;
                  m = c[n >> 2] | 0;
                  n = c[(n + 4) >> 2] | 0;
                  k = (i + 44) | 0;
                  p = c[k >> 2] | 0;
                  f = ne(m | 0, n | 0, (p & 63) | 0) | 0;
                  f = f & 7;
                  p = (p + 3) | 0;
                  c[k >> 2] = p;
                  r = (i + 40) | 0;
                  if ((p | 0) > 7) {
                    s = (i + 32) | 0;
                    q = c[(i + 36) >> 2] | 0;
                    o = c[r >> 2] | 0;
                    while (1) {
                      if (o >>> 0 >= q >>> 0) break;
                      P = ne(m | 0, n | 0, 8) | 0;
                      Q = z;
                      N = U;
                      c[N >> 2] = P;
                      c[(N + 4) >> 2] = Q;
                      N = oe(d[((c[s >> 2] | 0) + o) >> 0] | 0, 0, 56) | 0;
                      m = N | P;
                      n = z | Q;
                      Q = U;
                      c[Q >> 2] = m;
                      c[(Q + 4) >> 2] = n;
                      o = (o + 1) | 0;
                      c[r >> 2] = o;
                      p = (p + -8) | 0;
                      c[k >> 2] = p;
                      if ((p | 0) <= 7) break l;
                    }
                    if (((o | 0) == (q | 0)) & ((p | 0) > 64)) {
                      c[C >> 2] = 1;
                      ca = 86;
                    }
                  }
                } else {
                  c[C >> 2] = 1;
                  f = 0;
                  k = (i + 44) | 0;
                  ca = 86;
                }
              while (0);
              if ((ca | 0) == 86) c[k >> 2] = 0;
              f = (f + 2) | 0;
              Q = 1 << f;
              P = ((T + -1 + Q) | 0) >>> f;
              Q = ((g + -1 + Q) | 0) >>> f;
              n = O(P, Q) | 0;
              if (kb(P, Q, 0, i, aa) | 0) {
                c[(i + 152) >> 2] = f;
                if ((n | 0) > 0) {
                  m = c[aa >> 2] | 0;
                  f = 0;
                  k = 1;
                  do {
                    Q = (m + (f << 2)) | 0;
                    ca = ((c[Q >> 2] | 0) >>> 8) & 65535;
                    c[Q >> 2] = ca;
                    k = (ca | 0) < (k | 0) ? k : (ca + 1) | 0;
                    f = (f + 1) | 0;
                  } while ((f | 0) != (n | 0));
                } else k = 1;
                f = O(T, g) | 0;
                if (((k | 0) > 1e3) | ((k | 0) > (f | 0))) {
                  c[$ >> 2] = c[U >> 2];
                  c[($ + 4) >> 2] = c[(U + 4) >> 2];
                  c[($ + 8) >> 2] = c[(U + 8) >> 2];
                  c[($ + 12) >> 2] = c[(U + 12) >> 2];
                  c[($ + 16) >> 2] = c[(U + 16) >> 2];
                  c[($ + 20) >> 2] = c[(U + 20) >> 2];
                  c[($ + 24) >> 2] = c[(U + 24) >> 2];
                  c[($ + 28) >> 2] = c[(U + 28) >> 2];
                  n = (f | 0) < 1e3 ? f : 1e3;
                  ca = 93;
                } else {
                  n = k;
                  ca = 93;
                }
              } else {
                k = 0;
                n = 0;
                m = 0;
                f = 0;
              }
            } else {
              n = 1;
              k = 1;
              ca = 93;
            }
          } else {
            n = 1;
            k = 1;
            ca = 93;
          }
          do
            if ((ca | 0) == 93)
              if (!(c[C >> 2] | 0)) {
                P = (S | 0) > 0;
                Q = 1 << S;
                m = (Q + 280) | 0;
                M = ((Q | 0) > -280) & ((m | 0) > 256);
                m = P ? (M ? m : 256) : 280;
                M = P ? (M ? 0 : 0) : 0;
                N = oe(m | 0, M | 0, 2) | 0;
                if (((M >>> 0 < 0) | (((M | 0) == 0) & (m >>> 0 < 536854529))) & (((N | 0) == ((N & -4) | 0)) & ((z | 0) == 0))) {
                  if (m) {
                    f = m << 2;
                    if (m >>> 0 > 65535) f = (((f >>> 0) / (m >>> 0)) | 0 | 0) == 4 ? f : -1;
                  } else f = 0;
                  m = Ad(f) | 0;
                  if (m) {
                    if (c[(m + -4) >> 2] & 3) me(m | 0, 0, f | 0) | 0;
                  } else m = 0;
                } else m = 0;
                I = (m | 0) == 0;
                J = (i + 44) | 0;
                K = (i + 40) | 0;
                L = (i + 36) | 0;
                M = (i + 32) | 0;
                H = n;
                m: while (1) {
                  N = O(H, R) | 0;
                  f = oe(N | 0, ((((N | 0) < 0) << 31) >> 31) | 0, 2) | 0;
                  if ((N | 0) != 0 ? !((N >>> 0 < 536854529) & (((f | 0) == ((f & -4) | 0)) & ((z | 0) == 0))) : 0) n = 0;
                  else n = Ad(f) | 0;
                  f = ue(H | 0, ((((H | 0) < 0) << 31) >> 31) | 0, 548, 0) | 0;
                  if (H | 0 ? !((H >>> 0 < 3918647) & (((f | 0) == ((f & -4) | 0)) & ((z | 0) == 0))) : 0) {
                    k = 0;
                    f = 0;
                    ca = 109;
                    break;
                  }
                  N = Ad(f) | 0;
                  if (((n | 0) == 0) | (I | ((N | 0) == 0))) {
                    k = N;
                    f = N;
                    ca = 109;
                    break;
                  }
                  if ((H | 0) > 0) {
                    f = n;
                    o = 0;
                    while (1) {
                      G = (N + ((o * 548) | 0)) | 0;
                      p = 0;
                      B = 1;
                      E = 0;
                      D = 0;
                      F = f;
                      while (1) {
                        h = e[(820 + (D << 1)) >> 1] | 0;
                        c[(N + ((o * 548) | 0) + (D << 2)) >> 2] = F;
                        h = (h + (P & ((D | 0) == 0) ? Q : 0)) | 0;
                        n: do
                          if (!(c[C >> 2] | 0)) {
                            r = U;
                            q = c[r >> 2] | 0;
                            r = c[(r + 4) >> 2] | 0;
                            A = c[J >> 2] | 0;
                            f = ne(q | 0, r | 0, (A & 63) | 0) | 0;
                            f = f & 1;
                            t = (A + 1) | 0;
                            c[J >> 2] = t;
                            if ((A | 0) > 6) {
                              u = c[L >> 2] | 0;
                              s = c[K >> 2] | 0;
                              while (1) {
                                if (s >>> 0 >= u >>> 0) break;
                                y = ne(q | 0, r | 0, 8) | 0;
                                A = z;
                                x = U;
                                c[x >> 2] = y;
                                c[(x + 4) >> 2] = A;
                                x = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                q = x | y;
                                r = z | A;
                                A = U;
                                c[A >> 2] = q;
                                c[(A + 4) >> 2] = r;
                                s = (s + 1) | 0;
                                c[K >> 2] = s;
                                t = (t + -8) | 0;
                                c[J >> 2] = t;
                                if ((t | 0) <= 7) break n;
                              }
                              if (((s | 0) == (u | 0)) & ((t | 0) > 64)) ca = 117;
                            }
                          } else {
                            f = 0;
                            ca = 117;
                          }
                        while (0);
                        if ((ca | 0) == 117) {
                          ca = 0;
                          c[C >> 2] = 1;
                          c[J >> 2] = 0;
                        }
                        me(m | 0, 0, (h << 2) | 0) | 0;
                        do
                          if (!f) {
                            f = _;
                            q = (f + 76) | 0;
                            do {
                              c[f >> 2] = 0;
                              f = (f + 4) | 0;
                            } while ((f | 0) < (q | 0));
                            o: do
                              if (!(c[C >> 2] | 0)) {
                                s = U;
                                r = c[s >> 2] | 0;
                                s = c[(s + 4) >> 2] | 0;
                                q = c[J >> 2] | 0;
                                f = ne(r | 0, s | 0, (q & 63) | 0) | 0;
                                f = f & 15;
                                q = (q + 4) | 0;
                                c[J >> 2] = q;
                                if ((q | 0) <= 7) {
                                  r = 0;
                                  break;
                                }
                                u = c[L >> 2] | 0;
                                t = c[K >> 2] | 0;
                                while (1) {
                                  if (t >>> 0 >= u >>> 0) break;
                                  y = ne(r | 0, s | 0, 8) | 0;
                                  A = z;
                                  x = U;
                                  c[x >> 2] = y;
                                  c[(x + 4) >> 2] = A;
                                  x = oe(d[((c[M >> 2] | 0) + t) >> 0] | 0, 0, 56) | 0;
                                  r = x | y;
                                  s = z | A;
                                  A = U;
                                  c[A >> 2] = r;
                                  c[(A + 4) >> 2] = s;
                                  t = (t + 1) | 0;
                                  c[K >> 2] = t;
                                  q = (q + -8) | 0;
                                  c[J >> 2] = q;
                                  if ((q | 0) <= 7) {
                                    r = 0;
                                    break o;
                                  }
                                }
                                if (((t | 0) == (u | 0)) & ((q | 0) > 64)) ca = 153;
                                else r = 0;
                              } else {
                                f = 0;
                                ca = 153;
                              }
                            while (0);
                            if ((ca | 0) == 153) {
                              ca = 0;
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                              q = 0;
                              r = 1;
                            }
                            w = (f + 4) | 0;
                            if ((w | 0) > 19) {
                              ca = 210;
                              break m;
                            } else {
                              v = 0;
                              f = r;
                            }
                            while (1) {
                              p: do
                                if (!f) {
                                  t = U;
                                  r = c[t >> 2] | 0;
                                  t = c[(t + 4) >> 2] | 0;
                                  f = ne(r | 0, t | 0, (q & 63) | 0) | 0;
                                  f = f & 7;
                                  q = (q + 3) | 0;
                                  c[J >> 2] = q;
                                  if ((q | 0) <= 7) {
                                    r = 0;
                                    break;
                                  }
                                  u = c[L >> 2] | 0;
                                  s = c[K >> 2] | 0;
                                  while (1) {
                                    if (s >>> 0 >= u >>> 0) break;
                                    y = ne(r | 0, t | 0, 8) | 0;
                                    A = z;
                                    x = U;
                                    c[x >> 2] = y;
                                    c[(x + 4) >> 2] = A;
                                    x = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                    r = x | y;
                                    t = z | A;
                                    A = U;
                                    c[A >> 2] = r;
                                    c[(A + 4) >> 2] = t;
                                    s = (s + 1) | 0;
                                    c[K >> 2] = s;
                                    q = (q + -8) | 0;
                                    c[J >> 2] = q;
                                    if ((q | 0) <= 7) {
                                      r = 0;
                                      break p;
                                    }
                                  }
                                  if (((s | 0) == (u | 0)) & ((q | 0) > 64)) ca = 161;
                                  else r = 0;
                                } else {
                                  f = 0;
                                  ca = 161;
                                }
                              while (0);
                              if ((ca | 0) == 161) {
                                ca = 0;
                                c[C >> 2] = 1;
                                c[J >> 2] = 0;
                                q = 0;
                                r = 1;
                              }
                              c[(_ + (d[(4912 + v) >> 0] << 2)) >> 2] = f;
                              v = (v + 1) | 0;
                              if ((v | 0) == (w | 0)) break;
                              else f = r;
                            }
                            if (!(lb(Z, 7, _, 19, Y) | 0)) {
                              ca = 212;
                              break m;
                            }
                            q: do
                              if (!(c[C >> 2] | 0)) {
                                s = U;
                                q = c[s >> 2] | 0;
                                s = c[(s + 4) >> 2] | 0;
                                A = c[J >> 2] | 0;
                                f = ne(q | 0, s | 0, (A & 63) | 0) | 0;
                                f = f & 1;
                                r = (A + 1) | 0;
                                c[J >> 2] = r;
                                if ((A | 0) <= 6) {
                                  q = 0;
                                  break;
                                }
                                u = c[L >> 2] | 0;
                                t = c[K >> 2] | 0;
                                while (1) {
                                  if (t >>> 0 >= u >>> 0) break;
                                  y = ne(q | 0, s | 0, 8) | 0;
                                  A = z;
                                  x = U;
                                  c[x >> 2] = y;
                                  c[(x + 4) >> 2] = A;
                                  x = oe(d[((c[M >> 2] | 0) + t) >> 0] | 0, 0, 56) | 0;
                                  q = x | y;
                                  s = z | A;
                                  A = U;
                                  c[A >> 2] = q;
                                  c[(A + 4) >> 2] = s;
                                  t = (t + 1) | 0;
                                  c[K >> 2] = t;
                                  r = (r + -8) | 0;
                                  c[J >> 2] = r;
                                  if ((r | 0) <= 7) {
                                    q = 0;
                                    break q;
                                  }
                                }
                                if (((t | 0) == (u | 0)) & ((r | 0) > 64)) ca = 170;
                                else q = 0;
                              } else {
                                f = 0;
                                ca = 170;
                              }
                            while (0);
                            if ((ca | 0) == 170) {
                              ca = 0;
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                              r = 0;
                              q = 1;
                            }
                            if (f) {
                              r: do
                                if (!q) {
                                  s = U;
                                  q = c[s >> 2] | 0;
                                  s = c[(s + 4) >> 2] | 0;
                                  u = ne(q | 0, s | 0, (r & 63) | 0) | 0;
                                  r = (r + 3) | 0;
                                  c[J >> 2] = r;
                                  s: do
                                    if ((r | 0) > 7) {
                                      t = c[L >> 2] | 0;
                                      f = c[K >> 2] | 0;
                                      while (1) {
                                        if (f >>> 0 >= t >>> 0) break;
                                        q = ne(q | 0, s | 0, 8) | 0;
                                        s = z;
                                        A = U;
                                        c[A >> 2] = q;
                                        c[(A + 4) >> 2] = s;
                                        A = oe(d[((c[M >> 2] | 0) + f) >> 0] | 0, 0, 56) | 0;
                                        q = A | q;
                                        s = z | s;
                                        A = U;
                                        c[A >> 2] = q;
                                        c[(A + 4) >> 2] = s;
                                        f = (f + 1) | 0;
                                        c[K >> 2] = f;
                                        r = (r + -8) | 0;
                                        c[J >> 2] = r;
                                        if ((r | 0) <= 7) {
                                          t = q;
                                          break s;
                                        }
                                      }
                                      if (((f | 0) == (t | 0)) & ((r | 0) > 64)) {
                                        ca = 178;
                                        break r;
                                      } else t = q;
                                    } else t = q;
                                  while (0);
                                  q = (((u << 1) & 14) + 2) | 0;
                                  if (q >>> 0 >= 25) {
                                    f = 0;
                                    ca = 185;
                                    break;
                                  }
                                  f = ne(t | 0, s | 0, (r & 63) | 0) | 0;
                                  f = f & c[(8 + (q << 2)) >> 2];
                                  r = (r + q) | 0;
                                  c[J >> 2] = r;
                                  if ((r | 0) <= 7) break;
                                  u = c[L >> 2] | 0;
                                  q = c[K >> 2] | 0;
                                  while (1) {
                                    if (q >>> 0 >= u >>> 0) break;
                                    y = ne(t | 0, s | 0, 8) | 0;
                                    A = z;
                                    x = U;
                                    c[x >> 2] = y;
                                    c[(x + 4) >> 2] = A;
                                    x = oe(d[((c[M >> 2] | 0) + q) >> 0] | 0, 0, 56) | 0;
                                    t = x | y;
                                    s = z | A;
                                    A = U;
                                    c[A >> 2] = t;
                                    c[(A + 4) >> 2] = s;
                                    q = (q + 1) | 0;
                                    c[K >> 2] = q;
                                    r = (r + -8) | 0;
                                    c[J >> 2] = r;
                                    if ((r | 0) <= 7) break r;
                                  }
                                  if (((q | 0) == (u | 0)) & ((r | 0) > 64)) ca = 185;
                                } else ca = 178;
                              while (0);
                              if ((ca | 0) == 178) {
                                c[C >> 2] = 1;
                                c[J >> 2] = 0;
                                f = 0;
                                ca = 185;
                              }
                              if ((ca | 0) == 185) {
                                ca = 0;
                                c[C >> 2] = 1;
                                c[J >> 2] = 0;
                              }
                              f = (f + 2) | 0;
                              if ((f | 0) > (h | 0)) {
                                ca = 212;
                                break m;
                              }
                            } else f = h;
                            t: do
                              if ((h | 0) > 0) {
                                r = 0;
                                A = 8;
                                while (1) {
                                  q = r;
                                  while (1) {
                                    y = f;
                                    f = (f + -1) | 0;
                                    if (!y) break t;
                                    r = c[J >> 2] | 0;
                                    do
                                      if ((r | 0) > 31) {
                                        t = c[L >> 2] | 0;
                                        s = c[K >> 2] | 0;
                                        do {
                                          if (s >>> 0 >= t >>> 0) break;
                                          w = U;
                                          w = ne(c[w >> 2] | 0, c[(w + 4) >> 2] | 0, 8) | 0;
                                          x = z;
                                          v = U;
                                          c[v >> 2] = w;
                                          c[(v + 4) >> 2] = x;
                                          v = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                          y = U;
                                          c[y >> 2] = v | w;
                                          c[(y + 4) >> 2] = z | x;
                                          s = (s + 1) | 0;
                                          c[K >> 2] = s;
                                          r = (r + -8) | 0;
                                          c[J >> 2] = r;
                                        } while ((r | 0) > 7);
                                        if ((c[C >> 2] | 0) == 0 ? !(((r | 0) > 64) & ((s | 0) == (t | 0))) : 0) break;
                                        c[C >> 2] = 1;
                                        c[J >> 2] = 0;
                                        r = 0;
                                      }
                                    while (0);
                                    u = U;
                                    v = c[u >> 2] | 0;
                                    u = c[(u + 4) >> 2] | 0;
                                    y = ne(v | 0, u | 0, (r & 63) | 0) | 0;
                                    y = y & 127;
                                    t = ((d[(Z + (y << 2)) >> 0] | 0) + r) | 0;
                                    c[J >> 2] = t;
                                    y = b[(Z + (y << 2) + 2) >> 1] | 0;
                                    s = y & 65535;
                                    if ((y & 65535) < 16) break;
                                    x = (s + -16) | 0;
                                    s = d[(4931 + x) >> 0] | 0;
                                    x = d[(4934 + x) >> 0] | 0;
                                    u: do
                                      if (!(c[C >> 2] | 0)) {
                                        r = ne(v | 0, u | 0, (t & 63) | 0) | 0;
                                        r = r & c[(8 + (s << 2)) >> 2];
                                        t = (t + s) | 0;
                                        c[J >> 2] = t;
                                        if ((t | 0) <= 7) break;
                                        w = c[L >> 2] | 0;
                                        s = c[K >> 2] | 0;
                                        while (1) {
                                          if (s >>> 0 >= w >>> 0) break;
                                          ga = ne(v | 0, u | 0, 8) | 0;
                                          fa = z;
                                          ha = U;
                                          c[ha >> 2] = ga;
                                          c[(ha + 4) >> 2] = fa;
                                          ha = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                          v = ha | ga;
                                          u = z | fa;
                                          fa = U;
                                          c[fa >> 2] = v;
                                          c[(fa + 4) >> 2] = u;
                                          s = (s + 1) | 0;
                                          c[K >> 2] = s;
                                          t = (t + -8) | 0;
                                          c[J >> 2] = t;
                                          if ((t | 0) <= 7) break u;
                                        }
                                        if (((s | 0) == (w | 0)) & ((t | 0) > 64)) ca = 206;
                                      } else {
                                        r = 0;
                                        ca = 206;
                                      }
                                    while (0);
                                    if ((ca | 0) == 206) {
                                      ca = 0;
                                      c[C >> 2] = 1;
                                      c[J >> 2] = 0;
                                    }
                                    r = (r + x) | 0;
                                    if (((r + q) | 0) > (h | 0)) {
                                      ca = 212;
                                      break m;
                                    }
                                    t = (y << 16) >> 16 == 16 ? A : 0;
                                    if ((r | 0) > 0)
                                      while (1) {
                                        s = (q + 1) | 0;
                                        c[(m + (q << 2)) >> 2] = t;
                                        if ((r | 0) > 1) {
                                          r = (r + -1) | 0;
                                          q = s;
                                        } else {
                                          q = s;
                                          break;
                                        }
                                      }
                                    if ((q | 0) >= (h | 0)) break t;
                                  }
                                  r = (q + 1) | 0;
                                  c[(m + (q << 2)) >> 2] = s;
                                  if ((r | 0) >= (h | 0)) break;
                                  else A = (y << 16) >> 16 == 0 ? A : s;
                                }
                              }
                            while (0);
                          } else {
                            v: do
                              if (!(c[C >> 2] | 0)) {
                                t = U;
                                q = c[t >> 2] | 0;
                                t = c[(t + 4) >> 2] | 0;
                                ha = c[J >> 2] | 0;
                                f = ne(q | 0, t | 0, (ha & 63) | 0) | 0;
                                f = f & 1;
                                s = (ha + 1) | 0;
                                c[J >> 2] = s;
                                w: do
                                  if ((ha | 0) > 6) {
                                    u = c[L >> 2] | 0;
                                    r = c[K >> 2] | 0;
                                    while (1) {
                                      if (r >>> 0 >= u >>> 0) break;
                                      q = ne(q | 0, t | 0, 8) | 0;
                                      t = z;
                                      ha = U;
                                      c[ha >> 2] = q;
                                      c[(ha + 4) >> 2] = t;
                                      ha = oe(d[((c[M >> 2] | 0) + r) >> 0] | 0, 0, 56) | 0;
                                      q = ha | q;
                                      t = z | t;
                                      ha = U;
                                      c[ha >> 2] = q;
                                      c[(ha + 4) >> 2] = t;
                                      r = (r + 1) | 0;
                                      c[K >> 2] = r;
                                      s = (s + -8) | 0;
                                      c[J >> 2] = s;
                                      if ((s | 0) <= 7) break w;
                                    }
                                    if (((r | 0) == (u | 0)) & ((s | 0) > 64)) {
                                      ca = 125;
                                      break v;
                                    }
                                  }
                                while (0);
                                x = s & 63;
                                r = (s + 1) | 0;
                                c[J >> 2] = r;
                                x: do
                                  if ((s | 0) > 6) {
                                    v = c[L >> 2] | 0;
                                    s = c[K >> 2] | 0;
                                    u = q;
                                    w = t;
                                    while (1) {
                                      if (s >>> 0 >= v >>> 0) break;
                                      u = ne(u | 0, w | 0, 8) | 0;
                                      w = z;
                                      ha = U;
                                      c[ha >> 2] = u;
                                      c[(ha + 4) >> 2] = w;
                                      ha = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                      u = ha | u;
                                      w = z | w;
                                      ha = U;
                                      c[ha >> 2] = u;
                                      c[(ha + 4) >> 2] = w;
                                      s = (s + 1) | 0;
                                      c[K >> 2] = s;
                                      r = (r + -8) | 0;
                                      c[J >> 2] = r;
                                      if ((r | 0) <= 7) break x;
                                    }
                                    if (((s | 0) == (v | 0)) & ((r | 0) > 64)) {
                                      ca = 131;
                                      break v;
                                    }
                                  } else {
                                    u = q;
                                    w = t;
                                  }
                                while (0);
                                s = oe(1, 0, x | 0) | 0;
                                s = (((q & s) | 0) == 0) & (((t & z) | 0) == 0) ? 1 : 8;
                                q = ne(u | 0, w | 0, (r & 63) | 0) | 0;
                                q = q & c[(8 + (s << 2)) >> 2];
                                s = (r + s) | 0;
                                c[J >> 2] = s;
                                if ((s | 0) <= 7) break;
                                v = c[L >> 2] | 0;
                                r = c[K >> 2] | 0;
                                t = w;
                                while (1) {
                                  if (r >>> 0 >= v >>> 0) break;
                                  ga = ne(u | 0, t | 0, 8) | 0;
                                  ha = z;
                                  fa = U;
                                  c[fa >> 2] = ga;
                                  c[(fa + 4) >> 2] = ha;
                                  fa = oe(d[((c[M >> 2] | 0) + r) >> 0] | 0, 0, 56) | 0;
                                  u = fa | ga;
                                  t = z | ha;
                                  ha = U;
                                  c[ha >> 2] = u;
                                  c[(ha + 4) >> 2] = t;
                                  r = (r + 1) | 0;
                                  c[K >> 2] = r;
                                  s = (s + -8) | 0;
                                  c[J >> 2] = s;
                                  if ((s | 0) <= 7) break v;
                                }
                                if (((r | 0) == (v | 0)) & ((s | 0) > 64)) ca = 137;
                              } else {
                                f = 0;
                                ca = 125;
                              }
                            while (0);
                            if ((ca | 0) == 125) {
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                              ca = 131;
                            }
                            if ((ca | 0) == 131) {
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                              q = 0;
                              ca = 137;
                            }
                            if ((ca | 0) == 137) {
                              ca = 0;
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                            }
                            c[(m + (q << 2)) >> 2] = 1;
                            if ((f | 0) != 1) break;
                            y: do
                              if (!(c[C >> 2] | 0)) {
                                r = U;
                                q = c[r >> 2] | 0;
                                r = c[(r + 4) >> 2] | 0;
                                t = c[J >> 2] | 0;
                                f = ne(q | 0, r | 0, (t & 63) | 0) | 0;
                                f = f & 255;
                                t = (t + 8) | 0;
                                c[J >> 2] = t;
                                if ((t | 0) <= 7) break;
                                u = c[L >> 2] | 0;
                                s = c[K >> 2] | 0;
                                while (1) {
                                  if (s >>> 0 >= u >>> 0) break;
                                  ga = ne(q | 0, r | 0, 8) | 0;
                                  ha = z;
                                  fa = U;
                                  c[fa >> 2] = ga;
                                  c[(fa + 4) >> 2] = ha;
                                  fa = oe(d[((c[M >> 2] | 0) + s) >> 0] | 0, 0, 56) | 0;
                                  q = fa | ga;
                                  r = z | ha;
                                  ha = U;
                                  c[ha >> 2] = q;
                                  c[(ha + 4) >> 2] = r;
                                  s = (s + 1) | 0;
                                  c[K >> 2] = s;
                                  t = (t + -8) | 0;
                                  c[J >> 2] = t;
                                  if ((t | 0) <= 7) break y;
                                }
                                if (((s | 0) == (u | 0)) & ((t | 0) > 64)) ca = 145;
                              } else {
                                f = 0;
                                ca = 145;
                              }
                            while (0);
                            if ((ca | 0) == 145) {
                              ca = 0;
                              c[C >> 2] = 1;
                              c[J >> 2] = 0;
                            }
                            c[(m + (f << 2)) >> 2] = 1;
                          }
                        while (0);
                        if (c[C >> 2] | 0) {
                          ca = 220;
                          break m;
                        }
                        if ((h | 0) < 513) f = lb(F, 8, m, h, Y) | 0;
                        else {
                          f = oe(h | 0, ((((h | 0) < 0) << 31) >> 31) | 0, 1) | 0;
                          if (!((h >>> 0 < 1073709057) & (((f | 0) == ((f & -2) | 0)) & ((z | 0) == 0)))) {
                            ca = 220;
                            break m;
                          }
                          f = Ad(f) | 0;
                          if (!f) {
                            ca = 220;
                            break m;
                          }
                          ha = lb(F, 8, m, h, f) | 0;
                          Bd(f);
                          f = ha;
                        }
                        if (!f) {
                          ca = 220;
                          break m;
                        }
                        z: do
                          if (!B) r = 0;
                          else {
                            switch (D | 0) {
                              case 0:
                              case 4: {
                                r = B;
                                break z;
                              }
                              default: {
                              }
                            }
                            r = ((a[F >> 0] | 0) == 0) & 1;
                          }
                        while (0);
                        E = ((d[F >> 0] | 0) + E) | 0;
                        F = (F + (f << 2)) | 0;
                        if ((D | 0) < 4) {
                          f = c[m >> 2] | 0;
                          if ((h | 0) > 1) {
                            q = 1;
                            do {
                              ha = c[(m + (q << 2)) >> 2] | 0;
                              f = (ha | 0) > (f | 0) ? ha : f;
                              q = (q + 1) | 0;
                            } while ((q | 0) != (h | 0));
                          }
                          p = (f + p) | 0;
                        }
                        D = (D + 1) | 0;
                        if ((D | 0) >= 5) break;
                        else B = r;
                      }
                      c[(N + ((o * 548) | 0) + 20) >> 2] = r;
                      f = (N + ((o * 548) | 0) + 28) | 0;
                      c[f >> 2] = 0;
                      if (
                        (
                          (r | 0) != 0
                            ? ((V =
                                e[((c[(N + ((o * 548) | 0) + 8) >> 2] | 0) + 2) >> 1] |
                                (e[((c[(N + ((o * 548) | 0) + 4) >> 2] | 0) + 2) >> 1] << 16) |
                                (e[((c[(N + ((o * 548) | 0) + 12) >> 2] | 0) + 2) >> 1] << 24)),
                              (W = (N + ((o * 548) | 0) + 24) | 0),
                              (c[W >> 2] = V),
                              (E | 0) == 0)
                            : 0
                        )
                          ? ((X = b[((c[G >> 2] | 0) + 2) >> 1] | 0), (X & 65535) < 256)
                          : 0
                      ) {
                        c[f >> 2] = 1;
                        c[W >> 2] = ((X & 65535) << 8) | V;
                        c[(N + ((o * 548) | 0) + 32) >> 2] = 0;
                      } else ca = 234;
                      if ((ca | 0) == 234 ? ((ca = 0), (ha = (p | 0) < 6), (c[(N + ((o * 548) | 0) + 32) >> 2] = ha & 1), ha) : 0) {
                        q = (N + ((o * 548) | 0) + 4) | 0;
                        r = (N + ((o * 548) | 0) + 8) | 0;
                        s = (N + ((o * 548) | 0) + 12) | 0;
                        f = 0;
                        do {
                          t = (N + ((o * 548) | 0) + 36 + (f << 3)) | 0;
                          u = ((c[G >> 2] | 0) + (f << 2)) | 0;
                          u = e[u >> 1] | (e[(u + 2) >> 1] << 16);
                          p = u >>> 16;
                          u = u & 255;
                          if ((p & 65535) > 255) {
                            c[t >> 2] = u | 256;
                            c[(N + ((o * 548) | 0) + 36 + (f << 3) + 4) >> 2] = p;
                          } else {
                            ha = (N + ((o * 548) | 0) + 36 + (f << 3) + 4) | 0;
                            c[t >> 2] = u;
                            ga = p << 8;
                            c[ha >> 2] = ga;
                            D = f >>> u;
                            h = c[q >> 2] | 0;
                            fa = b[(h + (D << 2) + 2) >> 1] | 0;
                            h = d[(h + (D << 2)) >> 0] | 0;
                            E = (h + u) | 0;
                            c[t >> 2] = E;
                            ga = ((fa & 65535) << 16) | ga;
                            c[ha >> 2] = ga;
                            h = D >>> h;
                            D = c[r >> 2] | 0;
                            fa = b[(D + (h << 2) + 2) >> 1] | 0;
                            D = d[(D + (h << 2)) >> 0] | 0;
                            E = (D + E) | 0;
                            c[t >> 2] = E;
                            ga = (fa & 65535) | ga;
                            c[ha >> 2] = ga;
                            D = h >>> D;
                            h = c[s >> 2] | 0;
                            fa = b[(h + (D << 2) + 2) >> 1] | 0;
                            c[t >> 2] = (d[(h + (D << 2)) >> 0] | 0) + E;
                            c[ha >> 2] = ((fa & 65535) << 24) | ga;
                          }
                          f = (f + 1) | 0;
                        } while ((f | 0) != 64);
                      }
                      o = (o + 1) | 0;
                      if ((o | 0) < (H | 0)) f = F;
                      else break;
                    }
                  } else o = 0;
                  if ((k | 0) == (H | 0)) f = N;
                  else {
                    Bd(n);
                    Bd(N);
                    c[U >> 2] = c[$ >> 2];
                    c[(U + 4) >> 2] = c[($ + 4) >> 2];
                    c[(U + 8) >> 2] = c[($ + 8) >> 2];
                    c[(U + 12) >> 2] = c[($ + 12) >> 2];
                    c[(U + 16) >> 2] = c[($ + 16) >> 2];
                    c[(U + 20) >> 2] = c[($ + 20) >> 2];
                    c[(U + 24) >> 2] = c[($ + 24) >> 2];
                    c[(U + 28) >> 2] = c[($ + 28) >> 2];
                    f = 0;
                    n = 0;
                  }
                  if ((o | 0) == (k | 0)) {
                    ca = 247;
                    break;
                  } else H = k;
                }
                if ((ca | 0) == 109) {
                  c[i >> 2] = 1;
                  break;
                } else if ((ca | 0) == 210) {
                  c[i >> 2] = 3;
                  k = N;
                  f = N;
                  break;
                } else if ((ca | 0) == 212) {
                  c[i >> 2] = 3;
                  f = i;
                } else if ((ca | 0) == 220) f = i;
                else if ((ca | 0) == 247) {
                  Bd(m);
                  q = (i + 160) | 0;
                  c[q >> 2] = c[aa >> 2];
                  c[(i + 164) >> 2] = k;
                  p = (i + 168) | 0;
                  c[p >> 2] = f;
                  o = (i + 172) | 0;
                  c[o >> 2] = n;
                  if (P) {
                    c[da >> 2] = Q;
                    m = (i + 124) | 0;
                    ha = oe(Q | 0, ((((Q | 0) < 0) << 31) >> 31) | 0, 2) | 0;
                    if (!(((ha | 0) == ((ha & -4) | 0)) & ((z | 0) == 0))) {
                      c[m >> 2] = 0;
                      f = 1;
                      ca = 263;
                      break h;
                    }
                    f = Q << 2;
                    k = Ad(f) | 0;
                    if (!k) {
                      c[m >> 2] = 0;
                      f = 1;
                      ca = 263;
                      break h;
                    }
                    if ((c[(k + -4) >> 2] & 3) | 0) me(k | 0, 0, f | 0) | 0;
                    c[m >> 2] = k;
                    c[(i + 128) >> 2] = 32 - S;
                    c[(i + 132) >> 2] = S;
                  } else c[da >> 2] = 0;
                  ga = c[(i + 152) >> 2] | 0;
                  c[(i + 100) >> 2] = T;
                  c[(i + 104) >> 2] = g;
                  ha = 1 << ga;
                  c[(i + 156) >> 2] = ((T + -1 + ha) | 0) >>> ga;
                  c[(i + 148) >> 2] = (ga | 0) == 0 ? -1 : (ha + -1) | 0;
                  if (!ba) {
                    ha = ue(T | 0, ((((T | 0) < 0) << 31) >> 31) | 0, g | 0, ((((g | 0) < 0) << 31) >> 31) | 0) | 0;
                    ga = z;
                    f = oe(ha | 0, ga | 0, 2) | 0;
                    if (
                      !(((ha | 0) == 0) & ((ga | 0) == 0))
                        ? !(((ga >>> 0 < 0) | (((ga | 0) == 0) & (ha >>> 0 < 536854529))) & (((f | 0) == ((f & -4) | 0)) & ((z | 0) == 0)))
                        : 0
                    ) {
                      f = 1;
                      ca = 263;
                      break h;
                    }
                    f = Ad(f) | 0;
                    if (!f) {
                      f = 1;
                      ca = 263;
                      break h;
                    }
                    if (!(hb(i, f, T, g, g, 0) | 0)) break h;
                    if (c[C >> 2] | 0) break h;
                  } else {
                    c[(i + 4) >> 2] = 1;
                    f = 0;
                  }
                  if (j | 0) c[j >> 2] = f;
                  c[(i + 112) >> 2] = 0;
                  if (ba) {
                    ha = 1;
                    l = ea;
                    return ha | 0;
                  }
                  Bd(c[q >> 2] | 0);
                  Bd(c[o >> 2] | 0);
                  f = c[p >> 2] | 0;
                  if (f | 0) Bd(f);
                  f = (i + 124) | 0;
                  Bd(c[f >> 2] | 0);
                  c[f >> 2] = 0;
                  Bd(c[(i + 136) >> 2] | 0);
                  f = da;
                  q = (f + 56) | 0;
                  do {
                    c[f >> 2] = 0;
                    f = (f + 4) | 0;
                  } while ((f | 0) < (q | 0));
                  ha = 1;
                  l = ea;
                  return ha | 0;
                }
                c[f >> 2] = 3;
                k = N;
                f = N;
              } else {
                k = 0;
                n = 0;
                m = 0;
                f = 0;
              }
          while (0);
          Bd(m);
          Bd(c[aa >> 2] | 0);
          Bd(n);
          if (k | 0) Bd(f);
          f = 3;
          ca = 263;
        }
      while (0);
      if ((ca | 0) == 263) {
        c[i >> 2] = f;
        f = 0;
      }
      Bd(f);
      Bd(c[(i + 160) >> 2] | 0);
      Bd(c[(i + 172) >> 2] | 0);
      f = c[(i + 168) >> 2] | 0;
      if (f | 0) Bd(f);
      f = (i + 124) | 0;
      Bd(c[f >> 2] | 0);
      c[f >> 2] = 0;
      Bd(c[(i + 136) >> 2] | 0);
      f = da;
      q = (f + 56) | 0;
      do {
        c[f >> 2] = 0;
        f = (f + 4) | 0;
      } while ((f | 0) < (q | 0));
      ha = 0;
      l = ea;
      return ha | 0;
    }
    function lb(d, f, g, h, i) {
      d = d | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      var j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0;
      J = l;
      l = (l + 128) | 0;
      I = (J + 64) | 0;
      o = J;
      w = 1 << f;
      j = I;
      k = (j + 64) | 0;
      do {
        c[j >> 2] = 0;
        j = (j + 4) | 0;
      } while ((j | 0) < (k | 0));
      n = (h | 0) > 0;
      do
        if (n) {
          j = 0;
          while (1) {
            k = c[(g + (j << 2)) >> 2] | 0;
            if ((k | 0) > 15) {
              G = 0;
              j = 50;
              break;
            }
            D = (I + (k << 2)) | 0;
            c[D >> 2] = (c[D >> 2] | 0) + 1;
            j = (j + 1) | 0;
            if ((j | 0) >= (h | 0)) {
              j = 4;
              break;
            }
          }
          if ((j | 0) == 4) {
            m = c[I >> 2] | 0;
            break;
          } else if ((j | 0) == 50) {
            l = J;
            return G | 0;
          }
        } else m = 0;
      while (0);
      if ((m | 0) == (h | 0)) {
        d = 0;
        l = J;
        return d | 0;
      }
      c[(o + 4) >> 2] = 0;
      s = (I + 4) | 0;
      p = c[s >> 2] | 0;
      if ((p | 0) > 2) {
        d = 0;
        l = J;
        return d | 0;
      }
      c[(o + 8) >> 2] = p;
      j = c[(I + 8) >> 2] | 0;
      if ((j | 0) > 4) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (j + p) | 0;
      c[(o + 12) >> 2] = j;
      k = c[(I + 12) >> 2] | 0;
      if ((k | 0) > 8) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 16) >> 2] = j;
      k = c[(I + 16) >> 2] | 0;
      if ((k | 0) > 16) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 20) >> 2] = j;
      k = c[(I + 20) >> 2] | 0;
      if ((k | 0) > 32) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 24) >> 2] = j;
      k = c[(I + 24) >> 2] | 0;
      if ((k | 0) > 64) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 28) >> 2] = j;
      k = c[(I + 28) >> 2] | 0;
      if ((k | 0) > 128) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 32) >> 2] = j;
      k = c[(I + 32) >> 2] | 0;
      if ((k | 0) > 256) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 36) >> 2] = j;
      k = c[(I + 36) >> 2] | 0;
      if ((k | 0) > 512) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 40) >> 2] = j;
      k = c[(I + 40) >> 2] | 0;
      if ((k | 0) > 1024) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 44) >> 2] = j;
      k = c[(I + 44) >> 2] | 0;
      if ((k | 0) > 2048) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 48) >> 2] = j;
      k = c[(I + 48) >> 2] | 0;
      if ((k | 0) > 4096) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 52) >> 2] = j;
      k = c[(I + 52) >> 2] | 0;
      if ((k | 0) > 8192) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      c[(o + 56) >> 2] = j;
      k = c[(I + 56) >> 2] | 0;
      if ((k | 0) > 16384) {
        d = 0;
        l = J;
        return d | 0;
      }
      j = (k + j) | 0;
      D = (o + 60) | 0;
      c[D >> 2] = j;
      if (n) {
        j = 0;
        do {
          k = c[(g + (j << 2)) >> 2] | 0;
          if ((k | 0) > 0) {
            A = (o + (k << 2)) | 0;
            C = c[A >> 2] | 0;
            c[A >> 2] = C + 1;
            b[(i + (C << 1)) >> 1] = j;
          }
          j = (j + 1) | 0;
        } while ((j | 0) != (h | 0));
        j = c[D >> 2] | 0;
      }
      if ((j | 0) == 1) {
        k = (e[i >> 1] | 0) << 16;
        j = w;
        do {
          I = j;
          j = (j + -1) | 0;
          i = (d + (j << 2)) | 0;
          b[i >> 1] = k;
          b[(i + 2) >> 1] = k >>> 16;
        } while ((I | 0) > 1);
        G = w;
        l = J;
        return G | 0;
      }
      C = (w + -1) | 0;
      a: do
        if ((f | 0) < 1) {
          k = 1;
          m = 1;
          n = 0;
          g = 0;
        } else {
          k = (2 - p) | 0;
          if ((k | 0) < 0) {
            d = 0;
            l = J;
            return d | 0;
          } else {
            n = 0;
            u = 2;
            v = 1;
            g = 0;
            t = 3;
          }
          while (1) {
            if ((p | 0) > 0) {
              q = v & 255;
              r = 1 << (v + -1);
              do {
                o = (d + (n << 2)) | 0;
                h = ((e[(i + (g << 1)) >> 1] | 0) << 16) | q;
                m = w;
                do {
                  m = (m - u) | 0;
                  A = (o + (m << 2)) | 0;
                  b[A >> 1] = h;
                  b[(A + 2) >> 1] = h >>> 16;
                } while ((m | 0) > 0);
                m = r;
                while (1)
                  if (!(m & n)) break;
                  else m = m >>> 1;
                g = (g + 1) | 0;
                n = (m | 0) == 0 ? n : (((m + -1) & n) + m) | 0;
                A = p;
                p = (p + -1) | 0;
              } while ((A | 0) > 1);
              c[s >> 2] = p;
            }
            if ((v | 0) >= (f | 0)) {
              m = t;
              break a;
            }
            v = (v + 1) | 0;
            s = (I + (v << 2)) | 0;
            p = c[s >> 2] | 0;
            m = k << 1;
            k = (m - p) | 0;
            if ((k | 0) < 0) {
              G = 0;
              break;
            } else {
              u = u << 1;
              t = (t + m) | 0;
            }
          }
          l = J;
          return G | 0;
        }
      while (0);
      h = (f + 1) | 0;
      do
        if ((h | 0) < 16) {
          A = d;
          p = -1;
          r = d;
          q = w;
          o = w;
          z = 2;
          j = f;
          y = h;
          while (1) {
            w = k << 1;
            m = (w + m) | 0;
            x = (I + (y << 2)) | 0;
            h = c[x >> 2] | 0;
            k = (w - h) | 0;
            if ((k | 0) < 0) {
              G = 0;
              j = 50;
              break;
            }
            b: do
              if ((h | 0) > 0) {
                v = (y - f) | 0;
                w = v & 255;
                u = 1 << j;
                v = 1 << v;
                if ((y | 0) < 15) t = q;
                else {
                  t = y & 255;
                  while (1) {
                    j = n & C;
                    h = (r + (o << 2)) | 0;
                    if ((j | 0) == (p | 0)) s = o;
                    else {
                      a[(d + (j << 2)) >> 0] = t;
                      b[(d + (j << 2) + 2) >> 1] = (((h - A) | 0) >>> 2) - j;
                      s = v;
                      p = j;
                      r = h;
                      q = (q + v) | 0;
                    }
                    o = (r + ((n >>> f) << 2)) | 0;
                    h = ((e[(i + (g << 1)) >> 1] | 0) << 16) | w;
                    j = s;
                    do {
                      j = (j - z) | 0;
                      B = (o + (j << 2)) | 0;
                      b[B >> 1] = h;
                      b[(B + 2) >> 1] = h >>> 16;
                    } while ((j | 0) > 0);
                    j = u;
                    while (1)
                      if (!(j & n)) break;
                      else j = j >>> 1;
                    g = (g + 1) | 0;
                    n = (j | 0) == 0 ? n : (((j + -1) & n) + j) | 0;
                    B = c[x >> 2] | 0;
                    c[x >> 2] = B + -1;
                    if ((B | 0) > 1) o = s;
                    else {
                      o = s;
                      h = r;
                      B = q;
                      break b;
                    }
                  }
                }
                while (1) {
                  q = n & C;
                  if ((q | 0) == (p | 0)) {
                    s = o;
                    q = t;
                  } else {
                    o = (r + (o << 2)) | 0;
                    h = (v - h) | 0;
                    c: do
                      if ((h | 0) < 1) j = y;
                      else {
                        j = y;
                        do {
                          j = (j + 1) | 0;
                          if ((j | 0) >= 15) break c;
                          h = ((h << 1) - (c[(I + (j << 2)) >> 2] | 0)) | 0;
                        } while ((h | 0) >= 1);
                      }
                    while (0);
                    B = 1 << (j - f);
                    a[(d + (q << 2)) >> 0] = j;
                    b[(d + (q << 2) + 2) >> 1] = (((o - A) | 0) >>> 2) - q;
                    s = B;
                    p = q;
                    r = o;
                    q = (B + t) | 0;
                  }
                  o = (r + ((n >>> f) << 2)) | 0;
                  h = ((e[(i + (g << 1)) >> 1] | 0) << 16) | w;
                  j = s;
                  do {
                    j = (j - z) | 0;
                    B = (o + (j << 2)) | 0;
                    b[B >> 1] = h;
                    b[(B + 2) >> 1] = h >>> 16;
                  } while ((j | 0) > 0);
                  j = u;
                  while (1)
                    if (!(j & n)) break;
                    else j = j >>> 1;
                  g = (g + 1) | 0;
                  n = (j | 0) == 0 ? n : (((j + -1) & n) + j) | 0;
                  B = c[x >> 2] | 0;
                  h = (B + -1) | 0;
                  c[x >> 2] = h;
                  if ((B | 0) <= 1) {
                    o = s;
                    h = r;
                    B = q;
                    break;
                  } else {
                    t = q;
                    o = s;
                  }
                }
              } else {
                h = r;
                B = q;
              }
            while (0);
            j = (y + 1) | 0;
            if ((j | 0) >= 16) {
              j = 48;
              break;
            } else {
              x = y;
              r = h;
              q = B;
              z = z << 1;
              y = j;
              j = x;
            }
          }
          if ((j | 0) == 48) {
            E = B;
            F = m;
            H = c[D >> 2] | 0;
            break;
          } else if ((j | 0) == 50) {
            l = J;
            return G | 0;
          }
        } else {
          E = w;
          F = m;
          H = j;
        }
      while (0);
      d = (F | 0) == (((H << 1) + -1) | 0) ? E : 0;
      l = J;
      return d | 0;
    }
    function mb(a, b) {
      a = a | 0;
      b = b | 0;
      return -16777216;
    }
    function nb(a, b) {
      a = a | 0;
      b = b | 0;
      return a | 0;
    }
    function ob(a, b) {
      a = a | 0;
      b = b | 0;
      return c[b >> 2] | 0;
    }
    function pb(a, b) {
      a = a | 0;
      b = b | 0;
      return c[(b + 4) >> 2] | 0;
    }
    function qb(a, b) {
      a = a | 0;
      b = b | 0;
      return c[(b + -4) >> 2] | 0;
    }
    function rb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0;
      d = c[b >> 2] | 0;
      b = c[(b + 4) >> 2] | 0;
      b = ((((b ^ a) >>> 1) & 2139062143) + (b & a)) | 0;
      return ((((b ^ d) >>> 1) & 2139062143) + (b & d)) | 0;
    }
    function sb(a, b) {
      a = a | 0;
      b = b | 0;
      b = c[(b + -4) >> 2] | 0;
      return ((((b ^ a) >>> 1) & 2139062143) + (b & a)) | 0;
    }
    function tb(a, b) {
      a = a | 0;
      b = b | 0;
      b = c[b >> 2] | 0;
      return ((((b ^ a) >>> 1) & 2139062143) + (b & a)) | 0;
    }
    function ub(a, b) {
      a = a | 0;
      b = b | 0;
      a = c[(b + -4) >> 2] | 0;
      b = c[b >> 2] | 0;
      return ((((b ^ a) >>> 1) & 2139062143) + (b & a)) | 0;
    }
    function vb(a, b) {
      a = a | 0;
      b = b | 0;
      a = c[b >> 2] | 0;
      b = c[(b + 4) >> 2] | 0;
      return ((((b ^ a) >>> 1) & 2139062143) + (b & a)) | 0;
    }
    function wb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0;
      f = c[(b + -4) >> 2] | 0;
      d = c[b >> 2] | 0;
      e = c[(b + 4) >> 2] | 0;
      b = ((((f ^ a) >>> 1) & 2139062143) + (f & a)) | 0;
      a = ((((e ^ d) >>> 1) & 2139062143) + (e & d)) | 0;
      return ((((a ^ b) >>> 1) & 2139062143) + (a & b)) | 0;
    }
    function xb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0;
      d = c[b >> 2] | 0;
      j = c[(b + -4) >> 2] | 0;
      i = j >>> 24;
      h = ((a >>> 24) - i) | 0;
      i = ((d >>> 24) - i) | 0;
      e = (j >>> 16) & 255;
      b = (((a >>> 16) & 255) - e) | 0;
      e = (((d >>> 16) & 255) - e) | 0;
      g = (j >>> 8) & 255;
      f = (((a >>> 8) & 255) - g) | 0;
      g = (((d >>> 8) & 255) - g) | 0;
      j = j & 255;
      k = ((a & 255) - j) | 0;
      j = ((d & 255) - j) | 0;
      return (
        (((((k | 0) > -1 ? k : (0 - k) | 0) -
          ((j | 0) > -1 ? j : (0 - j) | 0) -
          ((i | 0) > -1 ? i : (0 - i) | 0) +
          ((h | 0) > -1 ? h : (0 - h) | 0) -
          ((g | 0) > -1 ? g : (0 - g) | 0) +
          ((f | 0) > -1 ? f : (0 - f) | 0) -
          ((e | 0) > -1 ? e : (0 - e) | 0) +
          ((b | 0) > -1 ? b : (0 - b) | 0)) |
          0) <
        1
          ? d
          : a) | 0
      );
    }
    function yb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0;
      g = c[b >> 2] | 0;
      f = c[(b + -4) >> 2] | 0;
      e = ((g >>> 24) + (a >>> 24) - (f >>> 24)) | 0;
      d = (((g >>> 16) & 255) + ((a >>> 16) & 255) - ((f >>> 16) & 255)) | 0;
      b = (((g >>> 8) & 255) + ((a >>> 8) & 255) - ((f >>> 8) & 255)) | 0;
      a = ((g & 255) + (a & 255) - (f & 255)) | 0;
      return (
        ((e >>> 0 < 256 ? e : (e >>> 24) ^ 255) << 24) |
        (a >>> 0 < 256 ? a : (a >>> 24) ^ 255) |
        ((d >>> 0 < 256 ? d : (d >>> 24) ^ 255) << 16) |
        ((b >>> 0 < 256 ? b : (b >>> 24) ^ 255) << 8) |
        0
      );
    }
    function zb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0;
      d = c[b >> 2] | 0;
      f = c[(b + -4) >> 2] | 0;
      d = ((((d ^ a) >>> 1) & 2139062143) + (d & a)) | 0;
      e = d >>> 24;
      e = (((((e - (f >>> 24)) | 0) / 2) | 0) + e) | 0;
      a = (d >>> 16) & 255;
      a = (((((a - ((f >>> 16) & 255)) | 0) / 2) | 0) + a) | 0;
      b = (d >>> 8) & 255;
      b = (((((b - ((f >>> 8) & 255)) | 0) / 2) | 0) + b) | 0;
      d = d & 255;
      d = (((((d - (f & 255)) | 0) / 2) | 0) + d) | 0;
      return (
        ((e >>> 0 < 256 ? e : (e >>> 24) ^ 255) << 24) |
        (d >>> 0 < 256 ? d : (d >>> 24) ^ 255) |
        ((a >>> 0 < 256 ? a : (a >>> 24) ^ 255) << 16) |
        ((b >>> 0 < 256 ? b : (b >>> 24) ^ 255) << 8) |
        0
      );
    }
    function Ab(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0;
      if ((d | 0) > 0) b = 0;
      else return;
      do {
        f = c[(a + (b << 2)) >> 2] | 0;
        c[(e + (b << 2)) >> 2] = ((f + -16777216) & -16711936) | (f & 16711935);
        b = (b + 1) | 0;
      } while ((b | 0) != (d | 0));
      return;
    }
    function Bb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0;
      if ((d | 0) <= 0) return;
      b = 0;
      f = c[(e + -4) >> 2] | 0;
      do {
        g = c[(a + (b << 2)) >> 2] | 0;
        f = (((g & -16711936) + (f & -16711936)) & -16711936) | (((g & 16711935) + (f & 16711935)) & 16711935);
        c[(e + (b << 2)) >> 2] = f;
        b = (b + 1) | 0;
      } while ((b | 0) != (d | 0));
      return;
    }
    function Cb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((d | 0) > 0) f = 0;
      else return;
      do {
        g = c[(b + (f << 2)) >> 2] | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        c[(e + (f << 2)) >> 2] = (((h & -16711936) + (g & -16711936)) & -16711936) | (((h & 16711935) + (g & 16711935)) & 16711935);
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Db(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((d | 0) > 0) f = 0;
      else return;
      do {
        g = c[(b + (f << 2) + 4) >> 2] | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        c[(e + (f << 2)) >> 2] = (((h & -16711936) + (g & -16711936)) & -16711936) | (((h & 16711935) + (g & 16711935)) & 16711935);
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Eb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((d | 0) > 0) f = 0;
      else return;
      do {
        g = c[(b + (f << 2) + -4) >> 2] | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        c[(e + (f << 2)) >> 2] = (((h & -16711936) + (g & -16711936)) & -16711936) | (((h & 16711935) + (g & 16711935)) & 16711935);
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Fb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        h = (b + (f << 2)) | 0;
        i = c[h >> 2] | 0;
        h = c[(h + 4) >> 2] | 0;
        h = ((((h ^ g) >>> 1) & 2139062143) + (h & g)) | 0;
        i = ((((h ^ i) >>> 1) & 2139062143) + (h & i)) | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Gb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        i = c[(b + (f << 2) + -4) >> 2] | 0;
        i = ((((i ^ g) >>> 1) & 2139062143) + (i & g)) | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Hb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        i = c[(b + (f << 2)) >> 2] | 0;
        i = ((((i ^ g) >>> 1) & 2139062143) + (i & g)) | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Ib(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((d | 0) > 0) f = 0;
      else return;
      do {
        g = (b + (f << 2)) | 0;
        h = c[(g + -4) >> 2] | 0;
        g = c[g >> 2] | 0;
        h = ((((g ^ h) >>> 1) & 2139062143) + (g & h)) | 0;
        g = c[(a + (f << 2)) >> 2] | 0;
        c[(e + (f << 2)) >> 2] = (((h & -16711936) + (g & -16711936)) & -16711936) | (((h & 16711935) + (g & 16711935)) & 16711935);
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Jb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((d | 0) > 0) f = 0;
      else return;
      do {
        g = (b + (f << 2)) | 0;
        h = c[g >> 2] | 0;
        g = c[(g + 4) >> 2] | 0;
        h = ((((g ^ h) >>> 1) & 2139062143) + (g & h)) | 0;
        g = c[(a + (f << 2)) >> 2] | 0;
        c[(e + (f << 2)) >> 2] = (((h & -16711936) + (g & -16711936)) & -16711936) | (((h & 16711935) + (g & 16711935)) & 16711935);
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Kb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        j = (b + (f << 2)) | 0;
        i = c[(j + -4) >> 2] | 0;
        h = c[j >> 2] | 0;
        j = c[(j + 4) >> 2] | 0;
        i = ((((i ^ g) >>> 1) & 2139062143) + (i & g)) | 0;
        h = ((((j ^ h) >>> 1) & 2139062143) + (j & h)) | 0;
        i = ((((h ^ i) >>> 1) & 2139062143) + (h & i)) | 0;
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Lb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        o = (b + (f << 2)) | 0;
        i = c[o >> 2] | 0;
        o = c[(o + -4) >> 2] | 0;
        n = o >>> 24;
        m = ((g >>> 24) - n) | 0;
        n = ((i >>> 24) - n) | 0;
        j = (o >>> 16) & 255;
        h = (((g >>> 16) & 255) - j) | 0;
        j = (((i >>> 16) & 255) - j) | 0;
        l = (o >>> 8) & 255;
        k = (((g >>> 8) & 255) - l) | 0;
        l = (((i >>> 8) & 255) - l) | 0;
        o = o & 255;
        p = ((g & 255) - o) | 0;
        o = ((i & 255) - o) | 0;
        i =
          ((((p | 0) > -1 ? p : (0 - p) | 0) -
            ((o | 0) > -1 ? o : (0 - o) | 0) -
            ((n | 0) > -1 ? n : (0 - n) | 0) +
            ((m | 0) > -1 ? m : (0 - m) | 0) -
            ((l | 0) > -1 ? l : (0 - l) | 0) +
            ((k | 0) > -1 ? k : (0 - k) | 0) -
            ((j | 0) > -1 ? j : (0 - j) | 0) +
            ((h | 0) > -1 ? h : (0 - h) | 0)) |
            0) <
          1
            ? i
            : g;
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Mb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        j = (b + (f << 2)) | 0;
        l = c[j >> 2] | 0;
        j = c[(j + -4) >> 2] | 0;
        k = ((l >>> 24) + (g >>> 24) - (j >>> 24)) | 0;
        h = (((l >>> 16) & 255) + ((g >>> 16) & 255) - ((j >>> 16) & 255)) | 0;
        i = (((l >>> 8) & 255) + ((g >>> 8) & 255) - ((j >>> 8) & 255)) | 0;
        j = ((l & 255) + (g & 255) - (j & 255)) | 0;
        i =
          ((k >>> 0 < 256 ? k : (k >>> 24) ^ 255) << 24) |
          (j >>> 0 < 256 ? j : (j >>> 24) ^ 255) |
          ((h >>> 0 < 256 ? h : (h >>> 24) ^ 255) << 16) |
          ((i >>> 0 < 256 ? i : (i >>> 24) ^ 255) << 8);
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Nb(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      if ((d | 0) <= 0) return;
      f = 0;
      g = c[(e + -4) >> 2] | 0;
      do {
        l = (b + (f << 2)) | 0;
        j = c[l >> 2] | 0;
        l = c[(l + -4) >> 2] | 0;
        j = ((((j ^ g) >>> 1) & 2139062143) + (j & g)) | 0;
        k = j >>> 24;
        k = (((((k - (l >>> 24)) | 0) / 2) | 0) + k) | 0;
        h = (j >>> 16) & 255;
        h = (((((h - ((l >>> 16) & 255)) | 0) / 2) | 0) + h) | 0;
        i = (j >>> 8) & 255;
        i = (((((i - ((l >>> 8) & 255)) | 0) / 2) | 0) + i) | 0;
        j = j & 255;
        j = (((((j - (l & 255)) | 0) / 2) | 0) + j) | 0;
        i =
          ((k >>> 0 < 256 ? k : (k >>> 24) ^ 255) << 24) |
          (j >>> 0 < 256 ? j : (j >>> 24) ^ 255) |
          ((h >>> 0 < 256 ? h : (h >>> 24) ^ 255) << 16) |
          ((i >>> 0 < 256 ? i : (i >>> 24) ^ 255) << 8);
        h = c[(a + (f << 2)) >> 2] | 0;
        g = (((i & -16711936) + (h & -16711936)) & -16711936) | (((i & 16711935) + (h & 16711935)) & 16711935);
        c[(e + (f << 2)) >> 2] = g;
        f = (f + 1) | 0;
      } while ((f | 0) != (d | 0));
      return;
    }
    function Ob(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0;
      e = c[(a + 40) >> 2] | 0;
      if ((c[(a + 12) >> 2] | 0) < 1 ? 1 : (c[(a + 16) >> 2] | 0) < 1) {
        e = 0;
        return e | 0;
      }
      b = Wa[c[(e + 44) >> 2] & 31](a, e) | 0;
      d = c[(e + 48) >> 2] | 0;
      if (d | 0) Pa[d & 15](a, e, b) | 0;
      e = (e + 16) | 0;
      c[e >> 2] = (c[e >> 2] | 0) + b;
      e = 1;
      return e | 0;
    }
    function Pb(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0;
      G = c[(a + 40) >> 2] | 0;
      g = c[c[G >> 2] >> 2] | 0;
      h = g >>> 0 < 11;
      I = (g + -1) | 0;
      if (I >>> 0 < 12 ? ((2077 >>> (I & 65535)) & 1) != 0 : 0) f = 1;
      else f = ((g + -7) | 0) >>> 0 < 4;
      j = (G + 40) | 0;
      H = (G + 44) | 0;
      I = (G + 48) | 0;
      F = (G + 52) | 0;
      c[j >> 2] = 0;
      c[(j + 4) >> 2] = 0;
      c[(j + 8) >> 2] = 0;
      c[(j + 12) >> 2] = 0;
      if (!(Rb(c[(G + 20) >> 2] | 0, a, f ? 11 : 12) | 0)) {
        I = 0;
        return I | 0;
      }
      if ((((g + -7) | 0) >>> 0 < 4) & f ? c[32] | 0 : 0) {
        c[2866] = 1;
        c[2868] = 2;
        c[2872] = 1;
        c[2873] = 2;
        c[2865] = 3;
        c[2867] = 4;
        c[2869] = 5;
        c[2870] = 6;
        c[2871] = 7;
        c[2874] = 5;
        c[2875] = 6;
        c[32] = 0;
      }
      if (!(c[(a + 92) >> 2] | 0)) {
        if (h) {
          if (c[29] | 0) {
            c[2891] = 8;
            c[2892] = 9;
            c[2893] = 10;
            c[2894] = 11;
            c[2895] = 12;
            c[2896] = 13;
            c[2897] = 14;
            c[2898] = 9;
            c[2899] = 11;
            c[2900] = 12;
            c[2901] = 13;
            c[29] = 0;
          }
          c[H >> 2] = 17;
          if (c[(a + 56) >> 2] | 0) {
            d = (a + 12) | 0;
            b = c[d >> 2] | 0;
            e = (b + 1) >> 1;
            b = ((e << 1) + b) | 0;
            if (b >>> 0 >= 2147418113) {
              c[j >> 2] = 0;
              I = 0;
              return I | 0;
            }
            b = Ad(b) | 0;
            c[j >> 2] = b;
            if (!b) {
              I = 0;
              return I | 0;
            }
            c[(G + 4) >> 2] = b;
            F = (b + (c[d >> 2] | 0)) | 0;
            c[(G + 8) >> 2] = F;
            c[(G + 12) >> 2] = F + e;
            c[H >> 2] = 18;
            if (c[32] | 0) {
              c[2866] = 1;
              c[2868] = 2;
              c[2872] = 1;
              c[2873] = 2;
              c[2865] = 3;
              c[2867] = 4;
              c[2869] = 5;
              c[2870] = 6;
              c[2871] = 7;
              c[2874] = 5;
              c[2875] = 6;
              c[32] = 0;
            }
          }
        } else c[H >> 2] = 19;
        if (!f) {
          I = 1;
          return I | 0;
        }
        switch (g | 0) {
          case 5:
          case 10: {
            b = 9;
            break;
          }
          default:
            b = h ? 6 : 5;
        }
        c[I >> 2] = b;
        if (!h) {
          I = 1;
          return I | 0;
        }
        if (!(c[27] | 0)) {
          I = 1;
          return I | 0;
        }
        c[27] = 0;
        I = 1;
        return I | 0;
      }
      A = c[G >> 2] | 0;
      b = c[A >> 2] | 0;
      e = (b + -1) | 0;
      d = e >>> 0 < 12;
      if (!h) {
        if (d ? ((2077 >>> (e & 65535)) & 1) != 0 : 0) w = 1;
        else w = ((b + -7) | 0) >>> 0 < 4;
        D = c[(a + 96) >> 2] | 0;
        B = c[(a + 100) >> 2] | 0;
        u = (D + 1) >> 1;
        r = (B + 1) >> 1;
        x = (a + 12) | 0;
        s = ((c[x >> 2] | 0) + 1) >> 1;
        v = (a + 16) | 0;
        q = ((c[v >> 2] | 0) + 1) >> 1;
        i = D << 1;
        y = u << 2;
        C = D << 3;
        d = (((y + i) << 2) + (w ? C : 0)) | 0;
        b = (d + (w ? 367 : 283)) | 0;
        if (b >>> 0 >= 2147418113) {
          c[j >> 2] = 0;
          I = 0;
          return I | 0;
        }
        a = Ad(b) | 0;
        c[j >> 2] = a;
        if (!a) {
          I = 0;
          return I | 0;
        }
        g = (a + d + 31) & -32;
        c[(G + 24) >> 2] = g;
        h = (G + 28) | 0;
        c[h >> 2] = g + 84;
        o = (G + 32) | 0;
        c[o >> 2] = g + 168;
        p = (G + 36) | 0;
        c[p >> 2] = w ? (g + 252) | 0 : 0;
        e = c[x >> 2] | 0;
        d = c[v >> 2] | 0;
        b = c[(A + 16) >> 2] | 0;
        t = c[(A + 32) >> 2] | 0;
        G = (e | 0) < (D | 0);
        c[g >> 2] = G & 1;
        f = (d | 0) < (B | 0);
        c[(g + 4) >> 2] = f & 1;
        c[(g + 44) >> 2] = e;
        c[(g + 48) >> 2] = d;
        c[(g + 52) >> 2] = D;
        c[(g + 56) >> 2] = B;
        c[(g + 60) >> 2] = 0;
        c[(g + 64) >> 2] = 0;
        c[(g + 68) >> 2] = b;
        c[(g + 72) >> 2] = t;
        c[(g + 8) >> 2] = 1;
        t = (D + -1) | 0;
        b = G ? t : e;
        c[(g + 36) >> 2] = b;
        e = G ? (e + -1) | 0 : D;
        c[(g + 40) >> 2] = e;
        if (!G) {
          G = se(0, 1, e | 0, ((((e | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(g + 12) >> 2] = G;
        }
        e = (f << 31) >> 31;
        d = (e + d) | 0;
        c[(g + 28) >> 2] = d;
        e = (e + B) | 0;
        c[(g + 32) >> 2] = e;
        c[(g + 24) >> 2] = f ? e : d;
        if (!f) {
          b = O(d, b) | 0;
          b = se(0, B | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(g + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
          b = e;
        }
        G = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(g + 16) >> 2] = G;
        c[(g + 76) >> 2] = a;
        c[(g + 80) >> 2] = a + (D << 2);
        me(a | 0, 0, C | 0) | 0;
        if (c[31] | 0) c[31] = 0;
        e = c[h >> 2] | 0;
        j = c[(A + 20) >> 2] | 0;
        b = c[(A + 36) >> 2] | 0;
        n = (a + (i << 2)) | 0;
        g = (s | 0) < (u | 0);
        h = g & 1;
        c[e >> 2] = h;
        a = (q | 0) < (r | 0);
        i = a & 1;
        c[(e + 4) >> 2] = i;
        c[(e + 44) >> 2] = s;
        c[(e + 48) >> 2] = q;
        c[(e + 52) >> 2] = u;
        c[(e + 56) >> 2] = r;
        c[(e + 60) >> 2] = 0;
        c[(e + 64) >> 2] = 0;
        c[(e + 68) >> 2] = j;
        c[(e + 72) >> 2] = b;
        c[(e + 8) >> 2] = 1;
        b = g ? (u + -1) | 0 : s;
        c[(e + 36) >> 2] = b;
        j = g ? (s + -1) | 0 : u;
        c[(e + 40) >> 2] = j;
        if (!g) {
          G = se(0, 1, j | 0, ((((j | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(e + 12) >> 2] = G;
        }
        l = (a << 31) >> 31;
        k = (l + q) | 0;
        c[(e + 28) >> 2] = k;
        l = (l + r) | 0;
        c[(e + 32) >> 2] = l;
        m = a ? l : k;
        c[(e + 24) >> 2] = m;
        if (a) d = b;
        else {
          d = O(k, b) | 0;
          d = se(0, r | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(e + 20) >> 2] = ((d | 0) == (d | 0)) & ((z | 0) == 0) ? d : 0;
          d = l;
        }
        f = se(0, 1, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(e + 16) >> 2] = f;
        c[(e + 76) >> 2] = n;
        c[(e + 80) >> 2] = n + (u << 2);
        f = u << 3;
        me(n | 0, 0, f | 0) | 0;
        if (c[31] | 0) c[31] = 0;
        d = c[o >> 2] | 0;
        F = c[(A + 24) >> 2] | 0;
        G = c[(A + 40) >> 2] | 0;
        e = (n + ((u << 1) << 2)) | 0;
        c[d >> 2] = h;
        c[(d + 4) >> 2] = i;
        c[(d + 44) >> 2] = s;
        c[(d + 48) >> 2] = q;
        c[(d + 52) >> 2] = u;
        c[(d + 56) >> 2] = r;
        c[(d + 60) >> 2] = 0;
        c[(d + 64) >> 2] = 0;
        c[(d + 68) >> 2] = F;
        c[(d + 72) >> 2] = G;
        c[(d + 8) >> 2] = 1;
        c[(d + 36) >> 2] = b;
        c[(d + 40) >> 2] = j;
        if (!g) {
          G = se(0, 1, j | 0, ((((j | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(d + 12) >> 2] = G;
        }
        c[(d + 28) >> 2] = k;
        c[(d + 32) >> 2] = l;
        c[(d + 24) >> 2] = m;
        if (!a) {
          b = O(k, b) | 0;
          b = se(0, r | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(d + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
          b = l;
        }
        G = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(d + 16) >> 2] = G;
        c[(d + 76) >> 2] = e;
        c[(d + 80) >> 2] = e + (u << 2);
        me(e | 0, 0, f | 0) | 0;
        if (c[31] | 0) c[31] = 0;
        c[H >> 2] = 16;
        if (!w) {
          I = 1;
          return I | 0;
        }
        h = c[p >> 2] | 0;
        d = c[x >> 2] | 0;
        e = c[v >> 2] | 0;
        G = c[(A + 28) >> 2] | 0;
        b = c[(A + 44) >> 2] | 0;
        g = (n + (y << 2)) | 0;
        H = (d | 0) < (D | 0);
        c[h >> 2] = H & 1;
        f = (e | 0) < (B | 0);
        c[(h + 4) >> 2] = f & 1;
        c[(h + 44) >> 2] = d;
        c[(h + 48) >> 2] = e;
        c[(h + 52) >> 2] = D;
        c[(h + 56) >> 2] = B;
        c[(h + 60) >> 2] = 0;
        c[(h + 64) >> 2] = 0;
        c[(h + 68) >> 2] = G;
        c[(h + 72) >> 2] = b;
        c[(h + 8) >> 2] = 1;
        b = H ? t : d;
        c[(h + 36) >> 2] = b;
        d = H ? (d + -1) | 0 : D;
        c[(h + 40) >> 2] = d;
        if (!H) {
          H = se(0, 1, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(h + 12) >> 2] = H;
        }
        H = (f << 31) >> 31;
        d = (H + e) | 0;
        c[(h + 28) >> 2] = d;
        e = (H + B) | 0;
        c[(h + 32) >> 2] = e;
        c[(h + 24) >> 2] = f ? e : d;
        if (!f) {
          b = O(d, b) | 0;
          b = se(0, B | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
          c[(h + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
          b = e;
        }
        H = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(h + 16) >> 2] = H;
        c[(h + 76) >> 2] = g;
        c[(h + 80) >> 2] = g + (D << 2);
        me(g | 0, 0, C | 0) | 0;
        if (c[31] | 0) c[31] = 0;
        c[I >> 2] = 4;
        if (!(c[27] | 0)) {
          I = 1;
          return I | 0;
        }
        c[27] = 0;
        I = 1;
        return I | 0;
      }
      if (d ? ((2077 >>> (e & 65535)) & 1) != 0 : 0) v = 1;
      else v = ((b + -7) | 0) >>> 0 < 4;
      E = c[(a + 96) >> 2] | 0;
      C = c[(a + 100) >> 2] | 0;
      y = (a + 12) | 0;
      s = ((c[y >> 2] | 0) + 1) >> 1;
      u = (a + 16) | 0;
      q = ((c[u >> 2] | 0) + 1) >> 1;
      r = E << 1;
      A = (E * 6) | 0;
      B = (E * 3) | 0;
      D = E << 3;
      p = E << 2;
      d = v ? D : A;
      e = ((d << 2) + (v ? p : B)) | 0;
      b = (e + (v ? 367 : 283)) | 0;
      if (b >>> 0 >= 2147418113) {
        c[j >> 2] = 0;
        I = 0;
        return I | 0;
      }
      w = Ad(b) | 0;
      c[j >> 2] = w;
      if (!w) {
        I = 0;
        return I | 0;
      }
      x = (w + (d << 2)) | 0;
      g = (w + e + 31) & -32;
      c[(G + 24) >> 2] = g;
      h = (G + 28) | 0;
      c[h >> 2] = g + 84;
      n = (G + 32) | 0;
      c[n >> 2] = g + 168;
      o = (G + 36) | 0;
      c[o >> 2] = v ? (g + 252) | 0 : 0;
      e = c[y >> 2] | 0;
      d = c[u >> 2] | 0;
      m = (e | 0) < (E | 0);
      c[g >> 2] = m & 1;
      f = (d | 0) < (C | 0);
      c[(g + 4) >> 2] = f & 1;
      c[(g + 44) >> 2] = e;
      c[(g + 48) >> 2] = d;
      c[(g + 52) >> 2] = E;
      c[(g + 56) >> 2] = C;
      c[(g + 60) >> 2] = 0;
      c[(g + 64) >> 2] = 0;
      c[(g + 68) >> 2] = x;
      c[(g + 72) >> 2] = 0;
      c[(g + 8) >> 2] = 1;
      t = (E + -1) | 0;
      b = m ? t : e;
      c[(g + 36) >> 2] = b;
      e = m ? (e + -1) | 0 : E;
      c[(g + 40) >> 2] = e;
      if (!m) {
        m = se(0, 1, e | 0, ((((e | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(g + 12) >> 2] = m;
      }
      e = (f << 31) >> 31;
      d = (e + d) | 0;
      c[(g + 28) >> 2] = d;
      e = (e + C) | 0;
      c[(g + 32) >> 2] = e;
      c[(g + 24) >> 2] = f ? e : d;
      if (!f) {
        b = O(d, b) | 0;
        b = se(0, C | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(g + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
        b = e;
      }
      m = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
      c[(g + 16) >> 2] = m;
      c[(g + 76) >> 2] = w;
      c[(g + 80) >> 2] = w + (E << 2);
      me(w | 0, 0, D | 0) | 0;
      if (c[31] | 0) c[31] = 0;
      e = c[h >> 2] | 0;
      f = (w + (r << 2)) | 0;
      g = (s | 0) < (E | 0);
      h = g & 1;
      c[e >> 2] = h;
      a = (q | 0) < (C | 0);
      i = a & 1;
      c[(e + 4) >> 2] = i;
      c[(e + 44) >> 2] = s;
      c[(e + 48) >> 2] = q;
      c[(e + 52) >> 2] = E;
      c[(e + 56) >> 2] = C;
      c[(e + 60) >> 2] = 0;
      c[(e + 64) >> 2] = 0;
      c[(e + 68) >> 2] = x + E;
      c[(e + 72) >> 2] = 0;
      c[(e + 8) >> 2] = 1;
      b = g ? t : s;
      c[(e + 36) >> 2] = b;
      j = g ? (s + -1) | 0 : E;
      c[(e + 40) >> 2] = j;
      if (!g) {
        m = se(0, 1, j | 0, ((((j | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(e + 12) >> 2] = m;
      }
      l = (a << 31) >> 31;
      k = (l + q) | 0;
      c[(e + 28) >> 2] = k;
      l = (l + C) | 0;
      c[(e + 32) >> 2] = l;
      m = a ? l : k;
      c[(e + 24) >> 2] = m;
      if (a) d = b;
      else {
        d = O(k, b) | 0;
        d = se(0, C | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(e + 20) >> 2] = ((d | 0) == (d | 0)) & ((z | 0) == 0) ? d : 0;
        d = l;
      }
      d = se(0, 1, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
      c[(e + 16) >> 2] = d;
      c[(e + 76) >> 2] = f;
      c[(e + 80) >> 2] = f + (E << 2);
      me(f | 0, 0, D | 0) | 0;
      if (c[31] | 0) c[31] = 0;
      e = c[n >> 2] | 0;
      d = (w + (p << 2)) | 0;
      c[e >> 2] = h;
      c[(e + 4) >> 2] = i;
      c[(e + 44) >> 2] = s;
      c[(e + 48) >> 2] = q;
      c[(e + 52) >> 2] = E;
      c[(e + 56) >> 2] = C;
      c[(e + 60) >> 2] = 0;
      c[(e + 64) >> 2] = 0;
      c[(e + 68) >> 2] = x + r;
      c[(e + 72) >> 2] = 0;
      c[(e + 8) >> 2] = 1;
      c[(e + 36) >> 2] = b;
      c[(e + 40) >> 2] = j;
      if (!g) {
        s = se(0, 1, j | 0, ((((j | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(e + 12) >> 2] = s;
      }
      c[(e + 28) >> 2] = k;
      c[(e + 32) >> 2] = l;
      c[(e + 24) >> 2] = m;
      if (!a) {
        b = O(k, b) | 0;
        b = se(0, C | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(e + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
        b = l;
      }
      s = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
      c[(e + 16) >> 2] = s;
      c[(e + 76) >> 2] = d;
      c[(e + 80) >> 2] = d + (E << 2);
      me(d | 0, 0, D | 0) | 0;
      if (c[31] | 0) c[31] = 0;
      c[H >> 2] = 15;
      if (c[30] | 0) {
        c[2879] = 1;
        c[2881] = 2;
        c[2878] = 3;
        c[2880] = 4;
        c[2882] = 5;
        c[2883] = 6;
        c[2884] = 7;
        c[2885] = 1;
        c[2886] = 2;
        c[2887] = 5;
        c[2888] = 6;
        c[30] = 0;
      }
      if (!v) {
        I = 1;
        return I | 0;
      }
      h = c[o >> 2] | 0;
      d = c[y >> 2] | 0;
      e = c[u >> 2] | 0;
      g = (w + (A << 2)) | 0;
      H = (d | 0) < (E | 0);
      c[h >> 2] = H & 1;
      f = (e | 0) < (C | 0);
      c[(h + 4) >> 2] = f & 1;
      c[(h + 44) >> 2] = d;
      c[(h + 48) >> 2] = e;
      c[(h + 52) >> 2] = E;
      c[(h + 56) >> 2] = C;
      c[(h + 60) >> 2] = 0;
      c[(h + 64) >> 2] = 0;
      c[(h + 68) >> 2] = x + B;
      c[(h + 72) >> 2] = 0;
      c[(h + 8) >> 2] = 1;
      b = H ? t : d;
      c[(h + 36) >> 2] = b;
      d = H ? (d + -1) | 0 : E;
      c[(h + 40) >> 2] = d;
      if (!H) {
        H = se(0, 1, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(h + 12) >> 2] = H;
      }
      H = (f << 31) >> 31;
      d = (H + e) | 0;
      c[(h + 28) >> 2] = d;
      e = (H + C) | 0;
      c[(h + 32) >> 2] = e;
      c[(h + 24) >> 2] = f ? e : d;
      if (!f) {
        b = O(d, b) | 0;
        b = se(0, C | 0, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
        c[(h + 20) >> 2] = ((b | 0) == (b | 0)) & ((z | 0) == 0) ? b : 0;
        b = e;
      }
      H = se(0, 1, b | 0, ((((b | 0) < 0) << 31) >> 31) | 0) | 0;
      c[(h + 16) >> 2] = H;
      c[(h + 76) >> 2] = g;
      c[(h + 80) >> 2] = g + (E << 2);
      me(g | 0, 0, D | 0) | 0;
      if (c[31] | 0) c[31] = 0;
      c[I >> 2] = 3;
      switch (c[c[G >> 2] >> 2] | 0) {
        case 10:
        case 5: {
          b = 7;
          break;
        }
        default:
          b = 8;
      }
      c[F >> 2] = b;
      if (!(c[27] | 0)) {
        I = 1;
        return I | 0;
      }
      c[27] = 0;
      I = 1;
      return I | 0;
    }
    function Qb(a) {
      a = a | 0;
      a = ((c[(a + 40) >> 2] | 0) + 40) | 0;
      Bd(c[a >> 2] | 0);
      c[a >> 2] = 0;
      return;
    }
    function Rb(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      i = c[b >> 2] | 0;
      j = c[(b + 4) >> 2] | 0;
      h = (a | 0) != 0;
      if (h) {
        g = (c[(a + 8) >> 2] | 0) > 0;
        c[(b + 72) >> 2] = g & 1;
        if (g) {
          g = c[(a + 20) >> 2] | 0;
          f = c[(a + 24) >> 2] | 0;
          l = c[(a + 12) >> 2] | 0;
          e = c[(a + 16) >> 2] | 0;
          k = d >>> 0 < 11;
          d = k ? l : l & -2;
          e = k ? e : e & -2;
          if ((((e + f) | 0) > (j | 0)) | ((((d + g) | 0) > (i | 0)) | (((f | 0) < 1) | (((g | 0) < 1) | ((e | d | 0) < 0))))) {
            l = 0;
            return l | 0;
          }
        } else {
          f = j;
          g = i;
          e = 0;
          d = 0;
        }
      } else {
        c[(b + 72) >> 2] = 0;
        f = j;
        g = i;
        e = 0;
        d = 0;
      }
      c[(b + 76) >> 2] = d;
      c[(b + 84) >> 2] = e;
      c[(b + 80) >> 2] = g + d;
      c[(b + 88) >> 2] = f + e;
      c[(b + 12) >> 2] = g;
      c[(b + 16) >> 2] = f;
      if (h) {
        l = (c[(a + 28) >> 2] | 0) > 0;
        h = (b + 92) | 0;
        c[h >> 2] = l & 1;
        do
          if (l) {
            e = c[(a + 32) >> 2] | 0;
            d = c[(a + 36) >> 2] | 0;
            if (!e) {
              l = ue(d | 0, ((((d | 0) < 0) << 31) >> 31) | 0, g | 0, ((((g | 0) < 0) << 31) >> 31) | 0) | 0;
              e = ((f | 0) / 2) | 0;
              e = le(l | 0, z | 0, e | 0, ((((e | 0) < 0) << 31) >> 31) | 0) | 0;
              e = se(e | 0, z | 0, f | 0, ((((f | 0) < 0) << 31) >> 31) | 0) | 0;
            }
            if (!d) {
              l = ue(e | 0, ((((e | 0) < 0) << 31) >> 31) | 0, f | 0, ((((f | 0) < 0) << 31) >> 31) | 0) | 0;
              d = ((g | 0) / 2) | 0;
              d = le(l | 0, z | 0, d | 0, ((((d | 0) < 0) << 31) >> 31) | 0) | 0;
              d = se(d | 0, z | 0, g | 0, ((((g | 0) < 0) << 31) >> 31) | 0) | 0;
            }
            if (((e | 0) < 1) | ((d | 0) < 1)) {
              l = 0;
              return l | 0;
            } else {
              c[(b + 96) >> 2] = e;
              c[(b + 100) >> 2] = d;
              break;
            }
          }
        while (0);
        g = (b + 68) | 0;
        c[g >> 2] = ((c[a >> 2] | 0) != 0) & 1;
        e = (c[(a + 4) >> 2] | 0) == 0;
        d = h;
      } else {
        d = (b + 92) | 0;
        c[d >> 2] = 0;
        g = (b + 68) | 0;
        c[g >> 2] = 0;
        e = 1;
      }
      f = (b + 56) | 0;
      c[f >> 2] = e & 1;
      if (!(c[d >> 2] | 0)) {
        l = 1;
        return l | 0;
      }
      if ((c[(b + 96) >> 2] | 0) < ((((i * 3) | 0) / 4) | 0 | 0)) d = (c[(b + 100) >> 2] | 0) < ((((j * 3) | 0) / 4) | 0 | 0);
      else d = 0;
      c[g >> 2] = d & 1;
      c[f >> 2] = 0;
      l = 1;
      return l | 0;
    }
    function Sb(b, d) {
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      y = c[(b + 16) >> 2] | 0;
      z = (y + 1) >> 1;
      if ((y | 0) <= 0) {
        C = 0;
        return C | 0;
      }
      A = (d + 24) | 0;
      B = (b + 20) | 0;
      C = (b + 32) | 0;
      t = (d + 28) | 0;
      u = (d + 16) | 0;
      v = (d + 32) | 0;
      w = (b + 24) | 0;
      x = (b + 36) | 0;
      s = (b + 28) | 0;
      g = 0;
      b = 0;
      r = 0;
      e = c[A >> 2] | 0;
      do {
        f = c[C >> 2] | 0;
        r = ((jc(e, (y - r) | 0, ((c[B >> 2] | 0) + (O(f, r) | 0)) | 0, f) | 0) + r) | 0;
        e = c[t >> 2] | 0;
        f = (z - g) | 0;
        q = c[(e + 32) >> 2] | 0;
        q = ((((c[(e + 24) >> 2] | 0) + -1 + q) | 0) / (q | 0)) | 0;
        if (((q | 0) > (f | 0) ? f : q) | 0) {
          q = c[x >> 2] | 0;
          q = jc(e, f, ((c[w >> 2] | 0) + (O(q, g) | 0)) | 0, q) | 0;
          p = c[x >> 2] | 0;
          jc(c[v >> 2] | 0, f, ((c[s >> 2] | 0) + (O(p, g) | 0)) | 0, p) | 0;
          g = (q + g) | 0;
        }
        f = c[d >> 2] | 0;
        p = c[(11512 + (c[f >> 2] << 2)) >> 2] | 0;
        q = (f + 20) | 0;
        e = c[A >> 2] | 0;
        a: do
          if ((c[(e + 64) >> 2] | 0) < (c[(e + 56) >> 2] | 0)) {
            o = ((c[(f + 16) >> 2] | 0) + (O(c[q >> 2] | 0, ((c[u >> 2] | 0) + b) | 0) | 0)) | 0;
            f = 0;
            while (1) {
              n = (e + 24) | 0;
              if ((c[n >> 2] | 0) >= 1) break a;
              h = c[t >> 2] | 0;
              if ((c[(h + 64) >> 2] | 0) >= (c[(h + 56) >> 2] | 0)) break a;
              if ((c[(h + 24) >> 2] | 0) >= 1) break a;
              do
                if (!(c[(e + 4) >> 2] | 0)) {
                  if (c[(e + 20) >> 2] | 0) {
                    sc(e);
                    break;
                  }
                  i = (e + 8) | 0;
                  j = (e + 52) | 0;
                  if ((O(c[j >> 2] | 0, c[i >> 2] | 0) | 0) > 0) {
                    k = (e + 76) | 0;
                    l = (e + 68) | 0;
                    h = 0;
                    m = c[k >> 2] | 0;
                    do {
                      a[((c[l >> 2] | 0) + h) >> 0] = c[(m + (h << 2)) >> 2];
                      m = c[k >> 2] | 0;
                      c[(m + (h << 2)) >> 2] = 0;
                      h = (h + 1) | 0;
                    } while ((h | 0) < (O(c[j >> 2] | 0, c[i >> 2] | 0) | 0));
                  }
                } else rc(e);
              while (0);
              c[n >> 2] = (c[n >> 2] | 0) + (c[(e + 28) >> 2] | 0);
              h = (e + 68) | 0;
              c[h >> 2] = (c[h >> 2] | 0) + (c[(e + 72) >> 2] | 0);
              h = (e + 64) | 0;
              c[h >> 2] = (c[h >> 2] | 0) + 1;
              h = c[t >> 2] | 0;
              i = (h + 24) | 0;
              if ((c[i >> 2] | 0) < 1) {
                do
                  if (!(c[(h + 4) >> 2] | 0)) {
                    if (c[(h + 20) >> 2] | 0) {
                      sc(h);
                      break;
                    }
                    j = (h + 8) | 0;
                    k = (h + 52) | 0;
                    if ((O(c[k >> 2] | 0, c[j >> 2] | 0) | 0) > 0) {
                      l = (h + 76) | 0;
                      m = (h + 68) | 0;
                      e = 0;
                      n = c[l >> 2] | 0;
                      do {
                        a[((c[m >> 2] | 0) + e) >> 0] = c[(n + (e << 2)) >> 2];
                        n = c[l >> 2] | 0;
                        c[(n + (e << 2)) >> 2] = 0;
                        e = (e + 1) | 0;
                      } while ((e | 0) < (O(c[k >> 2] | 0, c[j >> 2] | 0) | 0));
                    }
                  } else rc(h);
                while (0);
                c[i >> 2] = (c[i >> 2] | 0) + (c[(h + 28) >> 2] | 0);
                n = (h + 68) | 0;
                c[n >> 2] = (c[n >> 2] | 0) + (c[(h + 72) >> 2] | 0);
                n = (h + 64) | 0;
                c[n >> 2] = (c[n >> 2] | 0) + 1;
              }
              e = c[v >> 2] | 0;
              i = (e + 24) | 0;
              if ((c[i >> 2] | 0) < 1) {
                do
                  if (!(c[(e + 4) >> 2] | 0)) {
                    if (c[(e + 20) >> 2] | 0) {
                      sc(e);
                      break;
                    }
                    j = (e + 8) | 0;
                    k = (e + 52) | 0;
                    if ((O(c[k >> 2] | 0, c[j >> 2] | 0) | 0) > 0) {
                      l = (e + 76) | 0;
                      m = (e + 68) | 0;
                      h = 0;
                      n = c[l >> 2] | 0;
                      do {
                        a[((c[m >> 2] | 0) + h) >> 0] = c[(n + (h << 2)) >> 2];
                        n = c[l >> 2] | 0;
                        c[(n + (h << 2)) >> 2] = 0;
                        h = (h + 1) | 0;
                      } while ((h | 0) < (O(c[k >> 2] | 0, c[j >> 2] | 0) | 0));
                    }
                  } else rc(e);
                while (0);
                c[i >> 2] = (c[i >> 2] | 0) + (c[(e + 28) >> 2] | 0);
                n = (e + 68) | 0;
                c[n >> 2] = (c[n >> 2] | 0) + (c[(e + 72) >> 2] | 0);
                e = (e + 64) | 0;
                c[e >> 2] = (c[e >> 2] | 0) + 1;
                e = c[v >> 2] | 0;
              }
              n = c[A >> 2] | 0;
              Qa[p & 31](c[(n + 68) >> 2] | 0, c[((c[t >> 2] | 0) + 68) >> 2] | 0, c[(e + 68) >> 2] | 0, o, c[(n + 52) >> 2] | 0);
              f = (f + 1) | 0;
              e = c[A >> 2] | 0;
              if ((c[(e + 64) >> 2] | 0) < (c[(e + 56) >> 2] | 0)) o = (o + (c[q >> 2] | 0)) | 0;
              else break;
            }
          } else f = 0;
        while (0);
        b = (f + b) | 0;
      } while ((y | 0) > (r | 0));
      return b | 0;
    }
    function Tb(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0;
      k = (a + 104) | 0;
      e = c[k >> 2] | 0;
      if (!e) return 0;
      l = c[(b + 36) >> 2] | 0;
      f = ((c[(b + 16) >> 2] | 0) + d) | 0;
      if ((d | 0) <= 0) return 0;
      g = (l + 60) | 0;
      h = (a + 8) | 0;
      i = (a + 16) | 0;
      j = (b + 52) | 0;
      while (1) {
        o = c[g >> 2] | 0;
        n = c[h >> 2] | 0;
        m = c[a >> 2] | 0;
        jc(l, (n - o + (c[i >> 2] | 0)) | 0, (e + (O(m, (o - n) | 0) | 0)) | 0, m) | 0;
        d = (d - (Pa[c[j >> 2] & 15](b, (f - d) | 0, d) | 0)) | 0;
        if ((d | 0) <= 0) break;
        e = c[k >> 2] | 0;
      }
      return 0;
    }
    function Ub(b, e, f) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0;
      t = c[b >> 2] | 0;
      r = (t + 20) | 0;
      i = c[r >> 2] | 0;
      g = ((c[(t + 16) >> 2] | 0) + (O(i, e) | 0)) | 0;
      t = c[t >> 2] | 0;
      s = ((t | 0) == 4) | ((t | 0) == 9);
      t = ((t + -7) | 0) >>> 0 < 4;
      q = (b + 36) | 0;
      h = c[q >> 2] | 0;
      v = c[(h + 52) >> 2] | 0;
      if ((c[(h + 64) >> 2] | 0) >= (c[(h + 56) >> 2] | 0)) {
        w = 0;
        return w | 0;
      }
      w = s ? 0 : 3;
      u = (v | 0) > 0;
      b = 0;
      e = 0;
      p = (g + w) | 0;
      n = i;
      while (1) {
        o = (h + 24) | 0;
        if (!(((e | 0) < (f | 0)) & ((c[o >> 2] | 0) < 1))) break;
        do
          if (!(c[(h + 4) >> 2] | 0)) {
            if (c[(h + 20) >> 2] | 0) {
              sc(h);
              break;
            }
            j = (h + 8) | 0;
            k = (h + 52) | 0;
            if ((O(c[k >> 2] | 0, c[j >> 2] | 0) | 0) > 0) {
              l = (h + 76) | 0;
              m = (h + 68) | 0;
              i = 0;
              n = c[l >> 2] | 0;
              do {
                a[((c[m >> 2] | 0) + i) >> 0] = c[(n + (i << 2)) >> 2];
                n = c[l >> 2] | 0;
                c[(n + (i << 2)) >> 2] = 0;
                i = (i + 1) | 0;
              } while ((i | 0) < (O(c[k >> 2] | 0, c[j >> 2] | 0) | 0));
            }
          } else rc(h);
        while (0);
        c[o >> 2] = (c[o >> 2] | 0) + (c[(h + 28) >> 2] | 0);
        i = (h + 68) | 0;
        c[i >> 2] = (c[i >> 2] | 0) + (c[(h + 72) >> 2] | 0);
        i = (h + 64) | 0;
        c[i >> 2] = (c[i >> 2] | 0) + 1;
        i = c[q >> 2] | 0;
        j = c[(i + 68) >> 2] | 0;
        if (u) {
          h = 0;
          i = 255;
          do {
            o = a[(j + h) >> 0] | 0;
            a[(p + (h << 2)) >> 0] = o;
            i = o & 255 & i;
            h = (h + 1) | 0;
          } while ((h | 0) != (v | 0));
          h = (i | 0) != 255;
          i = c[q >> 2] | 0;
        } else h = 0;
        b = (h & 1) | b;
        n = c[r >> 2] | 0;
        e = (e + 1) | 0;
        if ((c[(i + 64) >> 2] | 0) < (c[(i + 56) >> 2] | 0)) {
          p = (p + n) | 0;
          h = i;
        } else break;
      }
      if (!(t & ((b | 0) != 0) & ((e | 0) > 0))) {
        w = e;
        return w | 0;
      }
      m = s & 1;
      if (u) h = e;
      else {
        w = e;
        return w | 0;
      }
      while (1) {
        i = (g + m) | 0;
        j = (g + w) | 0;
        b = 0;
        do {
          k = b << 2;
          l = a[(j + k) >> 0] | 0;
          if ((l << 24) >> 24 != -1) {
            t = ((l & 255) * 32897) | 0;
            u = (i + k) | 0;
            a[u >> 0] = (O(d[u >> 0] | 0, t) | 0) >>> 23;
            u = (i + (k | 1)) | 0;
            a[u >> 0] = (O(d[u >> 0] | 0, t) | 0) >>> 23;
            u = (i + (k | 2)) | 0;
            a[u >> 0] = (O(d[u >> 0] | 0, t) | 0) >>> 23;
          }
          b = (b + 1) | 0;
        } while ((b | 0) != (v | 0));
        if ((h | 0) > 1) {
          g = (g + n) | 0;
          h = (h + -1) | 0;
        } else break;
      }
      return e | 0;
    }
    function Vb(b, e, f) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0;
      r = c[b >> 2] | 0;
      q = (r + 20) | 0;
      i = c[q >> 2] | 0;
      g = ((c[(r + 16) >> 2] | 0) + (O(i, e) | 0)) | 0;
      t = (b + 36) | 0;
      m = c[t >> 2] | 0;
      s = c[(m + 52) >> 2] | 0;
      r = (((c[r >> 2] | 0) + -7) | 0) >>> 0 < 4;
      if ((c[(m + 64) >> 2] | 0) >= (c[(m + 56) >> 2] | 0)) {
        f = 0;
        return f | 0;
      }
      if ((s | 0) <= 0) {
        e = 0;
        while (1) {
          j = (m + 24) | 0;
          if (!(((e | 0) < (f | 0)) & ((c[j >> 2] | 0) < 1))) {
            b = 28;
            break;
          }
          do
            if (!(c[(m + 4) >> 2] | 0)) {
              if (c[(m + 20) >> 2] | 0) {
                sc(m);
                break;
              }
              k = (m + 8) | 0;
              l = (m + 52) | 0;
              if ((O(c[l >> 2] | 0, c[k >> 2] | 0) | 0) > 0) {
                b = (m + 76) | 0;
                h = (m + 68) | 0;
                g = 0;
                i = c[b >> 2] | 0;
                do {
                  a[((c[h >> 2] | 0) + g) >> 0] = c[(i + (g << 2)) >> 2];
                  i = c[b >> 2] | 0;
                  c[(i + (g << 2)) >> 2] = 0;
                  g = (g + 1) | 0;
                } while ((g | 0) < (O(c[l >> 2] | 0, c[k >> 2] | 0) | 0));
              }
            } else rc(m);
          while (0);
          c[j >> 2] = (c[j >> 2] | 0) + (c[(m + 28) >> 2] | 0);
          s = (m + 68) | 0;
          c[s >> 2] = (c[s >> 2] | 0) + (c[(m + 72) >> 2] | 0);
          s = (m + 64) | 0;
          c[s >> 2] = (c[s >> 2] | 0) + 1;
          e = (e + 1) | 0;
          m = c[t >> 2] | 0;
          if ((c[(m + 64) >> 2] | 0) >= (c[(m + 56) >> 2] | 0)) {
            b = 28;
            break;
          }
        }
        if ((b | 0) == 28) return e | 0;
      }
      b = 15;
      e = 0;
      p = (g + 1) | 0;
      while (1) {
        o = (m + 24) | 0;
        if (!(((e | 0) < (f | 0)) & ((c[o >> 2] | 0) < 1))) break;
        do
          if (!(c[(m + 4) >> 2] | 0)) {
            if (c[(m + 20) >> 2] | 0) {
              sc(m);
              break;
            }
            i = (m + 8) | 0;
            j = (m + 52) | 0;
            if ((O(c[j >> 2] | 0, c[i >> 2] | 0) | 0) > 0) {
              k = (m + 76) | 0;
              l = (m + 68) | 0;
              h = 0;
              n = c[k >> 2] | 0;
              do {
                a[((c[l >> 2] | 0) + h) >> 0] = c[(n + (h << 2)) >> 2];
                n = c[k >> 2] | 0;
                c[(n + (h << 2)) >> 2] = 0;
                h = (h + 1) | 0;
              } while ((h | 0) < (O(c[j >> 2] | 0, c[i >> 2] | 0) | 0));
            }
          } else rc(m);
        while (0);
        c[o >> 2] = (c[o >> 2] | 0) + (c[(m + 28) >> 2] | 0);
        h = (m + 68) | 0;
        c[h >> 2] = (c[h >> 2] | 0) + (c[(m + 72) >> 2] | 0);
        h = (m + 64) | 0;
        c[h >> 2] = (c[h >> 2] | 0) + 1;
        h = 0;
        do {
          o = (d[((c[((c[t >> 2] | 0) + 68) >> 2] | 0) + h) >> 0] | 0) >>> 4;
          n = (p + (h << 1)) | 0;
          a[n >> 0] = (a[n >> 0] & -16 & 255) | o;
          b = o & b;
          h = (h + 1) | 0;
        } while ((h | 0) != (s | 0));
        i = c[q >> 2] | 0;
        e = (e + 1) | 0;
        m = c[t >> 2] | 0;
        if ((c[(m + 64) >> 2] | 0) >= (c[(m + 56) >> 2] | 0)) break;
        else p = (p + i) | 0;
      }
      if (r & ((b | 0) != 15) & ((e | 0) > 0)) h = e;
      else {
        f = e;
        return f | 0;
      }
      while (1) {
        b = 0;
        do {
          f = b << 1;
          q = (g + f) | 0;
          f = (g + (f | 1)) | 0;
          r = a[f >> 0] | 0;
          t = r & 15;
          p = ((t & 255) * 4369) | 0;
          o = d[q >> 0] | 0;
          r = r & 255;
          r = ((O((r & 240) | (r >>> 4), p) | 0) >>> 16) & 255;
          a[q >> 0] = (((O(p, (o & 240) | (o >>> 4)) | 0) >>> 16) & 240) | (((O(((o << 4) & 240) | (o & 15), p) | 0) >>> 20) & 15);
          a[f >> 0] = (r & -16) | t;
          b = (b + 1) | 0;
        } while ((b | 0) != (s | 0));
        if ((h | 0) > 1) {
          g = (g + i) | 0;
          h = (h + -1) | 0;
        } else break;
      }
      return e | 0;
    }
    function Wb(b, e) {
      b = b | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0;
      x = c[(b + 16) >> 2] | 0;
      z = (x + 1) >> 1;
      y = c[(e + 24) >> 2] | 0;
      f = c[c[e >> 2] >> 2] | 0;
      g = (f + -1) | 0;
      f = ((f + -7) | 0) >>> 0 < 4;
      if (g >>> 0 < 12)
        if (f | (((2077 >>> (g & 65535)) & 1) != 0)) f = 4;
        else f = 13;
      else if (f) f = 4;
      else f = 13;
      if ((f | 0) == 4) {
        g = c[(b + 104) >> 2] | 0;
        if (g) {
          l = c[(b + 32) >> 2] | 0;
          m = c[b >> 2] | 0;
          n = c[(b + 12) >> 2] | 0;
          if ((x | 0) > 0) {
            k = (n | 0) > 0;
            j = c[(b + 20) >> 2] | 0;
            f = 0;
            while (1) {
              a: do
                if (k) {
                  h = 0;
                  while (1) {
                    i = a[(g + h) >> 0] | 0;
                    switch ((i << 24) >> 24) {
                      case -1:
                        break;
                      case 0: {
                        a[(j + h) >> 0] = 0;
                        break;
                      }
                      default: {
                        w = (j + h) | 0;
                        a[w >> 0] = (((O(((i & 255) * 65793) | 0, d[w >> 0] | 0) | 0) + 8388608) | 0) >>> 24;
                      }
                    }
                    h = (h + 1) | 0;
                    if ((h | 0) == (n | 0)) break a;
                  }
                }
              while (0);
              f = (f + 1) | 0;
              if ((f | 0) == (x | 0)) {
                f = 13;
                break;
              } else {
                j = (j + l) | 0;
                g = (g + m) | 0;
              }
            }
          } else x = 0;
        } else f = 13;
      }
      if ((f | 0) == 13) {
        n = c[(b + 32) >> 2] | 0;
        if ((x | 0) > 0) {
          o = (y + 24) | 0;
          l = (y + 56) | 0;
          m = (y + 64) | 0;
          p = (y + 4) | 0;
          q = (y + 20) | 0;
          r = (y + 8) | 0;
          s = (y + 52) | 0;
          t = (y + 76) | 0;
          u = (y + 68) | 0;
          v = (y + 28) | 0;
          w = (y + 72) | 0;
          f = 0;
          j = x;
          k = c[(b + 20) >> 2] | 0;
          while (1) {
            x = jc(y, j, k, n) | 0;
            k = (k + (O(x, n) | 0)) | 0;
            j = (j - x) | 0;
            b: do
              if ((c[m >> 2] | 0) < (c[l >> 2] | 0)) {
                g = 0;
                h = c[o >> 2] | 0;
                do {
                  if ((h | 0) >= 1) break b;
                  do
                    if (!(c[p >> 2] | 0)) {
                      if (c[q >> 2] | 0) {
                        sc(y);
                        break;
                      }
                      if ((O(c[s >> 2] | 0, c[r >> 2] | 0) | 0) > 0) {
                        h = 0;
                        i = c[t >> 2] | 0;
                        do {
                          a[((c[u >> 2] | 0) + h) >> 0] = c[(i + (h << 2)) >> 2];
                          i = c[t >> 2] | 0;
                          c[(i + (h << 2)) >> 2] = 0;
                          h = (h + 1) | 0;
                        } while ((h | 0) < (O(c[s >> 2] | 0, c[r >> 2] | 0) | 0));
                      }
                    } else rc(y);
                  while (0);
                  h = ((c[o >> 2] | 0) + (c[v >> 2] | 0)) | 0;
                  c[o >> 2] = h;
                  c[u >> 2] = (c[u >> 2] | 0) + (c[w >> 2] | 0);
                  x = ((c[m >> 2] | 0) + 1) | 0;
                  c[m >> 2] = x;
                  g = (g + 1) | 0;
                } while ((x | 0) < (c[l >> 2] | 0));
              } else g = 0;
            while (0);
            f = (g + f) | 0;
            if ((j | 0) <= 0) {
              x = f;
              break;
            }
          }
        } else x = 0;
      }
      u = (b + 36) | 0;
      v = c[u >> 2] | 0;
      w = c[(e + 28) >> 2] | 0;
      if ((z | 0) <= 0) return x | 0;
      l = (w + 24) | 0;
      j = (w + 56) | 0;
      k = (w + 64) | 0;
      m = (w + 4) | 0;
      n = (w + 20) | 0;
      o = (w + 8) | 0;
      p = (w + 52) | 0;
      q = (w + 76) | 0;
      r = (w + 68) | 0;
      s = (w + 28) | 0;
      t = (w + 72) | 0;
      h = z;
      i = c[(b + 24) >> 2] | 0;
      do {
        y = jc(w, h, i, v) | 0;
        i = (i + (O(y, v) | 0)) | 0;
        h = (h - y) | 0;
        c: do
          if ((c[k >> 2] | 0) < (c[j >> 2] | 0)) {
            f = c[l >> 2] | 0;
            do {
              if ((f | 0) >= 1) break c;
              do
                if (!(c[m >> 2] | 0)) {
                  if (c[n >> 2] | 0) {
                    sc(w);
                    break;
                  }
                  if ((O(c[p >> 2] | 0, c[o >> 2] | 0) | 0) > 0) {
                    f = 0;
                    g = c[q >> 2] | 0;
                    do {
                      a[((c[r >> 2] | 0) + f) >> 0] = c[(g + (f << 2)) >> 2];
                      g = c[q >> 2] | 0;
                      c[(g + (f << 2)) >> 2] = 0;
                      f = (f + 1) | 0;
                    } while ((f | 0) < (O(c[p >> 2] | 0, c[o >> 2] | 0) | 0));
                  }
                } else rc(w);
              while (0);
              f = ((c[l >> 2] | 0) + (c[s >> 2] | 0)) | 0;
              c[l >> 2] = f;
              c[r >> 2] = (c[r >> 2] | 0) + (c[t >> 2] | 0);
              y = ((c[k >> 2] | 0) + 1) | 0;
              c[k >> 2] = y;
            } while ((y | 0) < (c[j >> 2] | 0));
          }
        while (0);
      } while ((h | 0) > 0);
      v = c[u >> 2] | 0;
      l = c[(e + 32) >> 2] | 0;
      m = (l + 24) | 0;
      j = (l + 56) | 0;
      k = (l + 64) | 0;
      n = (l + 4) | 0;
      o = (l + 20) | 0;
      p = (l + 8) | 0;
      q = (l + 52) | 0;
      r = (l + 76) | 0;
      s = (l + 68) | 0;
      t = (l + 28) | 0;
      u = (l + 72) | 0;
      i = z;
      h = c[(b + 28) >> 2] | 0;
      do {
        b = jc(l, i, h, v) | 0;
        h = (h + (O(b, v) | 0)) | 0;
        i = (i - b) | 0;
        d: do
          if ((c[k >> 2] | 0) < (c[j >> 2] | 0)) {
            f = c[m >> 2] | 0;
            do {
              if ((f | 0) >= 1) break d;
              do
                if (!(c[n >> 2] | 0)) {
                  if (c[o >> 2] | 0) {
                    sc(l);
                    break;
                  }
                  if ((O(c[q >> 2] | 0, c[p >> 2] | 0) | 0) > 0) {
                    f = 0;
                    g = c[r >> 2] | 0;
                    do {
                      a[((c[s >> 2] | 0) + f) >> 0] = c[(g + (f << 2)) >> 2];
                      g = c[r >> 2] | 0;
                      c[(g + (f << 2)) >> 2] = 0;
                      f = (f + 1) | 0;
                    } while ((f | 0) < (O(c[q >> 2] | 0, c[p >> 2] | 0) | 0));
                  }
                } else rc(l);
              while (0);
              f = ((c[m >> 2] | 0) + (c[t >> 2] | 0)) | 0;
              c[m >> 2] = f;
              c[s >> 2] = (c[s >> 2] | 0) + (c[u >> 2] | 0);
              b = ((c[k >> 2] | 0) + 1) | 0;
              c[k >> 2] = b;
            } while ((b | 0) < (c[j >> 2] | 0));
          }
        while (0);
      } while ((i | 0) > 0);
      return x | 0;
    }
    function Xb(b, e, f) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0;
      i = c[e >> 2] | 0;
      h = c[(i + 28) >> 2] | 0;
      B = c[(e + 16) >> 2] | 0;
      C = (i + 44) | 0;
      j = c[C >> 2] | 0;
      g = (h + (O(j, B) | 0)) | 0;
      k = c[(b + 104) >> 2] | 0;
      if (!k) {
        if (!h) return 0;
        i = c[(b + 96) >> 2] | 0;
        if ((f | 0) > 0) h = 0;
        else return 0;
        while (1) {
          me(g | 0, -1, i | 0) | 0;
          h = (h + 1) | 0;
          if ((h | 0) == (f | 0)) break;
          else g = (g + j) | 0;
        }
        return 0;
      }
      A = c[(i + 16) >> 2] | 0;
      w = (i + 32) | 0;
      x = c[w >> 2] | 0;
      y = c[b >> 2] | 0;
      h = c[(b + 16) >> 2] | 0;
      z = (e + 36) | 0;
      m = c[z >> 2] | 0;
      if ((h | 0) <= 0) return 0;
      n = (m + 24) | 0;
      e = (m + 56) | 0;
      l = (m + 64) | 0;
      o = (m + 4) | 0;
      p = (m + 20) | 0;
      q = (m + 8) | 0;
      r = (m + 52) | 0;
      s = (m + 76) | 0;
      t = (m + 68) | 0;
      u = (m + 28) | 0;
      v = (m + 72) | 0;
      D = 0;
      b = h;
      j = k;
      do {
        k = jc(m, b, j, y) | 0;
        j = (j + (O(k, y) | 0)) | 0;
        b = (b - k) | 0;
        a: do
          if ((c[l >> 2] | 0) < (c[e >> 2] | 0)) {
            h = 0;
            i = c[n >> 2] | 0;
            do {
              if ((i | 0) >= 1) break a;
              do
                if (!(c[o >> 2] | 0)) {
                  if (c[p >> 2] | 0) {
                    sc(m);
                    break;
                  }
                  if ((O(c[r >> 2] | 0, c[q >> 2] | 0) | 0) > 0) {
                    i = 0;
                    f = c[s >> 2] | 0;
                    do {
                      a[((c[t >> 2] | 0) + i) >> 0] = c[(f + (i << 2)) >> 2];
                      f = c[s >> 2] | 0;
                      c[(f + (i << 2)) >> 2] = 0;
                      i = (i + 1) | 0;
                    } while ((i | 0) < (O(c[r >> 2] | 0, c[q >> 2] | 0) | 0));
                  }
                } else rc(m);
              while (0);
              i = ((c[n >> 2] | 0) + (c[u >> 2] | 0)) | 0;
              c[n >> 2] = i;
              c[t >> 2] = (c[t >> 2] | 0) + (c[v >> 2] | 0);
              k = ((c[l >> 2] | 0) + 1) | 0;
              c[l >> 2] = k;
              h = (h + 1) | 0;
            } while ((k | 0) < (c[e >> 2] | 0));
          } else h = 0;
        while (0);
        D = (h + D) | 0;
      } while ((b | 0) > 0);
      if ((D | 0) <= 0) return 0;
      j = (A + (O(x, B) | 0)) | 0;
      l = c[w >> 2] | 0;
      k = c[C >> 2] | 0;
      b = c[((c[z >> 2] | 0) + 52) >> 2] | 0;
      e = (b | 0) > 0;
      h = 0;
      while (1) {
        b: do
          if (e) {
            i = 0;
            while (1) {
              f = a[(g + i) >> 0] | 0;
              switch ((f << 24) >> 24) {
                case -1:
                  break;
                case 0: {
                  a[(j + i) >> 0] = 0;
                  break;
                }
                default: {
                  C = (j + i) | 0;
                  a[C >> 0] = (((O(d[C >> 0] | 0, (4278190080 / ((f & 255) >>> 0)) | 0) | 0) + 8388608) | 0) >>> 24;
                }
              }
              i = (i + 1) | 0;
              if ((i | 0) == (b | 0)) break b;
            }
          }
        while (0);
        h = (h + 1) | 0;
        if ((h | 0) == (D | 0)) break;
        else {
          j = (j + l) | 0;
          g = (g + k) | 0;
        }
      }
      return 0;
    }
    function Yb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0;
      b = c[b >> 2] | 0;
      l = c[(b + 20) >> 2] | 0;
      m = c[(a + 32) >> 2] | 0;
      n = c[(a + 36) >> 2] | 0;
      h = c[(a + 12) >> 2] | 0;
      i = (a + 16) | 0;
      j = c[i >> 2] | 0;
      k = c[(11564 + (c[b >> 2] << 2)) >> 2] | 0;
      if ((j | 0) <= 0) {
        n = j;
        return n | 0;
      }
      e = c[(a + 20) >> 2] | 0;
      f = c[(a + 24) >> 2] | 0;
      g = c[(a + 28) >> 2] | 0;
      b = ((c[(b + 16) >> 2] | 0) + (O(l, c[(a + 8) >> 2] | 0) | 0)) | 0;
      a = 0;
      while (1) {
        Qa[k & 31](e, f, g, b, h);
        d = ((a & 1) | 0) == 0;
        a = (a + 1) | 0;
        if ((a | 0) == (j | 0)) break;
        else {
          e = (e + m) | 0;
          f = d ? f : (f + n) | 0;
          g = d ? g : (g + n) | 0;
          b = (b + l) | 0;
        }
      }
      n = c[i >> 2] | 0;
      return n | 0;
    }
    function Zb(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0;
      e = c[(a + 16) >> 2] | 0;
      o = c[b >> 2] | 0;
      f = c[(a + 8) >> 2] | 0;
      u = (o + 20) | 0;
      d = c[u >> 2] | 0;
      i = ((c[(o + 16) >> 2] | 0) + (O(d, f) | 0)) | 0;
      o = c[(11460 + (c[o >> 2] << 2)) >> 2] | 0;
      h = c[(a + 20) >> 2] | 0;
      k = c[(a + 24) >> 2] | 0;
      g = c[(a + 28) >> 2] | 0;
      p = (b + 8) | 0;
      q = (b + 12) | 0;
      r = (f + e) | 0;
      s = c[(a + 12) >> 2] | 0;
      t = (((s + 1) | 0) / 2) | 0;
      if (!f) {
        Va[o & 7](h, 0, k, g, k, g, i, 0, s);
        f = 2;
      } else {
        Va[o & 7](c[(b + 4) >> 2] | 0, h, c[p >> 2] | 0, c[q >> 2] | 0, k, g, (i + (0 - d)) | 0, i, s);
        e = (e + 1) | 0;
        f = (f + 2) | 0;
      }
      m = (a + 32) | 0;
      d = c[m >> 2] | 0;
      if ((f | 0) < (r | 0)) {
        n = (a + 36) | 0;
        j = f;
        while (1) {
          l = c[n >> 2] | 0;
          f = (k + l) | 0;
          l = (g + l) | 0;
          v = c[u >> 2] | 0;
          i = (i + (v << 1)) | 0;
          h = (h + (d << 1)) | 0;
          Va[o & 7]((h + (0 - d)) | 0, h, k, g, f, l, (i + (0 - v)) | 0, i, s);
          j = (j + 2) | 0;
          d = c[m >> 2] | 0;
          if ((j | 0) >= (r | 0)) {
            g = l;
            break;
          } else {
            g = l;
            k = f;
          }
        }
      } else f = k;
      d = (h + d) | 0;
      if ((((c[(a + 84) >> 2] | 0) + r) | 0) < (c[(a + 88) >> 2] | 0)) {
        pe(c[(b + 4) >> 2] | 0, d | 0, s | 0) | 0;
        pe(c[p >> 2] | 0, f | 0, t | 0) | 0;
        pe(c[q >> 2] | 0, g | 0, t | 0) | 0;
        v = (e + -1) | 0;
        return v | 0;
      }
      if ((r & 1) | 0) {
        v = e;
        return v | 0;
      }
      Va[o & 7](d, 0, f, g, f, g, (i + (c[u >> 2] | 0)) | 0, 0, s);
      v = e;
      return v | 0;
    }
    function _b(a, b) {
      a = a | 0;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0;
      d = c[b >> 2] | 0;
      m = c[(a + 8) >> 2] | 0;
      i = (d + 32) | 0;
      b = ((c[(d + 16) >> 2] | 0) + (O(c[i >> 2] | 0, m) | 0)) | 0;
      m = m >> 1;
      j = (d + 36) | 0;
      k = ((c[(d + 20) >> 2] | 0) + (O(c[j >> 2] | 0, m) | 0)) | 0;
      l = (d + 40) | 0;
      m = ((c[(d + 24) >> 2] | 0) + (O(c[l >> 2] | 0, m) | 0)) | 0;
      d = c[(a + 12) >> 2] | 0;
      n = (a + 16) | 0;
      e = c[n >> 2] | 0;
      o = (((d + 1) | 0) / 2) | 0;
      p = (((e + 1) | 0) / 2) | 0;
      if ((e | 0) <= 0) {
        p = e;
        return p | 0;
      }
      f = (a + 20) | 0;
      g = (a + 32) | 0;
      pe(b | 0, c[f >> 2] | 0, d | 0) | 0;
      if ((e | 0) != 1) {
        h = 1;
        do {
          q = (b + (O(c[i >> 2] | 0, h) | 0)) | 0;
          pe(q | 0, ((c[f >> 2] | 0) + (O(c[g >> 2] | 0, h) | 0)) | 0, d | 0) | 0;
          h = (h + 1) | 0;
        } while ((h | 0) != (e | 0));
      }
      e = (a + 24) | 0;
      f = (a + 36) | 0;
      d = (a + 28) | 0;
      b = 0;
      do {
        q = (k + (O(c[j >> 2] | 0, b) | 0)) | 0;
        pe(q | 0, ((c[e >> 2] | 0) + (O(c[f >> 2] | 0, b) | 0)) | 0, o | 0) | 0;
        q = (m + (O(c[l >> 2] | 0, b) | 0)) | 0;
        pe(q | 0, ((c[d >> 2] | 0) + (O(c[f >> 2] | 0, b) | 0)) | 0, o | 0) | 0;
        b = (b + 1) | 0;
      } while ((b | 0) < (p | 0));
      q = c[n >> 2] | 0;
      return q | 0;
    }
    function $b(b, e, f) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0;
      h = c[(b + 104) >> 2] | 0;
      if (!h) return 0;
      q = c[(b + 12) >> 2] | 0;
      j = c[e >> 2] | 0;
      o = c[j >> 2] | 0;
      p = ((o | 0) == 4) | ((o | 0) == 9);
      i = c[(b + 8) >> 2] | 0;
      e = c[(b + 16) >> 2] | 0;
      if (!(c[(b + 56) >> 2] | 0)) g = i;
      else {
        if (!i) {
          f = (e + -1) | 0;
          g = 0;
        } else {
          f = e;
          g = (i + -1) | 0;
          h = (h + (0 - (c[b >> 2] | 0))) | 0;
        }
        n = c[(b + 84) >> 2] | 0;
        e = (e + i + n) | 0;
        e = (e | 0) == (c[(b + 88) >> 2] | 0) ? (e - (n + g)) | 0 : f;
      }
      l = (j + 20) | 0;
      m = c[l >> 2] | 0;
      k = ((c[(j + 16) >> 2] | 0) + (O(m, g) | 0)) | 0;
      b = c[b >> 2] | 0;
      if (!(((q | 0) > 0) & ((e | 0) > 0))) return 0;
      n = p ? 0 : 3;
      i = 0;
      f = 255;
      j = (k + n) | 0;
      while (1) {
        g = 0;
        do {
          r = a[(h + g) >> 0] | 0;
          a[(j + (g << 2)) >> 0] = r;
          f = r & 255 & f;
          g = (g + 1) | 0;
        } while ((g | 0) != (q | 0));
        i = (i + 1) | 0;
        if ((i | 0) == (e | 0)) break;
        else {
          j = (j + m) | 0;
          h = (h + b) | 0;
        }
      }
      if (!((((o + -7) | 0) >>> 0 < 4) & ((f | 0) != 255))) return 0;
      l = c[l >> 2] | 0;
      b = p & 1;
      while (1) {
        g = (k + b) | 0;
        h = (k + n) | 0;
        f = 0;
        do {
          i = f << 2;
          j = a[(h + i) >> 0] | 0;
          if ((j << 24) >> 24 != -1) {
            p = ((j & 255) * 32897) | 0;
            r = (g + i) | 0;
            a[r >> 0] = (O(d[r >> 0] | 0, p) | 0) >>> 23;
            r = (g + (i | 1)) | 0;
            a[r >> 0] = (O(d[r >> 0] | 0, p) | 0) >>> 23;
            r = (g + (i | 2)) | 0;
            a[r >> 0] = (O(d[r >> 0] | 0, p) | 0) >>> 23;
          }
          f = (f + 1) | 0;
        } while ((f | 0) != (q | 0));
        if ((e | 0) > 1) {
          k = (k + l) | 0;
          e = (e + -1) | 0;
        } else break;
      }
      return 0;
    }
    function ac(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      g = c[(a + 104) >> 2] | 0;
      h = c[b >> 2] | 0;
      i = c[(a + 12) >> 2] | 0;
      j = c[(a + 16) >> 2] | 0;
      b = c[(h + 28) >> 2] | 0;
      h = (h + 44) | 0;
      f = c[h >> 2] | 0;
      d = (b + (O(f, c[(a + 8) >> 2] | 0) | 0)) | 0;
      e = (j | 0) > 0;
      if (!g) {
        if (e & ((b | 0) != 0)) b = 0;
        else return 0;
        while (1) {
          me(d | 0, -1, i | 0) | 0;
          b = (b + 1) | 0;
          if ((b | 0) == (j | 0)) break;
          else d = (d + f) | 0;
        }
        return 0;
      }
      if (!e) return 0;
      b = g;
      e = 0;
      while (1) {
        pe(d | 0, b | 0, i | 0) | 0;
        e = (e + 1) | 0;
        if ((e | 0) == (j | 0)) break;
        else {
          d = (d + (c[h >> 2] | 0)) | 0;
          b = (b + (c[a >> 2] | 0)) | 0;
        }
      }
      return 0;
    }
    function bc(b, e, f) {
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      i = c[(b + 104) >> 2] | 0;
      if (!i) return 0;
      o = c[(b + 12) >> 2] | 0;
      j = c[e >> 2] | 0;
      n = c[j >> 2] | 0;
      f = c[(b + 8) >> 2] | 0;
      e = c[(b + 16) >> 2] | 0;
      if (c[(b + 56) >> 2] | 0) {
        if (!f) {
          g = 0;
          h = (e + -1) | 0;
        } else {
          g = (f + -1) | 0;
          h = e;
          i = (i + (0 - (c[b >> 2] | 0))) | 0;
        }
        m = c[(b + 84) >> 2] | 0;
        e = (e + f + m) | 0;
        f = g;
        e = (e | 0) == (c[(b + 88) >> 2] | 0) ? (e - (m + g)) | 0 : h;
      }
      m = (j + 20) | 0;
      g = ((c[(j + 16) >> 2] | 0) + (O(c[m >> 2] | 0, f) | 0)) | 0;
      if ((e | 0) <= 0) return 0;
      if ((o | 0) <= 0) return 0;
      j = 0;
      h = 15;
      k = (g + 1) | 0;
      while (1) {
        f = 0;
        do {
          l = (d[(i + f) >> 0] | 0) >>> 4;
          p = (k + (f << 1)) | 0;
          a[p >> 0] = (a[p >> 0] & -16 & 255) | l;
          h = l & h;
          f = (f + 1) | 0;
        } while ((f | 0) != (o | 0));
        l = c[m >> 2] | 0;
        j = (j + 1) | 0;
        if ((j | 0) == (e | 0)) break;
        else {
          k = (k + l) | 0;
          i = (i + (c[b >> 2] | 0)) | 0;
        }
      }
      if (!((((n + -7) | 0) >>> 0 < 4) & ((h | 0) != 15))) return 0;
      while (1) {
        f = 0;
        do {
          p = f << 1;
          m = (g + p) | 0;
          p = (g + (p | 1)) | 0;
          n = a[p >> 0] | 0;
          b = n & 15;
          k = ((b & 255) * 4369) | 0;
          j = d[m >> 0] | 0;
          n = n & 255;
          n = ((O((n & 240) | (n >>> 4), k) | 0) >>> 16) & 255;
          a[m >> 0] = (((O(k, (j & 240) | (j >>> 4)) | 0) >>> 16) & 240) | (((O(((j << 4) & 240) | (j & 15), k) | 0) >>> 20) & 15);
          a[p >> 0] = (n & -16) | b;
          f = (f + 1) | 0;
        } while ((f | 0) != (o | 0));
        if ((e | 0) > 1) {
          g = (g + l) | 0;
          e = (e + -1) | 0;
        } else break;
      }
      return 0;
    }
    function cc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      i = g & -2;
      h = (f + ((i * 3) | 0)) | 0;
      if (i) {
        do {
          i = d[c >> 0] | 0;
          j = d[e >> 0] | 0;
          k = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
          l = (k + -14234 + (((j * 26149) | 0) >>> 8)) | 0;
          a[f >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
          j = (k + 8708 - (((i * 6419) | 0) >>> 8) - (((j * 13320) | 0) >>> 8)) | 0;
          a[(f + 1) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
          i = (k + -17685 + (((i * 33050) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
          i = d[c >> 0] | 0;
          k = d[e >> 0] | 0;
          j = (((d[(b + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          l = (j + -14234 + (((k * 26149) | 0) >>> 8)) | 0;
          a[(f + 3) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
          k = (j + 8708 - (((i * 6419) | 0) >>> 8) - (((k * 13320) | 0) >>> 8)) | 0;
          a[(f + 4) >> 0] = k >>> 0 < 16384 ? k >>> 6 : ((k >>> 31) + 255) | 0;
          i = (j + -17685 + (((i * 33050) | 0) >>> 8)) | 0;
          a[(f + 5) >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
          b = (b + 2) | 0;
          c = (c + 1) | 0;
          e = (e + 1) | 0;
          f = (f + 6) | 0;
        } while ((f | 0) != (h | 0));
        f = h;
      }
      if (!(g & 1)) return;
      l = d[c >> 0] | 0;
      j = d[e >> 0] | 0;
      k = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      i = (k + -14234 + (((j * 26149) | 0) >>> 8)) | 0;
      a[f >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
      j = (k + 8708 - (((l * 6419) | 0) >>> 8) - (((j * 13320) | 0) >>> 8)) | 0;
      a[(f + 1) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
      l = (k + -17685 + (((l * 33050) | 0) >>> 8)) | 0;
      a[(f + 2) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
      return;
    }
    function dc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0;
      h = (g << 2) & -8;
      m = (f + h) | 0;
      if (!h) h = c;
      else {
        l = (h + -8) | 0;
        k = l >>> 2;
        j = c;
        h = e;
        i = b;
        while (1) {
          n = d[j >> 0] | 0;
          o = d[h >> 0] | 0;
          p = (((d[i >> 0] | 0) * 19077) | 0) >>> 8;
          q = (p + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
          a[f >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          o = (p + 8708 - (((n * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
          a[(f + 1) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
          n = (p + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
          a[(f + 3) >> 0] = -1;
          n = d[j >> 0] | 0;
          p = d[h >> 0] | 0;
          o = (((d[(i + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          q = (o + -14234 + (((p * 26149) | 0) >>> 8)) | 0;
          a[(f + 4) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          p = (o + 8708 - (((n * 6419) | 0) >>> 8) - (((p * 13320) | 0) >>> 8)) | 0;
          a[(f + 5) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
          n = (o + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[(f + 6) >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
          a[(f + 7) >> 0] = -1;
          f = (f + 8) | 0;
          if ((f | 0) == (m | 0)) break;
          else {
            j = (j + 1) | 0;
            h = (h + 1) | 0;
            i = (i + 2) | 0;
          }
        }
        q = ((l >>> 3) + 1) | 0;
        b = (b + (k + 2)) | 0;
        h = (c + q) | 0;
        f = m;
        e = (e + q) | 0;
      }
      if (!(g & 1)) return;
      q = d[h >> 0] | 0;
      o = d[e >> 0] | 0;
      p = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      n = (p + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
      a[f >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
      o = (p + 8708 - (((q * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
      a[(f + 1) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
      q = (p + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
      a[(f + 2) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
      a[(f + 3) >> 0] = -1;
      return;
    }
    function ec(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      i = g & -2;
      h = (f + ((i * 3) | 0)) | 0;
      if (i) {
        do {
          j = d[c >> 0] | 0;
          k = d[e >> 0] | 0;
          i = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
          l = (i + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
          a[f >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
          j = (i + 8708 - (((j * 6419) | 0) >>> 8) - (((k * 13320) | 0) >>> 8)) | 0;
          a[(f + 1) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
          k = (i + -14234 + (((k * 26149) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] = k >>> 0 < 16384 ? k >>> 6 : ((k >>> 31) + 255) | 0;
          k = d[c >> 0] | 0;
          i = d[e >> 0] | 0;
          j = (((d[(b + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          l = (j + -17685 + (((k * 33050) | 0) >>> 8)) | 0;
          a[(f + 3) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
          k = (j + 8708 - (((k * 6419) | 0) >>> 8) - (((i * 13320) | 0) >>> 8)) | 0;
          a[(f + 4) >> 0] = k >>> 0 < 16384 ? k >>> 6 : ((k >>> 31) + 255) | 0;
          i = (j + -14234 + (((i * 26149) | 0) >>> 8)) | 0;
          a[(f + 5) >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
          b = (b + 2) | 0;
          c = (c + 1) | 0;
          e = (e + 1) | 0;
          f = (f + 6) | 0;
        } while ((f | 0) != (h | 0));
        f = h;
      }
      if (!(g & 1)) return;
      j = d[c >> 0] | 0;
      l = d[e >> 0] | 0;
      k = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      i = (k + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
      a[f >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
      j = (k + 8708 - (((j * 6419) | 0) >>> 8) - (((l * 13320) | 0) >>> 8)) | 0;
      a[(f + 1) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
      l = (k + -14234 + (((l * 26149) | 0) >>> 8)) | 0;
      a[(f + 2) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
      return;
    }
    function fc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0;
      h = (g << 2) & -8;
      m = (f + h) | 0;
      if (!h) h = c;
      else {
        l = (h + -8) | 0;
        k = l >>> 2;
        j = c;
        h = e;
        i = b;
        while (1) {
          o = d[j >> 0] | 0;
          p = d[h >> 0] | 0;
          n = (((d[i >> 0] | 0) * 19077) | 0) >>> 8;
          q = (n + -17685 + (((o * 33050) | 0) >>> 8)) | 0;
          a[f >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          o = (n + 8708 - (((o * 6419) | 0) >>> 8) - (((p * 13320) | 0) >>> 8)) | 0;
          a[(f + 1) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
          p = (n + -14234 + (((p * 26149) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
          a[(f + 3) >> 0] = -1;
          p = d[j >> 0] | 0;
          n = d[h >> 0] | 0;
          o = (((d[(i + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          q = (o + -17685 + (((p * 33050) | 0) >>> 8)) | 0;
          a[(f + 4) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          p = (o + 8708 - (((p * 6419) | 0) >>> 8) - (((n * 13320) | 0) >>> 8)) | 0;
          a[(f + 5) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
          n = (o + -14234 + (((n * 26149) | 0) >>> 8)) | 0;
          a[(f + 6) >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
          a[(f + 7) >> 0] = -1;
          f = (f + 8) | 0;
          if ((f | 0) == (m | 0)) break;
          else {
            j = (j + 1) | 0;
            h = (h + 1) | 0;
            i = (i + 2) | 0;
          }
        }
        q = ((l >>> 3) + 1) | 0;
        b = (b + (k + 2)) | 0;
        h = (c + q) | 0;
        f = m;
        e = (e + q) | 0;
      }
      if (!(g & 1)) return;
      o = d[h >> 0] | 0;
      q = d[e >> 0] | 0;
      p = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      n = (p + -17685 + (((o * 33050) | 0) >>> 8)) | 0;
      a[f >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
      o = (p + 8708 - (((o * 6419) | 0) >>> 8) - (((q * 13320) | 0) >>> 8)) | 0;
      a[(f + 1) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
      q = (p + -14234 + (((q * 26149) | 0) >>> 8)) | 0;
      a[(f + 2) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
      a[(f + 3) >> 0] = -1;
      return;
    }
    function gc(b, c, d, e, f) {
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      g = (f << 2) & -8;
      l = (e + g) | 0;
      if (!g) g = c;
      else {
        k = (g + -8) | 0;
        j = k >>> 2;
        i = c;
        g = d;
        h = b;
        while (1) {
          m = a[h >> 0] | 0;
          n = a[i >> 0] | 0;
          o = a[g >> 0] | 0;
          a[e >> 0] = -1;
          n = n & 255;
          o = o & 255;
          m = (((m & 255) * 19077) | 0) >>> 8;
          p = (m + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
          a[(e + 1) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
          o = (m + 8708 - (((n * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
          a[(e + 2) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
          n = (m + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[(e + 3) >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
          n = a[(h + 1) >> 0] | 0;
          m = a[i >> 0] | 0;
          o = a[g >> 0] | 0;
          a[(e + 4) >> 0] = -1;
          m = m & 255;
          o = o & 255;
          n = (((n & 255) * 19077) | 0) >>> 8;
          p = (n + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
          a[(e + 5) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
          o = (n + 8708 - (((m * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
          a[(e + 6) >> 0] = o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0;
          m = (n + -17685 + (((m * 33050) | 0) >>> 8)) | 0;
          a[(e + 7) >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
          e = (e + 8) | 0;
          if ((e | 0) == (l | 0)) break;
          else {
            i = (i + 1) | 0;
            g = (g + 1) | 0;
            h = (h + 2) | 0;
          }
        }
        p = ((k >>> 3) + 1) | 0;
        b = (b + (j + 2)) | 0;
        g = (c + p) | 0;
        e = l;
        d = (d + p) | 0;
      }
      if (!(f & 1)) return;
      o = a[b >> 0] | 0;
      p = a[g >> 0] | 0;
      n = a[d >> 0] | 0;
      a[e >> 0] = -1;
      p = p & 255;
      n = n & 255;
      o = (((o & 255) * 19077) | 0) >>> 8;
      m = (o + -14234 + (((n * 26149) | 0) >>> 8)) | 0;
      a[(e + 1) >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
      n = (o + 8708 - (((p * 6419) | 0) >>> 8) - (((n * 13320) | 0) >>> 8)) | 0;
      a[(e + 2) >> 0] = n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0;
      p = (o + -17685 + (((p * 33050) | 0) >>> 8)) | 0;
      a[(e + 3) >> 0] = p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0;
      return;
    }
    function hc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0;
      h = (g << 1) & -4;
      m = (f + h) | 0;
      if (!h) h = c;
      else {
        l = (h + -4) | 0;
        k = l >>> 1;
        j = c;
        h = e;
        i = b;
        while (1) {
          n = d[j >> 0] | 0;
          q = d[h >> 0] | 0;
          o = (((d[i >> 0] | 0) * 19077) | 0) >>> 8;
          p = (o + -14234 + (((q * 26149) | 0) >>> 8)) | 0;
          q = (o + 8708 - (((n * 6419) | 0) >>> 8) - (((q * 13320) | 0) >>> 8)) | 0;
          n = (o + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[f >> 0] =
            ((q >>> 0 < 16384 ? q >>> 6 : (((q >> 31) & 3841) + 255) | 0) >>> 4) |
            ((p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0) & 240);
          a[(f + 1) >> 0] = (n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0) | 15;
          n = d[j >> 0] | 0;
          p = d[h >> 0] | 0;
          q = (((d[(i + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          o = (q + -14234 + (((p * 26149) | 0) >>> 8)) | 0;
          p = (q + 8708 - (((n * 6419) | 0) >>> 8) - (((p * 13320) | 0) >>> 8)) | 0;
          n = (q + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] =
            ((p >>> 0 < 16384 ? p >>> 6 : (((p >> 31) & 3841) + 255) | 0) >>> 4) |
            ((o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0) & 240);
          a[(f + 3) >> 0] = (n >>> 0 < 16384 ? n >>> 6 : ((n >>> 31) + 255) | 0) | 15;
          f = (f + 4) | 0;
          if ((f | 0) == (m | 0)) break;
          else {
            j = (j + 1) | 0;
            h = (h + 1) | 0;
            i = (i + 2) | 0;
          }
        }
        q = ((l >>> 2) + 1) | 0;
        b = (b + (k + 2)) | 0;
        h = (c + q) | 0;
        f = m;
        e = (e + q) | 0;
      }
      if (!(g & 1)) return;
      q = d[h >> 0] | 0;
      o = d[e >> 0] | 0;
      n = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      p = (n + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
      o = (n + 8708 - (((q * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
      q = (n + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
      a[f >> 0] =
        ((o >>> 0 < 16384 ? o >>> 6 : (((o >> 31) & 3841) + 255) | 0) >>> 4) | ((p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0) & 240);
      a[(f + 1) >> 0] = (q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0) | 15;
      return;
    }
    function ic(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0;
      h = (g << 1) & -4;
      m = (f + h) | 0;
      if (!h) h = c;
      else {
        l = (h + -4) | 0;
        k = l >>> 1;
        j = c;
        h = e;
        i = b;
        while (1) {
          n = d[j >> 0] | 0;
          o = d[h >> 0] | 0;
          p = (((d[i >> 0] | 0) * 19077) | 0) >>> 8;
          q = (p + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
          o = (p + 8708 - (((n * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
          o = o >>> 0 < 16384 ? o >> 6 : (((o >> 31) & -255) + 255) | 0;
          n = (p + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[f >> 0] = (o >>> 5) | ((q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0) & 248);
          a[(f + 1) >> 0] = ((o << 3) & 224) | ((n >>> 0 < 16384 ? n >>> 6 : (((n >> 31) & 1793) + 255) | 0) >>> 3);
          n = d[j >> 0] | 0;
          o = d[h >> 0] | 0;
          q = (((d[(i + 1) >> 0] | 0) * 19077) | 0) >>> 8;
          p = (q + -14234 + (((o * 26149) | 0) >>> 8)) | 0;
          o = (q + 8708 - (((n * 6419) | 0) >>> 8) - (((o * 13320) | 0) >>> 8)) | 0;
          o = o >>> 0 < 16384 ? o >> 6 : (((o >> 31) & -255) + 255) | 0;
          n = (q + -17685 + (((n * 33050) | 0) >>> 8)) | 0;
          a[(f + 2) >> 0] = (o >>> 5) | ((p >>> 0 < 16384 ? p >>> 6 : ((p >>> 31) + 255) | 0) & 248);
          a[(f + 3) >> 0] = ((o << 3) & 224) | ((n >>> 0 < 16384 ? n >>> 6 : (((n >> 31) & 1793) + 255) | 0) >>> 3);
          f = (f + 4) | 0;
          if ((f | 0) == (m | 0)) break;
          else {
            j = (j + 1) | 0;
            h = (h + 1) | 0;
            i = (i + 2) | 0;
          }
        }
        q = ((l >>> 2) + 1) | 0;
        b = (b + (k + 2)) | 0;
        h = (c + q) | 0;
        f = m;
        e = (e + q) | 0;
      }
      if (!(g & 1)) return;
      q = d[h >> 0] | 0;
      p = d[e >> 0] | 0;
      n = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      o = (n + -14234 + (((p * 26149) | 0) >>> 8)) | 0;
      p = (n + 8708 - (((q * 6419) | 0) >>> 8) - (((p * 13320) | 0) >>> 8)) | 0;
      p = p >>> 0 < 16384 ? p >> 6 : (((p >> 31) & -255) + 255) | 0;
      q = (n + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
      a[f >> 0] = (p >>> 5) | ((o >>> 0 < 16384 ? o >>> 6 : ((o >>> 31) + 255) | 0) & 248);
      a[(f + 1) >> 0] = ((p << 3) & 224) | ((q >>> 0 < 16384 ? q >>> 6 : (((q >> 31) & 1793) + 255) | 0) >>> 3);
      return;
    }
    function jc(a, b, e, f) {
      a = a | 0;
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0;
      F = (a + 24) | 0;
      if ((b | 0) <= 0) {
        J = 0;
        return J | 0;
      }
      v = (a + 56) | 0;
      w = (a + 64) | 0;
      G = (a + 4) | 0;
      H = (a + 60) | 0;
      I = (a + 32) | 0;
      J = (a + 8) | 0;
      x = (a + 52) | 0;
      y = (a + 80) | 0;
      A = (a + 76) | 0;
      B = (a + 36) | 0;
      C = (a + 40) | 0;
      D = (a + 12) | 0;
      E = (a + 44) | 0;
      u = e;
      e = 0;
      while (1) {
        if ((c[w >> 2] | 0) < (c[v >> 2] | 0) ? (c[F >> 2] | 0) < 1 : 0) {
          g = 29;
          break;
        }
        if (c[G >> 2] | 0) {
          t = c[A >> 2] | 0;
          c[A >> 2] = c[y >> 2];
          c[y >> 2] = t;
        }
        s = c[J >> 2] | 0;
        t = O(c[x >> 2] | 0, s) | 0;
        g = (s | 0) > 0;
        if (!(c[a >> 2] | 0)) {
          if (g) {
            m = 0;
            do {
              if ((m | 0) < (t | 0)) {
                g = 0;
                h = 0;
                l = m;
                i = m;
                while (1) {
                  g = ((c[B >> 2] | 0) + g) | 0;
                  k = c[C >> 2] | 0;
                  if ((g | 0) > 0)
                    do {
                      g = (g - k) | 0;
                      j = d[(u + i) >> 0] | 0;
                      h = (j + h) | 0;
                      i = (i + s) | 0;
                    } while ((g | 0) > 0);
                  else j = 0;
                  r = O(j, (0 - g) | 0) | 0;
                  q = ((O(h, k) | 0) - r) | 0;
                  c[((c[y >> 2] | 0) + (l << 2)) >> 2] = q;
                  r = ue(c[D >> 2] | 0, 0, r | 0, 0) | 0;
                  le(r | 0, z | 0, -2147483648, 0) | 0;
                  l = (l + s) | 0;
                  if ((l | 0) >= (t | 0)) break;
                  else h = z;
                }
              }
              m = (m + 1) | 0;
            } while ((m | 0) != (s | 0));
          }
        } else if (g) {
          q = 0;
          do {
            g = c[B >> 2] | 0;
            j = d[(u + q) >> 0] | 0;
            h = (q + s) | 0;
            if ((c[E >> 2] | 0) > 1) i = d[(u + h) >> 0] | 0;
            else i = j;
            r = c[y >> 2] | 0;
            c[(r + (q << 2)) >> 2] = O(j, g) | 0;
            a: do
              if ((h | 0) < (t | 0)) {
                p = i;
                o = h;
                i = (j - i) | 0;
                while (1) {
                  k = h;
                  while (1) {
                    g = (g - (c[C >> 2] | 0)) | 0;
                    h = (k + s) | 0;
                    l = c[B >> 2] | 0;
                    m = (h | 0) < (t | 0);
                    if ((g | 0) < 0) break;
                    c[(r + (k << 2)) >> 2] = (O(l, p) | 0) + (O(g, i) | 0);
                    if (!m) break a;
                    else k = h;
                  }
                  j = (o + s) | 0;
                  n = p;
                  i = d[(u + j) >> 0] | 0;
                  g = (l + g) | 0;
                  n = (n - i) | 0;
                  c[(r + (k << 2)) >> 2] = (O(n, g) | 0) + (O(i, l) | 0);
                  if (m) {
                    p = i;
                    o = j;
                    i = n;
                  } else break;
                }
              }
            while (0);
            q = (q + 1) | 0;
          } while ((q | 0) != (s | 0));
        }
        if ((c[G >> 2] | 0) == 0 ? (O(c[x >> 2] | 0, c[J >> 2] | 0) | 0) > 0 : 0) {
          h = c[y >> 2] | 0;
          i = c[A >> 2] | 0;
          g = 0;
          do {
            t = (i + (g << 2)) | 0;
            c[t >> 2] = (c[t >> 2] | 0) + (c[(h + (g << 2)) >> 2] | 0);
            g = (g + 1) | 0;
          } while ((g | 0) < (O(c[x >> 2] | 0, c[J >> 2] | 0) | 0));
        }
        c[H >> 2] = (c[H >> 2] | 0) + 1;
        e = (e + 1) | 0;
        c[F >> 2] = (c[F >> 2] | 0) - (c[I >> 2] | 0);
        if ((e | 0) < (b | 0)) u = (u + f) | 0;
        else {
          g = 29;
          break;
        }
      }
      if ((g | 0) == 29) return e | 0;
      return 0;
    }
    function kc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        i = (f + (h << 2)) | 0;
        j = d[(c + h) >> 0] | 0;
        l = d[(e + h) >> 0] | 0;
        k = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        m = (k + -14234 + (((l * 26149) | 0) >>> 8)) | 0;
        a[i >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
        l = (k + 8708 - (((j * 6419) | 0) >>> 8) - (((l * 13320) | 0) >>> 8)) | 0;
        a[(i + 1) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
        j = (k + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
        a[(i + 2) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
        a[(i + 3) >> 0] = -1;
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function lc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        i = (f + (h << 2)) | 0;
        l = d[(c + h) >> 0] | 0;
        j = d[(e + h) >> 0] | 0;
        k = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        m = (k + -17685 + (((l * 33050) | 0) >>> 8)) | 0;
        a[i >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
        l = (k + 8708 - (((l * 6419) | 0) >>> 8) - (((j * 13320) | 0) >>> 8)) | 0;
        a[(i + 1) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
        j = (k + -14234 + (((j * 26149) | 0) >>> 8)) | 0;
        a[(i + 2) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
        a[(i + 3) >> 0] = -1;
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function mc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        j = d[(c + h) >> 0] | 0;
        l = d[(e + h) >> 0] | 0;
        i = (f + ((h * 3) | 0)) | 0;
        k = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        m = (k + -14234 + (((l * 26149) | 0) >>> 8)) | 0;
        a[i >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
        l = (k + 8708 - (((j * 6419) | 0) >>> 8) - (((l * 13320) | 0) >>> 8)) | 0;
        a[(i + 1) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
        j = (k + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
        a[(i + 2) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function nc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        l = d[(c + h) >> 0] | 0;
        j = d[(e + h) >> 0] | 0;
        i = (f + ((h * 3) | 0)) | 0;
        k = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        m = (k + -17685 + (((l * 33050) | 0) >>> 8)) | 0;
        a[i >> 0] = m >>> 0 < 16384 ? m >>> 6 : ((m >>> 31) + 255) | 0;
        l = (k + 8708 - (((l * 6419) | 0) >>> 8) - (((j * 13320) | 0) >>> 8)) | 0;
        a[(i + 1) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
        j = (k + -14234 + (((j * 26149) | 0) >>> 8)) | 0;
        a[(i + 2) >> 0] = j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0;
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function oc(b, c, d, e, f) {
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      if ((f | 0) > 0) g = 0;
      else return;
      do {
        j = a[(b + g) >> 0] | 0;
        i = a[(c + g) >> 0] | 0;
        k = a[(d + g) >> 0] | 0;
        h = (e + (g << 2)) | 0;
        a[h >> 0] = -1;
        i = i & 255;
        k = k & 255;
        j = (((j & 255) * 19077) | 0) >>> 8;
        l = (j + -14234 + (((k * 26149) | 0) >>> 8)) | 0;
        a[(h + 1) >> 0] = l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0;
        k = (j + 8708 - (((i * 6419) | 0) >>> 8) - (((k * 13320) | 0) >>> 8)) | 0;
        a[(h + 2) >> 0] = k >>> 0 < 16384 ? k >>> 6 : ((k >>> 31) + 255) | 0;
        i = (j + -17685 + (((i * 33050) | 0) >>> 8)) | 0;
        a[(h + 3) >> 0] = i >>> 0 < 16384 ? i >>> 6 : ((i >>> 31) + 255) | 0;
        g = (g + 1) | 0;
      } while ((g | 0) != (f | 0));
      return;
    }
    function pc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        j = d[(c + h) >> 0] | 0;
        l = d[(e + h) >> 0] | 0;
        i = (f + (h << 1)) | 0;
        m = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        k = (m + -14234 + (((l * 26149) | 0) >>> 8)) | 0;
        l = (m + 8708 - (((j * 6419) | 0) >>> 8) - (((l * 13320) | 0) >>> 8)) | 0;
        j = (m + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
        a[i >> 0] =
          ((l >>> 0 < 16384 ? l >>> 6 : (((l >> 31) & 3841) + 255) | 0) >>> 4) |
          ((k >>> 0 < 16384 ? k >>> 6 : ((k >>> 31) + 255) | 0) & 240);
        a[(i + 1) >> 0] = (j >>> 0 < 16384 ? j >>> 6 : ((j >>> 31) + 255) | 0) | 15;
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function qc(b, c, e, f, g) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      var h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      if ((g | 0) > 0) h = 0;
      else return;
      do {
        j = d[(c + h) >> 0] | 0;
        k = d[(e + h) >> 0] | 0;
        i = (f + (h << 1)) | 0;
        m = (((d[(b + h) >> 0] | 0) * 19077) | 0) >>> 8;
        l = (m + -14234 + (((k * 26149) | 0) >>> 8)) | 0;
        k = (m + 8708 - (((j * 6419) | 0) >>> 8) - (((k * 13320) | 0) >>> 8)) | 0;
        k = k >>> 0 < 16384 ? k >> 6 : (((k >> 31) & -255) + 255) | 0;
        j = (m + -17685 + (((j * 33050) | 0) >>> 8)) | 0;
        a[i >> 0] = (k >>> 5) | ((l >>> 0 < 16384 ? l >>> 6 : ((l >>> 31) + 255) | 0) & 248);
        a[(i + 1) >> 0] = ((k << 3) & 224) | ((j >>> 0 < 16384 ? j >>> 6 : (((j >> 31) & 1793) + 255) | 0) >>> 3);
        h = (h + 1) | 0;
      } while ((h | 0) != (g | 0));
      return;
    }
    function rc(b) {
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0;
      j = c[(b + 68) >> 2] | 0;
      h = c[(b + 76) >> 2] | 0;
      k = O(c[(b + 8) >> 2] | 0, c[(b + 52) >> 2] | 0) | 0;
      i = c[(b + 80) >> 2] | 0;
      d = c[(b + 24) >> 2] | 0;
      e = (k | 0) > 0;
      if (!d) {
        if (!e) return;
        e = (b + 16) | 0;
        d = 0;
        do {
          h = ue(c[e >> 2] | 0, 0, c[(i + (d << 2)) >> 2] | 0, 0) | 0;
          le(h | 0, z | 0, -2147483648, 0) | 0;
          a[(j + d) >> 0] = z;
          d = (d + 1) | 0;
        } while ((d | 0) != (k | 0));
        return;
      } else {
        g = c[(b + 32) >> 2] | 0;
        g = se(0, (0 - d) | 0, g | 0, ((((g | 0) < 0) << 31) >> 31) | 0) | 0;
        if (!e) return;
        f = ke(0, 0, g | 0, z | 0) | 0;
        e = (b + 16) | 0;
        d = 0;
        do {
          n = ue(c[(i + (d << 2)) >> 2] | 0, 0, f | 0, 0) | 0;
          m = z;
          l = ue(c[(h + (d << 2)) >> 2] | 0, 0, g | 0, 0) | 0;
          b = z;
          m = le(n | 0, m | 0, -2147483648, 0) | 0;
          le(m | 0, z | 0, l | 0, b | 0) | 0;
          b = ue(z | 0, 0, c[e >> 2] | 0, 0) | 0;
          le(b | 0, z | 0, -2147483648, 0) | 0;
          a[(j + d) >> 0] = z;
          d = (d + 1) | 0;
        } while ((d | 0) != (k | 0));
        return;
      }
    }
    function sc(b) {
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0;
      g = c[(b + 68) >> 2] | 0;
      h = c[(b + 76) >> 2] | 0;
      i = O(c[(b + 8) >> 2] | 0, c[(b + 52) >> 2] | 0) | 0;
      e = c[(b + 80) >> 2] | 0;
      f = O(c[(b + 24) >> 2] | 0, (0 - (c[(b + 16) >> 2] | 0)) | 0) | 0;
      d = (i | 0) > 0;
      if (!f) {
        if (!d) return;
        d = (b + 20) | 0;
        b = 0;
        do {
          f = (h + (b << 2)) | 0;
          e = ue(c[d >> 2] | 0, 0, c[f >> 2] | 0, 0) | 0;
          le(e | 0, z | 0, -2147483648, 0) | 0;
          a[(g + b) >> 0] = z;
          c[f >> 2] = 0;
          b = (b + 1) | 0;
        } while ((b | 0) != (i | 0));
        return;
      } else {
        if (!d) return;
        d = (b + 20) | 0;
        b = 0;
        do {
          k = ue(c[(e + (b << 2)) >> 2] | 0, 0, f | 0, 0) | 0;
          le(k | 0, z | 0, -2147483648, 0) | 0;
          k = z;
          j = (h + (b << 2)) | 0;
          l = ue(((c[j >> 2] | 0) - k) | 0, 0, c[d >> 2] | 0, 0) | 0;
          le(l | 0, z | 0, -2147483648, 0) | 0;
          a[(g + b) >> 0] = z;
          c[j >> 2] = k;
          b = (b + 1) | 0;
        } while ((b | 0) != (i | 0));
        return;
      }
    }
    function tc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      t = (((n * 3) | 0) + 131074 + m) | 0;
      w = (t >>> 2) & 255;
      t = (t >>> 18) & 255;
      u = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      s = (u + -14234 + (((t * 26149) | 0) >>> 8)) | 0;
      a[i >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
      t = (u + 8708 - (((w * 6419) | 0) >>> 8) - (((t * 13320) | 0) >>> 8)) | 0;
      a[(i + 1) >> 0] = t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0;
      w = (u + -17685 + (((w * 33050) | 0) >>> 8)) | 0;
      a[(i + 2) >> 0] = w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0;
      a[(i + 3) >> 0] = -1;
      w = (c | 0) != 0;
      if (w) {
        s = (n + 131074 + ((m * 3) | 0)) | 0;
        t = (s >>> 2) & 255;
        s = (s >>> 18) & 255;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        r = ((((s * 26149) | 0) >>> 8) + -14234 + u) | 0;
        a[j >> 0] = r >>> 0 < 16384 ? r >>> 6 : ((r >>> 31) + 255) | 0;
        s = (8708 - (((t * 6419) | 0) >>> 8) - (((s * 13320) | 0) >>> 8) + u) | 0;
        a[(j + 1) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
        u = ((((t * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[(j + 2) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
        a[(j + 3) >> 0] = -1;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          A = (t + l) | 0;
          B = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          p = o << 2;
          q = (i + p) | 0;
          y = (A >>> 1) & 255;
          A = (A >>> 17) & 255;
          z = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (z + -14234 + (((A * 26149) | 0) >>> 8)) | 0;
          a[q >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          A = (z + 8708 - (((y * 6419) | 0) >>> 8) - (((A * 13320) | 0) >>> 8)) | 0;
          a[(q + 1) >> 0] = A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0;
          y = (z + -17685 + (((y * 33050) | 0) >>> 8)) | 0;
          a[(q + 2) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
          a[(q + 3) >> 0] = -1;
          q = s << 3;
          y = (i + q) | 0;
          z = (B >>> 1) & 255;
          B = (B >>> 17) & 255;
          A = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (A + -14234 + (((B * 26149) | 0) >>> 8)) | 0;
          a[y >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          B = (A + 8708 - (((z * 6419) | 0) >>> 8) - (((B * 13320) | 0) >>> 8)) | 0;
          a[(y + 1) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          z = (A + -17685 + (((z * 33050) | 0) >>> 8)) | 0;
          a[(y + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          a[(y + 3) >> 0] = -1;
          if (w) {
            y = (u + r) | 0;
            z = (t + m) | 0;
            C = (j + p) | 0;
            B = (y >>> 1) & 255;
            y = (y >>> 17) & 255;
            A = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            u = ((((y * 26149) | 0) >>> 8) + -14234 + A) | 0;
            a[C >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
            y = (8708 - (((B * 6419) | 0) >>> 8) - (((y * 13320) | 0) >>> 8) + A) | 0;
            a[(C + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            A = ((((B * 33050) | 0) >>> 8) + -17685 + A) | 0;
            a[(C + 2) >> 0] = A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0;
            a[(C + 3) >> 0] = -1;
            C = (j + q) | 0;
            A = (z >>> 1) & 255;
            z = (z >>> 17) & 255;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
            a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
            a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
            a[(C + 3) >> 0] = -1;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      z = (m + 131074 + ((n * 3) | 0)) | 0;
      l = x << 2;
      C = (i + l) | 0;
      A = (z >>> 2) & 255;
      z = (z >>> 18) & 255;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      a[(C + 3) >> 0] = -1;
      if (!w) return;
      z = (n + 131074 + ((m * 3) | 0)) | 0;
      C = (j + l) | 0;
      A = (z >>> 2) & 255;
      z = (z >>> 18) & 255;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      a[(C + 3) >> 0] = -1;
      return;
    }
    function uc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      w = (((n * 3) | 0) + 131074 + m) | 0;
      t = (w >>> 2) & 255;
      w = (w >>> 18) & 255;
      u = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      s = (u + -17685 + (((t * 33050) | 0) >>> 8)) | 0;
      a[i >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
      t = (u + 8708 - (((t * 6419) | 0) >>> 8) - (((w * 13320) | 0) >>> 8)) | 0;
      a[(i + 1) >> 0] = t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0;
      w = (u + -14234 + (((w * 26149) | 0) >>> 8)) | 0;
      a[(i + 2) >> 0] = w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0;
      a[(i + 3) >> 0] = -1;
      w = (c | 0) != 0;
      if (w) {
        t = (n + 131074 + ((m * 3) | 0)) | 0;
        s = (t >>> 2) & 255;
        t = (t >>> 18) & 255;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        r = ((((s * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[j >> 0] = r >>> 0 < 16384 ? r >>> 6 : ((r >>> 31) + 255) | 0;
        s = (8708 - (((s * 6419) | 0) >>> 8) - (((t * 13320) | 0) >>> 8) + u) | 0;
        a[(j + 1) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
        u = ((((t * 26149) | 0) >>> 8) + -14234 + u) | 0;
        a[(j + 2) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
        a[(j + 3) >> 0] = -1;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          y = (t + l) | 0;
          z = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          p = o << 2;
          q = (i + p) | 0;
          A = (y >>> 1) & 255;
          y = (y >>> 17) & 255;
          B = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (B + -17685 + (((A * 33050) | 0) >>> 8)) | 0;
          a[q >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          A = (B + 8708 - (((A * 6419) | 0) >>> 8) - (((y * 13320) | 0) >>> 8)) | 0;
          a[(q + 1) >> 0] = A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0;
          y = (B + -14234 + (((y * 26149) | 0) >>> 8)) | 0;
          a[(q + 2) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
          a[(q + 3) >> 0] = -1;
          q = s << 3;
          y = (i + q) | 0;
          B = (z >>> 1) & 255;
          z = (z >>> 17) & 255;
          A = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (A + -17685 + (((B * 33050) | 0) >>> 8)) | 0;
          a[y >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          B = (A + 8708 - (((B * 6419) | 0) >>> 8) - (((z * 13320) | 0) >>> 8)) | 0;
          a[(y + 1) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          z = (A + -14234 + (((z * 26149) | 0) >>> 8)) | 0;
          a[(y + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          a[(y + 3) >> 0] = -1;
          if (w) {
            B = (u + r) | 0;
            A = (t + m) | 0;
            C = (j + p) | 0;
            y = (B >>> 1) & 255;
            B = (B >>> 17) & 255;
            z = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            u = ((((y * 33050) | 0) >>> 8) + -17685 + z) | 0;
            a[C >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
            y = (8708 - (((y * 6419) | 0) >>> 8) - (((B * 13320) | 0) >>> 8) + z) | 0;
            a[(C + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = ((((B * 26149) | 0) >>> 8) + -14234 + z) | 0;
            a[(C + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            a[(C + 3) >> 0] = -1;
            C = (j + q) | 0;
            z = (A >>> 1) & 255;
            A = (A >>> 17) & 255;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = (8708 - (((z * 6419) | 0) >>> 8) - (((A * 13320) | 0) >>> 8) + B) | 0;
            a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
            a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
            a[(C + 3) >> 0] = -1;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      A = (m + 131074 + ((n * 3) | 0)) | 0;
      l = x << 2;
      C = (i + l) | 0;
      z = (A >>> 2) & 255;
      A = (A >>> 18) & 255;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((z * 6419) | 0) >>> 8) - (((A * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      a[(C + 3) >> 0] = -1;
      if (!w) return;
      A = (n + 131074 + ((m * 3) | 0)) | 0;
      C = (j + l) | 0;
      z = (A >>> 2) & 255;
      A = (A >>> 18) & 255;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((z * 6419) | 0) >>> 8) - (((A * 13320) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      a[(C + 3) >> 0] = -1;
      return;
    }
    function vc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      t = (((n * 3) | 0) + 131074 + m) | 0;
      w = (t >>> 2) & 255;
      t = t >>> 18;
      u = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      s = (u + -14234 + (((t * 26149) | 0) >>> 8)) | 0;
      a[i >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
      t = (u + 8708 - (((t * 13320) | 0) >>> 8) - (((w * 6419) | 0) >>> 8)) | 0;
      a[(i + 1) >> 0] = t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0;
      w = (u + -17685 + (((w * 33050) | 0) >>> 8)) | 0;
      a[(i + 2) >> 0] = w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0;
      w = (c | 0) != 0;
      if (w) {
        s = (n + 131074 + ((m * 3) | 0)) | 0;
        t = (s >>> 2) & 255;
        s = s >>> 18;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        r = ((((s * 26149) | 0) >>> 8) + -14234 + u) | 0;
        a[j >> 0] = r >>> 0 < 16384 ? r >>> 6 : ((r >>> 31) + 255) | 0;
        s = (8708 - (((s * 13320) | 0) >>> 8) - (((t * 6419) | 0) >>> 8) + u) | 0;
        a[(j + 1) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
        u = ((((t * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[(j + 2) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          A = (t + l) | 0;
          B = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          q = (A >>> 1) & 255;
          A = A >>> 17;
          p = (o * 3) | 0;
          z = (i + p) | 0;
          y = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (y + -14234 + (((A * 26149) | 0) >>> 8)) | 0;
          a[z >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          A = (y + 8708 - (((A * 13320) | 0) >>> 8) - (((q * 6419) | 0) >>> 8)) | 0;
          a[(z + 1) >> 0] = A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0;
          q = (y + -17685 + (((q * 33050) | 0) >>> 8)) | 0;
          a[(z + 2) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          z = (B >>> 1) & 255;
          B = B >>> 17;
          q = (s * 6) | 0;
          y = (i + q) | 0;
          A = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (A + -14234 + (((B * 26149) | 0) >>> 8)) | 0;
          a[y >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          B = (A + 8708 - (((B * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8)) | 0;
          a[(y + 1) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          z = (A + -17685 + (((z * 33050) | 0) >>> 8)) | 0;
          a[(y + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          if (w) {
            y = (u + r) | 0;
            z = (t + m) | 0;
            B = (y >>> 1) & 255;
            y = y >>> 17;
            A = (j + p) | 0;
            C = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            u = ((((y * 26149) | 0) >>> 8) + -14234 + C) | 0;
            a[A >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
            y = (8708 - (((y * 13320) | 0) >>> 8) - (((B * 6419) | 0) >>> 8) + C) | 0;
            a[(A + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            C = ((((B * 33050) | 0) >>> 8) + -17685 + C) | 0;
            a[(A + 2) >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
            A = (z >>> 1) & 255;
            z = z >>> 17;
            C = (j + q) | 0;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
            a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = (8708 - (((z * 13320) | 0) >>> 8) - (((A * 6419) | 0) >>> 8) + B) | 0;
            a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      z = (m + 131074 + ((n * 3) | 0)) | 0;
      A = (z >>> 2) & 255;
      z = z >>> 18;
      l = (x * 3) | 0;
      C = (i + l) | 0;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((z * 13320) | 0) >>> 8) - (((A * 6419) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      if (!w) return;
      z = (n + 131074 + ((m * 3) | 0)) | 0;
      A = (z >>> 2) & 255;
      z = z >>> 18;
      C = (j + l) | 0;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((z * 13320) | 0) >>> 8) - (((A * 6419) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      return;
    }
    function wc(b, c, e, f, g, h, i, j, k) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      k = k | 0;
      var l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0;
      x = (k + -1) | 0;
      v = x >> 1;
      n = ((d[f >> 0] | 0) << 16) | (d[e >> 0] | 0);
      m = ((d[h >> 0] | 0) << 16) | (d[g >> 0] | 0);
      w = (((n * 3) | 0) + 131074 + m) | 0;
      t = (w >>> 2) & 255;
      w = w >>> 18;
      u = (((d[b >> 0] | 0) * 19077) | 0) >>> 8;
      s = (u + -17685 + (((t * 33050) | 0) >>> 8)) | 0;
      a[i >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
      t = (u + 8708 - (((w * 13320) | 0) >>> 8) - (((t * 6419) | 0) >>> 8)) | 0;
      a[(i + 1) >> 0] = t >>> 0 < 16384 ? t >>> 6 : ((t >>> 31) + 255) | 0;
      w = (u + -14234 + (((w * 26149) | 0) >>> 8)) | 0;
      a[(i + 2) >> 0] = w >>> 0 < 16384 ? w >>> 6 : ((w >>> 31) + 255) | 0;
      w = (c | 0) != 0;
      if (w) {
        t = (n + 131074 + ((m * 3) | 0)) | 0;
        s = (t >>> 2) & 255;
        t = t >>> 18;
        u = (((d[c >> 0] | 0) * 19077) | 0) >>> 8;
        r = ((((s * 33050) | 0) >>> 8) + -17685 + u) | 0;
        a[j >> 0] = r >>> 0 < 16384 ? r >>> 6 : ((r >>> 31) + 255) | 0;
        s = (8708 - (((t * 13320) | 0) >>> 8) - (((s * 6419) | 0) >>> 8) + u) | 0;
        a[(j + 1) >> 0] = s >>> 0 < 16384 ? s >>> 6 : ((s >>> 31) + 255) | 0;
        u = ((((t * 26149) | 0) >>> 8) + -14234 + u) | 0;
        a[(j + 2) >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
      }
      if ((v | 0) >= 1) {
        l = n;
        r = m;
        s = 1;
        while (1) {
          n = ((d[(f + s) >> 0] | 0) << 16) | (d[(e + s) >> 0] | 0);
          m = ((d[(h + s) >> 0] | 0) << 16) | (d[(g + s) >> 0] | 0);
          u = (l + 524296 + r + n + m) | 0;
          t = ((u + ((n + r) << 1)) | 0) >>> 3;
          u = ((((m + l) << 1) + u) | 0) >>> 3;
          q = (t + l) | 0;
          z = (u + n) | 0;
          l = s << 1;
          o = (l + -1) | 0;
          A = (q >>> 1) & 255;
          q = q >>> 17;
          p = (o * 3) | 0;
          B = (i + p) | 0;
          y = (((d[(b + o) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (y + -17685 + (((A * 33050) | 0) >>> 8)) | 0;
          a[B >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          A = (y + 8708 - (((q * 13320) | 0) >>> 8) - (((A * 6419) | 0) >>> 8)) | 0;
          a[(B + 1) >> 0] = A >>> 0 < 16384 ? A >>> 6 : ((A >>> 31) + 255) | 0;
          q = (y + -14234 + (((q * 26149) | 0) >>> 8)) | 0;
          a[(B + 2) >> 0] = q >>> 0 < 16384 ? q >>> 6 : ((q >>> 31) + 255) | 0;
          B = (z >>> 1) & 255;
          z = z >>> 17;
          q = (s * 6) | 0;
          y = (i + q) | 0;
          A = (((d[(b + l) >> 0] | 0) * 19077) | 0) >>> 8;
          C = (A + -17685 + (((B * 33050) | 0) >>> 8)) | 0;
          a[y >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
          B = (A + 8708 - (((z * 13320) | 0) >>> 8) - (((B * 6419) | 0) >>> 8)) | 0;
          a[(y + 1) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          z = (A + -14234 + (((z * 26149) | 0) >>> 8)) | 0;
          a[(y + 2) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
          if (w) {
            B = (u + r) | 0;
            A = (t + m) | 0;
            y = (B >>> 1) & 255;
            B = B >>> 17;
            z = (j + p) | 0;
            C = (((d[(c + o) >> 0] | 0) * 19077) | 0) >>> 8;
            u = ((((y * 33050) | 0) >>> 8) + -17685 + C) | 0;
            a[z >> 0] = u >>> 0 < 16384 ? u >>> 6 : ((u >>> 31) + 255) | 0;
            y = (8708 - (((B * 13320) | 0) >>> 8) - (((y * 6419) | 0) >>> 8) + C) | 0;
            a[(z + 1) >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            C = ((((B * 26149) | 0) >>> 8) + -14234 + C) | 0;
            a[(z + 2) >> 0] = C >>> 0 < 16384 ? C >>> 6 : ((C >>> 31) + 255) | 0;
            z = (A >>> 1) & 255;
            A = A >>> 17;
            C = (j + q) | 0;
            B = (((d[(c + l) >> 0] | 0) * 19077) | 0) >>> 8;
            y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
            a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
            z = (8708 - (((A * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8) + B) | 0;
            a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
            B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
            a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
          }
          if ((s | 0) == (v | 0)) break;
          else {
            l = n;
            r = m;
            s = (s + 1) | 0;
          }
        }
      }
      if ((k & 1) | 0) return;
      A = (m + 131074 + ((n * 3) | 0)) | 0;
      z = (A >>> 2) & 255;
      A = A >>> 18;
      l = (x * 3) | 0;
      C = (i + l) | 0;
      B = (((d[(b + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      if (!w) return;
      A = (n + 131074 + ((m * 3) | 0)) | 0;
      z = (A >>> 2) & 255;
      A = A >>> 18;
      C = (j + l) | 0;
      B = (((d[(c + x) >> 0] | 0) * 19077) | 0) >>> 8;
      y = ((((z * 33050) | 0) >>> 8) + -17685 + B) | 0;
      a[C >> 0] = y >>> 0 < 16384 ? y >>> 6 : ((y >>> 31) + 255) | 0;
      z = (8708 - (((A * 13320) | 0) >>> 8) - (((z * 6419) | 0) >>> 8) + B) | 0;
      a[(C + 1) >> 0] = z >>> 0 < 16384 ? z >>> 6 : ((z >>> 31) + 255) | 0;
      B = ((((A * 26149) | 0) >>> 8) + -14234 + B) | 0;
      a[(C + 2) >> 0] = B >>> 0 < 16384 ? B >>> 6 : ((B >>> 31) + 255) | 0;
      return;
    }
    function ud(f, g, h) {
      f = f | 0;
      g = g | 0;
      h = h | 0;
      var i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0,
        L = 0,
        M = 0,
        N = 0,
        P = 0,
        Q = 0,
        S = 0,
        T = 0,
        U = 0,
        V = 0,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        _ = 0,
        $ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 0,
        ka = 0,
        la = 0,
        ma = 0,
        na = 0,
        oa = 0,
        pa = 0,
        qa = 0,
        ra = 0,
        sa = 0,
        ta = 0,
        ua = 0,
        va = 0,
        wa = 0,
        xa = 0,
        ya = 0,
        za = 0,
        Aa = 0,
        Ba = 0,
        Ca = 0,
        Da = 0,
        Ea = 0,
        Fa = 0,
        Ga = 0,
        Ha = 0,
        Ia = 0,
        Ja = 0,
        Ka = 0,
        La = 0,
        Ma = 0,
        Na = 0,
        Oa = 0,
        Pa = 0,
        Qa = 0,
        Sa = 0,
        Va = 0,
        Xa = 0;
      Ma = l;
      l = (l + 192) | 0;
      Ja = (Ma + 152) | 0;
      Ia = (Ma + 144) | 0;
      Ka = (Ma + 36) | 0;
      j = Ma;
      c[j >> 2] = f;
      i = (j + 4) | 0;
      c[i >> 2] = g;
      c[(j + 8) >> 2] = 1;
      c[Ia >> 2] = 0;
      c[Ja >> 2] = nd(f, g, 0, 0, 0, Ia, 0, j) | 0;
      f = (c[Ia >> 2] | 0) != 0;
      if (!(c[Ja >> 2] | 0)) {
        if (f) La = 4;
      } else if (f & ((c[Ja >> 2] | 0) == 7)) La = 4;
      if ((La | 0) == 4) c[Ja >> 2] = 4;
      f = c[Ja >> 2] | 0;
      if (f | 0) {
        h = f;
        l = Ma;
        return h | 0;
      }
      k = Ka;
      n = (k + 108) | 0;
      do {
        c[k >> 2] = 0;
        k = (k + 4) | 0;
      } while ((k | 0) < (n | 0));
      n = c[(j + 12) >> 2] | 0;
      f = (Ka + 64) | 0;
      c[f >> 2] = (c[j >> 2] | 0) + n;
      g = (Ka + 60) | 0;
      c[g >> 2] = (c[i >> 2] | 0) - n;
      c[(Ka + 44) >> 2] = 6;
      n = (Ka + 48) | 0;
      c[n >> 2] = 7;
      Ha = (Ka + 52) | 0;
      c[Ha >> 2] = 1;
      c[(Ka + 40) >> 2] = h;
      if (!(c[(j + 32) >> 2] | 0)) {
        Ia = Ad(2376) | 0;
        if (!Ia) {
          h = 1;
          l = Ma;
          return h | 0;
        }
        if ((c[(Ia + -4) >> 2] & 3) | 0) me(Ia | 0, 0, 2376) | 0;
        c[Ia >> 2] = 0;
        Ea = (Ia + 8) | 0;
        c[Ea >> 2] = 5990;
        Ga = (Ia + 124) | 0;
        c[Ga >> 2] = 0;
        c[(Ga + 4) >> 2] = 0;
        c[(Ga + 8) >> 2] = 0;
        c[(Ga + 12) >> 2] = 0;
        c[(Ga + 16) >> 2] = 0;
        c[(Ga + 20) >> 2] = 0;
        Ga = (Ia + 4) | 0;
        c[Ga >> 2] = 0;
        Fa = (Ia + 312) | 0;
        c[Fa >> 2] = 0;
        if (!(c[2904] | 0)) c[2904] = 1;
        y = (Ia + 2348) | 0;
        c[y >> 2] = c[(j + 16) >> 2];
        c[(Ia + 2352) >> 2] = c[(j + 20) >> 2];
        a: do
          if (od(Ia, Ka) | 0) {
            f = (h + 20) | 0;
            i = Gc(c[Ka >> 2] | 0, c[(Ka + 4) >> 2] | 0, c[f >> 2] | 0, c[h >> 2] | 0) | 0;
            if (!i) {
              m = c[f >> 2] | 0;
              Da = (Ia + 148) | 0;
              c[Da >> 2] = 0;
              do
                if (m | 0) {
                  f = c[(m + 44) >> 2] | 0;
                  do
                    if ((f | 0) >= 0) {
                      if ((f | 0) <= 100) {
                        f = (f * 255) | 0;
                        if ((f | 0) > 99) j = ((f | 0) / 100) | 0;
                        else break;
                      } else j = 255;
                      f = c[(Ia + 800) >> 2] | 0;
                      if ((f | 0) < 12) {
                        k = (O(d[(4950 + ((f | 0) > 0 ? f : 0)) >> 0] | 0, j) | 0) >> 3;
                        c[(Ia + 804) >> 2] = k;
                      } else k = c[(Ia + 804) >> 2] | 0;
                      f = c[(Ia + 832) >> 2] | 0;
                      if ((f | 0) < 12) {
                        i = (O(d[(4950 + ((f | 0) > 0 ? f : 0)) >> 0] | 0, j) | 0) >> 3;
                        c[(Ia + 836) >> 2] = i;
                      } else i = c[(Ia + 836) >> 2] | 0;
                      f = c[(Ia + 864) >> 2] | 0;
                      if ((f | 0) < 12) {
                        g = (O(d[(4950 + ((f | 0) > 0 ? f : 0)) >> 0] | 0, j) | 0) >> 3;
                        c[(Ia + 868) >> 2] = g;
                      } else g = c[(Ia + 868) >> 2] | 0;
                      f = c[(Ia + 896) >> 2] | 0;
                      if ((f | 0) < 12) {
                        f = (O(d[(4950 + ((f | 0) > 0 ? f : 0)) >> 0] | 0, j) | 0) >> 3;
                        c[(Ia + 900) >> 2] = f;
                      } else f = c[(Ia + 900) >> 2] | 0;
                      if (i | k | g | f | 0) {
                        pe((Ia + 552) | 0, 136, 220) | 0;
                        c[(Ia + 544) >> 2] = 0;
                        c[(Ia + 548) >> 2] = 31;
                        c[(Ia + 772) >> 2] = 256;
                        c[(Ia + 540) >> 2] = 1;
                      }
                    }
                  while (0);
                  f = c[(m + 52) >> 2] | 0;
                  g = (Ia + 2372) | 0;
                  c[g >> 2] = f;
                  if ((f | 0) <= 100)
                    if ((f | 0) < 0) f = 0;
                    else break;
                  else f = 100;
                  c[g >> 2] = f;
                }
              while (0);
              if (!((c[Ga >> 2] | 0) == 0 ? !(od(Ia, Ka) | 0) : 0)) {
                f = c[n >> 2] | 0;
                if ((f | 0) != 0 ? (Ua[f & 7](Ka) | 0) == 0 : 0) {
                  if (!(c[Ia >> 2] | 0)) {
                    c[Ia >> 2] = 6;
                    c[Ea >> 2] = 4994;
                    c[Ga >> 2] = 0;
                  }
                } else La = 42;
                do
                  if ((La | 0) == 42) {
                    Ca = (Ia + 2308) | 0;
                    if (!(c[(Ka + 68) >> 2] | 0)) {
                      f = c[Ca >> 2] | 0;
                      g = d[(4962 + f) >> 0] | 0;
                      if ((f | 0) == 2) {
                        c[(Ia + 296) >> 2] = 0;
                        k = (Ia + 300) | 0;
                        f = 2;
                        La = 49;
                      } else La = 46;
                    } else {
                      c[Ca >> 2] = 0;
                      g = 0;
                      f = 0;
                      La = 46;
                    }
                    if ((La | 0) == 46) {
                      Ba = ((c[(Ka + 76) >> 2] | 0) - g) >> 4;
                      i = (Ia + 296) | 0;
                      c[i >> 2] = Ba;
                      j = ((c[(Ka + 84) >> 2] | 0) - g) >> 4;
                      k = (Ia + 300) | 0;
                      c[k >> 2] = j;
                      if ((Ba | 0) < 0) c[i >> 2] = 0;
                      if ((j | 0) < 0) La = 49;
                    }
                    if ((La | 0) == 49) c[k >> 2] = 0;
                    g = (g + 15) | 0;
                    za = ((c[(Ka + 88) >> 2] | 0) + g) >> 4;
                    Aa = (Ia + 308) | 0;
                    c[Aa >> 2] = za;
                    g = ((c[(Ka + 80) >> 2] | 0) + g) >> 4;
                    Ba = (Ia + 288) | 0;
                    ya = c[Ba >> 2] | 0;
                    c[(Ia + 304) >> 2] = (g | 0) > (ya | 0) ? ya : g;
                    g = c[(Ia + 292) >> 2] | 0;
                    if ((za | 0) > (g | 0)) c[Aa >> 2] = g;
                    if ((f | 0) > 0) {
                      k = (Ia + 104) | 0;
                      m = (Ia + 60) | 0;
                      n = (Ia + 68) | 0;
                      o = (Ia + 64) | 0;
                      p = (Ia + 72) | 0;
                      q = (Ia + 88) | 0;
                      r = (Ia + 112) | 0;
                      j = 0;
                      do {
                        do
                          if (!(c[k >> 2] | 0)) f = c[m >> 2] | 0;
                          else {
                            f = a[(Ia + 120 + j) >> 0] | 0;
                            if (c[r >> 2] | 0) break;
                            f = ((c[m >> 2] | 0) + f) | 0;
                          }
                        while (0);
                        i = (c[n >> 2] | 0) == 0;
                        if (i) g = f;
                        else g = ((c[p >> 2] | 0) + f) | 0;
                        g = (g | 0) < 0 ? 0 : (g | 0) < 63 ? g : 63;
                        if ((g | 0) > 0) {
                          xa = c[o >> 2] | 0;
                          za = g >> ((xa | 0) > 4 ? 2 : 1);
                          ya = (9 - xa) | 0;
                          za = (xa | 0) > 0 ? ((za | 0) > (ya | 0) ? ya : za) : g;
                          za = (za | 0) > 1 ? za : 1;
                          a[(Ia + 2312 + (j << 3) + 1) >> 0] = za;
                          a[(Ia + 2312 + (j << 3) + 3) >> 0] = (g | 0) > 39 ? 2 : ((g | 0) > 14) & 1;
                          g = (za + (g << 1)) & 255;
                        } else g = 0;
                        a[(Ia + 2312 + (j << 3)) >> 0] = g;
                        a[(Ia + 2312 + (j << 3) + 2) >> 0] = 0;
                        if (!i) f = ((c[p >> 2] | 0) + f + (c[q >> 2] | 0)) | 0;
                        f = (f | 0) < 0 ? 0 : (f | 0) < 63 ? f : 63;
                        if ((f | 0) > 0) {
                          xa = c[o >> 2] | 0;
                          za = f >> ((xa | 0) > 4 ? 2 : 1);
                          ya = (9 - xa) | 0;
                          za = (xa | 0) > 0 ? ((za | 0) > (ya | 0) ? ya : za) : f;
                          za = (za | 0) > 1 ? za : 1;
                          a[(Ia + 2312 + (j << 3) + 5) >> 0] = za;
                          a[(Ia + 2312 + (j << 3) + 7) >> 0] = (f | 0) > 39 ? 2 : ((f | 0) > 14) & 1;
                          f = (za + (f << 1)) & 255;
                        } else f = 0;
                        a[(Ia + 2312 + (j << 3) + 4) >> 0] = f;
                        a[(Ia + 2312 + (j << 3) + 6) >> 0] = 1;
                        j = (j + 1) | 0;
                      } while ((j | 0) != 4);
                    }
                    za = (Ia + 152) | 0;
                    c[za >> 2] = 0;
                    m = c[Da >> 2] | 0;
                    g = (m | 0) > 0;
                    if (g) {
                      c[(Ia + 144) >> 2] = 0;
                      f = (Ia + 128) | 0;
                      if (!(c[f >> 2] | 0)) c[f >> 2] = 1;
                      c[(Ia + 136) >> 2] = Ia;
                      c[(Ia + 140) >> 2] = Ia + 180;
                      c[(Ia + 132) >> 2] = 20;
                      f = c[Ca >> 2] | 0;
                      u = (f | 0) > 0 ? 3 : 2;
                    } else {
                      u = 1;
                      f = c[Ca >> 2] | 0;
                    }
                    ya = (Ia + 156) | 0;
                    c[ya >> 2] = u;
                    v = c[Ba >> 2] | 0;
                    x = v << 2;
                    n = v << 5;
                    w = ((v << 1) + 2) | 0;
                    o = O(g ? 2 : 1, x) | 0;
                    o = (f | 0) > 0 ? o : 0;
                    s = O((v * 800) | 0, (m | 0) == 2 ? 2 : 1) | 0;
                    t = u << 4;
                    r = O((((((d[(4962 + f) >> 0] | 0) + t) | 0) * 3) | 0) >>> 1, n) | 0;
                    if (!(c[y >> 2] | 0)) {
                      p = 0;
                      q = 0;
                    } else {
                      p = ue(e[(Ia + 50) >> 1] | 0, 0, e[(Ia + 48) >> 1] | 0, 0) | 0;
                      q = z;
                    }
                    i = le(n | 0, 0, 863, 0) | 0;
                    i = le(i | 0, z | 0, x | 0, 0) | 0;
                    i = le(i | 0, z | 0, w | 0, 0) | 0;
                    i = le(i | 0, z | 0, s | 0, 0) | 0;
                    i = le(i | 0, z | 0, o | 0, 0) | 0;
                    i = le(i | 0, z | 0, r | 0, 0) | 0;
                    i = le(i | 0, z | 0, p | 0, q | 0) | 0;
                    g = z;
                    b: do
                      if (((i | 0) == (i | 0)) & ((g | 0) == 0)) {
                        j = (Ia + 2292) | 0;
                        k = (Ia + 2288) | 0;
                        f = c[k >> 2] | 0;
                        c: do
                          if ((g >>> 0 > 0) | ((g | 0) == 0 ? i >>> 0 > (c[j >> 2] | 0) >>> 0 : 0)) {
                            Bd(f);
                            c[j >> 2] = 0;
                            do
                              if ((g >>> 0 < 0) | (((g | 0) == 0) & (i >>> 0 < 2147418113))) {
                                f = Ad(i) | 0;
                                c[k >> 2] = f;
                                if (!f) break;
                                c[j >> 2] = i;
                                m = c[Da >> 2] | 0;
                                break c;
                              } else c[k >> 2] = 0;
                            while (0);
                            if (c[Ia >> 2] | 0) {
                              i = 0;
                              break b;
                            }
                            c[Ia >> 2] = 1;
                            c[Ea >> 2] = 5013;
                            c[Ga >> 2] = 0;
                            i = 0;
                            break b;
                          }
                        while (0);
                        xa = (Ia + 2244) | 0;
                        c[xa >> 2] = f;
                        f = (f + x) | 0;
                        c[(Ia + 2252) >> 2] = f;
                        f = (f + n) | 0;
                        g = (f + 2) | 0;
                        ta = (Ia + 2256) | 0;
                        c[ta >> 2] = g;
                        f = (f + w) | 0;
                        ra = o | 0 ? f : 0;
                        ua = (Ia + 2260) | 0;
                        c[ua >> 2] = ra;
                        va = (Ia + 160) | 0;
                        c[va >> 2] = 0;
                        wa = (Ia + 172) | 0;
                        c[wa >> 2] = (m | 0) > 0 ? (ra + (v << 2)) | 0 : ra;
                        f = (f + o + 31) & -32;
                        c[(Ia + 2264) >> 2] = f;
                        f = (f + 832) | 0;
                        ra = (Ia + 2304) | 0;
                        c[ra >> 2] = f;
                        sa = (Ia + 176) | 0;
                        c[sa >> 2] = f;
                        if ((m | 0) == 2) c[sa >> 2] = f + ((v * 800) | 0);
                        pa = (f + s) | 0;
                        ia = v << 4;
                        na = (Ia + 2280) | 0;
                        c[na >> 2] = ia;
                        ja = v << 3;
                        oa = (Ia + 2284) | 0;
                        c[oa >> 2] = ja;
                        la = a[(4962 + (c[Ca >> 2] | 0)) >> 0] | 0;
                        qa = O(((la & 255) >>> 1) & 255, ja) | 0;
                        la = (pa + (O(la & 255, ia) | 0)) | 0;
                        ka = (Ia + 2268) | 0;
                        c[ka >> 2] = la;
                        ia = (la + (O(ia, t) | 0) + qa) | 0;
                        la = (Ia + 2272) | 0;
                        c[la >> 2] = ia;
                        ma = (Ia + 2276) | 0;
                        c[ma >> 2] = ia + (O(u << 3, ja) | 0) + qa;
                        c[za >> 2] = 0;
                        c[(Ia + 2364) >> 2] = ((p | 0) != 0) | ((q | 0) != 0) ? (pa + r) | 0 : 0;
                        me((g + -2) | 0, 0, w | 0) | 0;
                        pa = c[ta >> 2] | 0;
                        a[(pa + -2) >> 0] = 0;
                        a[(pa + -1) >> 0] = 0;
                        pa = (Ia + 2248) | 0;
                        c[pa >> 2] = 0;
                        qa = (Ia + 2296) | 0;
                        c[qa >> 2] = 0;
                        me(c[xa >> 2] | 0, 0, x | 0) | 0;
                        c[(Ka + 8) >> 2] = 0;
                        c[(Ka + 20) >> 2] = c[ka >> 2];
                        c[(Ka + 24) >> 2] = c[la >> 2];
                        c[(Ka + 28) >> 2] = c[ma >> 2];
                        c[(Ka + 32) >> 2] = c[na >> 2];
                        c[(Ka + 36) >> 2] = c[oa >> 2];
                        c[(Ka + 104) >> 2] = 0;
                        if (c[89] | 0) {
                          c[2776] = 2;
                          c[2777] = 3;
                          c[2778] = 4;
                          c[2780] = 5;
                          c[2782] = 6;
                          c[2779] = 7;
                          c[2781] = 8;
                          c[2783] = 9;
                          c[2784] = 10;
                          c[2785] = 11;
                          c[2769] = 12;
                          c[2770] = 13;
                          c[2771] = 14;
                          c[2772] = 15;
                          c[2773] = 16;
                          c[2774] = 17;
                          c[2775] = 18;
                          c[2786] = 19;
                          c[2787] = 20;
                          c[2788] = 21;
                          c[2789] = 22;
                          c[2790] = 23;
                          c[2791] = 24;
                          c[2792] = 25;
                          c[89] = 0;
                        }
                        E = (Ia + 2300) | 0;
                        c[E >> 2] = 0;
                        d: do
                          if ((c[Aa >> 2] | 0) > 0) {
                            F = (Ia + 12) | 0;
                            G = (Ia + 108) | 0;
                            H = (Ia + 2236) | 0;
                            C = (Ia + 16) | 0;
                            D = (Ia + 20) | 0;
                            I = (Ia + 24) | 0;
                            J = (Ia + 32) | 0;
                            K = (Ia + 2240) | 0;
                            L = (Ia + 904) | 0;
                            M = (Ia + 906) | 0;
                            N = (Ia + 905) | 0;
                            P = (Ia + 28) | 0;
                            Q = (Ia + 36) | 0;
                            S = (Ia + 300) | 0;
                            T = (Ia + 164) | 0;
                            U = (Ia + 168) | 0;
                            V = (Ia + 144) | 0;
                            W = (Ia + 180) | 0;
                            X = (Ia + 132) | 0;
                            Y = (Ia + 136) | 0;
                            Z = (Ia + 140) | 0;
                            _ = (Ia + 2032) | 0;
                            $ = (Ja + 24) | 0;
                            aa = (Ja + 8) | 0;
                            ba = (Ja + 16) | 0;
                            ca = (Ja + 2) | 0;
                            da = (Ja + 26) | 0;
                            ea = (Ja + 10) | 0;
                            fa = (Ja + 18) | 0;
                            ga = (Ja + 4) | 0;
                            ha = (Ja + 28) | 0;
                            ia = (Ja + 12) | 0;
                            ja = (Ja + 20) | 0;
                            ka = (Ja + 6) | 0;
                            la = (Ja + 30) | 0;
                            ma = (Ja + 14) | 0;
                            na = (Ja + 22) | 0;
                            oa = (Ia + 2100) | 0;
                            f = 0;
                            e: while (1) {
                              A = c[Fa >> 2] & f;
                              B = (Ia + 316 + ((A * 28) | 0)) | 0;
                              f = c[Ba >> 2] | 0;
                              if ((f | 0) > 0) {
                                y = 0;
                                do {
                                  w = ((c[xa >> 2] | 0) + (y << 2)) | 0;
                                  x = c[ra >> 2] | 0;
                                  if (!(c[G >> 2] | 0)) f = 0;
                                  else {
                                    i = d[L >> 0] | 0;
                                    m = c[C >> 2] | 0;
                                    f = c[D >> 2] | 0;
                                    do
                                      if ((f | 0) < 0) {
                                        g = c[I >> 2] | 0;
                                        if (g >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                          v = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                                          c[I >> 2] = g + 3;
                                          v = (ye(v | 0) | 0) >>> 8;
                                          c[F >> 2] = (c[F >> 2] << 24) | v;
                                          f = (f + 24) | 0;
                                          c[D >> 2] = f;
                                          break;
                                        }
                                        if (g >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                          f = (f + 8) | 0;
                                          c[D >> 2] = f;
                                          c[I >> 2] = g + 1;
                                          c[F >> 2] = (c[F >> 2] << 8) | d[g >> 0];
                                          break;
                                        }
                                        if (!(c[Q >> 2] | 0)) {
                                          c[F >> 2] = c[F >> 2] << 8;
                                          f = (f + 8) | 0;
                                          c[D >> 2] = f;
                                          c[Q >> 2] = 1;
                                          break;
                                        } else {
                                          c[D >> 2] = 0;
                                          f = 0;
                                          break;
                                        }
                                      }
                                    while (0);
                                    i = (O(m, i) | 0) >>> 8;
                                    j = c[F >> 2] | 0;
                                    n = (j >>> f) >>> 0 > i >>> 0;
                                    g = (i + 1) | 0;
                                    k = (j - (g << f)) | 0;
                                    if (n) {
                                      c[F >> 2] = k;
                                      g = (m - i) | 0;
                                      j = k;
                                    }
                                    m = (R(g | 0) | 0) ^ 24;
                                    k = (f - m) | 0;
                                    c[D >> 2] = k;
                                    m = ((g << m) + -1) | 0;
                                    c[C >> 2] = m;
                                    f = (k | 0) < 0;
                                    if (n) {
                                      g = d[M >> 0] | 0;
                                      do
                                        if (f) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            v = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            j = ((ye(v | 0) | 0) >>> 8) | (j << 24);
                                            c[F >> 2] = j;
                                            k = (k + 24) | 0;
                                            c[D >> 2] = k;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            k = (k + 8) | 0;
                                            c[D >> 2] = k;
                                            c[I >> 2] = f + 1;
                                            j = (j << 8) | d[f >> 0];
                                            c[F >> 2] = j;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            j = j << 8;
                                            c[F >> 2] = j;
                                            k = (k + 8) | 0;
                                            c[D >> 2] = k;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            k = 0;
                                            break;
                                          }
                                        }
                                      while (0);
                                      g = (O(g, m) | 0) >>> 8;
                                      i = (j >>> k) >>> 0 > g >>> 0;
                                      f = (g + 1) | 0;
                                      if (i) {
                                        c[F >> 2] = j - (f << k);
                                        f = (m - g) | 0;
                                      }
                                      v = (R(f | 0) | 0) ^ 24;
                                      c[D >> 2] = k - v;
                                      c[C >> 2] = (f << v) + -1;
                                      f = i ? 3 : 2;
                                    } else {
                                      g = d[N >> 0] | 0;
                                      do
                                        if (f) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            v = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            j = ((ye(v | 0) | 0) >>> 8) | (j << 24);
                                            c[F >> 2] = j;
                                            k = (k + 24) | 0;
                                            c[D >> 2] = k;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            k = (k + 8) | 0;
                                            c[D >> 2] = k;
                                            c[I >> 2] = f + 1;
                                            j = (j << 8) | d[f >> 0];
                                            c[F >> 2] = j;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            j = j << 8;
                                            c[F >> 2] = j;
                                            k = (k + 8) | 0;
                                            c[D >> 2] = k;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            k = 0;
                                            break;
                                          }
                                        }
                                      while (0);
                                      g = (O(g, m) | 0) >>> 8;
                                      i = (j >>> k) >>> 0 > g >>> 0;
                                      f = (g + 1) | 0;
                                      if (i) {
                                        c[F >> 2] = j - (f << k);
                                        f = (m - g) | 0;
                                      }
                                      v = (R(f | 0) | 0) ^ 24;
                                      c[D >> 2] = k - v;
                                      c[C >> 2] = (f << v) + -1;
                                      f = i & 1;
                                    }
                                    f = f & 255;
                                  }
                                  a[(x + ((y * 800) | 0) + 798) >> 0] = f;
                                  if (!(c[H >> 2] | 0)) {
                                    f = c[D >> 2] | 0;
                                    m = c[C >> 2] | 0;
                                  } else {
                                    i = d[K >> 0] | 0;
                                    m = c[C >> 2] | 0;
                                    f = c[D >> 2] | 0;
                                    do
                                      if ((f | 0) < 0) {
                                        g = c[I >> 2] | 0;
                                        if (g >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                          k = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                                          c[I >> 2] = g + 3;
                                          k = (ye(k | 0) | 0) >>> 8;
                                          c[F >> 2] = (c[F >> 2] << 24) | k;
                                          k = (f + 24) | 0;
                                          c[D >> 2] = k;
                                          break;
                                        }
                                        if (g >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                          k = (f + 8) | 0;
                                          c[D >> 2] = k;
                                          c[I >> 2] = g + 1;
                                          c[F >> 2] = (c[F >> 2] << 8) | d[g >> 0];
                                          break;
                                        }
                                        if (!(c[Q >> 2] | 0)) {
                                          c[F >> 2] = c[F >> 2] << 8;
                                          k = (f + 8) | 0;
                                          c[D >> 2] = k;
                                          c[Q >> 2] = 1;
                                          break;
                                        } else {
                                          c[D >> 2] = 0;
                                          k = 0;
                                          break;
                                        }
                                      } else k = f;
                                    while (0);
                                    g = (O(m, i) | 0) >>> 8;
                                    i = c[F >> 2] | 0;
                                    j = (i >>> k) >>> 0 > g >>> 0;
                                    f = (g + 1) | 0;
                                    if (j) {
                                      c[F >> 2] = i - (f << k);
                                      f = (m - g) | 0;
                                    }
                                    m = (R(f | 0) | 0) ^ 24;
                                    v = (k - m) | 0;
                                    c[D >> 2] = v;
                                    m = ((f << m) + -1) | 0;
                                    c[C >> 2] = m;
                                    a[(x + ((y * 800) | 0) + 797) >> 0] = j & 1;
                                    f = v;
                                  }
                                  do
                                    if ((f | 0) < 0) {
                                      g = c[I >> 2] | 0;
                                      if (g >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                        v = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                                        c[I >> 2] = g + 3;
                                        v = (ye(v | 0) | 0) >>> 8;
                                        c[F >> 2] = (c[F >> 2] << 24) | v;
                                        f = (f + 24) | 0;
                                        c[D >> 2] = f;
                                        break;
                                      }
                                      if (g >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                        f = (f + 8) | 0;
                                        c[D >> 2] = f;
                                        c[I >> 2] = g + 1;
                                        c[F >> 2] = (c[F >> 2] << 8) | d[g >> 0];
                                        break;
                                      }
                                      if (!(c[Q >> 2] | 0)) {
                                        c[F >> 2] = c[F >> 2] << 8;
                                        f = (f + 8) | 0;
                                        c[D >> 2] = f;
                                        c[Q >> 2] = 1;
                                        break;
                                      } else {
                                        c[D >> 2] = 0;
                                        f = 0;
                                        break;
                                      }
                                    }
                                  while (0);
                                  i = ((m * 145) | 0) >>> 8;
                                  j = c[F >> 2] | 0;
                                  n = (j >>> f) >>> 0 > i >>> 0;
                                  g = (i + 1) | 0;
                                  k = (j - (g << f)) | 0;
                                  if (n) {
                                    c[F >> 2] = k;
                                    g = (m - i) | 0;
                                    j = k;
                                  }
                                  m = (R(g | 0) | 0) ^ 24;
                                  i = (f - m) | 0;
                                  c[D >> 2] = i;
                                  m = ((g << m) + -1) | 0;
                                  c[C >> 2] = m;
                                  a[(x + ((y * 800) | 0) + 768) >> 0] = (n ^ 1) & 1;
                                  if (n) {
                                    do
                                      if ((i | 0) < 0) {
                                        f = c[I >> 2] | 0;
                                        if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                          v = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                          c[I >> 2] = f + 3;
                                          j = ((ye(v | 0) | 0) >>> 8) | (j << 24);
                                          c[F >> 2] = j;
                                          i = (i + 24) | 0;
                                          c[D >> 2] = i;
                                          break;
                                        }
                                        if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                          i = (i + 8) | 0;
                                          c[D >> 2] = i;
                                          c[I >> 2] = f + 1;
                                          j = (j << 8) | d[f >> 0];
                                          c[F >> 2] = j;
                                          break;
                                        }
                                        if (!(c[Q >> 2] | 0)) {
                                          j = j << 8;
                                          c[F >> 2] = j;
                                          i = (i + 8) | 0;
                                          c[D >> 2] = i;
                                          c[Q >> 2] = 1;
                                          break;
                                        } else {
                                          c[D >> 2] = 0;
                                          i = 0;
                                          break;
                                        }
                                      }
                                    while (0);
                                    g = ((m * 156) | 0) >>> 8;
                                    n = (j >>> i) >>> 0 > g >>> 0;
                                    f = (g + 1) | 0;
                                    k = (j - (f << i)) | 0;
                                    if (n) {
                                      c[F >> 2] = k;
                                      f = (m - g) | 0;
                                      j = k;
                                    }
                                    m = (R(f | 0) | 0) ^ 24;
                                    i = (i - m) | 0;
                                    c[D >> 2] = i;
                                    m = ((f << m) + -1) | 0;
                                    c[C >> 2] = m;
                                    f = (i | 0) < 0;
                                    if (n) {
                                      do
                                        if (f) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            v = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            j = ((ye(v | 0) | 0) >>> 8) | (j << 24);
                                            c[F >> 2] = j;
                                            i = (i + 24) | 0;
                                            c[D >> 2] = i;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[I >> 2] = f + 1;
                                            j = (j << 8) | d[f >> 0];
                                            c[F >> 2] = j;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            j = j << 8;
                                            c[F >> 2] = j;
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            i = 0;
                                            break;
                                          }
                                        }
                                      while (0);
                                      g = (m >>> 1) & 16777215;
                                      k = (j >>> i) >>> 0 > g >>> 0;
                                      f = (g + 1) | 0;
                                      if (k) {
                                        c[F >> 2] = j - (f << i);
                                        f = (m - g) | 0;
                                      }
                                      v = (R(f | 0) | 0) ^ 24;
                                      c[D >> 2] = i - v;
                                      c[C >> 2] = (f << v) + -1;
                                      f = k ? 1 : 3;
                                    } else {
                                      do
                                        if (f) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            v = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            j = ((ye(v | 0) | 0) >>> 8) | (j << 24);
                                            c[F >> 2] = j;
                                            i = (i + 24) | 0;
                                            c[D >> 2] = i;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[I >> 2] = f + 1;
                                            j = (j << 8) | d[f >> 0];
                                            c[F >> 2] = j;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            j = j << 8;
                                            c[F >> 2] = j;
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            i = 0;
                                            break;
                                          }
                                        }
                                      while (0);
                                      g = ((m * 163) | 0) >>> 8;
                                      k = (j >>> i) >>> 0 > g >>> 0;
                                      f = (g + 1) | 0;
                                      if (k) {
                                        c[F >> 2] = j - (f << i);
                                        f = (m - g) | 0;
                                      }
                                      v = (R(f | 0) | 0) ^ 24;
                                      c[D >> 2] = i - v;
                                      c[C >> 2] = (f << v) + -1;
                                      f = k ? 2 : 0;
                                    }
                                    v = f & 255;
                                    a[(x + ((y * 800) | 0) + 769) >> 0] = v;
                                    me(w | 0, v | 0, 4) | 0;
                                    me(pa | 0, v | 0, 4) | 0;
                                  } else {
                                    r = (x + ((y * 800) | 0) + 769) | 0;
                                    t = 0;
                                    while (1) {
                                      u = (Ia + 2248 + t) | 0;
                                      s = 0;
                                      q = d[u >> 0] | 0;
                                      do {
                                        v = (w + s) | 0;
                                        p = d[v >> 0] | 0;
                                        i = d[(5072 + ((p * 90) | 0) + ((q * 9) | 0)) >> 0] | 0;
                                        m = c[C >> 2] | 0;
                                        f = c[D >> 2] | 0;
                                        do
                                          if ((f | 0) < 0) {
                                            g = c[I >> 2] | 0;
                                            if (g >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                              o = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                                              c[I >> 2] = g + 3;
                                              o = (ye(o | 0) | 0) >>> 8;
                                              c[F >> 2] = (c[F >> 2] << 24) | o;
                                              f = (f + 24) | 0;
                                              c[D >> 2] = f;
                                              break;
                                            }
                                            if (g >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                              f = (f + 8) | 0;
                                              c[D >> 2] = f;
                                              c[I >> 2] = g + 1;
                                              c[F >> 2] = (c[F >> 2] << 8) | d[g >> 0];
                                              break;
                                            }
                                            if (!(c[Q >> 2] | 0)) {
                                              c[F >> 2] = c[F >> 2] << 8;
                                              f = (f + 8) | 0;
                                              c[D >> 2] = f;
                                              c[Q >> 2] = 1;
                                              break;
                                            } else {
                                              c[D >> 2] = 0;
                                              f = 0;
                                              break;
                                            }
                                          }
                                        while (0);
                                        i = (O(m, i) | 0) >>> 8;
                                        j = c[F >> 2] | 0;
                                        o = (j >>> f) >>> 0 > i >>> 0;
                                        n = o & 1;
                                        g = (i + 1) | 0;
                                        k = (j - (g << f)) | 0;
                                        if (o) {
                                          c[F >> 2] = k;
                                          g = (m - i) | 0;
                                          j = k;
                                        }
                                        o = (R(g | 0) | 0) ^ 24;
                                        i = (f - o) | 0;
                                        c[D >> 2] = i;
                                        g = ((g << o) + -1) | 0;
                                        c[C >> 2] = g;
                                        f = a[(5972 + n) >> 0] | 0;
                                        if ((41706 >>> n) & 1)
                                          do {
                                            o = f << 1;
                                            k = d[(5072 + ((p * 90) | 0) + ((q * 9) | 0) + f) >> 0] | 0;
                                            do
                                              if ((i | 0) < 0) {
                                                f = c[I >> 2] | 0;
                                                if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                                  n =
                                                    d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                                  c[I >> 2] = f + 3;
                                                  j = ((ye(n | 0) | 0) >>> 8) | (j << 24);
                                                  c[F >> 2] = j;
                                                  i = (i + 24) | 0;
                                                  c[D >> 2] = i;
                                                  break;
                                                }
                                                if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                                  i = (i + 8) | 0;
                                                  c[D >> 2] = i;
                                                  c[I >> 2] = f + 1;
                                                  j = (j << 8) | d[f >> 0];
                                                  c[F >> 2] = j;
                                                  break;
                                                }
                                                if (!(c[Q >> 2] | 0)) {
                                                  j = j << 8;
                                                  c[F >> 2] = j;
                                                  i = (i + 8) | 0;
                                                  c[D >> 2] = i;
                                                  c[Q >> 2] = 1;
                                                  break;
                                                } else {
                                                  c[D >> 2] = 0;
                                                  i = 0;
                                                  break;
                                                }
                                              }
                                            while (0);
                                            k = (O(k, g) | 0) >>> 8;
                                            n = (j >>> i) >>> 0 > k >>> 0;
                                            f = (k + 1) | 0;
                                            m = (j - (f << i)) | 0;
                                            if (n) {
                                              c[F >> 2] = m;
                                              f = (g - k) | 0;
                                              j = m;
                                            }
                                            g = (R(f | 0) | 0) ^ 24;
                                            i = (i - g) | 0;
                                            c[D >> 2] = i;
                                            g = ((f << g) + -1) | 0;
                                            c[C >> 2] = g;
                                            o = (n & 1) | o;
                                            f = a[(5972 + o) >> 0] | 0;
                                          } while ((((41706 >>> o) & 1) | 0) != 0);
                                        q = (0 - f) | 0;
                                        f = q & 255;
                                        a[v >> 0] = f;
                                        s = (s + 1) | 0;
                                      } while ((s | 0) != 4);
                                      v = d[w >> 0] | (d[(w + 1) >> 0] << 8) | (d[(w + 2) >> 0] << 16) | (d[(w + 3) >> 0] << 24);
                                      a[r >> 0] = v;
                                      a[(r + 1) >> 0] = v >> 8;
                                      a[(r + 2) >> 0] = v >> 16;
                                      a[(r + 3) >> 0] = v >> 24;
                                      a[u >> 0] = f;
                                      t = (t + 1) | 0;
                                      if ((t | 0) == 4) break;
                                      else r = (r + 4) | 0;
                                    }
                                  }
                                  m = c[C >> 2] | 0;
                                  f = c[D >> 2] | 0;
                                  do
                                    if ((f | 0) < 0) {
                                      g = c[I >> 2] | 0;
                                      if (g >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                        w = d[g >> 0] | (d[(g + 1) >> 0] << 8) | (d[(g + 2) >> 0] << 16) | (d[(g + 3) >> 0] << 24);
                                        c[I >> 2] = g + 3;
                                        w = (ye(w | 0) | 0) >>> 8;
                                        c[F >> 2] = (c[F >> 2] << 24) | w;
                                        f = (f + 24) | 0;
                                        c[D >> 2] = f;
                                        break;
                                      }
                                      if (g >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                        f = (f + 8) | 0;
                                        c[D >> 2] = f;
                                        c[I >> 2] = g + 1;
                                        c[F >> 2] = (c[F >> 2] << 8) | d[g >> 0];
                                        break;
                                      }
                                      if (!(c[Q >> 2] | 0)) {
                                        c[F >> 2] = c[F >> 2] << 8;
                                        f = (f + 8) | 0;
                                        c[D >> 2] = f;
                                        c[Q >> 2] = 1;
                                        break;
                                      } else {
                                        c[D >> 2] = 0;
                                        f = 0;
                                        break;
                                      }
                                    }
                                  while (0);
                                  i = ((m * 142) | 0) >>> 8;
                                  j = c[F >> 2] | 0;
                                  n = (j >>> f) >>> 0 > i >>> 0;
                                  g = (i + 1) | 0;
                                  k = (j - (g << f)) | 0;
                                  if (n) {
                                    c[F >> 2] = k;
                                    g = (m - i) | 0;
                                    j = k;
                                  }
                                  m = (R(g | 0) | 0) ^ 24;
                                  i = (f - m) | 0;
                                  c[D >> 2] = i;
                                  m = ((g << m) + -1) | 0;
                                  c[C >> 2] = m;
                                  do
                                    if (n) {
                                      do
                                        if ((i | 0) < 0) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            g = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            g = ((ye(g | 0) | 0) >>> 8) | (j << 24);
                                            c[F >> 2] = g;
                                            i = (i + 24) | 0;
                                            c[D >> 2] = i;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[I >> 2] = f + 1;
                                            g = (j << 8) | d[f >> 0];
                                            c[F >> 2] = g;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            g = j << 8;
                                            c[F >> 2] = g;
                                            i = (i + 8) | 0;
                                            c[D >> 2] = i;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            g = j;
                                            i = 0;
                                            break;
                                          }
                                        } else g = j;
                                      while (0);
                                      j = ((m * 114) | 0) >>> 8;
                                      n = (g >>> i) >>> 0 > j >>> 0;
                                      f = (j + 1) | 0;
                                      k = (g - (f << i)) | 0;
                                      if (n) {
                                        c[F >> 2] = k;
                                        f = (m - j) | 0;
                                        g = k;
                                      }
                                      m = (R(f | 0) | 0) ^ 24;
                                      j = (i - m) | 0;
                                      c[D >> 2] = j;
                                      m = ((f << m) + -1) | 0;
                                      c[C >> 2] = m;
                                      if (!n) {
                                        f = 2;
                                        break;
                                      }
                                      do
                                        if ((j | 0) < 0) {
                                          f = c[I >> 2] | 0;
                                          if (f >>> 0 < (c[J >> 2] | 0) >>> 0) {
                                            i = d[f >> 0] | (d[(f + 1) >> 0] << 8) | (d[(f + 2) >> 0] << 16) | (d[(f + 3) >> 0] << 24);
                                            c[I >> 2] = f + 3;
                                            i = ((ye(i | 0) | 0) >>> 8) | (g << 24);
                                            c[F >> 2] = i;
                                            j = (j + 24) | 0;
                                            c[D >> 2] = j;
                                            break;
                                          }
                                          if (f >>> 0 < (c[P >> 2] | 0) >>> 0) {
                                            j = (j + 8) | 0;
                                            c[D >> 2] = j;
                                            c[I >> 2] = f + 1;
                                            i = (g << 8) | d[f >> 0];
                                            c[F >> 2] = i;
                                            break;
                                          }
                                          if (!(c[Q >> 2] | 0)) {
                                            i = g << 8;
                                            c[F >> 2] = i;
                                            j = (j + 8) | 0;
                                            c[D >> 2] = j;
                                            c[Q >> 2] = 1;
                                            break;
                                          } else {
                                            c[D >> 2] = 0;
                                            i = g;
                                            j = 0;
                                            break;
                                          }
                                        } else i = g;
                                      while (0);
                                      g = ((m * 183) | 0) >>> 8;
                                      k = (i >>> j) >>> 0 > g >>> 0;
                                      f = (g + 1) | 0;
                                      if (k) {
                                        c[F >> 2] = i - (f << j);
                                        f = (m - g) | 0;
                                      }
                                      w = (R(f | 0) | 0) ^ 24;
                                      c[D >> 2] = j - w;
                                      c[C >> 2] = (f << w) + -1;
                                      f = k ? 1 : 3;
                                    } else f = 0;
                                  while (0);
                                  a[(x + ((y * 800) | 0) + 785) >> 0] = f;
                                  y = (y + 1) | 0;
                                  f = c[Ba >> 2] | 0;
                                } while ((y | 0) < (f | 0));
                              }
                              if (c[Q >> 2] | 0) {
                                La = 245;
                                break;
                              }
                              g = c[qa >> 2] | 0;
                              if ((g | 0) < (f | 0)) {
                                v = (Ia + 316 + ((A * 28) | 0) + 24) | 0;
                                do {
                                  i = c[ta >> 2] | 0;
                                  t = (i + (g << 1)) | 0;
                                  u = c[ra >> 2] | 0;
                                  do
                                    if (!(c[H >> 2] | 0)) La = 249;
                                    else {
                                      f = a[(u + ((g * 800) | 0) + 797) >> 0] | 0;
                                      if (!((f << 24) >> 24)) {
                                        La = 249;
                                        break;
                                      }
                                      a[t >> 0] = 0;
                                      a[(i + -2) >> 0] = 0;
                                      if (!(a[(u + ((g * 800) | 0) + 768) >> 0] | 0)) {
                                        a[(i + (g << 1) + 1) >> 0] = 0;
                                        a[(i + -1) >> 0] = 0;
                                      }
                                      c[(u + ((g * 800) | 0) + 788) >> 2] = 0;
                                      c[(u + ((g * 800) | 0) + 792) >> 2] = 0;
                                      a[(u + ((g * 800) | 0) + 796) >> 0] = 0;
                                      f = f & 255;
                                    }
                                  while (0);
                                  if ((La | 0) == 249) {
                                    La = 0;
                                    m = (u + ((g * 800) | 0)) | 0;
                                    s = d[(u + ((g * 800) | 0) + 798) >> 0] | 0;
                                    me(m | 0, 0, 768) | 0;
                                    if (!(a[(u + ((g * 800) | 0) + 768) >> 0] | 0)) {
                                      k = Ja;
                                      n = (k + 32) | 0;
                                      do {
                                        b[k >> 1] = 0;
                                        k = (k + 2) | 0;
                                      } while ((k | 0) < (n | 0));
                                      f = (i + (g << 1) + 1) | 0;
                                      x = (i + -1) | 0;
                                      A =
                                        Ta[c[2904] & 1](
                                          B,
                                          _,
                                          ((d[x >> 0] | 0) + (d[f >> 0] | 0)) | 0,
                                          (Ia + 776 + (s << 5) + 8) | 0,
                                          0,
                                          Ja
                                        ) | 0;
                                      y = ((A | 0) > 0) & 1;
                                      a[x >> 0] = y;
                                      a[f >> 0] = y;
                                      f = b[Ja >> 1] | 0;
                                      if ((A | 0) > 1) {
                                        x = b[$ >> 1] | 0;
                                        o = (x + f) | 0;
                                        Xa = b[aa >> 1] | 0;
                                        w = b[ba >> 1] | 0;
                                        n = (w + Xa) | 0;
                                        w = (Xa - w) | 0;
                                        x = (f - x) | 0;
                                        Xa = b[ca >> 1] | 0;
                                        Pa = b[da >> 1] | 0;
                                        Qa = (Pa + Xa) | 0;
                                        Oa = b[ea >> 1] | 0;
                                        r = b[fa >> 1] | 0;
                                        k = (r + Oa) | 0;
                                        r = (Oa - r) | 0;
                                        Pa = (Xa - Pa) | 0;
                                        Xa = (k + Qa) | 0;
                                        k = (Qa - k) | 0;
                                        Qa = (r + Pa) | 0;
                                        r = (Pa - r) | 0;
                                        Pa = b[ga >> 1] | 0;
                                        Oa = b[ha >> 1] | 0;
                                        p = (Oa + Pa) | 0;
                                        Va = b[ia >> 1] | 0;
                                        f = b[ja >> 1] | 0;
                                        y = (f + Va) | 0;
                                        f = (Va - f) | 0;
                                        Oa = (Pa - Oa) | 0;
                                        Pa = (y + p) | 0;
                                        y = (p - y) | 0;
                                        p = (f + Oa) | 0;
                                        f = (Oa - f) | 0;
                                        Oa = b[ka >> 1] | 0;
                                        Va = b[la >> 1] | 0;
                                        j = (Va + Oa) | 0;
                                        Sa = b[ma >> 1] | 0;
                                        A = b[na >> 1] | 0;
                                        q = (A + Sa) | 0;
                                        A = (Sa - A) | 0;
                                        Va = (Oa - Va) | 0;
                                        Oa = (q + j) | 0;
                                        q = (j - q) | 0;
                                        j = (A + Va) | 0;
                                        A = (Va - A) | 0;
                                        Va = (o + 3 + n) | 0;
                                        Sa = (Oa + Va) | 0;
                                        Na = (Pa + Xa) | 0;
                                        Pa = (Xa - Pa) | 0;
                                        Oa = (Va - Oa) | 0;
                                        b[m >> 1] = ((Sa + Na) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 32) >> 1] = ((Oa + Pa) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 64) >> 1] = ((Sa - Na) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 96) >> 1] = ((Oa - Pa) | 0) >>> 3;
                                        Pa = (x + 3 + w) | 0;
                                        Oa = (j + Pa) | 0;
                                        Na = (p + Qa) | 0;
                                        p = (Qa - p) | 0;
                                        j = (Pa - j) | 0;
                                        b[(u + ((g * 800) | 0) + 128) >> 1] = ((Oa + Na) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 160) >> 1] = ((j + p) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 192) >> 1] = ((Oa - Na) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 224) >> 1] = ((j - p) | 0) >>> 3;
                                        n = (o - n + 3) | 0;
                                        o = (q + n) | 0;
                                        p = (y + k) | 0;
                                        y = (k - y) | 0;
                                        q = (n - q) | 0;
                                        b[(u + ((g * 800) | 0) + 256) >> 1] = ((o + p) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 288) >> 1] = ((q + y) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 320) >> 1] = ((o - p) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 352) >> 1] = ((q - y) | 0) >>> 3;
                                        w = (x - w + 3) | 0;
                                        x = (A + w) | 0;
                                        y = (f + r) | 0;
                                        f = (r - f) | 0;
                                        A = (w - A) | 0;
                                        b[(u + ((g * 800) | 0) + 384) >> 1] = ((x + y) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 416) >> 1] = ((A + f) | 0) >>> 3;
                                        b[(u + ((g * 800) | 0) + 448) >> 1] = ((x - y) | 0) >>> 3;
                                        f = (((A - f) | 0) >>> 3) & 65535;
                                      } else {
                                        f = (((f + 3) | 0) >>> 3) & 65535;
                                        b[(u + ((g * 800) | 0)) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 32) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 64) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 96) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 128) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 160) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 192) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 224) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 256) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 288) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 320) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 352) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 384) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 416) >> 1] = f;
                                        b[(u + ((g * 800) | 0) + 448) >> 1] = f;
                                      }
                                      b[(u + ((g * 800) | 0) + 480) >> 1] = f;
                                      n = 1;
                                      f = 0;
                                    } else {
                                      n = 0;
                                      f = 3;
                                    }
                                    k = (Ia + 1964 + ((f * 68) | 0)) | 0;
                                    r = (i + -2) | 0;
                                    j = (Ia + 776 + (s << 5)) | 0;
                                    f = m;
                                    p = a[t >> 0] & 15;
                                    q = 0;
                                    i = 0;
                                    o = a[r >> 0] & 15;
                                    while (1) {
                                      Pa = p & 255;
                                      Xa = Ta[c[2904] & 1](B, k, ((Pa & 1) + (o & 1)) | 0, j, n, f) | 0;
                                      Na = ((Xa | 0) > (n | 0)) & 1;
                                      Pa = Pa >>> 1;
                                      Sa = ((b[f >> 1] | 0) != 0) & 1;
                                      Va = (f + 32) | 0;
                                      Oa = Ta[c[2904] & 1](B, k, (Na + (Pa & 1)) | 0, j, n, Va) | 0;
                                      Qa = ((Oa | 0) > (n | 0)) & 1;
                                      Pa = ((Na << 7) | Pa) >>> 1;
                                      Sa =
                                        ((Oa | 0) > 3 ? 3 : (Oa | 0) > 1 ? 2 : ((b[Va >> 1] | 0) != 0) & 1) |
                                        ((Xa | 0) > 3 ? 12 : (Xa | 0) > 1 ? 8 : Sa << 2);
                                      Xa = (f + 64) | 0;
                                      Va = Ta[c[2904] & 1](B, k, ((Pa & 1) + Qa) | 0, j, n, Xa) | 0;
                                      Oa = ((Va | 0) > (n | 0)) & 1;
                                      Pa = ((Qa << 7) | Pa) >>> 1;
                                      Sa = ((Va | 0) > 3 ? 3 : (Va | 0) > 1 ? 2 : ((b[Xa >> 1] | 0) != 0) & 1) | (Sa << 2);
                                      Xa = (f + 96) | 0;
                                      Va = Ta[c[2904] & 1](B, k, ((Pa & 1) + Oa) | 0, j, n, Xa) | 0;
                                      Qa = (((Va | 0) > (n | 0)) & 1) << 7;
                                      p = ((Qa | (((Oa << 7) | Pa) >>> 1)) & 255) >>> 4;
                                      o = Qa | (o >>> 1);
                                      q = (Sa << 2) | (q << 8) | ((Va | 0) > 3 ? 3 : (Va | 0) > 1 ? 2 : ((b[Xa >> 1] | 0) != 0) & 1);
                                      i = (i + 1) | 0;
                                      if ((i | 0) == 4) break;
                                      else f = (f + 128) | 0;
                                    }
                                    m = (Ia + 776 + (s << 5) + 16) | 0;
                                    n = 0;
                                    k = o >>> 4;
                                    f = p & 255;
                                    i = 0;
                                    j = (u + ((g * 800) | 0) + 512) | 0;
                                    while (1) {
                                      Xa = (i + 4) | 0;
                                      Qa = (d[t >> 0] | 0) >>> Xa;
                                      Xa = (d[r >> 0] | 0) >>> Xa;
                                      Na = Ta[c[2904] & 1](B, oa, ((Xa & 1) + (Qa & 1)) | 0, m, 0, j) | 0;
                                      Sa = ((Na | 0) > 0) & 1;
                                      Qa = Qa >>> 1;
                                      Oa = ((b[j >> 1] | 0) != 0) & 1;
                                      A = (j + 32) | 0;
                                      Pa = Ta[c[2904] & 1](B, oa, (Sa + (Qa & 1)) | 0, m, 0, A) | 0;
                                      Va = ((Pa | 0) > 0) & 1;
                                      Qa = ((Sa << 3) | Qa) >>> 3;
                                      Oa =
                                        ((Pa | 0) > 3 ? 3 : (Pa | 0) > 1 ? 2 : ((b[A >> 1] | 0) != 0) & 1) |
                                        ((Na | 0) > 3 ? 12 : (Na | 0) > 1 ? 8 : Oa << 2);
                                      Na = (j + 64) | 0;
                                      Xa = Xa >>> 1;
                                      A = Ta[c[2904] & 1](B, oa, ((Qa & 1) + (Xa & 1)) | 0, m, 0, Na) | 0;
                                      Pa = ((A | 0) > 0) & 1;
                                      Qa = ((Va << 1) | Qa) >>> 1;
                                      Oa = ((A | 0) > 3 ? 3 : (A | 0) > 1 ? 2 : ((b[Na >> 1] | 0) != 0) & 1) | (Oa << 2);
                                      Na = (j + 96) | 0;
                                      A = Ta[c[2904] & 1](B, oa, ((Qa & 1) + Pa) | 0, m, 0, Na) | 0;
                                      Sa = ((A | 0) > 0) & 1;
                                      n = ((((A | 0) > 3 ? 3 : (A | 0) > 1 ? 2 : ((b[Na >> 1] | 0) != 0) & 1) | (Oa << 2)) << (i << 2)) | n;
                                      f = (((((Sa << 1) | (((Pa << 3) | (Qa & 120)) >>> 3)) << 4) & 4080) << i) | f;
                                      k = (((Sa << 5) | ((((Va << 5) | Xa) >>> 1) & 112)) << i) | k;
                                      i = (i + 2) | 0;
                                      if ((i | 0) >= 4) break;
                                      else j = (j + 128) | 0;
                                    }
                                    a[t >> 0] = f;
                                    a[r >> 0] = k;
                                    c[(u + ((g * 800) | 0) + 788) >> 2] = q;
                                    c[(u + ((g * 800) | 0) + 792) >> 2] = n;
                                    if (!(n & 43690)) f = c[(Ia + 776 + (s << 5) + 28) >> 2] & 255;
                                    else f = 0;
                                    a[(u + ((g * 800) | 0) + 796) >> 0] = f;
                                    f = ((n | q | 0) == 0) & 1;
                                  }
                                  if ((c[Ca >> 2] | 0) > 0) {
                                    Va = c[ua >> 2] | 0;
                                    Xa = c[qa >> 2] | 0;
                                    Sa = (Va + (Xa << 2)) | 0;
                                    Qa =
                                      (Ia +
                                        2312 +
                                        (d[(u + ((g * 800) | 0) + 798) >> 0] << 3) +
                                        (d[(u + ((g * 800) | 0) + 768) >> 0] << 2)) |
                                      0;
                                    Qa = d[Qa >> 0] | (d[(Qa + 1) >> 0] << 8) | (d[(Qa + 2) >> 0] << 16) | (d[(Qa + 3) >> 0] << 24);
                                    a[Sa >> 0] = Qa;
                                    a[(Sa + 1) >> 0] = Qa >> 8;
                                    a[(Sa + 2) >> 0] = Qa >> 16;
                                    a[(Sa + 3) >> 0] = Qa >> 24;
                                    Xa = (Va + (Xa << 2) + 2) | 0;
                                    a[Xa >> 0] = d[Xa >> 0] | ((f | 0) == 0);
                                  }
                                  if (c[v >> 2] | 0) {
                                    La = 267;
                                    break e;
                                  }
                                  g = ((c[qa >> 2] | 0) + 1) | 0;
                                  c[qa >> 2] = g;
                                } while ((g | 0) < (c[Ba >> 2] | 0));
                              }
                              Xa = c[ta >> 2] | 0;
                              a[(Xa + -2) >> 0] = 0;
                              a[(Xa + -1) >> 0] = 0;
                              c[pa >> 2] = 0;
                              c[qa >> 2] = 0;
                              do
                                if ((c[Ca >> 2] | 0) > 0) {
                                  f = c[E >> 2] | 0;
                                  if ((f | 0) < (c[S >> 2] | 0)) {
                                    g = 0;
                                    break;
                                  }
                                  g = (f | 0) <= (c[Aa >> 2] | 0);
                                } else g = 0;
                              while (0);
                              f = g & 1;
                              i = c[Da >> 2] | 0;
                              if (!i) {
                                c[T >> 2] = c[E >> 2];
                                c[U >> 2] = f;
                                Ic(Ia, va);
                                if (!(Jc(Ia, Ka) | 0)) {
                                  La = 284;
                                  break;
                                }
                              } else {
                                if (c[V >> 2] | 0) {
                                  La = 284;
                                  break;
                                }
                                k = W;
                                j = Ka;
                                n = (k + 108) | 0;
                                do {
                                  c[k >> 2] = c[j >> 2];
                                  k = (k + 4) | 0;
                                  j = (j + 4) | 0;
                                } while ((k | 0) < (n | 0));
                                c[va >> 2] = c[za >> 2];
                                c[T >> 2] = c[E >> 2];
                                c[U >> 2] = f;
                                if ((i | 0) == 2) {
                                  Xa = c[sa >> 2] | 0;
                                  c[sa >> 2] = c[ra >> 2];
                                  c[ra >> 2] = Xa;
                                } else Ic(Ia, va);
                                if (g) {
                                  Xa = c[wa >> 2] | 0;
                                  c[wa >> 2] = c[ua >> 2];
                                  c[ua >> 2] = Xa;
                                }
                                f = c[X >> 2] | 0;
                                if (f | 0) {
                                  Xa = ((Wa[f & 31](c[Y >> 2] | 0, c[Z >> 2] | 0) | 0) == 0) & 1;
                                  c[V >> 2] = Xa | c[V >> 2];
                                }
                                Xa = ((c[za >> 2] | 0) + 1) | 0;
                                c[za >> 2] = (Xa | 0) == (c[ya >> 2] | 0) ? 0 : Xa;
                              }
                              f = ((c[E >> 2] | 0) + 1) | 0;
                              c[E >> 2] = f;
                              if ((f | 0) >= (c[Aa >> 2] | 0)) break d;
                            }
                            if ((La | 0) == 245) {
                              if (c[Ia >> 2] | 0) {
                                i = 0;
                                break b;
                              }
                              c[Ia >> 2] = 7;
                              c[Ea >> 2] = 8544;
                              c[Ga >> 2] = 0;
                              i = 0;
                              break b;
                            } else if ((La | 0) == 267) {
                              if (c[Ia >> 2] | 0) {
                                i = 0;
                                break b;
                              }
                              c[Ia >> 2] = 7;
                              c[Ea >> 2] = 8585;
                              c[Ga >> 2] = 0;
                              i = 0;
                              break b;
                            } else if ((La | 0) == 284) {
                              if (c[Ia >> 2] | 0) {
                                i = 0;
                                break b;
                              }
                              c[Ia >> 2] = 6;
                              c[Ea >> 2] = 8620;
                              c[Ga >> 2] = 0;
                              i = 0;
                              break b;
                            }
                          }
                        while (0);
                        if ((c[Da >> 2] | 0) > 0 ? c[(Ia + 144) >> 2] | 0 : 0) {
                          i = 0;
                          break;
                        }
                        i = 1;
                      } else i = 0;
                    while (0);
                    if ((c[Da >> 2] | 0) > 0) g = ((c[(Ia + 144) >> 2] | 0) == 0) & 1;
                    else g = 1;
                    f = c[Ha >> 2] | 0;
                    if (f | 0) Ra[f & 31](Ka);
                    if (!(g & i)) break;
                    c[Ga >> 2] = 0;
                    i = 0;
                    break a;
                  }
                while (0);
                c[(Ia + 128) >> 2] = 0;
                f = (Ia + 2360) | 0;
                Bd(c[f >> 2] | 0);
                c[f >> 2] = 0;
                c[(Ia + 2364) >> 2] = 0;
                f = (Ia + 2344) | 0;
                g = c[f >> 2] | 0;
                if (g | 0) {
                  i = c[(g + 20) >> 2] | 0;
                  if (i | 0) {
                    eb(i);
                    Bd(i);
                  }
                  Bd(g);
                }
                c[f >> 2] = 0;
                Xa = (Ia + 2288) | 0;
                Bd(c[Xa >> 2] | 0);
                c[Xa >> 2] = 0;
                c[(Ia + 2292) >> 2] = 0;
                Xa = (Ia + 12) | 0;
                c[Xa >> 2] = 0;
                c[(Xa + 4) >> 2] = 0;
                c[(Xa + 8) >> 2] = 0;
                c[(Xa + 12) >> 2] = 0;
                c[(Xa + 16) >> 2] = 0;
                c[(Xa + 20) >> 2] = 0;
                c[(Xa + 24) >> 2] = 0;
                c[Ga >> 2] = 0;
              }
              i = c[Ia >> 2] | 0;
            }
          } else i = c[Ia >> 2] | 0;
        while (0);
        c[(Ia + 128) >> 2] = 0;
        f = (Ia + 2360) | 0;
        Bd(c[f >> 2] | 0);
        c[f >> 2] = 0;
        c[(Ia + 2364) >> 2] = 0;
        f = (Ia + 2344) | 0;
        g = c[f >> 2] | 0;
        if (g | 0) {
          j = c[(g + 20) >> 2] | 0;
          if (j | 0) {
            eb(j);
            Bd(j);
          }
          Bd(g);
        }
        c[f >> 2] = 0;
        Bd(c[(Ia + 2288) >> 2] | 0);
        Bd(Ia);
      } else {
        y = Ad(272) | 0;
        if (!y) {
          Xa = 1;
          l = Ma;
          return Xa | 0;
        }
        if ((c[(y + -4) >> 2] & 3) | 0) me(y | 0, 0, 272) | 0;
        c[y >> 2] = 0;
        x = (y + 4) | 0;
        c[x >> 2] = 2;
        jb();
        w = (y + 8) | 0;
        c[w >> 2] = Ka;
        c[y >> 2] = 0;
        v = c[f >> 2] | 0;
        r = c[g >> 2] | 0;
        c[(y + 36) >> 2] = r;
        s = (y + 24) | 0;
        t = s;
        c[t >> 2] = 0;
        c[(t + 4) >> 2] = 0;
        t = (y + 44) | 0;
        c[t >> 2] = 0;
        u = (y + 48) | 0;
        c[u >> 2] = 0;
        k = r >>> 0 < 8 ? r : 8;
        if (!k) {
          f = 0;
          g = 0;
        } else {
          i = 0;
          f = 0;
          g = 0;
          do {
            Xa = oe(d[(v + i) >> 0] | 0, 0, (i << 3) | 0) | 0;
            f = Xa | f;
            g = z | g;
            i = (i + 1) | 0;
          } while (i >>> 0 < k >>> 0);
        }
        q = s;
        c[q >> 2] = f;
        c[(q + 4) >> 2] = g;
        q = (y + 40) | 0;
        c[q >> 2] = k;
        c[(y + 32) >> 2] = v;
        c[t >> 2] = 8;
        if (r >>> 0 > 8) {
          Xa = ne(f | 0, g | 0, 8) | 0;
          g = z;
          i = s;
          c[i >> 2] = Xa;
          c[(i + 4) >> 2] = g;
          i = oe(d[(v + k) >> 0] | 0, 0, 56) | 0;
          Xa = i | Xa;
          g = z | g;
          i = s;
          c[i >> 2] = Xa;
          c[(i + 4) >> 2] = g;
          i = (k + 1) | 0;
          c[q >> 2] = i;
          c[t >> 2] = 0;
          j = 0;
          k = Xa;
        } else {
          j = 8;
          i = k;
          k = f;
        }
        f: do
          if ((((f & 255) | 0) == 47) & (0 == 0)) {
            m = ne(k | 0, g | 0, j | 0) | 0;
            m = m & 16383;
            f = (j + 14) | 0;
            c[t >> 2] = f;
            while (1) {
              if (i >>> 0 >= r >>> 0) {
                La = 318;
                break;
              }
              k = ne(k | 0, g | 0, 8) | 0;
              g = z;
              Xa = s;
              c[Xa >> 2] = k;
              c[(Xa + 4) >> 2] = g;
              Xa = oe(d[(v + i) >> 0] | 0, 0, 56) | 0;
              k = Xa | k;
              g = z | g;
              Xa = s;
              c[Xa >> 2] = k;
              c[(Xa + 4) >> 2] = g;
              i = (i + 1) | 0;
              c[q >> 2] = i;
              f = (f + -8) | 0;
              c[t >> 2] = f;
              if ((f | 0) <= 7) {
                La = 320;
                break;
              }
            }
            if ((La | 0) == 318)
              if (((i | 0) == (r | 0)) & ((f | 0) > 64)) {
                c[u >> 2] = 1;
                c[t >> 2] = 0;
                La = 325;
              } else La = 320;
            g: do
              if ((La | 0) == 320) {
                p = (m + 1) | 0;
                m = ne(k | 0, g | 0, (f & 63) | 0) | 0;
                m = m & 16383;
                f = (f + 14) | 0;
                c[t >> 2] = f;
                h: do
                  if ((f | 0) > 7) {
                    while (1) {
                      if (i >>> 0 >= r >>> 0) break;
                      k = ne(k | 0, g | 0, 8) | 0;
                      g = z;
                      Xa = s;
                      c[Xa >> 2] = k;
                      c[(Xa + 4) >> 2] = g;
                      Xa = oe(d[(v + i) >> 0] | 0, 0, 56) | 0;
                      k = Xa | k;
                      g = z | g;
                      Xa = s;
                      c[Xa >> 2] = k;
                      c[(Xa + 4) >> 2] = g;
                      i = (i + 1) | 0;
                      c[q >> 2] = i;
                      f = (f + -8) | 0;
                      c[t >> 2] = f;
                      if ((f | 0) <= 7) {
                        La = 326;
                        break h;
                      }
                    }
                    if (((i | 0) == (r | 0)) & ((f | 0) > 64)) {
                      La = 325;
                      break g;
                    }
                    j = (f + 1) | 0;
                    c[t >> 2] = j;
                    m = (m + 1) | 0;
                    La = 327;
                  } else La = 326;
                while (0);
                if ((La | 0) == 326) {
                  m = (m + 1) | 0;
                  j = (f + 1) | 0;
                  c[t >> 2] = j;
                  if ((f | 0) > 6) La = 327;
                }
                i: do
                  if ((La | 0) == 327) {
                    while (1) {
                      if (i >>> 0 >= r >>> 0) break;
                      k = ne(k | 0, g | 0, 8) | 0;
                      g = z;
                      Xa = s;
                      c[Xa >> 2] = k;
                      c[(Xa + 4) >> 2] = g;
                      Xa = oe(d[(v + i) >> 0] | 0, 0, 56) | 0;
                      k = Xa | k;
                      g = z | g;
                      Xa = s;
                      c[Xa >> 2] = k;
                      c[(Xa + 4) >> 2] = g;
                      i = (i + 1) | 0;
                      c[q >> 2] = i;
                      j = (j + -8) | 0;
                      c[t >> 2] = j;
                      if ((j | 0) <= 7) break i;
                    }
                    if (((i | 0) == (r | 0)) & ((j | 0) > 64)) {
                      La = 331;
                      break g;
                    }
                  }
                while (0);
                o = j & 63;
                f = (j + 3) | 0;
                c[t >> 2] = f;
                j: do
                  if ((f | 0) > 7) {
                    j = k;
                    n = g;
                    while (1) {
                      if (i >>> 0 >= r >>> 0) break;
                      Va = ne(j | 0, n | 0, 8) | 0;
                      Xa = z;
                      Sa = s;
                      c[Sa >> 2] = Va;
                      c[(Sa + 4) >> 2] = Xa;
                      Sa = oe(d[(v + i) >> 0] | 0, 0, 56) | 0;
                      j = Sa | Va;
                      n = z | Xa;
                      Xa = s;
                      c[Xa >> 2] = j;
                      c[(Xa + 4) >> 2] = n;
                      i = (i + 1) | 0;
                      c[q >> 2] = i;
                      f = (f + -8) | 0;
                      c[t >> 2] = f;
                      if ((f | 0) <= 7) break j;
                    }
                    if (((i | 0) == (r | 0)) & ((f | 0) > 64)) break g;
                  }
                while (0);
                Xa = oe(7, 0, o | 0) | 0;
                if (!((((k & Xa) | 0) == 0) & (((g & z) | 0) == 0))) {
                  La = 338;
                  break f;
                }
                c[x >> 2] = 2;
                c[Ka >> 2] = p;
                f = (Ka + 4) | 0;
                c[f >> 2] = m;
                if (!(kb(p, m, 1, y, 0) | 0)) {
                  La = 340;
                  break f;
                }
                f = Gc(c[Ka >> 2] | 0, c[f >> 2] | 0, c[(h + 20) >> 2] | 0, c[h >> 2] | 0) | 0;
                if (f | 0) break f;
                t = c[w >> 2] | 0;
                u = c[(t + 40) >> 2] | 0;
                k: do
                  if (!(c[x >> 2] | 0)) {
                    A = (y + 16) | 0;
                    B = (y + 100) | 0;
                    C = (y + 104) | 0;
                    La = 385;
                  } else {
                    r = (y + 12) | 0;
                    c[r >> 2] = c[u >> 2];
                    if (!(Rb(c[(u + 20) >> 2] | 0, t, 3) | 0)) {
                      c[y >> 2] = 2;
                      break;
                    }
                    g = c[t >> 2] | 0;
                    v = (y + 100) | 0;
                    k = c[v >> 2] | 0;
                    w = (y + 104) | 0;
                    f = c[w >> 2] | 0;
                    k = ue(f | 0, ((((f | 0) < 0) << 31) >> 31) | 0, k | 0, ((((k | 0) < 0) << 31) >> 31) | 0) | 0;
                    f = z;
                    j = g & 65535;
                    g = oe(g | 0, ((((g | 0) < 0) << 31) >> 31) | 0, 4) | 0;
                    g = le(g | 0, z | 0, j | 0, 0) | 0;
                    f = le(g | 0, z | 0, k | 0, f | 0) | 0;
                    g = z;
                    i = oe(f | 0, g | 0, 2) | 0;
                    do
                      if (((f | 0) == 0) & ((g | 0) == 0)) La = 349;
                      else {
                        if (((g >>> 0 < 0) | (((g | 0) == 0) & (f >>> 0 < 536854529))) & (((i | 0) == ((i & -4) | 0)) & ((z | 0) == 0))) {
                          La = 349;
                          break;
                        }
                        c[(y + 16) >> 2] = 0;
                      }
                    while (0);
                    do
                      if ((La | 0) == 349) {
                        f = Ad(i) | 0;
                        s = (y + 16) | 0;
                        c[s >> 2] = f;
                        if (!f) break;
                        c[(y + 20) >> 2] = f + (k << 2) + (j << 2);
                        p = (t + 92) | 0;
                        l: do
                          if (!(c[p >> 2] | 0)) La = 363;
                          else {
                            i = c[(t + 12) >> 2] | 0;
                            q = c[(t + 96) >> 2] | 0;
                            j = c[(t + 16) >> 2] | 0;
                            n = c[(t + 100) >> 2] | 0;
                            f = (((q | 0) < 0) << 31) >> 31;
                            g = oe(q | 0, f | 0, 5) | 0;
                            Va = le(g | 0, z | 0, 84, 0) | 0;
                            Xa = z;
                            f = oe(q | 0, f | 0, 2) | 0;
                            f = le(Va | 0, Xa | 0, f | 0, z | 0) | 0;
                            Xa = z;
                            if (
                              !(!(((f | 0) == 0) & ((Xa | 0) == 0))
                                ? !(
                                    ((Xa >>> 0 < 0) | (((Xa | 0) == 0) & (f >>> 0 < 2147418113))) &
                                    (((f | 0) == ((f & -4) | 0)) & ((Xa | 0) == 0))
                                  )
                                : 0)
                            )
                              La = 354;
                            do
                              if ((La | 0) == 354) {
                                o = Ad(f) | 0;
                                if (!o) break;
                                c[(y + 264) >> 2] = o;
                                c[(y + 268) >> 2] = o;
                                m = (o + 84) | 0;
                                Xa = (i | 0) < (q | 0);
                                c[o >> 2] = Xa & 1;
                                k = (j | 0) < (n | 0);
                                c[(o + 4) >> 2] = k & 1;
                                c[(o + 44) >> 2] = i;
                                c[(o + 48) >> 2] = j;
                                c[(o + 52) >> 2] = q;
                                c[(o + 56) >> 2] = n;
                                c[(o + 60) >> 2] = 0;
                                c[(o + 64) >> 2] = 0;
                                c[(o + 68) >> 2] = m + g;
                                c[(o + 72) >> 2] = 0;
                                c[(o + 8) >> 2] = 4;
                                f = Xa ? (q + -1) | 0 : i;
                                c[(o + 36) >> 2] = f;
                                g = Xa ? (i + -1) | 0 : q;
                                c[(o + 40) >> 2] = g;
                                if (!Xa) {
                                  Xa = se(0, 1, g | 0, ((((g | 0) < 0) << 31) >> 31) | 0) | 0;
                                  c[(o + 12) >> 2] = Xa;
                                }
                                i = (k << 31) >> 31;
                                g = (i + j) | 0;
                                c[(o + 28) >> 2] = g;
                                i = (i + n) | 0;
                                c[(o + 32) >> 2] = i;
                                c[(o + 24) >> 2] = k ? i : g;
                                if (!k) {
                                  f = O(g, f) | 0;
                                  f = se(0, n | 0, f | 0, ((((f | 0) < 0) << 31) >> 31) | 0) | 0;
                                  c[(o + 20) >> 2] = ((f | 0) == (f | 0)) & ((z | 0) == 0) ? f : 0;
                                  f = i;
                                }
                                Xa = se(0, 1, f | 0, ((((f | 0) < 0) << 31) >> 31) | 0) | 0;
                                c[(o + 16) >> 2] = Xa;
                                c[(o + 76) >> 2] = m;
                                c[(o + 80) >> 2] = m + ((q << 2) << 2);
                                me(m | 0, 0, (q << 5) | 0) | 0;
                                if (c[31] | 0) c[31] = 0;
                                if (!(c[p >> 2] | 0)) {
                                  La = 363;
                                  break l;
                                } else {
                                  La = 364;
                                  break l;
                                }
                              }
                            while (0);
                            c[y >> 2] = 1;
                            break k;
                          }
                        while (0);
                        if ((La | 0) == 363) {
                          f = c[r >> 2] | 0;
                          g = c[f >> 2] | 0;
                          if (((g + -7) | 0) >>> 0 < 4) La = 364;
                        }
                        if ((La | 0) == 364) {
                          if (c[27] | 0) c[27] = 0;
                          f = c[r >> 2] | 0;
                          g = c[f >> 2] | 0;
                        }
                        do
                          if (g >>> 0 >= 11) {
                            if (c[90] | 0) c[90] = 0;
                            if (!(c[(f + 28) >> 2] | 0)) break;
                            if (!(c[27] | 0)) break;
                            c[27] = 0;
                          }
                        while (0);
                        m: do
                          if (c[(y + 56) >> 2] | 0) {
                            if ((c[(y + 120) >> 2] | 0) <= 0) break;
                            i = (y + 136) | 0;
                            if (c[i >> 2] | 0) break;
                            j = c[(y + 132) >> 2] | 0;
                            f = 1 << j;
                            Xa = oe(f | 0, ((((f | 0) < 0) << 31) >> 31) | 0, 2) | 0;
                            do
                              if ((j >>> 0 < 29) & (((Xa | 0) == ((Xa & -4) | 0)) & ((z | 0) == 0))) {
                                f = f << 2;
                                if (j >>> 0 > 15) f = ((f >>> j) | 0) == 4 ? f : -1;
                                g = Ad(f) | 0;
                                if (!g) break;
                                if ((c[(g + -4) >> 2] & 3) | 0) me(g | 0, 0, f | 0) | 0;
                                c[i >> 2] = g;
                                c[(y + 140) >> 2] = 32 - j;
                                c[(y + 144) >> 2] = j;
                                break m;
                              }
                            while (0);
                            c[i >> 2] = 0;
                            c[y >> 2] = 1;
                            break k;
                          }
                        while (0);
                        c[x >> 2] = 0;
                        A = s;
                        B = v;
                        C = w;
                        La = 385;
                        break k;
                      }
                    while (0);
                    c[y >> 2] = 1;
                    c[(y + 20) >> 2] = 0;
                  }
                while (0);
                if ((La | 0) == 385 ? hb(y, c[A >> 2] | 0, c[B >> 2] | 0, c[C >> 2] | 0, c[(t + 88) >> 2] | 0, 2) | 0 : 0) {
                  c[(u + 16) >> 2] = c[(y + 116) >> 2];
                  f = 0;
                  break f;
                }
                eb(y);
                f = c[y >> 2] | 0;
                break f;
              }
            while (0);
            if ((La | 0) == 325) {
              c[u >> 2] = 1;
              c[t >> 2] = 0;
              La = 331;
            }
            if ((La | 0) == 331) {
              c[u >> 2] = 1;
              c[t >> 2] = 0;
            }
            c[u >> 2] = 1;
            c[t >> 2] = 0;
            La = 338;
          } else La = 338;
        while (0);
        if ((La | 0) == 338) {
          c[y >> 2] = 3;
          La = 340;
        }
        if ((La | 0) == 340) {
          eb(y);
          f = c[y >> 2] | 0;
        }
        eb(y);
        Bd(y);
        i = f;
      }
      if (i | 0) {
        f = c[h >> 2] | 0;
        if (!f) {
          Xa = i;
          l = Ma;
          return Xa | 0;
        }
        g = (f + 80) | 0;
        if ((c[(f + 12) >> 2] | 0) < 1) Bd(c[g >> 2] | 0);
        c[g >> 2] = 0;
        Xa = i;
        l = Ma;
        return Xa | 0;
      }
      f = c[(h + 20) >> 2] | 0;
      if (!f) {
        Xa = 0;
        l = Ma;
        return Xa | 0;
      }
      if (!(c[(f + 48) >> 2] | 0)) {
        Xa = 0;
        l = Ma;
        return Xa | 0;
      }
      i = c[h >> 2] | 0;
      if (!i) {
        Xa = 2;
        l = Ma;
        return Xa | 0;
      }
      j = ((c[(i + 8) >> 2] | 0) + -1) | 0;
      f = (i + 16) | 0;
      g = c[f >> 2] | 0;
      if ((c[i >> 2] | 0) >>> 0 < 11) {
        Xa = (i + 20) | 0;
        Va = c[Xa >> 2] | 0;
        c[f >> 2] = g + (O(Va, j) | 0);
        c[Xa >> 2] = 0 - Va;
        Xa = 0;
        l = Ma;
        return Xa | 0;
      }
      Va = (i + 32) | 0;
      Sa = c[Va >> 2] | 0;
      c[f >> 2] = g + (O(Sa, j) | 0);
      c[Va >> 2] = 0 - Sa;
      Va = j >> 1;
      f = (i + 36) | 0;
      g = c[f >> 2] | 0;
      Sa = O(g, Va) | 0;
      Xa = (i + 20) | 0;
      c[Xa >> 2] = (c[Xa >> 2] | 0) + Sa;
      c[f >> 2] = 0 - g;
      f = (i + 40) | 0;
      g = c[f >> 2] | 0;
      Va = O(g, Va) | 0;
      Xa = (i + 24) | 0;
      c[Xa >> 2] = (c[Xa >> 2] | 0) + Va;
      c[f >> 2] = 0 - g;
      f = (i + 28) | 0;
      g = c[f >> 2] | 0;
      if (!g) {
        Xa = 0;
        l = Ma;
        return Xa | 0;
      }
      Xa = (i + 44) | 0;
      Va = c[Xa >> 2] | 0;
      c[f >> 2] = g + (O(Va, j) | 0);
      c[Xa >> 2] = 0 - Va;
      Xa = 0;
      l = Ma;
      return Xa | 0;
    }
    function vd(b) {
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      if (c[(b + 52) >> 2] | 0) {
        b = 2;
        return b | 0;
      }
      d = c[b >> 2] | 0;
      if ((((c[(b + 8) >> 2] | 0) - d) | 0) >>> 0 < 8) {
        b = 2;
        return b | 0;
      }
      if ((((c[(b + 4) >> 2] | 0) - d) | 0) >>> 0 < 8) {
        b = 1;
        return b | 0;
      }
      j = Ad(60) | 0;
      if (!j) {
        b = 2;
        return b | 0;
      }
      if ((c[(j + -4) >> 2] & 3) | 0) {
        d = j;
        e = (d + 60) | 0;
        do {
          a[d >> 0] = 0;
          d = (d + 1) | 0;
        } while ((d | 0) < (e | 0));
      }
      f = xd(1, 0, b, j) | 0;
      do
        if ((f | 0) != 2) {
          d = (b + 28) | 0;
          e = c[d >> 2] | 0;
          if (((e & 16) | 0) == 0 ? ((g = (j + 52) | 0), c[g >> 2] | 0) : 0) {
            c[(j + 48) >> 2] = 0;
            c[g >> 2] = 0;
            c[(j + 16) >> 2] = 0;
          }
          if (
            ((c[(b + 24) >> 2] | 0) == 0 ? ((h = c[(j + 8) >> 2] | 0), (h | 0) > 0) : 0) ? ((i = c[(j + 12) >> 2] | 0), (i | 0) > 0) : 0
          ) {
            c[(b + 20) >> 2] = 1;
            c[(b + 32) >> 2] = h;
            c[(b + 36) >> 2] = i;
            c[d >> 2] = (c[(j + 16) >> 2] | 0 ? 16 : 0) | e;
          }
          d = (b + 56) | 0;
          e = c[d >> 2] | 0;
          i = c[e >> 2] | 0;
          if (i | 0 ? (c[(i + 36) >> 2] | 0) == 0 : 0) break;
          c[e >> 2] = j;
          j = (j + 56) | 0;
          c[j >> 2] = 0;
          c[d >> 2] = j;
          c[(b + 48) >> 2] = 1;
          b = f;
          return b | 0;
        }
      while (0);
      Bd(j);
      b = 2;
      return b | 0;
    }
    function wd(b) {
      b = b | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0;
      g = c[b >> 2] | 0;
      v = (b + 4) | 0;
      j = c[v >> 2] | 0;
      if (((j - g) | 0) >>> 0 < 8) {
        x = 1;
        return x | 0;
      }
      c[(b + 24) >> 2] = 1;
      e = (g + 4) | 0;
      c[b >> 2] = e;
      w = (b + 16) | 0;
      k = c[w >> 2] | 0;
      e = (k + e) | 0;
      f = d[e >> 0] | 0;
      e = ((d[(e + 1) >> 0] | 0) << 8) | f | ((((d[(e + 3) >> 0] | 0) << 8) | (d[(e + 2) >> 0] | 0)) << 16);
      h = (g + 8) | 0;
      c[b >> 2] = h;
      if (((e + -10) | 0) >>> 0 > 4294967276) {
        x = 2;
        return x | 0;
      }
      e = (e + (f & 1)) | 0;
      t = (b + 8) | 0;
      i = c[t >> 2] | 0;
      if (((i - h) | 0) >>> 0 < e >>> 0) {
        x = 2;
        return x | 0;
      }
      if (((j - h) | 0) >>> 0 < e >>> 0) {
        x = 1;
        return x | 0;
      }
      f = d[(k + h) >> 0] | 0;
      u = (b + 28) | 0;
      c[u >> 2] = f;
      r = (g + 12) | 0;
      c[b >> 2] = r;
      r = (k + r) | 0;
      r = ((d[(r + 1) >> 0] | 0) << 8) | (d[r >> 0] | 0) | ((d[(r + 2) >> 0] | 0) << 16);
      s = (g + 15) | 0;
      c[b >> 2] = s;
      r = (r + 1) | 0;
      c[(b + 32) >> 2] = r;
      s = (k + s) | 0;
      s = ((d[(s + 1) >> 0] | 0) << 8) | (d[s >> 0] | 0) | ((d[(s + 2) >> 0] | 0) << 16);
      c[b >> 2] = g + 18;
      s = (s + 1) | 0;
      c[(b + 36) >> 2] = s;
      p = O(s, r) | 0;
      q = (r | 0) == 0;
      if (q ? 0 : (((p >>> 0) / ((q ? 1 : r) >>> 0)) | 0 | 0) != (s | 0)) {
        x = 2;
        return x | 0;
      }
      e = (h + e) | 0;
      c[b >> 2] = e;
      c[(b + 20) >> 2] = 1;
      if (((i - e) | 0) >>> 0 < 8) {
        x = 2;
        return x | 0;
      }
      if (((j - e) | 0) >>> 0 < 8) {
        x = 1;
        return x | 0;
      }
      n = ((f & 2) | 0) != 0;
      o = (b + 64) | 0;
      p = (b + 44) | 0;
      q = (b + 40) | 0;
      r = (b + 48) | 0;
      s = (b + 56) | 0;
      g = 0;
      h = i;
      i = e;
      a: while (1) {
        f = (k + i) | 0;
        f = ((d[(f + 1) >> 0] | 0) << 8) | (d[f >> 0] | 0) | ((((d[(f + 3) >> 0] | 0) << 8) | (d[(f + 2) >> 0] | 0)) << 16);
        l = (i + 4) | 0;
        c[b >> 2] = l;
        l = (k + l) | 0;
        m = d[l >> 0] | 0;
        l = ((d[(l + 1) >> 0] | 0) << 8) | m | ((((d[(l + 3) >> 0] | 0) << 8) | (d[(l + 2) >> 0] | 0)) << 16);
        e = (i + 8) | 0;
        c[b >> 2] = e;
        m = (l + (m & 1)) | 0;
        if (l >>> 0 > 4294967286) {
          e = 2;
          x = 45;
          break;
        }
        h = (h - e) | 0;
        if (h >>> 0 < m >>> 0) {
          e = 2;
          x = 45;
          break;
        }
        b: do
          if ((f | 0) < 1213221953) {
            if ((f | 0) < 1179211845) {
              if ((f | 0) < 542133592)
                switch (f | 0) {
                  case 540561494: {
                    x = 12;
                    break b;
                  }
                  default: {
                    f = 1;
                    x = 35;
                    break b;
                  }
                }
              switch (f | 0) {
                case 542133592:
                  break;
                default: {
                  f = 1;
                  x = 35;
                  break b;
                }
              }
              f = ((c[u >> 2] | 0) >>> 2) & 1;
              x = 35;
              break;
            }
            if ((f | 0) < 1179471425) {
              switch (f | 0) {
                case 1179211845:
                  break;
                default: {
                  f = 1;
                  x = 35;
                  break b;
                }
              }
              f = ((c[u >> 2] | 0) >>> 3) & 1;
              x = 35;
              break;
            }
            switch (f | 0) {
              case 1179471425:
                break;
              default: {
                f = 1;
                x = 35;
                break b;
              }
            }
            if (!g) {
              e = 2;
              x = 45;
              break a;
            }
            i = ((c[u >> 2] & 2) | 0) != 0;
            f = (m + -16) | 0;
            if (!((h >>> 0 < 16) | (m >>> 0 < 16)))
              if (((j - e) | 0) >>> 0 >= 16) {
                h = Ad(60) | 0;
                if (!h) e = 2;
                else {
                  if ((c[(h + -4) >> 2] & 3) | 0) {
                    j = h;
                    k = (j + 60) | 0;
                    do {
                      a[j >> 0] = 0;
                      j = (j + 1) | 0;
                    } while ((j | 0) < (k | 0));
                  }
                  e = c[w >> 2] | 0;
                  k = c[b >> 2] | 0;
                  l = (e + k) | 0;
                  l = ((d[(l + 1) >> 0] | 0) << 8) | (d[l >> 0] | 0) | ((d[(l + 2) >> 0] | 0) << 16);
                  m = (k + 3) | 0;
                  c[b >> 2] = m;
                  c[h >> 2] = l << 1;
                  m = (e + m) | 0;
                  m = ((d[(m + 1) >> 0] | 0) << 8) | (d[m >> 0] | 0) | ((d[(m + 2) >> 0] | 0) << 16);
                  l = (k + 6) | 0;
                  c[b >> 2] = l;
                  c[(h + 4) >> 2] = m << 1;
                  l = (e + l) | 0;
                  l = ((d[(l + 1) >> 0] | 0) << 8) | (d[l >> 0] | 0) | ((d[(l + 2) >> 0] | 0) << 16);
                  m = (k + 9) | 0;
                  c[b >> 2] = m;
                  l = (l + 1) | 0;
                  c[(h + 8) >> 2] = l;
                  m = (e + m) | 0;
                  m = ((d[(m + 1) >> 0] | 0) << 8) | (d[m >> 0] | 0) | ((d[(m + 2) >> 0] | 0) << 16);
                  y = (k + 12) | 0;
                  c[b >> 2] = y;
                  m = (m + 1) | 0;
                  c[(h + 12) >> 2] = m;
                  y = (e + y) | 0;
                  y = ((d[(y + 1) >> 0] | 0) << 8) | (d[y >> 0] | 0) | ((d[(y + 2) >> 0] | 0) << 16);
                  j = (k + 15) | 0;
                  c[b >> 2] = j;
                  c[(h + 20) >> 2] = y;
                  j = a[(e + j) >> 0] | 0;
                  c[b >> 2] = k + 16;
                  j = j & 255;
                  c[(h + 24) >> 2] = j & 1;
                  c[(h + 28) >> 2] = (j >>> 1) & 1;
                  j = O(m, l) | 0;
                  k = (l | 0) == 0;
                  if (k ? 0 : (((j >>> 0) / ((k ? 1 : l) >>> 0)) | 0 | 0) != (m | 0)) {
                    Bd(h);
                    e = 2;
                    break;
                  }
                  e = xd(((c[r >> 2] | 0) + 1) | 0, f, b, h) | 0;
                  do
                    if (i & ((e | 0) != 2)) {
                      if ((c[(h + 32) >> 2] | 0) <= 0) break;
                      f = c[s >> 2] | 0;
                      y = c[f >> 2] | 0;
                      if (y | 0 ? (c[(y + 36) >> 2] | 0) == 0 : 0) {
                        e = 2;
                        break;
                      }
                      c[f >> 2] = h;
                      y = (h + 56) | 0;
                      c[y >> 2] = 0;
                      c[s >> 2] = y;
                      c[r >> 2] = (c[r >> 2] | 0) + 1;
                      break b;
                    }
                  while (0);
                  Bd(h);
                }
              } else e = 1;
            else e = 2;
          } else {
            if ((f | 0) < 1296649793)
              if ((f | 0) < 1278758998)
                switch (f | 0) {
                  case 1213221953: {
                    x = 12;
                    break b;
                  }
                  default: {
                    f = 1;
                    x = 35;
                    break b;
                  }
                }
              else
                switch (f | 0) {
                  case 1278758998: {
                    x = 12;
                    break b;
                  }
                  default: {
                    f = 1;
                    x = 35;
                    break b;
                  }
                }
            if ((f | 0) >= 1346585417) {
              if ((f | 0) >= 1480085590)
                switch (f | 0) {
                  case 1480085590: {
                    e = 2;
                    x = 45;
                    break a;
                  }
                  default: {
                    f = 1;
                    x = 35;
                    break b;
                  }
                }
              switch (f | 0) {
                case 1346585417:
                  break;
                default: {
                  f = 1;
                  x = 35;
                  break b;
                }
              }
              f = ((c[u >> 2] | 0) >>> 5) & 1;
              x = 35;
              break;
            }
            switch (f | 0) {
              case 1296649793:
                break;
              default: {
                f = 1;
                x = 35;
                break b;
              }
            }
            if (m >>> 0 < 6) {
              e = 2;
              x = 45;
              break a;
            }
            if (((j - e) | 0) >>> 0 >= m >>> 0)
              if (!g) {
                y = (k + e) | 0;
                y = ((d[(y + 1) >> 0] | 0) << 8) | (d[y >> 0] | 0) | ((((d[(y + 3) >> 0] | 0) << 8) | (d[(y + 2) >> 0] | 0)) << 16);
                g = (i + 12) | 0;
                c[b >> 2] = g;
                c[p >> 2] = y;
                g = (k + g) | 0;
                c[q >> 2] = ((d[(g + 1) >> 0] | 0) << 8) | (d[g >> 0] | 0);
                c[b >> 2] = m + e;
                g = 1;
                e = 0;
              } else {
                f = 0;
                x = 35;
              }
            else e = 1;
          }
        while (0);
        if ((x | 0) == 12) {
          x = 0;
          if (n | ((g | 0) > 0)) {
            e = 2;
            x = 45;
            break;
          }
          c[b >> 2] = i;
          e = vd(b) | 0;
        } else if ((x | 0) == 35) {
          x = 0;
          if (m >>> 0 > ((j - e) | 0) >>> 0) e = 1;
          else {
            if (f) {
              e = Ad(12) | 0;
              if (!e) {
                e = 2;
                x = 45;
                break;
              }
              if ((c[(e + -4) >> 2] & 3) | 0) {
                j = e;
                k = (j + 12) | 0;
                do {
                  a[j >> 0] = 0;
                  j = (j + 1) | 0;
                } while ((j | 0) < (k | 0));
              }
              c[e >> 2] = i;
              c[(e + 4) >> 2] = l + 8;
              c[c[o >> 2] >> 2] = e;
              e = (e + 8) | 0;
              c[e >> 2] = 0;
              c[o >> 2] = e;
              e = c[b >> 2] | 0;
            }
            c[b >> 2] = e + m;
            e = 0;
          }
        }
        i = c[b >> 2] | 0;
        h = c[t >> 2] | 0;
        if ((i | 0) == (h | 0)) {
          x = 45;
          break;
        }
        f = c[v >> 2] | 0;
        e = ((f - i) | 0) >>> 0 < 8 ? 1 : e;
        if (e | 0) {
          x = 45;
          break;
        }
        j = f;
        k = c[w >> 2] | 0;
      }
      if ((x | 0) == 45) return e | 0;
      return 0;
    }
    function xd(a, b, e, f) {
      a = a | 0;
      b = b | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = 0,
        K = 0;
      K = l;
      l = (l + 48) | 0;
      I = K;
      h = c[e >> 2] | 0;
      H = (e + 4) | 0;
      g = c[H >> 2] | 0;
      G = (g - h) | 0;
      if ((G >>> 0 < 8) | (G >>> 0 < b >>> 0)) {
        J = 1;
        l = K;
        return J | 0;
      }
      F = (e + 16) | 0;
      x = (e + 8) | 0;
      G = (f + 48) | 0;
      y = (f + 52) | 0;
      z = (f + 16) | 0;
      A = (f + 32) | 0;
      v = (I + 4) | 0;
      w = (I + 8) | 0;
      B = (f + 40) | 0;
      C = (f + 44) | 0;
      D = (f + 8) | 0;
      E = (f + 12) | 0;
      s = (f + 36) | 0;
      t = (I + 12) | 0;
      u = (I + 16) | 0;
      j = 0;
      i = 0;
      r = 0;
      b = 0;
      a: while (1) {
        k = c[F >> 2] | 0;
        p = (k + h) | 0;
        m = ((d[(p + 1) >> 0] | 0) << 8) | (d[p >> 0] | 0) | ((((d[(p + 3) >> 0] | 0) << 8) | (d[(p + 2) >> 0] | 0)) << 16);
        f = (h + 4) | 0;
        c[e >> 2] = f;
        f = (k + f) | 0;
        k = d[f >> 0] | 0;
        f = ((d[(f + 1) >> 0] | 0) << 8) | k | ((((d[(f + 3) >> 0] | 0) << 8) | (d[(f + 2) >> 0] | 0)) << 16);
        n = (h + 8) | 0;
        c[e >> 2] = n;
        k = (f + (k & 1)) | 0;
        o = (g - n) | 0;
        g = k >>> 0 > o >>> 0;
        o = g ? o : k;
        q = (o + 8) | 0;
        if (f >>> 0 > 4294967286) {
          b = 2;
          J = 20;
          break;
        }
        f = c[x >> 2] | 0;
        if (((f - n) | 0) >>> 0 < k >>> 0) {
          b = 2;
          J = 20;
          break;
        }
        b = g ? 1 : b;
        b: do
          if ((m | 0) >= 1213221953) {
            if ((m | 0) >= 1278758998) {
              switch (m | 0) {
                case 1278758998:
                  break;
                default: {
                  J = 15;
                  break b;
                }
              }
              if ((j | 0) > 0) {
                b = 2;
                J = 20;
                break a;
              } else {
                J = 9;
                break;
              }
            }
            switch (m | 0) {
              case 1213221953:
                break;
              default: {
                J = 15;
                break b;
              }
            }
            if (!j) {
              c[G >> 2] = h;
              c[y >> 2] = q;
              c[z >> 2] = 1;
              c[A >> 2] = a;
              h = (o + n) | 0;
              c[e >> 2] = h;
              j = 1;
              g = r;
            } else J = 15;
          } else
            switch (m | 0) {
              case 540561494: {
                J = 9;
                break;
              }
              default:
                J = 15;
            }
        while (0);
        if ((J | 0) == 9) {
          J = 0;
          if (!i) {
            if (!p) {
              b = 2;
              J = 13;
              break;
            }
            f = I;
            g = (f + 40) | 0;
            do {
              c[f >> 2] = 0;
              f = (f + 4) | 0;
            } while ((f | 0) < (g | 0));
            f = nd(p, q, I, v, w, t, u, 0) | 0;
            if (((b | 0) == 1) & ((f | 0) == 7)) {
              b = 1;
              J = 13;
              break;
            }
            if (f | 0) {
              b = 2;
              J = 13;
              break;
            }
            f = c[I >> 2] | 0;
            i = c[v >> 2] | 0;
            g = c[w >> 2] | 0;
            c[B >> 2] = h;
            c[C >> 2] = q;
            c[D >> 2] = f;
            c[E >> 2] = i;
            c[z >> 2] = c[z >> 2] | g;
            c[A >> 2] = a;
            c[s >> 2] = ((b | 0) == 0) & 1;
            h = ((c[e >> 2] | 0) + o) | 0;
            c[e >> 2] = h;
            g = r;
            i = 1;
            f = c[x >> 2] | 0;
          } else J = 15;
        }
        if ((J | 0) == 15) {
          J = 0;
          c[e >> 2] = h;
          g = 1;
        }
        if ((h | 0) == (f | 0)) f = 1;
        else {
          f = g;
          b = (((c[H >> 2] | 0) - h) | 0) >>> 0 < 8 ? 1 : b;
        }
        if (f | b | 0) {
          J = 20;
          break;
        }
        r = f;
        g = c[H >> 2] | 0;
      }
      if ((J | 0) == 13) {
        J = b;
        l = K;
        return J | 0;
      } else if ((J | 0) == 20) {
        l = K;
        return b | 0;
      }
      return 0;
    }
    function yd(a) {
      a = a | 0;
      var b = 0,
        d = 0;
      b = c[(a + 52) >> 2] | 0;
      d = c[(a + 20) >> 2] | 0;
      if (!d) {
        d = 1;
        return d | 0;
      }
      if ((c[(a + 32) >> 2] | 0) < 1) {
        d = 0;
        return d | 0;
      }
      if ((c[(a + 36) >> 2] | 0) < 1) {
        d = 0;
        return d | 0;
      }
      if (((b | 0) == 0) & ((d | 0) == 2)) {
        d = 0;
        return d | 0;
      }
      if ((c[(b + 8) >> 2] | 0) < 1) {
        d = 0;
        return d | 0;
      } else return ((c[(b + 12) >> 2] | 0) > 0) | 0;
      return 0;
    }
    function zd(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      f = c[(a + 28) >> 2] | 0;
      d = c[(a + 52) >> 2] | 0;
      e = c[(a + 20) >> 2] | 0;
      if (!e) {
        j = 1;
        return j | 0;
      }
      h = c[(a + 32) >> 2] | 0;
      if ((h | 0) < 1) {
        j = 0;
        return j | 0;
      }
      i = c[(a + 36) >> 2] | 0;
      if ((i | 0) < 1) {
        j = 0;
        return j | 0;
      }
      if ((c[(a + 40) >> 2] | 0) < 0) {
        j = 0;
        return j | 0;
      }
      if (!((((f & -63) | 0) == 0) & (((d | 0) != 0) | ((e | 0) != 2)))) {
        j = 0;
        return j | 0;
      }
      if (!d) {
        j = 1;
        return j | 0;
      }
      g = (e | 0) == 2;
      a = c[(d + 32) >> 2] | 0;
      if (!(f & 2)) {
        a: while (1) {
          if ((a | 0) > 1) {
            d = 0;
            a = 53;
            break;
          }
          while (1) {
            e = (d + 40) | 0;
            f = (d + 48) | 0;
            if (!(c[(d + 36) >> 2] | 0)) {
              if (g) {
                d = 0;
                a = 53;
                break a;
              }
              if ((c[(d + 52) >> 2] | 0 ? c[(d + 44) >> 2] | 0 : 0) ? (c[f >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0 : 0) {
                d = 0;
                a = 53;
                break a;
              }
              if (c[(d + 56) >> 2] | 0) {
                d = 0;
                a = 53;
                break a;
              }
              e = c[(d + 8) >> 2] | 0;
              if ((e | 0) <= 0) {
                d = 1;
                a = 53;
                break a;
              }
              f = c[(d + 12) >> 2] | 0;
              if ((f | 0) <= 0) {
                d = 1;
                a = 53;
                break a;
              }
            } else {
              if (!(c[(d + 52) >> 2] | 0)) {
                if (!(c[(d + 44) >> 2] | 0)) {
                  d = 0;
                  a = 53;
                  break a;
                }
              } else if ((c[f >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) {
                d = 0;
                a = 53;
                break a;
              }
              e = c[(d + 8) >> 2] | 0;
              if ((e | 0) < 1) {
                d = 0;
                a = 53;
                break a;
              }
              f = c[(d + 12) >> 2] | 0;
              if ((f | 0) < 1) {
                d = 0;
                a = 53;
                break a;
              }
            }
            if (c[d >> 2] | 0) {
              d = 0;
              a = 53;
              break a;
            }
            if (!(((f | 0) == (i | 0)) & (((e | 0) == (h | 0)) & ((c[(d + 4) >> 2] | 0) == 0)))) {
              d = 0;
              a = 53;
              break a;
            }
            d = c[(d + 56) >> 2] | 0;
            if (!d) {
              d = 1;
              a = 53;
              break a;
            }
            e = c[(d + 32) >> 2] | 0;
            if ((e | 0) != (a | 0)) {
              a = e;
              continue a;
            }
          }
        }
        if ((a | 0) == 53) return d | 0;
      } else {
        b = d;
        j = a;
      }
      b: while (1) {
        if (g)
          while (1) {
            if (!(c[(b + 36) >> 2] | 0)) {
              d = 0;
              a = 53;
              break b;
            }
            if (!(c[(b + 52) >> 2] | 0)) {
              if (!(c[(b + 44) >> 2] | 0)) {
                d = 0;
                a = 53;
                break b;
              }
            } else if ((c[(b + 48) >> 2] | 0) >>> 0 > (c[(b + 40) >> 2] | 0) >>> 0) {
              d = 0;
              a = 53;
              break b;
            }
            d = c[(b + 8) >> 2] | 0;
            if ((d | 0) < 1) {
              d = 0;
              a = 53;
              break b;
            }
            a = c[(b + 12) >> 2] | 0;
            if ((a | 0) < 1) {
              d = 0;
              a = 53;
              break b;
            }
            e = c[b >> 2] | 0;
            if ((e | 0) < 0) {
              d = 0;
              a = 53;
              break b;
            }
            f = c[(b + 4) >> 2] | 0;
            if ((((e + d) | 0) > (h | 0)) | ((f | 0) < 0) | (((f + a) | 0) > (i | 0))) {
              d = 0;
              a = 53;
              break b;
            }
            b = c[(b + 56) >> 2] | 0;
            if (!b) {
              d = 1;
              a = 53;
              break b;
            }
            d = c[(b + 32) >> 2] | 0;
            if ((d | 0) != (j | 0)) {
              j = d;
              continue b;
            }
          }
        while (1) {
          d = (b + 40) | 0;
          a = (b + 48) | 0;
          e = (c[(b + 52) >> 2] | 0) == 0;
          if (!(c[(b + 36) >> 2] | 0)) {
            if ((!e ? c[(b + 44) >> 2] | 0 : 0) ? (c[a >> 2] | 0) >>> 0 > (c[d >> 2] | 0) >>> 0 : 0) {
              d = 0;
              a = 53;
              break b;
            }
            if (c[(b + 56) >> 2] | 0) {
              d = 0;
              a = 53;
              break b;
            }
            d = c[(b + 8) >> 2] | 0;
            if ((d | 0) <= 0) {
              d = 1;
              a = 53;
              break b;
            }
            a = c[(b + 12) >> 2] | 0;
            if ((a | 0) <= 0) {
              d = 1;
              a = 53;
              break b;
            }
          } else {
            if (e) {
              if (!(c[(b + 44) >> 2] | 0)) {
                d = 0;
                a = 53;
                break b;
              }
            } else if ((c[a >> 2] | 0) >>> 0 > (c[d >> 2] | 0) >>> 0) {
              d = 0;
              a = 53;
              break b;
            }
            d = c[(b + 8) >> 2] | 0;
            if ((d | 0) < 1) {
              d = 0;
              a = 53;
              break b;
            }
            a = c[(b + 12) >> 2] | 0;
            if ((a | 0) < 1) {
              d = 0;
              a = 53;
              break b;
            }
          }
          e = c[b >> 2] | 0;
          if ((e | 0) < 0) {
            d = 0;
            a = 53;
            break b;
          }
          f = c[(b + 4) >> 2] | 0;
          if ((((e + d) | 0) > (h | 0)) | ((f | 0) < 0) | (((f + a) | 0) > (i | 0))) {
            d = 0;
            a = 53;
            break b;
          }
          b = c[(b + 56) >> 2] | 0;
          if (!b) {
            d = 1;
            a = 53;
            break b;
          }
          d = c[(b + 32) >> 2] | 0;
          if ((d | 0) != (j | 0)) {
            j = d;
            continue b;
          }
        }
      }
      if ((a | 0) == 53) return d | 0;
      return 0;
    }
    function Ad(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0;
      x = l;
      l = (l + 16) | 0;
      o = x;
      do
        if (a >>> 0 < 245) {
          k = a >>> 0 < 11 ? 16 : (a + 11) & -8;
          a = k >>> 3;
          n = c[2905] | 0;
          d = n >>> a;
          if ((d & 3) | 0) {
            b = (((d & 1) ^ 1) + a) | 0;
            a = (11660 + ((b << 1) << 2)) | 0;
            d = (a + 8) | 0;
            e = c[d >> 2] | 0;
            f = (e + 8) | 0;
            g = c[f >> 2] | 0;
            if ((a | 0) == (g | 0)) c[2905] = n & ~(1 << b);
            else {
              c[(g + 12) >> 2] = a;
              c[d >> 2] = g;
            }
            w = b << 3;
            c[(e + 4) >> 2] = w | 3;
            w = (e + w + 4) | 0;
            c[w >> 2] = c[w >> 2] | 1;
            w = f;
            l = x;
            return w | 0;
          }
          m = c[2907] | 0;
          if (k >>> 0 > m >>> 0) {
            if (d | 0) {
              b = 2 << a;
              b = (d << a) & (b | (0 - b));
              b = ((b & (0 - b)) + -1) | 0;
              h = (b >>> 12) & 16;
              b = b >>> h;
              d = (b >>> 5) & 8;
              b = b >>> d;
              f = (b >>> 2) & 4;
              b = b >>> f;
              a = (b >>> 1) & 2;
              b = b >>> a;
              e = (b >>> 1) & 1;
              e = ((d | h | f | a | e) + (b >>> e)) | 0;
              b = (11660 + ((e << 1) << 2)) | 0;
              a = (b + 8) | 0;
              f = c[a >> 2] | 0;
              h = (f + 8) | 0;
              d = c[h >> 2] | 0;
              if ((b | 0) == (d | 0)) {
                a = n & ~(1 << e);
                c[2905] = a;
              } else {
                c[(d + 12) >> 2] = b;
                c[a >> 2] = d;
                a = n;
              }
              g = ((e << 3) - k) | 0;
              c[(f + 4) >> 2] = k | 3;
              e = (f + k) | 0;
              c[(e + 4) >> 2] = g | 1;
              c[(e + g) >> 2] = g;
              if (m | 0) {
                f = c[2910] | 0;
                b = m >>> 3;
                d = (11660 + ((b << 1) << 2)) | 0;
                b = 1 << b;
                if (!(a & b)) {
                  c[2905] = a | b;
                  b = d;
                  a = (d + 8) | 0;
                } else {
                  a = (d + 8) | 0;
                  b = c[a >> 2] | 0;
                }
                c[a >> 2] = f;
                c[(b + 12) >> 2] = f;
                c[(f + 8) >> 2] = b;
                c[(f + 12) >> 2] = d;
              }
              c[2907] = g;
              c[2910] = e;
              w = h;
              l = x;
              return w | 0;
            }
            i = c[2906] | 0;
            if (i) {
              d = ((i & (0 - i)) + -1) | 0;
              h = (d >>> 12) & 16;
              d = d >>> h;
              g = (d >>> 5) & 8;
              d = d >>> g;
              j = (d >>> 2) & 4;
              d = d >>> j;
              e = (d >>> 1) & 2;
              d = d >>> e;
              a = (d >>> 1) & 1;
              a = c[(11924 + (((g | h | j | e | a) + (d >>> a)) << 2)) >> 2] | 0;
              d = ((c[(a + 4) >> 2] & -8) - k) | 0;
              e = c[(a + 16 + ((((c[(a + 16) >> 2] | 0) == 0) & 1) << 2)) >> 2] | 0;
              if (!e) {
                j = a;
                g = d;
              } else {
                do {
                  h = ((c[(e + 4) >> 2] & -8) - k) | 0;
                  j = h >>> 0 < d >>> 0;
                  d = j ? h : d;
                  a = j ? e : a;
                  e = c[(e + 16 + ((((c[(e + 16) >> 2] | 0) == 0) & 1) << 2)) >> 2] | 0;
                } while ((e | 0) != 0);
                j = a;
                g = d;
              }
              h = (j + k) | 0;
              if (j >>> 0 < h >>> 0) {
                f = c[(j + 24) >> 2] | 0;
                b = c[(j + 12) >> 2] | 0;
                do
                  if ((b | 0) == (j | 0)) {
                    a = (j + 20) | 0;
                    b = c[a >> 2] | 0;
                    if (!b) {
                      a = (j + 16) | 0;
                      b = c[a >> 2] | 0;
                      if (!b) {
                        e = 0;
                        break;
                      }
                    }
                    while (1) {
                      d = (b + 20) | 0;
                      e = c[d >> 2] | 0;
                      if (e | 0) {
                        b = e;
                        a = d;
                        continue;
                      }
                      d = (b + 16) | 0;
                      e = c[d >> 2] | 0;
                      if (!e) break;
                      else {
                        b = e;
                        a = d;
                      }
                    }
                    c[a >> 2] = 0;
                    e = b;
                  } else {
                    e = c[(j + 8) >> 2] | 0;
                    c[(e + 12) >> 2] = b;
                    c[(b + 8) >> 2] = e;
                    e = b;
                  }
                while (0);
                do
                  if (f | 0) {
                    b = c[(j + 28) >> 2] | 0;
                    a = (11924 + (b << 2)) | 0;
                    d = (e | 0) == 0;
                    if ((j | 0) == (c[a >> 2] | 0)) {
                      c[a >> 2] = e;
                      if (d) {
                        c[2906] = i & ~(1 << b);
                        break;
                      }
                    } else {
                      c[(f + 16 + ((((c[(f + 16) >> 2] | 0) != (j | 0)) & 1) << 2)) >> 2] = e;
                      if (d) break;
                    }
                    c[(e + 24) >> 2] = f;
                    b = c[(j + 16) >> 2] | 0;
                    if (b | 0) {
                      c[(e + 16) >> 2] = b;
                      c[(b + 24) >> 2] = e;
                    }
                    b = c[(j + 20) >> 2] | 0;
                    if (b | 0) {
                      c[(e + 20) >> 2] = b;
                      c[(b + 24) >> 2] = e;
                    }
                  }
                while (0);
                if (g >>> 0 < 16) {
                  w = (g + k) | 0;
                  c[(j + 4) >> 2] = w | 3;
                  w = (j + w + 4) | 0;
                  c[w >> 2] = c[w >> 2] | 1;
                } else {
                  c[(j + 4) >> 2] = k | 3;
                  c[(h + 4) >> 2] = g | 1;
                  c[(h + g) >> 2] = g;
                  if (m | 0) {
                    e = c[2910] | 0;
                    b = m >>> 3;
                    d = (11660 + ((b << 1) << 2)) | 0;
                    b = 1 << b;
                    if (!(b & n)) {
                      c[2905] = b | n;
                      b = d;
                      a = (d + 8) | 0;
                    } else {
                      a = (d + 8) | 0;
                      b = c[a >> 2] | 0;
                    }
                    c[a >> 2] = e;
                    c[(b + 12) >> 2] = e;
                    c[(e + 8) >> 2] = b;
                    c[(e + 12) >> 2] = d;
                  }
                  c[2907] = g;
                  c[2910] = h;
                }
                w = (j + 8) | 0;
                l = x;
                return w | 0;
              } else n = k;
            } else n = k;
          } else n = k;
        } else if (a >>> 0 <= 4294967231) {
          a = (a + 11) | 0;
          k = a & -8;
          j = c[2906] | 0;
          if (j) {
            e = (0 - k) | 0;
            a = a >>> 8;
            if (a)
              if (k >>> 0 > 16777215) i = 31;
              else {
                n = (((a + 1048320) | 0) >>> 16) & 8;
                v = a << n;
                m = (((v + 520192) | 0) >>> 16) & 4;
                v = v << m;
                i = (((v + 245760) | 0) >>> 16) & 2;
                i = (14 - (m | n | i) + ((v << i) >>> 15)) | 0;
                i = ((k >>> ((i + 7) | 0)) & 1) | (i << 1);
              }
            else i = 0;
            d = c[(11924 + (i << 2)) >> 2] | 0;
            a: do
              if (!d) {
                d = 0;
                a = 0;
                v = 57;
              } else {
                a = 0;
                h = k << ((i | 0) == 31 ? 0 : (25 - (i >>> 1)) | 0);
                g = 0;
                while (1) {
                  f = ((c[(d + 4) >> 2] & -8) - k) | 0;
                  if (f >>> 0 < e >>> 0)
                    if (!f) {
                      a = d;
                      e = 0;
                      f = d;
                      v = 61;
                      break a;
                    } else {
                      a = d;
                      e = f;
                    }
                  f = c[(d + 20) >> 2] | 0;
                  d = c[(d + 16 + ((h >>> 31) << 2)) >> 2] | 0;
                  g = ((f | 0) == 0) | ((f | 0) == (d | 0)) ? g : f;
                  f = (d | 0) == 0;
                  if (f) {
                    d = g;
                    v = 57;
                    break;
                  } else h = h << ((f ^ 1) & 1);
                }
              }
            while (0);
            if ((v | 0) == 57) {
              if (((d | 0) == 0) & ((a | 0) == 0)) {
                a = 2 << i;
                a = (a | (0 - a)) & j;
                if (!a) {
                  n = k;
                  break;
                }
                n = ((a & (0 - a)) + -1) | 0;
                h = (n >>> 12) & 16;
                n = n >>> h;
                g = (n >>> 5) & 8;
                n = n >>> g;
                i = (n >>> 2) & 4;
                n = n >>> i;
                m = (n >>> 1) & 2;
                n = n >>> m;
                d = (n >>> 1) & 1;
                a = 0;
                d = c[(11924 + (((g | h | i | m | d) + (n >>> d)) << 2)) >> 2] | 0;
              }
              if (!d) {
                i = a;
                h = e;
              } else {
                f = d;
                v = 61;
              }
            }
            if ((v | 0) == 61)
              while (1) {
                v = 0;
                d = ((c[(f + 4) >> 2] & -8) - k) | 0;
                n = d >>> 0 < e >>> 0;
                d = n ? d : e;
                a = n ? f : a;
                f = c[(f + 16 + ((((c[(f + 16) >> 2] | 0) == 0) & 1) << 2)) >> 2] | 0;
                if (!f) {
                  i = a;
                  h = d;
                  break;
                } else {
                  e = d;
                  v = 61;
                }
              }
            if ((i | 0) != 0 ? h >>> 0 < (((c[2907] | 0) - k) | 0) >>> 0 : 0) {
              g = (i + k) | 0;
              if (i >>> 0 >= g >>> 0) {
                w = 0;
                l = x;
                return w | 0;
              }
              f = c[(i + 24) >> 2] | 0;
              b = c[(i + 12) >> 2] | 0;
              do
                if ((b | 0) == (i | 0)) {
                  a = (i + 20) | 0;
                  b = c[a >> 2] | 0;
                  if (!b) {
                    a = (i + 16) | 0;
                    b = c[a >> 2] | 0;
                    if (!b) {
                      b = 0;
                      break;
                    }
                  }
                  while (1) {
                    d = (b + 20) | 0;
                    e = c[d >> 2] | 0;
                    if (e | 0) {
                      b = e;
                      a = d;
                      continue;
                    }
                    d = (b + 16) | 0;
                    e = c[d >> 2] | 0;
                    if (!e) break;
                    else {
                      b = e;
                      a = d;
                    }
                  }
                  c[a >> 2] = 0;
                } else {
                  w = c[(i + 8) >> 2] | 0;
                  c[(w + 12) >> 2] = b;
                  c[(b + 8) >> 2] = w;
                }
              while (0);
              do
                if (f) {
                  a = c[(i + 28) >> 2] | 0;
                  d = (11924 + (a << 2)) | 0;
                  e = (b | 0) == 0;
                  if ((i | 0) == (c[d >> 2] | 0)) {
                    c[d >> 2] = b;
                    if (e) {
                      e = j & ~(1 << a);
                      c[2906] = e;
                      break;
                    }
                  } else {
                    c[(f + 16 + ((((c[(f + 16) >> 2] | 0) != (i | 0)) & 1) << 2)) >> 2] = b;
                    if (e) {
                      e = j;
                      break;
                    }
                  }
                  c[(b + 24) >> 2] = f;
                  a = c[(i + 16) >> 2] | 0;
                  if (a | 0) {
                    c[(b + 16) >> 2] = a;
                    c[(a + 24) >> 2] = b;
                  }
                  a = c[(i + 20) >> 2] | 0;
                  if (a) {
                    c[(b + 20) >> 2] = a;
                    c[(a + 24) >> 2] = b;
                    e = j;
                  } else e = j;
                } else e = j;
              while (0);
              do
                if (h >>> 0 >= 16) {
                  c[(i + 4) >> 2] = k | 3;
                  c[(g + 4) >> 2] = h | 1;
                  c[(g + h) >> 2] = h;
                  b = h >>> 3;
                  if (h >>> 0 < 256) {
                    d = (11660 + ((b << 1) << 2)) | 0;
                    a = c[2905] | 0;
                    b = 1 << b;
                    if (!(a & b)) {
                      c[2905] = a | b;
                      b = d;
                      a = (d + 8) | 0;
                    } else {
                      a = (d + 8) | 0;
                      b = c[a >> 2] | 0;
                    }
                    c[a >> 2] = g;
                    c[(b + 12) >> 2] = g;
                    c[(g + 8) >> 2] = b;
                    c[(g + 12) >> 2] = d;
                    break;
                  }
                  b = h >>> 8;
                  if (b)
                    if (h >>> 0 > 16777215) b = 31;
                    else {
                      v = (((b + 1048320) | 0) >>> 16) & 8;
                      w = b << v;
                      u = (((w + 520192) | 0) >>> 16) & 4;
                      w = w << u;
                      b = (((w + 245760) | 0) >>> 16) & 2;
                      b = (14 - (u | v | b) + ((w << b) >>> 15)) | 0;
                      b = ((h >>> ((b + 7) | 0)) & 1) | (b << 1);
                    }
                  else b = 0;
                  d = (11924 + (b << 2)) | 0;
                  c[(g + 28) >> 2] = b;
                  a = (g + 16) | 0;
                  c[(a + 4) >> 2] = 0;
                  c[a >> 2] = 0;
                  a = 1 << b;
                  if (!(a & e)) {
                    c[2906] = a | e;
                    c[d >> 2] = g;
                    c[(g + 24) >> 2] = d;
                    c[(g + 12) >> 2] = g;
                    c[(g + 8) >> 2] = g;
                    break;
                  }
                  a = h << ((b | 0) == 31 ? 0 : (25 - (b >>> 1)) | 0);
                  d = c[d >> 2] | 0;
                  while (1) {
                    if (((c[(d + 4) >> 2] & -8) | 0) == (h | 0)) {
                      v = 97;
                      break;
                    }
                    e = (d + 16 + ((a >>> 31) << 2)) | 0;
                    b = c[e >> 2] | 0;
                    if (!b) {
                      v = 96;
                      break;
                    } else {
                      a = a << 1;
                      d = b;
                    }
                  }
                  if ((v | 0) == 96) {
                    c[e >> 2] = g;
                    c[(g + 24) >> 2] = d;
                    c[(g + 12) >> 2] = g;
                    c[(g + 8) >> 2] = g;
                    break;
                  } else if ((v | 0) == 97) {
                    v = (d + 8) | 0;
                    w = c[v >> 2] | 0;
                    c[(w + 12) >> 2] = g;
                    c[v >> 2] = g;
                    c[(g + 8) >> 2] = w;
                    c[(g + 12) >> 2] = d;
                    c[(g + 24) >> 2] = 0;
                    break;
                  }
                } else {
                  w = (h + k) | 0;
                  c[(i + 4) >> 2] = w | 3;
                  w = (i + w + 4) | 0;
                  c[w >> 2] = c[w >> 2] | 1;
                }
              while (0);
              w = (i + 8) | 0;
              l = x;
              return w | 0;
            } else n = k;
          } else n = k;
        } else n = -1;
      while (0);
      d = c[2907] | 0;
      if (d >>> 0 >= n >>> 0) {
        b = (d - n) | 0;
        a = c[2910] | 0;
        if (b >>> 0 > 15) {
          w = (a + n) | 0;
          c[2910] = w;
          c[2907] = b;
          c[(w + 4) >> 2] = b | 1;
          c[(w + b) >> 2] = b;
          c[(a + 4) >> 2] = n | 3;
        } else {
          c[2907] = 0;
          c[2910] = 0;
          c[(a + 4) >> 2] = d | 3;
          w = (a + d + 4) | 0;
          c[w >> 2] = c[w >> 2] | 1;
        }
        w = (a + 8) | 0;
        l = x;
        return w | 0;
      }
      h = c[2908] | 0;
      if (h >>> 0 > n >>> 0) {
        u = (h - n) | 0;
        c[2908] = u;
        w = c[2911] | 0;
        v = (w + n) | 0;
        c[2911] = v;
        c[(v + 4) >> 2] = u | 1;
        c[(w + 4) >> 2] = n | 3;
        w = (w + 8) | 0;
        l = x;
        return w | 0;
      }
      if (!(c[3023] | 0)) {
        c[3025] = 4096;
        c[3024] = 4096;
        c[3026] = -1;
        c[3027] = -1;
        c[3028] = 0;
        c[3016] = 0;
        a = (o & -16) ^ 1431655768;
        c[o >> 2] = a;
        c[3023] = a;
        a = 4096;
      } else a = c[3025] | 0;
      i = (n + 48) | 0;
      j = (n + 47) | 0;
      g = (a + j) | 0;
      f = (0 - a) | 0;
      k = g & f;
      if (k >>> 0 <= n >>> 0) {
        w = 0;
        l = x;
        return w | 0;
      }
      a = c[3015] | 0;
      if (a | 0 ? ((m = c[3013] | 0), (o = (m + k) | 0), (o >>> 0 <= m >>> 0) | (o >>> 0 > a >>> 0)) : 0) {
        w = 0;
        l = x;
        return w | 0;
      }
      b: do
        if (!(c[3016] & 4)) {
          d = c[2911] | 0;
          c: do
            if (d) {
              e = 12068;
              while (1) {
                a = c[e >> 2] | 0;
                if (a >>> 0 <= d >>> 0 ? ((r = (e + 4) | 0), ((a + (c[r >> 2] | 0)) | 0) >>> 0 > d >>> 0) : 0) break;
                a = c[(e + 8) >> 2] | 0;
                if (!a) {
                  v = 118;
                  break c;
                } else e = a;
              }
              b = (g - h) & f;
              if (b >>> 0 < 2147483647) {
                a = ve(b | 0) | 0;
                if ((a | 0) == (((c[e >> 2] | 0) + (c[r >> 2] | 0)) | 0)) {
                  if ((a | 0) != (-1 | 0)) {
                    h = b;
                    g = a;
                    v = 135;
                    break b;
                  }
                } else {
                  e = a;
                  v = 126;
                }
              } else b = 0;
            } else v = 118;
          while (0);
          do
            if ((v | 0) == 118) {
              d = ve(0) | 0;
              if (
                (d | 0) != (-1 | 0)
                  ? ((b = d),
                    (p = c[3024] | 0),
                    (q = (p + -1) | 0),
                    (b = ((((q & b) | 0) == 0 ? 0 : (((q + b) & (0 - p)) - b) | 0) + k) | 0),
                    (p = c[3013] | 0),
                    (q = (b + p) | 0),
                    (b >>> 0 > n >>> 0) & (b >>> 0 < 2147483647))
                  : 0
              ) {
                r = c[3015] | 0;
                if (r | 0 ? (q >>> 0 <= p >>> 0) | (q >>> 0 > r >>> 0) : 0) {
                  b = 0;
                  break;
                }
                a = ve(b | 0) | 0;
                if ((a | 0) == (d | 0)) {
                  h = b;
                  g = d;
                  v = 135;
                  break b;
                } else {
                  e = a;
                  v = 126;
                }
              } else b = 0;
            }
          while (0);
          do
            if ((v | 0) == 126) {
              d = (0 - b) | 0;
              if (!((i >>> 0 > b >>> 0) & ((b >>> 0 < 2147483647) & ((e | 0) != (-1 | 0)))))
                if ((e | 0) == (-1 | 0)) {
                  b = 0;
                  break;
                } else {
                  h = b;
                  g = e;
                  v = 135;
                  break b;
                }
              a = c[3025] | 0;
              a = (j - b + a) & (0 - a);
              if (a >>> 0 >= 2147483647) {
                h = b;
                g = e;
                v = 135;
                break b;
              }
              if ((ve(a | 0) | 0) == (-1 | 0)) {
                ve(d | 0) | 0;
                b = 0;
                break;
              } else {
                h = (a + b) | 0;
                g = e;
                v = 135;
                break b;
              }
            }
          while (0);
          c[3016] = c[3016] | 4;
          v = 133;
        } else {
          b = 0;
          v = 133;
        }
      while (0);
      if (
        ((v | 0) == 133 ? k >>> 0 < 2147483647 : 0)
          ? ((u = ve(k | 0) | 0),
            (r = ve(0) | 0),
            (s = (r - u) | 0),
            (t = s >>> 0 > ((n + 40) | 0) >>> 0),
            !(((u | 0) == (-1 | 0)) | (t ^ 1) | (((u >>> 0 < r >>> 0) & (((u | 0) != (-1 | 0)) & ((r | 0) != (-1 | 0)))) ^ 1)))
          : 0
      ) {
        h = t ? s : b;
        g = u;
        v = 135;
      }
      if ((v | 0) == 135) {
        b = ((c[3013] | 0) + h) | 0;
        c[3013] = b;
        if (b >>> 0 > (c[3014] | 0) >>> 0) c[3014] = b;
        j = c[2911] | 0;
        do
          if (j) {
            b = 12068;
            while (1) {
              a = c[b >> 2] | 0;
              d = (b + 4) | 0;
              e = c[d >> 2] | 0;
              if ((g | 0) == ((a + e) | 0)) {
                v = 145;
                break;
              }
              f = c[(b + 8) >> 2] | 0;
              if (!f) break;
              else b = f;
            }
            if (((v | 0) == 145 ? ((c[(b + 12) >> 2] & 8) | 0) == 0 : 0) ? (j >>> 0 < g >>> 0) & (j >>> 0 >= a >>> 0) : 0) {
              c[d >> 2] = e + h;
              w = (j + 8) | 0;
              w = ((w & 7) | 0) == 0 ? 0 : (0 - w) & 7;
              v = (j + w) | 0;
              w = ((c[2908] | 0) + (h - w)) | 0;
              c[2911] = v;
              c[2908] = w;
              c[(v + 4) >> 2] = w | 1;
              c[(v + w + 4) >> 2] = 40;
              c[2912] = c[3027];
              break;
            }
            if (g >>> 0 < (c[2909] | 0) >>> 0) c[2909] = g;
            d = (g + h) | 0;
            b = 12068;
            while (1) {
              if ((c[b >> 2] | 0) == (d | 0)) {
                v = 153;
                break;
              }
              a = c[(b + 8) >> 2] | 0;
              if (!a) break;
              else b = a;
            }
            if ((v | 0) == 153 ? ((c[(b + 12) >> 2] & 8) | 0) == 0 : 0) {
              c[b >> 2] = g;
              m = (b + 4) | 0;
              c[m >> 2] = (c[m >> 2] | 0) + h;
              m = (g + 8) | 0;
              m = (g + (((m & 7) | 0) == 0 ? 0 : (0 - m) & 7)) | 0;
              b = (d + 8) | 0;
              b = (d + (((b & 7) | 0) == 0 ? 0 : (0 - b) & 7)) | 0;
              k = (m + n) | 0;
              i = (b - m - n) | 0;
              c[(m + 4) >> 2] = n | 3;
              do
                if ((b | 0) != (j | 0)) {
                  if ((b | 0) == (c[2910] | 0)) {
                    w = ((c[2907] | 0) + i) | 0;
                    c[2907] = w;
                    c[2910] = k;
                    c[(k + 4) >> 2] = w | 1;
                    c[(k + w) >> 2] = w;
                    break;
                  }
                  a = c[(b + 4) >> 2] | 0;
                  if (((a & 3) | 0) == 1) {
                    h = a & -8;
                    e = a >>> 3;
                    d: do
                      if (a >>> 0 < 256) {
                        a = c[(b + 8) >> 2] | 0;
                        d = c[(b + 12) >> 2] | 0;
                        if ((d | 0) == (a | 0)) {
                          c[2905] = c[2905] & ~(1 << e);
                          break;
                        } else {
                          c[(a + 12) >> 2] = d;
                          c[(d + 8) >> 2] = a;
                          break;
                        }
                      } else {
                        g = c[(b + 24) >> 2] | 0;
                        a = c[(b + 12) >> 2] | 0;
                        do
                          if ((a | 0) == (b | 0)) {
                            e = (b + 16) | 0;
                            d = (e + 4) | 0;
                            a = c[d >> 2] | 0;
                            if (!a) {
                              a = c[e >> 2] | 0;
                              if (!a) {
                                a = 0;
                                break;
                              } else d = e;
                            }
                            while (1) {
                              e = (a + 20) | 0;
                              f = c[e >> 2] | 0;
                              if (f | 0) {
                                a = f;
                                d = e;
                                continue;
                              }
                              e = (a + 16) | 0;
                              f = c[e >> 2] | 0;
                              if (!f) break;
                              else {
                                a = f;
                                d = e;
                              }
                            }
                            c[d >> 2] = 0;
                          } else {
                            w = c[(b + 8) >> 2] | 0;
                            c[(w + 12) >> 2] = a;
                            c[(a + 8) >> 2] = w;
                          }
                        while (0);
                        if (!g) break;
                        d = c[(b + 28) >> 2] | 0;
                        e = (11924 + (d << 2)) | 0;
                        f = (a | 0) == 0;
                        do
                          if ((b | 0) != (c[e >> 2] | 0)) {
                            c[(g + 16 + ((((c[(g + 16) >> 2] | 0) != (b | 0)) & 1) << 2)) >> 2] = a;
                            if (f) break d;
                          } else {
                            c[e >> 2] = a;
                            if (!f) break;
                            c[2906] = c[2906] & ~(1 << d);
                            break d;
                          }
                        while (0);
                        c[(a + 24) >> 2] = g;
                        d = (b + 16) | 0;
                        e = c[d >> 2] | 0;
                        if (e | 0) {
                          c[(a + 16) >> 2] = e;
                          c[(e + 24) >> 2] = a;
                        }
                        d = c[(d + 4) >> 2] | 0;
                        if (!d) break;
                        c[(a + 20) >> 2] = d;
                        c[(d + 24) >> 2] = a;
                      }
                    while (0);
                    b = (b + h) | 0;
                    f = (h + i) | 0;
                  } else f = i;
                  b = (b + 4) | 0;
                  c[b >> 2] = c[b >> 2] & -2;
                  c[(k + 4) >> 2] = f | 1;
                  c[(k + f) >> 2] = f;
                  b = f >>> 3;
                  if (f >>> 0 < 256) {
                    d = (11660 + ((b << 1) << 2)) | 0;
                    a = c[2905] | 0;
                    b = 1 << b;
                    if (!(a & b)) {
                      c[2905] = a | b;
                      b = d;
                      a = (d + 8) | 0;
                    } else {
                      a = (d + 8) | 0;
                      b = c[a >> 2] | 0;
                    }
                    c[a >> 2] = k;
                    c[(b + 12) >> 2] = k;
                    c[(k + 8) >> 2] = b;
                    c[(k + 12) >> 2] = d;
                    break;
                  }
                  b = f >>> 8;
                  do
                    if (!b) b = 0;
                    else {
                      if (f >>> 0 > 16777215) {
                        b = 31;
                        break;
                      }
                      v = (((b + 1048320) | 0) >>> 16) & 8;
                      w = b << v;
                      u = (((w + 520192) | 0) >>> 16) & 4;
                      w = w << u;
                      b = (((w + 245760) | 0) >>> 16) & 2;
                      b = (14 - (u | v | b) + ((w << b) >>> 15)) | 0;
                      b = ((f >>> ((b + 7) | 0)) & 1) | (b << 1);
                    }
                  while (0);
                  e = (11924 + (b << 2)) | 0;
                  c[(k + 28) >> 2] = b;
                  a = (k + 16) | 0;
                  c[(a + 4) >> 2] = 0;
                  c[a >> 2] = 0;
                  a = c[2906] | 0;
                  d = 1 << b;
                  if (!(a & d)) {
                    c[2906] = a | d;
                    c[e >> 2] = k;
                    c[(k + 24) >> 2] = e;
                    c[(k + 12) >> 2] = k;
                    c[(k + 8) >> 2] = k;
                    break;
                  }
                  a = f << ((b | 0) == 31 ? 0 : (25 - (b >>> 1)) | 0);
                  d = c[e >> 2] | 0;
                  while (1) {
                    if (((c[(d + 4) >> 2] & -8) | 0) == (f | 0)) {
                      v = 194;
                      break;
                    }
                    e = (d + 16 + ((a >>> 31) << 2)) | 0;
                    b = c[e >> 2] | 0;
                    if (!b) {
                      v = 193;
                      break;
                    } else {
                      a = a << 1;
                      d = b;
                    }
                  }
                  if ((v | 0) == 193) {
                    c[e >> 2] = k;
                    c[(k + 24) >> 2] = d;
                    c[(k + 12) >> 2] = k;
                    c[(k + 8) >> 2] = k;
                    break;
                  } else if ((v | 0) == 194) {
                    v = (d + 8) | 0;
                    w = c[v >> 2] | 0;
                    c[(w + 12) >> 2] = k;
                    c[v >> 2] = k;
                    c[(k + 8) >> 2] = w;
                    c[(k + 12) >> 2] = d;
                    c[(k + 24) >> 2] = 0;
                    break;
                  }
                } else {
                  w = ((c[2908] | 0) + i) | 0;
                  c[2908] = w;
                  c[2911] = k;
                  c[(k + 4) >> 2] = w | 1;
                }
              while (0);
              w = (m + 8) | 0;
              l = x;
              return w | 0;
            }
            b = 12068;
            while (1) {
              a = c[b >> 2] | 0;
              if (a >>> 0 <= j >>> 0 ? ((w = (a + (c[(b + 4) >> 2] | 0)) | 0), w >>> 0 > j >>> 0) : 0) break;
              b = c[(b + 8) >> 2] | 0;
            }
            f = (w + -47) | 0;
            a = (f + 8) | 0;
            a = (f + (((a & 7) | 0) == 0 ? 0 : (0 - a) & 7)) | 0;
            f = (j + 16) | 0;
            a = a >>> 0 < f >>> 0 ? j : a;
            b = (a + 8) | 0;
            d = (g + 8) | 0;
            d = ((d & 7) | 0) == 0 ? 0 : (0 - d) & 7;
            v = (g + d) | 0;
            d = (h + -40 - d) | 0;
            c[2911] = v;
            c[2908] = d;
            c[(v + 4) >> 2] = d | 1;
            c[(v + d + 4) >> 2] = 40;
            c[2912] = c[3027];
            d = (a + 4) | 0;
            c[d >> 2] = 27;
            c[b >> 2] = c[3017];
            c[(b + 4) >> 2] = c[3018];
            c[(b + 8) >> 2] = c[3019];
            c[(b + 12) >> 2] = c[3020];
            c[3017] = g;
            c[3018] = h;
            c[3020] = 0;
            c[3019] = b;
            b = (a + 24) | 0;
            do {
              v = b;
              b = (b + 4) | 0;
              c[b >> 2] = 7;
            } while (((v + 8) | 0) >>> 0 < w >>> 0);
            if ((a | 0) != (j | 0)) {
              g = (a - j) | 0;
              c[d >> 2] = c[d >> 2] & -2;
              c[(j + 4) >> 2] = g | 1;
              c[a >> 2] = g;
              b = g >>> 3;
              if (g >>> 0 < 256) {
                d = (11660 + ((b << 1) << 2)) | 0;
                a = c[2905] | 0;
                b = 1 << b;
                if (!(a & b)) {
                  c[2905] = a | b;
                  b = d;
                  a = (d + 8) | 0;
                } else {
                  a = (d + 8) | 0;
                  b = c[a >> 2] | 0;
                }
                c[a >> 2] = j;
                c[(b + 12) >> 2] = j;
                c[(j + 8) >> 2] = b;
                c[(j + 12) >> 2] = d;
                break;
              }
              b = g >>> 8;
              if (b)
                if (g >>> 0 > 16777215) d = 31;
                else {
                  v = (((b + 1048320) | 0) >>> 16) & 8;
                  w = b << v;
                  u = (((w + 520192) | 0) >>> 16) & 4;
                  w = w << u;
                  d = (((w + 245760) | 0) >>> 16) & 2;
                  d = (14 - (u | v | d) + ((w << d) >>> 15)) | 0;
                  d = ((g >>> ((d + 7) | 0)) & 1) | (d << 1);
                }
              else d = 0;
              e = (11924 + (d << 2)) | 0;
              c[(j + 28) >> 2] = d;
              c[(j + 20) >> 2] = 0;
              c[f >> 2] = 0;
              b = c[2906] | 0;
              a = 1 << d;
              if (!(b & a)) {
                c[2906] = b | a;
                c[e >> 2] = j;
                c[(j + 24) >> 2] = e;
                c[(j + 12) >> 2] = j;
                c[(j + 8) >> 2] = j;
                break;
              }
              a = g << ((d | 0) == 31 ? 0 : (25 - (d >>> 1)) | 0);
              d = c[e >> 2] | 0;
              while (1) {
                if (((c[(d + 4) >> 2] & -8) | 0) == (g | 0)) {
                  v = 216;
                  break;
                }
                e = (d + 16 + ((a >>> 31) << 2)) | 0;
                b = c[e >> 2] | 0;
                if (!b) {
                  v = 215;
                  break;
                } else {
                  a = a << 1;
                  d = b;
                }
              }
              if ((v | 0) == 215) {
                c[e >> 2] = j;
                c[(j + 24) >> 2] = d;
                c[(j + 12) >> 2] = j;
                c[(j + 8) >> 2] = j;
                break;
              } else if ((v | 0) == 216) {
                v = (d + 8) | 0;
                w = c[v >> 2] | 0;
                c[(w + 12) >> 2] = j;
                c[v >> 2] = j;
                c[(j + 8) >> 2] = w;
                c[(j + 12) >> 2] = d;
                c[(j + 24) >> 2] = 0;
                break;
              }
            }
          } else {
            w = c[2909] | 0;
            if (((w | 0) == 0) | (g >>> 0 < w >>> 0)) c[2909] = g;
            c[3017] = g;
            c[3018] = h;
            c[3020] = 0;
            c[2914] = c[3023];
            c[2913] = -1;
            b = 0;
            do {
              w = (11660 + ((b << 1) << 2)) | 0;
              c[(w + 12) >> 2] = w;
              c[(w + 8) >> 2] = w;
              b = (b + 1) | 0;
            } while ((b | 0) != 32);
            w = (g + 8) | 0;
            w = ((w & 7) | 0) == 0 ? 0 : (0 - w) & 7;
            v = (g + w) | 0;
            w = (h + -40 - w) | 0;
            c[2911] = v;
            c[2908] = w;
            c[(v + 4) >> 2] = w | 1;
            c[(v + w + 4) >> 2] = 40;
            c[2912] = c[3027];
          }
        while (0);
        b = c[2908] | 0;
        if (b >>> 0 > n >>> 0) {
          u = (b - n) | 0;
          c[2908] = u;
          w = c[2911] | 0;
          v = (w + n) | 0;
          c[2911] = v;
          c[(v + 4) >> 2] = u | 1;
          c[(w + 4) >> 2] = n | 3;
          w = (w + 8) | 0;
          l = x;
          return w | 0;
        }
      }
      c[154] = 12;
      w = 0;
      l = x;
      return w | 0;
    }
    function Bd(a) {
      a = a | 0;
      var b = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      if (!a) return;
      d = (a + -8) | 0;
      f = c[2909] | 0;
      a = c[(a + -4) >> 2] | 0;
      b = a & -8;
      j = (d + b) | 0;
      do
        if (!(a & 1)) {
          e = c[d >> 2] | 0;
          if (!(a & 3)) return;
          h = (d + (0 - e)) | 0;
          g = (e + b) | 0;
          if (h >>> 0 < f >>> 0) return;
          if ((h | 0) == (c[2910] | 0)) {
            a = (j + 4) | 0;
            b = c[a >> 2] | 0;
            if (((b & 3) | 0) != 3) {
              i = h;
              b = g;
              break;
            }
            c[2907] = g;
            c[a >> 2] = b & -2;
            c[(h + 4) >> 2] = g | 1;
            c[(h + g) >> 2] = g;
            return;
          }
          d = e >>> 3;
          if (e >>> 0 < 256) {
            a = c[(h + 8) >> 2] | 0;
            b = c[(h + 12) >> 2] | 0;
            if ((b | 0) == (a | 0)) {
              c[2905] = c[2905] & ~(1 << d);
              i = h;
              b = g;
              break;
            } else {
              c[(a + 12) >> 2] = b;
              c[(b + 8) >> 2] = a;
              i = h;
              b = g;
              break;
            }
          }
          f = c[(h + 24) >> 2] | 0;
          a = c[(h + 12) >> 2] | 0;
          do
            if ((a | 0) == (h | 0)) {
              d = (h + 16) | 0;
              b = (d + 4) | 0;
              a = c[b >> 2] | 0;
              if (!a) {
                a = c[d >> 2] | 0;
                if (!a) {
                  a = 0;
                  break;
                } else b = d;
              }
              while (1) {
                d = (a + 20) | 0;
                e = c[d >> 2] | 0;
                if (e | 0) {
                  a = e;
                  b = d;
                  continue;
                }
                d = (a + 16) | 0;
                e = c[d >> 2] | 0;
                if (!e) break;
                else {
                  a = e;
                  b = d;
                }
              }
              c[b >> 2] = 0;
            } else {
              i = c[(h + 8) >> 2] | 0;
              c[(i + 12) >> 2] = a;
              c[(a + 8) >> 2] = i;
            }
          while (0);
          if (f) {
            b = c[(h + 28) >> 2] | 0;
            d = (11924 + (b << 2)) | 0;
            e = (a | 0) == 0;
            if ((h | 0) == (c[d >> 2] | 0)) {
              c[d >> 2] = a;
              if (e) {
                c[2906] = c[2906] & ~(1 << b);
                i = h;
                b = g;
                break;
              }
            } else {
              c[(f + 16 + ((((c[(f + 16) >> 2] | 0) != (h | 0)) & 1) << 2)) >> 2] = a;
              if (e) {
                i = h;
                b = g;
                break;
              }
            }
            c[(a + 24) >> 2] = f;
            b = (h + 16) | 0;
            d = c[b >> 2] | 0;
            if (d | 0) {
              c[(a + 16) >> 2] = d;
              c[(d + 24) >> 2] = a;
            }
            b = c[(b + 4) >> 2] | 0;
            if (b) {
              c[(a + 20) >> 2] = b;
              c[(b + 24) >> 2] = a;
              i = h;
              b = g;
            } else {
              i = h;
              b = g;
            }
          } else {
            i = h;
            b = g;
          }
        } else {
          i = d;
          h = d;
        }
      while (0);
      if (h >>> 0 >= j >>> 0) return;
      a = (j + 4) | 0;
      e = c[a >> 2] | 0;
      if (!(e & 1)) return;
      if (!(e & 2)) {
        a = c[2910] | 0;
        if ((j | 0) == (c[2911] | 0)) {
          j = ((c[2908] | 0) + b) | 0;
          c[2908] = j;
          c[2911] = i;
          c[(i + 4) >> 2] = j | 1;
          if ((i | 0) != (a | 0)) return;
          c[2910] = 0;
          c[2907] = 0;
          return;
        }
        if ((j | 0) == (a | 0)) {
          j = ((c[2907] | 0) + b) | 0;
          c[2907] = j;
          c[2910] = h;
          c[(i + 4) >> 2] = j | 1;
          c[(h + j) >> 2] = j;
          return;
        }
        f = ((e & -8) + b) | 0;
        d = e >>> 3;
        do
          if (e >>> 0 < 256) {
            b = c[(j + 8) >> 2] | 0;
            a = c[(j + 12) >> 2] | 0;
            if ((a | 0) == (b | 0)) {
              c[2905] = c[2905] & ~(1 << d);
              break;
            } else {
              c[(b + 12) >> 2] = a;
              c[(a + 8) >> 2] = b;
              break;
            }
          } else {
            g = c[(j + 24) >> 2] | 0;
            a = c[(j + 12) >> 2] | 0;
            do
              if ((a | 0) == (j | 0)) {
                d = (j + 16) | 0;
                b = (d + 4) | 0;
                a = c[b >> 2] | 0;
                if (!a) {
                  a = c[d >> 2] | 0;
                  if (!a) {
                    e = 0;
                    break;
                  } else b = d;
                }
                while (1) {
                  d = (a + 20) | 0;
                  e = c[d >> 2] | 0;
                  if (e | 0) {
                    a = e;
                    b = d;
                    continue;
                  }
                  d = (a + 16) | 0;
                  e = c[d >> 2] | 0;
                  if (!e) break;
                  else {
                    a = e;
                    b = d;
                  }
                }
                c[b >> 2] = 0;
                e = a;
              } else {
                e = c[(j + 8) >> 2] | 0;
                c[(e + 12) >> 2] = a;
                c[(a + 8) >> 2] = e;
                e = a;
              }
            while (0);
            if (g | 0) {
              a = c[(j + 28) >> 2] | 0;
              b = (11924 + (a << 2)) | 0;
              d = (e | 0) == 0;
              if ((j | 0) == (c[b >> 2] | 0)) {
                c[b >> 2] = e;
                if (d) {
                  c[2906] = c[2906] & ~(1 << a);
                  break;
                }
              } else {
                c[(g + 16 + ((((c[(g + 16) >> 2] | 0) != (j | 0)) & 1) << 2)) >> 2] = e;
                if (d) break;
              }
              c[(e + 24) >> 2] = g;
              a = (j + 16) | 0;
              b = c[a >> 2] | 0;
              if (b | 0) {
                c[(e + 16) >> 2] = b;
                c[(b + 24) >> 2] = e;
              }
              a = c[(a + 4) >> 2] | 0;
              if (a | 0) {
                c[(e + 20) >> 2] = a;
                c[(a + 24) >> 2] = e;
              }
            }
          }
        while (0);
        c[(i + 4) >> 2] = f | 1;
        c[(h + f) >> 2] = f;
        if ((i | 0) == (c[2910] | 0)) {
          c[2907] = f;
          return;
        }
      } else {
        c[a >> 2] = e & -2;
        c[(i + 4) >> 2] = b | 1;
        c[(h + b) >> 2] = b;
        f = b;
      }
      a = f >>> 3;
      if (f >>> 0 < 256) {
        d = (11660 + ((a << 1) << 2)) | 0;
        b = c[2905] | 0;
        a = 1 << a;
        if (!(b & a)) {
          c[2905] = b | a;
          a = d;
          b = (d + 8) | 0;
        } else {
          b = (d + 8) | 0;
          a = c[b >> 2] | 0;
        }
        c[b >> 2] = i;
        c[(a + 12) >> 2] = i;
        c[(i + 8) >> 2] = a;
        c[(i + 12) >> 2] = d;
        return;
      }
      a = f >>> 8;
      if (a)
        if (f >>> 0 > 16777215) a = 31;
        else {
          h = (((a + 1048320) | 0) >>> 16) & 8;
          j = a << h;
          g = (((j + 520192) | 0) >>> 16) & 4;
          j = j << g;
          a = (((j + 245760) | 0) >>> 16) & 2;
          a = (14 - (g | h | a) + ((j << a) >>> 15)) | 0;
          a = ((f >>> ((a + 7) | 0)) & 1) | (a << 1);
        }
      else a = 0;
      e = (11924 + (a << 2)) | 0;
      c[(i + 28) >> 2] = a;
      c[(i + 20) >> 2] = 0;
      c[(i + 16) >> 2] = 0;
      b = c[2906] | 0;
      d = 1 << a;
      do
        if (b & d) {
          b = f << ((a | 0) == 31 ? 0 : (25 - (a >>> 1)) | 0);
          d = c[e >> 2] | 0;
          while (1) {
            if (((c[(d + 4) >> 2] & -8) | 0) == (f | 0)) {
              a = 73;
              break;
            }
            e = (d + 16 + ((b >>> 31) << 2)) | 0;
            a = c[e >> 2] | 0;
            if (!a) {
              a = 72;
              break;
            } else {
              b = b << 1;
              d = a;
            }
          }
          if ((a | 0) == 72) {
            c[e >> 2] = i;
            c[(i + 24) >> 2] = d;
            c[(i + 12) >> 2] = i;
            c[(i + 8) >> 2] = i;
            break;
          } else if ((a | 0) == 73) {
            h = (d + 8) | 0;
            j = c[h >> 2] | 0;
            c[(j + 12) >> 2] = i;
            c[h >> 2] = i;
            c[(i + 8) >> 2] = j;
            c[(i + 12) >> 2] = d;
            c[(i + 24) >> 2] = 0;
            break;
          }
        } else {
          c[2906] = b | d;
          c[e >> 2] = i;
          c[(i + 24) >> 2] = e;
          c[(i + 12) >> 2] = i;
          c[(i + 8) >> 2] = i;
        }
      while (0);
      j = ((c[2913] | 0) + -1) | 0;
      c[2913] = j;
      if (!j) a = 12076;
      else return;
      while (1) {
        a = c[a >> 2] | 0;
        if (!a) break;
        else a = (a + 8) | 0;
      }
      c[2913] = -1;
      return;
    }
    function Cd() {
      return 12116;
    }
    function Dd(a) {
      a = a | 0;
      var b = 0,
        d = 0;
      b = l;
      l = (l + 16) | 0;
      d = b;
      c[d >> 2] = Id(c[(a + 60) >> 2] | 0) | 0;
      a = Gd(Ga(6, d | 0) | 0) | 0;
      l = b;
      return a | 0;
    }
    function Ed(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      n = l;
      l = (l + 48) | 0;
      k = (n + 16) | 0;
      g = n;
      f = (n + 32) | 0;
      i = (a + 28) | 0;
      e = c[i >> 2] | 0;
      c[f >> 2] = e;
      j = (a + 20) | 0;
      e = ((c[j >> 2] | 0) - e) | 0;
      c[(f + 4) >> 2] = e;
      c[(f + 8) >> 2] = b;
      c[(f + 12) >> 2] = d;
      e = (e + d) | 0;
      h = (a + 60) | 0;
      c[g >> 2] = c[h >> 2];
      c[(g + 4) >> 2] = f;
      c[(g + 8) >> 2] = 2;
      g = Gd(Ma(146, g | 0) | 0) | 0;
      a: do
        if ((e | 0) != (g | 0)) {
          b = 2;
          while (1) {
            if ((g | 0) < 0) break;
            e = (e - g) | 0;
            p = c[(f + 4) >> 2] | 0;
            o = g >>> 0 > p >>> 0;
            f = o ? (f + 8) | 0 : f;
            b = (((o << 31) >> 31) + b) | 0;
            p = (g - (o ? p : 0)) | 0;
            c[f >> 2] = (c[f >> 2] | 0) + p;
            o = (f + 4) | 0;
            c[o >> 2] = (c[o >> 2] | 0) - p;
            c[k >> 2] = c[h >> 2];
            c[(k + 4) >> 2] = f;
            c[(k + 8) >> 2] = b;
            g = Gd(Ma(146, k | 0) | 0) | 0;
            if ((e | 0) == (g | 0)) {
              m = 3;
              break a;
            }
          }
          c[(a + 16) >> 2] = 0;
          c[i >> 2] = 0;
          c[j >> 2] = 0;
          c[a >> 2] = c[a >> 2] | 32;
          if ((b | 0) == 2) d = 0;
          else d = (d - (c[(f + 4) >> 2] | 0)) | 0;
        } else m = 3;
      while (0);
      if ((m | 0) == 3) {
        p = c[(a + 44) >> 2] | 0;
        c[(a + 16) >> 2] = p + (c[(a + 48) >> 2] | 0);
        c[i >> 2] = p;
        c[j >> 2] = p;
      }
      l = n;
      return d | 0;
    }
    function Fd(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0;
      f = l;
      l = (l + 32) | 0;
      g = f;
      e = (f + 20) | 0;
      c[g >> 2] = c[(a + 60) >> 2];
      c[(g + 4) >> 2] = 0;
      c[(g + 8) >> 2] = b;
      c[(g + 12) >> 2] = e;
      c[(g + 16) >> 2] = d;
      if ((Gd(Aa(140, g | 0) | 0) | 0) < 0) {
        c[e >> 2] = -1;
        a = -1;
      } else a = c[e >> 2] | 0;
      l = f;
      return a | 0;
    }
    function Gd(a) {
      a = a | 0;
      if (a >>> 0 > 4294963200) {
        c[154] = 0 - a;
        a = -1;
      }
      return a | 0;
    }
    function Hd() {
      return 616;
    }
    function Id(a) {
      a = a | 0;
      return a | 0;
    }
    function Jd(b, c) {
      b = b | 0;
      c = c | 0;
      var d = 0,
        e = 0;
      d = a[b >> 0] | 0;
      e = a[c >> 0] | 0;
      if ((d << 24) >> 24 == 0 ? 1 : (d << 24) >> 24 != (e << 24) >> 24) b = e;
      else {
        do {
          b = (b + 1) | 0;
          c = (c + 1) | 0;
          d = a[b >> 0] | 0;
          e = a[c >> 0] | 0;
        } while (!((d << 24) >> 24 == 0 ? 1 : (d << 24) >> 24 != (e << 24) >> 24));
        b = e;
      }
      return ((d & 255) - (b & 255)) | 0;
    }
    function Kd(b, c) {
      b = b | 0;
      c = c | 0;
      var d = 0,
        e = 0,
        f = 0,
        g = 0;
      f = 4;
      while (1) {
        d = a[b >> 0] | 0;
        e = a[c >> 0] | 0;
        if ((d << 24) >> 24 != (e << 24) >> 24) {
          g = 4;
          break;
        }
        f = (f + -1) | 0;
        if (!f) {
          b = 0;
          break;
        } else {
          b = (b + 1) | 0;
          c = (c + 1) | 0;
        }
      }
      if ((g | 0) == 4) b = ((d & 255) - (e & 255)) | 0;
      return b | 0;
    }
    function Ld(b, d) {
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0;
      k = l;
      l = (l + 224) | 0;
      g = (k + 120) | 0;
      h = (k + 80) | 0;
      i = k;
      j = (k + 136) | 0;
      e = h;
      f = (e + 40) | 0;
      do {
        c[e >> 2] = 0;
        e = (e + 4) | 0;
      } while ((e | 0) < (f | 0));
      c[g >> 2] = c[d >> 2];
      if ((Md(0, b, g, i, h) | 0) >= 0) {
        d = c[107] | 0;
        e = d & 32;
        if ((a[502] | 0) < 1) c[107] = d & -33;
        if (!(c[119] | 0)) {
          d = c[118] | 0;
          c[118] = j;
          c[114] = j;
          c[112] = j;
          c[119] = 80;
          c[111] = j + 80;
          Md(428, b, g, i, h) | 0;
          if (d | 0) {
            Pa[c[464 >> 2] & 15](428, 0, 0) | 0;
            c[118] = d;
            c[119] = 0;
            c[111] = 0;
            c[114] = 0;
            c[112] = 0;
          }
        } else Md(428, b, g, i, h) | 0;
        c[107] = c[107] | e;
      }
      l = k;
      return;
    }
    function Md(d, e, f, g, i) {
      d = d | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      i = i | 0;
      var j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0;
      H = l;
      l = (l + 64) | 0;
      D = (H + 16) | 0;
      E = H;
      B = (H + 24) | 0;
      F = (H + 8) | 0;
      G = (H + 20) | 0;
      c[D >> 2] = e;
      x = (d | 0) != 0;
      y = (B + 40) | 0;
      A = y;
      B = (B + 39) | 0;
      C = (F + 4) | 0;
      k = 0;
      j = 0;
      p = 0;
      a: while (1) {
        do
          if ((j | 0) > -1)
            if ((k | 0) > ((2147483647 - j) | 0)) {
              c[154] = 75;
              j = -1;
              break;
            } else {
              j = (k + j) | 0;
              break;
            }
        while (0);
        k = a[e >> 0] | 0;
        if (!((k << 24) >> 24)) {
          w = 87;
          break;
        } else m = e;
        b: while (1) {
          switch ((k << 24) >> 24) {
            case 37: {
              k = m;
              w = 9;
              break b;
            }
            case 0: {
              k = m;
              break b;
            }
            default: {
            }
          }
          v = (m + 1) | 0;
          c[D >> 2] = v;
          k = a[v >> 0] | 0;
          m = v;
        }
        c: do
          if ((w | 0) == 9)
            while (1) {
              w = 0;
              if ((a[(m + 1) >> 0] | 0) != 37) break c;
              k = (k + 1) | 0;
              m = (m + 2) | 0;
              c[D >> 2] = m;
              if ((a[m >> 0] | 0) == 37) w = 9;
              else break;
            }
        while (0);
        k = (k - e) | 0;
        if (x) Nd(d, e, k);
        if (k | 0) {
          e = m;
          continue;
        }
        n = (m + 1) | 0;
        k = ((a[n >> 0] | 0) + -48) | 0;
        if (k >>> 0 < 10) {
          v = (a[(m + 2) >> 0] | 0) == 36;
          u = v ? k : -1;
          p = v ? 1 : p;
          n = v ? (m + 3) | 0 : n;
        } else u = -1;
        c[D >> 2] = n;
        k = a[n >> 0] | 0;
        m = (((k << 24) >> 24) + -32) | 0;
        d: do
          if (m >>> 0 < 32) {
            o = 0;
            q = k;
            while (1) {
              k = 1 << m;
              if (!(k & 75913)) {
                k = q;
                break d;
              }
              o = o | k;
              n = (n + 1) | 0;
              c[D >> 2] = n;
              k = a[n >> 0] | 0;
              m = (((k << 24) >> 24) + -32) | 0;
              if (m >>> 0 >= 32) break;
              else q = k;
            }
          } else o = 0;
        while (0);
        if ((k << 24) >> 24 == 42) {
          m = (n + 1) | 0;
          k = ((a[m >> 0] | 0) + -48) | 0;
          if (k >>> 0 < 10 ? (a[(n + 2) >> 0] | 0) == 36 : 0) {
            c[(i + (k << 2)) >> 2] = 10;
            k = c[(g + (((a[m >> 0] | 0) + -48) << 3)) >> 2] | 0;
            p = 1;
            n = (n + 3) | 0;
          } else {
            if (p | 0) {
              j = -1;
              break;
            }
            if (x) {
              p = ((c[f >> 2] | 0) + (4 - 1)) & ~(4 - 1);
              k = c[p >> 2] | 0;
              c[f >> 2] = p + 4;
              p = 0;
              n = m;
            } else {
              k = 0;
              p = 0;
              n = m;
            }
          }
          c[D >> 2] = n;
          v = (k | 0) < 0;
          k = v ? (0 - k) | 0 : k;
          o = v ? o | 8192 : o;
        } else {
          k = Od(D) | 0;
          if ((k | 0) < 0) {
            j = -1;
            break;
          }
          n = c[D >> 2] | 0;
        }
        do
          if ((a[n >> 0] | 0) == 46) {
            m = (n + 1) | 0;
            if ((a[m >> 0] | 0) != 42) {
              c[D >> 2] = m;
              m = Od(D) | 0;
              n = c[D >> 2] | 0;
              break;
            }
            q = (n + 2) | 0;
            m = ((a[q >> 0] | 0) + -48) | 0;
            if (m >>> 0 < 10 ? (a[(n + 3) >> 0] | 0) == 36 : 0) {
              c[(i + (m << 2)) >> 2] = 10;
              m = c[(g + (((a[q >> 0] | 0) + -48) << 3)) >> 2] | 0;
              n = (n + 4) | 0;
              c[D >> 2] = n;
              break;
            }
            if (p | 0) {
              j = -1;
              break a;
            }
            if (x) {
              v = ((c[f >> 2] | 0) + (4 - 1)) & ~(4 - 1);
              m = c[v >> 2] | 0;
              c[f >> 2] = v + 4;
            } else m = 0;
            c[D >> 2] = q;
            n = q;
          } else m = -1;
        while (0);
        t = 0;
        while (1) {
          if ((((a[n >> 0] | 0) + -65) | 0) >>> 0 > 57) {
            j = -1;
            break a;
          }
          v = (n + 1) | 0;
          c[D >> 2] = v;
          q = a[((a[n >> 0] | 0) + -65 + (8646 + ((t * 58) | 0))) >> 0] | 0;
          r = q & 255;
          if (((r + -1) | 0) >>> 0 < 8) {
            t = r;
            n = v;
          } else break;
        }
        if (!((q << 24) >> 24)) {
          j = -1;
          break;
        }
        s = (u | 0) > -1;
        do
          if ((q << 24) >> 24 == 19)
            if (s) {
              j = -1;
              break a;
            } else w = 49;
          else {
            if (s) {
              c[(i + (u << 2)) >> 2] = r;
              s = (g + (u << 3)) | 0;
              u = c[(s + 4) >> 2] | 0;
              w = E;
              c[w >> 2] = c[s >> 2];
              c[(w + 4) >> 2] = u;
              w = 49;
              break;
            }
            if (!x) {
              j = 0;
              break a;
            }
            Pd(E, r, f);
          }
        while (0);
        if ((w | 0) == 49 ? ((w = 0), !x) : 0) {
          k = 0;
          e = v;
          continue;
        }
        n = a[n >> 0] | 0;
        n = ((t | 0) != 0) & (((n & 15) | 0) == 3) ? n & -33 : n;
        s = o & -65537;
        u = ((o & 8192) | 0) == 0 ? o : s;
        e: do
          switch (n | 0) {
            case 110:
              switch (((t & 255) << 24) >> 24) {
                case 0: {
                  c[c[E >> 2] >> 2] = j;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 1: {
                  c[c[E >> 2] >> 2] = j;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 2: {
                  k = c[E >> 2] | 0;
                  c[k >> 2] = j;
                  c[(k + 4) >> 2] = (((j | 0) < 0) << 31) >> 31;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 3: {
                  b[c[E >> 2] >> 1] = j;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 4: {
                  a[c[E >> 2] >> 0] = j;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 6: {
                  c[c[E >> 2] >> 2] = j;
                  k = 0;
                  e = v;
                  continue a;
                }
                case 7: {
                  k = c[E >> 2] | 0;
                  c[k >> 2] = j;
                  c[(k + 4) >> 2] = (((j | 0) < 0) << 31) >> 31;
                  k = 0;
                  e = v;
                  continue a;
                }
                default: {
                  k = 0;
                  e = v;
                  continue a;
                }
              }
            case 112: {
              n = 120;
              m = m >>> 0 > 8 ? m : 8;
              e = u | 8;
              w = 61;
              break;
            }
            case 88:
            case 120: {
              e = u;
              w = 61;
              break;
            }
            case 111: {
              n = E;
              e = c[n >> 2] | 0;
              n = c[(n + 4) >> 2] | 0;
              r = Rd(e, n, y) | 0;
              s = (A - r) | 0;
              o = 0;
              q = 9110;
              m = (((u & 8) | 0) == 0) | ((m | 0) > (s | 0)) ? m : (s + 1) | 0;
              s = u;
              w = 67;
              break;
            }
            case 105:
            case 100: {
              n = E;
              e = c[n >> 2] | 0;
              n = c[(n + 4) >> 2] | 0;
              if ((n | 0) < 0) {
                e = ke(0, 0, e | 0, n | 0) | 0;
                n = z;
                o = E;
                c[o >> 2] = e;
                c[(o + 4) >> 2] = n;
                o = 1;
                q = 9110;
                w = 66;
                break e;
              } else {
                o = (((u & 2049) | 0) != 0) & 1;
                q = ((u & 2048) | 0) == 0 ? (((u & 1) | 0) == 0 ? 9110 : 9112) : 9111;
                w = 66;
                break e;
              }
            }
            case 117: {
              n = E;
              o = 0;
              q = 9110;
              e = c[n >> 2] | 0;
              n = c[(n + 4) >> 2] | 0;
              w = 66;
              break;
            }
            case 99: {
              a[B >> 0] = c[E >> 2];
              e = B;
              o = 0;
              q = 9110;
              r = y;
              n = 1;
              m = s;
              break;
            }
            case 109: {
              n = Td(c[154] | 0) | 0;
              w = 71;
              break;
            }
            case 115: {
              n = c[E >> 2] | 0;
              n = n | 0 ? n : 11063;
              w = 71;
              break;
            }
            case 67: {
              c[F >> 2] = c[E >> 2];
              c[C >> 2] = 0;
              c[E >> 2] = F;
              r = -1;
              n = F;
              w = 75;
              break;
            }
            case 83: {
              e = c[E >> 2] | 0;
              if (!m) {
                Vd(d, 32, k, 0, u);
                e = 0;
                w = 84;
              } else {
                r = m;
                n = e;
                w = 75;
              }
              break;
            }
            case 65:
            case 71:
            case 70:
            case 69:
            case 97:
            case 103:
            case 102:
            case 101: {
              k = Xd(d, +h[E >> 3], k, m, u, n) | 0;
              e = v;
              continue a;
            }
            default: {
              o = 0;
              q = 9110;
              r = y;
              n = m;
              m = u;
            }
          }
        while (0);
        f: do
          if ((w | 0) == 61) {
            u = E;
            t = c[u >> 2] | 0;
            u = c[(u + 4) >> 2] | 0;
            r = Qd(t, u, y, n & 32) | 0;
            q = (((e & 8) | 0) == 0) | (((t | 0) == 0) & ((u | 0) == 0));
            o = q ? 0 : 2;
            q = q ? 9110 : (9110 + (n >> 4)) | 0;
            s = e;
            e = t;
            n = u;
            w = 67;
          } else if ((w | 0) == 66) {
            r = Sd(e, n, y) | 0;
            s = u;
            w = 67;
          } else if ((w | 0) == 71) {
            w = 0;
            u = Ud(n, m) | 0;
            t = (u | 0) == 0;
            e = n;
            o = 0;
            q = 9110;
            r = t ? (n + m) | 0 : u;
            n = t ? m : (u - n) | 0;
            m = s;
          } else if ((w | 0) == 75) {
            w = 0;
            q = n;
            e = 0;
            m = 0;
            while (1) {
              o = c[q >> 2] | 0;
              if (!o) break;
              m = Wd(G, o) | 0;
              if (((m | 0) < 0) | (m >>> 0 > ((r - e) | 0) >>> 0)) break;
              e = (m + e) | 0;
              if (r >>> 0 > e >>> 0) q = (q + 4) | 0;
              else break;
            }
            if ((m | 0) < 0) {
              j = -1;
              break a;
            }
            Vd(d, 32, k, e, u);
            if (!e) {
              e = 0;
              w = 84;
            } else {
              o = 0;
              while (1) {
                m = c[n >> 2] | 0;
                if (!m) {
                  w = 84;
                  break f;
                }
                m = Wd(G, m) | 0;
                o = (m + o) | 0;
                if ((o | 0) > (e | 0)) {
                  w = 84;
                  break f;
                }
                Nd(d, G, m);
                if (o >>> 0 >= e >>> 0) {
                  w = 84;
                  break;
                } else n = (n + 4) | 0;
              }
            }
          }
        while (0);
        if ((w | 0) == 67) {
          w = 0;
          n = ((e | 0) != 0) | ((n | 0) != 0);
          u = n | ((m | 0) != 0);
          n = (A - r + ((n ^ 1) & 1)) | 0;
          e = u ? r : y;
          r = y;
          n = u ? ((m | 0) > (n | 0) ? m : n) : m;
          m = (m | 0) > -1 ? s & -65537 : s;
        } else if ((w | 0) == 84) {
          w = 0;
          Vd(d, 32, k, e, u ^ 8192);
          k = (k | 0) > (e | 0) ? k : e;
          e = v;
          continue;
        }
        t = (r - e) | 0;
        s = (n | 0) < (t | 0) ? t : n;
        u = (s + o) | 0;
        k = (k | 0) < (u | 0) ? u : k;
        Vd(d, 32, k, u, m);
        Nd(d, q, o);
        Vd(d, 48, k, u, m ^ 65536);
        Vd(d, 48, s, t, 0);
        Nd(d, e, t);
        Vd(d, 32, k, u, m ^ 8192);
        e = v;
      }
      g: do
        if ((w | 0) == 87)
          if (!d)
            if (!p) j = 0;
            else {
              j = 1;
              while (1) {
                e = c[(i + (j << 2)) >> 2] | 0;
                if (!e) break;
                Pd((g + (j << 3)) | 0, e, f);
                j = (j + 1) | 0;
                if ((j | 0) >= 10) {
                  j = 1;
                  break g;
                }
              }
              while (1) {
                j = (j + 1) | 0;
                if ((j | 0) >= 10) {
                  j = 1;
                  break g;
                }
                if (c[(i + (j << 2)) >> 2] | 0) {
                  j = -1;
                  break;
                }
              }
            }
      while (0);
      l = H;
      return j | 0;
    }
    function Nd(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      if (!(c[a >> 2] & 32)) fe(b, d, a) | 0;
      return;
    }
    function Od(b) {
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0;
      e = c[b >> 2] | 0;
      f = ((a[e >> 0] | 0) + -48) | 0;
      if (f >>> 0 < 10) {
        d = 0;
        do {
          d = (((d * 10) | 0) + f) | 0;
          e = (e + 1) | 0;
          c[b >> 2] = e;
          f = ((a[e >> 0] | 0) + -48) | 0;
        } while (f >>> 0 < 10);
      } else d = 0;
      return d | 0;
    }
    function Pd(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0,
        g = 0.0;
      a: do
        if (b >>> 0 <= 20)
          do
            switch (b | 0) {
              case 9: {
                e = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                b = c[e >> 2] | 0;
                c[d >> 2] = e + 4;
                c[a >> 2] = b;
                break a;
              }
              case 10: {
                e = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                b = c[e >> 2] | 0;
                c[d >> 2] = e + 4;
                e = a;
                c[e >> 2] = b;
                c[(e + 4) >> 2] = (((b | 0) < 0) << 31) >> 31;
                break a;
              }
              case 11: {
                e = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                b = c[e >> 2] | 0;
                c[d >> 2] = e + 4;
                e = a;
                c[e >> 2] = b;
                c[(e + 4) >> 2] = 0;
                break a;
              }
              case 12: {
                e = ((c[d >> 2] | 0) + (8 - 1)) & ~(8 - 1);
                b = e;
                f = c[b >> 2] | 0;
                b = c[(b + 4) >> 2] | 0;
                c[d >> 2] = e + 8;
                e = a;
                c[e >> 2] = f;
                c[(e + 4) >> 2] = b;
                break a;
              }
              case 13: {
                f = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                e = c[f >> 2] | 0;
                c[d >> 2] = f + 4;
                e = ((e & 65535) << 16) >> 16;
                f = a;
                c[f >> 2] = e;
                c[(f + 4) >> 2] = (((e | 0) < 0) << 31) >> 31;
                break a;
              }
              case 14: {
                f = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                e = c[f >> 2] | 0;
                c[d >> 2] = f + 4;
                f = a;
                c[f >> 2] = e & 65535;
                c[(f + 4) >> 2] = 0;
                break a;
              }
              case 15: {
                f = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                e = c[f >> 2] | 0;
                c[d >> 2] = f + 4;
                e = ((e & 255) << 24) >> 24;
                f = a;
                c[f >> 2] = e;
                c[(f + 4) >> 2] = (((e | 0) < 0) << 31) >> 31;
                break a;
              }
              case 16: {
                f = ((c[d >> 2] | 0) + (4 - 1)) & ~(4 - 1);
                e = c[f >> 2] | 0;
                c[d >> 2] = f + 4;
                f = a;
                c[f >> 2] = e & 255;
                c[(f + 4) >> 2] = 0;
                break a;
              }
              case 17: {
                f = ((c[d >> 2] | 0) + (8 - 1)) & ~(8 - 1);
                g = +h[f >> 3];
                c[d >> 2] = f + 8;
                h[a >> 3] = g;
                break a;
              }
              case 18: {
                f = ((c[d >> 2] | 0) + (8 - 1)) & ~(8 - 1);
                g = +h[f >> 3];
                c[d >> 2] = f + 8;
                h[a >> 3] = g;
                break a;
              }
              default:
                break a;
            }
          while (0);
      while (0);
      return;
    }
    function Qd(b, c, e, f) {
      b = b | 0;
      c = c | 0;
      e = e | 0;
      f = f | 0;
      if (!(((b | 0) == 0) & ((c | 0) == 0)))
        do {
          e = (e + -1) | 0;
          a[e >> 0] = d[(9151 + (b & 15)) >> 0] | 0 | f;
          b = ne(b | 0, c | 0, 4) | 0;
          c = z;
        } while (!(((b | 0) == 0) & ((c | 0) == 0)));
      return e | 0;
    }
    function Rd(b, c, d) {
      b = b | 0;
      c = c | 0;
      d = d | 0;
      if (!(((b | 0) == 0) & ((c | 0) == 0)))
        do {
          d = (d + -1) | 0;
          a[d >> 0] = (b & 7) | 48;
          b = ne(b | 0, c | 0, 3) | 0;
          c = z;
        } while (!(((b | 0) == 0) & ((c | 0) == 0)));
      return d | 0;
    }
    function Sd(b, c, d) {
      b = b | 0;
      c = c | 0;
      d = d | 0;
      var e = 0;
      if ((c >>> 0 > 0) | (((c | 0) == 0) & (b >>> 0 > 4294967295))) {
        while (1) {
          e = xe(b | 0, c | 0, 10, 0) | 0;
          d = (d + -1) | 0;
          a[d >> 0] = (e & 255) | 48;
          e = b;
          b = se(b | 0, c | 0, 10, 0) | 0;
          if (!((c >>> 0 > 9) | (((c | 0) == 9) & (e >>> 0 > 4294967295)))) break;
          else c = z;
        }
        c = b;
      } else c = b;
      if (c)
        while (1) {
          d = (d + -1) | 0;
          a[d >> 0] = (c >>> 0) % 10 | 0 | 48;
          if (c >>> 0 < 10) break;
          else c = ((c >>> 0) / 10) | 0;
        }
      return d | 0;
    }
    function Td(a) {
      a = a | 0;
      return ae(a, c[185] | 0) | 0;
    }
    function Ud(b, d) {
      b = b | 0;
      d = d | 0;
      var e = 0,
        f = 0;
      e = (d | 0) != 0;
      a: do
        if (e & (((b & 3) | 0) != 0))
          while (1) {
            if (!(a[b >> 0] | 0)) break a;
            b = (b + 1) | 0;
            d = (d + -1) | 0;
            e = (d | 0) != 0;
            if (!(e & (((b & 3) | 0) != 0))) {
              f = 4;
              break;
            }
          }
        else f = 4;
      while (0);
      b: do
        if ((f | 0) == 4)
          if (e) {
            if (a[b >> 0] | 0) {
              c: do
                if (d >>> 0 > 3)
                  while (1) {
                    e = c[b >> 2] | 0;
                    if ((((e & -2139062144) ^ -2139062144) & (e + -16843009)) | 0) break;
                    b = (b + 4) | 0;
                    d = (d + -4) | 0;
                    if (d >>> 0 <= 3) {
                      f = 10;
                      break c;
                    }
                  }
                else f = 10;
              while (0);
              if ((f | 0) == 10)
                if (!d) {
                  d = 0;
                  break;
                }
              while (1) {
                if (!(a[b >> 0] | 0)) break b;
                b = (b + 1) | 0;
                d = (d + -1) | 0;
                if (!d) {
                  d = 0;
                  break;
                }
              }
            }
          } else d = 0;
      while (0);
      return (d | 0 ? b : 0) | 0;
    }
    function Vd(a, b, c, d, e) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0;
      g = l;
      l = (l + 256) | 0;
      f = g;
      if (((c | 0) > (d | 0)) & (((e & 73728) | 0) == 0)) {
        c = (c - d) | 0;
        me(f | 0, b | 0, (c >>> 0 < 256 ? c : 256) | 0) | 0;
        if (c >>> 0 > 255) {
          d = c;
          do {
            Nd(a, f, 256);
            d = (d + -256) | 0;
          } while (d >>> 0 > 255);
          c = c & 255;
        }
        Nd(a, f, c);
      }
      l = g;
      return;
    }
    function Wd(a, b) {
      a = a | 0;
      b = b | 0;
      if (!a) a = 0;
      else a = $d(a, b) | 0;
      return a | 0;
    }
    function Xd(b, e, f, g, h, i) {
      b = b | 0;
      e = +e;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      var j = 0,
        k = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0.0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 0,
        A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0;
      H = l;
      l = (l + 560) | 0;
      m = (H + 8) | 0;
      u = H;
      G = (H + 524) | 0;
      F = G;
      n = (H + 512) | 0;
      c[u >> 2] = 0;
      E = (n + 12) | 0;
      Yd(e) | 0;
      if ((z | 0) < 0) {
        e = -e;
        C = 1;
        B = 9120;
      } else {
        C = (((h & 2049) | 0) != 0) & 1;
        B = ((h & 2048) | 0) == 0 ? (((h & 1) | 0) == 0 ? 9121 : 9126) : 9123;
      }
      Yd(e) | 0;
      D = z & 2146435072;
      do
        if ((D >>> 0 < 2146435072) | (((D | 0) == 2146435072) & (0 < 0))) {
          r = +Zd(e, u) * 2.0;
          j = r != 0.0;
          if (j) c[u >> 2] = (c[u >> 2] | 0) + -1;
          w = i | 32;
          if ((w | 0) == 97) {
            s = i & 32;
            q = (s | 0) == 0 ? B : (B + 9) | 0;
            p = C | 2;
            j = (12 - g) | 0;
            do
              if (!((g >>> 0 > 11) | ((j | 0) == 0))) {
                e = 8.0;
                do {
                  j = (j + -1) | 0;
                  e = e * 16.0;
                } while ((j | 0) != 0);
                if ((a[q >> 0] | 0) == 45) {
                  e = -(e + (-r - e));
                  break;
                } else {
                  e = r + e - e;
                  break;
                }
              } else e = r;
            while (0);
            k = c[u >> 2] | 0;
            j = (k | 0) < 0 ? (0 - k) | 0 : k;
            j = Sd(j, (((j | 0) < 0) << 31) >> 31, E) | 0;
            if ((j | 0) == (E | 0)) {
              j = (n + 11) | 0;
              a[j >> 0] = 48;
            }
            a[(j + -1) >> 0] = ((k >> 31) & 2) + 43;
            o = (j + -2) | 0;
            a[o >> 0] = i + 15;
            n = (g | 0) < 1;
            m = ((h & 8) | 0) == 0;
            j = G;
            do {
              D = ~~e;
              k = (j + 1) | 0;
              a[j >> 0] = d[(9151 + D) >> 0] | s;
              e = (e - +(D | 0)) * 16.0;
              if (((k - F) | 0) == 1 ? !(m & (n & (e == 0.0))) : 0) {
                a[k >> 0] = 46;
                j = (j + 2) | 0;
              } else j = k;
            } while (e != 0.0);
            D = (j - F) | 0;
            F = (E - o) | 0;
            E = ((g | 0) != 0) & (((D + -2) | 0) < (g | 0)) ? (g + 2) | 0 : D;
            j = (F + p + E) | 0;
            Vd(b, 32, f, j, h);
            Nd(b, q, p);
            Vd(b, 48, f, j, h ^ 65536);
            Nd(b, G, D);
            Vd(b, 48, (E - D) | 0, 0, 0);
            Nd(b, o, F);
            Vd(b, 32, f, j, h ^ 8192);
            break;
          }
          k = (g | 0) < 0 ? 6 : g;
          if (j) {
            j = ((c[u >> 2] | 0) + -28) | 0;
            c[u >> 2] = j;
            e = r * 268435456.0;
          } else {
            e = r;
            j = c[u >> 2] | 0;
          }
          D = (j | 0) < 0 ? m : (m + 288) | 0;
          m = D;
          do {
            y = ~~e >>> 0;
            c[m >> 2] = y;
            m = (m + 4) | 0;
            e = (e - +(y >>> 0)) * 1.0e9;
          } while (e != 0.0);
          if ((j | 0) > 0) {
            n = D;
            p = m;
            while (1) {
              o = (j | 0) < 29 ? j : 29;
              j = (p + -4) | 0;
              if (j >>> 0 >= n >>> 0) {
                m = 0;
                do {
                  x = oe(c[j >> 2] | 0, 0, o | 0) | 0;
                  x = le(x | 0, z | 0, m | 0, 0) | 0;
                  y = z;
                  v = xe(x | 0, y | 0, 1e9, 0) | 0;
                  c[j >> 2] = v;
                  m = se(x | 0, y | 0, 1e9, 0) | 0;
                  j = (j + -4) | 0;
                } while (j >>> 0 >= n >>> 0);
                if (m) {
                  n = (n + -4) | 0;
                  c[n >> 2] = m;
                }
              }
              m = p;
              while (1) {
                if (m >>> 0 <= n >>> 0) break;
                j = (m + -4) | 0;
                if (!(c[j >> 2] | 0)) m = j;
                else break;
              }
              j = ((c[u >> 2] | 0) - o) | 0;
              c[u >> 2] = j;
              if ((j | 0) > 0) p = m;
              else break;
            }
          } else n = D;
          if ((j | 0) < 0) {
            g = (((((k + 25) | 0) / 9) | 0) + 1) | 0;
            t = (w | 0) == 102;
            do {
              s = (0 - j) | 0;
              s = (s | 0) < 9 ? s : 9;
              if (n >>> 0 < m >>> 0) {
                o = ((1 << s) + -1) | 0;
                p = 1e9 >>> s;
                q = 0;
                j = n;
                do {
                  y = c[j >> 2] | 0;
                  c[j >> 2] = (y >>> s) + q;
                  q = O(y & o, p) | 0;
                  j = (j + 4) | 0;
                } while (j >>> 0 < m >>> 0);
                j = (c[n >> 2] | 0) == 0 ? (n + 4) | 0 : n;
                if (!q) {
                  n = j;
                  j = m;
                } else {
                  c[m >> 2] = q;
                  n = j;
                  j = (m + 4) | 0;
                }
              } else {
                n = (c[n >> 2] | 0) == 0 ? (n + 4) | 0 : n;
                j = m;
              }
              m = t ? D : n;
              m = (((j - m) >> 2) | 0) > (g | 0) ? (m + (g << 2)) | 0 : j;
              j = ((c[u >> 2] | 0) + s) | 0;
              c[u >> 2] = j;
            } while ((j | 0) < 0);
            j = n;
            g = m;
          } else {
            j = n;
            g = m;
          }
          y = D;
          if (j >>> 0 < g >>> 0) {
            m = (((y - j) >> 2) * 9) | 0;
            o = c[j >> 2] | 0;
            if (o >>> 0 >= 10) {
              n = 10;
              do {
                n = (n * 10) | 0;
                m = (m + 1) | 0;
              } while (o >>> 0 >= n >>> 0);
            }
          } else m = 0;
          t = (w | 0) == 103;
          v = (k | 0) != 0;
          n = (k - ((w | 0) != 102 ? m : 0) + (((v & t) << 31) >> 31)) | 0;
          if ((n | 0) < ((((((g - y) >> 2) * 9) | 0) + -9) | 0)) {
            n = (n + 9216) | 0;
            s = (D + 4 + (((((n | 0) / 9) | 0) + -1024) << 2)) | 0;
            n = (((n | 0) % 9 | 0) + 1) | 0;
            if ((n | 0) < 9) {
              o = 10;
              do {
                o = (o * 10) | 0;
                n = (n + 1) | 0;
              } while ((n | 0) != 9);
            } else o = 10;
            p = c[s >> 2] | 0;
            q = (p >>> 0) % (o >>> 0) | 0;
            n = ((s + 4) | 0) == (g | 0);
            if (!(n & ((q | 0) == 0))) {
              r = (((((p >>> 0) / (o >>> 0)) | 0) & 1) | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
              x = ((o | 0) / 2) | 0;
              e = q >>> 0 < x >>> 0 ? 0.5 : n & ((q | 0) == (x | 0)) ? 1.0 : 1.5;
              if (C) {
                x = (a[B >> 0] | 0) == 45;
                e = x ? -e : e;
                r = x ? -r : r;
              }
              n = (p - q) | 0;
              c[s >> 2] = n;
              if (r + e != r) {
                x = (n + o) | 0;
                c[s >> 2] = x;
                if (x >>> 0 > 999999999) {
                  m = s;
                  while (1) {
                    n = (m + -4) | 0;
                    c[m >> 2] = 0;
                    if (n >>> 0 < j >>> 0) {
                      j = (j + -4) | 0;
                      c[j >> 2] = 0;
                    }
                    x = ((c[n >> 2] | 0) + 1) | 0;
                    c[n >> 2] = x;
                    if (x >>> 0 > 999999999) m = n;
                    else break;
                  }
                } else n = s;
                m = (((y - j) >> 2) * 9) | 0;
                p = c[j >> 2] | 0;
                if (p >>> 0 >= 10) {
                  o = 10;
                  do {
                    o = (o * 10) | 0;
                    m = (m + 1) | 0;
                  } while (p >>> 0 >= o >>> 0);
                }
              } else n = s;
            } else n = s;
            n = (n + 4) | 0;
            n = g >>> 0 > n >>> 0 ? n : g;
            x = j;
          } else {
            n = g;
            x = j;
          }
          w = n;
          while (1) {
            if (w >>> 0 <= x >>> 0) {
              u = 0;
              break;
            }
            j = (w + -4) | 0;
            if (!(c[j >> 2] | 0)) w = j;
            else {
              u = 1;
              break;
            }
          }
          g = (0 - m) | 0;
          do
            if (t) {
              j = (((v ^ 1) & 1) + k) | 0;
              k = ((j | 0) > (m | 0)) & ((m | 0) > -5);
              o = ((k ? -1 : -2) + i) | 0;
              k = (j + -1 + (k ? g : 0)) | 0;
              j = h & 8;
              if (!j) {
                if (u ? ((A = c[(w + -4) >> 2] | 0), (A | 0) != 0) : 0)
                  if (!((A >>> 0) % 10 | 0)) {
                    n = 0;
                    j = 10;
                    do {
                      j = (j * 10) | 0;
                      n = (n + 1) | 0;
                    } while (!((A >>> 0) % (j >>> 0) | 0 | 0));
                  } else n = 0;
                else n = 9;
                j = (((((w - y) >> 2) * 9) | 0) + -9) | 0;
                if ((o | 32 | 0) == 102) {
                  s = (j - n) | 0;
                  s = (s | 0) > 0 ? s : 0;
                  k = (k | 0) < (s | 0) ? k : s;
                  s = 0;
                  break;
                } else {
                  s = (j + m - n) | 0;
                  s = (s | 0) > 0 ? s : 0;
                  k = (k | 0) < (s | 0) ? k : s;
                  s = 0;
                  break;
                }
              } else s = j;
            } else {
              o = i;
              s = h & 8;
            }
          while (0);
          t = k | s;
          p = ((t | 0) != 0) & 1;
          q = (o | 32 | 0) == 102;
          if (q) {
            v = 0;
            j = (m | 0) > 0 ? m : 0;
          } else {
            j = (m | 0) < 0 ? g : m;
            j = Sd(j, (((j | 0) < 0) << 31) >> 31, E) | 0;
            n = E;
            if (((n - j) | 0) < 2)
              do {
                j = (j + -1) | 0;
                a[j >> 0] = 48;
              } while (((n - j) | 0) < 2);
            a[(j + -1) >> 0] = ((m >> 31) & 2) + 43;
            j = (j + -2) | 0;
            a[j >> 0] = o;
            v = j;
            j = (n - j) | 0;
          }
          j = (C + 1 + k + p + j) | 0;
          Vd(b, 32, f, j, h);
          Nd(b, B, C);
          Vd(b, 48, f, j, h ^ 65536);
          if (q) {
            o = x >>> 0 > D >>> 0 ? D : x;
            s = (G + 9) | 0;
            p = s;
            q = (G + 8) | 0;
            n = o;
            do {
              m = Sd(c[n >> 2] | 0, 0, s) | 0;
              if ((n | 0) == (o | 0)) {
                if ((m | 0) == (s | 0)) {
                  a[q >> 0] = 48;
                  m = q;
                }
              } else if (m >>> 0 > G >>> 0) {
                me(G | 0, 48, (m - F) | 0) | 0;
                do m = (m + -1) | 0;
                while (m >>> 0 > G >>> 0);
              }
              Nd(b, m, (p - m) | 0);
              n = (n + 4) | 0;
            } while (n >>> 0 <= D >>> 0);
            if (t | 0) Nd(b, 11070, 1);
            if (((k | 0) > 0) & (n >>> 0 < w >>> 0))
              while (1) {
                m = Sd(c[n >> 2] | 0, 0, s) | 0;
                if (m >>> 0 > G >>> 0) {
                  me(G | 0, 48, (m - F) | 0) | 0;
                  do m = (m + -1) | 0;
                  while (m >>> 0 > G >>> 0);
                }
                Nd(b, m, (k | 0) < 9 ? k : 9);
                n = (n + 4) | 0;
                m = (k + -9) | 0;
                if (!(((k | 0) > 9) & (n >>> 0 < w >>> 0))) {
                  k = m;
                  break;
                } else k = m;
              }
            Vd(b, 48, (k + 9) | 0, 9, 0);
          } else {
            t = u ? w : (x + 4) | 0;
            if ((k | 0) > -1) {
              u = (G + 9) | 0;
              s = (s | 0) == 0;
              g = u;
              p = (0 - F) | 0;
              q = (G + 8) | 0;
              o = x;
              do {
                m = Sd(c[o >> 2] | 0, 0, u) | 0;
                if ((m | 0) == (u | 0)) {
                  a[q >> 0] = 48;
                  m = q;
                }
                do
                  if ((o | 0) == (x | 0)) {
                    n = (m + 1) | 0;
                    Nd(b, m, 1);
                    if (s & ((k | 0) < 1)) {
                      m = n;
                      break;
                    }
                    Nd(b, 11070, 1);
                    m = n;
                  } else {
                    if (m >>> 0 <= G >>> 0) break;
                    me(G | 0, 48, (m + p) | 0) | 0;
                    do m = (m + -1) | 0;
                    while (m >>> 0 > G >>> 0);
                  }
                while (0);
                F = (g - m) | 0;
                Nd(b, m, (k | 0) > (F | 0) ? F : k);
                k = (k - F) | 0;
                o = (o + 4) | 0;
              } while ((o >>> 0 < t >>> 0) & ((k | 0) > -1));
            }
            Vd(b, 48, (k + 18) | 0, 18, 0);
            Nd(b, v, (E - v) | 0);
          }
          Vd(b, 32, f, j, h ^ 8192);
        } else {
          G = ((i & 32) | 0) != 0;
          j = (C + 3) | 0;
          Vd(b, 32, f, j, h & -65537);
          Nd(b, B, C);
          Nd(b, (e != e) | (0.0 != 0.0) ? (G ? 11059 : 9147) : G ? 9139 : 9143, 3);
          Vd(b, 32, f, j, h ^ 8192);
        }
      while (0);
      l = H;
      return ((j | 0) < (f | 0) ? f : j) | 0;
    }
    function Yd(a) {
      a = +a;
      var b = 0;
      h[j >> 3] = a;
      b = c[j >> 2] | 0;
      z = c[(j + 4) >> 2] | 0;
      return b | 0;
    }
    function Zd(a, b) {
      a = +a;
      b = b | 0;
      return +(+_d(a, b));
    }
    function _d(a, b) {
      a = +a;
      b = b | 0;
      var d = 0,
        e = 0,
        f = 0;
      h[j >> 3] = a;
      d = c[j >> 2] | 0;
      e = c[(j + 4) >> 2] | 0;
      f = ne(d | 0, e | 0, 52) | 0;
      switch (f & 2047) {
        case 0: {
          if (a != 0.0) {
            a = +_d(a * 18446744073709551616.0, b);
            d = ((c[b >> 2] | 0) + -64) | 0;
          } else d = 0;
          c[b >> 2] = d;
          break;
        }
        case 2047:
          break;
        default: {
          c[b >> 2] = (f & 2047) + -1022;
          c[j >> 2] = d;
          c[(j + 4) >> 2] = (e & -2146435073) | 1071644672;
          a = +h[j >> 3];
        }
      }
      return +a;
    }
    function $d(b, d) {
      b = b | 0;
      d = d | 0;
      do
        if (b) {
          if (d >>> 0 < 128) {
            a[b >> 0] = d;
            b = 1;
            break;
          }
          if (!(c[c[185] >> 2] | 0))
            if (((d & -128) | 0) == 57216) {
              a[b >> 0] = d;
              b = 1;
              break;
            } else {
              c[154] = 84;
              b = -1;
              break;
            }
          if (d >>> 0 < 2048) {
            a[b >> 0] = (d >>> 6) | 192;
            a[(b + 1) >> 0] = (d & 63) | 128;
            b = 2;
            break;
          }
          if ((d >>> 0 < 55296) | (((d & -8192) | 0) == 57344)) {
            a[b >> 0] = (d >>> 12) | 224;
            a[(b + 1) >> 0] = ((d >>> 6) & 63) | 128;
            a[(b + 2) >> 0] = (d & 63) | 128;
            b = 3;
            break;
          }
          if (((d + -65536) | 0) >>> 0 < 1048576) {
            a[b >> 0] = (d >>> 18) | 240;
            a[(b + 1) >> 0] = ((d >>> 12) & 63) | 128;
            a[(b + 2) >> 0] = ((d >>> 6) & 63) | 128;
            a[(b + 3) >> 0] = (d & 63) | 128;
            b = 4;
            break;
          } else {
            c[154] = 84;
            b = -1;
            break;
          }
        } else b = 1;
      while (0);
      return b | 0;
    }
    function ae(b, e) {
      b = b | 0;
      e = e | 0;
      var f = 0,
        g = 0;
      g = 0;
      while (1) {
        if ((d[(9167 + g) >> 0] | 0) == (b | 0)) {
          b = 2;
          break;
        }
        f = (g + 1) | 0;
        if ((f | 0) == 87) {
          f = 9255;
          g = 87;
          b = 5;
          break;
        } else g = f;
      }
      if ((b | 0) == 2)
        if (!g) f = 9255;
        else {
          f = 9255;
          b = 5;
        }
      if ((b | 0) == 5)
        while (1) {
          do {
            b = f;
            f = (f + 1) | 0;
          } while ((a[b >> 0] | 0) != 0);
          g = (g + -1) | 0;
          if (!g) break;
          else b = 5;
        }
      return be(f, c[(e + 20) >> 2] | 0) | 0;
    }
    function be(a, b) {
      a = a | 0;
      b = b | 0;
      return ce(a, b) | 0;
    }
    function ce(a, b) {
      a = a | 0;
      b = b | 0;
      if (!b) b = 0;
      else b = de(c[b >> 2] | 0, c[(b + 4) >> 2] | 0, a) | 0;
      return (b | 0 ? b : a) | 0;
    }
    function de(b, d, e) {
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0;
      o = ((c[b >> 2] | 0) + 1794895138) | 0;
      h = ee(c[(b + 8) >> 2] | 0, o) | 0;
      f = ee(c[(b + 12) >> 2] | 0, o) | 0;
      g = ee(c[(b + 16) >> 2] | 0, o) | 0;
      a: do
        if (
          (h >>> 0 < (d >>> 2) >>> 0 ? ((n = (d - (h << 2)) | 0), (f >>> 0 < n >>> 0) & (g >>> 0 < n >>> 0)) : 0)
            ? (((g | f) & 3) | 0) == 0
            : 0
        ) {
          n = f >>> 2;
          m = g >>> 2;
          l = 0;
          while (1) {
            j = h >>> 1;
            k = (l + j) | 0;
            i = k << 1;
            g = (i + n) | 0;
            f = ee(c[(b + (g << 2)) >> 2] | 0, o) | 0;
            g = ee(c[(b + ((g + 1) << 2)) >> 2] | 0, o) | 0;
            if (!((g >>> 0 < d >>> 0) & (f >>> 0 < ((d - g) | 0) >>> 0))) {
              f = 0;
              break a;
            }
            if (a[(b + (g + f)) >> 0] | 0) {
              f = 0;
              break a;
            }
            f = Jd(e, (b + g) | 0) | 0;
            if (!f) break;
            f = (f | 0) < 0;
            if ((h | 0) == 1) {
              f = 0;
              break a;
            } else {
              l = f ? l : k;
              h = f ? j : (h - j) | 0;
            }
          }
          f = (i + m) | 0;
          g = ee(c[(b + (f << 2)) >> 2] | 0, o) | 0;
          f = ee(c[(b + ((f + 1) << 2)) >> 2] | 0, o) | 0;
          if ((f >>> 0 < d >>> 0) & (g >>> 0 < ((d - f) | 0) >>> 0)) f = (a[(b + (f + g)) >> 0] | 0) == 0 ? (b + f) | 0 : 0;
          else f = 0;
        } else f = 0;
      while (0);
      return f | 0;
    }
    function ee(a, b) {
      a = a | 0;
      b = b | 0;
      var c = 0;
      c = ye(a | 0) | 0;
      return ((b | 0) == 0 ? a : c) | 0;
    }
    function fe(b, d, e) {
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0,
        j = 0;
      f = (e + 16) | 0;
      g = c[f >> 2] | 0;
      if (!g)
        if (!(ge(e) | 0)) {
          g = c[f >> 2] | 0;
          h = 5;
        } else f = 0;
      else h = 5;
      a: do
        if ((h | 0) == 5) {
          j = (e + 20) | 0;
          i = c[j >> 2] | 0;
          f = i;
          if (((g - i) | 0) >>> 0 < d >>> 0) {
            f = Pa[c[(e + 36) >> 2] & 15](e, b, d) | 0;
            break;
          }
          b: do
            if ((a[(e + 75) >> 0] | 0) > -1) {
              i = d;
              while (1) {
                if (!i) {
                  h = 0;
                  g = b;
                  break b;
                }
                g = (i + -1) | 0;
                if ((a[(b + g) >> 0] | 0) == 10) break;
                else i = g;
              }
              f = Pa[c[(e + 36) >> 2] & 15](e, b, i) | 0;
              if (f >>> 0 < i >>> 0) break a;
              h = i;
              g = (b + i) | 0;
              d = (d - i) | 0;
              f = c[j >> 2] | 0;
            } else {
              h = 0;
              g = b;
            }
          while (0);
          pe(f | 0, g | 0, d | 0) | 0;
          c[j >> 2] = (c[j >> 2] | 0) + d;
          f = (h + d) | 0;
        }
      while (0);
      return f | 0;
    }
    function ge(b) {
      b = b | 0;
      var d = 0,
        e = 0;
      d = (b + 74) | 0;
      e = a[d >> 0] | 0;
      a[d >> 0] = (e + 255) | e;
      d = c[b >> 2] | 0;
      if (!(d & 8)) {
        c[(b + 8) >> 2] = 0;
        c[(b + 4) >> 2] = 0;
        e = c[(b + 44) >> 2] | 0;
        c[(b + 28) >> 2] = e;
        c[(b + 20) >> 2] = e;
        c[(b + 16) >> 2] = e + (c[(b + 48) >> 2] | 0);
        b = 0;
      } else {
        c[b >> 2] = d | 32;
        b = -1;
      }
      return b | 0;
    }
    function he() {
      fe(1118, 23, 428) | 0;
      return;
    }
    function ie(a, b, d) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      var e = 0;
      a = l;
      l = (l + 16) | 0;
      e = a;
      c[e >> 2] = d;
      Ld(b, e);
      l = a;
      return;
    }
    function je() {}
    function ke(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      d = (b - d - ((c >>> 0 > a >>> 0) | 0)) >>> 0;
      return ((z = d), ((a - c) >>> 0) | 0) | 0;
    }
    function le(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      c = (a + c) >>> 0;
      return ((z = (b + d + ((c >>> 0 < a >>> 0) | 0)) >>> 0), c | 0) | 0;
    }
    function me(b, d, e) {
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0,
        i = 0;
      h = (b + e) | 0;
      d = d & 255;
      if ((e | 0) >= 67) {
        while (b & 3) {
          a[b >> 0] = d;
          b = (b + 1) | 0;
        }
        f = (h & -4) | 0;
        g = (f - 64) | 0;
        i = d | (d << 8) | (d << 16) | (d << 24);
        while ((b | 0) <= (g | 0)) {
          c[b >> 2] = i;
          c[(b + 4) >> 2] = i;
          c[(b + 8) >> 2] = i;
          c[(b + 12) >> 2] = i;
          c[(b + 16) >> 2] = i;
          c[(b + 20) >> 2] = i;
          c[(b + 24) >> 2] = i;
          c[(b + 28) >> 2] = i;
          c[(b + 32) >> 2] = i;
          c[(b + 36) >> 2] = i;
          c[(b + 40) >> 2] = i;
          c[(b + 44) >> 2] = i;
          c[(b + 48) >> 2] = i;
          c[(b + 52) >> 2] = i;
          c[(b + 56) >> 2] = i;
          c[(b + 60) >> 2] = i;
          b = (b + 64) | 0;
        }
        while ((b | 0) < (f | 0)) {
          c[b >> 2] = i;
          b = (b + 4) | 0;
        }
      }
      while ((b | 0) < (h | 0)) {
        a[b >> 0] = d;
        b = (b + 1) | 0;
      }
      return (h - e) | 0;
    }
    function ne(a, b, c) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      if ((c | 0) < 32) {
        z = b >>> c;
        return (a >>> c) | ((b & ((1 << c) - 1)) << (32 - c));
      }
      z = 0;
      return (b >>> (c - 32)) | 0;
    }
    function oe(a, b, c) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      if ((c | 0) < 32) {
        z = (b << c) | ((a & (((1 << c) - 1) << (32 - c))) >>> (32 - c));
        return a << c;
      }
      z = a << (c - 32);
      return 0;
    }
    function pe(b, d, e) {
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0,
        h = 0;
      if ((e | 0) >= 8192) return wa(b | 0, d | 0, e | 0) | 0;
      h = b | 0;
      g = (b + e) | 0;
      if ((b & 3) == (d & 3)) {
        while (b & 3) {
          if (!e) return h | 0;
          a[b >> 0] = a[d >> 0] | 0;
          b = (b + 1) | 0;
          d = (d + 1) | 0;
          e = (e - 1) | 0;
        }
        e = (g & -4) | 0;
        f = (e - 64) | 0;
        while ((b | 0) <= (f | 0)) {
          c[b >> 2] = c[d >> 2];
          c[(b + 4) >> 2] = c[(d + 4) >> 2];
          c[(b + 8) >> 2] = c[(d + 8) >> 2];
          c[(b + 12) >> 2] = c[(d + 12) >> 2];
          c[(b + 16) >> 2] = c[(d + 16) >> 2];
          c[(b + 20) >> 2] = c[(d + 20) >> 2];
          c[(b + 24) >> 2] = c[(d + 24) >> 2];
          c[(b + 28) >> 2] = c[(d + 28) >> 2];
          c[(b + 32) >> 2] = c[(d + 32) >> 2];
          c[(b + 36) >> 2] = c[(d + 36) >> 2];
          c[(b + 40) >> 2] = c[(d + 40) >> 2];
          c[(b + 44) >> 2] = c[(d + 44) >> 2];
          c[(b + 48) >> 2] = c[(d + 48) >> 2];
          c[(b + 52) >> 2] = c[(d + 52) >> 2];
          c[(b + 56) >> 2] = c[(d + 56) >> 2];
          c[(b + 60) >> 2] = c[(d + 60) >> 2];
          b = (b + 64) | 0;
          d = (d + 64) | 0;
        }
        while ((b | 0) < (e | 0)) {
          c[b >> 2] = c[d >> 2];
          b = (b + 4) | 0;
          d = (d + 4) | 0;
        }
      } else {
        e = (g - 4) | 0;
        while ((b | 0) < (e | 0)) {
          a[b >> 0] = a[d >> 0] | 0;
          a[(b + 1) >> 0] = a[(d + 1) >> 0] | 0;
          a[(b + 2) >> 0] = a[(d + 2) >> 0] | 0;
          a[(b + 3) >> 0] = a[(d + 3) >> 0] | 0;
          b = (b + 4) | 0;
          d = (d + 4) | 0;
        }
      }
      while ((b | 0) < (g | 0)) {
        a[b >> 0] = a[d >> 0] | 0;
        b = (b + 1) | 0;
        d = (d + 1) | 0;
      }
      return h | 0;
    }
    function qe(b) {
      b = b | 0;
      var c = 0;
      c = a[(n + (b & 255)) >> 0] | 0;
      if ((c | 0) < 8) return c | 0;
      c = a[(n + ((b >> 8) & 255)) >> 0] | 0;
      if ((c | 0) < 8) return (c + 8) | 0;
      c = a[(n + ((b >> 16) & 255)) >> 0] | 0;
      if ((c | 0) < 8) return (c + 16) | 0;
      return ((a[(n + (b >>> 24)) >> 0] | 0) + 24) | 0;
    }
    function re(a, b, d, e, f) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      var g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      l = a;
      j = b;
      k = j;
      h = d;
      n = e;
      i = n;
      if (!k) {
        g = (f | 0) != 0;
        if (!i) {
          if (g) {
            c[f >> 2] = (l >>> 0) % (h >>> 0);
            c[(f + 4) >> 2] = 0;
          }
          n = 0;
          f = ((l >>> 0) / (h >>> 0)) >>> 0;
          return ((z = n), f) | 0;
        } else {
          if (!g) {
            n = 0;
            f = 0;
            return ((z = n), f) | 0;
          }
          c[f >> 2] = a | 0;
          c[(f + 4) >> 2] = b & 0;
          n = 0;
          f = 0;
          return ((z = n), f) | 0;
        }
      }
      g = (i | 0) == 0;
      do
        if (h) {
          if (!g) {
            g = ((R(i | 0) | 0) - (R(k | 0) | 0)) | 0;
            if (g >>> 0 <= 31) {
              m = (g + 1) | 0;
              i = (31 - g) | 0;
              b = (g - 31) >> 31;
              h = m;
              a = ((l >>> (m >>> 0)) & b) | (k << i);
              b = (k >>> (m >>> 0)) & b;
              g = 0;
              i = l << i;
              break;
            }
            if (!f) {
              n = 0;
              f = 0;
              return ((z = n), f) | 0;
            }
            c[f >> 2] = a | 0;
            c[(f + 4) >> 2] = j | (b & 0);
            n = 0;
            f = 0;
            return ((z = n), f) | 0;
          }
          g = (h - 1) | 0;
          if ((g & h) | 0) {
            i = ((R(h | 0) | 0) + 33 - (R(k | 0) | 0)) | 0;
            p = (64 - i) | 0;
            m = (32 - i) | 0;
            j = m >> 31;
            o = (i - 32) | 0;
            b = o >> 31;
            h = i;
            a = (((m - 1) >> 31) & (k >>> (o >>> 0))) | (((k << m) | (l >>> (i >>> 0))) & b);
            b = b & (k >>> (i >>> 0));
            g = (l << p) & j;
            i = (((k << p) | (l >>> (o >>> 0))) & j) | ((l << m) & ((i - 33) >> 31));
            break;
          }
          if (f | 0) {
            c[f >> 2] = g & l;
            c[(f + 4) >> 2] = 0;
          }
          if ((h | 0) == 1) {
            o = j | (b & 0);
            p = a | 0 | 0;
            return ((z = o), p) | 0;
          } else {
            p = qe(h | 0) | 0;
            o = (k >>> (p >>> 0)) | 0;
            p = (k << (32 - p)) | (l >>> (p >>> 0)) | 0;
            return ((z = o), p) | 0;
          }
        } else {
          if (g) {
            if (f | 0) {
              c[f >> 2] = (k >>> 0) % (h >>> 0);
              c[(f + 4) >> 2] = 0;
            }
            o = 0;
            p = ((k >>> 0) / (h >>> 0)) >>> 0;
            return ((z = o), p) | 0;
          }
          if (!l) {
            if (f | 0) {
              c[f >> 2] = 0;
              c[(f + 4) >> 2] = (k >>> 0) % (i >>> 0);
            }
            o = 0;
            p = ((k >>> 0) / (i >>> 0)) >>> 0;
            return ((z = o), p) | 0;
          }
          g = (i - 1) | 0;
          if (!(g & i)) {
            if (f | 0) {
              c[f >> 2] = a | 0;
              c[(f + 4) >> 2] = (g & k) | (b & 0);
            }
            o = 0;
            p = k >>> ((qe(i | 0) | 0) >>> 0);
            return ((z = o), p) | 0;
          }
          g = ((R(i | 0) | 0) - (R(k | 0) | 0)) | 0;
          if (g >>> 0 <= 30) {
            b = (g + 1) | 0;
            i = (31 - g) | 0;
            h = b;
            a = (k << i) | (l >>> (b >>> 0));
            b = k >>> (b >>> 0);
            g = 0;
            i = l << i;
            break;
          }
          if (!f) {
            o = 0;
            p = 0;
            return ((z = o), p) | 0;
          }
          c[f >> 2] = a | 0;
          c[(f + 4) >> 2] = j | (b & 0);
          o = 0;
          p = 0;
          return ((z = o), p) | 0;
        }
      while (0);
      if (!h) {
        k = i;
        j = 0;
        i = 0;
      } else {
        m = d | 0 | 0;
        l = n | (e & 0);
        k = le(m | 0, l | 0, -1, -1) | 0;
        d = z;
        j = i;
        i = 0;
        do {
          e = j;
          j = (g >>> 31) | (j << 1);
          g = i | (g << 1);
          e = (a << 1) | (e >>> 31) | 0;
          n = (a >>> 31) | (b << 1) | 0;
          ke(k | 0, d | 0, e | 0, n | 0) | 0;
          p = z;
          o = (p >> 31) | (((p | 0) < 0 ? -1 : 0) << 1);
          i = o & 1;
          a = ke(e | 0, n | 0, (o & m) | 0, (((((p | 0) < 0 ? -1 : 0) >> 31) | (((p | 0) < 0 ? -1 : 0) << 1)) & l) | 0) | 0;
          b = z;
          h = (h - 1) | 0;
        } while ((h | 0) != 0);
        k = j;
        j = 0;
      }
      h = 0;
      if (f | 0) {
        c[f >> 2] = a;
        c[(f + 4) >> 2] = b;
      }
      o = ((g | 0) >>> 31) | ((k | h) << 1) | (((h << 1) | (g >>> 31)) & 0) | j;
      p = (((g << 1) | (0 >>> 31)) & -2) | i;
      return ((z = o), p) | 0;
    }
    function se(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      return re(a, b, c, d, 0) | 0;
    }
    function te(a, b) {
      a = a | 0;
      b = b | 0;
      var c = 0,
        d = 0,
        e = 0,
        f = 0;
      f = a & 65535;
      e = b & 65535;
      c = O(e, f) | 0;
      d = a >>> 16;
      a = ((c >>> 16) + (O(e, d) | 0)) | 0;
      e = b >>> 16;
      b = O(e, f) | 0;
      return ((z = ((a >>> 16) + (O(e, d) | 0) + ((((a & 65535) + b) | 0) >>> 16)) | 0), ((a + b) << 16) | (c & 65535) | 0) | 0;
    }
    function ue(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      var e = 0,
        f = 0;
      e = a;
      f = c;
      c = te(e, f) | 0;
      a = z;
      return ((z = ((O(b, f) | 0) + (O(d, e) | 0) + a) | (a & 0)), c | 0 | 0) | 0;
    }
    function ve(a) {
      a = a | 0;
      var b = 0,
        d = 0;
      d = ((a + 15) & -16) | 0;
      b = c[i >> 2] | 0;
      a = (b + d) | 0;
      if ((((d | 0) > 0) & ((a | 0) < (b | 0))) | ((a | 0) < 0)) {
        W() | 0;
        na(12);
        return -1;
      }
      c[i >> 2] = a;
      if ((a | 0) > (V() | 0) ? (U() | 0) == 0 : 0) {
        c[i >> 2] = b;
        na(12);
        return -1;
      }
      return b | 0;
    }
    function we(b, c, d) {
      b = b | 0;
      c = c | 0;
      d = d | 0;
      var e = 0;
      if (((c | 0) < (b | 0)) & ((b | 0) < ((c + d) | 0))) {
        e = b;
        c = (c + d) | 0;
        b = (b + d) | 0;
        while ((d | 0) > 0) {
          b = (b - 1) | 0;
          c = (c - 1) | 0;
          d = (d - 1) | 0;
          a[b >> 0] = a[c >> 0] | 0;
        }
        b = e;
      } else pe(b, c, d) | 0;
      return b | 0;
    }
    function xe(a, b, d, e) {
      a = a | 0;
      b = b | 0;
      d = d | 0;
      e = e | 0;
      var f = 0,
        g = 0;
      g = l;
      l = (l + 16) | 0;
      f = g | 0;
      re(a, b, d, e, f) | 0;
      l = g;
      return ((z = c[(f + 4) >> 2] | 0), c[f >> 2] | 0) | 0;
    }
    function ye(a) {
      a = a | 0;
      return ((a & 255) << 24) | (((a >> 8) & 255) << 16) | (((a >> 16) & 255) << 8) | (a >>> 24) | 0;
    }
    function ze(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      return Pa[a & 15](b | 0, c | 0, d | 0) | 0;
    }
    function Ae(a, b, c, d, e, f) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      Qa[a & 31](b | 0, c | 0, d | 0, e | 0, f | 0);
    }
    function Be(a, b) {
      a = a | 0;
      b = b | 0;
      Ra[a & 31](b | 0);
    }
    function Ce(a, b, c) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      Sa[a & 3](b | 0, c | 0);
    }
    function De(a, b, c, d, e, f, g) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      return Ta[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0;
    }
    function Ee(a, b) {
      a = a | 0;
      b = b | 0;
      return Ua[a & 7](b | 0) | 0;
    }
    function Fe(a, b, c, d, e, f, g, h, i, j) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      j = j | 0;
      Va[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0, i | 0, j | 0);
    }
    function Ge(a, b, c) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      return Wa[a & 31](b | 0, c | 0) | 0;
    }
    function He(a, b, c, d, e) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      Xa[a & 31](b | 0, c | 0, d | 0, e | 0);
    }
    function Ie(a, b, c) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      S(0);
      return 0;
    }
    function Je(a, b, c, d, e) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      S(1);
    }
    function Ke(a) {
      a = a | 0;
      S(2);
    }
    function Le(a, b) {
      a = a | 0;
      b = b | 0;
      S(3);
    }
    function Me(a, b, c, d, e, f) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      S(4);
      return 0;
    }
    function Ne(a) {
      a = a | 0;
      S(5);
      return 0;
    }
    function Oe(a, b, c, d, e, f, g, h, i) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      e = e | 0;
      f = f | 0;
      g = g | 0;
      h = h | 0;
      i = i | 0;
      S(6);
    }
    function Pe(a, b) {
      a = a | 0;
      b = b | 0;
      S(7);
      return 0;
    }
    function Qe(a, b, c, d) {
      a = a | 0;
      b = b | 0;
      c = c | 0;
      d = d | 0;
      S(8);
    }

    // EMSCRIPTEN_END_FUNCS
    var Pa = [Ie, Ed, Fd, Tb, Xb, ac, $b, Vb, Ub, bc, Ie, Ie, Ie, Ie, Ie, Ie];
    var Qa = [
      Je,
      kc,
      lc,
      mc,
      nc,
      oc,
      pc,
      qc,
      cc,
      dc,
      ec,
      fc,
      gc,
      hc,
      ic,
      Dc,
      Ec,
      Fc,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je,
      Je
    ];
    var Ra = [
      Ke,
      Qb,
      Mc,
      Nc,
      Oc,
      Pc,
      Qc,
      Rc,
      Sc,
      Tc,
      Uc,
      Vc,
      Wc,
      Xc,
      Yc,
      Zc,
      _c,
      $c,
      ad,
      bd,
      cd,
      dd,
      ed,
      fd,
      gd,
      hd,
      Ke,
      Ke,
      Ke,
      Ke,
      Ke,
      Ke
    ];
    var Sa = [Le, gb, pd, Le];
    var Ta = [Me, td];
    var Ua = [Ne, vd, yd, wd, zd, Dd, Ob, Pb];
    var Va = [Oe, tc, uc, vc, wc, xc, yc, zc];
    var Wa = [
      Pe,
      mb,
      nb,
      ob,
      pb,
      qb,
      rb,
      sb,
      tb,
      ub,
      vb,
      wb,
      xb,
      yb,
      zb,
      Sb,
      Wb,
      Yb,
      Zb,
      _b,
      Jc,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe,
      Pe
    ];
    var Xa = [
      Qe,
      Ab,
      Bb,
      Cb,
      Db,
      Eb,
      Fb,
      Gb,
      Hb,
      Ib,
      Jb,
      Kb,
      Lb,
      Mb,
      Nb,
      Ac,
      Bc,
      Cc,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe,
      Qe
    ];
    return {
      _llvm_bswap_i32: ye,
      _i64Subtract: ke,
      ___udivdi3: se,
      dynCall_iiiiiii: De,
      setThrew: ab,
      _bitshift64Lshr: ne,
      _bitshift64Shl: oe,
      ___errno_location: Hd,
      _memset: me,
      _sbrk: ve,
      _memcpy: pe,
      stackAlloc: Ya,
      ___muldi3: ue,
      _WebpToSDL: db,
      dynCall_vii: Ce,
      ___uremdi3: xe,
      dynCall_vi: Be,
      getTempRet0: cb,
      setTempRet0: bb,
      _i64Add: le,
      dynCall_iiii: ze,
      _emscripten_get_global_libc: Cd,
      dynCall_ii: Ee,
      dynCall_viiii: He,
      stackSave: Za,
      dynCall_viiiii: Ae,
      _free: Bd,
      runPostSets: je,
      establishStackSpace: $a,
      _memmove: we,
      stackRestore: _a,
      _malloc: Ad,
      dynCall_iii: Ge,
      dynCall_viiiiiiiii: Fe
    };
  })(
    // EMSCRIPTEN_END_ASM
    Module.asmGlobalArg,
    Module.asmLibraryArg,
    buffer
  );
  var _llvm_bswap_i32 = (Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"]);
  var getTempRet0 = (Module["getTempRet0"] = asm["getTempRet0"]);
  var ___udivdi3 = (Module["___udivdi3"] = asm["___udivdi3"]);
  var setThrew = (Module["setThrew"] = asm["setThrew"]);
  var _bitshift64Lshr = (Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"]);
  var _bitshift64Shl = (Module["_bitshift64Shl"] = asm["_bitshift64Shl"]);
  var _memset = (Module["_memset"] = asm["_memset"]);
  var _sbrk = (Module["_sbrk"] = asm["_sbrk"]);
  var _memcpy = (Module["_memcpy"] = asm["_memcpy"]);
  var ___errno_location = (Module["___errno_location"] = asm["___errno_location"]);
  var ___muldi3 = (Module["___muldi3"] = asm["___muldi3"]);
  var _WebpToSDL = (Module["_WebpToSDL"] = asm["_WebpToSDL"]);
  var ___uremdi3 = (Module["___uremdi3"] = asm["___uremdi3"]);
  var stackAlloc = (Module["stackAlloc"] = asm["stackAlloc"]);
  var _i64Subtract = (Module["_i64Subtract"] = asm["_i64Subtract"]);
  var setTempRet0 = (Module["setTempRet0"] = asm["setTempRet0"]);
  var _i64Add = (Module["_i64Add"] = asm["_i64Add"]);
  var _emscripten_get_global_libc = (Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"]);
  var stackSave = (Module["stackSave"] = asm["stackSave"]);
  var _free = (Module["_free"] = asm["_free"]);
  var runPostSets = (Module["runPostSets"] = asm["runPostSets"]);
  var establishStackSpace = (Module["establishStackSpace"] = asm["establishStackSpace"]);
  var _memmove = (Module["_memmove"] = asm["_memmove"]);
  var stackRestore = (Module["stackRestore"] = asm["stackRestore"]);
  var _malloc = (Module["_malloc"] = asm["_malloc"]);
  var dynCall_iiii = (Module["dynCall_iiii"] = asm["dynCall_iiii"]);
  var dynCall_viiiii = (Module["dynCall_viiiii"] = asm["dynCall_viiiii"]);
  var dynCall_vi = (Module["dynCall_vi"] = asm["dynCall_vi"]);
  var dynCall_vii = (Module["dynCall_vii"] = asm["dynCall_vii"]);
  var dynCall_iiiiiii = (Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"]);
  var dynCall_ii = (Module["dynCall_ii"] = asm["dynCall_ii"]);
  var dynCall_viiiiiiiii = (Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"]);
  var dynCall_iii = (Module["dynCall_iii"] = asm["dynCall_iii"]);
  var dynCall_viiii = (Module["dynCall_viiii"] = asm["dynCall_viiii"]);
  Runtime.stackAlloc = Module["stackAlloc"];
  Runtime.stackSave = Module["stackSave"];
  Runtime.stackRestore = Module["stackRestore"];
  Runtime.establishStackSpace = Module["establishStackSpace"];
  Runtime.setTempRet0 = Module["setTempRet0"];
  Runtime.getTempRet0 = Module["getTempRet0"];
  Module["asm"] = asm;
  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }
  ExitStatus.prototype = new Error();
  ExitStatus.prototype.constructor = ExitStatus;
  var initialStackTop;
  var preloadStartTime = null;
  var calledMain = false;
  dependenciesFulfilled = function runCaller() {
    if (!Module["calledRun"]) run();
    if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
  };
  Module["callMain"] = Module.callMain = function callMain(args) {
    args = args || [];
    ensureInitRuntime();
    var argc = args.length + 1;
    function pad() {
      for (var i = 0; i < 4 - 1; i++) {
        argv.push(0);
      }
    }
    var argv = [allocate(intArrayFromString(Module["thisProgram"]), "i8", ALLOC_NORMAL)];
    pad();
    for (var i = 0; i < argc - 1; i = i + 1) {
      argv.push(allocate(intArrayFromString(args[i]), "i8", ALLOC_NORMAL));
      pad();
    }
    argv.push(0);
    argv = allocate(argv, "i32", ALLOC_NORMAL);
    try {
      var ret = Module["_main"](argc, argv, 0);
      exit(ret, true);
    } catch (e) {
      if (e instanceof ExitStatus) {
        return;
      } else if (e == "SimulateInfiniteLoop") {
        Module["noExitRuntime"] = true;
        return;
      } else {
        var toLog = e;
        if (e && typeof e === "object" && e.stack) {
          toLog = [e, e.stack];
        }
        Module.printErr("exception thrown: " + toLog);
        Module["quit"](1, e);
      }
    } finally {
      calledMain = true;
    }
  };
  function run(args) {
    args = args || Module["arguments"];
    if (preloadStartTime === null) preloadStartTime = Date.now();
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
      if (Module["_main"] && shouldRunNow) Module["callMain"](args);
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
  Module["run"] = Module.run = run;
  function exit(status, implicit) {
    if (implicit && Module["noExitRuntime"]) {
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
    if (ENVIRONMENT_IS_NODE) {
      process["exit"](status);
    }
    Module["quit"](status, new ExitStatus(status));
  }
  Module["exit"] = Module.exit = exit;
  var abortDecorators = [];
  function abort(what) {
    if (Module["onAbort"]) {
      Module["onAbort"](what);
    }
    if (what !== undefined) {
      Module.print(what);
      Module.printErr(what);
      what = JSON.stringify(what);
    } else {
      what = "";
    }
    ABORT = true;
    EXITSTATUS = 1;
    var extra = "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
    var output = "abort(" + what + ") at " + stackTrace() + extra;
    if (abortDecorators) {
      abortDecorators.forEach(function (decorator) {
        output = decorator(output, what);
      });
    }
    throw output;
  }
  Module["abort"] = Module.abort = abort;
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }
  var shouldRunNow = false;
  if (Module["noInitialRun"]) {
    shouldRunNow = false;
  }
  Module["noExitRuntime"] = true;
  run();

  var WebpToSDL = Module.cwrap("WebpToSDL", "number", ["array", "number"]);

  return function webpToCanvas(data, length, canvas) {
    if (canvas) {
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    }
    canvas = canvas || document.createElement("canvas");
    Module.canvas = canvas;
    var ret = WebpToSDL(data, length || data.length);
    Module.canvas = null;
    return ret ? canvas : false;
  };
});
