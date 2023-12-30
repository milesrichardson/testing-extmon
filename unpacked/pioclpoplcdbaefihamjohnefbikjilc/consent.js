/*! For license information please see consent.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      46463: (t, e, r) => {
        r(24527).Thrift,
          (t.exports.nI5 = "^[A-Za-z]+/[A-Za-z0-9._+-]+$"),
          (t.exports.emj = "image/gif"),
          (t.exports.aP_ = "image/jpeg"),
          (t.exports.PDC = "image/png"),
          (t.exports.uOi = "application/pdf"),
          (t.exports.xGc = "application/octet-stream");
      },
      24527: (t, e, r) => {
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
      95733: (t) => {
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
            for (var r = new ArrayBuffer(8), n = new DataView(r), i = 0; i < 8; i++) {
              var s = parseInt(e.substr(8 * i, 8), 2);
              n.setUint8(i, s);
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
              i = new Uint8Array(n);
            for (e = 0; e < n; e++) i[e] = r.charCodeAt(e);
            return i.buffer;
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
            var i = r.indexOf("1");
            if (-1 !== i && i < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
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
              i = t.byteLength;
            for (e = 0; e < i; e++) 1 == (r = t.getUint8(e).toString(16)).length && (r = "0" + r), (n += "%" + r);
            return decodeURIComponent(n);
          }
        };
        t.exports = e;
      },
      29292: (t, e, r) => {
        var n = r(21293),
          i = r(95733),
          s = n.Type,
          o = -2147418112;
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
              ? (this.writeI32(o | e), this.writeString(t), this.writeI32(r))
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
            this.writeByte(s.STOP);
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
            this.trans.write(i.fromByte(t));
          }),
          (a.prototype.writeBinary = function (t) {
            "use strict";
            if (("string" == typeof t && (t = i.fromString(t)), null == t.byteLength)) throw Error("Cannot read length of binary data");
            this.writeI32(t.byteLength), this.trans.write(t);
          }),
          (a.prototype.writeI16 = function (t) {
            "use strict";
            this.trans.write(i.fromShort(t));
          }),
          (a.prototype.writeI32 = function (t) {
            "use strict";
            this.trans.write(i.fromInt(t));
          }),
          (a.prototype.writeI64 = function (t) {
            "use strict";
            this.trans.write(i.fromLong(t));
          }),
          (a.prototype.writeDouble = function (t) {
            "use strict";
            this.trans.write(i.fromDouble(t));
          }),
          (a.prototype.writeString = function (t) {
            "use strict";
            var e = i.fromString(t);
            this.writeI32(e.byteLength), this.trans.write(e);
          }),
          (a.prototype.writeType = function (t, e) {
            "use strict";
            switch (t) {
              case s.BOOL:
                return this.writeBool(e);
              case s.BYTE:
                return this.writeByte(e);
              case s.I16:
                return this.writeI16(e);
              case s.I32:
                return this.writeI32(e);
              case s.I64:
                return this.writeI64(e);
              case s.DOUBLE:
                return this.writeDouble(e);
              case s.STRING:
                return this.writeString(e);
              case s.BINARY:
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
              if (r != o) throw (console.log("BAD: " + r), Error("Bad version in readMessageBegin: " + t));
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
            return t != s.STOP && (e.fid = this.readI16()), e;
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
            return i.toByte(t);
          }),
          (a.prototype.readI16 = function () {
            "use strict";
            var t = this.trans.read(2);
            return i.toShort(t);
          }),
          (a.prototype.readI32 = function () {
            "use strict";
            var t = this.trans.read(4);
            return i.toInt(t);
          }),
          (a.prototype.readI64 = function () {
            "use strict";
            var t = this.trans.read(8);
            return i.toLong(t);
          }),
          (a.prototype.readDouble = function () {
            "use strict";
            var t = this.trans.read(8);
            return i.toDouble(t);
          }),
          (a.prototype.readBinary = function () {
            "use strict";
            var t = this.readI32(),
              e = this.trans.read(t);
            return i.toBytes(e);
          }),
          (a.prototype.readString = function () {
            "use strict";
            var t = this.readI32(),
              e = this.trans.read(t);
            return i.toString(e);
          }),
          (a.prototype.readType = function (t) {
            "use strict";
            switch (t) {
              case s.BOOL:
                return this.readBool();
              case s.BYTE:
                return this.readByte();
              case s.I16:
                return this.readI16();
              case s.I32:
                return this.readI32();
              case s.I64:
                return this.readI64();
              case s.DOUBLE:
                return this.readDouble();
              case s.STRING:
                return this.readString();
              case s.BINARY:
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
            t.ftype !== s.STOP && (this.skip(t.ftype), this.readFieldEnd(), this.skipFields());
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
              case s.STOP:
                return;
              case s.BOOL:
                return this.readBool();
              case s.BYTE:
                return this.readByte();
              case s.I16:
                return this.readI16();
              case s.I32:
                return this.readI32();
              case s.I64:
                return this.readI64();
              case s.DOUBLE:
                return this.readDouble();
              case s.STRING:
                return this.readString();
              case s.STRUCT:
                return this.skipStruct();
              case s.MAP:
                return this.skipMap();
              case s.SET:
                return this.skipSet();
              case s.LIST:
                return this.skipList();
              case s.BINARY:
                return this.readBinary();
              default:
                throw Error("Invalid type: " + t);
            }
          }),
          (t.exports = a);
      },
      2188: (t, e, r) => {
        var n = r(21293).Type,
          i = function (t) {
            "use strict";
            this.transport = t;
          };
        ((i.Type = {})[n.BOOL] = '"tf"'),
          (i.Type[n.BYTE] = '"i8"'),
          (i.Type[n.I16] = '"i16"'),
          (i.Type[n.I32] = '"i32"'),
          (i.Type[n.I64] = '"i64"'),
          (i.Type[n.DOUBLE] = '"dbl"'),
          (i.Type[n.STRUCT] = '"rec"'),
          (i.Type[n.STRING] = '"str"'),
          (i.Type[n.MAP] = '"map"'),
          (i.Type[n.LIST] = '"lst"'),
          (i.Type[n.SET] = '"set"'),
          ((i.RType = {}).tf = n.BOOL),
          (i.RType.i8 = n.BYTE),
          (i.RType.i16 = n.I16),
          (i.RType.i32 = n.I32),
          (i.RType.i64 = n.I64),
          (i.RType.dbl = n.DOUBLE),
          (i.RType.rec = n.STRUCT),
          (i.RType.str = n.STRING),
          (i.RType.map = n.MAP),
          (i.RType.lst = n.LIST),
          (i.RType.set = n.SET),
          (i.Version = 1),
          (i.prototype = {
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
              (this.tstack = []), (this.tpos = []), this.tstack.push([i.Version, '"' + t + '"', e, r]);
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
              for (var i in e) n ? (n = !1) : (r += ","), (r += i + ":" + e[i]);
              (r += "}"), (this.tstack[t] = r);
            },
            writeFieldBegin: function (t, e, r) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push({ fieldId: '"' + r + '"', fieldType: i.Type[e] });
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
              this.tpos.push(this.tstack.length), this.tstack.push([i.Type[t], i.Type[e], 0]);
            },
            writeMapEnd: function () {
              "use strict";
              var t = this.tpos.pop();
              if (t != this.tstack.length) {
                (this.tstack.length - t - 1) % 2 != 0 && this.tstack.push("");
                var e = (this.tstack.length - t - 1) / 2;
                this.tstack[t][this.tstack[t].length - 1] = e;
                for (var r = "}", n = !0; this.tstack.length > t + 1; ) {
                  var i = this.tstack.pop(),
                    s = this.tstack.pop();
                  n ? (n = !1) : (r = "," + r), isNaN(s) || (s = '"' + s + '"'), (r = s + ":" + i + r);
                }
                (r = "{" + r), this.tstack[t].push(r), (this.tstack[t] = "[" + this.tstack[t].join(",") + "]");
              }
            },
            writeListBegin: function (t, e) {
              "use strict";
              this.tpos.push(this.tstack.length), this.tstack.push([i.Type[t], e]);
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
              this.tpos.push(this.tstack.length), this.tstack.push([i.Type[t], e]);
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
                s = this.robj.shift();
              if (s != i.Version) throw Error("Wrong thrift protocol version: " + s);
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
              for (var s in this.rstack[this.rstack.length - 1])
                if (null !== s) {
                  (e = parseInt(s, 10)), this.rpos.push(this.rstack.length);
                  var o = this.rstack[this.rstack.length - 1][e];
                  delete this.rstack[this.rstack.length - 1][e], this.rstack.push(o);
                  break;
                }
              if (-1 != e)
                for (var a in this.rstack[this.rstack.length - 1])
                  null !== i.RType[a] && ((r = i.RType[a]), (this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][a]));
              return (t.fname = ""), (t.ftype = r), (t.fid = e), t;
            },
            readFieldEnd: function () {
              "use strict";
              for (var t = this.rpos.pop(); this.rstack.length > t; ) this.rstack.pop();
            },
            readMapBegin: function (t, e, r) {
              "use strict";
              var n = this.rstack.pop(),
                s = {};
              return (
                (s.ktype = i.RType[n.shift()]),
                (s.vtype = i.RType[n.shift()]),
                (s.size = n.shift()),
                this.rpos.push(this.rstack.length),
                this.rstack.push(n.shift()),
                s
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
              return (n.etype = i.RType[r.shift()]), (n.size = r.shift()), this.rpos.push(this.rstack.length), this.rstack.push(r), n;
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
                    return r && (n = new i(r)), t(e, n);
                  }),
                this.transport.flush(e)
              );
            }
          }),
          (t.exports = i);
      },
      8633: (t, e, r) => {
        var n = r(21293).Type,
          i = {},
          s = -2147418112;
        function o(t, e, r) {
          "use strict";
          (this.transport = this.trans = t), (this.strictRead = void 0 !== e && e), (this.strictWrite = void 0 === r || r);
        }
        (o.prototype.flush = function (t) {
          "use strict";
          var e;
          return (
            t &&
              (e = function (e, r) {
                var n;
                return r && (n = new o(r)), t(e, n);
              }),
            this.trans.flush(e)
          );
        }),
          (o.prototype.writeMessageBegin = function (t, e, r) {
            "use strict";
            this.strictWrite
              ? (this.writeI32(s | e), this.writeString(t), this.writeI32(r))
              : (this.writeString(t), this.writeByte(e), this.writeI32(r));
          }),
          (o.prototype.writeMessageEnd = function () {}),
          (o.prototype.writeStructBegin = function (t) {}),
          (o.prototype.writeStructEnd = function () {}),
          (o.prototype.writeFieldBegin = function (t, e, r) {
            "use strict";
            this.writeByte(e), this.writeI16(r);
          }),
          (o.prototype.writeFieldEnd = function () {}),
          (o.prototype.writeFieldStop = function () {
            "use strict";
            this.writeByte(n.STOP);
          }),
          (o.prototype.writeMapBegin = function (t, e, r) {
            "use strict";
            this.writeByte(t), this.writeByte(e), this.writeI32(r);
          }),
          (o.prototype.writeMapEnd = function () {}),
          (o.prototype.writeListBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (o.prototype.writeListEnd = function () {}),
          (o.prototype.writeSetBegin = function (t, e) {
            "use strict";
            this.writeByte(t), this.writeI32(e);
          }),
          (o.prototype.writeSetEnd = function () {}),
          (o.prototype.writeBool = function (t) {
            "use strict";
            t ? this.writeByte(1) : this.writeByte(0);
          }),
          (o.prototype.writeByte = function (t) {
            "use strict";
            this.trans.write(i.fromByte(t));
          }),
          (o.prototype.writeBinary = function (t) {
            "use strict";
            if (("string" == typeof t && (t = i.fromString(t)), null == t.length)) throw Error("Cannot read length of binary data");
            this.writeI32(t.length), this.trans.write(t);
          }),
          (o.prototype.writeI16 = function (t) {
            "use strict";
            this.trans.write(i.fromShort(t));
          }),
          (o.prototype.writeI32 = function (t) {
            "use strict";
            this.trans.write(i.fromInt(t));
          }),
          (o.prototype.writeI64 = function (t) {
            "use strict";
            var e = i.fromLong(t);
            this.trans.write(e);
          }),
          (o.prototype.writeDouble = function (t) {
            "use strict";
            this.trans.write(i.fromDouble(t));
          }),
          (o.prototype.writeString = function (t) {
            "use strict";
            var e = i.fromString(t);
            this.writeI32(e.length), this.trans.write(e);
          }),
          (o.prototype.writeType = function (t, e) {
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
          (o.prototype.readMessageBegin = function () {
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
          (o.prototype.readMessageEnd = function () {}),
          (o.prototype.readStructBegin = function () {
            "use strict";
            return { fname: "" };
          }),
          (o.prototype.readStructEnd = function () {}),
          (o.prototype.readFieldBegin = function () {
            "use strict";
            var t = this.readByte(),
              e = { fname: null, ftype: t, fid: 0 };
            return t != n.STOP && (e.fid = this.readI16()), e;
          }),
          (o.prototype.readFieldEnd = function () {}),
          (o.prototype.readMapBegin = function () {
            "use strict";
            var t = { ktype: null, vtype: null, size: null };
            return (t.ktype = this.readByte()), (t.vtype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (o.prototype.readMapEnd = function () {}),
          (o.prototype.readListBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (o.prototype.readListEnd = function () {}),
          (o.prototype.readSetBegin = function () {
            "use strict";
            var t = { etype: null, size: null };
            return (t.etype = this.readByte()), (t.size = this.readI32()), t;
          }),
          (o.prototype.readSetEnd = function () {}),
          (o.prototype.readBool = function () {
            "use strict";
            return 1 == this.readByte();
          }),
          (o.prototype.readByte = function () {
            "use strict";
            return this.trans.read(1).readUInt8(0);
          }),
          (o.prototype.readI16 = function () {
            "use strict";
            return this.trans.read(2).readInt16BE(0);
          }),
          (o.prototype.readI32 = function () {
            "use strict";
            return this.trans.read(4).readInt32BE(0);
          }),
          (o.prototype.readI64 = function () {
            "use strict";
            var t = this.trans.read(8);
            return i.toLong(t);
          }),
          (o.prototype.readDouble = function () {
            "use strict";
            return this.trans.read(8).readDoubleBE(0);
          }),
          (o.prototype.readBinary = function () {
            "use strict";
            var t = this.readI32();
            return this.trans.read(t);
          }),
          (o.prototype.readString = function () {
            "use strict";
            var t = this.readI32();
            return this.trans.read(t).toString();
          }),
          (o.prototype.readType = function (t) {
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
          (o.prototype.getTransport = function () {
            "use strict";
            return this.trans;
          }),
          (o.prototype.skipStruct = function () {
            "use strict";
            this.readStructBegin(), this.skipFields(), this.readStructEnd();
          }),
          (o.prototype.skipFields = function () {
            "use strict";
            var t = this.readFieldBegin();
            t.ftype !== n.STOP && (this.skip(t.ftype), this.readFieldEnd(), this.skipFields());
          }),
          (o.prototype.skipMap = function () {
            "use strict";
            var t = 0,
              e = this.readMapBegin();
            for (t = 0; t < e.size; t++) this.skip(e.ktype), this.skip(e.vtype);
            this.readMapEnd();
          }),
          (o.prototype.skipSet = function () {
            "use strict";
            var t = 0,
              e = this.readSetBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readSetEnd();
          }),
          (o.prototype.skipList = function () {
            "use strict";
            var t = 0,
              e = this.readListBegin();
            for (t = 0; t < e.size; t++) this.skip(e.etype);
            this.readListEnd();
          }),
          (o.prototype.skip = function (t) {
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
          (i.fromByte = function (t) {
            "use strict";
            var e = new Buffer(1);
            return e.writeInt8(t, 0), e;
          }),
          (i.fromShort = function (t) {
            "use strict";
            t = parseInt(t);
            var e = new Buffer(2);
            return e.writeInt16BE(t, 0), e;
          }),
          (i.fromInt = function (t) {
            "use strict";
            t = parseInt(t);
            var e = new Buffer(4);
            return e.writeInt32BE(t, 0), e;
          }),
          (i.fromLong = function (t) {
            "use strict";
            if (((t = parseInt(t)), Math.abs(t) >= Math.pow(2, 53)))
              throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + t);
            var e = (Array(64).join("0") + Math.abs(t).toString(2)).slice(-64);
            t < 0 && (e = this.twosCompliment(e));
            for (var r = new Buffer(8), n = 0; n < 8; n++) {
              var i = parseInt(e.substr(8 * n, 8), 2);
              r.writeUInt8(i, n);
            }
            return r;
          }),
          (i.twosCompliment = function (t) {
            "use strict";
            var e = t.lastIndexOf("1");
            return t.substring(0, e).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0") + t.substring(e);
          }),
          (i.fromDouble = function (t) {
            "use strict";
            var e = new Buffer(8);
            return e.writeDoubleBE(t, 0), e;
          }),
          (i.fromString = function (t) {
            "use strict";
            var e = Buffer.byteLength(t),
              r = new Buffer(e);
            return r.write(t), r;
          }),
          (i.toLong = function (t) {
            "use strict";
            for (var e = 1, r = "", n = 0; n < 8; n++) r += (Array(8).join("0") + t.readUInt8(n).toString(2)).slice(-8);
            "1" === r[0] && ((e = -1), (r = this.twosCompliment(r)));
            var i = r.indexOf("1");
            if (-1 !== i && i < 10) throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
            return parseInt(r, 2) * e;
          }),
          (t.exports = o);
      },
      21293: (t) => {
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
          (e.Method.sendException = function (t, r, n, i) {
            "use strict";
            var s;
            i ||
              (n instanceof e.TApplicationException
                ? (i = e.TApplicationException)
                : n instanceof e.TException
                ? (i = e.TException)
                : ((i = e.TApplicationException),
                  (s = {}),
                  n && (n.message && (s.message = n.message + ""), null != n.code && Number.isFinite(s.code) && (s.code = n.code)),
                  (n = new e.TApplicationException(s)))),
              t.writeMessageBegin("", e.MessageType.EXCEPTION, r),
              i.write(t, n),
              t.writeMessageEnd(),
              t.flush();
          }),
          (e.Method.prototype.sendRequest = function (t, r, n, i) {
            "use strict";
            t.writeMessageBegin(this.alias, e.MessageType.CALL, r),
              this.args.write(t, n),
              t.writeMessageEnd(),
              t.flush(
                function (t, e) {
                  t ? i(t) : this.processResponse(e, i);
                }.bind(this)
              );
          }),
          (e.Method.prototype.sendResponse = function (t, r, n) {
            "use strict";
            t.writeMessageBegin(this.alias, e.MessageType.REPLY, r), this.result.write(t, n), t.writeMessageEnd(), t.flush();
          }),
          (e.Method.prototype.processResponse = function (t, r) {
            "use strict";
            var n, i, s, o;
            if (((r = r || e.Method.noop), (n = t.readMessageBegin()).mtype == e.MessageType.EXCEPTION))
              return (s = e.TApplicationException.read(t)), t.readMessageEnd(), void r(s);
            if (n.mtype == e.MessageType.REPLY)
              if (this.alias == n.fname) {
                for (o in ((i = this.result.read(t)), t.readMessageEnd(), this.result.fields))
                  if (0 != o && i[this.result.fields[o].alias]) return void r((s = i[this.result.fields[o].alias]));
                r(null, i.returnValue);
              } else r((s = Error("Unrecognized method name. Expected [" + this.alias + "] Received [" + n.fname + "]")));
            else r((s = Error("Client expects REPLY but received unsupported message type: " + n.mtype)));
          }),
          (e.List = {}),
          (e.List.define = function (t, r, n) {
            "use strict";
            var i = function () {
              return [];
            };
            return (
              "string" != typeof t && ((n = r), (r = t), (t = "anonymous")),
              (i.alias = t),
              (i.type = r),
              (i.def = n),
              (i.read = e.List.read.bind(null, i)),
              (i.write = e.List.write.bind(null, i)),
              i
            );
          }),
          (e.List.read = function (t, r) {
            "use strict";
            var n = new t(),
              i = r.readListBegin();
            return e.List.readEntries(t, n, r, i.size), r.readListEnd(), n;
          }),
          (e.List.readEntries = function (t, e, r, n) {
            "use strict";
            var i;
            for (i = 0; i < n; i++) null != t.def ? e.push(t.def.read(r)) : e.push(r.readType(t.type));
          }),
          (e.List.write = function (t, e, r) {
            "use strict";
            var n,
              i,
              s = r.length;
            for (e.writeListBegin(t.type, s), i = 0; i < s; i++) (n = r[i]), t.def ? t.def.write(e, n) : e.writeType(t.type, n);
            e.writeListEnd();
          }),
          (e.Set = {}),
          (e.Set.define = function (t, r, n) {
            "use strict";
            var i = function () {
              return [];
            };
            return (
              "string" != typeof t && ((n = r), (r = t), (t = "anonymous")),
              (i.alias = t),
              (i.type = r),
              (i.def = n),
              (i.read = e.Set.read.bind(null, i)),
              (i.write = e.Set.write.bind(null, i)),
              i
            );
          }),
          (e.Set.read = function (t, r) {
            "use strict";
            var n = new t(),
              i = r.readSetBegin();
            return e.Set.readEntries(t, n, r, i.size), r.readSetEnd(), n;
          }),
          (e.Set.readEntries = function (t, e, r, n) {
            "use strict";
            var i;
            for (i = 0; i < n; i++) null != t.def ? e.push(t.def.read(r)) : e.push(r.readType(t.type));
          }),
          (e.Set.write = function (t, e, r) {
            "use strict";
            var n,
              i,
              s = r.length;
            for (e.writeSetBegin(t.type, s), i = 0; i < s; i++) (n = r[i]), t.def ? t.def.write(e, n) : e.writeType(t.type, n);
            e.writeSetEnd();
          }),
          (e.Map = {}),
          (e.Map.define = function (t, r, n, i) {
            "use strict";
            var s = function () {
              return {};
            };
            return (
              "string" != typeof t && ((i = n), (n = r), (r = t), (t = "anonymous")),
              (s.alias = t),
              (s.ktype = r),
              (s.vtype = n),
              (s.vdef = i),
              (s.read = e.Map.read.bind(null, s)),
              (s.write = e.Map.write.bind(null, s)),
              s
            );
          }),
          (e.Map.read = function (t, r) {
            "use strict";
            var n = new t(),
              i = r.readMapBegin();
            return e.Map.readEntries(t, n, r, i.size), r.readMapEnd(), n;
          }),
          (e.Map.readEntries = function (t, e, r, n) {
            "use strict";
            var i, s;
            for (i = 0; i < n; i++) (s = r.readType(t.ktype)), null != t.vdef ? (e[s] = t.vdef.read(r)) : (e[s] = r.readType(t.vtype));
          }),
          (e.Map.write = function (t, e, r) {
            "use strict";
            var n,
              i,
              s,
              o = Object.keys(r),
              a = o.length;
            for (e.writeMapBegin(t.ktype, t.vtype, a), s = 0; s < a; s++)
              (n = o[s]), e.writeType(t.ktype, n), (i = r[n]), t.vdef ? t.vdef.write(e, i) : e.writeType(t.vtype, i);
            e.writeMapEnd();
          }),
          (e.Struct = {}),
          (e.Struct.define = function (t, r) {
            "use strict";
            var n,
              i,
              s = {};
            for (n in (r = r || {})) (i = r[n]), (s[i.alias] = i.defaultValue || null);
            var o = function (t) {
              return (t = "object" == typeof t ? t : {}), e.defaults({}, t, s);
            };
            return (
              (o.alias = t),
              (o.fields = r),
              (o.defaultValues = s),
              (o.read = e.Struct.read.bind(null, o)),
              (o.write = e.Struct.write.bind(null, o)),
              (o.values = e.Struct.values.bind(null, o)),
              (o.setByDef = e.Struct.setByDef.bind(null, o)),
              o
            );
          }),
          (e.Struct.setByDef = function (t, e, r) {
            "use strict";
            var n,
              i,
              s = t.fields,
              o = !1;
            for (n in s)
              if ((i = s[n]).def && r instanceof i.def) {
                (e[i.alias] = r), (o = !0);
                break;
              }
            return o;
          }),
          (e.Struct.values = function (t, e) {
            "use strict";
            var r,
              n,
              i,
              s = t.fields,
              o = Object.keys(t.fields),
              a = new Array(o.length);
            for (i = 0; i < o.length; i++) null != (n = s[(r = o[i])].index) ? (a[n] = e[s[r].alias]) : (a[i] = e[s[r].alias]);
            return a;
          }),
          (e.Struct.read = function (t, r) {
            "use strict";
            var n = new t();
            return r.readStructBegin(), e.Struct.readFields(t, r, n), r.readStructEnd(), n;
          }),
          (e.Struct.readFields = function (t, r, n) {
            "use strict";
            for (var i, s; ; ) {
              if ((i = r.readFieldBegin()).ftype == e.Type.STOP) return;
              (s = t.fields[i.fid]) && e.equals(i.ftype, s.type)
                ? s.def
                  ? (n[s.alias] = s.def.read(r))
                  : (n[s.alias] = r.readType(s.type))
                : r.skip(i.ftype),
                r.readFieldEnd();
            }
          }),
          (e.Struct.write = function (t, r, n) {
            "use strict";
            var i, s, o;
            for (i in (r.writeStructBegin(t.alias), t.fields))
              null != (o = n[(s = t.fields[i]).alias]) &&
                (r.writeFieldBegin(s.alias, e.serializedType(s.type), i),
                s.def ? new s.def.write(r, o) : r.writeType(s.type, o),
                r.writeFieldEnd());
            r.writeFieldStop(), r.writeStructEnd();
          }),
          (e.Exception = {}),
          (e.Exception.define = function (t, r) {
            "use strict";
            var n,
              i,
              s = {};
            for (n in (r = r || {})) (i = r[n]), (s[i.alias] = i.defaultValue || null);
            var o = function (t) {
              var r = {};
              "object" == typeof t && (r = t),
                e.defaults(this, r, s),
                "string" == typeof t ? (this.message = t) : t instanceof Error && (this.message = t.message);
            };
            return (
              (o.alias = t),
              (o.fields = r),
              (o.defaultValues = s),
              (o.read = e.Struct.read.bind(null, o)),
              (o.write = e.Struct.write.bind(null, o)),
              o
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
            var n, i, s, o, a;
            try {
              if ((o = t.readMessageBegin()).mtype != e.MessageType.CALL)
                throw new e.TException("Server expects CALL but received unsupported message type: " + o.mtype);
              if (null == (n = this.methods[o.fname])) throw new e.TException("Unrecognized method name: " + o.fname);
              (a = (i = n.def).args.read(t)),
                (s = new i.result()),
                n.fn.apply(
                  null,
                  i.args.values(a).concat([
                    function (t) {
                      (s.returnValue = t), i.sendResponse(r, o.seqid, s);
                    },
                    function (t) {
                      var n = o ? o.seqid : -1;
                      s && i.result.setByDef(s, t) ? i.sendResponse(r, o.seqid, s) : e.Method.sendException(r, n, t);
                    }
                  ])
                );
            } catch (t) {
              console.log(t);
              var u = o ? o.seqid : -1;
              s && i.result.setByDef(s, t) ? i.sendResponse(r, o.seqid, s) : e.Method.sendException(r, u, t);
            }
          }),
          (t.exports = e);
      },
      38722: (t, e, r) => {
        r(21293);
        var n,
          i = function () {
            (this.buffer = []), (this.readOffset = 0);
          };
        ((n = i.prototype).reset = function () {
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
          (t.exports = i);
      },
      66895: (t, e, r) => {
        var n = r(2523),
          i = r(10579);
        function s(t, e) {
          "use strict";
          (this.input = new i()), (this.url = t), (this.opts = e || {});
        }
        (s.prototype.open = function () {}),
          (s.prototype.close = function () {}),
          (s.prototype.read = function (t) {
            throw Error("BinaryFetchHttpTransport object does not support reads");
          }),
          (s.prototype.write = function (t) {
            this.input.write(t);
          }),
          (s.prototype.clear = function () {
            this.input.clear();
          }),
          (s.prototype.flush = function (t) {
            const e = "application/x-thrift";
            var r = { "Content-Type": e, Accept: e };
            if (this.opts.headers) for (var s in this.opts.headers) r[s] = this.opts.headers[s];
            this.input.flush();
            const o = new Blob([this.input.buffer], { type: e });
            fetch(this.url, { method: "post", headers: r, body: o, credentials: this.opts.noCredentials ? "omit" : "include" })
              .then(async (e) => {
                if (t)
                  if (200 === e.status)
                    e.arrayBuffer()
                      .then((e) => {
                        t(null, new i(e));
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
          (t.exports = s);
      },
      40594: (t, e, r) => {
        var n = r(10579),
          i = function (t) {
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
              for (var e = this.input.buffer, r = e.length, n = [], i = 0; i < r; i++) n.push(String.fromCharCode(e[i]));
              this.notify(window.btoa(n.join(""))), this.reset();
            }),
            (t.send = function (t, e, r, n) {}),
            (t.receive = function (t) {
              for (var e = window.atob(t), r = e.length, i = new Uint8Array(r), s = 0; s < r; s++) i[s] = e.charCodeAt(s);
              this.received = new n(i.buffer);
            });
        })(i.prototype),
          (t.exports = i);
      },
      2523: (t) => {
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
      5122: (t) => {
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
      10579: (t) => {
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
      38935: (t, e, r) => {
        var n = r(39807),
          i = r(2523),
          s = r(72693),
          o = r(49069),
          a = r(8575);
        function u(t, e, r, i, s) {
          "use strict";
          var o = a.parse(t);
          (this.hostname = o.hostname),
            (this.port = o.port),
            (this.path = o.path),
            (this.url = o.href),
            (this.quiet = !!e),
            (this.insecure = !!r),
            (this.additionalHeaders = i),
            (this.agent = s),
            (this.input = new n());
        }
        (u.prototype.open = function () {}),
          (u.prototype.close = function () {}),
          (u.prototype.read = function (t) {
            "use strict";
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (u.prototype.write = function (t) {
            "use strict";
            this.input.write(t);
          }),
          (u.prototype.clear = function () {
            "use strict";
            this.input.clear();
          }),
          (u.prototype.flush = function (t) {
            "use strict";
            var e = this,
              r = Object.assign({ "Content-Type": "application/x-thrift", Accept: "application/x-thrift" }, this.additionalHeaders),
              a = { hostname: this.hostname, port: this.port, path: this.path, method: "POST", headers: r };
            this.agent && (a.agent = this.agent);
            var u = this.url,
              c = (this.insecure ? s : o).request(a, function (r) {
                var s = [];
                if (200 !== r.statusCode) {
                  var o = "Error in Thrift response. status:" + r.statusCode + "headers: " + JSON.stringify(r.headers);
                  if ((e.log(o), t)) return void t(new i.TransportException(o, new i.HTTPException("", u, r.statusCode, r.headers)));
                }
                r.on("data", function (t) {
                  s.push(t);
                }),
                  r.on("end", function () {
                    var e = Buffer.concat(s);
                    t && t(null, new n(e));
                  });
              });
            c.on("error", function (r) {
              e.log("Error making Thrift HTTP request: " + r),
                t &&
                  t(
                    new i.TransportException(r.message ? r.message : "Thrift request failed", new i.NetworkException(JSON.stringify(r), u))
                  );
            }),
              this.input.flush(),
              c.write(this.input.buffer),
              c.end(),
              this.clear();
          }),
          (u.prototype.log = function (t) {
            "use strict";
            this.quiet || console.log(t);
          }),
          (t.exports = u);
      },
      39807: (t) => {
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
      45099: (t) => {
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
      63950: (t, e, r) => {
        var n = r(2523),
          i = r(10579);
        function s(t, e) {
          (this.input = new i()), (this.url = t), (this.opts = e || {});
        }
        (s.prototype.open = function () {}),
          (s.prototype.close = function () {}),
          (s.prototype.read = function (t) {
            throw Error("BinaryHttpTransport object does not support reads");
          }),
          (s.prototype.write = function (t) {
            this.input.write(t);
          }),
          (s.prototype.clear = function () {
            this.input.clear();
          }),
          (s.prototype.flush = function (t) {
            var e;
            (e = new XMLHttpRequest()).open("POST", this.url, !0),
              (e.withCredentials = !this.opts.noCredentials),
              e.setRequestHeader("Content-Type", "application/x-thrift"),
              e.setRequestHeader("Accept", "application/x-thrift"),
              (e.responseType = "arraybuffer");
            var r = this.opts.headers || {};
            for (var s in r) {
              var o = r[s];
              e.setRequestHeader(s, o);
            }
            var a = this.url;
            (e.onload = function (r) {
              if (t)
                if (200 === e.status) t(null, new i(e.response));
                else {
                  const r = e
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/),
                    i = {};
                  r.forEach(function (t) {
                    var e = t.split(": "),
                      r = e.shift(),
                      n = e.join(": ");
                    i[r] = n;
                  }),
                    t(new n.TransportException("Non 200 http response", new n.HTTPException("Non 200 http response", a, e.status, i)));
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
          (t.exports = s);
      },
      30640: (t, e, r) => {
        var n = r(45099);
        function i(t, e) {
          (this.input = new n()), (this.url = t), (this.opts = e || {});
        }
        (i.prototype.open = function () {}),
          (i.prototype.close = function () {}),
          (i.prototype.read = function (t) {
            throw Error("TextHttpTransport object does not support reads");
          }),
          (i.prototype.write = function (t) {
            this.input.write(t);
          }),
          (i.prototype.clear = function () {
            this.input.clear();
          }),
          (i.prototype.flush = function (t) {
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
          (t.exports = i);
      },
      88495: (module, exports, __webpack_require__) => {
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
              for (var n, i, s = 0, o = t.length, a = this.blocks, u = this.buffer8; s < o; ) {
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
                  if (ARRAY_BUFFER) for (i = this.start; s < o && i < 64; ++s) u[i++] = t[s];
                  else for (i = this.start; s < o && i < 64; ++s) a[i >> 2] |= t[s] << SHIFT[3 & i++];
                else if (ARRAY_BUFFER)
                  for (i = this.start; s < o && i < 64; ++s)
                    (n = t.charCodeAt(s)) < 128
                      ? (u[i++] = n)
                      : n < 2048
                      ? ((u[i++] = 192 | (n >> 6)), (u[i++] = 128 | (63 & n)))
                      : n < 55296 || n >= 57344
                      ? ((u[i++] = 224 | (n >> 12)), (u[i++] = 128 | ((n >> 6) & 63)), (u[i++] = 128 | (63 & n)))
                      : ((n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(++s)))),
                        (u[i++] = 240 | (n >> 18)),
                        (u[i++] = 128 | ((n >> 12) & 63)),
                        (u[i++] = 128 | ((n >> 6) & 63)),
                        (u[i++] = 128 | (63 & n)));
                else
                  for (i = this.start; s < o && i < 64; ++s)
                    (n = t.charCodeAt(s)) < 128
                      ? (a[i >> 2] |= n << SHIFT[3 & i++])
                      : n < 2048
                      ? ((a[i >> 2] |= (192 | (n >> 6)) << SHIFT[3 & i++]), (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                      : n < 55296 || n >= 57344
                      ? ((a[i >> 2] |= (224 | (n >> 12)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                      : ((n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(++s)))),
                        (a[i >> 2] |= (240 | (n >> 18)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 12) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]));
                (this.lastByteIndex = i),
                  (this.bytes += i - this.start),
                  i >= 64 ? ((this.start = i - 64), this.hash(), (this.hashed = !0)) : (this.start = i);
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
                i,
                s,
                o = this.blocks;
              this.first
                ? (e =
                    ((((e =
                      ((t = ((((t = o[0] - 680876937) << 7) | (t >>> 25)) - 271733879) << 0) ^
                        ((r =
                          ((((r =
                            (-271733879 ^
                              ((n = ((((n = (-1732584194 ^ (2004318071 & t)) + o[1] - 117830708) << 12) | (n >>> 20)) + t) << 0) &
                                (-271733879 ^ t))) +
                            o[2] -
                            1126478375) <<
                            17) |
                            (r >>> 15)) +
                            n) <<
                          0) &
                          (n ^ t))) +
                      o[3] -
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
                      ((t = ((((t += ((n = this.h3) ^ (e & (r ^ n))) + o[0] - 680876936) << 7) | (t >>> 25)) + e) << 0) ^
                        ((r =
                          ((((r +=
                            (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + o[1] - 389564586) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                            o[2] +
                            606105819) <<
                            17) |
                            (r >>> 15)) +
                            n) <<
                          0) &
                          (n ^ t))) +
                      o[3] -
                      1044525330) <<
                      22) |
                      (e >>> 10)) +
                      r) <<
                    0)),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + o[4] - 176418897) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + o[5] + 1200080426) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          o[6] -
                          1473231341) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    o[7] -
                    45705983) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + o[8] + 1770035416) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + o[9] - 1958414417) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          o[10] -
                          42063) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    o[11] -
                    1990404162) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((t = ((((t += (n ^ (e & (r ^ n))) + o[12] + 1804603682) << 7) | (t >>> 25)) + e) << 0) ^
                      ((r =
                        ((((r +=
                          (e ^ ((n = ((((n += (r ^ (t & (e ^ r))) + o[13] - 40341101) << 12) | (n >>> 20)) + t) << 0) & (t ^ e))) +
                          o[14] -
                          1502002290) <<
                          17) |
                          (r >>> 15)) +
                          n) <<
                        0) &
                        (n ^ t))) +
                    o[15] +
                    1236535329) <<
                    22) |
                    (e >>> 10)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + o[1] - 165796510) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        o[6] -
                        1069501632) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + o[11] + 643717713) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    o[0] -
                    373897302) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + o[5] - 701558691) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        o[10] +
                        38016083) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + o[15] - 660478335) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    o[4] -
                    405537848) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + o[9] + 568446438) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        o[14] -
                        1019803690) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + o[3] - 187363961) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    o[8] +
                    1163531501) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ (r & ((t = ((((t += (r ^ (n & (e ^ r))) + o[13] - 1444681467) << 5) | (t >>> 27)) + e) << 0) ^ e))) +
                        o[2] -
                        51403784) <<
                        9) |
                        (n >>> 23)) +
                        t) <<
                      0) ^
                      (t & ((r = ((((r += (t ^ (e & (n ^ t))) + o[7] + 1735328473) << 14) | (r >>> 18)) + n) << 0) ^ n))) +
                    o[12] -
                    1926607734) <<
                    20) |
                    (e >>> 12)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((s =
                      (n =
                        ((((n +=
                          ((i = e ^ r) ^ (t = ((((t += (i ^ n) + o[5] - 378558) << 4) | (t >>> 28)) + e) << 0)) + o[8] - 2022574463) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (s ^ e) + o[11] + 1839030562) << 16) | (r >>> 16)) + n) << 0)) +
                    o[14] -
                    35309556) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((s =
                      (n =
                        ((((n +=
                          ((i = e ^ r) ^ (t = ((((t += (i ^ n) + o[1] - 1530992060) << 4) | (t >>> 28)) + e) << 0)) + o[4] + 1272893353) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (s ^ e) + o[7] - 155497632) << 16) | (r >>> 16)) + n) << 0)) +
                    o[10] -
                    1094730640) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((s =
                      (n =
                        ((((n +=
                          ((i = e ^ r) ^ (t = ((((t += (i ^ n) + o[13] + 681279174) << 4) | (t >>> 28)) + e) << 0)) + o[0] - 358537222) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (s ^ e) + o[3] - 722521979) << 16) | (r >>> 16)) + n) << 0)) +
                    o[6] +
                    76029189) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((s =
                      (n =
                        ((((n +=
                          ((i = e ^ r) ^ (t = ((((t += (i ^ n) + o[9] - 640364487) << 4) | (t >>> 28)) + e) << 0)) + o[12] - 421815835) <<
                          11) |
                          (n >>> 21)) +
                          t) <<
                        0) ^ t) ^
                      (r = ((((r += (s ^ e) + o[15] + 530742520) << 16) | (r >>> 16)) + n) << 0)) +
                    o[2] -
                    995338651) <<
                    23) |
                    (e >>> 9)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + o[0] - 198630844) << 6) | (t >>> 26)) + e) << 0) | ~r)) + o[7] + 1126891415) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + o[14] - 1416354905) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    o[5] -
                    57434055) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + o[12] + 1700485571) << 6) | (t >>> 26)) + e) << 0) | ~r)) +
                        o[3] -
                        1894986606) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + o[10] - 1051523) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    o[1] -
                    2054922799) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + o[8] + 1873313359) << 6) | (t >>> 26)) + e) << 0) | ~r)) + o[15] - 30611744) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + o[6] - 1560198380) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    o[13] +
                    1309151649) <<
                    21) |
                    (e >>> 11)) +
                    r) <<
                  0),
                (e =
                  ((((e +=
                    ((n =
                      ((((n +=
                        (e ^ ((t = ((((t += (r ^ (e | ~n)) + o[4] - 145523070) << 6) | (t >>> 26)) + e) << 0) | ~r)) +
                        o[11] -
                        1120210379) <<
                        10) |
                        (n >>> 22)) +
                        t) <<
                      0) ^
                      ((r = ((((r += (t ^ (n | ~e)) + o[2] + 718787259) << 15) | (r >>> 17)) + n) << 0) | ~t)) +
                    o[9] -
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
              for (var t, e, r, n = "", i = this.array(), s = 0; s < 15; )
                (t = i[s++]),
                  (e = i[s++]),
                  (r = i[s++]),
                  (n +=
                    BASE64_ENCODE_CHAR[t >>> 2] +
                    BASE64_ENCODE_CHAR[63 & ((t << 4) | (e >>> 4))] +
                    BASE64_ENCODE_CHAR[63 & ((e << 2) | (r >>> 6))] +
                    BASE64_ENCODE_CHAR[63 & r]);
              return (t = i[s]), n + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[(t << 4) & 63] + "==");
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
      62587: (t) => {
        "use strict";
        function e(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        t.exports = function (t, r, n, i) {
          (r = r || "&"), (n = n || "=");
          var s = {};
          if ("string" != typeof t || 0 === t.length) return s;
          var o = /\+/g;
          t = t.split(r);
          var a = 1e3;
          i && "number" == typeof i.maxKeys && (a = i.maxKeys);
          var u = t.length;
          a > 0 && u > a && (u = a);
          for (var c = 0; c < u; ++c) {
            var h,
              p,
              l,
              f,
              d = t[c].replace(o, "%20"),
              y = d.indexOf(n);
            y >= 0 ? ((h = d.substr(0, y)), (p = d.substr(y + 1))) : ((h = d), (p = "")),
              (l = decodeURIComponent(h)),
              (f = decodeURIComponent(p)),
              e(s, l) ? (Array.isArray(s[l]) ? s[l].push(f) : (s[l] = [s[l], f])) : (s[l] = f);
          }
          return s;
        };
      },
      12361: (t) => {
        "use strict";
        var e = function (t) {
          switch (typeof t) {
            case "string":
              return t;
            case "boolean":
              return t ? "true" : "false";
            case "number":
              return isFinite(t) ? t : "";
            default:
              return "";
          }
        };
        t.exports = function (t, r, n, i) {
          return (
            (r = r || "&"),
            (n = n || "="),
            null === t && (t = void 0),
            "object" == typeof t
              ? Object.keys(t)
                  .map(function (i) {
                    var s = encodeURIComponent(e(i)) + n;
                    return Array.isArray(t[i])
                      ? t[i]
                          .map(function (t) {
                            return s + encodeURIComponent(e(t));
                          })
                          .join(r)
                      : s + encodeURIComponent(e(t[i]));
                  })
                  .join(r)
              : i
              ? encodeURIComponent(e(i)) + n + encodeURIComponent(e(t))
              : ""
          );
        };
      },
      17673: (t, e, r) => {
        "use strict";
        (e.decode = e.parse = r(62587)), (e.encode = e.stringify = r(12361));
      },
      52511: function (t, e, r) {
        var n;
        (t = r.nmd(t)),
          (function (i) {
            e && e.nodeType, t && t.nodeType;
            var s = "object" == typeof r.g && r.g;
            s.global !== s && s.window !== s && s.self;
            var o,
              a = 2147483647,
              u = 36,
              c = 26,
              h = 38,
              p = 700,
              l = /^xn--/,
              f = /[^\x20-\x7E]/,
              d = /[\x2E\u3002\uFF0E\uFF61]/g,
              y = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
              m = u - 1,
              g = Math.floor,
              w = String.fromCharCode;
            function v(t) {
              throw RangeError(y[t]);
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
              for (var e, r, n = [], i = 0, s = t.length; i < s; )
                (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < s
                  ? 56320 == (64512 & (r = t.charCodeAt(i++)))
                    ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                    : (n.push(e), i--)
                  : n.push(e);
              return n;
            }
            function T(t) {
              return b(t, function (t) {
                var e = "";
                return t > 65535 && ((e += w((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), e + w(t);
              }).join("");
            }
            function _(t, e) {
              return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
            }
            function I(t, e, r) {
              var n = 0;
              for (t = r ? g(t / p) : t >> 1, t += g(t / e); t > (m * c) >> 1; n += u) t = g(t / m);
              return g(n + ((m + 1) * t) / (t + h));
            }
            function B(t) {
              var e,
                r,
                n,
                i,
                s,
                o,
                h,
                p,
                l,
                f,
                d,
                y = [],
                m = t.length,
                w = 0,
                b = 128,
                E = 72;
              for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n)
                t.charCodeAt(n) >= 128 && v("not-basic"), y.push(t.charCodeAt(n));
              for (i = r > 0 ? r + 1 : 0; i < m; ) {
                for (
                  s = w, o = 1, h = u;
                  i >= m && v("invalid-input"),
                    ((p = (d = t.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : u) >= u ||
                      p > g((a - w) / o)) &&
                      v("overflow"),
                    (w += p * o),
                    !(p < (l = h <= E ? 1 : h >= E + c ? c : h - E));
                  h += u
                )
                  o > g(a / (f = u - l)) && v("overflow"), (o *= f);
                (E = I(w - s, (e = y.length + 1), 0 == s)),
                  g(w / e) > a - b && v("overflow"),
                  (b += g(w / e)),
                  (w %= e),
                  y.splice(w++, 0, b);
              }
              return T(y);
            }
            function A(t) {
              var e,
                r,
                n,
                i,
                s,
                o,
                h,
                p,
                l,
                f,
                d,
                y,
                m,
                b,
                E,
                T = [];
              for (y = (t = S(t)).length, e = 128, r = 0, s = 72, o = 0; o < y; ++o) (d = t[o]) < 128 && T.push(w(d));
              for (n = i = T.length, i && T.push("-"); n < y; ) {
                for (h = a, o = 0; o < y; ++o) (d = t[o]) >= e && d < h && (h = d);
                for (h - e > g((a - r) / (m = n + 1)) && v("overflow"), r += (h - e) * m, e = h, o = 0; o < y; ++o)
                  if (((d = t[o]) < e && ++r > a && v("overflow"), d == e)) {
                    for (p = r, l = u; !(p < (f = l <= s ? 1 : l >= s + c ? c : l - s)); l += u)
                      (E = p - f), (b = u - f), T.push(w(_(f + (E % b), 0))), (p = g(E / b));
                    T.push(w(_(p, 0))), (s = I(r, m, n == i)), (r = 0), ++n;
                  }
                ++r, ++e;
              }
              return T.join("");
            }
            (o = {
              version: "1.3.2",
              ucs2: { decode: S, encode: T },
              decode: B,
              encode: A,
              toASCII: function (t) {
                return E(t, function (t) {
                  return f.test(t) ? "xn--" + A(t) : t;
                });
              },
              toUnicode: function (t) {
                return E(t, function (t) {
                  return l.test(t) ? B(t.slice(4).toLowerCase()) : t;
                });
              }
            }),
              void 0 ===
                (n = function () {
                  return o;
                }.call(e, r, e, t)) || (t.exports = n);
          })();
      },
      8575: (t, e, r) => {
        "use strict";
        var n = r(52511),
          i = r(62502);
        function s() {
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
        (e.parse = v),
          (e.resolve = function (t, e) {
            return v(t, !1, !0).resolve(e);
          }),
          (e.resolveObject = function (t, e) {
            return t ? v(t, !1, !0).resolveObject(e) : e;
          }),
          (e.format = function (t) {
            return i.isString(t) && (t = v(t)), t instanceof s ? t.format() : s.prototype.format.call(t);
          }),
          (e.Url = s);
        var o = /^([a-z0-9.+-]+:)/i,
          a = /:[0-9]*$/,
          u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          h = ["'"].concat(c),
          p = ["%", "/", "?", ";", "#"].concat(h),
          l = ["/", "?", "#"],
          f = /^[+a-z0-9A-Z_-]{0,63}$/,
          d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          y = { javascript: !0, "javascript:": !0 },
          m = { javascript: !0, "javascript:": !0 },
          g = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          w = r(17673);
        function v(t, e, r) {
          if (t && i.isObject(t) && t instanceof s) return t;
          var n = new s();
          return n.parse(t, e, r), n;
        }
        (s.prototype.parse = function (t, e, r) {
          if (!i.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
          var s = t.indexOf("?"),
            a = -1 !== s && s < t.indexOf("#") ? "?" : "#",
            c = t.split(a);
          c[0] = c[0].replace(/\\/g, "/");
          var v = (t = c.join(a));
          if (((v = v.trim()), !r && 1 === t.split("#").length)) {
            var b = u.exec(v);
            if (b)
              return (
                (this.path = v),
                (this.href = v),
                (this.pathname = b[1]),
                b[2]
                  ? ((this.search = b[2]), (this.query = e ? w.parse(this.search.substr(1)) : this.search.substr(1)))
                  : e && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var E = o.exec(v);
          if (E) {
            var S = (E = E[0]).toLowerCase();
            (this.protocol = S), (v = v.substr(E.length));
          }
          if (r || E || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var T = "//" === v.substr(0, 2);
            !T || (E && m[E]) || ((v = v.substr(2)), (this.slashes = !0));
          }
          if (!m[E] && (T || (E && !g[E]))) {
            for (var _, I, B = -1, A = 0; A < l.length; A++) -1 !== (k = v.indexOf(l[A])) && (-1 === B || k < B) && (B = k);
            for (
              -1 !== (I = -1 === B ? v.lastIndexOf("@") : v.lastIndexOf("@", B)) &&
                ((_ = v.slice(0, I)), (v = v.slice(I + 1)), (this.auth = decodeURIComponent(_))),
                B = -1,
                A = 0;
              A < p.length;
              A++
            ) {
              var k;
              -1 !== (k = v.indexOf(p[A])) && (-1 === B || k < B) && (B = k);
            }
            -1 === B && (B = v.length),
              (this.host = v.slice(0, B)),
              (v = v.slice(B)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var R = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!R)
              for (var O = this.hostname.split(/\./), C = ((A = 0), O.length); A < C; A++) {
                var L = O[A];
                if (L && !L.match(f)) {
                  for (var x = "", M = 0, N = L.length; M < N; M++) L.charCodeAt(M) > 127 ? (x += "x") : (x += L[M]);
                  if (!x.match(f)) {
                    var P = O.slice(0, A),
                      D = O.slice(A + 1),
                      U = L.match(d);
                    U && (P.push(U[1]), D.unshift(U[2])), D.length && (v = "/" + D.join(".") + v), (this.hostname = P.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
              R || (this.hostname = n.toASCII(this.hostname));
            var j = this.port ? ":" + this.port : "",
              H = this.hostname || "";
            (this.host = H + j),
              (this.href += this.host),
              R && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== v[0] && (v = "/" + v));
          }
          if (!y[S])
            for (A = 0, C = h.length; A < C; A++) {
              var q = h[A];
              if (-1 !== v.indexOf(q)) {
                var F = encodeURIComponent(q);
                F === q && (F = escape(q)), (v = v.split(q).join(F));
              }
            }
          var z = v.indexOf("#");
          -1 !== z && ((this.hash = v.substr(z)), (v = v.slice(0, z)));
          var X = v.indexOf("?");
          if (
            (-1 !== X
              ? ((this.search = v.substr(X)), (this.query = v.substr(X + 1)), e && (this.query = w.parse(this.query)), (v = v.slice(0, X)))
              : e && ((this.search = ""), (this.query = {})),
            v && (this.pathname = v),
            g[S] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            j = this.pathname || "";
            var W = this.search || "";
            this.path = j + W;
          }
          return (this.href = this.format()), this;
        }),
          (s.prototype.format = function () {
            var t = this.auth || "";
            t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
            var e = this.protocol || "",
              r = this.pathname || "",
              n = this.hash || "",
              s = !1,
              o = "";
            this.host
              ? (s = t + this.host)
              : this.hostname &&
                ((s = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
                this.port && (s += ":" + this.port)),
              this.query && i.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
            var a = this.search || (o && "?" + o) || "";
            return (
              e && ":" !== e.substr(-1) && (e += ":"),
              this.slashes || ((!e || g[e]) && !1 !== s)
                ? ((s = "//" + (s || "")), r && "/" !== r.charAt(0) && (r = "/" + r))
                : s || (s = ""),
              n && "#" !== n.charAt(0) && (n = "#" + n),
              a && "?" !== a.charAt(0) && (a = "?" + a),
              e +
                s +
                (r = r.replace(/[?#]/g, function (t) {
                  return encodeURIComponent(t);
                })) +
                (a = a.replace("#", "%23")) +
                n
            );
          }),
          (s.prototype.resolve = function (t) {
            return this.resolveObject(v(t, !1, !0)).format();
          }),
          (s.prototype.resolveObject = function (t) {
            if (i.isString(t)) {
              var e = new s();
              e.parse(t, !1, !0), (t = e);
            }
            for (var r = new s(), n = Object.keys(this), o = 0; o < n.length; o++) {
              var a = n[o];
              r[a] = this[a];
            }
            if (((r.hash = t.hash), "" === t.href)) return (r.href = r.format()), r;
            if (t.slashes && !t.protocol) {
              for (var u = Object.keys(t), c = 0; c < u.length; c++) {
                var h = u[c];
                "protocol" !== h && (r[h] = t[h]);
              }
              return g[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), (r.href = r.format()), r;
            }
            if (t.protocol && t.protocol !== r.protocol) {
              if (!g[t.protocol]) {
                for (var p = Object.keys(t), l = 0; l < p.length; l++) {
                  var f = p[l];
                  r[f] = t[f];
                }
                return (r.href = r.format()), r;
              }
              if (((r.protocol = t.protocol), t.host || m[t.protocol])) r.pathname = t.pathname;
              else {
                for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()); );
                t.host || (t.host = ""),
                  t.hostname || (t.hostname = ""),
                  "" !== d[0] && d.unshift(""),
                  d.length < 2 && d.unshift(""),
                  (r.pathname = d.join("/"));
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
                var y = r.pathname || "",
                  w = r.search || "";
                r.path = y + w;
              }
              return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
            }
            var v = r.pathname && "/" === r.pathname.charAt(0),
              b = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
              E = b || v || (r.host && t.pathname),
              S = E,
              T = (r.pathname && r.pathname.split("/")) || [],
              _ = ((d = (t.pathname && t.pathname.split("/")) || []), r.protocol && !g[r.protocol]);
            if (
              (_ &&
                ((r.hostname = ""),
                (r.port = null),
                r.host && ("" === T[0] ? (T[0] = r.host) : T.unshift(r.host)),
                (r.host = ""),
                t.protocol &&
                  ((t.hostname = null), (t.port = null), t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)), (t.host = null)),
                (E = E && ("" === d[0] || "" === T[0]))),
              b)
            )
              (r.host = t.host || "" === t.host ? t.host : r.host),
                (r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname),
                (r.search = t.search),
                (r.query = t.query),
                (T = d);
            else if (d.length) T || (T = []), T.pop(), (T = T.concat(d)), (r.search = t.search), (r.query = t.query);
            else if (!i.isNullOrUndefined(t.search))
              return (
                _ &&
                  ((r.hostname = r.host = T.shift()),
                  (R = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                    ((r.auth = R.shift()), (r.host = r.hostname = R.shift()))),
                (r.search = t.search),
                (r.query = t.query),
                (i.isNull(r.pathname) && i.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
                (r.href = r.format()),
                r
              );
            if (!T.length) return (r.pathname = null), r.search ? (r.path = "/" + r.search) : (r.path = null), (r.href = r.format()), r;
            for (
              var I = T.slice(-1)[0],
                B = ((r.host || t.host || T.length > 1) && ("." === I || ".." === I)) || "" === I,
                A = 0,
                k = T.length;
              k >= 0;
              k--
            )
              "." === (I = T[k]) ? T.splice(k, 1) : ".." === I ? (T.splice(k, 1), A++) : A && (T.splice(k, 1), A--);
            if (!E && !S) for (; A--; A) T.unshift("..");
            !E || "" === T[0] || (T[0] && "/" === T[0].charAt(0)) || T.unshift(""), B && "/" !== T.join("/").substr(-1) && T.push("");
            var R,
              O = "" === T[0] || (T[0] && "/" === T[0].charAt(0));
            return (
              _ &&
                ((r.hostname = r.host = O ? "" : T.length ? T.shift() : ""),
                (R = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                  ((r.auth = R.shift()), (r.host = r.hostname = R.shift()))),
              (E = E || (r.host && T.length)) && !O && T.unshift(""),
              T.length ? (r.pathname = T.join("/")) : ((r.pathname = null), (r.path = null)),
              (i.isNull(r.pathname) && i.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.auth = t.auth || r.auth),
              (r.slashes = r.slashes || t.slashes),
              (r.href = r.format()),
              r
            );
          }),
          (s.prototype.parseHost = function () {
            var t = this.host,
              e = a.exec(t);
            e && (":" !== (e = e[0]) && (this.port = e.substr(1)), (t = t.substr(0, t.length - e.length))), t && (this.hostname = t);
          });
      },
      62502: (t) => {
        "use strict";
        t.exports = {
          isString: function (t) {
            return "string" == typeof t;
          },
          isObject: function (t) {
            return "object" == typeof t && null !== t;
          },
          isNull: function (t) {
            return null === t;
          },
          isNullOrUndefined: function (t) {
            return null == t;
          }
        };
      },
      72693: () => {},
      49069: () => {}
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var r = (__webpack_module_cache__[t] = { id: t, loaded: !1, exports: {} });
    return __webpack_modules__[t].call(r.exports, r, r.exports, __webpack_require__), (r.loaded = !0), r.exports;
  }
  (__webpack_require__.amdO = {}),
    (__webpack_require__.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return __webpack_require__.d(e, { a: e }), e;
    }),
    (__webpack_require__.d = (t, e) => {
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
    (__webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (__webpack_require__.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t));
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var t = __webpack_require__(88495),
      e = __webpack_require__.n(t),
      r = { isFirefox: !1, isSafari: !1, isEdge: !1, isChrome: !0 };
    function n(t) {
      var e = "";
      return (
        t.forEach(function (t) {
          e += t.date + " " + t.lvl + ": " + t.val + " \n";
        }),
        e
      );
    }
    var i = (function () {
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
            self.onerror = function (r, n, i) {
              e.error("Unhandled error at " + n + ":" + i, r), "function" == typeof t && t(r);
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
                return r + "\n" + t.join("\n") + "\n\n" + n(e.getLogs());
              })
            );
          }),
          (t.prototype.getFormattedLogs = function () {
            var t = this;
            return this.getSystemInfo().then(function (e) {
              return e + " \n\n" + n(t.getLogs());
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
      s = new i();
    (function () {
      function t() {}
      (t.prototype.log = function (t, e) {
        var r, n, i, s;
        if (self.console.debug.apply)
          switch (t) {
            case 3:
              (r = self.console).debug.apply(r, e);
              break;
            case 1:
              (n = self.console).warn.apply(n, e);
              break;
            case 0:
              (i = self.console).error.apply(i, e);
              break;
            default:
              (s = self.console).log.apply(s, e);
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
      __webpack_require__(46463);
    var o,
      a = function () {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          a.apply(this, arguments)
        );
      },
      u = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              u(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      },
      c = function (t, e) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = e.call(t, o);
                } catch (t) {
                  (s = [6, t]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      };
    !(function (t) {
      (t.REQUEST = "EN_request"), (t.RESPONSE = "EN_response"), (t.ERROR = "__error__");
    })(o || (o = {})),
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
            return new Promise(function (i, s) {
              var a = n.channelName + "-" + ++n.uniqueMessageID,
                u = { type: o.REQUEST, messageID: a, name: e, data: r };
              n.pendingMessages.set(a, { name: e, resolve: i, reject: s }), t.postMessage(u, "*");
            });
          }),
          (t.prototype.handleMessage = function (t) {
            return u(this, void 0, void 0, function () {
              return c(this, function (e) {
                if (!t.data) return [2];
                switch (t.data.type) {
                  case o.REQUEST:
                    return [2, this.handleRequest(t.data, t.source)];
                  case o.RESPONSE:
                    return [2, this.handleResponse(t.data)];
                  default:
                    return [2];
                }
                return [2];
              });
            });
          }),
          (t.prototype.handleRequest = function (t, e) {
            return u(this, void 0, void 0, function () {
              var r, n, i;
              return c(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (r = t.name), (n = this.requestHandlers[r]) ? [4, this.executeRequest(t, n)] : [2];
                  case 1:
                    return (i = s.sent()), e.postMessage(i, "*"), [2];
                }
              });
            });
          }),
          (t.prototype.executeRequest = function (t, e) {
            return u(this, void 0, void 0, function () {
              var r, n, i, s, u;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    (r = t.messageID), (c.label = 1);
                  case 1:
                    return c.trys.push([1, 3, , 4]), [4, e(t.data || {})];
                  case 2:
                    return (n = c.sent()), [2, { type: o.RESPONSE, messageID: r, name, data: n }];
                  case 3:
                    return (
                      (i = c.sent()),
                      console.error(i),
                      (s = i),
                      [2, ((u = {}), (u[o.ERROR] = a(a({}, s), { stack: s.stack, message: s.message })), u)]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.handleResponse = function (t) {
            return u(this, void 0, void 0, function () {
              var e, r, n, i;
              return c(this, function (s) {
                return (
                  (e = t.messageID),
                  (r = this.pendingMessages.get(e))
                    ? ((n = r.resolve),
                      (i = r.reject),
                      t.data && t.data[o.ERROR] && i(t.data[o.ERROR]),
                      n(t.data),
                      this.pendingMessages.delete(e),
                      [2])
                    : [2]
                );
              });
            });
          });
      })();
    var h = [
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
    function p(t) {
      return function (e) {
        var r = t.exec(e);
        return r ? r[1] : e;
      };
    }
    var l = {
        Baidu: {
          regex: /^https?:\/\/([^./]+\.)?baidu\.(com|cn)/i,
          content: "#container",
          searchBox: "input[name=wd]",
          allowedElements: "h3.t a[data-click], .f font[size='-1']",
          bannedSubelements: "span.g, .m, .c",
          titleTrim: p(/(.+)_\u767E\u5EA6\u641C\u7D22/)
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
          titleTrim: p(/(.+)\s\u2013/)
        },
        Google: {
          regex: (function () {
            for (var t = [], e = 0; e < h.length; e++) t[e] = h[e].replace(/\./g, "\\.");
            return new RegExp("^https?://www\\.google(" + t.join("|") + ")", "i");
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
          titleTrim: p(/(.+)\s\u003A/)
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
          titleTrim: p(/\u300C(.+)\u300D/)
        },
        Yandex: {
          regex: /^https?:\/\/([^./]+\.)?yandex\.(com|ru)\/search/,
          content: ".serp-list",
          searchBox: "input[name=text]",
          allowedElements: ".serp-item__title-link, .serp-item__text",
          bannedSubelements: ".serp-item__date",
          titleTrim: p(/(.+)\s+\u2014/)
        }
      },
      f = {
        searchEngines: l,
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
        googleCountryDomains: h
      },
      d = /^http[s]?:\/\/www[.]youtube[.]com\/watch[?][\S]*v=([a-z0-9_-]{5,20})/i,
      y = /[?&]v=([^&#]*)/,
      m = /^(http[s]?|ftp):\/\/.*\.pdf$/i,
      g = /^ftp:\/\/.*/i,
      w = /(http[s]?:)?\/\/.+/;
    function v(t) {
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
          var i = t[n].width * t[n].height;
          i > r && ((e = n), (r = i));
        }
        return e >= 0 ? t[e] : null;
      })(t.document.querySelectorAll("img"));
      return null !== (e = null == r ? void 0 : r.getAttribute("src")) && void 0 !== e ? e : null;
    }
    function S() {
      for (var t = Object.keys(f.searchEngines), e = 0; e < t.length; e++)
        if (f.searchEngines[t[e]].regex.test(document.location.href)) return t[e];
      return null;
    }
    function T() {
      var t = /^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(
        document.location.href
      );
      return t ? t[1] : null;
    }
    function _() {
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
      } else if (T()) return T();
      return null;
    }
    function B() {
      var t = document.title,
        e = S(),
        n = (function () {
          var t = document.querySelector("ytd-watch-flexy:not([hidden]) h1.title.ytd-video-primary-info-renderer");
          if (!t) return null;
          var e = t.textContent;
          return (null == e ? void 0 : e.trim()) + " - YouTube";
        })();
      if ((n && (t = n), e))
        if (f.searchEngines[e].titleTrim) t = f.searchEngines[e].titleTrim(t);
        else {
          var i = t.split(" - ");
          t = t.replace(" - " + i[i.length - 1], "");
        }
      return I() && (t = r.isFirefox ? "PDF - " + document.title : "PDF - " + document.domain), t.trim();
    }
    function A(t) {
      var e,
        r,
        n = null != t ? t : window.location.href,
        i = function () {
          var t = y.exec(n);
          return t && t[1] ? t[1] : null;
        };
      if (d.test(n) && i()) return "https://img.youtube.com/vi/" + i() + "/hqdefault.jpg";
      var s = document.querySelector("[itemtype$='VideoObject'] [itemprop='thumbnailUrl'][href]");
      return s && null !== (r = null === (e = s.getAttribute("href")) || void 0 === e ? void 0 : e.trim()) && void 0 !== r ? r : null;
    }
    var k,
      R = {
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
            i,
            s = "",
            o = A();
          if (o) s = o;
          else {
            var a = document.querySelector("meta[property='twitter:image'][content]");
            a
              ? (s = null !== (t = a.getAttribute("content")) && void 0 !== t ? t : "")
              : (a = document.querySelector("[itemtype$='ImageObject'] [itemprop='url'][src]"))
              ? (s = null !== (e = a.getAttribute("content")) && void 0 !== e ? e : "")
              : (a = document.querySelector("meta[property='og:image'][content]")) &&
                w.test(null !== (r = a.getAttribute("content")) && void 0 !== r ? r : "") &&
                (s = null !== (n = a.getAttribute("content")) && void 0 !== n ? n : "");
          }
          return (
            s.startsWith("://") && (s = document.location.protocol + "//" + s.replace("://", "")),
            s || (s = null !== (i = E(window)) && void 0 !== i ? i : ""),
            s
          );
        },
        getVideoThumbnail: A,
        getText: function t(e, r, n, i, s, o) {
          var a = r;
          if (e.nodeType === Node.TEXT_NODE) {
            var u;
            return (
              (u = o
                ? (function (t) {
                    var e = new RegExp(
                      ["-", "_", "–", "—", "·"].join("|") +
                        "|" +
                        ["\\(", "\\)", "\\[", "\\]", "\\{", "\\}", "《", "》", "（", "）", "【", "】", "「", "」", "»"].join("|") +
                        "|" +
                        ["\\.", "!", ":", ";", '"', "'", ",", "\\?", "。", "、", "！", "，", "：", "…", "“", "”"].join("|") +
                        "|" +
                        ["@", "#", "\\$", "%", "\\^", "&", "\\*", "\\+", "=", "`", "~", "/", "\\\\", "\\|", ">", "<", "●"].join("|"),
                      "g"
                    );
                    return t.replace(e, " ");
                  })(e.textContent.trim()).replace(/\s+/g, " ")
                : e.textContent.trim().replace(/\s+/g, " ")),
              " " === u || "" === u ? a : a + " " + u
            );
          }
          if (e.nodeType === Node.ELEMENT_NODE && -1 === ["script", "noscript", "style"].indexOf(e.nodeName.toLowerCase())) {
            if (/^evernote.+Tools$/.test(e.id)) return a;
            for (var c = 0; c < e.childNodes.length; c++) if ((a = t(e.childNodes[c], a, n, 0, 0, o)).length > n) return a;
          }
          return a.trim();
        },
        getPageAttribures: function () {
          return { title: B(), url: document.location.href };
        },
        getTitle: B,
        getPdfUrl: I,
        isGmailThread: function () {
          if (_()) {
            var t = document.querySelectorAll("span > div > span > [src='images/cleardot.gif']"),
              e = document.querySelectorAll("div.bodycontainer > div.maincontent");
            return !(!t.length && !e.length);
          }
          return !1;
        },
        isGmail: _,
        isImageUrl: function (t) {
          return /\.(gif|jpe?g|tiff|png)$/i.test(t);
        },
        isSearchEngine: S,
        getFavIconUrl: function (t) {
          void 0 === t && (t = document);
          var e = t.querySelector("link[rel~='icon']");
          return e ? e.getAttribute("href") : document.location.origin + "/favicon.ico";
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
          var e = v(t),
            r = b(t),
            n = f.specialCandidates[e] || f.specialCandidates[e + r];
          if (n) {
            var i = t.document || document,
              s = n.find(function (t) {
                return Boolean(i.querySelector(t));
              });
            if (s) return i.querySelector(s);
          }
          return null;
        },
        getPathName: b,
        getSpecialCaseArticle: function (t) {
          void 0 === t && (t = window);
          var e = v(t);
          if (f.specialCases[e]) {
            var r = t.document || document,
              n = f.specialCases[e].join(","),
              i = r.querySelector(n);
            if (i) return i;
          }
          return null;
        },
        getPageHost: v
      },
      O = (function () {
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
              var i = new Image();
              (i.crossOrigin = "Anonymous"),
                (i.onload = function () {
                  var t = e._window.document.createElement("CANVAS"),
                    s = t.getContext("2d");
                  (t.height = i.naturalHeight), (t.width = i.naturalWidth), e._isNotEmptyImage(i) && s.drawImage(i, 0, 0);
                  try {
                    var o = t.toDataURL(e.outputFormat);
                    r(o);
                  } catch (t) {
                    n(t);
                  }
                }),
                (i.onerror = function (t) {
                  n(t);
                }),
                (i.src = t),
                (i.complete || void 0 === i.complete) &&
                  ((i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="), (i.src = t));
            });
          }),
          (t.prototype.convertSync = function (t, e) {
            var r = /^(https?:\/\/.[^\/]+)\/?/.exec(e);
            if (!r || r[1] === this._window.document.location.origin) {
              if (!t.naturalHeight && !t.naturalWidth) return e;
              var n = this._window.document.createElement("CANVAS"),
                i = n.getContext("2d");
              return (
                (n.height = t.naturalHeight || 1), (n.width = t.naturalWidth || 1), i.drawImage(t, 0, 0), n.toDataURL(this.outputFormat)
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
        (this._window = e), (this.converter = new O({ _window: e }));
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
              s.warn("Image download error", t);
            }
          return e;
        }),
        (t.prototype.svgToBase64 = function (t) {
          return new O({ _window: this._window }).convert(t);
        });
    })();
    var C = new Uint8Array(16);
    function L() {
      if (
        !k &&
        !(k =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return k(C);
    }
    const x = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
      M = function (t) {
        return "string" == typeof t && x.test(t);
      };
    for (var N = [], P = 0; P < 256; ++P) N.push((P + 256).toString(16).substr(1));
    const D = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (
          N[t[e + 0]] +
          N[t[e + 1]] +
          N[t[e + 2]] +
          N[t[e + 3]] +
          "-" +
          N[t[e + 4]] +
          N[t[e + 5]] +
          "-" +
          N[t[e + 6]] +
          N[t[e + 7]] +
          "-" +
          N[t[e + 8]] +
          N[t[e + 9]] +
          "-" +
          N[t[e + 10]] +
          N[t[e + 11]] +
          N[t[e + 12]] +
          N[t[e + 13]] +
          N[t[e + 14]] +
          N[t[e + 15]]
        ).toLowerCase();
      if (!M(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    function U(t, e, r) {
      function n(t, n, i, s) {
        if (
          ("string" == typeof t &&
            (t = (function (t) {
              t = unescape(encodeURIComponent(t));
              for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
              return e;
            })(t)),
          "string" == typeof n &&
            (n = (function (t) {
              if (!M(t)) throw TypeError("Invalid UUID");
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
        var o = new Uint8Array(16 + t.length);
        if ((o.set(n), o.set(t, n.length), ((o = r(o))[6] = (15 & o[6]) | e), (o[8] = (63 & o[8]) | 128), i)) {
          s = s || 0;
          for (var a = 0; a < 16; ++a) i[s + a] = o[a];
          return i;
        }
        return D(o);
      }
      try {
        n.name = t;
      } catch (t) {}
      return (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"), n;
    }
    function j(t) {
      return 14 + (((t + 64) >>> 9) << 4) + 1;
    }
    function H(t, e) {
      var r = (65535 & t) + (65535 & e);
      return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function q(t, e, r, n, i, s) {
      return H(((o = H(H(e, t), H(n, s))) << (a = i)) | (o >>> (32 - a)), r);
      var o, a;
    }
    function F(t, e, r, n, i, s, o) {
      return q((e & r) | (~e & n), t, e, i, s, o);
    }
    function z(t, e, r, n, i, s, o) {
      return q((e & n) | (r & ~n), t, e, i, s, o);
    }
    function X(t, e, r, n, i, s, o) {
      return q(e ^ r ^ n, t, e, i, s, o);
    }
    function W(t, e, r, n, i, s, o) {
      return q(r ^ (e | ~n), t, e, i, s, o);
    }
    U("v3", 48, function (t) {
      if ("string" == typeof t) {
        var e = unescape(encodeURIComponent(t));
        t = new Uint8Array(e.length);
        for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r);
      }
      return (function (t) {
        for (var e = [], r = 32 * t.length, n = "0123456789abcdef", i = 0; i < r; i += 8) {
          var s = (t[i >> 5] >>> i % 32) & 255,
            o = parseInt(n.charAt((s >>> 4) & 15) + n.charAt(15 & s), 16);
          e.push(o);
        }
        return e;
      })(
        (function (t, e) {
          (t[e >> 5] |= 128 << e % 32), (t[j(e) - 1] = e);
          for (var r = 1732584193, n = -271733879, i = -1732584194, s = 271733878, o = 0; o < t.length; o += 16) {
            var a = r,
              u = n,
              c = i,
              h = s;
            (r = F(r, n, i, s, t[o], 7, -680876936)),
              (s = F(s, r, n, i, t[o + 1], 12, -389564586)),
              (i = F(i, s, r, n, t[o + 2], 17, 606105819)),
              (n = F(n, i, s, r, t[o + 3], 22, -1044525330)),
              (r = F(r, n, i, s, t[o + 4], 7, -176418897)),
              (s = F(s, r, n, i, t[o + 5], 12, 1200080426)),
              (i = F(i, s, r, n, t[o + 6], 17, -1473231341)),
              (n = F(n, i, s, r, t[o + 7], 22, -45705983)),
              (r = F(r, n, i, s, t[o + 8], 7, 1770035416)),
              (s = F(s, r, n, i, t[o + 9], 12, -1958414417)),
              (i = F(i, s, r, n, t[o + 10], 17, -42063)),
              (n = F(n, i, s, r, t[o + 11], 22, -1990404162)),
              (r = F(r, n, i, s, t[o + 12], 7, 1804603682)),
              (s = F(s, r, n, i, t[o + 13], 12, -40341101)),
              (i = F(i, s, r, n, t[o + 14], 17, -1502002290)),
              (r = z(r, (n = F(n, i, s, r, t[o + 15], 22, 1236535329)), i, s, t[o + 1], 5, -165796510)),
              (s = z(s, r, n, i, t[o + 6], 9, -1069501632)),
              (i = z(i, s, r, n, t[o + 11], 14, 643717713)),
              (n = z(n, i, s, r, t[o], 20, -373897302)),
              (r = z(r, n, i, s, t[o + 5], 5, -701558691)),
              (s = z(s, r, n, i, t[o + 10], 9, 38016083)),
              (i = z(i, s, r, n, t[o + 15], 14, -660478335)),
              (n = z(n, i, s, r, t[o + 4], 20, -405537848)),
              (r = z(r, n, i, s, t[o + 9], 5, 568446438)),
              (s = z(s, r, n, i, t[o + 14], 9, -1019803690)),
              (i = z(i, s, r, n, t[o + 3], 14, -187363961)),
              (n = z(n, i, s, r, t[o + 8], 20, 1163531501)),
              (r = z(r, n, i, s, t[o + 13], 5, -1444681467)),
              (s = z(s, r, n, i, t[o + 2], 9, -51403784)),
              (i = z(i, s, r, n, t[o + 7], 14, 1735328473)),
              (r = X(r, (n = z(n, i, s, r, t[o + 12], 20, -1926607734)), i, s, t[o + 5], 4, -378558)),
              (s = X(s, r, n, i, t[o + 8], 11, -2022574463)),
              (i = X(i, s, r, n, t[o + 11], 16, 1839030562)),
              (n = X(n, i, s, r, t[o + 14], 23, -35309556)),
              (r = X(r, n, i, s, t[o + 1], 4, -1530992060)),
              (s = X(s, r, n, i, t[o + 4], 11, 1272893353)),
              (i = X(i, s, r, n, t[o + 7], 16, -155497632)),
              (n = X(n, i, s, r, t[o + 10], 23, -1094730640)),
              (r = X(r, n, i, s, t[o + 13], 4, 681279174)),
              (s = X(s, r, n, i, t[o], 11, -358537222)),
              (i = X(i, s, r, n, t[o + 3], 16, -722521979)),
              (n = X(n, i, s, r, t[o + 6], 23, 76029189)),
              (r = X(r, n, i, s, t[o + 9], 4, -640364487)),
              (s = X(s, r, n, i, t[o + 12], 11, -421815835)),
              (i = X(i, s, r, n, t[o + 15], 16, 530742520)),
              (r = W(r, (n = X(n, i, s, r, t[o + 2], 23, -995338651)), i, s, t[o], 6, -198630844)),
              (s = W(s, r, n, i, t[o + 7], 10, 1126891415)),
              (i = W(i, s, r, n, t[o + 14], 15, -1416354905)),
              (n = W(n, i, s, r, t[o + 5], 21, -57434055)),
              (r = W(r, n, i, s, t[o + 12], 6, 1700485571)),
              (s = W(s, r, n, i, t[o + 3], 10, -1894986606)),
              (i = W(i, s, r, n, t[o + 10], 15, -1051523)),
              (n = W(n, i, s, r, t[o + 1], 21, -2054922799)),
              (r = W(r, n, i, s, t[o + 8], 6, 1873313359)),
              (s = W(s, r, n, i, t[o + 15], 10, -30611744)),
              (i = W(i, s, r, n, t[o + 6], 15, -1560198380)),
              (n = W(n, i, s, r, t[o + 13], 21, 1309151649)),
              (r = W(r, n, i, s, t[o + 4], 6, -145523070)),
              (s = W(s, r, n, i, t[o + 11], 10, -1120210379)),
              (i = W(i, s, r, n, t[o + 2], 15, 718787259)),
              (n = W(n, i, s, r, t[o + 9], 21, -343485551)),
              (r = H(r, a)),
              (n = H(n, u)),
              (i = H(i, c)),
              (s = H(s, h));
          }
          return [r, n, i, s];
        })(
          (function (t) {
            if (0 === t.length) return [];
            for (var e = 8 * t.length, r = new Uint32Array(j(e)), n = 0; n < e; n += 8) r[n >> 5] |= (255 & t[n / 8]) << n % 32;
            return r;
          })(t),
          8 * t.length
        )
      );
    });
    const Y = function (t, e, r) {
      var n = (t = t || {}).random || (t.rng || L)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        r = r || 0;
        for (var i = 0; i < 16; ++i) e[r + i] = n[i];
        return e;
      }
      return D(n);
    };
    function V(t, e, r, n) {
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
    function G(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
    U("v5", 80, function (t) {
      var e = [1518500249, 1859775393, 2400959708, 3395469782],
        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof t) {
        var n = unescape(encodeURIComponent(t));
        t = [];
        for (var i = 0; i < n.length; ++i) t.push(n.charCodeAt(i));
      } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
      t.push(128);
      for (var s = t.length / 4 + 2, o = Math.ceil(s / 16), a = new Array(o), u = 0; u < o; ++u) {
        for (var c = new Uint32Array(16), h = 0; h < 16; ++h)
          c[h] = (t[64 * u + 4 * h] << 24) | (t[64 * u + 4 * h + 1] << 16) | (t[64 * u + 4 * h + 2] << 8) | t[64 * u + 4 * h + 3];
        a[u] = c;
      }
      (a[o - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
        (a[o - 1][14] = Math.floor(a[o - 1][14])),
        (a[o - 1][15] = (8 * (t.length - 1)) & 4294967295);
      for (var p = 0; p < o; ++p) {
        for (var l = new Uint32Array(80), f = 0; f < 16; ++f) l[f] = a[p][f];
        for (var d = 16; d < 80; ++d) l[d] = G(l[d - 3] ^ l[d - 8] ^ l[d - 14] ^ l[d - 16], 1);
        for (var y = r[0], m = r[1], g = r[2], w = r[3], v = r[4], b = 0; b < 80; ++b) {
          var E = Math.floor(b / 20),
            S = (G(y, 5) + V(E, m, g, w) + v + e[E] + l[b]) >>> 0;
          (v = w), (w = g), (g = G(m, 30) >>> 0), (m = y), (y = S);
        }
        (r[0] = (r[0] + y) >>> 0),
          (r[1] = (r[1] + m) >>> 0),
          (r[2] = (r[2] + g) >>> 0),
          (r[3] = (r[3] + w) >>> 0),
          (r[4] = (r[4] + v) >>> 0);
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
    var J = (function () {
      function t() {
        if (t.instance) return t.instance;
        this.initialize(), (t.instance = this);
      }
      return (
        (t.getInstance = function () {
          return t.instance;
        }),
        (t.prototype.initialize = function () {
          (this.clipId = Y()),
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
        return "success" === J.clipStatus
          ? J
          : {
              clipId: (t = J).clipId,
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
          return J.initialize(), J;
        }),
        (t.reinitializeEvent = function () {
          J.initialize();
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
    const $ = self.chrome || self.browser || chrome || browser,
      Z = (self.topee, $);
    class K {
      getAcceptLanguages() {
        return new Promise((t) => {
          Z.i18n.getAcceptLanguages(t);
        });
      }
      getMessage() {
        return Z.i18n.getMessage(...arguments);
      }
      getUILanguage() {
        return Z.i18n.getUILanguage();
      }
    }
    function Q(t) {
      return (
        (Q =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }),
        Q(t)
      );
    }
    function tt(t, e, r) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== Q(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== Q(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" === Q(e) ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (t[e] = r),
        t
      );
    }
    var et, rt, nt, it;
    function st(t, e) {
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
    function ot(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? st(Object(r), !0).forEach(function (e) {
              tt(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : st(Object(r)).forEach(function (e) {
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
    })(et || (et = {})),
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
      })(rt || (rt = {})),
      (function (t) {
        t.SERIALIZE_ERROR = "SRLZ";
      })(nt || (nt = {})),
      (function (t) {
        (t.SERIALIZE_FAILED = "SERIALIZE_FAILED"),
          (t.NOTE_SIZE_EXCEEDED = "SR_NOTE_SIZE_EXCEEDED"),
          (t.SERIALIZE_TIMEOUT = "SERIALIZE_TIMEOUT");
      })(it || (it = {}));
    const at = ot(
        ot({}, rt),
        {},
        {
          MULTI_SELECT: "multiSelect",
          DEFAULT_CLIP_TYPES: rt.ARTICLE,
          CONTEXT_IMAGE: "contextMenuImage",
          CONTEXT_SCREENSHOT: "contextMenuScreenshot",
          LOGIN: "login"
        }
      ),
      ut = Boolean(!1),
      ct = (Object.freeze({ alert: "alert" }), at.FULL_PAGE, at.BOOKMARK, at.CONTEXT_SCREENSHOT, "hasAnyLoggedInAccount");
    class ht {
      constructor() {
        this.action = ut ? Z.browserAction : Z.action;
      }
      setTitle(t) {
        this.action.setTitle(t);
      }
      get onClicked() {
        return { addListener: (t) => this.action.onClicked.addListener(t), removeListener: (t) => this.action.onClicked.removeListener(t) };
      }
      disable(t) {
        return new Promise((e) => {
          this.action.disable(t, e);
        });
      }
      enable(t) {
        return new Promise((e) => {
          this.action.enable(t, e);
        });
      }
      setIcon(t) {
        let e = t;
        this.action.setIcon({ path: e });
      }
    }
    class pt {
      getURL(t) {
        return Z.runtime.getURL(t);
      }
      getManifest() {
        return Z.runtime.getManifest();
      }
      get onMessage() {
        return { addListener: (t) => Z.runtime.onMessage.addListener(t) };
      }
      sendMessage(t) {
        return Z.runtime.sendMessage(t);
      }
      get isGetManifestApiAvailable() {
        return Boolean(Z && Z.runtime && ((t = Z.runtime.getManifest), Boolean(t && "function" == typeof t)));
        var t;
      }
      reload() {
        if (ut) "undefined" != typeof document && document.location.reload();
        else {
          if (void 0 === Z.runtime.reload) throw new Error("WebClipper cannot be reloaded since you're using kiosk mode");
          Z.runtime.reload();
        }
      }
    }
    const lt = (t) => t && t.then && "function" == typeof t.then;
    class ft {
      captureVisibleTab(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((r, n) => {
          if (!Z.tabs.captureVisibleTab) return void n(new TypeError("Method `captureVisibleTab` not defined."));
          const i = Z.tabs.captureVisibleTab(t, e, r);
          lt(i) && i.then(r).catch(n);
        });
      }
      getZoom(t) {
        return new Promise((e, r) => {
          const n = Z.tabs.getZoom(t, e);
          lt(n) && n.then(e).catch(r);
        });
      }
      query(t) {
        return new Promise((e, r) => {
          const n = Z.tabs.query(t, e);
          lt(n) && n.then(e).catch(r);
        });
      }
      sendMessage(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return new Promise((n, i) => {
          const s = Z.tabs.sendMessage(t, e, r, n);
          lt(s) && s.then(n).catch(i);
        });
      }
      get onUpdated() {
        return { addListener: (t) => Z.tabs.onUpdated.addListener(t), removeListener: (t) => Z.tabs.onUpdated.removeListener(t) };
      }
      get onActivated() {
        return { addListener: (t) => Z.tabs.onActivated.addListener(t), removeListener: (t) => Z.tabs.onActivated.removeListener(t) };
      }
      get onRemoved() {
        return { addListener: (t) => Z.tabs.onRemoved.addListener(t), removeListener: (t) => Z.tabs.onRemoved.removeListener(t) };
      }
      get TAB_ID_NONE() {
        return Z.tabs.TAB_ID_NONE;
      }
      remove(t) {
        Z.tabs.remove(t);
      }
      create(t, e) {
        Z.tabs.create(t, e);
      }
      update(t, e) {
        Z.tabs.update(t, e);
      }
      highlight(t) {
        return new Promise((e, r) => {
          const n = Z.tabs.highlight(t, e);
          lt(n) && n.then(e).catch(r);
        });
      }
      get(t) {
        return new Promise((e, r) => {
          const n = Z.tabs.get(t, e);
          lt(n) && n.then(e).catch(r);
        });
      }
    }
    class dt {
      update(t, e) {
        Z.windows.update(t, e);
      }
      create(t, e) {
        Z.windows.create(t, e);
      }
      get onRemoved() {
        return { addListener: (t) => Z.windows.onRemoved.addListener(t), removeListener: (t) => Z.windows.onRemoved.removeListener(t) };
      }
      remove(t) {
        Z.windows.remove(t);
      }
    }
    class yt {
      constructor() {
        (this._contextMenus = Z.contextMenus || Z.menus),
          (this.onClicked = {
            addListener: (t) => {
              this._contextMenus.onClicked.addListener(t);
            },
            removeListener: (t) => {
              this._contextMenus.onClicked.removeListener(t);
            }
          });
      }
      create() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0;
        return this._contextMenus.create(t, e);
      }
      update(t, e) {
        return new Promise((r) => {
          this._contextMenus.update(t, e, r);
        });
      }
      remove(t) {
        return new Promise((e) => {
          this._contextMenus.remove(t), e();
        });
      }
      removeAll() {
        return new Promise((t) => {
          this._contextMenus.removeAll(t);
        });
      }
    }
    const { isPdfPage: mt } = R,
      gt = /^(http[s]?|ftp):\/\/.+/,
      wt = (t) => !(!t || "string" != typeof t) && gt.test(t),
      vt = (t) => t && t.then && "function" == typeof t.then;
    class bt {
      constructor() {
        (this.contains = this.contains.bind(this)),
          (this.request = this.request.bind(this)),
          (this.requestPermissionPerSite = this.requestPermissionPerSite.bind(this));
      }
      contains(t) {
        return new Promise((e, r) => {
          const n = Z.permissions.contains(t, e);
          vt(n) && n.then(e).catch(r);
        });
      }
      request(t) {
        return new Promise((e, r) => {
          const n = Z.permissions.request(t, e);
          vt(n) && n.then(e).catch(r);
        });
      }
      async requestPermissionPerSite(t, e) {
        return new Promise((r, n) => {
          let i = e.url;
          wt(i) || (wt(t.frameUrl) && (i = t.frameUrl));
          const s = { permissions: ["cookies"], origins: [i, "*://*.evernote.com/*"] };
          return Z.permissions.contains(s, (o) =>
            o
              ? r({ info: t, tab: e })
              : Z.permissions.request(s, (s) => {
                  if (s) return r({ info: t, tab: e });
                  const o = i.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, (t) => {
                    try {
                      const e = new URL(t);
                      return e.origin ? e.origin : "Domain URL";
                    } catch (t) {
                      return "Domain URL";
                    }
                  });
                  return n(new Error(`User has not granted necessary permissions for origin: ${o}`));
                })
          );
        });
      }
    }
    class Et {
      executeScript(t) {
        Z.scripting.executeScript(t);
      }
    }
    const St = new (class {
      constructor() {
        (this.browserAction = new ht()),
          (this.i18n = new K()),
          (this.runtime = new pt()),
          (this.tabs = new ft()),
          (this.windows = new dt()),
          (this.cookies = new (class {
            constructor() {
              this._handleCookieResponse = this._handleCookieResponse.bind(this);
            }
            get(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
              return new Promise(async (r) => {
                const n = e ? { name: t, url: e } : { name: t };
                let i = null;
                e && (i = await this.getSingleCookie(n)), i || (i = await this.find(n)), r(i);
              });
            }
            getSingleCookie(t) {
              return new Promise((e) => {
                Z.cookies.get(t, (t) => {
                  if (Z.runtime.lastError) {
                    const { message: t } = Z.runtime.lastError;
                    return s.warn(t || "Error trying to get single cookie"), void e(null);
                  }
                  e(t);
                });
              });
            }
            find(t) {
              return new Promise((e) => {
                Z.cookies.getAll(t, (r) => {
                  const n = r.find((e) => e.name === t.name);
                  e(n || null);
                });
              });
            }
            set(t, e, r, n, i, s) {
              return new Promise((o) =>
                Z.cookies.set(
                  { name: t, expirationDate: r, path: n, domain: i, secure: Boolean(s), value: e },
                  this._handleCookieResponse(o, `Cookie '${t}' could not be set`)
                )
              );
            }
            delete(t, e) {
              return new Promise(async (r) => {
                const n = `Cookie '${t}' could not be deleted`,
                  i = await this.get(t, e);
                if (!i) return s.warn(n), void r(null);
                const o = this._removeStartingDot(e || this._buildUrl(i.domain, i.path, i.secure));
                Z.cookies.remove({ name: t, url: o }, this._handleCookieResponse(r, n));
              });
            }
            _buildUrl(t, e, r) {
              return `${r ? "https" : "http"}://${this._removeStartingDot(t)}${this._removeStartingDot(e || "")}`;
            }
            _removeStartingDot(t) {
              return t.replace(/^\.*/, "");
            }
            _handleCookieResponse(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              return (r) => {
                if (null === r) {
                  let r = e;
                  return Z.runtime.lastError && Z.runtime.lastError.message && (r = Z.runtime.lastError.message), s.warn(r), void t(null);
                }
                t(r);
              };
            }
          })()),
          (this.contextMenus = new yt()),
          (this.notifications = new (class {
            create(t, e) {
              return new Promise((r) => {
                Z.notifications.create(t, e, r);
              });
            }
            clear(t) {
              return new Promise((e) => {
                Z.notifications.clear(t, e);
              });
            }
            getAll() {
              return new Promise((t) => {
                Z.notifications.getAll(t);
              });
            }
          })()),
          (this.permissions = new bt()),
          (this.menus = this.contextMenus),
          (this.storage = new (class {
            set(t, e) {
              return new Promise((r) => {
                if (ut) localStorage.setItem(t, e), r();
                else {
                  const n = ((t) => {
                    return Array.isArray(t) || ((e = t), "[object Object]" === Object.prototype.toString.call(e)) ? JSON.stringify(t) : t;
                    var e;
                  })(e);
                  Z.storage.local.set({ [t]: n }, r);
                }
              });
            }
            get(t) {
              return new Promise((e) => {
                if (ut) {
                  const r = localStorage.getItem(t);
                  e(r);
                } else
                  Z.storage.local.get(t, (r) => {
                    e(r[t]);
                  });
              });
            }
            setAnyLoggedInAccount(t) {
              return ut ? Promise.resolve() : this.set(ct, Boolean(t));
            }
            hasAnyLoggedInAccount() {
              return ut ? Promise.resolve() : this.get(ct);
            }
          })()),
          (this.scripting = new Et());
      }
      get hasRuntimeApiAvailable() {
        return Boolean(Z && Z.runtime);
      }
      get hasCookiesApiAvailable() {
        return Boolean(Z && Z.cookies);
      }
      get hasNotificationsApiAvailable() {
        return Boolean(Z && Z.notifications);
      }
      get hasRuntimeGetUrlAvailable() {
        return Boolean(Z && Z.runtime && Z.runtime.getURL && "function" == typeof Z.runtime.getURL);
      }
    })();
    function Tt(t, r) {
      let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (!r) throw new Error("JSLocalized comment must always be provided");
      const o = e()(t);
      var a;
      return (
        (n = (a = St) && a.i18n ? a.i18n.getMessage(o) || t : (s.warn(`Tried to localize string ${t}, but no api was available`), t)),
        n.replace(/{(\w+)}/g, (t, e) => i[e] || "")
      );
    }
    navigator.language.replace("-", "_"),
      window.addEventListener("DOMContentLoaded", () => {
        (() => {
          (document.getElementById("welcome").innerText = Tt("Welcome to Evernote Web Clipper!", "Welcome message for consent page")),
            (document.getElementById("bullet_one").innerText = Tt(
              "Capture webpages to be stored in Evernote",
              "First bullet point in consent page that explains what Webclipper does"
            )),
            (document.getElementById("bullet_two").innerText = Tt(
              "Capture urls for the saved webpages",
              "Second bullet point in consent page that explains what Webclipper does"
            )),
            (document.getElementById("decline_text").innerText = Tt(
              "If you decline permissions you will not be able to use Web Clipper. You can disable this service at anytime.",
              "What happens if the users declines this permission"
            )),
            (document.getElementById("allowBtn").innerText = Tt("Allow", "Button to allow the extension")),
            (document.getElementById("declineBtn").innerText = Tt("Decline", "Button to decline terms of use of the extension"));
          const t = Tt("Privacy Policy", "text for link to Privacy Policy"),
            e = Tt("For more information, please see our {privacyLinkLabel}.", "Link to Privacy Policy", { privacyLinkLabel: t });
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
