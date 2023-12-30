LavaPack.loadPolicy({
  resources: {
    "@babel/runtime": { globals: { regeneratorRuntime: "write" } },
    "@ensdomains/content-hash": {
      globals: { "console.warn": !0 },
      packages: {
        "@ensdomains/content-hash>cids": !0,
        "@ensdomains/content-hash>js-base64": !0,
        "@ensdomains/content-hash>multicodec": !0,
        "@ensdomains/content-hash>multihashes": !0,
        "browserify>buffer": !0
      }
    },
    "@ensdomains/content-hash>cids": {
      packages: {
        "@ensdomains/content-hash>cids>multibase": !0,
        "@ensdomains/content-hash>cids>multicodec": !0,
        "@ensdomains/content-hash>cids>multihashes": !0,
        "@ensdomains/content-hash>cids>uint8arrays": !0
      }
    },
    "@ensdomains/content-hash>cids>multibase": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@ensdomains/content-hash>cids>multibase>@multiformats/base-x": !0 }
    },
    "@ensdomains/content-hash>cids>multicodec": {
      packages: { "@ensdomains/content-hash>cids>uint8arrays": !0, "@ensdomains/content-hash>multicodec>varint": !0 }
    },
    "@ensdomains/content-hash>cids>multihashes": {
      packages: {
        "@ensdomains/content-hash>cids>multibase": !0,
        "@ensdomains/content-hash>cids>multihashes>varint": !0,
        "@ensdomains/content-hash>cids>uint8arrays": !0
      }
    },
    "@ensdomains/content-hash>cids>uint8arrays": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@ensdomains/content-hash>cids>multibase": !0 }
    },
    "@ensdomains/content-hash>js-base64": {
      globals: { Base64: "write", TextDecoder: !0, TextEncoder: !0, atob: !0, btoa: !0, define: !0 },
      packages: { "browserify>buffer": !0 }
    },
    "@ensdomains/content-hash>multicodec": {
      packages: { "@ensdomains/content-hash>multicodec>uint8arrays": !0, "@ensdomains/content-hash>multicodec>varint": !0 }
    },
    "@ensdomains/content-hash>multicodec>uint8arrays": {
      packages: { "@ensdomains/content-hash>multicodec>uint8arrays>multibase": !0, "@ensdomains/content-hash>multihashes>web-encoding": !0 }
    },
    "@ensdomains/content-hash>multicodec>uint8arrays>multibase": {
      packages: {
        "@ensdomains/content-hash>cids>multibase>@multiformats/base-x": !0,
        "@ensdomains/content-hash>multihashes>web-encoding": !0
      }
    },
    "@ensdomains/content-hash>multihashes": {
      packages: {
        "@ensdomains/content-hash>multihashes>multibase": !0,
        "@ensdomains/content-hash>multihashes>varint": !0,
        "@ensdomains/content-hash>multihashes>web-encoding": !0,
        "browserify>buffer": !0
      }
    },
    "@ensdomains/content-hash>multihashes>multibase": {
      packages: {
        "@ensdomains/content-hash>multihashes>multibase>base-x": !0,
        "@ensdomains/content-hash>multihashes>web-encoding": !0,
        "browserify>buffer": !0
      }
    },
    "@ensdomains/content-hash>multihashes>multibase>base-x": { packages: { "koa>content-disposition>safe-buffer": !0 } },
    "@ensdomains/content-hash>multihashes>web-encoding": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "browserify>util": !0 }
    },
    "@ethereumjs/common": {
      packages: { "@ethereumjs/common>crc-32": !0, "@ethereumjs/tx>@ethereumjs/util": !0, "browserify>buffer": !0, "webpack>events": !0 }
    },
    "@ethereumjs/common>crc-32": { globals: { DO_NOT_EXPORT_CRC: !0, define: !0 } },
    "@ethereumjs/tx": {
      packages: {
        "@ethereumjs/common": !0,
        "@ethereumjs/tx>@ethereumjs/rlp": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0
      }
    },
    "@ethereumjs/tx>@ethereumjs/rlp": { globals: { TextEncoder: !0 } },
    "@ethereumjs/tx>@ethereumjs/util": {
      globals: { "console.warn": !0 },
      packages: {
        "@ethereumjs/tx>@ethereumjs/rlp": !0,
        "@ethereumjs/tx>@ethereumjs/util>micro-ftch": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "webpack>events": !0
      }
    },
    "@ethereumjs/tx>@ethereumjs/util>micro-ftch": {
      globals: { Headers: !0, TextDecoder: !0, URL: !0, btoa: !0, fetch: !0 },
      packages: {
        "browserify>browserify-zlib": !0,
        "browserify>buffer": !0,
        "browserify>https-browserify": !0,
        "browserify>process": !0,
        "browserify>stream-http": !0,
        "browserify>url": !0,
        "browserify>util": !0
      }
    },
    "@ethereumjs/tx>ethereum-cryptography": {
      globals: { TextDecoder: !0, crypto: !0 },
      packages: { "@ethereumjs/tx>ethereum-cryptography>@noble/curves": !0, "@ethereumjs/tx>ethereum-cryptography>@noble/hashes": !0 }
    },
    "@ethereumjs/tx>ethereum-cryptography>@noble/curves": {
      globals: { TextEncoder: !0 },
      packages: { "@ethereumjs/tx>ethereum-cryptography>@noble/curves>@noble/hashes": !0 }
    },
    "@ethereumjs/tx>ethereum-cryptography>@noble/curves>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "@ethereumjs/tx>ethereum-cryptography>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "@ethersproject/abi": {
      globals: { "console.log": !0 },
      packages: {
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/constants": !0,
        "@ethersproject/abi>@ethersproject/hash": !0,
        "@ethersproject/abi>@ethersproject/keccak256": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0,
        "@ethersproject/bignumber": !0
      }
    },
    "@ethersproject/abi>@ethersproject/address": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/keccak256": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/providers>@ethersproject/rlp": !0
      }
    },
    "@ethersproject/abi>@ethersproject/bytes": { packages: { "@ethersproject/abi>@ethersproject/logger": !0 } },
    "@ethersproject/abi>@ethersproject/constants": { packages: { "@ethersproject/bignumber": !0 } },
    "@ethersproject/abi>@ethersproject/hash": {
      packages: {
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/keccak256": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/providers>@ethersproject/base64": !0
      }
    },
    "@ethersproject/abi>@ethersproject/keccak256": {
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/abi>@ethersproject/keccak256>js-sha3": !0 }
    },
    "@ethersproject/abi>@ethersproject/keccak256>js-sha3": { globals: { define: !0 }, packages: { "browserify>process": !0 } },
    "@ethersproject/abi>@ethersproject/logger": { globals: { console: !0 } },
    "@ethersproject/abi>@ethersproject/properties": { packages: { "@ethersproject/abi>@ethersproject/logger": !0 } },
    "@ethersproject/abi>@ethersproject/strings": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/constants": !0,
        "@ethersproject/abi>@ethersproject/logger": !0
      }
    },
    "@ethersproject/bignumber": {
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/abi>@ethersproject/logger": !0, "bn.js": !0 }
    },
    "@ethersproject/contracts": {
      globals: { setTimeout: !0 },
      packages: {
        "@ethersproject/abi": !0,
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/contracts>@ethersproject/abstract-provider": !0,
        "@ethersproject/hdnode>@ethersproject/abstract-signer": !0,
        "@ethersproject/hdnode>@ethersproject/transactions": !0
      }
    },
    "@ethersproject/contracts>@ethersproject/abstract-provider": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/bignumber": !0
      }
    },
    "@ethersproject/hdnode": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/hdnode>@ethersproject/basex": !0,
        "@ethersproject/hdnode>@ethersproject/pbkdf2": !0,
        "@ethersproject/hdnode>@ethersproject/sha2": !0,
        "@ethersproject/hdnode>@ethersproject/signing-key": !0,
        "@ethersproject/hdnode>@ethersproject/transactions": !0,
        "@ethersproject/hdnode>@ethersproject/wordlists": !0
      }
    },
    "@ethersproject/hdnode>@ethersproject/abstract-signer": {
      packages: { "@ethersproject/abi>@ethersproject/logger": !0, "@ethersproject/abi>@ethersproject/properties": !0 }
    },
    "@ethersproject/hdnode>@ethersproject/basex": {
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/abi>@ethersproject/properties": !0 }
    },
    "@ethersproject/hdnode>@ethersproject/pbkdf2": {
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/hdnode>@ethersproject/sha2": !0 }
    },
    "@ethersproject/hdnode>@ethersproject/sha2": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "ethereumjs-util>ethereum-cryptography>hash.js": !0
      }
    },
    "@ethersproject/hdnode>@ethersproject/signing-key": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@metamask/ppom-validator>elliptic": !0
      }
    },
    "@ethersproject/hdnode>@ethersproject/transactions": {
      packages: {
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/constants": !0,
        "@ethersproject/abi>@ethersproject/keccak256": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/hdnode>@ethersproject/signing-key": !0,
        "@ethersproject/providers>@ethersproject/rlp": !0
      }
    },
    "@ethersproject/hdnode>@ethersproject/wordlists": {
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/hash": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0
      }
    },
    "@ethersproject/providers": {
      globals: {
        WebSocket: !0,
        clearInterval: !0,
        clearTimeout: !0,
        "console.log": !0,
        "console.warn": !0,
        setInterval: !0,
        setTimeout: !0
      },
      packages: {
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/constants": !0,
        "@ethersproject/abi>@ethersproject/hash": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/contracts>@ethersproject/abstract-provider": !0,
        "@ethersproject/hdnode>@ethersproject/abstract-signer": !0,
        "@ethersproject/hdnode>@ethersproject/basex": !0,
        "@ethersproject/hdnode>@ethersproject/sha2": !0,
        "@ethersproject/hdnode>@ethersproject/transactions": !0,
        "@ethersproject/providers>@ethersproject/base64": !0,
        "@ethersproject/providers>@ethersproject/networks": !0,
        "@ethersproject/providers>@ethersproject/random": !0,
        "@ethersproject/providers>@ethersproject/web": !0,
        "@ethersproject/providers>bech32": !0
      }
    },
    "@ethersproject/providers>@ethersproject/base64": {
      globals: { atob: !0, btoa: !0 },
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0 }
    },
    "@ethersproject/providers>@ethersproject/networks": { packages: { "@ethersproject/abi>@ethersproject/logger": !0 } },
    "@ethersproject/providers>@ethersproject/random": {
      globals: { "crypto.getRandomValues": !0 },
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/abi>@ethersproject/logger": !0 }
    },
    "@ethersproject/providers>@ethersproject/rlp": {
      packages: { "@ethersproject/abi>@ethersproject/bytes": !0, "@ethersproject/abi>@ethersproject/logger": !0 }
    },
    "@ethersproject/providers>@ethersproject/web": {
      globals: { clearTimeout: !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/abi>@ethersproject/logger": !0,
        "@ethersproject/abi>@ethersproject/properties": !0,
        "@ethersproject/abi>@ethersproject/strings": !0,
        "@ethersproject/providers>@ethersproject/base64": !0
      }
    },
    "@keystonehq/bc-ur-registry-eth": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry": !0,
        "@keystonehq/bc-ur-registry-eth>hdkey": !0,
        "browserify>buffer": !0,
        uuid: !0
      }
    },
    "@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry": {
      globals: { define: !0 },
      packages: {
        "@ngraveio/bc-ur": !0,
        "browserify>buffer": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check": !0,
        "mockttp>graphql-tag>tslib": !0
      }
    },
    "@keystonehq/bc-ur-registry-eth>hdkey": {
      packages: {
        "browserify>assert": !0,
        "browserify>crypto-browserify": !0,
        "ethereumjs-util>create-hash>ripemd160": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check": !0,
        "ethereumjs-util>ethereum-cryptography>secp256k1": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "@keystonehq/metamask-airgapped-keyring": {
      packages: {
        "@ethereumjs/tx": !0,
        "@keystonehq/bc-ur-registry-eth": !0,
        "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring": !0,
        "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store": !0,
        "browserify>buffer": !0,
        "ethereumjs-util>rlp": !0,
        uuid: !0,
        "webpack>events": !0
      }
    },
    "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring": {
      packages: {
        "@ethereumjs/tx": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@keystonehq/bc-ur-registry-eth": !0,
        "@keystonehq/bc-ur-registry-eth>hdkey": !0,
        "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring>rlp": !0,
        "browserify>buffer": !0,
        uuid: !0
      }
    },
    "@keystonehq/metamask-airgapped-keyring>@keystonehq/base-eth-keyring>rlp": { globals: { TextEncoder: !0 } },
    "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store": {
      packages: {
        "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store>through2": !0,
        "@metamask/safe-event-emitter": !0,
        "stream-browserify": !0
      }
    },
    "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store>through2": {
      packages: { "browserify>process": !0, "browserify>util": !0, "readable-stream": !0, "watchify>xtend": !0 }
    },
    "@material-ui/core": {
      globals: {
        Image: !0,
        _formatMuiErrorMessage: !0,
        addEventListener: !0,
        clearInterval: !0,
        clearTimeout: !0,
        "console.error": !0,
        "console.warn": !0,
        document: !0,
        getComputedStyle: !0,
        getSelection: !0,
        innerHeight: !0,
        innerWidth: !0,
        matchMedia: !0,
        navigator: !0,
        "performance.now": !0,
        removeEventListener: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0
      },
      packages: {
        "@babel/runtime": !0,
        "@material-ui/core>@material-ui/styles": !0,
        "@material-ui/core>@material-ui/system": !0,
        "@material-ui/core>@material-ui/utils": !0,
        "@material-ui/core>clsx": !0,
        "@material-ui/core>popper.js": !0,
        "@material-ui/core>react-transition-group": !0,
        "prop-types": !0,
        "prop-types>react-is": !0,
        react: !0,
        "react-dom": !0,
        "react-redux>hoist-non-react-statics": !0
      }
    },
    "@material-ui/core>@material-ui/styles": {
      globals: { "console.error": !0, "console.warn": !0, "document.createComment": !0, "document.head": !0 },
      packages: {
        "@babel/runtime": !0,
        "@material-ui/core>@material-ui/styles>jss": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-camel-case": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-default-unit": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-global": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-nested": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-props-sort": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-rule-value-function": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer": !0,
        "@material-ui/core>@material-ui/utils": !0,
        "@material-ui/core>clsx": !0,
        "prop-types": !0,
        react: !0,
        "react-redux>hoist-non-react-statics": !0
      }
    },
    "@material-ui/core>@material-ui/styles>jss": {
      globals: { CSS: !0, "document.createElement": !0, "document.querySelector": !0 },
      packages: { "@babel/runtime": !0, "@material-ui/core>@material-ui/styles>jss>is-in-browser": !0, "react-router-dom>tiny-warning": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-camel-case": {
      packages: { "@material-ui/core>@material-ui/styles>jss-plugin-camel-case>hyphenate-style-name": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-default-unit": {
      globals: { CSS: !0 },
      packages: { "@material-ui/core>@material-ui/styles>jss": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-global": {
      packages: { "@babel/runtime": !0, "@material-ui/core>@material-ui/styles>jss": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-nested": { packages: { "@babel/runtime": !0, "react-router-dom>tiny-warning": !0 } },
    "@material-ui/core>@material-ui/styles>jss-plugin-rule-value-function": {
      packages: { "@material-ui/core>@material-ui/styles>jss": !0, "react-router-dom>tiny-warning": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer": {
      packages: {
        "@material-ui/core>@material-ui/styles>jss": !0,
        "@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer>css-vendor": !0
      }
    },
    "@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer>css-vendor": {
      globals: { "document.createElement": !0, "document.documentElement": !0, getComputedStyle: !0 },
      packages: { "@babel/runtime": !0, "@material-ui/core>@material-ui/styles>jss>is-in-browser": !0 }
    },
    "@material-ui/core>@material-ui/styles>jss>is-in-browser": { globals: { document: !0 } },
    "@material-ui/core>@material-ui/system": {
      globals: { "console.error": !0 },
      packages: { "@babel/runtime": !0, "@material-ui/core>@material-ui/utils": !0, "prop-types": !0 }
    },
    "@material-ui/core>@material-ui/utils": { packages: { "@babel/runtime": !0, "prop-types": !0, "prop-types>react-is": !0 } },
    "@material-ui/core>popper.js": {
      globals: {
        MSInputMethodContext: !0,
        "Node.DOCUMENT_POSITION_FOLLOWING": !0,
        cancelAnimationFrame: !0,
        "console.warn": !0,
        define: !0,
        devicePixelRatio: !0,
        document: !0,
        getComputedStyle: !0,
        innerHeight: !0,
        innerWidth: !0,
        navigator: !0,
        requestAnimationFrame: !0,
        setTimeout: !0
      }
    },
    "@material-ui/core>react-transition-group": {
      globals: { Element: !0, setTimeout: !0 },
      packages: { "@material-ui/core>react-transition-group>dom-helpers": !0, "prop-types": !0, react: !0, "react-dom": !0 }
    },
    "@material-ui/core>react-transition-group>dom-helpers": { packages: { "@babel/runtime": !0 } },
    "@metamask/address-book-controller": {
      packages: { "@metamask/address-book-controller>@metamask/controller-utils": !0, "@metamask/base-controller": !0 }
    },
    "@metamask/address-book-controller>@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/address-book-controller>@metamask/controller-utils>@metamask/utils": !0,
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0,
        "ethjs>ethjs-unit": !0
      }
    },
    "@metamask/address-book-controller>@metamask/controller-utils>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@metamask/utils>@noble/hashes": !0, "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/announcement-controller": { packages: { "@metamask/base-controller": !0 } },
    "@metamask/approval-controller": {
      globals: { "console.info": !0 },
      packages: { "@metamask/approval-controller>nanoid": !0, "@metamask/base-controller": !0, "eth-rpc-errors": !0 }
    },
    "@metamask/approval-controller>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/assets-controllers": {
      globals: {
        AbortController: !0,
        Headers: !0,
        URL: !0,
        clearInterval: !0,
        clearTimeout: !0,
        "console.log": !0,
        setInterval: !0,
        setTimeout: !0
      },
      packages: {
        "@ethersproject/abi>@ethersproject/address": !0,
        "@ethersproject/contracts": !0,
        "@ethersproject/providers": !0,
        "@metamask/assets-controllers>@metamask/abi-utils": !0,
        "@metamask/assets-controllers>multiformats": !0,
        "@metamask/base-controller": !0,
        "@metamask/contract-metadata": !0,
        "@metamask/controller-utils": !0,
        "@metamask/eth-query": !0,
        "@metamask/metamask-eth-abis": !0,
        "@metamask/polling-controller": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0,
        "eth-json-rpc-filters>async-mutex": !0,
        "ethereumjs-util": !0,
        "single-call-balance-checker-abi": !0,
        uuid: !0,
        "webpack>events": !0
      }
    },
    "@metamask/assets-controllers>@metamask/abi-utils": { packages: { "@metamask/utils": !0, superstruct: !0 } },
    "@metamask/assets-controllers>multiformats": { globals: { TextDecoder: !0, TextEncoder: !0, "console.warn": !0 } },
    "@metamask/base-controller": { globals: { setTimeout: !0 }, packages: { immer: !0 } },
    "@metamask/browser-passworder": {
      globals: {
        btoa: !0,
        "crypto.getRandomValues": !0,
        "crypto.subtle.decrypt": !0,
        "crypto.subtle.deriveKey": !0,
        "crypto.subtle.encrypt": !0,
        "crypto.subtle.exportKey": !0,
        "crypto.subtle.importKey": !0
      },
      packages: { "browserify>buffer": !0 }
    },
    "@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0,
        "ethjs>ethjs-unit": !0
      }
    },
    "@metamask/controller-utils>@spruceid/siwe-parser": {
      globals: { "console.error": !0, "console.log": !0 },
      packages: { "@metamask/controller-utils>@spruceid/siwe-parser>apg-js": !0 }
    },
    "@metamask/controller-utils>@spruceid/siwe-parser>apg-js": {
      globals: { mode: !0 },
      packages: { "browserify>buffer": !0, "browserify>insert-module-globals>is-buffer": !0 }
    },
    "@metamask/controllers>web3": { globals: { XMLHttpRequest: !0 } },
    "@metamask/controllers>web3-provider-engine>cross-fetch>node-fetch": { globals: { fetch: !0 } },
    "@metamask/controllers>web3-provider-engine>eth-json-rpc-middleware>node-fetch": { globals: { fetch: !0 } },
    "@metamask/eth-json-rpc-middleware": {
      globals: { URL: !0, "console.error": !0, setTimeout: !0 },
      packages: {
        "@metamask/eth-json-rpc-middleware>@metamask/eth-sig-util": !0,
        "@metamask/eth-json-rpc-middleware>safe-stable-stringify": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0,
        pify: !0,
        "sass-loader>klona": !0
      }
    },
    "@metamask/eth-json-rpc-middleware>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/assets-controllers>@metamask/abi-utils": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/eth-keyring-controller": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/browser-passworder": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-sig-util": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring": !0,
        "@metamask/obs-store": !0,
        "@metamask/utils": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring": {
      globals: { TextEncoder: !0 },
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography": !0,
        "@metamask/eth-trezor-keyring>@metamask/eth-sig-util": !0,
        "@metamask/scure-bip39": !0,
        "browserify>buffer": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography": {
      globals: { TextDecoder: !0, crypto: !0 },
      packages: {
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes": {
      globals: { TextEncoder: !0, crypto: !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@noble/secp256k1": {
      globals: { crypto: !0 },
      packages: { "browserify>browser-resolve": !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32": {
      packages: {
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@noble/secp256k1": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32>@noble/hashes": !0,
        "@metamask/utils>@scure/base": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32>@noble/hashes": {
      globals: { TextEncoder: !0, crypto: !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/abi-utils": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/utils": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-sig-util>ethjs-util": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/abi-utils": {
      packages: { "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/abi-utils>@metamask/utils": !0, superstruct: !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/abi-utils>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-sig-util>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-sig-util>ethjs-util": {
      packages: { "browserify>buffer": !0, "ethjs>ethjs-util>is-hex-prefixed": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography": !0,
        "@metamask/eth-trezor-keyring>@metamask/eth-sig-util": !0,
        "browserify>buffer": !0,
        "mocha>serialize-javascript>randombytes": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography": {
      globals: { TextDecoder: !0, crypto: !0 },
      packages: { "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography>@noble/hashes": !0 }
    },
    "@metamask/eth-keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography>@noble/hashes": {
      globals: { TextEncoder: !0, crypto: !0 }
    },
    "@metamask/eth-ledger-bridge-keyring": {
      globals: {
        addEventListener: !0,
        "console.log": !0,
        "document.createElement": !0,
        "document.head.appendChild": !0,
        fetch: !0,
        removeEventListener: !0
      },
      packages: {
        "@ethereumjs/tx": !0,
        "@ethereumjs/tx>@ethereumjs/rlp": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@keystonehq/bc-ur-registry-eth>hdkey": !0,
        "@metamask/eth-ledger-bridge-keyring>@metamask/eth-sig-util": !0,
        "browserify>buffer": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-ledger-bridge-keyring>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/assets-controllers>@metamask/abi-utils": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/eth-query": { packages: { "@metamask/eth-query>json-rpc-random-id": !0, "watchify>xtend": !0 } },
    "@metamask/eth-snap-keyring": {
      globals: { "console.error": !0 },
      packages: {
        "@ethereumjs/tx": !0,
        "@metamask/eth-snap-keyring>@metamask/eth-sig-util": !0,
        "@metamask/eth-snap-keyring>uuid": !0,
        "@metamask/keyring-api": !0,
        "@metamask/utils": !0,
        superstruct: !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-snap-keyring>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/assets-controllers>@metamask/abi-utils": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/eth-snap-keyring>uuid": { globals: { crypto: !0 } },
    "@metamask/eth-token-tracker": {
      globals: { "console.warn": !0 },
      packages: {
        "@babel/runtime": !0,
        "@metamask/eth-token-tracker>deep-equal": !0,
        "@metamask/eth-token-tracker>eth-block-tracker": !0,
        "@metamask/eth-token-tracker>ethjs": !0,
        "@metamask/eth-token-tracker>human-standard-token-abi": !0,
        "@metamask/eth-token-tracker>safe-event-emitter": !0,
        "ethjs-contract": !0,
        "ethjs>ethjs-query": !0
      }
    },
    "@metamask/eth-token-tracker>deep-equal": {
      packages: {
        "@metamask/eth-token-tracker>deep-equal>is-date-object": !0,
        "@ngraveio/bc-ur>assert>object-is": !0,
        "browserify>util>is-arguments": !0,
        "globalthis>define-properties>object-keys": !0,
        "string.prototype.matchall>es-abstract>is-regex": !0,
        "string.prototype.matchall>regexp.prototype.flags": !0
      }
    },
    "@metamask/eth-token-tracker>deep-equal>is-date-object": { packages: { "koa>is-generator-function>has-tostringtag": !0 } },
    "@metamask/eth-token-tracker>eth-block-tracker": {
      globals: { clearTimeout: !0, "console.error": !0, setTimeout: !0 },
      packages: {
        "@metamask/eth-token-tracker>eth-block-tracker>pify": !0,
        "@metamask/eth-token-tracker>safe-event-emitter": !0,
        "eth-json-rpc-filters>eth-query": !0
      }
    },
    "@metamask/eth-token-tracker>ethjs": {
      globals: { clearInterval: !0, setInterval: !0 },
      packages: {
        "@metamask/eth-token-tracker>ethjs>ethjs-abi": !0,
        "@metamask/eth-token-tracker>ethjs>ethjs-contract": !0,
        "@metamask/eth-token-tracker>ethjs>ethjs-query": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-provider-http": !0,
        "ethjs>ethjs-unit": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "ethjs>number-to-bn": !0
      }
    },
    "@metamask/eth-token-tracker>ethjs>ethjs-abi": {
      packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 }
    },
    "@metamask/eth-token-tracker>ethjs>ethjs-contract": {
      packages: {
        "@metamask/eth-token-tracker>ethjs>ethjs-contract>ethjs-abi": !0,
        "ethjs-contract>babel-runtime": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "promise-to-callback": !0
      }
    },
    "@metamask/eth-token-tracker>ethjs>ethjs-contract>ethjs-abi": {
      packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 }
    },
    "@metamask/eth-token-tracker>ethjs>ethjs-query": {
      globals: { console: !0 },
      packages: {
        "@metamask/ethjs-query>ethjs-format": !0,
        "@metamask/ethjs-query>ethjs-rpc": !0,
        "ethjs-contract>babel-runtime": !0,
        "promise-to-callback": !0
      }
    },
    "@metamask/eth-token-tracker>safe-event-emitter": {
      globals: { setTimeout: !0 },
      packages: { "browserify>util": !0, "webpack>events": !0 }
    },
    "@metamask/eth-trezor-keyring": {
      globals: { setTimeout: !0 },
      packages: {
        "@ethereumjs/tx": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-plugin-ethereum": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web": !0,
        "@metamask/eth-trezor-keyring>hdkey": !0,
        "browserify>buffer": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-trezor-keyring>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/eth-trezor-keyring>@metamask/eth-sig-util>ethjs-util": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/eth-trezor-keyring>@metamask/eth-sig-util>ethjs-util": {
      packages: { "browserify>buffer": !0, "ethjs>ethjs-util>is-hex-prefixed": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-plugin-ethereum": {
      packages: { "@metamask/eth-trezor-keyring>@metamask/eth-sig-util": !0 }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web": {
      globals: {
        addEventListener: !0,
        btoa: !0,
        chrome: !0,
        clearInterval: !0,
        clearTimeout: !0,
        "console.warn": !0,
        "document.body": !0,
        "document.createElement": !0,
        "document.createTextNode": !0,
        "document.getElementById": !0,
        "document.querySelectorAll": !0,
        "navigator.usb.requestDevice": !0,
        open: !0,
        removeEventListener: !0,
        setInterval: !0,
        setTimeout: !0
      },
      packages: {
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/utils": !0,
        "mockttp>graphql-tag>tslib": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect": {
      globals: {
        __TREZOR_CONNECT_SRC: !0,
        chrome: !0,
        "console.error": !0,
        "console.log": !0,
        "console.warn": !0,
        location: !0,
        navigator: !0
      },
      packages: {
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>tslib": !0
      }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport": {
      globals: { fetch: !0, "navigator.usb": !0, onconnect: "write", setTimeout: !0 },
      packages: {
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>bytebuffer": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>long": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/utils": !0,
        "browserify>buffer": !0,
        "lavamoat>json-stable-stringify": !0,
        "webpack>events": !0
      }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>bytebuffer": {
      globals: { console: !0, define: !0 },
      packages: { "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>bytebuffer>long": !0 }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>bytebuffer>long": { globals: { define: !0 } },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>long": {
      globals: { "WebAssembly.Instance": !0, "WebAssembly.Module": !0 }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs": {
      globals: { process: !0, setTimeout: !0 },
      packages: {
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/aspromise": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/base64": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/codegen": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/eventemitter": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/fetch": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/float": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/inquire": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/path": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/pool": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/utf8": !0
      }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/codegen": {
      globals: { "console.log": !0 }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/fetch": {
      globals: { XMLHttpRequest: !0 },
      packages: {
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/aspromise": !0,
        "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/transport>protobufjs>@protobufjs/inquire": !0
      }
    },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>tslib": { globals: { define: !0 } },
    "@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/utils": {
      globals: { AbortController: !0, clearTimeout: !0, setTimeout: !0 },
      packages: { "browserify>buffer": !0 }
    },
    "@metamask/eth-trezor-keyring>hdkey": {
      packages: {
        "@metamask/eth-trezor-keyring>hdkey>coinstring": !0,
        "@metamask/eth-trezor-keyring>hdkey>secp256k1": !0,
        "browserify>assert": !0,
        "browserify>crypto-browserify": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "@metamask/eth-trezor-keyring>hdkey>coinstring": {
      packages: { "@metamask/eth-trezor-keyring>hdkey>coinstring>bs58": !0, "browserify>buffer": !0, "ethereumjs-util>create-hash": !0 }
    },
    "@metamask/eth-trezor-keyring>hdkey>secp256k1": {
      packages: {
        "@metamask/eth-trezor-keyring>hdkey>secp256k1>bip66": !0,
        "@metamask/ppom-validator>elliptic": !0,
        "bn.js": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "ethereumjs-util>create-hash": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "@metamask/eth-trezor-keyring>hdkey>secp256k1>bip66": { packages: { "koa>content-disposition>safe-buffer": !0 } },
    "@metamask/etherscan-link": { globals: { URL: !0 } },
    "@metamask/ethjs-query": {
      globals: { console: !0 },
      packages: { "@metamask/ethjs-query>ethjs-format": !0, "@metamask/ethjs-query>ethjs-rpc": !0, "promise-to-callback": !0 }
    },
    "@metamask/ethjs-query>ethjs-format": {
      packages: {
        "@metamask/ethjs-query>ethjs-format>ethjs-schema": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>ethjs-util>strip-hex-prefix": !0,
        "ethjs>number-to-bn": !0
      }
    },
    "@metamask/ethjs-query>ethjs-rpc": { packages: { "promise-to-callback": !0 } },
    "@metamask/gas-fee-controller": {
      globals: { clearInterval: !0, "console.error": !0, setInterval: !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/gas-fee-controller>@metamask/controller-utils": !0,
        "eth-json-rpc-filters>eth-query": !0,
        "ethereumjs-util": !0,
        "ethjs>ethjs-unit": !0,
        uuid: !0
      }
    },
    "@metamask/gas-fee-controller>@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "@metamask/gas-fee-controller>@metamask/controller-utils>@metamask/utils": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0,
        "ethjs>ethjs-unit": !0
      }
    },
    "@metamask/gas-fee-controller>@metamask/controller-utils>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@metamask/utils>@noble/hashes": !0, "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/jazzicon": {
      globals: { "document.createElement": !0, "document.createElementNS": !0 },
      packages: { "@metamask/jazzicon>color": !0, "@metamask/jazzicon>mersenne-twister": !0 }
    },
    "@metamask/jazzicon>color": {
      packages: {
        "@metamask/jazzicon>color>clone": !0,
        "@metamask/jazzicon>color>color-convert": !0,
        "@metamask/jazzicon>color>color-string": !0
      }
    },
    "@metamask/jazzicon>color>clone": { packages: { "browserify>buffer": !0 } },
    "@metamask/jazzicon>color>color-convert": { packages: { "@metamask/jazzicon>color>color-convert>color-name": !0 } },
    "@metamask/jazzicon>color>color-string": { packages: { "jest-canvas-mock>moo-color>color-name": !0 } },
    "@metamask/key-tree": {
      packages: {
        "@metamask/key-tree>@metamask/utils": !0,
        "@metamask/key-tree>@noble/ed25519": !0,
        "@metamask/key-tree>@noble/secp256k1": !0,
        "@metamask/scure-bip39": !0,
        "@metamask/utils>@noble/hashes": !0,
        "@metamask/utils>@scure/base": !0
      }
    },
    "@metamask/key-tree>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@metamask/utils>@noble/hashes": !0, "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/key-tree>@noble/ed25519": { globals: { crypto: !0 }, packages: { "browserify>browser-resolve": !0 } },
    "@metamask/key-tree>@noble/secp256k1": { globals: { crypto: !0 }, packages: { "browserify>browser-resolve": !0 } },
    "@metamask/keyring-api": { packages: { "@metamask/keyring-api>uuid": !0, "@metamask/utils": !0, superstruct: !0 } },
    "@metamask/keyring-api>uuid": { globals: { crypto: !0 } },
    "@metamask/keyring-controller": {
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/eth-keyring-controller": !0,
        "@metamask/keyring-controller>ethereumjs-wallet": !0,
        "@metamask/utils": !0,
        "eth-json-rpc-filters>async-mutex": !0,
        "ethereumjs-util": !0
      }
    },
    "@metamask/keyring-controller>ethereumjs-wallet": {
      packages: {
        "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography": !0,
        "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util": !0,
        "@metamask/keyring-controller>ethereumjs-wallet>utf8": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify": !0,
        "eth-lattice-keyring>gridplus-sdk>aes-js": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check": !0,
        "ethereumjs-util>ethereum-cryptography>scrypt-js": !0,
        "mocha>serialize-javascript>randombytes": !0,
        uuid: !0
      }
    },
    "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography": {
      packages: {
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify>create-hmac": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check": !0,
        "ethereumjs-util>ethereum-cryptography>hash.js": !0,
        "ethereumjs-util>ethereum-cryptography>keccak": !0,
        "ethereumjs-util>ethereum-cryptography>secp256k1": !0,
        "koa>content-disposition>safe-buffer": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util": {
      packages: {
        "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography": !0,
        "bn.js": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>rlp": !0
      }
    },
    "@metamask/logging-controller": { packages: { "@metamask/base-controller": !0, uuid: !0 } },
    "@metamask/logo": {
      globals: {
        addEventListener: !0,
        "document.body.appendChild": !0,
        "document.createElementNS": !0,
        innerHeight: !0,
        innerWidth: !0,
        requestAnimationFrame: !0
      },
      packages: { "@metamask/logo>gl-mat4": !0, "@metamask/logo>gl-vec3": !0 }
    },
    "@metamask/message-manager": {
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/message-manager>@metamask/eth-sig-util": !0,
        "@metamask/message-manager>jsonschema": !0,
        "browserify>buffer": !0,
        "ethereumjs-util": !0,
        uuid: !0,
        "webpack>events": !0
      }
    },
    "@metamask/message-manager>@metamask/eth-sig-util": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethereumjs/tx>ethereum-cryptography": !0,
        "@metamask/assets-controllers>@metamask/abi-utils": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0
      }
    },
    "@metamask/message-manager>jsonschema": { packages: { "browserify>url": !0 } },
    "@metamask/name-controller": {
      globals: { fetch: !0 },
      packages: { "@metamask/base-controller": !0, "@metamask/name-controller>@metamask/utils": !0, "eth-json-rpc-filters>async-mutex": !0 }
    },
    "@metamask/name-controller>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@metamask/utils>@noble/hashes": !0, "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/network-controller": {
      globals: { URL: !0, btoa: !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/eth-json-rpc-middleware": !0,
        "@metamask/eth-query": !0,
        "@metamask/network-controller>@metamask/eth-json-rpc-infura": !0,
        "@metamask/network-controller>@metamask/eth-json-rpc-provider": !0,
        "@metamask/network-controller>@metamask/swappable-obj-proxy": !0,
        "@metamask/network-controller>eth-block-tracker": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0,
        "browserify>assert": !0,
        uuid: !0
      }
    },
    "@metamask/network-controller>@metamask/eth-json-rpc-infura": {
      globals: { setTimeout: !0 },
      packages: {
        "@metamask/network-controller>@metamask/eth-json-rpc-provider": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0,
        "node-fetch": !0
      }
    },
    "@metamask/network-controller>@metamask/eth-json-rpc-provider": {
      packages: {
        "@metamask/network-controller>@metamask/eth-json-rpc-provider>@metamask/safe-event-emitter": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0
      }
    },
    "@metamask/network-controller>@metamask/eth-json-rpc-provider>@metamask/safe-event-emitter": {
      globals: { setTimeout: !0 },
      packages: { "webpack>events": !0 }
    },
    "@metamask/network-controller>eth-block-tracker": {
      globals: { clearTimeout: !0, "console.error": !0, setTimeout: !0 },
      packages: {
        "@metamask/eth-query>json-rpc-random-id": !0,
        "@metamask/network-controller>eth-block-tracker>@metamask/safe-event-emitter": !0,
        "@metamask/utils": !0,
        pify: !0
      }
    },
    "@metamask/network-controller>eth-block-tracker>@metamask/safe-event-emitter": {
      globals: { setTimeout: !0 },
      packages: { "webpack>events": !0 }
    },
    "@metamask/notification-controller": {
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/notification-controller>@metamask/utils": !0,
        "@metamask/notification-controller>nanoid": !0
      }
    },
    "@metamask/notification-controller>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/notification-controller>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/obs-store": {
      packages: { "@metamask/obs-store>through2": !0, "@metamask/safe-event-emitter": !0, "stream-browserify": !0 }
    },
    "@metamask/obs-store>through2": {
      packages: { "browserify>process": !0, "browserify>util": !0, "readable-stream": !0, "watchify>xtend": !0 }
    },
    "@metamask/permission-controller": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/permission-controller>@metamask/base-controller": !0,
        "@metamask/permission-controller>@metamask/controller-utils": !0,
        "@metamask/permission-controller>nanoid": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0,
        "deep-freeze-strict": !0,
        immer: !0
      }
    },
    "@metamask/permission-controller>@metamask/base-controller": { globals: { setTimeout: !0 }, packages: { immer: !0 } },
    "@metamask/permission-controller>@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "@metamask/permission-controller>@metamask/controller-utils>@metamask/ethjs-unit": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0
      }
    },
    "@metamask/permission-controller>@metamask/controller-utils>@metamask/ethjs-unit": {
      packages: { "bn.js": !0, "ethjs>number-to-bn": !0 }
    },
    "@metamask/permission-controller>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/phishing-controller": {
      globals: { fetch: !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/phishing-warning>eth-phishing-detect": !0,
        punycode: !0
      }
    },
    "@metamask/phishing-warning>eth-phishing-detect": { packages: { "eslint>optionator>fast-levenshtein": !0 } },
    "@metamask/polling-controller": {
      globals: { clearTimeout: !0, "console.error": !0, setTimeout: !0 },
      packages: { "@metamask/base-controller": !0, "@metamask/snaps-utils>fast-json-stable-stringify": !0, uuid: !0 }
    },
    "@metamask/post-message-stream": {
      globals: {
        "MessageEvent.prototype": !0,
        WorkerGlobalScope: !0,
        addEventListener: !0,
        browser: !0,
        chrome: !0,
        "location.origin": !0,
        postMessage: !0,
        removeEventListener: !0
      },
      packages: { "@metamask/post-message-stream>@metamask/utils": !0, "@metamask/post-message-stream>readable-stream": !0 }
    },
    "@metamask/post-message-stream>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/post-message-stream>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "@metamask/ppom-validator": {
      globals: { URL: !0, clearInterval: !0, "console.error": !0, setInterval: !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/eth-query>json-rpc-random-id": !0,
        "@metamask/ppom-validator>@metamask/controller-utils": !0,
        "@metamask/ppom-validator>elliptic": !0,
        "await-semaphore": !0,
        "browserify>buffer": !0
      }
    },
    "@metamask/ppom-validator>@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "@metamask/ppom-validator>@metamask/controller-utils>@metamask/utils": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0,
        "ethjs>ethjs-unit": !0
      }
    },
    "@metamask/ppom-validator>@metamask/controller-utils>@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: { "@metamask/utils>@noble/hashes": !0, "browserify>buffer": !0, "nock>debug": !0, semver: !0, superstruct: !0 }
    },
    "@metamask/ppom-validator>elliptic": {
      packages: {
        "@metamask/ppom-validator>elliptic>brorand": !0,
        "@metamask/ppom-validator>elliptic>hmac-drbg": !0,
        "@metamask/ppom-validator>elliptic>minimalistic-assert": !0,
        "@metamask/ppom-validator>elliptic>minimalistic-crypto-utils": !0,
        "bn.js": !0,
        "ethereumjs-util>ethereum-cryptography>hash.js": !0,
        "pumpify>inherits": !0
      }
    },
    "@metamask/ppom-validator>elliptic>brorand": { globals: { crypto: !0, msCrypto: !0 }, packages: { "browserify>browser-resolve": !0 } },
    "@metamask/ppom-validator>elliptic>hmac-drbg": {
      packages: {
        "@metamask/ppom-validator>elliptic>minimalistic-assert": !0,
        "@metamask/ppom-validator>elliptic>minimalistic-crypto-utils": !0,
        "ethereumjs-util>ethereum-cryptography>hash.js": !0
      }
    },
    "@metamask/providers>@metamask/json-rpc-engine": {
      packages: {
        "@metamask/providers>@metamask/json-rpc-engine>@metamask/safe-event-emitter": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/utils": !0
      }
    },
    "@metamask/providers>@metamask/json-rpc-engine>@metamask/safe-event-emitter": {
      globals: { setTimeout: !0 },
      packages: { "webpack>events": !0 }
    },
    "@metamask/providers>@metamask/object-multiplex": {
      globals: { "console.warn": !0 },
      packages: { "@metamask/providers>@metamask/object-multiplex>readable-stream": !0, "pump>once": !0 }
    },
    "@metamask/providers>@metamask/object-multiplex>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "@metamask/providers>@metamask/rpc-errors": { packages: { "@metamask/utils": !0, "eth-rpc-errors>fast-safe-stringify": !0 } },
    "@metamask/queued-request-controller": {
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/selected-network-controller": !0
      }
    },
    "@metamask/rate-limit-controller": { globals: { setTimeout: !0 }, packages: { "@metamask/base-controller": !0, "eth-rpc-errors": !0 } },
    "@metamask/rpc-methods-flask>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/rpc-methods>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/safe-event-emitter": { globals: { setTimeout: !0 }, packages: { "webpack>events": !0 } },
    "@metamask/scure-bip39": {
      globals: { TextEncoder: !0 },
      packages: { "@metamask/scure-bip39>@noble/hashes": !0, "@metamask/utils>@scure/base": !0 }
    },
    "@metamask/scure-bip39>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "@metamask/selected-network-controller": {
      packages: { "@metamask/base-controller": !0, "@metamask/network-controller>@metamask/swappable-obj-proxy": !0 }
    },
    "@metamask/signature-controller": {
      globals: { "console.info": !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/logging-controller": !0,
        "@metamask/message-manager": !0,
        "browserify>buffer": !0,
        "eth-rpc-errors": !0,
        "ethereumjs-util": !0,
        lodash: !0,
        "webpack>events": !0
      }
    },
    "@metamask/smart-transactions-controller": {
      globals: { URLSearchParams: !0, clearInterval: !0, "console.error": !0, "console.log": !0, fetch: !0, setInterval: !0 },
      packages: {
        "@ethersproject/abi>@ethersproject/bytes": !0,
        "@ethersproject/bignumber": !0,
        "@ethersproject/providers": !0,
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/smart-transactions-controller>bignumber.js": !0,
        "fast-json-patch": !0,
        lodash: !0
      }
    },
    "@metamask/smart-transactions-controller>@metamask/controllers>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/smart-transactions-controller>bignumber.js": { globals: { crypto: !0, define: !0 } },
    "@metamask/snaps-controllers": {
      globals: {
        URL: !0,
        "chrome.offscreen.createDocument": !0,
        "chrome.offscreen.hasDocument": !0,
        clearTimeout: !0,
        "document.getElementById": !0,
        "fetch.bind": !0,
        setTimeout: !0
      },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/post-message-stream": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/object-multiplex": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-controllers>@metamask/permission-controller": !0,
        "@metamask/snaps-controllers>@xstate/fsm": !0,
        "@metamask/snaps-controllers>concat-stream": !0,
        "@metamask/snaps-controllers>get-npm-tarball-url": !0,
        "@metamask/snaps-controllers>gunzip-maybe": !0,
        "@metamask/snaps-controllers>nanoid": !0,
        "@metamask/snaps-controllers>readable-stream": !0,
        "@metamask/snaps-controllers>readable-web-to-node-stream": !0,
        "@metamask/snaps-controllers>tar-stream": !0,
        "@metamask/snaps-rpc-methods": !0,
        "@metamask/snaps-sdk": !0,
        "@metamask/snaps-utils": !0,
        "@metamask/snaps-utils>@metamask/snaps-registry": !0,
        "@metamask/utils": !0,
        "json-rpc-middleware-stream": !0
      }
    },
    "@metamask/snaps-controllers-flask>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/snaps-controllers>@metamask/permission-controller": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-controllers>nanoid": !0,
        "@metamask/utils": !0,
        "deep-freeze-strict": !0,
        immer: !0
      }
    },
    "@metamask/snaps-controllers>concat-stream": {
      packages: {
        "@metamask/snaps-controllers>readable-stream": !0,
        "browserify>buffer": !0,
        "browserify>concat-stream>typedarray": !0,
        "pumpify>inherits": !0,
        "terser>source-map-support>buffer-from": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe": {
      packages: {
        "@metamask/snaps-controllers>gunzip-maybe>browserify-zlib": !0,
        "@metamask/snaps-controllers>gunzip-maybe>is-deflate": !0,
        "@metamask/snaps-controllers>gunzip-maybe>is-gzip": !0,
        "@metamask/snaps-controllers>gunzip-maybe>peek-stream": !0,
        "@metamask/snaps-controllers>gunzip-maybe>pumpify": !0,
        "@metamask/snaps-controllers>gunzip-maybe>through2": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>browserify-zlib": {
      packages: {
        "@metamask/snaps-controllers>gunzip-maybe>browserify-zlib>pako": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>util": !0,
        "readable-stream": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>peek-stream": {
      packages: {
        "@metamask/snaps-controllers>gunzip-maybe>peek-stream>duplexify": !0,
        "@metamask/snaps-controllers>gunzip-maybe>peek-stream>through2": !0,
        "browserify>buffer": !0,
        "terser>source-map-support>buffer-from": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>peek-stream>duplexify": {
      packages: {
        "browserify>buffer": !0,
        "browserify>process": !0,
        "duplexify>stream-shift": !0,
        "end-of-stream": !0,
        "pumpify>inherits": !0,
        "readable-stream": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>peek-stream>through2": {
      packages: { "browserify>process": !0, "browserify>util": !0, "readable-stream": !0, "watchify>xtend": !0 }
    },
    "@metamask/snaps-controllers>gunzip-maybe>pumpify": {
      packages: {
        "@metamask/snaps-controllers>gunzip-maybe>pumpify>duplexify": !0,
        "@metamask/snaps-controllers>gunzip-maybe>pumpify>pump": !0,
        "pumpify>inherits": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>pumpify>duplexify": {
      packages: {
        "browserify>buffer": !0,
        "browserify>process": !0,
        "duplexify>stream-shift": !0,
        "end-of-stream": !0,
        "pumpify>inherits": !0,
        "readable-stream": !0
      }
    },
    "@metamask/snaps-controllers>gunzip-maybe>pumpify>pump": {
      packages: { "browserify>browser-resolve": !0, "end-of-stream": !0, "pump>once": !0 }
    },
    "@metamask/snaps-controllers>gunzip-maybe>through2": {
      packages: { "browserify>process": !0, "browserify>util": !0, "readable-stream": !0, "watchify>xtend": !0 }
    },
    "@metamask/snaps-controllers>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/snaps-controllers>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "@metamask/snaps-controllers>readable-web-to-node-stream": {
      packages: { "@metamask/snaps-controllers>readable-web-to-node-stream>readable-stream": !0 }
    },
    "@metamask/snaps-controllers>readable-web-to-node-stream>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "@metamask/snaps-controllers>tar-stream": {
      packages: {
        "@metamask/snaps-controllers>tar-stream>b4a": !0,
        "@metamask/snaps-controllers>tar-stream>fast-fifo": !0,
        "@metamask/snaps-controllers>tar-stream>streamx": !0,
        "browserify>browser-resolve": !0
      }
    },
    "@metamask/snaps-controllers>tar-stream>b4a": { globals: { TextDecoder: !0, TextEncoder: !0 } },
    "@metamask/snaps-controllers>tar-stream>streamx": {
      packages: {
        "@metamask/snaps-controllers>tar-stream>fast-fifo": !0,
        "@metamask/snaps-controllers>tar-stream>streamx>queue-tick": !0,
        "webpack>events": !0
      }
    },
    "@metamask/snaps-controllers>tar-stream>streamx>queue-tick": { globals: { queueMicrotask: !0 } },
    "@metamask/snaps-rpc-methods": {
      packages: {
        "@metamask/key-tree": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-rpc-methods>@metamask/permission-controller": !0,
        "@metamask/snaps-sdk": !0,
        "@metamask/snaps-utils": !0,
        "@metamask/utils": !0,
        "@metamask/utils>@noble/hashes": !0,
        superstruct: !0
      }
    },
    "@metamask/snaps-rpc-methods>@metamask/permission-controller": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-rpc-methods>@metamask/permission-controller>nanoid": !0,
        "@metamask/utils": !0,
        "deep-freeze-strict": !0,
        immer: !0
      }
    },
    "@metamask/snaps-rpc-methods>@metamask/permission-controller>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/snaps-sdk": { packages: { "@metamask/snaps-sdk>is-svg": !0, "@metamask/utils": !0, superstruct: !0 } },
    "@metamask/snaps-sdk>is-svg": { packages: { "@metamask/snaps-sdk>is-svg>fast-xml-parser": !0 } },
    "@metamask/snaps-sdk>is-svg>fast-xml-parser": {
      globals: { entityName: !0, val: !0 },
      packages: { "@metamask/snaps-sdk>is-svg>fast-xml-parser>strnum": !0 }
    },
    "@metamask/snaps-utils": {
      globals: {
        TextDecoder: !0,
        URL: !0,
        "console.error": !0,
        "console.log": !0,
        "console.warn": !0,
        crypto: !0,
        "document.body.appendChild": !0,
        "document.createElement": !0
      },
      packages: {
        "@metamask/key-tree": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-sdk": !0,
        "@metamask/snaps-sdk>is-svg": !0,
        "@metamask/snaps-utils>@metamask/permission-controller": !0,
        "@metamask/snaps-utils>cron-parser": !0,
        "@metamask/snaps-utils>fast-json-stable-stringify": !0,
        "@metamask/snaps-utils>rfdc": !0,
        "@metamask/snaps-utils>validate-npm-package-name": !0,
        "@metamask/utils": !0,
        "@metamask/utils>@noble/hashes": !0,
        "@metamask/utils>@scure/base": !0,
        "browserify>buffer": !0,
        "browserify>path-browserify": !0,
        "browserify>process": !0,
        chalk: !0,
        semver: !0,
        superstruct: !0
      }
    },
    "@metamask/snaps-utils>@metamask/permission-controller": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/base-controller": !0,
        "@metamask/controller-utils": !0,
        "@metamask/providers>@metamask/json-rpc-engine": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/snaps-utils>@metamask/permission-controller>nanoid": !0,
        "@metamask/utils": !0,
        "deep-freeze-strict": !0,
        immer: !0
      }
    },
    "@metamask/snaps-utils>@metamask/permission-controller>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "@metamask/snaps-utils>@metamask/snaps-registry": {
      packages: { "@metamask/key-tree>@noble/secp256k1": !0, "@metamask/utils": !0, superstruct: !0 }
    },
    "@metamask/snaps-utils>cron-parser": { packages: { "browserify>browser-resolve": !0, luxon: !0 } },
    "@metamask/snaps-utils>rfdc": { packages: { "browserify>buffer": !0 } },
    "@metamask/snaps-utils>validate-npm-package-name": { packages: { "@metamask/snaps-utils>validate-npm-package-name>builtins": !0 } },
    "@metamask/snaps-utils>validate-npm-package-name>builtins": { packages: { "browserify>process": !0, semver: !0 } },
    "@metamask/transaction-controller": {
      globals: { "console.error": !0, setTimeout: !0 },
      packages: {
        "@ethereumjs/common": !0,
        "@ethereumjs/tx": !0,
        "@ethersproject/abi": !0,
        "@metamask/gas-fee-controller": !0,
        "@metamask/metamask-eth-abis": !0,
        "@metamask/providers>@metamask/rpc-errors": !0,
        "@metamask/transaction-controller>@metamask/base-controller": !0,
        "@metamask/transaction-controller>@metamask/controller-utils": !0,
        "@metamask/transaction-controller>@metamask/eth-query": !0,
        "@metamask/transaction-controller>eth-method-registry": !0,
        "@metamask/transaction-controller>nonce-tracker": !0,
        "@metamask/utils": !0,
        "eth-json-rpc-filters>async-mutex": !0,
        "ethereumjs-util": !0,
        "fast-json-patch": !0,
        lodash: !0,
        uuid: !0,
        "webpack>events": !0
      }
    },
    "@metamask/transaction-controller>@metamask/base-controller": { globals: { setTimeout: !0 }, packages: { immer: !0 } },
    "@metamask/transaction-controller>@metamask/controller-utils": {
      globals: { URL: !0, "console.error": !0, fetch: !0, setTimeout: !0 },
      packages: {
        "@metamask/controller-utils>@spruceid/siwe-parser": !0,
        "@metamask/permission-controller>@metamask/controller-utils>@metamask/ethjs-unit": !0,
        "@metamask/utils": !0,
        "browserify>buffer": !0,
        "eslint>fast-deep-equal": !0,
        "eth-ens-namehash": !0,
        "ethereumjs-util": !0
      }
    },
    "@metamask/transaction-controller>@metamask/eth-query": {
      packages: { "@metamask/eth-query>json-rpc-random-id": !0, "watchify>xtend": !0 }
    },
    "@metamask/transaction-controller>eth-method-registry": {
      packages: { "@metamask/transaction-controller>eth-method-registry>ethjs": !0 }
    },
    "@metamask/transaction-controller>eth-method-registry>ethjs": {
      globals: { clearInterval: !0, setInterval: !0 },
      packages: {
        "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-abi": !0,
        "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-contract": !0,
        "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-query": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-provider-http": !0,
        "ethjs>ethjs-unit": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "ethjs>number-to-bn": !0
      }
    },
    "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-abi": {
      packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 }
    },
    "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-contract": {
      packages: {
        "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-contract>ethjs-abi": !0,
        "ethjs-contract>babel-runtime": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "promise-to-callback": !0
      }
    },
    "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-contract>ethjs-abi": {
      packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 }
    },
    "@metamask/transaction-controller>eth-method-registry>ethjs>ethjs-query": {
      globals: { console: !0 },
      packages: {
        "@metamask/ethjs-query>ethjs-format": !0,
        "@metamask/ethjs-query>ethjs-rpc": !0,
        "ethjs-contract>babel-runtime": !0,
        "promise-to-callback": !0
      }
    },
    "@metamask/transaction-controller>nonce-tracker": {
      packages: {
        "@ethersproject/providers": !0,
        "@metamask/network-controller>eth-block-tracker": !0,
        "@metamask/transaction-controller>nonce-tracker>async-mutex": !0,
        "browserify>assert": !0
      }
    },
    "@metamask/transaction-controller>nonce-tracker>async-mutex": {
      globals: { clearTimeout: !0, setTimeout: !0 },
      packages: { "mockttp>graphql-tag>tslib": !0 }
    },
    "@metamask/utils": {
      globals: { TextDecoder: !0, TextEncoder: !0 },
      packages: {
        "@metamask/utils>@noble/hashes": !0,
        "@metamask/utils>@scure/base": !0,
        "@metamask/utils>pony-cause": !0,
        "browserify>buffer": !0,
        "nock>debug": !0,
        semver: !0,
        superstruct: !0
      }
    },
    "@metamask/utils>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "@metamask/utils>@scure/base": { globals: { TextDecoder: !0, TextEncoder: !0 } },
    "@ngraveio/bc-ur": {
      packages: {
        "@ngraveio/bc-ur>@apocentre/alias-sampling": !0,
        "@ngraveio/bc-ur>bignumber.js": !0,
        "@ngraveio/bc-ur>cbor-sync": !0,
        "@ngraveio/bc-ur>crc": !0,
        "@ngraveio/bc-ur>jsbi": !0,
        "addons-linter>sha.js": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0
      }
    },
    "@ngraveio/bc-ur>assert>object-is": { packages: { "globalthis>define-properties": !0, "string.prototype.matchall>call-bind": !0 } },
    "@ngraveio/bc-ur>bignumber.js": { globals: { crypto: !0, define: !0 } },
    "@ngraveio/bc-ur>cbor-sync": { globals: { define: !0 }, packages: { "browserify>buffer": !0 } },
    "@ngraveio/bc-ur>crc": { packages: { "browserify>buffer": !0 } },
    "@ngraveio/bc-ur>jsbi": { globals: { define: !0 } },
    "@popperjs/core": {
      globals: {
        Element: !0,
        HTMLElement: !0,
        ShadowRoot: !0,
        "console.error": !0,
        "console.warn": !0,
        document: !0,
        "navigator.userAgent": !0
      }
    },
    "@reduxjs/toolkit": {
      globals: {
        AbortController: !0,
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: !0,
        __REDUX_DEVTOOLS_EXTENSION__: !0,
        "console.error": !0,
        "console.info": !0,
        "console.warn": !0
      },
      packages: { "@reduxjs/toolkit>reselect": !0, immer: !0, redux: !0, "redux-thunk": !0 }
    },
    "@segment/loosely-validate-event": {
      packages: {
        "@segment/loosely-validate-event>component-type": !0,
        "@segment/loosely-validate-event>join-component": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0
      }
    },
    "@sentry/browser": {
      globals: {
        TextDecoder: !0,
        TextEncoder: !0,
        XMLHttpRequest: !0,
        __SENTRY_DEBUG__: !0,
        __SENTRY_RELEASE__: !0,
        "indexedDB.open": !0,
        setTimeout: !0
      },
      packages: {
        "@sentry/browser>@sentry-internal/tracing": !0,
        "@sentry/browser>@sentry/core": !0,
        "@sentry/browser>@sentry/replay": !0,
        "@sentry/utils": !0
      }
    },
    "@sentry/browser>@sentry-internal/tracing": {
      globals: {
        Headers: !0,
        PerformanceObserver: !0,
        Request: !0,
        __SENTRY_DEBUG__: !0,
        addEventListener: !0,
        "performance.getEntriesByType": !0,
        removeEventListener: !0
      },
      packages: { "@sentry/browser>@sentry/core": !0, "@sentry/utils": !0 }
    },
    "@sentry/browser>@sentry/core": {
      globals: {
        __SENTRY_DEBUG__: !0,
        __SENTRY_TRACING__: !0,
        clearInterval: !0,
        clearTimeout: !0,
        "console.warn": !0,
        setInterval: !0,
        setTimeout: !0
      },
      packages: { "@sentry/utils": !0 }
    },
    "@sentry/browser>@sentry/replay": {
      globals: {
        Blob: !0,
        CSSConditionRule: !0,
        CSSGroupingRule: !0,
        CSSMediaRule: !0,
        CSSSupportsRule: !0,
        DragEvent: !0,
        Element: !0,
        FormData: !0,
        HTMLCanvasElement: !0,
        "HTMLElement.prototype": !0,
        HTMLFormElement: !0,
        HTMLImageElement: !0,
        "HTMLInputElement.prototype": !0,
        "HTMLOptionElement.prototype": !0,
        "HTMLSelectElement.prototype": !0,
        "HTMLTextAreaElement.prototype": !0,
        Headers: !0,
        ImageData: !0,
        MouseEvent: !0,
        MutationObserver: !0,
        "Node.prototype.contains": !0,
        PerformanceObserver: !0,
        TextEncoder: !0,
        URL: !0,
        URLSearchParams: !0,
        Worker: !0,
        Zone: !0,
        __SENTRY_DEBUG__: !0,
        __rrMutationObserver: !0,
        clearTimeout: !0,
        "console.error": !0,
        "console.warn": !0,
        document: !0,
        innerHeight: !0,
        innerWidth: !0,
        "location.href": !0,
        pageXOffset: !0,
        pageYOffset: !0,
        requestAnimationFrame: !0,
        setTimeout: !0
      },
      packages: { "@sentry/browser>@sentry/core": !0, "@sentry/utils": !0, "browserify>process": !0 }
    },
    "@sentry/integrations": {
      globals: { Request: !0, __SENTRY_DEBUG__: !0, "console.log": !0 },
      packages: { "@sentry/utils": !0, localforage: !0 }
    },
    "@sentry/utils": {
      globals: {
        CustomEvent: !0,
        DOMError: !0,
        DOMException: !0,
        Element: !0,
        ErrorEvent: !0,
        Event: !0,
        Headers: !0,
        Request: !0,
        Response: !0,
        TextEncoder: !0,
        URL: !0,
        "XMLHttpRequest.prototype": !0,
        __SENTRY_BROWSER_BUNDLE__: !0,
        __SENTRY_DEBUG__: !0,
        clearTimeout: !0,
        "console.error": !0,
        document: !0,
        new: !0,
        setTimeout: !0,
        target: !0
      },
      packages: { "browserify>process": !0 }
    },
    "@storybook/addon-knobs>qs": { packages: { "string.prototype.matchall>side-channel": !0 } },
    "@zxing/browser": {
      globals: {
        HTMLElement: !0,
        HTMLImageElement: !0,
        HTMLVideoElement: !0,
        "URL.createObjectURL": !0,
        clearTimeout: !0,
        "console.error": !0,
        "console.warn": !0,
        document: !0,
        navigator: !0,
        setTimeout: !0
      },
      packages: { "@zxing/library": !0 }
    },
    "@zxing/library": {
      globals: {
        TextDecoder: !0,
        TextEncoder: !0,
        btoa: !0,
        clearTimeout: !0,
        define: !0,
        "document.createElement": !0,
        "document.createElementNS": !0,
        "document.getElementById": !0,
        "navigator.mediaDevices.enumerateDevices": !0,
        "navigator.mediaDevices.getUserMedia": !0,
        setTimeout: !0
      }
    },
    "addons-linter>sha.js": { packages: { "koa>content-disposition>safe-buffer": !0, "pumpify>inherits": !0 } },
    "await-semaphore": { packages: { "browserify>process": !0, "browserify>timers-browserify": !0 } },
    "base32-encode": { packages: { "base32-encode>to-data-view": !0 } },
    "bignumber.js": { globals: { crypto: !0, define: !0 } },
    blo: { globals: { btoa: !0 } },
    "bn.js": { globals: { Buffer: !0 }, packages: { "browserify>browser-resolve": !0 } },
    bowser: { globals: { define: !0 } },
    "brfs>static-module>object-inspect": { globals: { HTMLElement: !0, WeakRef: !0 }, packages: { "browserify>browser-resolve": !0 } },
    "browserify>assert": { globals: { Buffer: !0 }, packages: { "browserify>assert>util": !0, "react>object-assign": !0 } },
    "browserify>assert>util": {
      globals: { "console.error": !0, "console.log": !0, "console.trace": !0, process: !0 },
      packages: { "browserify>assert>util>inherits": !0, "browserify>process": !0 }
    },
    "browserify>browser-resolve": { packages: { "ethjs-query>babel-runtime>core-js": !0 } },
    "browserify>browserify-zlib": {
      packages: {
        "browserify>assert": !0,
        "browserify>browserify-zlib>pako": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>util": !0,
        "stream-browserify": !0
      }
    },
    "browserify>buffer": { globals: { console: !0 }, packages: { "base64-js": !0, "browserify>buffer>ieee754": !0 } },
    "browserify>crypto-browserify": {
      packages: {
        "browserify>crypto-browserify>browserify-cipher": !0,
        "browserify>crypto-browserify>browserify-sign": !0,
        "browserify>crypto-browserify>create-ecdh": !0,
        "browserify>crypto-browserify>create-hmac": !0,
        "browserify>crypto-browserify>diffie-hellman": !0,
        "browserify>crypto-browserify>pbkdf2": !0,
        "browserify>crypto-browserify>public-encrypt": !0,
        "browserify>crypto-browserify>randomfill": !0,
        "ethereumjs-util>create-hash": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "browserify>crypto-browserify>browserify-cipher": {
      packages: {
        "browserify>crypto-browserify>browserify-cipher>browserify-des": !0,
        "browserify>crypto-browserify>browserify-cipher>evp_bytestokey": !0,
        "ethereumjs-util>ethereum-cryptography>browserify-aes": !0
      }
    },
    "browserify>crypto-browserify>browserify-cipher>browserify-des": {
      packages: {
        "browserify>buffer": !0,
        "browserify>crypto-browserify>browserify-cipher>browserify-des>des.js": !0,
        "ethereumjs-util>create-hash>cipher-base": !0,
        "pumpify>inherits": !0
      }
    },
    "browserify>crypto-browserify>browserify-cipher>browserify-des>des.js": {
      packages: { "@metamask/ppom-validator>elliptic>minimalistic-assert": !0, "pumpify>inherits": !0 }
    },
    "browserify>crypto-browserify>browserify-cipher>evp_bytestokey": {
      packages: { "ethereumjs-util>create-hash>md5.js": !0, "koa>content-disposition>safe-buffer": !0 }
    },
    "browserify>crypto-browserify>browserify-sign": {
      packages: {
        "@metamask/ppom-validator>elliptic": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify>create-hmac": !0,
        "browserify>crypto-browserify>public-encrypt>browserify-rsa": !0,
        "browserify>crypto-browserify>public-encrypt>parse-asn1": !0,
        "ethereumjs-util>create-hash": !0,
        "pumpify>inherits": !0,
        "stream-browserify": !0
      }
    },
    "browserify>crypto-browserify>create-ecdh": {
      packages: { "@metamask/ppom-validator>elliptic": !0, "bn.js": !0, "browserify>buffer": !0 }
    },
    "browserify>crypto-browserify>create-hmac": {
      packages: {
        "addons-linter>sha.js": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>create-hash>cipher-base": !0,
        "ethereumjs-util>create-hash>ripemd160": !0,
        "koa>content-disposition>safe-buffer": !0,
        "pumpify>inherits": !0
      }
    },
    "browserify>crypto-browserify>diffie-hellman": {
      packages: {
        "bn.js": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify>diffie-hellman>miller-rabin": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "browserify>crypto-browserify>diffie-hellman>miller-rabin": {
      packages: { "@metamask/ppom-validator>elliptic>brorand": !0, "bn.js": !0 }
    },
    "browserify>crypto-browserify>pbkdf2": {
      globals: { crypto: !0, process: !0, queueMicrotask: !0, setImmediate: !0, setTimeout: !0 },
      packages: {
        "addons-linter>sha.js": !0,
        "browserify>process": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>create-hash>ripemd160": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "browserify>crypto-browserify>public-encrypt": {
      packages: {
        "bn.js": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify>public-encrypt>browserify-rsa": !0,
        "browserify>crypto-browserify>public-encrypt>parse-asn1": !0,
        "ethereumjs-util>create-hash": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "browserify>crypto-browserify>public-encrypt>browserify-rsa": {
      packages: { "bn.js": !0, "browserify>buffer": !0, "mocha>serialize-javascript>randombytes": !0 }
    },
    "browserify>crypto-browserify>public-encrypt>parse-asn1": {
      packages: {
        "browserify>buffer": !0,
        "browserify>crypto-browserify>browserify-cipher>evp_bytestokey": !0,
        "browserify>crypto-browserify>pbkdf2": !0,
        "browserify>crypto-browserify>public-encrypt>parse-asn1>asn1.js": !0,
        "ethereumjs-util>ethereum-cryptography>browserify-aes": !0
      }
    },
    "browserify>crypto-browserify>public-encrypt>parse-asn1>asn1.js": {
      packages: {
        "@metamask/ppom-validator>elliptic>minimalistic-assert": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "browserify>vm-browserify": !0,
        "pumpify>inherits": !0
      }
    },
    "browserify>crypto-browserify>randomfill": {
      globals: { crypto: !0, msCrypto: !0 },
      packages: { "browserify>process": !0, "koa>content-disposition>safe-buffer": !0, "mocha>serialize-javascript>randombytes": !0 }
    },
    "browserify>has": { packages: { "browserify>has>function-bind": !0 } },
    "browserify>https-browserify": { packages: { "browserify>stream-http": !0, "browserify>url": !0 } },
    "browserify>path-browserify": { packages: { "browserify>process": !0 } },
    "browserify>process": { globals: { clearTimeout: !0, setTimeout: !0 } },
    "browserify>punycode": { globals: { define: !0 } },
    "browserify>stream-http": {
      globals: {
        AbortController: !0,
        Blob: !0,
        MSStreamReader: !0,
        ReadableStream: !0,
        WritableStream: !0,
        XDomainRequest: !0,
        XMLHttpRequest: !0,
        clearTimeout: !0,
        fetch: !0,
        "location.protocol.search": !0,
        setTimeout: !0
      },
      packages: {
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>stream-http>builtin-status-codes": !0,
        "browserify>stream-http>readable-stream": !0,
        "browserify>url": !0,
        "pumpify>inherits": !0,
        "watchify>xtend": !0
      }
    },
    "browserify>stream-http>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "browserify>string_decoder": { packages: { "koa>content-disposition>safe-buffer": !0 } },
    "browserify>timers-browserify": {
      globals: { clearInterval: !0, clearTimeout: !0, setInterval: !0, setTimeout: !0 },
      packages: { "browserify>process": !0 }
    },
    "browserify>url": { packages: { "@storybook/addon-knobs>qs": !0, "browserify>punycode": !0 } },
    "browserify>util": {
      globals: { "console.error": !0, "console.log": !0, "console.trace": !0 },
      packages: {
        "browserify>process": !0,
        "browserify>util>is-arguments": !0,
        "browserify>util>is-typed-array": !0,
        "browserify>util>which-typed-array": !0,
        "koa>is-generator-function": !0,
        "pumpify>inherits": !0
      }
    },
    "browserify>util>is-arguments": {
      packages: { "koa>is-generator-function>has-tostringtag": !0, "string.prototype.matchall>call-bind": !0 }
    },
    "browserify>util>is-typed-array": {
      packages: {
        "browserify>util>is-typed-array>for-each": !0,
        "koa>is-generator-function>has-tostringtag": !0,
        "string.prototype.matchall>call-bind": !0,
        "string.prototype.matchall>es-abstract>available-typed-arrays": !0,
        "string.prototype.matchall>es-abstract>gopd": !0
      }
    },
    "browserify>util>is-typed-array>for-each": { packages: { "string.prototype.matchall>es-abstract>is-callable": !0 } },
    "browserify>util>which-typed-array": {
      packages: {
        "browserify>util>is-typed-array": !0,
        "browserify>util>is-typed-array>for-each": !0,
        "koa>is-generator-function>has-tostringtag": !0,
        "string.prototype.matchall>call-bind": !0,
        "string.prototype.matchall>es-abstract>available-typed-arrays": !0,
        "string.prototype.matchall>es-abstract>gopd": !0
      }
    },
    "browserify>vm-browserify": {
      globals: { "document.body.appendChild": !0, "document.body.removeChild": !0, "document.createElement": !0 }
    },
    chalk: { packages: { "chalk>ansi-styles": !0, "chalk>supports-color": !0 } },
    "chalk>ansi-styles": { packages: { "chalk>ansi-styles>color-convert": !0 } },
    "chalk>ansi-styles>color-convert": { packages: { "jest-canvas-mock>moo-color>color-name": !0 } },
    classnames: { globals: { classNames: "write", define: !0 } },
    "copy-to-clipboard": {
      globals: {
        clipboardData: !0,
        "console.error": !0,
        "console.warn": !0,
        "document.body.appendChild": !0,
        "document.body.removeChild": !0,
        "document.createElement": !0,
        "document.createRange": !0,
        "document.execCommand": !0,
        "document.getSelection": !0,
        "navigator.userAgent": !0,
        prompt: !0
      },
      packages: { "copy-to-clipboard>toggle-selection": !0 }
    },
    "copy-to-clipboard>toggle-selection": { globals: { "document.activeElement": !0, "document.getSelection": !0 } },
    "currency-formatter": {
      packages: { "currency-formatter>accounting": !0, "currency-formatter>locale-currency": !0, "react>object-assign": !0 }
    },
    "currency-formatter>accounting": { globals: { define: !0 } },
    "currency-formatter>locale-currency": { globals: { countryCode: !0 } },
    "debounce-stream": { packages: { "debounce-stream>debounce": !0, "debounce-stream>duplexer": !0, "debounce-stream>through": !0 } },
    "debounce-stream>debounce": { globals: { clearTimeout: !0, setTimeout: !0 } },
    "debounce-stream>duplexer": { packages: { "stream-browserify": !0 } },
    "debounce-stream>through": { packages: { "browserify>process": !0, "stream-browserify": !0 } },
    "depcheck>@vue/compiler-sfc>postcss>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "dependency-tree>precinct>detective-postcss>postcss>nanoid": { globals: { "crypto.getRandomValues": !0 } },
    "end-of-stream": { packages: { "browserify>process": !0, "pump>once": !0 } },
    "eslint>optionator>fast-levenshtein": {
      globals: { Intl: !0, Levenshtein: "write", "console.log": !0, define: !0, importScripts: !0, postMessage: !0 }
    },
    "eth-ens-namehash": {
      globals: { name: "write" },
      packages: { "browserify>buffer": !0, "eth-ens-namehash>idna-uts46-hx": !0, "eth-ens-namehash>js-sha3": !0 }
    },
    "eth-ens-namehash>idna-uts46-hx": { globals: { define: !0 }, packages: { "browserify>punycode": !0 } },
    "eth-ens-namehash>js-sha3": { packages: { "browserify>process": !0 } },
    "eth-json-rpc-filters": {
      globals: { "console.error": !0 },
      packages: {
        "@metamask/safe-event-emitter": !0,
        "eth-json-rpc-filters>async-mutex": !0,
        "eth-json-rpc-filters>eth-query": !0,
        "json-rpc-engine": !0,
        pify: !0
      }
    },
    "eth-json-rpc-filters>async-mutex": { globals: { setTimeout: !0 }, packages: { "mockttp>graphql-tag>tslib": !0 } },
    "eth-json-rpc-filters>eth-query": {
      packages: { "@metamask/eth-query>json-rpc-random-id": !0, "nock>debug": !0, "watchify>xtend": !0 }
    },
    "eth-keyring-controller>@metamask/browser-passworder": { globals: { crypto: !0 } },
    "eth-lattice-keyring": {
      globals: { addEventListener: !0, browser: !0, clearInterval: !0, fetch: !0, open: !0, setInterval: !0 },
      packages: {
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "browserify>crypto-browserify": !0,
        "eth-lattice-keyring>@ethereumjs/tx": !0,
        "eth-lattice-keyring>gridplus-sdk": !0,
        "eth-lattice-keyring>rlp": !0,
        "webpack>events": !0
      }
    },
    "eth-lattice-keyring>@ethereumjs/tx": {
      packages: {
        "@ethereumjs/common": !0,
        "@ethereumjs/tx>@ethereumjs/rlp": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethersproject/providers": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz": !0,
        "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography": !0
      }
    },
    "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz": {
      packages: {
        browserify: !0,
        "browserify>buffer": !0,
        "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz>@chainsafe/persistent-merkle-tree": !0,
        "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz>case": !0
      }
    },
    "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz>@chainsafe/persistent-merkle-tree": {
      globals: { WeakRef: !0 },
      packages: { browserify: !0 }
    },
    "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography": {
      globals: { TextDecoder: !0, crypto: !0 },
      packages: { "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes": !0 }
    },
    "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "eth-lattice-keyring>gridplus-sdk": {
      globals: {
        AbortController: !0,
        Request: !0,
        URL: !0,
        __values: !0,
        caches: !0,
        clearTimeout: !0,
        "console.error": !0,
        "console.log": !0,
        "console.warn": !0,
        fetch: !0,
        setTimeout: !0
      },
      packages: {
        "@ethereumjs/common>crc-32": !0,
        "@ethersproject/abi": !0,
        "@metamask/ppom-validator>elliptic": !0,
        "bn.js": !0,
        "browserify>buffer": !0,
        "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common": !0,
        "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx": !0,
        "eth-lattice-keyring>gridplus-sdk>aes-js": !0,
        "eth-lattice-keyring>gridplus-sdk>bech32": !0,
        "eth-lattice-keyring>gridplus-sdk>bignumber.js": !0,
        "eth-lattice-keyring>gridplus-sdk>bitwise": !0,
        "eth-lattice-keyring>gridplus-sdk>borc": !0,
        "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser": !0,
        "eth-lattice-keyring>gridplus-sdk>js-sha3": !0,
        "eth-lattice-keyring>gridplus-sdk>rlp": !0,
        "eth-lattice-keyring>gridplus-sdk>secp256k1": !0,
        "eth-lattice-keyring>gridplus-sdk>uuid": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check": !0,
        "ethereumjs-util>ethereum-cryptography>hash.js": !0,
        lodash: !0
      }
    },
    "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common": {
      packages: { "@ethereumjs/common>crc-32": !0, "@ethereumjs/tx>@ethereumjs/util": !0, "browserify>buffer": !0, "webpack>events": !0 }
    },
    "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx": {
      packages: {
        "@ethereumjs/tx>@ethereumjs/rlp": !0,
        "@ethereumjs/tx>@ethereumjs/util": !0,
        "@ethersproject/providers": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "eth-lattice-keyring>@ethereumjs/tx>@chainsafe/ssz": !0,
        "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>@ethereumjs/common": !0,
        "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>ethereum-cryptography": !0
      }
    },
    "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>@ethereumjs/common": {
      packages: { "@ethereumjs/common>crc-32": !0, "@ethereumjs/tx>@ethereumjs/util": !0, "browserify>buffer": !0, "webpack>events": !0 }
    },
    "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>ethereum-cryptography": {
      globals: { TextDecoder: !0, crypto: !0 },
      packages: { "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>ethereum-cryptography>@noble/hashes": !0 }
    },
    "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx>ethereum-cryptography>@noble/hashes": { globals: { TextEncoder: !0, crypto: !0 } },
    "eth-lattice-keyring>gridplus-sdk>aes-js": { globals: { define: !0 } },
    "eth-lattice-keyring>gridplus-sdk>bignumber.js": { globals: { crypto: !0, define: !0 } },
    "eth-lattice-keyring>gridplus-sdk>bitwise": { packages: { "browserify>buffer": !0 } },
    "eth-lattice-keyring>gridplus-sdk>borc": {
      globals: { console: !0 },
      packages: {
        "browserify>buffer": !0,
        "browserify>buffer>ieee754": !0,
        "eth-lattice-keyring>gridplus-sdk>borc>bignumber.js": !0,
        "eth-lattice-keyring>gridplus-sdk>borc>iso-url": !0
      }
    },
    "eth-lattice-keyring>gridplus-sdk>borc>bignumber.js": { globals: { crypto: !0, define: !0 } },
    "eth-lattice-keyring>gridplus-sdk>borc>iso-url": { globals: { URL: !0, URLSearchParams: !0, location: !0 } },
    "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser": {
      globals: { intToBuffer: !0 },
      packages: {
        "bn.js": !0,
        "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser>buffer": !0,
        "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser>js-sha3": !0
      }
    },
    "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser>buffer": {
      globals: { console: !0 },
      packages: { "base64-js": !0, "browserify>buffer>ieee754": !0 }
    },
    "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser>js-sha3": { globals: { define: !0 }, packages: { "browserify>process": !0 } },
    "eth-lattice-keyring>gridplus-sdk>js-sha3": { globals: { define: !0 }, packages: { "browserify>process": !0 } },
    "eth-lattice-keyring>gridplus-sdk>rlp": { globals: { TextEncoder: !0 } },
    "eth-lattice-keyring>gridplus-sdk>secp256k1": { packages: { "@metamask/ppom-validator>elliptic": !0 } },
    "eth-lattice-keyring>gridplus-sdk>uuid": { globals: { crypto: !0 } },
    "eth-lattice-keyring>rlp": { globals: { TextEncoder: !0 } },
    "eth-method-registry": { packages: { ethjs: !0 } },
    "eth-rpc-errors": { packages: { "eth-rpc-errors>fast-safe-stringify": !0 } },
    "eth-sig-util": {
      packages: {
        "browserify>buffer": !0,
        "eth-sig-util>ethereumjs-util": !0,
        "eth-sig-util>tweetnacl": !0,
        "eth-sig-util>tweetnacl-util": !0,
        "ethereumjs-abi": !0
      }
    },
    "eth-sig-util>ethereumjs-util": {
      packages: {
        "@metamask/ppom-validator>elliptic": !0,
        "bn.js": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "eth-sig-util>ethereumjs-util>ethereum-cryptography": !0,
        "eth-sig-util>ethereumjs-util>ethjs-util": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>rlp": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "eth-sig-util>ethereumjs-util>ethereum-cryptography": {
      packages: {
        "browserify>buffer": !0,
        "ethereumjs-util>ethereum-cryptography>keccak": !0,
        "ethereumjs-util>ethereum-cryptography>secp256k1": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "eth-sig-util>ethereumjs-util>ethjs-util": {
      packages: { "browserify>buffer": !0, "ethjs>ethjs-util>is-hex-prefixed": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 }
    },
    "eth-sig-util>tweetnacl": { globals: { crypto: !0, msCrypto: !0, nacl: "write" }, packages: { "browserify>browser-resolve": !0 } },
    "eth-sig-util>tweetnacl-util": { globals: { atob: !0, btoa: !0 }, packages: { "browserify>browser-resolve": !0 } },
    "ethereumjs-abi": { packages: { "bn.js": !0, "browserify>buffer": !0, "ethereumjs-abi>ethereumjs-util": !0 } },
    "ethereumjs-abi>ethereumjs-util": {
      packages: {
        "@metamask/ppom-validator>elliptic": !0,
        "bn.js": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "ethereumjs-abi>ethereumjs-util>ethereum-cryptography": !0,
        "ethereumjs-abi>ethereumjs-util>ethjs-util": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>rlp": !0
      }
    },
    "ethereumjs-abi>ethereumjs-util>ethereum-cryptography": {
      packages: {
        "browserify>buffer": !0,
        "ethereumjs-util>ethereum-cryptography>keccak": !0,
        "ethereumjs-util>ethereum-cryptography>secp256k1": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "ethereumjs-abi>ethereumjs-util>ethjs-util": {
      packages: { "browserify>buffer": !0, "ethjs>ethjs-util>is-hex-prefixed": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 }
    },
    "ethereumjs-util": {
      packages: {
        "bn.js": !0,
        "browserify>assert": !0,
        "browserify>buffer": !0,
        "browserify>insert-module-globals>is-buffer": !0,
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>ethereum-cryptography": !0,
        "ethereumjs-util>rlp": !0
      }
    },
    "ethereumjs-util>create-hash": {
      packages: {
        "addons-linter>sha.js": !0,
        "ethereumjs-util>create-hash>cipher-base": !0,
        "ethereumjs-util>create-hash>md5.js": !0,
        "ethereumjs-util>create-hash>ripemd160": !0,
        "pumpify>inherits": !0
      }
    },
    "ethereumjs-util>create-hash>cipher-base": {
      packages: {
        "browserify>string_decoder": !0,
        "koa>content-disposition>safe-buffer": !0,
        "pumpify>inherits": !0,
        "stream-browserify": !0
      }
    },
    "ethereumjs-util>create-hash>md5.js": {
      packages: { "ethereumjs-util>create-hash>md5.js>hash-base": !0, "koa>content-disposition>safe-buffer": !0, "pumpify>inherits": !0 }
    },
    "ethereumjs-util>create-hash>md5.js>hash-base": {
      packages: {
        "ethereumjs-util>create-hash>md5.js>hash-base>readable-stream": !0,
        "koa>content-disposition>safe-buffer": !0,
        "pumpify>inherits": !0
      }
    },
    "ethereumjs-util>create-hash>md5.js>hash-base>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "ethereumjs-util>create-hash>ripemd160": {
      packages: { "browserify>buffer": !0, "ethereumjs-util>create-hash>md5.js>hash-base": !0, "pumpify>inherits": !0 }
    },
    "ethereumjs-util>ethereum-cryptography": {
      packages: {
        "browserify>buffer": !0,
        "ethereumjs-util>ethereum-cryptography>keccak": !0,
        "ethereumjs-util>ethereum-cryptography>secp256k1": !0,
        "mocha>serialize-javascript>randombytes": !0
      }
    },
    "ethereumjs-util>ethereum-cryptography>browserify-aes": {
      packages: {
        "browserify>buffer": !0,
        "browserify>crypto-browserify>browserify-cipher>evp_bytestokey": !0,
        "ethereumjs-util>create-hash>cipher-base": !0,
        "ethereumjs-util>ethereum-cryptography>browserify-aes>buffer-xor": !0,
        "koa>content-disposition>safe-buffer": !0,
        "pumpify>inherits": !0
      }
    },
    "ethereumjs-util>ethereum-cryptography>browserify-aes>buffer-xor": { packages: { "browserify>buffer": !0 } },
    "ethereumjs-util>ethereum-cryptography>bs58check": {
      packages: {
        "ethereumjs-util>create-hash": !0,
        "ethereumjs-util>ethereum-cryptography>bs58check>bs58": !0,
        "koa>content-disposition>safe-buffer": !0
      }
    },
    "ethereumjs-util>ethereum-cryptography>bs58check>bs58": { packages: { "@ensdomains/content-hash>multihashes>multibase>base-x": !0 } },
    "ethereumjs-util>ethereum-cryptography>hash.js": {
      packages: { "@metamask/ppom-validator>elliptic>minimalistic-assert": !0, "pumpify>inherits": !0 }
    },
    "ethereumjs-util>ethereum-cryptography>keccak": {
      packages: { "browserify>buffer": !0, "ethereumjs-util>ethereum-cryptography>keccak>readable-stream": !0 }
    },
    "ethereumjs-util>ethereum-cryptography>keccak>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "ethereumjs-util>ethereum-cryptography>scrypt-js": {
      globals: { define: !0, setTimeout: !0 },
      packages: { "browserify>timers-browserify": !0 }
    },
    "ethereumjs-util>ethereum-cryptography>secp256k1": { packages: { "@metamask/ppom-validator>elliptic": !0 } },
    "ethereumjs-util>rlp": { packages: { "bn.js": !0, "browserify>buffer": !0 } },
    "ethereumjs-wallet>randombytes": { globals: { "crypto.getRandomValues": !0 } },
    ethjs: {
      globals: { clearInterval: !0, setInterval: !0 },
      packages: {
        "bn.js": !0,
        "browserify>buffer": !0,
        "ethjs-contract": !0,
        "ethjs>ethjs-abi": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-provider-http": !0,
        "ethjs>ethjs-query": !0,
        "ethjs>ethjs-unit": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "ethjs>number-to-bn": !0
      }
    },
    "ethjs-contract": {
      packages: {
        "ethjs-contract>babel-runtime": !0,
        "ethjs-contract>ethjs-abi": !0,
        "ethjs>ethjs-filter": !0,
        "ethjs>ethjs-util": !0,
        "ethjs>js-sha3": !0,
        "promise-to-callback": !0
      }
    },
    "ethjs-contract>babel-runtime": {
      packages: { "ethjs-contract>babel-runtime>core-js": !0, "ethjs-contract>babel-runtime>regenerator-runtime": !0 }
    },
    "ethjs-contract>babel-runtime>core-js": {
      globals: { PromiseRejectionEvent: !0, __e: "write", __g: "write", "document.createTextNode": !0, postMessage: !0, setTimeout: !0 }
    },
    "ethjs-contract>babel-runtime>regenerator-runtime": { globals: { regeneratorRuntime: "write" } },
    "ethjs-contract>ethjs-abi": { packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 } },
    "ethjs-query>babel-runtime": { packages: { "@babel/runtime": !0 } },
    "ethjs>ethjs-abi": { packages: { "bn.js": !0, "browserify>buffer": !0, "ethjs>js-sha3": !0, "ethjs>number-to-bn": !0 } },
    "ethjs>ethjs-filter": { globals: { clearInterval: !0, setInterval: !0 } },
    "ethjs>ethjs-provider-http": { packages: { "ethjs>ethjs-provider-http>xhr2": !0 } },
    "ethjs>ethjs-provider-http>xhr2": { globals: { XMLHttpRequest: !0 } },
    "ethjs>ethjs-query": {
      globals: { console: !0 },
      packages: { "@metamask/ethjs-query>ethjs-format": !0, "@metamask/ethjs-query>ethjs-rpc": !0, "promise-to-callback": !0 }
    },
    "ethjs>ethjs-unit": { packages: { "bn.js": !0, "ethjs>number-to-bn": !0 } },
    "ethjs>ethjs-util": {
      packages: { "browserify>buffer": !0, "ethjs>ethjs-util>is-hex-prefixed": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 }
    },
    "ethjs>ethjs-util>strip-hex-prefix": { packages: { "ethjs>ethjs-util>is-hex-prefixed": !0 } },
    "ethjs>js-sha3": { packages: { "browserify>process": !0 } },
    "ethjs>number-to-bn": { packages: { "bn.js": !0, "ethjs>ethjs-util>strip-hex-prefix": !0 } },
    "extension-port-stream": { packages: { "browserify>buffer": !0, "extension-port-stream>readable-stream": !0 } },
    "extension-port-stream>readable-stream": {
      globals: { AbortController: !0, AggregateError: !0, Blob: !0, new: !0, target: !0 },
      packages: {
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "extension-port-stream>readable-stream>abort-controller": !0,
        "webpack>events": !0
      }
    },
    "extension-port-stream>readable-stream>abort-controller": { globals: { AbortController: !0 } },
    "fast-json-patch": { globals: { addEventListener: !0, clearTimeout: !0, removeEventListener: !0, setTimeout: !0 } },
    "fuse.js": { globals: { console: !0, define: !0 } },
    "globalthis>define-properties": {
      packages: { "globalthis>define-properties>has-property-descriptors": !0, "globalthis>define-properties>object-keys": !0 }
    },
    "globalthis>define-properties>has-property-descriptors": { packages: { "string.prototype.matchall>get-intrinsic": !0 } },
    "json-rpc-engine": { packages: { "@metamask/safe-event-emitter": !0, "eth-rpc-errors": !0 } },
    "json-rpc-middleware-stream": {
      globals: { "console.warn": !0, setTimeout: !0 },
      packages: { "json-rpc-middleware-stream>@metamask/safe-event-emitter": !0, "json-rpc-middleware-stream>readable-stream": !0 }
    },
    "json-rpc-middleware-stream>@metamask/safe-event-emitter": { globals: { setTimeout: !0 }, packages: { "webpack>events": !0 } },
    "json-rpc-middleware-stream>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "koa>content-disposition>safe-buffer": { packages: { "browserify>buffer": !0 } },
    "koa>is-generator-function": { packages: { "koa>is-generator-function>has-tostringtag": !0 } },
    "koa>is-generator-function>has-tostringtag": { packages: { "string.prototype.matchall>has-symbols": !0 } },
    "lavamoat>json-stable-stringify": { packages: { "lavamoat>json-stable-stringify>jsonify": !0 } },
    localforage: {
      globals: {
        Blob: !0,
        BlobBuilder: !0,
        FileReader: !0,
        IDBKeyRange: !0,
        MSBlobBuilder: !0,
        MozBlobBuilder: !0,
        OIndexedDB: !0,
        WebKitBlobBuilder: !0,
        atob: !0,
        btoa: !0,
        "console.error": !0,
        "console.info": !0,
        "console.warn": !0,
        define: !0,
        fetch: !0,
        indexedDB: !0,
        localStorage: !0,
        mozIndexedDB: !0,
        msIndexedDB: !0,
        "navigator.platform": !0,
        "navigator.userAgent": !0,
        openDatabase: !0,
        setTimeout: !0,
        webkitIndexedDB: !0
      }
    },
    lodash: { globals: { clearTimeout: !0, define: !0, setTimeout: !0 } },
    loglevel: { globals: { console: !0, define: !0, "document.cookie": !0, localStorage: !0, log: "write", navigator: !0 } },
    luxon: { globals: { Intl: !0 } },
    "mocha>serialize-javascript>randombytes": {
      globals: { crypto: !0, msCrypto: !0 },
      packages: { "browserify>process": !0, "koa>content-disposition>safe-buffer": !0 }
    },
    "mockttp>graphql-tag>tslib": { globals: { SuppressedError: !0, define: !0 } },
    nanoid: { globals: { crypto: !0, msCrypto: !0, navigator: !0 } },
    "nock>debug": {
      globals: { console: !0, document: !0, localStorage: !0, navigator: !0, process: !0 },
      packages: { "browserify>process": !0, "nock>debug>ms": !0 }
    },
    "node-fetch": { globals: { Headers: !0, Request: !0, Response: !0, fetch: !0 } },
    "obj-multiplex": { globals: { "console.warn": !0 }, packages: { "end-of-stream": !0, "pump>once": !0, "readable-stream": !0 } },
    "promise-to-callback": { packages: { "promise-to-callback>is-fn": !0, "promise-to-callback>set-immediate-shim": !0 } },
    "promise-to-callback>set-immediate-shim": { globals: { "setTimeout.apply": !0 }, packages: { "browserify>timers-browserify": !0 } },
    "prop-types": { globals: { console: !0 }, packages: { "prop-types>react-is": !0, "react>object-assign": !0 } },
    "prop-types>react-is": { globals: { console: !0 } },
    pump: { packages: { "browserify>browser-resolve": !0, "browserify>process": !0, "end-of-stream": !0, "pump>once": !0 } },
    "pump>once": { packages: { "pump>once>wrappy": !0 } },
    "qrcode-generator": { globals: { define: !0 } },
    "qrcode.react": { globals: { Path2D: !0, devicePixelRatio: !0 }, packages: { "prop-types": !0, "qrcode.react>qr.js": !0, react: !0 } },
    react: { globals: { console: !0 }, packages: { "prop-types": !0, "react>object-assign": !0 } },
    "react-devtools": { packages: { "react-devtools>react-devtools-core": !0 } },
    "react-devtools>react-devtools-core": { globals: { WebSocket: !0, setTimeout: !0 } },
    "react-dnd-html5-backend": { globals: { addEventListener: !0, clearTimeout: !0, removeEventListener: !0 } },
    "react-dom": {
      globals: {
        HTMLIFrameElement: !0,
        MSApp: !0,
        __REACT_DEVTOOLS_GLOBAL_HOOK__: !0,
        addEventListener: !0,
        clearTimeout: !0,
        clipboardData: !0,
        console: !0,
        dispatchEvent: !0,
        document: !0,
        event: "write",
        jest: !0,
        "location.protocol": !0,
        "navigator.userAgent.indexOf": !0,
        performance: !0,
        removeEventListener: !0,
        self: !0,
        setTimeout: !0,
        top: !0,
        trustedTypes: !0
      },
      packages: { "prop-types": !0, react: !0, "react-dom>scheduler": !0, "react>object-assign": !0 }
    },
    "react-dom>scheduler": {
      globals: {
        MessageChannel: !0,
        cancelAnimationFrame: !0,
        clearTimeout: !0,
        console: !0,
        navigator: !0,
        performance: !0,
        requestAnimationFrame: !0,
        setTimeout: !0
      }
    },
    "react-focus-lock": {
      globals: { addEventListener: !0, "console.error": !0, "console.warn": !0, document: !0, removeEventListener: !0, setTimeout: !0 },
      packages: {
        "@babel/runtime": !0,
        "prop-types": !0,
        react: !0,
        "react-focus-lock>focus-lock": !0,
        "react-focus-lock>react-clientside-effect": !0,
        "react-focus-lock>use-callback-ref": !0,
        "react-focus-lock>use-sidecar": !0
      }
    },
    "react-focus-lock>focus-lock": {
      globals: {
        HTMLIFrameElement: !0,
        "Node.DOCUMENT_FRAGMENT_NODE": !0,
        "Node.DOCUMENT_NODE": !0,
        "Node.DOCUMENT_POSITION_CONTAINED_BY": !0,
        "Node.DOCUMENT_POSITION_CONTAINS": !0,
        "Node.ELEMENT_NODE": !0,
        "console.error": !0,
        "console.warn": !0,
        document: !0,
        getComputedStyle: !0,
        setTimeout: !0
      },
      packages: { "mockttp>graphql-tag>tslib": !0 }
    },
    "react-focus-lock>react-clientside-effect": { packages: { "@babel/runtime": !0, react: !0 } },
    "react-focus-lock>use-callback-ref": { packages: { react: !0 } },
    "react-focus-lock>use-sidecar": {
      globals: { "console.error": !0 },
      packages: { "mockttp>graphql-tag>tslib": !0, react: !0, "react-focus-lock>use-sidecar>detect-node-es": !0 }
    },
    "react-idle-timer": { globals: { clearTimeout: !0, document: !0, setTimeout: !0 }, packages: { "prop-types": !0, react: !0 } },
    "react-inspector": { globals: { Node: !0, chromeDark: !0, chromeLight: !0 }, packages: { react: !0 } },
    "react-markdown": {
      globals: { "console.warn": !0 },
      packages: {
        "prop-types": !0,
        react: !0,
        "react-markdown>comma-separated-tokens": !0,
        "react-markdown>property-information": !0,
        "react-markdown>react-is": !0,
        "react-markdown>remark-parse": !0,
        "react-markdown>remark-rehype": !0,
        "react-markdown>space-separated-tokens": !0,
        "react-markdown>style-to-object": !0,
        "react-markdown>unified": !0,
        "react-markdown>unist-util-visit": !0,
        "react-markdown>vfile": !0
      }
    },
    "react-markdown>property-information": { packages: { "watchify>xtend": !0 } },
    "react-markdown>react-is": { globals: { console: !0 } },
    "react-markdown>remark-parse": { packages: { "react-markdown>remark-parse>mdast-util-from-markdown": !0 } },
    "react-markdown>remark-parse>mdast-util-from-markdown": {
      packages: {
        "react-markdown>remark-parse>mdast-util-from-markdown>mdast-util-to-string": !0,
        "react-markdown>remark-parse>mdast-util-from-markdown>micromark": !0,
        "react-markdown>remark-parse>mdast-util-from-markdown>unist-util-stringify-position": !0,
        "react-syntax-highlighter>refractor>parse-entities": !0
      }
    },
    "react-markdown>remark-parse>mdast-util-from-markdown>micromark": {
      packages: { "react-syntax-highlighter>refractor>parse-entities": !0 }
    },
    "react-markdown>remark-rehype": { packages: { "react-markdown>remark-rehype>mdast-util-to-hast": !0 } },
    "react-markdown>remark-rehype>mdast-util-to-hast": {
      globals: { "console.warn": !0 },
      packages: {
        "react-markdown>remark-rehype>mdast-util-to-hast>mdast-util-definitions": !0,
        "react-markdown>remark-rehype>mdast-util-to-hast>mdurl": !0,
        "react-markdown>remark-rehype>mdast-util-to-hast>unist-builder": !0,
        "react-markdown>remark-rehype>mdast-util-to-hast>unist-util-generated": !0,
        "react-markdown>remark-rehype>mdast-util-to-hast>unist-util-position": !0,
        "react-markdown>unist-util-visit": !0
      }
    },
    "react-markdown>remark-rehype>mdast-util-to-hast>mdast-util-definitions": { packages: { "react-markdown>unist-util-visit": !0 } },
    "react-markdown>style-to-object": { packages: { "react-markdown>style-to-object>inline-style-parser": !0 } },
    "react-markdown>unified": {
      packages: {
        "mocha>yargs-unparser>is-plain-obj": !0,
        "react-markdown>unified>bail": !0,
        "react-markdown>unified>extend": !0,
        "react-markdown>unified>is-buffer": !0,
        "react-markdown>unified>trough": !0,
        "react-markdown>vfile": !0
      }
    },
    "react-markdown>unist-util-visit": { packages: { "react-markdown>unist-util-visit>unist-util-visit-parents": !0 } },
    "react-markdown>unist-util-visit>unist-util-visit-parents": { packages: { "react-markdown>unist-util-visit>unist-util-is": !0 } },
    "react-markdown>vfile": {
      packages: {
        "browserify>path-browserify": !0,
        "browserify>process": !0,
        "react-markdown>vfile>is-buffer": !0,
        "react-markdown>vfile>vfile-message": !0,
        "vinyl>replace-ext": !0
      }
    },
    "react-markdown>vfile>vfile-message": { packages: { "react-markdown>vfile>unist-util-stringify-position": !0 } },
    "react-popper": {
      globals: { document: !0 },
      packages: { "@popperjs/core": !0, react: !0, "react-popper>react-fast-compare": !0, "react-popper>warning": !0 }
    },
    "react-popper>react-fast-compare": { globals: { Element: !0, "console.warn": !0 } },
    "react-popper>warning": { globals: { console: !0 } },
    "react-redux": {
      globals: { console: !0, document: !0 },
      packages: {
        "@babel/runtime": !0,
        "prop-types": !0,
        "prop-types>react-is": !0,
        react: !0,
        "react-dom": !0,
        "react-redux>hoist-non-react-statics": !0,
        redux: !0
      }
    },
    "react-redux>hoist-non-react-statics": { packages: { "prop-types>react-is": !0 } },
    "react-responsive-carousel": {
      globals: {
        HTMLElement: !0,
        addEventListener: !0,
        clearTimeout: !0,
        "console.warn": !0,
        document: !0,
        getComputedStyle: !0,
        removeEventListener: !0,
        setTimeout: !0
      },
      packages: { classnames: !0, react: !0, "react-dom": !0, "react-responsive-carousel>react-easy-swipe": !0 }
    },
    "react-responsive-carousel>react-easy-swipe": {
      globals: { addEventListener: !0, define: !0, "document.addEventListener": !0, "document.removeEventListener": !0 },
      packages: { "prop-types": !0, react: !0 }
    },
    "react-router-dom": {
      packages: {
        "prop-types": !0,
        react: !0,
        "react-router-dom>history": !0,
        "react-router-dom>react-router": !0,
        "react-router-dom>tiny-invariant": !0,
        "react-router-dom>tiny-warning": !0
      }
    },
    "react-router-dom>history": {
      globals: {
        addEventListener: !0,
        confirm: !0,
        document: !0,
        history: !0,
        location: !0,
        "navigator.userAgent": !0,
        removeEventListener: !0
      },
      packages: {
        "react-router-dom>history>resolve-pathname": !0,
        "react-router-dom>history>value-equal": !0,
        "react-router-dom>tiny-invariant": !0,
        "react-router-dom>tiny-warning": !0
      }
    },
    "react-router-dom>react-router": {
      packages: {
        "prop-types": !0,
        "prop-types>react-is": !0,
        react: !0,
        "react-redux>hoist-non-react-statics": !0,
        "react-router-dom>react-router>history": !0,
        "react-router-dom>react-router>mini-create-react-context": !0,
        "react-router-dom>tiny-invariant": !0,
        "react-router-dom>tiny-warning": !0,
        "sinon>nise>path-to-regexp": !0
      }
    },
    "react-router-dom>react-router>history": {
      globals: {
        addEventListener: !0,
        confirm: !0,
        document: !0,
        history: !0,
        location: !0,
        "navigator.userAgent": !0,
        removeEventListener: !0
      },
      packages: {
        "react-router-dom>history>resolve-pathname": !0,
        "react-router-dom>history>value-equal": !0,
        "react-router-dom>tiny-invariant": !0,
        "react-router-dom>tiny-warning": !0
      }
    },
    "react-router-dom>react-router>mini-create-react-context": {
      packages: {
        "@babel/runtime": !0,
        "prop-types": !0,
        react: !0,
        "react-router-dom>react-router>mini-create-react-context>gud": !0,
        "react-router-dom>tiny-warning": !0
      }
    },
    "react-router-dom>tiny-warning": { globals: { console: !0 } },
    "react-simple-file-input": { globals: { File: !0, FileReader: !0, "console.warn": !0 }, packages: { "prop-types": !0, react: !0 } },
    "react-syntax-highlighter>refractor>parse-entities": { globals: { "document.createElement": !0 } },
    "react-tippy": {
      globals: {
        Element: !0,
        MSStream: !0,
        MutationObserver: !0,
        addEventListener: !0,
        clearTimeout: !0,
        "console.error": !0,
        "console.warn": !0,
        define: !0,
        document: !0,
        getComputedStyle: !0,
        innerHeight: !0,
        innerWidth: !0,
        "navigator.maxTouchPoints": !0,
        "navigator.msMaxTouchPoints": !0,
        "navigator.userAgent": !0,
        performance: !0,
        requestAnimationFrame: !0,
        setTimeout: !0
      },
      packages: { react: !0, "react-dom": !0, "react-tippy>popper.js": !0 }
    },
    "react-tippy>popper.js": {
      globals: {
        MSInputMethodContext: !0,
        "Node.DOCUMENT_POSITION_FOLLOWING": !0,
        cancelAnimationFrame: !0,
        "console.warn": !0,
        define: !0,
        devicePixelRatio: !0,
        document: !0,
        getComputedStyle: !0,
        innerHeight: !0,
        innerWidth: !0,
        "navigator.userAgent": !0,
        requestAnimationFrame: !0,
        setTimeout: !0
      }
    },
    "react-toggle-button": {
      globals: { clearTimeout: !0, "console.warn": !0, define: !0, performance: !0, setTimeout: !0 },
      packages: { react: !0 }
    },
    "readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>process": !0,
        "browserify>timers-browserify": !0,
        "pumpify>inherits": !0,
        "readable-stream>core-util-is": !0,
        "readable-stream>isarray": !0,
        "readable-stream>process-nextick-args": !0,
        "readable-stream>safe-buffer": !0,
        "readable-stream>string_decoder": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "readable-stream>core-util-is": { packages: { "browserify>insert-module-globals>is-buffer": !0 } },
    "readable-stream>process-nextick-args": { packages: { "browserify>process": !0 } },
    "readable-stream>safe-buffer": { packages: { "browserify>buffer": !0 } },
    "readable-stream>string_decoder": { packages: { "readable-stream>safe-buffer": !0 } },
    "readable-stream>util-deprecate": { globals: { "console.trace": !0, "console.warn": !0, localStorage: !0 } },
    redux: { globals: { console: !0 }, packages: { "@babel/runtime": !0 } },
    semver: { globals: { "console.error": !0 }, packages: { "browserify>process": !0, "semver>lru-cache": !0 } },
    "semver>lru-cache": { packages: { "semver>lru-cache>yallist": !0 } },
    "sinon>nise>path-to-regexp": { packages: { "sinon>nise>path-to-regexp>isarray": !0 } },
    "stream-browserify": { packages: { "pumpify>inherits": !0, "stream-browserify>readable-stream": !0, "webpack>events": !0 } },
    "stream-browserify>readable-stream": {
      packages: {
        "browserify>browser-resolve": !0,
        "browserify>buffer": !0,
        "browserify>process": !0,
        "browserify>string_decoder": !0,
        "pumpify>inherits": !0,
        "readable-stream>util-deprecate": !0,
        "webpack>events": !0
      }
    },
    "string.prototype.matchall>call-bind": {
      packages: { "browserify>has>function-bind": !0, "string.prototype.matchall>get-intrinsic": !0 }
    },
    "string.prototype.matchall>es-abstract>gopd": { packages: { "string.prototype.matchall>get-intrinsic": !0 } },
    "string.prototype.matchall>es-abstract>is-callable": { globals: { document: !0 } },
    "string.prototype.matchall>es-abstract>is-regex": {
      packages: { "koa>is-generator-function>has-tostringtag": !0, "string.prototype.matchall>call-bind": !0 }
    },
    "string.prototype.matchall>get-intrinsic": {
      globals: { AggregateError: !0, FinalizationRegistry: !0, WeakRef: !0 },
      packages: {
        "browserify>has": !0,
        "browserify>has>function-bind": !0,
        "string.prototype.matchall>es-abstract>has-proto": !0,
        "string.prototype.matchall>has-symbols": !0
      }
    },
    "string.prototype.matchall>regexp.prototype.flags": {
      packages: {
        "globalthis>define-properties": !0,
        "string.prototype.matchall>call-bind": !0,
        "string.prototype.matchall>regexp.prototype.flags>functions-have-names": !0
      }
    },
    "string.prototype.matchall>side-channel": {
      packages: {
        "brfs>static-module>object-inspect": !0,
        "string.prototype.matchall>call-bind": !0,
        "string.prototype.matchall>get-intrinsic": !0
      }
    },
    superstruct: { globals: { "console.warn": !0, define: !0 } },
    "terser>source-map-support>buffer-from": { packages: { "browserify>buffer": !0 } },
    uuid: { globals: { crypto: !0, msCrypto: !0 } },
    "vinyl>replace-ext": { packages: { "browserify>path-browserify": !0 } },
    web3: { globals: { XMLHttpRequest: !0 } },
    "web3-stream-provider": {
      globals: { setTimeout: !0 },
      packages: { "browserify>util": !0, "readable-stream": !0, "web3-stream-provider>uuid": !0 }
    },
    "web3-stream-provider>uuid": { globals: { crypto: !0, msCrypto: !0 } },
    "webextension-polyfill": { globals: { browser: !0, chrome: !0, "console.error": !0, "console.warn": !0, define: !0 } },
    "webpack>events": { globals: { console: !0 } }
  }
});
