(this.webpackChunk_dashlane_webcards = this.webpackChunk_dashlane_webcards || []).push([
  [921],
  {
    2921: (e, t, i) => {
      "use strict";
      i.d(t, { q: () => Ne });
      var n = i(730),
        o = i(4309);
      const a = {
        webcardId: "1",
        webcardType: n.WebcardType.AutofillConfirmationPasswordLess,
        formType: "LOGIN_STD",
        pendingOperation: {
          autofillRecipe: {
            ingredients: [
              { frameId: "~x#Z~#E-", srcElementId: "s$WZEkp", fieldClassification: "mock", ingredient: { type: o.JV.NewPassword } },
              { frameId: "~x#Z~#E-", srcElementId: "fICu$fICu", fieldClassification: "mock", ingredient: { type: o.JV.NewPassword } }
            ]
          },
          dataSource: { type: o.JV.NewPassword, value: "qkn84B#Gf$di" },
          formClassification: "change_password",
          requestOrigin: { type: n.AutofillRequestOriginType.Webcard, webcardType: n.WebcardType.AutofillDropdown }
        }
      };
      var r = i(8364);
      const s = {
          [r.k.Credential]: {
            ingredients: [
              {
                frameId: "0",
                srcElementId: "qwerty",
                fieldClassification: "mock",
                ingredient: { type: r.k.Credential, property: "email" }
              },
              {
                frameId: "0",
                srcElementId: "azerty",
                fieldClassification: "mock",
                ingredient: { type: r.k.Credential, property: "password" }
              }
            ]
          }
        },
        c = {
          webcardId: "1",
          webcardType: n.WebcardType.AutologinSelection,
          formType: "LOGIN_STD",
          autofillRecipes: s,
          webcards: [
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred0",
              itemType: r.k.Credential,
              title: "Ihavecreatedafakeemailtofoolthesystembutthatwasntlongenoughhadtodoitagain@fakesiteheyitslong.com",
              content: "Superhero Website",
              isLinkedWebsite: !1,
              isProtected: !1
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred1",
              itemType: r.k.Credential,
              title: "myemail@gmail.com",
              content: "Reddit",
              isLinkedWebsite: !1,
              isProtected: !1
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred2",
              itemType: r.k.Credential,
              title: "myemail@gmail.com",
              content: "imgur.com",
              isLinkedWebsite: !1,
              isProtected: !1
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred3",
              itemType: r.k.Credential,
              title: "myemail@gmail.com",
              content: "SomeLinkedWebsite.com",
              isLinkedWebsite: !0,
              isProtected: !1,
              space: { letter: "D", color: "#d000af", displayName: "Dashlane Inc", spaceId: "1234" }
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred4",
              itemType: r.k.Credential,
              title: "myemail@gmail.com",
              content: "Reddit",
              isLinkedWebsite: !1,
              isProtected: !1
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred5",
              itemType: r.k.Credential,
              title: "bruce@wayne-industries.com",
              content: "Joker Citings",
              isLinkedWebsite: !1,
              isProtected: !1,
              space: { letter: "W", color: "#d000af", displayName: "Wayne Industries", spaceId: "1234" }
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred6",
              itemType: r.k.Credential,
              title: "inspector.gadget@dashlane.com",
              content: "Amazon",
              isLinkedWebsite: !1,
              isProtected: !1,
              space: { letter: "P", color: "#d000af", displayName: "Dashlane Inc.", spaceId: "1234" }
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "cred8",
              itemType: r.k.Credential,
              title: "sherlock.holmes@bakerstreet.com",
              content: "Amazon",
              isLinkedWebsite: !1,
              isProtected: !1
            }
          ]
        },
        l = {
          webcardId: "1",
          webcardType: n.WebcardType.DataCapture,
          formType: "LOGIN_STD",
          data: [
            {
              type: r.k.Identity,
              content: "Name Surname",
              firstName: "Name",
              lastName: "Surname",
              birthDate: "Déc 3, 1980",
              birthPlace: ""
            },
            { type: r.k.Email, content: "john.smith@yopmail.com", email: "john.smith@yopmail.com" },
            { type: r.k.Phone, content: "+3361155184", number: "+3361155184", localeFormat: "US" },
            {
              type: r.k.Address,
              content: "5, avenue des Champs-Elysées, Paris, France",
              addressFull: "5, avenue des Champs-Elysées",
              city: "Paris",
              zipCode: "75016",
              country: "France",
              localeFormat: "US"
            },
            { type: r.k.PersonalWebsite, content: "www.dashlane.com", website: "www.dashlane.com" },
            {
              type: r.k.PaymentCard,
              content: "Card 1",
              cardName: "Card 1",
              cardNumber: "1234567887654321",
              ownerName: "Doe",
              expireMonth: "10",
              expireYear: "2054",
              securityCode: "123"
            }
          ],
          loggedIn: !0
        },
        d = {
          webcardId: "1",
          webcardType: n.WebcardType.FeedbackNotification,
          formType: "",
          operation: { type: n.CredentialOperationType.SaveCredential, credentialId: "123abc", fullDomain: "bbc.com" }
        },
        u = {
          webcardId: "1",
          webcardType: n.WebcardType.FeedbackNotification,
          formType: "",
          operation: { type: n.CredentialOperationType.UpdateCredential, credentialId: "123abc", fullDomain: "bbc.com" }
        },
        p = {
          webcardId: "1",
          webcardType: n.WebcardType.FollowUpNotification,
          formType: "",
          copiedProperties: ["email"],
          webcardData: {
            type: r.k.Credential,
            itemId: "abc123",
            title: "bbc.com",
            email: "sherlock-holmes@mail.com",
            login: "sherlockHolmes",
            secondaryLogin: "Dr. Watson",
            hasPassword: !0,
            hasOTP: !0,
            hasLimitedRights: !1
          }
        },
        _ =
          (r.k.Credential,
          {
            webcardId: "1",
            webcardType: n.WebcardType.FollowUpNotification,
            formType: "",
            copiedProperties: ["ownerName"],
            webcardData: {
              type: r.k.BankAccount,
              itemId: "abc123",
              title: "Baker Street Finances",
              ownerName: "John Watson",
              hasIBAN: !0,
              hasBIC: !0,
              hasBankCode: !0
            }
          }),
        m = {
          webcardId: "1",
          webcardType: n.WebcardType.FollowUpNotification,
          formType: "",
          copiedProperties: ["cardNumber"],
          webcardData: {
            type: r.k.PaymentCard,
            itemId: "abc123",
            title: "London credit card",
            ownerName: "Sherlock Holmes",
            hasCardNumber: !0,
            hasSecurityCode: !0
          }
        },
        f = {
          autofillRecipe: {
            ingredients: [
              {
                frameId: "0",
                srcElementId: "qwerty",
                fieldClassification: "mock",
                ingredient: { type: r.k.Credential, property: "email" }
              },
              {
                frameId: "0",
                srcElementId: "azerty",
                fieldClassification: "mock",
                ingredient: { type: r.k.Credential, property: "password" }
              }
            ]
          },
          formClassification: "login",
          requestOrigin: { type: n.AutofillRequestOriginType.Webcard, webcardType: n.WebcardType.AutofillDropdown },
          focusedElement: { elementId: "qwerty", frameId: "0" },
          dataSource: { type: r.k.Credential, vaultId: "123456789" }
        },
        g = {
          webcardId: "1",
          webcardType: n.WebcardType.MasterPassword,
          userLogin: "unknown@unknowns.com",
          wrongPassword: !1,
          formType: "LOGIN_STD",
          neverAskAgainMode: n.NeverAskAgainMode.None,
          pendingOperation: { type: n.PendingOperationType.ApplyAutofillDetails, data: f }
        },
        h = { ...g, wrongPassword: !0 },
        y = { ...g, neverAskAgainMode: n.NeverAskAgainMode.Global },
        w = { ...g, neverAskAgainMode: n.NeverAskAgainMode.VaultItem },
        b = {
          webcardId: "1",
          webcardType: n.WebcardType.OnboardingNotification,
          configuration: n.OnboardingNotificationConfiguration.AfterLogin,
          formType: "LOGIN_STD"
        },
        S = {
          webcardId: "1",
          webcardType: n.WebcardType.OnboardingNotification,
          configuration: n.OnboardingNotificationConfiguration.AfterSave,
          formType: "LOGIN_STD"
        },
        A = {
          webcardId: "1",
          webcardType: n.WebcardType.OnboardingNotification,
          configuration: n.OnboardingNotificationConfiguration.AfterCancel,
          formType: "LOGIN_STD"
        },
        C = {
          webcardId: "1",
          webcardType: n.WebcardType.PhishingPrevention,
          urlOfCopiedItem: "amazon.com",
          urlOfPasteDestination: "evilsite.com",
          formType: "other",
          metadata: {
            [n.WebcardMetadataType.PhishingPrevention]: {
              type: n.WebcardMetadataType.PhishingPrevention,
              itemId: "0",
              vaultIngredient: { type: r.k.Credential, property: "email" }
            }
          }
        },
        k = {
          webcardId: "1",
          webcardType: n.WebcardType.SavePassword,
          domain: "googleemailwebsite.com",
          subdomain: "mail",
          fullDomain: "mail.googleemailwebsite.com",
          url: "https://mail.googleemailwebsite.com/login.html",
          emailOrLogin: "",
          capturedUsernames: { email: "bli@bla.com", login: "sandwichlogin", secondaryLogin: "" },
          formType: "LOGIN_STD",
          showSubdomainOpt: !0,
          showSpacesList: !0,
          passwordToSave: "tomatosandwich",
          passwordLimitStatus: { shouldShowPasswordLimitReached: !1, shouldShowNearPasswordLimit: !1 },
          showFrozenB2BStatus: !1,
          dropdownLoginOptions: [
            "john_smth",
            "john.smith@pocahontas.com",
            "toto@tutu.com",
            "seaBass@fish.com",
            "damien@daaaaamien.com",
            "kevin.smith@jersey.com",
            "ignatius.reilly@confederacyofdunces.edu"
          ],
          existingCredentialsForDomain: [],
          categories: ["Emails", "Bank accounts", "Whatever", "Test List", "Bei Mir", "Bist Du", "Schön"],
          category: "Bank accounts",
          spaces: [
            { spaceId: "DEFAULT", displayName: "Personal", letter: "S", color: "#913c3c" },
            { spaceId: "1", displayName: "Taquería", letter: "D", color: "#14697f" },
            { spaceId: "2", displayName: "Peluquería", letter: "Y", color: "#205A06" },
            { spaceId: "3", displayName: "Sidrería", letter: "Y", color: "#5A0614" },
            { spaceId: "4", displayName: "Farmacia", letter: "Y", color: "#5A0614" },
            { spaceId: "5", displayName: "Carnecería", letter: "C", color: "#5A0614" },
            { spaceId: "6", displayName: "Frijolería", letter: "L", color: "#3c9167" },
            { spaceId: "7", displayName: "Pastelería", letter: "P", color: "#3c9163" },
            { spaceId: "8", displayName: "Dulcería", letter: "U", color: "#3c9133" }
          ],
          space: "1",
          loggedIn: !0,
          allowMasterPasswordProtection: !0
        },
        v = { ...k },
        T = { ...k, showSubdomainOpt: !1, showSpacesList: !1, allowMasterPasswordProtection: !1 },
        I = { ...k, passwordLimitStatus: { shouldShowPasswordLimitReached: !0, shouldShowNearPasswordLimit: !1 } },
        D = { ...k, emailOrLogin: "", showFrozenB2BStatus: !0 },
        P = { ...k },
        E = { ...k, emailOrLogin: "toto@loco.com", passwordToSave: "tomato" },
        O = { ...k },
        W = { ...k, emailOrLogin: "toto@loco.com" },
        N = { ...k },
        B = { ...k, emailOrLogin: "toto@loco.com" },
        F =
          (n.WebcardItemType.SimpleItem,
          r.k.Credential,
          n.WebcardItemType.SimpleItem,
          r.k.Credential,
          {
            webcardId: "1",
            webcardType: n.WebcardType.UserVerification,
            userLogin: "unknown@unknowns.com",
            formType: "LOGIN_STD",
            availableMethods: ["masterPassword", "webauthn"],
            neverAskAgainMode: n.NeverAskAgainMode.None,
            metadata: { [n.WebcardMetadataType.PendingOperation]: { type: n.WebcardMetadataType.PendingOperation } }
          }),
        j = {
          "all methods available, no default": { ...F, availableMethods: ["masterPassword", "webauthn"], defaultMethod: void 0 },
          "all methods available, default to webauthn": {
            ...F,
            availableMethods: ["masterPassword", "webauthn"],
            defaultMethod: "webauthn"
          },
          "only master password available": { ...F, availableMethods: ["masterPassword"] },
          "with never again option (single item only)": { ...F, neverAskAgainMode: n.NeverAskAgainMode.VaultItem },
          "with never again option (item type)": { ...F, neverAskAgainMode: n.NeverAskAgainMode.Global }
        },
        L = {
          webcardId: "1",
          webcardType: n.WebcardType.WarnGeneratedPassword,
          formType: "LOGIN_STD",
          pendingOperation: {
            autofillRecipe: {
              ingredients: [
                { frameId: "~x#Z~#E-", srcElementId: "s$WZEkp", fieldClassification: "mock", ingredient: { type: o.JV.NewPassword } },
                { frameId: "~x#Z~#E-", srcElementId: "fICu$fICu", fieldClassification: "mock", ingredient: { type: o.JV.NewPassword } }
              ]
            },
            dataSource: { type: o.JV.NewPassword, value: "qkn84B#Gf$di" },
            formClassification: "change_password",
            requestOrigin: { type: n.AutofillRequestOriginType.Webcard, webcardType: n.WebcardType.AutofillDropdown }
          }
        },
        x = {
          webcardType: n.WebcardType.WebauthnCreateConfirmation,
          webcardId: "398cbf05-b6ec-4d9a-85a7-ab7fa21f5253",
          formType: "login",
          rpName: "webauthn.io",
          userDisplayName: "kw_test_dhenot",
          request: {
            type: n.WebauthnOperationType.Create,
            requestId: 1,
            options: {
              challenge: "UZ2nJ8ArxnpCtisvMeadEKNg_Xr3QXScoY2N9gi-7GA",
              rp: { name: "webauthn.io", id: "webauthn.io" },
              user: { name: "kw_test_dhenot@mailinator.com", displayName: "kw_test_dhenot", id: "3utcAAAAAAAAAA" },
              pubKeyCredParams: [
                { type: "public-key", alg: -7 },
                { type: "public-key", alg: -35 },
                { type: "public-key", alg: -36 },
                { type: "public-key", alg: -257 },
                { type: "public-key", alg: -258 },
                { type: "public-key", alg: -259 },
                { type: "public-key", alg: -37 },
                { type: "public-key", alg: -38 },
                { type: "public-key", alg: -39 },
                { type: "public-key", alg: -8 }
              ],
              authenticatorSelection: { requireResidentKey: !1, userVerification: "discouraged" },
              timeout: 6e4,
              attestation: "none",
              excludeCredentials: []
            }
          }
        },
        R = {
          webcardType: n.WebcardType.WebauthnGetConfirmation,
          webcardId: "ec524a10-1d3e-453a-9719-c23cd2df3741",
          formType: "login",
          rpName: "webauthn.io",
          passkey: { userDisplayName: "kw_test_dhenot", passkeyItemId: "8cb3326c-35d3-4594-aeb8-2c5bd7cbd006" },
          request: {
            type: n.WebauthnOperationType.Get,
            requestId: 2,
            options: {
              challenge: "im0NINX9NjoazMFXAWHMGJXnJMoOxvdyqXbv9CMRZko",
              timeout: 6e4,
              rpId: "webauthn.io",
              allowCredentials: [{ type: "public-key", id: "q9SBF80Yy7Ovy3KYL__bvmcCHEKPGs5gh8UYq_Gq1sY" }]
            }
          },
          allowUsingOtherAuthenticator: !0
        },
        M = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred0",
            itemType: r.k.Credential,
            title: "Ihavecreatedafakeemailtofoolthesystembutthatwasntlongenoughhadtodoitagain@fakesiteheyitslong.com",
            content: "Superhero Website",
            isLinkedWebsite: !1,
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred1",
            itemType: r.k.Credential,
            title: "myemail@gmail.com",
            content: "Reddit",
            isLinkedWebsite: !1,
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred2",
            itemType: r.k.Credential,
            title: "myemail@gmail.com",
            content: "imgur.com",
            isLinkedWebsite: !1,
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred3",
            itemType: r.k.Credential,
            title: "myemail@gmail.com",
            content: "SomeLinkedWebsite.com",
            isLinkedWebsite: !0,
            isProtected: !1,
            space: { letter: "D", color: "#d000af", displayName: "Dashlane Inc", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred4",
            itemType: r.k.Credential,
            title: "myemail@gmail.com",
            content: "Reddit",
            isLinkedWebsite: !1,
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred5",
            itemType: r.k.Credential,
            title: "bruce@wayne-industries.com",
            content: "Joker Citings",
            isLinkedWebsite: !1,
            isProtected: !1,
            space: { letter: "W", color: "#d000af", displayName: "Wayne Industries", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred6",
            itemType: r.k.Credential,
            title: "inspector.gadget@dashlane.com",
            content: "Amazon",
            isLinkedWebsite: !1,
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Dashlane Inc.", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "cred8",
            itemType: r.k.Credential,
            title: "sherlock.holmes@bakerstreet.com",
            content: "Amazon",
            isLinkedWebsite: !1,
            isProtected: !1
          }
        ],
        U = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "passkey0",
            itemType: r.k.Passkey,
            title: "passkey0",
            content: "passkey content",
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "passkey1",
            itemType: r.k.Passkey,
            title: "passkey1",
            content: "passkey content",
            isProtected: !1
          }
        ]
          .map((e) => ({ ...e, metadataKeys: [n.WebcardMetadataType.WebauthnRequest] }))
          .concat(M.slice(1, 2).map((e) => ({ ...e, data: "reddit.com@regularcred@example.com@false@false", metadataKeys: [] }))),
        G = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "add0",
            itemType: r.k.Address,
            title: "1024 birmingham 34983 crystal lake franc",
            content: "home",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "add1",
            itemType: r.k.Address,
            title: "Some place in the country",
            content: "1007 Mountain Drive",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "add2",
            itemType: r.k.Address,
            title: "Second home",
            content: "Gotham France",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "add3",
            itemType: r.k.Address,
            title: "This address doesnt have a space ",
            content: "Gotham France",
            isProtected: !1
          }
        ],
        H = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "email0",
            itemType: r.k.Email,
            title: "email@myemail.com",
            content: "Email 1",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "email2",
            itemType: r.k.Email,
            title: "email@mybusinessemail.com",
            content: "Email 1",
            isProtected: !1,
            space: { letter: "D", color: "#d000af", displayName: "Dashlane Inc", spaceId: "1234" }
          }
        ],
        q = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "comp0",
            itemType: r.k.Company,
            title: "Dashlane",
            content: "SWE",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "comp1",
            itemType: r.k.Company,
            title: "Gotham Investigations",
            content: "Vigilante",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "comp2",
            itemType: r.k.Company,
            title: "Gotham Investigations",
            content: "Villain",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          }
        ],
        V = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "phone0",
            itemType: r.k.Phone,
            title: "3092840128",
            content: "Work",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "phone1",
            itemType: r.k.Phone,
            title: "90384809493",
            content: "Fax",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "phone2",
            itemType: r.k.Phone,
            title: "+3519874739",
            content: "Villain",
            isProtected: !1
          },
          { type: n.WebcardItemType.SimpleItem, itemId: "phone3", itemType: r.k.Phone, title: "0287382", content: "Cell", isProtected: !1 }
        ],
        K = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "id0",
            itemType: r.k.Identity,
            title: "Sherlock Holmes",
            content: "18/07/1956",
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "id1",
            itemType: r.k.Identity,
            title: "Sherlock Holmes",
            content: "18/07/1956",
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "id2",
            itemType: r.k.Identity,
            title: "Sherlock Holmes",
            content: "Dec 3, 1980",
            isProtected: !1
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "id3",
            itemType: r.k.Identity,
            title: "Sherlock Holmes",
            content: "Dec 3, 1980",
            isProtected: !1,
            space: { letter: "P", color: "#d000af", displayName: "Personal", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "id6",
            itemType: r.k.Identity,
            title: "Ridley Scott",
            content: "",
            isProtected: !1,
            space: { letter: "D", color: "#FF00FF", displayName: "Dashlane Inc.", spaceId: "1234" }
          }
        ],
        z = [
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "web0",
            itemType: r.k.PersonalWebsite,
            title: "www.dashlane.com",
            content: "Company website",
            isProtected: !1,
            space: { letter: "D", color: "#FF00FF", displayName: "Dashlane Inc.", spaceId: "1234" }
          },
          {
            type: n.WebcardItemType.SimpleItem,
            itemId: "web1",
            itemType: r.k.PersonalWebsite,
            title: "www.portfolio.com",
            content: "My portfolio",
            isProtected: !1
          }
        ],
        Y = {
          elementId: "",
          frameId: "0",
          positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
          persistentIdentifier: "",
          formId: "",
          fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
          frameSandboxed: !1
        },
        Z = {
          [r.k.Credential]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Credential, property: "password" }
              }
            ]
          },
          [r.k.Address]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Address, property: "addressFull" }
              }
            ]
          },
          [r.k.Email]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Email, property: "email" }
              }
            ]
          },
          [r.k.Company]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Company, property: "name" }
              }
            ]
          },
          [r.k.Phone]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Phone, property: "number" }
              }
            ]
          },
          [r.k.Identity]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Identity, property: "firstName" }
              }
            ]
          },
          [r.k.PersonalWebsite]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.PersonalWebsite, property: "name" }
              }
            ]
          },
          [r.k.DriverLicense]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.DriverLicense, property: "idNumber" }
              }
            ]
          },
          [r.k.FiscalId]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.FiscalId, property: "idNumber" }
              }
            ]
          },
          [r.k.IdCard]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.IdCard, property: "idNumber" }
              }
            ]
          },
          [r.k.Passport]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Passport, property: "idNumber" }
              }
            ]
          },
          [r.k.SocialSecurityId]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.SocialSecurityId, property: "idNumber" }
              }
            ]
          },
          [r.k.BankAccount]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.BankAccount, property: "bank" }
              }
            ]
          },
          [r.k.PaymentCard]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.PaymentCard, property: "cardNumber" }
              }
            ]
          },
          [r.k.Passkey]: {
            ingredients: [
              {
                frameId: Y.frameId,
                srcElementId: Y.elementId,
                fieldClassification: "mock",
                ingredient: { type: r.k.Passkey, property: "userDisplayName" }
              }
            ]
          }
        },
        J = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Credential],
          formType: "LOGIN_STD",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          autofillRecipes: Z,
          srcElement: Y,
          items: M,
          withSearch: !0
        },
        Q = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Credential, r.k.Passkey],
          formType: "LOGIN_STD",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          autofillRecipes: Z,
          srcElement: Y,
          items: U,
          withSearch: !1,
          withNonDashlaneKeyButton: !0,
          metadata: {}
        },
        X = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.Address],
          formType: "LOGIN_STD",
          srcElement: Y,
          autofillRecipes: Z,
          items: G,
          withSearch: !0
        },
        $ = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          fieldType: [r.k.Email],
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          formType: "LOGIN_STD",
          srcElement: Y,
          autofillRecipes: Z,
          items: H,
          withSearch: !0
        },
        ee = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.Company],
          formType: "LOGIN_STD",
          srcElement: Y,
          autofillRecipes: Z,
          items: q,
          withSearch: !0
        },
        te = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.Phone],
          formType: "LOGIN_STD",
          srcElement: Y,
          autofillRecipes: Z,
          items: V,
          withSearch: !0
        },
        ie = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.Identity],
          formType: "LOGIN_STD",
          warningType: n.AutofillDropdownWebcardWarningType.None,
          srcElement: Y,
          autofillRecipes: Z,
          items: K,
          withSearch: !0
        },
        ne = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.PersonalWebsite],
          formType: "LOGIN_STD",
          srcElement: Y,
          autofillRecipes: Z,
          items: z,
          withSearch: !0
        },
        oe = { ...J, warningType: n.AutofillDropdownWebcardWarningType.UnsecureProtocol },
        ae = { ...J, warningType: n.AutofillDropdownWebcardWarningType.UnsecureIframe },
        re = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.DriverLicense],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{cb5af48d-9a55-4de5-87f9-f1332f866308A}",
              itemType: r.k.DriverLicense,
              title: "Setsuna F. Seiei",
              content: "FR",
              expired: !1,
              aboutToExpire: !1,
              isProtected: !1,
              country: "FR",
              backgroundName: "eu"
            },
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{cb5af48d-9a55-4de5-87f9-f1332f866308C}",
              itemType: r.k.DriverLicense,
              title: "Sheldon",
              content: "GB",
              expired: !0,
              aboutToExpire: !1,
              isProtected: !1,
              country: "GB",
              backgroundName: "generic"
            },
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{cb5af48d-9a55-4de5-87f9-f1332f866308D}",
              itemType: r.k.DriverLicense,
              title: "Jerry",
              content: "US",
              expired: !1,
              aboutToExpire: !1,
              isProtected: !1,
              country: "US",
              backgroundName: "us-generic"
            }
          ],
          withSearch: !0
        },
        se = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.FiscalId],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "8",
              itemType: r.k.FiscalId,
              title: "Fiscal Number",
              content: "PT",
              isProtected: !1
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "{FA3ECAD0-333C-4A1F-8860-A0BC51B64D8C}",
              itemType: r.k.FiscalId,
              title: "09239308208",
              content: "FR",
              isProtected: !1
            }
          ],
          withSearch: !0
        },
        ce = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.IdCard],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{2d006190-0907-49bf-9a05-810f008d3e3c}",
              itemType: r.k.IdCard,
              title: "Jerry",
              content: "FR",
              expired: !0,
              aboutToExpire: !1,
              isProtected: !1,
              country: "FR"
            },
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{6AD5B9A0-2EA0-4EC2-8B6D-EF60E977A997}",
              itemType: r.k.IdCard,
              title: "Sheldon",
              content: "US",
              expired: !1,
              aboutToExpire: !1,
              isProtected: !1,
              country: "US"
            }
          ],
          withSearch: !0
        },
        le = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Passport],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{2cbcb0df-17a6-4704-a4ce-d462bad43fc1}",
              itemType: r.k.Passport,
              title: "Tom",
              content: "US",
              expired: !1,
              aboutToExpire: !0,
              isProtected: !1,
              country: "US"
            },
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{2cbcb0df-17a6-4704-a4ce-d462bad43fc2}",
              itemType: r.k.Passport,
              title: "John",
              content: "FR",
              expired: !1,
              aboutToExpire: !0,
              isProtected: !1,
              country: "FR"
            }
          ],
          withSearch: !0
        },
        de = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.SocialSecurityId],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{5e0bce17-3b2f-42fd-bb1d-c7715eca3f2cA}",
              itemType: r.k.SocialSecurityId,
              title: "Pacôme Hégésippe Adélard Ladislas de Champignac",
              content: "FR",
              expired: !1,
              aboutToExpire: !1,
              isProtected: !0,
              country: "FR"
            },
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{5e0bce17-3b2f-42fd-bb1d-c7715eca3f2cB}",
              itemType: r.k.SocialSecurityId,
              title: "Spirou Tintin",
              content: "GB",
              expired: !1,
              aboutToExpire: !0,
              isProtected: !0,
              country: "GB"
            }
          ],
          withSearch: !0
        },
        ue = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          fieldType: [r.k.SocialSecurityId],
          formType: "ENHANCED_ITEM_FORM_TYPE",
          warningType: n.AutofillDropdownWebcardWarningType.UnsecureProtocol,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.EnhancedItem,
              itemId: "{5e0bce17-3b2f-42fd-bb1d-c7715eca3f2cA}",
              itemType: r.k.SocialSecurityId,
              title: "Pacôme Hégésippe Adélard Ladislas de Champignac",
              content: "FR",
              expired: !1,
              aboutToExpire: !1,
              isProtected: !0,
              country: "FR"
            }
          ],
          withSearch: !0
        },
        pe = { ...ue, warningType: n.AutofillDropdownWebcardWarningType.UnsecureIframe },
        _e = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "{120A14D9-C0F4-4224-BD46-B9CAA6F737DF}",
              itemType: r.k.BankAccount,
              title: "Crédit Agricole",
              content: "Spike Spiegel",
              isProtected: !1,
              space: { letter: "D", color: "#d000af", displayName: "Dashlane Inc", spaceId: "1234" }
            },
            {
              type: n.WebcardItemType.SimpleItem,
              itemId: "{120A14D9-C0F4-4224-BD46-B9CAA6F737DFB}",
              itemType: r.k.BankAccount,
              title: "Crédit Agricole",
              content: "Spike Spiegel",
              isProtected: !0
            }
          ],
          withSearch: !0
        },
        me = (e, t, i) => (e ? `•••• ${e}` : "") + "   " + (t && i ? `${t}/${i}` : ""),
        fe = {
          type: n.WebcardItemType.EnhancedItem,
          itemId: "",
          itemType: r.k.PaymentCard,
          title: "MasterCard CA",
          content: me("1234", "07", "50"),
          expired: !1,
          aboutToExpire: !1,
          incomplete: !1,
          paymentType: "PAYMENT_TYPE_MASTERCARD",
          color: "gold",
          isProtected: !1
        },
        ge = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          formType: "ENHANCED_ITEM_FORM_TYPE",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: Y,
          autofillRecipes: Z,
          items: [
            { ...fe, itemId: "{34E264C5-4C87-4F8F-B438-D7B12B556182A}", content: me("29", "10", "10"), expired: !0 },
            {
              ...fe,
              itemId: "{34E264C5-4C87-4F8F-B438-D7B12B556182B}",
              content: me("", "", ""),
              color: "white",
              title: "Diner's Club",
              paymentType: "PAYMENT_TYPE_DINERSCLUB",
              incomplete: !0
            },
            {
              ...fe,
              itemId: "{34E264C5-4C87-4F8F-B438-D7B12B556182C}",
              content: me("1234", (new Date().getMonth() + 1).toString().padStart(2, "0"), new Date().getFullYear().toString().slice(-2)),
              color: "blue_1",
              title: "Bank of America Merrill Lynch",
              paymentType: "PAYMENT_TYPE_VISA",
              aboutToExpire: !0
            },
            {
              ...fe,
              itemId: "{34E264C5-4C87-4F8F-B438-D7B12B556182D}",
              content: me("1234", "07", "50"),
              color: "silver",
              title: "Banco Bilbao Vizcaya Argentaria S.A.",
              paymentType: "PAYMENT_TYPE_JCB"
            },
            {
              ...fe,
              itemId: "{34E264C5-4C87-4F8F-B438-D7B12B556182E}",
              content: me("1234", "10", "10"),
              color: "green_1",
              title: "Suncoast Schools Federal Credit Union ",
              expired: !0
            }
          ],
          withSearch: !0
        },
        he = {
          [o.JV.NewPassword]: {
            ingredients: [{ frameId: "mock", srcElementId: "mock", fieldClassification: "mock", ingredient: { type: o.JV.NewPassword } }]
          }
        },
        ye = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.GeneratePassword,
          formType: "REGISTRATION",
          passwordLimitStatus: { shouldShowPasswordLimitReached: !1, shouldShowNearPasswordLimit: !1 },
          showFrozenB2BStatus: !1,
          passwordGenerationSettings: { length: 16, letters: !0, digits: !0, symbols: !0, avoidAmbiguous: !0 },
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          tabRootDomain: "test.com",
          autofillRecipes: he
        },
        we = { ...ye, passwordLimitStatus: { shouldShowPasswordLimitReached: !0, shouldShowNearPasswordLimit: !1 } },
        be = { ...ye, showFrozenB2BStatus: !0 },
        Se = {
          ...ye,
          warningType: n.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration,
          context: "{SOMEUUID-1111-2222-3333-444455556666}"
        },
        Ae = { ...ye, warningType: n.AutofillDropdownWebcardWarningType.PasswordGenerationDashlaneLogin },
        Ce = { ...ye, warningType: n.AutofillDropdownWebcardWarningType.UnsecureProtocol },
        ke = { ...ye, warningType: n.AutofillDropdownWebcardWarningType.UnsecureIframe },
        ve = {
          ...ye,
          warningType: n.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration,
          context: "{SOMEUUID-1111-2222-3333-444455556666}",
          passwordLimitStatus: { shouldShowPasswordLimitReached: !0, shouldShowNearPasswordLimit: !1 }
        },
        Te = {
          ...ye,
          warningType: n.AutofillDropdownWebcardWarningType.PasswordGenerationDashlaneLogin,
          passwordLimitStatus: { shouldShowPasswordLimitReached: !0, shouldShowNearPasswordLimit: !1 }
        },
        Ie = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.Reactivation,
          formType: "LOGIN_STD",
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          autofillRecipes: {},
          extensionShortcuts: ["Ctrl", "⇧", "L"]
        },
        De = {
          tabRootDomain: "https://dashlane-testing.com",
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Credential],
          formType: "LOGIN_STD",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          items: [],
          autofillRecipes: {},
          withSearch: !0
        },
        Pe = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Credential],
          formType: "LOGIN_STD",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          items: [],
          autofillRecipes: {},
          withSearch: !0
        },
        Ee = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          fieldType: [r.k.Address],
          formType: "LOGIN_STD",
          configuration: n.AutofillDropdownWebcardConfiguration.Classic,
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          items: [],
          autofillRecipes: {},
          withSearch: !0
        },
        Oe = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.FieldDisabledNotification,
          warningType: n.AutofillDropdownWebcardWarningType.None,
          formType: "LOGIN_STD",
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          autofillRecipes: {}
        },
        We = {
          webcardId: "1",
          webcardType: n.WebcardType.AutofillDropdown,
          configuration: n.AutofillDropdownWebcardConfiguration.WebAuthnReactivation,
          formType: "LOGIN_STD",
          srcElement: {
            elementId: "",
            frameId: "0",
            positionInFrame: { x: 0, y: 0, width: 0, height: 0 },
            persistentIdentifier: "",
            formId: "",
            fieldFormat: { dateFormat: void 0, dateSeparator: void 0 },
            frameSandboxed: !1
          },
          autofillRecipes: {}
        },
        Ne = {
          dialogs: {
            [n.WebcardType.AutofillConfirmationPasswordLess]: { default: a },
            [n.WebcardType.AutologinSelection]: { default: c },
            [n.WebcardType.DataCapture]: { default: l },
            [n.WebcardType.MasterPassword]: {
              default: g,
              "wrong password": h,
              "never ask again (single item only)": w,
              "never ask again (item type)": y
            },
            [n.WebcardType.OnboardingNotification]: { "after login": b, "after save": S, "after cancel": A },
            [n.WebcardType.SavePassword]: {
              default: E,
              "save email prefilled": E,
              "save email empty": P,
              "replace email prefilled": W,
              "replace email empty": O,
              "save as new email prefilled": B,
              "save as new email empty": N,
              "save limited": I,
              "all visible": v,
              "all hidden": T,
              "b2b trial discontinued": D
            },
            [n.WebcardType.WarnGeneratedPassword]: { default: L },
            [n.WebcardType.WebauthnCreateConfirmation]: { default: x },
            [n.WebcardType.WebauthnGetConfirmation]: { default: R },
            [n.WebcardType.FollowUpNotification]: { credential: p, "bank account": _, "payment card": m },
            [n.WebcardType.FeedbackNotification]: { "login created": d, "login updated": u },
            [n.WebcardType.PhishingPrevention]: { "phishing suspected": C },
            [n.WebcardType.UserVerification]: j
          },
          dropdowns: {
            autofill: {
              "authentication (credentials)": J,
              "authentication (conditional UI)": Q,
              address: X,
              email: $,
              company: ee,
              phone: te,
              identity: ie,
              website: ne,
              "unsecure protocol (http)": oe,
              "unsecure iframe": ae
            },
            "enhanced-item": {
              "bank statement": _e,
              "driver license": re,
              fiscal: se,
              id: ce,
              passport: le,
              "payment card": ge,
              "social security": de,
              "unsecure protocol (http)": ue,
              "unsecure iframe": pe
            },
            "generate-password": {
              default: ye,
              "with password limit": we,
              "with registration warning": Se,
              "with generation warning": Ae,
              "with unsecure protocol (http)": Ce,
              "with unsecure iframe": ke,
              "with gen. warn. + pwd limit": Te,
              "with reg. warn. + pwd limit": ve,
              "b2b trial discontinued": be
            },
            reactivation: { default: Ie },
            webAuthnReactivation: { default: We },
            "empty state": {
              "empty state webcard for authentication field": De,
              "empty state webcard for password field": Pe,
              "empty state webcard for address field": Ee
            },
            "field disabled": { default: Oe }
          }
        };
    },
    730: (e) => {
      (() => {
        var t = {
            3039: (e, t, i) => {
              "use strict";
              i.d(t, {
                AzZ: () => he,
                C66: () => ke,
                OxQ: () => z,
                SP9: () => we,
                YeR: () => Ae,
                b1s: () => Ce,
                dm3: () => x,
                hsx: () => be,
                qGq: () => yt,
                uPF: () => ye
              }),
                i(9627);
              var n,
                o,
                a,
                r = i(8776);
              !(function (e) {
                (e.Local = "local"), (e.Remote = "remote");
              })(n || (n = {}));
              class s {
                constructor({ button: e, clickOrigin: t }) {
                  (this.category = "user"),
                    (this.name = "click"),
                    (this.priority = !1),
                    (this.isEventTriggeringSession = !1),
                    (this.button = e),
                    (this.clickOrigin = t);
                }
                toJson() {
                  return { name: "click", button: this.button, click_origin: this.clickOrigin };
                }
              }
              class c {
                constructor({}) {
                  (this.category = "user"), (this.name = "view_page"), (this.priority = !1), (this.isEventTriggeringSession = !1);
                }
                toJson() {
                  return { name: "view_page" };
                }
              }
              function l(e, t) {
                if (
                  (function (e) {
                    return "migrate_crypto" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "migrate_crypto",
                      new_crypto: e.newCrypto,
                      previous_crypto: e.previousCrypto,
                      status: e.status,
                      type: e.type
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "show_version_validity_message" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "show_version_validity_message",
                      is_update_possible: e.isUpdatePossible,
                      version_validity_status: e.versionValidityStatus
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "download_audit_logs_data" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "download_audit_logs_data",
                      audit_log_count: e.auditLogCount,
                      audit_log_download_error: e.auditLogDownloadError,
                      flow_step: e.flowStep
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "dismiss_security_alert" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "dismiss_security_alert",
                      item_types_affected: e.itemTypesAffected,
                      security_alert_item_id: e.securityAlertItemId,
                      security_alert_type: e.securityAlertType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "credential_health_report" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "credential_health_report", credential_security_status: e.credentialSecurityStatus, item_id: e.itemId };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "authenticator_push_action" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "authenticator_push_action",
                      authenticator_push_status: e.authenticatorPushStatus,
                      authenticator_push_type: e.authenticatorPushType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "family_members" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "family_members", dashboard_action: e.dashboardAction };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "cancel_plan" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "cancel_plan",
                      cancel_plan_step: e.cancelPlanStep,
                      plan: e.plan,
                      plan_billing_period: e.planBillingPeriod,
                      survey_answer: e.surveyAnswer
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "use_another_account" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "use_another_account" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "setup_confidential_scim" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "setup_confidential_scim", scim_setup_step: e.scimSetupStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "receive_security_alert" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "receive_security_alert",
                      item_types_affected: e.itemTypesAffected,
                      security_alert_item_id: e.securityAlertItemId,
                      security_alert_type: e.securityAlertType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "authenticator_download_password_manager" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "authenticator_download_password_manager" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "ask_authentication" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "ask_authentication", mode: e.mode, reason: e.reason, verification_mode: e.verificationMode };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "view_vault_item_attachment" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "view_vault_item_attachment", item_id: e.itemId, item_type: e.itemType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "complete_onboarding_task" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "complete_onboarding_task", onboarding_task: e.onboardingTask };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "sharing_start" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "sharing_start",
                      collection_id: e.collectionId,
                      item_id: e.itemId,
                      origin: e.origin,
                      sharing_flow_type: e.sharingFlowType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "load_dark_web_insights_results" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "load_dark_web_insights_results" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "create_account" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "create_account",
                      android_marketing: e.androidMarketing,
                      ios_marketing: e.iosMarketing,
                      is_marketing_opt_in: e.isMarketingOptIn,
                      status: e.status,
                      web_marketing: e.webMarketing
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "first_launch" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "first_launch", android: e.android, ios: e.ios, is_marketing_opt_in: e.isMarketingOptIn, web: e.web };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "import_data" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "import_data",
                      backup_file_type: e.backupFileType,
                      import_data_drop_action: e.importDataDropAction,
                      import_data_status: e.importDataStatus,
                      import_data_step: e.importDataStep,
                      import_source: e.importSource,
                      imported_items_count: e.importedItemsCount,
                      is_direct_import: e.isDirectImport,
                      items_to_import_count: e.itemsToImportCount,
                      space: e.space
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "login" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "login",
                      is_backup_code: e.isBackupCode,
                      is_first_login: e.isFirstLogin,
                      mode: e.mode,
                      status: e.status,
                      verification_mode: e.verificationMode
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "logout" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "logout" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "restore_password" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "restore_password", item_id: e.itemId };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "setup_sso" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "setup_sso",
                      current_billing_plan_tier: e.currentBillingPlanTier,
                      email_domain_error: e.emailDomainError,
                      email_domain_submitted_count: e.emailDomainSubmittedCount,
                      email_domain_validated_count: e.emailDomainValidatedCount,
                      encryption_service_platform_selected: e.encryptionServicePlatformSelected,
                      idp_validation_response: e.idpValidationResponse,
                      sso_setup_step: e.ssoSetupStep,
                      sso_solution_chosen: e.ssoSolutionChosen,
                      test_sso_response: e.testSsoResponse
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "update_payment_method" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "update_payment_method", flow_step: e.flowStep, plan: e.plan, plan_billing_period: e.planBillingPeriod };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "select_space" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "select_space", space: e.space };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "create_account_recovery_key" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "create_account_recovery_key", create_key_error_name: e.createKeyErrorName, flow_step: e.flowStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "follow_up_notification" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "follow_up_notification", action: e.action, item_type: e.itemType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "filter_by_collection" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "filter_by_collection",
                      collection_count: e.collectionCount,
                      has_interacted: e.hasInteracted,
                      is_from_search: e.isFromSearch,
                      total_count: e.totalCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_external_vault_item_link" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "open_external_vault_item_link", domain_type: e.domainType, item_id: e.itemId, item_type: e.itemType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "sharing_outcome" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "sharing_outcome",
                      collection_id: e.collectionId,
                      is_successful: e.isSuccessful,
                      item_id: e.itemId,
                      origin: e.origin,
                      sharing_flow_type: e.sharingFlowType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "right_click_menu_action" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "right_click_menu_action",
                      field_filled: e.fieldFilled,
                      field_initial_classification_list: e.fieldInitialClassificationList,
                      is_field_detected_by_analysis_engine: e.isFieldDetectedByAnalysisEngine,
                      right_click_menu_flow_step: e.rightClickMenuFlowStep
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "update_collection" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "update_collection",
                      action: e.action,
                      collection_id: e.collectionId,
                      is_shared: e.isShared,
                      item_count: e.itemCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_team_plan_tier" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "change_team_plan_tier",
                      current_billing_plan_tier: e.currentBillingPlanTier,
                      current_plan_paid_seats_count: e.currentPlanPaidSeatsCount,
                      has_promo: e.hasPromo,
                      next_billing_plan_tier: e.nextBillingPlanTier,
                      plan_change_step: e.planChangeStep,
                      seat_added_count: e.seatAddedCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "download_vault_item_attachment" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "download_vault_item_attachment", item_id: e.itemId, item_type: e.itemType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_domain_dark_web_monitoring" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "open_domain_dark_web_monitoring", access_path: e.accessPath, is_first_visit: e.isFirstVisit };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_password_guided" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "change_password_guided", flow_step: e.flowStep, item_id: e.itemId };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "performance" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "performance", measure_name: e.measureName, measure_type: e.measureType, unit: e.unit, value: e.value };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "search_vault_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "search_vault_item",
                      characters_typed_count: e.charactersTypedCount,
                      collection_count: e.collectionCount,
                      has_clicked_collection: e.hasClickedCollection,
                      has_interacted: e.hasInteracted,
                      highlight: e.highlight,
                      total_count: e.totalCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "update_vault_item_attachment" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "update_vault_item_attachment",
                      attachment_action: e.attachmentAction,
                      item_id: e.itemId,
                      item_type: e.itemType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "use_account_recovery_key" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "use_account_recovery_key", flow_step: e.flowStep, use_key_error_name: e.useKeyErrorName };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "ask_use_other_authentication" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "ask_use_other_authentication", next: e.next, previous: e.previous };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "lock_app" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "lock_app" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "authenticator_add_otp_code" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "authenticator_add_otp_code", otp_addition_mode: e.otpAdditionMode };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "user_settings" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "user_settings",
                      has_authentication_with_biometrics: e.hasAuthenticationWithBiometrics,
                      has_authentication_with_pin: e.hasAuthenticationWithPin,
                      has_authentication_with_remember_me: e.hasAuthenticationWithRememberMe,
                      has_authentication_with_webauthn: e.hasAuthenticationWithWebauthn,
                      has_autofill_activated: e.hasAutofillActivated,
                      has_automatic_two_factor_authentication_token_copy: e.hasAutomaticTwoFactorAuthenticationTokenCopy,
                      has_clear_clipboard: e.hasClearClipboard,
                      has_credentials_protect_with_master_password: e.hasCredentialsProtectWithMasterPassword,
                      has_ids_protect_with_master_password: e.hasIdsProtectWithMasterPassword,
                      has_lock_on_exit: e.hasLockOnExit,
                      has_master_password_biometric_reset: e.hasMasterPasswordBiometricReset,
                      has_payments_protect_with_master_password: e.hasPaymentsProtectWithMasterPassword,
                      has_secure_notes_protect_with_master_password: e.hasSecureNotesProtectWithMasterPassword,
                      has_unlock_item_with_biometric: e.hasUnlockItemWithBiometric,
                      lock_auto_timeout: e.lockAutoTimeout
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "toggle_analytics" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "toggle_analytics", is_analytics_enabled: e.isAnalyticsEnabled };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "generate_password" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "generate_password",
                      has_digits: e.hasDigits,
                      has_letters: e.hasLetters,
                      has_similar: e.hasSimilar,
                      has_symbols: e.hasSymbols,
                      length: e.length
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "password_manager_launch" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "password_manager_launch",
                      authenticator_otp_codes_count: e.authenticatorOtpCodesCount,
                      has_authenticator_installed: e.hasAuthenticatorInstalled,
                      is_first_launch: e.isFirstLaunch
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "add_new_payment_method" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "add_new_payment_method", flow_step: e.flowStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "buy_seat" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "buy_seat",
                      error_checkout: e.errorCheckout,
                      flow_step: e.flowStep,
                      has_promo: e.hasPromo,
                      initial_seat_count: e.initialSeatCount,
                      price_amount_cents: e.priceAmountCents,
                      price_currency_code: e.priceCurrencyCode,
                      purchased_seat_count: e.purchasedSeatCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "signup_to_dashlane" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "signup_to_dashlane",
                      invitation_link_click_origin: e.invitationLinkClickOrigin,
                      signup_flow_step: e.signupFlowStep
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_protect_with_master_password_setting" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "change_protect_with_master_password_setting",
                      flow_step: e.flowStep,
                      flow_type: e.flowType,
                      setting_level: e.settingLevel
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "add_two_factor_authentication_to_credential" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "add_two_factor_authentication_to_credential",
                      flow_step: e.flowStep,
                      item_id: e.itemId,
                      otp_addition_error: e.otpAdditionError,
                      otp_addition_mode: e.otpAdditionMode,
                      space: e.space
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "mv3_extension_task_interruption" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "mv3_extension_task_interruption",
                      business_domain: e.businessDomain,
                      feature: e.feature,
                      service_worker_start_date_time: e.serviceWorkerStartDateTime,
                      task_name: e.taskName,
                      task_start_date_time: e.taskStartDateTime
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "copy_vault_item_field" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "copy_vault_item_field",
                      field: e.field,
                      highlight: e.highlight,
                      index: e.index,
                      is_protected: e.isProtected,
                      item_id: e.itemId,
                      item_type: e.itemType,
                      total_count: e.totalCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "interact_in_tac_message" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "interact_in_tac_message",
                      has_clicked_cta: e.hasClickedCta,
                      has_cta: e.hasCta,
                      is_discarded: e.isDiscarded,
                      tac_notification: e.tacNotification
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "receive_remote_file_update" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "receive_remote_file_update",
                      flow_step: e.flowStep,
                      package_source: e.packageSource,
                      remote_file_update_error: e.remoteFileUpdateError
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "reveal_vault_item_field" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "reveal_vault_item_field",
                      field: e.field,
                      is_protected: e.isProtected,
                      item_id: e.itemId,
                      item_type: e.itemType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "select_collection" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "select_collection", collection_id: e.collectionId, collection_select_origin: e.collectionSelectOrigin };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_contact_email" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "change_contact_email", flow_step: e.flowStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "call_to_action" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "call_to_action",
                      call_to_action_list: e.callToActionList,
                      chosen_action: e.chosenAction,
                      has_chosen_no_action: e.hasChosenNoAction
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_accept" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "autofill_accept",
                      data_type_list: e.dataTypeList,
                      is_protected: e.isProtected,
                      is_set_as_default: e.isSetAsDefault,
                      item_position: e.itemPosition,
                      webcard_option_selected: e.webcardOptionSelected
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "resend_token" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "resend_token" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "autofill_dismiss" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "autofill_dismiss", dismiss_type: e.dismissType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "launch_password_changer" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "launch_password_changer",
                      bulk_change_credential_count: e.bulkChangeCredentialCount,
                      is_bulk_change: e.isBulkChange,
                      is_success: e.isSuccess
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_pricing_page" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "open_pricing_page", call_to_action: e.callToAction };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "sharing_select" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "sharing_select", option_type: e.optionType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_click" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "autofill_click", autofill_button: e.autofillButton };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "submit_in_product_form_answer" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "submit_in_product_form_answer",
                      answer_list: e.answerList,
                      chosen_answer_list: e.chosenAnswerList,
                      form_name: e.formName
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "sync" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "sync",
                      deduplicates: e.deduplicates,
                      duration: e.duration,
                      error: e.error,
                      error_description: e.errorDescription,
                      error_name: e.errorName,
                      error_step: e.errorStep,
                      extent: e.extent,
                      full_backup_size: e.fullBackupSize,
                      incoming_delete_count: e.incomingDeleteCount,
                      incoming_update_count: e.incomingUpdateCount,
                      item_group_id: e.itemGroupId,
                      outgoing_delete_count: e.outgoingDeleteCount,
                      outgoing_update_count: e.outgoingUpdateCount,
                      timestamp: e.timestamp,
                      treat_problem: e.treatProblem,
                      trigger: e.trigger
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "respond_shared_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "respond_shared_item",
                      has_accepted: e.hasAccepted,
                      item_type: e.itemType,
                      response_status: e.responseStatus,
                      rights: e.rights
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "verify_domain" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "verify_domain", domain_verification_step: e.domainVerificationStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "activate_vpn" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "activate_vpn", error_name: e.errorName, flow_step: e.flowStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "update_shared_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "update_shared_item", item_type: e.itemType, rights: e.rights, update_status: e.updateStatus };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "transfer_new_device" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "transfer_new_device",
                      action: e.action,
                      biometrics_enabled: e.biometricsEnabled,
                      logged_in_device_selected: e.loggedInDeviceSelected,
                      transfer_method: e.transferMethod
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "forget_master_password" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "forget_master_password",
                      has_biometric_reset: e.hasBiometricReset,
                      has_team_account_recovery: e.hasTeamAccountRecovery
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "send_manual_invite" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "send_manual_invite",
                      flow_step: e.flowStep,
                      import_size: e.importSize,
                      initial_seat_count: e.initialSeatCount,
                      invite_count: e.inviteCount,
                      invite_failed_count: e.inviteFailedCount,
                      invite_resent_count: e.inviteResentCount,
                      invite_successful_count: e.inviteSuccessfulCount,
                      is_import: e.isImport,
                      is_resend: e.isResend,
                      seat_added_count: e.seatAddedCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "perform_autofill" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "perform_autofill",
                      autofill_mechanism: e.autofillMechanism,
                      autofill_origin: e.autofillOrigin,
                      credential_filled_item_id: e.credentialFilledItemId,
                      fields_filled: e.fieldsFilled,
                      form_type_list: e.formTypeList,
                      is_autologin: e.isAutologin,
                      is_manual: e.isManual,
                      match_type: e.matchType,
                      mobile_browser_name: e.mobileBrowserName,
                      password_filled_health: e.passwordFilledHealth,
                      space: e.space
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "select_vault_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "select_vault_item",
                      highlight: e.highlight,
                      index: e.index,
                      item_id: e.itemId,
                      item_type: e.itemType,
                      total_count: e.totalCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_password_generate_show_more" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "autofill_password_generate_show_more" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "add_new_device" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "add_new_device", action: e.action };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "vault_report" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "vault_report",
                      collections_per_item_average_count: e.collectionsPerItemAverageCount,
                      collections_shared_count: e.collectionsSharedCount,
                      collections_total_count: e.collectionsTotalCount,
                      dark_web_alerts_active_count: e.darkWebAlertsActiveCount,
                      dark_web_alerts_count: e.darkWebAlertsCount,
                      domains_without_autofill_count: e.domainsWithoutAutofillCount,
                      ids: e.ids,
                      items_per_collection_average_count: e.itemsPerCollectionAverageCount,
                      items_shared_count: e.itemsSharedCount,
                      items_total_count: e.itemsTotalCount,
                      passkeys: e.passkeys,
                      password_changer_compatible_credentials_count: e.passwordChangerCompatibleCredentialsCount,
                      passwords: e.passwords,
                      passwords_compromised_compatible_with_password_changer_count:
                        e.passwordsCompromisedCompatibleWithPasswordChangerCount,
                      passwords_compromised_count: e.passwordsCompromisedCount,
                      passwords_compromised_through_dark_web_count: e.passwordsCompromisedThroughDarkWebCount,
                      passwords_excluded_count: e.passwordsExcludedCount,
                      passwords_protected_with_master_password_count: e.passwordsProtectedWithMasterPasswordCount,
                      passwords_reused_compatible_with_password_changer_count: e.passwordsReusedCompatibleWithPasswordChangerCount,
                      passwords_reused_count: e.passwordsReusedCount,
                      passwords_safe_count: e.passwordsSafeCount,
                      passwords_total_count: e.passwordsTotalCount,
                      passwords_weak_compatible_with_password_changer_count: e.passwordsWeakCompatibleWithPasswordChangerCount,
                      passwords_weak_count: e.passwordsWeakCount,
                      passwords_with_autologin_disabled_count: e.passwordsWithAutologinDisabledCount,
                      passwords_with_otp_count: e.passwordsWithOtpCount,
                      payments: e.payments,
                      personal_info: e.personalInfo,
                      scope: e.scope,
                      secure_notes: e.secureNotes,
                      security_alerts_active_count: e.securityAlertsActiveCount,
                      security_alerts_count: e.securityAlertsCount,
                      security_score: e.securityScore
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "click" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "click", button: e.button, click_origin: e.clickOrigin };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_correct" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "autofill_correct",
                      correction_type: e.correctionType,
                      field_corrected: e.fieldCorrected,
                      initial_field_classification_list: e.initialFieldClassificationList,
                      new_field_classification: e.newFieldClassification
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_two_factor_authentication_setting" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "change_two_factor_authentication_setting",
                      error_name: e.errorName,
                      flow_step: e.flowStep,
                      flow_type: e.flowType
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_suggest" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "autofill_suggest",
                      autofill_message_type_list: e.autofillMessageTypeList,
                      is_login_prefilled: e.isLoginPrefilled,
                      is_native_app: e.isNativeApp,
                      is_password_prefilled: e.isPasswordPrefilled,
                      is_restored_webcard: e.isRestoredWebcard,
                      is_suggest_last_unsaved: e.isSuggestLastUnsaved,
                      ms_to_webcard: e.msToWebcard,
                      vault_type_list: e.vaultTypeList,
                      webcard_item_total_count: e.webcardItemTotalCount,
                      webcard_save_options: e.webcardSaveOptions
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_help_center" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "open_help_center", help_center_article_cta: e.helpCenterArticleCta };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "view_page" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "view_page" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "mv3_extension_task_report" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "mv3_extension_task_report",
                      business_domain: e.businessDomain,
                      feature: e.feature,
                      has_woken_up_service_worker: e.hasWokenUpServiceWorker,
                      service_worker_interruption_count: e.serviceWorkerInterruptionCount,
                      service_worker_start_date_time: e.serviceWorkerStartDateTime,
                      task_end_date_time: e.taskEndDateTime,
                      task_name: e.taskName,
                      task_start_date_time: e.taskStartDateTime
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "authenticator_remove_otp_code" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "authenticator_remove_otp_code" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "export_data" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "export_data", backup_file_type: e.backupFileType };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "complete_tac_onboarding_task" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "complete_tac_onboarding_task", onboarding_task: e.onboardingTask };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "antiphishing_redirect" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "antiphishing_redirect" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "autofill_submit_form" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "autofill_submit_form",
                      fields_detected_by_analysis_engine_count: e.fieldsDetectedByAnalysisEngineCount,
                      fields_filled_by: e.fieldsFilledBy,
                      form_loaded_at_date_time: e.formLoadedAtDateTime,
                      form_submitted_at_date_time: e.formSubmittedAtDateTime,
                      form_type: e.formType,
                      has_modified_initially_autofilled_value: e.hasModifiedInitiallyAutofilledValue,
                      has_password_field: e.hasPasswordField,
                      total_form_fields_count: e.totalFormFieldsCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_vault_item_dropdown" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "open_vault_item_dropdown",
                      dropdown_type: e.dropdownType,
                      highlight: e.highlight,
                      index: e.index,
                      item_type: e.itemType,
                      total_count: e.totalCount
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "download_vpn_client" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const e = { name: "download_vpn_client" };
                  return Object.assign(Object.assign({}, t), { properties: e });
                }
                if (
                  (function (e) {
                    return "update_communications_preferences" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "update_communications_preferences", flow_step: e.flowStep, is_marketing_opt_in: e.isMarketingOptIn };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "change_master_password" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "change_master_password",
                      error_name: e.errorName,
                      flow_step: e.flowStep,
                      is_leaked: e.isLeaked,
                      is_weak: e.isWeak
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "update_vault_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "update_vault_item",
                      action: e.action,
                      collection_count: e.collectionCount,
                      credential_original_security_status: e.credentialOriginalSecurityStatus,
                      credential_security_status: e.credentialSecurityStatus,
                      fields_edited: e.fieldsEdited,
                      is_credential_currently_eligible_to_password_changer: e.isCredentialCurrentlyEligibleToPasswordChanger,
                      item_id: e.itemId,
                      item_type: e.itemType,
                      multi_select_id: e.multiSelectId,
                      space: e.space,
                      update_credential_origin: e.updateCredentialOrigin
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "authenticator_launch" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "authenticator_launch",
                      has_password_manager_installed: e.hasPasswordManagerInstalled,
                      is_first_launch: e.isFirstLaunch
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "open_extension" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "open_extension", authentication_status: e.authenticationStatus };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "autofill_setting" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "autofill_setting",
                      disable_setting: e.disableSetting,
                      is_bulk: e.isBulk,
                      item_type_list: e.itemTypeList
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "delete_u2f_authenticator" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "delete_u2f_authenticator", error_name: e.errorName, flow_step: e.flowStep };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "restart_plan" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "restart_plan", plan: e.plan, plan_billing_period: e.planBillingPeriod };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "share_item" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return {
                      name: "share_item",
                      groups_count: e.groupsCount,
                      individuals_count: e.individualsCount,
                      item_type: e.itemType,
                      request_status: e.requestStatus,
                      rights: e.rights
                    };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                if (
                  (function (e) {
                    return "delete_account_recovery_key" === e.name && "user" === e.category;
                  })(e)
                ) {
                  const i = (function (e) {
                    return { name: "delete_account_recovery_key", delete_key_reason: e.deleteKeyReason };
                  })(e);
                  return Object.assign(Object.assign({}, t), { properties: i });
                }
                throw new Error(`Unable to match user event: ${e.name}`);
              }
              !(function (e) {
                (e.AccountCreation = "account_creation"),
                  (e.AccountCreationConfirmMasterPassword = "account_creation/confirm_master_password"),
                  (e.AccountCreationUnlockOption = "account_creation/unlock_option"),
                  (e.AccountCreationPasswordTips = "account_creation/password_tips"),
                  (e.Admin = "admin"),
                  (e.AdminConsolePreview = "admin/console_preview"),
                  (e.FreeTrialStarted = "free_trial_started"),
                  (e.TrialUpgradeSuggestion = "trial_upgrade_suggestion"),
                  (e.CurrentPlan = "current_plan"),
                  (e.CurrentPlanDwmLearnMore = "current_plan/dwm_learn_more"),
                  (e.AvailablePlans = "available_plans"),
                  (e.AvailablePlansEssentialsDetails = "available_plans/essentials_details"),
                  (e.AvailablePlansPremiumDetails = "available_plans/premium_details"),
                  (e.AvailablePlansFamilyDetails = "available_plans/family_details"),
                  (e.AvailablePlansIntroductoryOffers = "available_plans/introductory_offers"),
                  (e.AvailablePlansIntroductoryOffersEssentialsDetails = "available_plans/introductory_offers/essentials_details"),
                  (e.AvailablePlansIntroductoryOffersPremiumDetails = "available_plans/introductory_offers/premium_details"),
                  (e.AvailablePlansIntroductoryOffersFamilyDetails = "available_plans/introductory_offers/family_details"),
                  (e.ConfirmItemDeletion = "confirm_item_deletion"),
                  (e.Help = "help"),
                  (e.PasswordGenerator = "password_generator"),
                  (e.Home = "home"),
                  (e.HomeAll = "home/all"),
                  (e.HomeAddItem = "home/add_item"),
                  (e.HomeAddItemDropdown = "home/add_item_dropdown"),
                  (e.HomePasswords = "home/passwords"),
                  (e.HomeSecureNotes = "home/secure_notes"),
                  (e.HomePayments = "home/payments"),
                  (e.HomePersonalInfo = "home/personal_info"),
                  (e.HomeIds = "home/ids"),
                  (e.HomeOnboardingChecklist = "home/onboarding_checklist"),
                  (e.HomeOnboardingChecklistAddFirstLogin = "home/onboarding_checklist/add_first_login"),
                  (e.HomeOnboardingChecklistAddFirstLoginWebsiteList = "home/onboarding_checklist/add_first_login/website_list"),
                  (e.HomeOnboardingChecklistTryAutofill = "home/onboarding_checklist/try_autofill"),
                  (e.HomeOnboardingChecklistTryAutofillStorePersonalInfo = "home/onboarding_checklist/try_autofill/store_personal_info"),
                  (e.HomeOnboardingChecklistAddDevice = "home/onboarding_checklist/add_device"),
                  (e.HomeOnboardingChecklistModalDisplay = "home/onboarding_checklist_modal_display"),
                  (e.HomeQuickActionsDropdown = "home/quick_actions_dropdown"),
                  (e.HomeAdminOnboardingChecklist = "home/admin_onboarding_checklist"),
                  (e.NavigationRevampAnnouncement = "navigation_revamp_announcement"),
                  (e.NavigationRevampAnnouncementWelcome = "navigation_revamp_announcement/welcome"),
                  (e.NavigationRevampAnnouncementNewFilters = "navigation_revamp_announcement/new_filters"),
                  (e.NavigationRevampAnnouncementNewBottomActions = "navigation_revamp_announcement/new_bottom_actions"),
                  (e.NavigationRevampAnnouncementNewLook = "navigation_revamp_announcement/new_look"),
                  (e.Menu = "menu"),
                  (e.Modal = "modal"),
                  (e.ModalEndOfTrialReached = "modal/end_of_trial_reached"),
                  (e.RightClickMenu = "right_click_menu"),
                  (e.RightClickMenuTutorial = "right_click_menu/tutorial"),
                  (e.PasswordHistory = "password_history"),
                  (e.PasswordHistoryAll = "password_history/all"),
                  (e.PasswordHistorySaved = "password_history/saved"),
                  (e.PasswordHistoryUnsaved = "password_history/unsaved"),
                  (e.PlansManagement = "plans_management"),
                  (e.PlansManagementAskCancel = "plans_management/ask_cancel"),
                  (e.PlansManagementCancelDone = "plans_management/cancel_done"),
                  (e.PlansManagementCancelError = "plans_management/cancel_error"),
                  (e.PlansManagementRefundDone = "plans_management/refund_done"),
                  (e.PlansManagementRefundError = "plans_management/refund_error"),
                  (e.Import = "import"),
                  (e.ImportBackupfile = "import/backupfile"),
                  (e.ImportBackupfileEnterPassword = "import/backupfile/enter_password"),
                  (e.ImportChrome = "import/chrome"),
                  (e.ImportComputer = "import/computer"),
                  (e.ImportCsv = "import/csv"),
                  (e.ImportCsvDecryptLastpassVault = "import/csv/decrypt_lastpass_vault"),
                  (e.ImportCsvLoginToLastpass = "import/csv/login_to_lastpass"),
                  (e.ImportCsvPreviewDataUpload = "import/csv/preview_data_upload"),
                  (e.ImportCsvSelectSpace = "import/csv/select_space"),
                  (e.ImportCsvSuccess = "import/csv/success"),
                  (e.ImportDash = "import/dash"),
                  (e.ImportDashEnterDashPassword = "import/dash/enter_dash_password"),
                  (e.ImportDashSuccess = "import/dash/success"),
                  (e.ImportLeaveProcess = "import/leave_process"),
                  (e.ImportPasswordManager = "import/password_manager"),
                  (e.ImportSelectPasswordSource = "import/select_password_source"),
                  (e.ImportSessionTimeout = "import/session_timeout"),
                  (e.Item = "item"),
                  (e.ItemAddress = "item/address"),
                  (e.ItemAddressCreate = "item/address/create"),
                  (e.ItemAddressDetails = "item/address/details"),
                  (e.ItemAll = "item/all"),
                  (e.ItemAllList = "item/all/list"),
                  (e.ItemBankStatement = "item/bank_statement"),
                  (e.ItemBankStatementCreate = "item/bank_statement/create"),
                  (e.ItemBankStatementDetails = "item/bank_statement/details"),
                  (e.ItemCompany = "item/company"),
                  (e.ItemCompanyCreate = "item/company/create"),
                  (e.ItemCompanyDetails = "item/company/details"),
                  (e.ItemCredential = "item/credential"),
                  (e.ItemCredentialCreate = "item/credential/create"),
                  (e.ItemCredentialCreateOption = "item/credential/create_option"),
                  (e.ItemCredentialCreateOptionList = "item/credential/create_option/list"),
                  (e.ItemCredentialCreateSelectWebsite = "item/credential/create_select_website"),
                  (e.ItemCredentialDetails = "item/credential/details"),
                  (e.ItemCredentialDetailsWebsites = "item/credential/details/websites"),
                  (e.ItemCredentialList = "item/credential/list"),
                  (e.ItemCreditCard = "item/credit_card"),
                  (e.ItemCreditCardCreate = "item/credit_card/create"),
                  (e.ItemCreditCardDetails = "item/credit_card/details"),
                  (e.ItemDriverLicence = "item/driver_licence"),
                  (e.ItemDriverLicenceCreate = "item/driver_licence/create"),
                  (e.ItemDriverLicenceDetails = "item/driver_licence/details"),
                  (e.ItemEmail = "item/email"),
                  (e.ItemEmailCreate = "item/email/create"),
                  (e.ItemEmailDetails = "item/email/details"),
                  (e.ItemFiscalStatement = "item/fiscal_statement"),
                  (e.ItemFiscalStatementCreate = "item/fiscal_statement/create"),
                  (e.ItemFiscalStatementDetails = "item/fiscal_statement/details"),
                  (e.ItemIdCard = "item/id_card"),
                  (e.ItemIdCardCreate = "item/id_card/create"),
                  (e.ItemIdCardDetails = "item/id_card/details"),
                  (e.ItemId = "item/id"),
                  (e.ItemIdList = "item/id/list"),
                  (e.ItemIdentity = "item/identity"),
                  (e.ItemIdentityCreate = "item/identity/create"),
                  (e.ItemIdentityDetails = "item/identity/details"),
                  (e.ItemPasskey = "item/passkey"),
                  (e.ItemPasskeyDetails = "item/passkey/details"),
                  (e.ItemPasskeyList = "item/passkey/list"),
                  (e.ItemPassport = "item/passport"),
                  (e.ItemPassportCreate = "item/passport/create"),
                  (e.ItemPassportDetails = "item/passport/details"),
                  (e.ItemPayment = "item/payment"),
                  (e.ItemPaymentList = "item/payment/list"),
                  (e.ItemPaypal = "item/paypal"),
                  (e.ItemPaypalCreate = "item/paypal/create"),
                  (e.ItemPaypalDetails = "item/paypal/details"),
                  (e.ItemPersonalInfo = "item/personal_info"),
                  (e.ItemPersonalInfoList = "item/personal_info/list"),
                  (e.ItemPhone = "item/phone"),
                  (e.ItemPhoneCreate = "item/phone/create"),
                  (e.ItemPhoneDetails = "item/phone/details"),
                  (e.ItemQuickActionsDropdown = "item/quick_actions_dropdown"),
                  (e.ItemSecureNote = "item/secure_note"),
                  (e.ItemSecureNoteCreate = "item/secure_note/create"),
                  (e.ItemSecureNoteDetails = "item/secure_note/details"),
                  (e.ItemSecureNoteList = "item/secure_note/list"),
                  (e.ItemSocialSecurityStatement = "item/social_security_statement"),
                  (e.ItemSocialSecurityStatementCreate = "item/social_security_statement/create"),
                  (e.ItemSocialSecurityStatementDetails = "item/social_security_statement/details"),
                  (e.ItemWebsite = "item/website"),
                  (e.ItemWebsiteCreate = "item/website/create"),
                  (e.ItemWebsiteDetails = "item/website/details"),
                  (e.Collection = "collection"),
                  (e.CollectionCreate = "collection/create"),
                  (e.CollectionEdit = "collection/edit"),
                  (e.CollectionDelete = "collection/delete"),
                  (e.CollectionDetails = "collection/details"),
                  (e.CollectionList = "collection/list"),
                  (e.CollectionQuickActionsDropdown = "collection/quick_actions_dropdown"),
                  (e.Login = "login"),
                  (e.LoginDeviceTransfer = "login/device_transfer"),
                  (e.LoginDeviceTransfer2fa = "login/device_transfer/2fa"),
                  (e.LoginDeviceTransferAccountRecoveryKey = "login/device_transfer/account_recovery_key"),
                  (e.LoginDeviceTransferHelp = "login/device_transfer/help"),
                  (e.LoginDeviceTransferQrCode = "login/device_transfer/qr_code"),
                  (e.LoginDeviceTransferQrCodeError = "login/device_transfer/qr_code/error"),
                  (e.LoginDeviceTransferRequestRejected = "login/device_transfer/request_rejected"),
                  (e.LoginDeviceTransferSecurityChallenge = "login/device_transfer/security_challenge"),
                  (e.LoginDeviceTransferSetPin = "login/device_transfer/set_pin"),
                  (e.LoginDeviceTransferSetupBiometrics = "login/device_transfer/setup_biometrics"),
                  (e.LoginDeviceTransferSetupBiometricsError = "login/device_transfer/setup_biometrics/error"),
                  (e.LoginDeviceTransferSuccess = "login/device_transfer/success"),
                  (e.LoginEnforce2faBusiness = "login/enforce_2fa_business"),
                  (e.LoginMasterPassword = "login/master_password"),
                  (e.LoginMasterPasswordAccountRecoveryEnterRecoveryKey = "login/master_password/account_recovery_enter_recovery_key"),
                  (e.LoginMasterPasswordAccountRecoveryCreateNewMp = "login/master_password/account_recovery_create_new_mp"),
                  (e.LoginMasterPasswordAccountRecoverySuccess = "login/master_password/account_recovery_success"),
                  (e.LoginSso = "login/sso"),
                  (e.LoginWebauthn = "login/webauthn"),
                  (e.Notification = "notification"),
                  (e.NotificationGettingStarted = "notification/getting_started"),
                  (e.NotificationGettingStartedList = "notification/getting_started/list"),
                  (e.NotificationHome = "notification/home"),
                  (e.NotificationNew = "notification/new"),
                  (e.NotificationNewList = "notification/new/list"),
                  (e.NotificationSecurity = "notification/security"),
                  (e.NotificationSecurityDetails = "notification/security/details"),
                  (e.NotificationSecurityList = "notification/security/list"),
                  (e.NotificationSharing = "notification/sharing"),
                  (e.NotificationSharingList = "notification/sharing/list"),
                  (e.NotificationAutofill = "notification/autofill"),
                  (e.NotificationAutofillSave = "notification/autofill/save"),
                  (e.NotificationAutofillReplace = "notification/autofill/replace"),
                  (e.NotificationAutofillDataCapture = "notification/autofill/data_capture"),
                  (e.NotificationPromotions = "notification/promotions"),
                  (e.NotificationPromotionsList = "notification/promotions/list"),
                  (e.NotificationYourAccount = "notification/your_account"),
                  (e.NotificationYourAccountList = "notification/your_account/list"),
                  (e.NotificationFollowUpNotification = "notification/follow_up_notification"),
                  (e.NotificationFollowUpNotificationContent = "notification/follow_up_notification/content"),
                  (e.NotificationFollowUpNotificationDiscovery = "notification/follow_up_notification/discovery"),
                  (e.NotificationFollowUpNotificationReminder = "notification/follow_up_notification/reminder"),
                  (e.NotificationOnboarding = "notification/onboarding"),
                  (e.NotificationOnboardingPinExtension = "notification/onboarding/pin_extension"),
                  (e.Paywall = "paywall"),
                  (e.PaywallSecureNotes = "paywall/secure_notes"),
                  (e.PaywallDarkWebMonitoring = "paywall/dark_web_monitoring"),
                  (e.PaywallFreeUserPasswordLimitReached = "paywall/free_user_password_limit_reached"),
                  (e.PaywallPasswordChanger = "paywall/password_changer"),
                  (e.PaywallPasswordLimit = "paywall/password_limit"),
                  (e.PaywallSharingLimit = "paywall/sharing_limit"),
                  (e.PaywallVpn = "paywall/vpn"),
                  (e.PaywallB2b = "paywall/b2b"),
                  (e.PaywallFamily = "paywall/family"),
                  (e.PaywallDeviceSyncLimit = "paywall/device_sync_limit"),
                  (e.PaywallDeviceSyncLimitUnlinkDevice = "paywall/device_sync_limit/unlink_device"),
                  (e.Search = "search"),
                  (e.Settings = "settings"),
                  (e.SettingsAccount = "settings/account"),
                  (e.SettingsAccountChangeContactEmail = "settings/account/change_contact_email"),
                  (e.SettingsAskAutofillActivation = "settings/ask_autofill_activation"),
                  (e.SettingsAddNewDevice = "settings/add_new_device"),
                  (e.SettingsAddNewDeviceAttemptLimitReached = "settings/add_new_device/attempt_limit_reached"),
                  (e.SettingsAddNewDeviceError = "settings/add_new_device/error"),
                  (e.SettingsAddNewDeviceScanQrCode = "settings/add_new_device/scan_qr_code"),
                  (e.SettingsAddNewDeviceSecurityChallenge = "settings/add_new_device/security_challenge"),
                  (e.SettingsAddNewDeviceSuccess = "settings/add_new_device/success"),
                  (e.SettingsAddNewDeviceTimeout = "settings/add_new_device/timeout"),
                  (e.SettingsAddNewDeviceTransferCancelled = "settings/add_new_device/transfer_cancelled"),
                  (e.SettingsAutofill = "settings/autofill"),
                  (e.SettingsAutofillPreferences = "settings/autofill/preferences"),
                  (e.SettingsConfirmAutofillActivation = "settings/confirm_autofill_activation"),
                  (e.SettingsPlanPage = "settings/plan_page"),
                  (e.SettingsDevice = "settings/device"),
                  (e.SettingsDeviceList = "settings/device/list"),
                  (e.SettingsExport = "settings/export"),
                  (e.SettingsGeneral = "settings/general"),
                  (e.SettingsMore = "settings/more"),
                  (e.SettingsMoreFeatures = "settings/more_features"),
                  (e.SettingsSecurity = "settings/security"),
                  (e.SettingsSecurityChangeMasterPassword = "settings/security/change_master_password"),
                  (e.SettingsSecurityProtectWithMasterPassword = "settings/security/protect_with_master_password"),
                  (e.SettingsSecurityProtectWithMasterPasswordDisable = "settings/security/protect_with_master_password/disable"),
                  (e.SettingsSecurityProtectWithMasterPasswordEnable = "settings/security/protect_with_master_password/enable"),
                  (e.SettingsSecurityProtectWithMasterPasswordCredentials = "settings/security/protect_with_master_password_credentials"),
                  (e.SettingsSecurityProtectWithMasterPasswordCredentialsDisable =
                    "settings/security/protect_with_master_password_credentials/disable"),
                  (e.SettingsSecurityProtectWithMasterPasswordCredentialsEnable =
                    "settings/security/protect_with_master_password_credentials/enable"),
                  (e.SettingsSecurityProtectWithMasterPasswordIds = "settings/security/protect_with_master_password_ids"),
                  (e.SettingsSecurityProtectWithMasterPasswordIdsDisable = "settings/security/protect_with_master_password_ids/disable"),
                  (e.SettingsSecurityProtectWithMasterPasswordIdsEnable = "settings/security/protect_with_master_password_ids/enable"),
                  (e.SettingsSecurityProtectWithMasterPasswordPayments = "settings/security/protect_with_master_password_payments"),
                  (e.SettingsSecurityProtectWithMasterPasswordPaymentsDisable =
                    "settings/security/protect_with_master_password_payments/disable"),
                  (e.SettingsSecurityProtectWithMasterPasswordPaymentsEnable =
                    "settings/security/protect_with_master_password_payments/enable"),
                  (e.SettingsSecurityProtectWithMasterPasswordSecureNotes = "settings/security/protect_with_master_password_secure_notes"),
                  (e.SettingsSecurityProtectWithMasterPasswordSecureNotesDisable =
                    "settings/security/protect_with_master_password_secure_notes/disable"),
                  (e.SettingsSecurityProtectWithMasterPasswordSecureNotesEnable =
                    "settings/security/protect_with_master_password_secure_notes/enable"),
                  (e.SettingsSecurityTwoFactorAuthentication = "settings/security/two_factor_authentication"),
                  (e.SettingsSecurityTwoFactorAuthenticationDisable = "settings/security/two_factor_authentication/disable"),
                  (e.SettingsSecurityTwoFactorAuthenticationDisable6DigitsCode =
                    "settings/security/two_factor_authentication/disable/6_digits_code"),
                  (e.SettingsSecurityTwoFactorAuthenticationDisableBackupCode =
                    "settings/security/two_factor_authentication/disable/backup_code"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnable = "settings/security/two_factor_authentication/enable"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnable6DigitsCode =
                    "settings/security/two_factor_authentication/enable/6_digits_code"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableBackupCodes =
                    "settings/security/two_factor_authentication/enable/backup_codes"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableBackupPhoneNumber =
                    "settings/security/two_factor_authentication/enable/backup_phone_number"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableQrCode = "settings/security/two_factor_authentication/enable/qr_code"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableSecurityLevel =
                    "settings/security/two_factor_authentication/enable/security_level"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableDownloadAuthenticator =
                    "settings/security/two_factor_authentication/enable/download_authenticator"),
                  (e.SettingsSecurityTwoFactorAuthenticationEnableSuccessConfirmation =
                    "settings/security/two_factor_authentication/enable/success_confirmation"),
                  (e.SettingsSecurityRecoveryKey = "settings/security/recovery_key"),
                  (e.SettingsSecurityRecoveryKeyEnable = "settings/security/recovery_key/enable"),
                  (e.SettingsSecurityRecoveryKeyGenerateNew = "settings/security/recovery_key/generate_new"),
                  (e.SettingsSecurityRecoveryKeyStore = "settings/security/recovery_key/store"),
                  (e.SettingsSecurityRecoveryKeyConfirm = "settings/security/recovery_key/confirm"),
                  (e.SettingsSecurityRecoveryKeySuccess = "settings/security/recovery_key/success"),
                  (e.SettingsSecurityRecoveryKeyDisable = "settings/security/recovery_key/disable"),
                  (e.SettingsThiswebsite = "settings/thiswebsite"),
                  (e.Sharing = "sharing"),
                  (e.SharingCreate = "sharing/create"),
                  (e.SharingCreateItem = "sharing/create/item"),
                  (e.SharingCreateMember = "sharing/create/member"),
                  (e.SharingCreatePermission = "sharing/create/permission"),
                  (e.SharingGroup = "sharing/group"),
                  (e.SharingGroupItem = "sharing/group/item"),
                  (e.SharingGroupItemList = "sharing/group/item/list"),
                  (e.SharingGroupMember = "sharing/group/member"),
                  (e.SharingGroupMemberList = "sharing/group/member/list"),
                  (e.SharingList = "sharing/list"),
                  (e.SharingMember = "sharing/member"),
                  (e.SharingMemberDetails = "sharing/member/details"),
                  (e.Tac = "tac"),
                  (e.TacAccount = "tac/account"),
                  (e.TacAccountContactSupport = "tac/account/contact_support"),
                  (e.TacAccountContactSupportBusiness = "tac/account/contact_support/business"),
                  (e.TacAccountContactSupportTeam = "tac/account/contact_support/team"),
                  (e.TacAccountBillingInfo = "tac/account/billing_info"),
                  (e.TacAccountBuy = "tac/account/buy"),
                  (e.TacAccountCustomizeInvoice = "tac/account/customize_invoice"),
                  (e.TacAccountPaymentMethod = "tac/account/payment_method"),
                  (e.TacAccountSendFeedback = "tac/account/send_feedback"),
                  (e.TacAccountTrialEndModal = "tac/account/trial_end_modal"),
                  (e.TacActivity = "tac/activity"),
                  (e.TacActivityList = "tac/activity/list"),
                  (e.TacActivityBeta = "tac/activity/beta"),
                  (e.TacActivityDownload = "tac/activity/download"),
                  (e.TacDarkWebInsights = "tac/dark_web_insights"),
                  (e.TacDashboard = "tac/dashboard"),
                  (e.TacGroup = "tac/group"),
                  (e.TacGroupDetails = "tac/group/details"),
                  (e.TacGroupList = "tac/group/list"),
                  (e.TacOnboardingChecklist = "tac/onboarding_checklist"),
                  (e.TacSettings = "tac/settings"),
                  (e.TacSettingsAccountRecovery = "tac/settings/account_recovery"),
                  (e.TacSettingsPolicies = "tac/settings/policies"),
                  (e.TacSettingsSso = "tac/settings/sso"),
                  (e.TacSettingsSsoLegacy = "tac/settings/sso_legacy"),
                  (e.TacSettingsDirectorySync = "tac/settings/directory_sync"),
                  (e.TacSettingsDirectorySyncActiveDirectory = "tac/settings/directory_sync/active_directory"),
                  (e.TacSettingsDirectorySyncPaywall = "tac/settings/directory_sync/paywall"),
                  (e.TacSettingsDirectorySyncSamlProvisioning = "tac/settings/directory_sync/saml_provisioning"),
                  (e.TacSettingsDirectorySyncScimProvisioning = "tac/settings/directory_sync/scim_provisioning"),
                  (e.TacSettingsDirectorySyncConfidentialScim = "tac/settings/directory_sync/confidential_scim"),
                  (e.TacSettingsDirectorySyncSelfHostedScim = "tac/settings/directory_sync/self_hosted_scim"),
                  (e.TacSso = "tac/sso"),
                  (e.TacSsoPaywall = "tac/sso/paywall"),
                  (e.TacUser = "tac/user"),
                  (e.TacUserList = "tac/user/list"),
                  (e.TacModalTrialExpiresToday = "tac/modal_trial_expires_today"),
                  (e.TacModalReasonsToExtendTrial = "tac/modal_reasons_to_extend_trial"),
                  (e.TacModalTrialHasBeenExtended = "tac/modal_trial_has_been_extended"),
                  (e.TacModalContactSupport = "tac/modal_contact_support"),
                  (e.TacModalReasonsToCancelSubscription = "tac/modal_reasons_to_cancel_subscription"),
                  (e.TacConfirmSubscriptionCancellationRequestSubmission = "tac/confirm_subscription_cancellation_request_submission"),
                  (e.Tools = "tools"),
                  (e.ToolsAuthenticator = "tools/authenticator"),
                  (e.ToolsAuthenticatorExplore = "tools/authenticator/explore"),
                  (e.ToolsAuthenticatorLogins = "tools/authenticator/logins"),
                  (e.ToolsAuthenticatorSetup = "tools/authenticator/setup"),
                  (e.ToolsAuthenticatorSetupQrCode = "tools/authenticator/setup/qr_code"),
                  (e.ToolsAuthenticatorSetupTextCode = "tools/authenticator/setup/text_code"),
                  (e.ToolsAuthenticatorWelcome = "tools/authenticator/welcome"),
                  (e.ToolsDarkWebMonitoring = "tools/dark_web_monitoring"),
                  (e.ToolsDarkWebMonitoringList = "tools/dark_web_monitoring/list"),
                  (e.ToolsDarkWebMonitoringAlert = "tools/dark_web_monitoring/alert"),
                  (e.ToolsMore = "tools/more"),
                  (e.ToolsPasswordChanger = "tools/password_changer"),
                  (e.ToolsPasswordChangerCompatibleCredentialsList = "tools/password_changer/compatible_credentials_list"),
                  (e.ToolsPasswordChangerCompatibleCredentialsListConfirmChange =
                    "tools/password_changer/compatible_credentials_list/confirm_change"),
                  (e.ToolsPasswordChangerCompatibleCredentialsListEmptyState =
                    "tools/password_changer/compatible_credentials_list/empty_state"),
                  (e.ToolsPasswordChangerCredential = "tools/password_changer/credential"),
                  (e.ToolsPasswordChangerCredentialConfirmChange = "tools/password_changer/credential/confirm_change"),
                  (e.ToolsPasswordChangerError = "tools/password_changer/error"),
                  (e.ToolsPasswordChangerErrorIdentityVerificationFailure = "tools/password_changer/error/identity_verification_failure"),
                  (e.ToolsPasswordChangerErrorLoginFailure = "tools/password_changer/error/login_failure"),
                  (e.ToolsPasswordChangerErrorNetworkFailure = "tools/password_changer/error/network_failure"),
                  (e.ToolsPasswordChangerErrorUnknownError = "tools/password_changer/error/unknown_error"),
                  (e.ToolsPasswordChangerSuccess = "tools/password_changer/success"),
                  (e.ToolsPasswordGenerator = "tools/password_generator"),
                  (e.ToolsPasswordGeneratorHistory = "tools/password_generator/history"),
                  (e.ToolsPasswordHealth = "tools/password_health"),
                  (e.ToolsPasswordHealthList = "tools/password_health/list"),
                  (e.ToolsPasswordHealthListCompromised = "tools/password_health/list/compromised"),
                  (e.ToolsPasswordHealthListExcluded = "tools/password_health/list/excluded"),
                  (e.ToolsPasswordHealthListReused = "tools/password_health/list/reused"),
                  (e.ToolsPasswordHealthListWeak = "tools/password_health/list/weak"),
                  (e.ToolsPasswordHealthOverview = "tools/password_health/overview"),
                  (e.ToolsVpn = "tools/vpn"),
                  (e.ToolsVpnPrivacyConsent = "tools/vpn/privacy_consent"),
                  (e.Unlock = "unlock"),
                  (e.Background = "background"),
                  (e.Keyboard = "keyboard"),
                  (e.KeyboardAutofill = "keyboard/autofill"),
                  (e.KeyboardAutofillSuggestion = "keyboard/autofill/suggestion"),
                  (e.Dropdown = "dropdown"),
                  (e.DropdownAutofill = "dropdown/autofill"),
                  (e.DropdownAutofillReactivation = "dropdown/autofill/reactivation"),
                  (e.DropdownAutofillSuggestion = "dropdown/autofill/suggestion"),
                  (e.DropdownAutofillSuggestionOptions = "dropdown/autofill/suggestion/options"),
                  (e.DropdownAutofillSuggestionOptionsCorrection = "dropdown/autofill/suggestion/options/correction"),
                  (e.DropdownAutofillPasswordGenerator = "dropdown/autofill/password_generator"),
                  (e.DropdownAutofillPasswordGeneratorOptions = "dropdown/autofill/password_generator/options"),
                  (e.Family = "family"),
                  (e.FamilyDashboard = "family/dashboard"),
                  (e.Autofill = "autofill"),
                  (e.AutofillDropdown = "autofill/dropdown"),
                  (e.AutofillDropdownReactivationLoginOnly = "autofill/dropdown/reactivation_login_only"),
                  (e.AutofillDropdownReactivationLoginOrCreateAccount = "autofill/dropdown/reactivation_login_or_create_account"),
                  (e.AutofillDropdownReactivationBiometrics = "autofill/dropdown/reactivation_biometrics"),
                  (e.AutofillDropdownAddAddress = "autofill/dropdown/add_address"),
                  (e.AutofillDropdownAddBankStatement = "autofill/dropdown/add_bank_statement"),
                  (e.AutofillDropdownAddCompany = "autofill/dropdown/add_company"),
                  (e.AutofillDropdownAddCreditCard = "autofill/dropdown/add_credit_card"),
                  (e.AutofillDropdownAddDriverLicense = "autofill/dropdown/add_driver_license"),
                  (e.AutofillDropdownAddEmail = "autofill/dropdown/add_email"),
                  (e.AutofillDropdownAddFiscal = "autofill/dropdown/add_fiscal"),
                  (e.AutofillDropdownAddIdentity = "autofill/dropdown/add_identity"),
                  (e.AutofillDropdownAddIdCard = "autofill/dropdown/add_id_card"),
                  (e.AutofillDropdownAddPassword = "autofill/dropdown/add_password"),
                  (e.AutofillDropdownAddPaypal = "autofill/dropdown/add_paypal"),
                  (e.AutofillDropdownAddPhone = "autofill/dropdown/add_phone"),
                  (e.AutofillDropdownAddSocialSecurity = "autofill/dropdown/add_social_security"),
                  (e.AutofillDropdownAddWebsite = "autofill/dropdown/add_website"),
                  (e.AutofillDropdownSuggestion = "autofill/dropdown/suggestion"),
                  (e.AutofillDropdownSuggestionSearch = "autofill/dropdown/suggestion/search"),
                  (e.AutofillDropdownSettings = "autofill/dropdown/settings"),
                  (e.AutofillDropdownCorrect = "autofill/dropdown/correct"),
                  (e.AutofillDropdownPasswordGenerator = "autofill/dropdown/password_generator"),
                  (e.AutofillDropdownPasswordGeneratorSettings = "autofill/dropdown/password_generator/settings"),
                  (e.AutofillNotification = "autofill/notification"),
                  (e.AutofillNotificationAutofillIsDisabled = "autofill/notification/autofill_is_disabled"),
                  (e.AutofillNotificationPhishingPrevention = "autofill/notification/phishing_prevention"),
                  (e.AutofillNotificationSuggestion = "autofill/notification/suggestion"),
                  (e.AutofillNotificationFreeUserPasswordLimitReached = "autofill/notification/free_user_password_limit_reached"),
                  (e.AutofillNotificationB2bTrialEndReached = "autofill/notification/b2b_trial_end_reached"),
                  (e.AutofillNotificationSave = "autofill/notification/save"),
                  (e.AutofillNotificationSavePasskey = "autofill/notification/save/passkey"),
                  (e.AutofillNotificationDataCapture = "autofill/notification/data_capture"),
                  (e.AutofillNotificationAuthenticate = "autofill/notification/authenticate"),
                  (e.AutofillNotificationAuthenticatePasskey = "autofill/notification/authenticate/passkey"),
                  (e.AutofillNotificationRememberAlert = "autofill/notification/remember_alert"),
                  (e.AutofillNotificationAutologin = "autofill/notification/autologin"),
                  (e.AutofillNotificationLinkDomain = "autofill/notification/link_domain"),
                  (e.AutofillNotificationUpdateOrSaveAsNew = "autofill/notification/update_or_save_as_new"),
                  (e.AutofillNotificationLoginUpdated = "autofill/notification/login_updated"),
                  (e.AutofillNotificationLoginCreated = "autofill/notification/login_created"),
                  (e.AutofillNotificationWarning = "autofill/notification/warning"),
                  (e.AutofillNotificationWarningGeneratePasswordDashlaneAccountEmail =
                    "autofill/notification/warning/generate_password_dashlane_account_email"),
                  (e.AutofillNotificationOnboarding = "autofill/notification/onboarding"),
                  (e.AutofillNotificationOnboardingFirstPasswordSaved = "autofill/notification/onboarding/first_password_saved"),
                  (e.AutofillNotificationOnboardingTryAgainOrGoApp = "autofill/notification/onboarding/try_again_or_go_app"),
                  (e.AutofillNotificationOnboardingDashlanePro = "autofill/notification/onboarding/dashlane_pro"),
                  (e.AutofillAccessibility = "autofill/accessibility"),
                  (e.AutofillAccessibilitySuggestion = "autofill/accessibility/suggestion"),
                  (e.AutofillKeyboard = "autofill/keyboard"),
                  (e.AutofillKeyboardSuggestion = "autofill/keyboard/suggestion"),
                  (e.AutofillAuthentication = "autofill/authentication"),
                  (e.AutofillExplorePasswords = "autofill/explore_passwords"),
                  (e.AutofillExplorePasswordsSearch = "autofill/explore_passwords/search"),
                  (e.AutofillExplorePasswordsCreate = "autofill/explore_passwords/create"),
                  (e.AutofillExplorePasswordsCreateConfirmation = "autofill/explore_passwords/create/confirmation"),
                  (e.AutofillWarning = "autofill/warning"),
                  (e.AutofillTutorial = "autofill/tutorial"),
                  (e.AutofillTutorialHowToLogin = "autofill/tutorial/how_to_login"),
                  (e.AutofillTutorialHowToGeneratePasswords = "autofill/tutorial/how_to_generate_passwords"),
                  (e.AutofillTutorialHowToSyncInformation = "autofill/tutorial/how_to_sync_information"),
                  (e.Review = "review"),
                  (e.ReviewRateUsChromeWebStore = "review/rate_us_chrome_web_store"),
                  (e.IntroductoryOffers = "introductory_offers"),
                  (e.AntiphishingRedirect = "antiphishing_redirect"),
                  (e.AuthenticatorApp = "authenticator_app"),
                  (e.AuthenticatorAppHome = "authenticator_app/home"),
                  (e.AuthenticatorAppHomeHelp = "authenticator_app/home/help"),
                  (e.AuthenticatorAppIntroAddSecurityLayer = "authenticator_app/intro_add_security_layer"),
                  (e.AuthenticatorAppIntroSecurelyLogin = "authenticator_app/intro_securely_login"),
                  (e.AuthenticatorAppIntroBackupWithPwm = "authenticator_app/intro_backup_with_pwm"),
                  (e.AuthenticatorAppAddAccountToken = "authenticator_app/add_account_token"),
                  (e.AuthenticatorAppAddAccountTokenHowToLogInAccount = "authenticator_app/add_account_token/how_to_log_in_account"),
                  (e.AuthenticatorAppAddAccountTokenHowToLogInAccountHelp =
                    "authenticator_app/add_account_token/how_to_log_in_account/help"),
                  (e.AuthenticatorAppAddAccountTokenHowToTurnOn2fa = "authenticator_app/add_account_token/how_to_turn_on_2fa"),
                  (e.AuthenticatorAppAddAccountTokenHowToTurnOn2faHelp = "authenticator_app/add_account_token/how_to_turn_on_2fa/help"),
                  (e.AuthenticatorAppAddAccountTokenHowToSetupCode = "authenticator_app/add_account_token/how_to_setup_code"),
                  (e.AuthenticatorAppAddAccountTokenHowToSetupCodeHelp = "authenticator_app/add_account_token/how_to_setup_code/help"),
                  (e.AuthenticatorAppAddAccountTokenSelectSetupMethod = "authenticator_app/add_account_token/select_setup_method"),
                  (e.JoinDashlaneTeam = "join_dashlane_team"),
                  (e.JoinDashlaneTeamInstallExtension = "join_dashlane_team/install_extension"),
                  (e.JoinDashlaneTeamEnterEmailAddress = "join_dashlane_team/enter_email_address"),
                  (e.JoinDashlaneTeamCreateMasterPassword = "join_dashlane_team/create_master_password"),
                  (e.JoinDashlaneTeamVerifyEmailAddress = "join_dashlane_team/verify_email_address"),
                  (e.PrivacySettings = "privacy_settings"),
                  (e.UserProfiling = "user_profiling"),
                  (e.UserProfilingFamiliarityWithDashlane = "user_profiling/familiarity_with_dashlane"),
                  (e.Referral = "referral");
              })(o || (o = {})),
                (function (e) {
                  (e.AccountCreationCreateAccount = "account_creation/create_account"),
                    (e.AccountCreationCreateMasterPassword = "account_creation/create_master_password"),
                    (e.AccountCreationEmail = "account_creation/email"),
                    (e.AccountCreationTermsServices = "account_creation/terms_services"),
                    (e.Onboarding = "onboarding"),
                    (e.OnboardingTrustScreens = "onboarding/trust_screens"),
                    (e.LoginEmail = "login/email"),
                    (e.LoginToken = "login/token"),
                    (e.LoginTokenAuthenticator = "login/token/authenticator"),
                    (e.LoginTokenEmail = "login/token/email"),
                    (e.ToolsNewDevice = "tools/new_device"),
                    (e.UnlockBiometric = "unlock/biometric"),
                    (e.UnlockMp = "unlock/mp"),
                    (e.UnlockPin = "unlock/pin");
                })(a || (a = {})),
                Object.assign(Object.assign({}, o), a);
              const d = Object.values(a).map((e) => e.toString()),
                u = "1.22.1";
              class p {
                constructor(e, t, i, n, o) {
                  (this.logRepository = e), (this.context = t), (this.contextAnonymous = i), (this.page = n), (this.browseSection = o);
                }
                logEvent(e) {
                  switch (e.category) {
                    case "user":
                      return this.logUserEvent(e);
                    case "anonymous":
                      return this.logAnonymousEvent(e);
                    default:
                      throw new Error(`Attempted to log event with unknown category ${e.category}`);
                  }
                }
                logUserEvent(e) {
                  const t = l(e, {
                    schema_version: u,
                    id: (0, r.Z)(),
                    date: new Date().toISOString(),
                    date_origin: n.Local,
                    category: "user",
                    context: this.context,
                    browse: this.page || this.browseSection ? { origin_page: this.page, origin_component: this.browseSection } : {}
                  });
                  return this.logRepository.storeEvent(t, e.priority, e.isEventTriggeringSession), t;
                }
                logAnonymousEvent(e) {
                  const [t] = new Date().toISOString().split("T"),
                    i = (function (e, t) {
                      if (
                        (function (e) {
                          return "register_passkey" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "register_passkey",
                            algorithms_supported_list: e.algorithmsSupportedList,
                            authenticator_attachment: e.authenticatorAttachment,
                            authenticator_resident_key: e.authenticatorResidentKey,
                            authenticator_user_verification: e.authenticatorUserVerification,
                            domain: e.domain,
                            is_registered_with_dashlane: e.isRegisteredWithDashlane,
                            ms_to_complete_registration: e.msToCompleteRegistration,
                            ms_to_complete_registration_timeout: e.msToCompleteRegistrationTimeout,
                            passkey_registration_error_type: e.passkeyRegistrationErrorType,
                            passkey_registration_status: e.passkeyRegistrationStatus,
                            webauthn_extension_supported_list: e.webauthnExtensionSupportedList
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "update_credential" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "update_credential",
                            action: e.action,
                            associated_apps_added_list: e.associatedAppsAddedList,
                            associated_apps_removed_list: e.associatedAppsRemovedList,
                            associated_websites_added_list: e.associatedWebsitesAddedList,
                            associated_websites_removed_list: e.associatedWebsitesRemovedList,
                            credential_original_security_status: e.credentialOriginalSecurityStatus,
                            credential_security_status: e.credentialSecurityStatus,
                            domain: e.domain,
                            field_list: e.fieldList,
                            is_credential_currently_eligible_to_password_changer: e.isCredentialCurrentlyEligibleToPasswordChanger,
                            space: e.space,
                            update_credential_origin: e.updateCredentialOrigin
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "other_authenticators_installed_report" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "other_authenticators_installed_report", other_authenticator_list: e.otherAuthenticatorList };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_display_icons" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "autofill_display_icons", domain: e.domain, ms_to_icon: e.msToIcon };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "restore_password" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "restore_password", domain: e.domain };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "open_external_vault_item_link" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "open_external_vault_item_link", domain: e.domain, item_type: e.itemType };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "right_click_menu_action" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "right_click_menu_action",
                            domain: e.domain,
                            field_filled: e.fieldFilled,
                            field_initial_classification_list: e.fieldInitialClassificationList,
                            is_field_detected_by_analysis_engine: e.isFieldDetectedByAnalysisEngine,
                            is_native_app: e.isNativeApp,
                            right_click_menu_flow_step: e.rightClickMenuFlowStep
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "authenticate_with_passkey" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "authenticate_with_passkey",
                            authentication_mediation_type: e.authenticationMediationType,
                            authenticator_user_verification: e.authenticatorUserVerification,
                            domain: e.domain,
                            has_credentials_allowed: e.hasCredentialsAllowed,
                            is_authenticated_with_dashlane: e.isAuthenticatedWithDashlane,
                            ms_to_complete_authentication: e.msToCompleteAuthentication,
                            ms_to_complete_authentication_timeout: e.msToCompleteAuthenticationTimeout,
                            passkey_authentication_error_type: e.passkeyAuthenticationErrorType,
                            passkey_authentication_status: e.passkeyAuthenticationStatus,
                            webauthn_extension_supported_list: e.webauthnExtensionSupportedList
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "change_password_guided" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "change_password_guided", domain: e.domain, flow_step: e.flowStep };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "master_password_health_report" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "master_password_health_report", is_leaked: e.isLeaked, is_weak: e.isWeak };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "authenticator_add_otp_code" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "authenticator_add_otp_code",
                            authenticator_issuer_id: e.authenticatorIssuerId,
                            otp_addition_mode: e.otpAdditionMode,
                            otp_specifications: e.otpSpecifications
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_choose_generated_password" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_choose_generated_password",
                            domain: e.domain,
                            has_digits: e.hasDigits,
                            has_letters: e.hasLetters,
                            has_pwg_default_settings: e.hasPwgDefaultSettings,
                            has_similar: e.hasSimilar,
                            has_symbols: e.hasSymbols,
                            is_native_app: e.isNativeApp,
                            length: e.length
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "add_two_factor_authentication_to_credential" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "add_two_factor_authentication_to_credential",
                            authenticator_issuer_id: e.authenticatorIssuerId,
                            domain: e.domain,
                            flow_step: e.flowStep,
                            otp_addition_error: e.otpAdditionError,
                            otp_addition_mode: e.otpAdditionMode,
                            otp_specifications: e.otpSpecifications,
                            space: e.space
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "copy_vault_item_field" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "copy_vault_item_field", domain: e.domain, field: e.field, item_type: e.itemType };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "reveal_vault_item_field" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "reveal_vault_item_field", domain: e.domain, field: e.field, item_type: e.itemType };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_accept" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_accept",
                            domain: e.domain,
                            is_protected: e.isProtected,
                            is_set_as_default: e.isSetAsDefault,
                            item_position: e.itemPosition,
                            webcard_option_selected: e.webcardOptionSelected
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_dismiss" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "autofill_dismiss", dismiss_type: e.dismissType, domain: e.domain, is_native_app: e.isNativeApp };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "launch_password_changer" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "launch_password_changer",
                            bulk_change_credential_count: e.bulkChangeCredentialCount,
                            domain: e.domain,
                            is_bulk_change: e.isBulkChange,
                            is_success: e.isSuccess,
                            last_recipe_step_position: e.lastRecipeStepPosition,
                            password_changer_failure_reason: e.passwordChangerFailureReason,
                            password_changer_recipe_version: e.passwordChangerRecipeVersion
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "perform_autofill" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "perform_autofill",
                            autofill_mechanism: e.autofillMechanism,
                            autofill_origin: e.autofillOrigin,
                            domain: e.domain,
                            fields_filled: e.fieldsFilled,
                            form_type_list: e.formTypeList,
                            is_autologin: e.isAutologin,
                            is_manual: e.isManual,
                            is_native_app: e.isNativeApp,
                            match_type: e.matchType,
                            mobile_browser_name: e.mobileBrowserName,
                            password_filled_health: e.passwordFilledHealth
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "remove_two_factor_authentication_from_credential" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "remove_two_factor_authentication_from_credential",
                            authenticator_issuer_id: e.authenticatorIssuerId,
                            domain: e.domain,
                            space: e.space
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "ping" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const e = { name: "ping" };
                        return Object.assign(Object.assign({}, t), { properties: e });
                      }
                      if (
                        (function (e) {
                          return "autofill_correct" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_correct",
                            correction_type: e.correctionType,
                            domain: e.domain,
                            field_corrected: e.fieldCorrected,
                            initial_field_classification_list: e.initialFieldClassificationList,
                            is_native_app: e.isNativeApp,
                            new_field_classification: e.newFieldClassification
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_suggest" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_suggest",
                            autofill_message_type_list: e.autofillMessageTypeList,
                            domain: e.domain,
                            is_login_prefilled: e.isLoginPrefilled,
                            is_native_app: e.isNativeApp,
                            is_password_prefilled: e.isPasswordPrefilled,
                            is_suggest_last_unsaved: e.isSuggestLastUnsaved,
                            ms_to_webcard: e.msToWebcard,
                            vault_type_list: e.vaultTypeList,
                            webcard_item_total_count: e.webcardItemTotalCount,
                            webcard_save_options: e.webcardSaveOptions
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "authenticator_remove_otp_code" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "authenticator_remove_otp_code", authenticator_issuer_id: e.authenticatorIssuerId };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "antiphishing_redirect" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return { name: "antiphishing_redirect", phishing_domain: e.phishingDomain, redirect_domain: e.redirectDomain };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_submit_form" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_submit_form",
                            domain: e.domain,
                            fields_detected_by_analysis_engine_count: e.fieldsDetectedByAnalysisEngineCount,
                            fields_filled_by: e.fieldsFilledBy,
                            form_loaded_at_date_time: e.formLoadedAtDateTime,
                            form_submitted_at_date_time: e.formSubmittedAtDateTime,
                            form_type: e.formType,
                            has_modified_initially_autofilled_value: e.hasModifiedInitiallyAutofilledValue,
                            has_password_field: e.hasPasswordField,
                            total_form_fields_count: e.totalFormFieldsCount
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      if (
                        (function (e) {
                          return "autofill_setting" === e.name && "anonymous" === e.category;
                        })(e)
                      ) {
                        const i = (function (e) {
                          return {
                            name: "autofill_setting",
                            disable_setting: e.disableSetting,
                            domain: e.domain,
                            is_native_app: e.isNativeApp,
                            item_type_list: e.itemTypeList
                          };
                        })(e);
                        return Object.assign(Object.assign({}, t), { properties: i });
                      }
                      throw new Error(`Unable to match anonymous event: ${e.name}`);
                    })(e, {
                      schema_version: u,
                      id: (0, r.Z)(),
                      date: t,
                      date_origin: n.Local,
                      category: "anonymous",
                      context: this.contextAnonymous
                    });
                  return this.logRepository.storeEvent(i, e.priority), i;
                }
                logView(e, t) {
                  const i = {
                    schema_version: u,
                    id: (0, r.Z)(),
                    date: new Date().toISOString(),
                    date_origin: n.Local,
                    category: "user",
                    context: this.context,
                    browse: { page: e, origin_page: this.page, component: t, origin_component: this.browseSection }
                  };
                  (this.page = e), void 0 !== t && (this.browseSection = t);
                  const o = l(new c({}), i),
                    a = ((e) => d.includes(e))(e);
                  return this.logRepository.storeEvent(o, a), o;
                }
              }
              class _ extends p {
                constructor(e, t, i, n, o) {
                  super(e, t, i, n, o);
                }
                logClick(e) {
                  if (void 0 === this.page) throw new Error("Page undefined in a PageLogger");
                  const t = new s({ button: e });
                  return this.logEvent(t);
                }
              }
              "function" == typeof SuppressedError && SuppressedError;
              class m {
                constructor() {
                  (this.eventStore = []), (this.priority = !1);
                }
                add(e, t = !1) {
                  this.eventStore.push(e), t && (this.priority = !0);
                }
                removeEvents(e) {
                  this.eventStore = this.eventStore.filter((t) => !e.includes(t.id));
                }
                size() {
                  return this.eventStore.length;
                }
                copy() {
                  return this.eventStore.slice();
                }
                containsPriorityEvent() {
                  return this.priority;
                }
                resetPriority() {
                  this.priority = !1;
                }
              }
              class f {
                get test() {
                  return this.store.getState().test;
                }
                set test(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { test: e }));
                }
                get app() {
                  return this.store.getState().app;
                }
                set app(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { app: e }));
                }
                get os() {
                  return this.store.getState().os;
                }
                set os(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { os: e }));
                }
                get browser() {
                  return this.store.getState().browser;
                }
                set browser(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { browser: e }));
                }
                get user() {
                  return this.store.getState().user;
                }
                set user(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { user: e }));
                }
                get device() {
                  return this.store.getState().device;
                }
                set device(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { device: e }));
                }
                get serviceWorkerStartTime() {
                  var e;
                  return null !== (e = this.store.getState().serviceWorkerStartTime) && void 0 !== e ? e : "";
                }
                set serviceWorkerStartTime(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { serviceWorkerStartTime: e }));
                }
                get page() {
                  return this.store.getState().page;
                }
                set page(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { page: e }));
                }
                get browseSection() {
                  return this.store.getState().browseSection;
                }
                set browseSection(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { browseSection: e }));
                }
                get session() {
                  return this.store.getState().session;
                }
                set session(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { session: e }));
                }
                get sessionExpiry() {
                  return this.store.getState().sessionExpiry;
                }
                set sessionExpiry(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { sessionExpiry: e }));
                }
                constructor(
                  e,
                  t,
                  i,
                  n,
                  o,
                  a = !1,
                  r = (function () {
                    const e = new Map(),
                      t = (t) => ({
                        getState: () => e.get(t),
                        updateState(i) {
                          e.set(t, i(e.get(t)));
                        }
                      });
                    return {
                      createStore: (i, n) => (e.set(i, Object.assign({}, n.initialState)), t(i)),
                      getStore: (i) => {
                        if (!e.has(i)) throw new Error("No store available for key " + i);
                        return t(i);
                      },
                      hasStore: (t) => e.has(t)
                    };
                  })()
                ) {
                  r.hasStore(f.STORE_KEY)
                    ? (this.store = r.getStore(f.STORE_KEY))
                    : (this.store = r.createStore(f.STORE_KEY, {
                        initialState: { app: e, browser: i, device: { installation_id: n, os: t }, os: t, session: o, test: a }
                      })),
                    (this.logStorage = new m());
                }
                setTrackingInfo(e, t) {
                  this.store.updateState((i) => {
                    var n;
                    return Object.assign(Object.assign({}, i), {
                      user: Object.assign(Object.assign({}, null !== (n = i.user) && void 0 !== n ? n : {}), { id: e }),
                      device: Object.assign(Object.assign({}, i.device), { id: t })
                    });
                  });
                }
                setServiceWorkerStartTime(e) {
                  this.store.updateState((t) => Object.assign(Object.assign({}, t), { serviceWorkerStartTime: e }));
                }
                clearTrackingInfo() {
                  this.store.updateState((e) =>
                    Object.assign(Object.assign({}, e), {
                      user: void 0,
                      device: Object.assign(Object.assign({}, e.device), { id: void 0 })
                    })
                  );
                }
                createLogger() {
                  const { browseSection: e, page: t } = this.store.getState();
                  return new p(this, this.createContext(), this.createAnonymousContext(), t, e);
                }
                createLoggerWithBrowsingContext(e, t) {
                  this.updateBrowsingContext(e, t);
                  const i = new _(this, this.createContext(), this.createAnonymousContext(), e, t);
                  return i.logView(e, t), i;
                }
                storeEvent(e, t = !1, i = !1) {
                  if (Object.getOwnPropertyNames(e).includes("properties")) {
                    if ("user" === e.category) {
                      const t = e.properties,
                        { session: n } = this.store.getState();
                      if ("view_page" === t.name)
                        this.updateBrowsingContext(e.browse.page, e.browse.component), n ? this.extendSession() : this.createNewSession();
                      else if (n) {
                        const { sessionExpiry: e } = this.store.getState();
                        void 0 === e || Date.now() - e > f.sessionDuration ? this.clearSession() : this.extendSession();
                      } else i && this.createNewSession();
                      const { session: o } = this.store.getState();
                      o && (e.session = Object.assign({}, o));
                    }
                    this.logStorage.add(e, t);
                  }
                }
                createContext() {
                  const { app: e, browser: t, device: i, user: n } = this.store.getState();
                  return { app: e, user: n, device: i, browser: t };
                }
                createAnonymousContext() {
                  const e = this.store.getState(),
                    { app: t } = e,
                    i = (function (e, t) {
                      var i = {};
                      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                          t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
                      }
                      return i;
                    })(e.browser, ["user_agent"]),
                    { os: n } = e;
                  return { app: t, os: n, browser: i };
                }
                updateBrowsingContext(e, t) {
                  this.store.updateState((i) => Object.assign(Object.assign({}, i), { page: e, browseSection: t }));
                }
                createNewSession() {
                  this.store.updateState((e) => {
                    const t = Object.assign(
                      { id: (0, r.Z)(), sequence_number: 1 },
                      e.serviceWorkerStartTime ? { service_worker_start_date_time: e.serviceWorkerStartTime } : {}
                    );
                    return Object.assign(Object.assign({}, e), { session: t, sessionExpiry: Date.now() });
                  });
                }
                clearSession() {
                  this.store.updateState((e) => Object.assign(Object.assign({}, e), { session: void 0, sessionExpiry: void 0 }));
                }
                extendSession() {
                  this.store.updateState((e) =>
                    e.session
                      ? Object.assign(Object.assign({}, e), {
                          session: Object.assign(Object.assign({}, e.session), { sequence_number: e.session.sequence_number + 1 }),
                          sessionExpiry: Date.now()
                        })
                      : e
                  );
                }
              }
              var g,
                h,
                y,
                w,
                b,
                S,
                A,
                C,
                k,
                v,
                T,
                I,
                D,
                P,
                E,
                O,
                W,
                N,
                B,
                F,
                j,
                L,
                x,
                R,
                M,
                U,
                G,
                H,
                q,
                V,
                K,
                z,
                Y,
                Z,
                J,
                Q,
                X,
                $,
                ee,
                te,
                ie,
                ne,
                oe,
                ae,
                re,
                se,
                ce,
                le,
                de,
                ue,
                pe,
                _e,
                me,
                fe,
                ge,
                he,
                ye,
                we,
                be,
                Se,
                Ae,
                Ce,
                ke,
                ve,
                Te,
                Ie,
                De,
                Pe,
                Ee,
                Oe,
                We,
                Ne,
                Be,
                Fe,
                je,
                Le,
                xe,
                Re,
                Me,
                Ue,
                Ge,
                He,
                qe,
                Ve,
                Ke,
                ze,
                Ye,
                Ze,
                Je,
                Qe,
                Xe,
                $e,
                et,
                tt,
                it,
                nt,
                ot,
                at,
                rt,
                st,
                ct,
                lt,
                dt,
                ut,
                pt,
                _t,
                mt,
                ft,
                gt,
                ht,
                yt,
                wt,
                bt,
                St,
                At,
                Ct,
                kt,
                vt,
                Tt,
                It,
                Dt,
                Pt,
                Et,
                Ot,
                Wt,
                Nt,
                Bt,
                Ft;
              (f.sessionDuration = 3e5),
                (f.STORE_KEY = "LogRepositoryStore"),
                (function (e) {
                  (e.DashlaneCom = "dashlane_com"),
                    (e.ExtensionPopup = "extension_popup"),
                    (e.ExtensionWebcard = "extension_webcard"),
                    (e.MainApp = "main_app"),
                    (e.OsAutofill = "os_autofill"),
                    (e.Tac = "tac"),
                    (e.WatchApp = "watch_app"),
                    (e.Webcard = "webcard");
                })(g || (g = {})),
                (function (e) {
                  (e.Android = "android"),
                    (e.AuthenticatorAndroid = "authenticator_android"),
                    (e.AuthenticatorIos = "authenticator_ios"),
                    (e.Catalyst = "catalyst"),
                    (e.Ios = "ios"),
                    (e.Saex = "saex"),
                    (e.Safari = "safari"),
                    (e.Tac = "tac"),
                    (e.Web = "web");
                })(h || (h = {})),
                (function (e) {
                  (e.Alpha = "alpha"),
                    (e.Beta = "beta"),
                    (e.Dev = "dev"),
                    (e.Nightly = "nightly"),
                    (e.Production = "production"),
                    (e.Qa = "qa");
                })(y || (y = {})),
                (function (e) {
                  (e.Android = "android"),
                    (e.Blackberry = "blackberry"),
                    (e.ChromeOs = "chrome_os"),
                    (e.Debian = "debian"),
                    (e.Electron = "electron"),
                    (e.Fedora = "fedora"),
                    (e.FirefoxOs = "firefox_os"),
                    (e.Freebsd = "freebsd"),
                    (e.Haiku = "haiku"),
                    (e.Ipad = "ipad"),
                    (e.Iphone = "iphone"),
                    (e.Linux = "linux"),
                    (e.MacOs = "mac_os"),
                    (e.Mint = "mint"),
                    (e.Netbsd = "netbsd"),
                    (e.Openbsd = "openbsd"),
                    (e.OsCarbonUnknown = "os_carbon_unknown"),
                    (e.Other = "other"),
                    (e.Playstation = "playstation"),
                    (e.Sailfish = "sailfish"),
                    (e.Solaris = "solaris"),
                    (e.Symbian = "symbian"),
                    (e.Tizen = "tizen"),
                    (e.Ubuntu = "ubuntu"),
                    (e.Windows = "windows"),
                    (e.WindowsPhone = "windows_phone");
                })(w || (w = {})),
                (function (e) {
                  (e.ErrorAccountAlreadyExists = "error_account_already_exists"),
                    (e.ErrorNotValidEmail = "error_not_valid_email"),
                    (e.Success = "success");
                })(b || (b = {})),
                (function (e) {
                  (e.CreateMasterPassword = "create_master_password"),
                    (e.EnterEmailAddress = "enter_email_address"),
                    (e.InstallExtension = "install_extension"),
                    (e.LoginToAccount = "login_to_account"),
                    (e.VerifyEmail = "verify_email");
                })(S || (S = {})),
                (function (e) {
                  (e.Unknown = "unknown"), (e.WrongConfirmationKey = "wrong_confirmation_key");
                })(A || (A = {})),
                (function (e) {
                  (e.Unknown = "unknown"), (e.WrongKeyEntered = "wrong_key_entered");
                })(C || (C = {})),
                (function (e) {
                  (e.NewRecoveryKeyGenerated = "new_recovery_key_generated"),
                    (e.RecoveryKeyUsed = "recovery_key_used"),
                    (e.SettingDisabled = "setting_disabled"),
                    (e.VaultKeyChanged = "vault_key_changed");
                })(k || (k = {})),
                (function (e) {
                  (e.Biometric = "biometric"), (e.MasterPassword = "master_password"), (e.Pin = "pin"), (e.Sso = "sso");
                })(v || (v = {})),
                (function (e) {
                  (e.ChangeMasterPassword = "change_master_password"),
                    (e.EditSettings = "edit_settings"),
                    (e.Login = "login"),
                    (e.UnlockApp = "unlock_app"),
                    (e.UnlockItem = "unlock_item");
                })(T || (T = {})),
                (function (e) {
                  (e.ErrorInvalidSso = "error_invalid_sso"),
                    (e.ErrorUnknown = "error_unknown"),
                    (e.ErrorWrongBackupCode = "error_wrong_backup_code"),
                    (e.ErrorWrongBiometric = "error_wrong_biometric"),
                    (e.ErrorWrongEmail = "error_wrong_email"),
                    (e.ErrorWrongOtp = "error_wrong_otp"),
                    (e.ErrorWrongPassword = "error_wrong_password"),
                    (e.ErrorWrongPin = "error_wrong_pin"),
                    (e.Success = "success");
                })(I || (I = {})),
                (function (e) {
                  (e.LockedOut = "locked_out"), (e.LoggedIn = "logged_in"), (e.LoggedOut = "logged_out");
                })(D || (D = {})),
                (function (e) {
                  (e.UnknownError = "unknown_error"),
                    (e.UserOfflineError = "user_offline_error"),
                    (e.WrongBackupCodeError = "wrong_backup_code_error"),
                    (e.WrongCodeError = "wrong_code_error"),
                    (e.WrongPhoneFormatError = "wrong_phone_format_error");
                })(P || (P = {})),
                (function (e) {
                  (e.AuthenticatorApp = "authenticator_app"),
                    (e.EmailToken = "email_token"),
                    (e.None = "none"),
                    (e.Otp1 = "otp1"),
                    (e.Otp2 = "otp2");
                })(E || (E = {})),
                (function (e) {
                  (e.Authy = "authy"), (e.Duo = "duo"), (e.Google = "google"), (e.Lastpass = "lastpass"), (e.Microsoft = "microsoft");
                })(O || (O = {})),
                (function (e) {
                  e.OtpCode = "otp_code";
                })(W || (W = {})),
                (function (e) {
                  (e.Accepted = "accepted"), (e.Received = "received"), (e.Rejected = "rejected");
                })(N || (N = {})),
                (function (e) {
                  (e.ClickDashlane = "click_dashlane"), (e.DisplayMenu = "display_menu"), (e.SelectVaultItem = "select_vault_item");
                })(B || (B = {})),
                (function (e) {
                  (e.Automatic = "automatic"), (e.Dropdown = "dropdown"), (e.Keyboard = "keyboard"), (e.Notification = "notification");
                })(F || (F = {})),
                (function (e) {
                  (e.ChangeClassification = "change_classification"), (e.Edit = "edit"), (e.Erase = "erase"), (e.Overwrite = "overwrite");
                })(j || (j = {})),
                (function (e) {
                  (e.Address = "address"),
                    (e.Authentication = "authentication"),
                    (e.BankStatement = "bank_statement"),
                    (e.Company = "company"),
                    (e.CreditCard = "credit_card"),
                    (e.DriverLicence = "driver_licence"),
                    (e.Email = "email"),
                    (e.FiscalStatement = "fiscal_statement"),
                    (e.GeneratedPassword = "generated_password"),
                    (e.IdCard = "id_card"),
                    (e.Identity = "identity"),
                    (e.Nothing = "nothing"),
                    (e.Passport = "passport"),
                    (e.Password = "password"),
                    (e.Paypal = "paypal"),
                    (e.Phone = "phone"),
                    (e.SocialSecurity = "social_security"),
                    (e.Unknown = "unknown"),
                    (e.Website = "website");
                })(L || (L = {})),
                (function (e) {
                  (e.Billing = "billing"),
                    (e.ChangePassword = "change_password"),
                    (e.Contact = "contact"),
                    (e.ForgotPassword = "forgot_password"),
                    (e.Identity = "identity"),
                    (e.Login = "login"),
                    (e.Newsletter = "newsletter"),
                    (e.Other = "other"),
                    (e.Payment = "payment"),
                    (e.Register = "register"),
                    (e.Search = "search"),
                    (e.Shipping = "shipping"),
                    (e.ShoppingBasket = "shopping_basket");
                })(x || (x = {})),
                (function (e) {
                  (e.AssociatedApp = "associated_app"),
                    (e.AssociatedWebsite = "associated_website"),
                    (e.CreatedPassword = "created_password"),
                    (e.ExplorePasswords = "explore_passwords"),
                    (e.Regular = "regular"),
                    (e.Remembered = "remembered"),
                    (e.UserAssociatedWebsite = "user_associated_website");
                })(R || (R = {})),
                (function (e) {
                  (e.AndroidAccessibility = "android_accessibility"),
                    (e.AndroidAutofillApi = "android_autofill_api"),
                    (e.IosTachyon = "ios_tachyon"),
                    (e.Web = "web");
                })(M || (M = {})),
                (function (e) {
                  (e.Cancel = "cancel"),
                    (e.Close = "close"),
                    (e.CloseCross = "close_cross"),
                    (e.CloseEscape = "close_escape"),
                    (e.CloseSecurity = "close_security"),
                    (e.DoNotTrust = "do_not_trust"),
                    (e.Never = "never"),
                    (e.Unfocus = "unfocus"),
                    (e.UseLocalPasskey = "use_local_passkey");
                })(U || (U = {})),
                (function (e) {
                  (e.Replace = "replace"), (e.Save = "save"), (e.SaveAsNew = "save_as_new");
                })(G || (G = {})),
                (function (e) {
                  (e.AutofillDisabled = "autofill_disabled"),
                    (e.AutofillEnabled = "autofill_enabled"),
                    (e.AutologinDisabled = "autologin_disabled"),
                    (e.AutologinEnabled = "autologin_enabled"),
                    (e.LoginAndPasswordsOnly = "login_and_passwords_only"),
                    (e.OneClickFormFillDisabled = "one_click_form_fill_disabled"),
                    (e.OneClickFormFillEnabled = "one_click_form_fill_enabled");
                })(H || (H = {})),
                (function (e) {
                  (e.Field = "field"), (e.Global = "global"), (e.Page = "page"), (e.Site = "site");
                })(q || (q = {})),
                (function (e) {
                  (e.OnceForThisVisit = "once_for_this_visit"),
                    (e.UntilTurnedBackOff = "until_turned_back_off"),
                    (e.UntilTurnedBackOn = "until_turned_back_on");
                })(V || (V = {})),
                (function (e) {
                  (e.CreateAccount = "create_account"), (e.Login = "login"), (e.NeverAsk = "never_ask");
                })(K || (K = {})),
                (function (e) {
                  (e.AppMetaIncorrectSignature = "app_meta_incorrect_signature"),
                    (e.DuplicateRisk = "duplicate_risk"),
                    (e.FreeAccountPasswordLimitReached = "free_account_password_limit_reached"),
                    (e.HttpUnsecureWebsite = "http_unsecure_website"),
                    (e.KnownIncorrectSignature = "known_incorrect_signature"),
                    (e.KnownSourceAccountFillMismatch = "known_source_account_fill_mismatch"),
                    (e.LoginAccountPasswordGeneration = "login_account_password_generation"),
                    (e.OneSignatureUnknown = "one_signature_unknown"),
                    (e.PotentialPhishingRisk = "potential_phishing_risk"),
                    (e.UnknownSourceAccountFillMismatch = "unknown_source_account_fill_mismatch"),
                    (e.UnsecureIframe = "unsecure_iframe"),
                    (e.UnsecureIframeSandbox = "unsecure_iframe_sandbox");
                })(z || (z = {})),
                (function (e) {
                  (e.ActivateFeature = "activate_feature"),
                    (e.Copy = "copy"),
                    (e.DeactivateFeature = "deactivate_feature"),
                    (e.Dismiss = "dismiss"),
                    (e.Trigger = "trigger");
                })(Y || (Y = {})),
                (function (e) {
                  (e.Replace = "replace"), (e.Save = "save"), (e.SaveAsNew = "save_as_new"), (e.TrustAndPaste = "trust_and_paste");
                })(Z || (Z = {})),
                (function (e) {
                  (e.AddNewItem = "add_new_item"),
                    (e.CloseCross = "close_cross"),
                    (e.CreatePasswordIcon = "create_password_icon"),
                    (e.CreatePasswordLabel = "create_password_label"),
                    (e.DontShowAgain = "dont_show_again"),
                    (e.GoToSettings = "go_to_settings"),
                    (e.LearnMoreAboutPhishing = "learn_more_about_phishing"),
                    (e.Reveal = "reveal"),
                    (e.SeeAllPasswords = "see_all_passwords"),
                    (e.ShowOption = "show_option"),
                    (e.Shuffle = "shuffle");
                })(J || (J = {})),
                (function (e) {
                  (e.MainDashboardButton = "main_dashboard_button"), (e.NavLeftMenuButton = "nav_left_menu_button");
                })(Q || (Q = {})),
                (function (e) {
                  (e.NoCsv = "no_csv"), (e.NoLogData = "no_log_data"), (e.UnexpectedUnknown = "unexpected_unknown");
                })(X || (X = {})),
                (function (e) {
                  (e.Business = "business"), (e.Legacy = "legacy"), (e.StarterTeam = "starter_team"), (e.Team = "team");
                })($ || ($ = {})),
                (function (e) {
                  (e.DomainVerificationCompleted = "domain_verification_completed"),
                    (e.DomainVerificationError = "domain_verification_error"),
                    (e.TapContinueCtaWithDomainUrl = "tap_continue_cta_with_domain_url"),
                    (e.TapVerifyDomainCtaWithDnsInformation = "tap_verify_domain_cta_with_dns_information");
                })(ee || (ee = {})),
                (function (e) {
                  (e.Authentication = "authentication"),
                    (e.CardDeclined = "card_declined"),
                    (e.ExpiredCard = "expired_card"),
                    (e.UnexpectedUnknown = "unexpected_unknown");
                })(te || (te = {})),
                (function (e) {
                  (e.ChangePlanCta = "change_plan_cta"),
                    (e.ConfirmAndPayCta = "confirm_and_pay_cta"),
                    (e.SelectPlanTier = "select_plan_tier");
                })(ie || (ie = {})),
                (function (e) {
                  (e.ActivateDirectorySync = "activate_directory_sync"),
                    (e.ClickSetUp = "click_set_up"),
                    (e.CopyApiToken = "copy_api_token"),
                    (e.CopyEndpointLink = "copy_endpoint_link"),
                    (e.DeactivateDirectorySync = "deactivate_directory_sync"),
                    (e.GenerateScimToken = "generate_scim_token"),
                    (e.ReGenerateToken = "re_generate_token");
                })(ne || (ne = {})),
                (function (e) {
                  (e.TeamActivityDownloadModalAlertError = "team_activity_download_modal_alert_error"),
                    (e.TeamDirectorySyncKeyErrorMarkup = "team_directory_sync_key_error_markup"),
                    (e.TeamNotificationsAddAdminsMarkup = "team_notifications_add_admins_markup"),
                    (e.TeamNotificationsEnableAccountRecoveryMarkup = "team_notifications_enable_account_recovery_markup"),
                    (e.TeamNotificationsFreeTrialD0T15Markup = "team_notifications_free_trial_d0_t15_markup"),
                    (e.TeamNotificationsFreeTrialD15T30Markup = "team_notifications_free_trial_d15_t30_markup"),
                    (e.TeamNotificationsFreeTrialD15T30MarkupOne = "team_notifications_free_trial_d15_t30_markup_one"),
                    (e.TeamNotificationsFreeTrialD15T30MarkupOther = "team_notifications_free_trial_d15_t30_markup_other"),
                    (e.TeamNotificationsFreeTrialD15T30MarkupZero = "team_notifications_free_trial_d15_t30_markup_zero"),
                    (e.TeamNotificationsFreeTrialGracePeriodMarkup = "team_notifications_free_trial_grace_period_markup"),
                    (e.TeamNotificationsRenewalGracePeriodMarkup = "team_notifications_renewal_grace_period_markup"),
                    (e.TeamScimMarketingBusinessHomepageBody = "team_scim_marketing_business_homepage_body"),
                    (e.TeamScimMarketingBusinessScimBody = "team_scim_marketing_business_scim_body"),
                    (e.TeamScimMarketingTeamScimBody = "team_scim_marketing_team_scim_body"),
                    (e.TeamTacInExtensionNotificationMessageMarkup = "team_tac_in_extension_notification_message_markup");
                })(oe || (oe = {})),
                (function (e) {
                  (e.AllOffers = "all_offers"),
                    (e.BuyDashlane = "buy_dashlane"),
                    (e.Cancel = "cancel"),
                    (e.Close = "close"),
                    (e.Confirm = "confirm"),
                    (e.ContactCustomerSupport = "contact_customer_support"),
                    (e.ContactPhoneSupport = "contact_phone_support"),
                    (e.Dismiss = "dismiss"),
                    (e.DoNotLinkWebsite = "do_not_link_website"),
                    (e.EssentialOffer = "essential_offer"),
                    (e.ExtendTrial = "extend_trial"),
                    (e.FamilyOffer = "family_offer"),
                    (e.InstallExtension = "install_extension"),
                    (e.LinkWebsite = "link_website"),
                    (e.OpenChromeWebStore = "open_chrome_web_store"),
                    (e.OpenG2RatingWebsite = "open_g2_rating_website"),
                    (e.PayByInvoice = "pay_by_invoice"),
                    (e.PayWithCreditCard = "pay_with_credit_card"),
                    (e.PlanDetails = "plan_details"),
                    (e.PremiumOffer = "premium_offer"),
                    (e.RedeemOffer = "redeem_offer"),
                    (e.RegisterWebinar = "register_webinar"),
                    (e.RequestCall = "request_call"),
                    (e.RequestDemo = "request_demo"),
                    (e.RequestUpgrade = "request_upgrade"),
                    (e.ReviewBad = "review_bad"),
                    (e.ReviewGreat = "review_great"),
                    (e.ReviewOk = "review_ok"),
                    (e.SeeAllPlans = "see_all_plans"),
                    (e.Send = "send"),
                    (e.SendEmail = "send_email"),
                    (e.Skip = "skip"),
                    (e.TermsOfService = "terms_of_service"),
                    (e.Unlink = "unlink"),
                    (e.UpgradeToBusiness = "upgrade_to_business");
                })(ae || (ae = {})),
                (function (e) {
                  (e.CipherError = "cipher_error"),
                    (e.ConfirmationError = "confirmation_error"),
                    (e.DecipherError = "decipher_error"),
                    (e.DownloadError = "download_error"),
                    (e.LoginError = "login_error"),
                    (e.PasswordsDontMatch = "passwords_dont_match"),
                    (e.SamePasswordError = "same_password_error"),
                    (e.SyncFailedError = "sync_failed_error"),
                    (e.UnknownError = "unknown_error"),
                    (e.UploadError = "upload_error"),
                    (e.WeakPasswordError = "weak_password_error"),
                    (e.WrongPasswordError = "wrong_password_error");
                })(re || (re = {})),
                (function (e) {
                  (e.ClientError = "client_error"),
                    (e.IdentityError = "identity_error"),
                    (e.LoginError = "login_error"),
                    (e.NetworkError = "network_error"),
                    (e.RecipeError = "recipe_error"),
                    (e.ServerError = "server_error"),
                    (e.UserCancel = "user_cancel");
                })(se || (se = {})),
                (function (e) {
                  (e.CsvImport = "csv_import"),
                    (e.Manual = "manual"),
                    (e.PasswordChanger = "password_changer"),
                    (e.PasswordHistory = "password_history"),
                    (e.SecureVaultImport = "secure_vault_import");
                })(ce || (ce = {})),
                (function (e) {
                  (e.AccessVault = "access_vault"),
                    (e.CancelDeviceTransfer = "cancel_device_transfer"),
                    (e.CancelLogin = "cancel_login"),
                    (e.CompleteDeviceTransfer = "complete_device_transfer"),
                    (e.ConfirmRequest = "confirm_request"),
                    (e.ContactSupport = "contact_support"),
                    (e.RefreshRequest = "refresh_request"),
                    (e.RejectRequest = "reject_request"),
                    (e.ReturnToDeviceSetup = "return_to_device_setup"),
                    (e.ReturnToLogin = "return_to_login"),
                    (e.ScanQrCode = "scan_qr_code"),
                    (e.SelectLoggedInDevice = "select_logged_in_device"),
                    (e.SelectTransferMethod = "select_transfer_method"),
                    (e.SetPin = "set_pin"),
                    (e.SetupBiometrics = "setup_biometrics"),
                    (e.SubmitSecurityChallengeAnswer = "submit_security_challenge_answer"),
                    (e.TapHelp = "tap_help"),
                    (e.TapLearnMore = "tap_learn_more"),
                    (e.TapResetAccount = "tap_reset_account"),
                    (e.TryAgain = "try_again"),
                    (e.ViewSecurityChallengeSolution = "view_security_challenge_solution");
                })(le || (le = {})),
                (function (e) {
                  (e.Any = "any"), (e.Computer = "computer"), (e.Mobile = "mobile"), (e.NoDeviceAvailable = "no_device_available");
                })(de || (de = {})),
                (function (e) {
                  (e.AccountRecoveryKey = "account_recovery_key"),
                    (e.NotSelected = "not_selected"),
                    (e.QrCode = "qr_code"),
                    (e.SecurityChallenge = "security_challenge");
                })(ue || (ue = {})),
                (function (e) {
                  (e.CopyInvite = "copy_invite"), (e.RemoveMember = "remove_member"), (e.ResetInvite = "reset_invite");
                })(pe || (pe = {})),
                (function (e) {
                  (e.MasterPasswordChange = "master_password_change"),
                    (e.MasterPasswordToSso = "master_password_to_sso"),
                    (e.MigrateLegacy = "migrate_legacy"),
                    (e.SettingsApplyLocally = "settings_apply_locally"),
                    (e.SettingsChange = "settings_change"),
                    (e.SsoToMasterPassword = "sso_to_master_password"),
                    (e.TeamEnforced = "team_enforced");
                })(_e || (_e = {})),
                (function (e) {
                  (e.ErrorDownload = "error_download"),
                    (e.ErrorReencryption = "error_reencryption"),
                    (e.ErrorUpdateLocalData = "error_update_local_data"),
                    (e.ErrorUpload = "error_upload"),
                    (e.Success = "success");
                })(me || (me = {})),
                (function (e) {
                  (e.Argon2d = "argon2d"), (e.Kwc3 = "kwc3"), (e.Kwc5 = "kwc5"), (e.NoDerivation = "no_derivation"), (e.Pbkdf2 = "pbkdf2");
                })(fe || (fe = {})),
                (function (e) {
                  (e.Cancelled = "cancelled"), (e.Failure = "failure"), (e.Success = "success");
                })(ge || (ge = {})),
                (function (e) {
                  (e.Conditional = "conditional"), (e.Optional = "optional"), (e.Required = "required"), (e.Silent = "silent");
                })(he || (he = {})),
                (function (e) {
                  (e.InvalidState = "invalid_state"),
                    (e.NotAllowed = "not_allowed"),
                    (e.NotSupported = "not_supported"),
                    (e.Security = "security"),
                    (e.Unknown = "unknown");
                })(ye || (ye = {})),
                (function (e) {
                  (e.InvalidState = "invalid_state"),
                    (e.NotAllowed = "not_allowed"),
                    (e.NotSupported = "not_supported"),
                    (e.Security = "security"),
                    (e.Unknown = "unknown");
                })(we || (we = {})),
                (function (e) {
                  (e.A128Gcm = "a_128_gcm"),
                    (e.A128Kw = "a_128_kw"),
                    (e.A192Gcm = "a_192_gcm"),
                    (e.A192Kw = "a_192_kw"),
                    (e.A256Gcm = "a_256_gcm"),
                    (e.A256Kw = "a_256_kw"),
                    (e.AesCcm16128128 = "aes_ccm_16_128_128"),
                    (e.AesCcm16128256 = "aes_ccm_16_128_256"),
                    (e.AesCcm1664128 = "aes_ccm_16_64_128"),
                    (e.AesCcm1664256 = "aes_ccm_16_64_256"),
                    (e.AesCcm64128128 = "aes_ccm_64_128_128"),
                    (e.AesCcm64128256 = "aes_ccm_64_128_256"),
                    (e.AesCcm6464128 = "aes_ccm_64_64_128"),
                    (e.AesCcm6464256 = "aes_ccm_64_64_256"),
                    (e.AesMac128128 = "aes_mac_128_128"),
                    (e.AesMac12864 = "aes_mac_128_64"),
                    (e.AesMac256128 = "aes_mac_256_128"),
                    (e.AesMac25664 = "aes_mac_256_64"),
                    (e.ChaCha20Poly1305 = "cha_cha_20_poly_1305"),
                    (e.Direct = "direct"),
                    (e.DirectHkdfAes128 = "direct_hkdf_aes_128"),
                    (e.DirectHkdfAes256 = "direct_hkdf_aes_256"),
                    (e.DirectHkdfSha256 = "direct_hkdf_sha_256"),
                    (e.DirectHkdfSha512 = "direct_hkdf_sha_512"),
                    (e.EcdhEsA128Kw = "ecdh_es_a128_kw"),
                    (e.EcdhEsA192Kw = "ecdh_es_a192_kw"),
                    (e.EcdhEsA256Kw = "ecdh_es_a256_kw"),
                    (e.EcdhEsHkdf256 = "ecdh_es_hkdf_256"),
                    (e.EcdhEsHkdf512 = "ecdh_es_hkdf_512"),
                    (e.EcdhSsA128Kw = "ecdh_ss_a128_kw"),
                    (e.EcdhSsA192Kw = "ecdh_ss_a192_kw"),
                    (e.EcdhSsA256Kw = "ecdh_ss_a256_kw"),
                    (e.EcdhSsHkdf256 = "ecdh_ss_hkdf_256"),
                    (e.EcdhSsHkdf512 = "ecdh_ss_hkdf_512"),
                    (e.EdDsa = "ed_dsa"),
                    (e.Es256 = "es_256"),
                    (e.Es256K = "es_256_k"),
                    (e.Es384 = "es_384"),
                    (e.Es512 = "es_512"),
                    (e.Hmac256256 = "hmac_256_256"),
                    (e.Hmac25664 = "hmac_256_64"),
                    (e.Hmac384384 = "hmac_384_384"),
                    (e.Hmac512512 = "hmac_512_512"),
                    (e.HssLms = "hss_lms"),
                    (e.IvGeneration = "iv_generation"),
                    (e.Ps256 = "ps_256"),
                    (e.Ps384 = "ps_384"),
                    (e.Ps512 = "ps_512"),
                    (e.Reserved = "reserved"),
                    (e.Rs1 = "rs_1"),
                    (e.Rs256 = "rs_256"),
                    (e.Rs384 = "rs_384"),
                    (e.Rs512 = "rs_512"),
                    (e.RsaesOaepWithRfc8017 = "rsaes_oaep_with_rfc_8017"),
                    (e.RsaesOaepWithSha256 = "rsaes_oaep_with_sha_256"),
                    (e.RsaesOaepWithSha512 = "rsaes_oaep_with_sha_512"),
                    (e.Sha1 = "sha_1"),
                    (e.Sha256 = "sha_256"),
                    (e.Sha25664 = "sha_256_64"),
                    (e.Sha384 = "sha_384"),
                    (e.Sha512 = "sha_512"),
                    (e.Sha512256 = "sha_512_256"),
                    (e.Shake128 = "shake_128"),
                    (e.Shake256 = "shake_256"),
                    (e.Unassigned = "unassigned"),
                    (e.WalnutDsa = "walnut_dsa");
                })(be || (be = {})),
                (function (e) {
                  (e.Appid = "appid"),
                    (e.AppidExclude = "appid_exclude"),
                    (e.AuthnSel = "authn_sel"),
                    (e.CredBlob = "cred_blob"),
                    (e.CredProps = "cred_props"),
                    (e.CredProtect = "cred_protect"),
                    (e.Exts = "exts"),
                    (e.HmacSecret = "hmac_secret"),
                    (e.LargeBlob = "large_blob"),
                    (e.LargeBlobKey = "large_blob_key"),
                    (e.MinPinLength = "min_pin_length"),
                    (e.TxAuthGeneric = "tx_auth_generic"),
                    (e.TxAuthSimple = "tx_auth_simple"),
                    (e.Uvi = "uvi"),
                    (e.Uvm = "uvm");
                })(Se || (Se = {})),
                (function (e) {
                  (e.CrossPlatform = "cross_platform"), (e.Platform = "platform");
                })(Ae || (Ae = {})),
                (function (e) {
                  (e.Discouraged = "discouraged"), (e.Preferred = "preferred"), (e.Required = "required");
                })(Ce || (Ce = {})),
                (function (e) {
                  (e.Discouraged = "discouraged"), (e.Preferred = "preferred"), (e.Required = "required");
                })(ke || (ke = {})),
                (function (e) {
                  (e.SystemCpu = "system_cpu"),
                    (e.SystemMemory = "system_memory"),
                    (e.TimeToAppReady = "time_to_app_ready"),
                    (e.TimeToD = "time_to_d"),
                    (e.TimeToDropdownWebcard = "time_to_dropdown_webcard"),
                    (e.TimeToInitCarbon = "time_to_init_carbon"),
                    (e.TimeToInitPersistent = "time_to_init_persistent"),
                    (e.TimeToInitSw = "time_to_init_sw"),
                    (e.TimeToLoad = "time_to_load"),
                    (e.TimeToLoadAutofill = "time_to_load_autofill"),
                    (e.TimeToLoadLocal = "time_to_load_local"),
                    (e.TimeToLoadRemote = "time_to_load_remote"),
                    (e.TimeToLogin = "time_to_login"),
                    (e.TimeToPrepareWebcardData = "time_to_prepare_webcard_data"),
                    (e.TimeToUnlock = "time_to_unlock"),
                    (e.WebvitalsCls = "webvitals_cls"),
                    (e.WebvitalsFid = "webvitals_fid"),
                    (e.WebvitalsLcp = "webvitals_lcp");
                })(ve || (ve = {})),
                (function (e) {
                  (e.Cpu = "cpu"), (e.Duration = "duration"), (e.Memory = "memory");
                })(Te || (Te = {})),
                (function (e) {
                  (e.Gb = "gb"), (e.Mb = "mb"), (e.Milliseconds = "milliseconds"), (e.Percent = "percent"), (e.Seconds = "seconds");
                })(Ie || (Ie = {})),
                (function (e) {
                  (e.Platform = "platform"), (e.Sync = "sync");
                })(De || (De = {})),
                (function (e) {
                  (e.DecipherError = "decipher_error"),
                    (e.DownloadError = "download_error"),
                    (e.LocalStorageError = "local_storage_error"),
                    (e.OtherError = "other_error"),
                    (e.ServerError = "server_error");
                })(Pe || (Pe = {})),
                (function (e) {
                  (e.Carbon = "carbon"), (e.Graphene = "graphene");
                })(Ee || (Ee = {})),
                (function (e) {
                  (e.Credentials = "credentials"),
                    (e.Global = "global"),
                    (e.Ids = "ids"),
                    (e.Payments = "payments"),
                    (e.SecureNotes = "secure_notes");
                })(Oe || (Oe = {})),
                (function (e) {
                  (e.Cancel = "cancel"), (e.Complete = "complete"), (e.Error = "error"), (e.Start = "start");
                })(We || (We = {})),
                (function (e) {
                  (e.Activation = "activation"), (e.Deactivation = "deactivation");
                })(Ne || (Ne = {})),
                (function (e) {
                  (e.App = "app"), (e.Web = "web");
                })(Be || (Be = {})),
                (function (e) {
                  (e.InvitationEmail = "invitation_email"), (e.SharedInvitationLink = "shared_invitation_link");
                })(Fe || (Fe = {})),
                (function (e) {
                  (e.GetAntiphishingTips = "get_antiphishing_tips"),
                    (e.GetHelp = "get_help"),
                    (e.GoToDashlaneSupport = "go_to_dashlane_support"),
                    (e.HelpCenter = "help_center"),
                    (e.LearnAboutCsvImportFormatting = "learn_about_csv_import_formatting"),
                    (e.LearnAboutDarkWebInsights = "learn_about_dark_web_insights"),
                    (e.LearnAboutDomainVerification = "learn_about_domain_verification"),
                    (e.TroubleshootImportingIssues = "troubleshoot_importing_issues"),
                    (e.ViewDomainVerificationGuide = "view_domain_verification_guide");
                })(je || (je = {})),
                (function (e) {
                  (e.Abandon = "abandon"),
                    (e.CancelError = "cancel_error"),
                    (e.ContactSupport = "contact_support"),
                    (e.Start = "start"),
                    (e.SuccessCancel = "success_cancel"),
                    (e.SuccessCancelAndErrorRefund = "success_cancel_and_error_refund"),
                    (e.SuccessRefund = "success_refund");
                })(Le || (Le = {})),
                (function (e) {
                  (e.Essentials = "essentials"), (e.Family = "family"), (e.Free = "free"), (e.Premium = "premium");
                })(xe || (xe = {})),
                (function (e) {
                  (e.Monthly = "monthly"), (e.Yearly = "yearly");
                })(Re || (Re = {})),
                (function (e) {
                  (e.AutofillDidntWorkAsExpected = "autofill_didnt_work_as_expected"),
                    (e.DashlaneDoesntHaveTheFeaturesINeed = "dashlane_doesnt_have_the_features_i_need"),
                    (e.DashlaneIsTooExpensive = "dashlane_is_too_expensive"),
                    (e.ThereWereTooManyTechnicalIssues = "there_were_too_many_technical_issues");
                })(Me || (Me = {})),
                (function (e) {
                  (e.Adp = "adp"),
                    (e.Aed = "aed"),
                    (e.Afa = "afa"),
                    (e.Afn = "afn"),
                    (e.Alk = "alk"),
                    (e.All = "all"),
                    (e.Amd = "amd"),
                    (e.Ang = "ang"),
                    (e.Aoa = "aoa"),
                    (e.Aok = "aok"),
                    (e.Aon = "aon"),
                    (e.Aor = "aor"),
                    (e.Ara = "ara"),
                    (e.Arp = "arp"),
                    (e.Ars = "ars"),
                    (e.Ary = "ary"),
                    (e.Ats = "ats"),
                    (e.Aud = "aud"),
                    (e.Awg = "awg"),
                    (e.Aym = "aym"),
                    (e.Azm = "azm"),
                    (e.Azn = "azn"),
                    (e.Bad = "bad"),
                    (e.Bam = "bam"),
                    (e.Bbd = "bbd"),
                    (e.Bdt = "bdt"),
                    (e.Bec = "bec"),
                    (e.Bef = "bef"),
                    (e.Bel = "bel"),
                    (e.Bgj = "bgj"),
                    (e.Bgk = "bgk"),
                    (e.Bgl = "bgl"),
                    (e.Bgn = "bgn"),
                    (e.Bhd = "bhd"),
                    (e.Bif = "bif"),
                    (e.Bmd = "bmd"),
                    (e.Bnd = "bnd"),
                    (e.Bob = "bob"),
                    (e.Bop = "bop"),
                    (e.Bov = "bov"),
                    (e.Brb = "brb"),
                    (e.Brc = "brc"),
                    (e.Bre = "bre"),
                    (e.Brl = "brl"),
                    (e.Brn = "brn"),
                    (e.Brr = "brr"),
                    (e.Bsd = "bsd"),
                    (e.Btn = "btn"),
                    (e.Buk = "buk"),
                    (e.Bwp = "bwp"),
                    (e.Byb = "byb"),
                    (e.Byn = "byn"),
                    (e.Byr = "byr"),
                    (e.Bzd = "bzd"),
                    (e.Cad = "cad"),
                    (e.Cdf = "cdf"),
                    (e.Chc = "chc"),
                    (e.Che = "che"),
                    (e.Chf = "chf"),
                    (e.Chw = "chw"),
                    (e.Clf = "clf"),
                    (e.Clp = "clp"),
                    (e.Cny = "cny"),
                    (e.Cop = "cop"),
                    (e.Cou = "cou"),
                    (e.Crc = "crc"),
                    (e.Csd = "csd"),
                    (e.Csj = "csj"),
                    (e.Csk = "csk"),
                    (e.Cuc = "cuc"),
                    (e.Cup = "cup"),
                    (e.Cve = "cve"),
                    (e.Cyp = "cyp"),
                    (e.Czk = "czk"),
                    (e.Ddm = "ddm"),
                    (e.Dem = "dem"),
                    (e.Djf = "djf"),
                    (e.Dkk = "dkk"),
                    (e.Dop = "dop"),
                    (e.Dzd = "dzd"),
                    (e.Ecs = "ecs"),
                    (e.Ecv = "ecv"),
                    (e.Eek = "eek"),
                    (e.Egp = "egp"),
                    (e.Ern = "ern"),
                    (e.Esa = "esa"),
                    (e.Esb = "esb"),
                    (e.Esp = "esp"),
                    (e.Etb = "etb"),
                    (e.Eur = "eur"),
                    (e.Fim = "fim"),
                    (e.Fjd = "fjd"),
                    (e.Fkp = "fkp"),
                    (e.Frf = "frf"),
                    (e.Gbp = "gbp"),
                    (e.Gek = "gek"),
                    (e.Gel = "gel"),
                    (e.Ghc = "ghc"),
                    (e.Ghp = "ghp"),
                    (e.Ghs = "ghs"),
                    (e.Gip = "gip"),
                    (e.Gmd = "gmd"),
                    (e.Gne = "gne"),
                    (e.Gnf = "gnf"),
                    (e.Gns = "gns"),
                    (e.Gqe = "gqe"),
                    (e.Grd = "grd"),
                    (e.Gtq = "gtq"),
                    (e.Gwe = "gwe"),
                    (e.Gwp = "gwp"),
                    (e.Gyd = "gyd"),
                    (e.Hkd = "hkd"),
                    (e.Hnl = "hnl"),
                    (e.Hrd = "hrd"),
                    (e.Hrk = "hrk"),
                    (e.Htg = "htg"),
                    (e.Huf = "huf"),
                    (e.Idr = "idr"),
                    (e.Iep = "iep"),
                    (e.Ilp = "ilp"),
                    (e.Ilr = "ilr"),
                    (e.Ils = "ils"),
                    (e.Inr = "inr"),
                    (e.Iqd = "iqd"),
                    (e.Irr = "irr"),
                    (e.Isj = "isj"),
                    (e.Isk = "isk"),
                    (e.Itl = "itl"),
                    (e.Jmd = "jmd"),
                    (e.Jod = "jod"),
                    (e.Jpy = "jpy"),
                    (e.Kes = "kes"),
                    (e.Kgs = "kgs"),
                    (e.Khr = "khr"),
                    (e.Kmf = "kmf"),
                    (e.Kpw = "kpw"),
                    (e.Krw = "krw"),
                    (e.Kwd = "kwd"),
                    (e.Kyd = "kyd"),
                    (e.Kzt = "kzt"),
                    (e.Laj = "laj"),
                    (e.Lak = "lak"),
                    (e.Lbp = "lbp"),
                    (e.Lkr = "lkr"),
                    (e.Lrd = "lrd"),
                    (e.Lsl = "lsl"),
                    (e.Lsm = "lsm"),
                    (e.Ltl = "ltl"),
                    (e.Ltt = "ltt"),
                    (e.Luc = "luc"),
                    (e.Luf = "luf"),
                    (e.Lul = "lul"),
                    (e.Lvl = "lvl"),
                    (e.Lvr = "lvr"),
                    (e.Lyd = "lyd"),
                    (e.Mad = "mad"),
                    (e.Mdl = "mdl"),
                    (e.Mga = "mga"),
                    (e.Mgf = "mgf"),
                    (e.Mkd = "mkd"),
                    (e.Mlf = "mlf"),
                    (e.Mmk = "mmk"),
                    (e.Mnt = "mnt"),
                    (e.Mop = "mop"),
                    (e.Mro = "mro"),
                    (e.Mru = "mru"),
                    (e.Mtl = "mtl"),
                    (e.Mtp = "mtp"),
                    (e.Mur = "mur"),
                    (e.Mvq = "mvq"),
                    (e.Mvr = "mvr"),
                    (e.Mwk = "mwk"),
                    (e.Mxn = "mxn"),
                    (e.Mxp = "mxp"),
                    (e.Mxv = "mxv"),
                    (e.Myr = "myr"),
                    (e.Mze = "mze"),
                    (e.Mzm = "mzm"),
                    (e.Mzn = "mzn"),
                    (e.Nad = "nad"),
                    (e.Ngn = "ngn"),
                    (e.Nic = "nic"),
                    (e.Nio = "nio"),
                    (e.Nlg = "nlg"),
                    (e.Nok = "nok"),
                    (e.Npr = "npr"),
                    (e.Nzd = "nzd"),
                    (e.Omr = "omr"),
                    (e.Pab = "pab"),
                    (e.Peh = "peh"),
                    (e.Pei = "pei"),
                    (e.Pen = "pen"),
                    (e.Pes = "pes"),
                    (e.Pgk = "pgk"),
                    (e.Php = "php"),
                    (e.Pkr = "pkr"),
                    (e.Pln = "pln"),
                    (e.Plz = "plz"),
                    (e.Pte = "pte"),
                    (e.Pyg = "pyg"),
                    (e.Qar = "qar"),
                    (e.Rhd = "rhd"),
                    (e.Rok = "rok"),
                    (e.Rol = "rol"),
                    (e.Ron = "ron"),
                    (e.Rsd = "rsd"),
                    (e.Rub = "rub"),
                    (e.Rur = "rur"),
                    (e.Rwf = "rwf"),
                    (e.Sar = "sar"),
                    (e.Sbd = "sbd"),
                    (e.Scr = "scr"),
                    (e.Sdd = "sdd"),
                    (e.Sdg = "sdg"),
                    (e.Sdp = "sdp"),
                    (e.Sek = "sek"),
                    (e.Sgd = "sgd"),
                    (e.Sit = "sit"),
                    (e.Skk = "skk"),
                    (e.Sll = "sll"),
                    (e.Sos = "sos"),
                    (e.Srd = "srd"),
                    (e.Srg = "srg"),
                    (e.Ssp = "ssp"),
                    (e.Std = "std"),
                    (e.Stn = "stn"),
                    (e.Sur = "sur"),
                    (e.Svc = "svc"),
                    (e.Syp = "syp"),
                    (e.Szl = "szl"),
                    (e.Thb = "thb"),
                    (e.Tjr = "tjr"),
                    (e.Tjs = "tjs"),
                    (e.Tmm = "tmm"),
                    (e.Tmt = "tmt"),
                    (e.Tnd = "tnd"),
                    (e.Top = "top"),
                    (e.Tpe = "tpe"),
                    (e.Trl = "trl"),
                    (e.Try = "try"),
                    (e.Ttd = "ttd"),
                    (e.Twd = "twd"),
                    (e.Uah = "uah"),
                    (e.Uak = "uak"),
                    (e.Ugs = "ugs"),
                    (e.Ugw = "ugw"),
                    (e.Ugx = "ugx"),
                    (e.Usd = "usd"),
                    (e.Usn = "usn"),
                    (e.Uss = "uss"),
                    (e.Uyi = "uyi"),
                    (e.Uyn = "uyn"),
                    (e.Uyp = "uyp"),
                    (e.Uyu = "uyu"),
                    (e.Uyw = "uyw"),
                    (e.Uzs = "uzs"),
                    (e.Veb = "veb"),
                    (e.Vef = "vef"),
                    (e.Ves = "ves"),
                    (e.Vnc = "vnc"),
                    (e.Vnd = "vnd"),
                    (e.Vuv = "vuv"),
                    (e.Wst = "wst"),
                    (e.Xaf = "xaf"),
                    (e.Xag = "xag"),
                    (e.Xau = "xau"),
                    (e.Xba = "xba"),
                    (e.Xbb = "xbb"),
                    (e.Xbc = "xbc"),
                    (e.Xbd = "xbd"),
                    (e.Xcd = "xcd"),
                    (e.Xdr = "xdr"),
                    (e.Xeu = "xeu"),
                    (e.Xfo = "xfo"),
                    (e.Xfu = "xfu"),
                    (e.Xof = "xof"),
                    (e.Xpd = "xpd"),
                    (e.Xpf = "xpf"),
                    (e.Xpt = "xpt"),
                    (e.Xre = "xre"),
                    (e.Xsu = "xsu"),
                    (e.Xts = "xts"),
                    (e.Xua = "xua"),
                    (e.Xxx = "xxx"),
                    (e.Yer = "yer"),
                    (e.Yud = "yud"),
                    (e.Yum = "yum"),
                    (e.Yun = "yun"),
                    (e.Zal = "zal"),
                    (e.Zar = "zar"),
                    (e.Zmk = "zmk"),
                    (e.Zmw = "zmw"),
                    (e.Zrn = "zrn"),
                    (e.Zrz = "zrz"),
                    (e.Zwc = "zwc"),
                    (e.Zwd = "zwd"),
                    (e.Zwl = "zwl"),
                    (e.Zwn = "zwn"),
                    (e.Zwr = "zwr");
                })(Ue || (Ue = {})),
                (function (e) {
                  (e.Credential = "credential"), (e.SecureNote = "secure_note");
                })(Ge || (Ge = {})),
                (function (e) {
                  (e.Error = "error"), (e.Updated = "updated");
                })(He || (He = {})),
                (function (e) {
                  (e.Error = "error"), (e.Shared = "shared");
                })(qe || (qe = {})),
                (function (e) {
                  (e.Accepted = "accepted"), (e.Denied = "denied"), (e.Error = "error");
                })(Ve || (Ve = {})),
                (function (e) {
                  (e.Limited = "limited"), (e.Revoked = "revoked"), (e.Unlimited = "unlimited");
                })(Ke || (Ke = {})),
                (function (e) {
                  (e.CollectionSharing = "collection_sharing"), (e.ItemSharing = "item_sharing");
                })(ze || (ze = {})),
                (function (e) {
                  (e.CollectionDetailView = "collection_detail_view"),
                    (e.CollectionLeftHandSideMenuQuickActionsDropdown = "collection_left_hand_side_menu_quick_actions_dropdown"),
                    (e.CollectionListView = "collection_list_view"),
                    (e.CollectionListViewQuickActionsDropdown = "collection_list_view_quick_actions_dropdown"),
                    (e.ItemDetailView = "item_detail_view"),
                    (e.ItemListView = "item_list_view"),
                    (e.ItemListViewQuickActionsDropdown = "item_list_view_quick_actions_dropdown"),
                    (e.SearchQuickActionsDropdown = "search_quick_actions_dropdown");
                })(Ye || (Ye = {})),
                (function (e) {
                  (e.Login = "login"), (e.SecureNote = "secure_note"), (e.User = "user"), (e.UserGroup = "user_group");
                })(Ze || (Ze = {})),
                (function (e) {
                  (e.IncorrectText = "incorrect_text"), (e.NotFound = "not_found"), (e.OtherError = "other_error");
                })(Je || (Je = {})),
                (function (e) {
                  (e.AmazonWebServices = "amazon_web_services"), (e.Azure = "azure");
                })(Qe || (Qe = {})),
                (function (e) {
                  (e.IdpEntrypointNotFound = "idp_entrypoint_not_found"),
                    (e.InvalidEntrypoint = "invalid_entrypoint"),
                    (e.InvalidIdpSsoDescriptor = "invalid_idp_sso_descriptor"),
                    (e.KeyDescriptorNotFound = "key_descriptor_not_found"),
                    (e.MissingCertificate = "missing_certificate"),
                    (e.MultipleCertificates = "multiple_certificates"),
                    (e.Success = "success"),
                    (e.XmlParseFailed = "xml_parse_failed");
                })(Xe || (Xe = {})),
                (function (e) {
                  (e.AddConfigurationToServiceHost = "add_configuration_to_service_host"),
                    (e.ChooseYourSsoSolution = "choose_your_sso_solution"),
                    (e.ClearSsoSettings = "clear_sso_settings"),
                    (e.CompleteSsoSetup = "complete_sso_setup"),
                    (e.CreateSsoApplication = "create_sso_application"),
                    (e.EmailDomainError = "email_domain_error"),
                    (e.GenerateAndSaveConfiguration = "generate_and_save_configuration"),
                    (e.ReturnToSsoSelection = "return_to_sso_selection"),
                    (e.SelectEncryptionServicePlatform = "select_encryption_service_platform"),
                    (e.SetUpEncryptionServiceSettings = "set_up_encryption_service_settings"),
                    (e.SubmitEmailDomain = "submit_email_domain"),
                    (e.TestSsoConnection = "test_sso_connection"),
                    (e.TurnOnSso = "turn_on_sso"),
                    (e.UpdateIdpSettings = "update_idp_settings"),
                    (e.ValidateIdpMetadata = "validate_idp_metadata"),
                    (e.VerifyDomain = "verify_domain");
                })($e || ($e = {})),
                (function (e) {
                  (e.NitroSso = "nitro_sso"), (e.SelfHostedSso = "self_hosted_sso");
                })(et || (et = {})),
                (function (e) {
                  (e.Failure = "failure"), (e.NotTested = "not_tested"), (e.Success = "success"), (e.Timeout = "timeout");
                })(tt || (tt = {})),
                (function (e) {
                  (e.ChoseOtherPasswordManager = "chose_other_password_manager"),
                    (e.FamiliarWithDashlane = "familiar_with_dashlane"),
                    (e.MissingCriticalFeatures = "missing_critical_features"),
                    (e.NeedHelpScim = "need_help_scim"),
                    (e.NeedHelpSso = "need_help_sso"),
                    (e.NeedMoreTimeConvince = "need_more_time_convince"),
                    (e.NeedMoreTimeTeamUsage = "need_more_time_team_usage"),
                    (e.NeedSalesRep = "need_sales_rep"),
                    (e.NeverUsedBefore = "never_used_before"),
                    (e.NoInternalUsage = "no_internal_usage"),
                    (e.NoNeedForPasswordManager = "no_need_for_password_manager"),
                    (e.NotAwareTrialEnding = "not_aware_trial_ending"),
                    (e.Other = "other"),
                    (e.TechnicalIssues = "technical_issues"),
                    (e.TooExpensive = "too_expensive"),
                    (e.UsedAnotherPasswordManager = "used_another_password_manager");
                })(it || (it = {})),
                (function (e) {
                  (e.ChoseOtherPasswordManager = "chose_other_password_manager"),
                    (e.DownsizedEmployeeCount = "downsized_employee_count"),
                    (e.FamiliarWithDashlane = "familiar_with_dashlane"),
                    (e.MissingCriticalFeatures = "missing_critical_features"),
                    (e.NeedHelpScim = "need_help_scim"),
                    (e.NeedHelpSso = "need_help_sso"),
                    (e.NeedMoreTimeConvince = "need_more_time_convince"),
                    (e.NeedMoreTimeTeamUsage = "need_more_time_team_usage"),
                    (e.NeedSalesRep = "need_sales_rep"),
                    (e.NeverUsedBefore = "never_used_before"),
                    (e.NoInternalUsage = "no_internal_usage"),
                    (e.NoNeedForPasswordManager = "no_need_for_password_manager"),
                    (e.NotAwareTrialEnding = "not_aware_trial_ending"),
                    (e.Other = "other"),
                    (e.TechnicalIssues = "technical_issues"),
                    (e.TooExpensive = "too_expensive"),
                    (e.UsedAnotherPasswordManager = "used_another_password_manager");
                })(nt || (nt = {})),
                (function (e) {
                  (e.FamiliarityWithDashlane = "familiarity_with_dashlane"),
                    (e.ReasonToCancelSubscription = "reason_to_cancel_subscription"),
                    (e.ReasonToExtendTrial = "reason_to_extend_trial");
                })(ot || (ot = {})),
                (function (e) {
                  (e.AccountCreation = "account_creation"),
                    (e.ChangeMasterPassword = "change_master_password"),
                    (e.ChangeTeam = "change_team"),
                    (e.InitialLogin = "initial_login"),
                    (e.Login = "login"),
                    (e.Manual = "manual"),
                    (e.Periodic = "periodic"),
                    (e.Push = "push"),
                    (e.Save = "save"),
                    (e.SaveMeta = "save_meta"),
                    (e.SettingsChange = "settings_change"),
                    (e.Sharing = "sharing"),
                    (e.Wake = "wake");
                })(at || (at = {})),
                (function (e) {
                  (e.Full = "full"), (e.Initial = "initial"), (e.Light = "light");
                })(rt || (rt = {})),
                (function (e) {
                  (e.Download = "download"),
                    (e.NotNeeded = "not_needed"),
                    (e.Upload = "upload"),
                    (e.UploadAndDownload = "upload_and_download");
                })(st || (st = {})),
                (function (e) {
                  (e.Chronological = "chronological"),
                    (e.Deduplicate = "deduplicate"),
                    (e.Sharing = "sharing"),
                    (e.TreatProblem = "treat_problem");
                })(ct || (ct = {})),
                (function (e) {
                  (e.Authentication = "authentication"),
                    (e.DataProcessing = "data_processing"),
                    (e.Database = "database"),
                    (e.Download = "download"),
                    (e.HttpIo = "http_io"),
                    (e.HttpStatus = "http_status"),
                    (e.ItemGroupInvalidGroupAcceptSignature = "item_group_invalid_group_accept_signature"),
                    (e.ItemGroupInvalidGroupProposeSignature = "item_group_invalid_group_propose_signature"),
                    (e.ItemGroupInvalidKey = "item_group_invalid_key"),
                    (e.ItemGroupInvalidUserAcceptSignature = "item_group_invalid_user_accept_signature"),
                    (e.ItemGroupInvalidUserProposeSignature = "item_group_invalid_user_propose_signature"),
                    (e.ItemGroupNoAccess = "item_group_no_access"),
                    (e.Memory = "memory"),
                    (e.Other = "other"),
                    (e.ResponseContent = "response_content"),
                    (e.Upload = "upload");
                })(lt || (lt = {})),
                (function (e) {
                  e.NoNetwork = "no_network";
                })(dt || (dt = {})),
                (function (e) {
                  (e.AddNow = "add_now"),
                    (e.Back = "back"),
                    (e.BuyDashlane = "buy_dashlane"),
                    (e.BuySeats = "buy_seats"),
                    (e.Cancel = "cancel"),
                    (e.CancelSubscription = "cancel_subscription"),
                    (e.CheckImproveHealthScore = "check_improve_health_score"),
                    (e.Close = "close"),
                    (e.ContactSupportTeam = "contact_support_team"),
                    (e.CopyReferralLink = "copy_referral_link"),
                    (e.Discard = "discard"),
                    (e.Dismiss = "dismiss"),
                    (e.Done = "done"),
                    (e.DownloadCsv = "download_csv"),
                    (e.DownloadExtension = "download_extension"),
                    (e.ExtendTrial = "extend_trial"),
                    (e.InviteReferralsByEmail = "invite_referrals_by_email"),
                    (e.Next = "next"),
                    (e.Ok = "ok"),
                    (e.Open = "open"),
                    (e.OpenDashboard = "open_dashboard"),
                    (e.OpenGroupsPage = "open_groups_page"),
                    (e.OpenSharingCenter = "open_sharing_center"),
                    (e.OpenUsersPage = "open_users_page"),
                    (e.OpenVault = "open_vault"),
                    (e.ReInviteUsers = "re_invite_users"),
                    (e.ReactivateSubscription = "reactivate_subscription"),
                    (e.SearchBar = "search_bar"),
                    (e.SeeAll = "see_all"),
                    (e.SeeB2bPlanTiers = "see_b2b_plan_tiers"),
                    (e.SeePlan = "see_plan"),
                    (e.SeeSetupGuide = "see_setup_guide"),
                    (e.ShareReferralLinkOnX = "share_referral_link_on_x"),
                    (e.Skip = "skip"),
                    (e.Submit = "submit"),
                    (e.TryNow = "try_now"),
                    (e.UpgradeBusinessTier = "upgrade_business_tier");
                })(ut || (ut = {})),
                (function (e) {
                  (e.AccountDropdown = "account_dropdown"),
                    (e.AccountStatus = "account_status"),
                    (e.AdminOnboardingChecklist = "admin_onboarding_checklist"),
                    (e.Banner = "banner"),
                    (e.BannerPasswordLimitCloseToBeReached = "banner_password_limit_close_to_be_reached"),
                    (e.BannerPasswordLimitReached = "banner_password_limit_reached"),
                    (e.BillingInformation = "billing_information"),
                    (e.BottomPageToast = "bottom_page_toast"),
                    (e.CollectionsSharingStarterLimitCloseToBeReachedMain = "collections_sharing_starter_limit_close_to_be_reached_main"),
                    (e.CollectionsSharingStarterLimitCloseToBeReachedModal = "collections_sharing_starter_limit_close_to_be_reached_modal"),
                    (e.CollectionsSharingStarterLimitReachedMain = "collections_sharing_starter_limit_reached_main"),
                    (e.CollectionsSharingStarterLimitReachedModal = "collections_sharing_starter_limit_reached_modal"),
                    (e.DirectorySyncPaywallPage = "directory_sync_paywall_page"),
                    (e.FeatureLimitationsBlock = "feature_limitations_block"),
                    (e.GeneratePasswordWebcardB2bTrialEndReached = "generate_password_webcard_b2b_trial_end_reached"),
                    (e.GeneratePasswordWebcardPasswordLimitCloseToBeReached =
                      "generate_password_webcard_password_limit_close_to_be_reached"),
                    (e.GeneratePasswordWebcardPasswordLimitReached = "generate_password_webcard_password_limit_reached"),
                    (e.GroupsStarterLimitCloseToBeReached = "groups_starter_limit_close_to_be_reached"),
                    (e.GroupsStarterLimitReached = "groups_starter_limit_reached"),
                    (e.ImportDataPasswordLimitReached = "import_data_password_limit_reached"),
                    (e.MoreTabExtension = "more_tab_extension"),
                    (e.NeedHelp = "need_help"),
                    (e.OnboardedUsersLimit = "onboarded_users_limit"),
                    (e.SavePasswordWebcardPasswordLimitCloseToBeReached = "save_password_webcard_password_limit_close_to_be_reached"),
                    (e.ScimPaywallBanner = "scim_paywall_banner"),
                    (e.SsoPaywallBanner = "sso_paywall_banner"),
                    (e.SsoPaywallPage = "sso_paywall_page"),
                    (e.TacPopupLeftSideBar = "tac_popup_left_side_bar"),
                    (e.TacPopupTopRightMenu = "tac_popup_top_right_menu"),
                    (e.TacSettingsPolicies = "tac_settings_policies"),
                    (e.UsersSummary = "users_summary"),
                    (e.VpnFeatureActivationSetting = "vpn_feature_activation_setting");
                })(pt || (pt = {})),
                (function (e) {
                  (e.AddFirstLogin = "add_first_login"),
                    (e.AssignNewAdmin = "assign_new_admin"),
                    (e.CloseGuide = "close_guide"),
                    (e.CreateSharingGroup = "create_sharing_group"),
                    (e.GetMobileApp = "get_mobile_app"),
                    (e.InvitePlanMembers = "invite_plan_members"),
                    (e.ShareItem = "share_item"),
                    (e.TryAutofill = "try_autofill"),
                    (e.VisitDashboardPasswordHealth = "visit_dashboard_password_health"),
                    (e.VisitVault = "visit_vault");
                })(_t || (_t = {})),
                (function (e) {
                  (e.All = "all"), (e.Personal = "personal"), (e.Professional = "professional");
                })(mt || (mt = {})),
                (function (e) {
                  (e.Add = "add"), (e.Delete = "delete"), (e.Edit = "edit");
                })(ft || (ft = {})),
                (function (e) {
                  (e.MostRecent = "most_recent"),
                    (e.None = "none"),
                    (e.SearchRecent = "search_recent"),
                    (e.SearchResult = "search_result"),
                    (e.Suggested = "suggested");
                })(gt || (gt = {})),
                (function (e) {
                  (e.Credential = "credential"), (e.Passkey = "passkey");
                })(ht || (ht = {})),
                (function (e) {
                  (e.Address = "address"),
                    (e.BankStatement = "bank_statement"),
                    (e.Company = "company"),
                    (e.Credential = "credential"),
                    (e.CreditCard = "credit_card"),
                    (e.DriverLicence = "driver_licence"),
                    (e.Email = "email"),
                    (e.FiscalStatement = "fiscal_statement"),
                    (e.GeneratedPassword = "generated_password"),
                    (e.IdCard = "id_card"),
                    (e.Identity = "identity"),
                    (e.Passkey = "passkey"),
                    (e.Passport = "passport"),
                    (e.Paypal = "paypal"),
                    (e.Phone = "phone"),
                    (e.SecureNote = "secure_note"),
                    (e.SecurityBreach = "security_breach"),
                    (e.SocialSecurity = "social_security"),
                    (e.Website = "website");
                })(yt || (yt = {})),
                (function (e) {
                  (e.AddressName = "address_name"),
                    (e.AssociatedAppsList = "associated_apps_list"),
                    (e.AssociatedWebsitesList = "associated_websites_list"),
                    (e.AutoLoginOff = "auto_login_off"),
                    (e.AutoLoginOn = "auto_login_on"),
                    (e.Bank = "bank"),
                    (e.Bic = "bic"),
                    (e.BirthDate = "birth_date"),
                    (e.BirthPlace = "birth_place"),
                    (e.Building = "building"),
                    (e.CardNumber = "card_number"),
                    (e.Category = "category"),
                    (e.City = "city"),
                    (e.Color = "color"),
                    (e.Content = "content"),
                    (e.Country = "country"),
                    (e.DateOfBirth = "date_of_birth"),
                    (e.DeliveryDate = "delivery_date"),
                    (e.DeliveryPlace = "delivery_place"),
                    (e.DigitCode = "digit_code"),
                    (e.Door = "door"),
                    (e.Email = "email"),
                    (e.EmailName = "email_name"),
                    (e.ExcludeFromSecurityScoreOff = "exclude_from_security_score_off"),
                    (e.ExcludeFromSecurityScoreOn = "exclude_from_security_score_on"),
                    (e.ExpireDate = "expire_date"),
                    (e.FirstName = "first_name"),
                    (e.FiscalNumber = "fiscal_number"),
                    (e.Floor = "floor"),
                    (e.Fullname = "fullname"),
                    (e.Iban = "iban"),
                    (e.IssueNumber = "issue_number"),
                    (e.JobTitle = "job_title"),
                    (e.LastName = "last_name"),
                    (e.LastName2 = "last_name2"),
                    (e.LinkedBillingAddress = "linked_billing_address"),
                    (e.LinkedIdentity = "linked_identity"),
                    (e.LinkedPhone = "linked_phone"),
                    (e.Login = "login"),
                    (e.MiddleName = "middle_name"),
                    (e.MpProtectedOff = "mp_protected_off"),
                    (e.MpProtectedOn = "mp_protected_on"),
                    (e.NafCode = "naf_code"),
                    (e.Name = "name"),
                    (e.Note = "note"),
                    (e.Number = "number"),
                    (e.OtpCode = "otp_code"),
                    (e.OtpSecret = "otp_secret"),
                    (e.OtpUrl = "otp_url"),
                    (e.Owner = "owner"),
                    (e.OwnerName = "owner_name"),
                    (e.Password = "password"),
                    (e.PhoneName = "phone_name"),
                    (e.Pseudo = "pseudo"),
                    (e.Receiver = "receiver"),
                    (e.SecondaryLogin = "secondary_login"),
                    (e.SecurityCode = "security_code"),
                    (e.Sex = "sex"),
                    (e.SirenNumber = "siren_number"),
                    (e.SiretNumber = "siret_number"),
                    (e.SocialSecurityFullname = "social_security_fullname"),
                    (e.SocialSecurityNumber = "social_security_number"),
                    (e.Space = "space"),
                    (e.State = "state"),
                    (e.StateLevel2 = "state_level2"),
                    (e.StateNumber = "state_number"),
                    (e.StreetName = "street_name"),
                    (e.StreetNumber = "street_number"),
                    (e.StreetTitle = "street_title"),
                    (e.SubdomainOnlyOff = "subdomain_only_off"),
                    (e.SubdomainOnlyOn = "subdomain_only_on"),
                    (e.TeledeclarantNumber = "teledeclarant_number"),
                    (e.Title = "title"),
                    (e.TvaNumber = "tva_number"),
                    (e.Type = "type"),
                    (e.Url = "url"),
                    (e.Website = "website"),
                    (e.ZipCode = "zip_code");
                })(wt || (wt = {})),
                (function (e) {
                  (e.Copy = "copy"), (e.QuickActions = "quick_actions");
                })(bt || (bt = {})),
                (function (e) {
                  (e.DarkWeb = "dark_web"), (e.PublicBreach = "public_breach");
                })(St || (St = {})),
                (function (e) {
                  (e.MissingLogin = "missing_login"),
                    (e.MultipleCredentials = "multiple_credentials"),
                    (e.NoSecret = "no_secret"),
                    (e.NonOtpQrCode = "non_otp_qr_code"),
                    (e.NonOtpTextCode = "non_otp_text_code"),
                    (e.UnknownError = "unknown_error");
                })(At || (At = {})),
                (function (e) {
                  (e.QrCode = "qr_code"), (e.TextCode = "text_code");
                })(Ct || (Ct = {})),
                (function (e) {
                  (e.Hotp = "hotp"), (e.Totp = "totp");
                })(kt || (kt = {})),
                (function (e) {
                  (e.Other = "other"), (e.Sha1 = "sha1"), (e.Sha256 = "sha256"), (e.Sha512 = "sha512");
                })(vt || (vt = {})),
                (function (e) {
                  (e.Csv = "csv"), (e.SecureVault = "secure_vault"), (e.Unknown = "unknown");
                })(Tt || (Tt = {})),
                (function (e) {
                  (e.FailedToDecryptVault = "failed_to_decrypt_vault"),
                    (e.FailedToFetchVault = "failed_to_fetch_vault"),
                    (e.FailureDuringImport = "failure_during_import"),
                    (e.ImportFlowTerminated = "import_flow_terminated"),
                    (e.ImportFlowTimeout = "import_flow_timeout"),
                    (e.MultipleFilesSelected = "multiple_files_selected"),
                    (e.NoDataFound = "no_data_found"),
                    (e.Start = "start"),
                    (e.Success = "success"),
                    (e.WrongFileFormat = "wrong_file_format"),
                    (e.WrongFilePassword = "wrong_file_password"),
                    (e.WrongFileStructure = "wrong_file_structure");
                })(It || (It = {})),
                (function (e) {
                  (e.CancelProcess = "cancel_process"),
                    (e.ShutDownBrowserTab = "shut_down_browser_tab"),
                    (e.SwitchedWebappSection = "switched_webapp_section");
                })(Dt || (Dt = {})),
                (function (e) {
                  (e.DecryptLastpassVault = "decrypt_lastpass_vault"),
                    (e.LoginToLastpass = "login_to_lastpass"),
                    (e.PreviewItemsToImport = "preview_items_to_import"),
                    (e.SelectDashlaneSpace = "select_dashlane_space"),
                    (e.SelectFile = "select_file"),
                    (e.SelectImportSource = "select_import_source"),
                    (e.Success = "success");
                })(Pt || (Pt = {})),
                (function (e) {
                  (e.Source1password = "source_1password"),
                    (e.SourceBitwarden = "source_bitwarden"),
                    (e.SourceChrome = "source_chrome"),
                    (e.SourceDash = "source_dash"),
                    (e.SourceEdge = "source_edge"),
                    (e.SourceFirefox = "source_firefox"),
                    (e.SourceKeepass = "source_keepass"),
                    (e.SourceKeeper = "source_keeper"),
                    (e.SourceKeychain = "source_keychain"),
                    (e.SourceLastpass = "source_lastpass"),
                    (e.SourceOther = "source_other"),
                    (e.SourceSafari = "source_safari");
                })(Et || (Et = {})),
                (function (e) {
                  (e.Add = "add"),
                    (e.AddCredential = "add_credential"),
                    (e.Delete = "delete"),
                    (e.DeleteCredential = "delete_credential"),
                    (e.Edit = "edit");
                })(Ot || (Ot = {})),
                (function (e) {
                  (e.CollectionList = "collection_list"),
                    (e.ItemList = "item_list"),
                    (e.LeftHandSideMenu = "left_hand_side_menu"),
                    (e.SearchResults = "search_results");
                })(Wt || (Wt = {})),
                (function (e) {
                  (e.Global = "global"), (e.Personal = "personal"), (e.Team = "team");
                })(Nt || (Nt = {})),
                (function (e) {
                  (e.ExpiredVersion = "expired_version"),
                    (e.UpdateRecommended = "update_recommended"),
                    (e.UpdateRequired = "update_required"),
                    (e.UpdateStronglyEncouraged = "update_strongly_encouraged");
                })(Bt || (Bt = {})),
                (function (e) {
                  (e.EmailAlreadyInUse = "email_already_in_use"), (e.ServerError = "server_error");
                })(Ft || (Ft = {}));
            },
            9627: (e, t, i) => {
              var n;
              !(function () {
                var o;
                function a(e) {
                  var t,
                    i,
                    n,
                    o = "",
                    a = -1;
                  if (e && e.length)
                    for (n = e.length; (a += 1) < n; )
                      (t = e.charCodeAt(a)),
                        (i = a + 1 < n ? e.charCodeAt(a + 1) : 0),
                        55296 <= t && t <= 56319 && 56320 <= i && i <= 57343 && ((t = 65536 + ((1023 & t) << 10) + (1023 & i)), (a += 1)),
                        t <= 127
                          ? (o += String.fromCharCode(t))
                          : t <= 2047
                          ? (o += String.fromCharCode(192 | ((t >>> 6) & 31), 128 | (63 & t)))
                          : t <= 65535
                          ? (o += String.fromCharCode(224 | ((t >>> 12) & 15), 128 | ((t >>> 6) & 63), 128 | (63 & t)))
                          : t <= 2097151 &&
                            (o += String.fromCharCode(
                              240 | ((t >>> 18) & 7),
                              128 | ((t >>> 12) & 63),
                              128 | ((t >>> 6) & 63),
                              128 | (63 & t)
                            ));
                  return o;
                }
                function r(e, t) {
                  var i = (65535 & e) + (65535 & t);
                  return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
                }
                function s(e, t) {
                  return (e << t) | (e >>> (32 - t));
                }
                function c(e, t) {
                  for (var i, n = t ? "0123456789ABCDEF" : "0123456789abcdef", o = "", a = 0, r = e.length; a < r; a += 1)
                    (i = e.charCodeAt(a)), (o += n.charAt((i >>> 4) & 15) + n.charAt(15 & i));
                  return o;
                }
                function l(e) {
                  var t,
                    i = 32 * e.length,
                    n = "";
                  for (t = 0; t < i; t += 8) n += String.fromCharCode((e[t >> 5] >>> (24 - (t % 32))) & 255);
                  return n;
                }
                function d(e) {
                  var t,
                    i = 32 * e.length,
                    n = "";
                  for (t = 0; t < i; t += 8) n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
                  return n;
                }
                function u(e) {
                  var t,
                    i = 8 * e.length,
                    n = Array(e.length >> 2),
                    o = n.length;
                  for (t = 0; t < o; t += 1) n[t] = 0;
                  for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                  return n;
                }
                function p(e) {
                  var t,
                    i = 8 * e.length,
                    n = Array(e.length >> 2),
                    o = n.length;
                  for (t = 0; t < o; t += 1) n[t] = 0;
                  for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << (24 - (t % 32));
                  return n;
                }
                function _(e, t) {
                  var i,
                    n,
                    o,
                    a,
                    r,
                    s,
                    c,
                    l,
                    d = t.length,
                    u = Array();
                  for (a = (s = Array(Math.ceil(e.length / 2))).length, i = 0; i < a; i += 1)
                    s[i] = (e.charCodeAt(2 * i) << 8) | e.charCodeAt(2 * i + 1);
                  for (; s.length > 0; ) {
                    for (r = Array(), o = 0, i = 0; i < s.length; i += 1)
                      (o = (o << 16) + s[i]), (o -= (n = Math.floor(o / d)) * d), (r.length > 0 || n > 0) && (r[r.length] = n);
                    (u[u.length] = o), (s = r);
                  }
                  for (c = "", i = u.length - 1; i >= 0; i--) c += t.charAt(u[i]);
                  for (l = Math.ceil((8 * e.length) / (Math.log(t.length) / Math.log(2))), i = c.length; i < l; i += 1) c = t[0] + c;
                  return c;
                }
                function m(e, t) {
                  var i,
                    n,
                    o,
                    a = "",
                    r = e.length;
                  for (t = t || "=", i = 0; i < r; i += 3)
                    for (
                      o = (e.charCodeAt(i) << 16) | (i + 1 < r ? e.charCodeAt(i + 1) << 8 : 0) | (i + 2 < r ? e.charCodeAt(i + 2) : 0),
                        n = 0;
                      n < 4;
                      n += 1
                    )
                      8 * i + 6 * n > 8 * e.length
                        ? (a += t)
                        : (a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((o >>> (6 * (3 - n))) & 63));
                  return a;
                }
                (o = {
                  VERSION: "1.0.6",
                  Base64: function () {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                      t = "=",
                      i = !0;
                    (this.encode = function (n) {
                      var o,
                        r,
                        s,
                        c = "";
                      for (t = t || "=", n = i ? a(n) : n, len = n.length, o = 0; o < len; o += 3)
                        for (
                          s =
                            (n.charCodeAt(o) << 16) |
                            (o + 1 < len ? n.charCodeAt(o + 1) << 8 : 0) |
                            (o + 2 < len ? n.charCodeAt(o + 2) : 0),
                            r = 0;
                          r < 4;
                          r += 1
                        )
                          8 * o + 6 * r > 8 * len ? (c += t) : (c += e.charAt((s >>> (6 * (3 - r))) & 63));
                      return c;
                    }),
                      (this.decode = function (n) {
                        var o,
                          a,
                          r,
                          s,
                          c,
                          l,
                          d,
                          u,
                          p = "",
                          _ = [];
                        if (!n) return n;
                        (o = u = 0), (n = n.replace(new RegExp("\\" + t, "gi"), ""));
                        do {
                          (a =
                            ((d =
                              (e.indexOf(n.charAt(o++)) << 18) |
                              (e.indexOf(n.charAt(o++)) << 12) |
                              ((c = e.indexOf(n.charAt(o++))) << 6) |
                              (l = e.indexOf(n.charAt(o++)))) >>
                              16) &
                            255),
                            (r = (d >> 8) & 255),
                            (s = 255 & d),
                            (_[(u += 1)] =
                              64 === c ? String.fromCharCode(a) : 64 === l ? String.fromCharCode(a, r) : String.fromCharCode(a, r, s));
                        } while (o < n.length);
                        return (
                          (p = _.join("")),
                          (p = i
                            ? (function (e) {
                                var t,
                                  i,
                                  n,
                                  o,
                                  a,
                                  r,
                                  s = [];
                                if (((t = i = n = o = a = 0), e && e.length))
                                  for (r = e.length, e += ""; t < r; )
                                    (i += 1),
                                      (n = e.charCodeAt(t)) < 128
                                        ? ((s[i] = String.fromCharCode(n)), (t += 1))
                                        : n > 191 && n < 224
                                        ? ((o = e.charCodeAt(t + 1)), (s[i] = String.fromCharCode(((31 & n) << 6) | (63 & o))), (t += 2))
                                        : ((o = e.charCodeAt(t + 1)),
                                          (a = e.charCodeAt(t + 2)),
                                          (s[i] = String.fromCharCode(((15 & n) << 12) | ((63 & o) << 6) | (63 & a))),
                                          (t += 3));
                                return s.join("");
                              })(p)
                            : p),
                          p
                        );
                      }),
                      (this.setPad = function (e) {
                        return (t = e || t), this;
                      }),
                      (this.setTab = function (t) {
                        return (e = t || e), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (i = e), this;
                      });
                  },
                  CRC32: function (e) {
                    var t,
                      i,
                      n,
                      o = 0,
                      r = 0;
                    for (
                      e = a(e),
                        t = [
                          "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ",
                          "79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ",
                          "84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ",
                          "63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ",
                          "A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ",
                          "51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ",
                          "B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ",
                          "06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ",
                          "E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ",
                          "12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ",
                          "D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ",
                          "33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ",
                          "CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ",
                          "9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ",
                          "7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ",
                          "806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ",
                          "60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ",
                          "AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ",
                          "5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ",
                          "B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ",
                          "05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ",
                          "F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ",
                          "11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ",
                          "D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ",
                          "30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ",
                          "C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"
                        ].join(""),
                        o ^= -1,
                        i = 0,
                        n = e.length;
                      i < n;
                      i += 1
                    )
                      (r = 255 & (o ^ e.charCodeAt(i))), (o = (o >>> 8) ^ ("0x" + t.substr(9 * r, 8)));
                    return (-1 ^ o) >>> 0;
                  },
                  MD5: function (e) {
                    var t = !(!e || "boolean" != typeof e.uppercase) && e.uppercase,
                      i = e && "string" == typeof e.pad ? e.pad : "=",
                      n = !e || "boolean" != typeof e.utf8 || e.utf8;
                    function o(e) {
                      return d(p(u((e = n ? a(e) : e)), 8 * e.length));
                    }
                    function l(e, t) {
                      var i, o, r, s, c;
                      for (
                        e = n ? a(e) : e,
                          t = n ? a(t) : t,
                          (i = u(e)).length > 16 && (i = p(i, 8 * e.length)),
                          o = Array(16),
                          r = Array(16),
                          c = 0;
                        c < 16;
                        c += 1
                      )
                        (o[c] = 909522486 ^ i[c]), (r[c] = 1549556828 ^ i[c]);
                      return (s = p(o.concat(u(t)), 512 + 8 * t.length)), d(p(r.concat(s), 640));
                    }
                    function p(e, t) {
                      var i,
                        n,
                        o,
                        a,
                        s,
                        c = 1732584193,
                        l = -271733879,
                        d = -1732584194,
                        u = 271733878;
                      for (e[t >> 5] |= 128 << t % 32, e[14 + (((t + 64) >>> 9) << 4)] = t, i = 0; i < e.length; i += 16)
                        (n = c),
                          (o = l),
                          (a = d),
                          (s = u),
                          (c = g(c, l, d, u, e[i + 0], 7, -680876936)),
                          (u = g(u, c, l, d, e[i + 1], 12, -389564586)),
                          (d = g(d, u, c, l, e[i + 2], 17, 606105819)),
                          (l = g(l, d, u, c, e[i + 3], 22, -1044525330)),
                          (c = g(c, l, d, u, e[i + 4], 7, -176418897)),
                          (u = g(u, c, l, d, e[i + 5], 12, 1200080426)),
                          (d = g(d, u, c, l, e[i + 6], 17, -1473231341)),
                          (l = g(l, d, u, c, e[i + 7], 22, -45705983)),
                          (c = g(c, l, d, u, e[i + 8], 7, 1770035416)),
                          (u = g(u, c, l, d, e[i + 9], 12, -1958414417)),
                          (d = g(d, u, c, l, e[i + 10], 17, -42063)),
                          (l = g(l, d, u, c, e[i + 11], 22, -1990404162)),
                          (c = g(c, l, d, u, e[i + 12], 7, 1804603682)),
                          (u = g(u, c, l, d, e[i + 13], 12, -40341101)),
                          (d = g(d, u, c, l, e[i + 14], 17, -1502002290)),
                          (c = h(c, (l = g(l, d, u, c, e[i + 15], 22, 1236535329)), d, u, e[i + 1], 5, -165796510)),
                          (u = h(u, c, l, d, e[i + 6], 9, -1069501632)),
                          (d = h(d, u, c, l, e[i + 11], 14, 643717713)),
                          (l = h(l, d, u, c, e[i + 0], 20, -373897302)),
                          (c = h(c, l, d, u, e[i + 5], 5, -701558691)),
                          (u = h(u, c, l, d, e[i + 10], 9, 38016083)),
                          (d = h(d, u, c, l, e[i + 15], 14, -660478335)),
                          (l = h(l, d, u, c, e[i + 4], 20, -405537848)),
                          (c = h(c, l, d, u, e[i + 9], 5, 568446438)),
                          (u = h(u, c, l, d, e[i + 14], 9, -1019803690)),
                          (d = h(d, u, c, l, e[i + 3], 14, -187363961)),
                          (l = h(l, d, u, c, e[i + 8], 20, 1163531501)),
                          (c = h(c, l, d, u, e[i + 13], 5, -1444681467)),
                          (u = h(u, c, l, d, e[i + 2], 9, -51403784)),
                          (d = h(d, u, c, l, e[i + 7], 14, 1735328473)),
                          (c = y(c, (l = h(l, d, u, c, e[i + 12], 20, -1926607734)), d, u, e[i + 5], 4, -378558)),
                          (u = y(u, c, l, d, e[i + 8], 11, -2022574463)),
                          (d = y(d, u, c, l, e[i + 11], 16, 1839030562)),
                          (l = y(l, d, u, c, e[i + 14], 23, -35309556)),
                          (c = y(c, l, d, u, e[i + 1], 4, -1530992060)),
                          (u = y(u, c, l, d, e[i + 4], 11, 1272893353)),
                          (d = y(d, u, c, l, e[i + 7], 16, -155497632)),
                          (l = y(l, d, u, c, e[i + 10], 23, -1094730640)),
                          (c = y(c, l, d, u, e[i + 13], 4, 681279174)),
                          (u = y(u, c, l, d, e[i + 0], 11, -358537222)),
                          (d = y(d, u, c, l, e[i + 3], 16, -722521979)),
                          (l = y(l, d, u, c, e[i + 6], 23, 76029189)),
                          (c = y(c, l, d, u, e[i + 9], 4, -640364487)),
                          (u = y(u, c, l, d, e[i + 12], 11, -421815835)),
                          (d = y(d, u, c, l, e[i + 15], 16, 530742520)),
                          (c = w(c, (l = y(l, d, u, c, e[i + 2], 23, -995338651)), d, u, e[i + 0], 6, -198630844)),
                          (u = w(u, c, l, d, e[i + 7], 10, 1126891415)),
                          (d = w(d, u, c, l, e[i + 14], 15, -1416354905)),
                          (l = w(l, d, u, c, e[i + 5], 21, -57434055)),
                          (c = w(c, l, d, u, e[i + 12], 6, 1700485571)),
                          (u = w(u, c, l, d, e[i + 3], 10, -1894986606)),
                          (d = w(d, u, c, l, e[i + 10], 15, -1051523)),
                          (l = w(l, d, u, c, e[i + 1], 21, -2054922799)),
                          (c = w(c, l, d, u, e[i + 8], 6, 1873313359)),
                          (u = w(u, c, l, d, e[i + 15], 10, -30611744)),
                          (d = w(d, u, c, l, e[i + 6], 15, -1560198380)),
                          (l = w(l, d, u, c, e[i + 13], 21, 1309151649)),
                          (c = w(c, l, d, u, e[i + 4], 6, -145523070)),
                          (u = w(u, c, l, d, e[i + 11], 10, -1120210379)),
                          (d = w(d, u, c, l, e[i + 2], 15, 718787259)),
                          (l = w(l, d, u, c, e[i + 9], 21, -343485551)),
                          (c = r(c, n)),
                          (l = r(l, o)),
                          (d = r(d, a)),
                          (u = r(u, s));
                      return Array(c, l, d, u);
                    }
                    function f(e, t, i, n, o, a) {
                      return r(s(r(r(t, e), r(n, a)), o), i);
                    }
                    function g(e, t, i, n, o, a, r) {
                      return f((t & i) | (~t & n), e, t, o, a, r);
                    }
                    function h(e, t, i, n, o, a, r) {
                      return f((t & n) | (i & ~n), e, t, o, a, r);
                    }
                    function y(e, t, i, n, o, a, r) {
                      return f(t ^ i ^ n, e, t, o, a, r);
                    }
                    function w(e, t, i, n, o, a, r) {
                      return f(i ^ (t | ~n), e, t, o, a, r);
                    }
                    (this.hex = function (e) {
                      return c(o(e), t);
                    }),
                      (this.b64 = function (e) {
                        return m(o(e), i);
                      }),
                      (this.any = function (e, t) {
                        return _(o(e), t);
                      }),
                      (this.raw = function (e) {
                        return o(e);
                      }),
                      (this.hex_hmac = function (e, i) {
                        return c(l(e, i), t);
                      }),
                      (this.b64_hmac = function (e, t) {
                        return m(l(e, t), i);
                      }),
                      (this.any_hmac = function (e, t, i) {
                        return _(l(e, t), i);
                      }),
                      (this.vm_test = function () {
                        return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase();
                      }),
                      (this.setUpperCase = function (e) {
                        return "boolean" == typeof e && (t = e), this;
                      }),
                      (this.setPad = function (e) {
                        return (i = e || i), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (n = e), this;
                      });
                  },
                  SHA1: function (e) {
                    var t = !(!e || "boolean" != typeof e.uppercase) && e.uppercase,
                      i = e && "string" == typeof e.pad ? e.pad : "=",
                      n = !e || "boolean" != typeof e.utf8 || e.utf8;
                    function o(e) {
                      return l(u(p((e = n ? a(e) : e)), 8 * e.length));
                    }
                    function d(e, t) {
                      var i, o, r, s, c;
                      for (
                        e = n ? a(e) : e,
                          t = n ? a(t) : t,
                          (i = p(e)).length > 16 && (i = u(i, 8 * e.length)),
                          o = Array(16),
                          r = Array(16),
                          s = 0;
                        s < 16;
                        s += 1
                      )
                        (o[s] = 909522486 ^ i[s]), (r[s] = 1549556828 ^ i[s]);
                      return (c = u(o.concat(p(t)), 512 + 8 * t.length)), l(u(r.concat(c), 672));
                    }
                    function u(e, t) {
                      var i,
                        n,
                        o,
                        a,
                        c,
                        l,
                        d,
                        u,
                        p = Array(80),
                        _ = 1732584193,
                        m = -271733879,
                        h = -1732584194,
                        y = 271733878,
                        w = -1009589776;
                      for (e[t >> 5] |= 128 << (24 - (t % 32)), e[15 + (((t + 64) >> 9) << 4)] = t, i = 0; i < e.length; i += 16) {
                        for (a = _, c = m, l = h, d = y, u = w, n = 0; n < 80; n += 1)
                          (p[n] = n < 16 ? e[i + n] : s(p[n - 3] ^ p[n - 8] ^ p[n - 14] ^ p[n - 16], 1)),
                            (o = r(r(s(_, 5), f(n, m, h, y)), r(r(w, p[n]), g(n)))),
                            (w = y),
                            (y = h),
                            (h = s(m, 30)),
                            (m = _),
                            (_ = o);
                        (_ = r(_, a)), (m = r(m, c)), (h = r(h, l)), (y = r(y, d)), (w = r(w, u));
                      }
                      return Array(_, m, h, y, w);
                    }
                    function f(e, t, i, n) {
                      return e < 20 ? (t & i) | (~t & n) : e < 40 ? t ^ i ^ n : e < 60 ? (t & i) | (t & n) | (i & n) : t ^ i ^ n;
                    }
                    function g(e) {
                      return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514;
                    }
                    (this.hex = function (e) {
                      return c(o(e), t);
                    }),
                      (this.b64 = function (e) {
                        return m(o(e), i);
                      }),
                      (this.any = function (e, t) {
                        return _(o(e), t);
                      }),
                      (this.raw = function (e) {
                        return o(e);
                      }),
                      (this.hex_hmac = function (e, t) {
                        return c(d(e, t));
                      }),
                      (this.b64_hmac = function (e, t) {
                        return m(d(e, t), i);
                      }),
                      (this.any_hmac = function (e, t, i) {
                        return _(d(e, t), i);
                      }),
                      (this.vm_test = function () {
                        return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase();
                      }),
                      (this.setUpperCase = function (e) {
                        return "boolean" == typeof e && (t = e), this;
                      }),
                      (this.setPad = function (e) {
                        return (i = e || i), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (n = e), this;
                      });
                  },
                  SHA256: function (e) {
                    e && "boolean" == typeof e.uppercase && e.uppercase;
                    var t,
                      i = e && "string" == typeof e.pad ? e.pad : "=",
                      n = !e || "boolean" != typeof e.utf8 || e.utf8;
                    function o(e, t) {
                      return l(b(p((e = t ? a(e) : e)), 8 * e.length));
                    }
                    function s(e, t) {
                      (e = n ? a(e) : e), (t = n ? a(t) : t);
                      var i,
                        o = 0,
                        r = p(e),
                        s = Array(16),
                        c = Array(16);
                      for (r.length > 16 && (r = b(r, 8 * e.length)); o < 16; o += 1) (s[o] = 909522486 ^ r[o]), (c[o] = 1549556828 ^ r[o]);
                      return (i = b(s.concat(p(t)), 512 + 8 * t.length)), l(b(c.concat(i), 768));
                    }
                    function d(e, t) {
                      return (e >>> t) | (e << (32 - t));
                    }
                    function u(e, t) {
                      return e >>> t;
                    }
                    function f(e, t, i) {
                      return (e & t) ^ (~e & i);
                    }
                    function g(e, t, i) {
                      return (e & t) ^ (e & i) ^ (t & i);
                    }
                    function h(e) {
                      return d(e, 2) ^ d(e, 13) ^ d(e, 22);
                    }
                    function y(e) {
                      return d(e, 6) ^ d(e, 11) ^ d(e, 25);
                    }
                    function w(e) {
                      return d(e, 7) ^ d(e, 18) ^ u(e, 3);
                    }
                    function b(e, i) {
                      var n,
                        o,
                        a,
                        s,
                        c,
                        l,
                        p,
                        _,
                        m,
                        b,
                        S,
                        A,
                        C,
                        k = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
                        v = new Array(64);
                      for (e[i >> 5] |= 128 << (24 - (i % 32)), e[15 + (((i + 64) >> 9) << 4)] = i, m = 0; m < e.length; m += 16) {
                        for (n = k[0], o = k[1], a = k[2], s = k[3], c = k[4], l = k[5], p = k[6], _ = k[7], b = 0; b < 64; b += 1)
                          (v[b] =
                            b < 16 ? e[b + m] : r(r(r(d((C = v[b - 2]), 17) ^ d(C, 19) ^ u(C, 10), v[b - 7]), w(v[b - 15])), v[b - 16])),
                            (S = r(r(r(r(_, y(c)), f(c, l, p)), t[b]), v[b])),
                            (A = r(h(n), g(n, o, a))),
                            (_ = p),
                            (p = l),
                            (l = c),
                            (c = r(s, S)),
                            (s = a),
                            (a = o),
                            (o = n),
                            (n = r(S, A));
                        (k[0] = r(n, k[0])),
                          (k[1] = r(o, k[1])),
                          (k[2] = r(a, k[2])),
                          (k[3] = r(s, k[3])),
                          (k[4] = r(c, k[4])),
                          (k[5] = r(l, k[5])),
                          (k[6] = r(p, k[6])),
                          (k[7] = r(_, k[7]));
                      }
                      return k;
                    }
                    (this.hex = function (e) {
                      return c(o(e, n));
                    }),
                      (this.b64 = function (e) {
                        return m(o(e, n), i);
                      }),
                      (this.any = function (e, t) {
                        return _(o(e, n), t);
                      }),
                      (this.raw = function (e) {
                        return o(e, n);
                      }),
                      (this.hex_hmac = function (e, t) {
                        return c(s(e, t));
                      }),
                      (this.b64_hmac = function (e, t) {
                        return m(s(e, t), i);
                      }),
                      (this.any_hmac = function (e, t, i) {
                        return _(s(e, t), i);
                      }),
                      (this.vm_test = function () {
                        return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase();
                      }),
                      (this.setUpperCase = function (e) {
                        return this;
                      }),
                      (this.setPad = function (e) {
                        return (i = e || i), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (n = e), this;
                      }),
                      (t = [
                        1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216,
                        310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
                        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488,
                        -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
                        1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492,
                        -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
                        1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998
                      ]);
                  },
                  SHA512: function (e) {
                    e && "boolean" == typeof e.uppercase && e.uppercase;
                    var t,
                      i = e && "string" == typeof e.pad ? e.pad : "=",
                      n = !e || "boolean" != typeof e.utf8 || e.utf8;
                    function o(e) {
                      return l(s(p((e = n ? a(e) : e)), 8 * e.length));
                    }
                    function r(e, t) {
                      (e = n ? a(e) : e), (t = n ? a(t) : t);
                      var i,
                        o = 0,
                        r = p(e),
                        c = Array(32),
                        d = Array(32);
                      for (r.length > 32 && (r = s(r, 8 * e.length)); o < 32; o += 1) (c[o] = 909522486 ^ r[o]), (d[o] = 1549556828 ^ r[o]);
                      return (i = s(c.concat(p(t)), 1024 + 8 * t.length)), l(s(d.concat(i), 1536));
                    }
                    function s(e, i) {
                      var n,
                        o,
                        a,
                        r = new Array(80),
                        s = new Array(16),
                        c = [
                          new d(1779033703, -205731576),
                          new d(-1150833019, -2067093701),
                          new d(1013904242, -23791573),
                          new d(-1521486534, 1595750129),
                          new d(1359893119, -1377402159),
                          new d(-1694144372, 725511199),
                          new d(528734635, -79577749),
                          new d(1541459225, 327033209)
                        ],
                        l = new d(0, 0),
                        p = new d(0, 0),
                        _ = new d(0, 0),
                        m = new d(0, 0),
                        S = new d(0, 0),
                        A = new d(0, 0),
                        C = new d(0, 0),
                        k = new d(0, 0),
                        v = new d(0, 0),
                        T = new d(0, 0),
                        I = new d(0, 0),
                        D = new d(0, 0),
                        P = new d(0, 0),
                        E = new d(0, 0),
                        O = new d(0, 0),
                        W = new d(0, 0),
                        N = new d(0, 0);
                      for (
                        void 0 === t &&
                          (t = [
                            new d(1116352408, -685199838),
                            new d(1899447441, 602891725),
                            new d(-1245643825, -330482897),
                            new d(-373957723, -2121671748),
                            new d(961987163, -213338824),
                            new d(1508970993, -1241133031),
                            new d(-1841331548, -1357295717),
                            new d(-1424204075, -630357736),
                            new d(-670586216, -1560083902),
                            new d(310598401, 1164996542),
                            new d(607225278, 1323610764),
                            new d(1426881987, -704662302),
                            new d(1925078388, -226784913),
                            new d(-2132889090, 991336113),
                            new d(-1680079193, 633803317),
                            new d(-1046744716, -815192428),
                            new d(-459576895, -1628353838),
                            new d(-272742522, 944711139),
                            new d(264347078, -1953704523),
                            new d(604807628, 2007800933),
                            new d(770255983, 1495990901),
                            new d(1249150122, 1856431235),
                            new d(1555081692, -1119749164),
                            new d(1996064986, -2096016459),
                            new d(-1740746414, -295247957),
                            new d(-1473132947, 766784016),
                            new d(-1341970488, -1728372417),
                            new d(-1084653625, -1091629340),
                            new d(-958395405, 1034457026),
                            new d(-710438585, -1828018395),
                            new d(113926993, -536640913),
                            new d(338241895, 168717936),
                            new d(666307205, 1188179964),
                            new d(773529912, 1546045734),
                            new d(1294757372, 1522805485),
                            new d(1396182291, -1651133473),
                            new d(1695183700, -1951439906),
                            new d(1986661051, 1014477480),
                            new d(-2117940946, 1206759142),
                            new d(-1838011259, 344077627),
                            new d(-1564481375, 1290863460),
                            new d(-1474664885, -1136513023),
                            new d(-1035236496, -789014639),
                            new d(-949202525, 106217008),
                            new d(-778901479, -688958952),
                            new d(-694614492, 1432725776),
                            new d(-200395387, 1467031594),
                            new d(275423344, 851169720),
                            new d(430227734, -1194143544),
                            new d(506948616, 1363258195),
                            new d(659060556, -544281703),
                            new d(883997877, -509917016),
                            new d(958139571, -976659869),
                            new d(1322822218, -482243893),
                            new d(1537002063, 2003034995),
                            new d(1747873779, -692930397),
                            new d(1955562222, 1575990012),
                            new d(2024104815, 1125592928),
                            new d(-2067236844, -1578062990),
                            new d(-1933114872, 442776044),
                            new d(-1866530822, 593698344),
                            new d(-1538233109, -561857047),
                            new d(-1090935817, -1295615723),
                            new d(-965641998, -479046869),
                            new d(-903397682, -366583396),
                            new d(-779700025, 566280711),
                            new d(-354779690, -840897762),
                            new d(-176337025, -294727304),
                            new d(116418474, 1914138554),
                            new d(174292421, -1563912026),
                            new d(289380356, -1090974290),
                            new d(460393269, 320620315),
                            new d(685471733, 587496836),
                            new d(852142971, 1086792851),
                            new d(1017036298, 365543100),
                            new d(1126000580, -1676669620),
                            new d(1288033470, -885112138),
                            new d(1501505948, -60457430),
                            new d(1607167915, 987167468),
                            new d(1816402316, 1246189591)
                          ]),
                          o = 0;
                        o < 80;
                        o += 1
                      )
                        r[o] = new d(0, 0);
                      for (e[i >> 5] |= 128 << (24 - (31 & i)), e[31 + (((i + 128) >> 10) << 5)] = i, a = e.length, o = 0; o < a; o += 32) {
                        for (
                          u(_, c[0]), u(m, c[1]), u(S, c[2]), u(A, c[3]), u(C, c[4]), u(k, c[5]), u(v, c[6]), u(T, c[7]), n = 0;
                          n < 16;
                          n += 1
                        )
                          (r[n].h = e[o + 2 * n]), (r[n].l = e[o + 2 * n + 1]);
                        for (n = 16; n < 80; n += 1)
                          f(O, r[n - 2], 19),
                            g(W, r[n - 2], 29),
                            h(N, r[n - 2], 6),
                            (D.l = O.l ^ W.l ^ N.l),
                            (D.h = O.h ^ W.h ^ N.h),
                            f(O, r[n - 15], 1),
                            f(W, r[n - 15], 8),
                            h(N, r[n - 15], 7),
                            (I.l = O.l ^ W.l ^ N.l),
                            (I.h = O.h ^ W.h ^ N.h),
                            w(r[n], D, r[n - 7], I, r[n - 16]);
                        for (n = 0; n < 80; n += 1)
                          (P.l = (C.l & k.l) ^ (~C.l & v.l)),
                            (P.h = (C.h & k.h) ^ (~C.h & v.h)),
                            f(O, C, 14),
                            f(W, C, 18),
                            g(N, C, 9),
                            (D.l = O.l ^ W.l ^ N.l),
                            (D.h = O.h ^ W.h ^ N.h),
                            f(O, _, 28),
                            g(W, _, 2),
                            g(N, _, 7),
                            (I.l = O.l ^ W.l ^ N.l),
                            (I.h = O.h ^ W.h ^ N.h),
                            (E.l = (_.l & m.l) ^ (_.l & S.l) ^ (m.l & S.l)),
                            (E.h = (_.h & m.h) ^ (_.h & S.h) ^ (m.h & S.h)),
                            b(l, T, D, P, t[n], r[n]),
                            y(p, I, E),
                            u(T, v),
                            u(v, k),
                            u(k, C),
                            y(C, A, l),
                            u(A, S),
                            u(S, m),
                            u(m, _),
                            y(_, l, p);
                        y(c[0], c[0], _),
                          y(c[1], c[1], m),
                          y(c[2], c[2], S),
                          y(c[3], c[3], A),
                          y(c[4], c[4], C),
                          y(c[5], c[5], k),
                          y(c[6], c[6], v),
                          y(c[7], c[7], T);
                      }
                      for (o = 0; o < 8; o += 1) (s[2 * o] = c[o].h), (s[2 * o + 1] = c[o].l);
                      return s;
                    }
                    function d(e, t) {
                      (this.h = e), (this.l = t);
                    }
                    function u(e, t) {
                      (e.h = t.h), (e.l = t.l);
                    }
                    function f(e, t, i) {
                      (e.l = (t.l >>> i) | (t.h << (32 - i))), (e.h = (t.h >>> i) | (t.l << (32 - i)));
                    }
                    function g(e, t, i) {
                      (e.l = (t.h >>> i) | (t.l << (32 - i))), (e.h = (t.l >>> i) | (t.h << (32 - i)));
                    }
                    function h(e, t, i) {
                      (e.l = (t.l >>> i) | (t.h << (32 - i))), (e.h = t.h >>> i);
                    }
                    function y(e, t, i) {
                      var n = (65535 & t.l) + (65535 & i.l),
                        o = (t.l >>> 16) + (i.l >>> 16) + (n >>> 16),
                        a = (65535 & t.h) + (65535 & i.h) + (o >>> 16),
                        r = (t.h >>> 16) + (i.h >>> 16) + (a >>> 16);
                      (e.l = (65535 & n) | (o << 16)), (e.h = (65535 & a) | (r << 16));
                    }
                    function w(e, t, i, n, o) {
                      var a = (65535 & t.l) + (65535 & i.l) + (65535 & n.l) + (65535 & o.l),
                        r = (t.l >>> 16) + (i.l >>> 16) + (n.l >>> 16) + (o.l >>> 16) + (a >>> 16),
                        s = (65535 & t.h) + (65535 & i.h) + (65535 & n.h) + (65535 & o.h) + (r >>> 16),
                        c = (t.h >>> 16) + (i.h >>> 16) + (n.h >>> 16) + (o.h >>> 16) + (s >>> 16);
                      (e.l = (65535 & a) | (r << 16)), (e.h = (65535 & s) | (c << 16));
                    }
                    function b(e, t, i, n, o, a) {
                      var r = (65535 & t.l) + (65535 & i.l) + (65535 & n.l) + (65535 & o.l) + (65535 & a.l),
                        s = (t.l >>> 16) + (i.l >>> 16) + (n.l >>> 16) + (o.l >>> 16) + (a.l >>> 16) + (r >>> 16),
                        c = (65535 & t.h) + (65535 & i.h) + (65535 & n.h) + (65535 & o.h) + (65535 & a.h) + (s >>> 16),
                        l = (t.h >>> 16) + (i.h >>> 16) + (n.h >>> 16) + (o.h >>> 16) + (a.h >>> 16) + (c >>> 16);
                      (e.l = (65535 & r) | (s << 16)), (e.h = (65535 & c) | (l << 16));
                    }
                    (this.hex = function (e) {
                      return c(o(e));
                    }),
                      (this.b64 = function (e) {
                        return m(o(e), i);
                      }),
                      (this.any = function (e, t) {
                        return _(o(e), t);
                      }),
                      (this.raw = function (e) {
                        return o(e);
                      }),
                      (this.hex_hmac = function (e, t) {
                        return c(r(e, t));
                      }),
                      (this.b64_hmac = function (e, t) {
                        return m(r(e, t), i);
                      }),
                      (this.any_hmac = function (e, t, i) {
                        return _(r(e, t), i);
                      }),
                      (this.vm_test = function () {
                        return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase();
                      }),
                      (this.setUpperCase = function (e) {
                        return this;
                      }),
                      (this.setPad = function (e) {
                        return (i = e || i), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (n = e), this;
                      });
                  },
                  RMD160: function (e) {
                    e && "boolean" == typeof e.uppercase && e.uppercase;
                    var t = e && "string" == typeof e.pad ? e.pa : "=",
                      i = !e || "boolean" != typeof e.utf8 || e.utf8,
                      n = [
                        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10,
                        14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
                        12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
                      ],
                      o = [
                        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5,
                        1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4,
                        1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
                      ],
                      l = [
                        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11,
                        13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15,
                        5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
                      ],
                      d = [
                        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9,
                        7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
                        12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
                      ];
                    function p(e) {
                      return g(h(u((e = i ? a(e) : e)), 8 * e.length));
                    }
                    function f(e, t) {
                      (e = i ? a(e) : e), (t = i ? a(t) : t);
                      var n,
                        o,
                        r = u(e),
                        s = Array(16),
                        c = Array(16);
                      for (r.length > 16 && (r = h(r, 8 * e.length)), n = 0; n < 16; n += 1)
                        (s[n] = 909522486 ^ r[n]), (c[n] = 1549556828 ^ r[n]);
                      return (o = h(s.concat(u(t)), 512 + 8 * t.length)), g(h(c.concat(o), 672));
                    }
                    function g(e) {
                      var t,
                        i = "",
                        n = 32 * e.length;
                      for (t = 0; t < n; t += 8) i += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
                      return i;
                    }
                    function h(e, t) {
                      var i,
                        a,
                        c,
                        u,
                        p,
                        _,
                        m,
                        f,
                        g,
                        h,
                        S,
                        A,
                        C,
                        k,
                        v = 1732584193,
                        T = 4023233417,
                        I = 2562383102,
                        D = 271733878,
                        P = 3285377520;
                      for (e[t >> 5] |= 128 << t % 32, e[14 + (((t + 64) >>> 9) << 4)] = t, u = e.length, c = 0; c < u; c += 16) {
                        for (p = h = v, _ = S = T, m = A = I, f = C = D, g = k = P, a = 0; a <= 79; a += 1)
                          (i = r(p, y(a, _, m, f))),
                            (i = r(i, e[c + n[a]])),
                            (i = r(i, w(a))),
                            (i = r(s(i, l[a]), g)),
                            (p = g),
                            (g = f),
                            (f = s(m, 10)),
                            (m = _),
                            (_ = i),
                            (i = r(h, y(79 - a, S, A, C))),
                            (i = r(i, e[c + o[a]])),
                            (i = r(i, b(a))),
                            (i = r(s(i, d[a]), k)),
                            (h = k),
                            (k = C),
                            (C = s(A, 10)),
                            (A = S),
                            (S = i);
                        (i = r(T, r(m, C))), (T = r(I, r(f, k))), (I = r(D, r(g, h))), (D = r(P, r(p, S))), (P = r(v, r(_, A))), (v = i);
                      }
                      return [v, T, I, D, P];
                    }
                    function y(e, t, i, n) {
                      return 0 <= e && e <= 15
                        ? t ^ i ^ n
                        : 16 <= e && e <= 31
                        ? (t & i) | (~t & n)
                        : 32 <= e && e <= 47
                        ? (t | ~i) ^ n
                        : 48 <= e && e <= 63
                        ? (t & n) | (i & ~n)
                        : 64 <= e && e <= 79
                        ? t ^ (i | ~n)
                        : "rmd160_f: j out of range";
                    }
                    function w(e) {
                      return 0 <= e && e <= 15
                        ? 0
                        : 16 <= e && e <= 31
                        ? 1518500249
                        : 32 <= e && e <= 47
                        ? 1859775393
                        : 48 <= e && e <= 63
                        ? 2400959708
                        : 64 <= e && e <= 79
                        ? 2840853838
                        : "rmd160_K1: j out of range";
                    }
                    function b(e) {
                      return 0 <= e && e <= 15
                        ? 1352829926
                        : 16 <= e && e <= 31
                        ? 1548603684
                        : 32 <= e && e <= 47
                        ? 1836072691
                        : 48 <= e && e <= 63
                        ? 2053994217
                        : 64 <= e && e <= 79
                        ? 0
                        : "rmd160_K2: j out of range";
                    }
                    (this.hex = function (e) {
                      return c(p(e));
                    }),
                      (this.b64 = function (e) {
                        return m(p(e), t);
                      }),
                      (this.any = function (e, t) {
                        return _(p(e), t);
                      }),
                      (this.raw = function (e) {
                        return p(e);
                      }),
                      (this.hex_hmac = function (e, t) {
                        return c(f(e, t));
                      }),
                      (this.b64_hmac = function (e, i) {
                        return m(f(e, i), t);
                      }),
                      (this.any_hmac = function (e, t, i) {
                        return _(f(e, t), i);
                      }),
                      (this.vm_test = function () {
                        return "900150983cd24fb0d6963f7d28e17f72" === hex("abc").toLowerCase();
                      }),
                      (this.setUpperCase = function (e) {
                        return this;
                      }),
                      (this.setPad = function (e) {
                        return void 0 !== e && (t = e), this;
                      }),
                      (this.setUTF8 = function (e) {
                        return "boolean" == typeof e && (i = e), this;
                      });
                  }
                }),
                  t && "object" == typeof i.g && i.g && i.g === i.g.global && i.g,
                  void 0 ===
                    (n = function () {
                      return o;
                    }.call(t, i, t, e)) || (e.exports = n);
              })();
            },
            9468: (e, t, i) => {
              "use strict";
              i.d(t, { N5: () => c, NW: () => a, UE: () => u, V5: () => o, ab: () => l, dG: () => s, gP: () => d, t5: () => r });
              var n = i(4309);
              const o = (e) => (0, n.Wm)(e.type),
                a = (e) => (0, n.$b)(e.type);
              var r, s;
              !(function (e) {
                (e.Fill = "fill"), (e.Click = "click");
              })(r || (r = {})),
                (function (e) {
                  (e.Automatic = "automatic"), (e.Webcard = "webcard"), (e.UserAppliedAutofillCorrection = "autofillCorrection");
                })(s || (s = {}));
              const c = (e) => {
                  return (t = e.dataSource), (0, n.Wm)(t.type);
                  var t;
                },
                l = (e) => {
                  return (t = e.dataSource), (0, n.$b)(t.type);
                  var t;
                };
              var d;
              !(function (e) {
                (e.TemporarilyDisable = "temporarilyDisable"), (e.PermanentlyDisable = "permanentlyDisable");
              })(d || (d = {}));
              const u = (e) => e !== n.JV.SubmitButton;
            },
            7358: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { v: () => n }),
                (function (e) {
                  (e.Injected = "injected"), (e.Webcards = "webcards"), (e.Popup = "popup");
                })(n || (n = {}));
            },
            2080: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { g: () => n }),
                (function (e) {
                  (e.CopyValue = "copyValue"), (e.ApplyAutofillDetails = "applyAutofillDetails"), (e.Webauthn = "webauthnRequest");
                })(n || (n = {}));
            },
            3680: (e, t, i) => {
              "use strict";
              var n, o, a;
              function r(e) {
                return (
                  "object" == typeof e &&
                  null !== e &&
                  "status" in e &&
                  "success" === e.status &&
                  "value" in e &&
                  "object" == typeof e.value &&
                  null !== e.value
                );
              }
              function s(e) {
                return (
                  r(e) ||
                  (function (e) {
                    return "object" == typeof e && null !== e && "status" in e && "useFallback" === e.status;
                  })(e) ||
                  (function (e) {
                    return (
                      "object" == typeof e &&
                      null !== e &&
                      "status" in e &&
                      "error" === e.status &&
                      "errorName" in e &&
                      "string" == typeof e.errorName
                    );
                  })(e)
                );
              }
              i.d(t, { MQ: () => n, Ok: () => r, gE: () => s, jl: () => o, o7: () => a }),
                (function (e) {
                  (e.Success = "Success"), (e.Error = "Error");
                })(n || (n = {})),
                (function (e) {
                  (e.NotSupportedError = "NotSupportedError"),
                    (e.SecurityError = "SecurityError"),
                    (e.NotAllowedError = "NotAllowedError"),
                    (e.InvalidStateError = "InvalidStateError"),
                    (e.UnknownError = "UnknownError");
                })(o || (o = {})),
                (function (e) {
                  (e.Create = "create"), (e.Get = "get");
                })(a || (a = {}));
            },
            3233: (e, t, i) => {
              "use strict";
              i.d(t, {
                B8: () => r,
                Jy: () => s,
                OZ: () => a,
                mp: () => p,
                qZ: () => u,
                uN: () => n,
                vr: () => l,
                yA: () => c,
                zz: () => d
              });
              var n,
                o = i(121);
              !(function (e) {
                (e.Classic = "classic"),
                  (e.FixAutofillIssue = "fixAutofillIssue"),
                  (e.GeneratePassword = "pwdGenerator"),
                  (e.Reactivation = "reactivation"),
                  (e.WebAuthnReactivation = "webAuthnReactivation"),
                  (e.FieldDisabledNotification = "fieldDisabledNotification"),
                  (e.SelfCorrecting = "selfCorrecting");
              })(n || (n = {}));
              const a = (e) => e.webcardType === o.$I.AutofillDropdown,
                r = (e) => a(e) && e.configuration === n.Classic,
                s = (e) => a(e) && e.configuration === n.SelfCorrecting,
                c = (e) => a(e) && e.configuration === n.GeneratePassword,
                l = (e) => a(e) && e.configuration === n.Reactivation,
                d = (e) => a(e) && e.configuration === n.WebAuthnReactivation,
                u = (e) => a(e) && e.configuration === n.FieldDisabledNotification;
              var p;
              !(function (e) {
                (e.PasswordGenerationDashlaneLogin = "generation"),
                  (e.PossibleDuplicateRegistration = "registration"),
                  (e.UnsecureProtocol = "unsecure"),
                  (e.UnsecureIframe = "unsecureIframe"),
                  (e.SandboxedIframe = "sandboxedIframe"),
                  (e.None = "");
              })(p || (p = {}));
            },
            4786: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { h: () => n }),
                (function (e) {
                  (e.SaveCredential = "save-credential"), (e.UpdateCredential = "update-credential");
                })(n || (n = {}));
            },
            7502: (e, t, i) => {
              "use strict";
              i.d(t, { a: () => a, l: () => o });
              var n = i(121);
              const o = (e) => e.webcardType === n.$I.OnboardingNotification;
              var a;
              !(function (e) {
                (e.AfterLogin = "webOnboardingAfterLogin"),
                  (e.AfterSave = "webOnboardingAfterSave"),
                  (e.AfterCancel = "webOnboardingAfterCancel");
              })(a || (a = {}));
            },
            7072: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { g: () => n }),
                (function (e) {
                  (e[(e.None = 0)] = "None"), (e[(e.VaultItem = 1)] = "VaultItem"), (e[(e.Global = 2)] = "Global");
                })(n || (n = {}));
            },
            121: (e, t, i) => {
              "use strict";
              var n, o;
              function a(e, t) {
                return t.reduce((t, i) => (e[i] ? { ...t, [i]: e[i] } : t), {});
              }
              i.d(t, { $I: () => n, KA: () => o, q_: () => a }),
                (function (e) {
                  (e.AutofillDropdown = "autofill-dropdown"),
                    (e.AutologinSelection = "autologin-selection"),
                    (e.DataCapture = "data-capture"),
                    (e.MasterPassword = "master-password"),
                    (e.SavePassword = "save-password"),
                    (e.AutofillConfirmationPasswordLess = "autofill-confirmation"),
                    (e.WarnGeneratedPassword = "warn-generated-password"),
                    (e.OnboardingNotification = "notification"),
                    (e.WebauthnCreateConfirmation = "webauthn-create-confirmation"),
                    (e.WebauthnGetConfirmation = "webauthn-get-confirmation"),
                    (e.WebauthnPasskeySelection = "webauthn-passkey-selection"),
                    (e.FollowUpNotification = "follow-up-notification"),
                    (e.FeedbackNotification = "feedback-notification"),
                    (e.PhishingPrevention = "phishing-prevention"),
                    (e.UserVerification = "user-verification");
                })(n || (n = {})),
                (function (e) {
                  (e.WebauthnRequest = "webauthnRequest"),
                    (e.PhishingPrevention = "phishingPrevention"),
                    (e.PendingOperation = "pendingOperation");
                })(o || (o = {}));
            },
            5475: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { H: () => n }),
                (function (e) {
                  (e.SimpleItem = "SimpleItem"), (e.EnhancedItem = "EnhancedItem");
                })(n || (n = {}));
            },
            8776: (e, t, i) => {
              "use strict";
              i.d(t, { Z: () => c });
              const n = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
              let o;
              const a = new Uint8Array(16);
              function r() {
                if (!o && ((o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !o))
                  throw new Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return o(a);
              }
              const s = [];
              for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));
              const c = function (e, t, i) {
                if (n.randomUUID && !t && !e) return n.randomUUID();
                const o = (e = e || {}).random || (e.rng || r)();
                if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
                  i = i || 0;
                  for (let e = 0; e < 16; ++e) t[i + e] = o[e];
                  return t;
                }
                return (function (e, t = 0) {
                  return (
                    s[e[t + 0]] +
                    s[e[t + 1]] +
                    s[e[t + 2]] +
                    s[e[t + 3]] +
                    "-" +
                    s[e[t + 4]] +
                    s[e[t + 5]] +
                    "-" +
                    s[e[t + 6]] +
                    s[e[t + 7]] +
                    "-" +
                    s[e[t + 8]] +
                    s[e[t + 9]] +
                    "-" +
                    s[e[t + 10]] +
                    s[e[t + 11]] +
                    s[e[t + 12]] +
                    s[e[t + 13]] +
                    s[e[t + 14]] +
                    s[e[t + 15]]
                  );
                })(o);
              };
            },
            4309: (e, t, i) => {
              "use strict";
              i.d(t, { $b: () => a, JV: () => n, Wm: () => r });
              var n,
                o = i(8364);
              !(function (e) {
                (e.NewPassword = "newPassword"), (e.SubmitButton = "submitButton"), (e.WebauthnConditionalUI = "WebauthnConditionalUI");
              })(n || (n = {}));
              const a = (e) => Object.values(n).includes(e),
                r = (e) => e in o.k;
            },
            8364: (e, t, i) => {
              "use strict";
              var n;
              i.d(t, { k: () => n }),
                (function (e) {
                  (e.Address = "Address"),
                    (e.BankAccount = "BankAccount"),
                    (e.Company = "Company"),
                    (e.Credential = "Credential"),
                    (e.CredentialCategory = "CredentialCategory"),
                    (e.DriverLicense = "DriverLicense"),
                    (e.Email = "Email"),
                    (e.FiscalId = "FiscalId"),
                    (e.GeneratedPassword = "GeneratedPassword"),
                    (e.IdCard = "IdCard"),
                    (e.Identity = "Identity"),
                    (e.NoteCategory = "NoteCategory"),
                    (e.Note = "Note"),
                    (e.Passport = "Passport"),
                    (e.Passkey = "Passkey"),
                    (e.PaymentCard = "PaymentCard"),
                    (e.PersonalWebsite = "PersonalWebsite"),
                    (e.Phone = "Phone"),
                    (e.SocialSecurityId = "SocialSecurityId");
                })(n || (n = {}));
            }
          },
          i = {};
        function n(e) {
          var o = i[e];
          if (void 0 !== o) return o.exports;
          var a = (i[e] = { exports: {} });
          return t[e](a, a.exports, n), a.exports;
        }
        (n.n = (e) => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, { a: t }), t;
        }),
          (n.d = (e, t) => {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
          }),
          (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if ("object" == typeof window) return window;
            }
          })()),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var o = {};
        (() => {
          "use strict";
          n.r(o),
            n.d(o, {
              AutofillDropdownWebcardConfiguration: () => s.uN,
              AutofillDropdownWebcardWarningType: () => s.mp,
              AutofillEngineClientType: () => t.v,
              AutofillOperationType: () => e.t5,
              AutofillRequestOriginType: () => e.dG,
              CredentialOperationType: () => C.h,
              DisableDashlaneOnFieldOption: () => e.gP,
              NeverAskAgainMode: () => D.g,
              OnboardingNotificationConfiguration: () => v.a,
              PendingOperationType: () => y.g,
              WebAuthnStatus: () => r.MQ,
              WebauthnErrorName: () => r.jl,
              WebauthnOperationType: () => r.o7,
              WebcardItemType: () => O.H,
              WebcardMetadataType: () => w.KA,
              WebcardType: () => w.$I,
              authenticatorAttachmentStringToHermesAuthenticatorAttachmentType: () => u,
              authenticatorResidentKeyRequirementToAuthenticatorResidentKeyHermesType: () => p,
              authenticatorUserVerificationRequirementToHermesType: () => _,
              credentialMediationRequirementToHermesAuthenticationMediationType: () => g,
              dropdownWebcardWarningTypeToHermesWarningType: () => d,
              filterWebcardMetadataStore: () => w.q_,
              formLabelsTypeToHermesFormTypeMap: () => l,
              isAutofillConfirmationPasswordLessWebcard: () => b,
              isAutofillDetailsForOtherDataSource: () => e.ab,
              isAutofillDetailsForVaultDataSource: () => e.N5,
              isAutofillDropdownWebcard: () => s.OZ,
              isAutologinSelectionWebcard: () => S,
              isClassicDropdownWebcard: () => s.B8,
              isDataCaptureWebcard: () => A,
              isFieldDisabledNotificationWebcard: () => s.qZ,
              isGeneratePasswordWebcard: () => s.yA,
              isMasterPasswordWebcard: () => k,
              isOnboardingNotificationWebcard: () => v.l,
              isOtherSourceIngredient: () => e.NW,
              isPhishingPreventionWebcard: () => T,
              isReactivationWebcard: () => s.vr,
              isSavePasswordWebcard: () => I,
              isSelfCorrectingDropdownWebcard: () => s.Jy,
              isValidDataSourceTypeForRecipe: () => e.UE,
              isVaultIngredient: () => e.V5,
              isWarnGeneratedPasswordWebcard: () => P,
              isWebAuthnReactivationWebcard: () => s.zz,
              isWebauthnPasskeySelectionWebcard: () => E,
              isWebauthnResult: () => r.gE,
              isWebauthnResultSuccess: () => r.Ok,
              numberToCorrespondingAlgorithmName: () => h,
              vaultSourceTypeToHermesItemTypeMap: () => c,
              webAuthnErrorNameToHermesPasskeyAuthenticationErrorType: () => f,
              webAuthnErrorNameToHermesPasskeyRegistrationErrorType: () => m
            });
          var e = n(9468),
            t = n(7358),
            i = n(8364),
            a = n(3039),
            r = n(3680),
            s = n(3233);
          const c = {
              [i.k.Address]: a.qGq.Address,
              [i.k.BankAccount]: a.qGq.BankStatement,
              [i.k.Company]: a.qGq.Company,
              [i.k.Credential]: a.qGq.Credential,
              [i.k.DriverLicense]: a.qGq.DriverLicence,
              [i.k.Email]: a.qGq.Email,
              [i.k.FiscalId]: a.qGq.FiscalStatement,
              [i.k.GeneratedPassword]: a.qGq.GeneratedPassword,
              [i.k.IdCard]: a.qGq.IdCard,
              [i.k.Identity]: a.qGq.Identity,
              [i.k.Passkey]: a.qGq.Passkey,
              [i.k.Passport]: a.qGq.Passport,
              [i.k.PaymentCard]: a.qGq.CreditCard,
              [i.k.PersonalWebsite]: a.qGq.Website,
              [i.k.Phone]: a.qGq.Phone,
              [i.k.SocialSecurityId]: a.qGq.SocialSecurity
            },
            l = {
              login: a.dm3.Login,
              register: a.dm3.Register,
              identity: a.dm3.Identity,
              change_password: a.dm3.ChangePassword,
              payment: a.dm3.Payment,
              billing: a.dm3.Billing,
              shipping: a.dm3.Shipping,
              forgot_password: a.dm3.ForgotPassword,
              contact: a.dm3.Contact,
              newsletter: a.dm3.Newsletter,
              search: a.dm3.Search,
              shopping_basket: a.dm3.ShoppingBasket,
              other: a.dm3.Other
            },
            d = {
              [s.mp.PasswordGenerationDashlaneLogin]: a.OxQ.LoginAccountPasswordGeneration,
              [s.mp.PossibleDuplicateRegistration]: a.OxQ.DuplicateRisk,
              [s.mp.UnsecureProtocol]: a.OxQ.HttpUnsecureWebsite,
              [s.mp.UnsecureIframe]: a.OxQ.UnsecureIframe,
              [s.mp.SandboxedIframe]: a.OxQ.UnsecureIframeSandbox,
              [s.mp.None]: a.OxQ.HttpUnsecureWebsite
            },
            u = { "cross-platform": a.YeR.CrossPlatform, platform: a.YeR.Platform },
            p = { discouraged: a.b1s.Discouraged, preferred: a.b1s.Preferred, required: a.b1s.Required },
            _ = { discouraged: a.C66.Discouraged, preferred: a.C66.Preferred, required: a.C66.Required },
            m = {
              [r.jl.InvalidStateError]: a.uPF.InvalidState,
              [r.jl.NotAllowedError]: a.uPF.NotAllowed,
              [r.jl.NotSupportedError]: a.uPF.NotSupported,
              [r.jl.SecurityError]: a.uPF.Security,
              [r.jl.UnknownError]: a.uPF.Unknown
            },
            f = {
              [r.jl.InvalidStateError]: a.SP9.InvalidState,
              [r.jl.NotAllowedError]: a.SP9.NotAllowed,
              [r.jl.NotSupportedError]: a.SP9.NotSupported,
              [r.jl.SecurityError]: a.SP9.Security,
              [r.jl.UnknownError]: a.SP9.Unknown
            },
            g = { conditional: a.AzZ.Conditional, optional: a.AzZ.Optional, required: a.AzZ.Required, silent: a.AzZ.Silent },
            h = {
              1: a.hsx.A128Gcm,
              [-3]: a.hsx.A128Kw,
              2: a.hsx.A192Gcm,
              [-4]: a.hsx.A192Kw,
              3: a.hsx.A256Gcm,
              [-5]: a.hsx.A256Kw,
              30: a.hsx.AesCcm16128128,
              31: a.hsx.AesCcm16128256,
              10: a.hsx.AesCcm1664128,
              11: a.hsx.AesCcm1664256,
              32: a.hsx.AesCcm64128128,
              33: a.hsx.AesCcm64128256,
              12: a.hsx.AesCcm6464128,
              13: a.hsx.AesCcm6464256,
              14: a.hsx.AesMac128128,
              15: a.hsx.AesMac12864,
              25: a.hsx.AesMac256128,
              26: a.hsx.AesMac25664,
              24: a.hsx.ChaCha20Poly1305,
              [-6]: a.hsx.Direct,
              [-12]: a.hsx.DirectHkdfAes128,
              [-13]: a.hsx.DirectHkdfAes256,
              [-10]: a.hsx.DirectHkdfSha256,
              [-11]: a.hsx.DirectHkdfSha512,
              [-32]: a.hsx.EcdhEsA128Kw,
              [-30]: a.hsx.EcdhEsA192Kw,
              [-34]: a.hsx.EcdhEsA256Kw,
              [-31]: a.hsx.EcdhEsHkdf256,
              [-26]: a.hsx.EcdhEsHkdf512,
              [-29]: a.hsx.EcdhSsA128Kw,
              [-33]: a.hsx.EcdhSsA192Kw,
              [-25]: a.hsx.EcdhSsA256Kw,
              [-27]: a.hsx.EcdhSsHkdf256,
              [-28]: a.hsx.EcdhSsHkdf512,
              [-8]: a.hsx.EdDsa,
              [-7]: a.hsx.Es256,
              [-47]: a.hsx.Es256K,
              [-35]: a.hsx.Es384,
              [-36]: a.hsx.Es512,
              5: a.hsx.Hmac256256,
              4: a.hsx.Hmac25664,
              6: a.hsx.Hmac384384,
              7: a.hsx.Hmac512512,
              [-46]: a.hsx.HssLms,
              34: a.hsx.IvGeneration,
              [-37]: a.hsx.Ps256,
              [-38]: a.hsx.Ps384,
              [-39]: a.hsx.Ps512,
              0: a.hsx.Reserved,
              [-65535]: a.hsx.Rs1,
              [-257]: a.hsx.Rs256,
              [-258]: a.hsx.Rs384,
              [-259]: a.hsx.Rs512,
              [-40]: a.hsx.RsaesOaepWithRfc8017,
              [-41]: a.hsx.RsaesOaepWithSha256,
              [-42]: a.hsx.RsaesOaepWithSha512,
              [-14]: a.hsx.Sha1,
              [-16]: a.hsx.Sha256,
              [-15]: a.hsx.Sha25664,
              [-43]: a.hsx.Sha384,
              [-44]: a.hsx.Sha512,
              [-17]: a.hsx.Sha512256,
              [-18]: a.hsx.Shake128,
              [-45]: a.hsx.Shake256,
              8: a.hsx.Unassigned,
              [-260]: a.hsx.WalnutDsa
            };
          var y = n(2080),
            w = n(121);
          const b = (e) => e.webcardType === w.$I.AutofillConfirmationPasswordLess,
            S = (e) => e.webcardType === w.$I.AutologinSelection,
            A = (e) => e.webcardType === w.$I.DataCapture;
          var C = n(4786);
          const k = (e) => e.webcardType === w.$I.MasterPassword;
          var v = n(7502);
          const T = (e) => e.webcardType === w.$I.PhishingPrevention,
            I = (e) => e.webcardType === w.$I.SavePassword;
          var D = n(7072);
          const P = (e) => e.webcardType === w.$I.WarnGeneratedPassword,
            E = (e) => e.webcardType === w.$I.WebauthnPasskeySelection;
          var O = n(5475);
        })(),
          (e.exports = o);
      })();
    },
    4309: (e, t, i) => {
      "use strict";
      var n;
      i.d(t, { JV: () => n }),
        (function (e) {
          (e.NewPassword = "newPassword"), (e.SubmitButton = "submitButton"), (e.WebauthnConditionalUI = "WebauthnConditionalUI");
        })(n || (n = {}));
    },
    8364: (e, t, i) => {
      "use strict";
      var n;
      i.d(t, { k: () => n }),
        (function (e) {
          (e.Address = "Address"),
            (e.BankAccount = "BankAccount"),
            (e.Company = "Company"),
            (e.Credential = "Credential"),
            (e.CredentialCategory = "CredentialCategory"),
            (e.DriverLicense = "DriverLicense"),
            (e.Email = "Email"),
            (e.FiscalId = "FiscalId"),
            (e.GeneratedPassword = "GeneratedPassword"),
            (e.IdCard = "IdCard"),
            (e.Identity = "Identity"),
            (e.NoteCategory = "NoteCategory"),
            (e.Note = "Note"),
            (e.Passport = "Passport"),
            (e.Passkey = "Passkey"),
            (e.PaymentCard = "PaymentCard"),
            (e.PersonalWebsite = "PersonalWebsite"),
            (e.Phone = "Phone"),
            (e.SocialSecurityId = "SocialSecurityId");
        })(n || (n = {}));
    }
  }
]);
