/*! For license information please see consent.js.LICENSE.txt */
(function () {
  var __webpack_modules__ = {
      18472: function (t, e, r) {
        r(24527).Thrift,
          (t.exports.nI5 = "^[A-Za-z]+/[A-Za-z0-9._+-]+$"),
          (t.exports.emj = "image/gif"),
          (t.exports.aP_ = "image/jpeg"),
          (t.exports.PDC = "image/png"),
          (t.exports.uOi = "application/pdf"),
          (t.exports.xGc = "application/octet-stream");
      },
      21924: function (t, e, r) {
        "use strict";
        var n = r(40210),
          o = r(55559),
          i = o(n("String.prototype.indexOf"));
        t.exports = function (t, e) {
          var r = n(t, !!e);
          return "function" == typeof r && i(t, ".prototype.") > -1 ? o(r) : r;
        };
      },
      55559: function (t, e, r) {
        "use strict";
        var n = r(58612),
          o = r(40210),
          i = o("%Function.prototype.apply%"),
          s = o("%Function.prototype.call%"),
          a = o("%Reflect.apply%", !0) || n.call(s, i),
          c = o("%Object.getOwnPropertyDescriptor%", !0),
          u = o("%Object.defineProperty%", !0),
          p = o("%Math.max%");
        if (u)
          try {
            u({}, "a", { value: 1 });
          } catch (t) {
            u = null;
          }
        t.exports = function (t) {
          var e = a(n, s, arguments);
          return c && u && c(e, "length").configurable && u(e, "length", { value: 1 + p(0, t.length - (arguments.length - 1)) }), e;
        };
        var l = function () {
          return a(n, i, arguments);
        };
        u ? u(t.exports, "apply", { value: l }) : (t.exports.apply = l);
      },
      24527: function (t, e, r) {
        t.exports = {
          Thrift: r(21293),
          ArrayBufferSerializerTransport: r(38722),
          BinaryNativeTransport: r(40594),
          BinaryFetchHttpTransport: r(66895),
          Exceptions: r(2523),
          JSONNativeTransport: r(5122),
          MemBuffer: r(10579),
          NodeBinaryHttpTransport: r(38935),
          NodeMemBuffer: r(39807),
          TBinaryXmlHttpTransport: r(63950),
          TXmlHttpTransport: r(30640),
          BinaryParser: r(95733),
          BinaryProtocol: r(29292),
          JSONProtocol: r(2188),
          NodeBinaryProtocol: r(8633)
        };
      },
      95733: function (t) {
        var e = {
          fromByte: function (t) {
            "use strict";
            var e = new ArrayBuffer(1);
            return new DataView(e).setInt8(0, t), e;
          },
          fromShort: function (t) {
            "use strict";
            t = parseInt(t);
            var e = new ArrayBuffer(2);
            return new DataView(e).setInt16(0, t), e;
          },
          fromInt: function (t) {
            "use strict";
            t = parseInt(t);
            var e = new ArrayBuffer(4);
            return new DataView(e).setInt32(0, t), e;
          },
          fromLong: function (t) {
            "use strict";
            if (((t = parseInt(t)), Math.abs(t) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + t);
            var e = (Array(64).join("0") + Math.abs(t).toString(2)).slice(-64);
            t < 0 && (e = this.twosCompliment(e));
            for (var r = new ArrayBuffer(8), n = new DataView(r), o = 0; o < 8; o++) {
              var i = parseInt(e.substr(8 * o, 8), 2);
              n.setUint8(o, i);
            }
            return r;
          },
          twosCompliment: function (t) {
            "use strict";
            var e = t.lastIndexOf("1");
            return t.substring(0, e).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + t.substring(e);
          },
          fromDouble: function (t) {
            "use strict";
            var e = new ArrayBuffer(8);
            return new DataView(e).setFloat64(0, t), e;
          },
          fromString: function (t) {
            "use strict";
            var e,
              r = unescape(encodeURIComponent(t)),
              n = r.length,
              o = new Uint8Array(n);
            for (e = 0; e < n; e++) o[e] = r.charCodeAt(e);
            return o.buffer;
          },
          toByte: function (t) {
            "use strict";
            return t.getUint8(0);
          },
          toBytes: function (t) {
            "use strict";
            var e,
              r = t.byteLength,
              n = new Uint8Array(r);
            for (e = 0; e < r; e++) n[e] = t.getUint8(e);
            return n;
          },
          toShort: function (t) {
            "use strict";
            return t.getInt16(0);
          },
          toInt: function (t) {
            "use strict";
            return t.getInt32(0);
          },
          toLong: function (t) {
            "use strict";
            for (var e = 1, r = "", n = 0; n < 8; n++) r += (Array(8).join("0") + t.getUint8(n).toString(2)).slice(-8);
            "1" === r[0] && ((e = -1), (r = this.twosCompliment(r)));
            var o = r.indexOf("1");
            if (-1 !== o && o < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(r, 2) * e;
          },
          toDouble: function (t) {
            "use strict";
            return t.getFloat64(0);
          },
          toString: function (t) {
            "use strict";
            var e,
              r,
              n = "",
              o = t.byteLength;
            for (e = 0; e < o; e++) 1 == (r = t.getUint8(e).toString(16)).length && (r = "0" + r), (n += "%" + r);
            return decodeURIComponent(n);
          }
        };
        t.exports = e;
      },
      29292: function (t, e, r) {
        var n = r(21293),
          o = r(95733),
          i = n.Type,
          s = -2147418112;
        function a(t, e, r) {
          "use strict";
          (this.transport = this.trans = t), (this.strictRead = void 0 !== e && e), (this.strictWrite = void 0 === r || r);
        }
        (a.prototype.flush = function (t) {
          "use strict";
          var e;
          return (
            t &&
              (e = function (e, r) {
                var n;
                return r && (n = new a(r)), t(e, n);
              }),
            this.trans.flush(e)
          );
        }),
          (a.prototype.writeMessageBegin = function (t, e, r) {
            "use strict";
            this.strictWrite
              ? (this.writeI32(s | e), this.writeString(t), this.writeI32(r))
              : (this.writeString(t), this.writeByte(e), this.writeI32(r));
          }),
          (a.prototype.writeMessageEnd = function () {}),
          (a.prototype.writeStructBegin = function (t) {}),
          (a.prototype.writeStructEnd = function () {}),
          (a.prototype.writeFieldBegin = function (t, e, r) {
            "use strict";
            this.writeByte(e), this.writeI16(r);
          }),
          (a.prototype.writeFieldEnd = function () {}),
          (a.prototype.writeFieldStop = function () {
            "use strict";
            this.writeByte(i.STOP);
          }),
          (a.prototype.writeMapBegin = function (t, e, r) {
            "use strict";
            this.writeByte(t), this.writeByte(e), this.writeI32(r);
          }),
          (a.prototype.writeMapEnd = function () {}),
          (a.prototype.writeListBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (a.prototype.writeListEnd = function () {}),
          (a.prototype.writeSetBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (a.prototype.writeSetEnd = function () {}),
          (a.prototype.writeBool = function (t) {
            "use strict";
            t ? this.writeByte(1) : this.writeByte(0);
          }),
          (a.prototype.writeByte = function (t) {
            "use strict";
            this.trans.write(o.fromByte(t));
          }),
          (a.prototype.writeBinary = function (t) {
            "use strict";
            if (("string" == typeof t && (t = o.fromString(t)), null == t.byteLength)) throw Error("Cannot read length of binary data");
            this.writeI32(t.byteLength), this.trans.write(t);
          }),
          (a.prototype.writeI16 = function (t) {
            "use strict";
            this.trans.write(o.fromShort(t));
          }),
          (a.prototype.writeI32 = function (t) {
            "use strict";
            this.trans.write(o.fromInt(t));
          }),
          (a.prototype.writeI64 = function (t) {
            "use strict";
            this.trans.write(o.fromLong(t));
          }),
          (a.prototype.writeDouble = function (t) {
            "use strict";
            this.trans.write(o.fromDouble(t));
          }),
          (a.prototype.writeString = function (t) {
            "use strict";
            var e = o.fromString(t);
            this.writeI32(e.byteLength), this.trans.write(e);
          }),
          (a.prototype.writeType = function (t, e) {
            "use strict";
            switch (t) {
              case i.BOOL:
                return this.writeBool(e);
              case i.BYTE:
                return this.writeByte(e);
              case i.I16:
                return this.writeI16(e);
              case i.I32:
                return this.writeI32(e);
              case i.I64:
                return this.writeI64(e);
              case i.DOUBLE:
                return this.writeDouble(e);
              case i.STRING:
                return this.writeString(e);
              case i.BINARY:
                return this.writeBinary(e);
              default:
                throw Error("Invalid type: " + t);
            }
          }),
          (a.prototype.readMessageBegin = function () {
            "use strict";
            var t = this.readI32(),
              e = { mtype: null, fname: null, seqid: null };
            if (t < 0) {
              var r = -65536 & t;
              if (r != s) throw (console.log("BAD: " + r), Error("Bad version in readMessageBegin: " + t));
              (e.mtype = 255 & t), (e.fname = this.readString()), (e.seqid = this.readI32());
            } else {
              if (this.strictRead) throw Error("No protocol version header");
              (e.fname = this.trans.read(t)), (e.mtype = this.readByte()), (e.seqid = this.readI32());
            }
            return e;
          }),
          (a.prototype.readMessageEnd = function () {}),
          (a.prototype.readStructBegin = function () {
            "use strict";
            return { fname: "" };
          }),
          (a.prototype.readStructEnd = function () {}),
          (a.prototype.readFieldBegin = function () {
            "use strict";
            var t = this.readByte(),
              e = { fname: null, ftype: t, fid: 0 };
            return t != i.STOP && (e.fid = this.readI16()), e;
          }),
          (a.prototype.readFieldEnd = function () {}),
          (a.prototype.readMapBegin = function () {
            "use strict";
            var t = { ktype: null, vtype: null, size: null };
            return (t.ktype = this.readByte()), (t.vtype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (a.prototype.readMapEnd = function () {}),
          (a.prototype.readListBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (a.prototype.readListEnd = function () {}),
          (a.prototype.readSetBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (a.prototype.readSetEnd = function () {}),
          (a.prototype.readBool = function () {
            "use strict";
            return 1 == this.readByte();
          }),
          (a.prototype.readByte = function () {
            "use strict";
            var t = this.trans.read(1);
            return o.toByte(t);
          }),
          (a.prototype.readI16 = function () {
            "use strict";
            var t = this.trans.read(2);
            return o.toShort(t);
          }),
          (a.prototype.readI32 = function () {
            "use strict";
            var t = this.trans.read(4);
            return o.toInt(t);
          }),
          (a.prototype.readI64 = function () {
            "use strict";
            var t = this.trans.read(8);
            return o.toLong(t);
          }),
          (a.prototype.readDouble = function () {
            "use strict";
            var t = this.trans.read(8);
            return o.toDouble(t);
          }),
          (a.prototype.readBinary = function () {
            "use strict";
            var t = this.readI32(),
              e = this.trans.read(t);
            return o.toBytes(e);
          }),
          (a.prototype.readString = function () {
            "use strict";
            var t = this.readI32(),
              e = this.trans.read(t);
            return o.toString(e);
          }),
          (a.prototype.readType = function (t) {
            "use strict";
            switch (t) {
              case i.BOOL:
                return this.readBool();
              case i.BYTE:
                return this.readByte();
              case i.I16:
                return this.readI16();
              case i.I32:
                return this.readI32();
              case i.I64:
                return this.readI64();
              case i.DOUBLE:
                return this.readDouble();
              case i.STRING:
                return this.readString();
              case i.BINARY:
                return this.readBinary();
              default:
                throw new Error("Invalid type: " + t);
            }
          }),
          (a.prototype.getTransport = function () {
            "use strict";
            return this.trans;
          }),
          (a.prototype.skipStruct = function () {
            "use strict";
            this.readStructBegin(), this.skipFields(), this.readStructEnd();
          }),
          (a.prototype.skipFields = function () {
            "use strict";
            var t = this.readFieldBegin();
            t.ftype !== i.STOP && (this.skip(t.ftype), this.readFieldEnd(), this.skipFields());
          }),
          (a.prototype.skipMap = function () {
            "use strict";
            var t = 0,
              e = this.readMapBegin();
            for (t = 0; t < e.size; t++) this.skip(e.ktype), this.skip(e.vtype);
            this.readMapEnd();
          }),
          (a.prototype.skipSet = function () {
            "use strict";
            var t = 0,
              e = this.readSetBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readSetEnd();
          }),
          (a.prototype.skipList = function () {
            "use strict";
            var t = 0,
              e = this.readListBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readListEnd();
          }),
          (a.prototype.skip = function (t) {
            "use strict";
            switch (t) {
              case i.STOP:
                return;
              case i.BOOL:
                return this.readBool();
              case i.BYTE:
                return this.readByte();
              case i.I16:
                return this.readI16();
              case i.I32:
                return this.readI32();
              case i.I64:
                return this.readI64();
              case i.DOUBLE:
                return this.readDouble();
              case i.STRING:
                return this.readString();
              case i.STRUCT:
                return this.skipStruct();
              case i.MAP:
                return this.skipMap();
              case i.SET:
                return this.skipSet();
              case i.LIST:
                return this.skipList();
              case i.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + t);
            }
          }),
          (t.exports = a);
      },
      2188: function (t, e, r) {
        var n = r(21293).Type,
          o = function (t) {
            "use strict";
            this.transport = t;
          };
        ((o.Type = {})[n.BOOL] = '"tf"'),
          (o.Type[n.BYTE] = '"i8"'),
          (o.Type[n.I16] = '"i16"'),
          (o.Type[n.I32] = '"i32"'),
          (o.Type[n.I64] = '"i64"'),
          (o.Type[n.DOUBLE] = '"dbl"'),
          (o.Type[n.STRUCT] = '"rec"'),
          (o.Type[n.STRING] = '"str"'),
          (o.Type[n.MAP] = '"map"'),
          (o.Type[n.LIST] = '"lst"'),
          (o.Type[n.SET] = '"set"'),
          ((o.RType = {}).tf = n.BOOL),
          (o.RType.i8 = n.BYTE),
          (o.RType.i16 = n.I16),
          (o.RType.i32 = n.I32),
          (o.RType.i64 = n.I64),
          (o.RType.dbl = n.DOUBLE),
          (o.RType.rec = n.STRUCT),
          (o.RType.str = n.STRING),
          (o.RType.map = n.MAP),
          (o.RType.lst = n.LIST),
          (o.RType.set = n.SET),
          (o.Version = 1),
          (o.prototype = {
            getTransport: function () {
              "use strict";
              return this.transport;
            },
            writeType: function (t, e) {
              "use strict";
              switch (t) {
                case n.BOOL:
                  return this.writeBool(e);
                case n.BYTE:
                  return this.writeByte(e);
                case n.I16:
                  return this.writeI16(e);
                case n.I32:
                  return this.writeI32(e);
                case n.I64:
                  return this.writeI64(e);
                case n.DOUBLE:
                  return this.writeDouble(e);
                case n.STRING:
                  return this.writeString(e);
                case n.BINARY:
                  return this.writeBinary(e);
                default:
                  throw Error("Invalid type: " + t);
              }
            },
            writeMessageBegin: function (t, e, r) {
              "use strict";
              (this.tstack = []), (this.tpos = []), this.tstack.push([o.Version, '"' + t + '"', e, r]);
            },
            writeMessageEnd: function () {
              "use strict";
              var t = this.tstack.pop();
              (this.wobj = this.tstack.pop()),
                this.wobj.push(t),
                (this.wbuf = "[" + this.wobj.join(",") + "]"),
                this.transport.write(this.wbuf);
            },
            writeStructBegin: function (t) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({});
            },
            writeStructEnd: function () {
              "use strict";
              var t = this.tpos.pop(),
                e = this.tstack[t],
                r = "{",
                n = !0;
              for (var o in e) n ? (n = !1) : (r += ","), (r += o + ":" + e[o]);
              (r += "}"), (this.tstack[t] = r);
            },
            writeFieldBegin: function (t, e, r) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({ fieldId: '"' + r + '"', fieldType: o.Type[e] });
            },
            writeFieldEnd: function () {
              "use strict";
              var t = this.tstack.pop(),
                e = this.tstack.pop();
              (this.tstack[this.tstack.length - 1][e.fieldId] = "{" + e.fieldType + ":" + t + "}"), this.tpos.pop();
            },
            writeFieldStop: function () {},
            writeMapBegin: function (t, e, r) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([o.Type[t], o.Type[e], 0]);
            },
            writeMapEnd: function () {
              "use strict";
              var t = this.tpos.pop();
              if (t != this.tstack.length) {
                (this.tstack.length - t - 1) % 2 != 0 && this.tstack.push("");
                var e = (this.tstack.length - t - 1) / 2;
                this.tstack[t][this.tstack[t].length - 1] = e;
                for (var r = "}", n = !0; this.tstack.length > t + 1; ) {
                  var o = this.tstack.pop(),
                    i = this.tstack.pop();
                  n ? (n = !1) : (r = "," + r), isNaN(i) || (i = '"' + i + '"'), (r = i + ":" + o + r);
                }
                (r = "{" + r), this.tstack[t].push(r), (this.tstack[t] = "[" + this.tstack[t].join(",") + "]");
              }
            },
            writeListBegin: function (t, e) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([o.Type[t], e]);
            },
            writeListEnd: function () {
              "use strict";
              for (var t = this.tpos.pop(); this.tstack.length > t + 1; ) {
                var e = this.tstack[t + 1];
                this.tstack.splice(t + 1, 1), this.tstack[t].push(e);
              }
              this.tstack[t] = "[" + this.tstack[t].join(",") + "]";
            },
            writeSetBegin: function (t, e) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([o.Type[t], e]);
            },
            writeSetEnd: function () {
              "use strict";
              for (var t = this.tpos.pop(); this.tstack.length > t + 1; ) {
                var e = this.tstack[t + 1];
                this.tstack.splice(t + 1, 1), this.tstack[t].push(e);
              }
              this.tstack[t] = "[" + this.tstack[t].join(",") + "]";
            },
            writeBool: function (t) {
              "use strict";
              this.tstack.push(t ? 1 : 0);
            },
            writeByte: function (t) {
              "use strict";
              this.tstack.push(t);
            },
            writeI16: function (t) {
              "use strict";
              this.tstack.push(t);
            },
            writeI32: function (t) {
              "use strict";
              this.tstack.push(t);
            },
            writeI64: function (t) {
              "use strict";
              this.tstack.push(t);
            },
            writeDouble: function (t) {
              "use strict";
              this.tstack.push(t);
            },
            writeString: function (t) {
              "use strict";
              if (null === t) this.tstack.push(null);
              else {
                for (var e = "", r = 0; r < t.length; r++) {
                  var n = t.charAt(r);
                  e +=
                    '"' === n
                      ? '\\"'
                      : "\\" === n
                      ? "\\\\"
                      : "\b" === n
                      ? "\\b"
                      : "\f" === n
                      ? "\\f"
                      : "\n" === n
                      ? "\\n"
                      : "\r" === n
                      ? "\\r"
                      : "\t" === n
                      ? "\\t"
                      : n;
                }
                this.tstack.push('"' + e + '"');
              }
            },
            writeBinary: function (t) {
              "use strict";
              this.writeString(t);
            },
            readType: function (t) {
              "use strict";
              var e;
              switch (t) {
                case n.BOOL:
                  e = this.readBool();
                  break;
                case n.BYTE:
                  e = this.readByte();
                  break;
                case n.I16:
                  e = this.readI16();
                  break;
                case n.I32:
                  e = this.readI32();
                  break;
                case n.I64:
                  e = this.readI64();
                  break;
                case n.DOUBLE:
                  e = this.readDouble();
                  break;
                case n.STRING:
                  e = this.readString();
                  break;
                case n.BINARY:
                  e = this.readBinary();
                  break;
                default:
                  throw new Error("Invalid type: " + t);
              }
              if ("object" == typeof e) return e.value;
            },
            readMessageBegin: function (t, e, r) {
              "use strict";
              if (((this.rstack = []), (this.rpos = []), (this.robj = this.transport.readAll()), "string" == typeof this.robj))
                if ("undefined" != typeof jQuery) this.robj = jQuery.parseJSON(this.robj);
                else {
                  if (!JSON) throw new Error("Could not find a JSON-parsing library");
                  this.robj = JSON.parse(this.robj);
                }
              var n = {},
                i = this.robj.shift();
              if (i != o.Version) throw Error("Wrong thrift protocol version: " + i);
              return (
                (n.fname = this.robj.shift()),
                (n.mtype = this.robj.shift()),
                (n.rseqid = this.robj.shift()),
                this.rstack.push(this.robj.shift()),
                n
              );
            },
            readMessageEnd: function () {},
            readStructBegin: function (t) {
              "use strict";
              return (
                this.rstack[this.rstack.length - 1] instanceof Array && this.rstack.push(this.rstack[this.rstack.length - 1].shift()),
                { fname: "" }
              );
            },
            readStructEnd: function () {
              "use strict";
              this.rstack[this.rstack.length - 2] instanceof Array && this.rstack.pop();
            },
            readFieldBegin: function () {
              "use strict";
              var t = {},
                e = -1,
                r = n.STOP;
              for (var i in this.rstack[this.rstack.length - 1])
                if (null !== i) {
                  (e = parseInt(i, 10)), this.rpos.push(this.rstack.length);
                  var s = this.rstack[this.rstack.length - 1][e];
                  delete this.rstack[this.rstack.length - 1][e], this.rstack.push(s);
                  break;
                }
              if (-1 != e)
                for (var a in this.rstack[this.rstack.length - 1])
                  null !== o.RType[a] && ((r = o.RType[a]), (this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][a]));
              return (t.fname = ""), (t.ftype = r), (t.fid = e), t;
            },
            readFieldEnd: function () {
              "use strict";
              for (var t = this.rpos.pop(); this.rstack.length > t; ) this.rstack.pop();
            },
            readMapBegin: function (t, e, r) {
              "use strict";
              var n = this.rstack.pop(),
                i = {};
              return (
                (i.ktype = o.RType[n.shift()]),
                (i.vtype = o.RType[n.shift()]),
                (i.size = n.shift()),
                this.rpos.push(this.rstack.length),
                this.rstack.push(n.shift()),
                i
              );
            },
            readMapEnd: function () {
              "use strict";
              this.readFieldEnd();
            },
            readListBegin: function (t, e) {
              "use strict";
              var r = this.rstack[this.rstack.length - 1],
                n = {};
              return (n.etype = o.RType[r.shift()]), (n.size = r.shift()), this.rpos.push(this.rstack.length), this.rstack.push(r), n;
            },
            readListEnd: function () {
              "use strict";
              this.readFieldEnd();
            },
            readSetBegin: function (t, e) {
              "use strict";
              return this.readListBegin(t, e);
            },
            readSetEnd: function () {
              "use strict";
              return this.readListEnd();
            },
            readBool: function () {
              "use strict";
              var t = this.readI32();
              return null !== t && "1" == t.value ? (t.value = !0) : (t.value = !1), t;
            },
            readByte: function () {
              "use strict";
              return this.readI32();
            },
            readI16: function () {
              "use strict";
              return this.readI32();
            },
            readI32: function (t) {
              "use strict";
              void 0 === t && (t = this.rstack[this.rstack.length - 1]);
              var e = {};
              if (t instanceof Array) 0 === t.length ? (e.value = void 0) : (e.value = t.shift());
              else if (t instanceof Object) {
                for (var r in t)
                  if (null !== r) {
                    this.rstack.push(t[r]), delete t[r], (e.value = r);
                    break;
                  }
              } else (e.value = t), this.rstack.pop();
              return e;
            },
            readI64: function () {
              "use strict";
              return this.readI32();
            },
            readDouble: function () {
              "use strict";
              return this.readI32();
            },
            readString: function () {
              "use strict";
              return this.readI32();
            },
            readBinary: function () {
              "use strict";
              return this.readString();
            },
            skip: function (t) {
              "use strict";
              throw Error("skip not supported yet");
            },
            flush: function (t) {
              "use strict";
              var e;
              return (
                t &&
                  (e = function (e, r) {
                    var n;
                    return r && (n = new o(r)), t(e, n);
                  }),
                this.transport.flush(e)
              );
            }
          }),
          (t.exports = o);
      },
      8633: function (t, e, r) {
        var n = r(21293).Type,
          o = {},
          i = -2147418112;
        function s(t, e, r) {
          "use strict";
          (this.transport = this.trans = t), (this.strictRead = void 0 !== e && e), (this.strictWrite = void 0 === r || r);
        }
        (s.prototype.flush = function (t) {
          "use strict";
          var e;
          return (
            t &&
              (e = function (e, r) {
                var n;
                return r && (n = new s(r)), t(e, n);
              }),
            this.trans.flush(e)
          );
        }),
          (s.prototype.writeMessageBegin = function (t, e, r) {
            "use strict";
            this.strictWrite
              ? (this.writeI32(i | e), this.writeString(t), this.writeI32(r))
              : (this.writeString(t), this.writeByte(e), this.writeI32(r));
          }),
          (s.prototype.writeMessageEnd = function () {}),
          (s.prototype.writeStructBegin = function (t) {}),
          (s.prototype.writeStructEnd = function () {}),
          (s.prototype.writeFieldBegin = function (t, e, r) {
            "use strict";
            this.writeByte(e), this.writeI16(r);
          }),
          (s.prototype.writeFieldEnd = function () {}),
          (s.prototype.writeFieldStop = function () {
            "use strict";
            this.writeByte(n.STOP);
          }),
          (s.prototype.writeMapBegin = function (t, e, r) {
            "use strict";
            this.writeByte(t), this.writeByte(e), this.writeI32(r);
          }),
          (s.prototype.writeMapEnd = function () {}),
          (s.prototype.writeListBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (s.prototype.writeListEnd = function () {}),
          (s.prototype.writeSetBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (s.prototype.writeSetEnd = function () {}),
          (s.prototype.writeBool = function (t) {
            "use strict";
            t ? this.writeByte(1) : this.writeByte(0);
          }),
          (s.prototype.writeByte = function (t) {
            "use strict";
            this.trans.write(o.fromByte(t));
          }),
          (s.prototype.writeBinary = function (t) {
            "use strict";
            if (("string" == typeof t && (t = o.fromString(t)), null == t.length)) throw Error("Cannot read length of binary data");
            this.writeI32(t.length), this.trans.write(t);
          }),
          (s.prototype.writeI16 = function (t) {
            "use strict";
            this.trans.write(o.fromShort(t));
          }),
          (s.prototype.writeI32 = function (t) {
            "use strict";
            this.trans.write(o.fromInt(t));
          }),
          (s.prototype.writeI64 = function (t) {
            "use strict";
            var e = o.fromLong(t);
            this.trans.write(e);
          }),
          (s.prototype.writeDouble = function (t) {
            "use strict";
            this.trans.write(o.fromDouble(t));
          }),
          (s.prototype.writeString = function (t) {
            "use strict";
            var e = o.fromString(t);
            this.writeI32(e.length), this.trans.write(e);
          }),
          (s.prototype.writeType = function (t, e) {
            "use strict";
            switch (t) {
              case n.BOOL:
                return this.writeBool(e);
              case n.BYTE:
                return this.writeByte(e);
              case n.I16:
                return this.writeI16(e);
              case n.I32:
                return this.writeI32(e);
              case n.I64:
                return this.writeI64(e);
              case n.DOUBLE:
                return this.writeDouble(e);
              case n.STRING:
                return this.writeString(e);
              case n.BINARY:
                return this.writeBinary(e);
              default:
                throw Error("Invalid type: " + t);
            }
          }),
          (s.prototype.readMessageBegin = function () {
            "use strict";
            var t = this.readI32(),
              e = { mtype: null, fname: null, seqid: null };
            if (t < 0) {
              var r = -65536 & t;
              if (r != i) throw (console.log("BAD: " + r), Error("Bad version in readMessageBegin: " + t));
              (e.mtype = 255 & t), (e.fname = this.readString()), (e.seqid = this.readI32());
            } else {
              if (this.strictRead) throw Error("No protocol version header");
              (e.fname = this.trans.read(t)), (e.mtype = this.readByte()), (e.seqid = this.readI32());
            }
            return e;
          }),
          (s.prototype.readMessageEnd = function () {}),
          (s.prototype.readStructBegin = function () {
            "use strict";
            return { fname: "" };
          }),
          (s.prototype.readStructEnd = function () {}),
          (s.prototype.readFieldBegin = function () {
            "use strict";
            var t = this.readByte(),
              e = { fname: null, ftype: t, fid: 0 };
            return t != n.STOP && (e.fid = this.readI16()), e;
          }),
          (s.prototype.readFieldEnd = function () {}),
          (s.prototype.readMapBegin = function () {
            "use strict";
            var t = { ktype: null, vtype: null, size: null };
            return (t.ktype = this.readByte()), (t.vtype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (s.prototype.readMapEnd = function () {}),
          (s.prototype.readListBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (s.prototype.readListEnd = function () {}),
          (s.prototype.readSetBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (s.prototype.readSetEnd = function () {}),
          (s.prototype.readBool = function () {
            "use strict";
            return 1 == this.readByte();
          }),
          (s.prototype.readByte = function () {
            "use strict";
            return this.trans.read(1).readUInt8(0);
          }),
          (s.prototype.readI16 = function () {
            "use strict";
            return this.trans.read(2).readInt16BE(0);
          }),
          (s.prototype.readI32 = function () {
            "use strict";
            return this.trans.read(4).readInt32BE(0);
          }),
          (s.prototype.readI64 = function () {
            "use strict";
            var t = this.trans.read(8);
            return o.toLong(t);
          }),
          (s.prototype.readDouble = function () {
            "use strict";
            return this.trans.read(8).readDoubleBE(0);
          }),
          (s.prototype.readBinary = function () {
            "use strict";
            var t = this.readI32();
            return this.trans.read(t);
          }),
          (s.prototype.readString = function () {
            "use strict";
            var t = this.readI32();
            return this.trans.read(t).toString();
          }),
          (s.prototype.readType = function (t) {
            "use strict";
            switch (t) {
              case n.BOOL:
                return this.readBool();
              case n.BYTE:
                return this.readByte();
              case n.I16:
                return this.readI16();
              case n.I32:
                return this.readI32();
              case n.I64:
                return this.readI64();
              case n.DOUBLE:
                return this.readDouble();
              case n.STRING:
                return this.readString();
              case n.BINARY:
                return this.readBinary();
              default:
                throw new Error("Invalid type: " + t);
            }
          }),
          (s.prototype.getTransport = function () {
            "use strict";
            return this.trans;
          }),
          (s.prototype.skipStruct = function () {
            "use strict";
            this.readStructBegin(), this.skipFields(), this.readStructEnd();
          }),
          (s.prototype.skipFields = function () {
            "use strict";
            var t = this.readFieldBegin();
            t.ftype !== n.STOP && (this.skip(t.ftype), this.readFieldEnd(), this.skipFields());
          }),
          (s.prototype.skipMap = function () {
            "use strict";
            var t = 0,
              e = this.readMapBegin();
            for (t = 0; t < e.size; t++) this.skip(e.ktype), this.skip(e.vtype);
            this.readMapEnd();
          }),
          (s.prototype.skipSet = function () {
            "use strict";
            var t = 0,
              e = this.readSetBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readSetEnd();
          }),
          (s.prototype.skipList = function () {
            "use strict";
            var t = 0,
              e = this.readListBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readListEnd();
          }),
          (s.prototype.skip = function (t) {
            "use strict";
            switch (t) {
              case n.STOP:
                return;
              case n.BOOL:
                return this.readBool();
              case n.BYTE:
                return this.readByte();
              case n.I16:
                return this.readI16();
              case n.I32:
                return this.readI32();
              case n.I64:
                return this.readI64();
              case n.DOUBLE:
                return this.readDouble();
              case n.STRING:
                return this.readString();
              case n.STRUCT:
                return this.skipStruct();
              case n.MAP:
                return this.skipMap();
              case n.SET:
                return this.skipSet();
              case n.LIST:
                return this.skipList();
              case n.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + t);
            }
          }),
          (o.fromByte = function (t) {
            "use strict";
            var e = new Buffer(1);
            return e.writeInt8(t, 0), e;
          }),
          (o.fromShort = function (t) {
            "use strict";
            t = parseInt(t);
            var e = new Buffer(2);
            return e.writeInt16BE(t, 0), e;
          }),
          (o.fromInt = function (t) {
            "use strict";
            t = parseInt(t);
            var e = new Buffer(4);
            return e.writeInt32BE(t, 0), e;
          }),
          (o.fromLong = function (t) {
            "use strict";
            if (((t = parseInt(t)), Math.abs(t) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + t);
            var e = (Array(64).join("0") + Math.abs(t).toString(2)).slice(-64);
            t < 0 && (e = this.twosCompliment(e));
            for (var r = new Buffer(8), n = 0; n < 8; n++) {
              var o = parseInt(e.substr(8 * n, 8), 2);
              r.writeUInt8(o, n);
            }
            return r;
          }),
          (o.twosCompliment = function (t) {
            "use strict";
            var e = t.lastIndexOf("1");
            return t.substring(0, e).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + t.substring(e);
          }),
          (o.fromDouble = function (t) {
            "use strict";
            var e = new Buffer(8);
            return e.writeDoubleBE(t, 0), e;
          }),
          (o.fromString = function (t) {
            "use strict";
            var e = Buffer.byteLength(t),
              r = new Buffer(e);
            return r.write(t), r;
          }),
          (o.toLong = function (t) {
            "use strict";
            for (var e = 1, r = "", n = 0; n < 8; n++) r += (Array(8).join("0") + t.readUInt8(n).toString(2)).slice(-8);
            "1" === r[0] && ((e = -1), (r = this.twosCompliment(r)));
            var o = r.indexOf("1");
            if (-1 !== o && o < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(r, 2) * e;
          }),
          (t.exports = s);
      },
      21293: function (t) {
        var e = {
          Version: "0.9.0",
          Type: {
            STOP: 0,
            VOID: 1,
            BOOL: 2,
            BYTE: 3,
            I08: 3,
            DOUBLE: 4,
            I16: 6,
            I32: 8,
            I64: 10,
            STRING: 11,
            UTF7: 11,
            STRUCT: 12,
            EXCEPTION: 12,
            MAP: 13,
            SET: 14,
            LIST: 15,
            UTF8: 16,
            UTF16: 17,
            BINARY: 18
          },
          MessageType: { CALL: 1, REPLY: 2, EXCEPTION: 3 },
          objectLength: function (t) {
            "use strict";
            var e = 0;
            for (var r in t) t.hasOwnProperty(r) && e++;
            return e;
          },
          inherits: function (t, e) {
            "use strict";
            function r() {}
            (r.prototype = e.prototype), (t.prototype = new r());
          },
          equals: function (t, r) {
            "use strict";
            return t == r || (t == e.Type.BINARY && r == e.Type.STRING) || (t == e.Type.STRING && r == e.Type.BINARY);
          },
          serializedType: function (t) {
            "use strict";
            return t == e.Type.BINARY ? e.Type.STRING : t;
          },
          defaults: function (t) {
            "use strict";
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (e) {
                if (e) for (var r in e) void 0 === t[r] && (t[r] = e[r]);
              }),
              t
            );
          },
          extend: function (t) {
            "use strict";
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (e) {
                if (e) for (var r in e) t[r] = e[r];
              }),
              t
            );
          },
          Method: function (t) {
            "use strict";
            (this.alias = t.alias), (this.args = t.args), (this.result = t.result);
          }
        };
        (e.Method.define = function (t) {
          "use strict";
          return new e.Method(t);
        }),
          (e.Method.noop = function () {}),
          (e.Method.sendException = function (t, r, n, o) {
            "use strict";
            var i;
            o ||
              (n instanceof e.TApplicationException
                ? (o = e.TApplicationException)
                : n instanceof e.TException
                ? (o = e.TException)
                : ((o = e.TApplicationException),
                  (i = {}),
                  n && (n.message && (i.message = n.message + ""), null != n.code && Number.isFinite(i.code) && (i.code = n.code)),
                  (n = new e.TApplicationException(i)))),
              t.writeMessageBegin("", e.MessageType.EXCEPTION, r),
              o.write(t, n),
              t.writeMessageEnd(),
              t.flush();
          }),
          (e.Method.prototype.sendRequest = function (t, r, n, o) {
            "use strict";
            t.writeMessageBegin(this.alias, e.MessageType.CALL, r),
              this.args.write(t, n),
              t.writeMessageEnd(),
              t.flush(
                function (t, e) {
                  t ? o(t) : this.processResponse(e, o);
                }.bind(this)
              );
          }),
          (e.Method.prototype.sendResponse = function (t, r, n) {
            "use strict";
            t.writeMessageBegin(this.alias, e.MessageType.REPLY, r), this.result.write(t, n), t.writeMessageEnd(), t.flush();
          }),
          (e.Method.prototype.processResponse = function (t, r) {
            "use strict";
            var n, o, i, s;
            if (((r = r || e.Method.noop), (n = t.readMessageBegin()).mtype == e.MessageType.EXCEPTION))
              return (i = e.TApplicationException.read(t)), t.readMessageEnd(), void r(i);
            if (n.mtype == e.MessageType.REPLY)
              if (this.alias == n.fname) {
                for (s in ((o = this.result.read(t)), t.readMessageEnd(), this.result.fields))
                  if (0 != s && o[this.result.fields[s].alias]) return void r((i = o[this.result.fields[s].alias]));
                r(null, o.returnValue);
              } else r((i = Error("Unrecognized method name. Expected [" + this.alias + "] Received [" + n.fname + "]")));
            else r((i = Error("Client expects REPLY but received unsupported message type: " + n.mtype)));
          }),
          (e.List = {}),
          (e.List.define = function (t, r, n) {
            "use strict";
            var o = function () {
              return [];
            };
            return (
              "string" != typeof t && ((n = r), (r = t), (t = "anonymous")),
              (o.alias = t),
              (o.type = r),
              (o.def = n),
              (o.read = e.List.read.bind(null, o)),
              (o.write = e.List.write.bind(null, o)),
              o
            );
          }),
          (e.List.read = function (t, r) {
            "use strict";
            var n = new t(),
              o = r.readListBegin();
            return e.List.readEntries(t, n, r, o.size), r.readListEnd(), n;
          }),
          (e.List.readEntries = function (t, e, r, n) {
            "use strict";
            var o;
            for (o = 0; o < n; o++) null != t.def ? e.push(t.def.read(r)) : e.push(r.readType(t.type));
          }),
          (e.List.write = function (t, e, r) {
            "use strict";
            var n,
              o,
              i = r.length;
            for (e.writeListBegin(t.type, i), o = 0; o < i; o++) (n = r[o]), t.def ? t.def.write(e, n) : e.writeType(t.type, n);
            e.writeListEnd();
          }),
          (e.Set = {}),
          (e.Set.define = function (t, r, n) {
            "use strict";
            var o = function () {
              return [];
            };
            return (
              "string" != typeof t && ((n = r), (r = t), (t = "anonymous")),
              (o.alias = t),
              (o.type = r),
              (o.def = n),
              (o.read = e.Set.read.bind(null, o)),
              (o.write = e.Set.write.bind(null, o)),
              o
            );
          }),
          (e.Set.read = function (t, r) {
            "use strict";
            var n = new t(),
              o = r.readSetBegin();
            return e.Set.readEntries(t, n, r, o.size), r.readSetEnd(), n;
          }),
          (e.Set.readEntries = function (t, e, r, n) {
            "use strict";
            var o;
            for (o = 0; o < n; o++) null != t.def ? e.push(t.def.read(r)) : e.push(r.readType(t.type));
          }),
          (e.Set.write = function (t, e, r) {
            "use strict";
            var n,
              o,
              i = r.length;
            for (e.writeSetBegin(t.type, i), o = 0; o < i; o++) (n = r[o]), t.def ? t.def.write(e, n) : e.writeType(t.type, n);
            e.writeSetEnd();
          }),
          (e.Map = {}),
          (e.Map.define = function (t, r, n, o) {
            "use strict";
            var i = function () {
              return {};
            };
            return (
              "string" != typeof t && ((o = n), (n = r), (r = t), (t = "anonymous")),
              (i.alias = t),
              (i.ktype = r),
              (i.vtype = n),
              (i.vdef = o),
              (i.read = e.Map.read.bind(null, i)),
              (i.write = e.Map.write.bind(null, i)),
              i
            );
          }),
          (e.Map.read = function (t, r) {
            "use strict";
            var n = new t(),
              o = r.readMapBegin();
            return e.Map.readEntries(t, n, r, o.size), r.readMapEnd(), n;
          }),
          (e.Map.readEntries = function (t, e, r, n) {
            "use strict";
            var o, i;
            for (o = 0; o < n; o++) (i = r.readType(t.ktype)), null != t.vdef ? (e[i] = t.vdef.read(r)) : (e[i] = r.readType(t.vtype));
          }),
          (e.Map.write = function (t, e, r) {
            "use strict";
            var n,
              o,
              i,
              s = Object.keys(r),
              a = s.length;
            for (e.writeMapBegin(t.ktype, t.vtype, a), i = 0; i < a; i++)
              (n = s[i]), e.writeType(t.ktype, n), (o = r[n]), t.vdef ? t.vdef.write(e, o) : e.writeType(t.vtype, o);
            e.writeMapEnd();
          }),
          (e.Struct = {}),
          (e.Struct.define = function (t, r) {
            "use strict";
            var n,
              o,
              i = {};
            for (n in (r = r || {})) (o = r[n]), (i[o.alias] = o.defaultValue || null);
            var s = function (t) {
              return (t = "object" == typeof t ? t : {}), e.defaults({}, t, i);
            };
            return (
              (s.alias = t),
              (s.fields = r),
              (s.defaultValues = i),
              (s.read = e.Struct.read.bind(null, s)),
              (s.write = e.Struct.write.bind(null, s)),
              (s.values = e.Struct.values.bind(null, s)),
              (s.setByDef = e.Struct.setByDef.bind(null, s)),
              s
            );
          }),
          (e.Struct.setByDef = function (t, e, r) {
            "use strict";
            var n,
              o,
              i = t.fields,
              s = !1;
            for (n in i)
              if ((o = i[n]).def && r instanceof o.def) {
                (e[o.alias] = r), (s = !0);
                break;
              }
            return s;
          }),
          (e.Struct.values = function (t, e) {
            "use strict";
            var r,
              n,
              o,
              i = t.fields,
              s = Object.keys(t.fields),
              a = new Array(s.length);
            for (o = 0; o < s.length; o++) null != (n = i[(r = s[o])].index) ? (a[n] = e[i[r].alias]) : (a[o] = e[i[r].alias]);
            return a;
          }),
          (e.Struct.read = function (t, r) {
            "use strict";
            var n = new t();
            return r.readStructBegin(), e.Struct.readFields(t, r, n), r.readStructEnd(), n;
          }),
          (e.Struct.readFields = function (t, r, n) {
            "use strict";
            for (var o, i; ; ) {
              if ((o = r.readFieldBegin()).ftype == e.Type.STOP) return;
              (i = t.fields[o.fid]) && e.equals(o.ftype, i.type)
                ? i.def
                  ? (n[i.alias] = i.def.read(r))
                  : (n[i.alias] = r.readType(i.type))
                : r.skip(o.ftype),
                r.readFieldEnd();
            }
          }),
          (e.Struct.write = function (t, r, n) {
            "use strict";
            var o, i, s;
            for (o in (r.writeStructBegin(t.alias), t.fields))
              null != (s = n[(i = t.fields[o]).alias]) &&
                (r.writeFieldBegin(i.alias, e.serializedType(i.type), o),
                i.def ? new i.def.write(r, s) : r.writeType(i.type, s),
                r.writeFieldEnd());
            r.writeFieldStop(), r.writeStructEnd();
          }),
          (e.Exception = {}),
          (e.Exception.define = function (t, r) {
            "use strict";
            var n,
              o,
              i = {};
            for (n in (r = r || {})) (o = r[n]), (i[o.alias] = o.defaultValue || null);
            var s = function (t) {
              var r = {};
              "object" == typeof t && (r = t),
                e.defaults(this, r, i),
                "string" == typeof t ? (this.message = t) : t instanceof Error && (this.message = t.message);
            };
            return (
              (s.alias = t),
              (s.fields = r),
              (s.defaultValues = i),
              (s.read = e.Struct.read.bind(null, s)),
              (s.write = e.Struct.write.bind(null, s)),
              s
            );
          }),
          (e.TException = e.Exception.define("TException", { 1: { alias: "message", type: e.Type.STRING } })),
          (e.TApplicationExceptionType = {
            UNKNOWN: 0,
            UNKNOWN_METHOD: 1,
            INVALID_MESSAGE_TYPE: 2,
            WRONG_METHOD_NAME: 3,
            BAD_SEQUENCE_ID: 4,
            MISSING_RESULT: 5,
            INTERNAL_ERROR: 6,
            PROTOCOL_ERROR: 7
          }),
          (e.TApplicationException = e.Exception.define("TApplicationException", {
            1: { alias: "message", type: e.Type.STRING },
            2: { alias: "code", type: e.Type.I32, defaultValue: e.TApplicationExceptionType.INTERNAL_ERROR }
          })),
          (e.Processor = function () {
            "use strict";
            this.methods = {};
          }),
          (e.Processor.prototype.addMethod = function (t, e) {
            "use strict";
            this.methods[t.alias] = { def: t, fn: e };
          }),
          (e.Processor.prototype.process = function (t, r) {
            "use strict";
            var n, o, i, s, a;
            try {
              if ((s = t.readMessageBegin()).mtype != e.MessageType.CALL)
                throw new e.TException("Server expects CALL but received unsupported message type: " + s.mtype);
              if (null == (n = this.methods[s.fname])) throw new e.TException("Unrecognized method name: " + s.fname);
              (a = (o = n.def).args.read(t)),
                (i = new o.result()),
                n.fn.apply(
                  null,
                  o.args.values(a).concat([
                    function (t) {
                      (i.returnValue = t), o.sendResponse(r, s.seqid, i);
                    },
                    function (t) {
                      var n = s ? s.seqid : -1;
                      i && o.result.setByDef(i, t) ? o.sendResponse(r, s.seqid, i) : e.Method.sendException(r, n, t);
                    }
                  ])
                );
            } catch (t) {
              console.log(t);
              var c = s ? s.seqid : -1;
              i && o.result.setByDef(i, t) ? o.sendResponse(r, s.seqid, i) : e.Method.sendException(r, c, t);
            }
          }),
          (t.exports = e);
      },
      38722: function (t, e, r) {
        r(21293);
        var n,
          o = function () {
            (this.buffer = []), (this.readOffset = 0);
          };
        ((n = o.prototype).reset = function () {
          (this.buffer = []), (this.readOffset = 0);
        }),
          (n.getBytes = function () {
            var t = this.buffer.reduce(function (t, e) {
                return t + e.byteLength;
              }, 0),
              e = new Uint8Array(new ArrayBuffer(t)),
              r = 0;
            return (
              this.buffer.forEach(function (t) {
                var n;
                (n = t.buffer ? (t instanceof Uint8Array ? t : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : new Uint8Array(t)),
                  e.set(n, r),
                  (r += t.byteLength);
              }),
              e
            );
          }),
          (n.open = function () {}),
          (n.close = function () {}),
          (n.read = function (t) {
            var e = new DataView(this.getBytes().buffer, this.readOffset, t);
            return (this.readOffset += t), e;
          }),
          (n.write = function (t) {
            this.buffer.push(t);
          }),
          (n.flush = function (t) {}),
          (n.send = function (t, e, r, n) {}),
          (t.exports = o);
      },
      66895: function (t, e, r) {
        var n = r(2523),
          o = r(10579);
        function i(t, e) {
          "use strict";
          (this.input = new o()), (this.url = t), (this.opts = e || {});
        }
        (i.prototype.open = function () {}),
          (i.prototype.close = function () {}),
          (i.prototype.read = function (t) {
            throw Error("BinaryFetchHttpTransport object does not support reads");
          }),
          (i.prototype.write = function (t) {
            this.input.write(t);
          }),
          (i.prototype.clear = function () {
            this.input.clear();
          }),
          (i.prototype.flush = function (t) {
            const e = "application/x-thrift";
            var r = { "Content-Type": e, Accept: e };
            if (this.opts.headers) for (var i in this.opts.headers) r[i] = this.opts.headers[i];
            this.input.flush();
            const s = new Blob([this.input.buffer], { type: e });
            fetch(this.url, { method: "post", headers: r, body: s, credentials: this.opts.noCredentials ? "omit" : "include" })
              .then(async (e) => {
                if (t)
                  if (200 === e.status)
                    e.arrayBuffer()
                      .then((e) => {
                        t(null, new o(e));
                      })
                      .catch((e) => {
                        t(
                          new n.TransportException(
                            "Fetch response handling error",
                            new n.NetworkException(`Fetch response to arrayBuffer error ${JSON.stringify(e)} `, this.url)
                          )
                        );
                      });
                  else {
                    const r = {};
                    for (let t of e.headers.entries()) Array.isArray(t) && t.length && 2 === t.length && (r[t[0]] = t[1]);
                    t(
                      new n.TransportException("Non 200 http response", new n.HTTPException("Non 200 http response", this.url, e.status, r))
                    );
                  }
              })
              .catch((e) => {
                t && t(new n.TransportException("Fetch error", new n.NetworkException(`Fetch error ${JSON.stringify(e)} `, this.url)));
              }),
              this.clear();
          }),
          (t.exports = i);
      },
      40594: function (t, e, r) {
        var n = r(10579),
          o = function (t) {
            "use strict";
            (this.notify = t), (this.received = new n()), (this.input = new n());
          };
        !(function (t) {
          "use strict";
          (t.reset = function () {
            this.received.clear(), this.input.clear();
          }),
            (t.open = function () {}),
            (t.close = function () {}),
            (t.read = function (t) {
              return this.received.read(t);
            }),
            (t.readAll = function () {
              return this.received.buffer;
            }),
            (t.write = function (t) {
              this.input.write(t);
            }),
            (t.flush = function (t) {
              this.input.flush();
              for (var e = this.input.buffer, r = e.length, n = [], o = 0; o < r; o++) n.push(String.fromCharCode(e[o]));
              this.notify(window.btoa(n.join(""))), this.reset();
            }),
            (t.send = function (t, e, r, n) {}),
            (t.receive = function (t) {
              for (var e = window.atob(t), r = e.length, o = new Uint8Array(r), i = 0; i < r; i++) o[i] = e.charCodeAt(i);
              this.received = new n(o.buffer);
            });
        })(o.prototype),
          (t.exports = o);
      },
      2523: function (t) {
        function e(t, e) {
          (this.message = t), (this.cause = e);
        }
        function r(t, e, r, n) {
          (this.message = t), (this.url = e), (this.statusCode = r), (this.headers = n);
        }
        function n(t, e) {
          (this.message = t), (this.url = e);
        }
        (e.prototype = Object.create(Error.prototype)),
          (e.prototype.name = "TransportException"),
          (r.prototype = Object.create(Error.prototype)),
          (r.prototype.name = "HTTPException"),
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.name = "NetworkException"),
          (t.exports = { TransportException: e, HTTPException: r, NetworkException: n });
      },
      5122: function (t) {
        var e = function (t) {
          "use strict";
          (this.notify = t), (this.received = ""), (this.pos = 0);
        };
        !(function (t) {
          "use strict";
          (t.reset = function () {
            (this.received = ""), (this.pos = 0);
          }),
            (t.open = function () {}),
            (t.close = function () {}),
            (t.read = function (t) {
              var e = this.received.substring(this.pos, this.pos + t);
              return (this.pos += t), e;
            }),
            (t.readAll = function () {
              return this.received;
            }),
            (t.write = function (t) {
              this.notify(JSON.stringify(t));
            }),
            (t.flush = function (t) {}),
            (t.send = function (t, e, r, n) {}),
            (t.receive = function (t) {
              (this.received = t), (this.pos = 0);
            });
        })(e.prototype),
          (t.exports = e);
      },
      10579: function (t) {
        function e(t) {
          "use strict";
          (this.queue = []), (this.buffer = t), (this.offset = 0);
        }
        (e.prototype.read = function (t) {
          "use strict";
          var e = new DataView(this.buffer, this.offset, t);
          return (this.offset += t), e;
        }),
          (e.prototype.write = function (t) {
            "use strict";
            var e;
            (e = t.buffer ? (t instanceof Uint8Array ? t : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : new Uint8Array(t)),
              this.queue.push(e);
          }),
          (e.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (e.prototype.flush = function () {
            "use strict";
            var t,
              e = 0,
              r = 0;
            this.buffer && (e = this.buffer.byteLength),
              (e = this.queue.reduce(function (t, e) {
                return t + e.byteLength;
              }, e)),
              (t = new Uint8Array(new ArrayBuffer(e))),
              this.buffer && t.set(this.buffer),
              this.queue.forEach(function (e) {
                t.set(e, r), (r += e.byteLength);
              }),
              (this.queue = []),
              (this.buffer = t);
          }),
          (t.exports = e);
      },
      38935: function (t, e, r) {
        var n = r(39807),
          o = r(2523),
          i = r(72693),
          s = r(49069),
          a = r(8575);
        function c(t, e, r, o, i) {
          "use strict";
          var s = a.parse(t);
          (this.hostname = s.hostname),
            (this.port = s.port),
            (this.path = s.path),
            (this.url = s.href),
            (this.quiet = !!e),
            (this.insecure = !!r),
            (this.additionalHeaders = o),
            (this.agent = i),
            (this.input = new n());
        }
        (c.prototype.open = function () {}),
          (c.prototype.close = function () {}),
          (c.prototype.read = function (t) {
            "use strict";
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (c.prototype.write = function (t) {
            "use strict";
            this.input.write(t);
          }),
          (c.prototype.clear = function () {
            "use strict";
            this.input.clear();
          }),
          (c.prototype.flush = function (t) {
            "use strict";
            var e = this,
              r = Object.assign({ "Content-Type": "application/x-thrift", Accept: "application/x-thrift" }, this.additionalHeaders),
              a = { hostname: this.hostname, port: this.port, path: this.path, method: "POST", headers: r };
            this.agent && (a.agent = this.agent);
            var c = this.url,
              u = (this.insecure ? i : s).request(a, function (r) {
                var i = [];
                if (200 !== r.statusCode) {
                  var s = "Error in Thrift response. status:" + r.statusCode + "headers: " + JSON.stringify(r.headers);
                  if ((e.log(s), t)) return void t(new o.TransportException(s, new o.HTTPException("", c, r.statusCode, r.headers)));
                }
                r.on("data", function (t) {
                  i.push(t);
                }),
                  r.on("end", function () {
                    var e = Buffer.concat(i);
                    t && t(null, new n(e));
                  });
              });
            u.on("error", function (r) {
              e.log("Error making Thrift HTTP request: " + r),
                t &&
                  t(
                    new o.TransportException(r.message ? r.message : "Thrift request failed", new o.NetworkException(JSON.stringify(r), c))
                  );
            }),
              this.input.flush(),
              u.write(this.input.buffer),
              u.end(),
              this.clear();
          }),
          (c.prototype.log = function (t) {
            "use strict";
            this.quiet || console.log(t);
          }),
          (t.exports = c);
      },
      39807: function (t) {
        function e(t) {
          "use strict";
          (this.queue = []), (this.offset = 0), (this.buffer = t);
        }
        (e.prototype.read = function (t) {
          "use strict";
          if (this.offset + t > this.buffer.length) throw Error("MemBuffer overrun");
          var e = this.buffer.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }),
          (e.prototype.write = function (t) {
            "use strict";
            if (Buffer.isBuffer(t)) this.queue.push(t);
            else {
              if (!(t.buffer && t.buffer instanceof ArrayBuffer))
                throw Error("Unsupported type sent to MemBuffer.write. Accepts Buffer and ArrayBuffer.");
              this.queue.push(Buffer.from(t.buffer));
            }
          }),
          (e.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (e.prototype.flush = function () {
            "use strict";
            this.buffer && this.queue.unshift(this.buffer), (this.buffer = Buffer.concat(this.queue)), (this.queue = []);
          }),
          (t.exports = e);
      },
      45099: function (t) {
        function e(t) {
          "use strict";
          (this.queue = []), (this.buffer = t), (this.offset = 0);
        }
        (e.prototype.read = function (t) {
          "use strict";
          this.flush();
          var e = this.buffer.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }),
          (e.prototype.readAll = function () {
            "use strict";
            this.flush();
            var t = this.buffer.length - this.offset;
            return this.read(t);
          }),
          (e.prototype.write = function (t) {
            "use strict";
            this.queue.push(t);
          }),
          (e.prototype.clear = function () {
            "use strict";
            (this.queue = []), (this.buffer = null), (this.offset = 0);
          }),
          (e.prototype.flush = function () {
            "use strict";
            var t = this.buffer ? this.buffer : "";
            (t += this.queue.join("")), (this.queue = []), (this.buffer = t);
          }),
          (t.exports = e);
      },
      63950: function (t, e, r) {
        var n = r(2523),
          o = r(10579);
        function i(t, e) {
          (this.input = new o()), (this.url = t), (this.opts = e || {});
        }
        (i.prototype.open = function () {}),
          (i.prototype.close = function () {}),
          (i.prototype.read = function (t) {
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (i.prototype.write = function (t) {
            this.input.write(t);
          }),
          (i.prototype.clear = function () {
            this.input.clear();
          }),
          (i.prototype.flush = function (t) {
            var e;
            (e = new XMLHttpRequest()).open("POST", this.url, !0),
              (e.withCredentials = !this.opts.noCredentials),
              e.setRequestHeader("Content-Type", "application/x-thrift"),
              e.setRequestHeader("Accept", "application/x-thrift"),
              (e.responseType = "arraybuffer");
            var r = this.opts.headers || {};
            for (var i in r) {
              var s = r[i];
              e.setRequestHeader(i, s);
            }
            var a = this.url;
            (e.onload = function (r) {
              if (t)
                if (200 === e.status) t(null, new o(e.response));
                else {
                  const r = e
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/),
                    o = {};
                  r.forEach(function (t) {
                    var e = t.split(": "),
                      r = e.shift(),
                      n = e.join(": ");
                    o[r] = n;
                  }),
                    t(new n.TransportException("Non 200 http response", new n.HTTPException("Non 200 http response", a, e.status, o)));
                }
            }),
              (e.onerror = function (e) {
                t && t(new n.TransportException("XHR error event", new n.NetworkException("XHR error event", a)));
              }),
              (e.ontimeout = function (e) {
                t && t(new n.TransportException("XHR error event. Timeout.", new n.NetworkException("XHR error event. Timeout.", a)));
              }),
              this.input.flush(),
              e.send(this.input.buffer.buffer),
              this.clear();
          }),
          (t.exports = i);
      },
      30640: function (t, e, r) {
        var n = r(45099);
        function o(t, e) {
          (this.input = new n()), (this.url = t), (this.opts = e || {});
        }
        (o.prototype.open = function () {}),
          (o.prototype.close = function () {}),
          (o.prototype.read = function (t) {
            throw Error("TextHttpTransport object does not support reads");
          }),
          (o.prototype.write = function (t) {
            this.input.write(t);
          }),
          (o.prototype.clear = function () {
            this.input.clear();
          }),
          (o.prototype.flush = function (t) {
            var e;
            (e = (function () {
              try {
                return new XMLHttpRequest();
              } catch (t) {}
              try {
                return new ActiveXObject("Msxml2.XMLHTTP");
              } catch (t) {}
              try {
                return new ActiveXObject("Microsoft.XMLHTTP");
              } catch (t) {}
              throw Error("Your browser doesn't support the XmlHttpRequest object.");
            })()).overrideMimeType && e.overrideMimeType("application/json"),
              e.open("POST", this.url, !0),
              (e.withCredentials = !this.opts.noCredentials),
              e.setRequestHeader("Content-Type", "application/json"),
              e.setRequestHeader("Accept", "application/json"),
              (e.responseType = "application/json"),
              Object.prototype.hasOwnProperty.call(e, "onload") && Object.prototype.hasOwnProperty.call(e, "onerror")
                ? ((e.onload = function (r) {
                    t && t(null, new n(e.response));
                  }),
                  (e.onerror = function (e) {
                    t && t(e);
                  }))
                : (e.onreadystatechange = function () {
                    4 === e.readyState &&
                      t &&
                      (200 === e.status ? t(null, new n(e.responseText)) : t(new Error("unexpected status: " + e.status)));
                  }),
              this.input.flush(),
              e.send(this.input.buffer),
              this.clear();
          }),
          (t.exports = o);
      },
      17648: function (t) {
        "use strict";
        var e = Array.prototype.slice,
          r = Object.prototype.toString;
        t.exports = function (t) {
          var n = this;
          if ("function" != typeof n || "[object Function]" !== r.call(n))
            throw new TypeError("Function.prototype.bind called on incompatible " + n);
          for (var o, i = e.call(arguments, 1), s = Math.max(0, n.length - i.length), a = [], c = 0; c < s; c++) a.push("$" + c);
          if (
            ((o = Function(
              "binder",
              "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }"
            )(function () {
              if (this instanceof o) {
                var r = n.apply(this, i.concat(e.call(arguments)));
                return Object(r) === r ? r : this;
              }
              return n.apply(t, i.concat(e.call(arguments)));
            })),
            n.prototype)
          ) {
            var u = function () {};
            (u.prototype = n.prototype), (o.prototype = new u()), (u.prototype = null);
          }
          return o;
        };
      },
      58612: function (t, e, r) {
        "use strict";
        var n = r(17648);
        t.exports = Function.prototype.bind || n;
      },
      40210: function (t, e, r) {
        "use strict";
        var n,
          o = SyntaxError,
          i = Function,
          s = TypeError,
          a = function (t) {
            try {
              return i('"use strict"; return (' + t + ").constructor;")();
            } catch (t) {}
          },
          c = Object.getOwnPropertyDescriptor;
        if (c)
          try {
            c({}, "");
          } catch (t) {
            c = null;
          }
        var u = function () {
            throw new s();
          },
          p = c
            ? (function () {
                try {
                  return u;
                } catch (t) {
                  try {
                    return c(arguments, "callee").get;
                  } catch (t) {
                    return u;
                  }
                }
              })()
            : u,
          l = r(41405)(),
          f = r(28185)(),
          h =
            Object.getPrototypeOf ||
            (f
              ? function (t) {
                  return t.__proto__;
                }
              : null),
          d = {},
          y = "undefined" != typeof Uint8Array && h ? h(Uint8Array) : n,
          m = {
            "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
            "%ArrayIteratorPrototype%": l && h ? h([][Symbol.iterator]()) : n,
            "%AsyncFromSyncIteratorPrototype%": n,
            "%AsyncFunction%": d,
            "%AsyncGenerator%": d,
            "%AsyncGeneratorFunction%": d,
            "%AsyncIteratorPrototype%": d,
            "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? n : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
            "%Function%": i,
            "%GeneratorFunction%": d,
            "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": l && h ? h(h([][Symbol.iterator]())) : n,
            "%JSON%": "object" == typeof JSON ? JSON : n,
            "%Map%": "undefined" == typeof Map ? n : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && l && h ? h(new Map()[Symbol.iterator]()) : n,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? n : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? n : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && l && h ? h(new Set()[Symbol.iterator]()) : n,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": l && h ? h(""[Symbol.iterator]()) : n,
            "%Symbol%": l ? Symbol : n,
            "%SyntaxError%": o,
            "%ThrowTypeError%": p,
            "%TypedArray%": y,
            "%TypeError%": s,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
          };
        if (h)
          try {
            null.error;
          } catch (t) {
            var g = h(h(t));
            m["%Error.prototype%"] = g;
          }
        var v = function t(e) {
            var r;
            if ("%AsyncFunction%" === e) r = a("async function () {}");
            else if ("%GeneratorFunction%" === e) r = a("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e) r = a("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
              var n = t("%AsyncGeneratorFunction%");
              n && (r = n.prototype);
            } else if ("%AsyncIteratorPrototype%" === e) {
              var o = t("%AsyncGenerator%");
              o && h && (r = h(o.prototype));
            }
            return (m[e] = r), r;
          },
          w = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
          },
          b = r(58612),
          E = r(17642),
          S = b.call(Function.call, Array.prototype.concat),
          A = b.call(Function.apply, Array.prototype.splice),
          T = b.call(Function.call, String.prototype.replace),
          I = b.call(Function.call, String.prototype.slice),
          _ = b.call(Function.call, RegExp.prototype.exec),
          k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          B = /\\(\\)?/g,
          O = function (t, e) {
            var r,
              n = t;
            if ((E(w, n) && (n = "%" + (r = w[n])[0] + "%"), E(m, n))) {
              var i = m[n];
              if ((i === d && (i = v(n)), void 0 === i && !e))
                throw new s("intrinsic " + t + " exists, but is not available. Please file an issue!");
              return { alias: r, name: n, value: i };
            }
            throw new o("intrinsic " + t + " does not exist!");
          };
        t.exports = function (t, e) {
          if ("string" != typeof t || 0 === t.length) throw new s("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof e) throw new s('"allowMissing" argument must be a boolean');
          if (null === _(/^%?[^%]*%?$/, t))
            throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var r = (function (t) {
              var e = I(t, 0, 1),
                r = I(t, -1);
              if ("%" === e && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
              if ("%" === r && "%" !== e) throw new o("invalid intrinsic syntax, expected opening `%`");
              var n = [];
              return (
                T(t, k, function (t, e, r, o) {
                  n[n.length] = r ? T(o, B, "$1") : e || t;
                }),
                n
              );
            })(t),
            n = r.length > 0 ? r[0] : "",
            i = O("%" + n + "%", e),
            a = i.name,
            u = i.value,
            p = !1,
            l = i.alias;
          l && ((n = l[0]), A(r, S([0, 1], l)));
          for (var f = 1, h = !0; f < r.length; f += 1) {
            var d = r[f],
              y = I(d, 0, 1),
              g = I(d, -1);
            if (('"' === y || "'" === y || "`" === y || '"' === g || "'" === g || "`" === g) && y !== g)
              throw new o("property names with quotes must have matching quotes");
            if ((("constructor" !== d && h) || (p = !0), E(m, (a = "%" + (n += "." + d) + "%")))) u = m[a];
            else if (null != u) {
              if (!(d in u)) {
                if (!e) throw new s("base intrinsic for " + t + " exists, but the property is not available.");
                return;
              }
              if (c && f + 1 >= r.length) {
                var v = c(u, d);
                u = (h = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : u[d];
              } else (h = E(u, d)), (u = u[d]);
              h && !p && (m[a] = u);
            }
          }
          return u;
        };
      },
      28185: function (t) {
        "use strict";
        var e = { foo: {} },
          r = Object;
        t.exports = function () {
          return { __proto__: e }.foo === e.foo && !({ __proto__: null } instanceof r);
        };
      },
      41405: function (t, e, r) {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol,
          o = r(55419);
        t.exports = function () {
          return (
            "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
          );
        };
      },
      55419: function (t) {
        "use strict";
        t.exports = function () {
          if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var t = {},
            e = Symbol("test"),
            r = Object(e);
          if ("string" == typeof e) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
          for (e in ((t[e] = 42), t)) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
          if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
          var n = Object.getOwnPropertySymbols(t);
          if (1 !== n.length || n[0] !== e) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== o.value || !0 !== o.enumerable) return !1;
          }
          return !0;
        };
      },
      17642: function (t, e, r) {
        "use strict";
        var n = r(58612);
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
      },
      88495: function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function () {
          "use strict";
          var ERROR = "input is invalid type",
            WINDOW = "object" == typeof window,
            root = WINDOW ? window : {};
          root.JS_MD5_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && "object" == typeof self,
            NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
          NODE_JS ? (root = __webpack_require__.g) : WEB_WORKER && (root = self);
          var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports,
            AMD = __webpack_require__.amdO,
            ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [128, 32768, 8388608, -2147483648],
            SHIFT = [0, 8, 16, 24],
            OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
            BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
            blocks = [],
            buffer8;
          if (ARRAY_BUFFER) {
            var buffer = new ArrayBuffer(68);
            (buffer8 = new Uint8Array(buffer)), (blocks = new Uint32Array(buffer));
          }
          (!root.JS_MD5_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            !ARRAY_BUFFER ||
              (!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (t) {
                return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
              });
          var createOutputMethod = function (t) {
              return function (e) {
                return new Md5(!0).update(e)[t]();
              };
            },
            createMethod = function () {
              var t = createOutputMethod("hex");
              NODE_JS && (t = nodeWrap(t)),
                (t.create = function () {
                  return new Md5();
                }),
                (t.update = function (e) {
                  return t.create().update(e);
                });
              for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                var r = OUTPUT_TYPES[e];
                t[r] = createOutputMethod(r);
              }
              return t;
            },
            nodeWrap = function (method) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                nodeMethod = function (t) {
                  if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
                  if (null == t) throw ERROR;
                  return (
                    t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                    Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer
                      ? crypto.createHash("md5").update(new Buffer(t)).digest("hex")
                      : method(t)
                  );
                };
              return nodeMethod;
            };
          function Md5(t) {
            if (t)
              (blocks[0] =
                blocks[16] =
                blocks[1] =
                blocks[2] =
                blocks[3] =
                blocks[4] =
                blocks[5] =
                blocks[6] =
                blocks[7] =
                blocks[8] =
                blocks[9] =
                blocks[10] =
                blocks[11] =
                blocks[12] =
                blocks[13] =
                blocks[14] =
                blocks[15] =
                  0),
                (this.blocks = blocks),
                (this.buffer8 = buffer8);
            else if (ARRAY_BUFFER) {
              var e = new ArrayBuffer(68);
              (this.buffer8 = new Uint8Array(e)), (this.blocks = new Uint32Array(e));
            } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            (this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0), (this.finalized = this.hashed = !1), (this.first = !0);
          }
          (Md5.prototype.update = function (t) {
            if (!this.finalized) {
              var e,
                r = typeof t;
              if ("string" !== r) {
                if ("object" !== r) throw ERROR;
                if (null === t) throw ERROR;
                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!(Array.isArray(t) || (ARRAY_BUFFER && ArrayBuffer.isView(t)))) throw ERROR;
                e = !0;
              }
              for (var n, o, i = 0, s = t.length, a = this.blocks, c = this.buffer8; i < s; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (a[0] = a[16]),
                    (a[16] =
                      a[1] =
                      a[2] =
                      a[3] =
                      a[4] =
                      a[5] =
                      a[6] =
                      a[7] =
                      a[8] =
                      a[9] =
                      a[10] =
                      a[11] =
                      a[12] =
                      a[13] =
                      a[14] =
                      a[15] =
                        0)),
                  e)
                )
                  if (ARRAY_BUFFER) for (o = this.start; i < s && o < 64; ++i) c[o++] = t[i];
                  else for (o = this.start; i < s && o < 64; ++i) a[o >> 2] |= t[i] << SHIFT[3 & o++];
                else if (ARRAY_BUFFER)
                  for (o = this.start; i < s && o < 64; ++i)
                    (n = t.charCodeAt(i)) < 128
                      ? (c[o++] = n)
                      : n < 2048
                      ? ((c[o++] = 192 | (n >> 6)), (c[o++] = 128 | (63 & n)))
                      : n < 55296 || n >= 57344
                      ? ((c[o++] = 224 | (n >> 12)), (c[o++] = 128 | ((n >> 6) & 63)), (c[o++] = 128 | (63 & n)))
                      : ((n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(++i)))),
                        (c[o++] = 240 | (n >> 18)),
                        (c[o++] = 128 | ((n >> 12) & 63)),
                        (c[o++] = 128 | ((n >> 6) & 63)),
                        (c[o++] = 128 | (63 & n)));
                else
                  for (o = this.start; i < s && o < 64; ++i)
                    (n = t.charCodeAt(i)) < 128
                      ? (a[o >> 2] |= n << SHIFT[3 & o++])
                      : n < 2048
                      ? ((a[o >> 2] |= (192 | (n >> 6)) << SHIFT[3 & o++]), (a[o >> 2] |= (128 | (63 & n)) << SHIFT[3 & o++]))
                      : n < 55296 || n >= 57344
                      ? ((a[o >> 2] |= (224 | (n >> 12)) << SHIFT[3 & o++]),
                        (a[o >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & o++]),
                        (a[o >> 2] |= (128 | (63 & n)) << SHIFT[3 & o++]))
                      : ((n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(++i)))),
                        (a[o >> 2] |= (240 | (n >> 18)) << SHIFT[3 & o++]),
                        (a[o >> 2] |= (128 | ((n >> 12) & 63)) << SHIFT[3 & o++]),
                        (a[o >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & o++]),
                        (a[o >> 2] |= (128 | (63 & n)) << SHIFT[3 & o++]));
                (this.lastByteIndex = o),
                  (this.bytes += o - this.start),
                  o >= 64 ? ((this.start = o - 64), this.hash(), (this.hashed = !0)) : (this.start = o);
              }
              return this;
            }
          }),
            (Md5.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                  e = this.lastByteIndex;
                (t[e >> 2] |= EXTRA[3 & e]),
                  e >= 56 &&
                    (this.hashed || this.hash(),
                    (t[0] = t[16]),
                    (t[16] =
                      t[1] =
                      t[2] =
                      t[3] =
                      t[4] =
                      t[5] =
                      t[6] =
                      t[7] =
                      t[8] =
                      t[9] =
                      t[10] =
                      t[11] =
                      t[12] =
                      t[13] =
                      t[14] =
                      t[15] =
                        0)),
                  (t[14] = this.bytes << 3),
                  this.hash();
              }
            }),
            (Md5.prototype.hash = function () {
              var t,
                e,
                r,
                n,
                o,
                i,
                s = this.blocks;
              this.first
                ? (e =
                    ((((e =
                      ((t = ((((t = s[0] - 680876937) << 7) | (t >>> 25)) - 271733879) << 0) ^
                        ((r =
                          ((((r =
                            (-271733879 ^
                              ((n = ((((n = (-1732584194 ^ (2004318071 & t)) + s[1] - 117830708) << 12) | (n >>> 20)) + t) << 0) &
                                (-271733879 ^ t))) +
                            s[2] -
                            1126478375) <<
                            17) |
                            (r >>> 15)) +
                            n) <<
                          0) &
                          (n ^ t))) +
                      s[3] -
                      1316259209) <<
                      22) |
                      (e >>> 10)) +
                      r) <<
                    0)
                : ((t = this.h0),
                  (e = this.h1),
                  (r = this.h2),
                  (e =
                    ((((e +=
                      ((t = ((((t += ((n = this.h3) ^ (e & (r ^ n))) + s[0] - 680876936) << 7) | (t >>> 25)) + e) << 0) ^
                        ((r =
                          ((((r +=
                            (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + s[1] - 389564586) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                            s[2] +
                            606105819) <<
                            17) |
                            (r >>> 15)) +
                            n) <<
                          0) &
                          (n ^ t))) +
                      s[3] -
                      1044525330) <<
                      22) |
                      (e >>> 10)) +
                      r) <<
                    0)),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + s[4] - 176418897) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + s[5] + 1200080426) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          s[6] -
                          1473231341) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    s[7] -
                    45705983) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + s[8] + 1770035416) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + s[9] - 1958414417) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          s[10] -
                          42063) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    s[11] -
                    1990404162) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + s[12] + 1804603682) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + s[13] - 40341101) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          s[14] -
                          1502002290) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    s[15] +
                    1236535329) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + s[1] - 165796510) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        s[6] -
                        1069501632) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + s[11] + 643717713) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    s[0] -
                    373897302) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + s[5] - 701558691) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        s[10] +
                        38016083) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + s[15] - 660478335) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    s[4] -
                    405537848) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + s[9] + 568446438) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        s[14] -
                        1019803690) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + s[3] - 187363961) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    s[8] +
                    1163531501) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + s[13] - 1444681467) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        s[2] -
                        51403784) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + s[7] + 1735328473) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    s[12] -
                    1926607734) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((i =
                      (n =
                        ((((n +=
                          ((o = e ^ r) ^ (t = ((((t += (o ^ n) + s[5] - 378558) << 4) | (t >>> 28)) + e) << 0)) + s[8] - 2022574463) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (i ^ e) + s[11] + 1839030562) << 16) | (r >>> 16)) + n) << 0)) +
                    s[14] -
                    35309556) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((i =
                      (n =
                        ((((n +=
                          ((o = e ^ r) ^ (t = ((((t += (o ^ n) + s[1] - 1530992060) << 4) | (t >>> 28)) + e) << 0)) + s[4] + 1272893353) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (i ^ e) + s[7] - 155497632) << 16) | (r >>> 16)) + n) << 0)) +
                    s[10] -
                    1094730640) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((i =
                      (n =
                        ((((n +=
                          ((o = e ^ r) ^ (t = ((((t += (o ^ n) + s[13] + 681279174) << 4) | (t >>> 28)) + e) << 0)) + s[0] - 358537222) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (i ^ e) + s[3] - 722521979) << 16) | (r >>> 16)) + n) << 0)) +
                    s[6] +
                    76029189) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((i =
                      (n =
                        ((((n +=
                          ((o = e ^ r) ^ (t = ((((t += (o ^ n) + s[9] - 640364487) << 4) | (t >>> 28)) + e) << 0)) + s[12] - 421815835) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (i ^ e) + s[15] + 530742520) << 16) | (r >>> 16)) + n) << 0)) +
                    s[2] -
                    995338651) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + s[0] - 198630844) << 6) | (t >>> 26)) + e) << 0) | ~r)) + s[7] + 1126891415) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + s[14] - 1416354905) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    s[5] -
                    57434055) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + s[12] + 1700485571) << 6) | (t >>> 26)) + e) << 0) | ~r)) +
                        s[3] -
                        1894986606) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + s[10] - 1051523) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    s[1] -
                    2054922799) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + s[8] + 1873313359) << 6) | (t >>> 26)) + e) << 0) | ~r)) + s[15] - 30611744) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + s[6] - 1560198380) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    s[13] +
                    1309151649) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + s[4] - 145523070) << 6) | (t >>> 26)) + e) << 0) | ~r)) +
                        s[11] -
                        1120210379) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + s[2] + 718787259) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    s[9] -
                    343485551) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                this.first
                  ? ((this.h0 = (t + 1732584193) << 0),
                    (this.h1 = (e - 271733879) << 0),
                    (this.h2 = (r - 1732584194) << 0),
                    (this.h3 = (n + 271733878) << 0),
                    (this.first = !1))
                  : ((this.h0 = (this.h0 + t) << 0),
                    (this.h1 = (this.h1 + e) << 0),
                    (this.h2 = (this.h2 + r) << 0),
                    (this.h3 = (this.h3 + n) << 0));
            }),
            (Md5.prototype.hex = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                r = this.h2,
                n = this.h3;
              return (
                HEX_CHARS[(t >> 4) & 15] +
                HEX_CHARS[15 & t] +
                HEX_CHARS[(t >> 12) & 15] +
                HEX_CHARS[(t >> 8) & 15] +
                HEX_CHARS[(t >> 20) & 15] +
                HEX_CHARS[(t >> 16) & 15] +
                HEX_CHARS[(t >> 28) & 15] +
                HEX_CHARS[(t >> 24) & 15] +
                HEX_CHARS[(e >> 4) & 15] +
                HEX_CHARS[15 & e] +
                HEX_CHARS[(e >> 12) & 15] +
                HEX_CHARS[(e >> 8) & 15] +
                HEX_CHARS[(e >> 20) & 15] +
                HEX_CHARS[(e >> 16) & 15] +
                HEX_CHARS[(e >> 28) & 15] +
                HEX_CHARS[(e >> 24) & 15] +
                HEX_CHARS[(r >> 4) & 15] +
                HEX_CHARS[15 & r] +
                HEX_CHARS[(r >> 12) & 15] +
                HEX_CHARS[(r >> 8) & 15] +
                HEX_CHARS[(r >> 20) & 15] +
                HEX_CHARS[(r >> 16) & 15] +
                HEX_CHARS[(r >> 28) & 15] +
                HEX_CHARS[(r >> 24) & 15] +
                HEX_CHARS[(n >> 4) & 15] +
                HEX_CHARS[15 & n] +
                HEX_CHARS[(n >> 12) & 15] +
                HEX_CHARS[(n >> 8) & 15] +
                HEX_CHARS[(n >> 20) & 15] +
                HEX_CHARS[(n >> 16) & 15] +
                HEX_CHARS[(n >> 28) & 15] +
                HEX_CHARS[(n >> 24) & 15]
              );
            }),
            (Md5.prototype.toString = Md5.prototype.hex),
            (Md5.prototype.digest = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                r = this.h2,
                n = this.h3;
              return [
                255 & t,
                (t >> 8) & 255,
                (t >> 16) & 255,
                (t >> 24) & 255,
                255 & e,
                (e >> 8) & 255,
                (e >> 16) & 255,
                (e >> 24) & 255,
                255 & r,
                (r >> 8) & 255,
                (r >> 16) & 255,
                (r >> 24) & 255,
                255 & n,
                (n >> 8) & 255,
                (n >> 16) & 255,
                (n >> 24) & 255
              ];
            }),
            (Md5.prototype.array = Md5.prototype.digest),
            (Md5.prototype.arrayBuffer = function () {
              this.finalize();
              var t = new ArrayBuffer(16),
                e = new Uint32Array(t);
              return (e[0] = this.h0), (e[1] = this.h1), (e[2] = this.h2), (e[3] = this.h3), t;
            }),
            (Md5.prototype.buffer = Md5.prototype.arrayBuffer),
            (Md5.prototype.base64 = function () {
              for (var t, e, r, n = "", o = this.array(), i = 0; i < 15; )
                (t = o[i++]),
                  (e = o[i++]),
                  (r = o[i++]),
                  (n +=
                    BASE64_ENCODE_CHAR[t >>> 2] +
                    BASE64_ENCODE_CHAR[63 & ((t << 4) | (e >>> 4))] +
                    BASE64_ENCODE_CHAR[63 & ((e << 2) | (r >>> 6))] +
                    BASE64_ENCODE_CHAR[63 & r]);
              return (t = o[i]), n + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[(t << 4) & 63] + "==");
            });
          var exports = createMethod();
          COMMON_JS
            ? (module.exports = exports)
            : ((root.md5 = exports),
              AMD &&
                ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return exports;
                }.call(exports, __webpack_require__, exports, module)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        })();
      },
      70631: function (t, e, r) {
        var n = "function" == typeof Map && Map.prototype,
          o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
          i = n && o && "function" == typeof o.get ? o.get : null,
          s = n && Map.prototype.forEach,
          a = "function" == typeof Set && Set.prototype,
          c = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
          u = a && c && "function" == typeof c.get ? c.get : null,
          p = a && Set.prototype.forEach,
          l = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
          f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
          h = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
          d = Boolean.prototype.valueOf,
          y = Object.prototype.toString,
          m = Function.prototype.toString,
          g = String.prototype.match,
          v = String.prototype.slice,
          w = String.prototype.replace,
          b = String.prototype.toUpperCase,
          E = String.prototype.toLowerCase,
          S = RegExp.prototype.test,
          A = Array.prototype.concat,
          T = Array.prototype.join,
          I = Array.prototype.slice,
          _ = Math.floor,
          k = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          B = Object.getOwnPropertySymbols,
          O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
          R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
          x = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
          j = Object.prototype.propertyIsEnumerable,
          P =
            ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (t) {
                  return t.__proto__;
                }
              : null);
        function C(t, e) {
          if (t === 1 / 0 || t === -1 / 0 || t != t || (t && t > -1e3 && t < 1e3) || S.call(/e/, e)) return e;
          var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof t) {
            var n = t < 0 ? -_(-t) : _(t);
            if (n !== t) {
              var o = String(n),
                i = v.call(e, o.length + 1);
              return w.call(o, r, "$&_") + "." + w.call(w.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
            }
          }
          return w.call(e, r, "$&_");
        }
        var L = r(24654),
          M = L.custom,
          N = q(M) ? M : null;
        function D(t, e, r) {
          var n = "double" === (r.quoteStyle || e) ? '"' : "'";
          return n + t + n;
        }
        function U(t) {
          return w.call(String(t), /"/g, "&quot;");
        }
        function F(t) {
          return !("[object Array]" !== V(t) || (x && "object" == typeof t && x in t));
        }
        function H(t) {
          return !("[object RegExp]" !== V(t) || (x && "object" == typeof t && x in t));
        }
        function q(t) {
          if (R) return t && "object" == typeof t && t instanceof Symbol;
          if ("symbol" == typeof t) return !0;
          if (!t || "object" != typeof t || !O) return !1;
          try {
            return O.call(t), !0;
          } catch (t) {}
          return !1;
        }
        t.exports = function t(e, r, n, o) {
          var a = r || {};
          if (W(a, "quoteStyle") && "single" !== a.quoteStyle && "double" !== a.quoteStyle)
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          if (
            W(a, "maxStringLength") &&
            ("number" == typeof a.maxStringLength ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : null !== a.maxStringLength)
          )
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
          var c = !W(a, "customInspect") || a.customInspect;
          if ("boolean" != typeof c && "symbol" !== c)
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
          if (W(a, "indent") && null !== a.indent && "\t" !== a.indent && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
          if (W(a, "numericSeparator") && "boolean" != typeof a.numericSeparator)
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
          var y = a.numericSeparator;
          if (void 0 === e) return "undefined";
          if (null === e) return "null";
          if ("boolean" == typeof e) return e ? "true" : "false";
          if ("string" == typeof e) return G(e, a);
          if ("number" == typeof e) {
            if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
            var b = String(e);
            return y ? C(e, b) : b;
          }
          if ("bigint" == typeof e) {
            var S = String(e) + "n";
            return y ? C(e, S) : S;
          }
          var _ = void 0 === a.depth ? 5 : a.depth;
          if ((void 0 === n && (n = 0), n >= _ && _ > 0 && "object" == typeof e)) return F(e) ? "[Array]" : "[Object]";
          var B,
            M = (function (t, e) {
              var r;
              if ("\t" === t.indent) r = "\t";
              else {
                if (!("number" == typeof t.indent && t.indent > 0)) return null;
                r = T.call(Array(t.indent + 1), " ");
              }
              return { base: r, prev: T.call(Array(e + 1), r) };
            })(a, n);
          if (void 0 === o) o = [];
          else if (X(o, e) >= 0) return "[Circular]";
          function z(e, r, i) {
            if ((r && (o = I.call(o)).push(r), i)) {
              var s = { depth: a.depth };
              return W(a, "quoteStyle") && (s.quoteStyle = a.quoteStyle), t(e, s, n + 1, o);
            }
            return t(e, a, n + 1, o);
          }
          if ("function" == typeof e && !H(e)) {
            var Y = (function (t) {
                if (t.name) return t.name;
                var e = g.call(m.call(t), /^function\s*([\w$]+)/);
                return e ? e[1] : null;
              })(e),
              tt = K(e, z);
            return "[Function" + (Y ? ": " + Y : " (anonymous)") + "]" + (tt.length > 0 ? " { " + T.call(tt, ", ") + " }" : "");
          }
          if (q(e)) {
            var et = R ? w.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(e);
            return "object" != typeof e || R ? et : $(et);
          }
          if (
            (B = e) &&
            "object" == typeof B &&
            (("undefined" != typeof HTMLElement && B instanceof HTMLElement) ||
              ("string" == typeof B.nodeName && "function" == typeof B.getAttribute))
          ) {
            for (var rt = "<" + E.call(String(e.nodeName)), nt = e.attributes || [], ot = 0; ot < nt.length; ot++)
              rt += " " + nt[ot].name + "=" + D(U(nt[ot].value), "double", a);
            return (rt += ">"), e.childNodes && e.childNodes.length && (rt += "..."), rt + "</" + E.call(String(e.nodeName)) + ">";
          }
          if (F(e)) {
            if (0 === e.length) return "[]";
            var it = K(e, z);
            return M &&
              !(function (t) {
                for (var e = 0; e < t.length; e++) if (X(t[e], "\n") >= 0) return !1;
                return !0;
              })(it)
              ? "[" + Z(it, M) + "]"
              : "[ " + T.call(it, ", ") + " ]";
          }
          if (
            (function (t) {
              return !("[object Error]" !== V(t) || (x && "object" == typeof t && x in t));
            })(e)
          ) {
            var st = K(e, z);
            return "cause" in Error.prototype || !("cause" in e) || j.call(e, "cause")
              ? 0 === st.length
                ? "[" + String(e) + "]"
                : "{ [" + String(e) + "] " + T.call(st, ", ") + " }"
              : "{ [" + String(e) + "] " + T.call(A.call("[cause]: " + z(e.cause), st), ", ") + " }";
          }
          if ("object" == typeof e && c) {
            if (N && "function" == typeof e[N] && L) return L(e, { depth: _ - n });
            if ("symbol" !== c && "function" == typeof e.inspect) return e.inspect();
          }
          if (
            (function (t) {
              if (!i || !t || "object" != typeof t) return !1;
              try {
                i.call(t);
                try {
                  u.call(t);
                } catch (t) {
                  return !0;
                }
                return t instanceof Map;
              } catch (t) {}
              return !1;
            })(e)
          ) {
            var at = [];
            return (
              s &&
                s.call(e, function (t, r) {
                  at.push(z(r, e, !0) + " => " + z(t, e));
                }),
              Q("Map", i.call(e), at, M)
            );
          }
          if (
            (function (t) {
              if (!u || !t || "object" != typeof t) return !1;
              try {
                u.call(t);
                try {
                  i.call(t);
                } catch (t) {
                  return !0;
                }
                return t instanceof Set;
              } catch (t) {}
              return !1;
            })(e)
          ) {
            var ct = [];
            return (
              p &&
                p.call(e, function (t) {
                  ct.push(z(t, e));
                }),
              Q("Set", u.call(e), ct, M)
            );
          }
          if (
            (function (t) {
              if (!l || !t || "object" != typeof t) return !1;
              try {
                l.call(t, l);
                try {
                  f.call(t, f);
                } catch (t) {
                  return !0;
                }
                return t instanceof WeakMap;
              } catch (t) {}
              return !1;
            })(e)
          )
            return J("WeakMap");
          if (
            (function (t) {
              if (!f || !t || "object" != typeof t) return !1;
              try {
                f.call(t, f);
                try {
                  l.call(t, l);
                } catch (t) {
                  return !0;
                }
                return t instanceof WeakSet;
              } catch (t) {}
              return !1;
            })(e)
          )
            return J("WeakSet");
          if (
            (function (t) {
              if (!h || !t || "object" != typeof t) return !1;
              try {
                return h.call(t), !0;
              } catch (t) {}
              return !1;
            })(e)
          )
            return J("WeakRef");
          if (
            (function (t) {
              return !("[object Number]" !== V(t) || (x && "object" == typeof t && x in t));
            })(e)
          )
            return $(z(Number(e)));
          if (
            (function (t) {
              if (!t || "object" != typeof t || !k) return !1;
              try {
                return k.call(t), !0;
              } catch (t) {}
              return !1;
            })(e)
          )
            return $(z(k.call(e)));
          if (
            (function (t) {
              return !("[object Boolean]" !== V(t) || (x && "object" == typeof t && x in t));
            })(e)
          )
            return $(d.call(e));
          if (
            (function (t) {
              return !("[object String]" !== V(t) || (x && "object" == typeof t && x in t));
            })(e)
          )
            return $(z(String(e)));
          if (
            !(function (t) {
              return !("[object Date]" !== V(t) || (x && "object" == typeof t && x in t));
            })(e) &&
            !H(e)
          ) {
            var ut = K(e, z),
              pt = P ? P(e) === Object.prototype : e instanceof Object || e.constructor === Object,
              lt = e instanceof Object ? "" : "null prototype",
              ft = !pt && x && Object(e) === e && x in e ? v.call(V(e), 8, -1) : lt ? "Object" : "",
              ht =
                (pt || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") +
                (ft || lt ? "[" + T.call(A.call([], ft || [], lt || []), ": ") + "] " : "");
            return 0 === ut.length ? ht + "{}" : M ? ht + "{" + Z(ut, M) + "}" : ht + "{ " + T.call(ut, ", ") + " }";
          }
          return String(e);
        };
        var z =
          Object.prototype.hasOwnProperty ||
          function (t) {
            return t in this;
          };
        function W(t, e) {
          return z.call(t, e);
        }
        function V(t) {
          return y.call(t);
        }
        function X(t, e) {
          if (t.indexOf) return t.indexOf(e);
          for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
          return -1;
        }
        function G(t, e) {
          if (t.length > e.maxStringLength) {
            var r = t.length - e.maxStringLength,
              n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return G(v.call(t, 0, e.maxStringLength), e) + n;
          }
          return D(w.call(w.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y), "single", e);
        }
        function Y(t) {
          var e = t.charCodeAt(0),
            r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
          return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + b.call(e.toString(16));
        }
        function $(t) {
          return "Object(" + t + ")";
        }
        function J(t) {
          return t + " { ? }";
        }
        function Q(t, e, r, n) {
          return t + " (" + e + ") {" + (n ? Z(r, n) : T.call(r, ", ")) + "}";
        }
        function Z(t, e) {
          if (0 === t.length) return "";
          var r = "\n" + e.prev + e.base;
          return r + T.call(t, "," + r) + "\n" + e.prev;
        }
        function K(t, e) {
          var r = F(t),
            n = [];
          if (r) {
            n.length = t.length;
            for (var o = 0; o < t.length; o++) n[o] = W(t, o) ? e(t[o], t) : "";
          }
          var i,
            s = "function" == typeof B ? B(t) : [];
          if (R) {
            i = {};
            for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a];
          }
          for (var c in t)
            W(t, c) &&
              ((r && String(Number(c)) === c && c < t.length) ||
                (R && i["$" + c] instanceof Symbol) ||
                (S.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
          if ("function" == typeof B) for (var u = 0; u < s.length; u++) j.call(t, s[u]) && n.push("[" + e(s[u]) + "]: " + e(t[s[u]], t));
          return n;
        }
      },
      55798: function (t) {
        "use strict";
        var e = String.prototype.replace,
          r = /%20/g,
          n = "RFC3986";
        t.exports = {
          default: n,
          formatters: {
            RFC1738: function (t) {
              return e.call(t, r, "+");
            },
            RFC3986: function (t) {
              return String(t);
            }
          },
          RFC1738: "RFC1738",
          RFC3986: n
        };
      },
      80129: function (t, e, r) {
        "use strict";
        var n = r(58261),
          o = r(55235),
          i = r(55798);
        t.exports = { formats: i, parse: o, stringify: n };
      },
      55235: function (t, e, r) {
        "use strict";
        var n = r(12769),
          o = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          s = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: n.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
          },
          a = function (t) {
            return t.replace(/&#(\d+);/g, function (t, e) {
              return String.fromCharCode(parseInt(e, 10));
            });
          },
          c = function (t, e) {
            return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
          },
          u = function (t, e, r, n) {
            if (t) {
              var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                s = /(\[[^[\]]*])/g,
                a = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
                u = a ? i.slice(0, a.index) : i,
                p = [];
              if (u) {
                if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                p.push(u);
              }
              for (var l = 0; r.depth > 0 && null !== (a = s.exec(i)) && l < r.depth; ) {
                if (((l += 1), !r.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes)) return;
                p.push(a[1]);
              }
              return (
                a && p.push("[" + i.slice(a.index) + "]"),
                (function (t, e, r, n) {
                  for (var o = n ? e : c(e, r), i = t.length - 1; i >= 0; --i) {
                    var s,
                      a = t[i];
                    if ("[]" === a && r.parseArrays) s = [].concat(o);
                    else {
                      s = r.plainObjects ? Object.create(null) : {};
                      var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                        p = parseInt(u, 10);
                      r.parseArrays || "" !== u
                        ? !isNaN(p) && a !== u && String(p) === u && p >= 0 && r.parseArrays && p <= r.arrayLimit
                          ? ((s = [])[p] = o)
                          : "__proto__" !== u && (s[u] = o)
                        : (s = { 0: o });
                    }
                    o = s;
                  }
                  return o;
                })(p, e, r, n)
              );
            }
          };
        t.exports = function (t, e) {
          var r = (function (t) {
            if (!t) return s;
            if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder)
              throw new TypeError("Decoder has to be a function.");
            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset)
              throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var e = void 0 === t.charset ? s.charset : t.charset;
            return {
              allowDots: void 0 === t.allowDots ? s.allowDots : !!t.allowDots,
              allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : s.allowPrototypes,
              allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : s.allowSparse,
              arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : s.arrayLimit,
              charset: e,
              charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : s.charsetSentinel,
              comma: "boolean" == typeof t.comma ? t.comma : s.comma,
              decoder: "function" == typeof t.decoder ? t.decoder : s.decoder,
              delimiter: "string" == typeof t.delimiter || n.isRegExp(t.delimiter) ? t.delimiter : s.delimiter,
              depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : s.depth,
              ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
              interpretNumericEntities:
                "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : s.interpretNumericEntities,
              parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : s.parameterLimit,
              parseArrays: !1 !== t.parseArrays,
              plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : s.plainObjects,
              strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : s.strictNullHandling
            };
          })(e);
          if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};
          for (
            var p =
                "string" == typeof t
                  ? (function (t, e) {
                      var r,
                        u = { __proto__: null },
                        p = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                        l = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                        f = p.split(e.delimiter, l),
                        h = -1,
                        d = e.charset;
                      if (e.charsetSentinel)
                        for (r = 0; r < f.length; ++r)
                          0 === f[r].indexOf("utf8=") &&
                            ("utf8=%E2%9C%93" === f[r] ? (d = "utf-8") : "utf8=%26%2310003%3B" === f[r] && (d = "iso-8859-1"),
                            (h = r),
                            (r = f.length));
                      for (r = 0; r < f.length; ++r)
                        if (r !== h) {
                          var y,
                            m,
                            g = f[r],
                            v = g.indexOf("]="),
                            w = -1 === v ? g.indexOf("=") : v + 1;
                          -1 === w
                            ? ((y = e.decoder(g, s.decoder, d, "key")), (m = e.strictNullHandling ? null : ""))
                            : ((y = e.decoder(g.slice(0, w), s.decoder, d, "key")),
                              (m = n.maybeMap(c(g.slice(w + 1), e), function (t) {
                                return e.decoder(t, s.decoder, d, "value");
                              }))),
                            m && e.interpretNumericEntities && "iso-8859-1" === d && (m = a(m)),
                            g.indexOf("[]=") > -1 && (m = i(m) ? [m] : m),
                            o.call(u, y) ? (u[y] = n.combine(u[y], m)) : (u[y] = m);
                        }
                      return u;
                    })(t, r)
                  : t,
              l = r.plainObjects ? Object.create(null) : {},
              f = Object.keys(p),
              h = 0;
            h < f.length;
            ++h
          ) {
            var d = f[h],
              y = u(d, p[d], r, "string" == typeof t);
            l = n.merge(l, y, r);
          }
          return !0 === r.allowSparse ? l : n.compact(l);
        };
      },
      58261: function (t, e, r) {
        "use strict";
        var n = r(37478),
          o = r(12769),
          i = r(55798),
          s = Object.prototype.hasOwnProperty,
          a = {
            brackets: function (t) {
              return t + "[]";
            },
            comma: "comma",
            indices: function (t, e) {
              return t + "[" + e + "]";
            },
            repeat: function (t) {
              return t;
            }
          },
          c = Array.isArray,
          u = Array.prototype.push,
          p = function (t, e) {
            u.apply(t, c(e) ? e : [e]);
          },
          l = Date.prototype.toISOString,
          f = i.default,
          h = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: o.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: i.formatters[f],
            indices: !1,
            serializeDate: function (t) {
              return l.call(t);
            },
            skipNulls: !1,
            strictNullHandling: !1
          },
          d = {},
          y = function t(e, r, i, s, a, u, l, f, y, m, g, v, w, b, E, S) {
            for (var A, T = e, I = S, _ = 0, k = !1; void 0 !== (I = I.get(d)) && !k; ) {
              var B = I.get(e);
              if (((_ += 1), void 0 !== B)) {
                if (B === _) throw new RangeError("Cyclic object value");
                k = !0;
              }
              void 0 === I.get(d) && (_ = 0);
            }
            if (
              ("function" == typeof f
                ? (T = f(r, T))
                : T instanceof Date
                ? (T = g(T))
                : "comma" === i &&
                  c(T) &&
                  (T = o.maybeMap(T, function (t) {
                    return t instanceof Date ? g(t) : t;
                  })),
              null === T)
            ) {
              if (a) return l && !b ? l(r, h.encoder, E, "key", v) : r;
              T = "";
            }
            if (
              "string" == typeof (A = T) ||
              "number" == typeof A ||
              "boolean" == typeof A ||
              "symbol" == typeof A ||
              "bigint" == typeof A ||
              o.isBuffer(T)
            )
              return l ? [w(b ? r : l(r, h.encoder, E, "key", v)) + "=" + w(l(T, h.encoder, E, "value", v))] : [w(r) + "=" + w(String(T))];
            var O,
              R = [];
            if (void 0 === T) return R;
            if ("comma" === i && c(T)) b && l && (T = o.maybeMap(T, l)), (O = [{ value: T.length > 0 ? T.join(",") || null : void 0 }]);
            else if (c(f)) O = f;
            else {
              var x = Object.keys(T);
              O = y ? x.sort(y) : x;
            }
            for (var j = s && c(T) && 1 === T.length ? r + "[]" : r, P = 0; P < O.length; ++P) {
              var C = O[P],
                L = "object" == typeof C && void 0 !== C.value ? C.value : T[C];
              if (!u || null !== L) {
                var M = c(T) ? ("function" == typeof i ? i(j, C) : j) : j + (m ? "." + C : "[" + C + "]");
                S.set(e, _);
                var N = n();
                N.set(d, S), p(R, t(L, M, i, s, a, u, "comma" === i && b && c(T) ? null : l, f, y, m, g, v, w, b, E, N));
              }
            }
            return R;
          };
        t.exports = function (t, e) {
          var r,
            o = t,
            u = (function (t) {
              if (!t) return h;
              if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder)
                throw new TypeError("Encoder has to be a function.");
              var e = t.charset || h.charset;
              if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset)
                throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var r = i.default;
              if (void 0 !== t.format) {
                if (!s.call(i.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                r = t.format;
              }
              var n = i.formatters[r],
                o = h.filter;
              return (
                ("function" == typeof t.filter || c(t.filter)) && (o = t.filter),
                {
                  addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : h.addQueryPrefix,
                  allowDots: void 0 === t.allowDots ? h.allowDots : !!t.allowDots,
                  charset: e,
                  charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : h.charsetSentinel,
                  delimiter: void 0 === t.delimiter ? h.delimiter : t.delimiter,
                  encode: "boolean" == typeof t.encode ? t.encode : h.encode,
                  encoder: "function" == typeof t.encoder ? t.encoder : h.encoder,
                  encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : h.encodeValuesOnly,
                  filter: o,
                  format: r,
                  formatter: n,
                  serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : h.serializeDate,
                  skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : h.skipNulls,
                  sort: "function" == typeof t.sort ? t.sort : null,
                  strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : h.strictNullHandling
                }
              );
            })(e);
          "function" == typeof u.filter ? (o = (0, u.filter)("", o)) : c(u.filter) && (r = u.filter);
          var l,
            f = [];
          if ("object" != typeof o || null === o) return "";
          l = e && e.arrayFormat in a ? e.arrayFormat : e && "indices" in e ? (e.indices ? "indices" : "repeat") : "indices";
          var d = a[l];
          if (e && "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
            throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
          var m = "comma" === d && e && e.commaRoundTrip;
          r || (r = Object.keys(o)), u.sort && r.sort(u.sort);
          for (var g = n(), v = 0; v < r.length; ++v) {
            var w = r[v];
            (u.skipNulls && null === o[w]) ||
              p(
                f,
                y(
                  o[w],
                  w,
                  d,
                  m,
                  u.strictNullHandling,
                  u.skipNulls,
                  u.encode ? u.encoder : null,
                  u.filter,
                  u.sort,
                  u.allowDots,
                  u.serializeDate,
                  u.format,
                  u.formatter,
                  u.encodeValuesOnly,
                  u.charset,
                  g
                )
              );
          }
          var b = f.join(u.delimiter),
            E = !0 === u.addQueryPrefix ? "?" : "";
          return (
            u.charsetSentinel && ("iso-8859-1" === u.charset ? (E += "utf8=%26%2310003%3B&") : (E += "utf8=%E2%9C%93&")),
            b.length > 0 ? E + b : ""
          );
        };
      },
      12769: function (t, e, r) {
        "use strict";
        var n = r(55798),
          o = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          s = (function () {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t;
          })(),
          a = function (t, e) {
            for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (r[n] = t[n]);
            return r;
          };
        t.exports = {
          arrayToObject: a,
          assign: function (t, e) {
            return Object.keys(e).reduce(function (t, r) {
              return (t[r] = e[r]), t;
            }, t);
          },
          combine: function (t, e) {
            return [].concat(t, e);
          },
          compact: function (t) {
            for (var e = [{ obj: { o: t }, prop: "o" }], r = [], n = 0; n < e.length; ++n)
              for (var o = e[n], s = o.obj[o.prop], a = Object.keys(s), c = 0; c < a.length; ++c) {
                var u = a[c],
                  p = s[u];
                "object" == typeof p && null !== p && -1 === r.indexOf(p) && (e.push({ obj: s, prop: u }), r.push(p));
              }
            return (
              (function (t) {
                for (; t.length > 1; ) {
                  var e = t.pop(),
                    r = e.obj[e.prop];
                  if (i(r)) {
                    for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                    e.obj[e.prop] = n;
                  }
                }
              })(e),
              t
            );
          },
          decode: function (t, e, r) {
            var n = t.replace(/\+/g, " ");
            if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(n);
            } catch (t) {
              return n;
            }
          },
          encode: function (t, e, r, o, i) {
            if (0 === t.length) return t;
            var a = t;
            if (
              ("symbol" == typeof t ? (a = Symbol.prototype.toString.call(t)) : "string" != typeof t && (a = String(t)), "iso-8859-1" === r)
            )
              return escape(a).replace(/%u[0-9a-f]{4}/gi, function (t) {
                return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
              });
            for (var c = "", u = 0; u < a.length; ++u) {
              var p = a.charCodeAt(u);
              45 === p ||
              46 === p ||
              95 === p ||
              126 === p ||
              (p >= 48 && p <= 57) ||
              (p >= 65 && p <= 90) ||
              (p >= 97 && p <= 122) ||
              (i === n.RFC1738 && (40 === p || 41 === p))
                ? (c += a.charAt(u))
                : p < 128
                ? (c += s[p])
                : p < 2048
                ? (c += s[192 | (p >> 6)] + s[128 | (63 & p)])
                : p < 55296 || p >= 57344
                ? (c += s[224 | (p >> 12)] + s[128 | ((p >> 6) & 63)] + s[128 | (63 & p)])
                : ((u += 1),
                  (p = 65536 + (((1023 & p) << 10) | (1023 & a.charCodeAt(u)))),
                  (c += s[240 | (p >> 18)] + s[128 | ((p >> 12) & 63)] + s[128 | ((p >> 6) & 63)] + s[128 | (63 & p)]));
            }
            return c;
          },
          isBuffer: function (t) {
            return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
          },
          isRegExp: function (t) {
            return "[object RegExp]" === Object.prototype.toString.call(t);
          },
          maybeMap: function (t, e) {
            if (i(t)) {
              for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
              return r;
            }
            return e(t);
          },
          merge: function t(e, r, n) {
            if (!r) return e;
            if ("object" != typeof r) {
              if (i(e)) e.push(r);
              else {
                if (!e || "object" != typeof e) return [e, r];
                ((n && (n.plainObjects || n.allowPrototypes)) || !o.call(Object.prototype, r)) && (e[r] = !0);
              }
              return e;
            }
            if (!e || "object" != typeof e) return [e].concat(r);
            var s = e;
            return (
              i(e) && !i(r) && (s = a(e, n)),
              i(e) && i(r)
                ? (r.forEach(function (r, i) {
                    if (o.call(e, i)) {
                      var s = e[i];
                      s && "object" == typeof s && r && "object" == typeof r ? (e[i] = t(s, r, n)) : e.push(r);
                    } else e[i] = r;
                  }),
                  e)
                : Object.keys(r).reduce(function (e, i) {
                    var s = r[i];
                    return o.call(e, i) ? (e[i] = t(e[i], s, n)) : (e[i] = s), e;
                  }, s)
            );
          }
        };
      },
      37478: function (t, e, r) {
        "use strict";
        var n = r(40210),
          o = r(21924),
          i = r(70631),
          s = n("%TypeError%"),
          a = n("%WeakMap%", !0),
          c = n("%Map%", !0),
          u = o("WeakMap.prototype.get", !0),
          p = o("WeakMap.prototype.set", !0),
          l = o("WeakMap.prototype.has", !0),
          f = o("Map.prototype.get", !0),
          h = o("Map.prototype.set", !0),
          d = o("Map.prototype.has", !0),
          y = function (t, e) {
            for (var r, n = t; null !== (r = n.next); n = r) if (r.key === e) return (n.next = r.next), (r.next = t.next), (t.next = r), r;
          };
        t.exports = function () {
          var t,
            e,
            r,
            n = {
              assert: function (t) {
                if (!n.has(t)) throw new s("Side channel does not contain " + i(t));
              },
              get: function (n) {
                if (a && n && ("object" == typeof n || "function" == typeof n)) {
                  if (t) return u(t, n);
                } else if (c) {
                  if (e) return f(e, n);
                } else if (r)
                  return (function (t, e) {
                    var r = y(t, e);
                    return r && r.value;
                  })(r, n);
              },
              has: function (n) {
                if (a && n && ("object" == typeof n || "function" == typeof n)) {
                  if (t) return l(t, n);
                } else if (c) {
                  if (e) return d(e, n);
                } else if (r)
                  return (function (t, e) {
                    return !!y(t, e);
                  })(r, n);
                return !1;
              },
              set: function (n, o) {
                a && n && ("object" == typeof n || "function" == typeof n)
                  ? (t || (t = new a()), p(t, n, o))
                  : c
                  ? (e || (e = new c()), h(e, n, o))
                  : (r || (r = { key: {}, next: null }),
                    (function (t, e, r) {
                      var n = y(t, e);
                      n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
                    })(r, n, o));
              }
            };
          return n;
        };
      },
      52511: function (t, e, r) {
        var n;
        (t = r.nmd(t)),
          (function (o) {
            e && e.nodeType, t && t.nodeType;
            var i = "object" == typeof r.g && r.g;
            i.global !== i && i.window !== i && i.self;
            var s,
              a = 2147483647,
              c = 36,
              u = 26,
              p = 38,
              l = 700,
              f = /^xn--/,
              h = /[^\x20-\x7E]/,
              d = /[\x2E\u3002\uFF0E\uFF61]/g,
              y = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
              m = c - 1,
              g = Math.floor,
              v = String.fromCharCode;
            function w(t) {
              throw new RangeError(y[t]);
            }
            function b(t, e) {
              for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
              return n;
            }
            function E(t, e) {
              var r = t.split("@"),
                n = "";
              return r.length > 1 && ((n = r[0] + "@"), (t = r[1])), n + b((t = t.replace(d, ".")).split("."), e).join(".");
            }
            function S(t) {
              for (var e, r, n = [], o = 0, i = t.length; o < i; )
                (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i
                  ? 56320 == (64512 & (r = t.charCodeAt(o++)))
                    ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                    : (n.push(e), o--)
                  : n.push(e);
              return n;
            }
            function A(t) {
              return b(t, function (t) {
                var e = "";
                return t > 65535 && ((e += v((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), e + v(t);
              }).join("");
            }
            function T(t, e) {
              return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
            }
            function I(t, e, r) {
              var n = 0;
              for (t = r ? g(t / l) : t >> 1, t += g(t / e); t > (m * u) >> 1; n += c) t = g(t / m);
              return g(n + ((m + 1) * t) / (t + p));
            }
            function _(t) {
              var e,
                r,
                n,
                o,
                i,
                s,
                p,
                l,
                f,
                h,
                d,
                y = [],
                m = t.length,
                v = 0,
                b = 128,
                E = 72;
              for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n)
                t.charCodeAt(n) >= 128 && w("not-basic"), y.push(t.charCodeAt(n));
              for (o = r > 0 ? r + 1 : 0; o < m; ) {
                for (
                  i = v, s = 1, p = c;
                  o >= m && w("invalid-input"),
                    ((l = (d = t.charCodeAt(o++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : c) >= c ||
                      l > g((a - v) / s)) &&
                      w("overflow"),
                    (v += l * s),
                    !(l < (f = p <= E ? 1 : p >= E + u ? u : p - E));
                  p += c
                )
                  s > g(a / (h = c - f)) && w("overflow"), (s *= h);
                (E = I(v - i, (e = y.length + 1), 0 == i)),
                  g(v / e) > a - b && w("overflow"),
                  (b += g(v / e)),
                  (v %= e),
                  y.splice(v++, 0, b);
              }
              return A(y);
            }
            function k(t) {
              var e,
                r,
                n,
                o,
                i,
                s,
                p,
                l,
                f,
                h,
                d,
                y,
                m,
                b,
                E,
                A = [];
              for (y = (t = S(t)).length, e = 128, r = 0, i = 72, s = 0; s < y; ++s) (d = t[s]) < 128 && A.push(v(d));
              for (n = o = A.length, o && A.push("-"); n < y; ) {
                for (p = a, s = 0; s < y; ++s) (d = t[s]) >= e && d < p && (p = d);
                for (p - e > g((a - r) / (m = n + 1)) && w("overflow"), r += (p - e) * m, e = p, s = 0; s < y; ++s)
                  if (((d = t[s]) < e && ++r > a && w("overflow"), d == e)) {
                    for (l = r, f = c; !(l < (h = f <= i ? 1 : f >= i + u ? u : f - i)); f += c)
                      (E = l - h), (b = c - h), A.push(v(T(h + (E % b), 0))), (l = g(E / b));
                    A.push(v(T(l, 0))), (i = I(r, m, n == o)), (r = 0), ++n;
                  }
                ++r, ++e;
              }
              return A.join("");
            }
            (s = {
              version: "1.4.1",
              ucs2: { decode: S, encode: A },
              decode: _,
              encode: k,
              toASCII: function (t) {
                return E(t, function (t) {
                  return h.test(t) ? "xn--" + k(t) : t;
                });
              },
              toUnicode: function (t) {
                return E(t, function (t) {
                  return f.test(t) ? _(t.slice(4).toLowerCase()) : t;
                });
              }
            }),
              void 0 ===
                (n = function () {
                  return s;
                }.call(e, r, e, t)) || (t.exports = n);
          })();
      },
      8575: function (t, e, r) {
        "use strict";
        var n = r(52511);
        function o() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        var i = /^([a-z0-9.+-]+:)/i,
          s = /:[0-9]*$/,
          a = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
          c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          u = ["'"].concat(c),
          p = ["%", "/", "?", ";", "#"].concat(u),
          l = ["/", "?", "#"],
          f = /^[+a-z0-9A-Z_-]{0,63}$/,
          h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          d = { javascript: !0, "javascript:": !0 },
          y = { javascript: !0, "javascript:": !0 },
          m = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          g = r(80129);
        function v(t, e, r) {
          if (t && "object" == typeof t && t instanceof o) return t;
          var n = new o();
          return n.parse(t, e, r), n;
        }
        (o.prototype.parse = function (t, e, r) {
          if ("string" != typeof t) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
          var o = t.indexOf("?"),
            s = -1 !== o && o < t.indexOf("#") ? "?" : "#",
            c = t.split(s);
          c[0] = c[0].replace(/\\/g, "/");
          var v = (t = c.join(s));
          if (((v = v.trim()), !r && 1 === t.split("#").length)) {
            var w = a.exec(v);
            if (w)
              return (
                (this.path = v),
                (this.href = v),
                (this.pathname = w[1]),
                w[2]
                  ? ((this.search = w[2]), (this.query = e ? g.parse(this.search.substr(1)) : this.search.substr(1)))
                  : e && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var b = i.exec(v);
          if (b) {
            var E = (b = b[0]).toLowerCase();
            (this.protocol = E), (v = v.substr(b.length));
          }
          if (r || b || v.match(/^\/\/[^@/]+@[^@/]+/)) {
            var S = "//" === v.substr(0, 2);
            !S || (b && y[b]) || ((v = v.substr(2)), (this.slashes = !0));
          }
          if (!y[b] && (S || (b && !m[b]))) {
            for (var A, T, I = -1, _ = 0; _ < l.length; _++) -1 !== (k = v.indexOf(l[_])) && (-1 === I || k < I) && (I = k);
            for (
              -1 !== (T = -1 === I ? v.lastIndexOf("@") : v.lastIndexOf("@", I)) &&
                ((A = v.slice(0, T)), (v = v.slice(T + 1)), (this.auth = decodeURIComponent(A))),
                I = -1,
                _ = 0;
              _ < p.length;
              _++
            ) {
              var k;
              -1 !== (k = v.indexOf(p[_])) && (-1 === I || k < I) && (I = k);
            }
            -1 === I && (I = v.length),
              (this.host = v.slice(0, I)),
              (v = v.slice(I)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var B = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!B)
              for (var O = this.hostname.split(/\./), R = ((_ = 0), O.length); _ < R; _++) {
                var x = O[_];
                if (x && !x.match(f)) {
                  for (var j = "", P = 0, C = x.length; P < C; P++) x.charCodeAt(P) > 127 ? (j += "x") : (j += x[P]);
                  if (!j.match(f)) {
                    var L = O.slice(0, _),
                      M = O.slice(_ + 1),
                      N = x.match(h);
                    N && (L.push(N[1]), M.unshift(N[2])), M.length && (v = "/" + M.join(".") + v), (this.hostname = L.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
              B || (this.hostname = n.toASCII(this.hostname));
            var D = this.port ? ":" + this.port : "",
              U = this.hostname || "";
            (this.host = U + D),
              (this.href += this.host),
              B && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== v[0] && (v = "/" + v));
          }
          if (!d[E])
            for (_ = 0, R = u.length; _ < R; _++) {
              var F = u[_];
              if (-1 !== v.indexOf(F)) {
                var H = encodeURIComponent(F);
                H === F && (H = escape(F)), (v = v.split(F).join(H));
              }
            }
          var q = v.indexOf("#");
          -1 !== q && ((this.hash = v.substr(q)), (v = v.slice(0, q)));
          var z = v.indexOf("?");
          if (
            (-1 !== z
              ? ((this.search = v.substr(z)), (this.query = v.substr(z + 1)), e && (this.query = g.parse(this.query)), (v = v.slice(0, z)))
              : e && ((this.search = ""), (this.query = {})),
            v && (this.pathname = v),
            m[E] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            D = this.pathname || "";
            var W = this.search || "";
            this.path = D + W;
          }
          return (this.href = this.format()), this;
        }),
          (o.prototype.format = function () {
            var t = this.auth || "";
            t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
            var e = this.protocol || "",
              r = this.pathname || "",
              n = this.hash || "",
              o = !1,
              i = "";
            this.host
              ? (o = t + this.host)
              : this.hostname &&
                ((o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
                this.port && (o += ":" + this.port)),
              this.query && "object" == typeof this.query && Object.keys(this.query).length && (i = g.stringify(this.query));
            var s = this.search || (i && "?" + i) || "";
            return (
              e && ":" !== e.substr(-1) && (e += ":"),
              this.slashes || ((!e || m[e]) && !1 !== o)
                ? ((o = "//" + (o || "")), r && "/" !== r.charAt(0) && (r = "/" + r))
                : o || (o = ""),
              n && "#" !== n.charAt(0) && (n = "#" + n),
              s && "?" !== s.charAt(0) && (s = "?" + s),
              e +
                o +
                (r = r.replace(/[?#]/g, function (t) {
                  return encodeURIComponent(t);
                })) +
                (s = s.replace("#", "%23")) +
                n
            );
          }),
          (o.prototype.resolve = function (t) {
            return this.resolveObject(v(t, !1, !0)).format();
          }),
          (o.prototype.resolveObject = function (t) {
            if ("string" == typeof t) {
              var e = new o();
              e.parse(t, !1, !0), (t = e);
            }
            for (var r = new o(), n = Object.keys(this), i = 0; i < n.length; i++) {
              var s = n[i];
              r[s] = this[s];
            }
            if (((r.hash = t.hash), "" === t.href)) return (r.href = r.format()), r;
            if (t.slashes && !t.protocol) {
              for (var a = Object.keys(t), c = 0; c < a.length; c++) {
                var u = a[c];
                "protocol" !== u && (r[u] = t[u]);
              }
              return m[r.protocol] && r.hostname && !r.pathname && ((r.pathname = "/"), (r.path = r.pathname)), (r.href = r.format()), r;
            }
            if (t.protocol && t.protocol !== r.protocol) {
              if (!m[t.protocol]) {
                for (var p = Object.keys(t), l = 0; l < p.length; l++) {
                  var f = p[l];
                  r[f] = t[f];
                }
                return (r.href = r.format()), r;
              }
              if (((r.protocol = t.protocol), t.host || y[t.protocol])) r.pathname = t.pathname;
              else {
                for (var h = (t.pathname || "").split("/"); h.length && !(t.host = h.shift()); );
                t.host || (t.host = ""),
                  t.hostname || (t.hostname = ""),
                  "" !== h[0] && h.unshift(""),
                  h.length < 2 && h.unshift(""),
                  (r.pathname = h.join("/"));
              }
              if (
                ((r.search = t.search),
                (r.query = t.query),
                (r.host = t.host || ""),
                (r.auth = t.auth),
                (r.hostname = t.hostname || t.host),
                (r.port = t.port),
                r.pathname || r.search)
              ) {
                var d = r.pathname || "",
                  g = r.search || "";
                r.path = d + g;
              }
              return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
            }
            var v = r.pathname && "/" === r.pathname.charAt(0),
              w = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
              b = w || v || (r.host && t.pathname),
              E = b,
              S = (r.pathname && r.pathname.split("/")) || [],
              A = ((h = (t.pathname && t.pathname.split("/")) || []), r.protocol && !m[r.protocol]);
            if (
              (A &&
                ((r.hostname = ""),
                (r.port = null),
                r.host && ("" === S[0] ? (S[0] = r.host) : S.unshift(r.host)),
                (r.host = ""),
                t.protocol &&
                  ((t.hostname = null), (t.port = null), t.host && ("" === h[0] ? (h[0] = t.host) : h.unshift(t.host)), (t.host = null)),
                (b = b && ("" === h[0] || "" === S[0]))),
              w)
            )
              (r.host = t.host || "" === t.host ? t.host : r.host),
                (r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname),
                (r.search = t.search),
                (r.query = t.query),
                (S = h);
            else if (h.length) S || (S = []), S.pop(), (S = S.concat(h)), (r.search = t.search), (r.query = t.query);
            else if (null != t.search)
              return (
                A &&
                  ((r.host = S.shift()),
                  (r.hostname = r.host),
                  (B = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                    ((r.auth = B.shift()), (r.hostname = B.shift()), (r.host = r.hostname))),
                (r.search = t.search),
                (r.query = t.query),
                (null === r.pathname && null === r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
                (r.href = r.format()),
                r
              );
            if (!S.length) return (r.pathname = null), r.search ? (r.path = "/" + r.search) : (r.path = null), (r.href = r.format()), r;
            for (
              var T = S.slice(-1)[0],
                I = ((r.host || t.host || S.length > 1) && ("." === T || ".." === T)) || "" === T,
                _ = 0,
                k = S.length;
              k >= 0;
              k--
            )
              "." === (T = S[k]) ? S.splice(k, 1) : ".." === T ? (S.splice(k, 1), _++) : _ && (S.splice(k, 1), _--);
            if (!b && !E) for (; _--; _) S.unshift("..");
            !b || "" === S[0] || (S[0] && "/" === S[0].charAt(0)) || S.unshift(""), I && "/" !== S.join("/").substr(-1) && S.push("");
            var B,
              O = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
            return (
              A &&
                ((r.hostname = O ? "" : S.length ? S.shift() : ""),
                (r.host = r.hostname),
                (B = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                  ((r.auth = B.shift()), (r.hostname = B.shift()), (r.host = r.hostname))),
              (b = b || (r.host && S.length)) && !O && S.unshift(""),
              S.length > 0 ? (r.pathname = S.join("/")) : ((r.pathname = null), (r.path = null)),
              (null === r.pathname && null === r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.auth = t.auth || r.auth),
              (r.slashes = r.slashes || t.slashes),
              (r.href = r.format()),
              r
            );
          }),
          (o.prototype.parseHost = function () {
            var t = this.host,
              e = s.exec(t);
            e && (":" !== (e = e[0]) && (this.port = e.substr(1)), (t = t.substr(0, t.length - e.length))), t && (this.hostname = t);
          }),
          (e.parse = v),
          (e.resolve = function (t, e) {
            return v(t, !1, !0).resolve(e);
          }),
          (e.resolveObject = function (t, e) {
            return t ? v(t, !1, !0).resolveObject(e) : e;
          }),
          (e.format = function (t) {
            return "string" == typeof t && (t = v(t)), t instanceof o ? t.format() : o.prototype.format.call(t);
          }),
          (e.Url = o);
      },
      72693: function () {},
      49069: function () {},
      24654: function () {}
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var r = (__webpack_module_cache__[t] = { id: t, loaded: !1, exports: {} });
    return __webpack_modules__[t].call(r.exports, r, r.exports, __webpack_require__), (r.loaded = !0), r.exports;
  }
  (__webpack_require__.amdO = {}),
    (__webpack_require__.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return __webpack_require__.d(e, { a: e }), e;
    }),
    (__webpack_require__.d = function (t, e) {
      for (var r in e)
        __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (__webpack_require__.nmd = function (t) {
      return (t.paths = []), t.children || (t.children = []), t;
    });
  var __webpack_exports__ = {};
  !(function () {
    "use strict";
    var t = __webpack_require__(88495),
      e = __webpack_require__.n(t),
      r = { isFirefox: !1, isSafari: !1, isEdge: "undefined" != typeof EDGE && EDGE, isChrome: !0 };
    function n(t) {
      var e = "";
      return (
        t.forEach(function (t) {
          e += "".concat(t.date, " ").concat(t.lvl, ": ").concat(t.val, " \n");
        }),
        e
      );
    }
    var o = (function () {
        function t() {
          (this.loggers = []), (this.level = 2), (this.logEnabled = !1);
        }
        return (
          (t.prototype.addLogger = function (t) {
            if (!t.log || "function" != typeof t.log) throw new Error("Logger must have log() method");
            this.loggers.push(t);
          }),
          (t.prototype.getLogs = function () {
            for (var t = 0; t < this.loggers.length; t++) {
              var e = this.loggers[t];
              if (e.getLogs && "function" == typeof e.getLogs) return e.getLogs();
            }
            return "";
          }),
          (t.prototype.getSystemInfo = function () {
            for (var t = 0; t < this.loggers.length; t++) {
              var e = this.loggers[t];
              if (e.getSystemInfo && "function" == typeof e.getSystemInfo) return e.getSystemInfo();
            }
            return "";
          }),
          (t.prototype.subscribeToUnhandledErrors = function (t) {
            var e = this;
            self.onerror = function (r, n, o) {
              e.error("Unhandled error at ".concat(n, ":").concat(o), r), "function" == typeof t && t(r);
            };
          }),
          (t.prototype.logSystemInfo = function () {
            var t = this;
            this.getSystemInfo().then(function (e) {
              return t.log(e);
            });
          }),
          (t.prototype.getFormattedLogsWithInfo = function (t) {
            var e = this;
            return (
              void 0 === t && (t = []),
              this.getSystemInfo().then(function (r) {
                return "".concat(r, "\n").concat(t.join("\n"), "\n\n") + n(e.getLogs());
              })
            );
          }),
          (t.prototype.getFormattedLogs = function () {
            var t = this;
            return this.getSystemInfo().then(function (e) {
              return "".concat(e, " \n\n") + n(t.getLogs());
            });
          }),
          (t.prototype.clearLogs = function () {
            this.loggers.forEach(function (t) {
              t.clearLogs && "function" == typeof t.clearLogs && t.clearLogs();
            });
          }),
          (t.prototype.setLogLevel = function (t) {
            "number" == typeof t && t >= 0 ? (this.level = t) : this.warn("Unable to set log level, expected positive number, was", t);
          }),
          (t.prototype.setLogPermission = function (t) {
            this.logEnabled = t;
          }),
          (t.prototype._isLogAvailable = function () {
            return !r.isFirefox || this.logEnabled;
          }),
          (t.prototype.invokeLoggers = function (t, e) {
            this._isLogAvailable() &&
              this.loggers.forEach(function (r) {
                return r.log(t, e);
              });
          }),
          (t.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.invokeLoggers(0, t);
          }),
          (t.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.level >= 1 && this.invokeLoggers(1, t);
          }),
          (t.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.level >= 2 && this.invokeLoggers(2, t);
          }),
          (t.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.level >= 3 && this.invokeLoggers(3, t);
          }),
          t
        );
      })(),
      i = new o();
    (function () {
      function t() {}
      (t.prototype.log = function (t, e) {
        var r, n, o, i;
        if (self.console.debug.apply)
          switch (t) {
            case 3:
              (r = self.console).debug.apply(r, e);
              break;
            case 1:
              (n = self.console).warn.apply(n, e);
              break;
            case 0:
              (o = self.console).error.apply(o, e);
              break;
            default:
              (i = self.console).log.apply(i, e);
          }
        else this._logWithoutApply(t, e);
      }),
        (t.prototype._logWithoutApply = function (t, e) {
          e.forEach(function (e) {
            switch (t) {
              case 3:
                self.console.debug(e);
                break;
              case 1:
                self.console.warn(e);
                break;
              case 0:
                self.console.error(e);
                break;
              default:
                self.console.log(e);
            }
          });
        });
    })(),
      __webpack_require__(18472);
    var s,
      a = function () {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }),
          a.apply(this, arguments)
        );
      },
      c = function (t, e, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      u = function (t, e) {
        var r,
          n,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
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
        function a(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && ((i = 0), a[0] && (s = 0)), s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, a[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a;
                      break;
                    case 4:
                      return s.label++, { value: a[1], done: !1 };
                    case 5:
                      s.label++, (n = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                        s = 0;
                        continue;
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        s.label = a[1];
                        break;
                      }
                      if (6 === a[0] && s.label < o[1]) {
                        (s.label = o[1]), (o = a);
                        break;
                      }
                      if (o && s.label < o[2]) {
                        (s.label = o[2]), s.ops.push(a);
                        break;
                      }
                      o[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  a = e.call(t, s);
                } catch (t) {
                  (a = [6, t]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      };
    !(function (t) {
      (t.REQUEST = "EN_request"), (t.RESPONSE = "EN_response"), (t.ERROR = "__error__");
    })(s || (s = {})),
      (function () {
        function t(t, e) {
          (this.channelName = t || ""),
            (this.requestHandlers = e),
            (this.uniqueMessageID = 0),
            (this.pendingMessages = new Map()),
            (this.handleMessage = this.handleMessage.bind(this));
        }
        (t.prototype.start = function () {
          window.addEventListener("message", this.handleMessage);
        }),
          (t.prototype.stop = function () {
            window.removeEventListener("message", this.handleMessage);
          }),
          (t.prototype.sendMessageToFrame = function (t, e, r) {
            return this.sendMessage(t.contentWindow, e, r);
          }),
          (t.prototype.sendMessageToParent = function (t, e) {
            return this.sendMessage(window.parent, t, e);
          }),
          (t.prototype.sendMessage = function (t, e, r) {
            var n = this;
            return new Promise(function (o, i) {
              var a = "".concat(n.channelName, "-").concat(++n.uniqueMessageID),
                c = { type: s.REQUEST, messageID: a, name: e, data: r };
              n.pendingMessages.set(a, { name: e, resolve: o, reject: i }), t.postMessage(c, "*");
            });
          }),
          (t.prototype.handleMessage = function (t) {
            return c(this, void 0, void 0, function () {
              return u(this, function (e) {
                if (!t.data) return [2];
                switch (t.data.type) {
                  case s.REQUEST:
                    return [2, this.handleRequest(t.data, t.source)];
                  case s.RESPONSE:
                    return [2, this.handleResponse(t.data)];
                  default:
                    return [2];
                }
                return [2];
              });
            });
          }),
          (t.prototype.handleRequest = function (t, e) {
            return c(this, void 0, void 0, function () {
              var r, n, o;
              return u(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (r = t.name), (n = this.requestHandlers[r]) ? [4, this.executeRequest(t, n)] : [2];
                  case 1:
                    return (o = i.sent()), e.postMessage(o, "*"), [2];
                }
              });
            });
          }),
          (t.prototype.executeRequest = function (t, e) {
            return c(this, void 0, void 0, function () {
              var r, n, o, i, c;
              return u(this, function (u) {
                switch (u.label) {
                  case 0:
                    (r = t.messageID), (u.label = 1);
                  case 1:
                    return u.trys.push([1, 3, , 4]), [4, e(t.data || {})];
                  case 2:
                    return (n = u.sent()), [2, { type: s.RESPONSE, messageID: r, name: name, data: n }];
                  case 3:
                    return (
                      (o = u.sent()),
                      console.error(o),
                      (i = o),
                      [2, ((c = {}), (c[s.ERROR] = a(a({}, i), { stack: i.stack, message: i.message })), c)]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.handleResponse = function (t) {
            return c(this, void 0, void 0, function () {
              var e, r, n, o;
              return u(this, function (i) {
                return (
                  (e = t.messageID),
                  (r = this.pendingMessages.get(e))
                    ? ((n = r.resolve),
                      (o = r.reject),
                      t.data && t.data[s.ERROR] && o(t.data[s.ERROR]),
                      n(t.data),
                      this.pendingMessages.delete(e),
                      [2])
                    : [2]
                );
              });
            });
          });
      })();
    var p = [
      ".com",
      ".ad",
      ".ae",
      ".com.af",
      ".com.ag",
      ".com.ai",
      ".am",
      ".co.ao",
      ".com.ar",
      ".as",
      ".at",
      ".com.au",
      ".az",
      ".ba",
      ".com.bd",
      ".be",
      ".bf",
      ".bg",
      ".com.bh",
      ".bi",
      ".bj",
      ".com.bn",
      ".com.bo",
      ".com.br",
      ".bs",
      ".co.bw",
      ".by",
      ".com.bz",
      ".ca",
      ".cd",
      ".cf",
      ".cg",
      ".ch",
      ".ci",
      ".co.ck",
      ".cl",
      ".cm",
      ".cn",
      ".com.co",
      ".co.cr",
      ".com.cu",
      ".cv",
      ".com.cy",
      ".cz",
      ".de",
      ".dj",
      ".dk",
      ".dm",
      ".com.do",
      ".dz",
      ".com.ec",
      ".ee",
      ".com.eg",
      ".es",
      ".com.et",
      ".fi",
      ".com.fj",
      ".fm",
      ".fr",
      ".ga",
      ".ge",
      ".gg",
      ".com.gh",
      ".com.gi",
      ".gl",
      ".gm",
      ".gp",
      ".gr",
      ".com.gt",
      ".gy",
      ".com.hk",
      ".hn",
      ".hr",
      ".ht",
      ".hu",
      ".co.id",
      ".ie",
      ".co.il",
      ".im",
      ".co.in",
      ".iq",
      ".is",
      ".it",
      ".je",
      ".com.jm",
      ".jo",
      ".co.jp",
      ".co.ke",
      ".com.kh",
      ".ki",
      ".kg",
      ".co.kr",
      ".com.kw",
      ".kz",
      ".la",
      ".com.lb",
      ".li",
      ".lk",
      ".co.ls",
      ".lt",
      ".lu",
      ".lv",
      ".com.ly",
      ".co.ma",
      ".md",
      ".me",
      ".mg",
      ".mk",
      ".ml",
      ".mn",
      ".ms",
      ".com.mt",
      ".mu",
      ".mv",
      ".mw",
      ".com.mx",
      ".com.my",
      ".co.mz",
      ".com.na",
      ".com.nf",
      ".com.ng",
      ".com.ni",
      ".ne",
      ".nl",
      ".no",
      ".com.np",
      ".nr",
      ".nu",
      ".co.nz",
      ".com.om",
      ".com.pa",
      ".com.pe",
      ".com.ph",
      ".com.pk",
      ".pl",
      ".pn",
      ".com.pr",
      ".ps",
      ".pt",
      ".com.py",
      ".com.qa",
      ".ro",
      ".ru",
      ".rw",
      ".com.sa",
      ".com.sb",
      ".sc",
      ".se",
      ".com.sg",
      ".sh",
      ".si",
      ".sk",
      ".com.sl",
      ".sn",
      ".so",
      ".sm",
      ".st",
      ".com.sv",
      ".td",
      ".tg",
      ".co.th",
      ".com.tj",
      ".tk",
      ".tl",
      ".tm",
      ".tn",
      ".to",
      ".com.tr",
      ".tt",
      ".com.tw",
      ".co.tz",
      ".com.ua",
      ".co.ug",
      ".co.uk",
      ".com.uy",
      ".co.uz",
      ".com.vc",
      ".co.ve",
      ".vg",
      ".co.vi",
      ".com.vn",
      ".vu",
      ".ws",
      ".rs",
      ".co.za",
      ".co.zm",
      ".co.zw",
      ".cat"
    ];
    function l(t) {
      return function (e) {
        var r = t.exec(e);
        return r ? r[1] : e;
      };
    }
    var f = {
        Baidu: {
          regex: /^https?:\/\/([^./]+\.)?baidu\.(com|cn)/i,
          content: "#container",
          searchBox: "input[name=wd]",
          allowedElements: "h3.t a[data-click], .f font[size='-1']",
          bannedSubelements: "span.g, .m, .c",
          titleTrim: l(/(.+)_\u767E\u5EA6\u641C\u7D22/)
        },
        Bing: {
          regex: /^https?:\/\/([^./]+\.)?bing\.com\/search/i,
          content: "#results_container, #b_results",
          searchBox: "input[name=q]",
          allowedElements: "div.sb_tlst a, div.sa_mc p, .b_algo h2 a, .b_algo .b_caption p"
        },
        Daum: {
          regex: /^https?:\/\/search\.daum\.net\/search/i,
          content: "#mArticle .inner_article",
          searchBox: "input[name=q]",
          allowedElements: ".coll_cont ul .wrap_tit a, .coll_cont ul .f_eb.desc",
          titleTrim: l(/(.+)\s\u2013/)
        },
        Google: {
          regex: (function () {
            for (var t = [], e = 0; e < p.length; e++) t[e] = p[e].replace(/\./g, "\\.");
            return new RegExp("^https?://www\\.google(".concat(t.join("|"), ")"), "i");
          })(),
          content: "#rso",
          searchBox: "input[name=q][type=hidden]",
          searchBoxAlt: "input[name=q]",
          allowedElements: "a.l, span.st",
          bannedSubelements: "span.f"
        },
        Naver: {
          regex: /^https?:\/\/search\.naver\.com\/search\.naver/i,
          content: "#content",
          searchBox: "input[name=query]",
          allowedElements: ".type01 dt a, .type01 dd:not(.txt_inline):not(.txt_block):not(.review):not([style*='display:none'])",
          titleTrim: l(/(.+)\s\u003A/)
        },
        Yahoo: {
          regex: /^https?:\/\/([^./]+\.)*yahoo\.com\/s(earch|\?)/i,
          content: "#web",
          searchBox: "input[name=p]",
          allowedElements: ".title, .aAbs",
          bannedSubelements: ".fc-2nd, .TumblrV2, .Img, .Video, .sys_news_auto"
        },
        YahooJP: {
          regex: /^https?:\/\/([^./]+\.)*yahoo\.co\.jp\/s(earch|\?)/i,
          content: "#WS2m",
          searchBox: "input[name=p]",
          allowedElements: "#WS2m .hd h3 a, #WS2m .bd p",
          bannedSubelements: "#WS2m .bd p.dlink",
          titleTrim: l(/\u300C(.+)\u300D/)
        },
        Yandex: {
          regex: /^https?:\/\/([^./]+\.)?yandex\.(com|ru)\/search/,
          content: ".serp-list",
          searchBox: "input[name=text]",
          allowedElements: ".serp-item__title-link, .serp-item__text",
          bannedSubelements: ".serp-item__date",
          titleTrim: l(/(.+)\s+\u2014/)
        }
      },
      h = {
        searchEngines: f,
        specialCandidates: {
          "nytimes.com": ["#story"],
          "youtube.com": ["#main"],
          "github.com": ['div[role="main"]'],
          "twitter.com": [".permalink-tweet-container"],
          "mba.mk.co.kr": ["#content > tbody > tr > td:nth-child(1)"],
          "evernote.com/why-evernote": ["body"],
          "evernote.com": ["#container"],
          "stage.evernote.com": ["#container"],
          "instagram.com": ["body > span > section > main > section > div > div > div"],
          "renovatio.zaytuna.edu": ["body"],
          "en.wikipedia.org": [".mw-mmv-wrapper", ".mw-content-container", "#content"],
          "mail.google.com": ['div[role="main"]'],
          "criterion.com": ["article.editorial.ed_base"],
          "yummly.com": ["div.Page"]
        },
        specialCases: {
          "tagesspiegel.de": ["div.ts-article-area"],
          "penny-arcade.com": ["#comic img"],
          "io9.gizmodo.com": ["div.main__content"],
          "aspicyperspective.com": ["div.entry-content"],
          "reddit.com": ["#siteTable"],
          "thewirecutter.com": ["div#content"],
          "katespade.com": ["div#pdpMain"],
          "threadless.com": ["section.product_section"],
          "yelp.com": ["div#bizBox"],
          "flickr.com": ["div#photo"],
          "instagr.am": ["div.stage > div.stage-inner"],
          "stackoverflow.com": ["#mainbar"],
          "makeprojects.com": ["div#guideMain"],
          "cookpad.com": ["div#main #recipe"],
          "imgur.com": ["div.image"],
          "smittenkitchen.com": ["div.entry"],
          "allrecipes.com": ["div#content-wrapper"],
          "qwantz.com": ["img.comic"],
          "questionablecontent.net": ["img#strip"],
          "cad-comic.com": ["div#content"],
          "twitter.com": [".permalink", "div.content-main", 'div[role="main"]'],
          "blog.evernote.com": [".post"],
          "outlook.office.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "outlook.live.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "outlook-sdf.live.com": ["[role='region']:nth-of-type(3)", "#Item\\.MessagePartBody"],
          "inbox.google.com": [
            "[aria-expanded=true][aria-multiselectable=false],[aria-expanded=true][aria-multiselectable=true] .scroll-list-item-open"
          ],
          "nytimes.com": ["#story"],
          "linkedin.com": ['div[role="main"]'],
          "github.com": ['div[role="main"]'],
          "feastmagazine.com": [".main-content"],
          "instagram.com": ["body > span > section > main > div > div > article > div > div"],
          "en.wikipedia.org": [".mw-mmv-wrapper", ".mw-content-container", "#content"],
          "zmescience.com": ["#main"],
          "espn.com": [".main-content > article > div"],
          "yummly.com": ["div.Page"]
        },
        topSites: { youtube: "YouTube", linked_in: "LinkedIn", amazon: "Amazon" },
        googleCountryDomains: p
      },
      d = /^http[s]?:\/\/www[.]youtube[.]com\/watch[?][\S]*v=([a-z0-9_-]{5,20})/i,
      y = /[?&]v=([^&#]*)/,
      m = /^(http[s]?|ftp):\/\/.*\.pdf$/i,
      g = /^ftp:\/\/.*/i,
      v = /(http[s]?:)?\/\/.+/;
    function w(t) {
      void 0 === t && (t = window);
      var e = t.location.host;
      return /^www\./.test(e) && (e = e.substr(4)), e;
    }
    function b(t) {
      return void 0 === t && (t = window), t.location.pathname;
    }
    function E(t) {
      var e;
      void 0 === t && (t = window);
      var r = (function (t) {
        for (var e = -1, r = 0, n = 0; n < t.length; n++) {
          var o = t[n].width * t[n].height;
          o > r && ((e = n), (r = o));
        }
        return e >= 0 ? t[e] : null;
      })(t.document.querySelectorAll("img"));
      return null !== (e = null == r ? void 0 : r.getAttribute("src")) && void 0 !== e ? e : null;
    }
    function S() {
      for (var t = Object.keys(h.searchEngines), e = 0; e < t.length; e++)
        if (h.searchEngines[t[e]].regex.test(document.location.href)) return t[e];
      return null;
    }
    function A() {
      var t = /^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(
        document.location.href
      );
      return t ? t[1] : null;
    }
    function T() {
      var t = document.location.href;
      return /^https:\/\/mail\.google\.com\/mail\//.test(t);
    }
    function I() {
      var t, e;
      if (document.querySelector("embed[type='application/pdf']"))
        return "about:blank" !==
          (null === (t = document.querySelector("embed[type='application/pdf']")) || void 0 === t ? void 0 : t.getAttribute("src"))
          ? null === (e = document.querySelector("embed[type='application/pdf']")) || void 0 === e
            ? void 0
            : e.getAttribute("src")
          : document.location.href;
      if ("pdf.js" === document.domain) return document.location.href;
      if (/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href)) {
        for (var r = 0; r < document.scripts.length; r++)
          if (/gviewApp\.setFileData/.test(document.scripts[r].innerText)) {
            if (/mimeType.+application\/pdf/.test(document.scripts[r].innerText)) {
              var n = /^https?:\/\/docs\.google\.com\/viewer\?url=(.+?)(?:$|&)/.exec(document.location.href);
              if (n) return decodeURIComponent(n[1]);
            }
            break;
          }
      } else if (A()) return A();
      return null;
    }
    function _() {
      var t = document.title,
        e = S(),
        n = (function () {
          var t = document.querySelector("ytd-watch-flexy:not([hidden]) h1.title.ytd-video-primary-info-renderer");
          if (!t) return null;
          var e = t.textContent;
          return "".concat(null == e ? void 0 : e.trim(), " - YouTube");
        })();
      if ((n && (t = n), e))
        if (h.searchEngines[e].titleTrim) t = h.searchEngines[e].titleTrim(t);
        else {
          var o = t.split(" - ");
          t = t.replace(" - ".concat(o[o.length - 1]), "");
        }
      return I() && (t = r.isFirefox ? "PDF - ".concat(document.title) : "PDF - ".concat(document.domain)), t.trim();
    }
    function k(t) {
      var e,
        r,
        n = null != t ? t : window.location.href,
        o = function () {
          var t = y.exec(n);
          return t && t[1] ? t[1] : null;
        };
      if (d.test(n) && o()) return "https://img.youtube.com/vi/".concat(o(), "/hqdefault.jpg");
      var i = document.querySelector("[itemtype$='VideoObject'] [itemprop='thumbnailUrl'][href]");
      return i && null !== (r = null === (e = i.getAttribute("href")) || void 0 === e ? void 0 : e.trim()) && void 0 !== r ? r : null;
    }
    var B,
      O = {
        isFtpPage: function () {
          return g.test(document.location.href);
        },
        isPdfPage: function (t) {
          return void 0 === t && (t = document.location.href), !(r.isEdge || !document || !document.body) && m.test(t);
        },
        getThumbnail: function () {
          var t,
            e,
            r,
            n,
            o,
            i = "",
            s = k();
          if (s) i = s;
          else {
            var a = document.querySelector("meta[property='twitter:image'][content]");
            a
              ? (i = null !== (t = a.getAttribute("content")) && void 0 !== t ? t : "")
              : (a = document.querySelector("[itemtype$='ImageObject'] [itemprop='url'][src]"))
              ? (i = null !== (e = a.getAttribute("content")) && void 0 !== e ? e : "")
              : (a = document.querySelector("meta[property='og:image'][content]")) &&
                v.test(null !== (r = a.getAttribute("content")) && void 0 !== r ? r : "") &&
                (i = null !== (n = a.getAttribute("content")) && void 0 !== n ? n : "");
          }
          return (
            i.startsWith("://") && (i = "".concat(document.location.protocol, "//").concat(i.replace("://", ""))),
            i || (i = null !== (o = E(window)) && void 0 !== o ? o : ""),
            i
          );
        },
        getVideoThumbnail: k,
        getText: function t(e, r, n, o, i, s) {
          var a = r;
          if (e.nodeType === Node.TEXT_NODE) {
            var c;
            return (
              (c = s
                ? (function (t) {
                    var e = new RegExp(
                      ""
                        .concat(["-", "_", "–", "—", "·"].join("|"), "|")
                        .concat(
                          ["\\(", "\\)", "\\[", "\\]", "\\{", "\\}", "《", "》", "（", "）", "【", "】", "「", "」", "»"].join("|"),
                          "|"
                        )
                        .concat(["\\.", "!", ":", ";", '"', "'", ",", "\\?", "。", "、", "！", "，", "：", "…", "“", "”"].join("|"), "|")
                        .concat(
                          ["@", "#", "\\$", "%", "\\^", "&", "\\*", "\\+", "=", "`", "~", "/", "\\\\", "\\|", ">", "<", "●"].join("|")
                        ),
                      "g"
                    );
                    return t.replace(e, " ");
                  })(e.textContent.trim()).replace(/\s+/g, " ")
                : e.textContent.trim().replace(/\s+/g, " ")),
              " " === c || "" === c ? a : "".concat(a, " ").concat(c)
            );
          }
          if (e.nodeType === Node.ELEMENT_NODE && -1 === ["script", "noscript", "style"].indexOf(e.nodeName.toLowerCase())) {
            if (/^evernote.+Tools$/.test(e.id)) return a;
            for (var u = 0; u < e.childNodes.length; u++) if ((a = t(e.childNodes[u], a, n, 0, 0, s)).length > n) return a;
          }
          return a.trim();
        },
        getPageAttribures: function () {
          return { title: _(), url: document.location.href };
        },
        getTitle: _,
        getPdfUrl: I,
        isGmailThread: function () {
          if (T()) {
            var t = document.querySelectorAll("span > div > span > [src='images/cleardot.gif']"),
              e = document.querySelectorAll("div.bodycontainer > div.maincontent");
            return !(!t.length && !e.length);
          }
          return !1;
        },
        isGmail: T,
        isImageUrl: function (t) {
          return /\.(gif|jpe?g|tiff|png)$/i.test(t);
        },
        isSearchEngine: S,
        getFavIconUrl: function (t) {
          void 0 === t && (t = document);
          var e = t.querySelector("link[rel~='icon']");
          return e ? e.getAttribute("href") : "".concat(document.location.origin, "/favicon.ico");
        },
        getThumbNail: function (t) {
          return void 0 === t && (t = window), E(t);
        },
        getArticleTags: function (t) {
          void 0 === t && (t = window);
          var e = Array.from(t.document.getElementsByTagName("article"));
          return e.length ? e : null;
        },
        getBiggestImage: E,
        getSpecialCandidate: function (t) {
          void 0 === t && (t = window);
          var e = w(t),
            r = b(t),
            n = h.specialCandidates[e] || h.specialCandidates[e + r];
          if (n) {
            var o = t.document || document,
              i = n.find(function (t) {
                return Boolean(o.querySelector(t));
              });
            if (i) return o.querySelector(i);
          }
          return null;
        },
        getPathName: b,
        getSpecialCaseArticle: function (t) {
          void 0 === t && (t = window);
          var e = w(t);
          if (h.specialCases[e]) {
            var r = t.document || document,
              n = h.specialCases[e].join(","),
              o = r.querySelector(n);
            if (o) return o;
          }
          return null;
        },
        getPageHost: w
      },
      R = (function () {
        function t(t) {
          var e = t.outputFormat,
            r = void 0 === e ? "image/jpg" : e,
            n = t._window;
          (this.outputFormat = r), (this._window = n || window);
        }
        return (
          (t.prototype.convert = function (t) {
            var e = this;
            return new Promise(function (r, n) {
              var o = new Image();
              (o.crossOrigin = "Anonymous"),
                (o.onload = function () {
                  var t = e._window.document.createElement("CANVAS"),
                    i = t.getContext("2d");
                  (t.height = o.naturalHeight), (t.width = o.naturalWidth), e._isNotEmptyImage(o) && i.drawImage(o, 0, 0);
                  try {
                    var s = t.toDataURL(e.outputFormat);
                    r(s);
                  } catch (t) {
                    n(t);
                  }
                }),
                (o.onerror = function (t) {
                  n(t);
                }),
                (o.src = t),
                (o.complete || void 0 === o.complete) &&
                  ((o.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="), (o.src = t));
            });
          }),
          (t.prototype.convertSync = function (t, e) {
            var r = /^(https?:\/\/.[^\/]+)\/?/.exec(e);
            if (!r || r[1] === this._window.document.location.origin) {
              if (!t.naturalHeight && !t.naturalWidth) return e;
              var n = this._window.document.createElement("CANVAS"),
                o = n.getContext("2d");
              return (
                (n.height = t.naturalHeight || 1), (n.width = t.naturalWidth || 1), o.drawImage(t, 0, 0), n.toDataURL(this.outputFormat)
              );
            }
            return e;
          }),
          (t.prototype._isNotEmptyImage = function (t) {
            var e = t.naturalHeight,
              r = t.naturalWidth;
            return 0 !== e && 0 !== r;
          }),
          t
        );
      })();
    !(function () {
      function t(t) {
        var e = t._window;
        (this._window = e), (this.converter = new R({ _window: e }));
      }
      (t.prototype.isImageSafeSize = function (t) {
        return (t.naturalWidth || 0) + (t.naturalHeight || 0) < 1800;
      }),
        (t.prototype.imageToBase64 = function (t) {
          if (!t || "img" !== t.tagName.toLowerCase()) return "";
          var e = (t.src || "").trim();
          if (
            (e.startsWith("//") && (e = this._window.location.protocol + e),
            e.startsWith("data:") || e.startsWith("file://") || !/^https?:\/\//i.test(e))
          )
            return e;
          if (!/\.gif($|\?)/i.test(e) && (t.naturalWidth || t.naturalHeight) && this.isImageSafeSize(t))
            try {
              return this.converter.convertSync(t, e);
            } catch (t) {
              i.warn("Image download error", t);
            }
          return e;
        }),
        (t.prototype.svgToBase64 = function (t) {
          return new R({ _window: this._window }).convert(t);
        });
    })();
    var x = new Uint8Array(16);
    function j() {
      if (
        !B &&
        !(B =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return B(x);
    }
    for (
      var P = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        C = function (t) {
          return "string" == typeof t && P.test(t);
        },
        L = [],
        M = 0;
      M < 256;
      ++M
    )
      L.push((M + 256).toString(16).substr(1));
    var N = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (
          L[t[e + 0]] +
          L[t[e + 1]] +
          L[t[e + 2]] +
          L[t[e + 3]] +
          "-" +
          L[t[e + 4]] +
          L[t[e + 5]] +
          "-" +
          L[t[e + 6]] +
          L[t[e + 7]] +
          "-" +
          L[t[e + 8]] +
          L[t[e + 9]] +
          "-" +
          L[t[e + 10]] +
          L[t[e + 11]] +
          L[t[e + 12]] +
          L[t[e + 13]] +
          L[t[e + 14]] +
          L[t[e + 15]]
        ).toLowerCase();
      if (!C(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    function D(t, e, r) {
      function n(t, n, o, i) {
        if (
          ("string" == typeof t &&
            (t = (function (t) {
              t = unescape(encodeURIComponent(t));
              for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
              return e;
            })(t)),
          "string" == typeof n &&
            (n = (function (t) {
              if (!C(t)) throw TypeError("Invalid UUID");
              var e,
                r = new Uint8Array(16);
              return (
                (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
                (r[1] = (e >>> 16) & 255),
                (r[2] = (e >>> 8) & 255),
                (r[3] = 255 & e),
                (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
                (r[5] = 255 & e),
                (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
                (r[7] = 255 & e),
                (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
                (r[9] = 255 & e),
                (r[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
                (r[11] = (e / 4294967296) & 255),
                (r[12] = (e >>> 24) & 255),
                (r[13] = (e >>> 16) & 255),
                (r[14] = (e >>> 8) & 255),
                (r[15] = 255 & e),
                r
              );
            })(n)),
          16 !== n.length)
        )
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var s = new Uint8Array(16 + t.length);
        if ((s.set(n), s.set(t, n.length), ((s = r(s))[6] = (15 & s[6]) | e), (s[8] = (63 & s[8]) | 128), o)) {
          i = i || 0;
          for (var a = 0; a < 16; ++a) o[i + a] = s[a];
          return o;
        }
        return N(s);
      }
      try {
        n.name = t;
      } catch (t) {}
      return (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"), n;
    }
    function U(t) {
      return 14 + (((t + 64) >>> 9) << 4) + 1;
    }
    function F(t, e) {
      var r = (65535 & t) + (65535 & e);
      return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function H(t, e, r, n, o, i) {
      return F(((s = F(F(e, t), F(n, i))) << (a = o)) | (s >>> (32 - a)), r);
      var s, a;
    }
    function q(t, e, r, n, o, i, s) {
      return H((e & r) | (~e & n), t, e, o, i, s);
    }
    function z(t, e, r, n, o, i, s) {
      return H((e & n) | (r & ~n), t, e, o, i, s);
    }
    function W(t, e, r, n, o, i, s) {
      return H(e ^ r ^ n, t, e, o, i, s);
    }
    function V(t, e, r, n, o, i, s) {
      return H(r ^ (e | ~n), t, e, o, i, s);
    }
    D("v3", 48, function (t) {
      if ("string" == typeof t) {
        var e = unescape(encodeURIComponent(t));
        t = new Uint8Array(e.length);
        for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r);
      }
      return (function (t) {
        for (var e = [], r = 32 * t.length, n = "0123456789abcdef", o = 0; o < r; o += 8) {
          var i = (t[o >> 5] >>> o % 32) & 255,
            s = parseInt(n.charAt((i >>> 4) & 15) + n.charAt(15 & i), 16);
          e.push(s);
        }
        return e;
      })(
        (function (t, e) {
          (t[e >> 5] |= 128 << e % 32), (t[U(e) - 1] = e);
          for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, s = 0; s < t.length; s += 16) {
            var a = r,
              c = n,
              u = o,
              p = i;
            (r = q(r, n, o, i, t[s], 7, -680876936)),
              (i = q(i, r, n, o, t[s + 1], 12, -389564586)),
              (o = q(o, i, r, n, t[s + 2], 17, 606105819)),
              (n = q(n, o, i, r, t[s + 3], 22, -1044525330)),
              (r = q(r, n, o, i, t[s + 4], 7, -176418897)),
              (i = q(i, r, n, o, t[s + 5], 12, 1200080426)),
              (o = q(o, i, r, n, t[s + 6], 17, -1473231341)),
              (n = q(n, o, i, r, t[s + 7], 22, -45705983)),
              (r = q(r, n, o, i, t[s + 8], 7, 1770035416)),
              (i = q(i, r, n, o, t[s + 9], 12, -1958414417)),
              (o = q(o, i, r, n, t[s + 10], 17, -42063)),
              (n = q(n, o, i, r, t[s + 11], 22, -1990404162)),
              (r = q(r, n, o, i, t[s + 12], 7, 1804603682)),
              (i = q(i, r, n, o, t[s + 13], 12, -40341101)),
              (o = q(o, i, r, n, t[s + 14], 17, -1502002290)),
              (r = z(r, (n = q(n, o, i, r, t[s + 15], 22, 1236535329)), o, i, t[s + 1], 5, -165796510)),
              (i = z(i, r, n, o, t[s + 6], 9, -1069501632)),
              (o = z(o, i, r, n, t[s + 11], 14, 643717713)),
              (n = z(n, o, i, r, t[s], 20, -373897302)),
              (r = z(r, n, o, i, t[s + 5], 5, -701558691)),
              (i = z(i, r, n, o, t[s + 10], 9, 38016083)),
              (o = z(o, i, r, n, t[s + 15], 14, -660478335)),
              (n = z(n, o, i, r, t[s + 4], 20, -405537848)),
              (r = z(r, n, o, i, t[s + 9], 5, 568446438)),
              (i = z(i, r, n, o, t[s + 14], 9, -1019803690)),
              (o = z(o, i, r, n, t[s + 3], 14, -187363961)),
              (n = z(n, o, i, r, t[s + 8], 20, 1163531501)),
              (r = z(r, n, o, i, t[s + 13], 5, -1444681467)),
              (i = z(i, r, n, o, t[s + 2], 9, -51403784)),
              (o = z(o, i, r, n, t[s + 7], 14, 1735328473)),
              (r = W(r, (n = z(n, o, i, r, t[s + 12], 20, -1926607734)), o, i, t[s + 5], 4, -378558)),
              (i = W(i, r, n, o, t[s + 8], 11, -2022574463)),
              (o = W(o, i, r, n, t[s + 11], 16, 1839030562)),
              (n = W(n, o, i, r, t[s + 14], 23, -35309556)),
              (r = W(r, n, o, i, t[s + 1], 4, -1530992060)),
              (i = W(i, r, n, o, t[s + 4], 11, 1272893353)),
              (o = W(o, i, r, n, t[s + 7], 16, -155497632)),
              (n = W(n, o, i, r, t[s + 10], 23, -1094730640)),
              (r = W(r, n, o, i, t[s + 13], 4, 681279174)),
              (i = W(i, r, n, o, t[s], 11, -358537222)),
              (o = W(o, i, r, n, t[s + 3], 16, -722521979)),
              (n = W(n, o, i, r, t[s + 6], 23, 76029189)),
              (r = W(r, n, o, i, t[s + 9], 4, -640364487)),
              (i = W(i, r, n, o, t[s + 12], 11, -421815835)),
              (o = W(o, i, r, n, t[s + 15], 16, 530742520)),
              (r = V(r, (n = W(n, o, i, r, t[s + 2], 23, -995338651)), o, i, t[s], 6, -198630844)),
              (i = V(i, r, n, o, t[s + 7], 10, 1126891415)),
              (o = V(o, i, r, n, t[s + 14], 15, -1416354905)),
              (n = V(n, o, i, r, t[s + 5], 21, -57434055)),
              (r = V(r, n, o, i, t[s + 12], 6, 1700485571)),
              (i = V(i, r, n, o, t[s + 3], 10, -1894986606)),
              (o = V(o, i, r, n, t[s + 10], 15, -1051523)),
              (n = V(n, o, i, r, t[s + 1], 21, -2054922799)),
              (r = V(r, n, o, i, t[s + 8], 6, 1873313359)),
              (i = V(i, r, n, o, t[s + 15], 10, -30611744)),
              (o = V(o, i, r, n, t[s + 6], 15, -1560198380)),
              (n = V(n, o, i, r, t[s + 13], 21, 1309151649)),
              (r = V(r, n, o, i, t[s + 4], 6, -145523070)),
              (i = V(i, r, n, o, t[s + 11], 10, -1120210379)),
              (o = V(o, i, r, n, t[s + 2], 15, 718787259)),
              (n = V(n, o, i, r, t[s + 9], 21, -343485551)),
              (r = F(r, a)),
              (n = F(n, c)),
              (o = F(o, u)),
              (i = F(i, p));
          }
          return [r, n, o, i];
        })(
          (function (t) {
            if (0 === t.length) return [];
            for (var e = 8 * t.length, r = new Uint32Array(U(e)), n = 0; n < e; n += 8) r[n >> 5] |= (255 & t[n / 8]) << n % 32;
            return r;
          })(t),
          8 * t.length
        )
      );
    });
    var X = function (t, e, r) {
      var n = (t = t || {}).random || (t.rng || j)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        r = r || 0;
        for (var o = 0; o < 16; ++o) e[r + o] = n[o];
        return e;
      }
      return N(n);
    };
    function G(t, e, r, n) {
      switch (t) {
        case 0:
          return (e & r) ^ (~e & n);
        case 1:
        case 3:
          return e ^ r ^ n;
        case 2:
          return (e & r) ^ (e & n) ^ (r & n);
      }
    }
    function Y(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
    D("v5", 80, function (t) {
      var e = [1518500249, 1859775393, 2400959708, 3395469782],
        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof t) {
        var n = unescape(encodeURIComponent(t));
        t = [];
        for (var o = 0; o < n.length; ++o) t.push(n.charCodeAt(o));
      } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
      t.push(128);
      for (var i = t.length / 4 + 2, s = Math.ceil(i / 16), a = new Array(s), c = 0; c < s; ++c) {
        for (var u = new Uint32Array(16), p = 0; p < 16; ++p)
          u[p] = (t[64 * c + 4 * p] << 24) | (t[64 * c + 4 * p + 1] << 16) | (t[64 * c + 4 * p + 2] << 8) | t[64 * c + 4 * p + 3];
        a[c] = u;
      }
      (a[s - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
        (a[s - 1][14] = Math.floor(a[s - 1][14])),
        (a[s - 1][15] = (8 * (t.length - 1)) & 4294967295);
      for (var l = 0; l < s; ++l) {
        for (var f = new Uint32Array(80), h = 0; h < 16; ++h) f[h] = a[l][h];
        for (var d = 16; d < 80; ++d) f[d] = Y(f[d - 3] ^ f[d - 8] ^ f[d - 14] ^ f[d - 16], 1);
        for (var y = r[0], m = r[1], g = r[2], v = r[3], w = r[4], b = 0; b < 80; ++b) {
          var E = Math.floor(b / 20),
            S = (Y(y, 5) + G(E, m, g, v) + w + e[E] + f[b]) >>> 0;
          (w = v), (v = g), (g = Y(m, 30) >>> 0), (m = y), (y = S);
        }
        (r[0] = (r[0] + y) >>> 0),
          (r[1] = (r[1] + m) >>> 0),
          (r[2] = (r[2] + g) >>> 0),
          (r[3] = (r[3] + v) >>> 0),
          (r[4] = (r[4] + w) >>> 0);
      }
      return [
        (r[0] >> 24) & 255,
        (r[0] >> 16) & 255,
        (r[0] >> 8) & 255,
        255 & r[0],
        (r[1] >> 24) & 255,
        (r[1] >> 16) & 255,
        (r[1] >> 8) & 255,
        255 & r[1],
        (r[2] >> 24) & 255,
        (r[2] >> 16) & 255,
        (r[2] >> 8) & 255,
        255 & r[2],
        (r[3] >> 24) & 255,
        (r[3] >> 16) & 255,
        (r[3] >> 8) & 255,
        255 & r[3],
        (r[4] >> 24) & 255,
        (r[4] >> 16) & 255,
        (r[4] >> 8) & 255,
        255 & r[4]
      ];
    });
    var $ = (function () {
      function t() {
        if (t.instance) return t.instance;
        this.initialize(), (t.instance = this);
      }
      return (
        (t.getInstance = function () {
          return t.instance;
        }),
        (t.prototype.initialize = function () {
          (this.clipId = X()),
            (this.clipType = null),
            (this.origin = null),
            (this.domTotalNodesCount = 0),
            (this.domDoneNodesCount = 0),
            (this.noteSize = 0),
            (this.noteContentSize = 0),
            (this.serializationElapsedTime = 0),
            (this.resourceResolverTime = 0),
            (this.resourceCount = 0),
            (this.clipSuccessTime = 0),
            (this.stage = null),
            (this.errorType = null),
            (this.clipStatus = null),
            (this.localTime = new Date().toLocaleString()),
            (this.isBookmark = !1),
            (this.bookmarkReason = null),
            (this.paywallConfidenceLevel = 0);
        }),
        (t.prototype.setClipType = function (t) {
          this.clipType = t;
        }),
        (t.prototype.getClipType = function () {
          return this.clipType;
        }),
        (t.prototype.setOrigin = function (t) {
          this.origin = t;
        }),
        (t.prototype.getOrigin = function () {
          return this.origin;
        }),
        (t.prototype.setDomTotalNodesCount = function (t) {
          this.domTotalNodesCount = t;
        }),
        (t.prototype.getDomTotalNodesCount = function () {
          return this.domTotalNodesCount;
        }),
        (t.prototype.setDomDoneNodesCount = function (t) {
          this.domDoneNodesCount = t;
        }),
        (t.prototype.getDomDoneNodesCount = function () {
          return this.domDoneNodesCount;
        }),
        (t.prototype.setNoteSize = function (t) {
          this.noteSize = t;
        }),
        (t.prototype.getNoteSize = function () {
          return this.noteSize;
        }),
        (t.prototype.setNoteContentSize = function (t) {
          this.noteContentSize = t;
        }),
        (t.prototype.getNoteContentSize = function () {
          return this.noteContentSize;
        }),
        (t.prototype.setSerializationElapsedTime = function (t) {
          this.serializationElapsedTime = t;
        }),
        (t.prototype.getSerializationElapsedTime = function () {
          return this.serializationElapsedTime;
        }),
        (t.prototype.setResourceResolverTime = function (t) {
          this.resourceResolverTime = t;
        }),
        (t.prototype.getResourceResolverTime = function () {
          return this.resourceResolverTime;
        }),
        (t.prototype.incrementResourceCount = function () {
          this.setResourceCount(this.resourceCount + 1);
        }),
        (t.prototype.setResourceCount = function (t) {
          this.resourceCount = t;
        }),
        (t.prototype.getResourceCount = function () {
          return this.resourceCount;
        }),
        (t.prototype.setClipSuccessTime = function (t) {
          this.clipSuccessTime = t;
        }),
        (t.prototype.getClipSuccessTime = function () {
          return this.clipSuccessTime;
        }),
        (t.prototype.setClipStage = function (t) {
          this.clipStage = t;
        }),
        (t.prototype.getClipStage = function () {
          return this.clipStage;
        }),
        (t.prototype.setErrorType = function (t) {
          this.errorType = t;
        }),
        (t.prototype.getErrorType = function () {
          return this.errorType;
        }),
        (t.prototype.setClipStatus = function (t) {
          this.clipStatus = t;
        }),
        (t.prototype.getClipStatus = function () {
          return this.clipStatus;
        }),
        (t.prototype.setLocalTime = function (t) {
          this.localTime = t;
        }),
        (t.prototype.getLocalTime = function () {
          return this.localTime;
        }),
        (t.prototype.setIsBookmark = function (t) {
          this.isBookmark = t;
        }),
        (t.prototype.getIsBookmark = function () {
          return this.isBookmark;
        }),
        (t.prototype.setBookmarkReason = function (t) {
          this.bookmarkReason = t;
        }),
        (t.prototype.getBookmarkReason = function () {
          return this.bookmarkReason;
        }),
        (t.prototype.setPaywallConfidenceLevel = function (t) {
          this.paywallConfidenceLevel = t;
        }),
        (t.prototype.getPaywallConfidenceLevel = function () {
          return this.paywallConfidenceLevel;
        }),
        (t.prototype.setClipperCoreVersion = function (t) {
          this.clipperCoreVersion = t;
        }),
        (t.prototype.getClipperCoreVersion = function () {
          return this.clipperCoreVersion;
        }),
        (t.instance = new t()),
        t
      );
    })().getInstance();
    (function () {
      function t() {}
      (t.getEvent = function () {
        return "success" === $.clipStatus
          ? $
          : {
              clipId: (t = $).clipId,
              clipperCoreVersion: t.clipperCoreVersion,
              clipType: t.clipType,
              origin: t.origin,
              stage: t.stage,
              errorType: t.errorType,
              clipStatus: t.clipStatus,
              localTime: t.localTime,
              isBookmark: t.isBookmark,
              bookmarkReason: t.bookmarkReason,
              paywallConfidenceLevel: t.paywallConfidenceLevel
            };
        var t;
      }),
        (t.getBlankEvent = function () {
          return $.initialize(), $;
        }),
        (t.reinitializeEvent = function () {
          $.initialize();
        });
    })(),
      (function () {
        function t() {
          (this.startTime = null), (this.endTime = null);
        }
        (t.prototype.startTimer = function () {
          this.startTime = new Date();
        }),
          (t.prototype.stopTimer = function () {
            this.endTime = new Date();
          }),
          (t.prototype.getDuration = function () {
            return this.endTime && this.startTime ? this.endTime.getTime() - this.startTime.getTime() : 0;
          });
      })();
    const J = self.chrome || chrome;
    self.topee;
    var Q,
      Z,
      K,
      tt,
      et = J;
    class rt {
      getAcceptLanguages() {
        return new Promise((t, e) => {
          et.i18n.getAcceptLanguages((r) => {
            const n = et.runtime.lastError;
            return n ? e(n) : t(r);
          });
        });
      }
      getMessage(t, e) {
        return et.i18n.getMessage(t, e);
      }
      getUILanguage() {
        return et.i18n.getUILanguage();
      }
    }
    function nt(t) {
      return (
        (nt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }),
        nt(t)
      );
    }
    function ot(t, e, r) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== nt(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== nt(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === nt(e) ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (t[e] = r),
        t
      );
    }
    function it(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function st(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? it(Object(r), !0).forEach(function (e) {
              ot(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : it(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
      }
      return t;
    }
    !(function (t) {
      (t.FORWARD_FETCH_REQUEST = "EN_forwardFetchRequest"),
        (t.REPORT_PROGRESS = "EN_progress"),
        (t.SERIALIZE_ALL = "EN_SerializeAll"),
        (t.SERIALIZE_TO = "EN_SerializeTo"),
        (t.SERIALIZE = "EN_serialize");
    })(Q || (Q = {})),
      (function (t) {
        (t.ARTICLE = "article"),
          (t.FULL_PAGE = "fullPage"),
          (t.SIMPLIFIED = "simplified"),
          (t.PDF = "pdf"),
          (t.EMAIL = "email"),
          (t.SELECTION = "selection"),
          (t.BOOKMARK = "bookmark"),
          (t.SCREENSHOT = "screenshot"),
          (t.TOP_SITE = "topsite");
      })(Z || (Z = {})),
      (function (t) {
        t.SERIALIZE_ERROR = "SRLZ";
      })(K || (K = {})),
      (function (t) {
        (t.SERIALIZE_FAILED = "SERIALIZE_FAILED"),
          (t.NOTE_SIZE_EXCEEDED = "SR_NOTE_SIZE_EXCEEDED"),
          (t.SERIALIZE_TIMEOUT = "SERIALIZE_TIMEOUT");
      })(tt || (tt = {}));
    const at = st(
        st({}, Z),
        {},
        {
          MULTI_SELECT: "multiSelect",
          DEFAULT_CLIP_TYPES: Z.ARTICLE,
          CONTEXT_IMAGE: "contextMenuImage",
          CONTEXT_SCREENSHOT: "contextMenuScreenshot",
          LOGIN: "login"
        }
      ),
      ct = Boolean(!1),
      ut = (Object.freeze({ alert: "alert" }), at.FULL_PAGE, at.BOOKMARK, at.CONTEXT_SCREENSHOT, "hasAnyLoggedInAccount");
    class pt {
      setTitle(t) {
        const { title: e, tabId: r } = t;
        return ct ? (et.browserAction.setTitle({ title: e, tabId: r }), Promise.resolve()) : et.action.setTitle({ title: e, tabId: r });
      }
      get onClicked() {
        const t = ct ? et.browserAction : et.action;
        return { addListener: (e) => t.onClicked.addListener(e), removeListener: (e) => t.onClicked.removeListener(e) };
      }
      disable(t) {
        return et.action.disable(t);
      }
      enable(t) {
        return et.action.enable(t);
      }
      setIcon(t) {
        return new Promise((e, r) => {
          et.action.setIcon({ path: t }, () => {
            const t = et.runtime.lastError;
            return t ? r(t) : e();
          });
        });
      }
    }
    class lt {
      getURL(t) {
        return et.runtime.getURL(t);
      }
      getManifest() {
        return et.runtime.getManifest();
      }
      get onMessage() {
        return { addListener: (t) => et.runtime.onMessage.addListener(t) };
      }
      sendMessage(t) {
        return et.runtime.sendMessage(void 0, t);
      }
      get isGetManifestApiAvailable() {
        return Boolean(et && et.runtime && ((t = et.runtime.getManifest), Boolean(t && "function" == typeof t)));
        var t;
      }
      reload() {
        if (!et.runtime.reload) {
          if (!chrome || !chrome.runtime || "function" != typeof chrome.runtime.restart)
            throw new Error("WebClipper cannot be reloaded since you're using kiosk mode");
          chrome.runtime.restart();
        }
        et.runtime.reload();
      }
    }
    class ft {
      captureVisibleTab(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return et.tabs.captureVisibleTab
          ? new Promise((r, n) => {
              et.tabs.captureVisibleTab(t, e, (t) => {
                const e = et.runtime.lastError;
                return e ? n(e) : r(t);
              });
            })
          : Promise.reject(new TypeError("Method `captureVisibleTab` not defined."));
      }
      getZoom(t) {
        return new Promise((e, r) => {
          et.tabs.getZoom(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      query(t) {
        return new Promise((e, r) => {
          et.tabs.query(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      sendMessage(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return new Promise((n, o) => {
          et.tabs.sendMessage(t, e, r, (t) => {
            const e = et.runtime.lastError;
            return e ? o(e) : n(t);
          });
        });
      }
      get onUpdated() {
        return { addListener: (t) => et.tabs.onUpdated.addListener(t), removeListener: (t) => et.tabs.onUpdated.removeListener(t) };
      }
      get onActivated() {
        return { addListener: (t) => et.tabs.onActivated.addListener(t), removeListener: (t) => et.tabs.onActivated.removeListener(t) };
      }
      get onRemoved() {
        return { addListener: (t) => et.tabs.onRemoved.addListener(t), removeListener: (t) => et.tabs.onRemoved.removeListener(t) };
      }
      get TAB_ID_NONE() {
        return et.tabs.TAB_ID_NONE;
      }
      remove(t) {
        return new Promise((e, r) => {
          et.tabs.remove(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      create(t) {
        return new Promise((e, r) => {
          et.tabs.create(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      update(t, e) {
        return new Promise((r, n) => {
          et.tabs.update(t, e, (t) => {
            const e = et.runtime.lastError;
            return e ? n(e) : r(t);
          });
        });
      }
      highlight(t) {
        return new Promise((e, r) => {
          et.tabs.highlight(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      get(t) {
        return new Promise((e, r) => {
          et.tabs.get(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
    }
    class ht {
      update(t, e) {
        return new Promise((r, n) => {
          try {
            const n = "boolean" == typeof e.focused ? e.focused : void 0;
            et.windows.update(t, { focused: n }, () => r());
          } catch (t) {
            n(t);
          }
        });
      }
      create(t, e) {
        et.windows.create(t, e);
      }
      get onRemoved() {
        return { addListener: (t) => et.windows.onRemoved.addListener(t), removeListener: (t) => et.windows.onRemoved.removeListener(t) };
      }
      remove(t) {
        return new Promise((e, r) => {
          try {
            et.windows.remove(t, e);
          } catch (t) {
            r(t);
          }
        });
      }
    }
    class dt {
      create() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0;
        return et.contextMenus.create(t, e);
      }
      update(t, e) {
        return new Promise((r, n) => {
          et.contextMenus.update(t, e, () => {
            const t = chrome.runtime.lastError;
            return t ? n(t) : r();
          });
        });
      }
      remove(t) {
        return new Promise((e, r) => {
          et.contextMenus.remove(t, () => {
            const t = et.runtime.lastError;
            return t ? r(t) : e();
          });
        });
      }
      removeAll() {
        return new Promise((t, e) => {
          et.contextMenus.removeAll(() => {
            const r = et.runtime.lastError;
            return r ? e(r) : t();
          });
        });
      }
      get onClicked() {
        return {
          addListener: (t) => {
            et.contextMenus.onClicked.addListener(t);
          },
          removeListener: (t) => {
            et.contextMenus.onClicked.removeListener(t);
          }
        };
      }
    }
    const { isPdfPage: yt } = O,
      mt = /^(http[s]?|ftp):\/\/.+/,
      gt = (t) => !(!t || "string" != typeof t) && mt.test(t);
    class vt {
      constructor() {
        (this.contains = this.contains.bind(this)),
          (this.request = this.request.bind(this)),
          (this.requestPermissionPerSite = this.requestPermissionPerSite.bind(this));
      }
      contains(t) {
        return new Promise((e, r) => {
          et.permissions.contains(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      request(t) {
        return new Promise((e, r) => {
          et.permissions.request(t, (t) => {
            const n = et.runtime.lastError;
            return n ? r(n) : e(t);
          });
        });
      }
      async requestPermissionPerSite(t, e) {
        let r = e.url;
        gt(r) || (gt(t.frameUrl) && (r = t.frameUrl));
        const n = { permissions: ["cookies"], origins: [r, "*://*.evernote.com/*"] };
        if (this.contains(n)) return { info: t, tab: e };
        if (this.request(n)) return { info: t, tab: e };
        const o = r.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, (t) => {
          try {
            const e = new URL(t);
            return e.origin ? e.origin : "Domain URL";
          } catch (t) {
            return "Domain URL";
          }
        });
        throw new Error(`User has not granted necessary permissions for origin: ${o}`);
      }
    }
    const wt = (t) => "[object Object]" === Object.prototype.toString.call(t);
    class bt {
      executeScript(t) {
        et.scripting.executeScript(t);
      }
    }
    var Et = new (class {
      constructor() {
        (this.browserAction = new pt()),
          (this.i18n = new rt()),
          (this.runtime = new lt()),
          (this.tabs = new ft()),
          (this.windows = new ht()),
          (this.cookies = new (class {
            get(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
              return new Promise(async (r) => {
                const n = e ? { name: t, url: e } : { name: t };
                let o = null;
                if (e)
                  try {
                    o = await this.getSingleCookie(n);
                  } catch (t) {
                    i.warn(t.message || "Error trying to get single cookie");
                  }
                o || (o = await this.find(n)), r(o);
              });
            }
            getSingleCookie(t) {
              return new Promise((e, r) => {
                et.cookies.get(t, (t) => {
                  const n = et.runtime.lastError;
                  return n ? r(n) : e(t);
                });
              });
            }
            find(t) {
              if (!t || !t.name) return Promise.resolve(null);
              let e;
              return (
                (e = new Promise((e, r) => {
                  et.cookies.getAll(t, (t) => {
                    const n = et.runtime.lastError;
                    return n ? r(n) : e(t);
                  });
                })),
                e
                  .then((e) => {
                    let r = null;
                    return e && (r = e.find((e) => e.name === t.name)), r || null;
                  })
                  .catch((t) => (i.warn(t.message || "Error trying to get cookies"), Promise.resolve(null)))
              );
            }
            set(t, e, r, n, o, s) {
              const a = { name: t, expirationDate: r, path: n, domain: o, secure: Boolean(s), value: e };
              let c;
              return (
                (c = new Promise((t, e) => {
                  et.cookies.set(a, (r) => {
                    const n = et.runtime.lastError;
                    return n ? e(n) : t(r);
                  });
                })),
                c.catch((e) => {
                  const r = (e && e.message) || `Cookie '${t}' could not be set`;
                  return i.warn(r), Promise.reject(e);
                })
              );
            }
            async delete(t, e) {
              const r = `Cookie '${t}' could not be deleted`,
                n = await this.get(t, e);
              if (!n) return i.warn(r), null;
              const o = this._removeStartingDot(e || this._buildUrl(n.domain, n.path, n.secure)),
                s = { name: t, url: o };
              let a;
              return (
                (a = new Promise((t, e) => {
                  et.cookies.remove(s, (r) => {
                    const n = et.runtime.lastError;
                    return n ? e(n) : t(r);
                  });
                })),
                a.catch((e) => {
                  const r = (e && e.message) || `Cookie '${t}' could not be set`;
                  return i.warn(r), Promise.resolve(e);
                })
              );
            }
            _buildUrl(t, e, r) {
              return `${r ? "https" : "http"}://${this._removeStartingDot(t)}${this._removeStartingDot(e || "")}`;
            }
            _removeStartingDot(t) {
              return t.replace(/^\.*/, "");
            }
          })()),
          (this.contextMenus = new dt()),
          (this.notifications = new (class {
            create(t, e) {
              return et.notifications
                ? new Promise((r, n) => {
                    et.notifications.create(t, e, (t) => {
                      const e = et.runtime.lastError;
                      return e ? n(e) : r(t);
                    });
                  })
                : Promise.reject(new Error("Need to ask permission"));
            }
            clear(t) {
              return et.notifications
                ? new Promise((e, r) => {
                    et.notifications.clear(t, (t) => {
                      const n = et.runtime.lastError;
                      return n ? r(n) : e(t);
                    });
                  })
                : Promise.reject(new Error("Need to ask permission"));
            }
            getAll() {
              return et.notifications
                ? new Promise((t, e) => {
                    et.notifications.getAll((r) => {
                      const n = et.runtime.lastError;
                      return n ? e(n) : t(r);
                    });
                  })
                : Promise.reject(new Error("Need to ask permission"));
            }
          })()),
          (this.permissions = new vt()),
          (this.menus = this.contextMenus),
          (this.storage = new (class {
            set(t, e) {
              return new Promise((r, n) => {
                if (ct)
                  try {
                    const n = JSON.stringify(e);
                    localStorage.setItem(t, n), r();
                  } catch (t) {
                    n(t);
                  }
                else {
                  const o = ((t) => (Array.isArray(t) || wt(t) ? JSON.stringify(t) : t))(e),
                    i = () => {
                      const t = et.runtime.lastError;
                      return t ? n(t) : r();
                    };
                  et.storage.local.set({ [t]: o }, i);
                }
              });
            }
            get(t) {
              return new Promise((e, r) => {
                if (ct) {
                  let n;
                  try {
                    n = localStorage.getItem(t);
                  } catch (t) {
                    return void r(t);
                  }
                  if (n && "string" == typeof n)
                    try {
                      const t = JSON.parse(n);
                      return void e(t);
                    } catch (t) {}
                  e(n);
                } else
                  new Promise((e, r) => {
                    et.storage.local.get(t, (t) => {
                      const n = et.runtime.lastError;
                      return n ? r(n) : e(t);
                    });
                  })
                    .then((r) => {
                      const n = r[t];
                      e(
                        ((t) => {
                          if (t && "string" == typeof t)
                            try {
                              const e = JSON.parse(t);
                              if (e && (Array.isArray(e) || wt(e))) return e;
                            } catch (t) {}
                          return t;
                        })(n)
                      );
                    })
                    .catch((t) => r(t));
              });
            }
            setAnyLoggedInAccount(t) {
              return ct ? Promise.resolve() : this.set(ut, Boolean(t));
            }
            hasAnyLoggedInAccount() {
              return ct ? Promise.resolve() : this.get(ut);
            }
          })()),
          (this.scripting = new bt());
      }
      get hasRuntimeApiAvailable() {
        return Boolean(et && et.runtime);
      }
      get hasCookiesApiAvailable() {
        return Boolean(et && et.cookies);
      }
      get hasNotificationsApiAvailable() {
        return Boolean(et && et.notifications);
      }
      get hasRuntimeGetUrlAvailable() {
        return Boolean(et && et.runtime && et.runtime.getURL && "function" == typeof et.runtime.getURL);
      }
    })();
    function St(t, r) {
      let n,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (!r) throw new Error("JSLocalized comment must always be provided");
      const s = e()(t);
      var a;
      return (
        (n = (a = Et) && a.i18n ? a.i18n.getMessage(s) || t : (i.warn(`Tried to localize string ${t}, but no api was available`), t)),
        n.replace(/{(\w+)}/g, (t, e) => o[e] || "")
      );
    }
    navigator.language.replace("-", "_"),
      window.addEventListener("DOMContentLoaded", () => {
        (() => {
          (document.getElementById("welcome").innerText = St("Welcome to Evernote Web Clipper!", "Welcome message for consent page")),
            (document.getElementById("bullet_one").innerText = St(
              "Capture webpages to be stored in Evernote",
              "First bullet point in consent page that explains what Webclipper does"
            )),
            (document.getElementById("bullet_two").innerText = St(
              "Capture urls for the saved webpages",
              "Second bullet point in consent page that explains what Webclipper does"
            )),
            (document.getElementById("decline_text").innerText = St(
              "If you decline permissions you will not be able to use Web Clipper. You can disable this service at anytime.",
              "What happens if the users declines this permission"
            )),
            (document.getElementById("allowBtn").innerText = St("Allow", "Button to allow the extension")),
            (document.getElementById("declineBtn").innerText = St("Decline", "Button to decline terms of use of the extension"));
          const t = St("Privacy Policy", "text for link to Privacy Policy"),
            e = St("For more information, please see our {privacyLinkLabel}.", "Link to Privacy Policy", { privacyLinkLabel: t });
          document.getElementById("more_info_link").innerHTML = e.replace(
            t,
            `<a href="https://evernote.com/privacy/policy" target="_blank">${t}</a>`
          );
        })();
        const t = document.getElementById("allowBtn"),
          e = document.getElementById("declineBtn");
        t.addEventListener("click", function (t) {
          t.preventDefault(),
            chrome.tabs.getCurrent((t) => {
              chrome.runtime.sendMessage({
                "t-name": "dispatchBroadcast",
                name: "Extension/HANDLE_CONSENT",
                payload: { consent: !0, tabId: t.id }
              });
            });
        }),
          e.addEventListener("click", function (t) {
            t.preventDefault(),
              chrome.tabs.getCurrent((t) => {
                chrome.runtime.sendMessage({
                  "t-name": "dispatchBroadcast",
                  name: "Extension/HANDLE_CONSENT",
                  payload: { consent: !1, tabId: t.id }
                });
              });
          });
      });
  })();
})();
