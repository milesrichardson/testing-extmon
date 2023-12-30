/* ***************** BEGIN MEGA LIMITED CODE REVIEW LICENCE *****************
 *
 * Copyright (c) 2016 by Mega Limited, Auckland, New Zealand
 * All rights reserved.
 *
 * This licence grants you the rights, and only the rights, set out below,
 * to access and review Mega's code. If you take advantage of these rights,
 * you accept this licence. If you do not accept the licence,
 * do not access the code.
 *
 * Words used in the Mega Limited Terms of Service [https://mega.nz/terms]
 * have the same meaning in this licence. Where there is any inconsistency
 * between this licence and those Terms of Service, these terms prevail.
 *
 * 1. This licence does not grant you any rights to use Mega's name, logo,
 *    or trademarks and you must not in any way indicate you are authorised
 *    to speak on behalf of Mega.
 *
 * 2. If you issue proceedings in any jurisdiction against Mega because you
 *    consider Mega has infringed copyright or any patent right in respect
 *    of the code (including any joinder or counterclaim), your licence to
 *    the code is automatically terminated.
 *
 * 3. THE CODE IS MADE AVAILABLE "AS-IS" AND WITHOUT ANY EXPRESS OF IMPLIED
 *    GUARANTEES AS TO FITNESS, MERCHANTABILITY, NON-INFRINGEMENT OR OTHERWISE.
 *    IT IS NOT BEING PROVIDED IN TRADE BUT ON A VOLUNTARY BASIS ON OUR PART
 *    AND YOURS AND IS NOT MADE AVAILABE FOR CONSUMER USE OR ANY OTHER USE
 *    OUTSIDE THE TERMS OF THIS LICENCE. ANYONE ACCESSING THE CODE SHOULD HAVE
 *    THE REQUISITE EXPERTISE TO SECURE THEIR OWN SYSTEM AND DEVICES AND TO
 *    ACCESS AND USE THE CODE FOR REVIEW PURPOSES. YOU BEAR THE RISK OF
 *    ACCESSING AND USING IT. IN PARTICULAR, MEGA BEARS NO LIABILITY FOR ANY
 *    INTERFERENCE WITH OR ADVERSE EFFECT ON YOUR SYSTEM OR DEVICES AS A
 *    RESULT OF YOUR ACCESSING AND USING THE CODE.
 *
 * Read the full and most up-to-date version at:
 *    https://github.com/meganz/webclient/blob/master/LICENCE.md
 *
 * ***************** END MEGA LIMITED CODE REVIEW LICENCE ***************** */

function ezBuffer(size) {
  var obj = new Uint8Array(size),
    buffer = new DataView(obj.buffer),
    offset = 0;
  return {
    debug: function () {
      console.error(["DEBUG", offset, obj.length]);
    },
    getArray: function () {
      var bytes = [];
      $.each(obj, function (i, val) {
        bytes.push(val);
      });
      return bytes;
    },
    getBytes: function () {
      return obj;
    },
    appendBytes: function (text) {
      var isArray = typeof text != "string";
      for (var i = text.length; i--; ) {
        if (isArray) {
          obj[offset + i] = text[i];
        } else {
          // We assume it is an string
          obj[offset + i] = text.charCodeAt(i);
        }
      }
      offset += text.length;
    },
    i64: function (number, bigendian) {
      var buffer = new Int64(number).buffer;
      if (!bigendian) {
        // swap the by orders
        var nbuffer = new Uint8Array(buffer.length),
          len = buffer.length - 1;
        for (var i = len; i >= 0; i--) {
          nbuffer[i] = buffer[len - i];
        }
        buffer = nbuffer;
      }
      // append the buffer
      this.appendBytes(buffer);
    },
    i32: function (number, bigendian) {
      buffer.setInt32(offset, number, !bigendian);
      offset += 4;
    },
    i16: function (number, bigendian) {
      buffer.setInt16(offset, number, !bigendian);
      offset += 2;
    },
    i8: function (number, bigendian) {
      buffer.setInt8(offset, number, !bigendian);
      offset += 1;
    },
    resize: function (newsize) {
      var zclass = obj.constructor,
        zobj = new zclass(newsize);
      zobj.set(obj, 0);
      obj = zobj;
      buffer = new DataView(obj.buffer);
      return obj;
    },
    /**
     *  Check if the current bytestream has enough
     *  size to add "size" more bytes. If it doesn't have
     *  we return a new bytestream object
     */
    resizeIfNeeded: function (size) {
      if (obj.length < size + offset) {
        return this.resize(size + offset);
      }
      return obj;
    }
  };
}

var Zips = {};

var ZIPClass = function (totalSize) {
  var self = this,
    maxZipSize = Math.pow(2, 31) * 0.9,
    isZip64 = totalSize > maxZipSize || localStorage.zip64 == 1;

  this.isZip64 = isZip64; /* make it public */

  if (isZip64 && !mega.config.get("zip64n")) {
    mega.config.set("zip64n", 1);
    msgDialog("warninga", l[34], l[2033]);
  }

  // Constants
  var fileHeaderLen = 30,
    noCompression = 0,
    zipVersion = isZip64 ? 45 : 20,
    defaultFlags = 0x808 /* UTF-8 */,
    i32max = 0xffffffff,
    i16max = 0xffff,
    zip64ExtraId = 0x0001,
    zipUtf8ExtraId = 0x7075,
    directory64LocLen = 20,
    directory64EndLen = 56,
    directoryEndLen = 22,
    fileHeaderSignature = 0x04034b50,
    directory64LocSignature = 0x07064b50,
    directory64EndSignature = 0x06064b50,
    directoryEndSignature = 0x06054b50,
    dataDescriptorSignature = 0x08074b50, // de-facto standard; required by OS X Finder
    directoryHeaderSignature = 0x02014b50,
    dataDescriptorLen = 16,
    dataDescriptor64Len = 24,
    directoryHeaderLen = 46;

  /* ZipHeader  */
  /**
   *  ZipHeader struct
   */
  function ZipHeader() {
    this.readerVersion = zipVersion;
    this.Flags = defaultFlags;
    this.Method = noCompression;
    this.date = 0;
    this.crc32 = 0;
    this.size = 0;
    this.unsize = 0;
    this.file = "";
    this.extra = [];

    this.getBytes = function () {
      var buf = ezBuffer(fileHeaderLen + this.file.length + this.extra.length);
      buf.i32(fileHeaderSignature);
      buf.i16(this.readerVersion);
      buf.i16(this.Flags);
      buf.i16(this.Method);
      DosDateTime(this.date, buf);
      buf.i32(this.crc32); // crc32
      buf.i32(this.size); // compress size
      buf.i32(this.unsize); // uncompress size
      buf.i16(this.file.length);
      buf.i16(this.extra.length);
      buf.appendBytes(this.file);
      buf.appendBytes(this.extra);
      return buf.getBytes();
    };
  }

  // ZipCentralDirectory
  function ZipCentralDirectory() {
    this.creatorVersion = zipVersion;
    this.readerVersion = zipVersion;
    this.Flags = defaultFlags;
    this.Method = noCompression;
    this.date = 0;
    this.crc32 = 0;
    this.file = "";
    this.size = 0; // compressed size
    this.unsize = 0; // uncompressed size
    this.offset = 0;
    this.externalAttr = 0;

    this.getBytes = function () {
      var extra = [],
        ebuf;

      if (isZip64) {
        ebuf = ezBuffer(28); // 2xi16 + 3xi64
        ebuf.i16(zip64ExtraId);
        ebuf.i16(24);
        ebuf.i64(this.size);
        ebuf.i64(this.unsize);
        ebuf.i64(this.offset);
        extra = extra.concat(ebuf.getArray());
      }

      var buf = ezBuffer(directoryHeaderLen + this.file.length + extra.length);
      buf.i32(directoryHeaderSignature);
      buf.i16(this.creatorVersion);
      buf.i16(this.readerVersion);
      buf.i16(this.Flags);
      buf.i16(this.Method);
      DosDateTime(this.date, buf);
      buf.i32(this.crc32);
      buf.i32(isZip64 ? i32max : this.size);
      buf.i32(isZip64 ? i32max : this.unsize);
      buf.i16(this.file.length);
      buf.i16(extra.length);
      buf.i16(0); // no comments
      buf.i32(0); // disk number
      buf.i32(this.externalAttr);
      buf.i32(isZip64 ? i32max : this.offset);
      buf.appendBytes(this.file);
      buf.appendBytes(extra);

      return buf.getBytes();
    };
  }

  // ZipDataDescriptor
  function ZipDataDescriptor() {
    this.crc32 = 0;
    this.size = 0;
    this.unsize = 0;

    this.getBytes = function () {
      var buf = ezBuffer(isZip64 ? dataDescriptor64Len : dataDescriptorLen);
      buf.i32(dataDescriptorSignature);
      buf.i32(this.crc32);
      if (isZip64) {
        buf.i64(this.size);
        buf.i64(this.unsize);
      } else {
        buf.i32(this.size);
        buf.i32(this.unsize);
      }
      return buf.getBytes();
    };
  }

  // DosDateTime
  /**
   *  Set an unix time (or now if missing) in the zip
   *  expected format
   */
  function DosDateTime(sec, buf) {
    var date = new Date(),
      dosTime,
      dosDate;

    if (sec) {
      date = new Date(sec * 1000);
    }

    dosTime = date.getHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | (date.getSeconds() / 2);

    dosDate = date.getFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getDate();

    buf.i16(dosTime);
    buf.i16(dosDate);
  }

  self.writeCentralDir = function (filename, size, time, crc32, directory, headerpos) {
    filename = to8(filename);
    var dirRecord = new ZipCentralDirectory();
    dirRecord.file = filename;
    dirRecord.date = time;
    dirRecord.size = size;
    dirRecord.unsize = size;
    dirRecord.crc32 = crc32;
    dirRecord.offset = headerpos;
    dirRecord.externalAttr = directory ? 1 : 0;

    var dataDescriptor = new ZipDataDescriptor();
    dataDescriptor.crc32 = crc32;
    dataDescriptor.size = size;
    dataDescriptor.unsize = size;

    return {
      dirRecord: dirRecord.getBytes(),
      dataDescriptor: dataDescriptor.getBytes()
    };
  };

  self.writeSuffix = function (pos, dirData) {
    var dirDatalength = 0;
    for (var i in dirData) {
      dirDatalength += dirData[i].length;
    }

    var buf = ezBuffer(22);
    if (isZip64) {
      var xbuf = new ezBuffer(directory64EndLen + directory64LocLen);
      xbuf.i32(directory64EndSignature);
      // directory64EndLen - 4 bytes - 8 bytes
      xbuf.i64(directory64EndLen - 4 - 8);
      xbuf.i16(zipVersion);
      xbuf.i16(zipVersion);
      xbuf.i32(0); // disk number
      xbuf.i32(0); // number of the disk with the start of the central directory
      xbuf.i64(dirData.length);
      xbuf.i64(dirData.length);
      xbuf.i64(dirDatalength);
      xbuf.i64(pos);

      xbuf.i32(directory64LocSignature);
      xbuf.i32(0);
      xbuf.i64(pos + dirDatalength);
      xbuf.i32(1); // total number of disks
      buf.resize(22 + xbuf.getBytes().length);
      buf.appendBytes(xbuf.getBytes());
    }

    buf.i32(directoryEndSignature);
    buf.i32(0); // skip
    buf.i16(isZip64 ? i16max : dirData.length);
    buf.i16(isZip64 ? i16max : dirData.length);
    buf.i32(isZip64 ? i32max : dirDatalength);
    buf.i32(isZip64 ? i32max : pos);
    buf.i16(0); // no comments

    return buf.getBytes();
  };

  self.writeHeader = function (filename, size, date) {
    filename = to8(filename);
    var header = new ZipHeader();
    header.file = filename;
    header.size = size;
    header.date = date;

    var ebuf = ezBuffer(1 + 4 + 4 + filename.length);
    ebuf.i16(zipUtf8ExtraId);
    ebuf.i16(5 + filename.length); // size
    ebuf.i8(1); // version
    ebuf.i32(crc32(filename));
    ebuf.appendBytes(filename);
    header.extra = ebuf.getArray();

    return header.getBytes();
  };
};

/**
 *  ZipEntryIO
 *
 *  It implements a FileIO object but underneath it writes using
 *  `ZipWriter.write()` method. This object adds a few bytes before and after
 *  the buffer itself, some zip structures.
 */
function ZipEntryIO(zipWriter, aFile) {
  this.file = aFile;
  this.zipWriter = zipWriter;
  this.queued = 0;
  this.logger = MegaLogger.getLogger("ZipEntryIO", {}, dlmanager.logger);
}

ZipEntryIO.prototype.toString = function () {
  return "[ZipEntry " + (this.file && this.file.n) + "]";
};
ZipEntryIO.prototype.destroy = function () {
  if (!oIsFrozen(this)) {
    var dl = this.file || {};
    if (d) {
      this.logger.info("Destroying " + this);
    }
    if (/*dl.cancelled && */ dl.owner) {
      // call ClassFile.abortTimers
      dl.owner.abortTimers();
    }
    oDestroy(this);
  }
};

ZipEntryIO.prototype.abort = function (e) {
  if (this.zipWriter) {
    // this.zipWriter.destroy(e);
    this.destroy();
  }
};

ZipEntryIO.prototype.isEmpty = function () {
  return this.queued == 0;
};

ZipEntryIO.prototype.setCredentials = function () {
  this.begin();
};

ZipEntryIO.prototype.push = function (obj) {
  "use strict";
  if (oIsFrozen(this) || oIsFrozen(this.zipWriter)) {
    console.warn("The ZipWriter instance have already been destroyed.", this);
    return;
  }
  this.queued++;
  obj.zfile = this;
  this.zipWriter.zwriter.push(obj, () => {
    if (this.queued) {
      this.queued--;
      if (Object(this.file).ready) {
        this.file.ready();
      }
    }
  });
};

function ZipWriter(dl_id, dl) {
  this.dl = dl;
  this.size = 0;
  this.nfiles = 0;
  this.is_ready = false;
  this.queues = [];
  this.hashes = {};
  this.dirData = [];
  this.offset = 0;
  this.file_offset = 0;
  this.eblocked = 0;

  this.io = dlMethod === MemoryIO ? new dlMethod(dl_id, dl) : new CacheIO(dl_id, dl);

  this.io.is_zip = true;
  this.zwriter = new MegaQueue(dlZipWriterIOWorker.bind(this), 1, "zip-writer");
  this.zwriter.validateTask = dlZipWriterValidate.bind(this);
  this.logger = MegaLogger.getLogger("ZipWriter", {}, dlmanager.logger);

  this.io.begin = function () {
    this.is_ready = true;
    this.zwriter.process();
  }.bind(this);
}

ZipWriter.prototype.toString = function () {
  return "[ZipWriter " + (this.dl && this.dl.zipname) + "]";
};

ZipWriter.prototype.createZipObject = function () {
  if (!this.ZipObject) {
    this.ZipObject = new ZIPClass(this.size);

    if (this.ZipObject.isZip64) {
      this.size += this.nfiles * 28; // extra bytes for each ZipCentralDirectory
      this.size += this.nfiles * 24; // extra bytes for each dataDescriptor
      this.size += 98; // final bytes
    } else {
      this.size += this.nfiles * 16; // extra bytes for each dataDescriptor
      this.size += 22; // final bytes
    }
    if (d) {
      this.logger.info("isZip64", this.ZipObject.isZip64, this.size);
    }

    this.io.setCredentials("", this.size, this.dl.zipname);
  }
  return this.ZipObject;
};

ZipWriter.prototype.destroy = function (error) {
  if (d) {
    this.logger.info("Destroying " + this, this.cancelled);
  }
  if (this.dl) {
    var dl = this.dl;
    this.zwriter.destroy();
    delete Zips[dl.zipid];
    delete GlobalProgress["zip_" + dl.zipid];
    if (error || this.cancelled) {
      if (this.io.abort) {
        this.io.abort(error || this);
      }
    } else {
      dlmanager.cleanupUI(dl, true);
    }
    oDestroy(this);
  }
};

function dlZipWriterIOWorker(task, done) {
  "use strict";
  const { file } = task.zfile;

  if (typeof file === "undefined") {
    if (d) {
      console.error("File aborted...", task);
    }
    return done();
  }

  this.hashes[file.id] = crc32(task.data, this.hashes[file.id] || 0, task.data.byteLength);
  this.file_offset += task.data.byteLength;

  const buffer = task.data;
  const write = (buffer, done) => {
    const pos = this.offset;

    this.offset += buffer.byteLength;
    this.io.write(buffer, pos, done);
  };

  if (file.data) {
    try {
      new Uint8Array(file.data, task.offset, buffer.byteLength).set(buffer);
    } catch (ex) {}
  }

  if (task.offset === 0) {
    var header = this.ZipObject.writeHeader(file.p + file.n, file.size, file.t);
    file.io.entryPos = this.offset;

    /* replace task.data */
    delete task.data;

    write(header, () => write(buffer, done));
  } else {
    write(buffer, done);
  }
}

function dlZipWriterValidate(t) {
  if (!this.ZipObject) {
    this.createZipObject(); /* create the zipobject if it doesnt exists */
    if (!this.ZipObject) {
      return false;
    }
  }

  return this.is_ready && t.zfile == this.queues[0] && t.offset == this.file_offset;
}

ZipWriter.prototype.done = function (zfile) {
  var file = zfile.dl;
  var centralDir = this.ZipObject.writeCentralDir(file.p + file.n, file.size, file.t, this.hashes[file.id], false, file.io.entryPos);

  this.dirData.push(centralDir.dirRecord);

  this.zwriter.pause(); /* pause all IO */
  this.queues.shift();

  var buffer = centralDir.dataDescriptor;

  if (this.queues.length == 0) {
    var end = this.ZipObject.writeSuffix(buffer.byteLength + this.offset, this.dirData),
      size = 0,
      offset = buffer.byteLength,
      buf;

    for (var i in this.dirData) {
      size += this.dirData[i].byteLength;
    }

    buf = new Uint8Array(buffer.byteLength + size + end.byteLength);
    buf.set(buffer, 0);

    for (var i in this.dirData) {
      buf.set(this.dirData[i], offset);
      offset += this.dirData[i].byteLength;
    }

    buf.set(end, offset);

    return this.io.write(buf, this.offset, this._eof.bind(this));
  }

  this.io.write(buffer, this.offset, this.finalize_file.bind(this));
  this.offset += buffer.byteLength;
};

ZipWriter.prototype.finalize_file = function () {
  if (!oIsFrozen(this)) {
    this.file_offset = 0;
    this.zwriter.resume();
  }
};

ZipWriter.prototype._eof = function () {
  "use strict";

  var msg;

  if (this.eblocked === this.nfiles) {
    msg = this.nfiles === 1 ? l[20818] : l[20819];
    msgDialog("warninga", "Warning", escapeHTML(msg));
    this.dl.onDownloadError(this.dl, EBLOCKED);
    this.destroy();
    return false;
  } else if (this.eblocked) {
    msg = mega.icu
      .format(l[20820], this.nfiles - this.eblocked)
      .replace("%1", mega.icu.format(l.download_and_import_items_count, this.nfiles));
    msgDialog("warninga", "Warning", escapeHTML(msg));
  }

  this.dl.onBeforeDownloadComplete(this.dl.pos);
  this.io.download(this.dl.zipname, "");
  this.dl.onDownloadComplete(this.dl);
  this.destroy();
};

ZipWriter.prototype.addEntryFile = function (file) {
  var io = new ZipEntryIO(this, file);
  this.queues.push(io);
  this.nfiles++;
  this.size += file.size + 30 + 9 + 2 * (file.p.length + file.n.length) /* header */ + 46 + file.p.length + file.n.length; /* dirRecord */
  return io;
};

// crc32
var crc32table = [
  0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e,
  0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb,
  0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8,
  0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940,
  0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599,
  0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106,
  0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb,
  0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457,
  0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074,
  0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5,
  0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e,
  0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a,
  0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27,
  0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0,
  0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1,
  0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79,
  0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92,
  0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f,
  0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4,
  0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c,
  0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d,
  0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a,
  0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37,
  0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d
];

function crc32(data, crc, len) {
  if (typeof crc === "undefined") {
    crc = 0;
  }
  if (typeof len === "undefined") {
    len = data.length;
  }

  var x = 0;
  var y = 0;

  var off = data.length - len;

  crc = crc ^ -1;

  for (var i = 0; i < len; i++) {
    y = (crc ^ data[i + off]) & 0xff;
    x = crc32table[y];
    crc = (crc >>> 8) ^ x;
  }

  return crc ^ -1;
}
