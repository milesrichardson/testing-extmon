(() => {
  (() => {
    "use strict";
    var Ku = {};
    const F = {
        en: {
          noPinDomain: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
          noPinMeta: "Sorry, pinning is not allowed from this page. Please contact the site operator if you have any questions.",
          noPinnablesFound: "Sorry, couldn't find any pinnable things on this page."
        },
        cs: {
          noPinDomain:
            "Je n\xE1m l\xEDto. Z t\xE9to dom\xE9ny nen\xED mo\u017En\xE9 p\u0159id\xE1vat piny. S dotazy se obracejte na provozovatele webu.",
          noPinMeta:
            "Je n\xE1m l\xEDto. Z t\xE9to str\xE1nky nen\xED mo\u017En\xE9 p\u0159id\xE1vat piny. S dotazy se obracejte na provozovatele webu.",
          noPinnablesFound:
            "Je n\xE1m l\xEDto. Na t\xE9to str\xE1nce jsme nenalezli \u017E\xE1dn\xFD obsah, kter\xFD by bylo mo\u017En\xE9 p\u0159ipnout."
        },
        da: {
          noPinDomain: "Det er ikke muligt at tilf\xF8je pins fra dom\xE6net. Kontakt websitets ejer, hvis du har sp\xF8rgsm\xE5l.",
          noPinMeta: "Det er ikke tilladt at s\xE6tte pins op fra denne side. Kontakt websitets ejer, hvis du har sp\xF8rgsm\xE5l.",
          noPinnablesFound: "Der er ikke rigtigt noget at s\xE6tte op p\xE5 denne side."
        },
        de: {
          noPinDomain:
            "Es tut uns leid, aber von dieser Domain kann nichts gepinnt werden. Bitte kontaktiere den Website-Betreiber, falls du weitere Fragen hast.",
          noPinMeta:
            "Es tut uns leid, aber von dieser Seite kann nichts gepinnt werden. Bitte kontaktiere den Website-Betreiber, falls du weitere Fragen hast.",
          noPinnablesFound: "Es tut uns leid, aber wir konnten auf dieser Seite nichts finden, was du pinnen k\xF6nntest."
        },
        es: {
          noPinDomain:
            "Lo sentimos, no est\xE1 permitido pinear desde este dominio. Ponte en contacto con el operador del sitio si tienes alguna pregunta.",
          noPinMeta:
            "Lo sentimos, no est\xE1 permitido pinear desde esta p\xE1gina. Ponte en contacto con el operador del sitio si tienes alguna pregunta.",
          noPinnablesFound: "Lo sentimos, no hemos encontrado ning\xFAn elemento que se pueda pinear en esta p\xE1gina."
        },
        "es-mx": {
          noPinDomain:
            "Lamentablemente, no est\xE1 permitido pinear desde este dominio. Si quieres hacer consultas, comun\xEDcate con el operador del sitio.",
          noPinMeta:
            "Lamentablemente, no est\xE1 permitido pinear desde esta p\xE1gina. Si quieres hacer consultas, comun\xEDcate con el operador del sitio.",
          noPinnablesFound: "Lamentablemente, no se encontraron cosas para pinear en esta p\xE1gina."
        },
        el: {
          noPinDomain:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9 \u03C4\u03BF \u03BA\u03B1\u03C1\u03C6\u03AF\u03C4\u03C3\u03C9\u03BC\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03C4\u03BF\u03BC\u03AD\u03B1. \u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE \u03C4\u03B7\u03C2 \u03B9\u03C3\u03C4\u03BF\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 \u03B1\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03B1\u03C0\u03BF\u03C1\u03AF\u03B5\u03C2.",
          noPinMeta:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9 \u03C4\u03BF \u03BA\u03B1\u03C1\u03C6\u03AF\u03C4\u03C3\u03C9\u03BC\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1. \u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE \u03C4\u03B7\u03C2 \u03B9\u03C3\u03C4\u03BF\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 \u03B1\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03B1\u03C0\u03BF\u03C1\u03AF\u03B5\u03C2.",
          noPinnablesFound:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03AE\u03C4\u03B1\u03BD \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7 \u03B5\u03CD\u03C1\u03B5\u03C3\u03B7 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD \u03C0\u03BF\u03C5 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03BA\u03B1\u03C1\u03C6\u03B9\u03C4\u03C3\u03C9\u03B8\u03BF\u03CD\u03BD \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1."
        },
        fi: {
          noPinDomain:
            "Et voi tehd\xE4 Pin-lis\xE4yksi\xE4 t\xE4st\xE4 verkkotunnuksesta. Jos sinulla on kysytt\xE4v\xE4\xE4, ota yhteytt\xE4 sivuston yll\xE4pit\xE4j\xE4\xE4n.",
          noPinMeta:
            "Et voi tehd\xE4 Pin-lis\xE4yksi\xE4 t\xE4lt\xE4 sivulta. Jos sinulla on kysytt\xE4v\xE4\xE4, ota yhteytt\xE4 sivuston yll\xE4pit\xE4j\xE4\xE4n.",
          noPinnablesFound: "Sivulta ei valitettavasti l\xF6ydy sis\xE4lt\xF6\xE4, jota voi lis\xE4t\xE4."
        },
        fr: {
          noPinDomain:
            "D\xE9sol\xE9, mais vous ne pouvez pas \xE9pingler les contenus de ce domaine. Pour toute question, veuillez contacter l'administrateur du site.",
          noPinMeta:
            "D\xE9sol\xE9, mais vous ne pouvez pas \xE9pingler les contenus de cette page. Pour toute question, veuillez contacter l'administrateur du site.",
          noPinnablesFound: "D\xE9sol\xE9, mais aucun contenu susceptible d'\xEAtre \xE9pingl\xE9 n'a \xE9t\xE9 trouv\xE9 sur cette page."
        },
        id: {
          noPinDomain: "Maaf, Anda tidak diizinkan mengepin dari domain ini. Hubungi operator situs jika Anda memiliki pertanyaan.",
          noPinMeta: "Maaf, Anda tidak diizinkan mengepin dari halaman ini. Silakan hubungi operator situs jika Anda memiliki pertanyaan.",
          noPinnablesFound: "Maaf, tidak ada yang bisa dipin dari halaman ini."
        },
        it: {
          noPinDomain:
            "Ci dispiace, ma l'aggiunta di Pin non \xE8 consentita da questo dominio. Se hai domande, contatta il gestore del sito.",
          noPinMeta:
            "Ci dispiace, ma l'aggiunta di Pin non \xE8 consentita da questa pagina. Se hai domande, contatta il gestore del sito.",
          noPinnablesFound: "Spiacenti, impossibile trovare immagini o video che \xE8 possibile aggiungere ai Pin in questa pagina."
        },
        hi: {
          noPinDomain:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u0921\u094B\u092E\u0947\u0928 \u0938\u0947 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0905\u0917\u0930 \u0906\u092A\u0915\u093E \u0915\u094B\u0908 \u092A\u094D\u0930\u0936\u094D\u0928 \u0939\u0948\u0902, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u0938\u093E\u0907\u091F \u0911\u092A\u0930\u0947\u091F\u0930 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964",
          noPinMeta:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u092A\u0947\u091C \u0938\u0947 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0905\u0917\u0930 \u0906\u092A\u0915\u093E \u0915\u094B\u0908 \u092A\u094D\u0930\u0936\u094D\u0928 \u0939\u0948\u0902, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u0938\u093E\u0907\u091F \u0911\u092A\u0930\u0947\u091F\u0930 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964",
          noPinnablesFound:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u092A\u0947\u091C \u092A\u0930 \u0915\u094B\u0908 \u092D\u0940 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0935\u093E\u0932\u0940 \u091A\u0940\u095B \u0928\u0939\u0940\u0902 \u092E\u093F\u0932 \u0938\u0915\u0940\u0964"
        },
        hu: {
          noPinDomain:
            "Sajn\xE1ljuk, ebb\u0151l a tartom\xE1nyb\xF3l nem lehet pinelni. K\xE9rj\xFCk, k\xE9rd\xE9seiddel fordulj az oldal \xFCzemeltet\u0151j\xE9hez.",
          noPinMeta:
            "Sajn\xE1ljuk, err\u0151l az oldalr\xF3l nem lehet pinelni. K\xE9rj\xFCk, k\xE9rd\xE9seiddel fordulj az oldal \xFCzemeltet\u0151j\xE9hez.",
          noPinnablesFound: "Sajn\xE1ljuk, ezen az oldalon nem tal\xE1lhat\xF3 semmilyen pinelhet\u0151 dolog."
        },
        ja: {
          noPinDomain:
            "\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u3002HTML \u4EE5\u5916\u306E\u30DA\u30FC\u30B8\u3067\u30D4\u30F3\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3088\u3046\u3068\u8A66\u307F\u3066\u3044\u308B\u5834\u5408\u306F\u3001pinterest.com \u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          noPinMeta:
            "\u3053\u306E\u30DA\u30FC\u30B8\u304B\u3089\u306E\u30D4\u30F3\u306F\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u3054\u8CEA\u554F\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30B5\u30A4\u30C8\u904B\u55B6\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002",
          noPinnablesFound:
            "\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3001\u3053\u306E\u30DA\u30FC\u30B8\u3067\u30D4\u30F3\u3067\u304D\u308B\u30A2\u30A4\u30C6\u30E0\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
        },
        ko: {
          noPinDomain:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uB3C4\uBA54\uC778\uC5D0\uC11C\uB294 \uD540\uD558\uAE30\uAC00 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC774 \uC788\uC73C\uC2DC\uBA74 \uC0AC\uC774\uD2B8 \uC6B4\uC601\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
          noPinMeta:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 \uD540\uD558\uAE30\uAC00 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC774 \uC788\uC73C\uC2DC\uBA74 \uC0AC\uC774\uD2B8 \uC6B4\uC601\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
          noPinnablesFound:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uD540\uD560 \uC218 \uC788\uB294 \uAC83\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."
        },
        ms: {
          noPinDomain: "Maaf, mengepin tidak dibenarkan dari domain ini. Sila hubungi pengendali laman jika anda ada sebarang solan.",
          noPinMeta: "Maaf, mengepin tidak dibenarkan dari halaman ini. Sila hubungi pengendali laman jika anda ada sebarang soalan.",
          noPinnablesFound: "Maaf, tidak dapat mencari sebarang imej yang boleh dipin pada halaman ini."
        },
        nb: {
          noPinDomain: "Beklager, pinning er ikke tillatt fra dette domenet. Ta kontakt med webmasteren hvis du har sp\xF8rsm\xE5l.",
          noPinMeta: "Beklager, pinning er ikke tillatt fra denne siden. Ta kontakt med webmasteren hvis du har sp\xF8rsm\xE5l.",
          noPinnablesFound: "Beklager, kunne ikke finne noen ting som kunne pinnes p\xE5 denne siden."
        },
        nl: {
          noPinDomain:
            "Sorry, het is niet toegestaan om vanaf dit domein te pinnen. Neem contact op met de beheerder van deze website als je vragen hebt.",
          noPinMeta:
            "Sorry, het is niet toegestaan om vanaf dit domein te pinnen. Neem contact op met de beheerder van deze website als je vragen hebt.",
          noPinnablesFound: "Sorry, er is niets wat je kunt pinnen op deze pagina."
        },
        pl: {
          noPinDomain:
            "Niestety przypinanie z tej domeny jest niedozwolone. Skontaktuj si\u0119 z operatorem witryny, je\u015Bli masz pytania.",
          noPinMeta:
            "Niestety przypinanie z tej strony jest niedozwolone. Skontaktuj si\u0119 z operatorem witryny, je\u015Bli masz pytania.",
          noPinnablesFound: "Niestety na tej stronie nie ma \u017Cadnych rzeczy do przypinania."
        },
        pt: {
          noPinDomain:
            "Lamentamos, mas n\xE3o \xE9 permitido afixar pins a partir deste dom\xEDnio. Em caso de d\xFAvidas, contacta o operador do site.",
          noPinMeta:
            "Lamentamos, mas n\xE3o \xE9 permitido afixar pins a partir desta p\xE1gina. Em caso de d\xFAvidas, contacta o operador do site.",
          noPinnablesFound: "Lamentamos, mas n\xE3o foi poss\xEDvel encontrar nesta p\xE1gina nenhum conte\xFAdo que possa ser afixado."
        },
        "pt-br": {
          noPinDomain:
            "N\xE3o \xE9 poss\xEDvel pinar a partir deste dom\xEDnio. Entre em contato com o operador do site se tiver d\xFAvidas.",
          noPinMeta: "N\xE3o \xE9 poss\xEDvel pinar a partir desta p\xE1gina. Entre em contato com o operador do site se tiver d\xFAvidas.",
          noPinnablesFound: "N\xE3o foi poss\xEDvel encontrar nesta p\xE1gina conte\xFAdo que possa ser pinado."
        },
        ro: {
          noPinDomain:
            "Ne pare r\u0103u, nu se pot ad\u0103uga Pinuri de pe acest site. Te rug\u0103m s\u0103-l contactezi pe operatorul site-ului dac\u0103 ai \xEEntreb\u0103ri.",
          noPinMeta:
            "Ne pare r\u0103u, nu se pot ad\u0103uga Pinuri de pe aceast\u0103 pagin\u0103. Te rug\u0103m s\u0103-l contactezi pe operatorul site-ului dac\u0103 ai \xEEntreb\u0103ri.",
          noPinnablesFound:
            "Ne pare r\u0103u, nu am putut g\u0103si con\u021Binut pentru ad\u0103ugat ca Pinuri pe aceast\u0103 pagin\u0103."
        },
        ru: {
          noPinDomain:
            "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u0440\u0438\u043A\u0430\u043B\u044B\u0432\u0430\u043D\u0438\u0435 \u041F\u0438\u043D\u043E\u0432 \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043C\u0435\u043D\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0421\u043E \u0432\u0441\u0435\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430.",
          noPinMeta:
            "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u0440\u0438\u043A\u0430\u043B\u044B\u0432\u0430\u043D\u0438\u0435 \u041F\u0438\u043D\u043E\u0432 \u0441 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0421\u043E \u0432\u0441\u0435\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430.",
          noPinnablesFound:
            "\u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043D\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u043F\u0440\u0438\u043A\u043E\u043B\u043E\u0442\u044C."
        },
        sk: {
          noPinDomain:
            "Prep\xE1\u010Dte, z tejto dom\xE9ny si nem\xF4\u017Eete prip\xEDna\u0165 piny. Kontaktujte prev\xE1dzkovate\u013Ea str\xE1nky, ak m\xE1te nejak\xE9 ot\xE1zky.",
          noPinMeta:
            "Prep\xE1\u010Dte, z tejto str\xE1nky si nem\xF4\u017Eete prip\xEDna\u0165 piny. Kontaktujte prev\xE1dzkovate\u013Ea str\xE1nky, ak m\xE1te nejak\xE9 ot\xE1zky.",
          noPinnablesFound: "Prep\xE1\u010Dte, na tejto str\xE1nke sme nena\u0161li ni\u010D na pripnutie."
        },
        sv: {
          noPinDomain:
            "Tyv\xE4rr g\xE5r det inte att pinna fr\xE5n den h\xE4r dom\xE4nen. Kontakta webbplatsoperat\xF6ren om du har fr\xE5gor.",
          noPinMeta: "Det g\xE5r inte att pinna fr\xE5n den h\xE4r sidan. Kontakta webbplatsoperat\xF6ren om du har fr\xE5gor.",
          noPinnablesFound: "Det gick inte att hitta n\xE5got p\xE5 den h\xE4r sidan som g\xE5r att pinna."
        },
        th: {
          noPinDomain:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E42\u0E14\u0E40\u0E21\u0E19\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E2A\u0E07\u0E2A\u0E31\u0E22",
          noPinMeta:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E40\u0E1E\u0E08\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E2A\u0E07\u0E2A\u0E31\u0E22",
          noPinnablesFound:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2D\u0E30\u0E44\u0E23\u0E17\u0E35\u0E48\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19\u0E44\u0E14\u0E49\u0E43\u0E19\u0E40\u0E1E\u0E08\u0E19\u0E35\u0E49"
        },
        tl: {
          noPinDomain: "Sorry, hindi allowed ang pinning sa domain na 'to. Paki-contact ang site operator kung may tanong ka.",
          noPinMeta: "Sorry, hindi allowed ang pinning mula sa page na 'to. Paki-contact ang site operator kung may tanong ka.",
          noPinnablesFound: "Sorry, walang makitang puwedeng i-pin sa page na 'to."
        },
        tr: {
          noPinDomain:
            "\xDCzg\xFCn\xFCz, bu alan ad\u0131ndan pinlemeye izin verilmiyor. Sorular\u0131n\u0131z varsa, l\xFCtfen site operat\xF6r\xFCne ba\u015Fvurun.",
          noPinMeta:
            "\xDCzg\xFCn\xFCz, bu sayfadan pinlemeye izin verilmiyor. Sorular\u0131n\u0131z varsa, l\xFCtfen site operat\xF6r\xFCne ba\u015Fvurun.",
          noPinnablesFound: "\xDCzg\xFCn\xFCz, bu sayfada pinlenebilecek bir \u015Fey bulunamad\u0131."
        },
        uk: {
          noPinDomain:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043F\u0440\u0438\u043A\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0456\u043D\u0438 \u0437 \u0446\u044C\u043E\u0433\u043E \u0434\u043E\u043C\u0435\u043D\u0443 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430. \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443.",
          noPinMeta:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043F\u0440\u0438\u043A\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0456\u043D\u0438 \u0437 \u0446\u0456\u0454\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430. \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443.",
          noPinnablesFound:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C, \u044F\u043A\u0456 \u043C\u043E\u0436\u043D\u0430 \u0431\u0443\u043B\u043E \u0431 \u043F\u0440\u0438\u043A\u043E\u043B\u043E\u0442\u0438."
        },
        vi: {
          noPinDomain:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng cho ph\xE9p ghim t\u1EEB mi\u1EC1n n\xE0y. Vui l\xF2ng li\xEAn h\u1EC7 ng\u01B0\u1EDDi \u0111i\u1EC1u h\xE0nh trang web n\u1EBFu b\u1EA1n c\xF3 th\u1EAFc m\u1EAFc.",
          noPinMeta:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng cho ph\xE9p ghim t\u1EEB trang n\xE0y. Vui l\xF2ng li\xEAn h\u1EC7 ng\u01B0\u1EDDi \u0111i\u1EC1u h\xE0nh trang web n\u1EBFu b\u1EA1n c\xF3 th\u1EAFc m\u1EAFc.",
          noPinnablesFound:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng th\u1EC3 t\xECm th\u1EA5y th\u1EE9 g\xEC ghim \u0111\u01B0\u1EE3c tr\xEAn trang n\xE0y."
        },
        zh: {
          noPinDomain:
            "\u62B1\u6B49\uFF0C\u4E0D\u5141\u8BB8\u4ECE\u6B64\u57DF\u6536\u85CF Pin \u56FE\u3002\u5982\u6709\u7591\u8651\u8BF7\u8054\u7CFB\u7F51\u7AD9\u8FD0\u8425\u5546\u3002",
          noPinMeta:
            "\u62B1\u6B49\uFF0C\u4E0D\u5141\u8BB8\u4ECE\u6B64\u57DF\u6536\u85CF Pin \u56FE\u3002\u5982\u6709\u7591\u8651\u8BF7\u8054\u7CFB\u7F51\u7AD9\u8FD0\u8425\u5546\u3002",
          noPinnablesFound: "\u62B1\u6B49\uFF0C\u672A\u5728\u6B64\u9875\u9762\u4E2D\u627E\u5230\u53EF\u6536\u85CF\u7684 Pin \u56FE\u3002"
        },
        "zh-tw": {
          noPinDomain:
            "\u62B1\u6B49\uFF01\u4E0D\u5141\u8A31\u5F9E\u6B64\u7DB2\u57DF\u6536\u85CF\u91D8\u5716\u3002\u82E5\u6709\u7591\u554F\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u71DF\u904B\u5546\u3002",
          noPinMeta:
            "\u62B1\u6B49\uFF01\u4E0D\u5141\u8A31\u5F9E\u6B64\u7DB2\u9801\u6536\u85CF\u91D8\u5716\u3002\u82E5\u6709\u7591\u554F\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u71DF\u904B\u5546\u3002",
          noPinnablesFound:
            "\u62B1\u6B49\uFF01\u5728\u6B64\u7DB2\u9801\u4E0A\u627E\u4E0D\u5230\u4EFB\u4F55\u53EF\u6536\u85CF\u91D8\u5716\u7684\u5167\u5BB9\u3002"
        }
      },
      ce = "v6.0.0",
      L = {
        client: "web",
        config: {
          force: null,
          guid: null,
          noCancel: null,
          noHeader: null,
          pinbox: null,
          pinMethod: "bookmarklet",
          quality: 30,
          quiet: !1,
          render: null,
          share: null,
          via: null
        },
        currentUrl: "",
        data: { config: null, img: {}, link: {}, meta: {}, rich: {}, script: [], thumb: [] },
        errorMessages: F.en,
        extended: !1,
        imagesLoadingCount: 0,
        insta: {},
        lang: "en",
        ogDescription: null,
        ogSiteName: null,
        override: { allowImagelessPinCreation: !0, link: !1, og: !1, runDefaultScraping: !0 },
        sha: null,
        startTime: Date.now()
      },
      A = { id: "PIN_" + new Date().getTime(), version: ce },
      I = "data-pinterest-pinmarklet-rendered",
      j = 5e3,
      k = 237,
      B = Object.freeze({ INVALID: "invalid", LOADING: "loading", ERROR: "error", OK: "ok", FILTERED: "filtered" });
    function z({ browserWindow: u, onReady: e, scanStart: n }) {
      u.document.readyState === "complete" || Date.now() - n > j
        ? e()
        : u.requestAnimationFrame(() => z({ browserWindow: u, onReady: e, scanStart: n }));
    }
    function me({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n }) {
      (u.JavaScriptInterface || {}).onPinsLoaded &&
        ((e.config.render = "openAndroidAppShare"),
        (u.openAndroidAppShare = () => {
          u.JavaScriptInterface.onPinsLoaded(JSON.stringify(e.data));
        }),
        (e.extendedClose = () => {
          u.JavaScriptInterface.onPinsLoaded(JSON.stringify({ pinmarkletClosedReason: e.data.close }));
        }),
        n("Android app found"),
        (e.client = "android"),
        (e.extended = !0),
        typeof u.JavaScriptInterface.isLoadPinmarkletOnDocumentReady == "function" &&
          u.JavaScriptInterface.isLoadPinmarkletOnDocumentReady() &&
          (e.holdForReadyStateComplete = !0));
    }
    function pe(u) {
      return u.chrome ? u.chrome : u.browser;
    }
    function Ee({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n }) {
      const i = pe(u);
      if (i && i.runtime && i.runtime.getManifest && i.runtime.sendMessage) {
        const t = i.runtime.getManifest().version;
        parseInt(t.split(".")[0], 10) > 1 &&
          ((e.config.render = "openGrid"),
          (u.openGrid = () => {
            (e.data.config = e.config),
              (e.data.config.k = A.id),
              i.runtime.sendMessage({ to: "background", act: "populateGrid", data: e.data });
          }),
          n("Advanced browser extension found"),
          (e.extended = !0),
          (e.client = "extension"));
      }
    }
    function fe({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n }) {
      (((u.webkit || {}).messageHandlers || {}).pinmarkletCompletionHandler || {}).postMessage &&
        ((e.config.render = "openIOSAppShare"),
        (u.openIOSAppShare = () => {
          u.webkit.messageHandlers.pinmarkletCompletionHandler.postMessage(e.data);
        }),
        (e.config.quiet = !0),
        (e.extendedClose = () => {
          u.webkit.messageHandlers.pinmarkletCompletionHandler.postMessage({ pinmarkletClosedReason: e.data.close });
        }),
        n("IOS app found"),
        (e.client = "ios"),
        (e.extended = !0));
    }
    const Ce = [
        /^https?:\/\/(.*?\.|)craigslist\.org\//,
        /^https?:\/\/(.*?\.|)chase\.com\//,
        /^https?:\/\/(.*?\.|)facebook\.com\//,
        /^https?:\/\/mail\.aol\.com\//,
        /^https?:\/\/(.*?\.|)atmail\.com\//,
        /^https?:\/\/(.*?\.|)contactoffice\.com\//,
        /^https?:\/\/(.*?\.|)fastmail\.fm\//,
        /^https?:\/\/(.*?\.|)webmail\.gandi\.net\//,
        /^https?:\/\/outlook\.live\.com\//,
        /^https?:\/\/(.*?\.|)mail\.live\.com\//,
        /^https?:\/\/post\.pinterest\.com\//,
        /^https?:\/\/mail\.ukr\.net\//,
        /^https?:\/\/plus\.google\.com\//,
        /^https?:\/\/outlook\.office\.com\//,
        /^https?:\/\/accounts\.google\.com\//,
        /^https?:\/\/myaccount\.google\.com\//,
        /^https?:\/\/mail\.google\.com\//,
        /^https?:\/\/inbox\.google\.com\//,
        /^https?:\/\/docs\.google\.com\//,
        /^https?:\/\/gmx\.com\//,
        /^https?:\/\/(.*?\.|)hushmail\.com\//,
        /^https?:\/\/(.*?\.|)laposte\.fr\//,
        /^https?:\/\/mail\.lycos\.com\//,
        /^https?:\/\/(.*?\.|)mail\.com\//,
        /^https?:\/\/(.*?\.|)mail\.ru\//,
        /^https?:\/\/(.*?\.|)opolis\.eu\//,
        /^https?:\/\/(.*?\.|)outlook\.com\//,
        /^https?:\/\/(.*?\.|)nokiamail\.com\//,
        /^https?:\/\/apps\.rackspace\.com\//,
        /^https?:\/\/mail\.rediff\.com\//,
        /^https?:\/\/(.*?\.|)runbox\.com\//,
        /^https?:\/\/mail\.sify\.com\//,
        /^https?:\/\/webmail\.thexyz\.com\//,
        /^https?:\/\/login\.yahoo\.com\//,
        /^https?:\/\/mail\.yahoo\.com\//,
        /^https?:\/\/mail\.yandex\.com\//
      ],
      he = [
        /08fb2eb6424d/,
        /1529ad2b2cc8/,
        /1847807c0ea1/,
        /1d1d5ffa1d50/,
        /20c46b653b00/,
        /25f7c9982cea/,
        /293aa4f9b3d0/,
        /32aa39d04eb4/,
        /415215dcadbf/,
        /540b2374abf1/,
        /6f145d4255cf/,
        /71c1f4783e6d/,
        /79f57d83d54a/,
        /820a6e7baa0f/,
        /85ae87da6618/,
        /871de03c9980/,
        /8c2d5961f7af/,
        /8de5d416e5d2/,
        /95fa195f8b6a/,
        /9e2089d8b8f2/,
        /a32353817e45/,
        /cefdc93047b7/,
        /dbafdf055617/,
        /eefa602a72ed/,
        /efa3a2deb839/
      ],
      N = "0123456789abcdef",
      be = (u) => (u < 20 ? 1518500249 : u < 40 ? 1859775393 : u < 60 ? -1894007588 : -899497514),
      De = (u) => {
        const e = Array(u.length >> 2);
        for (let n = 0; n < e.length; n++) e[n] = 0;
        for (let n = 0; n < u.length * 8; n += 8) e[n >> 5] |= (u.charCodeAt(n / 8) & 255) << (24 - (n % 32));
        return e;
      },
      Be = (u) => {
        let e = "";
        for (let n = 0; n < u.length * 32; n += 8) e += String.fromCharCode((u[n >> 5] >>> (24 - (n % 32))) & 255);
        return e;
      },
      D = (u, e) => {
        const n = (u & 65535) + (e & 65535);
        return (((u >> 16) + (e >> 16) + (n >> 16)) << 16) | (n & 65535);
      },
      M = (u, e) => (u << e) | (u >>> (32 - e)),
      ke = (u, e, n, i) => (u < 20 ? (e & n) | (~e & i) : u < 40 ? e ^ n ^ i : u < 60 ? (e & n) | (e & i) | (n & i) : e ^ n ^ i),
      we = (u, e) => {
        (u[e >> 5] |= 128 << (24 - (e % 32))), (u[(((e + 64) >> 9) << 4) + 15] = e);
        const n = Array(80);
        let i = 1732584193,
          t = -271733879,
          r = -1732584194,
          a = 271733878,
          s = -1009589776;
        for (let l = 0; l < u.length; l += 16) {
          const m = i,
            f = t,
            p = r,
            c = a,
            E = s;
          for (let g = 0; g < 80; g++) {
            g < 16 ? (n[g] = u[l + g]) : (n[g] = M(n[g - 3] ^ n[g - 8] ^ n[g - 14] ^ n[g - 16], 1));
            const o = D(D(M(i, 5), ke(g, t, r, a)), D(D(s, n[g]), be(g)));
            (s = a), (a = r), (r = M(t, 30)), (t = i), (i = o);
          }
          (i = D(i, m)), (t = D(t, f)), (r = D(r, p)), (a = D(a, c)), (s = D(s, E));
        }
        return [i, t, r, a, s];
      },
      xe = (u) => Be(we(De(u), u.length * 8)),
      ye = (u) => {
        let e = "";
        for (let n = 0; n < u.length; n++) {
          const i = u.charCodeAt(n);
          e = e + N.charAt((i >>> 4) & 15) + N.charAt(i & 15);
        }
        return e;
      };
    function v({ currentConfig: u, pinmarkletDebugger: e, str: n }) {
      return u.sha || (e("setting up hash repo"), (u.sha = {})), u.sha[n] || (u.sha[n] = ye(xe(n))), u.sha[n];
    }
    function W({ currentConfig: u, currentUrl: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      if (Ce.find((r) => e.match(r))) return i({ reason: "disallowed_domain_list_match" }), !1;
      const t = e.split("/");
      if (t[2]) {
        const r = t[2].split(".");
        if (r.length > 1) {
          const a = [...r].reverse();
          return !a
            .map((s, l) => (l === 0 ? null : [...a.slice(0, l), s].reverse().join(".")))
            .filter(Boolean)
            .find((s) => {
              const l = v({ currentConfig: u, str: s, pinmarkletDebugger: n });
              return he.find((m) => l.match(m));
            });
        }
      }
      return !0;
    }
    function P({ browserWindow: u, currentConfig: e }) {
      e.data.close &&
        (typeof e.extendedClose == "function"
          ? e.extendedClose()
          : e.config.quiet ||
            u.setTimeout(() => {
              u.alert(e.data.close);
            }, 10));
    }
    function Fe({ currentConfig: u, pinmarkletLogger: e }) {
      let n = "";
      function i(t) {
        if (!n)
          for (const r in t) {
            const a = t[r];
            typeof a == "object" ? i(a) : typeof a == "string" && r.match(/^gtin/i) && (n = a.replace(/^0+/, ""));
          }
      }
      u.data.script.forEach((t) => {
        i(t);
      }),
        n && ((u.data.gtin = n), e({ reason: "gtin_found", extras: { gtin: n } }));
    }
    function O({ element: u, attribute: e }) {
      return !u || !e ? null : u.getAttribute(e);
    }
    function x(u) {
      if (!u) return "";
      const e = (Array.isArray(u) ? u[0] : u).trim();
      if (e.match(/\s/)) return e;
      const n = e.split("#")[0].split("?")[0];
      return n.match(/^http?s:\/\//) || n.match(/\.(gif|jpeg|jpeg|png|webp)/) ? "" : n;
    }
    function y({ currentConfig: u, browserWindow: e, imageElement: n, imageless: i }) {
      return (
        [
          () => {
            var t;
            return x((t = e.getSelection()) == null ? void 0 : t.toString());
          },
          () => {
            if (n && n.src) return x(O({ element: n, attribute: "data-pin-description" })) || (n.title || e.document.title || "").trim();
          },
          () => x(u.data.meta.description || u.data.meta.title),
          () => x(u.ogDescription),
          () => x(e.document.title),
          () => {
            var t;
            if (i) return (t = u.currentUrl.split("/").pop()) == null ? void 0 : t.split("#")[0].split("?")[0].split(".")[0];
          }
        ].find((t) => t()) || (() => "")
      )();
    }
    function Ae({ h: u, s: e, v: n }) {
      let i, t, r;
      u = u / 60;
      const a = Math.floor(u),
        s = u - a,
        l = n * (1 - e),
        m = n * (1 - e * s),
        f = n * (1 - e * (1 - s));
      switch (a) {
        case 0:
          (i = n), (t = f), (r = l);
          break;
        case 1:
          (i = m), (t = n), (r = l);
          break;
        case 2:
          (i = l), (t = n), (r = f);
          break;
        case 3:
          (i = l), (t = m), (r = n);
          break;
        case 4:
          (i = f), (t = l), (r = n);
          break;
        case 5:
          (i = n), (t = l), (r = m);
          break;
        default:
      }
      function p(c) {
        return ("00" + Math.round(c * 255).toString(16)).substr(-2, 2);
      }
      return "#" + p(i) + p(t) + p(r);
    }
    function ve({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n }) {
      const i = e.currentUrl.split("/")[2];
      return {
        color: Ae({ h: parseInt(v({ currentConfig: e, pinmarkletDebugger: n, str: i }).substr(0, 3), 16) % 360, s: 0.25, v: 0.75 }),
        description: y({ currentConfig: e, browserWindow: u, imageless: !0 }),
        height: k,
        score: k * k,
        siteName: e.ogSiteName || i,
        status: B.OK,
        url: e.currentUrl,
        width: k
      };
    }
    const Pe = "https://assets.pinterest.com/ext/grid.html?",
      Se = Object.entries({
        display: "block",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "0",
        clip: "0",
        "z-index": "2147483647"
      }).reduce((u, [e, n]) => u + `${e}: ${n};`, "");
    function Le(u) {
      const e = u.createElement("IFRAME");
      return (e.id = `${A.id}_grid`), (e.src = Pe + new Date().getTime()), (e.frameBorder = "0"), (e.style = Se), e;
    }
    function Ie({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      const t = new Date().getTime(),
        { document: r } = u,
        { body: a } = r,
        s = a.style.overflow;
      (a.style.overflow = "hidden"),
        n("Popping the unauthed grid"),
        (e.data.config = e.config),
        (e.data.browserExtensionInstalled = O({ attribute: "data-pinterest-extension-installed", element: a }));
      const l = Le(r),
        m = () => {
          (a.style.overflow = s), a.removeAttribute(I), l.parentNode && l.parentNode === a && a.removeChild(l);
        },
        f = window.setTimeout(() => {
          i({ reason: "iframe_timeout" }),
            m(),
            (e.data.close = e.errorMessages.noPinnablesFound),
            P({ currentConfig: e, browserWindow: u });
        }, j);
      (l.onload = () => {
        var p;
        const c = new Date().getTime() - t;
        n(`Grid render time: ${c}`),
          i({ reason: "grid_rendered", time: c }),
          (p = l.contentWindow) == null || p.postMessage(JSON.stringify(e.data), l.src),
          u.addEventListener("message", (E) => {
            window.clearTimeout(f), E.data === "x" && m();
          }),
          l.focus();
      }),
        a.setAttribute(I, "true"),
        a.appendChild(l);
    }
    var je = ((u) => (
      (u[(u.CLOSE = 0)] = "CLOSE"),
      (u[(u.IOS_SHARE = 1)] = "IOS_SHARE"),
      (u[(u.BROWSER_EXTENSION = 2)] = "BROWSER_EXTENSION"),
      (u[(u.GRID = 3)] = "GRID"),
      u
    ))(je || {});
    function Me({ currentConfig: u, browserWindow: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      return (
        n(u.data),
        i({ reason: "scan_complete", count: u.data.thumb.length, time: new Date().getTime() - u.startTime }),
        u.data.close
          ? (P({ browserWindow: e, currentConfig: u }), 0)
          : u.config.share
          ? (n("Sending results to IOS share extension"), e.document.body.setAttribute(u.config.share, JSON.stringify(u.data)), 1)
          : u.config.render && typeof e[u.config.render] == "function"
          ? (n(`Sending results to ${u.config.render}`), e[u.config.render](u.data), 2)
          : (n("Sending results to our default iframe grid overlay"),
            Ie({ browserWindow: e, currentConfig: u, pinmarkletDebugger: n, pinmarkletLogger: i }),
            3)
      );
    }
    var Oe = Object.defineProperty,
      R = Object.getOwnPropertySymbols,
      Te = Object.prototype.hasOwnProperty,
      ze = Object.prototype.propertyIsEnumerable,
      U = (u, e, n) => (e in u ? Oe(u, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (u[e] = n)),
      _ = (u, e) => {
        for (var n in e || (e = {})) Te.call(e, n) && U(u, n, e[n]);
        if (R) for (var n of R(e)) ze.call(e, n) && U(u, n, e[n]);
        return u;
      };
    function Ne(u) {
      Object.keys(u.data.img).forEach((e) => {
        const n = u.data.img[e],
          i = n.modifiers,
          t = _(_({}, n), i ? { mod: i } : {});
        delete t.modifiers, (u.data.img[e] = t);
      }),
        u.data.thumb.forEach((e) => {
          (e.mod = e.modifiers), delete e.modifiers;
        }),
        u.data.config || delete u.data.config;
    }
    const We = 30;
    function Re({ browserWindow: u, currentConfig: e, onResult: n, pinmarkletDebugger: i, pinmarkletLogger: t }) {
      const r = Object.entries(e.data.img).map(([g, o]) => {
        var d, h, w, ne, te, ie, re, ae, oe, se, le, ge, de;
        if (o.status !== B.OK) return null;
        if (
          ((o.url = e.data.url),
          (d = o.modifiers) != null && d.description && (o.description = o.modifiers.description),
          (h = o.modifiers) != null && h.ogDescription)
        ) {
          const qu = Array.isArray(o.modifiers.ogDescription) ? o.modifiers.ogDescription[0] : o.modifiers.ogDescription;
          o.description = qu;
        }
        (w = o.modifiers) != null && w.pinDescription && (o.description = o.modifiers.pinDescription),
          o.description && o.description.length > 500 && (o.description = o.description.substring(0, 500)),
          (ne = o.modifiers) != null && ne.url && (o.url = o.modifiers.url),
          (te = o.modifiers) != null && te.pinUrl && (o.url = o.modifiers.pinUrl),
          (o.media = o.src);
        const C = { multiplier: 1, height: o.height || 1, width: o.width || 1 };
        return (
          C.width > C.height ? (C.width = C.height) : C.height > C.width * 3 && (C.height = C.width * 3),
          (ie = o.modifiers) != null && ie.multimedia && (C.multiplier = C.multiplier * 3),
          (((re = o.modifiers) != null && re.pinUrl) || ((ae = o.modifiers) != null && ae.pinMedia)) && (C.multiplier = C.multiplier * 4),
          (oe = o.modifiers) != null && oe.pinMeOnly && (C.multiplier = C.multiplier * 1e6),
          (se = o.modifiers) != null &&
            se.pinId &&
            (((le = o.modifiers) != null && le.suppressPinIdBonus) || (C.multiplier = C.multiplier * 10),
            (o.dataPinId = o.modifiers.pinId),
            (o.id = o.modifiers.pinId),
            (e.override.allowImagelessPinCreation = !1)),
          (!o.width || o.width < k) && (C.multiplier = C.multiplier / 2),
          (ge = o.modifiers) != null && ge.multimedia && ((e.override.allowImagelessPinCreation = !1), (C.multiplier = C.multiplier * 2)),
          (o.score = C.height * C.width * C.multiplier - (((de = o.modifiers) == null ? void 0 : de.sourceOrder) || 0)),
          o
        );
      });
      if (e.override.allowImagelessPinCreation) {
        const g = ve({ browserWindow: u, currentConfig: e, pinmarkletDebugger: i });
        (e.data.imageless = g), r.push(g), r.length === 1 && t({ reason: "imageless_only" });
      }
      const a = r.filter(Boolean).sort((g, o) => {
          const d = g.score || 0,
            h = o.score || 0;
          return d < h ? 1 : d > h ? -1 : 0;
        }),
        s = a.filter((g) => {
          var o;
          return g.score && g.score > (((o = a[0]) == null ? void 0 : o.score) || 0) / We;
        });
      e.data.thumb = s;
      const l = ({ key: g, val: o }) => {
          e.data.rich[g] ? i(`Ignoring duplicate rich data: ${g} - ${o}`) : (i(`Adding rich data: ${g} - ${o}`), (e.data.rich[g] = o));
        },
        { pin: m, og: f, description: p } = e.data.meta;
      [m, f].filter(Boolean).forEach((g) => {
        g.title && l({ key: "title", val: g.title }),
          g.description && l({ key: "description", val: g.description }),
          g.url && l({ key: "url", val: g.url });
      }),
        p && typeof p == "string" && l({ key: "description", val: p });
      const {
        document: { title: c }
      } = u;
      c && typeof c == "string" && l({ key: "title", val: c });
      const { canonical: E } = e.data.link;
      if ((E && l({ key: "url", val: E }), Object.keys(e.insta).length > 0)) {
        e.data.script.forEach((d) => {
          d.author && d.author.alternateName && (e.insta.username = d.author.alternateName);
        }),
          (e.data.rich.instagram = e.insta);
        const g = { reason: "insta_found", extras: { media_id: e.insta.id, owner_id: e.insta.owner, username: e.insta.username } },
          o = e.insta.hashtags;
        o && (g.extras.hashtags = o), t(g);
      }
      if ((Fe({ currentConfig: e, pinmarkletLogger: t }), Ne(e), n)) return n(e.data);
      Me({ browserWindow: u, currentConfig: e, pinmarkletDebugger: i, pinmarkletLogger: t });
    }
    function Ue({ browserWindow: u, currentConfig: e, onResult: n, pinmarkletDebugger: i, pinmarkletLogger: t }) {
      const r = () => {
        const a = () => Re({ browserWindow: u, currentConfig: e, onResult: n, pinmarkletDebugger: i, pinmarkletLogger: t });
        e.imagesLoadingCount
          ? (i("images left to load: " + e.imagesLoadingCount),
            Date.now() < e.startTime + j ? u.setTimeout(r, 10) : (i("Timed out, rendering what we have."), a()))
          : a();
      };
      return r;
    }
    function S(u) {
      return `https://www.youtube.com/watch?v=${u}`;
    }
    function T(u) {
      return `https://img.youtube.com/vi/${u}/hqdefault.jpg`;
    }
    const _e = new RegExp(
        "^https?:\\/\\/(([a-z]{1,3}|latest)\\.|)pinterest\\.(at|(c(a|h|l|o(\\.(kr|uk)|m(|\\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\\/pin\\/(?<id>.*)\\/.*"
      ),
      $ = /^https?:\/\//,
      $e = /^data:image\/(png|jpg|jpeg|gif);base64/;
    function qe({ currentConfig: u, hashedUrl: e, src: n }) {
      return () => {
        u.imagesLoadingCount--,
          Object.keys(u.data.img).forEach((i) => {
            var t, r;
            ((t = u.data.img[i].modifiers) == null ? void 0 : t.pinMedia) === n &&
              ((r = u.data.img[i].modifiers) == null || delete r.pinMedia);
          }),
          (u.data.img[e].status = B.ERROR);
      };
    }
    function Ke({ client: u, img: e }) {
      if (e.width < 90 || e.height < 90) return { acceptable: !1, reason: "Image dimensions are both too small." };
      if (e.width < 120 && e.height < 120) return { acceptable: !1, reason: "One image dimension is too small." };
      if (e.width > e.height * 3) return { acceptable: !1, reason: "Image is too wide." };
      if (u === "extension") {
        const n = e.src.match($),
          i = e.src.match($e);
        if (!n && !i) return { acceptable: !1, reason: "Image source is not http, https, or base64." };
      } else if (!e.src.match($)) return { acceptable: !1, reason: "Image source does not begin with http/https." };
      return { acceptable: !0 };
    }
    function Ge({
      currentConfig: u,
      hashedUrl: e,
      img: n,
      modifiers: i,
      pinmarkletDebugger: t,
      preventImagelessPinCreation: r,
      src: a,
      updatedSrc: s
    }) {
      return () => {
        const { client: l } = u,
          { acceptable: m, reason: f } = Ke({ client: l, img: n });
        if (!m)
          return (
            (u.data.img[e] = { status: B.FILTERED, reason: f, src: a.substring(0, 64) }),
            a.length > 64 && (u.data.img[e].src = u.data.img[e].src + "..."),
            u.imagesLoadingCount--,
            { status: B.FILTERED }
          );
        r && (u.override.allowImagelessPinCreation = !1);
        const p = { status: "loaded", height: n.naturalHeight || 0, width: n.naturalWidth || 0, src: n.src };
        if (
          (p.height > k && p.width > k && (u.override.allowImagelessPinCreation = !1),
          Object.keys(p).forEach((c) => {
            const E = p;
            E[c] && (u.data.img[e][c] = E[c]);
          }),
          a === u.currentUrl && ((u.data.img[e].description = ""), (u.override.allowImagelessPinCreation = !1)),
          s)
        ) {
          t(`Image source changed from ${s} to ${a}`);
          const c = v({ currentConfig: u, pinmarkletDebugger: t, str: s });
          (u.data.img[c] = u.data.img[e]),
            i && (u.data.img[c].modifiers = i),
            (u.data.img[c].src = a),
            (u.data.img[c].height = p.height),
            (u.data.img[c].width = p.width),
            (u.data.img[e] = u.data.img[c]),
            delete u.data.img[c];
        }
        return (u.data.img[e].status = B.OK), u.imagesLoadingCount--, { status: "success" };
      };
    }
    function b({
      currentConfig: u,
      modifiers: e,
      pinmarkletDebugger: n,
      pinmarkletLogger: i,
      preventImagelessPinCreation: t,
      src: r,
      updatedSrc: a
    }) {
      var s, l, m;
      const f =
        (m = (l = (s = e == null ? void 0 : e.url) == null ? void 0 : s.match(_e)) == null ? void 0 : l.groups) == null ? void 0 : m.id;
      if ((f && parseInt(f, 10) && ((e.pinId = f), (e.suppressPinIdBonus = !0)), !r)) return { imageLoaded: !1, reason: "noSrc" };
      if (!W({ currentConfig: u, currentUrl: r, pinmarkletDebugger: n, pinmarkletLogger: i }))
        return { imageLoaded: !1, reason: "domainNotAllowed" };
      const p = v({ currentConfig: u, pinmarkletDebugger: n, str: r });
      if (u.data.img[p]) return { imageLoaded: !1, reason: "imageAlreadyLoaded" };
      if (r.split("#")[0].split("?")[0].split(".").pop() === "svg")
        return (
          (u.data.img[p] = { src: r, status: B.INVALID, reason: "SVG images are not supported on Pinterest" }),
          { imageLoaded: !0, reason: "unsupportedSvgFormat" }
        );
      const c = new Image();
      return (
        u.imagesLoadingCount++,
        (u.data.img[p] = { modifiers: e || {}, status: B.LOADING }),
        (c.onerror = qe({ currentConfig: u, hashedUrl: p, src: r })),
        (c.onload = Ge({
          currentConfig: u,
          hashedUrl: p,
          img: c,
          modifiers: e,
          pinmarkletDebugger: n,
          preventImagelessPinCreation: t,
          src: r,
          updatedSrc: a
        })),
        (c.src = r),
        { imageLoaded: !0 }
      );
    }
    const q = { youtube: /^(https?:|)\/\/www\.youtube\.com\/embed\//, instagram: /^https?:\/\/www\.instagram\.com\/p\// };
    function K(u) {
      return u.split("/")[4];
    }
    function Je({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      return [...u.document.getElementsByTagName("IFRAME")].map((t) => {
        if (t.getAttribute("nopin") || t.getAttribute("data-pin-nopin")) return { status: "nopin" };
        const r = t.getAttribute("src");
        if (!r) return { status: "Missing src" };
        if (!r.match(/^(https?:|)\/\//)) return { status: "Invalid src" };
        const a = y({ currentConfig: e, browserWindow: u }),
          s = r.split("#")[0].split("?")[0];
        if (s.match(q.youtube)) {
          const l = K(s);
          return l
            ? (n(`Found a YouTube player: ${t.src}`),
              b({
                currentConfig: e,
                modifiers: { multimedia: !0, url: S(l), description: a },
                pinmarkletDebugger: n,
                pinmarkletLogger: i,
                src: T(l)
              }),
              { status: "YouTube embed -- loading image...", id: l })
            : { status: "YouTube embed -- missing embed id" };
        }
        if (s.match(q.instagram)) {
          const l = K(s);
          return l
            ? (n(`Found an Instagram embed: ${t.src}`),
              b({
                currentConfig: e,
                modifiers: { url: `https://www.instagram.com/p/${l}/`, description: a },
                pinmarkletDebugger: n,
                pinmarkletLogger: i,
                src: `https://instagram.com/p/${l}/media/?size=l`
              }),
              { status: "Instagram embed -- loading image...", id: l })
            : { status: "Instagram embed -- missing embed id" };
        }
        return { status: "No match" };
      });
    }
    function He({ currentConfig: u, pinmarkletDebugger: e, pinmarkletLogger: n }) {
      var i;
      if ((e("og found"), !((i = u.data.meta.og) != null && i.image))) return { status: "noDataMetaOgImage" };
      const t = {};
      if (typeof u.data.meta.og.image == "string") e("og:image found"), (t.ogMedia = u.data.meta.og.image);
      else {
        let a;
        Array.isArray(u.data.meta.og.image)
          ? (e("og:image array found; using the first element"), (a = u.data.meta.og.image[0]))
          : (a = u.data.meta.og.image),
          typeof a == "string"
            ? (e("og:image found in object"), (t.ogMedia = a))
            : a.secure_url && typeof a.secure_url == "string"
            ? (e("og:secure_url found"), (t.ogMedia = a.secure_url))
            : a["~"] && typeof a["~"] == "string" && (e("og:~ found"), (t.ogMedia = a["~"]));
      }
      u.data.meta.og.url &&
        (typeof u.data.meta.og.url == "string"
          ? (t.ogUrl = u.data.meta.og.url)
          : (e("More than one og:url found"), (t.ogUrl = u.data.meta.og.url[0])),
        e("og:url found")),
        u.data.meta.og.site_name &&
          (typeof u.data.meta.og.site_name == "string"
            ? (u.ogSiteName = u.data.meta.og.site_name)
            : (e("More than one og:site_name found"), (u.ogSiteName = u.data.meta.og.site_name[0])));
      const r = u.data.meta.og.description || u.data.meta.og.title;
      return (
        r &&
          (e("og:title or og:description found"),
          (t.ogDescription = r),
          typeof t.ogDescription == "string"
            ? (u.ogDescription = t.ogDescription)
            : (e("More than one og:description found"), (u.ogDescription = t.ogDescription[0]))),
        e("loading og:image"),
        b({ currentConfig: u, src: t.ogMedia, modifiers: t, pinmarkletDebugger: e, pinmarkletLogger: n }),
        { status: "success", modifiers: t }
      );
    }
    const Ye = /^https?:\/\/twitter\.com\//,
      Ve = /^https?:\/\/pbs\.twimg\.com\/media\//,
      Xe = /^(https?:|)\/\/i.ytimg.com\/vi\//;
    function G({ browserWindow: u, currentConfig: e, imgTag: n, idx: i, pinmarkletDebugger: t, pinmarkletLogger: r }) {
      var a;
      if (!n.currentSrc) return { status: "noCurrentSrc" };
      if (n.getAttribute("nopin") || n.getAttribute("data-pin-nopin")) return { status: "nopin" };
      const s = { description: y({ browserWindow: u, currentConfig: e, imageElement: n }), sourceOrder: i },
        l = n.parentElement;
      if ((l == null ? void 0 : l.tagName) === "A" && l.href) {
        const E = l;
        e.currentUrl.split("/")[2] === E.href.split("/")[2] &&
          (E.href.match(/(^javascript|\.gif|\.jpg|\.jpeg|\.png|\.webp)/) || (s.url = E.href));
      }
      n.getAttribute("data-pin-me-only") && (s.pinMeOnly = !0);
      const m = n.getAttribute("data-pin-id");
      m && (s.pinId = m);
      const f = n.getAttribute("data-pin-description");
      f && (s.pinDescription = f);
      const p = n.getAttribute("data-pin-url");
      p && (s.pinUrl = p);
      const c = n.getAttribute("data-pin-media");
      if (
        (c
          ? ((s.pinMedia = c),
            c === n.currentSrc
              ? b({ currentConfig: e, modifiers: s, pinmarkletDebugger: t, pinmarkletLogger: r, src: n.currentSrc })
              : b({ currentConfig: e, modifiers: s, pinmarkletDebugger: t, pinmarkletLogger: r, src: c, updatedSrc: n.currentSrc }))
          : b({ currentConfig: e, modifiers: s, pinmarkletDebugger: t, pinmarkletLogger: r, src: n.currentSrc }),
        e.currentUrl.match(Ye) && n.currentSrc.match(Ve))
      ) {
        let E = n.parentElement;
        for (; E != null && E.tagName; ) {
          const g = E.getAttribute("data-permalink-path");
          if (g) {
            s.url = "https://twitter.com" + g;
            const o = (a = E == null ? void 0 : E.parentElement) == null ? void 0 : a.getElementsByTagName("P")[0].textContent;
            o && (s.description = o), (E = null);
          }
          E = E == null ? void 0 : E.parentElement;
        }
      }
      if (n.currentSrc.match(Xe)) {
        const E = n.currentSrc.split("/vi/");
        if (E.length) {
          const g = E[1].split("/")[0];
          g &&
            b({
              currentConfig: e,
              modifiers: { multimedia: !0, url: S(g) },
              pinmarkletDebugger: t,
              pinmarkletLogger: r,
              src: `https://i.ytimg.com/vi/${g}/hqdefault.jpg`,
              updatedSrc: n.currentSrc
            });
        }
      }
      return { status: "success", modifiers: s };
    }
    function Ze({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      const t = u.document.querySelectorAll("[data-pin-me-only]");
      if (t.length)
        return (
          G({ browserWindow: u, currentConfig: e, imgTag: t[0], idx: 0, pinmarkletDebugger: n, pinmarkletLogger: i }),
          { count: 1, status: "pinMeOnly" }
        );
      e.override.og ? n("og overridden") : He({ currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i });
      const r = u.document.getElementsByTagName("IMG");
      return (
        [...r]
          .filter((a) => !!a.currentSrc)
          .forEach((a, s) => {
            G({ browserWindow: u, currentConfig: e, imgTag: a, idx: s, pinmarkletDebugger: n, pinmarkletLogger: i });
          }),
        { count: r.length, status: "imagesProcessed" }
      );
    }
    function Qe({ currentConfig: u, pageDocument: e }) {
      const n = [...e.getElementsByTagName("LINK")].find((i) => {
        const { rel: t, href: r } = i;
        return !!(t && t.toLowerCase() === "canonical" && r);
      });
      n && ((u.data.link.canonical = n.href), (u.data.url = n.href));
    }
    const eu = /^https?:\/\/www\.amazon\.com\//,
      uu = "data-fling-asin";
    function nu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      const { currentUrl: t } = e;
      return t.match(eu)
        ? !![...u.document.getElementsByTagName("IMG")].find((r) => {
            const a = r.getAttribute(uu);
            return a && t.match(a)
              ? (b({
                  currentConfig: e,
                  src: r.currentSrc,
                  modifiers: {
                    url: `https://www.amazon.com/dp/${a}/`,
                    description: y({ browserWindow: u, currentConfig: e, imageElement: r })
                  },
                  preventImagelessPinCreation: !0,
                  pinmarkletDebugger: n,
                  pinmarkletLogger: i
                }),
                !0)
              : !1;
          })
        : !1;
    }
    const tu = /^https?:\/\/www\.amazon\.com((\/|.*)\/dp\/)/;
    function iu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      var t;
      if (!e.currentUrl.match(tu)) return !1;
      const r = (t = u.document.getElementById("imgTagWrapperId")) == null ? void 0 : t.getElementsByTagName("IMG")[0];
      return (
        r &&
          b({
            currentConfig: e,
            src: r.src,
            modifiers: { url: e.data.link.canonical, description: y({ browserWindow: u, currentConfig: e, imageElement: r }) },
            preventImagelessPinCreation: !0,
            pinmarkletDebugger: n,
            pinmarkletLogger: i
          }),
        !!r
      );
    }
    var ru = Object.defineProperty,
      J = Object.getOwnPropertySymbols,
      au = Object.prototype.hasOwnProperty,
      ou = Object.prototype.propertyIsEnumerable,
      H = (u, e, n) => (e in u ? ru(u, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (u[e] = n)),
      su = (u, e) => {
        for (var n in e || (e = {})) au.call(e, n) && H(u, n, e[n]);
        if (J) for (var n of J(e)) ou.call(e, n) && H(u, n, e[n]);
        return u;
      };
    const lu = /^https?:\/\/www\.google\.com\/search(.*tbm=isch.*)/;
    function Y({ currentConfig: u, imgTag: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      var t;
      const r = ((e.parentNode || {}).parentNode || {}).nextSibling;
      let a = null;
      r && r.title === e.alt && (t = r.href) != null && t.match(/^http?s:\/\//) && (a = r.href),
        b({
          src: e.dataset.src || e.src,
          modifiers: su({ description: e.alt }, a ? { url: a } : {}),
          preventImagelessPinCreation: !0,
          currentConfig: u,
          pinmarkletDebugger: n,
          pinmarkletLogger: i
        }),
        (u.override.runDefaultScraping = !1);
    }
    function gu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      if (!e.currentUrl.match(lu)) return !1;
      const t = u.document.querySelectorAll("[data-pin-me-only]");
      return t.length === 1
        ? (Y({ currentConfig: e, imgTag: t[0], pinmarkletDebugger: n, pinmarkletLogger: i }), !0)
        : !![...u.document.getElementsByTagName("IMG")]
            .map((r) => (r.alt ? (Y({ currentConfig: e, imgTag: r, pinmarkletDebugger: n, pinmarkletLogger: i }), !0) : !1))
            .find(Boolean);
    }
    const du = /^https?:\/\/www\.instagram\.com\//,
      cu = /^https?:\/\/www\.instagram\.com\/p\//;
    function mu(u) {
      const e = u.title || "",
        n = (Array.isArray(e) ? e[0] : e).split("Instagram: \u201C")[1] || "";
      return n.substring(0, n.length - 1).trim();
    }
    function V({ currentConfig: u, instaTitle: e, pageElement: n, pinmarkletDebugger: i, pinmarkletLogger: t }) {
      const r = [...n.getElementsByTagName("IMG")];
      return (
        r.forEach((a) => {
          b({
            currentConfig: u,
            preventImagelessPinCreation: !0,
            src: a.currentSrc,
            modifiers: { description: e, url: u.currentUrl.split("?")[0] },
            pinmarkletDebugger: i,
            pinmarkletLogger: t
          });
        }),
        !!r.length
      );
    }
    function pu({ currentConfig: u, instaTitle: e, pageDocument: n, pinmarkletDebugger: i, pinmarkletLogger: t }) {
      i("On an Instagram photo URL");
      const r = n.getElementsByTagName("ARTICLE");
      if (r.length === 2) {
        if (V({ currentConfig: u, instaTitle: e, pageElement: r[1], pinmarkletDebugger: i, pinmarkletLogger: t }))
          return i("Found image in carousel."), !0;
        i("Found carousel but no image.");
      }
      const a = n.querySelectorAll("[role=button]")[1];
      if (a) {
        if (V({ currentConfig: u, instaTitle: e, pageElement: a, pinmarkletDebugger: i, pinmarkletLogger: t }))
          return i("Found image in button."), !0;
        i("Found button but no image.");
      }
      return !1;
    }
    function Eu({ currentConfig: u, instaTitle: e, pageDocument: n, pinmarkletDebugger: i, pinmarkletLogger: t }) {
      var r, a;
      i("On a non-photo Instagram page");
      const s = [...n.getElementsByTagName("IMG")].find((m) => m.currentSrc),
        l = (a = (r = s == null ? void 0 : s.parentNode) == null ? void 0 : r.parentNode) == null ? void 0 : a.parentNode;
      if (l) {
        const m = l;
        if (m.tagName === "A" && m.href && m.href.match(/^https?:\/\//))
          return (
            b({
              currentConfig: u,
              src: s.currentSrc,
              modifiers: { url: m.href.split("?")[0], description: e },
              preventImagelessPinCreation: !0,
              pinmarkletDebugger: i,
              pinmarkletLogger: t
            }),
            !0
          );
      }
      return !1;
    }
    function fu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      if (!e.currentUrl.match(du)) return !1;
      n("On an Instagram property");
      const t = e.data.meta.og ? mu(e.data.meta.og) : u.document.title;
      return (e.currentUrl.match(cu) ? pu : Eu)({
        currentConfig: e,
        instaTitle: t,
        pageDocument: u.document,
        pinmarkletDebugger: n,
        pinmarkletLogger: i
      });
    }
    const Cu = /^https?:\/\/m\.youtube\.com\//,
      hu = /^(https?:|)\/\/(www|m)\.youtube\.com\/watch?/;
    function bu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      return e.currentUrl.match(Cu)
        ? !![...u.document.getElementsByTagName("A")]
            .map((t) => {
              var r, a;
              if ((r = t.href) != null && r.match(hu)) {
                const s = (a = t.href.split("v=")[1]) == null ? void 0 : a.split("&")[0].split("#")[0];
                return s
                  ? (n(`found a YouTube video: ${t.href}`),
                    b({
                      currentConfig: e,
                      pinmarkletDebugger: n,
                      pinmarkletLogger: i,
                      preventImagelessPinCreation: !0,
                      src: T(s),
                      modifiers: { description: u.document.title, multimedia: !0, url: S(s) }
                    }),
                    !0)
                  : !1;
              }
              return !1;
            })
            .find(Boolean)
        : !1;
    }
    const Du = /^https?:\/\/(www|m)\.youtube\.com\/watch?/;
    function Bu({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      var t;
      if (!e.currentUrl.match(Du)) return !1;
      const r = (t = e.currentUrl.split("v=")[1]) == null ? void 0 : t.split("&")[0].split("#")[0];
      return r
        ? (n(`Found a YouTube page: ${e.currentUrl}`),
          b({
            currentConfig: e,
            pinmarkletDebugger: n,
            pinmarkletLogger: i,
            preventImagelessPinCreation: !0,
            src: T(r),
            modifiers: { description: u.document.title, multimedia: !0, url: S(r) }
          }),
          !0)
        : !1;
    }
    function ku({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      return !![nu, iu, fu, Bu, bu, gu].find((t) => t({ browserWindow: u, currentConfig: e, pinmarkletDebugger: n, pinmarkletLogger: i }));
    }
    function wu({ browserWindow: u, currentConfig: e, onResult: n, pageDocument: i, pinmarkletDebugger: t, pinmarkletLogger: r }) {
      t("Initing"),
        (e.data.url = e.currentUrl),
        ku({ browserWindow: u, currentConfig: e, pinmarkletDebugger: t, pinmarkletLogger: r }) ||
          (Je({ browserWindow: u, currentConfig: e, pinmarkletDebugger: t, pinmarkletLogger: r }),
          e.override.runDefaultScraping && Ze({ browserWindow: u, currentConfig: e, pinmarkletDebugger: t, pinmarkletLogger: r }),
          e.override.link || Qe({ currentConfig: e, pageDocument: i }));
      const a = Ue({ browserWindow: u, currentConfig: e, onResult: n, pinmarkletDebugger: t, pinmarkletLogger: r });
      u.setTimeout(a, 100);
    }
    function xu(u) {
      return u.reduce((e, n) => {
        const i = n.k.split(":");
        let t = e;
        return (
          i.forEach((r) => {
            typeof t[r] == "undefined" && (t[r] = {}), (t = t[r]);
          }),
          typeof t["~"] == "undefined"
            ? (t["~"] = n.v)
            : Array.isArray(t["~"])
            ? t["~"].push(n.v)
            : typeof t["~"] == "string" && ((t["~"] = [t["~"]]), t["~"].push(n.v)),
          e
        );
      }, {});
    }
    function X({ obj: u, parentObj: e, parentKey: n }) {
      for (const i in u)
        typeof u[i] == "object"
          ? typeof u[i][0] == "string"
            ? (e[n] = u[i])
            : X({ obj: u[i], parentObj: u, parentKey: i })
          : Object.keys(u).length === 1 && (e[n] = u[i]);
      return u;
    }
    function yu({ currentConfig: u, pageDocument: e, pinmarkletDebugger: n, pinmarkletLogger: i }) {
      var t, r, a, s, l, m, f;
      const p = e.getElementsByTagName("META"),
        c = [],
        E = [...p].find((d) => {
          const h = d.getAttribute("content");
          if (!h) return !1;
          const w = d.getAttribute("property") || d.getAttribute("name");
          return w
            ? w.toLowerCase() === "pinterest" && h.toLowerCase() === "nopin"
              ? d.getAttribute("description") || !0
              : (d.getAttribute("data-pin-nopin") || c.push({ k: w, v: h }), !1)
            : !1;
        });
      if (E) return E.getAttribute("description") || !0;
      c.sort((d, h) => (d.k > h.k ? 1 : d.k < h.k ? -1 : 0));
      const g = X({ obj: xu(c), parentObj: null, parentKey: null });
      (u.data.meta = g), n("meta data found"), n(g);
      const o = {};
      if (g.pin) {
        const d = g.pin;
        n("data-pin found"),
          d.url && (n("data-pin-url found"), (o.pinUrl = d.url), (u.override.link = !0)),
          d.description && (n("data-pin-description found"), (o.pinDescription = d.description)),
          d.title && (n("data-pin-title found"), (o.pinTitle = d.title)),
          d.id && (n("data-pin-id found"), (o.pinId = d.id), (u.override.allowImagelessPinCreation = !1)),
          d.media &&
            (n("data-pin-media found"),
            (o.pinMedia = d.media),
            n("loading data-pin-media"),
            b({ currentConfig: u, pinmarkletDebugger: n, pinmarkletLogger: i, src: d.media, modifiers: o }));
      }
      if (
        ((t = g.instapp) != null &&
          t.owner_user_id &&
          (s = (a = (r = g.al) == null ? void 0 : r.ios) == null ? void 0 : a.url) != null &&
          s.match("=") &&
          ((u.insta = {
            owner: g.instapp.owner_user_id,
            id: (f = (m = (l = g.al) == null ? void 0 : l.ios) == null ? void 0 : m.url) == null ? void 0 : f.split("=")[1]
          }),
          g.instapp.hashtags && (u.insta.hashtags = g.instapp.hashtags.toString())),
        u.data.meta.og)
      ) {
        const d = u.data.meta.og;
        if (typeof d.image != "string") {
          const h = Array.isArray(d.image) ? d.image[0] : d.image;
          typeof h != "string" && typeof (h == null ? void 0 : h.secure_url) == "string" && (u.data.meta.og.image = h.secure_url);
        }
        Array.isArray(d.description) && (u.data.meta.og.description = d.description[0]),
          Array.isArray(d.title) && (u.data.meta.og.title = d.title[0]),
          Array.isArray(d.url) && (u.data.meta.og.url = d.url[0]),
          Array.isArray(d.image) && (u.data.meta.og.image = d.image[0]);
      }
      return !1;
    }
    function Fu({ currentConfig: u, pageDocument: e, pinmarkletDebugger: n }) {
      [...e.getElementsByTagName("SCRIPT")].forEach((i) => {
        if (i.type === "application/ld+json") {
          const { innerText: t } = i;
          if (t)
            try {
              u.data.script.push(JSON.parse(t));
            } catch (r) {
              n("Could not parse linked data."), n(t);
            }
        }
      });
    }
    const Au = ["pinMethod", "render", "via", "guid", "pinbox", "quiet", "quality", "noCancel", "noHeader", "force"];
    function vu({ currentConfig: u, scriptTag: e }) {
      Au.forEach((n) => {
        const i = O({ element: e, attribute: n });
        i && (u.config[n] = i);
      });
    }
    function Z(u, e) {
      if (!1 === "true" && e.console) {
        const n = typeof u == "string" ? u : JSON.stringify(u);
        e.console.log
          ? e.console.log(
              `%cPML%c ${n}`,
              "color:#fff;background:#f59802;font-weight:bold;border-radius:2px;display:inline-block;padding:0 4px;",
              ""
            )
          : e.console.table && e.console.table(u);
      }
    }
    const Pu = /\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/;
    function Su(u) {
      return [...u.getElementsByTagName("SCRIPT")].reverse().find((e) => e.src.match(Pu));
    }
    var Lu = Object.defineProperty,
      Iu = Object.defineProperties,
      ju = Object.getOwnPropertyDescriptors,
      Q = Object.getOwnPropertySymbols,
      Mu = Object.prototype.hasOwnProperty,
      Ou = Object.prototype.propertyIsEnumerable,
      ee = (u, e, n) => (e in u ? Lu(u, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (u[e] = n)),
      Tu = (u, e) => {
        for (var n in e || (e = {})) Mu.call(e, n) && ee(u, n, e[n]);
        if (Q) for (var n of Q(e)) Ou.call(e, n) && ee(u, n, e[n]);
        return u;
      },
      zu = (u, e) => Iu(u, ju(e));
    function Nu({ client: u, currentUrl: e, loggingData: n, version: i }) {
      const t = ["type=pinmarklet", `v=${i}`];
      return (
        Object.entries(zu(Tu({}, n), { client: u, url: e })).forEach(([r, a]) => {
          r !== "extras" &&
            (typeof a == "string" || typeof a == "number") &&
            t.push(`pm${r.charAt(0).toUpperCase() + r.slice(1)}=${encodeURIComponent(a)}`);
        }),
        n.extras &&
          Object.entries(n.extras).forEach(([r, a]) => {
            a && t.push(`${r}=${a}`);
          }),
        `?${t.join("&")}`
      );
    }
    const Wu = "https://log.pinterest.com/";
    function ue({ data: u, browserWindow: e }) {
      const n = Nu({ loggingData: u, version: A.version, client: L.client, currentUrl: L.currentUrl });
      (new Image().src = Wu + n), Z("Logging: " + n, e);
    }
    const Ru = [/password/gi];
    function Uu(u) {
      const [e, n] = u.split("#")[0].split("?");
      let i = "?",
        t = "";
      return (
        n &&
          (t = n.split("&").reduce((r, a) => {
            const [s, l] = a.split("=");
            return s && l && !Ru.find((m) => s.match(m)) && ((r += `${i}${s}=${l}`), (i = "&")), r;
          }, "")),
        e + t
      );
    }
    function _u({ browserWindow: u, currentConfig: e }) {
      const [n, i] = u.navigator.language
          .toLowerCase()
          .replace(/[^a-z0-9]/g, " ")
          .trim()
          .replace(/\s+/g, " ")
          .split(" ")
          .filter((r) => r.length === 2),
        t = i ? `${n}-${i}` : void 0;
      t && F[t] ? (e.lang = t) : F[n] && (e.lang = n), (e.errorMessages = F[e.lang]);
    }
    function $u({ browserWindow: u, global: e, onResult: n }) {
      const i = (r) => Z(r, u),
        t = (r) => ue({ data: r, browserWindow: u });
      i("[Pinmarklet] init()"), i("My key: " + A.id);
      try {
        const { document: r, navigator: a } = u;
        if (r.body.getAttribute(I)) return null;
        if (((e.currentUrl = Uu(r.URL)), a.userAgent.match(" MSIE "))) return ue({ data: { reason: "oldIE" }, browserWindow: u }), null;
        const s = Su(r);
        if (
          (s && (vu({ currentConfig: e, scriptTag: s }), s.parentNode && s.parentNode.removeChild(s)),
          e.extended ||
            (me({ browserWindow: u, currentConfig: e, pinmarkletDebugger: i }),
            Ee({ browserWindow: u, currentConfig: e, pinmarkletDebugger: i }),
            fe({ browserWindow: u, currentConfig: e, pinmarkletDebugger: i })),
          typeof DATA_RESULTS_KEY == "string" && ((e.config.share = DATA_RESULTS_KEY), (e.client = "ios_share")),
          t({ reason: "init" }),
          _u({ browserWindow: u, currentConfig: e }),
          !W({ currentConfig: e, currentUrl: e.currentUrl, pinmarkletDebugger: i, pinmarkletLogger: t }))
        )
          return (
            t({ reason: "domain_not_allowed" }),
            (e.data.close = e.errorMessages.noPinDomain),
            P({ currentConfig: e, browserWindow: u }),
            null
          );
        Fu({ currentConfig: e, pageDocument: r, pinmarkletDebugger: i });
        const l = yu({ currentConfig: e, pageDocument: r, pinmarkletDebugger: i, pinmarkletLogger: t });
        if (l)
          return (
            t({ reason: "found_nopin_meta" }),
            l === !0 ? (e.data.close = e.errorMessages.noPinMeta) : (e.data.close = l),
            P({ currentConfig: e, browserWindow: u }),
            null
          );
        const m = Date.now(),
          f = () => wu({ browserWindow: u, currentConfig: e, onResult: n, pageDocument: r, pinmarkletDebugger: i, pinmarkletLogger: t });
        e.holdForReadyStateComplete
          ? (i("Holding for readystate complete"), z({ browserWindow: u, onReady: f, scanStart: m }))
          : (i("Ignoring readystate"), f());
      } catch (r) {
        i("Uncaught error!"), i(r);
        const a = r instanceof Error ? r.message : "Unknown Error";
        t({ reason: "uncaught_error", extras: { errorMessage: a } });
      }
    }
    $u({ browserWindow: window, global: L });
  })();
})();
