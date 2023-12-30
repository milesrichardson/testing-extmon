LavaPack.loadBundle(
  [
    [
      514,
      {
        "@ethereumjs/tx": 380,
        "@ethereumjs/util": 392,
        "@keystonehq/bc-ur-registry-eth": 520,
        buffer: 2392,
        hdkey: 3060,
        rlp: 517,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    function n(e) {
                      return e && "object" == typeof e && "default" in e ? e.default : e;
                    }
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var s = n(e("hdkey")),
                      o = e("@ethereumjs/util"),
                      i = n(e("rlp")),
                      a = e("@ethereumjs/tx"),
                      l = e("@keystonehq/bc-ur-registry-eth"),
                      c = e("uuid");
                    const d = "QR Hardware Wallet Device",
                      u = "m",
                      h = "0/*";
                    var p, g;
                    !(function (e) {
                      (e.hd = "hd"), (e.pubkey = "pubkey");
                    })(p || (p = {})),
                      (function (e) {
                        (e.standard = "account.standard"),
                          (e.ledger_live = "account.ledger_live"),
                          (e.ledger_legacy = "account.ledger_legacy");
                      })(g || (g = {}));
                    class m {
                      constructor(e) {
                        (this.version = 1),
                          (this.getInteraction = () => {
                            throw new Error(
                              "KeystoneError#invalid_extends: method getInteraction not implemented, please extend BaseKeyring by overwriting this method."
                            );
                          }),
                          (this.type = d),
                          (this.requestSignature = async (e, t, r, n) => {
                            const s = await this.getInteraction().requestSignature(t, r, n),
                              o = s.getRequestId(),
                              i = s.getSignature();
                            if (o) {
                              if (c.stringify(o) !== e)
                                throw new Error("KeystoneError#invalid_data: read signature error: mismatched requestId");
                            }
                            return { r: i.slice(0, 32), s: i.slice(32, 64), v: i.slice(64) };
                          }),
                          (this.__readCryptoHDKey = (e) => {
                            var t, r;
                            const n = `m/${e.getOrigin().getPath()}`,
                              s = null == (t = e.getOrigin().getSourceFingerprint()) ? void 0 : t.toString("hex"),
                              o = (null == (r = e.getChildren()) ? void 0 : r.getPath()) || h,
                              i = e.getName();
                            if (
                              (e.getNote() === g.standard
                                ? (this.keyringAccount = g.standard)
                                : e.getNote() === g.ledger_legacy && (this.keyringAccount = g.ledger_legacy),
                              !s)
                            )
                              throw new Error("KeystoneError#invalid_data: invalid crypto-hdkey, cannot get source fingerprint");
                            const a = e.getBip32Key();
                            (this.xfp = s),
                              (this.xpub = a),
                              (this.hdPath = n),
                              (this.childrenPath = o),
                              i !== undefined && "" !== i && (this.name = i),
                              (this.initialized = !0);
                          }),
                          (this.__readCryptoAccount = (e) => {
                            var t, r;
                            const n = null == (t = e.getMasterFingerprint()) ? void 0 : t.toString("hex");
                            if (!n) throw new Error("KeystoneError#invalid_data: invalid crypto-account, cannot get master fingerprint");
                            (this.xfp = n), (this.initialized = !0);
                            let s = !1;
                            const i = e.getOutputDescriptors();
                            if (!i || 0 === i.length)
                              throw new Error("KeystoneError#invalid_data: invalid crypto-account, no crypto output found");
                            if (i.length % 5 != 0) throw new Error("KeystoneError#invalid_data: only support 5x pubkey accounts for now");
                            return (
                              null == (r = e.getOutputDescriptors()) ||
                                r.forEach((e) => {
                                  try {
                                    const t = e.getHDKey();
                                    if (t) {
                                      const e = t.getKey(),
                                        r = `M/${t.getOrigin().getPath()}`,
                                        n = "0x" + o.publicToAddress(e, !0).toString("hex");
                                      (this.name = t.getName()),
                                        t.getNote() === g.ledger_live && (this.keyringAccount = g.ledger_live),
                                        this.paths[o.toChecksumAddress(n)] === undefined && (s = !0),
                                        (this.paths[o.toChecksumAddress(n)] = r);
                                    }
                                  } catch (e) {
                                    throw new Error(`KeystoneError#invalid_data: ${e}`);
                                  }
                                }),
                              s
                            );
                          }),
                          (this.getName = () => this.name),
                          (this.setAccountToUnlock = (e) => {
                            this.unlockedAccount = parseInt(e, 10);
                          }),
                          (this.__getNormalPage = async (e) => {
                            (this.page += e), this.page <= 0 && (this.page = 1);
                            const t = (this.page - 1) * this.perPage,
                              r = t + this.perPage,
                              n = [];
                            for (let e = t; e < r; e++) {
                              const t = await this.__addressFromIndex(u, e);
                              n.push({ address: t, balance: null, index: e }), (this.indexes[o.toChecksumAddress(t)] = e);
                            }
                            return n;
                          }),
                          (this.__getLedgerLivePage = async (e) => {
                            const t = (this.page + e - 1) * this.perPage,
                              r = t + this.perPage,
                              n = [];
                            for (let e = t; e < r; e++) {
                              const t = await this.__addressFromIndex(u, e);
                              n.push({ address: t, balance: null, index: e });
                            }
                            return (this.page += e), n;
                          }),
                          (this.__addressFromIndex = async (e, t) => {
                            if (this.keyringMode === p.hd) {
                              this.checkKeyring(), this.hdk || (this.hdk = s.fromExtendedKey(this.xpub));
                              const r = this.childrenPath.replace("*", String(t)).replace(/\*/g, "0"),
                                n = this.hdk.derive(`${e}/${r}`),
                                i = "0x" + o.publicToAddress(n.publicKey, !0).toString("hex");
                              return o.toChecksumAddress(i);
                            }
                            {
                              const e = Object.keys(this.paths)[t];
                              if (e) return o.toChecksumAddress(e);
                              throw new Error("KeystoneError#pubkey_account.no_expected_account");
                            }
                          }),
                          (this.page = 0),
                          (this.perPage = 5),
                          (this.accounts = []),
                          (this.currentAccount = 0),
                          (this.unlockedAccount = 0),
                          (this.name = "QR Hardware"),
                          (this.keyringMode = p.hd),
                          (this.keyringAccount = g.standard),
                          (this.initialized = !1),
                          (this.xfp = ""),
                          (this.xpub = ""),
                          (this.hdPath = ""),
                          (this.childrenPath = h),
                          (this.indexes = {}),
                          (this.paths = {}),
                          this.deserialize(e);
                      }
                      async readKeyring() {
                        const e = await this.getInteraction().readCryptoHDKeyOrCryptoAccount();
                        this.syncKeyring(e);
                      }
                      syncKeyring(e) {
                        e.getRegistryType().getType() === l.extend.RegistryTypes.CRYPTO_HDKEY.getType()
                          ? ((this.keyringMode = p.hd), this.__readCryptoHDKey(e))
                          : ((this.keyringMode = p.pubkey), this.__readCryptoAccount(e));
                      }
                      checkKeyring() {
                        if (!this.xfp || !this.xpub || !this.hdPath)
                          throw new Error(
                            "KeystoneError#invalid_keyring: keyring not fulfilled, please call function `readKeyring` firstly"
                          );
                      }
                      serialize() {
                        return Promise.resolve({
                          initialized: this.initialized,
                          accounts: this.accounts,
                          currentAccount: this.currentAccount,
                          page: this.page,
                          perPage: this.perPage,
                          keyringAccount: this.keyringAccount,
                          keyringMode: this.keyringMode,
                          name: this.name,
                          version: this.version,
                          xfp: this.xfp,
                          xpub: this.xpub,
                          hdPath: this.hdPath,
                          childrenPath: this.childrenPath,
                          indexes: this.indexes,
                          paths: this.paths
                        });
                      }
                      deserialize(e) {
                        e &&
                          ((this.accounts = e.accounts),
                          (this.currentAccount = e.currentAccount),
                          (this.page = e.page),
                          (this.perPage = e.perPage),
                          (this.name = e.name),
                          (this.initialized = e.initialized),
                          (this.keyringMode = e.keyringMode || p.hd),
                          (this.keyringAccount = e.keyringAccount || g.standard),
                          (this.xfp = e.xfp),
                          (this.xpub = e.xpub),
                          (this.hdPath = e.hdPath),
                          (this.indexes = e.indexes),
                          (this.paths = e.paths),
                          (this.childrenPath = e.childrenPath || h));
                      }
                      setCurrentAccount(e) {
                        this.currentAccount = e;
                      }
                      getCurrentAccount() {
                        return this.currentAccount;
                      }
                      getCurrentAddress() {
                        return this.accounts[this.currentAccount];
                      }
                      async addAccounts(e = 1) {
                        const t = this.unlockedAccount,
                          r = t + e,
                          n = [];
                        for (let e = t; e < r; e++) {
                          const t = await this.__addressFromIndex(u, e);
                          n.push(t), (this.page = 0), this.unlockedAccount++;
                        }
                        return (this.accounts = this.accounts.concat(n)), this.accounts;
                      }
                      getFirstPage() {
                        return (this.page = 0), this.__getPage(1);
                      }
                      getNextPage() {
                        return this.__getPage(1);
                      }
                      getPreviousPage() {
                        return this.__getPage(-1);
                      }
                      async __getPage(e) {
                        return (
                          this.initialized || (await this.readKeyring()),
                          this.keyringMode === p.hd ? this.__getNormalPage(e) : this.__getLedgerLivePage(e)
                        );
                      }
                      getAccounts() {
                        return Promise.resolve(this.accounts);
                      }
                      removeAccount(e) {
                        if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase()))
                          throw new Error(`Address ${e} not found in this keyring`);
                        this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                      }
                      async signTransaction(e, r) {
                        const n = 0 === r.type ? l.DataType.transaction : l.DataType.typedTransaction;
                        let s;
                        s = 0 === r.type ? t.from(i.encode(r.getMessageToSign(!1))) : r.getMessageToSign(!1);
                        const o = await this._pathFromAddress(e),
                          d = Number(r.common.chainId()),
                          u = c.v4(),
                          h = l.EthSignRequest.constructETHRequest(s, n, o, this.xfp, u, d),
                          {
                            r: p,
                            s: g,
                            v: m
                          } = await this.requestSignature(
                            u,
                            h,
                            "Scan with your Keystone",
                            'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
                          );
                        return a.TransactionFactory.fromTxData({ ...r.toJSON(), type: r.type, r: p, s: g, v: m }, { common: r.common });
                      }
                      signMessage(e, t) {
                        return this.signPersonalMessage(e, t);
                      }
                      async signPersonalMessage(e, r) {
                        const n = o.stripHexPrefix(r),
                          s = await this._pathFromAddress(e),
                          i = c.v4(),
                          a = l.EthSignRequest.constructETHRequest(
                            t.from(n, "hex"),
                            l.DataType.personalMessage,
                            s,
                            this.xfp,
                            i,
                            undefined,
                            e
                          ),
                          {
                            r: d,
                            s: u,
                            v: h
                          } = await this.requestSignature(
                            i,
                            a,
                            "Scan with your Keystone",
                            'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
                          );
                        return "0x" + t.concat([d, u, h]).toString("hex");
                      }
                      async signTypedData(e, r) {
                        const n = await this._pathFromAddress(e),
                          s = c.v4(),
                          o = l.EthSignRequest.constructETHRequest(
                            t.from(JSON.stringify(r), "utf-8"),
                            l.DataType.typedData,
                            n,
                            this.xfp,
                            s,
                            undefined,
                            e
                          ),
                          {
                            r: i,
                            s: a,
                            v: d
                          } = await this.requestSignature(
                            s,
                            o,
                            "Scan with your Keystone",
                            'After your Keystone has signed this data, click on "Scan Keystone" to receive the signature'
                          );
                        return "0x" + t.concat([i, a, d]).toString("hex");
                      }
                      async _pathFromAddress(e) {
                        if (this.keyringMode === p.hd) {
                          const t = o.toChecksumAddress(e);
                          let r = this.indexes[t];
                          if (void 0 === r)
                            for (let e = 0; e < 1e3; e++)
                              if (t === (await this.__addressFromIndex(u, e))) {
                                r = e;
                                break;
                              }
                          if (void 0 === r) throw new Error("Unknown address");
                          return `${this.hdPath}/${this.childrenPath.replace("*", r.toString()).replace(/\*/g, "0")}`;
                        }
                        {
                          const t = o.toChecksumAddress(e),
                            r = this.paths[t];
                          if (void 0 === r) throw new Error("Unknown address");
                          return r;
                        }
                      }
                    }
                    (m.type = d), (r.BaseKeyring = m);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring",
        file: "node_modules/@keystonehq/base-eth-keyring/dist/base-eth-keyring.cjs.development.js"
      }
    ],
    [
      515,
      {
        "@ethereumjs/tx": 380,
        "@ethereumjs/util": 392,
        "@keystonehq/bc-ur-registry-eth": 520,
        buffer: 2392,
        hdkey: 3060,
        rlp: 517,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    function n(e) {
                      return e && "object" == typeof e && "default" in e ? e.default : e;
                    }
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var s,
                      o,
                      i = n(e("hdkey")),
                      a = e("@ethereumjs/util"),
                      l = n(e("rlp")),
                      c = e("@ethereumjs/tx"),
                      d = e("@keystonehq/bc-ur-registry-eth"),
                      u = e("uuid");
                    !(function (e) {
                      (e.hd = "hd"), (e.pubkey = "pubkey");
                    })(s || (s = {})),
                      (function (e) {
                        (e.standard = "account.standard"),
                          (e.ledger_live = "account.ledger_live"),
                          (e.ledger_legacy = "account.ledger_legacy");
                      })(o || (o = {}));
                    class h {
                      constructor(e) {
                        (this.version = 1),
                          (this.getInteraction = () => {
                            throw new Error(
                              "KeystoneError#invalid_extends: method getInteraction not implemented, please extend BaseKeyring by overwriting this method."
                            );
                          }),
                          (this.type = "QR Hardware Wallet Device"),
                          (this.requestSignature = async (e, t, r, n) => {
                            const s = await this.getInteraction().requestSignature(t, r, n),
                              o = s.getRequestId(),
                              i = s.getSignature();
                            if (o && u.stringify(o) !== e)
                              throw new Error("KeystoneError#invalid_data: read signature error: mismatched requestId");
                            return { r: i.slice(0, 32), s: i.slice(32, 64), v: i.slice(64) };
                          }),
                          (this.__readCryptoHDKey = (e) => {
                            var t, r;
                            const n = "m/" + e.getOrigin().getPath(),
                              s = null == (t = e.getOrigin().getSourceFingerprint()) ? void 0 : t.toString("hex"),
                              i = (null == (r = e.getChildren()) ? void 0 : r.getPath()) || "0/*",
                              a = e.getName();
                            if (
                              (e.getNote() === o.standard
                                ? (this.keyringAccount = o.standard)
                                : e.getNote() === o.ledger_legacy && (this.keyringAccount = o.ledger_legacy),
                              !s)
                            )
                              throw new Error("KeystoneError#invalid_data: invalid crypto-hdkey, cannot get source fingerprint");
                            const l = e.getBip32Key();
                            (this.xfp = s),
                              (this.xpub = l),
                              (this.hdPath = n),
                              (this.childrenPath = i),
                              void 0 !== a && "" !== a && (this.name = a),
                              (this.initialized = !0);
                          }),
                          (this.__readCryptoAccount = (e) => {
                            var t, r;
                            const n = null == (t = e.getMasterFingerprint()) ? void 0 : t.toString("hex");
                            if (!n) throw new Error("KeystoneError#invalid_data: invalid crypto-account, cannot get master fingerprint");
                            (this.xfp = n), (this.initialized = !0);
                            let s = !1;
                            const i = e.getOutputDescriptors();
                            if (!i || 0 === i.length)
                              throw new Error("KeystoneError#invalid_data: invalid crypto-account, no crypto output found");
                            if (i.length % 5 != 0) throw new Error("KeystoneError#invalid_data: only support 5x pubkey accounts for now");
                            return (
                              null == (r = e.getOutputDescriptors()) ||
                                r.forEach((e) => {
                                  try {
                                    const t = e.getHDKey();
                                    if (t) {
                                      const e = t.getKey(),
                                        r = "M/" + t.getOrigin().getPath(),
                                        n = "0x" + a.publicToAddress(e, !0).toString("hex");
                                      (this.name = t.getName()),
                                        t.getNote() === o.ledger_live && (this.keyringAccount = o.ledger_live),
                                        void 0 === this.paths[a.toChecksumAddress(n)] && (s = !0),
                                        (this.paths[a.toChecksumAddress(n)] = r);
                                    }
                                  } catch (e) {
                                    throw new Error("KeystoneError#invalid_data: " + e);
                                  }
                                }),
                              s
                            );
                          }),
                          (this.getName = () => this.name),
                          (this.setAccountToUnlock = (e) => {
                            this.unlockedAccount = parseInt(e, 10);
                          }),
                          (this.__getNormalPage = async (e) => {
                            (this.page += e), this.page <= 0 && (this.page = 1);
                            const t = (this.page - 1) * this.perPage,
                              r = t + this.perPage,
                              n = [];
                            for (let e = t; e < r; e++) {
                              const t = await this.__addressFromIndex("m", e);
                              n.push({ address: t, balance: null, index: e }), (this.indexes[a.toChecksumAddress(t)] = e);
                            }
                            return n;
                          }),
                          (this.__getLedgerLivePage = async (e) => {
                            const t = (this.page + e - 1) * this.perPage,
                              r = t + this.perPage,
                              n = [];
                            for (let e = t; e < r; e++) {
                              const t = await this.__addressFromIndex("m", e);
                              n.push({ address: t, balance: null, index: e });
                            }
                            return (this.page += e), n;
                          }),
                          (this.__addressFromIndex = async (e, t) => {
                            if (this.keyringMode === s.hd) {
                              this.checkKeyring(), this.hdk || (this.hdk = i.fromExtendedKey(this.xpub));
                              const r = this.childrenPath.replace("*", String(t)).replace(/\*/g, "0"),
                                n = this.hdk.derive(`${e}/${r}`),
                                s = "0x" + a.publicToAddress(n.publicKey, !0).toString("hex");
                              return a.toChecksumAddress(s);
                            }
                            {
                              const e = Object.keys(this.paths)[t];
                              if (e) return a.toChecksumAddress(e);
                              throw new Error("KeystoneError#pubkey_account.no_expected_account");
                            }
                          }),
                          (this.page = 0),
                          (this.perPage = 5),
                          (this.accounts = []),
                          (this.currentAccount = 0),
                          (this.unlockedAccount = 0),
                          (this.name = "QR Hardware"),
                          (this.keyringMode = s.hd),
                          (this.keyringAccount = o.standard),
                          (this.initialized = !1),
                          (this.xfp = ""),
                          (this.xpub = ""),
                          (this.hdPath = ""),
                          (this.childrenPath = "0/*"),
                          (this.indexes = {}),
                          (this.paths = {}),
                          this.deserialize(e);
                      }
                      async readKeyring() {
                        const e = await this.getInteraction().readCryptoHDKeyOrCryptoAccount();
                        this.syncKeyring(e);
                      }
                      syncKeyring(e) {
                        e.getRegistryType().getType() === d.extend.RegistryTypes.CRYPTO_HDKEY.getType()
                          ? ((this.keyringMode = s.hd), this.__readCryptoHDKey(e))
                          : ((this.keyringMode = s.pubkey), this.__readCryptoAccount(e));
                      }
                      checkKeyring() {
                        if (!this.xfp || !this.xpub || !this.hdPath)
                          throw new Error(
                            "KeystoneError#invalid_keyring: keyring not fulfilled, please call function `readKeyring` firstly"
                          );
                      }
                      serialize() {
                        return Promise.resolve({
                          initialized: this.initialized,
                          accounts: this.accounts,
                          currentAccount: this.currentAccount,
                          page: this.page,
                          perPage: this.perPage,
                          keyringAccount: this.keyringAccount,
                          keyringMode: this.keyringMode,
                          name: this.name,
                          version: this.version,
                          xfp: this.xfp,
                          xpub: this.xpub,
                          hdPath: this.hdPath,
                          childrenPath: this.childrenPath,
                          indexes: this.indexes,
                          paths: this.paths
                        });
                      }
                      deserialize(e) {
                        e &&
                          ((this.accounts = e.accounts),
                          (this.currentAccount = e.currentAccount),
                          (this.page = e.page),
                          (this.perPage = e.perPage),
                          (this.name = e.name),
                          (this.initialized = e.initialized),
                          (this.keyringMode = e.keyringMode || s.hd),
                          (this.keyringAccount = e.keyringAccount || o.standard),
                          (this.xfp = e.xfp),
                          (this.xpub = e.xpub),
                          (this.hdPath = e.hdPath),
                          (this.indexes = e.indexes),
                          (this.paths = e.paths),
                          (this.childrenPath = e.childrenPath || "0/*"));
                      }
                      setCurrentAccount(e) {
                        this.currentAccount = e;
                      }
                      getCurrentAccount() {
                        return this.currentAccount;
                      }
                      getCurrentAddress() {
                        return this.accounts[this.currentAccount];
                      }
                      async addAccounts(e = 1) {
                        const t = this.unlockedAccount,
                          r = t + e,
                          n = [];
                        for (let e = t; e < r; e++) {
                          const t = await this.__addressFromIndex("m", e);
                          n.push(t), (this.page = 0), this.unlockedAccount++;
                        }
                        return (this.accounts = this.accounts.concat(n)), this.accounts;
                      }
                      getFirstPage() {
                        return (this.page = 0), this.__getPage(1);
                      }
                      getNextPage() {
                        return this.__getPage(1);
                      }
                      getPreviousPage() {
                        return this.__getPage(-1);
                      }
                      async __getPage(e) {
                        return (
                          this.initialized || (await this.readKeyring()),
                          this.keyringMode === s.hd ? this.__getNormalPage(e) : this.__getLedgerLivePage(e)
                        );
                      }
                      getAccounts() {
                        return Promise.resolve(this.accounts);
                      }
                      removeAccount(e) {
                        if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase()))
                          throw new Error(`Address ${e} not found in this keyring`);
                        this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                      }
                      async signTransaction(e, r) {
                        const n = 0 === r.type ? d.DataType.transaction : d.DataType.typedTransaction;
                        let s;
                        s = 0 === r.type ? t.from(l.encode(r.getMessageToSign(!1))) : r.getMessageToSign(!1);
                        const o = await this._pathFromAddress(e),
                          i = Number(r.common.chainId()),
                          a = u.v4(),
                          h = d.EthSignRequest.constructETHRequest(s, n, o, this.xfp, a, i),
                          {
                            r: p,
                            s: g,
                            v: m
                          } = await this.requestSignature(
                            a,
                            h,
                            "Scan with your Keystone",
                            'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
                          );
                        return c.TransactionFactory.fromTxData({ ...r.toJSON(), type: r.type, r: p, s: g, v: m }, { common: r.common });
                      }
                      signMessage(e, t) {
                        return this.signPersonalMessage(e, t);
                      }
                      async signPersonalMessage(e, r) {
                        const n = a.stripHexPrefix(r),
                          s = await this._pathFromAddress(e),
                          o = u.v4(),
                          i = d.EthSignRequest.constructETHRequest(t.from(n, "hex"), d.DataType.personalMessage, s, this.xfp, o, void 0, e),
                          {
                            r: l,
                            s: c,
                            v: h
                          } = await this.requestSignature(
                            o,
                            i,
                            "Scan with your Keystone",
                            'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
                          );
                        return "0x" + t.concat([l, c, h]).toString("hex");
                      }
                      async signTypedData(e, r) {
                        const n = await this._pathFromAddress(e),
                          s = u.v4(),
                          o = d.EthSignRequest.constructETHRequest(
                            t.from(JSON.stringify(r), "utf-8"),
                            d.DataType.typedData,
                            n,
                            this.xfp,
                            s,
                            void 0,
                            e
                          ),
                          {
                            r: i,
                            s: a,
                            v: l
                          } = await this.requestSignature(
                            s,
                            o,
                            "Scan with your Keystone",
                            'After your Keystone has signed this data, click on "Scan Keystone" to receive the signature'
                          );
                        return "0x" + t.concat([i, a, l]).toString("hex");
                      }
                      async _pathFromAddress(e) {
                        if (this.keyringMode === s.hd) {
                          const t = a.toChecksumAddress(e);
                          let r = this.indexes[t];
                          if (void 0 === r)
                            for (let e = 0; e < 1e3; e++)
                              if (t === (await this.__addressFromIndex("m", e))) {
                                r = e;
                                break;
                              }
                          if (void 0 === r) throw new Error("Unknown address");
                          return `${this.hdPath}/${this.childrenPath.replace("*", r.toString()).replace(/\*/g, "0")}`;
                        }
                        {
                          const t = a.toChecksumAddress(e),
                            r = this.paths[t];
                          if (void 0 === r) throw new Error("Unknown address");
                          return r;
                        }
                      }
                    }
                    (h.type = "QR Hardware Wallet Device"), (r.BaseKeyring = h);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring",
        file: "node_modules/@keystonehq/base-eth-keyring/dist/base-eth-keyring.cjs.production.min.js"
      }
    ],
    [
      516,
      { "./base-eth-keyring.cjs.development.js": 514, "./base-eth-keyring.cjs.production.min.js": 515 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = e("./base-eth-keyring.cjs.production.min.js");
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring",
        file: "node_modules/@keystonehq/base-eth-keyring/dist/index.js"
      }
    ],
    [
      517,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  if (Array.isArray(e)) {
                    const t = [];
                    for (let r = 0; r < e.length; r++) t.push(n(e[r]));
                    const r = p(...t);
                    return p(i(r.length, 192), r);
                  }
                  const t = y(e);
                  return 1 === t.length && t[0] < 128 ? t : p(i(t.length, 128), t);
                }
                function s(e, t, r) {
                  if (r > e.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                  return e.slice(t, r);
                }
                function o(e) {
                  if (0 === e[0]) throw new Error("invalid RLP: extra zeros");
                  return u(d(e));
                }
                function i(e, t) {
                  if (e < 56) return Uint8Array.from([e + t]);
                  const r = m(e),
                    n = m(t + 55 + r.length / 2);
                  return Uint8Array.from(h(n + r));
                }
                function a(e, t = !1) {
                  if (!e || 0 === e.length) return Uint8Array.from([]);
                  const r = l(y(e));
                  if (t) return r;
                  if (0 !== r.remainder.length) throw new Error("invalid RLP: remainder must be zero");
                  return r.data;
                }
                function l(e) {
                  let t, r, n, i, a;
                  const c = [],
                    d = e[0];
                  if (d <= 127) return { data: e.slice(0, 1), remainder: e.slice(1) };
                  if (d <= 183) {
                    if (((t = d - 127), (n = 128 === d ? Uint8Array.from([]) : s(e, 1, t)), 2 === t && n[0] < 128))
                      throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                    return { data: n, remainder: e.slice(t) };
                  }
                  if (d <= 191) {
                    if (((r = d - 182), e.length - 1 < r)) throw new Error("invalid RLP: not enough bytes for string length");
                    if (((t = o(s(e, 1, r))), t <= 55)) throw new Error("invalid RLP: expected string length to be greater than 55");
                    return (n = s(e, r, t + r)), { data: n, remainder: e.slice(t + r) };
                  }
                  if (d <= 247) {
                    for (t = d - 191, i = s(e, 1, t); i.length; ) (a = l(i)), c.push(a.data), (i = a.remainder);
                    return { data: c, remainder: e.slice(t) };
                  }
                  {
                    if (((r = d - 246), (t = o(s(e, 1, r))), t < 56)) throw new Error("invalid RLP: encoded list too short");
                    const n = r + t;
                    if (n > e.length) throw new Error("invalid RLP: total length is larger than the data");
                    for (i = s(e, r, n); i.length; ) (a = l(i)), c.push(a.data), (i = a.remainder);
                    return { data: c, remainder: e.slice(n) };
                  }
                }
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.utils = r.decode = r.encode = void 0),
                  (r.encode = n),
                  (r.decode = a);
                const c = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
                function d(e) {
                  let t = "";
                  for (let r = 0; r < e.length; r++) t += c[e[r]];
                  return t;
                }
                function u(e) {
                  const t = Number.parseInt(e, 16);
                  if (Number.isNaN(t)) throw new Error("Invalid byte sequence");
                  return t;
                }
                function h(e) {
                  if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
                  if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                  const t = new Uint8Array(e.length / 2);
                  for (let r = 0; r < t.length; r++) {
                    const n = 2 * r;
                    t[r] = u(e.slice(n, n + 2));
                  }
                  return t;
                }
                function p(...e) {
                  if (1 === e.length) return e[0];
                  const t = e.reduce((e, t) => e + t.length, 0),
                    r = new Uint8Array(t);
                  for (let t = 0, n = 0; t < e.length; t++) {
                    const s = e[t];
                    r.set(s, n), (n += s.length);
                  }
                  return r;
                }
                function g(e) {
                  return new TextEncoder().encode(e);
                }
                function m(e) {
                  if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                  const t = e.toString(16);
                  return t.length % 2 ? `0${t}` : t;
                }
                function f(e) {
                  return e.length >= 2 && "0" === e[0] && "x" === e[1];
                }
                function y(e) {
                  if (e instanceof Uint8Array) return e;
                  if ("string" == typeof e)
                    return f(e) ? h((t = "string" != typeof (r = e) ? r : f(r) ? r.slice(2) : r).length % 2 ? `0${t}` : t) : g(e);
                  var t, r;
                  if ("number" == typeof e || "bigint" == typeof e) return e ? h(m(e)) : Uint8Array.from([]);
                  if (null === e || e === undefined) return Uint8Array.from([]);
                  throw new Error("toBytes: received unsupported type " + typeof e);
                }
                r.utils = { bytesToHex: d, concatBytes: p, hexToBytes: h, utf8ToBytes: g };
                const C = { encode: n, decode: a };
                r.default = C;
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring>rlp",
        file: "node_modules/@keystonehq/base-eth-keyring/node_modules/rlp/dist/index.js"
      }
    ],
    [
      52,
      { "../util": 82, "json-rpc-engine": 3102 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.createPendingNonceMiddleware = function ({ getPendingNonce: e }) {
                    return (0, n.createAsyncMiddleware)(async (t, r, n) => {
                      const { method: s, params: o } = t;
                      if ("eth_getTransactionCount" !== s) return void n();
                      const [i, a] = o;
                      "pending" === a ? (r.result = await e(i)) : n();
                    });
                  }),
                  (r.createPendingTxMiddleware = function ({ getPendingTransactionByHash: e }) {
                    return (0, n.createAsyncMiddleware)(async (t, r, n) => {
                      const { method: o, params: i } = t;
                      if ("eth_getTransactionByHash" !== o) return void n();
                      const [a] = i,
                        l = e(a);
                      l ? (r.result = (0, s.formatTxMetaForRpcResult)(l)) : n();
                    });
                  });
                var n = e("json-rpc-engine"),
                  s = e("../util");
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/middleware/pending.js" }
    ],
    [
      53,
      { events: 2745, loglevel: 3322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = o(e("events")),
                  s = o(e("loglevel"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                class i extends n.default {
                  constructor(e = {}) {
                    super();
                    const t = e.migrations || [];
                    this.migrations = t.sort((e, t) => e.version - t.version);
                    const r = this.migrations.slice(-1)[0];
                    this.defaultVersion = e.defaultVersion || (r && r.version) || 0;
                  }
                  async migrateData(e = this.generateInitialState()) {
                    const t = this.migrations.filter(function (t) {
                      return t.version > e.meta.version;
                    });
                    for (const r of t)
                      try {
                        s.default.info(`Running migration ${r.version}...`);
                        const t = await r.migrate(e);
                        if (!t.data) throw new Error("Migrator - migration returned empty data");
                        if (t.version !== undefined && t.meta.version !== r.version)
                          throw new Error("Migrator - Migration did not update version number correctly");
                        (e = t), s.default.info(`Migration ${r.version} complete`);
                      } catch (t) {
                        const n = t.message;
                        return (t.message = `MetaMask Migration Error #${r.version}: ${n}`), this.emit("error", t), e;
                      }
                    return e;
                  }
                  generateInitialState(e) {
                    return { meta: { version: this.defaultVersion }, data: e };
                  }
                }
                r.default = i;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/migrator/index.js" }
    ],
    [
      544,
      { "./metamask-airgapped-keyring.cjs.development.js": 545, "./metamask-airgapped-keyring.cjs.production.min.js": 546 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = e("./metamask-airgapped-keyring.cjs.production.min.js");
              };
            };
      },
      { package: "@keystonehq/metamask-airgapped-keyring", file: "node_modules/@keystonehq/metamask-airgapped-keyring/dist/index.js" }
    ],
    [
      545,
      {
        "@ethereumjs/tx": 380,
        "@keystonehq/base-eth-keyring": 516,
        "@keystonehq/bc-ur-registry-eth": 520,
        "@metamask/obs-store": 551,
        buffer: 2392,
        events: 2745,
        rlp: 3735,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      s = e("@keystonehq/base-eth-keyring"),
                      o = e("events"),
                      i = e("@metamask/obs-store"),
                      a = e("@keystonehq/bc-ur-registry-eth"),
                      l = e("uuid"),
                      c = e("@ethereumjs/tx"),
                      d = (n = e("rlp")) && "object" == typeof n && "default" in n ? n.default : n;
                    class u extends o.EventEmitter {
                      constructor() {
                        if (
                          (super(),
                          (this.cleanSyncListeners = () => {
                            this.removeAllListeners("keystone-sync_success-hdkey"),
                              this.removeAllListeners("keystone-sync_success-account"),
                              this.removeAllListeners("keystone-sync_cancel");
                          }),
                          (this.cleanSignListeners = (e) => {
                            this.removeAllListeners(`${e}-signed`), this.removeAllListeners(`${e}-canceled`);
                          }),
                          (this.readCryptoHDKeyOrCryptoAccount = () =>
                            new Promise((e, r) => {
                              this.memStore.updateState({ sync: { reading: !0 } }),
                                this.on("keystone-sync_success-hdkey", (r) => {
                                  const n = a.CryptoHDKey.fromCBOR(t.from(r, "hex"));
                                  this.resetState(), e(n);
                                }),
                                this.on("keystone-sync_success-account", (r) => {
                                  const n = a.CryptoAccount.fromCBOR(t.from(r, "hex"));
                                  this.resetState(), e(n);
                                }),
                                this.on("keystone-sync_cancel", () => {
                                  this.resetState(), r(new Error("KeystoneError#sync_cancel. Sync process canceled, please retry"));
                                });
                            })),
                          (this.submitCryptoHDKey = (e) => {
                            this.emit("keystone-sync_success-hdkey", e);
                          }),
                          (this.submitCryptoAccount = (e) => {
                            this.emit("keystone-sync_success-account", e);
                          }),
                          (this.cancelSync = () => {
                            this.emit("keystone-sync_cancel");
                          }),
                          (this.requestSignature = (e, r, n) =>
                            new Promise((s, o) => {
                              const i = e.toUR(),
                                c = e.getRequestId(),
                                d = l.stringify(c),
                                u = { requestId: d, payload: { type: i.type, cbor: i.cbor.toString("hex") }, title: r, description: n };
                              this.memStore.updateState({ sign: { request: u } }),
                                this.once(`${d}-signed`, (e) => {
                                  const r = a.ETHSignature.fromCBOR(t.from(e, "hex"));
                                  this.resetState(), s(r);
                                }),
                                this.once(`${d}-canceled`, () => {
                                  this.resetState(), o(new Error("KeystoneError#Tx_canceled. Signing canceled, please retry"));
                                });
                            })),
                          (this.submitSignature = (e, t) => {
                            this.emit(`${e}-signed`, t);
                          }),
                          (this.cancelRequestSignature = () => {
                            const e = this.memStore.getState().sign.request;
                            if (e) {
                              const { requestId: t } = e;
                              this.memStore.updateState({ sign: {} }), this.emit(`${t}-canceled`);
                            }
                          }),
                          (this.reset = () => {
                            this.cleanSyncListeners();
                            const e = this.memStore.getState().sign.request;
                            if (e) {
                              const { requestId: t } = e;
                              this.cleanSignListeners(t);
                            }
                            this.resetState();
                          }),
                          (this.resetState = () => {
                            this.memStore.updateState({ sync: { reading: !1 }, sign: {} });
                          }),
                          u.instance)
                        )
                          return u.instance;
                        (this.memStore = new i.ObservableStore({ sync: { reading: !1 }, sign: {}, _version: 1 })), (u.instance = this);
                      }
                    }
                    class h extends s.BaseKeyring {
                      constructor(e) {
                        if (
                          (super(e),
                          (this.getInteraction = () => new u()),
                          (this.resetStore = () => {
                            this.getInteraction().reset();
                          }),
                          (this.getMemStore = () => this.getInteraction().memStore),
                          (this.removeAccount = (e) => {
                            if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase()))
                              throw new Error(`Address ${e} not found in this keyring`);
                            this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                          }),
                          (this.forgetDevice = () => {
                            (this.page = 0),
                              (this.perPage = 5),
                              (this.accounts = []),
                              (this.currentAccount = 0),
                              (this.name = "QR Hardware"),
                              (this.initialized = !1),
                              (this.xfp = ""),
                              (this.xpub = ""),
                              (this.hdPath = ""),
                              (this.indexes = {}),
                              (this.hdk = undefined),
                              (this.paths = {});
                          }),
                          (this.submitCryptoHDKey = this.getInteraction().submitCryptoHDKey),
                          (this.submitCryptoAccount = this.getInteraction().submitCryptoAccount),
                          (this.submitSignature = this.getInteraction().submitSignature),
                          (this.cancelSync = this.getInteraction().cancelSync),
                          (this.cancelSignRequest = this.getInteraction().cancelRequestSignature),
                          h.instance)
                        )
                          return h.instance.deserialize(e), h.instance;
                        h.instance = this;
                      }
                      async signTransaction(e, t) {
                        const r = 0 === t.type ? a.DataType.transaction : a.DataType.typedTransaction;
                        let n;
                        n = 0 === t.type ? d.encode(t.getMessageToSign(!1)) : t.getMessageToSign(!1);
                        const s = await this._pathFromAddress(e),
                          o = t.common.chainId(),
                          i = l.v4(),
                          u = a.EthSignRequest.constructETHRequest(n, r, s, this.xfp, i, o, e),
                          {
                            r: h,
                            s: p,
                            v: g
                          } = await this.requestSignature(
                            i,
                            u,
                            "Scan with your Keystone",
                            'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
                          ),
                          m = t.toJSON();
                        (m.v = g), (m.s = p), (m.r = h), (m.type = t.type);
                        return c.TransactionFactory.fromTxData(m, { common: t.common });
                      }
                    }
                    (h.type = s.BaseKeyring.type), (r.MetaMaskKeyring = h);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/dist/metamask-airgapped-keyring.cjs.development.js"
      }
    ],
    [
      546,
      {
        "@ethereumjs/tx": 380,
        "@keystonehq/base-eth-keyring": 516,
        "@keystonehq/bc-ur-registry-eth": 520,
        "@metamask/obs-store": 551,
        buffer: 2392,
        events: 2745,
        rlp: 3735,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n,
                      s = e("@keystonehq/base-eth-keyring"),
                      o = e("events"),
                      i = e("@metamask/obs-store"),
                      a = e("@keystonehq/bc-ur-registry-eth"),
                      l = e("uuid"),
                      c = e("@ethereumjs/tx"),
                      d = (n = e("rlp")) && "object" == typeof n && "default" in n ? n.default : n;
                    class u extends o.EventEmitter {
                      constructor() {
                        if (
                          (super(),
                          (this.cleanSyncListeners = () => {
                            this.removeAllListeners("keystone-sync_success-hdkey"),
                              this.removeAllListeners("keystone-sync_success-account"),
                              this.removeAllListeners("keystone-sync_cancel");
                          }),
                          (this.cleanSignListeners = (e) => {
                            this.removeAllListeners(e + "-signed"), this.removeAllListeners(e + "-canceled");
                          }),
                          (this.readCryptoHDKeyOrCryptoAccount = () =>
                            new Promise((e, r) => {
                              this.memStore.updateState({ sync: { reading: !0 } }),
                                this.on("keystone-sync_success-hdkey", (r) => {
                                  const n = a.CryptoHDKey.fromCBOR(t.from(r, "hex"));
                                  this.resetState(), e(n);
                                }),
                                this.on("keystone-sync_success-account", (r) => {
                                  const n = a.CryptoAccount.fromCBOR(t.from(r, "hex"));
                                  this.resetState(), e(n);
                                }),
                                this.on("keystone-sync_cancel", () => {
                                  this.resetState(), r(new Error("KeystoneError#sync_cancel. Sync process canceled, please retry"));
                                });
                            })),
                          (this.submitCryptoHDKey = (e) => {
                            this.emit("keystone-sync_success-hdkey", e);
                          }),
                          (this.submitCryptoAccount = (e) => {
                            this.emit("keystone-sync_success-account", e);
                          }),
                          (this.cancelSync = () => {
                            this.emit("keystone-sync_cancel");
                          }),
                          (this.requestSignature = (e, r, n) =>
                            new Promise((s, o) => {
                              const i = e.toUR(),
                                c = e.getRequestId(),
                                d = l.stringify(c),
                                u = { requestId: d, payload: { type: i.type, cbor: i.cbor.toString("hex") }, title: r, description: n };
                              this.memStore.updateState({ sign: { request: u } }),
                                this.once(d + "-signed", (e) => {
                                  const r = a.ETHSignature.fromCBOR(t.from(e, "hex"));
                                  this.resetState(), s(r);
                                }),
                                this.once(d + "-canceled", () => {
                                  this.resetState(), o(new Error("KeystoneError#Tx_canceled. Signing canceled, please retry"));
                                });
                            })),
                          (this.submitSignature = (e, t) => {
                            this.emit(e + "-signed", t);
                          }),
                          (this.cancelRequestSignature = () => {
                            const e = this.memStore.getState().sign.request;
                            if (e) {
                              const { requestId: t } = e;
                              this.memStore.updateState({ sign: {} }), this.emit(t + "-canceled");
                            }
                          }),
                          (this.reset = () => {
                            this.cleanSyncListeners();
                            const e = this.memStore.getState().sign.request;
                            if (e) {
                              const { requestId: t } = e;
                              this.cleanSignListeners(t);
                            }
                            this.resetState();
                          }),
                          (this.resetState = () => {
                            this.memStore.updateState({ sync: { reading: !1 }, sign: {} });
                          }),
                          u.instance)
                        )
                          return u.instance;
                        (this.memStore = new i.ObservableStore({ sync: { reading: !1 }, sign: {}, _version: 1 })), (u.instance = this);
                      }
                    }
                    class h extends s.BaseKeyring {
                      constructor(e) {
                        if (
                          (super(e),
                          (this.getInteraction = () => new u()),
                          (this.resetStore = () => {
                            this.getInteraction().reset();
                          }),
                          (this.getMemStore = () => this.getInteraction().memStore),
                          (this.removeAccount = (e) => {
                            if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase()))
                              throw new Error(`Address ${e} not found in this keyring`);
                            this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                          }),
                          (this.forgetDevice = () => {
                            (this.page = 0),
                              (this.perPage = 5),
                              (this.accounts = []),
                              (this.currentAccount = 0),
                              (this.name = "QR Hardware"),
                              (this.initialized = !1),
                              (this.xfp = ""),
                              (this.xpub = ""),
                              (this.hdPath = ""),
                              (this.indexes = {}),
                              (this.hdk = void 0),
                              (this.paths = {});
                          }),
                          (this.submitCryptoHDKey = this.getInteraction().submitCryptoHDKey),
                          (this.submitCryptoAccount = this.getInteraction().submitCryptoAccount),
                          (this.submitSignature = this.getInteraction().submitSignature),
                          (this.cancelSync = this.getInteraction().cancelSync),
                          (this.cancelSignRequest = this.getInteraction().cancelRequestSignature),
                          h.instance)
                        )
                          return h.instance.deserialize(e), h.instance;
                        h.instance = this;
                      }
                      async signTransaction(e, t) {
                        const r = 0 === t.type ? a.DataType.transaction : a.DataType.typedTransaction;
                        let n;
                        n = 0 === t.type ? d.encode(t.getMessageToSign(!1)) : t.getMessageToSign(!1);
                        const s = await this._pathFromAddress(e),
                          o = t.common.chainId(),
                          i = l.v4(),
                          u = a.EthSignRequest.constructETHRequest(n, r, s, this.xfp, i, o, e),
                          {
                            r: h,
                            s: p,
                            v: g
                          } = await this.requestSignature(
                            i,
                            u,
                            "Scan with your Keystone",
                            'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
                          ),
                          m = t.toJSON();
                        return (m.v = g), (m.s = p), (m.r = h), (m.type = t.type), c.TransactionFactory.fromTxData(m, { common: t.common });
                      }
                    }
                    (h.type = s.BaseKeyring.type), (r.MetaMaskKeyring = h);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/dist/metamask-airgapped-keyring.cjs.production.min.js"
      }
    ],
    [
      547,
      { "./ObservableStore": 549 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ComposedStore = void 0);
                const n = e("./ObservableStore");
                class s extends n.ObservableStore {
                  constructor(e) {
                    super({}),
                      (this._children = e || {}),
                      Object.keys(this._children).forEach((e) => {
                        const t = this._children[e];
                        this._addChild(e, t);
                      });
                  }
                  _addChild(e, t) {
                    const r = (t) => {
                      const r = this.getState();
                      (r[e] = t), this.putState(r);
                    };
                    t.subscribe(r), r(t.getState());
                  }
                }
                r.ComposedStore = s;
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/ComposedStore.js"
      }
    ],
    [
      548,
      { "./ObservableStore": 549 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.MergedStore = void 0);
                const n = e("./ObservableStore");
                class s extends n.ObservableStore {
                  constructor(e = []) {
                    super({}), (this._children = e), e.forEach((e) => this._addChild(e)), this._updateWholeState();
                  }
                  _addChild(e) {
                    e.subscribe(() => this._updateWholeState());
                  }
                  _updateWholeState() {
                    const e = this._children.map((e) => e.getState()),
                      t = Object.assign({}, ...e);
                    this.putState(t);
                  }
                }
                r.MergedStore = s;
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/MergedStore.js"
      }
    ],
    [
      549,
      { "@metamask/safe-event-emitter": 1594 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.ObservableStore = void 0);
                const s = n(e("@metamask/safe-event-emitter"));
                class o extends s.default {
                  constructor(e) {
                    super(), (this._state = e || {});
                  }
                  getState() {
                    return this._getState();
                  }
                  putState(e) {
                    this._putState(e), this.emit("update", e);
                  }
                  updateState(e) {
                    if (e && "object" == typeof e) {
                      const t = this.getState();
                      this.putState(Object.assign(Object.assign({}, t), e));
                    } else this.putState(e);
                  }
                  subscribe(e) {
                    this.on("update", e);
                  }
                  unsubscribe(e) {
                    this.removeListener("update", e);
                  }
                  _getState() {
                    return this._state;
                  }
                  _putState(e) {
                    this._state = e;
                  }
                }
                r.ObservableStore = o;
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/ObservableStore.js"
      }
    ],
    [
      55,
      { "../platforms/extension": 196, "@metamask/safe-event-emitter": 1594 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.NOTIFICATION_MANAGER_EVENTS = void 0);
                var n = o(e("@metamask/safe-event-emitter")),
                  s = o(e("../platforms/extension"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = (r.NOTIFICATION_MANAGER_EVENTS = { POPUP_CLOSED: "onPopupClosed" });
                class a extends n.default {
                  constructor() {
                    super(), (this.platform = new s.default()), this.platform.addOnRemovedListener(this._onWindowClosed.bind(this));
                  }
                  markAsAutomaticallyClosed() {
                    this._popupAutomaticallyClosed = !0;
                  }
                  async showPopup(e, t) {
                    (this._popupId = t), (this._setCurrentPopupId = e);
                    const r = await this._getPopup(t);
                    if (r) await this.platform.focusWindow(r.id);
                    else {
                      let e = 0,
                        t = 0;
                      try {
                        const r = await this.platform.getLastFocusedWindow();
                        (t = r.top), (e = Math.max(r.left + (r.width - 360), 0));
                      } catch (r) {
                        const { screenX: n, screenY: s, outerWidth: o } = window;
                        (t = Math.max(s, 0)), (e = Math.max(n + (o - 360), 0));
                      }
                      const r = await this.platform.openWindow({
                        url: "notification.html",
                        type: "popup",
                        width: 360,
                        height: 620,
                        left: e,
                        top: t
                      });
                      r.left !== e && "fullscreen" !== r.state && (await this.platform.updateWindowPosition(r.id, e, t)),
                        this._setCurrentPopupId(r.id),
                        (this._popupId = r.id);
                    }
                  }
                  _onWindowClosed(e) {
                    e === this._popupId &&
                      (this._setCurrentPopupId(undefined),
                      (this._popupId = undefined),
                      this.emit(i.POPUP_CLOSED, { automaticallyClosed: this._popupAutomaticallyClosed }),
                      (this._popupAutomaticallyClosed = undefined));
                  }
                  async _getPopup() {
                    const e = await this.platform.getAllWindows();
                    return this._getPopupIn(e);
                  }
                  _getPopupIn(e) {
                    return e ? e.find((e) => e && "popup" === e.type && e.id === this._popupId) : null;
                  }
                }
                r.default = a;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/notification-manager.js" }
    ],
    [
      550,
      { stream: 3806 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.storeAsStream = void 0);
                const n = e("stream");
                class s extends n.Duplex {
                  constructor(e) {
                    super({ objectMode: !0 }),
                      this.resume(),
                      (this.handler = (e) => this.push(e)),
                      (this.obsStore = e),
                      this.obsStore.subscribe(this.handler);
                  }
                  pipe(e, t) {
                    const r = super.pipe(e, t);
                    return e.write(this.obsStore.getState()), r;
                  }
                  _write(e, t, r) {
                    this.obsStore.putState(e), r();
                  }
                  _read(e) {
                    return undefined;
                  }
                  _destroy(e, t) {
                    this.obsStore.unsubscribe(this.handler), super._destroy(e, t);
                  }
                }
                r.storeAsStream = function (e) {
                  return new s(e);
                };
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/asStream.js"
      }
    ],
    [
      551,
      { "./ComposedStore": 547, "./MergedStore": 548, "./ObservableStore": 549, "./asStream": 550, "./transform": 552 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r),
                            Object.defineProperty(e, n, {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            });
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  s(e("./asStream"), r),
                  s(e("./ComposedStore"), r),
                  s(e("./MergedStore"), r),
                  s(e("./ObservableStore"), r),
                  s(e("./transform"), r);
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/index.js"
      }
    ],
    [
      552,
      { through2: 553 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.storeTransformStream = void 0);
                const n = e("through2");
                r.storeTransformStream = function (e) {
                  return n.obj((t, r, n) => {
                    try {
                      return n(null, e(t)), undefined;
                    } catch (e) {
                      return n(e), undefined;
                    }
                  });
                };
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/@metamask/obs-store/dist/transform.js"
      }
    ],
    [
      553,
      { _process: 3445, "readable-stream": 3701, util: 3901, xtend: 3941 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (r) {
                  (function () {
                    var n = e("readable-stream").Transform,
                      s = e("util").inherits,
                      o = e("xtend");
                    function i(e) {
                      n.call(this, e), (this._destroyed = !1);
                    }
                    function a(e, t, r) {
                      r(null, e);
                    }
                    function l(e) {
                      return function (t, r, n) {
                        return (
                          "function" == typeof t && ((n = r), (r = t), (t = {})),
                          "function" != typeof r && (r = a),
                          "function" != typeof n && (n = null),
                          e(t, r, n)
                        );
                      };
                    }
                    s(i, n),
                      (i.prototype.destroy = function (e) {
                        if (!this._destroyed) {
                          this._destroyed = !0;
                          var t = this;
                          r.nextTick(function () {
                            e && t.emit("error", e), t.emit("close");
                          });
                        }
                      }),
                      (t.exports = l(function (e, t, r) {
                        var n = new i(e);
                        return (n._transform = t), r && (n._flush = r), n;
                      })),
                      (t.exports.ctor = l(function (e, t, r) {
                        function n(t) {
                          if (!(this instanceof n)) return new n(t);
                          (this.options = o(e, t)), i.call(this, this.options);
                        }
                        return s(n, i), (n.prototype._transform = t), r && (n.prototype._flush = r), n;
                      })),
                      (t.exports.obj = l(function (e, t, r) {
                        var n = new i(o({ objectMode: !0, highWaterMark: 16 }, e));
                        return (n._transform = t), r && (n._flush = r), n;
                      }));
                  }).call(this);
                }).call(this, e("_process"));
              };
            };
      },
      {
        package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store>through2",
        file: "node_modules/@keystonehq/metamask-airgapped-keyring/node_modules/through2/through2.js"
      }
    ],
    [
      56,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e, t) {
                  !(function (e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
                  })(e, t),
                    t.add(e);
                }
                function s(e, t, r) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (r !== undefined) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = r),
                    e
                  );
                }
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.IndexedDBPPOMStorage = void 0);
                const o = async (e, t, r) => {
                  const n = await crypto.subtle.digest("SHA-256", t);
                  if (
                    Array.from(new Uint8Array(n))
                      .map((e) => e.toString(16).padStart(2, "0"))
                      .join("") !== r
                  )
                    throw new Error(`Checksum mismatch for key ${e}`);
                };
                var i = new WeakSet();
                function a(e) {
                  return new Promise((t, r) => {
                    const n = indexedDB.open(this.storeName, this.dbVersion);
                    (n.onerror = (e) => {
                      var t;
                      r(
                        new Error(
                          `Failed to open database ${this.storeName}: ${null === (t = e.target) || void 0 === t ? void 0 : t.error}`
                        )
                      );
                    }),
                      (n.onupgradeneeded = (e) => {
                        const t = e.target.result;
                        t.objectStoreNames.contains(this.storeName) ||
                          t.createObjectStore(this.storeName, { keyPath: ["name", "chainId"] });
                      }),
                      (n.onsuccess = (r) => {
                        const n = r.target.result.transaction([this.storeName], e).objectStore(this.storeName);
                        t(n);
                      });
                  });
                }
                r.IndexedDBPPOMStorage = class {
                  constructor(e, t) {
                    n(this, i), s(this, "storeName", void 0), s(this, "dbVersion", void 0), (this.storeName = e), (this.dbVersion = t);
                  }
                  async objectStoreAction(e, t, r = "readonly") {
                    return new Promise((n, s) => {
                      (function (e, t, r) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return r;
                      })(this, i, a)
                        .call(this, r)
                        .then((r) => {
                          const o = r[e](t);
                          (o.onsuccess = async (e) => {
                            n(e);
                          }),
                            (o.onerror = (t) => {
                              var r;
                              s(
                                new Error(`Error in indexDB operation ${e}: ${null === (r = t.target) || void 0 === r ? void 0 : r.error}`)
                              );
                            });
                        })
                        .catch((e) => {
                          s(e);
                        });
                    });
                  }
                  async read(e, t) {
                    var r;
                    const n =
                      null === (r = (await this.objectStoreAction("get", [e.name, e.chainId])).target) ||
                      void 0 === r ||
                      null === (r = r.result) ||
                      void 0 === r
                        ? void 0
                        : r.data;
                    return await o(e, n, t), n;
                  }
                  async write(e, t, r) {
                    await o(e, t, r), await this.objectStoreAction("put", { ...e, data: t }, "readwrite");
                  }
                  async delete(e) {
                    await this.objectStoreAction("delete", [e.name, e.chainId], "readwrite");
                  }
                  async dir() {
                    var e;
                    return null === (e = (await this.objectStoreAction("getAllKeys")).target) || void 0 === e
                      ? void 0
                      : e.result.map(([e, t]) => ({ name: e, chainId: t }));
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/ppom/indexed-db-backend.ts" }
    ],
    [
      57,
      { "../../../../shared/constants/network": 3963, "../../../../shared/constants/security-provider": 3966 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.createPPOMMiddleware = function (e, t, r) {
                    return async (a, l, c) => {
                      try {
                        var d;
                        const n = null === (d = t.store.getState()) || void 0 === d ? void 0 : d.securityAlertsEnabled,
                          { chainId: o } = r.state.providerConfig;
                        n &&
                          i.includes(a.method) &&
                          o === s.CHAIN_IDS.MAINNET &&
                          (a.securityAlertResponse = await e.usePPOM(async (e) => e.validateJsonRpc(a)));
                      } catch (e) {
                        null == o || o.captureException(e),
                          console.error("Error validating JSON RPC using PPOM: ", e),
                          (a.securityAlertResponse = {
                            result_type: n.BlockaidResultType.Failed,
                            reason: n.BlockaidReason.failed,
                            description: "Validating the confirmation failed by throwing error."
                          });
                      } finally {
                        c();
                      }
                    };
                  });
                var n = e("../../../../shared/constants/security-provider"),
                  s = e("../../../../shared/constants/network");
                const { sentry: o } = global,
                  i = Object.freeze([
                    "eth_sendRawTransaction",
                    "eth_sendTransaction",
                    "eth_sign",
                    "eth_signTypedData",
                    "eth_signTypedData_v1",
                    "eth_signTypedData_v3",
                    "eth_signTypedData_v4",
                    "personal_sign"
                  ]);
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/ppom/ppom-middleware.ts" }
    ],
    [
      58,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                let n;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.default = r.PPOM = void 0),
                  (r.initSync = function (e) {
                    if (n !== undefined) return n;
                    const t = A();
                    e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
                    const r = new WebAssembly.Instance(e, t);
                    return E(r, e);
                  }),
                  (r.main = function () {
                    n.main();
                  });
                const s = new Array(128).fill(undefined);
                function o(e) {
                  return s[e];
                }
                s.push(undefined, null, !0, !1);
                let i = s.length;
                function a(e) {
                  const t = o(e);
                  return (
                    (function (e) {
                      e < 132 || ((s[e] = i), (i = e));
                    })(e),
                    t
                  );
                }
                let l = 0,
                  c = null;
                function d() {
                  return (null !== c && 0 !== c.byteLength) || (c = new Uint8Array(n.memory.buffer)), c;
                }
                const u =
                    "undefined" != typeof TextEncoder
                      ? new TextEncoder("utf-8")
                      : {
                          encode: () => {
                            throw Error("TextEncoder not available");
                          }
                        },
                  h =
                    "function" == typeof u.encodeInto
                      ? function (e, t) {
                          return u.encodeInto(e, t);
                        }
                      : function (e, t) {
                          const r = u.encode(e);
                          return t.set(r), { read: e.length, written: r.length };
                        };
                function p(e, t, r) {
                  if (r === undefined) {
                    const r = u.encode(e),
                      n = t(r.length, 1) >>> 0;
                    return (
                      d()
                        .subarray(n, n + r.length)
                        .set(r),
                      (l = r.length),
                      n
                    );
                  }
                  let n = e.length,
                    s = t(n, 1) >>> 0;
                  const o = d();
                  let i = 0;
                  for (; i < n; i++) {
                    const t = e.charCodeAt(i);
                    if (t > 127) break;
                    o[s + i] = t;
                  }
                  if (i !== n) {
                    0 !== i && (e = e.slice(i)), (s = r(s, n, (n = i + 3 * e.length), 1) >>> 0);
                    const t = d().subarray(s + i, s + n);
                    i += h(e, t).written;
                  }
                  return (l = i), s;
                }
                let g = null;
                function m() {
                  return (null !== g && 0 !== g.byteLength) || (g = new Int32Array(n.memory.buffer)), g;
                }
                const f =
                  "undefined" != typeof TextDecoder
                    ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
                    : {
                        decode: () => {
                          throw Error("TextDecoder not available");
                        }
                      };
                function y(e, t) {
                  return (e >>>= 0), f.decode(d().subarray(e, e + t));
                }
                function C(e) {
                  i === s.length && s.push(s.length + 1);
                  const t = i;
                  return (i = s[t]), (s[t] = e), t;
                }
                function w(e) {
                  const t = typeof e;
                  if ("number" == t || "boolean" == t || null == e) return `${e}`;
                  if ("string" == t) return `"${e}"`;
                  if ("symbol" == t) {
                    const t = e.description;
                    return null == t ? "Symbol" : `Symbol(${t})`;
                  }
                  if ("function" == t) {
                    const t = e.name;
                    return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function";
                  }
                  if (Array.isArray(e)) {
                    const t = e.length;
                    let r = "[";
                    t > 0 && (r += w(e[0]));
                    for (let n = 1; n < t; n++) r += ", " + w(e[n]);
                    return (r += "]"), r;
                  }
                  const r = /\[object ([^\]]+)\]/.exec(toString.call(e));
                  let n;
                  if (!(r.length > 1)) return toString.call(e);
                  if (((n = r[1]), "Object" == n))
                    try {
                      return "Object(" + JSON.stringify(e) + ")";
                    } catch (e) {
                      return "Object";
                    }
                  return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : n;
                }
                function b(e, t, r) {
                  n._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke(e, t, C(r));
                }
                function v(e, t) {
                  n._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__destroy(e, t);
                }
                "undefined" != typeof TextDecoder && f.decode();
                let k = null;
                function S(e, t) {
                  const r = t(4 * e.length, 4) >>> 0,
                    s = ((null !== k && 0 !== k.byteLength) || (k = new Uint32Array(n.memory.buffer)), k);
                  for (let t = 0; t < e.length; t++) s[r / 4 + t] = C(e[t]);
                  return (l = e.length), r;
                }
                function _(e, t) {
                  try {
                    return e.apply(this, t);
                  } catch (e) {
                    n.__wbindgen_exn_store(C(e));
                  }
                }
                class T {
                  static __wrap(e) {
                    e >>>= 0;
                    const t = Object.create(T.prototype);
                    return (t.__wbg_ptr = e), t;
                  }
                  __destroy_into_raw() {
                    const e = this.__wbg_ptr;
                    return (this.__wbg_ptr = 0), e;
                  }
                  free() {
                    const e = this.__destroy_into_raw();
                    n.__wbg_ppom_free(e);
                  }
                  static new(e, t) {
                    const r = S(t, n.__wbindgen_malloc),
                      s = l;
                    return a(n.ppom_new(C(e), r, s));
                  }
                  validateJsonRpc(e) {
                    return a(n.ppom_validateJsonRpc(this.__wbg_ptr, C(e)));
                  }
                }
                function A() {
                  const e = { wbg: {} };
                  return (
                    (e.wbg.__wbg_buffer_085ec1f694018c4f = function (e) {
                      return C(o(e).buffer);
                    }),
                    (e.wbg.__wbg_call_01734de55d61e11d = function () {
                      return _(function (e, t, r) {
                        return C(o(e).call(o(t), o(r)));
                      }, arguments);
                    }),
                    (e.wbg.__wbg_call_4c92f6aec1e1d6e6 = function () {
                      return _(function (e, t, r, n) {
                        return C(o(e).call(o(t), o(r), o(n)));
                      }, arguments);
                    }),
                    (e.wbg.__wbg_from_d7c216d4616bb368 = function (e) {
                      return C(Array.from(o(e)));
                    }),
                    (e.wbg.__wbg_get_44be0491f933a435 = function (e, t) {
                      return C(o(e)[t >>> 0]);
                    }),
                    (e.wbg.__wbg_length_72e2208bbc0efc61 = function (e) {
                      return o(e).length;
                    }),
                    (e.wbg.__wbg_length_d813e535247d427e = function (e) {
                      return o(e).length;
                    }),
                    (e.wbg.__wbg_length_fff51ee6522a1a18 = function (e) {
                      return o(e).length;
                    }),
                    (e.wbg.__wbg_new_43f1b47c28813cbd = function (e, t) {
                      try {
                        var r = { a: e, b: t };
                        const s = new Promise((e, t) => {
                          const s = r.a;
                          r.a = 0;
                          try {
                            return (function (e, t, r, s) {
                              n.wasm_bindgen__convert__closures__invoke2_mut(e, t, C(r), C(s));
                            })(s, r.b, e, t);
                          } finally {
                            r.a = s;
                          }
                        });
                        return C(s);
                      } finally {
                        r.a = r.b = 0;
                      }
                    }),
                    (e.wbg.__wbg_new_8125e318e6245eed = function (e) {
                      return C(new Uint8Array(o(e)));
                    }),
                    (e.wbg.__wbg_parse_670c19d4e984792e = function () {
                      return _(function (e, t) {
                        return C(JSON.parse(y(e, t)));
                      }, arguments);
                    }),
                    (e.wbg.__wbg_ppom_new = function (e) {
                      return C(T.__wrap(e));
                    }),
                    (e.wbg.__wbg_resolve_53698b95aaf7fcf8 = function (e) {
                      return C(Promise.resolve(o(e)));
                    }),
                    (e.wbg.__wbg_set_5cf90238115182c3 = function (e, t, r) {
                      o(e).set(o(t), r >>> 0);
                    }),
                    (e.wbg.__wbg_stringify_e25465938f3f611f = function () {
                      return _(function (e) {
                        return C(JSON.stringify(o(e)));
                      }, arguments);
                    }),
                    (e.wbg.__wbg_then_b2267541e2a73865 = function (e, t, r) {
                      return C(o(e).then(o(t), o(r)));
                    }),
                    (e.wbg.__wbg_then_f7e06ee3c11698eb = function (e, t) {
                      return C(o(e).then(o(t)));
                    }),
                    (e.wbg.__wbindgen_cb_drop = function (e) {
                      const t = a(e).original;
                      if (1 == t.cnt--) return (t.a = 0), !0;
                      return !1;
                    }),
                    (e.wbg.__wbindgen_closure_wrapper_wasm_bindgen__closure__Closure_T___wrap__breaks_if_inlined = function (e, t, r) {
                      const n = (function (e, t, r, n) {
                        const s = { a: e, b: t, cnt: 1 },
                          o = (...e) => {
                            s.cnt++;
                            const t = s.a;
                            s.a = 0;
                            try {
                              return n(t, s.b, ...e);
                            } finally {
                              0 == --s.cnt ? r(t, s.b) : (s.a = t);
                            }
                          };
                        return (o.original = s), o;
                      })(e, t, v, b);
                      return C(n);
                    }),
                    (e.wbg.__wbindgen_debug_string = function (e, t) {
                      const r = p(w(o(t)), n.__wbindgen_malloc, n.__wbindgen_realloc),
                        s = l;
                      (m()[e / 4 + 1] = s), (m()[e / 4 + 0] = r);
                    }),
                    (e.wbg.__wbindgen_error_new = function (e, t) {
                      return C(new Error(y(e, t)));
                    }),
                    (e.wbg.__wbindgen_is_undefined = function (e) {
                      return o(e) === undefined;
                    }),
                    (e.wbg.__wbindgen_memory = function () {
                      return C(n.memory);
                    }),
                    (e.wbg.__wbindgen_object_drop_ref = function (e) {
                      a(e);
                    }),
                    (e.wbg.__wbindgen_string_get = function (e, t) {
                      const r = o(t),
                        s = "string" == typeof r ? r : undefined;
                      var i,
                        a = (i = s) === undefined || null === i ? 0 : p(s, n.__wbindgen_malloc, n.__wbindgen_realloc),
                        c = l;
                      (m()[e / 4 + 1] = c), (m()[e / 4 + 0] = a);
                    }),
                    (e.wbg.__wbindgen_string_new = function (e, t) {
                      return C(y(e, t));
                    }),
                    (e.wbg.__wbindgen_throw = function (e, t) {
                      throw new Error(y(e, t));
                    }),
                    e
                  );
                }
                function E(e, t) {
                  return (n = e.exports), (M.__wbindgen_wasm_module = t), (g = null), (k = null), (c = null), n.__wbindgen_start(), n;
                }
                async function M(e) {
                  if (n !== undefined) return n;
                  const t = A();
                  ("string" == typeof e ||
                    ("function" == typeof Request && e instanceof Request) ||
                    ("function" == typeof URL && e instanceof URL)) &&
                    (e = fetch(e));
                  const { instance: r, module: s } = await (async function (e, t) {
                    if ("function" == typeof Response && e instanceof Response) {
                      if ("function" == typeof WebAssembly.instantiateStreaming)
                        try {
                          return await WebAssembly.instantiateStreaming(e, t);
                        } catch (t) {
                          if ("application/wasm" == e.headers.get("Content-Type")) throw t;
                          console.warn(
                            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                            t
                          );
                        }
                      const r = await e.arrayBuffer();
                      return await WebAssembly.instantiate(r, t);
                    }
                    {
                      const r = await WebAssembly.instantiate(e, t);
                      return r instanceof WebAssembly.Instance ? { instance: r, module: e } : r;
                    }
                  })(await e, t);
                  return E(r, s);
                }
                r.PPOM = T;
                r.default = M;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/ppom/ppom.js" }
    ],
    [
      59,
      {
        "../../../../shared/constants/network": 3963,
        "./handlers": 63,
        "@metamask/permission-controller": 1491,
        "@metamask/snaps-rpc-methods": 1692,
        "eth-rpc-errors": 2648,
        lodash: 3312
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.createMethodMiddleware = function (e) {
                    const t = u.filter((t) => !Object.hasOwnProperty.call(e, t));
                    if (t.length > 0) throw new Error(`Missing expected hooks:\n\n${t.join("\n")}\n`);
                    return async function (t, r, n, s) {
                      if (l.UNSUPPORTED_RPC_METHODS.has(t.method)) return s(i.ethErrors.rpc.methodNotSupported());
                      const a = d.get(t.method);
                      if (a) {
                        const { implementation: i, hookNames: l } = a;
                        try {
                          return await i(t, r, n, s, (0, o.selectHooks)(e, l));
                        } catch (e) {
                          return s(e);
                        }
                      }
                      return n();
                    };
                  }),
                  (r.createSnapMethodMiddleware = function (e, t) {
                    return async function (r, n, s, a) {
                      const l = h.get(r.method);
                      if (l) {
                        if (/^snap_/iu.test(r.method) && !e) return a(i.ethErrors.rpc.methodNotFound());
                        const { implementation: c, hookNames: d } = l;
                        try {
                          return await c(r, n, s, a, (0, o.selectHooks)(t, d));
                        } catch (e) {
                          return a(e);
                        }
                      }
                      return s();
                    };
                  });
                var n,
                  s = e("@metamask/permission-controller"),
                  o = e("@metamask/snaps-rpc-methods"),
                  i = e("eth-rpc-errors"),
                  a = e("lodash"),
                  l = e("../../../../shared/constants/network");
                const c = [...((n = e("./handlers")) && n.__esModule ? n : { default: n }).default, ...s.permissionRpcMethods.handlers],
                  d = c.reduce((e, t) => {
                    for (const r of t.methodNames) e.set(r, t);
                    return e;
                  }, new Map()),
                  u = Array.from(new Set((0, a.flatten)(c.map(({ hookNames: e }) => Object.keys(e)))).values());
                const h = o.permittedMethods.reduce((e, t) => {
                  for (const r of t.methodNames) e.set(r, t);
                  return e;
                }, new Map());
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/createMethodMiddleware.js" }
    ],
    [
      6,
      { "../../../shared/constants/alerts": 3952, "@metamask/obs-store": 1483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/obs-store"),
                  s = e("../../../shared/constants/alerts");
                const o = {
                  alertEnabledness: s.TOGGLEABLE_ALERT_TYPES.reduce((e, t) => ((e[t] = !0), e), {}),
                  unconnectedAccountAlertShownOrigins: {},
                  web3ShimUsageOrigins: {}
                };
                r.default = class {
                  constructor(e = {}) {
                    const { initState: t = {}, preferencesStore: r } = e,
                      s = { ...o, alertEnabledness: { ...o.alertEnabledness, ...t.alertEnabledness } };
                    (this.store = new n.ObservableStore(s)),
                      (this.selectedAddress = r.getState().selectedAddress),
                      r.subscribe(({ selectedAddress: e }) => {
                        this.store.getState().unconnectedAccountAlertShownOrigins &&
                          this.selectedAddress !== e &&
                          ((this.selectedAddress = e), this.store.updateState({ unconnectedAccountAlertShownOrigins: {} }));
                      });
                  }
                  setAlertEnabledness(e, t) {
                    let { alertEnabledness: r } = this.store.getState();
                    (r = { ...r }), (r[e] = t), this.store.updateState({ alertEnabledness: r });
                  }
                  setUnconnectedAccountAlertShown(e) {
                    let { unconnectedAccountAlertShownOrigins: t } = this.store.getState();
                    (t = { ...t }), (t[e] = !0), this.store.updateState({ unconnectedAccountAlertShownOrigins: t });
                  }
                  getWeb3ShimUsageState(e) {
                    return this.store.getState().web3ShimUsageOrigins[e];
                  }
                  setWeb3ShimUsageRecorded(e) {
                    this._setWeb3ShimUsageState(e, s.Web3ShimUsageAlertStates.recorded);
                  }
                  setWeb3ShimUsageAlertDismissed(e) {
                    this._setWeb3ShimUsageState(e, s.Web3ShimUsageAlertStates.dismissed);
                  }
                  _setWeb3ShimUsageState(e, t) {
                    let { web3ShimUsageOrigins: r } = this.store.getState();
                    (r = { ...r }), (r[e] = t), this.store.updateState({ web3ShimUsageOrigins: r });
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/alert.js" }
    ],
    [
      60,
      {
        "../../../../../shared/constants/app": 3953,
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../../shared/modules/network.utils": 3996,
        "../../util": 82,
        "@metamask/controller-utils": 1056,
        "eth-rpc-errors": 2648,
        lodash: 3312
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/controller-utils"),
                  s = e("eth-rpc-errors"),
                  o = e("lodash"),
                  i = e("../../../../../shared/constants/app"),
                  a = e("../../../../../shared/constants/metametrics"),
                  l = e("../../../../../shared/modules/network.utils"),
                  c = e("../../util");
                const d = {
                  methodNames: [i.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN],
                  implementation: async function (
                    e,
                    t,
                    r,
                    d,
                    {
                      upsertNetworkConfiguration: u,
                      getCurrentChainId: h,
                      getCurrentRpcUrl: p,
                      findNetworkConfigurationBy: g,
                      setActiveNetwork: m,
                      requestUserApproval: f,
                      startApprovalFlow: y,
                      endApprovalFlow: C,
                      getProviderConfig: w
                    }
                  ) {
                    var b;
                    if (null === (b = e.params) || void 0 === b || !b[0] || "object" != typeof e.params[0])
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `Expected single, object parameter. Received:\n${JSON.stringify(e.params)}`
                        })
                      );
                    const { origin: v } = e,
                      { chainId: k, chainName: S = null, blockExplorerUrls: _ = null, nativeCurrency: T = null, rpcUrls: A } = e.params[0],
                      E = Object.keys(
                        (0, o.omit)(e.params[0], ["chainId", "chainName", "blockExplorerUrls", "iconUrls", "rpcUrls", "nativeCurrency"])
                      );
                    if (E.length > 0)
                      return d(
                        s.ethErrors.rpc.invalidParams({ message: `Received unexpected keys on object parameter. Unsupported keys:\n${E}` })
                      );
                    function M(e) {
                      const t = (0, c.getValidUrl)(e);
                      return null !== t && ("localhost" === t.hostname || "127.0.0.1" === t.hostname || "https:" === t.protocol);
                    }
                    const P = Array.isArray(A) ? A.find((e) => M(e)) : null,
                      N = null !== _ && Array.isArray(_) ? _.find((e) => M(e)) : null;
                    if (!P)
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `Expected an array with at least one valid string HTTPS url 'rpcUrls', Received:\n${A}`
                        })
                      );
                    if (null !== _ && !N)
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `Expected null or array with at least one valid string HTTPS URL 'blockExplorerUrl'. Received: ${_}`
                        })
                      );
                    const I = "string" == typeof k && k.toLowerCase();
                    if (!(0, l.isPrefixedFormattedHexString)(I))
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${k}`
                        })
                      );
                    if (!(0, l.isSafeChainId)(parseInt(I, 16)))
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `Invalid chain ID "${I}": numerical value greater than max safe value. Received:\n${k}`
                        })
                      );
                    const R = g({ chainId: I });
                    if (R && R.rpcUrl === P) {
                      t.result = null;
                      const e = h(),
                        r = p();
                      if (e === I && r === P) return d();
                      try {
                        await f({
                          origin: v,
                          type: n.ApprovalType.SwitchEthereumChain,
                          requestData: { toNetworkConfiguration: R, fromNetworkConfiguration: w() }
                        }),
                          await m(R.id),
                          (t.result = null);
                      } catch (e) {
                        if (e.code !== s.errorCodes.provider.userRejectedRequest) return d(e);
                      }
                      return d();
                    }
                    if ("string" != typeof S || !S)
                      return d(s.ethErrors.rpc.invalidParams({ message: `Expected non-empty string 'chainName'. Received:\n${S}` }));
                    const O = S.length > 100 ? S.substring(0, 100) : S;
                    if (null !== T) {
                      if ("object" != typeof T || Array.isArray(T))
                        return d(s.ethErrors.rpc.invalidParams({ message: `Expected null or object 'nativeCurrency'. Received:\n${T}` }));
                      if (18 !== T.decimals)
                        return d(
                          s.ethErrors.rpc.invalidParams({
                            message: `Expected the number 18 for 'nativeCurrency.decimals' when 'nativeCurrency' is provided. Received: ${T.decimals}`
                          })
                        );
                      if (!T.symbol || "string" != typeof T.symbol)
                        return d(
                          s.ethErrors.rpc.invalidParams({ message: `Expected a string 'nativeCurrency.symbol'. Received: ${T.symbol}` })
                        );
                    }
                    const x = (null == T ? void 0 : T.symbol) || i.UNKNOWN_TICKER_SYMBOL;
                    if (x !== i.UNKNOWN_TICKER_SYMBOL && ("string" != typeof x || x.length < 2 || x.length > 6))
                      return d(
                        s.ethErrors.rpc.invalidParams({ message: `Expected 2-6 character string 'nativeCurrency.symbol'. Received:\n${x}` })
                      );
                    if (R && R.chainId === I && R.ticker !== x)
                      return d(
                        s.ethErrors.rpc.invalidParams({
                          message: `nativeCurrency.symbol does not match currency symbol for a network the user already has added with the same chainId. Received:\n${x}`
                        })
                      );
                    let U;
                    const { id: j } = await y();
                    try {
                      await f({
                        origin: v,
                        type: n.ApprovalType.AddEthereumChain,
                        requestData: { chainId: I, rpcPrefs: { blockExplorerUrl: N }, chainName: O, rpcUrl: P, ticker: x }
                      }),
                        (U = await u(
                          { chainId: I, rpcPrefs: { blockExplorerUrl: N }, nickname: O, rpcUrl: P, ticker: x },
                          { source: a.MetaMetricsNetworkEventSource.Dapp, referrer: v }
                        )),
                        (t.result = null);
                    } catch (e) {
                      return C({ id: j }), d(e);
                    }
                    try {
                      await f({
                        origin: v,
                        type: n.ApprovalType.SwitchEthereumChain,
                        requestData: {
                          toNetworkConfiguration: { rpcUrl: P, chainId: I, nickname: O, ticker: x, networkConfigurationId: U },
                          fromNetworkConfiguration: w()
                        }
                      });
                    } catch (e) {
                      return d(e.code === s.errorCodes.provider.userRejectedRequest ? undefined : e);
                    } finally {
                      C({ id: j });
                    }
                    try {
                      await m(U);
                    } catch (e) {
                      return d(e);
                    }
                    return d();
                  },
                  hookNames: {
                    upsertNetworkConfiguration: !0,
                    getCurrentChainId: !0,
                    getCurrentRpcUrl: !0,
                    findNetworkConfigurationBy: !0,
                    setActiveNetwork: !0,
                    requestUserApproval: !0,
                    startApprovalFlow: !0,
                    endApprovalFlow: !0,
                    getProviderConfig: !0
                  }
                };
                r.default = d;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/add-ethereum-chain.js" }
    ],
    [
      61,
      { "../../../../../shared/constants/app": 3953 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                const n = {
                  methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.ETH_ACCOUNTS],
                  implementation: async function (e, t, r, n, { getAccounts: s }) {
                    return (t.result = await s()), n();
                  },
                  hookNames: { getAccounts: !0 }
                };
                r.default = n;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/eth-accounts.js" }
    ],
    [
      62,
      { "../../../../../shared/constants/app": 3953 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                const n = {
                  methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.GET_PROVIDER_STATE],
                  implementation: async function (e, t, r, n, { getProviderState: s }) {
                    return (t.result = { ...(await s(e.origin)) }), n();
                  },
                  hookNames: { getProviderState: !0 }
                };
                r.default = n;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/get-provider-state.js" }
    ],
    [
      63,
      {
        "./add-ethereum-chain": 60,
        "./eth-accounts": 61,
        "./get-provider-state": 62,
        "./log-web3-shim-usage": 64,
        "./request-accounts": 65,
        "./send-metadata": 66,
        "./switch-ethereum-chain": 67,
        "./watch-asset": 68
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = u(e("./add-ethereum-chain")),
                  s = u(e("./eth-accounts")),
                  o = u(e("./get-provider-state")),
                  i = u(e("./log-web3-shim-usage")),
                  a = u(e("./request-accounts")),
                  l = u(e("./send-metadata")),
                  c = u(e("./switch-ethereum-chain")),
                  d = u(e("./watch-asset"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const h = [n.default, s.default, o.default, i.default, a.default, l.default, c.default, d.default];
                r.default = h;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/index.js" }
    ],
    [
      64,
      { "../../../../../shared/constants/app": 3953 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                const n = {
                  methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.LOG_WEB3_SHIM_USAGE],
                  implementation: function (e, t, r, n, { getWeb3ShimUsageState: s, setWeb3ShimUsageRecorded: o }) {
                    const { origin: i } = e;
                    s(i) === undefined && o(i);
                    return (t.result = !0), n();
                  },
                  hookNames: { getWeb3ShimUsageState: !0, setWeb3ShimUsageRecorded: !0 }
                };
                r.default = n;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/log-web3-shim-usage.js" }
    ],
    [
      65,
      { "../../../../../shared/constants/app": 3953, "eth-rpc-errors": 2648 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("eth-rpc-errors"),
                  s = e("../../../../../shared/constants/app");
                const o = {
                  methodNames: [s.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS],
                  implementation: async function (
                    e,
                    t,
                    r,
                    o,
                    { origin: a, getAccounts: l, getUnlockPromise: c, hasPermission: d, requestAccountsPermission: u }
                  ) {
                    if (i.has(a))
                      return (
                        (t.error = n.ethErrors.rpc.resourceUnavailable(
                          `Already processing ${s.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS}. Please wait.`
                        )),
                        o()
                      );
                    if (d(s.MESSAGE_TYPE.ETH_ACCOUNTS)) {
                      try {
                        i.add(a), await c(!0), (t.result = await l()), o();
                      } catch (e) {
                        o(e);
                      } finally {
                        i.delete(a);
                      }
                      return undefined;
                    }
                    try {
                      await u();
                    } catch (e) {
                      return (t.error = e), o();
                    }
                    const h = await l();
                    h.length > 0
                      ? (t.result = h)
                      : (t.error = n.ethErrors.rpc.internal("Accounts unexpectedly unavailable. Please report this bug."));
                    return o();
                  },
                  hookNames: { origin: !0, getAccounts: !0, getUnlockPromise: !0, hasPermission: !0, requestAccountsPermission: !0 }
                };
                r.default = o;
                const i = new Set();
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/request-accounts.js" }
    ],
    [
      66,
      { "../../../../../shared/constants/app": 3953, "eth-rpc-errors": 2648 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("eth-rpc-errors");
                const s = {
                  methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.SEND_METADATA],
                  implementation: function (e, t, r, s, { addSubjectMetadata: o, subjectType: i }) {
                    const { origin: a, params: l } = e;
                    if (!l || "object" != typeof l || Array.isArray(l)) return s(n.ethErrors.rpc.invalidParams({ data: l }));
                    {
                      const { icon: e = null, name: t = null, ...r } = l;
                      o({ ...r, iconUrl: e, name: t, subjectType: i, origin: a });
                    }
                    return (t.result = !0), s();
                  },
                  hookNames: { addSubjectMetadata: !0, subjectType: !0 }
                };
                r.default = s;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/send-metadata.js" }
    ],
    [
      67,
      {
        "../../../../../shared/constants/app": 3953,
        "../../../../../shared/constants/network": 3963,
        "../../../../../shared/modules/network.utils": 3996,
        "@metamask/controller-utils": 1056,
        "eth-rpc-errors": 2648,
        lodash: 3312
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("eth-rpc-errors"),
                  s = e("lodash"),
                  o = e("@metamask/controller-utils"),
                  i = e("../../../../../shared/constants/app"),
                  a = e("../../../../../shared/constants/network"),
                  l = e("../../../../../shared/modules/network.utils");
                const c = {
                  methodNames: [i.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN],
                  implementation: async function (
                    e,
                    t,
                    r,
                    c,
                    {
                      getCurrentChainId: u,
                      findNetworkConfigurationBy: h,
                      findNetworkClientIdByChainId: p,
                      setNetworkClientIdForDomain: g,
                      setProviderType: m,
                      setActiveNetwork: f,
                      requestUserApproval: y,
                      getProviderConfig: C
                    }
                  ) {
                    var w;
                    if (null === (w = e.params) || void 0 === w || !w[0] || "object" != typeof e.params[0])
                      return c(
                        n.ethErrors.rpc.invalidParams({
                          message: `Expected single, object parameter. Received:\n${JSON.stringify(e.params)}`
                        })
                      );
                    const { origin: b } = e,
                      { chainId: v } = e.params[0],
                      k = Object.keys((0, s.omit)(e.params[0], ["chainId"]));
                    if (k.length > 0)
                      return c(
                        n.ethErrors.rpc.invalidParams({ message: `Received unexpected keys on object parameter. Unsupported keys:\n${k}` })
                      );
                    const S = "string" == typeof v && v.toLowerCase();
                    if (!(0, l.isPrefixedFormattedHexString)(S))
                      return c(
                        n.ethErrors.rpc.invalidParams({
                          message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${v}`
                        })
                      );
                    if (!(0, l.isSafeChainId)(parseInt(S, 16)))
                      return c(
                        n.ethErrors.rpc.invalidParams({
                          message: `Invalid chain ID "${S}": numerical value greater than max safe value. Received:\n${v}`
                        })
                      );
                    const _ = { toNetworkConfiguration: d(S, h) };
                    if (((_.fromNetworkConfiguration = C()), _.toNetworkConfiguration)) {
                      const r = u(),
                        n = p(S);
                      if (r === S) return g(e.origin, n), (t.result = null), c();
                      try {
                        const r = await y({ origin: b, type: o.ApprovalType.SwitchEthereumChain, requestData: _ });
                        Object.values(a.BUILT_IN_INFURA_NETWORKS)
                          .map(({ chainId: e }) => e)
                          .includes(S)
                          ? await m(r.type)
                          : await f(r.id),
                          g(e.origin, n),
                          (t.result = null);
                      } catch (e) {
                        return c(e);
                      }
                      return c();
                    }
                    return c(
                      n.ethErrors.provider.custom({
                        code: 4902,
                        message: `Unrecognized chain ID "${v}". Try adding the chain using ${i.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN} first.`
                      })
                    );
                  },
                  hookNames: {
                    getCurrentChainId: !0,
                    findNetworkConfigurationBy: !0,
                    findNetworkClientIdByChainId: !0,
                    setNetworkClientIdForDomain: !0,
                    setProviderType: !0,
                    setActiveNetwork: !0,
                    requestUserApproval: !0,
                    getNetworkConfigurations: !0,
                    getNetworkClientIdForDomain: !0,
                    getProviderConfig: !0
                  }
                };
                r.default = c;
                function d(e, t) {
                  return Object.values(a.BUILT_IN_INFURA_NETWORKS)
                    .map(({ chainId: e }) => e)
                    .includes(e)
                    ? {
                        chainId: e,
                        ticker: a.CURRENCY_SYMBOLS.ETH,
                        nickname: a.NETWORK_TO_NAME_MAP[e],
                        rpcUrl: a.CHAIN_ID_TO_RPC_URL_MAP[e],
                        type: a.CHAIN_ID_TO_TYPE_MAP[e]
                      }
                    : t({ chainId: e });
                }
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/switch-ethereum-chain.js" }
    ],
    [
      68,
      { "../../../../../shared/constants/app": 3953, "@metamask/controller-utils": 1056, "eth-rpc-errors": 2648 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/controller-utils"),
                  s = e("eth-rpc-errors"),
                  o = e("../../../../../shared/constants/app");
                const i = {
                  methodNames: [o.MESSAGE_TYPE.WATCH_ASSET, o.MESSAGE_TYPE.WATCH_ASSET_LEGACY],
                  implementation: async function (e, t, r, o, { handleWatchAssetRequest: i }) {
                    try {
                      const {
                          params: { options: r, type: a },
                          origin: l,
                          networkClientId: c
                        } = e,
                        { tokenId: d } = r;
                      return [n.ERC721, n.ERC1155].includes(a) && d !== undefined && "string" != typeof d
                        ? o(
                            s.ethErrors.rpc.invalidParams({
                              message: `Expected parameter 'tokenId' to be type 'string'. Received type '${typeof d}'`
                            })
                          )
                        : (await i({ asset: r, type: a, origin: l, networkClientId: c }), (t.result = !0), o());
                    } catch (e) {
                      return o(e);
                    }
                  },
                  hookNames: { handleWatchAssetRequest: !0 }
                };
                r.default = i;
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/handlers/watch-asset.js" }
    ],
    [
      69,
      { "./createMethodMiddleware": 59 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("./createMethodMiddleware");
                Object.keys(n).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in r && r[e] === n[e]) ||
                      Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function () {
                          return n[e];
                        }
                      }));
                });
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/rpc-method-middleware/index.js" }
    ],
    [
      7,
      { "@metamask/obs-store": 1483, events: 2745 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n,
                  s = (n = e("events")) && n.__esModule ? n : { default: n },
                  o = e("@metamask/obs-store");
                function i(e, t) {
                  !(function (e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
                  })(e, t),
                    t.add(e);
                }
                function a(e, t, r) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (r !== undefined) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = r),
                    e
                  );
                }
                function l(e, t, r) {
                  if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                  return r;
                }
                const c = { currentAppVersion: "", previousAppVersion: "", previousMigrationVersion: 0, currentMigrationVersion: 0 };
                var d = new WeakSet(),
                  u = new WeakSet();
                class h extends s.default {
                  constructor({ currentAppVersion: e = "", currentMigrationVersion: t = 0, state: r = {} }) {
                    super(),
                      i(this, u),
                      i(this, d),
                      a(this, "store", void 0),
                      (this.store = new o.ObservableStore({ ...c, ...r })),
                      l(this, d, p).call(this, e),
                      l(this, u, g).call(this, t);
                  }
                }
                function p(e) {
                  const t = this.store.getState().currentAppVersion;
                  e !== t && this.store.updateState({ currentAppVersion: e, previousAppVersion: t });
                }
                function g(e) {
                  const t = this.store.getState().currentMigrationVersion;
                  e !== t && this.store.updateState({ previousMigrationVersion: t, currentMigrationVersion: e });
                }
                r.default = h;
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/app-metadata.ts" }
    ],
    [
      70,
      { "../../../shared/constants/app": 3953, "../../../shared/modules/fetch-with-timeout": 3991 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.securityProviderCheck = async function (e, t, r, n) {
                    let s;
                    const a = e.msgParams || e.messageParams;
                    if (t === o.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA)
                      s = {
                        host_name: null == a ? void 0 : a.origin,
                        rpc_method_name: t,
                        chain_id: r,
                        data: null == a ? void 0 : a.data,
                        currentLocale: n
                      };
                    else if (t === o.MESSAGE_TYPE.ETH_SIGN || t === o.MESSAGE_TYPE.PERSONAL_SIGN)
                      s = {
                        host_name: null == a ? void 0 : a.origin,
                        rpc_method_name: t,
                        chain_id: r,
                        data: { signer_address: null == a ? void 0 : a.from, msg_to_sign: null == a ? void 0 : a.data },
                        currentLocale: n
                      };
                    else {
                      var l, c, d, u, h, p;
                      s = {
                        host_name: e.origin,
                        rpc_method_name: t,
                        chain_id: r,
                        data: {
                          from_address: null === (l = e.txParams) || void 0 === l ? void 0 : l.from,
                          to_address: null === (c = e.txParams) || void 0 === c ? void 0 : c.to,
                          gas: null === (d = e.txParams) || void 0 === d ? void 0 : d.gas,
                          gasPrice: null === (u = e.txParams) || void 0 === u ? void 0 : u.gasPrice,
                          value: null === (h = e.txParams) || void 0 === h ? void 0 : h.value,
                          data: null === (p = e.txParams) || void 0 === p ? void 0 : p.data
                        },
                        currentLocale: n
                      };
                    }
                    const g = await i("https://proxy.metafi.codefi.network/opensea/security/v1/validate", {
                      method: "POST",
                      headers: { Accept: "application/json", "Content-Type": "application/json" },
                      body: JSON.stringify(s)
                    });
                    return await g.json();
                  });
                var n,
                  s = (n = e("../../../shared/modules/fetch-with-timeout")) && n.__esModule ? n : { default: n },
                  o = e("../../../shared/constants/app");
                const i = (0, s.default)();
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/security-provider-helpers.ts" }
    ],
    [
      71,
      {
        "../util": 82,
        "@segment/loosely-validate-event": 1949,
        buffer: 2392,
        "is-retry-allowed": 3086,
        lodash: 3312,
        "remove-trailing-slash": 3727,
        timers: 3853
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t, n) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                    var s = c(e("remove-trailing-slash")),
                      o = c(e("@segment/loosely-validate-event")),
                      i = e("lodash"),
                      a = c(e("is-retry-allowed")),
                      l = e("../util");
                    function c(e) {
                      return e && e.__esModule ? e : { default: e };
                    }
                    const d = () => ({});
                    r.default = class {
                      constructor(e, t = {}) {
                        (this.writeKey = e),
                          (this.host = (0, s.default)(t.host || "https://api.segment.io")),
                          (this.flushInterval = t.flushInterval || 1e4),
                          (this.flushAt = t.flushAt || Math.max(t.flushAt, 1) || 20),
                          (this.queue = []),
                          (this.path = "/v1/batch"),
                          (this.maxQueueSize = 460800),
                          (this.flushed = !1),
                          (this.retryCount = 3),
                          Object.defineProperty(this, "enable", { configurable: !1, writable: !1, enumerable: !0, value: !0 });
                      }
                      _validate(e, t) {
                        (0, o.default)(e, t);
                      }
                      _message(e, t, r) {
                        return this._validate(t, e), this.enqueue(e, t, r), this;
                      }
                      identify(e, t) {
                        return this._message("identify", e, t);
                      }
                      track(e, t) {
                        return this._message("track", e, t);
                      }
                      page(e, t) {
                        return this._message("page", e, t);
                      }
                      enqueue(e, t, r = d) {
                        if (!this.enable) return void n(r);
                        const s = { ...t, type: e };
                        if (
                          ((s.context = { ...s.context, library: { name: "analytics-node" } }),
                          s.timestamp || (s.timestamp = new Date()),
                          s.messageId || (s.messageId = (0, l.generateRandomId)()),
                          s.anonymousId && !(0, i.isString)(s.anonymousId) && (s.anonymousId = JSON.stringify(s.anonymousId)),
                          s.userId && !(0, i.isString)(s.userId) && (s.userId = JSON.stringify(s.userId)),
                          this.queue.push({ message: s, callback: r }),
                          !this.flushed)
                        )
                          return (this.flushed = !0), void this.flush();
                        const o = this.queue.length >= this.flushAt,
                          a = this.queue.reduce((e, t) => e + JSON.stringify(t).length, 0) >= this.maxQueueSize;
                        (o || a) && this.flush(),
                          this.flushInterval && !this.timer && (this.timer = setTimeout(this.flush.bind(this), this.flushInterval));
                      }
                      flush(e = d) {
                        if (!this.enable) return n(e), Promise.resolve();
                        if ((this.timer && (clearTimeout(this.timer), (this.timer = null)), !this.queue.length))
                          return n(e), Promise.resolve();
                        const r = this.queue.splice(0, this.flushAt),
                          s = r.map((e) => e.callback),
                          o = { batch: r.map((e) => e.message), timestamp: new Date(), sentAt: new Date() },
                          i = { Authorization: `Basic ${t.from(this.writeKey, "utf8").toString("base64")}` };
                        return this._sendRequest(
                          `${this.host}${this.path}`,
                          { method: "POST", body: JSON.stringify(o), headers: i },
                          (t) => {
                            n(() => {
                              s.forEach((e) => e(t, o)), e(t, o);
                            });
                          },
                          0
                        );
                      }
                      _retryRequest(e, t, r, n) {
                        const s = 100 * Math.pow(2, n);
                        setTimeout(() => {
                          this._sendRequest(e, t, r, n + 1);
                        }, s);
                      }
                      async _sendRequest(e, t, r, n) {
                        return fetch(e, t)
                          .then(async (s) => {
                            if (s.ok) r();
                            else if (this._isErrorRetryable({ response: s }) && n <= this.retryCount) this._retryRequest(e, t, r, n);
                            else {
                              const e = new Error(s.statusText);
                              r(e);
                            }
                          })
                          .catch((s) => {
                            this._isErrorRetryable(s) && n <= this.retryCount ? this._retryRequest(e, t, r, n) : r(s);
                          });
                      }
                      _isErrorRetryable(e) {
                        return (
                          !!(function (e) {
                            return !e.response && Boolean(e.code) && "ECONNABORTED" !== e.code && (0, a.default)(e);
                          })(e) ||
                          (!!e.response && ((e.response.status >= 500 && e.response.status <= 599) || 429 === e.response.status))
                        );
                      }
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer, e("timers").setImmediate);
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/segment/analytics.js" }
    ],
    [
      72,
      { "../../../../shared/constants/time": 3972, "./analytics": 71 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.segment = r.createSegmentMock = void 0);
                var n,
                  s = e("../../../../shared/constants/time"),
                  o = (n = e("./analytics")) && n.__esModule ? n : { default: n };
                const i = "XdGJ17zKf3NjBPCDQ2UDjJjkx6FYBMGP",
                  a = undefined,
                  l = 5 * s.SECOND,
                  c = (e = a) => {
                    const t = {
                      queue: [],
                      flush() {
                        t.queue.forEach(([e, t]) => {
                          t();
                        }),
                          (t.queue = []);
                      },
                      track(r, n = () => undefined) {
                        t.queue.push([r, n]), t.queue.length >= e && t.flush();
                      },
                      page() {},
                      identify() {}
                    };
                    return t;
                  };
                r.createSegmentMock = c;
                r.segment = i ? new o.default(i, { host: null, flushAt: a, flushInterval: l }) : c(a);
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/segment/index.js" }
    ],
    [
      76,
      { "./snap-keyring": 78 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  Object.defineProperty(r, "getAccountsBySnapId", {
                    enumerable: !0,
                    get: function () {
                      return n.getAccountsBySnapId;
                    }
                  }),
                  Object.defineProperty(r, "snapKeyringBuilder", {
                    enumerable: !0,
                    get: function () {
                      return n.snapKeyringBuilder;
                    }
                  });
                var n = e("./snap-keyring");
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/snap-keyring/index.ts" }
    ],
    [
      77,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getSnapAndHardwareInfoForMetrics = async function (e, t, r, n) {
                    if (!n) return {};
                    const s = e(),
                      o = await (async function (e) {
                        return await n.call("KeyringController:getKeyringForAccount", e);
                      })(s),
                      i = await (async function (e) {
                        const t = e.toLowerCase();
                        if (o.listAccounts) {
                          return (await o.listAccounts()).find((e) => e.address.toLowerCase() === t);
                        }
                        return undefined;
                      })(s),
                      a = await n.call("SnapController:get", null == i ? void 0 : i.metadata.snap.id);
                    return {
                      account_type: await t(s),
                      device_model: await r(s),
                      account_hardware_type: await (async function () {
                        var e;
                        return null != o && null !== (e = o.type) && void 0 !== e && e.includes("Hardware") ? o.type : undefined;
                      })(),
                      account_snap_type: null == a ? void 0 : a.id,
                      account_snap_version: null == a ? void 0 : a.version
                    };
                  });
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/snap-keyring/metrics.ts" }
    ],
    [
      78,
      {
        "../../../../shared/constants/app": 3953,
        "../../translate": 197,
        "./utils/isBlockedUrl": 79,
        "@metamask/eth-snap-keyring": 1200,
        "webextension-polyfill": 3937
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.snapKeyringBuilder = r.getAccountsBySnapId = void 0);
                var n,
                  s = e("@metamask/eth-snap-keyring"),
                  o = (n = e("webextension-polyfill")) && n.__esModule ? n : { default: n },
                  i = e("../../../../shared/constants/app"),
                  a = e("../../translate"),
                  l = e("./utils/isBlockedUrl");
                r.getAccountsBySnapId = async (e, t) => {
                  const r = await e.getSnapKeyring();
                  return await r.getAccountsBySnapId(t);
                };
                r.snapKeyringBuilder = (e, t, r, n, c) => {
                  const d = () =>
                    new s.SnapKeyring(t(), {
                      addressExists: async (t) => (await e.call("KeyringController:getAccounts")).includes(t.toLowerCase()),
                      redirectUser: async (t, r, n) => {
                        if (r.length > 0 || n.length > 0) {
                          const s = await (0, l.isBlockedUrl)(
                              r,
                              async () => await e.call("PhishingController:maybeUpdateState"),
                              (t) => e.call("PhishingController:testOrigin", t)
                            ),
                            a = await e.call(
                              "ApprovalController:addRequest",
                              {
                                origin: t,
                                requestData: { url: r, message: n, isBlockedUrl: s },
                                type: i.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect
                              },
                              !0
                            );
                          Boolean(a) && r.length > 0
                            ? o.default.tabs.create({ url: r })
                            : console.log("User refused snap account redirection to:", r);
                        } else console.log("Error occurred when redirecting snap account. url or message must be defined");
                      },
                      saveState: async () => {
                        await r();
                      },
                      addAccount: async (t, s, o) => {
                        const { id: l } = e.call("ApprovalController:startFlow"),
                          c = { name: "SnapAuthorshipHeader", key: "snapHeader", properties: { snapId: s } };
                        try {
                          const l = Boolean(
                            await e.call(
                              "ApprovalController:addRequest",
                              { origin: s, type: i.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountCreation },
                              !0
                            )
                          );
                          if (!l) throw (await o(l), new Error("User denied account creation"));
                          try {
                            await o(l),
                              await r(),
                              n(t),
                              await e.call("ApprovalController:showSuccess", { message: (0, a.t)("snapAccountCreated"), header: [c] });
                          } catch (t) {
                            throw (
                              (await e.call("ApprovalController:showError", { error: t.message, header: [c] }),
                              new Error(`Error occurred while creating snap account: ${t.message}`))
                            );
                          }
                        } finally {
                          e.call("ApprovalController:endFlow", { id: l });
                        }
                      },
                      removeAccount: async (t, n, s) => {
                        const { id: o } = e.call("ApprovalController:startFlow"),
                          l = { name: "SnapAuthorshipHeader", key: "snapHeader", properties: { snapId: n } };
                        try {
                          const o = Boolean(
                            await e.call(
                              "ApprovalController:addRequest",
                              {
                                origin: n,
                                type: i.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountRemoval,
                                requestData: { publicAddress: t }
                              },
                              !0
                            )
                          );
                          if (!o) throw (await s(o), new Error("User denied account removal"));
                          try {
                            await c(t),
                              await s(o),
                              await r(),
                              await e.call("ApprovalController:showSuccess", {
                                message: (0, a.t)("snapAccountRemoved") ?? "Account removed",
                                header: [l]
                              });
                          } catch (t) {
                            throw (
                              (await e.call("ApprovalController:showError", { error: t.message, header: [l] }),
                              new Error(`Error occurred while removing snap account: ${t.message}`))
                            );
                          }
                        } finally {
                          e.call("ApprovalController:endFlow", { id: o });
                        }
                      }
                    });
                  return (d.type = s.SnapKeyring.type), d;
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/snap-keyring/snap-keyring.ts" }
    ],
    [
      79,
      { "../../keyring-snaps-permissions": 49 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.isBlockedUrl = void 0);
                var n = e("../../keyring-snaps-permissions");
                r.isBlockedUrl = async (e, t, r) => {
                  try {
                    return !(0, n.isProtocolAllowed)(e) || (await t(), r(e).result);
                  } catch (e) {
                    return console.error("Invalid URL passed into snap-keyring:", e), !1;
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/snap-keyring/utils/isBlockedUrl.ts" }
    ],
    [
      8,
      {
        "../../../shared/constants/alarms": 3951,
        "../../../shared/constants/app": 3953,
        "../../../shared/constants/preferences": 3965,
        "../../../shared/constants/time": 3972,
        "../../../shared/modules/mv3.utils": 3995,
        "../../../ui/helpers/utils/build-types": 4792,
        "../metamask-controller": 83,
        "@metamask/controller-utils": 1056,
        "@metamask/obs-store": 1483,
        events: 2745,
        loglevel: 3322,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = m(e("events")),
                  s = e("@metamask/obs-store"),
                  o = e("uuid"),
                  i = m(e("loglevel")),
                  a = e("@metamask/controller-utils"),
                  l = e("../metamask-controller"),
                  c = e("../../../shared/constants/time"),
                  d = e("../../../shared/constants/alarms"),
                  u = e("../../../shared/modules/mv3.utils"),
                  h = e("../../../ui/helpers/utils/build-types"),
                  p = e("../../../shared/constants/app"),
                  g = e("../../../shared/constants/preferences");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                class f extends n.default {
                  constructor(e = {}) {
                    const {
                      addUnlockListener: t,
                      isUnlocked: r,
                      initState: n,
                      onInactiveTimeout: o,
                      preferencesStore: i,
                      messenger: a,
                      extension: l
                    } = e;
                    super(),
                      (this.extension = l),
                      (this.onInactiveTimeout = o || (() => undefined)),
                      (this.store = new s.ObservableStore({
                        timeoutMinutes: g.DEFAULT_AUTO_LOCK_TIME_LIMIT,
                        connectedStatusPopoverHasBeenShown: !0,
                        defaultHomeActiveTabName: null,
                        browserEnvironment: {},
                        popupGasPollTokens: [],
                        notificationGasPollTokens: [],
                        fullScreenGasPollTokens: [],
                        recoveryPhraseReminderHasBeenShown: !1,
                        recoveryPhraseReminderLastShown: new Date().getTime(),
                        outdatedBrowserWarningLastShown: new Date().getTime(),
                        nftsDetectionNoticeDismissed: !1,
                        showTestnetMessageInDropdown: !0,
                        showBetaHeader: (0, h.isBeta)(),
                        showProductTour: !0,
                        trezorModel: null,
                        currentPopupId: undefined,
                        hadAdvancedGasFeesSetPriorToMigration92_3: !1,
                        ...n,
                        qrHardware: {},
                        nftsDropdownState: {},
                        usedNetworks: { "0x1": !0, "0x5": !0, "0x539": !0 }
                      })),
                      (this.timer = null),
                      (this.isUnlocked = r),
                      (this.waitingForUnlock = []),
                      t(this.handleUnlock.bind(this)),
                      i.subscribe(({ preferences: e }) => {
                        this.store.getState().timeoutMinutes !== e.autoLockTimeLimit && this._setInactiveTimeout(e.autoLockTimeLimit);
                      }),
                      a.subscribe("KeyringController:qrKeyringStateChange", (e) => this.store.updateState({ qrHardware: e }));
                    const { preferences: c } = i.getState();
                    this._setInactiveTimeout(c.autoLockTimeLimit), (this.messagingSystem = a), (this._approvalRequestId = null);
                  }
                  getUnlockPromise(e) {
                    return new Promise((t) => {
                      this.isUnlocked() ? t() : this.waitForUnlock(t, e);
                    });
                  }
                  waitForUnlock(e, t) {
                    this.waitingForUnlock.push({ resolve: e }),
                      this.emit(l.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE),
                      t && this._requestApproval();
                  }
                  handleUnlock() {
                    if (this.waitingForUnlock.length > 0) {
                      for (; this.waitingForUnlock.length > 0; ) this.waitingForUnlock.shift().resolve();
                      this.emit(l.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                    }
                    this._acceptApproval();
                  }
                  setDefaultHomeActiveTabName(e) {
                    this.store.updateState({ defaultHomeActiveTabName: e });
                  }
                  setConnectedStatusPopoverHasBeenShown() {
                    this.store.updateState({ connectedStatusPopoverHasBeenShown: !0 });
                  }
                  setRecoveryPhraseReminderHasBeenShown() {
                    this.store.updateState({ recoveryPhraseReminderHasBeenShown: !0 });
                  }
                  setRecoveryPhraseReminderLastShown(e) {
                    this.store.updateState({ recoveryPhraseReminderLastShown: e });
                  }
                  setTermsOfUseLastAgreed(e) {
                    this.store.updateState({ termsOfUseLastAgreed: e });
                  }
                  setSnapsInstallPrivacyWarningShownStatus(e) {
                    this.store.updateState({ snapsInstallPrivacyWarningShown: e });
                  }
                  setOutdatedBrowserWarningLastShown(e) {
                    this.store.updateState({ outdatedBrowserWarningLastShown: e });
                  }
                  setLastActiveTime() {
                    this._resetTimer();
                  }
                  _setInactiveTimeout(e) {
                    this.store.updateState({ timeoutMinutes: e }), this._resetTimer();
                  }
                  _resetTimer() {
                    const { timeoutMinutes: e } = this.store.getState();
                    this.timer ? clearTimeout(this.timer) : u.isManifestV3 && this.extension.alarms.clear(d.AUTO_LOCK_TIMEOUT_ALARM),
                      e &&
                        (u.isManifestV3
                          ? (this.extension.alarms.create(d.AUTO_LOCK_TIMEOUT_ALARM, { delayInMinutes: e, periodInMinutes: e }),
                            this.extension.alarms.onAlarm.addListener((e) => {
                              e.name === d.AUTO_LOCK_TIMEOUT_ALARM &&
                                (this.onInactiveTimeout(), this.extension.alarms.clear(d.AUTO_LOCK_TIMEOUT_ALARM));
                            }))
                          : (this.timer = setTimeout(() => this.onInactiveTimeout(), e * c.MINUTE)));
                  }
                  setBrowserEnvironment(e, t) {
                    this.store.updateState({ browserEnvironment: { os: e, browser: t } });
                  }
                  addPollingToken(e, t) {
                    if (t !== p.POLLING_TOKEN_ENVIRONMENT_TYPES[p.ENVIRONMENT_TYPE_BACKGROUND]) {
                      const r = this.store.getState()[t];
                      this.store.updateState({ [t]: [...r, e] });
                    }
                  }
                  removePollingToken(e, t) {
                    if (t !== p.POLLING_TOKEN_ENVIRONMENT_TYPES[p.ENVIRONMENT_TYPE_BACKGROUND]) {
                      const r = this.store.getState()[t];
                      this.store.updateState({ [t]: r.filter((t) => t !== e) });
                    }
                  }
                  clearPollingTokens() {
                    this.store.updateState({ popupGasPollTokens: [], notificationGasPollTokens: [], fullScreenGasPollTokens: [] });
                  }
                  setShowTestnetMessageInDropdown(e) {
                    this.store.updateState({ showTestnetMessageInDropdown: e });
                  }
                  setShowBetaHeader(e) {
                    this.store.updateState({ showBetaHeader: e });
                  }
                  setShowProductTour(e) {
                    this.store.updateState({ showProductTour: e });
                  }
                  setTrezorModel(e) {
                    this.store.updateState({ trezorModel: e });
                  }
                  updateNftDropDownState(e) {
                    this.store.updateState({ nftsDropdownState: e });
                  }
                  setFirstTimeUsedNetwork(e) {
                    const t = this.store.getState(),
                      { usedNetworks: r } = t;
                    (r[e] = !0), this.store.updateState({ usedNetworks: r });
                  }
                  setCurrentPopupId(e) {
                    this.store.updateState({ currentPopupId: e });
                  }
                  getCurrentPopupId() {
                    return this.store.getState().currentPopupId;
                  }
                  _requestApproval() {
                    (this._approvalRequestId = (0, o.v4)()),
                      this.messagingSystem
                        .call(
                          "ApprovalController:addRequest",
                          { id: this._approvalRequestId, origin: p.ORIGIN_METAMASK, type: a.ApprovalType.Unlock },
                          !0
                        )
                        .catch(() => {});
                  }
                  _acceptApproval() {
                    if (this._approvalRequestId) {
                      try {
                        this.messagingSystem.call("ApprovalController:acceptRequest", this._approvalRequestId);
                      } catch (e) {
                        i.default.error("Failed to unlock approval request", e);
                      }
                      this._approvalRequestId = null;
                    }
                  }
                }
                r.default = f;
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/app-state.js" }
    ],
    [
      81,
      {
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/security-provider": 3966,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/lib/transactions-controller-utils": 3982,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../../ui/helpers/utils/metrics": 4802,
        "../snap-keyring/metrics": 77,
        "@metamask/eth-query": 1181,
        "@metamask/transaction-controller": 1835,
        "bignumber.js": 2283,
        "ethereumjs-util": 2693
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.handleTransactionSubmitted =
                    r.handleTransactionRejected =
                    r.handleTransactionFailed =
                    r.handleTransactionDropped =
                    r.handleTransactionConfirmed =
                    r.handleTransactionApproved =
                    r.handleTransactionAdded =
                    r.handlePostTransactionBalanceUpdate =
                    r.createTransactionEventFragmentWithTxId =
                    r.METRICS_STATUS_FAILED =
                      void 0);
                var n,
                  s = e("ethereumjs-util"),
                  o = (n = e("@metamask/eth-query")) && n.__esModule ? n : { default: n },
                  i = e("bignumber.js"),
                  a = e("@metamask/transaction-controller"),
                  l = e("../../../../shared/constants/app"),
                  c = e("../../../../shared/modules/transaction.utils"),
                  d = e("../../../../shared/modules/conversion.utils"),
                  u = e("../../../../shared/constants/transaction"),
                  h = e("../../../../shared/constants/metametrics"),
                  p = e("../../../../shared/constants/gas"),
                  g = e("../../../../shared/lib/transactions-controller-utils"),
                  m = e("../../../../shared/constants/security-provider"),
                  f = e("../../../../ui/helpers/utils/metrics"),
                  y = e("../snap-keyring/metrics");
                const C = (r.METRICS_STATUS_FAILED = "failed on-chain");
                r.handleTransactionAdded = async (e, t) => {
                  if (!t.transactionMeta) return;
                  const { properties: r, sensitiveProperties: n } = await k({ transactionEventPayload: t, transactionMetricsRequest: e });
                  w({
                    eventName: u.TransactionMetaMetricsEvent.added,
                    transactionEventPayload: t,
                    transactionMetricsRequest: e,
                    payload: { properties: r, sensitiveProperties: n }
                  });
                };
                r.handleTransactionApproved = async (e, t) => {
                  t.transactionMeta &&
                    (await b({
                      eventName: u.TransactionMetaMetricsEvent.approved,
                      transactionEventPayload: t,
                      transactionMetricsRequest: e
                    }));
                };
                r.handleTransactionFailed = async (e, t) => {
                  if (!t.transactionMeta) return;
                  const r = {};
                  t.error && (r.error = t.error),
                    await b({
                      eventName: u.TransactionMetaMetricsEvent.finalized,
                      extraParams: r,
                      transactionEventPayload: t,
                      transactionMetricsRequest: e
                    });
                };
                r.handleTransactionConfirmed = async (e, t) => {
                  if (!t.transactionMeta) return;
                  const r = {},
                    { transactionMeta: n } = t,
                    { txReceipt: s } = n;
                  r.gas_used = null == s ? void 0 : s.gasUsed;
                  const { submittedTime: o } = n;
                  o &&
                    (r.completion_time = (function (e) {
                      return Math.round((Date.now() - e) / 1e3).toString();
                    })(o)),
                    "0x0" === (null == s ? void 0 : s.status) && (r.status = C),
                    await b({
                      eventName: u.TransactionMetaMetricsEvent.finalized,
                      extraParams: r,
                      transactionEventPayload: t,
                      transactionMetricsRequest: e
                    });
                };
                r.handleTransactionDropped = async (e, t) => {
                  if (!t.transactionMeta) return;
                  await b({
                    eventName: u.TransactionMetaMetricsEvent.finalized,
                    extraParams: { dropped: !0 },
                    transactionEventPayload: t,
                    transactionMetricsRequest: e
                  });
                };
                r.handleTransactionRejected = async (e, t) => {
                  t.transactionMeta &&
                    (await b({
                      eventName: u.TransactionMetaMetricsEvent.rejected,
                      transactionEventPayload: t,
                      transactionMetricsRequest: e
                    }));
                };
                r.handleTransactionSubmitted = async (e, t) => {
                  if (!t.transactionMeta) return;
                  const { properties: r, sensitiveProperties: n } = await k({ transactionEventPayload: t, transactionMetricsRequest: e });
                  w({
                    eventName: u.TransactionMetaMetricsEvent.submitted,
                    transactionEventPayload: t,
                    transactionMetricsRequest: e,
                    payload: { properties: r, sensitiveProperties: n }
                  });
                };
                r.createTransactionEventFragmentWithTxId = async (e, { transactionId: t, actionId: r }) => {
                  const n = e.getTransaction(t);
                  n.actionId = r;
                  const { properties: s, sensitiveProperties: o } = await k({
                    transactionEventPayload: { transactionMeta: n },
                    transactionMetricsRequest: e
                  });
                  w({
                    eventName: u.TransactionMetaMetricsEvent.approved,
                    transactionEventPayload: { actionId: n.actionId, transactionMeta: n },
                    transactionMetricsRequest: e,
                    payload: { properties: s, sensitiveProperties: o }
                  });
                };
                function w({
                  eventName: e,
                  transactionEventPayload: { transactionMeta: t, actionId: r },
                  transactionMetricsRequest: n,
                  payload: s
                }) {
                  if (
                    (function (e, t, r) {
                      const n = v(t, r.id);
                      return void 0 !== e(n);
                    })(n.getEventFragmentById, e, t)
                  )
                    return;
                  const o = v(e, t.id);
                  switch (e) {
                    case u.TransactionMetaMetricsEvent.added:
                      n.createEventFragment({
                        category: h.MetaMetricsEventCategory.Transactions,
                        initialEvent: u.TransactionMetaMetricsEvent.added,
                        successEvent: u.TransactionMetaMetricsEvent.approved,
                        failureEvent: u.TransactionMetaMetricsEvent.rejected,
                        properties: s.properties,
                        sensitiveProperties: s.sensitiveProperties,
                        actionId: r,
                        uniqueIdentifier: o,
                        persist: !0
                      });
                      break;
                    case u.TransactionMetaMetricsEvent.approved:
                    case u.TransactionMetaMetricsEvent.rejected:
                      n.createEventFragment({
                        category: h.MetaMetricsEventCategory.Transactions,
                        successEvent: u.TransactionMetaMetricsEvent.approved,
                        failureEvent: u.TransactionMetaMetricsEvent.rejected,
                        properties: s.properties,
                        sensitiveProperties: s.sensitiveProperties,
                        actionId: r,
                        uniqueIdentifier: o,
                        persist: !0
                      });
                      break;
                    case u.TransactionMetaMetricsEvent.submitted:
                      n.createEventFragment({
                        category: h.MetaMetricsEventCategory.Transactions,
                        initialEvent: u.TransactionMetaMetricsEvent.submitted,
                        successEvent: u.TransactionMetaMetricsEvent.finalized,
                        properties: s.properties,
                        sensitiveProperties: s.sensitiveProperties,
                        actionId: r,
                        uniqueIdentifier: o,
                        persist: !0
                      });
                      break;
                    case u.TransactionMetaMetricsEvent.finalized:
                      n.createEventFragment({
                        category: h.MetaMetricsEventCategory.Transactions,
                        successEvent: u.TransactionMetaMetricsEvent.finalized,
                        properties: s.properties,
                        sensitiveProperties: s.sensitiveProperties,
                        actionId: r,
                        uniqueIdentifier: o,
                        persist: !0
                      });
                  }
                }
                async function b({ eventName: e, transactionEventPayload: t, transactionMetricsRequest: r, extraParams: n = {} }) {
                  const { properties: s, sensitiveProperties: o } = await k({
                    transactionEventPayload: t,
                    transactionMetricsRequest: r,
                    extraParams: n
                  });
                  w({
                    eventName: e,
                    transactionEventPayload: t,
                    transactionMetricsRequest: r,
                    payload: { properties: s, sensitiveProperties: o }
                  }),
                    (function ({
                      eventName: e,
                      transactionEventPayload: { transactionMeta: t },
                      transactionMetricsRequest: r,
                      payload: n
                    }) {
                      const s = v(e, t.id);
                      switch (e) {
                        case u.TransactionMetaMetricsEvent.approved:
                        case u.TransactionMetaMetricsEvent.rejected:
                        case u.TransactionMetaMetricsEvent.finalized:
                          r.updateEventFragment(s, { properties: n.properties, sensitiveProperties: n.sensitiveProperties });
                      }
                    })({
                      eventName: e,
                      transactionEventPayload: t,
                      transactionMetricsRequest: r,
                      payload: { properties: s, sensitiveProperties: o }
                    }),
                    (function ({ eventName: e, transactionMetricsRequest: t, transactionEventPayload: { transactionMeta: r } }) {
                      const n = v(e, r.id);
                      switch (e) {
                        case u.TransactionMetaMetricsEvent.approved:
                          t.finalizeEventFragment(n);
                          break;
                        case u.TransactionMetaMetricsEvent.rejected:
                          t.finalizeEventFragment(n, { abandoned: !0 });
                          break;
                        case u.TransactionMetaMetricsEvent.finalized:
                          t.finalizeEventFragment(n);
                      }
                    })({ eventName: e, transactionEventPayload: t, transactionMetricsRequest: r });
                }
                function v(e, t) {
                  return `transaction-${
                    [u.TransactionMetaMetricsEvent.finalized, u.TransactionMetaMetricsEvent.submitted].includes(e) ? "submitted" : "added"
                  }-${t}`;
                }
                async function k({ transactionEventPayload: { transactionMeta: e }, transactionMetricsRequest: t, extraParams: r = {} }) {
                  var n;
                  const {
                      type: h,
                      time: C,
                      status: w,
                      chainId: b,
                      origin: v,
                      txParams: { gasPrice: k, gas: S, maxFeePerGas: _, maxPriorityFeePerGas: T, estimateSuggested: A, estimateUsed: E },
                      defaultGasEstimates: M,
                      originalType: P,
                      replacedById: N,
                      customTokenAmount: I,
                      dappProposedTokenAmount: R,
                      currentTokenBalance: O,
                      originalApprovalAmount: x,
                      finalApprovalAmount: U,
                      contractMethodName: j,
                      securityProviderResponse: L,
                      securityAlertResponse: D,
                      simulationFails: F
                    } = e,
                    q = new o.default(t.provider),
                    K = v === l.ORIGIN_METAMASK ? "user" : "dapp",
                    { assetType: B, tokenStandard: $ } = await (0, c.determineTransactionAssetType)(e, q, t.getTokenStandardAndDetails),
                    H = {};
                  if (
                    ((0, c.isEIP1559Transaction)(e) ? ((H.max_fee_per_gas = _), (H.max_priority_fee_per_gas = T)) : (H.gas_price = k), M)
                  ) {
                    var G, W;
                    const { estimateType: r } = M;
                    if (r) {
                      var V, z;
                      H.default_estimate = r;
                      let n = null === (V = e.defaultGasEstimates) || void 0 === V ? void 0 : V.maxFeePerGas,
                        s = null === (z = e.defaultGasEstimates) || void 0 === z ? void 0 : z.maxPriorityFeePerGas;
                      if ([p.GasRecommendations.low, p.GasRecommendations.medium, p.GasRecommendations.high].includes(r)) {
                        var Y, Q;
                        const { gasFeeEstimates: e } = await t.getEIP1559GasFeeEstimates();
                        var J, X;
                        if (null != e && null !== (Y = e[r]) && void 0 !== Y && Y.suggestedMaxFeePerGas)
                          (n = null === (J = e[r]) || void 0 === J ? void 0 : J.suggestedMaxFeePerGas), (H.default_max_fee_per_gas = n);
                        if (null != e && null !== (Q = e[r]) && void 0 !== Q && Q.suggestedMaxPriorityFeePerGas)
                          (s = null === (X = e[r]) || void 0 === X ? void 0 : X.suggestedMaxPriorityFeePerGas),
                            (H.default_max_priority_fee_per_gas = s);
                      }
                    }
                    null !== (G = e.defaultGasEstimates) && void 0 !== G && G.gas && (H.default_gas = e.defaultGasEstimates.gas),
                      null !== (W = e.defaultGasEstimates) &&
                        void 0 !== W &&
                        W.gasPrice &&
                        (H.default_gas_price = e.defaultGasEstimates.gasPrice);
                  }
                  A && (H.estimate_suggested = A), E && (H.estimate_used = E), null != r && r.gas_used && (H.gas_used = r.gas_used);
                  const Z = (function (e) {
                    const t = {};
                    for (const r in e) (0, s.isHexString)(e[r]) ? (t[r] = (0, d.hexWEIToDecGWEI)(e[r])) : (t[r] = e[r]);
                    return t;
                  })(H);
                  let ee = "0";
                  e.txParams.maxFeePerGas && (ee = "2");
                  const te =
                      h &&
                      [
                        a.TransactionType.contractInteraction,
                        a.TransactionType.tokenMethodApprove,
                        a.TransactionType.tokenMethodSafeTransferFrom,
                        a.TransactionType.tokenMethodSetApprovalForAll,
                        a.TransactionType.tokenMethodTransfer,
                        a.TransactionType.tokenMethodTransferFrom,
                        a.TransactionType.smart,
                        a.TransactionType.swap,
                        a.TransactionType.swapApproval
                      ].includes(h),
                    re = "Approve";
                  let ne,
                    se,
                    oe,
                    ie,
                    ae = a.TransactionType.simpleSend;
                  h === a.TransactionType.cancel
                    ? (ae = a.TransactionType.cancel)
                    : h === a.TransactionType.retry && P
                    ? (ae = P)
                    : h === a.TransactionType.deployContract
                    ? (ae = a.TransactionType.deployContract)
                    : te &&
                      ((ae = a.TransactionType.contractInteraction),
                      (se = j),
                      se === re &&
                        $ === u.TokenStandard.ERC20 &&
                        ("0" === R || "0" === I
                          ? (ne = u.TransactionApprovalAmountType.revoke)
                          : I && I !== R
                          ? (ne = u.TransactionApprovalAmountType.custom)
                          : R && (ne = u.TransactionApprovalAmountType.dappProposed),
                        (oe = (function (e, t, r) {
                          if (e === u.TransactionApprovalAmountType.custom && t && r)
                            return `${new i.BigNumber(t, 10).div(r, 10).times(100).round(2)}`;
                          return null;
                        })(ne, x, U)),
                        (ie = (function (e, t, r) {
                          if (
                            (e === u.TransactionApprovalAmountType.custom || e === u.TransactionApprovalAmountType.dappProposed) &&
                            t &&
                            r
                          )
                            return `${new i.BigNumber(t, 16).div(r, 10).times(100).round(2)}`;
                          return null;
                        })(ne, R, O))));
                  const le = t.getTransaction(N),
                    ce = { RETRY: a.TransactionType.retry, CANCEL: a.TransactionType.cancel, SAME_NONCE: "other" };
                  let de, ue, he;
                  var pe;
                  (null != r &&
                    r.dropped &&
                    ((de = ce.SAME_NONCE),
                    (null == le ? void 0 : le.type) === a.TransactionType.cancel
                      ? (de = ce.CANCEL)
                      : (null == le ? void 0 : le.type) === a.TransactionType.retry && (de = ce.RETRY)),
                  (ue =
                    1 === (null == L ? void 0 : L.flagAsDangerous)
                      ? ["flagged_as_malicious"]
                      : 2 === (null == L ? void 0 : L.flagAsDangerous)
                      ? ["flagged_as_safety_unknown"]
                      : null),
                  (null == D ? void 0 : D.result_type) === m.BlockaidResultType.Failed)
                    ? (ue = ["security_alert_failed"])
                    : ((he = (0, f.getBlockaidMetricsParams)(D)),
                      (ue = (null === (pe = he) || void 0 === pe ? void 0 : pe.ui_customizations) ?? null));
                  F && (null === ue ? (ue = ["gas_estimation_failed"]) : ue.push("gas_estimation_failed"));
                  let ge = {
                    chain_id: b,
                    referrer: v,
                    source: K,
                    status: w,
                    network: `${parseInt(b, 16)}`,
                    eip_1559_version: ee,
                    gas_edit_type: "none",
                    gas_edit_attempted: "none",
                    account_type: await t.getAccountType(t.getSelectedAddress()),
                    device_model: await t.getDeviceModel(t.getSelectedAddress()),
                    asset_type: B,
                    token_standard: $,
                    transaction_type: ae,
                    transaction_speed_up: h === a.TransactionType.retry,
                    ...he,
                    ui_customizations: (null === (n = ue) || void 0 === n ? void 0 : n.length) > 0 ? ue : null,
                    security_alert_response: (null == D ? void 0 : D.result_type) ?? m.BlockaidResultType.NotApplicable,
                    security_alert_reason: (null == D ? void 0 : D.reason) ?? m.BlockaidReason.notApplicable,
                    gas_estimation_failed: Boolean(F)
                  };
                  const me = await (0, y.getSnapAndHardwareInfoForMetrics)(
                    t.getSelectedAddress,
                    t.getAccountType,
                    t.getDeviceModel,
                    t.snapAndHardwareMessenger
                  );
                  Object.assign(ge, me), se === re && (ge = { ...ge, transaction_approval_amount_type: ne });
                  let fe = {
                    transaction_envelope_type: (0, c.isEIP1559Transaction)(e)
                      ? g.TRANSACTION_ENVELOPE_TYPE_NAMES.FEE_MARKET
                      : g.TRANSACTION_ENVELOPE_TYPE_NAMES.LEGACY,
                    first_seen: C,
                    gas_limit: S,
                    transaction_contract_method: se,
                    transaction_replaced: de,
                    ...r,
                    ...Z
                  };
                  return (
                    se === re &&
                      (fe = { ...fe, transaction_approval_amount_vs_balance_ratio: ie, transaction_approval_amount_vs_proposed_ratio: oe }),
                    { properties: ge, sensitiveProperties: fe }
                  );
                }
                r.handlePostTransactionBalanceUpdate = async (
                  { getParticipateInMetrics: e, trackEvent: t },
                  { transactionMeta: r, approvalTransactionMeta: n }
                ) => {
                  var s;
                  if (e() && r.swapMetaData)
                    if ("0x0" === (null === (s = r.txReceipt) || void 0 === s ? void 0 : s.status))
                      t({ event: "Swap Failed", sensitiveProperties: { ...r.swapMetaData }, category: h.MetaMetricsEventCategory.Swaps });
                    else {
                      var o;
                      const e = (0, g.getSwapsTokensReceivedFromTxMeta)(
                          r.destinationTokenSymbol,
                          r,
                          r.destinationTokenAddress,
                          r.txParams.from,
                          r.destinationTokenDecimals,
                          n,
                          r.chainId
                        ),
                        s = e ? `${new i.BigNumber(e, 10).div(r.swapMetaData.token_to_amount, 10).times(100).round(2)}%` : null,
                        a =
                          null !== (o = r.txReceipt) && void 0 !== o && o.gasUsed && r.swapMetaData.estimated_gas
                            ? `${new i.BigNumber(r.txReceipt.gasUsed, 16).div(r.swapMetaData.estimated_gas, 10).times(100).round(2)}%`
                            : null,
                        l = (function (e, t) {
                          var r, n;
                          let s = "0x0";
                          null != t && t.txReceipt && (s = (0, g.calcGasTotal)(t.txReceipt.gasUsed, t.txReceipt.effectiveGasPrice));
                          const o = (0, g.calcGasTotal)(
                              null === (r = e.txReceipt) || void 0 === r ? void 0 : r.gasUsed,
                              null === (n = e.txReceipt) || void 0 === n ? void 0 : n.effectiveGasPrice
                            ),
                            a = new i.BigNumber(o, 16).plus(s, 16).toString(16);
                          return {
                            approvalGasCostInEth: Number((0, d.hexWEIToDecETH)(s)),
                            tradeGasCostInEth: Number((0, d.hexWEIToDecETH)(o)),
                            tradeAndApprovalGasCostInEth: Number((0, d.hexWEIToDecETH)(a))
                          };
                        })(r, n);
                      t({
                        event: h.MetaMetricsEventName.SwapCompleted,
                        category: h.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          ...r.swapMetaData,
                          token_to_amount_received: e,
                          quote_vs_executionRatio: s,
                          estimated_vs_used_gasRatio: a,
                          approval_gas_cost_in_eth: l.approvalGasCostInEth,
                          trade_gas_cost_in_eth: l.tradeGasCostInEth,
                          trade_and_approval_gas_cost_in_eth: l.tradeAndApprovalGasCostInEth,
                          token_to_amount: r.swapMetaData.token_to_amount.toString(10)
                        }
                      });
                    }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/transaction/metrics.ts" }
    ],
    [
      83,
      {
        "../../shared/constants/app": 3953,
        "../../shared/constants/hardware-wallets": 3958,
        "../../shared/constants/keyring": 3959,
        "../../shared/constants/logs": 3961,
        "../../shared/constants/metametrics": 3962,
        "../../shared/constants/network": 3963,
        "../../shared/constants/permissions": 3964,
        "../../shared/constants/swaps": 3970,
        "../../shared/constants/time": 3972,
        "../../shared/constants/tokens": 3973,
        "../../shared/constants/transaction": 3974,
        "../../shared/lib/metamask-controller-utils": 3977,
        "../../shared/lib/token-util.ts": 3981,
        "../../shared/modules/conversion.utils": 3988,
        "../../shared/modules/mv3.utils": 3995,
        "../../shared/modules/network.utils": 3996,
        "../../shared/modules/string-utils": 4002,
        "../../shared/modules/transaction.utils": 4004,
        "../../shared/notifications": 4006,
        "./controllers/alert": 6,
        "./controllers/app-metadata": 7,
        "./controllers/app-state": 8,
        "./controllers/cached-balances": 9,
        "./controllers/decrypt-message": 10,
        "./controllers/detect-tokens": 11,
        "./controllers/encryption-public-key": 12,
        "./controllers/ens": 14,
        "./controllers/metametrics": 15,
        "./controllers/onboarding": 16,
        "./controllers/permissions": 20,
        "./controllers/preferences": 25,
        "./controllers/swaps": 26,
        "./detect-multiple-instances": 27,
        "./lib/ComposableObservableStore": 29,
        "./lib/account-tracker": 30,
        "./lib/backup": 31,
        "./lib/createDupeReqFilterMiddleware": 32,
        "./lib/createLoggerMiddleware": 33,
        "./lib/createMetaRPCHandler": 34,
        "./lib/createMetamaskMiddleware": 35,
        "./lib/createOnboardingMiddleware": 36,
        "./lib/createOriginMiddleware": 37,
        "./lib/createRPCMethodTrackingMiddleware": 38,
        "./lib/createTabIdMiddleware": 40,
        "./lib/hardware-keyring-builder-factory": 48,
        "./lib/keyring-snaps-permissions": 49,
        "./lib/ppom/indexed-db-backend": 56,
        "./lib/ppom/ppom": 58,
        "./lib/ppom/ppom-middleware": 57,
        "./lib/rpc-method-middleware": 69,
        "./lib/security-provider-helpers": 70,
        "./lib/segment": 72,
        "./lib/snap-keyring": 76,
        "./lib/stream-utils": 80,
        "./lib/transaction/metrics": 81,
        "./lib/util": 82,
        "./translate": 197,
        "@keystonehq/metamask-airgapped-keyring": 544,
        "@metamask/address-book-controller": 998,
        "@metamask/announcement-controller": 1024,
        "@metamask/approval-controller": 1027,
        "@metamask/assets-controllers": 1046,
        "@metamask/base-controller": 1051,
        "@metamask/browser-passworder": 1052,
        "@metamask/controller-utils": 1056,
        "@metamask/eth-json-rpc-middleware": 1091,
        "@metamask/eth-keyring-controller": 1112,
        "@metamask/eth-ledger-bridge-keyring": 1172,
        "@metamask/eth-query": 1181,
        "@metamask/eth-trezor-keyring": 1241,
        "@metamask/ethjs-query": 1259,
        "@metamask/gas-fee-controller": 1269,
        "@metamask/keyring-controller": 1372,
        "@metamask/logging-controller": 1374,
        "@metamask/network-controller": 1436,
        "@metamask/notification-controller": 1440,
        "@metamask/obs-store": 1483,
        "@metamask/obs-store/dist/asStream": 1482,
        "@metamask/permission-controller": 1491,
        "@metamask/phishing-controller": 1512,
        "@metamask/ppom-validator": 1556,
        "@metamask/queued-request-controller": 1586,
        "@metamask/rate-limit-controller": 1588,
        "@metamask/scure-bip39/dist/wordlists/english": 1596,
        "@metamask/selected-network-controller": 1608,
        "@metamask/signature-controller": 1610,
        "@metamask/smart-transactions-controller": 1614,
        "@metamask/snaps-controllers": 1622,
        "@metamask/transaction-controller": 1835,
        "@sentry/browser": 1982,
        "await-semaphore": 2265,
        buffer: 2392,
        "eth-json-rpc-filters": 2611,
        "eth-json-rpc-filters/subscriptionManager": 2613,
        "eth-lattice-keyring": 2615,
        "eth-rpc-errors": 2648,
        events: 2745,
        "json-rpc-engine": 3102,
        "json-rpc-middleware-stream": 3106,
        lodash: 3312,
        loglevel: 3322,
        nanoid: 3388,
        pump: 3508
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.METAMASK_CONTROLLER_EVENTS = void 0);
                    var n = Xe(e("events")),
                      s = Xe(e("pump")),
                      o = e("@metamask/obs-store"),
                      i = e("@metamask/obs-store/dist/asStream"),
                      a = e("json-rpc-engine"),
                      l = e("json-rpc-middleware-stream"),
                      c = e("@metamask/eth-json-rpc-middleware"),
                      d = e("lodash"),
                      u = e("@metamask/eth-keyring-controller"),
                      h = e("@metamask/keyring-controller"),
                      p = Xe(e("eth-json-rpc-filters")),
                      g = Xe(e("eth-json-rpc-filters/subscriptionManager")),
                      m = e("eth-rpc-errors"),
                      f = e("await-semaphore"),
                      y = Xe(e("loglevel")),
                      C = e("@metamask/eth-trezor-keyring"),
                      w = e("@metamask/eth-ledger-bridge-keyring"),
                      b = Xe(e("eth-lattice-keyring")),
                      v = e("@keystonehq/metamask-airgapped-keyring"),
                      k = Xe(e("@metamask/eth-query")),
                      S = Xe(e("@metamask/ethjs-query")),
                      _ = Xe(e("nanoid")),
                      T = e("@sentry/browser"),
                      A = e("@metamask/address-book-controller"),
                      E = e("@metamask/approval-controller"),
                      M = e("@metamask/base-controller"),
                      P = e("@metamask/assets-controllers"),
                      N = e("@metamask/phishing-controller"),
                      I = e("@metamask/announcement-controller"),
                      R = e("@metamask/network-controller"),
                      O = e("@metamask/gas-fee-controller"),
                      x = e("@metamask/permission-controller"),
                      U = Xe(e("@metamask/smart-transactions-controller")),
                      j = e("@metamask/selected-network-controller"),
                      L = e("@metamask/logging-controller"),
                      D = e("@metamask/browser-passworder"),
                      F = e("@metamask/rate-limit-controller"),
                      q = e("@metamask/notification-controller"),
                      K = e("@metamask/snaps-controllers"),
                      B = e("@metamask/signature-controller"),
                      $ = e("@metamask/ppom-validator"),
                      H = e("@metamask/controller-utils"),
                      G = e("@metamask/scure-bip39/dist/wordlists/english"),
                      W = e("@metamask/queued-request-controller"),
                      V = e("@metamask/transaction-controller"),
                      z = e("../../shared/constants/transaction"),
                      Y = e("../../shared/constants/swaps"),
                      Q = e("../../shared/constants/network"),
                      J = e("../../shared/constants/hardware-wallets"),
                      X = e("../../shared/constants/keyring"),
                      Z = e("../../shared/constants/permissions"),
                      ee = e("../../shared/notifications"),
                      te = e("../../shared/constants/time"),
                      re = e("../../shared/constants/app"),
                      ne = e("../../shared/constants/metametrics"),
                      se = e("../../shared/constants/logs"),
                      oe = e("../../shared/lib/token-util.ts"),
                      ie = e("../../shared/modules/string-utils"),
                      ae = e("../../shared/modules/transaction.utils"),
                      le = e("../../shared/constants/tokens"),
                      ce = e("../../shared/lib/metamask-controller-utils"),
                      de = e("../../shared/modules/mv3.utils"),
                      ue = e("../../shared/modules/conversion.utils"),
                      he = e("../../shared/modules/network.utils"),
                      pe = e("./lib/transaction/metrics"),
                      ge = e("./lib/keyring-snaps-permissions"),
                      me = e("./lib/ppom/ppom-middleware"),
                      fe = (function (e, t) {
                        if (!t && e && e.__esModule) return e;
                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                        var r = Je(t);
                        if (r && r.has(e)) return r.get(e);
                        var n = { __proto__: null },
                          s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                          }
                        return (n.default = e), r && r.set(e, n), n;
                      })(e("./lib/ppom/ppom")),
                      ye = e("./detect-multiple-instances"),
                      Ce = Xe(e("./lib/ComposableObservableStore")),
                      we = Xe(e("./lib/account-tracker")),
                      be = Xe(e("./lib/createDupeReqFilterMiddleware")),
                      ve = Xe(e("./lib/createLoggerMiddleware")),
                      ke = e("./lib/rpc-method-middleware"),
                      Se = Xe(e("./lib/createOriginMiddleware")),
                      _e = Xe(e("./lib/createTabIdMiddleware")),
                      Te = Xe(e("./lib/createOnboardingMiddleware")),
                      Ae = e("./lib/stream-utils"),
                      Ee = Xe(e("./controllers/ens")),
                      Me = Xe(e("./controllers/preferences")),
                      Pe = Xe(e("./controllers/app-state")),
                      Ne = Xe(e("./controllers/cached-balances")),
                      Ie = Xe(e("./controllers/alert")),
                      Re = Xe(e("./controllers/onboarding")),
                      Oe = Xe(e("./lib/backup")),
                      xe = Xe(e("./controllers/decrypt-message")),
                      Ue = Xe(e("./controllers/detect-tokens")),
                      je = Xe(e("./controllers/swaps")),
                      Le = Xe(e("./controllers/metametrics")),
                      De = e("./lib/segment"),
                      Fe = Xe(e("./lib/createMetaRPCHandler")),
                      qe = e("./lib/util"),
                      Ke = Xe(e("./lib/createMetamaskMiddleware")),
                      Be = e("./lib/hardware-keyring-builder-factory"),
                      $e = Xe(e("./controllers/encryption-public-key")),
                      He = Xe(e("./controllers/app-metadata")),
                      Ge = e("./controllers/permissions"),
                      We = Xe(e("./lib/createRPCMethodTrackingMiddleware")),
                      Ve = e("./lib/security-provider-helpers"),
                      ze = e("./lib/ppom/indexed-db-backend"),
                      Ye = e("./translate"),
                      Qe = e("./lib/snap-keyring");
                    function Je(e) {
                      if ("function" != typeof WeakMap) return null;
                      var t = new WeakMap(),
                        r = new WeakMap();
                      return (Je = function (e) {
                        return e ? r : t;
                      })(e);
                    }
                    function Xe(e) {
                      return e && e.__esModule ? e : { default: e };
                    }
                    function Ze(e, t, r) {
                      return (
                        (t = (function (e) {
                          var t = (function (e, t) {
                            if ("object" != typeof e || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (r !== undefined) {
                              var n = r.call(e, t || "default");
                              if ("object" != typeof n) return n;
                              throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == typeof t ? t : String(t);
                        })(t)) in e
                          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                          : (e[t] = r),
                        e
                      );
                    }
                    r.METAMASK_CONTROLLER_EVENTS = { UPDATE_BADGE: "updateBadge", APPROVAL_STATE_CHANGE: "ApprovalController:stateChange" };
                    class et extends n.default {
                      constructor(e) {
                        super(),
                          Ze(
                            this,
                            "_trackSnapExportUsage",
                            (0, d.wrap)(
                              (0, d.memoize)(
                                () =>
                                  (0, d.throttle)(
                                    (e, t) =>
                                      this.metaMetricsController.trackEvent({
                                        event: ne.MetaMetricsEventName.SnapExportUsed,
                                        category: ne.MetaMetricsEventCategory.Snaps,
                                        properties: { snap_id: e, export: t }
                                      }),
                                    60 * te.SECOND
                                  ),
                                (e, t) => `${e}${t}`
                              ),
                              (e, ...t) => e(...t)(...t)
                            )
                          ),
                          Ze(this, "handleWatchAssetRequest", ({ asset: e, type: t, origin: r, networkClientId: n }) => {
                            switch (t) {
                              case H.ERC20:
                                return this.tokensController.watchAsset({ asset: e, type: t, networkClientId: n });
                              case H.ERC721:
                              case H.ERC1155:
                                return this.nftController.watchNft(e, t, r);
                              default:
                                throw new Error(`Asset type ${t} not supported`);
                            }
                          }),
                          Ze(this, "removePermissionsFor", (e) => {
                            try {
                              this.permissionController.revokePermissions(e);
                            } catch (e) {
                              if (!(e instanceof x.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ze(this, "updateCaveat", (e, t, r, n) => {
                            try {
                              this.controllerMessenger.call("PermissionController:updateCaveat", e, t, r, n);
                            } catch (e) {
                              if (!(e instanceof x.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ze(this, "rejectPermissionsRequest", (e) => {
                            try {
                              this.permissionController.rejectPermissionsRequest(e);
                            } catch (e) {
                              if (!(e instanceof x.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ze(this, "acceptPermissionsRequest", (e) => {
                            try {
                              this.permissionController.acceptPermissionsRequest(e);
                            } catch (e) {
                              if (!(e instanceof x.PermissionsRequestNotFoundError)) throw e;
                            }
                          }),
                          Ze(this, "resolvePendingApproval", async (e, t, r) => {
                            try {
                              await this.approvalController.accept(e, t, r);
                            } catch (e) {
                              if (!(e instanceof E.ApprovalRequestNotFoundError)) throw e;
                            }
                          }),
                          Ze(this, "rejectPendingApproval", (e, t) => {
                            try {
                              this.approvalController.reject(e, new m.EthereumRpcError(t.code, t.message, t.data));
                            } catch (e) {
                              if (!(e instanceof E.ApprovalRequestNotFoundError)) throw e;
                            }
                          });
                        const { isFirstMetaMaskControllerSetup: t } = e;
                        (this.defaultMaxListeners = 20),
                          (this.sendUpdate = (0, d.debounce)(this.privateSendUpdate.bind(this), 200 * te.MILLISECOND)),
                          (this.opts = e),
                          (this.extension = e.browser),
                          (this.platform = e.platform),
                          (this.notificationManager = e.notificationManager);
                        const r = e.initState || {},
                          n = this.platform.getVersion();
                        this.recordFirstTimeInfo(r),
                          (this.featureFlags = e.featureFlags),
                          (this.activeControllerConnections = 0),
                          (this.getRequestAccountTabIds = e.getRequestAccountTabIds),
                          (this.getOpenMetamaskTabsIds = e.getOpenMetamaskTabsIds),
                          (this.controllerMessenger = new M.ControllerMessenger()),
                          (this.loggingController = new L.LoggingController({
                            messenger: this.controllerMessenger.getRestricted({ name: "LoggingController" }),
                            state: r.LoggingController
                          })),
                          (this.localStoreApiWrapper = e.localStore),
                          (this.currentMigrationVersion = e.currentMigrationVersion),
                          (this.store = new Ce.default({ state: r, controllerMessenger: this.controllerMessenger, persist: !0 })),
                          (this.connections = {}),
                          (this.createVaultMutex = new f.Mutex()),
                          this.extension.runtime.onInstalled.addListener((e) => {
                            "update" === e.reason &&
                              ("8.1.0" === n && this.platform.openExtensionInBrowser(),
                              this.loggingController.add({
                                type: L.LogType.GenericLog,
                                data: { event: se.LOG_EVENT.VERSION_UPDATE, previousVersion: e.previousVersion, version: n }
                              }));
                          }),
                          (this.appMetadataController = new He.default({
                            state: r.AppMetadataController,
                            currentMigrationVersion: this.currentMigrationVersion,
                            currentAppVersion: n
                          })),
                          (this.queuedRequestController = new W.QueuedRequestController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "QueuedRequestController",
                              allowedActions: [],
                              allowedEvents: [W.QueuedRequestControllerEventTypes.countChanged]
                            })
                          })),
                          (this.approvalController = new E.ApprovalController({
                            messenger: this.controllerMessenger.getRestricted({ name: "ApprovalController" }),
                            showApprovalRequest: e.showUserConfirmation,
                            typesExcludedFromRateLimiting: [
                              H.ApprovalType.EthSign,
                              H.ApprovalType.PersonalSign,
                              H.ApprovalType.EthSignTypedData,
                              H.ApprovalType.Transaction,
                              H.ApprovalType.WatchAsset,
                              H.ApprovalType.EthGetEncryptionPublicKey,
                              H.ApprovalType.EthDecrypt
                            ]
                          }));
                        const s = this.controllerMessenger.getRestricted({
                          name: "NetworkController",
                          allowedEvents: [
                            "NetworkController:stateChange",
                            "NetworkController:networkWillChange",
                            "NetworkController:networkDidChange",
                            "NetworkController:infuraIsBlocked",
                            "NetworkController:infuraIsUnblocked"
                          ],
                          allowedActions: [
                            "NetworkController:getNetworkClientById",
                            "NetworkController:getEthQuery",
                            "NetworkController:getProviderConfig",
                            "NetworkController:getEIP1559Compatibility",
                            "NetworkController:findNetworkClientIdByChainId",
                            "NetworkController:setProviderType",
                            "NetworkController:setActiveNetwork"
                          ]
                        });
                        let o = {};
                        r.NetworkController && (o = r.NetworkController),
                          (this.networkController = new R.NetworkController({
                            messenger: s,
                            state: o,
                            infuraProjectId: e.infuraProjectId,
                            trackMetaMetricsEvent: (...e) => this.metaMetricsController.trackEvent(...e)
                          })),
                          this.networkController.initializeProvider(),
                          (this.provider = this.networkController.getProviderAndBlockTracker().provider),
                          (this.blockTracker = this.networkController.getProviderAndBlockTracker().blockTracker),
                          (this.deprecatedNetworkId = null),
                          this.updateDeprecatedNetworkId(),
                          s.subscribe("NetworkController:networkDidChange", () => this.updateDeprecatedNetworkId());
                        const i = this.controllerMessenger.getRestricted({
                          name: "TokenListController",
                          allowedEvents: ["TokenListController:stateChange", "NetworkController:stateChange"]
                        });
                        (this.selectedNetworkController = new j.SelectedNetworkController({
                          messenger: this.controllerMessenger.getRestricted({
                            name: "SelectedNetworkController",
                            allowedActions: [
                              "SelectedNetworkController:getState",
                              "SelectedNetworkController:getNetworkClientIdForDomain",
                              "SelectedNetworkController:setNetworkClientIdForDomain",
                              "NetworkController:getNetworkClientById"
                            ],
                            allowedEvents: ["SelectedNetworkController:stateChange", "NetworkController:stateChange"]
                          })
                        })),
                          (this.tokenListController = new P.TokenListController({
                            chainId: this.networkController.state.providerConfig.chainId,
                            preventPollingOnNetworkRestart: !r.TokenListController || r.TokenListController.preventPollingOnNetworkRestart,
                            messenger: i,
                            state: r.TokenListController
                          })),
                          (this.preferencesController = new Me.default({
                            initState: r.PreferencesController,
                            initLangCode: e.initLangCode,
                            tokenListController: this.tokenListController,
                            provider: this.provider,
                            networkConfigurations: this.networkController.state.networkConfigurations
                          })),
                          (this.assetsContractController = new P.AssetsContractController(
                            {
                              chainId: this.networkController.state.providerConfig.chainId,
                              onPreferencesStateChange: (e) => this.preferencesController.store.subscribe(e),
                              onNetworkStateChange: (e) =>
                                s.subscribe("NetworkController:networkDidChange", () => {
                                  const t = this.networkController.state;
                                  return e(t);
                                }),
                              getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController)
                            },
                            { provider: this.provider },
                            r.AssetsContractController
                          ));
                        const a = this.controllerMessenger.getRestricted({
                          name: "TokensController",
                          allowedActions: ["ApprovalController:addRequest"],
                          allowedEvents: ["NetworkController:stateChange"]
                        });
                        this.tokensController = new P.TokensController({
                          messenger: a,
                          chainId: this.networkController.state.providerConfig.chainId,
                          onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                          onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                          onTokenListStateChange: (e) =>
                            this.controllerMessenger.subscribe(`${this.tokenListController.name}:stateChange`, e),
                          getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController),
                          getERC20TokenName: this.assetsContractController.getERC20TokenName.bind(this.assetsContractController),
                          config: { provider: this.provider },
                          state: r.TokensController
                        });
                        const l = this.controllerMessenger.getRestricted({
                          name: "NftController",
                          allowedActions: [`${this.approvalController.name}:addRequest`]
                        });
                        (this.nftController = new P.NftController(
                          {
                            messenger: l,
                            chainId: this.networkController.state.providerConfig.chainId,
                            onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            getERC721AssetName: this.assetsContractController.getERC721AssetName.bind(this.assetsContractController),
                            getERC721AssetSymbol: this.assetsContractController.getERC721AssetSymbol.bind(this.assetsContractController),
                            getERC721TokenURI: this.assetsContractController.getERC721TokenURI.bind(this.assetsContractController),
                            getERC721OwnerOf: this.assetsContractController.getERC721OwnerOf.bind(this.assetsContractController),
                            getERC1155BalanceOf: this.assetsContractController.getERC1155BalanceOf.bind(this.assetsContractController),
                            getERC1155TokenURI: this.assetsContractController.getERC1155TokenURI.bind(this.assetsContractController),
                            onNftAdded: ({ address: e, symbol: t, tokenId: r, standard: n, source: s }) =>
                              this.metaMetricsController.trackEvent({
                                event: ne.MetaMetricsEventName.NftAdded,
                                category: ne.MetaMetricsEventCategory.Wallet,
                                sensitiveProperties: {
                                  token_contract_address: e,
                                  token_symbol: t,
                                  token_id: r,
                                  token_standard: n,
                                  asset_type: z.AssetType.NFT,
                                  source: s
                                }
                              }),
                            getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController)
                          },
                          {},
                          r.NftController
                        )),
                          this.nftController.setApiKey(null),
                          (this.nftDetectionController = new P.NftDetectionController({
                            chainId: this.networkController.state.providerConfig.chainId,
                            onNftsStateChange: (e) => this.nftController.subscribe(e),
                            onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            getOpenSeaApiKey: () => this.nftController.openSeaApiKey,
                            getBalancesInSingleCall: this.assetsContractController.getBalancesInSingleCall.bind(
                              this.assetsContractController
                            ),
                            addNft: this.nftController.addNft.bind(this.nftController),
                            getNftState: () => this.nftController.state
                          })),
                          (this.metaMetricsController = new Le.default({
                            segment: De.segment,
                            preferencesStore: this.preferencesController.store,
                            onNetworkDidChange: s.subscribe.bind(s, "NetworkController:networkDidChange"),
                            getNetworkIdentifier: () => {
                              const { type: e, rpcUrl: t } = this.networkController.state.providerConfig;
                              return e === Q.NETWORK_TYPES.RPC ? t : e;
                            },
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            version: this.platform.getVersion(),
                            environment: "production",
                            extension: this.extension,
                            initState: r.MetaMetricsController,
                            captureException: T.captureException
                          })),
                          this.on("update", (e) => {
                            this.metaMetricsController.handleMetaMaskStateUpdate(e);
                          });
                        const c = this.controllerMessenger.getRestricted({ name: "GasFeeController" }),
                          p = Y.GAS_API_BASE_URL;
                        (this.gasFeeController = new O.GasFeeController({
                          state: r.GasFeeController,
                          interval: 1e4,
                          messenger: c,
                          clientId: Y.SWAPS_CLIENT_ID,
                          getProvider: () => this.networkController.getProviderAndBlockTracker().provider,
                          onNetworkStateChange: (e) => {
                            s.subscribe("NetworkController:networkDidChange", () => e(this.networkController.state));
                          },
                          getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                            this.networkController
                          ),
                          getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                          legacyAPIEndpoint: `${p}/networks/<chain_id>/gasPrices`,
                          EIP1559APIEndpoint: `${p}/networks/<chain_id>/suggestedGasFees`,
                          getCurrentNetworkLegacyGasAPICompatibility: () => {
                            const { chainId: e } = this.networkController.state.providerConfig;
                            return e === Q.CHAIN_IDS.BSC;
                          },
                          getChainId: () => this.networkController.state.providerConfig.chainId
                        })),
                          (this.appStateController = new Pe.default({
                            addUnlockListener: this.on.bind(this, "unlock"),
                            isUnlocked: this.isUnlocked.bind(this),
                            initState: r.AppStateController,
                            onInactiveTimeout: () => this.setLocked(),
                            preferencesStore: this.preferencesController.store,
                            messenger: this.controllerMessenger.getRestricted({
                              name: "AppStateController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`
                              ],
                              allowedEvents: ["KeyringController:qrKeyringStateChange"]
                            }),
                            extension: this.extension
                          }));
                        const g = this.controllerMessenger.getRestricted({
                          name: "CurrencyRateController",
                          allowedActions: [`${this.networkController.name}:getNetworkClientById`]
                        });
                        this.currencyRateController = new P.CurrencyRateController({
                          includeUsdRate: !0,
                          messenger: g,
                          state: r.CurrencyController
                        });
                        const k = this.controllerMessenger.getRestricted({ name: "PhishingController" });
                        (this.phishingController = new N.PhishingController({
                          messenger: k,
                          state: r.PhishingController,
                          hotlistRefreshInterval: undefined,
                          stalelistRefreshInterval: undefined
                        })),
                          this.phishingController.maybeUpdateState(),
                          (this.ppomController = new $.PPOMController({
                            messenger: this.controllerMessenger.getRestricted({ name: "PPOMController" }),
                            storageBackend: new ze.IndexedDBPPOMStorage("PPOMDB", 1),
                            provider: this.provider,
                            ppomProvider: { PPOM: fe.PPOM, ppomInit: fe.default },
                            state: r.PPOMController,
                            chainId: this.networkController.state.providerConfig.chainId,
                            onNetworkChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                            securityAlertsEnabled: this.preferencesController.store.getState().securityAlertsEnabled,
                            onPreferencesChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                            cdnBaseUrl: "static.metafi.codefi.network/api/v1/confirmations/ppom",
                            blockaidPublicKey: "066ad3e8af5583385e312c156d238055215d5f25247c1e91055afa756cb98a88"
                          }));
                        const S = this.controllerMessenger.getRestricted({ name: "AnnouncementController" });
                        (this.announcementController = new I.AnnouncementController({
                          messenger: S,
                          allAnnouncements: ee.UI_NOTIFICATIONS,
                          state: r.AnnouncementController
                        })),
                          (this.tokenRatesController = new P.TokenRatesController(
                            {
                              chainId: this.networkController.state.providerConfig.chainId,
                              ticker: this.networkController.state.providerConfig.ticker,
                              selectedAddress: this.preferencesController.getSelectedAddress(),
                              onTokensStateChange: (e) => this.tokensController.subscribe(e),
                              onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                              onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store)
                            },
                            {},
                            r.TokenRatesController
                          )),
                          this.preferencesController.store.getState().useCurrencyRateCheck && this.tokenRatesController.start(),
                          this.preferencesController.store.subscribe(
                            (0, qe.previousValueComparator)((e, t) => {
                              const { useCurrencyRateCheck: r } = e,
                                { useCurrencyRateCheck: n } = t;
                              n && !r
                                ? (this.currencyRateController.startPollingByNetworkClientId(
                                    this.networkController.state.selectedNetworkClientId
                                  ),
                                  this.tokenRatesController.start())
                                : !n && r && (this.currencyRateController.stopAllPolling(), this.tokenRatesController.stop());
                            }, this.preferencesController.store.getState())
                          ),
                          (this.ensController = new Ee.default({
                            provider: this.provider,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            onNetworkDidChange: s.subscribe.bind(s, "NetworkController:networkDidChange")
                          })),
                          (this.onboardingController = new Re.default({ initState: r.OnboardingController })),
                          (this.accountTracker = new we.default({
                            provider: this.provider,
                            blockTracker: this.blockTracker,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            getNetworkIdentifier: () => {
                              const { type: e, rpcUrl: t } = this.networkController.state.providerConfig;
                              return e === Q.NETWORK_TYPES.RPC ? t : e;
                            },
                            preferencesController: this.preferencesController,
                            onboardingController: this.onboardingController,
                            initState: { accounts: {} },
                            onAccountRemoved: this.controllerMessenger.subscribe.bind(
                              this.controllerMessenger,
                              "KeyringController:accountRemoved"
                            )
                          })),
                          this.on("controllerConnectionChanged", (e) => {
                            const { completedOnboarding: t } = this.onboardingController.store.getState();
                            e > 0 && t ? this.triggerNetworkrequests() : this.stopNetworkRequests();
                          }),
                          this.onboardingController.store.subscribe(
                            (0, qe.previousValueComparator)(async (e, t) => {
                              const { completedOnboarding: r } = e,
                                { completedOnboarding: n } = t;
                              !r && n && this.triggerNetworkrequests();
                            }, this.onboardingController.store.getState())
                          ),
                          (this.cachedBalancesController = new Ne.default({
                            accountTracker: this.accountTracker,
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                            initState: r.CachedBalancesController
                          }));
                        let _ = [(0, u.keyringBuilderFactory)(v.MetaMaskKeyring)];
                        if (this.canUseHardwareWallets()) {
                          var D;
                          const e = null === (D = this.opts.overrides) || void 0 === D ? void 0 : D.keyrings,
                            t = [(null == e ? void 0 : e.lattice) || b.default, v.MetaMaskKeyring],
                            r = [
                              {
                                keyring: (null == e ? void 0 : e.trezor) || C.TrezorKeyring,
                                bridge: (null == e ? void 0 : e.trezorBridge) || C.TrezorConnectBridge
                              },
                              {
                                keyring: (null == e ? void 0 : e.ledger) || w.LedgerKeyring,
                                bridge: (null == e ? void 0 : e.ledgerBridge) || w.LedgerIframeBridge
                              }
                            ];
                          (_ = t.map((e) => (0, u.keyringBuilderFactory)(e))),
                            r.forEach((e) => _.push((0, Be.hardwareKeyringBuilderFactory)(e.keyring, e.bridge)));
                        }
                        const G = this.controllerMessenger.getRestricted({
                          name: "SnapKeyringBuilder",
                          allowedActions: [
                            "ApprovalController:addRequest",
                            "ApprovalController:acceptRequest",
                            "ApprovalController:rejectRequest",
                            "ApprovalController:startFlow",
                            "ApprovalController:endFlow",
                            "ApprovalController:showSuccess",
                            "ApprovalController:showError",
                            "PhishingController:test",
                            "PhishingController:maybeUpdateState",
                            "KeyringController:getAccounts"
                          ]
                        });
                        _.push(
                          (0, Qe.snapKeyringBuilder)(
                            G,
                            () => this.snapController,
                            async () => await this.keyringController.persistAllKeyrings(),
                            (e) => this.preferencesController.setSelectedAddress(e),
                            (e) => this.removeAccount(e)
                          )
                        );
                        const J = this.controllerMessenger.getRestricted({
                          name: "KeyringController",
                          allowedActions: [
                            "KeyringController:getState",
                            "KeyringController:signMessage",
                            "KeyringController:signPersonalMessage",
                            "KeyringController:signTypedMessage",
                            "KeyringController:decryptMessage",
                            "KeyringController:getEncryptionPublicKey",
                            "KeyringController:getKeyringsByType",
                            "KeyringController:getKeyringForAccount",
                            "KeyringController:getAccounts"
                          ],
                          allowedEvents: [
                            "KeyringController:stateChange",
                            "KeyringController:lock",
                            "KeyringController:unlock",
                            "KeyringController:accountRemoved",
                            "KeyringController:qrKeyringStateChange"
                          ]
                        });
                        (this.keyringController = new h.KeyringController({
                          keyringBuilders: _,
                          state: r.KeyringController,
                          encryptor: e.encryptor || undefined,
                          messenger: J,
                          removeIdentity: this.preferencesController.removeAddress.bind(this.preferencesController),
                          setAccountLabel: this.preferencesController.setAccountLabel.bind(this.preferencesController),
                          setSelectedAddress: this.preferencesController.setSelectedAddress.bind(this.preferencesController),
                          syncIdentities: this.preferencesController.syncAddresses.bind(this.preferencesController),
                          updateIdentities: this.preferencesController.setAddresses.bind(this.preferencesController)
                        })),
                          this.controllerMessenger.subscribe("KeyringController:unlock", () => this._onUnlock()),
                          this.controllerMessenger.subscribe("KeyringController:lock", () => this._onLock()),
                          this.controllerMessenger.subscribe("KeyringController:stateChange", (e) => {
                            this._onKeyringControllerUpdate(e);
                          });
                        const X = () => this.preferencesController.store.getState().identities;
                        (this.permissionController = new x.PermissionController({
                          messenger: this.controllerMessenger.getRestricted({
                            name: "PermissionController",
                            allowedActions: [
                              `${this.approvalController.name}:addRequest`,
                              `${this.approvalController.name}:hasRequest`,
                              `${this.approvalController.name}:acceptRequest`,
                              `${this.approvalController.name}:rejectRequest`,
                              "SnapController:getPermitted",
                              "SnapController:install",
                              "SubjectMetadataController:getSubjectMetadata"
                            ]
                          }),
                          state: r.PermissionController,
                          caveatSpecifications: (0, Ge.getCaveatSpecifications)({ getIdentities: X }),
                          permissionSpecifications: {
                            ...(0, Ge.getPermissionSpecifications)({
                              getIdentities: X,
                              getAllAccounts: this.keyringController.getAccounts.bind(this.keyringController),
                              captureKeyringTypesWithMissingIdentities: (e = {}, t = []) => {
                                const r = t.filter((t) => !e[t]).map((e) => this.keyringController.getAccountKeyringType(e)),
                                  n = Object.keys(e || {}).length,
                                  s = Object.keys(this.accountTracker.store.getState().accounts || {}).length;
                                (0, T.captureException)(
                                  new Error(
                                    `Attempt to get permission specifications failed because their were ${t.length} accounts, but ${n} identities, and the ${r} keyrings included accounts with missing identities. Meanwhile, there are ${s} accounts in the account tracker.`
                                  )
                                );
                              }
                            }),
                            ...this.getSnapPermissionSpecifications()
                          },
                          unrestrictedMethods: Ge.unrestrictedMethods
                        })),
                          (this.permissionLogController = new Ge.PermissionLogController({
                            restrictedMethods: new Set(Object.keys(Z.RestrictedMethods)),
                            initState: r.PermissionLogController
                          })),
                          (this.subjectMetadataController = new x.SubjectMetadataController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "SubjectMetadataController",
                              allowedActions: [`${this.permissionController.name}:hasPermissions`]
                            }),
                            state: r.SubjectMetadataController,
                            subjectCacheLimit: 100
                          }));
                        const oe = {
                          iframeUrl: new URL("https://execution.metamask.io/3.4.1/index.html"),
                          messenger: this.controllerMessenger.getRestricted({ name: "ExecutionService" }),
                          setupSnapProvider: this.setupSnapProvider.bind(this)
                        };
                        this.snapExecutionService = new K.IframeExecutionService(oe);
                        const ie = this.controllerMessenger.getRestricted({
                            name: "SnapController",
                            allowedEvents: [
                              "ExecutionService:unhandledError",
                              "ExecutionService:outboundRequest",
                              "ExecutionService:outboundResponse",
                              "SnapController:snapInstalled",
                              "SnapController:snapUpdated"
                            ],
                            allowedActions: [
                              `${this.permissionController.name}:getEndowments`,
                              `${this.permissionController.name}:getPermissions`,
                              `${this.permissionController.name}:hasPermission`,
                              `${this.permissionController.name}:hasPermissions`,
                              `${this.permissionController.name}:requestPermissions`,
                              `${this.permissionController.name}:revokeAllPermissions`,
                              `${this.permissionController.name}:revokePermissions`,
                              `${this.permissionController.name}:revokePermissionForAllSubjects`,
                              `${this.permissionController.name}:getSubjectNames`,
                              `${this.permissionController.name}:updateCaveat`,
                              `${this.approvalController.name}:addRequest`,
                              `${this.approvalController.name}:updateRequestState`,
                              `${this.permissionController.name}:grantPermissions`,
                              `${this.subjectMetadataController.name}:getSubjectMetadata`,
                              `${this.phishingController.name}:maybeUpdateState`,
                              `${this.phishingController.name}:testOrigin`,
                              "ExecutionService:executeSnap",
                              "ExecutionService:getRpcRequestHandler",
                              "ExecutionService:terminateSnap",
                              "ExecutionService:terminateAllSnaps",
                              "ExecutionService:handleRpcRequest",
                              "SnapsRegistry:get",
                              "SnapsRegistry:getMetadata",
                              "SnapsRegistry:update",
                              "SnapsRegistry:resolveVersion"
                            ]
                          }),
                          ae = !0;
                        (this.snapController = new K.SnapController({
                          environmentEndowmentPermissions: Object.values(Z.EndowmentPermissions),
                          excludedPermissions: { ...Z.ExcludedSnapPermissions, ...Z.ExcludedSnapEndowments },
                          closeAllConnections: this.removeAllConnections.bind(this),
                          state: r.SnapController,
                          messenger: ie,
                          featureFlags: { dappsCanUpdateSnaps: !0, allowLocalSnaps: !1, requireAllowlist: ae }
                        })),
                          (this.notificationController = new q.NotificationController({
                            messenger: this.controllerMessenger.getRestricted({ name: "NotificationController" }),
                            state: r.NotificationController
                          })),
                          (this.rateLimitController = new F.RateLimitController({
                            state: r.RateLimitController,
                            messenger: this.controllerMessenger.getRestricted({ name: "RateLimitController" }),
                            implementations: {
                              showNativeNotification: {
                                method: (e, t) => {
                                  const r = this.controllerMessenger.call("SubjectMetadataController:getState").subjectMetadata[e];
                                  return (
                                    this.platform._showNotification((null == r ? void 0 : r.name) ?? e, t).catch((e) => {
                                      y.default.error("Failed to create notification", e);
                                    }),
                                    null
                                  );
                                },
                                rateLimitCount: 2,
                                rateLimitTimeout: 3e5
                              },
                              showInAppNotification: {
                                method: (e, t) => (this.controllerMessenger.call("NotificationController:show", e, t), null),
                                rateLimitCount: 5,
                                rateLimitTimeout: 6e4
                              }
                            }
                          }));
                        const le = this.controllerMessenger.getRestricted({
                          name: "CronjobController",
                          allowedEvents: [
                            "SnapController:snapInstalled",
                            "SnapController:snapUpdated",
                            "SnapController:snapRemoved",
                            "SnapController:snapEnabled",
                            "SnapController:snapDisabled"
                          ],
                          allowedActions: [
                            `${this.permissionController.name}:getPermissions`,
                            "SnapController:handleRequest",
                            "SnapController:getAll"
                          ]
                        });
                        this.cronjobController = new K.CronjobController({ state: r.CronjobController, messenger: le });
                        const ce = this.controllerMessenger.getRestricted({ name: "SnapsRegistry", allowedEvents: [], allowedActions: [] });
                        this.snapsRegistry = new K.JsonSnapsRegistry({
                          state: r.SnapsRegistry,
                          messenger: ce,
                          refetchOnAllowlistMiss: ae,
                          failOnUnavailableRegistry: ae,
                          url: {
                            registry: "https://acl.execution.metamask.io/latest/registry.json",
                            signature: "https://acl.execution.metamask.io/latest/signature.json"
                          },
                          publicKey: "0x025b65308f0f0fb8bc7f7ff87bfc296e0330eee5d3c1d1ee4a048b2fd6a86fa0a6"
                        });
                        const ue = this.controllerMessenger.getRestricted({
                          name: "DetectTokensController",
                          allowedActions: ["KeyringController:getState"],
                          allowedEvents: ["NetworkController:stateChange", "KeyringController:lock", "KeyringController:unlock"]
                        });
                        (this.detectTokensController = new Ue.default({
                          messenger: ue,
                          preferences: this.preferencesController,
                          tokensController: this.tokensController,
                          assetsContractController: this.assetsContractController,
                          network: this.networkController,
                          tokenList: this.tokenListController,
                          trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                          getNetworkClientById: this.networkController.getNetworkClientById.bind(this.networkController)
                        })),
                          (this.addressBookController = new A.AddressBookController(undefined, r.AddressBookController)),
                          (this.alertController = new Ie.default({
                            initState: r.AlertController,
                            preferencesStore: this.preferencesController.store
                          })),
                          (this.backup = new Oe.default({
                            preferencesController: this.preferencesController,
                            addressBookController: this.addressBookController,
                            networkController: this.networkController,
                            trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.txController = new V.TransactionController(
                            {
                              blockTracker: this.blockTracker,
                              cancelMultiplier: 1.1,
                              getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                                this.networkController
                              ),
                              getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                              getExternalPendingTransactions: this.getExternalPendingTransactions.bind(this),
                              getGasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                              getNetworkState: () => this.networkController.state,
                              getPermittedAccounts: this.getPermittedAccounts.bind(this),
                              getSavedGasFees: () =>
                                this.preferencesController.store.getState().advancedGasFee[
                                  this.networkController.state.providerConfig.chainId
                                ],
                              getSelectedAddress: () => this.preferencesController.store.getState().selectedAddress,
                              incomingTransactions: {
                                includeTokenTransfers: !1,
                                isEnabled: () => {
                                  var e;
                                  return Boolean(
                                    (null === (e = this.preferencesController.store.getState().incomingTransactionsPreferences) ||
                                    void 0 === e
                                      ? void 0
                                      : e[this.networkController.state.providerConfig.chainId]) &&
                                      this.onboardingController.store.getState().completedOnboarding
                                  );
                                },
                                queryEntireHistory: !1,
                                updateTransactions: !1
                              },
                              messenger: this.controllerMessenger.getRestricted({
                                name: "TransactionController",
                                allowedActions: [`${this.approvalController.name}:addRequest`]
                              }),
                              onNetworkStateChange: (e) => {
                                s.subscribe("NetworkController:networkDidChange", () => e());
                              },
                              provider: this.provider,
                              hooks: {}
                            },
                            { sign: (...e) => this.keyringController.signTransaction(...e) },
                            r.TransactionController
                          )),
                          this._addTransactionControllerListeners(),
                          s.subscribe("NetworkController:networkDidChange", async () => {
                            try {
                              this.preferencesController.store.getState().useCurrencyRateCheck &&
                                (await this.currencyRateController.stopAllPolling(),
                                this.currencyRateController.startPollingByNetworkClientId(
                                  this.networkController.state.selectedNetworkClientId
                                ));
                            } catch (e) {
                              console.error(e);
                            }
                          }),
                          this.networkController.lookupNetwork(),
                          (this.decryptMessageController = new xe.default({
                            getState: this.getState.bind(this),
                            messenger: this.controllerMessenger.getRestricted({
                              name: "DecryptMessageController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`,
                                `${this.approvalController.name}:rejectRequest`,
                                `${this.keyringController.name}:decryptMessage`
                              ]
                            }),
                            metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.encryptionPublicKeyController = new $e.default({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "EncryptionPublicKeyController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.approvalController.name}:acceptRequest`,
                                `${this.approvalController.name}:rejectRequest`
                              ]
                            }),
                            getEncryptionPublicKey: this.keyringController.getEncryptionPublicKey.bind(this.keyringController),
                            getAccountKeyringType: this.keyringController.getAccountKeyringType.bind(this.keyringController),
                            getState: this.getState.bind(this),
                            metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                          })),
                          (this.signatureController = new B.SignatureController({
                            messenger: this.controllerMessenger.getRestricted({
                              name: "SignatureController",
                              allowedActions: [
                                `${this.approvalController.name}:addRequest`,
                                `${this.keyringController.name}:signMessage`,
                                `${this.keyringController.name}:signPersonalMessage`,
                                `${this.keyringController.name}:signTypedMessage`,
                                `${this.loggingController.name}:add`
                              ]
                            }),
                            isEthSignEnabled: () => {
                              var e;
                              return null === (e = this.preferencesController.store.getState()) ||
                                void 0 === e ||
                                null === (e = e.disabledRpcMethodPreferences) ||
                                void 0 === e
                                ? void 0
                                : e.eth_sign;
                            },
                            getAllState: this.getState.bind(this),
                            securityProviderRequest: this.securityProviderRequest.bind(this),
                            getCurrentChainId: () => this.networkController.state.providerConfig.chainId
                          })),
                          this.signatureController.hub.on("cancelWithReason", ({ message: e, reason: t }) => {
                            this.metaMetricsController.trackEvent({
                              event: t,
                              category: ne.MetaMetricsEventCategory.Transactions,
                              properties: { action: "Sign Request", type: e.type }
                            });
                          }),
                          (this.swapsController = new je.default(
                            {
                              getBufferedGasLimit: async (e, t) => {
                                const { gas: r, simulationFails: n } = await this.txController.estimateGasBuffered(e.txParams, t);
                                return { gasLimit: r, simulationFails: n };
                              },
                              provider: this.provider,
                              getProviderConfig: () => this.networkController.state.providerConfig,
                              getTokenRatesState: () => this.tokenRatesController.state,
                              getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                              getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                              trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                            },
                            r.SwapsController
                          )),
                          (this.smartTransactionsController = new U.default(
                            {
                              onNetworkStateChange: s.subscribe.bind(s, "NetworkController:stateChange"),
                              getNetwork: () => this.networkController.state.networkId ?? "loading",
                              getNonceLock: this.txController.nonceTracker.getNonceLock.bind(this.txController.nonceTracker),
                              confirmExternalTransaction: this.txController.confirmExternalTransaction.bind(this.txController),
                              provider: this.provider,
                              trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController)
                            },
                            { supportedChainIds: [Q.CHAIN_IDS.MAINNET, Q.CHAIN_IDS.GOERLI] },
                            r.SmartTransactionsController
                          )),
                          s.subscribe("NetworkController:networkDidChange", () => {
                            this.accountTracker._updateAccounts();
                          }),
                          s.subscribe("NetworkController:networkWillChange", () => {
                            this.encryptionPublicKeyController.clearUnapproved(),
                              this.decryptMessageController.clearUnapproved(),
                              this.signatureController.clearUnapproved(),
                              this.approvalController.clear(m.ethErrors.provider.userRejectedRequest());
                          }),
                          (this.metamaskMiddleware = (0, Ke.default)({
                            static: { eth_syncing: !1, web3_clientVersion: `MetaMask/v${n}` },
                            version: n,
                            getAccounts: async ({ origin: e }, { suppressUnauthorizedError: t = !0 } = {}) => {
                              if (e === re.ORIGIN_METAMASK) {
                                const e = this.preferencesController.getSelectedAddress();
                                return e ? [e] : [];
                              }
                              return this.isUnlocked() ? await this.getPermittedAccounts(e, { suppressUnauthorizedError: t }) : [];
                            },
                            processTransaction: this.newUnapprovedTransaction.bind(this),
                            processEthSignMessage: this.signatureController.newUnsignedMessage.bind(this.signatureController),
                            processTypedMessage: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processTypedMessageV3: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processTypedMessageV4: this.signatureController.newUnsignedTypedMessage.bind(this.signatureController),
                            processPersonalMessage: this.signatureController.newUnsignedPersonalMessage.bind(this.signatureController),
                            processEncryptionPublicKey: this.encryptionPublicKeyController.newRequestEncryptionPublicKey.bind(
                              this.encryptionPublicKeyController
                            ),
                            processDecryptMessage: this.decryptMessageController.newRequestDecryptMessage.bind(
                              this.decryptMessageController
                            ),
                            getPendingNonce: this.getPendingNonce.bind(this),
                            getPendingTransactionByHash: (e) =>
                              this.txController.state.transactions.find((t) => t.hash === e && t.status === V.TransactionStatus.submitted)
                          })),
                          this.on("update", (e) => this._onStateUpdate(e));
                        const he = {
                          AccountTracker: this.accountTracker.store,
                          TokenRatesController: this.tokenRatesController,
                          DecryptMessageController: this.decryptMessageController,
                          EncryptionPublicKeyController: this.encryptionPublicKeyController,
                          SignatureController: this.signatureController,
                          SwapsController: this.swapsController.store,
                          EnsController: this.ensController.store,
                          ApprovalController: this.approvalController,
                          PPOMController: this.ppomController
                        };
                        this.store.updateStructure({
                          AppStateController: this.appStateController.store,
                          AppMetadataController: this.appMetadataController.store,
                          TransactionController: this.txController,
                          KeyringController: this.keyringController,
                          PreferencesController: this.preferencesController.store,
                          MetaMetricsController: this.metaMetricsController.store,
                          AddressBookController: this.addressBookController,
                          CurrencyController: this.currencyRateController,
                          NetworkController: this.networkController,
                          CachedBalancesController: this.cachedBalancesController.store,
                          AlertController: this.alertController.store,
                          OnboardingController: this.onboardingController.store,
                          PermissionController: this.permissionController,
                          PermissionLogController: this.permissionLogController.store,
                          SubjectMetadataController: this.subjectMetadataController,
                          AnnouncementController: this.announcementController,
                          GasFeeController: this.gasFeeController,
                          TokenListController: this.tokenListController,
                          TokensController: this.tokensController,
                          SmartTransactionsController: this.smartTransactionsController,
                          NftController: this.nftController,
                          PhishingController: this.phishingController,
                          SelectedNetworkController: this.selectedNetworkController,
                          LoggingController: this.loggingController,
                          SnapController: this.snapController,
                          CronjobController: this.cronjobController,
                          SnapsRegistry: this.snapsRegistry,
                          NotificationController: this.notificationController,
                          PPOMController: this.ppomController,
                          ...he
                        }),
                          (this.memStore = new Ce.default({
                            config: {
                              AppStateController: this.appStateController.store,
                              AppMetadataController: this.appMetadataController.store,
                              NetworkController: this.networkController,
                              CachedBalancesController: this.cachedBalancesController.store,
                              KeyringController: this.keyringController,
                              PreferencesController: this.preferencesController.store,
                              MetaMetricsController: this.metaMetricsController.store,
                              AddressBookController: this.addressBookController,
                              CurrencyController: this.currencyRateController,
                              AlertController: this.alertController.store,
                              OnboardingController: this.onboardingController.store,
                              PermissionController: this.permissionController,
                              PermissionLogController: this.permissionLogController.store,
                              SubjectMetadataController: this.subjectMetadataController,
                              AnnouncementController: this.announcementController,
                              GasFeeController: this.gasFeeController,
                              TokenListController: this.tokenListController,
                              TokensController: this.tokensController,
                              SmartTransactionsController: this.smartTransactionsController,
                              NftController: this.nftController,
                              SelectedNetworkController: this.selectedNetworkController,
                              LoggingController: this.loggingController,
                              TxController: this.txController,
                              SnapController: this.snapController,
                              CronjobController: this.cronjobController,
                              SnapsRegistry: this.snapsRegistry,
                              NotificationController: this.notificationController,
                              ...he
                            },
                            controllerMessenger: this.controllerMessenger
                          }));
                        const pe = [
                          this.accountTracker.resetState,
                          this.decryptMessageController.resetState.bind(this.decryptMessageController),
                          this.encryptionPublicKeyController.resetState.bind(this.encryptionPublicKeyController),
                          this.signatureController.resetState.bind(this.signatureController),
                          this.swapsController.resetState,
                          this.ensController.resetState,
                          this.approvalController.clear.bind(this.approvalController)
                        ];
                        de.isManifestV3
                          ? !0 === t && (this.resetStates(pe), this.extension.storage.session.set({ isFirstMetaMaskControllerSetup: !1 }))
                          : this.resetStates(pe);
                        !this.isUnlocked() && this.onboardingController.store.getState().completedOnboarding,
                          this._startUISync(),
                          this.extension.runtime.getPlatformInfo().then(({ os: e }) => {
                            this.appStateController.setBrowserEnvironment(
                              e,
                              this.extension.runtime.getBrowserInfo === undefined ? "chrome" : "firefox"
                            );
                          }),
                          this.setupControllerEventSubscriptions(),
                          (this.publicConfigStore = this.createPublicConfigStore()),
                          this.extension.runtime.onMessageExternal.addListener(ye.onMessageReceived),
                          (0, ye.checkForMultipleVersionsRunning)();
                      }
                      triggerNetworkrequests() {
                        this.accountTracker.start(),
                          this.txController.startIncomingTransactionPolling(),
                          this.preferencesController.store.getState().useCurrencyRateCheck &&
                            this.currencyRateController.startPollingByNetworkClientId(this.networkController.state.selectedNetworkClientId),
                          this.preferencesController.store.getState().useTokenDetection && this.tokenListController.start();
                      }
                      stopNetworkRequests() {
                        this.accountTracker.stop(),
                          this.txController.stopIncomingTransactionPolling(),
                          this.preferencesController.store.getState().useCurrencyRateCheck && this.currencyRateController.stopAllPolling(),
                          this.preferencesController.store.getState().useTokenDetection &&
                            (this.tokenListController.stop(), this.tokenRatesController.stop());
                      }
                      canUseHardwareWallets() {
                        return !de.isManifestV3 || !1;
                      }
                      resetStates(e) {
                        e.forEach((e) => {
                          try {
                            e();
                          } catch (e) {
                            console.error(e);
                          }
                        });
                      }
                      async getSnapKeyring() {
                        let [e] = this.keyringController.getKeyringsByType(X.KeyringType.snap);
                        return e || (e = await this.keyringController.addNewKeyring(X.KeyringType.snap)), e;
                      }
                      handleSnapRequest(e) {
                        return (
                          this._trackSnapExportUsage(e.snapId, e.handler), this.controllerMessenger.call("SnapController:handleRequest", e)
                        );
                      }
                      getLocale() {
                        const { currentLocale: e } = this.preferencesController.store.getState();
                        return e;
                      }
                      getSnapPermissionSpecifications() {
                        return {
                          ...(0, Ge.buildSnapEndowmentSpecifications)(),
                          ...(0, Ge.buildSnapRestrictedMethodSpecifications)({
                            encrypt: D.encrypt,
                            decrypt: D.decrypt,
                            getLocale: this.getLocale.bind(this),
                            clearSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:clearSnapState"),
                            getMnemonic: this.getPrimaryKeyringMnemonic.bind(this),
                            getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                            getSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:get"),
                            handleSnapRpcRequest: this.handleSnapRequest.bind(this),
                            getSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getSnapState"),
                            showDialog: (e, t, r, n) =>
                              this.approvalController.addAndShowApprovalRequest({
                                origin: e,
                                type: re.SNAP_DIALOG_TYPES[t],
                                requestData: { content: r, placeholder: n }
                              }),
                            showNativeNotification: (e, t) =>
                              this.controllerMessenger.call("RateLimitController:call", e, "showNativeNotification", e, t.message),
                            showInAppNotification: (e, t) =>
                              this.controllerMessenger.call("RateLimitController:call", e, "showInAppNotification", e, t.message),
                            updateSnapState: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:updateSnapState"),
                            maybeUpdatePhishingList: () => {
                              const { usePhishDetect: e } = this.preferencesController.store.getState();
                              e && this.controllerMessenger.call("PhishingController:maybeUpdateState");
                            },
                            isOnPhishingList: (e) => {
                              const { usePhishDetect: t } = this.preferencesController.store.getState();
                              return !!t && this.controllerMessenger.call("PhishingController:testOrigin", e).result;
                            },
                            getSnapKeyring: this.getSnapKeyring.bind(this)
                          })
                        };
                      }
                      dismissNotifications(e) {
                        this.notificationController.dismiss(e);
                      }
                      markNotificationsAsRead(e) {
                        this.notificationController.markRead(e);
                      }
                      setupControllerEventSubscriptions() {
                        let e;
                        this.preferencesController.store.subscribe(async (t) => {
                          var r;
                          const { selectedAddress: n, currentLocale: s } = t,
                            { chainId: o } = this.networkController.state.providerConfig;
                          await (0, Ye.updateCurrentLocale)(s),
                            null !== (r = t.incomingTransactionsPreferences) && void 0 !== r && r[o]
                              ? this.txController.startIncomingTransactionPolling()
                              : this.txController.stopIncomingTransactionPolling(),
                            n && n !== e && ((e = n), await this._onAccountChange(n));
                        }),
                          this.controllerMessenger.subscribe(
                            `${this.permissionController.name}:stateChange`,
                            async (e, t) => {
                              const r = (0, Ge.getChangedAccounts)(e, t);
                              for (const [e, t] of r.entries()) this._notifyAccountsChange(e, t);
                            },
                            Ge.getPermittedAccountsByOrigin
                          ),
                          this.controllerMessenger.subscribe("NetworkController:networkDidChange", async () => {
                            await this.txController.updateIncomingTransactions();
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapAdded`, (e, t = null) => {
                            const {
                              manifest: { proposedName: r },
                              version: n
                            } = e;
                            this.subjectMetadataController.addSubjectMetadata({
                              subjectType: x.SubjectType.Snap,
                              name: r,
                              origin: e.id,
                              version: n,
                              svgIcon: t
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapInstalled`, (e, t) => {
                            this.metaMetricsController.trackEvent({
                              event: ne.MetaMetricsEventName.SnapInstalled,
                              category: ne.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, version: e.version, origin: t }
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapUpdated`, (e, t, r) => {
                            this.metaMetricsController.trackEvent({
                              event: ne.MetaMetricsEventName.SnapUpdated,
                              category: ne.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, old_version: t, new_version: e.version, origin: r }
                            });
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapTerminated`, (e) => {
                            const t = Object.values(this.approvalController.state.pendingApprovals).filter(
                              (t) => t.origin === e.id && t.type.startsWith(Z.RestrictedMethods.snap_dialog)
                            );
                            for (const e of t) this.approvalController.reject(e.id, new Error("Snap was terminated."));
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapRemoved`, (e) => {
                            const t = Object.values(this.notificationController.state.notifications).reduce(
                              (t, r) => (r.origin === e.id && t.push(r.id), t),
                              []
                            );
                            this.dismissNotifications(t);
                          }),
                          this.controllerMessenger.subscribe(`${this.snapController.name}:snapUninstalled`, (e) => {
                            this.metaMetricsController.trackEvent({
                              event: ne.MetaMetricsEventName.SnapUninstalled,
                              category: ne.MetaMetricsEventCategory.Snaps,
                              properties: { snap_id: e.id, version: e.version }
                            });
                          });
                      }
                      createPublicConfigStore() {
                        const e = new o.ObservableStore(),
                          t = (e, { isUnlocked: t }) => ({
                            isUnlocked: t,
                            chainId: e,
                            networkVersion: this.deprecatedNetworkId ?? "loading"
                          }),
                          r = (r) => {
                            var n;
                            const s = null === (n = r.networksMetadata[r.selectedNetworkClientId]) || void 0 === n ? void 0 : n.status,
                              { chainId: o } = this.networkController.state.providerConfig;
                            s === Q.NetworkStatus.Available && e.putState(t(o, r));
                          };
                        return this.on("update", r), r(this.getState()), e;
                      }
                      async getProviderState(e) {
                        return {
                          isUnlocked: this.isUnlocked(),
                          accounts: await this.getPermittedAccounts(e),
                          ...this.getProviderNetworkState(this.preferencesController.getUseRequestQueue() ? e : undefined)
                        };
                      }
                      getProviderNetworkState(e = "metamask") {
                        let t;
                        if (this.preferencesController.getUseRequestQueue()) {
                          const r =
                            this.controllerMessenger.call("SelectedNetworkController:getNetworkClientIdForDomain", e) ||
                            this.networkController.state.selectedNetworkClientId;
                          t = this.controllerMessenger.call("NetworkController:getNetworkClientById", r).configuration.chainId;
                        } else t = this.networkController.state.providerConfig.chainId;
                        return { chainId: t, networkVersion: this.deprecatedNetworkId ?? "loading" };
                      }
                      async updateDeprecatedNetworkId() {
                        try {
                          this.deprecatedNetworkId = await this.deprecatedGetNetworkId();
                        } catch (e) {
                          console.error(e), (this.deprecatedNetworkId = null);
                        }
                        this._notifyChainChange();
                      }
                      async deprecatedGetNetworkId() {
                        const e = this.controllerMessenger.call("NetworkController:getEthQuery");
                        if (!e) throw new Error("Provider has not been initialized");
                        return new Promise((t, r) => {
                          e.sendAsync({ method: "net_version" }, (e, n) => {
                            e ? r(e) : t((0, he.convertNetworkId)(n));
                          });
                        });
                      }
                      getState() {
                        const { vault: e } = this.keyringController.state,
                          t = Boolean(e),
                          r = this.memStore.getFlatState();
                        return (
                          delete r.vault,
                          {
                            isInitialized: t,
                            ...r,
                            snapStates: {},
                            unencryptedSnapStates: {},
                            snaps: Object.values(r.snaps ?? {}).reduce((e, t) => {
                              const { sourceCode: r, auxiliaryFiles: n, ...s } = t;
                              return (e[t.id] = s), e;
                            }, {})
                          }
                        );
                      }
                      getApi() {
                        const {
                          addressBookController: e,
                          alertController: t,
                          appStateController: r,
                          keyringController: n,
                          nftController: s,
                          nftDetectionController: o,
                          currencyRateController: i,
                          detectTokensController: a,
                          ensController: l,
                          gasFeeController: c,
                          metaMetricsController: d,
                          networkController: u,
                          announcementController: h,
                          onboardingController: p,
                          permissionController: g,
                          preferencesController: m,
                          swapsController: f,
                          tokensController: y,
                          smartTransactionsController: C,
                          txController: w,
                          assetsContractController: b,
                          backup: v,
                          approvalController: k,
                          phishingController: S
                        } = this;
                        return {
                          getState: this.getState.bind(this),
                          setCurrentCurrency: i.setCurrentCurrency.bind(i),
                          setUseBlockie: m.setUseBlockie.bind(m),
                          setUseNonceField: m.setUseNonceField.bind(m),
                          setUsePhishDetect: m.setUsePhishDetect.bind(m),
                          setUseMultiAccountBalanceChecker: m.setUseMultiAccountBalanceChecker.bind(m),
                          setUseSafeChainsListValidation: m.setUseSafeChainsListValidation.bind(m),
                          setUseTokenDetection: m.setUseTokenDetection.bind(m),
                          setUseNftDetection: m.setUseNftDetection.bind(m),
                          setUse4ByteResolution: m.setUse4ByteResolution.bind(m),
                          setUseCurrencyRateCheck: m.setUseCurrencyRateCheck.bind(m),
                          setOpenSeaEnabled: m.setOpenSeaEnabled.bind(m),
                          getUseRequestQueue: this.preferencesController.getUseRequestQueue.bind(this.preferencesController),
                          getProviderConfig: () => this.networkController.state.providerConfig,
                          setSecurityAlertsEnabled: m.setSecurityAlertsEnabled.bind(m),
                          setAddSnapAccountEnabled: m.setAddSnapAccountEnabled.bind(m),
                          setUseRequestQueue: this.setUseRequestQueue.bind(this),
                          setIpfsGateway: m.setIpfsGateway.bind(m),
                          setUseAddressBarEnsResolution: m.setUseAddressBarEnsResolution.bind(m),
                          setParticipateInMetaMetrics: d.setParticipateInMetaMetrics.bind(d),
                          setCurrentLocale: m.setCurrentLocale.bind(m),
                          setIncomingTransactionsPreferences: m.setIncomingTransactionsPreferences.bind(m),
                          markPasswordForgotten: this.markPasswordForgotten.bind(this),
                          unMarkPasswordForgotten: this.unMarkPasswordForgotten.bind(this),
                          getRequestAccountTabIds: this.getRequestAccountTabIds,
                          getOpenMetamaskTabsIds: this.getOpenMetamaskTabsIds,
                          markNotificationPopupAsAutomaticallyClosed: () => this.notificationManager.markAsAutomaticallyClosed(),
                          requestUserApproval: k.addAndShowApprovalRequest.bind(k),
                          addNewAccount: this.addNewAccount.bind(this),
                          getSeedPhrase: this.getSeedPhrase.bind(this),
                          resetAccount: this.resetAccount.bind(this),
                          removeAccount: this.removeAccount.bind(this),
                          importAccountWithStrategy: this.importAccountWithStrategy.bind(this),
                          getAccountsBySnapId: (e) => (0, Qe.getAccountsBySnapId)(this, e),
                          connectHardware: this.connectHardware.bind(this),
                          forgetDevice: this.forgetDevice.bind(this),
                          checkHardwareStatus: this.checkHardwareStatus.bind(this),
                          unlockHardwareWalletAccount: this.unlockHardwareWalletAccount.bind(this),
                          setLedgerTransportPreference: this.setLedgerTransportPreference.bind(this),
                          attemptLedgerTransportCreation: this.attemptLedgerTransportCreation.bind(this),
                          establishLedgerTransportPreference: this.establishLedgerTransportPreference.bind(this),
                          submitQRHardwareCryptoHDKey: n.submitQRCryptoHDKey.bind(n),
                          submitQRHardwareCryptoAccount: n.submitQRCryptoAccount.bind(n),
                          cancelSyncQRHardware: n.cancelQRSynchronization.bind(n),
                          submitQRHardwareSignature: n.submitQRSignature.bind(n),
                          cancelQRHardwareSignRequest: n.cancelQRSignRequest.bind(n),
                          submitPassword: this.submitPassword.bind(this),
                          verifyPassword: this.verifyPassword.bind(this),
                          setProviderType: (e) => (
                            this.selectedNetworkController.setNetworkClientIdForMetamask(e), this.networkController.setProviderType(e)
                          ),
                          setActiveNetwork: (e) => (
                            this.selectedNetworkController.setNetworkClientIdForMetamask(e), this.networkController.setActiveNetwork(e)
                          ),
                          rollbackToPreviousProvider: u.rollbackToPreviousProvider.bind(u),
                          removeNetworkConfiguration: u.removeNetworkConfiguration.bind(u),
                          upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
                          getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(
                            this.networkController
                          ),
                          setSelectedAddress: m.setSelectedAddress.bind(m),
                          addToken: y.addToken.bind(y),
                          updateTokenType: y.updateTokenType.bind(y),
                          setAccountLabel: m.setAccountLabel.bind(m),
                          setFeatureFlag: m.setFeatureFlag.bind(m),
                          setPreference: m.setPreference.bind(m),
                          addKnownMethodData: m.addKnownMethodData.bind(m),
                          setDismissSeedBackUpReminder: m.setDismissSeedBackUpReminder.bind(m),
                          setDisabledRpcMethodPreference: m.setDisabledRpcMethodPreference.bind(m),
                          getRpcMethodPreferences: m.getRpcMethodPreferences.bind(m),
                          setAdvancedGasFee: m.setAdvancedGasFee.bind(m),
                          setTheme: m.setTheme.bind(m),
                          setTransactionSecurityCheckEnabled: m.setTransactionSecurityCheckEnabled.bind(m),
                          setSnapsAddSnapAccountModalDismissed: m.setSnapsAddSnapAccountModalDismissed.bind(m),
                          getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
                          getTokenSymbol: this.getTokenSymbol.bind(this),
                          addNft: s.addNft.bind(s),
                          addNftVerifyOwnership: s.addNftVerifyOwnership.bind(s),
                          removeAndIgnoreNft: s.removeAndIgnoreNft.bind(s),
                          removeNft: s.removeNft.bind(s),
                          checkAndUpdateAllNftsOwnershipStatus: s.checkAndUpdateAllNftsOwnershipStatus.bind(s),
                          checkAndUpdateSingleNftOwnershipStatus: s.checkAndUpdateSingleNftOwnershipStatus.bind(s),
                          isNftOwner: s.isNftOwner.bind(s),
                          setAddressBook: e.set.bind(e),
                          removeFromAddressBook: e.delete.bind(e),
                          setLastActiveTime: r.setLastActiveTime.bind(r),
                          setDefaultHomeActiveTabName: r.setDefaultHomeActiveTabName.bind(r),
                          setConnectedStatusPopoverHasBeenShown: r.setConnectedStatusPopoverHasBeenShown.bind(r),
                          setRecoveryPhraseReminderHasBeenShown: r.setRecoveryPhraseReminderHasBeenShown.bind(r),
                          setRecoveryPhraseReminderLastShown: r.setRecoveryPhraseReminderLastShown.bind(r),
                          setTermsOfUseLastAgreed: r.setTermsOfUseLastAgreed.bind(r),
                          setSnapsInstallPrivacyWarningShownStatus: r.setSnapsInstallPrivacyWarningShownStatus.bind(r),
                          setOutdatedBrowserWarningLastShown: r.setOutdatedBrowserWarningLastShown.bind(r),
                          setShowTestnetMessageInDropdown: r.setShowTestnetMessageInDropdown.bind(r),
                          setShowBetaHeader: r.setShowBetaHeader.bind(r),
                          setShowProductTour: r.setShowProductTour.bind(r),
                          updateNftDropDownState: r.updateNftDropDownState.bind(r),
                          setFirstTimeUsedNetwork: r.setFirstTimeUsedNetwork.bind(r),
                          tryReverseResolveAddress: l.reverseResolveAddress.bind(l),
                          setLocked: this.setLocked.bind(this),
                          createNewVaultAndKeychain: this.createNewVaultAndKeychain.bind(this),
                          createNewVaultAndRestore: this.createNewVaultAndRestore.bind(this),
                          exportAccount: this.exportAccount.bind(this),
                          updateTransaction: w.updateTransaction.bind(w),
                          approveTransactionsWithSameNonce: w.approveTransactionsWithSameNonce.bind(w),
                          createCancelTransaction: this.createCancelTransaction.bind(this),
                          createSpeedUpTransaction: this.createSpeedUpTransaction.bind(this),
                          estimateGas: this.estimateGas.bind(this),
                          getNextNonce: this.getNextNonce.bind(this),
                          addTransaction: this.addTransaction.bind(this),
                          addTransactionAndWaitForPublish: this.addTransactionAndWaitForPublish.bind(this),
                          createTransactionEventFragment: pe.createTransactionEventFragmentWithTxId.bind(
                            null,
                            this.getTransactionMetricsRequest()
                          ),
                          getTransactions: this.txController.getTransactions.bind(this.txController),
                          updateEditableParams: this.txController.updateEditableParams.bind(this.txController),
                          updateTransactionGasFees: w.updateTransactionGasFees.bind(w),
                          updateTransactionSendFlowHistory: w.updateTransactionSendFlowHistory.bind(w),
                          updatePreviousGasParams: w.updatePreviousGasParams.bind(w),
                          decryptMessage: this.decryptMessageController.decryptMessage.bind(this.decryptMessageController),
                          decryptMessageInline: this.decryptMessageController.decryptMessageInline.bind(this.decryptMessageController),
                          cancelDecryptMessage: this.decryptMessageController.cancelDecryptMessage.bind(this.decryptMessageController),
                          encryptionPublicKey: this.encryptionPublicKeyController.encryptionPublicKey.bind(
                            this.encryptionPublicKeyController
                          ),
                          cancelEncryptionPublicKey: this.encryptionPublicKeyController.cancelEncryptionPublicKey.bind(
                            this.encryptionPublicKeyController
                          ),
                          setSeedPhraseBackedUp: p.setSeedPhraseBackedUp.bind(p),
                          completeOnboarding: p.completeOnboarding.bind(p),
                          setFirstTimeFlowType: p.setFirstTimeFlowType.bind(p),
                          setAlertEnabledness: t.setAlertEnabledness.bind(t),
                          setUnconnectedAccountAlertShown: t.setUnconnectedAccountAlertShown.bind(t),
                          setWeb3ShimUsageAlertDismissed: t.setWeb3ShimUsageAlertDismissed.bind(t),
                          removePermissionsFor: this.removePermissionsFor,
                          approvePermissionsRequest: this.acceptPermissionsRequest,
                          rejectPermissionsRequest: this.rejectPermissionsRequest,
                          ...(0, Ge.getPermissionBackgroundApiMethods)(g),
                          disableSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:disable"),
                          enableSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:enable"),
                          updateSnap: (e, t) => (this.controllerMessenger.call("SnapController:install", e, t), null),
                          removeSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:remove"),
                          handleSnapRequest: this.handleSnapRequest.bind(this),
                          revokeDynamicSnapPermissions: this.controllerMessenger.call.bind(
                            this.controllerMessenger,
                            "SnapController:revokeDynamicPermissions"
                          ),
                          dismissNotifications: this.dismissNotifications.bind(this),
                          markNotificationsAsRead: this.markNotificationsAsRead.bind(this),
                          updateCaveat: this.updateCaveat.bind(this),
                          getPhishingResult: async (e) => (await S.maybeUpdateState(), S.test(e)),
                          updateSnapRegistry: this.preferencesController.updateSnapRegistry.bind(m),
                          fetchAndSetQuotes: f.fetchAndSetQuotes.bind(f),
                          setSelectedQuoteAggId: f.setSelectedQuoteAggId.bind(f),
                          resetSwapsState: f.resetSwapsState.bind(f),
                          setSwapsTokens: f.setSwapsTokens.bind(f),
                          clearSwapsQuotes: f.clearSwapsQuotes.bind(f),
                          setApproveTxId: f.setApproveTxId.bind(f),
                          setTradeTxId: f.setTradeTxId.bind(f),
                          setSwapsTxGasPrice: f.setSwapsTxGasPrice.bind(f),
                          setSwapsTxGasLimit: f.setSwapsTxGasLimit.bind(f),
                          setSwapsTxMaxFeePerGas: f.setSwapsTxMaxFeePerGas.bind(f),
                          setSwapsTxMaxFeePriorityPerGas: f.setSwapsTxMaxFeePriorityPerGas.bind(f),
                          safeRefetchQuotes: f.safeRefetchQuotes.bind(f),
                          stopPollingForQuotes: f.stopPollingForQuotes.bind(f),
                          setBackgroundSwapRouteState: f.setBackgroundSwapRouteState.bind(f),
                          resetPostFetchState: f.resetPostFetchState.bind(f),
                          setSwapsErrorKey: f.setSwapsErrorKey.bind(f),
                          setInitialGasEstimate: f.setInitialGasEstimate.bind(f),
                          setCustomApproveTxData: f.setCustomApproveTxData.bind(f),
                          setSwapsLiveness: f.setSwapsLiveness.bind(f),
                          setSwapsFeatureFlags: f.setSwapsFeatureFlags.bind(f),
                          setSwapsUserFeeLevel: f.setSwapsUserFeeLevel.bind(f),
                          setSwapsQuotesPollingLimitEnabled: f.setSwapsQuotesPollingLimitEnabled.bind(f),
                          setSmartTransactionsOptInStatus: C.setOptInState.bind(C),
                          fetchSmartTransactionFees: C.getFees.bind(C),
                          clearSmartTransactionFees: C.clearFees.bind(C),
                          submitSignedTransactions: C.submitSignedTransactions.bind(C),
                          cancelSmartTransaction: C.cancelSmartTransaction.bind(C),
                          fetchSmartTransactionsLiveness: C.fetchLiveness.bind(C),
                          updateSmartTransaction: C.updateSmartTransaction.bind(C),
                          setStatusRefreshInterval: C.setStatusRefreshInterval.bind(C),
                          trackMetaMetricsEvent: d.trackEvent.bind(d),
                          trackMetaMetricsPage: d.trackPage.bind(d),
                          createEventFragment: d.createEventFragment.bind(d),
                          updateEventFragment: d.updateEventFragment.bind(d),
                          finalizeEventFragment: d.finalizeEventFragment.bind(d),
                          resolvePendingApproval: this.resolvePendingApproval,
                          rejectPendingApproval: this.rejectPendingApproval,
                          updateViewedNotifications: h.updateViewed.bind(h),
                          getGasFeeEstimatesAndStartPolling: c.getGasFeeEstimatesAndStartPolling.bind(c),
                          disconnectGasFeeEstimatePoller: c.disconnectPoller.bind(c),
                          getGasFeeTimeEstimate: c.getTimeEstimate.bind(c),
                          addPollingTokenToAppState: r.addPollingToken.bind(r),
                          removePollingTokenFromAppState: r.removePollingToken.bind(r),
                          backupUserData: v.backupUserData.bind(v),
                          restoreUserData: v.restoreUserData.bind(v),
                          detectNewTokens: a.detectNewTokens.bind(a),
                          detectNfts: o.detectNfts.bind(o),
                          addDetectedTokens: y.addDetectedTokens.bind(y),
                          addImportedTokens: y.addTokens.bind(y),
                          ignoreTokens: y.ignoreTokens.bind(y),
                          getBalancesInSingleCall: b.getBalancesInSingleCall.bind(b),
                          throwTestError: this.throwTestError.bind(this)
                        };
                      }
                      async exportAccount(e, t) {
                        return await this.verifyPassword(t), this.keyringController.exportAccount(t, e);
                      }
                      async getTokenStandardAndDetails(e, t, r) {
                        var n, s;
                        const { tokenList: o } = this.tokenListController.state,
                          { tokens: i } = this.tokensController.state,
                          a = {
                            ...(le.STATIC_MAINNET_TOKEN_LIST[e.toLowerCase()] || {}),
                            ...(o[e.toLowerCase()] || {}),
                            ...(i.find(({ address: t }) => (0, ie.isEqualCaseInsensitive)(t, e)) || {})
                          },
                          l = (0, ie.isEqualCaseInsensitive)(a.standard, z.TokenStandard.ERC20) || !0 === a.erc20,
                          c = !(
                            r ||
                            (0, ie.isEqualCaseInsensitive)(a.standard, z.TokenStandard.ERC1155) ||
                            (0, ie.isEqualCaseInsensitive)(a.standard, z.TokenStandard.ERC721) ||
                            a.erc721
                          ),
                          d = a.decimals !== undefined && a.symbol;
                        let u;
                        if (l || (c && d))
                          try {
                            const r = await (0, oe.fetchTokenBalance)(e, t, this.provider);
                            u = { address: e, balance: r, standard: z.TokenStandard.ERC20, decimals: a.decimals, symbol: a.symbol };
                          } catch (e) {
                            y.default.warning(`Failed to get token balance. Error: ${e}`);
                          }
                        return (
                          u === undefined && (u = await this.assetsContractController.getTokenStandardAndDetails(e, t, r)),
                          {
                            ...u,
                            decimals:
                              null === (n = u) || void 0 === n || null === (n = n.decimals) || void 0 === n ? void 0 : n.toString(10),
                            balance: null === (s = u) || void 0 === s || null === (s = s.balance) || void 0 === s ? void 0 : s.toString(10)
                          }
                        );
                      }
                      async getTokenSymbol(e) {
                        try {
                          const t = await this.assetsContractController.getTokenStandardAndDetails(e);
                          return null == t ? void 0 : t.symbol;
                        } catch (e) {
                          return null;
                        }
                      }
                      async createNewVaultAndKeychain(e) {
                        const t = await this.createVaultMutex.acquire();
                        try {
                          const t = await this.keyringController.createNewVaultAndKeychain(e),
                            r = await this.keyringController.getAccounts();
                          return this.preferencesController.setAddresses(r), this.selectFirstIdentity(), t;
                        } finally {
                          t();
                        }
                      }
                      async createNewVaultAndRestore(e, r) {
                        const n = await this.createVaultMutex.acquire();
                        try {
                          let n, s;
                          const o = t.from(r);
                          this.preferencesController.setAddresses([]),
                            this.permissionController.clearState(),
                            this.snapController.clearState(),
                            this.notificationController.clear(),
                            this.accountTracker.clearAccounts(),
                            this.cachedBalancesController.clearCachedBalances(),
                            this.txController.clearUnapprovedTransactions();
                          const i = await this.keyringController.createNewVaultAndRestore(e, this._convertMnemonicToWordlistIndices(o)),
                            a = new k.default(this.provider);
                          for (
                            n = await this.keyringController.getAccounts(), s = await this.getBalance(n[n.length - 1], a);
                            "0x0" !== s;

                          ) {
                            const { addedAccountAddress: e } = await this.keyringController.addNewAccount(n.length);
                            (n = await this.keyringController.getAccounts()), (s = await this.getBalance(e, a));
                          }
                          n.length > 1 &&
                            "0x0" === s &&
                            (await this.removeAccount(n[n.length - 1]), (n = await this.keyringController.getAccounts()));
                          const l = this.preferencesController.getLedgerTransportPreference();
                          return this.setLedgerTransportPreference(l), this.selectFirstIdentity(), i;
                        } finally {
                          n();
                        }
                      }
                      _convertMnemonicToWordlistIndices(e) {
                        const t = e
                          .toString()
                          .split(" ")
                          .map((e) => G.wordlist.indexOf(e));
                        return new Uint8Array(new Uint16Array(t).buffer);
                      }
                      _convertEnglishWordlistIndicesToCodepoints(e) {
                        return t.from(
                          Array.from(new Uint16Array(e.buffer))
                            .map((e) => G.wordlist[e])
                            .join(" ")
                        );
                      }
                      getBalance(e, t) {
                        return new Promise((r, n) => {
                          const s = this.accountTracker.store.getState().accounts[e];
                          s && s.balance
                            ? r(s.balance)
                            : t.getBalance(e, (e, t) => {
                                e ? (n(e), y.default.error(e)) : r(t || "0x0");
                              });
                        });
                      }
                      async submitPassword(e) {
                        await this.keyringController.submitPassword(e);
                        try {
                          await this.blockTracker.checkForLatestBlock();
                        } catch (e) {
                          y.default.error("Error while unlocking extension.", e);
                        }
                        const t = this.preferencesController.getLedgerTransportPreference();
                        this.setLedgerTransportPreference(t);
                      }
                      async _loginUser(e) {
                        try {
                          await this.submitPassword(e), await this.accountTracker._updateAccounts();
                        } finally {
                          this._startUISync();
                        }
                      }
                      _startUISync() {
                        this.emit("startUISync"), (this.startUISync = !0), this.memStore.subscribe(this.sendUpdate.bind(this));
                      }
                      async submitEncryptionKey() {
                        try {
                          const { loginToken: e, loginSalt: t } = await this.extension.storage.session.get(["loginToken", "loginSalt"]);
                          if (e && t) {
                            const { vault: r } = this.keyringController.state;
                            if (JSON.parse(r).salt !== t)
                              return (
                                console.warn("submitEncryptionKey: Stored salt and vault salt do not match"),
                                void (await this.clearLoginArtifacts())
                              );
                            await this.keyringController.submitEncryptionKey(e, t);
                          }
                        } catch (e) {
                          throw (await this.clearLoginArtifacts(), e);
                        }
                      }
                      async clearLoginArtifacts() {
                        await this.extension.storage.session.remove(["loginToken", "loginSalt"]);
                      }
                      async verifyPassword(e) {
                        await this.keyringController.verifyPassword(e);
                      }
                      selectFirstIdentity() {
                        const { identities: e } = this.preferencesController.store.getState(),
                          [t] = Object.keys(e);
                        this.preferencesController.setSelectedAddress(t);
                      }
                      getPrimaryKeyringMnemonic() {
                        const [e] = this.keyringController.getKeyringsByType(X.KeyringType.hdKeyTree);
                        if (!e.mnemonic) throw new Error("Primary keyring mnemonic unavailable.");
                        return e.mnemonic;
                      }
                      async getKeyringForDevice(e, t = null) {
                        var r, n, s, o;
                        const i = null === (r = this.opts.overrides) || void 0 === r ? void 0 : r.keyrings;
                        let a = null;
                        if (e !== J.HardwareDeviceNames.QR && !this.canUseHardwareWallets())
                          throw new Error("Hardware wallets are not supported on this version.");
                        switch (e) {
                          case J.HardwareDeviceNames.trezor:
                            a = (null == i || null === (n = i.trezor) || void 0 === n ? void 0 : n.type) || C.TrezorKeyring.type;
                            break;
                          case J.HardwareDeviceNames.ledger:
                            a = (null == i || null === (s = i.ledger) || void 0 === s ? void 0 : s.type) || w.LedgerKeyring.type;
                            break;
                          case J.HardwareDeviceNames.qr:
                            a = v.MetaMaskKeyring.type;
                            break;
                          case J.HardwareDeviceNames.lattice:
                            a = (null == i || null === (o = i.lattice) || void 0 === o ? void 0 : o.type) || b.default.type;
                            break;
                          default:
                            throw new Error("MetamaskController:getKeyringForDevice - Unknown device");
                        }
                        let [l] = await this.keyringController.getKeyringsByType(a);
                        if (
                          (l || (l = await this.keyringController.addNewKeyring(a)),
                          t && l.setHdPath && l.setHdPath(t),
                          e === J.HardwareDeviceNames.lattice && (l.appName = "MetaMask"),
                          e === J.HardwareDeviceNames.trezor)
                        ) {
                          const e = l.getModel();
                          this.appStateController.setTrezorModel(e);
                        }
                        return (l.network = this.networkController.state.providerConfig.type), l;
                      }
                      async attemptLedgerTransportCreation() {
                        const e = await this.getKeyringForDevice(J.HardwareDeviceNames.ledger);
                        return await e.attemptMakeApp();
                      }
                      async establishLedgerTransportPreference() {
                        const e = this.preferencesController.getLedgerTransportPreference();
                        return await this.setLedgerTransportPreference(e);
                      }
                      async connectHardware(e, t, r) {
                        const n = await this.getKeyringForDevice(e, r);
                        let s = [];
                        switch (t) {
                          case -1:
                            s = await n.getPreviousPage();
                            break;
                          case 1:
                            s = await n.getNextPage();
                            break;
                          default:
                            s = await n.getFirstPage();
                        }
                        const o = await this.keyringController.getAccounts(),
                          i = [...new Set(o.concat(s.map((e) => e.address.toLowerCase())))];
                        return this.accountTracker.syncWithAddresses(i), s;
                      }
                      async checkHardwareStatus(e, t) {
                        return (await this.getKeyringForDevice(e, t)).isUnlocked();
                      }
                      async forgetDevice(e) {
                        const t = await this.getKeyringForDevice(e);
                        for (const e of t.accounts) await this.removeAccount(e);
                        return t.forgetDevice(), !0;
                      }
                      async getAccountType(e) {
                        switch (await this.keyringController.getAccountKeyringType(e)) {
                          case X.KeyringType.trezor:
                          case X.KeyringType.lattice:
                          case X.KeyringType.qr:
                          case X.KeyringType.ledger:
                            return "hardware";
                          case X.KeyringType.imported:
                            return "imported";
                          case X.KeyringType.snap:
                            return "snap";
                          default:
                            return "MetaMask";
                        }
                      }
                      async getDeviceModel(e) {
                        const t = await this.keyringController.getKeyringForAccount(e);
                        switch (t.type) {
                          case X.KeyringType.trezor:
                            return t.getModel();
                          case X.KeyringType.qr:
                            return t.getName();
                          case X.KeyringType.ledger:
                            return J.HardwareDeviceNames.ledger;
                          case X.KeyringType.lattice:
                            return J.HardwareDeviceNames.lattice;
                          default:
                            return undefined;
                        }
                      }
                      getAccountLabel(e, t, r) {
                        return `${e[0].toUpperCase()}${e.slice(1)} ${parseInt(t, 10) + 1} ${r || ""}`.trim();
                      }
                      async unlockHardwareWalletAccount(e, t, r, n) {
                        const s = await this.getKeyringForDevice(t, r);
                        s.setAccountToUnlock(e);
                        const o = await this.keyringController.getAccounts(),
                          i = await this.keyringController.addNewAccountForKeyring(s),
                          a = await this.keyringController.getAccounts();
                        this.preferencesController.setAddresses(a),
                          a.forEach((r) => {
                            if (!o.includes(r)) {
                              const o = this.getAccountLabel(t === J.HardwareDeviceNames.qr ? s.getName() : t, e, n);
                              this.preferencesController.setAccountLabel(r, o), this.preferencesController.setSelectedAddress(r);
                            }
                          });
                        const { identities: l } = this.preferencesController.store.getState();
                        return { ...i, identities: l };
                      }
                      async addNewAccount(e) {
                        const t = await this.keyringController.getAccounts(),
                          { addedAccountAddress: r } = await this.keyringController.addNewAccount(e);
                        return t.includes(r) || this.preferencesController.setSelectedAddress(r), r;
                      }
                      async getSeedPhrase(e) {
                        return this._convertEnglishWordlistIndicesToCodepoints(await this.keyringController.exportSeedPhrase(e));
                      }
                      async resetAccount() {
                        const e = this.preferencesController.getSelectedAddress();
                        return this.txController.wipeTransactions(!0, e), this.networkController.resetConnection(), e;
                      }
                      async getPermittedAccounts(e, { suppressUnauthorizedError: t = !0 } = {}) {
                        try {
                          return await this.permissionController.executeRestrictedMethod(e, Z.RestrictedMethods.eth_accounts);
                        } catch (e) {
                          if (t && e.code === m.errorCodes.provider.unauthorized) return [];
                          throw e;
                        }
                      }
                      removeAllAccountPermissions(e) {
                        this.permissionController.updatePermissionsByCaveat(Z.CaveatTypes.restrictReturnedAccounts, (t) =>
                          Ge.CaveatMutatorFactories[Z.CaveatTypes.restrictReturnedAccounts].removeAccount(e, t)
                        );
                      }
                      async removeAccount(e) {
                        this.removeAllAccountPermissions(e);
                        const t = await this.keyringController.getKeyringForAccount(e);
                        await this.keyringController.removeAccount(e);
                        const r = t ? await t.getAccounts() : {};
                        var n;
                        0 === (null == r ? void 0 : r.length) && (null === (n = t.destroy) || void 0 === n || n.call(t));
                        return e;
                      }
                      async importAccountWithStrategy(e, t) {
                        const { importedAccountAddress: r } = await this.keyringController.importAccountWithStrategy(e, t);
                        this.preferencesController.setSelectedAddress(r);
                      }
                      async newUnapprovedTransaction(e, t) {
                        const { result: r } = await this.txController.addTransaction(e, {
                          actionId: t.id,
                          method: t.method,
                          origin: t.origin,
                          requireApproval: !0,
                          securityAlertResponse: t.securityAlertResponse
                        });
                        return await r;
                      }
                      async addTransactionAndWaitForPublish(e, t) {
                        const { transactionMeta: r, result: n } = await this.txController.addTransaction(e, t);
                        return await n, r;
                      }
                      async addTransaction(e, t) {
                        const { transactionMeta: r, result: n } = await this.txController.addTransaction(e, t);
                        return n.catch(() => {}), r;
                      }
                      async getCurrentAccountEIP1559Compatibility() {
                        return !0;
                      }
                      async createCancelTransaction(e, t, r) {
                        await this.txController.stopTransaction(e, t, r);
                        return this.getState();
                      }
                      async createSpeedUpTransaction(e, t, r) {
                        await this.txController.speedUpTransaction(e, t, r);
                        return this.getState();
                      }
                      async estimateGas(e) {
                        return new Promise((t, r) => new S.default(this.provider).estimateGas(e, (e, n) => (e ? r(e) : t(n.toString(16)))));
                      }
                      markPasswordForgotten() {
                        this.preferencesController.setPasswordForgotten(!0), this.sendUpdate();
                      }
                      unMarkPasswordForgotten() {
                        this.preferencesController.setPasswordForgotten(!1), this.sendUpdate();
                      }
                      setUseRequestQueue(e) {
                        this.preferencesController.setUseRequestQueue(e),
                          this.selectedNetworkController.update((t) => {
                            t.perDomainNetwork = e;
                          });
                      }
                      setupUntrustedCommunication({ connectionStream: e, sender: t, subjectType: r }) {
                        const { usePhishDetect: n } = this.preferencesController.store.getState();
                        let s;
                        if (
                          ((s = r || (t.id && t.id !== this.extension.runtime.id ? x.SubjectType.Extension : x.SubjectType.Website)), t.url)
                        ) {
                          const { hostname: r } = new URL(t.url);
                          this.phishingController.maybeUpdateState();
                          const s = this.phishingController.test(r);
                          if (n && null != s && s.result)
                            return (
                              this.sendPhishingWarning(e, r),
                              void this.metaMetricsController.trackEvent({
                                event: ne.MetaMetricsEventName.PhishingPageDisplayed,
                                category: ne.MetaMetricsEventCategory.Phishing,
                                properties: { url: r }
                              })
                            );
                        }
                        const o = (0, Ae.setupMultiplex)(e);
                        this.setupProviderConnection(o.createStream("metamask-provider"), t, s),
                          t.url && this.setupPublicConfig(o.createStream("publicConfig"));
                      }
                      setupTrustedCommunication(e, t) {
                        const r = (0, Ae.setupMultiplex)(e);
                        this.setupControllerConnection(r.createStream("controller")),
                          this.setupProviderConnection(r.createStream("provider"), t, x.SubjectType.Internal);
                      }
                      setupPhishingCommunication({ connectionStream: e }) {
                        const { usePhishDetect: t } = this.preferencesController.store.getState();
                        if (!t) return;
                        const r = (0, Ae.setupMultiplex)(e).createStream("metamask-phishing-safelist");
                        r.on(
                          "data",
                          (0, Fe.default)(
                            {
                              safelistPhishingDomain: this.safelistPhishingDomain.bind(this),
                              backToSafetyPhishingWarning: this.backToSafetyPhishingWarning.bind(this)
                            },
                            r
                          )
                        );
                      }
                      sendPhishingWarning(e, t) {
                        (0, Ae.setupMultiplex)(e).createStream("phishing").write({ hostname: t });
                      }
                      setupControllerConnection(e) {
                        const t = this.getApi();
                        (this.activeControllerConnections += 1),
                          this.emit("controllerConnectionChanged", this.activeControllerConnections),
                          e.on("data", (0, Fe.default)(t, e, this.store, this.localStoreApiWrapper));
                        const r = (t) => {
                          e._writableState.ended || e.write({ jsonrpc: "2.0", method: "sendUpdate", params: [t] });
                        };
                        this.on("update", r);
                        const n = () => {
                          e._writableState.ended || e.write({ jsonrpc: "2.0", method: "startUISync" });
                        };
                        this.startUISync ? n() : this.once("startUISync", n),
                          e.on("end", () => {
                            (this.activeControllerConnections -= 1),
                              this.emit("controllerConnectionChanged", this.activeControllerConnections),
                              this.removeListener("update", r);
                          });
                      }
                      setupProviderConnection(e, t, r) {
                        let n, o;
                        (n =
                          r === x.SubjectType.Internal ? re.ORIGIN_METAMASK : r === x.SubjectType.Snap ? t.snapId : new URL(t.url).origin),
                          t.id &&
                            t.id !== this.extension.runtime.id &&
                            this.subjectMetadataController.addSubjectMetadata({
                              origin: n,
                              extensionId: t.id,
                              subjectType: x.SubjectType.Extension
                            }),
                          t.tab && t.tab.id && (o = t.tab.id);
                        const i = this.setupProviderEngine({ origin: n, sender: t, subjectType: r, tabId: o }),
                          a = (0, l.createEngineStream)({ engine: i }),
                          c = this.addConnection(n, { engine: i });
                        (0, s.default)(e, a, e, (e) => {
                          i._middleware.forEach((e) => {
                            e.destroy && "function" == typeof e.destroy && e.destroy();
                          }),
                            c && this.removeConnection(n, c),
                            e && y.default.error(e);
                        });
                      }
                      setupSnapProvider(e, t) {
                        this.setupUntrustedCommunication({ connectionStream: t, sender: { snapId: e }, subjectType: x.SubjectType.Snap });
                      }
                      setupProviderEngine({ origin: e, subjectType: t, sender: r, tabId: n }) {
                        const s = new a.JsonRpcEngine(),
                          { blockTracker: o, provider: i } = this;
                        s.push((0, Se.default)({ origin: e })), s.push((0, j.createSelectedNetworkMiddleware)(this.controllerMessenger));
                        const { selectedNetworkClientId: l } = this.networkController.state;
                        this.selectedNetworkController.getNetworkClientIdForDomain(e) === undefined &&
                          this.selectedNetworkController.setNetworkClientIdForDomain(e, l);
                        let d = i;
                        this.preferencesController.getUseRequestQueue() &&
                          (d = this.selectedNetworkController.getProviderAndBlockTracker(e).provider);
                        const u = (0, W.createQueuedRequestMiddleware)({
                          messenger: this.controllerMessenger,
                          useRequestQueue: this.preferencesController.getUseRequestQueue.bind(this.preferencesController)
                        });
                        s.push(u);
                        const h = (0, p.default)({ provider: i, blockTracker: o }),
                          m = (0, g.default)({ provider: i, blockTracker: o });
                        return (
                          m.events.on("notification", (e) => s.emit("notification", e)),
                          de.isManifestV3 && s.push((0, be.default)()),
                          n && s.push((0, _e.default)({ tabId: n })),
                          s.push((0, ve.default)({ origin: e })),
                          s.push(this.permissionLogController.createMiddleware()),
                          s.push((0, me.createPPOMMiddleware)(this.ppomController, this.preferencesController, this.networkController)),
                          s.push(
                            (0, We.default)({
                              trackEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                              getMetricsState: this.metaMetricsController.store.getState.bind(this.metaMetricsController.store),
                              securityProviderRequest: this.securityProviderRequest.bind(this),
                              getSelectedAddress: this.preferencesController.getSelectedAddress.bind(this.preferencesController),
                              getAccountType: this.getAccountType.bind(this),
                              getDeviceModel: this.getDeviceModel.bind(this),
                              snapAndHardwareMessenger: this.controllerMessenger.getRestricted({
                                name: "SnapAndHardwareMessenger",
                                allowedActions: ["KeyringController:getKeyringForAccount", "SnapController:get"]
                              })
                            })
                          ),
                          t === x.SubjectType.Website &&
                            s.push((0, Te.default)({ location: r.url, registerOnboarding: this.onboardingController.registerOnboarding })),
                          s.push(
                            (0, ke.createMethodMiddleware)({
                              origin: e,
                              subjectType: t,
                              addSubjectMetadata: this.subjectMetadataController.addSubjectMetadata.bind(this.subjectMetadataController),
                              getProviderState: this.getProviderState.bind(this),
                              getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                              handleWatchAssetRequest: this.handleWatchAssetRequest.bind(this),
                              requestUserApproval: this.approvalController.addAndShowApprovalRequest.bind(this.approvalController),
                              startApprovalFlow: this.approvalController.startFlow.bind(this.approvalController),
                              endApprovalFlow: this.approvalController.endFlow.bind(this.approvalController),
                              setApprovalFlowLoadingText: this.approvalController.setFlowLoadingText.bind(this.approvalController),
                              showApprovalSuccess: this.approvalController.success.bind(this.approvalController),
                              showApprovalError: this.approvalController.error.bind(this.approvalController),
                              sendMetrics: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                              getAccounts: this.getPermittedAccounts.bind(this, e),
                              getPermissionsForOrigin: this.permissionController.getPermissions.bind(this.permissionController, e),
                              hasPermission: this.permissionController.hasPermission.bind(this.permissionController, e),
                              requestAccountsPermission: this.permissionController.requestPermissions.bind(
                                this.permissionController,
                                { origin: e },
                                { eth_accounts: {} }
                              ),
                              requestPermissionsForOrigin: this.permissionController.requestPermissions.bind(this.permissionController, {
                                origin: e
                              }),
                              revokePermissionsForOrigin: (t) => {
                                this.permissionController.revokePermissions({ [e]: t });
                              },
                              getCurrentChainId: () => this.networkController.state.providerConfig.chainId,
                              getCurrentRpcUrl: () => this.networkController.state.providerConfig.rpcUrl,
                              getNetworkConfigurations: () => this.networkController.state.networkConfigurations,
                              upsertNetworkConfiguration: this.networkController.upsertNetworkConfiguration.bind(this.networkController),
                              setActiveNetwork: (e) => {
                                this.selectedNetworkController.setNetworkClientIdForMetamask(e), this.networkController.setActiveNetwork(e);
                              },
                              findNetworkClientIdByChainId: this.networkController.findNetworkClientIdByChainId.bind(
                                this.networkController
                              ),
                              findNetworkConfigurationBy: this.findNetworkConfigurationBy.bind(this),
                              getNetworkClientIdForDomain: this.selectedNetworkController.getNetworkClientIdForDomain.bind(
                                this.selectedNetworkController
                              ),
                              setNetworkClientIdForDomain: this.selectedNetworkController.setNetworkClientIdForDomain.bind(
                                this.selectedNetworkController
                              ),
                              getUseRequestQueue: this.preferencesController.getUseRequestQueue.bind(this.preferencesController),
                              getProviderConfig: () => this.networkController.state.providerConfig,
                              setProviderType: (e) => (
                                this.selectedNetworkController.setNetworkClientIdForMetamask(e), this.networkController.setProviderType(e)
                              ),
                              getWeb3ShimUsageState: this.alertController.getWeb3ShimUsageState.bind(this.alertController),
                              setWeb3ShimUsageRecorded: this.alertController.setWeb3ShimUsageRecorded.bind(this.alertController)
                            })
                          ),
                          s.push(
                            (0, ke.createSnapMethodMiddleware)(t === x.SubjectType.Snap, {
                              getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                              getSnaps: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getPermitted", e),
                              requestPermissions: async (t) => await this.permissionController.requestPermissions({ origin: e }, t),
                              getPermissions: this.permissionController.getPermissions.bind(this.permissionController, e),
                              getSnapFile: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:getFile", e),
                              installSnaps: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:install", e),
                              hasPermission: this.permissionController.hasPermission.bind(this.permissionController),
                              getSnap: this.controllerMessenger.call.bind(this.controllerMessenger, "SnapController:get"),
                              handleSnapRpcRequest: this.controllerMessenger.call.bind(
                                this.controllerMessenger,
                                "SnapController:handleRequest"
                              ),
                              getAllowedKeyringMethods: (0, ge.keyringSnapPermissionsBuilder)(this.subjectMetadataController)
                            })
                          ),
                          s.push(h),
                          s.push(m.middleware),
                          t !== x.SubjectType.Internal && s.push(this.permissionController.createPermissionMiddleware({ origin: e })),
                          s.push(this.metamaskMiddleware),
                          s.push((0, c.providerAsMiddleware)(d)),
                          s
                        );
                      }
                      setupPublicConfig(e) {
                        const t = (0, i.storeAsStream)(this.publicConfigStore);
                        (0, s.default)(t, e, (e) => {
                          t.destroy(), e && y.default.error(e);
                        });
                      }
                      addConnection(e, { engine: t }) {
                        if (e === re.ORIGIN_METAMASK) return null;
                        this.connections[e] || (this.connections[e] = {});
                        const r = (0, _.default)();
                        return (this.connections[e][r] = { engine: t }), r;
                      }
                      removeConnection(e, t) {
                        const r = this.connections[e];
                        r && (delete r[t], 0 === Object.keys(r).length && delete this.connections[e]);
                      }
                      removeAllConnections(e) {
                        const t = this.connections[e];
                        t &&
                          Object.keys(t).forEach((t) => {
                            this.removeConnection(e, t);
                          });
                      }
                      notifyConnections(e, t) {
                        const r = this.connections[e];
                        r &&
                          Object.values(r).forEach((e) => {
                            e.engine && e.engine.emit("notification", t);
                          });
                      }
                      notifyAllConnections(e) {
                        const t = "function" == typeof e ? (t) => e(t) : () => e;
                        Object.keys(this.connections).forEach((e) => {
                          Object.values(this.connections[e]).forEach(async (r) => {
                            r.engine && r.engine.emit("notification", await t(e));
                          });
                        });
                      }
                      async _onKeyringControllerUpdate(e) {
                        const { keyrings: t } = e,
                          r = t.reduce((e, { accounts: t }) => e.concat(t), []);
                        r.length && (this.preferencesController.syncAddresses(r), this.accountTracker.syncWithAddresses(r));
                      }
                      _onUnlock() {
                        this.notifyAllConnections(async (e) => ({
                          method: Ge.NOTIFICATION_NAMES.unlockStateChanged,
                          params: { isUnlocked: !0, accounts: await this.getPermittedAccounts(e) }
                        })),
                          this.unMarkPasswordForgotten(),
                          this.emit("unlock");
                      }
                      _onLock() {
                        this.notifyAllConnections({ method: Ge.NOTIFICATION_NAMES.unlockStateChanged, params: { isUnlocked: !1 } }),
                          this.emit("lock");
                      }
                      _onStateUpdate(e) {
                        (this.isClientOpenAndUnlocked = e.isUnlocked && this._isClientOpen), this._notifyChainChange();
                      }
                      privateSendUpdate() {
                        this.emit("update", this.getState());
                      }
                      isUnlocked() {
                        return this.keyringController.state.isUnlocked;
                      }
                      getExternalPendingTransactions(e) {
                        return this.smartTransactionsController.getTransactions({ addressFrom: e, status: "pending" });
                      }
                      async getPendingNonce(e) {
                        const { nonceDetails: t, releaseLock: r } = await this.txController.getNonceLock(e),
                          n = t.params.highestSuggested;
                        return r(), n;
                      }
                      async getNextNonce(e) {
                        const t = await this.txController.getNonceLock(e);
                        return t.releaseLock(), t.nextNonce;
                      }
                      throwTestError(e) {
                        setTimeout(() => {
                          const t = new Error(e);
                          throw ((t.name = "TestError"), t);
                        });
                      }
                      _addTransactionControllerListeners() {
                        const e = this.getTransactionMetricsRequest();
                        this.txController.hub.on("post-transaction-balance-updated", pe.handlePostTransactionBalanceUpdate.bind(null, e)),
                          this.txController.hub.on("unapprovedTransaction", (t) =>
                            (0, pe.handleTransactionAdded)(e, { transactionMeta: t })
                          ),
                          this.txController.hub.on("transaction-approved", pe.handleTransactionApproved.bind(null, e)),
                          this.txController.hub.on("transaction-dropped", pe.handleTransactionDropped.bind(null, e)),
                          this.txController.hub.on("transaction-confirmed", pe.handleTransactionConfirmed.bind(null, e)),
                          this.txController.hub.on("transaction-failed", pe.handleTransactionFailed.bind(null, e)),
                          this.txController.hub.on("transaction-new-swap", ({ transactionMeta: e }) => {
                            this.swapsController.setTradeTxId(e.id);
                          }),
                          this.txController.hub.on("transaction-new-swap-approval", ({ transactionMeta: e }) => {
                            this.swapsController.setApproveTxId(e.id);
                          }),
                          this.txController.hub.on("transaction-rejected", pe.handleTransactionRejected.bind(null, e)),
                          this.txController.hub.on("transaction-submitted", pe.handleTransactionSubmitted.bind(null, e)),
                          this.txController.hub.on("transaction-status-update", ({ transactionMeta: e }) => {
                            this._onFinishedTransaction(e);
                          });
                      }
                      getTransactionMetricsRequest() {
                        return {
                          ...{
                            createEventFragment: this.metaMetricsController.createEventFragment.bind(this.metaMetricsController),
                            finalizeEventFragment: this.metaMetricsController.finalizeEventFragment.bind(this.metaMetricsController),
                            getEventFragmentById: this.metaMetricsController.getEventFragmentById.bind(this.metaMetricsController),
                            getParticipateInMetrics: () => this.metaMetricsController.state.participateInMetaMetrics,
                            trackEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                            updateEventFragment: this.metaMetricsController.updateEventFragment.bind(this.metaMetricsController),
                            getAccountType: this.getAccountType.bind(this),
                            getDeviceModel: this.getDeviceModel.bind(this),
                            getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                            getSelectedAddress: () => this.preferencesController.store.getState().selectedAddress,
                            getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
                            getTransaction: (e) => this.txController.state.transactions.find((t) => t.id === e)
                          },
                          snapAndHardwareMessenger: this.controllerMessenger.getRestricted({
                            name: "SnapAndHardwareMessenger",
                            allowedActions: ["KeyringController:getKeyringForAccount", "SnapController:get"]
                          }),
                          provider: this.provider
                        };
                      }
                      findNetworkConfigurationBy(e) {
                        const { networkConfigurations: t } = this.networkController.state;
                        return Object.values(t).find((t) => Object.keys(e).some((r) => t[r] === e[r])) || null;
                      }
                      async setLedgerTransportPreference(e) {
                        if (!this.canUseHardwareWallets()) return undefined;
                        const t = this.preferencesController.getLedgerTransportPreference(),
                          r = this.preferencesController.setLedgerTransportPreference(e),
                          n = await this.getKeyringForDevice(J.HardwareDeviceNames.ledger);
                        return null != n && n.updateTransportMethod
                          ? n.updateTransportMethod(r).catch((e) => {
                              throw (this.preferencesController.setLedgerTransportPreference(t), e);
                            })
                          : undefined;
                      }
                      recordFirstTimeInfo(e) {
                        if (!("firstTimeInfo" in e)) {
                          const t = this.platform.getVersion();
                          e.firstTimeInfo = { version: t, date: Date.now() };
                        }
                      }
                      set isClientOpen(e) {
                        (this._isClientOpen = e), (this.detectTokensController.isOpen = e);
                      }
                      onClientClosed() {
                        try {
                          this.gasFeeController.stopPolling(), this.appStateController.clearPollingTokens();
                        } catch (e) {
                          console.error(e);
                        }
                      }
                      onEnvironmentTypeClosed(e) {
                        const t = re.POLLING_TOKEN_ENVIRONMENT_TYPES[e];
                        this.appStateController.store.getState()[t].forEach((e) => {
                          this.gasFeeController.disconnectPoller(e), this.appStateController.removePollingToken(e, t);
                        });
                      }
                      safelistPhishingDomain(e) {
                        return this.phishingController.bypass(e);
                      }
                      async backToSafetyPhishingWarning() {
                        const e = this.platform.getExtensionURL();
                        await this.platform.switchToAnotherURL(undefined, e);
                      }
                      setLocked() {
                        return this.keyringController.setLocked();
                      }
                      async securityProviderRequest(e, t) {
                        const { currentLocale: r, transactionSecurityCheckEnabled: n } = this.preferencesController.store.getState();
                        if (n) {
                          const n = Number((0, ue.hexToDecimal)(this.networkController.state.providerConfig.chainId));
                          try {
                            return await (0, Ve.securityProviderCheck)(e, t, n, r);
                          } catch (e) {
                            throw (y.default.error(e.message), e);
                          }
                        }
                        return null;
                      }
                      async _onAccountChange(e) {
                        const t = (0, Ge.getPermittedAccountsByOrigin)(this.permissionController.state);
                        for (const [r, n] of t.entries()) n.includes(e) && this._notifyAccountsChange(r, n);
                        await this.txController.updateIncomingTransactions();
                      }
                      async _notifyAccountsChange(e, t) {
                        this.isUnlocked() &&
                          this.notifyConnections(e, {
                            method: Ge.NOTIFICATION_NAMES.accountsChanged,
                            params: t.length < 2 ? t : await this.getPermittedAccounts(e)
                          }),
                          this.permissionLogController.updateAccountsHistory(e, t);
                      }
                      _notifyChainChange() {
                        this.preferencesController.getUseRequestQueue()
                          ? this.notifyAllConnections((e) => ({
                              method: Ge.NOTIFICATION_NAMES.chainChanged,
                              params: this.getProviderNetworkState(e)
                            }))
                          : this.notifyAllConnections({
                              method: Ge.NOTIFICATION_NAMES.chainChanged,
                              params: this.getProviderNetworkState()
                            });
                      }
                      async _onFinishedTransaction(e) {
                        [V.TransactionStatus.confirmed, V.TransactionStatus.failed].includes(e.status) &&
                          (await this._createTransactionNotifcation(e), this._updateNFTOwnership(e), this._trackTransactionFailure(e));
                      }
                      async _createTransactionNotifcation(e) {
                        const { chainId: t } = e;
                        let r = {};
                        if (t) {
                          const { networkConfigurations: e } = this.networkController.state,
                            n = Object.values(e).find((e) => e.chainId === t);
                          r = (null == n ? void 0 : n.rpcPrefs) ?? {};
                        }
                        try {
                          await this.platform.showTransactionNotification(e, r);
                        } catch (e) {
                          y.default.error("Failed to create transaction notification", e);
                        }
                      }
                      _updateNFTOwnership(e) {
                        var t;
                        const { type: r, txParams: n, chainId: s } = e;
                        if (r !== V.TransactionType.tokenMethodTransferFrom || n === undefined) return;
                        const { data: o, to: i, from: a } = n,
                          l = (0, ae.parseStandardTokenTransactionData)(o),
                          c = (0, oe.getTokenIdParam)(l) ?? (0, ce.getTokenValueParam)(l),
                          { allNfts: d } = this.nftController.state,
                          u =
                            null == d || null === (t = d[a]) || void 0 === t || null === (t = t[s]) || void 0 === t
                              ? void 0
                              : t.find(({ address: e, tokenId: t }) => (0, ie.isEqualCaseInsensitive)(e, i) && t === c);
                        u && this.nftController.checkAndUpdateSingleNftOwnershipStatus(u, !1, { userAddress: a, chainId: s });
                      }
                      _trackTransactionFailure(e) {
                        var t;
                        const { txReceipt: r } = e,
                          n = this.getState();
                        r &&
                          "0x0" === r.status &&
                          this.metaMetricsController.trackEvent(
                            {
                              event: "Tx Status Update: On-Chain Failure",
                              category: ne.MetaMetricsEventCategory.Background,
                              properties: {
                                action: "Transactions",
                                errorMessage: null === (t = e.simulationFails) || void 0 === t ? void 0 : t.reason,
                                numberOfTokens: n.tokens.length,
                                numberOfAccounts: Object.keys(n.accounts).length
                              }
                            },
                            { matomoEvent: !0 }
                          );
                      }
                    }
                    r.default = et;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "app/scripts/metamask-controller.js" }
    ],
    [
      84,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 2,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 2;
                    try {
                      "etherscan" === t.data.config.provider.type &&
                        ((t.data.config.provider.type = "rpc"), (t.data.config.provider.rpcTarget = "https://rpc.metamask.io/"));
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/002.js" }
    ],
    [
      85,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 3,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 3;
                    try {
                      "https://rawtestrpc.metamask.io/" === t.data.config.provider.rpcTarget &&
                        (t.data.config.provider.rpcTarget = "https://testrpc.metamask.io/");
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/003.js" }
    ],
    [
      86,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 4,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 4;
                    try {
                      if ("rpc" !== t.data.config.provider.type) return Promise.resolve(t);
                      switch (t.data.config.provider.rpcTarget) {
                        case "https://testrpc.metamask.io/":
                          t.data.config.provider = { type: "testnet" };
                          break;
                        case "https://rpc.metamask.io/":
                          t.data.config.provider = { type: "mainnet" };
                      }
                    } catch (e) {}
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/004.js" }
    ],
    [
      87,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 5,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 5;
                    try {
                      const e = (function (e) {
                        const { config: t } = e,
                          r = {
                            ...e,
                            KeyringController: { vault: e.vault, selectedAccount: t.selectedAccount, walletNicknames: e.walletNicknames }
                          };
                        return delete r.vault, delete r.walletNicknames, delete r.config.selectedAccount, r;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #5${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/005.js" }
    ],
    [
      88,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 6,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 6;
                    try {
                      const e = (function (e) {
                        const t = e.KeyringController,
                          r = { ...e, PreferencesController: { selectedAddress: t.selectedAccount } };
                        return delete r.KeyringController.selectedAccount, r;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #6${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/006.js" }
    ],
    [
      89,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 7,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 7;
                    try {
                      const e = (function (e) {
                        const t = { ...e, TransactionManager: { transactions: e.transactions || [], gasMultiplier: e.gasMultiplier || 1 } };
                        return delete t.transactions, delete t.gasMultiplier, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #7${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/007.js" }
    ],
    [
      9,
      { "@metamask/obs-store": 1483 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/obs-store");
                r.default = class {
                  constructor(e = {}) {
                    const { accountTracker: t, getCurrentChainId: r } = e;
                    (this.accountTracker = t), (this.getCurrentChainId = r);
                    const s = { cachedBalances: {}, ...e.initState };
                    (this.store = new n.ObservableStore(s)), this._registerUpdates();
                  }
                  async updateCachedBalances({ accounts: e }) {
                    const t = this.getCurrentChainId(),
                      r = await this._generateBalancesToCache(e, t);
                    this.store.updateState({ cachedBalances: r });
                  }
                  _generateBalancesToCache(e, t) {
                    const { cachedBalances: r } = this.store.getState(),
                      n = { ...r[t] };
                    Object.keys(e).forEach((t) => {
                      const r = e[t];
                      r.balance && (n[t] = r.balance);
                    });
                    return { ...r, [t]: n };
                  }
                  clearCachedBalances() {
                    this.store.updateState({ cachedBalances: {} });
                  }
                  _registerUpdates() {
                    const e = this.updateCachedBalances.bind(this);
                    this.accountTracker.store.subscribe(e);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/cached-balances.js" }
    ],
    [
      90,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 8,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 8;
                    try {
                      const e = (function (e) {
                        const t = { ...e, NoticeController: { noticesList: e.noticesList || [] } };
                        return delete t.noticesList, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #8${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/008.js" }
    ],
    [
      91,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 9,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 9;
                    try {
                      const e = (function (e) {
                        const t = (0, n.merge)({}, e, {
                          CurrencyController: {
                            currentCurrency: e.currentFiat || e.fiatCurrency || "USD",
                            conversionRate: e.conversionRate,
                            conversionDate: e.conversionDate
                          }
                        });
                        return delete t.currentFiat, delete t.fiatCurrency, delete t.conversionRate, delete t.conversionDate, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #9${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/009.js" }
    ],
    [
      92,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 10,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 10;
                    try {
                      const e = (function (e) {
                        const t = (0, n.merge)({}, e, { ShapeShiftController: { shapeShiftTxList: e.shapeShiftTxList || [] } });
                        return delete t.shapeShiftTxList, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #10${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/010.js" }
    ],
    [
      93,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 11,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 11;
                    try {
                      const e = (function (e) {
                        const t = e;
                        return delete t.TOSHash, delete t.isDisclaimerConfirmed, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #11${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/011.js" }
    ],
    [
      94,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 12,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 12;
                    try {
                      const e = (function (e) {
                        const t = e;
                        return (
                          t.NoticeController.noticesList.forEach((e) => {
                            e.read && (e.body = "");
                          }),
                          t
                        );
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #12${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/012.js" }
    ],
    [
      95,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 13,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 13;
                    try {
                      const e = (function (e) {
                        const t = e,
                          { config: r } = t;
                        r && r.provider && "testnet" === r.provider.type && (t.config.provider.type = "ropsten");
                        return t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #13${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/013.js" }
    ],
    [
      96,
      { lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("lodash");
                r.default = {
                  version: 14,
                  migrate(e) {
                    const t = (0, n.cloneDeep)(e);
                    t.meta.version = 14;
                    try {
                      const e = (function (e) {
                        const t = e;
                        return (t.NetworkController = {}), (t.NetworkController.provider = t.config.provider), delete t.config.provider, t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #14${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/014.js" }
    ],
    [
      97,
      { "@metamask/transaction-controller": 1835, lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/transaction-controller"),
                  s = e("lodash");
                r.default = {
                  version: 15,
                  migrate(e) {
                    const t = (0, s.cloneDeep)(e);
                    t.meta.version = 15;
                    try {
                      const e = (function (e) {
                        const t = e,
                          { TransactionController: r } = t;
                        if (r && r.transactions) {
                          const { transactions: e } = r;
                          t.TransactionController.transactions = e.map((e) =>
                            e.err ? ("Gave up submitting tx." === e.err.message && (e.status = n.TransactionStatus.failed), e) : e
                          );
                        }
                        return t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #15${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/015.js" }
    ],
    [
      98,
      { "@metamask/transaction-controller": 1835, lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/transaction-controller"),
                  s = e("lodash");
                r.default = {
                  version: 16,
                  migrate(e) {
                    const t = (0, s.cloneDeep)(e);
                    t.meta.version = 16;
                    try {
                      const e = (function (e) {
                        const t = e,
                          { TransactionController: r } = t;
                        if (r && r.transactions) {
                          const { transactions: e } = t.TransactionController;
                          t.TransactionController.transactions = e.map((e) =>
                            e.err
                              ? ("transaction with the same hash was already imported." === e.err &&
                                  ((e.status = n.TransactionStatus.submitted), delete e.err),
                                e)
                              : e
                          );
                        }
                        return t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #16${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/016.js" }
    ],
    [
      99,
      { "@metamask/transaction-controller": 1835, lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = e("@metamask/transaction-controller"),
                  s = e("lodash");
                r.default = {
                  version: 17,
                  migrate(e) {
                    const t = (0, s.cloneDeep)(e);
                    t.meta.version = 17;
                    try {
                      const e = (function (e) {
                        const t = e,
                          { TransactionController: r } = t;
                        if (r && r.transactions) {
                          const { transactions: e } = t.TransactionController;
                          t.TransactionController.transactions = e.map(
                            (e) => (
                              !e.status === n.TransactionStatus.failed ||
                                (e.retryCount > 0 && e.retryCount < 2 && ((e.status = n.TransactionStatus.submitted), delete e.err)),
                              e
                            )
                          );
                        }
                        return t;
                      })(t.data);
                      t.data = e;
                    } catch (e) {
                      console.warn(`MetaMask Migration #17${e.stack}`);
                    }
                    return Promise.resolve(t);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/migrations/017.js" }
    ],
    [
      997,
      { "@metamask/base-controller": 1051, "@metamask/controller-utils": 1e3 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.AddressBookController = r.AddressType = void 0);
                const n = e("@metamask/controller-utils"),
                  s = e("@metamask/base-controller");
                !(function (e) {
                  (e.externallyOwnedAccounts = "EXTERNALLY_OWNED_ACCOUNTS"),
                    (e.contractAccounts = "CONTRACT_ACCOUNTS"),
                    (e.nonAccounts = "NON_ACCOUNTS");
                })(r.AddressType || (r.AddressType = {}));
                class o extends s.BaseController {
                  constructor(e, t) {
                    super(e, t), (this.name = "AddressBookController"), (this.defaultState = { addressBook: {} }), this.initialize();
                  }
                  clear() {
                    this.update({ addressBook: {} });
                  }
                  delete(e, t) {
                    if (
                      ((t = (0, n.toChecksumHexAddress)(t)),
                      !(0, n.isValidHexAddress)(t) || !this.state.addressBook[e] || !this.state.addressBook[e][t])
                    )
                      return !1;
                    const r = Object.assign({}, this.state.addressBook);
                    return delete r[e][t], 0 === Object.keys(r[e]).length && delete r[e], this.update({ addressBook: r }), !0;
                  }
                  set(e, t, r = (0, n.toHex)(1), s = "", o) {
                    if (((e = (0, n.toChecksumHexAddress)(e)), !(0, n.isValidHexAddress)(e))) return !1;
                    const i = { address: e, chainId: r, isEns: !1, memo: s, name: t, addressType: o },
                      a = (0, n.normalizeEnsName)(t);
                    return (
                      a && ((i.name = a), (i.isEns = !0)),
                      this.update({
                        addressBook: Object.assign(Object.assign({}, this.state.addressBook), {
                          [r]: Object.assign(Object.assign({}, this.state.addressBook[r]), { [e]: i })
                        })
                      }),
                      !0
                    );
                  }
                }
                (r.AddressBookController = o), (r.default = o);
              };
            };
      },
      { package: "@metamask/address-book-controller", file: "node_modules/@metamask/address-book-controller/dist/AddressBookController.js" }
    ],
    [
      998,
      { "./AddressBookController": 997 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var s = Object.getOwnPropertyDescriptor(t, r);
                          (s && !("get" in s ? !t.__esModule : s.writable || s.configurable)) ||
                            (s = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, s);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  s =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), s(e("./AddressBookController"), r);
              };
            };
      },
      { package: "@metamask/address-book-controller", file: "node_modules/@metamask/address-book-controller/dist/index.js" }
    ],
    [
      999,
      { "./types": 1003 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP =
                    r.ApprovalType =
                    r.ORIGIN_METAMASK =
                    r.OPENSEA_TEST_API_URL =
                    r.OPENSEA_API_URL =
                    r.OPENSEA_PROXY_URL =
                    r.BUILT_IN_NETWORKS =
                    r.TESTNET_TICKER_SYMBOLS =
                    r.ASSET_TYPES =
                    r.GWEI =
                    r.ERC1155_TOKEN_RECEIVER_INTERFACE_ID =
                    r.ERC1155_METADATA_URI_INTERFACE_ID =
                    r.ERC1155_INTERFACE_ID =
                    r.ERC721_ENUMERABLE_INTERFACE_ID =
                    r.ERC721_METADATA_INTERFACE_ID =
                    r.ERC721_INTERFACE_ID =
                    r.ERC20 =
                    r.ERC1155 =
                    r.ERC721 =
                    r.MAX_SAFE_CHAIN_ID =
                    r.GANACHE_CHAIN_ID =
                    r.IPFS_DEFAULT_GATEWAY_URL =
                    r.FALL_BACK_VS_CURRENCY =
                    r.RPC =
                      void 0);
                const n = e("./types");
                (r.RPC = "rpc"),
                  (r.FALL_BACK_VS_CURRENCY = "ETH"),
                  (r.IPFS_DEFAULT_GATEWAY_URL = "https://cloudflare-ipfs.com/ipfs/"),
                  (r.GANACHE_CHAIN_ID = "0x539"),
                  (r.MAX_SAFE_CHAIN_ID = 0xfffffffffffec),
                  (r.ERC721 = "ERC721"),
                  (r.ERC1155 = "ERC1155"),
                  (r.ERC20 = "ERC20"),
                  (r.ERC721_INTERFACE_ID = "0x80ac58cd"),
                  (r.ERC721_METADATA_INTERFACE_ID = "0x5b5e139f"),
                  (r.ERC721_ENUMERABLE_INTERFACE_ID = "0x780e9d63"),
                  (r.ERC1155_INTERFACE_ID = "0xd9b67a26"),
                  (r.ERC1155_METADATA_URI_INTERFACE_ID = "0x0e89341c"),
                  (r.ERC1155_TOKEN_RECEIVER_INTERFACE_ID = "0x4e2312e0"),
                  (r.GWEI = "gwei"),
                  (r.ASSET_TYPES = { NATIVE: "NATIVE", TOKEN: "TOKEN", NFT: "NFT", UNKNOWN: "UNKNOWN" }),
                  (r.TESTNET_TICKER_SYMBOLS = { GOERLI: "GoerliETH", SEPOLIA: "SepoliaETH", LINEA_GOERLI: "LineaETH" }),
                  (r.BUILT_IN_NETWORKS = {
                    [n.NetworkType.goerli]: {
                      chainId: n.ChainId.goerli,
                      ticker: n.NetworksTicker.goerli,
                      rpcPrefs: { blockExplorerUrl: `https://${n.NetworkType.goerli}.etherscan.io` }
                    },
                    [n.NetworkType.sepolia]: {
                      chainId: n.ChainId.sepolia,
                      ticker: n.NetworksTicker.sepolia,
                      rpcPrefs: { blockExplorerUrl: `https://${n.NetworkType.sepolia}.etherscan.io` }
                    },
                    [n.NetworkType.mainnet]: {
                      chainId: n.ChainId.mainnet,
                      ticker: n.NetworksTicker.mainnet,
                      rpcPrefs: { blockExplorerUrl: "https://etherscan.io" }
                    },
                    [n.NetworkType["linea-goerli"]]: {
                      chainId: n.ChainId["linea-goerli"],
                      ticker: n.NetworksTicker["linea-goerli"],
                      rpcPrefs: { blockExplorerUrl: "https://explorer.goerli.linea.build" }
                    },
                    [n.NetworkType["linea-mainnet"]]: {
                      chainId: n.ChainId["linea-mainnet"],
                      ticker: n.NetworksTicker["linea-mainnet"],
                      rpcPrefs: { blockExplorerUrl: "https://lineascan.build" }
                    },
                    [n.NetworkType.rpc]: { chainId: undefined, blockExplorerUrl: undefined, rpcPrefs: undefined }
                  }),
                  (r.OPENSEA_PROXY_URL = "https://proxy.metafi.codefi.network/opensea/v1/api/v1"),
                  (r.OPENSEA_API_URL = "https://api.opensea.io/api/v1"),
                  (r.OPENSEA_TEST_API_URL = "https://testnets-api.opensea.io/api/v1"),
                  (r.ORIGIN_METAMASK = "metamask"),
                  (function (e) {
                    (e.AddEthereumChain = "wallet_addEthereumChain"),
                      (e.ConnectAccounts = "connect_accounts"),
                      (e.EthDecrypt = "eth_decrypt"),
                      (e.EthGetEncryptionPublicKey = "eth_getEncryptionPublicKey"),
                      (e.EthSign = "eth_sign"),
                      (e.EthSignTypedData = "eth_signTypedData"),
                      (e.PersonalSign = "personal_sign"),
                      (e.ResultError = "result_error"),
                      (e.ResultSuccess = "result_success"),
                      (e.SnapDialogAlert = "snap_dialog:alert"),
                      (e.SnapDialogConfirmation = "snap_dialog:confirmation"),
                      (e.SnapDialogPrompt = "snap_dialog:prompt"),
                      (e.SwitchEthereumChain = "wallet_switchEthereumChain"),
                      (e.Transaction = "transaction"),
                      (e.Unlock = "unlock"),
                      (e.WalletConnect = "wallet_connect"),
                      (e.WalletRequestPermissions = "wallet_requestPermissions"),
                      (e.WatchAsset = "wallet_watchAsset");
                  })(r.ApprovalType || (r.ApprovalType = {})),
                  (r.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP = {
                    [n.NetworkId.goerli]: n.NetworkType.goerli,
                    [n.NetworkId.sepolia]: n.NetworkType.sepolia,
                    [n.NetworkId.mainnet]: n.NetworkType.mainnet,
                    [n.NetworkId["linea-goerli"]]: n.NetworkType["linea-goerli"],
                    [n.NetworkId["linea-mainnet"]]: n.NetworkType["linea-mainnet"]
                  });
              };
            };
      },
      {
        package: "@metamask/address-book-controller>@metamask/controller-utils",
        file: "node_modules/@metamask/address-book-controller/node_modules/@metamask/controller-utils/dist/constants.js"
      }
    ],
    [
      4,
      {
        "../../shared/constants/app": 3953,
        "../../shared/constants/metametrics": 3962,
        "../../shared/modules/browser-runtime.utils": 3985,
        "../../shared/modules/mv3.utils": 3995,
        "../../shared/modules/object.utils": 3997,
        "./first-time-state": 28,
        "./lib/createStreamSink": 39,
        "./lib/ens-ipfs/setup": 44,
        "./lib/get-first-preferred-lang-code": 46,
        "./lib/getObjStructure": 47,
        "./lib/local-store": 50,
        "./lib/migrator": 53,
        "./lib/network-store": 54,
        "./lib/notification-manager": 55,
        "./lib/setup-initial-state-hooks": 74,
        "./lib/setupSentry": 75,
        "./lib/util": 82,
        "./metamask-controller": 83,
        "./migrations": 195,
        "./platforms/extension": 196,
        "@metamask/controller-utils": 1056,
        "@metamask/obs-store": 1483,
        "@metamask/utils": 1893,
        "debounce-stream": 2553,
        "end-of-stream": 2592,
        "eth-rpc-errors": 2648,
        events: 2745,
        "extension-port-stream": 2748,
        loglevel: 3322,
        pump: 3508,
        "webextension-polyfill": 3937
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.loadStateFromPersistence = ae),
                  (r.setupController = le),
                  (r.statePersistenceEvents = void 0),
                  e("./lib/setup-initial-state-hooks");
                var n = x(e("events")),
                  s = x(e("end-of-stream")),
                  o = x(e("pump")),
                  i = x(e("debounce-stream")),
                  a = x(e("loglevel")),
                  l = x(e("webextension-polyfill")),
                  c = e("@metamask/obs-store"),
                  d = e("@metamask/utils"),
                  u = e("@metamask/controller-utils"),
                  h = x(e("extension-port-stream")),
                  p = e("eth-rpc-errors"),
                  g = e("../../shared/constants/app"),
                  m = e("../../shared/constants/metametrics"),
                  f = e("../../shared/modules/browser-runtime.utils"),
                  y = e("../../shared/modules/mv3.utils"),
                  C = e("../../shared/modules/object.utils"),
                  w = x(e("./migrations")),
                  b = x(e("./lib/migrator")),
                  v = x(e("./platforms/extension")),
                  k = x(e("./lib/local-store")),
                  S = (x(e("./lib/network-store")), e("./lib/setupSentry")),
                  _ = x(e("./lib/createStreamSink")),
                  T = O(e("./lib/notification-manager")),
                  A = O(e("./metamask-controller")),
                  E = x(e("./first-time-state")),
                  M = x(e("./lib/get-first-preferred-lang-code")),
                  P = x(e("./lib/getObjStructure")),
                  N = x(e("./lib/ens-ipfs/setup")),
                  I = e("./lib/util");
                function R(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    r = new WeakMap();
                  return (R = function (e) {
                    return e ? r : t;
                  })(e);
                }
                function O(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var r = R(t);
                  if (r && r.has(e)) return r.get(e);
                  var n = { __proto__: null },
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                    }
                  return (n.default = e), r && r.set(e, n), n;
                }
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const U = new k.default();
                global.stateHooks.getMostRecentPersistedState = () => U.mostRecentRetrievedState;
                const { sentry: j } = global,
                  L = { ...E.default },
                  D = { [g.ENVIRONMENT_TYPE_POPUP]: !0, [g.ENVIRONMENT_TYPE_NOTIFICATION]: !0, [g.ENVIRONMENT_TYPE_FULLSCREEN]: !0 },
                  F = ["trezor-connect"];
                a.default.setLevel("info", !1);
                const q = new v.default(),
                  K = new T.default();
                let B = !1,
                  $ = !1,
                  H = !1;
                const G = {},
                  W = {};
                let V, z;
                const Y = new URL("https://metamask.github.io/phishing-warning/v3.0.0/"),
                  Q = 1e3,
                  J = (r.statePersistenceEvents = new n.default()),
                  { promise: X, resolve: Z, reject: ee } = (0, I.deferredPromise)(),
                  te = async () => {
                    const e = await l.default.tabs
                      .query({ url: "<all_urls>", windowType: "normal" })
                      .then((e) => ((0, f.checkForLastErrorAndLog)(), e))
                      .catch(() => {
                        (0, f.checkForLastErrorAndLog)();
                      });
                    for (const t of e)
                      l.default.tabs
                        .sendMessage(t.id, { name: g.EXTENSION_MESSAGES.READY })
                        .then(() => {
                          (0, f.checkForLastErrorAndLog)();
                        })
                        .catch(() => {
                          (0, f.checkForLastErrorAndLog)();
                        });
                  };
                let re, ne;
                function se() {
                  const e = new Date().toISOString();
                  l.default.storage.session.set({ timestamp: e });
                }
                async function oe() {
                  try {
                    const e = await ae(),
                      t = e.data,
                      r = await (0, M.default)();
                    let n;
                    if (y.isManifestV3) {
                      const e = 2e3;
                      se(), setInterval(se, e);
                      const t = await l.default.storage.session.get(["isFirstMetaMaskControllerSetup"]);
                      (n = (null == t ? void 0 : t.isFirstMetaMaskControllerSetup) === undefined),
                        await l.default.storage.session.set({ isFirstMetaMaskControllerSetup: n });
                    }
                    le(t, r, {}, n, e.meta),
                      y.isManifestV3 ||
                        (await (async function () {
                          let e;
                          try {
                            const t = new URL("https://metamask.github.io/phishing-warning/v3.0.0/");
                            let r, n;
                            (t.hash = "#extensionStartup"),
                              (e = window.document.createElement("iframe")),
                              e.setAttribute("src", t.href),
                              e.setAttribute("sandbox", "allow-scripts allow-same-origin");
                            const s = new Promise((e, t) => {
                              (r = e), (n = t);
                            });
                            e.addEventListener("load", r), window.document.body.appendChild(e), setTimeout(() => n(new ie()), Q), await s;
                          } catch (e) {
                            e instanceof ie
                              ? console.warn("Phishing warning page timeout; page not guaranteed to work offline.")
                              : console.error("Failed to initialize phishing warning page", e);
                          } finally {
                            e && e.remove();
                          }
                        })()),
                      await te(),
                      a.default.info("MetaMask initialization complete."),
                      Z();
                  } catch (e) {
                    ee(e);
                  }
                }
                l.default.runtime.onConnect.addListener(async (...e) => {
                  await X, re(...e);
                }),
                  l.default.runtime.onConnectExternal.addListener(async (...e) => {
                    await X, ne(...e);
                  });
                class ie extends Error {
                  constructor() {
                    super("Timeout failed");
                  }
                }
                async function ae() {
                  const e = new b.default({ migrations: w.default });
                  if (
                    (e.on("error", console.warn),
                    (z = (await U.get()) || e.generateInitialState(L)),
                    z && !z.data && ((z = e.generateInitialState(L)), j.captureMessage("MetaMask - Empty vault found - unable to recover")),
                    e.on("error", (e) => {
                      const t = (0, P.default)(z);
                      j.captureException(e, { extra: { vaultStructure: t } });
                    }),
                    (z = await e.migrateData(z)),
                    !z)
                  )
                    throw new Error("MetaMask - migrator returned undefined");
                  if (!(0, d.isObject)(z.meta)) throw new Error(`MetaMask - migrator metadata has invalid type '${typeof z.meta}'`);
                  if ("number" != typeof z.meta.version)
                    throw new Error(`MetaMask - migrator metadata version has invalid type '${typeof z.meta.version}'`);
                  if (!(0, d.isObject)(z.data)) throw new Error(`MetaMask - migrator data has invalid type '${typeof z.data}'`);
                  return U.setMetadata(z.meta), U.set(z.data), z;
                }
                function le(e, t, r, n, d) {
                  var f;
                  (V = new A.default({
                    infuraProjectId: "b6bf7d3508c941499b10025c0776eaf8",
                    showUserConfirmation: ce,
                    initState: e,
                    initLangCode: t,
                    platform: q,
                    notificationManager: K,
                    browser: l.default,
                    getRequestAccountTabIds: () => W,
                    getOpenMetamaskTabsIds: () => G,
                    localStore: U,
                    overrides: r,
                    isFirstMetaMaskControllerSetup: n,
                    currentMigrationVersion: d.version,
                    featureFlags: {}
                  })),
                    (0, N.default)({
                      getCurrentChainId: () => V.networkController.state.providerConfig.chainId,
                      getIpfsGateway: V.preferencesController.getIpfsGateway.bind(V.preferencesController),
                      getUseAddressBarEnsResolution: () => V.preferencesController.store.getState().useAddressBarEnsResolution,
                      provider: V.provider
                    }),
                    (0, o.default)(
                      (0, c.storeAsStream)(V.store),
                      (0, i.default)(1e3),
                      (0, _.default)(async (e) => {
                        await U.set(e), J.emit("state-persisted", e);
                      }),
                      (e) => {
                        a.default.error("MetaMask - Persistence pipeline failed", e);
                      }
                    ),
                    (f = V),
                    (global.stateHooks.getSentryAppState = function () {
                      const e = f.memStore.getState();
                      return (0, C.maskObject)(e, S.SENTRY_BACKGROUND_STATE);
                    });
                  const w = () => B || Boolean(Object.keys(G).length) || $,
                    b = (e, t) => {
                      if (!1 === e) V.onClientClosed();
                      else {
                        if (t === g.ENVIRONMENT_TYPE_FULLSCREEN && Boolean(Object.keys(G).length)) return;
                        V.onEnvironmentTypeClosed(t);
                      }
                    };
                  function v() {
                    let e = "";
                    const t = k();
                    t && (e = String(t)),
                      y.isManifestV3
                        ? (l.default.action.setBadgeText({ text: e }), l.default.action.setBadgeBackgroundColor({ color: "#037DD6" }))
                        : (l.default.browserAction.setBadgeText({ text: e }),
                          l.default.browserAction.setBadgeBackgroundColor({ color: "#037DD6" }));
                  }
                  function k() {
                    let e = V.appStateController.waitingForUnlock.length;
                    return (
                      V.preferencesController.getUseRequestQueue()
                        ? (e += V.queuedRequestController.length())
                        : (e += V.approvalController.getTotalApprovalCount()),
                      e
                    );
                  }
                  (re = async (e) => {
                    var t;
                    const n = e.name;
                    if (F.includes(e.name)) return;
                    let o = !1;
                    const i = (0, I.getPlatform)(),
                      a = null !== (t = e.sender) && void 0 !== t && t.url ? new URL(e.sender.url) : null;
                    if (
                      ((o =
                        i === g.PLATFORM_FIREFOX ? D[n] : (null == a ? void 0 : a.origin) === `chrome-extension://${l.default.runtime.id}`),
                      o)
                    ) {
                      var c;
                      const t = (null == r || null === (c = r.getPortStream) || void 0 === c ? void 0 : c.call(r, e)) || new h.default(e);
                      if (
                        ((V.isClientOpen = !0),
                        V.setupTrustedCommunication(t, e.sender),
                        n === g.ENVIRONMENT_TYPE_POPUP &&
                          ((B = !0),
                          (0, s.default)(t, () => {
                            B = !1;
                            const e = w();
                            (V.isClientOpen = e), b(e, g.ENVIRONMENT_TYPE_POPUP);
                          })),
                        n === g.ENVIRONMENT_TYPE_NOTIFICATION &&
                          (($ = !0),
                          (0, s.default)(t, () => {
                            $ = !1;
                            const e = w();
                            (V.isClientOpen = e), b(e, g.ENVIRONMENT_TYPE_NOTIFICATION);
                          })),
                        n === g.ENVIRONMENT_TYPE_FULLSCREEN)
                      ) {
                        const r = e.sender.tab.id;
                        (G[r] = !0),
                          (0, s.default)(t, () => {
                            delete G[r];
                            const e = w();
                            (V.isClientOpen = e), b(e, g.ENVIRONMENT_TYPE_FULLSCREEN);
                          });
                      }
                    } else if (a && a.origin === Y.origin && a.pathname === Y.pathname) {
                      var d;
                      const t = (null == r || null === (d = r.getPortStream) || void 0 === d ? void 0 : d.call(r, e)) || new h.default(e);
                      V.setupPhishingCommunication({ connectionStream: t });
                    } else {
                      if (e.sender && e.sender.tab && e.sender.url) {
                        const t = e.sender.tab.id,
                          r = new URL(e.sender.url),
                          { origin: n } = r;
                        e.onMessage.addListener((e) => {
                          e.data && "eth_requestAccounts" === e.data.method && (W[n] = t);
                        });
                      }
                      ne(e);
                    }
                  }),
                    (ne = (e) => {
                      var t;
                      const n = (null == r || null === (t = r.getPortStream) || void 0 === t ? void 0 : t.call(r, e)) || new h.default(e);
                      V.setupUntrustedCommunication({ connectionStream: n, sender: e.sender });
                    }),
                    null != r && r.registerConnectListeners && r.registerConnectListeners(re, ne),
                    v(),
                    V.decryptMessageController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, v),
                    V.encryptionPublicKeyController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, v),
                    V.signatureController.hub.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, v),
                    V.appStateController.on(A.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, v),
                    V.controllerMessenger.subscribe(A.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE, v),
                    V.txController.initApprovals(),
                    V.controllerMessenger.subscribe("QueuedRequestController:countChanged", (e) => {
                      v(), e > 0 && ce();
                    }),
                    K.on(T.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED, ({ automaticallyClosed: e }) => {
                      V.preferencesController.getUseRequestQueue() ||
                        (e
                          ? k() > 0 && ce()
                          : (V.signatureController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE_SIG),
                            V.decryptMessageController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE),
                            V.encryptionPublicKeyController.rejectUnapproved(m.REJECT_NOTIFICATION_CLOSE),
                            Object.values(V.approvalController.state.pendingApprovals).forEach(({ id: e, type: t }) => {
                              switch (t) {
                                case u.ApprovalType.SnapDialogAlert:
                                case u.ApprovalType.SnapDialogPrompt:
                                  V.approvalController.accept(e, null);
                                  break;
                                case u.ApprovalType.SnapDialogConfirmation:
                                case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountCreation:
                                case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.confirmAccountRemoval:
                                case g.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect:
                                  V.approvalController.accept(e, !1);
                                  break;
                                default:
                                  V.approvalController.reject(e, p.ethErrors.provider.userRejectedRequest());
                              }
                            })),
                        v());
                    }),
                    Object.keys(V.snapController.state.snaps).length > 0 && V.snapController.updateBlockedSnaps();
                }
                async function ce() {
                  const e = await q.getActiveTabs(),
                    t = Boolean(e.find((e) => G[e.id])),
                    r = e.length > 0 && e[0].extData && e[0].extData.indexOf("vivaldi_tab") > -1;
                  if (!H && (r || !B) && !t) {
                    H = !0;
                    try {
                      const e = V.appStateController.getCurrentPopupId();
                      await K.showPopup((e) => V.appStateController.setCurrentPopupId(e), e);
                    } finally {
                      H = !1;
                    }
                  }
                }
                const de = () => {
                  if (V)
                    return (
                      V.metaMetricsController.updateTraits({
                        [m.MetaMetricsUserTrait.InstallDateExt]: new Date().toISOString().split("T")[0]
                      }),
                      void V.metaMetricsController.addEventBeforeMetricsOptIn({
                        category: m.MetaMetricsEventCategory.App,
                        event: m.MetaMetricsEventName.AppInstalled,
                        properties: {}
                      })
                    );
                  setTimeout(() => {
                    de();
                  }, 1e3);
                };
                (async function () {
                  await (async function () {
                    Boolean(await U.get()) || (de(), q.openExtensionInBrowser());
                  })(),
                    oe().catch(a.default.error);
                })();
              };
            };
      },
      { package: "$root$", file: "app/scripts/background.js" }
    ]
  ],
  [4],
  {}
);
